# Chapter: Straight Lines (Advanced — Gehrai Mein)

> **Class:** 11 | **Subject:** Mathematics | **Level:** Advanced (Gehrai Mein)
> **Core chapter yahan complete hua tha:** [straight-lines-part4.md](straight-lines-part4.md) (Topic 4: Sab Kuch Mila Kar aur Chapter Wrap-up). Is advanced file mein hum Parametric (Distance) Form of a Line, Position of Points Relative to a Line, Acute & Obtuse Angle Bisectors, aur Shifting of Origin & Euler Line ko gehrai se master karenge!
> **Advanced topics covered in this file:**
> 1. Parametric (Distance) Form of a Line, Same-Side vs Opposite-Side Test, Acute & Obtuse Angle Bisectors, Aur Shifting of Origin & Euler Line (O, G, H)

---

# Gehrai Mein: Parametric Form, Angle Bisectors, Aur Geometric Loci

Core chapter mein tumne 6 standard forms, distance formulas, aur mirror images seekhi thin. Lekin jab sawaal poochhe "Point (2, 3) se line x + y = 7 ki doori, **x-axis se 45° angle par** naapne par kitni hogi?" (yaani perpendicular doori nahi, tirchhi doori!), ya "Do lines ke beech ke **acute angle bisector** ki equation likho" — to yeh chaar advanced tools seedha 3-line solution dete hain!

---

## Vibha ka drone-corridor rangefinder

Vibha ek geospatial drone-mapping surveyor hai. Ek drone station P(1, 2) se exact **θ = 30°** angle par udta hai. Use exact **r = 4 km** door ek checkpoint lagana hai.
Slope-intercept form se quadratic solve karne ke bajay Vibha ne **Parametric Distance Form** lagaya:
**x = x₁ + r cos θ = 1 + 4(√3/2) = 1 + 2√3**
**y = y₁ + r sin θ = 2 + 4(1/2) = 4**
Bina ek bhi quadratic equation banaye, 5 second mein exact 2D checkpoint mil gaya!

---

## Part A: Parametric (Distance) Form Of A Line ("Kyun"!)

Maan lo ek line point P(x₁, y₁) se guzarti hai aur positive x-axis se inclination θ (0° ≤ θ < 180°) banati hai.
Is line par P se signed distance **r** door koi bhi point Q(x, y) lo:
- Horizontal step: x - x₁ = r cos θ
- Vertical step: y - y₁ = r sin θ

Isliye **Parametric Form**:
**(x - x₁) / cos θ = (y - y₁) / sin θ = r**
yaani **x = x₁ + r cos θ**, **y = y₁ + r sin θ**!
- **+r** aage (upar/right) ka point deta hai aur **-r** peechhe (neeche/left) ka exact point deta hai!

---

## Part B: Position Of Two Points Relative To A Line

Line L(x, y) ≡ Ax + By + C = 0 coordinate plane ko do half-planes mein baantti hai:
- Do points P(x₁, y₁) aur Q(x₂, y₂) line ke **SAME side** par hain iff **L(x₁, y₁) · L(x₂, y₂) > 0** (dono ka sign same!).
- **OPPOSITE sides** par hain iff **L(x₁, y₁) · L(x₂, y₂) < 0** (signs opposite!).

---

## Part C: Equations Of Angle Bisectors (Acute vs Obtuse!)

Do intersecting lines L₁ ≡ A₁x + B₁y + C₁ = 0 aur L₂ ≡ A₂x + B₂y + C₂ = 0 ke angle bisector par sthit har point P(x, y) dono lines se **barabar perpendicular doori** par hota hai:
|A₁x + B₁y + C₁| / √(A₁² + B₁²) = |A₂x + B₂y + C₂| / √(A₂² + B₂²)

Modulus hatane par **DO mutually perpendicular bisectors** (+ aur -) milte hain:
**(A₁x + B₁y + C₁) / √(A₁² + B₁²) = ± (A₂x + B₂y + C₂) / √(A₂² + B₂²)**

