"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { UnitItem } from "@/lib/mock-data";
import { useApp } from "@/lib/store";
import {
  Gamepad2,
  Zap,
  ShieldAlert,
  Sparkles,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Trophy,
  Flame,
  Heart,
  Clock,
  Scissors,
  Snowflake,
  Puzzle,
  ArrowRight,
  HelpCircle,
  Lock,
  Unlock,
} from "lucide-react";

export function formatReadableMath(raw: string): string {
  if (!raw) return "";
  let s = raw;

  // Replace display math $$...$$ and inline math $...$
  const cleanLatexInner = (inner: string): string => {
    let t = inner
      .replace(/\\left\s*/g, "")
      .replace(/\\right\s*/g, "")
      .replace(/\\(?:quad|qquad|,|;|!)/g, " ")
      .replace(/\\mathbb\{N\}/g, "ℕ")
      .replace(/\\mathbb\{W\}/g, "𝕎")
      .replace(/\\mathbb\{Z\}/g, "ℤ")
      .replace(/\\mathbb\{Q\}/g, "ℚ")
      .replace(/\\mathbb\{R\}/g, "ℝ")
      .replace(/\\(?:text|mathrm|mathbf|textbf|textit)\{([^{}]*)\}/g, "$1")
      .replace(/\\sqrt\[3\]\{([^{}]+)\}/g, "∛($1)")
      .replace(/\\sqrt\[(\d+)\]\{([^{}]+)\}/g, "√[$1]($2)")
      .replace(/\\sqrt\{([^{}]+)\}/g, (_, a) =>
        a.length === 1 ? `√${a}` : `√(${a})`
      )
      .replace(/\\overline\{([^{}]+)\}/g, "$1̅")
      .replace(/\\bar\{([^{}]+)\}/g, "$1̅")
      .replace(/\\hat\{([^{}]+)\}/g, "$1̂")
      .replace(/\\vec\{([^{}]+)\}/g, "$1⃗");

    // Nested fractions (run twice)
    for (let i = 0; i < 2; i++) {
      t = t.replace(/\\(?:d|t)?frac\{([^{}]+)\}\{([^{}]+)\}/g, (_, num, den) => {
        const n = num.trim();
        const d = den.trim();
        const nWrap = /[+\-\s]/.test(n) ? `(${n})` : n;
        const dWrap = /[+\-\s]/.test(d) ? `(${d})` : d;
        return `${nWrap}/${dWrap}`;
      });
    }

    t = t
      .replace(/\^\{?\s*\\circ\s*\}?/g, "°")
      .replace(/\\circ/g, "°")
      .replace(/\\times/g, "×")
      .replace(/\\div/g, "÷")
      .replace(/\\cdot/g, "·")
      .replace(/\\pm/g, "±")
      .replace(/\\mp/g, "∓")
      .replace(/\\(?:neq|ne)/g, "≠")
      .replace(/\\(?:leq|le)/g, "≤")
      .replace(/\\(?:geq|ge)/g, "≥")
      .replace(/\\approx/g, "≈")
      .replace(/\\equiv/g, "≡")
      .replace(/\\cong/g, "≅")
      .replace(/\\sim/g, "∼")
      .replace(/\\propto/g, "∝")
      .replace(/\\(?:implies|Rightarrow)/g, "⇒")
      .replace(/\\(?:iff|Leftrightarrow)/g, "⇔")
      .replace(/\\(?:to|rightarrow)/g, "→")
      .replace(/\\subset/g, "⊂")
      .replace(/\\subseteq/g, "⊆")
      .replace(/\\notin/g, "∉")
      .replace(/\\in\b/g, "∈")
      .replace(/\\cup/g, "∪")
      .replace(/\\cap/g, "∩")
      .replace(/\\emptyset/g, "∅")
      .replace(/\\angle/g, "∠")
      .replace(/\\(?:triangle|Delta)/g, "△")
      .replace(/\\perp/g, "⊥")
      .replace(/\\parallel/g, "∥")
      .replace(/\\(?:dots|ldots|cdots)/g, "…")
      .replace(/\\infty/g, "∞")
      .replace(/\\therefore/g, "∴")
      .replace(/\\because/g, "∵")
      .replace(/\\pi\b/g, "π")
      .replace(/\\theta\b/g, "θ")
      .replace(/\\alpha\b/g, "α")
      .replace(/\\beta\b/g, "β")
      .replace(/\\gamma\b/g, "γ")
      .replace(/\\lambda\b/g, "λ")
      .replace(/\\mu\b/g, "μ")
      .replace(/\\omega\b/g, "ω")
      .replace(/\\Omega\b/g, "Ω")
      .replace(/\\rho\b/g, "ρ")
      .replace(/\\sigma\b/g, "σ")
      .replace(/\\phi\b/g, "φ")
      .replace(/\\sin\b/g, "sin")
      .replace(/\\cos\b/g, "cos")
      .replace(/\\tan\b/g, "tan")
      .replace(/\\cot\b/g, "cot")
      .replace(/\\sec\b/g, "sec")
      .replace(/\\csc\b/g, "cosec")
      .replace(/\\log\b/g, "log")
      .replace(/\^\{2\}/g, "²")
      .replace(/\^2\b/g, "²")
      .replace(/\^\{3\}/g, "³")
      .replace(/\^3\b/g, "³")
      .replace(/\^\{4\}/g, "⁴")
      .replace(/\^4\b/g, "⁴")
      .replace(/\^\{-1\}/g, "⁻¹")
      .replace(/\^\{-2\}/g, "⁻²")
      .replace(/\^\{-3\}/g, "⁻³")
      .replace(/\^\{([^{}]+)\}/g, "^($1)")
      .replace(/_\{0\}|_0\b/g, "₀")
      .replace(/_\{1\}|_1\b/g, "₁")
      .replace(/_\{2\}|_2\b/g, "₂")
      .replace(/_\{3\}|_3\b/g, "₃")
      .replace(/_\{([^{}]+)\}/g, "_($1)")
      .replace(/\\\{/g, "{")
      .replace(/\\\}/g, "}")
      .replace(/\\,/g, " ");

    return t.trim();
  };

  // Convert escaped dollar \$ first to a placeholder
  s = s.replace(/\\\$/g, "___DOLLAR___");
  // Replace $$...$$
  s = s.replace(/\$\$([\s\S]+?)\$\$/g, (_, inner) => cleanLatexInner(inner));
  // Replace inline $...$ (avoid matching across newlines)
  s = s.replace(/\$([^$\n]+?)\$/g, (_, inner) => cleanLatexInner(inner));
  s = s.replace(/___DOLLAR___/g, "$");

  return s;
}

