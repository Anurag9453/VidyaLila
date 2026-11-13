"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/lib/store";
import { ClassGrade, ContentLanguage } from "@/lib/mock-data";
import {
  Compass,
  Swords,
  Trophy,
  Flame,
  Crown,
  Sparkles,
  UserCheck,
  LogIn,
  LogOut,
  MessageSquare,
  GraduationCap,
  Languages,
  CheckCircle2,
  AtSign,
  AlertCircle,
  Lock,
  Headphones,
} from "lucide-react";
import { PaymentModal } from "./PaymentModal";
import { DailyStreakModal } from "./DailyStreakModal";
import { BrandLogo } from "./BrandLogo";

export function Navbar() {
  const pathname = usePathname();
  const {
    profile,
    isAuthenticated,
    currentRank,
    activateProPass,
    signOutUser,
    checkUsernameAvailability,
    completeOnboardingPreferences,
    hasPlayedDailyTrickToday,
    setShowDailyTrickModal,
  } = useApp();
  const [showPassModal, setShowPassModal] = useState(false);

  // First-time onboarding modal state (Unique @username + Class 9-12 + Language Preference)
  const [onboardUsername, setOnboardUsername] = useState("");
  const [onboardClass, setOnboardClass] = useState<ClassGrade>(
    profile.classGrade === 10 ? 10 : 9
  );
  const [onboardClassError, setOnboardClassError] = useState<string | null>(null);
  const [onboardLang, setOnboardLang] = useState<ContentLanguage>("HINGLISH");
  const [savingOnboarding, setSavingOnboarding] = useState(false);
  const [checkingHandle, setCheckingHandle] = useState(false);
  const [handleAvailable, setHandleAvailable] = useState<boolean | null>(null);
  const [handleError, setHandleError] = useState<string | null>(null);
  const [handleSuggestions, setHandleSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (profile.classGrade) {
      setOnboardClass(profile.classGrade);
    }
    if (profile.preferredLanguage) {
      setOnboardLang(profile.preferredLanguage);
    }
    if (
      profile.username &&
      profile.username !== "@guest_scholar" &&
      !onboardUsername
    ) {
      setOnboardUsername(profile.username.replace(/^@+/, ""));
    }
  }, [profile.classGrade, profile.preferredLanguage, profile.username]);

  const showFirstTimeModal =
    isAuthenticated && profile.hasCompletedOnboarding === false;

  useEffect(() => {
    if (!showFirstTimeModal) return;
    const cleaned = onboardUsername.trim().replace(/^@+/, "").toLowerCase();
    if (!cleaned) {
      setHandleAvailable(null);
      setHandleError(null);
      setHandleSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      setCheckingHandle(true);
      const res = await checkUsernameAvailability(cleaned);
      setCheckingHandle(false);
      setHandleAvailable(res.available);
      setHandleError(res.available ? null : res.error || "Username is taken.");
      setHandleSuggestions(res.suggestions || []);
    }, 300);

    return () => clearTimeout(timer);
  }, [onboardUsername, showFirstTimeModal]);

  const handleSaveFirstTimePreferences = async (e: React.FormEvent) => {
    e.preventDefault();
    setHandleError(null);
    setSavingOnboarding(true);
    const res = await completeOnboardingPreferences(
      onboardClass,
      onboardLang,
      onboardUsername
    );
    setSavingOnboarding(false);
    if (!res.ok) {
      setHandleAvailable(false);
      setHandleError(
        res.error || "That username is already taken. Please pick another one."
      );
    }
  };

  const navItems = [
    {
      href: "/",
      label: "Learn",
      icon: Compass,
    },
    {
      href: "/contests",
      label: "Quizzes",
      icon: Swords,
    },
    {
      href: "/doubts",
      label: "Doubts",
      icon: MessageSquare,
    },
    {
      href: "/leaderboard",
      label: "Ranks",
      icon: Trophy,
    },
    {
      href: "/support",
      label: "Support",
      icon: Headphones,
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between gap-2 px-3.5 py-2.5 sm:px-6 sm:py-3.5 md:px-10 lg:px-16">
          {/* Brand Logo: Peacock Feather (Morpankh) + Open Book Crest */}
          <Link
            href="/"
            className="shrink-0 group hover:-translate-y-0.5 transition"
          >
            <BrandLogo size="md" showText={true} />
          </Link>

          {/* Center Navigation (Tablet & Desktop) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/"
                  ? pathname === "/" || pathname.startsWith("/trails")
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 rounded-xl px-3.5 lg:px-4 py-2 text-xs lg:text-sm font-bold transition-all ${
                    isActive
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: Only show Streak, GP & Pass when Signed In */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {isAuthenticated ? (
              <>
                <button
                  type="button"
                  onClick={() => setShowDailyTrickModal(true)}
                  title="Click to play your Daily Streak Golden Trick Question (+15 🪙 Credits!)"
                  className="flex items-center gap-1 rounded-xl bg-orange-50 border border-orange-300 px-2.5 py-1 sm:py-1.5 text-[11px] sm:text-xs font-extrabold text-orange-800 hover:bg-orange-100 transition cursor-pointer relative"
                >
                  <Flame className="h-4 w-4 text-orange-500 fill-orange-500" />
                  <span>{profile.streak || 1}d</span>
                  {!hasPlayedDailyTrickToday && (
                    <span className="ml-0.5 rounded-full bg-amber-400 text-slate-950 px-1.5 py-0.2 text-[9px] font-black animate-pulse">
                      +15🪙
                    </span>
                  )}
                </button>

                <Link
                  href="/leaderboard"
                  title="Gyan Points (GP)"
                  className="flex items-center gap-1 rounded-xl bg-emerald-50 border border-emerald-200 px-2 sm:px-2.5 py-1 sm:py-1.5 text-[11px] sm:text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition"
                >
                  <span>{currentRank.badgeEmoji}</span>
                  <span>{profile.xp.toLocaleString()}</span>
                  <span className="hidden sm:inline">GP</span>
                </Link>

                <div className="flex items-center gap-1 rounded-xl bg-amber-50 border border-amber-300 px-2.5 py-1 sm:py-1.5 text-[11px] sm:text-xs font-extrabold text-amber-900">
                  <Link
                    href="/auth"
                    title="View Vidya Credits Wallet & Passbook in User Settings"
                    className="flex items-center gap-1 hover:text-indigo-700 transition"
                  >
                    <span>🪙</span>
                    <span>{(profile.credits ?? 300).toLocaleString()}</span>
                    <span className="hidden lg:inline">Credits</span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => setShowPassModal(true)}
                    title="Buy More Vidya Credits"
                    className="ml-1 rounded-lg bg-amber-400 hover:bg-amber-500 text-slate-950 px-1.5 py-0.5 text-[10px] font-black transition cursor-pointer"
                  >
                    + Buy
                  </button>
                </div>

                <div className="flex items-center gap-1.5">
                  <Link
                    href="/auth"
                    title="Account & Settings"
                    className="rounded-xl bg-indigo-50 border border-indigo-200 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-extrabold text-indigo-800 hover:bg-indigo-100 flex items-center gap-1.5 transition"
                  >
                    {profile.avatar?.startsWith("http") ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={profile.avatar}
                        alt={profile.name}
                        className="h-4 w-4 rounded-full object-cover border border-indigo-300"
                      />
                    ) : (
                      <UserCheck className="h-3.5 w-3.5 text-indigo-600" />
                    )}
                    <span className="max-w-[90px] truncate">
                      {profile.name.split(" ")[0]} • Settings
                    </span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => signOutUser()}
                    title="Sign Out"
                    className="rounded-xl bg-rose-50 border border-rose-200 px-2.5 py-1 sm:py-1.5 text-[11px] sm:text-xs font-extrabold text-rose-700 hover:bg-rose-100 flex items-center gap-1 transition"
                  >
                    <LogOut className="h-3.5 w-3.5 text-rose-600" />
                    <span className="hidden sm:inline">Sign Out</span>
                  </button>
                </div>
              </>
            ) : (
              <Link
                href="/auth"
                className="rounded-xl bg-slate-900 text-white hover:bg-slate-800 shadow-sm px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-extrabold flex items-center gap-1.5 transition"
              >
                <LogIn className="h-3.5 w-3.5" />
                <span>Sign In</span>
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Fixed Native-Style Bottom Navigation Bar for Phones (< 768px) */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 flex md:hidden items-center justify-around border-t border-slate-200 bg-white/95 backdrop-blur-md px-2 py-2 shadow-[0_-4px_12px_rgba(0,0,0,0.04)]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/"
              ? pathname === "/" || pathname.startsWith("/trails")
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 rounded-xl px-4 py-1.5 text-[11px] font-bold transition ${
                isActive
                  ? "bg-emerald-50 text-emerald-600"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* ====================================================================
          FIRST-TIME SCHOLAR ONBOARDING MODAL (Unique @username, Class 9-12 & Language)
          Shown once when a user signs in / signs up for the very first time
         ==================================================================== */}
      {showFirstTimeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <form
            onSubmit={handleSaveFirstTimePreferences}
            className="w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl border-2 border-emerald-500 bg-white p-6 sm:p-8 shadow-[0_10px_0_0_#059669] space-y-5"
          >
            <div className="text-center space-y-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-extrabold text-emerald-800">
                <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                Welcome to VidyaLila, {profile.name.split(" ")[0]}!
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Set Your Unique Scholar Profile
              </h2>
              <p className="text-xs sm:text-sm font-medium text-slate-500">
                Pick a unique <strong>@username</strong> for the Ranks Leaderboard, along with your Class and preferred Study Language.
              </p>
            </div>

            {/* 1. Unique @username Selection */}
            <div className="space-y-2">
              <label className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-slate-700">
                <span className="flex items-center gap-1.5">
                  <AtSign className="h-4 w-4 text-emerald-600" />
                  <span>1. Choose Your Unique Username *</span>
                </span>
                {checkingHandle && (
                  <span className="text-[11px] font-bold text-slate-400">
                    Checking availability...
                  </span>
                )}
                {!checkingHandle && handleAvailable === true && (
                  <span className="text-[11px] font-extrabold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" /> @
                    {onboardUsername.trim().replace(/^@+/, "").toLowerCase()} is available!
                  </span>
                )}
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-extrabold text-slate-400">
                  @
                </span>
                <input
                  required
                  type="text"
                  value={onboardUsername.replace(/^@+/, "")}
                  onChange={(e) =>
                    setOnboardUsername(
                      e.target.value.replace(/^@+/, "").toLowerCase()
                    )
                  }
                  placeholder="e.g. aarav_physics, priya_9th"
                  className={`w-full rounded-2xl border-2 pl-9 pr-4 py-3 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none transition ${
                    handleAvailable === false
                      ? "border-rose-400 bg-rose-50/40 focus:border-rose-500"
                      : handleAvailable === true
                      ? "border-emerald-500 bg-emerald-50/20 focus:border-emerald-600"
                      : "border-slate-200 bg-slate-50 focus:border-emerald-500 focus:bg-white"
                  }`}
                />
              </div>

              {handleError && (
                <div className="rounded-xl bg-rose-50 border border-rose-200 p-2.5 text-xs font-bold text-rose-800 space-y-1.5">
                  <p className="flex items-center gap-1.5">
                    <AlertCircle className="h-4 w-4 text-rose-600 shrink-0" />
                    <span>{handleError}</span>
                  </p>
                  {handleSuggestions.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="text-[11px] text-slate-500">
                        Available suggestions:
                      </span>
                      {handleSuggestions.map((sug) => (
                        <button
                          key={sug}
                          type="button"
                          onClick={() =>
                            setOnboardUsername(sug.replace(/^@+/, ""))
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

            {/* 2. Class Selection (Class 9 & 10 Active, 11 & 12 Coming Soon) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-700">
                  <GraduationCap className="h-4 w-4 text-indigo-600" />
                  <span>2. Select Your Class</span>
                </label>
                <span className="text-[10px] font-bold text-slate-400">
                  Starting with Class 9 &amp; 10
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {([9, 10, 11, 12] as ClassGrade[]).map((grade) => {
                  const active = onboardClass === grade;
                  const isLocked = grade === 11 || grade === 12;

                  return (
                    <button
                      key={grade}
                      type="button"
                      onClick={() => {
                        if (isLocked) {
                          setOnboardClassError(
                            `Class ${grade} is coming soon! Please select Class 9 or 10 to start learning.`
                          );
                          return;
                        }
                        setOnboardClassError(null);
                        setOnboardClass(grade);
                      }}
                      className={`relative rounded-2xl border-2 border-b-4 py-3 px-3 text-center font-extrabold text-sm transition ${
                        isLocked
                          ? "border-slate-200 bg-slate-100 text-slate-400 opacity-60 hover:opacity-80 cursor-pointer"
                          : active
                          ? "border-indigo-600 bg-indigo-50 text-indigo-950"
                          : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      <div className="flex items-center justify-center gap-1">
                        <span>Class {grade}</span>
                        {isLocked && <Lock className="h-3 w-3 text-slate-400" />}
                      </div>
                      {isLocked && (
                        <span className="block text-[9px] font-black uppercase text-amber-600 mt-0.5">
                          Soon
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {onboardClassError && (
                <p className="text-xs font-bold text-amber-700 flex items-center gap-1.5 pt-1 animate-in fade-in">
                  <Lock className="h-3.5 w-3.5 shrink-0 text-amber-600" />
                  <span>{onboardClassError}</span>
                </p>
              )}
            </div>

            {/* 3. Language Preference (Hinglish or English) */}
            <div className="space-y-2">
              <label className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-700">
                <Languages className="h-4 w-4 text-emerald-600" />
                <span>3. Select Preferred Study Language</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setOnboardLang("HINGLISH")}
                  className={`rounded-2xl border-2 border-b-4 p-4 text-left transition space-y-1 ${
                    onboardLang === "HINGLISH"
                      ? "border-emerald-600 bg-emerald-50 text-emerald-950"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-extrabold">
                      🇮🇳 Hinglish
                    </span>
                    {onboardLang === "HINGLISH" && (
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    )}
                  </div>
                  <p className="text-[11px] font-semibold text-slate-500">
                    Friendly Hindi + English explanations (Desi stories &amp; easy intuition)
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setOnboardLang("ENGLISH")}
                  className={`rounded-2xl border-2 border-b-4 p-4 text-left transition space-y-1 ${
                    onboardLang === "ENGLISH"
                      ? "border-emerald-600 bg-emerald-50 text-emerald-950"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-extrabold">
                      🇬🇧 English
                    </span>
                    {onboardLang === "ENGLISH" && (
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    )}
                  </div>
                  <p className="text-[11px] font-semibold text-slate-500">
                    Clear, crisp standard English explanations &amp; definitions
                  </p>
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={
                savingOnboarding ||
                checkingHandle ||
                handleAvailable === false ||
                !onboardUsername.trim()
              }
              className="w-full btn-3d-emerald py-3.5 text-sm font-extrabold flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <CheckCircle2 className="h-4 w-4" />
              <span>
                {savingOnboarding
                  ? "Saving Your Profile..."
                  : `Save Profile (@${onboardUsername
                      .trim()
                      .replace(/^@+/, "")
                      .toLowerCase()} • Class ${onboardClass})`}
              </span>
            </button>
          </form>
        </div>
      )}

      <PaymentModal
        isOpen={showPassModal}
        onClose={() => setShowPassModal(false)}
        defaultPackage="WEEKLY"
        onSuccessPackage={(pkg) => activateProPass(pkg)}
      />
      <DailyStreakModal />
    </>
  );
}
