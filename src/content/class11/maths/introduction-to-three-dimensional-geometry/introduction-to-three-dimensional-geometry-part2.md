# Chapter: Introduction to Three Dimensional Geometry (Part 2)

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla topic [introduction-to-three-dimensional-geometry.md](introduction-to-three-dimensional-geometry.md) tha** (Topic 1: Coordinate Axes, Coordinate Planes, aur 8 Octants).
> **Topics covered in this file:**
> 1. Coordinates of a Point in Space: Rectangular Box (Cuboid) Construction, Feet of Perpendiculars, Aur All 8 Vertices of a Cuboid

---

# Topic 2: Coordinates of a Point in Space

Topic 1 mein tumne dekha ki 3D space mein teen axes aur teen coordinate planes hote hain. Ab ek ahem sawal: kisi bhi hawa mein sthit point **P(x, y, z)** ke teeno numbers x, y, z geometrically kahan se aate hain? Aur jab hum P se kisi plane ya axis par seedha perpendicular daalte hain, to uska **foot (chhaya / projection)** kahan padta hai?

Is topic mein hum 3D box (cuboid) visualization ke zariye har coordinate, har foot of perpendicular, aur kisi bhi coordinate-aligned cuboid ke sabhi 8 vertices ko crystal-clear bana denge!

---

## Ekta ka warehouse drone-inventory system

Ekta ek smart logistics warehouse mein automated drone-inventory operator hai. Warehouse ke floor corner ko origin O(0, 0, 0) maana gaya hai. Ek storage rack par hanging pallet P(-2, 5, -7) (underground basement storage zone mein) ko scan karne ke liye Ekta ke laser sensors ne 6 projections (feet of perpendiculars) lock kiye:
- Floor (XY-plane) par seedhi shadow: **(-2, 5, 0)**
- Side wall (YZ-plane) par laser dot: **(0, 5, -7)**
- Back wall (ZX-plane) par laser dot: **(-2, 0, -7)**
- Aur x-rail, y-rail, z-rail par exact slider positions: **(-2, 0, 0)**, **(0, 5, 0)**, **(0, 0, -7)**!

Ekta ne team ko samjhaya: "Plane par foot nikaalne ke liye sirf **ek** missing coordinate zero karo, aur axis par foot nikaalne ke liye **do** baaki coordinates zero karo!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Rectangular Parallelepiped (Cuboid)** | Origin O aur point P(x, y, z) ke beech coordinate planes ke parallel faces se bana 3D box | 8 vertices, 6 faces, 12 edges |
| **Signed Distance** | Kisi coordinate plane se doori uske + ya - sign ke saath | x = YZ-plane se signed distance |
| **Foot of Perpendicular (Plane)** | Point P se plane par 90° giraane par milne wala projection point | XY-plane par (x, y, 0) |
| **Foot of Perpendicular (Axis)** | Point P se axis par 90° giraane par milne wala projection point | x-axis par (x, 0, 0) |

---

## Part A: Point P(x, y, z) Ka 3D Box (Cuboid) Visualization

Maan lo space mein koi point **P(x, y, z)** hai. P se teeno coordinate planes (XY, YZ, ZX) ke parallel teen planes kheencho. Yeh teen naye planes aur teen purane coordinate planes milkar ek **rectangular box (cuboid)** banate hain jiska ek kona O(0, 0, 0) aur theek opposite kona P(x, y, z) hota hai!

```
               z
               ^
           C(0,0,z)----------F(0,y,z)
             / :               / :
            /  :              /  :
       E(x,0,z)-----------P(x,y,z)
           :   :             :   :
           :  O(0,0,0)-------:--B(0,y,0) --> y
           :  /              :  /
           : /               : /
       A(x,0,0)-----------D(x,y,0)
          /
         v
        x
```

Is box ke har edge ko dhyan se dekho:
- **x-coordinate** = signed distance of P from the **YZ-plane** (along x-axis).
- **y-coordinate** = signed distance of P from the **ZX-plane** (along y-axis).
- **z-coordinate** = signed distance of P from the **XY-plane** (along z-axis).

---

## Part B: Feet Of Perpendiculars (One-Line Rule!)

Point **P(x, y, z)** ke sabhi 6 feet of perpendiculars:

