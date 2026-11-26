> **Class:** 12 | **Subject:** Mathematics | **Chapter 1:** Relations and Functions (Part 3)

# Composition of Functions and Invertible Functions

> **Pichle topic mein:** Humne [Types of Functions: One-One, Onto and Bijective](relations-and-functions-part2.md) padha. Ab hum dekhenge ki do functions ko ek ke baad ek kaise lagate hain (**Composition: g ∘ f**), aur kisi function ka ulta (**Inverse: f⁻¹**) kab exist karta hai aur kaise nikala jata hai!

---

Kumkum ek clothing store ke billing counter par thi jahan ₹1000 ki jacket par do offers ek saath mil rahe the: Offer f = **10% discount** (f(x) = 0.9x), aur Offer g = **₹50 flat cashback** (g(x) = x − 50). Kumkum ne check kiya:
- Pehle 10% discount, phir ₹50 off: **g(f(1000))** = g(900) = **₹850**!
- Pehle ₹50 off, phir 10% discount: **f(g(1000))** = f(950) = **₹855**!
Order badalne se final bill badal gaya — matlab **g ∘ f ≠ f ∘ g** (composition commutative nahi hoti)!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Composition of Functions (g ∘ f)** | Pehle f lagao, phir uske output par g lagao: **(g ∘ f)(x) = g(f(x))** (defined jab Range(f) ⊆ Domain(g)) |
| **Identity Function (I_A)** | Woh function jo har input ko bilkul waisa hi wapas de de: I_A(x) = x, ∀ x ∈ A |
| **Invertible Function** | Woh function f: A → B jiske liye ek function g: B → A exist kare such that **g ∘ f = I_A** aur **f ∘ g = I_B** (tab g = **f⁻¹**) |

---

## 1. Composition of Functions (g ∘ f)

Let f: A → B and g: B → C. Then **g ∘ f: A → C** is defined by:
**(g ∘ f)(x) = g(f(x))** for all x ∈ A.

### Key Properties of Composition:
1. **NOT Commutative in general:** g ∘ f ≠ f ∘ g.
2. **ALWAYS Associative:** **h ∘ (g ∘ f) = (h ∘ g) ∘ f**.
3. **Preserves injectivity/surjectivity:**
   - If f and g are both one-one ⇒ g ∘ f is one-one.
   - If f and g are both onto ⇒ g ∘ f is onto.
   - **Reverse traps:** If g ∘ f is one-one ⇒ **f MUST be one-one** (g need not be!). If g ∘ f is onto ⇒ **g MUST be onto** (f need not be!).

---

## 2. Invertible Functions (f⁻¹)

**Fundamental Theorem:** A function f: A → B is **invertible IF AND ONLY IF f is BIJECTIVE** (both one-one and onto)!
- Also, if f⁻¹ exists, it is **UNIQUE**.
- **Reversal (Shoes-and-Socks) Rule:** If f: A → B and g: B → C are invertible, then g ∘ f is invertible and:
  **(g ∘ f)⁻¹ = f⁻¹ ∘ g⁻¹**!
  *(Jaise pehle moja (f) phir joota (g) pehna, toh utarte waqt pehle joota (g⁻¹) phir moja (f⁻¹) utarna padta hai!)*

### 3-Step Method to Find f⁻¹(y):
1. Set **y = f(x)**.
2. Solve algebraically for **x in terms of y** → call this expression **g(y)**.
3. Verify **(g ∘ f)(x) = x** and **(f ∘ g)(y) = y** → then **f⁻¹(y) = g(y)**!

---

## Solved Examples

### Example 1: Computing g ∘ f and f ∘ g
Let f: R → R be f(x) = 8x³ and g: R → R be g(x) = x¹/³. Find (g ∘ f)(x) and (f ∘ g)(x).

**Solution:**
- **(g ∘ f)(x)** = g(f(x)) = g(8x³) = (8x³)¹/³ = **2x**.
- **(f ∘ g)(x)** = f(g(x)) = f(x¹/³) = 8(x¹/³)³ = **8x**.
Notice g ∘ f (2x) ≠ f ∘ g (8x)!

Jaanch: At x = 1: (g ∘ f)(1) = g(8) = 2 = 2(1); (f ∘ g)(1) = f(1) = 8 = 8(1) ✅

---

### Example 2: Finding the Inverse of a Rational Function (Self-Inverse!)
Show that f: R − {2/3} → R − {2/3} defined by **f(x) = (4x + 3) / (6x − 4)** is invertible and find f⁻¹(x).

