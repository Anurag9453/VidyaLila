"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/lib/store";
import {
  Compass,
  Swords,
  Trophy,
  PenTool,
  Flame,
  Crown,
  Sparkles,
  UserCheck,
  LogIn,
} from "lucide-react";
import { PaymentModal } from "./PaymentModal";
import { BrandLogo } from "./BrandLogo";

export function Navbar() {
  const pathname = usePathname();
  const {
    profile,
    isAuthenticated,
    currentRank,
    activateProPass,
  } = useApp();
  const [showPassModal, setShowPassModal] = useState(false);

  const navItems = [
    {
      href: "/",
      label: "Learn",
      icon: Compass,
    },
    {
      href: "/contests",
      label: "Quizzes",
      icon: Swords,
    },
    {
      href: "/leaderboard",
      label: "Ranks",
      icon: Trophy,
    },
    {
      href: "/studio",
      label: "CMS",
      icon: PenTool,
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between gap-2 px-3.5 py-2.5 sm:px-6 sm:py-3.5 md:px-10 lg:px-16">
          {/* Brand Logo: Peacock Feather (Morpankh) + Open Book Crest */}
          <Link href="/" className="shrink-0 group hover:-translate-y-0.5 transition">
            <BrandLogo size="md" showText={true} />
          </Link>

          {/* Center Navigation (Tablet & Desktop) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/"
                  ? pathname === "/" || pathname.startsWith("/trails")
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 rounded-xl px-3.5 lg:px-4 py-2 text-xs lg:text-sm font-bold transition-all ${
                    isActive
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Gamification Pills (Responsive on Mobile & Desktop) */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <Link
              href="/leaderboard"
              title="Daily Streak"
              className="hidden sm:flex items-center gap-1 rounded-xl bg-orange-50 border border-orange-200 px-2.5 py-1.5 text-xs font-bold text-orange-700 hover:bg-orange-100 transition"
            >
              <Flame className="h-4 w-4 text-orange-500 fill-orange-500" />
              <span>{profile.streak}d</span>
            </Link>

            <Link
              href="/leaderboard"
              title="Gyan Points (GP)"
              className="flex items-center gap-1 rounded-xl bg-emerald-50 border border-emerald-200 px-2 sm:px-2.5 py-1 sm:py-1.5 text-[11px] sm:text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition"
            >
              <span>{currentRank.badgeEmoji}</span>
              <span>{profile.xp.toLocaleString()}</span>
              <span className="hidden sm:inline">GP</span>
            </Link>

            {(profile.dailyPassesRemaining || 0) +
              (profile.competitionPassesRemaining || 0) >
            0 ? (
              <Link
                href="/auth"
                title="View Remaining Quiz Passes in User Settings"
                className="flex items-center gap-1 rounded-xl bg-amber-100 border border-amber-300 px-2.5 py-1.5 text-[11px] sm:text-xs font-extrabold text-amber-900 hover:bg-amber-200 transition"
              >
                <Crown className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                <span>
                  {profile.proPassPlan === "MONTHLY"
                    ? "👑 Pro Pass"
                    : profile.proPassPlan === "WEEKLY"
                    ? "💎 VIP Pass"
                    : "⚡ Basic Pass"}{" "}
                  ({(profile.dailyPassesRemaining || 0) + (profile.competitionPassesRemaining || 0)} Left)
                </span>
              </Link>
            ) : (
              <button
                onClick={() => setShowPassModal(true)}
                className="btn-3d-amber px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs flex items-center gap-1"
              >
                <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                <span>{profile.proPassPlan ? "Recharge Pass" : "Pass"}</span>
              </button>
            )}

            {/* User Settings & Sign In / Sign Up Button */}
            <Link
              href="/auth"
              className={`rounded-xl px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs font-extrabold flex items-center gap-1.5 transition ${
                isAuthenticated
                  ? "bg-indigo-50 border border-indigo-200 text-indigo-800 hover:bg-indigo-100"
                  : "bg-slate-900 text-white hover:bg-slate-800 shadow-sm"
              }`}
            >
              {isAuthenticated ? (
                <>
                  <UserCheck className="h-3.5 w-3.5 text-indigo-600" />
                  <span className="max-w-[95px] truncate">
                    {profile.name.split(" ")[0]} • Settings
                  </span>
                </>
              ) : (
                <>
                  <LogIn className="h-3.5 w-3.5" />
                  <span>Account / Settings</span>
                </>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* Fixed Native-Style Bottom Navigation Bar for Phones (< 768px) */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 flex md:hidden items-center justify-around border-t border-slate-200 bg-white/95 backdrop-blur-md px-2 py-2 shadow-[0_-4px_12px_rgba(0,0,0,0.04)]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/"
              ? pathname === "/" || pathname.startsWith("/trails")
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 rounded-xl px-4 py-1.5 text-[11px] font-bold transition ${
                isActive
                  ? "bg-emerald-50 text-emerald-600"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <PaymentModal
        isOpen={showPassModal}
        onClose={() => setShowPassModal(false)}
        defaultPackage="WEEKLY"
        onSuccessPackage={(pkg) => activateProPass(pkg)}
      />
    </>
  );
}