| Target (Kahan par perpendicular giraya?) | Rule (Kaun zero hoga?) | Foot of Perpendicular |
|---|---|---|
| **XY-plane** (z = 0) | Sirf z = 0 karo | **(x, y, 0)** |
| **YZ-plane** (x = 0) | Sirf x = 0 karo | **(0, y, z)** |
| **ZX-plane** (y = 0) | Sirf y = 0 karo | **(x, 0, z)** |
| **x-axis** (y = 0, z = 0) | y aur z dono 0 karo | **(x, 0, 0)** |
| **y-axis** (x = 0, z = 0) | x aur z dono 0 karo | **(0, y, 0)** |
| **z-axis** (x = 0, y = 0) | x aur y dono 0 karo | **(0, 0, z)** |

---

## Part C: Shifted Cuboid Ke Sabhi 8 Vertices

Agar ek cuboid ke faces coordinate planes ke parallel hon aur uske do opposite vertices **A(x₁, y₁, z₁)** aur **B(x₂, y₂, z₂)** diye hon:
- Har vertex ka x-coordinate ya to x₁ hoga ya x₂ (2 choices)
- Har vertex ka y-coordinate ya to y₁ hoga ya y₂ (2 choices)
- Har vertex ka z-coordinate ya to z₁ hoga ya z₂ (2 choices)

Total vertices = 2 × 2 × 2 = **8 vertices**!
Aur cuboid ke teeno edges ki lambaiyan hoti hain:
- Parallel to x-axis: **|x₂ - x₁|**
- Parallel to y-axis: **|y₂ - y₁|**
- Parallel to z-axis: **|z₂ - z₁|**

---

## Solved Examples (Step-by-Step With Jaanch)

### Example 2.1: Feet Of Perpendiculars On All Planes And Axes
**Sawaal:** Point P(-2, 5, -7) se teeno coordinate planes aur teeno coordinate axes par daale gaye perpendiculars ke feet gyat karo.

**Solution:**
- Foot on **XY-plane**: **(-2, 5, 0)**
- Foot on **YZ-plane**: **(0, 5, -7)**
- Foot on **ZX-plane**: **(-2, 0, -7)**
- Foot on **x-axis**: **(-2, 0, 0)**
- Foot on **y-axis**: **(0, 5, 0)**
- Foot on **z-axis**: **(0, 0, -7)**

Jaanch:
- Jaanch: Har plane-foot mein exactly 1 zero aur har axis-foot mein exactly 2 zeros hain ✅

---

### Example 2.2: All 8 Vertices Of A Cuboid From Origin
**Sawaal:** Ek cuboid ka ek vertex origin O(0, 0, 0) par hai aur uska opposite vertex P(4, 3, 6) par hai (faces coordinate planes ke parallel hain). Is cuboid ke sabhi 8 vertices aur unke 6 face-planes ki equations likho.

**Solution:**
Choices: x in {0, 4}, y in {0, 3}, z in {0, 6}.
Sabhi 8 vertices:
- Bottom face (z = 0): (0, 0, 0), (4, 0, 0), (4, 3, 0), (0, 3, 0)
- Top face (z = 6): (0, 0, 6), (4, 0, 6), (4, 3, 6), (0, 3, 6)

6 face-planes: x = 0, x = 4, y = 0, y = 3, z = 0, z = 6.

Jaanch:
- Jaanch: Total 4 + 4 = 8 distinct vertices aur edge lengths 4, 3, 6 (volume = 72) ✅

---

### Example 2.3: Shifted Cuboid From Two Opposite Vertices
**Sawaal:** Ek cuboid ke faces coordinate planes ke parallel hain aur do opposite vertices A(1, 2, 3) aur B(5, 6, 8) hain. Edge lengths aur baaki 6 vertices gyat karo.

**Solution:**
Edge lengths:
- Along x-axis: |5 - 1| = **4 units**
- Along y-axis: |6 - 2| = **4 units**
- Along z-axis: |8 - 3| = **5 units**

Choices: x in {1, 5}, y in {2, 6}, z in {3, 8}.
A(1, 2, 3) aur B(5, 6, 8) ko chhodkar baaki 6 vertices:
- Bottom face (z = 3): **(5, 2, 3)**, **(1, 6, 3)**, **(5, 6, 3)**
- Top face (z = 8): **(1, 2, 8)**, **(5, 2, 8)**, **(1, 6, 8)**

Jaanch:
- Jaanch: 2 given + 6 found = 8 distinct vertices; sabhi x in {1, 5}, y in {2, 6}, z in {3, 8} ✅

---

### Example 2.4: Finding Coordinates From Plane Distances And Octant
**Sawaal:** Ek point Q Octant VI mein sthit hai. Iski YZ-plane, ZX-plane, aur XY-plane se dooriyan kramashah 3, 5, aur 2 units hain. Q ke coordinates gyat karo.

