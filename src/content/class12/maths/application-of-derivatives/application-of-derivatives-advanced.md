> **Class:** 12 | **Subject:** Mathematics | **Chapter 6:** Application of Derivatives (Gehrai Mein — Advanced Level)

# Application of Derivatives — Gehrai Mein (Advanced Level)

> **Core chapter se bridge:** Core lessons ([Part 1: Rates](application-of-derivatives.md) se [Part 6: Mixed Problems](application-of-derivatives-part6.md) tak) mein humne rates, monotonicity, tangents/normals, differentials aur maxima/minima padhe. Ab competitive-exam depth mein hum **Proving Inequalities via Monotonicity, Concavity & Inflection Points, Shortest Distance Between Two Curves (Common Normal Principle), aur Cubic Real-Root Counting via Extrema** cover karenge.

---

Himanshu ek calculus olympiad camp mein ek inequality dekh raha tha: "Prove that **e^π > π^e** WITHOUT a calculator!" Sab soch mein pad gaye — par Himanshu ne function **f(x) = (ln x) / x** liya, uska derivative f'(x) = (1 − ln x) / x² nikala, aur dekha ki **x = e par f(x) ka GLOBAL MAXIMUM** hai! Isliye f(e) > f(π) ⇒ (ln e)/e > (ln π)/π ⇒ π > e ln π ⇒ **e^π > π^e**! 3 lines mein olympiad problem solved!

---

## 1. Proving Inequalities Using Monotonicity

To prove **g(x) > h(x)** for x > a (when g(a) = h(a)):
1. Define **f(x) = g(x) − h(x)** (so f(a) = 0).
2. Show **f'(x) > 0** for all x > a.
3. Since f is strictly increasing for x > a, **f(x) > f(a) = 0 ⇒ g(x) > h(x)**!
- Classic inequalities proved in 2 lines:
  - **eˣ > 1 + x** (for x ≠ 0)
  - **sin x < x < tan x** (for 0 < x < π/2)
  - **x − x²/2 < ln(1 + x) < x** (for x > 0)

---

## 2. Concavity & Points of Inflection (Second Derivative Geometry)

