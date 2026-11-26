# Chapter 11: Three Dimensional Geometry (Part 3)

> **Class:** 12 | **Subject:** Mathematics  
> **Previous part:** [Three Dimensional Geometry (Part 2)](three-dimensional-geometry-part2.md)

---

Prem ne shehar ke naye highway interchange par do flyover ramps dekhe: ek ramp East-West ja raha tha aur doosra uske upar se North-South nikal raha tha. Dono ramps na parallel the, na hi ek-doosre ko kahin touch kar rahe the! 2D mein do non-parallel lines hamesha milti hain, par 3D mein aisi lines ko **skew lines** kehte hain — aur unke beech ka vertical clearance (shortest distance) engineers ke liye sabse zaroori calculation hota hai!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Angle Between Two Lines (θ)** | Unke direction vectors b₁⃗ aur b₂⃗ ke beech ka acute angle: **cos θ = abs(b₁⃗ · b₂⃗) / [(len b₁⃗)(len b₂⃗)]** |
| **Skew Lines** | 3D mein aisi do lines jo **na parallel hon, na intersect karein** (alag-alag planes mein hoti hain) |
| **Shortest Distance (SD)** | Do lines par ek-ek point ke beech ka minimum possible distance — dono lines par **mutually perpendicular** segment ki length |

---

## 1. Angle Between Two Lines

Pichhle chapter [Vector Algebra (Part 3)](../vector-algebra/vector-algebra-part3.md) ke dot product se, agar do lines:
- L₁: r⃗ = a₁⃗ + λb₁⃗   (DRs a₁, b₁, c₁)
- L₂: r⃗ = a₂⃗ + μb₂⃗   (DRs a₂, b₂, c₂)

Unke beech ka acute angle θ:
- **Vector form:** **cos θ = |b₁⃗ · b₂⃗| / (|b₁⃗| |b₂⃗|)**
- **Cartesian form:** **cos θ = |a₁a₂ + b₁b₂ + c₁c₂| / [ √(a₁² + b₁² + c₁²) · √(a₂² + b₂² + c₂²) ]**
- **Perpendicular condition (θ = 90°):** **a₁a₂ + b₁b₂ + c₁c₂ = 0** (b₁⃗ · b₂⃗ = 0)
- **Parallel condition (θ = 0°):** **a₁/a₂ = b₁/b₂ = c₁/c₂** (b₁⃗ = k b₂⃗)

---

## 2. Shortest Distance Between Two Lines

### Case A: Skew Lines (b₁⃗ × b₂⃗ ≠ 0⃗)
Maan lo L₁: r⃗ = a₁⃗ + λb₁⃗ aur L₂: r⃗ = a₂⃗ + μb₂⃗ skew lines hain.
Dono lines par perpendicular direction hogi **n⃗ = b₁⃗ × b₂⃗** (cross product se, [Vector Algebra (Part 4)](../vector-algebra/vector-algebra-part4.md)).
Point A₁(a₁⃗) se A₂(a₂⃗) tak ke vector **(a₂⃗ − a₁⃗)** ka unit normal **n̂ = (b₁⃗ × b₂⃗) / |b₁⃗ × b₂⃗|** par projection hi shortest distance hai!

```
  Shortest Distance between Skew Lines:
        d = | (b₁⃗ × b₂⃗) · (a₂⃗ − a₁⃗) | / | b₁⃗ × b₂⃗ |
```

> **Intersection Test:** Do non-parallel lines **intersect** karti hain ⇔ unka shortest distance **d = 0** ⇔ **(b₁⃗ × b₂⃗) · (a₂⃗ − a₁⃗) = 0**!

### Case B: Parallel Lines (b₁⃗ = b₂⃗ = b⃗)
Agar L₁: r⃗ = a₁⃗ + λb⃗ aur L₂: r⃗ = a₂⃗ + μb⃗ parallel hain, toh b⃗ × b⃗ = 0⃗ ho jata hai (uppar wala formula 0/0 ban jata hai!).
Tab triangle/parallelogram area ke idea se:

```
  Shortest Distance between Parallel Lines:
        d = | b⃗ × (a₂⃗ − a₁⃗) | / | b⃗ |
```

---

## 3. Solved Examples

### Example 1: Angle between two lines
**Question:** Find the angle between the lines r⃗ = (3î + 2ĵ − 4k̂) + λ(î + 2ĵ + 2k̂) and r⃗ = (5î − 2ĵ) + μ(3î + 2ĵ + 6k̂).

**Solution:**
- b₁⃗ = î + 2ĵ + 2k̂ ⇒ |b₁⃗| = √(1 + 4 + 4) = 3.
- b₂⃗ = 3î + 2ĵ + 6k̂ ⇒ |b₂⃗| = √(9 + 4 + 36) = 7.
- b₁⃗ · b₂⃗ = (1)(3) + (2)(2) + (2)(6) = 3 + 4 + 12 = 19.
- cos θ = |19| / (3 × 7) = **19/21** ⇒ **θ = cos⁻¹(19/21)**.

**Jaanch:** 0 < 19/21 < 1, valid acute angle ✅

