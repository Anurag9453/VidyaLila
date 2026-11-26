> **Class:** 12 | **Subject:** Mathematics | **Chapter 8:** Application of Integrals (Part 3)

# Area Between Two Curves and Triangle Area by Integration

> **Pichle topic mein:** Humne [Area Between a Curve and a Line](application-of-integrals-part2.md) padha. Ab hum do intersecting curves — jaise **do parabolas**, **do circles**, **circle & parabola**, aur **3 lines se bane triangle** — ke beech ka exact enclosed area nikalna seekhenge!

---

Madhu ek park mein patti (leaf) ke aakaar ka flowerbed design kar rahi thi jo do parabolas **y² = 4x** aur **x² = 4y** ke beech banta hai! Dono curves (0, 0) aur (4, 4) par milte hain — aur **∫₀⁴ (2√x − x²/4) dx** ne turant exact area **16/3 sq units** de diya (square 4 × 4 = 16 ka theek ek-tihai!)!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Area Between Two Curves** | Jab [a, b] par f(x) ≥ g(x) ho: **A = ∫ₐᵇ [f(x) − g(x)] dx** |
| **Crossing Curves** | Agar f(x) aur g(x) beech mein x = c par ek-doosre ko cross karein, toh x = c par split karo: **∫ₐᶜ (f − g) dx + ∫_c^b (g − f) dx**! |

---

## Solved Examples

### Example 1: Area Between Two Parabolas y² = 4ax and x² = 4ay
Find the area enclosed between the parabolas **y² = 4ax** and **x² = 4ay** (a > 0).

**Solution:**
1. **Intersection points:** From x² = 4ay ⇒ y = x²/(4a). Substitute into y² = 4ax:
   x⁴ / (16a²) = 4ax ⇒ x(x³ − 64a³) = 0 ⇒ **x = 0** (y = 0) and **x = 4a** (y = 4a).
2. On [0, 4a], upper curve is **y = 2√(ax)** and lower curve is **y = x²/(4a)**.
3. Integrate:
   Area = ∫₀^(4a) [ 2√a · x^(1/2) − x² / (4a) ] dx
   = [ (4/3)√a · x^(3/2) − x³ / (12a) ]₀^(4a)
   = (4/3)√a · (8 a^(3/2)) − 64a³ / (12a)
   = 32a² / 3 − 16a² / 3 = **16a² / 3 sq units**!
*(Note: Notice this is exactly **1/3 of the area of the bounding square** (4a × 4a = 16a²)!)*

Jaanch: For a = 1 (y² = 4x and x² = 4y): Area = 16/3 sq units ✅

---

### Example 2: Area Common to Two Intersecting Circles
Find the area of the region enclosed between the two circles **x² + y² = 4** and **(x − 2)² + y² = 4**.

**Solution:**
- Circle 1: centre **(0, 0)**, radius 2. Circle 2: centre **(2, 0)**, radius 2.
- **Intersection:** x² = (x − 2)² ⇒ 4x = 4 ⇒ **x = 1** (and y = ±√3).
- **Symmetry:** The lens region is symmetric about BOTH the x-axis AND the vertical line x = 1!
  So **Total Area = 4 × (Area in Q1 from x = 0 to x = 1 under Circle 2)**!
  *(Even simpler: from x = 1 to x = 2 under Circle 1: y = √(4 − x²)!)*
  Area = 4 ∫₁² √(4 − x²) dx
  = 4 [ (x/2)√(4 − x²) + 2 sin⁻¹(x/2) ]₁²
  = 4 { [ 0 + 2(π/2) ] − [ (1/2)√3 + 2(π/6) ] }
  = 4 (π − √3/2 − π/3) = 4 (2π/3 − √3/2) = **8π/3 − 2√3 sq units**!

Jaanch: 8π/3 − 2√3 ≈ 8.378 − 3.464 = 4.914 sq units (sensible fraction of circle area 4π ≈ 12.57!) ✅

---

### Example 3: Area of a Triangle Using Integration
Using integration, find the area of the triangle with vertices **A(1, 0), B(2, 2), and C(3, 1)**.

**Solution:**
1. Find the equations of all 3 sides:
   - **Line AB** (through (1,0), (2,2)): slope = 2 ⇒ **y = 2x − 2**
   - **Line BC** (through (2,2), (3,1)): slope = −1 ⇒ **y = 4 − x**
   - **Line AC** (through (1,0), (3,1)): slope = 1/2 ⇒ **y = (x − 1)/2**
2. **Area = Area(under AB, 1 to 2) + Area(under BC, 2 to 3) − Area(under AC, 1 to 3):**
   - ∫₁² (2x − 2) dx = [x² − 2x]₁² = (4 − 4) − (1 − 2) = **1**
   - ∫₂³ (4 − x) dx = [4x − x²/2]₂³ = (12 − 9/2) − (8 − 2) = 15/2 − 6 = **3/2**
   - ∫₁³ [(x − 1)/2] dx = [(x − 1)² / 4]₁³ = 4/4 − 0 = **1**
   Total Area = 1 + 3/2 − 1 = **3/2 = 1.5 sq units**!

Jaanch: Determinant formula check: (1/2)|det([1 0 1 ; 2 2 1 ; 3 1 1])| = (1/2)|1(1) + 1(−4)| = 3/2 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Two circles ke common area mein sirf 2 se multiply karna (4 ke bajaye!):**
   - *Galat:* 2 ∫₁² √(4 − x²) dx.
   - *Sahi:* Region x-axis ke upar-neeche (2×) AUR x = 1 ke left-right (2×) symmetric hai → total **4×**!

