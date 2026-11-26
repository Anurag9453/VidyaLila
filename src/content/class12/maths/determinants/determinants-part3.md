> **Class:** 12 | **Subject:** Mathematics | **Chapter 4:** Determinants (Part 3)

# Minors, Cofactors, Adjoint and Inverse of a Matrix

> **Pichle topic mein:** Humne [Area of a Triangle Using Determinants](determinants-part2.md) padha. Ab hum determinants ka sabse powerful algebraic tool — **Minors, Cofactors, Adjoint (adj A), aur Direct Inverse Formula A⁻¹ = (1/|A|) adj(A)** — seekhenge!

---

Amardeep apne cryptography project mein 3 × 3 matrices ke inverses nikalte waqt elementary row operations ke lambe steps se thak gaya tha. Uske senior ne ek single clean formula dikhaya: **A⁻¹ = (1 / |A|) · adj(A)**! Pehle determinant |A| check karo: agar |A| = 0 hai toh turant pata chal gaya ki inverse exist hi nahi karta (**Singular Matrix!**); aur agar |A| ≠ 0 hai, toh cofactors ka transpose (**Adjoint**) nikal kar |A| se divide kar do — seedha exact **A⁻¹**!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Minor (Mᵢⱼ)** | Matrix A ki i-th row aur j-th column delete karne ke baad bache hue sub-matrix ka determinant |
| **Cofactor (Aᵢⱼ)** | Sign ke saath minor: **Aᵢⱼ = (−1)^(i+j) Mᵢⱼ** |
| **Adjoint of A (adj A)** | Sabhi cofactors se bani matrix ka **TRANSPOSE**: **adj(A) = [Aᵢⱼ]'** |
| **Singular Matrix** | Woh square matrix jiska determinant **|A| = 0** ho (iska inverse exist NAHI karta!) |
| **Non-Singular Matrix** | Woh square matrix jiska determinant **|A| ≠ 0** ho (hamesha invertible!) |

---

## 1. Minors, Cofactors & The Alien-Cofactor Property

For any 3 × 3 matrix A = [aᵢⱼ]:
- **Own-row cofactor sum = |A|:** a₁₁A₁₁ + a₁₂A₁₂ + a₁₃A₁₃ = **|A|**
- **Alien-row cofactor sum = 0 (SUPER IMPORTANT!):** Agar ek row ke elements ko **DOOSRI row ke cofactors** se multiply karke jodo, toh sum hamesha **ZERO** aata hai!
  Example: **a₁₁A₂₁ + a₁₂A₂₂ + a₁₃A₂₃ = 0**!

---

## 2. Adjoint (adj A) & Five Golden Theorems

### Instant 2 × 2 Adjoint Shortcut!
For A = [ a  b ; c  d ]:
**Swap diagonal elements (a ↔ d) and negate off-diagonal elements (−b, −c)!**
**adj(A) = [ d  −b ; −c  a ]**!

### Five Must-Memorise Theorems (for an n × n square matrix A):
1. **Fundamental Adjoint Identity:** **A · (adj A) = (adj A) · A = |A| · Iₙ**
2. **Determinant of Product:** **|AB| = |A| · |B|**
3. **Determinant of Adjoint (100% Exam Question!):**
   Take determinant of A(adj A) = |A|Iₙ: |A| · |adj A| = |A|ⁿ ⇒ **|adj A| = |A|^(n−1)**!
   *(For 3 × 3: **|adj A| = |A|²**; For 2 × 2: |adj A| = |A|!)*
4. **Invertibility Criterion:** A square matrix A is **invertible IF AND ONLY IF A is non-singular (|A| ≠ 0)**, and:
   **A⁻¹ = (1 / |A|) · adj(A)**
5. **Determinant of Inverse:** **|A⁻¹| = 1 / |A|** (since A·A⁻¹ = I ⇒ |A|·|A⁻¹| = 1).

---

## Solved Examples

### Example 1: Finding Inverse of a 2 × 2 Matrix Using Adjoint Shortcut
Find the inverse of **A = [ 2  −2 ; 4  3 ]** and verify **A(adj A) = |A|I**.

**Solution:**
- |A| = 2(3) − (−2)(4) = 6 + 8 = **14 ≠ 0** (non-singular → invertible!).
- By 2 × 2 shortcut (swap 2 & 3; negate −2 & 4):
  **adj(A) = [ 3  2 ; −4  2 ]**.
- **A⁻¹ = (1/14) [ 3  2 ; −4  2 ]**.
- Verify A(adj A):
  [ 2  −2 ; 4  3 ] × [ 3  2 ; −4  2 ] = [ 6+8  4−4 ; 12−12  8+6 ] = [ 14  0 ; 0  14 ] = **14 I = |A| I**!

