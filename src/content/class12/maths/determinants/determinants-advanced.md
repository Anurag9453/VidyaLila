> **Class:** 12 | **Subject:** Mathematics | **Chapter 4:** Determinants (Gehrai Mein — Advanced Level)

# Determinants — Gehrai Mein (Advanced Level)

> **Core chapter se bridge:** Core lessons ([Part 1: Properties](determinants.md) se [Part 5: Mixed Problems](determinants-part5.md) tak) mein humne determinants, triangle area, adjoint/inverse aur AX = B padhe. Ab competitive-exam depth mein hum **Cramer's Rule & Homogeneous Systems, Nested Adjoint Identities (adj(adj A), adj(kA)), Differentiation of a Determinant, aur Symmetric/Circulant Determinants** cover karenge.

---

Balkrishna ek engineering-simulation seminar mein ek 3-variable system dekh raha tha jahan sirf **z** ki value chahiye thi (x aur y ki zaroorat hi nahi thi!). Professor ne poora A⁻¹ nahi nikala — sirf do determinants Δ aur Δ₃ nikale aur **z = Δ₃ / Δ (Cramer's Rule!)** se 20 seconds mein exact answer nikal liya!

---

## 1. Cramer's Rule & Homogeneous Systems

### (a) Cramer's Rule for Non-Homogeneous System AX = B (3 variables):
Let **Δ = |A|**, and let **Δ₁, Δ₂, Δ₃** be obtained by replacing Column 1, Column 2, Column 3 of Δ respectively with the constant column B:
- **Case 1 (Δ ≠ 0):** Unique solution: **x = Δ₁ / Δ,   y = Δ₂ / Δ,   z = Δ₃ / Δ** (Consistent).
- **Case 2 (Δ = 0 and at least one of Δ₁, Δ₂, Δ₃ ≠ 0):** **NO solution** (Inconsistent).
- **Case 3 (Δ = Δ₁ = Δ₂ = Δ₃ = 0):** **Infinitely many solutions** (Consistent) — *except rare case of 3 parallel planes!*

### (b) Homogeneous Linear System (AX = O):
Every homogeneous system is **ALWAYS CONSISTENT** (because **x = y = z = 0**, the **trivial solution**, always satisfies AX = O!):
- **|A| ≠ 0:** ONLY the **trivial solution** (0, 0, 0).
- **|A| = 0:** **Infinitely many NON-TRIVIAL solutions** (at least one variable ≠ 0)!

---

## 2. Master Adjoint Identities (For n × n Non-Singular Matrix A)

1. **|adj A| = |A|^(n−1)**
2. **adj(AB) = (adj B)(adj A)** (Reversal Law!)
3. **adj(A') = (adj A)'**
4. **adj(kA) = k^(n−1) · adj(A)**
5. **Nested Adjoint (SUPER IMPORTANT!):**
   - **adj(adj A) = |A|^(n−2) · A**
   - **|adj(adj A)| = |A|^((n−1)²)**   *(For n = 3: **|adj(adj A)| = |A|⁴**!)*
   - In general, k nested adjoints: **|adj(adj(...adj A))| = |A|^((n−1)ᵏ)**!
6. **adj(A⁻¹) = (adj A)⁻¹ = A / |A|**

---

## 3. Differentiation of a Determinant

If Δ(x) is a determinant whose entries are differentiable functions of x, then **Δ'(x)** is obtained by **differentiating ONE row (or one column) at a time** and summing all n determinants:
For a 3 × 3 determinant with rows R₁(x), R₂(x), R₃(x):
**Δ'(x) = det([ R₁' ; R₂ ; R₃ ]) + det([ R₁ ; R₂' ; R₃ ]) + det([ R₁ ; R₂ ; R₃' ])**!
*(Shortcut: If two rows are constants, you only need to differentiate the ONE variable row!)*

---

## 4. Famous Standard Determinants (Instant Recognition!)

1. **Circulant Determinant:**
   **det([ a  b  c ; b  c  a ; c  a  b ]) = −(a³ + b³ + c³ − 3abc) = −(a + b + c)(a² + b² + c² − ab − bc − ca)**
   *(Always ≤ 0 when a, b, c > 0! Equals 0 ⇔ a + b + c = 0 or a = b = c!)*
2. **Product of Two Determinants:** det(A) · det(B) = det(AB) (can multiply row-by-row OR row-by-col!).

---

## Deep Solved Problems

### Problem 1: Nested Adjoint Determinant Calculation
If A is a 3 × 3 non-singular matrix with **|A| = 2**, find:
(a) |adj(adj A)|,   (b) |adj(3A)|,   (c) |2 adj(A⁻¹)|.

**Solution:**
Here n = 3, |A| = 2:
(a) |adj(adj A)| = |A|^((3−1)²) = 2⁴ = **16**.
(b) adj(3A) = 3^(3−1) adj(A) = 9 adj(A) → |adj(3A)| = |9 adj(A)| = 9³ |adj A| = 729 × 2² = 729 × 4 = **2916**.
    *(Alternate check: |3A| = 3³(2) = 54 ⇒ |adj(3A)| = 54² = **2916**!)*
