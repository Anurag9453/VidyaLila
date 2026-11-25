# Chapter: Linear Inequalities (Advanced — Gehrai Mein)

> **Class:** 11 | **Subject:** Mathematics | **Level:** Advanced (Gehrai Mein)
> **Core chapter yahan complete hua tha:** [linear-inequalities-part4.md](linear-inequalities-part4.md) (Topic 4: Sab Kuch Mila Kar aur Chapter Wrap-up). Is advanced file mein hum higher-degree rational inequalities ka sabse powerful tool — **Wavy Curve Method (Method of Intervals)**, **Double-Modulus Inequalities**, aur **Square-Root Inequalities** — master karenge!
> **Advanced topics covered in this file:**
> 1. Wavy Curve Method (Odd vs Even Powers & Denominator Exclusions), Double & Nested Modulus Inequalities, Irrational (√) Inequalities, Aur Always-Positive Quadratic Factors

---

# Gehrai Mein: Wavy Curve Method & Non-Linear Inequalities

Core chapter mein tumne linear inequalities (ax + b > 0) aur simple modulus inequalities solve ki thin. Lekin real advanced maths mein rational expressions jaise **[(x - 1)²(x + 2)³] / [(x - 3)(x + 4)] ≤ 0** ya **|x - 1| + |x - 5| ≥ 6** aate hain!

Inhe 15 seconds mein bina galti solve karne ka sabse famous weapon hai **Wavy Curve Method**! Chalo ise step-by-step seekhte hain!

---

## Mahesh ka robotics stability-zone tuner

Mahesh ek robotics control-system engineer hai. Uske drone ke gain parameter x ko ek rational stability condition satisfy karni thi:
**[(x - 1)(x - 4)] / (x - 2) ≥ 0**

Junior engineer ne (x - 2) se cross-multiply karke 0 bana diya — aur poora stability zone galat ho gaya (kyunki x < 2 par x - 2 negative hai aur inequality flip ho jaati hai!)!
Mahesh ne sikhaya: "Rational inequality mein **kabhi bhi variable denominator se cross-multiply mat karo**! Sab kuch ek taraf lao, critical points (1, 2, 4) number line par lagao, aur **Wavy Curve** chala do — seedha [1, 2) ∪ [4, ∞) mil jata hai!"

---

## Part A: Wavy Curve Method (Method Of Intervals) — 5 Golden Steps

Inequality **P(x) / Q(x) > 0** (ya <, ≥, ≤) solve karne ke liye:
1. **RHS ko 0 banao** (kabhi variable denominator se cross-multiply mat karo!).
2. **Factorize** numerator P(x) aur denominator Q(x) ko linear factors (x - aᵢ)^kᵢ mein. Har factor mein **x ka coefficient positive (+1)** banao (agar (3 - x) ho to minus bahar nikaal kar inequality flip karo!).
3. **Critical points** (numerator aur denominator ke roots) ko number line par ascending order mein plot karo.
4. **Sign assignment (Right se Left):**
   - Sabse right interval mein hamesha **+** likho!
   - Right se left jaate hue: agar critical point ka exponent **ODD** hai to sign **PALTO (+ <-> -)**; agar exponent **EVEN** hai to sign **WOHI RAKHO (no flip!)**.
5. **Final Interval Rule:**
   - Denominator ke roots **KABHI include nahi hote** (open bracket ( ya )!).
   - ≥ 0 ya ≤ 0 mein numerator ke roots **HAMESHA include hote hain** (even-power isolated roots ko mat bhoolo!).

---

## Part B: Double-Modulus Inequalities (Distance Shortcut!)

Number line par **|x - a|** ka matlab hai: **point x ki point a se doori**!
Isliye **|x - a| + |x - b|** (maan lo a < b) ka matlab hai: x ki a aur b se dooriyon ka sum!
- Jab x, a aur b ke **beech mein (a ≤ x ≤ b)** ho: sum hamesha constant **b - a** hota hai (yehi minimum value hai!).
- Jab x bahar (x < a ya x > b) jaye: sum har unit door jaane par **2 units** badhta hai!

