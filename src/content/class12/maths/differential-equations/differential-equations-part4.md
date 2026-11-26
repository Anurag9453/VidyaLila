> **Class:** 12 | **Subject:** Mathematics | **Chapter 9:** Differential Equations (Part 4)

# Sab Kuch Mila Kar: Mixed DE Problems, Applications and Chapter Wrap-up

> **Pichle topic mein:** Humne [Variable Separable, Homogeneous and Linear DEs](differential-equations-part3.md) padhe. Ab hum poore Differential Equations chapter — order/degree, formation, all 3 solution methods, aur real-world **Exponential Growth/Decay** word problems — ko ek saath milakar mixed high-scoring problems solve karenge!

---

Nandita apne biology lab ke bacteria culture ka count note kar rahi thi: shuruat (t = 0) mein 1,00,000 bacteria the, aur 2 ghante mein 10% badh gaye! Sawal tha: "Kitne ghante mein count 2,00,000 (double) ho jayega?" Kyunki bacteria ke badhne ka rate present count ke proportional hai (**dN/dt = kN**), ek simple variable-separable DE ne exact doubling time **2 ln 2 / ln(1.1) ≈ 14.55 hours** nikal kar de diya!

---

## Naye Shabd (Chapter Method-Selection Matrix)

| Clue in the First-Order DE | Choose This Method! |
|---|---|
| Factors cleanly into g(x) · h(y) | **Variable Separable** |
| Every term has same degree in (x, y), or contains y/x (or x/y) | **Homogeneous** (y = vx or x = vy) |
| y and dy/dx appear ONLY to power 1 (no y², sin y) | **Linear in y** (IF = e^(∫ P dx)) |
| x and dx/dy appear ONLY to power 1 (e.g., tan⁻¹y, eʸ) | **Linear in x** (IF = e^(∫ P dy)) |

---

## Mixed Solved Examples

### Example 1: Exponential Growth Word Problem (Nandita's Bank / Bacteria Model!)
In a bank, principal increases continuously at the rate of **5% per year**. In how many years will **₹1,000 double itself**? (Given ln 2 = 0.6931)

**Solution:**
Let principal at time t be P. Given dP/dt = (5/100) P = **0.05 P**.
Separate variables: dP / P = 0.05 dt ⇒ **ln P = 0.05 t + C**.
At t = 0, P = 1000 ⇒ C = ln 1000 ⇒ **ln(P / 1000) = 0.05 t**.
When P = 2000 (doubles):
ln(2000 / 1000) = 0.05 t ⇒ ln 2 = 0.05 t ⇒ **t = 0.6931 / 0.05 = 13.862 years**!

Jaanch: Rule of 70 check: 70 / 5 = 14 years (matches 13.86 years closely!) ✅

---

### Example 2: Finding Equation of a Curve Passing Through a Point (Linear DE)
Find the equation of a curve passing through **(0, 2)** given that the sum of the coordinates of any point on the curve exceeds the magnitude of the slope of the tangent to the curve at that point by **5** (assuming dy/dx > 0).

**Solution:**
Translated into a DE: x + y = dy/dx + 5 ⇒ **dy/dx − y = x − 5** (Linear in y!).
- P(x) = −1, Q(x) = x − 5 ⇒ **IF = e^(−x)**.
- Solution: y e^(−x) = ∫ (x − 5) e^(−x) dx + C.
  By parts (u = x − 5, v = e^(−x)):
  = (x − 5)(−e^(−x)) − ∫ (1)(−e^(−x)) dx + C = −(x − 5)e^(−x) − e^(−x) + C = **(4 − x)e^(−x) + C**.
- Multiply by eˣ: **y = 4 − x + C eˣ**.
- Passes through (0, 2): 2 = 4 − 0 + C ⇒ **C = −2**!
Equation of curve: **y = 4 − x − 2eˣ**!

Jaanch: At x = 0: y = 4 − 0 − 2 = 2; dy/dx = −1 − 2eˣ; check x + y − dy/dx = (4 − 2eˣ) − (−1 − 2eˣ) = 5 ✅

---

### Example 3: Homogeneous DE Particular Solution
Find the particular solution of **x² dy + (xy + y²) dx = 0** given **y = 1 when x = 1**.

