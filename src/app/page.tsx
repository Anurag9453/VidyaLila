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
} from "lucide-react";

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const {
    profile,
    modules,
    selectedBoardFilter,
    setSelectedBoardFilter,
  } = useApp();

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
    },
    {
      grade: 10,
      title: "Class 10",
      subtitle: "Board Special • Light, Electricity, Reactions & Trigonometry",
      emoji: "🎯",
      bg: "bg-amber-50/70",
      border: "border-amber-200 hover:border-amber-400",
      shadow: "shadow-[0_6px_0_0_#fde68a]",
      iconBg: "bg-amber-500",
    },
    {
      grade: 11,
      title: "Class 11",
      subtitle: "Core Concepts • Vectors, Chemical Bonding & Calculus Limits",
      emoji: "🚀",
      bg: "bg-sky-50/70",
      border: "border-sky-200 hover:border-sky-400",
      shadow: "shadow-[0_6px_0_0_#bae6fd]",
      iconBg: "bg-sky-500",
    },
    {
      grade: 12,
      title: "Class 12",
      subtitle: "Board + Entrance • Electrostatics, Electrochemistry & Integrals",
      emoji: "👑",
      bg: "bg-violet-50/70",
      border: "border-violet-200 hover:border-violet-400",
      shadow: "shadow-[0_6px_0_0_#ddd6fe]",
      iconBg: "bg-violet-500",
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
    const boardMatch =
      selectedBoardFilter === "BOTH" ||
      m.board === "BOTH" ||
      m.board === selectedBoardFilter;
    return classMatch && subjMatch && boardMatch;
  });

  const handleSelectClass = (grade: ClassGrade) => {
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

          {/* Clean Board Filter Pill */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <div className="inline-flex items-center gap-1 rounded-2xl bg-slate-100 p-1.5 border border-slate-200">
              {(["BOTH", "CBSE", "ICSE"] as BoardType[]).map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedBoardFilter(b)}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition ${
                    selectedBoardFilter === b
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {b === "BOTH" ? "All Boards (CBSE + ICSE)" : b}
                </button>
              ))}
            </div>
          </div>
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
              onClick={() => handleSelectClass(item.grade)}
              className={`group text-left rounded-2xl sm:rounded-3xl ${item.bg} border-2 ${item.border} ${item.shadow} p-5 sm:p-7 flex items-center justify-between gap-4 hover:-translate-y-1 transition-all`}
            >
              <div className="flex items-center gap-4 min-w-0">
                <div
                  className={`flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl ${item.iconBg} text-2xl sm:text-3xl text-white shadow-sm group-hover:scale-105 transition`}
                >
                  {item.emoji}
                </div>
                <div className="min-w-0">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1 line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition">
                <ArrowRight className="h-4 w-4" />
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
          STEP 3: CHAPTER LINKS + VERTICAL STACKED UNITS (One below the other)
         ==================================================================== */}
      {currentStep === 3 && selectedClass && selectedSubject && (
        <section className="space-y-6">
          {chaptersForSelection.map((chap) => {
            const completedUnits = chap.units.filter((u) =>
              profile.completedUnitIds.includes(u.id)
            ).length;

            return (
              <div
                key={chap.id}
                className="rounded-3xl bg-white border-2 border-slate-200 shadow-[0_6px_0_0_#e2e8f0] p-6 sm:p-8 space-y-6"
              >
                {/* Chapter Header — Clicking the Chapter Name opens the Chapter directly */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                  <div className="flex items-start gap-4">
                    <Link
                      href={`/trails/${chap.slug}`}
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-2xl text-white shadow-sm hover:scale-105 transition"
                    >
                      {chap.badgeEmoji}
                    </Link>

                    <div className="space-y-1">
                      <Link
                        href={`/trails/${chap.slug}`}
                        className="inline-flex items-center gap-2 text-xl sm:text-2xl font-extrabold text-slate-900 hover:text-indigo-600 underline-offset-4 hover:underline transition"
                      >
                        <span>{chap.title}</span>
                        <ArrowRight className="h-5 w-5 text-indigo-500" />
                      </Link>
                      <p className="text-sm text-slate-500 font-medium">
                        {chap.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-start sm:self-center shrink-0 text-xs font-bold">
                    <span className="rounded-xl bg-amber-50 border border-amber-200 px-3 py-1.5 text-amber-800">
                      ⚡ +{chap.totalXp} GP
                    </span>
                    <span className="rounded-xl bg-emerald-50 border border-emerald-200 px-3 py-1.5 text-emerald-700">
                      {completedUnits}/{chap.units.length} Done
                    </span>
                  </div>
                </div>

                {/* Vertical Sequence of Units (Show at most 3 units here; if > 3, show View All button) */}
                <div className="relative pl-6 sm:pl-8 space-y-3 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
                  {chap.units.slice(0, 3).map((unit, idx) => {
                    const isDone = profile.completedUnitIds.includes(unit.id);

                    return (
                      <Link
                        key={unit.id}
                        href={`/trails/${chap.slug}?unit=${idx}`}
                        className={`group relative block rounded-2xl border p-4 transition-all ${
                          isDone
                            ? "bg-emerald-50/50 border-emerald-200 hover:border-emerald-400"
                            : "bg-slate-50/70 border-slate-200 hover:bg-white hover:border-indigo-300 hover:shadow-sm"
                        }`}
                      >
                        {/* Vertical Connector Dot */}
                        <span
                          className={`absolute -left-[25px] sm:-left-[29px] top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                            isDone
                              ? "bg-emerald-500 border-emerald-600 text-white"
                              : "bg-white border-slate-300 group-hover:border-indigo-500"
                          }`}
                        >
                          {isDone && <CheckCircle2 className="h-3.5 w-3.5" />}
                        </span>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div>
                            <h4 className="text-base font-extrabold text-slate-900 group-hover:text-indigo-600 transition">
                              {unit.title}
                            </h4>
                            <p className="text-xs text-slate-500 font-medium mt-0.5">
                              {unit.summary}
                            </p>
                          </div>

                          <div className="flex items-center gap-3 shrink-0 text-xs font-bold">
                            <span className="text-slate-400 flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" /> {unit.durationMinutes}m
                            </span>
                            <span className="text-amber-600">
                              +{unit.xpReward} GP
                            </span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* View All Units Button (shown when chapter has more than 3 units) */}
                {chap.units.length > 3 && (
                  <div className="pl-6 sm:pl-8 pt-1">
                    <Link
                      href={`/trails/${chap.slug}`}
                      className="inline-flex items-center gap-2 rounded-2xl bg-indigo-50 border border-indigo-200 px-4 py-2.5 text-xs font-extrabold text-indigo-700 hover:bg-indigo-600 hover:text-white transition"
                    >
                      <span>View All ({chap.units.length} Units)</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
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
