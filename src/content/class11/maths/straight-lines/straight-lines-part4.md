# Chapter: Straight Lines (Part 4)

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla topic [straight-lines-part3.md](straight-lines-part3.md) tha** (Topic 3: General Equation of a Line, Distance Formulas, aur Family of Lines).
> **Topics covered in this file:**
> 1. Sab Kuch Mila Kar: Foot of Perpendicular, Image of a Point, Ray Reflection, Mixed Synthesis Problems, Practice, Aur Chapter Wrap-up Table

---

# Topic 4: Sab Kuch Mila Kar — Mixed Problems, Applications, Aur Chapter Wrap-up

Pichhle teen topics mein tumne Straight Lines ke sabhi core tools seekhe:
1. Slope, collinearity, aur angle between two lines (tan θ)
2. Sabhi equation forms (point-slope, two-point, slope-intercept, intercept form, normal form)
3. General equation reductions, point-to-line distance, parallel-line distance, aur family of lines (L₁ + λL₂ = 0)

Ab waqt hai in sabhi tools ko ek saath mila kar **high-level synthesis problems** solve karne ka — jaise kisi point ka **foot of perpendicular**, uska **mirror image**, **ray of light ka reflection**, aur **family of lines + distance** ke combined sawal!

---

## Garima ka Astronomy & Optics Club "Laser Beam Lab"

School ke Astronomy & Optics Club mein Garima ne ek tabletop "Laser Beam Lab" setup kiya jisme coordinate grid sheet par chhote mirrors aur light sensors rakhe the. Uske saamne teen real challenges aaye:
- **Station 1 (Mirror Image):** Ek LED source P(3, 8) ek flat mirror line x + 3y - 7 = 0 ke saamne rakha hai. Mirror ke andar uski virtual image Q kahan dikhegi?
- **Station 2 (Laser Reflection):** Point A(1, 2) se ek laser beam x-axis par rakhe mirror se takrakar target B(5, 3) par pahunchti hai — mirror par exact reflection point P(x, 0) kya hoga?
- **Station 3 (Beam Family):** Do laser beams ke intersection point se ek teesra beam nikalna hai jo central sensor O(0, 0) se theek 2 units ki doori par rahe!

Garima ne dekha ki har station ek hi toolkit se solve hota hai — bas sahi waqt par sahi formula chunnane ki kala aani chahiye!

---

## Decision Map: Kaun Sa Form / Formula Kab?

| Sawaal mein kya diya hai? | Sabse tez tool / formula | Yaad rakhne ki baat |
|---|---|---|
| Do lines ke beech ka angle ya fixed angle par nayi line | tan θ = abs((m₂ - m₁)/(1 + m₁m₂)) | Nayi line dhoondhte waqt ± tan θ (do lines!) lo |
| Point (x₁, y₁) aur slope m | y - y₁ = m(x - x₁) | Parallel: same m; Perpendicular: -1/m |
| Dono axes ke non-zero intercepts a, b | x/a + y/b = 1 | a aur b signed hote hain; RHS hamesha 1 |
| Origin se perpendicular distance p aur normal angle ω | x cos ω + y sin ω = p | p hamesha > 0; ω normal ka angle hai, line ka nahi |
| Point (x₁, y₁) se line Ax + By + C = 0 ki doori | d = abs(Ax₁ + By₁ + C) / √(A² + B²) | Modulus kabhi mat bhoolo |
| Do parallel lines ke beech ki doori | d = abs(C₁ - C₂) / √(A² + B²) | Pehle dono lines mein A aur B barabar banao! |
| Do lines ke intersection se guzarne wali nayi line | L₁ + λL₂ = 0 | Pehle dono lines ko = 0 form mein likho |
| Foot of perpendicular M(h, k) & Image Q(x₂, y₂) | (h - x₁)/A = (k - y₁)/B = -(Ax₁ + By₁ + C)/(A² + B²) | Image ke liye RHS mein -2 lagao (M midpoint hai!) |

---

## 6 Rich Mixed Solved Problems (Step-by-Step With Jaanch)

### Problem 4.1: Foot Of Perpendicular And Mirror Image Of A Point In A Line
**Sawaal:** Point P(3, 8) ka line x + 3y - 7 = 0 par **foot of perpendicular M** aur is line mein **mirror image Q** gyat karo.

