> **Class:** 12 | **Subject:** Mathematics | **Chapter 3:** Matrices (Part 5)

# Sab Kuch Mila Kar: Mixed Problems & Chapter Wrap-up

> **Pichle topic mein:** Humne [Invertible Matrices and Elementary Row Operations](matrices-part4.md) padha. Ab hum poore Matrices chapter — matrix multiplication, mathematical induction on Aⁿ, matrix equations AX = B, symmetric/skew-symmetric properties, aur inverses — ko ek saath milakar mixed high-scoring problems solve karenge!

---

Aakash apne college prep group mein "Matrix Power Sprint" solve kar raha tha: diya tha **A = [ 3  −4 ; 1  −1 ]**, aur nikalna tha **A¹⁰⁰**! Koi bhi 100 baar multiply nahi karega — Aakash ne A², A³ calculate karke pattern pakda: **Aⁿ = [ 1 + 2n  −4n ; n  1 − 2n ]**, induction se prove kiya, aur turant n = 100 rakh kar **A¹⁰⁰ = [ 201  −400 ; 100  −199 ]** nikal liya!

---

## Naye Shabd (Chapter Formula Snapshot)

- **Multiplication:** (m × n)(n × p) → m × p; AB ≠ BA; AB = O ⇏ A = O or B = O.
- **Transpose:** (AB)' = B'A'; Symmetric (A' = A); Skew-symmetric (A' = −A, diagonal = 0); **A = ½(A + A') + ½(A − A')**.
- **Inverse:** AB = BA = I ⇒ B = A⁻¹; **(AB)⁻¹ = B⁻¹A⁻¹**; Row ops on A = I·A.

---

## Mixed Solved Examples

### Example 1: Finding Unknown Matrix X in a Matrix Equation
Find the matrix **X** such that:
```
X × [ 1  2  3 ]   =   [ −7  −8  −9 ]
    [ 4  5  6 ]       [  2   4   6 ]
```

**Solution:**
Let order of X be m × n. Since X (m × n) multiplies a (2 × 3) matrix to give a (2 × 3) product:
- n = **2** (for multiplication to be defined)
- m = **2** (to match product rows = 2)
So X is a **2 × 2 matrix**: let **X = [ a  b ; c  d ]**.
Multiply X × [ 1  2  3 ; 4  5  6 ]:
- Row 1: a + 4b = −7,   2a + 5b = −8,   3a + 6b = −9 (⇒ a + 2b = −3).
  Subtract (a + 2b = −3) from (a + 4b = −7): 2b = −4 ⇒ **b = −2**, then a − 4 = −3 ⇒ **a = 1**.
  *(Check 2a + 5b = 2 − 10 = −8!)*
- Row 2: c + 4d = 2,   2c + 5d = 4,   3c + 6d = 6 (⇒ c + 2d = 2).
  Subtract (c + 2d = 2) from (c + 4d = 2): 2d = 0 ⇒ **d = 0**, then **c = 2**.
  *(Check 2c + 5d = 4 + 0 = 4!)*
Therefore, **X = [ 1  −2 ; 2  0 ]**!

Jaanch: [1 −2 ; 2 0] × [1 2 3 ; 4 5 6] = [1−8  2−10  3−12 ; 2+0  4+0  6+0] = [−7 −8 −9 ; 2 4 6] ✅

---

### Example 2: Matrix Power by Mathematical Induction
If **A = [ 3  −4 ; 1  −1 ]**, prove by mathematical induction that **Aⁿ = [ 1 + 2n  −4n ; n  1 − 2n ]** for all n ∈ N.

**Solution:**
- **Base case (n = 1):** A¹ = [ 1 + 2(1)  −4(1) ; 1  1 − 2(1) ] = [ 3  −4 ; 1  −1 ] = A (True!).
- **Inductive hypothesis:** Assume true for n = k: Aᵏ = [ 1 + 2k  −4k ; k  1 − 2k ].
- **Inductive step (n = k + 1):** Compute Aᵏ⁺¹ = Aᵏ · A:
  - (1,1): (1 + 2k)(3) + (−4k)(1) = 3 + 6k − 4k = 3 + 2k = **1 + 2(k + 1)**
  - (1,2): (1 + 2k)(−4) + (−4k)(−1) = −4 − 8k + 4k = −4 − 4k = **−4(k + 1)**
  - (2,1): k(3) + (1 − 2k)(1) = 3k + 1 − 2k = **k + 1**
  - (2,2): k(−4) + (1 − 2k)(−1) = −4k − 1 + 2k = −1 − 2k = **1 − 2(k + 1)**
  Matches the formula for n = k + 1! Proved for all n ∈ N by induction!

Jaanch: Check n = 2 directly: A² = [9−4  −12+4 ; 3−1  −4+1] = [5 −8 ; 2 −3] = [1+4  −8 ; 2  1−4] ✅

---

### Example 3: Combining Matrix Polynomial & Inverse
If **A = [ 2  3 ; 1  2 ]**, show that **A² − 4A + I = O**, and hence find **A⁻¹** without row operations!

**Solution:**
- A² = [ 4+3  6+6 ; 2+2  3+4 ] = [ 7  12 ; 4  7 ].
- 4A = [ 8  12 ; 4  8 ]; I = [ 1  0 ; 0  1 ].
- A² − 4A + I = [ 7−8+1  12−12+0 ; 4−4+0  7−8+1 ] = **[ 0  0 ; 0  0 ] = O**!
Now multiply both sides by **A⁻¹**:
A⁻¹(A² − 4A + I) = O ⇒ A − 4I + A⁻¹ = O ⇒ **A⁻¹ = 4I − A**!
A⁻¹ = [ 4  0 ; 0  4 ] − [ 2  3 ; 1  2 ] = **[ 2  −3 ; −1  2 ]**!

Jaanch: [2 3 ; 1 2] × [2 −3 ; −1 2] = [4−3  −6+6 ; 2−2  −3+4] = [1 0 ; 0 1] = I ✅

---

## Aam Galtiyan (Mixed-Problem Traps)

1. **AX = B solve karte waqt X ka order guess karne mein galti:**
   - *Galat:* X ko hamesha 2 × 2 maan lena.
   - *Sahi:* Order equation likho: (m × n) · (p × q) = (r × s) ⇒ n = p, m = r, q = s!

2. **Matrix polynomial se A⁻¹ nikalte waqt A⁻¹·I ko I likh dena:**
   - *Galat:* A² − 4A + I = O ⇒ A − 4I + I = O.
   - *Sahi:* **A⁻¹ · I = A⁻¹** hota hai, I nahi! Isliye A − 4I + A⁻¹ = O ⇒ **A⁻¹ = 4I − A**!

---

## Quick Recap

- **Matrix equation shortcut:** Determine order of X first, then set up linear equations.
- **Polynomial-to-inverse trick:** If A² + pA + qI = O (q ≠ 0), multiply by A⁻¹ → **A⁻¹ = −(1/q)(A + pI)**!
- **Induction on Aⁿ:** Check n = 1, assume n = k, multiply Aᵏ · A to verify n = k + 1.

---

## Practice Questions

1. Find the matrix X such that **[ 2  −1 ; 1  0 ; −3  4 ] × X = [ −1  −8  −10 ; 1  −2  −5 ; 9  22  15 ]**.
2. If A = [ α  β ; γ  −α ] satisfies **A² = I**, find the relation between α, β, and γ.
3. If A = [ 1  1  1 ; 1  1  1 ; 1  1  1 ], prove by induction that **Aⁿ = 3ⁿ⁻¹ A** for all n ∈ N.
4. If A = [ 0  −tan(α/2) ; tan(α/2)  0 ], show that **I + A = (I − A) [ cos α  −sin α ; sin α  cos α ]**.
5. If A is a square matrix such that **A² = A**, simplify **(I + A)³ − 7A**.
6. If A = [ 3  1 ; −1  2 ], use **A² − 5A + 7I = O** to find **A⁻¹**.
7. If A and B are square matrices of the same order such that AB = BA, prove by induction that **ABⁿ = BⁿA** for all n ∈ N.
8. Find x if **[ 1  2  1 ] × [ 1  2  0 ; 2  0  1 ; 1  0  2 ] × [ 0 ; 2 ; x ] = O**.
9. If A is both symmetric and skew-symmetric, prove that A is a zero matrix.
10. Find the order of matrix X if **A_(2×3) · X · B_(4×5) = C_(2×5)**.

---

### Answers

1. Order of LHS is (3 × 2) · X = (3 × 3) ⇒ X is **2 × 3**. Let X = [ a  b  c ; d  e  f ].
   From Row 2 of product (1·row1 + 0·row2): **a = 1, b = −2, c = −5**!
   From Row 1 of product (2·row1 − row2): 2(1) − d = −1 ⇒ **d = 3**; 2(−2) − e = −8 ⇒ **e = 4**; 2(−5) − f = −10 ⇒ **f = 0**.
   Check Row 3 (−3·row1 + 4·row2): −3(1)+12 = 9, −3(−2)+16 = 22, −3(−5)+0 = 15!
   **X = [ 1  −2  −5 ; 3  4  0 ]**.
   Jaanch: All 9 entries of product verified ✅
2. A² = [ α² + βγ  0 ; 0  βγ + α² ] = [ 1  0 ; 0  1 ] ⇒ **α² + βγ = 1** (or 1 − α² − βγ = 0).
3. Base n = 1: A¹ = 3⁰ A = A. Step: Aᵏ⁺¹ = Aᵏ·A = 3ᵏ⁻¹ A² = 3ᵏ⁻¹(3A) = **3ᵏ A**! (Since every entry of A² is 1+1+1 = 3!)
4. Let t = tan(α/2). Use cos α = (1 − t²)/(1 + t²) and sin α = 2t/(1 + t²).
   I − A = [ 1  t ; −t  1 ]. Multiply RHS:
   - (1,1): [(1−t²) + 2t²]/(1+t²) = (1+t²)/(1+t²) = **1**
   - (1,2): [−2t + t(1−t²)]/(1+t²) = −t(1+t²)/(1+t²) = **−t**
   - (2,1): [−t(1−t²) + 2t]/(1+t²) = t(1+t²)/(1+t²) = **t**
   - (2,2): [2t² + (1−t²)]/(1+t²) = **1**
   Matches [ 1  −t ; t  1 ] = **I + A**!
5. (I + A)³ − 7A = I + 3A + 3A² + A³ − 7A. Since A² = A ⇒ A³ = A²·A = A·A = A:
   = I + 3A + 3A + A − 7A = I + 7A − 7A = **I**!
   Jaanch: 3 + 3 + 1 − 7 = 0 ✅
6. Multiply A² − 5A + 7I = O by A⁻¹ ⇒ A − 5I + 7A⁻¹ = O ⇒ **A⁻¹ = (1/7)(5I − A)**.
   5I − A = [ 2  −1 ; 1  3 ] ⇒ **A⁻¹ = (1/7)[ 2  −1 ; 1  3 ]**.
   Jaanch: [3 1 ; −1 2] × (1/7)[2 −1 ; 1 3] = (1/7)[7 0 ; 0 7] = I ✅
7. Base n = 1: AB = BA (given). Assume ABᵏ = BᵏA. Then ABᵏ⁺¹ = (ABᵏ)B = (BᵏA)B = Bᵏ(AB) = Bᵏ(BA) = **Bᵏ⁺¹A**!
8. [ 1  2  1 ] × (3×3) = [ 6  2  4 ]. Multiply by [ 0 ; 2 ; x ]: 6(0) + 2(2) + 4x = 0 ⇒ 4 + 4x = 0 ⇒ **x = −1**.
   Jaanch: 4 + 4(−1) = 0 ✅
9. A' = A and A' = −A ⇒ A = −A ⇒ 2A = O ⇒ **A = O** (zero matrix).
10. For A_(2×3) · X_(p×q) · B_(4×5) to be defined: p = **3** and q = **4** → Order of X = **3 × 4**!

---

## Chapter Ka Saar (Matrices Wrap-up)

| Topic | Core Formulas / Rules | Must-Remember Facts |
|---|---|---|
| 1. Types & Equality | Order m × n; Square, Diagonal, Scalar, Identity, Zero | Identity ⊂ Scalar ⊂ Diagonal ⊂ Square; Total m×n matrices with k entries = k^(mn) |
| 2. Operations | A + B (same order); AB: (m×n)(n×p) → m×p | AB ≠ BA; AB = O ⇏ A = O or B = O; (A+B)² = A² + AB + BA + B² |
| 3. Transpose & Symmetry | (AB)' = B'A'; Symmetric (A'=A), Skew-symmetric (A'=−A) | Skew-symmetric diagonal = **0**; **A = ½(A+A') + ½(A−A')** uniquely |
| 4. Inverse | AB = BA = I ⇒ B = A⁻¹; (AB)⁻¹ = B⁻¹A⁻¹ | Use ONLY row ops on A = I·A; all-zero row ⇒ no inverse! |

---

Ab tumne Matrices ke sabhi core concepts aur problems master kar liye hain! Competitive exams (JEE/Olympiad) ke liye **Trace Properties, Orthogonal/Idempotent/Involutory/Nilpotent Matrices, aur Cayley–Hamilton Theorem** padhne ke liye [Matrices — Gehrai Mein (Advanced Level)](matrices-advanced.md) zaroor dekho.

**Agle chapter mein:** Hum **Determinants** shuru karenge — jahan har square matrix ka ek unique number det(A) nikal kar area of triangle, adjoint, inverse aur linear equations solve karenge!
