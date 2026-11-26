# Chapter 11: Three Dimensional Geometry (Part 4)

> **Class:** 12 | **Subject:** Mathematics  
> **Previous part:** [Three Dimensional Geometry (Part 3)](three-dimensional-geometry-part3.md)

---

Priyanka apne ghar ki chhat par solar panel lagwa rahi thi. Technician ne bataya ki maximum electricity ke liye panel ki flat sheet (plane) ko is tarah tilt karna padega ki us par seedha khada normal vector sooraj ki average disha ki taraf point kare! 3D space mein kisi bhi flat surface — yaani **plane** — ko poori tarah define karne ke liye bas ek fixed point aur us par perpendicular **normal vector** kaafi hota hai!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Normal Vector (n⃗)** | Plane par har line ke perpendicular vector — Cartesian plane **Ax + By + Cz + D = 0** ka normal **(A, B, C)** hota hai |
| **Normal Form of a Plane** | **r⃗ · n̂ = d** (ya **lx + my + nz = d**), jahan n̂ unit normal aur **d ≥ 0** origin se perpendicular distance hai |
| **Intercept Form** | **x/a + y/b + z/c = 1**, jahan plane axes ko (a, 0, 0), (0, b, 0), (0, 0, c) par cut karta hai |
| **Coplanar Lines** | Do lines jo ek hi plane mein lie karti hain: **(a₂⃗ − a₁⃗) · (b₁⃗ × b₂⃗) = 0** |

---

## 1. Four Standard Forms of the Equation of a Plane

### Form 1: Normal Form (Unit Normal n̂ + Distance d from Origin)
- **Vector:** **r⃗ · n̂ = d** (d ≥ 0)
- **Cartesian:** **lx + my + nz = d**, jahan (l, m, n) normal ke direction cosines hain.

### Form 2: Point-Normal Form (Through Point a⃗, Normal n⃗)
Plane par koi bhi point r⃗ lo ⇒ vector (r⃗ − a⃗) plane ke andar hai ⇒ normal n⃗ ke perpendicular hoga!
- **Vector:** **(r⃗ − a⃗) · n⃗ = 0**  ya  **r⃗ · n⃗ = a⃗ · n⃗**
- **Cartesian:** **A(x − x₁) + B(y − y₁) + C(z − z₁) = 0**  ⇔  **Ax + By + Cz + D = 0**

### Form 3: Three Non-Collinear Points Form
Teen non-collinear points A(x₁, y₁, z₁), B(x₂, y₂, z₂), C(x₃, y₃, z₃) se plane:
- Normal vector = **AB⃗ × AC⃗ = (b⃗ − a⃗) × (c⃗ − a⃗)**
- **Vector:** **(r⃗ − a⃗) · [(b⃗ − a⃗) × (c⃗ − a⃗)] = 0**
- **Cartesian Determinant:**
```
  │ x − x₁   y − y₁   z − z₁ │
  │ x₂ − x₁  y₂ − y₁  z₂ − z₁│ = 0
  │ x₃ − x₁  y₃ − y₁  z₃ − z₁│
```

### Form 4: Intercept Form
Agar plane x-, y-, z-axes par non-zero intercepts a, b, c kat-ta hai:
- **x/a + y/b + z/c = 1**

---

## 2. Angles & Distance Formulas for Planes

1. **Angle θ Between Two Planes** (normals n₁⃗ and n₂⃗):
   Do planes ke beech ka angle wahi hota hai jo unke normals ke beech ka angle hota hai!
   - **cos θ = |n₁⃗ · n₂⃗| / (|n₁⃗| |n₂⃗|)**
   - Perpendicular planes ⇔ **A₁A₂ + B₁B₂ + C₁C₂ = 0**
   - Parallel planes ⇔ **A₁/A₂ = B₁/B₂ = C₁/C₂**

2. **Angle φ Between a Line (direction b⃗) and a Plane (normal n⃗):**
   Line aur normal ke beech ka angle (90° − φ) hota hai, isliye cos(90° − φ) = **sin φ**:
   - **sin φ = |b⃗ · n⃗| / (|b⃗| |n⃗|)**
   - Line parallel to plane (φ = 0°) ⇔ **b⃗ · n⃗ = 0**!
   - Line perpendicular to plane (φ = 90°) ⇔ **b⃗ is parallel to n⃗**!

3. **Perpendicular Distance of Point P(x₁, y₁, z₁) from Plane Ax + By + Cz + D = 0:**
   - **Vector form** (from r⃗ · n⃗ = d): **Distance = |a⃗ · n⃗ − d| / |n⃗|**
   - **Cartesian form:** **Distance = |Ax₁ + By₁ + Cz₁ + D| / √(A² + B² + C²)**

