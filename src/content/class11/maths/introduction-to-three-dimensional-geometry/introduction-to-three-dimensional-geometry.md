# Chapter: Introduction to Three Dimensional Geometry

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla chapter [conic-sections-part5.md](../conic-sections/conic-sections-part5.md) tha** (Conic Sections ka aakhri topic, jiske teaser ne vaada kiya tha ki ab hum 2D flat sheet (x, y) se bahar nikal kar asli 3D space (x, y, z) mein kadam rakhenge!). 2D Cartesian plane ki buniyad Class 9 ke [coordinate-geometry.md](../../../class9/maths/coordinate-geometry/coordinate-geometry.md) mein padhi thi.
> **Topics covered in this file:**
> 1. Coordinate Axes Aur Coordinate Planes in Three Dimensions (8 Octants, Distances, Aur Reflections)

---

# Topic 1: Coordinate Axes Aur Coordinate Planes in Three Dimensions

Class 9 ke [coordinate-geometry.md](../../../class9/maths/coordinate-geometry/coordinate-geometry.md) mein tumne 2D plane mein kisi bhi point ka address do numbers **(x, y)** se bataya tha — left-right (x) aur aage-peechhe (y).

Lekin asli duniya flat kaagaz nahi hai! Agar kamre ke beech hawa mein ek ceiling fan ya udta hua drone latka hai, to sirf floor par (x, y) batana kaafi nahi — hume teesri disha **unchai (height z)** bhi batani padti hai! Is pehle topic mein hum 3D ke teeno axes, teeno coordinate planes, aur 8 octants ko poori tarah samjhenge!

---

## Devesh ka auditorium spotlight rig

Devesh ek school auditorium ka stage lighting technician hai. Use stage ke upar hawa mein ek heavy spotlight rig latkana tha. Usne stage ke front-left kone (corner) ko **Origin O(0, 0, 0)** maan liya:
- Stage ke aage wali kinari -> **x-axis**
- Stage ki baayi deewar ki kinari -> **y-axis**
- Kone se seedhi upar chhat ki taraf jaati pillar line -> **z-axis**!

Devesh ne apne helper ko samjhaya: "Dekho! Stage ka poora **floor** ek flat sheet hai jahan height hamesha zero hai (z = 0) — isko **XY-plane** kehte hain! Baayi deewar **YZ-plane (x = 0)** hai, aur peechhe wali deewar **ZX-plane (y = 0)** hai! Ab agar spotlight ko (3, 4, 5) par latkana hai, to bas 3 m x-axis par, 4 m y-axis par, aur 5 m seedha upar z-axis par jao!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Coordinate Axes** | Teen mutually perpendicular lines X'OX, Y'OY, Z'OZ jo origin O(0, 0, 0) par milti hain | x-axis, y-axis, z-axis |
| **Coordinate Planes** | Kisi bhi do axes se milkar banne wale teen flat planes (XY, YZ, ZX) | XY-plane: z = 0 |
| **Ordered Triplet (x, y, z)** | 3D space mein kisi point ka unique 3-number address | P(3, -4, 5) |
| **Octant** | Teeno coordinate planes dwara 3D space ko baante jaane wale 8 hisse (jaise 2D mein 4 quadrants) | Octant I: (+, +, +) |

---

## Part A: Coordinate Axes Aur Coordinate Planes

3D space mein teen mutually perpendicular lines ek common point **Origin O(0, 0, 0)** par milti hain:

```
                 z
                 ^
                 :   ZX-plane (y = 0)
                 :
       YZ-plane  :      /
        (x = 0)  :    /
                 O - - - - - - > y
                /
               /   XY-plane (z = 0)
              v
             x
```

### 1. Teeno Coordinate Planes Ki Equations:
| Coordinate Plane | Kaun sa coordinate hamesha 0? | Equation | General Point on Plane |
|---|---|---|---|
| **XY-plane** | z-coordinate | **z = 0** | (x, y, 0) |
| **YZ-plane** | x-coordinate | **x = 0** | (0, y, z) |
| **ZX-plane** | y-coordinate | **y = 0** | (x, 0, z) |

### 2. Teeno Coordinate Axes Par Points:
- **x-axis:** y = 0 aur z = 0 => General point **(x, 0, 0)**
- **y-axis:** x = 0 aur z = 0 => General point **(0, y, 0)**
- **z-axis:** x = 0 aur y = 0 => General point **(0, 0, z)**

---

## Part B: The 8 Octants (Yaad Rakhne Ka Sabse Aasaan Tareeka!)