(c) |2 adj(A⁻¹)| = 2³ |adj(A⁻¹)| = 8 × |A⁻¹|² = 8 × (1/2)² = 8 × 1/4 = **2**.

Jaanch: 54² = 2916 = 729 × 4; 8/4 = 2 ✅

---

### Problem 2: Non-Trivial Solution of a Homogeneous System
Find the value(s) of **λ** for which the homogeneous system:
(λ − 1)x + 3y + z = 0,   x + (λ + 1)y + z = 0,   x + y + (λ + 1)z = 0
has a **non-trivial solution**.

**Solution:**
For a non-trivial solution, **|A| = 0**:
det([ λ−1  3  1 ; 1  λ+1  1 ; 1  1  λ+1 ]) = 0.
Apply R₂ → R₂ − R₃:
det([ λ−1  3  1 ; 0  λ  −λ ; 1  1  λ+1 ]) = 0.
Factor out **λ** from Row 2:
λ × det([ λ−1  3  1 ; 0  1  −1 ; 1  1  λ+1 ]) = 0.
Apply C₃ → C₃ + C₂:
λ × det([ λ−1  3  4 ; 0  1  0 ; 1  1  λ+2 ]) = 0.
Expand along Row 2 (only entry is +1 at (2,2)!):
λ × [(λ − 1)(λ + 2) − 4] = 0 ⇒ λ(λ² + λ − 6) = 0 ⇒ λ(λ + 3)(λ − 2) = 0!
Thus **λ = 0, 2, or −3**!

Jaanch: Check λ = 0: det([−1 3 1 ; 1 1 1 ; 1 1 1]) = 0 (Row 2 = Row 3!); Check λ = 2: det([1 3 1 ; 1 3 1 ; 1 1 3]) = 0 (Row 1 = Row 2!) ✅

---

### Problem 3: Differentiating a Determinant at x = 0
If **f(x) = det([ x  sin x  cos x ; 1  2  3 ; 4  5  6 ])**, find **f'(0)**.

**Solution:**
Rows 2 and 3 are constants (their derivatives are 0!), so only Row 1 differentiates:
f'(x) = det([ 1  cos x  −sin x ; 1  2  3 ; 4  5  6 ]).
Evaluate at x = 0 (cos 0 = 1, sin 0 = 0):
f'(0) = det([ 1  1  0 ; 1  2  3 ; 4  5  6 ])
= 1(12 − 15) − 1(6 − 12) + 0 = −3 + 6 = **3**!

Jaanch: Expand f(x) first: f(x) = x(−3) − sin x(−6) + cos x(−3) = −3x + 6 sin x − 3 cos x ⇒ f'(x) = −3 + 6 cos x + 3 sin x ⇒ f'(0) = −3 + 6 + 0 = 3 ✅

---

### Problem 4: Using Cramer's Rule to Find Only One Variable
Using Cramer's rule, find ONLY the value of **z** in:
x + y + z = 6,   2x − y + z = 3,   x + 2y − z = 2.

**Solution:**
- Δ = det([ 1  1  1 ; 2  −1  1 ; 1  2  −1 ]) = 1(1 − 2) − 1(−2 − 1) + 1(4 + 1) = −1 + 3 + 5 = **7**.
- Δ₃ = det([ 1  1  6 ; 2  −1  3 ; 1  2  2 ]) = 1(−2 − 6) − 1(4 − 3) + 6(4 + 1) = −8 − 1 + 30 = **21**.
- **z = Δ₃ / Δ = 21 / 7 = 3**!

Jaanch: Full solution is x = 1, y = 2, z = 3 (1+2+3=6, 2−2+3=3, 1+4−3=2) ✅

---

### Problem 5: Sign of a Circulant Determinant
If a, b, c are positive real numbers not all equal, prove that **det([ a  b  c ; b  c  a ; c  a  b ]) < 0**.

**Solution:**
Add C₁ + C₂ + C₃ into C₁ and factor out (a + b + c):
det = −(a + b + c)(a² + b² + c² − ab − bc − ca)
Rewrite a² + b² + c² − ab − bc − ca = **(1/2)[ (a − b)² + (b − c)² + (c − a)² ]**.
Since a, b, c > 0 and not all equal, (a + b + c) > 0 AND (1/2)[(a−b)² + (b−c)² + (c−a)²] > 0.
With the minus sign in front, **det < 0** strictly!

Jaanch: Test a = 1, b = 2, c = 3: −(6)(1+4+9−2−6−3) = −6(3) = −18 < 0 ✅

---

## Advanced Practice Questions

