import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { isSupabaseConfigured } from "@/lib/supabase";

export interface FailedPaymentLead {
  id: string;
  userId: string;
  userName: string;
  userUsername: string;
  avatar: string;
  classGrade: number;
  userEmail: string;
  phone: string;
  packagePlan: "ONE_DAY" | "WEEKLY" | "MONTHLY";
  amountInr: number;
  orderId: string;
  failureReason: string;
  failureCode: string;
  contactStatus: "PENDING_CONTACT" | "CONTACTED" | "CONVERTED" | "NOT_INTERESTED";
  createdAt: string;
}

export interface AdminStudentRecord {
  id: string;
  fullName: string;
  username: string;
  email: string;
  phone: string;
  avatar: string;
  provider: "google" | "email";
  classGrade: number;
  board: "CBSE" | "ICSE";
  preferredLanguage: "HINGLISH" | "ENGLISH";
  city: string;
  school: string;
  hasProPass: boolean;
  proPassPlan: "ONE_DAY" | "WEEKLY" | "MONTHLY" | null;
  dailyPassesRemaining: number;
  competitionPassesRemaining: number;
  streak: number;
  maxStreak: number;
  gp: number;
  rating: number;
  unitsCompleted: number;
  createdAt: string;
  lastSignInAt: string | null;
  joinedWithin30Days: boolean;
  joinedWithin7Days: boolean;
}

