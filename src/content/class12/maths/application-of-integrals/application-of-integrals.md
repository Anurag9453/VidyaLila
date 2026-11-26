> **Class:** 12 | **Subject:** Mathematics | **Chapter 8:** Application of Integrals

# Area Under Simple Curves

> **Pichle chapter mein:** Humne [Integrals — Mixed Problems & Wrap-up](../integrals/integrals-part5.md) mein definite integrals aur **∫ √(a² − x²) dx** seekha. Ab hum integration ka sabse visual aur useful application — **curves ke neeche ka exact Area** (circle = πr², ellipse = πab, parabola, sine wave) — prove aur calculate karenge!

---

Kundan apne shehar ke elliptical cricket stadium ka turf area check kar raha tha: major semi-axis a = 80 m aur minor semi-axis b = 60 m. Coach ne kaha, "Circle ka area πr² sab jaante hain, par **Ellipse** ka area exact **πab** hota hai — aur yeh Calculus ke ek single definite integral se 4 lines mein prove hota hai!"

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Vertical Strip Method (∫ₐᵇ y dx)** | x-axis ke upar y = f(x) ke neeche, x = a se x = b tak area: **A = ∫ₐᵇ |f(x)| dx** |
| **Horizontal Strip Method (∫_c^d x dy)** | y-axis aur curve x = g(y) ke beech, y = c se y = d tak area: **A = ∫_c^d |g(y)| dy** |
| **Symmetry Multiplier** | Circle ya ellipse jaise symmetrical curves ke liye sirf **1st quadrant** ka area nikalkar **4 se multiply** kar do! |

---

## 1. Golden Rules for Area Calculation

1. **Always sketch a rough diagram FIRST** (mark intercepts, symmetry, and shaded region!).
2. **Area is ALWAYS POSITIVE!**
   - Agar curve x-axis ke neeche jata hai (f(x) < 0), toh definite integral negative aata hai! Isliye x-intercept par split karke har piece ka **absolute value | ... |** lo!
   - Example: ∫₀^(2π) sin x dx = 0 (net signed integral), par **Area bounded by y = sin x on [0, 2π]** = ∫₀^π sin x dx + |∫_π^(2π) sin x dx| = 2 + 2 = **4 sq units**!
3. **Most Used Integral in This Chapter:**
   **∫₀ᵃ √(a² − x²) dx = [ (x/2) √(a² − x²) + (a²/2) sin⁻¹(x/a) ]₀ᵃ = (a²/2)(π/2) = πa² / 4**!

---

## Solved Examples

### Example 1: Proving the Area of an Ellipse x²/a² + y²/b² = 1 Is πab (Kundan's Proof!)
Find the total area enclosed by the ellipse **x²/a² + y²/b² = 1** using integration.

**Solution:**
The ellipse is symmetric about BOTH x-axis and y-axis → **Total Area = 4 × (Area in 1st Quadrant)**!
In the 1st quadrant (0 ≤ x ≤ a, y ≥ 0):
y²/b² = 1 − x²/a² ⇒ **y = (b/a) √(a² − x²)**.
Area = 4 ∫₀ᵃ (b/a) √(a² − x²) dx
= (4b / a) × [ (x/2) √(a² − x²) + (a²/2) sin⁻¹(x/a) ]₀ᵃ
= (4b / a) × [ (0 + (a²/2)(π/2)) − (0 + 0) ]
= (4b / a) × (πa² / 4) = **π a b sq units**!

Jaanch: Put a = b = r (a circle!) → Area = πr² (exact match!) ✅

---

### Example 2: Area Under a Parabola in the First Quadrant
Find the area of the region bounded by the curve **y² = 9x**, x = 2, x = 4, and the x-axis in the first quadrant.

**Solution:**
In the 1st quadrant, y = **3 √x**.
Area = ∫₂⁴ 3 x^(1/2) dx = 3 × [ (2/3) x^(3/2) ]₂⁴
= 2 [ 4^(3/2) − 2^(3/2) ] = 2 (8 − 2√2) = **16 − 4√2 sq units**.

Jaanch: 16 − 4(1.414) ≈ 10.34; rectangle approximation (width 2, avg height ≈ 5.1) ≈ 10.2 ✅

---

### Example 3: Using Horizontal Strips (∫ x dy)
Find the area bounded by the parabola **x² = 4y**, y = 2, y = 4, and the y-axis in the first quadrant.

**Solution:**
Since limits are given on y (y = 2 to y = 4), use **horizontal strips (∫ x dy)**!
In 1st quadrant, **x = 2 √y**.
Area = ∫₂⁴ 2 y^(1/2) dy = 2 × [ (2/3) y^(3/2) ]₂⁴
= (4/3) (8 − 2√2) = **(32 − 8√2) / 3 sq units**.