Isliye **|x - a| + |x - b| ≥ b - a** sabhi real x ke liye hamesha true hota hai!

---

## Part C: Always-Positive Quadratic Factors (D < 0)

Agar koi quadratic ax² + bx + c mein **a > 0 aur Discriminant D = b² - 4ac < 0** ho (jaise x² + x + 1 ya x² + 4), to woh **har real x ke liye strictly positive (> 0)** hota hai! Isliye inequality mein use bina sign badle seedhe hata (divide out) sakte hain!

---

## 6 Deep Advanced Solved Problems (Step-by-Step With Jaanch)

### Problem 1: Wavy Curve With Odd And Even Powers
**Sawaal:** Solve: **[(x - 1)² (x + 2)³] / [(x - 3)(x + 4)] ≤ 0**.

**Solution:**
Sabhi factors mein x ka coefficient +1 hai.
Critical points (ascending): **-4** (denom, odd), **-2** (num, odd), **1** (num, EVEN!), **3** (denom, odd).

Right se Left signs lagao:
- (3, ∞): **+**
- Cross 3 (odd): (1, 3) -> **-**
- Cross 1 (EVEN — NO FLIP!): (-2, 1) -> **-**
- Cross -2 (odd): (-4, -2) -> **+**
- Cross -4 (odd): (-∞, -4) -> **-**

Hume **≤ 0** chahiye (- intervals + numerator roots -2 aur 1, par denominator roots -4 aur 3 EXCLUDED!):
**x ∈ (-∞, -4) ∪ [-2, 3)**.
*(Dhyan do: x = 1 already [-2, 3) ke andar included hai!)*

Jaanch:
- Jaanch: Test x = -5: (36)(-27)/((-8)(-1)) < 0 (in!); test x = -3: (16)(-1)/((-6)(1)) > 0 (out!); test x = 0: (1)(8)/((-3)(4)) < 0 (in!); test x = 1: 0 ≤ 0 (in!) ✅

---

### Problem 2: Wavy Curve With Isolated Even-Power Root
**Sawaal:** Solve: **[(x - 2)² (x - 5)] / (x + 1) ≥ 0**.

**Solution:**
Critical points: **-1** (denom, odd), **2** (num, EVEN), **5** (num, odd).
Signs right to left:
- (5, ∞): **+**
- (2, 5): **-**
- (-1, 2): **-** (even power at 2 => no flip!)
- (-∞, -1): **+**

Hume **≥ 0** chahiye (+ intervals + numerator roots 5 aur **isolated point {2}**!):
**x ∈ (-∞, -1) ∪ {2} ∪ [5, ∞)**!

Jaanch:
- Jaanch: x = 2 par expression = 0 ≥ 0 (zaroor include hoga!), par x = 1.9 aur x = 2.1 par negative hai ✅

---

### Problem 3: Rational Inequality Where RHS ≠ 0
**Sawaal:** Solve: **(2x - 3) / (3x - 5) ≥ 3**.

**Solution:**
Cross-multiply MAT karo! 3 ko LHS par lao:
(2x - 3)/(3x - 5) - 3 ≥ 0
[ (2x - 3) - 3(3x - 5) ] / (3x - 5) ≥ 0
(12 - 7x) / (3x - 5) ≥ 0

Numerator mein x ka coefficient negative (-7) hai! Dono taraf -1 se multiply karke inequality **flip** karo:
(7x - 12) / (3x - 5) ≤ 0

Critical points: **5/3** (denom, ≈ 1.667) aur **12/7** (num, ≈ 1.714).
Since 5/3 = 35/21 < 36/21 = 12/7:
Signs: (-∞, 5/3) is +, (5/3, 12/7) is -, (12/7, ∞) is +.
For ≤ 0 (exclude denom 5/3, include num 12/7):
**x ∈ (5/3, 12/7]**.

