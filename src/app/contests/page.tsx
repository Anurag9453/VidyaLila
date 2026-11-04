"use client";

import React, { useState, useEffect, Suspense } from "react";
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
} from "lucide-react";

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
  const [secondsLeft, setSecondsLeft] = useState(600);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const dailyPassesLeft = profile.dailyPassesRemaining || 0;
  const compPassesLeft = profile.competitionPassesRemaining || 0;

  useEffect(() => {
    setSelectedQuizClass(profile.classGrade);
  }, [profile.classGrade]);

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

  useEffect(() => {
    if (!activeContest || isSubmitted) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [activeContest, isSubmitted]);

  const startQuiz = (contest: QuizContest) => {
    setActiveContest(contest);
    setCurrentQIdx(0);
    setAnswers({});
    setSecondsLeft(contest.durationMinutes * 60);
    setIsSubmitted(false);
  };

  const handleEnterContest = (contest: QuizContest) => {
    const alreadyUnlocked = profile.unlockedContestIds.includes(contest.id);
    if (alreadyUnlocked) {
      if (contest.isLive) {
        startQuiz(contest);
      }
      return;
    }

    // Try consuming an available pass from the student's wallet
    const usedPass = consumePassForContest(contest.id, contest.type);
    if (usedPass) {
      if (contest.isLive) {
        startQuiz(contest);
      }
    } else {
      setDefaultModalPkg(contest.type === "DAILY" ? "ONE_DAY" : "WEEKLY");
      setPaymentTarget(contest);
    }
  };

  const handleFinishQuiz = () => {
    if (!activeContest || isSubmitted) return;
    setIsSubmitted(true);
    let score = 0;
    activeContest.questions.forEach((q) => {
      if (answers[q.id] === q.correctIndex) score += 1;
    });
    submitContestResult(
      activeContest.id,
      score,
      activeContest.questions.length,
      activeContest.xpReward,
      answers
    );
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  // LIVE CBT QUIZ MODE
  if (activeContest) {
    const currentQ = activeContest.questions[currentQIdx];
    const totalQ = activeContest.questions.length;
    const correctCount = activeContest.questions.filter(
      (q) => answers[q.id] === q.correctIndex
    ).length;

    return (
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border-2 border-amber-400 bg-white p-5 shadow-[0_6px_0_0_#fcd34d]">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveContest(null)}
              className="btn-3d-white p-2"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-700">
                {activeContest.type} RATED QUIZ • CLASS{" "}
                {activeContest.classGrade} • {activeContest.subject.toUpperCase()}
              </span>
              <h1 className="text-lg sm:text-xl font-black text-slate-900">
                {activeContest.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-2xl bg-rose-50 border-2 border-rose-300 border-b-4 px-4 py-2 text-sm font-black text-rose-600">
              <Clock className="h-4 w-4 animate-pulse" />
              <span>{formatTime(secondsLeft)}</span>
            </div>

            {!isSubmitted && (
              <button
                onClick={handleFinishQuiz}
                className="btn-3d-emerald px-5 py-2.5 text-xs"
              >
                Submit Quiz 🚀
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-5">
            {!isSubmitted ? (
              <div className="rounded-3xl border-2 border-slate-200 bg-white p-6 sm:p-8 shadow-[0_8px_0_0_#e2e8f0] space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-black text-slate-500">
                  <span>
                    QUESTION {currentQIdx + 1} OF {totalQ}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-lg bg-amber-50 border border-amber-200 px-2.5 py-1 text-[11px] font-extrabold text-amber-800">
                    <Lock className="h-3 w-3 text-amber-600" />
                    <span>Discussion Locked During Live Quiz</span>
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-relaxed">
                  {currentQ.question}
                </h2>

                <div className="space-y-3">
                  {currentQ.options.map((opt, idx) => {
                    const selected = answers[currentQ.id] === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() =>
                          setAnswers((prev) => ({
                            ...prev,
                            [currentQ.id]: idx,
                          }))
                        }
                        className={`w-full rounded-2xl border-2 border-b-4 p-4 text-left text-sm font-bold transition flex items-center gap-3 ${
                          selected
                            ? "border-indigo-500 bg-indigo-50 text-indigo-950"
                            : "border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100"
                        }`}
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white border border-slate-300 text-xs font-black">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between pt-4 border-t-2 border-slate-100">
                  <button
                    disabled={currentQIdx === 0}
                    onClick={() => setCurrentQIdx((i) => Math.max(0, i - 1))}
                    className="btn-3d-white px-4 py-2.5 text-xs disabled:opacity-40"
                  >
                    ← Previous
                  </button>

                  {currentQIdx + 1 < totalQ ? (
                    <button
                      onClick={() => setCurrentQIdx((i) => i + 1)}
                      className="btn-3d-indigo px-5 py-2.5 text-xs"
                    >
                      Save &amp; Next →
                    </button>
                  ) : (
                    <button
                      onClick={handleFinishQuiz}
                      className="btn-3d-amber px-6 py-2.5 text-xs"
                    >
                      Final Submit 🏆
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="rounded-3xl border-2 border-emerald-400 bg-white p-6 sm:p-8 shadow-[0_8px_0_0_#6ee7b7] space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-slate-100 pb-5">
                  <div>
                    <span className="text-xs font-black uppercase text-emerald-600">
                      Quiz Completed!
                    </span>
                    <h2 className="text-2xl font-black text-slate-900">
                      You Scored {correctCount} / {totalQ} 🎯
                    </h2>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      href={`/doubts?class=${activeContest.classGrade}`}
                      className="btn-3d-indigo px-4 py-2 text-xs inline-flex items-center gap-1.5"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      <span>Discuss Solutions &amp; Ask @VidyaBot</span>
                    </Link>
                    <button
                      onClick={() => setActiveContest(null)}
                      className="btn-3d-white px-4 py-2 text-xs"
                    >
                      Back to Quizzes
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {activeContest.questions.map((q, idx) => {
                    const userPick = answers[q.id];
                    const isRight = userPick === q.correctIndex;
                    return (
                      <div
                        key={q.id}
                        className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-4 space-y-2"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-black text-slate-900">
                            Q{idx + 1}. {q.question}
                          </p>
                          {isRight ? (
                            <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                          ) : (
                            <XCircle className="h-5 w-5 text-rose-500 shrink-0" />
                          )}
                        </div>
                        <p className="text-xs text-emerald-700 font-black">
                          ✓ Correct Answer: {q.options[q.correctIndex]}
                        </p>
                        <p className="text-xs font-semibold text-slate-700 bg-white border border-slate-200 p-2.5 rounded-xl">
                          💡 <strong>Solution:</strong> {q.explanation}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-3xl border-2 border-slate-200 bg-white p-5 shadow-[0_6px_0_0_#e2e8f0] space-y-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-500">
                Question Palette
              </h3>
              <div className="grid grid-cols-5 gap-2">
                {activeContest.questions.map((q, idx) => {
                  const answered = answers[q.id] !== undefined;
                  const active = idx === currentQIdx;
                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentQIdx(idx)}
                      className={`h-11 rounded-xl font-black text-xs border-2 border-b-4 transition ${
                        active
                          ? "border-indigo-700 bg-indigo-600 text-white"
                          : answered
                          ? "border-emerald-400 bg-emerald-100 text-emerald-800"
                          : "border-slate-200 bg-slate-50 text-slate-600"
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const renderQuizCard = (contest: QuizContest) => {
    const isUnlocked = profile.unlockedContestIds.includes(contest.id);
    const canUseWalletPass =
      contest.type === "DAILY" ? dailyPassesLeft > 0 : compPassesLeft > 0;
    const isSelectedChapters = contest.syllabusScope === "SELECTED_CHAPTERS";

    return (
      <div
        key={contest.id}
        className="flex flex-col justify-between rounded-3xl border-2 border-slate-200 bg-white p-6 shadow-[0_6px_0_0_#e2e8f0] hover:-translate-y-0.5 transition space-y-4"
      >
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <span
                className={`rounded-xl px-2.5 py-1 text-[10px] font-black uppercase border ${
                  contest.type === "MONTHLY"
                    ? "bg-rose-100 text-rose-800 border-rose-300"
                    : contest.type === "WEEKLY"
                    ? "bg-violet-100 text-violet-800 border-violet-300"
                    : "bg-sky-100 text-sky-800 border-sky-300"
                }`}
              >
                {contest.type === "MONTHLY"
                  ? "MONTHLY • ONCE A MONTH"
                  : contest.type === "WEEKLY"
                  ? "WEEKLY • ONCE A WEEK"
                  : "DAILY • ONCE A DAY"}
              </span>

              <span
                className={`rounded-xl px-2.5 py-1 text-[10px] font-extrabold border ${
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

          {/* Syllabus Included Box (Clearly tells student if it's Full Syllabus or Selected Chapters) */}
          <div
            className={`rounded-2xl border p-3 space-y-1 text-xs ${
              isSelectedChapters
                ? "bg-amber-50/60 border-amber-200 text-amber-950"
                : "bg-emerald-50/50 border-emerald-200 text-emerald-950"
            }`}
          >
            <p className="font-extrabold flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
              {isSelectedChapters ? (
                <>
                  <BookOpen className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                  <span>Included Chapters in This Quiz:</span>
                </>
              ) : (
                <>
                  <Layers className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>Full Syllabus Coverage:</span>
                </>
              )}
            </p>
            <ul className="space-y-0.5 pl-5 list-disc font-bold text-slate-700">
              {(
                contest.includedChapters || [
                  `All Chapters (Complete Class ${contest.classGrade} ${contest.subject} Syllabus)`,
                ]
              ).map((ch, i) => (
                <li key={i}>{ch}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-slate-50 border-2 border-slate-200 p-3 space-y-1.5 text-xs font-bold">
            <div className="flex items-center justify-between text-slate-700">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-indigo-600" />
                {contest.durationMinutes} Mins ({contest.frequencyLabel})
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-emerald-600" />
                {contest.participantsCount.toLocaleString()}{" "}
                {contest.isLive ? "Joined" : "Registered"}
              </span>
            </div>
            <p className="text-[11px] font-black text-amber-700 pt-1 border-t border-slate-200">
              🏆 {contest.prizePool}
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between text-xs font-bold">
            <span
              className={
                contest.isLive
                  ? "text-emerald-600 font-extrabold"
                  : "text-indigo-600"
              }
            >
              {contest.startsInLabel}
            </span>
            {isUnlocked ? (
              <span className="font-black text-emerald-600">
                ✓ {contest.isLive ? "Unlocked" : "Registered"}
              </span>
            ) : canUseWalletPass ? (
              <span className="font-black text-indigo-600">
                1 Pass Ready in Wallet
              </span>
            ) : (
              <span className="font-bold text-slate-500">
                1 {contest.type === "DAILY" ? "Daily" : "Competition"} Pass
                Required
              </span>
            )}
          </div>

          <button
            onClick={() => handleEnterContest(contest)}
            className={`w-full py-3.5 text-xs flex items-center justify-center gap-2 ${
              isUnlocked || canUseWalletPass
                ? "btn-3d-emerald"
                : "btn-3d-indigo"
            }`}
          >
            {isUnlocked ? (
              <>
                <Sparkles className="h-4 w-4" />
                {contest.isLive
                  ? "Start Quiz Now"
                  : `Registered • Opens at ${contest.scheduledTimeSlot}`}
              </>
            ) : canUseWalletPass ? (
              <>
                <Sparkles className="h-4 w-4" />
                {contest.isLive
                  ? "Use 1 Pass & Start Quiz"
                  : "Use 1 Pass & Pre-Register"}
              </>
            ) : (
              <>
                <Lock className="h-4 w-4" />
                {contest.isLive
                  ? "Add Pass to Start Quiz"
                  : "Add Pass to Register"}
              </>
            )}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Student-Centric Arena Header & Pass Wallet */}
      <section className="rounded-3xl border-2 border-slate-200 bg-white p-6 sm:p-8 shadow-[0_6px_0_0_#e2e8f0] space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 space-y-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-50 border border-indigo-200 px-3 py-1 text-xs font-extrabold text-indigo-800">
                <Swords className="h-3.5 w-3.5" />
                <span>FULL SYLLABUS + SELECTED CHAPTERS QUIZZES</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Class {selectedQuizClass} Live &amp; Upcoming Subject Quizzes 🏆
            </h1>
            <p className="text-xs sm:text-sm font-medium text-slate-600 max-w-2xl leading-relaxed">
              Choose between <strong>🌍 Full Syllabus Quizzes</strong> (complete subject syllabus—ideal if you&apos;ve finished the syllabus or want to test a previous class&apos;s full paper) and{" "}
              <strong>📌 Selected Chapters Quizzes</strong> (where only the specific announced chapters are tested).
            </p>
          </div>

          {/* Student's Available Pass Wallet */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-4 sm:p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Your Quiz Pass Credits
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
                    Quiz Passes
                  </p>
                  <p className="text-2xl font-extrabold text-slate-900 mt-1">
                    {dailyPassesLeft}
                  </p>
                  <p className="text-[10px] font-bold text-slate-400">
                    1 pass = 1 Daily Quiz
                  </p>
                </div>

                <div className="rounded-xl bg-white border border-slate-200 p-3">
                  <p className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
                    <Award className="h-3.5 w-3.5 text-amber-600" /> Weekly
                    Quiz Passes
                  </p>
                  <p className="text-2xl font-extrabold text-slate-900 mt-1">
                    {compPassesLeft}
                  </p>
                  <p className="text-[10px] font-bold text-slate-400">
                    1 pass = 1 Weekly Quiz
                  </p>
                </div>
              </div>

              <p className="text-[11px] font-bold text-slate-500 leading-snug">
                💡 Passes are <strong>quiz-wise</strong> (⚡ Basic ₹49 = 2 Daily, 💎 VIP ₹149 = 7 Daily + 1 Weekly, 👑 Pro ₹499 = 30 Daily + 4 Weekly). Once all credits are used, recharge to add more.
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
                Staggered Time Slots (3 PM, 4 PM, 5 PM) • Switch Class Anytime to Attempt Previous or Current Class Papers:
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
                          `Class ${grade} Live Quizzes are coming soon! Daily & Weekly quizzes are currently active for Class 9 and 10.`
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
            <div className="rounded-xl border border-amber-300 bg-amber-50 p-2.5 text-amber-900 flex items-center justify-between text-xs font-bold animate-in fade-in">
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

        {/* Top-Ranker Goodies Banner (Free Pass Rewards for Winners!) */}
        <div className="rounded-2xl bg-gradient-to-r from-amber-50 via-orange-50 to-emerald-50 border-2 border-amber-200 p-4 space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs sm:text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
              <span>🎁</span>
              <span>
                Top-Ranker Goodies: Win Free Quiz Passes Every Day, Week &amp; Month!
              </span>
            </p>
            <span className="rounded-full bg-amber-200/80 px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-amber-950">
              Instant Wallet Credit on Top Scores
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
            <div className="rounded-xl bg-white/90 border border-amber-200/80 p-3">
              <p className="font-extrabold text-amber-900">
                ⚡ Daily Quiz Winners
              </p>
              <p className="text-[11px] font-bold text-slate-600 mt-0.5">
                <strong>Top 3:</strong> Win Free <strong>⚡ Basic Pass</strong> (2 Quizzes • ₹49) • <strong>Top 10:</strong> Win +1 Free Daily Quiz Pass
              </p>
            </div>

            <div className="rounded-xl bg-white/90 border border-indigo-200/80 p-3">
              <p className="font-extrabold text-indigo-900">
                💎 Weekly Quiz Winners
              </p>
              <p className="text-[11px] font-bold text-slate-600 mt-0.5">
                <strong>Top 3:</strong> Win Free <strong>💎 VIP Pass</strong> (8 Quizzes • ₹149) • <strong>Top 10:</strong> Win Free ⚡ Basic Pass
              </p>
            </div>

            <div className="rounded-xl bg-white/90 border border-emerald-200/80 p-3">
              <p className="font-extrabold text-emerald-900">
                👑 Monthly Quiz Winners
              </p>
              <p className="text-[11px] font-bold text-slate-600 mt-0.5">
                <strong>Top 3:</strong> Win Free <strong>👑 Pro Pass</strong> (34 Quizzes • ₹499) • <strong>Top 10:</strong> Win Free 💎 VIP Pass
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
            All Class {selectedQuizClass} Quizzes ({classQuizzes.length})
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
            Live Now ({liveQuizzes.length})
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
            Upcoming ({upcomingQuizzes.length})
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

      {/* SECTION 1: LIVE NOW QUIZZES & COMPETITIONS */}
      {(filterTab === "ALL" || filterTab === "LIVE") &&
        liveQuizzes.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
              <h2 className="text-xl font-extrabold text-slate-900">
                Live Now — Class {selectedQuizClass} Subject Quizzes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {liveQuizzes.map((contest) => renderQuizCard(contest))}
            </div>
          </section>
        )}

      {/* SECTION 2: UPCOMING QUIZZES & COMPETITIONS */}
      {(filterTab === "ALL" || filterTab === "UPCOMING") &&
        upcomingQuizzes.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-indigo-600" />
              <h2 className="text-xl font-extrabold text-slate-900">
                Upcoming — Class {selectedQuizClass} Subject Quizzes &amp; Competitions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingQuizzes.map((contest) => renderQuizCard(contest))}
            </div>
          </section>
        )}

      {/* Recent Contest Submissions History */}
      <section className="rounded-3xl border-2 border-slate-200 bg-white p-6 shadow-[0_6px_0_0_#e2e8f0] space-y-4">
        <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
          <Trophy className="h-5 w-5 text-amber-500" />
          Your Recent Subject Quiz Performance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profile.contestHistory.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-2xl border-2 border-slate-200 bg-slate-50 p-4"
            >
              <div>
                <p className="text-sm font-black text-slate-900">{item.title}</p>
                <p className="text-xs font-bold text-slate-500">
                  Score: {item.score}/{item.total} • {item.date}
                </p>
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
              startQuiz(paymentTarget);
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
          Loading Quizzes...
        </div>
      }
    >
      <ContestArenaContent />
    </Suspense>
  );
}
