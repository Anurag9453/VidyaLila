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
} from "lucide-react";
import { PaymentModal, PassPackageType } from "@/components/PaymentModal";

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const {
    profile,
    isAuthenticated,
    modules,
    selectedBoardFilter,
    setSelectedBoardFilter,
    isChapterFreeStarter,
    isChapterUnlocked,
    unlockChapterWithCredits,
    activateProPass,
  } = useApp();

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
      title: "Class 9",
      subtitle: "Foundation • Motion, Atoms & Polynomials",
      emoji: "🌱",
      bg: "bg-emerald-50/70",
      border: "border-emerald-200 hover:border-emerald-400",
      shadow: "shadow-[0_6px_0_0_#a7f3d0]",
      iconBg: "bg-emerald-500",
      isLocked: false,
    },
    {
      grade: 10,
      title: "Class 10",
      subtitle: "Core Concepts • Light, Electricity, Reactions & Trigonometry",
      emoji: "🎯",
      bg: "bg-amber-50/70",
      border: "border-amber-200 hover:border-amber-400",
      shadow: "shadow-[0_6px_0_0_#fde68a]",
      iconBg: "bg-amber-500",
      isLocked: false,
    },
    {
      grade: 11,
      title: "Class 11",
      subtitle: "Senior Secondary • Vectors, Chemical Bonding & Calculus",
      emoji: "🚀",
      bg: "bg-slate-100/90",
      border: "border-slate-300",
      shadow: "shadow-[0_4px_0_0_#cbd5e1]",
      iconBg: "bg-slate-400",
      isLocked: true,
    },
    {
      grade: 12,
      title: "Class 12",
      subtitle: "Board Exam Focus • Electrostatics, Solutions & Integrals",
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
    if (grade === 11 || grade === 12) {
      setComingSoonAlert(
        `Class ${grade} chapters & tests are coming soon! We are currently live for Class 9 and 10.`
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

      {/* MINIMAL, SPACIOUS ENGLISH HEADER (Only on Step 1) */}
      {currentStep === 1 && (
        <section className="text-center max-w-4xl mx-auto space-y-4 pt-2">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Which class are you in?
          </h1>

          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Select your class below to explore interactive chapters and earn GP (Gyan Points).
          </p>

          {comingSoonAlert && (
            <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-4 text-amber-900 flex items-center justify-between gap-3 shadow-sm text-left max-w-xl mx-auto">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-extrabold">
                <Lock className="h-4 w-4 text-amber-600 shrink-0" />
                <span>{comingSoonAlert}</span>
              </div>
              <button
                type="button"
                onClick={() => setComingSoonAlert(null)}
                className="text-amber-800 hover:text-amber-950 font-black text-xs px-2 py-1 rounded-md hover:bg-amber-100 transition shrink-0"
              >
                ✕ Dismiss
              </button>
            </div>
          )}
        </section>
      )}

      {/* ====================================================================
          STEP 1: 4 CLEAN CLASS CARDS (Class 9, 10, 11, 12)
         ==================================================================== */}
      {currentStep === 1 && (
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {classCards.map((item) => (
            <button
              key={item.grade}
              type="button"
              onClick={() => handleSelectClass(item.grade)}
              className={`group relative text-left rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex items-center justify-between gap-4 transition-all ${
                item.isLocked
                  ? "bg-slate-100/80 border-2 border-slate-300 shadow-[0_4px_0_0_#cbd5e1] hover:border-slate-400 cursor-pointer"
                  : `${item.bg} border-2 ${item.border} ${item.shadow} hover:-translate-y-1`
              }`}
            >
              {item.isLocked && (
                <span className="absolute -top-3 right-5 rounded-full bg-slate-900 text-amber-300 border border-amber-400/50 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Lock className="h-3 w-3" />
                  Coming Soon
                </span>
              )}

              <div className={`flex items-center gap-4 min-w-0 ${item.isLocked ? "opacity-60" : ""}`}>
                <div
                  className={`flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl ${
                    item.isLocked ? "bg-slate-400" : item.iconBg
                  } text-2xl sm:text-3xl text-white shadow-sm group-hover:scale-105 transition`}
                >
                  {item.isLocked ? "🔒" : item.emoji}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1 line-clamp-2">
                    {item.isLocked
                      ? "Senior secondary syllabus is coming soon! Live chapters currently for Class 9 & 10."
                      : item.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition">
                {item.isLocked ? (
                  <Lock className="h-4 w-4 text-slate-400" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </div>
            </button>
          ))}
        </section>
      )}

      {/* ====================================================================
          STEP 2: 3 CLEAN SUBJECT CARDS (Physics, Chemistry, Mathematics)
         ==================================================================== */}
      {currentStep === 2 && selectedClass && (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subjectCards.map((subj) => {
            const subjChapters = modules.filter(
              (m) =>
                m.classGrade === selectedClass && m.subject === subj.subject
            );

            return (
              <button
                key={subj.subject}
                onClick={() => handleSelectSubject(subj.subject)}
                className={`group text-left rounded-3xl ${subj.bg} border-2 ${subj.border} ${subj.shadow} p-7 flex flex-col justify-between space-y-8 hover:-translate-y-1 transition-all`}
              >
                <div className="space-y-4">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl ${subj.iconBg} text-3xl text-white shadow-sm group-hover:scale-105 transition`}
                  >
                    {subj.emoji}
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {subj.categoryLabel}
                    </span>
                    <h2 className="text-2xl font-extrabold text-slate-900 mt-0.5">
                      {subj.subject}
                    </h2>
                    <p className="text-sm font-medium text-slate-600 mt-2 leading-relaxed">
                      {subj.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200/70 text-xs font-bold text-slate-700">
                  <span>{subjChapters.length} Chapters</span>
                  <span className="inline-flex items-center gap-1 text-slate-900 group-hover:translate-x-1 transition">
                    Explore <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </button>
            );
          })}
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
                      <span>Unlock All Class {selectedClass} (₹1,999)</span>
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

          {/* Chapter Cards Grid — Only Chapters are shown here; Topics open on clicking a Card */}
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

                    {/* Chapter Title & Subtitle */}
                    <div className="space-y-1.5">
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition line-clamp-2">
                        {chap.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium line-clamp-2">
                        {chap.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Section: Stats Pills + Progress Bar + Action Button */}
                  <div className="space-y-4 pt-3 border-t border-slate-100">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-extrabold">
                      <span className="rounded-xl bg-slate-100 border border-slate-200 px-2.5 py-1 text-slate-700">
                        📚 {totalUnits} {totalUnits === 1 ? "Topic" : "Topics"}
                      </span>
                      <span className="rounded-xl bg-amber-50 border border-amber-200 px-2.5 py-1 text-amber-800">
                        ⚡ +{chap.totalXp} GP
                      </span>
                      <span className="rounded-xl bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-emerald-700">
                        {completedUnits}/{totalUnits} Done
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-emerald-500 transition-all duration-300"
                        style={{ width: `${progressPct}%` }}
                      />
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
        </section>
      )}

      {/* SUBTLE BOTTOM BANNER FOR DAILY QUIZZES (Only on Step 1) */}
      {currentStep === 1 && (
        <section className="pt-4">
          <div className="rounded-3xl bg-white border-2 border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-2xl">
                ⚔️
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900">
                  Ready for today&apos;s Daily &amp; Weekly Live Quizzes?
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  Compete from home with students across India and boost your All-India rank.
                </p>
              </div>
            </div>

            <Link
              href="/contests"
              className="btn-3d-amber px-5 py-2.5 text-xs flex items-center gap-2 shrink-0"
            >
              <Swords className="h-4 w-4" />
              <span>Go to Quiz Arena</span>
            </Link>
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
