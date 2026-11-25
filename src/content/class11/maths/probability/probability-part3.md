# Chapter: Probability (Part 3)

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla topic [probability-part2.md](probability-part2.md) tha** (Topic 2: Axiomatic Approach to Probability). Set operations aur De Morgan's Laws Class 11 Chapter 1 ke [sets-part3.md](../sets/sets-part3.md) mein padhe the.
> **Topics covered in this file:**
> 1. Probability of Events: Complement Rule, Addition Theorem (OR), Mutually Exclusive Events, De Morgan's Probability Laws, Aur Consistency Checks

---

# Topic 3: Probability of Events — Mutually Exclusive, Exhaustive, AND, OR, NOT

Topic 2 mein tumne seekha ki har event A ki probability uske sample points ki probabilities ka sum hoti hai.

Ab sawaal: agar hume **P(A)**, **P(B)**, aur **P(A ∩ B)** pata hon, to bina sample space likhe seedhe **P(A or B)**, **P(not A)**, **P(neither A nor B)**, ya **P(A but not B)** kaise nikaalein? Is topic mein hum **Complement Rule**, **Addition Theorem**, aur **De Morgan's Probability Laws** derive karenge!

---

## Ragini ka hospital blood-bank inventory analysis

Ragini ek hospital blood-bank ki inventory manager hai. Pichhle mahine ke blood-donor records mein usne dekha:
- 54% donors mein Antigen A hai: P(A) = 0.54
- 69% donors mein Antigen B hai: P(B) = 0.69
- 35% donors mein **dono** Antigens (AB group) hain: P(A ∩ B) = 0.35

Ek intern ne "A ya B antigen wale donors" nikaalne ke liye seedhe 0.54 + 0.69 = 1.23 (123%!) jod diya!
Ragini hansi: "123% kaise ho sakta hai?! Tumne AB donors (0.35) ko **do baar** gin liya! **Addition Theorem** se ek baar overlap ghatao:
P(A ∪ B) = 0.54 + 0.69 - 0.35 = **0.88 (88%)**!
Aur bache hue **1 - 0.88 = 0.12 (12%)** donors O-group (neither A nor B) hain!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Complement Rule** | Event A na hone ki probability: P(A') = 1 - P(A) | P(A) = 0.3 => P(A') = 0.7 |
| **Addition Theorem** | A ya B (kam se kam ek) hone ki probability | P(A ∪ B) = P(A) + P(B) - P(A ∩ B) |
| **Mutually Exclusive Addition** | Jab A ∩ B = φ ho to overlap 0 hota hai | P(A ∪ B) = P(A) + P(B) |
| **De Morgan's Laws** | Neither-nor aur not-both ke exact probability rules | P(A' ∩ B') = 1 - P(A ∪ B) |

---

## Part A: Complement Rule — Derivation ("Kyun"!)

Kisi bhi event A aur uske complement A' ke liye:
A ∪ A' = S   aur   A ∩ A' = φ (mutually exclusive!).

