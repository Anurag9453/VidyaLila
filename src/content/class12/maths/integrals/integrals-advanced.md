> **Class:** 12 | **Subject:** Mathematics | **Chapter 7:** Integrals (Gehrai Mein — Advanced Level)

# Integrals — Gehrai Mein (Advanced Level)

> **Core chapter se bridge:** Core lessons ([Part 1: Standard Integrals](integrals.md) se [Part 5: Mixed Problems](integrals-part5.md) tak) mein humne substitution, partial fractions, by parts, 9 special forms aur King's property padhe. Ab competitive-exam depth mein hum **Newton–Leibniz Rule, Walli's Formula, Limit of a Riemann Sum (lim (1/n) Σ f(r/n)), aur Algebraic Twin Integrals** cover karenge.

---

Kirti ek advanced calculus seminar mein ek weird-looking derivative dekh rahi thi: **d/dx [ ∫_(x²)^(x³) sin(t²) dt ]**! Sin(t²) ka elementary integral exist hi nahi karta — par **Newton–Leibniz Rule** ne bina integrate kiye 1 line mein exact answer de diya: **3x² sin(x⁶) − 2x sin(x⁴)**!

---

## 1. Newton–Leibniz Rule (Differentiating a Definite Integral!)

If **F(x) = ∫_(g(x))^(h(x)) f(t) dt**, where f is continuous and g, h are differentiable, then:
**F'(x) = f(h(x)) · h'(x) − f(g(x)) · g'(x)**!
*(Plug upper limit into f × derivative of upper limit MINUS plug lower limit into f × derivative of lower limit!)*

---

## 2. Walli's Formula (Instant Evaluation of ∫₀^(π/2) sinᵐx cosⁿx dx!)

For non-negative integers m and n:
**∫₀^(π/2) sinᵐx cosⁿx dx = [ (m−1)(m−3)... × (n−1)(n−3)... ] / [ (m+n)(m+n−2)... ] × K**
where:
- **K = π/2** if **BOTH m and n are EVEN** (including 0!),
- **K = 1** otherwise (if at least one of m or n is ODD)!

*(Single-power case n = 0: **∫₀^(π/2) sinᵐx dx = ∫₀^(π/2) cosᵐx dx = [(m−1)(m−3)... / (m(m−2)...)] × K**, with K = π/2 if m is even, K = 1 if m is odd!)*

---

## 3. Definite Integral as Limit of a Riemann Sum

Whenever you see a limit of a sum of the form:
**lim_(n→∞) (1/n) Σ_(r=a·n to b·n) f(r / n) = ∫ₐᵇ f(x) dx**!
- Replace **r/n → x**, **1/n → dx**, **Σ → ∫**!
- Lower limit = **lim_(n→∞) (r_min / n)**; Upper limit = **lim_(n→∞) (r_max / n)**!

---

## 4. Algebraic Twin Integrals: ∫ (x² ± 1) / (x⁴ + kx² + 1) dx

Divide numerator and denominator by **x²**:
- If numerator is **1 + 1/x²** → write denominator in terms of **(x − 1/x)² + (k + 2)** and put **t = x − 1/x**!
- If numerator is **1 − 1/x²** → write denominator in terms of **(x + 1/x)² + (k − 2)** and put **t = x + 1/x**!

---

## Deep Solved Problems

### Problem 1: Newton–Leibniz Rule + L'Hôpital's Rule
Evaluate: **lim_(x→0) [ ∫₀^(x²) cos(t²) dt ] / x²**.

**Solution:**
At x = 0, numerator = ∫₀⁰ = 0 and denominator = 0 (**0/0 form!**).
Apply L'Hôpital's rule using **Newton–Leibniz** on the numerator:
Numerator derivative = cos((x²)²) · (2x) − 0 = **2x cos(x⁴)**.
Denominator derivative = **2x**.
Limit = lim_(x→0) [ 2x cos(x⁴) ] / (2x) = lim_(x→0) cos(x⁴) = **1**!

