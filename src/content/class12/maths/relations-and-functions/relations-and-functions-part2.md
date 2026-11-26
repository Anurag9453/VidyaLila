> **Class:** 12 | **Subject:** Mathematics | **Chapter 1:** Relations and Functions (Part 2)

# Types of Functions: One-One, Onto and Bijective

> **Pichle topic mein:** Humne [Types of Relations](relations-and-functions.md) mein equivalence relations aur equivalence classes padhe. Ab hum functions ke teen sabse important categories — **One-One (Injective)**, **Onto (Surjective)**, aur **Bijective** — ko algebraic proofs aur finite-set counting formulas ke saath seekhenge!

---

Kumar apne school exam hall ka seating chart bana raha tha: 40 students (Domain A) aur 40 numbered seats (Codomain B). Rule 1: **Do students ko ek hi seat nahi mil sakti** (har student ki apni unique seat → **One-One / Injective**!). Rule 2: **Koi bhi seat khaali nahi chhootni chahiye** (har seat par koi na koi student baitha ho → **Onto / Surjective**!). Jab dono rules ek saath poore hote hain, toh perfect 1-to-1 matching banti hai — jise **Bijective Function** kehte hain!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **One-One (Injective) Function** | Jab domain ke alag-alag elements ki images bhi alag-alag hon: **f(x₁) = f(x₂) ⇒ x₁ = x₂** |
| **Many-One Function** | Woh function jo one-one NA ho (kam se kam do alag inputs ka same output aaye, jaise f(−2) = f(2) = 4) |
| **Onto (Surjective) Function** | Jab codomain ka **har element** kisi na kisi input ki image ho, yaani **Range = Codomain** |
| **Into Function** | Woh function jo onto NA ho (codomain mein kam se kam ek element khaali reh jaye: Range ⊂ Codomain) |
| **Bijective Function** | Woh function jo **One-One AUR Onto dono** ho (isi ka inverse exist karta hai!) |

---

## 1. Testing One-One (Injectivity)

**Method 1 (Algebraic — Standard for Proofs):**
Assume **f(x₁) = f(x₂)** for x₁, x₂ ∈ Domain. Simplify to see if it **uniquely forces x₁ = x₂**.
- If yes → **One-One (Injective)**.
- If you find two distinct inputs x₁ ≠ x₂ with f(x₁) = f(x₂) → **Many-One (Not Injective)**.

**Method 2 (Horizontal Line Test — Graphical):**
Agar graph ko koi horizontal line **ek se zyada baar** kaat-ti hai → **Many-One**! Agar har horizontal line max **1 baar** kaat-ti hai → **One-One**!

---

## 2. Testing Onto (Surjectivity)

**Method (Algebraic — Standard for Proofs):**
1. Take an arbitrary element **y ∈ Codomain**.
2. Set **f(x) = y** and solve for **x in terms of y**.
3. Check whether this **x belongs to the Domain** for **EVERY y ∈ Codomain**!
   - If yes → **Onto (Surjective)** (and verify f(x) = y!).
   - If even ONE y ∈ Codomain has no valid pre-image x in the Domain → **Not Onto (Into)**.

---

## 3. Domain & Codomain Magic: Same Formula f(x) = x², 4 Different Results!

| Function f(x) = x² | One-One? | Onto? | Reason |
|---|---|---|---|
| **f: N → N** | **Yes** (x₁² = x₂² ⇒ x₁ = x₂ since x > 0) | **No** (y = 2 has no natural pre-image √2 ∉ N) | Injective only |
| **f: Z → Z** | **No** (f(−1) = f(1) = 1) | **No** (y = −1 has no pre-image) | Neither |
| **f: R → R** | **No** (f(−2) = f(2) = 4) | **No** (negative numbers not in range [0, ∞)) | Neither |
| **f: [0, ∞) → [0, ∞)** | **Yes** (non-negative inputs!) | **Yes** (every y ≥ 0 has x = √y ≥ 0!) | **Bijective!** |

---

## 4. Counting Functions Between Finite Sets (|A| = m, |B| = n)

1. **Total number of functions from A to B:** **nᵐ**
2. **Number of One-One (Injective) functions from A to B:**
   - If **m > n:** **0** (Pigeonhole Principle — zyada students, kam seats!).
   - If **m ≤ n:** **ⁿPₘ = n! / (n − m)!**
3. **Number of Bijective functions from A to B:**
   - Exists ONLY if **m = n**, and equals **n!**
4. **Special Theorem for a FINITE set A (f: A → A):**
   Ek finite set A se khud A par bana function: **One-One ⇔ Onto!** (Agar one-one hai toh pakka onto hoga, aur onto hai toh pakka one-one hoga! *Warning: Infinite sets jaise N → N par yeh rule NAHI lagta!*)

---

