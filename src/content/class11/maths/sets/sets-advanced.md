# Chapter: Sets (Advanced — Gehrai Mein)

> **Class:** 11 | **Subject:** Mathematics | **Level:** Advanced (Gehrai Mein)
> **Core chapter yahan complete hua tha:** [sets-part5.md](sets-part5.md) (Topic 5: Sab Kuch Mila Kar aur Chapter Wrap-up). Agar tumne core topics (Parts 1–5) achhe se padh liye hain aur ab Set Theory ki asli gehrai — cardinality bounds, exact-k Venn formulas, 3ⁿ subset-pair counting, aur symmetric difference algebra — ko master karna chahte ho, to yeh file tumhare liye hai!
> **Advanced topics covered in this file:**
> 1. Min & Max Cardinality Bounds (2-Set & 3-Set), Exact-1 / Exact-2 / At-Least-2 Formulas, Ordered Pairs of Subsets (3ⁿ Technique), Aur Deep Symmetric Difference Algebra

---

# Gehrai Mein: Advanced Set Theory & Counting Techniques

Core chapter mein tumne 2-set aur 3-set surveys solve kiye jahan exact values di hoti thin. Lekin advanced mathematics mein aksar exact intersection nahi diya hota — balki poochha jata hai: "Kam se kam kitne percent log teeno cheezein pasand karte hain?" ya "Ek n-element set ke kitne ordered pairs (A, B) disjoint hote hain?"

In sawalon ko bina lamba diagram banaye 20 seconds mein todne ke liye hum chaar powerful advanced tools seekhenge!

---

## Darshan ka nationwide streaming-platform survey

Darshan ek media-analytics researcher hai. Ek survey report mein sirf do numbers aaye:
- 73% viewers cricket dekhte hain (Set A)
- 68% viewers movies dekhte hain (Set B)

Manager ne poochha: "Darshan, report mein yeh nahi likha ki dono (cricket AUR movies) kitne percent log dekhte hain — par kya tum iski **exact minimum aur maximum range** bata sakte ho?"

Darshan ne 5 second mein jawab diya:
"Maximum overlap chhote set se bada nahi ho sakta => **max = min(73%, 68%) = 68%**.
Aur minimum overlap tab aata hai jab union poora 100% bhar jaye => **min = 73% + 68% - 100% = 41%**!
Isliye dono dekhne wale viewers pakka **41% se 68%** ke beech hi honge!"

---

## Part A: Min & Max Cardinality Bounds (2-Set Aur 3-Set)

Maan lo A aur B finite universal set U ke subsets hain:

### 1. Two-Set Bounds ("Kyun"!)
Hum jaante hain: n(A ∪ B) = n(A) + n(B) - n(A ∩ B).
- **n(A ∪ B) ki range:**
  Union dono sets se bada/barabar aur U se chhota/barabar hota hai:
  **max(n(A), n(B)) ≤ n(A ∪ B) ≤ min(n(A) + n(B), n(U))**
- **n(A ∩ B) ki range:**
  Kyunki n(A ∩ B) = n(A) + n(B) - n(A ∪ B):
  - Intersection **maximum** tab hoga jab ek set poora doosre ke andar aa jaye: **min(n(A), n(B))**.
  - Intersection **minimum** tab hoga jab union sabse zyada phail kar n(U) ko chhoo le (aur kabhi negative nahi ho sakta): **max(0, n(A) + n(B) - n(U))**.
  **max(0, n(A) + n(B) - n(U)) ≤ n(A ∩ B) ≤ min(n(A), n(B))**

### 2. Three-Set Minimum Intersection Bound (Bonferroni / Pigeonhole Idea):
Teen subsets A, B, C ⊆ U ke liye:
n(A' ∪ B' ∪ C') ≤ n(A') + n(B') + n(C')
=> n(U) - n(A ∩ B ∩ C) ≤ [n(U) - n(A)] + [n(U) - n(B)] + [n(U) - n(C)]
Rearrange karne par:
**n(A ∩ B ∩ C) ≥ n(A) + n(B) + n(C) - 2 n(U)**   *(aur ≥ 0!)*

---

