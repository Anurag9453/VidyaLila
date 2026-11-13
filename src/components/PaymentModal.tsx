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
  Globe,
} from "lucide-react";

export type PassPackageType =
  | "ONE_DAY"
  | "WEEKLY"
  | "MONTHLY"
  | "COMPREHENSIVE";

export type SupportedCurrency = "INR" | "USD" | "GBP" | "EUR" | "AED" | "SGD";

export const GLOBAL_CURRENCIES: {
  code: SupportedCurrency;
  symbol: string;
  flag: string;
  label: string;
  methodsLabel: string;
}[] = [
  {
    code: "INR",
    symbol: "₹",
    flag: "🇮🇳",
    label: "INR (₹)",
    methodsLabel: "UPI (GPay, PhonePe, Paytm), Cards & NetBanking",
  },
  {
    code: "USD",
    symbol: "$",
    flag: "🌍",
    label: "USD ($)",
    methodsLabel: "International Visa, Mastercard, Amex, Apple Pay & PayPal",
  },
  {
    code: "AED",
    symbol: "AED ",
    flag: "🇦🇪",
    label: "AED (UAE)",
    methodsLabel: "UAE & Gulf Cards (Visa/Mastercard), Apple Pay & PayPal",
  },
  {
    code: "GBP",
    symbol: "£",
    flag: "🇬🇧",
    label: "GBP (£)",
    methodsLabel: "UK Cards (Visa/Mastercard), Apple Pay, Google Pay & PayPal",
  },
  {
    code: "EUR",
    symbol: "€",
    flag: "🇪🇺",
    label: "EUR (€)",
    methodsLabel: "European Cards (Visa/Mastercard), Apple Pay & PayPal",
  },
  {
    code: "SGD",
    symbol: "S$",
    flag: "🇸🇬",
    label: "SGD (S$)",
    methodsLabel: "Singapore & SE Asia Cards, Apple Pay, Google Pay & PayPal",
  },
];

const COUNTRY_DIAL_CODES = [
  { code: "+91", label: "🇮🇳 +91 (India)" },
  { code: "+1", label: "🇺🇸/🇨🇦 +1 (US/CA)" },
  { code: "+971", label: "🇦🇪 +971 (UAE)" },
  { code: "+44", label: "🇬🇧 +44 (UK)" },
  { code: "+65", label: "🇸🇬 +65 (SG)" },
  { code: "+61", label: "🇦🇺 +61 (AU)" },
  { code: "+49", label: "🇪🇺 +49 (EU)" },
];

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: PassPackageType;
  contestTitle?: string;
  chapterTitle?: string;
  targetClassGrade?: 9 | 10;
  onSuccessPackage: (pkg: PassPackageType, chosenClassGrade?: 9 | 10) => void;
}

