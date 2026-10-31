"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BrandCrestIcon } from "./BrandLogo";
import { Sparkles, BookOpen, ShieldCheck } from "lucide-react";

const ROUTE_LOADING_MESSAGES: Record<string, string> = {
  "/": "Loading CBSE & ICSE Free Study Chapters...",
  "/contests": "Preparing Live & Upcoming Subject Quiz Arena...",
  "/leaderboard": "Calculating All-India Scholar GP & Contest Rankings...",
  "/studio": "Opening Academic CMS & Review Studio...",
  "/auth": "Loading Scholar Profile & Quiz Pass Wallet...",
  "/terms": "Loading Academic Safeguards & Fair-Play Terms...",
};

export function BrandLoaderUI({
  message = "Preparing Your VidyaLila Study Arena...",
  progress = 85,
}: {
  message?: string;
  progress?: number;
}) {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#fafbff]/95 backdrop-blur-md px-4 select-none">
      {/* Subtle Decorative Ambient Glows */}
      <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl -top-10 -left-10" />
      <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-amber-200/40 blur-3xl -bottom-10 -right-10" />

      {/* Main 3D Tactile Loader Card */}
      <div className="relative flex w-full max-w-md flex-col items-center rounded-3xl border-2 border-slate-200 bg-white p-7 sm:p-9 text-center shadow-[0_10px_0_0_#e2e8f0]">
        {/* Animated Orbital Ring + Peacock Feather & Open Book Crest */}
        <div className="relative flex h-28 w-28 items-center justify-center">
          {/* Outer Rotating Dashed Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-dashed border-emerald-300/80 animate-spin [animation-duration:8s]" />
          {/* Inner Pulsing Halo */}
          <div className="absolute inset-2 rounded-3xl bg-gradient-to-tr from-emerald-50 via-amber-50 to-indigo-50 animate-pulse" />

          {/* Center Peacock Feather + Open Book Crest */}
          <BrandCrestIcon
            className="h-20 w-20 rounded-3xl shadow-md"
            animated={true}
          />

          {/* Floating Corner Sparkle Badge */}
          <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-amber-400 border-2 border-white text-slate-950 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
        </div>

        {/* Brand Name & Heritage Tagline */}
        <div className="mt-5 space-y-1">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-emerald-700">
            <BookOpen className="h-3 w-3" />
            <span>Vidya (Knowledge) • Lila (Playful Mastery)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 pt-1">
            Vidya<span className="text-emerald-600">Lila</span>
          </h2>
          <p className="text-xs font-bold text-slate-500">
            Class 9–12 CBSE &amp; ICSE Self-Study &amp; Live Subject Quizzes
          </p>
        </div>

        {/* 3D Tactile Progress Bar */}
        <div className="mt-6 w-full space-y-2">
          <div className="h-3.5 w-full overflow-hidden rounded-full bg-slate-100 border-2 border-slate-200 p-0.5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 transition-all duration-300 ease-out"
              style={{ width: `${Math.min(100, Math.max(15, progress))}%` }}
            />
          </div>

          <p className="text-xs font-extrabold text-slate-700 animate-pulse">
            {message}
          </p>
        </div>

        {/* Bottom Trust Pill */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] font-bold text-slate-400">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
          <span>NCERT &amp; Board Aligned • 100% Free Study Units</span>
        </div>
      </div>
    </div>
  );
}

export function BrandLoader() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(25);

  // Trigger brief branded loader on initial mount and route transitions
  useEffect(() => {
    setIsVisible(true);
    setProgress(35);

    const t1 = setTimeout(() => setProgress(75), 140);
    const t2 = setTimeout(() => setProgress(100), 320);
    const t3 = setTimeout(() => setIsVisible(false), 480);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  if (!isVisible) return null;

  const activeMessage =
    ROUTE_LOADING_MESSAGES[pathname] ||
    (pathname.startsWith("/trails")
      ? "Opening Chapter Trail & 100-Mark Unit Practice Test..."
      : "Preparing Your VidyaLila Study Arena...");

  return <BrandLoaderUI message={activeMessage} progress={progress} />;
}
