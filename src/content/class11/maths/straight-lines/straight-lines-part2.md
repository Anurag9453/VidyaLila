# Chapter: Straight Lines (Part 2)

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla topic [straight-lines.md](straight-lines.md) tha** (Topic 1: Slope of a Line aur Angle Between Two Lines). Basic slope-intercept, point-slope aur two-point forms Class 10 ke [equation-of-a-line-part2.md](../../../class10/maths/equation-of-a-line/equation-of-a-line-part2.md) aur [equation-of-a-line-part3.md](../../../class10/maths/equation-of-a-line/equation-of-a-line-part3.md) mein padhe the.
> **Topics covered in this file:**
> 1. Various Forms of the Equation of a Line: Point-Slope, Two-Point, Slope-Intercept, Intercept Form, Aur Normal Form

---

# Topic 2: Various Forms of the Equation of a Line

Class 10 ke [equation-of-a-line-part2.md](../../../class10/maths/equation-of-a-line/equation-of-a-line-part2.md) aur [equation-of-a-line-part3.md](../../../class10/maths/equation-of-a-line/equation-of-a-line-part3.md) mein tumne teen classic forms seekhe the: slope-intercept (y = mx + c), point-slope, aur two-point form.

Lekin Class 11 mein do behad khoobsurat aur practical naye forms aate hain:
1. **Intercept Form (x/a + y/b = 1):** Jab hume seedhe pata ho ki line x-axis aur y-axis ko kahan kaat rahi hai!
2. **Normal Form (x cos ω + y sin ω = p):** Jab hume origin se line ki perpendicular doori p aur us perpendicular ka angle ω diya ho!

Chalo in sabhi forms ko ek hi chhat ke neeche samajhte hain aur dekhte hain ki kaun sa form kab sabse tez kaam karta hai!

---

## Vidya ka corner studio glass partition

Vidya ek architectural interior designer hai. Ek rectangular corner studio mein East wall ko x-axis aur North wall ko y-axis maana gaya hai (dono deewaron ka kona origin O(0, 0) hai).

Vidya ko ek diagonal glass partition lagana hai. Client ne use do alag-alag tareekon se brief diya:
- **Plan A (Intercept Brief):** "Glass partition East wall ko 6 meter door (6, 0) par aur North wall ko 4 meter door (0, 4) par chhooni chahiye."
  Vidya ne turant **Intercept Form** likha: x/6 + y/4 = 1 => 2x + 3y = 12!
- **Plan B (Clearance Brief):** "Corner pillar O(0, 0) se glass partition tak kam se kam 5 meter ki seedhi perpendicular clearance (p = 5) honi chahiye, aur wo perpendicular East wall se ω = 30° angle par ho."
  Vidya ne **Normal Form** lagaya: x cos 30° + y sin 30° = 5 => (√3/2)x + (1/2)y = 5 => √3 x + y = 10!

Alag-alag information, alag-alag tailor-made equation form — aur har form sirf 2 line mein exact equation de deta hai!

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **x-intercept (a)** | Jahan line x-axis ko kaatti hai (a, 0); yeh positive ya negative ho sakta hai | (6, 0) par a = 6 |
| **y-intercept (b ya c)** | Jahan line y-axis ko kaatti hai (0, b); yeh positive ya negative ho sakta hai | (0, -4) par b = -4 |
| **Intercept Form** | Dono non-zero intercepts a aur b ke terms mein line ki equation | x/a + y/b = 1 |
| **Normal (Perpendicular)** | Origin O(0, 0) se line par daala gaya 90° wala segment OM | Length = p > 0 |
| **Normal Form** | Origin se perpendicular doori p aur normal ke angle ω ke terms mein equation | x cos ω + y sin ω = p |

---

## Part A: Quick Bridge — Basic Forms (Horizontal, Vertical, Point-Slope, Two-Point, Slope-Intercept)

Class 10 se hum yeh paanch forms pehle se jaante hain:
1. **Horizontal line (x-axis ke parallel):** y = k (sabhi points ka y-coordinate k hai; x-axis khud y = 0 hai).
2. **Vertical line (y-axis ke parallel):** x = h (sabhi points ka x-coordinate h hai; y-axis khud x = 0 hai).
3. **Point-Slope Form:** Point (x₁, y₁) se guzarne wali aur slope m wali line:
   **y - y₁ = m(x - x₁)**
