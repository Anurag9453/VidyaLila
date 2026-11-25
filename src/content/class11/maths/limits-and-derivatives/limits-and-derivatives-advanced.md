# Chapter: Limits and Derivatives (Advanced — Gehrai Mein)

> **Class:** 11 | **Subject:** Mathematics | **Level:** Advanced (Gehrai Mein)
> **Core chapter yahan complete hua tha:** [limits-and-derivatives-part5.md](limits-and-derivatives-part5.md) (Topic 5: Sab Kuch Mila Kar aur Chapter Wrap-up). Is advanced file mein hum Exponential & Logarithmic Limits, 1^∞ Indeterminate Form, Limits at Infinity (∞/∞ & ∞ - ∞), aur Standard Series Expansions ko gehrai se master karenge!
> **Advanced topics covered in this file:**
> 1. Exponential & Logarithmic Limits (Base e), The 1^∞ Master Formula, Limits at Infinity (∞/∞ & Radical ∞ - ∞), Aur Series-Expansion Shortcuts for Tough 0/0 Limits

---

# Gehrai Mein: Exponential Limits, 1^∞ Form, Aur Limits at Infinity

Core chapter mein tumne algebraic aur trigonometric 0/0 limits seekhi thin. Lekin advanced calculus mein teen aur classic indeterminate forms baar-baar aate hain: **1^∞**, **∞/∞**, aur **∞ - ∞**, saath hi **eˣ** aur **ln(1 + x)** ke limits! Chalo inhe ek crisp toolkit mein master karte hain!

---

## Chhavi ka continuous-compounding bank model

Chhavi ek quantitative finance analyst hai. Agar ₹1 par 100% annual interest ko saal mein n baar compound kiya jaye, to saal ke end mein amount hota hai **(1 + 1/n)ⁿ**:
- n = 1 (yearly): 2.000
- n = 12 (monthly): 2.613
- n = 365 (daily): 2.7145
- n -> ∞ (har millisecond — continuous!): amount **e ≈ 2.71828** par converge karta hai!

Chhavi ne samjhaya: "Base 1 + 1/n -> 1 aur power n -> ∞, par 1^∞ ka answer 1 nahi balki **e** aata hai! Isi se poora **1^∞ Master Formula** paida hota hai!"

---

## Part A: Standard Exponential & Logarithmic Limits (Stated, Checked On Examples)

Natural logarithm (base e ≈ 2.71828) ko **ln x** (ya logₑ x) likhte hain:
1. **lim_{x->0} (eˣ - 1) / x = 1**
2. **lim_{x->0} (aˣ - 1) / x = ln a**   *(jahan a > 0)*
3. **lim_{x->0} [ln(1 + x)] / x = 1**
4. **lim_{x->0} (1 + x)^(1/x) = e**   aur   **lim_{n->∞} (1 + 1/n)ⁿ = e**

---

## Part B: The 1^∞ Master Formula ("Kyun"!)

Agar lim_{x->a} f(x) = 1 aur lim_{x->a} g(x) = ∞ (yaani **1^∞ form**):
Write f(x) = 1 + [f(x) - 1] (jahan u(x) = f(x) - 1 -> 0!):
[f(x)]^(g(x)) = { [1 + u(x)]^(1 / u(x)) }^( u(x) · g(x) )

Kyunki [1 + u(x)]^(1/u(x)) -> **e** as u(x) -> 0:
**lim_{x->a} [f(x)]^(g(x)) = e^( lim_{x->a} [f(x) - 1] · g(x) )**!

---

## Part C: Limits At Infinity (∞/∞ Aur ∞ - ∞ Forms)

1. **Rational function P(x) / Q(x) as x -> ∞:**
   Numerator aur denominator ko **x ki highest power** se divide karo (kyunki 1/x -> 0 as x -> ∞!):
   - Agar deg(P) < deg(Q) => Limit = **0**
   - Agar deg(P) = deg(Q) => Limit = **ratio of leading coefficients**
   - Agar deg(P) > deg(Q) => Limit = **±∞** (does not exist finitely)
2. **Radical ∞ - ∞ form:** Conjugate se multiply (rationalize) karke ∞/∞ form banao!
   - Golden shortcut: **lim_{x->∞} [√(x² + ax + b) - x] = a / 2**!

---