Jaanch:
- Jaanch: Test x = 12/7: (24/7 - 21/7)/(36/7 - 35/7) = (3/7)/(1/7) = 3 ≥ 3 ✅

---

### Problem 4: Double-Modulus Inequality
**Sawaal:** Solve: **|x - 1| + |x - 5| ≥ 6**.

**Solution:**
Distance interpretation: a = 1, b = 5, distance b - a = 4.
- Beech mein (1 ≤ x ≤ 5): sum hamesha 4 hota hai (< 6, so no solution inside [1, 5]!).
- Right side (x > 5): (x - 1) + (x - 5) ≥ 6 => 2x - 6 ≥ 6 => 2x ≥ 12 => **x ≥ 6**.
- Left side (x < 1): (1 - x) + (5 - x) ≥ 6 => 6 - 2x ≥ 6 => -2x ≥ 0 => **x ≤ 0**.

Solution: **x ∈ (-∞, 0] ∪ [6, ∞)**.

Jaanch:
- Jaanch: x = 0 gives 1 + 5 = 6; x = 6 gives 5 + 1 = 6; x = 3 gives 2 + 2 = 4 < 6 ✅

---

### Problem 5: Nested Modulus Inequality
**Sawaal:** Solve: **||x - 2| - 3| < 1**.

**Solution:**
Outer modulus hatao (-1 < inside < 1):
-1 < |x - 2| - 3 < 1
Add 3 everywhere:
**2 < |x - 2| < 4**!

Iska matlab x ki point 2 se doori 2 se badi aur 4 se chhoti honi chahiye:
- Right side: 2 < x - 2 < 4 => **4 < x < 6**
- Left side: -4 < x - 2 < -2 => **-2 < x < 0**.

Solution: **x ∈ (-2, 0) ∪ (4, 6)**.

Jaanch:
- Jaanch: x = 5 -> ||3| - 3| = 0 < 1; x = -1 -> ||-3| - 3| = 0 < 1; x = 2 -> |0 - 3| = 3 (out!) ✅

---

### Problem 6: Square-Root Inequality √(x + 2) > x
**Sawaal:** Real x ke liye solve karo: **√(x + 2) > x**.

**Solution:**
Domain requirement: x + 2 ≥ 0 => **x ≥ -2**.
RHS (x) ke sign par do cases bante hain:
- **Case 1 (x < 0):** LHS (√(x + 2) ≥ 0) hamesha negative RHS se bada hoga! Domain x ≥ -2 ke saath intersection: **[-2, 0)**.
- **Case 2 (x ≥ 0):** Dono taraf non-negative hain, isliye square kar sakte hain:
  x + 2 > x² => x² - x - 2 < 0 => (x - 2)(x + 1) < 0 => -1 < x < 2.
  Case 2 condition x ≥ 0 ke saath intersection: **[0, 2)**.

Dono cases ka union: [-2, 0) ∪ [0, 2) = **[-2, 2)**.

Jaanch:
- Jaanch: x = -2 -> 0 > -2 (true!); x = 1 -> √3 > 1 (true!); x = 2 -> 2 > 2 (false!) ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Variable denominator se cross-multiply kar dena
- **Galat soch:** "(2x - 3)/(3x - 5) ≥ 3 => 2x - 3 ≥ 3(3x - 5)."
- **Sahi samajh:** Jab 3x - 5 negative hota hai (x < 5/3), to multiply karne par inequality **flip** ho jaati hai! Hamesha RHS ko LHS par laakar 0 banao!

### Galti 2: Isolated even-power numerator root ko bhool jaana
- **Galat soch:** "(x - 2)²(x - 5)/(x + 1) ≥ 0 mein sirf + intervals (-∞, -1) ∪ [5, ∞) likh diya."
- **Sahi samajh:** x = 2 par expression **0** ban jata hai, aur 0 ≥ 0 true hai! Isliye **{2}** ko union mein zaroor shamil karo!

