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
    const body = await req.json();
    const {
      userId,
      packagePlan,
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
    } = body as {
      userId?: string;
      packagePlan: "ONE_DAY" | "WEEKLY" | "MONTHLY";
      razorpayOrderId: string;
      razorpayPaymentId?: string;
      razorpaySignature?: string;
    };

    const credits = PLAN_CREDITS[packagePlan] || PLAN_CREDITS.WEEKLY;

    // If live Razorpay secret is configured, verify HMAC SHA256 signature
    const rzpSecret = process.env.RAZORPAY_KEY_SECRET;
    if (rzpSecret && razorpayPaymentId && razorpaySignature) {
      const expectedSig = crypto
        .createHmac("sha256", rzpSecret)
        .update(`${razorpayOrderId}|${razorpayPaymentId}`)
        .digest("hex");

      if (expectedSig !== razorpaySignature) {
        return NextResponse.json(
          { ok: false, error: "Invalid Razorpay payment signature" },
          { status: 400 }
        );
      }
    }

    // Update Supabase payment_orders and student profile wallet if userId is a real UUID
    if (userId && !userId.startsWith("local-")) {
      await supabaseAdmin
        .from("payment_orders")
        .update({
          razorpay_payment_id: razorpayPaymentId || `pay_vl_${Date.now()}`,
          razorpay_signature: razorpaySignature || "verified_demo_signature",
          status: "paid",
        })
        .eq("razorpay_order_id", razorpayOrderId);

      const { data: currentProfile } = await supabaseAdmin
        .from("profiles")
        .select("daily_passes_remaining, competition_passes_remaining")
        .eq("id", userId)
        .single();

      const nextDaily =
        (currentProfile?.daily_passes_remaining || 0) + credits.daily;
      const nextComp =
        (currentProfile?.competition_passes_remaining || 0) + credits.comp;

      await supabaseAdmin
        .from("profiles")
        .update({
          has_pro_pass: true,
          pro_pass_plan: packagePlan,
          daily_passes_remaining: nextDaily,
          competition_passes_remaining: nextComp,
        })
        .eq("id", userId);

      return NextResponse.json({
        ok: true,
        dailyPassesRemaining: nextDaily,
        competitionPassesRemaining: nextComp,
      });
    }

    return NextResponse.json({
      ok: true,
      dailyPassesGranted: credits.daily,
      competitionPassesGranted: credits.comp,
    });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Payment verification failed";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
