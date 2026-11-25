# Chapter: Conic Sections

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla chapter [straight-lines-part4.md](../straight-lines/straight-lines-part4.md) tha** (Straight Lines ka aakhri topic, jiske teaser ne vaada kiya tha ki ab hum seedhi lines se aage badhkar **Circles, Parabolas, Ellipses, aur Hyperbolas** ki duniya mein kadam rakhenge!). Distance formula Class 9 ke [distance-formula.md](../../../class9/maths/distance-formula/distance-formula.md) mein aur midpoint/section formula Class 10 ke [section-formula-and-reflection.md](../../../class10/maths/section-formula-and-reflection/section-formula-and-reflection.md) mein padha tha.
> **Topics covered in this file:**
> 1. Sections of a Cone Aur Circle (Standard, General, Aur Diameter Form)

---

# Topic 1: Sections of a Cone Aur Circle

Ab tak Coordinate Geometry mein humne sirf first-degree equations (Ax + By + C = 0, yaani straight lines) padhi thin. Lekin jaise hi equation mein **x²** aur **y²** aate hain, seedhi line mudkar khoobsurat curves ban jaati hai — **Circle, Parabola, Ellipse, aur Hyperbola**!

In chaaron curves ka ek hi parivar hai, jise **Conic Sections** kehte hain — kyunki yeh chaaron ek hi 3D shape (double-napped right circular cone) ko alag-alag angles par kaatne se paida hote hain! Is pehle topic mein hum cone ke sabhi sections samjhenge aur sabse pehle conic — **Circle** — ko poori tarah master karenge!

---

## Ipsita ki wood-turning workshop

Ipsita ek wood-turning artisan hai. Apni workshop mein usne do identical wooden cones ko unke tips (vertices) par chipka kar ek **double cone** banaya (bilkul ek sandglass ya damru jaisa), jiska semi-vertical angle α = 30° tha.

Phir usne miter saw blade ko cone ke vertical axis se alag-alag angles β par tilt karke kaata:
- Jab usne blade ko bilkul seedha horizontal rakha (β = 90°), to kati hui satah ek perfect **Circle** nikli!
- Jab usne blade ko thoda tirchha kiya (30° < β < 90°), to gol circle khinch kar ek **Ellipse** ban gaya!
- Jab usne blade ko theek cone ki slant edge ke parallel rakha (β = 30° = α), to ek khula hua U-shape **Parabola** bana!
- Aur jab usne blade ko aur zyada khada (steep) kiya (0° ≤ β < 30°), to blade ne upar aur neeche **dono cones** ko kaat diya — aur do alag branches wala **Hyperbola** ban gaya!

Ipsita muskuraayi: "Ek hi wooden double cone, chaar cutting angles — aur poora Conic Sections chapter haath mein!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Double-Napped Cone** | Do cones jo apne vertex V par aamne-saamne jude hon (upper nappe aur lower nappe) | Sandglass shape |
| **Generator & Axis** | Fixed vertical line axis hai, aur ghoomne wali slant line generator hai | Semi-vertical angle = α |
| **Conic Section** | Plane dwara double cone ko kaatne par banne wala curve | Circle, Ellipse, Parabola, Hyperbola |
| **Degenerate Conic** | Jab cutting plane theek vertex V se guzarta hai (point, ek line, ya do intersecting lines) | β = α par single line |
| **Circle** | Un sabhi points ka set jo ek fixed centre (h, k) se fixed distance r par hon | (x - h)² + (y - k)² = r² |

---

## Part A: Double Cone Ko Kaatne Se Kya Banta Hai?

Maan lo double-napped right circular cone ka semi-vertical angle **α** hai, aur cutting plane cone ke axis se angle **β** banata hai:

```
              \       /       Upper Nappe
               \  a  /
                \ : /
                 \:/  V (Vertex)
                 /:\
                / : \
               /     \        Lower Nappe
```

### Case 1: Plane Vertex V Se Nahi Guzarta (Non-Degenerate Conics)
| Cutting Angle β | Curve Jo Banta Hai | Pehchan |
|---|---|---|
| **β = 90°** | **Circle** | Plane axis par perpendicular hota hai |
| **α < β < 90°** | **Ellipse** | Plane ek nappe ke sabhi generators ko kaatta hai |
| **β = α** | **Parabola** | Plane ek generator ke bilkul parallel hota hai |
| **0° ≤ β < α** | **Hyperbola** | Plane upper aur lower **dono nappes** ko kaatta hai |

