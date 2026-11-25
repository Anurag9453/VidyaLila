# Chapter: Trigonometric Functions (Advanced — Gehrai Mein)

> **Class:** 11 | **Subject:** Mathematics | **Level:** Advanced (Gehrai Mein)
> **Core chapter yahan complete hua tha:** [trigonometric-functions-part6.md](trigonometric-functions-part6.md) (Topic 6: Sab Kuch Mila Kar aur Chapter Wrap-up). Is advanced file mein hum a sin x + b cos x ke exact bounds, conditional identities (A + B + C = π), telescopic cosine products, 60° ± θ triple-product identities, aur exact values of 18°/36° ko derive karenge!
> **Advanced topics covered in this file:**
> 1. Amplitude-Phase Bounds of a sin x + b cos x, Conditional Identities (A + B + C = π), Telescopic Cosine Product & 60° ± θ Identities, Exact 18°/36° Values, Aur Trig Inequalities

---

# Gehrai Mein: Advanced Trigonometric Identities & Optimization

Core chapter mein tumne compound, multiple, aur C-D identities seekhi thin. Lekin jab sawaal poochhe "3 sin x + 4 cos x + 7 ki maximum value kya hai?" ya "cos 20° cos 40° cos 60° cos 80° bina calculator ke nikaalo" ya "sin 18° ki exact value derive karo" — to advanced trig shortcuts 10 lines ke kaam ko 2 lines mein khatam kar dete hain!

---

## Jagruti ka AC power-grid peak-voltage calculator

Jagruti ek electrical power-grid substation mein AC phase engineer hai. Ek feeder line par do out-of-phase alternating voltages milkar net voltage bana rahe the:
**V(t) = 3 sin t + 4 cos t**

Junior technician ne peak voltage ke liye dono ke peaks seedhe jod diye: 3 + 4 = 7 volts!
Jagruti ne roka: "Nahi! sin t aur cos t ek hi waqt par 1 nahi ho sakte (jab sin t = 1, tab cos t = 0 hota hai!). Isliye peak 7 nahi, balki **√(3² + 4²) = 5 volts** hai! Hum √(a² + b²) se multiply-divide karke ise ek single wave **5 sin(t + α)** mein badal dete hain!"

---

## Part A: Exact Bounds Of a sin x + b cos x ("Kyun"!)

Let **R = √(a² + b²)** (> 0). Multiply and divide by R:
a sin x + b cos x = R [ (a/R) sin x + (b/R) cos x ]

Kyunki (a/R)² + (b/R)² = 1, hum ek angle α chun sakte hain jahan **cos α = a/R** aur **sin α = b/R**!
Tab:
**a sin x + b cos x = R (sin x cos α + cos x sin α) = √(a² + b²) sin(x + α)**!

Kyunki -1 ≤ sin(x + α) ≤ 1:
**-√(a² + b²) ≤ a sin x + b cos x ≤ +√(a² + b²)**!

- **Max value = +√(a² + b²)**, **Min value = -√(a² + b²)**.
- Equation **a sin x + b cos x = c** ka real solution **tabhi aur sirf tabhi** exist karta hai jab **|c| ≤ √(a² + b²)** ho!

---

## Part B: Conditional Identities (When A + B + C = π)

Jab A + B + C = π (triangle ke angles!): A + B = π - C => **tan(A + B) = -tan C**.
Expand tan(A + B):
(tan A + tan B) / (1 - tan A tan B) = -tan C
tan A + tan B = -tan C + tan A tan B tan C
=> **tan A + tan B + tan C = tan A · tan B · tan C**!

Do aur famous conditional identities (C-D se derived):
1. **sin 2A + sin 2B + sin 2C = 4 sin A sin B sin C**
2. **cos 2A + cos 2B + cos 2C = -1 - 4 cos A cos B cos C**

---

## Part C: Telescopic Cosine Product & 60° ± θ Identities

### 1. Domino Cosine Product ("Kyun"!):
**cos θ · cos 2θ · cos 4θ · ... · cos(2ⁿ⁻¹ θ) = sin(2ⁿ θ) / (2ⁿ sin θ)**   *(sin θ ≠ 0)*

**Proof (Domino Collapse!):**
Numerator aur denominator ko **2 sin θ** se multiply karo:
- 2 sin θ cos θ = sin 2θ
- (sin 2θ)(2 cos 2θ) = sin 4θ
- (sin 4θ)(2 cos 4θ) = sin 8θ
- ... n steps ke baad poora product collapse hokar **sin(2ⁿ θ) / (2ⁿ sin θ)** ban jata hai!

### 2. Triple-Angle Product Identities (60° ± θ):
- **sin θ · sin(60° - θ) · sin(60° + θ) = (1/4) sin 3θ**
- **cos θ · cos(60° - θ) · cos(60° + θ) = (1/4) cos 3θ**
- **tan θ · tan(60° - θ) · tan(60° + θ) = tan 3θ**