Jaanch: A · A⁻¹ = (1/14)(14 I) = I ✅

---

### Example 2: Finding Inverse of a 3 × 3 Matrix via Cofactors & Adjoint
Find the inverse of **A = [ 1  2  3 ; 0  2  4 ; 0  0  5 ]**.

**Solution:**
- Since A is upper triangular, **|A| = 1 × 2 × 5 = 10 ≠ 0** (invertible!).
- Compute all 9 cofactors Aᵢⱼ = (−1)^(i+j) Mᵢⱼ:
  - A₁₁ = +(10 − 0) = **10**,   A₁₂ = −(0 − 0) = **0**,   A₁₃ = +(0 − 0) = **0**
  - A₂₁ = −(10 − 0) = **−10**,  A₂₂ = +(5 − 0) = **5**,   A₂₃ = −(0 − 0) = **0**
  - A₃₁ = +(8 − 6) = **2**,     A₃₂ = −(4 − 0) = **−4**,  A₃₃ = +(2 − 0) = **2**
- **Transpose** the cofactor matrix to get **adj(A)**:
  **adj(A) = [ 10  −10  2 ; 0  5  −4 ; 0  0  2 ]**
- Divide by |A| = 10:
  **A⁻¹ = (1/10) [ 10  −10  2 ; 0  5  −4 ; 0  0  2 ] = [ 1  −1  1/5 ; 0  1/2  −2/5 ; 0  0  1/5 ]**!

Jaanch: Check Row 1 of A × A⁻¹: [1, −1+1, 1/5 − 4/5 + 3/5] = [1, 0, 0]; diagonal of A⁻¹ = (1, 1/2, 1/5) = reciprocals of (1, 2, 5) ✅

---

### Example 3: Using |adj A| = |A|^(n−1) and |kA| = kⁿ|A|
If A is a 3 × 3 non-singular matrix with **|A| = 5**, find: (a) |adj A|, (b) |A⁻¹|, (c) |2 adj A|.

**Solution:**
Here n = 3 and |A| = 5:
(a) |adj A| = |A|^(3−1) = |A|² = 5² = **25**.
(b) |A⁻¹| = 1 / |A| = **1/5**.
(c) |2 adj A| = 2³ |adj A| = 8 × 25 = **200**.

Jaanch: 2³ = 8, 5² = 25, 8 × 25 = 200 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Cofactor matrix ka transpose karna bhool jana:**
   - *Galat:* adj(A) = [Aᵢⱼ] (bina transpose kiye!).
   - *Sahi:* **adj(A) = [Aᵢⱼ]' (TRANSPOSE of cofactor matrix!)** — hamesha A · A⁻¹ = I ki ek row multiply karke check karo!

2. **Cofactor nikalte waqt (−1)^(i+j) signs bhool jana:**
   - *Galat:* A₁₂, A₂₁, A₂₃, A₃₂ mein minus sign nahi lagana.
   - *Sahi:* 4 diamond positions **(1,2), (2,1), (2,3), (3,2)** par hamesha **minus (−)** lagta hai!

3. **|adj A| ko |A|ⁿ likh dena:**
   - *Galat:* 3 × 3 ke liye |adj A| = |A|³.
   - *Sahi:* **|adj A| = |A|^(n−1)** → 3 × 3 mein **|A|²**!

---

## Quick Recap

- **Cofactor:** Aᵢⱼ = (−1)^(i+j) Mᵢⱼ; alien-row cofactor sum = **0**.
- **Adjoint:** adj(A) = [Aᵢⱼ]'; 2 × 2 shortcut: swap diagonal, negate off-diagonal!
- **Key Identities:** A(adj A) = |A|I; **|adj A| = |A|^(n−1)**; **|AB| = |A||B|**; **|A⁻¹| = 1/|A|**.
- **Inverse:** Exists ⇔ |A| ≠ 0 (non-singular), given by **A⁻¹ = (1/|A|) adj(A)**.

---

## Practice Questions

