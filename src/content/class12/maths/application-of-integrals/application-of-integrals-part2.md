> **Class:** 12 | **Subject:** Mathematics | **Chapter 8:** Application of Integrals (Part 2)

# Area Between a Curve and a Line

> **Pichle topic mein:** Humne [Area Under Simple Curves](application-of-integrals.md) padha. Ab hum seekhenge ki jab ek **straight line** kisi **parabola, circle, ya ellipse** ko kaat-ti hai, toh un dono ke beech ka enclosed area kaise nikala jata hai!

---

Lalit ek arch-bridge ka CAD drawing bana raha tha jahan parabolic arch **y² = 4x** ko ek diagonal support beam **y = 2x** kaat rahi thi. Beam aur arch ke beech ka exact concrete area nikalne ke liye Lalit ne pehle dono ke **intersection points** nikale (0, 0) aur (1, 2), phir **∫₀¹ (Upper Curve − Lower Line) dx** integrate karke exact area **1/3 sq units** nikal liya!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Points of Intersection** | Curve aur line ki equations ko ek saath solve karke mile exact crossing points — yahi definite integral ki **limits (a aur b)** bante hain! |
| **Upper − Lower Formula** | Vertical strips: **Area = ∫ₐᵇ (y_upper − y_lower) dx** |
| **Right − Left Formula** | Horizontal strips: **Area = ∫_c^d (x_right − x_left) dy** |

---

## 1. The 3-Step Blueprint

1. **Solve curve & line simultaneously** to find intersection points (limits of integration).
2. **Sketch both curves** to see which curve is on top (**y_upper**) and which is below (**y_lower**) — or which is to the right (**x_right**) vs left (**x_left**).
3. Integrate **∫ₐᵇ (y_upper − y_lower) dx** (or **∫_c^d (x_right − x_left) dy**)!

---

## Solved Examples

### Example 1: Area Between Parabola y² = 4x and Line y = 2x (Lalit's Problem!)
Find the area of the region bounded by the parabola **y² = 4x** and the line **y = 2x**.

**Solution:**
1. **Intersection points:** Substitute y = 2x into y² = 4x ⇒ 4x² = 4x ⇒ 4x(x − 1) = 0 ⇒ **x = 0** (y = 0) and **x = 1** (y = 2).
2. On [0, 1], compare heights (test x = 1/4): parabola gives y = 2√(1/4) = **1**, line gives y = 2(1/4) = **1/2** → **Parabola is UPPER**, **Line is LOWER**!
3. Integrate:
   Area = ∫₀¹ (2√x − 2x) dx = [ (4/3) x^(3/2) − x² ]₀¹ = (4/3 − 1) − 0 = **1/3 sq units**!

Jaanch: Horizontal strip check: ∫₀² (y/2 − y²/4) dy = [y²/4 − y³/12]₀² = 1 − 8/12 = 1 − 2/3 = 1/3 ✅

---

### Example 2: Area of Smaller Region Cut Off from Circle x² + y² = 4 by Line x = √3 y (1st Quadrant!)
Find the area in the **first quadrant** enclosed by the x-axis, the line **x = √3 y**, and the circle **x² + y² = 4**.

**Solution:**
1. **Intersection of circle and line in 1st quadrant:**
   Substitute x = √3 y into x² + y² = 4 ⇒ 3y² + y² = 4 ⇒ 4y² = 4 ⇒ **y = 1**, **x = √3**.
   Circle hits x-axis at **(2, 0)**.
2. **Split at x = √3** (from 0 to √3, top boundary is the **line y = x/√3**; from √3 to 2, top boundary is the **circle y = √(4 − x²)**!):
   - **Region 1 (0 to √3):** ∫₀^(√3) (x/√3) dx = [ x² / (2√3) ]₀^(√3) = 3 / (2√3) = **√3 / 2**.
   - **Region 2 (√3 to 2):** ∫_(√3)² √(4 − x²) dx = [ (x/2)√(4 − x²) + 2 sin⁻¹(x/2) ]_(√3)²
     = [ 0 + 2(π/2) ] − [ (√3/2)(1) + 2(π/3) ] = π − √3/2 − 2π/3 = **π/3 − √3/2**.
3. **Total Area** = √3/2 + (π/3 − √3/2) = **π / 3 sq units**!

Jaanch: Geometric sector check! Line y = (1/√3)x makes angle θ = 30° = π/6 with x-axis; circular sector area = (1/2)r²θ = (1/2)(4)(π/6) = π/3 ✅

---

### Example 3: Smaller Area Bounded by Ellipse x²/a² + y²/b² = 1 and Line x/a + y/b = 1
Find the area of the smaller region bounded by **x²/a² + y²/b² = 1** and **x/a + y/b = 1**.

**Solution:**
The line cuts the axes at **(a, 0)** and **(0, b)** — the exact 1st-quadrant vertices of the ellipse!
On [0, a]: Ellipse is **upper** (y = (b/a)√(a² − x²)), Line is **lower** (y = (b/a)(a − x)).
- Area under ellipse in Q1 = **πab / 4** (from Part 1!).
- Area under line (right triangle of legs a, b) = **ab / 2**.
- Enclosed Area = πab/4 − ab/2 = **(ab / 4)(π − 2) sq units**!

