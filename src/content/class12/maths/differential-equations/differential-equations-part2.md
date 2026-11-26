> **Class:** 12 | **Subject:** Mathematics | **Chapter 9:** Differential Equations (Part 2)

# Formation of Differential Equations

> **Pichle topic mein:** Humne [Order, Degree, General and Particular Solutions](differential-equations.md) padha. Ab hum seekhenge ki agar humein kisi **family of curves** ki equation di ho (jismein n arbitrary constants hon), toh un sabhi constants ko eliminate karke uski exact **n-th order Differential Equation** kaise banayi jati hai!

---

Monika apne compass se origin (0, 0) par alag-alag radii r ke concentric circles **x² + y² = r²** bana rahi thi. Har circle ka radius alag tha, par sabhi circles ek hi rule follow kar rahe the! Jab Monika ne x² + y² = r² ko sirf ek baar differentiate kiya: **2x + 2y(dy/dx) = 0 ⇒ x + y(dy/dx) = 0**, toh constant **r** bilkul gayab ho gaya — aur ek single 1st-order DE mil gayi jo duniya ke har concentric circle ko represent karti hai!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Family of Curves** | Ek equation jismein arbitrary constants (parameters like a, b, c) badalne par alag-alag curves milte hain |
| **Elimination of Arbitrary Constants** | Equation ko **n baar** (n = independent constants ki sankhya) differentiate karke sabhi n constants ko equation se hata dena |

---

## 1. The 3-Step Rule for Forming a DE

1. **Count independent arbitrary constants (n):**
   - *Trap!* Pehle check karo kya constants combine ho sakte hain!
   - Example: **y = A e^(x + B) = (A eᴮ) eˣ = C eˣ** → yahan sirf **1 independent constant (C)** hai, 2 nahi! Isliye DE ka order **1** hoga!
2. **Differentiate n times** with respect to x (giving n + 1 equations total: original + n derivatives).
3. **Eliminate all n arbitrary constants** from these n + 1 equations!
   *(Pro Tip: Constants ko differentiate karne se pehle isolate kar lo — jaise y/e^(2x) = a + bx — toh differentiation mein constants apne aap zero ho kar udd jate hain!)*

---

## Solved Examples

### Example 1: Family of Ellipses with Centre at Origin (2 Constants)
Form the differential equation of the family of ellipses having foci on the x-axis and centre at the origin: **x²/a² + y²/b² = 1**.

