> **Class:** 12 | **Subject:** Mathematics | **Chapter 8:** Application of Integrals (Gehrai Mein — Advanced Level)

# Application of Integrals — Gehrai Mein (Advanced Level)

> **Core chapter se bridge:** Core lessons ([Part 1: Simple Curves](application-of-integrals.md) se [Part 4: Mixed Problems](application-of-integrals-part4.md) tak) mein humne standard curve, line aur two-curve areas padhe. Ab competitive-exam depth mein hum **Inverse-Function Area Identity, Archimedes' 4/3 Parabolic Segment Shortcut, Parametric Curve Areas (Cycloid & Astroid), aur Area-Bisection Problems** cover karenge.

---

Manorama ek olympiad calculus workshop mein ek scary-looking integral dekh rahi thi: **∫₁² (x³ + x) dx + ∫₂¹⁰ f⁻¹(y) dy**, jahan f(x) = x³ + x! Cubic ka inverse f⁻¹(y) nikalna toh lagbhag impossible hai — par Manorama ne **Inverse-Function Area Rectangle Identity** lagayi: sum of both areas = **b·f(b) − a·f(a) = 2(10) − 1(2) = 18**! 3 seconds mein answer!

---

## 1. Inverse-Function Area Identity (L-Shaped Rectangle Trick!)

If f: [a, b] → [f(a), f(b)] is strictly increasing and continuous, then the area under y = f(x) (vertical strips) PLUS the area to the left of x = f⁻¹(y) (horizontal strips) fills the exact difference of two rectangles:

**∫ₐᵇ f(x) dx  +  ∫_(f(a))^(f(b)) f⁻¹(y) dy  =  b · f(b) − a · f(a)**!

---

## 2. Two Super-Fast Parabolic Area Shortcuts (JEE Time-Savers!)

1. **Parabola y² = 4ax and Line y = mx + c:**
   If the chord cuts the parabola at y₁ and y₂, the enclosed area is:
   **Area = |y₂ − y₁|³ / (24 a m²)**   (or for y = mx through origin: **8a² / (3m³)**!).
