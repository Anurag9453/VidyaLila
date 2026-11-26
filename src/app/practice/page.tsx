"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { useApp } from "@/lib/store";
import { ClassGrade, CoreSubject, LearningModule } from "@/lib/mock-data";
import {
  PRACTICE_SETS_PER_CHAPTER,
  DIFFICULTY_BADGE_STYLES,
  PracticeDifficulty,
  PracticeSetData,
  PracticeQuestion,
  PracticeAttemptRecord,
  loadPracticeAttempts,
} from "@/lib/practice-types";
import { PracticeTestRunner } from "@/components/PracticeTestRunner";
import {
  Search,
  X,
  ClipboardCheck,
  ChevronDown,
  ChevronUp,
  Play,
  CheckCircle2,
  Clock,
  Sparkles,
  Loader2,
  Filter,
  Layers,
} from "lucide-react";

const PAGE_SIZE = 12;

const SUBJECT_STYLES: Record<string, string> = {
  Physics: "bg-sky-100 text-sky-800 border-sky-200",
  Chemistry: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Mathematics: "bg-amber-100 text-amber-900 border-amber-200",
};

function buildPreviewQuestions(
  mod: LearningModule,
  setNumber: number,
  difficulty: PracticeDifficulty
): PracticeQuestion[] {
  const pool: PracticeQuestion[] = [];
  for (const unit of mod.units) {
    for (const q of unit.checkpointQuestions || []) {
      pool.push({
        id: `${mod.slug}-s${setNumber}-${q.id}`,
        question: q.question,
        options: q.options,
        correctIndex: q.correctIndex,
        explanation: q.explanation,
        difficulty,
        topicTag: unit.title,
      });
    }
  }
  // Deterministically rotate pool by setNumber so different sets feel distinct
  if (pool.length === 0) return [];
  const shift = ((setNumber - 1) * 7) % pool.length;
  const rotated = [...pool.slice(shift), ...pool.slice(0, shift)];
  return rotated.slice(0, 50);
}

