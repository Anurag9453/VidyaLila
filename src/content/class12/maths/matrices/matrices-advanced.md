> **Class:** 12 | **Subject:** Mathematics | **Chapter 3:** Matrices (Gehrai Mein — Advanced Level)

# Matrices — Gehrai Mein (Advanced Level)

> **Core chapter se bridge:** Core lessons ([Part 1: Types](matrices.md) se [Part 5: Mixed Problems](matrices-part5.md) tak) mein humne matrix multiplication, transpose, symmetric decomposition aur row-operation inverses padhe. Ab competitive-exam depth mein hum **Trace of a Matrix, Special Matrices (Orthogonal, Idempotent, Involutory, Nilpotent, Periodic), aur the Cayley–Hamilton Theorem Shortcut** cover karenge.

---

Aarushi ek computer-graphics lab mein 3D rotation matrices par kaam kar rahi thi. Mentor ne bataya ki har rotation matrix **Orthogonal (A·Aᵀ = I)** hoti hai — matlab uska inverse nikalne ke liye koi heavy calculation nahi karni padti, sirf **transpose (A⁻¹ = Aᵀ)** le lo! Aur jab matrix ki badi power A¹⁰ chahiye ho, toh **Cayley–Hamilton Theorem** se A² ko linear form mein tod kar seconds mein answer mil jata hai!

---

## 1. Trace of a Square Matrix — Tr(A)

The **Trace** of an n × n square matrix A is the sum of its principal diagonal elements:
**Tr(A) = a₁₁ + a₂₂ + ... + aₙₙ**

### Key Properties of Trace:
1. **Tr(A ± B) = Tr(A) ± Tr(B)**
2. **Tr(kA) = k · Tr(A)**
3. **Tr(Aᵀ) = Tr(A)**
4. **Cyclic Property (SUPER IMPORTANT!):** **Tr(AB) = Tr(BA)** (even though AB ≠ BA!), and **Tr(ABC) = Tr(BCA) = Tr(CAB)**!
5. **Tr(Iₙ) = n**; **Tr(Skew-symmetric matrix) = 0**.
6. **Non-existence trap:** **AB − BA = Iₙ is IMPOSSIBLE for finite square matrices!** *(Proof: Tr(AB − BA) = Tr(AB) − Tr(BA) = 0, whereas Tr(Iₙ) = n ≠ 0!)*

---

## 2. Five Special Square Matrices (Exam Favourites!)

| Special Matrix | Defining Condition | Key Properties |
|---|---|---|
| **Idempotent** | **A² = A** | Aⁿ = A (∀ n ≥ 1); det(A) = 0 or 1; Tr(A) = rank(A) (integer!) |
| **Involutory** | **A² = I** | **A⁻¹ = A** (self-inverse!); det(A) = ±1 |
| **Nilpotent** (index k) | **Aᵏ = O** (smallest k ≥ 1) | det(A) = 0; Tr(A) = 0; (I − A)⁻¹ = I + A + A² + ... + Aᵏ⁻¹! |
| **Orthogonal** | **A·Aᵀ = Aᵀ·A = I** | **A⁻¹ = Aᵀ**; det(A) = ±1; rows/cols are mutually orthonormal unit vectors! |
| **Periodic** (period k) | **A^(k+1) = A** (smallest k) | Idempotent is periodic with period k = 1! |

---

## 3. Cayley–Hamilton Theorem (Shortcut for 2 × 2 & 3 × 3!)

Every square matrix satisfies its own **characteristic equation** det(A − λI) = 0!
- **For ANY 2 × 2 matrix A = [ a  b ; c  d ]:**
  **A² − Tr(A) · A + det(A) · I = O**
  where Tr(A) = a + d and det(A) = ad − bc!
  - **Instant Inverse (when det(A) ≠ 0):** **A⁻¹ = [1 / det(A)] · [ d  −b ; −c  a ]**!
- **For a 3 × 3 matrix A:**
  **A³ − Tr(A) · A² + (sum of principal 2 × 2 minors) · A − det(A) · I = O**!

---

## 4. Binomial Expansion for Commuting Matrices (A = I + N)

If A = I + N where **N is nilpotent** (e.g., N² = O or N³ = O):
Since I and N commute (I·N = N·I), standard Binomial Theorem applies!
**Aⁿ = (I + N)ⁿ = I + ⁿC₁ N + ⁿC₂ N² + ...** (terminates in just 2 or 3 terms!)

