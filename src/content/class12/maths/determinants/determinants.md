> **Class:** 12 | **Subject:** Mathematics | **Chapter 4:** Determinants

# Determinant of a Square Matrix and Properties of Determinants

> **Pichle chapter mein:** Humne [Matrices — Mixed Problems & Wrap-up](../matrices/matrices-part5.md) mein square matrices, transpose aur inverses padhe. Ab har square matrix A ke saath juda ek khaas real number — uska **Determinant (|A| ya det A)** — aur uski 6 powerful properties seekhenge!

---

Abhinav apne computer-graphics class mein ek 1 × 1 unit square ko 2 × 2 matrix A = [ 3  1 ; 0  2 ] se transform kar raha tha. Screen par unit square khinch kar ek parallelogram ban gaya jiska area exact **6** tha! Teacher ne bataya: "3 × 2 − 1 × 0 = 6 — yahi hai matrix A ka **Determinant**! Determinant batata hai ki koi matrix space (area ya volume) ko kitne guna scale karti hai — aur agar determinant **0** ho jaye, toh space chipta (collapse) ho jata hai aur matrix ka inverse exist nahi karta!"

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Determinant (|A| or det A)** | Har **square matrix A** se juda ek unique real/complex number (rectangular matrix ka determinant define NAHI hota!) |
| **Expansion Along a Row/Column** | 3 × 3 determinant ko 3 chhote 2 × 2 determinants ke alternating-sign sum (+ − +) mein todna |
| **Row / Column Operations** | Rᵢ ↔ Rⱼ, Rᵢ → kRᵢ, ya Rᵢ → Rᵢ + kRⱼ jo determinant ko bina expansion ke aasani se zero-rich bana dete hain |

---

## 1. Evaluating Determinants (Orders 1, 2, and 3)

1. **Order 1:** If A = [a], then **det(A) = a**. *(Warning: |A| yahan determinant hai, modulus nahi! If A = [−5], det(A) = **−5**, NOT +5!)*
2. **Order 2:** If A = [ a  b ; c  d ], then **det(A) = ad − bc**.
3. **Order 3:** Expand along ANY row or column using the checkerboard sign pattern:
```
Signs:   +   −   +
         −   +   −
         +   −   +
```
Expanding along Row 1 of [ a₁ b₁ c₁ ; a₂ b₂ c₂ ; a₃ b₃ c₃ ]:
**det(A) = a₁(b₂c₃ − b₃c₂) − b₁(a₂c₃ − a₃c₂) + c₁(a₂b₃ − a₃b₂)**
*(Pro Tip: Hamesha us row ya column ke along expand karo jismein **sabse zyada ZEROS** hon!)*

---

## 2. Six Golden Properties of Determinants

