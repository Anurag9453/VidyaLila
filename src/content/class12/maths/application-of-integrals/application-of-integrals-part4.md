> **Class:** 12 | **Subject:** Mathematics | **Chapter 8:** Application of Integrals (Part 4)

# Sab Kuch Mila Kar: Mixed Area Problems and Chapter Wrap-up

> **Pichle topic mein:** Humne [Area Between Two Curves and Triangle Area by Integration](application-of-integrals-part3.md) padha. Ab hum poore Application of Integrals chapter — simple curves, curve-line regions, inequality-defined shaded regions, modulus curves aur intersecting conics — ko ek saath jodkar mixed exam problems solve karenge!

---

Manju ek architectural blueprint contest mein thi jahan shaded skylight regions ko inequalities se describe kiya gaya tha — jaise **{(x, y) : 0 ≤ y ≤ x² + 1, 0 ≤ y ≤ x + 1, 0 ≤ x ≤ 2}**! Aisi inequalities ka matlab sirf itna hota hai: **sabhi conditions ko ek saath satisfy karne wala common region** shade karo aur jahan upper boundary switch ho wahan integral split kar do!

---

## Naye Shabd (Chapter Formula Snapshot)

- **Vertical Strip:** ∫ₐᵇ (y_upper − y_lower) dx; **Horizontal Strip:** ∫_c^d (x_right − x_left) dy.
- **Standard Areas:** Circle = πa²; Ellipse = πab; Parabola + Latus Rectum = 8a²/3; Two Parabolas y²=4ax & x²=4ay = **16a²/3**.
- **Key Integral:** ∫₀ᵃ √(a² − x²) dx = **πa² / 4**.

---

## Mixed Solved Examples

### Example 1: Inequality-Defined Multi-Boundary Region (Manju's Blueprint!)
Find the area of the region **{(x, y) : 0 ≤ y ≤ x² + 1, 0 ≤ y ≤ x + 1, 0 ≤ x ≤ 2}**.

**Solution:**
1. Find where y = x² + 1 and y = x + 1 intersect:
   x² + 1 = x + 1 ⇒ x(x − 1) = 0 ⇒ **x = 0** (y = 1) and **x = 1** (y = 2).
2. We need y to be **≤ BOTH** curves (i.e., below the **LOWER** of the two curves!):
   - On **[0, 1]** (test x = 1/2): x² + 1 = 1.25 < x + 1 = 1.5 → lower ceiling is **y = x² + 1**!
   - On **[1, 2]** (test x = 1.5): x + 1 = 2.5 < x² + 1 = 3.25 → lower ceiling is **y = x + 1**!
3. Split at x = 1 and integrate:
   Area = ∫₀¹ (x² + 1) dx + ∫₁² (x + 1) dx
   = [ x³/3 + x ]₀¹ + [ x²/2 + x ]₁²
   = (1/3 + 1) + [ (2 + 2) − (1/2 + 1) ]
   = 4/3 + 5/2 = (8 + 15) / 6 = **23 / 6 sq units**!

Jaanch: 4/3 ≈ 1.333, 5/2 = 2.5, sum = 3.833 = 23/6 ✅

---

### Example 2: Area Bounded by Parabola y = x² and Modulus Line y = |x|
Find the area of the region bounded by the curve **y = x²** and **y = |x|**.

**Solution:**
Both curves are **symmetric about the y-axis**!
In the 1st quadrant (x ≥ 0), y = |x| = **x**, which meets y = x² at **x = 0** and **x = 1** (with line x above parabola x²!).
Total Area = 2 × ∫₀¹ (x − x²) dx = 2 × [ x²/2 − x³/3 ]₀¹ = 2 × (1/2 − 1/3) = 2 × (1/6) = **1/3 sq units**!

Jaanch: Each symmetric wing has area 1/6 → total = 2 × (1/6) = 1/3 ✅

---