2D mein do axes plane ko 4 quadrants mein baantte hain. 3D mein teen planes space ko **8 Octants (I se VIII)** mein baantte hain!

**Golden Memory Trick:**
- **Octants I, II, III, IV (Upstairs, z > 0):** Inke (x, y) signs bilkul wahi hain jo 2D Quadrants I, II, III, IV ke hote hain!
- **Octants V, VI, VII, VIII (Downstairs, z < 0):** Yeh theek Octants I, II, III, IV ke neeche hote hain — wahi exact (x, y) signs, bas **z negative (-)**!

| Octant | x-sign | y-sign | z-sign | 2D Quadrant + Floor |
|---|---|---|---|---|
| **I** | + | + | + | Q1, Upstairs (+z) |
| **II** | - | + | + | Q2, Upstairs (+z) |
| **III** | - | - | + | Q3, Upstairs (+z) |
| **IV** | + | - | + | Q4, Upstairs (+z) |
| **V** | + | + | - | Q1, Downstairs (-z) |
| **VI** | - | + | - | Q2, Downstairs (-z) |
| **VII** | - | - | - | Q3, Downstairs (-z) |
| **VIII** | + | - | - | Q4, Downstairs (-z) |

---

## Part C: Distances From Planes & Axes, Aur Reflections

Kisi bhi point **P(x, y, z)** ke liye:
1. **Coordinate Planes se perpendicular doori (Always positive!):**
   - XY-plane se doori = **|z|**
   - YZ-plane se doori = **|x|**
   - ZX-plane se doori = **|y|**

2. **Coordinate Axes se perpendicular doori (Pythagoras se!):**
   - x-axis se doori = **√(y² + z²)**
   - y-axis se doori = **√(z² + x²)**
   - z-axis se doori = **√(x² + y²)**

3. **Coordinate Planes mein Image (Reflection):**
   - XY-plane (z = 0) mein image: z ka sign palto => **(x, y, -z)**
   - YZ-plane (x = 0) mein image: x ka sign palto => **(-x, y, z)**
   - ZX-plane (y = 0) mein image: y ka sign palto => **(x, -y, z)**

---

## Solved Examples (Step-by-Step With Jaanch)

### Example 1.1: Identifying Octants From Coordinates
**Sawaal:** Neeche diye gaye points kis-kis octant mein sthit hain?
(a) (2, 4, 5)   (b) (-3, 1, 2)   (c) (-4, -2, -6)   (d) (3, -1, -2)

**Solution:**
- (a) Signs (+, +, +): Q1 upstairs => **Octant I**.
- (b) Signs (-, +, +): Q2 upstairs => **Octant II**.
- (c) Signs (-, -, -): Q3 downstairs => **Octant VII**.
- (d) Signs (+, -, -): Q4 downstairs => **Octant VIII**.

Jaanch:
- Jaanch: Octant VII = III + 4 (same x, y signs -, - with z < 0); Octant VIII = IV + 4 (same +, - with z < 0) ✅

---

### Example 1.2: Identifying Points On Planes And Axes
**Sawaal:** Batao yeh points kis coordinate plane ya kis coordinate axis par sthit hain:
(a) (0, 5, -3)   (b) (7, 0, 0)   (c) (-2, 0, 4)   (d) (0, 0, -9)

**Solution:**
- (a) (0, 5, -3): Sirf x = 0 hai => **YZ-plane**.
- (b) (7, 0, 0): y = 0 aur z = 0 dono zero hain => **x-axis**.
- (c) (-2, 0, 4): Sirf y = 0 hai => **ZX-plane**.
- (d) (0, 0, -9): x = 0 aur y = 0 dono zero hain => **z-axis**.

Jaanch:
- Jaanch: 1 zero coordinate -> Coordinate Plane; 2 zero coordinates -> Coordinate Axis ✅

---

### Example 1.3: Distances From Planes And Axes
**Sawaal:** Point P(3, -4, 5) ki teeno coordinate planes aur teeno coordinate axes se perpendicular dooriyan gyat karo.

**Solution:**
Yahan x = 3, y = -4, z = 5.
1. **Planes se doori:**
   - XY-plane se: |z| = |5| = **5 units**
   - YZ-plane se: |x| = |3| = **3 units**
   - ZX-plane se: |y| = |-4| = **4 units**
2. **Axes se doori:**
   - x-axis se: √(y² + z²) = √((-4)² + 5²) = √(16 + 25) = **√41 units**
   - y-axis se: √(z² + x²) = √(5² + 3²) = √(25 + 9) = **√34 units**
   - z-axis se: √(x² + y²) = √(3² + (-4)²) = √(9 + 16) = √25 = **5 units**.

