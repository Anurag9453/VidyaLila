export type CouponPlanScope = "ALL" | "COMPREHENSIVE_AND_MONTHLY" | "COMPREHENSIVE_ONLY";

export interface CouponDefinition {
  code: string;
  title: string;
  description: string;
  discountType: "PERCENT" | "FLAT_INR";
  discountValue: number; // e.g. 20 for 20%, or 200 for ₹200
  scope: CouponPlanScope;
  isWelcomeFeatured?: boolean;
  active: boolean;
  createdAt?: string;
}

export const DEFAULT_COUPONS: CouponDefinition[] = [
  {
    code: "WELCOME20",
    title: "20% OFF Welcome Scholar Coupon",
    description: "Instant 20% discount on any Vidya Credit Pack or Full-Class Comprehensive Pack",
    discountType: "PERCENT",
    discountValue: 20,
    scope: "ALL",
    isWelcomeFeatured: true,
    active: true,
  },
  {
    code: "VIDYA10",
    title: "10% OFF Student Coupon",
    description: "Flat 10% discount on all credit packages worldwide",
    discountType: "PERCENT",
    discountValue: 10,
    scope: "ALL",
    active: true,
  },
  {
    code: "FIRST25",
    title: "25% OFF First-Time Enrolment",
    description: "Special 25% welcome discount for new students",
    discountType: "PERCENT",
    discountValue: 25,
    scope: "ALL",
    active: true,
  },
  {
    code: "BOARD30",
    title: "30% OFF Board Exam Special",
    description: "30% discount on Scholar Pack (2,600 Cr) & Comprehensive Full-Class Pack",
    discountType: "PERCENT",
    discountValue: 30,
    scope: "COMPREHENSIVE_AND_MONTHLY",
    active: true,
  },
  {
    code: "FLAT200",
    title: "Flat ₹200 OFF Pack Coupon",
    description: "Flat ₹200 off (or 15% off internationally) on Scholar & Comprehensive Packs",
    discountType: "FLAT_INR",
    discountValue: 200,
    scope: "COMPREHENSIVE_AND_MONTHLY",
    active: true,
  },
  {
    code: "SCHOLAR50",
    title: "50% OFF Special Scholarship Grant",
    description: "50% scholarship discount code issued by VidyaLila Academic Team",
    discountType: "PERCENT",
    discountValue: 50,
    scope: "ALL",
    active: true,
  },
];

export interface CouponCalculationResult {
  valid: boolean;
  error?: string;
  coupon?: CouponDefinition;
  originalAmount: number;
  discountAmount: number;
  finalAmount: number;
  originalSubunits: number;
  finalSubunits: number;
  discountPercentEffective: number;
}

export function validateAndApplyCoupon(params: {
  rawCode: string;
  packagePlan: "ONE_DAY" | "WEEKLY" | "MONTHLY" | "COMPREHENSIVE";
  currency: "INR" | "USD" | "GBP" | "EUR" | "AED" | "SGD";
  baseDisplayPrice: number;
  customCoupons?: CouponDefinition[];
}): CouponCalculationResult {
  const { rawCode, packagePlan, currency, baseDisplayPrice, customCoupons = [] } =
    params;

  const baseSubunits = Math.round(baseDisplayPrice * 100);
  const cleanCode = (rawCode || "").trim().toUpperCase().replace(/\s+/g, "");

  if (!cleanCode) {
    return {
      valid: false,
      error: "Please enter a coupon code.",
      originalAmount: baseDisplayPrice,
      discountAmount: 0,
      finalAmount: baseDisplayPrice,
      originalSubunits: baseSubunits,
      finalSubunits: baseSubunits,
      discountPercentEffective: 0,
    };
  }

  // Merge custom admin coupons with default coupons (custom overrides by code)
  const map = new Map<string, CouponDefinition>();
  for (const c of DEFAULT_COUPONS) {
    map.set(c.code.toUpperCase(), c);
  }
  for (const c of customCoupons) {
    if (c?.code) {
      map.set(c.code.toUpperCase(), c);
    }
  }

  const found = map.get(cleanCode);
  if (!found || !found.active) {
    return {
      valid: false,
      error: `Invalid or expired coupon code "${cleanCode}". Try WELCOME20 for 20% OFF!`,
      originalAmount: baseDisplayPrice,
      discountAmount: 0,
      finalAmount: baseDisplayPrice,
      originalSubunits: baseSubunits,
      finalSubunits: baseSubunits,
      discountPercentEffective: 0,
    };
  }

  // Check plan scope eligibility
  if (
    found.scope === "COMPREHENSIVE_ONLY" &&
    packagePlan !== "COMPREHENSIVE"
  ) {
    return {
      valid: false,
      error: `Coupon "${found.code}" is valid only on the Comprehensive Full-Class Pack.`,
      originalAmount: baseDisplayPrice,
      discountAmount: 0,
      finalAmount: baseDisplayPrice,
      originalSubunits: baseSubunits,
      finalSubunits: baseSubunits,
      discountPercentEffective: 0,
    };
  }

  if (
    found.scope === "COMPREHENSIVE_AND_MONTHLY" &&
    packagePlan !== "COMPREHENSIVE" &&
    packagePlan !== "MONTHLY"
  ) {
    return {
      valid: false,
      error: `Coupon "${found.code}" is valid on the Scholar Pack or Comprehensive Class Pack.`,
      originalAmount: baseDisplayPrice,
      discountAmount: 0,
      finalAmount: baseDisplayPrice,
      originalSubunits: baseSubunits,
      finalSubunits: baseSubunits,
      discountPercentEffective: 0,
    };
  }

  let discountAmount = 0;
  let finalAmount = baseDisplayPrice;

  if (found.discountType === "PERCENT") {
    const pct = Math.min(Math.max(found.discountValue, 1), 90);
    if (currency === "INR" || currency === "AED") {
      discountAmount = Math.round((baseDisplayPrice * pct) / 100);
      finalAmount = Math.max(1, baseDisplayPrice - discountAmount);
    } else {
      discountAmount = Number(((baseDisplayPrice * pct) / 100).toFixed(2));
      finalAmount = Number(Math.max(0.5, baseDisplayPrice - discountAmount).toFixed(2));
    }
  } else {
    // FLAT_INR coupon: in INR deduct exact flat amount; in foreign currency deduct ~15%
    if (currency === "INR") {
      discountAmount = Math.min(found.discountValue, baseDisplayPrice - 10);
      finalAmount = Math.max(10, baseDisplayPrice - discountAmount);
    } else if (currency === "AED") {
      discountAmount = Math.max(1, Math.round(baseDisplayPrice * 0.15));
      finalAmount = Math.max(1, baseDisplayPrice - discountAmount);
    } else {
      discountAmount = Number((baseDisplayPrice * 0.15).toFixed(2));
      finalAmount = Number(Math.max(0.5, baseDisplayPrice - discountAmount).toFixed(2));
    }
  }

  const finalSubunits = Math.round(finalAmount * 100);
  const effectivePct =
    baseDisplayPrice > 0
      ? Math.round(((baseDisplayPrice - finalAmount) / baseDisplayPrice) * 100)
      : 0;

  return {
    valid: true,
    coupon: found,
    originalAmount: baseDisplayPrice,
    discountAmount,
    finalAmount,
    originalSubunits: baseSubunits,
    finalSubunits,
    discountPercentEffective: effectivePct,
  };
}
