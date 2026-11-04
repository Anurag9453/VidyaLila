import { ClassGrade } from "./mock-data";

export interface QuestionReference {
  moduleSlug?: string;
  moduleTitle?: string;
  unitId?: string;
  unitTitle?: string;
  questionId?: string;
  questionNumber?: number;
  questionPrompt?: string;
  options?: string[];
  explanationHint?: string;
}

export interface DiscussionMessage {
  id: string;
  channelId: string;
  classGrade: ClassGrade;
  chapterTag: string;
  questionRef?: QuestionReference | null;
  senderId?: string | null;
  senderName: string;
  senderUsername: string;
  senderAvatar: string;
  senderRole: "student" | "bot" | "admin";
  content: string;
  parentId?: string | null;
  upvotes: number;
  upvotedBy: string[];
  isHelpfulSolution?: boolean;
  createdAt: string;
}

export interface StudyChannel {
  id: string;
  classGrade: ClassGrade;
  name: string;
  title: string;
  description: string;
  badgeEmoji: string;
}

export const STUDY_CHANNELS: StudyChannel[] = [
  {
    id: "class-9-doubts",
    classGrade: 9,
    name: "#class-9-doubts",
    title: "Class 9 Study Lounge",
    description: "Maths (Polynomials, Geometry, Constructions) & Physics (Motion, Laws of Motion, Gravitation, Fluids, Sound)",
    badgeEmoji: "📐",
  },
  {
    id: "class-10-doubts",
    classGrade: 10,
    name: "#class-10-doubts",
    title: "Class 10 Study Lounge",
    description: "Light Optics, Trigonometry, Real Numbers, Electricity & Chemical Reactions",
    badgeEmoji: "⚡",
  },
  {
    id: "class-11-doubts",
    classGrade: 11,
    name: "#class-11-doubts",
    title: "Class 11 Study Lounge",
    description: "Kinematics, Laws of Motion, Sets, Relations & Chemical Bonding",
    badgeEmoji: "🚀",
  },
  {
    id: "class-12-doubts",
    classGrade: 12,
    name: "#class-12-doubts",
    title: "Class 12 Study Lounge",
    description: "Calculus, Definite Integrals, Electrostatics & Organic Chemistry",
    badgeEmoji: "👑",
  },
];

export const CHAPTER_TAGS_BY_CLASS: Record<ClassGrade, string[]> = {
  9: [
    "All Topics",
    "Measurement and Units",
    "Motion (Gati)",
    "Force and Laws of Motion",
    "Gravitation",
    "Pressure and Fluids",
    "Work, Energy and Power",
    "Machines",
    "Heat and Temperature",
    "Sound",
    "Constructions",
    "Triangles",
    "Lines & Angles",
    "Polynomials",
    "Linear Equations",
    "Coordinate Geometry",
    "Euclid's Geometry",
    "Trigonometry",
  ],
  10: ["All Topics", "Light: Reflection & Refraction", "Trigonometry", "Real Numbers", "Chemical Reactions", "Electricity"],
  11: ["All Topics", "Kinematics & Vectors", "Laws of Motion", "Sets & Functions", "Thermodynamics"],
  12: ["All Topics", "Definite Integrals", "Electrostatics", "Current Electricity", "Matrices & Determinants"],
};

export const QUICK_MATH_SYMBOLS = [
  { label: "∠", title: "Angle" },
  { label: "△", title: "Triangle" },
  { label: "⊥", title: "Perpendicular" },
  { label: "∥", title: "Parallel" },
  { label: "°", title: "Degree" },
  { label: "√", title: "Square Root" },
  { label: "²", title: "Squared" },
  { label: "θ", title: "Theta" },
  { label: "π", title: "Pi" },
  { label: "≅", title: "Congruent" },
];

export type GroupMembershipStatus = "pending" | "approved" | "rejected" | "barred";