### Case 2: Plane Theek Vertex V Se Guzarta Hai (Degenerate Conics)
- **α < β ≤ 90°:** Sirf ek **Point** (vertex V).
- **β = α:** Ek **Straight Line** (cone ka generator).
- **0° ≤ β < α:** **Pair of Intersecting Straight Lines**.

---

## Part B: Circle Ki Standard Equation ("Kyun"!)

Circle un sabhi points P(x, y) ka locus (set) hai jinki ek fixed point **C(h, k)** (centre) se doori hamesha ek fixed positive number **r** (radius) ke barabar hoti hai:
CP = r

Class 9 ke [distance-formula.md](../../../class9/maths/distance-formula/distance-formula.md) se:
√[(x - h)² + (y - k)²] = r

Dono taraf square karne par hume Circle ki **Standard (Centre-Radius) Equation** milti hai:
**(x - h)² + (y - k)² = r²**

- Agar centre origin (0, 0) ho, to equation ban jaati hai: **x² + y² = r²**.

---

## Part C: General Equation Of A Circle Aur Completing The Square

Standard equation (x - h)² + (y - k)² = r² ko expand karo:
x² - 2hx + h² + y² - 2ky + k² = r²
x² + y² - 2hx - 2ky + (h² + k² - r²) = 0

Agar hum **g = -h**, **f = -k**, aur **c = h² + k² - r²** likhein, to hume Circle ki **General Equation** milti hai:
**x² + y² + 2gx + 2fy + c = 0**

### Ulta Jaana (General Form Se Centre Aur Radius Nikaalna):
Completing the square karne par:
(x + g)² + (y + f)² = g² + f² - c

Isliye:
- **Centre = (-g, -f)**  *(yaani x aur y ke coefficients ka aadha karke sign palat do!)*
- **Radius r = √(g² + f² - c)**

### Teen Zaroori Conditions:
1. **g² + f² - c > 0:** Ek **real circle** banta hai.
2. **g² + f² - c = 0:** Radius zero => ek **point circle** (sirf centre (-g, -f)).
3. **g² + f² - c < 0:** Square root ke andar negative => **koi real circle exist nahi karta**!

### Diameter Form (Handy Bonus):
Agar circle ke diameter ke endpoints A(x₁, y₁) aur B(x₂, y₂) diye hon:
- Centre = Midpoint of AB = ((x₁ + x₂)/2, (y₁ + y₂)/2)
- Radius r = AB / 2
- Direct equation: **(x - x₁)(x - x₂) + (y - y₁)(y - y₂) = 0**  *(kyunki semicircle mein bana angle 90° hota hai, so m_PA · m_PB = -1!)*

---

## Solved Examples (Step-by-Step With Jaanch)

### Example 1.1: Equation Of Circle Given Centre And Radius
**Sawaal:** Centre (-3, 2) aur radius 4 wale circle ki standard aur general equation gyat karo.

**Solution:**
Yahan h = -3, k = 2, r = 4.
Standard form:
(x - (-3))² + (y - 2)² = 4²
**(x + 3)² + (y - 2)² = 16**.

Expand karke general form:
(x² + 6x + 9) + (y² - 4y + 4) = 16
x² + y² + 6x - 4y + 13 - 16 = 0
**x² + y² + 6x - 4y - 3 = 0**.

Jaanch:
- Jaanch: General form mein 2g = 6 => g = 3, 2f = -4 => f = -2, c = -3. Centre = (-g, -f) = (-3, 2), Radius = √(9 + 4 - (-3)) = √16 = 4 ✅

---

### Example 1.2: Finding Centre And Radius By Completing The Square
**Sawaal:** Circle x² + y² - 8x + 10y - 12 = 0 ka centre aur radius gyat karo.

**Solution:**
x aur y terms ko group karo:
(x² - 8x) + (y² + 10y) = 12

Completing the square (dono taraf (-4)² = 16 aur 5² = 25 jodo):
(x² - 8x + 16) + (y² + 10y + 25) = 12 + 16 + 25
(x - 4)² + (y + 5)² = 53
(x - 4)² + (y - (-5))² = (√53)²

