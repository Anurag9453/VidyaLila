"use client";

import React, { useState, useEffect, useMemo, useRef, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useApp } from "@/lib/store";
import {
  LEADERBOARD_DATA,
  RANK_TIERS,
  LeaderboardEntry,
  ClassGrade,
  QuizContest,
} from "@/lib/mock-data";

type SubjectName = "Physics" | "Chemistry" | "Mathematics";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import {
  Trophy,
  Flame,
  TrendingUp,
  Award,
  MapPin,
  Crown,
  Search,
  Calendar,
  Zap,
  Lock,
  ArrowDownCircle,
  CheckCircle2,
  Clock,
  Target,
  Users,
  Sparkles,
  X,
} from "lucide-react";

const TOP_DISPLAY_LIMIT = 15;

function isImageAvatar(val?: string): boolean {
  if (!val) return false;
  return (
    val.startsWith("http://") ||
    val.startsWith("https://") ||
    val.startsWith("//") ||
    val.includes("googleusercontent.com")
  );
}

function AvatarDisplay({
  avatar,
  fallback = "🚀",
}: {
  avatar?: string;
  fallback?: string;
}) {
  if (isImageAvatar(avatar)) {
    const src = avatar!.startsWith("http")
      ? avatar!
      : `https://${avatar!.replace(/^\/+/, "")}`;
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt="Avatar"
        referrerPolicy="no-referrer"
        className="h-full w-full rounded-[inherit] object-cover"
      />
    );
  }
  return <>{avatar || fallback}</>;
}

interface MonthlyTestItem {
  id: string;
  title: string;
  type: "DAILY" | "WEEKLY" | "MONTHLY";
  classGrade: ClassGrade;
  subject: SubjectName;
  dateLabel: string;
  dayOfMonth: number;
  totalMarks: number;
  durationMinutes: number;
  participantsCount: number;
  syllabusLabel: string;
  isLive?: boolean;
}

interface TestRankRow {
  rank: number;
  name: string;
  username: string;
  classGrade: number;
  city: string;
  avatar: string;
  score: number;
  totalMarks: number;
  accuracy: number;
  timeTakenLabel: string;
  ratingDelta: number;
  xpEarned: number;
  isCurrentUser?: boolean;
}

function getCurrentMonthMeta() {
  const now = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const shortMonthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return {
    monthName: monthNames[now.getMonth()],
    shortMonth: shortMonthNames[now.getMonth()],
    year: now.getFullYear(),
    todayDate: now.getDate(),
  };
}

function buildCurrentMonthTests(contests: QuizContest[]): MonthlyTestItem[] {
  const { shortMonth, year, todayDate } = getCurrentMonthMeta();
  const list: MonthlyTestItem[] = [];
  const seenIds = new Set<string>();

  // 1. Include all active & configured contests from store as current month tests
  contests.forEach((c, idx) => {
    if (c.classGrade !== 9 && c.classGrade !== 10) return;
    seenIds.add(c.id);
    const totalMarks =
      c.type === "DAILY" ? 20 : c.type === "WEEKLY" ? 40 : 60;
    const dayNum = Math.max(1, todayDate - (idx % 6));
    list.push({
      id: c.id,
      title: c.title,
      type: c.type,
      classGrade: c.classGrade,
      subject: c.subject,
      dateLabel: c.isLive
        ? `Today, ${dayNum} ${shortMonth} ${year}`
        : `${dayNum} ${shortMonth} ${year}`,
      dayOfMonth: dayNum,
      totalMarks,
      durationMinutes: c.durationMinutes,
      participantsCount: c.participantsCount,
      syllabusLabel:
        c.syllabusScope === "SELECTED_CHAPTERS"
          ? "📌 Selected Chapters"
          : "🌍 Full Syllabus",
      isLive: c.isLive,
    });
  });

  // 2. Add additional current-month Daily & Weekly tests so the entire month's test log is browsable
  const extraMonthlySchedule: Omit<MonthlyTestItem, "dateLabel">[] = [
    {
      id: "month-daily-c10-phys-d1",
      title: "Daily Physics Sprint: Light Reflection & Mirror Formula",
      type: "DAILY",
      classGrade: 10,
      subject: "Physics",
      dayOfMonth: Math.max(1, todayDate - 1),
      totalMarks: 20,
      durationMinutes: 15,
      participantsCount: 1640,
      syllabusLabel: "📌 Selected Chapters",
    },
    {
      id: "month-daily-c10-math-d2",
      title: "Daily Maths Sprint: Quadratic Equations & AP",
      type: "DAILY",
      classGrade: 10,
      subject: "Mathematics",
      dayOfMonth: Math.max(1, todayDate - 2),
      totalMarks: 20,
      durationMinutes: 15,
      participantsCount: 1890,
      syllabusLabel: "📌 Selected Chapters",
    },
    {
      id: "month-daily-c10-chem-d3",
      title: "Daily Chemistry Sprint: Acids, Bases & pH Scale",
      type: "DAILY",
      classGrade: 10,
      subject: "Chemistry",
      dayOfMonth: Math.max(1, todayDate - 3),
      totalMarks: 20,
      durationMinutes: 15,
      participantsCount: 1410,
      syllabusLabel: "🌍 Full Syllabus",
    },
    {
      id: "month-daily-c9-phys-d1",
      title: "Daily Physics Sprint: Equations of Motion & Graphs",
      type: "DAILY",
      classGrade: 9,
      subject: "Physics",
      dayOfMonth: Math.max(1, todayDate - 1),
      totalMarks: 20,
      durationMinutes: 15,
      participantsCount: 1320,
      syllabusLabel: "📌 Selected Chapters",
    },
    {
      id: "month-daily-c9-math-d2",
      title: "Daily Maths Sprint: Polynomials & Factor Theorem",
      type: "DAILY",
      classGrade: 9,
      subject: "Mathematics",
      dayOfMonth: Math.max(1, todayDate - 2),
      totalMarks: 20,
      durationMinutes: 15,
      participantsCount: 1510,
      syllabusLabel: "🌍 Full Syllabus",
    },
    {
      id: "month-weekly-c10-w1",
      title: `Week 1 Sunday Championship: Class 10 Science & Maths`,
      type: "WEEKLY",
      classGrade: 10,
      subject: "Physics",
      dayOfMonth: 7,
      totalMarks: 40,
      durationMinutes: 30,
      participantsCount: 2840,
      syllabusLabel: "🌍 Full Syllabus",
    },
    {
      id: "month-weekly-c10-w2",
      title: `Week 2 Sunday Championship: Class 10 Board Booster`,
      type: "WEEKLY",
      classGrade: 10,
      subject: "Mathematics",
      dayOfMonth: 14,
      totalMarks: 40,
      durationMinutes: 30,
      participantsCount: 3120,
      syllabusLabel: "🌍 Full Syllabus",
    },
    {
      id: "month-weekly-c9-w1",
      title: `Week 1 Sunday Championship: Class 9 Foundation Cup`,
      type: "WEEKLY",
      classGrade: 9,
      subject: "Physics",
      dayOfMonth: 7,
      totalMarks: 40,
      durationMinutes: 30,
      participantsCount: 2190,
      syllabusLabel: "🌍 Full Syllabus",
    },
    {
      id: "month-weekly-c9-w2",
      title: `Week 2 Sunday Championship: Class 9 Olympiad Prep`,
      type: "WEEKLY",
      classGrade: 9,
      subject: "Mathematics",
      dayOfMonth: 14,
      totalMarks: 40,
      durationMinutes: 30,
      participantsCount: 2450,
      syllabusLabel: "📌 Selected Chapters",
    },
  ];

  for (const item of extraMonthlySchedule) {
    if (!seenIds.has(item.id)) {
      seenIds.add(item.id);
      list.push({
        ...item,
        dateLabel: `${item.dayOfMonth} ${shortMonth} ${year}`,
      });
    }
  }

  return list;
}

