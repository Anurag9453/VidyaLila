> **Class:** 12 | **Subject:** Mathematics | **Chapter 7:** Integrals (Part 4)

# Definite Integrals, Fundamental Theorem of Calculus and Properties

> **Pichle topic mein:** Humne [Integrals of Special Functions](integrals-part3.md) padhe. Ab hum **Definite Integral ∫ₐᵇ f(x) dx** (lower limit a se upper limit b tak exact numerical value!), **Fundamental Theorem of Calculus**, aur **7 Golden Properties** (especially **King's Property** aur **Even/Odd Rule**) seekhenge!

---

Jaya apne maths club mein ek darawna integral dekh rahi thi: **I = ∫₀^(π/2) [ √(sin x) / (√(sin x) + √(cos x)) ] dx**! Iska indefinite anti-derivative nikalna lagbhag impossible hai! Par Jaya ne sirf ek property lagayi — x ko **(π/2 − x)** se replace kiya (**King's Property!**), dono equations ko joda: **2I = ∫₀^(π/2) 1 dx = π/2 ⇒ I = π/4**! Bina integrate kiye 3 lines mein exact answer!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Definite Integral (∫ₐᵇ f(x) dx)** | Lower limit a se upper limit b tak curve y = f(x) aur x-axis ke beech ka **signed area** (exact number, no + C!) |
| **Fundamental Theorem of Calculus (FTC)** | Agar F'(x) = f(x) ho, toh **∫ₐᵇ f(x) dx = [F(x)]ₐᵇ = F(b) − F(a)** |
| **King's Property (P₄)** | **∫ₐᵇ f(x) dx = ∫ₐᵇ f(a + b − x) dx** (special case: ∫₀ᵃ f(x) dx = ∫₀ᵃ f(a − x) dx) |
| **Even / Odd Function** | Even: f(−x) = f(x); Odd: f(−x) = −f(x) |

---

## 1. Fundamental Theorem of Calculus & Substitution in Definite Integrals

1. **FTC:** ∫ₐᵇ f(x) dx = F(b) − F(a). *(Constant + C cancels out: (F(b)+C) − (F(a)+C) = F(b) − F(a)!)*
2. **Substitution Golden Rule:** Jab definite integral mein **t = g(x)** substitute karo, toh **limits ko bhi x se t mein badal lo** (a → g(a), b → g(b)) — phir wapas x mein lautne ki zaroorat hi nahi padti!

---

## 2. The 7 Golden Properties of Definite Integrals (MUST MEMORISE!)

- **P₀ (Dummy Variable):** ∫ₐᵇ f(x) dx = ∫ₐᵇ f(t) dt
- **P₁ (Swap Limits Flips Sign):** ∫ₐᵇ f(x) dx = **−∫_b^a f(x) dx**   (and ∫ₐᵃ f(x) dx = **0**!)
- **P₂ (Splitting Interval — Best for |x − c|!):** **∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫_c^b f(x) dx**
- **P₃ / P₄ (KING'S PROPERTY — MOST IMPORTANT!):**
  - **∫ₐᵇ f(x) dx = ∫ₐᵇ f(a + b − x) dx**
  - Special case (a = 0): **∫₀ᵃ f(x) dx = ∫₀ᵃ f(a − x) dx**
- **P₅ (Queen's Property — Splitting 0 to 2a):**
  ∫₀^(2a) f(x) dx = ∫₀ᵃ f(x) dx + ∫₀ᵃ f(2a − x) dx
- **P₆ (Corollary of P₅):**
  - If **f(2a − x) = f(x):** ∫₀^(2a) f(x) dx = **2 ∫₀ᵃ f(x) dx**
  - If **f(2a − x) = −f(x):** ∫₀^(2a) f(x) dx = **0**!
- **P₇ (EVEN / ODD SYMMETRY — Instant Zero Maker!):**
  For symmetric limits **−a to +a**:
  - If f(x) is **EVEN** (f(−x) = f(x)): **∫₋ₐᵃ f(x) dx = 2 ∫₀ᵃ f(x) dx**
  - If f(x) is **ODD** (f(−x) = −f(x)): **∫₋ₐᵃ f(x) dx = 0**!

---

## Solved Examples

### Example 1: Evaluating Definite Integral by Substitution (Changing Limits!)
Evaluate: **∫₀¹ [ tan⁻¹ x / (1 + x²) ] dx**.

**Solution:**
Put **t = tan⁻¹ x** ⇒ **dt = dx / (1 + x²)**.
Change limits:
- When x = 0 ⇒ t = tan⁻¹(0) = **0**
- When x = 1 ⇒ t = tan⁻¹(1) = **π/4**
Integral = ∫₀^(π/4) t dt = [ t² / 2 ]₀^(π/4) = (1/2) (π²/16 − 0) = **π² / 32**!

Jaanch: Indefinite integral is (1/2)(tan⁻¹x)²; at 1 gives π²/32, at 0 gives 0 ✅

---

### Example 2: Splitting Modulus Function Using P₂
Evaluate: **∫₋₅⁵ |x + 2| dx**.

**Solution:**
Critical point where inside = 0: x + 2 = 0 ⇒ **x = −2** ∈ (−5, 5).
- For x ∈ [−5, −2]: x + 2 ≤ 0 ⇒ |x + 2| = **−(x + 2)**
- For x ∈ [−2, 5]: x + 2 ≥ 0 ⇒ |x + 2| = **+(x + 2)**
Split at x = −2:
I = ∫₋₅⁻² −(x + 2) dx + ∫₋₂⁵ (x + 2) dx
= −[ (x + 2)² / 2 ]₋₅⁻² + [ (x + 2)² / 2 ]₋₂⁵
= −(0 − 9/2) + (49/2 − 0) = 9/2 + 49/2 = 58/2 = **29**!

Jaanch: Geometric check: two right triangles of legs (3, 3) and (7, 7) → Areas = 9/2 + 49/2 = 29 ✅

---

### Example 3: King's Property Classic (∫₀^(π/2) ln(sin x) dx = −(π/2) ln 2)
Evaluate **I = ∫₀^(π/2) ln(sin x) dx** (Famous 5-Mark Proof!).

**Solution:**
Let **I = ∫₀^(π/2) ln(sin x) dx**   ... (1)
Apply King's property (x → π/2 − x):
**I = ∫₀^(π/2) ln(cos x) dx**   ... (2)
Add (1) and (2):
2I = ∫₀^(π/2) [ln(sin x) + ln(cos x)] dx = ∫₀^(π/2) ln(sin x cos x) dx
Rewrite sin x cos x = (sin 2x) / 2:
2I = ∫₀^(π/2) ln(sin 2x) dx − ∫₀^(π/2) ln 2 dx
= ∫₀^(π/2) ln(sin 2x) dx − **(π/2) ln 2**.
In the first integral, put **t = 2x ⇒ dx = dt/2** (limits 0 to π):
(1/2) ∫₀^π ln(sin t) dt. Since sin(π − t) = sin t, by P₆ this equals (1/2) × 2 ∫₀^(π/2) ln(sin t) dt = **I**!
Substitute back:
2I = I − (π/2) ln 2 ⇒ **I = −(π/2) ln 2**!

Jaanch: Since 0 < sin x < 1 on (0, π/2), ln(sin x) < 0 so integral must be negative; −(π/2)ln 2 ≈ −1.089 ✅

---

### Example 4: Instant Zero via Odd Function Property (P₇)
Evaluate: **∫_(−π/2)^(π/2) sin⁷ x dx**.

**Solution:**
Limits are symmetric (−π/2 to +π/2).
Check f(−x) = (sin(−x))⁷ = (−sin x)⁷ = **−sin⁷ x = −f(x)** (ODD function!).
By Property P₇, **I = 0** immediately!

Jaanch: Positive area on [0, π/2] exactly cancels equal negative area on [−π/2, 0] ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Substitution ke baad limits change karna bhool jana:**
   - *Galat:* t = x² rakh kar limits wahi 0 se 2 rakh dena (jabki t ki limits 0 se 4 ho gayi hain!).
   - *Sahi:* Substitution karte hi **turant limits bhi substitute** karo!

2. **Modulus |x − c| ko bina split kiye integrate kar dena:**
   - *Galat:* ∫₋₁² |x| dx = [x²/2]₋₁² = 3/2.
   - *Sahi:* x = 0 par split karo: ∫₋₁⁰ (−x) dx + ∫₀² x dx = 1/2 + 2 = **5/2**!

---

## Quick Recap

- **FTC:** ∫ₐᵇ f(x) dx = F(b) − F(a) (no + C).
- **King's Property:** ∫ₐᵇ f(x) dx = ∫ₐᵇ f(a + b − x) dx → add both to cancel messy numerators!
- **Symmetric limits (−a to a):** Odd ⇒ **0**; Even ⇒ **2 ∫₀ᵃ f(x) dx**.
- **Modulus |x − c|:** Split at x = c using P₂!

---

## Practice Questions

1. Evaluate: (a) **∫₂³ x² dx**, (b) **∫₀^(π/2) cos 2x dx**, (c) **∫₄⁵ eˣ dx**.
2. Evaluate by substitution: **∫₀¹ [ x / (x² + 1) ] dx**.
3. Evaluate using King's property: **∫₀^(π/2) [ cos⁵ x / (sin⁵ x + cos⁵ x) ] dx**.
4. Evaluate using King's property: **∫₀^(π/2) [ sin^(3/2) x / (sin^(3/2) x + cos^(3/2) x) ] dx**.
5. Evaluate: **∫₂⁸ |x − 5| dx**.
6. Evaluate: **∫₀² x √(2 − x) dx** (Hint: use King's property x → 2 − x!).
7. Evaluate using P₇ (even/odd): **∫_(−π/2)^(π/2) (x³ + x cos x + tan⁵ x + 1) dx**.
8. Evaluate: **∫₀^(π/4) ln(1 + tan x) dx** (Classic King's property problem!).
9. Evaluate: **∫₀^π [ x sin x / (1 + cos² x) ] dx**.
10. Evaluate: **∫_(−1)¹ sin⁵ x cos⁴ x dx**.

---

### Answers

1. (a) [x³/3]₂³ = (27 − 8)/3 = **19/3**; (b) [(sin 2x)/2]₀^(π/2) = **0**; (c) **e⁵ − e⁴**.
2. Put t = x² + 1 ⇒ dt = 2x dx; limits 1 to 2: (1/2) [ln t]₁² = **(1/2) ln 2**.
   Jaanch: (1/2) ln 2 ≈ 0.3466 ✅
3. Apply x → π/2 − x and add: 2I = ∫₀^(π/2) 1 dx = π/2 ⇒ **I = π/4**!
4. Apply x → π/2 − x and add: 2I = ∫₀^(π/2) 1 dx = π/2 ⇒ **I = π/4**!
5. Split at x = 5: ∫₂⁵ (5 − x) dx + ∫₅⁸ (x − 5) dx = 9/2 + 9/2 = **9**!
   Jaanch: Two congruent triangles of base 3, height 3 → 2 × (9/2) = 9 ✅
6. Replace x → 2 − x: I = ∫₀² (2 − x) √x dx = ∫₀² (2 x^(1/2) − x^(3/2)) dx
   = [ (4/3) x^(3/2) − (2/5) x^(5/2) ]₀² = (4/3)(2√2) − (2/5)(4√2) = (8√2)(1/3 − 1/5) = **(16√2) / 15**!
   Jaanch: 1/3 − 1/5 = 2/15; 8√2 × 2/15 = 16√2/15 ✅
7. x³, x cos x, and tan⁵x are ALL **ODD** (each integrates to 0 on [−π/2, π/2]!). Only **1** (even) survives:
   ∫_(−π/2)^(π/2) 1 dx = **π**!
8. Apply x → π/4 − x: tan(π/4 − x) = (1 − tan x)/(1 + tan x) ⇒ 1 + tan(π/4 − x) = **2 / (1 + tan x)**!
   So I = ∫₀^(π/4) [ln 2 − ln(1 + tan x)] dx = (π/4) ln 2 − I ⇒ 2I = (π/4) ln 2 ⇒ **I = (π/8) ln 2**!
   Jaanch: Classic JEE/Class 12 identity = (π/8) ln 2 ✅
9. Apply x → π − x and add: 2I = π ∫₀^π [ sin x / (1 + cos²x) ] dx.
   Put t = cos x (limits 1 to −1, dt = −sin x dx): 2I = π ∫₋₁¹ dt/(1 + t²) = π [tan⁻¹t]₋₁¹ = π(π/4 − (−π/4)) = π²/2 ⇒ **I = π²/4**!
   Jaanch: π²/4 ≈ 2.467 ✅
10. f(−x) = (−sin x)⁵ (cos x)⁴ = −f(x) (ODD function on [−1, 1]!) ⇒ **I = 0**!

---

Ab tum definite integrals aur unki 7 properties (especially King's Property aur Even/Odd symmetry) ko lightning speed se laga sakte ho!

**Agle topic mein:** [Sab Kuch Mila Kar: Mixed Problems & Chapter Wrap-up](integrals-part5.md) mein hum poore Integrals chapter ke mixed exam problems aur final summary table complete karenge!