4. **Coplanarity of Two Lines** L₁(a₁⃗, b₁⃗) and L₂(a₂⃗, b₂⃗):
   - **Condition:** **(a₂⃗ − a₁⃗) · (b₁⃗ × b₂⃗) = 0** (determinant of (x₂−x₁, y₂−y₁, z₂−z₁), (a₁, b₁, c₁), (a₂, b₂, c₂) = 0).

---

## 3. Solved Examples

### Example 1: Normal form of a plane
**Question:** Find the vector and Cartesian equations of the plane which is at a distance of 7 units from the origin and normal to the vector 3î + 5ĵ − 6k̂.

**Solution:**
- n⃗ = 3î + 5ĵ − 6k̂ ⇒ |n⃗| = √(9 + 25 + 36) = **√70**.
- Unit normal n̂ = (3î + 5ĵ − 6k̂) / √70.
- **Vector Form:** **r⃗ · [(3î + 5ĵ − 6k̂) / √70] = 7** (or r⃗ · (3î + 5ĵ − 6k̂) = 7√70).
- **Cartesian Form:** **3x + 5y − 6z = 7√70**.

**Jaanch:** Distance from origin (0, 0, 0) = |0 − 7√70| / √(9+25+36) = 7√70 / √70 = 7 ✅

---

### Example 2: Point-normal form & Intercept form
**Question:**
(a) Find the equation of the plane passing through (5, 2, −4) with normal vector 2î + 3ĵ − k̂.
(b) Find the equation of the plane with intercepts 2, 3, and 4 on the x, y, and z axes respectively.

**Solution:**
(a) 2(x − 5) + 3(y − 2) − 1(z + 4) = 0 ⇒ 2x + 3y − z − 10 − 6 − 4 = 0 ⇒ **2x + 3y − z = 20**.
(b) Intercept form: **x/2 + y/3 + z/4 = 1**. Multiply by 12: **6x + 4y + 3z = 12**.

**Jaanch:** For (a), 2(5) + 3(2) − (−4) = 10 + 6 + 4 = 20 ✅; for (b), (2,0,0), (0,3,0), (0,0,4) all give 12 ✅

---

### Example 3: Plane through three non-collinear points
**Question:** Find the equation of the plane passing through A(2, 5, −3), B(−2, −3, 5), and C(5, 3, −3).

**Solution:**
- AB⃗ = (−4, −8, 8),   AC⃗ = (3, −2, 0).
- Normal n⃗ = AB⃗ × AC⃗ = î(0 − (−16)) − ĵ(0 − 24) + k̂(8 − (−24)) = **16î + 24ĵ + 32k̂**.
- Divide by 8 (same direction!): simplified normal = **(2, 3, 4)**.
- Plane through A(2, 5, −3): 2(x − 2) + 3(y − 5) + 4(z + 3) = 0 ⇒ **2x + 3y + 4z = 7**.

**Jaanch:** A(2, 5, −3) gives 4 + 15 − 12 = 7; B(−2, −3, 5) gives −4 − 9 + 20 = 7; C(5, 3, −3) gives 10 + 9 − 12 = 7 ✅

---

### Example 4: Angle between two planes & distance of a point from a plane
**Question:**
(a) Find the angle between the planes 2x + y − 2z = 5 and 3x − 6y − 2z = 7.
(b) Find the distance of the point (2, 5, −3) from the plane r⃗ · (6î − 3ĵ + 2k̂) = 4.

**Solution:**
(a) n₁⃗ = (2, 1, −2) ⇒ |n₁⃗| = 3;   n₂⃗ = (3, −6, −2) ⇒ |n₂⃗| = 7.
    n₁⃗ · n₂⃗ = 6 − 6 + 4 = 4 ⇒ cos θ = 4/(3 × 7) = **4/21** ⇒ **θ = cos⁻¹(4/21)**.
(b) Plane is 6x − 3y + 2z − 4 = 0.
    Distance = |6(2) − 3(5) + 2(−3) − 4| / √(36 + 9 + 4) = |12 − 15 − 6 − 4| / 7 = |−13| / 7 = **13/7 units**.

**Jaanch:** √(36 + 9 + 4) = √49 = 7; |12 − 25| = 13 ⇒ 13/7 > 0 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Line-Plane angle mein sin φ ki jagah cos φ laga dena:**
   - Galat: Line b⃗ aur plane normal n⃗ ke beech cos φ = |b⃗·n⃗|/(|b⃗||n⃗|) likhna.
   - Sahi: Plane-plane aur line-line mein **cos θ** lagta hai, par **line-plane** mein hamesha **sin φ** lagta hai!
2. **r⃗ · n⃗ = d mein d ko origin se distance maan lena (bina unit normal banaye):**
   - Galat: Plane 2x + 3y + 6z = 14 ka origin se distance 14 bol dena.
   - Sahi: Pehle |n⃗| = √(4+9+36) = 7 se divide karo ⇒ (2/7)x + (3/7)y + (6/7)z = 2 ⇒ origin se distance **2 units** hai!
