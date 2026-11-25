# Chapter: Limits and Derivatives (Part 2)

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla topic [limits-and-derivatives.md](limits-and-derivatives.md) tha** (Topic 1: Intuitive Idea of Derivatives, LHL/RHL, aur Algebra of Limits).
> **Topics covered in this file:**
> 1. Limits of Polynomial and Rational Functions (0/0 Forms, Power Limit Theorem) Aur Trigonometric Limits

---

# Topic 2: Limits of Polynomial, Rational, Aur Trigonometric Functions

Topic 1 mein tumne dekha ki jab denominator ki limit non-zero hoti hai, to seedha direct substitution chal jata hai. Lekin jab x = a rakhne par **0/0** aa jaye, to Quotient Rule ruk jata hai!

Calculus ki asli kala is **0/0 indeterminate form** ko todne mein hai! Is topic mein hum chaar super-weapons seekhenge: **Factorization**, **Rationalization**, **Power Limit Theorem (xⁿ - aⁿ)/(x - a)**, aur **Trigonometric Limits (sin x / x -> 1)**!

---

## Aseem ka bridge stress-test software

Aseem ek civil engineering software developer hai jo steel bridge ke stress-simulation program par kaam kar raha tha. Critical load point x = 2 par uska program crash hokar **"NaN (0/0)"** dikha raha tha, kyunki formula tha:
S(x) = (x³ - 2x²) / (x² - 5x + 6)

Aseem ne numerator aur denominator dono ko factor kiya:
S(x) = [x²(x - 2)] / [(x - 2)(x - 3)]

Factor (x - 2) jo dono ko zero bana raha tha, x ≠ 2 par cut gaya! Bacha x² / (x - 3), jiski x -> 2 par exact finite limit **4 / (-1) = -4** aayi! Saath hi, bridge cable ke chhote sway angle x (radians mein) ke liye usne **lim_{x->0} (sin x)/x = 1** use karke software ko bilkul crash-free bana diya!

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Indeterminate Form (0/0)** | Jab numerator aur denominator dono 0 ki taraf jaayein — bina simplify kiye limit nahi pata chalti | (x² - 4)/(x - 2) as x -> 2 |
| **Rationalization** | Square-root wale 0/0 expressions ko conjugate se multiply karke simplify karna | (√(1 + x) - 1)/x |
| **Power Limit Theorem** | Standard power-difference limit: lim_{x->a} (xⁿ - aⁿ)/(x - a) = n · aⁿ⁻¹ | lim_{x->2} (x⁵ - 32)/(x - 2) = 80 |
| **Sandwich Theorem** | Agar f(x) ≤ g(x) ≤ h(x) aur bahar wale dono L ki taraf jaayein, to beech wala g(x) bhi L ki taraf jayega | Used to prove (sin x)/x -> 1 |

---

## Part A: Polynomial Aur Rational Limits (0/0 Ko Kaise Todein?)

1. **Polynomial function P(x):** Har point a par direct substitution kaam karta hai: **lim_{x->a} P(x) = P(a)**.
2. **Rational function P(x)/Q(x):**
   - Agar Q(a) ≠ 0: Seedha P(a)/Q(a)!
   - Agar P(a) = 0 aur Q(a) = 0 (**0/0 form**): Iska matlab **(x - a)** dono ka common factor hai!
     - **Method 1 (Factorization):** Numerator aur denominator ko factor karo aur (x - a) cancel karo.
     - **Method 2 (Rationalization):** Agar square root ho (jaise √(a + x) - √a), to conjugate (√(a + x) + √a) se upar-neeche multiply karo.

---

## Part B: Power Limit Theorem — Derivation ("Kyun"!)

**Theorem:** Kisi bhi positive integer n ke liye:
**lim_{x->a} (xⁿ - aⁿ) / (x - a) = n · aⁿ⁻¹**

### Algebraic Proof (Positive Integer n Ke Liye):
Polynomial factorization identity se hum jaante hain:
xⁿ - aⁿ = (x - a)(xⁿ⁻¹ + xⁿ⁻²a + xⁿ⁻³a² + ... + x aⁿ⁻² + aⁿ⁻¹)   *(bracket mein kul n terms hain!)*

Dono taraf (x - a) se divide karo (x ≠ a):
(xⁿ - aⁿ) / (x - a) = xⁿ⁻¹ + xⁿ⁻²a + xⁿ⁻³a² + ... + aⁿ⁻¹

Ab x -> a limit lagao — har ek term aⁿ⁻¹ ban jata hai!
= aⁿ⁻¹ + aⁿ⁻¹ + aⁿ⁻¹ + ... (n times)
= **n · aⁿ⁻¹**!

> **Note (Stated, checked on examples):** Yeh formula sirf positive integers hi nahi, balki kisi bhi **rational number n** (jaise n = 1/2, 1/3, -2) ke liye bhi bilkul sahi hota hai (provided a > 0)!

