> **Class:** 12 | **Subject:** Mathematics | **Chapter 6:** Application of Derivatives (Part 2)

# Increasing and Decreasing Functions

> **Pichle topic mein:** Humne [Rate of Change of Quantities](application-of-derivatives.md) padha. Ab hum dekhenge ki derivative **f'(x)** ka sign (**+ ya −**) humein kaise batata hai ki koi function kis interval mein upar chadh raha hai (**Strictly Increasing**) aur kis interval mein neeche utar raha hai (**Strictly Decreasing**)!

---

Dharmendra ek trekking trail ka elevation map dekh raha tha: jahan rasta upar chadh raha tha wahan slope **positive (f'(x) > 0)** tha, jahan rasta neeche utar raha tha wahan slope **negative (f'(x) < 0)** tha, aur bilkul choti (peak) ya ghati (valley) par ek pal ke liye slope **zero (f'(x) = 0)** ho jata tha!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Strictly Increasing on I** | x₁ < x₂ ⇒ f(x₁) < f(x₂) (Derivative test: **f'(x) > 0** on open interval I) |
| **Strictly Decreasing on I** | x₁ < x₂ ⇒ f(x₁) > f(x₂) (Derivative test: **f'(x) < 0** on open interval I) |
| **Critical Points** | Woh points jahan **f'(x) = 0** ya f'(x) undefined ho — yahi number line ko disjoint intervals mein baant-te hain! |

---

## 1. The 4-Step Wavy-Curve Method to Find Intervals

1. Compute **f'(x)** and factor it completely!
2. Solve **f'(x) = 0** (and points where f'(x) is undefined) to get all **critical points**.
3. Plot the critical points on the real number line to split the domain into open intervals.
4. Test the **sign of f'(x)** in each interval:
   - **f'(x) > 0** ⇒ **Strictly Increasing** on that interval.
   - **f'(x) < 0** ⇒ **Strictly Decreasing** on that interval.
   *(Note: If a function is continuous at the boundary endpoints of an interval, e.g., polynomials, it is also increasing/decreasing on the corresponding closed intervals!)*

---

## Solved Examples

### Example 1: Finding Intervals for a Cubic Polynomial
Find the intervals in which **f(x) = 2x³ − 3x² − 36x + 7** is: (a) strictly increasing, (b) strictly decreasing.

**Solution:**
1. Differentiate and factor:
   f'(x) = 6x² − 6x − 36 = 6(x² − x − 6) = **6(x − 3)(x + 2)**.
2. Critical points: f'(x) = 0 ⇒ **x = −2** and **x = 3**.
3. Intervals on R: (−∞, −2), (−2, 3), and (3, ∞).
4. Sign test of 6(x − 3)(x + 2):
   - In **(−∞, −2)** (test x = −3): 6(−6)(−1) = **+36 > 0** (Increasing)
   - In **(−2, 3)** (test x = 0): 6(−3)(2) = **−36 < 0** (Decreasing)
   - In **(3, ∞)** (test x = 4): 6(1)(6) = **+36 > 0** (Increasing)
Answer:
- **Strictly increasing:** **(−∞, −2) ∪ (3, ∞)**
- **Strictly decreasing:** **(−2, 3)**

Jaanch: Leading term 2x³ goes from −∞ to +∞, rising before −2, dipping on (−2, 3), rising after 3 ✅

---

### Example 2: Trigonometric Function on [0, 2π]
Find the intervals in which **f(x) = sin x + cos x** (0 ≤ x ≤ 2π) is strictly increasing or strictly decreasing.

**Solution:**
1. f'(x) = **cos x − sin x**.
2. Set f'(x) = 0 ⇒ cos x = sin x ⇒ tan x = 1 ⇒ **x = π/4** and **x = 5π/4** in [0, 2π].
3. Intervals: (0, π/4), (π/4, 5π/4), and (5π/4, 2π).
4. Sign test:
   - In **(0, π/4)** (test x = 0): cos 0 − sin 0 = **+1 > 0** (Increasing)
   - In **(π/4, 5π/4)** (test x = π/2): cos(π/2) − sin(π/2) = **−1 < 0** (Decreasing)
   - In **(5π/4, 2π)** (test x = 3π/2): cos(3π/2) − sin(3π/2) = **+1 > 0** (Increasing)
Answer:
- **Strictly increasing:** **[0, π/4) ∪ (5π/4, 2π]**
- **Strictly decreasing:** **(π/4, 5π/4)**

Jaanch: f(x) = √2 sin(x + π/4) peaks at x = π/4 (+√2) and bottoms at x = 5π/4 (−√2) ✅

---

### Example 3: Proving a Logarithmic-Rational Function Is Increasing Everywhere on Its Domain
Prove that **y = ln(1 + x) − 2x / (2 + x)** is an increasing function of x throughout its domain **x > −1**.

**Solution:**
Differentiate w.r.t. x (quotient rule on second term):
dy/dx = 1 / (1 + x) − [ 2(2 + x) − 2x(1) ] / (2 + x)²
= 1 / (1 + x) − 4 / (2 + x)²
Combine over common denominator (1 + x)(2 + x)²:
= [ (2 + x)² − 4(1 + x) ] / [ (1 + x)(2 + x)² ]
= [ 4 + 4x + x² − 4 − 4x ] / [ (1 + x)(2 + x)² ]
= **x² / [ (1 + x)(2 + x)² ]**!
For every **x > −1**:
- Numerator **x² ≥ 0**
- Denominator **(1 + x) > 0** and **(2 + x)² > 0**!
Hence **dy/dx ≥ 0** for all x > −1 (and = 0 only at the single point x = 0), so y is **increasing throughout x > −1**!