export interface StudyGroupMembership {
  id: string;
  userId?: string | null;
  userKey: string; // Enforces 1 group per user at a time
  userName: string;
  userUsername: string;
  userAvatar: string;
  channelId: string;
  classGrade: ClassGrade;
  requestNote: string;
  status: GroupMembershipStatus;
  violationCount: number;
  lastViolationReason?: string | null;
  barredReason?: string | null;
  requestedAt: string;
  updatedAt: string;
}

export const INITIAL_GROUP_MEMBERSHIPS: StudyGroupMembership[] = [
  {
    id: "mem-seed-1",
    userId: null,
    userKey: "@rohan_verma",
    userName: "Rohan Verma",
    userUsername: "@rohan_verma",
    userAvatar: "🧭",
    channelId: "class-9-doubts",
    classGrade: 9,
    requestNote: "Need help with Class 9 Geometry Constructions & Triangles proofs.",
    status: "approved",
    violationCount: 0,
    lastViolationReason: null,
    barredReason: null,
    requestedAt: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 90).toISOString(),
  },
  {
    id: "mem-seed-2",
    userId: null,
    userKey: "@ananya_math",
    userName: "Ananya Sharma",
    userUsername: "@ananya_math",
    userAvatar: "🌟",
    channelId: "class-9-doubts",
    classGrade: 9,
    requestNote: "Loving the Hinglish lessons! Want to discuss Polynomials & Congruence.",
    status: "approved",
    violationCount: 0,
    lastViolationReason: null,
    barredReason: null,
    requestedAt: new Date(Date.now() - 1000 * 60 * 100).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 80).toISOString(),
  },
  {
    id: "mem-seed-3",
    userId: null,
    userKey: "@dev_patel9",
    userName: "Dev Patel",
    userUsername: "@dev_patel9",
    userAvatar: "⚡",
    channelId: "class-9-doubts",
    classGrade: 9,
    requestNote: "Hi Admin, please approve my request for Class 9 Maths Study Group!",
    status: "pending",
    violationCount: 0,
    lastViolationReason: null,
    barredReason: null,
    requestedAt: new Date(Date.now() - 1000 * 60 * 18).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 18).toISOString(),
  },
  {
    id: "mem-seed-4",
    userId: null,
    userKey: "@kritika_10",
    userName: "Kritika Nair",
    userUsername: "@kritika_10",
    userAvatar: "🔬",
    channelId: "class-10-doubts",
    classGrade: 10,
    requestNote: "Want to join Class 10 lounge for Light Reflection & Trigonometry doubts.",
    status: "pending",
    violationCount: 0,
    lastViolationReason: null,
    barredReason: null,
    requestedAt: new Date(Date.now() - 1000 * 60 * 9).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 9).toISOString(),
  },
];

// ----------------------------------------------------------------------------
// SAFETY & MODERATION FILTER (Blocks phone numbers, links, and foul language)
// ----------------------------------------------------------------------------
const BLOCKED_WORDS = [
  "abuse",
  "idiot",
  "stupid",
  "dumb",
  "pagal",
  "bewakoof",
  "chutiya",
  "chutiye",
  "madarchod",
  "bhenchod",
  "behenchod",
  "bc",
  "mc",
  "bsdk",
  "bhosdike",
  "gandu",
  "gaandu",
  "harami",
  "haramkhor",
  "kamina",
  "kamine",
  "kutta",
  "kutte",
  "saala",
  "saale",
  "randi",
  "fuck",
  "fucking",
  "fck",
  "shit",
  "bitch",
  "bastard",
  "asshole",
  "moron",
  "loser",
  "bakwas",
  "ullu",
];

