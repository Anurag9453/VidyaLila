import { CLASS_9_CHEMISTRY_MODULES } from "./class9-chemistry-data";
import { CLASS_9_MATHS_MODULES } from "./class9-maths-data";
import { CLASS_9_PHYSICS_MODULES } from "./class9-physics-data";
import { CLASS_10_CHEMISTRY_MODULES } from "./class10-chemistry-data";
import { CLASS_10_PHYSICS_MODULES } from "./class10-physics-data";
import { CLASS_10_MATHS_MODULES } from "./class10-maths-data";
import { CLASS_11_PHYSICS_MODULES } from "./class11-physics-data";
import { CLASS_11_CHEMISTRY_MODULES } from "./class11-chemistry-data";
import { CLASS_11_MATHS_MODULES } from "./class11-maths-data";
import { CLASS_12_PHYSICS_MODULES } from "./class12-physics-data";
import { CLASS_12_CHEMISTRY_MODULES } from "./class12-chemistry-data";
import { CLASS_12_MATHS_MODULES } from "./class12-maths-data";

export type BoardType = "CBSE" | "ICSE" | "BOTH";
export type ClassGrade = 9 | 10 | 11 | 12;
export type CoreSubject = "Physics" | "Chemistry" | "Mathematics";
export type ContentLanguage = "ENGLISH" | "HINGLISH";

export interface CheckpointQuestion {
  id: string;
  question: string;
  questionHinglish?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  explanationHinglish?: string;
}

export interface UnitItem {
  id: string;
  title: string;
  titleHinglish?: string;
  durationMinutes: number;
  xpReward: number;
  summary: string;
  summaryHinglish?: string;
  contentSections: {
    heading: string;
    headingHinglish?: string;
    body: string;
    bodyHinglish?: string;
    formulaOrTip?: string;
    formulaOrTipHinglish?: string;
  }[];
  checkpointQuestions: CheckpointQuestion[];
}

export interface LearningModule {
  id: string;
  slug: string;
  chapterNumber: number;
  title: string;
  subtitle: string;
  subtitleHinglish?: string;
  board: BoardType;
  classGrade: ClassGrade;
  subject: CoreSubject;
  difficulty: "Beginner" | "Intermediate" | "Board Special";
  badgeName: string;
  badgeEmoji: string;
  accentColor: string;
  totalXp: number;
  estimatedMinutes: number;
  units: UnitItem[];
}

export interface QuizContest {
  id: string;
  title: string;
  subtitle: string;
  type: "DAILY" | "WEEKLY" | "MONTHLY";
  syllabusScope?: "FULL_SYLLABUS" | "SELECTED_CHAPTERS";
  includedChapters?: string[];
  board: BoardType;
  classGrade: ClassGrade;
  subject: CoreSubject;
  scheduledTimeSlot: string;
  frequencyLabel: string;
  entryFeeInr: number;
  freeWithPass: boolean;
  prizePool: string;
  xpReward: number;
  durationMinutes: number;
  participantsCount: number;
  startsInLabel: string;
  isLive: boolean;
  questions: CheckpointQuestion[];
}

export interface RankTier {
  name: string;
  hindiTitle: string;
  minXp: number;
  maxXp: number;
  badgeEmoji: string;
  gradient: string;
}

export const RANK_TIERS: RankTier[] = [
  {
    name: "Seeker",
    hindiTitle: "Tier 1 • Rising Seeker",
    minXp: 0,
    maxXp: 1000,
    badgeEmoji: "🌱",
    gradient: "from-emerald-400 to-teal-600",
  },
  {
    name: "Explorer",
    hindiTitle: "Tier 2 • Concept Explorer",
    minXp: 1000,
    maxXp: 2500,
    badgeEmoji: "⚡",
    gradient: "from-cyan-400 to-blue-600",
  },
  {
    name: "Scholar",
    hindiTitle: "Tier 3 • Honors Scholar",
    minXp: 2500,
    maxXp: 5000,
    badgeEmoji: "🔥",
    gradient: "from-amber-400 to-orange-600",
  },
  {
    name: "Champion",
    hindiTitle: "Tier 4 • STEM Champion",
    minXp: 5000,
    maxXp: 10000,
    badgeEmoji: "👑",
    gradient: "from-fuchsia-500 to-purple-700",
  },
  {
    name: "Grandmaster",
    hindiTitle: "Tier 5 • Apex Grandmaster",
    minXp: 10000,
    maxXp: 999999,
    badgeEmoji: "💎",
    gradient: "from-rose-500 via-amber-400 to-indigo-600",
  },
];

const RAW_INITIAL_MODULES: LearningModule[] = [
  // ==========================================================================
  // CLASS 10 - PHYSICS, CHEMISTRY, MATHEMATICS
  // ==========================================================================
  ...CLASS_10_PHYSICS_MODULES,
  ...CLASS_10_CHEMISTRY_MODULES,
  ...CLASS_10_MATHS_MODULES,

  // ==========================================================================
  // CLASS 9 - PHYSICS, CHEMISTRY, MATHEMATICS
  // ==========================================================================
  ...CLASS_9_CHEMISTRY_MODULES,
  ...CLASS_9_PHYSICS_MODULES,
  ...CLASS_9_MATHS_MODULES,

  // ==========================================================================
  // CLASS 11 - PHYSICS, CHEMISTRY, MATHEMATICS
  // ==========================================================================
  ...CLASS_11_PHYSICS_MODULES,
  ...CLASS_11_CHEMISTRY_MODULES,
  ...CLASS_11_MATHS_MODULES,

  // ==========================================================================
  // CLASS 12 - PHYSICS, CHEMISTRY, MATHEMATICS
  // ==========================================================================
  ...CLASS_12_PHYSICS_MODULES,
  ...CLASS_12_CHEMISTRY_MODULES,
  ...CLASS_12_MATHS_MODULES,
];

