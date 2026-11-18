# Chapter: Moments, Centre of Gravity and Circular Motion (Part 6)

> **Class:** 10 | **Subject:** Physics
> **Ye file [moments-and-circular-motion-part5.md](moments-and-circular-motion-part5.md) se aage chalti hai** (wahan circular motion, a = v²/r aur centripetal force F_c = mv²/r, jo real forces ka net andar ki taraf hota hai). Chapter ki shuruaat: [moments-and-circular-motion.md](moments-and-circular-motion.md). Recall ke liye: principle of moments [machines-part3.md](../../../class9/physics/machines/machines-part3.md), circular motion aur v = 2πr/T [motion-part7.md](../../../class9/physics/motion/motion-part7.md), work W = F × s [work-energy-and-power.md](../../../class9/physics/work-energy-and-power/work-energy-and-power.md), aur Chapter 1 ka satellite [gravitation-and-space-missions-part4.md](../gravitation-and-space-missions/gravitation-and-space-missions-part4.md).
> **Topics covered in this file:**
> 6. Sab Kuch Mila Kar: Practice Aur Chapter Ka Saar

---

# Topic 6: Sab Kuch Mila Kar: Practice Aur Chapter Ka Saar

Pichhle paanch topics mein humne paanch alag auzaar banaye: **couple** (Topic 1), **equilibrium** (Topic 2), **centre of gravity** (Topic 3), **stability** (Topic 4) aur **centripetal force** (Topic 5). Asli zindagi mein sawaal par label nahi likha hota ki "ye Topic 3 ka hai". Crane, signboard aur mod par ghoomti gaadi mein kai auzaar **ek saath** lagte hain. Aaj hum teeno kaam karenge: auzaar chunna seekhenge, unhe jod kar problems solve karenge, aur aakhri kuch galtiyon ko pakadkar chapter band karenge.

---

## Physics Fun Fair ka buzzer round

Mr. Pusalkar ke school mein saal ka **Physics Fun Fair** tha. Unki bhatiji Sharayu pehli baar stall sambhalne aayi thi. Ek stall par "crane ko balance karo" tha, doosre par "block ko girne tak jhukao", teesre par "gend ko rassi par ghumao". Sab mazedaar tha, par asli dhamaka tha aakhri **buzzer round**: quiz-master ek line ka sawaal bolte, aur jisne pehle buzzer dabaya wo jawab deta.

"Ek lambi crane ka arm, ek taraf bhaari weight, doosri taraf load. Kya badhaayein ki arm na jhuke?" Sharayu ne haath badhaya, phir roki: kya ye moments ka sawaal hai ya CG ka? Doosre team ne buzzer daba diya. Agle sawaal mein ek truck mod par ulatne wala tha: ye stability hai ya circular motion? Phir buzzer gaya.

Ghar jaate waqt Sharayu udaas thi. "Chacha, mujhe saari cheezein aati hain, par buzzer par dimaag ye nahi pakad pata ki **kaunsa idea kab lagana hai**."

Mr. Pusalkar muskuraaye. "Ye to sabka hota hai, Sharayu. Auzaar to tumhare paas paanch hain. Bas ek chhoti si checklist bana lo: teen sawaal. Chalo, aaj wo checklist banate hain, aur phir kuch asli mixed problems."

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Jib** | Crane ka lamba, aage nikla hua arm jis par load latakta hai | Tower crane ka arm |
| **Counterweight** | Jib ke doosre sire par rakha bhaari weight jo load ka moment balance karta hai | Crane ke peeche ka bhaari block |
| **Track width (t)** | Gaadi ke baayein aur dayein pahiyon ke beech ki doori | Truck ki chaudai, pahiye se pahiye tak |
| **Overturn (ulatna)** | Gaadi ka ek taraf ke pahiyon par ulat jaana (topple) | Tez mod par lamba, ooncha truck |
| **Slide (phisalna)** | Gaadi ka sadak par side mein phisal jaana jab friction kam pad jaye | Geeli sadak par mod |
| **Perpendicular doori** | Pivot se force ki line par seedhi (90° ki) doori | Spanner ki lambai nahi, force ki line tak ki doori |
| **Work (W)** | W = F × s, jahan s force ki disha mein hilne ki doori; unit joule | Cheez uthana |

---

## Part A: Kaunsa idea kab? (checklist)

Pehle paanch ideas ek hi table mein:

