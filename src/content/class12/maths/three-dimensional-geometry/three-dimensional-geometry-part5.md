# Chapter 11: Three Dimensional Geometry (Part 5)

> **Class:** 12 | **Subject:** Mathematics  
> **Previous part:** [Three Dimensional Geometry (Part 4)](three-dimensional-geometry-part4.md)

---

Pushpa air-traffic control (ATC) simulator par 3D flight corridors design kar rahi thi. Ek flight ki path ek straight line hai, airport ka approach zone ek tilted plane hai, aur doosre aircraft ka path ek alag 3D line hai — unhe ek hi problem mein line-plane intersection, coplanarity, aur point-to-point distance sab saath mein check karna padta hai! Is final part mein hum **Sab Kuch Mila Kar** multi-concept 3D problems solve karenge aur poora chapter ek table mein summarize karenge.

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Line-Plane Intersection** | Line ke general point (x₁+aλ, y₁+bλ, z₁+cλ) ko plane ke equation mein put karke λ nikaalna |
| **Plane Containing a Line** | Plane line ke point a⃗ se guzarta hai AUR plane ka normal n⃗ line ki direction b⃗ ke perpendicular (**b⃗ · n⃗ = 0**) hota hai |
| **Parallel Planes Distance** | Ax + By + Cz + D₁ = 0 aur Ax + By + Cz + D₂ = 0 ke beech ka distance: **abs(D₁ − D₂) / √(A² + B² + C²)** |

---

## 1. Solved Mixed Examples (Sab Kuch Mila Kar)

### Example 1: Line-plane intersection + distance from another point
**Question:** Find the distance of the point (−1, −5, −10) from the point of intersection of the line r⃗ = (2î − ĵ + 2k̂) + λ(3î + 4ĵ + 12k̂) and the plane r⃗ · (î − ĵ + k̂) = 5.

**Solution:**
- General point on line: **P(3λ + 2, 4λ − 1, 12λ + 2)**.
- Plane equation: **x − y + z = 5**.
- Substitute P into plane:
  (3λ + 2) − (4λ − 1) + (12λ + 2) = 5
  11λ + 5 = 5 ⇒ **λ = 0**.
- Point of intersection **P = (2, −1, 2)**.
- Distance between Q(−1, −5, −10) and P(2, −1, 2):
  PQ = √[(2 − (−1))² + (−1 − (−5))² + (2 − (−10))²] = √(3² + 4² + 12²) = √(9 + 16 + 144) = √169 = **13 units**!

**Jaanch:** P(2, −1, 2) in plane: 2 − (−1) + 2 = 5 ✅; 3² + 4² + 12² = 169 = 13² ✅

---

### Example 2: Coplanarity of two lines + equation of the plane containing them
**Question:** Show that the lines (x + 3)/(−3) = (y − 1)/1 = (z − 5)/5 and (x + 1)/(−1) = (y − 2)/2 = (z − 5)/5 are coplanar. Also find the equation of the plane containing them.

**Solution:**
- Line 1: a₁⃗ = (−3, 1, 5), b₁⃗ = (−3, 1, 5).
- Line 2: a₂⃗ = (−1, 2, 5), b₂⃗ = (−1, 2, 5).
- a₂⃗ − a₁⃗ = (2, 1, 0).
- Check coplanarity determinant:
```
  │  2   1   0 │
  │ −3   1   5 │ = 2(5 − 10) − 1(−15 + 5) + 0 = 2(−5) − 1(−10) = −10 + 10 = 0
  │ −1   2   5 │
```
- Determinant = 0 ⇒ **Lines are coplanar!**
- Normal to the plane = b₁⃗ × b₂⃗ = î(5 − 10) − ĵ(−15 + 5) + k̂(−6 + 1) = **−5î + 10ĵ − 5k̂** (parallel to **î − 2ĵ + k̂**).
- Plane through (−3, 1, 5): 1(x + 3) − 2(y − 1) + 1(z − 5) = 0 ⇒ **x − 2y + z = 0**.

**Jaanch:** Put (−1, 2, 5): −1 − 4 + 5 = 0 ✅; normal · b₁⃗ = −3 − 2 + 5 = 0 ✅; normal · b₂⃗ = −1 − 4 + 5 = 0 ✅

---

### Example 3: Line through a point perpendicular to two given lines
**Question:** Find the Cartesian equation of the line passing through (−1, 3, −2) and perpendicular to the lines x/1 = y/2 = z/3 and (x + 2)/(−3) = (y − 1)/2 = (z + 1)/5.