**Solution:**
1. Plane distances se magnitudes:
   - YZ-plane se doori = |x| = 3
   - ZX-plane se doori = |y| = 5
   - XY-plane se doori = |z| = 2
2. Octant VI (Q2 downstairs) mein signs hote hain **(-, +, -)**.

Isliye **Q = (-3, 5, -2)**.

Jaanch:
- Jaanch: |-3| = 3 (from YZ), |5| = 5 (from ZX), |-2| = 2 (from XY), aur signs (-, +, -) = Octant VI ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: |x| ko XY-plane se doori samajh lena
- **Galat soch:** "x-coordinate = XY-plane se doori."
- **Sahi samajh:** Nahi! XY-plane mein z = 0 hota hai, isliye XY-plane se doori **|z|** hoti hai! |x| **YZ-plane** (x = 0) se doori hoti hai! (Trick: plane ke naam mein jo letter MISSING hai, wahi coordinate doori batata hai!)

### Galti 2: Axis par foot nikaalte waqt sirf ek coordinate zero karna
- **Galat soch:** "P(2, 3, 4) ka x-axis par foot (0, 3, 4) hai."
- **Sahi samajh:** (0, 3, 4) to YZ-plane par foot hai! x-axis par x hi bachta hai aur y, z dono zero ho jaate hain => **(2, 0, 0)**!

### Galti 3: Cuboid ke 8 vertices ginte waqt combinations miss karna
- **Galat soch:** "Bas (1, 2, 3) mein ek-ek coordinate badal diya: (5, 2, 3), (1, 6, 3), (1, 2, 8) — ho gaye sab!"
- **Sahi samajh:** Isse sirf 3 vertices mile! Do coordinates ek saath badalne wale 3 vertices — (5, 6, 3), (5, 2, 8), (1, 6, 8) — bhi cuboid ke corners hain! Hamesha bottom face (4 vertices) aur top face (4 vertices) alag-alag likho.

---

## Quick Recap

- **Signed distances:** x from YZ-plane, y from ZX-plane, z from XY-plane (missing letter rule!).
- **Feet on planes (1 zero):** XY -> (x, y, 0), YZ -> (0, y, z), ZX -> (x, 0, z).
- **Feet on axes (2 zeros):** x-axis -> (x, 0, 0), y-axis -> (0, y, 0), z-axis -> (0, 0, z).
- **Coordinate-aligned cuboid:** Opposite vertices (x₁, y₁, z₁) and (x₂, y₂, z₂) give 2 × 2 × 2 = 8 vertices and edges |x₂ - x₁|, |y₂ - y₁|, |z₂ - z₁|.

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Find the feet of the perpendiculars drawn from the point (4, -1, 3) to the XY, YZ, and ZX coordinate planes.

**Solution:**
- XY-plane (z = 0): **(4, -1, 0)**
- YZ-plane (x = 0): **(0, -1, 3)**
- ZX-plane (y = 0): **(4, 0, 3)**

Jaanch:
- Jaanch: Missing letter coordinate zero kiya gaya hai (z, x, y respectively) ✅

---

### Question 2
Find the feet of the perpendiculars drawn from the point (-5, 2, 8) to the x-axis, y-axis, and z-axis.

**Solution:**
- x-axis: **(-5, 0, 0)**
- y-axis: **(0, 2, 0)**
- z-axis: **(0, 0, 8)**

Jaanch:
- Jaanch: Har axis-foot par sirf usi axis ka coordinate non-zero hai ✅

---

### Question 3
A point lies in Octant IV at distances 7, 2, and 9 units from the YZ, ZX, and XY planes respectively. Find its coordinates.

**Solution:**
|x| = 7 (from YZ), |y| = 2 (from ZX), |z| = 9 (from XY).
Octant IV has signs (+, -, +).
Coordinates: **(7, -2, 9)**.

Jaanch:
- Jaanch: (+, -, +) = Octant IV aur magnitudes 7, 2, 9 match YZ, ZX, XY ✅

---

### Question 4
A cuboid has faces parallel to the coordinate planes with one vertex at the origin (0, 0, 0) and the opposite vertex at (2, 5, 3). Write all 8 vertices of the cuboid.

**Solution:**
- z = 0 face: (0, 0, 0), (2, 0, 0), (2, 5, 0), (0, 5, 0)
- z = 3 face: (0, 0, 3), (2, 0, 3), (2, 5, 3), (0, 5, 3).

Jaanch:
- Jaanch: 8 distinct vertices, edge lengths 2, 5, 3 ✅

---

### Question 5
Find the lengths of the edges of a coordinate-aligned cuboid whose opposite vertices are (-1, 3, 2) and (4, -2, 7).

