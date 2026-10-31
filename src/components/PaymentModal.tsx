"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Crown,
  Zap,
  X,
  Lock,
  Calendar,
  Trophy,
} from "lucide-react";

export type PassPackageType = "ONE_DAY" | "WEEKLY" | "MONTHLY";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: PassPackageType;
  contestTitle?: string;
  onSuccessPackage: (pkg: PassPackageType) => void;
}

export const PASS_PACKAGES: {
  id: PassPackageType;
  symbol: string;
  badge: string;
  name: string;
  priceInr: number;
  durationLabel: string;
  dailyCount: number;
  competitionCount: number;
  summary: string;
  perks: string[];
  accentBorder: string;
  accentBg: string;
  badgeBg: string;
  symbolBoxBg: string;
}[] = [
  {
    id: "ONE_DAY",
    symbol: "⚡",
    badge: "⚡ BASIC • 2 QUIZZES",
    name: "Basic Pass (Daily)",
    priceInr: 49,
    durationLabel: "/ 2 quizzes",
    dailyCount: 2,
    competitionCount: 0,
    summary: "2 Daily Quiz Credits (~₹24.50 / quiz)",
    perks: [
      "Unlocks 2 Daily Quizzes (1 Credit = 1 Quiz entry)",
      "Use on 2 subjects today or 1 today & 1 tomorrow",
      "Instant All-India Rank & Contest Rating",
      "Exhausts after 2 Daily Quizzes — recharge anytime",
    ],
    accentBorder: "border-amber-500",
    accentBg: "bg-amber-50",
    badgeBg: "bg-amber-200 text-amber-900",
    symbolBoxBg: "bg-amber-400 border-amber-600 text-slate-950",
  },
  {
    id: "WEEKLY",
    symbol: "💎",
    badge: "💎 VIP • 8 QUIZZES",
    name: "VIP Pass (Weekly)",
    priceInr: 149,
    durationLabel: "/ 8 quizzes",
    dailyCount: 7,
    competitionCount: 1,
    summary: "7 Daily Quizzes + 1 Weekly Quiz (8 Total Credits • Save 24%)",
    perks: [
      "7 Daily Quiz Credits (1 deducted per Daily Quiz)",
      "1 Weekly Quiz Credit (for Sunday Weekly Quiz)",
      "Save 24% per quiz (~₹18.60 / quiz vs Basic)",
      "Once all 8 quizzes are used, recharge to get more",
    ],
    accentBorder: "border-indigo-500",
    accentBg: "bg-indigo-50",
    badgeBg: "bg-indigo-200 text-indigo-900",
    symbolBoxBg: "bg-indigo-600 border-indigo-800 text-white",
  },
  {
    id: "MONTHLY",
    symbol: "👑",
    badge: "👑 PRO • 34 QUIZZES",
    name: "Pro Pass (Monthly)",
    priceInr: 499,
    durationLabel: "/ 34 quizzes",
    dailyCount: 30,
    competitionCount: 4,
    summary: "30 Daily Quizzes + 4 Weekly Quizzes (34 Total Credits • Save 40%)",
    perks: [
      "30 Daily Quiz Credits (1 deducted per Daily Quiz)",
      "4 Weekly / Monthly Quiz Credits",
      "Best Value: Save 40% per quiz (~₹14.67 / quiz)",
      "Once all 34 quizzes are exhausted, recharge anytime",
    ],
    accentBorder: "border-emerald-500",
    accentBg: "bg-emerald-50",
    badgeBg: "bg-emerald-200 text-emerald-900",
    symbolBoxBg: "bg-emerald-500 border-emerald-700 text-white",
  },
];

