> **Class:** 12 | **Subject:** Mathematics | **Chapter 10:** Vector Algebra (Part 5)

# Sab Kuch Mila Kar: Mixed Vector Problems and Chapter Wrap-up

> **Pichle topic mein:** Humne [Vector (Cross) Product](vector-algebra-part4.md) padha. Ab hum poore Vector Algebra chapter — components, direction cosines, section formula, dot product, cross product aur 3D identities — ko ek saath milakar mixed high-scoring problems solve karenge!

---

Parag apne 3D-game physics quiz mein ek classic combined problem solve kar raha tha: "Find a vector **d⃗** which is **perpendicular to both a⃗ and b⃗**, and satisfies **c⃗ · d⃗ = 15**!" Parag ne dot aur cross dono ko ek saath jod diya: kyunki d⃗ dono a⃗ aur b⃗ ke perpendicular hai, **d⃗ = λ (a⃗ × b⃗)**! Phir c⃗ · d⃗ = 15 mein rakh kar turant **λ** nikal liya!

---

## Naye Shabd (Chapter Formula Snapshot)

- **Direction Cosines:** l² + m² + n² = 1; **Section Formula:** (mb⃗ ± na⃗)/(m ± n).
- **Dot Product:** a⃗ · b⃗ = |a⃗||b⃗| cos θ = a₁b₁ + a₂b₂ + a₃b₃; Projection of a⃗ on b⃗ = (a⃗·b⃗)/|b⃗|.
- **Cross Product:** a⃗ × b⃗ = det([ î ĵ k̂ ; a₁ a₂ a₃ ; b₁ b₂ b₃ ]); Area(Δ) = (1/2)|a⃗ × b⃗|; Area(∥gm) = |a⃗ × b⃗| = (1/2)|d₁⃗ × d₂⃗|.
- **Lagrange's Bridge:** **|a⃗ × b⃗|² + (a⃗ · b⃗)² = |a⃗|² |b⃗|²**!

---

## Mixed Solved Examples

### Example 1: Finding Vector d⃗ Perpendicular to Both a⃗ & b⃗ with c⃗ · d⃗ = 15 (Parag's Problem!)
Let **a⃗ = î + 4ĵ + 2k̂**, **b⃗ = 3î − 2ĵ + 7k̂**, and **c⃗ = 2î − ĵ + 4k̂**. Find a vector **d⃗** which is perpendicular to both a⃗ and b⃗, and **c⃗ · d⃗ = 15**.

**Solution:**
Since d⃗ is perpendicular to both a⃗ and b⃗, **d⃗ = λ (a⃗ × b⃗)** for some scalar λ!
1. Compute a⃗ × b⃗ = det([ î  ĵ  k̂ ; 1  4  2 ; 3  −2  7 ]):
   = î(28 + 4) − ĵ(7 − 6) + k̂(−2 − 12) = **32î − ĵ − 14k̂**.
   So **d⃗ = λ (32î − ĵ − 14k̂)**.
2. Use **c⃗ · d⃗ = 15**:
   λ [ 2(32) + (−1)(−1) + 4(−14) ] = 15
   λ (64 + 1 − 56) = 15 ⇒ 9λ = 15 ⇒ **λ = 5/3**!
3. Substitute λ = 5/3:
   **d⃗ = (5/3)(32î − ĵ − 14k̂) = (160/3)î − (5/3)ĵ − (70/3)k̂**!

Jaanch: Check a⃗·d⃗ = (5/3)(32 − 4 − 28) = 0; b⃗·d⃗ = (5/3)(96 + 2 − 98) = 0; c⃗·d⃗ = (5/3)(9) = 15 ✅

---

### Example 2: Classic Three-Vector Sum Identity (|a⃗ + b⃗ + c⃗| = 0)
If a⃗, b⃗, c⃗ are unit vectors such that **a⃗ + b⃗ + c⃗ = 0⃗**, find the value of **a⃗·b⃗ + b⃗·c⃗ + c⃗·a⃗**.

**Solution:**
Square both sides of a⃗ + b⃗ + c⃗ = 0⃗ (take self-dot product):
|a⃗ + b⃗ + c⃗|² = |a⃗|² + |b⃗|² + |c⃗|² + 2(a⃗·b⃗ + b⃗·c⃗ + c⃗·a⃗) = 0
Since |a⃗| = |b⃗| = |c⃗| = 1:
1 + 1 + 1 + 2(a⃗·b⃗ + b⃗·c⃗ + c⃗·a⃗) = 0
⇒ **a⃗·b⃗ + b⃗·c⃗ + c⃗·a⃗ = −3/2**!

Jaanch: Geometrically, 3 unit vectors summing to 0⃗ form an equilateral triangle (120° apart) ⇒ 3 × cos(120°) = 3(−1/2) = −3/2 ✅

---

### Example 3: Combining Dot & Cross via Lagrange's Identity
If **|a⃗| = 8, |b⃗| = 3**, and **|a⃗ × b⃗| = 12**, find **a⃗ · b⃗**!

