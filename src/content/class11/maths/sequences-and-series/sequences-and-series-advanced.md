# Chapter: Sequences and Series (Advanced — Gehrai Mein)

> **Class:** 11 | **Subject:** Mathematics | **Level:** Advanced (Gehrai Mein)
> **Core chapter yahan complete hua tha:** [sequences-and-series-part5.md](sequences-and-series-part5.md) (Topic 5: Sab Kuch Mila Kar aur Chapter Wrap-up). Is advanced file mein hum Harmonic Progression (HP), AM ≥ GM ≥ HM & G² = AH, Vₙ Telescoping Method of Differences, aur Term-Splitting AM-GM Optimization ko gehrai se master karenge!
> **Advanced topics covered in this file:**
> 1. Harmonic Progression (HP) & AM ≥ GM ≥ HM (G² = AH), Vₙ Telescoping Method (Numerator & Denominator Products), Term-Splitting AM-GM Optimization, Aur Higher-Order Difference Series

---

# Gehrai Mein: HP, AM ≥ GM ≥ HM, Aur Vₙ Telescoping Series

Core chapter mein tumne AP, GP, AM ≥ GM, aur Σ k, Σ k², Σ k³ seekhe the. Lekin jab series **1/(1·2·3) + 1/(2·3·4) + ...** jaisi fractions mein ho, ya jab **x² + 16/x** ki minimum value nikaalni ho (jahan x² · 16/x = 16x cancel nahi hota!), ya **Harmonic Mean** poochha jaye — to yeh advanced techniques 2 minute ke sawalon ko 15 seconds mein khatam karti hain!

---

## Shyam ka highway average-speed puzzle

Shyam ek logistics fleet analyst hai. Ek truck Delhi se Jaipur 40 km/h ki speed se gaya aur wahi distance 60 km/h ki speed se wapas aaya.
Driver ne kaha: "Average speed (40 + 60)/2 = 50 km/h hui!"
Shyam muskuraaya: "Nahi! Barabar distances par average speed Arithmetic Mean nahi, balki **Harmonic Mean H = 2ab / (a + b)** hoti hai:
H = (2 × 40 × 60) / (40 + 60) = 4800 / 100 = **48 km/h**!
Aur dekho: AM = 50, GM = √2400 ≈ 48.99, HM = 48 => hamesha **AM ≥ GM ≥ HM** aur **GM² = AM × HM** (2400 = 50 × 48)!"

---

## Part A: Harmonic Progression (HP) Aur AM ≥ GM ≥ HM

1. **Definition:** Non-zero numbers a₁, a₂, a₃, ... **HP** mein hote hain iff unke reciprocals **1/a₁, 1/a₂, 1/a₃, ... AP** mein hon!
   - HP ka n-th term: pehle AP ka n-th term nikaalo, phir uska reciprocal le lo!
2. **Harmonic Mean (HM) between a and b:**
   1/a, 1/H, 1/b AP mein hain => 2/H = 1/a + 1/b = (a + b)/(ab) => **H = 2ab / (a + b)**.
3. **Golden Chain (for positive a, b > 0):**
   - **A · H** = [(a + b)/2] · [2ab/(a + b)] = ab = **G²**! (Yaani **A, G, H khud ek GP banate hain!**)
   - Kyunki A ≥ G > 0 aur G² = A · H => G / H = A / G ≥ 1 => **G ≥ H**!
   - Isliye hamesha: **A ≥ G ≥ H** (equality iff a = b)!

---

## Part B: Vₙ Telescoping Method (Method Of Differences)

Jab har term Tᵣ consecutive AP factors ka product ho:

### Case 1: Factors Numerator Mein (e.g. Tᵣ = r(r + 1)(r + 2))
Ek agla factor aage aur ek pichhla factor peechhe lagakar **Vᵣ - Vᵣ₋₁** banao!
r(r + 1)(r + 2) = (1/4) [ r(r + 1)(r + 2)(r + 3) - (r - 1)r(r + 1)(r + 2) ] = Vᵣ - Vᵣ₋₁!
Sabhi r = 1..n jodne par saare beech ke terms cut jaate hain:
**Sₙ = Vₙ - V₀ = n(n + 1)(n + 2)(n + 3) / 4**!

### Case 2: Factors Denominator Mein (e.g. Tᵣ = 1 / [r(r + 1)(r + 2)])
Numerator mein (last factor - first factor) = (r + 2) - r = 2 banao:
Tᵣ = (1/2) [ ((r + 2) - r) / (r(r + 1)(r + 2)) ]
= **(1/2) [ 1 / (r(r + 1)) - 1 / ((r + 1)(r + 2)) ]**!
Telescoping sum (r = 1..n):
**Sₙ = (1/2) [ 1/(1·2) - 1/((n + 1)(n + 2)) ] = (1/4) - 1/[2(n + 1)(n + 2)]**!
Aur jab n -> ∞: **S_∞ = 1/4**!

