> **Class:** 12 | **Subject:** Mathematics | **Chapter 10:** Vector Algebra (Part 3)

# Scalar (Dot) Product and Projection

> **Pichle topic mein:** Humne [Components, Position Vector, Direction Cosines and Section Formula](vector-algebra-part2.md) padha. Ab hum do vectors ko multiply karne ka pehla tareeka — **Scalar (Dot) Product (a⃗ · b⃗)** — padhenge, jo humein ek single number (scalar) deta hai aur angles, perpendicularity aur shadows (projections) seconds mein nikal deta hai!

---

Padma apne terrace par solar panel laga rahi thi: suraj ki kirnein ek direction vector **a⃗** se aa rahi thin, aur panel ke perpendicular (normal) ki disha **b⃗** thi! Panel par kitni effective roshni padegi? Yeh seedha **a⃗ ka b⃗ par projection = (a⃗ · b⃗) / |b⃗|** se pata chalta hai! Agar kirnein panel ke bilkul parallel (90° to normal) hon, toh **a⃗ · b⃗ = 0** (zero power)!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Scalar (Dot) Product (a⃗ · b⃗)** | **a⃗ · b⃗ = (len a⃗)(len b⃗) cos θ** — output hamesha ek **real number (scalar)** hota hai! |
| **Orthogonality (Perpendicularity)** | Do non-zero vectors perpendicular hain **⇔ a⃗ · b⃗ = 0**! |
| **Scalar Projection of a⃗ on b⃗** | a⃗ ki shadow (length with sign) vector b⃗ par: **(a⃗ · b⃗) / (len b⃗) = a⃗ · b̂** |
| **Vector Projection of a⃗ on b⃗** | Scalar projection × unit vector b̂: **[ (a⃗ · b⃗) / (len b⃗)² ] b⃗** |

---

## 1. Key Dot-Product Formulas & Properties

Let **a⃗ = a₁î + a₂ĵ + a₃k̂** and **b⃗ = b₁î + b₂ĵ + b₃k̂**:
1. **Unit-Vector Table:** **î·î = ĵ·ĵ = k̂·k̂ = 1**; **î·ĵ = ĵ·k̂ = k̂·î = 0**.
2. **Component Formula:** **a⃗ · b⃗ = a₁b₁ + a₂b₂ + a₃b₃**.
3. **Commutative & Distributive:** **a⃗ · b⃗ = b⃗ · a⃗**; a⃗ · (b⃗ + c⃗) = a⃗·b⃗ + a⃗·c⃗.
4. **Self-Dot Identity:** **a⃗ · a⃗ = |a⃗|²**!
   - **|a⃗ + b⃗|² = |a⃗|² + |b⃗|² + 2(a⃗ · b⃗)**
   - **|a⃗ − b⃗|² = |a⃗|² + |b⃗|² − 2(a⃗ · b⃗)**
   - **(a⃗ + b⃗) · (a⃗ − b⃗) = |a⃗|² − |b⃗|²**
5. **Angle Between Two Vectors:** **cos θ = (a⃗ · b⃗) / (|a⃗| |b⃗|)** (0 ≤ θ ≤ π).
6. **Cauchy–Schwarz Inequality:** **|a⃗ · b⃗| ≤ |a⃗| |b⃗|** (since |cos θ| ≤ 1!).

---

## Solved Examples

### Example 1: Finding Angle Between Two 3D Vectors
Find the angle θ between **a⃗ = î − 2ĵ + 3k̂** and **b⃗ = 3î − 2ĵ + k̂**.

**Solution:**
- a⃗ · b⃗ = 1(3) + (−2)(−2) + 3(1) = 3 + 4 + 3 = **10**.
- |a⃗| = √(1 + 4 + 9) = **√14**; |b⃗| = √(9 + 4 + 1) = **√14**.
- cos θ = 10 / (√14 × √14) = 10 / 14 = **5/7** ⇒ **θ = cos⁻¹(5/7)**!

