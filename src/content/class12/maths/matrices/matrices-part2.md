> **Class:** 12 | **Subject:** Mathematics | **Chapter 3:** Matrices (Part 2)

# Operations on Matrices: Addition, Scalar Multiplication and Multiplication

> **Pichle topic mein:** Humne [Matrix, Types of Matrices and Equality](matrices.md) padha. Ab hum matrices ko jodna (**A + B**), number se multiply karna (**kA**), aur sabse important — do matrices ko multiply karna (**A·B**) aur matrix polynomials (**A² − 5A + 7I**) evaluate karna seekhenge!

---

Ranbir apne chacha ke do stationery shops (North Branch aur South Branch) ka daily revenue nikal raha tha:
- Sales Matrix A (2 × 3): Rows = 2 branches, Columns = Notebooks, Pens, Boxes.
- Price Matrix B (3 × 1): Unit prices of Notebooks, Pens, Boxes.
Har branch ka total revenue nikalne ke liye Row × Column multiply karke jodna padta hai — aur output ek **2 × 1 Revenue Matrix (A·B)** ban jata hai! Yahi hai **Matrix Multiplication** ka real-world origin!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Matrix Addition (A + B)** | Sirf **same order** ki matrices ke corresponding elements ko jodna: (A + B)ᵢⱼ = aᵢⱼ + bᵢⱼ |
| **Scalar Multiplication (kA)** | Matrix ke **HAR element** ko real number k se multiply karna: (kA)ᵢⱼ = k·aᵢⱼ |
| **Matrix Multiplication (AB)** | Tabhi defined jab **columns of A = rows of B**; agar A is m × n aur B is n × p, toh **AB has order m × p** |
| **Zero Divisors** | Do non-zero matrices A ≠ O aur B ≠ O jinka product **AB = O** (zero matrix) aa jaye! |

---

## 1. Addition & Scalar Multiplication Properties

For matrices A, B, C of the same order m × n and scalars k, l:
- **Commutative:** A + B = B + A
- **Associative:** (A + B) + C = A + (B + C)
- **Additive Identity:** A + O = A; **Additive Inverse:** A + (−A) = O
- **Scalar Distributivity:** k(A + B) = kA + kB; (k + l)A = kA + lA

---

## 2. Matrix Multiplication (Row-by-Column Rule)

If A = [aᵢⱼ]_(m×n) and B = [bⱼₖ]_(n×p), then **C = AB** has order **m × p**, where:
**cᵢₖ = aᵢ₁b₁ₖ + aᵢ₂b₂ₖ + ... + aᵢₙbₙₖ** (dot product of Row i of A with Column k of B!).

### Four Crucial Properties (And Two Huge Traps!):
1. **NOT Commutative in general:** **AB ≠ BA**! (In fact, AB may exist while BA is not even defined!)
2. **Zero-Divisor Trap:** **AB = O does NOT imply A = O or B = O!**
   - Example:
   ```
   [ 0  −1 ] [ 3  5 ]   [ 0  0 ]
   [ 0   2 ] [ 0  0 ] = [ 0  0 ]
   ```
3. **Associative:** **(AB)C = A(BC)** (whenever products are defined).
4. **Distributive:** **A(B + C) = AB + AC** and **(A + B)C = AC + BC**.
5. **Multiplicative Identity:** **A·I = I·A = A** for any square matrix A.
6. **Algebraic Identity Warning:** Because AB ≠ BA, **(A + B)² = A² + AB + BA + B²** (NOT A² + 2AB + B² unless AB = BA!). Similarly **(A + B)(A − B) = A² − AB + BA − B²**!

---

## Solved Examples

### Example 1: Solving Simultaneous Matrix Equations
Find matrices X and Y if:
```
X + Y = [ 7  0 ]    and    X − Y = [ 3  0 ]
        [ 2  5 ]                   [ 0  3 ]
```

**Solution:**
Add both equations:
2X = [ 7+3  0+0 ; 2+0  5+3 ] = [ 10  0 ; 2  8 ] ⇒ **X = [ 5  0 ; 1  4 ]**.
Subtract second from first:
2Y = [ 7−3  0−0 ; 2−0  5−3 ] = [ 4  0 ; 2  2 ] ⇒ **Y = [ 2  0 ; 1  1 ]**.

Jaanch: X + Y = [5+2  0+0 ; 1+1  4+1] = [7 0 ; 2 5]; X − Y = [3 0 ; 0 3] ✅

---

### Example 2: Matrix Multiplication & Non-Commutativity
Let A = [ 1  2 ; 3  4 ] and B = [ 2  0 ; 1  3 ]. Compute AB and BA and verify AB ≠ BA.

