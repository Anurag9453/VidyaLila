"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/lib/store";
import { LearningModule } from "@/lib/mock-data";
import { Search, X, ArrowRight, BookOpen } from "lucide-react";

interface SearchHit {
  mod: LearningModule;
  matchedUnitTitle?: string;
  score: number;
}

const SUBJECT_BADGE_STYLES: Record<string, string> = {
  Physics: "bg-sky-100 text-sky-800 border-sky-200",
  Chemistry: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Mathematics: "bg-amber-100 text-amber-900 border-amber-200",
};

export function CourseSearchBar({ className = "" }: { className?: string }) {
  const router = useRouter();
  const { modules } = useApp();

  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Global Cmd+K / Ctrl+K shortcut to focus search
  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
    };
    window.addEventListener("keydown", handleGlobalKey);
    return () => window.removeEventListener("keydown", handleGlobalKey);
  }, []);

  const results = useMemo<SearchHit[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const tokens = q.split(/\s+/).filter(Boolean);
    const hits: SearchHit[] = [];

    for (const mod of modules) {
      const titleLower = mod.title.toLowerCase();
      const subLower = (mod.subtitle || "").toLowerCase();
      const subHiLower = (mod.subtitleHinglish || "").toLowerCase();
      const subjLower = mod.subject.toLowerCase();
      const gradeStr = `class ${mod.classGrade} grade ${mod.classGrade} ${mod.classGrade}`;
      const unitTitles = mod.units.map((u) => u.title);
      const unitBlob = unitTitles.join(" ").toLowerCase();

      const fullHaystack = `${titleLower} ${subLower} ${subHiLower} ${subjLower} ${gradeStr} ${unitBlob}`;

      // Every typed word must match somewhere in the chapter metadata or its units
      if (!tokens.every((t) => fullHaystack.includes(t))) continue;

      let score = 0;
      if (titleLower === q) score += 120;
      else if (titleLower.startsWith(q)) score += 90;
      else if (titleLower.includes(q)) score += 65;

      for (const t of tokens) {
        if (titleLower.includes(t)) score += 25;
        if (subjLower.includes(t)) score += 12;
        if (gradeStr.includes(t)) score += 10;
        if (subLower.includes(t) || subHiLower.includes(t)) score += 8;
      }

      // Check if a specific unit/topic title matched
      let matchedUnitTitle: string | undefined;
      for (const uTitle of unitTitles) {
        const ul = uTitle.toLowerCase();
        if (ul.includes(q) || tokens.some((t) => t.length >= 3 && ul.includes(t))) {
          matchedUnitTitle = uTitle;
          score += 10;
          break;
        }
      }

      hits.push({ mod, matchedUnitTitle, score });
    }

    hits.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      if (a.mod.classGrade !== b.mod.classGrade)
        return a.mod.classGrade - b.mod.classGrade;
      return a.mod.chapterNumber - b.mod.chapterNumber;
    });

    return hits.slice(0, 8);
  }, [query, modules]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const navigateToModule = (mod: LearningModule) => {
    setIsOpen(false);
    setQuery("");
    router.push(`/trails/${mod.slug}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen && query.trim()) setIsOpen(true);

    if (e.key === "Escape") {
      setIsOpen(false);
      inputRef.current?.blur();
      return;
    }

    if (results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const picked = results[activeIndex] || results[0];
      if (picked) navigateToModule(picked.mod);
    }
  };

  const showDropdown = isOpen && query.trim().length > 0;

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="relative flex items-center">
        <Search className="pointer-events-none absolute left-3 h-4 w-4 text-slate-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => {
            if (query.trim()) setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Search courses, chapters, topics..."
          aria-label="Search learning courses"
          className="w-full rounded-xl border border-slate-200/90 bg-slate-50/90 py-2 pl-9 pr-14 text-xs sm:text-sm font-medium text-slate-800 placeholder:text-slate-400 transition-all focus:border-indigo-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100"
        />

        {query ? (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setIsOpen(false);
              inputRef.current?.focus();
            }}
            aria-label="Clear search"
            className="absolute right-2.5 rounded-md p-0.5 text-slate-400 hover:bg-slate-200/70 hover:text-slate-700 transition"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        ) : (
          <kbd className="pointer-events-none hidden xl:inline-flex absolute right-2.5 items-center rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-bold text-slate-400">
            ⌘K
          </kbd>
        )}
      </div>

      {/* Live Search Results Dropdown */}
      {showDropdown && (
        <div className="absolute left-0 right-0 top-full mt-2 z-50 min-w-[300px] sm:min-w-[380px] max-w-[480px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white/98 backdrop-blur-xl shadow-2xl shadow-slate-900/10">
          {results.length > 0 ? (
            <>
              <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-3.5 py-2 text-[11px] font-bold text-slate-500">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5 text-indigo-500" />
                  Matching Courses ({results.length}
                  {results.length === 8 ? "+" : ""})
                </span>
                <span className="hidden sm:inline text-[10px] text-slate-400">
                  ↑↓ to navigate • Enter to open
                </span>
              </div>

              <ul className="max-h-[380px] overflow-y-auto divide-y divide-slate-100">
                {results.map((hit, idx) => {
                  const { mod, matchedUnitTitle } = hit;
                  const isActive = idx === activeIndex;
                  const subjectCls =
                    SUBJECT_BADGE_STYLES[mod.subject] ||
                    "bg-slate-100 text-slate-700 border-slate-200";

                  return (
                    <li key={mod.id}>
                      <button
                        type="button"
                        onMouseEnter={() => setActiveIndex(idx)}
                        onClick={() => navigateToModule(mod)}
                        className={`w-full flex items-start gap-3 px-3.5 py-2.5 text-left transition ${
                          isActive ? "bg-indigo-50/90" : "hover:bg-slate-50"
                        }`}
                      >
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-lg shadow-2xs">
                          {mod.badgeEmoji}
                        </span>

                        <div className="min-w-0 flex-1 space-y-1">
                          <div className="flex items-center justify-between gap-2">
                            <p className="truncate text-sm font-bold text-slate-900">
                              {mod.title}
                            </p>
                            <ArrowRight
                              className={`h-3.5 w-3.5 shrink-0 transition ${
                                isActive
                                  ? "text-indigo-600 translate-x-0.5"
                                  : "text-slate-300"
                              }`}
                            />
                          </div>

                          <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-extrabold">
                            <span className="rounded-md bg-slate-900 px-1.5 py-0.5 text-white">
                              Class {mod.classGrade}
                            </span>
                            <span
                              className={`rounded-md border px-1.5 py-0.5 ${subjectCls}`}
                            >
                              {mod.subject}
                            </span>
                            <span className="text-slate-400 font-semibold">
                              Ch. {mod.chapterNumber} • {mod.units.length} units
                            </span>
                          </div>

                          {matchedUnitTitle && (
                            <p className="truncate text-[11px] font-medium text-indigo-700">
                              Topic: {matchedUnitTitle}
                            </p>
                          )}
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            <div className="px-4 py-6 text-center space-y-1">
              <p className="text-sm font-bold text-slate-700">
                No courses found for &ldquo;{query.trim()}&rdquo;
              </p>
              <p className="text-xs text-slate-400">
                Try searching by chapter, topic, or class — e.g. Electrostatics,
                Matrices, Probability, or Class 12.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
