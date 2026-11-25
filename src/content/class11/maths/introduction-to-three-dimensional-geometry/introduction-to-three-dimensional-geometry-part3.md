# Chapter: Introduction to Three Dimensional Geometry (Part 3)

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla topic [introduction-to-three-dimensional-geometry-part2.md](introduction-to-three-dimensional-geometry-part2.md) tha** (Topic 2: Coordinates of a Point in Space, Feet of Perpendiculars, aur 8 Vertices of a Cuboid). 2D Distance Formula Class 9 ke [distance-formula.md](../../../class9/maths/distance-formula/distance-formula.md) mein aur 2D Section Formula Class 10 ke [section-formula-and-reflection.md](../../../class10/maths/section-formula-and-reflection/section-formula-and-reflection.md) mein padha tha.
> **Topics covered in this file:**
> 1. Distance Between Two Points in 3D, 3D Section Formula (Internal, External, Midpoint), Aur Centroid of a 3D Triangle

---

# Topic 3: Distance Between Two Points Aur Section Formula in 3D

Class 9 mein tumne 2D Distance Formula √[(x₂ - x₁)² + (y₂ - y₁)²] aur Class 10 mein 2D Section Formula seekha tha.

Ab jab hum 3D space (x, y, z) mein aa gaye hain, to kya hume bilkul naye aur mushkil formulas yaad karne padenge? Bilkul nahi! 3D mein bas teesra coordinate **z** bilkul same pattern mein jud jata hai! Chalo pehle **3D Distance Formula** ko Topic 2 ke cuboid box par Pythagoras do baar lagakar derive karte hain, aur phir **3D Section Formula** aur **Centroid** ko master karte hain!

---

## Farhan ka mountain zip-line cable plan

Farhan ek mountain adventure park mein zip-line engineer hai. Do pahadiyon par launch tower P(2, -3, 1) aur landing tower Q(-1, 1, 13) bane hain (coordinates meters mein). Farhan ko do exact numbers chahiye the:
1. Dono towers ke beech seedhi steel cable kitni lambi lagegi?
   Usne 3D Distance Formula lagaya:
   PQ = √[(-1 - 2)² + (1 - (-3))² + (13 - 1)²] = √[9 + 16 + 144] = √169 = **13 meter**!
2. Cable ko 2 : 3 ratio mein baantne wale point par ek intermediate pulley lagani thi — usne 3D Section Formula lagakar pulley ke exact (x, y, z) coordinates 10 second mein nikaal liye!

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **3D Distance Formula** | Do 3D points P(x₁, y₁, z₁) aur Q(x₂, y₂, z₂) ke beech ki seedhi doori | √[(x₂ - x₁)² + (y₂ - y₁)² + (z₂ - z₁)²] |
| **Internal Division (m : n)** | Segment PQ ke andar sthit point R jo PR : RQ = m : n mein baante | (mx₂ + nx₁)/(m + n), ... |
| **External Division (m : n)** | Line PQ par segment ke bahar sthit point R jo PR : RQ = m : n mein baante | (mx₂ - nx₁)/(m - n), ... |
| **Centroid (G)** | 3D triangle ke teeno medians ka milan point (vertices ka average) | ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3, (z₁+z₂+z₃)/3) |

---

## Part A: 3D Distance Formula — Full Derivation ("Kyun"!)

Maan lo do points **P(x₁, y₁, z₁)** aur **Q(x₂, y₂, z₂)** ek coordinate-aligned cuboid ke do opposite corners hain (Topic 2 se!):
- Cuboid ki x-edge = |x₂ - x₁|
- Cuboid ki y-edge = |y₂ - y₁|
- Cuboid ki z-edge (height) = |z₂ - z₁|

Bottom face par P(x₁, y₁, z₁) ke theek diagonally opposite corner ko **A(x₂, y₂, z₁)** maano (jo Q ke theek neeche hai!):

1. **Pehla Pythagoras (Bottom face right triangle mein):**
   PA² = (x₂ - x₁)² + (y₂ - y₁)²
2. **Doosra Pythagoras (Vertical right triangle △PAQ mein, jahan ∠PAQ = 90° aur AQ = |z₂ - z₁|):**
   PQ² = PA² + AQ²
   PQ² = (x₂ - x₁)² + (y₂ - y₁)² + (z₂ - z₁)²

Dono taraf positive square root lene par:
**PQ = √[(x₂ - x₁)² + (y₂ - y₁)² + (z₂ - z₁)²]**

### Special Case — Origin O(0, 0, 0) Se Doori:
**OP = √(x² + y² + z²)**

---

## Part B: 3D Section Formula Aur Centroid

