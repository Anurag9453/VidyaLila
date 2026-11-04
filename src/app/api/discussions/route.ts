import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import {
  DiscussionMessage,
  INITIAL_DISCUSSION_MESSAGES,
  QuestionReference,
  generateVidyaBotReply,
  sanitizeAndModerateMessage,
  shouldTriggerVidyaBot,
} from "@/lib/discussions-data";
import { ClassGrade } from "@/lib/mock-data";
import {
  getUserMembershipServer,
  recordUserFoulLanguageStrikeServer,
} from "@/lib/membership-server";

function mapDbRowToMessage(row: Record<string, unknown>): DiscussionMessage {
  return {
    id: String(row.id),
    channelId: String(row.channel_id || "class-9-doubts"),
    classGrade: (Number(row.class_grade) || 9) as ClassGrade,
    chapterTag: String(row.chapter_tag || "General"),
    questionRef: (row.question_ref as QuestionReference) || null,
    senderId: row.sender_id ? String(row.sender_id) : null,
    senderName: String(row.sender_name || "Scholar"),
    senderUsername: String(row.sender_username || "@scholar"),
    senderAvatar: String(row.sender_avatar || "🚀"),
    senderRole: (row.sender_role as "student" | "bot" | "admin") || "student",
    content: String(row.content || ""),
    parentId: row.parent_id ? String(row.parent_id) : null,
    upvotes: Number(row.upvotes) || 0,
    upvotedBy: Array.isArray(row.upvoted_by) ? (row.upvoted_by as string[]) : [],
    isHelpfulSolution: Boolean(row.is_helpful_solution),
    createdAt: String(row.created_at || new Date().toISOString()),
  };
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const channelId = searchParams.get("channelId");

    let query = supabaseAdmin
      .from("discussion_messages")
      .select("*")
      .order("created_at", { ascending: true })
      .limit(200);

    if (channelId) {
      query = query.eq("channel_id", channelId);
    }

    const { data, error } = await query;

    if (!error && Array.isArray(data) && data.length > 0) {
      const dbMessages = data.map(mapDbRowToMessage);
      return NextResponse.json({
        ok: true,
        source: "supabase",
        messages: dbMessages,
      });
    }

    // Fallback to initial seeded discussions if DB table is empty or not migrated yet
    const seeded = channelId
      ? INITIAL_DISCUSSION_MESSAGES.filter((m) => m.channelId === channelId)
      : INITIAL_DISCUSSION_MESSAGES;

    return NextResponse.json({
      ok: true,
      source: "seed_fallback",
      messages: seeded,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to load discussions";
    return NextResponse.json(
      { ok: false, error: message, messages: INITIAL_DISCUSSION_MESSAGES },
      { status: 200 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      channelId = "class-9-doubts",
      classGrade = 9,
      chapterTag = "General",
      questionRef = null,
      senderId = null,
      senderName = "Scholar",
      senderUsername = "@scholar",
      senderAvatar = "🚀",
      senderRole = "student",
      content = "",
      parentId = null,
      askVidyaBot = false,
      userKey: rawUserKey,
    } = body as {
      channelId?: string;
      classGrade?: ClassGrade;
      chapterTag?: string;
      questionRef?: QuestionReference | null;
      senderId?: string | null;
      senderName?: string;
      senderUsername?: string;
      senderAvatar?: string;
      senderRole?: "student" | "admin";
      content: string;
      parentId?: string | null;
      askVidyaBot?: boolean;
      userKey?: string;
    };

    const resolvedUserKey = (rawUserKey || senderUsername || senderId || senderName).trim();

    // 1. Check Group Membership & Barred Status on the Server (unless Admin)
    if (senderRole !== "admin") {
      const membership = await getUserMembershipServer(resolvedUserKey);

      if (membership?.status === "barred") {
        return NextResponse.json(
          {
            ok: false,
            isBarred: true,
            error:
              membership.barredReason ||
              "🚫 Your account has been barred by the Admin from participating in Study Groups.",
          },
          { status: 403 }
        );
      }

      if (!membership || membership.status !== "approved" || membership.channelId !== channelId) {
        return NextResponse.json(
          {
            ok: false,
            requiresApproval: true,
            error:
              "🔒 Permission Required: You can only join 1 group at a time. Please send a Request to Join this group and wait for Admin approval before chatting.",
          },
          { status: 403 }
        );
      }
    }

    // 2. Server-side Moderation & Child Safety Check (Foul Language, Phone Numbers, Links)
    const modResult = sanitizeAndModerateMessage(content);
    if (!modResult.ok) {
      let updatedMembership = null;
      if (modResult.violationType === "FOUL_LANGUAGE") {
        updatedMembership = await recordUserFoulLanguageStrikeServer({
          userKey: resolvedUserKey,
          userId: senderId,
          userName: senderName,
          userUsername: senderUsername,
          userAvatar: senderAvatar,
          channelId,
          classGrade,
          violationReason: `Attempted foul language ("${modResult.matchedWord || "profanity"}") in #${channelId}`,
        });
      }

      return NextResponse.json(
        {
          ok: false,
          violationType: modResult.violationType,
          updatedMembership,
          error: modResult.reason || "Message blocked by moderation filter.",
        },
        { status: 400 }
      );
    }

    const nowIso = new Date().toISOString();
    const localUserMsgId = `msg-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

    let savedUserMsg: DiscussionMessage = {
      id: localUserMsgId,
      channelId,
      classGrade,
      chapterTag,
      questionRef,
      senderId,
      senderName,
      senderUsername,
      senderAvatar,
      senderRole: "student",
      content: modResult.cleaned,
      parentId,
      upvotes: 0,
      upvotedBy: [],
      isHelpfulSolution: false,
      createdAt: nowIso,
    };

    // 2. Try persisting student message to Supabase PostgreSQL
    try {
      const isUuid =
        typeof senderId === "string" &&
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(senderId);
      const isParentUuid =
        typeof parentId === "string" &&
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(parentId);

      const { data: insertedUser, error: insertError } = await supabaseAdmin
        .from("discussion_messages")
        .insert({
          channel_id: channelId,
          class_grade: classGrade,
          chapter_tag: chapterTag,
          question_ref: questionRef,
          sender_id: isUuid ? senderId : null,
          sender_name: senderName,
          sender_username: senderUsername,
          sender_avatar: senderAvatar,
          sender_role: "student",
          content: modResult.cleaned,
          parent_id: isParentUuid ? parentId : null,
        })
        .select("*")
        .single();

      if (!insertError && insertedUser) {
        savedUserMsg = mapDbRowToMessage(insertedUser);
      }
    } catch {
      // Non-fatal if table is not yet created in cloud DB
    }

    // 3. Check if @VidyaBot should reply with a Socratic Hinglish hint
    let savedBotMsg: DiscussionMessage | null = null;
    if (shouldTriggerVidyaBot(modResult.cleaned, askVidyaBot)) {
      const botText = generateVidyaBotReply({
        studentName: senderName,
        messageText: modResult.cleaned,
        classGrade,
        chapterTag,
        questionRef,
      });

      const botParentId = parentId || savedUserMsg.id;
      const localBotMsgId = `bot-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

      savedBotMsg = {
        id: localBotMsgId,
        channelId,
        classGrade,
        chapterTag,
        questionRef: null,
        senderId: null,
        senderName: "@VidyaBot",
        senderUsername: "@vidyabot",
        senderAvatar: "🤖",
        senderRole: "bot",
        content: botText,
        parentId: botParentId,
        upvotes: 1,
        upvotedBy: [],
        isHelpfulSolution: true,
        createdAt: new Date(Date.now() + 500).toISOString(),
      };

      try {
        const isBotParentUuid =
          typeof botParentId === "string" &&
          /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(botParentId);

        const { data: insertedBot, error: botError } = await supabaseAdmin
          .from("discussion_messages")
          .insert({
            channel_id: channelId,
            class_grade: classGrade,
            chapter_tag: chapterTag,
            question_ref: null,
            sender_id: null,
            sender_name: "@VidyaBot",
            sender_username: "@vidyabot",
            sender_avatar: "🤖",
            sender_role: "bot",
            content: botText,
            parent_id: isBotParentUuid ? botParentId : null,
            upvotes: 1,
            is_helpful_solution: true,
          })
          .select("*")
          .single();

        if (!botError && insertedBot) {
          savedBotMsg = mapDbRowToMessage(insertedBot);
        }
      } catch {
        // Non-fatal fallback
      }
    }

    return NextResponse.json({
      ok: true,
      userMessage: savedUserMsg,
      botMessage: savedBotMsg,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to post message";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { messageId, voterId, markHelpful } = body as {
      messageId: string;
      voterId?: string;
      markHelpful?: boolean;
    };

    if (!messageId) {
      return NextResponse.json({ ok: false, error: "Missing messageId" }, { status: 400 });
    }

    let gpAwardedToAuthor = 0;

    try {
      const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
        messageId
      );

      if (isUuid) {
        const { data: existing } = await supabaseAdmin
          .from("discussion_messages")
          .select("*")
          .eq("id", messageId)
          .single();

        if (existing) {
          const currentUpvotedBy: string[] = Array.isArray(existing.upvoted_by)
            ? existing.upvoted_by
            : [];
          const voterKey = voterId || "anon";
          const alreadyVoted = currentUpvotedBy.includes(voterKey);

          const nextUpvotedBy = alreadyVoted
            ? currentUpvotedBy
            : [...currentUpvotedBy, voterKey];
          const nextUpvotes = alreadyVoted
            ? Number(existing.upvotes) || 0
            : (Number(existing.upvotes) || 0) + 1;
          const nextHelpful = Boolean(existing.is_helpful_solution || markHelpful || nextUpvotes >= 3);

          await supabaseAdmin
            .from("discussion_messages")
            .update({
              upvotes: nextUpvotes,
              upvoted_by: nextUpvotedBy,
              is_helpful_solution: nextHelpful,
            })
            .eq("id", messageId);

          // Award +5 GP on the server to the student who wrote a helpful explanation!
          if (!alreadyVoted && existing.sender_id && existing.sender_role === "student") {
            const { data: authorProfile } = await supabaseAdmin
              .from("profiles")
              .select("xp_points")
              .eq("id", existing.sender_id)
              .single();

            if (authorProfile) {
              gpAwardedToAuthor = 5;
              await supabaseAdmin
                .from("profiles")
                .update({
                  xp_points: (Number(authorProfile.xp_points) || 0) + 5,
                })
                .eq("id", existing.sender_id);
            }
          }
        }
      }
    } catch {
      // Non-fatal if using local storage mode
    }

    return NextResponse.json({
      ok: true,
      gpAwardedToAuthor,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to update reaction";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
