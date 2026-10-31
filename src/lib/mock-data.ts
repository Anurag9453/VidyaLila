export type BoardType = "CBSE" | "ICSE" | "BOTH";
export type ClassGrade = 6 | 7 | 8 | 9 | 10 | 11 | 12;
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
    name: "Shishya",
    hindiTitle: "शिष्य • Seeker",
    minXp: 0,
    maxXp: 1000,
    badgeEmoji: "🌱",
    gradient: "from-emerald-400 to-teal-600",
  },
  {
    name: "Sadhyapak",
    hindiTitle: "साधक • Explorer",
    minXp: 1000,
    maxXp: 2500,
    badgeEmoji: "⚡",
    gradient: "from-cyan-400 to-blue-600",
  },
  {
    name: "Vidyarthi",
    hindiTitle: "विद्यार्थी • Scholar",
    minXp: 2500,
    maxXp: 5000,
    badgeEmoji: "🔥",
    gradient: "from-amber-400 to-orange-600",
  },
  {
    name: "Maharathi",
    hindiTitle: "महारथी • Champion",
    minXp: 5000,
    maxXp: 10000,
    badgeEmoji: "👑",
    gradient: "from-fuchsia-500 to-purple-700",
  },
  {
    name: "Acharya",
    hindiTitle: "आचार्य • Grandmaster",
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
  {
    id: "mod-10-phy-1",
    slug: "light-reflection-refraction-mastery",
    chapterNumber: 1,
    title: "Light – Reflection & Refraction",
    subtitle: "Master concave/convex ray diagrams, mirror formula, and lens numericals with zero rote-learning!",
    subtitleHinglish: "Bina ratta maare Concave/Convex ray diagrams, mirror formula aur numericals चुटकियों me solve karo!",
    board: "BOTH",
    classGrade: 10,
    subject: "Physics",
    difficulty: "Board Special",
    badgeName: "Photon Ranger",
    badgeEmoji: "🔭",
    accentColor: "from-sky-500 to-indigo-600",
    totalXp: 450,
    estimatedMinutes: 40,
    units: [
      {
        id: "u-optics-1",
        title: "Spherical Mirrors & Sign Convention Hack",
        durationMinutes: 12,
        xpReward: 150,
        summary: "Understand Concave vs Convex mirrors using the 5-Second Cartesian Sign Trick used by board toppers.",
        summaryHinglish: "Concave aur Convex mirror ka difference aur 5-second wala + / - Sign Trick samjho taaki numerical kabhi galat na ho!",
        contentSections: [
          {
            heading: "Why Do Spoons Flip Your Face? 🥄",
            headingHinglish: "Chammach (Spoon) me chehra ulta kyun dikhta hai? 🥄",
            body: "Look at the inner curve of a shiny steel spoon—that's a Concave Mirror (converging). Flip it over—the bulging back is a Convex Mirror (diverging). In Class 10 Board exams, 90% of mistakes happen only in + and - signs!",
            bodyHinglish: "Ghar me ek chamakta hua steel ka spoon lo—uske andar wala गहरा हिस्सा Concave Mirror (converging) hai, aur piche wala उभरा हिस्सा Convex Mirror (diverging) hai! Board exam ke numericals me 90% students sirf + aur - sign lagane me galti karte hain.",
            formulaOrTip: "💡 Topper Trick: Object distance (u) is ALWAYS negative (-). Focal length (f) of Concave is Negative (-), Convex is Positive (+).",
            formulaOrTipHinglish: "💡 Desi Jugaad Trick: Object distance (u) HAMESHA minus (-) hoga! Concave ki focal length (f) Minus (-), aur Convex ki Plus (+) hoti hai.",
          },
          {
            heading: "The Mirror Formula & Magnification",
            headingHinglish: "Mirror Formula aur Magnification ka Asli Funda",
            body: "Whether the image is real & inverted or virtual & erect, one universal relation connects image distance (v), object distance (u), and focal length (f):",
            bodyHinglish: "Image chahe Real & Inverted bane ya Virtual & Erect, sirf ek universal formula teeno distances (v, u, aur f) ko jodta hai:",
            formulaOrTip: "1/v + 1/u = 1/f   |   Magnification (m) = -v/u = h'/h",
            formulaOrTipHinglish: "1/v + 1/u = 1/f   |   Magnification (m) = -v/u (Dhyan rahe: Mirror me -v/u hota hai, Lens me +v/u!)",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-opt-1",
            question: "An object is placed at 20 cm in front of a concave mirror of focal length 10 cm. Where will the image form?",
            questionHinglish: "Ek Concave mirror (focal length 10 cm) ke samne 20 cm par object rakha hai. Image kahan banegi?",
            options: [
              "At 20 cm in front of the mirror (At C)",
              "At 10 cm behind the mirror",
              "At infinity",
              "Between Pole and Focus",
            ],
            correctIndex: 0,
            explanation: "Since f = -10 cm, the center of curvature C = 2f = -20 cm. When an object is placed at C, a real, inverted, same-size image forms right at C (-20 cm)!",
            explanationHinglish: "Kyunki f = -10 cm hai, toh Center of Curvature C = 2f = -20 cm hoga. Jab object C par rakha hota hai, toh real, ulta aur barabar size ka image wahi C (-20 cm) par banta hai!",
          },
          {
            id: "q-opt-2",
            question: "Which mirror ALWAYS forms a diminished, virtual, and erect image regardless of object position?",
            questionHinglish: "Kaunsa mirror HAMESHA chhota (diminished), seedha (erect) aur virtual image banata hai, chahe object kahin bhi rakha ho?",
            options: ["Concave Mirror", "Plane Mirror", "Convex Mirror", "Parabolic Mirror"],
            correctIndex: 2,
            explanation: "A Convex Mirror diverges rays and always forms a virtual, erect, and diminished image—which is why it is used as a rear-view mirror in vehicles!",
            explanationHinglish: "Convex Mirror rays ko failata (diverge) hai aur hamesha seedha aur chhota image banata hai—isliye gaadiyon ke side mirror (rear-view) me Convex Mirror lagta hai!",
          },
        ],
      },
      {
        id: "u-optics-2",
        title: "Snell's Law & Refractive Index Superpowers",
        durationMinutes: 15,
        xpReward: 150,
        summary: "Why does a pencil look bent in water? Decode Refractive Index & Snell's Law.",
        summaryHinglish: "Paani ke glass me rakhi pencil tedhi kyun dikhti hai? Ao Refractive Index aur Snell's Law ko aasan bhasha me samjhein!",
        contentSections: [
          {
            heading: "Speed of Light in Different Media ⚡",
            headingHinglish: "Alag-alag Medium me Light ki Speed ⚡",
            body: "Light travels fastest in vacuum (c = 3 × 10⁸ m/s). When it enters glass or water, it slows down and bends! When going from Rarer to Denser medium, it bends TOWARDS the normal.",
            bodyHinglish: "Light vacuum me sabse tez bhaagti hai (c = 3 × 10⁸ m/s). Jaise hi wo hawa (Rarer) se kaanch ya paani (Denser) me ghusti hai, uski speed kam ho jaati hai aur wo Normal ki taraf mudti (bend hoti) hai!",
            formulaOrTip: "Refractive Index (n) = sin i / sin r = Speed of light in vacuum (c) / Speed in medium (v)",
            formulaOrTipHinglish: "Yaad rakhne ki trick: Rarer se Denser = Towards Normal (Bheed me speed slow) | Denser se Rarer = Away from Normal!",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-opt-3",
            question: "If the refractive index of diamond is 2.42, what does this statement mean?",
            questionHinglish: "Board Exam Favorite: 'Diamond ka refractive index 2.42 hai' — is baat ka kya matlab hai?",
            options: [
              "Light travels 2.42 times faster in diamond than air",
              "Speed of light in diamond is 1/2.42 times the speed of light in vacuum",
              "Diamond reflects 24.2% of light",
              "Critical angle of diamond is 2.42 degrees",
            ],
            correctIndex: 1,
            explanation: "Since n = c/v, v = c / 2.42. So light slows down by a factor of 2.42 inside diamond!",
            explanationHinglish: "Formula n = c/v ke hisaab se v = c / 2.42. Iska matlab diamond ke andar light ki speed vacuum ke muqable 2.42 guna kam ho jaati hai!",
          },
        ],
      },
      {
        id: "u-optics-3",
        title: "Power of Lens & Board Exam Numericals",
        durationMinutes: 13,
        xpReward: 150,
        summary: "Crack Dioptre questions and combined lens power in 30 seconds.",
        summaryHinglish: "Chashme ka number (+D aur -D) kya hota hai? Dioptre ke numericals 30 second me solve karo!",
        contentSections: [
          {
            heading: "Dioptre (D) - The Eye Doctor's Unit 👓",
            headingHinglish: "Dioptre (D) - Chashme ke Number ka Secret 👓",
            body: "Power of a lens is the reciprocal of its focal length IN METRES. Always convert cm to m before finding Power!",
            bodyHinglish: "Kisi bhi lens ki Power uski focal length (metre me) ka ulta (reciprocal) hoti hai. Agar focal length cm me di ho, toh 1/f ki jagah seedha 100/f लगाओ!",
            formulaOrTip: "P = 1 / f(in m) = 100 / f(in cm)  |  Convex Lens = +D, Concave Lens = -D",
            formulaOrTipHinglish: "P = 100 / f(cm me)  |  Plus (+) number matlab Convex Lens, Minus (-) number matlab Concave Lens!",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-opt-4",
            question: "A doctor prescribes a corrective lens of power +2.5 D. Find the focal length and nature of the lens.",
            questionHinglish: "Doctor ne +2.5 D power ka chashma likha hai. Lens ki focal length aur type batao:",
            options: [
              "+40 cm, Convex Lens",
              "-40 cm, Concave Lens",
              "+25 cm, Convex Lens",
              "-2.5 m, Concave Lens",
            ],
            correctIndex: 0,
            explanation: "f (in cm) = 100 / P = 100 / 2.5 = +40 cm. Positive sign indicates a Convex (converging) lens.",
            explanationHinglish: "f (cm me) = 100 / 2.5 = +40 cm. Aur kyunki sign + hai, toh ye Convex Lens hai!",
          },
        ],
      },
    ],
  },
  {
    id: "mod-10-phy-2",
    slug: "class-10-electricity-ohms-law-circuits",
    chapterNumber: 2,
    title: "Electricity, Ohm's Law & Circuit Boss",
    subtitle: "Solve complex series-parallel resistor networks, Joule's heating, and kWh bill problems effortlessly!",
    subtitleHinglish: "Series-Parallel circuits, wire kheenchna (stretching trick) aur ghar ke bijli bill (kWh) wale sawal aasani se seekho!",
    board: "BOTH",
    classGrade: 10,
    subject: "Physics",
    difficulty: "Board Special",
    badgeName: "Circuit Wizard",
    badgeEmoji: "⚡",
    accentColor: "from-amber-500 to-orange-600",
    totalXp: 450,
    estimatedMinutes: 45,
    units: [
      {
        id: "u-elec-1",
        title: "Ohm's Law & Resistance Factors (R = ρL/A)",
        durationMinutes: 15,
        xpReward: 150,
        summary: "What happens to resistance when a wire is stretched to double its length?",
        summaryHinglish: "Jab kisi taar (wire) ko kheench kar 2 guna lamba kar dein, toh Resistance par kya farak padta hai?",
        contentSections: [
          {
            heading: "Stretching a Wire: The n² Shortcut 🎯",
            headingHinglish: "Taar Kheenchne (Stretching) ka n² Shortcut 🎯",
            body: "When a wire is stretched to 'n' times its original length, its cross-sectional area becomes 1/n so volume stays constant. Hence new resistance becomes n² times!",
            bodyHinglish: "Jab hum wire ko kheench kar 'n' guna lamba karte hain, toh uski lambai 'n' guna badhti hai aur motai (Area) 'n' guna patli ho jaati hai. Isliye naya Resistance seedha n² guna ho jata hai!",
            formulaOrTip: "V = I × R   |   R = ρ(L/A)   |   If stretched n times: R_new = n² × R_old",
            formulaOrTipHinglish: "Agar wire double (2x) kheencha ➔ Resistance 2² = 4 guna! Agar triple (3x) kheencha ➔ 3² = 9 guna!",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-elec-1",
            question: "A wire of resistance 4 Ω is stretched to double its original length. What is its new resistance?",
            questionHinglish: "4 Ω resistance wale ek taar ko kheench kar uski length double (2x) kar di gayi. Naya resistance kya hoga?",
            options: ["8 Ω", "16 Ω", "2 Ω", "4 Ω"],
            correctIndex: 1,
            explanation: "Using the stretching shortcut R_new = n² × R = 2² × 4 = 16 Ω!",
            explanationHinglish: "Shortcut lagao: R_new = n² × R = 2² × 4 = 4 × 4 = 16 Ω!",
          },
        ],
      },
      {
        id: "u-elec-2",
        title: "Series vs Parallel Combination Tricks",
        durationMinutes: 15,
        xpReward: 150,
        summary: "Find equivalent resistance of bridge and triangle networks in seconds.",
        summaryHinglish: "Bina LCM me atke Parallel resistors ka answer 3 second me nikalo!",
        contentSections: [
          {
            heading: "Product over Sum Rule ⚡",
            headingHinglish: "Upopar Guna / Niche Jod (Product / Sum) Trick ⚡",
            body: "For two resistors R1 and R2 in parallel, don't waste time taking LCM of fractions—just multiply them and divide by their sum!",
            bodyHinglish: "Jab 2 resistors R1 aur R2 parallel me hon, toh 1/R1 + 1/R2 ka LCM lene me time mat gavao—seedha upar dono ko multiply karo aur niche dono ko plus kar do!",
            formulaOrTip: "R_parallel = (R₁ × R₂) / (R₁ + R₂)   |   R_series = R₁ + R₂",
            formulaOrTipHinglish: "Example: 6 Ω aur 3 Ω parallel me hain ➔ (6 × 3) / (6 + 3) = 18 / 9 = 2 Ω!",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-elec-2",
            question: "Two resistors of 6 Ω and 3 Ω are connected in parallel. What is their equivalent resistance?",
            questionHinglish: "6 Ω aur 3 Ω ke do resistors parallel me jude hain. Unka total equivalent resistance kitna hoga?",
            options: ["9 Ω", "2 Ω", "4.5 Ω", "1.5 Ω"],
            correctIndex: 1,
            explanation: "R_eq = (6 × 3) / (6 + 3) = 18 / 9 = 2 Ω.",
            explanationHinglish: "(6 × 3) / (6 + 3) = 18 / 9 = 2 Ω.",
          },
        ],
      },
      {
        id: "u-elec-3",
        title: "Joule's Law of Heating & Electric Power",
        durationMinutes: 15,
        xpReward: 150,
        summary: "Why is Tungsten used in bulbs and Nichrome in heaters? Master P = VI = I²R = V²/R.",
        summaryHinglish: "Bulb me Tungsten aur Heater me Nichrome kyun lagta hai? Power ke teeno formulas ka sahi istemal seekho!",
        contentSections: [
          {
            heading: "Which Power Formula to Use When? 💡",
            headingHinglish: "I²R kab lagayein aur V²/R kab lagayein? 💡",
            body: "Use P = I²R for Series circuits (where current I is constant), and use P = V²/R for Parallel household circuits (where voltage V = 220V is constant)!",
            bodyHinglish: "Series circuit me current (I) same rehta hai isliye P = I²R use karo. Ghar ki wiring (Parallel) me voltage (220V) same rehta hai isliye P = V²/R use karo!",
            formulaOrTip: "1 Commercial Unit (1 kWh) = 3.6 × 10⁶ Joules",
            formulaOrTipHinglish: "Ghar ke meter ka 1 Unit = 1 kWh = 3.6 × 10⁶ Joules!",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-elec-3",
            question: "How many Joules of electrical energy are equal to 1 kilowatt-hour (1 kWh)?",
            questionHinglish: "Bijli ke 1 Unit (1 kWh) me kitne Joules energy hoti hai?",
            options: ["3.6 × 10⁵ J", "3.6 × 10⁶ J", "3600 J", "1000 J"],
            correctIndex: 1,
            explanation: "1 kWh = 1000 W × 3600 s = 3,600,000 J = 3.6 × 10⁶ Joules.",
            explanationHinglish: "1 kW (1000 W) × 1 hour (3600 sec) = 3.6 × 10⁶ Joules.",
          },
        ],
      },
    ],
  },
  {
    id: "mod-10-chem-1",
    slug: "class-10-chemical-reactions-equations",
    chapterNumber: 1,
    title: "Chemical Reactions & Redox Mastery",
    subtitle: "Balance equations fast, spot Oxidation-Reduction, and remember all colour changes!",
    subtitleHinglish: "Equations balance karna, Oxidation-Reduction pehchanna aur saare colour changes yaad rakhne ki tricks!",
    board: "BOTH",
    classGrade: 10,
    subject: "Chemistry",
    difficulty: "Board Special",
    badgeName: "Redox Alchemist",
    badgeEmoji: "🧪",
    accentColor: "from-emerald-500 to-teal-600",
    totalXp: 450,
    estimatedMinutes: 35,
    units: [
      {
        id: "u-10chem-1",
        title: "Combination, Decomposition & Thermal Colours",
        durationMinutes: 12,
        xpReward: 150,
        summary: "Learn Ferrous Sulphate & Lead Nitrate decomposition colour changes for 3-mark questions.",
        summaryHinglish: "Lead Nitrate garam karne par भूरे (brown) dhuen wali gas kaunsi nikalti hai? 3-mark ka pakka sawal!",
        contentSections: [
          {
            heading: "Brown Fumes Alert! 🟤",
            headingHinglish: "Brown Fumes (भूरा धुआँ) dekhte hi NO₂ pehchano! 🟤",
            body: "When white Lead Nitrate Pb(NO₃)₂ is heated, it gives yellow PbO residue and reddish-brown fumes of Nitrogen Dioxide (NO₂)!",
            bodyHinglish: "Jab safed Lead Nitrate Pb(NO₃)₂ ko test tube me garam karte hain, toh crackling aawaz ke sath पीला PbO banta hai aur भूरे rang ka NO₂ (Nitrogen Dioxide) dhuan nikalta hai!",
            formulaOrTip: "2Pb(NO₃)₂ (s) + Heat ➔ 2PbO (Yellow) + 4NO₂ (Brown gas) + O₂",
            formulaOrTipHinglish: "Brown Fumes = NO₂ Gas  |  Yellow Residue = Lead Oxide (PbO)",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-10chem-1",
            question: "Which reddish-brown gas is evolved when Lead Nitrate crystals are heated strongly?",
            questionHinglish: "Lead Nitrate crystals ko garam karne par kaunsi reddish-brown gas nikalti hai?",
            options: ["N₂O", "NO₂", "SO₂", "CO₂"],
            correctIndex: 1,
            explanation: "Thermal decomposition of Pb(NO₃)₂ releases brown fumes of Nitrogen Dioxide (NO₂).",
            explanationHinglish: "Pb(NO₃)₂ toot kar PbO, O₂ aur brown NO₂ gas deta hai.",
          },
        ],
      },
      {
        id: "u-10chem-2",
        title: "Displacement, Double Displacement & Precipitates",
        durationMinutes: 12,
        xpReward: 150,
        summary: "Barium Sulphate white precipitate & Potassium Iodide yellow precipitate reactions.",
        summaryHinglish: "Lohe ki keel (Iron nail) ko neele Copper Sulphate me daalne par paani hara kyun ho jata hai?",
        contentSections: [
          {
            heading: "The Reactivity Series Song 🎵",
            headingHinglish: "Takatwar Metal Kamzor ko Hata Deta Hai! 💪",
            body: "A more reactive metal displaces a less reactive metal from its salt solution. Iron nail in blue CuSO₄ turns pale green (FeSO₄)!",
            bodyHinglish: "Iron (Fe) Copper (Cu) se zyada reactive hai. Isliye jab neele CuSO₄ solution me lohe ki keel daalte hain, toh Fe Cu ko hata kar hara FeSO₄ bana leta hai!",
            formulaOrTip: "Fe (s) + CuSO₄ (Blue aq) ➔ FeSO₄ (Pale Green aq) + Cu (Brown deposit)",
            formulaOrTipHinglish: "Neela (CuSO₄) ➔ Hara (FeSO₄) + Keel ke upar Brown Copper ki parat!",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-10chem-2",
            question: "When Sodium Sulphate solution is mixed with Barium Chloride solution, what is the colour of the precipitate formed?",
            questionHinglish: "Sodium Sulphate aur Barium Chloride milane par kis rang ka precipitate (अवक्षेप) banta hai?",
            options: ["Yellow", "White (BaSO₄)", "Blue", "Black"],
            correctIndex: 1,
            explanation: "Insoluble white precipitate of Barium Sulphate (BaSO₄) is formed immediately.",
            explanationHinglish: "Barium Sulphate (BaSO₄) ka safed (White) precipitate test tube ke niche baith jata hai.",
          },
        ],
      },
      {
        id: "u-10chem-3",
        title: "Oxidation, Reduction & Oxidising Agents",
        durationMinutes: 11,
        xpReward: 150,
        summary: "OIL RIG trick to never confuse Oxidising Agent and Reducing Agent.",
        summaryHinglish: "Kis substance ka Oxidation hua aur kaun Reducing Agent hai — 5 second me pehchano!",
        contentSections: [
          {
            heading: "OIL RIG: The Ultimate Mnemonic ⚡",
            headingHinglish: "Oxygen Judna = Oxidation, Oxygen Hatna = Reduction ⚡",
            body: "Oxidation Is Loss of electrons (or gain of Oxygen). Reduction Is Gain of electrons (or loss of Oxygen).",
            bodyHinglish: "Jis substance me Oxygen judti hai uska Oxidation hota hai, aur dhyan rahe: jiska khud Oxidation hota hai wahi dusre ke liye Reducing Agent kehlata hai!",
            formulaOrTip: "Substance that gets Oxidised = Reducing Agent | Substance that gets Reduced = Oxidising Agent",
            formulaOrTipHinglish: "Jo khud Oxidise ho ➔ Reducing Agent | Jo khud Reduce ho ➔ Oxidising Agent",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-10chem-3",
            question: "In the reaction CuO + H₂ ➔ Cu + H₂O, which substance is getting oxidised?",
            questionHinglish: "CuO + H₂ ➔ Cu + H₂O reaction me kiska Oxidation ho raha hai?",
            options: ["CuO", "H₂", "Cu", "H₂O"],
            correctIndex: 1,
            explanation: "H₂ gains oxygen to form H₂O, so H₂ is oxidised (and acts as the reducing agent).",
            explanationHinglish: "H₂ me Oxygen jud kar H₂O ban raha hai, isliye H₂ ka Oxidation ho raha hai!",
          },
        ],
      },
    ],
  },
  {
    id: "mod-10-chem-2",
    slug: "class-10-acids-bases-salts-quest",
    chapterNumber: 2,
    title: "Acids, Bases, pH Scale & Magic Salts",
    subtitle: "Bleaching powder, Baking soda, Washing soda, and Plaster of Paris made super easy!",
    subtitleHinglish: "pH scale, Baking Soda, Washing Soda aur Plaster of Paris (POP) ke saare formulas ekdum aasan bhasha me!",
    board: "BOTH",
    classGrade: 10,
    subject: "Chemistry",
    difficulty: "Board Special",
    badgeName: "pH Master",
    badgeEmoji: "⚗️",
    accentColor: "from-rose-500 to-pink-600",
    totalXp: 350,
    estimatedMinutes: 30,
    units: [
      {
        id: "u-10chem2-1",
        title: "Indicators, pH Scale & Everyday Life",
        durationMinutes: 15,
        xpReward: 175,
        summary: "Tooth decay, bee stings, and olfactory indicators (vanilla, onion, clove).",
        summaryHinglish: "Daant kharab (tooth decay) kab hote hain aur madhumakkhi katne par Baking Soda kyun lagate hain?",
        contentSections: [
          {
            heading: "pH Range from 0 to 14 🌈",
            headingHinglish: "pH Scale: 7 se kam Acid, 7 se zyada Base! 🌈",
            body: "pH < 7 is Acidic, pH = 7 is Neutral, and pH > 7 is Basic. Tooth enamel (Calcium Hydroxyapatite) starts corroding when mouth pH falls below 5.5!",
            bodyHinglish: "Meetha khane ke baad muh ke bacteria acid banate hain. Jab muh ka pH 5.5 se niche gir jata hai, toh sabse strong hissa (Tooth Enamel) bhi galne lagta hai—isliye toothpaste Basic hota hai!",
            formulaOrTip: "Lower the pH = Stronger the Acid (More H⁺ ions)!",
            formulaOrTipHinglish: "pH jitna chhota ➔ Acid utna khatarnak! Tooth decay starts below pH 5.5.",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-10chem2-1",
            question: "At what pH in the mouth does tooth decay start?",
            questionHinglish: "Muh ka pH kitne se kam hone par daant सड़ने (tooth decay) lagte hain?",
            options: ["Below 7.0", "Below 5.5", "Above 8.0", "At 7.4"],
            correctIndex: 1,
            explanation: "Bacteria in the mouth produce acids by degrading sugar, corroding enamel when pH drops below 5.5.",
            explanationHinglish: "Jab pH 5.5 se niche chala jata hai tab tooth enamel corrode hone lagta hai.",
          },
        ],
      },
      {
        id: "u-10chem2-2",
        title: "The 5 Famous Board Exam Salts (POP & Soda)",
        durationMinutes: 15,
        xpReward: 175,
        summary: "Chlor-alkali process, Bleaching powder, Baking Soda, Washing Soda & POP.",
        summaryHinglish: "Gypsum ko 373 K par garam karne se Plaster of Paris (POP) kaise banta hai?",
        contentSections: [
          {
            heading: "Plaster of Paris vs Gypsum 🦴",
            headingHinglish: "Tooti Haddi Jodne Wala Plaster of Paris (POP) 🦴",
            body: "Heating Gypsum at 373 K (100°C) drives off 1.5 water molecules to form Plaster of Paris (Calcium Sulphate Hemihydrate).",
            bodyHinglish: "Gypsum (CaSO₄·2H₂O) ko bilkul 373 K (100°C) par garam karne par usme se 1.5 paani ke molecules udd jate hain aur bachta hai POP (CaSO₄·½H₂O)!",
            formulaOrTip: "POP: CaSO₄ · ½H₂O   +   1½ H₂O   ➔   Gypsum: CaSO₄ · 2H₂O",
            formulaOrTipHinglish: "Yaad rakho: ½H₂O matlab Hemihydrate (POP)  |  2H₂O matlab Gypsum!",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-10chem2-2",
            question: "What is the chemical formula of Plaster of Paris?",
            questionHinglish: "Plaster of Paris (POP) ka sahi chemical formula kya hai?",
            options: ["CaSO₄ · 2H₂O", "CaSO₄ · ½H₂O", "CaCO₃", "Na₂CO₃ · 10H₂O"],
            correctIndex: 1,
            explanation: "Plaster of Paris is Calcium Sulphate Hemihydrate (CaSO₄ · ½H₂O).",
            explanationHinglish: "POP ka naam Calcium Sulphate Hemihydrate (CaSO₄ · ½H₂O) hai.",
          },
        ],
      },
    ],
  },
  {
    id: "mod-10-math-1",
    slug: "class-10-trigonometry-identities-heights",
    chapterNumber: 1,
    title: "Introduction to Trigonometry & Identities",
    subtitle: "Conquer all 'Prove That' questions and trigonometric ratios with visual triangle hacks!",
    subtitleHinglish: "Trigonometry ke 'Prove That' wale sawalon ka darr khatam! Ungliyon (Fingers) par angles yaad rakho!",
    board: "BOTH",
    classGrade: 10,
    subject: "Mathematics",
    difficulty: "Board Special",
    badgeName: "Trig Ninja",
    badgeEmoji: "📐",
    accentColor: "from-violet-600 to-indigo-600",
    totalXp: 500,
    estimatedMinutes: 45,
    units: [
      {
        id: "u-10math-1",
        title: "Trigonometric Ratios & The Finger Trick for Angles",
        durationMinutes: 15,
        xpReward: 175,
        summary: "Find sin, cos, tan of 0°, 30°, 45°, 60°, 90° using your left hand in 3 seconds!",
        summaryHinglish: "Pandit Badri Prasad / Hari Hari Bol aur baayein haath (left hand) se saare angles ki value nikalo!",
        contentSections: [
          {
            heading: "Pandit Badri Prasad / Hari Hari Bol 🙏",
            headingHinglish: "PBP / HHB — Desi Formula जो कभी नहीं भूलेगा! 🙏",
            body: "sin θ = P/H, cos θ = B/H, tan θ = P/B. For standard angles 0° to 90°, sin θ = √(Fingers Below) / 2!",
            bodyHinglish: "Right triangle me θ ke theek samne wali side Perpendicular (P) hoti hai, sabse badi side Hypotenuse (H), aur teesri Base (B)!",
            formulaOrTip: "sin 30° = 1/2 | sin 45° = 1/√2 | sin 60° = √3/2 | tan 45° = 1",
            formulaOrTipHinglish: "sin θ = P/H  |  cos θ = B/H  |  tan θ = P/B (Sona Chandi Tole = PBP / HHB)",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-10math-1",
            question: "If tan θ = 4/3, then what is the value of sin θ (for acute angle θ)?",
            questionHinglish: "Agar tan θ = 4/3 hai, toh sin θ ki value kya hogi?",
            options: ["3/5", "4/5", "5/4", "3/4"],
            correctIndex: 1,
            explanation: "Perpendicular P = 4k, Base B = 3k. By Pythagoras, Hypotenuse H = √(4² + 3²) = 5k. So sin θ = P/H = 4/5!",
            explanationHinglish: "tan θ = P/B = 4/3, toh Pythagoras triplet (3, 4, 5) se H = 5. Isliye sin θ = P/H = 4/5!",
          },
        ],
      },
      {
        id: "u-10math-2",
        title: "The 3 Pythagorean Identities & 'Prove That' Boss",
        durationMinutes: 15,
        xpReward: 175,
        summary: "sin²θ + cos²θ = 1, sec²θ - tan²θ = 1, and cosec²θ - cot²θ = 1.",
        summaryHinglish: "Jab 'Prove That' sawal samajh na aaye, toh sabko sin θ aur cos θ me badal do — 95% sawal wahin solve ho jayenge!",
        contentSections: [
          {
            heading: "The Sec-Tan Conjugate Trick 🎯",
            headingHinglish: "sec²θ - tan²θ = 1 ka Super MCQ Shortcut 🎯",
            body: "Since sec²θ - tan²θ = 1, we can factor it as (sec θ - tan θ)(sec θ + tan θ) = 1. So if sec θ + tan θ = k, then sec θ - tan θ is immediately 1/k!",
            bodyHinglish: "a² - b² = (a - b)(a + b) lagao! Kyunki (sec θ + tan θ)(sec θ - tan θ) = 1 hota hai, toh agar sec θ + tan θ = 5 diya hai, toh sec θ - tan θ bina solve kiye 1/5 hoga!",
            formulaOrTip: "If sec θ + tan θ = p  ➔  sec θ - tan θ = 1/p",
            formulaOrTipHinglish: "Agar sec θ + tan θ = p  ➔  sec θ - tan θ = 1/p (1-Mark MCQ me 2 second lagenge!)",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-10math-2",
            question: "If sec θ + tan θ = 5, then what is the value of sec θ - tan θ?",
            questionHinglish: "Agar sec θ + tan θ = 5 hai, toh sec θ - tan θ kitna hoga?",
            options: ["5", "1/5", "25", "-5"],
            correctIndex: 1,
            explanation: "Because (sec θ + tan θ)(sec θ - tan θ) = sec²θ - tan²θ = 1, sec θ - tan θ = 1/5!",
            explanationHinglish: "Seedha उल्टा (reciprocal) kar do: 1/5!",
          },
        ],
      },
      {
        id: "u-10math-3",
        title: "Heights & Distances (Angle of Elevation & Depression)",
        durationMinutes: 15,
        xpReward: 150,
        summary: "Solve tower, shadow, and lighthouse 5-mark word problems fast.",
        summaryHinglish: "45° par khambhe ki unchai aur parchhai (shadow) barabar hoti hai! Case-study questions ki trick.",
        contentSections: [
          {
            heading: "30°–60°–90° Triangle Ratio Hack 🏗️",
            headingHinglish: "45° dekhte hi Height = Base kar do! 🏗️",
            body: "When the sun's altitude is 45°, height of tower equals length of shadow (1 : 1). For 60°, height is √3 times the base!",
            bodyHinglish: "Kyunki tan 45° = 1 hota hai, isliye jab bhi angle of elevation 45° ho, jitni lambi building hogi utni hi doori base ki hogi!",
            formulaOrTip: "tan 30° = 1/√3   |   tan 45° = 1   |   tan 60° = √3",
            formulaOrTipHinglish: "45° ➔ P = B  |  60° ➔ P = √3 × B  |  30° ➔ B = √3 × P",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-10math-3",
            question: "If the height of a vertical pole is equal to the length of its shadow on the ground, the angle of elevation of the Sun is:",
            questionHinglish: "Agar ek khambhe ki height aur uski shadow ki lambai barabar hai, toh Suraj ka angle of elevation kya hoga?",
            options: ["30°", "45°", "60°", "90°"],
            correctIndex: 1,
            explanation: "tan θ = Height / Shadow = 1 => θ = 45°.",
            explanationHinglish: "tan θ = P/B = 1, aur tan 45° = 1 hota hai!",
          },
        ],
      },
    ],
  },
  {
    id: "mod-10-math-2",
    slug: "class-10-quadratic-equations-ap",
    chapterNumber: 2,
    title: "Quadratic Equations & Nature of Roots",
    subtitle: "Discriminant D = b² - 4ac, Sridharacharya formula, and speed-time word problems!",
    subtitleHinglish: "Sridharacharya formula, D = b² - 4ac aur train/stream ki speed wale word problems aasan bhasha me!",
    board: "BOTH",
    classGrade: 10,
    subject: "Mathematics",
    difficulty: "Intermediate",
    badgeName: "Algebra Ace",
    badgeEmoji: "🧮",
    accentColor: "from-indigo-500 to-purple-600",
    totalXp: 350,
    estimatedMinutes: 30,
    units: [
      {
        id: "u-10math2-1",
        title: "Factorization & Quadratic Formula",
        durationMinutes: 15,
        xpReward: 175,
        summary: "Find roots of any ax² + bx + c = 0 in 20 seconds.",
        summaryHinglish: "Middle term split na ho toh Sridharacharya Quadratic Formula lagao!",
        contentSections: [
          {
            heading: "The Quadratic Formula 🎯",
            headingHinglish: "Sridharacharya Formula — Har Quadratic ki चाबी 🎯",
            body: "For any quadratic equation ax² + bx + c = 0 (where a ≠ 0), the roots are given by:",
            bodyHinglish: "Agar middle-term factor sochne me 10 second se zyada lagein, toh bina ruke seedha Sridharacharya formula laga do:",
            formulaOrTip: "x = [-b ± √(b² - 4ac)] / (2a)",
            formulaOrTipHinglish: "x = [-b ± √D] / 2a   (Jahan D = b² - 4ac)",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-10math2-1",
            question: "What are the roots of the quadratic equation x² - 5x + 6 = 0?",
            questionHinglish: "x² - 5x + 6 = 0 ke do roots kya honge?",
            options: ["2 and 3", "-2 and -3", "1 and 6", "-1 and 6"],
            correctIndex: 0,
            explanation: "x² - 5x + 6 = (x - 2)(x - 3) = 0 => x = 2, 3.",
            explanationHinglish: "2 aur 3 ko jodne par 5 aur multiply karne par 6 aata hai, toh roots 2 aur 3 hain!",
          },
        ],
      },
      {
        id: "u-10math2-2",
        title: "Discriminant (D) & Equal Roots Condition",
        durationMinutes: 15,
        xpReward: 175,
        summary: "When are roots real & distinct (D > 0), real & equal (D = 0), or imaginary (D < 0)?",
        summaryHinglish: "Board paper me har saal aane wala sawal: 'Equal roots hain toh k ki value nikalo!'",
        contentSections: [
          {
            heading: "Equal Roots = Zero Discriminant ⚡",
            headingHinglish: "'Equal Roots' shabd dikhte hi b² - 4ac = 0 rakh do! ⚡",
            body: "Every board paper has a question asking to find 'k' when the equation has two equal real roots. Just set b² - 4ac = 0!",
            bodyHinglish: "Jab bhi question me likha ho ki roots Real aur Equal (बराबर) hain, toh Discriminant D = b² - 4ac ko 0 ke barabar rakh do!",
            formulaOrTip: "D = b² - 4ac = 0  (Condition for Real & Equal Roots)",
            formulaOrTipHinglish: "D > 0 (Alag-alag roots) | D = 0 (Barabar roots) | D < 0 (No real roots)",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-10math2-2",
            question: "If 2x² + kx + 2 = 0 has equal roots, then the value of k is:",
            questionHinglish: "Agar 2x² + kx + 2 = 0 ke roots barabar (equal) hain, toh k ki value kya hogi?",
            options: ["±2", "±4", "±8", "0"],
            correctIndex: 1,
            explanation: "D = k² - 4(2)(2) = 0 => k² = 16 => k = ±4.",
            explanationHinglish: "b² - 4ac = 0 => k² - 4(2)(2) = 0 => k² = 16 => k = ±4 (± lagana mat bhoolna!).",
          },
        ],
      },
    ],
  },

  // ==========================================================================
  // CLASS 9 - PHYSICS, CHEMISTRY, MATHEMATICS
  // ==========================================================================
  {
    id: "mod-9-phy-1",
    slug: "class-9-motion-laws-of-motion",
    chapterNumber: 1,
    title: "Motion, Velocity-Time Graphs & Equations",
    subtitle: "Distance vs Displacement, v-t graph area tricks, and the 3 Equations of Motion!",
    subtitleHinglish: "Distance aur Displacement ka farak, v-t graphs aur Motion ke 3 Equations ekdum मक्खन ki tarah!",
    board: "BOTH",
    classGrade: 9,
    subject: "Physics",
    difficulty: "Beginner",
    badgeName: "Velocity Voyager",
    badgeEmoji: "🚀",
    accentColor: "from-sky-500 to-blue-600",
    totalXp: 400,
    estimatedMinutes: 35,
    units: [
      {
        id: "u-9phy-1",
        title: "Distance vs Displacement & Circular Track Trick",
        durationMinutes: 15,
        xpReward: 200,
        summary: "Why is displacement zero after completing 1 full round of a circular stadium?",
        summaryHinglish: "Agar aap ghar se school gaye aur wapas ghar aa gaye, toh Displacement 0 kyun ho jata hai?",
        contentSections: [
          {
            heading: "Shortest Straight-Line Path 📏",
            headingHinglish: "Seedha Shortcut Rasta = Displacement 📏",
            body: "Distance is total path length (scalar, always positive). Displacement is shortest distance from initial to final point (vector).",
            bodyHinglish: "Distance ka matlab aap kitna chale (kul rasta). Displacement ka matlab starting point se ending point ki seedhi doori! Agar ghum kar wapas wahin aa gaye, toh Displacement = 0!",
            formulaOrTip: "Half circle of radius R: Distance = πR  |  Displacement = 2R (Diameter)",
            formulaOrTipHinglish: "Aadha chakkar: Distance = πR, Displacement = 2R | Poora chakkar: Displacement = 0!",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-9phy-1",
            question: "An athlete completes one full round of a circular track of radius R in 40 seconds. What is his displacement at the end of 40 seconds?",
            questionHinglish: "Ek runner R radius ke gol track ka 1 poora chakkar 40 sec me lagata hai. Uska displacement kitna hoga?",
            options: ["2πR", "2R", "Zero (0)", "πR"],
            correctIndex: 2,
            explanation: "Since the athlete returns to the starting point, initial and final positions are the same, so displacement is 0!",
            explanationHinglish: "Kyunki wo ghum kar wapas starting point par hi aa gaya, isliye Displacement = 0!",
          },
        ],
      },
      {
        id: "u-9phy-2",
        title: "The 3 Kinematic Equations of Uniform Acceleration",
        durationMinutes: 20,
        xpReward: 200,
        summary: "Master v = u + at, s = ut + ½at², and v² - u² = 2as.",
        summaryHinglish: "Brake lagne par v = 0 aur rest se chalne par u = 0 rakhne ki trick!",
        contentSections: [
          {
            heading: "Brakes Applied? Set Final Velocity v = 0! 🚗",
            headingHinglish: "Ruki hui gaadi chale toh u = 0, Brake lage toh v = 0! 🚗",
            body: "When a car starts from rest, u = 0. When a car stops on applying brakes, v = 0 and acceleration 'a' is negative (retardation).",
            bodyHinglish: "Physics numericals me aadhe numbers chhupe hote hain shabdon me: 'Starts from rest' padhte hi u = 0 likho, aur 'Comes to stop' padhte hi v = 0 likho!",
            formulaOrTip: "1) v = u + at   |   2) s = ut + ½at²   |   3) v² - u² = 2as",
            formulaOrTipHinglish: "Time (t) na diya ho toh teesra formula (v² - u² = 2as) lagao!",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-9phy-2",
            question: "A car starting from rest accelerates uniformly at 2 m/s² for 5 seconds. What is its final velocity?",
            questionHinglish: "Ek car rest (u=0) se chal kar 2 m/s² ke acceleration se 5 second tak chalti hai. Uski final speed kya hogi?",
            options: ["5 m/s", "10 m/s", "25 m/s", "2.5 m/s"],
            correctIndex: 1,
            explanation: "v = u + at = 0 + (2 × 5) = 10 m/s.",
            explanationHinglish: "v = u + at = 0 + (2 × 5) = 10 m/s.",
          },
        ],
      },
    ],
  },
  {
    id: "mod-9-chem-1",
    slug: "class-9-mole-concept-atomic-structure",
    chapterNumber: 1,
    title: "Atoms, Molecules & Chemical Formula Builder",
    subtitle: "Conquer valency criss-cross tricks, molecular mass, and laws of chemical combination!",
    subtitleHinglish: "Criss-cross valency se kisi bhi compound ka chemical formula 5 second me banao!",
    board: "BOTH",
    classGrade: 9,
    subject: "Chemistry",
    difficulty: "Beginner",
    badgeName: "Quantum Alchemist",
    badgeEmoji: "🧬",
    accentColor: "from-emerald-500 to-teal-600",
    totalXp: 400,
    estimatedMinutes: 35,
    units: [
      {
        id: "u-chem-1",
        title: "Criss-Cross Valency & Chemical Formula Builder",
        durationMinutes: 18,
        xpReward: 200,
        summary: "Build 100+ chemical formulas in seconds without memorizing.",
        summaryHinglish: "Valency ko aapas me cross karo aur 100+ chemical formulas bina ratte banao!",
        contentSections: [
          {
            heading: "Swap the Valencies! 🔄",
            headingHinglish: "Dono ki Valency Cross (X) Kar Do! 🔄",
            body: "Write the symbol of cation (positive) first and anion (negative) second. Cross their valency numbers to the subscript!",
            bodyHinglish: "Pehle metal ka symbol likho, phir non-metal ya polyatomic ion ka. Ab pehle ki valency dusre ke pairon me, aur dusre ki valency pehle ke pairon me likh do!",
            formulaOrTip: "Aluminium (Al³⁺) + Sulphate (SO₄²⁻)  ➔  Al₂(SO₄)₃",
            formulaOrTipHinglish: "Al ki valency 3 aur SO₄ ki 2 ➔ Cross karne par bana Al₂(SO₄)₃!",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-chem-1",
            question: "What is the correct chemical formula of Magnesium Nitride? (Mg valency = 2, N valency = 3)",
            questionHinglish: "Magnesium Nitride ka sahi formula kya hoga? (Mg ki valency = 2, N ki valency = 3)",
            options: ["MgN", "Mg₂N₃", "Mg₃N₂", "Mg(NO₃)₂"],
            correctIndex: 2,
            explanation: "Criss-crossing Mg²⁺ and N³⁻ gives Mg₃N₂.",
            explanationHinglish: "Mg ke niche N ki valency (3) aur N ke niche Mg ki valency (2) aayegi ➔ Mg₃N₂!",
          },
        ],
      },
      {
        id: "u-chem-2",
        title: "Law of Conservation of Mass & Molecular Mass",
        durationMinutes: 17,
        xpReward: 200,
        summary: "Calculate molar mass of H₂SO₄, CaCO₃, and C₆H₁₂O₆ effortlessly.",
        summaryHinglish: "Sirf 6 elements ka mass yaad rakho aur poori book ke molecular mass nikalo!",
        contentSections: [
          {
            heading: "Atomic Mass Building Blocks 🧱",
            headingHinglish: "Ye 6 Atomic Mass Yaad Toh Sab Yaad! 🧱",
            body: "Memorize just 6 atomic masses: H = 1 u, C = 12 u, N = 14 u, O = 16 u, S = 32 u, Ca = 40 u.",
            bodyHinglish: "Saare atoms ka mass jodne par Molecular Mass milta hai. Bas H=1, C=12, N=14, O=16, S=32 aur Ca=40 yaad rakho!",
            formulaOrTip: "Molecular Mass of H₂O = 2(1) + 16 = 18 u  |  CaCO₃ = 40 + 12 + 3(16) = 100 u",
            formulaOrTipHinglish: "Paani (H₂O) = 18 u  |  Chuna Patthar (CaCO₃) = 100 u  |  H₂SO₄ = 98 u",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-chem-2",
            question: "What is the molecular mass of Calcium Carbonate (CaCO₃)? (Ca=40, C=12, O=16)",
            questionHinglish: "Calcium Carbonate (CaCO₃) ka molecular mass kitna hota hai?",
            options: ["68 u", "100 u", "84 u", "120 u"],
            correctIndex: 1,
            explanation: "40 + 12 + (3 × 16) = 52 + 48 = 100 u.",
            explanationHinglish: "Ca(40) + C(12) + 3×O(48) = 100 u.",
          },
        ],
      },
    ],
  },
  {
    id: "mod-9-math-1",
    slug: "class-9-polynomials-algebraic-identities",
    chapterNumber: 1,
    title: "Polynomials, Remainder Theorem & Identities",
    subtitle: "Factorize cubic polynomials and master a³ + b³ + c³ - 3abc tricks!",
    subtitleHinglish: "Bina lamba भाग (long division) kiye Remainder nikalna aur a³ + b³ + c³ = 3abc ka जादू!",
    board: "BOTH",
    classGrade: 9,
    subject: "Mathematics",
    difficulty: "Intermediate",
    badgeName: "Polynomial Pro",
    badgeEmoji: "📊",
    accentColor: "from-amber-500 to-orange-600",
    totalXp: 400,
    estimatedMinutes: 35,
    units: [
      {
        id: "u-9math-1",
        title: "Zeroes of a Polynomial & Remainder Theorem",
        durationMinutes: 18,
        xpReward: 200,
        summary: "Find remainders without long division in 10 seconds!",
        summaryHinglish: "Long division ko kaho bye-bye! 10 second me Remainder nikalo.",
        contentSections: [
          {
            heading: "Remainder Theorem Shortcut ⚡",
            headingHinglish: "Jisse Divide Karna Hai Usey 0 Ke Barabar Rakho! ⚡",
            body: "When P(x) is divided by (x - a), the remainder is simply P(a)!",
            bodyHinglish: "Agar P(x) ko (x - 2) se divide karna hai, toh x - 2 = 0 se x = 2 nikalo aur seedha P(x) me x ki jagah 2 rakh do!",
            formulaOrTip: "Divided by (x - 2)? Put x = 2 in P(x) to get the Remainder!",
            formulaOrTipHinglish: "Agar Remainder 0 aa jaye ➔ Toh wo uska Factor hai (Factor Theorem)!",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-9math-1",
            question: "Find the remainder when P(x) = x³ - 2x² + 4 is divided by (x - 2).",
            questionHinglish: "Jab P(x) = x³ - 2x² + 4 ko (x - 2) se divide karenge toh Remainder kya aayega?",
            options: ["0", "4", "8", "-4"],
            correctIndex: 1,
            explanation: "P(2) = 2³ - 2(2²) + 4 = 8 - 8 + 4 = 4.",
            explanationHinglish: "x = 2 rakhne par: 2³ - 2(2²) + 4 = 8 - 8 + 4 = 4.",
          },
        ],
      },
      {
        id: "u-9math-2",
        title: "The Golden Identity (If a + b + c = 0, then a³ + b³ + c³ = 3abc)",
        durationMinutes: 17,
        xpReward: 200,
        summary: "Evaluate (-12)³ + (7)³ + (5)³ without actually cubing!",
        summaryHinglish: "Bade numbers ka cube mat nikalo—sirf 3abc kar do!",
        contentSections: [
          {
            heading: "Never Cube Big Numbers! 🎯",
            headingHinglish: "Teen Numbers Jinka Jod 0 Ho Unka Cube = 3abc! 🎯",
            body: "Whenever you see three numbers whose sum a + b + c = 0, their cubes add up directly to 3abc!",
            bodyHinglish: "Jab bhi teen numbers a, b, c ka sum 0 ho (jaise -10 + 6 + 4 = 0), toh unke cubes ka sum seedha 3 × a × b × c hota hai!",
            formulaOrTip: "If a + b + c = 0   ➔   a³ + b³ + c³ = 3abc",
            formulaOrTipHinglish: "a + b + c = 0 check karo ➔ Phir seedha 3 × a × b × c multiply kar do!",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-9math-2",
            question: "Without calculating cubes, find the value of (-10)³ + (6)³ + (4)³.",
            questionHinglish: "Bina cube nikale (-10)³ + (6)³ + (4)³ ki value batao:",
            options: ["-720", "720", "-1000", "0"],
            correctIndex: 0,
            explanation: "Since -10 + 6 + 4 = 0, the sum of cubes is 3(-10)(6)(4) = -720!",
            explanationHinglish: "Kyunki -10 + 6 + 4 = 0 hai, toh answer = 3 × (-10) × 6 × 4 = -720!",
          },
        ],
      },
    ],
  },

  // ==========================================================================
  // CLASS 11 - PHYSICS, CHEMISTRY, MATHEMATICS
  // ==========================================================================
  {
    id: "mod-11-phy-1",
    slug: "class-11-projectile-motion-vectors",
    chapterNumber: 1,
    title: "Vectors & Projectile Motion in a Plane",
    subtitle: "Time of flight, Maximum Height, Horizontal Range, and complementary angles!",
    subtitleHinglish: "Neeraj Chopra भाला 45° par kyun fekte hain? Projectile motion aur Vectors aasan Hinglish me!",
    board: "BOTH",
    classGrade: 11,
    subject: "Physics",
    difficulty: "Intermediate",
    badgeName: "Vector Commander",
    badgeEmoji: "🎯",
    accentColor: "from-sky-500 to-indigo-600",
    totalXp: 500,
    estimatedMinutes: 45,
    units: [
      {
        id: "u-11phy-1",
        title: "Time of Flight, Max Height & Range Formulas",
        durationMinutes: 22,
        xpReward: 250,
        summary: "Why does 45° give the maximum horizontal range in javelin throw?",
        summaryHinglish: "Horizontal aur Vertical motion ko alag-alag तोड़ो aur saare projectile sawal चुटकियों me karo!",
        contentSections: [
          {
            heading: "The Big 3 Projectile Formulas 🏹",
            headingHinglish: "Projectile ke 3 Brahmastra Formulas 🏹",
            body: "Split initial velocity u into horizontal (u cos θ, stays constant) and vertical (u sin θ, affected by gravity g).",
            bodyHinglish: "Horizontal speed (u cos θ) poore raste kabhi nahi badalti! Sirf vertical speed (u sin θ) par gravity lagti hai. Aur 45° par Range sabse zyada (u²/g) hoti hai!",
            formulaOrTip: "T = 2u sinθ / g  |  H = u²sin²θ / 2g  |  R = u²sin(2θ) / g",
            formulaOrTipHinglish: "θ aur (90° - θ) par Range R bilkul same hoti hai (jaise 30° aur 60°)!",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-11phy-1",
            question: "At what angle of projection with the horizontal is the horizontal range of a projectile maximum?",
            questionHinglish: "Kis angle par fekne se projectile sabse door (Maximum Range) girta hai?",
            options: ["30°", "45°", "60°", "90°"],
            correctIndex: 1,
            explanation: "R = u²sin(2θ)/g is maximum when sin(2θ) = 1 => 2θ = 90° => θ = 45°.",
            explanationHinglish: "θ = 45° par sin(2θ) = sin 90° = 1 (maximum) hota hai!",
          },
        ],
      },
      {
        id: "u-11phy-2",
        title: "Dot Product vs Cross Product of Vectors",
        durationMinutes: 23,
        xpReward: 250,
        summary: "Find angle between two vectors and test perpendicularity in 10 seconds.",
        summaryHinglish: "Do vectors 90° (perpendicular) hain ya nahi — sirf Dot Product = 0 karke check karo!",
        contentSections: [
          {
            heading: "Perpendicular Vectors? Dot Product = 0! 📐",
            headingHinglish: "90° (Perpendicular) Vectors ka Matlab A · B = 0! 📐",
            body: "Two non-zero vectors A and B are perpendicular (orthogonal) if and only if their scalar dot product A · B = 0.",
            bodyHinglish: "Kyunki cos 90° = 0 hota hai, isliye jab bhi do vectors perpendicular hon, unke î, ĵ, k̂ coefficients ko aapas me multiply karke jod do aur 0 ke barabar rakh do!",
            formulaOrTip: "A · B = AxBx + AyBy + AzBz = |A||B| cos θ",
            formulaOrTipHinglish: "Perpendicular ➔ A · B = 0  |  Parallel ➔ A × B = 0",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-11phy-2",
            question: "If vectors A = 2î + 3ĵ and B = 3î - mĵ are perpendicular to each other, find m.",
            questionHinglish: "Agar vectors A = 2î + 3ĵ aur B = 3î - mĵ perpendicular hain, toh m ki value batao:",
            options: ["2", "-2", "3", "6"],
            correctIndex: 0,
            explanation: "A · B = 0 => (2)(3) + (3)(-m) = 0 => 6 - 3m = 0 => m = 2.",
            explanationHinglish: "(2 × 3) + (3 × -m) = 0 => 6 - 3m = 0 => m = 2.",
          },
        ],
      },
    ],
  },
  {
    id: "mod-11-chem-1",
    slug: "class-11-chemical-bonding-vsepr",
    chapterNumber: 1,
    title: "Chemical Bonding, Hybridization & VSEPR",
    subtitle: "Predict sp, sp², sp³ hybridization, bond order, and molecular shapes in seconds!",
    subtitleHinglish: "Kisi bhi molecule ki Hybridization (sp, sp², sp³) aur Bond Order 5 second me nikalne ka jugaad!",
    board: "BOTH",
    classGrade: 11,
    subject: "Chemistry",
    difficulty: "Intermediate",
    badgeName: "Bonding Maestro",
    badgeEmoji: "⚛️",
    accentColor: "from-emerald-500 to-teal-600",
    totalXp: 500,
    estimatedMinutes: 40,
    units: [
      {
        id: "u-11chem-1",
        title: "Steric Number Trick for Hybridization",
        durationMinutes: 20,
        xpReward: 250,
        summary: "Find hybridization of NH₃, H₂O, SF₄, and XeF₄ using ½[V + M - C + A].",
        summaryHinglish: "Sigma bonds + Lone pairs gino aur turant sp, sp², sp³ batao!",
        contentSections: [
          {
            heading: "5-Second Hybridization Formula ⚡",
            headingHinglish: "Hybridization Nikalne ka 5-Second Formula ⚡",
            body: "H = ½ [Valence electrons of central atom + Monovalent atoms - Cationic charge + Anionic charge]. H=2 is sp, H=3 is sp², H=4 is sp³!",
            bodyHinglish: "Central atom ke valence electrons me side wale monovalent atoms (H, F, Cl, Br, I) jodo aur 2 se divide kar do! Agar 4 aaya toh sp³, 3 aaya toh sp², 2 aaya toh sp!",
            formulaOrTip: "NH₃: H = ½(5 + 3) = 4 ➔ sp³ Hybridization (Pyramidal shape with 1 lone pair)",
            formulaOrTipHinglish: "H=2 (sp) | H=3 (sp²) | H=4 (sp³) | H=5 (sp³d) | H=6 (sp³d²)",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-11chem-1",
            question: "What is the hybridization and geometry shape of Ammonia (NH₃)?",
            questionHinglish: "Ammonia (NH₃) ki hybridization aur shape kya hoti hai?",
            options: [
              "sp³, Trigonal Pyramidal",
              "sp², Trigonal Planar",
              "sp³, Tetrahedral",
              "sp, Linear",
            ],
            correctIndex: 0,
            explanation: "Nitrogen has 3 bond pairs and 1 lone pair (Steric number 4 = sp³), giving a Trigonal Pyramidal shape.",
            explanationHinglish: "N ke paas 3 bond pair + 1 lone pair = 4 (sp³) hai, aur 1 lone pair ki wajah se shape Pyramidal ho jaati hai!",
          },
        ],
      },
      {
        id: "u-11chem-2",
        title: "MOT Bond Order & Paramagnetic Trick",
        durationMinutes: 20,
        xpReward: 250,
        summary: "The 14-Electron Triangle Trick for Bond Order.",
        summaryHinglish: "MOT diagram banaye bina sirf electrons gin kar Bond Order nikalo!",
        contentSections: [
          {
            heading: "14 Electrons = Bond Order 3.0 👑",
            headingHinglish: "14 Electrons = Bond Order 3 (Raja Number!) 👑",
            body: "N₂ and CO have 14 electrons and Bond Order = 3.0. For every electron added or removed from 14, subtract 0.5 from the bond order!",
            bodyHinglish: "14 electrons (N₂) par Bond Order 3 hota hai. Ab 14 se jitne electrons upar ya niche jao, har 1 electron par 0.5 ghata do!",
            formulaOrTip: "14 e⁻ ➔ BO = 3.0  |  15 e⁻ ➔ BO = 2.5  |  16 e⁻ (O₂) ➔ BO = 2.0",
            formulaOrTipHinglish: "14 e⁻ = 3.0  |  15 ya 13 e⁻ = 2.5  |  16 ya 12 e⁻ = 2.0",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-11chem-2",
            question: "What is the bond order of the O₂ molecule (16 electrons)?",
            questionHinglish: "O₂ molecule (kul 16 electrons) ka Bond Order kitna hota hai?",
            options: ["1.0", "2.0", "2.5", "3.0"],
            correctIndex: 1,
            explanation: "16 is 2 electrons away from 14, so Bond Order = 3.0 - 2(0.5) = 2.0.",
            explanationHinglish: "14 se 2 kadam door hai (16), toh 3.0 - 1.0 = 2.0!",
          },
        ],
      },
    ],
  },
  {
    id: "mod-11-math-1",
    slug: "class-11-limits-derivatives-conics",
    chapterNumber: 1,
    title: "Limits, Standard Derivatives & First Principle",
    subtitle: "Crack 0/0 indeterminate forms, trigonometric limits, and product/quotient rules!",
    subtitleHinglish: "Calculus ki shuruat! sin x / x = 1 aur Differentiation ke rules aasan bhasha me!",
    board: "BOTH",
    classGrade: 11,
    subject: "Mathematics",
    difficulty: "Intermediate",
    badgeName: "Limit Breaker",
    badgeEmoji: "♾️",
    accentColor: "from-violet-600 to-indigo-600",
    totalXp: 500,
    estimatedMinutes: 40,
    units: [
      {
        id: "u-11math-1",
        title: "Trigonometric & Algebraic Standard Limits",
        durationMinutes: 20,
        xpReward: 250,
        summary: "Master lim (x→0) [sin x / x] = 1 and (xⁿ - aⁿ)/(x - a) = n·aⁿ⁻¹.",
        summaryHinglish: "sin(ax)/sin(bx) dekhte hi seedha a/b answer likho!",
        contentSections: [
          {
            heading: "The Golden Limit Formulas 🎯",
            headingHinglish: "Trigonometric Limits ka 2-Second Rule 🎯",
            body: "Whenever x approaches 0 in radian measure, sin(kx)/(kx) approaches 1, and (1 - cos x)/x² approaches 1/2!",
            bodyHinglish: "Jab x → 0 ho, toh sin(ax)/x ki value 'a' hoti hai aur sin(ax)/sin(bx) ki value seedha a/b hoti hai!",
            formulaOrTip: "lim (x→0) [sin(ax) / bx] = a / b   |   lim (x→a) [(xⁿ - aⁿ)/(x - a)] = n·aⁿ⁻¹",
            formulaOrTipHinglish: "lim (x→0) [sin(5x) / sin(3x)] = 5 / 3",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-11math-1",
            question: "Evaluate lim (x→0) [sin(5x) / sin(3x)].",
            questionHinglish: "lim (x→0) [sin(5x) / sin(3x)] ki value kya hogi?",
            options: ["5/3", "3/5", "1", "0"],
            correctIndex: 0,
            explanation: "Divide numerator and denominator by x: [5 · sin(5x)/5x] / [3 · sin(3x)/3x] = 5/3.",
            explanationHinglish: "x ke coefficients ka ratio le lo: 5/3!",
          },
        ],
      },
      {
        id: "u-11math-2",
        title: "Product Rule & Quotient Rule of Differentiation",
        durationMinutes: 20,
        xpReward: 250,
        summary: "Differentiate any function accurately in one step.",
        summaryHinglish: "Power aage lao aur ek power kam kar do (n·xⁿ⁻¹)!",
        contentSections: [
          {
            heading: "Product & Quotient Rules 📈",
            headingHinglish: "Differentiation ka Basic Mantra 📈",
            body: "For u·v, differentiate one at a time and add. For u/v, square the denominator v²!",
            bodyHinglish: "xⁿ ka derivative lene ke liye power 'n' ko aage utaro aur upar power me se 1 ghata do: d/dx(xⁿ) = n·xⁿ⁻¹!",
            formulaOrTip: "d/dx(u·v) = u'v + uv'   |   d/dx(u/v) = (u'v - uv') / v²",
            formulaOrTipHinglish: "d/dx(sin x) = cos x  |  d/dx(cos x) = -sin x  |  d/dx(eˣ) = eˣ",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-11math-2",
            question: "What is the derivative of f(x) = x³ + sin x with respect to x?",
            questionHinglish: "f(x) = x³ + sin x ka derivative (d/dx) kya hoga?",
            options: ["3x² + cos x", "3x² - cos x", "x² + cos x", "3x + sin x"],
            correctIndex: 0,
            explanation: "d/dx(x³) = 3x² and d/dx(sin x) = cos x.",
            explanationHinglish: "x³ ka 3x² aur sin x ka cos x ➔ 3x² + cos x.",
          },
        ],
      },
    ],
  },

  // ==========================================================================
  // CLASS 12 - PHYSICS, CHEMISTRY, MATHEMATICS
  // ==========================================================================
  {
    id: "mod-12-phy-1",
    slug: "class-12-electrostatics-coulombs-gauss-law",
    chapterNumber: 1,
    title: "Electric Charges, Fields & Gauss's Law",
    subtitle: "Coulomb's Law, Electric Dipole torque, and Gauss's Law derivations for Board + JEE!",
    subtitleHinglish: "Electric Dipole ki Axial vs Equatorial field aur Gauss's Law ke pakke board questions Hinglish me!",
    board: "BOTH",
    classGrade: 12,
    subject: "Physics",
    difficulty: "Board Special",
    badgeName: "Electro Titan",
    badgeEmoji: "⚡",
    accentColor: "from-sky-500 to-blue-600",
    totalXp: 600,
    estimatedMinutes: 50,
    units: [
      {
        id: "u-12phy-1",
        title: "Coulomb's Law & Axial vs Equatorial Dipole Field",
        durationMinutes: 25,
        xpReward: 300,
        summary: "Why is Axial Electric Field exactly double the Equatorial Field for a short dipole?",
        summaryHinglish: "Short dipole ki Axial line par electric field Equatorial se theek 2 guna (double) hoti hai!",
        contentSections: [
          {
            heading: "Axial vs Equatorial Ratio = 2 : 1 🎯",
            headingHinglish: "Axial Field = 2 × Equatorial Field 🎯",
            body: "For a short electric dipole of dipole moment p = q × 2a, the axial field is aligned with p, while the equatorial field is antiparallel and half in magnitude!",
            bodyHinglish: "Same distance 'r' par dipole ki Axial line par Electric Field (2kp/r³) Equatorial line (kp/r³) se theek dugni hoti hai!",
            formulaOrTip: "E_axial = 2kp / r³   |   E_equatorial = kp / r³   ➔   E_axial = 2 × E_equatorial",
            formulaOrTipHinglish: "Ratio E_axial : E_equatorial = 2 : 1 (Board MCQ favorite!)",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-12phy-1",
            question: "What is the ratio of electric field intensity at a point on the axial line to a point at the same distance on the equatorial line of a short dipole?",
            questionHinglish: "Short dipole ki axial line aur equatorial line par same distance par Electric Field ka ratio kya hota hai?",
            options: ["1 : 2", "2 : 1", "1 : 1", "4 : 1"],
            correctIndex: 1,
            explanation: "E_axial / E_equatorial = (2kp/r³) / (kp/r³) = 2 : 1.",
            explanationHinglish: "Axial par 2kp/r³ aur Equatorial par kp/r³ ➔ Ratio 2 : 1.",
          },
        ],
      },
      {
        id: "u-12phy-2",
        title: "Gauss's Theorem & Electric Flux (Φ = q_in / ε₀)",
        durationMinutes: 25,
        xpReward: 300,
        summary: "Calculate flux through cubes, spheres, and infinite sheets in 10 seconds.",
        summaryHinglish: "Band dabbe (Closed surface) ke andar Dipole rakha ho toh net Flux zero kyun hota hai?",
        contentSections: [
          {
            heading: "Size of Gaussian Surface Does NOT Matter! 🌐",
            headingHinglish: "Dabba Chhota Ho Ya Bada, Flux Sirf Andar ke Charge Par Depend Karta Hai! 🌐",
            body: "By Gauss's Law, total electric flux Φ through any closed surface depends ONLY on the net enclosed charge q_in divided by ε₀.",
            bodyHinglish: "Gauss Law kehta hai ki kisi band surface se nikalne wala kul Flux Φ = q_inside / ε₀ hota hai. Agar andar dipole (+q aur -q) rakha hai, toh kul charge = 0, yaani Flux = 0!",
            formulaOrTip: "Φ_total = ∮ E · dA = q_enclosed / ε₀",
            formulaOrTipHinglish: "Dipole inside closed surface ➔ Net charge = +q - q = 0 ➔ Total Flux = 0!",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-12phy-2",
            question: "An electric dipole (+q and -q) is enclosed inside a sphere of radius R. What is the net electric flux coming out of the sphere?",
            questionHinglish: "Ek sphere ke andar electric dipole (+q aur -q) band hai. Sphere se bahar aane wala net electric flux kitna hoga?",
            options: ["2q / ε₀", "q / ε₀", "Zero (0)", "q / 4πε₀R²"],
            correctIndex: 2,
            explanation: "Net charge inside the sphere is (+q) + (-q) = 0. By Gauss's Law, Φ = q_net / ε₀ = 0!",
            explanationHinglish: "Andar ka total charge +q - q = 0 hai, isliye Gauss Law se Flux = 0!",
          },
        ],
      },
    ],
  },
  {
    id: "mod-12-chem-1",
    slug: "class-12-electrochemistry-nernst-equation",
    chapterNumber: 1,
    title: "Electrochemistry, Nernst Equation & Kohlrausch Law",
    subtitle: "Crack all 5-mark Nernst numericals, EMF of Galvanic cells, and Faraday's laws!",
    subtitleHinglish: "LOAN rule se Anode-Cathode pehchano aur Nernst Equation ke 5-mark numericals पक्के karo!",
    board: "BOTH",
    classGrade: 12,
    subject: "Chemistry",
    difficulty: "Board Special",
    badgeName: "Galvanic Guru",
    badgeEmoji: "🔋",
    accentColor: "from-emerald-500 to-teal-600",
    totalXp: 600,
    estimatedMinutes: 45,
    units: [
      {
        id: "u-12chem-1",
        title: "Standard Cell Potential & Nernst Equation",
        durationMinutes: 22,
        xpReward: 300,
        summary: "LOAN rule (Left Oxidation Anode Negative) & E_cell calculation.",
        summaryHinglish: "LOAN (Left = Oxidation = Anode = Negative) yaad rakho, kabhi sign galat nahi hoga!",
        contentSections: [
          {
            heading: "Remember LOAN for Galvanic Cells! 🔋",
            headingHinglish: "Galvanic Cell ka LOAN Mantra! 🔋",
            body: "Left side = Oxidation = Anode = Negative terminal. Standard EMF is always Cathode minus Anode reduction potential!",
            bodyHinglish: "L-O-A-N ka matlab: Left side par hamesha Oxidation hota hai, wahi Anode hai aur wahi Negative terminal hai! Aur E°_cell nikalne ke liye Cathode me se Anode ghatao.",
            formulaOrTip: "E°_cell = E°_cathode - E°_anode   |   E_cell = E°_cell - (0.0591 / n) log [Anode] / [Cathode]",
            formulaOrTipHinglish: "Daniell Cell (Zn-Cu) ka E°_cell hamesha +1.10 Volt hota hai!",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-12chem-1",
            question: "If E°(Zn²⁺/Zn) = -0.76 V and E°(Cu²⁺/Cu) = +0.34 V, what is the standard EMF (E°_cell) of the Daniell cell?",
            questionHinglish: "Agar Zn ka potential -0.76 V aur Cu ka +0.34 V hai, toh Daniell cell ka E°_cell kitna hoga?",
            options: ["+1.10 V", "-1.10 V", "+0.42 V", "-0.42 V"],
            correctIndex: 0,
            explanation: "E°_cell = E°_cathode(Cu) - E°_anode(Zn) = +0.34 - (-0.76) = +1.10 V.",
            explanationHinglish: "+0.34 - (-0.76) = +1.10 V.",
          },
        ],
      },
      {
        id: "u-12chem-2",
        title: "Molar Conductivity & Kohlrausch's Law",
        durationMinutes: 23,
        xpReward: 300,
        summary: "How conductivity (κ) and molar conductivity (Λm) vary with dilution.",
        summaryHinglish: "Paani milane (Dilution) par Molar Conductivity (Λm) badhti hai ya ghat-ti hai?",
        contentSections: [
          {
            heading: "Dilution Effect: κ Decreases, Λm Increases! 📈",
            headingHinglish: "Dilution karne par Λm Badhta Hai aur κ Ghat-ta Hai! 📈",
            body: "On dilution, number of ions per unit volume decreases so conductivity (κ) decreases, while total volume increases so Molar Conductivity (Λm) increases!",
            bodyHinglish: "Paani milane (dilution) par ions ko ghumne ke liye zyada jagah milti hai isliye Molar Conductivity (Λm) HAMESHA badhti (increase hoti) hai!",
            formulaOrTip: "Λm = (κ × 1000) / Molarity (M)",
            formulaOrTipHinglish: "Dilution ↑ ➔ Molarity ↓ ➔ Molar Conductivity (Λm) ↑",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-12chem-2",
            question: "What happens to the molar conductivity (Λm) of an electrolyte solution when it is diluted?",
            questionHinglish: "Kisi electrolyte solution me paani milane (dilute karne) par Molar Conductivity (Λm) ka kya hota hai?",
            options: [
              "It increases",
              "It decreases",
              "It remains constant",
              "It becomes zero",
            ],
            correctIndex: 0,
            explanation: "Molar conductivity Λm increases with dilution due to increased degree of dissociation and ionic mobility.",
            explanationHinglish: "Dilution karne par Λm badhta (increase hota) hai!",
          },
        ],
      },
    ],
  },
  {
    id: "mod-both-12-calculus",
    slug: "calculus-differentiation-integration-trail",
    chapterNumber: 1,
    title: "Calculus – Chain Rule, Maxima & Definite Integrals",
    subtitle: "CBSE & ISC Class 12 Board + JEE foundation chapter with King's Property shortcuts.",
    subtitleHinglish: "Definite Integration ki King's Property se 6-mark ke sawal 4 line me solve karo!",
    board: "BOTH",
    classGrade: 12,
    subject: "Mathematics",
    difficulty: "Board Special",
    badgeName: "Calculus Titan",
    badgeEmoji: "👑",
    accentColor: "from-amber-500 to-orange-600",
    totalXp: 600,
    estimatedMinutes: 50,
    units: [
      {
        id: "u-calc-1",
        title: "The King's Property of Definite Integrals",
        durationMinutes: 25,
        xpReward: 300,
        summary: "Solve 6-mark board integration questions in 4 lines using Property P4.",
        summaryHinglish: "0 se π/2 limit wale sin aur cos ke sawalon ka 2-second answer: π/4!",
        contentSections: [
          {
            heading: "The King's Rule: ∫ f(x) dx from a to b 👑",
            headingHinglish: "Definite Integration ka Raja Rule (King's Property) 👑",
            body: "Whenever you see sin(x) and cos(x) in denominators with limits 0 to π/2, apply f(a + b - x). Adding equation (1) and (2) cancels the entire complex fraction into 1!",
            bodyHinglish: "Jab bhi limit 0 se π/2 ho aur niche sin x + cos x jaisa symmetric fraction dikhe, toh x ki jagah (π/2 - x) rakho. Equation (1) aur (2) ko jodne par poora fraction kat kar 1 ban jata hai aur answer π/4 aata hai!",
            formulaOrTip: "∫₀^(π/2) [√sin x / (√sin x + √cos x)] dx = π / 4  (Instant 2-second check!)",
            formulaOrTipHinglish: "2I = π/2 ➔ I = π/4 (Board + JEE dono me sabse zyada pucha jane wala sawal!)",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-calc-1",
            question: "Evaluate I = ∫₀^(π/2) [sin⁴x / (sin⁴x + cos⁴x)] dx",
            questionHinglish: "I = ∫₀^(π/2) [sin⁴x / (sin⁴x + cos⁴x)] dx ki value kya hogi?",
            options: ["π / 2", "π / 4", "1", "0"],
            correctIndex: 1,
            explanation: "Using King's property f(π/2 - x), sin⁴x becomes cos⁴x. Adding I + I = ∫₀^(π/2) 1 dx = π/2 => I = π/4!",
            explanationHinglish: "King's Property se 2I = π/2 => I = π/4!",
          },
        ],
      },
      {
        id: "u-calc-2",
        title: "Maxima & Minima Word Problems Made Easy",
        durationMinutes: 25,
        xpReward: 300,
        summary: "Second Derivative Test & Case-Study questions for Class 12 Boards.",
        summaryHinglish: "Second derivative negative (-) aaye toh Maxima, aur positive (+) aaye toh Minima!",
        contentSections: [
          {
            heading: "First & Second Derivative Test 📈",
            headingHinglish: "Maxima aur Minima Pehchanne ki Smiley Trick 📈",
            body: "Step 1: Put f'(x) = 0 to find critical points. Step 2: Check f''(x). If f''(x) < 0, it's a Local Maximum! If f''(x) > 0, it's a Local Minimum!",
            bodyHinglish: "Pehle f'(x) = 0 rakh kar x ki value nikalo. Phir double derivative f''(x) check karo: agar Minus (-) aaya toh उल्टा पहाड़ (Peak = Maxima), aur agar Plus (+) aaya toh घाटी (Valley = Minima)!",
            formulaOrTip: "Negative f''(x) = Sad face ☹️ (Peak at top = Maxima). Positive f''(x) = Happy face 🙂 (Valley at bottom = Minima).",
            formulaOrTipHinglish: "f''(x) < 0 ➔ Maxima (Upar choti)  |  f''(x) > 0 ➔ Minima (Niche ghati)",
          },
        ],
        checkpointQuestions: [
          {
            id: "q-calc-2",
            question: "If at x = c, f'(c) = 0 and f''(c) = -12, then x = c is a point of:",
            questionHinglish: "Agar x = c par f'(c) = 0 hai aur f''(c) = -12 (negative) hai, toh x = c kya hoga?",
            options: ["Local Minima", "Local Maxima", "Point of Inflection", "None of these"],
            correctIndex: 1,
            explanation: "Since the second derivative f''(c) is negative (-12 < 0), the function attains a Local Maximum at x = c.",
            explanationHinglish: "Kyunki f''(c) negative (-12) hai, isliye x = c Local Maxima ka point hai!",
          },
        ],
      },
    ],
  },
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
  const extraUnits: UnitItem[] = [];
  if (mod.units.length < 4) {
    extraUnits.push({
      id: `${mod.id}-u-extra-1`,
      title: `High-Yield Board Numericals & Applications (${mod.title})`,
      durationMinutes: 15,
      xpReward: 100,
      summary: `Step-by-step solved numericals and real-world applications from ${mod.title}.`,
      summaryHinglish: `${mod.title} ke sabse important Board Exam numericals aur real-life applications step-by-step samjho!`,
      contentSections: [
        {
          heading: "Step-by-Step Numerical Solving Strategy",
          headingHinglish: "Board Exam me Numericals Solve Karne ka 3-Step Formula",
          body: `Always write Given data with SI units first, state the standard formula clearly (carries 0.5 to 1 mark in CBSE/ICSE step-marking), and substitute values carefully to avoid sign or calculation errors in ${mod.title}.`,
          bodyHinglish: `Sabse pehle Given values ko SI unit ke sath likho, phir sahi Formula box me likho (CBSE/ICSE me sirf formula likhne ke bhi step-marks milte hain!), aur aakhir me values substitute karke final answer unit ke sath likho.`,
          formulaOrTip: "💡 Exam Tip: Writing the formula + SI unit in the final answer secures full step-marking!",
          formulaOrTipHinglish: "💡 Topper Tip: Formula ko box me band karo aur final answer ke aage SI Unit zaroor likho!",
        },
      ],
      checkpointQuestions: [
        {
          id: `${mod.id}-q-extra-1`,
          question: `In Board Exams, what is the first essential step before substituting values into a formula for ${mod.subject}?`,
          options: [
            "Convert all given quantities into standard SI units",
            "Round off all numbers to zero",
            "Skip writing the formula",
            "Change the sign of all positive numbers",
          ],
          correctIndex: 0,
          explanation: "Converting all given values into standard SI units prevents 90% of calculation mistakes.",
        },
      ],
    });
  }
  if (mod.units.length + extraUnits.length < 5) {
    extraUnits.push({
      id: `${mod.id}-u-extra-2`,
      title: `Assertion-Reason & Case-Study Mastery (${mod.title})`,
      durationMinutes: 15,
      xpReward: 100,
      summary: `Crack tricky Competency-Based, Assertion-Reason, and Case-Study questions from ${mod.title}.`,
      summaryHinglish: `${mod.title} ke Assertion-Reason aur Case-Study wale tricky sawalon ko 10 second me kaise crack karein!`,
      contentSections: [
        {
          heading: "How to Decode Assertion (A) & Reason (R)",
          headingHinglish: "Assertion (A) aur Reason (R) ko Sahi Kaise Karein?",
          body: `First check if Assertion (A) and Reason (R) are individually true statements. If both are true, connect them with the word 'BECAUSE' (Assertion because Reason). If the sentence makes scientific sense, choose Option A; otherwise choose Option B!`,
          bodyHinglish: `Sabse pehle check karo ki Assertion (A) aur Reason (R) alag-alag sach (True) hain ya nahi. Agar dono True hain, toh dono ke beech me 'KYUNKI (Because)' laga kar padho—agar reason sahi बैठता hai toh Option (A) tick karo, warna Option (B)!`,
          formulaOrTip: "💡 'Because' Test: Read [Assertion] BECAUSE [Reason] to distinguish Option A from Option B!",
          formulaOrTipHinglish: "💡 'Kyunki' Trick: [Assertion] KYUNKI [Reason] padhne se Option A aur B ka confusion turant khatam ho jata hai!",
        },
      ],
      checkpointQuestions: [
        {
          id: `${mod.id}-q-extra-2`,
          question: "When both Assertion (A) and Reason (R) are true, how do you verify if R is the correct explanation of A?",
          options: [
            "Connect A and R with 'BECAUSE' and check if the cause-effect relationship holds",
            "Always pick Option B",
            "Count the number of words in A and R",
            "Check if A and R have the same first letter",
          ],
          correctIndex: 0,
          explanation: "Linking Assertion (A) and Reason (R) with 'because' tests whether R directly explains the cause of A.",
        },
      ],
    });
  }

  const bank = SUBJECT_QUESTION_BANK[mod.subject] || SUBJECT_QUESTION_BANK.Physics;
  const allUnits = [...mod.units, ...extraUnits].map((u) => {
    const questions = [...u.checkpointQuestions];
    let bIdx = 0;
    while (questions.length < 10) {
      const template = bank[bIdx % bank.length];
      if (!questions.some((existing) => existing.question === template.question)) {
        questions.push({
          ...template,
          id: `${u.id}-q-bank-${questions.length + 1}`,
        });
      }
      bIdx++;
      if (bIdx > 30) break;
    }
    return {
      ...u,
      xpReward: questions.length * 10, // 10 Questions = 100 Marks
      checkpointQuestions: questions,
    };
  });

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
    slot: "3:00 PM IST",
    pairings: [
      { classGrade: 9, subject: "Physics" },
      { classGrade: 10, subject: "Mathematics" },
      { classGrade: 11, subject: "Chemistry" },
      { classGrade: 12, subject: "Physics" },
    ],
  },
  {
    slot: "4:00 PM IST",
    pairings: [
      { classGrade: 10, subject: "Physics" },
      { classGrade: 9, subject: "Mathematics" },
      { classGrade: 11, subject: "Physics" },
      { classGrade: 12, subject: "Mathematics" },
    ],
  },
  {
    slot: "5:00 PM IST",
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
    scheduledTimeSlot: "3:00 PM IST",
    frequencyLabel: "Once a Day • 3:00 PM Slot",
    entryFeeInr: 49,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win Free ⚡ Basic Pass (2 Quizzes • ₹49) • Top 10 Win +1 Free Quiz Pass",
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
    scheduledTimeSlot: "3:00 PM IST",
    frequencyLabel: "Once a Day • 3:00 PM Slot",
    entryFeeInr: 49,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win Free ⚡ Basic Pass (2 Quizzes • ₹49) • Top 10 Win +1 Free Quiz Pass",
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
    scheduledTimeSlot: "4:00 PM IST",
    frequencyLabel: "Once a Day • 4:00 PM Slot",
    entryFeeInr: 49,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win Free ⚡ Basic Pass (2 Quizzes • ₹49) • Top 10 Win +1 Free Quiz Pass",
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
    scheduledTimeSlot: "4:00 PM IST",
    frequencyLabel: "Once a Day • 4:00 PM Slot",
    entryFeeInr: 49,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win Free ⚡ Basic Pass (2 Quizzes • ₹49) • Top 10 Win +1 Free Quiz Pass",
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
    scheduledTimeSlot: "5:00 PM IST",
    frequencyLabel: "Once a Day • 5:00 PM Slot",
    entryFeeInr: 49,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win Free ⚡ Basic Pass (2 Quizzes • ₹49) • Top 10 Win +1 Free Quiz Pass",
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
    scheduledTimeSlot: "Sunday • 4:00 PM IST",
    frequencyLabel: "Once a Week • Sunday 4:00 PM",
    entryFeeInr: 149,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win Free 💎 VIP Pass (8 Quizzes • ₹149) • Top 10 Win Free ⚡ Basic Pass",
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
    scheduledTimeSlot: "Last Sunday • 3:00 PM IST",
    frequencyLabel: "Once a Month • 3:00 PM Slot",
    entryFeeInr: 499,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win Free 👑 Pro Pass (34 Quizzes • ₹499) • Top 10 Win Free 💎 VIP Pass",
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
    scheduledTimeSlot: "3:00 PM IST",
    frequencyLabel: "Once a Day • 3:00 PM Slot",
    entryFeeInr: 49,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win Free ⚡ Basic Pass (2 Quizzes • ₹49) • Top 10 Win +1 Free Quiz Pass",
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
    scheduledTimeSlot: "3:00 PM IST",
    frequencyLabel: "Once a Day • 3:00 PM Slot",
    entryFeeInr: 49,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win Free ⚡ Basic Pass (2 Quizzes • ₹49) • Top 10 Win +1 Free Quiz Pass",
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
    scheduledTimeSlot: "4:00 PM IST",
    frequencyLabel: "Once a Day • 4:00 PM Slot",
    entryFeeInr: 49,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win Free ⚡ Basic Pass (2 Quizzes • ₹49) • Top 10 Win +1 Free Quiz Pass",
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
    scheduledTimeSlot: "5:00 PM IST",
    frequencyLabel: "Once a Day • 5:00 PM Slot",
    entryFeeInr: 49,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win Free ⚡ Basic Pass (2 Quizzes • ₹49) • Top 10 Win +1 Free Quiz Pass",
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
    scheduledTimeSlot: "Last Sunday • 4:00 PM IST",
    frequencyLabel: "Once a Month • 4:00 PM Slot",
    entryFeeInr: 499,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win Free 👑 Pro Pass (34 Quizzes • ₹499) • Top 10 Win Free 💎 VIP Pass",
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
    scheduledTimeSlot: "3:00 PM IST",
    frequencyLabel: "Once a Day • 3:00 PM Slot",
    entryFeeInr: 49,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win Free ⚡ Basic Pass (2 Quizzes • ₹49) • Top 10 Win +1 Free Quiz Pass",
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
    scheduledTimeSlot: "4:00 PM IST",
    frequencyLabel: "Once a Day • 4:00 PM Slot",
    entryFeeInr: 49,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win Free ⚡ Basic Pass (2 Quizzes • ₹49) • Top 10 Win +1 Free Quiz Pass",
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
    scheduledTimeSlot: "3:00 PM IST",
    frequencyLabel: "Once a Day • 3:00 PM Slot",
    entryFeeInr: 49,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win Free ⚡ Basic Pass (2 Quizzes • ₹49) • Top 10 Win +1 Free Quiz Pass",
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
    scheduledTimeSlot: "4:00 PM IST",
    frequencyLabel: "Once a Day • 4:00 PM Slot",
    entryFeeInr: 49,
    freeWithPass: true,
    prizePool: "🎁 Top 3 Win Free ⚡ Basic Pass (2 Quizzes • ₹49) • Top 10 Win +1 Free Quiz Pass",
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
    name: "Aarav Sharma",
    username: "@aarav_optics",
    board: "CBSE",
    classGrade: 10,
    city: "Delhi",
    xp: 8450,
    rating: 1942,
    streak: 48,
    badges: 19,
    avatar: "🦁",
  },
  {
    rank: 2,
    name: "Ananya Chatterjee",
    username: "@ananya_icse",
    board: "ICSE",
    classGrade: 10,
    city: "Kolkata",
    xp: 7920,
    rating: 1895,
    streak: 39,
    badges: 17,
    avatar: "🦊",
  },
  {
    rank: 3,
    name: "Rohan Verma",
    username: "@rohan_calc12",
    board: "CBSE",
    classGrade: 12,
    city: "Jaipur",
    xp: 6810,
    rating: 1830,
    streak: 31,
    badges: 15,
    avatar: "🐉",
  },
  {
    rank: 4,
    name: "Diya Nair",
    username: "@diya_pcm11",
    board: "ICSE",
    classGrade: 11,
    city: "Bengaluru",
    xp: 5490,
    rating: 1765,
    streak: 24,
    badges: 13,
    avatar: "🦄",
  },
  {
    rank: 5,
    name: "Kabir Singhania",
    username: "@kabir_scholar",
    board: "CBSE",
    classGrade: 9,
    city: "Mumbai",
    xp: 4120,
    rating: 1690,
    streak: 19,
    badges: 11,
    avatar: "🐼",
  },
];
