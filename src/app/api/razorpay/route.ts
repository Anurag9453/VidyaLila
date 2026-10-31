import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amountInr = 149, orderType = "MONTHLY_PASS", contestId = null } = body;

    const razorpayKeyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;

    // If Razorpay credentials are configured in Vercel/env, create a live Razorpay order
    if (razorpayKeyId && razorpayKeySecret && !razorpayKeyId.includes("your_key")) {
      const auth = Buffer.from(`${razorpayKeyId}:${razorpayKeySecret}`).toString("base64");
      const response = await fetch("https://api.razorpay.com/v1/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify({
          amount: amountInr * 100, // Razorpay expects amount in paise
          currency: "INR",
          receipt: `vidyalila_${orderType}_${Date.now()}`,
          notes: {
            orderType,
            contestId: contestId || "ALL",
          },
        }),
      });

      const orderData = await response.json();
      return NextResponse.json({
        success: true,
        mode: "LIVE_RAZORPAY",
        order: orderData,
      });
    }

    // Fallback instant demo order when testing without Razorpay keys
    return NextResponse.json({
      success: true,
      mode: "DEMO_SIMULATION",
      order: {
        id: `order_demo_${Date.now()}`,
        amount: amountInr * 100,
        currency: "INR",
        orderType,
        contestId,
      },
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: (err as Error).message },
      { status: 500 }
    );
  }
}
