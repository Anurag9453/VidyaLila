# Chapter: Introduction to Three Dimensional Geometry (Advanced — Gehrai Mein)

> **Class:** 11 | **Subject:** Mathematics | **Level:** Advanced (Gehrai Mein)
> **Core chapter yahan complete hua tha:** [introduction-to-three-dimensional-geometry-part4.md](introduction-to-three-dimensional-geometry-part4.md) (Topic 4: Sab Kuch Mila Kar aur Chapter Wrap-up). Is advanced file mein hum 3D Spheres, Centroid of a Tetrahedron, Direction Cosines (l² + m² + n² = 1), aur Angle/Perpendicularity Between 3D Segments ko gehrai se master karenge!
> **Advanced topics covered in this file:**
> 1. 3D Sphere (Standard, General & Diameter Forms), Centroid of a Tetrahedron, Direction Cosines & Ratios (l² + m² + n² = 1), Aur 3D Angle & Perpendicularity Formula

---

# Gehrai Mein: 3D Spheres, Direction Cosines, Aur 3D Angles

Core chapter mein tumne 3D Distance Formula aur Section Formula seekhe. Lekin jab space mein do 3D line segments ke beech ka **angle** nikaalna ho, ya kisi **3D sphere** ka centre-radius chahiye, ya 4-vertex **tetrahedron** ka centre of mass dhoondhna ho — to yeh chaar advanced 3D tools har spatial problem ko behad aasaan bana dete hain!

---

## Balram ka satellite truss-frame alignment

Balram ek aerospace structural engineer hai jo 3D tetrahedral satellite frames design karta hai. Jab ek strut origin O(0, 0, 0) se point P(2, 3, 6) tak jaata hai (length r = √(4 + 9 + 36) = 7 m), to Balram uski 3D orientation sirf teen numbers se lock karta hai:
**l = 2/7, m = 3/7, n = 6/7** — inhe **Direction Cosines** kehte hain!
Dekho: l² + m² + n² = (4 + 9 + 36)/49 = 49/49 = **1**! Aur do struts aapas mein 90° par hain ya nahi, yeh bas ek dot-sum **a₁a₂ + b₁b₂ + c₁c₂ = 0** check karne se 2 second mein pata chal jata hai!

---

## Part A: Equation Of A 3D Sphere

Circle (2D) ka exact 3D bhai **Sphere** hai — sabhi points P(x, y, z) jo centre C(h, k, l) se fixed radius r par hon:
1. **Standard Form:** **(x - h)² + (y - k)² + (z - l)² = r²**
2. **General Form:** **x² + y² + z² + 2ux + 2vy + 2wz + d = 0**
   - **Centre = (-u, -v, -w)**
   - **Radius r = √(u² + v² + w² - d)**  *(real sphere iff u² + v² + w² - d > 0!)*
3. **Diameter Form** (opposite diameter endpoints A(x₁, y₁, z₁) aur B(x₂, y₂, z₂)):
   **(x - x₁)(x - x₂) + (y - y₁)(y - y₂) + (z - z₁)(z - z₂) = 0**

---

## Part B: Centroid Of A 3D Tetrahedron

4 non-coplanar vertices A(x₁, y₁, z₁), B(x₂, y₂, z₂), C(x₃, y₃, z₃), D(x₄, y₄, z₄) se bane **Tetrahedron** ka centroid G un chaaron vertices ka average hota hai:
**G = ( (x₁ + x₂ + x₃ + x₄)/4, (y₁ + y₂ + y₃ + y₄)/4, (z₁ + z₂ + z₃ + z₄)/4 )**
*(Khaas baat: G kisi bhi vertex aur opposite face ke triangle-centroid ko **3 : 1** ratio mein internally divide karta hai!)*

---

## Part C: Direction Cosines (l, m, n) & Direction Ratios (a, b, c) ("Kyun"!)

Maan lo ray OP positive x, y, z axes ke saath angles **α, β, γ** banati hai, aur P(x, y, z) ki origin se doori r = √(x² + y² + z²) hai.
Cuboid right triangles se:
x = r cos α,   y = r cos β,   z = r cos γ.

Inke cosines **l = cos α, m = cos β, n = cos γ** ko **Direction Cosines (DCs)** kehte hain!
Square karke jodo:
x² + y² + z² = r²(cos² α + cos² β + cos² γ) = r²
=> **l² + m² + n² = 1**   (yaani **cos² α + cos² β + cos² γ = 1**)!
- Corollary: (1 - sin² α) + (1 - sin² β) + (1 - sin² γ) = 1 => **sin² α + sin² β + sin² γ = 2**!