4. **Two-Point Form:** Do points (x₁, y₁) aur (x₂, y₂) se guzarne wali line:
   **y - y₁ = [(y₂ - y₁) / (x₂ - x₁)] (x - x₁)**
5. **Slope-Intercept Form (Do variants!):**
   - Agar slope m aur **y-intercept c** (point (0, c)) diya ho: **y = mx + c**
   - Agar slope m aur **x-intercept d** (point (d, 0)) diya ho: **y = m(x - d)**  *(kyunki line (d, 0) se guzarti hai!)*

---

## Part B: Intercept Form — Full Derivation ("Kyun"!)

Maan lo ek line x-axis ko A(a, 0) par aur y-axis ko B(0, b) par kaatti hai (jahan a ≠ 0 aur b ≠ 0).

Two-Point Form se line AB ki equation:
y - 0 = [(b - 0) / (0 - a)] (x - a)
y = (-b / a) (x - a)

Dono taraf a se multiply karne par:
ay = -bx + ab
bx + ay = ab

Ab dono taraf ab se divide karo (kyunki a ≠ 0, b ≠ 0 => ab ≠ 0):
(bx)/(ab) + (ay)/(ab) = (ab)/(ab)
**x/a + y/b = 1**

```
          y
          ^
          :
      (0, b) *
          :   \
          :    \  x/a + y/b = 1
          :     \
   -------+------*-------> x
          O    (a, 0)
```

### Is Form Ki Khaas Baat:
- a aur b **signed numbers** hain! Agar line x-axis ko negative side par (-3, 0) par kaate, to a = -3 rakhte hain.
- Agar koi line origin (0, 0) se guzarti hai, to a = 0 aur b = 0 hota hai, isliye use Intercept Form mein nahi likh sakte (zero se divide nahi kar sakte!).

---

## Part C: Normal Form — Full Derivation ("Kyun"!)

Maan lo ek line L par origin O(0, 0) se ek perpendicular (normal) OM daala gaya hai jiski:
- Lambai (length) = **p** (hamesha **p > 0**, kyunki yeh doori hai).
- Positive x-axis se anticlockwise angle = **ω** (0° ≤ ω < 360°).

```
           y
           ^
           :    \
           :     \  Line L
           :      * M(p cos w, p sin w)
           :     / \
           :  p /   \
           :   / w   \
   --------+--*-------\------> x
           O
```

### Step-by-Step Derivation:
1. **Foot of perpendicular M ke coordinates:**
   Right triangle mein hypotenuse OM = p aur angle = ω hone par:
   M = (p cos ω, p sin ω).
2. **Normal OM ka slope:**
   m_OM = tan ω = sin ω / cos ω.
3. **Line L ka slope:**
   Kyunki line L, normal OM par perpendicular hai (m_L · m_OM = -1):
   m_L = -1 / tan ω = -cos ω / sin ω.
4. **Point-Slope Form lagao (point M aur slope m_L):**
   y - p sin ω = (-cos ω / sin ω)(x - p cos ω)
   Cross-multiply by sin ω:
   y sin ω - p sin² ω = -x cos ω + p cos² ω
   x-term ko LHS par aur p-terms ko RHS par laao:
   x cos ω + y sin ω = p(cos² ω + sin² ω)

Kyunki cos² ω + sin² ω = 1:
**x cos ω + y sin ω = p**

(Yeh formula horizontal aur vertical cases ω = 0°, 90°, 180°, 270° par bhi bilkul sahi kaam karta hai! Jaise ω = 90° par x(0) + y(1) = p => y = p!)

---

## Solved Examples (Step-by-Step With Jaanch)

### Example 2.1: Point-Slope Form And x-Intercept Variant
**Sawaal:**
(a) Point (-2, 3) se guzarne wali aur slope -4 wali line ki equation gyat karo.
(b) Slope -2 aur x-intercept 4 wali line ki equation gyat karo.

**Solution:**
(a) Point-Slope Form y - y₁ = m(x - x₁) mein x₁ = -2, y₁ = 3, m = -4 rakho:
y - 3 = -4(x - (-2))
y - 3 = -4(x + 2)
y - 3 = -4x - 8
4x + y + 5 = 0.

(b) Slope-x-intercept form y = m(x - d) mein m = -2 aur d = 4 rakho:
y = -2(x - 4)
y = -2x + 8
2x + y - 8 = 0.

