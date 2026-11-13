"use client";

import React, { useState, useEffect } from "react";
import { useApp } from "@/lib/store";
import { BoardType, ClassGrade, LearningModule, QuizContest } from "@/lib/mock-data";
import { isSupabaseConfigured } from "@/lib/supabase";
import {
  PenTool,
  PlusCircle,
  BookOpen,
  Swords,
  Database,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Flag,
  Lock,
  LogOut,
} from "lucide-react";

export default function WriterStudioPage() {
  const {
    profile,
    addCustomModule,
    addCustomContest,
    modules,
    contests,
    contentReports,
    resolveContentReport,
  } = useApp();
  const [activeTab, setActiveTab] = useState<"TRAIL" | "CONTEST" | "REPORTS">(
    "TRAIL"
  );
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [adminKey, setAdminKey] = useState("");
  const [passcodeInput, setPasscodeInput] = useState("");
  const [passcodeError, setPasscodeError] = useState<string | null>(null);
  const [seeding, setSeeding] = useState(false);
  const [seedMessage, setSeedMessage] = useState<string | null>(null);

  useEffect(() => {
    // If signed-in user is an admin in profiles, automatically grant access
    if (profile?.role === "admin") {
      setIsUnlocked(true);
      return;
    }
    try {
      const savedKey = sessionStorage.getItem("vidyalila_admin_key_v1");
      if (savedKey) {
        setAdminKey(savedKey);
        setIsUnlocked(true);
      }
    } catch {
      // ignore
    }
  }, [profile?.role]);

  const handleUnlockStudio = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasscodeError(null);
    const key = passcodeInput.trim();
    if (!key) return;

    try {
      const res = await fetch("/api/admin/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": key,
        },
      });
      const data = await res.json();
      if (data.ok) {
        setIsUnlocked(true);
        setAdminKey(key);
        setPasscodeError(null);
        try {
          sessionStorage.setItem("vidyalila_admin_key_v1", key);
        } catch {
          // ignore
        }
      } else {
        setPasscodeError(data.error || "Invalid Admin Passcode.");
      }
    } catch {
      setPasscodeError("Could not reach authentication server.");
    }
  };

  const handleLockStudio = () => {
    setIsUnlocked(false);
    setPasscodeInput("");
    setAdminKey("");
    try {
      sessionStorage.removeItem("vidyalila_admin_key_v1");
    } catch {
      // ignore
    }
  };

  const handleSeedDatabase = async () => {
    setSeeding(true);
    setSeedMessage(null);
    try {
      const res = await fetch("/api/seed", {
        method: "POST",
        headers: {
          "x-admin-key": adminKey,
        },
      });
      const data = await res.json();
      if (data.ok) {
        setSeedMessage(`✅ ${data.message}`);
      } else {
        setSeedMessage(
          `⚠️ ${data.instructions || data.error || "Run supabase/schema.sql in Supabase SQL Editor first."}`
        );
      }
    } catch {
      setSeedMessage("⚠️ Could not reach /api/seed.");
    } finally {
      setSeeding(false);
    }
  };

  // Trail Module Form State
  const [modTitle, setModTitle] = useState("");
  const [modSubtitle, setModSubtitle] = useState("");
  const [modBoard, setModBoard] = useState<BoardType>("CBSE");
  const [modClass, setModClass] = useState<ClassGrade>(10);
  const [modSubject, setModSubject] = useState<LearningModule["subject"]>("Physics");
  const [badgeName, setBadgeName] = useState("Trigonometry Hero");
  const [badgeEmoji, setBadgeEmoji] = useState("🚀");
  const [unitTitle, setUnitTitle] = useState("Core Concepts & Board Tricks");
  const [unitHeading, setUnitHeading] = useState("Visual Intuition & Formula");
  const [unitBody, setUnitBody] = useState("");
  const [unitBodyHinglish, setUnitBodyHinglish] = useState("");
  const [unitTip, setUnitTip] = useState("💡 Topper Hack: Always check units before substituting!");
  const [unitXp, setUnitXp] = useState(200);
  const [mcqQuestion, setMcqQuestion] = useState("");
  const [optA, setOptA] = useState("");
  const [optB, setOptB] = useState("");
  const [optC, setOptC] = useState("");
  const [optD, setOptD] = useState("");
  const [correctIdx, setCorrectIdx] = useState(0);

  // Paid Contest Form State (Strictly Class & Subject Basis + Staggered Time Slot)
  const [contestType, setContestType] = useState<"DAILY" | "WEEKLY" | "MONTHLY">("DAILY");
  const [contestScope, setContestScope] = useState<"FULL_SYLLABUS" | "SELECTED_CHAPTERS">("FULL_SYLLABUS");
  const [selectedChapterTitles, setSelectedChapterTitles] = useState<string[]>([]);
  const [contestBoard, setContestBoard] = useState<BoardType>("BOTH");
  const [contestClass, setContestClass] = useState<ClassGrade>(10);
  const [contestSubject, setContestSubject] = useState<LearningModule["subject"]>("Physics");
  const [contestTimeSlot, setContestTimeSlot] = useState<string>("4:00 PM IST");
  const [contestFee, setContestFee] = useState(49);
  const [contestPrize, setContestPrize] = useState(
    "All-India Class & Subject Rank • Detailed Solutions"
  );
  const [contestDuration, setContestDuration] = useState(15);
  const [cqText, setCqText] = useState("");
  const [cqOptA, setCqOptA] = useState("");
  const [cqOptB, setCqOptB] = useState("");
  const [cqOptC, setCqOptC] = useState("");
  const [cqOptD, setCqOptD] = useState("");
  const [cqCorrect, setCqCorrect] = useState(0);

  const handlePublishModule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!modTitle.trim()) return;

    const slug = modTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const newMod: LearningModule = {
      id: `mod-custom-${Date.now()}`,
      slug: `${slug}-${Date.now().toString().slice(-3)}`,
      chapterNumber: modules.filter((m) => m.classGrade === modClass && m.subject === modSubject).length + 1,
      title: modTitle,
      subtitle:
        modSubtitle ||
        "Interactive Board Exam Chapter with step-by-step checkpoints and XP rewards.",
      board: modBoard,
      classGrade: modClass,
      subject: modSubject,
      difficulty: "Board Special",
      badgeName: badgeName || "Scholar Star",
      badgeEmoji: badgeEmoji || "🌟",
      accentColor: "from-violet-600 to-fuchsia-600",
      totalXp: unitXp,
      estimatedMinutes: 25,
      units: [
        {
          id: `u-custom-${Date.now()}`,
          title: unitTitle,
          durationMinutes: 15,
          xpReward: unitXp,
          summary: modSubtitle || "Master this concept and claim your Scholar XP.",
          contentSections: [
            {
              heading: unitHeading,
              headingHinglish: unitHeading,
              body:
                unitBody ||
                "Content writers can paste rich lesson notes, derivations, and diagrams here.",
              bodyHinglish:
                unitBodyHinglish ||
                unitBody ||
                "Yahan Hinglish me dost ki tarah aasan explanation likhein.",
              formulaOrTip: unitTip,
              formulaOrTipHinglish: unitTip,
            },
          ],
          checkpointQuestions: [
            {
              id: `q-custom-${Date.now()}`,
              question:
                mcqQuestion || "Which of the following statements is correct for this unit?",
              options: [
                optA || "Option A (Correct Concept)",
                optB || "Option B",
                optC || "Option C",
                optD || "Option D",
              ],
              correctIndex: correctIdx,
              explanation: "Verified by VidyaLila Subject Matter Expert team.",
            },
          ],
        },
      ],
    };

    addCustomModule(newMod);
    fetch("/api/studio/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin-key": adminKey,
      },
      body: JSON.stringify({ type: "MODULE", moduleData: newMod }),
    }).catch(() => {});
    setModTitle("");
    setModSubtitle("");
    setUnitBody("");
    setMcqQuestion("");
  };

  const availableSubjectChapters = modules.filter(
    (m) => m.classGrade === contestClass && m.subject === contestSubject
  );

  const handlePublishContest = (e: React.FormEvent) => {
    e.preventDefault();

    const freqText =
      contestType === "DAILY"
        ? "Daily Quiz"
        : contestType === "WEEKLY"
        ? "Weekly Competition"
        : "Monthly Competition";

    const freqCadence =
      contestType === "DAILY"
        ? `Once a Day • ${contestTimeSlot}`
        : contestType === "WEEKLY"
        ? `Once a Week • Sunday ${contestTimeSlot}`
        : `Once a Month • Last Sunday ${contestTimeSlot}`;

    const scopeSuffix =
      contestScope === "FULL_SYLLABUS" ? "(Full Syllabus)" : "(Selected Chapters)";

    const generatedTitle = `Class ${contestClass} ${contestSubject} ${freqText} ${scopeSuffix}`;

    const finalIncludedChapters =
      contestScope === "FULL_SYLLABUS"
        ? [`All Chapters (100% Complete Class ${contestClass} ${contestSubject} Syllabus)`]
        : selectedChapterTitles.length > 0
        ? selectedChapterTitles
        : availableSubjectChapters.map((c, idx) => `Ch ${idx + 1}: ${c.title}`);

    // Auto-pull verified questions from the matching chapters in our Question Pool if founder didn't type a custom question
    const autoPulledQuestions = availableSubjectChapters
      .filter((ch) =>
        contestScope === "FULL_SYLLABUS" ||
        selectedChapterTitles.length === 0 ||
        selectedChapterTitles.some((t) => t.includes(ch.title))
      )
      .flatMap((ch) => ch.units.flatMap((u) => u.checkpointQuestions))
      .slice(0, 5);

    const newContest: QuizContest = {
      id: `contest-custom-${Date.now()}`,
      title: generatedTitle,
      subtitle:
        contestScope === "FULL_SYLLABUS"
          ? `Complete Class ${contestClass} ${contestSubject} Syllabus • ${freqCadence}`
          : `Targeted Chapter-Group Quiz • Only tests the announced chapters (${freqCadence})`,
      type: contestType,
      syllabusScope: contestScope,
      includedChapters: finalIncludedChapters,
      board: contestBoard,
      classGrade: contestClass,
      subject: contestSubject,
      scheduledTimeSlot: contestTimeSlot,
      frequencyLabel: freqCadence,
      entryFeeInr: contestFee,
      freeWithPass: true,
      prizePool: contestPrize,
      xpReward: 0,
      durationMinutes: contestDuration,
      participantsCount: 120,
      startsInLabel: `LIVE NOW • ${contestTimeSlot} Slot`,
      isLive: true,
      questions: cqText.trim()
        ? [
            {
              id: `cq-custom-${Date.now()}`,
              question: cqText,
              options: [
                cqOptA || "±2√6",
                cqOptB || "±3√2",
                cqOptC || "±6",
                cqOptD || "0",
              ],
              correctIndex: cqCorrect,
              explanation:
                "Verified by VidyaLila Academic Review Team.",
            },
          ]
        : autoPulledQuestions.length > 0
        ? autoPulledQuestions
        : [
            {
              id: `cq-custom-${Date.now()}`,
              question:
                "Find the value of k for which the quadratic equation 2x² + kx + 3 = 0 has two real equal roots.",
              options: ["±2√6", "±3√2", "±6", "0"],
              correctIndex: 0,
              explanation:
                "For equal roots, Discriminant D = b² - 4ac = 0 => k² - 4(2)(3) = 0 => k = ±√24 = ±2√6.",
            },
          ],
    };

    addCustomContest(newContest);
    fetch("/api/studio/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin-key": adminKey,
      },
      body: JSON.stringify({ type: "CONTEST", contestData: newContest }),
    }).catch(() => {});
    setCqText("");
  };

  const inputClass =
    "w-full rounded-2xl border-2 border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold text-slate-900 focus:border-indigo-500 focus:bg-white focus:outline-none";

  // Protected Admin Gate so students cannot access /studio without Founder Passcode
  if (!isUnlocked) {
    return (
      <div className="mx-auto max-w-md py-12">
        <div className="rounded-3xl border-2 border-slate-200 bg-white p-7 sm:p-8 shadow-[0_8px_0_0_#e2e8f0] space-y-5 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 border-b-4 border-indigo-800 text-white shadow-sm">
            <Lock className="h-8 w-8" />
          </div>

          <div className="space-y-1.5">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 border border-indigo-200 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-indigo-800">
              Founder &amp; Academic Team Only
            </span>
            <h1 className="text-2xl font-extrabold text-slate-900">
              Admin CMS Studio Lock 🔒
            </h1>
            <p className="text-xs font-medium text-slate-500 leading-relaxed">
              This area is restricted to the VidyaLila Founder and authorized Content Writers for publishing chapters, quizzes, and reviewing academic error reports.
            </p>
          </div>

          <form onSubmit={handleUnlockStudio} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                Admin Studio Passcode
              </label>
              <input
                type="password"
                required
                value={passcodeInput}
                onChange={(e) => setPasscodeInput(e.target.value)}
                placeholder="Enter Admin Studio Passcode"
                className={inputClass}
              />
            </div>

            {passcodeError && (
              <p className="text-xs font-bold text-rose-600 bg-rose-50 border border-rose-200 rounded-xl p-2.5">
                {passcodeError}
              </p>
            )}

            <button
              type="submit"
              className="w-full btn-3d-indigo py-3 text-xs sm:text-sm flex items-center justify-center gap-2"
            >
              <ShieldCheck className="h-4 w-4" />
              <span>Unlock Admin CMS Studio</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Top Studio Header */}
      <section className="rounded-3xl border-2 border-violet-300 bg-gradient-to-r from-violet-50 via-white to-amber-50 p-6 sm:p-8 shadow-[0_8px_0_0_#ddd6fe]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-xl bg-violet-100 border border-violet-300 px-3 py-1 text-xs font-black text-violet-900">
                <PenTool className="h-3.5 w-3.5" />
                <span>CONTENT WRITER &amp; ADMIN CMS STUDIO</span>
              </div>
              <button
                type="button"
                onClick={handleLockStudio}
                className="inline-flex items-center gap-1 rounded-xl bg-rose-50 border border-rose-200 px-3 py-1 text-xs font-extrabold text-rose-700 hover:bg-rose-100"
              >
                <LogOut className="h-3.5 w-3.5" />
                <span>Lock Studio</span>
              </button>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
              Publish Free Study Chapters & Paid Daily/Weekly Quizzes ✍️
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-slate-600 max-w-2xl">
              Built for your Content Writers team! Publish Class 9–12 conceptual chapters, unit checkpoints, and interactive Daily/Weekly Contests without touching code.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-emerald-300 bg-white p-4 text-xs space-y-2 shrink-0 max-w-sm">
            <div className="flex items-center gap-2 font-black text-emerald-700">
              <Database className="h-4 w-4" />
              <span>
                {isSupabaseConfigured
                  ? "Supabase Cloud Connected (obnkrztcwpyrfpnuwzvg)"
                  : "Local + Supabase Ready Schema"}
              </span>
            </div>
            <p className="font-bold text-slate-500">
              Active Chapters: <strong className="text-slate-900">{modules.length}</strong> • Active Contests:{" "}
              <strong className="text-slate-900">{contests.length}</strong>
            </p>
            <button
              type="button"
              onClick={handleSeedDatabase}
              disabled={seeding}
              className="w-full btn-3d-emerald py-2 px-3 text-xs flex items-center justify-center gap-1.5"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>
                {seeding ? "Seeding Supabase..." : "1-Click Seed Chapters & Quizzes to Supabase"}
              </span>
            </button>
            {seedMessage && (
              <p className="text-[11px] font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-2">
                {seedMessage}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* 3D Mode Switcher Tabs */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setActiveTab("TRAIL")}
          className={`flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm ${
            activeTab === "TRAIL" ? "btn-3d-emerald" : "btn-3d-white"
          }`}
        >
          <BookOpen className="h-4 w-4" />
          1. Create Free Chapter & Unit
        </button>

        <button
          onClick={() => setActiveTab("CONTEST")}
          className={`flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm ${
            activeTab === "CONTEST" ? "btn-3d-amber" : "btn-3d-white"
          }`}
        >
          <Swords className="h-4 w-4" />
          2. Create Paid Daily / Weekly Quiz Contest
        </button>

        <button
          onClick={() => setActiveTab("REPORTS")}
          className={`flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm ${
            activeTab === "REPORTS" ? "btn-3d-emerald" : "btn-3d-white"
          }`}
        >
          <ShieldCheck className="h-4 w-4" />
          3. Academic Review &amp; Reported Issues ({contentReports.length})
        </button>
      </div>

      {/* TAB 1: CREATE TRAILHEAD MODULE */}
      {activeTab === "TRAIL" ? (
        <form
          onSubmit={handlePublishModule}
          className="rounded-3xl border-2 border-slate-200 bg-white p-6 sm:p-8 space-y-6 shadow-[0_8px_0_0_#e2e8f0]"
        >
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <PlusCircle className="h-5 w-5 text-emerald-600" />
            New Subject Chapter
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-black text-slate-700 mb-1.5">
                Board (CBSE / ICSE / Both)
              </label>
              <select
                value={modBoard}
                onChange={(e) => setModBoard(e.target.value as BoardType)}
                className={inputClass}
              >
                <option value="CBSE">CBSE Board</option>
                <option value="ICSE">ICSE / ISC Board</option>
                <option value="BOTH">Both (CBSE + ICSE)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-700 mb-1.5">
                Class Grade (Class 9–12)
              </label>
              <select
                value={modClass}
                onChange={(e) => setModClass(Number(e.target.value) as ClassGrade)}
                className={inputClass}
              >
                <option value={9}>Class 9</option>
                <option value={10}>Class 10</option>
                <option value={11}>Class 11</option>
                <option value={12}>Class 12</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-700 mb-1.5">
                Subject
              </label>
              <select
                value={modSubject}
                onChange={(e) =>
                  setModSubject(e.target.value as LearningModule["subject"])
                }
                className={inputClass}
              >
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Mathematics">Mathematics</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black text-slate-700 mb-1.5">
                Chapter Title *
              </label>
              <input
                required
                type="text"
                value={modTitle}
                onChange={(e) => setModTitle(e.target.value)}
                placeholder="e.g., Trigonometry Identities & Heights"
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-xs font-black text-slate-700 mb-1.5">
                Short Hook / Subtitle
              </label>
              <input
                type="text"
                value={modSubtitle}
                onChange={(e) => setModSubtitle(e.target.value)}
                placeholder="e.g., Crack all prove-that questions in 3 steps!"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-black text-slate-700 mb-1.5">
                Chapter Badge Name
              </label>
              <input
                type="text"
                value={badgeName}
                onChange={(e) => setBadgeName(e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-xs font-black text-slate-700 mb-1.5">
                Badge Icon Emoji
              </label>
              <input
                type="text"
                value={badgeEmoji}
                onChange={(e) => setBadgeEmoji(e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-xs font-black text-slate-700 mb-1.5">
                Unit GP (Gyan Points) Reward
              </label>
              <input
                type="number"
                value={unitXp}
                onChange={(e) => setUnitXp(Number(e.target.value))}
                className={inputClass}
              />
            </div>
          </div>

          {/* Unit Content Editor */}
          <div className="rounded-2xl border-2 border-sky-200 bg-sky-50/60 p-5 space-y-4">
            <h3 className="text-sm font-black text-sky-900">
              📖 Unit 1 Lesson Content & Topper Formula Box
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                value={unitTitle}
                onChange={(e) => setUnitTitle(e.target.value)}
                placeholder="Unit Title"
                className={inputClass}
              />
              <input
                type="text"
                value={unitHeading}
                onChange={(e) => setUnitHeading(e.target.value)}
                placeholder="Section Heading"
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  🇬🇧 Lesson Explanation (English)
                </label>
                <textarea
                  rows={4}
                  value={unitBody}
                  onChange={(e) => setUnitBody(e.target.value)}
                  placeholder="Write standard exam-ready English explanation here..."
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-indigo-800 mb-1">
                  🇮🇳 Lesson Explanation (Hinglish - Dost Mode)
                </label>
                <textarea
                  rows={4}
                  value={unitBodyHinglish}
                  onChange={(e) => setUnitBodyHinglish(e.target.value)}
                  placeholder="Write conversational Hinglish explanation here (e.g., Aasan bhasha me samjho...)"
                  className={inputClass}
                />
              </div>
            </div>

            <input
              type="text"
              value={unitTip}
              onChange={(e) => setUnitTip(e.target.value)}
              placeholder="Formula or Topper Shortcut Tip"
              className={inputClass}
            />
          </div>

          {/* Unit Checkpoint MCQ Creator */}
          <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/60 p-5 space-y-4">
            <h3 className="text-sm font-black text-amber-900">
              ⚡ Unit Mastery Checkpoint MCQ (Validates XP for Student)
            </h3>
            <input
              type="text"
              value={mcqQuestion}
              onChange={(e) => setMcqQuestion(e.target.value)}
              placeholder="Enter Checkpoint Question..."
              className={inputClass}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                value={optA}
                onChange={(e) => setOptA(e.target.value)}
                placeholder="Option A"
                className={inputClass}
              />
              <input
                type="text"
                value={optB}
                onChange={(e) => setOptB(e.target.value)}
                placeholder="Option B"
                className={inputClass}
              />
              <input
                type="text"
                value={optC}
                onChange={(e) => setOptC(e.target.value)}
                placeholder="Option C"
                className={inputClass}
              />
              <input
                type="text"
                value={optD}
                onChange={(e) => setOptD(e.target.value)}
                placeholder="Option D"
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-xs font-black text-slate-700 mr-3">
                Correct Option:
              </label>
              <select
                value={correctIdx}
                onChange={(e) => setCorrectIdx(Number(e.target.value))}
                className="rounded-xl border-2 border-slate-300 bg-white px-3 py-1.5 text-xs text-emerald-700 font-black"
              >
                <option value={0}>Option A</option>
                <option value={1}>Option B</option>
                <option value={2}>Option C</option>
                <option value={3}>Option D</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="btn-3d-emerald px-8 py-4 text-sm flex items-center gap-2"
          >
            <Sparkles className="h-5 w-5" />
            Publish Free Chapter Instantly 🚀
          </button>
        </form>
      ) : activeTab === "CONTEST" ? (
        /* TAB 2: CREATE PAID DAILY / WEEKLY QUIZ CONTEST */
        <form
          onSubmit={handlePublishContest}
          className="rounded-3xl border-2 border-amber-300 bg-white p-6 sm:p-8 space-y-6 shadow-[0_8px_0_0_#fcd34d]"
        >
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <Swords className="h-5 w-5 text-amber-500" />
            Launch Monetized Daily / Weekly Quiz Contest
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-black text-slate-700 mb-1.5">
                Target Class *
              </label>
              <select
                value={contestClass}
                onChange={(e) =>
                  setContestClass(Number(e.target.value) as ClassGrade)
                }
                className={inputClass}
              >
                <option value={9}>Class 9</option>
                <option value={10}>Class 10</option>
                <option value={11}>Class 11</option>
                <option value={12}>Class 12</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-700 mb-1.5">
                Subject (Full Subject Basis) *
              </label>
              <select
                value={contestSubject}
                onChange={(e) =>
                  setContestSubject(e.target.value as LearningModule["subject"])
                }
                className={inputClass}
              >
                <option value="Physics">Physics</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Chemistry">Chemistry</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-700 mb-1.5">
                Quiz Frequency
              </label>
              <select
                value={contestType}
                onChange={(e) =>
                  setContestType(e.target.value as "DAILY" | "WEEKLY" | "MONTHLY")
                }
                className={inputClass}
              >
                <option value="DAILY">DAILY QUIZ (Once a Day)</option>
                <option value="WEEKLY">WEEKLY COMPETITION (Once a Week)</option>
                <option value="MONTHLY">MONTHLY COMPETITION (Once a Month)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-700 mb-1.5">
                Staggered Time Slot
              </label>
              <select
                value={contestTimeSlot}
                onChange={(e) => setContestTimeSlot(e.target.value)}
                className={inputClass}
              >
                <option value="3:00 PM IST">3:00 PM IST</option>
                <option value="4:00 PM IST">4:00 PM IST</option>
                <option value="5:00 PM IST">5:00 PM IST</option>
              </select>
            </div>
          </div>

          {/* Syllabus Scope Selector: Full Syllabus vs Selected Chapters */}
          <div className="rounded-2xl border-2 border-indigo-200 bg-indigo-50/50 p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-black text-indigo-950">
                  📚 Quiz Syllabus Scope (Full Syllabus vs Selected Chapters)
                </h3>
                <p className="text-xs font-medium text-slate-600">
                  Leave the manual question box empty below to auto-select verified questions from your Chapter Question Bank!
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setContestScope("FULL_SYLLABUS")}
                  className={`rounded-xl px-3.5 py-2 text-xs font-extrabold transition ${
                    contestScope === "FULL_SYLLABUS"
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "bg-white border border-slate-200 text-slate-700"
                  }`}
                >
                  🌍 Full Syllabus
                </button>
                <button
                  type="button"
                  onClick={() => setContestScope("SELECTED_CHAPTERS")}
                  className={`rounded-xl px-3.5 py-2 text-xs font-extrabold transition ${
                    contestScope === "SELECTED_CHAPTERS"
                      ? "bg-amber-500 text-slate-950 shadow-sm"
                      : "bg-white border border-slate-200 text-slate-700"
                  }`}
                >
                  📌 Selected Chapters Only
                </button>
              </div>
            </div>

            {contestScope === "SELECTED_CHAPTERS" && (
              <div className="space-y-2 pt-2 border-t border-indigo-200/60">
                <p className="text-xs font-extrabold text-slate-700">
                  Tick Chapters Included in This Class {contestClass} {contestSubject} Quiz:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {availableSubjectChapters.map((ch, idx) => {
                    const label = `Ch ${idx + 1}: ${ch.title}`;
                    const checked = selectedChapterTitles.includes(label);
                    return (
                      <label
                        key={ch.id}
                        className="flex items-center gap-2 rounded-xl bg-white border border-slate-200 p-3 text-xs font-bold text-slate-800 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedChapterTitles((prev) => [...prev, label]);
                            } else {
                              setSelectedChapterTitles((prev) =>
                                prev.filter((item) => item !== label)
                              );
                            }
                          }}
                          className="h-4 w-4 rounded text-emerald-600"
                        />
                        <span>{label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-black text-slate-700 mb-1.5">
                Target Board
              </label>
              <select
                value={contestBoard}
                onChange={(e) => setContestBoard(e.target.value as BoardType)}
                className={inputClass}
              >
                <option value="BOTH">Both (CBSE + ICSE)</option>
                <option value="CBSE">CBSE Only</option>
                <option value="ICSE">ICSE / ISC Only</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-700 mb-1.5">
                Entry Fee (₹ INR)
              </label>
              <input
                type="number"
                value={contestFee}
                onChange={(e) => setContestFee(Number(e.target.value))}
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-xs font-black text-slate-700 mb-1.5">
                Duration (Minutes)
              </label>
              <input
                type="number"
                value={contestDuration}
                onChange={(e) => setContestDuration(Number(e.target.value))}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-black text-slate-700 mb-1.5">
              Scholarship &amp; Student Reward Highlight
            </label>
            <input
              type="text"
              value={contestPrize}
              onChange={(e) => setContestPrize(e.target.value)}
              className={inputClass}
            />
          </div>

          <div className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-5 space-y-4">
            <h3 className="text-sm font-black text-slate-900">
              🎯 Add Lead Contest Question
            </h3>
            <input
              type="text"
              value={cqText}
              onChange={(e) => setCqText(e.target.value)}
              placeholder="Enter timed MCQ question..."
              className={inputClass}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                value={cqOptA}
                onChange={(e) => setCqOptA(e.target.value)}
                placeholder="Option A"
                className={inputClass}
              />
              <input
                type="text"
                value={cqOptB}
                onChange={(e) => setCqOptB(e.target.value)}
                placeholder="Option B"
                className={inputClass}
              />
              <input
                type="text"
                value={cqOptC}
                onChange={(e) => setCqOptC(e.target.value)}
                placeholder="Option C"
                className={inputClass}
              />
              <input
                type="text"
                value={cqOptD}
                onChange={(e) => setCqOptD(e.target.value)}
                placeholder="Option D"
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-xs font-black text-slate-700 mr-3">
                Correct Option:
              </label>
              <select
                value={cqCorrect}
                onChange={(e) => setCqCorrect(Number(e.target.value))}
                className="rounded-xl border-2 border-slate-300 bg-white px-3 py-1.5 text-xs text-emerald-700 font-black"
              >
                <option value={0}>Option A</option>
                <option value={1}>Option B</option>
                <option value={2}>Option C</option>
                <option value={3}>Option D</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="btn-3d-amber px-8 py-4 text-sm flex items-center gap-2"
          >
            <CheckCircle2 className="h-5 w-5" />
            Launch Paid Quiz Contest (₹{contestFee}) ⚡
          </button>
        </form>
      ) : (
        /* TAB 3: ACADEMIC REVIEW & STUDENT REPORTED ISSUES QUEUE */
        <div className="rounded-3xl border-2 border-slate-200 bg-white p-6 sm:p-8 space-y-6 shadow-[0_8px_0_0_#e2e8f0]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                3-Layer Academic Verification &amp; Student Error Reports
              </h2>
              <p className="text-xs font-medium text-slate-500 mt-1">
                Review any typo or answer-key doubt flagged by students. Resolving a paid quiz question automatically protects all participants under the Bonus Marks Policy.
              </p>
            </div>
          </div>

          {contentReports.length === 0 ? (
            <div className="rounded-2xl bg-emerald-50/60 border border-emerald-200 p-8 text-center space-y-2">
              <CheckCircle2 className="h-8 w-8 text-emerald-600 mx-auto" />
              <p className="text-sm font-extrabold text-slate-900">
                Zero Open Content Discrepancies!
              </p>
              <p className="text-xs font-medium text-slate-500 max-w-md mx-auto">
                Whenever a student clicks &ldquo;Report Typo&rdquo; on any study unit or test question, it will appear right here for 1-click verification.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {contentReports.map((rep) => (
                <div
                  key={rep.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-extrabold">
                      <span className="inline-flex items-center gap-1 rounded-lg bg-amber-100 border border-amber-300 px-2.5 py-0.5 text-amber-900">
                        <Flag className="h-3 w-3" />
                        {rep.issueType}
                      </span>
                      <span className="text-slate-900">
                        {rep.chapterTitle} • {rep.unitTitle}
                      </span>
                      <span className="text-slate-400">({rep.createdAt})</span>
                    </div>
                    <p className="text-xs font-bold text-slate-700">
                      Target: {rep.targetLabel}
                    </p>
                    <p className="text-xs font-medium text-slate-600">
                      &ldquo;{rep.description}&rdquo; — Reported by {rep.reportedBy}
                    </p>
                  </div>

                  <div className="shrink-0">
                    {rep.status === "RESOLVED_BONUS_GRANTED" ? (
                      <span className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-100 border border-emerald-300 px-3.5 py-2 text-xs font-extrabold text-emerald-800">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        Verified &amp; Resolved
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => resolveContentReport(rep.id)}
                        className="btn-3d-emerald px-4 py-2.5 text-xs"
                      >
                        Resolve &amp; Grant Bonus Marks
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