---

## Part C: Term-Splitting AM-GM Optimization (Master Trick!)

Agar expression **x² + 16/x** (x > 0) ko minimize karna ho, to direct 2-term AM-GM mein x² · (16/x) = 16x cancel nahi hota!
**Trick:** 16/x ko **do barabar tukdon (8/x + 8/x)** mein baanto taaki teen terms ka product constant ban jaye:
x² · (8/x) · (8/x) = **64** (x poora cancel!)!
Ab 3-term AM ≥ GM lagao:
(x² + 8/x + 8/x) / 3 ≥ (64)^(1/3) = 4
=> **x² + 16/x ≥ 12**! (Equality jab x² = 8/x => x³ = 8 => **x = 2**!)

---

## 6 Deep Advanced Solved Problems (Step-by-Step With Jaanch)

### Problem 1: HP Term Finding (No Direct Formula Needed!)
**Sawaal:** Ek HP ka 3rd term 1/7 aur 7th term 1/15 hai. Is HP ka 15th term gyat karo.

**Solution:**
Reciprocals AP mein hain: T₃(AP) = 7 aur T₇(AP) = 15.
a + 2d = 7 aur a + 6d = 15 => 4d = 8 => d = 2, a = 3.
AP ka 15th term: T₁₅(AP) = 3 + 14(2) = **31**.
Isliye HP ka 15th term = **1/31**!

Jaanch:
- Jaanch: AP is 3, 5, 7, 9, 11, 13, 15, ... => T₃ = 7, T₇ = 15, T₁₅ = 31 => HP term = 1/31 ✅

---

### Problem 2: Finding Two Numbers Given AM And HM
**Sawaal:** Do positive numbers ka AM = 10 aur HM = 6.4 hai. Dono numbers gyat karo.

**Solution:**
Use **G² = A · H**:
G² = 10 × 6.4 = 64 => G = 8!
Quadratic equation x² - 2Ax + G² = 0:
x² - 20x + 64 = 0 => (x - 16)(x - 4) = 0 => **16 aur 4**.

Jaanch:
- Jaanch: AM = (16 + 4)/2 = 10; HM = 2(16)(4)/(16 + 4) = 128/20 = 6.4 ✅

---

### Problem 3: Infinite Telescoping Sum With 3 Factors In Denominator
**Sawaal:** Evaluate the infinite sum: **1/(1·3·5) + 1/(3·5·7) + 1/(5·7·9) + ...**

**Solution:**
General term Tᵣ = 1 / [(2r - 1)(2r + 1)(2r + 3)].
Last factor - first factor = (2r + 3) - (2r - 1) = **4**!
Tᵣ = (1/4) [ 1/((2r - 1)(2r + 1)) - 1/((2r + 1)(2r + 3)) ].

Telescoping sum to n terms:
Sₙ = (1/4) [ 1/(1·3) - 1/((2n + 1)(2n + 3)) ].
As n -> ∞, second term -> 0:
**S_∞ = (1/4)(1/3) = 1/12**!

Jaanch:
- Jaanch: First term alone is 1/15 = 0.0667, second adds 1/105 ≈ 0.0095, third adds 1/315 ≈ 0.0032 => sum ≈ 0.0794 approaching 1/12 ≈ 0.0833 ✅

---

### Problem 4: Term-Splitting AM-GM Optimization
**Sawaal:** Positive real x > 0 ke liye **x³ + 27/x** ki minimum value gyat karo.

**Solution:**
x³ ko cancel karne ke liye 27/x ko **3 equal tukdon (9/x + 9/x + 9/x)** mein split karo!
4 positive terms: x³, 9/x, 9/x, 9/x.
Product = x³ · (9/x)³ = 9³ = 3⁶.
4-term AM ≥ GM:
(x³ + 9/x + 9/x + 9/x) / 4 ≥ (3⁶)^(1/4) = 3^(3/2) = 3√3
=> **x³ + 27/x ≥ 12√3**!
Equality jab x³ = 9/x => x⁴ = 9 => **x = √3**!

Jaanch:
- Jaanch: At x = √3: (√3)³ + 27/√3 = 3√3 + 9√3 = 12√3 ✅

---

### Problem 5: Telescoping Series With r / (r + 1)!
**Sawaal:** Evaluate **1/2! + 2/3! + 3/4! + ... + n/(n + 1)!**.

**Solution:**
General term Tᵣ = r / (r + 1)!.
Write numerator r = (r + 1) - 1:
Tᵣ = [(r + 1) - 1] / (r + 1)! = (r + 1)/(r + 1)! - 1/(r + 1)! = **1/r! - 1/(r + 1)!**!