interface RazorpaySuccessResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface RazorpayFailureResponse {
  error?: {
    code?: string;
    description?: string;
    source?: string;
    step?: string;
    reason?: string;
    metadata?: {
      order_id?: string;
      payment_id?: string;
    };
  };
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill: {
    name: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  theme?: {
    color: string;
  };
  retry?: {
    enabled: boolean;
    max_count: number;
  };
  handler: (response: RazorpaySuccessResponse) => Promise<void>;
  modal: {
    ondismiss: () => void;
    confirm_close?: boolean;
  };
}

interface RazorpayInstance {
  open: () => void;
  on: (
    event: "payment.failed",
    handler: (response: RazorpayFailureResponse) => void
  ) => void;
}

function ensureRazorpayCheckoutScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(false);
      return;
    }
    if ((window as unknown as { Razorpay?: unknown }).Razorpay) {
      resolve(true);
      return;
    }
    const existingScript = document.querySelector(
      'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
    );
    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(true));
      existingScript.addEventListener("error", () => resolve(false));
      setTimeout(() => {
        resolve(
          Boolean((window as unknown as { Razorpay?: unknown }).Razorpay)
        );
      }, 1500);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export const PASS_PACKAGES: {
  id: PassPackageType;
  symbol: string;
  badge: string;
  name: string;
  priceInr: number;
  prices: Record<SupportedCurrency, number>;
  credits: number;
  chaptersEquivalent: number;
  isFullClassUnlock?: boolean;
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
    symbol: "🪙",
    badge: "🪙 400 CREDITS",
    name: "Starter Pack",
    priceInr: 199,
    prices: {
      INR: 199,
      USD: 4.99,
      GBP: 3.99,
      EUR: 4.49,
      AED: 18,
      SGD: 6.99,
    },
    credits: 400,
    chaptersEquivalent: 4,
    durationLabel: "/ 400 credits",
    dailyCount: 20,
    competitionCount: 4,
    summary: "400 Vidya Credits (Unlocks 4 Full Chapters or 20 Daily Tests)",
    perks: [
      "400 Instant Vidya Credits added to your wallet",
      "Unlock any 4 Chapters permanently (100 Credits / chapter)",
      "Or enter up to 20 Daily Tests (20 Credits) / 8 Weekly Tests (50 Credits)",
      "Credits never expire — spend on any subject or test",
    ],
    accentBorder: "border-amber-500",
    accentBg: "bg-amber-50",
    badgeBg: "bg-amber-200 text-amber-900",
    symbolBoxBg: "bg-amber-400 border-amber-600 text-slate-950",
  },
  {
    id: "WEEKLY",
    symbol: "📘",
    badge: "📘 1,200 CREDITS • 1 SUBJECT",
    name: "Subject Pack",
    priceInr: 499,
    prices: {
      INR: 499,
      USD: 9.99,
      GBP: 7.99,
      EUR: 8.99,
      AED: 35,
      SGD: 12.99,
    },
    credits: 1200,
    chaptersEquivalent: 12,
    durationLabel: "/ 1,200 credits",
    dailyCount: 60,
    competitionCount: 12,
    summary:
      "1,200 Vidya Credits (Unlocks 12 Chapters / 1 Full Subject + Live Tests)",
    perks: [
      "1,200 Vidya Credits (Enough to unlock an entire Subject like Physics or Chemistry!)",
      "Unlock 12 Full PCM Chapters permanently (100 Credits / chapter)",
      "Use remaining credits for Daily (20), Weekly (50) & Monthly (100) Exams",
      "Instant credit refunds back to wallet if a test ever has an issue",
    ],
    accentBorder: "border-sky-500",
    accentBg: "bg-sky-50",
    badgeBg: "bg-sky-200 text-sky-900",
    symbolBoxBg: "bg-sky-600 border-sky-800 text-white",
  },
  {
    id: "MONTHLY",
    symbol: "💎",
    badge: "💎 2,600 CREDITS • 26 CHAPTERS",
    name: "Scholar Pack",
    priceInr: 999,
    prices: {
      INR: 999,
      USD: 19.99,
      GBP: 15.99,
      EUR: 17.99,
      AED: 69,
      SGD: 25.99,
    },
    credits: 2600,
    chaptersEquivalent: 26,
    durationLabel: "/ 2,600 credits",
    dailyCount: 130,
    competitionCount: 26,
    summary:
      "2,600 Vidya Credits (Unlocks 26 Chapters Across PCM + Live Tests)",
    perks: [
      "2,600 Vidya Credits added directly to your wallet",
      "Unlock 26 Full Chapters across Maths, Physics & Chemistry",
      "Or mix & match Chapters (100 Cr) + Live Exams (20–100 Cr)",
      "Unlocks the 'Champion Credit Scholar 👑' Profile Badge",
    ],
    accentBorder: "border-indigo-500",
    accentBg: "bg-indigo-50",
    badgeBg: "bg-indigo-200 text-indigo-900",
    symbolBoxBg: "bg-indigo-600 border-indigo-800 text-white",
  },
  {
    id: "COMPREHENSIVE",
    symbol: "👑",
    badge: "👑 ALL ~45 CLASS CHAPTERS + 1,000 CR",
    name: "Comprehensive Class Pack",
    priceInr: 1999,
    prices: {
      INR: 1999,
      USD: 34.99,
      GBP: 27.99,
      EUR: 31.99,
      AED: 125,
      SGD: 45.99,
    },
    credits: 1000,
    chaptersEquivalent: 45,
    isFullClassUnlock: true,
    durationLabel: "/ Full Class + 1,000 Cr",
    dailyCount: 50,
    competitionCount: 20,
    summary:
      "Instantly Unlocks ALL ~45 PCM Chapters of Your Class + 1,000 Bonus Test Credits",
    perks: [
      "100% Instant Unlock of ALL ~45 Maths, Physics & Chemistry Chapters for your Class!",
      "PLUS +1,000 Bonus Vidya Credits in your wallet for Daily, Weekly & Monthly Exams",
      "Total Value: 5,500 Credits (Best Full-Year Value Worldwide!)",
      "Includes all future chapters added to your selected Class automatically",
    ],
    accentBorder: "border-emerald-500",
    accentBg: "bg-emerald-50",
    badgeBg: "bg-emerald-200 text-emerald-950",
    symbolBoxBg: "bg-emerald-500 border-emerald-700 text-white",
  },
];

