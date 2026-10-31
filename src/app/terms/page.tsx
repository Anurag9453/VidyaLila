"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  BookOpen,
  Scale,
  Award,
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  FileText,
} from "lucide-react";

export default function TermsAndDisclaimerPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 py-4">
      {/* Top Breadcrumb Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white border border-slate-200 px-5 py-3 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-extrabold text-slate-700">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          <span>VidyaLila Legal &amp; Academic Safeguards</span>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Home
        </Link>
      </div>

      {/* Main Header Card */}
      <section className="rounded-3xl border-2 border-slate-200 bg-white p-6 sm:p-8 shadow-[0_6px_0_0_#e2e8f0] space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-extrabold text-emerald-700">
          <FileText className="h-3.5 w-3.5" />
          <span>Terms of Use, Educational Disclaimer &amp; Fair-Play Policy</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Student, Parent &amp; Academic Terms of Service
        </h1>

        <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
          Welcome to <strong>VidyaLila</strong>. To ensure complete transparency
          for students, parents, and educators across India, please review our
          educational disclaimer, textbook reference policy, and paid quiz
          fair-play guarantee below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-1">
            <p className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              NCERT &amp; Board Aligned
            </p>
            <p className="text-[11px] font-medium text-slate-500">
              All chapters and units are structured strictly around standard
              Class 9–12 syllabi.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-1">
            <p className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-indigo-600" />
              Bonus Marks Protection
            </p>
            <p className="text-[11px] font-medium text-slate-500">
              Any ambiguous question in a paid quiz automatically awards full
              bonus marks to all participants.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-1">
            <p className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-amber-600" />
              1-Click Error Reporting
            </p>
            <p className="text-[11px] font-medium text-slate-500">
              Every study unit and test question includes an instant report
              button for rapid review.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Clauses */}
      <div className="space-y-4">
        {/* 1. Supplementary Self-Study Aid & Official Textbook Primacy */}
        <div className="rounded-3xl border-2 border-slate-200 bg-white p-6 sm:p-7 shadow-[0_4px_0_0_#e2e8f0] space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 border border-sky-200 text-sky-600">
              <BookOpen className="h-5 w-5" />
            </span>
            <h2 className="text-lg font-extrabold text-slate-900">
              1. Supplementary Self-Study Aid &amp; Official Textbook Primacy
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
            VidyaLila is an independent supplementary self-study, revision, and
            practice platform designed to make learning engaging. The study
            notes, Hinglish explanations, formulas, and practice questions on
            this website are <strong>not a replacement</strong> for official
            school instruction or prescribed board textbooks. Students are
            advised to always treat official{" "}
            <strong>NCERT, CBSE, and CISCE (ICSE / ISC)</strong> textbooks and
            marking schemes as their final, authoritative reference for school
            and board examinations.
          </p>
        </div>

        {/* 2. Non-Affiliation with CBSE, ICSE / CISCE, or NCERT */}
        <div className="rounded-3xl border-2 border-slate-200 bg-white p-6 sm:p-7 shadow-[0_4px_0_0_#e2e8f0] space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 border border-amber-200 text-amber-600">
              <AlertTriangle className="h-5 w-5" />
            </span>
            <h2 className="text-lg font-extrabold text-slate-900">
              2. Non-Affiliation with Examination Boards
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
            VidyaLila is an independent educational platform and is{" "}
            <strong>
              not affiliated with, endorsed by, sponsored by, or officially
              connected to
            </strong>{" "}
            the Central Board of Secondary Education (CBSE), the Council for the
            Indian School Certificate Examinations (CISCE / ICSE / ISC), the
            National Council of Educational Research and Training (NCERT), or
            any state or central government educational body. All board names
            are used strictly for syllabus-identification purposes.
          </p>
        </div>

        {/* 3. Content Accuracy, "As-Is" Provision & Limitation of Liability */}
        <div className="rounded-3xl border-2 border-slate-200 bg-white p-6 sm:p-7 shadow-[0_4px_0_0_#e2e8f0] space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600">
              <Scale className="h-5 w-5" />
            </span>
            <h2 className="text-lg font-extrabold text-slate-900">
              3. Accuracy Verification &amp; Limitation of Legal Liability
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
            Every chapter unit and MCQ on VidyaLila undergoes multi-step
            verification against standard textbooks and automated math/science
            validation. However, educational content may occasionally contain
            inadvertent typographical, formatting, or calculation errors. All
            study materials, unit tests, and competition questions are provided
            on an <strong>&ldquo;as-is&rdquo; and &ldquo;as-available&rdquo;</strong>{" "}
            basis without warranties of any kind.
          </p>
          <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
            Under no circumstances shall VidyaLila, its founder, or its content
            contributors be held legally or financially liable for any student’s
            school/board examination marks, academic grades, rankings, or any
            indirect or consequential damages arising from the use of this
            platform. In all cases involving paid passes, VidyaLila’s maximum
            aggregate liability to any user or parent is strictly limited to the
            actual amount paid by that user for the active Quiz Pass (₹49, ₹149,
            or ₹499).
          </p>
        </div>

        {/* 4. Paid Quiz & Competition Fair-Play / Bonus Marks Policy */}
        <div className="rounded-3xl border-2 border-slate-200 bg-white p-6 sm:p-7 shadow-[0_4px_0_0_#e2e8f0] space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600">
              <Award className="h-5 w-5" />
            </span>
            <h2 className="text-lg font-extrabold text-slate-900">
              4. Paid Quiz Pass &amp; Disputed Question Bonus-Marks Policy
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
            VidyaLila offers optional, quiz-count based academic practice passes:{" "}
            <strong>⚡ Basic Pass — Daily (₹49: 2 Daily Quizzes)</strong>,{" "}
            <strong>💎 VIP Pass — Weekly (₹149: 7 Daily Quizzes + 1 Weekly Quiz)</strong>,
            and{" "}
            <strong>
              👑 Pro Pass — Monthly (₹499: 30 Daily Quizzes + 4 Weekly/Monthly Quizzes)
            </strong>
            . Passes are strictly <strong>quiz-wise</strong> (1 Pass Credit = 1 Quiz entry). If a student exhausts their quiz credits early (for example, using all 7 Daily Quizzes within 2 days across multiple classes or subjects), the pass limit is exhausted and a recharge is required for additional quizzes.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm font-medium text-slate-600">
            <li>
              <strong>Disputed Question / Typo Protection:</strong> Just like
              national competitive exams (JEE / NEET / CBSE Boards), if any
              question in a Daily Quiz, Weekly Competition, or Monthly
              Competition is found to have a typographical error or an ambiguous
              answer key, <strong>full bonus marks</strong> for that question
              are awarded to every participant, or a free replacement Quiz Pass
              is credited to the student’s wallet.
            </li>
            <li>
              <strong>Skill-Based Educational Assessment:</strong> All live
              quizzes and competitions on VidyaLila are strictly academic,
              curriculum-based skill assessments and do not constitute gambling,
              betting, or games of chance.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
