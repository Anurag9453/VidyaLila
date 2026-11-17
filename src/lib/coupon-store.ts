import fs from "fs";
import { CouponDefinition } from "@/lib/coupons";

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

export function saveServerCustomCoupons(list: CouponDefinition[]) {
  memoryCustomCoupons = list;
  try {
    fs.writeFileSync(COUPON_FILE, JSON.stringify(list, null, 2), "utf8");
  } catch {
    // ignore
  }
}
