# Chapter: Complex Numbers and Quadratic Equations (Advanced — Gehrai Mein)

> **Class:** 11 | **Subject:** Mathematics | **Level:** Advanced (Gehrai Mein)
> **Core chapter yahan complete hua tha:** [complex-numbers-and-quadratic-equations-part5.md](complex-numbers-and-quadratic-equations-part5.md) (Topic 5: Sab Kuch Mila Kar aur Chapter Wrap-up). Is advanced file mein hum Cube Roots of Unity (1, ω, ω²), Complex Triangle Inequality & Argand Loci, De Moivre's Theorem, aur Quadratic Location of Roots ko gehrai se master karenge!
> **Advanced topics covered in this file:**
> 1. Cube Roots of Unity (1, ω, ω²), Triangle Inequality & Argand Plane Loci, De Moivre's Power Rule, Aur Location of Roots of Quadratic Equations

---

# Gehrai Mein: Cube Roots of Unity, Argand Loci, Aur Location of Roots

Core chapter mein tumne complex algebra, modulus-conjugate, aur polar form seekhe the. Lekin advanced complex numbers ka asli maza tab aata hai jab **z³ = 1** ke teen roots **1, ω, ω²** badi-badi expressions ko 2 lines mein zero bana dete hain, aur **Triangle Inequality** bina calculus ke |z| ke exact maximum-minimum de deti hai!

---

## Lopa ka 3-phase AC motor balancer

Lopa ek electrical factory mein 3-phase AC induction motor engineer hai. 3-phase power line mein teen equal-strength voltage vectors ek doosre se exact **120°** ke angle par lagte hain:
- Phase 1: **1** (angle 0°)
- Phase 2: **ω = cos 120° + i sin 120° = (-1 + i√3)/2**
- Phase 3: **ω² = cos 240° + i sin 240° = (-1 - i√3)/2**

Jab teeno phases balanced hote hain, to neutral wire mein net current **1 + ω + ω² = 0** hota hai! Yehi 3-phase balance mathematics mein **Cube Roots of Unity** kehlata hai!

---

## Part A: Cube Roots Of Unity (1, ω, ω²)

Equation **z³ - 1 = 0** ko factor karo:
(z - 1)(z² + z + 1) = 0
=> z = 1   ya   z = (-1 ± i√3) / 2.

Hum ek complex root ko **ω = (-1 + i√3)/2** naam dete hain; iska square karne par doosra root **ω² = (-1 - i√3)/2** mil jata hai!

### Do Golden Identities:
1. **1 + ω + ω² = 0**   *(isliye 1 + ω = -ω², 1 + ω² = -ω, ω + ω² = -1!)*
2. **ω³ = 1**   *(isliye ω^(3k) = 1, ω^(3k + 1) = ω, ω^(3k + 2) = ω²!)*
- Saath hi: **ω̄ = ω² = 1/ω**, aur **|ω| = 1**.

---

## Part B: Triangle Inequality & Argand Plane Loci

Kisi bhi do complex numbers z₁ aur z₂ ke liye:
**||z₁| - |z₂|| ≤ |z₁ + z₂| ≤ |z₁| + |z₂|**
**||z₁| - |z₂|| ≤ |z₁ - z₂| ≤ |z₁| + |z₂|**

### Key Argand Plane Loci (Geometry in Complex Form!):
1. **|z - z₀| = r** -> **Circle** with centre z₀ and radius r.
2. **|z - z₁| = |z - z₂|** -> **Perpendicular bisector** of the line segment joining z₁ and z₂.
3. **|z - z₁| + |z - z₂| = 2a** (jahan 2a > |z₁ - z₂|) -> **Ellipse** with foci z₁ and z₂!

---

## Part C: De Moivre's Theorem (Integer Powers In Polar Form)

Kisi bhi integer n ∈ Z ke liye:
**(cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ)**   *(stated, checked by induction / compound angle multiplication!)*

