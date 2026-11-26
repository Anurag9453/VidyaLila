> **Class:** 12 | **Subject:** Mathematics | **Chapter 2:** Inverse Trigonometric Functions (Gehrai Mein — Advanced Level)

# Inverse Trigonometric Functions — Gehrai Mein (Advanced Level)

> **Core chapter se bridge:** Core lessons ([Part 1: Domain & Range](inverse-trigonometric-functions.md) se [Part 4: Mixed Problems](inverse-trigonometric-functions-part4.md) tak) mein humne principal branches, identities aur equations padhe. Ab competitive-exam depth mein hum **Complete Piecewise Graphs of sin⁻¹(sin x) & cos⁻¹(cos x), Full tan⁻¹x + tan⁻¹y Formula (Including xy > 1), Telescoping ITF Series, aur ITF Inequalities** cover karenge.

---

Punit ek calculus-prep workshop mein ek infinite series dekh raha tha: **tan⁻¹(1/3) + tan⁻¹(1/7) + tan⁻¹(1/13) + tan⁻¹(1/21) + ...** — dekhne mein lagta tha ki yeh sum kabhi nahi niklega! Par jaise hi Punit ne har term ko **tan⁻¹(r + 1) − tan⁻¹(r)** mein toda, beech ke saare terms aapas mein kat gaye (**Telescoping Series!**) aur infinite sum sirf **π/4** nikal aaya!

---

## 1. Exact Piecewise Graphs: sin⁻¹(sin x), cos⁻¹(cos x), tan⁻¹(tan x)

1. **y = sin⁻¹(sin x)** — periodic with period **2π**, sawtooth wave oscillating between −π/2 and +π/2:
   - x ∈ [−π/2, π/2]: **y = x**
   - x ∈ [π/2, 3π/2]: **y = π − x**
   - x ∈ [3π/2, 5π/2]: **y = x − 2π**
   - x ∈ [5π/2, 7π/2]: **y = 3π − x**
   *(Shortcut: At any real x, find nearest integer multiple of π: if nπ is **even**, y = x − nπ; if nπ is **odd**, y = nπ − x!)*

2. **y = cos⁻¹(cos x)** — periodic with period **2π**, sawtooth wave between 0 and π:
   - x ∈ [0, π]: **y = x**
   - x ∈ [π, 2π]: **y = 2π − x**
   - x ∈ [2π, 3π]: **y = x − 2π**
   - x ∈ [−π, 0]: **y = −x**

3. **y = tan⁻¹(tan x)** — periodic with period **π**, straight lines of slope +1 with breaks at odd multiples of π/2:
   - x ∈ (nπ − π/2, nπ + π/2): **y = x − nπ**!

---

## 2. Complete Formula for tan⁻¹x + tan⁻¹y (All Cases!)

For **x > 0, y > 0**:
- If **xy < 1:** tan⁻¹x + tan⁻¹y = **tan⁻¹[ (x + y) / (1 − xy) ]**
- If **xy = 1:** tan⁻¹x + tan⁻¹y = **π/2**
- If **xy > 1:** tan⁻¹x + tan⁻¹y = **π + tan⁻¹[ (x + y) / (1 − xy) ]**

For **x < 0, y < 0** and **xy > 1:**
- tan⁻¹x + tan⁻¹y = **−π + tan⁻¹[ (x + y) / (1 − xy) ]**!

### Complete Formula for 2 tan⁻¹x (All x ∈ R!):
- For **sin⁻¹[2x/(1+x²)]**:
  - |x| ≤ 1: **2 tan⁻¹x**
  - x > 1: **π − 2 tan⁻¹x**
  - x < −1: **−π − 2 tan⁻¹x**
- For **cos⁻¹[(1−x²)/(1+x²)]**:
  - x ≥ 0: **2 tan⁻¹x**
  - x < 0: **−2 tan⁻¹x**

---

## 3. Telescoping ITF Series (Difference Method)

