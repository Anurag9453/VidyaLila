> **Class:** 12 | **Subject:** Mathematics | **Chapter 3:** Matrices (Part 4)

# Invertible Matrices and Elementary Row Operations

> **Pichle topic mein:** Humne [Transpose, Symmetric and Skew-Symmetric Matrices](matrices-part3.md) padha. Ab hum matrices mein division ka asli substitute — **Matrix Inverse (A⁻¹)** — aur **Elementary Row Operations** se A⁻¹ nikalne ka step-by-step method seekhenge!

---

Saif ek secret-code puzzle bana raha tha jahan 2-letter message vector X ko ek 2 × 2 encoding matrix A se multiply karke coded message Y = AX banaya jata hai! Friend ko message decode karne ke liye X = A⁻¹Y nikalna hota hai! Saif ne dekha: har matrix ka inverse nahi hota — par jis matrix ka inverse exist karta hai, uska inverse bilkul **UNIQUE** hota hai!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Invertible Matrix** | Woh square matrix A jiske liye ek square matrix B (same order) exist kare such that **AB = BA = I** (tab B = **A⁻¹**) |
| **Elementary Row Operations** | Matrix ki rows par lagne wale 3 allowed operations: swap two rows (Rᵢ ↔ Rⱼ), multiply a row by non-zero scalar (Rᵢ → kRᵢ), ya add multiple of one row to another (Rᵢ → Rᵢ + kRⱼ) |

---

## 1. Fundamental Theorems on Invertible Matrices

1. **Rectangular matrix ka inverse KABHI exist nahi karta** (AB aur BA dono same order ke hone ke liye A ka **square matrix** hona zaroori hai!).
2. **Theorem 1 (Uniqueness of Inverse):** Inverse of a square matrix, if it exists, is **UNIQUE**!
   *Proof:* Suppose B and C are both inverses of A (AB = BA = I and AC = CA = I). Then:
   B = B·I = B(AC) = (BA)C = I·C = **C**!
3. **Theorem 2 (Reversal Law):** If A and B are invertible matrices of the same order, then AB is invertible and:
   **(AB)⁻¹ = B⁻¹ A⁻¹**!
   *Proof:* (AB)(B⁻¹A⁻¹) = A(BB⁻¹)A⁻¹ = A·I·A⁻¹ = AA⁻¹ = I!

---

## 2. Finding A⁻¹ by Elementary Row Operations (Gauss–Jordan Method)

**Golden Setup:** Write **A = I · A**.
- Apply **ONLY row operations** (NEVER mix row and column operations in the same problem!) simultaneously to **A on the LHS** and **I on the RHS** (leave the second A on RHS untouched!).
- Goal: Transform the LHS matrix A into **I** (1s on diagonal, 0s elsewhere).
- When LHS becomes **I**, the RHS becomes **I = B · A**, so **B = A⁻¹**!

**How to Detect When A⁻¹ Does NOT Exist:**
Agar row operations karte waqt LHS matrix ki **koi bhi poori row (ya poora column) ALL ZEROS [ 0  0 ] ya [ 0  0  0 ]** ban jaye, toh **A⁻¹ does NOT exist** (matrix singular hai)!

---

## Solved Examples

### Example 1: Finding Inverse of a 2 × 2 Matrix by Row Operations
Find the inverse of **A = [ 1  2 ; 2  −1 ]** using elementary row operations.

**Solution:**
Write A = I · A:
```
[ 1   2 ]     [ 1  0 ]
[ 2  −1 ]  =  [ 0  1 ] A
```
- **Step 1:** Make (2,1) zero using **R₂ → R₂ − 2R₁**:
```
[ 1   2 ]     [  1  0 ]
[ 0  −5 ]  =  [ −2  1 ] A
```
- **Step 2:** Make (2,2) equal to 1 using **R₂ → (−1/5) R₂**:
```
[ 1   2 ]     [  1     0   ]
[ 0   1 ]  =  [ 2/5  −1/5  ] A
```
- **Step 3:** Make (1,2) zero using **R₁ → R₁ − 2R₂**:
```
[ 1   0 ]     [ 1/5   2/5 ]
[ 0   1 ]  =  [ 2/5  −1/5 ] A
```
Therefore, **A⁻¹ = [ 1/5  2/5 ; 2/5  −1/5 ]**!