## Part D: Standard Series Expansions For Tough 0/0 Limits (Near x = 0)

Jab (sin x - x)/x³ ya (eˣ - 1 - x)/x² jaise higher-order 0/0 limits aayein, to pehle 2–3 terms of Maclaurin series (stated, checked numerically!) turant answer dete hain:
- **eˣ = 1 + x + x²/2! + x³/3! + ...**
- **ln(1 + x) = x - x²/2 + x³/3 - ...**   (-1 < x ≤ 1)
- **sin x = x - x³/6 + x⁵/120 - ...**
- **cos x = 1 - x²/2 + x⁴/24 - ...**
- **tan x = x + x³/3 + 2x⁵/15 + ...**

---

## 6 Deep Advanced Solved Problems (Step-by-Step With Jaanch)

### Problem 1: Evaluating An Exponential + Log Limit
**Sawaal:** Evaluate **lim_{x->0} (3ˣ - 2ˣ) / x**.

**Solution:**
Numerator mein 1 ghatao aur 1 jodo:
(3ˣ - 2ˣ) / x = (3ˣ - 1)/x - (2ˣ - 1)/x.

Standard limit (aˣ - 1)/x -> ln a lagao:
= ln 3 - ln 2 = **ln(3/2)**!

Jaanch:
- Jaanch: Numerical check at x = 0.001: (3^0.001 - 2^0.001)/0.001 ≈ 0.4055 = ln(1.5) ✅

---

### Problem 2: 1^∞ Form With Rational Base
**Sawaal:** Evaluate **lim_{x->∞} [(x + 5) / (x + 1)]^(2x + 3)**.

**Solution:**
As x -> ∞, base (x + 5)/(x + 1) -> 1 aur exponent 2x + 3 -> ∞ => **1^∞ form**!
Master Formula lagao: L = e^( lim_{x->∞} [f(x) - 1] · g(x) ):
f(x) - 1 = (x + 5)/(x + 1) - 1 = **4 / (x + 1)**.

Exponent limit:
lim_{x->∞} [ 4 / (x + 1) ] · (2x + 3) = lim_{x->∞} (8x + 12) / (x + 1) = **8**!

Therefore, Limit = **e⁸**!

Jaanch:
- Jaanch: Base = 1 + 4/(x + 1), exponent = 2(x + 1) + 1 => [1 + 4/(x + 1)]^(2(x + 1)) -> e^(4 × 2) = e⁸ ✅

---

### Problem 3: 1^∞ Form With Trigonometric Base
**Sawaal:** Evaluate **lim_{x->0} (cos x)^(1 / x²)**.

**Solution:**
As x -> 0, cos x -> 1 aur 1/x² -> ∞ => **1^∞ form**!
Exponent limit:
lim_{x->0} (cos x - 1) · (1/x²) = - lim_{x->0} (1 - cos x) / x² = **-1/2**!

Therefore, Limit = **e^(-1/2) = 1 / √e**!

Jaanch:
- Jaanch: Near 0, cos x ≈ 1 - x²/2 => (1 - x²/2)^(1/x²) -> e^(-1/2) ✅

---

### Problem 4: Radical ∞ - ∞ Limit At Infinity
**Sawaal:** Evaluate **lim_{x->∞} [ √(x² + 6x + 5) - √(x² + 2x - 1) ]**.

**Solution:**
Rationalize by multiplying numerator & denominator by [√(x² + 6x + 5) + √(x² + 2x - 1)]:
= lim_{x->∞} [(x² + 6x + 5) - (x² + 2x - 1)] / [√(x² + 6x + 5) + √(x² + 2x - 1)]
= lim_{x->∞} (4x + 6) / [√(x² + 6x + 5) + √(x² + 2x - 1)].

Divide top and bottom by x (x > 0 => x = √(x²)):
= lim_{x->∞} (4 + 6/x) / [√(1 + 6/x + 5/x²) + √(1 + 2/x - 1/x²)]
= 4 / (1 + 1) = **2**!

Jaanch:
- Jaanch: Shortcut check: (x + 6/2) - (x + 2/2) = 3 - 1 = 2 ✅

---

### Problem 5: Tough 0/0 Limit Using Series Expansion
**Sawaal:** Evaluate **lim_{x->0} (x - sin x) / x³**.