## Part B: Exact-1, Exact-2, Aur At-Least-2 Formulas (3 Sets)

3-set Venn diagram mein centre **n(A ∩ B ∩ C)** teeno pairwise intersections (A ∩ B, B ∩ C, C ∩ A) mein gina jata hai! Isliye:

1. **Exactly TWO of A, B, C:**
   Har pairwise intersection se centre ek baar ghatao => kul 3 baar ghatta hai!
   **n(exactly 2) = n(A ∩ B) + n(B ∩ C) + n(C ∩ A) - 3 n(A ∩ B ∩ C)**

2. **At least TWO of A, B, C (yaani exactly 2 + all 3):**
   **n(at least 2) = n(A ∩ B) + n(B ∩ C) + n(C ∩ A) - 2 n(A ∩ B ∩ C)**

3. **Exactly ONE of A, B, C:**
   **n(exactly 1) = n(A) + n(B) + n(C) - 2[n(A ∩ B) + n(B ∩ C) + n(C ∩ A)] + 3 n(A ∩ B ∩ C)**

---

## Part C: Ordered Pairs Of Subsets — The 3ⁿ Master Technique!

Maan lo set S mein **n elements** hain (n(S) = n). Hum S ke do subsets ka ek **ordered pair (A, B)** chunte hain.
Har ek element x ∈ S ke liye 4 possible compartments (Venn regions) hote hain:
1. x ∈ A aur x ∈ B  (in A ∩ B)
2. x ∈ A aur x ∉ B  (in A - B)
3. x ∉ A aur x ∈ B  (in B - A)
4. x ∉ A aur x ∉ B  (outside both)

Isliye total ordered pairs (A, B) = 4 × 4 × ... (n times) = **4ⁿ**.

Ab dekho **3ⁿ ka jaadoo** jab hum ek compartment ban (forbid) kar dete hain:
- **A ⊆ B:** Compartment (2) [in A, not in B] forbidden! Bache 3 choices per element => **3ⁿ ordered pairs**!
- **A ∩ B = φ (Disjoint):** Compartment (1) [in both] forbidden! Bache 3 choices per element => **3ⁿ ordered pairs**!
- **A ∪ B = S (Exhaustive):** Compartment (4) [outside both] forbidden! Bache 3 choices per element => **3ⁿ ordered pairs**!
- **n(A ∩ B) = k (Exact k common elements):** Pehle S mein se k common elements chuno (**ⁿCₖ** ways); baaki (n - k) elements mein se koi bhi A ∩ B mein nahi ja sakta (3 choices each) => **ⁿCₖ · 3ⁿ⁻ᵏ ordered pairs**!

---

## Part D: Deep Symmetric Difference (A Δ B) & Nested Power Sets

Recall: **A Δ B = (A - B) ∪ (B - A) = (A ∪ B) - (A ∩ B)**.
1. **Cardinality:** **n(A Δ B) = n(A) + n(B) - 2 n(A ∩ B)**.
2. **Algebraic Laws (XOR behavior!):**
   - Commutative: A Δ B = B Δ A
   - Associative: **(A Δ B) Δ C = A Δ (B Δ C)**  *(woh elements jo A, B, C mein ODD number of times — yaani 1 ya 3 baar — aate hain!)*
   - Identity & Self-Inverse: **A Δ φ = A** aur **A Δ A = φ**
   - **Cancellation Law:** Agar **A Δ B = A Δ C**, to dono taraf A Δ lagane par (A Δ A) Δ B = (A Δ A) Δ C => φ Δ B = φ Δ C => **B = C**!
3. **Nested Power Sets:**
   - n(P(A)) = 2ⁿ
   - n(P(P(A))) = 2^(2ⁿ)
   - For empty set φ (n = 0): n(P(φ)) = 2⁰ = 1, n(P(P(φ))) = 2¹ = 2, n(P(P(P(φ)))) = 2² = **4**!

---

## 6 Deep Advanced Solved Problems (Step-by-Step With Jaanch)

### Problem 1: 3-Set Minimum Intersection Percentage
**Sawaal:** Ek shahar mein 80% log tea, 75% log coffee, aur 70% log juice pasand karte hain. Kam se kam (minimum) aur zyada se zyada (maximum) kitne percent log **teeno** pasand karte hain?

