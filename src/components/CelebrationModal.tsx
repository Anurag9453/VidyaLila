"use client";

import React from "react";
import { useApp } from "@/lib/store";
import { Sparkles, Trophy, X } from "lucide-react";

export function CelebrationModal() {
  const { celebration, dismissCelebration, profile, currentRank } = useApp();

  if (!celebration) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border-4 border-amber-400 bg-white p-6 text-center shadow-[0_12px_0_0_#f59e0b]">
        <button
          onClick={dismissCelebration}
          className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-3xl bg-amber-100 border-4 border-amber-300 text-5xl shadow-md animate-bounce">
          {celebration.badgeEmoji || "🎉"}
        </div>

        {celebration.xpEarned > 0 ? (
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 border-2 border-emerald-300 px-4 py-1 text-xs font-black uppercase tracking-wider text-emerald-800 mb-3">
            <Sparkles className="h-4 w-4 text-emerald-600" />+{celebration.xpEarned} GP (Gyan Points) Credited!
          </div>
        ) : (
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 border-2 border-indigo-300 px-4 py-1 text-xs font-black uppercase tracking-wider text-indigo-800 mb-3">
            <Sparkles className="h-4 w-4 text-indigo-600" />
            Updated in Your Account Settings
          </div>
        )}

        <h3 className="text-2xl font-black text-slate-900 tracking-tight">
          {celebration.title}
        </h3>
        <p className="mt-2 text-sm font-medium text-slate-600 leading-relaxed">
          {celebration.subtitle}
        </p>

        <div className="mt-5 rounded-2xl bg-sky-50 border-2 border-sky-200 p-4 flex items-center justify-between text-left">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{currentRank.badgeEmoji}</span>
            <div>
              <p className="text-xs text-slate-500 font-bold">Current Scholar Rank</p>
              <p className="text-sm font-black text-slate-900">
                {currentRank.name}{" "}
                <span className="text-xs font-bold text-sky-700">
                  ({currentRank.hindiTitle})
                </span>
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-slate-500">Total GP</p>
            <p className="text-lg font-black text-amber-600">
              {profile.xp.toLocaleString()} GP
            </p>
          </div>
        </div>

        <button
          onClick={dismissCelebration}
          className="mt-6 w-full btn-3d-emerald py-3.5 text-base flex items-center justify-center gap-2"
        >
          <Trophy className="h-5 w-5" />
          Awesome! Keep Blazing 🚀
        </button>
      </div>
    </div>
  );
}
