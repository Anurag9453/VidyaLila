> **Class:** 12 | **Subject:** Mathematics | **Chapter 5:** Continuity and Differentiability (Part 5)

# Sab Kuch Mila Kar: Mixed Problems & Chapter Wrap-up

> **Pichle topic mein:** Humne [Second-Order Derivatives, Rolle's Theorem and Mean Value Theorem](continuity-and-differentiability-part4.md) padha. Ab hum poore Continuity and Differentiability chapter — continuity constants, ITF derivatives, logarithmic & parametric differentiation, d²y/dx² proofs, aur MVT — ko ek saath milakar mixed high-scoring problems solve karenge!

---

Deeksha apne board-prep calculus marathon mein 4 classic traps ko ek hi sheet par solve kar rahi thi: (1) continuity constant k with trig limit, (2) y = x^(cos x) + (cos x)^(sin x) split-log derivative, (3) parametric d²y/dx² with dt/dx factor, aur (4) (1 − x²)y₂ − xy₁ − a²y = 0 proof! Har ek mein wahi golden rule kaam aaya: **Pehle simplify karo, phir differentiate karo!**

---

## Naye Shabd (Chapter Formula Snapshot)

- **Continuity:** LHL = RHL = f(c); **Differentiability:** LHD = RHD (Differentiable ⇒ Continuous, converse false!).
- **ITF Derivatives:** sin⁻¹x → 1/√(1−x²), tan⁻¹x → 1/(1+x²), sec⁻¹x → 1/(|x|√(x²−1)) ("co-" gets minus!).
- **Logarithmic:** y = u^v ⇒ ln y = v ln u; for y = u + v, **split into du/dx + dv/dx**!
- **Parametric:** dy/dx = (dy/dt)/(dx/dt); **d²y/dx² = [d/dt(dy/dx)] / (dx/dt)**.
- **MVT:** f'(c) = [f(b) − f(a)] / (b − a) for some c ∈ (a, b).

---

## Mixed Solved Examples

### Example 1: Second-Order Differential Equation Proof for y = e^(a cos⁻¹x)
If **y = e^(a cos⁻¹x)** (−1 ≤ x ≤ 1), prove that **(1 − x²) d²y/dx² − x (dy/dx) − a² y = 0**.

**Solution:**
- First derivative: y₁ = e^(a cos⁻¹x) · (−a / √(1 − x²)) = **−ay / √(1 − x²)**.
- Cross-multiply and square BOTH sides:
  **(1 − x²) y₁² = a² y²**
- Differentiate both sides w.r.t. x:
  (1 − x²)(2 y₁ y₂) + (−2x) y₁² = a² (2 y y₁)
- Divide throughout by **2 y₁** (≠ 0):
  **(1 − x²) y₂ − x y₁ = a² y** ⇒ **(1 − x²) y₂ − x y₁ − a² y = 0**! Proved!

Jaanch: At x = 0: y(0) = e^(aπ/2), y₁(0) = −a y(0), y₂(0) = a² y(0) ⇒ (1)a²y − 0 − a²y = 0 ✅

---

### Example 2: Differentiating an ITF Expression After Simplification
Find **dy/dx** for **y = cot⁻¹[ (√(1 + sin x) + √(1 − sin x)) / (√(1 + sin x) − √(1 − sin x)) ]**, where 0 < x < π/2.

**Solution:**
From Chapter 2 (half-angle simplification for 0 < x < π/2, where x/2 ∈ (0, π/4) so cos(x/2) > sin(x/2) > 0):
- √(1 + sin x) = cos(x/2) + sin(x/2)
- √(1 − sin x) = cos(x/2) − sin(x/2)
Ratio = [2 cos(x/2)] / [2 sin(x/2)] = cot(x/2).
So **y = cot⁻¹(cot(x/2)) = x/2**!
Differentiate: **dy/dx = 1/2**!

Jaanch: Simplifying first turned a monstrous expression into y = x/2 ⇒ constant derivative 1/2 ✅

---

### Example 3: Combining Continuity & Differentiability for Unknowns a, b
Find **a** and **b** so that **f(x) = x² + 3x + a** (for x ≤ 1) and **f(x) = bx + 2** (for x > 1) is **differentiable** at x = 1.

**Solution:**
Since differentiability implies **continuity**, apply BOTH conditions at x = 1:
1. **Continuity (LHL = RHL at x = 1):**
   1² + 3(1) + a = b(1) + 2 ⇒ 4 + a = b + 2 ⇒ **b − a = 2**   ... (1)
2. **Differentiability (LHD = RHD at x = 1):**
   - Left derivative of x² + 3x + a is 2x + 3 → at x = 1: **LHD = 2(1) + 3 = 5**.
   - Right derivative of bx + 2 is **b** → **RHD = b**.
   Equating: **b = 5**!
3. Substitute b = 5 in (1): 5 − a = 2 ⇒ **a = 3**!
Answer: **a = 3, b = 5**!

Jaanch: At x = 1: left = 1+3+3 = 7, right = 5(1)+2 = 7 (continuous!); LHD = 5 = RHD (differentiable!) ✅

---

## Aam Galtiyan (Mixed-Problem Traps)

1. **Differentiability ke sawal mein sirf LHD = RHD check karna aur continuity bhool jana:**
   - *Galat:* Sirf f'(1⁻) = f'(1⁺) equate karke b = 5 nikal dena aur a chhod dena!
   - *Sahi:* Differentiability ke liye **pehle continuity (LHL = RHL)** zaroori hai — dono equations se a aur b milte hain!

2. **y = xˣ + aˣ + xᵃ + aᵃ ke chaaron derivatives mix kar dena:**
   - *Galat:* Sab par power rule laga dena.
   - *Sahi:* xˣ → **xˣ(1 + ln x)**; aˣ → **aˣ ln a**; xᵃ → **a xᵃ⁻¹**; aᵃ (constant!) → **0**!

---

## Quick Recap

- **4-term classic:** d/dx(xˣ + aˣ + xᵃ + aᵃ) = xˣ(1 + ln x) + aˣ ln a + a xᵃ⁻¹ + 0.
- **2nd-order proof trick:** Isolate √(1−x²) or x on LHS with y₁, square if needed, then differentiate!
- **Differentiable at junction:** Solve **LHL = RHL** AND **LHD = RHD** together!

---

## Practice Questions

1. Differentiate **y = (sin x)^x + sin⁻¹(√x)** w.r.t. x.
2. If **cos y = x cos(a + y)** (with cos a ≠ ±1), prove that **dy/dx = cos²(a + y) / sin a**.
3. If **x = a(cos t + t sin t)** and **y = a(sin t − t cos t)**, find d²y/dx² at **t = π/4**.
4. Find **dy/dx** for **y = (cos x)^(cos x)** (for cos x > 0).
5. If **y = A eᵐˣ + B eⁿˣ**, show that **d²y/dx² − (m + n)(dy/dx) + mn y = 0**.
6. Find **a** and **b** if f(x) = ax² + b (for x ≤ 1) and f(x) = 1/x (for x > 1) is differentiable at x = 1.
7. Differentiate **tan⁻¹[ √(1 + x²) − 1 ] / x** w.r.t. **tan⁻¹x**.
8. Find **dy/dx** if **xʸ + yˣ = 1** (x, y > 0).
9. Verify Rolle's theorem for **f(x) = sin x + cos x** on **[0, π/2]**.
10. If **y = (sin⁻¹ x)²**, prove that **(1 − x²) y₂ − x y₁ − 2 = 0**.

---

### Answers

1. Split u = (sin x)^x ⇒ du/dx = (sin x)^x [ x cot x + ln(sin x) ]; v = sin⁻¹(√x) ⇒ dv/dx = 1 / [2√x · √(1 − x)].
   **dy/dx = (sin x)^x [ x cot x + ln(sin x) ] + 1 / [ 2√(x − x²) ]**.
2. Rewrite **x = cos y / cos(a + y)**! Differentiate w.r.t. y (quotient rule):
   dx/dy = [−sin y cos(a + y) + cos y sin(a + y)] / cos²(a + y) = **sin(a + y − y) / cos²(a + y) = sin a / cos²(a + y)**.
   Invert: **dy/dx = cos²(a + y) / sin a**!
   Jaanch: Solving for x in terms of y first makes this a clean 3-line proof ✅
3. From Part 4, d²y/dx² = sec³t / (a t). At t = π/4: sec(π/4) = √2 ⇒ sec³ = 2√2 ⇒ **d²y/dx² = 8√2 / (a π)**.
   Jaanch: 2√2 / (a × π/4) = 8√2 / (aπ) ✅
4. ln y = cos x · ln(cos x) ⇒ (1/y)(dy/dx) = −sin x − sin x · ln(cos x) ⇒ **dy/dx = −(cos x)^(cos x) · sin x · [1 + ln(cos x)]**.
5. y₁ = Am eᵐˣ + Bn eⁿˣ; y₂ = Am² eᵐˣ + Bn² eⁿˣ.
   Substitute: A(m² − m² − mn + mn)eᵐˣ + B(n² − mn − n² + mn)eⁿˣ = **0**!
6. Continuity at x = 1: **a + b = 1** ... (1).
   Differentiability at x = 1: LHD = 2a(1) = 2a; RHD = −1/1² = −1 ⇒ 2a = −1 ⇒ **a = −1/2**.
   From (1): −1/2 + b = 1 ⇒ **b = 3/2**!
   Jaanch: At x = 1: −1/2 + 3/2 = 1 = 1/1; LHD = 2(−1/2) = −1 = RHD ✅
7. From Ch 2, u = (1/2) tan⁻¹x and v = tan⁻¹x ⇒ u = (1/2)v ⇒ **du/dv = 1/2**!
8. Let u = xʸ, v = yˣ, u + v = 1 ⇒ du/dx + dv/dx = 0.
   - du/dx = xʸ [ y/x + (ln x) y' ]; dv/dx = yˣ [ (x/y) y' + ln y ].
   Collect y': **dy/dx = −[ y xʸ⁻¹ + yˣ ln y ] / [ xʸ ln x + x yˣ⁻¹ ]**.
9. Continuous on [0, π/2], differentiable on (0, π/2); f(0) = 0 + 1 = 1 and f(π/2) = 1 + 0 = 1 (equal!).
   f'(c) = cos c − sin c = 0 ⇒ tan c = 1 ⇒ **c = π/4 ∈ (0, π/2)** → Verified!
   Jaanch: π/4 ∈ (0, π/2) and cos(π/4) − sin(π/4) = 0 ✅
10. y₁ = 2(sin⁻¹x) / √(1 − x²) ⇒ (1 − x²) y₁² = 4(sin⁻¹x)² = 4y.
    Differentiate: (1 − x²)(2y₁y₂) − 2x y₁² = 4y₁. Divide by 2y₁: **(1 − x²)y₂ − x y₁ − 2 = 0**!

---

## Chapter Ka Saar (Continuity and Differentiability Wrap-up)

| Topic | Core Formula / Rule | Must-Remember Fact |
|---|---|---|
| 1. Continuity | LHL = RHL = f(c) | [x] discontinuous at all Z; compositions of continuous functions are continuous |
| 2. Differentiability & Rules | LHD = RHD; Chain, Implicit, ITF, Exp/Log | Differentiable ⇒ Continuous (converse false: |x| at 0); simplify ITF before differentiating! |
| 3. Log & Parametric | ln y = v ln u; dy/dx = (dy/dt)/(dx/dt) | Split y = u + v BEFORE taking ln! du/dv = (du/dx)/(dv/dx) |
| 4. y₂, Rolle's & MVT | Parametric y₂ = [d/dt(dy/dx)] / (dx/dt) | Rolle's: f(a)=f(b) ⇒ f'(c)=0; MVT: f'(c) = [f(b)−f(a)]/(b−a) for c ∈ (a, b) |

---

Ab tumne Continuity and Differentiability ke saare core concepts aur proofs master kar liye hain! Competitive exams (JEE/Olympiad) ke liye **Classification of Discontinuities, Non-Differentiability of |f(x)|, L'Hôpital's Rule (0/0, ∞/∞, 1^∞), aur Derivative of Inverse Function (f⁻¹)'(y) = 1/f'(x)** padhne ke liye [Continuity and Differentiability — Gehrai Mein (Advanced Level)](continuity-and-differentiability-advanced.md) zaroor dekho.

**Agle chapter mein:** Hum **Application of Derivatives** shuru karenge — jahan derivatives se rates of change, increasing/decreasing intervals, tangents/normals, aur real-world **Maxima & Minima** optimisation problems solve karenge!
