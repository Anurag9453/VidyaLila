import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export type SupportedCurrency = "INR" | "USD" | "GBP" | "EUR" | "AED" | "SGD";

const PLAN_CONFIG = {
  ONE_DAY: {
    amountInr: 199,
    prices: {
      INR: { display: 199, subunits: 19900 },
      USD: { display: 4.99, subunits: 499 },
      GBP: { display: 3.99, subunits: 399 },
      EUR: { display: 4.49, subunits: 449 },
      AED: { display: 18, subunits: 1800 },
      SGD: { display: 6.99, subunits: 699 },
    },
    dailyPasses: 20,
    compPasses: 4,
    label: "🪙 Starter Pack (400 Vidya Credits • 4 Chapters)",
  },
  WEEKLY: {
    amountInr: 499,
    prices: {
      INR: { display: 499, subunits: 49900 },
      USD: { display: 9.99, subunits: 999 },
      GBP: { display: 7.99, subunits: 799 },
      EUR: { display: 8.99, subunits: 899 },
      AED: { display: 35, subunits: 3500 },
      SGD: { display: 12.99, subunits: 1299 },
    },
    dailyPasses: 60,
    compPasses: 12,
    label: "📘 Subject Pack (1,200 Vidya Credits • 12 Chapters)",
  },
  MONTHLY: {
    amountInr: 999,
    prices: {
      INR: { display: 999, subunits: 99900 },
      USD: { display: 19.99, subunits: 1999 },
      GBP: { display: 15.99, subunits: 1599 },
      EUR: { display: 17.99, subunits: 1799 },
      AED: { display: 69, subunits: 6900 },
      SGD: { display: 25.99, subunits: 2599 },
    },
    dailyPasses: 130,
    compPasses: 26,
    label: "💎 Scholar Pack (2,600 Vidya Credits • 26 Chapters)",
  },
  COMPREHENSIVE: {
    amountInr: 1999,
    prices: {
      INR: { display: 1999, subunits: 199900 },
      USD: { display: 34.99, subunits: 3499 },
      GBP: { display: 27.99, subunits: 2799 },
      EUR: { display: 31.99, subunits: 3199 },
      AED: { display: 125, subunits: 12500 },
      SGD: { display: 45.99, subunits: 4599 },
    },
    dailyPasses: 275,
    compPasses: 55,
    label: "👑 Comprehensive Full-Class Pack (All ~45 Class Chapters + 1,000 Test Credits)",
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
      currency = "INR",
      phone,
      userName,
      userUsername,
      userEmail,
      contestTitle,
    } = body as {
      userId?: string;
      packagePlan: "ONE_DAY" | "WEEKLY" | "MONTHLY" | "COMPREHENSIVE";
      currency?: SupportedCurrency;
      phone?: string;
      userName?: string;
      userUsername?: string;
      userEmail?: string;
      contestTitle?: string;
    };

    const config = PLAN_CONFIG[packagePlan] || PLAN_CONFIG.WEEKLY;
    const validCurrency: SupportedCurrency =
      currency && currency in config.prices ? currency : "INR";
    const priceInfo = config.prices[validCurrency];

    const dbSafePlan =
      packagePlan === "COMPREHENSIVE" ? "MONTHLY" : packagePlan;
    const cleanPhone = (phone || "").replace(/[^0-9+]/g, "").slice(0, 16);
    const amountSubunits = priceInfo.subunits;
    const receiptId = `rcpt_vl_${Date.now()}_${Math.floor(100 + Math.random() * 900)}`;

    const keyId = (
      process.env.RAZORPAY_KEY_ID ||
      process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ||
      ""
    ).trim();
    const keySecret = (process.env.RAZORPAY_KEY_SECRET || "").trim();

    let orderId = `order_vl_${Date.now()}_${Math.floor(1000 + Math.random() * 9000)}`;
    let gatewayMode: "RAZORPAY" | "DEMO" = "DEMO";
    let resolvedCurrency: SupportedCurrency = validCurrency;
    let resolvedSubunits = amountSubunits;

    // 1. If real Razorpay Test/Live credentials are configured, create an official global order via Razorpay Orders API
    if (isRealRazorpayKey(keyId) && isRealRazorpaySecret(keySecret)) {
      const basicAuth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");

      const createRzpOrder = async (curr: SupportedCurrency, subunits: number) => {
        return fetch("https://api.razorpay.com/v1/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${basicAuth}`,
          },
          body: JSON.stringify({
            amount: subunits,
            currency: curr,
            receipt: receiptId,
            notes: {
              userId: userId || "guest",
              packagePlan,
              packageLabel: config.label,
              requestedCurrency: validCurrency,
              phone: cleanPhone || "",
              userName: userName || "",
              userUsername: userUsername || "",
              userEmail: userEmail || "",
              contestTitle: contestTitle || "",
            },
          }),
        });
      };

      let rzpResponse = await createRzpOrder(validCurrency, amountSubunits);
      let rzpData = await rzpResponse.json();

      // If international currency is not yet enabled on the merchant's test key, fallback seamlessly to INR so international cards still work
      if ((!rzpResponse.ok || !rzpData?.id) && validCurrency !== "INR") {
        rzpResponse = await createRzpOrder("INR", config.prices.INR.subunits);
        rzpData = await rzpResponse.json();
        if (rzpResponse.ok && rzpData?.id) {
          resolvedCurrency = "INR";
          resolvedSubunits = config.prices.INR.subunits;
        }
      }

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
          package_plan: dbSafePlan,
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

        // Persist phone number in student's profile if provided
        if (cleanPhone.length >= 7) {
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
      displayAmount: priceInfo.display,
      amountPaise: resolvedSubunits,
      currency: resolvedCurrency,
      requestedCurrency: validCurrency,
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