| Sawaal mein clue | Idea | Mukhya baat | Topic |
|---|---|---|---|
| Do barabar ulte parallel force, ek line mein nahi | Couple | M = F × d, net force 0, sirf ghumata hai | 1 |
| "Na ghoome na khisake", supports ke reactions | Equilibrium | Net force = 0 aur net moment = 0, kisi bhi point ke around | 2 |
| "Weight kahan lagta hai", cut-out, rod par kai load | Centre of gravity | Poora weight ek point par; x = (m₁x₁ + m₂x₂) ÷ (m₁ + m₂) | 3 |
| "Girega ya tikega", tilt, tall ya wide | Stability | CG se seedhi line base ke andar; tan θ = (aadha base) ÷ (CG ki oonchai) | 4 |
| Cheez circle mein, mod, ghoomta pahiya, rassi par gend | Centripetal force | F_c = mv²/r = mω²r, real forces ka net, andar ki taraf | 5 |

Ab teen sawaalon ki checklist, jo Mr. Pusalkar ne Sharayu ko di:

1. **Kya kuch ghoom sakta hai, ya ghumane ka khatra hai?** To **moments** lo (Topic 1 aur 2): pivot chuno, perpendicular doori lo.
2. **Kya weight ka asar ek jagah dikhana hai ya girne ka sawaal hai?** To **CG** aur **stability** (Topic 3 aur 4).
3. **Kya cheez circle mein chal rahi hai?** To **F_c = mv²/r**, aur pehle pehchano ki wo force kaun de raha hai (Topic 5).

Aksar ek sawaal mein **do ya teen** tick lagte hain. Neeche ke examples mein wahi hota hai.

---

## Part B: Mixed problems

**Is topic mein g = 9.8 m/s² aur π = 3.14 liya gaya hai.**

### Example 1. Crane ka jib: equilibrium aur weight beech mein (Topic 2 + 3)

Ek tower crane ka seedha, uniform jib 20 m lamba hai aur uska mass 600 kg hai. Wo tower par ek pivot par tika hai jo bayein (counter) sire se 4 m door hai. Bayein sire par counterweight M hai, aur dayein sire par 1500 kg ka load latka hai. Jib balance mein hai. Counterweight ka mass M aur tower ka reaction?

```
   ═════════════════════════════════════════
   ↓       ▲           ↓                   ↓
   M kg    pivot       600 kg              1500 kg
   :< 4 m >:
           :<── 6 m ──>:
           :<─────────── 16 m ────────────>:
```

> **Figure 6.1** – Jib ka pivot bayein sire se 4 m par hai. Jib ka apna weight (600 kg) uske **beech** (bayein sire se 10 m, yani pivot se 6 m dayein) lagta hai; load pivot se 16 m door hai. Figure scale ke hisaab se nahi, sirf doori ke labels sahi hain.

**Given:** jib 20 m, 600 kg, beech pivot se 6 m dayein; load 1500 kg pivot se 16 m dayein; counterweight pivot se 4 m bayein
**Find:** M aur reaction R
**Formula:** pivot ke around clockwise moments = anticlockwise moments; R = kul weight
**Substitution:** Har term mein g aata hai, to wo kat jaata hai aur mass ke saath hi likh sakte hain.
- M × 4 = 1500 × 16 + 600 × 6 = 24000 + 3600 = 27600, to M = 27600 ÷ 4 = **6900 kg**
- R = (6900 + 600 + 1500) kg × 9.8 m/s² = 9000 × 9.8 = **88200 N**

**Answer:** Counterweight 6900 kg; tower ka reaction 88200 N upar ki taraf.
**Jaanch:** Bayein sire ko pivot lo to R ke saath: R × 4 = 88200 × 4 = 352800 N m, aur dayein: load 14700 × 20 + jib 5880 × 10 = 294000 + 58800 = 352800 N m ✅ (bayein sire se naapkar). Counterweight ki arm (4 m) load ki arm (16 m) se 4 guna chhoti hai, isliye wo bhaari hai.

### Example 2. Latka hua signboard: CG se tension (Topic 2 + 3)

1.6 m lambi uniform signboard (12 kg) ko dono sire par ek-ek seedhi zanjeer se latkaya gaya hai. Bayein sire se 0.4 m par 5 kg ka lamp-box chipka hai. (a) Board aur box ka milkar **CG** kahan hai? (b) Dono zanjeeron ka tension?

```
   ↑ T_L                                   ↑ T_R
   ═════════════════════════════════════════
             ↓         ↓
   49 N (box 5 kg)     117.6 N (board 12 kg)
   :< 0.4 m >:
   :<─────────────── 1.6 m ───────────────>:
```

> **Figure 6.2** – Board ke dono sire par zanjeer ke tension T_L aur T_R upar ki taraf. Neeche box ka 49 N (bayein sire se 0.4 m) aur board ka 117.6 N (beech mein, 0.8 m par).

