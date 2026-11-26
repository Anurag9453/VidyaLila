> **Class:** 12 | **Subject:** Mathematics | **Chapter 1:** Relations and Functions (Gehrai Mein — Advanced Level)

# Relations and Functions — Gehrai Mein (Advanced Level)

> **Core chapter se bridge:** Core lessons ([Part 1: Relations](relations-and-functions.md) se [Part 5: Mixed Problems](relations-and-functions-part5.md) tak) mein humne equivalence relations, bijections, inverses aur binary operations padhe. Ab competitive-exam depth mein hum **Counting Special Relations (Reflexive, Symmetric, Antisymmetric, Equivalence / Bell Numbers), Inclusion–Exclusion for Onto Functions, Functional Equations, aur Involution / Periodic Functions** cover karenge.

---

Navdeep ek maths olympiad combinatorics seminar mein baitha tha jahan speaker ne poocha: "Ek 4-element set A = {1, 2, 3, 4} par kitne **reflexive relations**, kitne **symmetric relations**, kitne **equivalence relations**, aur A se {a, b, c} par kitne **onto functions** ban sakte hain?" Navdeep ne dekha ki har ginti ke peeche ek khoobsurat matrix-grid aur Inclusion–Exclusion ka formula chhupa hai!

---

## 1. Counting Special Relations on an n-Element Set A

Represent any relation R on A (|A| = n) as an **n × n grid** (n diagonal entries (i, i) and n² − n off-diagonal entries forming n(n − 1)/2 symmetric pairs):

| Relation Type on |A| = n | Exact Count Formula | Value for n = 3 |
|---|---|---|
| Total relations | **2^(n²)** | 2⁹ = 512 |
| **Reflexive** (all n diagonal entries = 1) | **2^(n² − n)** | 2⁶ = 64 |
| **Symmetric** (choose n diagonals + n(n−1)/2 pairs) | **2^(n(n + 1)/2)** | 2⁶ = 64 |
| **Reflexive AND Symmetric** | **2^(n(n − 1)/2)** | 2³ = 8 |
| **Antisymmetric** (diagonal: 2 choices; each pair: 3 choices: (0,0), (1,0), (0,1)) | **2ⁿ × 3^(n(n − 1)/2)** | 8 × 27 = 216 |
| **Equivalence Relations** (Partitions = **Bell Number Bₙ**) | B₁=1, B₂=2, B₃=5, B₄=15, B₅=52 | **5** |

---

## 2. Counting Onto (Surjective) Functions — Principle of Inclusion–Exclusion (PIE)

For |A| = m and |B| = n (with **m ≥ n**):
Total functions = nᵐ. Subtract functions missing at least 1 element of B, add back those missing at least 2, etc.:

**Number of Onto Functions (A → B) = Σ_(k=0 to n) (−1)ᵏ × ⁿCₖ × (n − k)ᵐ**
= **nᵐ − ⁿC₁ (n − 1)ᵐ + ⁿC₂ (n − 2)ᵐ − ... + (−1)ⁿ⁻¹ ⁿCₙ₋₁ (1)ᵐ**

- **Special case m = n:** Reduces to **n!** (bijections!).
- **Special case m = n + 1:** Exactly one pair of elements in A collides → **ᵐC₂ × n! = [n(n + 1)/2] × n!**!

---

## 3. Functional Equations (Classic Olympiad / JEE Tools)

1. **Cauchy's Additive Equation:** f(x + y) = f(x) + f(y) (continuous on R) ⇒ **f(x) = kx** (where k = f(1)).
2. **Exponential Equation:** f(x + y) = f(x) · f(y) (non-zero, continuous) ⇒ **f(x) = aˣ**.
3. **Logarithmic Equation:** f(xy) = f(x) + f(y) (x, y > 0, continuous) ⇒ **f(x) = k ln x**.
4. **Power Equation:** f(xy) = f(x) · f(y) ⇒ **f(x) = xⁿ** (or 0).
5. **Polynomial Reciprocal Equation:** **f(x) · f(1/x) = f(x) + f(1/x)** for a polynomial f(x) ⇒ **f(x) = 1 ± xⁿ**!
6. **Substitution / Involution Trick:** Given **a f(x) + b f(1/x) = g(x)** (a ≠ ±b): replace x by 1/x to get a second linear equation in f(x) and f(1/x), then eliminate f(1/x)!

---

## 4. Periodic & Even/Odd Decomposition

- **Every function f(x) on a symmetric domain** decomposes uniquely into an **Even** part + **Odd** part:
  **f(x) = [f(x) + f(−x)] / 2  (Even)  +  [f(x) − f(−x)] / 2  (Odd)**