**Solution:**
Yahan n(U) = 100, n(A) = 80, n(B) = 75, n(C) = 70.
1. **Minimum of n(A ∩ B ∩ C):**
   n(A ∩ B ∩ C) ≥ n(A) + n(B) + n(C) - 2 n(U)
   ≥ 80 + 75 + 70 - 2(100) = 225 - 200 = **25%**.
2. **Maximum of n(A ∩ B ∩ C):**
   Sabse chhote set se bada nahi ho sakta: min(80, 75, 70) = **70%**.

Range: **25% ≤ x ≤ 70%**.

Jaanch:
- Jaanch (attaining 25%): Complement sizes are 20% (not A), 25% (not B), 30% (not C). Make these three complements completely disjoint: 20 + 25 + 30 = 75% miss at least one drink => remaining 100 - 75 = 25% like ALL THREE ✅

---

### Problem 2: Exact-1 And Exact-2 In A 3-Club Survey
**Sawaal:** Ek college survey mein 40 students Robotics (R), 35 Coding (C), aur 30 Design (D) club mein hain. 15 students R aur C dono mein, 12 students C aur D dono mein, 10 students R aur D dono mein, aur 5 students teeno clubs mein hain. Gyat karo:
(a) Exactly 2 clubs mein kitne students hain?
(b) Exactly 1 club mein kitne students hain?

**Solution:**
Given: Σ n(A) = 40 + 35 + 30 = 105; Σ n(A ∩ B) = 15 + 12 + 10 = 37; n(R ∩ C ∩ D) = 5.
- **(a) Exactly 2 clubs:**
  37 - 3(5) = 37 - 15 = **22 students**.
- **(b) Exactly 1 club:**
  105 - 2(37) + 3(5) = 105 - 74 + 15 = **46 students**.

Jaanch:
- Jaanch: Total in at least 1 club = 46 (exact 1) + 22 (exact 2) + 5 (all 3) = 73; Inclusion-Exclusion check: 105 - 37 + 5 = 73 ✅

---

### Problem 3: Counting Ordered Pairs Of Subsets With Exact Intersection Size
**Sawaal:** Set S = {1, 2, 3, 4, 5} (n = 5) ke kitne ordered pairs of subsets (A, B) aise hain jinke liye:
(a) A ∩ B = φ   (b) n(A ∩ B) = 2   (c) A ∪ B = S aur A ∩ B = φ (complementary pairs)?

**Solution:**
- **(a) Disjoint pairs (A ∩ B = φ):** 3⁵ = **243**.
- **(b) n(A ∩ B) = 2:** Pehle 2 common elements chuno (⁵C₂ = 10 ways); baaki 3 elements ke liye 3 choices each (3³ = 27 ways) => 10 × 27 = **270**.
- **(c) A ∪ B = S aur A ∩ B = φ:** Iska matlab B = A' (har A ke liye unique B fix hai!) => har element ke liye sirf 2 choices (in A ya in B) => 2⁵ = **32**.

Jaanch:
- Jaanch: Sum of ⁵Cₖ · 3⁵⁻ᵏ for k = 0..5 = (3 + 1)⁵ = 4⁵ = 1024 (all possible ordered pairs!) ✅

---

### Problem 4: Unordered Disjoint Pairs {A, B} Of Subsets
**Sawaal:** Set S = {1, 2, 3, 4} (n = 4) ke kitne **unordered** pairs {A, B} of disjoint subsets (A ∩ B = φ) bana sakte hain?

**Solution:**
1. Total **ordered** disjoint pairs (A, B) = 3⁴ = **81**.
2. Inme se sirf **1 pair** aisa hai jahan A = B aur A ∩ B = φ — aur woh hai **(φ, φ)**!
3. Baaki 81 - 1 = **80** ordered pairs mein A ≠ B hai, isliye har unordered pair {A, B} do baar ((A, B) aur (B, A)) gina gaya hai!
4. Unordered disjoint pairs = (80 / 2) + 1 = 40 + 1 = **41** (general formula: **(3ⁿ + 1) / 2**!).