function hashSeed(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function LeaderboardContent() {
  const searchParams = useSearchParams();
  const initialContestId = searchParams.get("contestId");

  const { profile, currentRank, contests } = useApp();
  const pinnedUserRowRef = useRef<HTMLTableRowElement | null>(null);

  // Board Mode: DAILY_TESTS | WEEKLY_TESTS | OVERALL
  const [boardTab, setBoardTab] = useState<
    "DAILY_TESTS" | "WEEKLY_TESTS" | "OVERALL"
  >("DAILY_TESTS");

  const [sortMode, setSortMode] = useState<"GP" | "RATING">("GP");
  const [selectedClass, setSelectedClass] = useState<"ALL" | 9 | 10>("ALL");
  const [selectedSubject, setSelectedSubject] = useState<"ALL" | SubjectName>(
    "ALL"
  );
  const [classLockAlert, setClassLockAlert] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Toggle so user/founder can preview how outside-Top-20 standing looks vs Top-15 standing
  const [simulateOutsideTop20, setSimulateOutsideTop20] =
    useState<boolean>(true);

  const [liveProfiles, setLiveProfiles] = useState<LeaderboardEntry[]>([]);
  const [liveTestSubmissions, setLiveTestSubmissions] = useState<
    Record<
      string,
      {
        username: string;
        score: number;
        total: number;
        accuracy: number;
        ratingDelta: number;
      }[]
    >
  >({});

  const { monthName, year } = getCurrentMonthMeta();
  const allMonthTests = useMemo(
    () => buildCurrentMonthTests(contests),
    [contests]
  );

  const [selectedTestId, setSelectedTestId] = useState<string>(
    allMonthTests[0]?.id || "contest-daily-c10-phys"
  );

  // Sync URL ?contestId=... if provided
  useEffect(() => {
    if (!initialContestId) return;
    const found = allMonthTests.find((t) => t.id === initialContestId);
    if (found) {
      setSelectedTestId(found.id);
      if (found.type === "DAILY") {
        setBoardTab("DAILY_TESTS");
      } else {
        setBoardTab("WEEKLY_TESTS");
      }
    }
  }, [initialContestId, allMonthTests]);

  // Filter tests for the active tab (Daily vs Weekly/Monthly) + Class + Subject
  const filteredMonthTests = useMemo(() => {
    return allMonthTests.filter((t) => {
      if (boardTab === "DAILY_TESTS" && t.type !== "DAILY") return false;
      if (boardTab === "WEEKLY_TESTS" && t.type === "DAILY") return false;
      if (selectedClass !== "ALL" && t.classGrade !== selectedClass)
        return false;
      if (selectedSubject !== "ALL" && t.subject !== selectedSubject)
        return false;
      return true;
    });
  }, [allMonthTests, boardTab, selectedClass, selectedSubject]);

  // Ensure selectedTestId stays valid when switching tabs/filters
  useEffect(() => {
    if (boardTab === "OVERALL") return;
    if (
      filteredMonthTests.length > 0 &&
      !filteredMonthTests.some((t) => t.id === selectedTestId)
    ) {
      setSelectedTestId(filteredMonthTests[0].id);
    }
  }, [boardTab, filteredMonthTests, selectedTestId]);

  const activeTest = useMemo(() => {
    return (
      filteredMonthTests.find((t) => t.id === selectedTestId) ||
      allMonthTests[0]
    );
  }, [filteredMonthTests, selectedTestId, allMonthTests]);

  // Load live profiles from Supabase
  useEffect(() => {
    if (!isSupabaseConfigured) return;
    supabase
      .from("profiles")
      .select("*")
      .order("xp_points", { ascending: false })
      .limit(60)
      .then(({ data }) => {
        if (data && data.length > 0) {
          const mapped: LeaderboardEntry[] = data.map((row, i) => ({
            rank: i + 1,
            name: row.full_name || "Scholar",
            username: row.username || `@scholar_${i}`,
            board: (row.board as "CBSE" | "ICSE") || "CBSE",
            classGrade:
              Number(row.class_grade) === 9 || Number(row.class_grade) === 10
                ? Number(row.class_grade)
                : 10,
            city: row.city || "Delhi",
            xp: Number(row.xp_points || 0),
            rating: Number(row.contest_rating || 1500),
            streak: Number(row.current_streak || 1),
            badges: Number(row.badges_count || 1),
            avatar: row.avatar_url || "🚀",
          }));
          setLiveProfiles(mapped);
        }
      });
  }, [profile.xp, profile.rating]);

  // Load live contest submissions for selected test from Supabase if available
  useEffect(() => {
    if (!isSupabaseConfigured || !activeTest) return;
    supabase
      .from("contest_submissions")
      .select("contest_id, score, total_questions, accuracy, rating_delta")
      .eq("contest_id", activeTest.id)
      .order("score", { ascending: false })
      .limit(50)
      .then(({ data }) => {
        if (data && data.length > 0) {
          setLiveTestSubmissions((prev) => ({
            ...prev,
            [activeTest.id]: data.map((d, idx) => ({
              username: `@live_candidate_${idx + 1}`,
              score: Number(d.score || 0),
              total: Number(d.total_questions || activeTest.totalMarks),
              accuracy: Number(d.accuracy || 80),
              ratingDelta: Number(d.rating_delta || 15),
            })),
          }));
        }
      });
  }, [activeTest]);

  // 1. Build Overall All-India Leaderboard (26+ candidates)
  const overallList = useMemo(() => {
    const seenUsernames = new Set<string>();
    const rawList: (LeaderboardEntry & { isCurrentUser?: boolean })[] = [];

    const effectiveUserXp = simulateOutsideTop20
      ? 1310 // Places user around Rank #23 (outside Top 15/20)
      : profile.xp;
    const effectiveUserRating = simulateOutsideTop20
      ? 1488 // Places user around Rank #23 (outside Top 15/20)
      : profile.rating;

    const currentUserEntry: LeaderboardEntry & { isCurrentUser?: boolean } = {
      rank: 0,
      name: `${profile.name} (You)`,
      username: profile.username,
      board: profile.board,
      classGrade: profile.classGrade,
      city: profile.city,
      xp: effectiveUserXp,
      rating: effectiveUserRating,
      streak: profile.streak,
      badges: profile.earnedBadges.length,
      avatar: profile.avatar,
      isCurrentUser: true,
    };

    rawList.push(currentUserEntry);
    seenUsernames.add(profile.username.toLowerCase());

    for (const item of [...liveProfiles, ...LEADERBOARD_DATA]) {
      const key = item.username.toLowerCase();
      if (!seenUsernames.has(key)) {
        seenUsernames.add(key);
        rawList.push(item);
      }
    }

    return rawList
      .filter((entry) =>
        selectedClass === "ALL"
          ? true
          : entry.isCurrentUser || entry.classGrade === selectedClass
      )
      .sort((a, b) => (sortMode === "GP" ? b.xp - a.xp : b.rating - a.rating))
      .map((entry, idx) => ({ ...entry, rank: idx + 1 }));
  }, [
    profile,
    liveProfiles,
    sortMode,
    selectedClass,
    simulateOutsideTop20,
  ]);

  // 2. Build Per-Test Rank List for the Selected Current Month Test (26+ candidates)
  const testRankList = useMemo((): TestRankRow[] => {
    if (!activeTest) return [];
    const totalMarks = activeTest.totalMarks;
    const seedBase = hashSeed(activeTest.id);

    // Pool of 25 benchmark candidates
    const rows: Omit<TestRankRow, "rank">[] = LEADERBOARD_DATA.map(
      (scholar, idx) => {
        const sHash = (seedBase + idx * 17) % 100;
        // Generate realistic scores from top (100%) down to ~55%
        const rankFactor = Math.max(0, 1 - idx * 0.018 - (sHash % 5) * 0.005);
        const rawScore = Math.max(
          Math.round(totalMarks * 0.45),
          Math.min(totalMarks, Math.round(totalMarks * rankFactor))
        );
        const accuracy = Math.min(
          100,
          Math.max(52, Math.round((rawScore / totalMarks) * 100))
        );
        const minTaken = Math.max(
          4,
          Math.min(
            activeTest.durationMinutes - 1,
            Math.round(activeTest.durationMinutes * (0.45 + idx * 0.018))
          )
        );
        const secTaken = (sHash * 7) % 60;

        return {
          name: scholar.name,
          username: scholar.username,
          classGrade: scholar.classGrade,
          city: scholar.city,
          avatar: scholar.avatar,
          score: rawScore,
          totalMarks,
          accuracy,
          timeTakenLabel: `${minTaken}m ${String(secTaken).padStart(2, "0")}s`,
          ratingDelta: idx < 5 ? 38 - idx * 4 : idx < 15 ? 20 - idx : 5,
          xpEarned:
            activeTest.type === "DAILY"
              ? 150 + rawScore * 5
              : 400 + rawScore * 8,
          isCurrentUser: false,
        };
      }
    );

    // Check if current user has an actual submission in contestHistory for this test
    const userActualAttempt = profile.contestHistory.find(
      (h) =>
        h.contestId === activeTest.id ||
        h.title.toLowerCase() === activeTest.title.toLowerCase()
    );

    // If simulateOutsideTop20 is true, place user around Rank #23 so they can clearly see how outside-Top-15/20 works
    const userScore = simulateOutsideTop20
      ? Math.max(1, Math.round(totalMarks * 0.58))
      : userActualAttempt
      ? Math.min(
          totalMarks,
          Math.round((userActualAttempt.score / Math.max(1, userActualAttempt.total)) * totalMarks)
        )
      : Math.round(totalMarks * 0.92);

    const userAccuracy = Math.round((userScore / totalMarks) * 100);
    const userMinutes = simulateOutsideTop20
      ? Math.max(5, activeTest.durationMinutes - 2)
      : Math.max(4, Math.round(activeTest.durationMinutes * 0.6));

    // Remove duplicate username if present
    const filteredRows = rows.filter(
      (r) => r.username.toLowerCase() !== profile.username.toLowerCase()
    );

    filteredRows.push({
      name: `${profile.name} (You)`,
      username: profile.username,
      classGrade: profile.classGrade,
      city: profile.city,
      avatar: profile.avatar,
      score: userScore,
      totalMarks,
      accuracy: userAccuracy,
      timeTakenLabel: `${userMinutes}m 14s`,
      ratingDelta: userScore >= totalMarks * 0.75 ? 24 : 8,
      xpEarned:
        activeTest.type === "DAILY"
          ? 150 + userScore * 5
          : 400 + userScore * 8,
      isCurrentUser: true,
    });

    // Sort by Score DESC, then Accuracy DESC, then faster time
    return filteredRows
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        if (b.accuracy !== a.accuracy) return b.accuracy - a.accuracy;
        return a.timeTakenLabel.localeCompare(b.timeTakenLabel);
      })
      .map((item, idx) => ({
        ...item,
        rank: idx + 1,
      }));
  }, [activeTest, profile, simulateOutsideTop20, liveTestSubmissions]);

  // Slice Top 15 and compute current user's standing + neighbors
  const isPerTestView = boardTab !== "OVERALL";

  const top15TestRows = useMemo(
    () => testRankList.slice(0, TOP_DISPLAY_LIMIT),
    [testRankList]
  );
  const currentUserTestRow = useMemo(
    () => testRankList.find((r) => r.isCurrentUser),
    [testRankList]
  );
  const testRank15Cutoff = testRankList[TOP_DISPLAY_LIMIT - 1];

  // Neighbors around user when user is outside Top 15 in Per-Test view
  const userTestNeighborhood = useMemo(() => {
    if (!currentUserTestRow || currentUserTestRow.rank <= TOP_DISPLAY_LIMIT) {
      return [];
    }
    const idx = currentUserTestRow.rank - 1;
    const start = Math.max(TOP_DISPLAY_LIMIT, idx - 1);
    const end = Math.min(testRankList.length - 1, idx + 1);
    return testRankList.slice(start, end + 1);
  }, [currentUserTestRow, testRankList]);

  // Search results across ALL candidates (even outside Top 15)
  const searchMatchedTestRows = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return testRankList.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.username.toLowerCase().includes(q) ||
        r.city.toLowerCase().includes(q) ||
        `#${r.rank}` === q ||
        String(r.rank) === q
    );
  }, [searchQuery, testRankList]);

  // Overall Board Top 15 + User Standing + Search
  const top15OverallRows = useMemo(
    () => overallList.slice(0, TOP_DISPLAY_LIMIT),
    [overallList]
  );
  const currentUserOverallRow = useMemo(
    () => overallList.find((r) => r.isCurrentUser),
    [overallList]
  );
  const overallRank15Cutoff = overallList[TOP_DISPLAY_LIMIT - 1];

  const userOverallNeighborhood = useMemo(() => {
    if (
      !currentUserOverallRow ||
      currentUserOverallRow.rank <= TOP_DISPLAY_LIMIT
    ) {
      return [];
    }
    const idx = currentUserOverallRow.rank - 1;
    const start = Math.max(TOP_DISPLAY_LIMIT, idx - 1);
    const end = Math.min(overallList.length - 1, idx + 1);
    return overallList.slice(start, end + 1);
  }, [currentUserOverallRow, overallList]);

  const searchMatchedOverallRows = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return overallList.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.username.toLowerCase().includes(q) ||
        r.city.toLowerCase().includes(q) ||
        `#${r.rank}` === q ||
        String(r.rank) === q
    );
  }, [searchQuery, overallList]);

  const scrollToUserRank = () => {
    if (pinnedUserRowRef.current) {
      pinnedUserRowRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const activeUserRank = isPerTestView
    ? currentUserTestRow?.rank || 1
    : currentUserOverallRow?.rank || 1;

  const totalCandidatesCount = isPerTestView
    ? activeTest?.participantsCount || testRankList.length
    : 3420;

  const percentile = Math.max(
    1,
    Math.min(
      99.9,
      Number(
        (
          ((totalCandidatesCount - activeUserRank) / totalCandidatesCount) *
          100
        ).toFixed(1)
      )
    )
  );

  return (
    <div className="space-y-8">
      {/* STUDENT GAMIFIED PROFILE & RANK HEADER */}
      <section className="rounded-3xl border-2 border-sky-300 bg-gradient-to-r from-sky-50 via-white to-amber-50 p-4 sm:p-6 md:p-8 shadow-[0_8px_0_0_#bae6fd]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
            <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center overflow-hidden rounded-3xl bg-amber-400 border-2 border-amber-500 border-b-4 text-3xl sm:text-4xl shadow-md">
              <AvatarDisplay avatar={profile.avatar} />
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-indigo-100 border border-indigo-300 px-2.5 py-0.5 text-[10px] font-black text-indigo-800">
                  Class {profile.classGrade}
                </span>
                {profile.hasProPass && (
                  <span className="rounded-lg bg-amber-100 border border-amber-400 px-2 py-0.5 text-[10px] font-black text-amber-900 flex items-center gap-1">
                    <Crown className="h-3 w-3 text-amber-600" /> PRO VIP
                  </span>
                )}
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900">
                {profile.name}
              </h1>
              <p className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-rose-500 shrink-0" />
                {profile.school}, {profile.city}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-2xl border-2 border-amber-300 border-b-4 bg-white p-3.5 sm:p-4">
              <p className="text-[10px] sm:text-[11px] font-black text-slate-400">
                SCHOLAR RANK
              </p>
              <p className="mt-1 text-base sm:text-lg font-black text-amber-600">
                {currentRank.badgeEmoji} {currentRank.name}
              </p>
              <p className="text-[11px] font-bold text-slate-500">
                {profile.xp.toLocaleString()} GP
              </p>
            </div>

            <div className="rounded-2xl border-2 border-sky-300 border-b-4 bg-white p-3.5 sm:p-4">
              <p className="text-[10px] sm:text-[11px] font-black text-slate-400">
                QUIZ RATING
              </p>
              <p className="mt-1 text-base sm:text-lg font-black text-sky-600 flex items-center gap-1">
                <TrendingUp className="h-4 w-4 shrink-0" /> {profile.rating}
              </p>
              <p className="text-[11px] font-bold text-emerald-600">
                {percentile}%ile India
              </p>
            </div>

            <div className="rounded-2xl border-2 border-orange-300 border-b-4 bg-white p-3.5 sm:p-4">
              <p className="text-[10px] sm:text-[11px] font-black text-slate-400">
                DAILY STREAK
              </p>
              <p className="mt-1 text-base sm:text-lg font-black text-orange-600 flex items-center gap-1">
                <Flame className="h-4 w-4 fill-orange-500 shrink-0" />{" "}
                {profile.streak} Days
              </p>
              <p className="text-[11px] font-bold text-slate-500">On Fire!</p>
            </div>

            <div className="rounded-2xl border-2 border-violet-300 border-b-4 bg-white p-3.5 sm:p-4">
              <p className="text-[10px] sm:text-[11px] font-black text-slate-400">
                CURRENT MONTH TESTS
              </p>
              <p className="mt-1 text-base sm:text-lg font-black text-violet-600 flex items-center gap-1">
                <Award className="h-4 w-4 shrink-0" /> {allMonthTests.length}
              </p>
              <p className="text-[11px] font-bold text-slate-500">
                {monthName} {year}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN RANK BOARD SECTION: DAILY TESTS + WEEKLY TESTS + OVERALL */}
      <section className="rounded-3xl border-2 border-slate-200 bg-white p-4 sm:p-6 md:p-8 shadow-[0_8px_0_0_#e2e8f0] space-y-6">
        {/* Top Header + Board Type Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b-2 border-slate-100 pb-5">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-xl bg-amber-100 border border-amber-300 px-3 py-1 text-[11px] font-black text-amber-900">
                <Trophy className="h-3.5 w-3.5 text-amber-600" />
                <span>{monthName.toUpperCase()} {year} LIVE TEST RANK LISTS</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-xl bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-[11px] font-extrabold text-emerald-800">
                Top {TOP_DISPLAY_LIMIT} Leaderboard + Pinned Personal Rank
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              All-India Test-Wise &amp; Monthly Rank Board
            </h2>
            <p className="text-xs font-semibold text-slate-500">
              Check your exact rank for every <strong>Daily Test</strong> and{" "}
              <strong>Weekly Sunday Championship</strong> conducted in{" "}
              <strong>{monthName} {year}</strong>. Table shows Top{" "}
              {TOP_DISPLAY_LIMIT} toppers + your pinned rank &amp; instant search
              for any candidate outside Top {TOP_DISPLAY_LIMIT}.
            </p>
          </div>

          {/* 3 Main Board Mode Tabs */}
          <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-slate-100 border border-slate-200 p-1.5 self-start">
            <button
              onClick={() => setBoardTab("DAILY_TESTS")}
              className={`rounded-xl px-3.5 py-2 text-xs font-black transition flex items-center gap-1.5 ${
                boardTab === "DAILY_TESTS"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Zap className="h-3.5 w-3.5" />
              <span>⚡ Daily Tests ({monthName})</span>
            </button>
            <button
              onClick={() => setBoardTab("WEEKLY_TESTS")}
              className={`rounded-xl px-3.5 py-2 text-xs font-black transition flex items-center gap-1.5 ${
                boardTab === "WEEKLY_TESTS"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>💎 Weekly Tests ({monthName})</span>
            </button>
            <button
              onClick={() => setBoardTab("OVERALL")}
              className={`rounded-xl px-3.5 py-2 text-xs font-black transition flex items-center gap-1.5 ${
                boardTab === "OVERALL"
                  ? "bg-amber-500 text-slate-950 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Trophy className="h-3.5 w-3.5" />
              <span>🌍 Overall All-India GP</span>
            </button>
          </div>
        </div>

        {/* CLASS & SUBJECT FILTERS + CURRENT MONTH TEST PICKER */}
        <div className="space-y-4 rounded-2xl bg-slate-50 border-2 border-slate-200 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Class Filter with Class 11 & 12 Locked */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 mr-1">
                Class:
              </span>
              {(["ALL", 9, 10, 11, 12] as const).map((g) => {
                const isLocked = g === 11 || g === 12;
                const active = selectedClass === g;
                return (
                  <button
                    key={String(g)}
                    onClick={() => {
                      if (isLocked) {
                        setClassLockAlert(
                          `Class ${g} Rank Lists are coming soon! We are currently running Daily & Weekly Tests for Class 9 and Class 10.`
                        );
                        return;
                      }
                      setClassLockAlert(null);
                      setSelectedClass(g);
                    }}
                    className={`rounded-xl px-3 py-1.5 text-xs font-extrabold transition flex items-center gap-1 ${
                      isLocked
                        ? "bg-slate-100 border border-slate-200 text-slate-400 opacity-60 cursor-pointer"
                        : active
                        ? "bg-slate-900 text-white shadow-sm"
                        : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <span>{g === "ALL" ? "All (9 & 10)" : `Class ${g}`}</span>
                    {isLocked && <Lock className="h-3 w-3 text-slate-400" />}
                  </button>
                );
              })}
            </div>

            {/* Subject Filter (For Per-Test Views) */}
            {isPerTestView ? (
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 mr-1">
                  Subject:
                </span>
                {(
                  ["ALL", "Physics", "Chemistry", "Mathematics"] as const
                ).map((subj) => (
                  <button
                    key={subj}
                    onClick={() => setSelectedSubject(subj)}
                    className={`rounded-xl px-3 py-1.5 text-xs font-extrabold transition ${
                      selectedSubject === subj
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {subj === "ALL" ? "All Subjects" : subj}
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-1 rounded-xl bg-white border border-slate-200 p-1">
                <button
                  onClick={() => setSortMode("GP")}
                  className={`rounded-lg px-3 py-1 text-xs font-extrabold transition ${
                    sortMode === "GP"
                      ? "bg-emerald-600 text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  📚 Sort by Study GP
                </button>
                <button
                  onClick={() => setSortMode("RATING")}
                  className={`rounded-lg px-3 py-1 text-xs font-extrabold transition ${
                    sortMode === "RATING"
                      ? "bg-indigo-600 text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  ⚔️ Sort by Quiz Rating
                </button>
              </div>
            )}
          </div>

          {classLockAlert && (
            <div className="rounded-xl border border-amber-300 bg-amber-50 p-2.5 text-amber-900 flex items-center justify-between text-xs font-bold">
              <div className="flex items-center gap-2">
                <Lock className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                <span>{classLockAlert}</span>
              </div>
              <button
                onClick={() => setClassLockAlert(null)}
                className="text-amber-800 hover:text-amber-950 font-black text-[11px] px-2 py-0.5 rounded hover:bg-amber-100"
              >
                ✕ Dismiss
              </button>
            </div>
          )}

          {/* Horizontal Current-Month Test Selector Cards */}
          {isPerTestView && (
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between">
                <p className="text-xs font-black text-slate-700 flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-indigo-600" />
                  <span>
                    Select a {boardTab === "DAILY_TESTS" ? "Daily" : "Weekly"}{" "}
                    Test from {monthName} {year} ({filteredMonthTests.length}{" "}
                    Tests):
                  </span>
                </p>
                <Link
                  href="/contests"
                  className="text-xs font-extrabold text-indigo-600 hover:text-indigo-800 underline"
                >
                  Go to Quiz Arena →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-60 overflow-y-auto pr-1">
                {filteredMonthTests.map((test) => {
                  const isSelected = activeTest?.id === test.id;
                  return (
                    <button
                      key={test.id}
                      onClick={() => setSelectedTestId(test.id)}
                      className={`rounded-2xl border-2 p-3 text-left transition flex flex-col justify-between gap-2 ${
                        isSelected
                          ? "border-indigo-600 bg-indigo-50/90 shadow-sm"
                          : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between gap-1.5">
                          <span
                            className={`rounded-md px-2 py-0.5 text-[10px] font-black uppercase ${
                              test.type === "DAILY"
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-amber-100 text-amber-900"
                            }`}
                          >
                            {test.type} • Class {test.classGrade} {test.subject}
                          </span>
                          <span className="text-[10px] font-bold text-slate-500">
                            {test.dateLabel}
                          </span>
                        </div>
                        <p className="text-xs font-black text-slate-900 line-clamp-1">
                          {test.title}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 pt-1 border-t border-slate-200/70">
                        <span>{test.syllabusLabel}</span>
                        <span className="text-indigo-700 font-black">
                          👥 {test.participantsCount.toLocaleString()}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* PERSONAL STANDING SPOTLIGHT BANNER + SEARCH ANY CANDIDATE BAR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          {/* Left: User's Personal Standing Card for this Test/Board */}
          <div className="lg:col-span-7 rounded-2xl border-2 border-amber-300 bg-gradient-to-r from-amber-50 via-white to-indigo-50 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-amber-400 px-2.5 py-0.5 text-[10px] font-black uppercase text-slate-950">
                  YOUR STANDING IN THIS LIST
                </span>
                {activeUserRank > TOP_DISPLAY_LIMIT ? (
                  <span className="rounded-lg bg-indigo-100 border border-indigo-300 px-2 py-0.5 text-[10px] font-black text-indigo-900">
                    Pinned Below Top {TOP_DISPLAY_LIMIT} ↓
                  </span>
                ) : (
                  <span className="rounded-lg bg-emerald-100 border border-emerald-300 px-2 py-0.5 text-[10px] font-black text-emerald-900">
                    🌟 Inside Top {TOP_DISPLAY_LIMIT}!
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-baseline gap-2 pt-0.5">
                <span className="text-2xl sm:text-3xl font-black text-slate-900">
                  Rank #{activeUserRank}
                </span>
                <span className="text-xs font-extrabold text-slate-500">
                  out of {totalCandidatesCount.toLocaleString()} Candidates (
                  {percentile}%ile)
                </span>
              </div>

              {isPerTestView && currentUserTestRow && testRank15Cutoff && (
                <p className="text-xs font-bold text-slate-600">
                  Your Score:{" "}
                  <strong className="text-slate-900">
                    {currentUserTestRow.score}/{currentUserTestRow.totalMarks}
                  </strong>{" "}
                  ({currentUserTestRow.accuracy}% Accuracy) •{" "}
                  {currentUserTestRow.rank > TOP_DISPLAY_LIMIT ? (
                    <span className="text-indigo-700 font-extrabold">
                      🎯 Need +
                      {Math.max(
                        1,
                        testRank15Cutoff.score - currentUserTestRow.score
                      )}{" "}
                      Marks to enter Top {TOP_DISPLAY_LIMIT} (#15 has{" "}
                      {testRank15Cutoff.score}/{testRank15Cutoff.totalMarks})
                    </span>
                  ) : (
                    <span className="text-emerald-700 font-extrabold">
                      🏆 You are featured in the Top {TOP_DISPLAY_LIMIT} Board!
                    </span>
                  )}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:items-end gap-2 shrink-0">
              <button
                onClick={scrollToUserRank}
                className="btn-3d-indigo px-4 py-2 text-xs inline-flex items-center justify-center gap-1.5"
              >
                <ArrowDownCircle className="h-4 w-4" />
                <span>Jump to My Row (#{activeUserRank})</span>
              </button>

              <button
                onClick={() => setSimulateOutsideTop20((prev) => !prev)}
                className="rounded-xl border border-slate-300 bg-white hover:bg-slate-100 px-3 py-1 text-[11px] font-extrabold text-slate-700 transition flex items-center gap-1"
                title="Switch between outside-Top-20 rank and Top-15 rank to preview how students see their rank"
              >
                <Sparkles className="h-3 w-3 text-amber-500" />
                <span>
                  {simulateOutsideTop20
                    ? "Previewing: Rank > 20 (Click for Top 10)"
                    : "Previewing: Top 10 (Click for Rank > 20)"}
                </span>
              </button>
            </div>
          </div>

          {/* Right: Instant Candidate Lookup Search Bar (Finds ANY candidate outside Top 15) */}
          <div className="lg:col-span-5 rounded-2xl border-2 border-slate-200 bg-slate-50 p-4 flex flex-col justify-between gap-2">
            <div>
              <label className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                <Search className="h-3.5 w-3.5 text-indigo-600" />
                <span>Not in Top {TOP_DISPLAY_LIMIT}? Find Any Candidate&apos;s Rank:</span>
              </label>
              <p className="text-[11px] font-semibold text-slate-500 mt-0.5">
                Search by student name, <code className="font-bold">@username</code>, city, or rank number (e.g. <code className="font-bold">Pranav</code>, <code className="font-bold">@tanvi</code>, <code className="font-bold">#22</code>)
              </p>
            </div>

            <div className="relative mt-1">
              <Search className="h-4 w-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search name, @username, or rank #16–#26..."
                className="w-full rounded-xl border-2 border-slate-200 bg-white pl-9 pr-9 py-2 text-xs font-bold text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* SEARCH RESULTS OVERLAY BOX (When searching any candidate across all ranks) */}
        {searchQuery.trim() !== "" && (
          <div className="rounded-2xl border-2 border-indigo-300 bg-indigo-50/60 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-xs font-black text-indigo-950 flex items-center gap-1.5">
                <Search className="h-4 w-4 text-indigo-600" />
                <span>
                  Candidate Search Results for &ldquo;{searchQuery}&rdquo; across all{" "}
                  {totalCandidatesCount.toLocaleString()} candidates:
                </span>
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs font-black text-indigo-700 hover:text-indigo-950"
              >
                Clear Search ✕
              </button>
            </div>

            {isPerTestView ? (
              searchMatchedTestRows.length === 0 ? (
                <p className="text-xs font-bold text-slate-600 py-2">
                  No candidate found matching &ldquo;{searchQuery}&rdquo;. Try searching{" "}
                  <button
                    onClick={() => setSearchQuery("Pranav")}
                    className="underline text-indigo-700 font-black"
                  >
                    Pranav
                  </button>{" "}
                  or{" "}
                  <button
                    onClick={() => setSearchQuery("Tanvi")}
                    className="underline text-indigo-700 font-black"
                  >
                    Tanvi
                  </button>
                  .
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {searchMatchedTestRows.map((row) => (
                    <div
                      key={row.username}
                      className="flex items-center justify-between rounded-xl border-2 border-indigo-200 bg-white p-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="rounded-xl bg-indigo-600 px-2.5 py-1.5 text-xs font-black text-white">
                          #{row.rank}
                        </span>
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-sky-100 border border-sky-300 text-lg">
                          <AvatarDisplay avatar={row.avatar} />
                        </span>
                        <div>
                          <p className="text-xs font-black text-slate-900">
                            {row.name}{" "}
                            {row.rank > TOP_DISPLAY_LIMIT && (
                              <span className="text-[10px] font-bold text-amber-700">
                                (Outside Top {TOP_DISPLAY_LIMIT})
                              </span>
                            )}
                          </p>
                          <p className="text-[11px] font-semibold text-slate-500">
                            {row.username} • Class {row.classGrade} • {row.city}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-black text-emerald-700">
                          {row.score}/{row.totalMarks} Marks
                        </p>
                        <p className="text-[10px] font-bold text-slate-500">
                          {row.accuracy}% • {row.timeTakenLabel}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )
            ) : searchMatchedOverallRows.length === 0 ? (
              <p className="text-xs font-bold text-slate-600 py-2">
                No scholar found matching &ldquo;{searchQuery}&rdquo;.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {searchMatchedOverallRows.map((row) => (
                  <div
                    key={row.username}
                    className="flex items-center justify-between rounded-xl border-2 border-indigo-200 bg-white p-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="rounded-xl bg-indigo-600 px-2.5 py-1.5 text-xs font-black text-white">
                        #{row.rank}
                      </span>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-sky-100 border border-sky-300 text-lg">
                        <AvatarDisplay avatar={row.avatar} />
                      </span>
                      <div>
                        <p className="text-xs font-black text-slate-900">
                          {row.name}
                        </p>
                        <p className="text-[11px] font-semibold text-slate-500">
                          {row.username} • Class {row.classGrade} • {row.city}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-black text-emerald-700">
                        {row.xp.toLocaleString()} GP
                      </p>
                      <p className="text-[10px] font-bold text-sky-700">
                        {row.rating} Elo
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* SELECTED TEST SUMMARY HEADER (When viewing Daily or Weekly Test Rank List) */}
        {isPerTestView && activeTest && (
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-900 text-white p-4">
            <div className="space-y-0.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-emerald-500/20 border border-emerald-400/40 px-2 py-0.5 text-[10px] font-black text-emerald-300 uppercase">
                  {activeTest.type} TEST RANK LIST
                </span>
                <span className="text-xs font-bold text-slate-300">
                  📅 {activeTest.dateLabel}
                </span>
                <span className="text-xs font-bold text-amber-300">
                  • Class {activeTest.classGrade} {activeTest.subject}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-white">
                {activeTest.title}
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-300">
              <span className="flex items-center gap-1">
                <Target className="h-4 w-4 text-emerald-400" />
                Max Marks: <strong className="text-white">{activeTest.totalMarks}</strong>
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-sky-400" />
                Duration: <strong className="text-white">{activeTest.durationMinutes}m</strong>
              </span>
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4 text-amber-400" />
                Candidates:{" "}
                <strong className="text-white">
                  {activeTest.participantsCount.toLocaleString()}
                </strong>
              </span>
            </div>
          </div>
        )}

        {/* LEADERBOARD TABLE: STRICT TOP 15 + PINNED USER NEIGHBORHOOD BELOW #15 */}
        <div className="overflow-x-auto">
          {isPerTestView ? (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200 text-[11px] font-black uppercase tracking-wider text-slate-500">
                  <th className="py-3 px-4">Test Rank (Top {TOP_DISPLAY_LIMIT})</th>
                  <th className="py-3 px-4">Candidate</th>
                  <th className="py-3 px-4">Class &amp; City</th>
                  <th className="py-3 px-4">Score</th>
                  <th className="py-3 px-4">Accuracy</th>
                  <th className="py-3 px-4">Time Taken</th>
                  <th className="py-3 px-4 text-right">GP &amp; Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {top15TestRows.map((row) => (
                  <tr
                    key={row.username}
                    ref={row.isCurrentUser ? pinnedUserRowRef : undefined}
                    className={`transition ${
                      row.isCurrentUser
                        ? "bg-amber-100/90 font-black ring-2 ring-amber-400"
                        : "hover:bg-slate-50"
                    }`}
                  >
                    <td className="py-3.5 px-4 font-black text-slate-900">
                      {row.rank === 1
                        ? "🥇 #1"
                        : row.rank === 2
                        ? "🥈 #2"
                        : row.rank === 3
                        ? "🥉 #3"
                        : `#${row.rank}`}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-sky-100 border border-sky-300 text-base">
                          <AvatarDisplay avatar={row.avatar} />
                        </span>
                        <div>
                          <p className="font-black text-slate-900">
                            {row.name}
                          </p>
                          <p className="text-xs font-semibold text-slate-500">
                            {row.username}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="rounded-lg bg-slate-100 border border-slate-200 px-2 py-0.5 text-xs font-black text-slate-700">
                        Class {row.classGrade}
                      </span>
                      <span className="ml-2 text-xs font-bold text-slate-500">
                        {row.city}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-black text-slate-900">
                      {row.score} / {row.totalMarks}
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`rounded-lg px-2 py-0.5 text-xs font-black ${
                          row.accuracy >= 85
                            ? "bg-emerald-100 text-emerald-800"
                            : row.accuracy >= 70
                            ? "bg-amber-100 text-amber-800"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {row.accuracy}%
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-xs font-bold text-slate-600">
                      ⏱️ {row.timeTakenLabel}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="font-black text-emerald-600">
                        +{row.xpEarned} GP
                      </span>
                      <span className="ml-2 text-xs font-extrabold text-sky-700">
                        (+{row.ratingDelta} Elo)
                      </span>
                    </td>
                  </tr>
                ))}

                {/* PINNED PERSONAL RANK & NEIGHBORHOOD WHEN USER IS OUTSIDE TOP 15 */}
                {currentUserTestRow &&
                  currentUserTestRow.rank > TOP_DISPLAY_LIMIT && (
                    <>
                      <tr className="bg-slate-100/90 border-y-2 border-dashed border-slate-300">
                        <td
                          colSpan={7}
                          className="py-2.5 px-4 text-center text-xs font-black text-slate-600"
                        >
                          •••{" "}
                          {Math.max(
                            1,
                            currentUserTestRow.rank - TOP_DISPLAY_LIMIT - 1
                          )}{" "}
                          Candidates between Top #{TOP_DISPLAY_LIMIT} and Your
                          Pinned Rank Neighborhood (Use Search Bar above to look
                          up any specific rank) •••
                        </td>
                      </tr>

                      {userTestNeighborhood.map((row) => (
                        <tr
                          key={`pinned-${row.username}`}
                          ref={row.isCurrentUser ? pinnedUserRowRef : undefined}
                          className={
                            row.isCurrentUser
                              ? "bg-amber-100/95 border-2 border-amber-400 font-black shadow-sm"
                              : "bg-amber-50/40 text-slate-700"
                          }
                        >
                          <td className="py-3.5 px-4 font-black text-slate-900">
                            <span
                              className={`inline-flex items-center gap-1 rounded-lg px-2 py-0.5 text-xs ${
                                row.isCurrentUser
                                  ? "bg-amber-400 text-slate-950 font-black"
                                  : "bg-slate-200 text-slate-700 font-bold"
                              }`}
                            >
                              #{row.rank}
                            </span>
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-3">
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white border border-amber-300 text-base">
                                <AvatarDisplay avatar={row.avatar} />
                              </span>
                              <div>
                                <div className="flex flex-wrap items-center gap-1.5">
                                  <p className="font-black text-slate-900">
                                    {row.name}
                                  </p>
                                  {row.isCurrentUser ? (
                                    <span className="rounded-md bg-indigo-600 px-2 py-0.5 text-[10px] font-black text-white">
                                      YOU • PINNED RANK
                                    </span>
                                  ) : (
                                    <span className="rounded-md bg-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                                      {row.rank < currentUserTestRow.rank
                                        ? "1 Rank Ahead of You"
                                        : "1 Rank Behind You"}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs font-semibold text-slate-500">
                                  {row.username}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="rounded-lg bg-white border border-slate-200 px-2 py-0.5 text-xs font-black text-slate-700">
                              Class {row.classGrade}
                            </span>
                            <span className="ml-2 text-xs font-bold text-slate-500">
                              {row.city}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 font-black text-slate-900">
                            {row.score} / {row.totalMarks}
                            {row.isCurrentUser && testRank15Cutoff && (
                              <span className="block text-[10px] font-extrabold text-indigo-700">
                                +
                                {Math.max(
                                  1,
                                  testRank15Cutoff.score - row.score
                                )}{" "}
                                marks to reach #15
                              </span>
                            )}
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="rounded-lg bg-white border border-amber-300 px-2 py-0.5 text-xs font-black text-slate-800">
                              {row.accuracy}%
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-xs font-bold text-slate-600">
                            ⏱️ {row.timeTakenLabel}
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <span className="font-black text-emerald-700">
                              +{row.xpEarned} GP
                            </span>
                            <span className="ml-2 text-xs font-extrabold text-sky-700">
                              (+{row.ratingDelta} Elo)
                            </span>
                          </td>
                        </tr>
                      ))}
                    </>
                  )}
              </tbody>
            </table>
          ) : (
            /* OVERALL ALL-INDIA LEADERBOARD TABLE (TOP 15 + PINNED USER ROW) */
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200 text-[11px] font-black uppercase tracking-wider text-slate-500">
                  <th className="py-3 px-4">Rank (Top {TOP_DISPLAY_LIMIT})</th>
                  <th className="py-3 px-4">Student</th>
                  <th className="py-3 px-4">Class</th>
                  <th className="py-3 px-4">City</th>
                  <th className="py-3 px-4">Scholar Rank</th>
                  <th className="py-3 px-4">Quiz Rating</th>
                  <th className="py-3 px-4 text-right">Total GP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {top15OverallRows.map((row) => {
                  const tier =
                    RANK_TIERS.slice()
                      .reverse()
                      .find((r) => row.xp >= r.minXp) || RANK_TIERS[0];

                  return (
                    <tr
                      key={row.username}
                      ref={row.isCurrentUser ? pinnedUserRowRef : undefined}
                      className={`transition ${
                        row.isCurrentUser
                          ? "bg-amber-100/90 font-black"
                          : "hover:bg-slate-50"
                      }`}
                    >
                      <td className="py-4 px-4 font-black text-slate-900">
                        {row.rank === 1
                          ? "🥇 #1"
                          : row.rank === 2
                          ? "🥈 #2"
                          : row.rank === 3
                          ? "🥉 #3"
                          : `#${row.rank}`}
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-sky-100 border border-sky-300 text-lg">
                            <AvatarDisplay avatar={row.avatar} />
                          </span>
                          <div>
                            <p className="font-black text-slate-900">
                              {row.name}
                            </p>
                            <p className="text-xs font-semibold text-slate-500">
                              {row.username}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="rounded-lg bg-slate-100 border border-slate-200 px-2.5 py-1 text-xs font-black text-slate-700">
                          Class {row.classGrade}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-xs font-bold text-slate-600">
                        {row.city}
                      </td>
                      <td className="py-4 px-4">
                        <span className="inline-flex items-center gap-1 rounded-xl bg-amber-100 border border-amber-300 px-2.5 py-1 text-xs font-black text-amber-900">
                          {tier.badgeEmoji} {tier.name}
                        </span>
                      </td>
                      <td className="py-4 px-4 font-black text-sky-700">
                        {row.rating} Elo
                      </td>
                      <td className="py-4 px-4 text-right font-black text-emerald-600">
                        {row.xp.toLocaleString()} GP
                      </td>
                    </tr>
                  );
                })}

                {currentUserOverallRow &&
                  currentUserOverallRow.rank > TOP_DISPLAY_LIMIT && (
                    <>
                      <tr className="bg-slate-100/90 border-y-2 border-dashed border-slate-300">
                        <td
                          colSpan={7}
                          className="py-2.5 px-4 text-center text-xs font-black text-slate-600"
                        >
                          •••{" "}
                          {Math.max(
                            1,
                            currentUserOverallRow.rank - TOP_DISPLAY_LIMIT - 1
                          )}{" "}
                          Scholars between Top #{TOP_DISPLAY_LIMIT} and Your
                          Pinned Standing •••
                        </td>
                      </tr>

                      {userOverallNeighborhood.map((row) => {
                        const tier =
                          RANK_TIERS.slice()
                            .reverse()
                            .find((r) => row.xp >= r.minXp) || RANK_TIERS[0];
                        return (
                          <tr
                            key={`overall-pinned-${row.username}`}
                            ref={
                              row.isCurrentUser ? pinnedUserRowRef : undefined
                            }
                            className={
                              row.isCurrentUser
                                ? "bg-amber-100/95 border-2 border-amber-400 font-black"
                                : "bg-amber-50/40 text-slate-700"
                            }
                          >
                            <td className="py-4 px-4 font-black text-slate-900">
                              <span
                                className={`inline-flex items-center gap-1 rounded-lg px-2 py-0.5 text-xs ${
                                  row.isCurrentUser
                                    ? "bg-amber-400 text-slate-950 font-black"
                                    : "bg-slate-200 text-slate-700 font-bold"
                                }`}
                              >
                                #{row.rank}
                              </span>
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex items-center gap-3">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white border border-amber-300 text-lg">
                                  <AvatarDisplay avatar={row.avatar} />
                                </span>
                                <div>
                                  <div className="flex items-center gap-1.5">
                                    <p className="font-black text-slate-900">
                                      {row.name}
                                    </p>
                                    {row.isCurrentUser && (
                                      <span className="rounded-md bg-indigo-600 px-2 py-0.5 text-[10px] font-black text-white">
                                        YOU • PINNED
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs font-semibold text-slate-500">
                                    {row.username}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <span className="rounded-lg bg-white border border-slate-200 px-2.5 py-1 text-xs font-black text-slate-700">
                                Class {row.classGrade}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-xs font-bold text-slate-600">
                              {row.city}
                            </td>
                            <td className="py-4 px-4">
                              <span className="inline-flex items-center gap-1 rounded-xl bg-amber-100 border border-amber-300 px-2.5 py-1 text-xs font-black text-amber-900">
                                {tier.badgeEmoji} {tier.name}
                              </span>
                            </td>
                            <td className="py-4 px-4 font-black text-sky-700">
                              {row.rating} Elo
                            </td>
                            <td className="py-4 px-4 text-right font-black text-emerald-600">
                              {row.xp.toLocaleString()} GP
                              {row.isCurrentUser && overallRank15Cutoff && (
                                <span className="block text-[10px] font-extrabold text-indigo-700">
                                  +
                                  {Math.max(
                                    10,
                                    overallRank15Cutoff.xp - row.xp
                                  ).toLocaleString()}{" "}
                                  GP to reach #15
                                </span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </>
                  )}
              </tbody>
            </table>
          )}
        </div>

        {/* Explainer Footer: How Outside-Top-15 Rank Visibility Works */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-3 text-xs font-bold text-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>
              <strong>Why only Top {TOP_DISPLAY_LIMIT} are listed above:</strong>{" "}
              To keep test leaderboards fast and clean even with 2,000+ test
              takers, we display the <strong>Top {TOP_DISPLAY_LIMIT}</strong>{" "}
              names on the main board and automatically{" "}
              <strong>pin your personal row + closest rivals</strong> right
              below #15.
            </span>
          </div>
          <span className="text-indigo-700 font-black">
            🔍 Use the Search Box above to check any student&apos;s rank!
          </span>
        </div>
      </section>

      {/* STREAK HEATMAP + BADGE SHOWCASE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        <div className="lg:col-span-7 rounded-3xl border-2 border-slate-200 bg-white p-4 sm:p-6 shadow-[0_6px_0_0_#e2e8f0] space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-sm sm:text-base font-black text-slate-900">
                🟩 Daily Learning &amp; Quiz Activity Heatmap
              </h2>
              <p className="text-xs font-semibold text-slate-500">
                Every unit completed or daily quiz attempted lights up your
                consistency grid!
              </p>
            </div>
            <span className="rounded-xl bg-emerald-100 border border-emerald-300 px-3 py-1 text-xs font-black text-emerald-800">
              {profile.completedUnitIds.length +
                profile.contestHistory.length +
                42}{" "}
              Active Days
            </span>
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="flex gap-1.5 min-w-[540px]">
              {Array.from({ length: 24 }).map((_, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {Array.from({ length: 7 }).map((__, dIdx) => {
                    const seed = (wIdx * 7 + dIdx * 3) % 11;
                    const isRecent = wIdx >= 22;
                    const level = isRecent
                      ? 3
                      : seed > 7
                      ? 3
                      : seed > 4
                      ? 2
                      : seed > 2
                      ? 1
                      : 0;

                    const bgClass =
                      level === 3
                        ? "bg-emerald-500 border border-emerald-600"
                        : level === 2
                        ? "bg-emerald-400"
                        : level === 1
                        ? "bg-emerald-200"
                        : "bg-slate-100 border border-slate-200";

                    return (
                      <div
                        key={dIdx}
                        title={`Day Activity: ${level * 2} Units/Quizzes`}
                        className={`h-4 w-4 rounded-[4px] ${bgClass} transition hover:scale-125`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-bold text-slate-500 pt-1">
            <span>Consistency builds Top Scholars 🚀</span>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <span className="h-3 w-3 rounded-sm bg-slate-100 border border-slate-200" />
              <span className="h-3 w-3 rounded-sm bg-emerald-200" />
              <span className="h-3 w-3 rounded-sm bg-emerald-400" />
              <span className="h-3 w-3 rounded-sm bg-emerald-500" />
              <span>More</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 rounded-3xl border-2 border-slate-200 bg-white p-4 sm:p-6 shadow-[0_6px_0_0_#e2e8f0] space-y-4">
          <h2 className="text-sm sm:text-base font-black text-slate-900">
            🏅 Your Earned Badges ({profile.earnedBadges.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {profile.earnedBadges.map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-2xl border-2 border-amber-300 border-b-4 bg-amber-50 p-3"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-amber-300 text-2xl">
                  {badge.emoji}
                </span>
                <div>
                  <p className="text-xs font-black text-slate-900 leading-tight">
                    {badge.name}
                  </p>
                  <p className="text-[10px] font-bold text-amber-700 mt-0.5">
                    {badge.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LeaderboardPage() {
  return (
    <Suspense
      fallback={
        <div className="p-12 text-center font-bold text-slate-500">
          Loading Test Rank Lists...
        </div>
      }
    >
      <LeaderboardContent />
    </Suspense>
  );
}
