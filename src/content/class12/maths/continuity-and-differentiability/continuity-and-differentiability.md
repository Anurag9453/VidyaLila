> **Class:** 12 | **Subject:** Mathematics | **Chapter 5:** Continuity and Differentiability

# Continuity and Its Algebra

> **Pichle chapter mein:** Humne [Determinants — Mixed Problems & Wrap-up](../determinants/determinants-part5.md) ke saath Linear Algebra complete kiya. **Class 11 bridge:** Limits (LHL, RHL, aur standard limits jaise lim_(x→0) (sin x)/x = 1) aur basic differentiation hum [Limits and Derivatives](../../../class11/maths/limits-and-derivatives/limits-and-derivatives.md) mein padh chuke hain — ab hum Class 12 Calculus ka pehla pillar, **Continuity and Differentiability**, shuru kar rahe hain!

---

Bharati post office mein parcel bhejne gayi thi aur rate chart dekh kar muskurayi: 0 se 50 g tak ₹10, 50 g se 100 g tak achanak ₹20, 100 g se 150 g tak achanak ₹30! Graph par 50 g aur 100 g par **achanak jump (toot)** aa raha tha — bina pen uthaye graph nahi khinch sakte! Doosri taraf railway track bilkul smooth aur unbroken hota hai — wahi hai **Continuity** ka intuitive matlab: bina pen uthaye graph khinchna!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Continuous at x = c** | Jab x = c par **LHL = RHL = f(c)** (teeno finite aur barabar hon!) |
| **Point of Discontinuity** | Woh point x = c jahan LHL ≠ RHL, ya limit ≠ f(c), ya f(c) undefined ho |
| **Continuous Function** | Woh function jo apne domain ke **har ek point** par continuous ho (jaise polynomials, sin x, cos x, eˣ) |

---

## 1. Exact Mathematical Definition of Continuity at x = c

A function f(x) is **continuous at x = c** IF AND ONLY IF:
**lim_(x→c⁻) f(x) = lim_(x→c⁺) f(x) = f(c)**  (i.e., **LHL = RHL = f(c)**, all finite!).

- **Substitute h → 0⁺ method:**
  - **LHL** = lim_(h→0) f(c − h)
  - **RHL** = lim_(h→0) f(c + h)
- **Important Continuous Functions (Everywhere on their domains):**
  - Constant functions, Polynomials, sin x, cos x, eˣ, |x| (everywhere on R).
  - Rational functions p(x)/q(x) (continuous everywhere except where q(x) = 0).
  - tan x, sec x (continuous on their domains, i.e., excluding odd multiples of π/2).
- **Famous Discontinuous Function:** **Greatest Integer Function f(x) = [x]** is **discontinuous at EVERY integer c ∈ Z**!
  *(Proof: LHL = lim_(h→0) [c − h] = c − 1, whereas RHL = lim_(h→0) [c + h] = c. Since c − 1 ≠ c, discontinuous at every integer!)*

---

## 2. Algebra & Composition of Continuous Functions

If f and g are continuous at x = c, then:
1. **f ± g**, **f · g**, and **k·f** are continuous at x = c.
2. **f / g** is continuous at x = c provided **g(c) ≠ 0**.
3. **Composition (f ∘ g):** If g is continuous at c and f is continuous at g(c), then **f(g(x))** is continuous at c! (e.g., sin(x²), |cos x|, cos(|x|) are continuous everywhere on R!).

---

## Solved Examples

### Example 1: Finding Unknown Constant k for Continuity
Find the value of **k** so that the function:
- f(x) = (k cos x) / (π − 2x),   if x ≠ π/2
- f(x) = 3,   if x = π/2
is continuous at **x = π/2**.

**Solution:**
For continuity at x = π/2, we need **lim_(x→π/2) f(x) = f(π/2) = 3**.
Put **x = π/2 + h** (as x → π/2, h → 0):
- Numerator: k cos(π/2 + h) = **−k sin h**
- Denominator: π − 2(π/2 + h) = **−2h**
Limit = lim_(h→0) (−k sin h) / (−2h) = (k/2) × lim_(h→0) (sin h / h) = (k/2) × 1 = **k/2**.
Set k/2 = 3 ⇒ **k = 6**!