**Solution:**
Use sin x = x - x³/6 + x⁵/120 - ...:
x - sin x = x - (x - x³/6 + x⁵/120 - ...) = x³/6 - x⁵/120 + ...

Divide by x³:
(x - sin x)/x³ = 1/6 - x²/120 + ...
As x -> 0: Limit = **1/6**!

Jaanch:
- Jaanch: At x = 0.1 rad: (0.1 - 0.0998334)/0.001 = 0.1666 -> 1/6 ✅

---

### Problem 6: Finding Unknown Parameters a And b For A Finite Limit
**Sawaal:** Agar **lim_{x->0} [ x(1 + a cos x) - b sin x ] / x³ = 1** ho, to a aur b ki exact values gyat karo.

**Solution:**
Use cos x = 1 - x²/2 + ... aur sin x = x - x³/6 + ... in numerator:
x(1 + a(1 - x²/2 + ...)) - b(x - x³/6 + ...)
= (1 + a - b) x + (b/6 - a/2) x³ + (higher powers of x).

Limit ko finite hone ke liye x ka coefficient **0** hona chahiye!
1 + a - b = 0  =>  **b - a = 1**   --- (1)

Ab x³ ka coefficient limit (1) ke barabar hona chahiye!
b/6 - a/2 = 1  =>  **b - 3a = 6**   --- (2)

(1) mein se (2) ghatao:
(b - a) - (b - 3a) = 1 - 6 => 2a = -5 => **a = -5/2**.
From (1): b = 1 + a = 1 - 5/2 = **-3/2**.

Jaanch:
- Jaanch: b - a = -3/2 - (-5/2) = 1; b/6 - a/2 = -1/4 + 5/4 = 4/4 = 1 ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: 1^∞ ko seedhe 1 likh dena
- **Galat soch:** "1 ki koi bhi power 1 hoti hai, isliye lim (1 + 1/n)ⁿ = 1."
- **Sahi samajh:** Exact 1ⁿ = 1 hota hai, par jab base **1 ki taraf ja raha ho (not exact 1!)** aur exponent ∞ ki taraf jaye, to yeh **1^∞ indeterminate form** hai — hamesha **e^(lim (f - 1)g)** lagao!

### Galti 2: lim_{x->0} (2ˣ - 1)/x = 1 likh dena
- **Galat soch:** "eˣ - 1 wala formula sab par 1 deta hai."
- **Sahi samajh:** (eˣ - 1)/x -> ln e = 1 hota hai, par (aˣ - 1)/x -> **ln a** hota hai! Isliye (2ˣ - 1)/x -> **ln 2**!

### Galti 3: x -> -∞ par √(x²) = +x likh dena
- **Galat soch:** "√(x²) hamesha x hota hai."
- **Sahi samajh:** **√(x²) = |x|** hota hai! Jab x -> +∞ ho to |x| = +x, par jab **x -> -∞** ho to **|x| = -x** hota hai!

---

## Quick Recap

- **Exp & Log Limits:** (eˣ - 1)/x -> 1; (aˣ - 1)/x -> ln a; ln(1 + x)/x -> 1; (1 + x)^(1/x) -> e.
- **1^∞ Formula:** lim f(x)^g(x) = e^(lim [f(x) - 1] g(x)).
- **Limits at ∞:** Divide by highest power of x; √(x² + ax + b) - x -> a/2.
- **Series near 0:** sin x ≈ x - x³/6, cos x ≈ 1 - x²/2, tan x ≈ x + x³/3, eˣ ≈ 1 + x + x²/2, ln(1 + x) ≈ x - x²/2.

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Evaluate lim_{x->0} (e^(3x) - 1) / (2x).

**Solution:**
= (3/2) · lim_{x->0} (e^(3x) - 1)/(3x) = (3/2) · 1 = **3/2**.

Jaanch:
- Jaanch: (e^u - 1)/u -> 1 with u = 3x => 3/2 ✅

---

### Question 2
Evaluate lim_{x->0} [ln(1 + 5x)] / (sin 2x).

**Solution:**
= [ 5 · ln(1 + 5x)/(5x) ] / [ 2 · (sin 2x)/(2x) ] -> (5 · 1)/(2 · 1) = **5/2**.

Jaanch:
- Jaanch: Both standard limits approach 1 => 5/2 ✅

