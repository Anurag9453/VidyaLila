import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      userId,
      contestId,
      contestType,
      score,
      totalQuestions,
    } = body as {
      userId?: string;
      contestId: string;
      contestType: "DAILY" | "WEEKLY" | "MONTHLY";
      score: number;
      totalQuestions: number;
    };

    const ratio = totalQuestions > 0 ? score / totalQuestions : 0;
    const accuracyPercent = Math.round(ratio * 100);
    const ratingDelta = Math.round((ratio - 0.5) * 80) + 15;

    let goodieDaily = 0;
    let goodieComp = 0;
    let goodieLabel = "";

    if (ratio === 1) {
      if (contestType === "MONTHLY") {
        goodieDaily = 30;
        goodieComp = 4;
        goodieLabel = "🎁 Top-3 Goodie: Free 👑 Pro Pass (34 Quizzes • ₹499)";
      } else if (contestType === "WEEKLY") {
        goodieDaily = 7;
        goodieComp = 1;
        goodieLabel = "🎁 Top-3 Goodie: Free 💎 VIP Pass (8 Quizzes • ₹149)";
      } else {
        goodieDaily = 2;
        goodieLabel = "🎁 Top-3 Goodie: Free ⚡ Basic Pass (2 Quizzes • ₹49)";
      }
    } else if (ratio >= 0.75) {
      if (contestType === "MONTHLY") {
        goodieDaily = 7;
        goodieComp = 1;
        goodieLabel = "🎁 Top-10 Goodie: Free 💎 VIP Pass (8 Quizzes • ₹149)";
      } else if (contestType === "WEEKLY") {
        goodieDaily = 2;
        goodieLabel = "🎁 Top-10 Goodie: Free ⚡ Basic Pass (2 Quizzes • ₹49)";
      } else {
        goodieDaily = 1;
        goodieLabel = "🎁 Top-10 Goodie: +1 Free Daily Quiz Pass Credit";
      }
    }

    if (userId && !userId.startsWith("local-")) {
      await supabaseAdmin.from("contest_submissions").insert({
        contest_id: contestId,
        user_id: userId,
        score,
        total_questions: totalQuestions,
        accuracy_percent: accuracyPercent,
        rating_delta: ratingDelta,
        goodie_daily_passes_won: goodieDaily,
        goodie_comp_passes_won: goodieComp,
        goodie_label: goodieLabel || null,
      });

      const { data: currentProfile } = await supabaseAdmin
        .from("profiles")
        .select(
          "contest_rating, daily_passes_remaining, competition_passes_remaining, has_pro_pass"
        )
        .eq("id", userId)
        .single();

      if (currentProfile) {
        const nextDaily =
          (currentProfile.daily_passes_remaining || 0) + goodieDaily;
        const nextComp =
          (currentProfile.competition_passes_remaining || 0) + goodieComp;

        await supabaseAdmin
          .from("profiles")
          .update({
            contest_rating: (currentProfile.contest_rating || 1500) + ratingDelta,
            daily_passes_remaining: nextDaily,
            competition_passes_remaining: nextComp,
            has_pro_pass:
              nextDaily + nextComp > 0 ? true : currentProfile.has_pro_pass,
          })
          .eq("id", userId);
      }
    }

    return NextResponse.json({
      ok: true,
      ratingDelta,
      accuracyPercent,
      goodieDailyPassesWon: goodieDaily,
      goodieCompPassesWon: goodieComp,
      goodieLabel,
    });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Quiz submission failed";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