Jaanch: Multiply A · A⁻¹ = [ 1(1/5)+2(2/5)  1(2/5)+2(−1/5) ; 2(1/5)−1(2/5)  2(2/5)−1(−1/5) ] = [ 5/5  0 ; 0  5/5 ] = I ✅

---

### Example 2: Detecting Non-Invertibility
Check whether **A = [ 6  −3 ; −2  1 ]** has an inverse using elementary row operations.

**Solution:**
Write A = I · A:
- Apply **R₁ → R₁ + 3R₂**:
  Row 1 becomes [ 6 + 3(−2), −3 + 3(1) ] = **[ 0  0 ]**!
Since an entire row on the LHS became **all zeros**, **A⁻¹ does NOT exist**!

Jaanch: Row 1 = −3 × Row 2 (linearly dependent rows → singular matrix, no inverse!) ✅

---

### Example 3: Finding Inverse of a 3 × 3 Matrix by Row Operations
Find the inverse of **A = [ 0  1  2 ; 1  2  3 ; 3  1  1 ]** using elementary row operations.

**Solution:**
Start with A = I · A:
- **R₁ ↔ R₂:**
  LHS = [ 1  2  3 ; 0  1  2 ; 3  1  1 ],   RHS = [ 0  1  0 ; 1  0  0 ; 0  0  1 ]
- **R₃ → R₃ − 3R₁:**
  LHS = [ 1  2  3 ; 0  1  2 ; 0  −5  −8 ],   RHS = [ 0  1  0 ; 1  0  0 ; 0  −3  1 ]
- **R₁ → R₁ − 2R₂** and **R₃ → R₃ + 5R₂:**
  LHS = [ 1  0  −1 ; 0  1  2 ; 0  0  2 ],   RHS = [ −2  1  0 ; 1  0  0 ; 5  −3  1 ]
- **R₃ → (1/2) R₃:**
  LHS = [ 1  0  −1 ; 0  1  2 ; 0  0  1 ],   RHS = [ −2  1  0 ; 1  0  0 ; 5/2  −3/2  1/2 ]
- **R₁ → R₁ + R₃** and **R₂ → R₂ − 2R₃:**
  LHS = **I₃**,   RHS = **[ 1/2  −1/2  1/2 ; −4  3  −1 ; 5/2  −3/2  1/2 ]**!
Therefore, **A⁻¹ = [ 1/2  −1/2  1/2 ; −4  3  −1 ; 5/2  −3/2  1/2 ]**!

Jaanch: Check Row 1 of A × A⁻¹: 0(1/2)+1(−4)+2(5/2) = −4+5 = 1; 0(−1/2)+1(3)+2(−3/2) = 3−3 = 0; 0(1/2)+1(−1)+2(1/2) = −1+1 = 0! Check Row 2 & 3 similarly → exact I₃ ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Ek hi question mein Row aur Column operations mix kar dena:**
   - *Galat:* Step 1 mein R₁ → R₁ − 2R₂ aur Step 2 mein C₁ → C₁ + C₂ laga dena.
   - *Sahi:* **A = I·A** mein **SIRF Row operations** (ya A = A·I mein SIRF Column operations) use karo — dono ko KABHI mix mat karo!

2. **LHS par operation lagana par RHS par bhool jana:**
   - *Galat:* LHS mein R₂ → R₂ − 2R₁ kiya par RHS ki Row 2 change nahi ki.
   - *Sahi:* Har step mein **exact same operation LHS aur RHS dono** par ek saath lagao, aur end mein **A·A⁻¹ = I** se zaroor check karo!

3. **(AB)⁻¹ = A⁻¹B⁻¹ likh dena:**
   - *Galat:* Order same rakhna.
   - *Sahi:* **(AB)⁻¹ = B⁻¹A⁻¹** (reversal law)!

---

## Quick Recap

- **Inverse:** AB = BA = I ⇒ B = A⁻¹ (only for square matrices; unique if it exists).
- **Reversal Law:** **(AB)⁻¹ = B⁻¹A⁻¹**.
- **Row-operation method:** Start with **A = I·A**, reduce LHS to I using ONLY row operations → RHS becomes **A⁻¹**.
- **Non-invertible test:** Any all-zero row on LHS ⇒ **A⁻¹ does not exist**!

---

## Practice Questions