Telescoping sum (r = 1..n):
Sₙ = (1/1! - 1/2!) + (1/2! - 1/3!) + ... + (1/n! - 1/(n + 1)!)
= **1 - 1 / (n + 1)!**!

Jaanch:
- Jaanch: For n = 3: 1/2 + 2/6 + 3/24 = 12/24 + 8/24 + 3/24 = 23/24; Formula: 1 - 1/4! = 1 - 1/24 = 23/24 ✅

---

### Problem 6: Maximizing A Product With Linear Constraint Using Term-Splitting
**Sawaal:** Agar x, y > 0 aur **2x + 3y = 12** ho, to **x² y³** ki maximum value gyat karo.

**Solution:**
Product x² y³ mein x ki power **2** aur y ki power **3** hai!
Isliye 2x ko **2 equal tukdon (x + x)** aur 3y ko **3 equal tukdon (y + y + y)** mein split karo!
5 positive terms: x, x, y, y, y (sum = 2x + 3y = 12!).
By 5-term AM ≥ GM:
(x + x + y + y + y) / 5 ≥ (x² y³)^(1/5)
12 / 5 ≥ (x² y³)^(1/5)
=> **x² y³ ≤ (12/5)⁵**!
Equality jab x = y = 12/5!

Jaanch:
- Jaanch: At x = y = 12/5: 2(12/5) + 3(12/5) = 60/5 = 12, and x² y³ = (12/5)⁵ ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: HP ka sum nikaalne ke liye AP ke sum ka reciprocal le lena
- **Galat soch:** "HP ka n-th term AP ka reciprocal hai, to HP ka sum bhi AP ke sum ka reciprocal hoga."
- **Sahi samajh:** Bilkul galat! 1/a + 1/b ≠ 1/(a + b)! HP ke sum ka koi simple closed formula nahi hota — reciprocal sirf **individual terms** par chalta hai!

### Galti 2: Term-splitting AM-GM mein terms ko unequal parts mein tod dena
- **Galat soch:** "x² + 16/x ko x² + 10/x + 6/x mein tod diya."
- **Sahi samajh:** Equality condition ke liye sabhi split terms barabar hone chahiye (10/x = 6/x kabhi nahi ho sakta!)! Hamesha **equal parts** (8/x + 8/x) mein todo!

### Galti 3: Telescoping fraction mein (last - first) factor se divide karna bhool jaana
- **Galat soch:** "1/[r(r + 2)] = 1/r - 1/(r + 2)."
- **Sahi samajh:** 1/r - 1/(r + 2) = **2** / [r(r + 2)] hota hai! Isliye bahar **1/2** se divide karna zaroori hai!

---

## Quick Recap

- **HP & HM:** Reciprocals in AP; H = 2ab/(a + b); **A ≥ G ≥ H** and **G² = A · H**.
- **Vₙ Telescoping:** Split Tᵣ = Vᵣ - Vᵣ₋₁ => Sₙ = Vₙ - V₀.
- **Term-Splitting AM-GM:** Split terms into **equal** parts matching the powers so variables cancel completely!
- **Factorial Telescoping:** r / (r + 1)! = 1/r! - 1/(r + 1)!.

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Find the 10th term of the HP: 1/2, 1/5, 1/8, 1/11, ...

**Solution:**
Corresponding AP: 2, 5, 8, 11, ... (a = 2, d = 3).
T₁₀(AP) = 2 + 9(3) = 29 => T₁₀(HP) = **1/29**.

Jaanch:
- Jaanch: AP terms 2, 5, 8, ..., 29 => reciprocal 1/29 ✅

---

### Question 2
If the AM and GM of two positive numbers are 15 and 12 respectively, find their Harmonic Mean.

**Solution:**
G² = A · H => 12² = 15 · H => H = 144 / 15 = **48/5 = 9.6**.

Jaanch:
- Jaanch: A = 15 > G = 12 > H = 9.6, and 15 × 9.6 = 144 = 12² ✅

---

### Question 3
Evaluate the sum to infinity: 1/(1·2·3) + 1/(2·3·4) + 1/(3·4·5) + ...

**Solution:**
Tᵣ = (1/2) [1/(r(r + 1)) - 1/((r + 1)(r + 2))].
S_∞ = (1/2) [1/(1·2) - 0] = **1/4**.

Jaanch:
- Jaanch: S₁ = 1/6, S₂ = 1/6 + 1/24 = 5/24, S₃ = 5/24 + 1/60 = 27/120 = 0.225 -> 0.25 = 1/4 ✅

---

### Question 4
Find the sum to n terms of 1/(1·4) + 1/(4·7) + 1/(7·10) + ... + 1/[(3n - 2)(3n + 1)].

