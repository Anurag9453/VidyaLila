> **Class:** 12 | **Subject:** Mathematics | **Chapter 6:** Application of Derivatives (Part 3)

# Tangents and Normals

> **Pichle topic mein:** Humne [Increasing and Decreasing Functions](application-of-derivatives-part2.md) padha. Ab hum derivatives ka sabse famous geometric application — kisi curve par **Tangent Line**, **Normal Line**, aur do curves ke beech ka **Angle of Intersection (Orthogonal Curves)** — seekhenge!

---

Divyansh apne cycling velodrome (curved track) ke design model ko dekh raha tha: agar koi cyclist tezi se mod par phisal jaye, toh woh seedha track ke **tangent** ki disha mein jata hai, jabki track ka centripetal support force theek **90° andar (normal)** ki disha mein lagta hai! Calculus mein dy/dx humein har ek point (x₀, y₀) par in dono lines ki exact equations de deta hai!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Tangent Line at (x₀, y₀)** | Woh straight line jo curve ko (x₀, y₀) par just touch kare, jiska slope **m = (dy/dx)_(x₀,y₀)** hota hai |
| **Normal Line at (x₀, y₀)** | Tangent ke **perpendicular** line jo (x₀, y₀) se guzre, jiska slope **m_N = −1 / m** hota hai |
| **Orthogonal Curves** | Do curves jo apne intersection point par **90°** par kaatein (**m₁ · m₂ = −1**) |

---

## 1. Equations of Tangent & Normal at (x₀, y₀)

Let **m = (dy/dx)_(x₀, y₀)** be the slope of the tangent:
1. **Equation of Tangent:** **y − y₀ = m (x − x₀)**
2. **Equation of Normal (when m ≠ 0):** **y − y₀ = (−1/m) (x − x₀)**  (or **(x − x₀) + m(y − y₀) = 0**)

### Two Special Boundary Cases:
- **Tangent parallel to x-axis (Horizontal tangent):** **dy/dx = 0** ⇒ Tangent: **y = y₀**; Normal (vertical): **x = x₀**!
- **Tangent parallel to y-axis (Vertical tangent):** **dx/dy = 0** (dy/dx → ∞) ⇒ Tangent: **x = x₀**; Normal (horizontal): **y = y₀**!

---

## 2. Angle of Intersection of Two Curves

If two curves intersect at point P(x₀, y₀) with tangent slopes **m₁** and **m₂**, then the acute angle θ between them is:
**tan θ = | (m₁ − m₂) / (1 + m₁ m₂) |**
- **Curves touch each other (θ = 0°):** **m₁ = m₂**.
- **Curves cut orthogonally (θ = 90°):** **m₁ · m₂ = −1**!

---

## Solved Examples

### Example 1: Finding Tangent & Normal Equations at a Point
Find the equations of the tangent and normal to the curve **y = x⁴ − 6x³ + 13x² − 10x + 5** at **(0, 5)**.

**Solution:**
Differentiate: dy/dx = 4x³ − 18x² + 26x − 10.
At (0, 5): slope of tangent **m = 0 − 0 + 0 − 10 = −10**.
- **Tangent equation:** y − 5 = −10(x − 0) ⇒ **10x + y = 5**.
- **Normal slope:** m_N = −1/(−10) = **1/10**.
- **Normal equation:** y − 5 = (1/10)(x − 0) ⇒ **x − 10y + 50 = 0**.

Jaanch: Check (0, 5) on both: 10(0)+5 = 5; 0−50+50 = 0; slopes (−10)(1/10) = −1 ✅

---

### Example 2: Points Where Tangent Is Parallel to x-Axis or y-Axis
Find the points on the ellipse **x²/9 + y²/16 = 1** at which the tangents are:
(a) parallel to the x-axis,   (b) parallel to the y-axis.