### 3. Exact Values Of 18° And 36° (Derived!):
Let θ = 18° => 5θ = 90° => **2θ = 90° - 3θ** => **sin 2θ = cos 3θ**!
2 sin θ cos θ = 4 cos³ θ - 3 cos θ
Divide by cos θ (> 0):
2 sin θ = 4(1 - sin² θ) - 3 = 1 - 4 sin² θ
**4 sin² θ + 2 sin θ - 1 = 0**
Quadratic formula se (sin 18° > 0):
- **sin 18° = (√5 - 1) / 4** = cos 72°
- **cos 36° = 1 - 2 sin² 18° = (√5 + 1) / 4** = sin 54°!

---

## 6 Deep Advanced Solved Problems (Step-by-Step With Jaanch)

### Problem 1: Maximum & Minimum Value Of A Shifted Trig Expression
**Sawaal:** Expression f(x) = 5 cos x + 3 cos(x + π/3) + 3 ki exact maximum aur minimum values gyat karo.

**Solution:**
Expand cos(x + π/3) = cos x cos(π/3) - sin x sin(π/3) = (1/2) cos x - (√3/2) sin x:
f(x) = 5 cos x + 3[(1/2) cos x - (√3/2) sin x] + 3
= (13/2) cos x - (3√3/2) sin x + 3.

Amplitude R = √[(13/2)² + (-3√3/2)²] = √[(169 + 27) / 4] = √[196 / 4] = √49 = **7**!

Isliye -7 ≤ (13/2) cos x - (3√3/2) sin x ≤ +7.
Add 3 everywhere:
- **Minimum value** = -7 + 3 = **-4**
- **Maximum value** = +7 + 3 = **10**.

Jaanch:
- Jaanch: 169 + 27 = 196 = 14², 14/2 = 7; range [-7 + 3, 7 + 3] = [-4, 10] ✅

---

### Problem 2: Evaluating cos 20° · cos 40° · cos 60° · cos 80°
**Sawaal:** Exact value gyat karo: **cos 20° · cos 40° · cos 60° · cos 80°**.

**Solution:**
**Method 1 (60° ± θ Identity):**
Pehle cos 60° = 1/2 bahar nikalo!
Bacha: cos 20° · cos 40° · cos 80° = cos 20° · cos(60° - 20°) · cos(60° + 20°)
= (1/4) cos(3 × 20°) = (1/4) cos 60° = (1/4)(1/2) = 1/8!

Total product = (1/2) × (1/8) = **1/16**!

**Method 2 (Domino Cosine Product):**
cos 20° · cos 40° · cos 80° = sin(2³ × 20°) / (2³ sin 20°) = sin 160° / (8 sin 20°) = sin 20° / (8 sin 20°) = 1/8 => × cos 60° = **1/16**!

Jaanch:
- Jaanch: Dono methods (60° ± θ aur Domino Product) exact 1/16 dete hain ✅

---

### Problem 3: Telescopic Product With 7-Division Of π
**Sawaal:** Exact value gyat karo: **cos(π/7) · cos(2π/7) · cos(4π/7)**.

**Solution:**
Yahan angles θ = π/7, 2θ = 2π/7, 4θ = 4π/7 hain (n = 3)!
Domino Cosine Product lagao:
= sin(8π/7) / [8 sin(π/7)].

Kyunki sin(8π/7) = sin(π + π/7) = **-sin(π/7)**:
= -sin(π/7) / [8 sin(π/7)] = **-1/8**!

Jaanch:
- Jaanch: π/7 (Q1, +), 2π/7 (Q1, +), 4π/7 (Q2, -) => product must be negative: -1/8 ✅

---

### Problem 4: Exact Value Of sin 18° · cos 36°
**Sawaal:** Prove karo ki **sin 18° · cos 36° = 1/4** aur **cos 36° - sin 18° = 1/2**.

**Solution:**
Derived values se: sin 18° = (√5 - 1)/4 aur cos 36° = (√5 + 1)/4.
1. Product: [(√5 - 1)/4] · [(√5 + 1)/4] = (5 - 1) / 16 = 4/16 = **1/4**!
2. Difference: [(√5 + 1) - (√5 - 1)] / 4 = 2/4 = **1/2**!

Jaanch:
- Jaanch: Notice sin 18° aur -cos 36° are the two roots of 4t² + 2t - 1 = 0 => product = -1/4 (so sin 18° cos 36° = +1/4), sum = -1/2 (so cos 36° - sin 18° = +1/2) ✅

---

### Problem 5: Solving a sin x + b cos x = c (Existence & Solution)
**Sawaal:** Equation **√3 cos x + sin x = √2** ka general solution gyat karo.

