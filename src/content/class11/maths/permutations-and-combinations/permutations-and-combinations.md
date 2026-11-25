# Chapter: Permutations and Combinations

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla chapter [linear-inequalities-part4.md](../linear-inequalities/linear-inequalities-part4.md) tha** (Linear Inequalities ka aakhri topic, jiske teaser ne vaada kiya tha ki hum bina ek-ek karke likhe, laakhon-karodon arrangements aur selections ko chutkiyon mein ginna seekhenge!). Sikkoon aur paason ke outcomes ginne ka chhota sa parichay Class 9 mein dekha tha: [probability.md](../../../class9/maths/probability/probability.md).
> **Topics covered in this file:**
> 1. Fundamental Principle of Counting (Multiplication Aur Addition Principle)

---

# Topic 1: Fundamental Principle of Counting (Multiplication Aur Addition Principle)

Agar tumse koi poochhe: "0 se 9 tak ke digits se 4-digit ke kitne ATM PIN ban sakte hain?" — to kya tum 0000, 0001, 0002, ... se lekar 9999 tak ek-ek karke likhoge? Bilkul nahi! Poora **Permutations and Combinations** chapter ek hi chhote par taakatwar vichaar par tika hai: **bina likhe, sahi-sahi ginna**. Is pehle topic mein hum **Fundamental Principle of Counting (FPC)** — yaani **Multiplication Principle ("AND")** aur **Addition Principle ("OR")** — aur **Box/Slot Method** seekhenge.

---

## Mona ki shaadi ki packing aur safar

Bua ki shaadi mein jaane ke liye Mona apna suitcase pack kar rahi thi. Usne **3 kurtas** (K1, K2, K3) aur **2 dupattas** (D1, D2) rakhe. Mummy ne poocha, "Kul kitne alag-alag outfits pehen sakti ho?"
Mona ne gina: har ek kurta ke saath dono mein se koi bhi dupatta chalega — yaani 2 + 2 + 2 = **3 × 2 = 6 outfits**! (Kurta **AUR** Dupatta dono chahiye → **Guna**!)

Phir safar ki baat aayi. Nani ke shahar jaane ke liye **3 trains** chalti thin **YA** **2 buses**. Papa ne poocha, "Jaane ke kul kitne tareeke hain?"
Mona ne socha: "Main ek saath train aur bus dono mein thodi baithungi! Ya to 3 trains mein se koi ek loongi **YA** 2 buses mein se koi ek — yaani **3 + 2 = 5 tareeke**!" (Train **YA** Bus → **Jod**!)

Bas! Yahi **AND = Multiply** aur **OR = Add** poore counting ki sabse badi chaabi hai!

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Multiplication Principle** | Agar kaam 1 ke m tareeke hon **AUR** uske baad kaam 2 ke n tareeke hon, to dono ek saath karne ke **m × n** tareeke | 3 kurtas × 2 dupattas = 6 outfits |
| **Addition Principle** | Agar do alag-alag (independent) kaamon mein se koi EK karna ho (m **YA** n), to kul **m + n** tareeke | 3 trains + 2 buses = 5 tareeke |
| **Tree diagram** | Har choice ki shakhaayein (branches) banakar saare outcomes dikhane ka chitra | Figure 1.1 |
| **Slot / Box method** | Khali dabbe (slots) bana kar har dabbe mein choices ki ginti likhna aur guna karna | [ 4 ] × [ 4 ] × [ 3 ] = 48 |

---

## Part A: Multiplication Principle (AND) Aur Addition Principle (OR)

### 1. Fundamental Principle of Multiplication

> Agar ek event **m** alag tareekon se ho sakta hai, aur uske baad doosra event **n** alag tareekon se ho sakta hai (aur teesra **p** tareekon se...), to teeno events ke ek ke baad ek hone ke kul tareeke = **m × n × p ...**

```
                 +--- D1  ==> (K1, D1)
         +--- K1 +--- D2  ==> (K1, D2)
         :
   Start +--- K2 +--- D1  ==> (K2, D1)
         :       +--- D2  ==> (K2, D2)
         :
         +--- K3 +--- D1  ==> (K3, D1)
                 +--- D2  ==> (K3, D2)     Kul = 3 × 2 = 6 outfits!
```

