> **Class:** 12 | **Subject:** Mathematics | **Chapter 5:** Continuity and Differentiability (Part 3)

# Logarithmic Differentiation and Parametric Differentiation

> **Pichle topic mein:** Humne [Differentiability, Chain Rule, Implicit, ITF, Exponential and Logarithmic Derivatives](continuity-and-differentiability-part2.md) padha. Ab hum do special cases solve karenge jahan normal rules atak jate hain: (1) jab variable ki power mein bhi variable ho (**y = xˣ** → **Logarithmic Differentiation**), aur (2) jab x aur y dono kisi teesre parameter t ya θ se jude hon (**Parametric Differentiation**)!

---

Charan ek model-rocket launch ka telemetry graph dekh raha tha: rocket ki horizontal position **x(t)** aur height **y(t)** dono alag-alag time **t** ke functions the! Charan ko rocket ka slope **dy/dx** nikalna tha, bina t ko eliminate kiye! Simple chain rule ne magic kar diya: **dy/dx = (dy/dt) / (dx/dt)**!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Logarithmic Differentiation** | Dono taraf natural log (ln) lekar products, quotients aur variable powers **u(x)^v(x)** ko simple sums mein badal kar differentiate karna |
| **Parametric Form** | Jab x = f(t) aur y = g(t) dono ek teesre variable **t (parameter)** ke functions hon |
| **Derivative of One Function w.r.t. Another** | du / dv = (du/dx) / (dv/dx) |

---

## 1. Logarithmic Differentiation (When & How to Use)

