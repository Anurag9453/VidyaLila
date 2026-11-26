> **Class:** 12 | **Subject:** Mathematics | **Chapter 6:** Application of Derivatives (Part 6)

# Sab Kuch Mila Kar: Mixed Problems & Chapter Wrap-up

> **Pichle topic mein:** Humne [Maxima, Minima and Optimisation Word Problems](application-of-derivatives-part5.md) padhe. Ab hum poore Application of Derivatives chapter — related rates, increasing/decreasing intervals, tangents/normals, approximations, aur classic optimisation (Norman window, wire-cutting) — ko ek saath jodkar mixed exam problems solve karenge!

---

Harish ek architecture design sprint mein ek **Norman Window** (neeche rectangle, upar semicircle) bana raha tha jiska total perimeter 10 m fixed tha. Rule tha: **Maximum roshni (maximum area)** andar aani chahiye! Calculus ne turant answer diya: rectangle ki height semicircle ke radius ke barabar (**y = r**) rakhne par sabse zyada roshni aati hai!

---

## Naye Shabd (Chapter Formula Snapshot)

- **Rates:** dy/dt = (dy/dx)(dx/dt); Marginal Cost = dC/dx.
- **Monotonicity:** f'(x) > 0 (increasing), f'(x) < 0 (decreasing).
- **Tangents & Normals:** Tangent slope = m = dy/dx; Normal slope = −1/m; Orthogonal ⇔ m₁m₂ = −1.
- **Approximation:** f(x + Δx) ≈ f(x) + f'(x) Δx.
- **Extrema:** f'(c) = 0, f''(c) < 0 (Max), f''(c) > 0 (Min); on [a, b], check critical points + endpoints!

---

## Mixed Solved Examples

### Example 1: The Norman Window Optimisation Classic (Harish's Problem!)
A window is in the form of a rectangle surmounted by a semicircular opening. The total perimeter of the window is **10 m**. Find the dimensions of the window to admit **maximum light** (maximum area).

**Solution:**
Let semicircle radius = r (so rectangle width = **2r**), and rectangle height = **y**.
- **Constraint (Perimeter = 10):** 2r + 2y + πr = 10 ⇒ **2y = 10 − (2 + π)r ⇒ y = 5 − (1 + π/2)r**.
- **Area to maximise:** A(r) = (2r)y + (1/2)πr² = r[10 − (2 + π)r] + (1/2)πr²
  = **10r − (2 + π/2) r²**.
- Differentiate:
  A'(r) = 10 − (4 + π)r = 0 ⇒ **r = 10 / (π + 4) m**!
- Confirm maximum: A''(r) = −(4 + π) < 0 ⇒ **Maximum area**!
- Find height y: y = 5 − [(2 + π)/2] × [10/(π + 4)] = [5(π + 4) − 5(π + 2)] / (π + 4) = **10 / (π + 4) m = r**!
So width = **20/(π + 4) m** and rectangular height = **10/(π + 4) m**!

Jaanch: Check perimeter: 2r + 2r + πr = (4 + π)r = (4 + π) × 10/(4 + π) = 10 m ✅

---

### Example 2: Cutting a 28 m Wire Into a Square and a Circle (Minimum Combined Area!)
A wire of length **28 m** is to be cut into two pieces. One piece is made into a **square** and the other into a **circle**. What should be the lengths of the two pieces so that the **combined area is MINIMUM**?

**Solution:**
Let circle piece length = **x** (circumference 2πr = x ⇒ r = x/(2π)), and square piece length = **28 − x** (side = (28 − x)/4).
- Combined Area **A(x) = π[x/(2π)]² + [(28 − x)/4]² = x² / (4π) + (28 − x)² / 16**.
- Differentiate:
  A'(x) = x / (2π) − (28 − x) / 8 = 0
  Multiply by 8π: 4x = π(28 − x) ⇒ (4 + π)x = 28π ⇒ **x = 28π / (π + 4) m** (for circle).
  Square piece = 28 − 28π/(π + 4) = **112 / (π + 4) m**!
- Confirm minimum: A''(x) = 1/(2π) + 1/8 > 0 ⇒ **Minimum combined area**!

Jaanch: Sum of lengths = (28π + 112)/(π + 4) = 28(π + 4)/(π + 4) = 28 m ✅