## Solved Examples

### Example 1: Testing Rational Function for Bijectivity
Let A = R − {3} and B = R − {1}. Show that the function f: A → B defined by **f(x) = (x − 2) / (x − 3)** is bijective.

**Solution:**
1. **One-One:** Let f(x₁) = f(x₂) for x₁, x₂ ∈ A:
   (x₁ − 2) / (x₁ − 3) = (x₂ − 2) / (x₂ − 3)
   Cross-multiply: (x₁ − 2)(x₂ − 3) = (x₂ − 2)(x₁ − 3)
   x₁x₂ − 3x₁ − 2x₂ + 6 = x₁x₂ − 3x₂ − 2x₁ + 6
   −3x₁ − 2x₂ = −3x₂ − 2x₁ → x₂ = x₁.
   Hence **f is one-one**.

2. **Onto:** Let y ∈ B = R − {1}. Set y = (x − 2) / (x − 3):
   y(x − 3) = x − 2 → xy − 3y = x − 2 → x(y − 1) = 3y − 2
   **x = (3y − 2) / (y − 1)**
   Since y ≠ 1, x is a well-defined real number. Also check x ≠ 3: if (3y − 2)/(y − 1) = 3, then 3y − 2 = 3y − 3 ⇒ −2 = −3 (impossible!). So **x ∈ A** for every y ∈ B!
   Hence **f is onto**.

Since f is both one-one and onto, **f is bijective**!

Jaanch: Substitute x = (3y − 2)/(y − 1) into f(x): [(3y−2)/(y−1) − 2] / [(3y−2)/(y−1) − 3] = (y)/(1) = y ✅

---

### Example 2: Piecewise Function on Natural Numbers
Check whether f: N → N defined by:
- f(n) = (n + 1)/2 if n is odd
- f(n) = n/2 if n is even
is one-one and onto.

**Solution:**
- **Not One-One:** f(1) = (1 + 1)/2 = **1**, and f(2) = 2/2 = **1**. Since 1 ≠ 2 yet f(1) = f(2) = 1 → **Not one-one (many-one)**.
- **Onto:** Take ANY y ∈ N. Then **2y ∈ N** (even), and f(2y) = (2y)/2 = **y**! So every y ∈ N has a pre-image in N → **Onto**!

Jaanch: f(1)=1, f(2)=1, f(3)=2, f(4)=2 → covers all of N (onto) but hits every value twice (many-one) ✅

---

### Example 3: Counting One-One and Bijective Functions
Let A = {1, 2, 3} and B = {a, b, c, d, e}. Find: (a) total functions from A to B, (b) number of one-one functions from A to B, (c) number of onto functions from A to B.

**Solution:**
Here |A| = m = 3 and |B| = n = 5.
(a) Total functions = nᵐ = 5³ = **125**.
(b) One-one functions = ⁵P₃ = 5 × 4 × 3 = **60**.
(c) Onto functions: Since m = 3 < n = 5, at most 3 elements of B can be hit (2 elements of B must stay empty!) → **0 onto functions**!

Jaanch: 5³ = 125; 5 × 4 × 3 = 60; cannot map 3 inputs onto 5 outputs ✅

---

## Aam Galtiyan (Common Mistakes)

1. **f(x) = x² ko har jagah many-one bol dena:**
   - *Galat:* x² hamesha many-one hota hai kyunki (−1)² = 1².
   - *Sahi:* Pehle **Domain check karo!** Agar domain **N** ya **[0, ∞)** hai, toh −1 domain mein hai hi nahi → **One-One!**

2. **Onto prove karte waqt x ∈ Domain check karna bhool jana:**
   - *Galat:* f: N → N, f(x) = 2x mein x = y/2 likh kar "onto hai!" bol dena.
   - *Sahi:* Check karo kya x = y/2 ∈ N hai? Agar y = 3 ∈ N, toh x = 3/2 ∉ N! Isliye f(x) = 2x on N → N **NOT onto** hai!

3. **Greatest Integer Function f(x) = [x] ko one-one bol dena:**
   - *Galat:* [x] har number ko integer deta hai.
   - *Sahi:* [1.2] = 1 aur [1.9] = 1 → **Not one-one**; aur y = 1.5 ∈ R ki koi pre-image nahi → **Not onto**!

---

## Quick Recap

- **One-One:** f(x₁) = f(x₂) ⇒ x₁ = x₂.
- **Onto:** For every y ∈ Codomain, ∃ x ∈ Domain such that f(x) = y (Range = Codomain).
- **Bijective:** Both One-One and Onto.
- **Finite sets (|A| = m, |B| = n):** Total = nᵐ; One-one = ⁿPₘ (if m ≤ n, else 0); Bijections = n! (if m = n, else 0).
- **Finite A → A:** One-one ⇔ Onto.

