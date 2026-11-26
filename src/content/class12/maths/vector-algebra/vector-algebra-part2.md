> **Class:** 12 | **Subject:** Mathematics | **Chapter 10:** Vector Algebra (Part 2)

# Components, Position Vector, Direction Cosines and Section Formula

> **Pichle topic mein:** Humne [Basic Concepts and Vector Addition](vector-algebra.md) padha. Ab hum har 3D vector ko 3 perpendicular unit vectors **î, ĵ, k̂** ke components mein todenge — aur **Direction Cosines (l, m, n)** aur **Section Formula** seekhenge!

---

Nirmal apne weather-station ke 3D radar par ek flying balloon track kar raha tha: station origin O(0, 0, 0) se balloon 3 km East (î), 4 km North (ĵ), aur 12 km upar (k̂) tha! Radar ne balloon ki exact position ek single vector mein dikhayi: **r⃗ = 3î + 4ĵ + 12k̂**, jiski origin se sidhi doori = √(3² + 4² + 12²) = **13 km**!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Position Vector (r⃗ = OP⃗)** | Origin O(0,0,0) se point P(x, y, z) tak ka vector: **r⃗ = xî + yĵ + zk̂**, magnitude **r = √(x² + y² + z²)** |
| **Direction Angles (α, β, γ)** | Vector r⃗ dwara positive x, y, z axes ke saath banaye gaye angles |
| **Direction Cosines (l, m, n)** | **l = cos α = x/r,   m = cos β = y/r,   n = cos γ = z/r** — hamesha **l² + m² + n² = 1**! |
| **Direction Ratios (a, b, c)** | Koi bhi teen numbers jo direction cosines (l, m, n) ke proportional hon (e.g., components x, y, z khud direction ratios hain!) |

---

## 1. Key Component Formulas

Let **a⃗ = a₁î + a₂ĵ + a₃k̂** and **b⃗ = b₁î + b₂ĵ + b₃k̂**:
1. **Addition / Scalar Multiplication:** a⃗ ± b⃗ = (a₁±b₁)î + (a₂±b₂)ĵ + (a₃±b₃)k̂; k a⃗ = ka₁î + ka₂ĵ + ka₃k̂.
2. **Vector Joining P(x₁, y₁, z₁) to Q(x₂, y₂, z₂):**
   **PQ⃗ = OQ⃗ − OP⃗ = (x₂ − x₁)î + (y₂ − y₁)ĵ + (z₂ − z₁)k̂** *(Head minus Tail!)*
3. **Unit Vector in Direction of a⃗:**
   **â = (a₁î + a₂ĵ + a₃k̂) / √(a₁² + a₂² + a₃²)** — Notice the components of **â** ARE the **direction cosines (l, m, n)**!
4. **Collinearity Test (Components):** a⃗ and b⃗ are collinear ⇔ **a₁/b₁ = a₂/b₂ = a₃/b₃ = λ**!
5. **Fundamental Direction Cosine Identity:**
   **l² + m² + n² = cos²α + cos²β + cos²γ = 1**
   *(Corollary: sin²α + sin²β + sin²γ = **2**!)*

---

## 2. Section Formula for Position Vectors

Let P and Q have position vectors **a⃗** and **b⃗**:
- **Internal division in ratio m : n:** **r⃗ = (m b⃗ + n a⃗) / (m + n)**
- **External division in ratio m : n:** **r⃗ = (m b⃗ − n a⃗) / (m − n)**
- **Midpoint (1 : 1):** **r⃗ = (a⃗ + b⃗) / 2**

---

## Solved Examples

### Example 1: Vector of Given Magnitude in the Direction of a⃗
Find a vector in the direction of **a⃗ = î − 2ĵ + 2k̂** that has magnitude **15 units**.

**Solution:**
1. Magnitude: |a⃗| = √(1² + (−2)² + 2²) = √(1 + 4 + 4) = √9 = **3**.
2. Unit vector: â = a⃗ / 3 = (1/3)î − (2/3)ĵ + (2/3)k̂.
3. Required vector of magnitude 15: 15 â = 15 × [(î − 2ĵ + 2k̂)/3] = **5î − 10ĵ + 10k̂**!

Jaanch: |5î − 10ĵ + 10k̂| = √(25 + 100 + 100) = √225 = 15 ✅

---

### Example 2: Vector Equally Inclined to All Three Axes (α = β = γ)
Show that the vector **î + ĵ + k̂** is equally inclined to the axes OX, OY, and OZ, and find its direction cosines.

**Solution:**
|î + ĵ + k̂| = √(1² + 1² + 1²) = **√3**.
Direction cosines:
**l = 1/√3,   m = 1/√3,   n = 1/√3**.
Since cos α = cos β = cos γ = 1/√3, we have **α = β = γ = cos⁻¹(1/√3)** — equally inclined to all three axes!

Jaanch: l² + m² + n² = 1/3 + 1/3 + 1/3 = 1 ✅

---

### Example 3: Internal & External Section Formula
Find the position vector of a point R which divides the line joining **P(î + 2ĵ − k̂)** and **Q(−î + ĵ + k̂)** in the ratio **2 : 1**: (a) internally, (b) externally.

**Solution:**
Here a⃗ = î + 2ĵ − k̂, b⃗ = −î + ĵ + k̂, m = 2, n = 1.
(a) **Internally:**
    r⃗ = [ 2(−î + ĵ + k̂) + 1(î + 2ĵ − k̂) ] / (2 + 1)
    = (−î + 4ĵ + k̂) / 3 = **−(1/3)î + (4/3)ĵ + (1/3)k̂**.
