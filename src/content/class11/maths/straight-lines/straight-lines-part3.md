# Chapter: Straight Lines (Part 3)

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla topic [straight-lines-part2.md](straight-lines-part2.md) tha** (Topic 2: Various Forms of the Equation of a Line — Point-Slope, Two-Point, Slope-Intercept, Intercept Form, aur Normal Form). Area of triangle formula (derivation ke liye) Class 10 ke [section-formula-and-reflection-part4.md](../../../class10/maths/section-formula-and-reflection/section-formula-and-reflection-part4.md) mein padha tha.
> **Topics covered in this file:**
> 1. General Equation of a Line, Distance of a Point from a Line, Distance Between Parallel Lines, Aur Family of Lines

---

# Topic 3: General Equation of a Line, Distance Formulas, Aur Family of Lines

Topic 2 mein tumne line ke kai forms seekhe — lekin real problems mein aksar line seedhi **General Equation Ax + By + C = 0** ke roop mein di hoti hai!

Is topic mein hum teen behad powerful Class 11 tools seekhenge:
1. Kisi bhi general equation Ax + By + C = 0 ko slope-intercept, intercept, aur **Normal Form** mein badalna (bina sign ki galti kiye!).
2. Kisi external point (x₁, y₁) se ek line ki **shortest (perpendicular) doori**, aur do **parallel lines** ke beech ki doori nikaalna!
3. **Family of Lines (L₁ + λL₂ = 0):** Do lines ke intersection point se guzarne wali nayi line nikaalna — bina intersection point calculate kiye!

---

## Faisal ka city emergency route plan

Faisal ek city urban-planning office mein emergency route analyst hai. City grid par ek seedha expressway line 3x - 4y - 26 = 0 ke along jata hai, aur naya district hospital point P(3, -5) par bana hai.

Faisal ko teen sawalon ke exact jawab chahiye the:
1. Hospital P(3, -5) se expressway tak sabse chhoti (perpendicular) ambulance ramp kitni lambi hogi?
   Usne point-to-line distance formula lagaya:
   d = |3(3) - 4(-5) - 26| / √(3² + (-4)²) = |9 + 20 - 26| / 5 = 3/5 km = 600 meter!
2. Do parallel metro corridors 3x - 4y + 7 = 0 aur 3x - 4y + 5 = 0 ke beech kitni chaudi safety strip bachti hai?
   Parallel distance formula se: d = |7 - 5| / 5 = 2/5 km = 400 meter!
3. Purane do highways L₁ = 0 aur L₂ = 0 ke busy junction se ek nayi bypass road nikaalni thi — Faisal ne intersection solve kiye bina seedha **L₁ + λL₂ = 0** likha aur sirf ek step mein λ nikaal liya!

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **General Equation** | Kisi bhi straight line ka standard linear roop: Ax + By + C = 0 (jahan A, B dono ek saath 0 nahi) | 3x - 4y - 26 = 0 |
| **Perpendicular Distance (d)** | Kisi point (x₁, y₁) se line tak ki sabse chhoti (90°) doori | abs(Ax₁ + By₁ + C) / √(A² + B²) |
| **Parallel Line Distance** | Do parallel lines Ax + By + C₁ = 0 aur Ax + By + C₂ = 0 ke beech ki constant doori | abs(C₁ - C₂) / √(A² + B²) |
| **Family of Lines** | Do intersecting lines L₁ = 0 aur L₂ = 0 ke milan point se guzarne wali sabhi lines ka group | L₁ + λL₂ = 0 |
| **Parameter (λ)** | Ek real constant jo family mein se ek specific line ko chunta hai | λ = 1 |

---

## Part A: General Equation Ax + By + C = 0 Ko Alag Forms Mein Badalna

Har first-degree equation **Ax + By + C = 0** (jahan A aur B dono ek saath zero nahi hain) ek straight line darshati hai. Ise teen standard forms mein aasani se badla ja sakta hai:

1. **Slope-Intercept Form (agar B ≠ 0):**
   By = -Ax - C  =>  **y = (-A/B)x + (-C/B)**
   Yahan slope **m = -A/B** aur y-intercept **c = -C/B**.

2. **Intercept Form (agar A, B, C teeno non-zero hon):**
   Ax + By = -C
   Dono taraf (-C) se divide karo:
   **x / (-C/A) + y / (-C/B) = 1**
   Yahan x-intercept **a = -C/A** aur y-intercept **b = -C/B**.

