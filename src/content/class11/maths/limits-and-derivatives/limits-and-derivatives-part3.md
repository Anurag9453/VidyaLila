# Chapter: Limits and Derivatives (Part 3)

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla topic [limits-and-derivatives-part2.md](limits-and-derivatives-part2.md) tha** (Topic 2: Polynomial, Rational, aur Trigonometric Limits).
> **Topics covered in this file:**
> 1. Derivative of a Function (Geometric Meaning & First Principles) Aur Algebra of Derivatives (Sum, Product, Quotient Rules)

---

# Topic 3: Derivative of a Function Aur Algebra of Derivatives

Topic 1 aur Topic 2 mein humne Limits ko poore confidence ke saath solve karna seekh liya. Ab Calculus ke doosre aur sabse famous hisse — **Derivative** — ki baari hai!

Derivative ka seedha matlab hai: kisi bhi curved graph ke kisi ek point par **tangent line ka exact slope** (ya kisi function ka **instantaneous rate of change**)! Is topic mein hum **First Principles** se derivatives nikaalenge aur **Sum, Product (Leibniz), aur Quotient Rules** derive karenge!

---

## Barkha ka roller-coaster track slope

Barkha ek amusement park ke liye roller-coaster track design kar rahi hai. Track ke ek curved hill ki height formula se di gayi hai:
**y = f(x) = x² + 3x**

Safety inspection ke liye Barkha ko exact **x = 4 meter** par track ka steepness (tangent slope) batana tha. Straight line hoti to (y₂ - y₁)/(x₂ - x₁) se slope nikal aata, par yeh ek curve hai jahan har point par slope badal raha hai!

Barkha ne **First Principles** lagaya:
Usne point P(4, f(4)) aur behad nazdeeki point Q(4 + h, f(4 + h)) ko jodne wali secant chord ka slope likha:
[f(4 + h) - f(4)] / h = [((4 + h)² + 3(4 + h)) - 28] / h = (11h + h²) / h = 11 + h

