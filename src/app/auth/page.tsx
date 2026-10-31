"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useApp } from "@/lib/store";
import { ClassGrade } from "@/lib/mock-data";
import { isSupabaseConfigured } from "@/lib/supabase";
import { PaymentModal, PassPackageType } from "@/components/PaymentModal";
import {
  Mail,
  Lock,
  User,
  School,
  MapPin,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Database,
  LogOut,
  Crown,
  Calendar,
  Award,
  Settings,
  Sparkles,
} from "lucide-react";

function getPlanDetails(
  plan?: "ONE_DAY" | "WEEKLY" | "MONTHLY",
  dailyLeft: number = 0,
  compLeft: number = 0
) {
  const totalLeft = dailyLeft + compLeft;

  if (plan && totalLeft === 0) {
    const planLabel =
      plan === "MONTHLY"
        ? "👑 Pro Pass (Monthly • 30 Daily + 4 Weekly)"
        : plan === "WEEKLY"
        ? "💎 VIP Pass (Weekly • 7 Daily + 1 Weekly)"
        : "⚡ Basic Pass (Daily • 2 Daily Quizzes)";
    return {
      name: `${planLabel} — Exhausted`,
      badge: "LIMIT EXHAUSTED • RECHARGE REQUIRED",
      summary:
        "You have consumed all quiz credits in this pass. Recharge now to add new Daily & Weekly Quiz Passes!",
      badgeStyle: "bg-rose-100 border-rose-300 text-rose-900",
      cardStyle: "border-rose-300 bg-rose-50/50",
    };
  }

  if (plan === "MONTHLY") {
    return {
      name: "👑 Pro Pass (Monthly • ₹499 • 30 Daily + 4 Weekly Quizzes)",
      badge: `👑 PRO PASS • ${totalLeft} QUIZ CREDITS LEFT`,
      summary:
        "Includes 30 Daily Quiz Credits + 4 Weekly Quiz Credits (1 deducted per quiz attempted)",
      badgeStyle: "bg-emerald-100 border-emerald-300 text-emerald-900",
      cardStyle: "border-emerald-300 bg-emerald-50/50",
    };
  }
  if (plan === "WEEKLY") {
    return {
      name: "💎 VIP Pass (Weekly • ₹149 • 7 Daily + 1 Weekly Quiz)",
      badge: `💎 VIP PASS • ${totalLeft} QUIZ CREDITS LEFT`,
      summary:
        "Includes 7 Daily Quiz Credits + 1 Weekly Quiz Credit (1 deducted per quiz attempted)",
      badgeStyle: "bg-indigo-100 border-indigo-300 text-indigo-900",
      cardStyle: "border-indigo-300 bg-indigo-50/50",
    };
  }
  if (plan === "ONE_DAY") {
    return {
      name: "⚡ Basic Pass (Daily • ₹49 • 2 Daily Quizzes)",
      badge: `⚡ BASIC PASS • ${totalLeft} QUIZ CREDIT${totalLeft === 1 ? "" : "S"} LEFT`,
      summary: "Includes 2 Daily Quiz Credits (1 Pass Credit = 1 Daily Quiz)",
      badgeStyle: "bg-amber-100 border-amber-300 text-amber-900",
      cardStyle: "border-amber-300 bg-amber-50/50",
    };
  }
  return {
    name: "Free Scholar Plan (₹0)",
    badge: "FREE PLAN",
    summary:
      "100% Free Study Units & Chapter Practice Tests (Buy Basic, VIP, or Pro Pass to unlock Live Daily/Weekly Quizzes)",
    badgeStyle: "bg-slate-200 border-slate-300 text-slate-700",
    cardStyle: "border-slate-200 bg-slate-50",
  };
}

