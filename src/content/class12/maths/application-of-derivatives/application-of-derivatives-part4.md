> **Class:** 12 | **Subject:** Mathematics | **Chapter 6:** Application of Derivatives (Part 4)

# Approximations (Differentials)

> **Pichle topic mein:** Humne [Tangents and Normals](application-of-derivatives-part3.md) padha. Ab hum tangent line ki ek super-useful power dekhenge: ek chhote step **Δx** par curve aur uski tangent line lagbhag ek hi hoti hain — isliye bina calculator ke **√36.6**, **(26)^(1/3)**, ya measurement errors ka **approximate answer** turant nikal sakte hain!

---

Geetanjali apne papa ke precision machine shop mein thi jahan 7 cm radius wale metal spheres banaye jaate the. Quality inspector ne bataya: "Agar radius naapne mein sirf **0.02 cm** ka error ho jaye, toh volume mein kitna error aayega?" Geetanjali ne poora (7.02)³ nahi nikala — usne differential formula **ΔV ≈ (dV/dr) · Δr = 4πr² Δr** lagaya aur 5 seconds mein exact error **3.92π cm³** nikal liya!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Differential of x (dx)** | Independent variable mein chhota change: **dx = Δx** |
| **Differential of y (dy)** | Tangent line ke along y mein change: **dy = f'(x) · dx = f'(x) · Δx** |
| **Linear Approximation Formula** | **f(x + Δx) ≈ f(x) + f'(x) · Δx** (jab Δx bahut chhota ho!) |
| **Relative & Percentage Error** | Relative error = Δy / y; Percentage error = **(Δy / y) × 100%** |

---

## 1. The 4-Step Method for Approximations

1. **Choose the function f(x)** matching the expression (e.g., √x, x^(1/3), x^(1/4), polynomial).
2. **Split the given number** into **x + Δx**, where **x** is the **nearest clean perfect power** (e.g., 36.6 = 36 + 0.6; 26 = 27 − 1; 0.999 = 1 − 0.001) and **Δx** is small (can be + or −!).
3. Compute **f(x)** and **f'(x)**.
4. Apply **f(x + Δx) ≈ f(x) + f'(x) · Δx**!

---

## Solved Examples

### Example 1: Approximating √36.6 Using Differentials
Use differentials to approximate **√36.6** up to 3 decimal places.

**Solution:**
Let **f(x) = √x**, so **f'(x) = 1 / (2√x)**.
Choose **x = 36** (nearest perfect square) and **Δx = +0.6**.
- f(36) = √36 = **6**
- f'(36) = 1 / (2 × 6) = **1/12**
- Δy ≈ f'(36) · Δx = (1/12) × 0.6 = **0.05**
Therefore: **√36.6 ≈ 6 + 0.05 = 6.05**!

Jaanch: Check 6.05² = 36.6025 (extremely close to 36.6!) ✅

---

### Example 2: Approximating (26)^(1/3) (Negative Δx!)
Use differentials to approximate **(26)^(1/3)** up to 3 decimal places.

**Solution:**
Let **f(x) = x^(1/3)**, so **f'(x) = (1/3) x^(−2/3) = 1 / [3 x^(2/3)]**.
Choose **x = 27** (nearest perfect cube!) and **Δx = −1** (since 27 − 1 = 26).
- f(27) = 27^(1/3) = **3**
- f'(27) = 1 / [3 × (27)^(2/3)] = 1 / (3 × 9) = **1/27**
- Δy ≈ (1/27) × (−1) = **−0.037**
Therefore: **(26)^(1/3) ≈ 3 − 0.037 = 2.963**!

Jaanch: Check 2.963³ ≈ 26.013 (exact value is 2.9625!) ✅

---

### Example 3: Approximate Error in Volume of a Sphere
If the radius of a sphere is measured as **7 m** with an error of **0.02 m**, find the approximate error in calculating its volume.

**Solution:**
Volume V = (4/3)πr³ ⇒ **dV/dr = 4πr²**.
Given r = 7 m, Δr = 0.02 m:
**ΔV ≈ (dV/dr) · Δr = 4π(7²)(0.02) = 4π(49)(0.02) = 3.92π m³** (≈ 12.31 m³).

Jaanch: 4 × 49 = 196; 196 × 0.02 = 3.92 → 3.92π m³ ✅

---

### Example 4: Approximating a Polynomial Value f(2.01)
Find the approximate value of **f(2.01)** where **f(x) = 4x² + 5x + 2**.

**Solution:**
Choose **x = 2** and **Δx = 0.01**.
- f(2) = 4(4) + 5(2) + 2 = 16 + 10 + 2 = **28**.
- f'(x) = 8x + 5 ⇒ f'(2) = 8(2) + 5 = **21**.
- f(2.01) ≈ f(2) + f'(2) · Δx = 28 + 21(0.01) = 28 + 0.21 = **28.21**!

