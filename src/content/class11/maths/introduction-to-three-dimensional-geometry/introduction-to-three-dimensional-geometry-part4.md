# Chapter: Introduction to Three Dimensional Geometry (Part 4)

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla topic [introduction-to-three-dimensional-geometry-part3.md](introduction-to-three-dimensional-geometry-part3.md) tha** (Topic 3: 3D Distance Formula, 3D Section Formula, aur Centroid).
> **Topics covered in this file:**
> 1. Sab Kuch Mila Kar: 3D Collinearity, Triangle & Parallelogram Proofs, Equidistant Loci, Mixed Practice, Aur Chapter Wrap-up Table

---

# Topic 4: Sab Kuch Mila Kar — Mixed 3D Problems, Applications, Aur Chapter Wrap-up

Pichhle teen topics mein tumne 3D geometry ki poori buniyad tayyar kar li hai: 8 octants, coordinate planes, feet of perpendiculars, 3D distance formula, 3D section formula, aur centroid.

Ab in sabhi tools ko mila kar classic 3D spatial problems solve karte hain — 3D collinearity kaise prove karein (kyunki 2D slope yahan nahi chalta!), 3D triangles aur parallelograms ko kaise verify karein, aur 3D locus equations kaise banayein!

---

## Nitin ka 3D Printing & Robotics Lab

School ke 3D Printing & Robotics Lab mein Nitin ek robotic arm ke 3D waypoints verify kar raha tha. Uske samne teen spatial checks the:
- **Check 1 (Collinearity):** Kya robot ke teen waypoints A(-2, 3, 5), B(1, 2, 3), aur C(7, 0, -1) bilkul ek hi seedhi 3D line mein hain?
- **Check 2 (Frame Symmetry):** Ek 3D parallelogram mount ke teen corners A, B, C diye hain — chautha corner D kahan print hoga?
- **Check 3 (Equidistant Sensor Plane):** Do ultrasonic transmitters A(1, 2, 3) aur B(3, 2, -1) se hamesha barabar doori par rehne wale sabhi points ki 3D equation kya hogi?

Nitin ne dekha ki bas 3D Distance Formula aur Midpoint/Section Formula milkar yeh saare spatial puzzles minute bhar mein hal kar dete hain!

---

## Decision Map: Kaun Sa 3D Tool Kab?

| Sawaal mein kya prove ya find karna hai? | Sabse best 3D tool | Yaad rakhne ki baat |
|---|---|---|
| 3D points A, B, C collinear hain ya nahi | Distance Formula (AB + BC = AC) ya Section Formula (k : 1) | 2D slope 3D mein kaam nahi karta! |
| Triangle isosceles / equilateral / right-angled hai | Teeno sides AB, BC, CA ki lambai (Distance Formula) | Right-angled ke liye Pythagoras a² + b² = c² check karo |
| Parallelogram ABCD ka 4th vertex D | Diagonals AC aur BD ke midpoints barabar rakho | x_D = x_A + x_C - x_B (diagonal opposite minus adjacent!) |
| Kisi axis par equidistant point | Point (x, 0, 0), (0, y, 0), ya (0, 0, z) maano aur PA² = PB² | Square karke root hatao — algebra seedha linear ho jata hai! |
| Equidistant locus PA = PB ya PA² + PB² = k² | P(x, y, z) maankar distance equation simplify karo | PA = PB hamesha ek flat plane deta hai (x², y², z² cancel!) |
| Triangle ka unknown vertex (centroid diya ho) | G = ((x₁ + x₂ + x₃)/3, ...) | x₃ = 3x_G - x₁ - x₂ |

---

## 6 Rich Mixed Solved Problems (Step-by-Step With Jaanch)

### Problem 4.1: Proving 3D Collinearity And Finding Division Ratio
**Sawaal:** Dikhao ki points A(-2, 3, 5), B(1, 2, 3), aur C(7, 0, -1) collinear hain, aur woh ratio gyat karo jisme B segment AC ko divide karta hai.