**Solution:**
Let y = (4x + 3) / (6x − 4).
y(6x − 4) = 4x + 3 → 6xy − 4y = 4x + 3 → x(6y − 4) = 4y + 3
**x = (4y + 3) / (6y − 4)**!
Notice that g(y) = (4y + 3) / (6y − 4) has the **exact same formula as f**!
Verify (f ∘ f)(x):
f(f(x)) = [4(4x+3)/(6x−4) + 3] / [6(4x+3)/(6x−4) − 4]
= [16x + 12 + 18x − 12] / [24x + 18 − 24x + 16]
= 34x / 34 = **x**!
Hence f is invertible and **f⁻¹(x) = (4x + 3) / (6x − 4) = f(x)**!

Jaanch: At x = 1: f(1) = 7/2 = 3.5; f(3.5) = (14 + 3)/(21 − 4) = 17/17 = 1 ✅

---

### Example 3: Inverse of a Restricted Quadratic Function
Consider f: R⁺ → [4, ∞) given by **f(x) = x² + 4**. Show that f is invertible with **f⁻¹(y) = √(y − 4)**.

**Solution:**
Let y ∈ [4, ∞). Set y = x² + 4 → x² = y − 4.
Since domain is **R⁺** (x ≥ 0), take the **positive square root**: **x = √(y − 4)** = g(y).
Verify:
- (g ∘ f)(x) = g(x² + 4) = √[(x² + 4) − 4] = √(x²) = **x** (since x ≥ 0!).
- (f ∘ g)(y) = f(√(y − 4)) = [√(y − 4)]² + 4 = (y − 4) + 4 = **y**.
Hence f is invertible and **f⁻¹(y) = √(y − 4)**!

Jaanch: At x = 3: f(3) = 13; f⁻¹(13) = √(13 − 4) = √9 = 3 ✅

---

### Example 4: Inverse of a Completing-the-Square Quadratic
Show that f: R⁺ → [−5, ∞) defined by **f(x) = 9x² + 6x − 5** is invertible and find f⁻¹(y).

**Solution:**
Complete the square:
y = 9x² + 6x − 5 = (3x + 1)² − 6
(3x + 1)² = y + 6.
Since x ≥ 0, 3x + 1 ≥ 1 > 0, take positive root:
3x + 1 = √(y + 6) → **x = [√(y + 6) − 1] / 3**.
Check g(f(x)) = [√((3x + 1)² − 6 + 6) − 1] / 3 = (3x + 1 − 1) / 3 = **x**.
Check f(g(y)) = [3 × (√(y + 6) − 1)/3 + 1]² − 6 = (√(y + 6))² − 6 = **y**.
Therefore, **f⁻¹(y) = [√(y + 6) − 1] / 3**!

Jaanch: At x = 2: f(2) = 36 + 12 − 5 = 43; f⁻¹(43) = (√49 − 1)/3 = (7 − 1)/3 = 2 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **(g ∘ f)(x) ko f(g(x)) samajh lena:**
   - *Galat:* (g ∘ f)(x) mein pehle g lagana.
   - *Sahi:* Hamesha **right-to-left (andar se bahar)** padho: **(g ∘ f)(x) = g(f(x))** — pehle f, phir g!

2. **(g ∘ f)⁻¹ ko g⁻¹ ∘ f⁻¹ likh dena:**
   - *Galat:* Inverse seedha distribute kar dena.
   - *Sahi:* Order **reverse** hota hai: **(g ∘ f)⁻¹ = f⁻¹ ∘ g⁻¹**!

3. **f⁻¹(x) ko 1 / f(x) samajh lena:**
   - *Galat:* f(x) = 2x + 3 ka inverse 1/(2x + 3) likh dena.
   - *Sahi:* f⁻¹ **inverse function** hai, reciprocal nahi! 2x + 3 ka inverse **(x − 3)/2** hota hai!

---

## Quick Recap

- **(g ∘ f)(x) = g(f(x))**; associative, NOT generally commutative.
- **Invertible ⇔ Bijective** (unique inverse f⁻¹).
- **Verification:** g ∘ f = I_A AND f ∘ g = I_B.
- **Reversal law:** **(g ∘ f)⁻¹ = f⁻¹ ∘ g⁻¹**.

---

## Practice Questions