Jaanch: For a circle (a = b = r): (r²/4)(π − 2) = quarter circle − right triangle ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Circle aur line ke beech split point (x = √3) bhool jana:**
   - *Galat:* Seedha ∫₀² (circle − line) dx kar dena (jabki x = √3 ke baad line upar chali jati hai!).
   - *Sahi:* Hamesha rough sketch banao aur jahan upper boundary badle wahan integral **split** karo!

2. **Upper − Lower ulta kar dena:**
   - *Galat:* Negative area likh kar chhod dena.
   - *Sahi:* Interval ke beech ek test point par check karo kaunsa y bada hai — agar negative aaye toh absolute value lo (aur sketch recheck karo)!

---

## Quick Recap

- **Intersection points** give exact integration limits!
- **Vertical strips:** ∫ₐᵇ (y_upper − y_lower) dx; **Horizontal strips:** ∫_c^d (x_right − x_left) dy.
- **Sector / Triangle check:** Always cross-verify circle/line answers geometrically using (1/2)r²θ and (1/2)bh!

---

## Practice Questions

1. Find the area bounded by the parabola **y = x²** and the line **y = x**.
2. Find the area bounded by **x² = 4y** and the line **x = 4y − 2**.
3. Find the area of the smaller part of the circle **x² + y² = a²** cut off by the line **x = a / √2**.
4. Find the area in the first quadrant bounded by **x² + y² = 32**, the line **y = x**, and the x-axis.
5. Find the area bounded by **y² = 4x** and the line **x = 3**.
6. Find the area of the smaller region bounded by **x²/9 + y²/4 = 1** and **x/3 + y/2 = 1**.
7. Find the area bounded by the parabola **y = x²** and the line **y = 4**.
8. Find the area bounded by **y = x² + 2**, **y = x**, **x = 0**, and **x = 3**.
9. Find the area enclosed by the curve **y² = 4ax** and the line **y = mx** (m > 0).
10. Find the area of the region bounded by **y = x³**, the line **y = x** in the first quadrant.

---

### Answers

1. Intersect at x = 0, 1; line is upper on [0, 1]: ∫₀¹ (x − x²) dx = 1/2 − 1/3 = **1/6 sq units**.
   Jaanch: At x = 1/2: line = 1/2 > parabola = 1/4 ✅
2. Substitute 4y = x + 2 into x² = 4y ⇒ x² − x − 2 = 0 ⇒ (x − 2)(x + 1) = 0 ⇒ **x = −1, 2**.
   Line is upper: ∫₋₁² [ (x + 2)/4 − x²/4 ] dx = (1/4) [ x²/2 + 2x − x³/3 ]₋₁² = (1/4)[ (2 + 4 − 8/3) − (1/2 − 2 + 1/3) ] = (1/4)(9/2) = **9/8 sq units**!
   Jaanch: (10/3 − (−7/6))/4 = (27/6)/4 = 9/8 ✅
3. Symmetric above & below x-axis: Area = 2 ∫_(a/√2)ᵃ √(a² − x²) dx
   = 2 [ (a²/2)(π/2) − ((a/√2)(a/√2)/2 + (a²/2)(π/4)) ] = **(a²/2)(π/2 − 1) sq units**!
   Jaanch: Quarter circle (πa²/4) minus triangle (a²/2) = (a²/2)(π/2 − 1) ✅
4. Circle radius r = 4√2, line y = x makes angle π/4 (45°) with x-axis → Sector area = (1/2)(32)(π/4) = **4π sq units**! (Verify by splitting at x = 4: ∫₀⁴ x dx + ∫₄^(4√2) √(32 − x²) dx = 8 + (4π − 8) = 4π!)
   Jaanch: 8 + 4π − 8 = 4π ✅
5. Symmetric: 2 ∫₀³ 2√x dx = 4 [(2/3)x^(3/2)]₀³ = (8/3)(3√3) = **8√3 sq units**.
6. Using Example 3 formula (ab/4)(π − 2) with a = 3, b = 2: (6/4)(π − 2) = **(3/2)(π − 2) sq units**.
7. Intersect at x = ±2; symmetric: 2 ∫₀² (4 − x²) dx = 2 [4x − x³/3]₀² = 2(8 − 8/3) = **32/3 sq units**.
   Jaanch: 2 × (16/3) = 32/3 ✅
8. On [0, 3], x² + 2 > x always: ∫₀³ (x² − x + 2) dx = [x³/3 − x²/2 + 2x]₀³ = 9 − 9/2 + 6 = **21/2 sq units**.
9. Intersect at x = 0 and x = 4a/m²: ∫₀^(4a/m²) (2√(ax) − mx) dx = **8a² / (3m³) sq units**!
   Jaanch: Put a = 1, m = 2 (Example 1!) → 8(1)/(3×8) = 1/3 ✅
10. Intersect at x = 0, 1; line y = x is upper on [0, 1]: ∫₀¹ (x − x³) dx = 1/2 − 1/4 = **1/4 sq units**.

---

Ab tum kisi bhi curve aur line ke beech ka exact area (splitting aur symmetry ke saath) nikal sakte ho!

**Agle topic mein:** Hum [Area Between Two Curves and Triangle Area by Integration](application-of-integrals-part3.md) padhenge — jahan do intersecting parabolas, do circles aur 3-line triangles ke areas solve karenge!