**Solution:**
- **AB:**
  - (1,1): 1(2) + 2(1) = **4**;   (1,2): 1(0) + 2(3) = **6**
  - (2,1): 3(2) + 4(1) = **10**;  (2,2): 3(0) + 4(3) = **12**
  → **AB = [ 4  6 ; 10  12 ]**
- **BA:**
  - (1,1): 2(1) + 0(3) = **2**;   (1,2): 2(2) + 0(4) = **4**
  - (2,1): 1(1) + 3(3) = **10**;  (2,2): 1(2) + 3(4) = **14**
  → **BA = [ 2  4 ; 10  14 ]**
Clearly, **AB ≠ BA**!

Jaanch: Row 1 of AB = [4, 6] ≠ Row 1 of BA = [2, 4] ✅

---

### Example 3: Evaluating a Matrix Polynomial f(A) = A² − 5A + 7I
If A = [ 3  1 ; −1  2 ], show that **A² − 5A + 7I = O**.

**Solution:**
First compute A² = A × A:
- (1,1): 3(3) + 1(−1) = **8**;   (1,2): 3(1) + 1(2) = **5**
- (2,1): (−1)(3) + 2(−1) = **−5**; (2,2): (−1)(1) + 2(2) = **3**
So A² = [ 8  5 ; −5  3 ].
5A = [ 15  5 ; −5  10 ], and 7I = [ 7  0 ; 0  7 ].
Now compute A² − 5A + 7I:
- (1,1): 8 − 15 + 7 = **0**;   (1,2): 5 − 5 + 0 = **0**
- (2,1): −5 − (−5) + 0 = **0**; (2,2): 3 − 10 + 7 = **0**
Result = **[ 0  0 ; 0  0 ] = O**!

Jaanch: Every entry simplifies to exact 0 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Matrix multiplication ko element-by-element kar dena:**
   - *Galat:* [1 2 ; 3 4] × [2 0 ; 1 3] = [2 0 ; 3 12].
   - *Sahi:* Element-by-element sirf **Addition/Subtraction** mein hota hai! Multiplication hamesha **Row × Column dot product** hota hai!

2. **(A + B)² = A² + 2AB + B² likh dena:**
   - *Galat:* Scalar algebra ka formula seedha matrices par laga dena.
   - *Sahi:* Matrices mein AB ≠ BA, isliye **(A + B)² = A² + AB + BA + B²**!

3. **A² − 5A + 7 ko 7 × [1 1 ; 1 1] samajh lena:**
   - *Galat:* Constant 7 ko har entry mein jod dena.
   - *Sahi:* Matrix polynomial mein constant 7 ka matlab **7I = [ 7  0 ; 0  7 ]** hota hai (sirf diagonal par 7)!

---

## Quick Recap

- **A + B:** Same order, entry-by-entry. **kA:** Multiply every entry by k.
- **AB:** Defined when cols(A) = rows(B); order (m × n)(n × p) = **m × p**.
- **AB ≠ BA** in general; **AB = O** does not require A = O or B = O!
- **Matrix polynomial:** Replace constant c with **cI**.

---

## Practice Questions

1. If A = [ 2  4 ; 3  2 ] and B = [ 1  3 ; −2  5 ], find: (a) A + B, (b) 3A − B, (c) AB, (d) BA.
2. If A is of order 2 × 3 and B is of order 3 × 4, what is the order of AB? Is BA defined?
3. Find X and Y if 2X + 3Y = [ 2  3 ; 4  0 ] and 3X + 2Y = [ 2  −2 ; −1  5 ].
4. Compute the product [ 1 ; 2 ; 3 ] (3 × 1) multiplied by [ 2  3  4 ] (1 × 3). What is the order of the product?
5. If A = [ 2  0  1 ; 2  1  3 ; 1  −1  0 ], find **A² − 5A + 6I**.
6. Find x if: [ 1  x  1 ] × [ 1  3  2 ; 2  5  1 ; 15  3  2 ] × [ 1 ; 2 ; x ] = O.
7. If A = [ 3  −2 ; 4  −2 ] and I = [ 1  0 ; 0  1 ], find k so that **A² = kA − 2I**.
8. Give an example of two non-zero 2 × 2 matrices A and B such that AB = O.
9. A trust fund has ₹30,000 to invest in two bonds paying 5% and 7% annual interest. Using matrix multiplication, find how much to invest in each bond to obtain a total annual interest of ₹1,800.
10. If F(x) = [ cos x  −sin x  0 ; sin x  cos x  0 ; 0  0  1 ], show that **F(x)·F(y) = F(x + y)**.

