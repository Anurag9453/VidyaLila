> **Class:** 12 | **Subject:** Mathematics | **Chapter 5:** Continuity and Differentiability (Part 2)

# Differentiability, Chain Rule, Implicit, ITF, Exponential and Logarithmic Derivatives

> **Pichle topic mein:** Humne [Continuity and Its Algebra](continuity-and-differentiability.md) padha. Ab hum dekhenge ki **Continuity ≠ Differentiability** (sharp corners par tangent nahi banta!), aur Class 12 ke sabhi core differentiation rules — **Chain Rule, Implicit, Inverse Trig (ITF), Exponential, aur Logarithmic Derivatives** — master karenge!

---

Bhumi apne hill-station ski slope par ek smooth parabolic curve y = x² aur ek sharp V-shaped ramp y = |x| ko compare kar rahi thi: dono curves bina toote (continuous!) hain, par y = |x| ke bilkul neeche x = 0 par **ek teekha kona (sharp corner)** hai — left se slope −1 aata hai aur right se achanak +1 ho jata hai! Wahan koi unique tangent line nahi ban sakti — isliye **y = |x| x = 0 par continuous hai, par DIFFERENTIABLE NAHI hai!**

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Differentiable at x = c** | Jab **LHD = RHD** (finite): lim_(h→0⁻) [f(c+h)−f(c)]/h = lim_(h→0⁺) [f(c+h)−f(c)]/h |
| **Chain Rule** | Composite function ka derivative: **d/dx [f(g(x))] = f'(g(x)) · g'(x)** (bahar se andar layer-by-layer!) |
| **Implicit Function** | Woh equation jismein y ko x ke roop mein alag nahi kiya gaya ho (jaise x² + xy + y² = 100) — dono taraf x ke respect mein differentiate karo aur dy/dx collect karo! |

---

## 1. Differentiability vs Continuity (Fundamental Theorem)

- **Theorem:** **Every differentiable function is CONTINUOUS!**
- **Converse is FALSE!** A continuous function need NOT be differentiable (e.g., **f(x) = |x| at x = 0**, or |x − 1| at x = 1):
  - LHD of |x| at 0 = lim_(h→0⁻) |h|/h = lim_(h→0⁻) (−h)/h = **−1**.
  - RHD of |x| at 0 = lim_(h→0⁺) |h|/h = lim_(h→0⁺) h/h = **+1**.
  - Since LHD (−1) ≠ RHD (+1), **|x| is NOT differentiable at x = 0**!
- **Contrapositive (Useful Shortcut!):** If f is **discontinuous** at x = c, then f is **AUTOMATICALLY NOT differentiable** at x = c! (e.g., [x] is discontinuous at all integers ⇒ not differentiable at all integers!)

---

## 2. Master Derivative Table (ITF, Exponential & Logarithmic)

| Function y | Derivative dy/dx | Domain of Validity |
|---|---|---|
| **sin⁻¹ x** | **1 / √(1 − x²)** | x ∈ (−1, 1) |
| **cos⁻¹ x** | **−1 / √(1 − x²)** | x ∈ (−1, 1) |
| **tan⁻¹ x** | **1 / (1 + x²)** | x ∈ R |
| **cot⁻¹ x** | **−1 / (1 + x²)** | x ∈ R |
| **sec⁻¹ x** | **1 / [ |x| √(x² − 1) ]** | |x| > 1 |
| **cosec⁻¹ x** | **−1 / [ |x| √(x² − 1) ]** | |x| > 1 |
| **eˣ** | **eˣ** | x ∈ R |
| **aˣ** (a > 0) | **aˣ · ln a** | x ∈ R |
| **ln x** (logₑ x) | **1 / x** | x > 0 |
| **logₐ x** | **1 / (x · ln a)** | x > 0 |

*(Notice the symmetry: Every **"co-"** function — cos⁻¹, cot⁻¹, cosec⁻¹ — has a **MINUS (−)** sign!)*

---

## Solved Examples

### Example 1: Chain Rule on Nested Composition
Find dy/dx for **y = sec(tan(√x))**.

**Solution:**
Differentiate from outer layer to inner layer:
dy/dx = sec(tan √x) tan(tan √x) · d/dx [tan(√x)]
= sec(tan √x) tan(tan √x) · sec²(√x) · d/dx [√x]
= **sec(tan √x) tan(tan √x) sec²(√x) / (2√x)**.