---

## Part C: Sandwich Theorem Aur Trigonometric Limits

**Sandwich (Squeeze) Theorem (Stated intuitively):**
Agar x = a ke aas-paas f(x) ≤ g(x) ≤ h(x) ho aur lim_{x->a} f(x) = lim_{x->a} h(x) = L ho, to beech mein daba hua function g(x) bhi majbooran L ki taraf hi jayega: **lim_{x->a} g(x) = L**!

### Standard Trigonometric Limits (x STRICTLY in Radians!):
Unit circle par sector aur triangles ke areas compare karne se 0 < |x| < π/2 ke liye inequality milti hai:
**cos x < (sin x) / x < 1**

Jaise hi x -> 0, left side cos x -> 1 aur right side 1 -> 1. Sandwich Theorem se:
1. **lim_{x->0} (sin x) / x = 1**   *(x radians mein!)*

### Do Zaroori Corollaries (Derived!):
2. **lim_{x->0} (1 - cos x) / x = 0:**
   (1 - cos x)/x = [(1 - cos x)(1 + cos x)] / [x(1 + cos x)]
   = sin² x / [x(1 + cos x)]
   = [(sin x)/x] · [sin x / (1 + cos x)]
   As x -> 0: = 1 · [0 / (1 + 1)] = **0**!
   *(Bonus: **lim_{x->0} (1 - cos x) / x² = 1/2**, kyunki [(sin x)/x]² · [1/(1 + cos x)] -> 1² · (1/2) = 1/2!)*

3. **lim_{x->0} (tan x) / x = 1:**
   (tan x)/x = [(sin x)/x] · [1 / cos x] -> 1 · (1/1) = **1**!

---

## Solved Examples (Step-by-Step With Jaanch)

### Example 2.1: Resolving 0/0 By Factorization
**Sawaal:** Evaluate lim_{x->2} (x³ - 2x²) / (x² - 5x + 6).

**Solution:**
x = 2 par: (8 - 8) / (4 - 10 + 6) = 0/0 form!
Factorize numerator aur denominator:
- Numerator: x³ - 2x² = x²(x - 2)
- Denominator: x² - 5x + 6 = (x - 2)(x - 3)

(x - 2) cancel karo (x ≠ 2):
lim_{x->2} [x² / (x - 3)] = 2² / (2 - 3) = 4 / (-1) = **-4**.

Jaanch:
- Jaanch: x = 2.001 par (2.001)² / (2.001 - 3) = 4.004 / (-0.999) ≈ -4.008 -> -4 ✅

---

### Example 2.2: Using The Power Limit Theorem
**Sawaal:** Evaluate:
(a) lim_{x->2} (x⁵ - 32) / (x - 2)
(b) lim_{z->1} (z^(1/3) - 1) / (z^(1/6) - 1)

**Solution:**
**(a)** 32 = 2⁵ likho:
lim_{x->2} (x⁵ - 2⁵) / (x - 2) = 5 · 2⁵⁻¹ = 5 · 2⁴ = 5 × 16 = **80**.

**(b)** Numerator aur denominator dono ko (z - 1) se divide karo:
= [ lim_{z->1} (z^(1/3) - 1^(1/3)) / (z - 1) ] / [ lim_{z->1} (z^(1/6) - 1^(1/6)) / (z - 1) ]
= [ (1/3) · 1^(-2/3) ] / [ (1/6) · 1^(-5/6) ]
= (1/3) / (1/6) = **2**.

Jaanch:
- Jaanch (a): Factoring x⁵ - 2⁵ gives x⁴ + 2x³ + 4x² + 8x + 16; at x = 2: 16 + 16 + 16 + 16 + 16 = 80 ✅
- Jaanch (b): Put t = z^(1/6), then z^(1/3) = t²: lim_{t->1} (t² - 1)/(t - 1) = lim_{t->1} (t + 1) = 2 ✅

---

### Example 2.3: Resolving 0/0 By Rationalization
**Sawaal:** Evaluate lim_{x->0} [√(1 + x) - 1] / x.

**Solution:**
x = 0 par 0/0 form hai! Conjugate [√(1 + x) + 1] se upar-neeche multiply karo:
= lim_{x->0} [(1 + x) - 1] / [x (√(1 + x) + 1)]
= lim_{x->0} x / [x (√(1 + x) + 1)]
= lim_{x->0} 1 / [√(1 + x) + 1]   *(x cancel!)*
= 1 / [√(1 + 0) + 1] = **1/2**.

Jaanch:
- Jaanch: Power Limit Theorem se (put u = 1 + x -> 1): lim_{u->1} (u^(1/2) - 1)/(u - 1) = (1/2) · 1^(-1/2) = 1/2 ✅

---