export function PaymentModal({
  isOpen,
  onClose,
  defaultPackage = "WEEKLY",
  contestTitle,
  onSuccessPackage,
}: PaymentModalProps) {
  const [selectedPkg, setSelectedPkg] = useState<PassPackageType>(defaultPackage);
  const [upiId, setUpiId] = useState("student@okaxis");
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const activePkg =
    PASS_PACKAGES.find((p) => p.id === selectedPkg) || PASS_PACKAGES[1];

  const handlePay = async () => {
    setIsProcessing(true);
    try {
      const orderRes = await fetch("/api/payments/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ packagePlan: selectedPkg }),
      });
      const orderData = await orderRes.json();

      if (orderData.orderId) {
        await fetch("/api/payments/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            packagePlan: selectedPkg,
            razorpayOrderId: orderData.orderId,
            razorpayPaymentId: `pay_vl_${Date.now()}`,
          }),
        });
      }
    } catch {
      // Fallback if offline
    } finally {
      setIsProcessing(false);
      onSuccessPackage(selectedPkg);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 backdrop-blur-sm p-3 sm:p-4">
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-indigo-500 bg-white text-slate-900 shadow-[0_10px_0_0_#4f46e5]">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-5 sm:p-6 text-white">
          <button
            onClick={onClose}
            className="absolute right-3.5 top-3.5 rounded-full bg-white/20 p-1.5 text-white hover:bg-white/30 transition"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-300">
            <ShieldCheck className="h-4 w-4" />
            VidyaLila Quiz &amp; Competition Passes
          </div>
          <h3 className="mt-1 text-xl sm:text-2xl font-extrabold pr-6">
            Choose Your Quiz Package ⚡
          </h3>
          <p className="mt-1 text-xs font-medium text-indigo-100">
            {contestTitle
              ? `Unlocking "${contestTitle}" — Pick Basic Pass (Daily), VIP Pass (Weekly), or Pro Pass (Monthly).`
              : "Pick Basic Pass (Daily), VIP Pass (Weekly), or Pro Pass (Monthly) to unlock live subject quizzes."}
          </p>
        </div>

        <div className="p-4 sm:p-6 space-y-5">
          {/* 3 Package Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PASS_PACKAGES.map((pkg) => {
              const isSelected = selectedPkg === pkg.id;
              return (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => setSelectedPkg(pkg.id)}
                  className={`rounded-2xl border-2 border-b-4 p-3.5 text-left transition flex flex-col justify-between ${
                    isSelected
                      ? `${pkg.accentBorder} ${pkg.accentBg}`
                      : "border-slate-200 bg-slate-50 hover:bg-slate-100"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`inline-block rounded-md px-2 py-0.5 text-[10px] font-extrabold ${pkg.badgeBg}`}
                      >
                        {pkg.badge}
                      </span>
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-xl border-b-2 text-base shadow-sm ${pkg.symbolBoxBg}`}
                      >
                        {pkg.symbol}
                      </span>
                    </div>
                    <h4 className="mt-2 text-sm font-extrabold text-slate-900 flex items-center gap-1">
                      <span>{pkg.symbol}</span>
                      <span>{pkg.name}</span>
                    </h4>
                    <p className="mt-1 text-2xl font-extrabold text-slate-900">
                      ₹{pkg.priceInr}
                      <span className="text-xs font-bold text-slate-500">
                        {pkg.durationLabel}
                      </span>
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-200/80 space-y-1 text-[11px] font-bold text-slate-700">
                    <p className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-indigo-600 shrink-0" />
                      <span>{pkg.dailyCount} Daily Quiz{pkg.dailyCount > 1 ? "zes" : ""}</span>
                    </p>
                    <p className="flex items-center gap-1">
                      <Trophy className="h-3 w-3 text-amber-600 shrink-0" />
                      <span>
                        {pkg.competitionCount > 0
                          ? `${pkg.competitionCount} Weekly Quiz${pkg.competitionCount > 1 ? "zes" : ""}`
                          : "No Weekly Quiz"}
                      </span>
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Package Details Box */}
          <div className="rounded-2xl bg-slate-50 border-2 border-slate-200 p-4 space-y-2.5 text-xs text-slate-700">
            <div className="flex items-center justify-between">
              <p className="font-extrabold text-slate-900 flex items-center gap-1.5 text-sm">
                <span className="text-base">{activePkg.symbol}</span>
                <span>
                  {activePkg.name}: {activePkg.summary}
                </span>
              </p>
              <span className="rounded-lg bg-white border border-slate-200 px-2.5 py-1 font-extrabold text-slate-900">
                ₹{activePkg.priceInr}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-bold text-slate-700">
              {activePkg.perks.map((perk, i) => (
                <div key={i} className="flex items-start gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-amber-50 border border-amber-200 p-2.5 text-[11px] font-bold text-amber-900 leading-relaxed">
              💡 <strong>Quiz-Wise Pass Rule:</strong> Passes are strictly{" "}
              <strong>quiz-count based</strong> (not unlimited per day). For example, the{" "}
              <strong>VIP Pass (Weekly)</strong> gives you <strong>7 Daily Quizzes + 1 Weekly Quiz</strong> total. If you exhaust all 7 Daily Quizzes in 2 days (by taking multiple subject/class quizzes), your pass limit will be exhausted and you will need to recharge again.
            </div>
          </div>

          {/* UPI Input */}
          <div>
            <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
              Pay via UPI (GPay / PhonePe / Paytm) or Card
            </label>
            <input
              type="text"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              placeholder="Enter UPI ID (e.g. student@okaxis)"
              className="w-full rounded-xl sm:rounded-2xl border-2 border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm font-bold text-slate-900 focus:border-indigo-500 focus:bg-white focus:outline-none"
            />
          </div>

          <button
            type="button"
            onClick={handlePay}
            disabled={isProcessing}
            className="w-full btn-3d-emerald py-3.5 text-sm sm:text-base flex items-center justify-center gap-2"
          >
            {isProcessing ? (
              <span>Verifying Payment with Razorpay...</span>
            ) : (
              <>
                <Sparkles className="h-5 w-5" />
                <span>
                  Pay ₹{activePkg.priceInr} &amp; Activate {activePkg.name}
                </span>
              </>
            )}
          </button>

          <p className="text-center text-[11px] font-bold text-slate-400 flex items-center justify-center gap-1">
            <Lock className="h-3 w-3 shrink-0" /> Demo Mode: Click &ldquo;Pay ₹
            {activePkg.priceInr}&rdquo; to test instant package activation!
          </p>
        </div>
      </div>
    </div>
  );
}