**Solution:**
Teeno distances nikaalo:
- AB = √[(1 - (-2))² + (2 - 3)² + (3 - 5)²] = √[9 + 1 + 4] = **√14**
- BC = √[(7 - 1)² + (0 - 2)² + (-1 - 3)²] = √[36 + 4 + 16] = √56 = **2√14**
- AC = √[(7 - (-2))² + (0 - 3)² + (-1 - 5)²] = √[81 + 9 + 36] = √126 = **3√14**

Dekho:
**AB + BC = √14 + 2√14 = 3√14 = AC!**
Isliye points A, B, aur C **collinear** hain (aur B, A aur C ke beech mein hai)!

Ratio AB : BC = √14 : 2√14 = **1 : 2 internally**.

Jaanch:
- Jaanch: Section formula se 1 : 2 internal division of A(-2, 3, 5) aur C(7, 0, -1): ((7 - 4)/3, (0 + 6)/3, (-1 + 10)/3) = (1, 2, 3) = B ✅

---

### Problem 4.2: Classifying A 3D Triangle (Right-Angled Isosceles)
**Sawaal:** Verify karo ki points A(0, 7, -10), B(1, 6, -6), aur C(4, 9, -6) ek right-angled isosceles triangle ke vertices hain.

**Solution:**
Teeno sides ke squares nikaalo:
- AB² = (1 - 0)² + (6 - 7)² + (-6 - (-10))² = 1 + 1 + 16 = **18** => AB = 3√2
- BC² = (4 - 1)² + (9 - 6)² + (-6 - (-6))² = 9 + 9 + 0 = **18** => BC = 3√2
- AC² = (4 - 0)² + (9 - 7)² + (-6 - (-10))² = 16 + 4 + 16 = **36** => AC = 6

1. Kyunki **AB = BC = 3√2**, triangle **isosceles** hai.
2. Kyunki **AB² + BC² = 18 + 18 = 36 = AC²**, Pythagoras ke converse se ∠B = 90° => triangle **right-angled** bhi hai!

Isliye △ABC ek **right-angled isosceles triangle** hai.

Jaanch:
- Jaanch: 18 + 18 = 36 aur AB = BC = 3√2 ✅

---

### Problem 4.3: Finding The Fourth Vertex Of A 3D Parallelogram
**Sawaal:** Ek parallelogram ABCD ke teen lagatar (consecutive) vertices A(3, -1, 2), B(1, 2, -4), aur C(-1, 1, 2) hain. Chauthe vertex D ke coordinates gyat karo.

**Solution:**
Parallelogram ke diagonals AC aur BD ek doosre ko bisect karte hain => **Midpoint of AC = Midpoint of BD**!
Maan lo D = (x, y, z):
- Midpoint of AC = ( (3 + (-1))/2, (-1 + 1)/2, (2 + 2)/2 ) = **(1, 0, 2)**
- Midpoint of BD = ( (1 + x)/2, (2 + y)/2, (-4 + z)/2 )

Dono ko barabar rakho:
- (1 + x)/2 = 1 => x = 1
- (2 + y)/2 = 0 => y = -2
- (-4 + z)/2 = 2 => z = 8

Isliye chautha vertex **D = (1, -2, 8)**.

Jaanch:
- Jaanch: AB² = (-2)² + 3² + (-6)² = 49 (AB = 7), CD² = 2² + (-3)² + 6² = 49 (CD = 7); BC² = (-2)² + (-1)² + 6² = 41, AD² = (-2)² + (-1)² + 6² = 41 ✅

---

### Problem 4.4: Equidistant Point On A Coordinate Axis
**Sawaal:** y-axis par woh point P gyat karo jo points A(3, 1, 2) aur B(5, 5, 2) se barabar doori (equidistant) par hai.

**Solution:**
y-axis par har point ke coordinates **P(0, y, 0)** hote hain.
Given PA = PB => PA² = PB²:
(0 - 3)² + (y - 1)² + (0 - 2)² = (0 - 5)² + (y - 5)² + (0 - 2)²
9 + (y² - 2y + 1) + 4 = 25 + (y² - 10y + 25) + 4