Use logarithmic differentiation whenever you see:
1. **Variable raised to variable:** **y = [u(x)]^(v(x))** (jaise xˣ, (sin x)^(cos x), (ln x)^x).
   - Take ln: **ln y = v(x) · ln[u(x)]**
   - Differentiate w.r.t. x: **(1/y)(dy/dx) = v(x) · [u'(x)/u(x)] + v'(x) · ln[u(x)]**
   - Multiply by y: **dy/dx = y { v·u'/u + v'·ln u }**!
2. **Heavy products / quotients / roots:** Jaise y = √[ (x−1)(x−2) / ((x−3)(x−4)(x−5)) ] → ln lekar sab simple + aur − ban jata hai!

### THE BIGGEST EXAM TRAP: Sums of Variable Powers!
For **y = x^(sin x) + (sin x)^(cos x)**:
- **NEVER write ln y = ln(x^(sin x)) + ln((sin x)^(cos x))**! (Because **ln(u + v) ≠ ln u + ln v**!)
- **CORRECT method:** Let **y = u + v**, so **dy/dx = du/dx + dv/dx**! Take ln **SEPARATELY** on u and on v, find du/dx and dv/dx individually, and add them at the end!

---

## 2. Parametric Differentiation

If **x = f(t)** and **y = g(t)** (with dx/dt ≠ 0):
**dy/dx = (dy/dt) / (dx/dt) = g'(t) / f'(t)**

### Derivative of u(x) with respect to v(x):
**du / dv = (du/dx) / (dv/dx)**!
*(Example: Derivative of sin x w.r.t. cos x = (cos x)/(−sin x) = −cot x!)*

---

## Solved Examples

### Example 1: Differentiating y = xˣ (Classic Building Block!)
Find **dy/dx** for **y = xˣ** (x > 0).

**Solution:**
Take ln on both sides: ln y = x ln x.
Differentiate w.r.t. x (product rule on RHS):
(1/y)(dy/dx) = x(1/x) + (1)(ln x) = 1 + ln x
Multiply by y = xˣ:
**dy/dx = xˣ (1 + ln x)**!

Jaanch: At x = 1: y = 1, dy/dx = 1(1 + 0) = 1 ✅

---

### Example 2: Sum of Two Variable Powers (Split Method!)
Find **dy/dx** for **y = x^(sin x) + (sin x)^x** (for x ∈ (0, π)).

**Solution:**
Let **u = x^(sin x)** and **v = (sin x)^x**, so **y = u + v ⇒ dy/dx = du/dx + dv/dx**.
1. **For u = x^(sin x):**
   ln u = sin x · ln x
   (1/u)(du/dx) = (sin x)/x + cos x · ln x
   **du/dx = x^(sin x) [ (sin x)/x + cos x · ln x ]**
2. **For v = (sin x)^x:**
   ln v = x · ln(sin x)
   (1/v)(dv/dx) = x · (cos x / sin x) + 1 · ln(sin x) = x cot x + ln(sin x)
   **dv/dx = (sin x)^x [ x cot x + ln(sin x) ]**
3. **Add both:**
   **dy/dx = x^(sin x) [ (sin x)/x + cos x · ln x ] + (sin x)^x [ x cot x + ln(sin x) ]**!

Jaanch: At x = π/2: sin(π/2) = 1, cos(π/2) = 0, cot(π/2) = 0, ln(1) = 0 ⇒ du/dx = (π/2)(2/π) = 1, dv/dx = 0 ⇒ dy/dx = 1 ✅

---

### Example 3: Parametric Differentiation of a Cycloid
Find **dy/dx** if **x = a(θ − sin θ)** and **y = a(1 − cos θ)** (a ≠ 0).

**Solution:**
- dx/dθ = a(1 − cos θ) = 2a sin²(θ/2)
- dy/dθ = a(sin θ) = 2a sin(θ/2) cos(θ/2)
Divide:
dy/dx = (dy/dθ) / (dx/dθ) = [2a sin(θ/2) cos(θ/2)] / [2a sin²(θ/2)] = **cot(θ/2)**!

Jaanch: At θ = π/2: dx/dθ = a, dy/dθ = a ⇒ dy/dx = 1 = cot(π/4) ✅

---

### Example 4: Differentiating One Function w.r.t. Another
Differentiate **sin⁻¹(2x / (1 + x²))** with respect to **tan⁻¹x** (for |x| < 1).

**Solution:**
Let u = sin⁻¹(2x / (1 + x²)) and v = tan⁻¹x.
For |x| < 1, recall **u = 2 tan⁻¹x = 2v**!
Therefore, **du/dv = 2** immediately!
*(Direct check: du/dx = 2/(1 + x²), dv/dx = 1/(1 + x²) ⇒ du/dv = 2!)*

Jaanch: (2/(1+x²)) / (1/(1+x²)) = 2 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **y = u + v par seedha ln(y) = ln(u) + ln(v) likh dena:**
   - *Galat:* y = xˣ + 2^(sin x) ⇒ ln y = x ln x + sin x · ln 2.
   - *Sahi:* **ln(u + v) ≠ ln u + ln v!** Hamesha u aur v ko **alag-alag** differentiate karke jodo!

2. **xˣ ka derivative x·xˣ⁻¹ likh dena:**
   - *Galat:* d/dx(xˣ) = x · xˣ⁻¹ = xˣ.
   - *Sahi:* Base aur exponent dono variable hain → logarithmic differentiation se **xˣ (1 + ln x)**!

3. **Parametric mein (dx/dt) / (dy/dt) ulta divide kar dena:**
   - *Galat:* dy/dx = (dx/dt) / (dy/dt).
   - *Sahi:* Hamesha **dy upar, dx neeche**: **dy/dx = (dy/dt) / (dx/dt)**!

---

## Quick Recap

- **y = [u(x)]^(v(x)):** Take ln → differentiate → multiply by y!
- **y = u + v:** NEVER take ln directly! Split into **dy/dx = du/dx + dv/dx**.
- **Parametric:** dy/dx = (dy/dt) / (dx/dt).
- **Relative derivative:** du/dv = (du/dx) / (dv/dx).

---

## Practice Questions

1. Differentiate w.r.t. x: **y = cos x · cos 2x · cos 3x**.
2. Differentiate w.r.t. x: **y = √[ (x − 1)(x − 2) / ((x − 3)(x − 4)(x − 5)) ]**.
3. Differentiate w.r.t. x: **y = (ln x)^(cos x)**.
4. Differentiate w.r.t. x: **y = xˣ − 2^(sin x)**.
5. Find dy/dx if **xʸ = yˣ** (x, y > 0).
6. Find dy/dx if **x = a cos³θ** and **y = a sin³θ**.
7. Find dy/dx if **x = a(cos t + ln tan(t/2))** and **y = a sin t**.
8. If **x = √(a^(sin⁻¹t))** and **y = √(a^(cos⁻¹t))**, show that **dy/dx = −y/x**!
9. Differentiate **x²** with respect to **x³** (x ≠ 0).
10. Differentiate **sin(x²)** with respect to **x²**.

---

### Answers

1. ln y = ln(cos x) + ln(cos 2x) + ln(cos 3x).
   (1/y)(dy/dx) = −tan x − 2 tan 2x − 3 tan 3x ⇒ **dy/dx = −cos x cos 2x cos 3x (tan x + 2 tan 2x + 3 tan 3x)**.
2. ln y = (1/2)[ ln(x−1) + ln(x−2) − ln(x−3) − ln(x−4) − ln(x−5) ].
   **dy/dx = (y/2)[ 1/(x−1) + 1/(x−2) − 1/(x−3) − 1/(x−4) − 1/(x−5) ]**.
3. ln y = cos x · ln(ln x) ⇒ **dy/dx = (ln x)^(cos x) [ (cos x)/(x ln x) − sin x · ln(ln x) ]**.
4. Split u = xˣ ⇒ du/dx = xˣ(1 + ln x); v = 2^(sin x) ⇒ dv/dx = 2^(sin x) · ln 2 · cos x.
   **dy/dx = xˣ(1 + ln x) − 2^(sin x) cos x · ln 2**.
   Jaanch: At x = 1: 1(1+0) − 2^(sin 1) cos 1 · ln 2 (exact split!) ✅
5. Take ln: y ln x = x ln y. Differentiate w.r.t. x:
   y/x + (ln x)(dy/dx) = ln y + (x/y)(dy/dx)
   (ln x − x/y) dy/dx = ln y − y/x ⇒ **dy/dx = [y(x ln y − y)] / [x(y ln x − x)]**.
6. dx/dθ = −3a cos²θ sin θ; dy/dθ = 3a sin²θ cos θ.
   dy/dx = (3a sin²θ cos θ) / (−3a cos²θ sin θ) = **−tan θ**.
   Jaanch: Astroid x^(2/3) + y^(2/3) = a^(2/3) ⇒ dy/dx = −(y/x)^(1/3) = −tan θ ✅
7. dx/dt = a[ −sin t + (1/tan(t/2)) · sec²(t/2) · (1/2) ] = a[ −sin t + 1/sin t ] = a cos²t / sin t.
   dy/dt = a cos t.
   dy/dx = (a cos t) / (a cos²t / sin t) = **tan t**!
   Jaanch: 2 sin(t/2) cos(t/2) = sin t; (1 − sin²t)/sin t = cos²t / sin t ✅
8. Multiply x and y: **x·y = √(a^(sin⁻¹t + cos⁻¹t)) = √(a^(π/2)) = constant**!
   Differentiate x·y = constant directly w.r.t. x: x(dy/dx) + y(1) = 0 ⇒ **dy/dx = −y/x**! (2-line genius proof!)
9. Let u = x², v = x³ ⇒ du/dx = 2x, dv/dx = 3x² ⇒ du/dv = 2x / (3x²) = **2 / (3x)**.
   Jaanch: u = v^(2/3) ⇒ du/dv = (2/3)v^(−1/3) = 2/(3x) ✅
10. Let u = sin(x²), v = x² ⇒ u = sin v ⇒ **du/dv = cos v = cos(x²)**.

---

Ab tum logarithmic aur parametric differentiation ke har tricky sawal ko aasani se solve kar sakte ho!

**Agle topic mein:** Hum [Second-Order Derivatives, Rolle's Theorem and Mean Value Theorem](continuity-and-differentiability-part4.md) padhenge — jahan **d²y/dx²** aur calculus ke do famous existence theorems seekhenge!
