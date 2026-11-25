# Chapter: Limits and Derivatives (Part 4)

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla topic [limits-and-derivatives-part3.md](limits-and-derivatives-part3.md) tha** (Topic 3: Derivative from First Principles aur Sum/Product/Quotient Rules). Power Rule derivation ke liye Chapter 7 ka Binomial Theorem ([binomial-theorem.md](../binomial-theorem/binomial-theorem.md)) aur sin/cos derivation ke liye Chapter 3 ki C-D identities ([trigonometric-functions-part4.md](../trigonometric-functions/trigonometric-functions-part4.md)) kaam aayengi.
> **Topics covered in this file:**
> 1. Derivatives of Polynomial Functions (Power Rule) Aur All Six Trigonometric Functions

---

# Topic 4: Derivatives of Polynomial Aur Trigonometric Functions

Topic 3 mein har baar First Principles ki lambi limit lagana thoda time-taking tha! Ab hum ek baar **Power Rule (d/dx(xⁿ) = n · xⁿ⁻¹)** aur **sin x, cos x** ke derivatives First Principles se pakke derive kar lenge — aur uske baad koi bhi polynomial ya trigonometric expression sirf 2 lines mein differentiate ho jayega!

---

## Divya ka wind-turbine blade vibration model

Divya ek renewable energy plant mein wind-turbine blade vibration engineer hai. Blade ke tip ki displacement do parts ka combination thi:
- Wind-load bending: ek polynomial curve **4t³ - 5t² + 7t - 9**
- Harmonic oscillation: ek trig wave **t² sin t + 3 cos t**

Blade ki exact instantaneous velocity nikaalne ke liye Divya ko dono parts ko differentiate karna tha! Power Rule aur sin/cos/tan ke ready-made derivatives se usne poori velocity equation 30 seconds mein likh di — bina ek bhi lambi limit dobara solve kiye!

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Power Rule** | x ki kisi bhi constant power n ka derivative: d/dx(xⁿ) = n · xⁿ⁻¹ | d/dx(x⁵) = 5x⁴ |
| **Polynomial Derivative** | Har term par Power Rule lagao; constant term ka derivative 0 hota hai | d/dx(4x³ - 9) = 12x² |
| **Co-function Sign Rule** | Jitne bhi "co-" se shuru hone wale trig functions hain (cos, cot, cosec), sabke derivative mein minus (-) aata hai! | d/dx(cos x) = -sin x |

---

## Part A: Power Rule — Derivation ("Kyun"!)

**Theorem:** Kisi bhi positive integer n ke liye:
**d/dx (xⁿ) = n · xⁿ⁻¹**

### Proof (Binomial Theorem Se):
First Principles se:
d/dx(xⁿ) = lim_{h->0} [ (x + h)ⁿ - xⁿ ] / h

Chapter 7 ke [binomial-theorem.md](../binomial-theorem/binomial-theorem.md) se (x + h)ⁿ expand karo:
(x + h)ⁿ = xⁿ + n xⁿ⁻¹ h + ⁿC₂ xⁿ⁻² h² + ... + hⁿ

xⁿ cancel karo aur h se divide karo:
[ (x + h)ⁿ - xⁿ ] / h = n xⁿ⁻¹ + ⁿC₂ xⁿ⁻² h + ... + hⁿ⁻¹

Ab h -> 0 rakho — pehle term ke alawa sabhi terms mein h hai, isliye woh sab 0 ban jaate hain! Bachta hai sirf:
**d/dx (xⁿ) = n · xⁿ⁻¹**!

> **Note (Stated, checked on examples):** Yeh Power Rule kisi bhi **real number n** (negative ya fractional, jaise x⁻¹ -> -1·x⁻², x^(1/2) -> (1/2)x^(-1/2)) ke liye bhi bilkul sahi hota hai!

### General Polynomial Ka Derivative:
Agar P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀, to Sum aur Constant Multiple Rules se:
**P'(x) = n aₙ xⁿ⁻¹ + (n - 1)aₙ₋₁ xⁿ⁻² + ... + a₁**  *(a₀ ka derivative 0!)*

---

## Part B: d/dx(sin x) Aur d/dx(cos x) — First Principles Derivation ("Kyun"!)

### 1. Derivative of sin x:
d/dx(sin x) = lim_{h->0} [ sin(x + h) - sin x ] / h

