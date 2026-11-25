# Chapter: Probability (Advanced — Gehrai Mein)

> **Class:** 11 | **Subject:** Mathematics | **Level:** Advanced (Gehrai Mein)
> **Core chapter yahan complete hua tha:** [probability-part4.md](probability-part4.md) (Topic 4: Sab Kuch Mila Kar aur Chapter Wrap-up). Is advanced file mein hum Odds in Favour & Against, Geometric Probability (Continuous Length/Area Ratios), Boole/Bonferroni Probability Bounds, aur Combinatorial Derangement & Subset-Pair Probabilities ko gehrai se master karenge!
> **Advanced topics covered in this file:**
> 1. Odds in Favour & Odds Against, Geometric Probability (Meeting-Time & Area Problems), Boole & Bonferroni Probability Bounds, Aur Derangement & Subset-Pair Probabilities

---

# Gehrai Mein: Geometric Probability, Odds, Bounds, Aur Deep Combinatorics

Core chapter mein tumne finite sample spaces, axioms, Addition Theorem, aur ⁿCᵣ probabilities seekhi thin. Lekin tab kya hota hai jab sample space **infinite aur continuous** ho — jaise do dost 2:00 se 3:00 PM ke beech kisi bhi random second par cafe pahunchein aur har koi sirf 15 minute intezaar kare? Wahan counting nahi, **Geometric Probability (Area / Total Area)** chalti hai! Chalo in chaar advanced weapons ko master karte hain!

---

## Falak ka autonomous delivery-drone rendezvous

Falak ek autonomous drone-delivery startup mein simulation engineer hai. Do drones A aur B ek charging pad par 10:00 se 11:00 AM (60-minute window) ke beech kisi bhi random time x aur y par pahunchte hain. Har drone sirf **15 minute** wait karta hai!

Falak ne 60 × 60 ka ek square banaya (total area = 3600):
- Drones tab milenge jab **|x - y| ≤ 15** ho!
- Na milne wale do corner triangles ke sides 45 × 45 hain => unka combined area = 2 × (1/2)(45)(45) = 2025!
- Milane ka area = 3600 - 2025 = 1575 => **Probability = 1575 / 3600 = 7/16 = 43.75%**!

---

## Part A: Odds In Favour & Odds Against