Example: [cos(π/6) + i sin(π/6)]⁶ = cos(π) + i sin(π) = -1 + 0i = **-1**!

---

## Part D: Location Of Roots Of A Quadratic f(x) = ax² + bx + c = 0 (a > 0)

Maan lo parabola y = f(x) = ax² + bx + c (a > 0, opens upward) ke roots α, β hain, aur vertex x = -b/(2a) par hai:

1. **Both roots strictly greater than k (α, β > k):**
   Teen conditions ek saath: (i) **D ≥ 0** (real roots), (ii) **-b/(2a) > k** (vertex right of k), (iii) **f(k) > 0**!
2. **Both roots strictly less than k (α, β < k):**
   (i) **D ≥ 0**, (ii) **-b/(2a) < k**, (iii) **f(k) > 0**!
3. **k lies strictly BETWEEN the two roots (α < k < β):**
   Sirf **EK** condition kaafi hai: **f(k) < 0**! *(Kyunki upward parabola agar x = k par negative hai, to use k ke left aur right dono taraf x-axis ko kaatna hi padega!)*

---

## 6 Deep Advanced Solved Problems (Step-by-Step With Jaanch)

### Problem 1: Evaluating A High-Power Expression With ω
**Sawaal:** Agar ω non-real cube root of unity ho, to evaluate karo: **(1 - ω + ω²)⁵ + (1 + ω - ω²)⁵**.

**Solution:**
Identity 1 + ω + ω² = 0 se:
- 1 + ω² = -ω => 1 - ω + ω² = -ω - ω = **-2ω**.
- 1 + ω = -ω² => 1 + ω - ω² = -ω² - ω² = **-2ω²**.

Substitute karo:
(-2ω)⁵ + (-2ω²)⁵ = -32 ω⁵ - 32 ω¹⁰
Kyunki ω³ = 1: ω⁵ = ω² aur ω¹⁰ = (ω³)³ · ω = ω:
= -32(ω² + ω) = -32(-1) = **32**!

Jaanch:
- Jaanch: ω + ω² = -1 => -32(-1) = +32 (pure real integer!) ✅

---

### Problem 2: Max & Min Of |z| Using Triangle Inequality
**Sawaal:** Agar **|z - 4/z| = 2** ho, to |z| ki exact **maximum** aur **minimum** values gyat karo.

**Solution:**
Triangle inequality se:
||z| - |4/z|| ≤ |z - 4/z| = 2.
Let r = |z| (> 0). Tab |r - 4/r| ≤ 2 => **-2 ≤ r - 4/r ≤ 2**!

1. Right inequality: r - 4/r ≤ 2 => r² - 2r - 4 ≤ 0 => roots are 1 ± √5 => **r ≤ 1 + √5**.
2. Left inequality: r - 4/r ≥ -2 => r² + 2r - 4 ≥ 0 => positive root is -1 + √5 => **r ≥ √5 - 1**.

Isliye **Max |z| = √5 + 1** aur **Min |z| = √5 - 1**!

Jaanch:
- Jaanch: Test real z = √5 + 1: 4/z = 4/(√5 + 1) = √5 - 1 => |z - 4/z| = (√5 + 1) - (√5 - 1) = 2 ✅

---

### Problem 3: Argand Plane Locus |z - 2i| = |z + 2|
**Sawaal:** Complex equation **|z - 2i| = |z + 2|** ka Cartesian locus gyat karo.

**Solution:**
Put z = x + iy:
|x + i(y - 2)| = |(x + 2) + iy|
Square both sides:
x² + (y - 2)² = (x + 2)² + y²
x² + y² - 4y + 4 = x² + 4x + 4 + y²
-4y = 4x => **x + y = 0** (ek straight line — points (0, 2) aur (-2, 0) ka exact perpendicular bisector!).

Jaanch:
- Jaanch: Midpoint of (0, 2) and (-2, 0) is (-1, 1) which lies on x + y = 0, and slope of segment is 1 (perp slope = -1) ✅

