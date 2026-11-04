import { NextResponse } from "next/server";
import { verifyAdminRequest } from "@/lib/supabase-admin";

export async function POST(req: Request) {
  try {
    const isAuthorized = await verifyAdminRequest(req);
    if (!isAuthorized) {
      return NextResponse.json(
        { ok: false, error: "Invalid Admin Passcode or unauthorized account." },
        { status: 401 }
      );
    }

    return NextResponse.json({ ok: true, message: "Admin access granted" });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Verification failed";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
