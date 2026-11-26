# Chapter 11: Three Dimensional Geometry — Gehrai Mein (Advanced)

> **Class:** 12 | **Subject:** Mathematics  
> **Core chapter:** [Three Dimensional Geometry (Part 5)](three-dimensional-geometry-part5.md)

---

Radha physics optics lab mein ek tilted mirror plane par laser beam ki reflection measure kar rahi thi. Mirror ke saamne rakhe ek point light source P ki virtual image P' mirror ke bilkul peeche utni hi perpendicular doori par banti hai — aur line PP' ka midpoint mirror par **foot of perpendicular** M hota hai! Is Gehrai Mein lesson mein hum 3D Geometry ke chaar sabse powerful advanced tools seekhenge: **Foot & Image in a Plane**, **Foot & Image in a Line**, **Family of Planes**, aur **Oblique Distance along a Line**.

---

## 1. Foot of Perpendicular & Mirror Image of a Point in a Plane

Maan lo point **P(x₁, y₁, z₁)** aur plane **Ax + By + Cz + D = 0** diya hai.
P se plane par perpendicular line ke DRs wahi honge jo plane ka normal **(A, B, C)** hai!
Isliye perpendicular line: **(x − x₁)/A = (y − y₁)/B = (z − z₁)/C = λ**.

Foot of perpendicular **M(x₁ + Aλ, y₁ + Bλ, z₁ + Cλ)** plane par lie karta hai, toh:
A(x₁ + Aλ) + B(y₁ + Bλ) + C(z₁ + Cλ) + D = 0 ⇒ **λ = −(Ax₁ + By₁ + Cz₁ + D) / (A² + B² + C²)**

```
  Shortcut Formulas for P(x₁, y₁, z₁) in Plane Ax + By + Cz + D = 0:

  Foot of Perpendicular M(x, y, z):
    (x − x₁)/A = (y − y₁)/B = (z − z₁)/C = −(Ax₁ + By₁ + Cz₁ + D) / (A² + B² + C²)

  Mirror Image P'(x', y', z'):  (since M is midpoint of P and P', double the λ!)
    (x' − x₁)/A = (y' − y₁)/B = (z' − z₁)/C = −2(Ax₁ + By₁ + Cz₁ + D) / (A² + B² + C²)
```

### Example 1: Foot & Image in a plane
**Question:** Find the foot of perpendicular and mirror image of P(1, 3, 4) in the plane 2x − y + z + 3 = 0.

**Solution:**
- Evaluate plane at P: 2(1) − 3 + 4 + 3 = **6**.
- A² + B² + C² = 2² + (−1)² + 1² = **6**.
- Ratio for foot: λ = −6/6 = **−1**.
  - **Foot M** = (1 + 2(−1), 3 + (−1)(−1), 4 + 1(−1)) = **(−1, 4, 3)**.
- Ratio for image: 2λ = **−2**.
  - **Image P'** = (1 + 2(−2), 3 + (−1)(−2), 4 + 1(−2)) = **(−3, 5, 2)**.

**Jaanch:** M(−1, 4, 3) in plane: 2(−1) − 4 + 3 + 3 = 0 ✅; midpoint of P(1,3,4) & P'(−3,5,2) = (−1, 4, 3) = M ✅

---

## 2. Foot of Perpendicular & Mirror Image of a Point in a Line

Maan lo point **P(x₁, y₁, z₁)** aur line **(x − a)/l = (y − b)/m = (z − c)/n = λ**.
1. Line par general point **M(a + lλ, b + mλ, c + nλ)** lo.
2. Vector **PM⃗** line ke direction **(l, m, n)** ke perpendicular hoga ⇒ **PM⃗ · (l, m, n) = 0**.
3. Is linear equation se **λ** nikaalo ⇒ **Foot M** mil gaya!
4. **Image P' = 2M − P** (midpoint formula se!).

### Example 2: Foot & Image in a line
**Question:** Find the foot of perpendicular, perpendicular distance, and image of P(1, 6, 3) in the line x/1 = (y − 1)/2 = (z − 2)/3.

**Solution:**
- General point on line: **M(λ, 2λ + 1, 3λ + 2)**.
- PM⃗ = (λ − 1, 2λ − 5, 3λ − 1).
- PM⃗ · (1, 2, 3) = 0 ⇒ (λ − 1) + 2(2λ − 5) + 3(3λ − 1) = 0 ⇒ 14λ − 14 = 0 ⇒ **λ = 1**.
- **Foot M** = **(1, 3, 5)**.
- **Perpendicular distance PM** = √[(1−1)² + (3−6)² + (5−3)²] = √(0 + 9 + 4) = **√13 units**.
- **Image P'** = 2M − P = (2(1)−1, 2(3)−6, 2(5)−3) = **(1, 0, 7)**.

**Jaanch:** PM⃗ = (0, −3, 2); PM⃗ · (1, 2, 3) = 0 − 6 + 6 = 0 ✅; midpoint of (1,6,3) & (1,0,7) = (1, 3, 5) = M ✅

---

## 3. Family of Planes Through the Intersection of Two Planes

Agar do planes **P₁ = 0** aur **P₂ = 0** ek line par intersect karte hain, toh us line of intersection se guzarne wala koi bhi plane is form ka hota hai:
- **P₁ + λ P₂ = 0** (where λ ∈ R)

### Example 3: Plane through intersection of two planes and a given point
**Question:** Find the equation of the plane passing through the line of intersection of the planes x + y + z = 6 and 2x + 3y + 4z + 5 = 0, and passing through the point (1, 1, 1).