Chapter 3 ([trigonometric-functions-part4.md](../trigonometric-functions/trigonometric-functions-part4.md)) ki C-D identity sin C - sin D = 2 cos((C + D)/2) sin((C - D)/2) lagao:
= lim_{h->0} [ 2 cos(x + h/2) · sin(h/2) ] / h
= lim_{h->0} cos(x + h/2) · [ sin(h/2) / (h/2) ]

As h -> 0, h/2 -> 0, so sin(h/2)/(h/2) -> 1 aur cos(x + h/2) -> cos x:
= cos x · 1 = **cos x**!

### 2. Derivative of cos x:
d/dx(cos x) = lim_{h->0} [ cos(x + h) - cos x ] / h

Identity cos C - cos D = -2 sin((C + D)/2) sin((C - D)/2) lagao:
= lim_{h->0} [ -2 sin(x + h/2) · sin(h/2) ] / h
= lim_{h->0} [-sin(x + h/2)] · [ sin(h/2) / (h/2) ]
= (-sin x) · 1 = **-sin x**!

---

## Part C: Sabhi 6 Trigonometric Functions Ke Derivatives

Baaki chaar trig functions (tan, cot, sec, cosec) seedhe **Quotient Rule** se nikal aate hain!

| Function f(x) | Derivative f'(x) | Kaise aaya? |
|---|---|---|
| **sin x** | **cos x** | First Principles + C-D identity |
| **cos x** | **-sin x** | First Principles + C-D identity (co-function => minus!) |
| **tan x** | **sec² x** | Quotient Rule on sin x / cos x |
| **cot x** | **-cosec² x** | Quotient Rule on cos x / sin x (co-function => minus!) |
| **sec x** | **sec x · tan x** | Quotient Rule on 1 / cos x |
| **cosec x** | **-cosec x · cot x** | Quotient Rule on 1 / sin x (co-function => minus!) |

---

## Solved Examples (Step-by-Step With Jaanch)

### Example 4.1: Differentiating A Polynomial
**Sawaal:** f(x) = 4x³ - 5x² + 7x - 9 ka derivative gyat karo, aur f'(2) nikaalo.

**Solution:**
Har term par Power Rule lagao:
f'(x) = 4(3x²) - 5(2x¹) + 7(1) - 0
= **12x² - 10x + 7**.

At x = 2:
f'(2) = 12(2²) - 10(2) + 7 = 48 - 20 + 7 = **35**.

Jaanch:
- Jaanch: 48 - 20 = 28, 28 + 7 = 35 ✅

---

### Example 4.2: Deriving d/dx(tan x) And d/dx(sec x) Via Quotient Rule
**Sawaal:** Quotient Rule se prove karo ki (a) d/dx(tan x) = sec² x aur (b) d/dx(sec x) = sec x tan x.

**Solution:**
**(a) tan x = sin x / cos x:**
d/dx(tan x) = [ (cos x)(cos x) - (sin x)(-sin x) ] / cos² x
= (cos² x + sin² x) / cos² x
= 1 / cos² x = **sec² x**.

**(b) sec x = 1 / cos x:**
d/dx(sec x) = [ (0)(cos x) - (1)(-sin x) ] / cos² x
= sin x / cos² x
= (1 / cos x) · (sin x / cos x) = **sec x · tan x**.

Jaanch:
- Jaanch: At x = 0, sec² 0 = 1 (matches tan x ≈ x near 0, slope 1!) aur sec 0 tan 0 = 0 (sec x has a horizontal minimum at x = 0!) ✅

---

### Example 4.3: Product Rule With Trigonometric Functions
**Sawaal:** Differentiate y = x² sin x + 3 cos x with respect to x.

**Solution:**
Pehle term (x² sin x) par Product Rule lagao, aur doosre term (3 cos x) par direct formula:
dy/dx = [ d/dx(x²) · sin x + x² · d/dx(sin x) ] + 3 · d/dx(cos x)
= [ 2x sin x + x² cos x ] + 3(-sin x)
= **2x sin x + x² cos x - 3 sin x**.

Jaanch:
- Jaanch: At x = 0: dy/dx = 0 + 0 - 0 = 0 (y = x² sin x + 3 cos x near 0 behaves like 3 - (3/2)x² + x³, slope at 0 is 0!) ✅

---

### Example 4.4: Quotient Rule With Trigonometric Functions
**Sawaal:** Differentiate y = (1 + sin x) / (1 - sin x) with respect to x.