Jaanch: 3 layers (sec → tan → √x) produce 3 multiplied derivative factors ✅

---

### Example 2: Implicit Differentiation
Find **dy/dx** if **x² + xy + y² = 100**.

**Solution:**
Differentiate both sides with respect to x (use product rule on xy!):
2x + [ x(dy/dx) + y(1) ] + 2y(dy/dx) = 0
Group all dy/dx terms on LHS and others on RHS:
(x + 2y) dy/dx = −(2x + y)
**dy/dx = −(2x + y) / (x + 2y)**!

Jaanch: Differentiating y² gives 2y(dy/dx) (chain rule!) and d/dx(100) = 0 ✅

---

### Example 3: Simplifying an ITF Using Substitution Before Differentiating!
Find **dy/dx** for **y = tan⁻¹[ (3x − x³) / (1 − 3x²) ]**, where −1/√3 < x < 1/√3.

**Solution:**
Do NOT apply ugly quotient rule! Put **x = tan θ** (θ ∈ (−π/6, π/6) so 3θ ∈ (−π/2, π/2)):
y = tan⁻¹[ (3 tan θ − tan³θ) / (1 − 3 tan²θ) ] = tan⁻¹(tan 3θ) = **3θ = 3 tan⁻¹ x**!
Now differentiate in 1 second:
**dy/dx = 3 / (1 + x²)**!

Jaanch: At x = 0: dy/dx = 3/(1+0) = 3; direct check of (3x − x³)/(1 − 3x²) ≈ 3x near 0 gives slope 3 ✅

---

### Example 4: Differentiating Exponential & Logarithmic Combinations
Find **dy/dx** for **y = log₇(ln x)** (x > 1).

**Solution:**
First convert base-7 log to natural log: y = **ln(ln x) / ln 7**.
Differentiate using chain rule:
dy/dx = (1 / ln 7) × (1 / ln x) × (1 / x) = **1 / (x · ln x · ln 7)**!

Jaanch: Base-change formula logₐ(u) = ln(u)/ln(a) cleanly removes base-7 confusion ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Implicit differentiation mein y² ka derivative sirf 2y likh dena:**
   - *Galat:* d/dx(y²) = 2y.
   - *Sahi:* y x ka function hai → chain rule se **d/dx(y²) = 2y · (dy/dx)**!

2. **aˣ ka derivative x·aˣ⁻¹ likh dena:**
   - *Galat:* d/dx(2ˣ) = x · 2ˣ⁻¹.
   - *Sahi:* Variable power mein hai! Power rule nahi, exponential rule lagta hai: **d/dx(2ˣ) = 2ˣ · ln 2**!

3. **d/dx(log₁₀ x) = 1/x likh dena:**
   - *Galat:* Kisi bhi base ke log ka derivative 1/x hota hai.
   - *Sahi:* Sirf **natural log (ln x = logₑ x)** ka derivative 1/x hai! **d/dx(log₁₀ x) = 1 / (x ln 10)**!

---

## Quick Recap

