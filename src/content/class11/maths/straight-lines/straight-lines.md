# Chapter: Straight Lines

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla chapter [sequences-and-series-part5.md](../sequences-and-series/sequences-and-series-part5.md) tha** (Sequences and Series ka aakhri topic, jiske teaser ne vaada kiya tha ki ab hum algebra ko coordinate plane par utaarenge!). Coordinate plane ki buniyad Class 9 ke [coordinate-geometry.md](../../../class9/maths/coordinate-geometry/coordinate-geometry.md) mein, section formula Class 10 ke [section-formula-and-reflection.md](../../../class10/maths/section-formula-and-reflection/section-formula-and-reflection.md) mein, aur basic slope Class 10 ke [equation-of-a-line.md](../../../class10/maths/equation-of-a-line/equation-of-a-line.md) mein padha tha. Angle derivation ke liye Class 11 Chapter 3 ka compound angle formula kaam aayega: [trigonometric-functions-part3.md](../trigonometric-functions/trigonometric-functions-part3.md).
> **Topics covered in this file:**
> 1. Slope of a Line Aur Angle Between Two Lines

---

# Topic 1: Slope of a Line Aur Angle Between Two Lines

Class 10 ke [equation-of-a-line.md](../../../class10/maths/equation-of-a-line/equation-of-a-line.md) mein tumne seekha tha ki ek line ka slope m = tan θ = (y₂ - y₁)/(x₂ - x₁) hota hai, parallel lines ka slope barabar (m₁ = m₂) hota hai, aur perpendicular lines ke slopes ka product -1 (m₁ · m₂ = -1) hota hai.

Par Class 11 mein hum ek bada sawaal poochhte hain: agar do lines na to parallel hon (angle 0°) aur na hi perpendicular (angle 90°), balki kisi bhi beech ke angle par kaatein — jaise 30°, 45°, ya 60° — to kya hum sirf unke slopes m₁ aur m₂ se unke beech ka exact angle nikaal sakte hain? Bilkul! Is topic mein hum slope ke Class 11 nuances (obtuse inclination, collinearity) aur **Angle Between Two Lines** ka master formula derive karenge!

---

## Gautam ka airport runway layout

Gautam ek naye regional airport ka runway layout planner hai. Blueprint grid par do intersecting airstrip runways bani hui hain:
- Main Runway L₁ ka slope m₁ = 1/2 hai.
- Cross-wind Runway L₂ ka slope m₂ = 3 hai.

Aviation safety rule ke mutabiq, do intersecting runways ke beech ka acute angle kam se kam 30° hona chahiye taaki pilots ko landing ke waqt saaf visibility mile. Gautam ke paas protractor nahi tha — sirf blueprint ke coordinates aur slopes the!

Gautam ne Class 11 ka compound-angle formula yaad kiya:
"Agar L₁ x-axis se α₁ angle banati hai aur L₂ α₂ angle banati hai, to unke beech ka angle θ = α₂ - α₁ hoga! Isliye tan θ = tan(α₂ - α₁) = (m₂ - m₁) / (1 + m₁m₂)!"

Usne turant values rakhi:
tan θ = |(3 - 1/2) / (1 + 3 · 1/2)| = |(5/2) / (5/2)| = 1
=> θ = 45°!

Gautam muskuraaya: "Runways ke beech exact 45° ka acute angle aur 135° ka obtuse angle hai — safety rule 100% pass!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Inclination (θ)** | Kisi line dwara positive x-axis se anticlockwise disha mein banaya gaya angle (0° ≤ θ < 180°) | θ = 120° |
| **Slope / Gradient (m)** | Inclination ka tangent: m = tan θ (jahan θ ≠ 90°) | θ = 120° par m = -√3 |
| **Collinear Points** | Teen ya zyada points jo ek hi seedhi line par sthit hon | m_AB = m_BC |
| **Acute Angle (θ)** | Do intersecting lines ke beech ka chhota angle (0° ≤ θ ≤ 90°) | tan θ = abs((m₂ - m₁)/(1 + m₁m₂)) |
| **Obtuse Angle (φ)** | Do intersecting lines ke beech ka bada angle: φ = 180° - θ | θ = 45° ho to φ = 135° |