**Solution:**
Line L: x + 3y - 7 = 0 (yahan A = 1, B = 3, C = -7; slope m_L = -1/3).

**Method 1 (Concept Method — Hamesha Kaam Karta Hai!):**
1. Line PM, line L par perpendicular hai, isliye slope of PM = -1 / (-1/3) = 3.
2. Point P(3, 8) aur slope 3 se line PM ki equation:
   y - 8 = 3(x - 3) => 3x - y - 1 = 0  --- (1)
3. Foot M line L (x + 3y = 7) aur line PM (3x - y = 1) ka intersection hai:
   Equation (1) se y = 3x - 1 ko L mein rakho:
   x + 3(3x - 1) = 7 => 10x - 3 = 7 => 10x = 10 => x = 1.
   Tab y = 3(1) - 1 = 2.
   Isliye **Foot of perpendicular M = (1, 2)**.
4. Mirror image Q(x₂, y₂) ke liye foot M(1, 2), segment PQ ka **midpoint** hota hai:
   (3 + x₂)/2 = 1 => x₂ = -1
   (8 + y₂)/2 = 2 => y₂ = -4.
   Isliye **Image Q = (-1, -4)**.

**Method 2 (Direct Formula Check):**
Foot M(h, k) ke liye:
(h - 3)/1 = (k - 8)/3 = -(1(3) + 3(8) - 7) / (1² + 3²) = -(20)/10 = -2
=> h = 3 - 2 = 1, k = 8 - 6 = 2 => M(1, 2).
Image Q ke liye RHS = 2 × (-2) = -4 => x₂ = 3 - 4 = -1, y₂ = 8 - 12 = -4 => Q(-1, -4)!

Jaanch:
- Jaanch: M(1, 2) line L par hai: 1 + 3(2) - 7 = 0 ✅
- Jaanch: Slope of PQ = (-4 - 8)/(-1 - 3) = -12/(-4) = 3, aur 3 × (-1/3) = -1 (perpendicular) ✅
- Jaanch: Midpoint of P(3, 8) aur Q(-1, -4) = ((3 - 1)/2, (8 - 4)/2) = (1, 2) = M ✅

---

### Problem 4.2: Reflection Of A Ray Of Light Off The x-Axis
**Sawaal:** Point A(1, 2) se ek ray of light x-axis par point P par reflect hokar point B(5, 3) se guzarti hai. Point P ke coordinates gyat karo.

**Solution:**
Law of reflection ke mutabiq, angle of incidence = angle of reflection.
Iska seedha geometric matlab hai: agar hum B(5, 3) ka x-axis mein **mirror image B'(5, -3)** lein, to A(1, 2), P(x, 0), aur B'(5, -3) ek hi seedhi line (collinear) par honge!

```
          y
          ^               * B(5, 3)
          :             /
      A(1,2)*         /
          :   \     /
   -------+----*---+---------> x
          O  P(x,0) \
          :           \
          :            * B'(5, -3)
```

Slope of AP = Slope of AB':
(0 - 2) / (x - 1) = (-3 - 2) / (5 - 1)
-2 / (x - 1) = -5 / 4

Cross-multiply karne par:
-8 = -5(x - 1)
8 = 5x - 5
5x = 13 => x = 13/5.

Isliye reflection point **P = (13/5, 0)**.

Jaanch:
- Jaanch: Slope of AP = (0 - 2)/(13/5 - 1) = -2/(8/5) = -5/4; Slope of PB = (3 - 0)/(5 - 13/5) = 3/(12/5) = +5/4. Dono slopes ka magnitude equal aur sign opposite hai (equal reflection angles!) ✅

---

### Problem 4.3: Family Of Lines With A Distance-From-Origin Constraint
**Sawaal:** Lines x + y - 3 = 0 aur 2x - y = 0 ke intersection point se guzarne wali un sabhi lines ki equations gyat karo jinki origin (0, 0) se perpendicular doori 2 units hai.

**Solution:**
Intersection point (ya family se seedhe):
x + y = 3 aur y = 2x ko solve karne par intersection point P = (1, 2) milta hai.
(Family of lines se bhi: (x + y - 3) + λ(2x - y) = 0.)