- **Periodic function:** f(x + T) = f(x); smallest positive T = fundamental period.
  - If f(x) has period T, then **f(ax + b)** has period **T / |a|**.
  - Period of {x} (fractional part) = **1**; |sin x| and |cos x| = **π**; sinⁿx (n even) = **π**, (n odd) = **2π**.

---

## Deep Solved Problems

### Problem 1: Counting Onto Functions via Inclusion–Exclusion
Find the number of onto functions from A = {1, 2, 3, 4, 5} (m = 5) to B = {a, b, c} (n = 3).

**Solution:**
Using PIE:
Onto = 3⁵ − ³C₁ (2⁵) + ³C₂ (1⁵)
= 243 − 3(32) + 3(1)
= 243 − 96 + 3 = **150**.

Jaanch: Partitioning 5 distinct items into 3 non-empty labelled boxes: (3,1,1) gives ⁵C₃×2!×3/2! = 60, and (2,2,1) gives [⁵C₂×³C₂/2!]×3! = 15×6 = 90; 60 + 90 = 150 ✅

---

### Problem 2: Solving a Functional Equation by x → 1/x Substitution
If **2 f(x) + 3 f(1/x) = x² − 1** for all x ≠ 0, find f(2).

**Solution:**
- Put x = 2: 2 f(2) + 3 f(1/2) = 4 − 1 = **3**   ... (1)
- Put x = 1/2: 2 f(1/2) + 3 f(2) = 1/4 − 1 = **−3/4**   ... (2)
Multiply (1) by 2 and (2) by 3 to eliminate f(1/2):
- 4 f(2) + 6 f(1/2) = 6
- 9 f(2) + 6 f(1/2) = −9/4
Subtract first from second:
5 f(2) = −9/4 − 6 = −33/4 → **f(2) = −33 / 20**.

Jaanch: From (1), 3 f(1/2) = 3 − 2(−33/20) = 3 + 33/10 = 63/10 → f(1/2) = 21/10. Check (2): 2(21/10) + 3(−33/20) = 84/20 − 99/20 = −15/20 = −3/4 ✅

---

### Problem 3: Polynomial Functional Equation f(x)f(1/x) = f(x) + f(1/x)
If f(x) is a polynomial satisfying f(x) · f(1/x) = f(x) + f(1/x) and f(3) = 28, find f(4).

**Solution:**
Standard solution of this polynomial functional equation is **f(x) = 1 ± xⁿ**.
Given f(3) = 28:
1 + 3ⁿ = 28 → 3ⁿ = 27 = 3³ → **n = 3**, so **f(x) = 1 + x³**!
Therefore, f(4) = 1 + 4³ = 1 + 64 = **65**.

Jaanch: Check f(x)f(1/x) = (1 + x³)(1 + 1/x³) = 1 + x³ + 1/x³ + 1 = (1 + x³) + (1 + 1/x³) = f(x) + f(1/x); f(3) = 28 ✅

---

### Problem 4: Counting Equivalence Relations on a 4-Element Set (Bell Number B₄)
How many equivalence relations can be defined on A = {1, 2, 3, 4}?

**Solution:**
Count all partitions of 4 distinct elements by block sizes:
- (4): **1** partition
- (3, 1): ⁴C₃ = **4** partitions
- (2, 2): (⁴C₂) / 2! = 6 / 2 = **3** partitions
- (2, 1, 1): ⁴C₂ = **6** partitions
- (1, 1, 1, 1): **1** partition
Total = 1 + 4 + 3 + 6 + 1 = **15 equivalence relations** (Bell number B₄ = 15)!

Jaanch: 1 + 4 + 3 + 6 + 1 = 15 ✅

---

### Problem 5: Periodicity from Functional Equation
If f(x + 2) + f(x − 2) = f(x) for all x ∈ R, find the period of f(x).

**Solution:**
Replace x by (x + 2): f(x + 4) + f(x) = f(x + 2).
Add the original equation f(x + 2) + f(x − 2) = f(x):
f(x + 4) + f(x) + f(x + 2) + f(x − 2) = f(x + 2) + f(x)
Cancel f(x) and f(x + 2) → **f(x + 4) = −f(x − 2)** ⇒ shift by +2: **f(x + 6) = −f(x)**!
Apply once more: **f(x + 12) = −f(x + 6) = −(−f(x)) = f(x)**!
Therefore, f(x) is periodic with **period T = 12**!

Jaanch: Test f(x) = cos(πx/6): cos(π(x+2)/6) + cos(π(x−2)/6) = 2 cos(πx/6) cos(π/3) = cos(πx/6) = f(x); period = 2π/(π/6) = 12 ✅

