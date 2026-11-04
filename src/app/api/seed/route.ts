import { NextResponse } from "next/server";
import { supabaseAdmin, verifyAdminRequest } from "@/lib/supabase-admin";
import { INITIAL_MODULES, INITIAL_CONTESTS } from "@/lib/mock-data";

export async function POST(req: Request) {
  try {
    const isAuthorized = await verifyAdminRequest(req);
    if (!isAuthorized) {
      return NextResponse.json(
        { ok: false, error: "Unauthorized: Admin privileges required to seed database" },
        { status: 401 }
      );
    }

    // 1. Check if tables exist in Supabase by querying public.modules
    const { error: checkErr } = await supabaseAdmin
      .from("modules")
      .select("id")
      .limit(1);

    if (checkErr) {
      return NextResponse.json(
        {
          ok: false,
          schemaMissing: true,
          error: checkErr.message,
          instructions:
            "Please open your Supabase Dashboard -> SQL Editor, paste the contents of supabase/schema.sql, and click Run to create the tables first.",
        },
        { status: 400 }
      );
    }

    let modulesSeeded = 0;
    let unitsSeeded = 0;
    let contestsSeeded = 0;

    // 2. Upsert INITIAL_MODULES and their units
    for (const mod of INITIAL_MODULES) {
      const { data: modRow, error: modErr } = await supabaseAdmin
        .from("modules")
        .upsert(
          {
            slug: mod.slug,
            chapter_number: mod.chapterNumber,
            title: mod.title,
            description: mod.subtitle,
            board: mod.board,
            class_grade: mod.classGrade,
            subject: mod.subject,
            difficulty: mod.difficulty,
            badge_name: mod.badgeName,
            badge_icon: mod.badgeEmoji,
            total_xp: mod.totalXp,
            estimated_minutes: mod.estimatedMinutes,
            is_published: true,
          },
          { onConflict: "slug" }
        )
        .select("id")
        .single();

      if (!modErr && modRow) {
        modulesSeeded += 1;

        // Delete existing units for this module_id before re-inserting cleanly
        await supabaseAdmin.from("units").delete().eq("module_id", modRow.id);

        const unitPayloads = mod.units.map((u, idx) => ({
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

        const { error: uErr } = await supabaseAdmin
          .from("units")
          .insert(unitPayloads);
        if (!uErr) {
          unitsSeeded += unitPayloads.length;
        }
      }
    }

    // 3. Upsert INITIAL_CONTESTS
    for (const c of INITIAL_CONTESTS) {
      const { error: cErr } = await supabaseAdmin.from("contests").upsert(
        {
          slug: c.id,
          title: c.title,
          subtitle: c.subtitle,
          contest_type: c.type,
          syllabus_scope: c.syllabusScope || "FULL_SYLLABUS",
          included_chapters: c.includedChapters || [],
          board: c.board,
          class_grade: c.classGrade,
          subject: c.subject,
          scheduled_time_slot: c.scheduledTimeSlot,
          frequency_label: c.frequencyLabel,
          entry_fee_inr: c.entryFeeInr,
          prize_pool_text: c.prizePool,
          duration_minutes: c.durationMinutes,
          is_live: c.isLive,
          questions: c.questions || [],
          participants_count: c.participantsCount,
        },
        { onConflict: "slug" }
      );

      if (!cErr) {
        contestsSeeded += 1;
      }
    }

    return NextResponse.json({
      ok: true,
      message: `Successfully seeded ${modulesSeeded} Chapters (${unitsSeeded} Units) and ${contestsSeeded} Subject Quizzes into Supabase!`,
      modulesSeeded,
      unitsSeeded,
      contestsSeeded,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown server error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { count: modCount, error: modErr } = await supabaseAdmin
      .from("modules")
      .select("*", { count: "exact", head: true });

    const { count: contestCount } = await supabaseAdmin
      .from("contests")
      .select("*", { count: "exact", head: true });

    const { count: profileCount } = await supabaseAdmin
      .from("profiles")
      .select("*", { count: "exact", head: true });

    if (modErr) {
      return NextResponse.json({
        ok: false,
        schemaReady: false,
        error: modErr.message,
      });
    }

    return NextResponse.json({
      ok: true,
      schemaReady: true,
      counts: {
        modules: modCount || 0,
        contests: contestCount || 0,
        profiles: profileCount || 0,
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ ok: false, schemaReady: false, error: message });
  }
}