Maan lo required line ka slope m hai aur yeh P(1, 2) se guzarti hai:
y - 2 = m(x - 1)
mx - y + (2 - m) = 0.

Origin (0, 0) se is line ki perpendicular doori = 2:
|m(0) - 0 + (2 - m)| / √(m² + (-1)²) = 2
|2 - m| = 2 √(m² + 1)

Dono taraf square karo:
(2 - m)² = 4(m² + 1)
4 - 4m + m² = 4m² + 4
3m² + 4m = 0
m(3m + 4) = 0
=> **m = 0**  ya  **m = -4/3**.

- Jab m = 0: y - 2 = 0 => **y = 2**.
- Jab m = -4/3: (-4/3)x - y + (2 + 4/3) = 0 => -4x - 3y + 10 = 0 => **4x + 3y - 10 = 0**.

Jaanch:
- Jaanch (y = 2): P(1, 2) par 2 = 2 aur origin se doori |0 - 2|/1 = 2 ✅
- Jaanch (4x + 3y - 10 = 0): P(1, 2) par 4 + 6 - 10 = 0 aur origin se doori |-10|/√(16 + 9) = 10/5 = 2 ✅

---

### Problem 4.4: Equation And Length Of An Altitude In A Triangle
**Sawaal:** Triangle ABC ke vertices A(2, 3), B(4, -1), aur C(1, 2) hain. Vertex A se side BC par daale gaye altitude ki equation aur uski lambai gyat karo.

**Solution:**
1. **Side BC ka slope aur equation:**
   m_BC = (2 - (-1)) / (1 - 4) = 3 / (-3) = -1.
   Equation of BC through C(1, 2):
   y - 2 = -1(x - 1) => **x + y - 3 = 0**.

2. **Altitude AD ki equation (A(2, 3) se guzarne wali aur BC par perpendicular):**
   m_AD = -1 / m_BC = -1 / (-1) = 1.
   y - 3 = 1(x - 2) => **x - y + 1 = 0**.

3. **Altitude AD ki lambai = Point A(2, 3) se line BC (x + y - 3 = 0) ki perpendicular doori:**
   AD = |1(2) + 1(3) - 3| / √(1² + 1²)
   = |2 + 3 - 3| / √2 = 2 / √2 = **√2 units**.

Jaanch:
- Jaanch: B(4, -1) par 4 - 1 - 3 = 0, C(1, 2) par 1 + 2 - 3 = 0 (BC sahi hai) ✅
- Jaanch: Foot D = intersection of x + y = 3 aur x - y = -1 is (1, 2) = C! Distance AC = √((2 - 1)² + (3 - 2)²) = √2 (kyunki ∠C = 90° hai!) ✅

---

### Problem 4.5: Two Lines Through A Point Making 45° With A Given Line
**Sawaal:** Point (3, 2) se guzarne wali un dono lines ki equations gyat karo jo line x - 2y = 3 ke saath 45° ka angle banati hain.

**Solution:**
Di gayi line x - 2y = 3 ka slope: m₁ = 1/2.
Maan lo required line ka slope m hai aur angle θ = 45° (tan 45° = 1):
|(m - 1/2) / (1 + m/2)| = 1.

Topic 1 ke Example 1.4 ki tarah do cases solve karne par:
- Case 1 (+1): m - 1/2 = 1 + m/2 => m/2 = 3/2 => **m = 3**.
- Case 2 (-1): m - 1/2 = -1 - m/2 => (3/2)m = -1/2 => **m = -1/3**.

Ab point (3, 2) ke saath Point-Slope Form lagao:
- For m = 3: y - 2 = 3(x - 3) => y - 2 = 3x - 9 => **3x - y - 7 = 0**.
- For m = -1/3: y - 2 = (-1/3)(x - 3) => 3y - 6 = -x + 3 => **x + 3y - 9 = 0**.

Jaanch:
- Jaanch (3x - y - 7 = 0): (3, 2) par 9 - 2 - 7 = 0 aur angle with m₁ = 1/2 is 45° ✅
- Jaanch (x + 3y - 9 = 0): (3, 2) par 3 + 6 - 9 = 0 aur angle with m₁ = 1/2 is 45° ✅