---

## Deep Solved Problems

### Problem 1: Using Binomial Expansion for a Nilpotent Decomposition
Find **A⁵⁰** if **A = [ 1  2 ; 0  1 ]**.

**Solution:**
Split A = I + N where I = [ 1  0 ; 0  1 ] and N = [ 0  2 ; 0  0 ].
Check N² = [ 0  2 ; 0  0 ] × [ 0  2 ; 0  0 ] = **[ 0  0 ; 0  0 ] = O** (nilpotent of index 2!).
By Binomial Theorem (since I and N commute):
A⁵⁰ = (I + N)⁵⁰ = I + 50 N + 0 + 0 + ...
= [ 1  0 ; 0  1 ] + 50 [ 0  2 ; 0  0 ] = **[ 1  100 ; 0  1 ]**!

Jaanch: Check A² = [1 4 ; 0 1], A³ = [1 6 ; 0 1] → pattern Aⁿ = [1 2n ; 0 1] → A⁵⁰ = [1 100 ; 0 1] ✅

---

### Problem 2: Cayley–Hamilton Shortcut for A⁴
For **A = [ 2  1 ; 1  2 ]**, use Cayley–Hamilton theorem to find **A⁴** without computing A³ directly.

**Solution:**
Tr(A) = 2 + 2 = 4; det(A) = 4 − 1 = 3.
By Cayley–Hamilton: **A² − 4A + 3I = O ⇒ A² = 4A − 3I**.
Square both sides:
A⁴ = (4A − 3I)² = 16A² − 24A + 9I
Substitute A² = 4A − 3I:
A⁴ = 16(4A − 3I) − 24A + 9I = (64 − 24)A + (−48 + 9)I = **40A − 39I**!
Compute 40A − 39I:
= [ 80  40 ; 40  80 ] − [ 39  0 ; 0  39 ] = **[ 41  40 ; 40  41 ]**!

Jaanch: Direct check: A² = [5 4 ; 4 5], A⁴ = A²·A² = [25+16  20+20 ; 20+20  16+25] = [41 40 ; 40 41] ✅

---

### Problem 3: Proving AB − BA = I Is Impossible
Prove that there do NOT exist any real n × n matrices A and B such that **AB − BA = Iₙ**.

**Solution:**
Suppose AB − BA = Iₙ. Take the **Trace** of both sides:
- LHS = Tr(AB − BA) = Tr(AB) − Tr(BA) = **0** (since Tr(AB) = Tr(BA)!).
- RHS = Tr(Iₙ) = **n** (≥ 1).
Contradiction: 0 = n ≥ 1 is impossible! Hence no such finite matrices exist!

Jaanch: Proof works for every order n ≥ 1 in 2 lines using Tr(AB) = Tr(BA) ✅

---

### Problem 4: Inverse of (I − N) for a Nilpotent Matrix
If N is a square matrix with **N³ = O**, prove that **(I − N)⁻¹ = I + N + N²**.

**Solution:**
Multiply (I − N)(I + N + N²):
= I + N + N² − N − N² − N³ = I − N³ = I − O = **I**!
Since the product is I, **(I − N)⁻¹ = I + N + N²**!

Jaanch: Telescoping geometric identity (1 − x)(1 + x + x²) = 1 − x³ holds for commuting I and N ✅

---

### Problem 5: Orthogonal Matrix Condition
Find all real values of x and y if **A = (1/3) [ 1  2  2 ; 2  1  −2 ; x  2  y ]** is an orthogonal matrix.

**Solution:**
For an orthogonal matrix, every row is a **unit vector** and distinct rows are **mutually perpendicular** (dot product = 0)!
1. Row 1 · Row 3 = 0: (1/9)(1·x + 2·2 + 2·y) = 0 ⇒ **x + 2y = −4**   ... (1)
2. Row 2 · Row 3 = 0: (1/9)(2·x + 1·2 − 2·y) = 0 ⇒ **2x − 2y = −2 ⇒ x − y = −1**   ... (2)
Subtract (2) from (1): 3y = −3 ⇒ **y = −1**.
From (2): x − (−1) = −1 ⇒ **x = −2**.
Check unit length of Row 3: (1/9)(x² + 2² + y²) = (1/9)(4 + 4 + 1) = 9/9 = **1**!