Agar kisi event A ki probability P(A) = p aur P(A') = 1 - p = q ho:
- **Odds in favour of A** = **P(A) : P(A') = m : n**  =>  **P(A) = m / (m + n)**!
- **Odds against A** = **P(A') : P(A) = n : m**  =>  **P(A) = m / (m + n)**!

*(Dhyan do: "Odds in favour are 3 : 5" ka matlab P(A) = 3/5 NAHI, balki **P(A) = 3 / (3 + 5) = 3/8** hota hai!)*

---

## Part B: Geometric Probability (Continuous Sample Spaces)

Jab koi point kisi finite 1D interval, 2D region, ya 3D volume mein **uniformly at random** chuna jaye:
**P(E) = Measure(Favourable Region) / Measure(Total Region)**
(1D mein Length ratio, 2D mein Area ratio, 3D mein Volume ratio!)

---

## Part C: Boole's & Bonferroni's Probability Bounds

Exact intersection na pata hone par bhi hum pakke bounds likh sakte hain:
1. **Boole's Inequality (Union Bound):** **P(A ∪ B) ≤ P(A) + P(B)** (aur k events ke liye P(∪ Aᵢ) ≤ Σ P(Aᵢ)).
2. **Two-Event Intersection Bounds:**
   **max(0, P(A) + P(B) - 1) ≤ P(A ∩ B) ≤ min(P(A), P(B))**
3. **Three-Event Intersection Lower Bound:**
   **P(A ∩ B ∩ C) ≥ max(0, P(A) + P(B) + P(C) - 2)**

---

## Part D: Deep Combinatorial Probabilities

1. **Derangement Probability:** n letters randomly n envelopes mein daalne par kisi ka bhi sahi jagah na jaane ki probability:
   **P(derangement) = Dₙ / n! = 1 - 1/1! + 1/2! - 1/3! + ... + (-1)ⁿ / n!**
   *(n = 3 -> 2/6 = 1/3; n = 4 -> 9/24 = 3/8; n = 5 -> 44/120 = 11/30!)*
2. **Random Subset-Pair Probability** (Chapter 1 Advanced connection!):
   Agar n-element set S se do subsets A aur B randomly (independently, ordered) chune jayein (total 4ⁿ pairs):
   - **P(A ∩ B = φ) = 3ⁿ / 4ⁿ = (3/4)ⁿ**
   - **P(A ⊆ B) = (3/4)ⁿ**
   - **P(A ∪ B = S) = (3/4)ⁿ**!

---

## 6 Deep Advanced Solved Problems (Step-by-Step With Jaanch)

### Problem 1: Odds In Favour & Mutually Exclusive Events
**Sawaal:** Ek horse race mein 3 ghode A, B, C daud rahe hain (tie impossible hai). Horse A ke jeetne ke **odds in favour 1 : 3** hain aur Horse B ke jeetne ke **odds against 4 : 1** hain. Horse C ke jeetne ki probability gyat karo.

**Solution:**
- Horse A (odds in favour 1 : 3): P(A) = 1 / (1 + 3) = **1/4**.
- Horse B (odds against 4 : 1 => odds in favour 1 : 4): P(B) = 1 / (4 + 1) = **1/5**.
- Kyunki A, B, C mutually exclusive aur exhaustive hain:
  P(C) = 1 - P(A) - P(B) = 1 - 1/4 - 1/5 = 1 - 9/20 = **11/20**!

Jaanch:
- Jaanch: 1/4 + 1/5 + 11/20 = 5/20 + 4/20 + 11/20 = 20/20 = 1 ✅

---

### Problem 2: Geometric Probability — Random Point Inside A Square
**Sawaal:** Side 2a wale ek square ke andar ek point P uniformly at random chuna jata hai. Kya probability hai ki P, square ke andar bane sabse bade **inscribed circle** ke andar pade?

**Solution:**
- Total area (square of side 2a) = **(2a)² = 4a²**.
- Inscribed circle ka radius = a => Favourable area = **π a²**.

P(inside circle) = (π a²) / (4a²) = **π / 4** (approx 78.54%)!

Jaanch:
- Jaanch: 0 < π/4 ≈ 0.7854 < 1, aur independent of a ✅

---

### Problem 3: Geometric Probability — Quadratic Has Real Roots!
**Sawaal:** Real number **b** ko interval **[0, 4]** se uniformly at random chuna jata hai. Kya probability hai ki quadratic equation **x² + bx + 1 = 0** ke **real roots** hon?

**Solution:**
Real roots ke liye Discriminant D ≥ 0:
b² - 4(1)(1) ≥ 0 => b² ≥ 4 => **b ≥ 2** (since b ∈ [0, 4]!).

- Favourable interval: [2, 4] => Length = 4 - 2 = **2**.
- Total interval: [0, 4] => Length = **4**.

Probability = 2 / 4 = **1/2**!

Jaanch:
- Jaanch: Half of [0, 4] satisfies b ≥ 2 => 1/2 ✅

---

### Problem 4: Probability Bounds (Exact Range Of P(A ∩ B))
**Sawaal:** Agar P(A) = 3/4 aur P(B) = 5/8 ho, to P(A ∩ B) ki exact minimum aur maximum possible values gyat karo.

**Solution:**
- **Minimum:** max(0, P(A) + P(B) - 1) = max(0, 6/8 + 5/8 - 8/8) = **3/8**.
- **Maximum:** min(P(A), P(B)) = min(6/8, 5/8) = **5/8**.

Range: **3/8 ≤ P(A ∩ B) ≤ 5/8**!

Jaanch:
- Jaanch: At P(A ∩ B) = 3/8, P(A ∪ B) = 6/8 + 5/8 - 3/8 = 1; at 5/8, B ⊆ A ✅

---

### Problem 5: Random Subset-Pair Probability
**Sawaal:** Set S = {1, 2, 3, 4} se do subsets A aur B independently aur randomly chune jaate hain (ordered pair). Kya probability hai ki A aur B **disjoint (A ∩ B = φ)** hon?

**Solution:**
- Total ordered pairs (A, B) = 4⁴ = **256**.
- Disjoint ordered pairs (A ∩ B = φ) = 3⁴ = **81**.

Probability = **81 / 256** = (3/4)⁴!

Jaanch:
- Jaanch: Each of the 4 elements independently avoids (A ∩ B) with probability 3/4 => (3/4)⁴ = 81/256 ✅

---

### Problem 6: Three-Number Sum Divisible By 3 (Combinatorics + Modular Classes)
**Sawaal:** Set {1, 2, 3, ..., 9} se 3 distinct numbers randomly chune jaate hain. Kya probability hai ki unka **sum 3 se divisible** ho?

**Solution:**
Numbers ko mod 3 ke teen equal groups mein baanto (3 numbers each!):
- Group 0 (rem 0): {3, 6, 9}
- Group 1 (rem 1): {1, 4, 7}
- Group 2 (rem 2): {2, 5, 8}

Sum 3 se divisible sirf 4 tareekon se hota hai:
- Teeno Group 0 se: ³C₃ = 1
- Teeno Group 1 se: ³C₃ = 1
- Teeno Group 2 se: ³C₃ = 1
- Ek har group se (0 + 1 + 2 = 3): ³C₁ × ³C₁ × ³C₁ = 27!

Favourable ways = 1 + 1 + 1 + 27 = **30**.
Total ways = ⁹C₃ = (9 × 8 × 7)/6 = **84**.
Probability = 30 / 84 = **5 / 14**!

Jaanch:
- Jaanch: 30/84 = 5/14 (slightly above 1/3 because the 3 pure-group triples boost remainder 0!) ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: "Odds in favour are 3 : 5" ko P(A) = 3/5 padh lena
- **Galat soch:** "Odds 3 : 5 matlab probability 3/5."
- **Sahi samajh:** Odds **favourable : unfavourable** ka ratio hai! Total parts = 3 + 5 = 8 => **P(A) = 3/8**!

### Galti 2: "Odds against are 4 : 1" mein P(A) = 4/5 likh dena
- **Galat soch:** "Pehla number 4 hai to P(A) = 4/5."
- **Sahi samajh:** Odds **AGAINST** mein pehla number **unfavourable (P(A'))** hota hai! Isliye P(A') = 4/5 aur **P(A) = 1/5**!

### Galti 3: Continuous geometric probability mein single point ko non-zero probability de dena
- **Galat soch:** "Interval [0, 4] par P(b ≥ 2) aur P(b > 2) alag-alag honge."
- **Sahi samajh:** Continuous length measure mein ek single point {2} ki length **0** hoti hai, isliye P(b ≥ 2) = P(b > 2) = **1/2**!

---

## Quick Recap

- **Odds:** In favour m : n => P(A) = m/(m + n); Against n : m => P(A) = m/(m + n).
- **Geometric Probability:** Favourable Length/Area ÷ Total Length/Area.
- **Bounds:** max(0, P(A) + P(B) - 1) ≤ P(A ∩ B) ≤ min(P(A), P(B)); P(A ∩ B ∩ C) ≥ P(A) + P(B) + P(C) - 2.
- **Derangement Probability:** Dₙ / n! (n = 3 -> 1/3, n = 4 -> 3/8, n = 5 -> 11/30).
- **Random Subset Pairs:** P(A ∩ B = φ) = P(A ⊆ B) = P(A ∪ B = S) = (3/4)ⁿ.

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
If the odds in favour of an event A are 5 : 7, find P(A) and P(A').

**Solution:**
P(A) = 5 / (5 + 7) = **5/12**; P(A') = 7 / 12.

Jaanch:
- Jaanch: 5/12 + 7/12 = 1 ✅

---

### Question 2
If P(E) = 4/9, find the odds in favour of E and the odds against E.

**Solution:**
P(E') = 5/9.
- Odds in favour = (4/9) : (5/9) = **4 : 5**.
- Odds against = **5 : 4**.

Jaanch:
- Jaanch: 4/(4 + 5) = 4/9 ✅

---

### Question 3
A point is chosen uniformly at random from the interval [0, 10]. Find the probability that it lies in [2, 5].

**Solution:**
Favourable length = 5 - 2 = 3; Total length = 10.
Probability = **3/10**.

Jaanch:
- Jaanch: 3/10 = 0.3 ✅

---

### Question 4
A real number c is chosen uniformly at random from [0, 6]. Find the probability that x² + 4x + c = 0 has real roots.

**Solution:**
Real roots <=> D = 16 - 4c ≥ 0 <=> **c ≤ 4**.
Favourable interval [0, 4] (length 4) out of [0, 6] (length 6) => 4/6 = **2/3**.

Jaanch:
- Jaanch: 4/6 = 2/3 ✅

---

### Question 5
A dart hits a circular target of radius 10 cm uniformly at random. What is the probability that it lands within 4 cm of the centre?

**Solution:**
Favourable area = π(4²) = 16π; Total area = π(10²) = 100π.
Probability = 16π / 100π = **4/25 = 0.16**.

Jaanch:
- Jaanch: Area ratio = (r₁/r₂)² = (4/10)² = 16/100 = 4/25 ✅

---

### Question 6
If P(A) = 0.7, P(B) = 0.8, and P(C) = 0.9, find the minimum possible value of P(A ∩ B ∩ C).

**Solution:**
P(A ∩ B ∩ C) ≥ P(A) + P(B) + P(C) - 2 = 0.7 + 0.8 + 0.9 - 2 = 2.4 - 2 = **0.4**.

Jaanch:
- Jaanch: P(A') = 0.3, P(B') = 0.2, P(C') = 0.1 => max union of complements = 0.6 => min intersection = 1 - 0.6 = 0.4 ✅

---

### Question 7
Four letters are randomly placed into 4 addressed envelopes. Find the probability that NO letter goes into its correct envelope.

**Solution:**
D₄ = 9, total = 4! = 24.
P = 9 / 24 = **3/8**.

Jaanch:
- Jaanch: 1 - 1 + 1/2 - 1/6 + 1/24 = 9/24 = 3/8 ✅

---

### Question 8
Two subsets A and B of S = {1, 2, 3} are chosen independently at random (ordered). Find the probability that A ⊆ B.

**Solution:**
Total ordered pairs = 4³ = 64; pairs with A ⊆ B = 3³ = 27.
P = **27/64** = (3/4)³.

Jaanch:
- Jaanch: (3/4)³ = 27/64 ✅

---

### Question 9
Two numbers are chosen at random from {1, 2, 3, ..., 6} without replacement. Find the probability that their sum is divisible by 3.

**Solution:**
Mod 3 groups (2 each): {3, 6}, {1, 4}, {2, 5}.
Sum divisible by 3: both from {3, 6} (²C₂ = 1) OR one from {1, 4} and one from {2, 5} (2 × 2 = 4).
Favourable = 1 + 4 = **5**; Total = ⁶C₂ = **15**.
P = 5 / 15 = **1/3**.

Jaanch:
- Jaanch: Pairs: (3,6), (1,2), (1,5), (4,2), (4,5) = 5 pairs out of 15 => 1/3 ✅

---

### Question 10
Two friends arrive at a bus stop independently at random times between 8:00 AM and 8:30 AM (30-minute window). Each waits for 10 minutes. Find the probability that they meet.

**Solution:**
Total square area = 30 × 30 = 900.
Non-meeting corners are two right triangles of legs (30 - 10) = 20 each => combined area = 2 × (1/2)(20)(20) = 400.
Meeting area = 900 - 400 = 500.
P(meet) = 500 / 900 = **5/9**.

Jaanch:
- Jaanch: General formula 1 - (1 - w/T)² = 1 - (1 - 1/3)² = 1 - 4/9 = 5/9 ✅

---

### Question 11
If P(A) = 0.6 and P(B) = 0.8, can P(A ∩ B) be equal to 0.3? Explain why or why not.

**Solution:**
Minimum possible P(A ∩ B) = P(A) + P(B) - 1 = 0.6 + 0.8 - 1 = **0.4**!
Since 0.3 < 0.4 (which would force P(A ∪ B) = 1.1 > 1!), P(A ∩ B) = 0.3 is **IMPOSSIBLE**!

Jaanch:
- Jaanch: 0.6 + 0.8 - 0.3 = 1.1 > 1 (violates Axiom 1!) ✅

---

### Question 12
Five people are seated at random around a circular table. Find the probability that two particular people A and B sit next to each other.

**Solution:**
Total circular arrangements = (5 - 1)! = 4! = **24**.
Tie A and B together (4 entities around circle -> 3! = 6, internal swap 2! = 2) => favourable = 6 × 2 = **12**.
P = 12 / 24 = **1/2**.

Jaanch:
- Jaanch: Fix A; out of the 4 remaining seats, 2 are adjacent to A => 2/4 = 1/2 ✅

---

**Shabash! Tumne Class 11 Mathematics ke sabhi 14 chapters ke Core aur Advanced ("Gehrai Mein") — dono levels — poori tarah master kar liye hain!**