---

## Practice Questions

1. Check the injectivity and surjectivity of f: R → R given by: (a) f(x) = 3 − 4x, (b) f(x) = 1 + x².
2. Show that the modulus function f: R → R given by f(x) = |x| is neither one-one nor onto.
3. Show that the greatest integer function f: R → R given by f(x) = [x] is neither one-one nor onto.
4. Show that the signum function f: R → R (f(x) = 1 for x > 0, 0 for x = 0, −1 for x < 0) is neither one-one nor onto.
5. Check whether f: N → N given by f(x) = x³ is one-one and onto. What if f: Z → Z and f: R → R?
6. Show that f: R − {2} → R − {1} defined by f(x) = (x − 1) / (x − 2) is bijective.
7. Let A = {1, 2, 3, 4} and B = {p, q, r, s}. Find the number of: (a) total functions, (b) bijective functions from A to B.
8. Show that f: N → N defined by f(n) = n + 1 (if n is odd) and f(n) = n − 1 (if n is even) is bijective!
9. Prove that f: R → R defined by f(x) = 2x + 3 is bijective.
10. Give an example of a function f: N → N which is: (a) one-one but not onto, (b) onto but not one-one.

---

### Answers

1. (a) **f(x) = 3 − 4x:** 3 − 4x₁ = 3 − 4x₂ ⇒ x₁ = x₂ (**One-one**). For any y ∈ R, x = (3 − y)/4 ∈ R (**Onto**) → **Bijective**.
   (b) **f(x) = 1 + x²:** f(−1) = f(1) = 2 (**Not one-one**); Range = [1, ∞) ≠ R (e.g., y = 0 has no pre-image → **Not onto**).
2. f(−2) = f(2) = 2 (**Not one-one**). Range = [0, ∞) ≠ R (e.g., y = −1 has no pre-image → **Not onto**).
3. f(1.1) = f(1.8) = 1 (**Not one-one**). Range = Z ≠ R (e.g., y = 0.5 has no pre-image → **Not onto**).
4. f(2) = f(5) = 1 (**Not one-one**). Range = {−1, 0, 1} ≠ R (e.g., y = 2 has no pre-image → **Not onto**).
5. - **N → N:** One-one (x₁³ = x₂³ ⇒ x₁ = x₂), Not onto (y = 2 ⇒ ∛2 ∉ N).
   - **Z → Z:** One-one, Not onto (y = 2 ⇒ ∛2 ∉ Z).
   - **R → R:** One-one AND Onto (x = ∛y ∈ R for all y ∈ R) → **Bijective!**
6. One-one: (x₁ − 1)/(x₁ − 2) = (x₂ − 1)/(x₂ − 2) ⇒ x₁x₂ − 2x₁ − x₂ + 2 = x₁x₂ − 2x₂ − x₁ + 2 ⇒ x₁ = x₂.
   Onto: y = (x − 1)/(x − 2) ⇒ **x = (2y − 1)/(y − 1)** ∈ R − {2} for all y ≠ 1 (cannot equal 2 since 2y − 1 = 2y − 2 is impossible!). Hence **Bijective**.
   Jaanch: Check f((2y−1)/(y−1)) = [(2y−1 − y+1)/(y−1)] / [(2y−1 − 2y+2)/(y−1)] = y/1 = y ✅
7. (a) Total = 4⁴ = **256**. (b) Bijective = 4! = **24**.
   Jaanch: 4⁴ = 256; 4 × 3 × 2 × 1 = 24 ✅
8. Swaps adjacent pairs: (1↔2), (3↔4), (5↔6), ...
   - One-one: odd maps to even, even maps to odd; within odds n₁+1 = n₂+1 ⇒ n₁ = n₂; within evens n₁−1 = n₂−1 ⇒ n₁ = n₂.
   - Onto: every even y = 2k has pre-image 2k − 1 (odd); every odd y = 2k − 1 has pre-image 2k (even). Hence **Bijective**!
9. 2x₁ + 3 = 2x₂ + 3 ⇒ x₁ = x₂ (**One-one**). For any y ∈ R, x = (y − 3)/2 ∈ R (**Onto**). Hence **Bijective**.
10. (a) **One-one, not onto:** f(n) = n + 1 (or f(n) = 2n — misses 1).
    (b) **Onto, not one-one:** f(1) = 1 and f(n) = n − 1 for n ≥ 2 (f(1) = f(2) = 1, hits every n ∈ N!).

---

Ab tum one-one, onto aur bijective functions ko algebraic proof aur counting dono se master kar chuke ho!

**Agle topic mein:** Hum [Composition of Functions and Invertible Functions](relations-and-functions-part3.md) padhenge — jahan do functions ko chain mein jodkar unka exact inverse f⁻¹(x) nikalna seekhenge!
