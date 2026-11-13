"use client";

import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  useApp,
  type SupportCase,
  type SupportCaseCategory,
} from "@/lib/store";
import {
  Headphones,
  ShieldCheck,
  CreditCard,
  Lock,
  Zap,
  Scale,
  Send,
  CheckCircle2,
  Clock,
  ArrowLeft,
  Coins,
  FileText,
  Sparkles,
  AlertCircle,
  Phone,
  Mail,
  User,
} from "lucide-react";

const CATEGORY_OPTIONS: {
  id: SupportCaseCategory;
  title: string;
  subtitle: string;
  sla: string;
  icon: React.ReactNode;
  badgeColor: string;
}[] = [
  {
    id: "PAYMENT_ISSUE",
    title: "Payment / UPI Debit Issue",
    subtitle:
      "Money deducted via UPI/Card/NetBanking but Vidya Credits were not added, or duplicate debit.",
    sla: "High Priority • 24h Resolution",
    icon: <CreditCard className="w-5 h-5 text-amber-600" />,
    badgeColor: "border-amber-300 bg-amber-50/70 text-amber-900",
  },
  {
    id: "CHAPTER_UNLOCK",
    title: "Chapter Unlock / Credit Deduction",
    subtitle:
      "50 Vidya Credits were spent to unlock a chapter, or Full-Class pack purchased, but chapter still shows locked.",
    sla: "High Priority • Instant Credit Restore",
    icon: <Lock className="w-5 h-5 text-indigo-600" />,
    badgeColor: "border-indigo-300 bg-indigo-50/70 text-indigo-900",
  },
  {
    id: "TEST_TECHNICAL",
    title: "Live Test / Technical Glitch",
    subtitle:
      "Test disconnected mid-way, timer error, or checkpoint question malfunction costing entry credits.",
    sla: "Standard • 24–48h Credit Refund",
    icon: <Zap className="w-5 h-5 text-emerald-600" />,
    badgeColor: "border-emerald-300 bg-emerald-50/70 text-emerald-900",
  },
  {
    id: "GRIEVANCE_PRIVACY",
    title: "Formal Grievance / Parent Privacy (DPDP)",
    subtitle:
      "Escalate a formal complaint to the Grievance Officer or request Under-18 student data correction/deletion.",
    sla: "Statutory SLA • 24h Ack / 15d Closure",
    icon: <Scale className="w-5 h-5 text-rose-600" />,
    badgeColor: "border-rose-300 bg-rose-50/70 text-rose-900",
  },
];