### Kaun Sa Acute Bisector Hai Aur Kaun Sa Obtuse? (Pakka Sign Rule!)
1. Pehle dono equations mein constant terms **C₁ > 0 aur C₂ > 0** banao (agar negative ho to -1 se multiply karo!).
2. Ab **A₁A₂ + B₁B₂** ka sign dekho:
   - Agar **A₁A₂ + B₁B₂ > 0**: **+ sign => OBTUSE bisector**, **- sign => ACUTE bisector**!
   - Agar **A₁A₂ + B₁B₂ < 0**: **+ sign => ACUTE bisector**, **- sign => OBTUSE bisector**!
   *(Aur + sign hamesha woh bisector deta hai jo **origin (0, 0)** ko contain karta hai!)*

---

## Part D: Shifting Of Origin & Euler Line (O, G, H)

1. **Shifting of Origin:** Agar origin ko (0, 0) se (h, k) par shift kiya jaye (axes parallel rahein), to purane coordinates (x, y) aur naye coordinates (X, Y) ka rishta:
   **x = X + h**, **y = Y + k** (yaani X = x - h, Y = y - k).
2. **Euler Line (Stated, checked on examples):** Kisi bhi triangle mein **Circumcentre (O)**, **Centroid (G)**, aur **Orthocentre (H)** hamesha collinear hote hain, aur **G segment OH ko 1 : 2 ratio mein internally divide karta hai** (OG : GH = 1 : 2)!

---

## 6 Deep Advanced Solved Problems (Step-by-Step With Jaanch)

### Problem 1: Distance Of A Point From A Line Measured Along Another Direction
**Sawaal:** Point P(1, 2) se line x + y - 5 = 0 ki doori, positive x-axis se **θ = 60°** angle banane wali line ke along naapne par kitni hogi?

**Solution:**
Parametric form se P(1, 2) se θ = 60° par r doori wala point:
x = 1 + r cos 60° = 1 + r/2
y = 2 + r sin 60° = 2 + (√3/2)r.

Yeh point line x + y - 5 = 0 par padna chahiye:
(1 + r/2) + (2 + (√3/2)r) - 5 = 0
r(1 + √3)/2 = 2
r = 4 / (√3 + 1) = 4(√3 - 1) / (3 - 1) = **2(√3 - 1) units**!

Jaanch:
- Jaanch: Perpendicular distance of (1, 2) from x + y - 5 = 0 is |1 + 2 - 5|/√2 = √2 ≈ 1.414; oblique distance 2(√3 - 1) ≈ 1.464 > √2 (oblique distance is always ≥ perpendicular distance!) ✅

---

### Problem 2: Finding Two Points At Fixed Distance Along A Line
**Sawaal:** Line 3x - 4y + 5 = 0 par point P(1, 2) se **5 units** ki doori par sthit dono points gyat karo.

**Solution:**
Line ka slope m = tan θ = 3/4 => right triangle 3-4-5 se:
cos θ = 4/5, sin θ = 3/5.

Parametric form with r = ±5:
- **For r = +5:** x = 1 + 5(4/5) = **5**, y = 2 + 5(3/5) = **5** => **(5, 5)**.
- **For r = -5:** x = 1 - 5(4/5) = **-3**, y = 2 - 5(3/5) = **-1** => **(-3, -1)**.

Jaanch:
- Jaanch: (5, 5) par 15 - 20 + 5 = 0 aur dist = √(16 + 9) = 5; (-3, -1) par -9 + 4 + 5 = 0 aur dist = √(16 + 9) = 5 ✅

---

### Problem 3: Acute And Obtuse Angle Bisectors
**Sawaal:** Lines **3x - 4y + 7 = 0** aur **12x + 5y - 2 = 0** ke beech ke **acute angle bisector** ki equation gyat karo.

**Solution:**
Step 1: Dono constants positive banao!
- L₁: 3x - 4y + 7 = 0  (C₁ = +7 > 0)
- L₂: -12x - 5y + 2 = 0  (multiply by -1 so C₂ = +2 > 0!)

Step 2: Check A₁A₂ + B₁B₂:
(3)(-12) + (-4)(-5) = -36 + 20 = **-16 < 0**!
Rule se: jab A₁A₂ + B₁B₂ < 0, to **+ sign ACUTE bisector** deta hai!

