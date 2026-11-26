> **Class:** 12 | **Subject:** Mathematics | **Chapter 9:** Differential Equations

# Basic Concepts: Order, Degree, General and Particular Solutions

> **Pichle chapter mein:** Humne [Application of Integrals — Mixed Problems & Wrap-up](../application-of-integrals/application-of-integrals-part4.md) complete kiya. Ab hum Calculus ke sabse powerful modeling tool — **Differential Equations** (aisi equations jinmein derivatives dy/dx, d²y/dx² aate hain) — ko shuru kar rahe hain!

---

Mithun apni garam chai ke thande hone ki speed note kar raha tha: jab chai bahut garam thi, woh tezi se thandi ho rahi thi; jab woh room temperature ke paas aayi, toh thande hone ki speed dheemi pad gayi! Newton ne is natural law ko ek chhoti si equation mein likha: **dT/dt = −k(T − T₀)**! Jis equation mein unknown function ke **derivatives** shamil hon, use hi **Differential Equation** kehte hain!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Differential Equation (DE)** | Woh equation jismein dependent variable (y) ke independent variable (x) ke respect mein **derivatives** (dy/dx, d²y/dx², ...) hon |
| **Order of a DE** | Equation mein maujood **highest-order derivative** ka order (hamesha positive integer: 1, 2, 3, ...) |
| **Degree of a DE** | Polynomial equation in derivatives (fractions aur radicals hatane ke baad) mein **highest-order derivative ki highest power** |
| **General Solution** | Woh solution jismein **order ke barabar** independent arbitrary constants (C₁, C₂, ...) hon |
| **Particular Solution** | Initial conditions lagakar arbitrary constants ko fixed values dene par mila solution (**0 arbitrary constants!**) |

---

## 1. Order vs Degree — Three Golden Rules (100% Exam Question!)