2. **Triangle ke vertices se lines banate waqt kaunsi 2 lines upar aur kaunsi neeche hain yeh sketch kiye bina subtract kar dena:**
   - *Galat:* Bina sketch kiye signs ghalat laga dena.
   - *Sahi:* Hamesha 3 points plot karke dekho kaunsi edges top aur kaunsi bottom hain, aur determinant formula se answer cross-check karo!

---

## Quick Recap

- **Two curves:** A = ∫ₐᵇ [y_upper − y_lower] dx (split whenever curves cross!).
- **Two parabolas y² = 4ax & x² = 4ay:** Exact area = **16a² / 3**.
- **Triangle by integration:** Always verify final area using Chapter 4 determinant formula!

---

## Practice Questions

1. Find the area bounded by the parabolas **y = x²** and **y² = x**.
2. Find the area bounded by **y = x²** and **y = 2x − x²**.
3. Find the area of the region enclosed by the parabola **y² = 4x** and the circle **4x² + 4y² = 9** (i.e., x² + y² = 9/4) — interior to both!
4. Find the area enclosed between **y = sin x** and **y = cos x** from **x = 0 to x = π/2** (careful: they cross at x = π/4!).
5. Using integration, find the area of the triangle whose vertices are **(−1, 0), (1, 3), and (3, 2)**.
6. Using integration, find the area of the triangular region whose sides have equations **y = 2x + 1**, **y = 3x + 1**, and **x = 4**.
7. Find the area bounded by the curves **x² + y² = 1** and **(x − 1)² + y² = 1**.
8. Find the area of the region bounded by **y = x² + 1** and **y = 2x + 1**.
9. Find the area bounded by **y = 4x − x²** and the x-axis, and compare it with the area between **y = 4x − x²** and **y = x**.
10. Find the area enclosed between the parabolas **y = x²** and **y = 8 − x²**.

---

### Answers

1. Formula 16a²/3 with 4a = 1 (a = 1/4): 16(1/16)/3 = **1/3 sq units**. (Direct: ∫₀¹ (√x − x²) dx = 2/3 − 1/3 = 1/3!)
   Jaanch: 2/3 − 1/3 = 1/3 ✅
2. Intersect: x² = 2x − x² ⇒ 2x² − 2x = 0 ⇒ x = 0, 1. Upper is 2x − x²:
   ∫₀¹ (2x − 2x²) dx = [x² − (2/3)x³]₀¹ = 1 − 2/3 = **1/3 sq units**.
3. Substitute y² = 4x into 4x² + 4y² = 9 ⇒ 4x² + 16x − 9 = 0 ⇒ (2x − 1)(2x + 9) = 0 ⇒ **x = 1/2** (y = ±√2).
   Symmetric above & below x-axis; split at x = 1/2:
   Area = 2 [ ∫₀^(1/2) 2√x dx + ∫_(1/2)^(3/2) √(9/4 − x²) dx ]
   = 2 [ (4/3)(1/(2√2)) + ((9/8)(π/2) − ((1/4)√2 + (9/8) sin⁻¹(1/3))) ]
   = **√2 / 6 + (9π / 8) − (9/4) sin⁻¹(1/3) sq units** (or √2/6 + (9/4) sin⁻¹(2√2/3)!).
4. Cross at x = π/4:
   ∫₀^(π/4) (cos x − sin x) dx + ∫_(π/4)^(π/2) (sin x − cos x) dx = (√2 − 1) + (√2 − 1) = **2√2 − 2 = 2(√2 − 1) sq units**!
   Jaanch: 2(0.414) = 0.828 > 0 ✅
5. Vertices A(−1,0), B(1,3), C(3,2): AB is y = (3/2)(x+1), BC is y = (7−x)/2, AC is y = (x+1)/2.
   Area = ∫₋₁¹ (3/2)(x+1) dx + ∫₁³ (7−x)/2 dx − ∫₋₁³ (x+1)/2 dx = 3 + 5 − 4 = **4 sq units**!
   Jaanch: Determinant check: (1/2)|det([−1 0 1 ; 1 3 1 ; 3 2 1])| = (1/2)|−1(1) + 1(−7)| = 8/2 = 4 ✅
6. Lines meet at (0, 1); at x = 4, y = 9 and y = 13: ∫₀⁴ [(3x + 1) − (2x + 1)] dx = ∫₀⁴ x dx = [x²/2]₀⁴ = **8 sq units**!
   Jaanch: Triangle base = 13 − 9 = 4, height = 4 → (1/2)(4)(4) = 8 ✅
7. Same as Example 2 with radius r = 1 (instead of 2, so area scales by 1/4!): **(2π/3) − √3/2 sq units**!
   Jaanch: (8π/3 − 2√3) / 4 = 2π/3 − √3/2 ✅
8. Intersect: x² + 1 = 2x + 1 ⇒ x = 0, 2. Line is upper: ∫₀² (2x − x²) dx = 4 − 8/3 = **4/3 sq units**.
9. With x-axis (x = 0 to 4): ∫₀⁴ (4x − x²) dx = 32 − 64/3 = **32/3**. With y = x (x = 0 to 3): ∫₀³ (3x − x²) dx = 27/2 − 9 = **9/2**.
10. Intersect: x² = 8 − x² ⇒ 2x² = 8 ⇒ x = ±2. Symmetric: 2 ∫₀² (8 − 2x²) dx = 2 [8x − (2/3)x³]₀² = 2(16 − 16/3) = **64/3 sq units**!
    Jaanch: 2 × (32/3) = 64/3 ✅

---

Ab tum do curves ke beech ka area aur integration se triangle area bilkul precision ke saath nikal sakte ho!

**Agle topic mein:** [Sab Kuch Mila Kar: Mixed Area Problems & Chapter Wrap-up](application-of-integrals-part4.md) mein hum poore Application of Integrals chapter ke mixed region problems aur final wrap-up table complete karenge!
