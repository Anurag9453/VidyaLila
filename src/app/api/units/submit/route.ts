import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { CLASS_9_MATHS_MODULES } from "@/lib/class9-maths-data";
import { INITIAL_MODULES, CheckpointQuestion, UnitItem, LearningModule } from "@/lib/mock-data";

function getQuestionMarks(wrongAttempts: number = 0): number {
  if (wrongAttempts === 0) return 10;
  if (wrongAttempts === 1) return 5;
  return 2;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      userId,
      moduleId,
      unitId,
      answers, // Record<string, number>
      wrongAttempts = {}, // Record<string, number>
    } = body as {
      userId?: string;
      moduleId: string;
      unitId: string;
      answers?: Record<string, number>;
      wrongAttempts?: Record<string, number>;
    };

    if (!moduleId || !unitId) {
      return NextResponse.json(
        { ok: false, error: "Missing moduleId or unitId" },
        { status: 400 }
      );
    }

    // 1. Locate the unit and its questions
    let checkpointQuestions: CheckpointQuestion[] = [];
    const allModules: LearningModule[] = [...CLASS_9_MATHS_MODULES, ...INITIAL_MODULES];
    const targetModule = allModules.find((m) => m.id === moduleId || m.slug === moduleId);
    const targetUnit = targetModule?.units.find((u: UnitItem) => u.id === unitId);

    if (targetUnit?.checkpointQuestions) {
      checkpointQuestions = targetUnit.checkpointQuestions;
    } else {
      // Check Supabase public.units
      const { data: dbUnit } = await supabaseAdmin
        .from("units")
        .select("checkpoint_questions")
        .eq("id", unitId)
        .single();

      if (dbUnit?.checkpoint_questions && Array.isArray(dbUnit.checkpoint_questions)) {
        checkpointQuestions = dbUnit.checkpoint_questions as CheckpointQuestion[];
      }
    }

    if (checkpointQuestions.length === 0) {
      return NextResponse.json(
        { ok: false, error: "Unit questions not found" },
        { status: 404 }
      );
    }

    // 2. Compute score strictly on the server
    const submittedAnswers = answers || {};
    let allCorrect = true;
    let computedScore = 0;

    for (const q of checkpointQuestions) {
      const userSelected = submittedAnswers[q.id];
      if (typeof userSelected !== "number" || userSelected !== q.correctIndex) {
        allCorrect = false;
      }
      const wrongs = wrongAttempts[q.id] || 0;
      computedScore += getQuestionMarks(wrongs);
    }

    // 3. Update Supabase if user is logged in
    let xpAwarded = computedScore;
    let alreadyDone = false;

    if (userId && !userId.startsWith("local-")) {
      const { data: existingProgress } = await supabaseAdmin
        .from("user_unit_progress")
        .select("id")
        .eq("user_id", userId)
        .eq("unit_id", unitId)
        .maybeSingle();

      if (existingProgress) {
        alreadyDone = true;
        xpAwarded = 25; // Revision GP
      } else {
        await supabaseAdmin.from("user_unit_progress").insert({
          user_id: userId,
          module_id: targetModule?.id || moduleId,
          unit_id: unitId,
          unit_test_marks: computedScore,
          xp_awarded: computedScore,
        });
      }

      // Increment student's XP on the server
      const { data: prof } = await supabaseAdmin
        .from("profiles")
        .select("xp_points")
        .eq("id", userId)
        .single();

      if (prof) {
        await supabaseAdmin
          .from("profiles")
          .update({
            xp_points: (prof.xp_points || 0) + xpAwarded,
          })
          .eq("id", userId);
      }
    }

    return NextResponse.json({
      ok: true,
      allCorrect,
      score: computedScore,
      xpAwarded,
      alreadyDone,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unit submission failed";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