---

### Example 2: Perpendicular lines (finding parameter k)
**Question:** Find the value of p so that the lines (1 − x)/3 = (7y − 14)/(2p) = (z − 3)/2 and (7 − 7x)/(3p) = (y − 5)/1 = (6 − z)/5 are at right angles.

**Solution:**
- Rewrite both in standard form!
  - Line 1: (x − 1)/(−3) = (y − 2)/(2p/7) = (z − 3)/2 ⇒ DRs = **(−3, 2p/7, 2)**.
  - Line 2: (x − 1)/(−3p/7) = (y − 5)/1 = (z − 6)/(−5) ⇒ DRs = **(−3p/7, 1, −5)**.
- Perpendicular ⇒ a₁a₂ + b₁b₂ + c₁c₂ = 0:
  (−3)(−3p/7) + (2p/7)(1) + (2)(−5) = 0
  9p/7 + 2p/7 − 10 = 0 ⇒ 11p/7 = 10 ⇒ **p = 70/11**.

**Jaanch:** 9(70/11)/7 + 2(70/11)/7 − 10 = 90/11 + 20/11 − 10 = 110/11 − 10 = 0 ✅

---

### Example 3: Shortest distance between two skew lines
**Question:** Find the shortest distance between the lines:
L₁: r⃗ = (î + ĵ) + λ(2î − ĵ + k̂)
L₂: r⃗ = (2î + ĵ − k̂) + μ(3î − 5ĵ + 2k̂)

**Solution:**
- a₁⃗ = î + ĵ,   a₂⃗ = 2î + ĵ − k̂ ⇒ **a₂⃗ − a₁⃗ = î + 0ĵ − k̂**.
- b₁⃗ = 2î − ĵ + k̂,   b₂⃗ = 3î − 5ĵ + 2k̂.
- b₁⃗ × b₂⃗ = î(−2 − (−5)) − ĵ(4 − 3) + k̂(−10 − (−3)) = **3î − ĵ − 7k̂**.
- |b₁⃗ × b₂⃗| = √(9 + 1 + 49) = **√59**.
- (b₁⃗ × b₂⃗) · (a₂⃗ − a₁⃗) = (3)(1) + (−1)(0) + (−7)(−1) = 3 + 0 + 7 = **10**.
- Shortest distance d = |10| / √59 = **10/√59 units**.

**Jaanch:** (b₁⃗ × b₂⃗)·b₁⃗ = 6 + 1 − 7 = 0 ✅; (b₁⃗ × b₂⃗)·b₂⃗ = 9 + 5 − 14 = 0 ✅

---

### Example 4: Shortest distance between two parallel lines
**Question:** Find the distance between the parallel lines:
L₁: r⃗ = (î + 2ĵ − 4k̂) + λ(2î + 3ĵ + 6k̂)
L₂: r⃗ = (3î + 3ĵ − 5k̂) + μ(2î + 3ĵ + 6k̂)

**Solution:**
- Common direction vector **b⃗ = 2î + 3ĵ + 6k̂** ⇒ |b⃗| = √(4 + 9 + 36) = **7**.
- **a₂⃗ − a₁⃗** = (3−1)î + (3−2)ĵ + (−5−(−4))k̂ = **2î + ĵ − k̂**.
- b⃗ × (a₂⃗ − a₁⃗) = î(−3 − 6) − ĵ(−2 − 12) + k̂(2 − 6) = **−9î + 14ĵ − 4k̂**.
- |b⃗ × (a₂⃗ − a₁⃗)| = √(81 + 196 + 16) = **√293**.
- Shortest distance d = **√293 / 7 units**.

**Jaanch:** (−9î + 14ĵ − 4k̂)·(2î + 3ĵ + 6k̂) = −18 + 42 − 24 = 0 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Parallel lines par skew-line formula laga dena:**
   - Galat: Jab b₁⃗ aur b₂⃗ proportional hon (jaise 2î+3ĵ+6k̂ aur 4î+6ĵ+12k̂), tab b₁⃗ × b₂⃗ = 0⃗ aata hai — student likh deta hai "distance = 0"!
   - Sahi: Pehle check karo ki b₁⃗ aur b₂⃗ proportional toh nahi! Agar parallel hain, toh **|b⃗ × (a₂⃗ − a₁⃗)| / |b⃗|** use karo.
2. **Skew lines ke numerator mein absolute value bhool jana:**
   - Galat: Dot product negative aane par distance = −10/√59 likh dena.
   - Sahi: Distance hamesha non-negative hota hai — hamesha **| ... |** lagao!
3. **Angle ke formula mein a₁⃗, a₂⃗ (points) use kar lena:**
   - Galat: Points a₁⃗ aur a₂⃗ ka dot product nikaal kar cos θ calculate karna.
   - Sahi: Angle sirf direction vectors **b₁⃗ aur b₂⃗** par depend karta hai, points a₁⃗, a₂⃗ par nahi!

---

## Quick Recap