### Example 3: Circle Divided Into Two Parts by a Parabola
Find the area of the smaller region bounded by the circle **x² + y² = 16** and the parabola **y² = 6x** (exterior to the parabola vs interior to the parabola: find the area of the circle **interior to the parabola**!).

**Solution:**
1. **Intersection:** x² + 6x = 16 ⇒ x² + 6x − 16 = 0 ⇒ (x + 8)(x − 2) = 0 ⇒ **x = 2** (reject x = −8 since y² = 6x ≥ 0!). At x = 2, y = ±2√3.
2. Symmetric about x-axis; split at x = 2 (0 to 2 under parabola y = √(6x); 2 to 4 under circle y = √(16 − x²)):
   - Part 1: 2 ∫₀² √6 · x^(1/2) dx = 2√6 · [(2/3) x^(3/2)]₀² = (4√6 / 3)(2√2) = **16√3 / 3**.
   - Part 2: 2 ∫₂⁴ √(16 − x²) dx = 2 { [0 + 8(π/2)] − [1(2√3) + 8(π/6)] } = 2(4π − 2√3 − 4π/3) = **16π/3 − 4√3**.
3. **Total Interior Area** = 16√3/3 + 16π/3 − 4√3 = **16π/3 + 4√3/3 = (4/3)(4π + √3) sq units**!
   *(And Exterior Area = 16π − (16π/3 + 4√3/3) = (4/3)(8π − √3) sq units!)*

Jaanch: Interior + Exterior = 16π/3 + 4√3/3 + 32π/3 − 4√3/3 = 48π/3 = 16π (exact circle area!) ✅

---

## Aam Galtiyan (Mixed-Problem Traps)

1. **Inequality y ≤ f(x) AND y ≤ g(x) mein UPPER curve le lena:**
   - *Galat:* Dono mein se bade y ke neeche integrate kar dena.
   - *Sahi:* Dono inequalities ek saath satisfy tab hongi jab y **chhote (LOWER) curve** ke neeche ho!

2. **Symmetry (2× ya 4×) apply karte waqt bhool jana ki y = |x| y-axis ke symmetric hai:**
   - *Galat:* Sirf 1st quadrant ka area 1/6 likh kar ruk jana.
   - *Sahi:* y = x² aur y = |x| dono even functions hain → left aur right dono wings hain → **2 × (1/6) = 1/3**!

---

## Quick Recap

- **Inequality system y ≤ f(x), y ≤ g(x):** Shade below **min(f(x), g(x))**; split at intersection points!
- **Symmetry check:** Even functions (x², |x|, cos x) → 2 × right half; circles/ellipses → 4 × first quadrant!
- **Sanity check:** Interior + Exterior of a circle MUST sum to πr²!

---

## Practice Questions

1. Find the area of the region **{(x, y) : x² ≤ y ≤ x}**.
2. Find the area of the region **{(x, y) : x² ≤ y ≤ |x|}**.
3. Sketch and find the area bounded by **y = |x + 3|**, the x-axis, and **x = −6** to **x = 0**.
4. Find the area bounded by **y² = 4ax** and **y = 2a**, y-axis in the first quadrant.
5. Find the area of the region **{(x, y) : y² ≤ 4x, 4x² + 4y² ≤ 9}** (Hint: same intersection x = 1/2 as Part 3 Q3!).
6. Find the area of the region bounded by **y = cos x**, **y = sin x**, **x = 0**, and **x = π/4**.
7. Using integration, find the area of the region bounded by the lines **2x + y = 4**, **3x − 2y = 6**, and **x − 3y + 5 = 0**.
8. Find the area of the smaller region bounded by the circle **x² + y² = 9** and the line **x + y = 3**.
9. Find the area enclosed by **|x| + |y| = 1** using integration.
10. Find the area bounded by **y = x³**, the x-axis, and **x = −1** to **x = 2**.

---

### Answers

