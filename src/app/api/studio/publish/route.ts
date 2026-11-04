import { NextResponse } from "next/server";
import { supabaseAdmin, verifyAdminRequest } from "@/lib/supabase-admin";
import { LearningModule, QuizContest } from "@/lib/mock-data";

export async function POST(req: Request) {
  try {
    const isAuthorized = await verifyAdminRequest(req);
    if (!isAuthorized) {
      return NextResponse.json(
        { ok: false, error: "Unauthorized: Admin privileges required" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { type, moduleData, contestData } = body as {
      type: "MODULE" | "CONTEST";
      moduleData?: LearningModule;
      contestData?: QuizContest;
    };

    if (type === "MODULE" && moduleData) {
      const { data: modRow, error: modErr } = await supabaseAdmin
        .from("modules")
        .upsert(
          {
            slug: moduleData.slug,
            chapter_number: moduleData.chapterNumber,
            title: moduleData.title,
            description: moduleData.subtitle,
            board: moduleData.board,
            class_grade: moduleData.classGrade,
            subject: moduleData.subject,
            difficulty: moduleData.difficulty,
            badge_name: moduleData.badgeName,
            badge_icon: moduleData.badgeEmoji,
            total_xp: moduleData.totalXp,
            estimated_minutes: moduleData.estimatedMinutes,
            is_published: true,
          },
          { onConflict: "slug" }
        )
        .select("id")
        .single();

      if (modErr) {
        return NextResponse.json(
          { ok: false, error: modErr.message },
          { status: 400 }
        );
      }

      if (modRow && moduleData.units?.length) {
        const unitPayloads = moduleData.units.map((u, idx) => ({
          module_id: modRow.id,
          unit_order: idx + 1,
          title: u.title,
          estimated_minutes: u.durationMinutes,
          xp_reward: u.xpReward,
          objectives: u.summary ? [u.summary] : [],
          objectives_hinglish: u.summaryHinglish ? [u.summaryHinglish] : [],
          content_sections: u.contentSections || [],
          content_sections_hinglish: u.contentSections || [],
          checkpoint_questions: u.checkpointQuestions || [],
        }));

        await supabaseAdmin.from("units").insert(unitPayloads);
      }

      return NextResponse.json({
        ok: true,
        message: "Chapter & Units saved to Supabase Cloud!",
      });
    }

    if (type === "CONTEST" && contestData) {
      const { error: cErr } = await supabaseAdmin.from("contests").upsert(
        {
          slug: contestData.id,
          title: contestData.title,
          subtitle: contestData.subtitle,
          contest_type: contestData.type,
          syllabus_scope: contestData.syllabusScope || "FULL_SYLLABUS",
          included_chapters: contestData.includedChapters || [],
          board: contestData.board,
          class_grade: contestData.classGrade,
          subject: contestData.subject,
          scheduled_time_slot: contestData.scheduledTimeSlot,
          frequency_label: contestData.frequencyLabel,
          entry_fee_inr: contestData.entryFeeInr,
          prize_pool_text: contestData.prizePool,
          duration_minutes: contestData.durationMinutes,
          is_live: contestData.isLive,
          questions: contestData.questions || [],
          participants_count: contestData.participantsCount,
        },
        { onConflict: "slug" }
      );

      if (cErr) {
        return NextResponse.json(
          { ok: false, error: cErr.message },
          { status: 400 }
        );
      }

      return NextResponse.json({
        ok: true,
        message: "Subject Quiz saved to Supabase Cloud!",
      });
    }

    return NextResponse.json(
      { ok: false, error: "Invalid payload" },
      { status: 400 }
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Server error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
