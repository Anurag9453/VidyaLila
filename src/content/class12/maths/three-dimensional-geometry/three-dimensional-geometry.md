# Chapter 11: Three Dimensional Geometry

> **Class:** 12 | **Subject:** Mathematics  
> **Previous chapter:** [Vector Algebra (Part 5)](../vector-algebra/vector-algebra-part5.md)

---

Prabhat apne ghar ki chhat par ek naya flagpole lagwa raha tha. Flagpole ko sidha rakhne ke liye ek guy-wire chhat ke corner se pole ke top tak bandha gaya. Prabhat ne socha — agar chhat ka corner origin (0, 0, 0) ho, East x-axis, North y-axis aur Up z-axis ho, toh is tedhe wire ki exact 3D direction sirf teen angles (α, β, γ) ya teen numbers se kaise batayi jaye? Yahi se shuru hoti hai **Three Dimensional Geometry** — jahan pichhle chapter [Vector Algebra](../vector-algebra/vector-algebra.md) ke vectors ko hum lines aur planes ke equations mein badal dete hain!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Direction Angles (α, β, γ)** | Directed line positive x-, y-, z-axes ke saath jo angles banati hai (0 ≤ α, β, γ ≤ π) |
| **Direction Cosines (l, m, n)** | Direction angles ke cosines: **l = cos α, m = cos β, n = cos γ**, jahan **l² + m² + n² = 1** |
| **Direction Ratios (a, b, c)** | Koi bhi teen numbers jo direction cosines ke proportional hon: **l/a = m/b = n/c** (saare zero nahi ho sakte) |
| **Directed Line vs Undirected Line** | Directed line ke unique (l, m, n) hote hain; undirected line ke do sets hote hain: **(l, m, n)** aur **(−l, −m, −n)** |

---

## 1. Direction Cosines & Direction Ratios of a Line

Pichhle chapter [Vector Algebra](../vector-algebra/vector-algebra.md) mein humne unit vector r̂ = lî + mĵ + nk̂ dekha tha. Wahi idea ab 3D lines par lagta hai:

```
  Line L passing through origin with direction angles α, β, γ:
    Take point P(x, y, z) on L at distance r = OP > 0.
    x = r cos α = lr,   y = r cos β = mr,   z = r cos γ = nr
    Since x² + y² + z² = r²:
      (lr)² + (mr)² + (nr)² = r²
      ⇒  l² + m² + n² = 1  (Fundamental Identity!)
```

### Converting Direction Ratios (a, b, c) to Direction Cosines (l, m, n)
Agar (a, b, c) direction ratios hain, toh l = ka, m = kb, n = kc kisi non-zero k ke liye.
l² + m² + n² = 1 mein rakhne par:
- k²(a² + b² + c²) = 1 ⇒ **k = ± 1 / √(a² + b² + c²)**
- Isliye:
  **l = ± a / √(a² + b² + c²),   m = ± b / √(a² + b² + c²),   n = ± c / √(a² + b² + c²)**

