# Chapter: Relations and Functions (Advanced — Gehrai Mein)

> **Class:** 11 | **Subject:** Mathematics | **Level:** Advanced (Gehrai Mein)
> **Core chapter yahan complete hua tha:** [relations-and-functions-part5.md](relations-and-functions-part5.md) (Topic 5: Sab Kuch Mila Kar aur Chapter Wrap-up). Is advanced file mein hum Greatest Integer & Fractional Part identities, Discriminant method se range, Even-Odd decomposition, aur Functional Equations ko gehrai se master karenge!
> **Advanced topics covered in this file:**
> 1. Greatest Integer [x] & Fractional Part {x} Identities, Quadratic-over-Quadratic Range (D ≥ 0 Method), Even/Odd Decomposition, Aur Functional Equations

---

# Gehrai Mein: Advanced Functions & Functional Equations

Core chapter mein tumne 7 standard functions aur basic domain-range seekhe the. Lekin jab functions mein **[x] (Greatest Integer)**, **{x} (Fractional Part)**, quadratic fractions **f(x) = (x² + x + 1)/(x² - x + 1)**, ya **functional equations** jaise 2f(x) + f(1 - x) = x² aate hain, to seedhe graphs se kaam nahi chalta — wahan sharp algebraic tools chahiye!

---

## Ila ka digital audio quantizer

Ila ek digital audio-signal engineer hai. Jab ek smooth analog sound wave x computer mein jaati hai, to quantizer chip use do hisson mein tod deti hai:
- Step level: **[x]** (Greatest Integer ≤ x)
- Quantization error (sawtooth wave): **{x} = x - [x]** (hamesha 0 ≤ {x} < 1!)

Ila ne notice kiya ki jab x ek negative non-integer hota hai — jaise x = -2.3 — to [-2.3] = -3 hota hai (-2 nahi!), isliye [2.3] + [-2.3] = 2 + (-3) = **-1** aata hai (0 nahi)! Yehi chhoti si property advanced floor-function equations ki sabse badi key hai!

---

## Part A: Greatest Integer [x] Aur Fractional Part {x} Ki Master Identities

Har real number x ke liye: **x = [x] + {x}**, jahan [x] ∈ Z aur **0 ≤ {x} < 1**.

1. **Integer Shift:** Kisi bhi integer n ∈ Z ke liye: **[x + n] = [x] + n**, aur **{x + n} = {x}** (yaani {x} periodic hai with period 1!).
2. **Reflection Property ([x] + [-x]):**
   - Agar x ∈ Z (integer): **[x] + [-x] = 0** (aur {-x} = 0).
   - Agar x ∉ Z (non-integer): **[x] + [-x] = -1** (aur {x} + {-x} = 1)!
3. **Inequality Rules (n ∈ Z):**
   - [x] = n  <=>  **n ≤ x < n + 1**
   - [x] ≥ n  <=>  **x ≥ n**
   - [x] ≤ n  <=>  **x < n + 1**  *(dhyan do: n + 1 strict inequality!)*

---

## Part B: Range Of Quadratic / Quadratic Using Discriminant (D ≥ 0)

Jab f(x) = (ax² + bx + c) / (px² + qx + r) ka range chahiye:
1. Maan lo **y = f(x)** aur cross-multiply karke x mein ek quadratic equation banao:
   (py - a)x² + (qy - b)x + (ry - c) = 0.
2. Kyunki x **real** hai, is quadratic ka discriminant **D ≥ 0** hona zaroori hai!
   *(Special check: agar leading coefficient py - a = 0 ho, yaani y = a/p, to use alag se check karo ki kya koi real x use attain karta hai!)*
3. D ≥ 0 ki inequality solve karne par exact **Range of y** mil jata hai!

---

## Part C: Even & Odd Functions Aur Unique Decomposition

- **Even Function:** f(-x) = f(x) (y-axis ke symmetric; jaise x², cos x, |x|).
- **Odd Function:** f(-x) = -f(x) (origin ke symmetric; jaise x³, sin x; agar 0 domain mein ho to **f(0) = 0** pakka!).
- **Unique Decomposition Theorem ("Kyun"!):** Kisi bhi function f(x) (symmetric domain par) ko uniquely ek Even + ek Odd function ke sum mein likha ja sakta hai:
  **f(x) = [f(x) + f(-x)] / 2  +  [f(x) - f(-x)] / 2**
  - Pehla hissa E(x) = [f(x) + f(-x)]/2 hamesha **Even** hai (E(-x) = E(x)).
  - Doosra hissa O(x) = [f(x) - f(-x)]/2 hamesha **Odd** hai (O(-x) = -O(x)).