- **Differentiable ⇒ Continuous** (converse false: |x| at x = 0!).
- **Chain rule:** Peel from outside to inside.
- **Implicit:** Differentiate both sides w.r.t. x (don't forget dy/dx on every y-term!) and solve for dy/dx.
- **ITF derivatives:** Always simplify using trig substitutions (x = tan θ, sin θ, cos θ) FIRST if possible!
- **Exp/Log:** d/dx(eˣ) = eˣ, d/dx(aˣ) = aˣ ln a, d/dx(ln x) = 1/x.

---

## Practice Questions

1. Prove that **f(x) = |x − 2|** is continuous at x = 2, but NOT differentiable at x = 2.
2. Differentiate w.r.t. x: (a) sin(x² + 5), (b) cos(sin x), (c) 2√(cot(x²)).
3. Find dy/dx for: (a) 2x + 3y = sin y, (b) sin²y + cos(xy) = π.
4. Find dy/dx for: (a) y = sin⁻¹(2x / (1 + x²)) (−1 < x < 1), (b) y = cos⁻¹((1 − x²)/(1 + x²)) (0 < x < 1).
5. Find dy/dx for **y = sin⁻¹(2x √(1 − x²))** for −1/√2 < x < 1/√2.
6. Differentiate w.r.t. x: (a) e^(sin⁻¹x), (b) e^(x³), (c) ln(cos(eˣ)).
7. Differentiate w.r.t. x: **y = cos⁻¹(sin x)** for x ∈ (0, π/2).
8. Find dy/dx if **x √(1 + y) + y √(1 + x) = 0** (for −1 < x < 1, x ≠ y) and prove **dy/dx = −1 / (1 + x)²**.
9. Differentiate **y = tan⁻¹[ √(1 + x²) − x ]** w.r.t. x.
10. Differentiate **y = 5^(x²) + log₅(x)** w.r.t. x.

---

### Answers

1. At x = 2: LHL = RHL = f(2) = 0 (**continuous**).
   LHD = lim_(h→0⁻) |h|/h = −1; RHD = lim_(h→0⁺) |h|/h = +1. Since −1 ≠ 1, **not differentiable at x = 2**.
2. (a) **2x cos(x² + 5)**
   (b) **−sin(sin x) · cos x**
   (c) 2 × [1 / (2√(cot x²))] × (−cosec²(x²)) × (2x) = **−2x cosec²(x²) / √(cot x²)**.
3. (a) 2 + 3(dy/dx) = cos y (dy/dx) ⇒ **dy/dx = 2 / (cos y − 3)**.
   (b) 2 sin y cos y (dy/dx) − sin(xy)[ x(dy/dx) + y ] = 0 ⇒ **dy/dx = [y sin(xy)] / [sin 2y − x sin(xy)]**.
4. (a) Put x = tan θ ⇒ y = 2 tan⁻¹x ⇒ **dy/dx = 2 / (1 + x²)**.
   (b) Put x = tan θ ⇒ y = 2 tan⁻¹x ⇒ **dy/dx = 2 / (1 + x²)**.
   Jaanch: Both reduce to 2 tan⁻¹x on their given intervals ✅
5. Put x = sin θ (θ ∈ (−π/4, π/4)): y = sin⁻¹(2 sin θ cos θ) = sin⁻¹(sin 2θ) = 2θ = 2 sin⁻¹x ⇒ **dy/dx = 2 / √(1 − x²)**.
6. (a) **e^(sin⁻¹x) / √(1 − x²)**
   (b) **3x² e^(x³)**
   (c) (1/cos eˣ) · (−sin eˣ) · eˣ = **−eˣ tan(eˣ)**.
7. cos⁻¹(sin x) = cos⁻¹(cos(π/2 − x)) = π/2 − x ⇒ **dy/dx = −1**!
8. x√(1 + y) = −y√(1 + x). Square both sides: x²(1 + y) = y²(1 + x) ⇒ (x² − y²) + xy(x − y) = 0 ⇒ (x − y)(x + y + xy) = 0.
   Since x ≠ y, x + y + xy = 0 ⇒ y(1 + x) = −x ⇒ **y = −x / (1 + x)**!
   Differentiate by quotient rule: dy/dx = −[1(1 + x) − x(1)] / (1 + x)² = **−1 / (1 + x)²**!
   Jaanch: Algebraic simplification BEFORE differentiating turned a hard implicit equation into a 2-line proof ✅
9. Put x = cot θ (θ ∈ (0, π)): √(1 + cot²θ) − cot θ = cosec θ − cot θ = tan(θ/2).
   So y = θ/2 = (1/2) cot⁻¹x ⇒ **dy/dx = −1 / [2(1 + x²)]**!
   Jaanch: At x = 0: dy/dx = −1/2; near x = 0, √(1+x²) − x ≈ 1 − x, tan⁻¹(1−x) has slope −1/(1+1) = −1/2 ✅
10. **dy/dx = 2x · 5^(x²) · ln 5 + 1 / (x · ln 5)**.

---

Ab tum chain rule, implicit, ITF aur exp/log differentiation ke sabhi core techniques master kar chuke ho!

**Agle topic mein:** Hum [Logarithmic Differentiation and Parametric Differentiation](continuity-and-differentiability-part3.md) padhenge — jahan **y = xˣ** aur **x = a(θ − sin θ), y = a(1 − cos θ)** jaise classic problems solve honge!
