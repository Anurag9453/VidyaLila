> **Class:** 12 | **Subject:** Mathematics | **Chapter 4:** Determinants (Part 5)

# Sab Kuch Mila Kar: Mixed Problems & Chapter Wrap-up

> **Pichle topic mein:** Humne [Solving Systems of Linear Equations](determinants-part4.md) padha. Ab hum poore Determinants chapter — properties, triangle area, adjoint/inverse identities, aur **Product-to-Inverse System Solving** — ko ek saath jodkar mixed exam-level problems solve karenge!

---

Anirban apne college linear-algebra tournament mein ek super-smart shortcut dekh raha tha: Question mein do 3 × 3 matrices A aur B diye the aur poocha tha — "Pehle product AB nikalo, phir uska use karke ek 3-variable system solve karo!" Jab Anirban ne AB multiply kiya, toh **AB = 8 I** nikal aaya! Bina ek bhi cofactor nikale turant **A⁻¹ = (1/8) B** mil gaya aur 30 seconds mein poora system solve ho gaya!

---

## Naye Shabd (Chapter Formula Snapshot)

- **Scaling & Product:** |kA| = **kⁿ |A|**; |AB| = |A||B|; |A'| = |A|; |A⁻¹| = 1/|A|.
- **Adjoint:** A(adj A) = |A|I; **|adj A| = |A|^(n−1)**; A⁻¹ = (1/|A|) adj(A).
- **Product-to-Inverse Shortcut:** If **AB = kI** (k ≠ 0), then **A⁻¹ = (1/k) B** and **B⁻¹ = (1/k) A**!
- **Area:** Δ = (1/2) |det([ x₁ y₁ 1 ; x₂ y₂ 1 ; x₃ y₃ 1 ])| (use ±Δ when area is given!).

---

## Mixed Solved Examples

### Example 1: Product AB = kI Shortcut to Solve Linear System (Classic 5-Mark Question!)
Find the product **AB** where:
- A = [ −4  4  4 ; −7  1  3 ; 5  −3  −1 ]
- B = [ 1  −1  1 ; 1  −2  −2 ; 2  1  3 ]
and use it to solve: x − y + z = 4, x − 2y − 2z = 9, 2x + y + 3z = 1.

**Solution:**
1. **Compute AB:**
   - Row 1: [ −4+4+8, 4−8+4, −4−8+12 ] = **[ 8  0  0 ]**
   - Row 2: [ −7+1+6, 7−2+3, −7−2+9 ] = **[ 0  8  0 ]**
   - Row 3: [ 5−3−2, −5+6−1, 5+6−3 ] = **[ 0  0  8 ]**
   Thus **AB = 8 I₃**!
2. **Extract B⁻¹ instantly:** Since (1/8) A · B = I₃, we have **B⁻¹ = (1/8) A**!
3. **Solve BX = C** where C = [ 4 ; 9 ; 1 ]:
   X = B⁻¹C = (1/8) A · C:
   - x = (1/8)[ −4(4) + 4(9) + 4(1) ] = (1/8)(−16 + 36 + 4) = 24 / 8 = **3**
   - y = (1/8)[ −7(4) + 1(9) + 3(1) ] = (1/8)(−28 + 9 + 3) = −16 / 8 = **−2**
   - z = (1/8)[ 5(4) − 3(9) − 1(1) ] = (1/8)(20 − 27 − 1) = −8 / 8 = **−1**
   Answer: **x = 3, y = −2, z = −1**!

Jaanch: Check original system: 3−(−2)+(−1) = 4; 3−2(−2)−2(−1) = 3+4+2 = 9; 2(3)+(−2)+3(−1) = 6−2−3 = 1 ✅

---

### Example 2: Using (A')⁻¹ = (A⁻¹)' to Solve a Transposed System
If **A = [ 1  −1  0 ; 2  3  4 ; 0  1  2 ]**, given **A⁻¹ = (1/6) [ 2  2  −4 ; −4  2  −4 ; 2  −1  5 ]**, solve the system:
x + 2y = 3,   −x + 3y + z = 5,   4y + 2z = 8.