To sum **Σ tan⁻¹(T_r)**, rewrite each term T_r in the form **(A − B) / (1 + AB)** so that:
**tan⁻¹[ (A − B) / (1 + AB) ] = tan⁻¹(A) − tan⁻¹(B)**!
Most famous pattern: **1 / (1 + r + r²) = [ (r + 1) − r ] / [ 1 + r(r + 1) ]**
⇒ **tan⁻¹[ 1 / (1 + r + r²) ] = tan⁻¹(r + 1) − tan⁻¹(r)**!

---

## 4. Solving ITF Inequalities (Monotonicity Rules!)

- **Strictly Increasing (Keep inequality sign!):** sin⁻¹x, tan⁻¹x
  - sin⁻¹x > sin⁻¹y ⇔ **x > y** (within [−1, 1])
  - tan⁻¹x > tan⁻¹y ⇔ **x > y** (for all x, y ∈ R)
- **Strictly Decreasing (REVERSE inequality sign!):** cos⁻¹x, cot⁻¹x
  - cos⁻¹x > cos⁻¹y ⇔ **x < y** (within [−1, 1])!
  - cot⁻¹x > cot⁻¹y ⇔ **x < y**!

---

## Deep Solved Problems

### Problem 1: Evaluating sin⁻¹(sin 10) + cos⁻¹(cos 10)
Find the exact value of **sin⁻¹(sin 10) + cos⁻¹(cos 10)** (where 10 is in radians!).

**Solution:**
Recall π ≈ 3.1416, so **3π ≈ 9.4248** and **4π ≈ 12.5664**.
Thus 10 lies in **(3π, 7π/2)** (since 7π/2 ≈ 10.9956):
- For **sin⁻¹(sin 10):** Nearest integer multiple of π is **3π** (odd!) → **3π − 10**!
  *(Check: 3π − 10 ≈ −0.575 ∈ [−1.57, 1.57]!)*
- For **cos⁻¹(cos 10):** 10 ∈ [3π, 4π] → **4π − 10**!
  *(Check: 4π − 10 ≈ 2.566 ∈ [0, 3.14]!)*
Sum = (3π − 10) + (4π − 10) = **7π − 20**!

Jaanch: 7π − 20 ≈ 21.991 − 20 = 1.991 rad = −0.575 + 2.566 ✅

---

### Problem 2: Telescoping Infinite Series
Evaluate the infinite sum: **S = Σ_(r=1 to ∞) tan⁻¹[ 1 / (1 + r + r²) ]**.

**Solution:**
Rewrite the general term:
T_r = tan⁻¹[ (r + 1 − r) / (1 + r(r + 1)) ] = **tan⁻¹(r + 1) − tan⁻¹(r)**.
Sum from r = 1 to n:
S_n = [tan⁻¹(2) − tan⁻¹(1)] + [tan⁻¹(3) − tan⁻¹(2)] + ... + [tan⁻¹(n + 1) − tan⁻¹(n)]
= **tan⁻¹(n + 1) − tan⁻¹(1)**.
As n → ∞, tan⁻¹(n + 1) → π/2, and tan⁻¹(1) = π/4:
S_∞ = π/2 − π/4 = **π/4**!

Jaanch: First few terms: tan⁻¹(1/3) + tan⁻¹(1/7) + tan⁻¹(1/13) = 0.3218 + 0.1419 + 0.0768 = 0.5405 → converges steadily to π/4 ≈ 0.7854 ✅

---

### Problem 3: Evaluating tan⁻¹(1) + tan⁻¹(2) + tan⁻¹(3)
Prove that **tan⁻¹(1) + tan⁻¹(2) + tan⁻¹(3) = π**.

