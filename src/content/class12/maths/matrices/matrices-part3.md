> **Class:** 12 | **Subject:** Mathematics | **Chapter 3:** Matrices (Part 3)

# Transpose, Symmetric and Skew-Symmetric Matrices

> **Pichle topic mein:** Humne [Operations on Matrices](matrices-part2.md) mein addition aur matrix multiplication padha. Ab hum matrix ko palatne ka operation — **Transpose (A' ya Aᵀ)** — aur do super-important special square matrices (**Symmetric** aur **Skew-Symmetric**) seekhenge!

---

Ria apne city-to-city highway distance table ko dekh rahi thi: Delhi se Jaipur ki doori (280 km) bilkul Jaipur se Delhi ki doori (280 km) ke barabar thi! Jab usne poori table ke rows ko columns se swap kar diya, toh table **bilkul wahi ki wahi** rahi — yaani **A' = A (Symmetric Matrix!)**. Phir usne ek net-elevation table dekhi: Delhi se Shimla +1900 m (chadhai), aur Shimla se Delhi −1900 m (utarai), aur har shehar se khud tak 0 m! Rows aur columns swap karne par saare signs ulte ho gaye — yaani **A' = −A (Skew-Symmetric Matrix!)**!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Transpose of a Matrix (A' or Aᵀ)** | Matrix A ke saare **rows ko columns** (aur columns ko rows) bana dene par mili nayi matrix; order m × n se **n × m** ho jata hai |
| **Symmetric Matrix** | Woh square matrix jiske liye **A' = A** (yaani aᵢⱼ = aⱼᵢ for all i, j) |
| **Skew-Symmetric Matrix** | Woh square matrix jiske liye **A' = −A** (yaani aᵢⱼ = −aⱼᵢ for all i, j) |

---

## 1. Properties of Transpose

For matrices A, B of compatible orders and scalar k:
1. **(A')' = A** (do baar transpose karne par wapas A milta hai!)
2. **(kA)' = k A'**
3. **(A ± B)' = A' ± B'**
4. **Reversal Law (MOST IMPORTANT!):** **(AB)' = B' A'** (order reverse ho jata hai!)

---

## 2. Symmetric & Skew-Symmetric Matrices

### Key Proof: Diagonal Elements of a Skew-Symmetric Matrix Are ALWAYS Zero!
If A is skew-symmetric, then aᵢⱼ = −aⱼᵢ for all i, j.
Put **i = j** (diagonal elements):
aᵢᵢ = −aᵢᵢ ⇒ 2 aᵢᵢ = 0 ⇒ **aᵢᵢ = 0** for all i!
*(Isliye kisi bhi skew-symmetric matrix ke principal diagonal par hamesha **0, 0, 0** hota hai!)*

### Two Fundamental Theorems (100% Exam Questions!):
1. **Theorem 1:** For ANY square matrix A with real entries:
   - **A + A'** is ALWAYS **symmetric**! *(Proof: (A + A')' = A' + (A')' = A' + A = A + A')*
   - **A − A'** is ALWAYS **skew-symmetric**! *(Proof: (A − A')' = A' − A = −(A − A'))*
   - Also **A·A'** and **A'·A** are ALWAYS **symmetric**!
2. **Theorem 2 (Unique Decomposition):** ANY square matrix A can be **UNIQUELY expressed** as the sum of a symmetric matrix P and a skew-symmetric matrix Q:
   **A = P + Q = (1/2)(A + A')  +  (1/2)(A − A')**
   where **P = (1/2)(A + A')** (symmetric) and **Q = (1/2)(A − A')** (skew-symmetric)!

---

## Solved Examples

### Example 1: Verifying the Reversal Law (AB)' = B'A'
Let A = [ −2 ; 4 ; 5 ] (3 × 1) and B = [ 1  3  −6 ] (1 × 3). Verify that **(AB)' = B'A'**.

**Solution:**
- **AB** (order 3 × 3):
  Row 1: [ −2  −6  12 ]; Row 2: [ 4  12  −24 ]; Row 3: [ 5  15  −30 ].
- **(AB)'** (swap rows & cols):
  Row 1: [ −2  4  5 ]; Row 2: [ −6  12  15 ]; Row 3: [ 12  −24  −30 ].
- Now **B'** = [ 1 ; 3 ; −6 ] (3 × 1) and **A'** = [ −2  4  5 ] (1 × 3).
- **B'A'** (order 3 × 3):
  Row 1: [ −2  4  5 ]; Row 2: [ −6  12  15 ]; Row 3: [ 12  −24  −30 ].
Clearly **(AB)' = B'A'**!

Jaanch: All 9 entries of (AB)' match B'A' identically ✅

---

### Example 2: Expressing a 3 × 3 Matrix as Symmetric + Skew-Symmetric
Express A = [ 3  3  −1 ; −2  −2  1 ; −4  −5  2 ] as the sum of a symmetric and a skew-symmetric matrix.

**Solution:**
First write A' = [ 3  −2  −4 ; 3  −2  −5 ; −1  1  2 ].
1. **Symmetric part P = (1/2)(A + A'):**
   A + A' = [ 6  1  −5 ; 1  −4  −4 ; −5  −4  4 ]
   **P = [ 3  1/2  −5/2 ; 1/2  −2  −2 ; −5/2  −2  2 ]** (Check: P' = P!).
2. **Skew-symmetric part Q = (1/2)(A − A'):**
   A − A' = [ 0  5  3 ; −5  0  6 ; −3  −6  0 ]
   **Q = [ 0  5/2  3/2 ; −5/2  0  3 ; −3/2  −3  0 ]** (Check: diagonal all 0 and Q' = −Q!).
3. **Check P + Q:**
   (1,2): 1/2 + 5/2 = 3; (1,3): −5/2 + 3/2 = −1; (2,1): 1/2 − 5/2 = −2; (2,3): −2 + 3 = 1; (3,1): −5/2 − 3/2 = −4; (3,2): −2 − 3 = −5 → exact match with A!

Jaanch: P' = P, Q' = −Q, and P + Q = A entry-by-entry ✅

---

### Example 3: Proving AB − BA Is Skew-Symmetric When A, B Are Symmetric
If A and B are symmetric matrices of the same order, show that **AB − BA** is skew-symmetric.

**Solution:**
Given A' = A and B' = B.
Take the transpose of (AB − BA):
(AB − BA)' = (AB)' − (BA)' = B'A' − A'B' = BA − AB = **−(AB − BA)**!
Therefore, **AB − BA is skew-symmetric**!

Jaanch: Applying (X − Y)' = X' − Y' and (XY)' = Y'X' flips the sign cleanly ✅

---

## Aam Galtiyan (Common Mistakes)

1. **(AB)' = A'B' likh dena:**
   - *Galat:* Transpose seedha distribute kar dena.
   - *Sahi:* Order hamesha **reverse** hota hai: **(AB)' = B'A'**!

2. **Skew-symmetric matrix mein diagonal entries non-zero rakh dena:**
   - *Galat:* [ 1  2 ; −2  1 ] ko skew-symmetric bol dena.
   - *Sahi:* Skew-symmetric mein **sabhi diagonal elements 0** hona mandatory hai!

3. **Zero matrix O ko sirf symmetric ya sirf skew-symmetric bolna:**
   - *Galat:* Koi matrix symmetric aur skew-symmetric dono nahi ho sakti.
   - *Sahi:* **Square Zero Matrix (O)** aisi ekmatra matrix hai jo **BOTH symmetric (O' = O) AND skew-symmetric (O' = −O)** hai!

---

## Quick Recap

- **Transpose:** Swap rows and columns; (A')' = A, (kA)' = kA', (A±B)' = A'±B', **(AB)' = B'A'**.
- **Symmetric:** A' = A. **Skew-symmetric:** A' = −A (diagonal entries ALWAYS 0!).
- **Unique decomposition:** **A = (1/2)(A + A') + (1/2)(A − A')**.

---

## Practice Questions

1. Find the transpose of: (a) A = [ 5 ; 1/2 ; −1 ], (b) B = [ 1  −1 ; 2  3 ].
2. If A' = [ −2  3 ; 1  2 ] and B = [ −1  0 ; 1  2 ], find **(A + 2B)'**.
3. If A = [ cos α  sin α ; −sin α  cos α ], verify that **A'A = I**.
4. Show that the matrix **B'AB** is symmetric or skew-symmetric according as A is symmetric or skew-symmetric.
5. Express A = [ 3  5 ; 1  −1 ] as the sum of a symmetric and a skew-symmetric matrix.
6. Express B = [ 6  −2  2 ; −2  3  −1 ; 2  −1  3 ] as the sum of a symmetric and a skew-symmetric matrix. (Watch what happens to Q!)
7. If A = [ cos α  −sin α ; sin α  cos α ] and **A + A' = I**, find the value of α ∈ [0, π/2].
8. Find x, y, z if the matrix [ 0  2y  z ; x  y  −z ; x  −y  z ] satisfies **A'A = I**.
9. If A and B are symmetric matrices of the same order, show that **AB + BA** is symmetric.
10. Find a 2 × 2 matrix that is BOTH symmetric and skew-symmetric.

---

### Answers

1. (a) A' = **[ 5  1/2  −1 ]** (1 × 3); (b) B' = **[ 1  2 ; −1  3 ]**.
2. (A + 2B)' = A' + 2B' = [ −2  3 ; 1  2 ] + 2[ −1  1 ; 0  2 ] = [ −2  3 ; 1  2 ] + [ −2  2 ; 0  4 ] = **[ −4  5 ; 1  6 ]**.
   Jaanch: A = [−2 1 ; 3 2], A+2B = [−4 1 ; 5 6] → transpose = [−4 5 ; 1 6] ✅
3. A' = [ cos α  −sin α ; sin α  cos α ].
   A'A = [ cos²α+sin²α  cos α sin α − sin α cos α ; sin α cos α − cos α sin α  sin²α+cos²α ] = **[ 1  0 ; 0  1 ] = I**!
4. Take transpose: (B'AB)' = B' A' (B')' = **B' A' B**.
   - If A is symmetric (A' = A): (B'AB)' = B'AB → **symmetric**.
   - If A is skew-symmetric (A' = −A): (B'AB)' = B'(−A)B = −B'AB → **skew-symmetric**.
5. A' = [ 3  1 ; 5  −1 ].
   **P = (1/2)(A + A') = [ 3  3 ; 3  −1 ]** (symmetric); **Q = (1/2)(A − A') = [ 0  2 ; −2  0 ]** (skew-symmetric).
   Jaanch: P + Q = [3+0  3+2 ; 3−2  −1+0] = [3 5 ; 1 −1] = A ✅
6. Notice B is ALREADY symmetric (B' = B)!
   So **P = B = [ 6  −2  2 ; −2  3  −1 ; 2  −1  3 ]** and **Q = O (3 × 3 zero matrix)**!
7. A + A' = [ 2 cos α  0 ; 0  2 cos α ] = [ 1  0 ; 0  1 ] ⇒ 2 cos α = 1 ⇒ cos α = 1/2 ⇒ **α = π/3**.
   Jaanch: 2 cos(π/3) = 2(1/2) = 1 ✅
8. A'A = I gives:
   - Row 1·Col 1: 0 + x² + x² = 1 ⇒ 2x² = 1 ⇒ **x = ±1/√2**.
   - Row 2·Col 2: 4y² + y² + y² = 1 ⇒ 6y² = 1 ⇒ **y = ±1/√6**.
   - Row 3·Col 3: z² + z² + z² = 1 ⇒ 3z² = 1 ⇒ **z = ±1/√3**.
   Jaanch: Off-diagonal dot products: Col 1·Col 2 = 0 + xy − xy = 0; Col 1·Col 3 = 0 − xz + xz = 0; Col 2·Col 3 = 2yz − yz − yz = 0 ✅
9. (AB + BA)' = (AB)' + (BA)' = B'A' + A'B' = BA + AB = **AB + BA** → **symmetric**!
10. The **2 × 2 Zero Matrix O = [ 0  0 ; 0  0 ]** (only matrix with A = A' = −A!).

---

Ab tum transpose, symmetric/skew-symmetric matrices aur unki unique decomposition par poori command paa chuke ho!

**Agle topic mein:** Hum [Invertible Matrices and Elementary Row Operations](matrices-part4.md) padhenge — jahan kisi matrix A ka exact multiplicative inverse **A⁻¹** nikalna seekhenge!