1. **Order is ALWAYS defined** — simply spot the highest derivative (y', y'', y''').
2. **Degree is defined ONLY IF the DE is a POLYNOMIAL in derivatives!**
   - Agar koi derivative **sin(y')**, **cos(y'')**, **e^(y')**, ya **ln(y')** ke andar phansa ho ⇒ **Degree = NOT DEFINED!**
3. **Clear fractional powers / radicals on derivatives FIRST!**
   - Example: [1 + (dy/dx)²]^(3/2) = d²y/dx² → square BOTH sides to remove 3/2: [1 + (dy/dx)²]³ = (d²y/dx²)² → **Order = 2, Degree = 2**!

---

## 2. General vs Particular Solution (Quick Counting Rule!)

- Number of arbitrary constants in the **general solution** of an **n-th order DE** = **n**!
- Number of arbitrary constants in a **particular solution** of ANY order DE = **0**! (Exam MCQ favourite!)

---

## Solved Examples

### Example 1: Finding Order and Degree of Four DEs
Determine the order and degree (if defined) of:
(a) d²y/dx² + 5x (dy/dx)² − 6y = ln x
(b) (d³y/dx³)² + (d²y/dx²)³ + (dy/dx)⁴ + y⁵ = 0
(c) d⁴y/dx⁴ + sin(y''') = 0
(d) √(1 + (dy/dx)²) = d²y/dx²

**Solution:**
(a) Highest derivative is d²y/dx² (power 1); ln x is fine (it's on x, not on y'!). **Order = 2, Degree = 1**.
(b) Highest derivative is d³y/dx³ with power 2 (ignore power 4 on dy/dx!). **Order = 3, Degree = 2**.
(c) Highest derivative is d⁴y/dx⁴ → **Order = 4**. Since y''' is inside sin(...), not a polynomial in derivatives → **Degree = Not defined**!
(d) Square both sides to clear radical: 1 + (dy/dx)² = (d²y/dx²)² → **Order = 2, Degree = 2**.

Jaanch: Only derivatives need to be polynomial (ln x in (a) is totally fine!); in (b), highest derivative's power is 2, NOT 4 ✅

---

### Example 2: Verifying a Given Solution of a DE
Verify that **y = a cos x + b sin x** is a solution of **d²y/dx² + y = 0**.

**Solution:**
- y = a cos x + b sin x
- y' = −a sin x + b cos x
- y'' = −a cos x − b sin x = −(a cos x + b sin x) = **−y**
Therefore, **y'' + y = −y + y = 0**! Verified!

Jaanch: 2 arbitrary constants (a, b) match the 2nd-order DE ⇒ general solution ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Lower-order derivative ki badi power ko degree bol dena:**
   - *Galat:* (d²y/dx²) + (dy/dx)⁵ = 0 ki degree 5 bolna.
   - *Sahi:* Sirf **HIGHEST-ORDER derivative** (d²y/dx²) ki power dekhte hain → **Order = 2, Degree = 1**!

2. **sin(x) ya eˣ dekh kar degree "not defined" bol dena:**
   - *Galat:* y'' + y' = eˣ + sin x ki degree not defined hai.
   - *Sahi:* eˣ aur sin x sirf x par hain, derivatives par nahi! Polynomial check sirf **y', y'', ...** par lagta hai → **Order = 2, Degree = 1**!

3. **Particular solution mein arbitrary constants ki sankhya n bol dena:**
   - *Galat:* 3rd-order DE ke particular solution mein 3 constants hote hain.
   - *Sahi:* General solution mein **3**, par particular solution mein hamesha **0** arbitrary constants hote hain!

---

## Quick Recap

- **Order** = highest derivative present.
- **Degree** = highest power of highest derivative (after clearing fractions/radicals on derivatives; **not defined** if derivative is inside sin, cos, exp, ln).
- **Arbitrary constants:** General solution of order n has **n**; Particular solution has **0**.

---

## Practice Questions

1. Find the order and degree (if defined) of:
   (a) y''' + 2y'' + y' = 0
   (b) (y'')² + cos(y') = 0
   (c) (d²y/dx²)³ + (dy/dx)² + sin(dy/dx) + 1 = 0
2. Find the order and degree of: **2x² (d²y/dx²) − 3(dy/dx) + y = 0**.
3. Find the order and degree of: **[ 1 + (dy/dx)² ]^(3/2) = k (d²y/dx²)**.
4. Find the sum of the order and degree of: **d/dx [ (dy/dx)³ ] = 0**.
5. State the number of arbitrary constants in: (a) the general solution of a 4th-order DE, (b) a particular solution of a 3rd-order DE.
6. Verify that **y = eˣ + 1** is a solution of **y'' − y' = 0**.
7. Verify that **y = x sin x** is a solution of **x y' = y + x √(x² − y²)** (x ≠ 0, x > y).
8. Verify that **y = √(a² − x²)** is a solution of **x + y(dy/dx) = 0**.
9. Verify that **y = A eˣ + B e⁻ˣ** is a solution of **d²y/dx² − y = 0**.
10. Verify that **xy = ln y + C** is a solution of **dy/dx = y² / (1 − xy)** (xy ≠ 1).

---

### Answers

1. (a) **Order = 3, Degree = 1**.
   (b) **Order = 2, Degree = Not defined** (y' inside cos).
   (c) **Order = 2, Degree = Not defined** (dy/dx inside sin).
2. **Order = 2, Degree = 1**.
3. Square both sides: [1 + (dy/dx)²]³ = k² (d²y/dx²)² ⇒ **Order = 2, Degree = 2**.
4. Expand d/dx [(dy/dx)³] = **3(dy/dx)² (d²y/dx²) = 0** ⇒ Order = 2, Degree = 1 → Sum = 2 + 1 = **3**!
   Jaanch: Chain rule gives 3(y')² y'' = 0 → order 2, degree 1, sum = 3 ✅
5. (a) **4**; (b) **0**!
6. y' = eˣ, y'' = eˣ ⇒ y'' − y' = eˣ − eˣ = 0 (Verified!).
7. y' = sin x + x cos x ⇒ xy' = x sin x + x² cos x = y + x² √(1 − sin²x) = y + x √(x² − x² sin²x) = **y + x √(x² − y²)**!
8. y' = −x / √(a² − x²) = −x/y ⇒ y·y' = −x ⇒ **x + y(dy/dx) = 0**!
9. y' = A eˣ − B e⁻ˣ, y'' = A eˣ + B e⁻ˣ = y ⇒ **y'' − y = 0**!
10. Differentiate xy = ln y + C w.r.t. x: x y' + y = (1/y) y' ⇒ y = (1/y − x) y' = [(1 − xy)/y] y' ⇒ **y' = y² / (1 − xy)**!

---

Ab tum kisi bhi differential equation ka order, degree aur solution verification 100% accuracy ke saath kar sakte ho!

**Agle topic mein:** Hum [Formation of Differential Equations](differential-equations-part2.md) padhenge — jahan kisi bhi family of curves se arbitrary constants hata kar uski exact differential equation banayenge!