1. Find all minors and cofactors of the elements of **A = [ 2  −4 ; 0  3 ]**.
2. Find the value of **a₁₁A₃₁ + a₁₂A₃₂ + a₁₃A₃₃** for any 3 × 3 matrix A. Give reason.
3. Find the value of **x** for which **A = [ 3 − x  2 ; 4  5 − x ]** is a singular matrix.
4. Find the inverse of **A = [ −1  5 ; −3  2 ]** using the adjoint method.
5. Find the inverse of **B = [ 1  0  0 ; 3  3  0 ; 5  2  −1 ]** using cofactors and adjoint.
6. If A is an invertible matrix of order 3 and **|A| = −3**, find: (a) |adj A|, (b) |A⁻¹|, (c) |A · adj A|.
7. If A = [ 3  7 ; 2  5 ] and B = [ 6  8 ; 7  9 ], verify that **(AB)⁻¹ = B⁻¹A⁻¹**.
8. If A is a square matrix of order 3 such that **|adj A| = 64**, find the possible values of **|A|**.
9. Find the inverse of **C = [ 1  0  0 ; 0  cos α  sin α ; 0  sin α  −cos α ]**.
10. If A is a 3 × 3 matrix with **A(adj A) = [ 10  0  0 ; 0  10  0 ; 0  0  10 ]**, find **|A|** and **|adj A|**.

---

### Answers

1. M₁₁ = 3, M₁₂ = 0, M₂₁ = −4, M₂₂ = 2.
   A₁₁ = **3**, A₁₂ = **0**, A₂₁ = **+4**, A₂₂ = **2**.
2. **0** — sum of products of elements of Row 1 with cofactors of a different row (Row 3) is always zero!
3. Singular ⇔ |A| = 0 ⇒ (3 − x)(5 − x) − 8 = 0 ⇒ x² − 8x + 7 = 0 ⇒ (x − 1)(x − 7) = 0 ⇒ **x = 1 or x = 7**.
   Jaanch: At x = 1: det([2 2 ; 4 4]) = 0; at x = 7: det([−4 2 ; 4 −2]) = 0 ✅
4. |A| = −2 − (−15) = **13**. adj(A) = [ 2  −5 ; 3  −1 ].
   **A⁻¹ = (1/13) [ 2  −5 ; 3  −1 ]**.
   Jaanch: [−1 5 ; −3 2] × (1/13)[2 −5 ; 3 −1] = (1/13)[13 0 ; 0 13] = I ✅
5. |B| = 1(−3) = **−3**.
   Cofactors: A₁₁ = −3, A₁₂ = 3, A₁₃ = −9; A₂₁ = 0, A₂₂ = −1, A₂₃ = −2; A₃₁ = 0, A₃₂ = 0, A₃₃ = 3.
   adj(B) = [ −3  0  0 ; 3  −1  0 ; −9  −2  3 ].
   **B⁻¹ = (−1/3) [ −3  0  0 ; 3  −1  0 ; −9  −2  3 ] = [ 1  0  0 ; −1  1/3  0 ; 3  2/3  −1 ]**.
   Jaanch: Row 3 of B × Col 1 of B⁻¹ = 5(1) + 2(−1) + (−1)(3) = 5 − 2 − 3 = 0 ✅
6. (a) |adj A| = (−3)² = **9**; (b) |A⁻¹| = **−1/3**; (c) |A · adj A| = |A|³ = (−3)³ = **−27**.
   Jaanch: (−3) × 9 = −27 ✅
7. |A| = 15 − 14 = 1 ⇒ A⁻¹ = [ 5  −7 ; −2  3 ]. |B| = 54 − 56 = −2 ⇒ B⁻¹ = (−1/2)[ 9  −8 ; −7  6 ].
   B⁻¹A⁻¹ = (−1/2)[ 45+16  −63−24 ; −35−12  49+18 ] = **(−1/2)[ 61  −87 ; −47  67 ]**.
   Also AB = [ 67  87 ; 47  61 ], |AB| = −2 ⇒ (AB)⁻¹ = **(−1/2)[ 61  −87 ; −47  67 ]** = B⁻¹A⁻¹!
   Jaanch: 67(61) − 87(47) = 4087 − 4089 = −2 ✅
8. |adj A| = |A|² = 64 ⇒ **|A| = ±8**!
9. |C| = 1(−cos²α − sin²α) = **−1**.
   Cofactors: A₁₁ = −1, A₂₂ = −cos α, A₂₃ = −sin α, A₃₂ = −sin α, A₃₃ = cos α (others 0).
   adj(C) = [ −1  0  0 ; 0  −cos α  −sin α ; 0  −sin α  cos α ].
   Divide by |C| = −1 → **C⁻¹ = [ 1  0  0 ; 0  cos α  sin α ; 0  sin α  −cos α ] = C** (self-inverse!)!
10. Since A(adj A) = |A|I₃ = 10 I₃ ⇒ **|A| = 10**, and **|adj A| = |A|² = 100**!
    Jaanch: 10² = 100 ✅

---

Ab tum adjoint aur inverse ke sabhi formulas aur identities bilkul master kar chuke ho!

**Agle topic mein:** Hum [Applications: Solving Systems of Linear Equations](determinants-part4.md) padhenge — jahan **X = A⁻¹B** se 3-variable linear equations aur word problems cleanly solve honge!