### Line Passing Through Two Points P(x₁, y₁, z₁) and Q(x₂, y₂, z₂)
- **Direction Ratios:** a = x₂ − x₁,   b = y₂ − y₁,   c = z₂ − z₁
- **Distance PQ:** PQ = √[(x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²]
- **Direction Cosines:** l = (x₂ − x₁)/PQ,   m = (y₂ − y₁)/PQ,   n = (z₂ − z₁)/PQ

> **Coordinate Axes ke Direction Cosines:**
> - x-axis: **(1, 0, 0)**
> - y-axis: **(0, 1, 0)**
> - z-axis: **(0, 0, 1)**

---

## 2. Solved Examples

### Example 1: Direction cosines from given angles
**Question:** If a line makes angles 90°, 135°, 45° with the positive x, y, and z axes respectively, find its direction cosines.

**Solution:**
- l = cos 90° = **0**
- m = cos 135° = cos(180° − 45°) = **−1/√2**
- n = cos 45° = **1/√2**
- Direction cosines: **(0, −1/√2, 1/√2)**.

**Jaanch:** l² + m² + n² = 0² + (−1/√2)² + (1/√2)² = 0 + 1/2 + 1/2 = 1 ✅

---

### Example 2: Line equally inclined to all three coordinate axes
**Question:** Find the direction cosines of a line that makes equal angles with the positive coordinate axes.

**Solution:**
- Let α = β = γ ⇒ l = m = n.
- Using l² + m² + n² = 1 ⇒ 3l² = 1 ⇒ l = **±1/√3**.
- So direction cosines are **(1/√3, 1/√3, 1/√3)** or **(−1/√3, −1/√3, −1/√3)**.

**Jaanch:** (±1/√3)² + (±1/√3)² + (±1/√3)² = 1/3 + 1/3 + 1/3 = 1 ✅

---

### Example 3: Direction cosines from direction ratios
**Question:** A line has direction ratios −18, 12, −4. Find its direction cosines.

**Solution:**
- √(a² + b² + c²) = √[(−18)² + 12² + (−4)²] = √(324 + 144 + 16) = √484 = **22**.
- l = −18/22 = **−9/11**,   m = 12/22 = **6/11**,   n = −4/22 = **−2/11**.
- (Or opposite signs: 9/11, −6/11, 2/11 for the opposite orientation.)

**Jaanch:** (−9/11)² + (6/11)² + (−2/11)² = (81 + 36 + 4)/121 = 121/121 = 1 ✅

---

### Example 4: Direction cosines of a line joining two points & collinearity test
**Question:**
(a) Find the direction cosines of the line passing through P(−2, 4, −5) and Q(1, 2, 3).
(b) Show that the points A(2, 3, 4), B(−1, −2, 1), and C(5, 8, 7) are collinear.

**Solution:**
(a) DRs of PQ: (1 − (−2), 2 − 4, 3 − (−5)) = **(3, −2, 8)**.
    PQ = √(3² + (−2)² + 8²) = √(9 + 4 + 64) = **√77**.
    DCs = **(3/√77, −2/√77, 8/√77)**.
(b) DRs of AB: (−1 − 2, −2 − 3, 1 − 4) = **(−3, −5, −3)**.
    DRs of BC: (5 − (−1), 8 − (−2), 7 − 1) = **(6, 10, 6)**.
    Notice: 6/(−3) = 10/(−5) = 6/(−3) = **−2** (proportional!).
    Since AB and BC have proportional DRs and share common point B, **A, B, C are collinear**!

**Jaanch:** For (a), (9 + 4 + 64)/77 = 77/77 = 1 ✅; for (b), BC = −2(AB) with common point B ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Direction Ratios ko Direction Cosines samajh lena:**
   - Galat: "Line ke DRs (2, 3, 6) hain, isliye cos α = 2." (Impossible! cos α kabhi 1 se bada nahi ho sakta!)
   - Sahi: Pehle √(2² + 3² + 6²) = 7 se divide karo ⇒ DCs = (2/7, 3/7, 6/7).
2. **Alag-alag sign pick kar lena (± mein mix-up):**
   - Galat: DRs (3, −2, 8) se l = +3/√77, m = +2/√77, n = −8/√77 le lena.
   - Sahi: Ya toh teeno mein + sign lo **(3/√77, −2/√77, 8/√77)** ya teeno mein − sign **(−3/√77, 2/√77, −8/√77)** — beech mein signs alag-alag flip nahi kar sakte!
3. **α + β + γ = 180° maan lena:**
   - Galat: "α = 60°, β = 60° hai toh γ = 180° − 120° = 60°." (Triangle ka rule 3D direction angles par nahi lagta!)
   - Sahi: Hamesha **cos²α + cos²β + cos²γ = 1** use karo: (1/2)² + (1/2)² + cos²γ = 1 ⇒ cos²γ = 1/2 ⇒ **γ = 45° or 135°**!

---

## Quick Recap

- **l = cos α, m = cos β, n = cos γ**, always satisfying **l² + m² + n² = 1** (also **sin²α + sin²β + sin²γ = 2**).
- **DRs (a, b, c)** are any non-zero multiples of DCs; infinitely many sets of DRs exist for one line.
- Line through (x₁, y₁, z₁) and (x₂, y₂, z₂) has DRs **(x₂ − x₁, y₂ − y₁, z₂ − z₁)**.
- Three points A, B, C are **collinear** iff DRs of AB and BC are proportional.

---

## Practice Questions

1. Find the direction cosines of a line making angles 60°, 45°, 60° with the positive coordinate axes. Check if such a line exists!
2. A line makes angles 90°, 60°, and θ with the positive x, y, and z axes respectively. Find the possible values of θ.
3. Find the direction cosines of a line with direction ratios 2, −1, −2.
4. Find the direction cosines of the line passing through (4, 3, −5) and (−2, 1, −8).
5. Find the direction cosines of the sides of the triangle whose vertices are A(3, 5, −4), B(−1, 1, 2), and C(−5, −5, −2).
6. Show that the points (1, 2, 3), (4, 0, 4), and (−2, 4, 2) are collinear.
7. If a line has direction cosines (1/2, 1/2, n), find the possible values of n and the corresponding angle γ with the z-axis.
8. Prove that for any line with direction angles α, β, γ: sin²α + sin²β + sin²γ = 2.
9. Find the angle that a line with direction ratios (1, 1, √2) makes with the positive z-axis.
10. State True or False: The triple (1/2, 1/2, 1/2) can be the direction cosines of a line in 3D space.

### Answers

1. cos²60° + cos²45° + cos²60° = 1/4 + 1/2 + 1/4 = 1 ⇒ **Exists!** DCs = **(1/2, 1/√2, 1/2)**.
   Jaanch: 1/4 + 1/2 + 1/4 = 1 ✅
2. cos²90° + cos²60° + cos²θ = 1 ⇒ 0 + 1/4 + cos²θ = 1 ⇒ cos²θ = 3/4 ⇒ cos θ = ±√3/2 ⇒ **θ = 30° or 150°**.
3. √(4 + 1 + 4) = 3 ⇒ DCs = **(2/3, −1/3, −2/3)** (or opposite signs).
   Jaanch: 4/9 + 1/9 + 4/9 = 1 ✅
4. DRs = (−2−4, 1−3, −8−(−5)) = (−6, −2, −3); length = √(36+4+9) = 7.
   DCs = **(−6/7, −2/7, −3/7)** (or 6/7, 2/7, 3/7).
5. Side AB: DRs (−4, −4, 6), length = √68 = 2√17 ⇒ **(−2/√17, −2/√17, 3/√17)**.
   Side BC: DRs (−4, −6, −4), length = √68 = 2√17 ⇒ **(−2/√17, −3/√17, −2/√17)**.
   Side CA: DRs (8, 10, −2), length = √168 = 2√42 ⇒ **(4/√42, 5/√42, −1/√42)**.
6. DRs of AB = (3, −2, 1); DRs of AC = (−3, 2, −1) = −1 × DRs of AB, common point A ⇒ **Collinear**.
7. 1/4 + 1/4 + n² = 1 ⇒ n² = 1/2 ⇒ **n = ±1/√2**, so **γ = 45° or 135°**.
8. sin²α + sin²β + sin²γ = (1 − cos²α) + (1 − cos²β) + (1 − cos²γ) = 3 − (l² + m² + n²) = 3 − 1 = **2**.
9. √(1 + 1 + 2) = 2 ⇒ cos γ = √2/2 = 1/√2 ⇒ **γ = 45°** (or 135° for opposite direction).
10. **False** ❌ — (1/2)² + (1/2)² + (1/2)² = 3/4 ≠ 1.

---

Ab tum kisi bhi 3D line ki direction cosines aur direction ratios aasani se nikaal sakte ho! Agle part mein hum inhi direction ratios ki madad se 3D space mein ek poori line ka **Vector aur Cartesian Equation** likhenge: [Three Dimensional Geometry (Part 2)](three-dimensional-geometry-part2.md).