**Given:** board 12 kg (0.8 m par), box 5 kg (0.4 m par), length 1.6 m
**Find:** CG ka x (bayein sire se), T_L aur T_R
**Formula:** x = (m₁x₁ + m₂x₂) ÷ (m₁ + m₂); T_R × 1.6 = (moments of weights, bayein sire ke around)
**Substitution:**
- (a) x = (12 × 0.8 + 5 × 0.4) ÷ 17 = (9.6 + 2.0) ÷ 17 = 11.6 ÷ 17 = **0.682 m** lagbhag
- (b) Total weight = 17 × 9.8 = 166.6 N. T_R × 1.6 = 117.6 × 0.8 + 49 × 0.4 = 94.08 + 19.6 = 113.68, to T_R = **71.05 N**. T_L = 166.6 − 71.05 = **95.55 N**

**Answer:** CG bayein sire se lagbhag 0.682 m par; T_L = 95.55 N, T_R = 71.05 N.
**Jaanch:** Jaise ek hi weight 166.6 N CG par latka ho, to tension doori ke ulte ratio mein baantte hain: T_L ÷ T_R = (1.6 − 0.682) ÷ 0.682 = 0.918 ÷ 0.682 = 1.345, aur 95.55 ÷ 71.05 = 1.345 ✅. CG bayein taraf jhuka hai, to bayein zanjeer zyaada khinchti hai ✅.

### Example 3. Beam par do load aur ek couple (Topic 1 + 2)

3.0 m lambi halki beam (ise **halka maano**) A aur B par do supports par tiki hai. A se 1.0 m par 600 N aur 2.5 m par 300 N ke load latke hain. Beam ke ek wheel par ek hand-motor **150 N m ka clockwise couple** lagata hai. R_A aur R_B?

```
                       600 N                         300 N
                       ↓                             ↓
   ═════════════════════════════════════════════════════════════
   ▲                                                           ▲
   A                     ↻ couple 150 N m (clockwise)          B
   :<───── 1.0 m ─────>:<────────── 1.5 m ──────────>:< 0.5 m >:
   :<───────────────────────── 3.0 m ─────────────────────────>:
```

> **Figure 6.3** – Beam AB par do load aur supports ke reactions R_A, R_B (upar). Couple ka 150 N m clockwise moment alag se gina jayega: couple ek force nahi, sirf moment hai.

**Given:** loads 600 N (1.0 m par), 300 N (2.5 m par), AB = 3.0 m, couple = 150 N m clockwise, beam halki
**Find:** R_A, R_B
**Formula:** net force = 0; moments A ke around: couple ka moment kisi bhi point ke around wahi rehta hai (Topic 1)
**Substitution:**
- A ke around, anticlockwise: R_B × 3.0. Clockwise: 600 × 1.0 + 300 × 2.5 + 150 = 600 + 750 + 150 = 1500
- R_B = 1500 ÷ 3.0 = **500 N**, R_A = (600 + 300) − 500 = **400 N**

**Answer:** R_A = 400 N, R_B = 500 N.
**Jaanch:** B ke around: R_A × 3.0 = 1200 (clockwise) plus couple 150 (clockwise) = 1350, aur loads 600 × 2.0 + 300 × 0.5 = 1350 (anticlockwise) ✅. Couple ne force ka jod nahi badla (R_A + R_B = 900 N = loads), par reactions ko badal diya ✅.

### Example 4. Kata hua board: CG aur stability (Topic 3 + 4)

Ek uniform board khada hai: base 0.36 m aur oonchai 1.08 m. (a) Wo kis angle par jhukane se girega? (b) Uske upar se 0.36 m kaat do (oonchai 0.72 m). Naya angle?

```
 Pehle                                Upar se kata
 +--------+                           
 [        ]
 [        ]                           +--------+
 [   ×    ]  CG: 0.54 m                [        ]
 [        ]                           [   ×    ]  CG: 0.36 m
 [        ]                           [        ]
 +--------+                           +--------+
 <─ 0.36 m ─>                         <─ 0.36 m ─>
```

> **Figure 6.4** – Dono boards ka base 0.36 m. Upar se kaatne par CG ki oonchai 0.54 m se ghat kar 0.36 m rah jaati hai (figure scale ke hisaab se nahi).

**Given:** base 0.36 m, height 1.08 m; kaatne ke baad height 0.72 m
**Find:** tilting angle θ pehle aur baad mein
**Formula:** tan θ = (aadha base) ÷ (CG ki oonchai = aadhi height) (Topic 4)
**Substitution:**
- Pehle: tan θ = 0.18 ÷ 0.54 = 0.3333, to θ = **18.4°** lagbhag
- Baad mein: tan θ = 0.18 ÷ 0.36 = 0.5, to θ = **26.6°** lagbhag