Jaanch:
- Jaanch: Check for n = 1 (S = {1}): ordered disjoint pairs = (φ, φ), ({1}, φ), (φ, {1}) (3); unordered = {φ, φ}, {{1}, φ} (2) = (3¹ + 1)/2 ✅

---

### Problem 5: Power Set Cardinality Equation
**Sawaal:** Do finite sets A aur B mein m aur k elements hain. Agar set A ke total subsets ki sankhya set B ke total subsets ki sankhya se **56 zyada** ho, to m aur k ki values gyat karo.

**Solution:**
Given: 2ᵐ - 2ᵏ = 56 (clearly m > k).
Factor out 2ᵏ:
2ᵏ (2ᵐ⁻ᵏ - 1) = 56 = 8 × 7 = 2³ × 7.

Kyunki 2ᵏ even (power of 2) hai aur (2ᵐ⁻ᵏ - 1) odd hai, prime factorization uniqueness se:
- 2ᵏ = 2³ => **k = 3**
- 2ᵐ⁻ᵏ - 1 = 7 => 2ᵐ⁻³ = 8 = 2³ => m - 3 = 3 => **m = 6**.

Jaanch:
- Jaanch: 2⁶ - 2³ = 64 - 8 = 56 ✅

---

### Problem 6: Proving An Identity Using Symmetric Difference Cancellation
**Sawaal:** Prove karo ki agar **A ∪ B = A ∪ C** aur **A ∩ B = A ∩ C** dono ek saath true hon, to **B = C** hona hi padega!

**Solution:**
**Method 1 (Using Symmetric Difference — 2-Line Magic!):**
Hum jaante hain A Δ B = (A ∪ B) - (A ∩ B).
Kyunki A ∪ B = A ∪ C aur A ∩ B = A ∩ C:
A Δ B = (A ∪ B) - (A ∩ B) = (A ∪ C) - (A ∩ C) = A Δ C!
Symmetric difference ke Cancellation Law se: **B = C**!

**Method 2 (Element-by-element):**
For any x ∈ B:
- If x ∈ A => x ∈ A ∩ B = A ∩ C => x ∈ C.
- If x ∉ A => x ∈ A ∪ B = A ∪ C, and since x ∉ A, x ∈ C!
Thus B ⊆ C. By symmetry C ⊆ B => **B = C**!

Jaanch:
- Jaanch: Note that ONLY A ∪ B = A ∪ C alone does NOT force B = C (e.g. A = {1, 2}, B = {1}, C = {2} -> both unions {1, 2}!), dono conditions ek saath zaroori hain ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: 3-set minimum intersection mein n(A) + n(B) + n(C) - n(U) likh dena
- **Galat soch:** "2 sets mein -n(U) hota hai, to 3 sets mein bhi n(A) + n(B) + n(C) - n(U) hoga."
- **Sahi samajh:** 3 sets ke liye **- 2 n(U)** hota hai: **n(A ∩ B ∩ C) ≥ n(A) + n(B) + n(C) - 2 n(U)**! (Aur k sets ke liye (k - 1) n(U) ghatate hain!)

### Galti 2: Ordered aur Unordered subset pairs ko mix kar dena
- **Galat soch:** "Unordered disjoint pairs bhi 3ⁿ hote hain."
- **Sahi samajh:** Ordered pairs (A, B) = 3ⁿ hote hain, jabki **unordered** disjoint pairs {A, B} = **(3ⁿ + 1) / 2** hote hain (kyunki (φ, φ) khud ka swap hai!).

### Galti 3: Exactly 2 of 3 sets mein sirf 1 baar n(A ∩ B ∩ C) ghatana
- **Galat soch:** "n(exactly 2) = n(A ∩ B) + n(B ∩ C) + n(C ∩ A) - n(A ∩ B ∩ C)."
- **Sahi samajh:** Centre A ∩ B ∩ C teeno pairs mein gina gaya hai (3 baar!), isliye "exactly 2" ke liye **- 3 n(A ∩ B ∩ C)** aur "at least 2" ke liye **- 2 n(A ∩ B ∩ C)** ghatana padta hai!

---

## Quick Recap

