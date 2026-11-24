"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { LearningModule, ClassGrade, CoreSubject } from "@/lib/mock-data";
import {
  CheckCircle2,
  Lock,
  Unlock,
  ArrowRight,
  Sparkles,
  Gamepad2,
  Trophy,
  Zap,
  ChevronDown,
  ChevronUp,
  Play,
  Compass,
  Flag,
} from "lucide-react";

interface SkillTreeMapProps {
  chapters: LearningModule[];
  selectedClass: ClassGrade;
  selectedSubject: CoreSubject;
  completedUnitIds: string[];
  isAuthenticated: boolean;
  userCredits: number;
  isHinglish: boolean;
  isChapterFreeStarter: (id: string) => boolean;
  isChapterUnlocked: (id: string) => boolean;
  onUnlockChapter: (chapter: LearningModule, e: React.MouseEvent) => void;
}

export function SkillTreeMap({
  chapters,
  selectedClass,
  selectedSubject,
  completedUnitIds,
  isAuthenticated,
  userCredits,
  isHinglish,
  isChapterFreeStarter,
  isChapterUnlocked,
  onUnlockChapter,
}: SkillTreeMapProps) {
  const router = useRouter();
  const [expandedChapterId, setExpandedChapterId] = useState<string | null>(
    chapters[0]?.id || null
  );

  // Compute overall subject stats
  const totalSubjectUnits = chapters.reduce((acc, c) => acc + c.units.length, 0);
  const completedSubjectUnits = chapters.reduce(
    (acc, c) =>
      acc + c.units.filter((u) => completedUnitIds.includes(u.id)).length,
    0
  );
  const totalSubjectXp = chapters.reduce((acc, c) => acc + c.totalXp, 0);
  const subjectPct =
    totalSubjectUnits > 0
      ? Math.round((completedSubjectUnits / totalSubjectUnits) * 100)
      : 0;

  // Determine the "current active" chapter (first unlocked chapter that isn't 100% done, or index 0)
  const activeChapterIdx = (() => {
    const idx = chapters.findIndex((chap, i) => {
      const free = isChapterFreeStarter(chap.id) || i < 2;
      const unlocked = free || (isAuthenticated && isChapterUnlocked(chap.id));
      const doneCount = chap.units.filter((u) =>
        completedUnitIds.includes(u.id)
      ).length;
      return unlocked && doneCount < chap.units.length;
    });
    return idx >= 0 ? idx : 0;
  })();

  const subjectTheme =
    selectedSubject === "Physics"
      ? {
          biomeTitle: "Quantum & Mechanics Odyssey",
          accentFrom: "from-sky-500",
          accentTo: "to-indigo-600",
          glow: "bg-sky-400/20",
          pillBg: "bg-sky-50 border-sky-200 text-sky-800",
          emoji: "🔭",
        }
      : selectedSubject === "Chemistry"
      ? {
          biomeTitle: "Molecular & Reaction Lab Trail",
          accentFrom: "from-emerald-500",
          accentTo: "to-teal-600",
          glow: "bg-emerald-400/20",
          pillBg: "bg-emerald-50 border-emerald-200 text-emerald-800",
          emoji: "🧪",
        }
      : {
          biomeTitle: "Algebra, Geometry & Logic Citadel",
          accentFrom: "from-amber-500",
          accentTo: "to-orange-600",
          glow: "bg-amber-400/20",
          pillBg: "bg-amber-50 border-amber-200 text-amber-900",
          emoji: "📐",
        };

  return (
    <div className="relative rounded-3xl border-2 border-slate-200/90 bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 p-4 sm:p-8 text-white shadow-[0_14px_36px_-10px_rgba(15,23,42,0.55)] overflow-hidden">
      {/* Ambient Background Stars & Aurora Orbs */}
      <div
        className={`pointer-events-none absolute -top-28 -left-24 h-80 w-80 rounded-full ${subjectTheme.glow} blur-3xl`}
      />
      <div className="pointer-events-none absolute top-1/3 -right-28 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/4 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl" />

      {/* Decorative Grid Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.45) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ====================================================================
          TOP EXPEDITION HUD BAR
         ==================================================================== */}
      <div className="relative z-10 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 p-4 sm:p-5 mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-3.5">
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${subjectTheme.accentFrom} ${subjectTheme.accentTo} text-3xl shadow-lg animate-float`}
          >
            {subjectTheme.emoji}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/20 border border-amber-300/40 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-amber-300">
                <Compass className="h-3 w-3" />
                <span>3D Interactive Skill Tree • Grade {selectedClass}</span>
              </span>
              <span className="text-xs font-bold text-indigo-200">
                {subjectTheme.biomeTitle}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white mt-0.5">
              {selectedSubject} Mastery Expedition Map ({chapters.length}{" "}
              Chapters)
            </h3>
          </div>
        </div>

        {/* Right HUD Metrics & Quick Jump */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="rounded-xl bg-slate-950/50 border border-white/10 px-3.5 py-2">
            <span className="block text-[10px] font-extrabold uppercase tracking-wider text-indigo-300">
              Topics Cleared
            </span>
            <span className="text-sm font-black text-emerald-400">
              {completedSubjectUnits} / {totalSubjectUnits} ({subjectPct}%)
            </span>
          </div>

          <div className="rounded-xl bg-slate-950/50 border border-white/10 px-3.5 py-2">
            <span className="block text-[10px] font-extrabold uppercase tracking-wider text-indigo-300">
              Total Trail XP
            </span>
            <span className="text-sm font-black text-amber-300">
              ⚡ +{totalSubjectXp.toLocaleString()} XP
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              const el = document.getElementById(
                `skill-node-${activeChapterIdx}`
              );
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            }}
            className="btn-3d-emerald px-3.5 py-2.5 text-xs font-black flex items-center gap-1.5 cursor-pointer"
          >
            <Flag className="h-3.5 w-3.5" />
            <span>Jump to Active Node (#{activeChapterIdx + 1})</span>
          </button>
        </div>
      </div>

      {/* ====================================================================
          WINDING S-CURVE SKILL TREE NODES
         ==================================================================== */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-6 sm:space-y-10 py-2">
        {chapters.map((chap, idx) => {
          const completedUnits = chap.units.filter((u) =>
            completedUnitIds.includes(u.id)
          ).length;
          const totalUnits = chap.units.length;
          const progressPct =
            totalUnits > 0
              ? Math.round((completedUnits / totalUnits) * 100)
              : 0;
          const isCompleted = totalUnits > 0 && completedUnits === totalUnits;
          const isFreeStarter = isChapterFreeStarter(chap.id) || idx < 2;
          const isUnlocked =
            isFreeStarter || (isAuthenticated && isChapterUnlocked(chap.id));
          const isCurrentActive = idx === activeChapterIdx;
          const isExpanded = expandedChapterId === chap.id;

          // Winding alignment pattern on desktop: Left -> Center -> Right -> Center
          const cycle = idx % 4;
          const alignmentClass =
            cycle === 0
              ? "lg:mr-auto lg:ml-6"
              : cycle === 1
              ? "lg:mx-auto"
              : cycle === 2
              ? "lg:ml-auto lg:mr-6"
              : "lg:mx-auto";

          // Node pedestal color styling
          const pedestalStyle = isCompleted
            ? "from-emerald-400 to-teal-600 border-emerald-200 shadow-[0_8px_0_0_#047857,0_0_25px_rgba(16,185,129,0.5)]"
            : isCurrentActive
            ? "from-amber-300 via-amber-400 to-orange-500 border-white shadow-[0_8px_0_0_#b45309,0_0_32px_rgba(251,191,36,0.65)]"
            : isUnlocked
            ? "from-indigo-500 to-violet-600 border-indigo-300 shadow-[0_8px_0_0_#3730a3,0_0_20px_rgba(99,102,241,0.4)]"
            : "from-slate-700 to-slate-800 border-slate-500 shadow-[0_8px_0_0_#1e293b]";

          return (
            <div
              key={chap.id}
              id={`skill-node-${idx}`}
              className="relative flex flex-col items-center"
            >
              {/* Winding Vertical/Diagonal Connector Line from Previous Node */}
              {idx > 0 && (
                <div className="mb-4 flex flex-col items-center">
                  <div
                    className={`h-8 sm:h-10 w-1.5 rounded-full ${
                      isUnlocked
                        ? "bg-gradient-to-b from-emerald-400 to-indigo-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]"
                        : "bg-slate-700 border-l-2 border-dashed border-slate-500"
                    }`}
                  />
                </div>
              )}

              {/* Node + Interactive Expedition Card Container */}
              <div
                className={`w-full lg:w-[82%] ${alignmentClass} flex flex-col sm:flex-row items-center sm:items-stretch gap-4 sm:gap-6`}
              >
                {/* 3D TACTILE PEDESTAL NODE (Duolingo / Brilliant Style Circle Button) */}
                <div className="relative flex flex-col items-center justify-center shrink-0">
                  {/* Floating "CURRENT QUEST" Callout Crown on Active Node */}
                  {isCurrentActive && (
                    <div className="mb-2 rounded-full bg-amber-400 text-slate-950 px-3 py-0.5 text-[10px] font-black uppercase tracking-wider shadow-md animate-bounce flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      <span>Active Quest</span>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => router.push(`/trails/${chap.slug}`)}
                    title={`Open Chapter ${idx + 1}: ${chap.title}`}
                    className={`group relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full bg-gradient-to-b ${pedestalStyle} border-4 text-3xl sm:text-4xl transition-all duration-200 hover:scale-105 active:translate-y-1 cursor-pointer`}
                  >
                    {/* Outer Pulsing Halo for Current Active Node */}
                    {isCurrentActive && (
                      <span className="pointer-events-none absolute -inset-2 rounded-full border-2 border-amber-300/70 animate-ping [animation-duration:2.5s]" />
                    )}

                    {/* Inner Emoji / Lock */}
                    <span className="drop-shadow-sm select-none">
                      {isCompleted
                        ? "🏆"
                        : isUnlocked
                        ? chap.badgeEmoji
                        : "🔒"}
                    </span>

                    {/* Chapter Number Pill at Bottom of 3D Node */}
                    <span className="absolute -bottom-2.5 rounded-full bg-slate-950 border-2 border-white/80 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow-sm">
                      CH {idx + 1}
                    </span>
                  </button>
                </div>

                {/* CHAPTER EXPEDITION CARD & TOPIC STEPPING STONES */}
                <div
                  className={`flex-1 w-full rounded-3xl p-5 sm:p-6 transition-all duration-300 border-2 ${
                    isCurrentActive
                      ? "bg-white text-slate-900 border-amber-400 shadow-[0_10px_30px_-5px_rgba(251,191,36,0.35)]"
                      : isUnlocked
                      ? "bg-white/95 text-slate-900 border-indigo-200/90 shadow-lg hover:border-indigo-400"
                      : "bg-slate-900/90 text-slate-100 border-slate-700 shadow-md"
                  }`}
                >
                  {/* Top Row: Badges + XP + Free/Locked Pill */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-lg px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ${
                          isUnlocked
                            ? "bg-indigo-100 text-indigo-800"
                            : "bg-slate-800 text-slate-300 border border-slate-700"
                        }`}
                      >
                        Stage {idx + 1} • {chap.badgeName}
                      </span>

                      {isFreeStarter ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 text-[10px] font-extrabold text-emerald-800 uppercase">
                          <Unlock className="h-3 w-3" />
                          <span>Free Starter</span>
                        </span>
                      ) : isUnlocked ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-indigo-100 border border-indigo-300 px-2.5 py-0.5 text-[10px] font-extrabold text-indigo-800 uppercase">
                          <CheckCircle2 className="h-3 w-3" />
                          <span>Unlocked Forever</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/20 border border-amber-400/50 px-2.5 py-0.5 text-[10px] font-extrabold text-amber-300 uppercase">
                          <Lock className="h-3 w-3" />
                          <span>🪙 100 Credits</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-xs font-black">
                      <span
                        className={`rounded-xl px-2.5 py-1 ${
                          isUnlocked
                            ? "bg-amber-50 border border-amber-200 text-amber-800"
                            : "bg-slate-800 text-amber-300"
                        }`}
                      >
                        ⚡ +{chap.totalXp} XP
                      </span>
                      <span
                        className={`rounded-xl px-2.5 py-1 ${
                          isUnlocked
                            ? "bg-violet-50 border border-violet-200 text-violet-800"
                            : "bg-slate-800 text-indigo-300"
                        }`}
                      >
                        🎮 {totalUnits * 4} Games
                      </span>
                    </div>
                  </div>

                  {/* Chapter Title & Bilingual Subtitle */}
                  <div className="mt-2.5">
                    <h4
                      onClick={() => router.push(`/trails/${chap.slug}`)}
                      className={`text-lg sm:text-xl font-black cursor-pointer transition ${
                        isUnlocked
                          ? "text-slate-900 hover:text-indigo-600"
                          : "text-white hover:text-amber-300"
                      }`}
                    >
                      {chap.title}
                    </h4>
                    <p
                      className={`text-xs sm:text-sm font-medium mt-1 line-clamp-2 ${
                        isUnlocked ? "text-slate-600" : "text-slate-400"
                      }`}
                    >
                      {isHinglish && chap.subtitleHinglish
                        ? chap.subtitleHinglish
                        : chap.subtitle}
                    </p>
                  </div>

                  {/* Interactive Topic Stepping-Stones Mini-Chain */}
                  <div className="mt-4 pt-3.5 border-t border-slate-200/60 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span
                        className={`text-[11px] font-black uppercase tracking-wider ${
                          isUnlocked ? "text-slate-500" : "text-slate-400"
                        }`}
                      >
                        Topic Stepping Stones ({completedUnits}/{totalUnits}{" "}
                        Mastered • {progressPct}%)
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          setExpandedChapterId(isExpanded ? null : chap.id)
                        }
                        className={`inline-flex items-center gap-1 text-xs font-extrabold cursor-pointer ${
                          isUnlocked
                            ? "text-indigo-600 hover:text-indigo-800"
                            : "text-amber-300 hover:text-amber-200"
                        }`}
                      >
                        <span>
                          {isExpanded ? "Hide Topic Map" : "View All Topics"}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="h-3.5 w-3.5" />
                        ) : (
                          <ChevronDown className="h-3.5 w-3.5" />
                        )}
                      </button>
                    </div>

                    {/* Visual Connected Topic Stepping Circles */}
                    <div className="flex flex-wrap items-center gap-2">
                      {chap.units.map((u, uIdx) => {
                        const unitDone = completedUnitIds.includes(u.id);
                        return (
                          <React.Fragment key={u.id}>
                            <button
                              type="button"
                              onClick={() =>
                                router.push(
                                  `/trails/${chap.slug}?unit=${uIdx}`
                                )
                              }
                              title={`Topic ${uIdx + 1}: ${u.title}`}
                              className={`group/unit relative flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-xs font-extrabold transition cursor-pointer border ${
                                unitDone
                                  ? "bg-emerald-500 text-white border-emerald-600 shadow-xs"
                                  : isUnlocked
                                  ? "bg-slate-100 hover:bg-indigo-600 text-slate-800 hover:text-white border-slate-200 hover:border-indigo-600"
                                  : "bg-slate-800 text-slate-300 border-slate-700 hover:border-amber-400"
                              }`}
                            >
                              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-[10px] font-black">
                                {unitDone ? "✓" : uIdx + 1}
                              </span>
                              <span className="max-w-[130px] truncate">
                                {u.title.replace(/^Unit\s*\d+[:.-]?\s*/i, "")}
                              </span>
                            </button>
                            {uIdx < chap.units.length - 1 && (
                              <span
                                className={`h-0.5 w-2.5 rounded-full ${
                                  unitDone ? "bg-emerald-400" : "bg-slate-300/50"
                                }`}
                              />
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>

                    {/* Expandable Full Topic Breakdown List */}
                    {isExpanded && (
                      <div
                        className={`mt-3 rounded-2xl p-3.5 space-y-2 border ${
                          isUnlocked
                            ? "bg-slate-50 border-slate-200"
                            : "bg-slate-950/70 border-slate-800"
                        }`}
                      >
                        {chap.units.map((u, uIdx) => {
                          const unitDone = completedUnitIds.includes(u.id);
                          return (
                            <div
                              key={u.id}
                              onClick={() =>
                                router.push(
                                  `/trails/${chap.slug}?unit=${uIdx}`
                                )
                              }
                              className={`flex items-center justify-between gap-3 rounded-xl p-2.5 text-xs font-bold transition cursor-pointer ${
                                isUnlocked
                                  ? "hover:bg-white text-slate-800"
                                  : "hover:bg-slate-900 text-slate-200"
                              }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <span
                                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[11px] font-black ${
                                    unitDone
                                      ? "bg-emerald-500 text-white"
                                      : isUnlocked
                                      ? "bg-indigo-100 text-indigo-800"
                                      : "bg-slate-800 text-slate-400"
                                  }`}
                                >
                                  {unitDone ? "✓" : uIdx + 1}
                                </span>
                                <div className="min-w-0">
                                  <p className="font-extrabold truncate">
                                    {u.title}
                                  </p>
                                  <p
                                    className={`text-[11px] truncate ${
                                      isUnlocked
                                        ? "text-slate-500"
                                        : "text-slate-400"
                                    }`}
                                  >
                                    4 Mini-Games • 10 Practice Questions • +
                                    {u.xpReward} XP
                                  </p>
                                </div>
                              </div>
                              <span
                                className={`shrink-0 inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-extrabold ${
                                  unitDone
                                    ? "bg-emerald-100 text-emerald-800"
                                    : isUnlocked
                                    ? "bg-indigo-50 text-indigo-700"
                                    : "bg-slate-800 text-amber-300"
                                }`}
                              >
                                <Play className="h-3 w-3" />
                                <span>{unitDone ? "Replay" : "Start"}</span>
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Action Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                      {isUnlocked ? (
                        <button
                          type="button"
                          onClick={() => router.push(`/trails/${chap.slug}`)}
                          className={`w-full sm:w-auto px-5 py-2.5 text-xs font-black flex items-center justify-center gap-2 cursor-pointer ${
                            isCurrentActive
                              ? "btn-3d-emerald"
                              : "btn-3d-indigo"
                          }`}
                        >
                          <span>
                            {isCompleted
                              ? "🏆 Review Mastered Chapter"
                              : isCurrentActive
                              ? "🚀 Continue Active Chapter Quest"
                              : `Open Chapter & Play (${totalUnits} Topics)`}
                          </span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      ) : (
                        <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                          <button
                            type="button"
                            onClick={(e) => onUnlockChapter(chap, e)}
                            className="btn-3d-amber px-5 py-2.5 text-xs font-black flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <span>{isAuthenticated ? "🪙" : "🔐"}</span>
                            <span>
                              {!isAuthenticated
                                ? "Sign In to Unlock Forever (100 Cr)"
                                : userCredits >= 100
                                ? "Unlock Forever & Start (100 Credits)"
                                : "Top Up Credits to Unlock (100 Cr)"}
                            </span>
                          </button>
                          <button
                            type="button"
                            onClick={() => router.push(`/trails/${chap.slug}`)}
                            className="rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 px-3.5 py-2.5 text-xs font-extrabold text-slate-200 transition cursor-pointer"
                          >
                            Preview Chapter
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* ====================================================================
            FINAL BOSS NODE: SUBJECT GRANDMASTER TROPHY CHEST
           ==================================================================== */}
        <div className="flex flex-col items-center pt-4">
          <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-indigo-400 to-amber-400 mb-4" />
          <div className="rounded-3xl border-2 border-amber-300/80 bg-gradient-to-r from-amber-500/20 via-yellow-500/15 to-amber-500/20 backdrop-blur-xl p-6 text-center max-w-xl mx-auto space-y-2 shadow-[0_0_40px_rgba(251,191,36,0.25)]">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-b from-amber-300 to-amber-500 border-4 border-white text-4xl shadow-lg animate-float">
              👑
            </div>
            <span className="inline-block rounded-full bg-amber-400/25 border border-amber-300/50 px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-amber-200">
              Final Expedition Milestone
            </span>
            <h4 className="text-xl font-black text-white">
              Grade {selectedClass} {selectedSubject} Grandmaster Chest
            </h4>
            <p className="text-xs sm:text-sm text-indigo-100/90 font-medium">
              Complete all {chapters.length} chapters ({totalSubjectUnits} topics) along this skill tree to claim your Subject Mastery Crest and{" "}
              <strong className="text-amber-300">
                +{totalSubjectXp.toLocaleString()} Total XP
              </strong>
              !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