(b) **Externally:**
    r⃗ = [ 2(−î + ĵ + k̂) − 1(î + 2ĵ − k̂) ] / (2 − 1)
    = **−3î + 0ĵ + 3k̂ = −3î + 3k̂**.

Jaanch: Check internal: 2(−1)+1(1) = −1, 2(1)+1(2) = 4, 2(1)+1(−1) = 1; divided by 3 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Section formula mein m ko a⃗ se aur n ko b⃗ se multiply kar dena:**
   - *Galat:* (m a⃗ + n b⃗)/(m + n).
   - *Sahi:* Cross-multiply hota hai! **m × (door wala b⃗) + n × (a⃗)** = **(m b⃗ + n a⃗)/(m + n)**!

2. **PQ⃗ ko OP⃗ − OQ⃗ likh dena:**
   - *Galat:* Initial minus Terminal.
   - *Sahi:* Hamesha **Terminal (Head) minus Initial (Tail)**: **PQ⃗ = OQ⃗ − OP⃗**!

---

## Quick Recap

- **Magnitude:** |xî + yĵ + zk̂| = √(x² + y² + z²); **Unit vector:** â = a⃗/|a⃗|.
- **Direction Cosines:** l = x/|r⃗|, m = y/|r⃗|, n = z/|r⃗| with **l² + m² + n² = 1**.
- **Vector PQ⃗:** OQ⃗ − OP⃗ (Head − Tail).
- **Section Formula:** Internal (mb⃗ + na⃗)/(m + n); External (mb⃗ − na⃗)/(m − n).

---

## Practice Questions

1. Find the magnitude and direction cosines of **a⃗ = 2î − 3ĵ + 6k̂**.
2. Find the unit vector in the direction of **a⃗ + b⃗**, where **a⃗ = 2î + 2ĵ − 5k̂** and **b⃗ = 2î + ĵ + 3k̂**.
3. Find a vector in the direction of **5î − ĵ + 2k̂** which has magnitude **8 units**.
4. Find the scalar and vector components of the vector with initial point **(2, 1)** and terminal point **(−5, 7)**.
5. Show that the vectors **2î − 3ĵ + 4k̂** and **−4î + 6ĵ − 8k̂** are collinear.
6. Find the values of **x** and **y** so that the vectors **2î + 3ĵ** and **xî + yĵ** are equal.
7. Find the position vector of the midpoint of the vector joining **P(2, 3, 4)** and **Q(4, 1, −2)**.
8. Show that the points **A(1, 2, 7), B(2, 6, 3), and C(3, 10, −1)** are collinear using vectors.
9. Show that the points **A(2î − ĵ + k̂), B(î − 3ĵ − 5k̂), and C(3î − 4ĵ − 4k̂)** form the vertices of a **right-angled triangle**.
10. If a vector makes angles π/3 with î, π/4 with ĵ, and an acute angle θ with k̂, find **θ** and the components of a unit vector in that direction.

---

### Answers

1. |a⃗| = √(4 + 9 + 36) = √49 = **7**. Direction cosines: **2/7, −3/7, 6/7**.
   Jaanch: (2/7)² + (−3/7)² + (6/7)² = (4 + 9 + 36)/49 = 1 ✅
2. a⃗ + b⃗ = 4î + 3ĵ − 2k̂; |a⃗ + b⃗| = √(16 + 9 + 4) = √29.
   Unit vector = **(4/√29)î + (3/√29)ĵ − (2/√29)k̂**.
3. |5î − ĵ + 2k̂| = √(25 + 1 + 4) = √30 ⇒ Required vector = **(8/√30)(5î − ĵ + 2k̂) = (40/√30)î − (8/√30)ĵ + (16/√30)k̂**.
4. Vector = (−5 − 2)î + (7 − 1)ĵ = **−7î + 6ĵ**. Scalar components: **−7, 6**; Vector components: **−7î, 6ĵ**.
5. Second vector = −2(2î − 3ĵ + 4k̂) = −2 × (first vector) ⇒ **Collinear** (λ = −2)!
6. **x = 2, y = 3**.
7. Midpoint = [(2+4)/2]î + [(3+1)/2]ĵ + [(4−2)/2]k̂ = **3î + 2ĵ + k̂**.
8. AB⃗ = î + 4ĵ − 4k̂; BC⃗ = î + 4ĵ − 4k̂ = AB⃗ (same direction, common point B!) ⇒ **Collinear**!
9. AB⃗ = −î − 2ĵ − 6k̂ ⇒ |AB⃗|² = 1 + 4 + 36 = **41**.
   BC⃗ = 2î − ĵ + k̂ ⇒ |BC⃗|² = 4 + 1 + 1 = **6**.
   CA⃗ = −î + 3ĵ + 5k̂ ⇒ |CA⃗|² = 1 + 9 + 25 = **35**.
   Check Pythagoras: **|BC⃗|² + |CA⃗|² = 6 + 35 = 41 = |AB⃗|²** ⇒ Right-angled at C!
   Jaanch: 6 + 35 = 41 ✅
10. cos²(π/3) + cos²(π/4) + cos²θ = 1 ⇒ 1/4 + 1/2 + cos²θ = 1 ⇒ cos²θ = 1/4 ⇒ cos θ = +1/2 (acute!) ⇒ **θ = π/3**.
    Unit vector = **(1/2)î + (1/√2)ĵ + (1/2)k̂**!
    Jaanch: 1/4 + 1/2 + 1/4 = 1 ✅

---

Ab tum 3D position vectors, direction cosines aur section formula par poori pakad bana chuke ho!

**Agle topic mein:** Hum [Scalar (Dot) Product and Projection](vector-algebra-part3.md) padhenge — jahan do vectors ke beech ka angle, perpendicularity aur shadow (projection) seconds mein nikalenge!