1. Let f(x) = |x| and g(x) = |5x − 2|. Find (g ∘ f)(x) and (f ∘ g)(x).
2. Let f = {(1, 2), (3, 5), (4, 1)} and g = {(2, 3), (5, 1), (1, 3)}. Write g ∘ f as a set of ordered pairs.
3. If f(x) = (3 − x³)¹/³, find (f ∘ f)(x).
4. Find the inverse of f: R → R defined by f(x) = 4x + 3 and verify f ∘ f⁻¹ = I_R.
5. Show that f: R → R defined by f(x) = (3x + 4) / 5 is invertible and find f⁻¹(x).
6. Consider f: R⁺ → [15, ∞) given by f(x) = 4x² + 12x + 15. Show that f is invertible and find f⁻¹(y).
7. Let f: {1, 2, 3} → {a, b, c} be f(1) = a, f(2) = b, f(3) = c. Find f⁻¹ and show that (f⁻¹)⁻¹ = f.
8. If f(x) = 2x + 1 and g(x) = x − 3 on R, find (g ∘ f)⁻¹(x) and verify that (g ∘ f)⁻¹ = f⁻¹ ∘ g⁻¹.
9. Let f(x) = x² and g(x) = 2x + 1. Compute (f ∘ g)(2) and (g ∘ f)(2). Are they equal?
10. State whether f: R → R given by f(x) = x² + 5 is invertible. Give reason.

---

### Answers

1. (g ∘ f)(x) = g(|x|) = **|5|x| − 2|**; (f ∘ g)(x) = f(|5x − 2|) = ||5x − 2|| = **|5x − 2|**.
2. f(1)=2 → g(2)=3; f(3)=5 → g(5)=1; f(4)=1 → g(1)=3.
   **g ∘ f = {(1, 3), (3, 1), (4, 3)}**.
3. f(f(x)) = [3 − ((3 − x³)¹/³)³]¹/³ = [3 − (3 − x³)]¹/³ = (x³)¹/³ = **x**!
   Jaanch: At x = 1: f(1) = 2¹/³; f(2¹/³) = (3 − 2)¹/³ = 1 ✅
4. y = 4x + 3 ⇒ **f⁻¹(y) = (y − 3)/4**.
   Jaanch: f((y − 3)/4) = 4[(y − 3)/4] + 3 = y − 3 + 3 = y ✅
5. y = (3x + 4)/5 ⇒ 3x = 5y − 4 ⇒ **f⁻¹(x) = (5x − 4)/3**.
   Jaanch: At x = 2: f(2) = 10/5 = 2; f⁻¹(2) = (10 − 4)/3 = 2 ✅
6. y = 4x² + 12x + 15 = (2x + 3)² + 6 (note: at x = 0, y = 15, so y − 6 ≥ 9!).
   (2x + 3)² = y − 6 ⇒ 2x + 3 = √(y − 6) (since x ≥ 0) ⇒ **f⁻¹(y) = [√(y − 6) − 3] / 2**.
   Jaanch: At x = 1: f(1) = 4 + 12 + 15 = 31; f⁻¹(31) = (√25 − 3)/2 = (5 − 3)/2 = 1 ✅
7. **f⁻¹ = {(a, 1), (b, 2), (c, 3)}**. Reversing pairs again gives {(1, a), (2, b), (3, c)} = **f**!
8. (g ∘ f)(x) = (2x + 1) − 3 = 2x − 2 ⇒ **(g ∘ f)⁻¹(x) = (x + 2)/2**.
   Now f⁻¹(x) = (x − 1)/2, g⁻¹(x) = x + 3 ⇒ (f⁻¹ ∘ g⁻¹)(x) = f⁻¹(x + 3) = [(x + 3) − 1]/2 = **(x + 2)/2**. Identical!
   Jaanch: At x = 4: (g ∘ f)⁻¹(4) = 3; (f⁻¹ ∘ g⁻¹)(4) = f⁻¹(7) = 3 ✅
9. (f ∘ g)(2) = f(5) = **25**; (g ∘ f)(2) = g(4) = **9**. Not equal (25 ≠ 9)!
10. **Not invertible** — because f(−1) = f(1) = 6 (not one-one) and negative numbers have no pre-image (not onto).

---

Ab tum kisi bhi composite function ko evaluate aur kisi bhi bijective function ka exact inverse nikal sakte ho!

**Agle topic mein:** Hum [Binary Operations](relations-and-functions-part4.md) padhenge — jahan + aur × ki tarah naye custom operations (*) ki commutativity, associativity, identity aur inverse check karenge!
