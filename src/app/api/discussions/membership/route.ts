import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import {
  GroupMembershipStatus,
  StudyGroupMembership,
} from "@/lib/discussions-data";
import { ClassGrade } from "@/lib/mock-data";
import {
  getAllMembershipsServer,
  getUserMembershipServer,
  mapDbRowToMembership,
  serverMembershipCache,
} from "@/lib/membership-server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userKey = searchParams.get("userKey") || "";

    const allMemberships = await getAllMembershipsServer();
    const myMembership = userKey
      ? allMemberships.find((m) => m.userKey === userKey) || null
      : null;

    return NextResponse.json({
      ok: true,
      memberships: allMemberships,
      myMembership,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to load memberships";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

/**
 * POST /api/discussions/membership
 * Student requests to join a single Study Group.
 * - A student can only join ONE group at a time.
 * - Requesting a new group replaces their previous group membership and sets status to 'pending' (awaiting Admin approval).
 * - If the student has been 'barred' by the Admin, they cannot request to join any group.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      userKey,
      userId = null,
      userName = "Scholar",
      userUsername = "@scholar",
      userAvatar = "🚀",
      channelId = "class-9-doubts",
      classGrade = 9,
      requestNote = "",
    } = body as {
      userKey: string;
      userId?: string | null;
      userName?: string;
      userUsername?: string;
      userAvatar?: string;
      channelId?: string;
      classGrade?: ClassGrade;
      requestNote?: string;
    };

    const resolvedKey = (userKey || userId || userUsername || "").trim();
    if (!resolvedKey) {
      return NextResponse.json(
        { ok: false, error: "User identifier is required to request group access." },
        { status: 400 }
      );
    }

    const existing = await getUserMembershipServer(resolvedKey);

    // 1. Barred users cannot bypass a ban by requesting a new group
    if (existing?.status === "barred") {
      return NextResponse.json(
        {
          ok: false,
          error:
            existing.barredReason ||
            "Your account has been barred from Study Groups by the Admin due to community guideline violations.",
          membership: existing,
        },
        { status: 403 }
      );
    }

    const nowIso = new Date().toISOString();
    const cleanNote = requestNote.trim().slice(0, 240);

    const nextMembership: StudyGroupMembership = {
      id: existing?.id || `mem-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      userId: userId || existing?.userId || null,
      userKey: resolvedKey,
      userName,
      userUsername,
      userAvatar,
      channelId,
      classGrade,
      requestNote: cleanNote || `Requesting permission to join #${channelId}`,
      status: "pending",
      violationCount: existing?.violationCount || 0,
      lastViolationReason: existing?.lastViolationReason || null,
      barredReason: null,
      requestedAt: nowIso,
      updatedAt: nowIso,
    };

    serverMembershipCache.set(resolvedKey, nextMembership);

    // Persist to Supabase public.study_group_memberships (upserts by unique user_key so user is only in 1 group)
    try {
      const isUuid =
        typeof userId === "string" &&
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(userId);

      const { data, error } = await supabaseAdmin
        .from("study_group_memberships")
        .upsert(
          {
            user_id: isUuid ? userId : null,
            user_key: resolvedKey,
            user_name: userName,
            user_username: userUsername,
            user_avatar: userAvatar,
            channel_id: channelId,
            class_grade: classGrade,
            request_note: nextMembership.requestNote,
            status: "pending",
            violation_count: nextMembership.violationCount,
            last_violation_reason: nextMembership.lastViolationReason,
            barred_reason: null,
            requested_at: nowIso,
            updated_at: nowIso,
          },
          { onConflict: "user_key" }
        )
        .select("*")
        .single();

      if (!error && data) {
        const saved = mapDbRowToMembership(data);
        serverMembershipCache.set(resolvedKey, saved);
        return NextResponse.json({
          ok: true,
          membership: saved,
          memberships: await getAllMembershipsServer(),
        });
      }
    } catch {
      // Non-fatal fallback
    }

    return NextResponse.json({
      ok: true,
      membership: nextMembership,
      memberships: await getAllMembershipsServer(),
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to submit join request";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

/**
 * PATCH /api/discussions/membership
 * Admin actions:
 * - action: 'approve'  -> Grants permission to enter the requested group & start chatting
 * - action: 'reject'   -> Declines the join request
 * - action: 'bar'      -> Bars (bans) the user from all study groups (e.g. for foul language)
 * - action: 'unbar'    -> Restores a barred user back to 'approved' status
 */
export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const {
      userKey,
      userName = "Scholar",
      userUsername = "@scholar",
      userAvatar = "🚀",
      channelId = "class-9-doubts",
      classGrade = 9,
      action,
      reason = "",
    } = body as {
      userKey: string;
      userName?: string;
      userUsername?: string;
      userAvatar?: string;
      channelId?: string;
      classGrade?: ClassGrade;
      action: "approve" | "reject" | "bar" | "unbar";
      reason?: string;
    };

    if (!userKey || !action) {
      return NextResponse.json(
        { ok: false, error: "userKey and action are required." },
        { status: 400 }
      );
    }

    const existing = await getUserMembershipServer(userKey);
    const nowIso = new Date().toISOString();

    let nextStatus: GroupMembershipStatus = "pending";
    let barredReason: string | null = existing?.barredReason || null;

    if (action === "approve" || action === "unbar") {
      nextStatus = "approved";
      barredReason = null;
    } else if (action === "reject") {
      nextStatus = "rejected";
    } else if (action === "bar") {
      nextStatus = "barred";
      barredReason =
        reason.trim() ||
        "Barred by Admin for violating the no-foul-language / community conduct rules.";
    }

    const updated: StudyGroupMembership = existing
      ? {
          ...existing,
          status: nextStatus,
          barredReason,
          updatedAt: nowIso,
        }
      : {
          id: `mem-${Date.now()}`,
          userId: null,
          userKey,
          userName,
          userUsername,
          userAvatar,
          channelId,
          classGrade,
          requestNote: "Direct Admin Moderation Action",
          status: nextStatus,
          violationCount: action === "bar" ? 1 : 0,
          lastViolationReason: action === "bar" ? barredReason : null,
          barredReason,
          requestedAt: nowIso,
          updatedAt: nowIso,
        };

    serverMembershipCache.set(userKey, updated);

    try {
      const { data, error } = await supabaseAdmin
        .from("study_group_memberships")
        .upsert(
          {
            user_key: updated.userKey,
            user_name: updated.userName,
            user_username: updated.userUsername,
            user_avatar: updated.userAvatar,
            channel_id: updated.channelId,
            class_grade: updated.classGrade,
            request_note: updated.requestNote,
            status: updated.status,
            violation_count: updated.violationCount,
            last_violation_reason: updated.lastViolationReason,
            barred_reason: updated.barredReason,
            updated_at: nowIso,
          },
          { onConflict: "user_key" }
        )
        .select("*")
        .single();

      if (!error && data) {
        const saved = mapDbRowToMembership(data);
        serverMembershipCache.set(userKey, saved);
      }
    } catch {
      // Non-fatal fallback
    }

    return NextResponse.json({
      ok: true,
      membership: serverMembershipCache.get(userKey) || updated,
      memberships: await getAllMembershipsServer(),
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to update membership";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