3. **Normal Form (x cos ω + y sin ω = p, jahan p > 0):**
   - **Step 1:** Constant C ko RHS par le jao: Ax + By = -C.
   - **Step 2 (Sign Rule!):** Agar RHS (-C) negative hai, to poori equation ko **-1 se multiply karo** taaki RHS positive ban jaye!
   - **Step 3:** Ab poori equation ko **√(A² + B²)** se divide karo.
   Tab x ka coefficient **cos ω**, y ka coefficient **sin ω**, aur positive RHS **p** ban jata hai!

---

## Part B: Perpendicular Distance Of A Point From A Line — Derivation ("Kyun"!)

Maan lo hume point P(x₁, y₁) se line L: Ax + By + C = 0 tak ki perpendicular doori **d** nikaalni hai.

```
            y
            ^      * P(x1, y1)
            :     /|\
            :    / | \
        R(0,-C/B)* |d \
            :     \|   \
            :      *M   \
            :       \    \
   ---------+--------*----*----> x
            O        Q(-C/A, 0)
```

### Area-Based Derivation (for A, B, C ≠ 0):
Line L axes ko do points par kaatti hai:
- Q = (-C/A, 0)
- R = (0, -C/B)

1. **Base QR ki lambai (Distance Formula se):**
   QR = √[ (-C/A - 0)² + (0 - (-C/B))² ]
   = √[ C²/A² + C²/B² ]
   = √[ C²(A² + B²) / (A²B²) ]
   = **|C| √(A² + B²) / |AB|**.

2. **Triangle PQR ka area (Coordinates se, Class 10 [section-formula-and-reflection-part4.md](../../../class10/maths/section-formula-and-reflection/section-formula-and-reflection-part4.md)):**
   Area(△PQR) = (1/2) | x₁(0 - (-C/B)) + (-C/A)(-C/B - y₁) + 0(y₁ - 0) |
   = (1/2) | (C/B)x₁ + (C²)/(AB) + (C/A)y₁ |
   = (1/2) | (C/(AB)) (Ax₁ + By₁ + C) |
   = **(1/2) · |C / (AB)| · |Ax₁ + By₁ + C|**.

3. **Area = (1/2) × Base × Height lagao:**
   (1/2) · QR · d = Area(△PQR)
   d = [ 2 · Area(△PQR) ] / QR
   = [ |C / (AB)| · |Ax₁ + By₁ + C| ] / [ |C| √(A² + B²) / |AB| ]

|C / (AB)| numerator aur denominator dono se cancel ho jata hai! Bachta hai:
**d = |Ax₁ + By₁ + C| / √(A² + B²)**

(Agar C = 0, ya A = 0, ya B = 0 ho, tab bhi yahi formula exact sahi answer deta hai!)

### Special Case — Origin (0, 0) Se Doori:
x₁ = 0, y₁ = 0 rakhne par: **d = |C| / √(A² + B²)** (jo exact Normal Form ka p hai!).

---

## Part C: Distance Between Two Parallel Lines

Maan lo do parallel lines hain (jinke x aur y coefficients **identical** bana liye gaye hain):
- L₁: Ax + By + C₁ = 0
- L₂: Ax + By + C₂ = 0

Line L₁ par koi bhi point (x₁, y₁) lo. Kyunki woh L₁ par hai, isliye:
Ax₁ + By₁ + C₁ = 0  =>  **Ax₁ + By₁ = -C₁**.

Ab is point (x₁, y₁) ki doosri line L₂ se perpendicular doori nikaalo:
d = |Ax₁ + By₁ + C₂| / √(A² + B²)
= |-C₁ + C₂| / √(A² + B²)
**d = |C₁ - C₂| / √(A² + B²)**

> **Golden Warning:** Yeh formula lagane se pehle **hamesha** check karo ki dono equations mein x aur y ke coefficients bilkul barabar (same A aur same B) hon!

---

## Part D: Family Of Lines Through An Intersection (L₁ + λL₂ = 0)

Maan lo do intersecting lines hain:
- L₁ ≡ A₁x + B₁y + C₁ = 0
- L₂ ≡ A₂x + B₂y + C₂ = 0

Inka intersection point P(x₀, y₀) dono equations ko satisfy karta hai, yaani:
L₁(x₀, y₀) = 0  aur  L₂(x₀, y₀) = 0.

Ab kisi bhi real number λ ke liye ek nayi equation banao:
**L₁ + λL₂ = 0**
(A₁ + λA₂)x + (B₁ + λB₂)y + (C₁ + λC₂) = 0

