"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useApp } from "@/lib/store";
import { ClassGrade, ContentLanguage } from "@/lib/mock-data";
import { isSupabaseConfigured } from "@/lib/supabase";
import { PaymentModal, PassPackageType } from "@/components/PaymentModal";
import {
  Mail,
  Lock,
  User,
  Phone,
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
  GraduationCap,
  Languages,
  AtSign,
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
    name: "No Active Quiz Pass Purchased",
    badge: "NO ACTIVE PASS",
    summary:
      "Chapter study units & unit practice tests are 100% free with your account. Buy a Basic (₹49), VIP (₹149), or Pro (₹499) Pass to unlock Live Daily & Weekly Quizzes.",
    badgeStyle: "bg-slate-200 border-slate-300 text-slate-700",
    cardStyle: "border-slate-200 bg-slate-50",
  };
}

function AuthAndSettingsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectParam = searchParams.get("redirect") || "/";
  const modeParam = searchParams.get("mode");

  const {
    profile,
    isAuthenticated,
    contentLanguage,
    signUpUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
    updateProfileBoardAndClass,
    checkUsernameAvailability,
    updateUniqueUsername,
    activateProPass,
  } = useApp();

  const [mode, setMode] = useState<"SIGNIN" | "SIGNUP">(
    modeParam === "signup" ? "SIGNUP" : "SIGNIN"
  );

  useEffect(() => {
    if (modeParam === "signup") setMode("SIGNUP");
    else if (modeParam === "signin") setMode("SIGNIN");
  }, [modeParam]);

  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [showPassModal, setShowPassModal] = useState(false);
  const [defaultModalPkg, setDefaultModalPkg] =
    useState<PassPackageType>("WEEKLY");

  // Form states for Sign Up / Sign In
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [board] = useState<"CBSE" | "ICSE">("CBSE");
  const [classGrade, setClassGrade] = useState<ClassGrade>(9);
  const [preferredLanguage, setPreferredLanguage] =
    useState<ContentLanguage>("HINGLISH");
  const [city, setCity] = useState("");
  const [school, setSchool] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(true);

  // Live username availability check for Sign Up form
  const [checkingSignupHandle, setCheckingSignupHandle] = useState(false);
  const [signupHandleAvailable, setSignupHandleAvailable] = useState<
    boolean | null
  >(null);
  const [signupHandleError, setSignupHandleError] = useState<string | null>(
    null
  );
  const [signupHandleSuggestions, setSignupHandleSuggestions] = useState<
    string[]
  >([]);

  useEffect(() => {
    if (mode !== "SIGNUP") return;
    const cleaned = username.trim().replace(/^@+/, "").toLowerCase();
    if (!cleaned) {
      setSignupHandleAvailable(null);
      setSignupHandleError(null);
      setSignupHandleSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      setCheckingSignupHandle(true);
      const res = await checkUsernameAvailability(cleaned);
      setCheckingSignupHandle(false);
      setSignupHandleAvailable(res.available);
      setSignupHandleError(res.available ? null : res.error || null);
      setSignupHandleSuggestions(res.suggestions || []);
    }, 300);

    return () => clearTimeout(timer);
  }, [username, mode]);

  // Editable Unique @username in User Settings (when signed in)
  const [settingsUsername, setSettingsUsername] = useState("");
  const [checkingSettingsHandle, setCheckingSettingsHandle] = useState(false);
  const [settingsHandleAvailable, setSettingsHandleAvailable] = useState<
    boolean | null
  >(null);
  const [settingsHandleError, setSettingsHandleError] = useState<string | null>(
    null
  );
  const [settingsHandleMsg, setSettingsHandleMsg] = useState<string | null>(
    null
  );
  const [savingSettingsHandle, setSavingSettingsHandle] = useState(false);

  useEffect(() => {
    if (profile.username) {
      setSettingsUsername(profile.username.replace(/^@+/, ""));
    }
  }, [profile.username]);

  useEffect(() => {
    if (!isAuthenticated) return;
    const cleaned = settingsUsername.trim().replace(/^@+/, "").toLowerCase();
    const currentClean = (profile.username || "")
      .replace(/^@+/, "")
      .toLowerCase();

    if (!cleaned || cleaned === currentClean) {
      setSettingsHandleAvailable(null);
      setSettingsHandleError(null);
      return;
    }

    const timer = setTimeout(async () => {
      setCheckingSettingsHandle(true);
      const res = await checkUsernameAvailability(cleaned);
      setCheckingSettingsHandle(false);
      setSettingsHandleAvailable(res.available);
      setSettingsHandleError(res.available ? null : res.error || null);
    }, 300);

    return () => clearTimeout(timer);
  }, [settingsUsername, isAuthenticated, profile.username]);

  const handleSaveSettingsUsername = async () => {
    setSettingsHandleError(null);
    setSettingsHandleMsg(null);
    setSavingSettingsHandle(true);
    const res = await updateUniqueUsername(settingsUsername);
    setSavingSettingsHandle(false);
    if (!res.ok) {
      setSettingsHandleAvailable(false);
      setSettingsHandleError(
        res.error || "That username is already taken. Please choose another."
      );
    } else {
      setSettingsHandleAvailable(true);
      setSettingsHandleMsg(`Saved unique username ${res.username}!`);
    }
  };

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
      if (signupHandleAvailable === false) {
        setErrorMsg(
          signupHandleError ||
            "That @username is already taken. Please pick another unique username."
        );
        setSubmitting(false);
        return;
      }
      const res = await signUpUser({
        email,
        password,
        fullName,
        username,
        phone,
        board,
        classGrade,
        preferredLanguage,
        city: city || "Delhi",
        school: school || "VidyaLila Scholar",
      });
      setSubmitting(false);
      if (!res.ok) {
        setErrorMsg(res.error || "Sign up failed.");
      } else {
        setSuccessMsg(
          res.message || "Account created! Redirecting..."
        );
        setTimeout(() => router.push(redirectParam), 700);
      }
    } else {
      const res = await signInUser(email, password);
      setSubmitting(false);
      if (!res.ok) {
        setErrorMsg(res.error || "Invalid credentials.");
      } else {
        setSuccessMsg("Signed in! Redirecting...");
        setTimeout(() => router.push(redirectParam), 500);
      }
    }
  };

  const handleGoogleLogin = async () => {
    setErrorMsg(null);
    setSuccessMsg(null);
    const res = await signInWithGoogle(redirectParam);
    if (!res.ok && res.error) {
      setErrorMsg(res.error);
    }
  };

  const handleSignOut = async () => {
    setErrorMsg(null);
    await signOutUser();
    setSuccessMsg("You have been signed out cleanly.");
  };

  const inputClass =
    "w-full rounded-2xl border-2 border-slate-200 bg-slate-50 pl-11 pr-4 py-3 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none transition";

  const activeUserLang = profile.preferredLanguage || contentLanguage;

  return (
    <div className="mx-auto max-w-4xl py-4 sm:py-6 space-y-6">
      {/* ====================================================================
          1. USER SETTINGS & ACTIVE SUBSCRIPTION PLAN CARD
             Shown ONLY when the user is signed in (isAuthenticated === true)
         ==================================================================== */}
      {isAuthenticated && (
        <section className="rounded-3xl border-2 border-slate-200 bg-white p-6 sm:p-8 shadow-[0_6px_0_0_#e2e8f0] space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div className="flex items-center gap-3.5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 border-b-4 border-emerald-700 text-2xl text-white shadow-sm overflow-hidden">
                {profile.avatar?.startsWith("http") ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  profile.avatar || "🚀"
                )}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-[11px] font-extrabold text-slate-700">
                    <Settings className="h-3 w-3 text-indigo-600" />
                    User Settings &amp; Active Plan
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-extrabold text-emerald-700">
                    <CheckCircle2 className="h-3 w-3" /> Signed In
                  </span>
                </div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                  {profile.name}
                </h1>
                <p className="text-xs font-bold text-slate-500">
                  {profile.email || profile.username} • Class {profile.classGrade} •{" "}
                  {activeUserLang === "HINGLISH" ? "Hinglish" : "English"}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleSignOut}
              className="btn-3d-white px-4 py-2.5 text-xs inline-flex items-center gap-1.5 text-rose-600"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>Sign Out</span>
            </button>
          </div>

          {/* Study Preferences: Unique @username, Class (9-12) & Language Preference (Hinglish / English) */}
          <div className="rounded-2xl border-2 border-indigo-100 bg-indigo-50/40 p-5 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <div>
                <h2 className="text-sm sm:text-base font-extrabold text-slate-900">
                  Your Study Preferences &amp; Unique Handle
                </h2>
                <p className="text-xs font-semibold text-slate-500">
                  Your unique <strong>@username</strong> identifies you on the Ranks Leaderboard. Change your Class or Study Language anytime.
                </p>
              </div>
            </div>

            {/* Unique @username Editor */}
            <div className="space-y-1.5">
              <label className="flex items-center justify-between text-xs font-extrabold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <AtSign className="h-4 w-4 text-emerald-600" />
                  <span>Your Unique Username (Ranks Handle)</span>
                </span>
                {checkingSettingsHandle && (
                  <span className="text-[11px] font-bold text-slate-400">
                    Checking availability...
                  </span>
                )}
                {!checkingSettingsHandle && settingsHandleAvailable === true && (
                  <span className="text-[11px] font-extrabold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" /> @
                    {settingsUsername.trim().replace(/^@+/, "").toLowerCase()} is available!
                  </span>
                )}
              </label>

              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-extrabold text-slate-400">
                    @
                  </span>
                  <input
                    type="text"
                    value={settingsUsername.replace(/^@+/, "")}
                    onChange={(e) => {
                      setSettingsUsername(
                        e.target.value.replace(/^@+/, "").toLowerCase()
                      );
                      setSettingsHandleMsg(null);
                    }}
                    placeholder="e.g. aarav_optics"
                    className={`w-full rounded-2xl border-2 bg-white pl-9 pr-4 py-2.5 text-sm font-bold text-slate-900 focus:outline-none transition ${
                      settingsHandleAvailable === false
                        ? "border-rose-400 focus:border-rose-500"
                        : "border-slate-200 focus:border-emerald-500"
                    }`}
                  />
                </div>
                <button
                  type="button"
                  onClick={handleSaveSettingsUsername}
                  disabled={
                    savingSettingsHandle ||
                    checkingSettingsHandle ||
                    settingsHandleAvailable === false ||
                    !settingsUsername.trim() ||
                    `@${settingsUsername.trim().replace(/^@+/, "").toLowerCase()}` ===
                      (profile.username || "").toLowerCase()
                  }
                  className="btn-3d-emerald px-5 py-2.5 text-xs font-extrabold shrink-0 disabled:opacity-50"
                >
                  {savingSettingsHandle ? "Saving..." : "Save @Username"}
                </button>
              </div>

              {settingsHandleError && (
                <p className="text-xs font-bold text-rose-600 flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>{settingsHandleError}</span>
                </p>
              )}
              {settingsHandleMsg && (
                <p className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                  <span>{settingsHandleMsg}</span>
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Class Preference */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-extrabold text-slate-700 mb-1.5">
                  <GraduationCap className="h-4 w-4 text-indigo-600" />
                  <span>Your Class Preference</span>
                </label>
                <select
                  value={profile.classGrade}
                  onChange={(e) =>
                    updateProfileBoardAndClass(
                      profile.board,
                      Number(e.target.value) as ClassGrade,
                      activeUserLang
                    )
                  }
                  className="w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-900 focus:border-emerald-500 focus:outline-none"
                >
                  <option value={9}>Class 9</option>
                  <option value={10}>Class 10</option>
                  <option value={11}>Class 11</option>
                  <option value={12}>Class 12</option>
                </select>
              </div>

              {/* Language Preference */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-extrabold text-slate-700 mb-1.5">
                  <Languages className="h-4 w-4 text-emerald-600" />
                  <span>Preferred Study Language</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      updateProfileBoardAndClass(
                        profile.board,
                        profile.classGrade,
                        "HINGLISH"
                      )
                    }
                    className={`rounded-2xl border-2 py-2.5 px-3 text-xs sm:text-sm font-extrabold transition ${
                      activeUserLang === "HINGLISH"
                        ? "border-emerald-600 bg-emerald-600 text-white shadow-sm"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    🇮🇳 Hinglish
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      updateProfileBoardAndClass(
                        profile.board,
                        profile.classGrade,
                        "ENGLISH"
                      )
                    }
                    className={`rounded-2xl border-2 py-2.5 px-3 text-xs sm:text-sm font-extrabold transition ${
                      activeUserLang === "ENGLISH"
                        ? "border-emerald-600 bg-emerald-600 text-white shadow-sm"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    🇬🇧 English
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Active Quiz Pass & Credits Section (Only for Signed-In Users) */}
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
                  {planInfo.name}
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
          </div>
        </section>
      )}

      {/* ====================================================================
          2. SIGN IN / SIGN UP CARD
             Shown ONLY when the user is NOT signed in (!isAuthenticated)
         ==================================================================== */}
      {!isAuthenticated && (
        <div className="mx-auto max-w-xl rounded-3xl border-2 border-slate-200 bg-white p-6 sm:p-8 shadow-[0_8px_0_0_#e2e8f0] space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-[11px] font-extrabold text-slate-600">
              <Database className="h-3.5 w-3.5 text-emerald-600" />
              <span>
                {isSupabaseConfigured
                  ? "Supabase Cloud Auth Active"
                  : "Local Auth Mode"}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {mode === "SIGNIN"
                ? "Sign In to VidyaLila"
                : "Create Your Scholar Account"}
            </h1>
            <p className="text-xs sm:text-sm font-medium text-slate-500">
              {mode === "SIGNIN"
                ? "Sign in to access chapter practice tests, save your study preferences, and manage quiz passes."
                : "Create a free account to unlock chapter practice tests and personalize your Class & Study Language."}
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

          {/* 1-Click Google Sign-In Button at Top */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full btn-3d-white py-3.5 text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2.5"
          >
            <svg
              className="h-4 w-4 shrink-0"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill="#4285F4"
                d="M23.49 12.275c0-.79-.07-1.545-.2-2.275H12v4.51h6.47c-.29 1.48-1.14 2.735-2.405 3.58v2.98h3.88c2.27-2.09 3.545-5.17 3.545-8.795z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.955-1.08 7.94-2.92l-3.88-2.98c-1.075.72-2.45 1.15-4.06 1.15-3.12 0-5.77-2.11-6.715-4.95H1.275v3.09C3.25 21.305 7.31 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.285 14.3c-.24-.72-.38-1.49-.38-2.3s.14-1.58.38-2.3V6.61H1.275C.465 8.22 0 10.055 0 12s.465 3.78 1.275 5.39l4.01-3.09z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.76 0 3.34.605 4.585 1.795l3.435-3.435C17.95 1.19 15.235 0 12 0 7.31 0 3.25 2.695 1.275 6.61l4.01 3.09C6.23 6.86 8.88 4.75 12 4.75z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="relative flex items-center justify-center">
            <div className="border-t border-slate-200 w-full" />
            <span className="bg-white px-3 text-[11px] font-bold uppercase text-slate-400">
              OR USE EMAIL &amp; PASSWORD
            </span>
            <div className="border-t border-slate-200 w-full" />
          </div>

          {/* Main Auth Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "SIGNUP" && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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

                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        required
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="10-digit mobile number"
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                {/* Unique @username Field on Sign Up */}
                <div className="space-y-1.5">
                  <label className="flex items-center justify-between text-xs font-extrabold text-slate-700">
                    <span>Unique Username (@handle for Ranks) *</span>
                    {checkingSignupHandle && (
                      <span className="text-[11px] font-bold text-slate-400">
                        Checking availability...
                      </span>
                    )}
                    {!checkingSignupHandle && signupHandleAvailable === true && (
                      <span className="text-[11px] font-extrabold text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 className="h-3.5 w-3.5" /> @
                        {username.trim().replace(/^@+/, "").toLowerCase()} is available!
                      </span>
                    )}
                  </label>
                  <div className="relative">
                    <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      required
                      type="text"
                      value={username.replace(/^@+/, "")}
                      onChange={(e) =>
                        setUsername(
                          e.target.value.replace(/^@+/, "").toLowerCase()
                        )
                      }
                      placeholder="e.g. aarav_physics, ananya_9th"
                      className={`w-full rounded-2xl border-2 pl-11 pr-4 py-3 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none transition ${
                        signupHandleAvailable === false
                          ? "border-rose-400 bg-rose-50/40 focus:border-rose-500"
                          : signupHandleAvailable === true
                          ? "border-emerald-500 bg-emerald-50/20 focus:border-emerald-600"
                          : "border-slate-200 bg-slate-50 focus:border-emerald-500 focus:bg-white"
                      }`}
                    />
                  </div>
                  {signupHandleError && (
                    <div className="rounded-xl bg-rose-50 border border-rose-200 p-2.5 text-xs font-bold text-rose-800 space-y-1">
                      <p className="flex items-center gap-1.5">
                        <AlertCircle className="h-3.5 w-3.5 text-rose-600 shrink-0" />
                        <span>{signupHandleError}</span>
                      </p>
                      {signupHandleSuggestions.length > 0 && (
                        <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                          <span className="text-[11px] text-slate-500">
                            Try available:
                          </span>
                          {signupHandleSuggestions.map((sug) => (
                            <button
                              key={sug}
                              type="button"
                              onClick={() =>
                                setUsername(sug.replace(/^@+/, ""))
                              }
                              className="rounded-lg bg-white border border-rose-200 px-2 py-0.5 text-[11px] font-extrabold text-emerald-700 hover:bg-emerald-50"
                            >
                              {sug}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </>
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
                      Your Class *
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
                      Preferred Study Language *
                    </label>
                    <select
                      value={preferredLanguage}
                      onChange={(e) =>
                        setPreferredLanguage(e.target.value as ContentLanguage)
                      }
                      className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none"
                    >
                      <option value="HINGLISH">🇮🇳 Hinglish (Hindi + English)</option>
                      <option value="ENGLISH">🇬🇧 English (Pure English)</option>
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
                    aid.
                  </span>
                </label>
              </>
            )}

            <button
              type="submit"
              disabled={
                submitting ||
                (mode === "SIGNUP" &&
                  (checkingSignupHandle || signupHandleAvailable === false))
              }
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
        </div>
      )}

      {isAuthenticated && (
        <PaymentModal
          isOpen={showPassModal}
          onClose={() => setShowPassModal(false)}
          defaultPackage={defaultModalPkg}
          onSuccessPackage={(pkg) => activateProPass(pkg)}
        />
      )}
    </div>
  );
}

export default function AuthAndSettingsPage() {
  return (
    <Suspense
      fallback={
        <div className="p-10 text-center text-sm font-bold text-slate-500">
          Loading Sign In...
        </div>
      }
    >
      <AuthAndSettingsContent />
    </Suspense>
  );
}