- **2-Set Intersection Bounds:** max(0, n(A) + n(B) - n(U)) ≤ n(A ∩ B) ≤ min(n(A), n(B)).
- **3-Set Min Intersection:** n(A ∩ B ∩ C) ≥ max(0, n(A) + n(B) + n(C) - 2 n(U)).
- **Exact-2 / At-least-2 / Exact-1:** Subtract 3×, 2× centre; Exact-1 = Σ n(A) - 2 Σ n(A ∩ B) + 3 n(A ∩ B ∩ C).
- **Ordered Subset Pairs:** A ⊆ B -> 3ⁿ; A ∩ B = φ -> 3ⁿ; A ∪ B = S -> 3ⁿ; n(A ∩ B) = k -> ⁿCₖ · 3ⁿ⁻ᵏ.
- **Unordered Disjoint Pairs:** (3ⁿ + 1) / 2.
- **Symmetric Difference:** Associative, A Δ A = φ, Cancellation Law holds!

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
In a town, 63% of people like cheese and 76% like apples. If x% like both cheese and apples, find the exact range of x.

**Solution:**
Min x = max(0, 63 + 76 - 100) = 139 - 100 = **39%**.
Max x = min(63, 76) = **63%**.
Range: **39 ≤ x ≤ 63**.

Jaanch:
- Jaanch: At x = 39%, union = 63 + 76 - 39 = 100%; at x = 63%, cheese set is completely inside apple set ✅

---

### Question 2
In a survey of 100 students, 85 passed Maths, 80 passed Physics, and 75 passed Chemistry. Find the minimum number of students who passed all three subjects.

**Solution:**
n(M ∩ P ∩ C) ≥ 85 + 80 + 75 - 2(100) = 240 - 200 = **40 students**.

Jaanch:
- Jaanch: Failed counts are 15, 20, 25; max total who failed at least one = 15 + 20 + 25 = 60 => min who passed all three = 100 - 60 = 40 ✅

---

### Question 3
Two finite sets have m and n elements. The total number of subsets of the first set is 112 more than the total number of subsets of the second set. Find m and n.

**Solution:**
2ᵐ - 2ⁿ = 112 => 2ⁿ(2ᵐ⁻ⁿ - 1) = 16 × 7 = 2⁴ × 7.
Equating even and odd factors:
2ⁿ = 2⁴ => **n = 4**; 2ᵐ⁻⁴ - 1 = 7 => 2ᵐ⁻⁴ = 8 => m - 4 = 3 => **m = 7**.

Jaanch:
- Jaanch: 2⁷ - 2⁴ = 128 - 16 = 112 ✅

---

### Question 4
For set S = {1, 2, 3, 4}, find the number of ordered pairs of subsets (A, B) such that A ∪ B = S.

**Solution:**
Each element of S has 3 choices: in A only, in B only, or in both A and B (outside both is forbidden).
Total ordered pairs = 3⁴ = **81**.

Jaanch:
- Jaanch: 3 × 3 × 3 × 3 = 81 ✅

---

### Question 5
For set S = {1, 2, 3, 4, 5, 6}, find the number of ordered pairs (A, B) such that n(A ∩ B) = 1.

**Solution:**
Choose the 1 common element in ⁶C₁ = 6 ways; each of the remaining 5 elements has 3 choices (not in both) => 3⁵ = 243 ways.
Total = 6 × 243 = **1,458**.

Jaanch:
- Jaanch: ⁶C₁ · 3⁵ = 6 × 243 = 1458 ✅

---

### Question 6
If A = {1, 2, 3, 4, 5} and B = {4, 5, 6, 7}, find n(A Δ B) and verify using n(A) + n(B) - 2 n(A ∩ B).

**Solution:**
A - B = {1, 2, 3}, B - A = {6, 7} => A Δ B = {1, 2, 3, 6, 7} => **n(A Δ B) = 5**.
Formula check: n(A) + n(B) - 2 n(A ∩ B) = 5 + 4 - 2(2) = **5**.

Jaanch:
- Jaanch: Both direct listing and formula give 5 ✅

---

### Question 7
Find the number of elements in P(P(P(φ))).