Class 10 ke [section-formula-and-reflection.md](../../../class10/maths/section-formula-and-reflection/section-formula-and-reflection.md) ka similar-triangles proof 3D mein z-coordinate par bhi bilkul usi tarah laagu hota hai! Do points A(x₁, y₁, z₁) aur B(x₂, y₂, z₂) ko jodne wale segment AB ko ratio **m : n** mein divide karne wale point R ke coordinates:

1. **Internal Division (m : n):**
   **R = ( (mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n), (mz₂ + nz₁)/(m + n) )**

2. **External Division (m : n, jahan m ≠ n):**
   **R = ( (mx₂ - nx₁)/(m - n), (my₂ - ny₁)/(m - n), (mz₂ - nz₁)/(m - n) )**

3. **Midpoint (m = n = 1):**
   **M = ( (x₁ + x₂)/2, (y₁ + y₂)/2, (z₁ + z₂)/2 )**

4. **Centroid of △ABC:**
   Median AD ko centroid G 2 : 1 ratio mein internally divide karta hai (jahan D, BC ka midpoint hai) =>
   **G = ( (x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3, (z₁ + z₂ + z₃)/3 )**

---

## Part C: Ratio k : 1 Trick (Coordinate Plane Se Division)

Jab sawaal poochhe: "YZ-plane (ya XY-plane, ya ZX-plane) segment AB ko kis ratio mein kaatta hai?"
- Maan lo ratio **k : 1** hai!
- Section formula se division point likho:
  ( (kx₂ + x₁)/(k + 1), (ky₂ + y₁)/(k + 1), (kz₂ + z₁)/(k + 1) )
- Jo coordinate plane diya hai, uska missing coordinate **zero** rakho:
  - YZ-plane => x = 0 => kx₂ + x₁ = 0 => **k = -x₁ / x₂**
  - ZX-plane => y = 0 => ky₂ + y₁ = 0 => **k = -y₁ / y₂**
  - XY-plane => z = 0 => kz₂ + z₁ = 0 => **k = -z₁ / z₂**
- Agar **k > 0** aaye => **Internal division**; agar **k < 0** aaye => **External division**!

---

## Solved Examples (Step-by-Step With Jaanch)

### Example 3.1: Distance Between Two 3D Points
**Sawaal:** Points P(2, -3, 1) aur Q(-1, 1, 13) ke beech ki doori gyat karo.

**Solution:**
PQ = √[(-1 - 2)² + (1 - (-3))² + (13 - 1)²]
= √[(-3)² + (4)² + (12)²]
= √[9 + 16 + 144]
= √169 = **13 units**.

Jaanch:
- Jaanch: 3² + 4² = 5², aur 5² + 12² = 13² (double Pythagorean triplet!) ✅

---

### Example 3.2: Internal And External Division In 3D
**Sawaal:** Points A(-2, 3, 5) aur B(1, -4, 6) ko jodne wale segment ko ratio 2 : 3 mein (a) internally aur (b) externally divide karne wale points gyat karo.

**Solution:**
Yahan (x₁, y₁, z₁) = (-2, 3, 5), (x₂, y₂, z₂) = (1, -4, 6), m = 2, n = 3.

**(a) Internal Division (m + n = 5):**
- x = (2(1) + 3(-2)) / 5 = (2 - 6) / 5 = **-4/5**
- y = (2(-4) + 3(3)) / 5 = (-8 + 9) / 5 = **1/5**
- z = (2(6) + 3(5)) / 5 = (12 + 15) / 5 = **27/5**
Point = **(-4/5, 1/5, 27/5)**.

**(b) External Division (m - n = -1):**
- x = (2(1) - 3(-2)) / (-1) = (2 + 6) / (-1) = **-8**
- y = (2(-4) - 3(3)) / (-1) = (-8 - 9) / (-1) = **17**
- z = (2(6) - 3(5)) / (-1) = (12 - 15) / (-1) = **3**
Point = **(-8, 17, 3)**.

Jaanch:
- Jaanch (a): x-coordinate -4/5 lies strictly between -2 and 1 ✅
- Jaanch (b): Check A(-2, 3, 5) divides R(-8, 17, 3) and B(1, -4, 6) in ratio 2 : 1 internally: (2(1) + 1(-8))/3 = -6/3 = -2 ✅

---

### Example 3.3: Ratio In Which YZ-Plane Divides A Segment
**Sawaal:** Points A(-2, 4, 7) aur B(3, -5, 8) ko jodne wale segment ko YZ-plane kis ratio mein kaatta hai? Intersection point bhi gyat karo.

**Solution:**
Maan lo YZ-plane segment AB ko ratio k : 1 mein divide karta hai.
Division point R = ( (3k - 2)/(k + 1), (-5k + 4)/(k + 1), (8k + 7)/(k + 1) ).

Kyunki R YZ-plane par hai, uska **x-coordinate = 0**:
(3k - 2) / (k + 1) = 0
3k - 2 = 0 => **k = 2/3** (> 0 => **2 : 3 internally**!).

Ab k = 2/3 rakhkar y aur z nikaalo:
- y = (-5(2/3) + 4) / (2/3 + 1) = (2/3) / (5/3) = **2/5**
- z = (8(2/3) + 7) / (5/3) = (37/3) / (5/3) = **37/5**

Intersection point = **(0, 2/5, 37/5)**.

Jaanch:
- Jaanch: Direct 2 : 3 internal formula: x = (2(3) + 3(-2))/5 = 0, y = (-10 + 12)/5 = 2/5, z = (16 + 21)/5 = 37/5 ✅

---

### Example 3.4: Centroid Of A 3D Triangle
**Sawaal:** Vertices A(2, -1, 4), B(5, 3, -2), aur C(-1, 4, 7) wale triangle ka centroid gyat karo.

**Solution:**
G = ( (2 + 5 - 1)/3, (-1 + 3 + 4)/3, (4 - 2 + 7)/3 )
= ( 6/3, 6/3, 9/3 )
= **(2, 2, 3)**.

Jaanch:
- Jaanch: Sum of x = 6 (6/3 = 2), sum of y = 6 (6/3 = 2), sum of z = 9 (9/3 = 3) ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Section formula mein m aur n ko galat points se multiply kar dena
- **Galat soch:** "A se B ko m : n mein divide karna hai, to (mx₁ + nx₂)/(m + n)."
- **Sahi samajh:** Hamesha **cross-multiply** hota hai! Pehla ratio m **doosre point (x₂)** se aur doosra ratio n **pehle point (x₁)** se multiply hota hai: **(mx₂ + nx₁)/(m + n)**!

### Galti 2: Negative difference ka square karte waqt minus bhool jaana
- **Galat soch:** "(-1 - 2)² = (-1)² - 2² ya (1 - 2)² = 1."
- **Sahi samajh:** Pehle bracket ke andar poora difference nikaalo: -1 - 2 = -3, aur phir square karo: (-3)² = **9**!

### Galti 3: Negative k aane par "no division" bol dena
- **Galat soch:** "Ratio k : 1 solve kiya to k = -2/3 aaya — ratio negative nahi ho sakta, so plane doesn't cut the line."
- **Sahi samajh:** Negative k ka seedha matlab hota hai **External Division** (yaani plane line segment ke andar nahi, balki usko aage badhaane par bahar 2 : 3 ratio mein kaatta hai)!

---

## Quick Recap

- **3D Distance Formula:** PQ = √[(x₂ - x₁)² + (y₂ - y₁)² + (z₂ - z₁)²]; from origin OP = √(x² + y² + z²).
- **Internal Division (m : n):** ((mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n), (mz₂ + nz₁)/(m + n)).
- **External Division (m : n):** ((mx₂ - nx₁)/(m - n), (my₂ - ny₁)/(m - n), (mz₂ - nz₁)/(m - n)).
- **Midpoint:** ((x₁ + x₂)/2, (y₁ + y₂)/2, (z₁ + z₂)/2).
- **Centroid:** ((x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3, (z₁ + z₂ + z₃)/3).
- **Plane division:** Assume k : 1; k > 0 is internal, k < 0 is external.

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Find the distance between the points (2, 3, 5) and (4, 3, 1).

**Solution:**
d = √[(4 - 2)² + (3 - 3)² + (1 - 5)²] = √[4 + 0 + 16] = √20 = **2√5 units**.

Jaanch:
- Jaanch: 2² + 0² + (-4)² = 4 + 16 = 20 => 2√5 ✅

---

### Question 2
Find the distance between the points (-3, 7, 2) and (2, 4, -1).

**Solution:**
d = √[(2 - (-3))² + (4 - 7)² + (-1 - 2)²]
= √[5² + (-3)² + (-3)²] = √[25 + 9 + 9] = **√43 units**.

Jaanch:
- Jaanch: 25 + 9 + 9 = 43 ✅

---

### Question 3
Find the distance between the points (-1, 3, -4) and (1, -3, 4).

**Solution:**
d = √[(1 - (-1))² + (-3 - 3)² + (4 - (-4))²]
= √[2² + (-6)² + 8²] = √[4 + 36 + 64] = √104 = **2√26 units**.

Jaanch:
- Jaanch: Points origin ke symmetric opposite hain, so d = 2 × √(1 + 9 + 16) = 2√26 ✅

---

### Question 4
Find the distance of the point (3, -6, 2) from the origin.

**Solution:**
OP = √(3² + (-6)² + 2²) = √(9 + 36 + 4) = √49 = **7 units**.

Jaanch:
- Jaanch: 9 + 36 + 4 = 49 = 7² ✅

---

### Question 5
Find the midpoint of the line segment joining (3, -2, 7) and (-5, 6, -1).

**Solution:**
M = ( (3 - 5)/2, (-2 + 6)/2, (7 - 1)/2 ) = (-2/2, 4/2, 6/2) = **(-1, 2, 3)**.

Jaanch:
- Jaanch: Distances from (-1, 2, 3) to both endpoints are √(16 + 16 + 16) = 4√3 ✅

---

### Question 6
Find the coordinates of the point which divides the line segment joining (1, -2, 3) and (3, 4, -5) in the ratio 2 : 3 internally.

**Solution:**
m = 2, n = 3, m + n = 5:
- x = (2(3) + 3(1))/5 = 9/5
- y = (2(4) + 3(-2))/5 = 2/5
- z = (2(-5) + 3(3))/5 = -1/5
Point = **(9/5, 2/5, -1/5)**.

Jaanch:
- Jaanch: Every coordinate lies between the corresponding endpoint coordinates ✅

---

### Question 7
Find the coordinates of the point which divides the line segment joining (1, -2, 3) and (3, 4, -5) in the ratio 2 : 3 externally.

**Solution:**
m = 2, n = 3, m - n = -1:
- x = (2(3) - 3(1))/(-1) = -3
- y = (2(4) - 3(-2))/(-1) = -14
- z = (2(-5) - 3(3))/(-1) = 19
Point = **(-3, -14, 19)**.

Jaanch:
- Jaanch: (1, -2, 3) divides (-3, -14, 19) and (3, 4, -5) in ratio 2 : 1 internally: (2(3) + 1(-3))/3 = 1 ✅

---

### Question 8
Find the ratio in which the XY-plane divides the line segment joining (-1, 3, 4) and (2, -5, -6).

**Solution:**
Let ratio be k : 1. On XY-plane, z = 0:
(-6k + 4) / (k + 1) = 0 => 6k = 4 => k = 2/3.
Ratio = **2 : 3 internally**.

Jaanch:
- Jaanch: z-coordinates have opposite signs (+4 and -6), so division must be internal: |4| : |-6| = 2 : 3 ✅

---

### Question 9
Find the ratio in which the ZX-plane divides the line segment joining (2, 4, 1) and (-3, 6, 5).

**Solution:**
Let ratio be k : 1. On ZX-plane, y = 0:
(6k + 4) / (k + 1) = 0 => 6k = -4 => k = -2/3.
Since k < 0, the ZX-plane divides the segment in the ratio **2 : 3 externally**.

Jaanch:
- Jaanch: Both y-coordinates are positive (4 and 6), so segment stays on one side of ZX-plane => division must be external ✅

---

### Question 10
Find the coordinates of the points which trisect the line segment joining P(4, 2, -6) and Q(10, -16, 6).

**Solution:**
Trisection means two points A (ratio 1 : 2) and B (ratio 2 : 1):
- **A (1 : 2):** ((1·10 + 2·4)/3, (1·(-16) + 2·2)/3, (1·6 + 2·(-6))/3) = (18/3, -12/3, -6/3) = **(6, -4, -2)**.
- **B (2 : 1):** ((2·10 + 1·4)/3, (2·(-16) + 1·2)/3, (2·6 + 1·(-6))/3) = (24/3, -30/3, 6/3) = **(8, -10, 2)**.

Jaanch:
- Jaanch: Steps from P -> A -> B -> Q are uniform (+2, -6, +4) each time ✅

---

### Question 11
Find the centroid of the triangle whose vertices are (1, 1, 1), (-2, 4, 1), and (-1, 5, 5).

**Solution:**
G = ( (1 - 2 - 1)/3, (1 + 4 + 5)/3, (1 + 1 + 5)/3 ) = **(-2/3, 10/3, 7/3)**.

Jaanch:
- Jaanch: Sums are -2, 10, 7 divided by 3 ✅

---

### Question 12
Find the length of the median through vertex A of triangle ABC with vertices A(0, 0, 6), B(0, 4, 0), and C(6, 0, 0).

**Solution:**
Midpoint D of BC = ((0 + 6)/2, (4 + 0)/2, (0 + 0)/2) = (3, 2, 0).
Length of median AD = √[(3 - 0)² + (2 - 0)² + (0 - 6)²]
= √[9 + 4 + 36] = √49 = **7 units**.

Jaanch:
- Jaanch: 9 + 4 + 36 = 49 = 7² ✅

---

Ab tumne 3D Distance Formula aur 3D Section Formula ko poori tarah master kar liya hai! Agle aur aakhri topic [introduction-to-three-dimensional-geometry-part4.md](introduction-to-three-dimensional-geometry-part4.md) mein hum in sabhi 3D tools ko mila kar **3D Collinearity, Triangle & Parallelogram Proofs, Equidistant Loci**, aur poore chapter ka **Wrap-up Table** dekhenge!
