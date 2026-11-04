"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

function OAuthCallbackHandler() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [statusText, setStatusText] = useState(
    "Verifying your Google Account with VidyaLila Backend..."
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function completeGoogleSignIn() {
      const rawNext = searchParams.get("next") || "/";
      const safeNext = rawNext.startsWith("/") ? rawNext : "/";
      const code = searchParams.get("code");
      const errorDesc =
        searchParams.get("error_description") || searchParams.get("error");

      if (errorDesc) {
        if (active) setErrorMsg(errorDesc);
        return;
      }

      if (!isSupabaseConfigured) {
        router.replace(safeNext);
        return;
      }

      try {
        if (code) {
          await supabase.auth.exchangeCodeForSession(code);
        }

        const {
          data: { session },
          error: sessionError,
        } = await supabase.auth.getSession();

        if (sessionError) {
          if (active) setErrorMsg(sessionError.message);
          return;
        }

        if (session?.access_token) {
          if (active) {
            setStatusText("Syncing your Scholar Profile & Gyan Points...");
          }
          await fetch("/api/auth/sync", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${session.access_token}`,
            },
          });
          localStorage.setItem("vidyalila_is_auth_v4", "true");
        }

        if (active) {
          setStatusText("Signed in with Google! Redirecting...");
          setTimeout(() => {
            router.replace(safeNext);
          }, 300);
        }
      } catch (err) {
        if (active) {
          setErrorMsg(
            err instanceof Error
              ? err.message
              : "Could not complete Google Sign-In."
          );
        }
      }
    }

    completeGoogleSignIn();

    return () => {
      active = false;
    };
  }, [router, searchParams]);

  return (
    <div className="mx-auto max-w-md py-16 px-4">
      <div className="rounded-3xl border-2 border-slate-200 bg-white p-8 text-center shadow-[0_8px_0_0_#e2e8f0] space-y-4">
        {errorMsg ? (
          <>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-600">
              <AlertCircle className="h-7 w-7" />
            </div>
            <h1 className="text-xl font-extrabold text-slate-900">
              Google Sign-In Issue
            </h1>
            <p className="text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200 rounded-xl p-3">
              {errorMsg}
            </p>
            <button
              type="button"
              onClick={() => router.replace("/auth")}
              className="btn-3d-emerald w-full py-3 text-xs font-extrabold"
            >
              Back to Sign In Page
            </button>
          </>
        ) : (
          <>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
              {statusText.startsWith("Signed in") ? (
                <CheckCircle2 className="h-7 w-7" />
              ) : (
                <Loader2 className="h-7 w-7 animate-spin" />
              )}
            </div>
            <h1 className="text-xl font-extrabold text-slate-900">
              Google Sign-In
            </h1>
            <p className="text-xs sm:text-sm font-bold text-slate-600">
              {statusText}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="p-16 text-center text-sm font-bold text-slate-500">
          Completing Google Sign-In...
        </div>
      }
    >
      <OAuthCallbackHandler />
    </Suspense>
  );
}