const SUBJECT_QUESTION_BANK: Record<CoreSubject, Omit<CheckpointQuestion, "id">[]> = {
  Physics: [
    {
      question: "What is the SI unit of electric power?",
      options: ["Joule", "Watt", "Volt", "Ampere"],
      correctIndex: 1,
      explanation: "The SI unit of electric power is Watt (W), where 1 W = 1 Volt × 1 Ampere.",
    },
    {
      question: "Where should an object be placed in front of a convex lens to get a real image of the same size as the object?",
      options: ["At the principal focus (F)", "At twice the focal length (2F)", "At infinity", "Between optical centre and F"],
      correctIndex: 1,
      explanation: "Placing an object at 2F₁ of a convex lens forms a real, inverted, and same-sized image at 2F₂.",
    },
    {
      question: "An ammeter is always connected in _____ in a circuit and has _____ resistance.",
      options: ["Series, very low", "Parallel, very high", "Series, very high", "Parallel, very low"],
      correctIndex: 0,
      explanation: "An ammeter is connected in series so the full current flows through it, and has very low resistance so it does not alter the current.",
    },
    {
      question: "The slope of a Velocity-Time (v-t) graph represents:",
      options: ["Displacement", "Speed", "Acceleration", "Force"],
      correctIndex: 2,
      explanation: "Rate of change of velocity (Δv/Δt), which is the slope of the v-t graph, gives acceleration.",
    },
    {
      question: "If the distance between two point charges is halved, the electrostatic force between them becomes:",
      options: ["Half", "Double", "Four times", "One-fourth"],
      correctIndex: 2,
      explanation: "By Coulomb's Law, F ∝ 1/r². Halving r (r/2) makes the force 4 times.",
    },
    {
      question: "Which phenomenon of light is responsible for the twinkling of stars?",
      options: ["Dispersion", "Atmospheric Refraction", "Total Internal Reflection", "Tyndall Effect"],
      correctIndex: 1,
      explanation: "Continuous atmospheric refraction of starlight through layers of varying optical densities causes twinkling.",
    },
    {
      question: "What is the commercial unit of electrical energy?",
      options: ["Watt", "Joule-second", "Kilowatt-hour (kWh)", "Volt-Ampere"],
      correctIndex: 2,
      explanation: "1 kWh (1 Unit) = 3.6 × 10⁶ Joules is the commercial unit of electrical energy.",
    },
    {
      question: "The magnetic field inside a long current-carrying straight solenoid is:",
      options: ["Zero", "Uniform (same at all points)", "Decreases as we move towards the ends", "Increases as we move towards the ends"],
      correctIndex: 1,
      explanation: "Field lines inside a solenoid are parallel straight lines, indicating a uniform magnetic field.",
    },
    {
      question: "According to Newton's Third Law of Motion, action and reaction forces always act on:",
      options: ["The same body", "Two different bodies in opposite directions", "Two different bodies in the same direction", "Perpendicular directions"],
      correctIndex: 1,
      explanation: "Action and reaction forces are equal, opposite, and always act on two different interacting bodies.",
    },
    {
      question: "Which colour of white light travels fastest in a glass prism?",
      options: ["Violet", "Blue", "Green", "Red"],
      correctIndex: 3,
      explanation: "Red light has the longest wavelength and lowest refractive index in glass, so it travels fastest and deviates the least.",
    },
  ],
  Chemistry: [
    {
      question: "What is the pH of a neutral aqueous solution at 25°C?",
      options: ["0", "5.5", "7.0", "14.0"],
      correctIndex: 2,
      explanation: "Pure water and neutral solutions have equal H⁺ and OH⁻ concentrations, giving pH = 7.0 at 25°C.",
    },
    {
      question: "Which gas is liberated when dilute hydrochloric acid reacts with active metals like Zinc?",
      options: ["Oxygen (O₂)", "Hydrogen (H₂)", "Chlorine (Cl₂)", "Carbon dioxide (CO₂)"],
      correctIndex: 1,
      explanation: "Zn + 2HCl ➔ ZnCl₂ + H₂↑. Hydrogen gas burns with a characteristic 'pop' sound.",
    },
    {
      question: "Respiration in living organisms is an example of which type of reaction?",
      options: ["Endothermic reaction", "Exothermic reaction", "Photochemical decomposition", "Double displacement"],
      correctIndex: 1,
      explanation: "Respiration breaks down glucose with oxygen to release energy (ATP + heat), so it is an exothermic process.",
    },
    {
      question: "Which non-metal exists as a liquid at room temperature?",
      options: ["Mercury", "Bromine", "Iodine", "Gallium"],
      correctIndex: 1,
      explanation: "Bromine (Br₂) is the only non-metal that is liquid at room temperature (Mercury is a liquid metal).",
    },
    {
      question: "How many covalent bonds are present in a molecule of Ethane (C₂H₆)?",
      options: ["5", "6", "7", "8"],
      correctIndex: 2,
      explanation: "Ethane has 1 C–C single bond and 6 C–H single bonds, totaling 7 covalent bonds.",
    },
    {
      question: "What is the chemical name of Baking Soda?",
      options: ["Sodium Carbonate", "Sodium Hydrogen Carbonate (Sodium Bicarbonate)", "Calcium Oxychloride", "Sodium Hydroxide"],
      correctIndex: 1,
      explanation: "Baking Soda is Sodium Hydrogen Carbonate (NaHCO₃).",
    },
    {
      question: "Chips manufacturers flush bags of potato chips with which gas to prevent rancidity?",
      options: ["Oxygen", "Hydrogen", "Nitrogen", "Chlorine"],
      correctIndex: 2,
      explanation: "Unreactive Nitrogen (N₂) gas prevents the oxidation (rancidity) of oils and fats in chips.",
    },
    {
      question: "An element X forms an oxide X₂O₃. Which group of the modern periodic table does X likely belong to?",
      options: ["Group 1", "Group 2", "Group 13", "Group 17"],
      correctIndex: 2,
      explanation: "In X₂O₃, the valency of X is 3, which corresponds to Group 13 elements like Aluminium (Al₂O₃).",
    },
    {
      question: "Which acid is naturally present in Ant Sting and Nettle Sting?",
      options: ["Acetic acid", "Citric acid", "Methanoic acid (Formic acid)", "Lactic acid"],
      correctIndex: 2,
      explanation: "Ant sting injects Methanoic acid (HCOOH), which causes burning pain neutralized by mild bases like baking soda.",
    },
    {
      question: "Pure gold (24 carat) is alloyed with Copper or Silver to make jewellery of:",
      options: ["22 carat", "100 carat", "28 carat", "50 carat"],
      correctIndex: 0,
      explanation: "24-carat gold is very soft, so 22 parts gold is alloyed with 2 parts Cu or Ag to make durable 22-carat jewellery.",
    },
  ],
  Mathematics: [
    {
      question: "If the discriminant D = b² - 4ac of a quadratic equation is zero (D = 0), then its roots are:",
      options: ["Real and distinct", "Real and equal", "Imaginary (not real)", "Always zero"],
      correctIndex: 1,
      explanation: "When b² - 4ac = 0, both roots equal -b / (2a), so the roots are real and equal.",
    },
    {
      question: "What is the sum of the zeroes of the quadratic polynomial p(x) = x² - 7x + 12?",
      options: ["-7", "7", "12", "-12"],
      correctIndex: 1,
      explanation: "Sum of zeroes (α + β) = -b/a = -(-7)/1 = 7.",
    },
    {
      question: "In an Arithmetic Progression (AP), if a = 5 and d = 3, what is the 10th term (a₁₀)?",
      options: ["32", "35", "27", "30"],
      correctIndex: 0,
      explanation: "a₁₀ = a + 9d = 5 + 9(3) = 5 + 27 = 32.",
    },
    {
      question: "The distance of the point P(3, 4) from the origin (0, 0) is:",
      options: ["7 units", "5 units", "1 unit", "25 units"],
      correctIndex: 1,
      explanation: "Distance from origin = √(x² + y²) = √(3² + 4²) = √25 = 5 units.",
    },
    {
      question: "What is the value of sin² 30° + cos² 30°?",
      options: ["0", "1/2", "1", "√3/2"],
      correctIndex: 2,
      explanation: "By the fundamental trigonometric identity sin²θ + cos²θ = 1 for all θ, sin² 30° + cos² 30° = 1.",
    },
    {
      question: "How many tangents can be drawn to a circle from an external point?",
      options: ["1", "2", "3", "Infinitely many"],
      correctIndex: 1,
      explanation: "Exactly 2 tangents of equal length can be drawn to a circle from any external point.",
    },
    {
      question: "If the probability of winning a game is 0.7, what is the probability of losing it?",
      options: ["0.7", "0.3", "1.7", "0"],
      correctIndex: 1,
      explanation: "Since P(E) + P(not E) = 1, P(losing) = 1 - 0.7 = 0.3.",
    },
    {
      question: "If two triangles are similar and the ratio of their corresponding sides is 3 : 5, then the ratio of their perimeters is:",
      options: ["9 : 25", "3 : 5", "√3 : √5", "6 : 10"],
      correctIndex: 1,
      explanation: "The ratio of the perimeters of two similar triangles is equal to the ratio of their corresponding sides (3 : 5).",
    },
    {
      question: "What is the coordinates of the midpoint of the segment joining (2, 6) and (4, 8)?",
      options: ["(6, 14)", "(3, 7)", "(2, 2)", "(1, 1)"],
      correctIndex: 1,
      explanation: "Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2) = ((2 + 4)/2, (6 + 8)/2) = (3, 7).",
    },
    {
      question: "The HCF of two prime numbers p and q is always:",
      options: ["p × q", "1", "p + q", "0"],
      correctIndex: 1,
      explanation: "Two distinct prime numbers have no common factor other than 1, so their HCF is 1.",
    },
  ],
};

