> **Class:** 12 | **Subject:** Mathematics | **Chapter 9:** Differential Equations (Gehrai Mein — Advanced Level)

# Differential Equations — Gehrai Mein (Advanced Level)

> **Core chapter se bridge:** Core lessons ([Part 1: Order & Degree](differential-equations.md) se [Part 4: Mixed Problems](differential-equations-part4.md) tak) mein humne variable separable, homogeneous aur linear first-order DEs padhe. Ab competitive-exam depth mein hum **Bernoulli's Equation, Exact Differential Groupings, Reducible-to-Separable DEs (dy/dx = f(ax + by + c)), aur Orthogonal Trajectories** cover karenge.

---

Naresh ek physics-engineering workshop mein electric field lines aur equipotential surfaces ko plot kar raha tha: har electric field line har equipotential curve ko theek **90° (orthogonally)** kaat-ti hai! Agar tumhe ek family of curves ki DE pata ho, toh sirf **dy/dx ko −dx/dy se replace** karke solve kar do — turant uski poori **Orthogonal Trajectory** family mil jati hai!

---

## 1. Bernoulli's Differential Equation (Reducible to Linear!)

Form: **dy/dx + P(x) · y = Q(x) · yⁿ**   (n ≠ 0, 1)

**3-Step Solution:**
1. Divide the entire equation by **yⁿ**: **y⁻ⁿ (dy/dx) + P(x) · y^(1−n) = Q(x)**.
2. Substitute **v = y^(1−n)** ⇒ **dv/dx = (1 − n) y⁻ⁿ (dy/dx)**.
3. Equation becomes a standard **Linear DE in v** → solve using Integrating Factor!

---

## 2. Exact Differential Groupings (Inspection Method — Ultra-Fast!)

Learn to recognise these 6 exact total differentials instantly:
1. **x dy + y dx = d(xy)**
2. **(x dy − y dx) / x² = d(y / x)**
3. **(y dx − x dy) / y² = d(x / y)**
4. **(x dy − y dx) / (x² + y²) = d(tan⁻¹(y / x))**
5. **(x dy − y dx) / (xy) = d(ln |y / x|)**
6. **(x dx + y dy) / √(x² + y²) = d(√(x² + y²))**

---

## 3. Reducible to Variable Separable: dy/dx = f(ax + by + c)

Put **t = ax + by + c** ⇒ **dt/dx = a + b (dy/dx)** ⇒ **dy/dx = (dt/dx − a) / b**.
Equation becomes **(dt/dx − a)/b = f(t)** — cleanly variable separable in t and x!

---

## 4. Orthogonal Trajectories (90° Intersecting Family!)

To find the family of curves that cuts a given family **F(x, y, c) = 0** at right angles everywhere:
1. Form the 1st-order DE of the given family by eliminating c: **f(x, y, dy/dx) = 0**.
2. Replace **dy/dx** by **−dx/dy** (i.e., −1/(dy/dx), since m₁ m₂ = −1!).
3. Solve the new DE to get the orthogonal trajectory family!

---

## Deep Solved Problems

### Problem 1: Solving a Bernoulli Differential Equation
Solve: **dy/dx + (y / x) = x² y⁶** (x > 0).

**Solution:**
Divide by **y⁶**: y⁻⁶ (dy/dx) + (1/x) y⁻⁵ = x².
Put **v = y⁻⁵** ⇒ dv/dx = −5 y⁻⁶ (dy/dx) ⇒ y⁻⁶ (dy/dx) = −(1/5)(dv/dx).
Substitute: −(1/5)(dv/dx) + (1/x) v = x² ⇒ **dv/dx − (5/x) v = −5x²** (Linear in v!).
- **IF = e^(−5 ln x) = x⁻⁵**.
- Solution: v · x⁻⁵ = ∫ (−5x²)(x⁻⁵) dx + C = −5 ∫ x⁻³ dx + C = (5/2) x⁻² + C.
- Multiply by x⁵: v = (5/2) x³ + C x⁵ ⇒ **y⁻⁵ = (5/2) x³ + C x⁵**!

Jaanch: Differentiate y⁻⁵ = (5/2)x³ + Cx⁵: −5y⁻⁶y' = (15/2)x² + 5Cx⁴ = (15/2)x² + 5(y⁻⁵ − (5/2)x³)/x = 5y⁻⁵/x − 5x² ⇒ y' + y/x = x²y⁶ ✅

---

### Problem 2: Exact Differential Inspection in 2 Lines
Solve: **x dy − y dx = (x² + y²) dx**.

**Solution:**
Divide both sides by **(x² + y²)**:
(x dy − y dx) / (x² + y²) = dx
Recognise LHS as **d(tan⁻¹(y/x))**!
Integrate both sides immediately:
**tan⁻¹(y/x) = x + C** ⇒ **y = x tan(x + C)**!

Jaanch: Differentiate tan⁻¹(y/x) = x + C ⇒ [1/(1 + y²/x²)] · (x dy − y dx)/x² = dx ⇒ x dy − y dx = (x² + y²) dx ✅

---

### Problem 3: Reducible to Separable (t = x + y)
Solve: **dy/dx = (x + y + 1)²**.

**Solution:**
Put **t = x + y + 1** ⇒ dt/dx = 1 + dy/dx ⇒ dy/dx = dt/dx − 1.
Equation becomes: dt/dx − 1 = t² ⇒ **dt / (1 + t²) = dx**.
Integrate: **tan⁻¹(t) = x + C** ⇒ **x + y + 1 = tan(x + C)**!

Jaanch: Differentiate y = tan(x + C) − x − 1 ⇒ dy/dx = sec²(x + C) − 1 = tan²(x + C) = (x + y + 1)² ✅

