"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  BoardType,
  ClassGrade,
  ContentLanguage,
  INITIAL_CONTESTS,
  INITIAL_MODULES,
  LearningModule,
  QuizContest,
  RANK_TIERS,
  RankTier,
} from "./mock-data";
import { supabase, isSupabaseConfigured } from "./supabase";

export type CreditPlanType = "ONE_DAY" | "WEEKLY" | "MONTHLY" | "COMPREHENSIVE";

export const WELCOME_CREDITS = 300;
export const CHAPTER_UNLOCK_COST = 100;
export const CONTEST_CREDIT_COSTS: Record<"DAILY" | "WEEKLY" | "MONTHLY", number> = {
  DAILY: 20,
  WEEKLY: 50,
  MONTHLY: 100,
};
export const CREDIT_PACK_CREDITS: Record<
  CreditPlanType,
  { credits: number; priceInr: number; label: string; isFullClassUnlock?: boolean }
> = {
  ONE_DAY: {
    credits: 400,
    priceInr: 199,
    label: "🪙 Starter Pack (400 Credits • 4 Chapters)",
  },
  WEEKLY: {
    credits: 1200,
    priceInr: 499,
    label: "📘 Subject Pack (1,200 Credits • 12 Chapters)",
  },
  MONTHLY: {
    credits: 2600,
    priceInr: 999,
    label: "💎 Scholar Pack (2,600 Credits • 26 Chapters)",
  },
  COMPREHENSIVE: {
    credits: 1000,
    priceInr: 1999,
    label: "👑 Comprehensive Full-Class Pack (All ~45 Class Chapters + 1,000 Test Credits)",
    isFullClassUnlock: true,
  },
};

export interface CreditTransaction {
  id: string;
  type:
    | "WELCOME_BONUS"
    | "PACK_PURCHASE"
    | "CHAPTER_UNLOCK"
    | "CONTEST_ENTRY"
    | "GOODIE_REWARD"
    | "ADMIN_REFUND";
  amount: number; // positive for credit, negative for debit
  balanceAfter: number;
  description: string;
  date?: string;
  createdAt?: string;
}

export interface StudentProfile {
  id?: string;
  email?: string;
  phone?: string;
  name: string;
  username: string;
  avatar: string;
  board: "CBSE" | "ICSE";
  classGrade: ClassGrade;
  preferredLanguage?: ContentLanguage;
  hasCompletedOnboarding?: boolean;
  city: string;
  school: string;
  role?: "student" | "admin";
  xp: number;
  rating: number;
  streak: number;
  lastStreakDate?: string;
  lastDailyChallengeDate?: string;
  dailyTrickWins?: number;
  credits: number;
  unlockedModuleIds: string[];
  unlockedClassGrades?: ClassGrade[];
  creditTransactions: CreditTransaction[];
  hasProPass: boolean;
  proPassPlan?: CreditPlanType;
  proPassPurchasedAt?: string;
  dailyPassesRemaining?: number;
  competitionPassesRemaining?: number;
  completedUnitIds: string[];
  earnedBadges: { name: string; emoji: string; date: string }[];
  unlockedContestIds: string[];
  contestHistory: {
    contestId: string;
    title: string;
    score: number;
    total: number;
    ratingDelta: number;
    xpEarned: number;
    date: string;
  }[];
}

export interface SignUpPayload {
  email: string;
  password: string;
  fullName: string;
  username?: string;
  phone?: string;
  board: "CBSE" | "ICSE";
  classGrade: ClassGrade;
  preferredLanguage?: ContentLanguage;
  hasCompletedOnboarding?: boolean;
  city: string;
  school: string;
}

export interface ContentReport {
  id: string;
  moduleSlug: string;
  chapterTitle: string;
  unitTitle: string;
  targetLabel: string;
  issueType: "TYPO" | "WRONG_ANSWER_KEY" | "FORMULA_CLARIFICATION" | "OTHER";
  description: string;
  reportedBy: string;
  status: "OPEN" | "RESOLVED_BONUS_GRANTED";
  createdAt: string;
}

export type SupportCaseCategory =
  | "PAYMENT_ISSUE"
  | "CHAPTER_UNLOCK"
  | "TEST_TECHNICAL"
  | "GRIEVANCE_PRIVACY";

export interface SupportCase {
  id: string;
  caseNumber: string; // e.g., VL-CASE-849201
  category: SupportCaseCategory;
  subject: string;
  description: string;
  studentName: string;
  studentEmail: string;
  studentPhone: string;
  studentUsername: string;
  board: "CBSE" | "ICSE";
  classGrade: ClassGrade;
  paymentReference?: string; // Razorpay Payment ID / Order ID / UPI Ref
  relatedChapterOrContest?: string; // Chapter title or Contest name
  priority: "HIGH" | "MEDIUM" | "URGENT_GRIEVANCE";
  status: "OPEN" | "IN_REVIEW" | "RESOLVED" | "RESOLVED_CREDITED";
  resolutionNote?: string;
  creditsRefunded?: number;
  salesforceSynced?: boolean;
  createdAt: string;
  updatedAt?: string;
}

interface CelebrationEvent {
  title: string;
  subtitle: string;
  xpEarned: number;
  badgeEmoji?: string;
}

interface AppContextType {
  profile: StudentProfile;
  isAuthenticated: boolean;
  authLoading: boolean;
  currentRank: RankTier;
  nextRank: RankTier | null;
  modules: LearningModule[];
  contests: QuizContest[];
  contentReports: ContentReport[];
  supportCases: SupportCase[];
  selectedBoardFilter: BoardType;
  selectedClassFilter: ClassGrade | "ALL";
  contentLanguage: ContentLanguage;
  celebration: CelebrationEvent | null;
  setSelectedBoardFilter: (b: BoardType) => void;
  setSelectedClassFilter: (c: ClassGrade | "ALL") => void;
  setContentLanguage: (lang: ContentLanguage) => void;
  updateProfileBoardAndClass: (
    board: "CBSE" | "ICSE",
    grade: ClassGrade,
    language?: ContentLanguage
  ) => void;
  checkUsernameAvailability: (
    rawUsername: string
  ) => Promise<{
    available: boolean;
    normalized: string;
    error?: string;
    suggestions?: string[];
  }>;
  completeOnboardingPreferences: (
    classGrade: ClassGrade,
    language: ContentLanguage,
    username: string
  ) => Promise<{ ok: boolean; error?: string }>;
  updateUniqueUsername: (
    rawUsername: string
  ) => Promise<{ ok: boolean; error?: string; username?: string }>;
  updateProfilePhone: (
    phone: string
  ) => Promise<{ ok: boolean; error?: string }>;
  completeUnit: (
    moduleId: string,
    unitId: string,
    xpReward: number,
    answers?: Record<string, number>,
    wrongAttempts?: Record<string, number>
  ) => void;
  unlockContestSingle: (contestId: string) => void;
  isChapterFreeStarter: (moduleIdOrSlug: string) => boolean;
  isChapterUnlocked: (moduleIdOrSlug: string) => boolean;
  getAlreadyUnlockedPaidChaptersCount: (targetClassGrade: ClassGrade) => number;
  unlockChapterWithCredits: (
    moduleIdOrSlug: string
  ) => { ok: boolean; error?: string; remainingCredits?: number };
  hasPlayedDailyTrickToday: boolean;
  showDailyTrickModal: boolean;
  setShowDailyTrickModal: (open: boolean) => void;
  submitDailyTrickAnswer: (
    isCorrect: boolean,
    questionTitle: string
  ) => { creditsEarned: number; newStreak: number };
  getContestCreditCost: (contestType: "DAILY" | "WEEKLY" | "MONTHLY") => number;
  activateProPass: (
    plan: CreditPlanType,
    autoUnlockContestId?: string,
    autoUnlockModuleId?: string,
    targetClassGrade?: ClassGrade
  ) => void;
  consumePassForContest: (
    contestId: string,
    contestType: "DAILY" | "WEEKLY" | "MONTHLY"
  ) => boolean;
  refundOrGrantCredits: (
    amount: number,
    reason: string,
    targetEmailOrUsername?: string
  ) => void;
  submitContestResult: (
    contestId: string,
    score: number,
    total: number,
    xpReward: number,
    answers?: Record<string, number>
  ) => void;
  addCustomModule: (mod: LearningModule) => void;
  addCustomContest: (contest: QuizContest) => void;
  submitContentReport: (report: Omit<ContentReport, "id" | "reportedBy" | "status" | "createdAt">) => void;
  resolveContentReport: (reportId: string) => void;
  submitSupportCase: (
    payload: {
      category: SupportCaseCategory;
      subject: string;
      description: string;
      studentName?: string;
      studentEmail?: string;
      studentPhone?: string;
      paymentReference?: string;
      relatedChapterOrContest?: string;
    }
  ) => Promise<{ ok: boolean; caseItem: SupportCase; salesforceSynced?: boolean }>;
  resolveSupportCase: (
    caseId: string,
    resolutionNote: string,
    creditsToRefund?: number
  ) => void;
  dismissCelebration: () => void;
  signUpUser: (payload: SignUpPayload) => Promise<{ ok: boolean; error?: string; message?: string }>;
  signInUser: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  signInWithGoogle: (redirectPath?: string) => Promise<{ ok: boolean; error?: string }>;
  signOutUser: () => Promise<void>;
}

