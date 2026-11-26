> **Class:** 12 | **Subject:** Mathematics | **Chapter 3:** Matrices

# Matrix, Types of Matrices and Equality

> **Pichle chapter mein:** Humne [Inverse Trigonometric Functions — Mixed Problems & Wrap-up](../inverse-trigonometric-functions/inverse-trigonometric-functions-part4.md) complete kiya. **Class 10 bridge:** Matrices ka basic introduction hum [Class 10 Matrices](../../../class10/maths/matrices/matrices.md) mein dekh chuke hain — ab Class 12 mein hum 3 × 3 aur general m × n **Matrices**, unke types, aur algebraic construction ko full rigor ke saath padhenge!

---

Raj apne school ke inter-house cricket tournament ka scoreboard bana raha tha: 3 houses (Red, Blue, Green) aur 4 stats (Matches, Wins, Runs, Wickets). Jab usne poora data ek clean **3 × 4 rectangular table** mein arrange kiya, toh har ek cell ek exact address (Row i, Column j) par aa gaya! Mathematics mein numbers ya functions ke isi ordered rectangular array ko **Matrix** kehte hain!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Matrix (Order m × n)** | m horizontal **rows** aur n vertical **columns** mein arrange kiye gaye m·n elements ka rectangular array |
| **Element (aᵢⱼ)** | i-th row aur j-th column par baitha hua element |
| **Square Matrix** | Woh matrix jismein rows aur columns ki sankhya barabar ho (**m = n**) |
| **Diagonal Matrix** | Square matrix jismein principal diagonal (i = j) ke alawa baaki sabhi elements **0** hon |
| **Scalar Matrix** | Diagonal matrix jiske sabhi principal diagonal elements **ek hi constant k** ke barabar hon |
| **Identity Matrix (Iₙ)** | Scalar matrix jiske sabhi diagonal elements **1** aur off-diagonal elements **0** hon |
| **Zero (Null) Matrix (O)** | Woh matrix jiska har ek element **0** ho |

---

## 1. Order, Elements & Matrix Construction

Agar kisi matrix A ka order **m × n** hai (padho: "m by n"):
- Total rows = **m**, total columns = **n**, total elements = **m × n**.
- General notation: **A = [aᵢⱼ]_(m×n)**, jahan 1 ≤ i ≤ m aur 1 ≤ j ≤ n.
- **Possible orders for N elements:** N ke sabhi ordered factor pairs (m, n) such that m × n = N!
  - Example: 12 elements ke possible orders: **1×12, 12×1, 2×6, 6×2, 3×4, 4×3** (6 orders!).

---

## 2. Seven Important Types of Matrices

1. **Row Matrix:** Sirf 1 row (order **1 × n**), e.g., [ 2  −5  7 ].
2. **Column Matrix:** Sirf 1 column (order **m × 1**).
3. **Square Matrix:** **m = n** (order n). Principal diagonal elements = a₁₁, a₂₂, ..., aₙₙ.
4. **Diagonal Matrix:** Square matrix with aᵢⱼ = 0 whenever i ≠ j (diagonal elements may or may not be zero!).
5. **Scalar Matrix:** Diagonal matrix with aᵢᵢ = k (same constant on diagonal).
6. **Identity Matrix (I):** Scalar matrix with aᵢᵢ = 1 (e.g., I₂ and I₃).
7. **Zero Matrix (O):** All entries aᵢⱼ = 0 (can be any order m × n!).

*Hierarchy:* **Identity ⊂ Scalar ⊂ Diagonal ⊂ Square**! (Har identity matrix scalar hai, har scalar diagonal hai, par ulta hamesha true nahi!)

---

## 3. Equality of Matrices

Two matrices A = [aᵢⱼ] and B = [bᵢⱼ] are **equal (A = B)** IF AND ONLY IF:
1. They have the **EXACT SAME order** (m × n), AND
2. Every **corresponding element is equal**: **aᵢⱼ = bᵢⱼ** for all i and j!

---

## Solved Examples

### Example 1: Constructing a 2 × 3 Matrix from a Formula
Construct a 2 × 3 matrix A = [aᵢⱼ] whose elements are given by **aᵢⱼ = (1/2) |−3i + j|**.

**Solution:**
Here i ∈ {1, 2} and j ∈ {1, 2, 3}:
- Row 1 (i = 1):
  - a₁₁ = (1/2)|−3 + 1| = (1/2)(2) = **1**
  - a₁₂ = (1/2)|−3 + 2| = (1/2)(1) = **1/2**
  - a₁₃ = (1/2)|−3 + 3| = **0**
- Row 2 (i = 2):
  - a₂₁ = (1/2)|−6 + 1| = **5/2**
  - a₂₂ = (1/2)|−6 + 2| = **2**
  - a₂₃ = (1/2)|−6 + 3| = **3/2**

```
A = [  1    1/2    0  ]
    [ 5/2    2    3/2 ]
```

Jaanch: Order is 2 × 3 (6 entries); all entries are non-negative because of modulus |...| ✅

---

### Example 2: Finding Unknowns Using Matrix Equality
Find x, y, z, and w if:
```
[ x − y    2x + z ]   =   [ −1    5 ]
[ 2x − y   3z + w ]       [  0   13 ]
```

**Solution:**
Equate corresponding elements:
1. x − y = −1
2. 2x − y = 0
Subtract (1) from (2): **x = 1**.
Substitute x = 1 in (1): 1 − y = −1 ⇒ **y = 2**.
3. 2x + z = 5 ⇒ 2(1) + z = 5 ⇒ **z = 3**.
4. 3z + w = 13 ⇒ 3(3) + w = 13 ⇒ **w = 4**.

