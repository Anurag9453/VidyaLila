import { NextResponse } from "next/server";
import type { SupportCase } from "@/lib/store";
import { supabaseAdmin } from "@/lib/supabase-admin";

// Server-side in-memory store for immediate cross-tab / admin visibility
const SERVER_SUPPORT_CASES: SupportCase[] = [];

const CATEGORY_LABELS: Record<SupportCase["category"], string> = {
  PAYMENT_ISSUE: "Payment / UPI Debit / Credit Recharge Issue",
  CHAPTER_UNLOCK: "Chapter Unlock / Vidya Credits Deduction Issue",
  TEST_TECHNICAL: "Live Test / Contest Technical Glitch",
  GRIEVANCE_PRIVACY: "Formal Grievance / DPDP Parent Privacy Request",
};

export async function GET() {
  const sfOrgId = (
    process.env.SALESFORCE_ORG_ID ||
    process.env.NEXT_PUBLIC_SALESFORCE_ORG_ID ||
    "00Dak00001QPDb9"
  ).trim();

  return NextResponse.json({
    ok: true,
    cases: SERVER_SUPPORT_CASES,
    salesforceConfigured: Boolean(sfOrgId),
    salesforceOrgIdPreview: sfOrgId
      ? `${sfOrgId.slice(0, 6)}...${sfOrgId.slice(-3)}`
      : null,
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action } = body as {
      action: "CREATE" | "RESOLVE";
      caseItem?: SupportCase;
      caseId?: string;
      resolutionNote?: string;
      creditsRefunded?: number;
    };

    if (action === "RESOLVE" && body.caseId) {
      const idx = SERVER_SUPPORT_CASES.findIndex((c) => c.id === body.caseId);
      if (idx !== -1) {
        const credits =
          typeof body.creditsRefunded === "number" && body.creditsRefunded > 0
            ? body.creditsRefunded
            : 0;
        SERVER_SUPPORT_CASES[idx] = {
          ...SERVER_SUPPORT_CASES[idx],
          status: credits > 0 ? "RESOLVED_CREDITED" : "RESOLVED",
          resolutionNote:
            body.resolutionNote ||
            (credits > 0
              ? `Resolved & credited +${credits} Vidya Credits to student wallet.`
              : "Resolved by VidyaLila Support Desk."),
          creditsRefunded:
            credits > 0 ? credits : SERVER_SUPPORT_CASES[idx].creditsRefunded,
          updatedAt: new Date().toISOString(),
        };
      }
      return NextResponse.json({ ok: true });
    }

    const caseItem = body.caseItem as SupportCase | undefined;
    if (!caseItem || !caseItem.caseNumber) {
      return NextResponse.json(
        { ok: false, error: "Invalid support case payload" },
        { status: 400 }
      );
    }

    const sfOrgId = (
      process.env.SALESFORCE_ORG_ID ||
      process.env.NEXT_PUBLIC_SALESFORCE_ORG_ID ||
      "00Dak00001QPDb9"
    ).trim();

    let salesforceSynced = false;

    // 1. Forward to Salesforce Service Cloud (Web-to-Case) if SALESFORCE_ORG_ID is configured
    if (sfOrgId) {
      try {
        const sfPriority =
          caseItem.priority === "URGENT_GRIEVANCE" || caseItem.priority === "HIGH"
            ? "High"
            : "Medium";

        const fullDescription = [
          `[VidyaLila Support Case Reference: ${caseItem.caseNumber}]`,
          `Category: ${CATEGORY_LABELS[caseItem.category] || caseItem.category}`,
          `Student Name: ${caseItem.studentName} (${caseItem.studentUsername})`,
          `Class & Board: Class ${caseItem.classGrade} (${caseItem.board})`,
          `Phone: ${caseItem.studentPhone || "Not provided"}`,
          `Email: ${caseItem.studentEmail || "Not provided"}`,
          caseItem.paymentReference
            ? `Razorpay / UPI Payment Ref: ${caseItem.paymentReference}`
            : null,
          caseItem.relatedChapterOrContest
            ? `Related Chapter / Test: ${caseItem.relatedChapterOrContest}`
            : null,
          `--------------------------------------------------`,
          `Student / Parent Grievance Details:`,
          caseItem.description,
        ]
          .filter(Boolean)
          .join("\n");

        const formData = new URLSearchParams();
        formData.append("orgid", sfOrgId);
        formData.append("retURL", "https://vidyalila.com/support");
        formData.append("name", caseItem.studentName || "VidyaLila Scholar");
        formData.append("email", caseItem.studentEmail || "student@vidyalila.com");
        formData.append("phone", caseItem.studentPhone || "");
        formData.append(
          "subject",
          `[${caseItem.caseNumber}] [${caseItem.category}] ${caseItem.subject}`
        );
        formData.append("description", fullDescription);
        formData.append("priority", sfPriority);
        formData.append("origin", "Web");
        formData.append("type", CATEGORY_LABELS[caseItem.category] || "Support");
        formData.append("status", "New");

        const sfRes = await fetch(
          "https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData.toString(),
          }
        );

        if (sfRes.ok || sfRes.status === 200 || sfRes.status === 302) {
          salesforceSynced = true;
        }
      } catch (sfErr) {
        console.warn("Salesforce Web-to-Case sync warning:", sfErr);
      }
    }

    const enrichedCase: SupportCase = {
      ...caseItem,
      salesforceSynced,
    };

    // 2. Save in server memory list (deduplicated)
    const existingIdx = SERVER_SUPPORT_CASES.findIndex(
      (c) => c.id === enrichedCase.id || c.caseNumber === enrichedCase.caseNumber
    );
    if (existingIdx !== -1) {
      SERVER_SUPPORT_CASES[existingIdx] = enrichedCase;
    } else {
      SERVER_SUPPORT_CASES.unshift(enrichedCase);
    }

    // 3. Log in server console for immediate developer/founder visibility
    console.info(
      [
        `=============================================================`,
        `🎧 [NEW SUPPORT / GRIEVANCE CASE] ${enrichedCase.caseNumber}`,
        `=============================================================`,
        `📂 Category:   ${CATEGORY_LABELS[enrichedCase.category]}`,
        `⚡ Priority:   ${enrichedCase.priority}`,
        `👤 Student:    ${enrichedCase.studentName} (${enrichedCase.studentUsername}) - Class ${enrichedCase.classGrade} ${enrichedCase.board}`,
        `📞 Phone:      ${enrichedCase.studentPhone || "N/A"} | 📧 Email: ${enrichedCase.studentEmail || "N/A"}`,
        enrichedCase.paymentReference
          ? `💳 Payment ID: ${enrichedCase.paymentReference}`
          : null,
        enrichedCase.relatedChapterOrContest
          ? `📘 Chapter:    ${enrichedCase.relatedChapterOrContest}`
          : null,
        `📝 Subject:    ${enrichedCase.subject}`,
        `☁️ Salesforce: ${
          salesforceSynced
            ? "SYNCED TO SALESFORCE SERVICE CLOUD (Web-to-Case)"
            : "Saved in VidyaLila Admin (Add SALESFORCE_ORG_ID in .env.local for Salesforce auto-sync)"
        }`,
        `=============================================================`,
      ]
        .filter(Boolean)
        .join("\n")
    );

    // 4. Optional backup into Supabase content_reports table so no ticket is ever lost
    try {
      await supabaseAdmin.from("content_reports").insert({
        module_slug: `support-${enrichedCase.category.toLowerCase()}`,
        chapter_title: `[${enrichedCase.caseNumber}] ${enrichedCase.subject}`,
        unit_title:
          enrichedCase.paymentReference ||
          enrichedCase.relatedChapterOrContest ||
          CATEGORY_LABELS[enrichedCase.category],
        target_label: `${enrichedCase.studentPhone || ""} | ${enrichedCase.studentEmail || ""}`,
        issue_type: "OTHER",
        description: enrichedCase.description,
        reported_by_label: `${enrichedCase.studentName} (${enrichedCase.studentUsername})`,
        status: "OPEN",
      });
    } catch {
      // Ignore if Supabase is not configured in local dev
    }

    return NextResponse.json({
      ok: true,
      caseItem: enrichedCase,
      salesforceSynced,
    });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Failed to submit support case";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