1. Intersect at x = 0, 1: ∫₀¹ (x − x²) dx = **1/6 sq units**.
2. Symmetric about y-axis: 2 ∫₀¹ (x − x²) dx = **1/3 sq units**.
3. Vertex at x = −3; split at x = −3: ∫₋₆⁻³ −(x + 3) dx + ∫₋₃⁰ (x + 3) dx = 9/2 + 9/2 = **9 sq units**.
   Jaanch: Two right triangles of legs (3, 3) → 2 × 4.5 = 9 ✅
4. Horizontal strip (x = y²/(4a), y from 0 to 2a): ∫₀^(2a) (y² / 4a) dy = [y³/(12a)]₀^(2a) = 8a³/(12a) = **2a² / 3 sq units**.
5. **√2/6 + (9π/8) − (9/4) sin⁻¹(1/3) sq units** (or √2/6 + (9/4) sin⁻¹(2√2/3)).
6. On [0, π/4], cos x ≥ sin x: ∫₀^(π/4) (cos x − sin x) dx = [sin x + cos x]₀^(π/4) = (1/√2 + 1/√2) − (0 + 1) = **√2 − 1 sq units**.
   Jaanch: √2 − 1 ≈ 0.414 > 0 ✅
7. Vertices of triangle by pairwise intersection: A(1, 2), B(2, 0), C(4, 3).
   Integrate AC (1 to 4) minus AB (1 to 2) minus BC (2 to 4):
   = 15/2 − 1 − 3 = **7/2 = 3.5 sq units**!
   Jaanch: Determinant check: (1/2)|det([1 2 1 ; 2 0 1 ; 4 3 1])| = (1/2)|1(−3) − 2(−2) + 1(6)| = 7/2 ✅
8. Quarter circle (r = 3) minus right triangle (legs 3, 3) = 9π/4 − 9/2 = **(9/4)(π − 2) sq units**.
9. Diamond (square) symmetric in all 4 quadrants; in Q1, x + y = 1 ⇒ y = 1 − x:
   Total Area = 4 ∫₀¹ (1 − x) dx = 4 × (1/2) = **2 sq units**!
   Jaanch: Diagonal d = 2 ⇒ square area = d²/2 = 4/2 = 2 ✅
10. Split at x = 0: |∫₋₁⁰ x³ dx| + ∫₀² x³ dx = 1/4 + 4 = **17/4 sq units**!
    Jaanch: 0.25 + 4 = 4.25 = 17/4 ✅

---

## Chapter Ka Saar (Application of Integrals Wrap-up)

| Topic | Key Formula | Must-Remember Fact |
|---|---|---|
| 1. Simple Curves | A = ∫ₐᵇ abs(y) dx or ∫_c^d abs(x) dy | Split at x-intercepts; Circle = πa², Ellipse = πab |
| 2. Curve & Line | A = ∫ₐᵇ (y_upper − y_lower) dx | Solve simultaneously for limits; split where upper boundary changes |
| 3. Two Curves & Triangles | Split at crossing points; 16a²/3 for two parabolas | Cross-check triangle areas via determinants & circle sectors via (1/2)r²θ |
| 4. Inequality Regions | y ≤ f(x) and y ≤ g(x) ⇒ integrate min(f, g) | Use symmetry (2× or 4×) to cut work in half! |

---

Ab tumne Application of Integrals ke sabhi core area problems master kar liye hain! Competitive exams (JEE/Olympiad) ke liye **Archimedes' 4/3 Parabolic Rule, Inverse-Function Area Symmetry, Parametric Curve Areas (Cycloid & Astroid), aur Area Bisection** padhne ke liye [Application of Integrals — Gehrai Mein (Advanced Level)](application-of-integrals-advanced.md) zaroor dekho.

**Agle chapter mein:** Hum **Differential Equations** shuru karenge — jahan derivatives se bani equations ka order/degree nikalna aur Variable Separable, Homogeneous aur Linear First-Order methods se unhe solve karna seekhenge!
