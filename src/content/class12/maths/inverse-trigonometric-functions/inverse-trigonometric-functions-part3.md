> **Class:** 12 | **Subject:** Mathematics | **Chapter 2:** Inverse Trigonometric Functions (Part 3)

# Properties of Inverse Trigonometric Functions

> **Pichle topic mein:** Humne [Principal Value Branches, Graphs and Self-Cancellation Traps](inverse-trigonometric-functions-part2.md) padhe. Ab hum sabse powerful algebraic identities — **Negative Argument Rules, Complementary Sums (π/2), tan⁻¹x ± tan⁻¹y, 2 tan⁻¹x, aur Trigonometric Substitutions** — derivations ke saath master karenge!

---

Nitesh ek land-surveying app bana raha tha jismein do slopes ka total angle nikalna tha: **tan⁻¹(1/2) + tan⁻¹(1/3)**. Bina calculator ke Nitesh ne sirf ek identity lagayi: tan⁻¹[(1/2 + 1/3)/(1 − 1/6)] = tan⁻¹[(5/6)/(5/6)] = tan⁻¹(1) = **45° (π/4)**! Ek second mein exact angle!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Complementary Identities** | sin⁻¹x + cos⁻¹x = π/2, tan⁻¹x + cot⁻¹x = π/2, sec⁻¹x + cosec⁻¹x = π/2 |
| **Sum-of-Tangents Formula** | tan⁻¹x + tan⁻¹y = tan⁻¹[(x + y)/(1 − xy)] (valid jab **xy < 1**!) |
| **Trigonometric Substitution** | √(1 − x²), √(1 + x²), √(x² − 1) jaise expressions ko simplify karne ke liye x = sin θ, tan θ, sec θ rakhna |

---

## 1. Master Table of ITF Properties (With Conditions!)

### (a) Reciprocal Identities
- sin⁻¹(1/x) = cosec⁻¹(x),   |x| ≥ 1
- cos⁻¹(1/x) = sec⁻¹(x),   |x| ≥ 1
- tan⁻¹(1/x) = cot⁻¹(x),   **x > 0**   *(Note: For x < 0, tan⁻¹(1/x) = cot⁻¹(x) − π!)*

### (b) Negative Argument Identities
- **Odd family (−θ):** sin⁻¹(−x) = −sin⁻¹x; tan⁻¹(−x) = −tan⁻¹x; cosec⁻¹(−x) = −cosec⁻¹x
- **π − θ family:** cos⁻¹(−x) = **π − cos⁻¹x**; cot⁻¹(−x) = **π − cot⁻¹x**; sec⁻¹(−x) = **π − sec⁻¹x**

### (c) Complementary Sum Identities (Derivation: let sin⁻¹x = θ ⇒ x = sin θ = cos(π/2 − θ) ⇒ cos⁻¹x = π/2 − θ!)
- **sin⁻¹x + cos⁻¹x = π/2**,   x ∈ [−1, 1]
- **tan⁻¹x + cot⁻¹x = π/2**,   x ∈ R
- **sec⁻¹x + cosec⁻¹x = π/2**,   |x| ≥ 1

### (d) Sum & Difference of tan⁻¹ (Derived from tan(A ± B)!)
- **tan⁻¹x + tan⁻¹y = tan⁻¹[ (x + y) / (1 − xy) ]**,   **for xy < 1**
- **tan⁻¹x − tan⁻¹y = tan⁻¹[ (x − y) / (1 + xy) ]**,   **for xy > −1**

### (e) Double-Angle Formulas for 2 tan⁻¹x (ALL THREE FORMS — Super Useful!)
- **2 tan⁻¹x = sin⁻¹[ 2x / (1 + x²) ]**,   |x| ≤ 1
- **2 tan⁻¹x = cos⁻¹[ (1 − x²) / (1 + x²) ]**,   x ≥ 0
- **2 tan⁻¹x = tan⁻¹[ 2x / (1 − x²) ]**,   −1 < x < 1