Jaanch: For small t, cos(t²) ≈ 1 ⇒ ∫₀^(x²) 1 dt = x² ⇒ x²/x² = 1 ✅

---

### Problem 2: Walli's Formula in 5 Seconds
Evaluate: (a) **∫₀^(π/2) sin⁶ x dx**,   (b) **∫₀^(π/2) sin⁴ x cos⁵ x dx**.

**Solution:**
(a) m = 6 (even!) ⇒ K = π/2:
    I = [ (5 × 3 × 1) / (6 × 4 × 2) ] × (π/2) = (15 / 48) × (π/2) = **5π / 32**!
(b) m = 4 (even), n = 5 (odd) ⇒ at least one odd ⇒ **K = 1**, m + n = 9:
    I = [ (3 × 1) × (4 × 2) ] / [ 9 × 7 × 5 × 3 × 1 ] × 1 = 24 / 945 = **8 / 315**!

Jaanch: (a) 15/96 = 5/32 → 5π/32; (b) 24/945 simplifies by 3 to 8/315 ✅

---

### Problem 3: Evaluating a Limit of a Sum as a Definite Integral
Evaluate: **L = lim_(n→∞) [ 1/(n+1) + 1/(n+2) + ... + 1/(2n) ]**.

**Solution:**
Rewrite as a sum from r = 1 to n:
L = lim_(n→∞) Σ_(r=1 to n) 1 / (n + r) = lim_(n→∞) (1/n) Σ_(r=1 to n) 1 / (1 + r/n).
Replace r/n → x, 1/n → dx, limits 1/n → 0 and n/n → 1:
L = ∫₀¹ dx / (1 + x) = [ ln(1 + x) ]₀¹ = ln 2 − ln 1 = **ln 2**!

Jaanch: For n = 2: 1/3 + 1/4 = 0.583; for n = 10: ~0.669; converges to ln 2 ≈ 0.6931 ✅

---

### Problem 4: Algebraic Twin Integral
Evaluate: **∫ (x² − 1) / (x⁴ + x² + 1) dx**.

**Solution:**
Divide Num & Den by x²:
∫ (1 − 1/x²) / (x² + 1 + 1/x²) dx.
Since numerator is **1 − 1/x² = d/dx(x + 1/x)**, rewrite denominator using **(x + 1/x)² = x² + 2 + 1/x²**:
x² + 1 + 1/x² = **(x + 1/x)² − 1**.
Put **t = x + 1/x** ⇒ dt = (1 − 1/x²) dx:
∫ dt / (t² − 1) = (1/2) ln |(t − 1)/(t + 1)| + C = **(1/2) ln | (x² − x + 1) / (x² + x + 1) | + C**!

Jaanch: Check (t − 1)/(t + 1) = (x + 1/x − 1)/(x + 1/x + 1) = (x² − x + 1)/(x² + x + 1) ✅

---

### Problem 5: Finding Extrema of an Integral-Defined Function
Find the local minimum point of **F(x) = ∫₀ˣ (t² − 3t + 2) e^(−t²) dt**.

**Solution:**
By Newton–Leibniz rule:
**F'(x) = (x² − 3x + 2) e^(−x²) = (x − 1)(x − 2) e^(−x²)**.
Since e^(−x²) > 0 always, F'(x) = 0 at **x = 1** and **x = 2**.
Sign of F'(x): + on (−∞, 1), − on (1, 2), + on (2, ∞).
- At x = 1: + to − ⇒ local max.
- At **x = 2**: − to + ⇒ **local minimum at x = 2**!

Jaanch: No need to integrate e^(−t²) at all — Leibniz gives F'(x) directly ✅

---

## Advanced Practice Questions