3. **Line parallel to plane ke liye b⃗ ∥ n⃗ bol dena:**
   - Galat: "Line plane ke parallel hai toh b⃗ aur n⃗ parallel honge."
   - Sahi: Normal n⃗ plane par perpendicular hota hai! Isliye jab line plane ke parallel hoti hai, tab line normal ke **perpendicular** hoti hai (**b⃗ · n⃗ = 0**)!

---

## Quick Recap

- **Plane forms:** Normal r⃗·n̂ = d; Point-Normal A(x−x₁)+B(y−y₁)+C(z−z₁) = 0; Intercept x/a + y/b + z/c = 1.
- **Angle:** Plane-plane uses **cos θ**; Line-plane uses **sin φ**.
- **Point-Plane Distance:** |Ax₁ + By₁ + Cz₁ + D| / √(A² + B² + C²).

---

## Practice Questions

1. Find the direction cosines of the normal and the distance from the origin for the plane 2x − 3y + 4z − 6 = 0.
2. Find the equation of the plane passing through (1, 0, −2) with normal vector î + ĵ − k̂.
3. Find the intercepts cut off by the plane 2x + y − z = 5 on the coordinate axes.
4. Find the equation of the plane passing through (1, 1, 0), (1, 2, 1), and (−2, 2, −1).
5. Find the angle between the planes 2x − y + 3z = 4 and x + y + 2z = 3.
6. Check if the planes 2x − y + 3z − 1 = 0 and 2x − y + 3z + 3 = 0 are parallel, and find the distance between them.
7. Find the angle between the line (x + 1)/2 = y/3 = (z − 3)/6 and the plane 10x + 2y − 11z = 3.
8. Find the distance of the point (3, −2, 1) from the plane 2x − y + 2z + 3 = 0.
9. Find the equation of the plane passing through (1, 2, 3) and parallel to the plane 3x + 4y − 5z = 0.
10. State True or False: The equation z = 5 represents a plane parallel to the xy-plane at a distance of 5 units from it.

### Answers

1. 2x − 3y + 4z = 6; |n⃗| = √(4+9+16) = √29 ⇒ DCs = **(2/√29, −3/√29, 4/√29)**, distance = **6/√29**.
2. 1(x−1) + 1(y−0) − 1(z+2) = 0 ⇒ **x + y − z = 3**.
   Jaanch: 1 + 0 − (−2) = 3 ✅
3. Divide by 5: x/(5/2) + y/5 + z/(−5) = 1 ⇒ Intercepts: **a = 5/2, b = 5, c = −5**.
4. AB⃗ = (0, 1, 1), AC⃗ = (−3, 1, −1) ⇒ n⃗ = AB⃗ × AC⃗ = (−2, −3, 3) ∝ (2, 3, −3).
   Plane: 2(x−1) + 3(y−1) − 3(z−0) = 0 ⇒ **2x + 3y − 3z = 5**.
   Jaanch: (1,1,0)⇒5, (1,2,1)⇒2+6−3=5, (−2,2,−1)⇒−4+6+3=5 ✅
5. n₁⃗ = (2, −1, 3), |n₁⃗| = √14; n₂⃗ = (1, 1, 2), |n₂⃗| = √6; dot = 2 − 1 + 6 = 7.
   cos θ = 7 / √84 = 7 / (2√21) = √21 / 6 ⇒ **θ = cos⁻¹(√21 / 6)**.
6. Same normal (2, −1, 3) ⇒ **Parallel!** Distance = |D₂ − D₁| / √(4+1+9) = |3 − (−1)| / √14 = **4/√14 units**.
7. b⃗ = (2, 3, 6) (|b⃗|=7), n⃗ = (10, 2, −11) (|n⃗|=15); b⃗·n⃗ = 20 + 6 − 66 = −40.
   sin φ = 40/(7×15) = **8/21** ⇒ **φ = sin⁻¹(8/21)**.
8. |2(3) − (−2) + 2(1) + 3| / √(4+1+4) = |6 + 2 + 2 + 3| / 3 = **13/3 units**.
9. Parallel plane: 3x + 4y − 5z = k. Put (1, 2, 3): 3 + 8 − 15 = −4 ⇒ **3x + 4y − 5z = −4** (or 3x + 4y − 5z + 4 = 0).
10. **True** ✅ — normal is (0, 0, 1) (z-axis) and distance from origin is 5.

---

Ab tumhare paas 3D Geometry ke saare tools (lines, planes, angles, distances) hain! Chalo ab sab ko milakar multi-step problems solve karein aur poora chapter wrap up karein: [Three Dimensional Geometry (Part 5)](three-dimensional-geometry-part5.md).