2. **Parabola y = ax² + bx + c and x-axis (roots α, β):**
   **Area = |a| · |β − α|³ / 6 = (Δ^(3/2)) / (6 a²)** where Δ = b² − 4ac!
   *(Also **Archimedes' 4/3 Rule:** Area of any parabolic segment = **(2/3) × (bounding rectangle)** = **(4/3) × (inscribed triangle)**!)*

---

## 3. Area Under Parametric Curves (Cycloid & Astroid)

If a curve is given parametrically by **x = φ(t), y = ψ(t)** from t = t₁ to t = t₂:
**Area = | ∫_(t₁)^(t₂) y · (dx / dt) dt |**!

- **One arch of Cycloid** x = a(t − sin t), y = a(1 − cos t) (t ∈ [0, 2π]):
  **Area = 3 π a²** (exactly 3 times the area of the rolling circle!).
- **Whole Astroid** x = a cos³t, y = a sin³t (i.e., x^(2/3) + y^(2/3) = a^(2/3)):
  **Area = (3/8) π a²**!

---

## 4. Area Bisection Problems

If a vertical line **x = c** divides the area under y = f(x) from x = a to x = b into two equal halves:
**∫ₐᶜ f(x) dx = (1/2) ∫ₐᵇ f(x) dx**   (solve for c!).

---

## Deep Solved Problems

### Problem 1: Evaluating an Impossible-Looking Inverse Integral (Manorama's Problem!)
Let **f(x) = x³ + 2x + 1** and let g = f⁻¹ be its inverse. Evaluate **∫₀² f(x) dx + ∫₁¹³ g(y) dy**.

**Solution:**
Check endpoints: f(0) = **1**, f(2) = 8 + 4 + 1 = **13**!
Since f'(x) = 3x² + 2 > 0, f is strictly increasing on [0, 2].
Notice the limits of g(y) are **EXACTLY f(0) = 1 to f(2) = 13**!
By the Inverse-Function Area Identity:
∫₀² f(x) dx + ∫₁¹³ f⁻¹(y) dy = 2·f(2) − 0·f(0) = 2(13) − 0 = **26**!

Jaanch: Check ∫₀² (x³ + 2x + 1) dx = [x⁴/4 + x² + x]₀² = 4 + 4 + 2 = 10 ⇒ ∫₁¹³ f⁻¹(y) dy = 26 − 10 = 16 ✅

---

### Problem 2: Area of One Arch of a Cycloid (Parametric Area!)
Find the area under one full arch of the cycloid **x = a(t − sin t), y = a(1 − cos t)** for t ∈ [0, 2π].

**Solution:**
dx/dt = a(1 − cos t).
Area = ∫₀^(2π) y (dx/dt) dt = ∫₀^(2π) a² (1 − cos t)² dt
= a² ∫₀^(2π) (1 − 2 cos t + cos²t) dt.
Use cos²t = (1 + cos 2t)/2:
= a² ∫₀^(2π) [ 3/2 − 2 cos t + (1/2) cos 2t ] dt
Since ∫₀^(2π) cos t dt = 0 and ∫₀^(2π) cos 2t dt = 0:
Area = a² × (3/2) × 2π = **3 π a²**!

Jaanch: 3 × (πa²) = 3πa² (classic Galileo/Roberval result!) ✅

---

### Problem 3: Area Bisection of a Parabola by a Vertical Line
If the line **x = c** divides the area bounded by **y² = 4x** and **x = 4** into two equal parts, find the value of **c**.

**Solution:**
By symmetry about the x-axis, equate 1st-quadrant areas:
∫₀ᶜ 2√x dx = (1/2) ∫₀⁴ 2√x dx
[ (4/3) x^(3/2) ]₀ᶜ = (1/2) [ (4/3) x^(3/2) ]₀⁴
c^(3/2) = (1/2) × 4^(3/2) = (1/2)(8) = **4**
Raise both sides to power 2/3:
**c = 4^(2/3) = 2^(4/3)** (≈ 2.52)!

Jaanch: c^(3/2) = (4^(2/3))^(3/2) = 4 = half of 8 ✅

---

### Problem 4: Instant Quadratic-Root Area Formula
Find the area enclosed between the parabola **y = 6 + x − x²** and the x-axis.

**Solution:**
Factor: y = −(x² − x − 6) = −(x − 3)(x + 2) ⇒ roots α = −2, β = 3, |a| = 1.
Using **Area = |a| · |β − α|³ / 6**:
Area = 1 × |3 − (−2)|³ / 6 = 5³ / 6 = **125 / 6 sq units**!

Jaanch: Direct integral: ∫₋₂³ (6 + x − x²) dx = [6x + x²/2 − x³/3]₋₂³ = (18 + 9/2 − 9) − (−12 + 2 + 8/3) = 27/2 + 22/3 = (81 + 44)/6 = 125/6 ✅

---

### Problem 5: Area of the Astroid x^(2/3) + y^(2/3) = a^(2/3)
Find the total area enclosed by the astroid **x = a cos³t, y = a sin³t**.

**Solution:**
By 4-fold symmetry (t goes from π/2 down to 0 as x goes from 0 to a in Q1):
dx/dt = −3a cos²t sin t.
Area = 4 ∫_(π/2)⁰ (a sin³t)(−3a cos²t sin t) dt = 12 a² ∫₀^(π/2) sin⁴t cos²t dt.
Apply **Walli's Formula** (m = 4, n = 2, both even ⇒ K = π/2):
∫₀^(π/2) sin⁴t cos²t dt = [(3 × 1)(1) / (6 × 4 × 2)] × (π/2) = **π / 32**.
Total Area = 12 a² × (π / 32) = **3 π a² / 8**!

Jaanch: 12/32 = 3/8 → 3πa²/8 (< πa², since astroid sits inside circle of radius a!) ✅

---

## Advanced Practice Questions

1. Let **f(x) = x⁵ + x³ + x** and g = f⁻¹. Evaluate **∫₀¹ f(x) dx + ∫₀³ g(y) dy**.
2. Let **f(x) = x + sin x** (strictly increasing on R). Evaluate **∫₀^π f⁻¹(y) dy**!
3. Using the root-cube shortcut, find the area bounded by **y = x² − 5x + 6** and the x-axis.
4. Find the area bounded by the two parabolas **y = x² − 2x** and **y = 4 − x²** using |a₁ − a₂|·|β − α|³/6!
5. Find the value of **c** so that the horizontal line **y = c** divides the area bounded by **y = x²** and **y = 4** into two equal halves.
6. Find the area enclosed by the curve **y = sin²x** and the x-axis from x = 0 to x = π.
7. Find the area bounded by **y = eˣ**, **y = e⁻ˣ**, and the line **x = 1**.
8. Find the area enclosed by **|x − 1| + |y − 2| = 3**.
9. If the area bounded by **y = ax²** and **x = ay²** (a > 0) is **1 sq unit**, find **a**.
10. Find the area bounded by **y = ln x**, the x-axis, and **x = e**.

---

### Solutions

1. f(0) = 0, f(1) = 3 → By Inverse-Area Identity: 1·f(1) − 0·f(0) = 1(3) − 0 = **3**!
2. f(0) = 0, f(π) = π. First compute ∫₀^π (x + sin x) dx = [x²/2 − cos x]₀^π = (π²/2 + 1) − (0 − 1) = **π²/2 + 2**.
   By identity: ∫₀^π f(x) dx + ∫₀^π f⁻¹(y) dy = π(π) − 0 = π².
   Therefore ∫₀^π f⁻¹(y) dy = π² − (π²/2 + 2) = **π²/2 − 2**!
   Jaanch: π²/2 + 2 + π²/2 − 2 = π² ✅
3. Roots are 2 and 3, |a| = 1 ⇒ Area = 1 × (3 − 2)³ / 6 = **1/6 sq units**!
4. Difference = (4 − x²) − (x² − 2x) = −2x² + 2x + 4 = −2(x − 2)(x + 1) → |a| = 2, roots −1 & 2 (|β − α| = 3):
   Area = 2 × 3³ / 6 = 54 / 6 = **9 sq units**!
   Jaanch: ∫₋₁² (4 + 2x − 2x²) dx = [4x + x² − (2/3)x³]₋₁² = (8+4−16/3) − (−4+1+2/3) = 20/3 + 7/3 = 27/3 = 9 ✅
5. Horizontal strips: 2 ∫₀ᶜ √y dy = (1/2) × 2 ∫₀⁴ √y dy ⇒ c^(3/2) = (1/2)(8) = 4 ⇒ **c = 4^(2/3) = 2^(4/3)**.
6. ∫₀^π (1 − cos 2x)/2 dx = [x/2 − (sin 2x)/4]₀^π = **π/2 sq units**.
7. On [0, 1], eˣ ≥ e⁻ˣ: ∫₀¹ (eˣ − e⁻ˣ) dx = [eˣ + e⁻ˣ]₀¹ = (e + 1/e) − 2 = **e + 1/e − 2 sq units**.
8. Shifted diamond of diagonal d = 2 × 3 = 6 ⇒ Area = d²/2 = 36/2 = **18 sq units**!
9. Rewrite as x² = (1/a)y and y² = (1/a)x (so 4A = 1/a ⇒ A = 1/(4a)).
   Area = 16A²/3 = 16/(16a² × 3) = **1 / (3a²)**. Set 1/(3a²) = 1 ⇒ **a = 1 / √3**!
   Jaanch: At a = 1/√3, 1/(3 × 1/3) = 1 ✅
10. ∫₁ᵉ ln x dx = [x ln x − x]₁ᵉ = (e − e) − (0 − 1) = **1 sq unit**!
    Jaanch: Exact area under ln x from 1 to e is 1 ✅

---

Wapas core chapter wrap-up par jaane ke liye dekho: [Mixed Area Problems & Chapter Wrap-up](application-of-integrals-part4.md).
