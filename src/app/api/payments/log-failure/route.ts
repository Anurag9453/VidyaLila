import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      userId,
      orderId,
      packagePlan = "WEEKLY",
      amountInr = 149,
      phone,
      userName,
      userUsername,
      userEmail,
      failureReason = "Payment window closed or cancelled by student",
      failureCode = "PAYMENT_FAILED",
    } = body as {
      userId?: string;
      orderId?: string;
      packagePlan?: "ONE_DAY" | "WEEKLY" | "MONTHLY";
      amountInr?: number;
      phone?: string;
      userName?: string;
      userUsername?: string;
      userEmail?: string;
      failureReason?: string;
      failureCode?: string;
    };

    const cleanPhone = (phone || "").replace(/[^0-9]/g, "");

    // 1. Immediate High-Priority Alert in Server Terminal
    const alertMessage = [
      `=============================================================`,
      `🚨 [HOT LEAD ALERT] PAYMENT FAILURE ON VIDYALILA!`,
      `=============================================================`,
      `👤 Student: ${userName || "Anonymous Scholar"} (${userUsername || "@scholar"})`,
      `📞 Phone:   ${cleanPhone ? `+91 ${cleanPhone}` : "⚠️ NOT PROVIDED"}`,
      `📧 Email:   ${userEmail || "No Email"}`,
      `💎 Plan:    ${packagePlan} (₹${amountInr})`,
      `⚠️ Reason:  ${failureReason} [Code: ${failureCode}]`,
      `🆔 Order:   ${orderId || "N/A"}`,
      `⏰ Time:     ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST`,
      `👉 Action:  Reach out via WhatsApp or Call immediately to retain lead!`,
      `=============================================================`,
    ].join("\n");

    console.warn(alertMessage);

    // 2. Persist in Supabase payment_orders
    if (userId && !userId.startsWith("local-")) {
      // If order exists, update it to failed; otherwise insert
      if (orderId) {
        const { data: existing } = await supabaseAdmin
          .from("payment_orders")
          .select("id")
          .eq("razorpay_order_id", orderId)
          .single();

        if (existing) {
          await supabaseAdmin
            .from("payment_orders")
            .update({
              status: "failed",
              failure_reason: failureReason,
              failure_code: failureCode,
              phone: cleanPhone || null,
              user_name: userName || null,
              user_email: userEmail || null,
              contact_status: "PENDING_CONTACT",
              updated_at: new Date().toISOString(),
            })
            .eq("razorpay_order_id", orderId);
        } else {
          await supabaseAdmin.from("payment_orders").insert({
            user_id: userId,
            package_plan: packagePlan,
            amount_inr: amountInr,
            razorpay_order_id: orderId,
            status: "failed",
            failure_reason: failureReason,
            failure_code: failureCode,
            phone: cleanPhone || null,
            user_name: userName || null,
            user_email: userEmail || null,
            contact_status: "PENDING_CONTACT",
          });
        }
      } else {
        const genOrderId = `fail_vl_${Date.now()}_${Math.floor(1000 + Math.random() * 9000)}`;
        await supabaseAdmin.from("payment_orders").insert({
          user_id: userId,
          package_plan: packagePlan,
          amount_inr: amountInr,
          razorpay_order_id: genOrderId,
          status: "failed",
          failure_reason: failureReason,
          failure_code: failureCode,
          phone: cleanPhone || null,
          user_name: userName || null,
          user_email: userEmail || null,
          contact_status: "PENDING_CONTACT",
        });
      }

      // 3. Ensure student's phone number is saved in profiles if available
      if (cleanPhone.length >= 10) {
        await supabaseAdmin
          .from("profiles")
          .update({ phone: cleanPhone })
          .eq("id", userId);
      }
    }

    return NextResponse.json({
      ok: true,
      logged: true,
      message: "Payment failure recorded and lead queued for recovery.",
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to record payment failure";
    console.error("Error logging payment failure:", message);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