1. Yeh x aur y mein first-degree hai => yeh ek **straight line** hai.
2. Isme (x₀, y₀) rakho: L₁(x₀, y₀) + λ · L₂(x₀, y₀) = 0 + λ(0) = 0 => yeh **hamesha** intersection point P(x₀, y₀) se guzarti hai!

Iska fayda? Agar hume L₁ aur L₂ ke intersection se guzarne wali koi line chahiye jo kisi extra condition (jaise parallel to a given line, ya passing through a point) ko satisfy kare, to hume L₁ aur L₂ ko solve karke (x₀, y₀) nikaalne ki zaroorat hi nahi — seedhe **L₁ + λL₂ = 0** likho aur extra condition se **λ** nikaal lo!

---

## Solved Examples (Step-by-Step With Jaanch)

### Example 3.1: Reducing General Equations To All Standard Forms
**Sawaal:**
(a) √3 x + y - 8 = 0 ko slope-intercept, intercept, aur normal form mein badlo.
(b) x - √3 y + 6 = 0 ko normal form mein badlo aur ω, p gyat karo.

**Solution:**
**(a) √3 x + y - 8 = 0:**
- **Slope-Intercept Form:** y = -√3 x + 8 (yahan m = -√3, c = 8).
- **Intercept Form:** √3 x + y = 8 => x / (8/√3) + y / 8 = 1 (a = 8/√3, b = 8).
- **Normal Form:** √3 x + y = 8 (RHS = 8 > 0 hai!).
  √(A² + B²) = √((√3)² + 1²) = √4 = 2.
  Divide by 2: (√3/2)x + (1/2)y = 4.
  Compare with x cos ω + y sin ω = p:
  cos ω = √3/2 (> 0), sin ω = 1/2 (> 0) => First quadrant => **ω = 30°**, **p = 4**.

**(b) x - √3 y + 6 = 0:**
Step 1: Constant ko RHS par le jao: x - √3 y = -6.
Step 2: RHS negative (-6) hai! Poori equation ko -1 se multiply karo:
-x + √3 y = 6.
Step 3: Divide by √((-1)² + (√3)²) = √4 = 2:
(-1/2)x + (√3/2)y = 3.
Compare with x cos ω + y sin ω = p:
cos ω = -1/2 (< 0), sin ω = √3/2 (> 0) => Second quadrant => **ω = 120°**, **p = 3**.

Jaanch:
- Jaanch (a): cos² 30° + sin² 30° = 3/4 + 1/4 = 1 aur p = 4 > 0 ✅
- Jaanch (b): x cos 120° + y sin 120° = 3 => -x/2 + (√3/2)y = 3 => x - √3 y + 6 = 0 ✅

---

### Example 3.2: Perpendicular Distance Of A Point From A Line
**Sawaal:** Point P(3, -5) se line 3x - 4y - 26 = 0 ki perpendicular doori gyat karo.

**Solution:**
Yahan A = 3, B = -4, C = -26, aur (x₁, y₁) = (3, -5).
d = |Ax₁ + By₁ + C| / √(A² + B²)
= |3(3) + (-4)(-5) + (-26)| / √(3² + (-4)²)
= |9 + 20 - 26| / √(9 + 16)
= |3| / √25 = 3 / 5 units.

Jaanch:
- Jaanch: 3² + 4² = 5² (Pythagorean triplet) aur |29 - 26| = 3 > 0, so d = 3/5 ✅

---

### Example 3.3: Distance Between Parallel Lines With Non-Matching Coefficients
**Sawaal:** Do parallel lines 5x + 12y - 10 = 0 aur 10x + 24y + 19 = 0 ke beech ki doori gyat karo.

**Solution:**
Dhyan do: pehli line mein coefficients (5, 12) hain aur doosri mein (10, 24) hain!
Pehle doosri equation ko 2 se divide karke x, y coefficients same banao:
L₁: 5x + 12y - 10 = 0   (C₁ = -10)
L₂: 5x + 12y + 19/2 = 0  (C₂ = 19/2)

Ab A = 5, B = 12 => √(A² + B²) = √(25 + 144) = √169 = 13.
d = |C₁ - C₂| / √(A² + B²)
= |-10 - 19/2| / 13
= |-39/2| / 13
= (39 / 2) / 13
= 3 / 2 units.