Isliye **Centre = (4, -5)** aur **Radius = √53 units**.

Jaanch:
- Jaanch: Formula se g = -4, f = 5, c = -12 => Centre = (4, -5), r = √(16 + 25 + 12) = √53 ✅

---

### Example 1.3: Circle Through Two Points With Centre On A Given Line
**Sawaal:** Us circle ki equation gyat karo jo points A(4, 5) aur B(5, -2) se guzarta hai aur jiska centre line x + y = 2 par sthit hai.

**Solution:**
Maan lo circle ka centre C(h, k) aur radius r hai.
1. Centre line x + y = 2 par hai:
   h + k = 2   --- (1)
2. CA² = CB² = r²:
   (h - 4)² + (k - 5)² = (h - 5)² + (k + 2)²
   h² - 8h + 16 + k² - 10k + 25 = h² - 10h + 25 + k² + 4k + 4
   -8h - 10k + 41 = -10h + 4k + 29
   2h - 14k = -12
   h - 7k = -6   --- (2)

Equation (1) mein se Equation (2) ghatao:
(h + k) - (h - 7k) = 2 - (-6)
8k = 8 => k = 1.

From (1): h + 1 = 2 => h = 1.
Centre C = (1, 1).

Radius² = CA² = (4 - 1)² + (5 - 1)² = 3² + 4² = 9 + 16 = 25 => r = 5.

Equation of circle:
(x - 1)² + (y - 1)² = 25
**x² + y² - 2x - 2y - 23 = 0**.

Jaanch:
- Jaanch: Centre (1, 1) line x + y = 2 par hai (1 + 1 = 2) ✅
- Jaanch: A(4, 5) par (3)² + (4)² = 25 aur B(5, -2) par (4)² + (-3)² = 25 ✅

---

### Example 1.4: Circle Given Endpoints Of A Diameter
**Sawaal:** Us circle ki equation gyat karo jiske ek diameter ke endpoints (-1, 2) aur (5, 10) hain.

**Solution:**
Centre = Midpoint = ((-1 + 5)/2, (2 + 10)/2) = (2, 6).
Radius r = Distance from (2, 6) to (5, 10) = √((5 - 2)² + (10 - 6)²) = √(9 + 16) = √25 = 5.

Standard Equation:
**(x - 2)² + (y - 6)² = 25**  (ya x² + y² - 4x - 12y + 15 = 0).

Jaanch:
- Jaanch: Diameter form (x + 1)(x - 5) + (y - 2)(y - 10) = (x² - 4x - 5) + (y² - 12y + 20) = x² + y² - 4x - 12y + 15 = 0 ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: (x - h)² + (y - k)² = r² se centre ke signs ulte padh lena
- **Galat soch:** "(x + 3)² + (y - 2)² = 16 ka centre (3, -2) hai."
- **Sahi samajh:** Standard form mein minus sign hota hai: (x - (-3))² + (y - 2)² = 4². Isliye centre **(-3, 2)** hai! Short trick: har bracket ko zero rakho (x + 3 = 0 => x = -3, y - 2 = 0 => y = 2).

### Galti 2: 2x² + 2y² + ... = 0 mein bina divide kiye g, f padh lena
- **Galat soch:** "2x² + 2y² - 4x + 8y - 10 = 0 mein 2g = -4 => g = -2, centre (2, -4)."
- **Sahi samajh:** General form x² + y² + 2gx + 2fy + c = 0 mein x² aur y² ka coefficient **1** hona zaroori hai! Pehle poori equation ko 2 se divide karo: x² + y² - 2x + 4y - 5 = 0 => centre **(1, -2)**!

### Galti 3: Bina g² + f² - c > 0 check kiye real circle maan lena
- **Galat soch:** "x² + y² - 2x - 4y + 10 = 0 ek circle hai."
- **Sahi samajh:** Yahan g = -1, f = -2, c = 10 => g² + f² - c = 1 + 4 - 10 = -5 < 0! Koi bhi real (x, y) is equation ko satisfy nahi kar sakta, isliye yeh **real circle nahi hai**!

---

## Quick Recap