**Solution:**
Yahan u = 1 + sin x (u' = cos x) aur v = 1 - sin x (v' = -cos x).
Quotient Rule se:
dy/dx = [ cos x (1 - sin x) - (1 + sin x)(-cos x) ] / (1 - sin x)²
= [ cos x - cos x sin x + cos x + cos x sin x ] / (1 - sin x)²
= **2 cos x / (1 - sin x)²**.

Jaanch:
- Jaanch: At x = 0: dy/dx = 2(1)/(1 - 0)² = 2 ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: d/dx(cos x) = +sin x likh dena
- **Galat soch:** "sin x ka derivative cos x hai, to cos x ka derivative sin x hoga."
- **Sahi samajh:** Nahi! **d/dx(cos x) = -sin x** hota hai! Co-function rule yaad rakho: **cos, cot, cosec** — teeno ke derivatives mein **minus (-)** aata hai!

### Galti 2: Constant expression (jaise π² ya a³) par Power Rule laga dena
- **Galat soch:** "d/dx(π²) = 2π."
- **Sahi samajh:** π² mein kahin bhi variable x nahi hai — yeh ek **constant** hai! Kisi bhi constant ka derivative hamesha **0** hota hai!

### Galti 3: Exponential 2ˣ par Power Rule laga dena
- **Galat soch:** "d/dx(2ˣ) = x · 2ˣ⁻¹."
- **Sahi samajh:** Power Rule **d/dx(xⁿ) = n xⁿ⁻¹** sirf tab lagta hai jab base variable x ho aur exponent **constant n** ho! 2ˣ mein variable exponent mein hai (iska derivative Class 12 mein padhoge: 2ˣ ln 2).

---

## Quick Recap

- **Power Rule:** d/dx(xⁿ) = n · xⁿ⁻¹; d/dx(constant) = 0.
- **Trig Derivatives (6 must-know formulas):**
  - d/dx(sin x) = cos x, d/dx(cos x) = -sin x
  - d/dx(tan x) = sec² x, d/dx(cot x) = -cosec² x
  - d/dx(sec x) = sec x tan x, d/dx(cosec x) = -cosec x cot x
- **Memory shortcut:** Every "co-" function gets a minus sign!

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Differentiate f(x) = 6x¹⁰⁰ - x⁵⁵ + x with respect to x.

**Solution:**
f'(x) = 6(100x⁹⁹) - 55x⁵⁴ + 1 = **600x⁹⁹ - 55x⁵⁴ + 1**.

Jaanch:
- Jaanch: At x = 1: 600 - 55 + 1 = 546 ✅

---

### Question 2
Differentiate f(x) = x⁻³(5 + 3x) with respect to x.

**Solution:**
First expand: f(x) = 5x⁻³ + 3x⁻².
Apply Power Rule:
f'(x) = 5(-3x⁻⁴) + 3(-2x⁻³) = **-15x⁻⁴ - 6x⁻³** = -15/x⁴ - 6/x³.

Jaanch:
- Jaanch: Product rule check: (-3x⁻⁴)(5 + 3x) + x⁻³(3) = -15x⁻⁴ - 9x⁻³ + 3x⁻³ = -15x⁻⁴ - 6x⁻³ ✅

---

### Question 3
Differentiate f(x) = 2/(x + 1) - x²/(3x - 1) with respect to x.

**Solution:**
Apply Quotient Rule to each fraction separately:
- d/dx[2/(x + 1)] = [0(x + 1) - 2(1)]/(x + 1)² = -2/(x + 1)².
- d/dx[x²/(3x - 1)] = [2x(3x - 1) - x²(3)]/(3x - 1)² = (3x² - 2x)/(3x - 1)².

Therefore: f'(x) = **-2/(x + 1)² - (3x² - 2x)/(3x - 1)²**.

Jaanch:
- Jaanch: At x = 0: -2/1 - 0/1 = -2 ✅

---

### Question 4
Differentiate y = sin x · cos x with respect to x.

**Solution:**
Product Rule (u = sin x, v = cos x):
dy/dx = (cos x)(cos x) + (sin x)(-sin x) = **cos² x - sin² x = cos 2x**.

Jaanch:
- Jaanch: At x = 0, cos 2(0) = 1 (and sin x cos x = (1/2)sin 2x ≈ x near 0, slope = 1!) ✅

---

