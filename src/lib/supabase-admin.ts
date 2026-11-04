import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://obnkrztcwpyrfpnuwzvg.supabase.co";
const supabaseServiceKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "";

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

/**
 * Validates whether the incoming API request is authorized with admin privileges:
 * 1. Checks server environment secret `ADMIN_SECRET_KEY` against `x-admin-key` header.
 * 2. Or validates the caller's Supabase auth session token and checks if `role === 'admin'` in `profiles`.
 */
export async function verifyAdminRequest(req: Request): Promise<boolean> {
  const adminKey = req.headers.get("x-admin-key");
  const adminSecret = process.env.ADMIN_SECRET_KEY;

  if (adminSecret && adminKey && adminKey === adminSecret) {
    return true;
  }

  const authHeader = req.headers.get("authorization");
  if (authHeader?.startsWith("Bearer ")) {
    const token = authHeader.replace("Bearer ", "").trim();
    if (!token) return false;

    try {
      const {
        data: { user },
        error: userErr,
      } = await supabaseAdmin.auth.getUser(token);

      if (user && !userErr) {
        const { data: prof, error: profErr } = await supabaseAdmin
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .single();

        if (prof && !profErr && prof.role === "admin") {
          return true;
        }
      }
    } catch {
      return false;
    }
  }

  return false;
}