Jaanch: Exact value 4(2.01)² + 5(2.01) + 2 = 16.1604 + 10.05 + 2 = 28.2104 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Negative Δx ka minus sign bhool jana:**
   - *Galat:* (26)^(1/3) mein x = 27, Δx = 1 lekar 3 + 0.037 = 3.037 likh dena (26 ka cube root 3 se bada kaise ho sakta hai?!).
   - *Sahi:* 26 = 27 + (**−1**), isliye Δx = **−1** → 3 − 0.037 = **2.963**!

2. **Approximate change (Δy) aur approximate value (y + Δy) mein confuse ho jana:**
   - *Galat:* "Find approximate change in volume" mein poora V + ΔV likh dena.
   - *Sahi:* "Approximate **change / error**" = sirf **Δy = f'(x)·Δx**; "Approximate **value**" = **f(x) + Δy**!

---

## Quick Recap

- **Linear approximation:** f(x + Δx) ≈ f(x) + f'(x) Δx.
- **Approximate change / error:** Δy ≈ f'(x) Δx.
- **Percentage error shortcut:** If y = c·xⁿ, then **(Δy/y) × 100% ≈ n × (Δx/x × 100%)**! (e.g., 1% error in r ⇒ **3% error in sphere volume** and **2% error in surface area**!)

---

## Practice Questions

1. Use differentials to approximate **√25.3** up to 3 decimal places.
2. Use differentials to approximate **√49.5** up to 3 decimal places.
3. Use differentials to approximate **(0.999)^(1/10)** up to 4 decimal places.
4. Use differentials to approximate **(15)^(1/4)** up to 3 decimal places.
5. Use differentials to approximate **(81.5)^(1/4)** up to 3 decimal places.
6. Find the approximate value of **f(5.001)** where **f(x) = x³ − 7x² + 15**.
7. Find the approximate change in the volume **V** of a cube of side **x** metres caused by increasing the side by **1%**.
8. Find the approximate change in the surface area of a cube of side **x** metres caused by decreasing the side by **1%**.
9. If the radius of a sphere is measured as **9 cm** with an error of **0.03 cm**, find the approximate error in calculating its **surface area**.
10. Find the approximate value of **ln(1.02)** using differentials (given ln 1 = 0).

---

### Answers

1. x = 25, Δx = 0.3, f(x) = √x, f'(25) = 1/10 = 0.1.
   √25.3 ≈ 5 + 0.1(0.3) = **5.030**.
   Jaanch: 5.03² = 25.3009 ✅
2. x = 49, Δx = 0.5, f'(49) = 1/14 ≈ 0.0714.
   √49.5 ≈ 7 + 0.5/14 = 7 + 0.0357 = **7.036**.
   Jaanch: 7.036² = 49.505 ✅
3. x = 1, Δx = −0.001, f(x) = x^(1/10), f'(1) = 1/10 = 0.1.
   (0.999)^(1/10) ≈ 1 + 0.1(−0.001) = 1 − 0.0001 = **0.9999**.
   Jaanch: 0.9999¹⁰ ≈ 0.9990 ✅
4. x = 16, Δx = −1, f(x) = x^(1/4), f'(16) = 1/[4(16)^(3/4)] = 1/(4 × 8) = 1/32 = 0.03125.
   (15)^(1/4) ≈ 2 − 0.03125 = **1.969**.
   Jaanch: 1.969⁴ ≈ 15.03 ✅
5. x = 81, Δx = 0.5, f(81) = 3, f'(81) = 1/[4(81)^(3/4)] = 1/(4 × 27) = 1/108.
   (81.5)^(1/4) ≈ 3 + 0.5/108 = 3 + 0.0046 = **3.005**.
   Jaanch: 3.005⁴ ≈ 81.54 ✅
6. x = 5, Δx = 0.001. f(5) = 125 − 175 + 15 = **−35**; f'(x) = 3x² − 14x ⇒ f'(5) = 75 − 70 = **5**.
   f(5.001) ≈ −35 + 5(0.001) = **−34.995**.
   Jaanch: −35 + 0.005 = −34.995 ✅
7. V = x³, dV/dx = 3x², Δx = +0.01x ⇒ ΔV ≈ 3x²(0.01x) = **0.03 x³ m³** (3% increase!).
8. S = 6x², dS/dx = 12x, Δx = −0.01x ⇒ ΔS ≈ 12x(−0.01x) = **−0.12 x² m²** (decreases by 0.12 x² m²!).
9. S = 4πr², dS/dr = 8πr. At r = 9, Δr = 0.03: ΔS ≈ 8π(9)(0.03) = **2.16π cm²**.
   Jaanch: 72 × 0.03 = 2.16 ✅
10. f(x) = ln x, f'(x) = 1/x, x = 1, Δx = 0.02 ⇒ ln(1.02) ≈ ln(1) + (1/1)(0.02) = 0 + 0.02 = **0.020**!
    Jaanch: Exact ln(1.02) = 0.01980 ≈ 0.020 ✅

---

Ab tum differentials se roots, powers aur engineering measurement errors bilkul effortlessly estimate kar sakte ho!

**Agle topic mein:** Hum poore Calculus ka sabse famous aur highest-weightage topic — [Maxima, Minima and Optimisation Word Problems](application-of-derivatives-part5.md) — master karenge!
