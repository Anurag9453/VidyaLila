"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  PracticeSetData,
  DIFFICULTY_BADGE_STYLES,
  savePracticeAttempt,
  PracticeAttemptRecord,
} from "@/lib/practice-types";
import {
  Clock,
  Flag,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  ArrowLeft,
  Zap,
  ShieldCheck,
  Pause,
  Play,
  BookOpen,
} from "lucide-react";

interface PracticeTestRunnerProps {
  testData: PracticeSetData;
  onExit: () => void;
  onAttemptSaved?: (map: Record<string, PracticeAttemptRecord>) => void;
  onNextSet?: (nextSetNumber: number) => void;
}

export function PracticeTestRunner({
  testData,
  onExit,
  onAttemptSaved,
  onNextSet,
}: PracticeTestRunnerProps) {
  const totalQuestions = testData.questions.length;
  const totalSeconds = testData.durationMinutes * 60;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
  const [isPaused, setIsPaused] = useState(false);
  const [instantMode, setInstantMode] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<
    "ALL" | "CORRECT" | "WRONG" | "SKIPPED"
  >("ALL");

  // Reset when switching set
  useEffect(() => {
    setCurrentIdx(0);
    setAnswers({});
    setFlagged({});
    setSecondsLeft(testData.durationMinutes * 60);
    setIsPaused(false);
    setSubmitted(false);
    setReviewFilter("ALL");
  }, [testData.slug, testData.setNumber, testData.durationMinutes]);

  // Countdown timer
  useEffect(() => {
    if (submitted || isPaused) return;
    const id = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [submitted, isPaused]);

  // Auto-submit when timer hits 0
  useEffect(() => {
    if (secondsLeft === 0 && !submitted) {
      handleSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft]);

  const currentQ = testData.questions[currentIdx];

  const stats = useMemo(() => {
    let correct = 0;
    let wrong = 0;
    let answered = 0;
    testData.questions.forEach((q, idx) => {
      if (answers[idx] !== undefined) {
        answered++;
        if (answers[idx] === q.correctIndex) correct++;
        else wrong++;
      }
    });
    const skipped = totalQuestions - answered;
    const accuracy =
      answered > 0 ? Math.round((correct / answered) * 100) : 0;
    const scorePct =
      totalQuestions > 0 ? Math.round((correct / totalQuestions) * 100) : 0;
    return { correct, wrong, answered, skipped, accuracy, scorePct };
  }, [answers, testData.questions, totalQuestions]);

  const handleSubmit = () => {
    setSubmitted(true);
    const timeSpentSeconds = Math.max(0, totalSeconds - secondsLeft);
    const updated = savePracticeAttempt({
      slug: testData.slug,
      setNumber: testData.setNumber,
      score: stats.correct,
      total: totalQuestions,
      accuracy: stats.accuracy,
      timeSpentSeconds,
      completedAt: new Date().toISOString(),
    });
    onAttemptSaved?.(updated);
  };

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const selectOption = (optIdx: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [currentIdx]: optIdx }));
  };

  const clearResponse = () => {
    if (submitted) return;
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[currentIdx];
      return next;
    });
  };

  const toggleFlag = () => {
    setFlagged((prev) => ({ ...prev, [currentIdx]: !prev[currentIdx] }));
  };

  // ================= RESULTS & SOLUTIONS REVIEW SCREEN =================
  if (submitted) {
    const filteredReview = testData.questions
      .map((q, idx) => ({ q, idx, picked: answers[idx] }))
      .filter(({ q, picked }) => {
        if (reviewFilter === "CORRECT") return picked === q.correctIndex;
        if (reviewFilter === "WRONG")
          return picked !== undefined && picked !== q.correctIndex;
        if (reviewFilter === "SKIPPED") return picked === undefined;
        return true;
      });

    return (
      <div className="space-y-6 max-w-5xl mx-auto">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onExit}
            className="btn-3d-white px-4 py-2 text-xs font-extrabold inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Practice Hub</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setAnswers({});
                setFlagged({});
                setCurrentIdx(0);
                setSecondsLeft(totalSeconds);
                setSubmitted(false);
              }}
              className="btn-3d-white px-4 py-2 text-xs font-extrabold inline-flex items-center gap-1.5"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Retake Set {testData.setNumber}</span>
            </button>
            {onNextSet && testData.setNumber < 10 && (
              <button
                type="button"
                onClick={() => onNextSet(testData.setNumber + 1)}
                className="btn-3d-indigo px-4 py-2 text-xs font-extrabold inline-flex items-center gap-1.5"
              >
                <span>Next: Set {testData.setNumber + 1}</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Score Summary Card */}
        <div className="bento-card p-6 sm:p-8 bg-gradient-to-br from-indigo-50/90 via-white to-emerald-50/70">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-slate-900 px-2.5 py-0.5 text-[11px] font-extrabold text-white">
                  Class {testData.classGrade} • {testData.subject}
                </span>
                <span
                  className={`rounded-md border px-2.5 py-0.5 text-[11px] font-extrabold ${DIFFICULTY_BADGE_STYLES[testData.difficulty]}`}
                >
                  Set {testData.setNumber} • {testData.difficulty}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
                {testData.chapterTitle} — Test Report
              </h1>
              <p className="text-sm text-slate-600">
                Time taken: <strong>{formatTime(totalSeconds - secondsLeft)}</strong>{" "}
                out of {testData.durationMinutes}:00 mins
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 shrink-0">
              <div className="rounded-2xl bg-white border-2 border-indigo-200 px-4 py-3 text-center">
                <div className="text-2xl font-black text-indigo-700">
                  {stats.correct}/{totalQuestions}
                </div>
                <div className="text-[10px] font-extrabold uppercase text-slate-500">
                  Score ({stats.scorePct}%)
                </div>
              </div>
              <div className="rounded-2xl bg-emerald-50 border-2 border-emerald-200 px-4 py-3 text-center">
                <div className="text-2xl font-black text-emerald-700">
                  {stats.correct}
                </div>
                <div className="text-[10px] font-extrabold uppercase text-emerald-700">
                  Correct
                </div>
              </div>
              <div className="rounded-2xl bg-rose-50 border-2 border-rose-200 px-4 py-3 text-center">
                <div className="text-2xl font-black text-rose-700">
                  {stats.wrong}
                </div>
                <div className="text-[10px] font-extrabold uppercase text-rose-700">
                  Incorrect
                </div>
              </div>
              <div className="rounded-2xl bg-slate-50 border-2 border-slate-200 px-4 py-3 text-center">
                <div className="text-2xl font-black text-slate-700">
                  {stats.accuracy}%
                </div>
                <div className="text-[10px] font-extrabold uppercase text-slate-500">
                  Accuracy
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Review Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
            <Award className="h-5 w-5 text-indigo-600" />
            <span>Detailed Question-by-Question Review</span>
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {(
              [
                ["ALL", `All (${totalQuestions})`],
                ["CORRECT", `Correct (${stats.correct})`],
                ["WRONG", `Incorrect (${stats.wrong})`],
                ["SKIPPED", `Skipped (${stats.skipped})`],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setReviewFilter(key)}
                className={`rounded-xl px-3 py-1.5 text-xs font-extrabold transition ${
                  reviewFilter === key
                    ? "bg-slate-900 text-white"
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Solution Cards */}
        <div className="space-y-4">
          {filteredReview.map(({ q, idx, picked }) => {
            const isCorrect = picked === q.correctIndex;
            const isSkipped = picked === undefined;
            return (
              <div
                key={q.id}
                className={`rounded-2xl border-2 bg-white p-5 space-y-3 ${
                  isSkipped
                    ? "border-slate-200"
                    : isCorrect
                    ? "border-emerald-200"
                    : "border-rose-200"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Question {idx + 1}
                    {q.topicTag ? ` • ${q.topicTag}` : ""}
                  </span>
                  {isSkipped ? (
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-extrabold text-slate-600">
                      Skipped
                    </span>
                  ) : isCorrect ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-extrabold text-emerald-800">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Correct
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-rose-100 px-2.5 py-0.5 text-[11px] font-extrabold text-rose-800">
                      <XCircle className="h-3.5 w-3.5" />
                      Incorrect
                    </span>
                  )}
                </div>

                <p className="lesson-reading text-[15.5px] sm:text-[16.5px] font-semibold text-slate-900 leading-relaxed">
                  {q.question}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {q.options.map((opt, oIdx) => {
                    const isRightOpt = oIdx === q.correctIndex;
                    const isUserPick = oIdx === picked;
                    return (
                      <div
                        key={oIdx}
                        className={`rounded-xl border px-3.5 py-2.5 text-sm font-medium flex items-center gap-2.5 ${
                          isRightOpt
                            ? "border-emerald-400 bg-emerald-50 text-emerald-950 font-bold"
                            : isUserPick
                            ? "border-rose-400 bg-rose-50 text-rose-950"
                            : "border-slate-200 bg-slate-50/50 text-slate-600"
                        }`}
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white border border-slate-200 text-xs font-black">
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span className="lesson-reading">{opt}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="rounded-xl bg-indigo-50/70 border border-indigo-200/80 p-3.5 text-sm text-indigo-950">
                  <span className="text-[11px] font-black uppercase tracking-wider text-indigo-700 block mb-1">
                    Explanation
                  </span>
                  <p className="lesson-reading leading-relaxed">
                    {q.explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ================= LIVE CBT EXAM INTERFACE =================
  const pickedCurrent = answers[currentIdx];
  const showInstantFeedback = instantMode && pickedCurrent !== undefined;

  return (
    <div className="space-y-5 max-w-7xl mx-auto">
      {/* Top Sticky Exam Bar */}
      <div className="rounded-2xl bg-slate-900 text-white px-4 py-3 sm:px-6 flex flex-wrap items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-3 min-w-0">
          <button
            type="button"
            onClick={onExit}
            className="rounded-xl bg-white/10 hover:bg-white/20 px-3 py-1.5 text-xs font-bold inline-flex items-center gap-1 transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Exit</span>
          </button>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold text-amber-300 uppercase tracking-wider">
                Class {testData.classGrade} • {testData.subject} • Set{" "}
                {testData.setNumber}
              </span>
              <span
                className={`rounded-md border px-2 py-0.5 text-[10px] font-extrabold ${DIFFICULTY_BADGE_STYLES[testData.difficulty]}`}
              >
                {testData.difficulty}
              </span>
            </div>
            <h2 className="truncate text-sm sm:text-base font-black">
              {testData.chapterTitle}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Exam Mode vs Instant Check Toggle */}
          <button
            type="button"
            onClick={() => setInstantMode((v) => !v)}
            title="Toggle between Timed Exam Mode and Instant Explanation Mode"
            className={`rounded-xl px-3 py-1.5 text-xs font-extrabold border transition inline-flex items-center gap-1.5 ${
              instantMode
                ? "bg-emerald-500/20 border-emerald-400 text-emerald-200"
                : "bg-white/10 border-white/20 text-slate-200 hover:bg-white/15"
            }`}
          >
            {instantMode ? (
              <>
                <Zap className="h-3.5 w-3.5" />
                <span>Instant Check: ON</span>
              </>
            ) : (
              <>
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Exam Mode</span>
              </>
            )}
          </button>

          {/* Timer */}
          <div
            className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 font-mono text-sm font-black ${
              secondsLeft < 300
                ? "bg-rose-600 text-white animate-pulse"
                : "bg-white/10 text-amber-200"
            }`}
          >
            <Clock className="h-4 w-4" />
            <span>{formatTime(secondsLeft)}</span>
            <button
              type="button"
              onClick={() => setIsPaused((p) => !p)}
              aria-label={isPaused ? "Resume timer" : "Pause timer"}
              className="ml-1 rounded p-0.5 hover:bg-white/20"
            >
              {isPaused ? (
                <Play className="h-3.5 w-3.5" />
              ) : (
                <Pause className="h-3.5 w-3.5" />
              )}
            </button>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="btn-3d-emerald px-4 py-1.5 text-xs font-extrabold"
          >
            Submit Test ({stats.answered}/{totalQuestions})
          </button>
        </div>
      </div>

      {testData.isPreviewFallback && (
        <div className="rounded-2xl border border-amber-300 bg-amber-50 px-4 py-2.5 text-xs font-bold text-amber-900 flex items-center gap-2">
          <BookOpen className="h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Preview Question Set loaded from chapter checkpoints while the full
            50-question real-world practice bank for this chapter is being
            published.
          </span>
        </div>
      )}

      {/* Main 2-Column Exam Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Question Card (Left 8 cols) */}
        <div className="lg:col-span-8 game-card p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-white font-black text-sm">
                {currentIdx + 1}
              </span>
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                  Question {currentIdx + 1} of {totalQuestions}
                </span>
                {currentQ.topicTag && (
                  <p className="text-xs font-bold text-indigo-700">
                    {currentQ.topicTag}
                  </p>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={toggleFlag}
              className={`rounded-xl px-3 py-1.5 text-xs font-extrabold border inline-flex items-center gap-1.5 transition ${
                flagged[currentIdx]
                  ? "bg-purple-100 border-purple-300 text-purple-800"
                  : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Flag className="h-3.5 w-3.5" />
              <span>
                {flagged[currentIdx] ? "Marked for Review" : "Mark for Review"}
              </span>
            </button>
          </div>

          {/* Question Stem */}
          <p className="lesson-reading text-[17px] sm:text-[19px] font-semibold text-slate-900 leading-[1.75]">
            {currentQ.question}
          </p>

          {/* 4 Options */}
          <div className="space-y-3">
            {currentQ.options.map((opt, oIdx) => {
              const isSelected = pickedCurrent === oIdx;
              const isCorrectOpt = oIdx === currentQ.correctIndex;

              let optStyle =
                "border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/40 text-slate-800";
              if (showInstantFeedback) {
                if (isCorrectOpt) {
                  optStyle =
                    "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold";
                } else if (isSelected) {
                  optStyle = "border-rose-500 bg-rose-50 text-rose-950";
                }
              } else if (isSelected) {
                optStyle =
                  "border-indigo-600 bg-indigo-50 text-indigo-950 font-bold ring-2 ring-indigo-200";
              }

              return (
                <button
                  key={oIdx}
                  type="button"
                  onClick={() => selectOption(oIdx)}
                  className={`w-full rounded-2xl border-2 px-4 py-3.5 text-left transition flex items-start gap-3.5 ${optStyle}`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-xl text-xs font-black border ${
                      isSelected
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "bg-slate-100 text-slate-700 border-slate-200"
                    }`}
                  >
                    {String.fromCharCode(65 + oIdx)}
                  </span>
                  <span className="lesson-reading text-[15.5px] sm:text-[16.5px] leading-relaxed pt-0.5">
                    {opt}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Instant Mode Explanation */}
          {showInstantFeedback && (
            <div
              className={`rounded-2xl border-2 p-4 space-y-1 ${
                pickedCurrent === currentQ.correctIndex
                  ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                  : "bg-rose-50 border-rose-300 text-rose-950"
              }`}
            >
              <div className="text-xs font-black uppercase tracking-wider">
                {pickedCurrent === currentQ.correctIndex
                  ? "Correct! 🎉"
                  : `Incorrect — Correct Option: ${String.fromCharCode(
                      65 + currentQ.correctIndex
                    )}`}
              </div>
              <p className="lesson-reading text-sm leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Bottom Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
                className="btn-3d-white px-4 py-2 text-xs font-extrabold inline-flex items-center gap-1 disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Previous</span>
              </button>

              {pickedCurrent !== undefined && (
                <button
                  type="button"
                  onClick={clearResponse}
                  className="rounded-xl px-3 py-2 text-xs font-bold text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition"
                >
                  Clear Response
                </button>
              )}
            </div>

            {currentIdx < totalQuestions - 1 ? (
              <button
                type="button"
                onClick={() =>
                  setCurrentIdx((i) => Math.min(totalQuestions - 1, i + 1))
                }
                className="btn-3d-indigo px-5 py-2 text-xs font-extrabold inline-flex items-center gap-1"
              >
                <span>Save &amp; Next</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="btn-3d-emerald px-5 py-2 text-xs font-extrabold"
              >
                Finish &amp; Submit Test
              </button>
            )}
          </div>
        </div>

        {/* 50-Question Navigator Palette (Right 4 cols) */}
        <div className="lg:col-span-4 game-card p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
              Question Palette
            </h3>
            <span className="text-xs font-extrabold text-indigo-700">
              {stats.answered}/{totalQuestions} Answered
            </span>
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-10 lg:grid-cols-5 gap-2">
            {testData.questions.map((_, idx) => {
              const isCurrent = idx === currentIdx;
              const isAnswered = answers[idx] !== undefined;
              const isFlagged = flagged[idx];

              let cls =
                "bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200";
              if (isFlagged) {
                cls = "bg-purple-600 text-white border-purple-700";
              } else if (isAnswered) {
                cls = "bg-emerald-500 text-white border-emerald-600";
              }

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIdx(idx)}
                  className={`h-9 rounded-xl border text-xs font-black transition ${cls} ${
                    isCurrent ? "ring-2 ring-indigo-600 ring-offset-2" : ""
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {/* Palette Legend */}
          <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100 text-[11px] font-bold text-slate-600">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded bg-emerald-500" />
              <span>Answered ({stats.answered})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded bg-purple-600" />
              <span>
                Review ({Object.values(flagged).filter(Boolean).length})
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded bg-slate-200 border border-slate-300" />
              <span>Unanswered ({stats.skipped})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded ring-2 ring-indigo-600" />
              <span>Current</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
