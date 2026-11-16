import { NextResponse } from "next/server";
import fs from "fs";
import { CouponDefinition, DEFAULT_COUPONS } from "@/lib/coupons";

const COUPON_FILE = "/tmp/vidyalila_custom_coupons.json";
let memoryCustomCoupons: CouponDefinition[] = [];

export function getServerCustomCoupons(): CouponDefinition[] {
  try {
    if (fs.existsSync(COUPON_FILE)) {
      const raw = fs.readFileSync(COUPON_FILE, "utf8");
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        memoryCustomCoupons = parsed;
        return parsed;
      }
    }
  } catch {
    // ignore
  }
  return memoryCustomCoupons;
}

function saveServerCustomCoupons(list: CouponDefinition[]) {
  memoryCustomCoupons = list;
  try {
    fs.writeFileSync(COUPON_FILE, JSON.stringify(list, null, 2), "utf8");
  } catch {
    // ignore
  }
}

export async function GET() {
  const custom = getServerCustomCoupons();
  const map = new Map<string, CouponDefinition>();
  for (const c of DEFAULT_COUPONS) {
    map.set(c.code.toUpperCase(), c);
  }
  for (const c of custom) {
    if (c?.code) {
      map.set(c.code.toUpperCase(), c);
    }
  }
  return NextResponse.json({
    ok: true,
    coupons: Array.from(map.values()),
    customCoupons: custom,
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action, coupon, code } = body as {
      action: "CREATE" | "TOGGLE" | "DELETE";
      coupon?: CouponDefinition;
      code?: string;
    };

    const current = getServerCustomCoupons();

    if (action === "CREATE" && coupon?.code) {
      const cleanCode = coupon.code.trim().toUpperCase().replace(/[^A-Z0-9_-]/g, "");
      if (!cleanCode || cleanCode.length < 3) {
        return NextResponse.json(
          { ok: false, error: "Coupon code must be at least 3 characters." },
          { status: 400 }
        );
      }
      const newCoupon: CouponDefinition = {
        code: cleanCode,
        title: (coupon.title || `${coupon.discountValue}% OFF Student Coupon`).trim(),
        description: (
          coupon.description ||
          `Special ${coupon.discountValue}% discount code for VidyaLila scholars`
        ).trim(),
        discountType: coupon.discountType === "FLAT_INR" ? "FLAT_INR" : "PERCENT",
        discountValue: Math.max(1, Number(coupon.discountValue) || 10),
        scope: coupon.scope || "ALL",
        active: true,
        createdAt: new Date().toISOString(),
      };
      const filtered = current.filter((c) => c.code.toUpperCase() !== cleanCode);
      const updated = [newCoupon, ...filtered];
      saveServerCustomCoupons(updated);
      return NextResponse.json({ ok: true, coupon: newCoupon, customCoupons: updated });
    }

    if (action === "TOGGLE" && code) {
      const targetCode = code.trim().toUpperCase();
      const existingIdx = current.findIndex((c) => c.code.toUpperCase() === targetCode);
      if (existingIdx >= 0) {
        current[existingIdx].active = !current[existingIdx].active;
      } else {
        const def = DEFAULT_COUPONS.find((c) => c.code.toUpperCase() === targetCode);
        if (def) {
          current.unshift({ ...def, active: !def.active });
        }
      }
      saveServerCustomCoupons(current);
      return NextResponse.json({ ok: true, customCoupons: current });
    }

    if (action === "DELETE" && code) {
      const targetCode = code.trim().toUpperCase();
      const updated = current.filter((c) => c.code.toUpperCase() !== targetCode);
      saveServerCustomCoupons(updated);
      return NextResponse.json({ ok: true, customCoupons: updated });
    }

    return NextResponse.json({ ok: false, error: "Invalid action" }, { status: 400 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Failed to update coupons";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