function stripMarkdownFormatting(str: string): string {
  return formatReadableMath(str || "")
    .replace(/\*\*/g, "")
    .replace(/`/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

type GameMode = "MATCH_UP" | "RAPID_BLITZ" | "VAULT_DEFUSAL" | "TRAP_BUSTER";

interface MatchPair {
  id: string;
  leftText: string;
  rightText: string;
}

interface TrapStatement {
  id: string;
  statement: string;
  isFact: boolean;
  reason: string;
}

export function UnitGameArcade({ unit }: { unit: UnitItem }) {
  const { awardMiniGameXp } = useApp();
  const [activeGame, setActiveGame] = useState<GameMode>("MATCH_UP");
  const [completedGames, setCompletedGames] = useState<Record<string, boolean>>({});
  const [lastXpBanner, setLastXpBanner] = useState<{
    xp: number;
    label: string;
  } | null>(null);

  // Reset banner when unit or game changes
  useEffect(() => {
    setLastXpBanner(null);
  }, [unit.id, activeGame]);

  const handleGameWin = useCallback(
    (mode: GameMode, title: string) => {
      const res = awardMiniGameXp(unit.id, mode);
      setCompletedGames((prev) => ({ ...prev, [`${unit.id}:${mode}`]: true }));
      setLastXpBanner({
        xp: res.xpEarned,
        label: res.isFirstWin
          ? `${title} Cleared! +${res.xpEarned} First-Win Bonus XP Added!`
          : `${title} Practice Win! +${res.xpEarned} Revision XP Added!`,
      });
    },
    [awardMiniGameXp, unit.id]
  );

  // ============================================================================
  // EXTRACT STRUCTURED ENGLISH DATA FROM THE CURRENT UNIT
  // ============================================================================
  const allMatchPairs = useMemo<MatchPair[]>(() => {
    const pairs: MatchPair[] = [];

    // 1. Parse English vocabulary table rows if present
    for (const sec of unit.contentSections) {
      if (/vocabulary|naye shabd|terms/i.test(sec.heading)) {
        const lines = (sec.body || "").split("\n");
        for (const line of lines) {
          const t = line.trim();
          if (!t.startsWith("|") || !t.endsWith("|")) continue;
          if (/^\|[\s\-:|]+\|$/.test(t)) continue;
          const cells = t
            .slice(1, -1)
            .split("|")
            .map((c) => stripMarkdownFormatting(c));
          if (
            cells.length >= 2 &&
            cells[0] &&
            cells[1] &&
            !/^(term|shabd|word|symbol|quantity)$/i.test(cells[0])
          ) {
            pairs.push({
              id: `vocab-${pairs.length}`,
              leftText: cells[0].slice(0, 55),
              rightText: cells[1].slice(0, 110),
            });
          }
        }
      }
    }

    // 2. Supplement with checkpoint questions so every unit has at least 6 pairs
    unit.checkpointQuestions.forEach((q, idx) => {
      const correctOpt = stripMarkdownFormatting(q.options[q.correctIndex] || "");
      const cleanQ = stripMarkdownFormatting(q.question)
        .replace(/^In this topic,\s*/i, "")
        .replace(/^What is the correct meaning of\s*/i, "Meaning of ");
      if (cleanQ && correctOpt) {
        pairs.push({
          id: `qpair-${idx}`,
          leftText: cleanQ.length > 75 ? cleanQ.slice(0, 72) + "…" : cleanQ,
          rightText:
            correctOpt.length > 90 ? correctOpt.slice(0, 87) + "…" : correctOpt,
        });
      }
    });

    return pairs.slice(0, 12);
  }, [unit]);

  const trapStatements = useMemo<TrapStatement[]>(() => {
    const list: TrapStatement[] = [];

    unit.checkpointQuestions.forEach((q, idx) => {
      const qStem = stripMarkdownFormatting(q.question).replace(/\?$/, "");
      const rightAns = stripMarkdownFormatting(q.options[q.correctIndex] || "");
      const wrongIdx = (q.correctIndex + 1) % q.options.length;
      const wrongAns = stripMarkdownFormatting(q.options[wrongIdx] || "");
      const cleanExp = stripMarkdownFormatting(q.explanation);

      if (idx % 2 === 0 && rightAns) {
        list.push({
          id: `trap-${idx}-fact`,
          statement: `${qStem} ➔ ${rightAns}`,
          isFact: true,
          reason: cleanExp,
        });
      } else if (wrongAns) {
        list.push({
          id: `trap-${idx}-myth`,
          statement: `${qStem} ➔ ${wrongAns}`,
          isFact: false,
          reason: `Trap! Correct answer is "${rightAns}". ${cleanExp}`,
        });
      }
    });

    return list.slice(0, 6);
  }, [unit]);

  // ============================================================================
  // GAME 1: CONCEPT MATCH-UP STATE
  // ============================================================================
  const [matchBatchOffset, setMatchBatchOffset] = useState(0);
  const currentMatchPairs = useMemo(() => {
    if (allMatchPairs.length <= 4) return allMatchPairs;
    const start = matchBatchOffset % Math.max(1, allMatchPairs.length - 3);
    return allMatchPairs.slice(start, start + 4);
  }, [allMatchPairs, matchBatchOffset]);

  const [shuffledRightCards, setShuffledRightCards] = useState<MatchPair[]>([]);
  const [selectedLeftId, setSelectedLeftId] = useState<string | null>(null);
  const [selectedRightId, setSelectedRightId] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [wrongFlashPair, setWrongFlashPair] = useState<[string, string] | null>(
    null
  );
  const [matchCombo, setMatchCombo] = useState(1);
  const [matchScore, setMatchScore] = useState(0);

  const initMatchGame = useCallback(
    (nextOffset = 0) => {
      setMatchBatchOffset(nextOffset);
      const start =
        allMatchPairs.length <= 4
          ? 0
          : nextOffset % Math.max(1, allMatchPairs.length - 3);
      const slice = allMatchPairs.slice(start, start + 4);
      const copy = [...slice];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      setShuffledRightCards(copy);
      setSelectedLeftId(null);
      setSelectedRightId(null);
      setMatchedIds([]);
      setWrongFlashPair(null);
      setMatchCombo(1);
      setMatchScore(0);
    },
    [allMatchPairs]
  );

  useEffect(() => {
    initMatchGame(0);
  }, [unit.id, initMatchGame]);

  const handleSelectMatchCard = (side: "LEFT" | "RIGHT", id: string) => {
    if (matchedIds.includes(id)) return;

    const nextLeft = side === "LEFT" ? id : selectedLeftId;
    const nextRight = side === "RIGHT" ? id : selectedRightId;

    if (side === "LEFT") setSelectedLeftId(id);
    else setSelectedRightId(id);

    if (nextLeft && nextRight) {
      if (nextLeft === nextRight) {
        // Correct Match!
        const nextMatched = [...matchedIds, nextLeft];
        setMatchedIds(nextMatched);
        setMatchScore((s) => s + 100 * matchCombo);
        setMatchCombo((c) => c + 1);
        setSelectedLeftId(null);
        setSelectedRightId(null);

        if (nextMatched.length === currentMatchPairs.length) {
          handleGameWin("MATCH_UP", "Concept Match-Up");
        }
      } else {
        // Wrong Match
        setWrongFlashPair([nextLeft, nextRight]);
        setMatchCombo(1);
        setTimeout(() => {
          setWrongFlashPair(null);
          setSelectedLeftId(null);
          setSelectedRightId(null);
        }, 650);
      }
    }
  };

  // ============================================================================
  // GAME 2: 60-SECOND RAPID BLITZ STATE
  // ============================================================================
  const [blitzActive, setBlitzActive] = useState(false);
  const [blitzFinished, setBlitzFinished] = useState(false);
  const [blitzSeconds, setBlitzSeconds] = useState(60);
  const [blitzIdx, setBlitzIdx] = useState(0);
  const [blitzScore, setBlitzScore] = useState(0);
  const [blitzStreak, setBlitzStreak] = useState(0);
  const [blitzMaxStreak, setBlitzMaxStreak] = useState(0);
  const [blitzCorrectCount, setBlitzCorrectCount] = useState(0);
  const [blitzFeedback, setBlitzFeedback] = useState<{
    picked: number;
    isRight: boolean;
  } | null>(null);
  const [usedFreeze, setUsedFreeze] = useState(false);
  const [usedFiftyFifty, setUsedFiftyFifty] = useState(false);
  const [hiddenOptionIndices, setHiddenOptionIndices] = useState<number[]>([]);

  const blitzQuestions = useMemo(() => {
    return unit.checkpointQuestions.map((q) => ({
      ...q,
      question: stripMarkdownFormatting(q.question),
      options: q.options.map((o) => stripMarkdownFormatting(o)),
      explanation: stripMarkdownFormatting(q.explanation),
    }));
  }, [unit]);

  const startBlitz = () => {
    setBlitzActive(true);
    setBlitzFinished(false);
    setBlitzSeconds(60);
    setBlitzIdx(0);
    setBlitzScore(0);
    setBlitzStreak(0);
    setBlitzMaxStreak(0);
    setBlitzCorrectCount(0);
    setBlitzFeedback(null);
    setUsedFreeze(false);
    setUsedFiftyFifty(false);
    setHiddenOptionIndices([]);
    setLastXpBanner(null);
  };

  useEffect(() => {
    if (!blitzActive || blitzFinished) return;
    if (blitzSeconds <= 0) {
      setBlitzActive(false);
      setBlitzFinished(true);
      if (blitzCorrectCount >= 3) {
        handleGameWin("RAPID_BLITZ", "60s Rapid Blitz");
      }
      return;
    }
    const timer = setTimeout(() => {
      setBlitzSeconds((s) => s - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [blitzActive, blitzFinished, blitzSeconds, blitzCorrectCount, handleGameWin]);

  const handleBlitzAnswer = (optIdx: number) => {
    if (!blitzActive || blitzFeedback) return;
    const currentQ = blitzQuestions[blitzIdx % blitzQuestions.length];
    const isRight = optIdx === currentQ.correctIndex;

    const nextStreak = isRight ? blitzStreak + 1 : 0;
    const multiplier = Math.min(5, 1 + Math.floor(nextStreak / 2));
    const nextCorrect = isRight ? blitzCorrectCount + 1 : blitzCorrectCount;

    if (isRight) {
      setBlitzScore((s) => s + 50 * multiplier);
      setBlitzStreak(nextStreak);
      setBlitzMaxStreak((m) => Math.max(m, nextStreak));
      setBlitzCorrectCount(nextCorrect);
    } else {
      setBlitzStreak(0);
    }

    setBlitzFeedback({ picked: optIdx, isRight });

    setTimeout(() => {
      setBlitzFeedback(null);
      setHiddenOptionIndices([]);
      if (blitzIdx + 1 >= blitzQuestions.length) {
        setBlitzActive(false);
        setBlitzFinished(true);
        if (nextCorrect >= 3) {
          handleGameWin("RAPID_BLITZ", "60s Rapid Blitz");
        }
      } else {
        setBlitzIdx((i) => i + 1);
      }
    }, 850);
  };

  const triggerBlitzFiftyFifty = () => {
    if (usedFiftyFifty || !blitzActive || blitzFeedback) return;
    const currentQ = blitzQuestions[blitzIdx % blitzQuestions.length];
    const wrongIndices = [0, 1, 2, 3].filter(
      (i) => i !== currentQ.correctIndex
    );
    setHiddenOptionIndices(wrongIndices.slice(0, 2));
    setUsedFiftyFifty(true);
  };

  const triggerBlitzFreeze = () => {
    if (usedFreeze || !blitzActive) return;
    setBlitzSeconds((s) => s + 10);
    setUsedFreeze(true);
  };

  // ============================================================================
  // GAME 3: CONCEPT VAULT DEFUSAL (3 LIVES SURVIVAL)
  // ============================================================================
  const vaultQuestions = useMemo(
    () => blitzQuestions.slice(0, 5),
    [blitzQuestions]
  );
  const [vaultStage, setVaultStage] = useState(0);
  const [vaultLives, setVaultLives] = useState(3);
  const [vaultWiresStatus, setVaultWiresStatus] = useState<
    ("PENDING" | "CUT_SAFE" | "SPARKED")[]
  >(["PENDING", "PENDING", "PENDING", "PENDING", "PENDING"]);
  const [vaultSelectedOpt, setVaultSelectedOpt] = useState<number | null>(null);
  const [vaultFinished, setVaultFinished] = useState<"WON" | "LOST" | null>(
    null
  );

  const resetVaultGame = useCallback(() => {
    setVaultStage(0);
    setVaultLives(3);
    setVaultWiresStatus([
      "PENDING",
      "PENDING",
      "PENDING",
      "PENDING",
      "PENDING",
    ]);
    setVaultSelectedOpt(null);
    setVaultFinished(null);
    setLastXpBanner(null);
  }, []);

  useEffect(() => {
    resetVaultGame();
  }, [unit.id, resetVaultGame]);

  const handleCutVaultWire = (optIdx: number) => {
    if (vaultSelectedOpt !== null || vaultFinished) return;
    const currentQ = vaultQuestions[vaultStage];
    if (!currentQ) return;

    setVaultSelectedOpt(optIdx);
    const isRight = optIdx === currentQ.correctIndex;
    const nextWires = [...vaultWiresStatus];
    nextWires[vaultStage] = isRight ? "CUT_SAFE" : "SPARKED";
    setVaultWiresStatus(nextWires);

    const nextLives = isRight ? vaultLives : vaultLives - 1;
    if (!isRight) {
      setVaultLives(nextLives);
    }

    setTimeout(() => {
      if (nextLives <= 0) {
        setVaultFinished("LOST");
      } else if (vaultStage + 1 >= vaultQuestions.length) {
        setVaultFinished("WON");
        handleGameWin("VAULT_DEFUSAL", "Concept Vault Defusal");
      } else {
        setVaultStage((s) => s + 1);
        setVaultSelectedOpt(null);
      }
    }, 1400);
  };

  // ============================================================================
  // GAME 4: TRAP BUSTER (MYTH VS FACT)
  // ============================================================================
  const [trapIdx, setTrapIdx] = useState(0);
  const [trapScore, setTrapScore] = useState(0);
  const [trapChoice, setTrapChoice] = useState<boolean | null>(null);
  const [trapDone, setTrapDone] = useState(false);

  const resetTrapGame = useCallback(() => {
    setTrapIdx(0);
    setTrapScore(0);
    setTrapChoice(null);
    setTrapDone(false);
    setLastXpBanner(null);
  }, []);

  useEffect(() => {
    resetTrapGame();
  }, [unit.id, resetTrapGame]);

  const handlePickTrapOrFact = (pickedFact: boolean) => {
    if (trapChoice !== null || trapDone) return;
    const current = trapStatements[trapIdx];
    if (!current) return;

    setTrapChoice(pickedFact);
    const isCorrect = pickedFact === current.isFact;
    const nextScore = isCorrect ? trapScore + 1 : trapScore;
    if (isCorrect) setTrapScore(nextScore);
  };

  const handleNextTrapCard = () => {
    if (trapIdx + 1 >= trapStatements.length) {
      setTrapDone(true);
      if (trapScore >= 4) {
        handleGameWin("TRAP_BUSTER", "Trap Buster");
      }
    } else {
      setTrapIdx((i) => i + 1);
      setTrapChoice(null);
    }
  };

  const gameTabs: {
    mode: GameMode;
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    accent: string;
  }[] = [
    {
      mode: "MATCH_UP",
      title: "1. Concept Match-Up",
      subtitle: "Connect Terms & Meanings",
      icon: <Puzzle className="h-4 w-4" />,
      accent: "from-violet-600 to-indigo-600",
    },
    {
      mode: "RAPID_BLITZ",
      title: "2. 60s Rapid Blitz",
      subtitle: "Speed Multiplier + Lifelines",
      icon: <Zap className="h-4 w-4" />,
      accent: "from-amber-500 to-orange-600",
    },
    {
      mode: "VAULT_DEFUSAL",
      title: "3. Vault Defusal",
      subtitle: "3-Lives Wire Challenge",
      icon: <ShieldAlert className="h-4 w-4" />,
      accent: "from-emerald-600 to-teal-600",
    },
    {
      mode: "TRAP_BUSTER",
      title: "4. Trap Buster",
      subtitle: "Myth vs. Solid Fact",
      icon: <Flame className="h-4 w-4" />,
      accent: "from-rose-600 to-pink-600",
    },
  ];

  return (
    <div
      id="unit-game-arcade"
      className="scroll-mt-36 rounded-3xl border-2 border-indigo-200 bg-gradient-to-br from-indigo-950 via-slate-900 to-violet-950 text-white shadow-[0_8px_0_0_#312e81] p-5 sm:p-8 space-y-6"
    >
      {/* Arcade Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/20 border border-amber-300/40 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-amber-300">
            <Gamepad2 className="h-3.5 w-3.5" />
            <span>Interactive Concept Game Arcade • Warm-Up Before Test</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
            Play &amp; Master:{" "}
            <span className="text-amber-300">
              {stripMarkdownFormatting(unit.title)}
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-indigo-200/90 font-medium">
            Master the definitions, formulas, and exam traps of this unit through 4 bite-sized games (All questions in English • Win +15 Bonus XP per game!).
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="rounded-2xl bg-white/10 border border-white/15 px-4 py-2.5 text-center">
            <span className="block text-[10px] font-extrabold uppercase tracking-wider text-indigo-200">
              Games Cleared
            </span>
            <span className="text-lg font-black text-emerald-400">
              {
                gameTabs.filter(
                  (g) => completedGames[`${unit.id}:${g.mode}`]
                ).length
              }{" "}
              / 4 🏆
            </span>
          </div>
        </div>
      </div>

      {/* 4 Game Mode Selector Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
        {gameTabs.map((tab) => {
          const isSelected = activeGame === tab.mode;
          const isCleared = Boolean(completedGames[`${unit.id}:${tab.mode}`]);
          return (
            <button
              key={tab.mode}
              type="button"
              onClick={() => setActiveGame(tab.mode)}
              className={`rounded-2xl p-3.5 text-left transition-all cursor-pointer border-2 ${
                isSelected
                  ? `bg-gradient-to-r ${tab.accent} border-white shadow-lg scale-[1.01]`
                  : "bg-white/5 border-white/10 hover:bg-white/10 text-indigo-100"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black">
                  {tab.icon}
                  <span>{tab.title}</span>
                </span>
                {isCleared && (
                  <CheckCircle2 className="h-4 w-4 text-emerald-300 shrink-0" />
                )}
              </div>
              <p className="text-[11px] font-semibold text-white/75 mt-1 truncate">
                {tab.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Live Bonus XP Celebration Banner */}
      {lastXpBanner && (
        <div className="rounded-2xl bg-emerald-500/20 border-2 border-emerald-400 px-4 py-3 flex items-center justify-between gap-3 text-emerald-100 animate-pulse">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-black">
            <Trophy className="h-5 w-5 text-amber-300 shrink-0" />
            <span>{lastXpBanner.label}</span>
          </div>
          <span className="rounded-xl bg-emerald-400 text-slate-950 px-3 py-1 text-xs font-black shrink-0">
            +{lastXpBanner.xp} XP ⚡
          </span>
        </div>
      )}

      {/* ====================================================================
          GAME 1: CONCEPT MATCH-UP (TERM & MEANING CONNECT)
         ==================================================================== */}
      {activeGame === "MATCH_UP" && (
        <div className="rounded-2xl bg-white text-slate-900 p-5 sm:p-6 space-y-5 shadow-inner">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-violet-600">
                🧩 Game 1 • Memory &amp; Definition Matrix
              </span>
              <h4 className="text-base sm:text-lg font-extrabold text-slate-900">
                Tap a Concept on the Left, then tap its matching Meaning/Answer on the Right!
              </h4>
            </div>

            <div className="flex items-center gap-2 text-xs font-extrabold">
              <span className="rounded-xl bg-amber-50 border border-amber-200 px-3 py-1.5 text-amber-900">
                🔥 Combo: {matchCombo}x
              </span>
              <span className="rounded-xl bg-indigo-50 border border-indigo-200 px-3 py-1.5 text-indigo-900">
                ⚡ Score: {matchScore}
              </span>
              <button
                type="button"
                onClick={() => initMatchGame(matchBatchOffset + 2)}
                className="inline-flex items-center gap-1 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 px-3 py-1.5 text-slate-700 transition cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Shuffle New Set</span>
              </button>
            </div>
          </div>

          {matchedIds.length === currentMatchPairs.length &&
          currentMatchPairs.length > 0 ? (
            <div className="rounded-2xl bg-emerald-50 border-2 border-emerald-300 p-6 text-center space-y-3">
              <div className="text-4xl">🎉</div>
              <h5 className="text-lg sm:text-xl font-black text-emerald-950">
                All {currentMatchPairs.length} Concept Pairs Connected!
              </h5>
              <p className="text-xs sm:text-sm font-semibold text-emerald-800">
                Final Score: <strong>{matchScore} pts</strong> • You mastered this set of concepts!
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => initMatchGame(matchBatchOffset + 2)}
                  className="btn-3d-emerald px-5 py-2.5 text-xs font-extrabold cursor-pointer"
                >
                  Play Next Set of Pairs 🔄
                </button>
                <button
                  type="button"
                  onClick={() => setActiveGame("RAPID_BLITZ")}
                  className="btn-3d-indigo px-5 py-2.5 text-xs font-extrabold cursor-pointer"
                >
                  Next Game: 60s Rapid Blitz ⚡
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column: Terms / Concepts */}
              <div className="space-y-2.5">
                <div className="text-xs font-black uppercase tracking-wider text-slate-400 px-1">
                  Concepts / Prompts (Tap 1)
                </div>
                {currentMatchPairs.map((pair, idx) => {
                  const isMatched = matchedIds.includes(pair.id);
                  const isSelected = selectedLeftId === pair.id;
                  const isWrong = wrongFlashPair?.[0] === pair.id;

                  return (
                    <button
                      key={pair.id}
                      type="button"
                      disabled={isMatched}
                      onClick={() => handleSelectMatchCard("LEFT", pair.id)}
                      className={`w-full text-left rounded-2xl border-2 border-b-4 p-3.5 text-xs sm:text-sm font-extrabold transition flex items-center justify-between gap-2 cursor-pointer ${
                        isMatched
                          ? "border-emerald-400 bg-emerald-50 text-emerald-900 opacity-75 cursor-default"
                          : isWrong
                          ? "border-rose-500 bg-rose-50 text-rose-900 animate-bounce"
                          : isSelected
                          ? "border-violet-600 bg-violet-50 text-violet-950 ring-2 ring-violet-300"
                          : "border-slate-200 bg-slate-50/70 hover:bg-white hover:border-violet-300 text-slate-800"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white border border-slate-300 text-[11px] font-black text-violet-700">
                          {idx + 1}
                        </span>
                        <span>{pair.leftText}</span>
                      </span>
                      {isMatched && (
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Shuffled Meanings / Answers */}
              <div className="space-y-2.5">
                <div className="text-xs font-black uppercase tracking-wider text-slate-400 px-1">
                  Meanings / Matches (Tap Match)
                </div>
                {shuffledRightCards.map((pair, idx) => {
                  const isMatched = matchedIds.includes(pair.id);
                  const isSelected = selectedRightId === pair.id;
                  const isWrong = wrongFlashPair?.[1] === pair.id;

                  return (
                    <button
                      key={pair.id}
                      type="button"
                      disabled={isMatched}
                      onClick={() => handleSelectMatchCard("RIGHT", pair.id)}
                      className={`w-full text-left rounded-2xl border-2 border-b-4 p-3.5 text-xs sm:text-sm font-bold transition flex items-center justify-between gap-2 cursor-pointer ${
                        isMatched
                          ? "border-emerald-400 bg-emerald-50 text-emerald-900 opacity-75 cursor-default"
                          : isWrong
                          ? "border-rose-500 bg-rose-50 text-rose-900 animate-bounce"
                          : isSelected
                          ? "border-indigo-600 bg-indigo-50 text-indigo-950 ring-2 ring-indigo-300"
                          : "border-slate-200 bg-white hover:bg-indigo-50/40 hover:border-indigo-300 text-slate-700"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-slate-100 border border-slate-300 text-[11px] font-black text-indigo-700">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{pair.rightText}</span>
                      </span>
                      {isMatched && (
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ====================================================================
          GAME 2: 60-SECOND RAPID BLITZ (SPEED MULTIPLIER + POWER-UPS)
         ==================================================================== */}
      {activeGame === "RAPID_BLITZ" && (
        <div className="rounded-2xl bg-white text-slate-900 p-5 sm:p-6 space-y-5 shadow-inner">
          {!blitzActive && !blitzFinished ? (
            <div className="text-center py-6 space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 border-2 border-amber-300 text-3xl">
                ⚡
              </div>
              <div className="space-y-1 max-w-md mx-auto">
                <h4 className="text-lg sm:text-xl font-black text-slate-900">
                  60-Second Rapid Concept Blitz!
                </h4>
                <p className="text-xs sm:text-sm font-medium text-slate-600">
                  Answer as many unit questions as you can in 60 seconds! Build consecutive streaks for up to a <strong>5x Score Multiplier</strong> and use your <strong>50:50 Laser</strong> &amp; <strong>Time Freeze</strong> lifelines!
                </p>
              </div>
              <button
                type="button"
                onClick={startBlitz}
                className="btn-3d-amber px-6 py-3 text-sm font-black inline-flex items-center gap-2 cursor-pointer"
              >
                <Zap className="h-4 w-4" />
                <span>Launch 60s Blitz Now!</span>
              </button>
            </div>
          ) : blitzFinished ? (
            <div className="rounded-2xl bg-amber-50/80 border-2 border-amber-300 p-6 text-center space-y-4">
              <div className="text-4xl">🏁</div>
              <h4 className="text-xl font-black text-slate-900">
                Blitz Complete! Final Score: {blitzScore} pts
              </h4>
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-extrabold">
                <span className="rounded-xl bg-white border border-slate-200 px-3.5 py-2 text-emerald-700">
                  ✅ Correct: {blitzCorrectCount} / {blitzQuestions.length}
                </span>
                <span className="rounded-xl bg-white border border-slate-200 px-3.5 py-2 text-orange-700">
                  🔥 Best Streak: {blitzMaxStreak} in a row
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={startBlitz}
                  className="btn-3d-amber px-5 py-2.5 text-xs font-extrabold cursor-pointer"
                >
                  Play Blitz Again 🔄
                </button>
                <button
                  type="button"
                  onClick={() => setActiveGame("VAULT_DEFUSAL")}
                  className="btn-3d-emerald px-5 py-2.5 text-xs font-extrabold cursor-pointer"
                >
                  Next Game: Vault Defusal 💣
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              {/* Top HUD: Timer, Streak Multiplier & 2 Lifelines */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs sm:text-sm font-black border ${
                      blitzSeconds <= 15
                        ? "bg-rose-100 border-rose-300 text-rose-800 animate-pulse"
                        : "bg-slate-100 border-slate-300 text-slate-900"
                    }`}
                  >
                    <Clock className="h-4 w-4 text-indigo-600" />
                    <span>{blitzSeconds}s</span>
                  </span>

                  <span className="inline-flex items-center gap-1 rounded-xl bg-orange-100 border border-orange-300 px-3 py-1.5 text-xs font-black text-orange-900">
                    <Flame className="h-4 w-4 text-orange-600 fill-orange-500" />
                    <span>
                      Streak: {blitzStreak} (
                      {Math.min(5, 1 + Math.floor(blitzStreak / 2))}x)
                    </span>
                  </span>

                  <span className="rounded-xl bg-indigo-50 border border-indigo-200 px-3 py-1.5 text-xs font-black text-indigo-900">
                    Score: {blitzScore}
                  </span>
                </div>

                {/* Power-Ups */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={usedFreeze}
                    onClick={triggerBlitzFreeze}
                    className="inline-flex items-center gap-1 rounded-xl bg-sky-50 hover:bg-sky-100 disabled:opacity-40 border border-sky-300 px-3 py-1.5 text-xs font-extrabold text-sky-900 transition cursor-pointer"
                  >
                    <Snowflake className="h-3.5 w-3.5 text-sky-600" />
                    <span>+10s Freeze</span>
                  </button>
                  <button
                    type="button"
                    disabled={usedFiftyFifty}
                    onClick={triggerBlitzFiftyFifty}
                    className="inline-flex items-center gap-1 rounded-xl bg-purple-50 hover:bg-purple-100 disabled:opacity-40 border border-purple-300 px-3 py-1.5 text-xs font-extrabold text-purple-900 transition cursor-pointer"
                  >
                    <Scissors className="h-3.5 w-3.5 text-purple-600" />
                    <span>50:50 Laser</span>
                  </button>
                </div>
              </div>

              {/* Active Blitz Question */}
              {(() => {
                const q = blitzQuestions[blitzIdx % blitzQuestions.length];
                return (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                      <span>
                        Blitz Card #{blitzIdx + 1} of {blitzQuestions.length}
                      </span>
                      <span>English Assessment Mode</span>
                    </div>

                    <p className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                      {q.question}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {q.options.map((opt, oIdx) => {
                        if (hiddenOptionIndices.includes(oIdx)) {
                          return (
                            <div
                              key={oIdx}
                              className="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-3.5 text-xs text-slate-300 font-bold flex items-center justify-center"
                            >
                              ✂️ Eliminated by 50:50 Laser
                            </div>
                          );
                        }

                        const isPicked = blitzFeedback?.picked === oIdx;
                        const isRightOpt = oIdx === q.correctIndex;

                        let style =
                          "border-slate-200 bg-white hover:bg-indigo-50/40 hover:border-indigo-300 text-slate-800";
                        if (blitzFeedback) {
                          if (isRightOpt) {
                            style =
                              "border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-300";
                          } else if (isPicked && !blitzFeedback.isRight) {
                            style =
                              "border-rose-500 bg-rose-50 text-rose-950";
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            type="button"
                            disabled={Boolean(blitzFeedback)}
                            onClick={() => handleBlitzAnswer(oIdx)}
                            className={`rounded-2xl border-2 border-b-4 p-3.5 text-left text-xs sm:text-sm font-bold transition cursor-pointer ${style}`}
                          >
                            <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-slate-100 border border-slate-300 text-xs font-black">
                              {String.fromCharCode(65 + oIdx)}
                            </span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      )}

      {/* ====================================================================
          GAME 3: CONCEPT VAULT DEFUSAL (3-LIVES WIRE CHALLENGE)
         ==================================================================== */}
      {activeGame === "VAULT_DEFUSAL" && (
        <div className="rounded-2xl bg-white text-slate-900 p-5 sm:p-6 space-y-5 shadow-inner">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-emerald-600">
                💣 Game 3 • 5-Wire Concept Vault Defusal
              </span>
              <h4 className="text-base sm:text-lg font-extrabold text-slate-900">
                Cut all 5 security wires by choosing the right answer before losing your 3 Hearts!
              </h4>
            </div>

            {/* 3 Hearts Display */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 rounded-xl bg-rose-50 border border-rose-200 px-3 py-1.5">
                {[1, 2, 3].map((heartNum) => (
                  <Heart
                    key={heartNum}
                    className={`h-4 w-4 transition ${
                      heartNum <= vaultLives
                        ? "text-rose-600 fill-rose-500"
                        : "text-slate-300"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={resetVaultGame}
                className="inline-flex items-center gap-1 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 px-3 py-1.5 text-xs font-extrabold text-slate-700 cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset Vault</span>
              </button>
            </div>
          </div>

          {/* Visual 5-Wire Vault Status Bar */}
          <div className="grid grid-cols-5 gap-2">
            {vaultWiresStatus.map((status, idx) => {
              const wireColors = [
                "border-rose-400 bg-rose-50 text-rose-900",
                "border-sky-400 bg-sky-50 text-sky-900",
                "border-amber-400 bg-amber-50 text-amber-900",
                "border-emerald-400 bg-emerald-50 text-emerald-900",
                "border-violet-400 bg-violet-50 text-violet-900",
              ];
              return (
                <div
                  key={idx}
                  className={`rounded-xl border-2 p-2.5 text-center text-xs font-black transition ${
                    status === "CUT_SAFE"
                      ? "border-emerald-500 bg-emerald-100 text-emerald-900"
                      : status === "SPARKED"
                      ? "border-rose-500 bg-rose-100 text-rose-900"
                      : idx === vaultStage
                      ? `${wireColors[idx]} ring-2 ring-indigo-500`
                      : "border-slate-200 bg-slate-50 text-slate-400"
                  }`}
                >
                  <div className="text-[10px] uppercase tracking-wider">
                    Wire #{idx + 1}
                  </div>
                  <div className="mt-0.5">
                    {status === "CUT_SAFE"
                      ? "✂️ Defused"
                      : status === "SPARKED"
                      ? "⚡ Sparked"
                      : idx === vaultStage
                      ? "🔓 Active"
                      : "🔒 Locked"}
                  </div>
                </div>
              );
            })}
          </div>

          {vaultFinished === "WON" ? (
            <div className="rounded-2xl bg-emerald-50 border-2 border-emerald-300 p-6 text-center space-y-3">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-white">
                <Unlock className="h-7 w-7" />
              </div>
              <h5 className="text-xl font-black text-emerald-950">
                Concept Vault Unlocked! You Survived with {vaultLives} ❤️ Left!
              </h5>
              <p className="text-xs sm:text-sm font-semibold text-emerald-800">
                Outstanding precision! You defused all 5 stages of {stripMarkdownFormatting(unit.title)}.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={resetVaultGame}
                  className="btn-3d-emerald px-5 py-2.5 text-xs font-extrabold cursor-pointer"
                >
                  Play Vault Again 🔄
                </button>
                <button
                  type="button"
                  onClick={() => setActiveGame("TRAP_BUSTER")}
                  className="btn-3d-indigo px-5 py-2.5 text-xs font-extrabold cursor-pointer"
                >
                  Next Game: Trap Buster 🚨
                </button>
              </div>
            </div>
          ) : vaultFinished === "LOST" ? (
            <div className="rounded-2xl bg-rose-50 border-2 border-rose-300 p-6 text-center space-y-3">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-500 text-white">
                <Lock className="h-7 w-7" />
              </div>
              <h5 className="text-xl font-black text-rose-950">
                Vault Locked! All 3 Hearts Lost!
              </h5>
              <p className="text-xs sm:text-sm font-semibold text-rose-800">
                No worries! Review the hints and try cutting the 5 wires again.
              </p>
              <button
                type="button"
                onClick={resetVaultGame}
                className="btn-3d-amber px-5 py-2.5 text-xs font-extrabold cursor-pointer"
              >
                Retry Vault Defusal 🔄
              </button>
            </div>
          ) : (
            (() => {
              const q = vaultQuestions[vaultStage];
              if (!q) return null;
              return (
                <div className="space-y-4">
                  <p className="text-base sm:text-lg font-extrabold text-slate-900">
                    Wire #{vaultStage + 1}: {q.question}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {q.options.map((opt, oIdx) => {
                      const isPicked = vaultSelectedOpt === oIdx;
                      const isRight = oIdx === q.correctIndex;
                      let style =
                        "border-slate-200 bg-white hover:bg-emerald-50/40 hover:border-emerald-400 text-slate-800";
                      if (vaultSelectedOpt !== null) {
                        if (isRight) {
                          style =
                            "border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-300";
                        } else if (isPicked) {
                          style = "border-rose-500 bg-rose-50 text-rose-950";
                        }
                      }
                      return (
                        <button
                          key={oIdx}
                          type="button"
                          disabled={vaultSelectedOpt !== null}
                          onClick={() => handleCutVaultWire(oIdx)}
                          className={`rounded-2xl border-2 border-b-4 p-3.5 text-left text-xs sm:text-sm font-bold transition cursor-pointer ${style}`}
                        >
                          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-slate-100 border border-slate-300 text-xs font-black">
                            ✂️
                          </span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {vaultSelectedOpt !== null && (
                    <div className="rounded-xl bg-slate-100 border border-slate-300 p-3 text-xs font-bold text-slate-800">
                      💡 <strong>Vault Intel:</strong> {q.explanation}
                    </div>
                  )}
                </div>
              );
            })()
          )}
        </div>
      )}

      {/* ====================================================================
          GAME 4: TRAP BUSTER (MYTH VS. SOLID FACT)
         ==================================================================== */}
      {activeGame === "TRAP_BUSTER" && (
        <div className="rounded-2xl bg-white text-slate-900 p-5 sm:p-6 space-y-5 shadow-inner">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-rose-600">
                🚨 Game 4 • Exam Trap Buster (Myth vs. Fact)
              </span>
              <h4 className="text-base sm:text-lg font-extrabold text-slate-900">
                Spot whether the statement below is a Solid Fact or an Exam Trap!
              </h4>
            </div>
            <div className="flex items-center gap-2 text-xs font-extrabold">
              <span className="rounded-xl bg-rose-50 border border-rose-200 px-3 py-1.5 text-rose-900">
                Card {Math.min(trapIdx + 1, trapStatements.length)} /{" "}
                {trapStatements.length}
              </span>
              <span className="rounded-xl bg-emerald-50 border border-emerald-200 px-3 py-1.5 text-emerald-900">
                Score: {trapScore}
              </span>
            </div>
          </div>

          {trapDone ? (
            <div className="rounded-2xl bg-rose-50/70 border-2 border-rose-300 p-6 text-center space-y-3">
              <div className="text-4xl">🕵️‍♂️</div>
              <h5 className="text-xl font-black text-slate-900">
                Trap Buster Complete! You Scored {trapScore} /{" "}
                {trapStatements.length}!
              </h5>
              <p className="text-xs sm:text-sm font-semibold text-slate-600">
                You are now ready to tackle the 100-Mark Unit Practice Test below without falling for common traps!
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={resetTrapGame}
                  className="btn-3d-amber px-5 py-2.5 text-xs font-extrabold cursor-pointer"
                >
                  Replay Trap Buster 🔄
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("unit-practice-test");
                    if (el)
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="btn-3d-emerald px-5 py-2.5 text-xs font-extrabold cursor-pointer"
                >
                  Jump to Unit Practice Test 🎯
                </button>
              </div>
            </div>
          ) : (
            (() => {
              const current = trapStatements[trapIdx];
              if (!current) return null;
              const isCorrectPick =
                trapChoice !== null && trapChoice === current.isFact;

              return (
                <div className="space-y-4">
                  <div className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-5 text-center space-y-2">
                    <span className="inline-block rounded-lg bg-indigo-100 text-indigo-800 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider">
                      Statement #{trapIdx + 1}
                    </span>
                    <p className="text-base sm:text-lg font-black text-slate-900 leading-relaxed">
                      &ldquo;{current.statement}&rdquo;
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      disabled={trapChoice !== null}
                      onClick={() => handlePickTrapOrFact(true)}
                      className={`rounded-2xl border-2 border-b-4 p-4 text-sm font-black transition flex items-center justify-center gap-2 cursor-pointer ${
                        trapChoice !== null
                          ? current.isFact
                            ? "border-emerald-500 bg-emerald-50 text-emerald-900"
                            : trapChoice === true
                            ? "border-rose-500 bg-rose-50 text-rose-900"
                            : "border-slate-200 bg-slate-50 text-slate-400"
                          : "border-emerald-300 bg-emerald-50/60 hover:bg-emerald-100 text-emerald-950"
                      }`}
                    >
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                      <span>✅ SOLID FACT (True)</span>
                    </button>

                    <button
                      type="button"
                      disabled={trapChoice !== null}
                      onClick={() => handlePickTrapOrFact(false)}
                      className={`rounded-2xl border-2 border-b-4 p-4 text-sm font-black transition flex items-center justify-center gap-2 cursor-pointer ${
                        trapChoice !== null
                          ? !current.isFact
                            ? "border-emerald-500 bg-emerald-50 text-emerald-900"
                            : trapChoice === false
                            ? "border-rose-500 bg-rose-50 text-rose-900"
                            : "border-slate-200 bg-slate-50 text-slate-400"
                          : "border-rose-300 bg-rose-50/60 hover:bg-rose-100 text-rose-950"
                      }`}
                    >
                      <XCircle className="h-5 w-5 text-rose-600" />
                      <span>🚨 EXAM TRAP (Myth / False)</span>
                    </button>
                  </div>

                  {trapChoice !== null && (
                    <div
                      className={`rounded-2xl border-2 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        isCorrectPick
                          ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                          : "bg-rose-50 border-rose-300 text-rose-950"
                      }`}
                    >
                      <div className="text-xs sm:text-sm font-bold leading-relaxed">
                        <strong>
                          {isCorrectPick
                            ? "🎯 Spot On! "
                            : "❌ Caught by the Trap! "}
                        </strong>
                        {current.reason}
                      </div>
                      <button
                        type="button"
                        onClick={handleNextTrapCard}
                        className="btn-3d-indigo px-4 py-2 text-xs font-black shrink-0 inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Next Card</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })()
          )}
        </div>
      )}
    </div>
  );
}