> **Figure 1.1** – Tree diagram: 3 kurtas ki har branch se 2 dupattas ki branches nikalti hain, isliye 3 × 2 = 6 total outfits bante hain.

### 2. Fundamental Principle of Addition

> Agar do mutually exclusive (ek saath na hone wale) kaam **m** aur **n** tareekon se ho sakte hain, to unme se **koi ek (pehle YA doosre)** ko karne ke kul tareeke = **m + n**.

### Golden Rule of Box/Slot Method

Jab bhi kisi slot par koi **shart (restriction)** ho — jaise *"even number hona chahiye"*, *"0 pehle sthaan par nahi aa sakta"*, ya *"5 se bhaag hona chahiye"* — to **SABSE PEHLE us restricted slot ko bharo**, phir baaki slots bharo!

---

## Part B: Worked Examples

### Example 1: ROSE ke Letters se 4-Letter Codes

Shabd **ROSE** ke 4 alag-alag letters se kitne 4-letter codes (meaning ho ya na ho) ban sakte hain, jab:
(i) letters repeat **nahi** kar sakte, (ii) letters repeat **kar sakte** hain?

**Hal:**
4 khali slots banao: [ 1st ] [ 2nd ] [ 3rd ] [ 4th ].
- **(i) Without repetition:**
  - 1st slot: 4 choices (R, O, S, E)
  - 2nd slot: 3 choices (1 use ho gaya)
  - 3rd slot: 2 choices
  - 4th slot: 1 choice
  Kul codes = 4 × 3 × 2 × 1 = **24**.
- **(ii) With repetition:**
  Har slot mein chaaron letters aa sakte hain:
  Kul codes = 4 × 4 × 4 × 4 = 4⁴ = **256**.

**Jaanch:** 4 × 3 × 2 × 1 = 24 ✅; 4⁴ = 256 ✅.

### Example 2: Digits {1, 2, 3, 4, 5} se 3-Digit Numbers

Digits **1, 2, 3, 4, 5** se kitne 3-digit numbers ban sakte hain, jab:
(i) repetition allowed ho, (ii) repetition NOT allowed ho?

**Hal:**
- **(i) Repetition allowed:** [ 5 ] × [ 5 ] × [ 5 ] = **125**.
- **(ii) Repetition NOT allowed:** [ 5 ] × [ 4 ] × [ 3 ] = **60**.

**Jaanch:** 5³ = 125 ✅; 5 × 4 × 3 = 60 ✅.

### Example 3: 3-Digit EVEN Numbers (Restricted Slot Pehle!)

Digits **1, 2, 3, 4, 5, 6** se kitne 3-digit **even** numbers ban sakte hain, jab:
(i) repetition allowed ho, (ii) repetition NOT allowed ho?

**Hal:**
Even number hone ki shart **Units place (aakhri dabbe)** par hai: wahan sirf **2, 4, ya 6** (3 choices) aa sakte hain! **Pehle aakhri dabba bharo!**
- **(i) Repetition allowed:**
  - Units place: **3** choices (2, 4, 6)
  - Hundreds place: **6** choices
  - Tens place: **6** choices
  Kul = 6 × 6 × 3 = **108**.
- **(ii) Repetition NOT allowed:**
  - Units place (pehle bharo!): **3** choices
  - Hundreds place: **5** choices (1 digit units mein use ho gaya)
  - Tens place: **4** choices (2 digits use ho gaye)
  Kul = 5 × 4 × 3 = **60**.

**Jaanch:** Bina shart ke 6×5×4 = 120 numbers bante, jinme se aadhe even aur aadhe odd (kyunki 3 even, 3 odd digits hain!) → 120 ÷ 2 = 60 ✅!

### Example 4: Zero-in-First-Place Trap!

Digits **0, 2, 4, 5, 7** se bina repetition ke kitne **3-digit numbers** ban sakte hain?