Jaanch: (32 − 11.31)/3 ≈ 6.90; average width ≈ 3.45 × height 2 = 6.9 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **x-axis ke neeche wale region ka negative sign na hatana:**
   - *Galat:* y = cos x ka x = 0 se x = π tak area = ∫₀^π cos x dx = 0!
   - *Sahi:* cos x, x = π/2 par zero hota hai! Split karo: ∫₀^(π/2) cos x dx + |∫_(π/2)^π cos x dx| = 1 + |−1| = **2 sq units**!

2. **"First quadrant" likha hone par bhi 4 se multiply kar dena:**
   - *Galat:* Circle x² + y² = 16 in 1st quadrant ka area = 4 × 4π = 16π.
   - *Sahi:* Sawal dhyan se padho: "whole circle" → **4×**; "first quadrant" → **1×** (4π)!

---

## Quick Recap

- **Vertical strip:** A = ∫ₐᵇ |y| dx; **Horizontal strip:** A = ∫_c^d |x| dy.
- **Circle (x² + y² = a²):** Area = **πa²**; **Ellipse (x²/a² + y²/b² = 1):** Area = **πab**.
- **Sign change:** Always split at x-intercepts and add absolute values of each piece!

---

## Practice Questions

1. Find the area bounded by **y² = x**, the lines x = 1, x = 4, and the x-axis in the first quadrant.
2. Using integration, find the area of the circle **x² + y² = 16**.
3. Find the area enclosed by the ellipse **x²/16 + y²/9 = 1**.
4. Find the area bounded by **y = x²**, y = 1, y = 4, and the y-axis in the first quadrant.
5. Find the area bounded by **y = sin x** and the x-axis from **x = 0 to x = 2π**.
6. Find the area bounded by **y = cos x** and the x-axis from **x = 0 to x = π**.
7. Find the area bounded by **y = x³**, the x-axis, and the ordinates **x = −2** and **x = 1**.
8. Find the area bounded by **y = |x − 1|**, the x-axis, and the lines **x = −1** and **x = 3**.
9. Find the area of the region bounded by the parabola **y² = 4ax** and its **latus rectum** (x = a).
10. Find the area bounded by **y = eˣ**, the x-axis, and the lines **x = 0** and **x = 2**.

---

### Answers

1. ∫₁⁴ √x dx = [(2/3) x^(3/2)]₁⁴ = (2/3)(8 − 1) = **14/3 sq units**.
   Jaanch: (2/3)(7) = 14/3 ✅
2. 4 ∫₀⁴ √(16 − x²) dx = 4 × (π × 4² / 4) = **16π sq units**.
3. a = 4, b = 3 ⇒ Area = πab = **12π sq units**.
4. Horizontal strip (x = √y): ∫₁⁴ √y dy = **14/3 sq units**.
5. Split at x = π: ∫₀^π sin x dx + |∫_π^(2π) sin x dx| = 2 + |−2| = **4 sq units**.
6. Split at x = π/2: ∫₀^(π/2) cos x dx + |∫_(π/2)^π cos x dx| = 1 + |−1| = **2 sq units**.
7. Split at x = 0 (y < 0 on [−2, 0] and y > 0 on [0, 1]!):
   |∫₋₂⁰ x³ dx| + ∫₀¹ x³ dx = |0 − 16/4| + 1/4 = 4 + 1/4 = **17/4 sq units**!
   Jaanch: Without splitting you'd get −15/4 (wrong!); splitting gives +17/4 ✅
8. Split at x = 1: ∫₋₁¹ (1 − x) dx + ∫₁³ (x − 1) dx = 2 + 2 = **4 sq units**.
   Jaanch: Two right triangles of base 2, height 2 → 2 × (1/2)(2)(2) = 4 ✅
9. Symmetric above & below x-axis: Area = 2 ∫₀ᵃ 2√(ax) dx = 4√a × [(2/3) x^(3/2)]₀ᵃ = **8a² / 3 sq units**!
   Jaanch: For a = 1 (y² = 4x, x = 1): 8/3 sq units ✅
10. ∫₀² eˣ dx = [eˣ]₀² = **e² − 1 sq units**.

---

Ab tum simple curves ke neeche ka area (vertical/horizontal strips aur x-axis splits ke saath) bilkul smoothly nikal sakte ho!

**Agle topic mein:** Hum [Area Between a Curve and a Line](application-of-integrals-part2.md) padhenge — jahan parabola/circle/ellipse ko ek line kaat-ti hai aur hum exact enclosed area nikalte hain!
