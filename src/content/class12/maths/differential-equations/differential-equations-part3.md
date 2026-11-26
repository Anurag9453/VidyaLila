> **Class:** 12 | **Subject:** Mathematics | **Chapter 9:** Differential Equations (Part 3)

# Solving First-Order DEs: Variable Separable, Homogeneous and Linear Equations

> **Pichle topic mein:** Humne [Formation of Differential Equations](differential-equations-part2.md) padha. Ab hum is chapter ka sabse zaroori part — **First-Order, First-Degree Differential Equations ko solve karne ke 3 Master Methods** (**Variable Separable**, **Homogeneous**, aur **Linear Integrating Factor**) — seekhenge!

---

Namita ek bank ke continuous compound-interest model ko dekh rahi thi: principal P ke badhne ka rate khud P ke proportional hota hai (**dP/dt = rP**)! Bas variables alag karo (**dP/P = r dt**) aur integrate karo: **P(t) = P₀ e^(rt)**! Lekin har DE mein x aur y itni aasani se alag nahi hote — isliye hum 3 clean methods seekhenge jo har first-order DE ko tod dete hain!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Variable Separable DE** | Woh DE jismein sabhi y-terms dy ke saath aur sabhi x-terms dx ke saath alag ho sakein: **f(y) dy = g(x) dx** |
| **Homogeneous DE** | Woh DE jahan dy/dx = F(x, y) mein F(λx, λy) = λ⁰ F(x, y) ho (har term ki total degree same!) → put **y = vx** (ya **x = vy**) |
| **Linear First-Order DE** | Standard form **dy/dx + P(x)·y = Q(x)** (ya **dx/dy + P(y)·x = Q(y)**) |
| **Integrating Factor (IF)** | Woh multiplier **IF = e^(∫ P dx)** jisse linear DE ka LHS exact derivative d/dx(y·IF) ban jata hai! |

---

## 1. Method 1: Variable Separable

Form: **dy/dx = g(x) · h(y)** ⇒ **dy / h(y) = g(x) dx**.
Integrate both sides: **∫ dy / h(y) = ∫ g(x) dx + C**!
*(Use given initial condition y(x₀) = y₀ to find C for the **particular solution**!)*

---

## 2. Method 2: Homogeneous Differential Equations

- **Recognition:** Every term in numerator and denominator has the **EXACT SAME total degree** in (x, y), OR equation contains **y/x** (like cos(y/x), e^(y/x)).
- **Substitution (for y/x form):** Put **y = v·x** ⇒ **dy/dx = v + x (dv/dx)**.
  Equation automatically becomes **Variable Separable** in v and x! Integrate, then substitute **v = y/x** back!
- **Alternate Substitution (for x/y form like e^(x/y)):** Put **x = v·y** ⇒ **dx/dy = v + y (dv/dy)**!

---

## 3. Method 3: Linear First-Order Differential Equations (100% Exam Favourite!)

### Type A (Linear in y): **dy/dx + P(x) · y = Q(x)**
1. Make sure coefficient of dy/dx is **+1**!
2. Compute **Integrating Factor: IF = e^(∫ P(x) dx)** (remember: **e^(k ln x) = xᵏ**!).
3. General solution: **y · (IF) = ∫ [ Q(x) · (IF) ] dx + C**!

### Type B (Linear in x — When Type A Fails!): **dx/dy + P(y) · x = Q(y)**
1. Compute **IF = e^(∫ P(y) dy)**.
2. General solution: **x · (IF) = ∫ [ Q(y) · (IF) ] dy + C**!

---

## Solved Examples

### Example 1: Variable Separable (Particular Solution)
Find the particular solution of **dy/dx = −4xy²** given that **y = 1 when x = 0**.

**Solution:**
Separate variables: **dy / y² = −4x dx**.
Integrate both sides:
∫ y⁻² dy = −4 ∫ x dx ⇒ **−1/y = −2x² + C** ⇒ **1/y = 2x² − C**.
Apply initial condition (x = 0, y = 1): 1/1 = 0 − C ⇒ **−C = 1**.
So 1/y = 2x² + 1 ⇒ **y = 1 / (2x² + 1)**!

Jaanch: Check y(0) = 1/(0+1) = 1; dy/dx = −4x/(2x²+1)² = −4xy² ✅

---

### Example 2: Homogeneous DE (y = vx Substitution)
Solve: **(x² + xy) dy = (x² + y²) dx**.