**Hal:**
Dhyan do: Agar **Hundreds place (pehle dabbe)** par **0** aa gaya (jaise 045), to wo 2-digit number ban jaayega, 3-digit nahi!
Isliye **pehle Hundreds place bharo**:
- Hundreds place: **4** choices (2, 4, 5, 7 — **0 mana hai!**)
- Tens place: **4** choices (ab **0** aa sakta hai! 5 mein se 1 digit use hua, to 4 bache)
- Units place: **3** choices (2 digits use ho gaye)
Kul = 4 × 4 × 3 = **48**.

**Jaanch:** Total 5×4×3 = 60 mein se 0 se shuru hone wale 1×4×3 = 12 hataye: 60 − 12 = 48 ✅!

### Example 5: Jhandon se Signals (Flags)

**5 alag-alag rang ke jhandon** se kitne alag signals banaye ja sakte hain, agar har signal mein **2 jhande** ek ke neeche ek lagane hon?

**Hal:**
- Upar wala jhanda: **5** choices
- Neeche wala jhanda: **4** choices (same jhanda dobara use nahi ho sakta!)
Kul signals = 5 × 4 = **20**.

**Jaanch:** 5 × 4 = 20 ✅.

### Example 6: Coins aur Dice (Class 9 Bridge)

(i) Ek sikke ko **3 baar** uchhaala jaaye to kul kitne possible outcomes honge?
(ii) Ek sikka **AUR** ek 6-faced dice ek saath uchhaale jaayein to kul kitne outcomes honge?

**Hal:**
- (i) Har uchhaal ke 2 outcomes (H ya T): 2 × 2 × 2 = **8 outcomes**.
- (ii) Sikka (2) AUR dice (6): 2 × 6 = **12 outcomes**.

**Jaanch:** 2³ = 8 ✅; 2 × 6 = 12 ✅.

---

## Aam galtiyan

1. **"AND" ki jagah jod dena (ya "OR" ki jagah guna kar dena):** Student 3 kurtas aur 2 dupattas ke 3 + 2 = 5 outfits likh deta hai.
   - *Sahi soch:* Dono chahiye (**AND**) → **Multiply (×)**; dono mein se koi ek chahiye (**OR**) → **Add (+)**.
2. **3-digit number ke pehle sthaan (hundreds place) par 0 gin lena:** Example 4 mein student 5 × 4 × 3 = 60 likh deta hai.
   - *Galat kyun:* 024 ek 2-digit number hai (24), 3-digit nahi! Leftmost slot par **0 kabhi nahi** aata.
3. **Unrestricted slot pehle bharna:** Student Example 3(ii) mein pehle hundreds place (6 choices), tens (5), aur phir units par phas jaata hai ki kitne even digits bache!
   - *Sahi soch:* Hamesha **sabse zyada shart (restriction) wale slot ko PEHLE bharo**!

---

## Quick Recap

- **Multiplication Principle (AND):** m × n × p ...
- **Addition Principle (OR, mutually exclusive):** m + n + p ...
- **Slot Method:** Restricted slots (0 nahi, even, divisible by 5) hamesha **pehle** bharo!

---

## Practice Questions

1. How many 3-digit numbers can be formed from the digits 1, 2, 3, 4, 5, 6, 7 assuming that:
   (a) repetition of digits is allowed?
   (b) repetition of digits is NOT allowed?

2. How many 3-digit **odd** numbers can be formed from the digits 1, 2, 3, 4, 5, 6 if the digits can be repeated? How many if they CANNOT be repeated?

3. How many 4-letter codes can be formed using the first 10 letters of the English alphabet, if no letter can be repeated?

4. How many 5-digit telephone numbers can be constructed using the digits 0 to 9 if each number starts with **67** and no digit appears more than once?

5. A coin is tossed 4 times and the outcomes are recorded. How many possible outcomes are there?

6. Given 5 flags of different colours, how many different signals can be generated if each signal requires the use of **at least 2 flags**, one below the other? (Hint: 2 flags OR 3 flags OR 4 flags OR 5 flags!)

7. How many 3-digit numbers can be formed from the digits **0, 1, 3, 5, 7, 9** without repetition? How many of these are divisible by 5? (Hint for divisible by 5: split into two cases — ending in 0 OR ending in 5!)