---

## Part A: Slope Aur Inclination Ka Class 11 Sharp Recap

Class 10 ke [equation-of-a-line.md](../../../class10/maths/equation-of-a-line/equation-of-a-line.md) se hum jante hain ki do points P(x₁, y₁) aur Q(x₂, y₂) (x₁ ≠ x₂) se guzarne wali line ka slope hota hai:
m = (y₂ - y₁) / (x₂ - x₁) = tan θ

Class 11 mein teen khaas baatein dhyan rakho:
1. **Inclination ki range:** θ hamesha positive x-axis se **anticlockwise** naapa jaata hai aur 0° ≤ θ < 180° hota hai.
   - Agar 0° < θ < 90° (acute angle): slope **positive** (line left se right upar chadhti hai).
   - Agar 90° < θ < 180° (obtuse angle): slope **negative** (line left se right neeche utarti hai). Jaise θ = 120° par m = tan 120° = -√3, aur θ = 135° par m = tan 135° = -1.
   - Agar θ = 0° (horizontal line): m = tan 0° = 0.
   - Agar θ = 90° (vertical line): tan 90° **undefined** (slope define nahi hota).
2. **Collinearity Test via Slope:** Teen points A, B, C ek hi straight line par (collinear) tabhi aur sirf tabhi honge jab:
   Slope of AB = Slope of BC
   (Kyunki point B dono segments mein common hai, aur common point se ek hi slope wali sirf ek line guzar sakti hai!)

---

## Part B: Angle Between Two Lines — Full Derivation ("Kyun"!)

Maan lo do non-vertical lines L₁ aur L₂ hain jinke slopes m₁ aur m₂ hain, aur unke inclinations kramashah α₁ aur α₂ hain (so m₁ = tan α₁ aur m₂ = tan α₂).

Jab yeh dono lines milti hain, to x-axis ke saath ek triangle banta hai. Exterior Angle Theorem ke mutabiq (maan lo α₂ > α₁):
α₂ = α₁ + θ
=> **θ = α₂ - α₁**

```
         y
         ^         / L₂
         :       /
         :     /   theta
         :   /  . ' ' ' L₁
         : / . '
         :. '
   ------+-----+-----+---------> x
         :    alpha1 alpha2
```

Ab dono taraf tan lagate hain, aur Class 11 Ch 3 ([trigonometric-functions-part3.md](../trigonometric-functions/trigonometric-functions-part3.md)) ka compound-angle formula use karte hain:
tan θ = tan(α₂ - α₁)
tan θ = (tan α₂ - tan α₁) / (1 + tan α₁ · tan α₂)
**tan θ = (m₂ - m₁) / (1 + m₁m₂)**   (jahan 1 + m₁m₂ ≠ 0)

### Acute Angle vs Obtuse Angle:
Do intersecting lines ke beech hamesha **do angles** bante hain: ek acute angle θ aur ek supplementary obtuse angle φ = 180° - θ.
- Agar (m₂ - m₁)/(1 + m₁m₂) **positive** aaye, to tan θ > 0 => θ **acute** hai, aur φ = 180° - θ **obtuse** hai.
- Agar (m₂ - m₁)/(1 + m₁m₂) **negative** aaye, to tan θ < 0 => θ **obtuse** hai, aur φ = 180° - θ **acute** hai.

Isliye seedhe **acute angle θ** nikaalne ke liye hum modulus (absolute value) laga dete hain:
**tan θ = |(m₂ - m₁) / (1 + m₁m₂)|**

### Do Khaas Cases (Class 10 Results Ka Asli Proof!):
1. **Parallel lines (θ = 0°):** tan 0° = 0 => m₂ - m₁ = 0 => **m₁ = m₂**.
2. **Perpendicular lines (θ = 90°):** tan 90° undefined hota hai, yaani denominator zero hona chahiye => 1 + m₁m₂ = 0 => **m₁ · m₂ = -1**.