**Solution:**
- Required line is perpendicular to both b₁⃗ = (1, 2, 3) and b₂⃗ = (−3, 2, 5) ⇒ its direction is **b⃗ = b₁⃗ × b₂⃗**!
- b₁⃗ × b₂⃗ = î(10 − 6) − ĵ(5 − (−9)) + k̂(2 − (−6)) = **4î − 14ĵ + 8k̂** (divide by 2 ⇒ **(2, −7, 4)**).
- Equation through (−1, 3, −2): **(x + 1)/2 = (y − 3)/(−7) = (z + 2)/4**.

**Jaanch:** (2, −7, 4)·(1, 2, 3) = 2 − 14 + 12 = 0 ✅; (2, −7, 4)·(−3, 2, 5) = −6 − 14 + 20 = 0 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Coplanar lines ke plane ka equation likhte waqt b₁⃗ + b₂⃗ ko normal maan lena:**
   - Galat: Do coplanar lines ke direction vectors ko add karke normal banana.
   - Sahi: Plane dono lines ko contain karta hai, isliye normal dono b₁⃗ aur b₂⃗ ke perpendicular — yaani **b₁⃗ × b₂⃗** — hota hai!
2. **Parallel planes ke beech distance nikaalte waqt A, B, C same na banana:**
   - Galat: x + 2y + 2z = 3 aur 2x + 4y + 4z = 12 ka distance |12 − 3| / √(1+4+4) nikaalna.
   - Sahi: Pehle dono ke coefficients same karo! Doosre ko 2 se divide karo ⇒ x + 2y + 2z = 6. Ab distance = |6 − 3| / 3 = **1 unit**!

---

## Quick Recap

- **Line ∩ Plane:** Put general point (x₁+aλ, y₁+bλ, z₁+cλ) into plane equation to solve for λ.
- **Perpendicular to two lines:** Direction = **b₁⃗ × b₂⃗**.
- **Plane containing two intersecting/coplanar lines:** Normal = **b₁⃗ × b₂⃗**, point = a₁⃗ (or a₂⃗).

---

## Practice Questions

1. Find the point where the line through (3, −4, −5) and (2, −3, 1) crosses the plane 2x + y + z = 7.
2. Find the distance between the parallel planes 2x + 3y + 4z = 4 and 4x + 6y + 8z = 12.
3. Find the equation of the plane through (1, 2, 3) and perpendicular to the line (x − 2)/3 = (y + 1)/4 = (z − 5)/(−2).
4. Find the value of k such that the line (x − 1)/2 = (y + 1)/k = (z − 2)/3 is parallel to the plane 3x + 2y − 4z = 5.
5. Find the vector equation of the line passing through (1, 2, −4) and perpendicular to the lines (x − 8)/3 = (y + 19)/(−16) = (z − 10)/7 and (x − 15)/3 = (y − 29)/8 = (z − 5)/(−5).
6. Show that the lines (x − 1)/2 = (y − 2)/3 = (z − 3)/4 and (x − 2)/3 = (y − 3)/4 = (z − 4)/5 are coplanar, and find the equation of the plane containing them.
7. Find the coordinates of the point where the line through (5, 1, 6) and (3, 4, 1) crosses the yz-plane.
8. Find the equation of the plane passing through (0, 0, 0) and (3, −1, 2) and parallel to the line (x − 4)/1 = (y + 3)/(−4) = (z + 1)/7.
9. A plane meets the coordinate axes in A, B, C such that the centroid of triangle ABC is (1, 2, 3). Find the equation of the plane.
10. State True or False: If a line has direction vector b⃗ and a plane has normal n⃗ with b⃗ · n⃗ = 0 and a point of the line lies in the plane, then the entire line lies in the plane.

### Answers

1. Line DRs = (−1, 1, 6) ⇒ general point (3 − λ, −4 + λ, −5 + 6λ).
   Sub into 2x + y + z = 7: 2(3−λ) + (−4+λ) + (−5+6λ) = 7 ⇒ 5λ − 3 = 7 ⇒ λ = 2.
   Point = **(1, −2, 7)**. Jaanch: 2(1) − 2 + 7 = 7 ✅
2. Rewrite second plane: 2x + 3y + 4z = 6.
   Distance = |6 − 4| / √(4 + 9 + 16) = **2/√29 units**.