**Solution:**
There are **2** independent constants (a², b²), so differentiate twice:
1. 1st derivative: (2x)/a² + (2y y')/b² = 0 ⇒ **y y' / x = −b² / a²** (constant isolated on RHS!).
2. Differentiate again w.r.t. x (RHS becomes **0**!):
   d/dx [ (y y') / x ] = 0
   By quotient rule: [ x (y y'' + (y')²) − y y' (1) ] / x² = 0
   ⇒ **x y y'' + x (y')² − y y' = 0**!

Jaanch: Order = 2 (matches 2 constants a, b); zero constants remain ✅

---

### Example 2: Family of Circles Touching the y-Axis at the Origin (1 Constant)
Form the differential equation of the family of circles touching the y-axis at the origin.

**Solution:**
A circle touching the y-axis at (0, 0) has centre **(a, 0)** and radius **|a|**:
(x − a)² + y² = a² ⇒ **x² + y² − 2ax = 0** ⇒ **2a = (x² + y²)/x = x + y²/x** (1 constant isolated!).
Differentiate once w.r.t. x (LHS derivative = 0):
0 = 1 + [ x(2y y') − y²(1) ] / x²
Multiply by x²:
x² + 2xy y' − y² = 0 ⇒ **2xy (dy/dx) + x² − y² = 0**!

Jaanch: Order = 1 (matches 1 constant a); check circle (x−1)²+y²=1 at (1,1): y'=0 ⇒ 0 + 1 − 1 = 0 ✅

---

### Example 3: Family y = e^(2x)(a + bx) (Isolate Constant Trick!)
Form the differential equation representing the family **y = e^(2x) (a + bx)**, where a and b are arbitrary constants.

**Solution:**
Divide by e^(2x) first to isolate **(a + bx)**:
**y e^(−2x) = a + bx**
- 1st derivative: y' e^(−2x) − 2y e^(−2x) = b ⇒ **(y' − 2y) e^(−2x) = b** (b isolated!).
- 2nd derivative: (y'' − 2y') e^(−2x) − 2(y' − 2y) e^(−2x) = 0.
Cancel e^(−2x) ≠ 0:
y'' − 2y' − 2y' + 4y = 0 ⇒ **y'' − 4y' + 4y = 0**!

Jaanch: Characteristic roots r² − 4r + 4 = (r − 2)² = 0 ⇒ double root r = 2 ⇒ y = (a + bx)e^(2x) ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Dependent constants ko alag-alag gin lena:**
   - *Galat:* y = a e^(x + b) mein 2 constants hain toh 2 baar differentiate karna.
   - *Sahi:* a e^(x+b) = (a eᵇ) eˣ = C eˣ — sirf **1 independent constant**! Order = **1** (y' = y)!

2. **Final DE mein koi arbitrary constant chhod dena:**
   - *Galat:* 2x + 2y y' = 2a likh kar chhod dena.
   - *Sahi:* Final differential equation mein **ek bhi arbitrary constant nahi** bacha hona chahiye!

---

## Quick Recap

- **Order of formed DE = number of INDEPENDENT arbitrary constants.**
- **Isolation trick:** Put a constant alone on RHS BEFORE differentiating so its derivative vanishes cleanly to 0!

---

## Practice Questions

1. Form the DE of the family of lines **x/a + y/b = 1** (a, b arbitrary constants).
2. Form the DE of the family of parabolas **y² = 4ax** (focus on x-axis, vertex at origin).
3. Form the DE of the family of curves **y = a sin(x + b)** (a, b arbitrary constants).
4. Form the DE of the family of curves **y = a e^(3x) + b e^(−2x)**.
5. Form the DE of the family of circles touching the **x-axis at the origin**.
6. Form the DE of the family of parabolas having vertex at the origin and axis along the **positive y-axis** (x² = 4ay).
7. Form the DE of the family of curves **y = eˣ (a cos x + b sin x)**.
8. Form the DE of the family of circles in the second quadrant touching both coordinate axes: **(x + a)² + (y − a)² = a²**.
9. How many independent arbitrary constants are in **y = c₁ e^(x + c₂) + c₃ e^(x + c₄)**? What is the order of its DE?
10. Form the DE of **y² = a(b² − x²)** where a and b are arbitrary constants.

---

### Answers

1. 1st deriv: 1/a + y'/b = 0; 2nd deriv: y''/b = 0 ⇒ **d²y/dx² = 0**!
2. 4a = y²/x ⇒ differentiate: 0 = (2xy y' − y²)/x² ⇒ **2x y' − y = 0** (or 2x(dy/dx) = y).
   Jaanch: For y² = 4x, y' = 2/y ⇒ 2x(2/y) = 4x/y = y ✅
3. y' = a cos(x + b); y'' = −a sin(x + b) = −y ⇒ **y'' + y = 0**!
4. y' = 3a e^(3x) − 2b e^(−2x); y'' = 9a e^(3x) + 4b e^(−2x).
   Notice y'' − y' − 6y = (9−3−6)a e^(3x) + (4+2−6)b e^(−2x) = 0 ⇒ **y'' − y' − 6y = 0**!
   Jaanch: Characteristic roots r² − r − 6 = (r − 3)(r + 2) = 0 ⇒ r = 3, −2 ✅
5. x² + (y − a)² = a² ⇒ x² + y² = 2ay ⇒ 2a = x²/y + y.
   Differentiate: 0 = (2xy − x²y')/y² + y' ⇒ **2xy + (y² − x²) y' = 0**!
6. 4a = x²/y ⇒ 0 = (2xy − x²y')/y² ⇒ **x y' − 2y = 0**.
7. y e⁻ˣ = a cos x + b sin x.
   - 1st deriv: (y' − y) e⁻ˣ = −a sin x + b cos x
   - 2nd deriv: (y'' − 2y' + y) e⁻ˣ = −(a cos x + b sin x) = −y e⁻ˣ
   Cancel e⁻ˣ ⇒ **y'' − 2y' + 2y = 0**!
8. x² + y² + 2a(x − y) + a² = 0. Differentiate: 2x + 2yy' + 2a(1 − y') = 0 ⇒ **a = −(x + yy') / (1 − y')**.
   Substitute back into (x + a)² + (y − a)² = a² ⇒ **(x + y)² [(y')² + 1] = (x + y y')²**!
9. Rewrite y = (c₁ e^(c₂) + c₃ e^(c₄)) eˣ = **C eˣ** → ONLY **1 independent constant** ⇒ **Order = 1** (y' = y)!
10. Differentiate once: 2y y' = −2ax ⇒ **y y' / x = −a** (isolated!).
    Differentiate again: [x(y y'' + (y')²) − y y'] / x² = 0 ⇒ **x y y'' + x (y')² − y y' = 0**!

---

Ab tum kisi bhi geometric ya algebraic family of curves se uski exact differential equation bana sakte ho!

**Agle topic mein:** Hum [Solving First-Order DEs: Variable Separable, Homogeneous and Linear Equations](differential-equations-part3.md) padhenge — jo is chapter ka sabse high-scoring part hai!