**Answer:** 18.4° se badhkar 26.6°: kata hua board zyaada jhukne par bhi tikega.
**Jaanch:** Base wahi, CG neeche, to angle bada hona chahiye ✅. Weight kam hua par is angle ka weight se koi sambandh nahi: formula mein sirf base aur CG ki oonchai hain ✅.

### Example 5. Mod par truck: ulatega ya phisalega? (Topic 4 + 5)

Ek truck (m = 2500 kg) r = 50 m ke flat mod par ghoomta hai. Uska CG sadak se h = 1.5 m oopar hai, track width t = 1.8 m. Sadak adhiktam **19600 N** ki friction de sakti hai (sawaal mein diya hua). (a) 16 m/s aur 18 m/s par zaroori F_c? (b) Pehle kya hoga: phisalna ya ulatna? (c) Agar load neeche rakha jaye aur CG h = 1.0 m ho jaye?

```
   kendra (andar) ←                           bahar →
            +---------------------------+
            [                           ]
        ┬   [            × CG           ]
        │ h [            ↓ mg           ]
        │   [                           ]
            +-(O)------------------(O)--+
   =====┴=======================================
          ← f (friction, tyres par, andar ki taraf)
               :<─────── t ────────>:
```

> **Figure 6.5** – Truck ko peeche se dekha. Sadak ki friction f andar (mod ke kendra ki taraf) tyres par lagti hai aur wahi F_c deti hai. Wo CG se **neeche** lagti hai, isliye truck ko bahar ke pahiye par ghumane ka moment milta hai; weight mg is jhukaav ko rokta hai.

**Honest line:** ground se dekhne par moments CG ke around lete hain, aur poora hisaab Class 11 mein aayega. Yahan wahi saral kasauti: bahar ka pahiya girne ki seema par hai jab f × h = mg × (t ÷ 2) (Topic 4 jaisa CG aur base wala tarika). Isse ulatne ke liye zaroori force F_o = mg × t ÷ (2h) milta hai.

**Given:** m = 2500 kg, r = 50 m, h = 1.5 m, t = 1.8 m, friction max 19600 N, W = mg = 2500 × 9.8 = 24500 N
**Find:** F_c, F_o, aur kaun pehle
**Formula:** F_c = mv²/r; F_o = W × t ÷ (2h)
**Substitution:**
- 16 m/s par F_c = 2500 × 16² ÷ 50 = 2500 × 256 ÷ 50 = **12800 N**; 18 m/s par F_c = 2500 × 324 ÷ 50 = **16200 N**
- F_o = 24500 × 1.8 ÷ (2 × 1.5) = 44100 ÷ 3.0 = **14700 N**
- 16 m/s: 12800 < 14700 aur 12800 < 19600: surakshit. 18 m/s: 16200 > 14700 (ulatne ki seema paar) par 16200 < 19600 (phisalna abhi shuru nahi): **truck pehle ulatega**.
- Seema ki raftaar: ulatna v = √(F_o r ÷ m) = √(14700 × 50 ÷ 2500) = √294 = **17.1 m/s** lagbhag; phisalna v = √(19600 × 50 ÷ 2500) = √392 = 19.8 m/s lagbhag.
- (c) h = 1.0 m: F_o = 24500 × 1.8 ÷ 2.0 = **22050 N**, jo 19600 N se bada hai, to ab **phisalna pehle** (19.8 m/s par) hoga, ulatna nahi.

**Answer:** Ooncha-load truck 17.1 m/s ke paas ulat jaayega; load neeche karne par wo ulatne se pehle phisalega.
**Jaanch:** F_o ÷ W = (t ÷ 2) ÷ h = 0.9 ÷ 1.5 = 0.6 = tan θ of Topic 4 ka wahi ratio ✅. Ooncha CG = chhota F_o ✅ (14700 < 22050). Friction ka max 19600 N dono cases mein wahi tha ✅. Units: kg × (m/s)² ÷ m = N ✅.

### Example 6. Flywheel ka dheela bolt: circular motion aur work (Topic 5 + Class 9)

Ek flywheel ka radius 0.40 m hai aur wo 210 rpm par ghoomta hai. Uske rim par 0.05 kg ka bolt laga hai. (a) F_c, aur weight se tulna. (b) Bolt dheela hoke chhoot jaye to kis raftaar se, kis disha mein? (c) Ek chakkar mein F_c ne kitna work kiya?