Step 3: Acute bisector equation (+ sign):
(3x - 4y + 7) / √(3² + (-4)²) = + (-12x - 5y + 2) / √((-12)² + (-5)²)
(3x - 4y + 7) / 5 = (-12x - 5y + 2) / 13
13(3x - 4y + 7) = 5(-12x - 5y + 2)
39x - 52y + 91 = -60x - 25y + 10
**99x - 27y + 81 = 0** => divide by 9 => **11x - 3y + 9 = 0**!

Jaanch:
- Jaanch: Check angle between acute bisector (m = 11/3) and L₁ (m₁ = 3/4): tan α = |(11/3 - 3/4)/(1 + 11/4)| = |(35/12)/(15/4)| = 7/9 < 1 => α < 45° (true acute bisector!) ✅

---

### Problem 4: Same Side vs Opposite Side Parameter Range
**Sawaal:** Real a ki range gyat karo taaki point P(a, a²) aur origin O(0, 0) line **x + y - 2 = 0** ke **same side** par hon.

**Solution:**
Let L(x, y) = x + y - 2.
L(0, 0) = -2 < 0.
Same side hone ke liye L(a, a²) bhi **negative (< 0)** hona chahiye!
a + a² - 2 < 0
(a + 2)(a - 1) < 0
=> **-2 < a < 1**.

Jaanch:
- Jaanch: Test a = 0 ∈ (-2, 1): P(0, 0) is origin itself (same side!); test a = 2 (out): P(2, 4) gives L = 4 > 0 (opposite side!) ✅

---

### Problem 5: Finding Orthocentre Using Euler Line
**Sawaal:** Ek triangle ka Circumcentre O(2, 3) aur Centroid G(4, 5) hai. Is triangle ka Orthocentre H gyat karo.

**Solution:**
Euler Line se G(4, 5), segment OH ko **1 : 2** ratio mein internally divide karta hai (let H = (h, k)):
- (1·h + 2·2)/3 = 4 => h + 4 = 12 => **h = 8**
- (1·k + 2·3)/3 = 5 => k + 6 = 15 => **k = 9**

Orthocentre **H = (8, 9)**!

Jaanch:
- Jaanch: 1 : 2 internal division of O(2, 3) and H(8, 9) gives ((8 + 4)/3, (9 + 6)/3) = (4, 5) = G ✅

---

### Problem 6: Shifting Origin To Eliminate First-Degree Terms
**Sawaal:** Origin ko kis point (h, k) par shift karein taaki equation **x² + y² - 4x + 6y - 12 = 0** mein x aur y ke linear (first-degree) terms gayab ho jayein? Nayi equation bhi likho.

**Solution:**
Put x = X + h aur y = Y + k:
(X + h)² + (Y + k)² - 4(X + h) + 6(Y + k) - 12 = 0
X² + Y² + (2h - 4)X + (2k + 6)Y + (h² + k² - 4h + 6k - 12) = 0.

Linear terms gayab karne ke liye:
2h - 4 = 0 => **h = 2**; 2k + 6 = 0 => **k = -3** (yeh circle ka centre hai!).

Constant term: 4 + 9 - 8 - 18 - 12 = -25.
Nayi equation: **X² + Y² = 25**!

Jaanch:
- Jaanch: Completing square on original gives (x - 2)² + (y + 3)² = 25 => shifting to (2, -3) gives X² + Y² = 25 ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Angle bisector mein C₁, C₂ positive banaye bina A₁A₂ + B₁B₂ check kar lena
- **Galat soch:** "3x - 4y + 7 = 0 aur 12x + 5y - 2 = 0 mein 3(12) + (-4)(5) = +16 > 0, isliye - sign acute hai."
- **Sahi samajh:** Sign rule **sirf tab kaam karta hai jab C₁ > 0 aur C₂ > 0 dono positive hon**! Doosri equation ko -1 se multiply karne par A₁A₂ + B₁B₂ = **-16 < 0** aata hai!

### Galti 2: Parametric form mein slope m = 3/4 dekhkar cos θ = 3/5 aur sin θ = 4/5 likh dena
- **Galat soch:** "tan θ = 3/4 => cos θ = 3/5, sin θ = 4/5."
- **Sahi samajh:** tan θ = sin θ / cos θ = 3/4 => **sin θ = 3/5** aur **cos θ = 4/5**!

