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
    const rzpSecret = process.env.RAZORPAY_KEY_SECRET;

    // 1. Signature Verification:
    // When live Razorpay secret is present or running in production, real gateway signature is mandatory.
    if (rzpSecret) {
      if (!razorpayPaymentId || !razorpaySignature) {
        return NextResponse.json(
          { ok: false, error: "Missing payment ID or signature for live verification" },
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
    } else if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        { ok: false, error: "Payment gateway is not configured on server" },
        { status: 500 }
      );
    }

    // 2. Server-side Order and Amount Verification in Supabase:
    if (userId && !userId.startsWith("local-")) {
      const { data: order, error: orderErr } = await supabaseAdmin
        .from("payment_orders")
        .select("*")
        .eq("razorpay_order_id", razorpayOrderId)
        .single();

      if (orderErr || !order) {
        return NextResponse.json(
          { ok: false, error: "Payment order does not exist in records" },
          { status: 404 }
        );
      }

      // Prevent replay attack (granting passes twice for same payment)
      if (order.status === "paid") {
        return NextResponse.json(
          { ok: false, error: "Payment order has already been verified and processed" },
          { status: 400 }
        );
      }

      // Verify the order user matches
      if (order.user_id !== userId) {
        return NextResponse.json(
          { ok: false, error: "User ID does not match order owner" },
          { status: 403 }
        );
      }

      // Strict amount check: ensure the order record matches the requested plan's expected amount
      if (order.amount_inr !== credits.amountInr) {
        return NextResponse.json(
          {
            ok: false,
            error: `Payment amount mismatch: expected ₹${credits.amountInr}, recorded ₹${order.amount_inr}`,
          },
          { status: 400 }
        );
      }

      // Mark order as paid
      await supabaseAdmin
        .from("payment_orders")
        .update({
          razorpay_payment_id: razorpayPaymentId || `pay_vl_${Date.now()}`,
          razorpay_signature: razorpaySignature || "verified_demo_signature",
          status: "paid",
        })
        .eq("razorpay_order_id", razorpayOrderId);

      // Fetch current profile and update wallet on server
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