- **Conic Sections (non-degenerate):** β = 90° (Circle), α < β < 90° (Ellipse), β = α (Parabola), 0° ≤ β < α (Hyperbola).
- **Circle Standard Form:** (x - h)² + (y - k)² = r² (Centre (h, k), Radius r).
- **Circle General Form:** x² + y² + 2gx + 2fy + c = 0 => Centre (-g, -f), Radius √(g² + f² - c).
- **Real circle condition:** g² + f² - c > 0.
- **Diameter Form:** (x - x₁)(x - x₂) + (y - y₁)(y - y₂) = 0.

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Find the equation of the circle with centre (0, 2) and radius 2.

**Solution:**
Here h = 0, k = 2, r = 2.
(x - 0)² + (y - 2)² = 2²
x² + y² - 4y + 4 = 4
x² + y² - 4y = 0.

Jaanch:
- Jaanch: Centre (0, 2) aur radius √(0 + 4 - 0) = 2 ✅

---

### Question 2
Find the equation of the circle with centre (1/2, 1/4) and radius 1/12.

**Solution:**
(x - 1/2)² + (y - 1/4)² = (1/12)²
x² - x + 1/4 + y² - y/2 + 1/16 = 1/144
Multiply by 144:
144x² - 144x + 36 + 144y² - 72y + 9 = 1
144x² + 144y² - 144x - 72y + 44 = 0
Divide by 4:
36x² + 36y² - 36x - 18y + 11 = 0.

Jaanch:
- Jaanch: Divide by 36: x² + y² - x - y/2 + 11/36 = 0 => g = -1/2, f = -1/4, r² = 1/4 + 1/16 - 11/36 = (36 + 9 - 44)/144 = 1/144 => r = 1/12 ✅

---

### Question 3
Find the centre and radius of the circle (x + 5)² + (y - 3)² = 36.

**Solution:**
Compare with (x - h)² + (y - k)² = r²:
h = -5, k = 3, r² = 36 => r = 6.
Centre = (-5, 3), Radius = 6 units.

Jaanch:
- Jaanch: (-5 + 5)² + (3 - 3)² = 0 aur √36 = 6 ✅

---

### Question 4
Find the centre and radius of the circle x² + y² - 4x - 8y - 45 = 0.

**Solution:**
Here 2g = -4 => g = -2; 2f = -8 => f = -4; c = -45.
Centre = (-g, -f) = (2, 4).
Radius r = √((-2)² + (-4)² - (-45)) = √(4 + 16 + 45) = √65 units.

Jaanch:
- Jaanch: (x - 2)² + (y - 4)² = 4 + 16 + 45 = 65 => Centre (2, 4), r = √65 ✅

---

### Question 5
Find the centre and radius of the circle 2x² + 2y² - x = 0.

**Solution:**
First divide the entire equation by 2 so x² and y² have coefficient 1:
x² + y² - (1/2)x = 0.

Here 2g = -1/2 => g = -1/4; 2f = 0 => f = 0; c = 0.
Centre = (-g, -f) = (1/4, 0).
Radius r = √((-1/4)² + 0 - 0) = 1/4 unit.

Jaanch:
- Jaanch: (x - 1/4)² + y² = 1/16 => x² - x/2 + y² = 0 => 2x² + 2y² - x = 0 ✅

---

### Question 6
Find the equation of the circle with radius 5 whose centre lies on the x-axis and which passes through the point (2, 3).

**Solution:**
Centre on x-axis => C(h, 0). Radius r = 5.
Distance from (h, 0) to (2, 3) is 5:
(h - 2)² + (0 - 3)² = 25
(h - 2)² + 9 = 25
(h - 2)² = 16
h - 2 = ±4 => h = 6 or h = -2.

Two circles exist:
- Centre (6, 0): (x - 6)² + y² = 25 => x² + y² - 12x + 11 = 0.
- Centre (-2, 0): (x + 2)² + y² = 25 => x² + y² + 4x - 21 = 0.

Jaanch:
- Jaanch: Point (2, 3) dono mein satisfy hota hai: (2 - 6)² + 9 = 25 aur (2 + 2)² + 9 = 25 ✅

---

### Question 7
Find the equation of the circle passing through (0, 0) and making intercepts a = 6 and b = 8 on the positive coordinate axes.

