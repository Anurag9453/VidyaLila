"use client";

import React, { useState, useEffect } from "react";
import { useApp } from "@/lib/store";
import { LEADERBOARD_DATA, RANK_TIERS, LeaderboardEntry } from "@/lib/mock-data";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { Trophy, Flame, TrendingUp, Award, MapPin, Crown, Database } from "lucide-react";

export default function LeaderboardPage() {
  const { profile, currentRank } = useApp();
  const [boardTab, setBoardTab] = useState<"ALL" | "CBSE" | "ICSE">("ALL");
  const [sortMode, setSortMode] = useState<"GP" | "RATING">("GP");
  const [liveProfiles, setLiveProfiles] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    if (!isSupabaseConfigured) return;
    supabase
      .from("profiles")
      .select("*")
      .order("xp_points", { ascending: false })
      .limit(50)
      .then(({ data }) => {
        if (data && data.length > 0) {
          const mapped: LeaderboardEntry[] = data.map((row, i) => ({
            rank: i + 1,
            name: row.full_name || "Scholar",
            username: row.username || `@scholar_${i}`,
            board: (row.board as "CBSE" | "ICSE") || "CBSE",
            classGrade: Number(row.class_grade || 10),
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

  // Merge live Supabase profiles + current user + initial benchmark scholars (deduplicated by username)
  const seenUsernames = new Set<string>();
  const rawList: (LeaderboardEntry & { isCurrentUser?: boolean })[] = [];

  const currentUserEntry: LeaderboardEntry & { isCurrentUser?: boolean } = {
    rank: 0,
    name: `${profile.name} (You)`,
    username: profile.username,
    board: profile.board,
    classGrade: profile.classGrade,
    city: profile.city,
    xp: profile.xp,
    rating: profile.rating,
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

  const combinedList = rawList
    .filter((entry) => boardTab === "ALL" || entry.board === boardTab)
    .sort((a, b) => (sortMode === "GP" ? b.xp - a.xp : b.rating - a.rating))
    .map((entry, idx) => ({ ...entry, rank: idx + 1 }));

  const weeks = 24;
  const daysPerWeek = 7;

  return (
    <div className="space-y-8">
      {/* STUDENT GAMIFIED PROFILE & RANK HEADER */}
      <section className="rounded-3xl border-2 border-sky-300 bg-gradient-to-r from-sky-50 via-white to-amber-50 p-4 sm:p-6 md:p-8 shadow-[0_8px_0_0_#bae6fd]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
            <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-3xl bg-amber-400 border-2 border-amber-500 border-b-4 text-3xl sm:text-4xl shadow-md">
              {profile.avatar}
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-indigo-100 border border-indigo-300 px-2.5 py-0.5 text-[10px] font-black text-indigo-800">
                  {profile.board} • Class {profile.classGrade}
                </span>
                {profile.hasProPass && (
                  <span className="rounded-lg bg-amber-100 border border-amber-400 px-2 py-0.5 text-[10px] font-black text-amber-900 flex items-center gap-1">
                    <Crown className="h-3 w-3 text-amber-600" /> PRO VIP
                  </span>
                )}
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900">{profile.name}</h1>
              <p className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-rose-500 shrink-0" />
                {profile.school}, {profile.city}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-2xl border-2 border-amber-300 border-b-4 bg-white p-3.5 sm:p-4">
              <p className="text-[10px] sm:text-[11px] font-black text-slate-400">SCHOLAR RANK</p>
              <p className="mt-1 text-base sm:text-lg font-black text-amber-600">
                {currentRank.badgeEmoji} {currentRank.name}
              </p>
              <p className="text-[11px] font-bold text-slate-500">
                {profile.xp.toLocaleString()} GP
              </p>
            </div>

            <div className="rounded-2xl border-2 border-sky-300 border-b-4 bg-white p-3.5 sm:p-4">
              <p className="text-[10px] sm:text-[11px] font-black text-slate-400">QUIZ RATING</p>
              <p className="mt-1 text-base sm:text-lg font-black text-sky-600 flex items-center gap-1">
                <TrendingUp className="h-4 w-4 shrink-0" /> {profile.rating}
              </p>
              <p className="text-[11px] font-bold text-emerald-600">Top 4.2% India</p>
            </div>

            <div className="rounded-2xl border-2 border-orange-300 border-b-4 bg-white p-3.5 sm:p-4">
              <p className="text-[10px] sm:text-[11px] font-black text-slate-400">DAILY STREAK</p>
              <p className="mt-1 text-base sm:text-lg font-black text-orange-600 flex items-center gap-1">
                <Flame className="h-4 w-4 fill-orange-500 shrink-0" /> {profile.streak} Days
              </p>
              <p className="text-[11px] font-bold text-slate-500">On Fire!</p>
            </div>

            <div className="rounded-2xl border-2 border-violet-300 border-b-4 bg-white p-3.5 sm:p-4">
              <p className="text-[10px] sm:text-[11px] font-black text-slate-400">BADGES</p>
              <p className="mt-1 text-base sm:text-lg font-black text-violet-600 flex items-center gap-1">
                <Award className="h-4 w-4 shrink-0" /> {profile.earnedBadges.length}
              </p>
              <p className="text-[11px] font-bold text-slate-500">Collected</p>
            </div>
          </div>
        </div>
      </section>

      {/* STREAK HEATMAP + BADGE SHOWCASE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        <div className="lg:col-span-7 rounded-3xl border-2 border-slate-200 bg-white p-4 sm:p-6 shadow-[0_6px_0_0_#e2e8f0] space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-sm sm:text-base font-black text-slate-900">
                🟩 Daily Learning & Quiz Activity Heatmap
              </h2>
              <p className="text-xs font-semibold text-slate-500">
                Every unit completed or daily quiz attempted lights up your consistency grid!
              </p>
            </div>
            <span className="rounded-xl bg-emerald-100 border border-emerald-300 px-3 py-1 text-xs font-black text-emerald-800">
              {profile.completedUnitIds.length + profile.contestHistory.length + 42} Active Days
            </span>
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="flex gap-1.5 min-w-[540px]">
              {Array.from({ length: weeks }).map((_, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {Array.from({ length: daysPerWeek }).map((__, dIdx) => {
                    const seed = (wIdx * 7 + dIdx * 3) % 11;
                    const isRecent = wIdx >= weeks - 2;
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
            <span>Consistency builds Board Toppers 🚀</span>
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

      {/* ALL-INDIA LIVE LEADERBOARD TABLE */}
      <section className="rounded-3xl border-2 border-slate-200 bg-white p-6 shadow-[0_8px_0_0_#e2e8f0] space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <Trophy className="h-6 w-6 text-amber-500" />
              All-India Scholar & Contest Leaderboard
            </h2>
            <p className="text-xs font-semibold text-slate-500">
              Ranked by Total GP (Gyan Points) &amp; Weekly Rated Quiz Performance (CBSE &amp; ICSE)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 rounded-2xl bg-slate-100 border border-slate-200 p-1">
              <button
                onClick={() => setSortMode("GP")}
                className={`rounded-xl px-3 py-1 text-xs font-extrabold transition ${
                  sortMode === "GP"
                    ? "bg-emerald-600 text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                📚 By Study GP
              </button>
              <button
                onClick={() => setSortMode("RATING")}
                className={`rounded-xl px-3 py-1 text-xs font-extrabold transition ${
                  sortMode === "RATING"
                    ? "bg-indigo-600 text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                ⚔️ By Quiz Rating
              </button>
            </div>

            {(["ALL", "CBSE", "ICSE"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setBoardTab(tab)}
                className={`rounded-2xl border-2 border-b-4 px-4 py-1.5 text-xs font-black transition ${
                  boardTab === tab
                    ? "border-amber-500 bg-amber-400 text-slate-950"
                    : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {tab === "ALL" ? "All-India" : `${tab} Board`}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-200 text-[11px] font-black uppercase tracking-wider text-slate-500">
                <th className="py-3 px-4">Rank</th>
                <th className="py-3 px-4">Student</th>
                <th className="py-3 px-4">Board & Class</th>
                <th className="py-3 px-4">City</th>
                <th className="py-3 px-4">Scholar Rank</th>
                <th className="py-3 px-4">Quiz Rating</th>
                <th className="py-3 px-4 text-right">Total GP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm">
              {combinedList.map((row) => {
                const tier =
                  RANK_TIERS.slice()
                    .reverse()
                    .find((r) => row.xp >= r.minXp) || RANK_TIERS[0];

                return (
                  <tr
                    key={row.username}
                    className={`transition ${
                      row.isCurrentUser
                        ? "bg-amber-50 font-black"
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
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 border border-sky-300 text-lg">
                          {row.avatar}
                        </span>
                        <div>
                          <p className="font-black text-slate-900">{row.name}</p>
                          <p className="text-xs font-semibold text-slate-500">
                            {row.username}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="rounded-lg bg-slate-100 border border-slate-200 px-2.5 py-1 text-xs font-black text-slate-700">
                        {row.board} • Class {row.classGrade}
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
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