export function sanitizeAndModerateMessage(raw: string): {
  ok: boolean;
  cleaned: string;
  reason?: string;
  violationType?: "FOUL_LANGUAGE" | "PHONE_NUMBER" | "EXTERNAL_LINK";
  matchedWord?: string;
} {
  const trimmed = raw.trim();
  if (!trimmed) {
    return { ok: false, cleaned: "", reason: "Message cannot be empty." };
  }
  if (trimmed.length > 1000) {
    return { ok: false, cleaned: "", reason: "Message is too long (max 1000 characters)." };
  }

  // 1. Check English & Hinglish foul language / profanity FIRST (strict zero-tolerance)
  const lower = trimmed.toLowerCase();
  for (const word of BLOCKED_WORDS) {
    const wordRegex = new RegExp(`\\b${word}\\b`, "i");
    if (wordRegex.test(lower)) {
      return {
        ok: false,
        cleaned: trimmed,
        violationType: "FOUL_LANGUAGE",
        matchedWord: word,
        reason:
          "🚨 Zero-Tolerance Policy: Foul or abusive language is strictly prohibited! This violation has been logged for the Admin, who holds the right to bar you from all Study Groups.",
      };
    }
  }

  // 2. Block 10-digit phone numbers / WhatsApp numbers
  const phoneRegex = /(?:\+91[\-\s]?)?[6-9]\d{9}\b|\b\d{3}[\-\s]\d{3}[\-\s]\d{4}\b/;
  if (phoneRegex.test(trimmed)) {
    return {
      ok: false,
      cleaned: trimmed,
      violationType: "PHONE_NUMBER",
      reason: "Safety Guard: Sharing personal phone numbers is not allowed in Study Channels.",
    };
  }

  // 3. Block external URLs / social handles
  const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+|t\.me\/[^\s]+|wa\.me\/[^\s]+|instagram\.com\/[^\s]+|discord\.gg\/[^\s]+)/i;
  if (urlRegex.test(trimmed)) {
    return {
      ok: false,
      cleaned: trimmed,
      violationType: "EXTERNAL_LINK",
      reason: "Safety Guard: External links and social media invites are blocked to keep discussions focused.",
    };
  }

  return { ok: true, cleaned: trimmed };
}

// ----------------------------------------------------------------------------
// @VIDYABOT SOCRATIC HINGLISH TUTOR ENGINE
// ----------------------------------------------------------------------------
export function shouldTriggerVidyaBot(messageText: string, forceBot?: boolean): boolean {
  if (forceBot) return true;
  const lower = messageText.toLowerCase();
  if (lower.includes("@vidyabot") || lower.includes("vidyabot")) return true;
  // Also auto-help if the student is clearly asking a conceptual question
  const questionPatterns = [
    /\?/,
    /\b(kaise|kyun|kyu|kya|samjhao|samajh|doubt|help|hint|explain|step|formula|confused)\b/i,
  ];
  return questionPatterns.some((pat) => pat.test(lower));
}