### Galti 3: Euler line mein OG : GH = 2 : 1 likh dena
- **Galat soch:** "G, OH ko 2 : 1 mein baantta hai."
- **Sahi samajh:** **OG : GH = 1 : 2** (Centroid Circumcentre ke zyada paas aur Orthocentre se duguni doori par hota hai)!

---

## Quick Recap

- **Parametric Form:** (x - x₁)/cos θ = (y - y₁)/sin θ = r => (x₁ + r cos θ, y₁ + r sin θ).
- **Same/Opposite Side:** L(x₁, y₁) · L(x₂, y₂) > 0 (same side), < 0 (opposite sides).
- **Angle Bisectors (C₁, C₂ > 0):** A₁A₂ + B₁B₂ < 0 => + is acute; A₁A₂ + B₁B₂ > 0 => - is acute.
- **Origin Shift to (h, k):** x = X + h, y = Y + k.
- **Euler Line:** O, G, H collinear with **OG : GH = 1 : 2**.

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Find the coordinates of the two points on the line passing through (2, 1) with inclination 45° at a distance of 3√2 units from (2, 1).

**Solution:**
cos 45° = sin 45° = 1/√2; r = ±3√2 => r cos 45° = r sin 45° = ±3.
Points: (2 + 3, 1 + 3) = **(5, 4)** and (2 - 3, 1 - 3) = **(-1, -2)**.

Jaanch:
- Jaanch: Distance from (2, 1) to (5, 4) is √(9 + 9) = 3√2 ✅

---

### Question 2
Find the distance of the point (2, 3) from the line 2x - 3y + 9 = 0 measured along the line x - y + 1 = 0.

**Solution:**
Slope of x - y + 1 = 0 is m = 1 => θ = 45° => cos θ = sin θ = 1/√2.
Point at distance r from (2, 3): (2 + r/√2, 3 + r/√2).
Substitute in 2x - 3y + 9 = 0:
2(2 + r/√2) - 3(3 + r/√2) + 9 = 0
4 - r/√2 = 0 => **r = 4√2 units**.

Jaanch:
- Jaanch: Point (6, 7) lies on 2x - 3y + 9 = 0 (12 - 21 + 9 = 0) and distance from (2, 3) is √(16 + 16) = 4√2 ✅

---

### Question 3
Determine whether the points (1, 2) and (3, -1) lie on the same side or opposite sides of the line 2x + 3y - 6 = 0.

**Solution:**
L(1, 2) = 2 + 6 - 6 = +2 (> 0).
L(3, -1) = 6 - 3 - 6 = -3 (< 0).
Since L(1, 2) · L(3, -1) = -6 < 0, they lie on **opposite sides**.

Jaanch:
- Jaanch: Signs are +2 and -3 (opposite) ✅

---

### Question 4
Find the equations of both angle bisectors of the lines 3x + 4y - 7 = 0 and 4x + 3y - 5 = 0.

**Solution:**
Both have √(A² + B²) = 5:
(3x + 4y - 7)/5 = ± (4x + 3y - 5)/5.
- + sign: 3x + 4y - 7 = 4x + 3y - 5 => **x - y + 2 = 0**.
- - sign: 3x + 4y - 7 = -4x - 3y + 5 => **7x + 7y - 12 = 0**.

Jaanch:
- Jaanch: Bisectors are perpendicular: slope 1 × (-1) = -1 ✅

---

### Question 5
Identify which of the two bisectors in Question 4 is the **acute** angle bisector.

**Solution:**
Make C₁, C₂ > 0:
L₁: -3x - 4y + 7 = 0; L₂: -4x - 3y + 5 = 0.
A₁A₂ + B₁B₂ = (-3)(-4) + (-4)(-3) = +24 > 0 => **- sign gives the ACUTE bisector**:
(-3x - 4y + 7) = -(-4x - 3y + 5) => -3x - 4y + 7 = 4x + 3y - 5 => **7x + 7y - 12 = 0**!

