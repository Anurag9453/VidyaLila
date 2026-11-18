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
  Lock,
  RotateCcw,
  UserCheck,
  Mail,
  Landmark,
} from "lucide-react";

export default function TermsAndDisclaimerPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 py-4">
      {/* Top Breadcrumb Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white border border-slate-200 px-5 py-3 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-extrabold text-slate-700">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          <span>Global &amp; Indian Legal, Privacy (GDPR • COPPA • DPDP) &amp; Regulatory Hub</span>
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
          <span>Terms of Service • DPDP Privacy Policy • Credit Refund Policy</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Global Student, Parent &amp; Regulatory Compliance Terms (India • US • UK • EU • Global)
        </h1>

        <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
          Welcome to <strong>VidyaLila</strong>. This document governs your use
          of the VidyaLila learning platform worldwide and is compliant with the{" "}
          <strong>Digital Personal Data Protection (DPDP) Act, 2023 (India)</strong>,{" "}
          the <strong>EU &amp; UK General Data Protection Regulation (GDPR / UK-GDPR)</strong>,{" "}
          the <strong>US Children&apos;s Online Privacy Protection Act (COPPA)</strong>,{" "}
          the <strong>Information Technology Act, 2000</strong>, the{" "}
          <strong>Consumer Protection (E-Commerce) Rules, 2020</strong>, and
          applicable <strong>Reserve Bank of India (RBI)</strong> guidelines for
          closed-system digital platform credits.
        </p>

        {/* Quick Navigation Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-extrabold">
          <a
            href="#terms"
            className="rounded-xl bg-slate-100 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 px-3 py-1.5 text-slate-700 hover:text-indigo-700 transition"
          >
            1–3. Academic Terms &amp; Liability
          </a>
          <a
            href="#credits"
            className="rounded-xl bg-slate-100 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 px-3 py-1.5 text-slate-700 hover:text-indigo-700 transition"
          >
            4. Vidya Credits (🪙) &amp; Pricing
          </a>
          <a
            href="#refunds"
            className="rounded-xl bg-slate-100 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 px-3 py-1.5 text-slate-700 hover:text-indigo-700 transition"
          >
            5. Refund &amp; Cancellation Policy
          </a>
          <a
            href="#privacy"
            className="rounded-xl bg-slate-100 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 px-3 py-1.5 text-slate-700 hover:text-indigo-700 transition"
          >
            6. Privacy Policy (DPDP Act 2023)
          </a>
          <a
            href="#grievance"
            className="rounded-xl bg-slate-100 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 px-3 py-1.5 text-slate-700 hover:text-indigo-700 transition"
          >
            7. Grievance Officer &amp; Jurisdiction
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-1">
            <p className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              100% Original Curriculum
            </p>
            <p className="text-[11px] font-medium text-slate-500">
              Story-driven Hinglish lessons built from scratch for Class 9–12
              conceptual mastery.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-1">
            <p className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-indigo-600" />
              DPDP Act 2023 Child Safety
            </p>
            <p className="text-[11px] font-medium text-slate-500">
              Zero behavioral ad-tracking of minors, strict parental consent,
              and encrypted cloud storage.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-1">
            <p className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-amber-600" />
              Instant Credit Refund Shield
            </p>
            <p className="text-[11px] font-medium text-slate-500">
              100% Vidya Credit wallet protection on any technical disruption or
              ambiguous quiz question.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Clauses */}
      <div className="space-y-4">
        {/* 1. Supplementary Self-Study Aid & Official Textbook Primacy */}
        <div
          id="terms"
          className="scroll-mt-24 rounded-3xl border-2 border-slate-200 bg-white p-6 sm:p-7 shadow-[0_4px_0_0_#e2e8f0] space-y-3"
        >
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 border border-sky-200 text-sky-600">
              <BookOpen className="h-5 w-5" />
            </span>
            <h2 className="text-lg font-extrabold text-slate-900">
              1. Supplementary Self-Study Aid &amp; Official Textbook Primacy
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
            VidyaLila is an independent supplementary self-study, conceptual
            revision, and skill-practice platform designed to make learning
            engaging. The story-driven Hinglish explanations, formulas, worked
            examples, and practice questions on this website are{" "}
            <strong>not a replacement</strong> for formal school instruction or
            prescribed examination textbooks. Students are advised to always
            treat their official school curriculum and prescribed board textbooks
            as their final, authoritative reference for school and board
            examinations.
          </p>
        </div>

        {/* 2. Non-Affiliation with Examination Boards & Copyright Notice */}
        <div className="rounded-3xl border-2 border-slate-200 bg-white p-6 sm:p-7 shadow-[0_4px_0_0_#e2e8f0] space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 border border-amber-200 text-amber-600">
              <AlertTriangle className="h-5 w-5" />
            </span>
            <h2 className="text-lg font-extrabold text-slate-900">
              2. Non-Affiliation with Examination Boards &amp; Intellectual Property
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
            any state or central government educational body. Any reference to
            class levels or curricula is strictly for nominative,
            grade-identification purposes under Section 52 of the Indian
            Copyright Act, 1957.
          </p>
          <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
            All original stories, characters, Hinglish pedagogical explanations,
            custom diagrams, software code, and question banks on VidyaLila are
            the exclusive intellectual property of VidyaLila. Unauthorized
            scraping, commercial reproduction, or redistribution is strictly
            prohibited.
          </p>
        </div>

        {/* 3. Accuracy Verification, "As-Is" Provision & Limitation of Liability */}
        <div className="rounded-3xl border-2 border-slate-200 bg-white p-6 sm:p-7 shadow-[0_4px_0_0_#e2e8f0] space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600">
              <Scale className="h-5 w-5" />
            </span>
            <h2 className="text-lg font-extrabold text-slate-900">
              3. Accuracy Verification, Lab Safety &amp; Limitation of Liability
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
            Every chapter unit and MCQ on VidyaLila undergoes multi-step
            verification and automated mathematical/scientific validation.
            However, educational content may occasionally contain inadvertent
            typographical, formatting, or calculation errors. All study
            materials, unit tests, and competition questions are provided on an{" "}
            <strong>&ldquo;as-is&rdquo; and &ldquo;as-available&rdquo;</strong>{" "}
            basis without warranties of any kind.
          </p>
          <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
            <strong>Science Activity &amp; Lab Safety Notice:</strong> Any
            science experiment mentioned in Physics or Chemistry chapters that
            involves heat, electricity, glass apparatus, acids, alkalis, or lab
            chemicals is described strictly for conceptual understanding or
            supervised school laboratory demonstration by a qualified teacher.
            Students must never attempt hazardous chemical or electrical
            activities at home.
          </p>
          <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
            Under no circumstances shall VidyaLila, its founder, or its content
            contributors be held legally or financially liable for any student’s
            school/board examination marks, academic grades, rankings, or any
            indirect or consequential damages arising from the use of this
            platform. In all cases involving paid packages, VidyaLila’s maximum
            aggregate liability to any user or parent is strictly limited to the
            actual amount paid by that user for the active transaction (₹199,
            ₹499, ₹999, or ₹1,999).
          </p>
        </div>

        {/* 4. Closed-System Vidya Credits (🪙) & Pricing Policy */}
        <div
          id="credits"
          className="scroll-mt-24 rounded-3xl border-2 border-slate-200 bg-white p-6 sm:p-7 shadow-[0_4px_0_0_#e2e8f0] space-y-3"
        >
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 border border-amber-200 text-amber-600">
              <Award className="h-5 w-5" />
            </span>
            <h2 className="text-lg font-extrabold text-slate-900">
              4. Vidya Credits (🪙) Economy, Pricing &amp; Closed-System Nature
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
            The first <strong>2 chapters of every subject</strong> (Mathematics,
            Physics, and Chemistry) are <strong>100% Free Starter Chapters</strong>.
            Upon creating a free scholar account, every new registered user
            receives <strong>🪙 300 Free Welcome Credits</strong>. Additional
            chapters and live skill assessments can be unlocked using Vidya
            Credits:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm font-medium text-slate-600">
            <li>
              <strong>Permanent Chapter Unlock:</strong>{" "}
              <strong>🪙 100 Credits per chapter</strong>. Once unlocked by a
              signed-in account, that chapter remains{" "}
              <strong>unlocked forever</strong> for that account.
            </li>
            <li>
              <strong>Live Skill Assessments / Quizzes:</strong> Daily Subject
              Test = <strong>🪙 20 Credits</strong> • Weekly Subject Championship ={" "}
              <strong>🪙 50 Credits</strong> • Monthly Grand Championship ={" "}
              <strong>🪙 100 Credits</strong>.
            </li>
            <li>
              <strong>Optional Recharge &amp; Comprehensive Packs (Inclusive of GST where applicable):</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>
                  <strong>🪙 Starter Pack (₹199):</strong> Adds{" "}
                  <strong>400 Vidya Credits</strong> to your account wallet.
                </li>
                <li>
                  <strong>📘 Subject Pack (₹499):</strong> Adds{" "}
                  <strong>1,200 Vidya Credits</strong> to your account wallet.
                </li>
                <li>
                  <strong>💎 Scholar Pack (₹999):</strong> Adds{" "}
                  <strong>2,600 Vidya Credits</strong> to your account wallet.
                </li>
                <li>
                  <strong>👑 Comprehensive Class Pack (₹1,999):</strong>{" "}
                  Instantly unlocks <strong>all Mathematics, Physics &amp; Chemistry chapters</strong>{" "}
                  of your selected class (Class 9 or Class 10) permanently, plus
                  adds <strong>1,000 Bonus Vidya Credits</strong> for Live Tests.
                </li>
              </ul>
            </li>
            <li>
              <strong>Closed-System Digital Credits (RBI Exemption Notice):</strong>{" "}
              Vidya Credits (🪙) are closed-loop, in-app educational units
              usable solely on the VidyaLila platform for accessing study
              chapters and academic skill tests. Vidya Credits{" "}
              <strong>
                cannot be withdrawn as cash/fiat currency, cannot be transferred
                to any bank account or third party, carry no monetary redemption
                value outside VidyaLila
              </strong>
              , and do not constitute a banking deposit or open/semi-closed
              Prepaid Payment Instrument (PPI).
            </li>
            <li>
              <strong>Pure Academic Skill Assessments (Non-Gambling):</strong>{" "}
              All live quizzes on VidyaLila are curriculum-based tests of
              academic skill and knowledge. Top-ranker goodies are awarded
              strictly as promotional Vidya Credits (🪙) for further study and
              never as cash/monetary gambling payouts.
            </li>
          </ul>
        </div>

        {/* 5. Refund, Cancellation & Disputed Question Policy */}
        <div
          id="refunds"
          className="scroll-mt-24 rounded-3xl border-2 border-slate-200 bg-white p-6 sm:p-7 shadow-[0_4px_0_0_#e2e8f0] space-y-3"
        >
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600">
              <RotateCcw className="h-5 w-5" />
            </span>
            <h2 className="text-lg font-extrabold text-slate-900">
              5. Refund, Cancellation &amp; Failed-Payment Policy
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
            Because digital Vidya Credits (🪙) and chapter unlocks are delivered
            instantaneously to your account upon payment verification,{" "}
            <strong>
              completed purchases of Credit Packs and Comprehensive Class Packs
              are final and non-refundable in cash
            </strong>
            . Instead, VidyaLila operates a transparent{" "}
            <strong>100% Wallet Credit Refund Guarantee</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm font-medium text-slate-600">
            <li>
              <strong>100% Credit Refund on Technical Issues:</strong> If you
              spend Vidya Credits (🪙) to unlock a chapter or enter a live quiz
              and experience a verified technical defect, server interruption,
              or quiz cancellation, <strong>100% of the spent Vidya Credits</strong>{" "}
              are refunded directly back into your Vidya Credit Wallet so you
              can reuse them at any time.
            </li>
            <li>
              <strong>Disputed / Ambiguous Question Protection:</strong> Just
              like national competitive examinations, if any question in a live
              quiz is found to have a typographical error or an ambiguous answer
              key, <strong>full bonus marks</strong> for that question are
              awarded to all participants, or the entry credits (🪙) are
              refunded to your wallet.
            </li>
            <li>
              <strong>RBI Duplicate / Failed Payment Safeguard (Source Refund):</strong>{" "}
              If your bank account, UPI, or card is debited more than once for
              the same order (duplicate deduction), or if your money is debited
              on Razorpay but Vidya Credits are not credited to your account
              within 24 hours, please contact our Grievance Officer with your
              Razorpay Payment ID / UPI Reference. Verified duplicate or
              unfulfilled debits are either credited to your wallet immediately
              or refunded to your original payment source within{" "}
              <strong>5–7 working days</strong> in accordance with RBI payment
              aggregator guidelines.
            </li>
          </ul>
        </div>

        {/* 6. Global Student & Minor Privacy Policy (India DPDP Act 2023 • EU/UK GDPR • US COPPA) */}
        <div
          id="privacy"
          className="scroll-mt-24 rounded-3xl border-2 border-slate-200 bg-white p-6 sm:p-7 shadow-[0_4px_0_0_#e2e8f0] space-y-3"
        >
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 border border-violet-200 text-violet-600">
              <Lock className="h-5 w-5" />
            </span>
            <h2 className="text-lg font-extrabold text-slate-900">
              6. Global Student &amp; Minor Privacy Policy (DPDP Act 2023 • EU/UK GDPR • US COPPA)
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
            VidyaLila is committed to protecting the privacy and safety of
            students and parents worldwide in accordance with the{" "}
            <strong>Digital Personal Data Protection (DPDP) Act, 2023 (India)</strong>,{" "}
            the <strong>European Union &amp; United Kingdom General Data Protection Regulation (GDPR / UK-GDPR)</strong>,{" "}
            and the <strong>United States Children&apos;s Online Privacy Protection Act (COPPA)</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm font-medium text-slate-600">
            <li>
              <strong>Age Requirement (13+ Years) &amp; Parental Consent (COPPA / GDPR Art. 8 / DPDP Sec. 9):</strong>{" "}
              VidyaLila is designed for high-school scholars in{" "}
              <strong>Class 9 to Class 12 (Ages 14–18)</strong>. Users must be at
              least <strong>13 years of age</strong> to create an account (in
              compliance with US COPPA). Students under 18 years of age (or under
              the applicable age of digital consent in their country,{" "}
              13–16 under EU/UK GDPR and 18 under India&apos;s DPDP Act, 2023)
              must register and make any credit/pack purchases strictly with the
              verifiable consent and supervision of their Parent or Legal
              Guardian.
            </li>
            <li>
              <strong>Cross-Border Data Storage &amp; SOC-2 / ISO-27001 Cloud Security:</strong>{" "}
              By using the platform, international and domestic users acknowledge
              and consent that their basic learning profile data is processed and
              stored across globally distributed, encrypted cloud infrastructure
              (powered by <strong>Supabase / AWS</strong> and{" "}
              <strong>Vercel</strong>, certified under{" "}
              <strong>SOC-2 Type II</strong> and <strong>ISO-27001</strong> with
              TLS 1.3 encryption in transit and AES-256 encryption at rest) and
              governed by Standard Contractual Clauses (SCCs) for lawful
              cross-border transfers under GDPR Chapter V and India&apos;s DPDP
              Act, 2023.
            </li>
            <li>
              <strong>Data Minimization &amp; Lawful Educational Purpose (GDPR Art. 5 &amp; 6):</strong>{" "}
              We collect only minimal, low-risk educational account data—Full
              Name, Email Address, optional Parent/Student Phone Number, Class
              Grade, School/City, and unique <code>@username</code>—strictly to
              synchronize study progress, maintain your Credit Wallet passbook,
              display leaderboard rankings, and provide customer support. We
              never collect government IDs, biometric data, health data, or
              precise GPS geolocation.
            </li>
            <li>
              <strong>Zero Child Behavioral Tracking &amp; Zero Data Selling:</strong>{" "}
              In strict compliance with Section 9(3) of the DPDP Act, 2023, GDPR
              Recital 38, and COPPA, VidyaLila <strong>never</strong> conducts
              behavioral monitoring, profiling, or targeted third-party
              advertising directed at students. We{" "}
              <strong>never sell, rent, or trade</strong> student or parent
              personal data to third-party telecallers, data brokers, or
              advertising networks.
            </li>
            <li>
              <strong>PCI-DSS Level 1 Payment Isolation:</strong> All domestic
              (INR) and international (USD, GBP, EUR, AED, SGD) payments are
              processed directly by <strong>Razorpay</strong> on PCI-DSS Level 1
              compliant vaults. VidyaLila never collects, sees, or stores your
              credit/debit card numbers, CVV, bank logins, or UPI PINs on its
              database.
            </li>
            <li>
              <strong>Right to Access, Portability &amp; 1-Click Account Erasure (&ldquo;Right to be Forgotten&rdquo; — GDPR Art. 17 / DPDP Sec. 12):</strong>{" "}
              Students and parents worldwide have the absolute right to review,
              update, export, or request permanent deletion of their account and
              all associated personal data at any time directly from{" "}
              <strong>User Settings (/auth)</strong> or via our Support &amp;
              Privacy Desk. Verified erasure requests are permanently executed
              within <strong>72 hours</strong>.
            </li>
          </ul>
        </div>

        {/* 7. Grievance Redressal Officer, Contact Us & Governing Law */}
        <div
          id="grievance"
          className="scroll-mt-24 rounded-3xl border-2 border-slate-200 bg-white p-6 sm:p-7 shadow-[0_4px_0_0_#e2e8f0] space-y-4"
        >
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 border border-rose-200 text-rose-600">
              <Landmark className="h-5 w-5" />
            </span>
            <h2 className="text-lg font-extrabold text-slate-900">
              7. Grievance Redressal Officer, Contact Details &amp; Indian Jurisdiction
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
            In compliance with Rule 3(2) of the Information Technology
            (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021,
            the Consumer Protection (E-Commerce) Rules, 2020, and the DPDP Act,
            2023, any student, parent, or user with a query regarding payments,
            credit refunds, content accuracy, or data privacy may contact our
            designated Grievance Officer:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-1.5">
              <p className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <UserCheck className="h-4 w-4 text-indigo-600" />
                <span>Designated Grievance &amp; Compliance Officer</span>
              </p>
              <p className="text-slate-600 font-medium">
                <strong>Platform / Entity:</strong> VidyaLila Education (India)
              </p>
              <p className="text-slate-600 font-medium">
                <strong>Designation:</strong> Founder &amp; Grievance Redressal Officer
              </p>
              <p className="text-slate-600 font-medium flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-slate-400" />
                <span>
                  <strong>Support &amp; Grievance Email:</strong>{" "}
                  <a
                    href="mailto:support@vidyalila.com"
                    className="text-indigo-600 font-bold underline"
                  >
                    support@vidyalila.com
                  </a>
                </span>
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-1.5">
              <p className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Resolution Timeline &amp; Jurisdiction</span>
              </p>
              <p className="text-slate-600 font-medium">
                <strong>Acknowledgment:</strong> Within 24–48 hours of receipt
              </p>
              <p className="text-slate-600 font-medium">
                <strong>Final Resolution:</strong> Within 15 business days
              </p>
              <p className="text-slate-600 font-medium">
                <strong>Governing Law:</strong> Laws of the Republic of India
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-indigo-50 border border-indigo-200 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-xs sm:text-sm font-extrabold text-indigo-950">
                Need Instant Help with a Payment, Chapter Unlock, or Formal Grievance?
              </p>
              <p className="text-xs text-indigo-700 mt-0.5">
                Raise an official tracked ticket (<code className="font-bold">VL-CASE-XXXXXX</code>) on our Student &amp; Parent Support Desk.
              </p>
            </div>
            <Link
              href="/support"
              className="btn-3d-indigo px-4 py-2.5 text-xs font-extrabold shrink-0 text-center"
            >
              Open Support &amp; Grievance Desk →
            </Link>
          </div>

          <p className="text-[11px] font-medium text-slate-400 pt-1">
            Last Updated: November 2026 • By creating an account, unlocking
            chapters, or purchasing Vidya Credits on VidyaLila, you and your
            Parent/Legal Guardian acknowledge and agree to all terms above.
          </p>
        </div>
      </div>
    </div>
  );
}