Jaanch:
- Jaanch: Point (2, 0) line L₁ par hai (5(2) + 0 - 10 = 0). Iski L₂ (10x + 24y + 19 = 0) se doori = |20 + 0 + 19| / √(100 + 576) = 39 / 26 = 3/2 ✅

---

### Example 3.4: Family Of Lines Without Finding The Intersection Point
**Sawaal:** Lines x - 2y + 3 = 0 aur 2x + y - 4 = 0 ke intersection point se guzarne wali us line ki equation gyat karo jo 3x - y + 5 = 0 ke parallel hai.

**Solution:**
Family of lines through intersection of L₁ = 0 aur L₂ = 0:
(x - 2y + 3) + λ(2x + y - 4) = 0
(1 + 2λ)x + (-2 + λ)y + (3 - 4λ) = 0

Is line ka slope:
m = -(1 + 2λ) / (-2 + λ).

Di gayi line 3x - y + 5 = 0 ka slope = -3 / (-1) = 3.
Parallel hone ke liye dono slopes barabar hone chahiye:
-(1 + 2λ) / (-2 + λ) = 3
-1 - 2λ = -6 + 3λ
5 = 5λ
λ = 1.

Ab λ = 1 family equation mein rakho:
(1 + 2)x + (-2 + 1)y + (3 - 4) = 0
**3x - y - 1 = 0**.

Jaanch:
- Jaanch: Direct intersection of x - 2y + 3 = 0 aur 2x + y - 4 = 0 hai (1, 2). Check karo (1, 2) hamari line 3x - y - 1 = 0 par hai: 3(1) - 2 - 1 = 0, aur slope = 3 ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Normal Form mein badalte waqt p ko negative chhod dena
- **Galat soch:** "x - √3 y + 6 = 0 ko 2 se divide kiya: (1/2)x - (√3/2)y = -3, to p = -3."
- **Sahi samajh:** p origin se **perpendicular doori** hai — doori kabhi negative nahi hoti! Hamesha pehle RHS ko positive banao (agar negative ho to -1 se multiply karo), tab √(A² + B²) se divide karo.

### Galti 2: Parallel lines ke x, y coefficients same kiye bina |C₁ - C₂| laga dena
- **Galat soch:** "5x + 12y - 10 = 0 aur 10x + 24y + 19 = 0 ke beech ki doori = |-10 - 19| / 13 = 29/13."
- **Sahi samajh:** Formula d = |C₁ - C₂| / √(A² + B²) sirf tab valid hai jab dono lines mein A aur B **bilkul barabar** hon! Doosri equation ko 2 se divide karne par C₂ = 19/2 banta hai, jisse sahi doori 3/2 aati hai (29/13 nahi!).

### Galti 3: Distance formula mein modulus (absolute value) bhool jaana
- **Galat soch:** "Ax₁ + By₁ + C negative aaya, to doori -3/5 units likh di."
- **Sahi samajh:** Distance hamesha non-negative (≥ 0) hoti hai; numerator par modulus |Ax₁ + By₁ + C| lagana kabhi mat bhoolo!

---

## Quick Recap

- **General Equation Ax + By + C = 0:**
  - Slope m = -A/B, y-intercept c = -C/B (B ≠ 0).
  - x-intercept a = -C/A, y-intercept b = -C/B (A, B, C ≠ 0).
  - Normal Form: RHS positive banao, phir √(A² + B²) se divide karo; p = |C| / √(A² + B²) > 0.
- **Distance of Point (x₁, y₁) from Ax + By + C = 0:** d = |Ax₁ + By₁ + C| / √(A² + B²).
- **Distance Between Parallel Lines Ax + By + C₁ = 0 and Ax + By + C₂ = 0:** d = |C₁ - C₂| / √(A² + B²) (same A, B!).
- **Family of Lines:** L₁ + λL₂ = 0 passes through the intersection of L₁ = 0 and L₂ = 0 for all λ in R.

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Reduce the equation 6x + 3y - 5 = 0 to slope-intercept form and find its slope and y-intercept.

**Solution:**
3y = -6x + 5
y = -2x + 5/3.
Comparing with y = mx + c:
Slope m = -2, y-intercept c = 5/3.

Jaanch:
- Jaanch: -A/B = -6/3 = -2 aur -C/B = 5/3 ✅

---

### Question 2
Reduce the equation 3x + 2y - 12 = 0 to intercept form and find its intercepts on the axes.

