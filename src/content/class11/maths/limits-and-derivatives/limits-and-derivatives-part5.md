# Chapter: Limits and Derivatives (Part 5)

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla topic [limits-and-derivatives-part4.md](limits-and-derivatives-part4.md) tha** (Topic 4: Derivatives of Polynomial and Trigonometric Functions).
> **Topics covered in this file:**
> 1. Sab Kuch Mila Kar: Mixed Limit & Derivative Synthesis Problems, Practice, Aur Chapter Wrap-up Table

---

# Topic 5: Sab Kuch Mila Kar — Mixed Calculus Problems Aur Chapter Wrap-up

Pichhle chaar topics mein tumne Calculus ke pehle do bade pillars — **Limits** aur **Derivatives** — ko step-by-step seekha!

Ab is aakhri topic mein hum dono ko ek saath mila kar un tricky synthesis problems ko solve karenge jahan standard formulas seedhe nahi lagte: **shifted trig limits (x -> π/2)**, **piecewise unknown parameters (a, b)**, **radical first principles**, aur **compound-angle derivatives**!

---

## Heena ka Calculus & Physics Olympiad "Change & Rate Arena"

School ke Calculus & Physics Olympiad mein Heena "Change & Rate Arena" ki coordinator hai. Board par chaar challenge cards lage the:
- **Card 1:** Piecewise sensor function mein a aur b ki exact values dhoondho taaki x = 1 par limit value se match kare!
- **Card 2:** Jab x -> π/2 ho (0 nahi!), tab (tan 2x)/(x - π/2) ki limit kaise nikaalein? (Substitution h = x - π/2 se 0 par shift karo!)
- **Card 3:** Compound-angle identity se sin(x + a) ka derivative nikaalo bina Class 12 ke Chain Rule ke!
- **Card 4:** 100-degree polynomial f(x) = x¹⁰⁰/100 + ... + x + 1 ke liye prove karo ki f'(1) = 100 · f'(0)!

Heena ne dekha ki har card ka raasta ek hi Decision Map se milta hai!

---

## Decision Map: Limit Ya Derivative — Kaun Sa Method Kab?

| Sawaal ka roop | Sabse best method | Golden Rule |
|---|---|---|
| Piecewise / modulus limit at x = a | LHL (x -> a⁻) aur RHL (x -> a⁺) alag nikaalo | Limit exists iff LHL = RHL |
| Rational 0/0 form (polynomials) | Factorize & cancel (x - a), ya Power Limit (xⁿ - aⁿ)/(x - a) | Direct substitution sirf tab jab denominator ≠ 0 |
| Square-root 0/0 form | Rationalize (conjugate se multiply karo) | Radical hatate hi zero-factor cancel ho jata hai |
| Trig limit jab x -> 0 | (sin ax)/(ax) -> 1, (tan ax)/(ax) -> 1, (1 - cos x)/x² -> 1/2 | Angle strictly **radians** mein hona chahiye! |
| Trig limit jab x -> a (a ≠ 0) | Substitution **x = a + h** (so h -> 0!) | Shift karke standard h -> 0 form banao |
| "Find derivative from First Principles" | lim_{h->0} [f(x + h) - f(x)] / h | Pehle h cancel karo, phir h = 0 rakho |
| Product / Quotient of polynomials & trig | Product Rule (u'v + uv') / Quotient Rule ((u'v - uv')/v²) | Co-functions (cos, cot, cosec) ko minus (-) do! |

---

## 6 Rich Mixed Synthesis Problems (Step-by-Step With Jaanch)

### Problem 5.1: Finding Unknown Parameters a And b In A Piecewise Limit
**Sawaal:** Agar f(x) = a + bx (x < 1), f(x) = 4 (x = 1), aur f(x) = b - ax (x > 1) ho, aur lim_{x->1} f(x) = f(1) diya ho, to a aur b ki values gyat karo.

**Solution:**
Given: LHL at x = 1 = RHL at x = 1 = f(1) = 4.
- LHL = lim_{x->1⁻} (a + bx) = a + b(1) = a + b.
- RHL = lim_{x->1⁺} (b - ax) = b - a(1) = b - a.

Isliye do equations banti hain:
a + b = 4   --- (1)
b - a = 4   --- (2)

(1) aur (2) ko jodo:
2b = 8 => **b = 4**.
Equation (1) mein rakho: a + 4 = 4 => **a = 0**.

Jaanch:
- Jaanch: a = 0, b = 4 par f(x) = 4x (x < 1), 4 (x = 1), 4 (x > 1) => LHL = 4, RHL = 4, f(1) = 4 ✅

---