Jaanch:
- Jaanch: Foot on z-axis is (0, 0, 5); distance from (3, -4, 5) to (0, 0, 5) is √(3² + (-4)² + 0) = 5 ✅

---

### Example 1.4: Reflections In Coordinate Planes
**Sawaal:** Point P(2, -3, 6) ki XY-plane, YZ-plane, aur ZX-plane mein images (reflections) likho.

**Solution:**
- XY-plane mein image (z sign palto): **(2, -3, -6)**
- YZ-plane mein image (x sign palto): **(-2, -3, 6)**
- ZX-plane mein image (y sign palto): **(2, 3, 6)**

Jaanch:
- Jaanch: P(2, -3, 6) aur (2, -3, -6) ka midpoint (2, -3, 0) hai jo XY-plane (z = 0) par hai ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: XY-plane se doori aur z-axis se doori ko ek hi samajh lena
- **Galat soch:** "Point (3, -4, 5) ki z-axis se doori 5 hai aur XY-plane se doori bhi 5 hai — dono hamesha barabar hote hain!"
- **Sahi samajh:** Yahan 3² + 4² = 5² bas ek ittefaq tha! General point (x, y, z) ke liye XY-plane se doori **|z|** hoti hai, jabki z-axis se doori **√(x² + y²)** hoti hai! Jaise (1, 2, 10) ke liye XY-plane se doori 10 hai, par z-axis se doori √(1 + 4) = √5 hai!

### Galti 2: Octants V–VIII ka order ulta kar dena
- **Galat soch:** "(-, -, -) Octant VIII hai."
- **Sahi samajh:** Nahi! (-, -) 2D mein Quadrant III hai, isliye (-, -, -) downstairs **Octant VII** (3 + 4 = 7) hai! Octant VIII (+, -, -) hota hai!

### Galti 3: XY-plane ki equation x = 0, y = 0 likh dena
- **Galat soch:** "XY-plane mein x aur y dono zero hote hain."
- **Sahi samajh:** Bilkul ulta! XY-plane par x aur y kuch bhi ho sakte hain, sirf **z = 0** hota hai! (x = 0, y = 0 to z-axis ki equation hai!)

---

## Quick Recap

- **Coordinate Planes:** XY (z = 0), YZ (x = 0), ZX (y = 0).
- **Coordinate Axes:** x-axis (x, 0, 0), y-axis (0, y, 0), z-axis (0, 0, z).
- **8 Octants:** I–IV have z > 0 (Q1–Q4); V–VIII have z < 0 (Q1–Q4 below them).
- **Distance from planes:** |z| (XY), |x| (YZ), |y| (ZX).
- **Distance from axes:** √(y² + z²) (x-axis), √(z² + x²) (y-axis), √(x² + y²) (z-axis).

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Name the octants in which the following points lie: (1, 2, 3), (4, -2, 3), (4, -2, -5), (-4, 2, -5).

**Solution:**
- (1, 2, 3) -> (+, +, +) -> **Octant I**
- (4, -2, 3) -> (+, -, +) -> **Octant IV**
- (4, -2, -5) -> (+, -, -) -> **Octant VIII**
- (-4, 2, -5) -> (-, +, -) -> **Octant VI**

Jaanch:
- Jaanch: Octant IV (+, -, +) ke neeche Octant VIII (+, -, -), aur II (-, +, +) ke neeche VI (-, +, -) ✅

---

### Question 2
Name the octants in which the points (-3, -1, 6), (2, -4, -7), (-5, 3, 1), and (-2, -5, -8) lie.

**Solution:**
- (-3, -1, 6) -> (-, -, +) -> **Octant III**
- (2, -4, -7) -> (+, -, -) -> **Octant VIII**
- (-5, 3, 1) -> (-, +, +) -> **Octant II**
- (-2, -5, -8) -> (-, -, -) -> **Octant VII**

Jaanch:
- Jaanch: (-, -, +) is Q3 upstairs = III, (-, -, -) is Q3 downstairs = VII ✅

---

### Question 3
A point is on the x-axis. What are its y-coordinate and z-coordinate?

**Solution:**
x-axis par sthit har point ka y-coordinate **0** aur z-coordinate **0** hota hai. Point ka roop (x, 0, 0) hota hai.

Jaanch:
- Jaanch: x-axis XY-plane (z = 0) aur ZX-plane (y = 0) ka intersection hai ✅

---

### Question 4
A point is in the ZX-plane. What can you say about its y-coordinate?