export const INITIAL_MODULES: LearningModule[] = RAW_INITIAL_MODULES.map((mod) => {
  const allUnits = mod.units.map((u) => ({
    ...u,
    xpReward: u.checkpointQuestions.length * 10,
  }));

  const totalXp = allUnits.reduce((sum, u) => sum + u.xpReward, 0);
  return {
    ...mod,
    units: allUnits,
    totalXp,
  };
});

export const STAGGERED_TIME_SLOTS: {
  slot: string;
  pairings: { classGrade: ClassGrade; subject: CoreSubject }[];
}[] = [
  {
    slot: "15:00 UTC • Global Slot",
    pairings: [
      { classGrade: 9, subject: "Physics" },
      { classGrade: 10, subject: "Mathematics" },
      { classGrade: 11, subject: "Chemistry" },
      { classGrade: 12, subject: "Physics" },
    ],
  },
  {
    slot: "16:00 UTC • Global Slot",
    pairings: [
      { classGrade: 10, subject: "Physics" },
      { classGrade: 9, subject: "Mathematics" },
      { classGrade: 11, subject: "Physics" },
      { classGrade: 12, subject: "Mathematics" },
    ],
  },
  {
    slot: "17:00 UTC • Global Slot",
    pairings: [
      { classGrade: 9, subject: "Chemistry" },
      { classGrade: 10, subject: "Chemistry" },
      { classGrade: 11, subject: "Mathematics" },
      { classGrade: 12, subject: "Chemistry" },
    ],
  },
];

