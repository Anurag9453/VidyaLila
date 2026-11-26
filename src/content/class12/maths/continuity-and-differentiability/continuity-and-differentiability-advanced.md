> **Class:** 12 | **Subject:** Mathematics | **Chapter 5:** Continuity and Differentiability (Gehrai Mein — Advanced Level)

# Continuity and Differentiability — Gehrai Mein (Advanced Level)

> **Core chapter se bridge:** Core lessons ([Part 1: Continuity](continuity-and-differentiability.md) se [Part 5: Mixed Problems](continuity-and-differentiability-part5.md) tak) mein humne continuity, chain/implicit/logarithmic/parametric derivatives aur Rolle's/MVT padhe. Ab competitive-exam depth mein hum **Classification of Discontinuities, Non-Differentiability Points of |f(x)|, L'Hôpital's Rule & 1^∞ Limits, Derivative of an Inverse Function (f⁻¹)'(y) = 1/f'(x), aur Functional Differentiability** cover karenge.

---

Deepali ek real-analysis seminar mein ek function dekh rahi thi: **f(x) = (x − 1) |x − 1|**! Pehle laga ki |x − 1| ki wajah se yeh x = 1 par non-differentiable hoga — par jab usne LHD aur RHD nikala, toh **LHD = 0 = RHD** aaya! Factor **(x − 1)** ne sharp corner ko smooth kar diya! Yahi hai advanced differentiability ka sabse famous golden rule!

---

## 1. Classification of Discontinuities

1. **Removable Discontinuity:** LHL = RHL (finite limit exists!), par **limit ≠ f(c)** (ya f(c) undefined). Example: (sin x)/x at x = 0 — redefining f(0) = 1 removes the discontinuity!
2. **Jump Discontinuity (First Kind):** LHL and RHL are BOTH finite, par **LHL ≠ RHL** (e.g., [x] at integers, |x|/x at 0). Jump size = |RHL − LHL|.
3. **Infinite / Oscillatory Discontinuity (Second Kind):** At least one of LHL or RHL is ±∞ (e.g., 1/x at 0) or oscillates without settling (e.g., sin(1/x) at 0).

---

## 2. Sharp-Corner Rule for |f(x)| & Product Smoothing

- **Where is y = |f(x)| non-differentiable?** At points x = c where **f(c) = 0 AND f'(c) ≠ 0** (graph crosses x-axis at a non-zero angle, so taking |...| creates a V-shaped sharp corner!).
- **When IS |f(x)| differentiable at a root f(c) = 0?** When **f'(c) = 0** as well (e.g., **|x|³**, **x|x|**, or **(x − 1)²|x − 1|** — tangent is already flat = 0!).
- **Product Smoothing Theorem:** If g(x) is **continuous but non-differentiable** at x = c (like |x − c|) and h(x) is differentiable at x = c, then **h(x)·g(x)** is differentiable at x = c **IF AND ONLY IF h(c) = 0**!

---

## 3. L'Hôpital's Rule & 1^∞ Indeterminate Form