---

## Aam Galtiyan (Mixed-Problem Traps)

1. **Norman window ke perimeter mein andar wali beech ki line (2r) bhi jod dena:**
   - *Galat:* Perimeter = 4r + 2y + πr.
   - *Sahi:* Bahar ka boundary sirf **ek bottom width (2r) + do sides (2y) + top semicircle (πr)** hota hai!

2. **Wire-cutting mein maximum combined area ke liye bhi critical point use kar lena:**
   - *Galat:* x = 28π/(π+4) par area maximum hai.
   - *Sahi:* A''(x) > 0 hai, yaani critical point par **MINIMUM** area milta hai! Maximum area ke liye endpoints check karo — poora 28 m ka **circle** banane par maximum area milta hai!

---

## Quick Recap

- **Norman window (fixed perimeter P):** Max area at **r = y = P / (π + 4)**.
- **Wire cut into circle + square (length L):** Min area at circle = **Lπ/(π + 4)**, square = **4L/(π + 4)** (where square side = circle diameter!).

---

## Practice Questions

1. Find the intervals in which **f(x) = sin x − cos x** (0 ≤ x ≤ 2π) is strictly increasing or strictly decreasing.
2. Find the equation of the tangent to **y = x² − 2x + 7** which is: (a) parallel to 2x − y + 9 = 0, (b) perpendicular to 5y − 15x = 13.
3. Use differentials to approximate **√0.037** up to 3 decimal places.
4. A man of height **2 m** walks at a uniform speed of **5 km/h** away from a lamp post which is **6 m** high. Find the rate at which the length of his shadow increases.
5. Find the maximum area of an isosceles triangle inscribed in the ellipse **x²/a² + y²/b² = 1** with its vertex at one end of the major axis.
6. Find the absolute maximum and minimum values of **f(x) = cos²x + sin x** on **[0, π]**.
7. Show that the altitude of the right circular cone of maximum volume that can be inscribed in a sphere of radius **R** is **4R / 3**.
8. Find the point on the curve **y² = 4x** that is nearest to **(2, −8)**.
9. Show that the curve **x = y²** and **xy = k** cut orthogonally if **8k² = 1**.
10. An open tank with a square base and vertical sides is to be constructed from a metal sheet so as to hold a given quantity of water **V**. Show that the cost of material will be least when the **depth of the tank is half of its width** (h = x/2).

---

### Answers

1. f'(x) = cos x + sin x = 0 ⇒ tan x = −1 ⇒ x = 3π/4, 7π/4.
   - Strictly increasing: **[0, 3π/4) ∪ (7π/4, 2π]**; Strictly decreasing: **(3π/4, 7π/4)**.
2. dy/dx = 2x − 2.
   (a) Parallel (m = 2): 2x − 2 = 2 ⇒ x = 2, y = 7 → Tangent: **2x − y + 3 = 0**.
   (b) Perpendicular to slope 3 (m = −1/3): 2x − 2 = −1/3 ⇒ x = 5/6, y = 217/36 → Tangent: **12x + 36y − 227 = 0**.
   Jaanch: (a) 2(2)−7+3 = 0; (b) 12(5/6) + 217 − 227 = 10 − 10 = 0 ✅
3. x = 0.04, Δx = −0.003, √0.04 = 0.2, f'(0.04) = 1/(2 × 0.2) = 2.5.
   √0.037 ≈ 0.2 + 2.5(−0.003) = 0.2 − 0.0075 = **0.1925** (≈ **0.193**).
   Jaanch: 0.1925² = 0.037056 ✅
4. Let distance from lamp = x, shadow length = s. By similar triangles: 6 / (x + s) = 2 / s ⇒ 6s = 2x + 2s ⇒ 4s = 2x ⇒ **s = x/2**.
   Differentiate: ds/dt = (1/2)(dx/dt) = (1/2)(5) = **2.5 km/h**!
   Jaanch: Shadow grows at half the man's walking speed = 2.5 km/h ✅