**Solution:**
dy/dx = −(xy + y²)/x² = −(y/x) − (y/x)² (Homogeneous!).
Put y = vx ⇒ v + x dv/dx = −v − v² ⇒ x dv/dx = −v(v + 2).
Separate: **dv / [v(v + 2)] = −dx / x**.
Partial fractions: (1/2)[1/v − 1/(v + 2)] dv = −dx/x.
Integrate: (1/2) ln |v / (v + 2)| = −ln |x| + (1/2) ln C ⇒ **x² · [v / (v + 2)] = C** ⇒ **x² y / (y + 2x) = C**!
At x = 1, y = 1: C = 1(1)/(1 + 2) = **1/3**.
Particular solution: **y + 2x = 3x² y**!

Jaanch: At (1, 1): 1 + 2 = 3(1)(1) = 3 ✅

---

## Aam Galtiyan (Mixed-Problem Traps)

1. **Growth/decay word problem mein percentage r% ko r rakh dena (r/100 ke bajaye!):**
   - *Galat:* 5% per year ⇒ dP/dt = 5P.
   - *Sahi:* 5% = **5/100 = 0.05** ⇒ dP/dt = **0.05 P**!

2. **Particular solution mein C nikalna bhool jana:**
   - *Galat:* General solution likh kar chhod dena jab initial point (0, 2) diya ho.
   - *Sahi:* Initial condition substitute karke exact C nikalo aur final equation bina C ke likho!

---

## Quick Recap

- **Exponential Growth/Decay:** dN/dt = kN ⇒ **N(t) = N₀ e^(kt)**.
- **4-Step Check:** Order/Degree → Formation → Solve (Separable / Homogeneous / Linear) → Plug initial condition for C!

---

## Practice Questions

1. Find the order and degree of: **(d²y/dx²)² + cos(dy/dx) = 0** and **d³y/dx³ + 2(d²y/dx²)² − dy/dx + y = 0**.
2. Form the differential equation of the family of circles having centre on the y-axis and radius **3 units**: **x² + (y − b)² = 9**.
3. Find the general solution of **dy/dx + y cot x = 2x + x² cot x** (x ≠ 0).
4. Solve: **(x + y) dy/dx = 1** (Hint: rewrite as linear in x: dx/dy − x = y!).
5. Find the particular solution of **x (x² − 1) dy/dx = 1**, given **y = 0 when x = 2**.
6. Find the particular solution of **dy/dx + y cot x = 4x cosec x** (x ≠ 0), given **y = 0 when x = π/2**.
7. Solve the homogeneous DE: **2xy + y² − 2x² (dy/dx) = 0**, given **y = 2 when x = 1**.
8. The volume of a spherical balloon being inflated changes at a constant rate. If initially its radius is **3 units** and after **3 seconds** it is **6 units**, find the radius after **t seconds**.
9. Find the equation of a curve passing through **(0, 0)** whose differential equation is **y' = eˣ sin x**.
10. Find the integrating factor of: **(a) (x ln x) dy/dx + y = 2 ln x**, **(b) (1 − x²) dy/dx − xy = 1**.

---

### Answers

1. First: **Order 2, Degree Not defined**; Second: **Order 3, Degree 1**.
2. 1 constant (b): differentiate 2x + 2(y − b)y' = 0 ⇒ y − b = −x/y'.
   Substitute into x² + (y − b)² = 9: x² + x²/(y')² = 9 ⇒ **x²[(y')² + 1] = 9(y')²** (or (9 − x²)(y')² = x²)!
3. IF = e^(∫ cot x dx) = e^(ln sin x) = **sin x**.
   y sin x = ∫ (2x sin x + x² cos x) dx + C = **x² sin x + C** (notice d/dx(x² sin x) = 2x sin x + x² cos x!)
   ⇒ **y = x² + C / sin x**!
   Jaanch: Exact derivative spot saved doing integration by parts! ✅