### Galti 3: √f(x) > g(x) mein g(x) < 0 case bhool kar seedha square kar dena
- **Galat soch:** "√(x + 2) > x => x + 2 > x² => (-1, 2)."
- **Sahi samajh:** x = -1.5 par √0.5 > -1.5 bilkul true hai, par tumne [-2, -1] ko galat squaring se uda diya! Hamesha g(x) < 0 aur g(x) ≥ 0 ke do alag cases banao!

---

## Quick Recap

- **Wavy Curve:** RHS = 0, positive x-coefficients, right-most +, flip on ODD powers, keep on EVEN powers, NEVER include denominator roots, DO include isolated even-power numerator roots for ≥ / ≤!
- **Double Modulus:** |x - a| + |x - b| ≥ |b - a| (minimum on [a, b]).
- **Always-positive quadratic (a > 0, D < 0):** Safely divide out without flipping!
- **√f(x) > g(x):** Split into g(x) < 0 (only need f(x) ≥ 0) and g(x) ≥ 0 (square both sides).

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Solve: (x - 1)(x - 3)(x - 5) > 0.

**Solution:**
Critical points: 1, 3, 5 (all odd powers). Signs right to left: +, -, +, -.
For > 0: **x ∈ (1, 3) ∪ (5, ∞)**.

Jaanch:
- Jaanch: x = 2 -> (1)(-1)(-3) = +3 > 0; x = 4 -> (3)(1)(-1) = -3 < 0 ✅

---

### Question 2
Solve: [(x + 1)(x - 3)] / (x - 2) ≥ 0.

**Solution:**
Critical points: -1 (num), 2 (denom — exclude!), 3 (num). All odd powers.
Signs right to left: +, -, +, -.
For ≥ 0: **x ∈ [-1, 2) ∪ [3, ∞)**.

Jaanch:
- Jaanch: x = 2 excluded; x = -1 and x = 3 give 0 ≥ 0 ✅

---

### Question 3
Solve: [(x - 1)² (x - 4)] / (x + 2) ≤ 0.

**Solution:**
Critical points: -2 (denom, odd), 1 (num, even), 4 (num, odd).
Signs right to left: (4, ∞) +, (1, 4) -, (-2, 1) -, (-∞, -2) +.
For ≤ 0 (exclude -2, include 1 and 4): **x ∈ (-2, 4]**.

Jaanch:
- Jaanch: x = 0 -> (1)(-4)/2 = -2 ≤ 0; x = 1 -> 0 ≤ 0 ✅

---

### Question 4
Solve: (x² - 5x + 6) / (x² + x + 1) < 0.

**Solution:**
Denominator x² + x + 1 has a = 1 > 0 and D = 1 - 4 = -3 < 0 => ALWAYS positive!
Safely multiply by (x² + x + 1): x² - 5x + 6 < 0 => (x - 2)(x - 3) < 0.
Solution: **x ∈ (2, 3)**.

Jaanch:
- Jaanch: x = 2.5 gives (-0.25) / 9.75 < 0 ✅

---

### Question 5
Solve: (x + 1) / (x - 2) > 2.

**Solution:**
(x + 1)/(x - 2) - 2 > 0 => (x + 1 - 2x + 4)/(x - 2) > 0 => (5 - x)/(x - 2) > 0.
Multiply by -1 (flip!): (x - 5)/(x - 2) < 0.
Critical points 2, 5 => **x ∈ (2, 5)**.

Jaanch:
- Jaanch: x = 3 gives 4/1 = 4 > 2 ✅

---

### Question 6
Solve: |x - 2| + |x - 6| = 4.

**Solution:**
Distance between 2 and 6 is 6 - 2 = 4. Sum of distances equals 4 for EVERY point between 2 and 6 (inclusive)!
Solution: **x ∈ [2, 6]**.