function SupportDeskContent() {
  const searchParams = useSearchParams();
  const {
    profile,
    isAuthenticated,
    modules,
    supportCases,
    submitSupportCase,
  } = useApp();

  const [category, setCategory] = useState<SupportCaseCategory>("CHAPTER_UNLOCK");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [studentName, setStudentName] = useState(profile.name || "");
  const [studentEmail, setStudentEmail] = useState(profile.email || "");
  const [studentPhone, setStudentPhone] = useState(profile.phone || "");
  const [paymentReference, setPaymentReference] = useState("");
  const [relatedChapterOrContest, setRelatedChapterOrContest] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [createdCase, setCreatedCase] = useState<SupportCase | null>(null);
  const [editingContact, setEditingContact] = useState(false);

  // Sync profile fields strictly to the active signed-in user (or clear on sign-out)
  useEffect(() => {
    if (isAuthenticated && profile.username !== "@guest_scholar") {
      setStudentName(profile.name || "");
      setStudentEmail(profile.email || "");
      setStudentPhone(profile.phone || "");
      setEditingContact(false);
    } else {
      setStudentName("");
      setStudentEmail("");
      setStudentPhone("");
      setEditingContact(false);
      setCreatedCase(null);
    }
  }, [
    isAuthenticated,
    profile.id,
    profile.username,
    profile.name,
    profile.email,
    profile.phone,
  ]);

  // Pre-fill from URL query parameters (?category=...&chapter=...&ref=...)
  useEffect(() => {
    const qCat = searchParams.get("category") as SupportCaseCategory | null;
    if (
      qCat &&
      ["PAYMENT_ISSUE", "CHAPTER_UNLOCK", "TEST_TECHNICAL", "GRIEVANCE_PRIVACY"].includes(
        qCat
      )
    ) {
      setCategory(qCat);
    }
    const qChapter = searchParams.get("chapter");
    if (qChapter) {
      setRelatedChapterOrContest(qChapter);
      setSubject((prev) => prev || `Issue unlocking chapter: ${qChapter}`);
    }
    const qRef = searchParams.get("ref");
    if (qRef) {
      setPaymentReference(qRef);
    }
  }, [searchParams]);

  const classModules = modules.filter(
    (m) => m.classGrade === profile.classGrade
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const finalName = isAuthenticated && !editingContact
      ? profile.name || studentName
      : studentName;
    const finalEmail = isAuthenticated && !editingContact
      ? profile.email || studentEmail
      : studentEmail;
    const finalPhone = isAuthenticated && !editingContact
      ? profile.phone || studentPhone
      : studentPhone;

    if (!isAuthenticated || editingContact) {
      if (!finalName.trim()) {
        setErrorMsg("Please enter Student or Parent Name.");
        return;
      }
      if (!finalEmail.trim() && !finalPhone.trim()) {
        setErrorMsg(
          "Please provide at least an Email address or 10-digit Phone/WhatsApp number so we can update you."
        );
        return;
      }
    }
    if (!subject.trim()) {
      setErrorMsg("Please enter a brief subject for your issue.");
      return;
    }
    if (description.trim().length < 15) {
      setErrorMsg(
        "Please describe what happened in at least 15 characters so our team can verify and resolve it quickly."
      );
      return;
    }

    setSubmitting(true);
    try {
      const res = await submitSupportCase({
        category,
        subject,
        description,
        studentName: finalName,
        studentEmail: finalEmail,
        studentPhone: finalPhone,
        paymentReference,
        relatedChapterOrContest,
      });

      if (res.ok) {
        setCreatedCase(res.caseItem);
        setSubject("");
        setDescription("");
        setPaymentReference("");
      }
    } finally {
      setSubmitting(false);
    }
  };

  // Strictly filter cases belonging ONLY to the currently signed-in student (no cross-user overlap)
  const myCases = isAuthenticated
    ? supportCases.filter((c) => {
        const myEmail = (profile.email || "").trim().toLowerCase();
        const myUsername = (profile.username || "").trim().toLowerCase();
        const caseEmail = (c.studentEmail || "").trim().toLowerCase();
        const caseUsername = (c.studentUsername || "").trim().toLowerCase();

        if (myEmail && caseEmail && myEmail === caseEmail) return true;
        if (
          myUsername &&
          myUsername !== "@guest_scholar" &&
          caseUsername &&
          myUsername === caseUsername
        ) {
          return true;
        }
        return false;
      })
    : createdCase
    ? [createdCase]
    : [];

  return (
    <div className="min-h-screen bg-slate-50/70 pb-20">
      {/* Top Hero Header */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border-b border-indigo-900/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-300 hover:text-white mb-5 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to VidyaLila Learning Trails
          </Link>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-bold mb-3">
                <Headphones className="w-3.5 h-3.5 text-amber-400" />
                STUDENT & PARENT HELP DESK • GRIEVANCE REDRESSAL CELL
              </div>
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
                Raise a Support or Grievance Case
              </h1>
              <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
                Facing an issue with <strong className="text-white">Razorpay / UPI payments</strong>,{" "}
                <strong className="text-white">Chapter Unlocks</strong>, or{" "}
                <strong className="text-white">Vidya Credits</strong>? Submit a ticket below. Every
                verified technical or unlock issue is backed by our{" "}
                <span className="text-amber-300 font-bold">
                  100% Wallet Credit Restoration & RBI Source-Refund Guarantee
                </span>
                .
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 shrink-0 max-w-xs">
              <div className="flex items-center gap-2.5 mb-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs font-black uppercase tracking-wider text-emerald-300">
                  Guaranteed SLA Protection
                </span>
              </div>
              <ul className="text-xs text-slate-200 space-y-1.5">
                <li>• Automated Case ID (<code className="text-amber-300">VL-CASE-XXXXXX</code>)</li>
                <li>• 24h Acknowledgement • 48h Credit Restore</li>
                <li>• Direct Sync with VidyaLila Service Desk</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Raise a Support Case Form (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {createdCase && (
            <div className="rounded-3xl bg-emerald-950 text-white p-6 border-2 border-emerald-500/50 shadow-xl animate-fade-in">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-emerald-300">
                      Support Ticket Registered Successfully
                    </span>
                    <h3 className="text-xl font-black text-white">
                      Case Reference: {createdCase.caseNumber}
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-400 text-slate-950">
                  STATUS: OPEN
                </span>
              </div>

              <p className="text-xs sm:text-sm text-emerald-100 mt-3 leading-relaxed">
                We have logged your case under{" "}
                <strong className="text-white">{createdCase.subject}</strong>. Our Support &
                Grievance Officer will verify your account/payment logs within{" "}
                <strong className="text-amber-300">24–48 hours</strong>. If credits were deducted due
                to a technical issue, they will be credited directly back to your{" "}
                <strong className="text-amber-300">Vidya Credit Wallet</strong>.
              </p>

              <div className="mt-4 pt-3 border-t border-emerald-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-emerald-200">
                <span>
                  👤 {createdCase.studentName} ({createdCase.studentUsername})
                </span>
                <button
                  type="button"
                  onClick={() => setCreatedCase(null)}
                  className="text-xs font-bold text-amber-300 hover:underline"
                >
                  + Raise Another Case
                </button>
              </div>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6"
          >
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                1. Select What You Need Help With
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Choose the category that best matches your issue for fastest routing:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3.5">
                {CATEGORY_OPTIONS.map((opt) => {
                  const active = category === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setCategory(opt.id)}
                      className={`text-left p-4 rounded-2xl border-2 transition-all ${
                        active
                          ? "border-indigo-600 bg-indigo-50/50 shadow-sm"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <div className="p-2 rounded-xl bg-slate-100">{opt.icon}</div>
                        <span
                          className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${opt.badgeColor}`}
                        >
                          {opt.sla}
                        </span>
                      </div>
                      <p className="font-extrabold text-sm text-slate-900 mt-1">
                        {opt.title}
                      </p>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {opt.subtitle}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Student / Parent Contact Details: Auto-fetched when logged in, only asked when guest */}
            <div className="pt-2 border-t border-slate-100">
              {isAuthenticated && !editingContact ? (
                <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800">
                        ✓ Account Details Fetched Automatically from Your Profile
                      </span>
                      <p className="text-sm font-black text-slate-900 mt-0.5">
                        {profile.name}{" "}
                        <span className="text-slate-500 font-bold">
                          ({profile.username})
                        </span>
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5">
                        {profile.email ? `📧 ${profile.email}` : ""}{" "}
                        {profile.phone ? `• 📞 +91 ${profile.phone}` : ""} • Class{" "}
                        {profile.classGrade} ({profile.board})
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setEditingContact(true)}
                    className="text-xs font-extrabold text-indigo-600 hover:text-indigo-800 underline shrink-0 self-start sm:self-center cursor-pointer"
                  >
                    Edit Contact Info
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-base font-black text-slate-900">
                      2. Student / Parent Contact Details
                    </h2>
                    {isAuthenticated && editingContact && (
                      <button
                        type="button"
                        onClick={() => setEditingContact(false)}
                        className="text-xs font-bold text-slate-500 hover:text-slate-800 underline cursor-pointer"
                      >
                        Use Profile Defaults
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Student / Parent Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          value={studentName}
                          onChange={(e) => setStudentName(e.target.value)}
                          placeholder="e.g. Aarav Sharma"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-indigo-600"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Registered Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          value={studentEmail}
                          onChange={(e) => setStudentEmail(e.target.value)}
                          placeholder="student@email.com"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-indigo-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone / WhatsApp No. *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          value={studentPhone}
                          onChange={(e) => setStudentPhone(e.target.value)}
                          placeholder="10-digit mobile"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-indigo-600"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Contextual Fields for Payment or Chapter Unlock */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Affected Chapter or Live Test{" "}
                  <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <select
                  value={relatedChapterOrContest}
                  onChange={(e) => {
                    setRelatedChapterOrContest(e.target.value);
                    if (e.target.value && !subject) {
                      setSubject(`Unlock / Access issue with ${e.target.value}`);
                    }
                  }}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-indigo-600"
                >
                  <option value="">-- Select Chapter / General Account --</option>
                  {classModules.map((m) => (
                    <option key={m.id} value={`${m.title} (${m.subject} Class ${m.classGrade})`}>
                      Class {m.classGrade} {m.subject}: {m.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Razorpay Payment ID / UPI UTR No.{" "}
                  <span className="text-slate-400 font-normal">(If payment related)</span>
                </label>
                <input
                  type="text"
                  value={paymentReference}
                  onChange={(e) => setPaymentReference(e.target.value)}
                  placeholder="e.g. pay_Pxyz12345 or 12-digit UPI Ref"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-indigo-600"
                />
              </div>
            </div>

            {/* Subject & Detailed Grievance */}
            <div className="space-y-4 pt-2 border-t border-slate-100">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Brief Issue Summary / Subject *
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder={
                    category === "PAYMENT_ISSUE"
                      ? "e.g. Paid ₹499 via UPI but 1,200 Vidya Credits not showing in account"
                      : category === "CHAPTER_UNLOCK"
                      ? "e.g. Spent 50 credits on Laws of Motion but chapter is still locked"
                      : "e.g. Brief summary of your issue or grievance"
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-indigo-600"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Detailed Description of Your Issue / Grievance *
                </label>
                <textarea
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Please describe what happened, approximate time, and how we can help resolve this for you..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-indigo-600"
                  required
                />
              </div>
            </div>

            {errorMsg && (
              <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
              <p className="text-[11px] text-slate-500 leading-relaxed">
                By submitting this case, it is assigned a tracked{" "}
                <strong className="text-slate-700">VL-CASE ID</strong> and routed to our Support &
                Grievance Redressal Officer in compliance with the Consumer Protection (E-Commerce)
                Rules, 2020.
              </p>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-black text-sm shadow-md shadow-indigo-500/20 transition shrink-0 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                {submitting ? "Registering Case..." : "Submit Support Case"}
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: My Support Cases & Policy Guarantees (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Active Wallet Balance Summary */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Your Current Account & Wallet
              </span>
              <p className="text-sm font-black text-slate-900 mt-0.5">
                {profile.name}{" "}
                <span className="text-slate-500 font-semibold">({profile.username})</span>
              </p>
              <p className="text-xs text-slate-500">
                Class {profile.classGrade} • {profile.board} Board •{" "}
                {profile.unlockedModuleIds?.length || 0} Paid Chapters Unlocked
              </p>
            </div>
            <div className="px-4 py-2.5 rounded-2xl bg-amber-50 border border-amber-200 text-right">
              <div className="flex items-center gap-1 justify-end text-amber-900 font-black text-lg">
                <Coins className="w-4 h-4 text-amber-600" />
                {profile.credits}
              </div>
              <span className="text-[10px] font-bold text-amber-700 uppercase">
                Vidya Credits
              </span>
            </div>
          </div>

          {/* My Submitted Cases Tracker */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-600" />
                <h3 className="font-black text-base text-slate-900">
                  My Support Cases ({myCases.length})
                </h3>
              </div>
              <span className="text-[11px] font-bold text-slate-400">Live Status</span>
            </div>

            {myCases.length === 0 ? (
              <div className="text-center py-8 px-4 rounded-2xl bg-slate-50 border border-dashed border-slate-200">
                <Clock className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="text-sm font-bold text-slate-700">
                  No Support Cases Raised Yet
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  When you raise a ticket, its live status, Case ID, and credit refund updates will
                  appear right here.
                </p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
                {myCases.map((c) => {
                  const isResolved =
                    c.status === "RESOLVED" || c.status === "RESOLVED_CREDITED";
                  return (
                    <div
                      key={c.id}
                      className={`p-4 rounded-2xl border transition ${
                        isResolved
                          ? "bg-emerald-50/40 border-emerald-200"
                          : "bg-slate-50/70 border-slate-200"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="font-mono text-xs font-black text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-lg border border-indigo-200">
                          {c.caseNumber}
                        </span>
                        <span
                          className={`text-[10px] font-black px-2.5 py-0.5 rounded-full ${
                            c.status === "RESOLVED_CREDITED"
                              ? "bg-emerald-600 text-white"
                              : c.status === "RESOLVED"
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-amber-100 text-amber-900"
                          }`}
                        >
                          {c.status === "RESOLVED_CREDITED"
                            ? `RESOLVED (+${c.creditsRefunded} 🪙 CREDITED)`
                            : c.status}
                        </span>
                      </div>

                      <p className="font-bold text-sm text-slate-900">{c.subject}</p>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                        {c.description}
                      </p>

                      {c.relatedChapterOrContest && (
                        <p className="text-[11px] font-semibold text-indigo-700 mt-1.5">
                          📘 {c.relatedChapterOrContest}
                        </p>
                      )}

                      {c.resolutionNote && (
                        <div className="mt-2.5 p-2.5 rounded-xl bg-white border border-emerald-200 text-xs text-emerald-950">
                          <span className="font-black text-emerald-700 block mb-0.5">
                            ✓ Official Support Resolution:
                          </span>
                          {c.resolutionNote}
                        </div>
                      )}

                      <div className="mt-2.5 pt-2 border-t border-slate-200/70 flex items-center justify-between text-[11px] text-slate-400">
                        <span>
                          {new Date(c.createdAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        <span>Priority: {c.priority}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Transparent Refund & Grievance Policy Summary Card */}
          <div className="bg-gradient-to-br from-indigo-950 to-slate-900 text-white rounded-3xl p-6 shadow-md space-y-3">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              How We Resolve Payment & Unlock Issues
            </div>
            <div className="space-y-2.5 text-xs text-slate-200 leading-relaxed">
              <p>
                <strong className="text-white">1. Chapter Unlock / Technical Glitch:</strong> If
                your Vidya Credits (`50 🪙`) were deducted but a chapter did not unlock or a test
                glitched, our Admin team restores your credits in 1 click directly to your wallet.
              </p>
              <p>
                <strong className="text-white">2. Failed or Duplicate UPI / Bank Debit:</strong> If
                money was debited from your bank account twice or without credit delivery, we either
                credit your wallet immediately or trigger a full source refund via Razorpay within{" "}
                <strong className="text-amber-300">5–7 working days</strong> as per RBI guidelines.
              </p>
            </div>
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
              <Link
                href="/terms#refunds"
                className="text-indigo-300 hover:text-white font-bold underline"
              >
                Read Full Refund & Grievance Policy →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SupportPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-600 font-bold text-sm">
          Loading Student Support & Grievance Desk...
        </div>
      }
    >
      <SupportDeskContent />
    </Suspense>
  );
}