### Problem 5.2: Shifted Trigonometric Limit (x -> π/2)
**Sawaal:** Evaluate lim_{x->π/2} (tan 2x) / (x - π/2).

**Solution:**
Yahan x -> π/2 hai (0 nahi!). Substitution lagao:
Let **x = π/2 + h**. Tab jab x -> π/2, to **h -> 0**, aur x - π/2 = h!

Numerator: tan 2x = tan 2(π/2 + h) = tan(π + 2h) = **tan 2h**  *(kyunki tan(π + θ) = tan θ!)*.

Limit ban jaati hai:
lim_{h->0} (tan 2h) / h
= 2 · lim_{h->0} (tan 2h) / (2h)
= 2 · 1 = **2**.

Jaanch:
- Jaanch: tan(π + 2h) = tan 2h (3rd quadrant mein tan positive) aur lim_{u->0} (tan u)/u = 1 => 2 ✅

---

### Problem 5.3: First Principles Derivative Of √x
**Sawaal:** First Principles se f(x) = √x (x > 0) ka derivative gyat karo.

**Solution:**
f'(x) = lim_{h->0} [ √(x + h) - √x ] / h

Conjugate [√(x + h) + √x] se upar-neeche multiply karo:
= lim_{h->0} [ (x + h) - x ] / [ h (√(x + h) + √x) ]
= lim_{h->0} h / [ h (√(x + h) + √x) ]
= lim_{h->0} 1 / [ √(x + h) + √x ]   *(h cancel!)*
= 1 / (√x + √x) = **1 / (2√x)**.

Jaanch:
- Jaanch: Power Rule check: d/dx(x^(1/2)) = (1/2)x^(-1/2) = 1/(2√x) ✅

---

### Problem 5.4: Quotient Rule With Trigonometric Functions
**Sawaal:** Differentiate y = (x + cos x) / tan x with respect to x.

**Solution:**
Yahan u = x + cos x (u' = 1 - sin x) aur v = tan x (v' = sec² x).
Quotient Rule se:
dy/dx = [ u'v - uv' ] / v²
= **[ (1 - sin x) tan x - (x + cos x) sec² x ] / tan² x**.

Jaanch:
- Jaanch: Check at x = π/4 (tan = 1, sec² = 2, sin = cos = 1/√2): [(1 - 1/√2)(1) - (π/4 + 1/√2)(2)] / 1 = 1 - 3/√2 - π/2 ✅

---

### Problem 5.5: Derivative Of sin(x + a) Using Compound Angle Identity
**Sawaal:** Differentiate f(x) = sin(x + a) with respect to x (jahan a ek constant hai).

**Solution:**
Class 11 Chapter 3 ki compound angle identity lagao:
sin(x + a) = sin x · cos a + cos x · sin a.

Yahan cos a aur sin a **constants** hain! Differentiate term by term:
f'(x) = (cos a) · d/dx(sin x) + (sin a) · d/dx(cos x)
= (cos a)(cos x) + (sin a)(-sin x)
= cos x cos a - sin x sin a
= **cos(x + a)**.

Jaanch:
- Jaanch: Special case a = 0 par f'(x) = cos(x + 0) = cos x ✅

---

### Problem 5.6: 100-Degree Polynomial Proof
**Sawaal:** Agar f(x) = x¹⁰⁰/100 + x⁹⁹/99 + ... + x²/2 + x + 1 ho, to prove karo ki f'(1) = 100 · f'(0).

**Solution:**
Power Rule se har term differentiate karo:
f'(x) = (100 x⁹⁹)/100 + (99 x⁹⁸)/99 + ... + (2x)/2 + 1 + 0
**f'(x) = x⁹⁹ + x⁹⁸ + ... + x + 1**   *(kul 100 terms hain!)*

1. Put x = 1:
   f'(1) = 1⁹⁹ + 1⁹⁸ + ... + 1 + 1 = 1 + 1 + ... (100 times) = **100**.
2. Put x = 0:
   f'(0) = 0 + 0 + ... + 0 + 1 = **1**.

Isliye **f'(1) = 100 = 100 × 1 = 100 · f'(0)**!

Jaanch:
- Jaanch: For smaller degree n = 3 (x³/3 + x²/2 + x + 1): f'(x) = x² + x + 1 => f'(1) = 3 = 3 · f'(0) ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: x -> π/2 par bhi (sin x)/x = 1 laga dena
- **Galat soch:** "lim_{x->π/2} (sin x)/x = 1."
- **Sahi samajh:** Nahi! (sin x)/x -> 1 sirf tab hota hai jab **x -> 0** ho! Jab x -> π/2 ho, to yeh 0/0 form hi nahi hai — direct substitution se sin(π/2) / (π/2) = 1 / (π/2) = **2 / π** aata hai!