**Solution:**
The circle passes through O(0, 0), A(6, 0), and B(0, 8).
Since ∠AOB = 90°, AB is a diameter of the circle!
Midpoint of AB = Centre = (3, 4).
Radius = √(3² + 4²) = 5.

Equation: (x - 3)² + (y - 4)² = 25 => x² + y² - 6x - 8y = 0.

Jaanch:
- Jaanch: (0, 0) par 0, (6, 0) par 36 - 36 = 0, (0, 8) par 64 - 64 = 0 ✅

---

### Question 8
Does the point (-2.5, 3.5) lie inside, outside, or on the circle x² + y² = 25?

**Solution:**
Centre is (0, 0) and r² = 25.
Square of distance of (-2.5, 3.5) from (0, 0):
d² = (-2.5)² + (3.5)² = 6.25 + 12.25 = 18.5.

Since d² = 18.5 < 25 = r², the point lies **inside** the circle.

Jaanch:
- Jaanch: 18.5 < 25, so distance √18.5 < 5 ✅

---

### Question 9
Find the equation of the circle passing through the points (4, 1) and (6, 5) whose centre lies on the line 4x + y = 16.

**Solution:**
Let centre be C(h, k).
4h + k = 16   --- (1)
Equate squared distances to (4, 1) and (6, 5):
(h - 4)² + (k - 1)² = (h - 6)² + (k - 5)²
-8h + 16 - 2k + 1 = -12h + 36 - 10k + 25
4h + 8k = 44
h + 2k = 11   --- (2)

From (1), k = 16 - 4h. Substitute in (2):
h + 2(16 - 4h) = 11 => -7h = -21 => h = 3.
k = 16 - 12 = 4.
Centre = (3, 4).
r² = (4 - 3)² + (1 - 4)² = 1 + 9 = 10.

Equation: (x - 3)² + (y - 4)² = 10 => x² + y² - 6x - 8y + 15 = 0.

Jaanch:
- Jaanch: Centre (3, 4) on 4x + y = 16 (12 + 4 = 16); (4, 1) gives 1 + 9 = 10; (6, 5) gives 9 + 1 = 10 ✅

---

### Question 10
Find the equation of the circle whose diameter has endpoints (2, -3) and (-4, 5).

**Solution:**
Using diameter form (x - x₁)(x - x₂) + (y - y₁)(y - y₂) = 0:
(x - 2)(x + 4) + (y + 3)(y - 5) = 0
(x² + 2x - 8) + (y² - 2y - 15) = 0
x² + y² + 2x - 2y - 23 = 0.

Jaanch:
- Jaanch: Centre = (-1, 1), r² = (2 - (-1))² + (-3 - 1)² = 9 + 16 = 25; (x + 1)² + (y - 1)² = 25 => x² + y² + 2x - 2y - 23 = 0 ✅

---

### Question 11
Check whether the equation x² + y² - 6x + 4y + 15 = 0 represents a real circle.

**Solution:**
Here g = -3, f = 2, c = 15.
Check g² + f² - c:
(-3)² + 2² - 15 = 9 + 4 - 15 = -2 < 0.

Since g² + f² - c < 0, this equation does **not** represent a real circle (no real point satisfies it).

Jaanch:
- Jaanch: Completing square gives (x - 3)² + (y + 2)² = -2, which is impossible for real x, y ✅

---

### Question 12
Find the equation of a circle of radius 6 which touches both the positive coordinate axes.

**Solution:**
Since the circle touches both the positive x-axis and positive y-axis in the first quadrant, its centre is at distance r = 6 from both axes:
Centre = (6, 6), Radius = 6.

Equation:
(x - 6)² + (y - 6)² = 6²
x² + y² - 12x - 12y + 36 = 0.

Jaanch:
- Jaanch: Touches x-axis at (6, 0): 36 - 72 + 36 = 0; touches y-axis at (0, 6): 36 - 72 + 36 = 0 ✅

---

Ab tumne double cone ke sabhi sections aur Circle ki har form ko master kar liya hai! Agle topic [conic-sections-part2.md](conic-sections-part2.md) mein hum doosre conic section — **Parabola (y² = ±4ax, x² = ±4ay)** — ka focus, directrix, aur latus rectum derive karenge!