- **Angle:** cos θ = |b₁⃗ · b₂⃗| / (|b₁⃗||b₂⃗|). Perpendicular ⇔ b₁⃗ · b₂⃗ = 0.
- **Skew lines SD:** d = |(b₁⃗ × b₂⃗) · (a₂⃗ − a₁⃗)| / |b₁⃗ × b₂⃗|. Intersecting ⇔ d = 0.
- **Parallel lines SD:** d = |b⃗ × (a₂⃗ − a₁⃗)| / |b⃗|.

---

## Practice Questions

1. Find the angle between the lines (x − 2)/2 = (y − 1)/5 = (z + 3)/(−3) and (x + 2)/(−1) = (y − 4)/8 = (z − 5)/4.
2. Show that the line through (1, −1, 2) and (3, 4, −2) is perpendicular to the line through (0, 3, 2) and (3, 5, 6).
3. Show that the line through (4, 7, 8) and (2, 3, 4) is parallel to the line through (−1, −2, 1) and (1, 2, 5).
4. Find the shortest distance between r⃗ = (î + 2ĵ + k̂) + λ(î − ĵ + k̂) and r⃗ = (2î − ĵ − k̂) + μ(2î + ĵ + 2k̂).
5. Find the shortest distance between the Cartesian lines (x + 1)/7 = (y + 1)/(−6) = (z + 1)/1 and (x − 3)/1 = (y − 5)/(−2) = (z − 7)/1.
6. Find the shortest distance between the parallel lines r⃗ = (î + 2ĵ + 3k̂) + λ(î − ĵ + k̂) and r⃗ = (2î − ĵ + k̂) + μ(2î − 2ĵ + 2k̂).
7. Check whether the lines (x − 1)/2 = (y − 2)/3 = (z − 3)/4 and (x − 4)/5 = (y − 1)/2 = z/1 intersect. If yes, find their point of intersection.
8. Find the value of k if the lines (x − 1)/(−3) = (y − 2)/(2k) = (z − 3)/2 and (x − 1)/(3k) = (y − 5)/1 = (z − 6)/(−5) are perpendicular.
9. Find the angle between the lines whose direction ratios are (2, 2, 1) and (4, 1, 8).
10. State True or False: In 3D space, if two lines do not intersect, they must be parallel.

### Answers

1. b₁⃗ = (2, 5, −3), |b₁⃗| = √38; b₂⃗ = (−1, 8, 4), |b₂⃗| = 9. Dot = −2 + 40 − 12 = 26 ⇒ **θ = cos⁻¹(26 / (9√38))**.
2. DRs₁ = (2, 5, −4); DRs₂ = (3, 2, 4). Dot = 6 + 10 − 16 = **0** ⇒ Perpendicular!
3. DRs₁ = (−2, −4, −4); DRs₂ = (2, 4, 4) = −1 × DRs₁ ⇒ Parallel!
4. a₂⃗ − a₁⃗ = î − 3ĵ − 2k̂; b₁⃗ × b₂⃗ = −3î + 0ĵ + 3k̂, |b₁⃗ × b₂⃗| = 3√2.
   Dot = −3 + 0 − 6 = −9 ⇒ d = 9/(3√2) = **3/√2 = (3√2)/2 units**.
   Jaanch: (−3î+3k̂)·(î−ĵ+k̂) = 0 ✅
5. a₂⃗ − a₁⃗ = (4, 6, 8); b₁⃗ × b₂⃗ = (−4, −6, −8), |b₁⃗ × b₂⃗| = √(16+36+64) = √116 = 2√29.
   Dot = −16 − 36 − 64 = −116 ⇒ d = 116/(2√29) = **2√29 units**.
6. Notice b₂⃗ = 2b₁⃗ (parallel!), use b⃗ = î − ĵ + k̂ (|b⃗| = √3), a₂⃗ − a₁⃗ = î − 3ĵ − 2k̂.
   b⃗ × (a₂⃗ − a₁⃗) = 5î + 3ĵ − 2k̂, length = √38 ⇒ d = **√(38/3) units**.
7. General points: (2λ+1, 3λ+2, 4λ+3) = (5μ+4, 2μ+1, μ).
   From z: μ = 4λ + 3. Sub into y: 3λ + 2 = 2(4λ + 3) + 1 ⇒ −5λ = 5 ⇒ λ = −1, μ = −1.
   Jaanch (x-coordinate): 2(−1)+1 = −1 and 5(−1)+4 = −1 ✅ **They intersect at (−1, −1, −1)**.
8. (−3)(3k) + (2k)(1) + (2)(−5) = 0 ⇒ −7k = 10 ⇒ **k = −10/7**.
9. |b₁⃗| = 3, |b₂⃗| = 9, dot = 8 + 2 + 8 = 18 ⇒ cos θ = 18/27 = 2/3 ⇒ **θ = cos⁻¹(2/3)**.
10. **False** ❌ — they can be **skew lines** (neither intersecting nor parallel).

---

Ab tum 3D lines ke angles aur shortest distance mein expert ho! Agle part mein hum 3D ki doosri badi geometric shape — **Plane** — ke equations, angles aur distance formulas seekhenge: [Three Dimensional Geometry (Part 4)](three-dimensional-geometry-part4.md).