Jaise hi h -> 0, secant chord exact **tangent line** ban gayi, aur slope nikla **11**!

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Secant Line** | Curve ke do points P(x, f(x)) aur Q(x + h, f(x + h)) ko jodne wali line | Slope = [f(x + h) - f(x)] / h |
| **Tangent Line** | Curve ko sirf ek point P par chhookar guzarne wali line (secant ki limit jab h -> 0) | Slope = f'(x) |
| **Derivative (f'(x) ya dy/dx)** | Function ka instantaneous rate of change: lim_{h->0} [f(x + h) - f(x)] / h | d/dx(x²) = 2x |
| **First Principles (ab initio)** | Direct limit definition se derivative nikaalne ka basic tareeka | lim_{h->0} [f(x + h) - f(x)] / h |
| **Product / Leibniz Rule** | Do functions ke product (u · v) ka derivative: u'v + uv' | [(x² + 1)(3x - 2)]' |
| **Quotient Rule** | Do functions ke ratio (u / v) ka derivative: (u'v - uv') / v² | [(2x + 3)/(x - 1)]' |

---

## Part A: Geometric Meaning Aur First Principles Definition

```
            y
            ^          . * Q(x + h, f(x + h))
            :        . /
            :      .  / Secant (h -> 0 => Tangent!)
            :    *   /
            :   P(x, f(x))
            :  /
   ---------+--+---------+-----> x
            O  x       x + h
```

Kisi bhi function y = f(x) ka **Derivative** (jise **f'(x)**, **dy/dx**, ya **d/dx[f(x)]** likhte hain) is limit se define hota hai:

**f'(x) = lim_{h->0} [ f(x + h) - f(x) ] / h**   *(provided yeh limit exist karti hai!)*

- Kisi khaas point x = a par derivative: **f'(a) = lim_{h->0} [f(a + h) - f(a)] / h** = point (a, f(a)) par tangent ka slope!
- **Constant function f(x) = c ka derivative:**
  f'(x) = lim_{h->0} (c - c) / h = lim_{h->0} 0 = **0**! (Kyunki constant badalta hi nahi — uska rate of change 0 hai!)

---

## Part B: Algebra Of Derivatives (With "Kyun"!)

Maan lo u(x) aur v(x) do differentiable functions hain. Tab:

1. **Constant Multiple Rule:** **(c · u)' = c · u'**
2. **Sum & Difference Rule:** **(u ± v)' = u' ± v'**
   *(Kyun? First principles mein [(u(x + h) ± v(x + h)) - (u(x) ± v(x))] / h = [u(x + h) - u(x)]/h ± [v(x + h) - v(x)]/h -> u' ± v'!)*
3. **Product Rule (Leibniz Rule):**
   **(u · v)' = u' · v + u · v'**
   *(Kyun? Numerator u(x + h)v(x + h) - u(x)v(x) mein u(x)v(x + h) jodo aur ghatao:*
   *[u(x + h) - u(x)]/h · v(x + h) + u(x) · [v(x + h) - v(x)]/h.*
   *h -> 0 karne par pehla part u' · v aur doosra part u · v' ban jata hai!)*
4. **Quotient Rule (jahan v(x) ≠ 0):**
   **(u / v)' = (u' · v - u · v') / v²**
   *(Yaad rakhne ki trick: "Pehle upar wale ka derivative × neeche wala MINUS upar wala × neeche wale ka derivative, divided by neeche wale ka square!")*

---

## Solved Examples (Step-by-Step With Jaanch)

### Example 3.1: Derivative From First Principles (Quadratic)
**Sawaal:** First Principles se f(x) = x² + 3x ka derivative gyat karo, aur f'(4) nikaalo.

**Solution:**
f(x) = x² + 3x
f(x + h) = (x + h)² + 3(x + h) = x² + 2xh + h² + 3x + 3h

f'(x) = lim_{h->0} [f(x + h) - f(x)] / h
= lim_{h->0} [(x² + 2xh + h² + 3x + 3h) - (x² + 3x)] / h
= lim_{h->0} (2xh + h² + 3h) / h
= lim_{h->0} (2x + h + 3)   *(h cancel!)*
= **2x + 3**.

Ab x = 4 rakho:
f'(4) = 2(4) + 3 = **11**.

Jaanch:
- Jaanch: f(4) = 28, f(4.001) = 16.008001 + 12.003 = 28.011001 => (28.011001 - 28)/0.001 = 11.001 -> 11 ✅

---

### Example 3.2: Derivative From First Principles (Reciprocal Function)
**Sawaal:** First Principles se f(x) = 1 / x (x ≠ 0) ka derivative gyat karo.

**Solution:**
f'(x) = lim_{h->0} [ 1/(x + h) - 1/x ] / h
= lim_{h->0} [ (x - (x + h)) / (x(x + h)) ] / h
= lim_{h->0} [ -h / (h · x(x + h)) ]
= lim_{h->0} [ -1 / (x(x + h)) ]   *(h cancel!)*
= -1 / [x(x + 0)] = **-1 / x²**.

Jaanch:
- Jaanch: At x = 2, f'(2) = -1/4 = -0.25; check [1/2.001 - 1/2]/0.001 ≈ -0.2499 -> -0.25 ✅

---

### Example 3.3: Using The Product Rule (Leibniz Rule)
**Sawaal:** Product Rule se y = (x² + 1)(3x - 2) ka derivative gyat karo.

**Solution:**
Yahan u = x² + 1 (so u' = 2x) aur v = 3x - 2 (so v' = 3).
Product Rule: y' = u'v + uv'
= (2x)(3x - 2) + (x² + 1)(3)
= (6x² - 4x) + (3x² + 3)
= **9x² - 4x + 3**.

Jaanch:
- Jaanch: Direct expansion check: y = 3x³ - 2x² + 3x - 2 => y' = 9x² - 4x + 3 (exact match!) ✅

---

### Example 3.4: Using The Quotient Rule
**Sawaal:** Quotient Rule se y = (2x + 3) / (x - 1) (x ≠ 1) ka derivative gyat karo.

**Solution:**
Yahan u = 2x + 3 (u' = 2) aur v = x - 1 (v' = 1).
Quotient Rule: y' = (u'v - uv') / v²
= [ 2(x - 1) - (2x + 3)(1) ] / (x - 1)²
= [ 2x - 2 - 2x - 3 ] / (x - 1)²
= **-5 / (x - 1)²**.

Jaanch:
- Jaanch: Rewrite y = 2 + 5/(x - 1); derivative of 2 is 0 and derivative of 5/(x - 1) is -5/(x - 1)² ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Product Rule ko (u · v)' = u' · v' likh dena
- **Galat soch:** "x² · x³ ka derivative = (2x) · (3x²) = 6x³."
- **Sahi samajh:** Bilkul galat! x² · x³ = x⁵ hota hai, jiska derivative **5x⁴** hai (6x³ nahi!). Product Rule hamesha **u'v + uv'** hota hai: (2x)(x³) + (x²)(3x²) = 2x⁴ + 3x⁴ = **5x⁴**!

### Galti 2: Quotient Rule mein subtraction ka order ulta kar dena
- **Galat soch:** "(u/v)' = (uv' - u'v) / v²."
- **Sahi samajh:** Numerator mein hamesha **u'v pehle** aata hai: **(u'v - uv') / v²**! Order ulta karne se poora sign galat ho jata hai!

### Galti 3: First principles mein h cancel kiye bina h = 0 rakh dena
- **Galat soch:** "lim_{h->0} [f(x + h) - f(x)]/h mein seedhe h = 0 rakha to 0/0 aa gaya!"
- **Sahi samajh:** First principles ki limit hamesha 0/0 se shuru hoti hai! Pehle numerator ko expand/simplify karke **h common nikaal kar cancel karo**, uske baad hi h = 0 rakho!

---

## Quick Recap

- **Geometric meaning:** f'(a) = slope of the tangent to y = f(x) at x = a.
- **First Principles:** f'(x) = lim_{h->0} [f(x + h) - f(x)] / h.
- **Constant Rule:** d/dx(c) = 0; **Sum/Diff:** (u ± v)' = u' ± v'.
- **Product Rule:** (u · v)' = u'v + uv'.
- **Quotient Rule:** (u / v)' = (u'v - uv') / v² (v ≠ 0).

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Find the derivative of f(x) = x² - 2 at x = 10 using First Principles.

**Solution:**
f'(10) = lim_{h->0} [f(10 + h) - f(10)] / h
= lim_{h->0} [((10 + h)² - 2) - (100 - 2)] / h
= lim_{h->0} (20h + h²) / h = lim_{h->0} (20 + h) = **20**.

Jaanch:
- Jaanch: General derivative of x² - 2 is 2x; at x = 10, 2(10) = 20 ✅

---

### Question 2
Find the derivative of f(x) = 99x at x = 100 using First Principles.

**Solution:**
f'(100) = lim_{h->0} [99(100 + h) - 99(100)] / h = lim_{h->0} (99h)/h = **99**.

Jaanch:
- Jaanch: y = 99x ek straight line hai jiska slope har jagah 99 hai ✅

---

### Question 3
Find the derivative of f(x) = x³ - 27 from First Principles.

**Solution:**
f'(x) = lim_{h->0} [((x + h)³ - 27) - (x³ - 27)] / h
= lim_{h->0} (3x²h + 3xh² + h³) / h
= lim_{h->0} (3x² + 3xh + h²) = **3x²**.

Jaanch:
- Jaanch: Constant -27 ka derivative 0 aur x³ ka 3x² ✅

---

### Question 4
Find the derivative of f(x) = (x - 1)(x - 2) from First Principles.

**Solution:**
Expand: f(x) = x² - 3x + 2.
f(x + h) - f(x) = [(x + h)² - 3(x + h) + 2] - [x² - 3x + 2] = 2xh + h² - 3h.
f'(x) = lim_{h->0} (2xh + h² - 3h) / h = lim_{h->0} (2x + h - 3) = **2x - 3**.

Jaanch:
- Jaanch: Product rule: 1·(x - 2) + (x - 1)·1 = 2x - 3 ✅

---

### Question 5
Find the derivative of f(x) = 1 / x² from First Principles.

**Solution:**
f'(x) = lim_{h->0} [1/(x + h)² - 1/x²] / h
= lim_{h->0} [x² - (x² + 2xh + h²)] / [h · x²(x + h)²]
= lim_{h->0} (-2x - h) / [x²(x + h)²]
= -2x / x⁴ = **-2 / x³**.

Jaanch:
- Jaanch: Power rule check (Topic 4 preview): d/dx(x⁻²) = -2x⁻³ = -2/x³ ✅

---

### Question 6
Find the derivative of f(x) = (x + 1) / (x - 1) from First Principles.

**Solution:**
f(x + h) - f(x) = (x + h + 1)/(x + h - 1) - (x + 1)/(x - 1)
= [(x + h + 1)(x - 1) - (x + 1)(x + h - 1)] / [(x + h - 1)(x - 1)]
= [(x² + hx - h - 1) - (x² + hx + h - 1)] / [(x + h - 1)(x - 1)]
= -2h / [(x + h - 1)(x - 1)].

Divide by h and take h -> 0:
f'(x) = **-2 / (x - 1)²**.

Jaanch:
- Jaanch: Quotient rule: [1(x - 1) - (x + 1)(1)] / (x - 1)² = -2/(x - 1)² ✅

---

### Question 7
Differentiate y = (x² - 3)(2x + 5) using the Product Rule.

**Solution:**
u = x² - 3 (u' = 2x), v = 2x + 5 (v' = 2).
y' = (2x)(2x + 5) + (x² - 3)(2)
= 4x² + 10x + 2x² - 6 = **6x² + 10x - 6**.

Jaanch:
- Jaanch: Expanded y = 2x³ + 5x² - 6x - 15 => y' = 6x² + 10x - 6 ✅

---

### Question 8
Differentiate y = (x² + 5x)(x - 4) using the Product Rule.

**Solution:**
u = x² + 5x (u' = 2x + 5), v = x - 4 (v' = 1).
y' = (2x + 5)(x - 4) + (x² + 5x)(1)
= (2x² - 3x - 20) + (x² + 5x) = **3x² + 2x - 20**.

Jaanch:
- Jaanch: Expanded y = x³ + x² - 20x => y' = 3x² + 2x - 20 ✅

---

### Question 9
Differentiate y = (3x - 1) / (2x + 5) using the Quotient Rule.

**Solution:**
u = 3x - 1 (u' = 3), v = 2x + 5 (v' = 2).
y' = [3(2x + 5) - (3x - 1)(2)] / (2x + 5)²
= [6x + 15 - 6x + 2] / (2x + 5)² = **17 / (2x + 5)²**.

Jaanch:
- Jaanch: Determinant shortcut for (ax + b)/(cx + d) is (ad - bc)/(cx + d)² = (15 - (-2))/(2x + 5)² = 17/(2x + 5)² ✅

---

### Question 10
Differentiate y = (x² + 1) / (x + 2) using the Quotient Rule.

**Solution:**
u = x² + 1 (u' = 2x), v = x + 2 (v' = 1).
y' = [2x(x + 2) - (x² + 1)(1)] / (x + 2)²
= (2x² + 4x - x² - 1) / (x + 2)² = **(x² + 4x - 1) / (x + 2)²**.

Jaanch:
- Jaanch: At x = 0, y'(0) = -1/4 ✅

---

### Question 11
Find the slope of the tangent to the curve y = 3x² - 4x + 1 at x = 2.

**Solution:**
y' = 6x - 4.
At x = 2: slope = y'(2) = 6(2) - 4 = **8**.

Jaanch:
- Jaanch: First principles at x = 2: [3(2 + h)² - 4(2 + h) + 1 - 5]/h = (8h + 3h²)/h -> 8 ✅

---

### Question 12
Differentiate y = (ax + b) / (cx + d) where ad - bc ≠ 0.

**Solution:**
u = ax + b (u' = a), v = cx + d (v' = c).
y' = [a(cx + d) - (ax + b)c] / (cx + d)²
= (acx + ad - acx - bc) / (cx + d)² = **(ad - bc) / (cx + d)²**.

Jaanch:
- Jaanch: Test with a = 2, b = 3, c = 1, d = -1 (Example 3.4): (2(-1) - 3(1))/(x - 1)² = -5/(x - 1)² ✅

---

Ab tumne First Principles aur Sum/Product/Quotient Rules ko poori tarah master kar liya hai! Agle topic [limits-and-derivatives-part4.md](limits-and-derivatives-part4.md) mein hum **Power Rule (xⁿ -> n xⁿ⁻¹)** aur sabhi **6 Trigonometric Functions** ke derivatives derive karenge!
