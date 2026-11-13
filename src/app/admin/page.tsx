"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import { useApp, StudentProfile } from "@/lib/store";
import type { AdminStudentRecord, FailedPaymentLead } from "@/app/api/admin/students/route";
import {
  Users,
  UserPlus,
  Crown,
  Flame,
  Sparkles,
  Search,
  RefreshCw,
  Download,
  TrendingUp,
  CheckCircle2,
  Calendar,
  GraduationCap,
  ShieldCheck,
  Database,
  ArrowUpDown,
  BookOpen,
  Phone,
  MessageCircle,
  AlertTriangle,
  Clock,
  Bug,
} from "lucide-react";

function formatPlanBadge(
  plan: "ONE_DAY" | "WEEKLY" | "MONTHLY" | "COMPREHENSIVE" | null | undefined,
  dailyLeft: number,
  compLeft: number
) {
  const approxCredits = dailyLeft * 20 || 300;
  if (plan === "COMPREHENSIVE" || dailyLeft >= 200) {
    return {
      label: "👑 Comprehensive Class Pack (₹1,999)",
      creditsText: `All Class Chapters + 🪙 ~${approxCredits.toLocaleString()} Cr`,
      pillClass: "bg-emerald-100 border-emerald-400 text-emerald-950",
      tierWeight: 4,
    };
  }
  if (plan === "MONTHLY") {
    return {
      label: "💎 Scholar Pack (₹999)",
      creditsText: `🪙 ~${approxCredits.toLocaleString()} Vidya Credits`,
      pillClass: "bg-indigo-100 border-indigo-300 text-indigo-900",
      tierWeight: 3,
    };
  }
  if (plan === "WEEKLY") {
    return {
      label: "📘 Subject Pack (₹499)",
      creditsText: `🪙 ~${approxCredits.toLocaleString()} Vidya Credits`,
      pillClass: "bg-sky-100 border-sky-300 text-sky-900",
      tierWeight: 2,
    };
  }
  if (plan === "ONE_DAY") {
    return {
      label: "🪙 Starter Pack (₹199)",
      creditsText: `🪙 ~${approxCredits.toLocaleString()} Vidya Credits`,
      pillClass: "bg-amber-100 border-amber-300 text-amber-900",
      tierWeight: 1,
    };
  }
  return {
    label: "Free Starter (🪙 300 Welcome)",
    creditsText: "🪙 300 Free Welcome Credits",
    pillClass: "bg-slate-100 border-slate-200 text-slate-600",
    tierWeight: 0,
  };
}

