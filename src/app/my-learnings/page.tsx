"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useApp } from "@/lib/store";
import { ClassGrade, CoreSubject } from "@/lib/mock-data";
import {
  BookmarkCheck,
  ArrowRight,
  Compass,
  LogIn,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Award,
} from "lucide-react";

const SUBJECT_STYLES: Record<string, string> = {
  Physics: "bg-sky-100 text-sky-800 border-sky-200",
  Chemistry: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Mathematics: "bg-amber-100 text-amber-900 border-amber-200",
};

export default function MyLearningsPage() {
  const router = useRouter();
  const {
    modules,
    profile,
    isAuthenticated,
    isChapterUnlocked,
    contentLanguage,
  } = useApp();

  const isHinglish =
    (profile.preferredLanguage || contentLanguage) === "HINGLISH";

  const [classFilter, setClassFilter] = useState<"ALL" | ClassGrade>("ALL");
  const [subjectFilter, setSubjectFilter] = useState<"ALL" | CoreSubject>(
    "ALL"
  );

  // Only show chapters the signed-in user has explicitly enrolled in (unlocked)
  const enrolledChapters = useMemo(() => {
    if (!isAuthenticated) return [];
    return modules.filter((m) => isChapterUnlocked(m.id));
  }, [modules, isAuthenticated, isChapterUnlocked]);

  const filteredChapters = useMemo(() => {
    return enrolledChapters.filter((m) => {
      if (classFilter !== "ALL" && m.classGrade !== classFilter) return false;
      if (subjectFilter !== "ALL" && m.subject !== subjectFilter) return false;
      return true;
    });
  }, [enrolledChapters, classFilter, subjectFilter]);

  const totalUnitsEnrolled = useMemo(
    () => enrolledChapters.reduce((sum, m) => sum + m.units.length, 0),
    [enrolledChapters]
  );

  const totalUnitsCompleted = useMemo(
    () =>
      enrolledChapters.reduce(
        (sum, m) =>
          sum +
          m.units.filter((u) => profile.completedUnitIds.includes(u.id)).length,
        0
      ),
    [enrolledChapters, profile.completedUnitIds]
  );

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <section className="bento-card p-6 sm:p-8 bg-gradient-to-br from-indigo-50/90 via-white to-emerald-50/70">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 border border-indigo-200 px-3 py-1 text-xs font-extrabold text-indigo-800 uppercase tracking-wider">
              <BookmarkCheck className="h-3.5 w-3.5" />
              <span>Personal Learning Library</span>
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              My Learnings
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
              {isHinglish
                ? "Jitne bhi chapters mein tumne Vidya Credits se Enroll kiya hai, wo sab yahan hamesha ke liye save rehte hain — seedha kholo aur padhai jari rakho!"
                : "Every chapter you enroll in using your Vidya Credits appears right here with lifetime access and progress tracking."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="rounded-2xl bg-white border-2 border-slate-200 px-4 py-3 text-center min-w-[110px] shadow-xs">
              <div className="text-xl sm:text-2xl font-black text-indigo-700">
                {enrolledChapters.length}
              </div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Enrolled
              </div>
            </div>

            <div className="rounded-2xl bg-white border-2 border-slate-200 px-4 py-3 text-center min-w-[110px] shadow-xs">
              <div className="text-xl sm:text-2xl font-black text-emerald-600">
                {totalUnitsCompleted}/{totalUnitsEnrolled}
              </div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Topics Done
              </div>
            </div>

            <div className="rounded-2xl bg-amber-50 border-2 border-amber-200 px-4 py-3 text-center min-w-[110px] shadow-xs">
              <div className="text-xl sm:text-2xl font-black text-amber-800">
                🪙 {(profile.credits ?? 0).toLocaleString()}
              </div>
              <div className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                Credits Left
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar (when user has at least 1 enrolled chapter) */}
      {isAuthenticated && enrolledChapters.length > 0 && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl bg-white/90 border border-slate-200/90 p-3.5 shadow-xs">
          {/* Class Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 mr-1">
              Class:
            </span>
            {(["ALL", 9, 10, 11, 12] as const).map((g) => (
              <button
                key={String(g)}
                type="button"
                onClick={() => setClassFilter(g)}
                className={`rounded-xl px-3 py-1.5 text-xs font-extrabold transition ${
                  classFilter === g
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {g === "ALL" ? "All Classes" : `Class ${g}`}
              </button>
            ))}
          </div>

          {/* Subject Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 mr-1">
              Subject:
            </span>
            {(["ALL", "Physics", "Chemistry", "Mathematics"] as const).map(
              (subj) => (
                <button
                  key={subj}
                  type="button"
                  onClick={() => setSubjectFilter(subj)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-extrabold transition ${
                    subjectFilter === subj
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {subj === "ALL" ? "All Subjects" : subj}
                </button>
              )
            )}
          </div>
        </div>
      )}

      {/* Main Content Area */}
      {!isAuthenticated ? (
        <div className="bento-card p-10 text-center space-y-5">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
            <LogIn className="h-8 w-8" />
          </div>
          <div className="space-y-2 max-w-md mx-auto">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Sign In to View Your Enrolled Chapters
            </h2>
            <p className="text-sm text-slate-600">
              Every chapter starts locked. Sign in to use your Vidya Credits,
              enroll in any Class 9–12 chapter, and build your personal library
              here.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <Link
              href="/auth?next=/my-learnings"
              className="btn-3d-indigo px-6 py-3 text-sm font-extrabold inline-flex items-center gap-2"
            >
              <LogIn className="h-4 w-4" />
              <span>Sign In / Create Account</span>
            </Link>
            <Link
              href="/"
              className="btn-3d-white px-5 py-3 text-sm font-extrabold inline-flex items-center gap-2"
            >
              <Compass className="h-4 w-4" />
              <span>Browse Courses</span>
            </Link>
          </div>
        </div>
      ) : enrolledChapters.length === 0 ? (
        <div className="bento-card p-10 text-center space-y-5">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
            <BookOpen className="h-8 w-8" />
          </div>
          <div className="space-y-2 max-w-lg mx-auto">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              No Chapters Enrolled Yet
            </h2>
            <p className="text-sm text-slate-600">
              {isHinglish
                ? "Abhi tumne kisi chapter mein enroll nahi kiya hai. Learn tab ya upar ke Search bar se koi bhi chapter chuno aur 'Enroll Now (100 Credits)' par click karo — wo turant yahan dikhne lagega!"
                : "You haven't enrolled in any chapters yet. Explore Class 9–12 courses from the Learn tab or Search bar and click 'Enroll Now (100 Credits)' on any chapter to add it here."}
            </p>
          </div>
          <Link
            href="/"
            className="btn-3d-emerald px-6 py-3 text-sm font-extrabold inline-flex items-center gap-2"
          >
            <Sparkles className="h-4 w-4" />
            <span>Explore &amp; Enroll in Chapters</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ) : filteredChapters.length === 0 ? (
        <div className="bento-card p-8 text-center space-y-3">
          <p className="text-base font-bold text-slate-700">
            No enrolled chapters match the selected Class / Subject filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setClassFilter("ALL");
              setSubjectFilter("ALL");
            }}
            className="btn-3d-white px-4 py-2 text-xs font-extrabold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredChapters.map((chap) => {
            const completedUnits = chap.units.filter((u) =>
              profile.completedUnitIds.includes(u.id)
            ).length;
            const totalUnits = chap.units.length;
            const progressPct =
              totalUnits > 0
                ? Math.round((completedUnits / totalUnits) * 100)
                : 0;
            const subjCls =
              SUBJECT_STYLES[chap.subject] ||
              "bg-slate-100 text-slate-700 border-slate-200";

            return (
              <div
                key={chap.id}
                onClick={() => router.push(`/trails/${chap.slug}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    router.push(`/trails/${chap.slug}`);
                  }
                }}
                className="group rounded-3xl bg-white border-2 border-slate-200 shadow-[0_6px_0_0_#e2e8f0] hover:border-indigo-400 hover:shadow-[0_6px_0_0_#818cf8] hover:-translate-y-0.5 p-6 flex flex-col justify-between gap-5 transition-all cursor-pointer select-none"
              >
                <div className="space-y-4">
                  {/* Top Row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-2xl text-white shadow-sm group-hover:scale-105 transition">
                      {chap.badgeEmoji}
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="rounded-md bg-slate-900 px-2 py-0.5 text-[10px] font-extrabold text-white">
                          Class {chap.classGrade}
                        </span>
                        <span
                          className={`rounded-md border px-2 py-0.5 text-[10px] font-extrabold ${subjCls}`}
                        >
                          {chap.subject}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 text-[10px] font-extrabold text-emerald-800 uppercase tracking-wider">
                        <CheckCircle2 className="h-3 w-3" />
                        <span>Enrolled</span>
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                      Chapter {chap.chapterNumber}
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition line-clamp-2">
                      {chap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium line-clamp-2">
                      {isHinglish && chap.subtitleHinglish
                        ? chap.subtitleHinglish
                        : chap.subtitle}
                    </p>
                  </div>
                </div>

                {/* Progress & Open CTA */}
                <div className="space-y-4 pt-3 border-t border-slate-100">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-extrabold text-slate-500">
                      <span className="flex items-center gap-1">
                        <Award className="h-3.5 w-3.5 text-emerald-500" />
                        Mastery Progress
                      </span>
                      <span className="text-emerald-600">
                        {completedUnits}/{totalUnits} Topics ({progressPct}%)
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300"
                        style={{ width: `${progressPct}%` }}
                      />
                    </div>
                  </div>

                  <div className="w-full rounded-2xl bg-indigo-50 group-hover:bg-indigo-600 border border-indigo-200 group-hover:border-indigo-600 px-4 py-3 text-xs font-extrabold text-indigo-700 group-hover:text-white flex items-center justify-between transition">
                    <span>
                      {completedUnits > 0
                        ? "Continue Learning"
                        : `Start Chapter (${totalUnits} Topics)`}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
