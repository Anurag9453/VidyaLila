import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { isSupabaseConfigured } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization") || "";
    const token = authHeader.replace(/^Bearer\s+/i, "").trim();

    if (isSupabaseConfigured && token) {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
      const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

      const userClient = createClient(supabaseUrl, supabaseAnonKey, {
        global: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      });

      await userClient.auth.signOut();
    }

    const res = NextResponse.json({
      ok: true,
      signedOutAt: new Date().toISOString(),
    });

    // Clear any Supabase / auth cookies if set
    res.cookies.delete("sb-access-token");
    res.cookies.delete("sb-refresh-token");

    return res;
  } catch {
    return NextResponse.json({
      ok: true,
      signedOutAt: new Date().toISOString(),
    });
  }
}