export const INITIAL_CONTESTS: QuizContest[] = [
  // ==========================================================================
  // CLASS 10 QUIZZES (Full Syllabus + Selected Chapters Track • 3 PM, 4 PM, 5 PM)
  // ==========================================================================
  {
    id: "quiz-c10-math-daily-full",
    title: "Class 10 Mathematics Daily Quiz (Full Syllabus)",
    subtitle: "Complete Class 10 Mathematics Syllabus • Ideal for Full Revision & Benchmark Practice",
    type: "DAILY",
    syllabusScope: "FULL_SYLLABUS",
    includedChapters: ["All Chapters (100% Complete Class 10 Mathematics Syllabus)"],
    board: "BOTH",
    classGrade: 10,
    subject: "Mathematics",
    scheduledTimeSlot: "15:00 UTC • Global Slot",
    frequencyLabel: "Once a Day • 3:00 PM Slot",
    entryFeeInr: 49,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win +400 Bonus Credits • Top 10 Win +100 Bonus Credits",
    xpReward: 0,
    durationMinutes: 15,
    participantsCount: 1640,
    startsInLabel: "LIVE NOW • 3:00 PM Daily Slot",
    isLive: true,
    questions: [
      {
        id: "c10-m-1",
        question: "If α and β are the zeroes of x² - 5x + 6, then the value of α² + β² is:",
        options: ["13", "25", "19", "12"],
        correctIndex: 0,
        explanation: "α + β = 5 and αβ = 6. Therefore α² + β² = (α + β)² - 2αβ = 25 - 12 = 13.",
      },
      {
        id: "c10-m-2",
        question: "If sin θ + cos θ = √2, then the value of tan θ + cot θ is:",
        options: ["1", "2", "√2", "4"],
        correctIndex: 1,
        explanation: "Squaring both sides: 1 + 2sinθcosθ = 2 => sinθcosθ = 1/2. Hence tanθ + cotθ = 1/(sinθcosθ) = 2.",
      },
      {
        id: "c10-m-3",
        question: "If the sum of the first n terms of an AP is 3n² + 5n, then its common difference d is:",
        options: ["3", "5", "6", "8"],
        correctIndex: 2,
        explanation: "For Sn = An² + Bn, the common difference d = 2A = 2(3) = 6.",
      },
    ],
  },
  {
    id: "quiz-c10-math-daily-selected",
    title: "Class 10 Mathematics Daily Quiz (Selected Chapters)",
    subtitle: "Targeted Chapter-Group Quiz • Only tests the announced chapters below",
    type: "DAILY",
    syllabusScope: "SELECTED_CHAPTERS",
    includedChapters: [
      "Ch 1: Introduction to Trigonometry & Identities",
      "Ch 2: Quadratic Equations & Nature of Roots",
    ],
    board: "BOTH",
    classGrade: 10,
    subject: "Mathematics",
    scheduledTimeSlot: "15:00 UTC • Global Slot",
    frequencyLabel: "Once a Day • 3:00 PM Slot",
    entryFeeInr: 49,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win +400 Bonus Credits • Top 10 Win +100 Bonus Credits",
    xpReward: 0,
    durationMinutes: 15,
    participantsCount: 1890,
    startsInLabel: "LIVE NOW • 3:00 PM Daily Slot",
    isLive: true,
    questions: [
      {
        id: "c10-ms-1",
        question: "If tan θ = 4/3, then the value of sin θ (for acute angle θ) is:",
        options: ["3/5", "4/5", "5/4", "3/4"],
        correctIndex: 1,
        explanation: "By Pythagoras triplet (3, 4, 5), Hypotenuse H = 5, so sin θ = P/H = 4/5.",
      },
      {
        id: "c10-ms-2",
        question: "For what positive value of k does 2x² + kx + 8 = 0 have real and equal roots?",
        options: ["4", "8", "16", "2"],
        correctIndex: 1,
        explanation: "D = b² - 4ac = k² - 4(2)(8) = 0 => k² = 64 => k = 8.",
      },
    ],
  },
  {
    id: "quiz-c10-phys-daily-full",
    title: "Class 10 Physics Daily Quiz (Full Syllabus)",
    subtitle: "Complete Class 10 Physics Syllabus • Ideal for Full Revision & Benchmark Practice",
    type: "DAILY",
    syllabusScope: "FULL_SYLLABUS",
    includedChapters: ["All Chapters (100% Complete Class 10 Physics Syllabus)"],
    board: "BOTH",
    classGrade: 10,
    subject: "Physics",
    scheduledTimeSlot: "16:00 UTC • Global Slot",
    frequencyLabel: "Once a Day • 4:00 PM Slot",
    entryFeeInr: 49,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win +400 Bonus Credits • Top 10 Win +100 Bonus Credits",
    xpReward: 0,
    durationMinutes: 15,
    participantsCount: 1428,
    startsInLabel: "LIVE NOW • 4:00 PM Daily Slot",
    isLive: true,
    questions: [
      {
        id: "c10-p-1",
        question: "Two resistors of 6 Ω and 3 Ω are connected in parallel. What is their equivalent resistance?",
        options: ["9 Ω", "2 Ω", "4.5 Ω", "0.5 Ω"],
        correctIndex: 1,
        explanation: "R_eq = (R1 × R2) / (R1 + R2) = (6 × 3) / (6 + 3) = 18 / 9 = 2 Ω.",
      },
      {
        id: "c10-p-2",
        question: "When white light passes through a glass prism, which colour deviates the MOST?",
        options: ["Red", "Yellow", "Green", "Violet"],
        correctIndex: 3,
        explanation: "Violet has the shortest wavelength and highest refractive index in glass, so it deviates the most.",
      },
    ],
  },
  {
    id: "quiz-c10-phys-daily-selected",
    title: "Class 10 Physics Daily Quiz (Selected Chapters)",
    subtitle: "Targeted Chapter-Group Quiz • Only tests the announced chapters below",
    type: "DAILY",
    syllabusScope: "SELECTED_CHAPTERS",
    includedChapters: [
      "Ch 1: Light – Reflection & Refraction",
      "Ch 2: Human Eye & The Colourful World",
    ],
    board: "BOTH",
    classGrade: 10,
    subject: "Physics",
    scheduledTimeSlot: "16:00 UTC • Global Slot",
    frequencyLabel: "Once a Day • 4:00 PM Slot",
    entryFeeInr: 49,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win +400 Bonus Credits • Top 10 Win +100 Bonus Credits",
    xpReward: 0,
    durationMinutes: 15,
    participantsCount: 1750,
    startsInLabel: "LIVE NOW • 4:00 PM Daily Slot",
    isLive: true,
    questions: [
      {
        id: "c10-ps-1",
        question: "What is the focal length of a lens whose power is +2.0 Dioptre?",
        options: ["+50 cm", "-50 cm", "+20 cm", "-20 cm"],
        correctIndex: 0,
        explanation: "f (in cm) = 100 / P = 100 / 2.0 = +50 cm.",
      },
      {
        id: "c10-ps-2",
        question: "The clear sky appears blue due to which optical phenomenon?",
        options: ["Refraction", "Dispersion", "Scattering of light", "Total internal reflection"],
        correctIndex: 2,
        explanation: "Fine particles in the atmosphere scatter shorter-wavelength blue light much more strongly than red light.",
      },
    ],
  },
  {
    id: "quiz-c10-chem-daily-selected",
    title: "Class 10 Chemistry Daily Quiz (Selected Chapters)",
    subtitle: "Targeted Chapter-Group Quiz • Only tests the announced chapters below",
    type: "DAILY",
    syllabusScope: "SELECTED_CHAPTERS",
    includedChapters: [
      "Ch 1: Chemical Reactions & Equations",
      "Ch 2: Acids, Bases & Salts",
    ],
    board: "BOTH",
    classGrade: 10,
    subject: "Chemistry",
    scheduledTimeSlot: "17:00 UTC • Global Slot",
    frequencyLabel: "Once a Day • 5:00 PM Slot",
    entryFeeInr: 49,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win +400 Bonus Credits • Top 10 Win +100 Bonus Credits",
    xpReward: 0,
    durationMinutes: 15,
    participantsCount: 1190,
    startsInLabel: "UPCOMING TODAY • 5:00 PM Daily Slot",
    isLive: false,
    questions: [
      {
        id: "c10-c-1",
        question: "What is the chemical formula of Plaster of Paris?",
        options: ["CaSO₄ · 2H₂O", "CaSO₄ · ½H₂O", "CaCO₃", "Na₂CO₃ · 10H₂O"],
        correctIndex: 1,
        explanation: "Plaster of Paris is Calcium Sulphate Hemihydrate (CaSO₄ · ½H₂O).",
      },
    ],
  },
  {
    id: "quiz-c10-phys-weekly",
    title: "Class 10 Physics Weekly Competition (Selected Chapters)",
    subtitle: "Once a Week Sunday Showdown • Tests the 2 announced chapters below",
    type: "WEEKLY",
    syllabusScope: "SELECTED_CHAPTERS",
    includedChapters: [
      "Ch 1: Light – Reflection & Refraction",
      "Ch 2: Electricity & Ohm's Law Circuits",
    ],
    board: "BOTH",
    classGrade: 10,
    subject: "Physics",
    scheduledTimeSlot: "Sunday • 16:00 UTC",
    frequencyLabel: "Once a Week • Sunday 4:00 PM",
    entryFeeInr: 149,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win +1,200 Bonus Credits • Top 10 Win +400 Bonus Credits",
    xpReward: 0,
    durationMinutes: 25,
    participantsCount: 3890,
    startsInLabel: "UPCOMING • This Sunday at 4:00 PM",
    isLive: false,
    questions: [
      {
        id: "c10-pw-1",
        question: "What is the focal length of a lens whose power is +2.0 Dioptre?",
        options: ["+50 cm", "-50 cm", "+20 cm", "-20 cm"],
        correctIndex: 0,
        explanation: "f (in cm) = 100 / P = 100 / 2.0 = +50 cm.",
      },
    ],
  },
  {
    id: "quiz-c10-math-monthly",
    title: "Class 10 Mathematics Monthly Competition (Full Syllabus)",
    subtitle: "Full Class 10 Mathematics Benchmark • Much Tougher Exam (Once a Month • Predicts High Board Grades)",
    type: "MONTHLY",
    syllabusScope: "FULL_SYLLABUS",
    includedChapters: ["All Chapters (100% Complete Class 10 Mathematics Syllabus)"],
    board: "BOTH",
    classGrade: 10,
    subject: "Mathematics",
    scheduledTimeSlot: "Last Sunday • 15:00 UTC",
    frequencyLabel: "Once a Month • 3:00 PM Slot",
    entryFeeInr: 499,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win +2,600 Bonus Credits • Top 10 Win +1,000 Bonus Credits",
    xpReward: 0,
    durationMinutes: 45,
    participantsCount: 5420,
    startsInLabel: "UPCOMING • Month-End Sunday at 3:00 PM",
    isLive: false,
    questions: [
      {
        id: "c10-mm-1",
        question: "If sec θ + tan θ = 4, then the value of sec θ - tan θ is:",
        options: ["4", "1/4", "1/2", "2"],
        correctIndex: 1,
        explanation: "Since sec²θ - tan²θ = 1, sec θ - tan θ = 1 / (sec θ + tan θ) = 1/4.",
      },
    ],
  },

  // ==========================================================================
  // CLASS 9 QUIZZES (Full Syllabus + Selected Chapters • Great for Class 9 & Class 10 Revisers!)
  // ==========================================================================
  {
    id: "quiz-c9-phys-daily-full",
    title: "Class 9 Physics Daily Quiz (Full Syllabus)",
    subtitle: "Complete Class 9 Physics Syllabus • Great for Class 9 Students & Class 10 Full-Syllabus Revision",
    type: "DAILY",
    syllabusScope: "FULL_SYLLABUS",
    includedChapters: ["All Chapters (Motion, Laws of Motion, Gravitation, Work & Energy, Sound)"],
    board: "BOTH",
    classGrade: 9,
    subject: "Physics",
    scheduledTimeSlot: "15:00 UTC • Global Slot",
    frequencyLabel: "Once a Day • 3:00 PM Slot",
    entryFeeInr: 49,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win +400 Bonus Credits • Top 10 Win +100 Bonus Credits",
    xpReward: 0,
    durationMinutes: 15,
    participantsCount: 1120,
    startsInLabel: "LIVE NOW • 3:00 PM Daily Slot",
    isLive: true,
    questions: [
      {
        id: "c9-p-1",
        question: "The slope of a velocity-time (v-t) graph represents:",
        options: ["Displacement", "Distance", "Acceleration", "Speed"],
        correctIndex: 2,
        explanation: "Slope of v-t graph = Δv / Δt = Acceleration.",
      },
      {
        id: "c9-p-2",
        question: "If the momentum of a body is doubled, its kinetic energy becomes:",
        options: ["2 times", "4 times", "Half", "Remains same"],
        correctIndex: 1,
        explanation: "KE = p² / (2m). Doubling p makes KE 4 times.",
      },
    ],
  },
  {
    id: "quiz-c9-phys-daily-selected",
    title: "Class 9 Physics Daily Quiz (Selected Chapters)",
    subtitle: "Targeted Chapter-Group Quiz • Only tests the announced chapters below",
    type: "DAILY",
    syllabusScope: "SELECTED_CHAPTERS",
    includedChapters: [
      "Ch 1: Motion & Equations of Motion",
      "Ch 2: Force & Newton's Laws of Motion",
    ],
    board: "BOTH",
    classGrade: 9,
    subject: "Physics",
    scheduledTimeSlot: "15:00 UTC • Global Slot",
    frequencyLabel: "Once a Day • 3:00 PM Slot",
    entryFeeInr: 49,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win +400 Bonus Credits • Top 10 Win +100 Bonus Credits",
    xpReward: 0,
    durationMinutes: 15,
    participantsCount: 1340,
    startsInLabel: "LIVE NOW • 3:00 PM Daily Slot",
    isLive: true,
    questions: [
      {
        id: "c9-ps-1",
        question: "A car accelerates uniformly from 18 km/h to 36 km/h in 5 seconds. Its acceleration is:",
        options: ["1 m/s²", "2 m/s²", "3.6 m/s²", "5 m/s²"],
        correctIndex: 0,
        explanation: "u = 18 km/h = 5 m/s, v = 36 km/h = 10 m/s. a = (10 - 5) / 5 = 1 m/s².",
      },
    ],
  },
  {
    id: "quiz-c9-math-daily",
    title: "Class 9 Mathematics Daily Quiz (Full Syllabus)",
    subtitle: "Complete Class 9 Mathematics Syllabus • Once a Day at 4:00 PM",
    type: "DAILY",
    syllabusScope: "FULL_SYLLABUS",
    includedChapters: ["All Chapters (Number Systems, Polynomials, Geometry, Mensuration)"],
    board: "BOTH",
    classGrade: 9,
    subject: "Mathematics",
    scheduledTimeSlot: "16:00 UTC • Global Slot",
    frequencyLabel: "Once a Day • 4:00 PM Slot",
    entryFeeInr: 49,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win +400 Bonus Credits • Top 10 Win +100 Bonus Credits",
    xpReward: 0,
    durationMinutes: 15,
    participantsCount: 1280,
    startsInLabel: "LIVE NOW • 4:00 PM Daily Slot",
    isLive: true,
    questions: [
      {
        id: "c9-m-1",
        question: "If x + 1/x = 4, then the value of x² + 1/x² is:",
        options: ["16", "14", "12", "18"],
        correctIndex: 1,
        explanation: "x² + 1/x² = (x + 1/x)² - 2 = 4² - 2 = 14.",
      },
    ],
  },
  {
    id: "quiz-c9-chem-daily",
    title: "Class 9 Chemistry Daily Quiz (Selected Chapters)",
    subtitle: "Targeted Chapter-Group Quiz • Only tests the announced chapters below",
    type: "DAILY",
    syllabusScope: "SELECTED_CHAPTERS",
    includedChapters: [
      "Ch 1: Matter in Our Surroundings",
      "Ch 2: Atoms, Molecules & Mole Concept",
    ],
    board: "BOTH",
    classGrade: 9,
    subject: "Chemistry",
    scheduledTimeSlot: "17:00 UTC • Global Slot",
    frequencyLabel: "Once a Day • 5:00 PM Slot",
    entryFeeInr: 49,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win +400 Bonus Credits • Top 10 Win +100 Bonus Credits",
    xpReward: 0,
    durationMinutes: 15,
    participantsCount: 890,
    startsInLabel: "UPCOMING TODAY • 5:00 PM Daily Slot",
    isLive: false,
    questions: [
      {
        id: "c9-c-1",
        question: "How many moles are present in 36 g of water (H₂O)?",
        options: ["1 mole", "2 moles", "3 moles", "18 moles"],
        correctIndex: 1,
        explanation: "Molar mass of H₂O = 18 g/mol. Moles = 36 / 18 = 2 moles.",
      },
    ],
  },
  {
    id: "quiz-c9-math-monthly",
    title: "Class 9 Mathematics Monthly Competition (Full Syllabus)",
    subtitle: "Full Class 9 Mathematics Benchmark • Much Tougher Exam (Once a Month • 4:00 PM Slot)",
    type: "MONTHLY",
    syllabusScope: "FULL_SYLLABUS",
    includedChapters: ["All Chapters (100% Complete Class 9 Mathematics Syllabus)"],
    board: "BOTH",
    classGrade: 9,
    subject: "Mathematics",
    scheduledTimeSlot: "Last Sunday • 16:00 UTC",
    frequencyLabel: "Once a Month • 4:00 PM Slot",
    entryFeeInr: 499,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win +2,600 Bonus Credits • Top 10 Win +1,000 Bonus Credits",
    xpReward: 0,
    durationMinutes: 45,
    participantsCount: 3100,
    startsInLabel: "UPCOMING • Month-End Sunday at 4:00 PM",
    isLive: false,
    questions: [
      {
        id: "c9-mm-1",
        question: "The degree of a non-zero constant polynomial is:",
        options: ["1", "0", "Not defined", "Any real number"],
        correctIndex: 1,
        explanation: "A non-zero constant polynomial c can be written as c·x⁰, so its degree is 0.",
      },
    ],
  },

  // ==========================================================================
  // CLASS 11 QUIZZES (Full Syllabus + Selected Chapters)
  // ==========================================================================
  {
    id: "quiz-c11-chem-daily",
    title: "Class 11 Chemistry Daily Quiz (Selected Chapters)",
    subtitle: "Targeted Chapter-Group Quiz • Only tests the announced chapters below",
    type: "DAILY",
    syllabusScope: "SELECTED_CHAPTERS",
    includedChapters: [
      "Ch 1: Some Basic Concepts of Chemistry (Mole Concept)",
      "Ch 2: Structure of Atom & Quantum Numbers",
    ],
    board: "BOTH",
    classGrade: 11,
    subject: "Chemistry",
    scheduledTimeSlot: "15:00 UTC • Global Slot",
    frequencyLabel: "Once a Day • 3:00 PM Slot",
    entryFeeInr: 49,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win +400 Bonus Credits • Top 10 Win +100 Bonus Credits",
    xpReward: 0,
    durationMinutes: 15,
    participantsCount: 840,
    startsInLabel: "LIVE NOW • 3:00 PM Daily Slot",
    isLive: true,
    questions: [
      {
        id: "c11-c-1",
        question: "The number of significant figures in 0.00250 is:",
        options: ["2", "3", "5", "6"],
        correctIndex: 1,
        explanation: "Leading zeros are not significant, trailing zero after decimal is significant: 2, 5, 0 => 3 significant figures.",
      },
    ],
  },
  {
    id: "quiz-c11-phys-daily",
    title: "Class 11 Physics Daily Quiz (Full Syllabus)",
    subtitle: "Complete Class 11 Physics Syllabus • Once a Day at 4:00 PM",
    type: "DAILY",
    syllabusScope: "FULL_SYLLABUS",
    includedChapters: ["All Chapters (100% Complete Class 11 Physics Syllabus)"],
    board: "BOTH",
    classGrade: 11,
    subject: "Physics",
    scheduledTimeSlot: "16:00 UTC • Global Slot",
    frequencyLabel: "Once a Day • 4:00 PM Slot",
    entryFeeInr: 49,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win +400 Bonus Credits • Top 10 Win +100 Bonus Credits",
    xpReward: 0,
    durationMinutes: 15,
    participantsCount: 970,
    startsInLabel: "LIVE NOW • 4:00 PM Daily Slot",
    isLive: true,
    questions: [
      {
        id: "c11-p-1",
        question: "At what angle of projection is the horizontal range of a projectile maximum?",
        options: ["30°", "45°", "60°", "90°"],
        correctIndex: 1,
        explanation: "R = u²sin(2θ)/g is maximum when sin(2θ) = 1 => 2θ = 90° => θ = 45°.",
      },
    ],
  },

  // ==========================================================================
  // CLASS 12 QUIZZES (Full Syllabus + Selected Chapters)
  // ==========================================================================
  {
    id: "quiz-c12-phys-daily",
    title: "Class 12 Physics Daily Quiz (Full Syllabus)",
    subtitle: "Complete Class 12 Physics Syllabus • Once a Day at 3:00 PM",
    type: "DAILY",
    syllabusScope: "FULL_SYLLABUS",
    includedChapters: ["All Chapters (100% Complete Class 12 Physics Syllabus)"],
    board: "BOTH",
    classGrade: 12,
    subject: "Physics",
    scheduledTimeSlot: "15:00 UTC • Global Slot",
    frequencyLabel: "Once a Day • 3:00 PM Slot",
    entryFeeInr: 49,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win +400 Bonus Credits • Top 10 Win +100 Bonus Credits",
    xpReward: 0,
    durationMinutes: 15,
    participantsCount: 1340,
    startsInLabel: "LIVE NOW • 3:00 PM Daily Slot",
    isLive: true,
    questions: [
      {
        id: "c12-p-1",
        question: "SI unit of Electric Flux is:",
        options: ["V · m", "V / m", "N / C", "C² / N·m²"],
        correctIndex: 0,
        explanation: "Φ = E · A = (V/m) · m² = Volt-metre (V·m).",
      },
    ],
  },
  {
    id: "quiz-c12-math-daily",
    title: "Class 12 Mathematics Daily Quiz (Selected Chapters)",
    subtitle: "Targeted Chapter-Group Quiz • Only tests the announced chapters below",
    type: "DAILY",
    syllabusScope: "SELECTED_CHAPTERS",
    includedChapters: [
      "Ch 1: Continuity & Differentiability (Calculus)",
      "Ch 2: Applications of Derivatives",
    ],
    board: "BOTH",
    classGrade: 12,
    subject: "Mathematics",
    scheduledTimeSlot: "16:00 UTC • Global Slot",
    frequencyLabel: "Once a Day • 4:00 PM Slot",
    entryFeeInr: 49,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win +400 Bonus Credits • Top 10 Win +100 Bonus Credits",
    xpReward: 0,
    durationMinutes: 15,
    participantsCount: 1180,
    startsInLabel: "LIVE NOW • 4:00 PM Daily Slot",
    isLive: true,
    questions: [
      {
        id: "c12-m-1",
        question: "The derivative of e^(sin x) with respect to cos x is:",
        options: [
          "-cot x · e^(sin x)",
          "tan x · e^(sin x)",
          "cos x · e^(sin x)",
          "-sin x · e^(sin x)",
        ],
        correctIndex: 0,
        explanation: "du/dx = cos x · e^(sin x), dv/dx = -sin x. So du/dv = -cot x · e^(sin x).",
      },
    ],
  },
];