---

### Problem 4.6: Points On x-Axis At A Fixed Distance From An Intercept-Form Line
**Sawaal:** x-axis par weh sabhi points gyat karo jinki line x/3 + y/4 = 1 se perpendicular doori 4 units hai.

**Solution:**
Pehle line x/3 + y/4 = 1 ko General Form mein badlo (12 se multiply karke):
4x + 3y - 12 = 0.

x-axis par koi bhi point (x₁, 0) hota hai.
Iski line 4x + 3y - 12 = 0 se doori = 4:
|4x₁ + 3(0) - 12| / √(4² + 3²) = 4
|4x₁ - 12| / 5 = 4
|4x₁ - 12| = 20
Divide by 4: |x₁ - 3| = 5.

- Case 1 (+5): x₁ - 3 = 5 => x₁ = 8 => **(8, 0)**.
- Case 2 (-5): x₁ - 3 = -5 => x₁ = -2 => **(-2, 0)**.

Isliye do required points hain: **(8, 0)** aur **(-2, 0)**.

Jaanch:
- Jaanch (8, 0): |4(8) - 12|/5 = 20/5 = 4 ✅
- Jaanch (-2, 0): |4(-2) - 12|/5 = |-20|/5 = 4 ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Foot of perpendicular ko hi Image (reflection) bata dena
- **Galat soch:** "Point P aur mirror line ka perpendicular intersection M nikaal liya — yahi image hai."
- **Sahi samajh:** M sirf **foot of perpendicular** (mirror ke upar ka point) hai! Image Q mirror ke doosri taraf utni hi doori par hoti hai, yaani **M segment PQ ka midpoint** hota hai.

### Galti 2: Family of lines L₁ + λL₂ = 0 mein equations ko = 0 form mein laaye bina jod dena
- **Galat soch:** "x + y = 3 aur 2x - y = 5 ki family: (x + y + 3) + λ(2x - y + 5) = 0."
- **Sahi samajh:** Hamesha pehle constants ko LHS par laakar **= 0** form banao: (x + y - 3) + λ(2x - y - 5) = 0! Galat sign se poori intersection badal jati hai.

### Galti 3: x-axis mein reflection lete waqt x ka sign badal dena
- **Galat soch:** "B(5, 3) ka x-axis mein reflection (-5, 3) hoga."
- **Sahi samajh:** x-axis ke aar-paar jaane par height (y-coordinate) ulti hoti hai, x nahi! Isliye B(5, 3) ka x-axis mein reflection **(5, -3)** hota hai (aur y-axis mein reflection (-5, 3)).

---

## Quick Recap

- **Foot of perpendicular M(h, k) of (x₁, y₁) on Ax + By + C = 0:** (h - x₁)/A = (k - y₁)/B = -(Ax₁ + By₁ + C)/(A² + B²).
- **Image Q(x₂, y₂):** (x₂ - x₁)/A = (y₂ - y₁)/B = -2(Ax₁ + By₁ + C)/(A² + B²); M is always the midpoint of PQ.
- **Ray reflection off x-axis:** Reflect B(x₂, y₂) to B'(x₂, -y₂); join A to B' to hit the exact reflection point P on the x-axis.
- **Combining tools:** General Form -> Distance Formula -> Quadratic in m -> Two symmetric lines!

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Find the coordinates of the foot of the perpendicular from the point (-1, 3) to the line 3x - 4y - 16 = 0.

**Solution:**
Using the direct foot formula (h - x₁)/A = (k - y₁)/B = -(Ax₁ + By₁ + C)/(A² + B²):
Here (x₁, y₁) = (-1, 3), A = 3, B = -4, C = -16.
Ax₁ + By₁ + C = 3(-1) - 4(3) - 16 = -3 - 12 - 16 = -31.
A² + B² = 9 + 16 = 25.

(h + 1)/3 = (k - 3)/(-4) = -(-31)/25 = 31/25.
h = -1 + 93/25 = 68/25.
k = 3 - 124/25 = (75 - 124)/25 = -49/25.

Foot of perpendicular is (68/25, -49/25).

Jaanch:
- Jaanch: Check on line 3x - 4y - 16: 3(68/25) - 4(-49/25) - 16 = (204 + 196)/25 - 16 = 400/25 - 16 = 16 - 16 = 0 ✅

