import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

const PLAN_CONFIG = {
  ONE_DAY: {
    amountInr: 49,
    dailyPasses: 2,
    compPasses: 0,
    label: "⚡ Basic Pass (Daily • 2 Quizzes)",
  },
  WEEKLY: {
    amountInr: 149,
    dailyPasses: 7,
    compPasses: 1,
    label: "💎 VIP Pass (Weekly • 8 Quizzes)",
  },
  MONTHLY: {
    amountInr: 499,
    dailyPasses: 30,
    compPasses: 4,
    label: "👑 Pro Pass (Monthly • 34 Quizzes)",
  },
} as const;

function isRealRazorpayKey(val?: string): boolean {
  if (!val) return false;
  const trimmed = val.trim();
  if (
    !trimmed ||
    trimmed.includes("your_key") ||
    trimmed.includes("your_razorpay") ||
    trimmed === "rzp_test_"
  ) {
    return false;
  }
  return trimmed.startsWith("rzp_test_") || trimmed.startsWith("rzp_live_");
}

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
      phone,
      userName,
      userUsername,
      userEmail,
      contestTitle,
    } = body as {
      userId?: string;
      packagePlan: "ONE_DAY" | "WEEKLY" | "MONTHLY";
      phone?: string;
      userName?: string;
      userUsername?: string;
      userEmail?: string;
      contestTitle?: string;
    };

    const config = PLAN_CONFIG[packagePlan] || PLAN_CONFIG.WEEKLY;
    const cleanPhone = (phone || "").replace(/[^0-9]/g, "").slice(-10);
    const amountPaise = config.amountInr * 100;
    const receiptId = `rcpt_vl_${Date.now()}_${Math.floor(100 + Math.random() * 900)}`;

    const keyId = (
      process.env.RAZORPAY_KEY_ID ||
      process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ||
      ""
    ).trim();
    const keySecret = (process.env.RAZORPAY_KEY_SECRET || "").trim();

    let orderId = `order_vl_${Date.now()}_${Math.floor(1000 + Math.random() * 9000)}`;
    let gatewayMode: "RAZORPAY" | "DEMO" = "DEMO";

    // 1. If real Razorpay Test/Live credentials are configured, create an official order via Razorpay Orders API
    if (isRealRazorpayKey(keyId) && isRealRazorpaySecret(keySecret)) {
      const basicAuth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");

      const rzpResponse = await fetch("https://api.razorpay.com/v1/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${basicAuth}`,
        },
        body: JSON.stringify({
          amount: amountPaise,
          currency: "INR",
          receipt: receiptId,
          notes: {
            userId: userId || "guest",
            packagePlan,
            packageLabel: config.label,
            phone: cleanPhone || "",
            userName: userName || "",
            userUsername: userUsername || "",
            userEmail: userEmail || "",
            contestTitle: contestTitle || "",
          },
        }),
      });

      const rzpData = await rzpResponse.json();

      if (!rzpResponse.ok || !rzpData?.id) {
        const errDesc =
          rzpData?.error?.description ||
          rzpData?.error?.reason ||
          "Razorpay order creation failed. Please check RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET.";
        console.error("[Razorpay Create Order Error]:", rzpData);
        return NextResponse.json(
          {
            ok: false,
            error: errDesc,
            code: rzpData?.error?.code || "RAZORPAY_ORDER_ERROR",
          },
          { status: rzpResponse.status || 500 }
        );
      }

      orderId = rzpData.id; // Official Razorpay order_id (e.g. "order_Pxyz123456")
      gatewayMode = "RAZORPAY";
    }

    // 2. Log the created order in Supabase payment_orders
    if (userId && !userId.startsWith("local-")) {
      try {
        await supabaseAdmin.from("payment_orders").insert({
          user_id: userId,
          package_plan: packagePlan,
          daily_passes_granted: config.dailyPasses,
          competition_passes_granted: config.compPasses,
          amount_inr: config.amountInr,
          razorpay_order_id: orderId,
          status: "created",
          phone: cleanPhone || null,
          user_name: userName || null,
          user_email: userEmail || null,
          contact_status: "PENDING_CONTACT",
        });

        // Persist phone number in student's profile for future checkouts
        if (cleanPhone.length >= 10) {
          await supabaseAdmin
            .from("profiles")
            .update({ phone: cleanPhone })
            .eq("id", userId);
        }
      } catch (dbErr) {
        console.warn("Supabase payment_orders insert warning:", dbErr);
      }
    }

    return NextResponse.json({
      ok: true,
      mode: gatewayMode,
      razorpayKeyId: gatewayMode === "RAZORPAY" ? keyId : null,
      isTestKey: keyId.startsWith("rzp_test_"),
      orderId,
      receiptId,
      amountInr: config.amountInr,
      amountPaise,
      currency: "INR",
      dailyPassesGranted: config.dailyPasses,
      competitionPassesGranted: config.compPasses,
      packageLabel: config.label,
    });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Failed to create payment order";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