export default function AuthAndSettingsPage() {
  const router = useRouter();
  const {
    profile,
    isAuthenticated,
    signUpUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
    updateProfileBoardAndClass,
    activateProPass,
  } = useApp();

  const [mode, setMode] = useState<"SIGNIN" | "SIGNUP">("SIGNIN");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [showPassModal, setShowPassModal] = useState(false);
  const [defaultModalPkg, setDefaultModalPkg] =
    useState<PassPackageType>("WEEKLY");

  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [board, setBoard] = useState<"CBSE" | "ICSE">("CBSE");
  const [classGrade, setClassGrade] = useState<ClassGrade>(10);
  const [city, setCity] = useState("");
  const [school, setSchool] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(true);

  const dailyPassesLeft = profile.dailyPassesRemaining || 0;
  const compPassesLeft = profile.competitionPassesRemaining || 0;
  const planInfo = getPlanDetails(
    profile.proPassPlan,
    dailyPassesLeft,
    compPassesLeft
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    setSubmitting(true);

    if (mode === "SIGNUP") {
      if (!acceptedTerms) {
        setErrorMsg(
          "Please accept the Terms of Use & Educational Disclaimer to continue."
        );
        setSubmitting(false);
        return;
      }
      if (password.length < 6) {
        setErrorMsg("Password must be at least 6 characters long.");
        setSubmitting(false);
        return;
      }
      const res = await signUpUser({
        email,
        password,
        fullName,
        board,
        classGrade,
        city: city || "Delhi",
        school: school || "VidyaLila Scholar",
      });
      setSubmitting(false);
      if (!res.ok) {
        setErrorMsg(res.error || "Sign up failed.");
      } else {
        setSuccessMsg(res.message || "Account created! Redirecting...");
        setTimeout(() => router.push("/"), 900);
      }
    } else {
      const res = await signInUser(email, password);
      setSubmitting(false);
      if (!res.ok) {
        setErrorMsg(res.error || "Invalid credentials.");
      } else {
        setSuccessMsg("Signed in! Redirecting...");
        setTimeout(() => router.push("/"), 600);
      }
    }
  };

  const handleGoogleLogin = async () => {
    setErrorMsg(null);
    const res = await signInWithGoogle();
    if (!res.ok && res.error) {
      setErrorMsg(res.error);
    }
  };

  const inputClass =
    "w-full rounded-2xl border-2 border-slate-200 bg-slate-50 pl-11 pr-4 py-3 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none transition";

  return (
    <div className="mx-auto max-w-4xl py-4 sm:py-6 space-y-6">
      {/* ====================================================================
          USER SETTINGS & ACTIVE SUBSCRIPTION PLAN CARD (Always Visible)
         ==================================================================== */}
      <section className="rounded-3xl border-2 border-slate-200 bg-white p-6 sm:p-8 shadow-[0_6px_0_0_#e2e8f0] space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="flex items-center gap-3.5">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 border-b-4 border-emerald-700 text-2xl text-white shadow-sm">
              {profile.avatar || "🚀"}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-[11px] font-extrabold text-slate-700">
                  <Settings className="h-3 w-3 text-indigo-600" />
                  User Settings &amp; Active Plan
                </span>
                {isAuthenticated && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-extrabold text-emerald-700">
                    <CheckCircle2 className="h-3 w-3" /> Signed In
                  </span>
                )}
              </div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                {profile.name}
              </h1>
              <p className="text-xs font-bold text-slate-500">
                {profile.email || profile.username} • {profile.school},{" "}
                {profile.city}
              </p>
            </div>
          </div>

          {isAuthenticated && (
            <button
              onClick={() => signOutUser()}
              className="btn-3d-white px-4 py-2.5 text-xs inline-flex items-center gap-1.5 text-rose-600"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>Sign Out</span>
            </button>
          )}
        </div>

        {/* Active Plan Bought Section */}
        <div
          className={`rounded-2xl border-2 p-5 space-y-4 ${planInfo.cardStyle}`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <span
                className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-0.5 text-[10px] font-extrabold uppercase ${planInfo.badgeStyle}`}
              >
                <Crown className="h-3 w-3" />
                {planInfo.badge}
              </span>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Current Plan: {planInfo.name}
              </h2>
              <p className="text-xs font-semibold text-slate-600">
                {planInfo.summary}
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setDefaultModalPkg(profile.proPassPlan || "WEEKLY");
                setShowPassModal(true);
              }}
              className="btn-3d-amber px-4 py-2.5 text-xs inline-flex items-center gap-1.5 shrink-0"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>
                {profile.proPassPlan
                  ? dailyPassesLeft + compPassesLeft === 0
                    ? "Recharge Quiz Pass"
                    : "Recharge / Add Pass"
                  : "Buy Quiz Pass"}
              </span>
            </button>
          </div>

          {/* Remaining Pass Balances */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-200/70">
            <div className="rounded-xl bg-white border border-slate-200 p-3.5">
              <p className="text-[11px] font-extrabold uppercase text-slate-400 flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-indigo-600" />
                Daily Quiz Credits Left
              </p>
              <p className="text-xl font-extrabold text-slate-900 mt-1">
                {dailyPassesLeft}
              </p>
              <p className="text-[10px] font-bold text-slate-400 mt-0.5">
                1 deducted per Daily Quiz
              </p>
            </div>

            <div className="rounded-xl bg-white border border-slate-200 p-3.5">
              <p className="text-[11px] font-extrabold uppercase text-slate-400 flex items-center gap-1">
                <Award className="h-3.5 w-3.5 text-amber-600" />
                Weekly Quiz Credits Left
              </p>
              <p className="text-xl font-extrabold text-slate-900 mt-1">
                {compPassesLeft}
              </p>
              <p className="text-[10px] font-bold text-slate-400 mt-0.5">
                1 deducted per Weekly Quiz
              </p>
            </div>

            <div className="rounded-xl bg-white border border-slate-200 p-3.5">
              <p className="text-[11px] font-extrabold uppercase text-slate-400">
                Earned Gyan Points (GP)
              </p>
              <p className="text-xl font-extrabold text-emerald-600 mt-1">
                {profile.xp.toLocaleString()} GP
              </p>
              <p className="text-[10px] font-bold text-slate-400 mt-0.5">
                Earned only by studying &amp; unit tests
              </p>
            </div>
          </div>

          <p className="text-[11px] font-bold text-slate-500 bg-white/80 border border-slate-200 rounded-xl px-3.5 py-2">
            💡 <strong>Quiz-Wise Pass Policy:</strong> Passes are strictly based on{" "}
            <strong>quiz count</strong> (not unlimited per day). <strong>⚡ Basic Pass (₹49)</strong> = 2 Daily Quizzes,{" "}
            <strong>💎 VIP Pass (₹149)</strong> = 7 Daily Quizzes + 1 Weekly Quiz,{" "}
            <strong>👑 Pro Pass (₹499)</strong> = 30 Daily Quizzes + 4 Weekly Quizzes. If you exhaust all your Daily Quizzes early (e.g., taking 7 quizzes in 2 days across multiple classes/subjects), your balance becomes 0 and you must recharge.
          </p>
        </div>

        {/* Academic Preferences (Class & Board Settings) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div>
            <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
              Your Class Preference
            </label>
            <select
              value={profile.classGrade}
              onChange={(e) =>
                updateProfileBoardAndClass(
                  profile.board,
                  Number(e.target.value) as ClassGrade
                )
              }
              className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none"
            >
              <option value={9}>Class 9</option>
              <option value={10}>Class 10</option>
              <option value={11}>Class 11</option>
              <option value={12}>Class 12</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
              Your Board Preference
            </label>
            <select
              value={profile.board}
              onChange={(e) =>
                updateProfileBoardAndClass(
                  e.target.value as "CBSE" | "ICSE",
                  profile.classGrade
                )
              }
              className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none"
            >
              <option value="CBSE">CBSE Board</option>
              <option value="ICSE">ICSE / ISC Board</option>
            </select>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SIGN IN / SIGN UP CARD (Shown when user is not yet signed in)
         ==================================================================== */}
      {!isAuthenticated && (
        <div className="rounded-3xl border-2 border-slate-200 bg-white p-6 sm:p-8 shadow-[0_8px_0_0_#e2e8f0] space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-[11px] font-extrabold text-slate-600">
              <Database className="h-3.5 w-3.5 text-emerald-600" />
              <span>
                {isSupabaseConfigured
                  ? "Supabase Auth Connected"
                  : "Supabase Ready (Add keys in .env.local for Cloud Sync)"}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {mode === "SIGNIN"
                ? "Sign In to Sync Your Account"
                : "Create Your Scholar Account"}
            </h2>
            <p className="text-xs sm:text-sm font-medium text-slate-500">
              {mode === "SIGNIN"
                ? "Sign in to save your active quiz pass, unit test scores, and GP (Gyan Points)."
                : "Join for free to track your chapters, unit tests, and active quiz passes across devices."}
            </p>
          </div>

          {/* Mode Switcher Tabs: Sign In | Sign Up */}
          <div className="grid grid-cols-2 gap-2 rounded-2xl bg-slate-100 p-1.5 border border-slate-200">
            <button
              type="button"
              onClick={() => {
                setMode("SIGNIN");
                setErrorMsg(null);
                setSuccessMsg(null);
              }}
              className={`rounded-xl py-2.5 text-xs sm:text-sm font-extrabold transition ${
                mode === "SIGNIN"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("SIGNUP");
                setErrorMsg(null);
                setSuccessMsg(null);
              }}
              className={`rounded-xl py-2.5 text-xs sm:text-sm font-extrabold transition ${
                mode === "SIGNUP"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Error / Success Alerts */}
          {errorMsg && (
            <div className="rounded-2xl bg-rose-50 border-2 border-rose-200 p-3.5 flex items-start gap-2.5 text-xs font-bold text-rose-800">
              <AlertCircle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="rounded-2xl bg-emerald-50 border-2 border-emerald-200 p-3.5 flex items-start gap-2.5 text-xs font-bold text-emerald-800">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Main Auth Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "SIGNUP" && (
              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    required
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className={inputClass}
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                Password *
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 6 characters"
                  className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50 pl-11 pr-11 py-3 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {mode === "SIGNUP" && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                      Class *
                    </label>
                    <select
                      value={classGrade}
                      onChange={(e) =>
                        setClassGrade(Number(e.target.value) as ClassGrade)
                      }
                      className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none"
                    >
                      <option value={9}>Class 9</option>
                      <option value={10}>Class 10</option>
                      <option value={11}>Class 11</option>
                      <option value={12}>Class 12</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                      Board *
                    </label>
                    <select
                      value={board}
                      onChange={(e) =>
                        setBoard(e.target.value as "CBSE" | "ICSE")
                      }
                      className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none"
                    >
                      <option value="CBSE">CBSE Board</option>
                      <option value="ICSE">ICSE / ISC Board</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                      City
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g., Delhi, Mumbai"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                      School Name
                    </label>
                    <div className="relative">
                      <School className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                        placeholder="Your school name"
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                {/* Explicit Terms & Educational Disclaimer Acceptance */}
                <label className="flex items-start gap-2.5 rounded-2xl bg-slate-50 border border-slate-200 p-3.5 text-xs font-medium text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span>
                    I agree to VidyaLila&apos;s{" "}
                    <Link
                      href="/terms"
                      className="font-extrabold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                    >
                      Terms of Use, Educational Disclaimer &amp; Quiz Fair-Play
                      Policy
                    </Link>{" "}
                    and understand that VidyaLila is a supplementary self-study
                    aid alongside official NCERT/Board textbooks.
                  </span>
                </label>
              </>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full btn-3d-emerald py-3.5 text-sm flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <span>
                {submitting
                  ? "Please wait..."
                  : mode === "SIGNIN"
                  ? "Sign In to VidyaLila"
                  : "Create Free Account"}
              </span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex items-center justify-center">
            <div className="border-t border-slate-200 w-full" />
            <span className="bg-white px-3 text-[11px] font-bold uppercase text-slate-400">
              OR
            </span>
            <div className="border-t border-slate-200 w-full" />
          </div>

          {/* 1-Click Google Sign-In via Supabase OAuth */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full btn-3d-white py-3 text-xs sm:text-sm flex items-center justify-center gap-2.5"
          >
            <span>🌐</span>
            <span>Continue with Google (Supabase OAuth)</span>
          </button>
        </div>
      )}

      <PaymentModal
        isOpen={showPassModal}
        onClose={() => setShowPassModal(false)}
        defaultPackage={defaultModalPkg}
        onSuccessPackage={(pkg) => activateProPass(pkg)}
      />
    </div>
  );
}