---

## Part C: Given Line Se Fixed Angle θ Banane Wali Lines

Jab hume ek line L₁ (slope m₁) aur ek acute angle θ diya ho, aur doosri line L₂ ka slope m dhoondhna ho:
|(m - m₁) / (1 + m · m₁)| = tan θ

Modulus hatane par hamesha **do cases (+ aur -)** milte hain:
(m - m₁) / (1 + m · m₁) = +tan θ   **ya**   (m - m₁) / (1 + m · m₁) = -tan θ

Iska matlab kisi bhi line ke ek taraf +θ aur doosri taraf -θ angle par **do alag-alag lines** milti hain!

---

## Solved Examples (Step-by-Step With Jaanch)

### Example 1.1: Slope From Points And Obtuse Inclination
**Sawaal:**
(a) Points P(3, -2) aur Q(-1, 4) ko jodne wali line ka slope gyat karo.
(b) Us line ka slope kya hoga jiska inclination 120° hai?

**Solution:**
(a) Yahan (x₁, y₁) = (3, -2) aur (x₂, y₂) = (-1, 4).
m = (y₂ - y₁) / (x₂ - x₁) = (4 - (-2)) / (-1 - 3) = 6 / (-4) = -3/2.

(b) Inclination θ = 120°.
m = tan 120° = tan(180° - 60°) = -tan 60° = -√3.

Jaanch:
- Jaanch (a): Order ulta karke check karo: (-2 - 4) / (3 - (-1)) = -6 / 4 = -3/2 ✅
- Jaanch (b): 120° second quadrant mein hai jahan tan negative hota hai, isliye m = -√3 < 0 ✅

---

### Example 1.2: Proving Collinearity Using Slopes
**Sawaal:** Slope ka upyog karke dikhao ki points A(-2, 1), B(2, 3), aur C(6, 5) collinear hain.

**Solution:**
Segment AB ka slope:
m_AB = (3 - 1) / (2 - (-2)) = 2 / 4 = 1/2.

Segment BC ka slope:
m_BC = (5 - 3) / (6 - 2) = 2 / 4 = 1/2.

Kyunki m_AB = m_BC = 1/2 aur point B dono segments mein common hai, isliye A, B, aur C ek hi straight line par sthit (collinear) hain.

Jaanch:
- Jaanch: m_AC = (5 - 1) / (6 - (-2)) = 4 / 8 = 1/2 = m_AB ✅

---

### Example 1.3: Finding Acute And Obtuse Angles Between Two Lines
**Sawaal:** Do lines jinke slopes 1/2 aur 3 hain, unke beech ka acute angle aur obtuse angle gyat karo.

**Solution:**
Yahan m₁ = 1/2 aur m₂ = 3.
Acute angle θ ke liye:
tan θ = |(m₂ - m₁) / (1 + m₁m₂)|
= |(3 - 1/2) / (1 + (1/2)(3))|
= |(5/2) / (1 + 3/2)|
= |(5/2) / (5/2)|
= |1| = 1.

Kyunki tan 45° = 1:
Acute angle θ = 45°.
Obtuse angle φ = 180° - 45° = 135°.

Jaanch:
- Jaanch: θ + φ = 45° + 135° = 180° aur m₁, m₂ swap karne par |(-5/2)/(5/2)| = 1 hi aata hai ✅

---

### Example 1.4: Finding Slopes Of Lines Making A Given Angle With A Line
**Sawaal:** Ek line ka slope 1/2 hai. Un sabhi lines ke slopes gyat karo jo is line ke saath 45° ka angle banati hain.

**Solution:**
Diya hai m₁ = 1/2 aur θ = 45° (tan 45° = 1).
Maan lo required line ka slope m hai:
|(m - 1/2) / (1 + (1/2)m)| = 1