Jaanch:
- Jaanch (a): (-2, 3) rakho: 4(-2) + 3 + 5 = -8 + 8 = 0 ✅
- Jaanch (b): (4, 0) rakho: 2(4) + 0 - 8 = 0 aur slope = -2 ✅

---

### Example 2.2: Equation Using Intercept Form (Signed Intercepts)
**Sawaal:** Us line ki equation gyat karo jo x-axis par +6 aur y-axis par -4 ka intercept kaatti hai.

**Solution:**
Yahan a = 6 aur b = -4.
Intercept Form x/a + y/b = 1 mein rakho:
x/6 + y/(-4) = 1
x/6 - y/4 = 1

Dono taraf LCM = 12 se multiply karo:
2x - 3y = 12
2x - 3y - 12 = 0.

Jaanch:
- Jaanch: y = 0 par 2x = 12 => x = 6 (x-intercept = 6) ✅
- Jaanch: x = 0 par -3y = 12 => y = -4 (y-intercept = -4) ✅

---

### Example 2.3: Portion Between Axes Bisected At A Given Point
**Sawaal:** Us line ki equation gyat karo jiska coordinate axes ke beech ka hissa point P(3, 5) par bisect (aadhe mein divide) hota hai.

**Solution:**
Maan lo line x-axis ko A(a, 0) aur y-axis ko B(0, b) par kaatti hai.
Segment AB ka midpoint P(3, 5) hai.
Midpoint formula se:
((a + 0)/2, (0 + b)/2) = (3, 5)
a/2 = 3 => a = 6
b/2 = 5 => b = 10.

Ab Intercept Form x/a + y/b = 1 lagao:
x/6 + y/10 = 1

LCM = 30 se multiply karo:
5x + 3y = 30
5x + 3y - 30 = 0.

Jaanch:
- Jaanch: A(6, 0) aur B(0, 10) ka midpoint ((6+0)/2, (0+10)/2) = (3, 5) ✅
- Jaanch: P(3, 5) line par hai: 5(3) + 3(5) - 30 = 15 + 15 - 30 = 0 ✅

---

### Example 2.4: Equation Using Normal Form
**Sawaal:** Us line ki equation gyat karo jiski origin se perpendicular doori p = 4 hai aur normal positive x-axis se ω = 120° ka angle banata hai.

**Solution:**
Normal Form: x cos ω + y sin ω = p.
Yahan p = 4 aur ω = 120°.
cos 120° = -1/2 aur sin 120° = √3/2.

Values substitute karo:
x(-1/2) + y(√3/2) = 4

Dono taraf 2 se multiply karo:
-x + √3 y = 8
x - √3 y + 8 = 0.

Jaanch:
- Jaanch: Origin se doori check (Topic 3 preview): |8|/√(1² + (-√3)²) = 8/2 = 4 = p ✅
- Jaanch: Foot M = (4 cos 120°, 4 sin 120°) = (-2, 2√3) line par hai: (-2) - √3(2√3) + 8 = -2 - 6 + 8 = 0 ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Intercept Form mein signs bhool jaana ya RHS ko 0 likhna
- **Galat soch:** "x-intercept 6 aur y-intercept -4 hai to x/6 + y/4 = 1, ya x/6 - y/4 = 0."
- **Sahi samajh:** Intercept Form mein RHS hamesha **1** hota hai (0 nahi!), aur b = -4 ka minus sign zaroor lagta hai: x/6 + y/(-4) = 1.

### Galti 2: Normal angle ω ko line ka inclination θ samajh lena
- **Galat soch:** "Line ka inclination 30° hai, to Normal Form mein ω = 30° rakh diya."
- **Sahi samajh:** ω line ka angle nahi, balki origin se line par daale gaye **perpendicular (normal)** ka angle hai! Dono mein 90° ka fark hota hai. Saath hi, p hamesha **positive (p > 0)** hona chahiye.

### Galti 3: x-intercept d ko y = mx + d mein rakh dena
- **Galat soch:** "Slope -2 aur x-intercept 4 hai, to y = -2x + 4."
- **Sahi samajh:** y = mx + c mein c **y-intercept** hota hai! Agar **x-intercept d** diya hai, to point (d, 0) hota hai aur equation **y = m(x - d)** banti hai (yahan y = -2(x - 4) = -2x + 8).