1. If A is a 3 × 3 matrix with |A| = −2, find: (a) |adj(adj A)|, (b) |adj(adj(adj A))|, (c) |A · adj(adj A)|.
2. For what value(s) of **k** does the system x + y + z = 1, x + 2y + 4z = k, x + 4y + 10z = k² have a solution? (Use Cramer's rule!)
3. Find the value of **k** for which the homogeneous system kx + y + z = 0, x + ky + z = 0, x + y + kz = 0 has non-trivial solutions.
4. If **f(x) = det([ x²  x  1 ; 2  1  0 ; 3  2  1 ])**, find **f'(2)**.
5. If A is a 3 × 3 matrix with **adj(adj A) = 5A** and |A| ≠ 0, find **|A|**.
6. Using Cramer's rule, find ONLY **x** in: 3x + y = 7 and 2x − 5y = −1.
7. If A is a 4 × 4 matrix with |A| = 3, find **|adj A|** and **|adj(adj A)|**.
8. Find **f'(x)** if **f(x) = det([ cos x  sin x ; −sin x  cos x ])** using row-by-row differentiation!
9. If A is an **orthogonal** 3 × 3 matrix (AA' = I), prove that **|adj A| = 1**.
10. Find the coefficient of **x** in the expansion of **f(x) = det([ (1+x)²  (1+x)³  (1+x)⁴ ; 1  2  3 ; 1  1  1 ])** by evaluating **f'(0)**!

---

### Solutions

1. n = 3, |A| = −2:
   (a) |adj(adj A)| = (−2)^((3−1)²) = (−2)⁴ = **16**.
   (b) |adj(adj(adj A))| = (−2)^(2³) = (−2)⁸ = **256**.
   (c) |A · adj(adj A)| = |A| × 16 = (−2)(16) = **−32**.
   Jaanch: (−2)⁴ = 16, (−2)⁸ = 256, (−2)(16) = −32 ✅
2. Δ = det([ 1 1 1 ; 1 2 4 ; 1 4 10 ]) = 1(20−16) − 1(10−4) + 1(4−2) = 4 − 6 + 2 = **0**!
   So a solution exists ONLY if Δ₁ = Δ₂ = Δ₃ = 0!
   Compute Δ₃ = det([ 1 1 1 ; 1 2 k ; 1 4 k² ]) = 1(2k² − 4k) − 1(k² − k) + 1(4 − 2) = k² − 3k + 2 = (k − 1)(k − 2) = 0 ⇒ **k = 1 or k = 2**!
   Jaanch: Check Δ₁ = Δ₂ = 0 for both k = 1 and k = 2 ✅
3. |A| = det([ k 1 1 ; 1 k 1 ; 1 1 k ]) = (k + 2)(k − 1)² = 0 ⇒ **k = 1 or k = −2**.
   Jaanch: At k = 1 all rows identical; at k = −2 sum of rows = 0 ✅
4. f'(x) = det([ 2x  1  0 ; 2  1  0 ; 3  2  1 ]) = (2x − 2)(1) = 2x − 2.
   At x = 2: f'(2) = 2(2) − 2 = **2**.
   Jaanch: f(x) = x²(1) − x(2) + 1(1) = x² − 2x + 1 ⇒ f'(x) = 2x − 2 ⇒ f'(2) = 2 ✅
5. For n = 3, adj(adj A) = |A|^(3−2) A = |A| · A. Comparing with 5A gives **|A| = 5**!
6. Δ = −15 − 2 = −17; Δ₁ = det([ 7 1 ; −1 −5 ]) = −35 + 1 = −34 ⇒ **x = −34 / −17 = 2**.
   Jaanch: 3(2)+1 = 7, 2(2)−5(1) = −1 ✅
7. n = 4, |A| = 3:
   - |adj A| = 3^(4−1) = 3³ = **27**.
   - |adj(adj A)| = 3^((4−1)²) = 3⁹ = **19683**.
   Jaanch: 3³ = 27, 3⁹ = 19683 ✅
8. f'(x) = det([ −sin x  cos x ; −sin x  cos x ]) + det([ cos x  sin x ; −cos x  −sin x ]) = 0 + 0 = **0** (since f(x) = cos²x + sin²x = 1, a constant!).
9. AA' = I ⇒ |A|·|A'| = 1 ⇒ |A|² = 1 ⇒ |A| = ±1.
   Therefore |adj A| = |A|^(3−1) = |A|² = **(±1)² = 1**!
10. Coefficient of x in polynomial f(x) is **f'(0)**!
    f'(x) = det([ 2(1+x)  3(1+x)²  4(1+x)³ ; 1  2  3 ; 1  1  1 ]).
    At x = 0: f'(0) = det([ 2  3  4 ; 1  2  3 ; 1  1  1 ]) = 2(−1) − 3(−2) + 4(−1) = −2 + 6 − 4 = **0**!
    Jaanch: Row 1 − Row 2 = [1, 1, 1] = Row 3 ⇒ det = 0 ✅

---

Wapas core chapter wrap-up par jaane ke liye dekho: [Mixed Problems & Chapter Wrap-up](determinants-part5.md).