Jaanch: At k = 6, lim_(h→0) (6 sin h)/(2h) = 3(1) = 3 = f(π/2) ✅

---

### Example 2: Finding Two Constants a and b in a Piecewise Function
Find **a** and **b** such that:
- f(x) = 5,   if x ≤ 2
- f(x) = ax + b,   if 2 < x < 10
- f(x) = 21,   if x ≥ 10
is a continuous function everywhere on R.

**Solution:**
Check continuity at the two junction points **x = 2** and **x = 10**:
1. **At x = 2:** LHL = f(2) = 5; RHL = lim_(x→2⁺) (ax + b) = 2a + b.
   Equating: **2a + b = 5**   ... (1)
2. **At x = 10:** LHL = lim_(x→10⁻) (ax + b) = 10a + b; RHL = f(10) = 21.
   Equating: **10a + b = 21**   ... (2)
Subtract (1) from (2): 8a = 16 ⇒ **a = 2**.
Substitute in (1): 2(2) + b = 5 ⇒ **b = 1**.
So **a = 2, b = 1**!

Jaanch: f(x) = 2x + 1 on (2, 10) gives 2(2)+1 = 5 at x = 2 and 2(10)+1 = 21 at x = 10 ✅

---

### Example 3: Proving Discontinuity of x − [x] at Every Integer
Show that **g(x) = x − [x]** (the fractional part function) is discontinuous at all integral points.

**Solution:**
Let c be any integer (c ∈ Z):
- **LHL:** lim_(h→0) [(c − h) − [c − h]] = c − (c − 1) = **1**.
- **RHL:** lim_(h→0) [(c + h) − [c + h]] = c − c = **0**.
Since **LHL (1) ≠ RHL (0)**, g(x) is **discontinuous at EVERY integer c ∈ Z**!

Jaanch: Just before x = 2 (e.g., 1.99), g(1.99) = 0.99 → 1; at x = 2.01, g(2.01) = 0.01 → 0 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Sirf limit = f(c) check karna bina LHL aur RHL alag se check kiye (modulus ya piecewise mein!):**
   - *Galat:* f(x) = |x|/x mein seedha x/x = 1 likh kar limit = 1 bol dena.
   - *Sahi:* Modulus aur greatest integer mein **LHL aur RHL alag-alag** nikalo! |x|/x ke liye LHL = −1 aur RHL = +1 (limit hi exist nahi karti!).

2. **[c − h] ko c likh dena:**
   - *Galat:* c = 3 ke liye [3 − h] = 3.
   - *Sahi:* 3 se zara sa chhota (2.999) ka greatest integer **2 (= c − 1)** hota hai!

---

## Quick Recap

- **Continuity at x = c:** **LHL = RHL = f(c)** (all finite).
- **Always continuous:** Polynomials, sin x, cos x, eˣ, |x|, and their compositions.
- **Greatest integer [x]:** Discontinuous at every integer c ∈ Z (LHL = c − 1, RHL = c).

---

## Practice Questions

1. Test the continuity of f(x) = 2x + 3 (for x ≤ 2) and 2x − 3 (for x > 2) at x = 2.
2. Find all points of discontinuity of f(x) = |x| / x (for x ≠ 0) and f(0) = 0.
3. Find the value of **k** so that f(x) = kx² (for x ≤ 2) and f(x) = 3 (for x > 2) is continuous at x = 2.
4. Find the value of **k** so that f(x) = kx + 1 (for x ≤ π) and cos x (for x > π) is continuous at x = π.
5. Find the value of **k** so that f(x) = (1 − cos 4x) / (8x²) (for x ≠ 0) and f(0) = k is continuous at x = 0.
6. Find the relationship between **a** and **b** so that f(x) = ax + 1 (for x ≤ 3) and bx + 3 (for x > 3) is continuous at x = 3.
7. Show that f(x) = sin(x²) and g(x) = |cos x| are continuous functions everywhere on R.
8. Find the value of **λ** for which f(x) = λ(x² − 2x) (for x ≤ 0) and 4x + 1 (for x > 0) is continuous at x = 0.
9. Test the continuity of f(x) = x sin(1/x) (for x ≠ 0) and f(0) = 0 at x = 0.
10. Find **a** and **b** if f(x) = (x² − 4)/(x − 2) for x < 2, f(x) = ax² − bx + 3 for 2 ≤ x < 3, and f(x) = 2x − a + b for x ≥ 3 is continuous on R.