### Example 2.4: Trigonometric Limits
**Sawaal:** Evaluate:
(a) lim_{x->0} (sin 4x) / (sin 2x)
(b) lim_{x->0} (1 - cos 2x) / x²

**Solution:**
**(a)** Har sin ke neeche uska exact angle banao:
(sin 4x) / (sin 2x) = [ (sin 4x)/(4x) · 4 ] / [ (sin 2x)/(2x) · 2 ]
As x -> 0, 4x -> 0 aur 2x -> 0:
= [ 1 · 4 ] / [ 1 · 2 ] = **2**.

**(b)** Identity 1 - cos 2x = 2 sin² x lagao:
lim_{x->0} (2 sin² x) / x² = 2 · [ lim_{x->0} (sin x) / x ]² = 2 · (1)² = **2**.

Jaanch:
- Jaanch (a): sin 4x = 2 sin 2x cos 2x => (sin 4x)/(sin 2x) = 2 cos 2x -> 2 cos 0 = 2 ✅
- Jaanch (b): (1 - cos 2x)/(2x)² × 4 -> (1/2) × 4 = 2 ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Degrees mein (sin x°)/x = 1 likh dena
- **Galat soch:** "lim_{x->0} (sin x°)/x = 1."
- **Sahi samajh:** Standard trig limit **sirf radians** ke liye hai! Degrees ko pehle radians mein badlo: x° = (πx/180) radians => lim_{x->0} [sin(πx/180)] / x = **π / 180** (na ki 1!).

### Galti 2: 0/0 ko 1 ya 0 likh dena
- **Galat soch:** "Numerator aur denominator dono 0 hain, to 0/0 = 1."
- **Sahi samajh:** 0/0 ek **indeterminate form** hai — iska answer kuch bhi (0, 2, -4, 80, ya DNE) ho sakta hai! Hamesha factorize/rationalize karke common zero-factor cancel karo!

### Galti 3: Power Limit Theorem ko (xⁿ + aⁿ)/(x + a) par bina check kiye laga dena
- **Galat soch:** "lim_{x->2} (x⁵ + 32)/(x + 2) = 5 · 2⁴ = 80."
- **Sahi samajh:** x = 2 par x + 2 = 4 ≠ 0 hai — yeh 0/0 form hi nahi hai! Direct substitution se (32 + 32)/4 = **16** aayega!

---

## Quick Recap

- **Polynomial:** Direct substitution lim_{x->a} P(x) = P(a).
- **0/0 Form Tools:** Factorization, Rationalization (conjugate), ya Power Limit Theorem.
- **Power Limit Theorem:** lim_{x->a} (xⁿ - aⁿ)/(x - a) = n · aⁿ⁻¹.
- **Trig Limits (radians!):** lim_{x->0} (sin x)/x = 1, lim_{x->0} (tan x)/x = 1, lim_{x->0} (1 - cos x)/x = 0, lim_{x->0} (1 - cos x)/x² = 1/2.

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Evaluate lim_{x->0} [(x + 1)⁵ - 1] / x.

**Solution:**
Let y = x + 1. As x -> 0, y -> 1, and x = y - 1.
lim_{y->1} (y⁵ - 1⁵) / (y - 1) = 5 · 1⁴ = **5**.

Jaanch:
- Jaanch: Binomial expansion (1 + x)⁵ = 1 + 5x + 10x² + ... => [(1 + x)⁵ - 1]/x = 5 + 10x + ... -> 5 ✅

---

### Question 2
Evaluate lim_{x->2} (3x² - x - 10) / (x² - 4).

**Solution:**
At x = 2: (12 - 2 - 10)/(4 - 4) = 0/0.
Factorize: 3x² - x - 10 = (3x + 5)(x - 2), and x² - 4 = (x - 2)(x + 2).
Cancel (x - 2):
lim_{x->2} (3x + 5)/(x + 2) = (6 + 5)/(2 + 2) = **11/4**.

Jaanch:
- Jaanch: (3x + 5)(x - 2) = 3x² - 6x + 5x - 10 = 3x² - x - 10 ✅

---

### Question 3
Evaluate lim_{x->3} (x⁴ - 81) / (2x² - 5x - 3).

**Solution:**
At x = 3: 0/0 form!
x⁴ - 81 = (x² - 9)(x² + 9) = (x - 3)(x + 3)(x² + 9).
2x² - 5x - 3 = (2x + 1)(x - 3).
Cancel (x - 3):
lim_{x->3} [(x + 3)(x² + 9)] / (2x + 1) = [(6)(18)] / 7 = **108 / 7**.

Jaanch:
- Jaanch: (2x + 1)(x - 3) = 2x² - 5x - 3; 6 × 18 = 108 ✅

---

### Question 4
Evaluate lim_{x->1} (x¹⁵ - 1) / (x¹⁰ - 1).