1. Find **F'(x)** if **F(x) = ∫_(sin x)^(x²) √(1 + t³) dt**.
2. Evaluate using L'Hôpital + Leibniz: **lim_(x→0) [ ∫₀ˣ (t² / (1 + t⁴)) dt ] / x³**.
3. Evaluate using Walli's formula: (a) **∫₀^(π/2) cos⁵ x dx**, (b) **∫₀^(π/2) sin⁴ x cos² x dx**.
4. Evaluate as a definite integral: **lim_(n→∞) Σ_(r=1 to n) [ n / (n² + r²) ]**.
5. Evaluate: **lim_(n→∞) [ (1³ + 2³ + ... + n³) / n⁴ ]** using Riemann sum integral!
6. Evaluate: **∫ (x² + 1) / (x⁴ + 1) dx**.
7. Evaluate: **∫₀^π x sin³ x dx** (Combine King's property + Walli's formula!).
8. If **∫₀ˣ f(t) dt = x² + ∫ₓ¹ t² f(t) dt**, find **f(1/2)**!
9. Evaluate: **∫₀^(π/2) sin⁸ x dx** using Walli's formula.
10. Evaluate: **lim_(n→∞) (1/n) [ e^(1/n) + e^(2/n) + ... + e^(n/n) ]**.

---

### Solutions

1. **F'(x) = 2x √(1 + x⁶) − cos x √(1 + sin³x)**.
2. 0/0 form → Leibniz + L'Hôpital: lim_(x→0) [x²/(1 + x⁴)] / (3x²) = lim_(x→0) 1 / [3(1 + x⁴)] = **1/3**.
   Jaanch: Near 0, ∫₀ˣ t² dt = x³/3 ⇒ (x³/3)/x³ = 1/3 ✅
3. (a) m = 5 (odd, K = 1): (4 × 2)/(5 × 3 × 1) = **8/15**.
   (b) m = 4, n = 2 (both even, K = π/2, m+n = 6): [(3 × 1)(1)] / [6 × 4 × 2] × (π/2) = (3/48)(π/2) = **π / 32**.
   Jaanch: 3/96 = 1/32 → π/32 ✅
4. Rewrite as (1/n) Σ_(r=1 to n) 1 / [1 + (r/n)²] = ∫₀¹ dx / (1 + x²) = [tan⁻¹x]₀¹ = **π/4**!
5. Rewrite as (1/n) Σ_(r=1 to n) (r/n)³ = ∫₀¹ x³ dx = [x⁴/4]₀¹ = **1/4**!
   Jaanch: [n(n+1)/2]² / n⁴ → 1/4 ✅
6. Divide by x², put t = x − 1/x: **(1/√2) tan⁻¹[ (x² − 1) / (x√2) ] + C**.
7. King's property (x → π − x): 2I = π ∫₀^π sin³x dx = 2π ∫₀^(π/2) sin³x dx ⇒ I = π ∫₀^(π/2) sin³x dx.
   By Walli's (m = 3, odd): ∫₀^(π/2) sin³x dx = 2/3 ⇒ **I = 2π/3**!
   Jaanch: 2π/3 ≈ 2.094 ✅
8. Differentiate both sides w.r.t. x using Leibniz rule:
   f(x) = 2x + [ 0 − x² f(x) ] ⇒ f(x)(1 + x²) = 2x ⇒ **f(x) = 2x / (1 + x²)**.
   At x = 1/2: f(1/2) = 1 / (1 + 1/4) = **4/5**!
   Jaanch: 2(1/2) / (5/4) = 4/5 ✅
9. m = 8 (even, K = π/2): [(7 × 5 × 3 × 1) / (8 × 6 × 4 × 2)] × (π/2) = (105 / 384)(π/2) = **35π / 256**!
   Jaanch: 105/384 simplifies by 3 to 35/128; × π/2 = 35π/256 ✅
10. ∫₀¹ eˣ dx = [eˣ]₀¹ = **e − 1**!

---

Wapas core chapter wrap-up par jaane ke liye dekho: [Mixed Problems & Chapter Wrap-up](integrals-part5.md).