Jaanch: 5/7 ≈ 0.714 ∈ [−1, 1] (valid acute angle!) ✅

---

### Example 2: Finding Scalar & Vector Projection
Find the projection of **a⃗ = î + 3ĵ + 7k̂** on **b⃗ = 7î − ĵ + 8k̂**.

**Solution:**
- a⃗ · b⃗ = 1(7) + 3(−1) + 7(8) = 7 − 3 + 56 = **60**.
- |b⃗| = √(49 + 1 + 64) = **√114**.
- **Scalar projection of a⃗ on b⃗** = (a⃗ · b⃗) / |b⃗| = **60 / √114**.
- **Vector projection** = (60 / 114)(7î − ĵ + 8k̂) = **(10/19)(7î − ĵ + 8k̂)**.

Jaanch: 7 − 3 + 56 = 60; 49 + 1 + 64 = 114 ✅

---

### Example 3: Using |a⃗ + b⃗|² Identity
If **|a⃗| = 2, |b⃗| = 3**, and **a⃗ · b⃗ = 4**, find **|a⃗ − b⃗|**.

**Solution:**
|a⃗ − b⃗|² = |a⃗|² + |b⃗|² − 2(a⃗ · b⃗) = 2² + 3² − 2(4) = 4 + 9 − 8 = **5**.
Therefore, **|a⃗ − b⃗| = √5**!

Jaanch: 4 + 9 − 8 = 5 > 0 ⇒ √5 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Projection of a⃗ ON b⃗ mein |a⃗| se divide kar dena:**
   - *Galat:* (a⃗ · b⃗) / |a⃗|.
   - *Sahi:* Jis vector **PAR (ON b⃗)** projection gir rahi hai, hamesha **USI ke magnitude |b⃗|** se divide karo → **(a⃗ · b⃗) / |b⃗|**!

2. **a⃗ · b⃗ = 0 hone par seedha "a⃗ ⊥ b⃗" bol dena (zero vector check kiye bina!):**
   - *Galat:* a⃗ · b⃗ = 0 ⇒ a⃗ ⊥ b⃗ hamesha.
   - *Sahi:* Agar a⃗ = 0⃗ ya b⃗ = 0⃗ ho tab bhi a⃗ · b⃗ = 0 hota hai! Perpendicularity tabhi jab **dono non-zero** hon!

---

## Quick Recap

- **Dot product:** a⃗ · b⃗ = |a⃗||b⃗| cos θ = a₁b₁ + a₂b₂ + a₃b₃ (scalar!).
- **Perpendicular (non-zero):** a⃗ · b⃗ = 0.
- **Projection of a⃗ on b⃗:** **(a⃗ · b⃗) / |b⃗|** (divide by the "ON" vector!).
- **Norm square:** |a⃗ ± b⃗|² = |a⃗|² + |b⃗|² ± 2(a⃗ · b⃗).

---

## Practice Questions

1. Find the angle between two vectors a⃗ and b⃗ with magnitudes √3 and 2 respectively, having a⃗ · b⃗ = √6.
2. Find the value of **λ** so that **a⃗ = 2î + λĵ + k̂** and **b⃗ = î − 2ĵ + 3k̂** are perpendicular.
3. Find the projection of **î − ĵ** on **î + ĵ**.
4. Find **|a⃗|** and **|b⃗|** if **(a⃗ + b⃗) · (a⃗ − b⃗) = 8** and **|a⃗| = 8 |b⃗|**.
5. If **â** and **b̂** are unit vectors and θ is the angle between them, prove that **sin(θ/2) = (1/2) |â − b̂|**.
6. If **a⃗ = 5î − ĵ − 3k̂** and **b⃗ = î + 3ĵ − 5k̂**, show that **a⃗ + b⃗** and **a⃗ − b⃗** are perpendicular.
7. Find **|x⃗|** if for a unit vector **â**, **(x⃗ − â) · (x⃗ + â) = 12**.
8. If **a⃗ = 2î + 2ĵ + 3k̂**, **b⃗ = −î + 2ĵ + k̂**, and **c⃗ = 3î + ĵ** are such that **a⃗ + λb⃗** is perpendicular to **c⃗**, find the value of **λ**.
9. If **a⃗ + b⃗ + c⃗ = 0⃗** with **|a⃗| = 3, |b⃗| = 5, |c⃗| = 7**, find the angle between **a⃗** and **b⃗**!
10. Show that the three vectors (1/7)(2î + 3ĵ + 6k̂), (1/7)(3î − 6ĵ + 2k̂), and (1/7)(6î + 2ĵ − 3k̂) are mutually perpendicular unit vectors.