---

## Part D: Functional Equations (Substitution Trick)

Jab f(x) aur f(1 - x) ya f(x) aur f(1/x) ek equation mein hon:
- x ko **(1 - x)** ya **(1/x)** se replace karke **doosri equation** banao!
- Dono simultaneous equations solve karke f(1 - x) ya f(1/x) eliminate karo — seedha **f(x)** mil jata hai!

---

## 6 Deep Advanced Solved Problems (Step-by-Step With Jaanch)

### Problem 1: Range Of A Quadratic-Over-Quadratic Function
**Sawaal:** Real function f(x) = (x² + x + 1) / (x² - x + 1) ka exact Range gyat karo.

**Solution:**
Pehle denominator check karo: x² - x + 1 = (x - 1/2)² + 3/4 > 0 (kabhi zero nahi hota => Domain = R).
Let y = (x² + x + 1)/(x² - x + 1):
y(x² - x + 1) = x² + x + 1
(y - 1)x² - (y + 1)x + (y - 1) = 0.

- **Case 1 (y = 1):** -2x = 0 => x = 0 ∈ R (so y = 1 range mein hai!).
- **Case 2 (y ≠ 1):** Real x ke liye Discriminant D ≥ 0:
  [-(y + 1)]² - 4(y - 1)(y - 1) ≥ 0
  (y + 1)² - [2(y - 1)]² ≥ 0
  [(y + 1) - 2(y - 1)] [(y + 1) + 2(y - 1)] ≥ 0
  (3 - y)(3y - 1) ≥ 0
  (y - 3)(3y - 1) ≤ 0
  => **1/3 ≤ y ≤ 3**!

Range = **[1/3, 3]**.

Jaanch:
- Jaanch: At x = -1: f(-1) = (1 - 1 + 1)/(1 + 1 + 1) = 1/3 (min!); at x = 1: f(1) = 3/1 = 3 (max!) ✅

---

### Problem 2: Domain Of A Tricky Radical + Floor Function
**Sawaal:** Function f(x) = 1 / √([x]² - [x] - 6) ka Domain gyat karo.

**Solution:**
Denominator mein square root strictly positive hona chahiye:
[x]² - [x] - 6 > 0
([x] - 3)([x] + 2) > 0
=> **[x] < -2**  ya  **[x] > 3**.

Kyunki [x] ek integer hai:
- [x] < -2  <=>  [x] ≤ -3  <=>  **x < -2**  (yaani (-∞, -2))
- [x] > 3   <=>  [x] ≥ 4   <=>  **x ≥ 4**   (yaani [4, ∞))

Domain = **(-∞, -2) ∪ [4, ∞)**.

Jaanch:
- Jaanch: Test x = -2.1 ([x] = -3 => 9 + 3 - 6 = 6 > 0); test x = -2 ([x] = -2 => 4 + 2 - 6 = 0, invalid); test x = 4 ([x] = 4 => 16 - 4 - 6 = 6 > 0) ✅

---

### Problem 3: Solving A Functional Equation With x -> 1 - x
**Sawaal:** Agar sabhi real x ke liye **2 f(x) + f(1 - x) = x²** ho, to f(x) gyat karo.

**Solution:**
Given: 2 f(x) + f(1 - x) = x²   --- (1)
Replace x by (1 - x) in (1):
2 f(1 - x) + f(x) = (1 - x)²   --- (2)

f(1 - x) eliminate karne ke liye (1) × 2 - (2) karo:
[4 f(x) + 2 f(1 - x)] - [f(x) + 2 f(1 - x)] = 2x² - (1 - x)²
3 f(x) = 2x² - (1 - 2x + x²) = x² + 2x - 1
**f(x) = (x² + 2x - 1) / 3**.

Jaanch:
- Jaanch: Check 2f(x) + f(1 - x) at x = 2: f(2) = 7/3, f(-1) = -2/3 => 2(7/3) + (-2/3) = 12/3 = 4 = 2² ✅

