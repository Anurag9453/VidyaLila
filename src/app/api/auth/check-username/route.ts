import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { isSupabaseConfigured } from "@/lib/supabase";
import { LEADERBOARD_DATA } from "@/lib/mock-data";

const RESERVED_HANDLES = new Set<string>([
  "@vidyabot",
  "@admin",
  "@vidyalila",
  "@guest_scholar",
  "@support",
  ...LEADERBOARD_DATA.map((entry) => entry.username.toLowerCase()),
]);

function normalizeUsername(raw: string): {
  valid: boolean;
  normalized: string;
  handleOnly: string;
  error?: string;
} {
  const cleaned = (raw || "").trim().replace(/^@+/, "").toLowerCase();
  if (!cleaned) {
    return {
      valid: false,
      normalized: "@",
      handleOnly: "",
      error: "Please enter a username.",
    };
  }
  if (cleaned.length < 3 || cleaned.length > 20) {
    return {
      valid: false,
      normalized: `@${cleaned}`,
      handleOnly: cleaned,
      error: "Username must be between 3 and 20 characters long.",
    };
  }
  if (!/^[a-z0-9_]+$/.test(cleaned)) {
    return {
      valid: false,
      normalized: `@${cleaned}`,
      handleOnly: cleaned,
      error:
        "Username can only contain lowercase letters (a-z), numbers (0-9), and underscores (_).",
    };
  }
  return {
    valid: true,
    normalized: `@${cleaned}`,
    handleOnly: cleaned,
  };
}

async function checkAvailability(
  rawUsername: string,
  excludeUserId?: string
): Promise<{
  ok: boolean;
  available: boolean;
  normalized: string;
  error?: string;
  suggestions?: string[];
}> {
  const { valid, normalized, handleOnly, error } =
    normalizeUsername(rawUsername);

  if (!valid) {
    return {
      ok: true,
      available: false,
      normalized,
      error,
    };
  }

  // 1. Check against reserved & leaderboard usernames (@aarav_optics, @ananya_icse, etc.)
  if (RESERVED_HANDLES.has(normalized.toLowerCase())) {
    return {
      ok: true,
      available: false,
      normalized,
      error: `Username ${normalized} is already taken. Please choose another unique username.`,
      suggestions: [
        `@${handleOnly}_9`,
        `@${handleOnly}_scholar`,
        `@${handleOnly}_${Math.floor(10 + Math.random() * 89)}`,
      ],
    };
  }

  // 2. Check against Supabase public.profiles table
  if (isSupabaseConfigured) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

    const dbClient = createClient(supabaseUrl, supabaseKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { data: existingRows } = await dbClient
      .from("profiles")
      .select("id, username")
      .ilike("username", normalized)
      .limit(5);

    const conflict = (existingRows || []).find(
      (row) => !excludeUserId || row.id !== excludeUserId
    );

    if (conflict) {
      return {
        ok: true,
        available: false,
        normalized,
        error: `Username ${normalized} is already taken. Please choose another unique username.`,
        suggestions: [
          `@${handleOnly}_9`,
          `@${handleOnly}_scholar`,
          `@${handleOnly}_${Math.floor(10 + Math.random() * 89)}`,
        ],
      };
    }
  }

  return {
    ok: true,
    available: true,
    normalized,
  };
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username") || "";
  const excludeUserId = searchParams.get("excludeUserId") || undefined;

  const result = await checkAvailability(username, excludeUserId);
  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = await checkAvailability(
      body.username || "",
      body.excludeUserId
    );
    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { ok: false, available: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}