export default function AdminPortalPage() {
  const {
    profile,
    isAuthenticated,
    refundOrGrantCredits,
    supportCases,
    resolveSupportCase,
  } = useApp();
  const [showSalesforceGuide, setShowSalesforceGuide] = useState(false);
  const [caseResolutionNotes, setCaseResolutionNotes] = useState<
    Record<string, string>
  >({});
  const [refundTargetStudent, setRefundTargetStudent] = useState("");
  const [refundAmount, setRefundAmount] = useState<number>(100);
  const [refundReason, setRefundReason] = useState(
    "Exam Technical Issue — Instant Credit Refund (No Cash Refund)"
  );
  const [serverStudents, setServerStudents] = useState<AdminStudentRecord[]>(
    []
  );
  const [failedLeads, setFailedLeads] = useState<FailedPaymentLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [supabaseConnected, setSupabaseConnected] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState<string>("");

  // Filters & Sorting
  const [searchQuery, setSearchQuery] = useState("");
  const [periodFilter, setPeriodFilter] = useState<
    "ALL" | "LAST_30_DAYS" | "LAST_7_DAYS"
  >("ALL");
  const [planFilter, setPlanFilter] = useState<
    "ALL" | "PAID_ONLY" | "MONTHLY" | "WEEKLY" | "ONE_DAY" | "FREE"
  >("ALL");
  const [classFilter, setClassFilter] = useState<number | "ALL">("ALL");
  const [sortBy, setSortBy] = useState<
    "NEWEST" | "GP_DESC" | "STREAK_DESC" | "PLAN_DESC"
  >("NEWEST");

  const loadAnalytics = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/students", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        setServerStudents(Array.isArray(data.students) ? data.students : []);
        setFailedLeads(
          Array.isArray(data.failedPaymentLeads) ? data.failedPaymentLeads : []
        );
        setSupabaseConnected(Boolean(data.supabaseConnected));
      }
    } catch {
      // ignore network error
    } finally {
      setLoading(false);
      setLastRefreshed(new Date().toLocaleTimeString());
    }
  }, []);

  const updateLeadStatus = async (
    leadId: string,
    status: FailedPaymentLead["contactStatus"]
  ) => {
    try {
      await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ leadId, contactStatus: status }),
      });
      setFailedLeads((prev) =>
        prev.map((l) =>
          l.id === leadId ? { ...l, contactStatus: status } : l
        )
      );
    } catch (err) {
      console.error("Failed to update lead status:", err);
    }
  };

  const handleCreateTestFailedLead = async () => {
    try {
      await fetch("/api/payments/log-failure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: profile.id,
          userName: profile.name || "Aarav Sharma",
          userUsername: profile.username || "@aarav_optics",
          userEmail: profile.email || "aarav.optics@gmail.com",
          phone: profile.phone || "9876543210",
          packagePlan: "MONTHLY",
          amountInr: 499,
          failureReason: "User UPI app timed out while authorizing ₹499 payment",
          failureCode: "UPI_TIMEOUT",
        }),
      });
      loadAnalytics();
    } catch (err) {
      console.error("Failed to create test lead:", err);
    }
  };

  useEffect(() => {
    loadAnalytics();
  }, [loadAnalytics]);

  // Merge server students from Supabase + any local browser accounts so no onboarded student is missed
  const allStudents = useMemo(() => {
    const byKey = new Map<string, AdminStudentRecord>();
    const now = Date.now();
    const thirtyDaysMs = 30 * 24 * 60 * 60 * 1000;
    const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;

    for (const s of serverStudents) {
      const key = (s.email || s.username || s.id).toLowerCase();
      byKey.set(key, s);
    }

    // Also include current signed-in user if not yet in serverStudents
    if (
      isAuthenticated &&
      profile.username &&
      profile.username !== "@guest_scholar"
    ) {
      const key = (
        profile.email ||
        profile.username ||
        profile.id ||
        ""
      ).toLowerCase();
      const existing = byKey.get(key);
      if (existing) {
        byKey.set(key, {
          ...existing,
          fullName: profile.name || existing.fullName,
          username: profile.username || existing.username,
          classGrade: profile.classGrade || existing.classGrade,
          preferredLanguage:
            profile.preferredLanguage || existing.preferredLanguage,
          proPassPlan: profile.proPassPlan || existing.proPassPlan,
          hasProPass: profile.hasProPass || existing.hasProPass,
          dailyPassesRemaining:
            profile.dailyPassesRemaining ?? existing.dailyPassesRemaining,
          competitionPassesRemaining:
            profile.competitionPassesRemaining ??
            existing.competitionPassesRemaining,
          streak: Math.max(profile.streak || 1, existing.streak),
          gp: Math.max(profile.xp || 0, existing.gp),
          unitsCompleted: Math.max(
            profile.completedUnitIds?.length || 0,
            existing.unitsCompleted
          ),
        });
      } else {
        byKey.set(key, {
          id: profile.id || `active-${Date.now()}`,
          fullName: profile.name,
          username: profile.username,
          email: profile.email || "",
          phone: profile.phone || "",
          avatar: profile.avatar || "🚀",
          provider: profile.avatar?.startsWith("http") ? "google" : "email",
          classGrade: profile.classGrade || 9,
          board: profile.board || "CBSE",
          preferredLanguage: profile.preferredLanguage || "HINGLISH",
          city: profile.city || "Delhi",
          school: profile.school || "VidyaLila Academy",
          hasProPass: Boolean(profile.hasProPass || profile.proPassPlan),
          proPassPlan: profile.proPassPlan || null,
          dailyPassesRemaining: profile.dailyPassesRemaining || 0,
          competitionPassesRemaining: profile.competitionPassesRemaining || 0,
          streak: profile.streak || 1,
          maxStreak: profile.streak || 1,
          gp: profile.xp || 0,
          rating: profile.rating || 1500,
          unitsCompleted: profile.completedUnitIds?.length || 0,
          createdAt: new Date().toISOString(),
          lastSignInAt: new Date().toISOString(),
          joinedWithin30Days: true,
          joinedWithin7Days: true,
        });
      }
    }

    // Also merge local browser users if any
    if (typeof window !== "undefined") {
      try {
        const rawLocal = localStorage.getItem("vidyalila_local_users_v1");
        if (rawLocal) {
          const parsed: Record<string, { profile: StudentProfile }> =
            JSON.parse(rawLocal);
          for (const [emailKey, entry] of Object.entries(parsed)) {
            const p = entry.profile;
            if (!p) continue;
            const k = (p.email || emailKey || p.username).toLowerCase();
            if (!byKey.has(k)) {
              const createdMs = p.id?.startsWith("local-")
                ? Number(p.id.replace("local-", ""))
                : now;
              const createdIso = !Number.isNaN(createdMs)
                ? new Date(createdMs).toISOString()
                : new Date().toISOString();
              byKey.set(k, {
                id: p.id || k,
                fullName: p.name,
                username: p.username,
                email: p.email || emailKey,
                phone: p.phone || "",
                avatar: p.avatar || "🚀",
                provider: "email",
                classGrade: p.classGrade || 9,
                board: p.board || "CBSE",
                preferredLanguage: p.preferredLanguage || "HINGLISH",
                city: p.city || "Delhi",
                school: p.school || "VidyaLila Academy",
                hasProPass: Boolean(p.hasProPass || p.proPassPlan),
                proPassPlan: p.proPassPlan || null,
                dailyPassesRemaining: p.dailyPassesRemaining || 0,
                competitionPassesRemaining: p.competitionPassesRemaining || 0,
                streak: p.streak || 1,
                maxStreak: p.streak || 1,
                gp: p.xp || 0,
                rating: p.rating || 1500,
                unitsCompleted: p.completedUnitIds?.length || 0,
                createdAt: createdIso,
                lastSignInAt: createdIso,
                joinedWithin30Days: now - createdMs <= thirtyDaysMs,
                joinedWithin7Days: now - createdMs <= sevenDaysMs,
              });
            }
          }
        }
      } catch {
        // ignore storage error
      }
    }

    return Array.from(byKey.values());
  }, [serverStudents, isAuthenticated, profile]);

  // Summary KPIs
  const kpis = useMemo(() => {
    const totalOnboarded = allStudents.length;
    const newLast30Days = allStudents.filter(
      (s) => s.joinedWithin30Days
    ).length;
    const newLast7Days = allStudents.filter((s) => s.joinedWithin7Days).length;

    const proCount = allStudents.filter(
      (s) => s.proPassPlan === "MONTHLY"
    ).length;
    const vipCount = allStudents.filter(
      (s) => s.proPassPlan === "WEEKLY"
    ).length;
    const basicCount = allStudents.filter(
      (s) => s.proPassPlan === "ONE_DAY"
    ).length;
    const paidCount = proCount + vipCount + basicCount;
    const freeCount = totalOnboarded - paidCount;

    const totalGp = allStudents.reduce((acc, s) => acc + (s.gp || 0), 0);
    const avgGp =
      totalOnboarded > 0 ? Math.round(totalGp / totalOnboarded) : 0;

    const maxStreak = allStudents.reduce(
      (max, s) => Math.max(max, s.streak || 0),
      0
    );
    const avgStreak =
      totalOnboarded > 0
        ? (
            allStudents.reduce((acc, s) => acc + (s.streak || 0), 0) /
            totalOnboarded
          ).toFixed(1)
        : "0";

    const pendingLeadsCount = failedLeads.filter(
      (l) => l.contactStatus === "PENDING_CONTACT"
    ).length;

    return {
      totalOnboarded,
      newLast30Days,
      newLast7Days,
      proCount,
      vipCount,
      basicCount,
      paidCount,
      freeCount,
      totalGp,
      avgGp,
      maxStreak,
      avgStreak,
      pendingLeadsCount,
      totalLeadsCount: failedLeads.length,
    };
  }, [allStudents, failedLeads]);

  // Filtered & sorted rows
  const filteredStudents = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return allStudents
      .filter((s) => {
        if (periodFilter === "LAST_30_DAYS" && !s.joinedWithin30Days) {
          return false;
        }
        if (periodFilter === "LAST_7_DAYS" && !s.joinedWithin7Days) {
          return false;
        }
        if (planFilter === "PAID_ONLY" && !s.proPassPlan) return false;
        if (planFilter === "MONTHLY" && s.proPassPlan !== "MONTHLY") {
          return false;
        }
        if (planFilter === "WEEKLY" && s.proPassPlan !== "WEEKLY") return false;
        if (planFilter === "ONE_DAY" && s.proPassPlan !== "ONE_DAY") {
          return false;
        }
        if (planFilter === "FREE" && s.proPassPlan !== null) return false;
        if (classFilter !== "ALL" && s.classGrade !== classFilter) {
          return false;
        }
        if (q) {
          const hay =
            `${s.fullName} ${s.username} ${s.email} ${s.phone} ${s.school} ${s.city}`.toLowerCase();
          if (!hay.includes(q)) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "GP_DESC") return b.gp - a.gp;
        if (sortBy === "STREAK_DESC") return b.streak - a.streak;
        if (sortBy === "PLAN_DESC") {
          const wa = formatPlanBadge(
            a.proPassPlan,
            a.dailyPassesRemaining,
            a.competitionPassesRemaining
          ).tierWeight;
          const wb = formatPlanBadge(
            b.proPassPlan,
            b.dailyPassesRemaining,
            b.competitionPassesRemaining
          ).tierWeight;
          if (wb !== wa) return wb - wa;
          return b.gp - a.gp;
        }
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });
  }, [allStudents, searchQuery, periodFilter, planFilter, classFilter, sortBy]);

  const handleExportCsv = () => {
    const headers = [
      "Full Name",
      "Unique @Username",
      "Email",
      "Phone",
      "Auth Provider",
      "Class",
      "Language Preference",
      "Current Plan",
      "Daily Quiz Credits Left",
      "Weekly Quiz Credits Left",
      "Daily Streak (Days)",
      "Gyan Points (GP)",
      "Units Completed",
      "Contest Rating",
      "School",
      "City",
      "Joined Date",
      "Joined Last 30 Days",
    ];
    const rows = filteredStudents.map((s) => {
      const planInfo = formatPlanBadge(
        s.proPassPlan,
        s.dailyPassesRemaining,
        s.competitionPassesRemaining
      );
      return [
        `"${s.fullName.replace(/"/g, '""')}"`,
        `"${s.username}"`,
        `"${s.email}"`,
        `"${s.phone}"`,
        s.provider,
        `Class ${s.classGrade}`,
        s.preferredLanguage,
        `"${planInfo.label}"`,
        s.dailyPassesRemaining,
        s.competitionPassesRemaining,
        s.streak,
        s.gp,
        s.unitsCompleted,
        s.rating,
        `"${s.school.replace(/"/g, '""')}"`,
        `"${s.city.replace(/"/g, '""')}"`,
        new Date(s.createdAt).toLocaleDateString(),
        s.joinedWithin30Days ? "YES" : "NO",
      ].join(",");
    });

    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `admin-vidyalila-students-${new Date()
      .toISOString()
      .slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mx-auto max-w-[1600px] py-4 sm:py-6 space-y-6">
      {/* ====================================================================
          TOP COMMAND HEADER: admin.vidyalila.com
         ==================================================================== */}
      <section className="rounded-3xl border-2 border-slate-900 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 sm:p-8 text-white shadow-[0_8px_0_0_#0f172a]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3 py-1 text-xs font-extrabold text-emerald-300">
                <ShieldCheck className="h-3.5 w-3.5" />
                admin.vidyalila.com
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-[11px] font-bold text-slate-200">
                <Database className="h-3 w-3 text-sky-400" />
                {supabaseConnected
                  ? "Live Supabase Database Connected"
                  : "Local + Supabase Sync"}
              </span>
              {lastRefreshed && (
                <span className="text-[11px] font-semibold text-slate-400">
                  Updated at {lastRefreshed}
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Founder &amp; Student Performance Analytics
            </h1>
            <p className="text-xs sm:text-sm font-medium text-slate-300 max-w-2xl">
              Track total onboarded students, new sign-ups in the last 30 days, active Quiz Pass plans (Basic / VIP / Pro / Free), daily study streaks, and earned Gyan Points (GP) in real time.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={loadAnalytics}
              disabled={loading}
              className="rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2.5 text-xs font-extrabold text-white inline-flex items-center gap-2 transition"
            >
              <RefreshCw
                className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`}
              />
              <span>{loading ? "Refreshing..." : "Refresh Live Data"}</span>
            </button>

            <button
              type="button"
              onClick={handleExportCsv}
              className="btn-3d-emerald px-4 py-2.5 text-xs font-extrabold inline-flex items-center gap-2"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Export CSV ({filteredStudents.length})</span>
            </button>

            <Link
              href="/studio"
              className="btn-3d-amber px-4 py-2.5 text-xs font-extrabold inline-flex items-center gap-1.5"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Content Studio</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5 CORE KPI CARDS (Onboarded, Last 30 Days, Plans, Streaks, GPs)
         ==================================================================== */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* 1. Total Users Onboarded */}
        <div className="rounded-3xl border-2 border-slate-200 bg-white p-5 shadow-[0_6px_0_0_#e2e8f0] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
              Total Onboarded
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
              <Users className="h-5 w-5" />
            </span>
          </div>
          <p className="text-3xl font-extrabold text-slate-900">
            {kpis.totalOnboarded}
          </p>
          <p className="text-xs font-bold text-slate-500 flex items-center gap-1">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            <span>Registered student accounts</span>
          </p>
        </div>

        {/* 2. New Users in Last 30 Days */}
        <div className="rounded-3xl border-2 border-emerald-300 bg-emerald-50/50 p-5 shadow-[0_6px_0_0_#a7f3d0] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800">
              New (Last 30 Days)
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-white">
              <UserPlus className="h-5 w-5" />
            </span>
          </div>
          <p className="text-3xl font-extrabold text-emerald-950">
            +{kpis.newLast30Days}
          </p>
          <p className="text-xs font-bold text-emerald-800 flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            <span>+{kpis.newLast7Days} joined in last 7 days</span>
          </p>
        </div>

        {/* 3. Active Paid Plan Holders */}
        <div className="rounded-3xl border-2 border-amber-300 bg-amber-50/50 p-5 shadow-[0_6px_0_0_#fde68a] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-900">
              Active Paid Plans
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400 text-slate-950">
              <Crown className="h-5 w-5" />
            </span>
          </div>
          <p className="text-3xl font-extrabold text-slate-900">
            {kpis.paidCount}
            <span className="text-sm font-bold text-slate-500 ml-1.5">
              / {kpis.totalOnboarded}
            </span>
          </p>
          <p className="text-[11px] font-extrabold text-amber-900">
            👑 {kpis.proCount} Pro • 💎 {kpis.vipCount} VIP • ⚡{" "}
            {kpis.basicCount} Basic
          </p>
        </div>

        {/* 4. Student Daily Streaks */}
        <div className="rounded-3xl border-2 border-orange-200 bg-orange-50/40 p-5 shadow-[0_6px_0_0_#fed7aa] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-orange-800">
              Daily Streaks 🔥
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 text-white">
              <Flame className="h-5 w-5" />
            </span>
          </div>
          <p className="text-3xl font-extrabold text-slate-900">
            {kpis.avgStreak}d
            <span className="text-xs font-bold text-slate-500 ml-1.5">
              avg
            </span>
          </p>
          <p className="text-xs font-bold text-orange-800">
            Top Streak: 🔥 {kpis.maxStreak} days
          </p>
        </div>

        {/* 5. Total & Average Gyan Points (GP) */}
        <div className="rounded-3xl border-2 border-indigo-200 bg-indigo-50/40 p-5 shadow-[0_6px_0_0_#c7d2fe] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-800">
              Student GPs Earned
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <TrendingUp className="h-5 w-5" />
            </span>
          </div>
          <p className="text-3xl font-extrabold text-indigo-950">
            {kpis.totalGp.toLocaleString()}
            <span className="text-xs font-bold text-indigo-700 ml-1">GP</span>
          </p>
          <p className="text-xs font-bold text-indigo-800">
            Avg per student: {kpis.avgGp.toLocaleString()} GP
          </p>
        </div>
      </section>

      {/* ====================================================================
          🚨 HOT LEADS: FAILED PAYMENT RECOVERY (LEAD RETENTION QUEUE)
         ==================================================================== */}
      <section className="rounded-3xl border-2 border-rose-400 bg-gradient-to-br from-rose-50/80 via-white to-amber-50/60 p-5 sm:p-6 shadow-[0_6px_0_0_#f43f5e] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-600 px-3 py-0.5 text-xs font-black uppercase tracking-wider text-white shadow-sm">
                <AlertTriangle className="h-3.5 w-3.5" />
                🚨 Hot Leads: Failed Payment Recovery
              </span>
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-extrabold ${
                  kpis.pendingLeadsCount > 0
                    ? "bg-rose-200 text-rose-950 border border-rose-300"
                    : "bg-emerald-100 text-emerald-800 border border-emerald-300"
                }`}
              >
                {kpis.pendingLeadsCount > 0
                  ? `🔥 ${kpis.pendingLeadsCount} Pending Action`
                  : "✓ All Leads Resolved"}
              </span>
            </div>
            <p className="text-xs font-medium text-slate-600">
              Instant alerts for students whose transaction failed, timed out, or was cancelled at checkout. Call or WhatsApp immediately to retain the lead!
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCreateTestFailedLead}
              className="rounded-xl border border-rose-300 bg-white px-3 py-1.5 text-xs font-extrabold text-rose-900 hover:bg-rose-100/80 transition inline-flex items-center gap-1.5 shadow-sm"
              title="Add a sample failed transaction lead to verify instant recovery workflow"
            >
              <Bug className="h-3.5 w-3.5 text-rose-600" />
              <span>Simulate Sample Failed Lead</span>
            </button>
          </div>
        </div>

        {failedLeads.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-rose-200 bg-white/70 p-6 text-center space-y-2">
            <p className="text-2xl">🎉</p>
            <h4 className="text-sm font-extrabold text-slate-800">
              No Failed Payment Drop-Offs
            </h4>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              All checkout attempts have completed smoothly! Whenever a student experiences a gateway error, card decline, or UPI timeout, their phone number and lead details will appear right here with instant Call &amp; WhatsApp buttons.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3">
            {failedLeads.map((lead) => {
              const cleanPhone = (lead.phone || "").replace(/[^0-9]/g, "");
              const isPending = lead.contactStatus === "PENDING_CONTACT";
              const isContacted = lead.contactStatus === "CONTACTED";
              const isConverted = lead.contactStatus === "CONVERTED";

              const planBadge =
                lead.packagePlan === "MONTHLY"
                  ? { label: "👑 Pro Pass ₹499", color: "text-emerald-700 bg-emerald-100 border-emerald-300" }
                  : lead.packagePlan === "WEEKLY"
                  ? { label: "💎 VIP Pass ₹149", color: "text-indigo-700 bg-indigo-100 border-indigo-300" }
                  : { label: "⚡ Basic Pass ₹49", color: "text-amber-700 bg-amber-100 border-amber-300" };

              const formattedWaMessage = encodeURIComponent(
                `Hi ${lead.userName}! I am the founder of VidyaLila. I noticed your pass recharge for ${planBadge.label} was interrupted due to: "${lead.failureReason}". Would you like me to share a direct UPI QR code or help you complete your pass activation?`
              );

              return (
                <div
                  key={lead.id}
                  className={`rounded-2xl border-2 p-4 sm:p-5 transition flex flex-col lg:flex-row lg:items-center justify-between gap-4 ${
                    isPending
                      ? "border-rose-300 bg-white shadow-sm"
                      : isContacted
                      ? "border-sky-300 bg-sky-50/40"
                      : isConverted
                      ? "border-emerald-300 bg-emerald-50/40"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  {/* Student & Lead Details */}
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-100 border text-base">
                        {lead.avatar?.startsWith("http") ||
                        lead.avatar?.includes("googleusercontent.com") ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={
                              lead.avatar.startsWith("http")
                                ? lead.avatar
                                : `https://${lead.avatar.replace(/^\/+/, "")}`
                            }
                            alt=""
                            referrerPolicy="no-referrer"
                            className="h-full w-full rounded-xl object-cover"
                          />
                        ) : (
                          lead.avatar || "🚀"
                        )}
                      </span>
                      <span className="text-sm font-extrabold text-slate-900">
                        {lead.userName}
                      </span>
                      <span className="text-xs font-bold text-slate-500">
                        {lead.userUsername}
                      </span>
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-extrabold text-slate-700 border">
                        Class {lead.classGrade}
                      </span>
                      <span
                        className={`rounded-md border px-2 py-0.5 text-[10px] font-extrabold ${planBadge.color}`}
                      >
                        {planBadge.label}
                      </span>
                    </div>

                    {/* Phone & Contact row */}
                    <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-700 pt-0.5">
                      {cleanPhone ? (
                        <div className="flex items-center gap-1.5 rounded-lg bg-emerald-50 border border-emerald-300 px-2.5 py-1 text-emerald-900 font-extrabold">
                          <Phone className="h-3.5 w-3.5 text-emerald-600" />
                          <span>+91 {cleanPhone}</span>
                        </div>
                      ) : (
                        <span className="rounded-lg bg-rose-50 border border-rose-200 px-2.5 py-1 text-rose-700 text-[11px] font-extrabold">
                          ⚠️ No phone provided
                        </span>
                      )}

                      {lead.userEmail && (
                        <span className="text-slate-500 text-[11px]">
                          📧 {lead.userEmail}
                        </span>
                      )}

                      <span className="text-slate-400 text-[11px] flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {new Date(lead.createdAt).toLocaleString("en-IN", {
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>

                    {/* Failure Reason */}
                    <div className="rounded-xl bg-rose-50 border border-rose-200 p-2 text-xs font-semibold text-rose-900 flex items-start gap-1.5 mt-1">
                      <AlertTriangle className="h-3.5 w-3.5 text-rose-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>Reason:</strong> {lead.failureReason}{" "}
                        <span className="text-[10px] text-rose-700 font-mono">
                          [{lead.failureCode}]
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Immediate Action Buttons & Status */}
                  <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-2 shrink-0">
                    <div className="flex items-center gap-2">
                      {cleanPhone && (
                        <>
                          <a
                            href={`tel:+91${cleanPhone}`}
                            className="btn-3d-indigo px-3 py-1.5 text-xs font-extrabold inline-flex items-center gap-1.5 shadow-sm"
                          >
                            <Phone className="h-3.5 w-3.5" />
                            <span>Call</span>
                          </a>
                          <a
                            href={`https://wa.me/91${cleanPhone}?text=${formattedWaMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-3d-emerald px-3.5 py-1.5 text-xs font-extrabold inline-flex items-center gap-1.5 shadow-sm"
                          >
                            <MessageCircle className="h-3.5 w-3.5" />
                            <span>WhatsApp Lead</span>
                          </a>
                        </>
                      )}
                    </div>

                    {/* Status Management */}
                    <div className="flex items-center gap-1 pt-1">
                      <span className="text-[10px] font-bold text-slate-500 mr-1">
                        Status:
                      </span>
                      <button
                        type="button"
                        onClick={() => updateLeadStatus(lead.id, "PENDING_CONTACT")}
                        className={`rounded-lg px-2 py-0.5 text-[10px] font-extrabold transition border ${
                          isPending
                            ? "bg-rose-600 text-white border-rose-700"
                            : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        Pending
                      </button>
                      <button
                        type="button"
                        onClick={() => updateLeadStatus(lead.id, "CONTACTED")}
                        className={`rounded-lg px-2 py-0.5 text-[10px] font-extrabold transition border ${
                          isContacted
                            ? "bg-sky-600 text-white border-sky-700"
                            : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        Contacted
                      </button>
                      <button
                        type="button"
                        onClick={() => updateLeadStatus(lead.id, "CONVERTED")}
                        className={`rounded-lg px-2 py-0.5 text-[10px] font-extrabold transition border ${
                          isConverted
                            ? "bg-emerald-600 text-white border-emerald-700"
                            : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        Converted 🎉
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* ====================================================================
          🎧 STUDENT & PARENT SUPPORT & GRIEVANCE CASES + SALESFORCE SYNC
         ==================================================================== */}
      <section className="rounded-3xl border-2 border-indigo-400 bg-gradient-to-br from-indigo-50/80 via-white to-sky-50/60 p-5 sm:p-6 shadow-[0_6px_0_0_#6366f1] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-3 py-0.5 text-xs font-black uppercase tracking-wider text-white shadow-sm">
                🎧 Student Support &amp; Grievance Cases
              </span>
              <span className="rounded-full bg-indigo-100 border border-indigo-300 px-2.5 py-0.5 text-xs font-extrabold text-indigo-900">
                {
                  supportCases.filter(
                    (c) => c.status === "OPEN" || c.status === "IN_REVIEW"
                  ).length
                }{" "}
                Open • {supportCases.length} Total
              </span>
              <span className="rounded-full bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 text-[11px] font-extrabold text-emerald-900">
                ☁️ Connected to Salesforce Org: 00Dak00001QPDb9
              </span>
            </div>
            <p className="text-xs font-medium text-slate-600">
              All payment, chapter unlock, and formal grievance tickets raised on{" "}
              <Link href="/support" className="text-indigo-600 font-bold underline">
                /support
              </Link>{" "}
              appear here and auto-sync to your Free Salesforce Developer Edition org when{" "}
              <code className="font-bold text-slate-800">SALESFORCE_ORG_ID</code> is configured.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setShowSalesforceGuide((prev) => !prev)}
              className="rounded-xl border border-indigo-300 bg-white px-3.5 py-2 text-xs font-extrabold text-indigo-900 hover:bg-indigo-50 transition cursor-pointer shadow-xs"
            >
              ☁️ {showSalesforceGuide ? "Hide" : "How to Connect"} Free Salesforce Dev Org
            </button>
            <Link
              href="/support"
              className="btn-3d-indigo px-3.5 py-2 text-xs font-extrabold"
            >
              Open Public Support Desk →
            </Link>
          </div>
        </div>

        {/* Collapsible 2-Minute Salesforce Developer Edition Setup Guide */}
        {showSalesforceGuide && (
          <div className="rounded-2xl border-2 border-sky-300 bg-slate-900 text-white p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm sm:text-base font-black text-sky-300">
                ☁️ Connect Your Free Salesforce Developer Edition Account (2-Minute Setup)
              </h4>
              <span className="text-[10px] font-black uppercase bg-sky-500/20 border border-sky-400/40 text-sky-200 px-2.5 py-0.5 rounded-full">
                Zero Cost • No OAuth Needed
              </span>
            </div>
            <ol className="list-decimal pl-5 space-y-1.5 text-xs text-slate-200 leading-relaxed">
              <li>
                Sign up for a free forever{" "}
                <strong className="text-white">Salesforce Developer Edition</strong> account at{" "}
                <code className="text-amber-300">developer.salesforce.com/signup</code>.
              </li>
              <li>
                In Salesforce Setup (⚙️ top right), type{" "}
                <strong className="text-white">&ldquo;Web-to-Case&rdquo;</strong> in Quick Find and
                check <strong>Enable Web-to-Case</strong>. Similarly, type{" "}
                <strong className="text-white">&ldquo;Web-to-Lead&rdquo;</strong> and ensure{" "}
                <strong>Web-to-Lead Enabled</strong> is checked.
              </li>
              <li>
                In Quick Find, open <strong className="text-white">&ldquo;Company Information&rdquo;</strong>, copy your 15-character{" "}
                <strong className="text-amber-300">Salesforce.com Organization ID</strong> (starts
                with <code className="text-amber-300">00D...</code>), and add it to{" "}
                <code className="text-emerald-300">.env.local</code> (and Vercel Environment
                Variables):
                <pre className="mt-1.5 rounded-xl bg-black/60 border border-slate-700 p-2.5 text-xs font-mono text-emerald-300 overflow-x-auto">
                  SALESFORCE_ORG_ID=00Dxxxxxxxxxxxx
                </pre>
              </li>
            </ol>
            <p className="text-[11px] text-slate-300">
              ✅ Once set, every student support case creates a <strong>Case</strong> in Salesforce
              Service Cloud, and every failed Razorpay checkout creates a{" "}
              <strong>Hot Lead</strong> in Salesforce Sales Cloud automatically!
            </p>
          </div>
        )}

        {supportCases.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-indigo-200 bg-white/80 p-6 text-center space-y-1.5">
            <p className="text-sm font-extrabold text-slate-800">
              No Support or Grievance Cases Raised Yet
            </p>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              When a student or parent submits a Payment, Chapter Unlock, or Formal Grievance case
              on <code className="font-bold">/support</code>, it will appear right here for 1-click
              credit restoration or WhatsApp follow-up.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3">
            {supportCases.map((c) => {
              const isResolved =
                c.status === "RESOLVED" || c.status === "RESOLVED_CREDITED";
              const cleanPhone = (c.studentPhone || "").replace(/[^0-9]/g, "");
              const waText = encodeURIComponent(
                `Hi ${c.studentName}! Regarding your VidyaLila Support Case ${c.caseNumber} ("${c.subject}"): `
              );

              return (
                <div
                  key={c.id}
                  className={`rounded-2xl border-2 p-4 bg-white flex flex-col lg:flex-row lg:items-center justify-between gap-4 ${
                    isResolved ? "border-emerald-200 bg-emerald-50/20" : "border-indigo-200"
                  }`}
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-black bg-indigo-100 text-indigo-900 px-2.5 py-0.5 rounded-lg border border-indigo-300">
                        {c.caseNumber}
                      </span>
                      <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                        {c.category}
                      </span>
                      <span
                        className={`text-[10px] font-black px-2.5 py-0.5 rounded-full ${
                          isResolved
                            ? "bg-emerald-600 text-white"
                            : "bg-amber-400 text-slate-950"
                        }`}
                      >
                        {c.status === "RESOLVED_CREDITED"
                          ? `RESOLVED (+${c.creditsRefunded} 🪙 CREDITED)`
                          : c.status}
                      </span>
                      {c.salesforceSynced && (
                        <span className="text-[10px] font-extrabold text-sky-800 bg-sky-100 px-2 py-0.5 rounded-full border border-sky-200">
                          ☁️ Synced to Salesforce
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-black text-slate-900">
                      {c.subject}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {c.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold text-slate-500 pt-1">
                      <span>
                        👤 {c.studentName} ({c.studentUsername}) • Class {c.classGrade}{" "}
                        {c.board}
                      </span>
                      {c.studentEmail && <span>📧 {c.studentEmail}</span>}
                      {c.studentPhone && <span>📞 {c.studentPhone}</span>}
                      {c.paymentReference && (
                        <span className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                          💳 Ref: {c.paymentReference}
                        </span>
                      )}
                      {c.relatedChapterOrContest && (
                        <span className="text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                          📘 {c.relatedChapterOrContest}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Admin 1-Click Resolution & Refund Controls */}
                  <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-2 shrink-0">
                    {!isResolved && (
                      <input
                        type="text"
                        value={caseResolutionNotes[c.id] || ""}
                        onChange={(e) =>
                          setCaseResolutionNotes((prev) => ({
                            ...prev,
                            [c.id]: e.target.value,
                          }))
                        }
                        placeholder="Optional resolution note for student..."
                        className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs w-full lg:w-64"
                      />
                    )}

                    <div className="flex flex-wrap items-center gap-1.5">
                      {!isResolved && (
                        <>
                          <button
                            type="button"
                            onClick={() =>
                              resolveSupportCase(
                                c.id,
                                caseResolutionNotes[c.id] ||
                                  "Verified chapter unlock / technical issue. Restored +100 Vidya Credits to your wallet.",
                                100
                              )
                            }
                            className="btn-3d-amber px-3 py-1.5 text-xs font-extrabold cursor-pointer"
                          >
                            Resolve &amp; Refund +100 🪙
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              resolveSupportCase(
                                c.id,
                                caseResolutionNotes[c.id] ||
                                  "Issue verified and resolved by VidyaLila Support Desk.",
                                0
                              )
                            }
                            className="rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 px-3 py-1.5 text-xs font-extrabold transition cursor-pointer"
                          >
                            Mark Resolved ✓
                          </button>
                        </>
                      )}

                      {cleanPhone && (
                        <a
                          href={`https://wa.me/91${cleanPhone}?text=${waText}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-3d-emerald px-3 py-1.5 text-xs font-extrabold inline-flex items-center gap-1"
                        >
                          <MessageCircle className="h-3.5 w-3.5" />
                          <span>WhatsApp</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* ====================================================================
          PLAN DISTRIBUTION QUICK FILTER PILLS
         ==================================================================== */}
      <section className="rounded-3xl border-2 border-slate-200 bg-white p-5 shadow-[0_4px_0_0_#e2e8f0] space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Crown className="h-4 w-4 text-amber-600" />
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-800">
              Current Plan Breakdown (Click any plan to filter students)
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setPlanFilter("ALL")}
              className={`rounded-xl border px-3 py-1.5 text-xs font-extrabold transition ${
                planFilter === "ALL"
                  ? "bg-slate-900 border-slate-900 text-white"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              All Users ({kpis.totalOnboarded})
            </button>
            <button
              type="button"
              onClick={() => setPlanFilter("MONTHLY")}
              className={`rounded-xl border px-3 py-1.5 text-xs font-extrabold transition ${
                planFilter === "MONTHLY"
                  ? "bg-emerald-600 border-emerald-700 text-white"
                  : "bg-emerald-50 border-emerald-200 text-emerald-900 hover:bg-emerald-100"
              }`}
            >
              👑 Pro Pass ₹499 ({kpis.proCount})
            </button>
            <button
              type="button"
              onClick={() => setPlanFilter("WEEKLY")}
              className={`rounded-xl border px-3 py-1.5 text-xs font-extrabold transition ${
                planFilter === "WEEKLY"
                  ? "bg-indigo-600 border-indigo-700 text-white"
                  : "bg-indigo-50 border-indigo-200 text-indigo-900 hover:bg-indigo-100"
              }`}
            >
              💎 VIP Pass ₹149 ({kpis.vipCount})
            </button>
            <button
              type="button"
              onClick={() => setPlanFilter("ONE_DAY")}
              className={`rounded-xl border px-3 py-1.5 text-xs font-extrabold transition ${
                planFilter === "ONE_DAY"
                  ? "bg-amber-500 border-amber-600 text-slate-950"
                  : "bg-amber-50 border-amber-200 text-amber-900 hover:bg-amber-100"
              }`}
            >
              ⚡ Basic Pass ₹49 ({kpis.basicCount})
            </button>
            <button
              type="button"
              onClick={() => setPlanFilter("FREE")}
              className={`rounded-xl border px-3 py-1.5 text-xs font-extrabold transition ${
                planFilter === "FREE"
                  ? "bg-slate-700 border-slate-800 text-white"
                  : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Free Account • No Pass ({kpis.freeCount})
            </button>
          </div>
        </div>

        {/* Search, Time Window, Class & Sort Controls */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-2 border-t border-slate-100">
          {/* Search Input */}
          <div className="md:col-span-5 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search student by Name, @username, Email, Phone, or School..."
              className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50 pl-10 pr-4 py-2.5 text-xs sm:text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none"
            />
          </div>

          {/* Onboarding Window Filter */}
          <div className="md:col-span-3">
            <select
              value={periodFilter}
              onChange={(e) =>
                setPeriodFilter(
                  e.target.value as "ALL" | "LAST_30_DAYS" | "LAST_7_DAYS"
                )
              }
              className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm font-extrabold text-slate-800 focus:border-indigo-500 focus:bg-white focus:outline-none"
            >
              <option value="ALL">Joined: All Time ({kpis.totalOnboarded})</option>
              <option value="LAST_30_DAYS">
                Joined: Last 30 Days ({kpis.newLast30Days})
              </option>
              <option value="LAST_7_DAYS">
                Joined: Last 7 Days ({kpis.newLast7Days})
              </option>
            </select>
          </div>

          {/* Class Filter */}
          <div className="md:col-span-2">
            <select
              value={classFilter}
              onChange={(e) =>
                setClassFilter(
                  e.target.value === "ALL" ? "ALL" : Number(e.target.value)
                )
              }
              className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm font-extrabold text-slate-800 focus:border-indigo-500 focus:bg-white focus:outline-none"
            >
              <option value="ALL">All Classes (9–12)</option>
              <option value={9}>Class 9</option>
              <option value={10}>Class 10</option>
              <option value={11}>Class 11</option>
              <option value={12}>Class 12</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="md:col-span-2">
            <div className="relative">
              <ArrowUpDown className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(
                    e.target.value as
                      | "NEWEST"
                      | "GP_DESC"
                      | "STREAK_DESC"
                      | "PLAN_DESC"
                  )
                }
                className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50 pl-8 pr-3 py-2.5 text-xs sm:text-sm font-extrabold text-slate-800 focus:border-indigo-500 focus:bg-white focus:outline-none"
              >
                <option value="NEWEST">Sort: Newest Joined</option>
                <option value="GP_DESC">Sort: Highest GPs</option>
                <option value="STREAK_DESC">Sort: Highest Streak 🔥</option>
                <option value="PLAN_DESC">Sort: Active Plan Tier</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          STUDENT ROSTER & PERFORMANCE TABLE
         ==================================================================== */}
      <section className="rounded-3xl border-2 border-slate-200 bg-white shadow-[0_6px_0_0_#e2e8f0] overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 bg-slate-50 px-6 py-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-indigo-600" />
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900">
              Onboarded Students &amp; Live Performance ({filteredStudents.length})
            </h2>
          </div>
          <span className="text-xs font-bold text-slate-500">
            Showing {filteredStudents.length} of {allStudents.length} onboarded users
          </span>
        </div>

        {loading && allStudents.length === 0 ? (
          <div className="p-12 text-center text-sm font-bold text-slate-500">
            Loading onboarded students from Supabase...
          </div>
        ) : filteredStudents.length === 0 ? (
          <div className="p-12 text-center space-y-2">
            <p className="text-base font-extrabold text-slate-700">
              No matching students found
            </p>
            <p className="text-xs font-semibold text-slate-500">
              Try clearing the search box or switching the Plan / Time filter above.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200 bg-slate-100/80 text-[11px] font-black uppercase tracking-wider text-slate-600">
                  <th className="py-3.5 px-4">#</th>
                  <th className="py-3.5 px-4">Student &amp; Unique @Username</th>
                  <th className="py-3.5 px-4">Contact (Email / Phone)</th>
                  <th className="py-3.5 px-4">Class &amp; Language</th>
                  <th className="py-3.5 px-4">Current Plan &amp; Credits</th>
                  <th className="py-3.5 px-4">Daily Streak 🔥</th>
                  <th className="py-3.5 px-4">Gyan Points (GP) &amp; Units</th>
                  <th className="py-3.5 px-4">Onboarded Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                {filteredStudents.map((student, idx) => {
                  const planInfo = formatPlanBadge(
                    student.proPassPlan,
                    student.dailyPassesRemaining,
                    student.competitionPassesRemaining
                  );
                  return (
                    <tr
                      key={student.id}
                      className="hover:bg-slate-50/80 transition"
                    >
                      <td className="py-4 px-4 font-extrabold text-slate-400">
                        {idx + 1}
                      </td>

                      {/* Student & @Username */}
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 border border-indigo-200 text-base font-bold overflow-hidden">
                            {student.avatar?.startsWith("http") ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src={student.avatar}
                                alt={student.fullName}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              student.avatar || "🚀"
                            )}
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="font-extrabold text-slate-900">
                                {student.fullName}
                              </span>
                              <span
                                className={`rounded-md px-1.5 py-0.5 text-[10px] font-extrabold uppercase ${
                                  student.provider === "google"
                                    ? "bg-sky-100 text-sky-800"
                                    : "bg-slate-100 text-slate-600"
                                }`}
                              >
                                {student.provider}
                              </span>
                            </div>
                            <p className="text-xs font-extrabold text-emerald-700 font-mono">
                              {student.username}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Contact */}
                      <td className="py-4 px-4">
                        <p className="font-bold text-slate-800">
                          {student.email || "—"}
                        </p>
                        <p className="text-xs font-semibold text-slate-500">
                          {student.phone
                            ? `📞 ${student.phone}`
                            : `${student.school}, ${student.city}`}
                        </p>
                      </td>

                      {/* Class & Language */}
                      <td className="py-4 px-4">
                        <span className="inline-flex items-center rounded-lg bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 text-xs font-extrabold text-indigo-900">
                          Class {student.classGrade}
                        </span>
                        <p className="text-[11px] font-bold text-slate-500 mt-1">
                          {student.preferredLanguage === "HINGLISH"
                            ? "🇮🇳 Hinglish"
                            : "🇬🇧 English"}
                        </p>
                      </td>

                      {/* Current Plan & Credits */}
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center gap-1 rounded-xl border px-2.5 py-1 text-xs font-extrabold ${planInfo.pillClass}`}
                        >
                          {planInfo.label}
                        </span>
                        <p className="text-[11px] font-bold text-slate-500 mt-1">
                          {planInfo.creditsText}
                        </p>
                        <div className="flex flex-wrap items-center gap-1 mt-1.5">
                          <button
                            type="button"
                            onClick={() =>
                              refundOrGrantCredits(
                                20,
                                `Admin Refund (+20 Cr) for ${student.username}`,
                                student.email || student.username
                              )
                            }
                            className="rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-300 px-2 py-0.5 text-[10px] font-extrabold text-amber-900 transition cursor-pointer"
                          >
                            +20 Cr Refund
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              refundOrGrantCredits(
                                100,
                                `Admin Refund (+100 Cr) for ${student.username}`,
                                student.email || student.username
                              )
                            }
                            className="rounded-lg bg-indigo-50 hover:bg-indigo-100 border border-indigo-300 px-2 py-0.5 text-[10px] font-extrabold text-indigo-900 transition cursor-pointer"
                          >
                            +100 Cr Refund
                          </button>
                        </div>
                      </td>

                      {/* Daily Streak */}
                      <td className="py-4 px-4">
                        <div className="inline-flex items-center gap-1.5 rounded-xl bg-orange-50 border border-orange-200 px-3 py-1 text-xs font-extrabold text-orange-800">
                          <Flame className="h-3.5 w-3.5 text-orange-500 fill-orange-500" />
                          <span>
                            {student.streak}{" "}
                            {student.streak === 1 ? "day" : "days"}
                          </span>
                        </div>
                      </td>

                      {/* Gyan Points (GP) & Units */}
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1.5">
                          <span className="text-base font-extrabold text-emerald-700">
                            {student.gp.toLocaleString()} GP
                          </span>
                        </div>
                        <p className="text-[11px] font-bold text-slate-500 flex items-center gap-1 mt-0.5">
                          <BookOpen className="h-3 w-3 text-indigo-500" />
                          <span>
                            {student.unitsCompleted} Units Solved • Rating{" "}
                            {student.rating}
                          </span>
                        </p>
                      </td>

                      {/* Onboarded Date */}
                      <td className="py-4 px-4">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="font-bold text-slate-800">
                            {new Date(student.createdAt).toLocaleDateString(
                              "en-IN",
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </span>
                          {student.joinedWithin30Days && (
                            <span className="rounded-full bg-emerald-100 border border-emerald-300 px-2 py-0.5 text-[10px] font-extrabold text-emerald-800">
                              NEW (&lt;30d)
                            </span>
                          )}
                        </div>
                        {student.lastSignInAt && (
                          <p className="text-[11px] font-semibold text-slate-400 mt-0.5">
                            Last active:{" "}
                            {new Date(student.lastSignInAt).toLocaleDateString(
                              "en-IN",
                              {
                                day: "2-digit",
                                month: "short",
                              }
                            )}
                          </p>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* ====================================================================
          INSTANT CREDIT REFUND & SCHOLARSHIP GRANT CONSOLE
         ==================================================================== */}
      <section className="rounded-3xl border-2 border-amber-300 bg-gradient-to-r from-amber-50/80 via-white to-indigo-50/50 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-200/70 pb-4">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 border border-amber-300 px-3 py-0.5 text-[11px] font-extrabold text-amber-900 uppercase tracking-wider">
              <span>🪙</span>
              <span>Instant Wallet Credit Refund &amp; Scholarship Tool</span>
            </span>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
              Issue Instant Vidya Credit Refunds (Zero Cash Refund Liability)
            </h2>
            <p className="text-xs font-semibold text-slate-600">
              Need to refund a student for a cancelled test, accidental chapter unlock, or technical glitch? Credit their Vidya Credit Wallet directly in 1 click.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-amber-200 px-4 py-2.5 text-xs font-bold text-slate-700 shrink-0">
            <p>📖 Chapter Unlock = <strong>100 Credits</strong></p>
            <p>⚡ Daily = <strong>20 Cr</strong> • Weekly = <strong>50 Cr</strong> • Monthly = <strong>100 Cr</strong></p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-end">
          <div>
            <label className="block text-xs font-extrabold text-slate-700 mb-1">
              Student @Username or Email
            </label>
            <input
              type="text"
              value={refundTargetStudent}
              onChange={(e) => setRefundTargetStudent(e.target.value)}
              placeholder={profile.username || "@scholar or email (blank = current)"}
              className="w-full rounded-xl border-2 border-slate-200 bg-white px-3.5 py-2.5 text-xs font-bold text-slate-900 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-extrabold text-slate-700 mb-1">
              Credits to Refund / Grant (🪙)
            </label>
            <div className="flex items-center gap-1.5">
              {[20, 50, 100, 500].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setRefundAmount(amt)}
                  className={`rounded-xl border-2 px-3 py-2 text-xs font-extrabold transition cursor-pointer ${
                    refundAmount === amt
                      ? "border-amber-500 bg-amber-400 text-slate-950"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  +{amt}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-extrabold text-slate-700 mb-1">
              Refund / Grant Reason
            </label>
            <input
              type="text"
              value={refundReason}
              onChange={(e) => setRefundReason(e.target.value)}
              placeholder="e.g. Daily Quiz Refund / Bonus Credits"
              className="w-full rounded-xl border-2 border-slate-200 bg-white px-3.5 py-2.5 text-xs font-bold text-slate-900 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <button
            type="button"
            onClick={() => {
              refundOrGrantCredits(
                refundAmount,
                refundReason,
                refundTargetStudent.trim() || undefined
              );
            }}
            className="btn-3d-emerald py-2.5 px-4 text-xs font-extrabold flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>🪙</span>
            <span>Credit +{refundAmount} Credits to Wallet</span>
          </button>
        </div>
      </section>
    </div>
  );
}