export default function PracticeHubPage() {
  const { modules } = useApp();

  // Filters & in-section search
  const [selectedClass, setSelectedClass] = useState<"ALL" | ClassGrade>("ALL");
  const [selectedSubject, setSelectedSubject] = useState<"ALL" | CoreSubject>(
    "ALL"
  );
  const [selectedDifficulty, setSelectedDifficulty] = useState<
    "ALL" | PracticeDifficulty
  >("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  // Lazy loader pagination
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Expanded chapter drawer (showing its 10 sets)
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  // Active test runner state
  const [activeTest, setActiveTest] = useState<PracticeSetData | null>(null);
  const [loadingSetKey, setLoadingSetKey] = useState<string | null>(null);

  // Saved attempt scores
  const [attempts, setAttempts] = useState<
    Record<string, PracticeAttemptRecord>
  >({});

  useEffect(() => {
    setAttempts(loadPracticeAttempts());
  }, []);

  // Filtered chapter list
  const filteredModules = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const tokens = q ? q.split(/\s+/).filter(Boolean) : [];

    return modules.filter((mod) => {
      if (selectedClass !== "ALL" && mod.classGrade !== selectedClass) {
        return false;
      }
      if (selectedSubject !== "ALL" && mod.subject !== selectedSubject) {
        return false;
      }
      if (tokens.length > 0) {
        const hay = `${mod.title} ${mod.subtitle || ""} ${
          mod.subtitleHinglish || ""
        } ${mod.subject} class ${mod.classGrade} ${mod.units
          .map((u) => u.title)
          .join(" ")}`.toLowerCase();
        if (!tokens.every((t) => hay.includes(t))) return false;
      }
      return true;
    });
  }, [modules, selectedClass, selectedSubject, searchQuery]);

  // Reset lazy loader batch whenever filters/search change
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [selectedClass, selectedSubject, selectedDifficulty, searchQuery]);

  // IntersectionObserver for automatic lazy loading
  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisibleCount((prev) =>
            Math.min(filteredModules.length, prev + PAGE_SIZE)
          );
        }
      },
      { rootMargin: "240px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [filteredModules.length]);

  const visibleModules = useMemo(
    () => filteredModules.slice(0, visibleCount),
    [filteredModules, visibleCount]
  );

  const visibleSets = useMemo(() => {
    if (selectedDifficulty === "ALL") return PRACTICE_SETS_PER_CHAPTER;
    return PRACTICE_SETS_PER_CHAPTER.filter(
      (s) => s.difficulty === selectedDifficulty
    );
  }, [selectedDifficulty]);

  const totalCompletedSets = Object.keys(attempts).length;

  const handleStartSet = async (mod: LearningModule, setNumber: number) => {
    const meta =
      PRACTICE_SETS_PER_CHAPTER.find((s) => s.setNumber === setNumber) ||
      PRACTICE_SETS_PER_CHAPTER[0];
    const key = `${mod.slug}::set-${setNumber}`;
    setLoadingSetKey(key);

    try {
      // Lazy-fetch the dedicated 50-question JSON pack on demand
      const res = await fetch(
        `/practice-sets/class${mod.classGrade}/${mod.subject.toLowerCase()}/${mod.slug}/set-${setNumber}.json`
      );
      if (res.ok) {
        const json = (await res.json()) as PracticeSetData;
        if (Array.isArray(json.questions) && json.questions.length > 0) {
          setActiveTest({
            ...json,
            isPreviewFallback: false,
          });
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
      }
    } catch {
      // Fall through cleanly to preview bank
    } finally {
      setLoadingSetKey(null);
    }

    // Fallback preview set built from chapter checkpoints until full 50-Q JSON pack is generated
    const fallbackQuestions = buildPreviewQuestions(
      mod,
      setNumber,
      meta.difficulty
    );
    setActiveTest({
      slug: mod.slug,
      chapterTitle: mod.title,
      classGrade: mod.classGrade,
      subject: mod.subject,
      setNumber,
      difficulty: meta.difficulty,
      durationMinutes: meta.durationMinutes,
      questions: fallbackQuestions,
      isPreviewFallback: true,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // If a test is active, render the full CBT Exam Runner
  if (activeTest) {
    const currentMod = modules.find((m) => m.slug === activeTest.slug);
    return (
      <PracticeTestRunner
        testData={activeTest}
        onExit={() => setActiveTest(null)}
        onAttemptSaved={(updated) => setAttempts(updated)}
        onNextSet={
          currentMod
            ? (nextSetNum) => handleStartSet(currentMod, nextSetNum)
            : undefined
        }
      />
    );
  }

  return (
    <div className="space-y-7 max-w-7xl mx-auto">
      {/* Hero Header */}
      <section className="bento-card p-6 sm:p-8 bg-gradient-to-br from-violet-50/90 via-white to-sky-50/80">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-100 border border-violet-200 px-3 py-1 text-xs font-extrabold text-violet-800 uppercase tracking-wider">
              <ClipboardCheck className="h-3.5 w-3.5" />
              <span>Chapter-Wise Practice Arena</span>
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Practice Tests (50 Questions / Set)
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
              Sharpen every chapter across Classes 9–12 with{" "}
              <strong>10 dedicated practice sets per chapter</strong> — graded
              from <strong>Basic</strong> (Sets 1–3) to{" "}
              <strong>Intermediate</strong> (Sets 4–7) and{" "}
              <strong>Advanced</strong> (Sets 8–10).
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 shrink-0">
            <div className="rounded-2xl bg-white border-2 border-slate-200 px-4 py-3 text-center shadow-xs">
              <div className="text-xl sm:text-2xl font-black text-indigo-700">
                {modules.length}
              </div>
              <div className="text-[10px] font-extrabold uppercase text-slate-500">
                Chapters
              </div>
            </div>
            <div className="rounded-2xl bg-white border-2 border-slate-200 px-4 py-3 text-center shadow-xs">
              <div className="text-xl sm:text-2xl font-black text-violet-700">
                {(modules.length * 10).toLocaleString()}
              </div>
              <div className="text-[10px] font-extrabold uppercase text-slate-500">
                Test Sets
              </div>
            </div>
            <div className="rounded-2xl bg-emerald-50 border-2 border-emerald-200 px-4 py-3 text-center shadow-xs">
              <div className="text-xl sm:text-2xl font-black text-emerald-700">
                {totalCompletedSets}
              </div>
              <div className="text-[10px] font-extrabold uppercase text-emerald-700">
                Completed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Filter + In-Section Chapter Search Panel */}
      <section className="rounded-3xl bg-white/95 backdrop-blur-md border-2 border-slate-200/90 p-4 sm:p-5 shadow-sm space-y-4">
        {/* Search Input + Result Counter */}
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search any chapter or topic directly (e.g., Electrostatics, Probability, Thermodynamics, Class 12)..."
              className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50/80 py-2.5 pl-10 pr-10 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear chapter search"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-slate-400 hover:bg-slate-200 hover:text-slate-700"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 text-xs font-extrabold text-slate-500 shrink-0">
            <Filter className="h-4 w-4 text-indigo-500" />
            <span>
              Showing{" "}
              <strong className="text-slate-900">
                {visibleModules.length}
              </strong>{" "}
              of{" "}
              <strong className="text-slate-900">
                {filteredModules.length}
              </strong>{" "}
              chapters
            </span>
          </div>
        </div>

        {/* Class, Subject & Difficulty Filter Pills */}
        <div className="flex flex-wrap items-center gap-y-2.5 gap-x-5 pt-2 border-t border-slate-100">
          {/* Class */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 mr-1">
              Class:
            </span>
            {(["ALL", 9, 10, 11, 12] as const).map((g) => (
              <button
                key={String(g)}
                type="button"
                onClick={() => setSelectedClass(g)}
                className={`rounded-xl px-3 py-1.5 text-xs font-extrabold transition ${
                  selectedClass === g
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {g === "ALL" ? "All" : `Class ${g}`}
              </button>
            ))}
          </div>

          {/* Subject */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 mr-1">
              Subject:
            </span>
            {(["ALL", "Physics", "Chemistry", "Mathematics"] as const).map(
              (subj) => (
                <button
                  key={subj}
                  type="button"
                  onClick={() => setSelectedSubject(subj)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-extrabold transition ${
                    selectedSubject === subj
                      ? "bg-indigo-600 text-white shadow-xs"
                      : "bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {subj === "ALL" ? "All Subjects" : subj}
                </button>
              )
            )}
          </div>

          {/* Difficulty */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 mr-1">
              Level:
            </span>
            {(["ALL", "Basic", "Intermediate", "Advanced"] as const).map(
              (lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setSelectedDifficulty(lvl)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-extrabold transition ${
                    selectedDifficulty === lvl
                      ? "bg-violet-600 text-white shadow-xs"
                      : "bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {lvl === "ALL" ? "All Levels" : lvl}
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* Lazy-Loaded Chapter Practice Cards */}
      {visibleModules.length === 0 ? (
        <div className="bento-card p-10 text-center space-y-3">
          <p className="text-lg font-black text-slate-800">
            No matching chapters found
          </p>
          <p className="text-sm text-slate-500">
            Try clearing your search or switching Class / Subject filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedClass("ALL");
              setSelectedSubject("ALL");
              setSelectedDifficulty("ALL");
              setSearchQuery("");
            }}
            className="btn-3d-white px-4 py-2 text-xs font-extrabold"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {visibleModules.map((mod) => {
            const isExpanded = expandedSlug === mod.slug;
            const subjCls =
              SUBJECT_STYLES[mod.subject] ||
              "bg-slate-100 text-slate-700 border-slate-200";
            const doneCount = PRACTICE_SETS_PER_CHAPTER.filter(
              (s) => attempts[`${mod.slug}::set-${s.setNumber}`]
            ).length;

            return (
              <div
                key={mod.id}
                className={`rounded-3xl bg-white border-2 transition-all overflow-hidden ${
                  isExpanded
                    ? "border-indigo-400 shadow-lg shadow-indigo-900/5"
                    : "border-slate-200 hover:border-indigo-300 shadow-[0_4px_0_0_#e2e8f0]"
                }`}
              >
                {/* Chapter Header Row */}
                <button
                  type="button"
                  onClick={() =>
                    setExpandedSlug(isExpanded ? null : mod.slug)
                  }
                  className="w-full p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left hover:bg-slate-50/60 transition"
                >
                  <div className="flex items-start sm:items-center gap-4 min-w-0">
                    <div className="flex h-13 w-13 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-2xl text-white shadow-sm">
                      {mod.badgeEmoji}
                    </div>
                    <div className="min-w-0 space-y-1.5">
                      <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-extrabold">
                        <span className="rounded-md bg-slate-900 px-2 py-0.5 text-white">
                          Class {mod.classGrade}
                        </span>
                        <span
                          className={`rounded-md border px-2 py-0.5 ${subjCls}`}
                        >
                          {mod.subject}
                        </span>
                        <span className="text-slate-400">
                          Chapter {mod.chapterNumber}
                        </span>
                      </div>
                      <h2 className="text-base sm:text-xl font-black text-slate-900 truncate">
                        {mod.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 line-clamp-1">
                        {mod.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                    <div className="flex items-center gap-2 text-xs font-extrabold">
                      <span className="rounded-xl bg-violet-50 border border-violet-200 px-3 py-1.5 text-violet-800 inline-flex items-center gap-1.5">
                        <Layers className="h-3.5 w-3.5" />
                        <span>{visibleSets.length} Sets • 50 Qs each</span>
                      </span>
                      {doneCount > 0 && (
                        <span className="rounded-xl bg-emerald-100 border border-emerald-200 px-2.5 py-1.5 text-emerald-800 inline-flex items-center gap-1">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          <span>{doneCount}/10</span>
                        </span>
                      )}
                    </div>

                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </span>
                  </div>
                </button>

                {/* Expanded 10-Set Grid */}
                {isExpanded && (
                  <div className="border-t border-slate-100 bg-slate-50/70 p-5 sm:p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                      {visibleSets.map((setMeta) => {
                        const attempt =
                          attempts[`${mod.slug}::set-${setMeta.setNumber}`];
                        const isLoading =
                          loadingSetKey ===
                          `${mod.slug}::set-${setMeta.setNumber}`;

                        return (
                          <div
                            key={setMeta.setNumber}
                            className="rounded-2xl bg-white border-2 border-slate-200 p-4 flex flex-col justify-between gap-3 hover:border-indigo-400 transition shadow-2xs"
                          >
                            <div className="space-y-2">
                              <div className="flex items-center justify-between gap-1">
                                <span
                                  className={`rounded-md border px-2 py-0.5 text-[10px] font-extrabold ${DIFFICULTY_BADGE_STYLES[setMeta.difficulty]}`}
                                >
                                  {setMeta.difficulty}
                                </span>
                                {attempt && (
                                  <span className="text-[11px] font-black text-emerald-700">
                                    {attempt.score}/{attempt.total}
                                  </span>
                                )}
                              </div>

                              <h3 className="text-sm font-black text-slate-900 leading-snug">
                                {setMeta.label}
                              </h3>

                              <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500">
                                <span>50 Qs</span>
                                <span>•</span>
                                <span className="inline-flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {setMeta.durationMinutes}m
                                </span>
                              </div>
                            </div>

                            <button
                              type="button"
                              disabled={isLoading}
                              onClick={() =>
                                handleStartSet(mod, setMeta.setNumber)
                              }
                              className={`w-full rounded-xl py-2 px-3 text-xs font-extrabold inline-flex items-center justify-center gap-1.5 transition cursor-pointer ${
                                attempt
                                  ? "bg-emerald-50 border border-emerald-300 text-emerald-800 hover:bg-emerald-600 hover:text-white"
                                  : "bg-indigo-600 text-white hover:bg-indigo-700"
                              }`}
                            >
                              {isLoading ? (
                                <>
                                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                                  <span>Loading...</span>
                                </>
                              ) : (
                                <>
                                  <Play className="h-3.5 w-3.5" />
                                  <span>
                                    {attempt ? "Retake Set" : "Start Test"}
                                  </span>
                                </>
                              )}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Lazy-Loader Sentinel + Manual Load More Button */}
          {visibleCount < filteredModules.length && (
            <div ref={sentinelRef} className="pt-4 text-center space-y-2">
              <button
                type="button"
                onClick={() =>
                  setVisibleCount((prev) =>
                    Math.min(filteredModules.length, prev + PAGE_SIZE)
                  )
                }
                className="btn-3d-white px-6 py-3 text-xs sm:text-sm font-extrabold inline-flex items-center gap-2"
              >
                <Sparkles className="h-4 w-4 text-indigo-600" />
                <span>
                  Load More Chapters ({filteredModules.length - visibleCount}{" "}
                  remaining)
                </span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