Axioms 2 aur 3 se:
P(A) + P(A') = P(S) = 1
=> **P(A') = 1 - P(A)**   aur   **P(A) = 1 - P(A')**.

---

## Part B: Addition Theorem For Two Events — Derivation ("Kyun"!)

Kisi bhi do events A aur B ke liye:
1. A ∪ B ko do **disjoint** hisson mein baanto: **A ∪ B = A ∪ (B - A)** =>
   P(A ∪ B) = P(A) + P(B - A)   --- (1)
2. B ko bhi do **disjoint** hisson mein baanto: **B = (A ∩ B) ∪ (B - A)** =>
   P(B) = P(A ∩ B) + P(B - A)  =>  **P(B - A) = P(B) - P(A ∩ B)**   --- (2)

(2) ko (1) mein rakho:
**P(A ∪ B) = P(A) + P(B) - P(A ∩ B)**

### Special Cases:
- **Agar A aur B Mutually Exclusive hain (A ∩ B = φ => P(A ∩ B) = 0):**
  **P(A ∪ B) = P(A) + P(B)**.
- **Agar A aur B Exhaustive hain (A ∪ B = S):**
  **P(A ∪ B) = 1**.
- **Teen events A, B, C ke liye (stated, checked on examples):**
  **P(A ∪ B ∪ C) = P(A) + P(B) + P(C) - P(A ∩ B) - P(B ∩ C) - P(C ∩ A) + P(A ∩ B ∩ C)**.

---

## Part C: De Morgan's Probability Laws Aur "Only A"

Chapter 1 ([sets-part3.md](../sets/sets-part3.md)) ke De Morgan's Laws se:
1. **P(neither A nor B)** = P(A' ∩ B') = P((A ∪ B)') = **1 - P(A ∪ B)**
2. **P(not both A and B)** = P(A' ∪ B') = P((A ∩ B)') = **1 - P(A ∩ B)**
3. **P(A but not B / only A)** = P(A ∩ B') = **P(A) - P(A ∩ B)**
4. **P(B but not A / only B)** = P(B ∩ A') = **P(B) - P(A ∩ B)**
5. **P(exactly one of A or B)** = P(A ∩ B') + P(B ∩ A') = **P(A) + P(B) - 2 P(A ∩ B)**

---

## Solved Examples (Step-by-Step With Jaanch)

### Example 3.1: Mutually Exclusive vs Overlapping Events
**Sawaal:** Diya hai P(A) = 3/5 aur P(B) = 1/5. P(A or B) gyat karo agar:
(a) A aur B mutually exclusive hain.
(b) P(A ∩ B) = 1/10 hai.

**Solution:**
**(a) Mutually Exclusive (P(A ∩ B) = 0):**
P(A ∪ B) = P(A) + P(B) = 3/5 + 1/5 = **4/5**.

**(b) Overlapping (P(A ∩ B) = 1/10):**
P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 3/5 + 1/5 - 1/10 = 8/10 - 1/10 = **7/10**.

Jaanch:
- Jaanch: 0 ≤ 7/10 ≤ 4/5 ≤ 1, aur P(A ∩ B) = 1/10 ≤ min(3/5, 1/5) = 1/5 ✅

---

### Example 3.2: Class Survey (NCC & NSS)
**Sawaal:** 60 students ki ek class mein 30 students ne NCC liya, 32 ne NSS liya, aur 24 ne dono (NCC aur NSS) liye. Ek student randomly chuna jata hai. Probability gyat karo ki usne:
(a) NCC ya NSS liya ho
(b) Na NCC aur na hi NSS liya ho
(c) NSS liya ho par NCC nahi.

**Solution:**
Yahan P(A) = 30/60 = 1/2, P(B) = 32/60 = 8/15, P(A ∩ B) = 24/60 = 2/5.
- **(a) P(A ∪ B)** = 30/60 + 32/60 - 24/60 = 38/60 = **19/30**.
- **(b) P(A' ∩ B')** = 1 - P(A ∪ B) = 1 - 19/30 = **11/30**.
- **(c) P(B ∩ A')** = P(B) - P(A ∩ B) = 32/60 - 24/60 = 8/60 = **2/15**.

Jaanch:
- Jaanch: Only NCC (6) + Both (24) + Only NSS (8) + Neither (22) = 60 => 6/60 + 24/60 + 8/60 + 22/60 = 1 ✅

---

### Example 3.3: Using De Morgan's Laws And "Only" Formulas
**Sawaal:** Agar P(A) = 0.54, P(B) = 0.69, aur P(A ∩ B) = 0.35 ho, to gyat karo:
(a) P(A ∪ B)   (b) P(A' ∩ B')   (c) P(A ∩ B')   (d) P(B ∩ A')

**Solution:**
- **(a) P(A ∪ B)** = 0.54 + 0.69 - 0.35 = **0.88**.
- **(b) P(A' ∩ B')** = 1 - P(A ∪ B) = 1 - 0.88 = **0.12**.
- **(c) P(A ∩ B')** = P(A) - P(A ∩ B) = 0.54 - 0.35 = **0.19**.
- **(d) P(B ∩ A')** = P(B) - P(A ∩ B) = 0.69 - 0.35 = **0.34**.

Jaanch:
- Jaanch: All four disjoint Venn regions sum to 1: 0.19 + 0.35 + 0.34 + 0.12 = 1.00 ✅

---

### Example 3.4: Checking Consistency Of Probability Data
**Sawaal:** Check karo kya yeh probability statements consistent (possible) hain:
(a) P(A) = 0.5, P(B) = 0.7, P(A ∩ B) = 0.6
(b) P(A) = 0.5, P(B) = 0.4, P(A ∪ B) = 0.8

**Solution:**
**(a)** Kyunki A ∩ B ⊆ A, hamesha **P(A ∩ B) ≤ P(A)** hona chahiye! Yahan 0.6 > 0.5 hai, jo impossible hai => **NOT consistent!**

**(b)** P(A ∩ B) = P(A) + P(B) - P(A ∪ B) = 0.5 + 0.4 - 0.8 = **0.1**.
Check karo: 0 ≤ 0.1 ≤ min(0.5, 0.4) aur P(A ∪ B) = 0.8 ≤ 1 => **CONSISTENT!**

Jaanch:
- Jaanch (b): Venn regions: only A = 0.4, both = 0.1, only B = 0.3, neither = 0.2; sum = 1.0 (all ≥ 0) ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Non-mutually-exclusive events par P(A) + P(B) laga dena
- **Galat soch:** "P(A) = 0.54 aur P(B) = 0.69, to P(A ∪ B) = 0.54 + 0.69 = 1.23."
- **Sahi samajh:** Probability kabhi 1 se badi nahi ho sakti! Jab tak sawaal saaf na bole ki A aur B **mutually exclusive** hain, hamesha **P(A) + P(B) - P(A ∩ B)** use karo!

### Galti 2: P(A' ∩ B') aur P(A' ∪ B') ko ulta kar dena
- **Galat soch:** "P(A' ∩ B') = 1 - P(A ∩ B)."
- **Sahi samajh:** De Morgan's Law mein **∩ aur ∪ aapas mein palat jaate hain**!
  - P(A' ∩ B') = **1 - P(A ∪ B)** ("neither A nor B")
  - P(A' ∪ B') = **1 - P(A ∩ B)** ("not both A and B")!

### Galti 3: P(A ∩ B) > P(A) ko valid maan lena
- **Galat soch:** "0.6 bhi 0 aur 1 ke beech hai, to P(A ∩ B) = 0.6 chalega."
- **Sahi samajh:** Intersection A ∩ B dono sets A aur B ke **andar** hota hai, isliye hamesha **P(A ∩ B) ≤ min(P(A), P(B))** hona zaroori hai!

---

## Quick Recap

- **Complement:** P(A') = 1 - P(A).
- **Addition Theorem:** P(A ∪ B) = P(A) + P(B) - P(A ∩ B).
- **Mutually Exclusive:** P(A ∪ B) = P(A) + P(B).
- **De Morgan's Laws:** P(A' ∩ B') = 1 - P(A ∪ B); P(A' ∪ B') = 1 - P(A ∩ B).
- **Only A:** P(A ∩ B') = P(A) - P(A ∩ B).

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
If P(A) = 2/11 is the probability of an event A, what is the probability of the event "not A"?

**Solution:**
P(A') = 1 - P(A) = 1 - 2/11 = **9/11**.

Jaanch:
- Jaanch: 2/11 + 9/11 = 11/11 = 1 ✅

---

### Question 2
Given P(A) = 1/3, P(B) = 1/5, and P(A ∩ B) = 1/15, find P(A ∪ B).

**Solution:**
P(A ∪ B) = 1/3 + 1/5 - 1/15 = (5 + 3 - 1)/15 = **7/15**.

Jaanch:
- Jaanch: 5/15 + 3/15 - 1/15 = 7/15 ≤ 1 ✅

---

### Question 3
If E and F are events such that P(E) = 1/4, P(F) = 1/2, and P(E and F) = 1/8, find (a) P(E or F) (b) P(not E and not F).

**Solution:**
- (a) P(E ∪ F) = 1/4 + 1/2 - 1/8 = (2 + 4 - 1)/8 = **5/8**.
- (b) P(E' ∩ F') = 1 - P(E ∪ F) = 1 - 5/8 = **3/8**.

Jaanch:
- Jaanch: 5/8 + 3/8 = 1 ✅

---

### Question 4
Events E and F are such that P(not E or not F) = 0.25. State whether E and F are mutually exclusive.

**Solution:**
By De Morgan's Law: P(E' ∪ F') = 1 - P(E ∩ F) = 0.25
=> P(E ∩ F) = 1 - 0.25 = **0.75 ≠ 0**.
Since P(E ∩ F) ≠ 0, E and F are **NOT mutually exclusive**!

Jaanch:
- Jaanch: Mutually exclusive hone ke liye P(E ∩ F) = 0 (yaani P(E' ∪ F') = 1) hona chahiye ✅

---

### Question 5
A and B are events such that P(A) = 0.42, P(B) = 0.48, and P(A and B) = 0.16. Determine: (a) P(not A) (b) P(not B) (c) P(A or B).

**Solution:**
- (a) P(A') = 1 - 0.42 = **0.58**
- (b) P(B') = 1 - 0.48 = **0.52**
- (c) P(A ∪ B) = 0.42 + 0.48 - 0.16 = **0.74**.

Jaanch:
- Jaanch: 0.42 + 0.48 = 0.90, 0.90 - 0.16 = 0.74 ✅

---

### Question 6
One card is drawn from a well-shuffled deck of 52 cards. Find the probability that the card is either a heart or a king.

**Solution:**
Let A = heart (13 cards), B = king (4 cards).
A ∩ B = king of hearts (1 card).
P(A ∪ B) = 13/52 + 4/52 - 1/52 = 16/52 = **4/13**.

Jaanch:
- Jaanch: 13 hearts + 3 other kings = 16 cards => 16/52 = 4/13 ✅

---

### Question 7
The probability that a student passes Physics is 0.6, passes Chemistry is 0.5, and passes at least one of them is 0.85. Find the probability that the student passes both subjects.

**Solution:**
P(A ∩ B) = P(A) + P(B) - P(A ∪ B) = 0.6 + 0.5 - 0.85 = **0.25**.

Jaanch:
- Jaanch: 0.6 + 0.5 - 0.25 = 0.85 ✅

---

### Question 8
In an entrance test, the probability of passing Section A is 0.8, Section B is 0.7, and passing at least one of them is 0.95. Find the probability of failing BOTH sections.

**Solution:**
Failing both = neither A nor B = P(A' ∩ B') = 1 - P(A ∪ B) = 1 - 0.95 = **0.05**.

Jaanch:
- Jaanch: 0.95 + 0.05 = 1.00 ✅

---

### Question 9
If A and B are mutually exclusive events with P(A) = 0.35 and P(B) = 0.45, find: (a) P(A ∪ B) (b) P(A' ∩ B') (c) P(A ∩ B').

**Solution:**
Since mutually exclusive, P(A ∩ B) = 0:
- (a) P(A ∪ B) = 0.35 + 0.45 = **0.80**
- (b) P(A' ∩ B') = 1 - 0.80 = **0.20**
- (c) P(A ∩ B') = P(A) - 0 = **0.35**.

Jaanch:
- Jaanch: Disjoint parts 0.35 + 0.45 + 0.20 = 1.00 ✅

---

### Question 10
A fair die is thrown once. Find the probability of getting an even number or a multiple of 3.

**Solution:**
A (even) = {2, 4, 6}, B (multiple of 3) = {3, 6}, A ∩ B = {6}.
P(A ∪ B) = 3/6 + 2/6 - 1/6 = 4/6 = **2/3**.

Jaanch:
- Jaanch: A ∪ B = {2, 3, 4, 6} (4 outcomes out of 6) => 4/6 = 2/3 ✅

---

### Question 11
If P(A) = 0.5, P(B) = 0.3, and P(A ∩ B) = 0.1, find the probability that **exactly one** of A or B occurs.

**Solution:**
P(exactly one) = P(A) + P(B) - 2 P(A ∩ B) = 0.5 + 0.3 - 2(0.1) = **0.6**.

Jaanch:
- Jaanch: P(A only) = 0.4, P(B only) = 0.2 => 0.4 + 0.2 = 0.6 ✅

---

### Question 12
Given P(A) = 0.4, P(B) = 0.5, P(C) = 0.3, P(A ∩ B) = 0.2, P(B ∩ C) = 0.1, P(C ∩ A) = 0.1, and P(A ∩ B ∩ C) = 0.05, find P(A ∪ B ∪ C).

**Solution:**
Three-event Addition Rule:
P(A ∪ B ∪ C) = (0.4 + 0.5 + 0.3) - (0.2 + 0.1 + 0.1) + 0.05
= 1.2 - 0.4 + 0.05 = **0.85**.

Jaanch:
- Jaanch: 1.2 - 0.4 = 0.8, 0.8 + 0.05 = 0.85 ≤ 1 ✅

---

Ab tum Addition Theorem, Complement Rule, aur De Morgan's Laws ko poori tarah master kar chuke ho! Agle aur **Class 11 Mathematics ke aakhri topic** [probability-part4.md](probability-part4.md) mein hum Chapter 6 ke **Combinations (ⁿCᵣ)** aur Axiomatic Probability ko mila kar cards, committees, word anagrams, aur lottery problems solve karenge, aur poore chapter ka **Wrap-up Table** dekhenge!