**Solution:**
- Family of planes: **(x + y + z − 6) + λ(2x + 3y + 4z + 5) = 0**.
- Passes through (1, 1, 1):
  (1 + 1 + 1 − 6) + λ(2 + 3 + 4 + 5) = 0 ⇒ −3 + 14λ = 0 ⇒ **λ = 3/14**.
- Substitute λ = 3/14 and multiply by 14:
  14(x + y + z − 6) + 3(2x + 3y + 4z + 5) = 0
  **20x + 23y + 26z − 69 = 0**.

**Jaanch:** Put (1, 1, 1): 20 + 23 + 26 − 69 = 0 ✅

---

## 4. Distance of a Point from a Plane Measured Parallel to a Given Line

Kabhi-kabhi perpendicular distance nahi, balki ek given line ke parallel (tilted/oblique) distance pucha jata hai!
**Method:**
1. Point P se given line ke parallel ek line likho: (x − x₁)/a = (y − y₁)/b = (z − z₁)/c = λ.
2. Is line ka plane ke saath intersection point **Q** nikaalo (λ mil jayega).
3. Required oblique distance = **PQ = |λ| √(a² + b² + c²)**!

### Example 4: Oblique distance parallel to a line
**Question:** Find the distance of the point P(1, −2, 3) from the plane x − y + z = 5 measured parallel to the line x/2 = y/3 = z/(−6).

**Solution:**
- Line through P(1, −2, 3) parallel to (2, 3, −6): (x − 1)/2 = (y + 2)/3 = (z − 3)/(−6) = λ.
- General point Q = (2λ + 1, 3λ − 2, −6λ + 3).
- Q lies on x − y + z = 5:
  (2λ + 1) − (3λ − 2) + (−6λ + 3) = 5 ⇒ −7λ + 6 = 5 ⇒ **λ = 1/7**.
- Distance PQ = |1/7| × √(2² + 3² + (−6)²) = (1/7) × 7 = **1 unit**!

**Jaanch:** Q = (9/7, −11/7, 15/7); in plane: (9 + 11 + 15)/7 = 35/7 = 5 ✅

---

## Challenge Practice Questions

1. Find the foot of perpendicular and image of (2, −1, 5) in the plane 2x + y − 2z = 5.
2. Find the foot of perpendicular and length of perpendicular from (2, −1, 5) to the line (x − 11)/10 = (y + 2)/(−4) = (z + 8)/(−11).
3. Find the equation of the plane through the line of intersection of planes x + 2y + 3z − 4 = 0 and 2x + y − z + 5 = 0, perpendicular to the plane 5x + 3y + 6z + 8 = 0.
4. Find the distance of the point (−2, 3, −4) from the line (x + 2)/3 = (2y + 3)/4 = (3z + 4)/5 measured parallel to the plane 4x + 12y − 3z + 1 = 0.
5. Find the equation of the reflection (mirror image) of the line (x − 1)/1 = (y − 2)/2 = (z − 3)/3 in the plane x + y + z = 0.

### Answers

1. Plane: 2x + y − 2z − 5 = 0. At (2,−1,5): 4 − 1 − 10 − 5 = −12; A²+B²+C² = 9.
   λ = −(−12)/9 = 4/3 ⇒ **Foot M = (14/3, 1/3, 7/3)**; **Image P' = (22/3, 5/3, −1/3)**.
   Jaanch: 2(14/3) + 1/3 − 2(7/3) = 15/3 = 5 ✅
2. M = (10λ+11, −4λ−2, −11λ−8); PM⃗ = (10λ+9, −4λ−1, −11λ−13).
   PM⃗·(10, −4, −11) = 0 ⇒ 237λ + 237 = 0 ⇒ λ = −1 ⇒ **Foot M = (1, 2, 3)**.
   Distance PM = √[(1−2)² + (2+1)² + (3−5)²] = √(1 + 9 + 4) = **√14 units**.
3. Plane: (1+2λ)x + (2+λ)y + (3−λ)z + (−4+5λ) = 0.
   Perpendicular to (5, 3, 6): 5(1+2λ) + 3(2+λ) + 6(3−λ) = 0 ⇒ 7λ + 29 = 0 ⇒ λ = −29/7.
   Plane: 7(x+2y+3z−4) − 29(2x+y−z+5) = 0 ⇒ −51x − 15y + 50z − 173 = 0 ⇒ **51x + 15y − 50z + 173 = 0**.
4. Standard line: (x+2)/3 = (y + 3/2)/2 = (z + 4/3)/(5/3) = λ ⇒ Q(3λ−2, 2λ−3/2, (5/3)λ−4/3).
   PQ⃗ = (3λ, 2λ − 9/2, (5/3)λ + 8/3) is parallel to plane 4x+12y−3z+1=0 ⇒ PQ⃗·(4, 12, −3) = 0:
   12λ + 24λ − 54 − 5λ − 8 = 0 ⇒ 31λ = 62 ⇒ λ = 2 ⇒ PQ⃗ = (6, −1/2, 6).
   Distance PQ = √(36 + 1/4 + 36) = √(289/4) = **17/2 = 8.5 units**.
5. Find images of two points on line, say A(1, 2, 3) and B(2, 4, 6), in x + y + z = 0:
   - For A(1,2,3): 2λ = −2(6)/3 = −4 ⇒ A'(−3, −2, −1).
   - For B(2,4,6): 2λ = −2(12)/3 = −8 ⇒ B'(−6, −4, −2).
   - Reflected line through A' and B' has DRs (−3, −2, −1) ∝ (3, 2, 1): **(x + 3)/3 = (y + 2)/2 = (z + 1)/1**.