**Solution:**
3x + 2y = 12
Divide by 12:
x/4 + y/6 = 1.
x-intercept a = 4, y-intercept b = 6.

Jaanch:
- Jaanch: (4, 0) par 3(4) + 0 - 12 = 0 aur (0, 6) par 0 + 2(6) - 12 = 0 ✅

---

### Question 3
Reduce the equation x - y - 4 = 0 to normal form. Find the perpendicular distance p from the origin and the angle ω.

**Solution:**
x - y = 4 (RHS = 4 > 0).
Divide by √(1² + (-1)²) = √2:
(1/√2)x + (-1/√2)y = 4/√2 = 2√2.

Compare with x cos ω + y sin ω = p:
cos ω = 1/√2 (> 0), sin ω = -1/√2 (< 0) => Fourth quadrant => ω = 360° - 45° = 315°.
And p = 2√2.

Jaanch:
- Jaanch: cos 315° = 1/√2, sin 315° = -1/√2, aur p = 2√2 > 0 ✅

---

### Question 4
Find the perpendicular distance of the point (-1, 1) from the line 12(x + 6) = 5(y - 2).

**Solution:**
First convert to general form Ax + By + C = 0:
12x + 72 = 5y - 10
12x - 5y + 82 = 0.

Here A = 12, B = -5, C = 82, (x₁, y₁) = (-1, 1).
d = |12(-1) - 5(1) + 82| / √(12² + (-5)²)
= |-12 - 5 + 82| / √(144 + 25)
= |65| / 13 = 5 units.

Jaanch:
- Jaanch: 12² + 5² = 13² aur 65 / 13 = 5 ✅

---

### Question 5
Find the distance between the parallel lines 15x + 8y - 34 = 0 and 15x + 8y + 31 = 0.

**Solution:**
Here A = 15, B = 8 (already identical!), C₁ = -34, C₂ = 31.
√(A² + B²) = √(225 + 64) = √289 = 17.
d = |C₁ - C₂| / √(A² + B²) = |-34 - 31| / 17 = 65 / 17 units.

Jaanch:
- Jaanch: 15² + 8² = 17² aur |-34 - 31| = 65 > 0 ✅

---

### Question 6
Find the distance between the parallel lines 3x - 4y + 9 = 0 and 6x - 8y - 15 = 0.

**Solution:**
Divide the second equation by 2 so x, y coefficients match:
L₁: 3x - 4y + 9 = 0   (C₁ = 9)
L₂: 3x - 4y - 15/2 = 0 (C₂ = -15/2)

Here A = 3, B = -4 => √(A² + B²) = 5.
d = |9 - (-15/2)| / 5 = |33/2| / 5 = 33 / 10 = 3.3 units.

Jaanch:
- Jaanch: Point (-3, 0) lies on L₁ (3(-3) + 9 = 0); its distance to 6x - 8y - 15 = 0 is |-18 - 15| / 10 = 33/10 ✅

---

### Question 7
Find the equation of a line parallel to 3x - 4y + 2 = 0 and passing through the point (-2, 3).

**Solution:**
Any line parallel to 3x - 4y + 2 = 0 has the form 3x - 4y + k = 0.
Since it passes through (-2, 3):
3(-2) - 4(3) + k = 0 => -6 - 12 + k = 0 => k = 18.
Equation: 3x - 4y + 18 = 0.

Jaanch:
- Jaanch: (-2, 3) par -6 - 12 + 18 = 0 aur slope = 3/4 ✅

---

### Question 8
Find the equation of a line perpendicular to x - 7y + 5 = 0 and having x-intercept 3.

**Solution:**
Any line perpendicular to Ax + By + C = 0 has the form Bx - Ay + k = 0.
Here A = 1, B = -7 => perpendicular line form: 7x + y + k = 0.
Since x-intercept is 3, it passes through (3, 0):
7(3) + 0 + k = 0 => k = -21.
Equation: 7x + y - 21 = 0.

Jaanch:
- Jaanch: Slopes product (1/7) × (-7) = -1 aur (3, 0) par 21 + 0 - 21 = 0 ✅

---

### Question 9
Using the family of lines, find the equation of the line passing through the intersection of x + 2y - 3 = 0 and 4x - y + 7 = 0 and also passing through the point (1, 1).

**Solution:**
Family of lines: (x + 2y - 3) + λ(4x - y + 7) = 0.
Since it passes through (1, 1):
(1 + 2 - 3) + λ(4 - 1 + 7) = 0
0 + 10λ = 0 => λ = 0.

