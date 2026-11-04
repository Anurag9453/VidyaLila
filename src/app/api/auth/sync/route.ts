import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { isSupabaseConfigured } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization") || "";
    const token = authHeader.replace(/^Bearer\s+/i, "").trim();

    if (!isSupabaseConfigured || !token) {
      return NextResponse.json(
        { ok: false, error: "Supabase not configured or missing access token" },
        { status: 401 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    // Create a request-scoped Supabase client carrying the user's JWT so RLS auth.uid() works even without service_role key
    const userClient = createClient(supabaseUrl, supabaseAnonKey, {
      global: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const {
      data: { user },
      error: authErr,
    } = await userClient.auth.getUser(token);

    if (authErr || !user) {
      return NextResponse.json(
        { ok: false, error: authErr?.message || "Invalid session token" },
        { status: 401 }
      );
    }

    const dbClient = serviceRoleKey
      ? createClient(supabaseUrl, serviceRoleKey, {
          auth: { persistSession: false, autoRefreshToken: false },
        })
      : userClient;

    let bodyPayload: {
      username?: string;
      classGrade?: number;
      preferredLanguage?: "ENGLISH" | "HINGLISH";
      hasCompletedOnboarding?: boolean;
    } = {};
    try {
      bodyPayload = await req.json();
    } catch {
      // Optional body
    }

    const meta = (user.user_metadata || {}) as Record<string, unknown>;
    const appMeta = (user.app_metadata || {}) as Record<string, unknown>;
    const provider = (appMeta.provider as string) || "email";

    const googleOrMetaName =
      (meta.full_name as string) ||
      (meta.name as string) ||
      user.email?.split("@")[0] ||
      "Scholar";

    const googleOrMetaAvatar =
      (meta.avatar_url as string) ||
      (meta.picture as string) ||
      "🚀";

    const cleanHandle =
      (user.email?.split("@")[0] || googleOrMetaName)
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "")
        .slice(0, 12) || "scholar";

    let requestedUsername: string | undefined;
    if (bodyPayload.username) {
      const stripped = bodyPayload.username
        .trim()
        .replace(/^@+/, "")
        .toLowerCase();
      if (!/^[a-z0-9_]{3,20}$/.test(stripped)) {
        return NextResponse.json(
          {
            ok: false,
            error:
              "Username must be 3–20 characters using only lowercase letters, numbers, and underscores (_).",
          },
          { status: 400 }
        );
      }
      requestedUsername = `@${stripped}`;

      // Verify uniqueness in public.profiles
      const { data: conflictingRows } = await dbClient
        .from("profiles")
        .select("id, username")
        .ilike("username", requestedUsername)
        .limit(5);

      const takenByOther = (conflictingRows || []).find(
        (r) => r.id !== user.id
      );
      if (takenByOther) {
        return NextResponse.json(
          {
            ok: false,
            error: `Username ${requestedUsername} is already taken. Please choose another unique username.`,
          },
          { status: 409 }
        );
      }
    }

    const defaultUsername =
      requestedUsername ||
      (meta.username as string) ||
      `@${cleanHandle}_${user.id.slice(0, 4)}`;

    const rawGrade = Number(bodyPayload.classGrade || meta.class_grade || 9);
    const validGrade = rawGrade >= 9 && rawGrade <= 12 ? rawGrade : 9;

    const metaLang =
      bodyPayload.preferredLanguage ||
      (meta.preferred_language as string) ||
      "HINGLISH";
    const validLang: "ENGLISH" | "HINGLISH" =
      metaLang === "ENGLISH" ? "ENGLISH" : "HINGLISH";

    const isFirstTimeUser: boolean = !Boolean(meta.onboarding_completed);

    // 1. Check if profile already exists in public.profiles
    const { data: existingProfile } = await dbClient
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .maybeSingle();

    let profileRow = existingProfile;

    if (!profileRow) {
      // 2. First-time login (e.g., via Google OAuth): create profile in public.profiles
      const newRowPayload: Record<string, unknown> = {
        id: user.id,
        full_name: googleOrMetaName,
        username: defaultUsername,
        avatar_url: googleOrMetaAvatar,
        board: (meta.board as string) === "ICSE" ? "ICSE" : "CBSE",
        class_grade: validGrade,
        city: (meta.city as string) || "Delhi",
        school_name: (meta.school_name as string) || "VidyaLila Academy",
        xp_points: 0,
        earned_badges: [
          { name: "Welcome Scholar", emoji: "🌱", date: "Just now" },
        ],
      };

      const { data: insertedRow, error: insertErr } = await dbClient
        .from("profiles")
        .upsert(newRowPayload, { onConflict: "id" })
        .select("*")
        .single();

      if (!insertErr && insertedRow) {
        profileRow = insertedRow;
      } else {
        profileRow = newRowPayload;
      }
    } else {
      const updates: Record<string, unknown> = {};
      if (
        provider === "google" &&
        (!profileRow.avatar_url || profileRow.avatar_url === "🚀") &&
        googleOrMetaAvatar !== "🚀"
      ) {
        updates.avatar_url = googleOrMetaAvatar;
        updates.full_name = profileRow.full_name || googleOrMetaName;
      }
      if (bodyPayload.classGrade) {
        updates.class_grade = validGrade;
      }
      if (requestedUsername) {
        updates.username = requestedUsername;
      }
      if (Object.keys(updates).length > 0) {
        const { data: updatedRow } = await dbClient
          .from("profiles")
          .update(updates)
          .eq("id", user.id)
          .select("*")
          .single();

        if (updatedRow) {
          profileRow = updatedRow;
        }
      }
    }

    // 3. Also load completed units from public.user_unit_progress
    const { data: progressRows } = await dbClient
      .from("user_unit_progress")
      .select("unit_id")
      .eq("user_id", user.id);

    const completedUnitIds = Array.isArray(progressRows)
      ? progressRows.map((r: { unit_id: string }) => r.unit_id)
      : [];

    const resolvedOnboardingCompleted =
      bodyPayload.hasCompletedOnboarding === true ||
      Boolean(profileRow.onboarding_completed) ||
      Boolean(meta.onboarding_completed);

    const resolvedLanguage: "ENGLISH" | "HINGLISH" =
      bodyPayload.preferredLanguage ||
      (profileRow.preferred_language === "ENGLISH" ||
      profileRow.preferred_language === "HINGLISH"
        ? profileRow.preferred_language
        : validLang);

    return NextResponse.json({
      ok: true,
      provider,
      isFirstTimeUser: !resolvedOnboardingCompleted && isFirstTimeUser,
      profile: {
        id: user.id,
        email: user.email,
        phone: (profileRow.phone as string) || (meta.phone as string) || "",
        name: (profileRow.full_name as string) || googleOrMetaName,
        username: (profileRow.username as string) || defaultUsername,
        avatar: (profileRow.avatar_url as string) || googleOrMetaAvatar,
        board: (profileRow.board as "CBSE" | "ICSE") || "CBSE",
        classGrade:
          Number(profileRow.class_grade) >= 9 &&
          Number(profileRow.class_grade) <= 12
            ? Number(profileRow.class_grade)
            : validGrade,
        preferredLanguage: resolvedLanguage,
        hasCompletedOnboarding: resolvedOnboardingCompleted,
        city: (profileRow.city as string) || "Delhi",
        school: (profileRow.school_name as string) || "VidyaLila Academy",
        role: (profileRow.role as "student" | "admin") || "student",
        xp:
          typeof profileRow.xp_points === "number" ? profileRow.xp_points : 0,
        rating:
          typeof profileRow.contest_rating === "number"
            ? profileRow.contest_rating
            : 1500,
        streak:
          typeof profileRow.current_streak === "number"
            ? profileRow.current_streak
            : 1,
        hasProPass: Boolean(profileRow.has_pro_pass),
        proPassPlan: profileRow.pro_pass_plan || undefined,
        dailyPassesRemaining:
          typeof profileRow.daily_passes_remaining === "number"
            ? profileRow.daily_passes_remaining
            : 0,
        competitionPassesRemaining:
          typeof profileRow.competition_passes_remaining === "number"
            ? profileRow.competition_passes_remaining
            : 0,
        unlockedContestIds: Array.isArray(profileRow.unlocked_contest_ids)
          ? profileRow.unlocked_contest_ids
          : [],
        completedUnitIds,
        earnedBadges:
          Array.isArray(profileRow.earned_badges) &&
          profileRow.earned_badges.length > 0
            ? profileRow.earned_badges
            : [{ name: "Welcome Scholar", emoji: "🌱", date: "Just now" }],
      },
    });
  } catch (err) {
    console.error("Error in /api/auth/sync:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to sync user profile" },
      { status: 500 }
    );
  }
}