Jaanch:
- Jaanch: Slopes of L₁ (-3/4) and L₂ (-4/3) are close to -1, so their acute bisector has slope -1 (7x + 7y - 12 = 0) ✅

---

### Question 6
If the origin is shifted to (2, -1), find the new equation of the line 3x - 2y + 5 = 0.

**Solution:**
Put x = X + 2, y = Y - 1:
3(X + 2) - 2(Y - 1) + 5 = 0 => **3X - 2Y + 13 = 0**.

Jaanch:
- Jaanch: Shifting origin does NOT change the slope of a line (still 3/2) ✅

---

### Question 7
In a triangle, the Orthocentre is (6, 1) and the Circumcentre is (0, 4). Find the Centroid.

**Solution:**
G divides O(0, 4) to H(6, 1) in ratio 1 : 2:
G = ((1·6 + 2·0)/3, (1·1 + 2·4)/3) = **(2, 3)**.

Jaanch:
- Jaanch: Vector OG = (2, -1), GH = (4, -2) = 2 × OG ✅

---

### Question 8
Find the equation of the bisector of the angle containing the origin between the lines 4x - 3y + 10 = 0 and 5x + 12y - 4 = 0.

**Solution:**
Make constants positive:
L₁: 4x - 3y + 10 = 0 (C₁ = 10 > 0); L₂: -5x - 12y + 4 = 0 (C₂ = 4 > 0).
Origin-containing bisector is ALWAYS the **+ sign**:
(4x - 3y + 10)/5 = (-5x - 12y + 4)/13
52x - 39y + 130 = -25x - 60y + 20
**77x + 21y + 110 = 0**.

Jaanch:
- Jaanch: Origin (0, 0) gives +10/5 > 0 and +4/13 > 0 (same positive sign => + bisector!) ✅

---

### Question 9
Find the point on the line 3x + 4y = 12 which is at a distance of 5 units from (4, 0) and has positive y-coordinate.

**Solution:**
Line slope m = -3/4 => cos θ = -4/5, sin θ = 3/5 (since θ ∈ (90°, 180°)).
From (4, 0) with r = +5:
x = 4 + 5(-4/5) = **0**, y = 0 + 5(3/5) = **3** => **(0, 3)**.

Jaanch:
- Jaanch: (0, 3) lies on 3x + 4y = 12 and distance from (4, 0) is √(16 + 9) = 5 ✅

---

### Question 10
Find the range of k if the point (k, 2) lies inside the triangle formed by x = 0, y = 0, and x + y = 5.

**Solution:**
Interior of the triangle requires: x > 0, y > 0, and x + y < 5.
For (k, 2): k > 0, 2 > 0 (true), and k + 2 < 5 => k < 3.
Range: **0 < k < 3**.

Jaanch:
- Jaanch: Test k = 1 -> (1, 2) has 1 > 0, 2 > 0, 1 + 2 = 3 < 5 ✅

---

### Question 11
A line through P(2, 3) makes an angle of 30° with the positive x-axis and meets the line x - 2y + 1 = 0 at Q. Find length PQ.

**Solution:**
Q = (2 + r√3/2, 3 + r/2). Substitute in x - 2y + 1 = 0:
(2 + r√3/2) - 2(3 + r/2) + 1 = 0
-3 + r(√3/2 - 1) = 0 => r = 6 / (√3 - 2) = -6(2 + √3).
Distance PQ = |r| = **6(2 + √3) units**.

Jaanch:
- Jaanch: Distance is always |r| > 0 (negative r simply means Q lies in the backward direction from P!) ✅

---

### Question 12
Find the new coordinates of the point (5, -2) when the origin is shifted to (3, 4).

**Solution:**
X = x - h = 5 - 3 = **2**; Y = y - k = -2 - 4 = **-6**.
New coordinates: **(2, -6)**.

Jaanch:
- Jaanch: x = X + h = 2 + 3 = 5, y = Y + k = -6 + 4 = -2 ✅

---

Ab tumne **Straight Lines** ke sabse sharp advanced tools — Parametric Distance Form, Same/Opposite Side Test, Acute/Obtuse Angle Bisectors, aur Euler Line — ko master kar liya hai!
