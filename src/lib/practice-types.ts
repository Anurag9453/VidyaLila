export type PracticeDifficulty = "Basic" | "Intermediate" | "Advanced";

export interface PracticeQuestion {
  id: string;
  question: string;
  options: [string, string, string, string] | string[];
  correctIndex: number;
  explanation: string;
  difficulty: PracticeDifficulty;
  topicTag?: string;
}

export interface PracticeSetData {
  slug: string;
  chapterTitle: string;
  classGrade: number;
  subject: string;
  setNumber: number; // 1..10
  difficulty: PracticeDifficulty;
  durationMinutes: number;
  questions: PracticeQuestion[];
  isPreviewFallback?: boolean;
}

export interface PracticeSetMeta {
  setNumber: number;
  label: string;
  difficulty: PracticeDifficulty;
  questionCount: number;
  durationMinutes: number;
}

export interface PracticeAttemptRecord {
  slug: string;
  setNumber: number;
  score: number;
  total: number;
  accuracy: number;
  timeSpentSeconds: number;
  completedAt: string;
}

export const PRACTICE_SETS_PER_CHAPTER: PracticeSetMeta[] = [
  { setNumber: 1, label: "Set 1 • Foundation", difficulty: "Basic", questionCount: 50, durationMinutes: 45 },
  { setNumber: 2, label: "Set 2 • Core Concepts", difficulty: "Basic", questionCount: 50, durationMinutes: 45 },
  { setNumber: 3, label: "Set 3 • Concept Drill", difficulty: "Basic", questionCount: 50, durationMinutes: 45 },
  { setNumber: 4, label: "Set 4 • Application I", difficulty: "Intermediate", questionCount: 50, durationMinutes: 50 },
  { setNumber: 5, label: "Set 5 • Application II", difficulty: "Intermediate", questionCount: 50, durationMinutes: 50 },
  { setNumber: 6, label: "Set 6 • Mixed Numericals", difficulty: "Intermediate", questionCount: 50, durationMinutes: 50 },
  { setNumber: 7, label: "Set 7 • Board Pattern", difficulty: "Intermediate", questionCount: 50, durationMinutes: 50 },
  { setNumber: 8, label: "Set 8 • High-Order Thinking", difficulty: "Advanced", questionCount: 50, durationMinutes: 60 },
  { setNumber: 9, label: "Set 9 • Competitive Edge", difficulty: "Advanced", questionCount: 50, durationMinutes: 60 },
  { setNumber: 10, label: "Set 10 • Grand Mastery", difficulty: "Advanced", questionCount: 50, durationMinutes: 60 },
];

export const DIFFICULTY_BADGE_STYLES: Record<PracticeDifficulty, string> = {
  Basic: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Intermediate: "bg-amber-100 text-amber-900 border-amber-200",
  Advanced: "bg-rose-100 text-rose-800 border-rose-200",
};

const STORAGE_KEY = "vidyalila_practice_attempts_v1";

export function loadPracticeAttempts(): Record<string, PracticeAttemptRecord> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function savePracticeAttempt(record: PracticeAttemptRecord): Record<string, PracticeAttemptRecord> {
  const map = loadPracticeAttempts();
  const key = `${record.slug}::set-${record.setNumber}`;
  const prev = map[key];
  // Keep best score
  if (!prev || record.score >= prev.score) {
    map[key] = record;
  }
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
    } catch {
      // ignore quota errors
    }
  }
  return map;
}