**Given:** r = 0.40 m, 210 rpm, m = 0.05 kg
**Find:** F_c, bolt ki raftaar, W
**Formula:** f = rpm ÷ 60; ω = 2πf; v = rω; F_c = mω²r
**Substitution:**
- f = 210 ÷ 60 = 3.5 Hz; ω = 2 × 3.14 × 3.5 = 21.98 rad/s
- v = 0.40 × 21.98 = **8.79 m/s** lagbhag
- F_c = 0.05 × (21.98)² × 0.40 = 0.05 × 483.1 × 0.40 = **9.66 N** lagbhag; weight = 0.05 × 9.8 = 0.49 N, to F_c lagbhag **19.7 guna** weight
- (b) Bolt **tangent** ki disha mein 8.79 m/s par udega (Topic 5: rim se seedha bahar nahi).
- (c) F_c hamesha velocity ke **perpendicular** (andar ki taraf) hai, to uski disha mein displacement zero: **W = 0 J**. Bolt ki raftaar bhi nahi badli.

**Answer:** F_c = 9.66 N, raftaar 8.79 m/s tangent par, work 0 J.
**Jaanch:** F_c = mv²/r = 0.05 × 8.79² ÷ 0.40 = 0.05 × 77.3 ÷ 0.40 = 9.66 N ✅. Dugni raftaar (420 rpm) par F_c chaar guna: 38.6 N ✅.

---

## Safe activity: "Konsa idea?" card game (school mein teacher ke saath ya ghar par adult ke saath)

Paanch cards banao: Couple, Equilibrium, CG, Stability, Centripetal. Dosto se 10 situations likhwao (jaise "ghoomta pahiya", "latka board", "khula nal ka tap") aur har situation par card dikhao. Dhyan rakho ki kai situations ke do cards bante hain. Koi hazard nahi, sirf sochna hai.

---

## Aam galtiyan (bachke rehna)

**Galti 1: "Force × distance hamesha work hota hai"**

Demonstration: Ek **locked** darwaze par hinge se 0.60 m par 40 N ka dhakka lagao. F × d = 40 × 0.60 = **24 N m**, ye moment hai: ghumane ka asar, aur unit N m. Darwaza hila hi nahi, to s = 0 aur work W = F × s = **0 J**. Flywheel wale Example 6 mein bhi F_c × (ek chakkar = 2πr = 2.51 m) = 9.66 × 2.51 = 24.3 "N m" aaye to usse work mat samjho: F_c ka displacement uski disha mein zero hai, work 0 J. **Sahi:** work mein s force ki disha mein hilne ki doori hai; moment mein d force ki line tak ki perpendicular doori hai. Dono N m dikhte hain par alag cheezein.

**Galti 2: "d = pivot se force lagne wale point tak ki doori"**

Demonstration: Chhad OP, OP = 0.50 m. P par 35 N ka tirchha force, jiski line O se **0.30 m** door hai (3-4-5 triangle: ON = 0.30 m, NP = 0.40 m).

```
                                            ↗ F
                                              *
                                           ***
                                         **
    O (pivot)                        P***
      O════════════════════════════***
       ..   OP = 0.50 m         ***
         .                    **
          ..              F ki line (aage-peeche badhayi)
      d = ON = 0.30 m   ***
              .       **
               ..  ***
                 .N
```

> **Figure 6.6** – Chhad OP par P se force F tirchha. Pivot O se F ki line (dotted aage badhayi) par seedhi ON daali: ye perpendicular doori d = 0.30 m hai. OP = 0.50 m ko arm mat lena (figure scale ke hisaab se nahi).

Galat: M = 35 × 0.50 = 17.5 N m. Sahi: M = 35 × 0.30 = **10.5 N m**. Jaanch alag tarah se: F ka perpendicular hissa 0.6 × 35 = 21 N, 0.50 m par: 21 × 0.50 = 10.5 N m ✅.

**Galti 3: "Force jitna bada, moment utna bada, chahe line kahin se jaye"**

Demonstration: Figure 6.6 mein F ka chhad ke saath wala hissa 0.8 × 35 = 28 N hai. Ye hissa seedha **pivot O se guzarta hai** (arm = 0), to uska moment 28 × 0 = **0 N m**. Sirf perpendicular hissa (21 N) ghumata hai. **Ghar par adult ke saath activity:** ek ruler mez par rakho, ek sire par ungli rakhkar use pivot banao. Doosre sire ko ruler ki **lambai ke saath** dhakelo: ruler nahi ghoomti. Ab side se dhakelo: ghoomti hai. **Sahi:** jis force ki line pivot se guzre, uska moment zero.

