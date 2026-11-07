"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useApp } from "@/lib/store";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import {
  CHAPTER_TAGS_BY_CLASS,
  DiscussionMessage,
  QUICK_MATH_SYMBOLS,
  STUDY_CHANNELS,
  StudyGroupMembership,
} from "@/lib/discussions-data";
import {
  formatRelativeTime,
  loadLocalDiscussions,
  loadLocalMemberships,
  mergeMembershipsList,
  renderBotOrChatMarkdown,
  renderUserAvatar,
  saveLocalDiscussions,
  saveLocalMemberships,
} from "@/components/DoubtDrawer";
import { ClassGrade } from "@/lib/mock-data";
import {
  Bot,
  Hash,
  MessageSquare,
  Send,
  ShieldCheck,
  Sparkles,
  ThumbsUp,
  CornerDownRight,
  CheckCircle2,
  ShieldAlert,
  X,
  Database,
  BookOpen,
  Award,
  Lock,
  Clock,
  Ban,
  UserPlus,
  UserCheck,
  UserX,
  RotateCcw,
} from "lucide-react";

function DoubtsLoungeContent() {
  const searchParams = useSearchParams();
  const { profile } = useApp();

  const initialClassParam = Number(searchParams.get("class"));
  const validInitialGrade: ClassGrade = [9, 10].includes(initialClassParam)
    ? (initialClassParam as ClassGrade)
    : (profile.classGrade === 10 ? 10 : 9);

  const [selectedGrade, setSelectedGrade] = useState<ClassGrade>(validInitialGrade);
  const [selectedTopic, setSelectedTopic] = useState<string>(
    searchParams.get("topic") || "All Topics"
  );
  const [messages, setMessages] = useState<DiscussionMessage[]>([]);
  const [memberships, setMemberships] = useState<StudyGroupMembership[]>([]);
  const [requestNote, setRequestNote] = useState("");
  const [requestingJoin, setRequestingJoin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  const [inputText, setInputText] = useState("");
  const [composeTopic, setComposeTopic] = useState<string>("");
  const [askBot, setAskBot] = useState(true);
  const [replyingTo, setReplyingTo] = useState<DiscussionMessage | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorAlert, setErrorAlert] = useState<string | null>(null);
  const [gpToast, setGpToast] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const userKey = profile.username || profile.id || profile.name || "@scholar";
  const activeChannel =
    STUDY_CHANNELS.find((c) => c.classGrade === selectedGrade) || STUDY_CHANNELS[0];
  const availableTopics = CHAPTER_TAGS_BY_CLASS[selectedGrade] || ["All Topics"];

  useEffect(() => {
    const defaultChapter = availableTopics[1] || "General";
    setComposeTopic(selectedTopic !== "All Topics" ? selectedTopic : defaultChapter);
  }, [selectedGrade, selectedTopic, availableTopics]);

  // Load & sync group memberships + messages
  useEffect(() => {
    const localMsgs = loadLocalDiscussions();
    setMessages(localMsgs);

    const localMems = loadLocalMemberships();
    setMemberships(localMems);

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

    fetch(`/api/discussions?channelId=${encodeURIComponent(activeChannel.id)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.ok && Array.isArray(data.messages)) {
          const map = new Map<string, DiscussionMessage>();
          for (const m of loadLocalDiscussions()) map.set(m.id, m);
          for (const m of data.messages) map.set(m.id, m);
          const merged = Array.from(map.values()).sort(
            (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
          setMessages(merged);
          saveLocalDiscussions(merged);
        }
      })
      .catch(() => {});

    if (isSupabaseConfigured) {
      const sub = supabase
        .channel(`lounge-${activeChannel.id}`)
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "discussion_messages",
            filter: `channel_id=eq.${activeChannel.id}`,
          },
          () => {
            fetch(`/api/discussions?channelId=${encodeURIComponent(activeChannel.id)}`)
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
  }, [activeChannel.id, userKey]);

  const myMembership = memberships.find((m) => m.userKey === userKey) || null;
  const isBarred = myMembership?.status === "barred";
  const isApprovedForActiveChannel =
    myMembership?.status === "approved" && myMembership?.channelId === activeChannel.id;
  const isPendingForActiveChannel =
    myMembership?.status === "pending" && myMembership?.channelId === activeChannel.id;
  const hasOtherActiveGroup =
    myMembership &&
    myMembership.channelId !== activeChannel.id &&
    (myMembership.status === "approved" || myMembership.status === "pending");

  const pendingRequests = memberships.filter((m) => m.status === "pending");
  const flaggedOrBarredCount = memberships.filter(
    (m) => m.status === "barred" || m.violationCount > 0
  ).length;

  const handleRequestJoinGroup = async (e: React.FormEvent) => {
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
          channelId: activeChannel.id,
          classGrade: selectedGrade,
          requestNote:
            requestNote.trim() ||
            `Hi Admin, requesting permission to join ${activeChannel.name} (Class ${selectedGrade}).`,
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
      setGpToast(
        `Request sent to join ${activeChannel.name}! Waiting for Admin approval before you can enter the chat.`
      );
      setTimeout(() => setGpToast(null), 4500);
    } catch {
      setErrorAlert("Network error while sending join request.");
    } finally {
      setRequestingJoin(false);
    }
  };

  const handleAdminAction = async (params: {
    targetUserKey: string;
    targetName: string;
    targetUsername: string;
    targetAvatar: string;
    targetChannelId: string;
    targetClassGrade: ClassGrade;
    action: "approve" | "reject" | "bar" | "unbar";
    reason?: string;
  }) => {
    try {
      const res = await fetch("/api/discussions/membership", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userKey: params.targetUserKey,
          userName: params.targetName,
          userUsername: params.targetUsername,
          userAvatar: params.targetAvatar,
          channelId: params.targetChannelId,
          classGrade: params.targetClassGrade,
          action: params.action,
          reason: params.reason,
        }),
      });
      const data = await res.json();
      if (data?.ok && data.membership) {
        setMemberships((prev) => {
          const next = mergeMembershipsList(prev, [data.membership]);
          saveLocalMemberships(next);
          return next;
        });

        const actionLabel =
          params.action === "approve"
            ? `✅ Approved ${params.targetName} to enter #${params.targetChannelId}!`
            : params.action === "bar"
            ? `🚫 Barred ${params.targetName} from all Study Groups.`
            : params.action === "unbar"
            ? `♻️ Restored ${params.targetName}'s group access.`
            : `Declined ${params.targetName}'s join request.`;

        setGpToast(actionLabel);
        setTimeout(() => setGpToast(null), 4000);
      }
    } catch {
      setErrorAlert("Could not complete Admin moderation action.");
    }
  };

  const channelMessages = messages.filter((m) => {
    if (m.channelId !== activeChannel.id) return false;
    if (selectedTopic !== "All Topics") {
      return (
        m.chapterTag.toLowerCase().includes(selectedTopic.toLowerCase()) ||
        selectedTopic.toLowerCase().includes(m.chapterTag.toLowerCase())
      );
    }
    return true;
  });

  const rootMessages = channelMessages.filter((m) => !m.parentId);
  const getReplies = (parentId: string) =>
    messages.filter((m) => m.parentId === parentId);

  const handleInsertSymbol = (sym: string) => {
    setInputText((prev) => `${prev}${sym}`);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorAlert(null);
    if (!inputText.trim() || submitting) return;

    const topicToUse = replyingTo
      ? replyingTo.chapterTag
      : composeTopic || availableTopics[1] || "General";

    setSubmitting(true);
    try {
      const res = await fetch("/api/discussions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          channelId: activeChannel.id,
          classGrade: selectedGrade,
          chapterTag: topicToUse,
          questionRef: null,
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
        setErrorAlert(data.error || "Could not post message.");
        setSubmitting(false);
        return;
      }

      const added: DiscussionMessage[] = [];
      if (data.userMessage) added.push(data.userMessage);
      if (data.botMessage) added.push(data.botMessage);

      setMessages((prev) => {
        const next = [...prev, ...added];
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

    if (msg.senderRole === "student") {
      setGpToast(`Marked ${msg.senderName}'s explanation as Helpful (+5 GP awarded!)`);
      setTimeout(() => setGpToast(null), 3500);
    }

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
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="game-card p-5 sm:p-6 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-slate-800">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/40 px-3 py-1 text-xs font-extrabold text-indigo-300">
                <Lock className="h-3.5 w-3.5" />
                <span>1 Group Per Student • Admin Approval Required</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/20 border border-rose-400/40 px-2.5 py-1 text-[11px] font-extrabold text-rose-300">
                <ShieldAlert className="h-3.5 w-3.5" />
                <span>Zero-Tolerance No Foul Language Policy</span>
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              VidyaLila Study Lounge &amp; Doubt Hub 💬
            </h1>
            <p className="text-xs sm:text-sm font-medium text-slate-300 max-w-3xl">
              Students can join <strong className="text-amber-300">only one Study Group at a time</strong> after Admin approval. Collaborate respectfully in Hinglish or ask{" "}
              <strong className="text-indigo-300">@VidyaBot</strong> for Socratic hints — foul language strictly results in being{" "}
              <strong className="text-rose-300">barred</strong> by the Admin.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => setShowAdminPanel((prev) => !prev)}
              className={`rounded-2xl px-4 py-2.5 text-xs font-extrabold flex items-center gap-2 border transition shadow-sm ${
                showAdminPanel
                  ? "bg-amber-400 text-slate-950 border-amber-300"
                  : "bg-slate-800 hover:bg-slate-700 text-amber-300 border-slate-700"
              }`}
            >
              <ShieldCheck className="h-4 w-4" />
              <span>
                Admin Approvals &amp; Bar Control ({pendingRequests.length} Pending
                {flaggedOrBarredCount > 0 ? ` • ${flaggedOrBarredCount} Flagged` : ""})
              </span>
            </button>

            <div className="rounded-2xl bg-slate-800/90 border border-slate-700 px-3.5 py-2 text-xs space-y-0.5 hidden sm:block">
              <div className="flex items-center gap-1.5 font-extrabold text-emerald-400">
                <Database className="h-3.5 w-3.5" />
                <span>Supabase DB Storage</span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium">
                <code className="text-indigo-300">study_group_memberships</code> &amp;{" "}
                <code className="text-indigo-300">discussion_messages</code>
              </p>
            </div>
          </div>
        </div>
      </div>

      {gpToast && (
        <div className="rounded-2xl bg-emerald-50 border-2 border-emerald-300 px-4 py-3 flex items-center justify-between text-xs sm:text-sm font-extrabold text-emerald-900 shadow-sm">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-emerald-600" />
            <span>{gpToast}</span>
          </div>
          <button onClick={() => setGpToast(null)}>
            <X className="h-4 w-4 text-emerald-700" />
          </button>
        </div>
      )}

      {/* ADMIN GROUP REQUEST APPROVALS & BARRING MANAGER */}
      {showAdminPanel && (
        <div className="game-card p-5 sm:p-6 border-2 border-amber-300 bg-gradient-to-br from-amber-50/70 via-white to-slate-50 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-200 pb-3.5">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-md bg-amber-500 px-2 py-0.5 text-[10px] font-black uppercase text-slate-950">
                  Admin Control Panel
                </span>
                <h2 className="text-base sm:text-lg font-extrabold text-slate-900">
                  Group Join Requests &amp; Member Barring (No Foul Language Enforcement)
                </h2>
              </div>
              <p className="text-xs font-medium text-slate-600 mt-0.5">
                Approve students so they can enter their single requested group and start chatting, or bar any user who violates the no-foul-language rule.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowAdminPanel(false)}
              className="rounded-xl bg-slate-200/80 hover:bg-slate-300 px-3 py-1.5 text-xs font-extrabold text-slate-700"
            >
              Close Panel
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Column 1: Pending Join Requests */}
            <div className="rounded-2xl border-2 border-slate-200 bg-white p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-amber-600" />
                  <span>Pending Group Join Requests ({pendingRequests.length})</span>
                </h3>
                <span className="text-[11px] font-bold text-slate-500">
                  1 Group / User Rule
                </span>
              </div>

              {pendingRequests.length === 0 ? (
                <div className="rounded-xl bg-slate-50 border border-dashed border-slate-200 p-5 text-center text-xs font-semibold text-slate-500">
                  No pending join requests right now. When a student clicks &ldquo;Request to Join&rdquo;, it appears here for your approval!
                </div>
              ) : (
                <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                  {pendingRequests.map((reqItem) => {
                    const isCurrentUser = reqItem.userKey === userKey;
                    return (
                      <div
                        key={reqItem.userKey}
                        className={`rounded-xl border p-3.5 space-y-2 ${
                          isCurrentUser
                            ? "border-indigo-300 bg-indigo-50/60"
                            : "border-slate-200 bg-slate-50/70"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2.5">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white border border-slate-200 text-base">
                              {renderUserAvatar(reqItem.userAvatar)}
                            </span>
                            <div>
                              <div className="flex flex-wrap items-center gap-1.5">
                                <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                                  {reqItem.userName}
                                </span>
                                <span className="text-[11px] font-semibold text-slate-400">
                                  {reqItem.userUsername}
                                </span>
                                {isCurrentUser && (
                                  <span className="rounded bg-indigo-600 px-1.5 py-0.5 text-[9px] font-black uppercase text-white">
                                    You
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-2 mt-0.5">
                                <span className="rounded-md bg-amber-100 border border-amber-300 px-2 py-0.5 text-[10px] font-black text-amber-900">
                                  Requested: #{reqItem.channelId}
                                </span>
                                <span className="text-[10px] font-semibold text-slate-400">
                                  {formatRelativeTime(reqItem.requestedAt)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {reqItem.requestNote && (
                          <p className="text-xs font-medium text-slate-600 bg-white rounded-lg px-2.5 py-1.5 border border-slate-200/80">
                            &ldquo;{reqItem.requestNote}&rdquo;
                          </p>
                        )}

                        <div className="flex flex-wrap items-center gap-2 pt-1">
                          <button
                            type="button"
                            onClick={() =>
                              handleAdminAction({
                                targetUserKey: reqItem.userKey,
                                targetName: reqItem.userName,
                                targetUsername: reqItem.userUsername,
                                targetAvatar: reqItem.userAvatar,
                                targetChannelId: reqItem.channelId,
                                targetClassGrade: reqItem.classGrade,
                                action: "approve",
                              })
                            }
                            className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 text-xs font-extrabold text-white shadow-2xs transition"
                          >
                            <UserCheck className="h-3.5 w-3.5" />
                            <span>Approve &amp; Grant Entry</span>
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              handleAdminAction({
                                targetUserKey: reqItem.userKey,
                                targetName: reqItem.userName,
                                targetUsername: reqItem.userUsername,
                                targetAvatar: reqItem.userAvatar,
                                targetChannelId: reqItem.channelId,
                                targetClassGrade: reqItem.classGrade,
                                action: "reject",
                              })
                            }
                            className="inline-flex items-center gap-1.5 rounded-xl bg-slate-200 hover:bg-slate-300 px-3 py-1.5 text-xs font-extrabold text-slate-700 transition"
                          >
                            <UserX className="h-3.5 w-3.5" />
                            <span>Reject</span>
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              handleAdminAction({
                                targetUserKey: reqItem.userKey,
                                targetName: reqItem.userName,
                                targetUsername: reqItem.userUsername,
                                targetAvatar: reqItem.userAvatar,
                                targetChannelId: reqItem.channelId,
                                targetClassGrade: reqItem.classGrade,
                                action: "bar",
                                reason:
                                  "Barred by Admin for violating the no-foul-language / community conduct rules.",
                              })
                            }
                            className="inline-flex items-center gap-1.5 rounded-xl bg-rose-100 hover:bg-rose-200 border border-rose-300 px-2.5 py-1.5 text-xs font-extrabold text-rose-800 transition ml-auto"
                          >
                            <Ban className="h-3.5 w-3.5" />
                            <span>Bar User</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Column 2: Approved Members, Foul Language Violations & Barred Users */}
            <div className="rounded-2xl border-2 border-slate-200 bg-white p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 flex items-center gap-2">
                  <ShieldAlert className="h-4 w-4 text-rose-600" />
                  <span>Active Members, Foul-Language Strikes &amp; Barred List</span>
                </h3>
                <span className="text-[11px] font-bold text-slate-500">
                  Right to Bar
                </span>
              </div>

              <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                {memberships
                  .filter((m) => m.status !== "pending")
                  .map((mem) => {
                    const isMemBarred = mem.status === "barred";
                    return (
                      <div
                        key={mem.userKey}
                        className={`rounded-xl border p-3 flex flex-wrap items-center justify-between gap-2 ${
                          isMemBarred
                            ? "border-rose-300 bg-rose-50/70"
                            : mem.violationCount > 0
                            ? "border-amber-300 bg-amber-50/60"
                            : "border-slate-200 bg-slate-50/60"
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white border border-slate-200 text-xs">
                              {renderUserAvatar(mem.userAvatar)}
                            </span>
                            <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                              {mem.userName}
                            </span>
                            <span className="text-[11px] font-semibold text-slate-400">
                              {mem.userUsername}
                            </span>
                            <span
                              className={`rounded-md px-2 py-0.5 text-[10px] font-black uppercase ${
                                isMemBarred
                                  ? "bg-rose-600 text-white"
                                  : mem.status === "approved"
                                  ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                                  : "bg-slate-200 text-slate-700"
                              }`}
                            >
                              {mem.status === "approved"
                                ? `✓ #${mem.channelId}`
                                : mem.status}
                            </span>
                          </div>

                          {mem.violationCount > 0 && (
                            <p className="text-[11px] font-extrabold text-rose-700">
                              ⚠️ {mem.violationCount} Foul-Language Strike(s):{" "}
                              {mem.lastViolationReason || "Profanity blocked by filter"}
                            </p>
                          )}
                          {isMemBarred && mem.barredReason && (
                            <p className="text-[11px] font-semibold text-rose-800">
                              Reason: {mem.barredReason}
                            </p>
                          )}
                        </div>

                        <div>
                          {isMemBarred ? (
                            <button
                              type="button"
                              onClick={() =>
                                handleAdminAction({
                                  targetUserKey: mem.userKey,
                                  targetName: mem.userName,
                                  targetUsername: mem.userUsername,
                                  targetAvatar: mem.userAvatar,
                                  targetChannelId: mem.channelId,
                                  targetClassGrade: mem.classGrade,
                                  action: "unbar",
                                })
                              }
                              className="inline-flex items-center gap-1 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 text-xs font-extrabold text-white transition"
                            >
                              <RotateCcw className="h-3.5 w-3.5" />
                              <span>Unbar &amp; Approve</span>
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() =>
                                handleAdminAction({
                                  targetUserKey: mem.userKey,
                                  targetName: mem.userName,
                                  targetUsername: mem.userUsername,
                                  targetAvatar: mem.userAvatar,
                                  targetChannelId: mem.channelId,
                                  targetClassGrade: mem.classGrade,
                                  action: "bar",
                                  reason:
                                    "Barred by Admin for violating the no-foul-language / community conduct policy.",
                                })
                              }
                              className="inline-flex items-center gap-1 rounded-xl bg-rose-600 hover:bg-rose-700 px-3 py-1.5 text-xs font-extrabold text-white transition"
                            >
                              <Ban className="h-3.5 w-3.5" />
                              <span>Bar User</span>
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Discord-Style Layout: Left Channels Sidebar + Center Chat Stream */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT SIDEBAR: Class Channels (1 Group At A Time) & Membership Card */}
        <div className="lg:col-span-3 space-y-4">
          <div className="game-card p-4 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                Study Groups (Max 1)
              </span>
              <span className="rounded-md bg-indigo-50 px-2 py-0.5 text-[11px] font-black text-indigo-700">
                1 Group / User
              </span>
            </div>

            <div className="space-y-1.5">
              {STUDY_CHANNELS.map((ch) => {
                const isLocked = ch.classGrade === 11 || ch.classGrade === 12;
                const isSelected = ch.classGrade === selectedGrade;
                const isMyJoinedGroup =
                  myMembership?.channelId === ch.id && myMembership?.status === "approved";
                const isMyPendingGroup =
                  myMembership?.channelId === ch.id && myMembership?.status === "pending";

                return (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => {
                      if (isLocked) {
                        setErrorAlert(
                          `Class ${ch.classGrade} Doubt Room is coming soon! Discussion groups are currently active for Class 9 and 10.`
                        );
                        return;
                      }
                      setSelectedGrade(ch.classGrade);
                      setSelectedTopic("All Topics");
                      setReplyingTo(null);
                      setErrorAlert(null);
                    }}
                    className={`w-full flex items-center justify-between rounded-2xl px-3.5 py-2.5 text-left text-xs sm:text-sm font-extrabold transition ${
                      isLocked
                        ? "bg-slate-100 text-slate-400 opacity-60 hover:opacity-85 cursor-pointer"
                        : isSelected
                        ? "bg-slate-900 text-white shadow-sm"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span>{isLocked ? "🔒" : ch.badgeEmoji}</span>
                      <span className="truncate">{ch.name}</span>
                    </div>

                    {isLocked ? (
                      <span className="rounded-lg bg-amber-100 border border-amber-300 px-2 py-0.5 text-[10px] font-black text-amber-900 flex items-center gap-1">
                        <Lock className="h-2.5 w-2.5" />
                        Soon
                      </span>
                    ) : isBarred ? (
                      <span className="rounded-lg bg-rose-600 px-2 py-0.5 text-[10px] font-black text-white">
                        Barred
                      </span>
                    ) : isMyJoinedGroup ? (
                      <span className="rounded-lg bg-emerald-500 px-2 py-0.5 text-[10px] font-black text-white">
                        ✓ Joined
                      </span>
                    ) : isMyPendingGroup ? (
                      <span className="rounded-lg bg-amber-400 px-2 py-0.5 text-[10px] font-black text-slate-950">
                        ⏳ Pending
                      </span>
                    ) : (
                      <span
                        className={`rounded-lg px-2 py-0.5 text-[10px] font-black flex items-center gap-1 ${
                          isSelected
                            ? "bg-slate-700 text-slate-300"
                            : "bg-slate-200/80 text-slate-600"
                        }`}
                      >
                        <Lock className="h-2.5 w-2.5" />
                        <span>Join</span>
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Student's Single-Group Membership Summary Card */}
          <div className="game-card p-4 bg-gradient-to-br from-indigo-50/90 via-white to-violet-50/80 border-indigo-200 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-900">
                Your Group Permission
              </span>
              <span
                className={`rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase ${
                  isBarred
                    ? "bg-rose-600 text-white"
                    : myMembership?.status === "approved"
                    ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                    : myMembership?.status === "pending"
                    ? "bg-amber-100 text-amber-800 border border-amber-300"
                    : "bg-slate-200 text-slate-700"
                }`}
              >
                {isBarred
                  ? "Barred"
                  : myMembership?.status === "approved"
                  ? "Approved"
                  : myMembership?.status === "pending"
                  ? "Pending Approval"
                  : "No Group Yet"}
              </span>
            </div>

            {myMembership ? (
              <div className="text-xs font-medium text-slate-700 space-y-1">
                <div>
                  Active Group: <strong className="text-indigo-700">#{myMembership.channelId}</strong>
                </div>
                {myMembership.violationCount > 0 && (
                  <div className="rounded-lg bg-rose-100 border border-rose-300 px-2.5 py-1.5 text-[11px] font-bold text-rose-800">
                    ⚠️ Foul-Language Strikes: {myMembership.violationCount} (Admin may bar your account)
                  </div>
                )}
              </div>
            ) : (
              <p className="text-xs font-medium text-slate-600">
                You haven&apos;t joined a Study Group yet. Select your class channel and send a join request for Admin approval!
              </p>
            )}

            <div className="rounded-xl bg-white/90 border border-indigo-100 p-2.5 text-[11px] font-semibold text-slate-600 space-y-1">
              <div className="font-extrabold text-indigo-900">Group Rules:</div>
              <div>• Only <strong>1 group</strong> can be joined at a time</div>
              <div>• Admin approval required before chatting</div>
              <div>• <strong>No foul language</strong> (Admin can bar violators)</div>
            </div>
          </div>
        </div>

        {/* CENTER STREAM: Either Request/Approval/Barred Gate OR Unlocked Group Chat */}
        <div className="lg:col-span-9 game-card overflow-hidden flex flex-col min-h-[680px]">
          {/* Channel Header & Topic Filter Pills */}
          <div className="border-b-2 border-slate-200 bg-white p-4 sm:p-5 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 font-black">
                  <Hash className="h-5 w-5" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-base sm:text-lg font-extrabold text-slate-900">
                      {activeChannel.title} ({activeChannel.name})
                    </h2>
                    {isApprovedForActiveChannel ? (
                      <span className="rounded-full bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 text-[11px] font-black text-emerald-800">
                        ✓ Approved Member
                      </span>
                    ) : isPendingForActiveChannel ? (
                      <span className="rounded-full bg-amber-100 border border-amber-300 px-2.5 py-0.5 text-[11px] font-black text-amber-800">
                        ⏳ Pending Admin Approval
                      </span>
                    ) : (
                      <span className="rounded-full bg-slate-100 border border-slate-300 px-2.5 py-0.5 text-[11px] font-black text-slate-700">
                        🔒 Join Request Required
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-medium text-slate-500">
                    {activeChannel.description}
                  </p>
                </div>
              </div>

              <Link
                href="/"
                className="btn-3d-white px-3.5 py-2 text-xs inline-flex items-center gap-1.5"
              >
                <BookOpen className="h-3.5 w-3.5 text-indigo-600" />
                <span>Explore Class {selectedGrade} Chapters</span>
              </Link>
            </div>

            {isApprovedForActiveChannel && (
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                {availableTopics.map((topic) => {
                  const active = selectedTopic === topic;
                  return (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setSelectedTopic(topic)}
                      className={`rounded-xl px-3 py-1.5 text-xs font-extrabold whitespace-nowrap transition ${
                        active
                          ? "bg-indigo-600 text-white shadow-2xs"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {topic === "All Topics" ? "🌟 All Topics" : `#${topic}`}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* GATE 1: USER IS BARRED BY ADMIN */}
          {isBarred ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-rose-50/40 space-y-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-rose-100 border-2 border-rose-300 text-rose-600 shadow-xs">
                <Ban className="h-10 w-10" />
              </div>
              <div className="max-w-lg space-y-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-600 px-3 py-1 text-xs font-black uppercase text-white">
                  Access Barred by Admin
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  You Have Been Barred from Study Groups
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 leading-relaxed">
                  {myMembership?.barredReason ||
                    "Using foul or disrespectful language is strictly prohibited in VidyaLila Study Groups. The Admin has barred your account from entering or chatting in any group."}
                </p>
              </div>
            </div>
          ) : !isApprovedForActiveChannel ? (
            /* GATE 2: USER HAS NOT JOINED THIS GROUP YET OR IS WAITING FOR ADMIN APPROVAL */
            <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-10 bg-slate-50/70">
              <div className="w-full max-w-xl rounded-3xl border-2 border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-5">
                {isPendingForActiveChannel ? (
                  <>
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 border-2 border-amber-300 text-amber-700 shrink-0">
                        <Clock className="h-7 w-7" />
                      </div>
                      <div>
                        <span className="inline-flex items-center gap-1 rounded-md bg-amber-100 border border-amber-300 px-2.5 py-0.5 text-[11px] font-black uppercase text-amber-900">
                          Step 2 of 2 • Awaiting Admin Approval
                        </span>
                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5">
                          Your Request to Join {activeChannel.name} is Pending
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                      You have requested to join <strong>{activeChannel.name}</strong> (your single active group). Once the Admin approves your request, you will immediately get permission to enter the group and start chatting!
                    </p>

                    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 text-xs space-y-1.5">
                      <div className="font-extrabold text-slate-900">Request Summary:</div>
                      <div className="text-slate-600">
                        • <strong>Student:</strong> {profile.name} ({profile.username})
                      </div>
                      <div className="text-slate-600">
                        • <strong>Requested Group:</strong> {activeChannel.name} (Class {selectedGrade})
                      </div>
                      <div className="text-slate-600">
                        • <strong>Note:</strong> &ldquo;{myMembership?.requestNote}&rdquo;
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs font-bold text-slate-500">
                        Are you the site owner / Admin?
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setShowAdminPanel(true);
                          handleAdminAction({
                            targetUserKey: userKey,
                            targetName: profile.name,
                            targetUsername: profile.username,
                            targetAvatar: profile.avatar,
                            targetChannelId: activeChannel.id,
                            targetClassGrade: selectedGrade,
                            action: "approve",
                          });
                        }}
                        className="btn-3d-indigo px-4 py-2.5 text-xs inline-flex items-center gap-2"
                      >
                        <UserCheck className="h-4 w-4" />
                        <span>Approve as Admin Now</span>
                      </button>
                    </div>
                  </>
                ) : (
                  <form onSubmit={handleRequestJoinGroup} className="space-y-4">
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 border-2 border-indigo-200 text-indigo-700 shrink-0">
                        <Lock className="h-7 w-7" />
                      </div>
                      <div>
                        <span className="inline-flex items-center gap-1 rounded-md bg-indigo-100 border border-indigo-200 px-2.5 py-0.5 text-[11px] font-black uppercase text-indigo-800">
                          Single-Group Access Gate
                        </span>
                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5">
                          Request to Join {activeChannel.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                      At a time, you can only join <strong>one Study Group</strong>. Before entering{" "}
                      <strong>{activeChannel.name}</strong>, send a request below. Once the Admin approves it, you will get permission to enter the group and start chatting with peers &amp;{" "}
                      <strong>@VidyaBot</strong>!
                    </p>

                    {hasOtherActiveGroup && (
                      <div className="rounded-2xl bg-amber-50 border-2 border-amber-200 p-3.5 text-xs font-bold text-amber-900 space-y-1">
                        <div>
                          ⚠️ Single-Group Limit: You are currently{" "}
                          <span className="underline">{myMembership?.status}</span> in{" "}
                          <strong>#{myMembership?.channelId}</strong>.
                        </div>
                        <p className="font-medium text-amber-800">
                          Sending a request for <strong>{activeChannel.name}</strong> will leave{" "}
                          <strong>#{myMembership?.channelId}</strong> and wait for Admin approval for this group.
                        </p>
                      </div>
                    )}

                    <div className="rounded-2xl bg-rose-50/80 border border-rose-200 p-3.5 text-xs font-semibold text-rose-900 space-y-1">
                      <div className="font-extrabold flex items-center gap-1.5 text-rose-800">
                        <ShieldAlert className="h-4 w-4 text-rose-600 shrink-0" />
                        <span>Strict No-Foul-Language Policy:</span>
                      </div>
                      <p>
                        No foul, abusive, or disrespectful language must be used in the chat. Otherwise, the Admin holds the right to permanently <strong>bar you</strong> from the Study Groups.
                      </p>
                    </div>

                    {errorAlert && (
                      <div className="rounded-xl bg-rose-100 border border-rose-300 px-3.5 py-2.5 text-xs font-bold text-rose-800">
                        {errorAlert}
                      </div>
                    )}

                    <div className="space-y-1.5">
                      <label className="block text-xs font-extrabold text-slate-700">
                        Short Note for Admin Approval
                      </label>
                      <input
                        type="text"
                        value={requestNote}
                        onChange={(e) => setRequestNote(e.target.value)}
                        placeholder={`Hi Admin, I'm studying Class ${selectedGrade} chapters and want to join ${activeChannel.name}...`}
                        className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-900 focus:border-indigo-500 focus:bg-white focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={requestingJoin}
                      className="btn-3d-indigo w-full py-3.5 text-xs sm:text-sm flex items-center justify-center gap-2"
                    >
                      <UserPlus className="h-4 w-4" />
                      <span>
                        {requestingJoin
                          ? "Sending Join Request..."
                          : hasOtherActiveGroup
                          ? `Switch My Single Group & Request ${activeChannel.name}`
                          : `Send Request to Join ${activeChannel.name}`}
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          ) : (
            /* GATE 3: APPROVED FOR THIS GROUP — FULL CHAT & COMPOSER UNLOCKED */
            <>
              {/* Chat Messages Feed */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-slate-50/60 max-h-[540px]">
                {rootMessages.length === 0 ? (
                  <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-8 text-center space-y-2.5 my-6">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-2xl">
                      💬
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900">
                      No doubts posted under {selectedTopic} in Class {selectedGrade} yet!
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-600 max-w-md mx-auto">
                      Be the first to ask a conceptual question below.{" "}
                      <strong>@VidyaBot</strong> is ready to jump in with a Hinglish hint!
                    </p>
                  </div>
                ) : (
                  rootMessages.map((msg) => {
                    const replies = getReplies(msg.id);
                    const isBot = msg.senderRole === "bot";

                    return (
                      <div key={msg.id} className="space-y-3">
                        {/* Root Doubt Card */}
                        <div
                          className={`rounded-2xl border-2 p-4 sm:p-5 shadow-2xs transition ${
                            isBot
                              ? "border-indigo-300 bg-gradient-to-br from-indigo-50/90 via-white to-violet-50/60"
                              : "border-slate-200 bg-white"
                          }`}
                        >
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <div className="flex items-center gap-2.5">
                              <span
                                className={`flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl text-lg border ${
                                  isBot
                                    ? "bg-indigo-600 text-white border-indigo-700"
                                    : "bg-slate-100 border-slate-200"
                                }`}
                              >
                                {renderUserAvatar(msg.senderAvatar)}
                              </span>
                              <div>
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="text-sm font-extrabold text-slate-900">
                                    {msg.senderName}
                                  </span>
                                  <span className="text-xs font-semibold text-slate-400">
                                    {msg.senderUsername}
                                  </span>
                                  {isBot && (
                                    <span className="inline-flex items-center gap-1 rounded-md bg-indigo-600 px-2 py-0.5 text-[10px] font-black uppercase text-white">
                                      <Sparkles className="h-2.5 w-2.5" /> AI Study Buddy
                                    </span>
                                  )}
                                  <span className="text-xs font-semibold text-slate-400">
                                    • {formatRelativeTime(msg.createdAt)}
                                  </span>
                                </div>
                                <div className="mt-0.5 flex items-center gap-2">
                                  <span className="inline-flex items-center rounded-md bg-indigo-50 border border-indigo-200/80 px-2 py-0.5 text-[11px] font-extrabold text-indigo-700">
                                    #{msg.chapterTag}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              {msg.isHelpfulSolution && (
                                <span className="inline-flex items-center gap-1 rounded-xl bg-emerald-100 border border-emerald-300 px-2.5 py-1 text-xs font-black text-emerald-800">
                                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                                  <span>Helpful Solution (+5 GP)</span>
                                </span>
                              )}

                              {!isBot && showAdminPanel && (
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleAdminAction({
                                      targetUserKey: msg.senderUsername || msg.senderName,
                                      targetName: msg.senderName,
                                      targetUsername: msg.senderUsername,
                                      targetAvatar: msg.senderAvatar,
                                      targetChannelId: msg.channelId,
                                      targetClassGrade: msg.classGrade,
                                      action: "bar",
                                      reason:
                                        "Barred by Admin from chat stream for violating conduct rules.",
                                    })
                                  }
                                  className="inline-flex items-center gap-1 rounded-xl bg-rose-100 hover:bg-rose-200 border border-rose-300 px-2.5 py-1 text-[11px] font-extrabold text-rose-800 transition"
                                  title="Bar this student from all Study Groups"
                                >
                                  <Ban className="h-3 w-3" />
                                  <span>Bar User</span>
                                </button>
                              )}
                            </div>
                          </div>

                          {/* Linked Unit/Question Reference Box */}
                          {msg.questionRef?.questionPrompt && (
                            <div className="mt-3 rounded-xl bg-slate-100/90 border border-slate-200 p-3 text-xs space-y-1">
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                <span className="font-black text-indigo-700 uppercase tracking-wider text-[11px]">
                                  📌 {msg.questionRef.moduleTitle || msg.chapterTag} •{" "}
                                  {msg.questionRef.unitTitle}
                                  {msg.questionRef.questionNumber
                                    ? ` (Q#${msg.questionRef.questionNumber})`
                                    : ""}
                                </span>
                                {msg.questionRef.moduleSlug && (
                                  <Link
                                    href={`/trails/${msg.questionRef.moduleSlug}`}
                                    className="text-[11px] font-extrabold text-indigo-600 underline hover:text-indigo-800"
                                  >
                                    View in Chapter →
                                  </Link>
                                )}
                              </div>
                              <p className="font-semibold text-slate-800">
                                {msg.questionRef.questionPrompt}
                              </p>
                            </div>
                          )}

                          <div className="mt-3 text-slate-800 font-medium">
                            {renderBotOrChatMarkdown(msg.content)}
                          </div>

                          <div className="mt-3.5 flex flex-wrap items-center gap-3 pt-2.5 border-t border-slate-100 text-xs font-bold">
                            <button
                              type="button"
                              onClick={() => handleUpvote(msg)}
                              className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200/80 px-3 py-1.5 text-slate-700 transition"
                            >
                              <ThumbsUp className="h-3.5 w-3.5" />
                              <span>Helpful ({msg.upvotes})</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => setReplyingTo(msg)}
                              className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 border border-slate-200/80 px-3 py-1.5 text-slate-700 transition"
                            >
                              <MessageSquare className="h-3.5 w-3.5" />
                              <span>Reply ({replies.length})</span>
                            </button>
                          </div>
                        </div>

                        {/* Threaded Replies */}
                        {replies.length > 0 && (
                          <div className="pl-5 sm:pl-8 space-y-2.5 border-l-2 border-indigo-200 ml-4">
                            {replies.map((rep) => {
                              const isRepBot = rep.senderRole === "bot";
                              return (
                                <div
                                  key={rep.id}
                                  className={`rounded-2xl border-2 p-4 shadow-2xs ${
                                    isRepBot
                                      ? "border-indigo-300 bg-gradient-to-br from-indigo-50/90 via-white to-violet-50/70"
                                      : "border-slate-200 bg-white"
                                  }`}
                                >
                                  <div className="flex flex-wrap items-center justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                      <span
                                        className={`flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-xl text-base ${
                                          isRepBot
                                            ? "bg-indigo-600 text-white"
                                            : "bg-slate-100 border border-slate-200"
                                        }`}
                                      >
                                        {renderUserAvatar(rep.senderAvatar)}
                                      </span>
                                      <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                                        {rep.senderName}
                                      </span>
                                      {isRepBot && (
                                        <span className="inline-flex items-center gap-1 rounded-md bg-indigo-600 px-2 py-0.5 text-[10px] font-black uppercase text-white">
                                          <Bot className="h-3 w-3" /> Socratic Hint
                                        </span>
                                      )}
                                      {rep.isHelpfulSolution && !isRepBot && (
                                        <span className="inline-flex items-center gap-1 rounded-md bg-emerald-100 border border-emerald-300 px-2 py-0.5 text-[10px] font-black text-emerald-800">
                                          <CheckCircle2 className="h-3 w-3 text-emerald-600" /> +5 GP Helpful
                                        </span>
                                      )}
                                      <span className="text-[11px] font-semibold text-slate-400">
                                        • {formatRelativeTime(rep.createdAt)}
                                      </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                      <button
                                        type="button"
                                        onClick={() => handleUpvote(rep)}
                                        className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200 px-2.5 py-1 text-xs font-bold text-slate-600 transition"
                                      >
                                        <ThumbsUp className="h-3 w-3" />
                                        <span>Helpful ({rep.upvotes})</span>
                                      </button>

                                      {!isRepBot && showAdminPanel && (
                                        <button
                                          type="button"
                                          onClick={() =>
                                            handleAdminAction({
                                              targetUserKey: rep.senderUsername || rep.senderName,
                                              targetName: rep.senderName,
                                              targetUsername: rep.senderUsername,
                                              targetAvatar: rep.senderAvatar,
                                              targetChannelId: rep.channelId,
                                              targetClassGrade: rep.classGrade,
                                              action: "bar",
                                              reason:
                                                "Barred by Admin from chat stream for violating conduct rules.",
                                            })
                                          }
                                          className="inline-flex items-center gap-1 rounded-xl bg-rose-100 hover:bg-rose-200 border border-rose-300 px-2 py-1 text-[11px] font-extrabold text-rose-800 transition"
                                        >
                                          <Ban className="h-3 w-3" />
                                          <span>Bar</span>
                                        </button>
                                      )}
                                    </div>
                                  </div>

                                  <div className="mt-2.5 text-slate-800 font-medium">
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

              {/* Bottom Message Composer */}
              <form
                onSubmit={handleSendMessage}
                className="border-t-2 border-slate-200 bg-white p-4 sm:p-5 space-y-3"
              >
                {errorAlert && (
                  <div className="flex items-center justify-between gap-2 rounded-xl bg-rose-50 border-2 border-rose-300 px-3.5 py-2.5 text-xs font-bold text-rose-800">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="h-4 w-4 text-rose-600 shrink-0" />
                      <span>{errorAlert}</span>
                    </div>
                    <button type="button" onClick={() => setErrorAlert(null)}>
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}

                {replyingTo && (
                  <div className="flex items-center justify-between rounded-xl bg-indigo-50 border border-indigo-200 px-3.5 py-2 text-xs font-bold text-indigo-900">
                    <span className="flex items-center gap-1.5 truncate">
                      <CornerDownRight className="h-4 w-4 shrink-0 text-indigo-600" />
                      Replying to <strong>{replyingTo.senderName}</strong>:{" "}
                      <span className="font-medium text-indigo-700 truncate">
                        {replyingTo.content.slice(0, 70)}...
                      </span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setReplyingTo(null)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}

                {/* Topic Tag Selector + Quick Math Symbols + @VidyaBot Toggle */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    {!replyingTo && (
                      <select
                        value={composeTopic}
                        onChange={(e) => setComposeTopic(e.target.value)}
                        className="rounded-xl border border-slate-300 bg-slate-50 px-2.5 py-1.5 text-xs font-extrabold text-slate-800 focus:border-indigo-500 focus:outline-none"
                      >
                        {availableTopics
                          .filter((t) => t !== "All Topics")
                          .map((t) => (
                            <option key={t} value={t}>
                              Topic: #{t}
                            </option>
                          ))}
                      </select>
                    )}

                    <div className="flex items-center gap-1">
                      {QUICK_MATH_SYMBOLS.map((sym) => (
                        <button
                          key={sym.label}
                          type="button"
                          onClick={() => handleInsertSymbol(sym.label)}
                          title={`Insert ${sym.title} (${sym.label})`}
                          className="h-7 w-7 rounded-lg bg-slate-100 hover:bg-indigo-100 hover:text-indigo-800 border border-slate-200 text-xs font-extrabold text-slate-700 transition"
                        >
                          {sym.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setAskBot(!askBot)}
                    className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-extrabold border transition ${
                      askBot
                        ? "bg-indigo-600 text-white border-indigo-700 shadow-2xs"
                        : "bg-slate-100 text-slate-600 border-slate-200"
                    }`}
                  >
                    <Bot className="h-3.5 w-3.5" />
                    <span>{askBot ? "@VidyaBot Hint: ON" : "@VidyaBot: OFF"}</span>
                  </button>
                </div>

                <div className="flex items-end gap-2.5">
                  <textarea
                    rows={2}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder={
                      replyingTo
                        ? `Write a respectful Hinglish explanation for ${replyingTo.senderName} (+5 GP when upvoted)...`
                        : `Ask a Class ${selectedGrade} doubt in Hinglish or tag @VidyaBot (No foul language allowed)...`
                    }
                    className="flex-1 rounded-2xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-900 focus:border-indigo-500 focus:bg-white focus:outline-none resize-none"
                  />
                  <button
                    type="submit"
                    disabled={submitting || !inputText.trim()}
                    className={`px-5 py-3.5 rounded-2xl font-extrabold text-xs sm:text-sm flex items-center gap-2 transition ${
                      submitting || !inputText.trim()
                        ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                        : "btn-3d-indigo"
                    }`}
                  >
                    <Send className="h-4 w-4" />
                    <span>{submitting ? "Posting..." : "Send"}</span>
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function DoubtsPage() {
  return (
    <Suspense
      fallback={
        <div className="game-card p-8 text-center text-sm font-bold text-slate-600">
          Loading Study Lounge &amp; @VidyaBot...
        </div>
      }
    >
      <DoubtsLoungeContent />
    </Suspense>
  );
}