Jaanch: At x = 1: dy/dx = 1 / (2 × 9) = 1/18 > 0; at x = −1/2: (1/4) / ((1/2)(9/4)) = 2/9 > 0 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **f'(x) = 0 par aane par bol dena ki function strictly increasing nahi ho sakta:**
   - *Galat:* f(x) = x³ ka f'(0) = 0 hai toh x³ strictly increasing nahi hai.
   - *Sahi:* Agar f'(x) sirf isolated points par 0 ho aur baaki har jagah > 0 ho (jaise 3x² ≥ 0), toh **f(x) = x³ poore R par strictly increasing** hai!

2. **Union symbol ∪ ki jagah comma ya single interval likh dena:**
   - *Galat:* x² − 1 ke liye f'(x) = 2x ko (−∞, 0) aur (0, ∞) mix kar dena.
   - *Sahi:* Hamesha sign chart banakar positive intervals ko **Increasing** aur negative intervals ko **Decreasing** mein clearly likho!

---

## Quick Recap

- **f'(x) > 0** on I ⇒ Strictly Increasing; **f'(x) < 0** on I ⇒ Strictly Decreasing.
- **Steps:** Find f'(x) → factor → critical points (f' = 0) → sign chart!
- **Constant sign with isolated zeros** (like f'(x) = 3x² ≥ 0) still gives a strictly increasing function!

---

## Practice Questions

1. Show that **f(x) = 3x + 17** is strictly increasing on R.
2. Show that **f(x) = e^(2x)** is strictly increasing on R.
3. Find the intervals in which **f(x) = x² − 4x + 6** is strictly increasing or strictly decreasing.
4. Find the intervals in which **f(x) = 2x³ − 3x² − 12x + 5** is strictly increasing or strictly decreasing.
5. Find the intervals in which **f(x) = −2x³ − 9x² − 12x + 1** is strictly increasing or strictly decreasing.
6. Prove that **f(x) = x³ − 3x² + 3x − 100** is increasing on R.
7. Find the values of x for which **y = [x(x − 2)]²** is an increasing function.
8. Prove that **y = [4 sin θ / (2 + cos θ)] − θ** is an increasing function of θ on **[0, π/2]**.
9. Find the least value of **a** such that **f(x) = x² + ax + 1** is strictly increasing on **(1, 2)**.
10. Show that **f(x) = cos x** is strictly decreasing on (0, π), strictly increasing on (π, 2π), and neither increasing nor decreasing on (0, 2π).

---

### Answers

1. f'(x) = 3 > 0 for all x ∈ R ⇒ strictly increasing on R.
2. f'(x) = 2e^(2x) > 0 for all x ∈ R ⇒ strictly increasing on R.
3. f'(x) = 2x − 4 = 2(x − 2). Critical point x = 2:
   - Strictly increasing: **(2, ∞)**; Strictly decreasing: **(−∞, 2)**.
4. f'(x) = 6x² − 6x − 12 = 6(x − 2)(x + 1). Critical points x = −1, 2:
   - Strictly increasing: **(−∞, −1) ∪ (2, ∞)**; Strictly decreasing: **(−1, 2)**.
   Jaanch: At x = 0: f'(0) = −12 < 0 (decreasing on (−1, 2)) ✅
5. f'(x) = −6x² − 18x − 12 = −6(x + 1)(x + 2). Critical points x = −2, −1:
   - Strictly increasing: **(−2, −1)**; Strictly decreasing: **(−∞, −2) ∪ (−1, ∞)**.
   Jaanch: At x = −1.5: −6(−0.5)(+0.5) = +1.5 > 0 ✅
6. f'(x) = 3x² − 6x + 3 = **3(x − 1)² ≥ 0** for all x ∈ R ⇒ increasing on R!
7. y = (x² − 2x)² ⇒ dy/dx = 2(x² − 2x)(2x − 2) = **4x(x − 1)(x − 2)**.
   Critical points: 0, 1, 2. Sign chart:
   - (−∞, 0): − ; **(0, 1): +** ; (1, 2): − ; **(2, ∞): +**.
   Increasing on **(0, 1) ∪ (2, ∞)**!
   Jaanch: At x = 1/2: 4(1/2)(−1/2)(−3/2) = +3/2 > 0; at x = 3: 4(3)(2)(1) = +24 > 0 ✅
8. dy/dθ = [4 cos θ(2 + cos θ) − 4 sin θ(−sin θ)] / (2 + cos θ)² − 1
   = [8 cos θ + 4 − (4 + 4 cos θ + cos²θ)] / (2 + cos θ)² = **[cos θ (4 − cos θ)] / (2 + cos θ)²**.
   On [0, π/2], cos θ ≥ 0 and 4 − cos θ ≥ 3 > 0 ⇒ **dy/dθ ≥ 0** ⇒ increasing on [0, π/2]!
9. f'(x) = 2x + a. For strictly increasing on (1, 2), we need 2x + a > 0 for all x ∈ (1, 2).
   Minimum of 2x + a on (1, 2) approaches 2(1) + a = 2 + a. Setting 2 + a ≥ 0 ⇒ **a ≥ −2**.
   Least value of a = **−2**!
   Jaanch: At a = −2, f'(x) = 2(x − 1) > 0 for every x ∈ (1, 2) ✅
10. f'(x) = −sin x: negative on (0, π) ⇒ strictly decreasing; positive on (π, 2π) ⇒ strictly increasing; changes sign inside (0, 2π) ⇒ neither!

---

Ab tum sign charts aur f'(x) ki madad se kisi bhi function ke increasing aur decreasing intervals bilkul accurately nikal sakte ho!

**Agle topic mein:** Hum [Tangents and Normals](application-of-derivatives-part3.md) padhenge — jahan curve ke kisi point par tangent, normal aur do curves ke **orthogonal intersection** ki conditions seekhenge!