---

### Problem 4: Finding Orthogonal Trajectories of Rectangular Hyperbolas xy = c
Find the orthogonal trajectories of the family of rectangular hyperbolas **xy = c**.

**Solution:**
1. Differentiate xy = c to eliminate c: x(dy/dx) + y = 0 ⇒ **dy/dx = −y / x**.
2. Replace **dy/dx** with **−dx/dy** (i.e., −1/(dy/dx)):
   −dx/dy = −y/x ⇒ **x dx = y dy**.
3. Integrate both sides:
   x²/2 = y²/2 + K ⇒ **x² − y² = C** (another family of rectangular hyperbolas rotated by 45°!).

Jaanch: At any intersection (x, y), slope of xy = c is −y/x and slope of x² − y² = C is +x/y; product = (−y/x)(x/y) = −1 ✅

---

### Problem 5: Orthogonal Trajectories of Concentric Circles x² + y² = r²
Find the orthogonal trajectories of the family of circles **x² + y² = r²**.

**Solution:**
1. Differentiate: 2x + 2y(dy/dx) = 0 ⇒ **dy/dx = −x / y**.
2. Replace dy/dx by −dx/dy: −dx/dy = −x/y ⇒ **dy/y = dx/x**.
3. Integrate: ln |y| = ln |x| + ln m ⇒ **y = mx** (all straight lines passing through the origin — radii are perpendicular to circles!).

Jaanch: Every radial line y = mx meets every circle x² + y² = r² at exact 90° ✅

---

## Advanced Practice Questions

1. Solve the Bernoulli equation: **dy/dx + y = x y³**.
2. Solve the Bernoulli equation: **x (dy/dx) + y = y² ln x** (x > 0).
3. Solve by exact differentials: **x dy − y dx = x² eˣ dx**.
4. Solve by exact differentials: **(x dx + y dy) / (x² + y²) = dx**.
5. Solve using substitution t = 4x + y + 1: **dy/dx = (4x + y + 1)²**.
6. Solve using substitution t = x + y: **dy/dx = cos(x + y)**.
7. Find the orthogonal trajectories of the family of parabolas **y = c x²**.
8. Find the orthogonal trajectories of the family of curves **y = c eˣ**.
9. Solve: **(1 + xy) y dx + (1 − xy) x dy = 0** (Hint: rewrite as (y dx + x dy) + xy(y dx − x dy) = 0 and divide by x²y²!).
10. Find the orthogonal trajectories of the family of straight lines **y = c x** passing through the origin.

---

### Solutions

1. Divide by y³: y⁻³ y' + y⁻² = x. Put v = y⁻² ⇒ dv/dx = −2 y⁻³ y':
   dv/dx − 2v = −2x ⇒ IF = e^(−2x).
   v e^(−2x) = ∫ (−2x) e^(−2x) dx + C = e^(−2x)(x + 1/2) + C ⇒ **1/y² = x + 1/2 + C e^(2x)**!
   Jaanch: Check d/dx(e^(−2x)(x + 1/2)) = e^(−2x)(1 − 2x − 1) = −2x e^(−2x) ✅
2. Divide by x y²: y⁻² y' + (1/x) y⁻¹ = (ln x)/x. Put v = y⁻¹ (dv/dx = −y⁻² y'):
   dv/dx − (1/x) v = −(ln x)/x ⇒ IF = 1/x.
   v/x = −∫ (ln x)/x² dx + C = (1 + ln x)/x + C ⇒ **1/y = 1 + ln x + Cx**!
3. Divide by x²: (x dy − y dx)/x² = eˣ dx ⇒ d(y/x) = eˣ dx ⇒ **y/x = eˣ + C** ⇒ **y = x(eˣ + C)**!
4. LHS = (1/2) d(ln(x² + y²)) = dx ⇒ **(1/2) ln(x² + y²) = x + C** (or x² + y² = K e^(2x)).
5. Put t = 4x + y + 1 ⇒ dt/dx = 4 + t² ⇒ dt/(t² + 2²) = dx ⇒ **(1/2) tan⁻¹[(4x + y + 1)/2] = x + C**!
6. Put t = x + y ⇒ dt/dx = 1 + cos t = 2 cos²(t/2) ⇒ (1/2) sec²(t/2) dt = dx ⇒ **tan[(x + y)/2] = x + C**!
   Jaanch: d/dx tan((x+y)/2) = (1/2)sec²((x+y)/2)(1 + y') = 1 ⇒ 1 + y' = 2 cos²((x+y)/2) = 1 + cos(x+y) ⇒ y' = cos(x+y) ✅
7. y = cx² ⇒ c = y/x² ⇒ y' = 2cx = 2y/x. Replace y' by −dx/dy:
   −dx/dy = 2y/x ⇒ x dx + 2y dy = 0 ⇒ **x² + 2y² = K** (family of ellipses!).
8. y = c eˣ ⇒ y' = y. Replace y' by −dx/dy: −dx/dy = y ⇒ y dy + dx = 0 ⇒ **y² + 2x = K** (family of parabolas!).
9. Divide by x²y²: (y dx + x dy)/(x²y²) + (y dx − x dy)/(xy) = 0 ⇒ −d(1/(xy)) + d(ln |x/y|) = 0 ⇒ **ln |x/y| − 1/(xy) = C**!
10. y = cx ⇒ y' = y/x. Replace y' by −dx/dy ⇒ x dx + y dy = 0 ⇒ **x² + y² = r²** (concentric circles!).

---

Wapas core chapter wrap-up par jaane ke liye dekho: [Mixed DE Problems & Chapter Wrap-up](differential-equations-part4.md).