8. There are 4 routes from City A to City B, and 3 routes from City B to City C.
   (a) In how many ways can a person travel from A to C via B?
   (b) In how many ways can a person go from A to C via B and return to A via B without using the same route twice on the way back?

9. A multiple-choice test has 6 questions, and each question has 4 choices (A, B, C, D). In how many different ways can a student answer all 6 questions?

10. How many 4-digit numbers greater than 5000 can be formed using the digits **1, 3, 5, 7, 9** without repetition?

11. A room has 6 doors. In how many ways can a person enter the room through one door and leave through a **different** door?

12. True or False? Give a one-line reason:
    (a) If there are 4 shirts and 5 trousers, there are 9 ways to wear one shirt and one trouser.
    (b) Using digits {0, 1, 2}, the number of 2-digit numbers without repetition is 4.
    (c) If a dice is thrown twice, there are 36 possible outcomes.

### Answers

1. (a) 7 × 7 × 7 = **343**; (b) 7 × 6 × 5 = **210**. Jaanch: 7³ = 343 ✅.

2. Odd digits: {1, 3, 5} (3 choices for units place!).
   - With repetition: 6 × 6 × 3 = **108**.
   - Without repetition: units (3) → hundreds (5) → tens (4) = 5 × 4 × 3 = **60**.

3. 10 × 9 × 8 × 7 = **5040**. Jaanch: 90 × 56 = 5040 ✅.

4. Pehle 2 digits fixed hain (6, 7). Bache 3 slots ke liye 8 digits (0..9 mein se 6, 7 hata kar):
   8 × 7 × 6 = **336**. Jaanch: 56 × 6 = 336 ✅.

5. 2 × 2 × 2 × 2 = 2⁴ = **16 outcomes**.

6. Addition Principle (OR):
   - 2 flags: 5 × 4 = 20
   - 3 flags: 5 × 4 × 3 = 60
   - 4 flags: 5 × 4 × 3 × 2 = 120
   - 5 flags: 5 × 4 × 3 × 2 × 1 = 120
   Total = 20 + 60 + 120 + 120 = **320 signals**. Jaanch: 20 + 60 + 240 = 320 ✅.

7. **Total 3-digit numbers:** hundreds (5, no 0) × tens (5) × units (4) = **100**.
   **Divisible by 5 (two disjoint cases!):**
   - Case 1 (ends in 0): units = 1 (0), hundreds = 5, tens = 4 ⟹ 5 × 4 × 1 = **20**.
   - Case 2 (ends in 5): units = 1 (5), hundreds = 4 (no 0, no 5!), tens = 4 (0 wapas allowed!) ⟹ 4 × 4 × 1 = **16**.
   Total divisible by 5 = 20 + 16 = **36**. Jaanch: dono cases disjoint hain, 20 + 16 = 36 ✅.

8. (a) 4 × 3 = **12 ways**.
   (b) Jaana (A→B→C): 4 × 3 = 12; Aana (C→B→A, different routes): 2 × 3 = 6.
   Total round trips = 12 × 6 = **72 ways**. Jaanch: 4 × 3 × 2 × 3 = 72 ✅.

9. Har sawaal ke 4 choices: 4⁶ = **4096 ways**. Jaanch: 4³ = 64, 64² = 4096 ✅.

10. 5000 se bada 4-digit number → thousands place par **5, 7, ya 9** (3 choices!).
    Baaki 3 places: 4 × 3 × 2.
    Total = 3 × 4 × 3 × 2 = **72**. Jaanch: 3 × 24 = 72 ✅.

11. Enter: 6 choices; Leave (alag door): 5 choices → 6 × 5 = **30 ways**.

12. (a) ❌ False: "and" hai, to 4 × 5 = 20 ways (9 nahi!).
    (b) ✅ True: tens (2: 1 ya 2) × units (2) = 4 (10, 12, 20, 21).
    (c) ✅ True: 6 × 6 = 36.

---

Ab tum Multiplication aur Addition Principles aur Box/Slot method se bina likhe exact ginti kar sakte ho.

**Agle topic mein:** isi slot-multiplication ko ek chhote aur shaktishali formula mein baandhenge — **Factorial Notation (n!) aur Permutations (ⁿPᵣ)**!