### (a) L'Hôpital's Rule (Strictly ONLY for **0/0** or **∞/∞**!):
If lim_(x→a) f(x)/g(x) has form **0/0** or **∞/∞**, then:
**lim_(x→a) f(x) / g(x) = lim_(x→a) f'(x) / g'(x)** (provided RHS limit exists; can repeat if still 0/0 or ∞/∞!).
*(Warning: NEVER apply L'Hôpital if the fraction is NOT 0/0 or ∞/∞!)*

### (b) The 1^∞ Shortcut Formula (Super-Fast JEE Weapon!):
If lim_(x→a) f(x) = 1 and lim_(x→a) g(x) = ∞, then:
**lim_(x→a) [f(x)]^(g(x)) = e^[ lim_(x→a) g(x) · (f(x) − 1) ]**!

---

## 4. Derivative of Inverse Function & Cauchy's Mean Value Theorem

1. **Derivative of Inverse Function:** If g = f⁻¹ (so g(f(x)) = x), differentiating gives g'(f(x)) · f'(x) = 1:
   **(f⁻¹)'(y₀) = 1 / f'(x₀)**   where **y₀ = f(x₀)**!
   *(You do NOT even need to find the explicit formula for f⁻¹(y)!)*
2. **Cauchy's Mean Value Theorem (CMVT):** If f, g are continuous on [a, b], differentiable on (a, b), and g'(x) ≠ 0, then ∃ c ∈ (a, b) such that:
   **f'(c) / g'(c) = [f(b) − f(a)] / [g(b) − g(a)]**!

---

## Deep Solved Problems

### Problem 1: Finding (f⁻¹)'(y₀) Without Finding f⁻¹!
Let **f(x) = x³ + 2x + 1** (strictly increasing on R, hence invertible). Find **(f⁻¹)'(4)**!

**Solution:**
First find x₀ such that **f(x₀) = 4**:
x₀³ + 2x₀ + 1 = 4 ⇒ x₀³ + 2x₀ − 3 = 0 ⇒ by inspection, **x₀ = 1** (1 + 2 − 3 = 0)!
Now compute f'(x) = 3x² + 2 ⇒ f'(1) = 3(1)² + 2 = **5**.
By inverse derivative theorem:
**(f⁻¹)'(4) = 1 / f'(1) = 1/5**!

Jaanch: f'(x) = 3x² + 2 > 0 everywhere ⇒ f is strictly one-one (x₀ = 1 is unique!), (f⁻¹)'(4) = 1/5 ✅

---

### Problem 2: Counting Non-Differentiable Points of a Composite Modulus
Find all points where **f(x) = |x − 1| + |x² − 4|** is continuous but NOT differentiable.

**Solution:**
Both |x − 1| and |x² − 4| = |(x − 2)(x + 2)| are continuous everywhere on R.
Check simple roots (where inside = 0 and derivative ≠ 0):
- x − 1 = 0 ⇒ **x = 1** (derivative = 1 ≠ 0 → sharp corner!)
- x² − 4 = 0 ⇒ **x = 2** and **x = −2** (derivative 2x = ±4 ≠ 0 → sharp corners!)
Since the three roots {−2, 1, 2} are all distinct, they cannot cancel each other!
Thus f(x) is non-differentiable at **3 points: x = −2, 1, and 2**!

Jaanch: At x = 1, |x² − 4| = 4 − x² is smooth, while |x − 1| has a corner ⇒ sum has a corner ✅

---

### Problem 3: Evaluating a 0/0 Limit with L'Hôpital's Rule
Evaluate **lim_(x→0) (x − sin x) / x³**.

**Solution:**
At x = 0, form is **0/0** → apply L'Hôpital's rule:
1. 1st time: lim_(x→0) (1 − cos x) / (3x²)   [still **0/0**!]
2. 2nd time: lim_(x→0) (sin x) / (6x) = (1/6) × 1 = **1/6**!

Jaanch: Taylor check: sin x = x − x³/6 + ... ⇒ (x − sin x)/x³ → 1/6 ✅

---

### Problem 4: Evaluating a 1^∞ Limit Instantly
Evaluate **lim_(x→0) (cos x)^(1/x²)**.

**Solution:**
As x → 0, cos x → 1 and 1/x² → ∞ (**1^∞ form**!).
Apply the 1^∞ formula:
Limit = e^[ lim_(x→0) (1/x²)(cos x − 1) ]
Recall lim_(x→0) (1 − cos x)/x² = 1/2 ⇒ lim_(x→0) (cos x − 1)/x² = **−1/2**!
Therefore, Limit = **e^(−1/2) = 1 / √e**!

Jaanch: Test x = 0.01: (cos 0.01)^(10000) ≈ (0.99995)^10000 ≈ 0.60653 = e^(−0.5) ✅

---

### Problem 5: Differentiability of a Product with |x|
For what value of **a** is **f(x) = (x² − 3x + a) |x − 2|** differentiable at **x = 2**?

**Solution:**
Here g(x) = |x − 2| is continuous but non-differentiable at x = 2, while h(x) = x² − 3x + a is smooth everywhere.
By the **Product Smoothing Theorem**, h(x)|x − 2| is differentiable at x = 2 **IF AND ONLY IF h(2) = 0**:
2² − 3(2) + a = 0 ⇒ 4 − 6 + a = 0 ⇒ **a = 2**!

Jaanch: At a = 2, f(x) = (x − 1)(x − 2)|x − 2| → LHD = RHD = 0 at x = 2 ✅

---

## Advanced Practice Questions

1. Let **f(x) = x⁵ + 3x + 2**. Find **(f⁻¹)'(6)**.
2. Evaluate using L'Hôpital's rule: **lim_(x→0) (eˣ − 1 − x) / x²**.
3. Evaluate using the 1^∞ formula: **lim_(x→∞) ( (x + 3) / (x − 1) )^x**.
4. Find all points of non-differentiability of **f(x) = |x − 1| + |x − 3| + |x − 5|** on R.
5. Check whether **f(x) = (x − 2) |x² − 4|** is differentiable at: (a) x = 2, (b) x = −2.
6. Evaluate: **lim_(x→0) (tan x − sin x) / x³**.
7. If **f(x + y) = f(x) · f(y)** for all real x, y with **f(5) = 2** and **f'(0) = 3**, find **f'(5)**!
8. Classify the discontinuity at x = 0 of: (a) f(x) = (sin x)/x, (b) g(x) = |x|/x, (c) h(x) = 1/x².
9. If **f(x) = x³ − 3x² + 5x + 1**, show that **f(x) = 0** has **at most ONE** real root (Hint: use Rolle's theorem by contradiction!).
10. Evaluate: **lim_(x→0) (1 + 2x)^(3/x)**.

---

### Solutions

1. Find x₀ with x₀⁵ + 3x₀ + 2 = 6 ⇒ x₀⁵ + 3x₀ − 4 = 0 ⇒ **x₀ = 1** (unique since f'(x) = 5x⁴ + 3 > 0!).
   f'(1) = 5(1) + 3 = 8 ⇒ **(f⁻¹)'(6) = 1/8**.
   Jaanch: 1⁵ + 3(1) + 2 = 6; f'(1) = 8 ✅
2. 0/0 form → L'Hôpital: lim_(x→0) (eˣ − 1)/(2x) [0/0] → L'Hôpital: lim_(x→0) eˣ / 2 = **1/2**.
   Jaanch: eˣ = 1 + x + x²/2 + ... ⇒ (eˣ − 1 − x)/x² → 1/2 ✅
3. 1^∞ form: e^[ lim_(x→∞) x · ((x+3)/(x−1) − 1) ] = e^[ lim_(x→∞) 4x/(x−1) ] = **e⁴**!
   Jaanch: ((x+3)/(x−1)) = 1 + 4/(x−1) ⇒ (1 + 4/x)^x → e⁴ ✅
4. Distinct simple roots at **x = 1, 3, and 5** → **3 points of non-differentiability**.
5. Factor: f(x) = (x − 2) |x − 2| |x + 2|.
   - (a) At **x = 2:** (x − 2)|x − 2| is smoothed to LHD = RHD = 0 → **Differentiable at x = 2**!
   - (b) At **x = −2:** Factor (x − 2)|x − 2| = (−4)(4) = −16 ≠ 0 multiplying |x + 2| → **NOT differentiable at x = −2**!
6. 0/0 → L'Hôpital: lim_(x→0) (sec²x − cos x)/(3x²) → rewrite tan x − sin x = tan x (1 − cos x) = (sin x/cos x)(2 sin²(x/2)) ⇒ limit = (1/1) × 2(1/4) = **1/2**!
   Jaanch: tan x = x + x³/3, sin x = x − x³/6 ⇒ (tan x − sin x)/x³ → 1/3 + 1/6 = 1/2 ✅
7. From first principles: f'(x) = lim_(h→0) [f(x+h) − f(x)]/h = lim_(h→0) f(x)[f(h) − 1]/h = f(x) · f'(0) (since f(0) = 1!).
   Therefore **f'(5) = f(5) · f'(0) = 2 × 3 = 6**!
   Jaanch: f(x) = e^(3x) gives f'(x) = 3 f(x) ⇒ f'(5) = 3(2) = 6 ✅
8. (a) **Removable** (limit = 1); (b) **Jump** (LHL = −1, RHL = +1); (c) **Infinite** (limit = +∞).
9. Suppose f(x) = 0 had two real roots a < b. Since f is a polynomial, by Rolle's theorem there must exist c ∈ (a, b) with f'(c) = 0.
   Compute **f'(x) = 3x² − 6x + 5 = 3(x − 1)² + 2 ≥ 2 > 0** for ALL real x!
   Contradiction! Hence f(x) = 0 has **at most ONE** real root (in fact, exactly one since cubic!).
10. 1^∞ form: e^[ lim_(x→0) (3/x)(2x) ] = **e⁶**!
    Jaanch: 3 × 2 = 6 ⇒ e⁶ ✅

---

Wapas core chapter wrap-up par jaane ke liye dekho: [Mixed Problems & Chapter Wrap-up](continuity-and-differentiability-part5.md).