**Solution:**
Notice that the coefficient matrix of the system is **[ 1  2  0 ; −1  3  1 ; 0  4  2 ] = A'** (the **TRANSPOSE** of A!).
Since **(A')⁻¹ = (A⁻¹)'**, simply take the transpose of A⁻¹:
(A')⁻¹ = (1/6) [ 2  −4  2 ; 2  2  −1 ; −4  −4  5 ]!
Multiply X = (A')⁻¹ [ 3 ; 5 ; 8 ]:
- x = (1/6)(6 − 20 + 16) = 2/6 = **1/3**
- y = (1/6)(6 + 10 − 8) = 8/6 = **4/3**
- z = (1/6)(−12 − 20 + 40) = 8/6 = **4/3**

Jaanch: 1/3 + 2(4/3) = 9/3 = 3; −1/3 + 12/3 + 4/3 = 15/3 = 5; 16/3 + 8/3 = 24/3 = 8 ✅

---

## Aam Galtiyan (Mixed-Problem Traps)

1. **System ka coefficient matrix A' hone par A⁻¹ se hi multiply kar dena:**
   - *Galat:* A⁻¹ nikala hua hai toh seedha A⁻¹C kar dena bina check kiye ki system A ka hai ya A' ka!
   - *Sahi:* Hamesha system ke coefficients ko A se compare karo! Agar rows ↔ columns swapped hain, toh **(A')⁻¹ = (A⁻¹)'** use karo!

2. **AB = 8I mein A⁻¹ = 8B likh dena:**
   - *Galat:* Constant 8 ko multiply kar dena.
   - *Sahi:* AB = 8I ⇒ A(B/8) = I ⇒ **A⁻¹ = (1/8) B** (divide by 8)!

---

## Quick Recap

- **If AB = kI:** A⁻¹ = (1/k) B and B⁻¹ = (1/k) A.
- **If system has matrix A':** Use **(A')⁻¹ = (A⁻¹)'**!
- **Determinant master checklist:** |kA| = kⁿ|A|, |AB| = |A||B|, |adj A| = |A|^(n−1), |A⁻¹| = 1/|A|, |odd-order skew-symmetric| = 0.

---

## Practice Questions

1. If A is a 3 × 3 matrix with |A| = 2, find: (a) |3A|, (b) |adj A|, (c) |A⁻¹|, (d) |A · A'|.
2. Prove that det([ 1  x  x² ; 1  y  y² ; 1  z  z² ]) = (x − y)(y − z)(z − x).
3. Find the values of k if the area of the triangle with vertices (k, 0), (1, 0), and (0, 4) is 6 sq units.
4. Show that A = [ 2  −3 ; 3  4 ] satisfies A² − 6A + 17I = O, and hence find A⁻¹.
5. Find the product AB where A = [ 1  −1  2 ; 0  2  −3 ; 3  −2  4 ] and B = [ −2  0  1 ; 9  2  −3 ; 6  1  −2 ], and use it to solve: x − y + 2z = 1, 2y − 3z = 1, 3x − 2y + 4z = 2.
6. If A is a 3 × 3 non-singular matrix and |3A| = k |A|, find k.
7. Find the value of x if the matrix [ x − 2  −3 ; 3x  2x ] is singular.
8. Evaluate: det([ 0  a  −b ; −a  0  −c ; b  c  0 ]).
9. Using determinants, find the equation of the line passing through (2, 5) and (4, 1).
10. If A and B are 3 × 3 matrices with |A| = 3 and |B| = −2, find **|2AB|**.

---

### Answers

1. (a) 3³(2) = **54**; (b) 2² = **4**; (c) **1/2**; (d) |A||A'| = 2 × 2 = **4**.
   Jaanch: All 4 formulas applied with n = 3 ✅
2. R₁ → R₁ − R₂, R₂ → R₂ − R₃ → factor (x − y)(y − z) → expand along Col 1 → **(x − y)(y − z)(z − x)**.
3. (1/2) det([ k 0 1 ; 1 0 1 ; 0 4 1 ]) = ±6 ⇒ −2(k − 1) = ±6 ⇒ k − 1 = ±3 ⇒ **k = 4 or k = −2**.
   Jaanch: Base |k − 1|, height 4 → Area = 2|k − 1| = 6 ⇒ |k − 1| = 3 ⇒ k = 4 or −2 ✅
4. A² = [ −5  −18 ; 18  7 ], 6A = [ 12  −18 ; 18  24 ], 17I = [ 17  0 ; 0  17 ] → A² − 6A + 17I = O.
   Multiply by A⁻¹: **A⁻¹ = (1/17)(6I − A) = (1/17)[ 4  3 ; −3  2 ]**.
   Jaanch: |A| = 8 + 9 = 17; adj(A) = [4 3 ; −3 2] ✅
5. Compute AB = [ 1  0  0 ; 0  1  0 ; 0  0  1 ] = **I₃** ⇒ **A⁻¹ = B**!
   X = B [ 1 ; 1 ; 2 ] = [ −2+0+2 ; 9+2−6 ; 6+1−4 ] = **[ 0 ; 5 ; 3 ]** ⇒ **x = 0, y = 5, z = 3**!
   Jaanch: 0 − 5 + 6 = 1; 10 − 9 = 1; 0 − 10 + 12 = 2 ✅
6. |3A| = 3³|A| = 27|A| ⇒ **k = 27**.
7. Singular ⇔ (x − 2)(2x) − (−3)(3x) = 0 ⇒ 2x² − 4x + 9x = 0 ⇒ 2x² + 5x = 0 ⇒ x(2x + 5) = 0 ⇒ **x = 0 or x = −5/2**.
   Jaanch: At x = 0: det([−2 −3 ; 0 0]) = 0; at x = −5/2: det([−9/2 −3 ; −15/2 −5]) = 45/2 − 45/2 = 0 ✅
8. Notice the matrix is **3 × 3 skew-symmetric** (A' = −A) ⇒ **det = 0** immediately!
9. det([ x y 1 ; 2 5 1 ; 4 1 1 ]) = 0 ⇒ 4x + 2y − 18 = 0 ⇒ **2x + y = 9**.
   Jaanch: 2(2)+5 = 9; 2(4)+1 = 9 ✅
10. |2AB| = 2³ |A| |B| = 8 × 3 × (−2) = **−48**.
    Jaanch: 8 × (−6) = −48 ✅

---

## Chapter Ka Saar (Determinants Wrap-up)

| Topic | Key Formulas | Must-Remember Facts |
|---|---|---|
| 1. Determinants & Properties | |kA| = kⁿ|A|; |A'| = |A|; Rᵢ → Rᵢ + kRⱼ invariant | Identical/proportional rows ⇒ 0; odd-order skew-symmetric ⇒ 0 |
| 2. Triangle Area | Δ = (1/2) |det([ x₁ y₁ 1 ; x₂ y₂ 1 ; x₃ y₃ 1 ])| | Always take **±Δ** when area is given; collinear ⇔ Δ = 0 |
| 3. Adjoint & Inverse | A(adj A) = |A|I; **|adj A| = |A|^(n−1)**; A⁻¹ = adj(A)/|A| | Invertible ⇔ |A| ≠ 0; alien-row cofactor sum = 0 |
| 4. Linear Systems | AX = B ⇒ X = A⁻¹B (if |A| ≠ 0) | If |A| = 0: (adj A)B ≠ O ⇒ inconsistent; AB = kI ⇒ A⁻¹ = B/k |

---

Ab tumne Determinants ke sabhi core concepts aur applications master kar liye hain! Competitive exams (JEE/Olympiad) ke liye **Cramer's Rule, Homogeneous Systems, Nested Adjoint Identities (adj(adj A) & |adj(adj A)|), aur Differentiation of Determinants** padhne ke liye [Determinants — Gehrai Mein (Advanced Level)](determinants-advanced.md) zaroor dekho.

**Agle chapter mein:** Hum Calculus ka sabse bada pillar — **Continuity and Differentiability** — shuru karenge, jahan limits, chain rule, implicit/logarithmic/parametric derivatives aur Rolle's/Mean Value Theorems seekhenge!