**Solution:**
Differentiate implicitly: (2x)/9 + (2y/16)(dy/dx) = 0 ⇒ **dy/dx = −(16x) / (9y)**.
(a) **Parallel to x-axis (dy/dx = 0):** −16x/(9y) = 0 ⇒ **x = 0**.
    Substitute x = 0 in ellipse: y²/16 = 1 ⇒ **y = ±4** → Points: **(0, 4)** and **(0, −4)**.
(b) **Parallel to y-axis (dx/dy = 0):** −9y/(16x) = 0 ⇒ **y = 0**.
    Substitute y = 0 in ellipse: x²/9 = 1 ⇒ **x = ±3** → Points: **(3, 0)** and **(−3, 0)**.

Jaanch: Vertices of ellipse x²/3² + y²/4² = 1 are indeed (0, ±4) (horizontal tangents) and (±3, 0) (vertical tangents) ✅

---

### Example 3: Orthogonal Intersection Condition (Classic Exam Question!)
Prove that the curves **x = y²** and **xy = k** cut at right angles (orthogonally) if **8k² = 1**!

**Solution:**
1. **Find intersection point (x₀, y₀):**
   Substitute x = y² into xy = k ⇒ y³ = k ⇒ **y₀ = k^(1/3)** and **x₀ = k^(2/3)**.
2. **Find tangent slopes at (x₀, y₀):**
   - Curve 1 (x = y²): 1 = 2y(dy/dx) ⇒ **m₁ = 1 / (2y₀)**.
   - Curve 2 (xy = k): x(dy/dx) + y = 0 ⇒ **m₂ = −y₀ / x₀**.
3. **Orthogonality condition m₁ · m₂ = −1:**
   [ 1 / (2y₀) ] × [ −y₀ / x₀ ] = −1 ⇒ −1 / (2x₀) = −1 ⇒ **2x₀ = 1 ⇒ x₀ = 1/2**!
4. Substitute x₀ = k^(2/3) = 1/2 and cube both sides:
   (k^(2/3))³ = (1/2)³ ⇒ k² = 1/8 ⇒ **8k² = 1**! Proved!

Jaanch: At k = 1/(2√2): 8k² = 8(1/8) = 1, x₀ = 1/2, y₀ = 1/√2, m₁ = 1/√2, m₂ = −√2 → m₁m₂ = −1 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Normal ke slope ko +1/m likh dena:**
   - *Galat:* Tangent slope = 2 ⇒ Normal slope = 1/2.
   - *Sahi:* Perpendicular slopes ka product **−1** hota hai → Normal slope = **−1/2**!

2. **Point on curve check kiye bina external point ko (x₀, y₀) maan lena:**
   - *Galat:* "Tangent parallel to line y = 2x" mein line ka koi point le lena.
   - *Sahi:* Pehle **dy/dx = slope of line** solve karke curve par point (x₀, y₀) nikalo!

---

## Quick Recap

- **Tangent:** y − y₀ = m(x − x₀) where m = (dy/dx)_(x₀,y₀).
- **Normal:** y − y₀ = (−1/m)(x − x₀).
- **Horizontal tangent:** dy/dx = 0; **Vertical tangent:** dx/dy = 0.
- **Orthogonal curves:** **m₁ · m₂ = −1** at intersection point.

---

## Practice Questions

1. Find the slope of the tangent to the curve **y = 3x⁴ − 4x** at **x = 4**.
2. Find the slope of the normal to the curve **x = a cos³θ, y = a sin³θ** at **θ = π/4**.
3. Find the equation of the tangent to **y = x³ − x + 1** at the point whose x-coordinate is **2**.
4. Find the equation of the normal to **y² = 4x** at the point **(1, 2)**.
5. Find the equation of the tangent to **y = √(3x − 2)** which is parallel to the line **4x − 2y + 5 = 0**.
6. Find the equations of all lines having slope **2** that are tangents to the curve **y + 2 / (x − 3) = 0**.
7. Show that the tangents to the curve **y = 7x³ + 11** at **x = 2** and **x = −2** are parallel.
8. Find the point on **y = x³ − 11x + 5** at which the tangent is **y = x − 11**.
9. Show that the curves **y² = 4x** and **x² + y² − 6x + 1 = 0** touch each other at **(1, 2)**.
10. Find the angle of intersection of the curves **y = x²** and **x = y²** at **(1, 1)**.