y² aur 4 dono taraf se cancel ho jaate hain!
10 - 2y = 50 - 10y
8y = 40 => **y = 5**.

Isliye required point **P = (0, 5, 0)**.

Jaanch:
- Jaanch: PA² = 9 + 16 + 4 = 29 aur PB² = 25 + 0 + 4 = 29 => PA = PB = √29 ✅

---

### Problem 4.5: Centroid Reverse Problem (Finding The Third Vertex)
**Sawaal:** Triangle ABC ka centroid G(1, 1, 1) hai. Agar A(3, -5, 7) aur B(-1, 7, -6) hon, to teesre vertex C ke coordinates gyat karo.

**Solution:**
Maan lo C = (x, y, z). Centroid formula se:
- (3 + (-1) + x) / 3 = 1 => 2 + x = 3 => **x = 1**
- (-5 + 7 + y) / 3 = 1 => 2 + y = 3 => **y = 1**
- (7 + (-6) + z) / 3 = 1 => 1 + z = 3 => **z = 2**

Isliye **C = (1, 1, 2)**.

Jaanch:
- Jaanch: ((3 - 1 + 1)/3, (-5 + 7 + 1)/3, (7 - 6 + 2)/3) = (1, 1, 1) = G ✅

---

### Problem 4.6: 3D Equidistant Locus Equation
**Sawaal:** Un sabhi points P(x, y, z) ke set ki equation gyat karo jo points A(1, 2, 3) aur B(3, 2, -1) se hamesha barabar doori par rehte hain.

**Solution:**
Given PA = PB => PA² = PB²:
(x - 1)² + (y - 2)² + (z - 3)² = (x - 3)² + (y - 2)² + (z + 1)²

(y - 2)² dono taraf se seedha cancel ho jata hai! Baaki ko expand karo:
(x² - 2x + 1) + (z² - 6z + 9) = (x² - 6x + 9) + (z² + 2z + 1)
-2x - 6z + 10 = -6x + 2z + 10
4x - 8z = 0
Divide by 4:
**x - 2z = 0**.

Jaanch:
- Jaanch: Midpoint of AB is M(2, 2, 1), which satisfies x - 2z = 2 - 2(1) = 0; origin (0, 0, 0) also satisfies 0 - 0 = 0 and OA² = 14 = OB² ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: 3D collinearity ke liye 2D slope laga dena
- **Galat soch:** "x aur y coordinates ka slope barabar hai, isliye 3D points collinear hain."
- **Sahi samajh:** 3D mein teesra coordinate z bhi hota hai! (0, 0, 0), (1, 1, 0), aur (2, 2, 10) ke x, y same line par hain, par z = 10 hone se woh collinear bilkul nahi hain! 3D mein hamesha **AB + BC = AC** ya **Section Formula** se check karo.

### Galti 2: Parallelogram ABCD mein AB aur CD ke midpoints barabar rakh dena
- **Galat soch:** "Parallelogram mein opposite sides AB aur CD ke midpoints same hote hain."
- **Sahi samajh:** Opposite sides nahi, **diagonals AC aur BD** ke midpoints same hote hain!

### Galti 3: y-axis par point ko (0, y, z) maan lena
- **Galat soch:** "y-axis par x = 0 hota hai, to point (0, y, z) hoga."
- **Sahi samajh:** (0, y, z) to poora **YZ-plane** hai! y-axis par x = 0 aur z = 0 **dono** zero hote hain: **(0, y, 0)**!

---

## Quick Recap

- **3D Collinearity:** AB + BC = AC (ya section ratio teeno coordinates ke liye same k de!).
- **Parallelogram ABCD:** Midpoint of AC = Midpoint of BD => D = A + C - B (coordinate-wise).
- **Axis point:** x-axis (x, 0, 0), y-axis (0, y, 0), z-axis (0, 0, z).
- **Equidistant locus PA = PB:** Square terms cancel, leaving a linear equation (perpendicular bisector plane!).

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Show that the points P(-2, 3, 5), Q(1, 2, 3), and R(7, 0, -1) are collinear using the Section Formula.