**Solution:**
Yahan a = 1, b = √3 => R = √(1 + 3) = **2**.
Check existence: |c| = √2 ≤ 2 (solutions exist!).
Poori equation ko 2 se divide karo:
(√3/2) cos x + (1/2) sin x = √2 / 2 = 1/√2
cos(π/6) cos x + sin(π/6) sin x = cos(π/4)
**cos(x - π/6) = cos(π/4)**!

General solution of cos θ = cos α:
x - π/6 = 2nπ ± π/4  (n ∈ Z)
=> **x = 2nπ + 5π/12**  ya  **x = 2nπ - π/12** (n ∈ Z).

Jaanch:
- Jaanch (x = 5π/12 = 75°): √3 cos 75° + sin 75° = √3(√6 - √2)/4 + (√6 + √2)/4 = (3√2 - √6 + √6 + √2)/4 = 4√2/4 = √2 ✅

---

### Problem 6: Trigonometric Inequality In [0, 2π]
**Sawaal:** Inequality **2 sin² x - 3 sin x + 1 ≤ 0** ko x ∈ [0, 2π] ke liye solve karo.

**Solution:**
Factorize quadratic in sin x:
(2 sin x - 1)(sin x - 1) ≤ 0
=> **1/2 ≤ sin x ≤ 1**.

Unit circle par [0, 2π] mein sin x = 1/2 angles π/6 (30°) aur 5π/6 (150°) par hota hai, aur beech mein (π/6 se 5π/6 tak) sin x ≥ 1/2 rehta hai!
Isliye solution: **x ∈ [π/6, 5π/6]**.

Jaanch:
- Jaanch: x = π/2 par sin x = 1 => 2 - 3 + 1 = 0 ≤ 0; x = π/4 par sin x = 1/√2 ≈ 0.707 ∈ [0.5, 1] ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: a sin x + b cos x ki max value |a| + |b| likh dena
- **Galat soch:** "3 sin x + 4 cos x ka max 3 + 4 = 7 hai."
- **Sahi samajh:** sin x aur cos x kabhi ek saath 1 nahi hote! Max value hamesha **√(a² + b²) = √(9 + 16) = 5** hoti hai!

### Galti 2: Domino Cosine Product mein denominator ka 2ⁿ bhool jaana
- **Galat soch:** "cos θ cos 2θ cos 4θ = sin 8θ / sin θ."
- **Sahi samajh:** Har step par ek factor of 2 aata hai, isliye n cosines ke liye denominator mein **2ⁿ sin θ** (yahan 8 sin θ) aata hai!

### Galti 3: sin x > 1/2 ka solution sirf x > π/6 likh dena
- **Galat soch:** "sin x > 1/2 matlab x > π/6."
- **Sahi samajh:** π/6 ke aage 5π/6 par sin x dobara 1/2 se neeche gir jata hai! [0, 2π] mein sahi interval **(π/6, 5π/6)** hai!

---

## Quick Recap

- **Amplitude-Phase Bounds:** -√(a² + b²) ≤ a sin x + b cos x ≤ +√(a² + b²).
- **Conditional (A + B + C = π):** tan A + tan B + tan C = tan A tan B tan C.
- **Domino Cosine Product:** Π_{k=0}^{n-1} cos(2ᵏ θ) = sin(2ⁿ θ) / (2ⁿ sin θ).
- **60° ± θ Identities:** sin θ sin(60° - θ) sin(60° + θ) = (1/4) sin 3θ; cos -> (1/4) cos 3θ; tan -> tan 3θ.
- **Exact Values:** sin 18° = (√5 - 1)/4, cos 36° = (√5 + 1)/4.

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Find the maximum and minimum values of 7 cos x + 24 sin x + 10.

**Solution:**
R = √(7² + 24²) = √(49 + 576) = √625 = 25.
Max = 25 + 10 = **35**; Min = -25 + 10 = **-15**.

Jaanch:
- Jaanch: 7-24-25 Pythagorean triplet => [-25 + 10, 25 + 10] = [-15, 35] ✅

---

### Question 2
Evaluate sin 20° · sin 40° · sin 60° · sin 80°.

**Solution:**
sin 60° = √3/2.
sin 20° sin(60° - 20°) sin(60° + 20°) = (1/4) sin 60° = √3/8.
Total product = (√3/2)(√3/8) = **3/16**.

Jaanch:
- Jaanch: (√3 × √3) / (2 × 8) = 3/16 ✅

---

### Question 3
Evaluate tan 20° · tan 40° · tan 60° · tan 80°.

**Solution:**
tan 20° tan(60° - 20°) tan(60° + 20°) = tan 60° = √3.
Multiply by the extra tan 60° = √3 => √3 × √3 = **3**.