---

### Problem 4: Solving A Functional Equation With x -> 1/x
**Sawaal:** Sabhi non-zero real x ke liye **3 f(x) + 2 f(1/x) = 1/x - 10** diya hai. f(2) ki value gyat karo.

**Solution:**
Direct x = 2 aur x = 1/2 rakhna sabse tez hai!
- Put x = 2: 3 f(2) + 2 f(1/2) = 1/2 - 10 = -19/2   --- (1)
- Put x = 1/2: 3 f(1/2) + 2 f(2) = 2 - 10 = -8      --- (2)

(1) × 3 - (2) × 2 karo:
[9 f(2) + 6 f(1/2)] - [4 f(2) + 6 f(1/2)] = -57/2 - (-16)
5 f(2) = (-57 + 32)/2 = -25/2
**f(2) = -5/2**.

Jaanch:
- Jaanch: From (2): 3 f(1/2) = -8 - 2(-5/2) = -3 => f(1/2) = -1. Check (1): 3(-5/2) + 2(-1) = -15/2 - 2 = -19/2 ✅

---

### Problem 5: Equation Involving [x] And {x}
**Sawaal:** Real x ke liye equation **4 {x} = x + [x]** solve karo.

**Solution:**
Write x = [x] + {x}:
4 {x} = ([x] + {x}) + [x]
3 {x} = 2 [x]
**{x} = (2/3) [x]**.

Kyunki **0 ≤ {x} < 1**:
0 ≤ (2/3) [x] < 1
0 ≤ [x] < 3/2 = 1.5.

Kyunki [x] ek integer hai, sirf **do values** possible hain: [x] = 0 ya [x] = 1!
- If [x] = 0: {x} = 0 => x = 0 + 0 = **0**.
- If [x] = 1: {x} = 2/3 => x = 1 + 2/3 = **5/3**.

Solutions: **x = 0** aur **x = 5/3**.

Jaanch:
- Jaanch (x = 5/3): [5/3] = 1, {5/3} = 2/3 => LHS = 4(2/3) = 8/3, RHS = 5/3 + 1 = 8/3 ✅

---

### Problem 6: Sum Of Floor Values Using Reflection Property
**Sawaal:** Evaluate the exact sum: **[1/4] + [1/4 + 1/100] + [1/4 + 2/100] + ... + [1/4 + 99/100]**.

**Solution:**
Har term ka roop **[25/100 + k/100] = [(25 + k) / 100]** hai (jahan k = 0, 1, 2, ..., 99)!
- Jab 25 + k < 100 (yaani k = 0, 1, ..., 74 — kul 75 terms): (25 + k)/100 ∈ (0, 1) => floor = **0**!
- Jab 100 ≤ 25 + k < 200 (yaani k = 75, 76, ..., 99 — kul 25 terms): (25 + k)/100 ∈ [1, 1.24] => floor = **1**!

Total sum = 75(0) + 25(1) = **25**!

Jaanch:
- Jaanch: Hermite's Identity check: Σ_{k=0}^{n-1} [x + k/n] = [nx] => [100 × 1/4] = [25] = 25 ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: [-2.3] = -2 likh dena
- **Galat soch:** "2.3 ka integer part 2 hai, to -2.3 ka -2 hoga."
- **Sahi samajh:** [x] ka matlab **x se chhota ya barabar sabse bada integer** (number line par left side!). -2.3 ke left mein **-3** hai, isliye **[-2.3] = -3** aur **{-2.3} = -2.3 - (-3) = +0.7**!

### Galti 2: [x] ≤ 3 ko x ≤ 3 likh dena
- **Galat soch:** "[x] ≤ 3 matlab x ≤ 3."
- **Sahi samajh:** x = 3.99 ka floor bhi 3 hi hota hai! Isliye [x] ≤ 3 ka exact matlab **x < 4** hota hai!

### Galti 3: Quadratic range mein leading coefficient = 0 case miss kar dena
- **Galat soch:** "Bas D ≥ 0 solve kar diya aur khatam."
- **Sahi samajh:** D ≥ 0 sirf tab valid hai jab x² ka coefficient **non-zero** ho! Leading coefficient 0 hone wala y-value (jaise Problem 1 mein y = 1) hamesha alag se check karo!