Jaanch:
- Jaanch: x = 2 -> 0 + 4 = 4; x = 4 -> 2 + 2 = 4; x = 6 -> 4 + 0 = 4 ✅

---

### Question 7
Solve: |x - 2| + |x - 6| < 4.

**Solution:**
Minimum possible value of |x - 2| + |x - 6| is 6 - 2 = 4. It can NEVER be strictly less than 4!
Solution: **x ∈ φ (No real solution)**.

Jaanch:
- Jaanch: Triangle inequality |x - 2| + |6 - x| ≥ |(x - 2) + (6 - x)| = 4 ✅

---

### Question 8
Solve: |2x - 3| / (x - 1) > 0.

**Solution:**
Numerator |2x - 3| ≥ 0 always (and = 0 at x = 3/2, which must be excluded for strict > 0!).
Denominator x - 1 must be > 0 => x > 1, excluding x = 3/2.
Solution: **x ∈ (1, 3/2) ∪ (3/2, ∞)**.

Jaanch:
- Jaanch: x = 3/2 gives 0 > 0 (false!), x = 2 gives 1/1 = 1 > 0 ✅

---

### Question 9
Solve: ||x - 1| - 2| ≤ 1.

**Solution:**
-1 ≤ |x - 1| - 2 ≤ 1 => **1 ≤ |x - 1| ≤ 3**.
- Right side: 1 ≤ x - 1 ≤ 3 => **2 ≤ x ≤ 4**.
- Left side: -3 ≤ x - 1 ≤ -1 => **-2 ≤ x ≤ 0**.
Solution: **x ∈ [-2, 0] ∪ [2, 4]**.

Jaanch:
- Jaanch: x = 3 -> |2 - 2| = 0 ≤ 1; x = -1 -> |2 - 2| = 0 ≤ 1; x = 1 -> |0 - 2| = 2 (out!) ✅

---

### Question 10
Solve: √(x + 6) > x.

**Solution:**
Domain: x ≥ -6.
- Case 1 (-6 ≤ x < 0): LHS ≥ 0 > RHS => **[-6, 0)**.
- Case 2 (x ≥ 0): Square both sides: x + 6 > x² => x² - x - 6 < 0 => (x - 3)(x + 2) < 0 => (-2, 3). Intersect with x ≥ 0 => **[0, 3)**.
Union: **x ∈ [-6, 3)**.

Jaanch:
- Jaanch: x = -6 -> 0 > -6 (true); x = 2 -> √8 > 2 (true); x = 3 -> 3 > 3 (false) ✅

---

### Question 11
Solve: (x² - 4)(x² - 9) ≤ 0.

**Solution:**
Factorize: (x + 3)(x + 2)(x - 2)(x - 3) ≤ 0.
Critical points: -3, -2, 2, 3 (all odd). Signs right to left: +, -, +, -, +.
For ≤ 0: **x ∈ [-3, -2] ∪ [2, 3]**.

Jaanch:
- Jaanch: x = 2.5 gives (+2.25)(-2.75) < 0; x = 0 gives (-4)(-9) = +36 > 0 ✅

---

### Question 12
Find the number of integer solutions of [(x - 1)(x - 5)] / (x - 3) ≤ 0 for x > 0.

**Solution:**
Critical points: 1 (num), 3 (denom — exclude!), 5 (num).
Signs right to left: +, -, +, -.
For ≤ 0: (-∞, 1] ∪ (3, 5].
Intersecting with positive integers (x > 0): **x ∈ {1, 4, 5}** => **3 integer solutions**!

Jaanch:
- Jaanch: x = 1 (0), x = 2 ((1)(-3)/(-1) = +3 > 0, out), x = 3 (undefined), x = 4 ((3)(-1)/1 = -3 ≤ 0), x = 5 (0) => {1, 4, 5} ✅

---

Ab tumne **Inequalities** ke sabse sharp advanced tools — Wavy Curve Method, Double/Nested Modulus, aur Square-Root Inequalities — ko poori tarah master kar liya hai!