### Direction Ratios (DRs) Of Segment PQ:
P(x₁, y₁, z₁) aur Q(x₂, y₂, z₂) ke liye **a = x₂ - x₁, b = y₂ - y₁, c = z₂ - z₁** Direction Ratios kehlate hain.
DCs nikaalne ke liye bas length √(a² + b² + c²) se divide kar do:
**l = a / √(a² + b² + c²)**, **m = b / √(a² + b² + c²)**, **n = c / √(a² + b² + c²)**!

---

## Part D: Angle, Perpendicularity, Aur Collinearity In 3D

Do segments jinke DRs (a₁, b₁, c₁) aur (a₂, b₂, c₂) hain, unke beech ka acute angle θ (Law of Cosines se):
**cos θ = |a₁a₂ + b₁b₂ + c₁c₂| / [ √(a₁² + b₁² + c₁²) · √(a₂² + b₂² + c₂²) ]**

1. **Perpendicularity (θ = 90°):** **a₁a₂ + b₁b₂ + c₁c₂ = 0**!
2. **Parallelism / 3D Collinearity (θ = 0°):** **a₁ / a₂ = b₁ / b₂ = c₁ / c₂**! (3D collinearity check karne ka sabse tez tareeka!)

---

## 6 Deep Advanced Solved Problems (Step-by-Step With Jaanch)

### Problem 1: Centre & Radius Of A 3D Sphere
**Sawaal:** Sphere **2x² + 2y² + 2z² - 4x + 8y - 12z + 6 = 0** ka centre aur radius gyat karo.

**Solution:**
Pehle 2 se divide karo: x² + y² + z² - 2x + 4y - 6z + 3 = 0.
Yahan u = -1, v = 2, w = -3, d = 3.
- **Centre = (-u, -v, -w) = (1, -2, 3)**.
- **Radius r** = √((-1)² + 2² + (-3)² - 3) = √(1 + 4 + 9 - 3) = **√11 units**.

Jaanch:
- Jaanch: (x - 1)² + (y + 2)² + (z - 3)² = 1 + 4 + 9 - 3 = 11 ✅

---

### Problem 2: Sphere Passing Through Origin And Three Axis Intercepts
**Sawaal:** Us sphere ki equation gyat karo jo origin (0, 0, 0) aur points (2, 0, 0), (0, 4, 0), (0, 0, 6) se guzarta hai.

**Solution:**
General sphere: x² + y² + z² + 2ux + 2vy + 2wz + d = 0.
- (0, 0, 0) => **d = 0**.
- (2, 0, 0) => 4 + 4u = 0 => **2u = -2**.
- (0, 4, 0) => 16 + 8v = 0 => **2v = -4**.
- (0, 0, 6) => 36 + 12w = 0 => **2w = -6**.

Equation: **x² + y² + z² - 2x - 4y - 6z = 0**! (Centre = (1, 2, 3), Radius = √14).

Jaanch:
- Jaanch: All 4 points satisfy x² + y² + z² - 2x - 4y - 6z = 0 ✅

---

### Problem 3: Line Making Equal Angles With All Three Axes
**Sawaal:** Ek 3D line teeno positive coordinate axes se equal acute angle α banati hai. Uske direction cosines aur cos α ki exact value gyat karo.

**Solution:**
α = β = γ => l = m = n = cos α.
Identity l² + m² + n² = 1 se:
3 cos² α = 1 => cos² α = 1/3 => **cos α = 1/√3** (acute => positive!).
Direction cosines: **(1/√3, 1/√3, 1/√3)**!

Jaanch:
- Jaanch: (1/√3)² + (1/√3)² + (1/√3)² = 1/3 + 1/3 + 1/3 = 1 ✅

---

### Problem 4: Angle Between Two 3D Segments
**Sawaal:** Segments AB (A(1, 2, 3), B(4, 5, 7)) aur CD (C(-4, 3, -6), D(2, 9, 2)) ke beech ka angle gyat karo.

**Solution:**
DRs of AB: (4 - 1, 5 - 2, 7 - 3) = **(3, 3, 4)**.
DRs of CD: (2 - (-4), 9 - 3, 2 - (-6)) = **(6, 6, 8)** = 2 × (3, 3, 4)!

Kyunki 3/6 = 3/6 = 4/8 = 1/2 (DRs proportional hain!), dono segments **parallel** hain => **angle θ = 0°**!

Jaanch:
- Jaanch: cos θ = |18 + 18 + 32| / (√34 · √136) = 68 / 68 = 1 => θ = 0° ✅

---

### Problem 5: Perpendicularity Value Of k In 3D
**Sawaal:** Agar A(1, 2, 3), B(3, 5, k), aur C(2, 0, 5) ke liye segment AB, segment AC par perpendicular ho (∠BAC = 90°), to k gyat karo.

**Solution:**
- DRs of AB: (3 - 1, 5 - 2, k - 3) = **(2, 3, k - 3)**.
- DRs of AC: (2 - 1, 0 - 2, 5 - 3) = **(1, -2, 2)**.