export function generateVidyaBotReply(params: {
  studentName: string;
  messageText: string;
  classGrade: ClassGrade;
  chapterTag: string;
  questionRef?: QuestionReference | null;
}): string {
  const { studentName, messageText, classGrade, chapterTag, questionRef } = params;
  const firstName = studentName.split(" ")[0] || "Dost";
  const lower = messageText.toLowerCase();

  // 1. If tied to a specific Unit Question with an explanationHint or prompt
  if (questionRef?.questionPrompt) {
    const hintText = questionRef.explanationHint
      ? questionRef.explanationHint
      : `Is sawaal mein sabse pehle diya gaya data (Given) note karo aur dekho kaunsa core property lag raha hai.`;

    return (
      `Namaste **${firstName}**! 👋 Chalo **${questionRef.unitTitle || chapterTag}** ke is question ko step-by-step todte hain:\n\n` +
      `> **Question Focus**: ${questionRef.questionPrompt}\n\n` +
      `- **💡 @VidyaBot Socratic Hint**: Seedha final option tick karne se pehle socho — ${hintText}\n` +
      `- **🤔 Next Step for You & Peers**: Agar hum given values ko formula/property mein rakhein, toh kaunsa option sabse pehle eliminate hota hai? Neeche reply karke batao!`
    );
  }

  // 2. Topic-specific Hinglish Socratic responses
  if (
    chapterTag.toLowerCase().includes("construction") ||
    /\b(arc|bisector|compass|perpendicular|60|45|90|75|rhombus|trapezium|figure)\b/i.test(lower)
  ) {
    if (/\b(bisector|perpendicular|aadha|half)\b/i.test(lower)) {
      return (
        `Badhiya sawaal hai **${firstName}**! 🧭 **Perpendicular Bisector** ka raaz samjho:\n\n` +
        `- **💡 Concept**: Jab hum segment **AB** ke dono ends (**A** aur **B**) se **aadhe se zyada (` +
        "`r > ½ AB`" +
        `)** radius lekar upar-neeche arcs kaatte hain (points **P** aur **Q** par), toh **PA = PB** aur **QA = QB** hota hai.\n` +
        `- **📐 Kyun kaam karta hai?**: Rhombus/Kite symmetry ki wajah se line **PQ** segment **AB** ko bilkul beech (**M**) par **90°** par kaatti hai!\n` +
        `- **🤔 Quick Check**: Agar radius ` +
        "`r < ½ AB`" +
        ` le lein toh kya dono arcs kabhi milenge? Socho!`
      );
    }

    if (/\b(sum|ab\s*\+\s*ac|bd|difference|ab\s*-\s*ac)\b/i.test(lower)) {
      return (
        `**${firstName}**, Triangle Construction (**AB + AC** ya **AB - AC** given) mein 90% students yahi confuse hote hain! 🎯\n\n` +
        `- **💡 Golden Trick**: Jis point ko humne extra banaya hai (**D**), usko teesre base vertex (**C**) se jodo (**DC**), aur hamesha **DC ka perpendicular bisector** kheencho!\n` +
        `- **📐 Logic**: DC ke perpendicular bisector par har point **D** aur **C** se barabar doori par hota hai. Isliye jahan woh ray **BX** ko kaatega (point **A** par), wahan apne aap **AD = AC** ban jayega!\n` +
        `- **🤔 Try Karo**: Ab batao ` +
        "`BD = BA + AD`" +
        ` mein agar ` +
        "`AD = AC`" +
        ` rakh dein, toh ` +
        "`BD`" +
        ` kiske barabar ho gaya?`
      );
    }

    return (
      `Hey **${firstName}**! 📐 **Constructions** mein har step ke peeche **Congruence (SSS / SAS / RHS)** chhupa hota hai:\n\n` +
      `- **💡 Step 1**: Pehle base segment ruler se banao.\n` +
      `- **💡 Step 2**: Compass ka opening bina hilaye barabar arcs lagao (60° ke liye same radius, bisector ke liye ` +
      "`> ½`" +
      ` distance).\n` +
      `- **🤔 Doubt Check**: Batao aap kaunse **Figure** ya **Step** par atke ho? Main ya koi aur dost turant uska exact logic batayega!`
    );
  }

  if (
    chapterTag.toLowerCase().includes("triangle") ||
    /\b(congruen|sas|asa|aas|sss|rhs|cpct|isosceles|hypotenuse)\b/i.test(lower)
  ) {
    return (
      `Shandaar doubt **${firstName}**! 🔺 **Triangles & Congruence** ko aise pakdo:\n\n` +
      `- **💡 Core Rule**: Do triangles tabhi congruent (**≅**) hote hain jab unpar **SSS, SAS, ASA, AAS** ya **RHS** lagta ho. Yaad rakhna: **SSA (Ass-kicking trap!)** aur **AAA** se congruence prove *nahi* hoti!\n` +
      `- **📐 SAS mein dhyan do**: Angle hamesha dono sides ke **beech wala (included angle)** hona chahiye.\n` +
      `- **🤔 Sawaal**: Aapke question mein kaunse 3 parts barabar diye hain? Write karke dekho, CPCT apne aap dikh jayega!`
    );
  }

  if (
    chapterTag.toLowerCase().includes("polynomial") ||
    /\b(polynomial|degree|zero|remainder|factor|identity|quadratic|cubic)\b/i.test(lower)
  ) {
    return (
      `Chalo **${firstName}**, **Polynomials** ka फंडा ekdum clear karte hain! 🧮\n\n` +
      `- **💡 Key Check**: Kisi expression ke **Polynomial** hone ke liye variable ($x$) ki har power **Whole Number ($0, 1, 2, 3...$)** honi chahiye — na negative, na fraction (` +
      "`√x`" +
      ` ya ` +
      "`1/x`" +
      ` nahi chalega!).\n` +
      `- **📐 Zero of Polynomial**: Agar $p(a) = 0$, toh $x = a$ us polynomial ka **Zero** hai aur $(x - a)$ uska **Factor** hai.\n` +
      `- **🤔 Try This**: Apne expression mein $x$ ki highest power aur powers ka type check karke batao kya aa raha hai!`
    );
  }

  if (
    chapterTag.toLowerCase().includes("line") ||
    /\b(parallel|transversal|alternate|corresponding|co-interior|linear pair|vertically opposite)\b/i.test(lower)
  ) {
    return (
      `Aha **${firstName}**! 📏 **Lines and Angles** mein bas 3 shapes dhoondho:\n\n` +
      `- **💡 Z-Shape**: **Alternate Interior Angles** (Hamesha बराबर jab lines parallel hon: ` +
      "`l ∥ m`" +
      `).\n` +
      `- **💡 F-Shape**: **Corresponding Angles** (Barabar).\n` +
      `- **💡 C-Shape**: **Co-interior Angles** (Inka sum hamesha **180°** hota hai!).\n` +
      `- **🤔 Hint**: Diagram mein dekho Z ban raha hai, F ban raha hai, ya seedhi line par Linear Pair (180°)?`
    );
  }

  if (
    chapterTag.toLowerCase().includes("light") ||
    chapterTag.toLowerCase().includes("optics") ||
    /\b(mirror|lens|focal|concave|convex|refraction|snell|magnification)\b/i.test(lower)
  ) {
    return (
      `Great question **${firstName}**! 🔬 **Light & Optics** mein **Sign Convention** hi sabse bada game-changer hai:\n\n` +
      `- **💡 Rule 1**: Object distance ($u$) hamesha **negative ($-$)** hota hai.\n` +
      `- **💡 Rule 2**: **Concave** mirror/lens ka focal length ($f$) **negative ($-$)**, aur **Convex** ka **positive ($+$)**.\n` +
      `- **📐 Formula Check**: Mirror mein ` +
      "`1/v + 1/u = 1/f`" +
      ` (+ sign) aur Lens mein ` +
      "`1/v - 1/u = 1/f`" +
      ` (- sign).\n` +
      `- **🤔 Check**: Aapne $u$ aur $f$ ka sign sahi rakha hai? Values share karo, milkar check karte hain!`
    );
  }

  // Generic Socratic Hinglish response for any class/topic
  return (
    `Namaste **${firstName}**! 🤖 Main hoon **@VidyaBot** (Class ${classGrade} • **${chapterTag}**).\n\n` +
    `- **💡 Socratic Hint**: Is problem ko solve karne ke liye sabse pehle **Given values** ko ek line mein likho, aur dekho humein **Find** kya karna hai.\n` +
    `- **📐 Step-by-Step Approach**: Jab bhi question tricky lage, usko chhote parts mein todo — pehle basic definition/property lagao, phir calculation karo.\n` +
    `- **🤔 Open to Class ${classGrade} Peers**: Doston, **${firstName}** ke is doubt par aapka kya approach hai? Jo sabse saaf Hinglish explanation dega use milega **+5 GP (Helpful Solution)**! 🚀`
  );
}