---

### Question 2
Find the image of the point (1, 2) in the line x - 3y + 4 = 0.

**Solution:**
Using the image formula (x₂ - x₁)/A = (y₂ - y₁)/B = -2(Ax₁ + By₁ + C)/(A² + B²):
Here (x₁, y₁) = (1, 2), A = 1, B = -3, C = 4.
Ax₁ + By₁ + C = 1(1) - 3(2) + 4 = 1 - 6 + 4 = -1.
A² + B² = 1 + 9 = 10.

(x₂ - 1)/1 = (y₂ - 2)/(-3) = -2(-1)/10 = 1/5.
x₂ = 1 + 1/5 = 6/5.
y₂ = 2 - 3/5 = 7/5.

Image is (6/5, 7/5).

Jaanch:
- Jaanch: Midpoint M = ((1 + 6/5)/2, (2 + 7/5)/2) = (11/10, 17/10). On line: 11/10 - 51/10 + 4 = -40/10 + 4 = 0 ✅

---

### Question 3
A ray of light passing through the point (2, 3) reflects on the x-axis at point Q and the reflected ray passes through the point (6, 5). Find the coordinates of Q.

**Solution:**
Reflect B(6, 5) in the x-axis to get B'(6, -5).
Line joining A(2, 3) and B'(6, -5) intersects x-axis at Q(x, 0):
Slope of AQ = Slope of AB':
(0 - 3)/(x - 2) = (-5 - 3)/(6 - 2) = -8/4 = -2
-3 = -2(x - 2) = -2x + 4
2x = 7 => x = 7/2.

Coordinates of Q are (7/2, 0).

Jaanch:
- Jaanch: Slope of AQ = -3/(3/2) = -2; Slope of QB = 5/(5/2) = +2 (equal reflection angles!) ✅

---

### Question 4
Find the value of k so that the three lines 3x + y - 2 = 0, kx + 2y - 3 = 0, and 2x - y - 3 = 0 may intersect at one point (be concurrent).

**Solution:**
First find the intersection of the two known lines:
3x + y = 2  --- (1)
2x - y = 3  --- (2)

Adding (1) and (2): 5x = 5 => x = 1.
From (1): 3(1) + y = 2 => y = -1.

For concurrency, (1, -1) must lie on kx + 2y - 3 = 0:
k(1) + 2(-1) - 3 = 0 => k - 5 = 0 => k = 5.

Jaanch:
- Jaanch: (1, -1) satisfies 3(1) + (-1) - 2 = 0, 5(1) + 2(-1) - 3 = 0, and 2(1) - (-1) - 3 = 0 ✅

---

### Question 5
Find the equation of the line passing through the intersection of 4x + 7y - 3 = 0 and 2x - 3y + 1 = 0 that has equal intercepts on the axes.

**Solution:**
A line with equal intercepts has slope m = -1 (since x/a + y/a = 1 => x + y = a).
Family of lines: (4x + 7y - 3) + λ(2x - 3y + 1) = 0
(4 + 2λ)x + (7 - 3λ)y + (-3 + λ) = 0.

For slope = -1, coefficients of x and y must be equal:
4 + 2λ = 7 - 3λ
5λ = 3 => λ = 3/5.

Substitute λ = 3/5:
(4 + 6/5)x + (7 - 9/5)y + (-3 + 3/5) = 0
(26/5)x + (26/5)y - 12/5 = 0
Multiply by 5 and divide by 2:
13x + 13y - 6 = 0.

Jaanch:
- Jaanch: Intersection of 4x + 7y = 3 and 2x - 3y = -1 is (1/13, 5/13). Check in 13x + 13y - 6: 1 + 5 - 6 = 0, and both intercepts = 6/13 ✅

---

### Question 6
Find the equation of the line equidistant from the two parallel lines 9x + 6y - 7 = 0 and 3x + 2y + 6 = 0.

**Solution:**
Divide the first equation by 3 to match the coefficients of x and y:
L₁: 3x + 2y - 7/3 = 0
L₂: 3x + 2y + 6 = 0