const DEFAULT_PROFILE: StudentProfile = {
  name: "Guest Scholar",
  username: "@guest_scholar",
  phone: "",
  avatar: "🚀",
  board: "CBSE",
  classGrade: 9,
  city: "New Delhi",
  school: "VidyaLila Academy",
  role: "student",
  xp: 0,
  rating: 1500,
  streak: 0,
  credits: WELCOME_CREDITS,
  unlockedModuleIds: [],
  creditTransactions: [
    {
      id: "tx-welcome-default",
      type: "WELCOME_BONUS",
      amount: WELCOME_CREDITS,
      balanceAfter: WELCOME_CREDITS,
      description: "🎁 Welcome Scholar Bonus (+300 Free Vidya Credits)",
      date: "On Joining",
    },
  ],
  hasProPass: false,
  dailyPassesRemaining: 0,
  competitionPassesRemaining: 0,
  completedUnitIds: [],
  earnedBadges: [],
  unlockedContestIds: [],
  contestHistory: [],
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<StudentProfile>(DEFAULT_PROFILE);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authLoading, setAuthLoading] = useState<boolean>(true);
  const [modules, setModules] = useState<LearningModule[]>(INITIAL_MODULES);
  const [contests, setContests] = useState<QuizContest[]>(INITIAL_CONTESTS);
  const [contentReports, setContentReports] = useState<ContentReport[]>([]);
  const [supportCases, setSupportCases] = useState<SupportCase[]>([]);
  const [selectedBoardFilter, setSelectedBoardFilter] = useState<BoardType>("BOTH");
  const [selectedClassFilter, setSelectedClassFilter] = useState<ClassGrade | "ALL">("ALL");
  const [contentLanguage, setContentLanguageState] = useState<ContentLanguage>("HINGLISH");
  const [celebration, setCelebration] = useState<CelebrationEvent | null>(null);
  const [showDailyTrickModal, setShowDailyTrickModal] = useState<boolean>(false);

  const getTodayIstDate = (): string => {
    try {
      return new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(new Date());
    } catch {
      return new Date().toISOString().slice(0, 10);
    }
  };

  const getYesterdayIstDate = (): string => {
    try {
      const d = new Date(Date.now() - 24 * 60 * 60 * 1000);
      return new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(d);
    } catch {
      return new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    }
  };

  // Helper to check local onboarding map for a user ID or email
  const getLocalOnboardingRecord = (
    userId?: string,
    email?: string
  ): {
    completed: boolean;
    username?: string;
    classGrade?: ClassGrade;
    preferredLanguage?: ContentLanguage;
  } | null => {
    try {
      const raw = localStorage.getItem("vidyalila_onboarded_users_v1");
      if (!raw) return null;
      const map = JSON.parse(raw);
      return (
        (userId && map[userId]) ||
        (email && map[email.toLowerCase()]) ||
        null
      );
    } catch {
      return null;
    }
  };

  const saveLocalOnboardingRecord = (
    userId: string | undefined,
    email: string | undefined,
    classGrade: ClassGrade,
    preferredLanguage: ContentLanguage,
    username?: string
  ) => {
    try {
      const raw = localStorage.getItem("vidyalila_onboarded_users_v1");
      const map = raw ? JSON.parse(raw) : {};
      const existing =
        (userId && map[userId]) ||
        (email && map[email.toLowerCase()]) ||
        {};
      const entry = {
        ...existing,
        completed: true,
        classGrade,
        preferredLanguage,
        ...(username ? { username } : {}),
      };
      if (userId) map[userId] = entry;
      if (email) map[email.toLowerCase()] = entry;
      localStorage.setItem("vidyalila_onboarded_users_v1", JSON.stringify(map));
    } catch {
      // ignore
    }
  };

  // Append-only Permanent Chapter Unlock Registry — strictly keyed per signed-in user account
  // so that once a signed-in user unlocks a chapter with credits, it stays unlocked forever for their account.
  const getAccountKeys = (
    userId?: string,
    email?: string,
    username?: string
  ): string[] => {
    const cleanUser =
      username && username.toLowerCase() !== "@guest_scholar"
        ? username.toLowerCase()
        : undefined;
    return [userId, email?.toLowerCase(), cleanUser].filter(Boolean) as string[];
  };

  const getPermanentUnlocks = (
    userId?: string,
    email?: string,
    username?: string
  ): { moduleIds: string[]; classGrades: ClassGrade[] } => {
    try {
      const keys = getAccountKeys(userId, email, username);
      if (keys.length === 0) return { moduleIds: [], classGrades: [] };
      const raw = localStorage.getItem("vidyalila_permanent_unlocked_v1");
      if (!raw) return { moduleIds: [], classGrades: [] };
      const map = JSON.parse(raw);

      const modSet = new Set<string>();
      const clsSet = new Set<ClassGrade>();
      for (const k of keys) {
        const rec = map[k];
        if (rec) {
          if (Array.isArray(rec.moduleIds)) {
            rec.moduleIds.forEach((id: string) => modSet.add(id));
          }
          if (Array.isArray(rec.classGrades)) {
            rec.classGrades.forEach((c: ClassGrade) => clsSet.add(c));
          }
        }
      }
      return {
        moduleIds: Array.from(modSet),
        classGrades: Array.from(clsSet),
      };
    } catch {
      return { moduleIds: [], classGrades: [] };
    }
  };

  const recordPermanentUnlocks = (
    moduleIds: string[] = [],
    classGrades: ClassGrade[] = [],
    userId?: string,
    email?: string,
    username?: string
  ) => {
    if (moduleIds.length === 0 && classGrades.length === 0) return;
    try {
      const keys = getAccountKeys(userId, email, username);
      if (keys.length === 0) return;
      const raw = localStorage.getItem("vidyalila_permanent_unlocked_v1");
      const map = raw ? JSON.parse(raw) : {};

      for (const k of keys) {
        const existing = map[k] || { moduleIds: [], classGrades: [] };
        map[k] = {
          moduleIds: Array.from(
            new Set([...(existing.moduleIds || []), ...moduleIds])
          ),
          classGrades: Array.from(
            new Set([...(existing.classGrades || []), ...classGrades])
          ),
        };
      }
      localStorage.setItem(
        "vidyalila_permanent_unlocked_v1",
        JSON.stringify(map)
      );
    } catch {
      // ignore
    }
  };

  // Persistent local student vault store keyed strictly by signed-in user ID, email, and username
  const getLocalCreditWallet = (
    userId?: string,
    email?: string,
    username?: string
  ): {
    credits: number;
    unlockedModuleIds: string[];
    unlockedClassGrades?: ClassGrade[];
    unlockedContestIds?: string[];
    creditTransactions: CreditTransaction[];
    completedUnitIds?: string[];
    xp?: number;
    streak?: number;
    lastStreakDate?: string;
    lastDailyChallengeDate?: string;
    dailyTrickWins?: number;
    phone?: string;
    earnedBadges?: StudentProfile["earnedBadges"];
    contestHistory?: StudentProfile["contestHistory"];
  } | null => {
    try {
      const keys = getAccountKeys(userId, email, username);
      if (keys.length === 0) return null;
      const raw = localStorage.getItem("vidyalila_credit_wallets_v1");
      if (!raw) return null;
      const map = JSON.parse(raw);
      for (const k of keys) {
        if (map[k]) return map[k];
      }
      return null;
    } catch {
      return null;
    }
  };

  const saveLocalCreditWallet = (p: StudentProfile) => {
    try {
      const keys = getAccountKeys(p.id, p.email, p.username);
      if (keys.length === 0) return;
      const raw = localStorage.getItem("vidyalila_credit_wallets_v1");
      const map = raw ? JSON.parse(raw) : {};
      let existing = null;
      for (const k of keys) {
        if (map[k]) {
          existing = map[k];
          break;
        }
      }
      const perm = getPermanentUnlocks(p.id, p.email, p.username);

      const mergedModules = Array.from(
        new Set([
          ...(Array.isArray(existing?.unlockedModuleIds)
            ? existing.unlockedModuleIds
            : []),
          ...(Array.isArray(p.unlockedModuleIds) ? p.unlockedModuleIds : []),
          ...perm.moduleIds,
        ])
      );

      const mergedClasses = Array.from(
        new Set([
          ...(Array.isArray(existing?.unlockedClassGrades)
            ? existing.unlockedClassGrades
            : []),
          ...(Array.isArray(p.unlockedClassGrades) ? p.unlockedClassGrades : []),
          ...perm.classGrades,
        ])
      ) as ClassGrade[];

      const mergedContests = Array.from(
        new Set([
          ...(Array.isArray(existing?.unlockedContestIds)
            ? existing.unlockedContestIds
            : []),
          ...(Array.isArray(p.unlockedContestIds) ? p.unlockedContestIds : []),
        ])
      );

      const mergedCompletedUnits = Array.from(
        new Set([
          ...(Array.isArray(existing?.completedUnitIds)
            ? existing.completedUnitIds
            : []),
          ...(Array.isArray(p.completedUnitIds) ? p.completedUnitIds : []),
        ])
      );

      recordPermanentUnlocks(
        mergedModules,
        mergedClasses,
        p.id,
        p.email,
        p.username
      );

      const entry = {
        credits:
          typeof p.credits === "number"
            ? p.credits
            : typeof existing?.credits === "number"
            ? existing.credits
            : WELCOME_CREDITS,
        unlockedModuleIds: mergedModules,
        unlockedClassGrades: mergedClasses,
        unlockedContestIds: mergedContests,
        completedUnitIds: mergedCompletedUnits,
        xp: Math.max(
          typeof p.xp === "number" ? p.xp : 0,
          typeof existing?.xp === "number" ? existing.xp : 0
        ),
        streak: Math.max(
          typeof p.streak === "number" ? p.streak : 1,
          typeof existing?.streak === "number" ? existing.streak : 1
        ),
        lastStreakDate: p.lastStreakDate || existing?.lastStreakDate,
        lastDailyChallengeDate:
          p.lastDailyChallengeDate || existing?.lastDailyChallengeDate,
        dailyTrickWins: Math.max(
          p.dailyTrickWins || 0,
          existing?.dailyTrickWins || 0
        ),
        phone: p.phone || existing?.phone || "",
        earnedBadges:
          Array.isArray(p.earnedBadges) && p.earnedBadges.length > 0
            ? p.earnedBadges
            : existing?.earnedBadges || [],
        contestHistory:
          Array.isArray(p.contestHistory) && p.contestHistory.length > 0
            ? p.contestHistory
            : existing?.contestHistory || [],
        creditTransactions:
          Array.isArray(p.creditTransactions) && p.creditTransactions.length > 0
            ? p.creditTransactions
            : Array.isArray(existing?.creditTransactions) &&
              existing.creditTransactions.length > 0
            ? existing.creditTransactions
            : DEFAULT_PROFILE.creditTransactions,
      };
      for (const k of keys) {
        map[k] = entry;
      }
      localStorage.setItem("vidyalila_credit_wallets_v1", JSON.stringify(map));
    } catch {
      // ignore
    }
  };

  const hydrateCreditWallet = (
    raw: StudentProfile,
    meta?: Record<string, unknown>
  ): StudentProfile => {
    const savedWallet = getLocalCreditWallet(raw.id, raw.email, raw.username);
    const perm = getPermanentUnlocks(raw.id, raw.email, raw.username);
    const legacyConvertedCredits =
      (raw.dailyPassesRemaining || 0) * 20 +
      (raw.competitionPassesRemaining || 0) * 50;

    const metaCredits =
      typeof meta?.vidya_credits === "number" ? meta.vidya_credits : undefined;

    const resolvedCredits =
      typeof savedWallet?.credits === "number"
        ? savedWallet.credits
        : typeof metaCredits === "number"
        ? metaCredits
        : typeof raw.credits === "number"
        ? raw.credits
        : WELCOME_CREDITS + legacyConvertedCredits;

    const metaUnlockedModules = Array.isArray(meta?.unlocked_module_ids)
      ? (meta.unlocked_module_ids as string[])
      : [];

    const resolvedUnlockedModules = Array.from(
      new Set([
        ...(Array.isArray(raw.unlockedModuleIds) ? raw.unlockedModuleIds : []),
        ...(Array.isArray(savedWallet?.unlockedModuleIds)
          ? savedWallet.unlockedModuleIds
          : []),
        ...perm.moduleIds,
        ...metaUnlockedModules,
      ])
    );

    const metaUnlockedClasses = Array.isArray(meta?.unlocked_class_grades)
      ? (meta.unlocked_class_grades as ClassGrade[])
      : [];

    const resolvedUnlockedClasses = Array.from(
      new Set([
        ...(Array.isArray(raw.unlockedClassGrades)
          ? raw.unlockedClassGrades
          : []),
        ...(Array.isArray(savedWallet?.unlockedClassGrades)
          ? savedWallet.unlockedClassGrades
          : []),
        ...perm.classGrades,
        ...metaUnlockedClasses,
      ])
    ) as ClassGrade[];

    recordPermanentUnlocks(
      resolvedUnlockedModules,
      resolvedUnlockedClasses,
      raw.id,
      raw.email,
      raw.username
    );

    const resolvedUnlockedContests = Array.from(
      new Set([
        ...(Array.isArray(raw.unlockedContestIds) ? raw.unlockedContestIds : []),
        ...(Array.isArray(savedWallet?.unlockedContestIds)
          ? savedWallet.unlockedContestIds
          : []),
      ])
    );

    const resolvedTransactions =
      Array.isArray(savedWallet?.creditTransactions) &&
      savedWallet.creditTransactions.length > 0
        ? savedWallet.creditTransactions
        : Array.isArray(raw.creditTransactions) &&
          raw.creditTransactions.length > 0
        ? raw.creditTransactions
        : DEFAULT_PROFILE.creditTransactions;

    const resolvedCompletedUnits = Array.from(
      new Set([
        ...(Array.isArray(raw.completedUnitIds) ? raw.completedUnitIds : []),
        ...(Array.isArray(savedWallet?.completedUnitIds)
          ? savedWallet.completedUnitIds
          : []),
      ])
    );

    const resolvedXp = Math.max(
      typeof raw.xp === "number" ? raw.xp : 0,
      typeof savedWallet?.xp === "number" ? savedWallet.xp : 0
    );

    const resolvedStreak = Math.max(
      typeof raw.streak === "number" ? raw.streak : 1,
      typeof savedWallet?.streak === "number" ? savedWallet.streak : 1
    );

    return {
      ...raw,
      phone: raw.phone || savedWallet?.phone || "",
      xp: resolvedXp,
      streak: resolvedStreak,
      lastStreakDate: raw.lastStreakDate || savedWallet?.lastStreakDate,
      lastDailyChallengeDate:
        raw.lastDailyChallengeDate || savedWallet?.lastDailyChallengeDate,
      dailyTrickWins: Math.max(
        raw.dailyTrickWins || 0,
        savedWallet?.dailyTrickWins || 0
      ),
      completedUnitIds: resolvedCompletedUnits,
      credits: resolvedCredits,
      unlockedModuleIds: resolvedUnlockedModules,
      unlockedClassGrades: resolvedUnlockedClasses,
      unlockedContestIds: resolvedUnlockedContests,
      creditTransactions: resolvedTransactions,
      hasProPass: resolvedCredits > 0 || resolvedUnlockedClasses.length > 0,
    };
  };

  const checkUsernameAvailability = async (
    rawUsername: string
  ): Promise<{
    available: boolean;
    normalized: string;
    error?: string;
    suggestions?: string[];
  }> => {
    const cleaned = (rawUsername || "").trim().replace(/^@+/, "").toLowerCase();
    const normalized = `@${cleaned}`;

    if (!cleaned || cleaned.length < 3 || cleaned.length > 20) {
      return {
        available: false,
        normalized,
        error: "Username must be between 3 and 20 characters long.",
      };
    }
    if (!/^[a-z0-9_]+$/.test(cleaned)) {
      return {
        available: false,
        normalized,
        error:
          "Username can only contain lowercase letters (a-z), numbers (0-9), and underscores (_).",
      };
    }

    // 1. Check local users & onboarded handles first
    try {
      const rawUsers = localStorage.getItem("vidyalila_local_users_v1");
      if (rawUsers) {
        const users: Record<string, { profile: StudentProfile }> =
          JSON.parse(rawUsers);
        for (const [userEmail, rec] of Object.entries(users)) {
          if (
            rec.profile?.username?.toLowerCase() === normalized &&
            rec.profile?.id !== profile.id &&
            userEmail.toLowerCase() !== (profile.email || "").toLowerCase()
          ) {
            return {
              available: false,
              normalized,
              error: `Username ${normalized} is already taken. Please choose another unique username.`,
              suggestions: [
                `@${cleaned}_9`,
                `@${cleaned}_scholar`,
                `@${cleaned}_${Math.floor(10 + Math.random() * 89)}`,
              ],
            };
          }
        }
      }

      const rawOnboard = localStorage.getItem("vidyalila_onboarded_users_v1");
      if (rawOnboard) {
        const map: Record<string, { username?: string }> =
          JSON.parse(rawOnboard);
        for (const [key, entry] of Object.entries(map)) {
          if (
            entry.username?.toLowerCase() === normalized &&
            key !== profile.id &&
            key !== (profile.email || "").toLowerCase()
          ) {
            return {
              available: false,
              normalized,
              error: `Username ${normalized} is already taken. Please choose another unique username.`,
              suggestions: [
                `@${cleaned}_9`,
                `@${cleaned}_scholar`,
                `@${cleaned}_${Math.floor(10 + Math.random() * 89)}`,
              ],
            };
          }
        }
      }
    } catch {
      // ignore local check error
    }

    // 2. Check backend (/api/auth/check-username) which checks LEADERBOARD_DATA & Supabase public.profiles
    try {
      const res = await fetch(
        `/api/auth/check-username?username=${encodeURIComponent(
          normalized
        )}&excludeUserId=${encodeURIComponent(profile.id || "")}`
      );
      if (res.ok) {
        const data = await res.json();
        return {
          available: Boolean(data.available),
          normalized: data.normalized || normalized,
          error: data.error,
          suggestions: data.suggestions,
        };
      }
    } catch {
      // ignore network error
    }

    return { available: true, normalized };
  };

  // Helper to load & sync profile with the backend (/api/auth/sync) and Supabase public.profiles table
  const fetchSupabaseProfile = async (
    userId: string,
    email?: string,
    meta?: Record<string, unknown>,
    accessToken?: string
  ) => {
    try {
      const localOnboard = getLocalOnboardingRecord(userId, email);

      // 1. Sync with backend /api/auth/sync first (ensures Google OAuth users get a row in public.profiles)
      if (accessToken) {
        try {
          const syncRes = await fetch("/api/auth/sync", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          });
          if (syncRes.ok) {
            const syncData = await syncRes.json();
            if (syncData.ok && syncData.profile) {
              const hasOnboarded =
                Boolean(syncData.profile.hasCompletedOnboarding) ||
                Boolean(meta?.onboarding_completed) ||
                Boolean(localOnboard?.completed);

              const resolvedClass: ClassGrade =
                localOnboard?.classGrade ||
                (syncData.profile.classGrade as ClassGrade) ||
                9;

              const resolvedLang: ContentLanguage =
                localOnboard?.preferredLanguage ||
                (syncData.profile.preferredLanguage as ContentLanguage) ||
                (meta?.preferred_language as ContentLanguage) ||
                "HINGLISH";

              const syncedProfile: StudentProfile = hydrateCreditWallet(
                {
                  ...DEFAULT_PROFILE,
                  ...syncData.profile,
                  email: email || syncData.profile.email,
                  username:
                    localOnboard?.username || syncData.profile.username,
                  classGrade: resolvedClass,
                  preferredLanguage: resolvedLang,
                  hasCompletedOnboarding: hasOnboarded,
                  completedUnitIds:
                    Array.isArray(syncData.profile.completedUnitIds) &&
                    syncData.profile.completedUnitIds.length > 0
                      ? syncData.profile.completedUnitIds
                      : [],
                },
                meta
              );
              setProfile(syncedProfile);
              saveLocalCreditWallet(syncedProfile);
              if (hasOnboarded) {
                setContentLanguageState(resolvedLang);
                setSelectedClassFilter(resolvedClass);
                localStorage.setItem("vidyalila_lang_v4", resolvedLang);
              }
              localStorage.setItem(
                "vidyalila_profile_v6",
                JSON.stringify(syncedProfile)
              );
              return;
            }
          }
        } catch {
          // Fallback to direct Supabase query below
        }
      }

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (data && !error) {
        const hasOnboarded =
          Boolean(data.onboarding_completed) ||
          Boolean(meta?.onboarding_completed) ||
          Boolean(localOnboard?.completed);

        const rawClass =
          localOnboard?.classGrade || (data.class_grade as ClassGrade) || 9;
        const resolvedClass: ClassGrade = rawClass === 10 ? 10 : 9;

        const resolvedLang: ContentLanguage =
          localOnboard?.preferredLanguage ||
          (data.preferred_language as ContentLanguage) ||
          (meta?.preferred_language as ContentLanguage) ||
          "HINGLISH";

        const mapped: StudentProfile = hydrateCreditWallet(
          {
            ...DEFAULT_PROFILE,
            id: data.id,
            email: email || data.email,
            phone: (data.phone as string) || (meta?.phone as string) || "",
            name:
              data.full_name ||
              (meta?.full_name as string) ||
              (meta?.name as string) ||
              "Scholar",
            username:
              localOnboard?.username ||
              data.username ||
              `@scholar_${userId.slice(0, 4)}`,
            avatar:
              data.avatar_url ||
              (meta?.avatar_url as string) ||
              (meta?.picture as string) ||
              "🚀",
            board: (data.board as "CBSE" | "ICSE") || "CBSE",
            classGrade: resolvedClass,
            preferredLanguage: resolvedLang,
            hasCompletedOnboarding: hasOnboarded,
            city: data.city || "Delhi",
            school: data.school_name || "VidyaLila Academy",
            role: (data.role as "student" | "admin") || "student",
            xp: typeof data.xp_points === "number" ? data.xp_points : 0,
            rating: typeof data.contest_rating === "number" ? data.contest_rating : 1500,
            streak: typeof data.current_streak === "number" ? data.current_streak : 1,
            hasProPass: Boolean(data.has_pro_pass),
            proPassPlan: data.pro_pass_plan || undefined,
            dailyPassesRemaining:
              typeof data.daily_passes_remaining === "number"
                ? data.daily_passes_remaining
                : 0,
            competitionPassesRemaining:
              typeof data.competition_passes_remaining === "number"
                ? data.competition_passes_remaining
                : 0,
            unlockedContestIds: Array.isArray(data.unlocked_contest_ids)
              ? data.unlocked_contest_ids
              : [],
            earnedBadges: Array.isArray(data.earned_badges) && data.earned_badges.length > 0
              ? data.earned_badges
              : DEFAULT_PROFILE.earnedBadges,
          },
          meta
        );
        setProfile(mapped);
        saveLocalCreditWallet(mapped);
        if (hasOnboarded) {
          setContentLanguageState(resolvedLang);
          setSelectedClassFilter(resolvedClass);
          localStorage.setItem("vidyalila_lang_v4", resolvedLang);
        }
        localStorage.setItem("vidyalila_profile_v6", JSON.stringify(mapped));
      } else if (meta) {
        const hasOnboarded =
          Boolean(meta.onboarding_completed) || Boolean(localOnboard?.completed);
        const rawClass =
          localOnboard?.classGrade ||
          (Number(meta.class_grade || 9) as ClassGrade);
        const resolvedClass: ClassGrade = rawClass === 10 ? 10 : 9;
        const resolvedLang: ContentLanguage =
          localOnboard?.preferredLanguage ||
          (meta.preferred_language as ContentLanguage) ||
          "HINGLISH";

        const fallbackProfile: StudentProfile = hydrateCreditWallet(
          {
            ...DEFAULT_PROFILE,
            id: userId,
            email,
            phone: (meta.phone as string) || "",
            name:
              (meta.full_name as string) ||
              (meta.name as string) ||
              email?.split("@")[0] ||
              "Scholar",
            username:
              (meta.username as string) ||
              `@${(email?.split("@")[0] || "scholar").toLowerCase().replace(/[^a-z0-9]/g, "")}`,
            avatar:
              (meta.avatar_url as string) ||
              (meta.picture as string) ||
              "🚀",
            board: (meta.board as "CBSE" | "ICSE") || "CBSE",
            classGrade: resolvedClass,
            preferredLanguage: resolvedLang,
            hasCompletedOnboarding: hasOnboarded,
            city: (meta.city as string) || "Delhi",
            school: (meta.school_name as string) || "VidyaLila Academy",
            xp: 0,
          },
          meta
        );
        setProfile(fallbackProfile);
        saveLocalCreditWallet(fallbackProfile);
        if (hasOnboarded) {
          setContentLanguageState(resolvedLang);
          setSelectedClassFilter(resolvedClass);
          localStorage.setItem("vidyalila_lang_v4", resolvedLang);
        }
        localStorage.setItem("vidyalila_profile_v6", JSON.stringify(fallbackProfile));
      }
    } catch {
      // ignore network error
    }
  };

  useEffect(() => {
    try {
      const savedProfile = localStorage.getItem("vidyalila_profile_v6");
      if (savedProfile) {
        const parsed = hydrateCreditWallet(JSON.parse(savedProfile));
        setProfile(parsed);
      } else {
        const guestHydrated = hydrateCreditWallet(DEFAULT_PROFILE);
        setProfile(guestHydrated);
      }
      const savedAuth = localStorage.getItem("vidyalila_is_auth_v4");
      if (savedAuth === "true") setIsAuthenticated(true);
      const savedModules = localStorage.getItem("vidyalila_modules_v15");
      if (savedModules) setModules(JSON.parse(savedModules));
      const savedContests = localStorage.getItem("vidyalila_contests_v11");
      if (savedContests) setContests(JSON.parse(savedContests));
      const savedReports = localStorage.getItem("vidyalila_reports_v1");
      if (savedReports) setContentReports(JSON.parse(savedReports));
      const savedCases = localStorage.getItem("vidyalila_support_cases_v1");
      if (savedCases) setSupportCases(JSON.parse(savedCases));
      fetch("/api/support/cases")
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (data?.ok && Array.isArray(data.cases) && data.cases.length > 0) {
            setSupportCases((prev) => {
              const map = new Map<string, SupportCase>();
              data.cases.forEach((c: SupportCase) => map.set(c.id, c));
              prev.forEach((c) => {
                if (!map.has(c.id)) map.set(c.id, c);
              });
              const merged = Array.from(map.values()).sort((a, b) =>
                b.createdAt.localeCompare(a.createdAt)
              );
              try {
                localStorage.setItem(
                  "vidyalila_support_cases_v1",
                  JSON.stringify(merged)
                );
              } catch {
                // ignore
              }
              return merged;
            });
          }
        })
        .catch(() => {});
      const savedLang = localStorage.getItem("vidyalila_lang_v4") as ContentLanguage | null;
      if (savedLang === "ENGLISH" || savedLang === "HINGLISH") {
        setContentLanguageState(savedLang);
      }
    } catch {
      // ignore storage errors
    }

    if (isSupabaseConfigured) {
      const fallbackTimer = setTimeout(() => {
        setAuthLoading(false);
      }, 600);

      supabase.auth
        .getSession()
        .then(({ data: { session } }) => {
          if (session?.user) {
            setIsAuthenticated(true);
            localStorage.setItem("vidyalila_is_auth_v4", "true");
            fetchSupabaseProfile(
              session.user.id,
              session.user.email,
              session.user.user_metadata,
              session.access_token
            );
          }
        })
        .catch(() => {})
        .finally(() => {
          clearTimeout(fallbackTimer);
          setAuthLoading(false);
        });

      const { data: authListener } = supabase.auth.onAuthStateChange(
        (event, session) => {
          if (session?.user) {
            setIsAuthenticated(true);
            localStorage.setItem("vidyalila_is_auth_v4", "true");
            fetchSupabaseProfile(
              session.user.id,
              session.user.email,
              session.user.user_metadata,
              session.access_token
            );
          } else if (event === "SIGNED_OUT") {
            setIsAuthenticated(false);
            setProfile(DEFAULT_PROFILE);
            localStorage.removeItem("vidyalila_is_auth_v4");
            localStorage.removeItem("vidyalila_profile_v6");
          }
        }
      );

      return () => {
        authListener.subscription.unsubscribe();
      };
    } else {
      setAuthLoading(false);
    }
  }, []);

  const setContentLanguage = (lang: ContentLanguage) => {
    setContentLanguageState(lang);
    try {
      localStorage.setItem("vidyalila_lang_v4", lang);
      if (isAuthenticated) {
        const updated = { ...profile, preferredLanguage: lang };
        setProfile(updated);
        localStorage.setItem("vidyalila_profile_v6", JSON.stringify(updated));
        saveLocalOnboardingRecord(
          profile.id,
          profile.email,
          profile.classGrade,
          lang
        );
        if (isSupabaseConfigured) {
          supabase.auth
            .updateUser({
              data: { preferred_language: lang, onboarding_completed: true },
            })
            .catch(() => {});
        }
      }
    } catch {
      // ignore
    }
  };

  const saveProfile = (next: StudentProfile) => {
    const perm = getPermanentUnlocks(next.id, next.email, next.username);
    const mergedUnlockedModules = Array.from(
      new Set([...(next.unlockedModuleIds || []), ...perm.moduleIds])
    );
    const mergedUnlockedClasses = Array.from(
      new Set([...(next.unlockedClassGrades || []), ...perm.classGrades])
    ) as ClassGrade[];

    const normalizedNext: StudentProfile = {
      ...next,
      unlockedModuleIds: mergedUnlockedModules,
      unlockedClassGrades: mergedUnlockedClasses,
    };

    recordPermanentUnlocks(
      mergedUnlockedModules,
      mergedUnlockedClasses,
      normalizedNext.id,
      normalizedNext.email,
      normalizedNext.username
    );
    setProfile(normalizedNext);
    saveLocalCreditWallet(normalizedNext);
    try {
      localStorage.setItem(
        "vidyalila_profile_v6",
        JSON.stringify(normalizedNext)
      );
      if (normalizedNext.email) {
        const rawUsers = localStorage.getItem("vidyalila_local_users_v1");
        if (rawUsers) {
          const users = JSON.parse(rawUsers);
          const key = normalizedNext.email.toLowerCase();
          if (users[key]) {
            users[key].profile = normalizedNext;
            localStorage.setItem(
              "vidyalila_local_users_v1",
              JSON.stringify(users)
            );
          }
        }
      }
    } catch {
      // ignore
    }
    // Sync harmless profile fields & permanent chapter unlocks to Supabase if connected and authenticated
    if (isSupabaseConfigured && normalizedNext.id && !normalizedNext.id.startsWith("local-")) {
      supabase
        .from("profiles")
        .update({
          full_name: normalizedNext.name,
          avatar_url: normalizedNext.avatar,
          board: normalizedNext.board,
          class_grade: normalizedNext.classGrade,
          city: normalizedNext.city,
          school_name: normalizedNext.school,
        })
        .eq("id", normalizedNext.id)
        .then(() => {});

      supabase.auth
        .updateUser({
          data: {
            vidya_credits: normalizedNext.credits,
            unlocked_module_ids: mergedUnlockedModules,
            unlocked_class_grades: mergedUnlockedClasses,
          },
        })
        .catch(() => {});
    }
  };

  const completeOnboardingPreferences = async (
    classGrade: ClassGrade,
    language: ContentLanguage,
    rawUsername: string
  ): Promise<{ ok: boolean; error?: string }> => {
    const check = await checkUsernameAvailability(rawUsername);
    if (!check.available) {
      return {
        ok: false,
        error:
          check.error ||
          `Username ${check.normalized} is already taken. Please choose another unique username.`,
      };
    }

    const cleanUsername = check.normalized;

    if (isSupabaseConfigured) {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (session?.access_token) {
          const syncRes = await fetch("/api/auth/sync", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${session.access_token}`,
            },
            body: JSON.stringify({
              username: cleanUsername,
              classGrade,
              preferredLanguage: language,
              hasCompletedOnboarding: true,
            }),
          });
          if (!syncRes.ok) {
            const errData = await syncRes.json().catch(() => ({}));
            if (errData.error) {
              return { ok: false, error: errData.error };
            }
          }
        }

        await supabase.auth.updateUser({
          data: {
            username: cleanUsername,
            class_grade: classGrade,
            preferred_language: language,
            onboarding_completed: true,
          },
        });
      } catch {
        // ignore network error
      }
    }

    const updated: StudentProfile = {
      ...profile,
      username: cleanUsername,
      classGrade,
      preferredLanguage: language,
      hasCompletedOnboarding: true,
    };
    setProfile(updated);
    setContentLanguageState(language);
    setSelectedClassFilter(classGrade);
    try {
      localStorage.setItem("vidyalila_lang_v4", language);
      localStorage.setItem("vidyalila_profile_v6", JSON.stringify(updated));
      saveLocalOnboardingRecord(
        profile.id,
        profile.email,
        classGrade,
        language,
        cleanUsername
      );
    } catch {
      // ignore
    }

    return { ok: true };
  };

  const updateUniqueUsername = async (
    rawUsername: string
  ): Promise<{ ok: boolean; error?: string; username?: string }> => {
    const check = await checkUsernameAvailability(rawUsername);
    if (!check.available) {
      return {
        ok: false,
        error:
          check.error ||
          `Username ${check.normalized} is already taken. Please choose another unique username.`,
      };
    }

    const cleanUsername = check.normalized;

    if (isSupabaseConfigured) {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (session?.access_token) {
          const syncRes = await fetch("/api/auth/sync", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${session.access_token}`,
            },
            body: JSON.stringify({
              username: cleanUsername,
            }),
          });
          if (!syncRes.ok) {
            const errData = await syncRes.json().catch(() => ({}));
            if (errData.error) {
              return { ok: false, error: errData.error };
            }
          }
        }

        await supabase.auth.updateUser({
          data: { username: cleanUsername },
        });
      } catch {
        // ignore network error
      }
    }

    const updated: StudentProfile = {
      ...profile,
      username: cleanUsername,
    };
    setProfile(updated);
    try {
      localStorage.setItem("vidyalila_profile_v6", JSON.stringify(updated));
      saveLocalOnboardingRecord(
        profile.id,
        profile.email,
        profile.classGrade,
        profile.preferredLanguage || contentLanguage,
        cleanUsername
      );
    } catch {
      // ignore
    }

    return { ok: true, username: cleanUsername };
  };

  const updateProfilePhone = async (
    phone: string
  ): Promise<{ ok: boolean; error?: string }> => {
    const cleanDigits = (phone || "").replace(/[^0-9]/g, "");
    if (cleanDigits.length < 10) {
      return { ok: false, error: "Please enter a valid 10-digit mobile number." };
    }
    const formattedPhone = cleanDigits.slice(-10);
    const nextProfile = { ...profile, phone: formattedPhone };
    saveProfile(nextProfile);

    if (
      isSupabaseConfigured &&
      isAuthenticated &&
      profile.id &&
      !profile.id.startsWith("local-")
    ) {
      try {
        await supabase
          .from("profiles")
          .update({ phone: formattedPhone })
          .eq("id", profile.id);
      } catch (err) {
        console.error("Failed to sync phone to Supabase:", err);
      }
    }
    return { ok: true };
  };

  const signUpUser = async (
    payload: SignUpPayload
  ): Promise<{ ok: boolean; error?: string; message?: string }> => {
    const cleanEmail = payload.email.trim().toLowerCase();

    const rawRequestedUsername =
      payload.username?.trim() ||
      payload.fullName
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9_]/g, "")
        .slice(0, 14);

    const usernameCheck = await checkUsernameAvailability(rawRequestedUsername);
    if (!usernameCheck.available) {
      return {
        ok: false,
        error:
          usernameCheck.error ||
          `Username ${usernameCheck.normalized} is already taken. Please pick another unique username.`,
      };
    }

    const cleanUsername = usernameCheck.normalized;

    const chosenLang: ContentLanguage =
      payload.preferredLanguage || "HINGLISH";

    if (isSupabaseConfigured) {
      const { data, error } = await supabase.auth.signUp({
        email: cleanEmail,
        password: payload.password,
        options: {
          data: {
            full_name: payload.fullName.trim(),
            username: cleanUsername,
            phone: (payload.phone || "").trim(),
            board: payload.board,
            class_grade: payload.classGrade,
            preferred_language: chosenLang,
            onboarding_completed: true,
            city: payload.city.trim() || "Delhi",
            school_name: payload.school.trim() || "VidyaLila Academy",
            xp_points: 0,
          },
        },
      });

      if (error && !error.message.toLowerCase().includes("rate limit")) {
        return { ok: false, error: error.message };
      }

      if (data.user) {
        // Also upsert directly into public.profiles in case trigger wasn't run yet
        await supabase.from("profiles").upsert(
          {
            id: data.user.id,
            full_name: payload.fullName.trim(),
            username: cleanUsername,
            board: payload.board,
            class_grade: payload.classGrade,
            city: payload.city.trim() || "Delhi",
            school_name: payload.school.trim() || "VidyaLila Academy",
            xp_points: 0,
          },
          { onConflict: "id" }
        );

        const newProfile: StudentProfile = {
          ...DEFAULT_PROFILE,
          id: data.user.id,
          email: cleanEmail,
          phone: (payload.phone || "").trim(),
          name: payload.fullName.trim(),
          username: cleanUsername,
          board: payload.board,
          classGrade: payload.classGrade,
          preferredLanguage: chosenLang,
          hasCompletedOnboarding: true,
          city: payload.city.trim() || "Delhi",
          school: payload.school.trim() || "VidyaLila Academy",
          xp: 0,
          streak: 1,
          completedUnitIds: [],
          earnedBadges: [
            { name: "Welcome Scholar", emoji: "🌱", date: "Just now" },
          ],
        };
        setProfile(newProfile);
        setIsAuthenticated(true);
        setContentLanguageState(chosenLang);
        setSelectedClassFilter(payload.classGrade);
        localStorage.setItem("vidyalila_lang_v4", chosenLang);
        localStorage.setItem("vidyalila_profile_v6", JSON.stringify(newProfile));
        localStorage.setItem("vidyalila_is_auth_v4", "true");
        saveLocalOnboardingRecord(
          data.user.id,
          cleanEmail,
          payload.classGrade,
          chosenLang
        );
        try {
          const rawUsers = localStorage.getItem("vidyalila_local_users_v1");
          const users = rawUsers ? JSON.parse(rawUsers) : {};
          users[cleanEmail] = { password: payload.password, profile: newProfile };
          localStorage.setItem("vidyalila_local_users_v1", JSON.stringify(users));
        } catch {
          // ignore
        }
      }

      return {
        ok: true,
        message: "Account created in Supabase! Welcome to VidyaLila.",
      };
    }

    // Local fallback when Supabase env variables are not set yet
    try {
      const rawUsers = localStorage.getItem("vidyalila_local_users_v1");
      const users: Record<string, { password: string; profile: StudentProfile }> =
        rawUsers ? JSON.parse(rawUsers) : {};

      if (users[cleanEmail]) {
        return {
          ok: false,
          error: "An account with this email already exists. Please Sign In instead.",
        };
      }

      const newProfile: StudentProfile = {
        ...DEFAULT_PROFILE,
        id: `local-${Date.now()}`,
        email: cleanEmail,
        phone: (payload.phone || "").trim(),
        name: payload.fullName.trim(),
        username: cleanUsername,
        board: payload.board,
        classGrade: payload.classGrade,
        preferredLanguage: chosenLang,
        hasCompletedOnboarding: true,
        city: payload.city.trim() || "Delhi",
        school: payload.school.trim() || "VidyaLila Academy",
        xp: 0,
        streak: 1,
        completedUnitIds: [],
        earnedBadges: [{ name: "Welcome Scholar", emoji: "🌱", date: "Just now" }],
      };

      users[cleanEmail] = {
        password: payload.password,
        profile: newProfile,
      };
      localStorage.setItem("vidyalila_local_users_v1", JSON.stringify(users));
      localStorage.setItem("vidyalila_profile_v6", JSON.stringify(newProfile));
      localStorage.setItem("vidyalila_is_auth_v4", "true");
      localStorage.setItem("vidyalila_lang_v4", chosenLang);
      saveLocalOnboardingRecord(
        newProfile.id,
        cleanEmail,
        payload.classGrade,
        chosenLang
      );
      setProfile(newProfile);
      setContentLanguageState(chosenLang);
      setSelectedClassFilter(payload.classGrade);
      setIsAuthenticated(true);

      return {
        ok: true,
        message: "Account created! Welcome to VidyaLila.",
      };
    } catch {
      return { ok: false, error: "Could not save account. Please try again." };
    }
  };

  const signInUser = async (
    email: string,
    password: string
  ): Promise<{ ok: boolean; error?: string }> => {
    const cleanEmail = email.trim().toLowerCase();

    if (isSupabaseConfigured) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: cleanEmail,
        password,
      });

      if (error) {
        try {
          const rawUsers = localStorage.getItem("vidyalila_local_users_v1");
          const users = rawUsers ? JSON.parse(rawUsers) : {};
          const record = users[cleanEmail];
          if (record && record.password === password) {
            const hydrated = hydrateCreditWallet(record.profile);
            setProfile(hydrated);
            setIsAuthenticated(true);
            setSelectedClassFilter(hydrated.classGrade || 9);
            if (hydrated.preferredLanguage) {
              setContentLanguageState(hydrated.preferredLanguage);
            }
            localStorage.setItem("vidyalila_profile_v6", JSON.stringify(hydrated));
            localStorage.setItem("vidyalila_is_auth_v4", "true");
            return { ok: true };
          }
        } catch {
          // ignore
        }
        return { ok: false, error: error.message };
      }

      if (data.user) {
        setIsAuthenticated(true);
        localStorage.setItem("vidyalila_is_auth_v4", "true");
        await fetchSupabaseProfile(
          data.user.id,
          data.user.email,
          data.user.user_metadata,
          data.session?.access_token
        );
      }
      return { ok: true };
    }

    // Local fallback when Supabase env variables are not set yet
    try {
      const rawUsers = localStorage.getItem("vidyalila_local_users_v1");
      const users: Record<string, { password: string; profile: StudentProfile }> =
        rawUsers ? JSON.parse(rawUsers) : {};

      const record = users[cleanEmail];
      if (!record || record.password !== password) {
        return {
          ok: false,
          error: "Invalid email or password. Please check your credentials or Sign Up first.",
        };
      }

      const hydrated = hydrateCreditWallet(record.profile);
      setProfile(hydrated);
      setIsAuthenticated(true);
      setSelectedClassFilter(hydrated.classGrade || 9);
      if (hydrated.preferredLanguage) {
        setContentLanguageState(hydrated.preferredLanguage);
      }
      localStorage.setItem("vidyalila_profile_v6", JSON.stringify(hydrated));
      localStorage.setItem("vidyalila_is_auth_v4", "true");
      return { ok: true };
    } catch {
      return { ok: false, error: "Sign in failed. Please try again." };
    }
  };

  const signInWithGoogle = async (
    redirectPath?: string
  ): Promise<{ ok: boolean; error?: string }> => {
    if (!isSupabaseConfigured) {
      return {
        ok: false,
        error:
          "Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local (and enable Google Provider in Supabase Auth) to use Google Sign-In.",
      };
    }

    const nextPath =
      redirectPath && redirectPath.startsWith("/") ? redirectPath : "/";
    const callbackUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}/auth/callback?next=${encodeURIComponent(nextPath)}`
        : undefined;

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: callbackUrl,
        queryParams: {
          access_type: "offline",
          prompt: "select_account",
        },
      },
    });
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  };

  const signOutUser = async () => {
    try {
      if (isSupabaseConfigured) {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        // Notify backend /api/auth/signout to revoke token and clear cookies
        await fetch("/api/auth/signout", {
          method: "POST",
          headers: session?.access_token
            ? { Authorization: `Bearer ${session.access_token}` }
            : {},
        }).catch(() => {});

        await supabase.auth.signOut({ scope: "local" });
      } else {
        await fetch("/api/auth/signout", { method: "POST" }).catch(() => {});
      }
    } catch {
      // ignore network error during sign out
    }

    setIsAuthenticated(false);
    setShowDailyTrickModal(false);
    setProfile({ ...DEFAULT_PROFILE });
    setSelectedClassFilter("ALL");
    try {
      localStorage.removeItem("vidyalila_is_auth_v4");
      localStorage.removeItem("vidyalila_profile_v6");
    } catch {
      // ignore
    }
  };

  const currentRank =
    RANK_TIERS.slice()
      .reverse()
      .find((r) => profile.xp >= r.minXp) || RANK_TIERS[0];

  const currentRankIndex = RANK_TIERS.findIndex((r) => r.name === currentRank.name);
  const nextRank =
    currentRankIndex >= 0 && currentRankIndex + 1 < RANK_TIERS.length
      ? RANK_TIERS[currentRankIndex + 1]
      : null;

  const updateProfileBoardAndClass = (
    board: "CBSE" | "ICSE",
    grade: ClassGrade,
    language?: ContentLanguage
  ) => {
    const resolvedLang = language || profile.preferredLanguage || contentLanguage;
    const nextProfile: StudentProfile = {
      ...profile,
      board,
      classGrade: grade,
      preferredLanguage: resolvedLang,
      hasCompletedOnboarding: true,
    };
    saveProfile(nextProfile);
    setSelectedClassFilter(grade);
    setContentLanguageState(resolvedLang);
    try {
      localStorage.setItem("vidyalila_lang_v4", resolvedLang);
      saveLocalOnboardingRecord(
        profile.id,
        profile.email,
        grade,
        resolvedLang
      );
    } catch {
      // ignore
    }
    if (isSupabaseConfigured && isAuthenticated) {
      supabase.auth
        .updateUser({
          data: {
            class_grade: grade,
            preferred_language: resolvedLang,
            onboarding_completed: true,
          },
        })
        .catch(() => {});
    }
  };

  const completeUnit = (
    moduleId: string,
    unitId: string,
    xpReward: number,
    answers?: Record<string, number>,
    wrongAttempts?: Record<string, number>
  ) => {
    // Submit answers to server for verified calculation and progress logging
    fetch("/api/units/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: profile.id,
        moduleId,
        unitId,
        answers: answers || {},
        wrongAttempts: wrongAttempts || {},
      }),
    }).catch(() => {});

    const alreadyDone = profile.completedUnitIds.includes(unitId);
    if (alreadyDone) {
      setCelebration({
        title: "Revision Complete! 🔄",
        subtitle: "You revised this unit and earned +25 Revision GP!",
        xpEarned: 25,
        badgeEmoji: "✨",
      });
      saveProfile({
        ...profile,
        xp: profile.xp + 25,
      });
      return;
    }

    const updatedCompleted = [...profile.completedUnitIds, unitId];
    const targetModule = modules.find((m) => m.id === moduleId);
    let bonusBadge = null;
    const newBadges = [...profile.earnedBadges];

    if (targetModule) {
      const allModuleUnitsDone = targetModule.units.every((u) =>
        updatedCompleted.includes(u.id)
      );
      if (
        allModuleUnitsDone &&
        !newBadges.some((b) => b.name === targetModule.badgeName)
      ) {
        bonusBadge = {
          name: targetModule.badgeName,
          emoji: targetModule.badgeEmoji,
          date: "Just now",
        };
        newBadges.unshift(bonusBadge);
      }
    }

    const totalEarned = xpReward + (bonusBadge ? 100 : 0);
    saveProfile({
      ...profile,
      xp: profile.xp + totalEarned,
      streak: profile.streak,
      completedUnitIds: updatedCompleted,
      earnedBadges: newBadges,
    });

    setCelebration({
      title: bonusBadge
        ? `Chapter Completed! Unlocked "${bonusBadge.name}" Badge!`
        : "Unit Test Passed! Awesome Job! 🎉",
      subtitle: bonusBadge
        ? `You finished every unit in ${targetModule?.title} and earned a +100 GP Chapter Completion Bonus!`
        : "Your GP (Gyan Points) have been credited to your VidyaLila Scholar profile.",
      xpEarned: totalEarned,
      badgeEmoji: bonusBadge ? bonusBadge.emoji : "⚡",
    });
  };

  const isChapterFreeStarter = (moduleIdOrSlug: string): boolean => {
    const mod = modules.find(
      (m) => m.id === moduleIdOrSlug || m.slug === moduleIdOrSlug
    );
    if (!mod) return false;
    // First 2 chapters of each subject per class are 100% Free Starter Chapters
    const sameSubjectModules = modules.filter(
      (m) => m.classGrade === mod.classGrade && m.subject === mod.subject
    );
    const idx = sameSubjectModules.findIndex((m) => m.id === mod.id);
    return idx >= 0 && idx < 2;
  };

  const isChapterUnlocked = (moduleIdOrSlug: string): boolean => {
    if (isChapterFreeStarter(moduleIdOrSlug)) return true;
    // Paid chapters (Chapter 3+) are strictly tied to a signed-in user account
    if (!isAuthenticated) return false;
    if (profile.role === "admin") return true;
    const perm = getPermanentUnlocks(profile.id, profile.email, profile.username);
    const mod = modules.find(
      (m) => m.id === moduleIdOrSlug || m.slug === moduleIdOrSlug
    );
    const unlockedClasses = [
      ...(profile.unlockedClassGrades || []),
      ...perm.classGrades,
    ];
    if (mod && unlockedClasses.includes(mod.classGrade)) {
      return true;
    }
    const unlockedIds = [
      ...(profile.unlockedModuleIds || []),
      ...perm.moduleIds,
    ];
    if (unlockedIds.includes(moduleIdOrSlug)) return true;
    if (mod && (unlockedIds.includes(mod.id) || unlockedIds.includes(mod.slug))) {
      return true;
    }
    return false;
  };

  // Counts how many paid (Chapter 3+) modules in targetClassGrade this signed-in user has already unlocked individually
  const getAlreadyUnlockedPaidChaptersCount = (
    targetClassGrade: ClassGrade
  ): number => {
    if (!isAuthenticated) return 0;
    const perm = getPermanentUnlocks(
      profile.id,
      profile.email,
      profile.username
    );
    const unlockedClasses = [
      ...(profile.unlockedClassGrades || []),
      ...perm.classGrades,
    ];
    // If the entire class is already unlocked via Comprehensive Pack, no individual chapter refund applies
    if (unlockedClasses.includes(targetClassGrade)) return 0;

    const unlockedIds = new Set([
      ...(profile.unlockedModuleIds || []),
      ...perm.moduleIds,
    ]);

    return modules.filter(
      (m) =>
        m.classGrade === targetClassGrade &&
        !isChapterFreeStarter(m.id) &&
        (unlockedIds.has(m.id) || unlockedIds.has(m.slug))
    ).length;
  };

  const unlockChapterWithCredits = (
    moduleIdOrSlug: string
  ): { ok: boolean; error?: string; remainingCredits?: number } => {
    if (!isAuthenticated) {
      return {
        ok: false,
        error:
          "Please Sign In to your account first to unlock chapters using your Vidya Credits.",
      };
    }
    const mod = modules.find(
      (m) => m.id === moduleIdOrSlug || m.slug === moduleIdOrSlug
    );
    if (!mod) {
      return { ok: false, error: "Chapter not found." };
    }
    if (isChapterUnlocked(moduleIdOrSlug)) {
      return { ok: true, remainingCredits: profile.credits };
    }

    const currentCredits =
      typeof profile.credits === "number" ? profile.credits : 0;
    if (currentCredits < CHAPTER_UNLOCK_COST) {
      return {
        ok: false,
        error: `You need ${CHAPTER_UNLOCK_COST} Vidya Credits to unlock "${mod.title}" (you have ${currentCredits} Credits).`,
        remainingCredits: currentCredits,
      };
    }

    const nextCredits = currentCredits - CHAPTER_UNLOCK_COST;
    const nextUnlockedModules = Array.from(
      new Set([...(profile.unlockedModuleIds || []), mod.id, mod.slug])
    );
    const tx: CreditTransaction = {
      id: `tx-chap-${Date.now()}`,
      type: "CHAPTER_UNLOCK",
      amount: -CHAPTER_UNLOCK_COST,
      balanceAfter: nextCredits,
      description: `Unlocked Chapter: ${mod.title} (${mod.subject} • Class ${mod.classGrade})`,
      createdAt: "Just now",
    };

    const nextProfile: StudentProfile = {
      ...profile,
      credits: nextCredits,
      hasProPass: nextCredits > 0,
      proPassPurchasedAt:
        nextCredits > 0
          ? `${nextCredits.toLocaleString()} Credits Available`
          : "0 Credits — Top Up Required",
      unlockedModuleIds: nextUnlockedModules,
      creditTransactions: [tx, ...(profile.creditTransactions || [])],
    };

    saveProfile(nextProfile);
    setCelebration({
      title: `Chapter Unlocked! 🔓 "${mod.title}"`,
      subtitle: `Spent 🪙 ${CHAPTER_UNLOCK_COST} Vidya Credits • Permanent Lifetime Access unlocked! Remaining Wallet Balance: 🪙 ${nextCredits.toLocaleString()} Credits.`,
      xpEarned: 0,
      badgeEmoji: mod.badgeEmoji || "🔓",
    });

    return { ok: true, remainingCredits: nextCredits };
  };

  const getContestCreditCost = (
    contestType: "DAILY" | "WEEKLY" | "MONTHLY"
  ): number => {
    return CONTEST_CREDIT_COSTS[contestType] || 20;
  };

  const unlockContestSingle = (contestId: string) => {
    if (profile.unlockedContestIds.includes(contestId)) return;
    saveProfile({
      ...profile,
      unlockedContestIds: [...profile.unlockedContestIds, contestId],
    });
  };

  const activateProPass = (
    plan: CreditPlanType,
    autoUnlockContestId?: string,
    autoUnlockModuleId?: string,
    targetClassGrade?: ClassGrade
  ) => {
    const pack = CREDIT_PACK_CREDITS[plan] || CREDIT_PACK_CREDITS.ONE_DAY;
    const curCredits =
      typeof profile.credits === "number" ? profile.credits : 0;
    let nextCredits = curCredits + pack.credits;

    const classToUnlock: ClassGrade =
      targetClassGrade || profile.classGrade || 9;
    const nextUnlockedClasses = Array.from(
      new Set([
        ...(profile.unlockedClassGrades || []),
        ...(plan === "COMPREHENSIVE" ? [classToUnlock] : []),
      ])
    ) as ClassGrade[];

    const nextUnlockedContests = [...(profile.unlockedContestIds || [])];
    const nextUnlockedModules = [...(profile.unlockedModuleIds || [])];

    // Calculate Zero-Waste Upgrade Bonus if buying COMPREHENSIVE and user already unlocked paid chapters in this class
    const alreadyUnlockedPaidCount =
      plan === "COMPREHENSIVE"
        ? getAlreadyUnlockedPaidChaptersCount(classToUnlock)
        : 0;
    const zeroWasteRefundCredits =
      alreadyUnlockedPaidCount * CHAPTER_UNLOCK_COST;

    if (plan === "COMPREHENSIVE") {
      nextCredits += zeroWasteRefundCredits;
      // Immediately unlock every chapter of the target class
      modules
        .filter((m) => m.classGrade === classToUnlock)
        .forEach((m) => {
          nextUnlockedModules.push(m.id, m.slug);
        });
    }

    const nextTransactions: CreditTransaction[] = [
      ...(zeroWasteRefundCredits > 0
        ? [
            {
              id: `tx-zerowaste-${Date.now() + 1}`,
              type: "ADMIN_REFUND" as const,
              amount: zeroWasteRefundCredits,
              balanceAfter: nextCredits,
              description: `🎁 Zero-Waste Upgrade Bonus: +${zeroWasteRefundCredits.toLocaleString()} Credits refunded back to wallet for ${alreadyUnlockedPaidCount} already-unlocked Class ${classToUnlock} chapter(s)`,
              createdAt: "Just now",
            },
          ]
        : []),
      {
        id: `tx-pack-${Date.now()}`,
        type: "PACK_PURCHASE",
        amount: pack.credits,
        balanceAfter: nextCredits - zeroWasteRefundCredits,
        description:
          plan === "COMPREHENSIVE"
            ? `👑 Comprehensive Class ${classToUnlock} Pack (₹${pack.priceInr} → All Class ${classToUnlock} PCM Chapters Unlocked + ${pack.credits.toLocaleString()} Test Credits)`
            : `Purchased ${pack.label} (₹${pack.priceInr} → +${pack.credits.toLocaleString()} Credits)`,
        createdAt: "Just now",
      },
      ...(profile.creditTransactions || []),
    ];

    if (autoUnlockContestId && !nextUnlockedContests.includes(autoUnlockContestId)) {
      const targetContest = contests.find((c) => c.id === autoUnlockContestId);
      if (targetContest) {
        const cost = getContestCreditCost(targetContest.type);
        if (nextCredits >= cost) {
          nextCredits -= cost;
          nextUnlockedContests.push(autoUnlockContestId);
          nextTransactions.unshift({
            id: `tx-contest-${Date.now() + 1}`,
            type: "CONTEST_ENTRY",
            amount: -cost,
            balanceAfter: nextCredits,
            description: `Entered Live Exam: ${targetContest.title} (${targetContest.type})`,
            createdAt: "Just now",
          });
        }
      }
    }

    if (
      plan !== "COMPREHENSIVE" &&
      autoUnlockModuleId &&
      !isChapterUnlocked(autoUnlockModuleId)
    ) {
      const targetMod = modules.find(
        (m) => m.id === autoUnlockModuleId || m.slug === autoUnlockModuleId
      );
      if (targetMod && nextCredits >= CHAPTER_UNLOCK_COST) {
        nextCredits -= CHAPTER_UNLOCK_COST;
        nextUnlockedModules.push(targetMod.id, targetMod.slug);
        nextTransactions.unshift({
          id: `tx-chap-${Date.now() + 2}`,
          type: "CHAPTER_UNLOCK",
          amount: -CHAPTER_UNLOCK_COST,
          balanceAfter: nextCredits,
          description: `Unlocked Chapter: ${targetMod.title} (${targetMod.subject})`,
          createdAt: "Just now",
        });
      }
    }

    const bonusBadges = [...profile.earnedBadges];
    if (
      (plan === "MONTHLY" || plan === "COMPREHENSIVE") &&
      !bonusBadges.some((b) => b.name === "Champion Credit Scholar")
    ) {
      bonusBadges.unshift({
        name: "Champion Credit Scholar",
        emoji: "👑",
        date: "Just now",
      });
    }

    // Also keep legacy pass counters roughly synced for backward compatibility
    const approxDaily = Math.floor(nextCredits / 20);
    const approxComp = Math.floor(nextCredits / 50);

    saveProfile({
      ...profile,
      credits: nextCredits,
      hasProPass: nextCredits > 0 || nextUnlockedClasses.length > 0,
      proPassPlan: plan,
      proPassPurchasedAt:
        plan === "COMPREHENSIVE"
          ? `All Class ${classToUnlock} Chapters Unlocked + ${nextCredits.toLocaleString()} Credits`
          : nextCredits > 0
          ? `${nextCredits.toLocaleString()} Credits Available`
          : "0 Credits — Top Up Required",
      dailyPassesRemaining: approxDaily,
      competitionPassesRemaining: approxComp,
      unlockedContestIds: nextUnlockedContests,
      unlockedModuleIds: Array.from(new Set(nextUnlockedModules)),
      unlockedClassGrades: nextUnlockedClasses,
      creditTransactions: nextTransactions,
      xp: profile.xp,
      earnedBadges: bonusBadges,
    });

    setCelebration({
      title:
        plan === "COMPREHENSIVE"
          ? zeroWasteRefundCredits > 0
            ? `👑 All Class ${classToUnlock} Chapters Unlocked + ${(1000 + zeroWasteRefundCredits).toLocaleString()} Credits!`
            : `👑 All Class ${classToUnlock} PCM Chapters Unlocked + 1,000 Test Credits!`
          : `🪙 +${pack.credits.toLocaleString()} Vidya Credits Added (${pack.label})!`,
      subtitle:
        plan === "COMPREHENSIVE"
          ? zeroWasteRefundCredits > 0
            ? `Includes 🎁 +${zeroWasteRefundCredits.toLocaleString()} Zero-Waste Refund Credits for your ${alreadyUnlockedPaidCount} already-unlocked chapter(s)! Total Wallet Balance: 🪙 ${nextCredits.toLocaleString()} Credits.`
            : `Every Class ${classToUnlock} Maths, Physics & Chemistry chapter is now 100% unlocked permanently, plus you have 🪙 ${nextCredits.toLocaleString()} Credits in your wallet for Live Tests!`
          : `Your wallet now has 🪙 ${nextCredits.toLocaleString()} Vidya Credits. Use them anytime to unlock chapters (${CHAPTER_UNLOCK_COST} Credits) or enter live tests (20–100 Credits)!`,
      xpEarned: 0,
      badgeEmoji:
        plan === "COMPREHENSIVE"
          ? "👑"
          : plan === "MONTHLY"
          ? "💎"
          : plan === "WEEKLY"
          ? "📘"
          : "🪙",
    });
  };

  const consumePassForContest = (
    contestId: string,
    contestType: "DAILY" | "WEEKLY" | "MONTHLY"
  ): boolean => {
    if (profile.unlockedContestIds.includes(contestId)) return true;

    const cost = getContestCreditCost(contestType);
    const curCredits =
      typeof profile.credits === "number" ? profile.credits : 0;

    if (curCredits >= cost) {
      const nextCredits = curCredits - cost;
      const targetContest = contests.find((c) => c.id === contestId);
      const tx: CreditTransaction = {
        id: `tx-contest-${Date.now()}`,
        type: "CONTEST_ENTRY",
        amount: -cost,
        balanceAfter: nextCredits,
        description: `Entered ${contestType} Exam: ${
          targetContest?.title || contestId
        }`,
        createdAt: "Just now",
      };

      saveProfile({
        ...profile,
        credits: nextCredits,
        hasProPass: nextCredits > 0,
        proPassPurchasedAt:
          nextCredits > 0
            ? `${nextCredits.toLocaleString()} Credits Available`
            : "0 Credits — Top Up Required",
        dailyPassesRemaining: Math.floor(nextCredits / 20),
        competitionPassesRemaining: Math.floor(nextCredits / 50),
        unlockedContestIds: [...profile.unlockedContestIds, contestId],
        creditTransactions: [tx, ...(profile.creditTransactions || [])],
      });
      return true;
    }

    return false;
  };

  const refundOrGrantCredits = (
    amount: number,
    reason: string,
    targetEmailOrUsername?: string
  ) => {
    if (!amount || amount <= 0) return;
    const cleanReason =
      reason.trim() || "Admin Credit Refund / Scholarship Grant";

    const isCurrentUser =
      !targetEmailOrUsername ||
      targetEmailOrUsername.toLowerCase() ===
        (profile.email || "").toLowerCase() ||
      targetEmailOrUsername.toLowerCase() ===
        (profile.username || "").toLowerCase();

    if (isCurrentUser) {
      const curCredits =
        typeof profile.credits === "number" ? profile.credits : 0;
      const nextCredits = curCredits + amount;
      const tx: CreditTransaction = {
        id: `tx-refund-${Date.now()}`,
        type: "ADMIN_REFUND",
        amount,
        balanceAfter: nextCredits,
        description: `Credit Refund / Grant: ${cleanReason}`,
        createdAt: "Just now",
      };
      saveProfile({
        ...profile,
        credits: nextCredits,
        hasProPass: nextCredits > 0,
        proPassPurchasedAt: `${nextCredits.toLocaleString()} Credits Available`,
        dailyPassesRemaining: Math.floor(nextCredits / 20),
        competitionPassesRemaining: Math.floor(nextCredits / 50),
        creditTransactions: [tx, ...(profile.creditTransactions || [])],
      });
    } else if (targetEmailOrUsername) {
      // Also update local credit wallet & local users map for target student
      try {
        const key = targetEmailOrUsername.trim().toLowerCase();
        const rawWallets = localStorage.getItem("vidyalila_credit_wallets_v1");
        const wallets = rawWallets ? JSON.parse(rawWallets) : {};
        const existing = wallets[key] || {
          credits: WELCOME_CREDITS,
          unlockedModuleIds: [],
          unlockedContestIds: [],
          creditTransactions: DEFAULT_PROFILE.creditTransactions,
        };
        const nextCredits = (existing.credits || 0) + amount;
        const tx: CreditTransaction = {
          id: `tx-refund-${Date.now()}`,
          type: "ADMIN_REFUND",
          amount,
          balanceAfter: nextCredits,
          description: `Credit Refund / Grant: ${cleanReason}`,
          createdAt: "Just now",
        };
        wallets[key] = {
          ...existing,
          credits: nextCredits,
          creditTransactions: [tx, ...(existing.creditTransactions || [])],
        };
        localStorage.setItem(
          "vidyalila_credit_wallets_v1",
          JSON.stringify(wallets)
        );
      } catch {
        // ignore
      }
    }

    setCelebration({
      title: `🪙 +${amount} Vidya Credits Refunded / Granted!`,
      subtitle: `${cleanReason} • Credits have been added directly to ${
        targetEmailOrUsername || profile.username
      }'s wallet (Upwork-style instant credit refund).`,
      xpEarned: 0,
      badgeEmoji: "🪙",
    });
  };

  const submitContestResult = (
    contestId: string,
    score: number,
    total: number,
    _xpReward: number,
    answers?: Record<string, number>
  ) => {
    const contest = contests.find((c) => c.id === contestId);
    const ratio = total > 0 ? score / total : 0;
    const ratingDelta = Math.round((ratio - 0.5) * 80) + 15;

    // Top-Ranker Goodies: Reward Free Vidya Credits to Top Performers!
    let goodieCreditsAdded = 0;
    let goodieLabel = "";
    const cType = contest?.type || "DAILY";

    if (ratio === 1) {
      // Top 3 Ranker Bracket (100% Accuracy)
      if (cType === "MONTHLY") {
        goodieCreditsAdded = 500;
        goodieLabel =
          "🎁 Top-3 Goodie Won: +500 Free Vidya Credits (Worth ₹199 Starter Pack)!";
      } else if (cType === "WEEKLY") {
        goodieCreditsAdded = 200;
        goodieLabel =
          "🎁 Top-3 Goodie Won: +200 Free Vidya Credits (Unlocks 2 Full Chapters)!";
      } else {
        goodieCreditsAdded = 50;
        goodieLabel =
          "🎁 Top-3 Goodie Won: +50 Free Vidya Credits!";
      }
    } else if (ratio >= 0.75) {
      // Top 10 Ranker Bracket (75%+ Accuracy)
      if (cType === "MONTHLY") {
        goodieCreditsAdded = 200;
        goodieLabel =
          "🎁 Top-10 Goodie Won: +200 Free Vidya Credits!";
      } else if (cType === "WEEKLY") {
        goodieCreditsAdded = 60;
        goodieLabel =
          "🎁 Top-10 Goodie Won: +60 Free Vidya Credits!";
      } else {
        goodieCreditsAdded = 20;
        goodieLabel =
          "🎁 Top-10 Goodie Won: +20 Free Vidya Credits (Free Daily Test Refund)!";
      }
    }

    const curCredits =
      typeof profile.credits === "number" ? profile.credits : 0;
    const nextCredits = curCredits + goodieCreditsAdded;
    const nextTransactions = [...(profile.creditTransactions || [])];

    if (goodieCreditsAdded > 0) {
      nextTransactions.unshift({
        id: `tx-goodie-${Date.now()}`,
        type: "GOODIE_REWARD",
        amount: goodieCreditsAdded,
        balanceAfter: nextCredits,
        description: `Topper Goodie Reward (${Math.round(ratio * 100)}% in ${
          contest?.title || cType
        })`,
        createdAt: "Just now",
      });
    }

    const nextBadges = [...profile.earnedBadges];

    if (
      goodieCreditsAdded > 0 &&
      !nextBadges.some((b) => b.name === "Topper Goodie Winner")
    ) {
      nextBadges.unshift({
        name: "Topper Goodie Winner",
        emoji: "🎁",
        date: "Just now",
      });
    }

    const newHistoryItem = {
      contestId,
      title: contest?.title || "Live Board Contest",
      score,
      total,
      ratingDelta,
      xpEarned: 0,
      date: "Just now",
    };

    // GPs are strictly for free study content; quizzes update Contest Rating, History & Goodie Credits
    saveProfile({
      ...profile,
      credits: nextCredits,
      xp: profile.xp,
      rating: profile.rating + ratingDelta,
      hasProPass: nextCredits > 0,
      dailyPassesRemaining: Math.floor(nextCredits / 20),
      competitionPassesRemaining: Math.floor(nextCredits / 50),
      creditTransactions: nextTransactions,
      earnedBadges: nextBadges,
      contestHistory: [newHistoryItem, ...profile.contestHistory],
    });

    // Record submission & compute validated score/Goodies on the backend API (/api/quizzes/submit)
    // Includes high-traffic exponential backoff retry + local pending queue so zero submissions are lost
    const submissionPayload = {
      userId: profile.id,
      contestId,
      contestType: cType,
      answers: answers || {},
      submittedAtIso: new Date().toISOString(),
    };

    const sendWithRetry = async (attempt = 0) => {
      try {
        const res = await fetch("/api/quizzes/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submissionPayload),
        });
        if (!res.ok && attempt < 3) {
          const delayMs = 1500 * Math.pow(2, attempt) + Math.floor(Math.random() * 800);
          setTimeout(() => sendWithRetry(attempt + 1), delayMs);
        }
      } catch {
        if (attempt < 3) {
          const delayMs = 1500 * Math.pow(2, attempt) + Math.floor(Math.random() * 800);
          setTimeout(() => sendWithRetry(attempt + 1), delayMs);
        } else {
          try {
            const existingRaw = localStorage.getItem("vidyalila_pending_quiz_submissions_v1");
            const existing = existingRaw ? JSON.parse(existingRaw) : [];
            existing.push(submissionPayload);
            localStorage.setItem(
              "vidyalila_pending_quiz_submissions_v1",
              JSON.stringify(existing.slice(-20))
            );
          } catch {
            // ignore storage error
          }
        }
      }
    };

    sendWithRetry(0);

    setCelebration({
      title: goodieLabel
        ? `Score: ${score}/${total} • ${goodieLabel}`
        : `Quiz Submitted! Score: ${score}/${total} 🏆`,
      subtitle: goodieLabel
        ? `Your Free Goodie Credits (+${goodieCreditsAdded} 🪙) have been added directly to your Vidya Credit Wallet! Contest Rating +${ratingDelta} (Now ${
            profile.rating + ratingDelta
          }).`
        : `Contest Rating ${ratingDelta >= 0 ? `+${ratingDelta}` : ratingDelta} (Now ${
            profile.rating + ratingDelta
          }). Score 75%+ next time to win Free Vidya Credits!`,
      xpEarned: 0,
      badgeEmoji: goodieLabel ? "🎁" : "⚔️",
    });
  };

  const addCustomModule = (mod: LearningModule) => {
    const updated = [mod, ...modules];
    setModules(updated);
    try {
      localStorage.setItem("vidyalila_modules_v15", JSON.stringify(updated));
    } catch {
      // ignore
    }
    setCelebration({
      title: "New Study Chapter Published! 📚",
      subtitle: `"${mod.title}" is now live for ${mod.board} Class ${mod.classGrade} students!`,
      xpEarned: 100,
      badgeEmoji: mod.badgeEmoji,
    });
  };

  const addCustomContest = (contest: QuizContest) => {
    const updated = [contest, ...contests];
    setContests(updated);
    try {
      localStorage.setItem("vidyalila_contests_v11", JSON.stringify(updated));
    } catch {
      // ignore
    }
    setCelebration({
      title: "New Paid Quiz Contest Launched! ⚡",
      subtitle: `"${contest.title}" (₹${contest.entryFeeInr}) is now live in the Contest Arena!`,
      xpEarned: 0,
      badgeEmoji: "🎯",
    });
  };

  const submitContentReport = (
    report: Omit<ContentReport, "id" | "reportedBy" | "status" | "createdAt">
  ) => {
    const newReport: ContentReport = {
      ...report,
      id: `rep-${Date.now()}`,
      reportedBy: `${profile.name} (${profile.board} Class ${profile.classGrade})`,
      status: "OPEN",
      createdAt: "Just now",
    };
    const updated = [newReport, ...contentReports];
    setContentReports(updated);
    try {
      localStorage.setItem("vidyalila_reports_v1", JSON.stringify(updated));
    } catch {
      // ignore
    }
    if (isSupabaseConfigured) {
      supabase
        .from("content_reports")
        .insert({
          module_slug: report.moduleSlug,
          chapter_title: report.chapterTitle,
          unit_title: report.unitTitle,
          target_label: report.targetLabel,
          issue_type: report.issueType,
          description: report.description,
          reported_by_label: newReport.reportedBy,
          status: "OPEN",
        })
        .then(() => {});
    }
    setCelebration({
      title: "Report Logged for Academic Review! 🛡️",
      subtitle:
        "Thank you for helping keep VidyaLila 100% accurate. Our Academic Review team will verify it.",
      xpEarned: 0,
      badgeEmoji: "🛡️",
    });
  };

  const resolveContentReport = (reportId: string) => {
    const updated = contentReports.map((r) =>
      r.id === reportId
        ? ({ ...r, status: "RESOLVED_BONUS_GRANTED" } as ContentReport)
        : r
    );
    setContentReports(updated);
    try {
      localStorage.setItem("vidyalila_reports_v1", JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const submitSupportCase = async (payload: {
    category: SupportCaseCategory;
    subject: string;
    description: string;
    studentName?: string;
    studentEmail?: string;
    studentPhone?: string;
    paymentReference?: string;
    relatedChapterOrContest?: string;
  }): Promise<{ ok: boolean; caseItem: SupportCase; salesforceSynced?: boolean }> => {
    const randomSix = Math.floor(100000 + Math.random() * 900000);
    const caseNumber = `VL-CASE-${randomSix}`;
    const priority: SupportCase["priority"] =
      payload.category === "GRIEVANCE_PRIVACY"
        ? "URGENT_GRIEVANCE"
        : payload.category === "PAYMENT_ISSUE" || payload.category === "CHAPTER_UNLOCK"
        ? "HIGH"
        : "MEDIUM";

    const newCase: SupportCase = {
      id: `case-${Date.now()}-${randomSix}`,
      caseNumber,
      category: payload.category,
      subject: payload.subject.trim(),
      description: payload.description.trim(),
      studentName: (payload.studentName || profile.name || "Scholar").trim(),
      studentEmail: (payload.studentEmail || profile.email || "").trim(),
      studentPhone: (payload.studentPhone || profile.phone || "").trim(),
      studentUsername: profile.username || "@scholar",
      board: profile.board,
      classGrade: profile.classGrade,
      paymentReference: payload.paymentReference?.trim() || undefined,
      relatedChapterOrContest: payload.relatedChapterOrContest?.trim() || undefined,
      priority,
      status: "OPEN",
      salesforceSynced: false,
      createdAt: new Date().toISOString(),
    };

    let salesforceSynced = false;
    try {
      const res = await fetch("/api/support/cases", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "CREATE", caseItem: newCase }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data?.salesforceSynced) {
          salesforceSynced = true;
          newCase.salesforceSynced = true;
        }
      }
    } catch {
      // fallback to local persistence
    }

    const updated = [newCase, ...supportCases];
    setSupportCases(updated);
    try {
      localStorage.setItem("vidyalila_support_cases_v1", JSON.stringify(updated));
    } catch {
      // ignore
    }

    setCelebration({
      title: `Support Case ${caseNumber} Logged! 🛡️`,
      subtitle:
        "Our Student Support & Grievance Desk has received your ticket and will resolve it within 24–48 hours.",
      xpEarned: 0,
      badgeEmoji: "🎧",
    });

    return { ok: true, caseItem: newCase, salesforceSynced };
  };

  const resolveSupportCase = (
    caseId: string,
    resolutionNote: string,
    creditsToRefund?: number
  ) => {
    const cleanCredits =
      typeof creditsToRefund === "number" && creditsToRefund > 0
        ? Math.round(creditsToRefund)
        : 0;

    let targetCase: SupportCase | undefined;
    const updated = supportCases.map((c) => {
      if (c.id === caseId) {
        targetCase = c;
        const resolvedItem: SupportCase = {
          ...c,
          status: cleanCredits > 0 ? "RESOLVED_CREDITED" : "RESOLVED",
          resolutionNote:
            resolutionNote.trim() ||
            (cleanCredits > 0
              ? `Resolved & credited +${cleanCredits} Vidya Credits to student wallet.`
              : "Resolved by VidyaLila Support Desk."),
          creditsRefunded: cleanCredits > 0 ? cleanCredits : c.creditsRefunded,
          updatedAt: new Date().toISOString(),
        };
        return resolvedItem;
      }
      return c;
    });

    setSupportCases(updated);
    try {
      localStorage.setItem("vidyalila_support_cases_v1", JSON.stringify(updated));
    } catch {
      // ignore
    }

    if (cleanCredits > 0 && targetCase) {
      refundOrGrantCredits(
        cleanCredits,
        `Support Case ${targetCase.caseNumber} Resolution (${targetCase.subject})`,
        targetCase.studentEmail || targetCase.studentUsername
      );
    }

    fetch("/api/support/cases", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "RESOLVE",
        caseId,
        resolutionNote,
        creditsRefunded: cleanCredits,
      }),
    }).catch(() => {});
  };

  const dismissCelebration = () => setCelebration(null);

  const todayIst = getTodayIstDate();
  const hasPlayedDailyTrickToday = Boolean(
    profile.lastDailyChallengeDate === todayIst
  );

  // Automatic Daily Streak Tracker & 8-Ball Pool Style Daily Trick Question Trigger
  useEffect(() => {
    if (!isAuthenticated || authLoading) return;
    if (!profile.username || profile.username === "@guest_scholar") return;

    const today = getTodayIstDate();
    const yesterday = getYesterdayIstDate();
    const acctKey = (
      profile.id ||
      profile.email ||
      profile.username
    ).toLowerCase();

    try {
      const rawStreakMap = localStorage.getItem("vidyalila_daily_streak_map_v1");
      const streakMap: Record<
        string,
        {
          streak: number;
          lastStreakDate: string;
          lastDailyChallengeDate?: string;
          dailyTrickWins?: number;
        }
      > = rawStreakMap ? JSON.parse(rawStreakMap) : {};

      const savedRec = streakMap[acctKey];
      const prevStreakDate =
        savedRec?.lastStreakDate || profile.lastStreakDate || "";
      const prevChallengeDate =
        savedRec?.lastDailyChallengeDate ||
        profile.lastDailyChallengeDate ||
        "";
      let nextStreak = Math.max(savedRec?.streak || 1, profile.streak || 1);

      if (prevStreakDate !== today) {
        if (prevStreakDate === yesterday) {
          nextStreak = nextStreak + 1;
        } else if (prevStreakDate && prevStreakDate < yesterday) {
          nextStreak = 1;
        } else if (!prevStreakDate) {
          nextStreak = Math.max(nextStreak, 1);
        }

        const updatedRec = {
          streak: nextStreak,
          lastStreakDate: today,
          lastDailyChallengeDate: prevChallengeDate,
          dailyTrickWins: savedRec?.dailyTrickWins ?? profile.dailyTrickWins ?? 0,
        };
        streakMap[acctKey] = updatedRec;
        localStorage.setItem(
          "vidyalila_daily_streak_map_v1",
          JSON.stringify(streakMap)
        );

        setProfile((prev) => ({
          ...prev,
          streak: nextStreak,
          lastStreakDate: today,
          lastDailyChallengeDate: prevChallengeDate || prev.lastDailyChallengeDate,
        }));
      } else if (
        prevChallengeDate === today &&
        profile.lastDailyChallengeDate !== today
      ) {
        setProfile((prev) => ({
          ...prev,
          streak: nextStreak,
          lastStreakDate: today,
          lastDailyChallengeDate: today,
        }));
      }

      // If student hasn't played today's Daily Streak Trick Question yet, pop open the modal once per session
      const sessionPopupKey = `vidyalila_daily_popup_shown_${acctKey}_${today}`;
      if (
        prevChallengeDate !== today &&
        !sessionStorage.getItem(sessionPopupKey)
      ) {
        sessionStorage.setItem(sessionPopupKey, "true");
        const timer = setTimeout(() => {
          setShowDailyTrickModal(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // ignore storage errors
    }
  }, [
    isAuthenticated,
    authLoading,
    profile.id,
    profile.email,
    profile.username,
  ]);

  const submitDailyTrickAnswer = (
    isCorrect: boolean,
    questionTitle: string
  ): { creditsEarned: number; newStreak: number } => {
    const today = getTodayIstDate();
    const acctKey = (
      profile.id ||
      profile.email ||
      profile.username ||
      "guest"
    ).toLowerCase();

    const alreadyPlayedToday = profile.lastDailyChallengeDate === today;
    const rewardCredits = isCorrect && !alreadyPlayedToday ? 15 : 0;
    const rewardXp = isCorrect && !alreadyPlayedToday ? 25 : 0;
    const nextStreak = Math.max(profile.streak || 1, 1);
    const curCredits =
      typeof profile.credits === "number" ? profile.credits : 0;
    const nextCredits = curCredits + rewardCredits;
    const nextWins =
      (profile.dailyTrickWins || 0) + (rewardCredits > 0 ? 1 : 0);

    try {
      const rawStreakMap = localStorage.getItem("vidyalila_daily_streak_map_v1");
      const streakMap = rawStreakMap ? JSON.parse(rawStreakMap) : {};
      streakMap[acctKey] = {
        streak: nextStreak,
        lastStreakDate: today,
        lastDailyChallengeDate: today,
        dailyTrickWins: nextWins,
      };
      localStorage.setItem(
        "vidyalila_daily_streak_map_v1",
        JSON.stringify(streakMap)
      );
    } catch {
      // ignore
    }

    const nextTransactions: CreditTransaction[] =
      rewardCredits > 0
        ? [
            {
              id: `tx-daily-trick-${Date.now()}`,
              type: "GOODIE_REWARD",
              amount: rewardCredits,
              balanceAfter: nextCredits,
              description: `🎯 Daily Streak Trick Shot Winner (Day ${nextStreak} Streak • "${questionTitle}")`,
              createdAt: "Just now",
            },
            ...(profile.creditTransactions || []),
          ]
        : profile.creditTransactions || [];

    saveProfile({
      ...profile,
      streak: nextStreak,
      lastStreakDate: today,
      lastDailyChallengeDate: today,
      dailyTrickWins: nextWins,
      credits: nextCredits,
      xp: (profile.xp || 0) + rewardXp,
      creditTransactions: nextTransactions,
    });

    return { creditsEarned: rewardCredits, newStreak: nextStreak };
  };

  return (
    <AppContext.Provider
      value={{
        profile,
        isAuthenticated,
        authLoading,
        currentRank,
        nextRank,
        modules,
        contests,
        contentReports,
        supportCases,
        selectedBoardFilter,
        selectedClassFilter,
        contentLanguage,
        celebration,
        setSelectedBoardFilter,
        setSelectedClassFilter,
        setContentLanguage,
        updateProfileBoardAndClass,
        checkUsernameAvailability,
        completeOnboardingPreferences,
        updateUniqueUsername,
        updateProfilePhone,
        completeUnit,
        isChapterFreeStarter,
        isChapterUnlocked,
        getAlreadyUnlockedPaidChaptersCount,
        unlockChapterWithCredits,
        hasPlayedDailyTrickToday,
        showDailyTrickModal,
        setShowDailyTrickModal,
        submitDailyTrickAnswer,
        getContestCreditCost,
        unlockContestSingle,
        activateProPass,
        consumePassForContest,
        refundOrGrantCredits,
        submitContestResult,
        addCustomModule,
        addCustomContest,
        submitContentReport,
        resolveContentReport,
        submitSupportCase,
        resolveSupportCase,
        dismissCelebration,
        signUpUser,
        signInUser,
        signInWithGoogle,
        signOutUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
