> **Class:** 12 | **Subject:** Mathematics | **Chapter 7:** Integrals (Part 5)

# Sab Kuch Mila Kar: Mixed Problems & Chapter Wrap-up

> **Pichle topic mein:** Humne [Definite Integrals and Properties](integrals-part4.md) padhe. Ab hum poore Integrals chapter — substitution, partial fractions, by parts, 9 special quadratic forms, aur King's/Even-Odd definite properties — ko ek saath milakar mixed high-scoring problems solve karenge!

---

Karan apne integration tournament ke final round mein baitha tha. Rule simple tha: pehle 10 seconds mein **technique pehchano**!
- Agar limit 0 se π/2 ya a se b aur symmetry dikhe → **King's Property!**
- Agar eˣ dikhe → **eˣ[f(x) + f'(x)]** check karo!
- Agar sin²x, cos²x denominator mein ho → **cos²x se divide karke t = tan x** rakho!
Bas yahi pattern-recognition poore Integrals chapter ko aasan bana deta hai!

---

## Naye Shabd (Master Technique Selector)

| Integrand Pattern | Best Technique |
|---|---|
| ∫ f(g(x)) g'(x) dx | **Substitution** t = g(x) |
| ∫ P(x)/Q(x) dx (factorisable Q) | **Partial Fractions** (divide first if deg P ≥ deg Q!) |
| ∫ u · v dx (two different families) | **By Parts (ILATE)** |
| ∫ eˣ [f(x) + f'(x)] dx | **eˣ f(x) + C** directly! |
| ∫ dx / (a sin²x + b cos²x) | Divide Num & Den by **cos²x**, put **t = tan x**! |
| ∫ₐᵇ with symmetry / trig | **King's Property** (x → a + b − x) or **Even/Odd**! |

---

## Mixed Solved Examples

### Example 1: Dividing by cos²x + King's Property Combo!
Evaluate: **I = ∫₀^(π/2) [ sin x cos x / (cos⁴ x + sin⁴ x) ] dx**.

**Solution:**
Divide numerator and denominator by **cos⁴ x**:
I = ∫₀^(π/2) [ (tan x sec² x) / (1 + tan⁴ x) ] dx.
Put **t = tan² x** ⇒ **dt = 2 tan x sec² x dx** ⇒ tan x sec² x dx = dt/2.
Change limits: x = 0 ⇒ t = 0; x = π/2 ⇒ t = ∞.
I = (1/2) ∫₀^∞ dt / (1 + t²) = (1/2) [ tan⁻¹ t ]₀^∞ = (1/2)(π/2 − 0) = **π / 4**!

Jaanch: Numerator sin x cos x = (1/2) sin 2x; denominator = 1 − (1/2)sin²2x ⇒ exact value π/4 ✅

---

### Example 2: Classic Partial Fractions with x² Substitution
Evaluate: **∫ [ x² / ((x² + 1)(x² + 4)) ] dx**.

**Solution:**
For partial fractions ONLY, temporarily let **y = x²**:
y / [(y + 1)(y + 4)] = A / (y + 1) + B / (y + 4) ⇒ y = A(y + 4) + B(y + 1).
- y = −1 ⇒ −1 = 3A ⇒ **A = −1/3**.
- y = −4 ⇒ −4 = −3B ⇒ **B = 4/3**.
Put y = x² back and integrate:
∫ [ (−1/3)/(x² + 1) + (4/3)/(x² + 4) ] dx
= −(1/3) tan⁻¹ x + (4/3) · (1/2) tan⁻¹(x/2) + C
= **−(1/3) tan⁻¹ x + (2/3) tan⁻¹(x/2) + C**!

Jaanch: Check fraction: −(1/3)(x²+4) + (4/3)(x²+1) = (−x²−4+4x²+4)/3 = x² ✅

---

### Example 3: Combining King's Property & Dividing by cos²x
Evaluate: **I = ∫₀^π [ x tan x / (sec x + tan x) ] dx**.

**Solution:**
1. Apply King's property (x → π − x): tan(π − x) = −tan x, sec(π − x) = −sec x ⇒ (−tan x)/(−sec x − tan x) = **+tan x / (sec x + tan x)**!
   Add both: 2I = π ∫₀^π [ tan x / (sec x + tan x) ] dx ⇒ **I = (π/2) ∫₀^π [ tan x / (sec x + tan x) ] dx**.
2. Rationalise denominator (multiply Num & Den by **sec x − tan x**, using sec²x − tan²x = 1!):
   I = (π/2) ∫₀^π tan x (sec x − tan x) dx = (π/2) ∫₀^π (sec x tan x − sec²x + 1) dx
   = (π/2) [ sec x − tan x + x ]₀^π
   = (π/2) [ (−1 − 0 + π) − (1 − 0 + 0) ] = **(π/2)(π − 2)**!

Jaanch: π ≈ 3.14 ⇒ (π/2)(π − 2) ≈ 1.79 > 0 (integrand ≥ 0 on [0, π]!) ✅

---

## Aam Galtiyan (Mixed-Problem Traps)

1. **x² substitution mein dx ko dy badalna (jab partial fractions kar rahe hon!):**
   - *Galat:* y = x² rakh kar ∫ y / [(y+1)(y+4)] dy integrate kar dena!
   - *Sahi:* y = x² sirf **algebraic partial fraction todne** ke liye temporary label hai — integrate hamesha **x ke respect mein** hi karo!

2. **Symmetric limit −a to +a mein odd part aur even part alag na karna:**
   - *Galat:* Poore integrand ko odd bol dena jab usmein constant ya even term bhi juda ho!
   - *Sahi:* Sum ko split karo: odd terms = 0, even terms = 2 ∫₀ᵃ!

---

## Quick Recap

- **Algebraic y = x² trick:** Only for splitting fractions, NEVER change dx!
- **Trig denominator (a sin²x + b cos²x):** Divide by cos²x and put t = tan x!
- **x · f(sin x, cos x) on [0, π]:** King's property (x → π − x) eliminates x cleanly!

---

## Practice Questions

1. Evaluate: **∫ dx / (x − x³)** (Factor x(1 − x)(1 + x)!).
2. Evaluate: **∫ (sin x) / sin(x − a) dx** (Put t = x − a!).
3. Evaluate: **∫₀^(π/2) [ sin⁴ x / (sin⁴ x + cos⁴ x) ] dx**.
4. Evaluate: **∫₁⁴ [ |x − 1| + |x − 2| + |x − 3| ] dx**.
5. Evaluate: **∫ eˣ [ (1 + sin x) / (1 + cos x) ] dx**.
6. Evaluate: **∫ dx / (3 + 2 sin x + cos x)** (Use half-angle t = tan(x/2)!).
7. Evaluate: **∫₀^(π/2) [ cos² x / (cos² x + 4 sin² x) ] dx**.
8. Evaluate: **∫ (x² + 1) / (x⁴ + 1) dx** (Divide Num & Den by x²!).
9. Evaluate: **∫_(−π/2)^(π/2) sin² x dx**.
10. Evaluate: **∫₀¹ x (1 − x)ⁿ dx** (Use King's property x → 1 − x!).

---

### Answers

1. 1/[x(1−x)(1+x)] = 1/x + (1/2)/(1−x) − (1/2)/(1+x) ⇒ **ln |x| − (1/2) ln |1 − x²| + C**.
   Jaanch: 1/x + x/(1 − x²) = 1/[x(1 − x²)] ✅
2. Put t = x − a ⇒ x = t + a: ∫ [sin(t + a)/sin t] dt = ∫ (cos a + sin a · cot t) dt = **x cos a + sin a · ln |sin(x − a)| + C**.
3. King's property: 2I = π/2 ⇒ **I = π/4**.
4. Integrate each modulus separately on [1, 4]:
   - ∫₁⁴ |x − 1| dx = [ (x−1)²/2 ]₁⁴ = **9/2**.
   - ∫₁⁴ |x − 2| dx = 1/2 + 2 = **5/2**.
   - ∫₁⁴ |x − 3| dx = 2 + 1/2 = **5/2**.
   Total = 9/2 + 5/2 + 5/2 = **19/2**!
   Jaanch: 4.5 + 2.5 + 2.5 = 9.5 = 19/2 ✅
5. **eˣ tan(x/2) + C** (from Part 2 Q9b!).
6. Put t = tan(x/2), dx = 2dt/(1+t²), sin x = 2t/(1+t²), cos x = (1−t²)/(1+t²):
   ∫ 2dt / [3(1+t²) + 4t + (1−t²)] = ∫ dt / (t² + 2t + 2) = ∫ dt / [(t+1)² + 1] = **tan⁻¹(tan(x/2) + 1) + C**!
7. Rewrite cos²x / (cos²x + 4 sin²x) = (1/3)[ (cos²x + 4 sin²x) − (4 sin²x − 2 cos²x) ] — better: write 1 − (4 sin²x)/(cos²x + 4 sin²x), or divide by cos²x: ∫₀^∞ dt / [(1+t²)(1+4t²)] = (1/3) ∫₀^∞ [4/(1+4t²) − 1/(1+t²)] dt = (1/3)[ 2 tan⁻¹(2t) − tan⁻¹t ]₀^∞ = (1/3)(π − π/2) = **π/6**!
   Jaanch: 2(π/2) − π/2 = π/2; (1/3)(π/2) = π/6 ✅
8. Divide by x²: ∫ (1 + 1/x²) / [(x − 1/x)² + 2] dx. Put t = x − 1/x ⇒ dt = (1 + 1/x²) dx:
   ∫ dt / (t² + (√2)²) = **(1/√2) tan⁻¹[ (x − 1/x) / √2 ] + C**!
   Jaanch: (x − 1/x)² + 2 = x² − 2 + 1/x² + 2 = x² + 1/x² ✅
9. Even function: 2 ∫₀^(π/2) sin²x dx = 2 × (π/4) = **π/2**!
10. Replace x → 1 − x: ∫₀¹ (1 − x) xⁿ dx = ∫₀¹ (xⁿ − x^(n+1)) dx = **1/(n + 1) − 1/(n + 2) = 1 / [(n + 1)(n + 2)]**!
    Jaanch: For n = 1: ∫₀¹ (x − x²) dx = 1/2 − 1/3 = 1/6 = 1/(2×3) ✅

---

## Chapter Ka Saar (Integrals Wrap-up)

| Topic | Core Formulas / Rules | Must-Remember Facts |
|---|---|---|
| 1. Standard Integrals | ∫ xⁿ dx = x^(n+1)/(n+1) + C; ∫ dx/x = ln(abs x) + C | Always add + C; check by differentiating! |
| 2. Three Core Methods | Substitution, Partial Fractions, By Parts (ILATE) | Divide improper fractions first; **∫ eˣ[f(x)+f'(x)] dx = eˣf(x) + C** |
| 3. 9 Special Forms | 6 denominator quadratics + 3 √(quadratic) forms | Complete the square; write px+q = A(deriv) + B |
| 4. Definite Integrals | FTC: F(b) − F(a); King's: f(x) → f(a+b−x) | Change limits on substitution; Even/Odd on [−a, a]; split abs(x − c) |

---

Ab tumne Integrals ke saare core methods aur definite properties master kar liye hain! Competitive exams (JEE/Olympiad) ke liye **Newton–Leibniz Rule (Differentiation Under Integral Sign), Walli's Formula, Limit of Riemann Sums, aur Algebraic Twin Integrals** padhne ke liye [Integrals — Gehrai Mein (Advanced Level)](integrals-advanced.md) zaroor dekho.

**Agle chapter mein:** Hum **Application of Integrals** shuru karenge — jahan definite integrals se circles, parabolas, ellipses aur intersecting curves ke beech ka exact **Area** nikalenge!