---

### Answers

1. dy/dx = 12x³ − 4. At x = 4: 12(64) − 4 = 768 − 4 = **764**.
   Jaanch: 12 × 64 = 768; 768 − 4 = 764 ✅
2. dy/dx = −tan θ. At θ = π/4, tangent slope m = −1 ⇒ **Normal slope = −1/(−1) = +1**!
3. At x = 2: y = 8 − 2 + 1 = 7. dy/dx = 3x² − 1 ⇒ at x = 2, m = 11.
   Tangent: y − 7 = 11(x − 2) ⇒ **11x − y − 15 = 0**.
   Jaanch: 11(2) − 7 − 15 = 0 ✅
4. 2y(dy/dx) = 4 ⇒ dy/dx = 2/y. At (1, 2), m = 1 ⇒ Normal slope = −1.
   Normal: y − 2 = −1(x − 1) ⇒ **x + y = 3**.
   Jaanch: 1 + 2 = 3; slope −1 ⊥ +1 ✅
5. Line slope = 4/2 = 2. dy/dx = 3 / [2√(3x − 2)] = 2 ⇒ √(3x − 2) = 3/4 ⇒ 3x − 2 = 9/16 ⇒ 3x = 41/16 ⇒ x = 41/48, y = 3/4.
   Tangent: y − 3/4 = 2(x − 41/48) ⇒ **48x − 24y − 23 = 0**.
   Jaanch: 48(41/48) − 24(3/4) − 23 = 41 − 18 − 23 = 0 ✅
6. y = −2/(x − 3) ⇒ dy/dx = +2/(x − 3)² = 2 ⇒ (x − 3)² = 1 ⇒ x − 3 = ±1 ⇒ x = 4 (y = −2) or x = 2 (y = 2).
   Two tangents: **y − 2 = 2(x − 2) ⇒ 2x − y − 2 = 0**, and **y + 2 = 2(x − 4) ⇒ 2x − y − 10 = 0**!
   Jaanch: Both have slope 2 and pass through (2, 2) and (4, −2) ✅
7. dy/dx = 21x². At x = 2: m = 84; at x = −2: m = 84. Equal slopes ⇒ **parallel**!
8. Slope of y = x − 11 is 1. dy/dx = 3x² − 11 = 1 ⇒ 3x² = 12 ⇒ x = ±2.
   - At x = 2: curve gives y = 8 − 22 + 5 = −9; line gives y = 2 − 11 = −9 (**Matches! Point = (2, −9)**).
   - At x = −2: curve gives y = −8 + 22 + 5 = 19; line gives y = −13 (Reject!).
   Answer: **(2, −9)**!
9. Both pass through (1, 2) (4 = 4 and 1 + 4 − 6 + 1 = 0).
   - Curve 1: dy/dx = 2/y = 2/2 = **1**.
   - Curve 2: 2x + 2y(dy/dx) − 6 = 0 ⇒ dy/dx = (3 − x)/y = (3 − 1)/2 = **1**.
   Equal slopes (m₁ = m₂ = 1) at (1, 2) ⇒ **curves touch each other**!
10. At (1, 1): for y = x², m₁ = 2x = **2**; for x = y², m₂ = 1/(2y) = **1/2**.
    tan θ = |(2 − 1/2) / (1 + 2 × 1/2)| = (3/2) / 2 = **3/4** ⇒ **θ = tan⁻¹(3/4)**!
    Jaanch: (2 − 0.5)/(1 + 1) = 1.5/2 = 3/4 ✅

---

Ab tum kisi bhi curve par tangent, normal aur angle of intersection bilkul cleanly nikal sakte ho!

**Agle topic mein:** Hum [Approximations (Differentials)](application-of-derivatives-part4.md) padhenge — jahan bina calculator ke √36.6 aur (0.999)^(1/10) ki 3-decimal accurate value seconds mein nikalenge!