**Solution:**
First add tan⁻¹(2) + tan⁻¹(3). Here x = 2 > 0, y = 3 > 0, and **xy = 6 > 1**!
Using the xy > 1 formula:
tan⁻¹(2) + tan⁻¹(3) = **π + tan⁻¹[ (2 + 3) / (1 − 6) ]** = π + tan⁻¹(5 / −5) = π + tan⁻¹(−1) = π − π/4 = **3π/4**.
Now add tan⁻¹(1) = π/4:
π/4 + 3π/4 = **π**!

Jaanch: 45° + 63.43° + 71.57° = 180° = π ✅

---

### Problem 4: Solving an ITF Inequality
Solve for x: **cot⁻¹(x) > π/3**.

**Solution:**
Recall cot⁻¹(x) is **strictly decreasing** on R with range (0, π), and cot(π/3) = 1/√3.
Since cot⁻¹(x) > π/3 = cot⁻¹(1/√3), reversing the inequality gives:
**x < 1/√3** → **x ∈ (−∞, 1/√3)**!

Jaanch: At x = 0 (< 1/√3), cot⁻¹(0) = π/2 > π/3 (True!); at x = 1 (> 1/√3), cot⁻¹(1) = π/4 < π/3 (False!) ✅

---

### Problem 5: Range of (sin⁻¹x)² + (cos⁻¹x)²
Find the minimum and maximum values of **f(x) = (sin⁻¹x)² + (cos⁻¹x)²** for x ∈ [−1, 1].

**Solution:**
Use a² + b² = (a + b)² − 2ab with a = sin⁻¹x and b = cos⁻¹x (where a + b = π/2):
Let t = sin⁻¹x ∈ [−π/2, π/2]. Then cos⁻¹x = π/2 − t.
f(t) = t² + (π/2 − t)² = 2t² − πt + π²/4
Complete the square:
**f(t) = 2(t − π/4)² + π²/8**!
- **Minimum value:** Occurs at t = π/4 (x = 1/√2) → **f_min = π²/8**!
- **Maximum value:** Since t ∈ [−π/2, π/2], the farthest point from π/4 is **t = −π/2** (x = −1):
  f(−π/2) = (−π/2)² + (π)² = π²/4 + π² = **5π²/4**!

Jaanch: At t = −π/2: 2(−3π/4)² + π²/8 = 2(9π²/16) + π²/8 = 9π²/8 + π²/8 = 10π²/8 = 5π²/4 ✅

---

## Advanced Practice Questions

1. Evaluate: **sin⁻¹(sin 5) + cos⁻¹(cos 5)** (in radians).
2. Evaluate: **tan⁻¹(tan 4) + cot⁻¹(cot 4)** (in radians).
3. Find the exact sum of the infinite series: **Σ_(r=1 to ∞) tan⁻¹[ 1 / (2r²) ]**.
4. Evaluate: **sin⁻¹[ 2x / (1 + x²) ]** when **x = 2** (express in terms of tan⁻¹(2)).
5. Solve the inequality: **cos⁻¹(x) > sin⁻¹(x)** for x ∈ [−1, 1].
6. Find the number of real solutions of the equation **sin⁻¹(x) + sin⁻¹(2x) = π/3**.
7. Evaluate: **tan⁻¹(3) + tan⁻¹(4)** (give exact form with π).
8. Find the domain and range of **f(x) = sin⁻¹(sin x) + cos⁻¹(cos x)** on x ∈ [0, 2π].
9. Solve for x: **(tan⁻¹x)² + (cot⁻¹x)² = 5π²/8**.
10. Evaluate: **cos[ 2 cos⁻¹(1/5) + sin⁻¹(1/5) ]**.

---

### Solutions

1. 5 rad lies in [3π/2, 2π] (4.71 < 5 < 6.28):
   - sin⁻¹(sin 5) = **5 − 2π** (≈ −1.28 ∈ [−1.57, 1.57]).
   - cos⁻¹(cos 5) = **2π − 5** (≈ 1.28 ∈ [0, 3.14]).
   Sum = (5 − 2π) + (2π − 5) = **0**!
   Jaanch: (5 − 2π) + (2π − 5) = 0 ✅