5. Place vertex at (−a, 0) and base vertices at (a cos θ, ±b sin θ).
   Area A(θ) = (1/2)(2b sin θ)(a + a cos θ) = **ab sin θ (1 + cos θ)**.
   A'(θ) = ab[ cos θ(1 + cos θ) − sin²θ ] = ab(2 cos²θ + cos θ − 1) = ab(2 cos θ − 1)(cos θ + 1) = 0 ⇒ **cos θ = 1/2 ⇒ θ = π/3**.
   A_max = ab(√3/2)(3/2) = **(3√3 / 4) ab**!
   Jaanch: For a circle (a = b = R), max inscribed triangle is equilateral with area (3√3/4)R² ✅
6. f'(x) = −2 cos x sin x + cos x = cos x (1 − 2 sin x) = 0 ⇒ x = π/2, π/6, 5π/6.
   Check {0, π/6, π/2, 5π/6, π}: f(0) = 1, f(π/6) = 3/4 + 1/2 = **5/4**, f(π/2) = 1, f(5π/6) = **5/4**, f(π) = 1.
   **Absolute max = 5/4**; **Absolute min = 1**!
   Jaanch: Rewrite f(x) = 1 − sin²x + sin x = 5/4 − (sin x − 1/2)² ∈ [1, 5/4] on [0, π] ✅
7. (Proved in Part 5 Q6: h = R + R/3 = **4R/3**, V'' < 0!)
8. Minimise D(y) = (y²/4 − 2)² + (y + 8)² ⇒ D'(y) = 2(y²/4 − 2)(y/2) + 2(y + 8) = y³/4 − 2y + 2y + 16 = y³/4 + 16 = 0 ⇒ y³ = −64 ⇒ **y = −4**, x = (−4)²/4 = **4**.
   D''(−4) = 3(16)/4 = 12 > 0 ⇒ Min! Nearest point: **(4, −4)**!
   Jaanch: At (4, −4), normal slope = −y/2 = +2; slope to (2, −8) is (−4 − (−8))/(4 − 2) = 4/2 = +2 (normal passes through (2, −8)!) ✅
9. (Proved in Part 3 Ex 3: x₀ = 1/2 ⇒ k^(2/3) = 1/2 ⇒ **8k² = 1**!)
10. Base side = x, depth = h; fixed V = x²h ⇒ h = V/x².
    Open-tank surface area S(x) = x² + 4xh = x² + 4V/x.
    S'(x) = 2x − 4V/x² = 0 ⇒ 2x³ = 4V ⇒ **V = x³/2**. Since V = x²h ⇒ x²h = x³/2 ⇒ **h = x/2**!
    S''(x) = 2 + 8V/x³ > 0 ⇒ Minimum cost!

---

## Chapter Ka Saar (Application of Derivatives Wrap-up)

| Topic | Key Formula / Rule | Must-Remember Fact |
|---|---|---|
| 1. Related Rates | dy/dt = (dy/dx)(dx/dt); MC = dC/dx | Plug numbers AFTER differentiating; decreasing = negative rate |
| 2. Monotonicity | f'(x) > 0 (inc), f'(x) < 0 (dec) | Factor f'(x) → critical points → sign chart |
| 3. Tangents & Normals | y − y₀ = m(x − x₀); m_N = −1/m | Horizontal: dy/dx = 0; Vertical: dx/dy = 0; Orthogonal: m₁m₂ = −1 |
| 4. Approximations | f(x + Δx) ≈ f(x) + f'(x) Δx | Choose nearest clean power x; watch sign of Δx! |
| 5. Maxima & Minima | f'(c) = 0; f''(c) < 0 (Max), > 0 (Min) | Closed [a, b]: check critical points + endpoints; square V² to avoid roots |

---

Ab tumne Application of Derivatives ke sabhi core concepts aur optimisation problems master kar liye hain! Competitive exams (JEE/Olympiad) ke liye **Proving Inequalities via Monotonicity, Concavity & Inflection Points, Shortest Distance Between Non-Intersecting Curves (Common Normal), aur Cubic Root Counting** padhne ke liye [Application of Derivatives — Gehrai Mein (Advanced Level)](application-of-derivatives-advanced.md) zaroor dekho.

**Agle chapter mein:** Hum Calculus ka doosra mahashaktishali pillar — **Integrals** — shuru karenge, jahan differentiation ka ulta safar (substitution, partial fractions, by parts aur definite integrals) seekhenge!