Jaanch:
- Jaanch: Notice (sin 20° sin 40° sin 60° sin 80°) / (cos 20° cos 40° cos 60° cos 80°) = (3/16) / (1/16) = 3 ✅

---

### Question 4
Find the exact value of tan 15° + cot 15°.

**Solution:**
tan 15° = 2 - √3, cot 15° = 1/(2 - √3) = 2 + √3.
Sum = (2 - √3) + (2 + √3) = **4**.

Jaanch:
- Jaanch: tan θ + cot θ = 2 / sin 2θ => 2 / sin 30° = 2 / (1/2) = 4 ✅

---

### Question 5
If A + B = 45°, prove that (1 + tan A)(1 + tan B) = 2.

**Solution:**
tan(A + B) = tan 45° = 1 => (tan A + tan B)/(1 - tan A tan B) = 1
=> tan A + tan B + tan A tan B = 1.
Add 1 to both sides:
1 + tan A + tan B + tan A tan B = 2 => **(1 + tan A)(1 + tan B) = 2**!

Jaanch:
- Jaanch: Test A = 0°, B = 45°: (1 + 0)(1 + 1) = 2 ✅

---

### Question 6
Find the exact value of (1 + tan 1°)(1 + tan 2°)(1 + tan 3°)...(1 + tan 44°)(1 + tan 45°).

**Solution:**
Pair up complementary-to-45° angles using Question 5:
(1 + tan 1°)(1 + tan 44°) = 2, (1 + tan 2°)(1 + tan 43°) = 2, ..., (1 + tan 22°)(1 + tan 23°) = 2 (22 pairs -> 2²²!).
And the last factor (1 + tan 45°) = 1 + 1 = 2!
Total product = 2²² × 2 = **2²³**.

Jaanch:
- Jaanch: 22 pairs + 1 standalone 45° = 45 factors total => 2²³ ✅

---

### Question 7
Find the number of real solutions of the equation 3 sin x + 4 cos x = 6.

**Solution:**
Maximum value of 3 sin x + 4 cos x is √(3² + 4²) = 5 < 6.
Therefore, **0 real solutions**!

Jaanch:
- Jaanch: |c| = 6 > 5 = √(a² + b²) => impossible ✅

---

### Question 8
Evaluate cos(π/15) · cos(2π/15) · cos(4π/15) · cos(8π/15).

**Solution:**
Domino Cosine Product with θ = π/15 and n = 4:
= sin(16π/15) / [16 sin(π/15)].
Since sin(16π/15) = sin(π + π/15) = -sin(π/15):
= **-1/16**.

Jaanch:
- Jaanch: Only 8π/15 is in Q2 (negative), other three in Q1 (+) => product negative: -1/16 ✅

---

### Question 9
Find the minimum value of 9 tan² θ + 4 cot² θ for θ ∈ (0, π/2).

**Solution:**
Both terms are positive; apply AM ≥ GM:
(9 tan² θ + 4 cot² θ)/2 ≥ √(36 tan² θ cot² θ) = √36 = 6
=> 9 tan² θ + 4 cot² θ ≥ **12** (attained when 9 tan² θ = 4 cot² θ => tan θ = √(2/3)).

Jaanch:
- Jaanch: At tan² θ = 2/3: 9(2/3) + 4(3/2) = 6 + 6 = 12 ✅

---

### Question 10
In any triangle ABC, if tan A = 2 and tan B = 3, find angle C.

**Solution:**
Using tan A + tan B + tan C = tan A tan B tan C:
2 + 3 + tan C = 6 tan C => 5 = 5 tan C => tan C = 1 => **C = 45° (π/4)**.

Jaanch:
- Jaanch: tan(A + B) = (2 + 3)/(1 - 6) = 5/(-5) = -1 => A + B = 135° => C = 180° - 135° = 45° ✅

---

### Question 11
Evaluate sin 18° + cos 36°.

**Solution:**
sin 18° + cos 36° = (√5 - 1)/4 + (√5 + 1)/4 = (2√5)/4 = **√5 / 2**.

Jaanch:
- Jaanch: (-1 + 1) cancels cleanly leaving 2√5/4 = √5/2 ✅

---

### Question 12
Solve cos x < -1/2 for x ∈ [0, 2π].

**Solution:**
On [0, 2π], cos x = -1/2 at x = 2π/3 (120°) and x = 4π/3 (240°).
Between 2π/3 and 4π/3 (around π where cos π = -1), cos x < -1/2.
Solution: **x ∈ (2π/3, 4π/3)**.

Jaanch:
- Jaanch: Test x = π: cos π = -1 < -1/2 ✅

---

Ab tumne **Trigonometric Functions** ke sabse sharp advanced tools — amplitude-phase bounds, conditional identities, domino products, aur 18°/36° exact values — ko master kar liya hai!
