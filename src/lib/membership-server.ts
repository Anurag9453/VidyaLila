import { supabaseAdmin } from "@/lib/supabase-admin";
import {
  GroupMembershipStatus,
  INITIAL_GROUP_MEMBERSHIPS,
  StudyGroupMembership,
} from "@/lib/discussions-data";
import { ClassGrade } from "@/lib/mock-data";

// Server-side in-memory store synced with Supabase fallback so single-group
// request -> admin approval -> bar/unbar works immediately even before running SQL migration
export const serverMembershipCache = new Map<string, StudyGroupMembership>(
  INITIAL_GROUP_MEMBERSHIPS.map((m) => [m.userKey, m])
);

export function mapDbRowToMembership(row: Record<string, unknown>): StudyGroupMembership {
  return {
    id: String(row.id),
    userId: row.user_id ? String(row.user_id) : null,
    userKey: String(row.user_key || "@scholar"),
    userName: String(row.user_name || "Scholar"),
    userUsername: String(row.user_username || "@scholar"),
    userAvatar: String(row.user_avatar || "🚀"),
    channelId: String(row.channel_id || "class-9-doubts"),
    classGrade: (Number(row.class_grade) || 9) as ClassGrade,
    requestNote: String(row.request_note || ""),
    status: (row.status as GroupMembershipStatus) || "pending",
    violationCount: Number(row.violation_count) || 0,
    lastViolationReason: row.last_violation_reason
      ? String(row.last_violation_reason)
      : null,
    barredReason: row.barred_reason ? String(row.barred_reason) : null,
    requestedAt: String(row.requested_at || new Date().toISOString()),
    updatedAt: String(row.updated_at || new Date().toISOString()),
  };
}

export async function getAllMembershipsServer(): Promise<StudyGroupMembership[]> {
  try {
    const { data, error } = await supabaseAdmin
      .from("study_group_memberships")
      .select("*")
      .order("requested_at", { ascending: false });

    if (!error && Array.isArray(data) && data.length > 0) {
      for (const row of data) {
        const mapped = mapDbRowToMembership(row);
        serverMembershipCache.set(mapped.userKey, mapped);
      }
    }
  } catch {
    // Fallback to in-memory cache if table not created yet
  }

  return Array.from(serverMembershipCache.values()).sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
}

export async function getUserMembershipServer(
  userKey: string
): Promise<StudyGroupMembership | null> {
  if (!userKey) return null;
  try {
    const { data, error } = await supabaseAdmin
      .from("study_group_memberships")
      .select("*")
      .eq("user_key", userKey)
      .single();

    if (!error && data) {
      const mapped = mapDbRowToMembership(data);
      serverMembershipCache.set(mapped.userKey, mapped);
      return mapped;
    }
  } catch {
    // Fallback to cache
  }
  return serverMembershipCache.get(userKey) || null;
}

export async function recordUserFoulLanguageStrikeServer(params: {
  userKey: string;
  userId?: string | null;
  userName: string;
  userUsername: string;
  userAvatar: string;
  channelId: string;
  classGrade: ClassGrade;
  violationReason: string;
}): Promise<StudyGroupMembership> {
  const existing = await getUserMembershipServer(params.userKey);
  const nowIso = new Date().toISOString();

  const updated: StudyGroupMembership = existing
    ? {
        ...existing,
        violationCount: existing.violationCount + 1,
        lastViolationReason: params.violationReason,
        updatedAt: nowIso,
      }
    : {
        id: `mem-${Date.now()}`,
        userId: params.userId || null,
        userKey: params.userKey,
        userName: params.userName,
        userUsername: params.userUsername,
        userAvatar: params.userAvatar,
        channelId: params.channelId,
        classGrade: params.classGrade,
        requestNote: "",
        status: "pending",
        violationCount: 1,
        lastViolationReason: params.violationReason,
        barredReason: null,
        requestedAt: nowIso,
        updatedAt: nowIso,
      };

  serverMembershipCache.set(params.userKey, updated);

  try {
    await supabaseAdmin.from("study_group_memberships").upsert(
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
    );
  } catch {
    // Ignore if table not created yet
  }

  return updated;
}