1. Prove that if a square matrix A has an inverse, then the inverse is unique.
2. Prove that for invertible matrices A and B of the same order, **(AB)⁻¹ = B⁻¹A⁻¹**.
3. Using elementary row operations, find the inverse of **A = [ 1  −1 ; 2  3 ]**.
4. Using elementary row operations, find the inverse of **B = [ 2  1 ; 1  1 ]**.
5. Using elementary row operations, find the inverse of **C = [ 3  1 ; 5  2 ]**.
6. Using elementary row operations, find the inverse of **D = [ 2  5 ; 1  3 ]**.
7. Check whether **E = [ 2  −6 ; 1  −3 ]** has an inverse using elementary row operations.
8. Using elementary row operations, find the inverse of **F = [ 1  3  −2 ; −3  0  −5 ; 2  5  0 ]**.
9. If A = [ 3  2 ; 1  1 ], verify that **A⁻¹ = [ 1  −2 ; −1  3 ]** by direct multiplication.
10. Find the inverse of a 2 × 2 diagonal matrix **D = [ a  0 ; 0  b ]** (where a ≠ 0, b ≠ 0).

---

### Answers

1. Suppose B and C are both inverses of A (AB = BA = I and AC = CA = I). Then B = BI = B(AC) = (BA)C = IC = C. Hence the inverse is unique!
2. Multiply (AB) by (B⁻¹A⁻¹): (AB)(B⁻¹A⁻¹) = A(BB⁻¹)A⁻¹ = A·I·A⁻¹ = AA⁻¹ = I. Similarly (B⁻¹A⁻¹)(AB) = I. By uniqueness, **(AB)⁻¹ = B⁻¹A⁻¹**.
3. R₂ → R₂ − 2R₁ ⇒ [ 1 −1 ; 0 5 ] = [ 1 0 ; −2 1 ]A; R₂ → (1/5)R₂; R₁ → R₁ + R₂ ⇒ **A⁻¹ = [ 3/5  1/5 ; −2/5  1/5 ]**.
   Jaanch: [1 −1 ; 2 3] × [3/5 1/5 ; −2/5 1/5] = [5/5 0 ; 0 5/5] = I ✅
4. R₁ ↔ R₂ ⇒ [ 1 1 ; 2 1 ] = [ 0 1 ; 1 0 ]B; R₂ → R₂ − 2R₁ ⇒ [ 1 1 ; 0 −1 ] = [ 0 1 ; 1 −2 ]B; R₂ → −R₂; R₁ → R₁ − R₂ ⇒ **B⁻¹ = [ 1  −1 ; −1  2 ]**.
   Jaanch: [2 1 ; 1 1] × [1 −1 ; −1 2] = [1 0 ; 0 1] = I ✅
5. **C⁻¹ = [ 2  −1 ; −5  3 ]**.
   Jaanch: [3 1 ; 5 2] × [2 −1 ; −5 3] = [6−5  −3+3 ; 10−10  −5+6] = I ✅
6. **D⁻¹ = [ 3  −5 ; −1  2 ]**.
   Jaanch: [2 5 ; 1 3] × [3 −5 ; −1 2] = [6−5  −10+10 ; 3−3  −5+6] = I ✅
7. R₁ → R₁ − 2R₂ gives Row 1 = [ 0  0 ] → **E⁻¹ does NOT exist**!
8. Reducing F = I·F via row operations yields:
   **F⁻¹ = [ 1  −2/5  −3/5 ; −2/5  4/25  11/25 ; −3/5  1/25  9/25 ]**.
   Jaanch: Row 1 of F × Col 1 of F⁻¹ = 1(1) + 3(−2/5) + (−2)(−3/5) = 1 − 6/5 + 6/5 = 1; Row 1 × Col 2 = 1(−2/5) + 3(4/25) − 2(1/25) = (−10+12−2)/25 = 0 ✅
9. [ 3  2 ; 1  1 ] × [ 1  −2 ; −1  3 ] = [ 3−2  −6+6 ; 1−1  −2+3 ] = **[ 1  0 ; 0  1 ] = I**!
10. R₁ → (1/a)R₁ and R₂ → (1/b)R₂ gives **D⁻¹ = [ 1/a  0 ; 0  1/b ]**.
    Jaanch: diag(a, b) × diag(1/a, 1/b) = diag(1, 1) = I ✅

---

Ab tum kisi bhi invertible matrix ka exact inverse elementary row operations se nikal aur verify kar sakte ho!

**Agle topic mein:** [Sab Kuch Mila Kar: Mixed Problems & Chapter Wrap-up](matrices-part5.md) mein hum poore Matrices chapter ke mixed exam problems (induction, matrix equations, polynomials) solve karenge aur final summary table banayenge!