**Solution:**
Difference of factors = 3 => Tᵣ = (1/3)[1/(3r - 2) - 1/(3r + 1)].
Sₙ = (1/3)[1/1 - 1/(3n + 1)] = (1/3)[3n / (3n + 1)] = **n / (3n + 1)**.

Jaanch:
- Jaanch: For n = 1: 1/4; for n = 2: 1/4 + 1/28 = 8/28 = 2/7 = 2/(6 + 1) ✅

---

### Question 5
Find the minimum value of x² + 16/x for x > 0.

**Solution:**
Split 16/x = 8/x + 8/x. By 3-term AM ≥ GM:
(x² + 8/x + 8/x)/3 ≥ (64)^(1/3) = 4 => **x² + 16/x ≥ 12** (at x = 2).

Jaanch:
- Jaanch: At x = 2: 4 + 8 = 12; at x = 1: 1 + 16 = 17 > 12 ✅

---

### Question 6
If a, b, c > 0 and a + b + c = 9, find the maximum value of a b² c³.

**Solution:**
Split into 6 terms: a, b/2, b/2, c/3, c/3, c/3 (sum = a + b + c = 9).
By 6-term AM ≥ GM:
9/6 ≥ (a · b²/4 · c³/27)^(1/6) = (a b² c³ / 108)^(1/6)
=> a b² c³ ≤ 108 · (3/2)⁶ = 108 × (729 / 64) = **19,683 / 16**.

Jaanch:
- Jaanch: Equality at a = 3/2, b = 3, c = 9/2 (sum = 9): (3/2)(9)(729/8) = 19683/16 ✅

---

### Question 7
Evaluate Σ_{r=1}^{10} r / (r + 1)!.

**Solution:**
From Problem 5: Sₙ = 1 - 1/(n + 1)!.
For n = 10: **1 - 1/11!**.

Jaanch:
- Jaanch: Telescopes from 1/1! down to -1/11! ✅

---

### Question 8
If a, b, c are in HP, prove that (a - b) / (b - c) = a / c.

**Solution:**
1/a, 1/b, 1/c in AP => 1/b - 1/a = 1/c - 1/b
=> (a - b)/(ab) = (b - c)/(bc).
Cancel b (b ≠ 0) and cross-multiply: **(a - b)/(b - c) = a / c**.

Jaanch:
- Jaanch: Test HP 6, 3, 2: (6 - 3)/(3 - 2) = 3/1 = 6/2 ✅

---

### Question 9
Evaluate the sum to n terms of 1·2·3·4 + 2·3·4·5 + ... + n(n + 1)(n + 2)(n + 3).

**Solution:**
Vᵣ method: Tᵣ = (1/5)[r(r + 1)(r + 2)(r + 3)(r + 4) - (r - 1)r(r + 1)(r + 2)(r + 3)].
Sₙ = **n(n + 1)(n + 2)(n + 3)(n + 4) / 5**.

Jaanch:
- Jaanch: For n = 1: 1·2·3·4 = 24; Formula: 1·2·3·4·5/5 = 24 ✅

---

### Question 10
Evaluate the infinite sum 1 + 2(1/4) + 3(1/4)² + 4(1/4)³ + ...

**Solution:**
Infinite AGP with a = 1, d = 1, r = 1/4:
S_∞ = a/(1 - r) + dr/(1 - r)² = 1/(3/4) + (1/4)/(9/16) = 4/3 + 4/9 = **16/9**.

Jaanch:
- Jaanch: 1/(1 - 1/4)² = 1/(9/16) = 16/9 ✅

---

### Question 11
If x, y, z > 0, prove that (x + y + z)(1/x + 1/y + 1/z) ≥ 9 using AM ≥ HM.

**Solution:**
For x, y, z > 0: AM = (x + y + z)/3 and HM = 3 / (1/x + 1/y + 1/z).
Since AM ≥ HM:
(x + y + z)/3 ≥ 3 / (1/x + 1/y + 1/z)
=> **(x + y + z)(1/x + 1/y + 1/z) ≥ 9**!

Jaanch:
- Jaanch: Equality holds iff x = y = z ✅

---

### Question 12
Find the sum to infinity of 1/(2·4) + 1/(4·6) + 1/(6·8) + ...

**Solution:**
Tᵣ = 1/[(2r)(2r + 2)] = (1/2)[1/(2r) - 1/(2r + 2)].
S_∞ = (1/2)[1/2 - 0] = **1/4**.

Jaanch:
- Jaanch: Factor out 1/4: (1/4)[1/(1·2) + 1/(2·3) + ...] = (1/4)(1) = 1/4 ✅

---

Ab tumne **Sequences and Series** ki advanced mastery — HP, AM ≥ GM ≥ HM, Vₙ Telescoping, aur Term-Splitting Optimization — ko poori tarah master kar liya hai!