---

### Answers

1. (a) **[ 3  7 ; 1  7 ]**
   (b) 3A = [ 6  12 ; 9  6 ] → 3A − B = **[ 5  9 ; 11  1 ]**
   (c) AB = **[ −6  26 ; −1  19 ]**
   (d) BA = **[ 11  10 ; 11  2 ]**
   Jaanch: AB(1,1) = 2(1)+4(−2) = −6; BA(1,1) = 1(2)+3(3) = 11 ✅
2. Order of AB = **2 × 4**. **BA is NOT defined** (cols of B = 4 ≠ rows of A = 2).
3. Multiply first by 3 and second by 2:
   6X + 9Y = [ 6  9 ; 12  0 ] and 6X + 4Y = [ 4  −4 ; −2  10 ].
   Subtract: 5Y = [ 2  13 ; 14  −10 ] ⇒ **Y = [ 2/5  13/5 ; 14/5  −2 ]**.
   Then 2X = [ 2  3 ; 4  0 ] − [ 6/5  39/5 ; 42/5  −6 ] = [ 4/5  −24/5 ; −22/5  6 ] ⇒ **X = [ 2/5  −12/5 ; −11/5  3 ]**.
   Jaanch: 2X + 3Y = [4/5+6/5  −24/5+39/5 ; −22/5+42/5  6−6] = [2 3 ; 4 0] ✅
4. Order = **3 × 3**:
   Row 1: [ 2  3  4 ]; Row 2: [ 4  6  8 ]; Row 3: [ 6  9  12 ].
5. A² = [ 5  −1  2 ; 9  −2  5 ; 0  −1  −2 ].
   5A = [ 10  0  5 ; 10  5  15 ; 5  −5  0 ]; 6I = [ 6  0  0 ; 0  6  0 ; 0  0  6 ].
   A² − 5A + 6I = **[ 1  −1  −3 ; −1  −1  −10 ; −5  4  4 ]**.
   Jaanch: (1,1): 5−10+6 = 1; (2,2): −2−5+6 = −1; (3,3): −2−0+6 = 4 ✅
6. First product [ 1  x  1 ] × (3×3) = [ 16 + 2x, 6 + 5x, 4 + x ].
   Multiply by [ 1 ; 2 ; x ]: (16 + 2x)(1) + (6 + 5x)(2) + (4 + x)(x) = 0
   16 + 2x + 12 + 10x + 4x + x² = 0 ⇒ x² + 16x + 28 = 0 ⇒ (x + 2)(x + 14) = 0 ⇒ **x = −2 or x = −14**.
   Jaanch: At x = −2: (−2)² + 16(−2) + 28 = 4 − 32 + 28 = 0 ✅
7. A² = [ 9−8  −6+4 ; 12−8  −8+4 ] = [ 1  −2 ; 4  −4 ].
   kA − 2I = [ 3k−2  −2k ; 4k  −2k−2 ].
   Compare (1,2): −2 = −2k ⇒ **k = 1** (matches all entries: 3(1)−2 = 1, 4(1) = 4, −2(1)−2 = −4!).
   Jaanch: k = 1 satisfies all 4 entries ✅
8. A = [ 1  0 ; 0  0 ] and B = [ 0  0 ; 0  1 ] → AB = [ 0  0 ; 0  0 ] = O (both A, B ≠ O!).
9. Let bond investments be [ x, 30000 − x ] and interest rates [ 0.05 ; 0.07 ].
   Product: 0.05x + 0.07(30000 − x) = 1800 ⇒ 2100 − 0.02x = 1800 ⇒ 0.02x = 300 ⇒ **x = ₹15,000** in 5% bond and **₹15,000** in 7% bond!
   Jaanch: 5% of 15000 + 7% of 15000 = 750 + 1050 = ₹1,800 ✅
10. Multiply F(x)·F(y):
    - (1,1): cos x cos y − sin x sin y = **cos(x + y)**
    - (1,2): −(cos x sin y + sin x cos y) = **−sin(x + y)**
    - (2,1): sin x cos y + cos x sin y = **sin(x + y)**
    - (2,2): −sin x sin y + cos x cos y = **cos(x + y)**
    - Row 3 & Col 3 give [0, 0, 1] → exact match with **F(x + y)**!

---

Ab tum matrix addition, multiplication aur matrix polynomials par poori pakad bana chuke ho!

**Agle topic mein:** Hum [Transpose, Symmetric and Skew-Symmetric Matrices](matrices-part3.md) padhenge — aur dekhenge ki har square matrix ko ek symmetric aur ek skew-symmetric matrix ke sum mein uniquely kaise toda jata hai!
