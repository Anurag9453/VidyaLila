# Chapter: Permutations and Combinations (Part 4)

> **Class:** 11 | **Subject:** Mathematics
> **Ye file [permutations-and-combinations-part3.md](permutations-and-combinations-part3.md) se aage chalti hai** (wahan Topic 3 mein Combinations ⁿCᵣ, Pascal's Identity, committees aur geometry counting the). Chapter ki shuruaat: [permutations-and-combinations.md](permutations-and-combinations.md). Permutations & Factorials: [permutations-and-combinations-part2.md](permutations-and-combinations-part2.md).
> **Topics covered in this file:**
> 4. Sab Kuch Mila Kar: Mixed Problems, Applications, Practice Aur Chapter Ka Saar

---

# Topic 4: Sab Kuch Mila Kar: Mixed Problems, Applications, Practice Aur Chapter Ka Saar

Pichhle teen topics mein tumne counting ke teeno stambh seekh liye: Fundamental Principle of Counting (Topic 1), Permutations & Factorials (Topic 2), aur Combinations (Topic 3). Par asli exam aur Olympiad ke sabse zabardast sawaal **Selection aur Arrangement dono ko ek saath** jodte hain — jaise pehle vowels aur consonants **chuno** (ⁿCᵣ), phir unse words **banao** (r!), ya kisi shabd ka **Dictionary Rank** nikalo, ya **52 tash ke patton** mein se khaas hands gino! Is aakhri topic mein hum ek Decision Map banayenge, 6 mixed challenge problems hal karenge, 3 aakhri galtiyon se bachenge, 12 practice sawaal lagayenge, aur poore chapter ka saar ek table mein dekhenge.

---

## Imran ka Olympiad Counting Command Desk

School ke Annual Olympiad mein Imran **"Counting Command Desk"** sambhaal raha tha. Uske table par 4 classic challenge cards the:
- **Card 1 (Select-then-Arrange):** Shabd **INVOLUTE** se 2 vowels aur 3 consonants chunkar kitne 5-letter words ban sakte hain?
- **Card 2 (Identical Letters Trap):** **MISSISSIPPI** ke kitne arrangements mein chaaron I ek saath **NAHI** aate?
- **Card 3 (52-Card Deck):** 52 patton mein se 5-card hand jisme theek 1 Ace ho!
- **Card 4 (Dictionary Rank):** Agar shabd **MOTHER** ke sabhi permutations ko English dictionary ke alphabetical order mein likha jaaye, to **MOTHER** ka number (rank) kya hoga?

Imran ne board par **Decision Map** banaya aur chaaron cards chutkiyon mein hal kar diye. Chalo, Imran ke saath sabhi 6 mixed problems hal karte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Select-then-Arrange** | Pehle chhote group ko **ⁿCᵣ** se chuno, phir **r!** se arrange karo | INVOLUTE → ⁴C₂ × ⁴C₃ × 5! |
| **Dictionary rank** | Kisi shabd ke sabhi permutations ko alphabetical order mein rakhne par us shabd ki position | MOTHER ka rank = 309 |
| **Standard 52-card deck** | 4 suits (Spade, Heart, Diamond, Club) × 13 ranks (A, 2..10, J, Q, K); 26 red + 26 black | 4 Aces, 12 Face cards (J, Q, K) |

---

## Part A: Kaun Sa Tool Kab? (Decision Map)

| Sawaal ka suraagh | Kaun sa tool lagao? | Pehla kadam | Topic |
|---|---|---|---|
| Digits se number banana, signals, PINs, routes | Slot / Box Method (FPC) | Restricted slot (0 nahi, even, ÷5) sabse pehle bharo! | Topic 1 |
| Line mein baithana, shelf, words (order matters!) | Permutations ⁿPᵣ | Repeats hain? → n!/(p₁! p₂!...); Together → Bundle; Never → Gap | Topic 2 |
| Team, committee, chords, triangles, 52-card hand (order nahi!) | Combinations ⁿCᵣ | "At least/most" → Disjoint cases OR Total − Unwanted | Topic 3 |
| "Chun kar words banao" (select AND arrange!) | ⁿCᵣ × r! | Step 1: ⁿCᵣ se chuno; Step 2: × r! se arrange karo! | Topic 4 |
| Dictionary rank of a word | Alphabetical prefix counting | Shabd se pehle aane wale words gino, phir **+ 1** jodo! | Topic 4 |
| ⁿPᵣ aur ⁿCᵣ dono diye hon | ⁿPᵣ / ⁿCᵣ = r! | Seedha bhaag dekar r! se r nikalo, phir n! | Topic 3 & 4 |

---

## Part B: 6 Mixed Worked Problems

### Example 1: Select-then-Arrange — Shabd INVOLUTE

Shabd **INVOLUTE** (8 alag letters: 4 vowels **I, O, U, E** aur 4 consonants **N, V, L, T**) ke letters se **3 consonants aur 2 vowels** wale kul kitne 5-letter words ban sakte hain?

**Hal:**
1. **Step 1 (Selection):**
   - 4 vowels mein se 2 vowels: **⁴C₂ = 6**
   - 4 consonants mein se 3 consonants: **⁴C₃ = 4**
   Kul selections = 6 × 4 = **24 groups** (har group mein 5 alag letters hain).
2. **Step 2 (Arrangement):**
   Har group ke 5 alag letters ko **5! = 120** tareekon se sajha sakte hain!
Total words = 24 × 120 = **2880 words**.

**Jaanch:** ⁴C₂ × ⁴C₃ × 5! = 6 × 4 × 120 = 2880 ✅.

---

### Example 2: MISSISSIPPI — Chaaron I Ek Saath NA Aayein

Shabd **MISSISSIPPI** (11 letters: **M = 1, I = 4, S = 4, P = 2**) ke kul kitne distinct permutations mein **chaaron I ek saath NAHI** aate?

**Hal:**
1. **Total distinct permutations:**
   11! / (4! × 4! × 2!) = (11 × 10 × 9 × 8 × 7 × 6 × 5) / (24 × 2) = **34,650**.
2. **Jab chaaron I ek saath hon (Bundle Method):**
   Chaaron I ko baandh kar **1 dabba [IIII]** banao!
   Ab kul units = 7 bache letters (M=1, S=4, P=2) + 1 dabba = **8 units**.
   Inhe sajane ke tareeke = **8! / (4! × 2!)** = (8 × 7 × 6 × 5) / 2 = **840**.
   *(Khaas baat: Dabbe ke andar [IIII] ke sabhi I identical hain, isliye unka internal arrangement **4!/4! = 1** hi hai — 4! se multiply MAT karna!)*
3. **Chaaron I ek saath NA hon:**
   Total − Together = 34,650 − 840 = **33,810**.

**Jaanch:** 34650 − 840 = 33810 ✅; 8!/(4!2!) = 40320/48 = 840 ✅.

---

### Example 3: 52-Card Deck — 5-Card Hand With Exactly 1 Ace

Ek standard 52-card deck (4 Aces + 48 non-Aces) mein se **5 cards** chunne ke kitne tareeke hain taaki hand mein **theek 1 Ace** ho?

**Hal:**
- 4 Aces mein se 1 Ace: **⁴C₁ = 4**.
- 48 non-Aces mein se baaki 4 cards: **⁴⁸C₄ = (48 × 47 × 46 × 45) / (4 × 3 × 2 × 1) = 2 × 47 × 46 × 45 = 194,580**.
- Total hands = 4 × 194,580 = **778,320**.

**Jaanch:** 48 × 47 × 46 × 45 ÷ 24 = 2 × 47 × 46 × 45 = 194580; × 4 = 778320 ✅.

---

### Example 4: Dictionary Rank of MOTHER

Shabd **MOTHER** ke sabhi 6! = 720 permutations ko English dictionary ke order mein likha jaaye, to **MOTHER** ka rank kya hoga?

**Hal:**
1. Letters ko **alphabetical order** mein likho: **E, H, M, O, R, T**.
2. Ab ek-ek karke MOTHER se **pehle** aane wale sabhi words gino:
   - **E** se shuru hone wale: 5! = **120**
   - **H** se shuru hone wale: 5! = **120**
   - Ab **M** pakka! Bache letters (alphabetical): E, H, O, R, T.
     - **ME...** : 4! = **24**
     - **MH...** : 4! = **24**
   - Ab **MO** pakka! Bache: E, H, R, T.
     - **MOE...** : 3! = **6**
     - **MOH...** : 3! = **6**
     - **MOR...** : 3! = **6**
   - Ab **MOT** pakka! Bache: E, H, R.
     - **MOTE...** : 2! = **2**
   - Ab **MOTH** pakka! Bache: E, R.
     - **MOTHER** hi sabse pehla banta hai! (**+ 1** for MOTHER itself!)
3. **Total Rank** = 120 + 120 + 24 + 24 + 6 + 6 + 6 + 2 + **1** = **309**!

**Jaanch:** 240 + 48 + 18 + 2 + 1 = **309** ≤ 720 ✅!

---

### Example 5: Restricted Committee ("At Least 3 Women")

**7 men aur 5 women** mein se **5 logon** ki committee banani hai jisme **kam se kam 3 women** hon. Kul kitne tareeke hain?

**Hal:**
3 disjoint cases:
- **3W, 2M:** ⁵C₃ × ⁷C₂ = 10 × 21 = **210**
- **4W, 1M:** ⁵C₄ × ⁷C₁ = 5 × 7 = **35**
- **5W, 0M:** ⁵C₅ × ⁷C₀ = 1 × 1 = **1**
Total = 210 + 35 + 1 = **246 committees**.

**Jaanch:** 210 + 35 + 1 = 246 ✅.

---

### Example 6: ⁿPᵣ aur ⁿCᵣ dono se n aur r Nikaalna

Agar **ⁿPᵣ = 720** aur **ⁿCᵣ = 120**, to **n** aur **r** nikalo.

**Hal:**
1. Relation **ⁿPᵣ = ⁿCᵣ × r!** lagao:
   r! = ⁿPᵣ / ⁿCᵣ = 720 / 120 = **6 = 3!** ⟹ **r = 3**.
2. Ab ⁿP₃ = 720 ⟹ n(n − 1)(n − 2) = 720 = **10 × 9 × 8** ⟹ **n = 10**.

**Jaanch:** ¹⁰P₃ = 10 × 9 × 8 = 720 ✅; ¹⁰C₃ = 720/6 = 120 ✅!

---

## Aam galtiyan (Chapter Synthesis)

1. **"Select and arrange" mein × r! bhool jaana:** Example 1 mein student ⁴C₂ × ⁴C₃ = 24 par hi ruk jaata hai!
   - *Sahi soch:* 24 sirf letter-groups ki ginti hai; unse **words** banane ke liye **× 5!** zaroor karo!
2. **Identical bundle [IIII] ke andar 4! se multiply kar dena:**
   - *Galat kyun:* Chaaron I ek jaise hain — unhe aapas mein badalne se koi naya word nahi banta (4!/4! = 1)!
3. **Dictionary rank mein khud us shabd ka +1 bhool jaana:**
   - *Sahi soch:* Upar ke sabhi counts MOTHER se *pehle* aane wale 308 words hain; MOTHER khud **308 + 1 = 309-vein** sthaan par hai!

---

## Quick Recap

- **FPC:** AND = ×, OR = +; restricted slot pehle bharo.
- **Permutations (order matters):** ⁿPᵣ = n!/(n − r)!; identical: n!/(p₁! p₂!...); Together → Bundle; No two together → Gap.
- **Combinations (order doesn't matter):** ⁿCᵣ = ⁿPᵣ/r!; symmetry + Pascal's Identity; committees, cards, geometry.
- **Mixed:** Select (ⁿCᵣ) × Arrange (r!); Dictionary rank = (pehle wale) + 1.

---

## Practice Questions

1. How many words, with or without meaning, each of **2 vowels and 3 consonants** can be formed from the letters of the word **DAUGHTER**? (3 vowels, 5 consonants, all distinct!)

2. How many 4-letter words, with or without meaning, can be formed from the letters of the word **LOGARITHMS** if repetition of letters is not allowed? (All 10 letters distinct.)

3. Find the **Dictionary Rank** of the word **ZENITH** (all 6 letters distinct: E, H, I, N, T, Z).

4. Find the **Dictionary Rank** of the word **SMALL** (watch out: L repeats twice!).

5. From a standard deck of **52 cards**, how many 5-card combinations contain:
   (a) all 4 Aces?
   (b) all 5 cards of the same suit (a "flush")?

6. If **ⁿPᵣ = 840** and **ⁿCᵣ = 35**, find the values of n and r.

7. In an examination, a question paper consists of **12 questions** divided into two parts — Part I (5 questions) and Part II (7 questions). A student is required to attempt **8 questions in all**, selecting **at least 3 from each part**. In how many ways can the student select the questions?

8. In how many ways can **5 girls and 3 boys** be seated in a row so that **no two boys** are together?

9. How many numbers greater than **1,000,000** can be formed by using the digits **1, 2, 0, 2, 4, 2, 4**? (Watch out: 0 cannot be in the first place!)

10. A group consists of **4 girls and 7 boys**. In how many ways can a team of **5 members** be selected if the team has:
    (a) no girl?
    (b) at least one boy and one girl?

11. Find the number of different 8-letter arrangements that can be made from the letters of the word **EQUATION** so that all vowels occur together.

12. How many 6-digit numbers can be formed from the digits **0, 1, 3, 5, 7, 9** which are **divisible by 10** and no digit is repeated?

### Answers

1. 3 vowels mein se 2 (³C₂ = 3), 5 consonants mein se 3 (⁵C₃ = 10), phir 5! = 120 arrangements:
   3 × 10 × 120 = **3600 words**. Jaanch: 30 × 120 = 3600 ✅.

2. ¹⁰P₄ = 10 × 9 × 8 × 7 = **5040 words**.

3. Alphabetical order: **E, H, I, N, T, Z**.
   - E, H, I, N, T se shuru (5 letters × 5!): 5 × 120 = 600.
   - Z pakka! Bache: E, H, I, N, T.
     - ZE pakka! Bache: H, I, N, T.
       - ZEH...: 3! = 6; ZEI...: 3! = 6.
     - ZEN pakka! Bache: H, I, T.
       - ZENH...: 2! = 2.
     - ZENI pakka! Bache: H, T.
       - ZENIHT (1), phir **ZENITH** (+1)!
   Rank = 600 + 6 + 6 + 2 + 1 + 1 = **616**. Jaanch: 600 + 16 = 616 ≤ 720 ✅.

4. Alphabetical order: **A, L, L, M, S** (total 5!/2! = 60).
   - A...: 4!/2! = 12
   - L...: 4! = 24 (ek L fixed, bache A, L, M, S sabhi alag!)
   - M...: 4!/2! = 12
   - S pakka! Bache: A, L, L, M.
     - SA...: 3!/2! = 3
     - SL...: 3! = 6
     - SM pakka! Bache: A, L, L → **SMALL** hi sabse pehla! (+1)
   Rank = 12 + 24 + 12 + 3 + 6 + 1 = **58**! Jaanch: SMALL ke baad sirf SMLAL (59) aur SMLLA (60) hain → 58 + 2 = 60 ✅!

5. (a) ⁴C₄ × ⁴⁸C₁ = 1 × 48 = **48 hands**.
   (b) 4 suits mein se 1 suit (⁴C₁ = 4) × us suit ke 13 cards mein se 5 (¹³C₅ = 1287) = 4 × 1287 = **5148 hands**.
   Jaanch: (13 × 12 × 11 × 10 × 9)/120 = 1287; × 4 = 5148 ✅.

6. r! = 840 / 35 = **24 = 4!** ⟹ **r = 4**.
   ⁿP₄ = 840 = 7 × 6 × 5 × 4 ⟹ **n = 7**. Jaanch: ⁷C₄ = 35, ⁷P₄ = 840 ✅.

7. Disjoint cases (Part I of 5, Part II of 7; sum = 8, each ≥ 3):
   - (3 from I, 5 from II): ⁵C₃ × ⁷C₅ = 10 × 21 = 210
   - (4 from I, 4 from II): ⁵C₄ × ⁷C₄ = 5 × 35 = 175
   - (5 from I, 3 from II): ⁵C₅ × ⁷C₃ = 1 × 35 = 35
   Total = 210 + 175 + 35 = **420 ways**. Jaanch: 210 + 210 = 420 ✅.

8. Gap Method: 5 girls (5! = 120); 6 gaps mein 3 boys (⁶P₃ = 120) → 120 × 120 = **14,400 ways**.

9. 7 digits: 2 = 3 baar, 4 = 2 baar, 1 = 1, 0 = 1.
   Total permutations = 7! / (3! × 2!) = 5040 / 12 = **420**.
   0 se shuru hone wale (invalid, < 1,000,000): 6! / (3! × 2!) = 720 / 12 = **60**.
   Valid numbers = 420 − 60 = **360**. Jaanch: 420 − 60 = 360 ✅.

10. (a) 0 girls, 5 boys: ⁷C₅ = ⁷C₂ = **21**.
    (b) Total − (no girl) − (no boy): ¹¹C₅ − ⁷C₅ − 0 = 462 − 21 = **441** (kyunki sirf 4 girls hain, 5 girls bina boy ke namumkin!).
    Jaanch: ¹¹C₅ = 462, 462 − 21 = 441 ✅.

11. EQUATION (8 distinct letters; 5 vowels E, U, A, I, O; 3 consonants Q, T, N):
    5 vowels ka 1 bundle + 3 consonants = 4 units → 4! × 5! = 24 × 120 = **2880**.

12. Divisible by 10 ⟹ units place par **0 fixed** (1 choice)!
    Bache 5 places par {1, 3, 5, 7, 9} ko sajane ke tareeke = 5! = **120 numbers**. Jaanch: 5! = 120 ✅.

---

Shabaash! Tumne **Permutations and Combinations** ke har ek concept — FPC, Factorials, Permutations, Combinations, Dictionary Rank aur 52-Card Hands — par poori pakad bana li hai!

---

## Chapter Ka Saar: Permutations and Combinations

| Topic | Mukhya vishay | Khaas formula / yaad rakhne ki baat |
|---|---|---|
| **Topic 1** | Fundamental Principle of Counting | AND = Multiply (m × n), OR = Add (m + n); Slot Method mein restricted slot (0 nahi, even) sabse pehle bharo! |
| **Topic 2** | Factorials & Permutations (Order Matters) | 0! = 1; ⁿPᵣ = n!/(n − r)!; identical: n!/(p₁! p₂!...); Together → Bundle; No two together → Gap Method. |
| **Topic 3** | Combinations (Order Doesn't Matter) | ⁿCᵣ = ⁿPᵣ/r!; ⁿCᵣ = ⁿCₙ₋ᵣ; ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ; diagonals = n(n − 3)/2; "at least" → disjoint cases ya Total − None. |
| **Topic 4** | Mixed Applications & Synthesis | Select-then-Arrange (ⁿCᵣ × r!); identical bundle ke andar 1 way; Dictionary rank = (pehle wale) + 1. |

**Aage kya?** Agle chapter **Binomial Theorem** mein yahi **ⁿCᵣ** numbers (aur Pascal's Identity!) ek bilkul naye roop mein chamkenge — jab hum **(a + b)ⁿ** ko kisi bhi badi power n ke liye seedhe ek hi formula se kholna seekhenge!