2. 4 rad lies in (π, 3π/2) (3.14 < 4 < 4.71):
   - tan⁻¹(tan 4) = **4 − π** (≈ 0.86 ∈ (−1.57, 1.57)).
   - cot⁻¹(cot 4) = **4 − π** (≈ 0.86 ∈ (0, 3.14)).
   Sum = **8 − 2π**!
3. Rewrite 1/(2r²) = 2/(4r²) = [(2r + 1) − (2r − 1)] / [1 + (2r − 1)(2r + 1)]:
   T_r = **tan⁻¹(2r + 1) − tan⁻¹(2r − 1)**!
   Sum from r = 1 to ∞: tan⁻¹(∞) − tan⁻¹(1) = π/2 − π/4 = **π/4**!
   Jaanch: Check r = 1: (3 − 1)/(1 + 3) = 2/4 = 1/2 = 1/(2×1²); Check r = 2: (5 − 3)/(1 + 15) = 2/16 = 1/8 = 1/(2×2²) ✅
4. Since x = 2 > 1, use sin⁻¹[2x/(1+x²)] = **π − 2 tan⁻¹(2)**!
   Jaanch: 2 tan⁻¹(2) ≈ 126.9° > 90°, so sin⁻¹(4/5) = 53.1° = 180° − 126.9° ✅
5. Rewrite cos⁻¹x = π/2 − sin⁻¹x: π/2 − sin⁻¹x > sin⁻¹x ⇒ 2 sin⁻¹x < π/2 ⇒ sin⁻¹x < π/4 ⇒ **x ∈ [−1, 1/√2)**.
   Jaanch: At x = 0: π/2 > 0 (True); at x = 1/√2: π/4 = π/4 (boundary) ✅
6. Since f(x) = sin⁻¹x + sin⁻¹(2x) is **strictly increasing** on [−1/2, 1/2], with f(0) = 0 and f(1/2) = π/6 + π/2 = 2π/3 > π/3, by intermediate value theorem there is **exactly 1 real solution** (namely x = (1/2)√(3/7))!
7. x = 3, y = 4, xy = 12 > 1: **π + tan⁻¹(7 / −11) = π − tan⁻¹(7/11)**.
8. - For x ∈ [0, π/2]: x + x = **2x** (range [0, π]).
   - For x ∈ [π/2, π]: (π − x) + x = **π** (constant!).
   - For x ∈ [π, 3π/2]: (π − x) + (2π − x) = **3π − 2x** (drops from π to 0).
   - For x ∈ [3π/2, 2π]: (x − 2π) + (2π − x) = **0** (constant!).
   Range = **[0, π]**!
9. Let t = tan⁻¹x ∈ (−π/2, π/2); cot⁻¹x = π/2 − t.
   t² + (π/2 − t)² = 5π²/8 ⇒ 2t² − πt − 3π²/8 = 0 ⇒ 16t² − 8πt − 3π² = 0 ⇒ (4t − 3π)(4t + π) = 0.
   t = 3π/4 (reject, outside (−π/2, π/2)) or **t = −π/4** ⇒ **x = tan(−π/4) = −1**!
   Jaanch: At x = −1: (−π/4)² + (3π/4)² = π²/16 + 9π²/16 = 10π²/16 = 5π²/8 ✅
10. Rewrite 2 cos⁻¹(1/5) + sin⁻¹(1/5) = cos⁻¹(1/5) + [cos⁻¹(1/5) + sin⁻¹(1/5)] = cos⁻¹(1/5) + π/2.
    cos(π/2 + cos⁻¹(1/5)) = −sin(cos⁻¹(1/5)) = **−√(1 − 1/25) = −(2√6)/5**!
    Jaanch: 1² + (2√6)² = 1 + 24 = 25 ✅

---

Wapas core chapter wrap-up par jaane ke liye dekho: [Mixed Problems, Equations and Chapter Wrap-up](inverse-trigonometric-functions-part4.md).