export async function GET() {
  try {
    if (!isSupabaseConfigured) {
      return NextResponse.json({
        ok: true,
        supabaseConnected: false,
        students: [],
      });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const serviceKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

    const adminClient = createClient(supabaseUrl, serviceKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    // 1. Fetch all profiles from public.profiles
    const { data: profileRows } = await adminClient
      .from("profiles")
      .select("*")
      .order("created_at", { ascending: false });

    // 2. Fetch auth.users via service_role if available (for email, provider, last_sign_in_at, user_metadata)
    let authUsers: Array<{
      id: string;
      email?: string;
      phone?: string;
      created_at?: string;
      last_sign_in_at?: string;
      app_metadata?: Record<string, unknown>;
      user_metadata?: Record<string, unknown>;
    }> = [];

    if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
      try {
        const { data: usersData } = await adminClient.auth.admin.listUsers({
          page: 1,
          perPage: 500,
        });
        if (usersData?.users) {
          authUsers = usersData.users;
        }
      } catch {
        // Fallback if listUsers fails
      }
    }

    // 3. Fetch unit progress counts per user
    const { data: progressRows } = await adminClient
      .from("user_unit_progress")
      .select("user_id, unit_id");

    const unitCountByUser: Record<string, number> = {};
    for (const row of progressRows || []) {
      const uid = row.user_id as string;
      if (uid) {
        unitCountByUser[uid] = (unitCountByUser[uid] || 0) + 1;
      }
    }

    const profileMap = new Map<string, Record<string, unknown>>();
    for (const row of profileRows || []) {
      profileMap.set(row.id as string, row);
    }

    const authUserMap = new Map<
      string,
      (typeof authUsers)[number]
    >();
    for (const u of authUsers) {
      authUserMap.set(u.id, u);
    }

    // Combine all unique user IDs from both auth.users and public.profiles
    const allUserIds = new Set<string>([
      ...Array.from(profileMap.keys()),
      ...Array.from(authUserMap.keys()),
    ]);

    const now = Date.now();
    const thirtyDaysMs = 30 * 24 * 60 * 60 * 1000;
    const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;

    const students: AdminStudentRecord[] = [];

    for (const uid of allUserIds) {
      const prof = profileMap.get(uid) || {};
      const authU = authUserMap.get(uid);
      const meta = (authU?.user_metadata || {}) as Record<string, unknown>;
      const appMeta = (authU?.app_metadata || {}) as Record<string, unknown>;

      const email =
        (prof.email as string) || authU?.email || (meta.email as string) || "";
      const fullName =
        (prof.full_name as string) ||
        (meta.full_name as string) ||
        (meta.name as string) ||
        email.split("@")[0] ||
        "Scholar";

      const cleanBase =
        (email.split("@")[0] || fullName)
          .toLowerCase()
          .replace(/[^a-z0-9_]/g, "")
          .slice(0, 12) || "scholar";

      const username =
        (prof.username as string) ||
        (meta.username as string) ||
        `@${cleanBase}_${uid.slice(0, 4)}`;

      const avatar =
        (prof.avatar_url as string) ||
        (meta.avatar_url as string) ||
        (meta.picture as string) ||
        "🚀";

      const providerRaw =
        (prof.auth_provider as string) ||
        (appMeta.provider as string) ||
        "email";
      const provider: "google" | "email" =
        providerRaw === "google" ? "google" : "email";

      const rawGrade = Number(prof.class_grade || meta.class_grade || 9);
      const classGrade = rawGrade >= 9 && rawGrade <= 12 ? rawGrade : 9;

      const rawLang =
        (prof.preferred_language as string) ||
        (meta.preferred_language as string) ||
        "HINGLISH";
      const preferredLanguage: "HINGLISH" | "ENGLISH" =
        rawLang === "ENGLISH" ? "ENGLISH" : "HINGLISH";

      const createdAt =
        (prof.created_at as string) ||
        authU?.created_at ||
        new Date().toISOString();

      const createdMs = new Date(createdAt).getTime();
      const joinedWithin30Days =
        !Number.isNaN(createdMs) && now - createdMs <= thirtyDaysMs;
      const joinedWithin7Days =
        !Number.isNaN(createdMs) && now - createdMs <= sevenDaysMs;

      const proPassPlan =
        prof.pro_pass_plan === "ONE_DAY" ||
        prof.pro_pass_plan === "WEEKLY" ||
        prof.pro_pass_plan === "MONTHLY"
          ? prof.pro_pass_plan
          : null;

      students.push({
        id: uid,
        fullName,
        username,
        email,
        phone: (prof.phone as string) || (meta.phone as string) || "",
        avatar,
        provider,
        classGrade,
        board: (prof.board as "CBSE" | "ICSE") === "ICSE" ? "ICSE" : "CBSE",
        preferredLanguage,
        city: (prof.city as string) || (meta.city as string) || "Delhi",
        school:
          (prof.school_name as string) ||
          (meta.school_name as string) ||
          "VidyaLila Academy",
        hasProPass: Boolean(prof.has_pro_pass) || Boolean(proPassPlan),
        proPassPlan,
        dailyPassesRemaining:
          typeof prof.daily_passes_remaining === "number"
            ? prof.daily_passes_remaining
            : 0,
        competitionPassesRemaining:
          typeof prof.competition_passes_remaining === "number"
            ? prof.competition_passes_remaining
            : 0,
        streak:
          typeof prof.current_streak === "number" ? prof.current_streak : 1,
        maxStreak: typeof prof.max_streak === "number" ? prof.max_streak : 1,
        gp: typeof prof.xp_points === "number" ? prof.xp_points : 0,
        rating:
          typeof prof.contest_rating === "number"
            ? prof.contest_rating
            : 1500,
        unitsCompleted: unitCountByUser[uid] || 0,
        createdAt,
        lastSignInAt: authU?.last_sign_in_at || null,
        joinedWithin30Days,
        joinedWithin7Days,
      });
    }

    // Sort newest first by default
    students.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    // 4. Fetch failed payment leads for instant recovery
    const { data: failedRows } = await adminClient
      .from("payment_orders")
      .select("*")
      .eq("status", "failed")
      .order("created_at", { ascending: false })
      .limit(50);

    const failedPaymentLeads: FailedPaymentLead[] = (failedRows || []).map((r) => {
      const prof = profileMap.get(r.user_id as string) || {};
      const authU = authUsers.find((u) => u.id === r.user_id);
      const meta = (authU?.user_metadata || {}) as Record<string, unknown>;

      const fallbackName =
        (prof.full_name as string) ||
        (meta.full_name as string) ||
        (meta.name as string) ||
        "Scholar";

      const fallbackUsername =
        (prof.username as string) ||
        (meta.username as string) ||
        `@scholar_${String(r.user_id).slice(0, 4)}`;

      return {
        id: r.id,
        userId: r.user_id,
        userName: r.user_name || fallbackName,
        userUsername: fallbackUsername,
        avatar: (prof.avatar_url as string) || (meta.avatar_url as string) || "🚀",
        classGrade: (prof.class_grade as number) || (meta.class_grade as number) || 9,
        userEmail: r.user_email || (authU?.email as string) || (prof.email as string) || "",
        phone: r.phone || (prof.phone as string) || (meta.phone as string) || "",
        packagePlan: r.package_plan as "ONE_DAY" | "WEEKLY" | "MONTHLY",
        amountInr: r.amount_inr,
        orderId: r.razorpay_order_id || "",
        failureReason: r.failure_reason || "Payment interrupted or cancelled by user",
        failureCode: r.failure_code || "PAYMENT_FAILED",
        contactStatus: (r.contact_status as FailedPaymentLead["contactStatus"]) || "PENDING_CONTACT",
        createdAt: r.created_at,
      };
    });

    return NextResponse.json({
      ok: true,
      supabaseConnected: true,
      students,
      failedPaymentLeads,
    });
  } catch (err) {
    console.error("Error in /api/admin/students:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to load student analytics", students: [] },
      { status: 500 }
    );
  }
}
