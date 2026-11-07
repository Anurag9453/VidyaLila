import { NextResponse } from "next/server";
import crypto from "crypto";
import { supabaseAdmin } from "@/lib/supabase-admin";

const PLAN_CREDITS = {
  ONE_DAY: { amountInr: 49, daily: 2, comp: 0 },
  WEEKLY: { amountInr: 149, daily: 7, comp: 1 },
  MONTHLY: { amountInr: 499, daily: 30, comp: 4 },
} as const;

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("x-razorpay-signature") || "";
    const webhookSecret = (
      process.env.RAZORPAY_WEBHOOK_SECRET ||
      process.env.RAZORPAY_KEY_SECRET ||
      ""
    ).trim();

    if (
      webhookSecret &&
      !webhookSecret.includes("your_razorpay_secret") &&
      signature
    ) {
      const expectedSig = crypto
        .createHmac("sha256", webhookSecret)
        .update(rawBody)
        .digest("hex");

      const expectedBuf = Buffer.from(expectedSig);
      const actualBuf = Buffer.from(signature);
      if (
        expectedBuf.length !== actualBuf.length ||
        !crypto.timingSafeEqual(expectedBuf, actualBuf)
      ) {
        return NextResponse.json(
          { ok: false, error: "Invalid webhook signature" },
          { status: 400 }
        );
      }
    }

    const payload = JSON.parse(rawBody);
    const event: string = payload?.event || "";
    const paymentEntity = payload?.payload?.payment?.entity;

    if (!paymentEntity) {
      return NextResponse.json({ ok: true, ignored: true });
    }

    const orderId: string = paymentEntity.order_id || "";
    const paymentId: string = paymentEntity.id || "";
    const notes = paymentEntity.notes || {};
    const userId: string = notes.userId || "";
    const packagePlan = (notes.packagePlan || "WEEKLY") as
      | "ONE_DAY"
      | "WEEKLY"
      | "MONTHLY";
    const phone: string = (
      notes.phone ||
      paymentEntity.contact ||
      ""
    )
      .replace(/[^0-9]/g, "")
      .slice(-10);

    // 1. Handle payment.captured or order.paid
    if (event === "payment.captured" || event === "order.paid") {
      if (!orderId) return NextResponse.json({ ok: true });

      const { data: existingOrder } = await supabaseAdmin
        .from("payment_orders")
        .select("*")
        .eq("razorpay_order_id", orderId)
        .maybeSingle();

      // Already processed by client verify call -> skip double credit
      if (existingOrder?.status === "paid") {
        return NextResponse.json({ ok: true, alreadyPaid: true });
      }

      const credits = PLAN_CREDITS[packagePlan] || PLAN_CREDITS.WEEKLY;
      const targetUserId = existingOrder?.user_id || userId;

      if (existingOrder) {
        await supabaseAdmin
          .from("payment_orders")
          .update({
            status: "paid",
            razorpay_payment_id: paymentId,
            razorpay_signature: signature || "webhook_verified",
            updated_at: new Date().toISOString(),
          })
          .eq("razorpay_order_id", orderId);
      }

      if (targetUserId && !targetUserId.startsWith("local-")) {
        const { data: prof } = await supabaseAdmin
          .from("profiles")
          .select("daily_passes_remaining, competition_passes_remaining")
          .eq("id", targetUserId)
          .maybeSingle();

        const nextDaily = (prof?.daily_passes_remaining || 0) + credits.daily;
        const nextComp =
          (prof?.competition_passes_remaining || 0) + credits.comp;

        await supabaseAdmin
          .from("profiles")
          .update({
            has_pro_pass: true,
            pro_pass_plan: packagePlan,
            daily_passes_remaining: nextDaily,
            competition_passes_remaining: nextComp,
            ...(phone.length >= 10 ? { phone } : {}),
          })
          .eq("id", targetUserId);
      }

      return NextResponse.json({ ok: true, event, status: "credited" });
    }

    // 2. Handle payment.failed (Asynchronous bank/UPI failure -> Hot Lead Recovery)
    if (event === "payment.failed") {
      const errorDesc =
        paymentEntity.error_description ||
        paymentEntity.error_reason ||
        "Payment failed at bank/UPI gateway";
      const errorCode = paymentEntity.error_code || "WEBHOOK_PAYMENT_FAILED";

      if (orderId) {
        await supabaseAdmin
          .from("payment_orders")
          .update({
            status: "failed",
            razorpay_payment_id: paymentId || null,
            failure_reason: errorDesc,
            failure_code: errorCode,
            phone: phone || null,
            contact_status: "PENDING_CONTACT",
            updated_at: new Date().toISOString(),
          })
          .eq("razorpay_order_id", orderId);
      }

      return NextResponse.json({ ok: true, event, status: "failure_logged" });
    }

    return NextResponse.json({ ok: true, event });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Webhook error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
