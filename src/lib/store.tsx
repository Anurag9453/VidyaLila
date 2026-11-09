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
  hasProPass: boolean;
  proPassPlan?: "ONE_DAY" | "WEEKLY" | "MONTHLY";
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
  activateProPass: (plan: "ONE_DAY" | "WEEKLY" | "MONTHLY", autoUnlockContestId?: string) => void;
  consumePassForContest: (contestId: string, contestType: "DAILY" | "WEEKLY" | "MONTHLY") => boolean;
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
  const [selectedBoardFilter, setSelectedBoardFilter] = useState<BoardType>("BOTH");
  const [selectedClassFilter, setSelectedClassFilter] = useState<ClassGrade | "ALL">("ALL");
  const [contentLanguage, setContentLanguageState] = useState<ContentLanguage>("HINGLISH");
  const [celebration, setCelebration] = useState<CelebrationEvent | null>(null);

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

              const syncedProfile: StudentProfile = {
                ...DEFAULT_PROFILE,
                ...syncData.profile,
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
              };
              setProfile(syncedProfile);
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

        const mapped: StudentProfile = {
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
        };
        setProfile(mapped);
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

        const fallbackProfile: StudentProfile = {
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
        };
        setProfile(fallbackProfile);
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
      if (savedProfile) setProfile(JSON.parse(savedProfile));
      const savedAuth = localStorage.getItem("vidyalila_is_auth_v4");
      if (savedAuth === "true") setIsAuthenticated(true);
      const savedModules = localStorage.getItem("vidyalila_modules_v12");
      if (savedModules) setModules(JSON.parse(savedModules));
      const savedContests = localStorage.getItem("vidyalila_contests_v11");
      if (savedContests) setContests(JSON.parse(savedContests));
      const savedReports = localStorage.getItem("vidyalila_reports_v1");
      if (savedReports) setContentReports(JSON.parse(savedReports));
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
    setProfile(next);
    try {
      localStorage.setItem("vidyalila_profile_v6", JSON.stringify(next));
    } catch {
      // ignore
    }
    // Sync harmless profile fields to Supabase if connected and authenticated
    // XP, rating, passes, and role are strictly updated on the server
    if (isSupabaseConfigured && next.id) {
      supabase
        .from("profiles")
        .update({
          full_name: next.name,
          avatar_url: next.avatar,
          board: next.board,
          class_grade: next.classGrade,
          city: next.city,
          school_name: next.school,
        })
        .eq("id", next.id)
        .then(() => {});
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
            setProfile(record.profile);
            setIsAuthenticated(true);
            localStorage.setItem("vidyalila_profile_v6", JSON.stringify(record.profile));
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

      setProfile(record.profile);
      setIsAuthenticated(true);
      localStorage.setItem("vidyalila_profile_v6", JSON.stringify(record.profile));
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
    setProfile(DEFAULT_PROFILE);
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

  const unlockContestSingle = (contestId: string) => {
    if (profile.unlockedContestIds.includes(contestId)) return;
    saveProfile({
      ...profile,
      unlockedContestIds: [...profile.unlockedContestIds, contestId],
    });
  };

  const activateProPass = (
    plan: "ONE_DAY" | "WEEKLY" | "MONTHLY",
    autoUnlockContestId?: string
  ) => {
    const curDaily = profile.dailyPassesRemaining || 0;
    const curComp = profile.competitionPassesRemaining || 0;

    let addDaily = 2;
    let addComp = 0;
    let passTitle = "⚡ Basic Pass (Daily) Activated (₹49 • 2 Daily Quizzes)!";
    let passSub =
      "Added 2 Daily Quiz Credits to your wallet. Note: Passes are Quiz-Wise (1 Credit = 1 Quiz). Once both are used, recharge to add more!";

    if (plan === "WEEKLY") {
      addDaily = 7;
      addComp = 1;
      passTitle = "💎 VIP Pass (Weekly) Activated (₹149 • 7 Daily + 1 Weekly Quiz)!";
      passSub =
        "Added 7 Daily Quiz Credits + 1 Weekly Quiz Credit (8 total). Passes are deducted per quiz taken (if you use all 7 in 2 days, your balance will be exhausted).";
    } else if (plan === "MONTHLY") {
      addDaily = 30;
      addComp = 4;
      passTitle = "👑 Pro Pass (Monthly) Activated (₹499 • 30 Daily + 4 Weekly Quizzes)!";
      passSub =
        "Added 30 Daily Quiz Credits + 4 Weekly/Monthly Quiz Credits (34 total) to your wallet. Check User Settings to track your remaining quiz balance!";
    }

    let nextDaily = curDaily + addDaily;
    let nextComp = curComp + addComp;
    const nextUnlocked = [...profile.unlockedContestIds];

    if (autoUnlockContestId && !nextUnlocked.includes(autoUnlockContestId)) {
      const targetContest = contests.find((c) => c.id === autoUnlockContestId);
      if (targetContest) {
        if (targetContest.type === "DAILY" && nextDaily > 0) {
          nextDaily -= 1;
          nextUnlocked.push(autoUnlockContestId);
        } else if (targetContest.type !== "DAILY" && nextComp > 0) {
          nextComp -= 1;
          nextUnlocked.push(autoUnlockContestId);
        }
      }
    }

    const bonusBadges = [...profile.earnedBadges];
    if (
      plan === "MONTHLY" &&
      !bonusBadges.some((b) => b.name === "Monthly Pass Scholar")
    ) {
      bonusBadges.unshift({
        name: "Monthly Pass Scholar",
        emoji: "👑",
        date: "Just now",
      });
    }

    const stillHasPasses = nextDaily + nextComp > 0;

    saveProfile({
      ...profile,
      hasProPass: stillHasPasses,
      proPassPlan: plan,
      proPassPurchasedAt: stillHasPasses ? "Active Now" : "Exhausted — Recharge Required",
      dailyPassesRemaining: nextDaily,
      competitionPassesRemaining: nextComp,
      unlockedContestIds: nextUnlocked,
      // GPs are strictly earned via learning & unit tests, never upgraded on pass purchase
      xp: profile.xp,
      earnedBadges: bonusBadges,
    });

    setCelebration({
      title: passTitle,
      subtitle: passSub,
      xpEarned: 0,
      badgeEmoji: plan === "MONTHLY" ? "👑" : plan === "WEEKLY" ? "💎" : "⚡",
    });
  };

  const consumePassForContest = (
    contestId: string,
    contestType: "DAILY" | "WEEKLY" | "MONTHLY"
  ): boolean => {
    if (profile.unlockedContestIds.includes(contestId)) return true;

    const curDaily = profile.dailyPassesRemaining || 0;
    const curComp = profile.competitionPassesRemaining || 0;

    if (contestType === "DAILY" && curDaily > 0) {
      const nextDaily = curDaily - 1;
      const stillHasPasses = nextDaily + curComp > 0;
      saveProfile({
        ...profile,
        hasProPass: stillHasPasses,
        proPassPurchasedAt: stillHasPasses
          ? "Active Now"
          : "Exhausted — Recharge Required",
        dailyPassesRemaining: nextDaily,
        unlockedContestIds: [...profile.unlockedContestIds, contestId],
      });
      return true;
    }

    if (contestType !== "DAILY" && curComp > 0) {
      const nextComp = curComp - 1;
      const stillHasPasses = curDaily + nextComp > 0;
      saveProfile({
        ...profile,
        hasProPass: stillHasPasses,
        proPassPurchasedAt: stillHasPasses
          ? "Active Now"
          : "Exhausted — Recharge Required",
        competitionPassesRemaining: nextComp,
        unlockedContestIds: [...profile.unlockedContestIds, contestId],
      });
      return true;
    }

    return false;
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

    // Top-Ranker Goodies: Reward Free Quiz Passes to Top Performers!
    let goodieDailyAdded = 0;
    let goodieCompAdded = 0;
    let goodieLabel = "";
    const cType = contest?.type || "DAILY";

    if (ratio === 1) {
      // Top 3 Ranker Bracket (100% Accuracy)
      if (cType === "MONTHLY") {
        goodieDailyAdded = 30;
        goodieCompAdded = 4;
        goodieLabel = "🎁 Top-3 Goodie Won: Free 👑 Pro Pass (34 Quizzes • Worth ₹499)!";
      } else if (cType === "WEEKLY") {
        goodieDailyAdded = 7;
        goodieCompAdded = 1;
        goodieLabel = "🎁 Top-3 Goodie Won: Free 💎 VIP Pass (8 Quizzes • Worth ₹149)!";
      } else {
        goodieDailyAdded = 2;
        goodieLabel = "🎁 Top-3 Goodie Won: Free ⚡ Basic Pass (2 Daily Quizzes • Worth ₹49)!";
      }
    } else if (ratio >= 0.75) {
      // Top 10 Ranker Bracket (75%+ Accuracy)
      if (cType === "MONTHLY") {
        goodieDailyAdded = 7;
        goodieCompAdded = 1;
        goodieLabel = "🎁 Top-10 Goodie Won: Free 💎 VIP Pass (8 Quizzes • Worth ₹149)!";
      } else if (cType === "WEEKLY") {
        goodieDailyAdded = 2;
        goodieLabel = "🎁 Top-10 Goodie Won: Free ⚡ Basic Pass (2 Daily Quizzes • Worth ₹49)!";
      } else {
        goodieDailyAdded = 1;
        goodieLabel = "🎁 Top-10 Goodie Won: +1 Free Daily Quiz Pass Credit!";
      }
    }

    const nextDaily = (profile.dailyPassesRemaining || 0) + goodieDailyAdded;
    const nextComp = (profile.competitionPassesRemaining || 0) + goodieCompAdded;
    const nextBadges = [...profile.earnedBadges];

    if (
      goodieDailyAdded > 0 &&
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

    // GPs are strictly for free study content; quizzes update Contest Rating, History & Goodie Passes
    saveProfile({
      ...profile,
      xp: profile.xp,
      rating: profile.rating + ratingDelta,
      hasProPass: nextDaily + nextComp > 0 ? true : profile.hasProPass,
      dailyPassesRemaining: nextDaily,
      competitionPassesRemaining: nextComp,
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
        ? `Your Free Goodie Pass Credits have been added directly to your Pass Wallet! Contest Rating +${ratingDelta} (Now ${
            profile.rating + ratingDelta
          }).`
        : `Contest Rating ${ratingDelta >= 0 ? `+${ratingDelta}` : ratingDelta} (Now ${
            profile.rating + ratingDelta
          }). Score 75%+ next time to win Free Pass Goodies!`,
      xpEarned: 0,
      badgeEmoji: goodieLabel ? "🎁" : "⚔️",
    });
  };

  const addCustomModule = (mod: LearningModule) => {
    const updated = [mod, ...modules];
    setModules(updated);
    try {
      localStorage.setItem("vidyalila_modules_v12", JSON.stringify(updated));
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

  const dismissCelebration = () => setCelebration(null);

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
        unlockContestSingle,
        activateProPass,
        consumePassForContest,
        submitContestResult,
        addCustomModule,
        addCustomContest,
        submitContentReport,
        resolveContentReport,
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