export function formatGlobalPrice(
  pkg: (typeof PASS_PACKAGES)[number],
  currency: SupportedCurrency
): string {
  const meta =
    GLOBAL_CURRENCIES.find((c) => c.code === currency) || GLOBAL_CURRENCIES[0];
  const val = pkg.prices[currency] ?? pkg.priceInr;
  if (currency === "INR" || currency === "AED") {
    return `${meta.symbol}${val.toLocaleString()}`;
  }
  return `${meta.symbol}${val.toFixed(2)}`;
}

export function PaymentModal({
  isOpen,
  onClose,
  defaultPackage = "COMPREHENSIVE",
  contestTitle,
  chapterTitle,
  targetClassGrade,
  onSuccessPackage,
}: PaymentModalProps) {
  const {
    isAuthenticated,
    signInWithGoogle,
    profile,
    updateProfilePhone,
    getAlreadyUnlockedPaidChaptersCount,
  } = useApp();
  const [selectedPkg, setSelectedPkg] =
    useState<PassPackageType>(defaultPackage);
  const [currency, setCurrency] = useState<SupportedCurrency>("INR");
  const [dialCode, setDialCode] = useState("+91");
  const [selectedClassForComp, setSelectedClassForComp] = useState<9 | 10>(
    targetClassGrade || (profile.classGrade === 10 ? 10 : 9)
  );
  const [phone, setPhone] = useState(profile.phone || "");
  const [phoneError, setPhoneError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [failureInfo, setFailureInfo] = useState<{
    reason: string;
    code?: string;
    orderId?: string;
  } | null>(null);

  // Auto-detect visitor timezone so international students automatically see their currency
  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      if (tz === "Asia/Kolkata" || tz === "Asia/Calcutta") {
        setCurrency("INR");
        setDialCode("+91");
      } else if (
        tz.includes("Dubai") ||
        tz.includes("Muscat") ||
        tz.includes("Riyadh") ||
        tz.includes("Qatar")
      ) {
        setCurrency("AED");
        setDialCode("+971");
      } else if (tz === "Europe/London") {
        setCurrency("GBP");
        setDialCode("+44");
      } else if (tz.startsWith("Europe/")) {
        setCurrency("EUR");
        setDialCode("+49");
      } else if (tz.includes("Singapore")) {
        setCurrency("SGD");
        setDialCode("+65");
      } else if (tz.startsWith("America/") || tz.startsWith("Australia/")) {
        setCurrency("USD");
        setDialCode("+1");
      }
    } catch {
      // default INR
    }
  }, []);

  useEffect(() => {
    setSelectedPkg(defaultPackage);
  }, [defaultPackage]);

  useEffect(() => {
    if (targetClassGrade === 9 || targetClassGrade === 10) {
      setSelectedClassForComp(targetClassGrade);
    } else if (profile.classGrade === 9 || profile.classGrade === 10) {
      setSelectedClassForComp(profile.classGrade);
    }
  }, [targetClassGrade, profile.classGrade]);

  useEffect(() => {
    setPhone(profile.phone || "");
    setPhoneError("");
    setFailureInfo(null);
  }, [isAuthenticated, profile.id, profile.email, profile.phone]);

  useEffect(() => {
    if (isOpen) {
      ensureRazorpayCheckoutScript();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const activePkg =
    PASS_PACKAGES.find((p) => p.id === selectedPkg) || PASS_PACKAGES[1];
  const activeCurrencyMeta =
    GLOBAL_CURRENCIES.find((c) => c.code === currency) || GLOBAL_CURRENCIES[0];
  const formattedActivePrice = formatGlobalPrice(activePkg, currency);
  const alreadyUnlockedCount =
    getAlreadyUnlockedPaidChaptersCount(selectedClassForComp);
  const zeroWasteRefundCredits = alreadyUnlockedCount * 100;

  // Check if user already has verified contact details on profile
  const hasSavedContact = Boolean(
    (profile.phone && profile.phone.replace(/[^0-9]/g, "").length >= 7) ||
      (currency !== "INR" && profile.email)
  );

  const validatePhone = (input: string): string | null => {
    const clean = input.replace(/[^0-9]/g, "");
    // If signed in with an email and using an international currency, phone is optional
    if (!clean && isAuthenticated && profile.email && currency !== "INR") {
      return null;
    }
    if (!clean && hasSavedContact) {
      return null;
    }
    if (!clean) {
      return "Please enter a contact number (7–15 digits) for payment receipt & support.";
    }
    if (clean.length < 7 || clean.length > 15) {
      return "Please enter a valid phone number (7 to 15 digits).";
    }
    return null;
  };

  const logFailureToBackend = async (
    reason: string,
    code: string,
    orderId?: string
  ) => {
    const cleanPhone = (phone || profile.phone || "").replace(/[^0-9+]/g, "");
    try {
      await fetch("/api/payments/log-failure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: profile.id,
          orderId: orderId || `ord_fail_${Date.now()}`,
          packagePlan: selectedPkg,
          amountInr: activePkg.priceInr,
          phone: cleanPhone ? `${dialCode}${cleanPhone.replace(/^\+\d+/, "")}` : "",
          userName: profile.name,
          userUsername: profile.username,
          userEmail: profile.email,
          failureReason: `[${currency}] ${reason}`,
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

    const rawDigits = (phone || profile.phone || "").replace(/[^0-9]/g, "");
    const fullPhone = rawDigits ? `${dialCode}${rawDigits}` : "";
    if (rawDigits.length >= 7) {
      updateProfilePhone(rawDigits);
    }

    setIsProcessing(true);
    setFailureInfo(null);

    let createdOrderId = "";

    try {
      // 1. Create global multi-currency order on backend
      const orderRes = await fetch("/api/payments/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: profile.id,
          packagePlan: selectedPkg,
          currency,
          phone: fullPhone || rawDigits,
          userName: profile.name,
          userUsername: profile.username,
          userEmail: profile.email,
          contestTitle: contestTitle || "",
        }),
      });

      const orderData = await orderRes.json();

      if (!orderRes.ok || !orderData.ok) {
        setIsProcessing(false);
        await logFailureToBackend(
          orderData.error ||
            "Could not initialize global checkout order. Please check your API keys.",
          orderData.code || "ORDER_CREATION_ERROR"
        );
        return;
      }

      createdOrderId = orderData.orderId;
      const activeRzpKey: string | null =
        orderData.razorpayKeyId ||
        process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ||
        null;

      // 2. If backend confirmed RAZORPAY mode (real rzp_test_... or rzp_live_... key configured)
      if (orderData.mode === "RAZORPAY" && activeRzpKey) {
        const scriptReady = await ensureRazorpayCheckoutScript();
        const RazorpayConstructor = (
          window as unknown as {
            Razorpay?: new (opts: RazorpayOptions) => RazorpayInstance;
          }
        ).Razorpay;

        if (!scriptReady || !RazorpayConstructor) {
          setIsProcessing(false);
          await logFailureToBackend(
            "Global Checkout SDK could not be loaded. Please check your internet connection or ad-blocker.",
            "SDK_LOAD_ERROR",
            createdOrderId
          );
          return;
        }

        let failureAlreadyLogged = false;

        const rzp = new RazorpayConstructor({
          key: activeRzpKey,
          amount: orderData.amountPaise,
          currency: orderData.currency || currency,
          name: "VidyaLila Global",
          description: `${activePkg.name} (${formattedActivePrice}) • ${activePkg.summary}`,
          order_id: createdOrderId,
          prefill: {
            name: profile.name,
            email: profile.email || undefined,
            ...(fullPhone ? { contact: fullPhone } : {}),
          },
          notes: {
            userId: profile.id || "",
            packagePlan: selectedPkg,
            currency,
            phone: fullPhone,
            userName: profile.name || "",
          },
          theme: {
            color: "#4f46e5",
          },
          retry: {
            enabled: true,
            max_count: 3,
          },
          handler: async (response: RazorpaySuccessResponse) => {
            try {
              const verifyRes = await fetch("/api/payments/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  userId: profile.id,
                  packagePlan: selectedPkg,
                  razorpayOrderId:
                    response.razorpay_order_id || createdOrderId,
                  razorpayPaymentId: response.razorpay_payment_id,
                  razorpaySignature: response.razorpay_signature,
                  phone: fullPhone || rawDigits,
                  userName: profile.name,
                  userEmail: profile.email,
                }),
              });

              const verifyData = await verifyRes.json();

              if (verifyRes.ok && verifyData.ok) {
                setIsProcessing(false);
                onSuccessPackage(selectedPkg, selectedClassForComp);
                onClose();
              } else {
                setIsProcessing(false);
                await logFailureToBackend(
                  verifyData.error ||
                    "Payment signature verification failed on server.",
                  "SIGNATURE_VERIFICATION_FAILED",
                  createdOrderId
                );
              }
            } catch {
              setIsProcessing(false);
              await logFailureToBackend(
                "Network error while verifying payment receipt.",
                "VERIFY_NETWORK_ERROR",
                createdOrderId
              );
            }
          },
          modal: {
            confirm_close: true,
            ondismiss: () => {
              setIsProcessing(false);
              if (!failureAlreadyLogged) {
                logFailureToBackend(
                  "Student closed the checkout popup before completing payment.",
                  "CHECKOUT_DISMISSED",
                  createdOrderId
                );
              }
            },
          },
        });

        rzp.on("payment.failed", (resp: RazorpayFailureResponse) => {
          failureAlreadyLogged = true;
          setIsProcessing(false);
          const desc =
            resp.error?.description ||
            resp.error?.reason ||
            "International card, bank, or UPI transaction declined.";
          const code = resp.error?.code || "PAYMENT_FAILED";
          logFailureToBackend(desc, code, createdOrderId);
        });

        rzp.open();
        return;
      }

      // 3. Fallback Demo Mode ONLY when Razorpay keys are still placeholder values
      await fetch("/api/payments/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: profile.id,
          packagePlan: selectedPkg,
          razorpayOrderId: createdOrderId,
          razorpayPaymentId: `pay_vl_sim_${Date.now()}`,
          phone: fullPhone || rawDigits,
          userName: profile.name,
          userEmail: profile.email,
        }),
      });

      setIsProcessing(false);
      onSuccessPackage(selectedPkg, selectedClassForComp);
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
      `Simulated ${currency} gateway timeout & card/UPI error (Test Lead)`,
      "GATEWAY_TIMEOUT",
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
          <div className="flex flex-wrap items-center justify-between gap-2 pr-8">
            <div className="flex flex-wrap items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-300">
              <Globe className="h-4 w-4" />
              <span>Vidya Credits Global Checkout • 130+ Countries</span>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 border border-white/25 px-3 py-1 text-xs font-extrabold text-white">
              <span>🪙</span>
              <span>Balance: {(profile.credits ?? 300).toLocaleString()} Credits</span>
            </span>
          </div>
          <h3 className="mt-1.5 text-xl sm:text-2xl font-extrabold pr-6">
            Top Up Your Vidya Credits 🪙
          </h3>
          <p className="mt-1 text-xs font-medium text-indigo-100">
            {chapterTitle
              ? `Unlocking Chapter "${chapterTitle}" (100 Credits) — Pay in ${currency} via ${activeCurrencyMeta.methodsLabel}!`
              : contestTitle
              ? `Entering "${contestTitle}" — Top up your Vidya Credits to unlock live board exams & study chapters!`
              : `Pay seamlessly from anywhere in the world (${activeCurrencyMeta.methodsLabel}).`}
          </p>

          {/* Global Multi-Currency Switcher Bar */}
          <div className="mt-3.5 pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-2">
            <span className="text-[11px] font-bold text-indigo-100 flex items-center gap-1">
              <Globe className="h-3.5 w-3.5 text-amber-300" />
              <span>Select Your Currency:</span>
            </span>
            <div className="flex flex-wrap items-center gap-1">
              {GLOBAL_CURRENCIES.map((c) => {
                const isCurr = currency === c.code;
                return (
                  <button
                    key={c.code}
                    type="button"
                    onClick={() => {
                      setCurrency(c.code);
                      if (c.code === "INR") setDialCode("+91");
                      else if (c.code === "USD") setDialCode("+1");
                      else if (c.code === "AED") setDialCode("+971");
                      else if (c.code === "GBP") setDialCode("+44");
                      else if (c.code === "EUR") setDialCode("+49");
                      else if (c.code === "SGD") setDialCode("+65");
                    }}
                    className={`rounded-lg px-2.5 py-1 text-[11px] font-extrabold transition cursor-pointer ${
                      isCurr
                        ? "bg-amber-400 text-slate-950 shadow-xs"
                        : "bg-white/15 text-white hover:bg-white/25"
                    }`}
                  >
                    {c.flag} {c.code}
                  </button>
                );
              })}
            </div>
          </div>
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
                🛡️ <strong>Your money is completely safe:</strong> If any amount
                was deducted by your bank, card, or UPI app, it is automatically
                reversed within 3–5 business days. Our team has also been
                notified to assist you.
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setFailureInfo(null)}
                  className="btn-3d-indigo w-full sm:w-auto px-4 py-2 text-xs font-extrabold inline-flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Retry Checkout</span>
                </button>

                <Link
                  href={`/support?category=PAYMENT_ISSUE&ref=${encodeURIComponent(
                    failureInfo.orderId || ""
                  )}`}
                  onClick={onClose}
                  className="btn-3d-emerald w-full sm:w-auto px-4 py-2 text-xs font-extrabold inline-flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>Raise Official Payment Support Case</span>
                </Link>
              </div>
            </div>
          )}

          {/* 4 Package Cards (2x2 Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                  className={`rounded-2xl border-2 border-b-4 p-3.5 text-left transition flex flex-col justify-between cursor-pointer ${
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
                      {formatGlobalPrice(pkg, currency)}
                      <span className="text-xs font-bold text-slate-500">
                        {" "}
                        {pkg.durationLabel}
                      </span>
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-200/80 space-y-1 text-[11px] font-bold text-slate-700">
                    {pkg.isFullClassUnlock ? (
                      <>
                        <p className="flex items-center gap-1 text-emerald-900 font-extrabold">
                          <span>👑</span>
                          <span>
                            All ~45 Class {selectedClassForComp} PCM Chapters Unlocked!
                          </span>
                        </p>
                        <p className="flex items-center gap-1 text-indigo-900 font-extrabold">
                          <span>🪙</span>
                          <span>
                            + {(1000 + zeroWasteRefundCredits).toLocaleString()} Wallet Credits for Live Tests
                          </span>
                        </p>
                        {zeroWasteRefundCredits > 0 && (
                          <p className="flex items-center gap-1 text-amber-900 bg-amber-200/80 rounded-lg px-2 py-0.5 text-[10px] font-black mt-1">
                            <span>🎁</span>
                            <span>
                              +{zeroWasteRefundCredits} Cr Refunded ({alreadyUnlockedCount} Unlocked Ch)
                            </span>
                          </p>
                        )}
                      </>
                    ) : (
                      <>
                        <p className="flex items-center gap-1 text-indigo-950 font-extrabold">
                          <span>🪙</span>
                          <span>{pkg.credits.toLocaleString()} Vidya Credits</span>
                        </p>
                        <p className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 text-indigo-600 shrink-0" />
                          <span>
                            Unlocks {pkg.chaptersEquivalent} Chapters (100 Cr each)
                          </span>
                        </p>
                        <p className="flex items-center gap-1">
                          <Trophy className="h-3 w-3 text-amber-600 shrink-0" />
                          <span>
                            Or up to {pkg.dailyCount} Live Tests
                          </span>
                        </p>
                      </>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Class Selector when COMPREHENSIVE is selected */}
          {selectedPkg === "COMPREHENSIVE" && (
            <div className="rounded-2xl border-2 border-emerald-400 bg-emerald-50/80 p-4 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-extrabold text-emerald-950 uppercase tracking-wider">
                    👑 Select Class for Instant Full-Syllabus Unlock ({formattedActivePrice}):
                  </p>
                  <p className="text-xs font-semibold text-emerald-800">
                    All Maths, Physics &amp; Chemistry chapters of this Class will be unlocked immediately + 1,000 Bonus Test Credits!
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {([9, 10] as const).map((grade) => (
                    <button
                      key={grade}
                      type="button"
                      onClick={() => setSelectedClassForComp(grade)}
                      className={`rounded-xl border-2 px-4 py-2 text-xs font-extrabold transition cursor-pointer ${
                        selectedClassForComp === grade
                          ? "border-emerald-700 bg-emerald-600 text-white shadow-sm"
                          : "border-emerald-300 bg-white text-emerald-900 hover:bg-emerald-100"
                      }`}
                    >
                      Class {grade} Full PCM
                    </button>
                  ))}
                </div>
              </div>

              {zeroWasteRefundCredits > 0 && (
                <div className="rounded-xl bg-amber-100/90 border border-amber-300 p-3 text-xs font-extrabold text-amber-950 flex items-start gap-2">
                  <span className="text-base leading-none">🎁</span>
                  <div>
                    <strong>Zero-Waste Upgrade Bonus Applied:</strong> You have already unlocked{" "}
                    <strong>{alreadyUnlockedCount} paid chapter(s)</strong> in Class {selectedClassForComp}. We will automatically refund{" "}
                    <strong>+{zeroWasteRefundCredits.toLocaleString()} Vidya Credits</strong> back to your wallet on top of the 1,000 base credits (Total:{" "}
                    <strong>🪙 {(1000 + zeroWasteRefundCredits).toLocaleString()} Test Credits</strong>)!
                  </div>
                </div>
              )}
            </div>
          )}

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
                {formattedActivePrice}
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

            <div className="rounded-xl bg-amber-50 border border-amber-200 p-2.5 text-[11px] font-bold text-amber-900 leading-relaxed space-y-1">
              <p>
                🌍 <strong>Accepted Worldwide ({activeCurrencyMeta.label}):</strong>{" "}
                Pay via <strong>{activeCurrencyMeta.methodsLabel}</strong>. First 2 chapters of every subject are 100% Free; unlocking any additional chapter permanently costs <strong>100 Credits</strong>.
              </p>
              <p className="text-amber-800">
                🛡️ <strong>100% Credit &amp; Source Refund Guarantee:</strong>{" "}
                In case of any technical issue, <strong>100% of credits are restored to your wallet</strong> (or refunded to your card/bank within 5–7 business days for duplicate/failed debits).
              </p>
            </div>
          </div>

          {isAuthenticated ? (
            <div className="space-y-4 pt-1">
              {/* If user already has verified contact on profile, do not keep asking for it */}
              {hasSavedContact ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 px-4 py-3 flex items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2 font-bold text-slate-800">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>
                      Account Verified: <strong>{profile.name}</strong> (
                      {profile.email || profile.username})
                      {profile.phone ? ` • 📞 ${profile.phone}` : ""}
                    </span>
                  </div>
                </div>
              ) : (
                /* Global Phone Input with Country Code Selector (Asked Only Once if Not on Profile) */
                <div className="rounded-2xl border-2 border-indigo-200 bg-indigo-50/50 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                      <Phone className="h-4 w-4 text-indigo-600" />
                      <span>
                        Contact / WhatsApp Number (International &amp; India Supported)
                      </span>
                    </label>
                  </div>

                  <div className="flex items-center gap-2">
                    <select
                      value={dialCode}
                      onChange={(e) => setDialCode(e.target.value)}
                      className="rounded-xl border-2 border-slate-300 bg-white px-2.5 py-2.5 text-xs font-extrabold text-slate-800 focus:outline-none focus:border-indigo-500"
                    >
                      {COUNTRY_DIAL_CODES.map((d) => (
                        <option key={d.code} value={d.code}>
                          {d.label}
                        </option>
                      ))}
                    </select>

                    <input
                      type="tel"
                      maxLength={15}
                      value={phone}
                      onChange={(e) => {
                        const clean = e.target.value.replace(/[^0-9]/g, "");
                        setPhone(clean);
                        if (phoneError) setPhoneError("");
                      }}
                      placeholder="Mobile number (e.g. 9876543210)"
                      className={`flex-1 rounded-xl border-2 bg-white px-3.5 py-2.5 text-sm font-bold text-slate-900 focus:outline-none transition ${
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
                      🔒 Saved to your profile once so we never have to ask again.
                    </p>
                  )}
                </div>
              )}

              {/* Pay Button */}
              <button
                type="button"
                onClick={handlePay}
                disabled={isProcessing}
                className="w-full btn-3d-emerald py-3.5 text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
              >
                {isProcessing ? (
                  <span>Opening Global Secure Gateway ({currency})...</span>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5" />
                    <span>
                      Pay {formattedActivePrice} ({currency}) &amp; Activate{" "}
                      {activePkg.name}
                    </span>
                  </>
                )}
              </button>

              {/* Security Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-1 text-[11px] font-bold text-slate-500">
                <span className="flex items-center gap-1">
                  <Lock className="h-3.5 w-3.5 text-slate-400" />
                  Secured Globally ({activeCurrencyMeta.methodsLabel})
                </span>

                {profile.role === "admin" && (
                  <button
                    type="button"
                    onClick={handleSimulateFailure}
                    disabled={isProcessing}
                    className="text-amber-700 hover:text-amber-900 underline font-extrabold inline-flex items-center gap-1 transition"
                  >
                    <Bug className="h-3.5 w-3.5" />
                    <span>Test Payment Alert (Admin Only)</span>
                  </button>
                )}
              </div>

              <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-bold text-slate-600">
                <span>Money deducted or chapter didn&apos;t unlock?</span>
                <Link
                  href="/support?category=PAYMENT_ISSUE"
                  onClick={onClose}
                  className="text-indigo-600 hover:text-indigo-800 underline font-extrabold"
                >
                  Raise a Support / Grievance Case →
                </Link>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border-2 border-indigo-200 bg-indigo-50/70 p-5 text-center space-y-3">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white">
                <Lock className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-extrabold text-slate-900">
                  Sign In Required to Top Up Vidya Credits
                </h4>
                <p className="text-xs font-semibold text-slate-600">
                  Your Vidya Credits and unlocked chapters are permanently linked to your scholar account across all devices worldwide.
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