---

## Quick Recap

- **[x] + [-x]:** 0 (if x ∈ Z) aur -1 (if x ∉ Z); **{x} ∈ [0, 1)** always!
- **Range of Q(x)/R(x):** Set y = f(x), form quadratic in x, solve D ≥ 0 (and check leading coeff = 0 separately).
- **Even + Odd Decomposition:** f(x) = [f(x) + f(-x)]/2 + [f(x) - f(-x)]/2.
- **Functional Equations:** Replace x by 1 - x (or 1/x) to create a second equation and eliminate!

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Find the range of the function f(x) = x / (1 + x²) for all x ∈ R.

**Solution:**
Let y = x/(1 + x²) => yx² - x + y = 0.
- If y = 0: -x = 0 => x = 0 ∈ R (so 0 is in range).
- If y ≠ 0: D = (-1)² - 4y² ≥ 0 => 4y² ≤ 1 => -1/2 ≤ y ≤ 1/2.
Range = **[-1/2, 1/2]**.

Jaanch:
- Jaanch: f(1) = 1/2 (max), f(-1) = -1/2 (min), f(0) = 0 ✅

---

### Question 2
Find the domain of f(x) = 1 / √(x - [x]).

**Solution:**
x - [x] = {x} must be strictly positive ({x} > 0).
{x} = 0 iff x is an integer (x ∈ Z).
Therefore, Domain = **R - Z** (all non-integer real numbers).

Jaanch:
- Jaanch: For any integer n, n - [n] = 0 (division by 0!); for any non-integer, 0 < {x} < 1 ✅

---

### Question 3
Find the domain of f(x) = √([x]² - 3[x] + 2).

**Solution:**
[x]² - 3[x] + 2 ≥ 0 => ([x] - 1)([x] - 2) ≥ 0.
Since [x] is an integer, EVERY integer satisfies either [x] ≤ 1 or [x] ≥ 2! (No integer lies strictly between 1 and 2!)
Therefore, Domain = **R** (all real numbers)!

Jaanch:
- Jaanch: Test [x] = 1 -> 0 ≥ 0; [x] = 2 -> 0 ≥ 0; [x] = 0 -> 2 ≥ 0; [x] = 3 -> 2 ≥ 0 ✅

---

### Question 4
Solve the equation 2{x} = x + [x] for real x.

**Solution:**
Write x = [x] + {x}: 2{x} = 2[x] + {x} => {x} = 2[x].
Since 0 ≤ {x} < 1: 0 ≤ 2[x] < 1 => 0 ≤ [x] < 1/2 => **[x] = 0** only!
Then {x} = 0 => **x = 0**.

Jaanch:
- Jaanch: x = 0 gives 2(0) = 0 + 0 ✅

---

### Question 5
If f(x) + 2 f(1 - x) = x² + 2 for all x ∈ R, find f(x).

**Solution:**
f(x) + 2 f(1 - x) = x² + 2   --- (1)
Replace x by 1 - x:
f(1 - x) + 2 f(x) = (1 - x)² + 2 = x² - 2x + 3   --- (2)
(2) × 2 - (1):
3 f(x) = (2x² - 4x + 6) - (x² + 2) = x² - 4x + 4 = (x - 2)²
**f(x) = (x - 2)² / 3**.

Jaanch:
- Jaanch: At x = 0: f(0) = 4/3, f(1) = 1/3 => 4/3 + 2(1/3) = 2 = 0² + 2 ✅

---

### Question 6
If f(x) satisfies f(x + y) = f(x) + f(y) for all x, y ∈ R and f(1) = 7, find Σ_{r=1}^{10} f(r).

**Solution:**
By repeated addition: f(2) = 2f(1), f(3) = 3f(1), ..., f(r) = r · f(1) = 7r.
Σ_{r=1}^{10} 7r = 7 × (10 × 11 / 2) = 7 × 55 = **385**.

Jaanch:
- Jaanch: 7(1 + 2 + ... + 10) = 7 × 55 = 385 ✅

---

### Question 7
Determine whether f(x) = x(2ˣ - 1)/(2ˣ + 1) is an even function, odd function, or neither.