1. **Transpose Invariance:** **det(A') = det(A)** (rows aur columns swap karne se determinant nahi badhta!).
2. **Row/Column Swap Flips Sign:** Kisi bhi 2 rows (ya 2 columns) ko interchange karne par determinant ka **sign badal (−1×)** jata hai!
3. **Identical or Proportional Rows/Cols ⇒ 0:** Agar koi 2 rows (ya 2 columns) **identical ya proportional** hon, toh **det(A) = 0**!
4. **Scalar Factor Property (SUPER IMPORTANT!):**
   - Kisi **EK row (ya column)** ko k se multiply karne par determinant **k times** ho jata hai.
   - Poori n × n matrix A ko k se multiply karne par (har row k se multiply hoti hai!) → **det(kA) = kⁿ det(A)**!
     *(For 2 × 2: |kA| = **k²|A|**; For 3 × 3: |kA| = **k³|A|**!)*
5. **Sum-Splitting Property:** Agar kisi ek row/column ke sabhi elements 2 terms ke sum (a + x, b + y, c + z) hon, toh determinant 2 determinants ke sum mein toot jata hai.
6. **Row-Addition Invariance (Zero-Making Tool!):** **Rᵢ → Rᵢ + kRⱼ** (ya Cᵢ → Cᵢ + kCⱼ) lagane se **determinant ki value BILKUL NAHI BADALTI**!
   - **Bonus:** Determinant of any **diagonal or triangular matrix** = **product of its diagonal elements**!

---

## Solved Examples

### Example 1: Evaluating a 3 × 3 Determinant Smartly (Using Zero-Rich Column)
Evaluate det(A) for A = [ 1  2  4 ; −1  3  0 ; 4  1  0 ].

**Solution:**
Column 3 has **two zeros**! Expand along Column 3 (signs: +, −, +):
det(A) = +4 × det([ −1  3 ; 4  1 ]) − 0 + 0
= 4 × [(−1)(1) − (3)(4)] = 4 × (−1 − 12) = 4 × (−13) = **−52**!

Jaanch: Expanding along Row 1: 1(0−0) − 2(0−0) + 4(−1−12) = −52 ✅

---

### Example 2: Using det(kA) = kⁿ det(A)
If A is a 3 × 3 matrix with **|A| = 4**, find **|3A|** and **|−2A|**.

**Solution:**
Here n = 3:
- |3A| = 3³ |A| = 27 × 4 = **108**.
- |−2A| = (−2)³ |A| = (−8) × 4 = **−32**.

Jaanch: Every one of the 3 rows pulls out a factor of k → k³ factor ✅

---

### Example 3: Proving a Classic Vandermonde Determinant Using Properties
Prove that:
```
  1   a   a²
  1   b   b²  =  (a − b)(b − c)(c − a)
  1   c   c²
```

**Solution:**
Apply **R₁ → R₁ − R₂** and **R₂ → R₂ − R₃** (determinant unchanged!):
- Row 1 becomes: [ 0,   a − b,   a² − b² ] = (a − b) [ 0,   1,   a + b ]
- Row 2 becomes: [ 0,   b − c,   b² − c² ] = (b − c) [ 0,   1,   b + c ]
- Row 3 stays:   [ 1,   c,       c² ]
Take common factors **(a − b)** from R₁ and **(b − c)** from R₂:
det = (a − b)(b − c) × det([ 0  1  a+b ; 0  1  b+c ; 1  c  c² ]).
Expand along Column 1 (sign of (3,1) is +):
= (a − b)(b − c) × 1 × [(1)(b + c) − (1)(a + b)]
= **(a − b)(b − c)(c − a)** = RHS!

Jaanch: Test a = 1, b = 2, c = 3: LHS = det([1 1 1 ; 1 2 4 ; 1 3 9]) = 1(18−12) − 1(9−4) + 1(3−2) = 6 − 5 + 1 = 2; RHS = (1−2)(2−3)(3−1) = (−1)(−1)(2) = 2 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **det(kA) ko k·det(A) likh dena:**
   - *Galat:* 3 × 3 matrix ke liye |2A| = 2|A|.
   - *Sahi:* Determinant mein har row se alag common nikalta hai → **|kA| = kⁿ |A|**! 3 × 3 mein |2A| = **2³ |A| = 8|A|**!

2. **Determinant bars |A| ko absolute value (modulus) samajh lena:**
   - *Galat:* |A| hamesha positive hota hai.
   - *Sahi:* Determinant **negative, zero, ya positive** kuch bhi ho sakta hai!

3. **Matrix equality aur Determinant equality ko mix kar dena:**
   - *Galat:* det([2 4 ; 5 1]) = det([2x 4 ; 6 x]) ⇒ 2 = 2x ⇒ x = 1.
   - *Sahi:* Determinants **numbers** hain! Dono taraf expand karke solve karo: 2 − 20 = 2x² − 24 ⇒ −18 = 2x² − 24 ⇒ 2x² = 6 ⇒ **x = ±√3**!

---

## Quick Recap

- **2 × 2:** ad − bc. **3 × 3:** Expand along row/col with most zeros (signs + − +).
- **Zero tests:** All-zero row/col, or two identical/proportional rows/cols ⇒ det = 0.
- **Golden scaling law:** **|kA| = kⁿ |A|** (for n × n matrix A).
- **Invariant operation:** Rᵢ → Rᵢ + kRⱼ does NOT change det(A).

---

## Practice Questions

1. Evaluate: (a) det([ 2  4 ; −5  −1 ]), (b) det([ cos θ  −sin θ ; sin θ  cos θ ]).
2. Find the values of x if: **det([ x  2 ; 18  x ]) = det([ 6  2 ; 18  6 ])**.
3. Evaluate without expanding (using properties): **det([ 2  7  65 ; 3  8  75 ; 5  9  86 ])**.
4. If A is a 3 × 3 square matrix with |A| = 5, find **|2A|** and **|A'|**.
5. Prove using properties: **det([ x + 4  2x  2x ; 2x  x + 4  2x ; 2x  2x  x + 4 ]) = (5x + 4)(4 − x)²**.
6. Prove that the determinant of any **3 × 3 skew-symmetric matrix** is ALWAYS **0**.
7. Evaluate: **det([ 1  a  b + c ; 1  b  c + a ; 1  c  a + b ])**.
8. Find x if **det([ x  −2 ; 3  x ]) = 10**.
9. If A = [ 1  2 ; 4  2 ], show that **|2A| = 4|A|**.
10. Evaluate the upper-triangular determinant: **det([ 3  7  −2 ; 0  −5  9 ; 0  0  4 ])**.

---

### Answers

1. (a) 2(−1) − 4(−5) = −2 + 20 = **18**.
   (b) cos²θ − (−sin²θ) = cos²θ + sin²θ = **1**.
   Jaanch: −2 + 20 = 18; fundamental trig identity = 1 ✅
2. x² − 36 = 36 − 36 = 0 ⇒ x² = 36 ⇒ **x = ±6**!
   Jaanch: Both +6 and −6 give 36 − 36 = 0 ✅
3. Apply C₃ → C₃ − 9C₂: Col 3 becomes [ 65−63, 75−72, 86−81 ] = **[ 2, 3, 5 ] = Col 1**!
   Two identical columns ⇒ **det = 0**!
4. |2A| = 2³|A| = 8 × 5 = **40**; |A'| = |A| = **5**.
5. Apply **C₁ → C₁ + C₂ + C₃**: Col 1 becomes [ 5x+4, 5x+4, 5x+4 ]. Factor out (5x + 4) → Col 1 = [ 1, 1, 1 ].
   Now apply R₂ → R₂ − R₁ and R₃ → R₃ − R₁:
   Matrix becomes [ 1  2x  2x ; 0  4−x  0 ; 0  0  4−x ] (upper triangular!).
   Product of diagonal = 1(4 − x)(4 − x) ⇒ Total = **(5x + 4)(4 − x)²** = RHS!
   Jaanch: At x = 1: LHS = det([5 2 2 ; 2 5 2 ; 2 2 5]) = 5(21)−2(6)+2(−6) = 105−24 = 81; RHS = (9)(3²) = 81 ✅
6. For 3 × 3 skew-symmetric A, A' = −A. Taking determinants:
   |A'| = |−A| ⇒ |A| = (−1)³ |A| = −|A| ⇒ 2|A| = 0 ⇒ **|A| = 0**! (True for EVERY odd order n!)
7. Apply **C₃ → C₃ + C₂**: Col 3 becomes [ a+b+c, a+b+c, a+b+c ] = (a + b + c) × Col 1 (proportional columns!) ⇒ **det = 0**!
8. x² − (−6) = 10 ⇒ x² + 6 = 10 ⇒ x² = 4 ⇒ **x = ±2**.
   Jaanch: (±2)² + 6 = 4 + 6 = 10 ✅
9. |A| = 2 − 8 = −6. 2A = [ 2  4 ; 8  4 ] ⇒ |2A| = 8 − 32 = **−24** = 4 × (−6) = **4|A|**!
10. Product of main diagonal entries = 3 × (−5) × 4 = **−60**.
    Jaanch: Expanding along Col 1: 3 × ((−5)(4) − 0) = 3(−20) = −60 ✅

---

Ab tum 2 × 2 aur 3 × 3 determinants ko properties ke zariye bina lambi calculation ke solve kar sakte ho!

**Agle topic mein:** Hum [Area of a Triangle Using Determinants](determinants-part2.md) padhenge — jahan coordinates se area, collinearity aur line ki equation sirf ek 3 × 3 determinant se niklegi!