---

### Question 3
Evaluate lim_{x->∞} (4x³ - 2x + 7) / (2x³ + 5x² - 1).

**Solution:**
Same degree (3) in top and bottom => ratio of leading coefficients = 4 / 2 = **2**.

Jaanch:
- Jaanch: Dividing by x³ gives (4 - 0 + 0)/(2 + 0 - 0) = 2 ✅

---

### Question 4
Evaluate lim_{x->∞} (1 + 3/x)^(2x).

**Solution:**
1^∞ form: e^( lim_{x->∞} (3/x)(2x) ) = **e⁶**.

Jaanch:
- Jaanch: (1 + 3/x)^(x/3) -> e, raised to power 6 gives e⁶ ✅

---

### Question 5
Evaluate lim_{x->0} (1 + 2x)^(3/x).

**Solution:**
1^∞ form: e^( lim_{x->0} (2x)(3/x) ) = **e⁶**.

Jaanch:
- Jaanch: (2x)(3/x) = 6 => e⁶ ✅

---

### Question 6
Evaluate lim_{x->∞} [√(x² + 8x) - x].

**Solution:**
Rationalize: lim_{x->∞} (8x) / [√(x² + 8x) + x] = 8 / (1 + 1) = **4**.

Jaanch:
- Jaanch: Shortcut a/2 = 8/2 = 4 ✅

---

### Question 7
Evaluate lim_{x->0} (eˣ - 1 - x) / x².

**Solution:**
Series eˣ = 1 + x + x²/2 + x³/6 + ...:
(eˣ - 1 - x)/x² = 1/2 + x/6 + ... -> **1/2**.

Jaanch:
- Jaanch: At x = 0.01: (1.01005017 - 1.01)/0.0001 ≈ 0.5017 -> 1/2 ✅

---

### Question 8
Evaluate lim_{x->0} (tan x - x) / x³.

**Solution:**
Series tan x = x + x³/3 + 2x⁵/15 + ...:
(tan x - x)/x³ = 1/3 + 2x²/15 + ... -> **1/3**.

Jaanch:
- Jaanch: Notice (tan x - sin x)/x³ = (tan x - x)/x³ + (x - sin x)/x³ = 1/3 + 1/6 = 1/2 (matches Ch 12 Part 5 Q12!) ✅

---

### Question 9
Evaluate lim_{x->0} (aˣ - bˣ) / x (where a, b > 0).

**Solution:**
= lim_{x->0} [(aˣ - 1)/x - (bˣ - 1)/x] = ln a - ln b = **ln(a / b)**.

Jaanch:
- Jaanch: Test a = b: numerator = 0 and ln(1) = 0 ✅

---

### Question 10
Evaluate lim_{x->∞} [(2x + 1) / (2x - 3)]^(x + 5).

**Solution:**
1^∞ form! f(x) - 1 = (2x + 1)/(2x - 3) - 1 = 4/(2x - 3).
Exponent limit = lim_{x->∞} [4(x + 5)] / (2x - 3) = 4/2 = **2**.
Limit = **e²**.

Jaanch:
- Jaanch: Leading ratio 4x / 2x = 2 => e² ✅

---

### Question 11
Evaluate lim_{x->0} [1 - cos(2x)] / [ln(1 + x²)].

**Solution:**
Divide top and bottom by x²:
= [ (1 - cos 2x)/x² ] / [ ln(1 + x²)/x² ] -> 2 / 1 = **2**.

Jaanch:
- Jaanch: (1 - cos 2x)/x² = 2 sin² x / x² -> 2 and ln(1 + u)/u -> 1 => 2 ✅

---

### Question 12
Evaluate lim_{x->0} (sin x / x)^(1 / x²).

**Solution:**
1^∞ form! Near 0, sin x / x = 1 - x²/6 + ... => (sin x / x - 1) · (1/x²) = -1/6 + ... -> **-1/6**.
Limit = **e^(-1/6)**.

Jaanch:
- Jaanch: [f(x) - 1]g(x) = (sin x - x)/x³ -> -1/6 => e^(-1/6) ✅

---

Ab tumne **Limits and Derivatives** ke sabse gehre weapons — Exponential/Log Limits, 1^∞ Master Formula, Limits at Infinity, aur Series Expansions — ko master kar liya hai!