**Solution:**
- Along x-axis: |4 - (-1)| = **5 units**
- Along y-axis: |-2 - 3| = **5 units**
- Along z-axis: |7 - 2| = **5 units**
(Yeh ek perfect 5 × 5 × 5 **cube** hai!)

Jaanch:
- Jaanch: All three edge differences equal 5 ✅

---

### Question 6
Write the remaining 6 vertices of the cube in Question 5 with opposite vertices (-1, 3, 2) and (4, -2, 7).

**Solution:**
Choices: x in {-1, 4}, y in {3, -2}, z in {2, 7}.
- z = 2 face (excluding (-1, 3, 2)): **(4, 3, 2)**, **(-1, -2, 2)**, **(4, -2, 2)**
- z = 7 face (excluding (4, -2, 7)): **(-1, 3, 7)**, **(4, 3, 7)**, **(-1, -2, 7)**.

Jaanch:
- Jaanch: 2 given + 6 listed = 8 distinct vertices ✅

---

### Question 7
If L, M, N are the feet of perpendiculars from P(3, 4, 5) to the XY, YZ, and ZX planes respectively, find the distance of L from the origin.

**Solution:**
L (foot on XY-plane) = (3, 4, 0).
Distance of L(3, 4, 0) from O(0, 0, 0) = √(3² + 4² + 0²) = √25 = **5 units**.

Jaanch:
- Jaanch: Notice this is also the perpendicular distance of P(3, 4, 5) from the z-axis! ✅

---

### Question 8
A point P has coordinates (a, b, c). Write the coordinates of the vertex of the origin-box (cuboid) diagonally opposite to the foot on the x-axis (a, 0, 0).

**Solution:**
Origin-box has x in {0, a}, y in {0, b}, z in {0, c}.
Diagonally opposite to (a, 0, 0) flips every coordinate to its other choice: **(0, b, c)** (which is the foot of P on the YZ-plane!).

Jaanch:
- Jaanch: Midpoint of (a, 0, 0) and (0, b, c) is (a/2, b/2, c/2) = exact centre of the cuboid ✅

---

### Question 9
Find the coordinates of the point which is at a distance of 4 units from the XY-plane (below it), 3 units from the YZ-plane (behind it, negative x), and lies on the ZX-plane.

**Solution:**
- Lies on ZX-plane => y = 0.
- 4 units below XY-plane => z = -4.
- 3 units behind YZ-plane (negative x) => x = -3.
Point: **(-3, 0, -4)**.

Jaanch:
- Jaanch: y = 0 (on ZX-plane), x = -3 < 0, z = -4 < 0 ✅

---

### Question 10
Find the area of the face of the cuboid lying in the XY-plane if its opposite vertices are (0, 0, 0) and (6, 4, 9).

**Solution:**
Face in XY-plane (z = 0) is a rectangle with vertices (0, 0, 0), (6, 0, 0), (6, 4, 0), (0, 4, 0).
Sides are 6 units and 4 units.
Area = 6 × 4 = **24 sq units**.

Jaanch:
- Jaanch: Edge along x is 6, along y is 4 => 6 × 4 = 24 ✅

---

### Question 11
A point P(x, y, z) has its foot on the y-axis at (0, -6, 0) and its foot on the ZX-plane at (5, 0, 2). Find the coordinates of P.

**Solution:**
- Foot on y-axis is (0, y, 0) = (0, -6, 0) => y = -6.
- Foot on ZX-plane is (x, 0, z) = (5, 0, 2) => x = 5, z = 2.
Therefore **P = (5, -6, 2)**.

Jaanch:
- Jaanch: P(5, -6, 2) gives y-axis foot (0, -6, 0) and ZX-plane foot (5, 0, 2) ✅

---

### Question 12
Find the length of the projection of the segment joining A(1, 2, 3) and B(4, 6, 9) onto the XY-plane.

**Solution:**
Projections (feet) on XY-plane (z = 0):
A' = (1, 2, 0) and B' = (4, 6, 0).
Length A'B' = √[(4 - 1)² + (6 - 2)²] = √(9 + 16) = √25 = **5 units**.

Jaanch:
- Jaanch: 3-4-5 right triangle in the XY-plane ✅

---

Ab tum kisi bhi 3D point, uske projections, aur uske cuboid ko aankhon ke saamne dekh sakte ho! Agle topic [introduction-to-three-dimensional-geometry-part3.md](introduction-to-three-dimensional-geometry-part3.md) mein hum isi cuboid box par Pythagoras Theorem do baar lagakar **3D Distance Formula** derive karenge aur **3D Section Formula** seekhenge!
