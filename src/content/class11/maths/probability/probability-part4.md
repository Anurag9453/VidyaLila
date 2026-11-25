# Chapter: Probability (Part 4)

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla topic [probability-part3.md](probability-part3.md) tha** (Topic 3: Addition Theorem, Complement Rule, aur De Morgan's Probability Laws). Counting ke liye Chapter 6 ke Combinations (ⁿCᵣ) kaam aayenge: [permutations-and-combinations-part3.md](../permutations-and-combinations/permutations-and-combinations-part3.md).
> **Topics covered in this file:**
> 1. Sab Kuch Mila Kar: Combinatorics + Probability Synthesis (Cards, Committees, Word Anagrams, Lotteries), Mixed Practice, Aur Chapter Wrap-up Table

---

# Topic 4: Sab Kuch Mila Kar — Mixed Probability Problems Aur Chapter Wrap-up

Pichhle teen topics mein tumne Sample Space, Kolmogorov ke Axioms, Addition Theorem, aur De Morgan's Laws seekhe.

Lekin asli probability problems mein n(S) aur n(E) itne bade hote hain (jaise 52 cards mein se 4 cards chunna = 2,70,725 ways!) ki unhe list banana namumkin hota hai! Wahan Chapter 6 ke **Combinations (ⁿCᵣ)** aur **Permutations** hamare super-weapons ban jaate hain! Is aakhri topic mein hum Combinatorics aur Probability ko mila kar 6 rich synthesis problems solve karenge!

---

## Tarika ka "Probability Vault" Finale

School Maths Society ke annual finale mein Tarika "Probability Vault" station lead kar rahi hai. Vault kholne ke liye chaar combinatorics-probability locks todne the:
- **Lock 1 (Card Hand):** 52 cards mein se 4 cards nikaalne par exact 3 diamonds aur 1 spade aane ka chance kya hai?
- **Lock 2 (Anagram Lock):** Word **ASSASSINATION** ke letters ko randomly jamane par sabhi 4 S ek saath aane ki probability kya hai?
- **Lock 3 (Lottery Vault):** 20 numbers mein se 6 lucky numbers match karne ka chance kya hai?
- **Lock 4 (Partition Lock):** Teen mutually exclusive aur exhaustive events A, B, C ke liye 2P(A) = 3P(B) = 4P(C) hai — teeno ki exact probabilities kya hongi?

Tarika ne team ko yaad dilaya: "Numerator aur denominator dono mein **ek hi counting style** (dono ⁿCᵣ ya dono permutations) rakho — aur jab bhi 'at least one' dikhe, seedha **1 - P(none)** lagao!"

---

## Decision Map: Kaun Sa Probability Formula Kab?

| Sawaal ka pattern | Sabse tez tool / formula | Golden Rule |
|---|---|---|
| Selection without order (cards, committees, balls) | n(E) / n(S) using **ⁿCᵣ** in both top and bottom | Top aur bottom dono unordered (ⁿCᵣ) hone chahiye! |
| Arrangement with order (words, digits, seating) | Permutations (factorials n! / (p! q! ...)) | Repeated letters ke factorials se divide mat bhoolo |
| "At least one ..." | Complement trick: **1 - P(none)** | 5 cases jodne ki jagah 1 case ghatao! |
| "A or B" (overlapping vs disjoint) | P(A ∪ B) = P(A) + P(B) - P(A ∩ B) | Mutually exclusive ho tabhi P(A ∩ B) = 0 |
| "Neither A nor B" / "Not both" | De Morgan: 1 - P(A ∪ B) / 1 - P(A ∩ B) | ∩ aur ∪ palat jaate hain |
| Mutually exclusive & exhaustive events | P(E₁) + P(E₂) + ... + P(Eₙ) = 1 | Ratio diya ho to sabko k ke terms mein likh kar sum = 1 |

---

## 6 Rich Mixed Synthesis Problems (Step-by-Step With Jaanch)

### Problem 4.1: Card Hand Probability Using Combinations (ⁿCᵣ)
**Sawaal:** 52 cards ke well-shuffled deck mein se 4 cards ek saath nikaale jaate hain. Probability gyat karo ki unme **3 diamonds aur 1 spade** ho.

**Solution:**
Chapter 6 ([permutations-and-combinations-part3.md](../permutations-and-combinations/permutations-and-combinations-part3.md)) ke Combinations se:
- Total ways to choose 4 cards from 52:
  n(S) = ⁵²C₄ = (52 × 51 × 50 × 49) / (4 × 3 × 2 × 1) = 13 × 17 × 25 × 49 = **270,725**.
- Ways to choose 3 diamonds from 13 AND 1 spade from 13:
  n(E) = ¹³C₃ × ¹³C₁ = [(13 × 12 × 11)/6] × 13 = 286 × 13 = **3,718**.

Probability:
P(E) = (286 × 13) / (13 × 17 × 25 × 49)
13 cancel karo!
= 286 / (17 × 25 × 49) = **286 / 20825**.

Jaanch:
- Jaanch: 17 × 25 × 49 = 425 × 49 = 20825; gcd(286, 20825) = 1 (286 = 2 × 11 × 13, none divides 17, 25, or 49) ✅

---

### Problem 4.2: Committee Selection And "At Least One" Complement Trick
**Sawaal:** 2 men aur 2 women ke group mein se 2 logon ki committee randomly chuni jaati hai. Probability gyat karo ki committee mein:
(a) No man ho   (b) 1 man ho   (c) 2 men hon   (d) At least 1 woman ho.

**Solution:**
Total ways to choose 2 from 4: n(S) = ⁴C₂ = **6**.
- **(a) No man (2 women from 2):** ²C₂ / 6 = **1/6**.
- **(b) 1 man and 1 woman:** (²C₁ × ²C₁) / 6 = 4/6 = **2/3**.
- **(c) 2 men (from 2):** ²C₂ / 6 = **1/6**.
- **(d) At least 1 woman:** Complement of "no woman" (= 2 men!) = 1 - P(2 men) = 1 - 1/6 = **5/6**.

Jaanch:
- Jaanch: Exhaustive check: P(0 men) + P(1 man) + P(2 men) = 1/6 + 4/6 + 1/6 = 6/6 = 1 ✅

---

### Problem 4.3: Word Rearrangement Probability (ASSASSINATION)
**Sawaal:** Word **ASSASSINATION** ke sabhi 13 letters ko randomly ek line mein arrange kiya jata hai. Kya probability hai ki **sabhi 4 S ek saath (together)** aayein?

**Solution:**
Word ASSASSINATION mein 13 letters hain: **S (4), A (3), I (2), N (2)**, T (1), O (1).
- Total distinct arrangements:
  n(S) = 13! / (4! 3! 2! 2!).
- Sabhi 4 S ko ek single block **[SSSS]** maan lo! Ab kul 13 - 4 + 1 = **10 objects** bachte hain (jinme A: 3, I: 2, N: 2 repeated hain; aur [SSSS] ke andar sabhi S identical hain isliye internal arrangement = 1!):
  n(E) = 10! / (3! 2! 2!).

Probability:
P(E) = [ 10! / (3! 2! 2!) ] / [ 13! / (4! 3! 2! 2!) ]
3! 2! 2! poora cancel ho jata hai!
P(E) = (4! × 10!) / 13!
= 24 / (13 × 12 × 11)
= 2 / (13 × 11) = **2 / 143**.

Jaanch:
- Jaanch: 24 / 12 = 2, 13 × 11 = 143 => 2/143 ✅

---

### Problem 4.4: Lottery Draw Probability
**Sawaal:** Ek lottery mein ek person 1 se 20 tak ke numbers mein se koi bhi 6 alag numbers chunta hai. Agar uske 6 numbers committee dwara fixed 6 winning numbers se match kar jayein (order matter nahi karta), to woh prize jeet jata hai. Prize jeetne ki probability kya hai?

**Solution:**
Order matter nahi karta => Combinations!
Total ways to choose 6 numbers out of 20:
n(S) = ²⁰C₆ = (20 × 19 × 18 × 17 × 16 × 15) / (6 × 5 × 4 × 3 × 2 × 1) = **38,760**.
Winning combination sirf **1** hai (n(E) = 1).

P(winning) = **1 / 38,760**.

Jaanch:
- Jaanch: (20 × 19 × 18 × 17 × 16 × 15) / 720 = 20 × 19 × 17 × 6 = 38760 ✅

---

### Problem 4.5: Box With Marbles ("All Blue" And "At Least One Green")
**Sawaal:** Ek box mein 10 red, 20 blue, aur 30 green marbles (kul 60 marbles) hain. Box se 5 marbles randomly nikaale jaate hain. Probability gyat karo ki:
(a) Sabhi 5 marbles blue hon.
(b) Kam se kam 1 marble green ho.

**Solution:**
Total ways to draw 5 marbles from 60: n(S) = **⁶⁰C₅**.
- **(a) All 5 blue (chosen from 20 blue):**
  P(all blue) = **²⁰C₅ / ⁶⁰C₅**.
- **(b) At least 1 green:**
  Complement = "no green marble" (sabhi 5 marbles bache hue 10 + 20 = **30 non-green marbles** mein se chune jayein!).
  P(no green) = ³⁰C₅ / ⁶⁰C₅.
  Isliye P(at least 1 green) = **1 - (³⁰C₅ / ⁶⁰C₅)**.

Jaanch:
- Jaanch: 30 non-green marbles < 60 total, so 0 < ³⁰C₅ / ⁶⁰C₅ < 1 and 1 - ³⁰C₅/⁶⁰C₅ is strictly between 0 and 1 ✅

---

### Problem 4.6: Mutually Exclusive And Exhaustive Events In Ratio
**Sawaal:** Teen events A, B, C mutually exclusive aur exhaustive hain, aur **2 P(A) = 3 P(B) = 4 P(C)** hai. P(A), P(B), aur P(C) gyat karo.

**Solution:**
Maan lo 2 P(A) = 3 P(B) = 4 P(C) = k (jahan k > 0).
Tab:
P(A) = k/2,   P(B) = k/3,   P(C) = k/4.

Kyunki A, B, C mutually exclusive aur exhaustive hain:
P(A) + P(B) + P(C) = 1
k/2 + k/3 + k/4 = 1
(6k + 4k + 3k) / 12 = 1
13k / 12 = 1 => **k = 12/13**.

Ab values rakho:
- **P(A)** = (12/13)/2 = **6/13**
- **P(B)** = (12/13)/3 = **4/13**
- **P(C)** = (12/13)/4 = **3/13**.

Jaanch:
- Jaanch: 6/13 + 4/13 + 3/13 = 13/13 = 1, aur 2(6/13) = 3(4/13) = 4(3/13) = 12/13 ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Numerator mein Permutation (ⁿPᵣ) aur Denominator mein Combination (ⁿCᵣ) mila dena
- **Galat soch:** "4 cards chune hain: denominator ⁵²C₄ aur numerator mein order bhi multiply kar diya."
- **Sahi samajh:** Numerator aur denominator dono mein **bilkul same counting model** use karo — ya dono unordered (ⁿCᵣ), ya dono ordered (ⁿPᵣ)!

### Galti 2: "At least one" ke liye probabilities ko seedha jod dena
- **Galat soch:** "At least 1 green = 5 × P(1 green)."
- **Sahi samajh:** Nahi! "At least one" mein 1, 2, 3, 4, ya 5 green sab aate hain — inhe alag-alag jodne ki jagah hamesha **1 - P(none)** lagao!

### Galti 3: Word-rearrangement probability mein repeated letters ke factorials bhool jaana
- **Galat soch:** "ASSASSINATION mein total arrangements = 13!."
- **Sahi samajh:** Repeated letters (4 S, 3 A, 2 I, 2 N) ke factorials se divide karna zaroori hai!

---

## Quick Recap

- **Combinatorics Probability:** P(E) = favourable combinations / total combinations (always keep numerator & denominator consistent!).
- **At least one:** Always use **P(at least one) = 1 - P(none)**.
- **Word block method:** Treat grouped letters as 1 block, divide by repeated-letter factorials.
- **Mutually exclusive & exhaustive partition:** Sum of probabilities = 1.

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
A box contains 10 red, 20 blue, and 30 green marbles. Five marbles are drawn at random. What is the probability that **all 5 marbles are red**?

**Solution:**
Total ways = ⁶⁰C₅. Favourable ways (5 from 10 red) = ¹⁰C₅.
P(all red) = **¹⁰C₅ / ⁶⁰C₅**.

Jaanch:
- Jaanch: Both numerator and denominator use unordered combinations ⁿC₅ ✅

---

### Question 2
Four cards are drawn at random from a well-shuffled deck of 52 cards. What is the probability of obtaining **all 4 aces**?

**Solution:**
Total ways = ⁵²C₄ = 270,725.
Favourable ways (4 aces from 4) = ⁴C₄ = 1.
P(all 4 aces) = **1 / 270,725**.

Jaanch:
- Jaanch: ⁴C₄ = 1 and ⁵²C₄ = 270725 ✅

---

### Question 3
In a relay race, there are five teams A, B, C, D, and E. What is the probability that A, B, and C finish first, second, and third respectively?

**Solution:**
Total ways 5 teams can finish in order = 5! = 120.
If A is 1st, B is 2nd, C is 3rd, the remaining 2 teams (D, E) can finish 4th and 5th in 2! = 2 ways.
P = 2 / 120 = **1/60**.

Jaanch:
- Jaanch: Also 1 / ⁵P₃ = 1 / (5 × 4 × 3) = 1/60 ✅

---

### Question 4
In the same 5-team relay race (Question 3), what is the probability that A, B, and C are the first three to finish (in **any** order)?

**Solution:**
A, B, C can arrange among the top 3 spots in 3! = 6 ways, and D, E in the last 2 spots in 2! = 2 ways => favourable = 6 × 2 = 12.
P = 12 / 120 = **1/10**.

Jaanch:
- Jaanch: Unordered check: 1 / ⁵C₃ = 1 / 10 ✅

---

### Question 5
A bag contains 9 discs of which 4 are red, 3 are blue, and 2 are yellow. One disc is drawn at random. Find the probability that it is (a) either red or blue (b) not blue.

**Solution:**
Total discs = 9 (mutually exclusive colours!).
- (a) P(red or blue) = 4/9 + 3/9 = **7/9**.
- (b) P(not blue) = 1 - 3/9 = 6/9 = **2/3**.

Jaanch:
- Jaanch: 4 + 3 + 2 = 9; non-blue = 4 + 2 = 6 => 6/9 = 2/3 ✅

---

### Question 6
Three letters are dictated to three persons and an envelope is addressed to each of them. The letters are inserted into the envelopes at random so that each envelope contains exactly one letter. Find the probability that **at least one** letter is in its proper envelope.

**Solution:**
Total ways to put 3 letters in 3 envelopes = 3! = **6**.
Number of ways **no letter** goes into its proper envelope (derangements of 3: (2, 3, 1) and (3, 1, 2)) = **2**.
P(none in proper envelope) = 2/6 = 1/3.
P(at least one in proper envelope) = 1 - 1/3 = **2/3**.

Jaanch:
- Jaanch: Out of 6 permutations of (1,2,3), 4 have at least one fixed point: (1,2,3), (1,3,2), (3,2,1), (2,1,3) => 4/6 = 2/3 ✅

---

### Question 7
Out of 100 students, two sections of 40 and 60 are formed. If you and your friend are among the 100 students, what is the probability that you both enter the **same** section?

**Solution:**
Total ways to choose 40 students for Section 1: ¹⁰⁰C₄₀.
- Both in Section 1 (choose remaining 38 from 98): ⁹⁸C₃₈.
- Both in Section 2 (choose all 40 for Section 1 from the other 98): ⁹⁸C₄₀.

P(both in Section 1) = ⁹⁸C₃₈ / ¹⁰⁰C₄₀ = (40 × 39) / (100 × 99) = 1560 / 9900 = 26 / 165.
P(both in Section 2) = ⁹⁸C₄₀ / ¹⁰⁰C₄₀ = (60 × 59) / (100 × 99) = 3540 / 9900 = 59 / 165.

Total P(same section) = 26/165 + 59/165 = 85/165 = **17/33**.

Jaanch:
- Jaanch: P(different sections) = 2 × (40 × 60)/(100 × 99) = 4800/9900 = 16/33; 17/33 + 16/33 = 33/33 = 1 ✅

---

### Question 8
If 4-digit numbers greater than 5,000 are randomly formed from the digits 0, 1, 3, 5, and 7 without repetition, what is the probability of forming a number divisible by 5?

**Solution:**
For a 4-digit number > 5000 without repetition, the thousands digit must be **5 or 7** (2 choices).
Remaining 3 places from remaining 4 digits: ⁴P₃ = 24 ways.
Total n(S) = 2 × 24 = **48**.

For divisibility by 5, the units digit must be **0 or 5**:
- Case 1 (Thousands = 5): units digit MUST be 0 (1 choice); middle 2 places from {1, 3, 7} in ³P₂ = 6 ways => **6 numbers**.
- Case 2 (Thousands = 7): units digit can be 0 or 5 (2 choices); middle 2 places from remaining 3 digits in ³P₂ = 6 ways => 2 × 6 = **12 numbers**.

Total favourable n(E) = 6 + 12 = **18**.
P(E) = 18 / 48 = **3/8**.

Jaanch:
- Jaanch: 6 + 12 = 18 and 18/48 = 3/8 ✅

---

### Question 9
The number lock of a suitcase has 4 wheels, each labelled with ten digits from 0 to 9. The lock opens with a sequence of four digits with **no repeats**. What is the probability of a person getting the right sequence to open the suitcase on the first try?

**Solution:**
Number of 4-digit sequences with no repeats = ¹⁰P₄ = 10 × 9 × 8 × 7 = **5,040**.
Only 1 sequence opens the lock.
P = **1 / 5,040**.

Jaanch:
- Jaanch: 10 × 9 × 8 × 7 = 5040 ✅

---

### Question 10
A committee of 3 is to be selected from 4 boys and 3 girls. Find the probability that the committee consists of **at least 1 girl**.

**Solution:**
Total ways = ⁷C₃ = (7 × 6 × 5)/6 = **35**.
Complement ("no girl" = all 3 boys from 4): ⁴C₃ = **4**.
P(at least 1 girl) = 1 - 4/35 = **31/35**.

Jaanch:
- Jaanch: Direct: (1 girl: ³C₁·⁴C₂ = 18) + (2 girls: ³C₂·⁴C₁ = 12) + (3 girls: ³C₃ = 1) = 31 => 31/35 ✅

---

### Question 11
Three mutually exclusive and exhaustive events E₁, E₂, E₃ satisfy P(E₁) = 2 P(E₂) and P(E₃) = (1/2) P(E₂). Find P(E₁), P(E₂), and P(E₃).

**Solution:**
Let P(E₂) = p. Then P(E₁) = 2p and P(E₃) = p/2.
2p + p + p/2 = 1 => (7/2)p = 1 => **p = 2/7**.
- **P(E₁)** = **4/7**
- **P(E₂)** = **2/7**
- **P(E₃)** = **1/7**.

Jaanch:
- Jaanch: 4/7 + 2/7 + 1/7 = 7/7 = 1 ✅

---

### Question 12
In a single throw of two dice, find the probability of getting a sum of either 7 or 11.

**Solution:**
Events A (sum = 7) and B (sum = 11) are mutually exclusive!
- A = {(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)} => n(A) = 6
- B = {(5,6), (6,5)} => n(B) = 2
P(A ∪ B) = 6/36 + 2/36 = 8/36 = **2/9**.

Jaanch:
- Jaanch: A ∩ B = φ, 6 + 2 = 8 => 8/36 = 2/9 ✅

---

## Chapter Wrap-up Table

| Concept | Key Formula / Definition | Golden Rule / Pehchan |
|---|---|---|
| **Sample Space & Events** | S = all outcomes; Event E ⊆ S | φ = impossible, S = sure, 1 point = simple |
| **Mutually Exclusive & Exhaustive** | ME: A ∩ B = φ<br>Exhaustive: E₁ ∪ ... ∪ Eₙ = S | Independent properties — check both separately! |
| **Kolmogorov Axioms** | 0 ≤ P(ωᵢ) ≤ 1; Σ P(ωᵢ) = 1<br>P(A) = Σ_{ωᵢ ∈ A} P(ωᵢ) | Valid for BOTH fair and biased experiments |
| **Equally Likely Outcomes** | P(A) = n(A) / n(S) | Special case of axioms when every P(ωᵢ) = 1/n |
| **Complement Rule** | P(A') = 1 - P(A) | Best weapon for "at least one" = 1 - P(none) |
| **Addition Theorem** | P(A ∪ B) = P(A) + P(B) - P(A ∩ B) | Subtract overlap once; if ME, P(A ∩ B) = 0 |
| **De Morgan's Probability Laws** | P(A' ∩ B') = 1 - P(A ∪ B)<br>P(A' ∪ B') = 1 - P(A ∩ B) | "Neither-nor" vs "Not both" |
| **Only A / Exactly One** | P(A ∩ B') = P(A) - P(A ∩ B)<br>P(exactly one) = P(A) + P(B) - 2P(A ∩ B) | Venn diagram disjoint regions |
| **Combinatorics Probability** | P(E) = Favourable ⁿCᵣ / Total ⁿCᵣ | Keep numerator & denominator same style (both ⁿCᵣ or both ⁿPᵣ) |

---

**Shabash! Tumne Class 11 Mathematics ke sabhi 14 chapters — Sets se lekar Trigonometry, Complex Numbers, Combinatorics, Sequences, Coordinate Geometry, 3D Geometry, Calculus, Statistics, aur Probability tak — poori tarah master kar liye hain! Ab tum Class 12 Mathematics ki naye safar ke liye bilkul taiyar ho!**