---

## 2. Standard Trigonometric Substitutions for Simplification

| Expression | Best Substitution | Resulting Identity |
|---|---|---|
| **√(a² − x²)** | x = **a sin θ** or **a cos θ** | a cos θ or a sin θ |
| **√(a² + x²)** | x = **a tan θ** or **a cot θ** | a sec θ or a cosec θ |
| **√(x² − a²)** | x = **a sec θ** or **a cosec θ** | a tan θ or a cot θ |
| **√[(a − x)/(a + x)]** | x = **a cos 2θ** | tan θ |

---

## Solved Examples

### Example 1: Proving an Identity Using tan⁻¹ Addition
Prove that: **2 tan⁻¹(1/2) + tan⁻¹(1/7) = tan⁻¹(31/17)**.

**Solution:**
First apply 2 tan⁻¹x = tan⁻¹[2x / (1 − x²)] to 2 tan⁻¹(1/2) (valid since |1/2| < 1):
2 tan⁻¹(1/2) = tan⁻¹[ (2 × 1/2) / (1 − 1/4) ] = tan⁻¹[ 1 / (3/4) ] = **tan⁻¹(4/3)**.

Now add tan⁻¹(4/3) + tan⁻¹(1/7). Check xy = (4/3)(1/7) = 4/21 < 1 (valid!):
tan⁻¹(4/3) + tan⁻¹(1/7) = tan⁻¹[ (4/3 + 1/7) / (1 − 4/21) ]
= tan⁻¹[ (31/21) / (17/21) ]
= **tan⁻¹(31/17)** = RHS!

Jaanch: 4/3 + 1/7 = (28 + 3)/21 = 31/21; 1 − 4/21 = 17/21; ratio = 31/17 ✅

---

### Example 2: Simplifying via Trigonometric Substitution
Write **tan⁻¹[ √(1 + x²) − 1 ] / x** (x ≠ 0) in simplest form.

**Solution:**
Put **x = tan θ** (so θ = tan⁻¹x ∈ (−π/2, π/2)).
Then √(1 + x²) = √(1 + tan²θ) = sec θ (positive since θ ∈ (−π/2, π/2)!).
Expression = tan⁻¹[ (sec θ − 1) / tan θ ]
= tan⁻¹[ (1/cos θ − 1) / (sin θ / cos θ) ]
= tan⁻¹[ (1 − cos θ) / sin θ ]
Use half-angle identities: 1 − cos θ = 2 sin²(θ/2) and sin θ = 2 sin(θ/2) cos(θ/2):
= tan⁻¹[ tan(θ/2) ] = **θ/2 = (1/2) tan⁻¹x**!

Jaanch: Test x = 1 (θ = π/4): (√2 − 1)/1 = tan(22.5°) = tan(π/8) → tan⁻¹(√2 − 1) = π/8 = (1/2)(π/4) ✅

---

### Example 3: Converting sin⁻¹ to tan⁻¹ via Right Triangle
Prove that: **sin⁻¹(3/5) − sin⁻¹(8/17) = cos⁻¹(84/85)**.

**Solution:**
Convert both sin⁻¹ to tan⁻¹ using right triangles:
- sin A = 3/5 ⇒ base = √(5² − 3²) = 4 ⇒ **tan A = 3/4** (A = tan⁻¹(3/4)).
- sin B = 8/17 ⇒ base = √(17² − 8²) = 15 ⇒ **tan B = 8/15** (B = tan⁻¹(8/15)).
Now compute A − B = tan⁻¹(3/4) − tan⁻¹(8/15):
= tan⁻¹[ (3/4 − 8/15) / (1 + 24/60) ]
= tan⁻¹[ (45 − 32) / (60 + 24) ] = **tan⁻¹(13/84)**.
Convert tan⁻¹(13/84) to cos⁻¹: hypotenuse = √(13² + 84²) = √(169 + 7056) = √7225 = **85**!
So cos(A − B) = base / hyp = **84/85** ⇒ A − B = **cos⁻¹(84/85)** = RHS!