// ----------------------------------------------------------------------------
// INITIAL SEEDED DISCUSSIONS (So channels feel alive out-of-the-box)
// ----------------------------------------------------------------------------
export const INITIAL_DISCUSSION_MESSAGES: DiscussionMessage[] = [
  {
    id: "msg-seed-9-1",
    channelId: "class-9-doubts",
    classGrade: 9,
    chapterTag: "Constructions",
    questionRef: {
      moduleSlug: "class-9-maths-constructions",
      moduleTitle: "Ch 14: Constructions",
      unitId: "u-9math-con-5",
      unitTitle: "Topic 5: Triangle Constructions (II) — Sum & Difference of Sides",
      questionNumber: 3,
      questionPrompt: "△ABC banana hai jisme BC = 5 cm, ∠B = 60° aur AB + AC = 8 cm. Ray BX par BD = 8 cm kaatne ke baad agla step kya hota hai?",
      explanationHint: "Point D ko C se jodkar DC ka perpendicular bisector kheenchte hain taaki AD = AC ban jaaye.",
    },
    senderId: "seed-user-1",
    senderName: "Riya Verma",
    senderUsername: "@riya_9th",
    senderAvatar: "🌟",
    senderRole: "student",
    content: "Doston, Figure 5.1 mein BD = 8 cm kaatne ke baad hum DC ka perpendicular bisector hi kyun banate hain? BC ka kyun nahi? @VidyaBot",
    parentId: null,
    upvotes: 6,
    upvotedBy: ["seed-user-2", "seed-user-3"],
    isHelpfulSolution: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 42).toISOString(),
  },
  {
    id: "msg-seed-9-2",
    channelId: "class-9-doubts",
    classGrade: 9,
    chapterTag: "Constructions",
    questionRef: null,
    senderId: null,
    senderName: "@VidyaBot",
    senderUsername: "@vidyabot",
    senderAvatar: "🤖",
    senderRole: "bot",
    content:
      "Namaste **Riya**! 👋 Bahut hi zabardast conceptual sawaal hai!\n\n" +
      "- **💡 @VidyaBot Socratic Hint**: Humein chahiye ki ray **BD** par ek aisa point **A** mile jisse **AD = AC** ho jaaye (kyunki tabhi `AB + AD = AB + AC = 8 cm` banega!).\n" +
      "- **📐 Perpendicular Bisector Property**: Kisi segment ke perpendicular bisector par baitha har point uske dono ends se barabar doori par hota hai. Kyunki humein **A** ki doori **D** aur **C** se barabar chahiye (`AD = AC`), isliye hum **DC** ka perpendicular bisector banate hain!\n" +
      "- **🤔 Think About This**: Agar hum BC ka bisector banate, toh `AB = AC` ho jaata (jo sirf isosceles triangle mein hota hai).",
    parentId: "msg-seed-9-1",
    upvotes: 9,
    upvotedBy: ["seed-user-1", "seed-user-2"],
    isHelpfulSolution: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 41).toISOString(),
  },
  {
    id: "msg-seed-9-3",
    channelId: "class-9-doubts",
    classGrade: 9,
    chapterTag: "Constructions",
    questionRef: null,
    senderId: "seed-user-2",
    senderName: "Kabir Nair",
    senderUsername: "@kabir_math",
    senderAvatar: "⚡",
    senderRole: "student",
    content: "Ek aur shortcut yaad rakhne ke liye: Jo 2 points naye mile hain (ray par D aur base ka end C), hamesha unhi dono ko dashed line se jodo aur usi line ka bisector banao! Maine aise hi Figure 5.1 aur 5.2 dono yaad rakhe hain.",
    parentId: "msg-seed-9-1",
    upvotes: 8,
    upvotedBy: ["seed-user-1"],
    isHelpfulSolution: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 35).toISOString(),
  },
  {
    id: "msg-seed-9-4",
    channelId: "class-9-doubts",
    classGrade: 9,
    chapterTag: "Triangles",
    questionRef: {
      moduleSlug: "class-9-maths-triangles",
      moduleTitle: "Ch 10: Triangles",
      unitId: "u-9math-tri-2",
      unitTitle: "SAS, ASA & AAS Congruence Rules",
      questionNumber: 4,
      questionPrompt: "Agar △ABC aur △DEF mein AB = DE, BC = EF aur ∠C = ∠F hai, toh kya dono triangles SAS se congruent honge?",
    },
    senderId: "seed-user-3",
    senderName: "Aarav Mehta",
    senderUsername: "@aarav_m",
    senderAvatar: "🔥",
    senderRole: "student",
    content: "Isme AB = DE aur BC = EF diya hai, aur ∠C = ∠F. Kya yahan SAS lagega? Mujhe lag raha hai trap question hai!",
    parentId: null,
    upvotes: 4,
    upvotedBy: [],
    isHelpfulSolution: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 18).toISOString(),
  },
  {
    id: "msg-seed-9-5",
    channelId: "class-9-doubts",
    classGrade: 9,
    chapterTag: "Triangles",
    questionRef: null,
    senderId: null,
    senderName: "@VidyaBot",
    senderUsername: "@vidyabot",
    senderAvatar: "🤖",
    senderRole: "bot",
    content:
      "Bilkul sahi pakda **Aarav**! 🎯 Yeh classic **SSA Trap** hai:\n\n" +
      "- **💡 SAS Rule**: Angle hamesha dono equal sides ke **beech (included)** hona chahiye. Sides **AB** aur **BC** ke beech ka angle **∠B** hai, **∠C** nahi!\n" +
      "- **📐 Conclusion**: Kyunki ∠B = ∠E nahi diya (balki ∠C = ∠F diya hai), isliye **SAS nahi lagega**.",
    parentId: "msg-seed-9-4",
    upvotes: 5,
    upvotedBy: ["seed-user-3"],
    isHelpfulSolution: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 17).toISOString(),
  },
  {
    id: "msg-seed-10-1",
    channelId: "class-10-doubts",
    classGrade: 10,
    chapterTag: "Light: Reflection & Refraction",
    questionRef: null,
    senderId: "seed-user-4",
    senderName: "Ananya Iyer",
    senderUsername: "@ananya_10",
    senderAvatar: "💎",
    senderRole: "student",
    content: "Concave mirror numerical mein jab image 'real and inverted' di ho, toh magnification m ko negative lena hai ya positive? @VidyaBot",
    parentId: null,
    upvotes: 5,
    upvotedBy: [],
    isHelpfulSolution: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 50).toISOString(),
  },
  {
    id: "msg-seed-10-2",
    channelId: "class-10-doubts",
    classGrade: 10,
    chapterTag: "Light: Reflection & Refraction",
    questionRef: null,
    senderId: null,
    senderName: "@VidyaBot",
    senderUsername: "@vidyabot",
    senderAvatar: "🤖",
    senderRole: "bot",
    content:
      "Hey **Ananya**! 🔬 Ekdum simple rule yaad rakho:\n\n" +
      "- **💡 Real & Inverted Image**: Principal axis ke neeche banti hai ($h_i$ negative), isliye Magnification **$m$ hamesha Negative ($-$)** hota hai (jaise $m = -2$).\n" +
      "- **💡 Virtual & Erect Image**: Principal axis ke upar banti hai ($h_i$ positive), isliye **$m$ hamesha Positive ($+$)** hota hai!",
    parentId: "msg-seed-10-1",
    upvotes: 7,
    upvotedBy: ["seed-user-4"],
    isHelpfulSolution: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 49).toISOString(),
  },
];