---

## Advanced Practice Questions

1. On a set A with 4 elements, find the number of: (a) reflexive relations, (b) symmetric relations, (c) relations that are BOTH reflexive and symmetric.
2. Find the number of onto functions from a set of 4 elements to a set of 3 elements.
3. If f(x) is a polynomial satisfying f(x) · f(1/x) = f(x) + f(1/x) and f(2) = −7, find f(3).
4. Solve for f(x): **3 f(x) + 2 f(−x) = 5x + 10**.
5. If f(x + y) = f(x) · f(y) for all real x, y and f(1) = 3, find the sum Σ_(k=1 to 4) f(k).
6. Find the fundamental period of: (a) f(x) = sin(3x) + cos(2x), (b) g(x) = |sin x| + |cos x|.
7. How many **strictly increasing** functions can be defined from A = {1, 2, 3} to B = {1, 2, 3, 4, 5, 6}?
8. Express f(x) = eˣ as the sum of an even function and an odd function.
9. If f(x) = (x − 1)/(x + 1), find f(f(f(f(x))))!
10. Find the number of binary operations on A = {1, 2, 3} that are **commutative**.

---

### Solutions

1. n = 4:
   (a) Reflexive = 2^(16 − 4) = 2¹² = **4096**.
   (b) Symmetric = 2^(4 × 5 / 2) = 2¹⁰ = **1024**.
   (c) Both reflexive & symmetric = 2^(4 × 3 / 2) = 2⁶ = **64**.
   Jaanch: 4096 = 2¹², 1024 = 2¹⁰, 64 = 2⁶ ✅
2. PIE (m = 4, n = 3): 3⁴ − ³C₁(2⁴) + ³C₂(1⁴) = 81 − 48 + 3 = **36** (also ⁴C₂ × 3! = 6 × 6 = 36!).
   Jaanch: 81 − 48 + 3 = 36 ✅
3. f(x) = 1 ± xⁿ. Since f(2) = −7 < 0: 1 − 2ⁿ = −7 ⇒ 2ⁿ = 8 ⇒ n = 3 → f(x) = 1 − x³.
   f(3) = 1 − 27 = **−26**.
   Jaanch: 1 − 2³ = −7; 1 − 3³ = −26 ✅
4. Replace x by −x: 3 f(−x) + 2 f(x) = −5x + 10.
   Multiply original by 3: 9 f(x) + 6 f(−x) = 15x + 30.
   Multiply second by 2: 4 f(x) + 6 f(−x) = −10x + 20.
   Subtract: 5 f(x) = 25x + 10 → **f(x) = 5x + 2**.
   Jaanch: 3(5x+2) + 2(−5x+2) = 15x + 6 − 10x + 4 = 5x + 10 ✅
5. f(x) = aˣ with f(1) = 3 ⇒ f(x) = 3ˣ.
   Sum = 3¹ + 3² + 3³ + 3⁴ = 3 + 9 + 27 + 81 = **120**.
   Jaanch: 3(3⁴ − 1)/(3 − 1) = 3(80)/2 = 120 ✅
6. (a) Period of sin(3x) = 2π/3; period of cos(2x) = π. LCM(2π/3, π) = **2π**.
   (b) |sin(x + π/2)| + |cos(x + π/2)| = |cos x| + |sin x| = g(x) → fundamental period = **π/2**!
7. Any subset of 3 elements from B can be arranged in **exactly ONE strictly increasing order** → ⁶C₃ = (6 × 5 × 4)/6 = **20**!
   Jaanch: ⁶C₃ = 20 ✅
8. **eˣ = (eˣ + e⁻ˣ)/2 (cosh x, even) + (eˣ − e⁻ˣ)/2 (sinh x, odd)**.
9. f(f(x)) = −1/x; f³(x) = (−1/x − 1)/(−1/x + 1) = (x + 1)/(1 − x); **f⁴(x) = x**!
   Jaanch: At x = 2: f(2) = 1/3 → f(1/3) = −1/2 → f(−1/2) = −3 → f(−3) = 2 ✅
10. A commutative n × n operation table is completely determined by the **n(n + 1)/2** entries on and above the diagonal, each having n choices → **n^(n(n + 1)/2)**. For n = 3: 3⁶ = **729**!
    Jaanch: n(n+1)/2 = 6; 3⁶ = 729 ✅

---

Wapas core chapter wrap-up par jaane ke liye dekho: [Mixed Problems & Chapter Wrap-up](relations-and-functions-part5.md).