### Galti 2: f'(a) nikaalte waqt pehle x = a rakh dena
- **Galat soch:** "f(x) = x³ hai, f'(2) chahiye: pehle f(2) = 8 nikala, phir d/dx(8) = 0!"
- **Sahi samajh:** Hamesha **pehle differentiate karo** (f'(x) = 3x²), aur **uske baad x = 2 rakho** (f'(2) = 3(4) = 12)!

### Galti 3: Constant a wale terms jaise sin a ka derivative cos a likh dena
- **Galat soch:** "d/dx(sin a) = cos a."
- **Sahi samajh:** Agar variable x ke respect mein differentiate kar rahe ho, to **sin a ek constant hai**, isliye **d/dx(sin a) = 0** hota hai!

---

## Quick Recap

- **Shifted limit (x -> a):** Substitute x = a + h so h -> 0!
- **First principles with square root:** Always rationalize numerator with conjugate!
- **Evaluating f'(a):** Differentiate FIRST, substitute x = a SECOND!
- **Compound-angle trig derivatives:** Expand sin(x + a) = sin x cos a + cos x sin a, treat cos a, sin a as constants!

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Evaluate lim_{x->π} [sin(π - x)] / [π(π - x)].

**Solution:**
Let u = π - x. As x -> π, u -> 0.
Limit = (1/π) · lim_{u->0} (sin u)/u = (1/π) · 1 = **1 / π**.

Jaanch:
- Jaanch: u = π - x -> 0, so (sin u)/u -> 1 => 1/π ✅

---

### Question 2
Evaluate lim_{x->0} (cos x) / (π - x).

**Solution:**
Check denominator at x = 0: π - 0 = π ≠ 0 (not 0/0!).
Direct substitution: cos 0 / (π - 0) = **1 / π**.

Jaanch:
- Jaanch: Denominator π ≠ 0, direct substitution works immediately ✅

---

### Question 3
Evaluate lim_{x->0} (x sec x).

**Solution:**
At x = 0, sec 0 = 1/cos 0 = 1.
Direct substitution: 0 × 1 = **0**.

Jaanch:
- Jaanch: Not an indeterminate form: 0 × 1 = 0 ✅

---

### Question 4
Evaluate lim_{x->0} (sin ax + bx) / (ax + sin bx) (where a, b, a + b ≠ 0).

**Solution:**
Divide numerator and denominator by x:
= lim_{x->0} [ a · (sin ax)/(ax) + b ] / [ a + b · (sin bx)/(bx) ]
= (a · 1 + b) / (a + b · 1) = (a + b) / (a + b) = **1**.

Jaanch:
- Jaanch: Test with a = 2, b = 3: (2 + 3)/(2 + 3) = 1 ✅

---

### Question 5
Find the value of k if lim_{x->1} (x⁴ - 1)/(x - 1) = lim_{x->k} (x³ - k³)/(x² - k²).

**Solution:**
LHS = 4 · 1³ = 4.
RHS = [ lim_{x->k} (x³ - k³)/(x - k) ] / [ lim_{x->k} (x² - k²)/(x - k) ] = (3k²) / (2k) = (3/2)k.

Equate LHS = RHS:
4 = (3/2)k => **k = 8/3**.

Jaanch:
- Jaanch: (3/2)(8/3) = 4 = LHS ✅

---

### Question 6
Find the derivative of f(x) = cos(x - π/8) with respect to x.

**Solution:**
Expand using cos(A - B) = cos A cos B + sin A sin B:
f(x) = cos x cos(π/8) + sin x sin(π/8).
Differentiate (cos(π/8) and sin(π/8) are constants):
f'(x) = -sin x cos(π/8) + cos x sin(π/8)
= -[sin x cos(π/8) - cos x sin(π/8)]
= **-sin(x - π/8)**.

Jaanch:
- Jaanch: Matches d/dx(cos u) = -sin u with u = x - π/8 ✅

---

### Question 7
Find the derivative of y = (x + a) / (x + b) with respect to x (where a, b are constants).

**Solution:**
Quotient Rule (u = x + a => u' = 1; v = x + b => v' = 1):
dy/dx = [1(x + b) - (x + a)(1)] / (x + b)² = **(b - a) / (x + b)²**.

Jaanch:
- Jaanch: If a = b, y = 1 (constant) and formula gives 0/(x + b)² = 0 ✅

---

### Question 8
Find the derivative of y = (ax² + sin x)(p + q cos x) with respect to x.

**Solution:**
Product Rule:
u = ax² + sin x => u' = 2ax + cos x
v = p + q cos x => v' = -q sin x

