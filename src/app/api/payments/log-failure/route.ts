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

    // 4. Forward Hot Payment Failure Lead to Salesforce Sales Cloud (Web-to-Lead) if SALESFORCE_ORG_ID is set
    const sfOrgId = (
      process.env.SALESFORCE_ORG_ID ||
      process.env.NEXT_PUBLIC_SALESFORCE_ORG_ID ||
      "00Dak00001QPDb9"
    ).trim();

    let salesforceLeadSynced = false;
    if (sfOrgId) {
      try {
        const nameParts = (userName || "VidyaLila Scholar").trim().split(/\s+/);
        const firstName = nameParts.length > 1 ? nameParts.slice(0, -1).join(" ") : "Scholar";
        const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : nameParts[0] || "Scholar";

        const leadForm = new URLSearchParams();
        leadForm.append("oid", sfOrgId);
        leadForm.append("retURL", "https://vidyalila.com/");
        leadForm.append("first_name", firstName);
        leadForm.append("last_name", lastName);
        leadForm.append("email", userEmail || "student@vidyalila.com");
        leadForm.append("phone", cleanPhone ? `+91 ${cleanPhone}` : "");
        leadForm.append("company", `VidyaLila Student (${userUsername || "@scholar"})`);
        leadForm.append("lead_source", "Razorpay Checkout Failure");
        leadForm.append("rating", "Hot");
        leadForm.append(
          "description",
          `Plan Attempted: ${packagePlan} (INR ${amountInr}) | Order ID: ${orderId || "N/A"} | Failure Reason: ${failureReason} [${failureCode}]`
        );

        const sfRes = await fetch(
          "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: leadForm.toString(),
          }
        );

        if (sfRes.ok || sfRes.status === 200 || sfRes.status === 302) {
          salesforceLeadSynced = true;
        }
      } catch (sfErr) {
        console.warn("Salesforce Web-to-Lead sync warning:", sfErr);
      }
    }

    return NextResponse.json({
      ok: true,
      logged: true,
      salesforceLeadSynced,
      message: "Payment failure recorded and lead queued for recovery.",
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to record payment failure";
    console.error("Error logging payment failure:", message);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