---

### Problem 4: De Moivre's Power Evaluation
**Sawaal:** Evaluate **[(1 + i√3) / (1 - i√3)]⁶** using De Moivre's Theorem.

**Solution:**
Polar form likho:
- 1 + i√3 = 2(cos 60° + i sin 60°)
- 1 - i√3 = 2(cos(-60°) + i sin(-60°))

Divide karne par angles subtract hote hain:
(1 + i√3)/(1 - i√3) = cos(120°) + i sin(120°).

Power 6 lagao (De Moivre's Theorem):
[cos 120° + i sin 120°]⁶ = cos(720°) + i sin(720°) = 1 + 0i = **1**!

Jaanch:
- Jaanch: Notice (1 + i√3)/(1 - i√3) = (-2ω²)/(-2ω) = ω => ω⁶ = (ω³)² = 1 ✅

---

### Problem 5: Location Of Roots — Both Roots Greater Than 2
**Sawaal:** Real parameter m ki woh sabhi values gyat karo jinke liye equation **x² - 2mx + m² - 1 = 0** ke dono roots strictly **2 se bade** hon (α, β > 2).

**Solution:**
Yahan a = 1 > 0, f(x) = x² - 2mx + m² - 1.
Teeno conditions check karo:
1. **D ≥ 0:** (-2m)² - 4(1)(m² - 1) = 4m² - 4m² + 4 = 4 > 0 (always true!).
2. **Vertex > 2:** -b/(2a) = 2m/2 = m > 2 => **m > 2**.
3. **f(2) > 0:** 4 - 4m + m² - 1 > 0 => m² - 4m + 3 > 0 => (m - 1)(m - 3) > 0 => **m < 1 or m > 3**.

Teeno ka intersection (m > 2 AND (m < 1 or m > 3)): **m > 3**!

Jaanch:
- Jaanch: Roots directly factor hote hain: (x - m)² = 1 => x = m - 1 aur m + 1. Dono > 2 hone ke liye chhota root m - 1 > 2 => m > 3 ✅

---

### Problem 6: Value Of k When One Root Lies On Each Side Of 1
**Sawaal:** Real k ki range gyat karo taaki **x² - (k + 1)x + k² + k - 8 = 0** ka ek root **1 se chhota** aur doosra root **1 se bada** ho.

**Solution:**
Yahan a = 1 > 0, aur 1 dono roots ke strictly beech mein hai => sirf **f(1) < 0** kaafi hai!
f(1) = 1² - (k + 1)(1) + k² + k - 8 < 0
1 - k - 1 + k² + k - 8 < 0
k² - 8 < 0
**-2√2 < k < 2√2**.

Jaanch:
- Jaanch: Test k = 0 ∈ (-2√2, 2√2): x² - x - 8 = 0 => roots (1 ± √33)/2 ≈ -2.37 (< 1) and +3.37 (> 1) ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: 1 + ω + ω² = 1 likh dena
- **Galat soch:** "ω³ = 1 hai, to 1 + ω + ω² bhi 1 hoga."
- **Sahi samajh:** **ω³ = 1**, jabki **1 + ω + ω² = 0** hota hai!

### Galti 2: Location of roots mein sirf f(k) > 0 check karke ruk jaana
- **Galat soch:** "Both roots > 2 ke liye bas f(2) > 0 kaafi hai."
- **Sahi samajh:** f(2) > 0 tab bhi ho sakta hai jab dono roots 2 se **chhote** hon ya roots **complex (imaginary)** hon! Isliye D ≥ 0 aur vertex -b/(2a) > 2 bhi compulsory hain!

### Galti 3: |z₁ + z₂| = |z₁| + |z₂| ko hamesha true maan lena
- **Galat soch:** "Modulus jod par seedha toot jata hai."
- **Sahi samajh:** Hamesha **|z₁ + z₂| ≤ |z₁| + |z₂|** hota hai (equality sirf tab jab z₁ aur z₂ ek hi ray/direction par hon)!

---

## Quick Recap

- **Cube Roots of Unity:** 1 + ω + ω² = 0, ω³ = 1, ω̄ = ω² = 1/ω.
- **Triangle Inequality:** ||z₁| - |z₂|| ≤ |z₁ ± z₂| ≤ |z₁| + |z₂|.
- **De Moivre:** (cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ).
- **Location of Roots (a > 0):** Both > k => D ≥ 0, -b/(2a) > k, f(k) > 0; k between roots => f(k) < 0.

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
If ω is a non-real cube root of unity, evaluate (1 + ω)(1 + ω²)(1 + ω⁴)(1 + ω⁸).

**Solution:**
Since ω³ = 1: ω⁴ = ω and ω⁸ = ω².
Expression = [(1 + ω)(1 + ω²)]² = [(-ω²)(-ω)]² = [ω³]² = 1² = **1**.

Jaanch:
- Jaanch: (1 + ω)(1 + ω²) = 1 + ω + ω² + ω³ = 0 + 1 = 1 => 1 × 1 = 1 ✅

---

### Question 2
Evaluate ω¹⁰⁰ + ω²⁰⁰ + ω³⁰⁰ where ω is a non-real cube root of unity.

**Solution:**
100 = 3(33) + 1 => ω¹⁰⁰ = ω.
200 = 3(66) + 2 => ω²⁰⁰ = ω².
300 = 3(100) => ω³⁰⁰ = 1.
Sum = ω + ω² + 1 = **0**.

Jaanch:
- Jaanch: Remainders mod 3 are 1, 2, 0 => ω + ω² + 1 = 0 ✅

---

### Question 3
If |z - 3 + 4i| ≤ 2, find the maximum and minimum values of |z|.

**Solution:**
Centre z₀ = 3 - 4i => |z₀| = √(9 + 16) = 5, radius r = 2.
By Triangle Inequality: ||z| - 5| ≤ |z - z₀| ≤ 2 => 5 - 2 ≤ |z| ≤ 5 + 2.
**Min |z| = 3**, **Max |z| = 7**.

Jaanch:
- Jaanch: Circle of radius 2 centred at distance 5 from origin has closest point at 5 - 2 = 3 and farthest at 5 + 2 = 7 ✅

---

### Question 4
Find the Cartesian equation of the locus of z satisfying |z - 1| = 2|z + 1|.

**Solution:**
Square both sides with z = x + iy:
(x - 1)² + y² = 4[(x + 1)² + y²]
x² - 2x + 1 + y² = 4x² + 8x + 4 + 4y²
3x² + 3y² + 10x + 3 = 0 (a circle!).

Jaanch:
- Jaanch: Test real z = -1/3: |-4/3| = 2|2/3| (4/3 = 4/3), and 3(1/9) - 10/3 + 3 = 1/3 - 10/3 + 9/3 = 0 ✅

---

### Question 5
Evaluate [(-1 + i√3)/2]¹⁵ + [(-1 - i√3)/2]¹⁵.

**Solution:**
Notice (-1 + i√3)/2 = ω and (-1 - i√3)/2 = ω².
ω¹⁵ + (ω²)¹⁵ = (ω³)⁵ + (ω³)¹⁰ = 1⁵ + 1¹⁰ = 1 + 1 = **2**.

Jaanch:
- Jaanch: 15 is a multiple of 3, so both powers equal 1 => 1 + 1 = 2 ✅

---

### Question 6
Using De Moivre's Theorem, compute (1 + i)⁸.

**Solution:**
1 + i = √2 (cos 45° + i sin 45°).
(1 + i)⁸ = (√2)⁸ (cos 360° + i sin 360°) = 2⁴ (1 + 0i) = **16**.

Jaanch:
- Jaanch: (1 + i)² = 2i => (2i)⁴ = 16 i⁴ = 16 ✅

---

### Question 7
Find the range of real k such that both roots of x² - 6kx + (2 - 2k + 9k²) = 0 are greater than 3.

**Solution:**
a = 1 > 0, f(x) = x² - 6kx + 2 - 2k + 9k².
1. D ≥ 0: 36k² - 4(2 - 2k + 9k²) ≥ 0 => 8k - 8 ≥ 0 => **k ≥ 1**.
2. Vertex > 3: 6k / 2 = 3k > 3 => **k > 1**.
3. f(3) > 0: 9 - 18k + 2 - 2k + 9k² > 0 => 9k² - 20k + 11 > 0 => (9k - 11)(k - 1) > 0 => **k < 1 or k > 11/9**.

Intersection of all three: **k > 11/9**.

Jaanch:
- Jaanch: Test k = 2 > 11/9: x² - 12x + 34 = 0 => roots 6 ± √2 ≈ 4.59, 7.41 (both > 3!) ✅

---

### Question 8
If the equations x² + ax + b = 0 and x² + bx + a = 0 (a ≠ b) have a common root, prove that a + b + 1 = 0.

**Solution:**
Let α be the common root:
α² + aα + b = 0   --- (1)
α² + bα + a = 0   --- (2)
Subtract (2) from (1):
(a - b)α + (b - a) = 0 => (a - b)(α - 1) = 0.
Since a ≠ b, **α = 1**!
Substitute α = 1 into (1): **1 + a + b = 0**.

Jaanch:
- Jaanch: Test a = 2, b = -3 (a + b + 1 = 0): x² + 2x - 3 = (x - 1)(x + 3) and x² - 3x + 2 = (x - 1)(x - 2), common root 1 ✅

---

### Question 9
If z₁ = 3 + 4i and |z₂| = 2, find the greatest and least possible values of |z₁ + z₂|.

**Solution:**
|z₁| = √(9 + 16) = 5, |z₂| = 2.
By Triangle Inequality: |5 - 2| ≤ |z₁ + z₂| ≤ 5 + 2.
Greatest = **7**, Least = **3**.

Jaanch:
- Jaanch: 5 + 2 = 7 and |5 - 2| = 3 ✅

---

### Question 10
Simplify (a + bω + cω²) / (c + aω + bω²) where ω is a non-real cube root of unity.

**Solution:**
Multiply numerator and denominator by ω² (or notice c = cω³):
Denominator = cω³ + aω + bω² = ω(a + bω + cω²).
Ratio = (a + bω + cω²) / [ω(a + bω + cω²)] = 1/ω = **ω²**.

Jaanch:
- Jaanch: Test a = 1, b = 0, c = 0: 1 / ω = ω² ✅

---

### Question 11
Find all real values of a for which 0 lies strictly between the roots of x² + (a - 3)x + (a - 5) = 0.

**Solution:**
Here a_lead = 1 > 0. For 0 to lie strictly between the roots, we only need f(0) < 0:
f(0) = a - 5 < 0 => **a < 5**.

Jaanch:
- Jaanch: Product of roots = a - 5 < 0 iff roots have opposite signs (0 lies between them!) ✅

---

### Question 12
If |z + 1| = |z - 1| and |z - i| = |z + i|, find the unique complex number z.

**Solution:**
- |z + 1| = |z - 1| => perpendicular bisector of (-1, 0) and (1, 0) => y-axis (**x = 0**).
- |z - i| = |z + i| => perpendicular bisector of (0, 1) and (0, -1) => x-axis (**y = 0**).
Intersection: **z = 0** (origin)!

Jaanch:
- Jaanch: z = 0 gives |1| = |-1| = 1 and |-i| = |i| = 1 ✅

---

Ab tumne **Complex Numbers & Quadratics** ki advanced mastery — Cube Roots of Unity, Triangle Inequality, Argand Loci, De Moivre's Theorem, aur Location of Roots — ko poori tarah master kar liya hai!