**Solution:**
ZX-plane ki equation y = 0 hoti hai, isliye is plane mein sthit har point ka **y-coordinate hamesha 0** hota hai.

Jaanch:
- Jaanch: General point on ZX-plane is (x, 0, z) ✅

---

### Question 5
Find the perpendicular distance of the point P(6, -8, 15) from the XY-plane, YZ-plane, and ZX-plane.

**Solution:**
- Distance from XY-plane = |z| = |15| = **15 units**
- Distance from YZ-plane = |x| = |6| = **6 units**
- Distance from ZX-plane = |y| = |-8| = **8 units**.

Jaanch:
- Jaanch: All distances are strictly positive (15, 6, 8) ✅

---

### Question 6
Find the perpendicular distance of the point P(6, -8, 15) from the x-axis, y-axis, and z-axis.

**Solution:**
- Distance from x-axis = √(y² + z²) = √((-8)² + 15²) = √(64 + 225) = √289 = **17 units**
- Distance from y-axis = √(z² + x²) = √(15² + 6²) = √(225 + 36) = **√261 = 3√29 units**
- Distance from z-axis = √(x² + y²) = √(6² + (-8)²) = √(36 + 64) = √100 = **10 units**.

Jaanch:
- Jaanch: 8² + 15² = 17² aur 6² + 8² = 10² (both exact Pythagorean triplets!) ✅

---

### Question 7
Find the image of the point (-2, 3, 5) in the: (a) XY-plane (b) YZ-plane (c) ZX-plane.

**Solution:**
- (a) XY-plane (flip z): **(-2, 3, -5)**
- (b) YZ-plane (flip x): **(2, 3, 5)**
- (c) ZX-plane (flip y): **(-2, -3, 5)**

Jaanch:
- Jaanch: Midpoints with (-2, 3, 5) are (-2, 3, 0), (0, 3, 5), and (-2, 0, 5), lying on XY, YZ, ZX planes respectively ✅

---

### Question 8
What is the equation of the plane parallel to the XY-plane at a distance of 4 units below it?

**Solution:**
XY-plane z = 0 hai. Isse 4 units neeche (negative z-direction mein) har point ka z-coordinate -4 hoga.
Equation: **z = -4**.

Jaanch:
- Jaanch: z = -4 par har point ki XY-plane (z = 0) se doori |-4| = 4 units hai ✅

---

### Question 9
Which coordinate plane(s) does the point (0, 0, 7) lie on? Which axis does it lie on?

**Solution:**
Yahan x = 0 (isliye **YZ-plane** par hai) aur y = 0 (isliye **ZX-plane** par bhi hai).
In dono planes ka intersection **z-axis** hai, isliye (0, 0, 7) **z-axis** par sthit hai.

Jaanch:
- Jaanch: x = 0 and y = 0 simultaneously define the z-axis ✅

---

### Question 10
A point P lies in Octant V. What are the signs of its x, y, and z coordinates?

**Solution:**
Octant V directly Octant I (+, +, +) ke neeche hota hai, isliye:
x > 0 (**+**), y > 0 (**+**), aur z < 0 (**-**).

Jaanch:
- Jaanch: Octant V = (+, +, -) ✅

---

### Question 11
If a point P(x, y, z) lies in Octant III, in which octant does its image in the XY-plane lie?

**Solution:**
Octant III mein signs (-, -, +) hote hain.
XY-plane mein image lene par z ka sign palat jata hai: (-, -, -).
(-, -, -) **Octant VII** hai!

Jaanch:
- Jaanch: Octant III ke theek neeche Octant VII hota hai ✅

---

### Question 12
Find the distance between the point P(3, 4, 5) and its image Q in the XY-plane.

**Solution:**
Image of P(3, 4, 5) in XY-plane is Q(3, 4, -5).
Since x and y coordinates are identical, distance PQ = |5 - (-5)| = **10 units** (which is 2 × |z|!).

Jaanch:
- Jaanch: Distance from P to XY-plane is 5, so distance from P to its mirror image Q is 2 × 5 = 10 units ✅

---

Ab tum 3D space ke axes, planes, aur 8 octants mein aasani se navigate kar sakte ho! Agle topic [introduction-to-three-dimensional-geometry-part2.md](introduction-to-three-dimensional-geometry-part2.md) mein hum dekhenge ki ek point ke **3D coordinates (x, y, z)** kaise bante hain, uske **feet of perpendiculars** kaise likhte hain, aur ek **3D cuboid ke sabhi 8 vertices** kaise nikaale jaate hain!
