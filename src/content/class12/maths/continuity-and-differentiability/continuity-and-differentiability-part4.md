> **Class:** 12 | **Subject:** Mathematics | **Chapter 5:** Continuity and Differentiability (Part 4)

# Second-Order Derivatives, Rolle's Theorem and Mean Value Theorem

> **Pichle topic mein:** Humne [Logarithmic and Parametric Differentiation](continuity-and-differentiability-part3.md) padha. Ab hum derivative ka derivative — **Second-Order Derivative (d²y/dx²)** — aur do classic theorems of calculus: **Rolle's Theorem** aur **Lagrange's Mean Value Theorem (LMVT)** seekhenge!

---

Chetna highway par car mein ja rahi thi jahan do toll booths 120 km door the. Car ne 120 km exact **1.5 ghante** mein poora kiya — yaani **average speed = 80 km/h** thi! Traffic police ne 70 km/h speed-limit violation ka challan bhej diya! Chetna ne poocha, "Camera toh sirf toll booths par tha, unhe kaise pata ki hum 70 se tez chale?" Papa muskuraye: "**Mean Value Theorem!** Agar average speed 80 km/h hai, toh raaste mein kam se kam EK pal aisa zaroor aaya hoga jab speedometer exact **80 km/h** par tha!"

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Second-Order Derivative (d²y/dx², y₂, y'', f''(x))** | First derivative dy/dx ko dobara x ke respect mein differentiate karna: d/dx (dy/dx) |
| **Rolle's Theorem** | Agar f [a, b] par continuous, (a, b) par differentiable, aur **f(a) = f(b)** ho, toh kam se kam ek **c ∈ (a, b)** milega jahan **f'(c) = 0** (horizontal tangent!) |
| **Lagrange's Mean Value Theorem (LMVT)** | Agar f [a, b] par continuous aur (a, b) par differentiable ho, toh kam se kam ek **c ∈ (a, b)** milega jahan **f'(c) = [f(b) − f(a)] / (b − a)** (tangent parallel to chord!) |

---

## 1. Second-Order Derivatives (Explicit & Parametric Trap!)

- Standard notation: **y₁ = dy/dx** and **y₂ = d²y/dx² = d/dx(y₁)**.
- **CRITICAL PARAMETRIC TRAP (100% Exam Question!):**
  If x = f(t) and y = g(t), and you found dy/dx = h(t), then:
  **d²y/dx² = d/dx [h(t)] = [ d/dt (dy/dx) ] × (dt / dx) = [ d/dt (dy/dx) ] / (dx / dt)**!
  *(NEVER forget to divide by **dx/dt** in the second step!)*

---

## 2. Rolle's Theorem vs Mean Value Theorem (LMVT)

| Condition / Result | Rolle's Theorem | Mean Value Theorem (LMVT) |
|---|---|---|
| Continuity | Continuous on **closed [a, b]** | Continuous on **closed [a, b]** |
| Differentiability | Differentiable on **open (a, b)** | Differentiable on **open (a, b)** |
| Endpoint condition | **f(a) = f(b)** (REQUIRED!) | Not required! |
| Conclusion (∃ c ∈ (a, b)) | **f'(c) = 0** | **f'(c) = [f(b) − f(a)] / (b − a)** |
| Geometric meaning | Tangent at c is **parallel to x-axis** | Tangent at c is **parallel to secant chord AB** |

