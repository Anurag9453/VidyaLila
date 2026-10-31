"use client";

import React from "react";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  subtitle?: string;
  animated?: boolean;
  className?: string;
}

/**
 * VidyaLila Official Brand Crest:
 * "The Peacock Feather (Morpankh) + Open Book"
 * - Open Book at the base represents Vidya (Structured Board Knowledge & Wisdom)
 * - Rising Peacock Feather with Golden Spark represents Lila (Playful, Effortless Mastery)
 */
export function BrandCrestIcon({
  className = "h-10 w-10",
  animated = false,
}: {
  className?: string;
  animated?: boolean;
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-indigo-600 border-b-[3px] border-emerald-800 shadow-sm select-none shrink-0 ${className} ${
        animated ? "animate-bounce" : ""
      }`}
    >
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[82%] w-[82%] drop-shadow-sm"
      >
        <defs>
          {/* Outer Peacock Plume Gradient (Emerald -> Teal -> Cyan) */}
          <linearGradient id="vl_plume_outer" x1="32" y1="6" x2="32" y2="46" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#a7f3d0" />
            <stop offset="45%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#0d9488" />
          </linearGradient>

          {/* Inner Feather Eye Ring (Amber Gold -> Warm Orange) */}
          <linearGradient id="vl_eye_gold" x1="32" y1="12" x2="32" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="55%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>

          {/* Deep Royal Indigo Eye Center */}
          <linearGradient id="vl_eye_indigo" x1="32" y1="15" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#312e81" />
          </linearGradient>

          {/* Open Book Pages Gradient */}
          <linearGradient id="vl_book_pages" x1="10" y1="38" x2="54" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#fef3c7" />
          </linearGradient>
        </defs>

        {/* Subtle Top Sparkles of Wisdom */}
        <circle cx="15" cy="15" r="1.8" fill="#fef08a" />
        <circle cx="50" cy="14" r="1.5" fill="#a7f3d0" />
        <path
          d="M49 22L50.2 24.8L53 26L50.2 27.2L49 30L47.8 27.2L45 26L47.8 24.8L49 22Z"
          fill="#fde68a"
        />

        {/* Peacock Feather Outer Plume (Graceful Teardrop Rising from Book) */}
        <path
          d="M32 6C21 6 15 15.5 16.5 25.5C17.8 34 24.5 40.5 32 45C39.5 40.5 46.2 34 47.5 25.5C49 15.5 43 6 32 6Z"
          fill="url(#vl_plume_outer)"
          stroke="#ffffff"
          strokeWidth="2"
        />

        {/* Delicate Feather Barb Notches on Left & Right */}
        <path
          d="M19 18C22 20 24 22 25 25M45 18C42 20 40 22 39 25"
          stroke="#d1fae5"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        {/* Golden-Amber Halo Ring of the Morpankh */}
        <ellipse
          cx="32"
          cy="22.5"
          rx="9.5"
          ry="11"
          fill="url(#vl_eye_gold)"
        />

        {/* Royal Indigo Inner Eye of the Morpankh */}
        <ellipse
          cx="32"
          cy="23.5"
          rx="6.2"
          ry="7.4"
          fill="url(#vl_eye_indigo)"
        />

        {/* Cyan-Emerald Heart Accent inside the Indigo Eye */}
        <path
          d="M32 18.5C29.4 18.5 27.8 20.8 28.5 23.4C29.1 25.8 32 28.2 32 28.2C32 28.2 34.9 25.8 35.5 23.4C36.2 20.8 34.6 18.5 32 18.5Z"
          fill="#38bdf8"
        />

        {/* Glowing White Spark at Center of Feather Eye */}
        <circle cx="32" cy="22" r="2" fill="#ffffff" />

        {/* Central Golden Quill Stem (Rachis) Connecting Feather to Open Book */}
        <path
          d="M32 28V52"
          stroke="#fde68a"
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        {/* Open Book Base (Left & Right Upward-Curving Wings of Knowledge) */}
        <path
          d="M10 42.5C16.5 42.5 25 45 32 50.5C39 45 47.5 42.5 54 42.5V52.5C47.5 52.5 39 54.5 32 59C25 54.5 16.5 52.5 10 52.5V42.5Z"
          fill="url(#vl_book_pages)"
          stroke="#1e293b"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Golden Book Spine / Accent Pages */}
        <path
          d="M13.5 46.5C19 46.8 25.5 48.8 32 53.5C38.5 48.8 45 46.8 50.5 46.5"
          stroke="#f59e0b"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function BrandLogo({
  size = "md",
  showText = true,
  subtitle,
  animated = false,
  className = "",
}: BrandLogoProps) {
  const sizeConfig = {
    sm: {
      box: "h-8 w-8 rounded-xl",
      text: "text-base sm:text-lg",
      sub: "text-[9px]",
    },
    md: {
      box: "h-9 w-9 sm:h-10 sm:w-10 rounded-xl",
      text: "text-lg sm:text-xl",
      sub: "text-[10px]",
    },
    lg: {
      box: "h-14 w-14 rounded-2xl",
      text: "text-2xl sm:text-3xl",
      sub: "text-xs",
    },
    xl: {
      box: "h-20 w-20 rounded-3xl",
      text: "text-3xl sm:text-4xl",
      sub: "text-xs sm:text-sm",
    },
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <BrandCrestIcon className={sizeConfig.box} animated={animated} />
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-extrabold tracking-tight text-slate-900 ${sizeConfig.text}`}
          >
            Vidya<span className="text-emerald-600">Lila</span>
          </span>
          {subtitle && (
            <span
              className={`mt-1 font-extrabold uppercase tracking-wider text-slate-400 ${sizeConfig.sub}`}
            >
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