4. dx/dy − x = y ⇒ IF = e^(−y). x e^(−y) = ∫ y e^(−y) dy + C = −(y + 1)e^(−y) + C ⇒ **x = −(y + 1) + C eʸ** (or x + y + 1 = C eʸ).
5. dy = dx / [x(x − 1)(x + 1)] = [−1/x + (1/2)/(x − 1) + (1/2)/(x + 1)] dx.
   y = (1/2) ln |(x² − 1)/x²| + C. At x = 2, y = 0: 0 = (1/2) ln(3/4) + C ⇒ **y = (1/2) ln |(x² − 1)/x²| − (1/2) ln(3/4)**.
6. IF = sin x. y sin x = ∫ 4x dx + C = 2x² + C.
   At x = π/2, y = 0: 0 = 2(π²/4) + C ⇒ C = −π²/2 → **y sin x = 2x² − π²/2**.
   Jaanch: At x = π/2: 0 = π²/2 − π²/2 = 0 ✅
7. Put y = vx: 2v + v² − 2(v + x dv/dx) = 0 ⇒ v² = 2x dv/dx ⇒ 2 dv/v² = dx/x ⇒ −2/v = ln |x| + C ⇒ **−2x/y = ln |x| + C**.
   At x = 1, y = 2: −1 = 0 + C ⇒ C = −1 → **y = 2x / (1 − ln |x|)**!
   Jaanch: At x = 1: y = 2/(1 − 0) = 2 ✅
8. dV/dt = k ⇒ (4/3)πr³ = kt + C. At t = 0, r = 3 ⇒ C = 36π. At t = 3, r = 6 ⇒ 288π = 3k + 36π ⇒ k = 84π.
   (4/3)πr³ = 84πt + 36π ⇒ r³ = 63t + 27 ⇒ **r = (63t + 27)^(1/3)**!
   Jaanch: At t = 0: 27^(1/3) = 3; at t = 3: (189 + 27)^(1/3) = 216^(1/3) = 6 ✅
9. y = ∫ eˣ sin x dx = (eˣ/2)(sin x − cos x) + C.
   At (0, 0): 0 = (1/2)(−1) + C ⇒ C = 1/2 → **2y − 1 = eˣ(sin x − cos x)**.
   Jaanch: At x = 0: 2(0) − 1 = −1 = 1(0 − 1) ✅
10. (a) P = 1/(x ln x) ⇒ IF = e^(ln(ln x)) = **ln x**.
    (b) P = −x/(1 − x²) ⇒ ∫ P dx = (1/2) ln(1 − x²) ⇒ IF = **√(1 − x²)**.
    Jaanch: d/dx ln(1 − x²) = −2x/(1 − x²) ⇒ (1/2) gives −x/(1 − x²) ✅

---

## Chapter Ka Saar (Differential Equations Wrap-up)

| Topic | Key Formula / Rule | Must-Remember Fact |
|---|---|---|
| 1. Order & Degree | Highest derivative = Order; its power (polynomial form) = Degree | sin(y'), e^(y') ⇒ Degree **not defined**; Particular sol has **0** constants |
| 2. Formation | Differentiate n times (n = independent constants) & eliminate | Combine dependent constants first (e.g., A e^(x+B) = C eˣ ⇒ order 1!) |
| 3. Variable Separable | ∫ f(y) dy = ∫ g(x) dx + C | Models exponential growth/decay dN/dt = kN |
| 4. Homogeneous | Same degree in every term → put **y = vx** or **x = vy** | Converts automatically into Variable Separable |
| 5. Linear First-Order | dy/dx + Py = Q ⇒ **IF = e^(∫P dx)**, **y·IF = ∫ Q·IF dx + C** | Make coeff of dy/dx = 1 first! Also check **Linear in x** (dx/dy + Px = Q) |

---

Ab tumne Differential Equations ke sabhi core concepts aur methods master kar liye hain! Competitive exams (JEE/Olympiad) ke liye **Bernoulli's Equation, Exact Differential Groupings, Reducible-to-Separable (ax + by + c), aur Orthogonal Trajectories** padhne ke liye [Differential Equations — Gehrai Mein (Advanced Level)](differential-equations-advanced.md) zaroor dekho.

**Agle chapter mein:** Hum **Vector Algebra** shuru karenge — jahan 3D arrows ke dot product, cross product, projections aur parallelogram/triangle areas seekhenge!