Modulus hatane par do cases bante hain:
**Case 1 (+1):**
(m - 1/2) / (1 + m/2) = 1
m - 1/2 = 1 + m/2
m - m/2 = 1 + 1/2
m/2 = 3/2
m = 3.

**Case 2 (-1):**
(m - 1/2) / (1 + m/2) = -1
m - 1/2 = -1 - m/2
m + m/2 = -1 + 1/2
(3/2)m = -1/2
m = -1/3.

Isliye do possible slopes hain: m = 3 ya m = -1/3.

Jaanch:
- Jaanch (m = 3): |(3 - 1/2)/(1 + 3/2)| = |(5/2)/(5/2)| = 1 = tan 45° ✅
- Jaanch (m = -1/3): |(-1/3 - 1/2)/(1 - 1/6)| = |(-5/6)/(5/6)| = 1 = tan 45° ✅
- Jaanch (bonus): Dono new lines aapas mein perpendicular hain kyunki 3 × (-1/3) = -1 (45° + 45° = 90°) ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Inclination θ ko clockwise naap lena
- **Galat soch:** "Line positive x-axis se neeche ki taraf 30° par hai, to θ = 30° aur m = tan 30° = 1/√3."
- **Sahi samajh:** Inclination hamesha positive x-axis se **anticlockwise** naapa jaata hai! Agar line clockwise 30° par hai, to anticlockwise inclination θ = 180° - 30° = 150° hoga, aur slope m = tan 150° = -1/√3 hoga.

### Galti 2: Angle formula mein modulus (ya ±) bhool jaana
- **Galat soch:** "45° par line dhoondhni hai to sirf (m - m₁)/(1 + m·m₁) = +1 solve kar diya aur ek hi answer likh diya."
- **Sahi samajh:** Kisi bhi line ke saath 45° ka angle dono taraf (anticlockwise aur clockwise) ban sakta hai! Modulus hatane par hamesha **± tan θ** lena zaroori hai, warna aadha answer chhoot jayega.

### Galti 3: Slope formula mein x aur y ko ulta kar dena
- **Galat soch:** "m = (x₂ - x₁) / (y₂ - y₁)."
- **Sahi samajh:** Slope hamesha **Rise / Run = (Change in y) / (Change in x) = (y₂ - y₁) / (x₂ - x₁)** hota hai.
- **Demonstration:** Points (1, 2) aur (3, 8) ke liye sahi slope = (8 - 2)/(3 - 1) = 6/2 = 3 (na ki 2/6 = 1/3!).

---

## Quick Recap

- **Inclination θ:** Positive x-axis se anticlockwise angle, 0° ≤ θ < 180°.
- **Slope m:** m = tan θ = (y₂ - y₁)/(x₂ - x₁). Vertical line (θ = 90°) ka slope undefined hota hai.
- **Collinearity:** Points A, B, C collinear hain iff m_AB = m_BC.
- **Acute angle between two lines:** tan θ = |(m₂ - m₁) / (1 + m₁m₂)|.
- **Obtuse angle:** φ = 180° - θ.
- **Parallel condition:** m₁ = m₂; **Perpendicular condition:** m₁ · m₂ = -1.

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Find the slope of a line whose inclination with the positive x-axis is: (a) 135° (b) 150°.

**Solution:**
(a) m = tan 135° = tan(180° - 45°) = -tan 45° = -1.
(b) m = tan 150° = tan(180° - 30°) = -tan 30° = -1/√3.

Jaanch:
- Jaanch: Dono angles 90° aur 180° ke beech hain (obtuse), isliye dono slopes negative aaye ✅

---

### Question 2
Find the slope of the line passing through the points (4, -3) and (-2, 9).

**Solution:**
Here (x₁, y₁) = (4, -3) and (x₂, y₂) = (-2, 9).
m = (y₂ - y₁) / (x₂ - x₁) = (9 - (-3)) / (-2 - 4) = 12 / (-6) = -2.

Jaanch:
- Jaanch: Reverse order (-3 - 9) / (4 - (-2)) = -12 / 6 = -2 ✅