**Galti 4: "Satellite par gravity aur centripetal force do alag force hain"**

Demonstration: 250 kg ka ek satellite aise orbit mein hai jahan gravity har kilo ko 5.0 m/s² deti hai aur r = 9.0 × 10⁶ m. Gravity ka force = 250 × 5.0 = **1250 N**. Agar ye bhi F_c ke saath alag force hota to total 2500 N ho jata aur satellite andar gir jata. Asal mein v = √(g_h r) = √(5.0 × 9.0 × 10⁶) = √(4.5 × 10⁷) = 6708 m/s par F_c = mv²/r = 250 × 4.5 × 10⁷ ÷ (9.0 × 10⁶) = **1250 N**: wahi 1250 N.

```
        Earth ka kendra
              ●
              ↑  1250 N (sirf gravity)
              ┆
              ○  satellite (250 kg)
```

> **Figure 6.7** – Satellite par **ek hi force** hai: gravity, Earth ke kendra ki taraf. Wahi centripetal force hai; koi doosra teer nahi.

**Sahi:** Chapter 1 mein dekha tha ki gravity hi centripetal force hai. Free-body diagram mein centripetal ka alag teer mat banao (Topic 5 wali baat).

---

## Quick Recap

- **Checklist:** ghumana (moments), weight ka asar aur girna (CG, stability), circle (F_c).
- **Couple** sirf ghumata hai; uska moment F × d, pivot par nirbhar nahi (Example 3).
- **Equilibrium:** net force 0 aur net moment 0; pivot wo chuno jo unknown hata de.
- **CG** wo ek point jahan poora weight lagta hai; do pieces ka x = (m₁x₁ + m₂x₂) ÷ (m₁ + m₂).
- **Stability:** neeche CG, chauda base; tan θ = (aadha base) ÷ (CG ki oonchai).
- **F_c = mv²/r = mω²r**, real forces ka net, andar ki taraf; chhutne par cheez tangent par udti hai.
- Mod par ooncha CG wali gaadi **ulat sakti** hai; neeche CG wali pehle **phisalti** hai.
- **Moment ≠ work** (Galti 1). **d perpendicular** hai (Galti 2). **Pivot se guzarti line ka moment zero** (Galti 3). **Satellite par gravity hi F_c hai** (Galti 4).

---

## Practice Questions

1. A crane's jib is a uniform arm 15 m long with a mass of 420 kg. It is pivoted 3 m from its left end. A counterweight of 2400 kg hangs at the left end. What load must hang at the right end to keep the jib horizontal? Find the reaction of the pivot in newtons.

2. A uniform signboard 1.8 m long and 9 kg in mass hangs from two vertical chains fixed at its two ends. A 4 kg lamp is fixed 0.3 m from the left end. Find the centre of gravity of board and lamp together (from the left end) and the tension in each chain.

3. A light plank 2.4 m long rests on supports A and B at its ends. A load of 300 N hangs 0.8 m from A. A couple of 60 N m acts anticlockwise on the plank. Find the reactions at A and B.

4. A uniform wooden cabinet has a base 0.50 m wide and is 1.20 m tall. Find the angle through which it can be tilted before toppling. What is this angle if the top 0.40 m is cut off?

5. A jeep (mass 1800 kg) has its centre of gravity 0.9 m above the road and a track width of 1.4 m. It takes a flat curve of radius 45 m. The road can give a maximum friction of 12600 N. Find the force needed to overturn the jeep and say whether it will overturn or slide first as the speed rises. Find the speed at which it slides.

6. A flywheel of radius 0.30 m rotates at 450 rpm. A loose bolt of mass 0.08 kg sits at its rim. Find the speed of the bolt, the centripetal force on it, and the force if the speed doubles.

7. A motorcycle with its rider has a total mass of 240 kg. It takes a curve of radius 30 m at 15 m/s. Find the centripetal force. Which force supplies it? If the maximum friction available is 2160 N, will it skid at 18 m/s?

8. In a revolving door each wing is 1.25 m long. Two people push opposite wings at their ends with 14 N each, in opposite directions, and the axle friction resists with a moment of 28 N m. (a) Find the moment of the couple and say whether the door turns. (b) A 55 kg person at 1.0 m from the axle turns with the door once every 12 s. Find the centripetal force on the person. Use π = 3.14.

9. Name the main idea (couple, equilibrium, centre of gravity, stability or centripetal force) for each situation: (a) a tall bookshelf tilting on a ramp, (b) a cream separator, (c) a plank on two bricks with a child standing on it, (d) a bottle cap turned with two fingers, (e) the position of a hammer's balance point, (f) a ball whirled on a string.