---

### Answers

1. LHL = 2(2) + 3 = 7; RHL = 2(2) − 3 = 1. Since 7 ≠ 1, **discontinuous at x = 2**.
2. At x = 0: LHL = lim_(x→0⁻) (−x)/x = −1; RHL = lim_(x→0⁺) x/x = +1. Since −1 ≠ 1, **discontinuous ONLY at x = 0**.
3. LHL = f(2) = 4k; RHL = 3 ⇒ 4k = 3 ⇒ **k = 3/4**.
   Jaanch: (3/4)(2²) = 3 ✅
4. LHL = f(π) = kπ + 1; RHL = cos π = −1 ⇒ kπ + 1 = −1 ⇒ **k = −2/π**.
   Jaanch: (−2/π)π + 1 = −2 + 1 = −1 = cos π ✅
5. 1 − cos 4x = 2 sin²(2x).
   Limit = lim_(x→0) [2 sin²(2x)] / (8x²) = lim_(x→0) [sin(2x) / (2x)]² = 1² = **1** ⇒ **k = 1**!
   Jaanch: 2(2x)² / (8x²) = 8x² / 8x² = 1 ✅
6. LHL = 3a + 1; RHL = 3b + 3 ⇒ 3a + 1 = 3b + 3 ⇒ **a − b = 2/3** (or 3a − 3b = 2).
7. Both are compositions of continuous functions: x² and sin x are continuous on R ⇒ sin(x²) continuous; cos x and |x| are continuous on R ⇒ |cos x| continuous.
8. LHL = f(0) = λ(0) = **0**; RHL = 4(0) + 1 = **1**. Since 0 ≠ 1 for ALL real λ, **NO value of λ** makes f continuous at x = 0!
9. Since −1 ≤ sin(1/x) ≤ 1, we have −|x| ≤ x sin(1/x) ≤ |x|. As x → 0, by Squeeze Theorem lim_(x→0) x sin(1/x) = **0 = f(0)** → **Continuous at x = 0**!
10. - At x = 2: LHL = lim_(x→2) (x + 2) = 4; f(2) = 4a − 2b + 3 ⇒ **4a − 2b = 1**   ... (1)
    - At x = 3: LHL = 9a − 3b + 3; RHL = 6 − a + b ⇒ 10a − 4b = 3 ⇒ **10a − 4b = 3**   ... (2)
    Multiply (1) by 2: 8a − 4b = 2. Subtract from (2): 2a = 1 ⇒ **a = 1/2**.
    From (1): 4(1/2) − 2b = 1 ⇒ 2 − 2b = 1 ⇒ **b = 1/2**!
    Jaanch: At a = 1/2, b = 1/2: 4(1/2)−2(1/2)+3 = 4; 9(1/2)−3(1/2)+3 = 6 = 6 − 1/2 + 1/2 ✅

---

Ab tum continuity ke har piecewise, trig-limit aur unknown-constant problem ko bilkul cleanly solve kar sakte ho!

**Agle topic mein:** Hum [Differentiability, Chain Rule, Implicit, ITF, Exponential and Logarithmic Derivatives](continuity-and-differentiability-part2.md) padhenge — jahan **|x| continuous hote hue bhi differentiable kyun nahi hai** aur sabhi core derivative rules master karenge!
