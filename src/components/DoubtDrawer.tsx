"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useApp } from "@/lib/store";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import {
  DiscussionMessage,
  INITIAL_DISCUSSION_MESSAGES,
  INITIAL_GROUP_MEMBERSHIPS,
  QUICK_MATH_SYMBOLS,
  QuestionReference,
  StudyGroupMembership,
} from "@/lib/discussions-data";
import { ClassGrade } from "@/lib/mock-data";
import {
  Bot,
  Send,
  ThumbsUp,
  MessageSquare,
  Sparkles,
  ShieldAlert,
  X,
  CornerDownRight,
  CheckCircle2,
  ExternalLink,
  HelpCircle,
  Lock,
  Clock,
  Ban,
  UserPlus,
  ShieldCheck,
} from "lucide-react";

const LOCAL_STORAGE_DISCUSSIONS_KEY = "vidyalila_discussions_v1";
const LOCAL_STORAGE_MEMBERSHIPS_KEY = "vidyalila_group_memberships_v1";

export function loadLocalDiscussions(): DiscussionMessage[] {
  if (typeof window === "undefined") return INITIAL_DISCUSSION_MESSAGES;
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_DISCUSSIONS_KEY);
    if (!raw) return INITIAL_DISCUSSION_MESSAGES;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch {
    // ignore
  }
  return INITIAL_DISCUSSION_MESSAGES;
}

export function saveLocalDiscussions(messages: DiscussionMessage[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LOCAL_STORAGE_DISCUSSIONS_KEY, JSON.stringify(messages));
  } catch {
    // ignore
  }
}

export function loadLocalMemberships(): StudyGroupMembership[] {
  if (typeof window === "undefined") return INITIAL_GROUP_MEMBERSHIPS;
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_MEMBERSHIPS_KEY);
    if (!raw) return INITIAL_GROUP_MEMBERSHIPS;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch {
    // ignore
  }
  return INITIAL_GROUP_MEMBERSHIPS;
}

export function saveLocalMemberships(memberships: StudyGroupMembership[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LOCAL_STORAGE_MEMBERSHIPS_KEY, JSON.stringify(memberships));
  } catch {
    // ignore
  }
}

export function mergeMembershipsList(
  localList: StudyGroupMembership[],
  serverList: StudyGroupMembership[]
): StudyGroupMembership[] {
  const map = new Map<string, StudyGroupMembership>();
  for (const m of localList) map.set(m.userKey, m);
  for (const m of serverList) {
    const prev = map.get(m.userKey);
    if (!prev || new Date(m.updatedAt).getTime() >= new Date(prev.updatedAt).getTime()) {
      map.set(m.userKey, m);
    }
  }
  return Array.from(map.values()).sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
}

