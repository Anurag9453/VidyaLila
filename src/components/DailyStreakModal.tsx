"use client";

import React, { useState, useEffect } from "react";
import { useApp } from "@/lib/store";
import {
  Flame,
  Sparkles,
  CheckCircle2,
  XCircle,
  X,
  Trophy,
  RotateCcw,
  Coins,
  Zap,
} from "lucide-react";

interface DailyTrickQuestion {
  id: string;
  subject: "Physics" | "Chemistry" | "Mathematics";
  title: string;
  questionEn: string;
  questionHi: string;
  options: [string, string, string, string];
  correctIndex: number;
  trickExplanationEn: string;
  trickExplanationHi: string;
}

const DAILY_TRICK_QUESTIONS: DailyTrickQuestion[] = [
  {
    id: "trick-1",
    subject: "Physics",
    title: "The Vacuum Feather vs. Bowling Ball Drop",
    questionEn:
      "Inside a giant vacuum chamber (zero air resistance), a 10 kg iron bowling ball and a 5 gram bird feather are dropped from the exact same height at the same instant. Which one hits the floor first?",
    questionHi:
      "Ek bade Vacuum Chamber (jahan bilkul hawa nahi hai) mein 10 kg ki iron ball aur 5 gram ka pankh (feather) ek hi height se ek saath chhode jaate hain. Zameen par pehle kaun girega?",
    options: [
      "The 10 kg bowling ball hits much earlier",
      "The 10 kg ball hits just 1 second earlier",
      "Both hit the ground at the exact same instant!",
      "The feather floats upward in a vacuum",
    ],
    correctIndex: 2,
    trickExplanationEn:
      "Galileo's classic trick! Acceleration due to gravity (g = 9.8 m/s²) does NOT depend on the mass of the falling object. Without air resistance, a feather and a 10 kg iron ball fall at the exact same rate!",
    trickExplanationHi:
      "Yeh Galileo ka sabse famous trick question hai! Gravity ki acceleration (g = 9.8 m/s²) object ke mass par depend NAHI karti. Jab hawa (air resistance) hata di jaye, toh pankh aur 10 kg ki ball bilkul ek saath zameen par girte hain!",
  },
  {
    id: "trick-2",
    subject: "Chemistry",
    title: "The Melting Ice Cube Water-Level Trap",
    questionEn:
      "A glass is filled to the brim with water, and an ice cube is floating in it (sticking slightly above the rim). When the ice cube melts completely, what happens to the water level?",
    questionHi:
      "Paani se labalab bhare ek glass mein barf ka tukda (ice cube) tair raha hai. Jab woh ice cube poora pighal (melt) jayega, toh glass ke paani ke level ka kya hoga?",
    options: [
      "Water overflows out of the glass",
      "Water level stays at the exact same level!",
      "Water level drops by 2 cm",
      "Depends on the temperature of the room",
    ],
    correctIndex: 1,
    trickExplanationEn:
      "Archimedes' Principle Trick! A floating ice cube displaces a volume of liquid water equal to its own weight. When it melts into water of the same weight, it fits into the exact volume it was already displacing!",
    trickExplanationHi:
      "Archimedes' Principle ka jaadu! Tairta hua barf ka tukda apne weight ke barabar hi paani ki jagah gher ke rakhta hai. Pighalne ke baad woh bilkul utni hi jagah leta hai—isliye paani na छलकता hai, na kam hota hai!",
  },
  {
    id: "trick-3",
    subject: "Mathematics",
    title: "The Bat & Ball ₹110 Brain Teaser",
    questionEn:
      "A cricket bat and a ball together cost ₹110 in total. The bat costs ₹100 MORE than the ball. How much does the ball cost?",
    questionHi:
      "Ek cricket bat aur ek ball ki total keemat ₹110 hai. Bat ki keemat ball se ₹100 ZYADA hai. Batao ball ki keemat kitni hai?",
    options: ["₹10", "₹5", "₹15", "₹1"],
    correctIndex: 1,
    trickExplanationEn:
      "90% people instantly say ₹10! But if the ball were ₹10 and the bat were ₹100 more (₹110), the total would be ₹120! Let ball = x, then bat = x + 100. So x + (x + 100) = 110 ⇒ 2x = 10 ⇒ x = ₹5!",
    trickExplanationHi:
      "90% log jhat se ₹10 bol dete hain! Par socho: agar ball ₹10 ki hoti, toh bat ₹100 zyada yaani ₹110 ka hota, aur total ₹120 ho jata! Sahi hisaab: Ball = ₹5, Bat = ₹105 (जो ₹5 se ₹100 zyada hai), aur Total = ₹110!",
  },
  {
    id: "trick-4",
    subject: "Physics",
    title: "The Circular Track Displacement Trap",
    questionEn:
      "An athlete runs 3 full rounds of a 400-metre circular Olympic track at top speed and stops right at the starting line. What is the total WORK DONE by his net displacement?",
    questionHi:
      "Ek runner 400m ke gol (circular) track ke 3 poore chakkar lagata hai aur wapas starting line par ruk jata hai. Uska net DISPLACEMENT kitna hua?",
    options: ["1,200 metres", "400 metres", "Zero (0 metres)!", "800 metres"],
    correctIndex: 2,
    trickExplanationEn:
      "Distance covered is 1,200 m, retrieve your attention to the word DISPLACEMENT! Since his initial and final positions are the exact same point on the track, net displacement is strictly 0 metres!",
    trickExplanationHi:
      "Distance toh 1,200 m hai, par saval mein DISPLACEMENT pucha gaya hai! Kyunki runner ghoom kar wapas usi starting point par aa gaya, isliye shortest straight-line distance (Displacement) = 0 metres!",
  },
  {
    id: "trick-5",
    subject: "Chemistry",
    title: "The Boiling Water Temperature Ceiling",
    questionEn:
      "Water is boiling vigorously at 100°C in an open pot at sea level. If you turn the gas burner flame to DOUBLE its power, what becomes the temperature of the boiling water?",
    questionHi:
      "Khule bartan mein paani 100°C par ubal (boil) raha hai. Agar aap gas ki aanch (flame) ko DOUBLE tej kar do, toh ubalte hue paani ka temperature kitna ho jayega?",
    options: [
      "It rises to 120°C",
      "It rises to 200°C",
      "It stays at 100°C until all water turns to steam!",
      "It drops to 90°C",
    ],
    correctIndex: 2,
    trickExplanationEn:
      "Latent Heat of Vaporization Trick! During a phase change (boiling), all extra heat energy goes into breaking intermolecular bonds to turn liquid into steam. The temperature remains locked at 100°C!",
    trickExplanationHi:
      "Latent Heat ka kamaal! Jab paani 100°C par boil hone lagta hai, toh tej aanch ki saari extra heat paani ko bhaap (steam) banane mein lagti hai—paani ka temperature 100°C se upar nahi badhta!",
  },
  {
    id: "trick-6",
    subject: "Mathematics",
    title: "The Lily Pad Doubling Pond Puzzle",
    questionEn:
      "A patch of lotus leaves in a pond DOUBLES in size every single day. If it takes 48 days to cover the entire pond completely, on which day was the pond HALF covered?",
    questionHi:
      "Ek talab mein kamal ke patte har roz DOUBLE (dugune) ho jaate hain. Agar poore talab ko bharne mein 48 days lagte hain, toh talab AADHA (half) kis din bhara tha?",
    options: ["Day 24", "Day 47!", "Day 12", "Day 36"],
    correctIndex: 1,
    trickExplanationEn:
      "Most people divide 48 by 2 and say Day 24! But since the patch DOUBLES every day, if it is 100% full on Day 48, it must have been half (50%) full just ONE day before — on Day 47!",
    trickExplanationHi:
      "Sabse pehla instinct Day 24 bolne ka hota hai! Lekin dhyan do: patte har roz DOUBLE hote hain. Agar 48th day par talab 100% bhara hai, toh theek ek din pehle (Day 47) woh 50% (aadha) bhara hoga!",
  },
  {
    id: "trick-7",
    subject: "Physics",
    title: "The 1 kg Cotton vs. 1 kg Iron Weighing Scale Trick",
    questionEn:
      "In the normal atmosphere (with air buoyancy), you have 1 kg of fluffy cotton and 1 kg of solid iron measured on a spring balance. Which one actually has a slightly GREATER true mass in vacuum?",
    questionHi:
      "Hawa mein naapne par aapke paas 1 kg rui (cotton) ki bori hai aur 1 kg lohe (iron) ka baant. Agar dono ko vacuum mein rakha jaye, toh kiska TRUE MASS thoda zyada niklega?",
    options: [
      "1 kg of Iron",
      "1 kg of Cotton!",
      "Both have 0 mass in vacuum",
      "Iron is 10 times heavier",
    ],
    correctIndex: 1,
    trickExplanationEn:
      "Upthrust (Buoyancy) of Air Trick! Because 1 kg of fluffy cotton has a huge volume, air pushes it upward (upthrust) much more than the compact iron weight. In vacuum without air upthrust, the cotton bag tips the scale heavier!",
    trickExplanationHi:
      "Hawa ke Upthrust (Buoyancy) ka trick! Rui (cotton) ki bori ka volume bahut bada hota hai, isliye hawa usko upar ki taraf zyada dhakelti hai. Jab vacuum mein hawa hataoge, toh 1 kg rui wali bori lohe se thodi bhari niklegi!",
  },
  {
    id: "trick-8",
    subject: "Chemistry",
    title: "The Dry Ice Sublimation Mystery",
    questionEn:
      "If you leave a block of 'Dry Ice' (solid CO₂) on a table at room temperature, why doesn't the table get wet?",
    questionHi:
      "Agar aap 'Dry Ice' (Solid Carbon Dioxide) ko kamre mein table par rakh do, toh pighalne par table geeli (wet) kyun nahi hoti?",
    options: [
      "Because it never melts at room temperature",
      "Because it undergoes Sublimation (Solid directly to Gas)!",
      "Because the wood absorbs all the water",
      "Because Dry Ice is made of plastic",
    ],
    correctIndex: 1,
    trickExplanationEn:
      "Dry ice is solid Carbon Dioxide (CO₂), not frozen water! At 1 atm pressure, it skips the liquid state completely and sublimes directly from solid to CO₂ gas.",
    trickExplanationHi:
      "Dry Ice paani ki barf nahi, balki Solid Carbon Dioxide (CO₂) hoti hai! Yeh bina liquid bane sidha Solid se Gas mein badal jaati hai (Sublimation), isliye table bilkul sukhi rehti hai!",
  },
];