The line exactly midway between L₁ and L₂ has constant term C = (C₁ + C₂)/2:
C = (-7/3 + 6) / 2 = (11/3) / 2 = 11/6.

Equation: 3x + 2y + 11/6 = 0
Multiply by 6:
18x + 12y + 11 = 0.

Jaanch:
- Jaanch: Distance from L₁ to midway line = |11/6 - (-7/3)|/√13 = (25/6)/√13; Distance from L₂ = |6 - 11/6|/√13 = (25/6)/√13 ✅

---

### Question 7
Find the area of the triangle formed by the lines y - x = 0, x + y = 0, and x - 4 = 0.

**Solution:**
Find the three vertices by solving pairs of equations:
- Intersection of y = x and y = -x: A(0, 0).
- Intersection of y = x and x = 4: B(4, 4).
- Intersection of y = -x and x = 4: C(4, -4).

Base BC lies on vertical line x = 4 from y = -4 to y = 4, so length BC = 4 - (-4) = 8 units.
Height from A(0, 0) to x = 4 is 4 units.
Area = (1/2) × 8 × 4 = 16 sq units.

Jaanch:
- Jaanch: Coordinate area formula (1/2)|0 + 4(-4 - 0) + 4(0 - 4)| = (1/2)|-32| = 16 sq units ✅

---

### Question 8
Find the equations of the lines passing through the point (1, 0) at a distance of √3/2 from the origin.

**Solution:**
Let slope of the line be m. Equation through (1, 0):
y = m(x - 1) => mx - y - m = 0.

Distance from origin (0, 0) is √3/2:
|-m| / √(m² + 1) = √3 / 2
Squaring both sides:
m² / (m² + 1) = 3/4
4m² = 3m² + 3 => m² = 3 => m = ±√3.

Equations:
- For m = √3: √3 x - y - √3 = 0.
- For m = -√3: -√3 x - y + √3 = 0 => √3 x + y - √3 = 0.

Jaanch:
- Jaanch: Both pass through (1, 0) and origin distance is |-√3|/√(3 + 1) = √3/2 ✅

---

### Question 9
Show that the perpendicular distance of the point (a, b) from the line x/a + y/b = 1 is |ab| / √(a² + b²).

**Solution:**
Convert x/a + y/b = 1 to general form by multiplying by ab:
bx + ay - ab = 0.

Distance of (a, b) from bx + ay - ab = 0:
d = |b(a) + a(b) - ab| / √(b² + a²)
= |2ab - ab| / √(a² + b²)
= |ab| / √(a² + b²).

Jaanch:
- Jaanch: Test with a = 3, b = 4: line is 4x + 3y - 12 = 0, distance from (3, 4) is |12 + 12 - 12|/5 = 12/5 = |3·4|/√(9 + 16) ✅

---

### Question 10
A line is such that its segment between the lines 5x - y + 4 = 0 and 3x + 4y - 4 = 0 is bisected at the point (1, 5). Obtain its equation.

**Solution:**
Let the segment meet L₁ (5x - y + 4 = 0) at P(x₁, y₁) and L₂ (3x + 4y - 4 = 0) at Q(x₂, y₂).
Since (1, 5) is the midpoint of PQ:
x₂ = 2 - x₁  and  y₂ = 10 - y₁.

P lies on L₁: 5x₁ - y₁ + 4 = 0 => y₁ = 5x₁ + 4  --- (1)
Q lies on L₂: 3(2 - x₁) + 4(10 - y₁) - 4 = 0
6 - 3x₁ + 40 - 4y₁ - 4 = 0
3x₁ + 4y₁ = 42  --- (2)

Substitute (1) into (2):
3x₁ + 4(5x₁ + 4) = 42
23x₁ + 16 = 42 => 23x₁ = 26 => x₁ = 26/23.
y₁ = 5(26/23) + 4 = (130 + 92)/23 = 222/23.

Now slope of line through P(26/23, 222/23) and (1, 5) = (23/23, 115/23):
m = (222 - 115) / (26 - 23) = 107 / 3.

Equation through (1, 5):
y - 5 = (107/3)(x - 1)
3y - 15 = 107x - 107
107x - 3y - 92 = 0.

