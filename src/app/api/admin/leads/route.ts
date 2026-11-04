import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { isSupabaseConfigured } from "@/lib/supabase";

export async function GET() {
  try {
    if (!isSupabaseConfigured) {
      return NextResponse.json({ ok: true, leads: [] });
    }

    const { data: rows, error } = await supabaseAdmin
      .from("payment_orders")
      .select(`
        id,
        user_id,
        package_plan,
        amount_inr,
        razorpay_order_id,
        status,
        phone,
        user_name,
        user_email,
        failure_reason,
        failure_code,
        contact_status,
        created_at,
        updated_at
      `)
      .eq("status", "failed")
      .order("created_at", { ascending: false })
      .limit(100);

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    // Also enrich with student profiles (username, grade, school)
    const userIds = Array.from(new Set((rows || []).map((r) => r.user_id).filter(Boolean)));
    const profileMap = new Map<string, { username: string; class_grade: number; avatar_url: string }>();

    if (userIds.length > 0) {
      const { data: profiles } = await supabaseAdmin
        .from("profiles")
        .select("id, username, class_grade, avatar_url")
        .in("id", userIds);

      for (const p of profiles || []) {
        profileMap.set(p.id, {
          username: p.username || "@scholar",
          class_grade: p.class_grade || 9,
          avatar_url: p.avatar_url || "🚀",
        });
      }
    }

    const leads = (rows || []).map((r) => {
      const prof = profileMap.get(r.user_id);
      return {
        id: r.id,
        userId: r.user_id,
        userName: r.user_name || "Scholar",
        userUsername: prof?.username || "@scholar",
        avatar: prof?.avatar_url || "🚀",
        classGrade: prof?.class_grade || 9,
        userEmail: r.user_email || "",
        phone: r.phone || "",
        packagePlan: r.package_plan,
        amountInr: r.amount_inr,
        orderId: r.razorpay_order_id,
        failureReason: r.failure_reason || "Payment interrupted",
        failureCode: r.failure_code || "PAYMENT_FAILED",
        contactStatus: r.contact_status || "PENDING_CONTACT",
        createdAt: r.created_at,
      };
    });

    return NextResponse.json({ ok: true, leads });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to load failed payment leads";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { leadId, contactStatus } = body as {
      leadId: string;
      contactStatus: "PENDING_CONTACT" | "CONTACTED" | "CONVERTED" | "NOT_INTERESTED";
    };

    if (!leadId || !contactStatus) {
      return NextResponse.json(
        { ok: false, error: "Missing leadId or contactStatus" },
        { status: 400 }
      );
    }

    const { error } = await supabaseAdmin
      .from("payment_orders")
      .update({
        contact_status: contactStatus,
        updated_at: new Date().toISOString(),
      })
      .eq("id", leadId);

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, leadId, contactStatus });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to update lead status";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