**Solution:**
Write dy/dx = (x² + y²) / (x² + xy) — every term has degree 2 (**Homogeneous!**).
Put **y = vx** ⇒ **dy/dx = v + x (dv/dx)**:
v + x (dv/dx) = (1 + v²) / (1 + v)
x (dv/dx) = (1 + v²)/(1 + v) − v = (1 + v² − v − v²) / (1 + v) = **(1 − v) / (1 + v)**.
Separate variables:
**[(1 + v) / (1 − v)] dv = dx / x**
Rewrite (1 + v)/(1 − v) = [2 − (1 − v)] / (1 − v) = **2/(1 − v) − 1**:
Integrate both sides:
−2 ln |1 − v| − v = ln |x| + C
Put v = y/x back:
−2 ln |1 − y/x| − y/x = ln |x| + C ⇒ **ln | (x − y)² / x | + y/x = C'** (or (x − y)² = K x e^(−y/x))!

Jaanch: Dividing (x²+y²)/(x²+xy) by x² gave (1+v²)/(1+v), cleanly separating v and x ✅

---

### Example 3: Linear DE in y (Integrating Factor)
Find the general solution of **x (dy/dx) + 2y = x²** (x > 0).

**Solution:**
1. Divide by x to make coefficient of dy/dx equal to 1:
   **dy/dx + (2/x) y = x**
   Here **P(x) = 2/x**, **Q(x) = x**.
2. Integrating Factor:
   **IF = e^(∫ (2/x) dx) = e^(2 ln x) = e^(ln x²) = x²**!
3. General solution:
   y · x² = ∫ (x · x²) dx + C = ∫ x³ dx + C = x⁴/4 + C
   Divide by x²: **y = x²/4 + C / x²**!

Jaanch: Check LHS: x(x/2 − 2C/x³) + 2(x²/4 + C/x²) = x²/2 − 2C/x² + x²/2 + 2C/x² = x² = RHS ✅

---

### Example 4: Linear DE in x (Type B!)
Solve: **(1 + y²) dx = (tan⁻¹ y − x) dy**.

**Solution:**
Notice x appears only to power 1, while y is inside tan⁻¹y → write as **linear in x**!
**dx/dy + [ 1 / (1 + y²) ] x = tan⁻¹ y / (1 + y²)**
Here P(y) = 1/(1 + y²), Q(y) = (tan⁻¹ y)/(1 + y²).
- **IF = e^(∫ dy/(1 + y²)) = e^(tan⁻¹ y)**.
- Solution: x · e^(tan⁻¹ y) = ∫ [ (tan⁻¹ y) · e^(tan⁻¹ y) / (1 + y²) ] dy + C.
  Put **t = tan⁻¹ y** ⇒ dt = dy/(1 + y²):
  ∫ t eᵗ dt = eᵗ(t − 1) + C (by parts!).
- So x · e^(tan⁻¹ y) = e^(tan⁻¹ y) (tan⁻¹ y − 1) + C
  ⇒ **x = tan⁻¹ y − 1 + C e^(−tan⁻¹ y)**!

Jaanch: Differentiate w.r.t. y: dx/dy = 1/(1+y²) − C e^(−tan⁻¹y)/(1+y²) = [1 − (x − tan⁻¹y + 1)]/(1+y²) = (tan⁻¹y − x)/(1+y²) ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Linear DE mein dy/dx ka coefficient 1 banaye bina P(x) utha lena:**
   - *Galat:* x(dy/dx) + 2y = x² mein P = 2 le lena (IF = e^(2x) — galat!).
   - *Sahi:* Pehle **x se divide** karo → dy/dx + (2/x)y = x → **P = 2/x, IF = x²**!

2. **e^(−ln x) ko −x likh dena:**
   - *Galat:* e^(−ln x) = −x.
   - *Sahi:* **e^(−ln x) = e^(ln(x⁻¹)) = 1/x**!

---

## Quick Recap

- **Variable Separable:** f(y) dy = g(x) dx → integrate both sides!
- **Homogeneous:** Same degree in every term → put **y = vx** (dy/dx = v + x dv/dx) or **x = vy**.
- **Linear in y:** dy/dx + Py = Q ⇒ **IF = e^(∫P dx)**, **y·IF = ∫ Q·IF dx + C**.
- **Linear in x:** dx/dy + Px = Q ⇒ **IF = e^(∫P dy)**, **x·IF = ∫ Q·IF dy + C**.

---

## Practice Questions