10. A rod OP is 0.80 m long and pivoted at O. A force of 45 N acts at P so that the perpendicular distance from O to the line of the force is 0.48 m (so the part of the force at right angles to the rod is 0.6 of the force). Find its moment. Also find the moment of the part of the force along the rod.

11. (a) A student pushes a locked door with 120 N at 0.75 m from the hinge. Find the moment and the work done. (b) A stone on a string of 0.9 m moves in a horizontal circle at constant speed with a tension of 15 N. Find the work done by the tension in one full round. Explain both.

12. A satellite of mass 300 kg moves in a circle of radius 1.0 × 10⁷ m where gravity gives each kilogram an acceleration of 4.0 m/s². Find the force of gravity on it and its orbital speed. How many forces act on the satellite?

13. State True or False: (a) A pendulum bob moves with one constant speed at all points of its swing, so mv²/r has the same value everywhere. (b) A heavier truck always overturns first. (c) A couple adds a moment but no net force to the equilibrium equations. (d) Moment and work are different quantities even though both can be written in N m. (e) A force whose line passes through the pivot has zero moment.

### Answers

1. Pivot ke around, masses mein (g kat jaata hai): jib ka beech left se 7.5 m, to pivot se 4.5 m dayein. Counterweight pivot se 3 m bayein, load pivot se 12 m dayein. 2400 × 3 = 420 × 4.5 + L × 12, to 7200 = 1890 + 12 L, L = 5310 ÷ 12 = **442.5 kg**. R = (2400 + 420 + 442.5) × 9.8 = 3262.5 × 9.8 = **31972.5 N**.
   Jaanch: 2400 × 3 = 7200, 1890 + 442.5 × 12 = 1890 + 5310 = 7200 ✅.

2. Board weight 88.2 N (0.9 m par), lamp 39.2 N (0.3 m par). CG x = (9 × 0.9 + 4 × 0.3) ÷ 13 = (8.1 + 1.2) ÷ 13 = 9.3 ÷ 13 = **0.715 m** lagbhag. T_R × 1.8 = 88.2 × 0.9 + 39.2 × 0.3 = 79.38 + 11.76 = 91.14, to T_R = **50.63 N**. T_L = 127.4 − 50.63 = **76.77 N**.
   Jaanch: T_L ÷ T_R = (1.8 − 0.715) ÷ 0.715 = 1.517 aur 76.77 ÷ 50.63 = 1.516 ✅.

3. A ke around: anticlockwise R_B × 2.4 + couple 60 = clockwise 300 × 0.8 = 240, to R_B = 180 ÷ 2.4 = **75 N**. R_A = 300 − 75 = **225 N**.
   Jaanch: B ke around: R_A × 2.4 = 540 (clockwise) aur load 300 × 1.6 = 480 plus couple 60 (anticlockwise) = 540 ✅.

4. tan θ = 0.25 ÷ 0.60 = 0.4167, to θ = **22.6°** lagbhag. Kaatne ke baad height 0.80 m, CG 0.40 m: tan θ = 0.25 ÷ 0.40 = 0.625, θ = **32.0°** lagbhag.
   Jaanch: CG neeche aaya, angle bada hua ✅.

5. W = 1800 × 9.8 = 17640 N. F_o = 17640 × 1.4 ÷ (2 × 0.9) = 24696 ÷ 1.8 = **13720 N**. Phisalne ki seema 12600 N < 13720 N, to jeep **pehle phisalegi**. v = √(12600 × 45 ÷ 1800) = √315 = **17.7 m/s** lagbhag.
   Jaanch: mv²/r = 1800 × 315 ÷ 45 = 12600 N ✅. Ulatne ki raftaar √(13720 × 45 ÷ 1800) = 18.5 m/s, jo 17.7 se zyaada hai ✅.

6. f = 450 ÷ 60 = 7.5 Hz, ω = 2 × 3.14 × 7.5 = 47.1 rad/s. v = 0.30 × 47.1 = **14.13 m/s**. F_c = 0.08 × 47.1² × 0.30 = 0.08 × 2218.4 × 0.30 = **53.2 N** lagbhag. Raftaar double (900 rpm): F_c chaar guna = **213 N** lagbhag.
   Jaanch: 0.08 × 14.13² ÷ 0.30 = 0.08 × 199.7 ÷ 0.30 = 53.2 N ✅.

