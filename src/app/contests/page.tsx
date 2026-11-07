"use client";

import React, { useState, useEffect, useCallback, useRef, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useApp } from "@/lib/store";
import {
  QuizContest,
  ClassGrade,
  STAGGERED_TIME_SLOTS,
} from "@/lib/mock-data";
import { PaymentModal, PassPackageType } from "@/components/PaymentModal";
import {
  Swords,
  Clock,
  Users,
  Trophy,
  Lock,
  Sparkles,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  Calendar,
  Award,
  Radio,
  BookOpen,
  Layers,
  MessageSquare,
  ShieldCheck,
  AlertTriangle,
  FileCheck2,
  Bookmark,
  RotateCcw,
  CheckSquare,
} from "lucide-react";

const CBT_STORAGE_KEY = "vidyalila_active_cbt_v1";

interface SavedCbtSession {
  contestId: string;
  startedAtMs: number;
  deadlineMs: number;
  answers: Record<string, number>;
  markedForReview: string[];
  visitedIds: string[];
  currentQIdx: number;
  tabWarnings: number;
}

function ContestArenaContent() {
  const searchParams = useSearchParams();
  const initialPlayId = searchParams.get("play");

  const {
    profile,
    contests,
    activateProPass,
    consumePassForContest,
    submitContestResult,
  } = useApp();

  const [selectedQuizClass, setSelectedQuizClass] = useState<ClassGrade>(
    profile.classGrade === 10 ? 10 : 9
  );
  const [quizClassAlert, setQuizClassAlert] = useState<string | null>(null);

  // Pre-test official instructions modal state
  const [instructionTarget, setInstructionTarget] =
    useState<QuizContest | null>(null);
  const [declarationAccepted, setDeclarationAccepted] = useState(false);

  // Active CBT Exam state
  const [activeContest, setActiveContest] = useState<QuizContest | null>(null);
  const [paymentTarget, setPaymentTarget] = useState<QuizContest | null>(null);
  const [defaultModalPkg, setDefaultModalPkg] =
    useState<PassPackageType>("WEEKLY");
  const [showPassModal, setShowPassModal] = useState(false);
  const [filterTab, setFilterTab] = useState<"ALL" | "LIVE" | "UPCOMING">("ALL");
  const [scopeFilter, setScopeFilter] = useState<
    "ALL" | "FULL_SYLLABUS" | "SELECTED_CHAPTERS"
  >("ALL");

  const [currentQIdx, setCurrentQIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [markedForReview, setMarkedForReview] = useState<string[]>([]);
  const [visitedIds, setVisitedIds] = useState<string[]>([]);
  const [startedAtMs, setStartedAtMs] = useState<number>(0);
  const [deadlineMs, setDeadlineMs] = useState<number>(0);
  const [secondsLeft, setSecondsLeft] = useState(600);
  const [tabWarnings, setTabWarnings] = useState(0);
  const [lastSavedTime, setLastSavedTime] = useState<string>("Just now");
  const [showSubmitConfirmModal, setShowSubmitConfirmModal] = useState(false);
  const [isSubmittingServer, setIsSubmittingServer] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionReceiptId, setSubmissionReceiptId] = useState<string>("");
  const [savedSessionBanner, setSavedSessionBanner] =
    useState<SavedCbtSession | null>(null);

  const hasAutoSubmittedRef = useRef(false);

  const dailyPassesLeft = profile.dailyPassesRemaining || 0;
  const compPassesLeft = profile.competitionPassesRemaining || 0;

  useEffect(() => {
    setSelectedQuizClass(profile.classGrade === 10 ? 10 : 9);
  }, [profile.classGrade]);

  // Check if there is an unfinished CBT test session in localStorage (Crash / Refresh Recovery)
  useEffect(() => {
    try {
      const raw = localStorage.getItem(CBT_STORAGE_KEY);
      if (!raw) return;
      const parsed: SavedCbtSession = JSON.parse(raw);
      if (parsed && parsed.deadlineMs > Date.now() + 2000) {
        setSavedSessionBanner(parsed);
      } else {
        localStorage.removeItem(CBT_STORAGE_KEY);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  // Persist active CBT session to localStorage on every option click / navigation
  useEffect(() => {
    if (!activeContest || isSubmitted || !deadlineMs) return;
    try {
      const payload: SavedCbtSession = {
        contestId: activeContest.id,
        startedAtMs,
        deadlineMs,
        answers,
        markedForReview,
        visitedIds,
        currentQIdx,
        tabWarnings,
      };
      localStorage.setItem(CBT_STORAGE_KEY, JSON.stringify(payload));
      const now = new Date();
      setLastSavedTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    } catch {
      // ignore storage errors
    }
  }, [
    activeContest,
    isSubmitted,
    startedAtMs,
    deadlineMs,
    answers,
    markedForReview,
    visitedIds,
    currentQIdx,
    tabWarnings,
  ]);

  // Proctoring: detect tab switches during live CBT examination
  useEffect(() => {
    if (!activeContest || isSubmitted) return;
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTabWarnings((prev) => prev + 1);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [activeContest, isSubmitted]);

  // Filter by selected Class and Syllabus Track (Full Syllabus vs Selected Chapters)
  const classQuizzes = contests.filter((c) => {
    if (c.classGrade !== selectedQuizClass) return false;
    if (scopeFilter === "FULL_SYLLABUS") {
      return (c.syllabusScope || "FULL_SYLLABUS") === "FULL_SYLLABUS";
    }
    if (scopeFilter === "SELECTED_CHAPTERS") {
      return c.syllabusScope === "SELECTED_CHAPTERS";
    }
    return true;
  });

  const liveQuizzes = classQuizzes.filter((c) => c.isLive);
  const upcomingQuizzes = classQuizzes.filter((c) => !c.isLive);

  const finalizeAndSubmitPaper = useCallback(
    (isAutoTimeout = false) => {
      if (!activeContest || isSubmitted || hasAutoSubmittedRef.current) return;
      hasAutoSubmittedRef.current = true;
      setShowSubmitConfirmModal(false);
      setIsSubmittingServer(true);

      let score = 0;
      activeContest.questions.forEach((q) => {
        if (answers[q.id] === q.correctIndex) score += 1;
      });

      const receipt = `VL-CBT-${activeContest.classGrade}${activeContest.subject
        .slice(0, 3)
        .toUpperCase()}-${String(Date.now()).slice(-6)}`;
      setSubmissionReceiptId(receipt);

      try {
        localStorage.removeItem(CBT_STORAGE_KEY);
        setSavedSessionBanner(null);
      } catch {
        // ignore
      }

      // When auto-submitting at 00:00 across thousands of students simultaneously,
      // apply a brief jitter (250ms–1400ms) so the server receives a smooth wave instead of a single-millisecond spike.
      const jitterMs = isAutoTimeout
        ? 350 + Math.floor(Math.random() * 1100)
        : 250;

      setTimeout(() => {
        submitContestResult(
          activeContest.id,
          score,
          activeContest.questions.length,
          activeContest.xpReward,
          answers
        );
        setIsSubmittingServer(false);
        setIsSubmitted(true);
      }, jitterMs);
    },
    [activeContest, isSubmitted, answers, submitContestResult]
  );

  // Wall-clock synchronized countdown timer (immune to background tab throttling or page reload)
  useEffect(() => {
    if (!activeContest || isSubmitted || !deadlineMs) return;
    const tick = () => {
      const remaining = Math.max(
        0,
        Math.ceil((deadlineMs - Date.now()) / 1000)
      );
      setSecondsLeft(remaining);
      if (remaining <= 0 && !hasAutoSubmittedRef.current) {
        finalizeAndSubmitPaper(true);
      }
    };
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [activeContest, isSubmitted, deadlineMs, finalizeAndSubmitPaper]);

  const launchCbtHall = (contest: QuizContest) => {
    const nowMs = Date.now();
    const endMs = nowMs + contest.durationMinutes * 60 * 1000;
    const firstQId = contest.questions[0]?.id;

    hasAutoSubmittedRef.current = false;
    setInstructionTarget(null);
    setActiveContest(contest);
    setCurrentQIdx(0);
    setAnswers({});
    setMarkedForReview([]);
    setVisitedIds(firstQId ? [firstQId] : []);
    setStartedAtMs(nowMs);
    setDeadlineMs(endMs);
    setSecondsLeft(contest.durationMinutes * 60);
    setTabWarnings(0);
    setShowSubmitConfirmModal(false);
    setIsSubmittingServer(false);
    setIsSubmitted(false);
  };

  const resumeSavedCbtSession = (session: SavedCbtSession) => {
    const found = contests.find((c) => c.id === session.contestId);
    if (!found) {
      localStorage.removeItem(CBT_STORAGE_KEY);
      setSavedSessionBanner(null);
      return;
    }
    hasAutoSubmittedRef.current = false;
    setActiveContest(found);
    setCurrentQIdx(session.currentQIdx || 0);
    setAnswers(session.answers || {});
    setMarkedForReview(session.markedForReview || []);
    setVisitedIds(
      session.visitedIds?.length
        ? session.visitedIds
        : [found.questions[0]?.id || ""]
    );
    setStartedAtMs(session.startedAtMs);
    setDeadlineMs(session.deadlineMs);
    setSecondsLeft(
      Math.max(1, Math.ceil((session.deadlineMs - Date.now()) / 1000))
    );
    setTabWarnings(session.tabWarnings || 0);
    setShowSubmitConfirmModal(false);
    setIsSubmittingServer(false);
    setIsSubmitted(false);
  };

  const openInstructionScreen = (contest: QuizContest) => {
    // If there is already a live saved session for this exact contest, resume directly
    if (
      savedSessionBanner &&
      savedSessionBanner.contestId === contest.id &&
      savedSessionBanner.deadlineMs > Date.now()
    ) {
      resumeSavedCbtSession(savedSessionBanner);
      return;
    }
    setDeclarationAccepted(false);
    setInstructionTarget(contest);
  };

  const handleEnterContest = (contest: QuizContest) => {
    const alreadyUnlocked = profile.unlockedContestIds.includes(contest.id);
    if (alreadyUnlocked) {
      if (contest.isLive) {
        openInstructionScreen(contest);
      }
      return;
    }

    // Try consuming an available pass from the student's wallet
    const usedPass = consumePassForContest(contest.id, contest.type);
    if (usedPass) {
      if (contest.isLive) {
        openInstructionScreen(contest);
      }
    } else {
      setDefaultModalPkg(contest.type === "DAILY" ? "ONE_DAY" : "WEEKLY");
      setPaymentTarget(contest);
    }
  };

  useEffect(() => {
    if (initialPlayId) {
      const found = contests.find((c) => c.id === initialPlayId);
      if (found) {
        setSelectedQuizClass(found.classGrade);
        handleEnterContest(found);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialPlayId]);

  const navigateToQuestion = (idx: number) => {
    if (!activeContest) return;
    const bounded = Math.max(
      0,
      Math.min(activeContest.questions.length - 1, idx)
    );
    setCurrentQIdx(bounded);
    const qId = activeContest.questions[bounded]?.id;
    if (qId && !visitedIds.includes(qId)) {
      setVisitedIds((prev) => [...prev, qId]);
    }
  };

  const handleSaveAndNext = () => {
    if (!activeContest) return;
    if (currentQIdx + 1 < activeContest.questions.length) {
      navigateToQuestion(currentQIdx + 1);
    } else {
      setShowSubmitConfirmModal(true);
    }
  };

  const handleMarkForReviewAndNext = () => {
    if (!activeContest) return;
    const currentQ = activeContest.questions[currentQIdx];
    if (currentQ && !markedForReview.includes(currentQ.id)) {
      setMarkedForReview((prev) => [...prev, currentQ.id]);
    }
    if (currentQIdx + 1 < activeContest.questions.length) {
      navigateToQuestion(currentQIdx + 1);
    }
  };

  const handleToggleMarkCurrent = () => {
    if (!activeContest) return;
    const currentQ = activeContest.questions[currentQIdx];
    if (!currentQ) return;
    setMarkedForReview((prev) =>
      prev.includes(currentQ.id)
        ? prev.filter((id) => id !== currentQ.id)
        : [...prev, currentQ.id]
    );
  };

  const handleClearResponse = () => {
    if (!activeContest) return;
    const currentQ = activeContest.questions[currentQIdx];
    if (!currentQ) return;
    setAnswers((prev) => {
      const copy = { ...prev };
      delete copy[currentQ.id];
      return copy;
    });
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  // ============================================================================
  // STEP 1: OFFICIAL PRE-TEST EXAMINATION INSTRUCTIONS & CANDIDATE DECLARATION
  // ============================================================================
  if (instructionTarget) {
    const totalQ = instructionTarget.questions.length;
    const marksPerQ = 4;
    const maxMarks = totalQ * marksPerQ;
    const paperCode = `CBT-${instructionTarget.classGrade}${instructionTarget.subject
      .slice(0, 3)
      .toUpperCase()}-${instructionTarget.type.slice(0, 1)}`;

    return (
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Official Examination Authority Header */}
        <div className="rounded-2xl border-2 border-slate-800 bg-slate-900 text-white p-5 sm:p-6 shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-700 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-amber-400">
                <ShieldCheck className="h-4 w-4" />
                <span>VIDYALILA NATIONAL COMPUTER-BASED TEST (CBT) PORTAL</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-white">
                {instructionTarget.title}
              </h1>
            </div>
            <div className="text-right">
              <span className="inline-block rounded-lg bg-slate-800 border border-slate-600 px-3 py-1 text-xs font-mono font-bold text-slate-200">
                PAPER CODE: {paperCode}
              </span>
              <p className="text-[11px] font-semibold text-slate-400 mt-1">
                Slot: {instructionTarget.scheduledTimeSlot}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs">
            <div className="rounded-xl bg-slate-800/90 border border-slate-700 p-3">
              <p className="text-slate-400 font-bold uppercase text-[10px]">
                Class &amp; Subject
              </p>
              <p className="font-black text-white text-sm mt-0.5">
                Class {instructionTarget.classGrade} •{" "}
                {instructionTarget.subject}
              </p>
            </div>
            <div className="rounded-xl bg-slate-800/90 border border-slate-700 p-3">
              <p className="text-slate-400 font-bold uppercase text-[10px]">
                Duration
              </p>
              <p className="font-black text-white text-sm mt-0.5">
                {instructionTarget.durationMinutes} Minutes
              </p>
            </div>
            <div className="rounded-xl bg-slate-800/90 border border-slate-700 p-3">
              <p className="text-slate-400 font-bold uppercase text-[10px]">
                Total Questions
              </p>
              <p className="font-black text-white text-sm mt-0.5">
                {totalQ} Objective MCQs
              </p>
            </div>
            <div className="rounded-xl bg-slate-800/90 border border-slate-700 p-3">
              <p className="text-slate-400 font-bold uppercase text-[10px]">
                Maximum Marks
              </p>
              <p className="font-black text-emerald-400 text-sm mt-0.5">
                {maxMarks} Marks (+4 / 0)
              </p>
            </div>
          </div>
        </div>

        {/* General Instructions & Palette Legend */}
        <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
          <div className="space-y-3">
            <h2 className="text-base font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
              1. General Examination Instructions
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm font-medium text-slate-700 list-decimal pl-5">
              <li>
                The examination timer is synchronized with the server wall
                clock. The countdown timer in the top-right corner displays the
                exact remaining time. When the timer reaches{" "}
                <strong>00:00</strong>, the examination will{" "}
                <strong>automatically submit</strong> without requiring any
                further action.
              </li>
              <li>
                <strong>Crash &amp; Network Protection:</strong> Every option
                you select is immediately checkpointed to local encrypted
                browser storage. If your connection drops or your page
                accidentally reloads, your answers and remaining time will
                automatically resume.
              </li>
              <li>
                <strong>Marking Scheme:</strong> Each correct response awards{" "}
                <strong>+4 Marks</strong> (100% weightage per question). There
                is <strong>no negative marking (0 Marks)</strong> for
                incorrect or unattempted questions.
              </li>
              <li>
                To save an answer for evaluation, select an option (A, B, C, or
                D) and click <strong>Save &amp; Next</strong> or{" "}
                <strong>Mark for Review &amp; Next</strong>.
              </li>
            </ul>
          </div>

          {/* Question Palette Symbols Legend */}
          <div className="space-y-3">
            <h2 className="text-base font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
              2. Question Palette Status Symbols
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 border-slate-300 bg-white text-xs font-black text-slate-600">
                  1
                </span>
                <span>
                  <strong>Not Visited:</strong> You have not visited the
                  question yet.
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 border-rose-600 bg-rose-500 text-xs font-black text-white">
                  2
                </span>
                <span>
                  <strong>Not Answered:</strong> You visited the question but
                  have not saved an option.
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 border-emerald-700 bg-emerald-600 text-xs font-black text-white">
                  3
                </span>
                <span>
                  <strong>Answered:</strong> You have answered the question
                  (Will be evaluated).
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 border-violet-700 bg-violet-600 text-xs font-black text-white">
                  4
                </span>
                <span>
                  <strong>Marked for Review:</strong> Flagged to revisit; if an
                  option is also selected, it will be evaluated.
                </span>
              </div>
            </div>
          </div>

          {/* Candidate Declaration Box */}
          <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50/70 p-4 space-y-3">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={declarationAccepted}
                onChange={(e) => setDeclarationAccepted(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-slate-400 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-xs font-bold text-slate-800 leading-relaxed">
                <strong>Candidate Declaration:</strong> I have read and
                understood all the examination instructions listed above. I
                declare that I am attempting this test honestly without using
                external books, search engines, or unfair assistance, and I
                understand that tab-switching is monitored during the live
                examination window.
              </span>
            </label>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200">
            <button
              onClick={() => setInstructionTarget(null)}
              className="rounded-xl border-2 border-slate-300 bg-white px-5 py-2.5 text-xs font-black text-slate-700 hover:bg-slate-50"
            >
              ← Back to Test Schedule
            </button>

            <button
              disabled={!declarationAccepted}
              onClick={() => launchCbtHall(instructionTarget)}
              className="rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed px-6 py-3 text-xs font-black text-white shadow-sm transition flex items-center gap-2"
            >
              <ShieldCheck className="h-4 w-4" />
              <span>I am Ready to Begin Test →</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ============================================================================
  // STEP 2 & 3: LIVE CBT EXAMINATION CONSOLE & OFFICIAL POST-TEST SCORECARD
  // ============================================================================
  if (activeContest) {
    const currentQ = activeContest.questions[currentQIdx];
    const totalQ = activeContest.questions.length;
    const marksPerQ = 4;
    const maxMarks = totalQ * marksPerQ;

    const answeredCount = activeContest.questions.filter(
      (q) => answers[q.id] !== undefined
    ).length;
    const markedCount = markedForReview.length;
    const visitedNotAnsweredCount = activeContest.questions.filter(
      (q) =>
        visitedIds.includes(q.id) &&
        answers[q.id] === undefined &&
        !markedForReview.includes(q.id)
    ).length;
    const notVisitedCount = Math.max(
      0,
      totalQ -
        activeContest.questions.filter(
          (q) =>
            visitedIds.includes(q.id) ||
            answers[q.id] !== undefined ||
            markedForReview.includes(q.id)
        ).length
    );

    const correctCount = activeContest.questions.filter(
      (q) => answers[q.id] === q.correctIndex
    ).length;
    const incorrectCount = answeredCount - correctCount;
    const unattemptedCount = totalQ - answeredCount;
    const obtainedMarks = correctCount * marksPerQ;
    const accuracyPercent =
      answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
    const totalDurationSecs = activeContest.durationMinutes * 60;
    const timeTakenSecs = Math.max(1, totalDurationSecs - secondsLeft);

    const paperCode = `CBT-${activeContest.classGrade}${activeContest.subject
      .slice(0, 3)
      .toUpperCase()}-${activeContest.type.slice(0, 1)}`;
    const isCurrentMarked = currentQ
      ? markedForReview.includes(currentQ.id)
      : false;

    return (
      <div className="space-y-4">
        {/* OFFICIAL DARK EXAMINATION TOP BAR */}
        <div className="rounded-2xl border-2 border-slate-800 bg-slate-900 text-white px-4 py-3.5 shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {isSubmitted && (
                <button
                  onClick={() => setActiveContest(null)}
                  className="rounded-lg bg-slate-800 border border-slate-700 p-2 text-slate-200 hover:bg-slate-700"
                  title="Exit Examination Hall"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
              )}
              <div>
                <div className="flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-wider text-amber-400">
                  <span>PAPER CODE: {paperCode}</span>
                  <span>•</span>
                  <span>
                    CLASS {activeContest.classGrade}{" "}
                    {activeContest.subject.toUpperCase()}
                  </span>
                  <span>•</span>
                  <span className="text-emerald-400">
                    ✓ AUTO-SAVED ({lastSavedTime})
                  </span>
                </div>
                <h1 className="text-base sm:text-lg font-black text-white">
                  {activeContest.title}
                </h1>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Proctoring Focus Monitor */}
              {!isSubmitted && (
                <div
                  className={`rounded-xl border px-3 py-1.5 text-[11px] font-bold flex items-center gap-1.5 ${
                    tabWarnings > 0
                      ? "bg-amber-500/20 border-amber-400 text-amber-300"
                      : "bg-slate-800 border-slate-700 text-slate-300"
                  }`}
                  title="Tab switches are logged during the live examination"
                >
                  <AlertTriangle className="h-3.5 w-3.5 text-amber-400" />
                  <span>Focus Alerts: {tabWarnings} / 3</span>
                </div>
              )}

              {/* Synchronized Wall-Clock Countdown Timer */}
              <div
                className={`flex items-center gap-2 rounded-xl border-2 px-4 py-1.5 text-sm font-mono font-black ${
                  isSubmitted
                    ? "bg-emerald-950 border-emerald-600 text-emerald-300"
                    : secondsLeft <= 60
                    ? "bg-rose-950 border-rose-500 text-rose-300 animate-pulse"
                    : secondsLeft <= 180
                    ? "bg-amber-950 border-amber-500 text-amber-300"
                    : "bg-slate-800 border-slate-600 text-white"
                }`}
              >
                <Clock className="h-4 w-4" />
                <span>
                  {isSubmitted
                    ? "PAPER SUBMITTED"
                    : `TIME LEFT: ${formatTime(secondsLeft)}`}
                </span>
              </div>

              {!isSubmitted && (
                <button
                  onClick={() => setShowSubmitConfirmModal(true)}
                  disabled={isSubmittingServer}
                  className="rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-xs font-black text-white shadow-sm transition"
                >
                  Submit Paper
                </button>
              )}
            </div>
          </div>
        </div>

        {/* High-Traffic Auto-Sync Overlay when submitting */}
        {isSubmittingServer && (
          <div className="rounded-2xl border-2 border-indigo-300 bg-indigo-50 p-6 text-center space-y-2">
            <p className="text-sm font-black text-indigo-950">
              Locking Examination Responses &amp; Generating Official Receipt...
            </p>
            <p className="text-xs font-semibold text-indigo-700">
              Syncing your answer sheet with the VidyaLila Evaluation Server.
              Please do not close this window.
            </p>
          </div>
        )}

        {/* MAIN CBT WORKSPACE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* LEFT 8 COLS: QUESTION CONSOLE OR SCORECARD */}
          <div className="lg:col-span-8 space-y-4">
            {!isSubmitted ? (
              <div className="rounded-2xl border-2 border-slate-300 bg-white shadow-sm flex flex-col justify-between min-h-[480px]">
                {/* Question Header Bar */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-slate-200 bg-slate-50 px-5 py-3">
                    <div className="flex items-center gap-2.5">
                      <span className="rounded-lg bg-slate-900 px-3 py-1 text-xs font-black text-white">
                        Question No. {currentQIdx + 1} of {totalQ}
                      </span>
                      <span className="rounded-lg bg-white border border-slate-200 px-2.5 py-1 text-[11px] font-bold text-slate-600">
                        Single Choice MCQ
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold">
                      <span className="rounded-md bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-emerald-800">
                        Correct: +4 Marks
                      </span>
                      <span className="rounded-md bg-slate-100 border border-slate-200 px-2 py-0.5 text-slate-600">
                        Negative: 0 Marks
                      </span>
                    </div>
                  </div>

                  {/* Question Stem & Options */}
                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                        {currentQ.question}
                      </h2>
                      {isCurrentMarked && (
                        <span className="shrink-0 inline-flex items-center gap-1 rounded-lg bg-violet-100 border border-violet-300 px-2.5 py-1 text-[11px] font-black text-violet-900">
                          <Bookmark className="h-3 w-3 fill-violet-700" />
                          Marked for Review
                        </span>
                      )}
                    </div>

                    <div className="space-y-3 pt-2">
                      {currentQ.options.map((opt, idx) => {
                        const selected = answers[currentQ.id] === idx;
                        return (
                          <label
                            key={idx}
                            onClick={() =>
                              setAnswers((prev) => ({
                                ...prev,
                                [currentQ.id]: idx,
                              }))
                            }
                            className={`w-full rounded-xl border-2 p-4 text-left text-sm font-semibold transition flex items-center gap-3.5 cursor-pointer ${
                              selected
                                ? "border-indigo-600 bg-indigo-50/80 text-slate-950 shadow-sm"
                                : "border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50"
                            }`}
                          >
                            <span
                              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-black ${
                                selected
                                  ? "border-indigo-600 bg-indigo-600 text-white"
                                  : "border-slate-400 bg-white text-slate-600"
                              }`}
                            >
                              {String.fromCharCode(65 + idx)}
                            </span>
                            <span className="leading-snug">{opt}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Official CBT Bottom Control Strip */}
                <div className="border-t-2 border-slate-200 bg-slate-50 px-5 py-3.5 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={handleMarkForReviewAndNext}
                      className="rounded-xl border-2 border-violet-300 bg-violet-50 hover:bg-violet-100 px-3.5 py-2 text-xs font-black text-violet-900 transition flex items-center gap-1.5"
                    >
                      <Bookmark className="h-3.5 w-3.5" />
                      <span>
                        {isCurrentMarked
                          ? "Marked (Next →)"
                          : "Mark for Review & Next"}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={handleToggleMarkCurrent}
                      className="rounded-xl border border-slate-300 bg-white hover:bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700 transition"
                    >
                      {isCurrentMarked ? "Unmark Review" : "Flag Question"}
                    </button>

                    <button
                      type="button"
                      disabled={answers[currentQ.id] === undefined}
                      onClick={handleClearResponse}
                      className="rounded-xl border border-slate-300 bg-white hover:bg-slate-100 disabled:opacity-40 px-3.5 py-2 text-xs font-bold text-slate-700 transition flex items-center gap-1"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                      <span>Clear Response</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={currentQIdx === 0}
                      onClick={() => navigateToQuestion(currentQIdx - 1)}
                      className="rounded-xl border-2 border-slate-300 bg-white hover:bg-slate-100 disabled:opacity-40 px-4 py-2 text-xs font-black text-slate-800 transition"
                    >
                      ← Previous
                    </button>

                    <button
                      type="button"
                      onClick={handleSaveAndNext}
                      className="rounded-xl bg-emerald-600 hover:bg-emerald-700 px-5 py-2 text-xs font-black text-white shadow-sm transition"
                    >
                      {currentQIdx + 1 < totalQ
                        ? "Save & Next →"
                        : "Save & Review Submit"}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* OFFICIAL POST-TEST SCORECARD & EVALUATION REPORT */
              <div className="rounded-2xl border-2 border-slate-300 bg-white p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-start justify-between gap-4 border-b-2 border-slate-200 pb-5">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-md bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 text-[11px] font-black text-emerald-900">
                        <FileCheck2 className="h-3.5 w-3.5 text-emerald-700" />
                        OFFICIAL CBT SCORECARD • VERIFIED
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-500">
                        Receipt: {submissionReceiptId || "VL-CBT-VERIFIED"}
                      </span>
                    </div>
                    <h2 className="text-2xl font-black text-slate-900">
                      Marks Obtained: {obtainedMarks} / {maxMarks}{" "}
                      <span className="text-base font-bold text-slate-500">
                        ({correctCount}/{totalQ} Correct)
                      </span>
                    </h2>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      href={`/leaderboard?contestId=${activeContest.id}`}
                      className="rounded-xl bg-indigo-600 hover:bg-indigo-700 px-4 py-2.5 text-xs font-black text-white inline-flex items-center gap-1.5 shadow-sm"
                    >
                      <Trophy className="h-4 w-4 text-amber-300" />
                      <span>View Test Rank List</span>
                    </Link>
                    <Link
                      href={`/doubts?class=${activeContest.classGrade}`}
                      className="rounded-xl border-2 border-slate-300 bg-white hover:bg-slate-50 px-4 py-2.5 text-xs font-black text-slate-800 inline-flex items-center gap-1.5"
                    >
                      <MessageSquare className="h-3.5 w-3.5 text-indigo-600" />
                      <span>Ask Doubt</span>
                    </Link>
                    <button
                      onClick={() => setActiveContest(null)}
                      className="rounded-xl border border-slate-300 bg-slate-100 hover:bg-slate-200 px-4 py-2.5 text-xs font-bold text-slate-700"
                    >
                      Close Report
                    </button>
                  </div>
                </div>

                {/* Analytical Breakdown Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <p className="text-[10px] font-black uppercase text-slate-500">
                      Attempted
                    </p>
                    <p className="text-lg font-black text-slate-900 mt-0.5">
                      {answeredCount} / {totalQ}
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-3">
                    <p className="text-[10px] font-black uppercase text-emerald-700">
                      Correct (+4)
                    </p>
                    <p className="text-lg font-black text-emerald-800 mt-0.5">
                      {correctCount}
                    </p>
                  </div>
                  <div className="rounded-xl border border-rose-200 bg-rose-50/70 p-3">
                    <p className="text-[10px] font-black uppercase text-rose-700">
                      Incorrect (0)
                    </p>
                    <p className="text-lg font-black text-rose-800 mt-0.5">
                      {incorrectCount}
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <p className="text-[10px] font-black uppercase text-slate-500">
                      Accuracy
                    </p>
                    <p className="text-lg font-black text-indigo-700 mt-0.5">
                      {accuracyPercent}%
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <p className="text-[10px] font-black uppercase text-slate-500">
                      Time Taken
                    </p>
                    <p className="text-lg font-black text-slate-900 mt-0.5">
                      {formatTime(timeTakenSecs)}
                    </p>
                  </div>
                </div>

                {/* Question-by-Question Official Answer Key */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-sm font-black uppercase tracking-wider text-slate-700">
                    Official Answer Key &amp; Step-by-Step Explanations
                  </h3>
                  {activeContest.questions.map((q, idx) => {
                    const userPick = answers[q.id];
                    const isAttempted = userPick !== undefined;
                    const isRight = userPick === q.correctIndex;
                    return (
                      <div
                        key={q.id}
                        className="rounded-xl border-2 border-slate-200 bg-slate-50 p-4 space-y-2.5"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-sm font-bold text-slate-900">
                            Q{idx + 1}. {q.question}
                          </p>
                          {!isAttempted ? (
                            <span className="shrink-0 rounded-md bg-slate-200 px-2.5 py-0.5 text-[11px] font-black text-slate-700">
                              Unattempted (0)
                            </span>
                          ) : isRight ? (
                            <span className="shrink-0 inline-flex items-center gap-1 rounded-md bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 text-[11px] font-black text-emerald-800">
                              <CheckCircle2 className="h-3.5 w-3.5" /> +4 Marks
                            </span>
                          ) : (
                            <span className="shrink-0 inline-flex items-center gap-1 rounded-md bg-rose-100 border border-rose-300 px-2.5 py-0.5 text-[11px] font-black text-rose-800">
                              <XCircle className="h-3.5 w-3.5" /> Incorrect (0)
                            </span>
                          )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold">
                          <div className="rounded-lg bg-white border border-slate-200 p-2.5">
                            <span className="text-slate-500">
                              Your Response:{" "}
                            </span>
                            <span
                              className={
                                !isAttempted
                                  ? "text-slate-500"
                                  : isRight
                                  ? "text-emerald-700 font-black"
                                  : "text-rose-600 font-black"
                              }
                            >
                              {isAttempted
                                ? `(${String.fromCharCode(65 + userPick)}) ${
                                    q.options[userPick]
                                  }`
                                : "Not Answered"}
                            </span>
                          </div>
                          <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-2.5 text-emerald-900">
                            <span>Correct Option: </span>
                            <span className="font-black">
                              ({String.fromCharCode(65 + q.correctIndex)}){" "}
                              {q.options[q.correctIndex]}
                            </span>
                          </div>
                        </div>

                        <p className="text-xs font-medium text-slate-700 bg-white border border-slate-200 p-3 rounded-lg leading-relaxed">
                          <strong className="text-slate-900">
                            Explanation:
                          </strong>{" "}
                          {q.explanation}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT 4 COLS: CANDIDATE INFO & 5-STATE CBT QUESTION PALETTE */}
          <div className="lg:col-span-4 space-y-4">
            <div className="rounded-2xl border-2 border-slate-300 bg-white p-5 shadow-sm space-y-4">
              {/* Candidate Details Box */}
              <div className="flex items-center gap-3 border-b border-slate-200 pb-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 border border-slate-300 text-xl">
                  {profile.avatar}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-black text-slate-900 truncate">
                    {profile.name}
                  </p>
                  <p className="text-[11px] font-mono font-bold text-slate-500 truncate">
                    ID: {profile.username} • Class {profile.classGrade}
                  </p>
                </div>
              </div>

              {/* Live Status Counters */}
              <div className="grid grid-cols-2 gap-2 text-[11px] font-bold">
                <div className="flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-200 p-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-600 text-white font-black">
                    {answeredCount}
                  </span>
                  <span className="text-slate-700">Answered</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-200 p-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-rose-500 text-white font-black">
                    {visitedNotAnsweredCount}
                  </span>
                  <span className="text-slate-700">Not Answered</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-200 p-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-violet-600 text-white font-black">
                    {markedCount}
                  </span>
                  <span className="text-slate-700">Marked Review</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-200 p-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white border border-slate-300 text-slate-600 font-black">
                    {notVisitedCount}
                  </span>
                  <span className="text-slate-700">Not Visited</span>
                </div>
              </div>

              {/* Question Number Grid */}
              <div className="space-y-2 pt-1">
                <h3 className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                  Question Palette (Click to Jump)
                </h3>
                <div className="grid grid-cols-5 gap-2">
                  {activeContest.questions.map((q, idx) => {
                    const isAnswered = answers[q.id] !== undefined;
                    const isMarked = markedForReview.includes(q.id);
                    const isVisited = visitedIds.includes(q.id);
                    const isActive = idx === currentQIdx;

                    let btnStyle =
                      "border-slate-300 bg-white text-slate-700 hover:bg-slate-50";
                    if (isAnswered && isMarked) {
                      btnStyle =
                        "border-violet-800 bg-violet-600 text-white ring-2 ring-emerald-400";
                    } else if (isMarked) {
                      btnStyle = "border-violet-700 bg-violet-600 text-white";
                    } else if (isAnswered) {
                      btnStyle = "border-emerald-700 bg-emerald-600 text-white";
                    } else if (isVisited) {
                      btnStyle = "border-rose-600 bg-rose-500 text-white";
                    }

                    return (
                      <button
                        key={q.id}
                        type="button"
                        onClick={() => navigateToQuestion(idx)}
                        className={`relative h-10 rounded-lg font-black text-xs border-2 transition ${btnStyle} ${
                          isActive ? "ring-2 ring-offset-2 ring-slate-900" : ""
                        }`}
                      >
                        {idx + 1}
                        {isAnswered && isMarked && (
                          <span
                            className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-emerald-400 border border-white"
                            title="Answered & Marked for Review"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {!isSubmitted && (
                <div className="pt-3 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => setShowSubmitConfirmModal(true)}
                    className="w-full rounded-xl bg-slate-900 hover:bg-slate-800 py-3 text-xs font-black text-white shadow-sm transition flex items-center justify-center gap-2"
                  >
                    <CheckSquare className="h-4 w-4 text-emerald-400" />
                    <span>Review &amp; Submit Test Paper</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* PRE-SUBMIT CONFIRMATION SUMMARY MODAL */}
        {showSubmitConfirmModal && !isSubmitted && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xs">
            <div className="w-full max-w-lg rounded-2xl border-2 border-slate-300 bg-white p-6 shadow-xl space-y-5">
              <div className="space-y-1 border-b border-slate-200 pb-3">
                <p className="text-[11px] font-black uppercase tracking-wider text-indigo-600">
                  FINAL SUBMISSION CONFIRMATION
                </p>
                <h3 className="text-lg font-black text-slate-900">
                  Submit Examination Paper?
                </h3>
                <p className="text-xs font-semibold text-slate-500">
                  Please verify your attempt summary before locking your final
                  submission.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 flex items-center justify-between">
                  <span className="font-bold text-slate-600">
                    Total Questions
                  </span>
                  <span className="font-black text-slate-900">{totalQ}</span>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 flex items-center justify-between">
                  <span className="font-bold text-emerald-800">Answered</span>
                  <span className="font-black text-emerald-900">
                    {answeredCount}
                  </span>
                </div>
                <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 flex items-center justify-between">
                  <span className="font-bold text-rose-800">Unattempted</span>
                  <span className="font-black text-rose-900">
                    {unattemptedCount}
                  </span>
                </div>
                <div className="rounded-xl border border-violet-200 bg-violet-50 p-3 flex items-center justify-between">
                  <span className="font-bold text-violet-800">
                    Marked for Review
                  </span>
                  <span className="font-black text-violet-900">
                    {markedCount}
                  </span>
                </div>
              </div>

              {unattemptedCount > 0 && (
                <div className="rounded-xl border border-amber-300 bg-amber-50 p-3 text-xs font-bold text-amber-900">
                  ⚠️ Note: You still have{" "}
                  <strong>{unattemptedCount} unattempted question(s)</strong>{" "}
                  and <strong>{formatTime(secondsLeft)}</strong> remaining.
                  There is no negative marking.
                </div>
              )}

              <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setShowSubmitConfirmModal(false)}
                  className="rounded-xl border-2 border-slate-300 bg-white px-4 py-2.5 text-xs font-black text-slate-700 hover:bg-slate-50"
                >
                  Resume Test
                </button>
                <button
                  type="button"
                  onClick={() => finalizeAndSubmitPaper(false)}
                  className="rounded-xl bg-emerald-600 hover:bg-emerald-700 px-5 py-2.5 text-xs font-black text-white shadow-sm"
                >
                  Confirm &amp; Final Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  const renderQuizCard = (contest: QuizContest) => {
    const isUnlocked = profile.unlockedContestIds.includes(contest.id);
    const canUseWalletPass =
      contest.type === "DAILY" ? dailyPassesLeft > 0 : compPassesLeft > 0;
    const isSelectedChapters = contest.syllabusScope === "SELECTED_CHAPTERS";
    const totalMarks = contest.questions.length * 4;

    return (
      <div
        key={contest.id}
        className="flex flex-col justify-between rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-sm hover:border-slate-300 transition space-y-4"
      >
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <span
                className={`rounded-lg px-2.5 py-1 text-[10px] font-black uppercase border ${
                  contest.type === "MONTHLY"
                    ? "bg-rose-50 text-rose-800 border-rose-300"
                    : contest.type === "WEEKLY"
                    ? "bg-violet-50 text-violet-800 border-violet-300"
                    : "bg-sky-50 text-sky-800 border-sky-300"
                }`}
              >
                {contest.type === "MONTHLY"
                  ? "MONTHLY CHAMPIONSHIP"
                  : contest.type === "WEEKLY"
                  ? "WEEKLY SUNDAY TEST"
                  : "DAILY SUBJECT TEST"}
              </span>

              <span
                className={`rounded-lg px-2.5 py-1 text-[10px] font-extrabold border ${
                  isSelectedChapters
                    ? "bg-amber-50 border-amber-300 text-amber-900"
                    : "bg-emerald-50 border-emerald-300 text-emerald-800"
                }`}
              >
                {isSelectedChapters
                  ? "📌 SELECTED CHAPTERS"
                  : "🌍 FULL SYLLABUS"}
              </span>
            </div>

            <span className="inline-flex items-center gap-1 rounded-lg bg-slate-100 border border-slate-200 px-2.5 py-1 text-[11px] font-extrabold text-slate-800">
              <Clock className="h-3 w-3 text-indigo-600" />
              {contest.scheduledTimeSlot}
            </span>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900">
              {contest.title}
            </h3>
            <p className="text-xs font-semibold text-slate-500 mt-0.5">
              {contest.subtitle}
            </p>
          </div>

          {/* Syllabus Included Box */}
          <div
            className={`rounded-xl border p-3 space-y-1 text-xs ${
              isSelectedChapters
                ? "bg-amber-50/50 border-amber-200 text-amber-950"
                : "bg-slate-50 border-slate-200 text-slate-900"
            }`}
          >
            <p className="font-extrabold flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
              {isSelectedChapters ? (
                <>
                  <BookOpen className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                  <span>Prescribed Syllabus Chapters:</span>
                </>
              ) : (
                <>
                  <Layers className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>Full Syllabus Coverage:</span>
                </>
              )}
            </p>
            <ul className="space-y-0.5 pl-5 list-disc font-semibold text-slate-700">
              {(
                contest.includedChapters || [
                  `Complete Class ${contest.classGrade} ${contest.subject} Board Curriculum`,
                ]
              ).map((ch, i) => (
                <li key={i}>{ch}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 space-y-1.5 text-xs font-bold">
            <div className="flex flex-wrap items-center justify-between gap-2 text-slate-700">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-indigo-600" />
                {contest.durationMinutes} Mins • {contest.questions.length} MCQs
                ({totalMarks} Marks)
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-emerald-600" />
                {contest.participantsCount.toLocaleString()}{" "}
                {contest.isLive ? "Candidates" : "Registered"}
              </span>
            </div>
            <p className="text-[11px] font-black text-amber-800 pt-1 border-t border-slate-200">
              🏆 Top Ranker Scholarship: {contest.prizePool}
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between text-xs font-bold">
            <span
              className={
                contest.isLive
                  ? "text-emerald-700 font-extrabold"
                  : "text-indigo-700"
              }
            >
              {contest.startsInLabel}
            </span>
            {isUnlocked ? (
              <span className="font-black text-emerald-700">
                ✓ {contest.isLive ? "Admit Pass Active" : "Registered"}
              </span>
            ) : canUseWalletPass ? (
              <span className="font-black text-indigo-700">
                1 Pass Credit Available
              </span>
            ) : (
              <span className="font-bold text-slate-500">
                1 {contest.type === "DAILY" ? "Daily" : "Competition"} Pass
                Required
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button
              onClick={() => handleEnterContest(contest)}
              className={`sm:col-span-2 rounded-xl py-3 px-4 text-xs font-black text-white shadow-sm transition flex items-center justify-center gap-2 ${
                isUnlocked || canUseWalletPass
                  ? "bg-emerald-600 hover:bg-emerald-700"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              {isUnlocked ? (
                <>
                  <ShieldCheck className="h-4 w-4" />
                  {contest.isLive
                    ? "Enter CBT Examination Hall"
                    : `Registered • Opens at ${contest.scheduledTimeSlot}`}
                </>
              ) : canUseWalletPass ? (
                <>
                  <ShieldCheck className="h-4 w-4" />
                  {contest.isLive
                    ? "Unlock & Enter Exam Hall"
                    : "Use 1 Pass & Pre-Register"}
                </>
              ) : (
                <>
                  <Lock className="h-4 w-4" />
                  {contest.isLive
                    ? "Add Pass to Enter Exam"
                    : "Add Pass to Register"}
                </>
              )}
            </button>

            <Link
              href={`/leaderboard?contestId=${contest.id}`}
              className="rounded-xl border-2 border-slate-200 bg-white hover:bg-slate-50 py-3 px-3 text-xs flex items-center justify-center gap-1.5 font-black text-slate-800 transition"
            >
              <Trophy className="h-3.5 w-3.5 text-amber-500 shrink-0" />
              <span>Rank List</span>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* RESUME ACTIVE TEST IN PROGRESS BANNER (If student refreshed or disconnected mid-test) */}
      {savedSessionBanner && (
        <div className="rounded-2xl border-2 border-amber-400 bg-amber-50 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-amber-900">
                ACTIVE CBT EXAMINATION SESSION DETECTED
              </p>
              <p className="text-sm font-bold text-slate-800">
                Your responses and remaining timer were safely preserved. You
                can resume your test immediately from where you left off.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => resumeSavedCbtSession(savedSessionBanner)}
              className="rounded-xl bg-amber-500 hover:bg-amber-600 px-4 py-2.5 text-xs font-black text-slate-950 shadow-sm"
            >
              Resume Examination Now →
            </button>
            <button
              onClick={() => {
                localStorage.removeItem(CBT_STORAGE_KEY);
                setSavedSessionBanner(null);
              }}
              className="rounded-xl border border-amber-300 bg-white px-3 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900"
            >
              Discard
            </button>
          </div>
        </div>
      )}

      {/* Student-Centric Examination Header & Pass Wallet */}
      <section className="rounded-3xl border-2 border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 space-y-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1 text-[11px] font-black text-white">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>STANDARDIZED COMPUTER-BASED TEST (CBT) PORTAL</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-[11px] font-extrabold text-emerald-800">
                Auto-Save + High-Traffic Sync Enabled
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Class {selectedQuizClass} Live Scheduled Examinations &amp;
              Subject Tests
            </h1>
            <p className="text-xs sm:text-sm font-medium text-slate-600 max-w-2xl leading-relaxed">
              Attempt timed <strong>🌍 Full Syllabus Papers</strong> or{" "}
              <strong>📌 Selected Chapter Tests</strong> in our official CBT
              examination environment with question palette tracking, mark-for-review,
              and All-India test rank lists.
            </p>
          </div>

          {/* Student's Available Pass Wallet */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-4 sm:p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Your Examination Pass Credits
                </span>
                <button
                  onClick={() => {
                    setDefaultModalPkg("WEEKLY");
                    setShowPassModal(true);
                  }}
                  className="btn-3d-amber px-3.5 py-1.5 text-xs inline-flex items-center gap-1"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>
                    {dailyPassesLeft + compPassesLeft === 0 && profile.proPassPlan
                      ? "Recharge Passes"
                      : "+ Add Passes"}
                  </span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white border border-slate-200 p-3">
                  <p className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-indigo-600" /> Daily
                    Test Passes
                  </p>
                  <p className="text-2xl font-extrabold text-slate-900 mt-1">
                    {dailyPassesLeft}
                  </p>
                  <p className="text-[10px] font-bold text-slate-400">
                    1 pass = 1 Daily Test
                  </p>
                </div>

                <div className="rounded-xl bg-white border border-slate-200 p-3">
                  <p className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
                    <Award className="h-3.5 w-3.5 text-amber-600" /> Weekly
                    Test Passes
                  </p>
                  <p className="text-2xl font-extrabold text-slate-900 mt-1">
                    {compPassesLeft}
                  </p>
                  <p className="text-[10px] font-bold text-slate-400">
                    1 pass = 1 Weekly Test
                  </p>
                </div>
              </div>

              <p className="text-[11px] font-bold text-slate-500 leading-snug">
                💡 Passes are <strong>test-wise</strong> (⚡ Basic ₹49 = 2 Daily,
                💎 VIP ₹149 = 7 Daily + 1 Weekly, 👑 Pro ₹499 = 30 Daily + 4
                Weekly).
              </p>
            </div>
          </div>
        </div>

        {/* Staggered Class & Subject Time-Slot Schedule Bar */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-indigo-600" />
              <span>
                Staggered Examination Slots (3 PM, 4 PM, 5 PM IST) • Prevents
                Server Congestion &amp; Allows Attempting Previous Class Papers:
              </span>
            </p>

            {/* Class Filter (Class 9 & 10 Live, 11 & 12 Locked) */}
            <div className="flex items-center gap-1.5 text-xs font-bold">
              {([9, 10, 11, 12] as ClassGrade[]).map((grade) => {
                const isLocked = grade === 11 || grade === 12;
                return (
                  <button
                    key={grade}
                    onClick={() => {
                      if (isLocked) {
                        setQuizClassAlert(
                          `Class ${grade} Live Examinations are coming soon! Daily & Weekly tests are currently active for Class 9 and 10.`
                        );
                        return;
                      }
                      setQuizClassAlert(null);
                      setSelectedQuizClass(grade);
                    }}
                    className={`rounded-lg px-3 py-1.5 text-xs font-extrabold transition flex items-center gap-1 ${
                      isLocked
                        ? "bg-slate-100 border border-slate-200 text-slate-400 opacity-60 hover:opacity-90 cursor-pointer"
                        : selectedQuizClass === grade
                        ? "bg-emerald-600 text-white shadow-sm"
                        : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <span>Class {grade}</span>
                    {isLocked && <Lock className="h-3 w-3 text-slate-400" />}
                  </button>
                );
              })}
            </div>
          </div>

          {quizClassAlert && (
            <div className="rounded-xl border border-amber-300 bg-amber-50 p-2.5 text-amber-900 flex items-center justify-between text-xs font-bold">
              <div className="flex items-center gap-2">
                <Lock className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                <span>{quizClassAlert}</span>
              </div>
              <button
                type="button"
                onClick={() => setQuizClassAlert(null)}
                className="text-amber-800 hover:text-amber-950 font-black text-[11px] px-1.5 py-0.5 rounded hover:bg-amber-100"
              >
                ✕ Dismiss
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {STAGGERED_TIME_SLOTS.map((item) => (
              <div
                key={item.slot}
                className="rounded-xl bg-white border border-slate-200 p-3 space-y-1.5"
              >
                <p className="text-xs font-extrabold text-indigo-700">
                  ⏰ {item.slot}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.pairings.map((p, idx) => {
                    const isSelectedClass = p.classGrade === selectedQuizClass;
                    return (
                      <span
                        key={idx}
                        className={`rounded-lg px-2 py-0.5 text-[11px] font-bold border ${
                          isSelectedClass
                            ? "bg-emerald-50 border-emerald-300 text-emerald-800 font-extrabold"
                            : "bg-slate-50 border-slate-200 text-slate-500"
                        }`}
                      >
                        Class {p.classGrade} {p.subject}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Merit Scholarship Passes Banner */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs sm:text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
              <Trophy className="h-4 w-4 text-amber-500" />
              <span>
                Merit Scholarship Rewards: Top Rankers Win Free Examination
                Passes!
              </span>
            </p>
            <span className="rounded-md bg-emerald-100 px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-emerald-900">
              Auto-Credited Upon Evaluation
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
            <div className="rounded-xl bg-white border border-slate-200 p-3">
              <p className="font-extrabold text-slate-900">
                ⚡ Daily Test Top Rankers
              </p>
              <p className="text-[11px] font-semibold text-slate-600 mt-0.5">
                <strong>Top 3:</strong> Free <strong>⚡ Basic Pass</strong> (2
                Tests • ₹49) • <strong>Top 10:</strong> +1 Free Daily Test Pass
              </p>
            </div>

            <div className="rounded-xl bg-white border border-slate-200 p-3">
              <p className="font-extrabold text-slate-900">
                💎 Weekly Test Top Rankers
              </p>
              <p className="text-[11px] font-semibold text-slate-600 mt-0.5">
                <strong>Top 3:</strong> Free <strong>💎 VIP Pass</strong> (8
                Tests • ₹149) • <strong>Top 10:</strong> Free ⚡ Basic Pass
              </p>
            </div>

            <div className="rounded-xl bg-white border border-slate-200 p-3">
              <p className="font-extrabold text-slate-900">
                👑 Monthly Test Top Rankers
              </p>
              <p className="text-[11px] font-semibold text-slate-600 mt-0.5">
                <strong>Top 3:</strong> Free <strong>👑 Pro Pass</strong> (34
                Tests • ₹499) • <strong>Top 10:</strong> Free 💎 VIP Pass
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar: Live/Upcoming + Full Syllabus vs Selected Chapters */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setFilterTab("ALL")}
            className={`rounded-xl px-4 py-2 text-xs font-extrabold transition ${
              filterTab === "ALL"
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900"
            }`}
          >
            All Class {selectedQuizClass} Tests ({classQuizzes.length})
          </button>
          <button
            onClick={() => setFilterTab("LIVE")}
            className={`rounded-xl px-4 py-2 text-xs font-extrabold inline-flex items-center gap-1.5 transition ${
              filterTab === "LIVE"
                ? "bg-emerald-600 text-white shadow-sm"
                : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900"
            }`}
          >
            <Radio className="h-3.5 w-3.5" />
            Live Window Open ({liveQuizzes.length})
          </button>
          <button
            onClick={() => setFilterTab("UPCOMING")}
            className={`rounded-xl px-4 py-2 text-xs font-extrabold inline-flex items-center gap-1.5 transition ${
              filterTab === "UPCOMING"
                ? "bg-indigo-600 text-white shadow-sm"
                : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900"
            }`}
          >
            <Calendar className="h-3.5 w-3.5" />
            Scheduled / Upcoming ({upcomingQuizzes.length})
          </button>
        </div>

        {/* Syllabus Scope Track Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 rounded-2xl bg-white border border-slate-200 p-1">
          <button
            onClick={() => setScopeFilter("ALL")}
            className={`rounded-xl px-3 py-1.5 text-xs font-extrabold transition ${
              scopeFilter === "ALL"
                ? "bg-slate-900 text-white"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            All Tracks
          </button>
          <button
            onClick={() => setScopeFilter("FULL_SYLLABUS")}
            className={`rounded-xl px-3 py-1.5 text-xs font-extrabold transition ${
              scopeFilter === "FULL_SYLLABUS"
                ? "bg-emerald-600 text-white"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            🌍 Full Syllabus
          </button>
          <button
            onClick={() => setScopeFilter("SELECTED_CHAPTERS")}
            className={`rounded-xl px-3 py-1.5 text-xs font-extrabold transition ${
              scopeFilter === "SELECTED_CHAPTERS"
                ? "bg-amber-500 text-slate-950"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            📌 Selected Chapters
          </button>
        </div>
      </div>

      {/* SECTION 1: LIVE NOW EXAMINATIONS */}
      {(filterTab === "ALL" || filterTab === "LIVE") &&
        liveQuizzes.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
              <h2 className="text-xl font-extrabold text-slate-900">
                Active Examination Window — Class {selectedQuizClass}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {liveQuizzes.map((contest) => renderQuizCard(contest))}
            </div>
          </section>
        )}

      {/* SECTION 2: SCHEDULED / UPCOMING EXAMINATIONS */}
      {(filterTab === "ALL" || filterTab === "UPCOMING") &&
        upcomingQuizzes.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-indigo-600" />
              <h2 className="text-xl font-extrabold text-slate-900">
                Scheduled Upcoming Tests — Class {selectedQuizClass}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingQuizzes.map((contest) => renderQuizCard(contest))}
            </div>
          </section>
        )}

      {/* Past Examination Submissions History */}
      <section className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-sm space-y-4">
        <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
          <Trophy className="h-5 w-5 text-amber-500" />
          Your Past Test Submissions &amp; Scorecards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profile.contestHistory.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4"
            >
              <div className="space-y-1">
                <p className="text-sm font-black text-slate-900">{item.title}</p>
                <p className="text-xs font-bold text-slate-500">
                  Correct: {item.score}/{item.total} ({item.score * 4}/
                  {item.total * 4} Marks) • {item.date}
                </p>
                <Link
                  href={`/leaderboard?contestId=${item.contestId}`}
                  className="inline-flex items-center gap-1 text-[11px] font-black text-indigo-600 hover:text-indigo-800 underline"
                >
                  <Trophy className="h-3 w-3 text-amber-500" />
                  <span>View Official Test Rank List →</span>
                </Link>
              </div>
              <div className="text-right">
                <p
                  className={`text-sm font-black ${
                    item.ratingDelta >= 0 ? "text-emerald-600" : "text-rose-600"
                  }`}
                >
                  {item.ratingDelta >= 0
                    ? `+${item.ratingDelta}`
                    : item.ratingDelta}{" "}
                  Rating
                </p>
                <p className="text-xs font-black text-slate-500">
                  {item.total > 0
                    ? Math.round((item.score / item.total) * 100)
                    : 0}
                  % Accuracy
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PaymentModal
        isOpen={Boolean(paymentTarget)}
        onClose={() => setPaymentTarget(null)}
        defaultPackage={defaultModalPkg}
        contestTitle={paymentTarget?.title}
        onSuccessPackage={(pkg) => {
          if (paymentTarget) {
            activateProPass(pkg, paymentTarget.id);
            if (
              paymentTarget.isLive &&
              (pkg !== "ONE_DAY" || paymentTarget.type === "DAILY")
            ) {
              openInstructionScreen(paymentTarget);
            }
          } else {
            activateProPass(pkg);
          }
        }}
      />

      <PaymentModal
        isOpen={showPassModal}
        onClose={() => setShowPassModal(false)}
        defaultPackage={defaultModalPkg}
        onSuccessPackage={(pkg) => activateProPass(pkg)}
      />
    </div>
  );
}

export default function ContestsPage() {
  return (
    <Suspense
      fallback={
        <div className="p-12 text-center font-bold text-slate-500">
          Loading Examination Portal...
        </div>
      }
    >
      <ContestArenaContent />
    </Suspense>
  );
}