- **Concave Upward (∪):** **f''(x) > 0** (tangent lies BELOW the curve; slope f'(x) is increasing).
- **Concave Downward (∩):** **f''(x) < 0** (tangent lies ABOVE the curve; slope f'(x) is decreasing).
- **Point of Inflection:** Point where concavity **changes sign** (f''(x) goes from + to − or − to +!).
  - Necessary condition (for smooth f): **f''(c) = 0**, AND **f'''(c) ≠ 0** (sign of f'' must actually flip!).
  - *(Trap: f(x) = x⁴ has f''(0) = 0, yet f''(x) = 12x² ≥ 0 NEVER flips sign → x = 0 is a **local minimum**, NOT an inflection point!)*

---

## 3. Shortest Distance Between Two Non-Intersecting Curves (Common Normal!)

**Golden Geometric Theorem:** The shortest distance between two smooth non-intersecting curves (or between a curve and a line) ALWAYS occurs along their **COMMON NORMAL**!
- **Between a curve y = f(x) and a line ax + by + c = 0:**
  1. Find the point P(x₀, y₀) on the curve where the **tangent is PARALLEL to the line**: **f'(x₀) = −a/b**!
  2. The shortest distance is simply the perpendicular distance from P(x₀, y₀) to the line: **|ax₀ + by₀ + c| / √(a² + b²)**!

---

## 4. Number of Real Roots of a Cubic f(x) = x³ + px + q = 0

Let f(x) be a cubic with two distinct local extrema at α and β (so f'(α) = f'(β) = 0):
- **f(α) · f(β) < 0** (one peak above x-axis, one valley below!) ⇒ **3 distinct real roots!**
- **f(α) · f(β) = 0** (touches x-axis at an extremum) ⇒ **3 real roots (with one repeated root)!**
- **f(α) · f(β) > 0** (both extrema on same side of x-axis) ⇒ **Only 1 real root** (2 non-real complex roots)!
- For depressed cubic **x³ + px + q = 0**, this reduces to the famous **Cubic Discriminant**:
  **4p³ + 27q² < 0 ⇒ 3 distinct real roots**; **= 0 ⇒ repeated root**; **> 0 ⇒ 1 real root**!

---

## Deep Solved Problems

### Problem 1: Proving e^π > π^e Without a Calculator (Himanshu's Proof!)
Which is larger: **e^π** or **π^e**? Prove rigorously using calculus.

**Solution:**
Consider **f(x) = (ln x) / x** for x > 0.
Differentiate: **f'(x) = (1 − ln x) / x²**.
- For 0 < x < e: ln x < 1 ⇒ f'(x) > 0 (strictly increasing).
- For x > e: ln x > 1 ⇒ f'(x) < 0 (strictly decreasing).
Thus f(x) attains its unique **global maximum at x = e**!
Since π ≈ 3.14 > e ≈ 2.718:
f(e) > f(π) ⇒ (ln e) / e > (ln π) / π ⇒ 1/e > (ln π)/π ⇒ π > e ln π = ln(π^e).
Exponentiating both sides: **e^π > π^e**!

Jaanch: Numerically e^π ≈ 23.14 > π^e ≈ 22.46 ✅

---

### Problem 2: Shortest Distance Between a Parabola and a Line
Find the shortest distance between the parabola **y = x²** and the line **y = x − 2**.

**Solution:**
Slope of line y = x − 2 is **m = 1**.
Find point P(x₀, y₀) on y = x² where tangent is parallel to the line:
dy/dx = 2x₀ = 1 ⇒ **x₀ = 1/2**, so **y₀ = (1/2)² = 1/4** → P = **(1/2, 1/4)**.
Shortest distance = perpendicular distance from (1/2, 1/4) to line **x − y − 2 = 0**:
d = |1/2 − 1/4 − 2| / √(1² + (−1)²) = |−7/4| / √2 = **7 / (4√2) = (7√2) / 8**!

Jaanch: Check perpendicular slope from (1/2, 1/4) to line is −1, matching normal to y = x² at x = 1/2 ✅

---

### Problem 3: Counting Real Roots of x³ − 3x + k = 0
Find all real values of **k** for which the equation **x³ − 3x + k = 0** has **three distinct real roots**.

**Solution:**
Let f(x) = x³ − 3x + k.
f'(x) = 3x² − 3 = 0 ⇒ local extrema at **x = −1** (local max) and **x = 1** (local min).
- f(−1) = (−1)³ − 3(−1) + k = **k + 2**
- f(1) = 1³ − 3(1) + k = **k − 2**
For **3 distinct real roots**, we need **f(−1) · f(1) < 0**:
(k + 2)(k − 2) < 0 ⇒ **−2 < k < 2** (i.e., **k ∈ (−2, 2)**)!

Jaanch: Cubic discriminant 4p³ + 27q² = 4(−3)³ + 27k² = −108 + 27k² < 0 ⇒ k² < 4 ⇒ −2 < k < 2 ✅

---

### Problem 4: Finding Inflection Point & Concavity Intervals
Find the intervals of concavity and the point of inflection of **f(x) = x³ − 6x² + 9x + 1**.

**Solution:**
- f'(x) = 3x² − 12x + 9
- **f''(x) = 6x − 12 = 6(x − 2)**
- Set f''(x) = 0 ⇒ **x = 2**.
  - For x < 2: f''(x) < 0 (**Concave downward** on (−∞, 2)).
  - For x > 2: f''(x) > 0 (**Concave upward** on (2, ∞)).
Since concavity flips at x = 2, **(2, f(2)) = (2, 3)** is the **Point of Inflection**!

Jaanch: f(2) = 8 − 24 + 18 + 1 = 3; f'''(2) = 6 ≠ 0 confirms inflection point ✅

---

### Problem 5: Proving tan x / x Is Strictly Increasing on (0, π/2)
Prove that **f(x) = (tan x) / x** is strictly increasing on **(0, π/2)**, and hence deduce **(tan x₁)/x₁ < (tan x₂)/x₂** for 0 < x₁ < x₂ < π/2.

**Solution:**
Differentiate: f'(x) = [x sec²x − tan x] / x² = [x − sin x cos x] / (x² cos²x) = **(2x − sin 2x) / (2x² cos²x)**.
Let g(t) = t − sin t for t = 2x ∈ (0, π).
Then g(0) = 0 and g'(t) = 1 − cos t > 0 for all t ∈ (0, π) ⇒ **g(2x) = 2x − sin 2x > 0**!
Hence **f'(x) > 0** on (0, π/2) ⇒ **f(x) = (tan x)/x is strictly increasing on (0, π/2)**!

Jaanch: At x = π/6: (1/√3)/(π/6) ≈ 1.103; at x = π/4: 1/(π/4) ≈ 1.273 (increasing!) ✅

---

## Advanced Practice Questions

1. Prove using monotonicity that **sin x > x − x³/6** for all **x > 0**.
2. Find the shortest distance between the line **y − x = 1** and the curve **x = y²**.
3. Find the range of **a** such that **2x³ − 9x² + 12x − a = 0** has **3 distinct real roots**.
4. Find the points of inflection of **f(x) = x⁴ − 6x² + 5**.
5. Which is larger: **100^101** or **101^100**? Prove using f(x) = (ln x)/x!
6. Prove that **f(x) = (sin x) / x** is strictly **decreasing** on **(0, π/2)**.
7. Show that **f(x) = x⁴** has f''(0) = 0, yet x = 0 is NOT a point of inflection.
8. Find the shortest distance between the parabola **y² = 4x** and the circle **x² + y² − 12x + 31 = 0** (Hint: shortest distance to a circle = shortest distance to its centre minus radius!).
9. Find all real values of **k** for which **f(x) = x³ + 3x² + kx + 5** is strictly increasing on **R**.
10. Using **sin x / x** decreasing on (0, π/2), prove Jordan's inequality: **sin x > (2/π) x** for all x ∈ (0, π/2)!

---

### Solutions

1. Let f(x) = sin x − x + x³/6 (f(0) = 0).
   f'(x) = cos x − 1 + x²/2 (f'(0) = 0); f''(x) = −sin x + x > 0 for all x > 0 ⇒ f'(x) > 0 ⇒ f(x) > 0 ⇒ **sin x > x − x³/6**!
2. Line slope = 1. On x = y², dy/dx = 1/(2y) = 1 ⇒ **y = 1/2, x = 1/4**.
   Distance from (1/4, 1/2) to x − y + 1 = 0: |1/4 − 1/2 + 1| / √2 = (3/4)/√2 = **3√2 / 8**.
   Jaanch: 1/4 − 1/2 + 1 = 3/4; 3/(4√2) = 3√2/8 ✅
3. f'(x) = 6x² − 18x + 12 = 6(x − 1)(x − 2) = 0 ⇒ extrema at x = 1 (f(1) = 5 − a) and x = 2 (f(2) = 4 − a).
   Need (5 − a)(4 − a) < 0 ⇒ **4 < a < 5**!
   Jaanch: At a = 4.5, f(1) = +0.5 > 0 and f(2) = −0.5 < 0 (3 real roots!) ✅
4. f'(x) = 4x³ − 12x; f''(x) = 12x² − 12 = 12(x − 1)(x + 1) = 0 ⇒ **x = ±1** (f'' changes sign at both!).
   Inflection points: **(1, 0)** and **(−1, 0)**!
5. Since f(x) = (ln x)/x is strictly decreasing for x > e, and 101 > 100 > e:
   (ln 100)/100 > (ln 101)/101 ⇒ 101 ln 100 > 100 ln 101 ⇒ **100^101 > 101^100**!
6. f'(x) = (x cos x − sin x)/x² = cos x (x − tan x)/x². Since tan x > x on (0, π/2), **f'(x) < 0** ⇒ strictly decreasing!
7. f''(x) = 12x² ≥ 0 everywhere (never changes sign across x = 0!) → x = 0 is a **local minimum**, not an inflection point.
8. Circle centre = **(6, 0)**, radius = √(36 − 31) = **√5**.
   Minimise squared distance from (t², 2t) on y² = 4x to (6, 0):
   D(t) = (t² − 6)² + 4t² = t⁴ − 8t² + 36 = (t² − 4)² + 20!
   Minimum D = **20** (at t² = 4, i.e., (4, ±4)) ⇒ shortest distance to centre = √20 = **2√5**.
   Shortest distance to circle = 2√5 − √5 = **√5**!
   Jaanch: Completing the square gave D_min = 20 instantly; 2√5 − √5 = √5 ✅
9. f'(x) = 3x² + 6x + k ≥ 0 for all x ∈ R ⇔ Discriminant Δ ≤ 0:
   36 − 12k ≤ 0 ⇒ **k ≥ 3**!
   Jaanch: At k = 3, f'(x) = 3(x + 1)² ≥ 0 everywhere ✅
10. Since (sin x)/x is strictly decreasing on (0, π/2), for any x ∈ (0, π/2):
    (sin x)/x > (sin(π/2)) / (π/2) = 1 / (π/2) = 2/π ⇒ **sin x > (2/π) x**!

---

Wapas core chapter wrap-up par jaane ke liye dekho: [Mixed Problems & Chapter Wrap-up](application-of-derivatives-part6.md).