Perpendicularity condition a₁a₂ + b₁b₂ + c₁c₂ = 0:
2(1) + 3(-2) + (k - 3)(2) = 0
2 - 6 + 2k - 6 = 0
2k = 10 => **k = 5**!

Jaanch:
- Jaanch: AB² = 4 + 9 + 4 = 17, AC² = 1 + 4 + 4 = 9, BC² = 1 + 25 + 0 = 26; 17 + 9 = 26 (Pythagoras verified!) ✅

---

### Problem 6: Centroid Of A Tetrahedron (Reverse Vertex)
**Sawaal:** Tetrahedron ABCD ka centroid (1, 2, 3) hai. Agar A(1, 1, 1), B(2, 3, 4), aur C(-1, 2, 5) hon, to chautha vertex D gyat karo.

**Solution:**
Let D = (x, y, z):
- (1 + 2 - 1 + x)/4 = 1 => 2 + x = 4 => **x = 2**
- (1 + 3 + 2 + y)/4 = 2 => 6 + y = 8 => **y = 2**
- (1 + 4 + 5 + z)/4 = 3 => 10 + z = 12 => **z = 2**

Vertex **D = (2, 2, 2)**!

Jaanch:
- Jaanch: ((1 + 2 - 1 + 2)/4, (1 + 3 + 2 + 2)/4, (1 + 4 + 5 + 2)/4) = (4/4, 8/4, 12/4) = (1, 2, 3) ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Direction Ratios ko Direction Cosines samajh kar l² + m² + n² = 1 check karna
- **Galat soch:** "DRs (2, 3, 6) hain, par 4 + 9 + 36 = 49 ≠ 1, isliye yeh invalid hai!"
- **Sahi samajh:** Direction Ratios (a, b, c) kuch bhi ho sakte hain; unhe √(a² + b² + c²) = 7 se divide karne par **Direction Cosines (2/7, 3/7, 6/7)** bante hain jinka square sum 1 hota hai!

### Galti 2: Tetrahedron centroid mein 3 se divide kar dena
- **Galat soch:** "Triangle jaisa hi sum / 3 hoga."
- **Sahi samajh:** Tetrahedron mein **4 vertices** hote hain, isliye **4 se divide** hota hai!

### Galti 3: sin² α + sin² β + sin² γ = 1 likh dena
- **Galat soch:** "cos² ka sum 1 hai to sin² ka sum bhi 1 hoga."
- **Sahi samajh:** **cos² α + cos² β + cos² γ = 1**, isliye **sin² α + sin² β + sin² γ = 3 - 1 = 2** hota hai!

---

## Quick Recap

- **Sphere:** (x - h)² + (y - k)² + (z - l)² = r²; General: centre (-u, -v, -w), r = √(u² + v² + w² - d).
- **Tetrahedron Centroid:** Average of all 4 vertices (divide by 4!).
- **Direction Cosines:** l² + m² + n² = 1; sin² α + sin² β + sin² γ = 2.
- **3D Angle:** cos θ = |a₁a₂ + b₁b₂ + c₁c₂| / (√Σa₁² · √Σa₂²); Perp <=> a₁a₂ + b₁b₂ + c₁c₂ = 0; Parallel <=> a₁/a₂ = b₁/b₂ = c₁/c₂.

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Find the centre and radius of the sphere x² + y² + z² - 6x + 4y - 2z - 11 = 0.

**Solution:**
u = -3, v = 2, w = -1, d = -11.
Centre = **(3, -2, 1)**; Radius = √(9 + 4 + 1 - (-11)) = √25 = **5 units**.

Jaanch:
- Jaanch: 9 + 4 + 1 + 11 = 25 = 5² ✅

---

### Question 2
Find the equation of the sphere on the join of (1, -2, 3) and (3, 4, -5) as diameter.

**Solution:**
Diameter form: (x - 1)(x - 3) + (y + 2)(y - 4) + (z - 3)(z + 5) = 0
=> **x² + y² + z² - 4x - 2y + 2z - 20 = 0**.

Jaanch:
- Jaanch: Centre = (2, 1, -1), r² = 1 + 9 + 16 = 26; 4 + 1 + 1 - (-20) = 26 ✅

---

### Question 3
Find the direction cosines of the line segment joining P(1, -1, 2) and Q(3, 1, 1).

**Solution:**
DRs = (2, 2, -1). Length = √(4 + 4 + 1) = 3.
DCs = **(2/3, 2/3, -1/3)**.

Jaanch:
- Jaanch: (2/3)² + (2/3)² + (-1/3)² = (4 + 4 + 1)/9 = 1 ✅

---

### Question 4
If a line makes angles 90° and 60° with the positive x-axis and y-axis respectively, find the acute angle it makes with the positive z-axis.