7. F_c = 240 × 15² ÷ 30 = 240 × 225 ÷ 30 = **1800 N**, jo sadak aur tyre ki **friction** deti hai. 18 m/s par F_c = 240 × 324 ÷ 30 = **2592 N**, jo 2160 N se zyaada hai, to **skid** karegi.
   Jaanch: 1800 ÷ 240 = 7.5 m/s² aur 15² ÷ 30 = 7.5 ✅.

8. (a) d = 1.25 + 1.25 = 2.5 m. M = 14 × 2.5 = **35 N m** > 28 N m, to **door ghoomega**; bacha 7 N m. (b) ω = 2 × 3.14 ÷ 12 = 0.523 rad/s, v = 0.523 m/s. F_c = 55 × 0.523² ÷ 1.0 = 55 × 0.2739 = **15.1 N** lagbhag.
   Jaanch: 35 − 28 = 7 ✅; mω²r = 55 × 0.2739 × 1.0 = 15.1 ✅.

9. (a) **Stability** (CG ki oonchai aur base). (b) **Centripetal force** (spin). (c) **Equilibrium** (reactions) aur CG ka weight. (d) **Couple**. (e) **Centre of gravity**. (f) **Centripetal force** (tension F_c deta hai).
   Jaanch: kai sawaal do ideas jodte hain, jaise (c) ✅.

10. M = 45 × 0.48 = **21.6 N m**. Chhad ke saath hissa 0.8 × 45 = 36 N pivot se guzarta hai, arm 0, to **0 N m**. Perpendicular hissa 0.6 × 45 = 27 N, 27 × 0.80 = 21.6 N m ✅.
    Jaanch: 0.80 × 27 = 21.6 aur 45 × 0.48 = 21.6 ✅.

11. (a) M = 120 × 0.75 = **90 N m**. Darwaza nahi hila, s = 0, **W = 0 J**. (b) Tension hamesha motion ke perpendicular, to **W = 0 J**; stone ki raftaar constant rahi. Dono mein "force × doori" N m dikha par work nahi hua.
    Jaanch: 15 × (2π × 0.9 = 5.65 m) = 84.8 N m bhi work nahi, kyunki s force ki disha mein zero ✅.

12. Gravity = 300 × 4.0 = **1200 N**. v = √(4.0 × 1.0 × 10⁷) = √(4 × 10⁷) = **6325 m/s** lagbhag (6.3 km/s). Satellite par **ek hi force** (gravity) lagta hai, jo F_c ka kaam karta hai.
    Jaanch: mv²/r = 300 × 4 × 10⁷ ÷ 1.0 × 10⁷ = 1200 N ✅.

13. (a) **False** ❌. Pendulum bob ki raftaar badalti hai, to ek hi v wala formula har point par nahi chalta (aage ki class). (b) **False** ❌. Mass F_o aur F_c dono mein barabar kat jaata hai; CG ki oonchai aur t matter karte hain. (c) **True** ✅. (d) **True** ✅: moment ghumane ka asar, work energy; dono N m. (e) **True** ✅: arm zero.

---

Ab jab bhi koi sawaal dikhe, Sharayu ki tarah teen sawaal poochna: ghoom raha hai? girega? circle mein hai? Ye checklist tumhe buzzer round jitwa sakti hai. Tum ye kar sakte ho!

---

## Chapter ka saar: Moments, Centre of Gravity aur Circular Motion

| Topic | Kya seekha | Ek line |
|---|---|---|
| 1. Couple | Do barabar, ulte, parallel force jo ek line mein nahi | Moment = F × d (N m), net force 0, sirf ghumata hai |
| 2. Equilibrium | Na khisake na ghoome | Net force = 0 aur net moment = 0, reactions doori ke ulte ratio mein |
| 3. Centre of gravity | Poora weight ek point par | Plumb line se CG; x = (m₁x₁ + m₂x₂) ÷ (m₁ + m₂); CG bahar bhi ho sakta hai |
| 4. Stability | Kab girega, kab tikega | Neeche CG, chauda base; tan θ = (aadha base) ÷ (CG ki oonchai) |
| 5. Circular motion | Andar ki taraf force ke bina circle nahi | a = v²/r, F_c = mv²/r = mω²r, real forces ka net; chhootne par tangent par udta hai |
| 6. Sab kuch mila kar | Auzaar chunna aur jodna | Checklist: ghoomna, girna, circle; moment aur work alag |

Pehle ek chhad se shuru kiya tha, aur ab crane, truck aur satellite tak pahunch gaye. Tum shabaash ke haqdaar ho.

**Aage kya?** Class 10 Physics Chapter 3 "Sources of Energy" mein dekhenge ki aapke ghar aur phone ki saari energy asal mein kahan se aati hai, aur coal khatam ho gaya to kya hoga.
