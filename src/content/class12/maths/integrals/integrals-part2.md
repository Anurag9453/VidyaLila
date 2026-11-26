> **Class:** 12 | **Subject:** Mathematics | **Chapter 7:** Integrals (Part 2)

# Methods of Integration: Substitution, Partial Fractions and By Parts

> **Pichle topic mein:** Humne [Standard Integrals](integrals.md) padhe. Ab jab integrand seedha standard table mein na mile, toh hum 3 superstar techniques use karte hain: **Method of Substitution**, **Partial Fractions**, aur **Integration by Parts (ILATE)**!

---

Isha apne puzzle box mein alag-alag locked boxes kholne ke liye 3 master keys rakhti thi: agar integral mein koi function aur uska **derivative dono ek saath** dikhein → **Key 1 (Substitution)**; agar rational polynomial P(x)/Q(x) ho → **Key 2 (Partial Fractions)**; aur agar do alag families (jaise x · eˣ ya x · ln x) multiply ho rahe hon → **Key 3 (Integration by Parts)**!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Substitution (u = g(x))** | Jab ∫ f(g(x)) · g'(x) dx dikhe, toh u = g(x) aur du = g'(x) dx rakh kar integral ko simple ∫ f(u) du bana dena |
| **Partial Fractions** | Proper rational function P(x)/Q(x) (deg P < deg Q) ko chhote simple fractions ke sum mein todna |
| **Integration by Parts** | **∫ u · v dx = u ∫ v dx − ∫ [ (du/dx) · (∫ v dx) ] dx** (first function u choose karne ka rule: **ILATE**!) |
| **ILATE Rule** | First function (u) choose karne ki priority: **I**nverse trig > **L**og > **A**lgebraic > **T**rig > **E**xponential |

---

## 1. Integration by Substitution & Four New Standard Trig Integrals