dy/dx = **(2ax + cos x)(p + q cos x) - q sin x (ax² + sin x)**.

Jaanch:
- Jaanch: Constant p has derivative 0 and d/dx(q cos x) = -q sin x ✅

---

### Question 9
Find the derivative of y = (cos x) / (1 + sin x) with respect to x.

**Solution:**
Quotient Rule (u = cos x => u' = -sin x; v = 1 + sin x => v' = cos x):
dy/dx = [(-sin x)(1 + sin x) - (cos x)(cos x)] / (1 + sin x)²
= [-sin x - (sin² x + cos² x)] / (1 + sin x)²
= -(1 + sin x) / (1 + sin x)²
= **-1 / (1 + sin x)**.

Jaanch:
- Jaanch: At x = 0: -1 / (1 + 0) = -1 ✅

---

### Question 10
Find the derivative of f(x) = 1 / √x (x > 0) from First Principles.

**Solution:**
f'(x) = lim_{h->0} [1/√(x + h) - 1/√x] / h
= lim_{h->0} [√x - √(x + h)] / [h √x √(x + h)]
Multiply top and bottom by [√x + √(x + h)]:
= lim_{h->0} [x - (x + h)] / [h √x √(x + h) (√x + √(x + h))]
= lim_{h->0} (-1) / [√x √(x + h) (√x + √(x + h))]
= -1 / [x · 2√x] = **-1 / (2 x^(3/2))**.

Jaanch:
- Jaanch: Power Rule check: d/dx(x^(-1/2)) = (-1/2)x^(-3/2) = -1/(2 x^(3/2)) ✅

---

### Question 11
For f(x) = a x² + b x + c, if f'(0) = 3 and f'(1) = 7, find the values of a and b.

**Solution:**
Differentiate f(x): f'(x) = 2ax + b.
- f'(0) = 2a(0) + b = b => **b = 3**.
- f'(1) = 2a(1) + b = 2a + 3 = 7 => 2a = 4 => **a = 2**.

Jaanch:
- Jaanch: f'(x) = 4x + 3 gives f'(0) = 3 and f'(1) = 7 ✅

---

### Question 12
Evaluate lim_{x->0} (sin x - tan x) / x³.

**Solution:**
Factor out sin x:
sin x - tan x = sin x (1 - 1/cos x) = -sin x (1 - cos x) / cos x.

Divide by x³:
= - [(sin x)/x] · [(1 - cos x)/x²] · [1 / cos x].

Take limit as x -> 0:
= - (1) · (1/2) · (1/1) = **-1/2**.

Jaanch:
- Jaanch: Near x = 0, sin x ≈ x - x³/6 and tan x ≈ x + x³/3 => sin x - tan x ≈ -x³/2 => ratio -> -1/2 ✅

---

## Chapter Wrap-up Table

| Concept | Key Formula / Rule | Golden Rule / Condition |
|---|---|---|
| **Limit Existence** | lim_{x->a} f(x) = L <=> LHL = RHL = L | f(a) ka hona ya L ke barabar hona zaroori nahi |
| **Algebra of Limits** | Sum, Diff, Constant, Product, Quotient | Quotient Rule sirf tab jab denominator limit ≠ 0 |
| **Power Limit Theorem** | lim_{x->a} (xⁿ - aⁿ)/(x - a) = n · aⁿ⁻¹ | Positive integer & rational n (a > 0) |
| **Standard Trig Limits** | (sin x)/x -> 1, (tan x)/x -> 1<br>(1 - cos x)/x -> 0, (1 - cos x)/x² -> 1/2 | x -> 0 aur x strictly **radians** mein! |
| **First Principles** | f'(x) = lim_{h->0} [f(x + h) - f(x)] / h | Pehle h cancel karo, phir h = 0 rakho |
| **Power & Constant Rule** | d/dx(xⁿ) = n xⁿ⁻¹, d/dx(c) = 0 | Base x aur exponent constant n hona chahiye |
| **Product (Leibniz) Rule** | (u · v)' = u'v + uv' | Kabhi u' · v' mat likho! |
| **Quotient Rule** | (u / v)' = (u'v - uv') / v² | u'v pehle aata hai; v ≠ 0 |
| **Trig Derivatives** | sin -> cos, cos -> -sin<br>tan -> sec², cot -> -cosec²<br>sec -> sec tan, cosec -> -cosec cot | Sabhi "co-" functions ke derivative mein minus (-) |

---

Ab tumne Calculus ki buniyad — **Limits aur Derivatives** — ko poori tarah master kar liya hai!

Agle chapter **Statistics** mein hum data ke spread aur consistency ko naapenge — **Mean Deviation, Variance, aur Standard Deviation** ke zariye!