---

### Question 3
Find the value of x for which the points (x, -1), (2, 1), and (4, 5) are collinear.

**Solution:**
Let A = (x, -1), B = (2, 1), C = (4, 5).
For collinearity, m_AB = m_BC:
m_BC = (5 - 1) / (4 - 2) = 4 / 2 = 2.
m_AB = (1 - (-1)) / (2 - x) = 2 / (2 - x).

Setting them equal:
2 / (2 - x) = 2
2 - x = 1
x = 1.

Jaanch:
- Jaanch: For x = 1, A(1, -1), B(2, 1), C(4, 5) => m_AB = 2/1 = 2, m_BC = 4/2 = 2 ✅

---

### Question 4
Find the value of x if the line through (x, 2) and (5, 8) is perpendicular to the line through (1, 4) and (7, 2).

**Solution:**
Slope of second line:
m₂ = (2 - 4) / (7 - 1) = -2 / 6 = -1/3.

Since lines are perpendicular, m₁ · m₂ = -1 => m₁ = 3.
Now m₁ = (8 - 2) / (5 - x) = 6 / (5 - x).
6 / (5 - x) = 3
5 - x = 2
x = 3.

Jaanch:
- Jaanch: At x = 3, m₁ = (8 - 2)/(5 - 3) = 6/2 = 3, aur m₁ · m₂ = 3 × (-1/3) = -1 ✅

---

### Question 5
Find the acute angle between two lines whose slopes are √3 and 1/√3.

**Solution:**
Here m₁ = √3 and m₂ = 1/√3.
tan θ = |(1/√3 - √3) / (1 + √3 · (1/√3))|
= |((1 - 3)/√3) / (1 + 1)|
= |(-2/√3) / 2|
= |-1/√3| = 1/√3.

Since tan 30° = 1/√3, the acute angle is θ = 30°.

Jaanch:
- Jaanch: Inclinations directly dekho: tan α₁ = √3 => 60°, tan α₂ = 1/√3 => 30°. Difference = 60° - 30° = 30° ✅

---

### Question 6
Find the acute angle between the lines with slopes -2 and 1/3.

**Solution:**
Here m₁ = -2 and m₂ = 1/3.
tan θ = |(1/3 - (-2)) / (1 + (-2)(1/3))|
= |(7/3) / (1 - 2/3)|
= |(7/3) / (1/3)| = 7.

Therefore, acute angle θ = tan⁻¹(7) (approx 81.87°).

Jaanch:
- Jaanch: Numerator 1/3 + 2 = 7/3, denominator 1 - 2/3 = 1/3, ratio = 7 > 0 ✅

---

### Question 7
The angle between two lines is 45°. If the slope of one of the lines is 2, find the possible slopes of the other line.

**Solution:**
Here m₁ = 2 and tan 45° = 1.
|(m - 2) / (1 + 2m)| = 1.

Case 1 (+1):
m - 2 = 1 + 2m => -m = 3 => m = -3.

Case 2 (-1):
m - 2 = -1 - 2m => 3m = 1 => m = 1/3.

Possible slopes are m = -3 or m = 1/3.

Jaanch:
- Jaanch (m = -3): |(-3 - 2)/(1 - 6)| = |-5/(-5)| = 1 ✅
- Jaanch (m = 1/3): |(1/3 - 2)/(1 + 2/3)| = |(-5/3)/(5/3)| = 1 ✅

---

### Question 8
Using slopes, show that the points A(-2, -1), B(4, 0), C(3, 3), and D(-3, 2) are the vertices of a parallelogram.

**Solution:**
Find the slopes of all four sides:
- m_AB = (0 - (-1)) / (4 - (-2)) = 1/6
- m_CD = (2 - 3) / (-3 - 3) = (-1) / (-6) = 1/6
- m_BC = (3 - 0) / (3 - 4) = 3 / (-1) = -3
- m_DA = (-1 - 2) / (-2 - (-3)) = (-3) / 1 = -3