**Solution:**
Use **|a⃗ × b⃗|² + (a⃗ · b⃗)² = |a⃗|² |b⃗|²**:
12² + (a⃗ · b⃗)² = 8² × 3²
144 + (a⃗ · b⃗)² = 64 × 9 = 576
(a⃗ · b⃗)² = 576 − 144 = **432**
**a⃗ · b⃗ = ±√432 = ±12√3**!

Jaanch: sin θ = 12/24 = 1/2 ⇒ cos θ = ±√3/2 ⇒ a⃗·b⃗ = 24(±√3/2) = ±12√3 ✅

---

## Aam Galtiyan (Mixed-Problem Traps)

1. **a⃗·b⃗ = a⃗·c⃗ se b⃗ = c⃗ cancel kar dena:**
   - *Galat:* a⃗·b⃗ = a⃗·c⃗ ⇒ b⃗ = c⃗.
   - *Sahi:* Vectors mein cancellation law **NAHI** lagta! a⃗·(b⃗ − c⃗) = 0 ka matlab hai **either a⃗ = 0⃗, OR b⃗ = c⃗, OR a⃗ ⊥ (b⃗ − c⃗)**!

2. **a⃗·b⃗ nikalte waqt Lagrange identity se sirf + value likhna:**
   - *Galat:* (a⃗·b⃗)² = 432 ⇒ a⃗·b⃗ = +12√3.
   - *Sahi:* Angle acute ya obtuse dono ho sakta hai → **±12√3** likho!

---

## Quick Recap

- **Perpendicular to a⃗ & b⃗:** Always start with **d⃗ = λ (a⃗ × b⃗)**!
- **Three-vector square:** |a⃗ + b⃗ + c⃗|² = |a⃗|² + |b⃗|² + |c⃗|² + 2(a⃗·b⃗ + b⃗·c⃗ + c⃗·a⃗).
- **Bridge between dot & cross:** |a⃗ × b⃗|² + (a⃗ · b⃗)² = |a⃗|² |b⃗|².

---

## Practice Questions

1. If a⃗, b⃗, c⃗ are mutually perpendicular vectors of equal magnitude, show that **a⃗ + b⃗ + c⃗** is equally inclined to a⃗, b⃗, and c⃗.
2. If **a⃗ = î + ĵ + k̂**, **b⃗ = 2î − ĵ + 3k̂**, and **c⃗ = î − 2ĵ + k̂**, find a unit vector parallel to **2a⃗ − b⃗ + 3c⃗**.
3. Express **b⃗ = 2î + ĵ − 3k̂** as the sum of two vectors **b₁⃗** (parallel to **a⃗ = 3î − ĵ**) and **b₂⃗** (perpendicular to a⃗).
4. If **|a⃗| = 3, |b⃗| = 4, |c⃗| = 5**, and each vector is perpendicular to the sum of the other two, find **|a⃗ + b⃗ + c⃗|**.
5. Find the value of **x** for which **x(î + ĵ + k̂)** is a unit vector.
6. The scalar product of **î + ĵ + k̂** with a unit vector along the sum of **2î + 4ĵ − 5k̂** and **λî + 2ĵ + 3k̂** is equal to **1**. Find **λ**.
7. If **|a⃗| = 10, |b⃗| = 2**, and **a⃗ · b⃗ = 12**, find **|a⃗ × b⃗|**.
8. If **θ** is the angle between two vectors a⃗ and b⃗, then **|a⃗ · b⃗| = |a⃗ × b⃗|** when θ equals what?
9. Find a vector **r⃗** perpendicular to both **a⃗ = 2î − ĵ + k̂** and **b⃗ = î + ĵ − k̂** such that **r⃗ · (î + 2ĵ + 3k̂) = 18**.
10. Show that the points **A(1, −2, −8), B(5, 0, −2), and C(11, 3, 7)** are collinear, and find the ratio in which B divides AC.

---

### Answers

1. Let |a⃗| = |b⃗| = |c⃗| = k and a⃗·b⃗ = b⃗·c⃗ = c⃗·a⃗ = 0.
   |a⃗ + b⃗ + c⃗| = √(k² + k² + k²) = k√3.
   Angle with a⃗: cos α = [(a⃗ + b⃗ + c⃗)·a⃗] / [(k√3)(k)] = k² / (k²√3) = **1/√3**. Same for b⃗ and c⃗ ⇒ equally inclined!
2. 2a⃗ − b⃗ + 3c⃗ = (2−2+3)î + (2+1−6)ĵ + (2−3+3)k̂ = **3î − 3ĵ + 2k̂**; magnitude = √(9+9+4) = √22.
   Unit vector = **(3/√22)î − (3/√22)ĵ + (2/√22)k̂**.