Jaanch: x−y = 1−2 = −1; 2x−y = 2−2 = 0; 2x+z = 2+3 = 5; 3z+w = 9+4 = 13 ✅

---

### Example 3: Counting All Possible 3 × 3 Matrices with Entries 0 or 1
How many matrices of order 3 × 3 can be formed with each entry being either 0 or 1?

**Solution:**
A 3 × 3 matrix has 3 × 3 = **9 entries**.
Each entry has **2 independent choices** (0 or 1).
By the Fundamental Principle of Counting, total matrices = 2 × 2 × ... (9 times) = **2⁹ = 512**.

Jaanch: 2⁹ = 512 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Order mein Column × Row likh dena:**
   - *Galat:* 2 rows aur 3 columns wali matrix ko 3 × 2 likhna.
   - *Sahi:* Hamesha **Row × Column (RC)**! 2 rows, 3 columns = **2 × 3**!

2. **Matrix equality mein contradictory equations ko ignore kar dena:**
   - *Galat:* x + 1 = 3 ⇒ x = 2 aur 2x = 6 ⇒ x = 3 dono likh dena.
   - *Sahi:* Agar do equations se ek hi variable ki **alag values** aayein, toh answer **"Not possible to find"** (matrices equal nahi ho saktin)!

3. **Diagonal matrix mein off-diagonal zero hone ke bajaye diagonal zero maan lena:**
   - *Galat:* Diagonal matrix ke diagonal elements 0 hote hain.
   - *Sahi:* **Non-diagonal (i ≠ j)** elements 0 hote hain; diagonal elements koi bhi real numbers ho sakte hain!

---

## Quick Recap

- **Order:** m × n (Rows × Columns); total entries = mn.
- **Types:** Row (1×n), Column (m×1), Square (m=n), Diagonal (aᵢⱼ=0 for i≠j), Scalar (diagonal = k), Identity (diagonal = 1), Zero (all 0).
- **Equality:** Same order AND aᵢⱼ = bᵢⱼ for every (i, j).
- **Counting:** m × n matrix with k choices per entry = **k^(mn)**.

---

## Practice Questions

1. If a matrix has 18 elements, list all its possible orders. What if it has 13 elements?
2. Construct a 2 × 2 matrix A = [aᵢⱼ] where: (a) aᵢⱼ = (i + j)² / 2, (b) aᵢⱼ = i / j.
3. Construct a 3 × 2 matrix A = [aᵢⱼ] where aᵢⱼ = (i + 2j)² / 2.
4. Find x, y, and z if:
   [ x + y + z ]   [ 9 ]
   [   x + z   ] = [ 5 ]
   [   y + z   ]   [ 7 ]
5. Find the values of a, b, c, and d from:
   [ a − b    2a + c ]   [ −1    5 ]
   [ 2a − b   3c + d ] = [  0   13 ]
6. Is it possible to find x and y such that:
   [ 3x + 7     5    ]   [ 0    y − 2 ]
   [ y + 1    2 − 3x ] = [ 8      4   ]
   Justify your answer!
7. State the condition for A = [aᵢⱼ]_(m×n) to be a square matrix.
8. How many matrices of order 2 × 3 can be formed using entries from {0, 1, 2}?
9. Give an example of a 3 × 3 matrix that is diagonal but NOT scalar.
10. Write the identity matrix I₃ of order 3 × 3.

---

### Answers

1. For 18 elements: **1×18, 18×1, 2×9, 9×2, 3×6, 6×3** (6 orders). For 13 (prime): **1×13 and 13×1** (2 orders).
2. (a) a₁₁ = 2, a₁₂ = 9/2, a₂₁ = 9/2, a₂₂ = 8.
   (b) a₁₁ = 1, a₁₂ = 1/2, a₂₁ = 2, a₂₂ = 1.
3. Row 1: (1+2)²/2 = **9/2**, (1+4)²/2 = **25/2**.
   Row 2: (2+2)²/2 = **8**, (2+4)²/2 = **18**.
   Row 3: (3+2)²/2 = **25/2**, (3+4)²/2 = **49/2**.
   Jaanch: 3 rows × 2 columns = 6 entries ✅
4. From x + y + z = 9 and x + z = 5 ⇒ **y = 4**.
   From y + z = 7 ⇒ 4 + z = 7 ⇒ **z = 3**.
   From x + z = 5 ⇒ x + 3 = 5 ⇒ **x = 2**.
   Jaanch: 2 + 4 + 3 = 9, 2 + 3 = 5, 4 + 3 = 7 ✅
5. a − b = −1 and 2a − b = 0 ⇒ **a = 1**, **b = 2**; 2(1) + c = 5 ⇒ **c = 3**; 3(3) + d = 13 ⇒ **d = 4**.
6. From 3x + 7 = 0 ⇒ x = −7/3, while from 2 − 3x = 4 ⇒ x = −2/3. Since x cannot have two different values simultaneously, it is **NOT possible**!
7. **m = n** (number of rows equals number of columns).
8. 2 × 3 = 6 entries, 3 choices each → **3⁶ = 729** matrices.
   Jaanch: 3⁶ = 729 ✅
9. Any diagonal matrix with unequal diagonal entries, e.g., diag(1, 2, 3) with 1, 2, 3 on main diagonal and 0 elsewhere.
10. I₃ has 1s at (1,1), (2,2), (3,3) and 0s at all other 6 positions.

---

Ab tum matrices ke order, types aur equality ke har sawal ko accurately solve kar sakte ho!

**Agle topic mein:** Hum [Operations on Matrices: Addition, Scalar Multiplication and Matrix Multiplication](matrices-part2.md) padhenge — aur dekhenge ki matrix multiplication mein **AB ≠ BA** aur **AB = O even when A ≠ O, B ≠ O** kaise hota hai!
