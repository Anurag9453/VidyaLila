import { NextResponse } from "next/server";
import crypto from "crypto";
import { supabaseAdmin } from "@/lib/supabase-admin";

const PLAN_CREDITS = {
  ONE_DAY: { amountInr: 49, daily: 2, comp: 0 },
  WEEKLY: { amountInr: 149, daily: 7, comp: 1 },
  MONTHLY: { amountInr: 499, daily: 30, comp: 4 },
} as const;

function isRealRazorpaySecret(val?: string): boolean {
  if (!val) return false;
  const trimmed = val.trim();
  return (
    trimmed.length >= 8 &&
    !trimmed.includes("your_razorpay_secret") &&
    !trimmed.includes("your_secret")
  );
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      userId,
      packagePlan,
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
      phone,
      userName,
      userEmail,
    } = body as {
      userId?: string;
      packagePlan: "ONE_DAY" | "WEEKLY" | "MONTHLY";
      razorpayOrderId: string;
      razorpayPaymentId?: string;
      razorpaySignature?: string;
      phone?: string;
      userName?: string;
      userEmail?: string;
    };

    if (!packagePlan || !PLAN_CREDITS[packagePlan]) {
      return NextResponse.json(
        { ok: false, error: "Invalid or missing package plan" },
        { status: 400 }
      );
    }

    if (!razorpayOrderId) {
      return NextResponse.json(
        { ok: false, error: "Missing order ID" },
        { status: 400 }
      );
    }

    const credits = PLAN_CREDITS[packagePlan];
    const rzpSecret = (process.env.RAZORPAY_KEY_SECRET || "").trim();

    // 1. Cryptographic HMAC-SHA256 Signature Verification (Mandatory when real Razorpay secret is configured)
    if (isRealRazorpaySecret(rzpSecret)) {
      if (!razorpayPaymentId || !razorpaySignature) {
        return NextResponse.json(
          {
            ok: false,
            error: "Missing payment ID or signature for Razorpay verification",
          },
          { status: 400 }
        );
      }

      const expectedSig = crypto
        .createHmac("sha256", rzpSecret)
        .update(`${razorpayOrderId}|${razorpayPaymentId}`)
        .digest("hex");

      const expectedBuffer = Buffer.from(expectedSig);
      const actualBuffer = Buffer.from(razorpaySignature);

      if (
        expectedBuffer.length !== actualBuffer.length ||
        !crypto.timingSafeEqual(expectedBuffer, actualBuffer)
      ) {
        return NextResponse.json(
          { ok: false, error: "Invalid Razorpay payment signature" },
          { status: 400 }
        );
      }
    }

    // 2. Server-side Order and Wallet Update in Supabase
    if (userId && !userId.startsWith("local-")) {
      const { data: order } = await supabaseAdmin
        .from("payment_orders")
        .select("*")
        .eq("razorpay_order_id", razorpayOrderId)
        .maybeSingle();

      // If order was already processed (e.g. by webhook), return success idempotently without double-granting
      if (order && order.status === "paid") {
        const { data: currentProfile } = await supabaseAdmin
          .from("profiles")
          .select("daily_passes_remaining, competition_passes_remaining")
          .eq("id", userId)
          .maybeSingle();

        return NextResponse.json({
          ok: true,
          alreadyProcessed: true,
          paymentId: order.razorpay_payment_id || razorpayPaymentId,
          orderId: razorpayOrderId,
          dailyPassesRemaining: currentProfile?.daily_passes_remaining ?? credits.daily,
          competitionPassesRemaining:
            currentProfile?.competition_passes_remaining ?? credits.comp,
        });
      }

      if (order) {
        if (order.user_id && order.user_id !== userId) {
          return NextResponse.json(
            { ok: false, error: "User ID does not match order owner" },
            { status: 403 }
          );
        }

        if (order.amount_inr && order.amount_inr !== credits.amountInr) {
          return NextResponse.json(
            {
              ok: false,
              error: `Payment amount mismatch: expected ₹${credits.amountInr}, recorded ₹${order.amount_inr}`,
            },
            { status: 400 }
          );
        }

        await supabaseAdmin
          .from("payment_orders")
          .update({
            razorpay_payment_id: razorpayPaymentId || `pay_vl_${Date.now()}`,
            razorpay_signature: razorpaySignature || "verified_signature",
            status: "paid",
            updated_at: new Date().toISOString(),
          })
          .eq("razorpay_order_id", razorpayOrderId);
      } else {
        // Insert paid order record if create-order DB insert had been skipped
        await supabaseAdmin.from("payment_orders").insert({
          user_id: userId,
          package_plan: packagePlan,
          daily_passes_granted: credits.daily,
          competition_passes_granted: credits.comp,
          amount_inr: credits.amountInr,
          razorpay_order_id: razorpayOrderId,
          razorpay_payment_id: razorpayPaymentId || `pay_vl_${Date.now()}`,
          razorpay_signature: razorpaySignature || "verified_signature",
          status: "paid",
          phone: phone ? phone.replace(/[^0-9]/g, "").slice(-10) : null,
          user_name: userName || null,
          user_email: userEmail || null,
        });
      }

      // Fetch current profile and increment pass credits on server
      const { data: currentProfile } = await supabaseAdmin
        .from("profiles")
        .select("daily_passes_remaining, competition_passes_remaining")
        .eq("id", userId)
        .maybeSingle();

      const nextDaily =
        (currentProfile?.daily_passes_remaining || 0) + credits.daily;
      const nextComp =
        (currentProfile?.competition_passes_remaining || 0) + credits.comp;

      const cleanPhone = (phone || "").replace(/[^0-9]/g, "").slice(-10);

      await supabaseAdmin
        .from("profiles")
        .update({
          has_pro_pass: true,
          pro_pass_plan: packagePlan,
          daily_passes_remaining: nextDaily,
          competition_passes_remaining: nextComp,
          ...(cleanPhone.length >= 10 ? { phone: cleanPhone } : {}),
        })
        .eq("id", userId);

      return NextResponse.json({
        ok: true,
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
        dailyPassesRemaining: nextDaily,
        competitionPassesRemaining: nextComp,
      });
    }

    return NextResponse.json({
      ok: true,
      orderId: razorpayOrderId,
      paymentId: razorpayPaymentId,
      dailyPassesGranted: credits.daily,
      competitionPassesGranted: credits.comp,
    });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Payment verification failed";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