Using substitution **u = g(x), du = g'(x) dx**, we derive 4 essential formulas (MUST MEMORISE!):
1. **∫ tan x dx = ln |sec x| + C**   (or −ln |cos x| + C)
2. **∫ cot x dx = ln |sin x| + C**
3. **∫ sec x dx = ln |sec x + tan x| + C**   *(Multiply & divide by sec x + tan x!)*
4. **∫ cosec x dx = ln |cosec x − cot x| + C**
- **Logarithmic Derivative Shortcut:** **∫ [f'(x) / f(x)] dx = ln |f(x)| + C**!

---

## 2. Integration by Partial Fractions (Only When deg P(x) < deg Q(x)!)

*(Warning: Agar deg P(x) ≥ deg Q(x) ho, toh PEHLE polynomial long division karke proper fraction banao!)*

| Denominator Factor Form | Partial Fraction Decomposition |
|---|---|
| **(x − a)(x − b)** (distinct linear) | A / (x − a) + B / (x − b) |
| **(x − a)²** (repeated linear) | A / (x − a) + B / (x − a)² |
| **(x − a)(x² + bx + c)** (irreducible quadratic) | A / (x − a) + (Bx + C) / (x² + bx + c) |

---

## 3. Integration by Parts & The Golden eˣ [f(x) + f'(x)] Formula

**∫ (I · II) dx = I · (∫ II dx) − ∫ [ (d/dx I) · (∫ II dx) ] dx**
- Choose **I** (first function — the one you differentiate!) using **I – L – A – T – E**:
  - **I**nverse trig (sin⁻¹x, tan⁻¹x) → **L**ogarithmic (ln x) → **A**lgebraic (x, x²) → **T**rigonometric (sin x, cos x) → **E**xponential (eˣ).
- **Single-function trick (∫ ln x dx, ∫ tan⁻¹x dx):** Write as **1 · ln x** and choose **u = ln x (L)**, **v = 1 (A)**!
- **SUPERSTAR FORMULA (100% Exam Question!):**
  **∫ eˣ [ f(x) + f'(x) ] dx = eˣ f(x) + C**!
  *(Proof: Apply by parts to ∫ eˣ f(x) dx taking u = f(x), v = eˣ → eˣ f(x) − ∫ eˣ f'(x) dx, which cancels +∫ eˣ f'(x) dx!)*

---

## Solved Examples

### Example 1: Substitution Method
Evaluate: **∫ [ (tan⁻¹ x) / (1 + x²) ] dx**.

**Solution:**
Notice derivative of tan⁻¹x is **1/(1 + x²)**!
Put **t = tan⁻¹ x** ⇒ **dt = dx / (1 + x²)**.
Integral becomes: ∫ t dt = t²/2 + C = **(1/2) (tan⁻¹ x)² + C**!

Jaanch: Differentiate: (1/2) · 2(tan⁻¹x) · 1/(1 + x²) = (tan⁻¹x)/(1 + x²) ✅

---

### Example 2: Partial Fractions Decomposition
Evaluate: **∫ [ x / ((x + 1)(x + 2)) ] dx**.

**Solution:**
Write **x / [(x + 1)(x + 2)] = A / (x + 1) + B / (x + 2)** ⇒ x = A(x + 2) + B(x + 1).
- Put x = −1: −1 = A(1) ⇒ **A = −1**.
- Put x = −2: −2 = B(−1) ⇒ **B = 2**.
Integrate:
∫ [ −1/(x + 1) + 2/(x + 2) ] dx = −ln |x + 1| + 2 ln |x + 2| + C
= **ln [ (x + 2)² / |x + 1| ] + C**!

Jaanch: Check partial fraction: −1/(x+1) + 2/(x+2) = (−x − 2 + 2x + 2)/[(x+1)(x+2)] = x/[(x+1)(x+2)] ✅

---

### Example 3: Integration by Parts (∫ x ln x dx)
Evaluate: **∫ x ln x dx**.

**Solution:**
By **ILATE**, **L (ln x)** comes before **A (x)** → take **u = ln x**, **v = x**.
∫ x ln x dx = (ln x)(x²/2) − ∫ (1/x)(x²/2) dx
= (x²/2) ln x − (1/2) ∫ x dx
= **(x²/2) ln x − x²/4 + C**!

Jaanch: Differentiate: x ln x + (x²/2)(1/x) − x/2 = x ln x + x/2 − x/2 = x ln x ✅

---

### Example 4: Using the Golden Formula ∫ eˣ [f(x) + f'(x)] dx
Evaluate: **∫ eˣ [ (x − 3) / (x − 1)³ ] dx**.

**Solution:**
Rewrite numerator (x − 3) in terms of (x − 1): **x − 3 = (x − 1) − 2**.
Split fraction:
(x − 3) / (x − 1)³ = **1 / (x − 1)² − 2 / (x − 1)³**!
Check: Let **f(x) = 1 / (x − 1)² = (x − 1)⁻²** ⇒ **f'(x) = −2 / (x − 1)³**! Exact match!
By ∫ eˣ [f(x) + f'(x)] dx = eˣ f(x) + C:
Answer = **eˣ / (x − 1)² + C**!

Jaanch: d/dx [eˣ/(x−1)²] = eˣ/(x−1)² − 2eˣ/(x−1)³ = eˣ(x − 1 − 2)/(x−1)³ = eˣ(x − 3)/(x−1)³ ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Improper fraction par seedha partial fractions laga dena:**
   - *Galat:* (x² + 1)/(x² − 1) = A/(x − 1) + B/(x + 1).
   - *Sahi:* Degree equal (2 = 2) hai! Pehle divide karo: **1 + 2 / [(x − 1)(x + 1)]**, phir partial fractions lagao!

2. **∫ x ln x dx mein x ko first function maan lena:**
   - *Galat:* u = x, v = ln x (phir ∫ ln x dx alag se karna padta hai!).
   - *Sahi:* **ILATE** follow karo — **ln x (L)** ko hamesha first function banao!

---

## Quick Recap

- **Substitution:** Spot g(x) and g'(x); ∫ f'(x)/f(x) dx = ln |f(x)| + C.
- **Partial Fractions:** Ensure deg P < deg Q first! Distinct linear, repeated linear, irreducible quadratic.
- **By Parts (ILATE):** ∫ u·v dx = u ∫ v dx − ∫ [u' (∫ v dx)] dx.
- **Golden Shortcut:** **∫ eˣ [f(x) + f'(x)] dx = eˣ f(x) + C**!

---

## Practice Questions

1. Evaluate by substitution: (a) **∫ 2x / (1 + x²) dx**, (b) **∫ (ln x)² / x dx**, (c) **∫ sin(tan⁻¹x) / (1 + x²) dx**.
2. Evaluate by substitution: **∫ 1 / (x + x ln x) dx**.
3. Evaluate: **∫ sin³x cos²x dx**.
4. Evaluate using partial fractions: **∫ 1 / (x² − 9) dx**.
5. Evaluate using partial fractions: **∫ (3x − 1) / [(x − 1)(x − 2)(x − 3)] dx**.
6. Evaluate using partial fractions: **∫ x / [(x − 1)² (x + 2)] dx**.
7. Evaluate by parts: (a) **∫ x eˣ dx**, (b) **∫ ln x dx**, (c) **∫ tan⁻¹ x dx**.
8. Evaluate by parts: **∫ eˣ sin x dx** (repeat by parts twice and solve for I!).
9. Evaluate using the eˣ[f(x) + f'(x)] formula: (a) **∫ eˣ (tan⁻¹x + 1/(1 + x²)) dx**, (b) **∫ eˣ (1 + sin x) / (1 + cos x) dx**.
10. Evaluate: **∫ (x² + 1) / (x² − 5x + 6) dx** (improper fraction!).

---

### Answers

1. (a) **ln(1 + x²) + C**; (b) Put t = ln x ⇒ **[(ln x)³ / 3] + C**; (c) Put t = tan⁻¹x ⇒ **−cos(tan⁻¹x) + C**.
2. Factor denominator: x(1 + ln x). Put t = 1 + ln x ⇒ dt = dx/x → **ln |1 + ln x| + C**.
   Jaanch: d/dx ln|1 + ln x| = (1/x)/(1 + ln x) ✅
3. Write sin³x = (1 − cos²x) sin x. Put t = cos x ⇒ dt = −sin x dx:
   −∫ (1 − t²)t² dt = ∫ (t⁴ − t²) dt = **cos⁵x / 5 − cos³x / 3 + C**.
4. 1/[(x−3)(x+3)] = (1/6)[1/(x−3) − 1/(x+3)] ⇒ **(1/6) ln |(x − 3)/(x + 3)| + C**.
5. A = 1, B = −5, C = 4 ⇒ **ln |x − 1| − 5 ln |x − 2| + 4 ln |x − 3| + C**.
   Jaanch: Check x = 0: −1 + 5/2 − 4/3 = (−6+15−8)/6 = 1/6; original (0−1)/((−1)(−2)(−3)) = −1/(−6) = 1/6 ✅
6. x/[(x−1)²(x+2)] = A/(x−1) + B/(x−1)² + C/(x+2) ⇒ B = 1/3, C = −2/9, A = 2/9.
   Integral = **(2/9) ln |(x − 1)/(x + 2)| − 1/[3(x − 1)] + C**.
7. (a) **eˣ(x − 1) + C**; (b) **x ln x − x + C**; (c) **x tan⁻¹x − (1/2) ln(1 + x²) + C**.
   Jaanch: d/dx [x tan⁻¹x − (1/2)ln(1+x²)] = tan⁻¹x + x/(1+x²) − x/(1+x²) = tan⁻¹x ✅
8. Let I = ∫ eˣ sin x dx. Apply by parts twice: I = eˣ sin x − eˣ cos x − I ⇒ 2I = eˣ(sin x − cos x) ⇒ **I = (eˣ / 2)(sin x − cos x) + C**!
   Jaanch: Differentiate: (eˣ/2)(sin x − cos x + cos x + sin x) = eˣ sin x ✅
9. (a) f(x) = tan⁻¹x, f'(x) = 1/(1+x²) ⇒ **eˣ tan⁻¹x + C**.
   (b) (1 + sin x)/(1 + cos x) = (1 + 2 sin(x/2)cos(x/2))/(2 cos²(x/2)) = (1/2) sec²(x/2) + tan(x/2) → f(x) = tan(x/2) ⇒ **eˣ tan(x/2) + C**!
10. Divide first: (x² + 1)/(x² − 5x + 6) = 1 + (5x − 5)/[(x − 2)(x − 3)] = 1 − 5/(x − 2) + 10/(x − 3).
    Integrate: **x − 5 ln |x − 2| + 10 ln |x − 3| + C**!
    Jaanch: −5(x−3) + 10(x−2) = 5x − 5 ✅

---

Ab tum substitution, partial fractions aur by parts (ILATE + eˣ[f+f']) teeno master keys chalana seekh chuke ho!

**Agle topic mein:** Hum [Integrals of Special Functions](integrals-part3.md) padhenge — jahan 9 golden quadratic formulas har root aur denominator ko seconds mein integrate kar denge!
