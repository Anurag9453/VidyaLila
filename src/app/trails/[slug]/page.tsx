"use client";

import React, { useState, use, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useApp } from "@/lib/store";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Lightbulb,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Languages,
  AlertCircle,
  Flag,
  ShieldCheck,
  X,
} from "lucide-react";

/**
 * Calculates remaining marks for a single 10-mark question based on wrong attempts:
 * - 0 wrong attempts: 10 marks
 * - 1 wrong attempt (-5 marks): 5 marks
 * - 2 wrong attempts (-3 marks): 2 marks
 * - 3+ wrong attempts (minimum floor): 2 marks
 */
function getQuestionMarks(wrongAttempts: number): number {
  if (wrongAttempts <= 0) return 10;
  if (wrongAttempts === 1) return 5;
  return 2; // At least 2 marks guaranteed
}

function TrailDetailContent({ slug }: { slug: string }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const unitParam = searchParams.get("unit");
  const hasSelectedUnit = unitParam !== null && unitParam !== "";
  const parsedUnitIdx = hasSelectedUnit ? Number(unitParam) : 0;

  const {
    modules,
    profile,
    completeUnit,
    contentLanguage,
    setContentLanguage,
    submitContentReport,
  } = useApp();
  const mod = modules.find((m) => m.slug === slug) || modules[0];

  const [activeUnitIdx, setActiveUnitIdx] = useState<number>(
    Math.min(Math.max(0, parsedUnitIdx), mod.units.length - 1)
  );

  // Report Typo / Error modal state
  const [reportTarget, setReportTarget] = useState<string | null>(null);
  const [reportIssueType, setReportIssueType] = useState<
    "TYPO" | "WRONG_ANSWER_KEY" | "FORMULA_CLARIFICATION" | "OTHER"
  >("TYPO");
  const [reportDescription, setReportDescription] = useState("");

  // Current selected option index per question
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  // Number of wrong submissions per question
  const [wrongAttemptsByQ, setWrongAttemptsByQ] = useState<Record<string, number>>({});
  // Array of already-tried wrong option indices per question (so student doesn't pick same wrong option twice)
  const [triedWrongOptionsByQ, setTriedWrongOptionsByQ] = useState<Record<string, number[]>>({});
  // Questions that have been verified as correct on a submission
  const [lockedCorrectByQ, setLockedCorrectByQ] = useState<Record<string, boolean>>({});
  const [hasSubmittedAtLeastOnce, setHasSubmittedAtLeastOnce] = useState(false);
  const [lastWrongCount, setLastWrongCount] = useState(0);
  const [testCompletedNow, setTestCompletedNow] = useState(false);

  const resetTestState = () => {
    setSelectedAnswers({});
    setWrongAttemptsByQ({});
    setTriedWrongOptionsByQ({});
    setLockedCorrectByQ({});
    setHasSubmittedAtLeastOnce(false);
    setLastWrongCount(0);
    setTestCompletedNow(false);
  };

  useEffect(() => {
    if (unitParam !== null && unitParam !== "") {
      const idx = Math.min(Math.max(0, Number(unitParam)), mod.units.length - 1);
      setActiveUnitIdx(idx);
      resetTestState();
    }
  }, [unitParam, mod.units.length]);

  const activeUnit = mod.units[activeUnitIdx] || mod.units[0];
  const isHinglish = contentLanguage === "HINGLISH";

  const totalQuestions = activeUnit.checkpointQuestions.length;
  const totalMarks = totalQuestions * 10; // 10 Questions = 100 Marks

  // Total current marks = sum of remaining marks of each question (10 for 0 wrong, 5 for 1 wrong, 2 for 2+ wrong)
  const currentTotalScore = activeUnit.checkpointQuestions.reduce((sum, q) => {
    const wrongs = wrongAttemptsByQ[q.id] || 0;
    return sum + getQuestionMarks(wrongs);
  }, 0);

  const answeredCount = activeUnit.checkpointQuestions.filter(
    (q) => selectedAnswers[q.id] !== undefined
  ).length;
  const allQuestionsAnswered = answeredCount === totalQuestions;

  const handleSelectOption = (qId: string, optIdx: number) => {
    if (testCompletedNow || lockedCorrectByQ[qId]) return;
    // Prevent selecting an option that was already proven wrong
    if ((triedWrongOptionsByQ[qId] || []).includes(optIdx)) return;

    setSelectedAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const handleSubmitTest = () => {
    if (!allQuestionsAnswered || testCompletedNow) return;
    setHasSubmittedAtLeastOnce(true);

    let wrongCountThisTurn = 0;
    const nextWrongAttempts = { ...wrongAttemptsByQ };
    const nextTriedWrong = { ...triedWrongOptionsByQ };
    const nextLockedCorrect = { ...lockedCorrectByQ };
    const nextSelected = { ...selectedAnswers };

    activeUnit.checkpointQuestions.forEach((q) => {
      const chosen = selectedAnswers[q.id];
      if (chosen === q.correctIndex) {
        nextLockedCorrect[q.id] = true;
      } else if (chosen !== undefined) {
        wrongCountThisTurn += 1;
        nextWrongAttempts[q.id] = (nextWrongAttempts[q.id] || 0) + 1;
        const prevTried = nextTriedWrong[q.id] || [];
        if (!prevTried.includes(chosen)) {
          nextTriedWrong[q.id] = [...prevTried, chosen];
        }
        // Clear wrong selection so student must pick a new option for this question
        delete nextSelected[q.id];
      }
    });

    setWrongAttemptsByQ(nextWrongAttempts);
    setTriedWrongOptionsByQ(nextTriedWrong);
    setLockedCorrectByQ(nextLockedCorrect);
    setSelectedAnswers(nextSelected);
    setLastWrongCount(wrongCountThisTurn);

    if (wrongCountThisTurn === 0) {
      // All questions are now 100% correct! Calculate final score
      const finalScore = activeUnit.checkpointQuestions.reduce((sum, q) => {
        const wrongs = nextWrongAttempts[q.id] || 0;
        return sum + getQuestionMarks(wrongs);
      }, 0);
      setTestCompletedNow(true);
      completeUnit(mod.id, activeUnit.id, finalScore);
    }
  };

  const switchUnit = (idx: number) => {
    setActiveUnitIdx(idx);
    resetTestState();
    router.push(`/trails/${mod.slug}?unit=${idx}`, { scroll: false });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-6">
      {/* Top Breadcrumb Bar:
          - When viewing Chapter's Full Unit List: Class > Subject > Chapter
          - When viewing a Unit: Class > Subject > Chapter > [Unit Dropdown] */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white border border-slate-200 px-5 py-3 shadow-sm">
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
          <Link
            href={`/?class=${mod.classGrade}`}
            className="text-slate-500 hover:text-slate-900 transition"
          >
            Class {mod.classGrade}
          </Link>

          <ChevronRight className="h-4 w-4 text-slate-400 shrink-0" />

          <Link
            href={`/?class=${mod.classGrade}&subject=${encodeURIComponent(mod.subject)}`}
            className="text-slate-500 hover:text-slate-900 transition"
          >
            {mod.subject}
          </Link>

          <ChevronRight className="h-4 w-4 text-slate-400 shrink-0" />

          {hasSelectedUnit ? (
            <>
              <Link
                href={`/trails/${mod.slug}`}
                className="text-slate-500 hover:text-slate-900 transition"
              >
                {mod.title}
              </Link>

              <ChevronRight className="h-4 w-4 text-slate-400 shrink-0" />

              {/* Unit Dropdown Selector in the Top Bar */}
              <div className="relative inline-flex items-center">
                <select
                  aria-label="Select Unit"
                  value={activeUnitIdx}
                  onChange={(e) => switchUnit(Number(e.target.value))}
                  className="appearance-none rounded-xl bg-emerald-50 border border-emerald-200 pl-3 pr-8 py-1.5 text-xs font-extrabold text-emerald-700 hover:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 cursor-pointer max-w-[240px] sm:max-w-[380px] truncate"
                >
                  {mod.units.map((u, i) => (
                    <option key={u.id} value={i} className="text-slate-900 font-bold bg-white">
                      {u.title}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-2.5 h-3.5 w-3.5 text-emerald-700" />
              </div>
            </>
          ) : (
            <span className="text-emerald-600">{mod.title}</span>
          )}
        </div>

        <Link
          href={
            hasSelectedUnit
              ? `/trails/${mod.slug}`
              : `/?class=${mod.classGrade}&subject=${encodeURIComponent(mod.subject)}`
          }
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 shrink-0"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back
        </Link>
      </div>

      {/* ====================================================================
          VIEW 1: CHAPTER FULL UNIT LIST (When user clicks Chapter Name or View All)
         ==================================================================== */}
      {!hasSelectedUnit ? (
        <div className="rounded-3xl bg-white border-2 border-slate-200 shadow-[0_6px_0_0_#e2e8f0] p-6 sm:p-8">
          {/* All Units Stacked Vertically One Below the Other */}
          <div className="relative pl-6 sm:pl-8 space-y-3 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
            {mod.units.map((unit, idx) => {
              const isDone = profile.completedUnitIds.includes(unit.id);

              return (
                <Link
                  key={unit.id}
                  href={`/trails/${mod.slug}?unit=${idx}`}
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
                      <h3 className="text-base font-extrabold text-slate-900 group-hover:text-indigo-600 transition">
                        {unit.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {unit.summary}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 text-xs font-bold">
                      <span className="text-slate-400 flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" /> {unit.durationMinutes}m
                      </span>
                      <span className="text-slate-600">
                        {unit.checkpointQuestions.length} Qs • {unit.checkpointQuestions.length * 10} Marks
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        /* ====================================================================
           VIEW 2: BORDERLESS MAIN UNIT STUDY CONTENT + BORDERED UNIT TEST
          ==================================================================== */
        <div className="space-y-8">
          {/* Main Unit Study Content — No outer border, clean reading layout */}
          <div className="py-2 sm:py-4 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 pb-5">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600">
                    Study Guide
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-extrabold text-emerald-700">
                    <ShieldCheck className="h-3 w-3" />
                    NCERT / Board Aligned
                  </span>
                </div>
                <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {activeUnit.title}
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {/* 1-Click Report Typo / Error Button */}
                <button
                  type="button"
                  onClick={() => {
                    setReportTarget(`Study Notes: ${activeUnit.title}`);
                    setReportIssueType("TYPO");
                    setReportDescription("");
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-white border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 hover:border-amber-300 hover:bg-amber-50 hover:text-amber-800 transition"
                >
                  <Flag className="h-3.5 w-3.5 text-amber-600" />
                  <span>Report Typo</span>
                </button>

                {/* Language Switcher solely for the Unit Study Content */}
                <div className="flex items-center gap-1.5 rounded-2xl bg-slate-100 border border-slate-200 p-1">
                  <span className="hidden sm:flex items-center gap-1 pl-2.5 pr-1 text-xs font-bold text-slate-600">
                    <Languages className="h-3.5 w-3.5 text-indigo-600" />
                    Language:
                  </span>
                  <button
                    onClick={() => setContentLanguage("ENGLISH")}
                    className={`rounded-xl px-3 py-1.5 text-xs font-bold transition ${
                      contentLanguage === "ENGLISH"
                        ? "bg-white text-slate-900 shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setContentLanguage("HINGLISH")}
                    className={`rounded-xl px-3 py-1.5 text-xs font-bold transition ${
                      contentLanguage === "HINGLISH"
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Hinglish
                  </button>
                </div>
              </div>
            </div>

            {/* Learning Goal Callout */}
            <div className="rounded-2xl bg-sky-50 border border-sky-200 p-4 text-sm font-medium text-slate-800">
              <strong className="text-sky-900 font-extrabold">
                🎯 Topic Goal:{" "}
              </strong>
              {isHinglish && activeUnit.summaryHinglish
                ? activeUnit.summaryHinglish
                : activeUnit.summary}
            </div>

            {/* Main Study Content Sections (English / Hinglish) */}
            <div className="space-y-6">
              {activeUnit.contentSections.map((sec, idx) => {
                const headingText =
                  isHinglish && sec.headingHinglish
                    ? sec.headingHinglish
                    : sec.heading;
                const bodyText =
                  isHinglish && sec.bodyHinglish ? sec.bodyHinglish : sec.body;
                const tipText =
                  isHinglish && sec.formulaOrTipHinglish
                    ? sec.formulaOrTipHinglish
                    : sec.formulaOrTip;

                return (
                  <div key={idx} className="space-y-3">
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                      {headingText}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-slate-700 leading-relaxed">
                      {bodyText}
                    </p>
                    {tipText && (
                      <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-4 text-xs sm:text-sm font-bold text-amber-950 flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{tipText}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* UNIT PRACTICE TEST BOX (10 Questions • 100 Marks • Tiered Deduction: -5, -3, min 2 marks) */}
          <div className="rounded-3xl border-2 border-slate-200 bg-white shadow-[0_6px_0_0_#e2e8f0] p-5 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600">
                  {totalQuestions} Questions • {totalMarks} Marks
                </span>
                <h3 className="mt-1 text-xl sm:text-2xl font-extrabold text-slate-900">
                  Unit Practice Test
                </h3>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  Each question carries 10 marks (1st wrong: -5m, 2nd wrong: -3m, minimum 2 marks earned when solved).
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 text-xs font-extrabold">
                <span className="rounded-xl bg-slate-100 border border-slate-200 px-3.5 py-2 text-slate-700">
                  Selected: {answeredCount}/{totalQuestions}
                </span>
                <span
                  className={`rounded-xl border px-3.5 py-2 ${
                    currentTotalScore < totalMarks
                      ? "bg-amber-50 border-amber-200 text-amber-800"
                      : "bg-emerald-50 border-emerald-200 text-emerald-700"
                  }`}
                >
                  Score: {currentTotalScore} / {totalMarks} Marks
                </span>
              </div>
            </div>

            {/* Feedback Banner when some answers were wrong */}
            {hasSubmittedAtLeastOnce && !testCompletedNow && lastWrongCount > 0 && (
              <div className="rounded-2xl bg-rose-50 border-2 border-rose-200 p-4 flex items-start gap-3 text-xs sm:text-sm font-bold text-rose-900">
                <AlertCircle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <p>
                    {lastWrongCount} {lastWrongCount === 1 ? "answer was" : "answers were"} incorrect. Correct answers are locked in green!
                  </p>
                  <p className="text-rose-700 font-medium mt-0.5">
                    Select the right option for the remaining {totalQuestions - answeredCount} {totalQuestions - answeredCount === 1 ? "question" : "questions"} below and submit again to finish the test.
                  </p>
                </div>
              </div>
            )}

            {/* Success Banner when all answers are correct */}
            {testCompletedNow && (
              <div className="rounded-2xl bg-emerald-50 border-2 border-emerald-300 p-4 flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-emerald-900">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>
                    Test Completed! All {totalQuestions} questions solved. Final Score: {currentTotalScore} / {totalMarks} Marks.
                  </span>
                </div>
              </div>
            )}

            {/* Questions List */}
            <div className="space-y-5">
              {activeUnit.checkpointQuestions.map((q, qIdx) => {
                const chosen = selectedAnswers[q.id];
                const wrongCount = wrongAttemptsByQ[q.id] || 0;
                const triedWrongs = triedWrongOptionsByQ[q.id] || [];
                const isLockedCorrect = Boolean(lockedCorrectByQ[q.id]);
                const questionMarks = getQuestionMarks(wrongCount);

                return (
                  <div
                    key={q.id}
                    className={`rounded-2xl border p-4 sm:p-5 space-y-3.5 transition ${
                      isLockedCorrect
                        ? "border-emerald-300 bg-emerald-50/40"
                        : wrongCount > 0
                        ? "border-amber-300 bg-amber-50/30"
                        : "border-slate-200 bg-slate-50/50"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm sm:text-base font-extrabold text-slate-900 flex items-start gap-2">
                        <HelpCircle className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                        <span>
                          Q{qIdx + 1}. {q.question}
                        </span>
                      </p>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          title="Report an issue or typo in this question"
                          onClick={() => {
                            setReportTarget(`Q${qIdx + 1}: ${q.question}`);
                            setReportIssueType("WRONG_ANSWER_KEY");
                            setReportDescription("");
                          }}
                          className="inline-flex items-center gap-1 rounded-lg bg-white border border-slate-200 px-2 py-1 text-[11px] font-bold text-slate-500 hover:border-amber-300 hover:text-amber-700 transition"
                        >
                          <Flag className="h-3 w-3 text-amber-500" />
                          <span className="hidden sm:inline">Report</span>
                        </button>
                        <span
                          className={`rounded-lg border px-2.5 py-1 text-[11px] font-extrabold ${
                            isLockedCorrect
                              ? "bg-emerald-100 border-emerald-300 text-emerald-800"
                              : wrongCount > 0
                              ? "bg-amber-100 border-amber-300 text-amber-900"
                              : "bg-white border-slate-200 text-slate-600"
                          }`}
                        >
                          {isLockedCorrect
                            ? `✓ +${questionMarks} Marks`
                            : `${questionMarks} / 10 Marks`}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = chosen === optIdx;
                        const wasTriedWrong = triedWrongs.includes(optIdx);

                        let btnStyle =
                          "border-slate-200 bg-white text-slate-800 hover:bg-slate-50";

                        if (isLockedCorrect && isSelected) {
                          btnStyle =
                            "border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-300";
                        } else if (wasTriedWrong) {
                          btnStyle =
                            "border-rose-300 bg-rose-50/80 text-rose-400 line-through cursor-not-allowed opacity-75";
                        } else if (isSelected) {
                          btnStyle =
                            "border-indigo-500 bg-indigo-50 text-indigo-950 ring-2 ring-indigo-300";
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={isLockedCorrect || wasTriedWrong}
                            onClick={() => handleSelectOption(q.id, optIdx)}
                            className={`rounded-2xl border-2 border-b-4 p-3.5 text-left text-xs sm:text-sm font-bold transition ${btnStyle}`}
                          >
                            <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-slate-50 border border-slate-300 text-xs font-extrabold">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {isLockedCorrect && (
                      <div className="rounded-xl p-3 text-xs font-bold bg-emerald-100 border border-emerald-300 text-emerald-900">
                        <strong>✅ Correct (+{questionMarks} Marks): </strong>
                        {q.explanation}
                      </div>
                    )}

                    {!isLockedCorrect && wrongCount > 0 && (
                      <div className="rounded-xl p-3 text-xs font-bold bg-rose-100 border border-rose-300 text-rose-900">
                        <strong>
                          ❌ Wrong Attempt ({wrongCount === 1 ? "-5 Marks" : wrongCount === 2 ? "-8 Marks total" : "Min 2 Marks remaining"}):{" "}
                        </strong>
                        Pick another option above to earn +{questionMarks} Marks for this question.
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Action Bar: Button is greyed out until ALL questions are answered, then turns green */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100">
              <div>
                {!testCompletedNow ? (
                  <button
                    disabled={!allQuestionsAnswered}
                    onClick={handleSubmitTest}
                    className={`px-7 py-3.5 text-sm flex items-center gap-2 rounded-2xl font-extrabold transition ${
                      allQuestionsAnswered
                        ? "btn-3d-emerald"
                        : "bg-slate-200 border-2 border-slate-300 border-b-4 text-slate-400 cursor-not-allowed"
                    }`}
                  >
                    <CheckCircle2 className="h-5 w-5" />
                    <span>
                      Submit Test ({answeredCount}/{totalQuestions} Answered)
                    </span>
                  </button>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-2xl bg-emerald-100 border border-emerald-300 px-5 py-3 text-xs font-extrabold text-emerald-800">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    Test Completed • Final Score: {currentTotalScore} / {totalMarks} Marks
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                {activeUnitIdx > 0 && (
                  <button
                    onClick={() => switchUnit(activeUnitIdx - 1)}
                    className="btn-3d-white px-4 py-3 text-xs inline-flex items-center gap-1.5"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Previous Topic</span>
                  </button>
                )}

                {activeUnitIdx + 1 < mod.units.length && (
                  <button
                    onClick={() => switchUnit(activeUnitIdx + 1)}
                    className="btn-3d-white px-5 py-3 text-xs inline-flex items-center gap-1.5"
                  >
                    <span>Next Topic</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 1-Click Report Typo / Academic Review Modal */}
      {reportTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-3xl border-2 border-slate-200 bg-white p-6 shadow-[0_8px_0_0_#e2e8f0] space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-3 py-0.5 text-[11px] font-extrabold text-amber-800">
                  <Flag className="h-3 w-3" /> Academic Quality Shield
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 mt-1">
                  Report a Typo or Question Issue
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setReportTarget(null)}
                className="rounded-xl p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3 text-xs font-bold text-slate-600 line-clamp-2">
              Target: <span className="text-slate-900">{reportTarget}</span>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1">
                  Issue Category
                </label>
                <select
                  value={reportIssueType}
                  onChange={(e) =>
                    setReportIssueType(
                      e.target.value as
                        | "TYPO"
                        | "WRONG_ANSWER_KEY"
                        | "FORMULA_CLARIFICATION"
                        | "OTHER"
                    )
                  }
                  className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs font-bold text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none"
                >
                  <option value="TYPO">Spelling / Typo in Notes or Question</option>
                  <option value="WRONG_ANSWER_KEY">
                    Answer Key / Calculation Doubt
                  </option>
                  <option value="FORMULA_CLARIFICATION">
                    Formula / NCERT Reference Clarification
                  </option>
                  <option value="OTHER">Other Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1">
                  Brief Details (Optional)
                </label>
                <textarea
                  rows={3}
                  value={reportDescription}
                  onChange={(e) => setReportDescription(e.target.value)}
                  placeholder="Tell us what looks off according to your NCERT / Board textbook..."
                  className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs font-bold text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={() => setReportTarget(null)}
                className="btn-3d-white px-4 py-2.5 text-xs"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  submitContentReport({
                    moduleSlug: mod.slug,
                    chapterTitle: mod.title,
                    unitTitle: activeUnit.title,
                    targetLabel: reportTarget,
                    issueType: reportIssueType,
                    description:
                      reportDescription.trim() ||
                      "Flagged by student for quick textbook verification.",
                  });
                  setReportTarget(null);
                }}
                className="btn-3d-emerald px-5 py-2.5 text-xs"
              >
                Submit Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function TrailDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  return (
    <Suspense fallback={<div className="p-12 text-center font-bold text-slate-400">Loading...</div>}>
      <TrailDetailContent slug={slug} />
    </Suspense>
  );
}