*(Notice: Rolle's Theorem is just a special case of LMVT when f(a) = f(b)!)*

---

## Solved Examples

### Example 1: Proving a Second-Order Differential Identity
If **y = (tan⁻¹ x)²**, prove that **(x² + 1)² y₂ + 2x(x² + 1) y₁ = 2**.

**Solution:**
- First derivative: y₁ = 2(tan⁻¹ x) · [1 / (1 + x²)].
- **Pro Tip:** Cross-multiply denominator BEFORE differentiating the second time (avoids ugly quotient rule!):
  **(1 + x²) y₁ = 2 tan⁻¹ x**
- Differentiate both sides w.r.t. x (product rule on LHS):
  (1 + x²) y₂ + (2x) y₁ = 2 / (1 + x²)
- Multiply both sides by (1 + x²):
  **(x² + 1)² y₂ + 2x(x² + 1) y₁ = 2**! Proved!

Jaanch: At x = 0: y₁(0) = 0, y₂(0) = 2 ⇒ (1)²(2) + 0 = 2 ✅

---

### Example 2: Second-Order Derivative in Parametric Form
If **x = a(cos t + t sin t)** and **y = a(sin t − t cos t)**, find **d²y/dx²**.

**Solution:**
- dx/dt = a(−sin t + sin t + t cos t) = **a t cos t**
- dy/dt = a(cos t − cos t + t sin t) = **a t sin t**
- First derivative: **dy/dx = (a t sin t) / (a t cos t) = tan t**!
- Second derivative (DON'T forget dt/dx!):
  **d²y/dx² = d/dt(tan t) × (1 / (dx/dt)) = sec²t / (a t cos t) = sec³t / (a t)**!

Jaanch: Dividing sec²t by (a t cos t) gives sec³t / (a t) ✅

---

### Example 3: Verifying Rolle's Theorem
Verify Rolle's theorem for **f(x) = x² + 2x − 8** on **[−4, 2]**.

**Solution:**
1. f(x) is a polynomial → **continuous on [−4, 2]** and **differentiable on (−4, 2)**.
2. Check endpoints:
   - f(−4) = 16 − 8 − 8 = **0**
   - f(2) = 4 + 4 − 8 = **0**
   Since f(−4) = f(2), all 3 conditions of Rolle's theorem are satisfied!
3. Find c: f'(x) = 2x + 2. Set f'(c) = 0 ⇒ 2c + 2 = 0 ⇒ **c = −1**.
4. Since **−1 ∈ (−4, 2)**, Rolle's theorem is verified!

Jaanch: Vertex of parabola x² + 2x − 8 is at x = −b/(2a) = −2/2 = −1 ∈ (−4, 2) ✅

---

### Example 4: Verifying Lagrange's Mean Value Theorem (LMVT)
Verify MVT for **f(x) = x² − 4x − 3** on **[1, 4]**.

**Solution:**
1. Polynomial → **continuous on [1, 4]** and **differentiable on (1, 4)**.
2. f(1) = 1 − 4 − 3 = **−6**; f(4) = 16 − 16 − 3 = **−3**.
3. Slope of chord = [f(4) − f(1)] / (4 − 1) = [−3 − (−6)] / 3 = 3 / 3 = **1**.
4. f'(x) = 2x − 4. Set f'(c) = 1 ⇒ 2c − 4 = 1 ⇒ 2c = 5 ⇒ **c = 5/2 = 2.5**.
5. Since **2.5 ∈ (1, 4)**, MVT is verified!

Jaanch: For any quadratic ax² + bx + c on [a, b], MVT point c is ALWAYS the exact midpoint (1 + 4)/2 = 2.5 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Parametric d²y/dx² mein dx/dt se divide karna bhool jana:**
   - *Galat:* dy/dx = tan t ⇒ d²y/dx² = sec²t.
   - *Sahi:* **d²y/dx² = sec²t × (dt/dx) = sec²t / (dx/dt)**!

2. **Rolle's / MVT mein c open interval (a, b) ke andar hai ya nahi check na karna:**
   - *Galat:* c = a ya c = b ko valid maan lena.
   - *Sahi:* c strictly **open interval (a, b)** ke andar hona chahiye (a < c < b)!

3. **f(x) = [x] ya |x| par Rolle's / MVT laga dena:**
   - *Galat:* f(x) = |x| on [−1, 1] mein f(−1) = f(1) = 1 toh Rolle's theorem lagega.
   - *Sahi:* |x| x = 0 ∈ (−1, 1) par **differentiable NAHI hai**, isliye Rolle's theorem applicable nahi hai!

---

## Quick Recap

- **y₂ trick:** Cross-multiply denominators or square roots BEFORE differentiating the second time!
- **Parametric y₂:** d²y/dx² = [d/dt(dy/dx)] / (dx/dt).
- **Rolle's:** Continuous on [a, b], differentiable on (a, b), f(a) = f(b) ⇒ ∃ c ∈ (a, b) with **f'(c) = 0**.
- **LMVT:** Continuous on [a, b], differentiable on (a, b) ⇒ ∃ c ∈ (a, b) with **f'(c) = [f(b) − f(a)] / (b − a)**.

---

## Practice Questions

1. Find d²y/dx² for: (a) y = x² + 3x + 2, (b) y = x cos x, (c) y = ln(ln x).
2. If **y = 3e^(2x) + 2e^(3x)**, prove that **d²y/dx² − 5(dy/dx) + 6y = 0**.
3. If **y = sin⁻¹ x**, show that **(1 − x²) d²y/dx² − x (dy/dx) = 0**.
4. If **y = 3 cos(ln x) + 4 sin(ln x)**, show that **x² y₂ + x y₁ + y = 0**.
5. If **eʸ(x + 1) = 1**, show that **d²y/dx² = (dy/dx)²**.
6. If **x = a cos³θ** and **y = a sin³θ**, find **d²y/dx²** at **θ = π/4**.
7. Verify Rolle's theorem for **f(x) = x² − 1** on **[−1, 1]**.
8. Examine whether Rolle's theorem is applicable to **f(x) = [x]** on **[5, 9]**. Give reason.
9. Verify Mean Value Theorem for **f(x) = x³ − 5x² − 3x** on **[1, 3]**, and find all c ∈ (1, 3) for which f'(c) = 0 (note: MVT value vs f'(c) = 0).
10. Find a point on the curve **y = (x − 2)²** at which the tangent is parallel to the chord joining **(2, 0)** and **(4, 4)**.

---

### Answers

1. (a) y₁ = 2x + 3, **y₂ = 2**.
   (b) y₁ = cos x − x sin x, **y₂ = −2 sin x − x cos x**.
   (c) y₁ = 1/(x ln x), **y₂ = −(1 + ln x) / (x ln x)²**.
2. y₁ = 6e^(2x) + 6e^(3x); y₂ = 12e^(2x) + 18e^(3x).
   LHS = (12 − 30 + 18)e^(2x) + (18 − 30 + 12)e^(3x) = **0**!
   Jaanch: 12−30+18 = 0 and 18−30+12 = 0 ✅
3. y₁ = 1/√(1 − x²) ⇒ √(1 − x²) y₁ = 1. Square: (1 − x²) y₁² = 1.
   Differentiate w.r.t. x: (1 − x²)(2y₁y₂) − 2x y₁² = 0. Divide by 2y₁ ≠ 0 ⇒ **(1 − x²)y₂ − xy₁ = 0**!
4. y₁ = [−3 sin(ln x) + 4 cos(ln x)] / x ⇒ x y₁ = −3 sin(ln x) + 4 cos(ln x).
   Differentiate: x y₂ + y₁ = [−3 cos(ln x) − 4 sin(ln x)] / x = −y/x ⇒ **x² y₂ + x y₁ + y = 0**!
5. Differentiate eʸ(x + 1) = 1: eʸ(1) + (x + 1)eʸ y₁ = 0 ⇒ (x + 1)y₁ = −1 ⇒ y₁ = −1/(x + 1).
   Differentiate again: **y₂ = +1/(x + 1)² = (−1/(x + 1))² = (y₁)²**!
6. From Part 3, dy/dx = −tan θ and dx/dθ = −3a cos²θ sin θ.
   d²y/dx² = (−sec²θ) / (−3a cos²θ sin θ) = **sec⁴θ / (3a sin θ)**.
   At θ = π/4: sec(π/4) = √2 ⇒ sec⁴ = 4; sin(π/4) = 1/√2 ⇒ d²y/dx² = 4 / (3a / √2) = **4√2 / (3a)**!
   Jaanch: (√2)⁴ / (3a × 1/√2) = 4√2 / (3a) ✅
7. Polynomial (continuous on [−1, 1], differentiable on (−1, 1)); f(−1) = f(1) = 0.
   f'(c) = 2c = 0 ⇒ **c = 0 ∈ (−1, 1)** → Verified!
8. **NOT applicable** — because [x] is discontinuous (and non-differentiable) at every integer x = 6, 7, 8 inside (5, 9), and f(5) = 5 ≠ f(9) = 9.
9. Polynomial → continuous on [1, 3], differentiable on (1, 3).
   f(1) = 1 − 5 − 3 = −7; f(3) = 27 − 45 − 9 = −27.
   [f(3) − f(1)] / (3 − 1) = (−27 + 7)/2 = **−10**.
   f'(c) = 3c² − 10c − 3 = −10 ⇒ 3c² − 10c + 7 = 0 ⇒ (3c − 7)(c − 1) = 0 ⇒ **c = 7/3 ∈ (1, 3)** (reject c = 1 as endpoint)!
   *(And for f'(c) = 0: 3c² − 10c − 3 = 0 has roots (10 ± √136)/6 ≈ 3.61 or −0.28, neither in (1, 3)!)*
   Jaanch: 3(7/3)² − 10(7/3) − 3 = 49/3 − 70/3 − 9/3 = −30/3 = −10 ✅
10. By MVT on [2, 4]: slope of chord = (4 − 0)/(4 − 2) = **2**.
    f'(x) = 2(x − 2) = 2 ⇒ x − 2 = 1 ⇒ **x = 3**, y = (3 − 2)² = **1** → Point is **(3, 1)**!
    Jaanch: Tangent slope at (3, 1) is 2(3−2) = 2 = chord slope ✅

---

Ab tum second-order derivatives (including parametric!) aur Rolle's/MVT ke sabhi problems master kar chuke ho!

**Agle topic mein:** [Sab Kuch Mila Kar: Mixed Problems & Chapter Wrap-up](continuity-and-differentiability-part5.md) mein hum poore Continuity and Differentiability chapter ke mixed problems solve karenge aur final summary table banayenge!