**Solution:**
Compute f(-x):
f(-x) = (-x)(2⁻ˣ - 1)/(2⁻ˣ + 1)
Multiply top and bottom by 2ˣ:
= (-x)(1 - 2ˣ)/(1 + 2ˣ) = x(2ˣ - 1)/(2ˣ + 1) = **f(x)**.
Therefore, f(x) is an **EVEN** function!

Jaanch:
- Jaanch: At x = 1: 1(1/3) = 1/3; at x = -1: (-1)(-1/2)/(3/2) = 1/3 ✅

---

### Question 8
Find the range of f(x) = (x² + 2x + 3) / x for x > 0.

**Solution:**
Split terms: f(x) = x + 2 + 3/x = 2 + (x + 3/x).
By AM ≥ GM for x > 0: x + 3/x ≥ 2√3 (attained at x = √3).
Therefore f(x) ≥ 2 + 2√3 => Range = **[2 + 2√3, ∞)**.

Jaanch:
- Jaanch: At x = √3: √3 + 2 + 3/√3 = 2 + 2√3 ✅

---

### Question 9
Evaluate [1/2] + [1/2 + 1/50] + [1/2 + 2/50] + ... + [1/2 + 49/50].

**Solution:**
Each term is [(25 + k)/50] for k = 0..49.
- k = 0..24 (25 terms): value < 1 => floor = 0.
- k = 25..49 (25 terms): value in [1, 74/50] => floor = 1.
Total sum = **25**.

Jaanch:
- Jaanch: Hermite's Identity [50 × 1/2] = [25] = 25 ✅

---

### Question 10
If 2 f(x) - 3 f(1/x) = x² (x ≠ 0), find f(2).

**Solution:**
Put x = 2: 2 f(2) - 3 f(1/2) = 4     --- (1)
Put x = 1/2: 2 f(1/2) - 3 f(2) = 1/4 --- (2)
(1) × 2 + (2) × 3:
[4 f(2) - 6 f(1/2)] + [6 f(1/2) - 9 f(2)] = 8 + 3/4 = 35/4
-5 f(2) = 35/4 => **f(2) = -7/4**.

Jaanch:
- Jaanch: From (1): 3 f(1/2) = 2(-7/4) - 4 = -15/2 => f(1/2) = -5/2; check (2): 2(-5/2) - 3(-7/4) = -5 + 21/4 = 1/4 ✅

---

### Question 11
Find the number of solutions of the equation [x] + 2{-x} = 3x.

**Solution:**
- **Case 1 (x ∈ Z):** {-x} = 0, [x] = x => x = 3x => **x = 0**.
- **Case 2 (x ∉ Z):** {-x} = 1 - {x}, x = [x] + {x}:
  [x] + 2(1 - {x}) = 3([x] + {x})
  2 - 2{x} = 2[x] + 3{x} => 5{x} = 2 - 2[x] => {x} = (2 - 2[x])/5.
  Since 0 < {x} < 1: 0 < 2 - 2[x] < 5 => -3/2 < [x] < 1 => [x] ∈ {-1, 0}.
  - [x] = 0 => {x} = 2/5 => **x = 2/5**.
  - [x] = -1 => {x} = 4/5 => **x = -1 + 4/5 = -1/5**.

Total **3 solutions**: x = 0, 2/5, -1/5.

Jaanch:
- Jaanch (x = -1/5): [-1/5] = -1, {+1/5} = 1/5 => -1 + 2/5 = -3/5 = 3(-1/5) ✅

---

### Question 12
Find the range of f(x) = 1 / (2 - cos 3x).

**Solution:**
Since -1 ≤ cos 3x ≤ 1:
-1 ≤ -cos 3x ≤ 1
1 ≤ 2 - cos 3x ≤ 3
Taking reciprocals (all positive, inequality flips!):
**1/3 ≤ 1 / (2 - cos 3x) ≤ 1**.
Range = **[1/3, 1]**.

Jaanch:
- Jaanch: cos 3x = 1 gives 1/(2 - 1) = 1 (max); cos 3x = -1 gives 1/(2 + 1) = 1/3 (min) ✅

---

Ab tumne **Relations and Functions** ke sabse gehre tools — floor/fractional identities, discriminant range, even-odd decomposition, aur functional equations — ko master kar liya hai!