---

### Answers

1. cos θ = √6 / (√3 × 2) = √2 / 2 = 1/√2 ⇒ **θ = π/4 (45°)**.
   Jaanch: √6 / (2√3) = 1/√2 ✅
2. a⃗ · b⃗ = 2(1) + λ(−2) + 1(3) = 0 ⇒ 5 − 2λ = 0 ⇒ **λ = 5/2**.
   Jaanch: 2 − 5 + 3 = 0 ✅
3. (î − ĵ) · (î + ĵ) = 1 − 1 = **0** ⇒ Projection = **0** (they are perpendicular!).
4. |a⃗|² − |b⃗|² = 8 ⇒ 64|b⃗|² − |b⃗|² = 8 ⇒ 63|b⃗|² = 8 ⇒ **|b⃗| = (2√2)/(3√7)** and **|a⃗| = (16√2)/(3√7)**.
5. |â − b̂|² = |â|² + |b̂|² − 2|â||b̂| cos θ = 1 + 1 − 2 cos θ = 2(1 − cos θ) = 4 sin²(θ/2).
   Take positive root (θ/2 ∈ [0, π/2]): |â − b̂| = 2 sin(θ/2) ⇒ **sin(θ/2) = (1/2) |â − b̂|**!
6. (a⃗ + b⃗) · (a⃗ − b⃗) = |a⃗|² − |b⃗|² = (25 + 1 + 9) − (1 + 9 + 25) = 35 − 35 = **0** ⇒ Perpendicular!
7. |x⃗|² − |â|² = 12 ⇒ |x⃗|² − 1 = 12 ⇒ |x⃗|² = 13 ⇒ **|x⃗| = √13**.
8. a⃗ + λb⃗ = (2 − λ)î + (2 + 2λ)ĵ + (3 + λ)k̂.
   Dot with c⃗ = 3î + ĵ + 0k̂ = 0: 3(2 − λ) + 1(2 + 2λ) = 0 ⇒ 6 − 3λ + 2 + 2λ = 0 ⇒ 8 − λ = 0 ⇒ **λ = 8**!
   Jaanch: (2−8)(3) + (2+16)(1) = −18 + 18 = 0 ✅
9. Rewrite a⃗ + b⃗ = −c⃗ and square: |a⃗|² + |b⃗|² + 2|a⃗||b⃗| cos θ = |c⃗|² ⇒ 9 + 25 + 30 cos θ = 49 ⇒ 30 cos θ = 15 ⇒ cos θ = 1/2 ⇒ **θ = π/3 (60°)**!
   Jaanch: 9 + 25 + 30(1/2) = 34 + 15 = 49 = 7² ✅
10. Each has magnitude √(4+9+36)/7 = 7/7 = **1**. Pairwise dots: (6−18+12)/49 = 0, (12+6−18)/49 = 0, (18−12−6)/49 = 0 ⇒ mutually perpendicular unit vectors!

---

Ab tum dot product, angles aur projections ke har sawal ko smoothly solve kar sakte ho!

**Agle topic mein:** Hum [Vector (Cross) Product, Area of Triangle and Parallelogram](vector-algebra-part4.md) padhenge — jahan do vectors ka cross product ek perpendicular 3D vector aur exact geometric area deta hai!