export function formatRelativeTime(iso: string): string {
  const diffSec = Math.max(1, Math.floor((Date.now() - new Date(iso).getTime()) / 1000));
  if (diffSec < 60) return "just now";
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr}h ago`;
  const diffDays = Math.floor(diffHr / 24);
  return `${diffDays}d ago`;
}

export function renderBotOrChatMarkdown(text: string): React.ReactNode {
  const lines = text.split("\n");
  return (
    <div className="space-y-1.5 text-xs sm:text-sm leading-relaxed">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={idx} className="h-1" />;

        if (trimmed.startsWith(">")) {
          const quoteText = trimmed.replace(/^>\s?/, "");
          return (
            <div
              key={idx}
              className="rounded-xl border-l-4 border-indigo-500 bg-indigo-50/80 px-3 py-2 text-xs font-semibold text-indigo-950"
            >
              {renderInlineTokens(quoteText)}
            </div>
          );
        }

        if (trimmed.startsWith("- ")) {
          return (
            <div key={idx} className="flex items-start gap-2 pl-1">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0 mt-2" />
              <span className="flex-1">{renderInlineTokens(trimmed.slice(2))}</span>
            </div>
          );
        }

        return <p key={idx}>{renderInlineTokens(trimmed)}</p>;
      })}
    </div>
  );
}

function renderInlineTokens(text: string): React.ReactNode {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (!part) return null;
    if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
      return (
        <code
          key={i}
          className="mx-0.5 rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs font-bold text-indigo-800 border border-slate-200"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return (
        <strong key={i} className="font-extrabold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

interface DoubtDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  classGrade: ClassGrade;
  chapterTag: string;
  questionRef?: QuestionReference | null;
}

export function DoubtDrawer({
  isOpen,
  onClose,
  classGrade,
  chapterTag,
  questionRef,
}: DoubtDrawerProps) {
  const { profile } = useApp();
  const channelId = `class-${classGrade}-doubts`;
  const userKey = profile.username || profile.id || profile.name || "@scholar";

  const [messages, setMessages] = useState<DiscussionMessage[]>([]);
  const [memberships, setMemberships] = useState<StudyGroupMembership[]>([]);
  const [requestNote, setRequestNote] = useState("");
  const [requestingJoin, setRequestingJoin] = useState(false);
  const [inputText, setInputText] = useState("");
  const [askBot, setAskBot] = useState(true);
  const [replyingTo, setReplyingTo] = useState<DiscussionMessage | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorAlert, setErrorAlert] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const localMsgs = loadLocalDiscussions();
    setMessages(localMsgs);

    const localMems = loadLocalMemberships();
    setMemberships(localMems);

    // Sync memberships from server
    fetch(`/api/discussions/membership?userKey=${encodeURIComponent(userKey)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.ok && Array.isArray(data.memberships)) {
          const mergedMems = mergeMembershipsList(loadLocalMemberships(), data.memberships);
          setMemberships(mergedMems);
          saveLocalMemberships(mergedMems);
        }
      })
      .catch(() => {});

    // Fetch latest messages from API / Supabase
    fetch(`/api/discussions?channelId=${encodeURIComponent(channelId)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.ok && Array.isArray(data.messages)) {
          const mergedMap = new Map<string, DiscussionMessage>();
          for (const m of loadLocalDiscussions()) mergedMap.set(m.id, m);
          for (const m of data.messages) mergedMap.set(m.id, m);
          const merged = Array.from(mergedMap.values()).sort(
            (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
          setMessages(merged);
          saveLocalDiscussions(merged);
        }
      })
      .catch(() => {});

    // Subscribe to Supabase Realtime if configured
    if (isSupabaseConfigured) {
      const sub = supabase
        .channel(`drawer-${channelId}`)
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "discussion_messages",
            filter: `channel_id=eq.${channelId}`,
          },
          () => {
            fetch(`/api/discussions?channelId=${encodeURIComponent(channelId)}`)
              .then((res) => res.json())
              .then((data) => {
                if (data?.ok && Array.isArray(data.messages)) {
                  setMessages((prev) => {
                    const map = new Map<string, DiscussionMessage>();
                    for (const m of prev) map.set(m.id, m);
                    for (const m of data.messages) map.set(m.id, m);
                    const next = Array.from(map.values()).sort(
                      (a, b) =>
                        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
                    );
                    saveLocalDiscussions(next);
                    return next;
                  });
                }
              })
              .catch(() => {});
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(sub);
      };
    }
  }, [isOpen, channelId, userKey]);

  if (!isOpen) return null;

  const myMembership = memberships.find((m) => m.userKey === userKey) || null;
  const isBarred = myMembership?.status === "barred";
  const isApprovedForThisGroup =
    profile.role === "admin" ||
    (myMembership?.status === "approved" && myMembership?.channelId === channelId);
  const isPendingForThisGroup =
    myMembership?.status === "pending" && myMembership?.channelId === channelId;
  const hasOtherActiveGroup =
    myMembership &&
    myMembership.channelId !== channelId &&
    (myMembership.status === "approved" || myMembership.status === "pending");

  const handleRequestJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorAlert(null);
    setRequestingJoin(true);

    try {
      const res = await fetch("/api/discussions/membership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userKey,
          userId: profile.id || null,
          userName: profile.name,
          userUsername: profile.username,
          userAvatar: profile.avatar,
          channelId,
          classGrade,
          requestNote:
            requestNote.trim() ||
            `Requesting permission to join #${channelId} for ${chapterTag} doubts.`,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setErrorAlert(data.error || "Could not submit join request.");
        return;
      }

      if (data.membership) {
        setMemberships((prev) => {
          const next = mergeMembershipsList(prev, [data.membership]);
          saveLocalMemberships(next);
          return next;
        });
      }
      setRequestNote("");
    } catch {
      setErrorAlert("Network error while sending join request.");
    } finally {
      setRequestingJoin(false);
    }
  };

  // Filter messages for this class & chapter (or question)
  const relevantMessages = messages.filter((m) => {
    if (m.channelId !== channelId) return false;
    if (
      chapterTag &&
      chapterTag !== "All Topics" &&
      !m.chapterTag.toLowerCase().includes(chapterTag.toLowerCase().slice(0, 6)) &&
      !chapterTag.toLowerCase().includes(m.chapterTag.toLowerCase().slice(0, 6))
    ) {
      return false;
    }
    return true;
  });

  const rootMessages = relevantMessages.filter((m) => !m.parentId);
  const getReplies = (parentId: string) =>
    relevantMessages.filter((m) => m.parentId === parentId);

  const handleInsertSymbol = (sym: string) => {
    setInputText((prev) => `${prev}${sym}`);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorAlert(null);
    if (!inputText.trim() || submitting) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/discussions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          channelId,
          classGrade,
          chapterTag,
          questionRef: replyingTo ? null : questionRef,
          senderId: profile.id || null,
          senderName: profile.name,
          senderUsername: profile.username,
          senderAvatar: profile.avatar,
          senderRole: profile.role === "admin" ? "admin" : "student",
          userKey,
          content: inputText,
          parentId: replyingTo ? replyingTo.id : null,
          askVidyaBot: askBot,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        if (data?.updatedMembership) {
          setMemberships((prev) => {
            const next = mergeMembershipsList(prev, [data.updatedMembership]);
            saveLocalMemberships(next);
            return next;
          });
        }
        setErrorAlert(data.error || "Could not send message.");
        setSubmitting(false);
        return;
      }

      const newItems: DiscussionMessage[] = [];
      if (data.userMessage) newItems.push(data.userMessage);
      if (data.botMessage) newItems.push(data.botMessage);

      setMessages((prev) => {
        const next = [...prev, ...newItems];
        saveLocalDiscussions(next);
        return next;
      });

      setInputText("");
      setReplyingTo(null);
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch {
      setErrorAlert("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleUpvote = async (msg: DiscussionMessage) => {
    const voterKey = profile.id || profile.username || "local-user";
    if (msg.upvotedBy.includes(voterKey)) return;

    setMessages((prev) => {
      const next = prev.map((item) =>
        item.id === msg.id
          ? {
              ...item,
              upvotes: item.upvotes + 1,
              upvotedBy: [...item.upvotedBy, voterKey],
              isHelpfulSolution: true,
            }
          : item
      );
      saveLocalDiscussions(next);
      return next;
    });

    await fetch("/api/discussions", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messageId: msg.id,
        voterId: voterKey,
        markHelpful: true,
      }),
    }).catch(() => {});
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/50 backdrop-blur-xs">
      <div className="relative flex h-full w-full max-w-xl flex-col bg-white shadow-2xl border-l-2 border-slate-200">
        {/* Drawer Header */}
        <div className="flex items-center justify-between gap-3 border-b-2 border-slate-200 bg-slate-900 px-5 py-4 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-600 text-xl shadow-sm">
              🤖
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-300">
                  #{channelId}
                </span>
                {isApprovedForThisGroup ? (
                  <span className="rounded-full bg-emerald-500/20 border border-emerald-400/40 px-2 py-0.5 text-[10px] font-black text-emerald-300">
                    ✓ Group Member
                  </span>
                ) : (
                  <span className="rounded-full bg-amber-500/20 border border-amber-400/40 px-2 py-0.5 text-[10px] font-black text-amber-300">
                    🔒 Approval Required
                  </span>
                )}
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-white">
                {chapterTag} • Peer & AI Discussion
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`/doubts?class=${classGrade}&topic=${encodeURIComponent(chapterTag)}`}
              className="rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 px-3 py-1.5 text-xs font-bold text-slate-200 flex items-center gap-1.5 transition"
              title="Open Full Study Lounge"
            >
              <span>Full Lounge</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
            <button
              onClick={onClose}
              className="rounded-xl bg-slate-800 p-2 text-slate-300 hover:bg-slate-700 hover:text-white transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Active Question Context Banner (if opened from a specific question) */}
        {questionRef?.questionPrompt && (
          <div className="border-b-2 border-indigo-200 bg-indigo-50/90 px-5 py-3.5 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-indigo-700">
                <HelpCircle className="h-3.5 w-3.5" />
                <span>
                  Attached Context:{" "}
                  {questionRef.questionNumber
                    ? `Question #${questionRef.questionNumber}`
                    : questionRef.unitTitle}
                </span>
              </span>
              <span className="text-[11px] font-bold text-indigo-600">
                Auto-linked to your doubt
              </span>
            </div>
            <p className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2">
              {questionRef.questionPrompt}
            </p>
          </div>
        )}

        {/* MEMBERSHIP GATE: Barred / Pending / Request to Join (Single Group Rule) */}
        {isBarred ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-rose-50/50 space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-rose-100 border-2 border-rose-300 text-rose-600">
              <Ban className="h-8 w-8" />
            </div>
            <div className="space-y-1.5 max-w-md">
              <span className="inline-flex items-center gap-1 rounded-full bg-rose-100 border border-rose-300 px-3 py-0.5 text-[11px] font-black uppercase text-rose-800">
                Account Barred by Admin
              </span>
              <h4 className="text-lg font-extrabold text-slate-900">
                Your Access to Study Groups Has Been Revoked
              </h4>
              <p className="text-xs sm:text-sm font-semibold text-slate-600">
                {myMembership?.barredReason ||
                  "Foul or disrespectful language is strictly prohibited in VidyaLila Study Groups. The Admin has barred your account from participating."}
              </p>
            </div>
          </div>
        ) : !isApprovedForThisGroup ? (
          <div className="flex-1 overflow-y-auto p-6 bg-slate-50/80 flex flex-col justify-center">
            <div className="rounded-3xl border-2 border-slate-200 bg-white p-6 shadow-sm space-y-4">
              {isPendingForThisGroup ? (
                <>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 border border-amber-300 text-amber-700 shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="inline-flex items-center gap-1 rounded-md bg-amber-100 px-2 py-0.5 text-[10px] font-black uppercase text-amber-800">
                        Waiting for Admin Approval
                      </span>
                      <h4 className="text-base sm:text-lg font-extrabold text-slate-900">
                        Request Sent for #{channelId}
                      </h4>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                    Your request to join <strong>#{channelId}</strong> is pending approval. Once the Admin approves it, you will get permission to enter this group and start chatting!
                  </p>
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3.5 text-xs space-y-1">
                    <div className="font-extrabold text-slate-800">Your Request Details:</div>
                    <div className="text-slate-600">
                      • <strong>Group:</strong> #{channelId} (1 Group at a time)
                    </div>
                    <div className="text-slate-600">
                      • <strong>Note:</strong> &ldquo;{myMembership?.requestNote}&rdquo;
                    </div>
                  </div>
                  <Link
                    href={`/doubts?class=${classGrade}`}
                    className="btn-3d-indigo w-full py-3 text-xs sm:text-sm flex items-center justify-center gap-2"
                  >
                    <ShieldCheck className="h-4 w-4" />
                    <span>Open Study Lounge (View Status / Admin Approval)</span>
                  </Link>
                </>
              ) : (
                <form onSubmit={handleRequestJoin} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 border border-indigo-200 text-indigo-700 shrink-0">
                      <Lock className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="inline-flex items-center gap-1 rounded-md bg-indigo-100 px-2 py-0.5 text-[10px] font-black uppercase text-indigo-800">
                        1 Group At A Time • Admin Approval Required
                      </span>
                      <h4 className="text-base sm:text-lg font-extrabold text-slate-900">
                        Request Permission to Join #{channelId}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                    At a time, you can only join <strong>one Class Study Group</strong>. Send a request below — once the Admin approves it, you can enter the group and start chatting with peers &amp; <strong>@VidyaBot</strong>.
                  </p>

                  {hasOtherActiveGroup && (
                    <div className="rounded-2xl bg-amber-50 border border-amber-200 p-3 text-xs font-semibold text-amber-900">
                      ⚠️ You are currently {myMembership?.status} in{" "}
                      <strong>#{myMembership?.channelId}</strong>. Requesting{" "}
                      <strong>#{channelId}</strong> will switch your single active group membership and require fresh Admin approval.
                    </div>
                  )}

                  <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-3 text-xs font-semibold text-rose-900 space-y-1">
                    <div className="font-extrabold flex items-center gap-1.5">
                      <ShieldAlert className="h-4 w-4 text-rose-600" />
                      <span>Strict Code of Conduct:</span>
                    </div>
                    <p>
                      No foul or abusive language is permitted. Any violation gives the Admin the right to permanently <strong>bar you</strong> from the Study Groups.
                    </p>
                  </div>

                  {errorAlert && (
                    <div className="rounded-xl bg-rose-100 border border-rose-300 px-3 py-2 text-xs font-bold text-rose-800">
                      {errorAlert}
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label className="block text-xs font-extrabold text-slate-700">
                      Brief Note for Admin (Optional)
                    </label>
                    <input
                      type="text"
                      value={requestNote}
                      onChange={(e) => setRequestNote(e.target.value)}
                      placeholder={`Hi Admin, I'm in Class ${classGrade} and want to discuss ${chapterTag}...`}
                      className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 focus:border-indigo-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={requestingJoin}
                    className="btn-3d-indigo w-full py-3 text-xs sm:text-sm flex items-center justify-center gap-2"
                  >
                    <UserPlus className="h-4 w-4" />
                    <span>
                      {requestingJoin
                        ? "Sending Request..."
                        : `Send Request to Join #${channelId}`}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        ) : (
          <>
            {/* Approved Member: Messages Stream */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-50/60">
              {rootMessages.length === 0 ? (
                <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-6 text-center space-y-2">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-2xl">
                    💬
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900">
                    Start the first discussion for {chapterTag}!
                  </h4>
                  <p className="text-xs font-medium text-slate-600 max-w-sm mx-auto">
                    Ask your doubt in Hinglish or English below. <strong>@VidyaBot</strong> will immediately drop a conceptual Socratic hint, and Class {classGrade} peers can chime in!
                  </p>
                </div>
              ) : (
                rootMessages.map((msg) => {
                  const replies = getReplies(msg.id);
                  const isBot = msg.senderRole === "bot";

                  return (
                    <div key={msg.id} className="space-y-2.5">
                      <div
                        className={`rounded-2xl border-2 p-4 shadow-2xs transition ${
                          isBot
                            ? "border-indigo-300 bg-gradient-to-br from-indigo-50/90 via-white to-violet-50/60"
                            : "border-slate-200 bg-white"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2.5">
                            <span
                              className={`flex h-9 w-9 items-center justify-center rounded-xl text-lg border ${
                                isBot
                                  ? "bg-indigo-600 text-white border-indigo-700"
                                  : "bg-slate-100 border-slate-200"
                              }`}
                            >
                              {msg.senderAvatar}
                            </span>
                            <div>
                              <div className="flex flex-wrap items-center gap-1.5">
                                <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                                  {msg.senderName}
                                </span>
                                {isBot && (
                                  <span className="inline-flex items-center gap-1 rounded-md bg-indigo-600 px-2 py-0.5 text-[10px] font-black uppercase text-white">
                                    <Sparkles className="h-2.5 w-2.5" /> AI Tutor
                                  </span>
                                )}
                                <span className="text-[11px] font-semibold text-slate-400">
                                  • {formatRelativeTime(msg.createdAt)}
                                </span>
                              </div>
                              <span className="text-[11px] font-bold text-indigo-600">
                                #{msg.chapterTag}
                              </span>
                            </div>
                          </div>

                          {msg.isHelpfulSolution && (
                            <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-100 border border-emerald-300 px-2 py-0.5 text-[10px] font-black text-emerald-800">
                              <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                              Helpful
                            </span>
                          )}
                        </div>

                        {msg.questionRef?.questionPrompt && (
                          <div className="mt-2.5 rounded-xl bg-slate-100/90 border border-slate-200/90 p-2.5 text-xs">
                            <span className="font-extrabold text-indigo-700 block text-[11px] uppercase tracking-wider">
                              📌 {msg.questionRef.unitTitle || msg.chapterTag}{" "}
                              {msg.questionRef.questionNumber
                                ? `• Q${msg.questionRef.questionNumber}`
                                : ""}
                            </span>
                            <p className="font-semibold text-slate-800 mt-0.5">
                              {msg.questionRef.questionPrompt}
                            </p>
                          </div>
                        )}

                        <div className="mt-2.5 text-slate-800 font-medium">
                          {renderBotOrChatMarkdown(msg.content)}
                        </div>

                        <div className="mt-3 flex items-center gap-3 pt-2 border-t border-slate-100 text-xs font-bold">
                          <button
                            type="button"
                            onClick={() => handleUpvote(msg)}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 px-2.5 py-1 text-slate-600 transition"
                          >
                            <ThumbsUp className="h-3.5 w-3.5" />
                            <span>Helpful ({msg.upvotes})</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setReplyingTo(msg)}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 px-2.5 py-1 text-slate-600 transition"
                          >
                            <MessageSquare className="h-3.5 w-3.5" />
                            <span>Reply ({replies.length})</span>
                          </button>
                        </div>
                      </div>

                      {/* Replies */}
                      {replies.length > 0 && (
                        <div className="pl-5 sm:pl-7 space-y-2 border-l-2 border-indigo-200 ml-3">
                          {replies.map((rep) => {
                            const isRepBot = rep.senderRole === "bot";
                            return (
                              <div
                                key={rep.id}
                                className={`rounded-2xl border-2 p-3.5 shadow-2xs ${
                                  isRepBot
                                    ? "border-indigo-300 bg-gradient-to-br from-indigo-50/90 via-white to-violet-50/70"
                                    : "border-slate-200 bg-white"
                                }`}
                              >
                                <div className="flex items-center justify-between gap-2">
                                  <div className="flex items-center gap-2">
                                    <span
                                      className={`flex h-7 w-7 items-center justify-center rounded-lg text-sm ${
                                        isRepBot
                                          ? "bg-indigo-600 text-white"
                                          : "bg-slate-100 border border-slate-200"
                                      }`}
                                    >
                                      {rep.senderAvatar}
                                    </span>
                                    <span className="text-xs font-extrabold text-slate-900">
                                      {rep.senderName}
                                    </span>
                                    {isRepBot && (
                                      <span className="inline-flex items-center gap-1 rounded-md bg-indigo-600 px-2 py-0.5 text-[10px] font-black uppercase text-white">
                                        <Bot className="h-2.5 w-2.5" /> Socratic Hint
                                      </span>
                                    )}
                                    <span className="text-[10px] font-semibold text-slate-400">
                                      • {formatRelativeTime(rep.createdAt)}
                                    </span>
                                  </div>

                                  <button
                                    type="button"
                                    onClick={() => handleUpvote(rep)}
                                    className="inline-flex items-center gap-1 rounded-lg bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 px-2 py-0.5 text-[11px] font-bold text-slate-600 transition"
                                  >
                                    <ThumbsUp className="h-3 w-3" />
                                    <span>{rep.upvotes}</span>
                                  </button>
                                </div>

                                <div className="mt-2 text-slate-800 font-medium">
                                  {renderBotOrChatMarkdown(rep.content)}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
              <div ref={bottomRef} />
            </div>

            {/* Composer Footer */}
            <form
              onSubmit={handleSendMessage}
              className="border-t-2 border-slate-200 bg-white p-3.5 sm:p-4 space-y-2.5"
            >
              {errorAlert && (
                <div className="flex items-center justify-between gap-2 rounded-xl bg-rose-50 border border-rose-200 px-3 py-2 text-xs font-bold text-rose-800">
                  <div className="flex items-center gap-1.5">
                    <ShieldAlert className="h-4 w-4 text-rose-600 shrink-0" />
                    <span>{errorAlert}</span>
                  </div>
                  <button type="button" onClick={() => setErrorAlert(null)}>
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}

              {replyingTo && (
                <div className="flex items-center justify-between rounded-xl bg-indigo-50 border border-indigo-200 px-3 py-1.5 text-xs font-bold text-indigo-900">
                  <span className="flex items-center gap-1.5 truncate">
                    <CornerDownRight className="h-3.5 w-3.5 shrink-0 text-indigo-600" />
                    Replying to <strong>{replyingTo.senderName}</strong>
                  </span>
                  <button
                    type="button"
                    onClick={() => setReplyingTo(null)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}

              {/* Quick Math Symbols + @VidyaBot Toggle */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1 overflow-x-auto pb-0.5">
                  {QUICK_MATH_SYMBOLS.map((sym) => (
                    <button
                      key={sym.label}
                      type="button"
                      onClick={() => handleInsertSymbol(sym.label)}
                      title={sym.title}
                      className="h-7 w-7 rounded-lg bg-slate-100 hover:bg-indigo-100 hover:text-indigo-800 border border-slate-200 text-xs font-extrabold text-slate-700 transition"
                    >
                      {sym.label}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setAskBot(!askBot)}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-2.5 py-1 text-[11px] font-extrabold border transition ${
                    askBot
                      ? "bg-indigo-600 text-white border-indigo-700 shadow-2xs"
                      : "bg-slate-100 text-slate-600 border-slate-200"
                  }`}
                >
                  <Bot className="h-3.5 w-3.5" />
                  <span>{askBot ? "@VidyaBot Hint: ON" : "@VidyaBot: OFF"}</span>
                </button>
              </div>

              <div className="flex items-end gap-2">
                <textarea
                  rows={2}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={
                    replyingTo
                      ? `Write your Hinglish explanation for ${replyingTo.senderName} (+5 GP if marked helpful)...`
                      : `Ask a doubt on ${chapterTag} (No foul language allowed)...`
                  }
                  className="flex-1 rounded-2xl border-2 border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 focus:border-indigo-500 focus:bg-white focus:outline-none resize-none"
                />
                <button
                  type="submit"
                  disabled={submitting || !inputText.trim()}
                  className={`px-4 py-3 rounded-2xl font-extrabold text-xs sm:text-sm flex items-center gap-1.5 transition ${
                    submitting || !inputText.trim()
                      ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                      : "btn-3d-indigo"
                  }`}
                >
                  <Send className="h-4 w-4" />
                  <span>Post</span>
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
