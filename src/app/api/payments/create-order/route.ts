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

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, packagePlan } = body as {
      userId?: string;
      packagePlan: "ONE_DAY" | "WEEKLY" | "MONTHLY";
    };

    const config = PLAN_CONFIG[packagePlan] || PLAN_CONFIG.WEEKLY;
    const orderId = `order_vl_${Date.now()}_${Math.floor(1000 + Math.random() * 9000)}`;

    // If user is authenticated in Supabase, log the created order in public.payment_orders
    if (userId && !userId.startsWith("local-")) {
      await supabaseAdmin.from("payment_orders").insert({
        user_id: userId,
        package_plan: packagePlan,
        daily_passes_granted: config.dailyPasses,
        competition_passes_granted: config.compPasses,
        amount_inr: config.amountInr,
        razorpay_order_id: orderId,
        status: "created",
      });
    }

    return NextResponse.json({
      ok: true,
      orderId,
      amountInr: config.amountInr,
      dailyPassesGranted: config.dailyPasses,
      competitionPassesGranted: config.compPasses,
      packageLabel: config.label,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to create order";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