3. Parallel component **b₁⃗** = [(b⃗·a⃗)/|a⃗|²] a⃗ = [(6 − 1)/10] × (3î − ĵ) = (1/2)(3î − ĵ) = **(3/2)î − (1/2)ĵ**.
   Perpendicular component **b₂⃗** = b⃗ − b₁⃗ = **(1/2)î + (3/2)ĵ − 3k̂**.
   Jaanch: b₁⃗ + b₂⃗ = 2î + ĵ − 3k̂ = b⃗; b₂⃗ · a⃗ = 3/2 − 3/2 = 0 ✅
4. Given a⃗·(b⃗+c⃗) = b⃗·(c⃗+a⃗) = c⃗·(a⃗+b⃗) = 0 ⇒ adding all three gives 2(a⃗·b⃗ + b⃗·c⃗ + c⃗·a⃗) = 0!
   |a⃗ + b⃗ + c⃗|² = 3² + 4² + 5² + 0 = 50 ⇒ **|a⃗ + b⃗ + c⃗| = √50 = 5√2**!
   Jaanch: 9 + 16 + 25 = 50 ⇒ 5√2 ✅
5. |x| √3 = 1 ⇒ **x = ±1/√3**.
6. Sum s⃗ = (2 + λ)î + 6ĵ − 2k̂. Unit vector ŝ = s⃗ / |s⃗|.
   (î + ĵ + k̂) · s⃗ = |s⃗| ⇒ (2 + λ + 6 − 2) = √[(2 + λ)² + 36 + 4] ⇒ λ + 6 = √(λ² + 4λ + 44).
   Square both sides: λ² + 12λ + 36 = λ² + 4λ + 44 ⇒ 8λ = 8 ⇒ **λ = 1**!
   Jaanch: At λ = 1: s⃗ = 3î + 6ĵ − 2k̂, |s⃗| = √49 = 7, (1+1+1)·s⃗ = 3+6−2 = 7 ⇒ 7/7 = 1 ✅
7. |a⃗ × b⃗|² = |a⃗|²|b⃗|² − (a⃗·b⃗)² = 100(4) − 144 = 256 ⇒ **|a⃗ × b⃗| = 16**!
   Jaanch: 400 − 144 = 256 = 16² ✅
8. |cos θ| = sin θ ⇒ tan θ = ±1 ⇒ **θ = π/4 (45°)** (or 3π/4 = 135°).
9. a⃗ × b⃗ = 0î + 3ĵ + 3k̂. Let r⃗ = λ(3ĵ + 3k̂).
   r⃗ · (î + 2ĵ + 3k̂) = λ(0 + 6 + 9) = 15λ = 18 ⇒ λ = 6/5 → **r⃗ = (18/5)ĵ + (18/5)k̂**.
   Jaanch: 2(18/5) + 3(18/5) = 90/5 = 18 ✅
10. AB⃗ = 4î + 2ĵ + 6k̂; BC⃗ = 6î + 3ĵ + 9k̂ = **(3/2) AB⃗** ⇒ Collinear!
    Ratio AB : BC = 1 : 3/2 = **2 : 3** (internally)!
    Jaanch: 4/6 = 2/3, 2/3 = 2/3, 6/9 = 2/3 ✅

---

## Chapter Ka Saar (Vector Algebra Wrap-up)

| Topic | Key Formulas | Must-Remember Facts |
|---|---|---|
| 1. Basics & Addition | AB⃗ + BC⃗ = AC⃗; â = a⃗/(len a⃗) | Collinear ⇔ b⃗ = λa⃗ (same or opposite sense) |
| 2. Components & Section | r⃗ = xî+yĵ+zk̂; l²+m²+n² = 1 | PQ⃗ = OQ⃗ − OP⃗; Section: (mb⃗ ± na⃗)/(m ± n) |
| 3. Dot Product | a⃗·b⃗ = a₁b₁+a₂b₂+a₃b₃ = len(a)len(b)cos θ | a⃗⊥b⃗ ⇔ a⃗·b⃗ = 0; Projection of a⃗ on b⃗ = (a⃗·b⃗)/len(b) |
| 4. Cross Product | a⃗×b⃗ = det([ î ĵ k̂ ; a₁ a₂ a₃ ; b₁ b₂ b₃ ]) | b⃗×a⃗ = −(a⃗×b⃗); Area(Δ) = ½len(a⃗×b⃗); Area(∥gm) = len(a⃗×b⃗) = ½len(d₁⃗×d₂⃗) |

---

Ab tumne Vector Algebra ke saare core concepts aur 3D applications master kar liye hain! Competitive exams (JEE/Olympiad) ke liye **Scalar Triple Product [a⃗ b⃗ c⃗] (Volume & Coplanarity), Vector Triple Product a⃗ × (b⃗ × c⃗) (BAC−CAB Rule), aur Vector Equations** padhne ke liye [Vector Algebra — Gehrai Mein (Advanced Level)](vector-algebra-advanced.md) zaroor dekho.

**Agle chapter mein:** Hum **Three Dimensional Geometry** shuru karenge — jahan vectors ka use karke 3D space mein lines, skew lines ke beech ka shortest distance, aur planes ki equations nikalenge!