export function DailyStreakModal() {
  const {
    profile,
    isAuthenticated,
    contentLanguage,
    hasPlayedDailyTrickToday,
    showDailyTrickModal,
    setShowDailyTrickModal,
    submitDailyTrickAnswer,
  } = useApp();

  const isHinglish = contentLanguage === "HINGLISH";

  // Pick today's official question deterministically from the date, plus allow cycling in practice mode
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [earnedCreditsThisShot, setEarnedCreditsThisShot] = useState<number>(0);
  const [isPracticeMode, setIsPracticeMode] = useState<boolean>(false);

  useEffect(() => {
    const dayOfYear = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
    setQuestionIndex(dayOfYear % DAILY_TRICK_QUESTIONS.length);
  }, []);

  useEffect(() => {
    if (showDailyTrickModal) {
      setSelectedOption(null);
      setSubmitted(false);
      setEarnedCreditsThisShot(0);
      setIsPracticeMode(hasPlayedDailyTrickToday);
    }
  }, [showDailyTrickModal, hasPlayedDailyTrickToday]);

  if (!showDailyTrickModal || !isAuthenticated) return null;

  const currentQ =
    DAILY_TRICK_QUESTIONS[questionIndex % DAILY_TRICK_QUESTIONS.length];
  const isCorrect = selectedOption === currentQ.correctIndex;

  const handleLockAnswer = () => {
    if (selectedOption === null || submitted) return;
    setSubmitted(true);

    if (!isPracticeMode) {
      const res = submitDailyTrickAnswer(
        selectedOption === currentQ.correctIndex,
        currentQ.title
      );
      setEarnedCreditsThisShot(res.creditsEarned);
    }
  };

  const handleTryPracticeQuestion = () => {
    setIsPracticeMode(true);
    setSelectedOption(null);
    setSubmitted(false);
    setEarnedCreditsThisShot(0);
    setQuestionIndex((prev) => (prev + 1) % DAILY_TRICK_QUESTIONS.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-3 sm:p-4 animate-fade-in">
      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl border-4 border-amber-400 bg-white text-slate-900 shadow-[0_12px_0_0_#d97706]">
        {/* Top Game Header (8-Ball Pool Golden Shot Style) */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 p-5 sm:p-6 text-white relative">
          <button
            type="button"
            onClick={() => setShowDailyTrickModal(false)}
            className="absolute right-3.5 top-3.5 rounded-full bg-black/20 p-1.5 text-white hover:bg-black/35 transition cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 pr-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/85 px-3 py-1 text-xs font-black uppercase tracking-wider text-amber-300 shadow-xs">
              <Flame className="h-4 w-4 text-orange-400 fill-orange-400" />
              <span>Day {profile.streak || 1} Daily Streak</span>
            </span>

            <span className="inline-flex items-center gap-1 rounded-full bg-white/20 border border-white/30 px-2.5 py-0.5 text-[11px] font-black text-white">
              {isPracticeMode
                ? "🎲 Bonus Practice Mode"
                : "🎯 1 Golden Trick Shot = +15 🪙 Credits"}
            </span>
          </div>

          <h3 className="mt-2.5 text-xl sm:text-2xl font-black tracking-tight">
            {isPracticeMode
              ? "Bonus Brain-Teaser Trick Shot 🧠"
              : "Daily Streak Golden Trick Question! 🎯"}
          </h3>
          <p className="mt-1 text-xs sm:text-sm font-bold text-amber-50">
            {isPracticeMode
              ? "You already played today's Golden Shot! Practice more fun trick questions below — your next +15 🪙 reward unlocks tomorrow."
              : isHinglish
              ? "Har roz website open karne par milega 1 Trick Question! Pehli baar mein sahi jawab do aur turant jeeto +15 🪙 Vidya Credits!"
              : "Open VidyaLila daily for 1 Golden Trick Question! Answer correctly on your first shot to win +15 🪙 Vidya Credits instantly!"}
          </p>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 space-y-5">
          {/* Subject & Title Pill */}
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-50 border border-indigo-200 px-3 py-1 text-xs font-extrabold text-indigo-800">
              <Zap className="h-3.5 w-3.5 text-indigo-600" />
              <span>
                {currentQ.subject} Trick • {currentQ.title}
              </span>
            </span>

            <span className="text-xs font-extrabold text-slate-500 flex items-center gap-1">
              <Coins className="h-3.5 w-3.5 text-amber-500" />
              <span>Wallet: {profile.credits} 🪙</span>
            </span>
          </div>

          {/* Question Box */}
          <div className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-4 sm:p-5">
            <p className="text-sm sm:text-base font-extrabold text-slate-900 leading-relaxed">
              {isHinglish ? currentQ.questionHi : currentQ.questionEn}
            </p>
          </div>

          {/* 4 Options */}
          <div className="grid grid-cols-1 gap-2.5">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isRightOption = idx === currentQ.correctIndex;

              let btnStyle =
                "border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/30 text-slate-800";
              if (!submitted && isSelected) {
                btnStyle =
                  "border-indigo-600 bg-indigo-50 text-indigo-950 ring-2 ring-indigo-500/20";
              } else if (submitted) {
                if (isRightOption) {
                  btnStyle =
                    "border-emerald-500 bg-emerald-50 text-emerald-950 font-black";
                } else if (isSelected && !isRightOption) {
                  btnStyle = "border-rose-400 bg-rose-50 text-rose-900";
                } else {
                  btnStyle = "border-slate-200 bg-slate-50 text-slate-400";
                }
              }

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={submitted}
                  onClick={() => setSelectedOption(idx)}
                  className={`w-full rounded-2xl border-2 p-3.5 text-left text-xs sm:text-sm font-bold transition flex items-center justify-between gap-3 cursor-pointer ${btnStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-black border ${
                        !submitted && isSelected
                          ? "bg-indigo-600 text-white border-indigo-700"
                          : submitted && isRightOption
                          ? "bg-emerald-600 text-white border-emerald-700"
                          : submitted && isSelected && !isRightOption
                          ? "bg-rose-600 text-white border-rose-700"
                          : "bg-slate-100 text-slate-700 border-slate-200"
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt}</span>
                  </div>

                  {submitted && isRightOption && (
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  )}
                  {submitted && isSelected && !isRightOption && (
                    <XCircle className="h-5 w-5 text-rose-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Result & Trick Explanation Banner */}
          {submitted && (
            <div
              className={`rounded-2xl border-2 p-4 space-y-2 ${
                isCorrect
                  ? "border-emerald-400 bg-emerald-50 text-emerald-950"
                  : "border-amber-300 bg-amber-50 text-amber-950"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm sm:text-base font-black flex items-center gap-1.5">
                  {isCorrect ? (
                    <>
                      <Trophy className="h-5 w-5 text-amber-500" />
                      <span>
                        {earnedCreditsThisShot > 0
                          ? `BULLSEYE! +${earnedCreditsThisShot} 🪙 Vidya Credits Added!`
                          : "Spot On! You Cracked the Trick! 🎉"}
                      </span>
                    </>
                  ) : (
                    <>
                      <span>😄 Arre! Trick Mein Phas Gaye!</span>
                    </>
                  )}
                </p>

                {earnedCreditsThisShot > 0 && (
                  <span className="rounded-full bg-emerald-600 px-3 py-0.5 text-xs font-black text-white">
                    +15 🪙 &amp; +25 GP
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                <strong>💡 Secret Behind the Trick:</strong>{" "}
                {isHinglish
                  ? currentQ.trickExplanationHi
                  : currentQ.trickExplanationEn}
              </p>
            </div>
          )}

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
            {!submitted ? (
              <button
                type="button"
                disabled={selectedOption === null}
                onClick={handleLockAnswer}
                className="w-full btn-3d-amber py-3.5 text-sm font-black flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                <Sparkles className="h-4 w-4" />
                <span>
                  {isPracticeMode
                    ? "Lock Answer & Reveal Trick"
                    : "Take My Daily Golden Shot (Win +15 🪙 Credits!)"}
                </span>
              </button>
            ) : (
              <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full">
                <button
                  type="button"
                  onClick={handleTryPracticeQuestion}
                  className="w-full sm:w-auto flex-1 rounded-2xl border-2 border-indigo-200 bg-indigo-50 hover:bg-indigo-100 py-3 px-4 text-xs font-extrabold text-indigo-900 flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Try Another Trick Question (Practice)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowDailyTrickModal(false)}
                  className="w-full sm:w-auto btn-3d-emerald py-3 px-6 text-xs font-black cursor-pointer"
                >
                  Continue Learning →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