Jaanch: 13² + 84² = 169 + 7056 = 7225 = 85² (exact Pythagorean triple!) ✅

---

## Aam Galtiyan (Common Mistakes)

1. **xy > 1 hone par bhi bina π jode tan⁻¹x + tan⁻¹y = tan⁻¹[(x+y)/(1−xy)] laga dena:**
   - *Galat:* tan⁻¹(2) + tan⁻¹(3) = tan⁻¹[(2+3)/(1−6)] = tan⁻¹(−1) = −π/4! (Do positive angles ka sum negative kaise ho sakta hai?!)
   - *Sahi:* Formula sirf **xy < 1** ke liye hai! Jab x, y > 0 aur xy > 1 ho, toh **π + tan⁻¹[(x+y)/(1−xy)]** = π − π/4 = **3π/4** hota hai!

2. **tan⁻¹(1/x) = cot⁻¹(x) ko negative x par laga dena:**
   - *Galat:* tan⁻¹(−1) = cot⁻¹(−1).
   - *Sahi:* tan⁻¹(−1) = −π/4, jabki cot⁻¹(−1) = 3π/4! Yeh identity sirf **x > 0** ke liye true hai!

3. **sin⁻¹x + cos⁻¹x = π/2 ko |x| > 1 par laga dena:**
   - *Galat:* sin⁻¹(2) + cos⁻¹(2) = π/2.
   - *Sahi:* Sirf **x ∈ [−1, 1]** ke liye defined hai!

---

## Quick Recap

- **Complementary:** sin⁻¹x + cos⁻¹x = π/2; tan⁻¹x + cot⁻¹x = π/2; sec⁻¹x + cosec⁻¹x = π/2.
- **tan⁻¹ addition (xy < 1):** tan⁻¹[(x + y)/(1 − xy)]; **subtraction (xy > −1):** tan⁻¹[(x − y)/(1 + xy)].
- **2 tan⁻¹x:** sin⁻¹[2x/(1+x²)] = cos⁻¹[(1−x²)/(1+x²)] = tan⁻¹[2x/(1−x²)].
- **Triangle trick:** Convert any sin⁻¹ / cos⁻¹ to tan⁻¹ using Pythagoras (3–4–5, 5–12–13, 8–15–17)!

---

## Practice Questions

1. Prove that: **tan⁻¹(2/11) + tan⁻¹(7/24) = tan⁻¹(1/2)**.
2. Prove that: **tan⁻¹(1/5) + tan⁻¹(1/7) + tan⁻¹(1/3) + tan⁻¹(1/8) = π/4**.
3. Simplify: **tan⁻¹[ (cos x − sin x) / (cos x + sin x) ]**, for −π/4 < x < 3π/4.
4. Simplify: **tan⁻¹[ x / √(a² − x²) ]**, for |x| < a.
5. Simplify: **cot⁻¹[ 1 / √(x² − 1) ]**, for x > 1.
6. Evaluate: **tan[ (1/2) (sin⁻¹(2x/(1+x²)) + cos⁻¹((1−y²)/(1+y²))) ]** for |x| < 1, y > 0, xy < 1.
7. If **sin(sin⁻¹(1/5) + cos⁻¹x) = 1**, find the value of **x**.
8. Prove that: **cos⁻¹(4/5) + cos⁻¹(12/13) = cos⁻¹(33/65)**.
9. Prove that: **3 sin⁻¹x = sin⁻¹(3x − 4x³)** for x ∈ [−1/2, 1/2].
10. Solve for x: **tan⁻¹(2x) + tan⁻¹(3x) = π/4** (x > 0).

---

### Answers