Jaanch:
- Jaanch: (1, 5) par 107 - 15 - 92 = 0; P(26/23, 222/23) par 107(26) - 3(222) - 92(23) = 2782 - 666 - 2116 = 0 ✅

---

### Question 11
Find the angle between the lines y - √3 x - 5 = 0 and √3 y - x + 6 = 0.

**Solution:**
Slope of first line: m₁ = √3.
Slope of second line: m₂ = 1/√3.

Acute angle θ:
tan θ = |(√3 - 1/√3) / (1 + √3 · (1/√3))|
= |(2/√3) / 2| = 1/√3 => θ = 30°.
Obtuse angle = 180° - 30° = 150°.

Jaanch:
- Jaanch: m₁ = tan 60°, m₂ = tan 30°, difference = 30° ✅

---

### Question 12
Find the equation of the right bisector (perpendicular bisector) of the line segment joining the points (3, 4) and (-1, 2).

**Solution:**
Midpoint M of (3, 4) and (-1, 2):
M = ((3 - 1)/2, (4 + 2)/2) = (1, 3).

Slope of segment: m₁ = (2 - 4)/(-1 - 3) = (-2)/(-4) = 1/2.
Slope of perpendicular bisector: m₂ = -1 / (1/2) = -2.

Equation through M(1, 3) with slope -2:
y - 3 = -2(x - 1) => 2x + y - 5 = 0.

Jaanch:
- Jaanch: M(1, 3) par 2(1) + 3 - 5 = 0, aur slope product (1/2)(-2) = -1 ✅

---

## Chapter Wrap-up Table

| Concept | Key Formula | Golden Rule / Pehchan |
|---|---|---|
| **Slope & Inclination** | m = tan θ = (y₂ - y₁)/(x₂ - x₁) | 0° ≤ θ < 180° anticlockwise from +x-axis; vertical line slope undefined |
| **Collinearity of A, B, C** | m_AB = m_BC | Common point B + equal slopes => same straight line |
| **Angle Between Two Lines** | tan θ = abs((m₂ - m₁)/(1 + m₁m₂)) | Acute angle θ; obtuse = 180° - θ; use ± tan θ to find unknown slopes |
| **Parallel & Perpendicular** | Parallel: m₁ = m₂<br>Perpendicular: m₁ · m₂ = -1 | Special cases of tan θ formula (θ = 0° and θ = 90°) |
| **Point-Slope & Two-Point** | y - y₁ = m(x - x₁)<br>y - y₁ = [(y₂ - y₁)/(x₂ - x₁)] · (x - x₁) | Best when a point + slope or two points are given |
| **Slope-Intercept** | y = mx + c  (y-intercept c)<br>y = m(x - d)  (x-intercept d) | Don't confuse x-intercept d with y-intercept c! |
| **Intercept Form** | x/a + y/b = 1 | Non-zero signed intercepts a, b; RHS is always 1 |
| **Normal Form** | x cos ω + y sin ω = p | p > 0 is origin-to-line perpendicular length; ω is normal angle in [0°, 360°) |
| **General Equation** | Ax + By + C = 0 | m = -A/B, a = -C/A, b = -C/B; for Normal Form make RHS positive before dividing by √(A² + B²) |
| **Point-to-Line Distance** | d = abs(Ax₁ + By₁ + C) / √(A² + B²) | Always non-negative; origin distance = abs(C) / √(A² + B²) |
| **Parallel Lines Distance** | d = abs(C₁ - C₂) / √(A² + B²) | Make A and B IDENTICAL in both equations first! |
| **Family of Lines** | L₁ + λL₂ = 0 | Every line through intersection of L₁ = 0 and L₂ = 0 without solving for intersection |
| **Foot & Mirror Image** | (h - x₁)/A = (k - y₁)/B = -(Ax₁ + By₁ + C)/(A² + B²) | For image replace minus with -2 (foot is midpoint of point & image) |

---

Ab tumne Straight Lines ke har form, har distance formula, aur mirror/reflection applications ko poori tarah master kar liya hai!

Agle chapter **Conic Sections** mein hum seedhi lines se aage badhkar khoobsurat curves ki duniya mein kadam rakhenge — **Circles, Parabolas, Ellipses, aur Hyperbolas**, jo ek double cone ko alag-alag angles par kaatne se bante hain!