**Solution:**
cos² 90° + cos² 60° + cos² γ = 1 => 0 + 1/4 + cos² γ = 1 => cos² γ = 3/4 => cos γ = √3/2 => **γ = 30°**.

Jaanch:
- Jaanch: 0 + 1/4 + 3/4 = 1 ✅

---

### Question 5
Find the acute angle between two lines whose direction ratios are (1, 1, 2) and (√3 - 1, -√3 - 1, 4).

**Solution:**
a₁a₂ + b₁b₂ + c₁c₂ = (√3 - 1) + (-√3 - 1) + 8 = 6.
√(a₁² + b₁² + c₁²) = √(1 + 1 + 4) = √6.
√(a₂² + b₂² + c₂²) = √[(4 - 2√3) + (4 + 2√3) + 16] = √24 = 2√6.
cos θ = 6 / (√6 · 2√6) = 6 / 12 = 1/2 => **θ = 60°**.

Jaanch:
- Jaanch: cos 60° = 1/2 ✅

---

### Question 6
Find the value of p so that the lines with direction ratios (2, -1, p) and (3, 4, 2) are perpendicular.

**Solution:**
2(3) + (-1)(4) + p(2) = 0 => 6 - 4 + 2p = 0 => 2p = -2 => **p = -1**.

Jaanch:
- Jaanch: 6 - 4 - 2 = 0 ✅

---

### Question 7
Using direction ratios, prove that the points A(2, 3, -4), B(1, -2, 3), and C(3, 8, -11) are collinear.

**Solution:**
DRs of AB = (-1, -5, 7).
DRs of AC = (1, 5, -7) = -1 × (-1, -5, 7)!
Since DRs are proportional and point A is common, A, B, C are **collinear**!

Jaanch:
- Jaanch: Notice A is the exact midpoint of B(1, -2, 3) and C(3, 8, -11): ((1+3)/2, (-2+8)/2, (3-11)/2) = (2, 3, -4) ✅

---

### Question 8
Find the centroid of the tetrahedron with vertices (0, 0, 0), (4, 0, 0), (0, 8, 0), and (0, 0, 12).

**Solution:**
G = ((0 + 4 + 0 + 0)/4, (0 + 0 + 8 + 0)/4, (0 + 0 + 0 + 12)/4) = **(1, 2, 3)**.

Jaanch:
- Jaanch: 4/4 = 1, 8/4 = 2, 12/4 = 3 ✅

---

### Question 9
Find the angle between two diagonals of a unit cube (edges along x, y, z axes from (0, 0, 0) to (1, 1, 1)).

**Solution:**
Diagonal 1: from (0, 0, 0) to (1, 1, 1) => DRs = (1, 1, 1).
Diagonal 2: from (1, 0, 0) to (0, 1, 1) => DRs = (-1, 1, 1).
cos θ = |-1 + 1 + 1| / (√3 · √3) = **1/3** => **θ = cos⁻¹(1/3)** (approx 70.53°).

Jaanch:
- Jaanch: Exact tetrahedral angle arccos(1/3) ≈ 70.53° ✅

---

### Question 10
Does a line exist that makes angles 45°, 60°, and 60° with the x, y, and z axes respectively?

**Solution:**
Check cos² 45° + cos² 60° + cos² 60° = 1/2 + 1/4 + 1/4 = **1**!
Yes! Such a line **exists**!

Jaanch:
- Jaanch: 1/2 + 1/4 + 1/4 = 1 satisfies l² + m² + n² = 1 ✅

---

### Question 11
Find the equation of the sphere concentric with x² + y² + z² - 2x - 4y - 6z = 0 and passing through (2, 4, 6).

**Solution:**
Centre = (1, 2, 3).
Radius² = (2 - 1)² + (4 - 2)² + (6 - 3)² = 1 + 4 + 9 = 14.
Equation: **(x - 1)² + (y - 2)² + (z - 3)² = 14** (ya x² + y² + z² - 2x - 4y - 6z = 0 — the exact same sphere!).

Jaanch:
- Jaanch: (2, 4, 6) par 4 + 16 + 36 - 4 - 16 - 36 = 0 ✅

---

### Question 12
Find the value of sin² α + sin² β + sin² γ if α, β, γ are the direction angles of any 3D line.

**Solution:**
Since cos² α + cos² β + cos² γ = 1:
(1 - sin² α) + (1 - sin² β) + (1 - sin² γ) = 1
=> **sin² α + sin² β + sin² γ = 2**.

Jaanch:
- Jaanch: Test x-axis (α = 0°, β = 90°, γ = 90°): 0 + 1 + 1 = 2 ✅

---

Ab tumne **3D Geometry** ke sabse sharp advanced tools — 3D Spheres, Tetrahedron Centroid, Direction Cosines, aur 3D Angle Formula — ko master kar liya hai!
