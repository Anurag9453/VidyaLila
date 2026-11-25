"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useApp } from "@/lib/store";
import {
  BoardType,
  ClassGrade,
  CoreSubject,
} from "@/lib/mock-data";
import {
  CheckCircle2,
  Clock,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Swords,
  Lock,
  Unlock,
  Sparkles,
  Flame,
  Gamepad2,
  Trophy,
  Zap,
  Globe2,
  BookOpen,
  Compass,
  LayoutGrid,
} from "lucide-react";
import { PaymentModal, PassPackageType } from "@/components/PaymentModal";
import { SkillTreeMap } from "@/components/SkillTreeMap";

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const {
    profile,
    isAuthenticated,
    modules,
    currentRank,
    nextRank,
    setShowDailyTrickModal,
    hasPlayedDailyTrickToday,
    isChapterFreeStarter,
    isChapterUnlocked,
    unlockChapterWithCredits,
    activateProPass,
    contentLanguage,
  } = useApp();

  const isHinglish = (profile.preferredLanguage || contentLanguage) === "HINGLISH";

  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [defaultModalPkg, setDefaultModalPkg] =
    useState<PassPackageType>("COMPREHENSIVE");
  const [pendingChapterToUnlock, setPendingChapterToUnlock] = useState<{
    id: string;
    title: string;
  } | null>(null);

  const paramClass = Number(searchParams.get("class")) as ClassGrade;
  const paramSubject = searchParams.get("subject") as CoreSubject | null;

  const [selectedClass, setSelectedClass] = useState<ClassGrade | null>(
    [9, 10, 11, 12].includes(paramClass) ? paramClass : null
  );
  const [selectedSubject, setSelectedSubject] = useState<CoreSubject | null>(
    paramSubject && ["Physics", "Chemistry", "Mathematics"].includes(paramSubject)
      ? paramSubject
      : null
  );
  const [comingSoonAlert, setComingSoonAlert] = useState<string | null>(null);
  const [chapterViewMode, setChapterViewMode] = useState<"MAP" | "GRID">("MAP");

  useEffect(() => {
    const c = Number(searchParams.get("class")) as ClassGrade;
    const s = searchParams.get("subject") as CoreSubject | null;
    if ([9, 10, 11, 12].includes(c)) {
      setSelectedClass(c);
    } else if (!searchParams.get("class")) {
      setSelectedClass(null);
    }
    if (s && ["Physics", "Chemistry", "Mathematics"].includes(s)) {
      setSelectedSubject(s);
    } else if (!searchParams.get("subject")) {
      setSelectedSubject(null);
    }
  }, [searchParams]);

  const currentStep = !selectedClass ? 1 : !selectedSubject ? 2 : 3;

  const classCards: {
    grade: ClassGrade;
    title: string;
    subtitle: string;
    emoji: string;
    bg: string;
    border: string;
    shadow: string;
    iconBg: string;
    isLocked?: boolean;
  }[] = [
    {
      grade: 9,
      title: "Grade 9 / Class 9",
      subtitle: "Year 10 / High School Foundation • Motion, Atoms & Algebra",
      emoji: "🌱",
      bg: "bg-emerald-50/70",
      border: "border-emerald-200 hover:border-emerald-400",
      shadow: "shadow-[0_6px_0_0_#a7f3d0]",
      iconBg: "bg-emerald-500",
      isLocked: false,
    },
    {
      grade: 10,
      title: "Grade 10 / Class 10",
      subtitle: "Year 11 / GCSE / IGCSE / Board • Optics, Electricity & Reactions",
      emoji: "🎯",
      bg: "bg-amber-50/70",
      border: "border-amber-200 hover:border-amber-400",
      shadow: "shadow-[0_6px_0_0_#fde68a]",
      iconBg: "bg-amber-500",
      isLocked: false,
    },
    {
      grade: 11,
      title: "Grade 11 / Class 11",
      subtitle: "Year 12 / Senior High • Vectors, Chemical Bonding & Calculus",
      emoji: "🚀",
      bg: "bg-indigo-50/70",
      border: "border-indigo-200 hover:border-indigo-400",
      shadow: "shadow-[0_6px_0_0_#c7d2fe]",
      iconBg: "bg-indigo-600",
      isLocked: false,
    },
    {
      grade: 12,
      title: "Grade 12 / Class 12",
      subtitle: "Year 13 / AP / A-Level • Electrostatics, Solutions & Integrals",
      emoji: "👑",
      bg: "bg-slate-100/90",
      border: "border-slate-300",
      shadow: "shadow-[0_4px_0_0_#cbd5e1]",
      iconBg: "bg-slate-400",
      isLocked: true,
    },
  ];

  const subjectCards: {
    subject: CoreSubject;
    categoryLabel: string;
    emoji: string;
    tagline: string;
    bg: string;
    border: string;
    shadow: string;
    iconBg: string;
  }[] = [
    {
      subject: "Physics",
      categoryLabel: "Core Science",
      emoji: "🔭",
      tagline: "Ray Diagrams, Electric Circuits, Laws of Motion & Electrostatics",
      bg: "bg-sky-50/70",
      border: "border-sky-200 hover:border-sky-400",
      shadow: "shadow-[0_6px_0_0_#bae6fd]",
      iconBg: "bg-sky-500",
    },
    {
      subject: "Chemistry",
      categoryLabel: "Core Science",
      emoji: "🧪",
      tagline: "Chemical Equations, Acids & Salts, Atomic Structure & Electrochemistry",
      bg: "bg-emerald-50/70",
      border: "border-emerald-200 hover:border-emerald-400",
      shadow: "shadow-[0_6px_0_0_#a7f3d0]",
      iconBg: "bg-emerald-500",
    },
    {
      subject: "Mathematics",
      categoryLabel: "Problem Solving",
      emoji: "📐",
      tagline: "Trigonometry, Quadratic Equations, Polynomials & Calculus",
      bg: "bg-amber-50/70",
      border: "border-amber-200 hover:border-amber-400",
      shadow: "shadow-[0_6px_0_0_#fde68a]",
      iconBg: "bg-amber-500",
    },
  ];

  const chaptersForSelection = modules.filter((m) => {
    const classMatch = m.classGrade === selectedClass;
    const subjMatch = m.subject === selectedSubject;
    return classMatch && subjMatch;
  });

  const handleSelectClass = (grade: ClassGrade) => {
    if (grade === 12) {
      setComingSoonAlert(
        `Class ${grade} chapters & tests are coming soon! We are currently live for Class 9, 10, and 11.`
      );
      return;
    }
    setComingSoonAlert(null);
    setSelectedClass(grade);
    setSelectedSubject(null);
    router.push(`/?class=${grade}`, { scroll: false });
  };

  const handleSelectSubject = (subj: CoreSubject) => {
    setSelectedSubject(subj);
    router.push(`/?class=${selectedClass}&subject=${encodeURIComponent(subj)}`, {
      scroll: false,
    });
  };

  const resetToClasses = () => {
    setSelectedClass(null);
    setSelectedSubject(null);
    router.push(`/`, { scroll: false });
  };

  const resetToSubjects = () => {
    setSelectedSubject(null);
    router.push(`/?class=${selectedClass}`, { scroll: false });
  };

  return (
    <div className="space-y-8">
      {/* SIMPLE BREADCRUMB BAR (Visible on Step 2 & Step 3) */}
      {currentStep > 1 && (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white border border-slate-200 px-5 py-3 shadow-sm">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            <button
              onClick={resetToClasses}
              className={`transition ${
                currentStep === 2
                  ? "text-emerald-600"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Class {selectedClass}
            </button>

            {selectedSubject && (
              <>
                <ChevronRight className="h-4 w-4 text-slate-400" />
                <span className="text-emerald-600">{selectedSubject}</span>
              </>
            )}
          </div>

          <button
            onClick={currentStep === 3 ? resetToSubjects : resetToClasses}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back
          </button>
        </div>
      )}

      {/* LIVELY INTERACTIVE BENTO HERO & STUDENT QUEST HUB (Step 1) */}
      {currentStep === 1 && (
        <section className="relative overflow-hidden rounded-3xl border-2 border-indigo-200/80 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6 sm:p-9 text-white shadow-[0_12px_32px_-8px_rgba(30,27,75,0.45)]">
          {/* Decorative Ambient Aurora Orbs */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-96 rounded-full bg-amber-400/10 blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-7">
            {/* Left Column: Dynamic Headline & Live Feature Pills */}
            <div className="max-w-2xl space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Live Global STEM Arena • 🇬🇧 English &amp; 🇮🇳 Hinglish</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 border border-amber-300/40 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-amber-300">
                  <Gamepad2 className="h-3.5 w-3.5" />
                  <span>4-in-1 Concept Game Arcade in Every Topic</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.12]">
                Master Physics, Chemistry &amp; Maths{" "}
                <span className="bg-gradient-to-r from-amber-300 via-emerald-300 to-sky-300 bg-clip-text text-transparent">
                  Like an Interactive Game.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-indigo-100/90 font-medium leading-relaxed">
                Pick your grade below to dive into story-driven visual chapters, defuse concept vaults in the 4-in-1 Game Arcade, and climb the Global Leaderboard.
              </p>

              {/* Platform Live Counters */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <div className="inline-flex items-center gap-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-2 text-xs font-extrabold text-white">
                  <BookOpen className="h-4 w-4 text-sky-300" />
                  <span>{modules.length} Interactive Chapters</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-2 text-xs font-extrabold text-white">
                  <Zap className="h-4 w-4 text-amber-300" />
                  <span>
                    {modules.reduce((acc, m) => acc + m.units.length, 0)}+ Visual Topics
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-2 text-xs font-extrabold text-white">
                  <Gamepad2 className="h-4 w-4 text-emerald-300" />
                  <span>
                    {modules.reduce((acc, m) => acc + m.units.length * 4, 0)}+ Mini-Games
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Student Live Status & Daily Quest Card */}
            <div className="w-full lg:w-[370px] shrink-0 rounded-3xl bg-white/10 backdrop-blur-xl border-2 border-white/20 p-5 space-y-4 shadow-xl">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-2xl shadow-md animate-float">
                    {currentRank.badgeEmoji}
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-indigo-200">
                      {isAuthenticated ? profile.name : "Scholar Status"}
                    </span>
                    <h3 className="text-base font-black text-white flex items-center gap-1.5">
                      <span>{currentRank.name} Tier</span>
                      <span className="rounded-lg bg-emerald-500/30 border border-emerald-400/40 px-2 py-0.5 text-[11px] text-emerald-200">
                        {profile.xp.toLocaleString()} XP
                      </span>
                    </h3>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 rounded-xl bg-orange-500/25 border border-orange-400/40 px-2.5 py-1 text-xs font-black text-orange-200">
                    <Flame className="h-3.5 w-3.5 text-orange-400 fill-orange-400" />
                    <span>{profile.streak || 1}d</span>
                  </span>
                </div>
              </div>

              {/* XP Progress Bar to Next Tier */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-extrabold text-indigo-200">
                  <span>Progress to {nextRank ? `${nextRank.badgeEmoji} ${nextRank.name}` : "Max Tier"}</span>
                  <span className="text-amber-300">
                    {nextRank
                      ? `${Math.max(0, nextRank.minXp - profile.xp).toLocaleString()} XP to go`
                      : "Grandmaster Unlocked!"}
                  </span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-slate-950/60 p-0.5 overflow-hidden border border-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-amber-300 to-sky-400 transition-all duration-500"
                    style={{
                      width: `${
                        nextRank
                          ? Math.min(
                              100,
                              Math.max(
                                12,
                                Math.round(
                                  ((profile.xp - currentRank.minXp) /
                                    Math.max(1, nextRank.minXp - currentRank.minXp)) *
                                    100
                                )
                              )
                            )
                          : 100
                      }%`,
                    }}
                  />
                </div>
              </div>

              {/* Quick Interactive Action Buttons */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => setShowDailyTrickModal(true)}
                  className="btn-3d-amber px-3 py-2.5 text-xs font-black flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Flame className="h-4 w-4 text-orange-600 fill-orange-500" />
                  <span>{hasPlayedDailyTrickToday ? "Daily Trick ✓" : "Daily Trick (+15🪙)"}</span>
                </button>
                <Link
                  href="/leaderboard"
                  className="rounded-xl sm:rounded-2xl bg-white/15 hover:bg-white/25 border-2 border-white/25 px-3 py-2.5 text-xs font-extrabold text-white flex items-center justify-center gap-1.5 transition"
                >
                  <Trophy className="h-4 w-4 text-amber-300" />
                  <span>Global Ranks</span>
                </Link>
              </div>
            </div>
          </div>

          {comingSoonAlert && (
            <div className="relative z-10 mt-6 rounded-2xl border-2 border-amber-300 bg-amber-50 p-4 text-amber-900 flex items-center justify-between gap-3 shadow-md text-left">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-extrabold">
                <Lock className="h-4 w-4 text-amber-600 shrink-0" />
                <span>{comingSoonAlert}</span>
              </div>
              <button
                type="button"
                onClick={() => setComingSoonAlert(null)}
                className="text-amber-800 hover:text-amber-950 font-black text-xs px-2.5 py-1 rounded-lg hover:bg-amber-100 transition shrink-0 cursor-pointer"
              >
                ✕ Dismiss
              </button>
            </div>
          )}
        </section>
      )}

      {/* ====================================================================
          STEP 1: 4 INTERACTIVE 3D BENTO GRADE CARDS (Class 9, 10, 11, 12)
         ==================================================================== */}
      {currentStep === 1 && (
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 px-1">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-indigo-600">
                Step 1 of 3 • Select Your Academic Track
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Choose Your Grade / Class Level
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-extrabold text-emerald-800">
              <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
              <span>First 2 Chapters Free in Every Subject</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {classCards.map((item) => {
              const gradeModules = modules.filter((m) => m.classGrade === item.grade);
              const gradeUnitsCount = gradeModules.reduce(
                (acc, m) => acc + m.units.length,
                0
              );
              const gradeTotalXp = gradeModules.reduce(
                (acc, m) => acc + m.totalXp,
                0
              );

              return (
                <button
                  key={item.grade}
                  type="button"
                  onClick={() => handleSelectClass(item.grade)}
                  className={`group relative text-left rounded-3xl p-6 flex flex-col justify-between gap-5 transition-all duration-300 ${
                    item.isLocked
                      ? "bg-slate-100/85 border-2 border-slate-300 shadow-[0_5px_0_0_#cbd5e1] hover:border-slate-400 cursor-pointer"
                      : `bg-white/95 backdrop-blur-md border-2 ${item.border} ${item.shadow} hover:-translate-y-1.5 hover:shadow-xl cursor-pointer`
                  }`}
                >
                  {item.isLocked ? (
                    <span className="absolute -top-3 right-5 rounded-full bg-slate-900 text-amber-300 border border-amber-400/50 px-3 py-0.5 text-[10px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <Lock className="h-3 w-3" />
                      Coming Soon
                    </span>
                  ) : (
                    <span className="absolute -top-3 right-5 rounded-full bg-gradient-to-r from-indigo-600 to-emerald-600 text-white px-3 py-0.5 text-[10px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <Sparkles className="h-3 w-3 text-amber-300" />
                      {gradeModules.length} Chapters Live
                    </span>
                  )}

                  <div className={`space-y-4 ${item.isLocked ? "opacity-60" : ""}`}>
                    <div className="flex items-center justify-between gap-3">
                      <div
                        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${
                          item.isLocked ? "bg-slate-400" : item.iconBg
                        } text-3xl text-white shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                      >
                        {item.isLocked ? "🔒" : item.emoji}
                      </div>

                      {!item.isLocked && (
                        <div className="text-right">
                          <span className="block text-[10px] font-black uppercase tracking-wider text-slate-400">
                            Total Reward
                          </span>
                          <span className="text-sm font-black text-amber-600">
                            ⚡ +{gradeTotalXp.toLocaleString()} XP
                          </span>
                        </div>
                      )}
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                        {item.isLocked
                          ? "Grade 12 syllabus is coming soon! Live chapters currently for Grade 9, 10 & 11."
                          : item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Interactive Footer inside Grade Card */}
                  <div className="space-y-3 pt-3 border-t border-slate-100 w-full">
                    {!item.isLocked ? (
                      <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-extrabold">
                        <span className="rounded-lg bg-sky-50 border border-sky-200 px-2 py-0.5 text-sky-800">
                          🔭 Physics
                        </span>
                        <span className="rounded-lg bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-emerald-800">
                          🧪 Chemistry
                        </span>
                        <span className="rounded-lg bg-amber-50 border border-amber-200 px-2 py-0.5 text-amber-800">
                          📐 Maths
                        </span>
                      </div>
                    ) : (
                      <div className="text-[11px] font-bold text-slate-400">
                        AP / IB / A-Level / Senior Track
                      </div>
                    )}

                    <div className="flex items-center justify-between text-xs font-extrabold">
                      <span className="text-slate-500">
                        {item.isLocked
                          ? "Notify on Launch"
                          : `${gradeUnitsCount} Topics • ${gradeUnitsCount * 4} Games`}
                      </span>
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-800 group-hover:bg-indigo-600 group-hover:text-white transition">
                        {item.isLocked ? (
                          <Lock className="h-3.5 w-3.5 text-slate-400" />
                        ) : (
                          <ArrowRight className="h-4 w-4" />
                        )}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* ====================================================================
          STEP 2: 3 INTERACTIVE SUBJECT CARDS (Physics, Chemistry, Mathematics)
         ==================================================================== */}
      {currentStep === 2 && selectedClass && (
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 px-1">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-indigo-600">
                Step 2 of 3 • Grade / Class {selectedClass} STEM Curriculum
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Pick a Subject Arena to Start Playing &amp; Learning
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subjectCards.map((subj) => {
              const subjChapters = modules.filter(
                (m) =>
                  m.classGrade === selectedClass && m.subject === subj.subject
              );
              const subjTotalUnits = subjChapters.reduce(
                (acc, m) => acc + m.units.length,
                0
              );
              const subjCompletedUnits = subjChapters.reduce(
                (acc, m) =>
                  acc +
                  m.units.filter((u) => profile.completedUnitIds.includes(u.id))
                    .length,
                0
              );
              const subjTotalXp = subjChapters.reduce(
                (acc, m) => acc + m.totalXp,
                0
              );
              const subjProgressPct =
                subjTotalUnits > 0
                  ? Math.round((subjCompletedUnits / subjTotalUnits) * 100)
                  : 0;

              return (
                <button
                  key={subj.subject}
                  onClick={() => handleSelectSubject(subj.subject)}
                  className={`group relative overflow-hidden text-left rounded-3xl bg-white/95 backdrop-blur-md border-2 ${subj.border} ${subj.shadow} p-7 flex flex-col justify-between space-y-6 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 cursor-pointer`}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl ${subj.iconBg} text-3xl text-white shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                      >
                        {subj.emoji}
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        <span className="rounded-full bg-amber-50 border border-amber-200 px-3 py-0.5 text-[11px] font-black text-amber-800">
                          ⚡ +{subjTotalXp.toLocaleString()} XP
                        </span>
                        <span className="rounded-full bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 text-[10px] font-extrabold text-indigo-700">
                          🎮 {subjTotalUnits * 4} Mini-Games
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-black uppercase tracking-wider text-indigo-600">
                        {subj.categoryLabel} • Grade {selectedClass}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5 group-hover:text-indigo-600 transition">
                        {subj.subject}
                      </h2>
                      <p className="text-sm font-medium text-slate-600 mt-2 leading-relaxed">
                        {subj.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-100 w-full">
                    {/* Subject Mastery Progress Bar */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-extrabold text-slate-500">
                        <span>
                          {subjCompletedUnits} / {subjTotalUnits} Topics Completed
                        </span>
                        <span className="text-emerald-600">{subjProgressPct}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500 transition-all duration-300"
                          style={{ width: `${Math.max(4, subjProgressPct)}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs font-extrabold text-slate-800 pt-1">
                      <span className="rounded-xl bg-slate-100 px-3 py-1.5">
                        📚 {subjChapters.length} Chapters ({subjTotalUnits} Topics)
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-indigo-600 group-hover:translate-x-1 transition">
                        <span>Open Arena</span>
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* ====================================================================
          STEP 3: CHAPTER CARDS GRID (Topics appear only after clicking a Chapter Card)
         ==================================================================== */}
      {currentStep === 3 && selectedClass && selectedSubject && (
        <section className="space-y-6">
          {/* Vidya Credits Wallet Banner */}
          <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-5 sm:p-6 text-white shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 border border-white/25 px-3 py-0.5 text-[11px] font-extrabold text-amber-300 uppercase tracking-wider">
                <span>🪙</span>
                <span>Vidya Credit Chapter Economy</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold">
                First 2 Chapters of Every Subject are 100% Free!
              </h3>
              <p className="text-xs sm:text-sm text-indigo-100 font-medium">
                Click any Chapter Card below to open all its topics &amp; interactive lessons. Once you unlock a chapter with <strong>🪙 100 Credits</strong>, it stays <strong>Unlocked Forever</strong>!
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {isAuthenticated ? (
                <>
                  <div className="rounded-2xl bg-white/15 border border-white/25 px-4 py-2.5 text-center">
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-200">
                      Your Wallet
                    </p>
                    <p className="text-lg font-black text-amber-300">
                      🪙 {(profile.credits ?? 300).toLocaleString()} Credits
                    </p>
                  </div>
                  {(profile.unlockedClassGrades || []).includes(selectedClass) ? (
                    <span className="rounded-2xl bg-emerald-500/30 border border-emerald-300/60 px-4 py-3 text-xs font-extrabold text-emerald-100 flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                      <span>👑 All Class {selectedClass} Chapters Unlocked Forever!</span>
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setPendingChapterToUnlock(null);
                        setDefaultModalPkg("COMPREHENSIVE");
                        setPaymentModalOpen(true);
                      }}
                      className="btn-3d-emerald px-4 py-3 text-xs font-extrabold flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>👑</span>
                      <span>Unlock All Grade / Class {selectedClass} Chapters</span>
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      setPendingChapterToUnlock(null);
                      setDefaultModalPkg("WEEKLY");
                      setPaymentModalOpen(true);
                    }}
                    className="btn-3d-amber px-4 py-3 text-xs font-extrabold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Sparkles className="h-4 w-4" />
                    <span>+ Top Up Credits</span>
                  </button>
                </>
              ) : (
                <Link
                  href={`/auth?next=${encodeURIComponent(
                    `/?class=${selectedClass}&subject=${selectedSubject}`
                  )}`}
                  className="btn-3d-amber px-5 py-3 text-xs font-extrabold flex items-center gap-2"
                >
                  <span>🔐</span>
                  <span>Sign In to Claim 🪙 300 Free Credits &amp; Unlock Chapters</span>
                </Link>
              )}
            </div>
          </div>

          {/* VIEW SWITCHER BAR: 3D ADVENTURE MAP (SKILL TREE) vs BENTO CARD GRID */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl bg-white/95 backdrop-blur-md border-2 border-slate-200 px-5 py-3.5 shadow-sm">
            <div className="space-y-0.5">
              <span className="text-[11px] font-black uppercase tracking-wider text-indigo-600">
                Grade {selectedClass} {selectedSubject} • {chaptersForSelection.length} Chapters
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                {chapterViewMode === "MAP"
                  ? "🗺️ Interactive 3D Skill Tree & Topic Expedition Map"
                  : "🎛️ Chapter Bento Cards Grid"}
              </h3>
            </div>

            <div className="inline-flex items-center rounded-2xl bg-slate-100 border border-slate-200 p-1 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setChapterViewMode("MAP")}
                className={`rounded-xl px-3.5 py-2 text-xs font-black transition flex items-center gap-1.5 cursor-pointer ${
                  chapterViewMode === "MAP"
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Compass className="h-3.5 w-3.5" />
                <span>3D Adventure Map</span>
              </button>
              <button
                type="button"
                onClick={() => setChapterViewMode("GRID")}
                className={`rounded-xl px-3.5 py-2 text-xs font-black transition flex items-center gap-1.5 cursor-pointer ${
                  chapterViewMode === "GRID"
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <LayoutGrid className="h-3.5 w-3.5" />
                <span>Card Grid</span>
              </button>
            </div>
          </div>

          {/* 3D SKILL TREE / ADVENTURE MAP VIEW (DEFAULT) */}
          {chapterViewMode === "MAP" ? (
            <SkillTreeMap
              chapters={chaptersForSelection}
              selectedClass={selectedClass}
              selectedSubject={selectedSubject}
              completedUnitIds={profile.completedUnitIds}
              isAuthenticated={isAuthenticated}
              userCredits={profile.credits ?? 0}
              isHinglish={isHinglish}
              isChapterFreeStarter={isChapterFreeStarter}
              isChapterUnlocked={isChapterUnlocked}
              onUnlockChapter={(chap, e) => {
                e.stopPropagation();
                if (!isAuthenticated) {
                  router.push(
                    `/auth?next=${encodeURIComponent(
                      `/?class=${selectedClass}&subject=${selectedSubject}`
                    )}`
                  );
                  return;
                }
                if ((profile.credits ?? 0) >= 100) {
                  const res = unlockChapterWithCredits(chap.id);
                  if (res.ok) {
                    router.push(`/trails/${chap.slug}`);
                  }
                } else {
                  setPendingChapterToUnlock({ id: chap.id, title: chap.title });
                  setDefaultModalPkg("ONE_DAY");
                  setPaymentModalOpen(true);
                }
              }}
            />
          ) : (
            /* Chapter Cards Grid — Classic Bento Grid Alternative */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {chaptersForSelection.map((chap, chapIdx) => {
              const completedUnits = chap.units.filter((u) =>
                profile.completedUnitIds.includes(u.id)
              ).length;
              const totalUnits = chap.units.length;
              const progressPct =
                totalUnits > 0
                  ? Math.round((completedUnits / totalUnits) * 100)
                  : 0;
              const isFreeStarter = isChapterFreeStarter(chap.id) || chapIdx < 2;
              const isUnlocked =
                isFreeStarter || (isAuthenticated && isChapterUnlocked(chap.id));

              const handleCardClick = () => {
                router.push(`/trails/${chap.slug}`);
              };

              const handleQuickUnlockChapter = (e: React.MouseEvent) => {
                e.stopPropagation();
                // Require Sign-In first before using any credits
                if (!isAuthenticated) {
                  router.push(
                    `/auth?next=${encodeURIComponent(
                      `/?class=${selectedClass}&subject=${selectedSubject}`
                    )}`
                  );
                  return;
                }
                if ((profile.credits ?? 0) >= 100) {
                  const res = unlockChapterWithCredits(chap.id);
                  if (res.ok) {
                    router.push(`/trails/${chap.slug}`);
                  }
                } else {
                  setPendingChapterToUnlock({ id: chap.id, title: chap.title });
                  setDefaultModalPkg("ONE_DAY");
                  setPaymentModalOpen(true);
                }
              };

              return (
                <div
                  key={chap.id}
                  onClick={handleCardClick}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleCardClick();
                    }
                  }}
                  className={`group rounded-3xl bg-white border-2 p-6 flex flex-col justify-between gap-5 transition-all cursor-pointer select-none ${
                    isUnlocked
                      ? "border-slate-200 shadow-[0_6px_0_0_#e2e8f0] hover:border-indigo-400 hover:shadow-[0_6px_0_0_#818cf8] hover:-translate-y-0.5"
                      : "border-amber-200 bg-amber-50/15 shadow-[0_6px_0_0_#fde68a] hover:border-amber-400 hover:-translate-y-0.5"
                  }`}
                >
                  {/* Top Row: Chapter Emoji Icon + Status Pill */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl text-white shadow-sm group-hover:scale-105 transition ${
                          isUnlocked ? "bg-indigo-600" : "bg-amber-500"
                        }`}
                      >
                        {isUnlocked ? chap.badgeEmoji : "🔒"}
                      </div>

                      <div className="flex flex-col items-end gap-1.5">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                          Chapter {chapIdx + 1}
                        </span>
                        {isFreeStarter ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 text-[10px] font-extrabold text-emerald-800 uppercase tracking-wider">
                            <Unlock className="h-3 w-3" />
                            <span>Free Starter</span>
                          </span>
                        ) : isUnlocked ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-indigo-100 border border-indigo-300 px-2.5 py-0.5 text-[10px] font-extrabold text-indigo-800 uppercase tracking-wider">
                            <CheckCircle2 className="h-3 w-3" />
                            <span>Unlocked Forever</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 border border-amber-300 px-2.5 py-0.5 text-[10px] font-extrabold text-amber-900 uppercase tracking-wider">
                            <Lock className="h-3 w-3" />
                            <span>🪙 100 Credits</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Chapter Title, Subtitle & Topic Preview Chips */}
                    <div className="space-y-2.5">
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition line-clamp-2">
                        {chap.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium line-clamp-2">
                        {isHinglish && chap.subtitleHinglish
                          ? chap.subtitleHinglish
                          : chap.subtitle}
                      </p>

                      {/* Preview first 2 unit titles + game arcade tag */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {chap.units.slice(0, 2).map((u, uIdx) => (
                          <span
                            key={u.id}
                            className="max-w-[180px] truncate rounded-lg bg-slate-50 border border-slate-200/80 px-2 py-0.5 text-[10px] font-bold text-slate-600"
                          >
                            {uIdx + 1}. {u.title.replace(/^Unit\s*\d+[:.-]?\s*/i, "")}
                          </span>
                        ))}
                        {chap.units.length > 2 && (
                          <span className="rounded-lg bg-indigo-50 border border-indigo-200/70 px-2 py-0.5 text-[10px] font-extrabold text-indigo-700">
                            +{chap.units.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section: Stats Pills + Progress Bar + Action Button */}
                  <div className="space-y-4 pt-3 border-t border-slate-100">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-extrabold">
                      <span className="rounded-xl bg-slate-100 border border-slate-200 px-2.5 py-1 text-slate-700">
                        📚 {totalUnits} {totalUnits === 1 ? "Topic" : "Topics"}
                      </span>
                      <span className="rounded-xl bg-violet-50 border border-violet-200 px-2.5 py-1 text-violet-800">
                        🎮 {totalUnits * 4} Games
                      </span>
                      <span className="rounded-xl bg-amber-50 border border-amber-200 px-2.5 py-1 text-amber-800">
                        ⚡ +{chap.totalXp} XP
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-extrabold text-slate-500">
                        <span>Chapter Mastery</span>
                        <span className="text-emerald-600">
                          {completedUnits}/{totalUnits} Topics ({progressPct}%)
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300"
                          style={{ width: `${progressPct}%` }}
                        />
                      </div>
                    </div>

                    {/* Card CTA */}
                    {isUnlocked ? (
                      <div className="w-full rounded-2xl bg-indigo-50 group-hover:bg-indigo-600 border border-indigo-200 group-hover:border-indigo-600 px-4 py-3 text-xs font-extrabold text-indigo-700 group-hover:text-white flex items-center justify-between transition">
                        <span>Open Chapter &amp; View {totalUnits} Topics</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={handleQuickUnlockChapter}
                        className="w-full btn-3d-amber px-4 py-3 text-xs font-extrabold flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>{isAuthenticated ? "🪙" : "🔐"}</span>
                        <span>
                          {!isAuthenticated
                            ? "Unlock Forever (100 Credits) — Sign In"
                            : (profile.credits ?? 0) >= 100
                            ? "Unlock Forever & Open (100 Credits)"
                            : "Buy Credits to Unlock Forever (100 Cr)"}
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
            </div>
          )}
        </section>
      )}

      {/* DUAL BENTO SHOWCASE: LIVE QUIZ ARENA + 4-IN-1 GAME ARCADE (Step 1) */}
      {currentStep === 1 && (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-2">
          {/* Card 1: Global Live Quiz Arena */}
          <div className="bento-card p-6 sm:p-7 flex flex-col justify-between gap-5 border-2 border-amber-200/90 bg-gradient-to-br from-amber-50/90 via-white to-orange-50/60">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 border border-amber-300 px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-amber-900">
                  <Swords className="h-3 w-3 text-amber-700" />
                  <span>Global UTC Live Competitions</span>
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Daily Sprints &amp; Sunday Championships ⚔️
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  Compete with scholars from London, Singapore, New York, Dubai &amp; New Delhi in timed English STEM quizzes. Score 75%+ to win Bonus Learning Credits!
                </p>
              </div>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-400 text-3xl shadow-md">
                🏆
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-amber-200/60">
              <div className="flex items-center gap-2 text-xs font-extrabold text-amber-900">
                <Globe2 className="h-4 w-4 text-amber-600" />
                <span>15:00 • 16:00 • 17:00 UTC Windows</span>
              </div>
              <Link
                href="/contests"
                className="btn-3d-amber px-5 py-2.5 text-xs font-black flex items-center gap-2"
              >
                <Swords className="h-4 w-4" />
                <span>Enter Quiz Arena</span>
              </Link>
            </div>
          </div>

          {/* Card 2: 4-in-1 Unit Concept Game Arcade */}
          <div className="bento-card p-6 sm:p-7 flex flex-col justify-between gap-5 border-2 border-indigo-200/90 bg-gradient-to-br from-indigo-50/90 via-white to-emerald-50/60">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 border border-indigo-300 px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-indigo-900">
                  <Gamepad2 className="h-3 w-3 text-indigo-700" />
                  <span>Built Into Every Study Topic</span>
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  4-in-1 Concept Game Arcade 🎮
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  No boring memorization! Every topic includes <strong>Concept Match-Up</strong>, <strong>60s Rapid Blitz</strong>, <strong>5-Wire Vault Defusal</strong>, and <strong>Exam Trap Buster</strong>.
                </p>
              </div>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-3xl text-white shadow-md">
                🕹️
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-indigo-100">
              <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-extrabold text-indigo-900">
                <span className="rounded-lg bg-white border border-indigo-200 px-2.5 py-1">🧩 Match-Up</span>
                <span className="rounded-lg bg-white border border-indigo-200 px-2.5 py-1">⚡ 60s Blitz</span>
                <span className="rounded-lg bg-white border border-indigo-200 px-2.5 py-1">💣 Vault Defusal</span>
                <span className="rounded-lg bg-white border border-indigo-200 px-2.5 py-1">🛡️ Trap Buster</span>
              </div>
              <button
                type="button"
                onClick={() => handleSelectClass(9)}
                className="btn-3d-indigo px-4 py-2.5 text-xs font-black flex items-center gap-1.5 cursor-pointer"
              >
                <span>Try a Game</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </section>
      )}

      <PaymentModal
        isOpen={paymentModalOpen}
        onClose={() => {
          setPaymentModalOpen(false);
          setPendingChapterToUnlock(null);
        }}
        defaultPackage={defaultModalPkg}
        chapterTitle={pendingChapterToUnlock?.title}
        targetClassGrade={selectedClass === 10 ? 10 : 9}
        onSuccessPackage={(pkg: PassPackageType, chosenClassGrade?: 9 | 10) => {
          activateProPass(
            pkg,
            undefined,
            pendingChapterToUnlock?.id,
            chosenClassGrade || (selectedClass === 10 ? 10 : 9)
          );
          setPendingChapterToUnlock(null);
          setPaymentModalOpen(false);
        }}
      />
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div className="p-12 text-center font-bold text-slate-400">Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
