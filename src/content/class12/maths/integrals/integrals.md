> **Class:** 12 | **Subject:** Mathematics | **Chapter 7:** Integrals

# Integration as the Inverse of Differentiation and Standard Integrals

> **Pichle chapter mein:** Humne [Application of Derivatives — Mixed Problems & Wrap-up](../application-of-derivatives/application-of-derivatives-part6.md) mein derivatives ke sabhi applications complete kiye. **Bridge:** Sabhi standard derivative formulas hum [Continuity and Differentiability](../../../class12/maths/continuity-and-differentiability/continuity-and-differentiability-part2.md) mein padh chuke hain — ab hum differentiation ka **reverse process (Anti-differentiation / Integration)** shuru kar rahe hain!

---

Indu apni car ke dashboard par speedometer aur odometer dekh rahi thi. Agar tumhe position x(t) pata ho, toh derivative **dx/dt** tumhe speed **v(t)** deta hai! Par agar tumhe sirf speed v(t) ka record diya jaye aur poocha jaye ki car ab kahan hai, toh tumhe **reverse** jaana padega (**Integration!**) — par ek twist hai: jab tak yeh na pata ho ki car kis milestone (**Constant of Integration, + C**) se chali thi, exact position mein ek arbitrary constant **+ C** hamesha rahega!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Indefinite Integral (∫ f(x) dx)** | Function f(x) ke sabhi anti-derivatives ka family: **∫ f(x) dx = F(x) + C**, jahan F'(x) = f(x) |
| **Integrand** | Woh function f(x) jise integrate kiya ja raha hai |
| **Constant of Integration (+ C)** | Arbitrary real constant (kyunki d/dx(C) = 0, isliye F(x) + C ka derivative hamesha F'(x) = f(x) hi aata hai!) |

---

## 1. Master Table of Standard Integrals (MUST MEMORISE!)

| Integrand f(x) | Indefinite Integral ∫ f(x) dx | Check by Differentiating! |
|---|---|---|
| **xⁿ** (n ≠ −1) | **x^(n+1) / (n + 1) + C** | d/dx [x^(n+1)/(n+1)] = xⁿ |
| **1 / x** | **ln(abs x) + C** (for x ≠ 0) | d/dx (ln x) = 1/x |
| **eˣ** | **eˣ + C** | d/dx (eˣ) = eˣ |
| **aˣ** (a > 0, a ≠ 1) | **aˣ / (ln a) + C** | d/dx (aˣ/ln a) = aˣ |
| **sin x** | **−cos x + C** | d/dx (−cos x) = sin x |
| **cos x** | **sin x + C** | d/dx (sin x) = cos x |
| **sec² x** | **tan x + C** | d/dx (tan x) = sec² x |
| **cosec² x** | **−cot x + C** | d/dx (−cot x) = cosec² x |
| **sec x tan x** | **sec x + C** | d/dx (sec x) = sec x tan x |
| **cosec x cot x** | **−cosec x + C** | d/dx (−cosec x) = cosec x cot x |
| **1 / √(1 − x²)** | **sin⁻¹ x + C** (or −cos⁻¹ x + C) | d/dx (sin⁻¹ x) = 1/√(1 − x²) |
| **1 / (1 + x²)** | **tan⁻¹ x + C** (or −cot⁻¹ x + C) | d/dx (tan⁻¹ x) = 1/(1 + x²) |
| **1 / (x √(x² − 1))** | **sec⁻¹ x + C** (x > 1) | d/dx (sec⁻¹ x) = 1/(x√(x²−1)) |

### Linearity & Linear-Argument Shortcut:
1. **∫ [a f(x) ± b g(x)] dx = a ∫ f(x) dx ± b ∫ g(x) dx**
2. **Linear shift rule:** If ∫ f(x) dx = F(x) + C, then **∫ f(ax + b) dx = (1/a) F(ax + b) + C** (divide by coefficient of x!).
   *(Example: ∫ cos(5x + 2) dx = (1/5) sin(5x + 2) + C!)*

---

## Solved Examples

### Example 1: Algebraic Splitting Before Integrating
Evaluate: **∫ (x³ + 5x² − 4) / x² dx**.

**Solution:**
Divide each term in numerator by x² separately:
∫ (x + 5 − 4 x⁻²) dx
= x²/2 + 5x − 4 [ x⁻¹ / (−1) ] + C
= **x²/2 + 5x + 4/x + C**!

Jaanch: Differentiate answer: d/dx (x²/2 + 5x + 4/x + C) = x + 5 − 4/x² = (x³ + 5x² − 4)/x² ✅

---

### Example 2: Using Trigonometric Identities to Integrate
Evaluate: **∫ (2 − 3 sin x) / cos² x dx**.

**Solution:**
Split into two standard trig terms:
∫ [ 2/cos²x − 3 (sin x / cos x)(1 / cos x) ] dx
= ∫ (2 sec²x − 3 sec x tan x) dx
= **2 tan x − 3 sec x + C**!

Jaanch: Differentiate: 2 sec²x − 3 sec x tan x = (2 − 3 sin x)/cos²x ✅

---

### Example 3: Integrating tan²x Using sec²x − 1
Evaluate: **∫ tan²(2x − 3) dx**.

**Solution:**
Rewrite using **tan²θ = sec²θ − 1**:
∫ [ sec²(2x − 3) − 1 ] dx
Apply linear-argument rule (divide by 2!):
= **(1/2) tan(2x − 3) − x + C**!

Jaanch: Differentiate: (1/2) · 2 sec²(2x − 3) − 1 = sec²(2x − 3) − 1 = tan²(2x − 3) ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Product ya Quotient par alag-alag integrate kar dena:**
   - *Galat:* ∫ (x · sin x) dx = (∫ x dx) · (∫ sin x dx) = (x²/2)(−cos x).
   - *Sahi:* **∫ f(x)g(x) dx ≠ (∫ f dx)(∫ g dx)!** Product ke liye expand karo, substitution karo, ya Integration by Parts lagao!

2. **Indefinite integral mein + C bhool jana:**
   - *Galat:* ∫ 2x dx = x².
   - *Sahi:* Har indefinite integral ke end mein **+ C** likhna mandatory hai!

3. **∫ sin x dx ko +cos x aur ∫ cos x dx ko −sin x likh dena:**
   - *Galat:* Derivative ke signs integration mein laga dena.
   - *Sahi:* Answer ko **dimag mein differentiate** karke check karo! d/dx(−cos x) = +sin x → **∫ sin x dx = −cos x + C**!

---

## Quick Recap

- **Integration = Anti-differentiation:** Always check your integral by differentiating your final answer!
- **Never distribute ∫ over products or quotients** — split fractions, expand brackets, or use trig identities (tan²x = sec²x − 1, cos 2x = 1 − 2 sin²x = 2 cos²x − 1) first!
- **Linear argument:** ∫ f(ax + b) dx = **(1/a) F(ax + b) + C**.

---

## Practice Questions

1. Evaluate: **∫ (4e^(3x) + 1) dx**.
2. Evaluate: **∫ (√x − 1/√x)² dx**.
3. Evaluate: **∫ (x³ − x² + x − 1) / (x − 1) dx**.
4. Evaluate: **∫ sec x (sec x + tan x) dx**.
5. Evaluate: **∫ (sec² x / cosec² x) dx**.
6. Evaluate: **∫ sin² x dx** (Hint: use cos 2x = 1 − 2 sin²x!).
7. Evaluate: **∫ (1 − sin x) / cos² x dx**.
8. Evaluate: **∫ (x^(3/2) + 2eˣ − 1/x) dx**.
9. Find the anti-derivative F(x) of **f(x) = 4x³ − 6**, given that **F(0) = 3**.
10. Evaluate: **∫ (3ˣ + 5ˣ) / 2ˣ dx**.

---

### Answers

1. **(4/3) e^(3x) + x + C**.
   Jaanch: d/dx [(4/3)e^(3x) + x] = 4e^(3x) + 1 ✅
2. Expand: (√x − 1/√x)² = x − 2 + 1/x.
   Integrate: **x²/2 − 2x + ln |x| + C**.
3. Factor numerator: x²(x − 1) + 1(x − 1) = (x² + 1)(x − 1). Cancel (x − 1):
   ∫ (x² + 1) dx = **x³/3 + x + C**.
   Jaanch: d/dx(x³/3 + x) = x² + 1 ✅
4. ∫ (sec²x + sec x tan x) dx = **tan x + sec x + C**.
5. sec²x / cosec²x = sin²x / cos²x = tan²x = sec²x − 1.
   ∫ (sec²x − 1) dx = **tan x − x + C**.
6. sin²x = (1 − cos 2x)/2 ⇒ ∫ (1/2 − (1/2) cos 2x) dx = **x/2 − (1/4) sin 2x + C**.
   Jaanch: d/dx(x/2 − (1/4)sin 2x) = 1/2 − (1/2)cos 2x = sin²x ✅
7. ∫ (sec²x − sec x tan x) dx = **tan x − sec x + C**.
8. **(2/5) x^(5/2) + 2eˣ − ln |x| + C**.
9. F(x) = ∫ (4x³ − 6) dx = x⁴ − 6x + C.
   F(0) = 3 ⇒ 0 − 0 + C = 3 ⇒ C = 3 → **F(x) = x⁴ − 6x + 3**.
   Jaanch: F'(x) = 4x³ − 6 and F(0) = 3 ✅
10. Split: ∫ [ (3/2)ˣ + (5/2)ˣ ] dx = **(3/2)ˣ / ln(3/2) + (5/2)ˣ / ln(5/2) + C**.

---

Ab tum sabhi standard integrals aur basic algebraic/trig simplifications bilkul fast solve kar sakte ho!

**Agle topic mein:** Hum integration ke teen sabse powerful weapons — [Substitution, Partial Fractions and Integration by Parts](integrals-part2.md) — master karenge!