export interface LeaderboardEntry {
  rank: number;
  name: string;
  username: string;
  board: "CBSE" | "ICSE";
  classGrade: number;
  city: string;
  xp: number;
  rating: number;
  streak: number;
  badges: number;
  avatar: string;
  isCurrentUser?: boolean;
}

export const LEADERBOARD_DATA: LeaderboardEntry[] = [
  {
    rank: 1,
    name: "Liam Carter",
    username: "@liam_optics",
    board: "ICSE",
    classGrade: 10,
    city: "London • UK",
    xp: 8450,
    rating: 1942,
    streak: 48,
    badges: 19,
    avatar: "🦁",
  },
  {
    rank: 2,
    name: "Maya Lin",
    username: "@maya_quantum",
    board: "CBSE",
    classGrade: 10,
    city: "Singapore",
    xp: 7920,
    rating: 1895,
    streak: 39,
    badges: 17,
    avatar: "🦊",
  },
  {
    rank: 3,
    name: "Aarav Sharma",
    username: "@aarav_trig10",
    board: "CBSE",
    classGrade: 10,
    city: "New Delhi • IN",
    xp: 7410,
    rating: 1860,
    streak: 35,
    badges: 16,
    avatar: "🐉",
  },
  {
    rank: 4,
    name: "Elena Rostova",
    username: "@elena_physics9",
    board: "ICSE",
    classGrade: 9,
    city: "New York • USA",
    xp: 6980,
    rating: 1835,
    streak: 31,
    badges: 15,
    avatar: "🦄",
  },
  {
    rank: 5,
    name: "Noah Al-Mansoor",
    username: "@noah_scholar",
    board: "CBSE",
    classGrade: 9,
    city: "Dubai • UAE",
    xp: 6540,
    rating: 1810,
    streak: 29,
    badges: 14,
    avatar: "🐼",
  },
  {
    rank: 6,
    name: "Sophia Martinez",
    username: "@sophia_chem10",
    board: "CBSE",
    classGrade: 10,
    city: "Toronto • CA",
    xp: 6190,
    rating: 1788,
    streak: 27,
    badges: 14,
    avatar: "🦋",
  },
  {
    rank: 7,
    name: "Lucas Weber",
    username: "@lucas_math9",
    board: "ICSE",
    classGrade: 9,
    city: "Berlin • DE",
    xp: 5830,
    rating: 1764,
    streak: 25,
    badges: 13,
    avatar: "🦅",
  },
  {
    rank: 8,
    name: "Saanvi Iyer",
    username: "@saanvi_newton",
    board: "CBSE",
    classGrade: 10,
    city: "Mumbai • IN",
    xp: 5490,
    rating: 1742,
    streak: 24,
    badges: 12,
    avatar: "🐬",
  },
  {
    rank: 9,
    name: "Chloe Dubois",
    username: "@chloe_vectors10",
    board: "ICSE",
    classGrade: 10,
    city: "Paris • FR",
    xp: 5120,
    rating: 1720,
    streak: 22,
    badges: 12,
    avatar: "🐯",
  },
  {
    rank: 10,
    name: "Ethan Mitchell",
    username: "@ethan_atoms9",
    board: "CBSE",
    classGrade: 9,
    city: "Sydney • AU",
    xp: 4860,
    rating: 1705,
    streak: 21,
    badges: 11,
    avatar: "🦢",
  },
  {
    rank: 11,
    name: "Kenji Takahashi",
    username: "@kenji_algebra",
    board: "CBSE",
    classGrade: 10,
    city: "Tokyo • JP",
    xp: 4590,
    rating: 1688,
    streak: 19,
    badges: 11,
    avatar: "🐺",
  },
  {
    rank: 12,
    name: "Kavya Menon",
    username: "@kavya_motion9",
    board: "ICSE",
    classGrade: 9,
    city: "Bengaluru • IN",
    xp: 4310,
    rating: 1672,
    streak: 18,
    badges: 10,
    avatar: "🦜",
  },
  {
    rank: 13,
    name: "Mateo Silva",
    username: "@mateo_stem10",
    board: "CBSE",
    classGrade: 10,
    city: "Madrid • ES",
    xp: 4050,
    rating: 1655,
    streak: 17,
    badges: 10,
    avatar: "🦖",
  },
  {
    rank: 14,
    name: "Hannah Keller",
    username: "@hannah_circles9",
    board: "CBSE",
    classGrade: 9,
    city: "Zurich • CH",
    xp: 3820,
    rating: 1640,
    streak: 16,
    badges: 9,
    avatar: "🦩",
  },
  {
    rank: 15,
    name: "Devansh Patel",
    username: "@devansh_light10",
    board: "CBSE",
    classGrade: 10,
    city: "Chicago • USA",
    xp: 3590,
    rating: 1624,
    streak: 15,
    badges: 9,
    avatar: "🐆",
  },
  {
    rank: 16,
    name: "Olivia Wright",
    username: "@olivia_gcse9",
    board: "ICSE",
    classGrade: 9,
    city: "Manchester • UK",
    xp: 3340,
    rating: 1608,
    streak: 14,
    badges: 8,
    avatar: "🦉",
  },
  {
    rank: 17,
    name: "Harshvardhan Rao",
    username: "@harsh_circuits10",
    board: "CBSE",
    classGrade: 10,
    city: "Hyderabad • IN",
    xp: 3110,
    rating: 1592,
    streak: 13,
    badges: 8,
    avatar: "🦈",
  },
  {
    rank: 18,
    name: "Zara Al-Hashemi",
    username: "@zara_poly9",
    board: "CBSE",
    classGrade: 9,
    city: "Abu Dhabi • UAE",
    xp: 2890,
    rating: 1576,
    streak: 12,
    badges: 7,
    avatar: "🐝",
  },
  {
    rank: 19,
    name: "Daniel Kim",
    username: "@daniel_grav9",
    board: "CBSE",
    classGrade: 9,
    city: "Seoul • KR",
    xp: 2640,
    rating: 1560,
    streak: 11,
    badges: 7,
    avatar: "🐢",
  },
  {
    rank: 20,
    name: "Riya Bansal",
    username: "@riya_acids10",
    board: "ICSE",
    classGrade: 10,
    city: "Melbourne • AU",
    xp: 2410,
    rating: 1545,
    streak: 10,
    badges: 6,
    avatar: "🦌",
  },
  {
    rank: 21,
    name: "Gabriel Costa",
    username: "@gabriel_force9",
    board: "CBSE",
    classGrade: 9,
    city: "Lisbon • PT",
    xp: 2180,
    rating: 1530,
    streak: 9,
    badges: 6,
    avatar: "🐎",
  },
  {
    rank: 22,
    name: "Sneha Krishnan",
    username: "@sneha_quad10",
    board: "ICSE",
    classGrade: 10,
    city: "Chennai • IN",
    xp: 1950,
    rating: 1515,
    streak: 8,
    badges: 5,
    avatar: "🦚",
  },
  {
    rank: 23,
    name: "Aiden O'Connor",
    username: "@aiden_sound9",
    board: "CBSE",
    classGrade: 9,
    city: "Dublin • IE",
    xp: 1720,
    rating: 1495,
    streak: 7,
    badges: 5,
    avatar: "🦦",
  },
  {
    rank: 24,
    name: "Emma Lindqvist",
    username: "@emma_optics10",
    board: "CBSE",
    classGrade: 10,
    city: "Stockholm • SE",
    xp: 1480,
    rating: 1480,
    streak: 6,
    badges: 4,
    avatar: "🐿️",
  },
  {
    rank: 25,
    name: "Pranav Mishra",
    username: "@pranav_work9",
    board: "CBSE",
    classGrade: 9,
    city: "Vancouver • CA",
    xp: 1210,
    rating: 1465,
    streak: 5,
    badges: 4,
    avatar: "🦔",
  },
];