1. Solve (variable separable): **dy/dx = (1 + y²) / (1 + x²)**.
2. Solve (variable separable): **sec²x tan y dx + sec²y tan x dy = 0**.
3. Find the particular solution of **cos(dy/dx) = a** (a ∈ R) given **y = 1 when x = 0** (Hint: dy/dx = cos⁻¹ a = constant!).
4. Solve (homogeneous): **(x² − y²) dx + 2xy dy = 0**.
5. Solve (homogeneous): **x (dy/dx) = y − x tan(y/x)**.
6. Solve (homogeneous, x = vy): **y e^(x/y) dx = (x e^(x/y) + y²) dy**.
7. Solve (linear in y): **dy/dx + 2y = sin x**.
8. Solve (linear in y): **dy/dx + y sec x = tan x** (0 ≤ x < π/2).
9. Find the particular solution of **(1 + x²) dy/dx + 2xy = 1 / (1 + x²)**, given **y = 0 when x = 1**.
10. Solve (linear in x): **y dx − (x + 2y²) dy = 0**.

---

### Answers

1. dy/(1 + y²) = dx/(1 + x²) ⇒ **tan⁻¹ y = tan⁻¹ x + C** (or (y − x)/(1 + xy) = K).
2. Divide by tan x tan y: (sec²x / tan x) dx + (sec²y / tan y) dy = 0 ⇒ ln |tan x| + ln |tan y| = ln C ⇒ **tan x · tan y = C**!
   Jaanch: d(tan x tan y) = sec²x tan y dx + tan x sec²y dy = 0 ✅
3. dy/dx = cos⁻¹ a ⇒ y = x cos⁻¹ a + C. At x = 0, y = 1 ⇒ C = 1 → **y = x cos⁻¹ a + 1** (or cos[(y − 1)/x] = a).
4. dy/dx = (y² − x²)/(2xy). Put y = vx: v + x dv/dx = (v² − 1)/(2v) ⇒ x dv/dx = −(1 + v²)/(2v) ⇒ 2v/(1 + v²) dv = −dx/x ⇒ ln(1 + v²) = −ln |x| + ln C ⇒ **x² + y² = Cx**!
   Jaanch: Differentiating x² + y² = Cx gives 2x + 2yy' = C = (x²+y²)/x ⇒ 2xy y' = y² − x² ✅
5. Put y = vx: v + x dv/dx = v − tan v ⇒ cot v dv = −dx/x ⇒ ln |sin v| = −ln |x| + ln C ⇒ **x sin(y/x) = C**!
6. Put x = vy (dx/dy = v + y dv/dy): v + y dv/dy = v + y e^(−v) ⇒ e^v dv = dy ⇒ **e^(x/y) = y + C**!
   Jaanch: d(e^(x/y)) = e^(x/y)(y dx − x dy)/y² = dy ⇒ y e^(x/y) dx = (x e^(x/y) + y²) dy ✅
7. IF = e^(2x). y e^(2x) = ∫ e^(2x) sin x dx + C = (e^(2x)/5)(2 sin x − cos x) + C ⇒ **y = (2 sin x − cos x)/5 + C e^(−2x)**.
8. IF = e^(∫ sec x dx) = **sec x + tan x**.
   y(sec x + tan x) = ∫ tan x (sec x + tan x) dx + C = ∫ (sec x tan x + sec²x − 1) dx + C = **sec x + tan x − x + C**!
   So **y(sec x + tan x) = sec x + tan x − x + C**!
   Jaanch: tan²x = sec²x − 1 integrates cleanly to tan x − x ✅
9. Divide by (1 + x²): dy/dx + [2x/(1 + x²)] y = 1/(1 + x²)².
   IF = e^(ln(1 + x²)) = **1 + x²**.
   y(1 + x²) = ∫ dx/(1 + x²) + C = tan⁻¹x + C.
   At x = 1, y = 0: 0 = π/4 + C ⇒ C = −π/4 → **y(1 + x²) = tan⁻¹x − π/4**!
   Jaanch: At x = 1: y(2) = π/4 − π/4 = 0 ✅
10. Rewrite as dx/dy − (1/y) x = 2y. IF = e^(−ln y) = **1/y**.
    x(1/y) = ∫ 2 dy + C = 2y + C ⇒ **x = 2y² + Cy**!
    Jaanch: dx/dy = 4y + C = 4y + (x − 2y²)/y = (x + 2y²)/y ✅

---

Ab tum Variable Separable, Homogeneous aur Linear First-Order DEs teeno methods par poori pakad bana chuke ho!

**Agle topic mein:** [Sab Kuch Mila Kar: Mixed DE Problems & Chapter Wrap-up](differential-equations-part4.md) mein hum growth/decay applications, mixed DE identification aur final summary table complete karenge!