Substituting λ = 0 gives: x + 2y - 3 = 0!
(Kyunki (1, 1) pehle se hi pehli line L₁ par hai!)

Jaanch:
- Jaanch: (1, 1) satisfies x + 2y - 3 = 0 (1 + 2 - 3 = 0) aur yeh L₁ = 0 khud intersection se guzarti hai ✅

---

### Question 10
Using the family of lines, find the equation of the line passing through the intersection of 2x + y - 5 = 0 and x + 3y + 8 = 0 and perpendicular to 3x + 4y - 7 = 0.

**Solution:**
Family of lines: (2x + y - 5) + λ(x + 3y + 8) = 0
(2 + λ)x + (1 + 3λ)y + (-5 + 8λ) = 0.

Slope of this line: m₁ = -(2 + λ) / (1 + 3λ).
Slope of 3x + 4y - 7 = 0 is m₂ = -3/4.
For perpendicularity, m₁ · m₂ = -1 => m₁ = 4/3:
-(2 + λ) / (1 + 3λ) = 4/3
-6 - 3λ = 4 + 12λ
-10 = 15λ => λ = -2/3.

Substitute λ = -2/3 into the family equation:
(2 - 2/3)x + (1 - 2)y + (-5 - 16/3) = 0
(4/3)x - y - 31/3 = 0
Multiply by 3:
4x - 3y - 31 = 0.

Jaanch:
- Jaanch: Intersection of 2x + y = 5 and x + 3y = -8 is (23/5, -21/5). Check in 4x - 3y - 31: 92/5 + 63/5 - 155/5 = 0, aur slope 4/3 × (-3/4) = -1 ✅

---

### Question 11
Find the points on the y-axis whose distance from the line 4x - 3y - 12 = 0 is 4 units.

**Solution:**
Any point on the y-axis has coordinates (0, y₁).
Perpendicular distance from 4x - 3y - 12 = 0 is 4:
|4(0) - 3y₁ - 12| / √(4² + (-3)²) = 4
|-3y₁ - 12| / 5 = 4
|3y₁ + 12| = 20.

Case 1: 3y₁ + 12 = 20 => 3y₁ = 8 => y₁ = 8/3.
Case 2: 3y₁ + 12 = -20 => 3y₁ = -32 => y₁ = -32/3.

The required points are (0, 8/3) and (0, -32/3).

Jaanch:
- Jaanch (0, 8/3): |-3(8/3) - 12|/5 = |-20|/5 = 4 ✅
- Jaanch (0, -32/3): |-3(-32/3) - 12|/5 = |32 - 12|/5 = 20/5 = 4 ✅

---

### Question 12
If p and q are the lengths of perpendiculars from the origin to the lines x cos θ - y sin θ = k cos 2θ and x sec θ + y cosec θ = k respectively, prove that p² + 4q² = k².

**Solution:**
1. Distance p of origin (0, 0) from x cos θ - y sin θ - k cos 2θ = 0:
   p = |-k cos 2θ| / √(cos² θ + sin² θ) = |k cos 2θ| / 1 = |k cos 2θ|.
   So p² = k² cos² 2θ.

2. Convert x sec θ + y cosec θ = k into sin/cos form:
   x / cos θ + y / sin θ = k
   Multiply by sin θ cos θ:
   x sin θ + y cos θ - k sin θ cos θ = 0.
   Distance q of origin (0, 0) from this line:
   q = |-k sin θ cos θ| / √(sin² θ + cos² θ) = |k sin θ cos θ| = |(k/2) sin 2θ|.
   So 2q = |k sin 2θ| => 4q² = k² sin² 2θ.

3. Add p² and 4q²:
   p² + 4q² = k² cos² 2θ + k² sin² 2θ = k²(cos² 2θ + sin² 2θ) = k².

Jaanch:
- Jaanch: Test with θ = 45°, k = 2: p = |2 cos 90°| = 0, q = |2(1/2)| = 1 => p² + 4q² = 0 + 4 = 4 = k² ✅

---

Ab tumne General Equation ke reductions, point-to-line distance, parallel-line distance, aur Family of Lines master kar liya hai! Agle aur aakhri topic [straight-lines-part4.md](straight-lines-part4.md) mein hum sabhi tools ko mila kar **Foot of Perpendicular, Image of a Point, Ray Reflection, 6 Mixed Synthesis Problems**, aur poore chapter ka **Wrap-up Table** dekhenge!