1. xy = (2/11)(7/24) = 14/264 < 1.
   LHS = tan⁻¹[ (2/11 + 7/24) / (1 − 14/264) ] = tan⁻¹[ (48 + 77) / (264 − 14) ] = tan⁻¹(125/250) = **tan⁻¹(1/2)** = RHS.
   Jaanch: 48 + 77 = 125; 264 − 14 = 250; 125/250 = 1/2 ✅
2. Group in pairs:
   - tan⁻¹(1/5) + tan⁻¹(1/7) = tan⁻¹[(12/35)/(34/35)] = tan⁻¹(6/17).
   - tan⁻¹(1/3) + tan⁻¹(1/8) = tan⁻¹[(11/24)/(23/24)] = tan⁻¹(11/23).
   Add: tan⁻¹[(6/17 + 11/23)/(1 − 66/391)] = tan⁻¹[(138 + 187)/(391 − 66)] = tan⁻¹(325/325) = tan⁻¹(1) = **π/4**.
   Jaanch: 138 + 187 = 325; 391 − 66 = 325 ✅
3. Divide numerator and denominator by cos x:
   tan⁻¹[ (1 − tan x) / (1 + tan x) ] = tan⁻¹[ tan(π/4 − x) ] = **π/4 − x**.
4. Put x = a sin θ (θ ∈ (−π/2, π/2)):
   tan⁻¹[ a sin θ / (a cos θ) ] = tan⁻¹(tan θ) = θ = **sin⁻¹(x/a)**.
5. Put x = sec θ (θ ∈ (0, π/2)):
   cot⁻¹[ 1 / tan θ ] = cot⁻¹(cot θ) = θ = **sec⁻¹(x)**.
6. sin⁻¹(2x/(1+x²)) = 2 tan⁻¹x; cos⁻¹((1−y²)/(1+y²)) = 2 tan⁻¹y.
   Expression = tan[ (1/2)(2 tan⁻¹x + 2 tan⁻¹y) ] = tan(tan⁻¹x + tan⁻¹y) = **(x + y) / (1 − xy)**.
7. sin(θ) = 1 ⇒ sin⁻¹(1/5) + cos⁻¹x = π/2.
   Since sin⁻¹(1/5) + cos⁻¹(1/5) = π/2, comparing gives **x = 1/5**.
   Jaanch: sin(sin⁻¹(1/5) + cos⁻¹(1/5)) = sin(π/2) = 1 ✅
8. Let A = cos⁻¹(4/5) ⇒ sin A = 3/5; B = cos⁻¹(12/13) ⇒ sin B = 5/13.
   cos(A + B) = cos A cos B − sin A sin B = (4/5)(12/13) − (3/5)(5/13) = 48/65 − 15/65 = **33/65**.
   Hence A + B = **cos⁻¹(33/65)**.
   Jaanch: 48 − 15 = 33 ✅
9. Put x = sin θ (θ ∈ [−π/6, π/6] so 3θ ∈ [−π/2, π/2]).
   RHS = sin⁻¹(3 sin θ − 4 sin³θ) = sin⁻¹(sin 3θ) = 3θ = **3 sin⁻¹x** = LHS!
10. tan⁻¹[ (2x + 3x) / (1 − 6x²) ] = π/4 ⇒ 5x / (1 − 6x²) = 1 ⇒ 6x² + 5x − 1 = 0 ⇒ (6x − 1)(x + 1) = 0.
    Since x > 0, **x = 1/6** (reject x = −1 because xy = 6(−1)² = 6 > 1 and both angles would be negative!).
    Jaanch: At x = 1/6: tan⁻¹(1/3) + tan⁻¹(1/2) = tan⁻¹[(5/6)/(5/6)] = π/4 ✅

---

Ab tum inverse trig identities, substitutions aur equation-solving par poori command paa chuke ho!

**Agle topic mein:** [Sab Kuch Mila Kar: Mixed Problems & Chapter Wrap-up](inverse-trigonometric-functions-part4.md) mein hum poore Inverse Trigonometric Functions chapter ke mixed exam problems aur final summary table complete karenge!
