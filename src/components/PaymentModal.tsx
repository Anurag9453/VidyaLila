"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useApp } from "@/lib/store";
import {
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  X,
  Lock,
  Calendar,
  Trophy,
  LogIn,
  Phone,
  AlertTriangle,
  RotateCcw,
  MessageCircle,
  Bug,
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
  const { isAuthenticated, signInWithGoogle, profile, updateProfilePhone } = useApp();
  const [selectedPkg, setSelectedPkg] = useState<PassPackageType>(defaultPackage);
  const [phone, setPhone] = useState(profile.phone || "");
  const [phoneError, setPhoneError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [failureInfo, setFailureInfo] = useState<{
    reason: string;
    code?: string;
    orderId?: string;
  } | null>(null);

  useEffect(() => {
    if (profile.phone && !phone) {
      setPhone(profile.phone);
    }
  }, [profile.phone, phone]);

  if (!isOpen) return null;

  const activePkg =
    PASS_PACKAGES.find((p) => p.id === selectedPkg) || PASS_PACKAGES[1];

  const validatePhone = (input: string): string | null => {
    const clean = input.replace(/[^0-9]/g, "");
    if (!clean) {
      return "Mobile number is required so we can send your pass invoice & WhatsApp support.";
    }
    if (clean.length !== 10) {
      return "Please enter a valid 10-digit mobile number.";
    }
    if (!/^[6-9]\d{9}$/.test(clean)) {
      return "Mobile number should start with 6, 7, 8, or 9.";
    }
    return null;
  };

  const logFailureToBackend = async (
    reason: string,
    code: string,
    orderId?: string
  ) => {
    const cleanPhone = phone.replace(/[^0-9]/g, "");
    try {
      await fetch("/api/payments/log-failure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: profile.id,
          orderId: orderId || `ord_fail_${Date.now()}`,
          packagePlan: selectedPkg,
          amountInr: activePkg.priceInr,
          phone: cleanPhone,
          userName: profile.name,
          userUsername: profile.username,
          userEmail: profile.email,
          failureReason: reason,
          failureCode: code,
        }),
      });
    } catch (err) {
      console.error("Failed to call /api/payments/log-failure:", err);
    }
    setFailureInfo({ reason, code, orderId });
  };

  const handlePay = async () => {
    if (!isAuthenticated) return;

    const validationMsg = validatePhone(phone);
    if (validationMsg) {
      setPhoneError(validationMsg);
      return;
    }
    setPhoneError("");

    const cleanPhone = phone.replace(/[^0-9]/g, "");
    // Save phone to profile state & Supabase
    updateProfilePhone(cleanPhone);

    setIsProcessing(true);
    setFailureInfo(null);

    let createdOrderId = "";

    try {
      const orderRes = await fetch("/api/payments/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: profile.id,
          packagePlan: selectedPkg,
          phone: cleanPhone,
          userName: profile.name,
          userEmail: profile.email,
        }),
      });
      const orderData = await orderRes.json();
      createdOrderId = orderData.orderId || `order_vl_${Date.now()}`;

      // Check if live Razorpay key is present and script loaded
      const rzpKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
      const isLiveRazorpay =
        typeof window !== "undefined" &&
        (window as unknown as { Razorpay?: unknown }).Razorpay &&
        rzpKey &&
        !rzpKey.includes("your_key");

      if (isLiveRazorpay) {
        type RazorpayOptions = {
          key: string;
          amount: number;
          currency: string;
          name: string;
          description: string;
          order_id?: string;
          prefill: {
            name: string;
            email?: string;
            contact: string;
          };
          handler: (response: {
            razorpay_payment_id: string;
            razorpay_order_id: string;
            razorpay_signature: string;
          }) => Promise<void>;
          modal: {
            ondismiss: () => void;
          };
        };

        const RazorpayClass = (window as unknown as { Razorpay: new (opts: RazorpayOptions) => { open: () => void; on: (event: string, handler: (errData: { error?: { description?: string; reason?: string; code?: string } }) => void) => void } }).Razorpay;

        const rzp = new RazorpayClass({
          key: rzpKey,
          amount: activePkg.priceInr * 100,
          currency: "INR",
          name: "VidyaLila Passes",
          description: `${activePkg.name} • ${activePkg.summary}`,
          order_id: createdOrderId,
          prefill: {
            name: profile.name,
            email: profile.email,
            contact: cleanPhone,
          },
          handler: async (response) => {
            const verifyRes = await fetch("/api/payments/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                userId: profile.id,
                packagePlan: selectedPkg,
                razorpayOrderId: response.razorpay_order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpaySignature: response.razorpay_signature,
              }),
            });
            if (verifyRes.ok) {
              setIsProcessing(false);
              onSuccessPackage(selectedPkg);
              onClose();
            } else {
              setIsProcessing(false);
              logFailureToBackend(
                "Payment verification signature failed on server.",
                "VERIFICATION_FAILED",
                createdOrderId
              );
            }
          },
          modal: {
            ondismiss: () => {
              setIsProcessing(false);
              logFailureToBackend(
                "User closed payment popup before completing payment.",
                "PAYMENT_CANCELLED_BY_USER",
                createdOrderId
              );
            },
          },
        });

        rzp.on("payment.failed", (resp) => {
          setIsProcessing(false);
          const desc =
            resp.error?.description ||
            resp.error?.reason ||
            "Bank transaction failed or card declined.";
          const code = resp.error?.code || "PAYMENT_FAILED";
          logFailureToBackend(desc, code, createdOrderId);
        });

        rzp.open();
        return;
      }

      // Demo simulation mode when Razorpay credentials are not yet added
      await fetch("/api/payments/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: profile.id,
          packagePlan: selectedPkg,
          razorpayOrderId: createdOrderId,
          razorpayPaymentId: `pay_vl_sim_${Date.now()}`,
        }),
      });

      setIsProcessing(false);
      onSuccessPackage(selectedPkg);
      onClose();
    } catch (err: unknown) {
      setIsProcessing(false);
      const errMsg =
        err instanceof Error
          ? err.message
          : "Network failure occurred during payment initiation";
      logFailureToBackend(errMsg, "NETWORK_ERROR", createdOrderId);
    }
  };

  // Test helper to simulate failure on purpose and verify hot lead alert
  const handleSimulateFailure = async () => {
    const cleanPhone = phone.replace(/[^0-9]/g, "") || "9876543210";
    setPhone(cleanPhone);
    setIsProcessing(true);
    await logFailureToBackend(
      "Simulated UPI timeout & bank server gateway error (Test Lead)",
      "BANK_GATEWAY_TIMEOUT",
      `fail_sim_${Date.now()}`
    );
    setIsProcessing(false);
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
          {/* Failure Alert Banner (If a failure occurred) */}
          {failureInfo && (
            <div className="rounded-2xl border-2 border-rose-300 bg-rose-50 p-4 sm:p-5 space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-600 text-white font-extrabold shadow-sm">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                      Payment Not Completed
                    </h4>
                    <span className="rounded-md bg-rose-200 px-2 py-0.5 text-[10px] font-extrabold text-rose-900">
                      {failureInfo.code || "FAILED"}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-rose-800 leading-snug">
                    {failureInfo.reason}
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-white/80 border border-rose-200 p-3 text-[11px] font-medium text-slate-700 leading-relaxed">
                🛡️ <strong>Your money is completely safe:</strong> If any amount was deducted by your bank or UPI app, it is securely reversed and credited back to your account within 2–3 business days.
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setFailureInfo(null)}
                  className="btn-3d-indigo w-full sm:w-auto px-4 py-2 text-xs font-extrabold inline-flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Try Again</span>
                </button>

                <a
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(
                    `Hi! I was trying to buy the ${activePkg.name} (₹${activePkg.priceInr}) on VidyaLila with phone ${phone}, but the transaction didn't go through (${failureInfo.reason}). Could you please help me activate my pass?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d-emerald w-full sm:w-auto px-4 py-2 text-xs font-extrabold inline-flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>WhatsApp Founder for Instant Pass</span>
                </a>
              </div>
            </div>
          )}

          {/* 3 Package Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PASS_PACKAGES.map((pkg) => {
              const isSelected = selectedPkg === pkg.id;
              return (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => {
                    setSelectedPkg(pkg.id);
                    setFailureInfo(null);
                  }}
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

          {isAuthenticated ? (
            <div className="space-y-4 pt-1">
              {/* WhatsApp / Phone Number Input (Asked at First Purchase) */}
              <div className="rounded-2xl border-2 border-indigo-200 bg-indigo-50/50 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                    <Phone className="h-4 w-4 text-indigo-600" />
                    <span>WhatsApp / Mobile Number</span>
                    <span className="text-rose-500">*</span>
                  </label>
                  {profile.phone && profile.phone.length >= 10 && (
                    <span className="rounded-md bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 text-[10px] font-extrabold flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" />
                      Saved on Account
                    </span>
                  )}
                </div>

                <div className="relative flex items-center">
                  <div className="absolute left-3 flex items-center gap-1 text-xs font-extrabold text-slate-600 border-r border-slate-300 pr-2 pointer-events-none select-none">
                    <span>🇮🇳</span>
                    <span>+91</span>
                  </div>
                  <input
                    type="tel"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => {
                      const clean = e.target.value.replace(/[^0-9]/g, "");
                      setPhone(clean);
                      if (phoneError) setPhoneError("");
                    }}
                    placeholder="Enter 10-digit mobile (e.g. 9876543210)"
                    className={`w-full rounded-xl border-2 bg-white pl-20 pr-3.5 py-2.5 text-sm font-bold text-slate-900 focus:outline-none transition ${
                      phoneError
                        ? "border-rose-500 focus:border-rose-600 bg-rose-50/30"
                        : "border-slate-300 focus:border-indigo-500"
                    }`}
                  />
                </div>

                {phoneError ? (
                  <p className="text-[11px] font-bold text-rose-600 flex items-center gap-1">
                    <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
                    <span>{phoneError}</span>
                  </p>
                ) : (
                  <p className="text-[11px] font-medium text-slate-500 leading-snug">
                    🔒 Required for instant pass delivery &amp; official invoice. If payment ever fails, our founder can contact you immediately so your pass is not delayed.
                  </p>
                )}
              </div>

              {/* Pay Button */}
              <button
                type="button"
                onClick={handlePay}
                disabled={isProcessing}
                className="w-full btn-3d-emerald py-3.5 text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
              >
                {isProcessing ? (
                  <span>Processing Payment with Razorpay...</span>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5" />
                    <span>
                      Pay ₹{activePkg.priceInr} &amp; Activate {activePkg.name}
                    </span>
                  </>
                )}
              </button>

              {/* Founder simulation & Demo note */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-1 text-[11px] font-bold text-slate-500">
                <span className="flex items-center gap-1">
                  <Lock className="h-3.5 w-3.5 text-slate-400" />
                  Instant Activation &bull; 100% Encrypted Payment
                </span>

                <button
                  type="button"
                  onClick={handleSimulateFailure}
                  disabled={isProcessing}
                  className="text-amber-700 hover:text-amber-900 underline font-extrabold inline-flex items-center gap-1 hover:scale-102 transition"
                >
                  <Bug className="h-3.5 w-3.5" />
                  <span>Test Failure Notification (Simulate Drop)</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border-2 border-indigo-200 bg-indigo-50/70 p-5 text-center space-y-3">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white">
                <Lock className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-extrabold text-slate-900">
                  Sign In Required to Buy a Quiz Pass
                </h4>
                <p className="text-xs font-semibold text-slate-600">
                  Quiz passes are linked to your student account. Please sign in or create a free account first to purchase a pass.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    signInWithGoogle("/contests");
                  }}
                  className="btn-3d-white px-4 py-2.5 text-xs font-extrabold inline-flex items-center gap-2"
                >
                  <span>Continue with Google</span>
                </button>
                <Link
                  href="/auth?redirect=/contests"
                  onClick={onClose}
                  className="btn-3d-indigo px-5 py-2.5 text-xs font-extrabold inline-flex items-center gap-1.5"
                >
                  <LogIn className="h-3.5 w-3.5" />
                  <span>Sign In / Sign Up First</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