**Solution:**
- n(φ) = 0
- n(P(φ)) = 2⁰ = 1
- n(P(P(φ))) = 2¹ = 2
- n(P(P(P(φ)))) = 2² = **4**.

Jaanch:
- Jaanch: P(φ) = {φ}, P(P(φ)) = {φ, {φ}} (2 elements) => 2² = 4 subsets ✅

---

### Question 8
In a group of 60 students, 30 play Football, 25 play Hockey, and 20 play Tennis. 10 play Football & Hockey, 8 play Hockey & Tennis, 6 play Football & Tennis, and 4 play all three. Find how many students play (a) at least two games (b) none of the three games.

**Solution:**
- (a) At least 2 games = (10 + 8 + 6) - 2(4) = 24 - 8 = **16 students**.
- (b) At least 1 game = (30 + 25 + 20) - (10 + 8 + 6) + 4 = 75 - 24 + 4 = 55 students.
  None of the three = 60 - 55 = **5 students**.

Jaanch:
- Jaanch: Inclusion-Exclusion gives n(F ∪ H ∪ T) = 75 - 24 + 4 = 55; 60 - 55 = 5 play none ✅

---

### Question 9
Let S = {1, 2, 3, ..., 100}. How many numbers in S are divisible by 2 or 3, but NOT by 5?

**Solution:**
Let A = multiples of 2 (50), B = multiples of 3 (33), C = multiples of 5 (20).
- Divisible by 2 or 3: n(A ∪ B) = 50 + 33 - floor(100/6) = 83 - 16 = **67**.
- Among these, divisible by 5 means divisible by 10 OR 15:
  n((A ∪ B) ∩ C) = n(mult of 10) + n(mult of 15) - n(mult of 30) = 10 + 6 - 3 = **13**.
- Required count = 67 - 13 = **54**.

Jaanch:
- Jaanch: Multiples of 10 (10), 15 (6), 30 (3) => 10 + 6 - 3 = 13; 67 - 13 = 54 ✅

---

### Question 10
For sets A, B, C, if A Δ B = {1, 2, 3} and B Δ C = {2, 3, 4}, find A Δ C.

**Solution:**
Use associativity and B Δ B = φ:
A Δ C = (A Δ B) Δ (B Δ C) = {1, 2, 3} Δ {2, 3, 4}.
Common elements {2, 3} cancel out! Remaining: **{1, 4}**.

Jaanch:
- Jaanch: Test with A = {1}, B = {2, 3}, C = {4}: A Δ B = {1, 2, 3}, B Δ C = {2, 3, 4}, A Δ C = {1, 4} ✅

---

### Question 11
Find the number of ordered triplets of subsets (A, B, C) of an n-element set S such that A ⊆ B ⊆ C ⊆ S.

**Solution:**
Every element x ∈ S has exactly **4 choices**:
(1) in A, (2) in B - A, (3) in C - B, or (4) outside C!
Therefore, total ordered triplets = **4ⁿ**.

Jaanch:
- Jaanch: For n = 1 (S = {1}): (φ, φ, φ), (φ, φ, {1}), (φ, {1}, {1}), ({1}, {1}, {1}) => 4 = 4¹ ✅

---

### Question 12
If A = {x ∈ R : x² - 5x + 6 = 0}, B = {x ∈ R : x² - 3x + 2 = 0}, and C = {x ∈ R : x² - 4x + 3 = 0}, find (A Δ B) Δ C.

**Solution:**
Factor each quadratic:
- A = {2, 3}
- B = {1, 2}
- C = {1, 3}
First A Δ B = {1, 3}.
Then (A Δ B) Δ C = {1, 3} Δ {1, 3} = **φ** (empty set — every element {1, 2, 3} appeared an EVEN number of times: twice!).

Jaanch:
- Jaanch: Each of 1, 2, 3 appears in exactly 2 of the 3 sets (even count) => symmetric difference is φ ✅

---

Ab tumne **Sets** ki advanced mastery — cardinality bounds, exact-k Venn formulas, 3ⁿ subset-pair counting, aur symmetric difference algebra — ko poori tarah master kar liya hai! Agle chapters ke advanced files mein hum isi gehrai ke saath aage badhenge!