**Solution:**
Assume Q divides PR in ratio k : 1:
- From x-coordinate: (7k - 2)/(k + 1) = 1 => 7k - 2 = k + 1 => 6k = 3 => **k = 1/2**.
- Check y-coordinate with k = 1/2: (0(1/2) + 3)/(3/2) = 3 / (3/2) = **2** (matches Q's y = 2!).
- Check z-coordinate with k = 1/2: (-1(1/2) + 5)/(3/2) = (9/2) / (3/2) = **3** (matches Q's z = 3!).

Since the same ratio k = 1/2 satisfies all three coordinates, P, Q, R are collinear.

Jaanch:
- Jaanch: 1 : 2 internal division of P and R gives Q(1, 2, 3) ✅

---

### Question 2
Verify that the points (0, 7, 10), (-1, 6, 6), and (-4, 9, 6) are the vertices of a right-angled triangle.

**Solution:**
Let A(0, 7, 10), B(-1, 6, 6), C(-4, 9, 6):
- AB² = (-1)² + (-1)² + (-4)² = 1 + 1 + 16 = 18
- BC² = (-3)² + 3² + 0² = 9 + 9 + 0 = 18
- AC² = (-4)² + 2² + (-4)² = 16 + 4 + 16 = 36

Since AB² + BC² = 18 + 18 = 36 = AC², ∠B = 90°, so △ABC is a right-angled (and isosceles) triangle.

Jaanch:
- Jaanch: 18 + 18 = 36 ✅

---

### Question 3
Verify that the points (-1, 2, 1), (1, -2, 5), (4, -7, 8), and (2, -3, 4) are the vertices of a parallelogram.

**Solution:**
Let A(-1, 2, 1), B(1, -2, 5), C(4, -7, 8), D(2, -3, 4).
Check midpoints of diagonals AC and BD:
- Midpoint of AC = ((-1 + 4)/2, (2 - 7)/2, (1 + 8)/2) = **(3/2, -5/2, 9/2)**
- Midpoint of BD = ((1 + 2)/2, (-2 - 3)/2, (5 + 4)/2) = **(3/2, -5/2, 9/2)**

Since the diagonals bisect each other (and AB = √(4 + 16 + 16) = 6, BC = √(9 + 25 + 9) = √43, not collinear), ABCD is a parallelogram!

Jaanch:
- Jaanch: AB² = CD² = 36 aur BC² = AD² = 43 ✅

---

### Question 4
Find the coordinates of a point on the x-axis which is equidistant from the points A(1, 2, 3) and B(3, 2, -1).

**Solution:**
Point on x-axis is P(x, 0, 0). Set PA² = PB²:
(x - 1)² + (0 - 2)² + (0 - 3)² = (x - 3)² + (0 - 2)² + (0 + 1)²
x² - 2x + 1 + 4 + 9 = x² - 6x + 9 + 4 + 1
-2x + 14 = -6x + 14
4x = 0 => x = 0.
Point is **(0, 0, 0)** (the origin!).

Jaanch:
- Jaanch: OA² = 1 + 4 + 9 = 14 aur OB² = 9 + 4 + 1 = 14 ✅

---

### Question 5
Find the equation of the set of points P(x, y, z) such that the sum of its distances from A(4, 0, 0) and B(-4, 0, 0) is equal to 10.

**Solution:**
PA + PB = 10 => √[(x - 4)² + y² + z²] + √[(x + 4)² + y² + z²] = 10.
Move second radical to RHS and square:
(x - 4)² + y² + z² = 100 - 20√[(x + 4)² + y² + z²] + (x + 4)² + y² + z²
-8x = 100 - 20√[(x + 4)² + y² + z²] + 8x
20√[(x + 4)² + y² + z²] = 100 + 16x
Divide by 4: 5√[(x + 4)² + y² + z²] = 25 + 4x
Square again:
25(x² + 8x + 16 + y² + z²) = 625 + 200x + 16x²
9x² + 25y² + 25z² = 225.

Jaanch:
- Jaanch: Point (5, 0, 0) par PA + PB = 1 + 9 = 10, aur 9(25) = 225 ✅

---

### Question 6
Find the equation of the set of points P(x, y, z) such that PA² + PB² = 2k², where A is (3, 4, 5) and B is (-1, 3, -7).

**Solution:**
PA² + PB² = 2k²:
[(x - 3)² + (y - 4)² + (z - 5)²] + [(x + 1)² + (y - 3)² + (z + 7)²] = 2k²
(x² - 6x + 9 + y² - 8y + 16 + z² - 10z + 25) + (x² + 2x + 1 + y² - 6y + 9 + z² + 14z + 49) = 2k²
2x² + 2y² + 2z² - 4x - 14y + 4z + 109 = 2k²
2x² + 2y² + 2z² - 4x - 14y + 4z + 109 - 2k² = 0.

Jaanch:
- Jaanch: Constant sum check: 9 + 16 + 25 + 1 + 9 + 49 = 50 + 59 = 109 ✅

---

### Question 7
If the origin (0, 0, 0) is the centroid of triangle PQR with vertices P(2a, 2, 6), Q(-4, 3b, -10), and R(8, 14, 2c), find the values of a, b, and c.

**Solution:**
Centroid = (0, 0, 0):
- (2a - 4 + 8)/3 = 0 => 2a + 4 = 0 => **a = -2**
- (2 + 3b + 14)/3 = 0 => 3b + 16 = 0 => **b = -16/3**
- (6 - 10 + 2c)/3 = 0 => 2c - 4 = 0 => **c = 2**.

Jaanch:
- Jaanch: Sum of x = -4 - 4 + 8 = 0, sum of y = 2 - 16 + 14 = 0, sum of z = 6 - 10 + 4 = 0 ✅

---

### Question 8
Find the coordinates of a point on the y-axis which is at a distance of 5√2 from the point P(3, -2, 5).

**Solution:**
Let point be Q(0, y, 0). Given PQ² = (5√2)² = 50:
(0 - 3)² + (y - (-2))² + (0 - 5)² = 50
9 + (y + 2)² + 25 = 50
(y + 2)² = 16
y + 2 = ±4 => y = 2 or y = -6.
Points are **(0, 2, 0)** and **(0, -6, 0)**.

Jaanch:
- Jaanch: For (0, 2, 0), 9 + 16 + 25 = 50; for (0, -6, 0), 9 + 16 + 25 = 50 ✅

---

### Question 9
A point R with x-coordinate 4 lies on the line segment joining P(2, -3, 4) and Q(8, 0, 10). Find the coordinates of R.

**Solution:**
Let R divide PQ in ratio k : 1:
x-coordinate: (8k + 2)/(k + 1) = 4 => 8k + 2 = 4k + 4 => 4k = 2 => k = 1/2 (ratio 1 : 2 internally).
- y = (0(1) + (-3)(2))/3 = -6/3 = **-2**
- z = (10(1) + 4(2))/3 = 18/3 = **6**
Point **R = (4, -2, 6)**.

Jaanch:
- Jaanch: 1 : 2 internal division of (2, -3, 4) and (8, 0, 10) gives ((8 + 4)/3, (0 - 6)/3, (10 + 8)/3) = (4, -2, 6) ✅

---

### Question 10
If A and B are the points (3, 4, 5) and (-1, 3, -7) respectively, find the coordinates of the midpoint M of AB and verify that AM = MB.

**Solution:**
M = ((3 - 1)/2, (4 + 3)/2, (5 - 7)/2) = **(1, 7/2, -1)**.
AM² = (1 - 3)² + (7/2 - 4)² + (-1 - 5)² = 4 + 1/4 + 36 = 161/4.
MB² = (-1 - 1)² + (3 - 7/2)² + (-7 - (-1))² = 4 + 1/4 + 36 = 161/4.
Thus AM = MB = √161 / 2.

Jaanch:
- Jaanch: AM² = MB² = 161/4 ✅

---

### Question 11
Find the lengths of the medians of the triangle with vertices A(0, 0, 6), B(0, 4, 0), and C(6, 0, 0) from vertices B and C (median from A was found in Topic 3).

**Solution:**
- Midpoint E of AC = (3, 0, 3) => Median BE = √[(3 - 0)² + (0 - 4)² + (3 - 0)²] = √(9 + 16 + 9) = **√34 units**.
- Midpoint F of AB = (0, 2, 3) => Median CF = √[(0 - 6)² + (2 - 0)² + (3 - 0)²] = √(36 + 4 + 9) = √49 = **7 units**.

Jaanch:
- Jaanch: Symmetry check: A(0, 0, 6) and C(6, 0, 0) are symmetric in x and z, so median CF = median AD = 7 ✅

---

### Question 12
Find the ratio in which the line segment joining A(4, 8, 10) and B(6, 10, -8) is divided by the YZ-plane, and state whether the division is internal or external.

**Solution:**
Let ratio be k : 1. On YZ-plane, x = 0:
(6k + 4)/(k + 1) = 0 => 6k = -4 => k = -2/3.
Since k < 0, the YZ-plane divides AB in the ratio **2 : 3 externally**.

Jaanch:
- Jaanch: Both x-coordinates (4 and 6) are positive, so segment does not cross x = 0 => division is external in ratio 4 : 6 = 2 : 3 ✅

---

## Chapter Wrap-up Table

| Concept | Key Formula / Rule | Quick Pehchan |
|---|---|---|
| **Coordinate Planes** | XY: z = 0, YZ: x = 0, ZX: y = 0 | Missing letter = 0 |
| **Coordinate Axes** | x-axis (x, 0, 0), y-axis (0, y, 0), z-axis (0, 0, z) | Baaki do coordinates = 0 |
| **8 Octants** | I–IV: Q1–Q4 with +z<br>V–VIII: Q1–Q4 with -z | Octants V–VIII sit directly below I–IV |
| **Distances of P(x, y, z)** | Planes: abs(z), abs(x), abs(y)<br>Axes: √(y²+z²), √(z²+x²), √(x²+y²) | Plane = 1 coordinate; Axis = Pythagoras of other 2 |
| **Feet of Perpendiculars** | Planes: (x, y, 0), (0, y, z), (x, 0, z)<br>Axes: (x, 0, 0), (0, y, 0), (0, 0, z) | Plane -> 1 zero; Axis -> 2 zeros |
| **3D Distance Formula** | PQ = √[(x₂ - x₁)² + (y₂ - y₁)² + (z₂ - z₁)²] | Pythagoras applied twice in a 3D box; OP = √(x² + y² + z²) |
| **3D Section Formula** | Internal: ((mx₂ + nx₁)/(m + n), ...)<br>External: ((mx₂ - nx₁)/(m - n), ...) | Cross-multiply m with 2nd point, n with 1st point |
| **Midpoint & Centroid** | M = ((x₁ + x₂)/2, ...)<br>G = ((x₁ + x₂ + x₃)/3, ...) | Exact average of 2 or 3 vertices |
| **Plane Division (k : 1)** | Set x = 0 (YZ), y = 0 (ZX), ya z = 0 (XY) | k > 0 => internal; k < 0 => external |
| **3D Collinearity & Parallelogram** | Collinear: AB + BC = AC<br>Parallelogram: Midpoint(AC) = Midpoint(BD) | No 2D slope in 3D! |

---

Ab tumne 3D coordinate space ke axes, octants, projections, distance formula, aur section formula ko poori tarah master kar liya hai!

Agle chapter **Limits and Derivatives** mein hum static geometry se nikal kar badlaav (change) aur gati (motion) ke ganit — **Calculus** — ki duniya mein pehla kadam rakhenge!