---

## Quick Recap

- **Horizontal / Vertical:** y = k aur x = h.
- **Point-Slope:** y - y₁ = m(x - x₁).
- **Two-Point:** y - y₁ = [(y₂ - y₁)/(x₂ - x₁)] · (x - x₁).
- **Slope-Intercept:** y = mx + c (y-intercept c) aur y = m(x - d) (x-intercept d).
- **Intercept Form:** x/a + y/b = 1 (non-zero signed intercepts a, b).
- **Normal Form:** x cos ω + y sin ω = p (perpendicular distance p > 0, normal angle 0° ≤ ω < 360°).

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Find the equations of the horizontal and vertical lines passing through the point (-5, 7).

**Solution:**
Horizontal line par har point ka y-coordinate same hota hai: y = 7.
Vertical line par har point ka x-coordinate same hota hai: x = -5.

Jaanch:
- Jaanch: (-5, 7) dono equations x = -5 aur y = 7 ko satisfy karta hai ✅

---

### Question 2
Find the equation of the line passing through (2, -5) with slope 3/4.

**Solution:**
Point-Slope Form y - y₁ = m(x - x₁):
y - (-5) = (3/4)(x - 2)
4(y + 5) = 3(x - 2)
4y + 20 = 3x - 6
3x - 4y - 26 = 0.

Jaanch:
- Jaanch: (2, -5) rakho: 3(2) - 4(-5) - 26 = 6 + 20 - 26 = 0 ✅

---

### Question 3
Find the equation of the line passing through the two points (-1, 1) and (2, -4).

**Solution:**
Slope m = (-4 - 1) / (2 - (-1)) = -5 / 3.
Point-Slope Form with (-1, 1):
y - 1 = (-5/3)(x + 1)
3y - 3 = -5x - 5
5x + 3y + 2 = 0.

Jaanch:
- Jaanch: (-1, 1) par -5 + 3 + 2 = 0 aur (2, -4) par 10 - 12 + 2 = 0 ✅

---

### Question 4
Find the equation of the line intersecting the x-axis at a distance of 3 units to the left of origin with slope -2.

**Solution:**
3 units to the left of origin ka matlab x-intercept d = -3 (point (-3, 0)).
Formula y = m(x - d) lagao:
y = -2(x - (-3)) = -2(x + 3) = -2x - 6
2x + y + 6 = 0.

Jaanch:
- Jaanch: (-3, 0) par 2(-3) + 0 + 6 = 0 aur slope = -2 ✅

---

### Question 5
Find the equation of the line cutting off intercepts -3 and 5 on the x-axis and y-axis respectively.

**Solution:**
Here a = -3, b = 5.
Intercept Form: x/(-3) + y/5 = 1.
Multiply by 15:
-5x + 3y = 15
5x - 3y + 15 = 0.

Jaanch:
- Jaanch: y = 0 par x = -3 aur x = 0 par y = 5 ✅

---

### Question 6
Find the equation of the line that passes through (2, 2) and cuts off intercepts on the axes whose sum is 9.

**Solution:**
Let x-intercept = a and y-intercept = b. Given a + b = 9 => b = 9 - a.
Intercept Form: x/a + y/(9 - a) = 1.
Since it passes through (2, 2):
2/a + 2/(9 - a) = 1
2(9 - a) + 2a = a(9 - a)
18 = 9a - a²
a² - 9a + 18 = 0
(a - 6)(a - 3) = 0 => a = 6 or a = 3.

Case 1: a = 6, b = 3 => x/6 + y/3 = 1 => x + 2y - 6 = 0.
Case 2: a = 3, b = 6 => x/3 + y/6 = 1 => 2x + y - 6 = 0.

Jaanch:
- Jaanch: (2, 2) dono mein satisfy hota hai: 2 + 4 - 6 = 0 aur 4 + 2 - 6 = 0 ✅

---

### Question 7
Find the equation of the line whose perpendicular distance from the origin is 5 units and the angle made by the perpendicular with the positive x-axis is 30°.

**Solution:**
Normal Form: x cos ω + y sin ω = p with p = 5, ω = 30°.
x cos 30° + y sin 30° = 5
x(√3/2) + y(1/2) = 5
√3 x + y = 10
√3 x + y - 10 = 0.