Since m_AB = m_CD = 1/6 (so AB || CD) and m_BC = m_DA = -3 (so BC || DA), both pairs of opposite sides are parallel. Hence ABCD is a parallelogram.

Jaanch:
- Jaanch: Opposite slopes match (1/6 = 1/6 aur -3 = -3) aur adjacent slopes alag hain (1/6 ≠ -3), isliye points collinear nahi hain ✅

---

### Question 9
Find the angle between the x-axis and the line joining the points (3, -1) and (4, -2).

**Solution:**
Slope of the line:
m = (-2 - (-1)) / (4 - 3) = -1 / 1 = -1.

Since tan θ = -1 and 0° ≤ θ < 180°, the inclination with positive x-axis is θ = 135°.
The acute angle between the line and the x-axis is 180° - 135° = 45°.

Jaanch:
- Jaanch: tan 135° = -1 ✅

---

### Question 10
A line passes through (x₁, y₁) and (h, k). If the slope of the line is m, show that k - y₁ = m(h - x₁).

**Solution:**
By definition of slope of a line passing through (x₁, y₁) and (h, k):
m = (k - y₁) / (h - x₁)

Multiplying both sides by (h - x₁):
k - y₁ = m(h - x₁).

(Yehi relation aage Topic 2 mein Point-Slope Form ka aadhar banega!)

Jaanch:
- Jaanch: Test with (1, 2), (4, 11), m = 3: k - y₁ = 9 aur m(h - x₁) = 3(3) = 9 ✅

---

### Question 11
If three points (h, 0), (a, b), and (0, k) lie on a line, show that a/h + b/k = 1 (given h ≠ 0, k ≠ 0).

**Solution:**
Let A(h, 0), B(a, b), C(0, k).
Since A, B, C are collinear, m_AB = m_BC:
(b - 0) / (a - h) = (k - b) / (0 - a)
b / (a - h) = (k - b) / (-a)

Cross-multiplying:
-ab = (a - h)(k - b)
-ab = ak - ab - hk + hb
0 = ak + hb - hk
ak + hb = hk

Dividing both sides by hk (since h ≠ 0, k ≠ 0):
a/h + b/k = 1.

Jaanch:
- Jaanch: Test with h = 2, k = 4, midpoint (a, b) = (1, 2): 1/2 + 2/4 = 1/2 + 1/2 = 1 ✅

---

### Question 12
The slope of a line is double the slope of another line. If the tangent of the acute angle between them is 1/3, find the slopes of the lines.

**Solution:**
Let the slopes be m and 2m.
Given tan θ = 1/3:
|(2m - m) / (1 + m · 2m)| = 1/3
|m / (1 + 2m²)| = 1/3

Case 1 (+1/3):
m / (1 + 2m²) = 1/3
3m = 1 + 2m²
2m² - 3m + 1 = 0
(2m - 1)(m - 1) = 0
m = 1/2 or m = 1.

Case 2 (-1/3):
m / (1 + 2m²) = -1/3
-3m = 1 + 2m²
2m² + 3m + 1 = 0
(2m + 1)(m + 1) = 0
m = -1/2 or m = -1.

So the pairs of slopes (m, 2m) are: (1/2, 1), (1, 2), (-1/2, -1), or (-1, -2).

Jaanch:
- Jaanch (1/2, 1): |(1 - 1/2)/(1 + 1/2)| = |(1/2)/(3/2)| = 1/3 ✅
- Jaanch (1, 2): |(2 - 1)/(1 + 2)| = 1/3 ✅
- Jaanch (-1, -2): |(-2 - (-1))/(1 + 2)| = |-1/3| = 1/3 ✅

---

Ab tumne slope ke har nuance aur do lines ke beech ka exact angle nikaalna seekh liya hai! Agle topic [straight-lines-part2.md](straight-lines-part2.md) mein hum line ki equations ke sabhi forms dekhenge — khaaskar **Intercept Form (x/a + y/b = 1)** aur **Normal Form (x cos ω + y sin ω = p)**!