**Solution:**
Divide numerator and denominator by (x - 1):
= [ lim_{x->1} (x¹⁵ - 1)/(x - 1) ] / [ lim_{x->1} (x¹⁰ - 1)/(x - 1) ]
= (15 · 1¹⁴) / (10 · 1⁹) = 15/10 = **3/2**.

Jaanch:
- Jaanch: Put u = x⁵ -> 1: (u³ - 1)/(u² - 1) = (u² + u + 1)/(u + 1) -> 3/2 ✅

---

### Question 5
Evaluate lim_{x->2} [1/(x - 2) - 4/(x³ - 2x²)].

**Solution:**
Combine into one fraction (x³ - 2x² = x²(x - 2)):
= lim_{x->2} (x² - 4) / [x²(x - 2)]
= lim_{x->2} [(x - 2)(x + 2)] / [x²(x - 2)]
= lim_{x->2} (x + 2) / x² = 4 / 4 = **1**.

Jaanch:
- Jaanch: (2 + 2) / 2² = 4/4 = 1 ✅

---

### Question 6
Evaluate lim_{x->0} [√(4 + x) - 2] / x.

**Solution:**
Rationalize with conjugate [√(4 + x) + 2]:
= lim_{x->0} [(4 + x) - 4] / [x(√(4 + x) + 2)]
= lim_{x->0} 1 / [√(4 + x) + 2]
= 1 / (2 + 2) = **1/4**.

Jaanch:
- Jaanch: Power limit u = 4 + x -> 4: (1/2) · 4^(-1/2) = (1/2)(1/2) = 1/4 ✅

---

### Question 7
Evaluate lim_{x->0} (sin 5x) / (3x).

**Solution:**
Rewrite as (5/3) · lim_{x->0} (sin 5x)/(5x) = (5/3) · 1 = **5/3**.

Jaanch:
- Jaanch: Angle inside sin is 5x -> 0, so (sin 5x)/(5x) -> 1 ✅

---

### Question 8
Evaluate lim_{x->0} (tan 3x) / (sin 7x).

**Solution:**
Divide numerator and denominator by x:
= [ 3 · (tan 3x)/(3x) ] / [ 7 · (sin 7x)/(7x) ]
-> (3 · 1) / (7 · 1) = **3/7**.

Jaanch:
- Jaanch: Both (tan 3x)/(3x) -> 1 and (sin 7x)/(7x) -> 1 as x -> 0 ✅

---

### Question 9
Evaluate lim_{x->0} (cos 2x - 1) / (cos x - 1).

**Solution:**
Multiply numerator and denominator by -1: (1 - cos 2x) / (1 - cos x).
Use 1 - cos 2x = 2 sin² x and 1 - cos x = 2 sin²(x/2):
= lim_{x->0} [sin² x] / [sin²(x/2)]
Use sin x = 2 sin(x/2) cos(x/2):
= lim_{x->0} 4 cos²(x/2) = 4(1)² = **4**.

Jaanch:
- Jaanch: Also [(1 - cos 2x)/x²] / [(1 - cos x)/x²] = 2 / (1/2) = 4 ✅

---

### Question 10
Evaluate lim_{x->0} (ax + x cos x) / (b sin x) (where b ≠ 0).

**Solution:**
Divide numerator and denominator by x:
= lim_{x->0} (a + cos x) / [b · (sin x)/x]
= (a + 1) / (b · 1) = **(a + 1) / b**.

Jaanch:
- Jaanch: At x = 0, cos 0 = 1 and (sin x)/x -> 1 ✅

---

### Question 11
Evaluate lim_{x->0} (cosec x - cot x).

**Solution:**
Rewrite in sin and cos:
cosec x - cot x = 1/sin x - cos x/sin x = (1 - cos x) / sin x.
Divide numerator and denominator by x:
= [ (1 - cos x)/x ] / [ (sin x)/x ] -> 0 / 1 = **0**.

Jaanch:
- Jaanch: (1 - cos x)/sin x = [2 sin²(x/2)] / [2 sin(x/2) cos(x/2)] = tan(x/2) -> tan 0 = 0 ✅

---

### Question 12
Evaluate lim_{x->0} (sin x°) / x.

**Solution:**
Convert degrees to radians: x° = (πx / 180) radians.
lim_{x->0} [sin(πx/180)] / x = (π/180) · lim_{x->0} [sin(πx/180)] / (πx/180)
= (π/180) · 1 = **π / 180**.

Jaanch:
- Jaanch: Radian conversion factor is π/180 ≈ 0.01745 ✅

---

Ab tum har tarah ke algebraic aur trigonometric limits ko solve karna jaante ho! Agle topic [limits-and-derivatives-part3.md](limits-and-derivatives-part3.md) mein hum in limits ka sabse bada upyog dekhenge — **Derivative from First Principles** aur **Product & Quotient Rules**!