### Question 5
Differentiate y = 5 sec x + 4 cos x with respect to x.

**Solution:**
dy/dx = 5(sec x tan x) + 4(-sin x) = **5 sec x tan x - 4 sin x**.

Jaanch:
- Jaanch: Both standard trig formulas applied with correct signs ✅

---

### Question 6
Differentiate y = 3 cot x + 5 cosec x with respect to x.

**Solution:**
dy/dx = 3(-cosec² x) + 5(-cosec x cot x) = **-3 cosec² x - 5 cosec x cot x**.

Jaanch:
- Jaanch: Dono co-functions hain, isliye dono terms negative aaye ✅

---

### Question 7
Differentiate y = 4√x - 2 with respect to x (x > 0).

**Solution:**
Write √x = x^(1/2).
dy/dx = 4 · (1/2)x^(-1/2) - 0 = **2 / √x**.

Jaanch:
- Jaanch: Constant -2 ka derivative 0 aur d/dx(√x) = 1/(2√x) => 4/(2√x) = 2/√x ✅

---

### Question 8
Differentiate y = (x⁵ - cos x) / sin x with respect to x.

**Solution:**
Quotient Rule (u = x⁵ - cos x => u' = 5x⁴ + sin x; v = sin x => v' = cos x):
dy/dx = [(5x⁴ + sin x)sin x - (x⁵ - cos x)cos x] / sin² x
= [5x⁴ sin x + sin² x - x⁵ cos x + cos² x] / sin² x
= **(5x⁴ sin x - x⁵ cos x + 1) / sin² x**   *(since sin² x + cos² x = 1!)*.

Jaanch:
- Jaanch: Also y = x⁵ cosec x - cot x => y' = 5x⁴ cosec x - x⁵ cosec x cot x + cosec² x = (5x⁴ sin x - x⁵ cos x + 1)/sin² x ✅

---

### Question 9
Differentiate y = (x + sec x)(x - tan x) with respect to x.

**Solution:**
Product Rule (u = x + sec x => u' = 1 + sec x tan x; v = x - tan x => v' = 1 - sec² x):
dy/dx = **(1 + sec x tan x)(x - tan x) + (x + sec x)(1 - sec² x)**.

Jaanch:
- Jaanch: At x = 0: u(0) = 1, u'(0) = 1, v(0) = 0, v'(0) = 0 => y'(0) = 1(0) + 1(0) = 0 ✅

---

### Question 10
Differentiate y = x / (1 + tan x) with respect to x.

**Solution:**
Quotient Rule (u = x => u' = 1; v = 1 + tan x => v' = sec² x):
dy/dx = [1(1 + tan x) - x(sec² x)] / (1 + tan x)²
= **(1 + tan x - x sec² x) / (1 + tan x)²**.

Jaanch:
- Jaanch: At x = 0: (1 + 0 - 0)/(1 + 0)² = 1 ✅

---

### Question 11
Differentiate y = (4x + 5 sin x) / (3x + 7 cos x) with respect to x.

**Solution:**
u = 4x + 5 sin x => u' = 4 + 5 cos x.
v = 3x + 7 cos x => v' = 3 - 7 sin x.
dy/dx = **[(4 + 5 cos x)(3x + 7 cos x) - (4x + 5 sin x)(3 - 7 sin x)] / (3x + 7 cos x)²**.

Jaanch:
- Jaanch: At x = 0: u(0) = 0, u'(0) = 9, v(0) = 7 => y'(0) = (9 × 7 - 0)/49 = 9/7 ✅

---

### Question 12
Differentiate y = sin² x with respect to x using the Product Rule (write sin² x = sin x · sin x).

**Solution:**
Product Rule on u = sin x, v = sin x:
dy/dx = (cos x)(sin x) + (sin x)(cos x) = **2 sin x cos x = sin 2x**.

Jaanch:
- Jaanch: sin² x = (1 - cos 2x)/2; at x = π/4, 2 sin(π/4) cos(π/4) = 1 = sin(π/2) ✅

---

Ab tumne Power Rule aur sabhi 6 Trigonometric Derivatives ko poori tarah master kar liya hai! Agle aur aakhri topic [limits-and-derivatives-part5.md](limits-and-derivatives-part5.md) mein hum sabhi Limit aur Derivative weapons ko mila kar **6 Mixed Synthesis Problems** solve karenge aur poore chapter ka **Wrap-up Table** dekhenge!