3. Plane normal = line DRs (3, 4, −2) ⇒ 3(x−1) + 4(y−2) − 2(z−3) = 0 ⇒ **3x + 4y − 2z = 5**.
   Jaanch: 3 + 8 − 6 = 5 ✅
4. Parallel to plane ⇔ b⃗ · n⃗ = 0 ⇒ (2)(3) + (k)(2) + (3)(−4) = 0 ⇒ 2k − 6 = 0 ⇒ **k = 3**.
5. b₁⃗ × b₂⃗ = (24, 36, 72) ∝ (2, 3, 6).
   Vector equation: **r⃗ = (î + 2ĵ − 4k̂) + λ(2î + 3ĵ + 6k̂)**.
   Jaanch: (2,3,6)·(3,−16,7) = 6−48+42 = 0 ✅; (2,3,6)·(3,8,−5) = 6+24−30 = 0 ✅
6. a₂ − a₁ = (1, 1, 1), b₁ = (2, 3, 4), b₂ = (3, 4, 5).
   Determinant = 1(15−16) − 1(10−12) + 1(8−9) = −1 + 2 − 1 = **0** ⇒ Coplanar!
   Normal b₁ × b₂ = (−1, 2, −1) ∝ (1, −2, 1). Plane through (1, 2, 3): 1(x−1) − 2(y−2) + 1(z−3) = 0 ⇒ **x − 2y + z = 0**.
   Jaanch: (2, 3, 4) gives 2 − 6 + 4 = 0 ✅
7. DRs = (−2, 3, −5); general point (5−2λ, 1+3λ, 6−5λ). On yz-plane, x = 0 ⇒ λ = 5/2.
   Point = **(0, 17/2, −13/2)**.
8. Vectors in plane: (3, −1, 2) and (1, −4, 7). Normal = (3, −1, 2) × (1, −4, 7) = (1, −19, −11).
   Through (0, 0, 0): **x − 19y − 11z = 0**.
   Jaanch: 3 + 19 − 22 = 0 ✅; 1 + 76 − 77 = 0 ✅
9. Centroid of (a,0,0), (0,b,0), (0,0,c) is (a/3, b/3, c/3) = (1, 2, 3) ⇒ a = 3, b = 6, c = 9.
   Plane: x/3 + y/6 + z/9 = 1 ⇒ **6x + 3y + 2z = 18**.
10. **True** ✅ — line is parallel to the plane and shares a point with it, so every point of the line lies in the plane.

---

## Chapter Ka Saar (Three Dimensional Geometry Wrap-Up)

| Concept | Key Formula / Rule |
|---|---|
| **Direction Cosines** | l = cos α, m = cos β, n = cos γ; **l² + m² + n² = 1** |
| **DCs from DRs (a, b, c)** | l = ±a / √(a²+b²+c²), same sign for l, m, n |
| **Line Equation** | r⃗ = a⃗ + λb⃗  ⇔  **(x−x₁)/a = (y−y₁)/b = (z−z₁)/c** |
| **Angle Between Lines** | cos θ = abs(b₁⃗·b₂⃗) / [(len b₁⃗)(len b₂⃗)] |
| **Shortest Distance (Skew)** | d = abs((b₁⃗ × b₂⃗) · (a₂⃗ − a₁⃗)) / len(b₁⃗ × b₂⃗) |
| **Shortest Distance (Parallel)** | d = len(b⃗ × (a₂⃗ − a₁⃗)) / len(b⃗) |
| **Plane Equations** | Normal r⃗·n̂ = d; Point-Normal A(x−x₁)+B(y−y₁)+C(z−z₁) = 0; Intercept x/a+y/b+z/c = 1 |
| **Angle (Plane-Plane / Line-Plane)** | Plane-plane: **cos θ**; Line-plane: **sin φ** |
| **Point-Plane Distance** | abs(Ax₁ + By₁ + Cz₁ + D) / √(A² + B² + C²) |

---

Shabaash! Tumne **Three Dimensional Geometry** ke saare core concepts complete kar liye hain! Agar tum **foot of perpendicular, mirror image of a point in a line or plane, aur family of planes** jaise deep concepts seekhna chahte ho, toh [Gehrai Mein: Three Dimensional Geometry](three-dimensional-geometry-advanced.md) zaroor padho.

Agle chapter mein hum linear inequalities aur optimization ki duniya mein chalenge — **Linear Programming**, jahan profit maximize aur cost minimize karne ke geometrical tareeke seekhenge!