Jaanch:
- Jaanch: Foot M = (5√3/2, 5/2) line par hai: √3(5√3/2) + 5/2 - 10 = 15/2 + 5/2 - 10 = 0 ✅

---

### Question 8
Find the equation of the line whose perpendicular distance from the origin is 3 units and the normal makes an angle of 225° with the positive x-axis.

**Solution:**
Normal Form with p = 3, ω = 225°.
cos 225° = cos(180° + 45°) = -1/√2.
sin 225° = sin(180° + 45°) = -1/√2.

x(-1/√2) + y(-1/√2) = 3
-x - y = 3√2
x + y + 3√2 = 0.

Jaanch:
- Jaanch: Foot M = (-3/√2, -3/√2) line par hai: -3/√2 - 3/√2 + 3√2 = -6/√2 + 3√2 = -3√2 + 3√2 = 0 ✅

---

### Question 9
A line passes through the point P(1, 2) such that the portion of the line intercepted between the axes is divided by P in the ratio 1 : 2 (from the x-axis to the y-axis). Find the equation of the line.

**Solution:**
Let the intercepts be A(a, 0) on x-axis and B(0, b) on y-axis.
P(1, 2) divides AB internally in the ratio 1 : 2.
Section formula (Class 10 [section-formula-and-reflection.md](../../../class10/maths/section-formula-and-reflection/section-formula-and-reflection.md)):
x = (1·0 + 2·a) / (1 + 2) = 2a/3 = 1 => a = 3/2.
y = (1·b + 2·0) / (1 + 2) = b/3 = 2 => b = 6.

Intercept Form:
x/(3/2) + y/6 = 1
2x/3 + y/6 = 1
Multiply by 6:
4x + y - 6 = 0.

Jaanch:
- Jaanch: P(1, 2) par 4(1) + 2 - 6 = 0; A(3/2, 0) aur B(0, 6) ka 1:2 division ((2·3/2)/3, 6/3) = (1, 2) ✅

---

### Question 10
Find the equation of the line passing through (-3, 5) and perpendicular to the line joining (2, 5) and (-3, 6).

**Solution:**
Slope of line joining (2, 5) and (-3, 6):
m₁ = (6 - 5) / (-3 - 2) = 1 / (-5) = -1/5.

Slope of perpendicular line: m₂ = -1 / m₁ = 5.
Point-Slope Form through (-3, 5):
y - 5 = 5(x - (-3)) = 5(x + 3) = 5x + 15
5x - y + 20 = 0.

Jaanch:
- Jaanch: (-3, 5) par 5(-3) - 5 + 20 = 0 aur slope = 5 (5 × (-1/5) = -1) ✅

---

### Question 11
Find the equation of a line that makes equal non-zero intercepts on the coordinate axes and passes through the point (4, -1).

**Solution:**
Let equal intercepts be a = b = k (k ≠ 0).
Intercept Form: x/k + y/k = 1 => x + y = k.
Since it passes through (4, -1):
4 + (-1) = k => k = 3.

Equation of the line: x + y = 3 (ya x + y - 3 = 0).

Jaanch:
- Jaanch: (4, -1) par 4 - 1 = 3 aur dono intercepts a = 3, b = 3 barabar hain ✅

---

### Question 12
Find the equation of the line passing through (0, 2) making an angle of 2π/3 (120°) with the positive x-axis. Also find the equation of a line parallel to it and crossing the y-axis at a distance of 2 units below the origin.

**Solution:**
Slope m = tan 120° = -√3.
First line passes through (0, 2), so y-intercept c = 2:
y = -√3 x + 2 => √3 x + y - 2 = 0.

Second line is parallel (same slope m = -√3) and crosses y-axis 2 units below origin (c = -2):
y = -√3 x - 2 => √3 x + y + 2 = 0.

Jaanch:
- Jaanch: (0, 2) pehli line par hai (0 + 2 - 2 = 0), (0, -2) doosri par hai (0 - 2 + 2 = 0), dono ka slope -√3 hai ✅

---

Ab tum har tarah ki geometric information ko seedhe line ki equation mein badalna jaante ho! Agle topic [straight-lines-part3.md](straight-lines-part3.md) mein hum ulta chalenge: kisi bhi **General Equation Ax + By + C = 0** ko alag-alag forms mein badalna, kisi **point ki line se perpendicular doori** nikaalna, aur **Family of Lines** ka shortcut seekhenge!