Jaanch: Row 3 = (1/3)[−2, 2, −1] has norm 1 and dot product 0 with both Row 1 and Row 2 ✅

---

## Advanced Practice Questions

1. Find **A²⁰** for **A = [ 1  0  0 ; 2  1  0 ; 3  2  1 ]** using A = I + N.
2. Using Cayley–Hamilton theorem, write the quadratic equation satisfied by **A = [ 4  −1 ; 2  1 ]** and hence find **A⁻¹** and **A³**.
3. If A is an **idempotent** matrix (A² = A), prove that **I − A** is also idempotent.
4. If A is an **involutory** matrix (A² = I), prove that **(I − A)(I + A) = O**.
5. If A and B are **orthogonal** matrices of the same order, prove that **AB** is also orthogonal.
6. Find the trace of **A = [ 1  2  3 ; 4  5  6 ; 7  8  9 ]** and hence find **Tr(3A − 2I₃)**.
7. Show that **A = [ 2  −2  −4 ; −1  3  4 ; 1  −2  −3 ]** is an idempotent matrix.
8. If A is a nilpotent matrix of index 2 (A² = O), prove that **(I + A)⁻¹ = I − A**.
9. If A = [ cos θ  sin θ ; −sin θ  cos θ ], prove that A is orthogonal and find **Aⁿ**.
10. If A and B are square matrices such that AB = A and BA = B, prove that **A and B are both idempotent**!

---

### Solutions

1. A = I + N where N = [ 0  0  0 ; 2  0  0 ; 3  2  0 ].
   N² = [ 0  0  0 ; 0  0  0 ; 4  0  0 ], and **N³ = O** (index 3!).
   A²⁰ = I + 20N + ²⁰C₂ N² = I + 20N + 190 N²
   = [ 1  0  0 ; 40  1  0 ; 60 + 760  40  1 ] = **[ 1  0  0 ; 40  1  0 ; 820  40  1 ]**!
   Jaanch: ²⁰C₂ = 190; 190 × 4 = 760; 20 × 3 + 760 = 820 ✅
2. Tr(A) = 5, det(A) = 4 − (−2) = 6 → **A² − 5A + 6I = O**.
   - **A⁻¹** = (1/6)(5I − A) = **(1/6)[ 1  1 ; −2  4 ]**.
   - A² = 5A − 6I ⇒ A³ = 5A² − 6A = 5(5A − 6I) − 6A = **19A − 30I** = **[ 46  −19 ; 38  −11 ]**.
   Jaanch: 19(4)−30 = 46, 19(−1) = −19, 19(2) = 38, 19(1)−30 = −11 ✅
3. (I − A)² = I − 2A + A² = I − 2A + A = **I − A** → idempotent!
4. (I − A)(I + A) = I + A − A − A² = I − I = **O**!
5. (AB)(AB)ᵀ = (AB)(BᵀAᵀ) = A(BBᵀ)Aᵀ = A·I·Aᵀ = AAᵀ = **I** → AB is orthogonal!
6. Tr(A) = 1 + 5 + 9 = **15**. Tr(3A − 2I₃) = 3 Tr(A) − 2 Tr(I₃) = 3(15) − 2(3) = 45 − 6 = **39**.
   Jaanch: Diagonal of 3A − 2I₃ is (1, 13, 25); 1 + 13 + 25 = 39 ✅
7. Compute A²: Row 1 = [4+2−4, −4−6+8, −8−8+12] = [2, −2, −4] = Row 1 of A; Row 2 = [−1, 3, 4]; Row 3 = [1, −2, −3] → **A² = A** (idempotent)!
8. (I + A)(I − A) = I − A² = I − O = **I** ⇒ (I + A)⁻¹ = I − A.
9. A·Aᵀ = [ cos²θ+sin²θ  0 ; 0  sin²θ+cos²θ ] = I (orthogonal!). By induction, **Aⁿ = [ cos(nθ)  sin(nθ) ; −sin(nθ)  cos(nθ) ]**.
10. A² = A·A = (AB)A = A(BA) = AB = **A**; B² = B·B = (BA)B = B(AB) = BA = **B**! Both idempotent!

---

Wapas core chapter wrap-up par jaane ke liye dekho: [Mixed Problems & Chapter Wrap-up](matrices-part5.md).
