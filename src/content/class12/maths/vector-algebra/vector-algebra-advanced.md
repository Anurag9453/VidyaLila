> **Class:** 12 | **Subject:** Mathematics | **Chapter 10:** Vector Algebra (Gehrai Mein — Advanced Level)

# Vector Algebra — Gehrai Mein (Advanced Level)

> **Core chapter se bridge:** Core lessons ([Part 1: Basics](vector-algebra.md) se [Part 5: Mixed Problems](vector-algebra-part5.md) tak) mein humne components, dot product, cross product aur Lagrange's identity padhe. Ab competitive-exam depth mein hum **Scalar Triple Product [a⃗ b⃗ c⃗], Volume of Parallelepiped & Tetrahedron, Coplanarity Condition, Vector Triple Product (BAC−CAB Rule), aur Solving Vector Equations** cover karenge.

---

Pawan ek 3D-geometry olympiad seminar mein ek tilted crystal block (parallelepiped) ka volume nikal raha tha jiske 3 coterminous edges a⃗, b⃗, c⃗ the. Speaker ne dikhaya: Base area = |b⃗ × c⃗|, aur height = a⃗ ka (b⃗ × c⃗) par projection → dono ko multiply karne par sidha **Volume = |a⃗ · (b⃗ × c⃗)| = |det([ a⃗ ; b⃗ ; c⃗ ])|** mil jata hai! Aur agar yeh determinant **0** ho jaye, toh volume 0 — yaani teeno vectors **ek hi plane mein (Coplanar!)** hain!

---

## 1. Scalar Triple Product (STP): [a⃗ b⃗ c⃗] = a⃗ · (b⃗ × c⃗)

For a⃗ = (a₁, a₂, a₃), b⃗ = (b₁, b₂, b₃), c⃗ = (c₁, c₂, c₃):
**[a⃗ b⃗ c⃗] = a⃗ · (b⃗ × c⃗) = det([ a₁  a₂  a₃ ; b₁  b₂  b₃ ; c₁  c₂  c₃ ])** (a **scalar**!).

### Key Properties & Applications of STP:
1. **Cyclic Invariance:** **[a⃗ b⃗ c⃗] = [b⃗ c⃗ a⃗] = [c⃗ a⃗ b⃗]** (dot and cross can be interchanged: a⃗·(b⃗×c⃗) = (a⃗×b⃗)·c⃗!).
2. **Swap Flips Sign:** [a⃗ c⃗ b⃗] = −[a⃗ b⃗ c⃗].
3. **Two Equal or Parallel Vectors ⇒ 0:** [a⃗ a⃗ b⃗] = **0**.
4. **Volume of Parallelepiped (coterminous edges a⃗, b⃗, c⃗):** **V = |[a⃗ b⃗ c⃗]|**.
5. **Volume of Tetrahedron (coterminous edges a⃗, b⃗, c⃗):** **V = (1/6) |[a⃗ b⃗ c⃗]|**!
6. **Coplanarity Condition (100% Exam Favourite!):**
   - Three vectors a⃗, b⃗, c⃗ are **coplanar ⇔ [a⃗ b⃗ c⃗] = 0**!
   - Four points A, B, C, D are **coplanar ⇔ [AB⃗ AC⃗ AD⃗] = 0**!
7. **Famous Identity:** **[a⃗ + b⃗, b⃗ + c⃗, c⃗ + a⃗] = 2 [a⃗ b⃗ c⃗]**, while **[a⃗ − b⃗, b⃗ − c⃗, c⃗ − a⃗] = 0**!

---

## 2. Vector Triple Product (VTP) — The BAC − CAB Rule!

**a⃗ × (b⃗ × c⃗) = (a⃗ · c⃗) b⃗ − (a⃗ · b⃗) c⃗**   *(Mnemonic: **B(A·C) − C(A·B)** = "BAC minus CAB"!)*
- **Geometric meaning:** a⃗ × (b⃗ × c⃗) is a vector **lying in the plane of b⃗ and c⃗** and **perpendicular to a⃗**!
- **NOT Associative:** (a⃗ × b⃗) × c⃗ = (a⃗ · c⃗) b⃗ − (b⃗ · c⃗) a⃗ ≠ a⃗ × (b⃗ × c⃗)!
- **Jacobi Identity:** **a⃗ × (b⃗ × c⃗) + b⃗ × (c⃗ × a⃗) + c⃗ × (a⃗ × b⃗) = 0⃗**!

---

## 3. Useful Advanced Vector Identities

1. **[a⃗ × b⃗, b⃗ × c⃗, c⃗ × a⃗] = [a⃗ b⃗ c⃗]²**!
2. **î × (a⃗ × î) + ĵ × (a⃗ × ĵ) + k̂ × (a⃗ × k̂) = 2 a⃗**!

---

## Deep Solved Problems

### Problem 1: Coplanarity of Three Vectors via STP
Find **λ** if the vectors **a⃗ = î − ĵ + k̂**, **b⃗ = 3î + ĵ + 2k̂**, and **c⃗ = î + λĵ − 3k̂** are coplanar.

**Solution:**
Coplanar ⇔ [a⃗ b⃗ c⃗] = 0:
det([ 1  −1  1 ; 3  1  2 ; 1  λ  −3 ]) = 0
Expand along Row 1:
1(−3 − 2λ) − (−1)(−9 − 2) + 1(3λ − 1) = 0
−3 − 2λ − 11 + 3λ − 1 = 0 ⇒ λ − 15 = 0 ⇒ **λ = 15**!

Jaanch: At λ = 15: 1(−33) + 1(−11) + 1(44) = −44 + 44 = 0 ✅

---

### Problem 2: Volume of a Tetrahedron from 4 Vertices
Find the volume of the tetrahedron with vertices **A(1, 1, 1), B(2, 1, 3), C(3, 2, 2), and D(3, 3, 4)**.

**Solution:**
Form 3 coterminous edge vectors from A:
- AB⃗ = (1, 0, 2)
- AC⃗ = (2, 1, 1)
- AD⃗ = (2, 2, 3)
Compute STP = det([ 1  0  2 ; 2  1  1 ; 2  2  3 ]):
= 1(3 − 2) − 0 + 2(4 − 2) = 1 + 4 = **5**.
Volume of tetrahedron = (1/6) |STP| = **5 / 6 cubic units**!

Jaanch: 1(1) + 2(2) = 5; V = 5/6 ✅

---

### Problem 3: Applying BAC − CAB Rule
If **a⃗ = î + ĵ + k̂**, **b⃗ = î − ĵ + k̂**, and **c⃗ = î + 2ĵ − k̂**, find **a⃗ × (b⃗ × c⃗)**.

**Solution:**
By BAC − CAB: a⃗ × (b⃗ × c⃗) = **(a⃗ · c⃗) b⃗ − (a⃗ · b⃗) c⃗**.
- a⃗ · c⃗ = 1(1) + 1(2) + 1(−1) = **2**.
- a⃗ · b⃗ = 1(1) + 1(−1) + 1(1) = **1**.
Substitute:
= 2(î − ĵ + k̂) − 1(î + 2ĵ − k̂) = **î − 4ĵ + 3k̂**!

Jaanch: Check perpendicularity to a⃗: (1)(1) + (−4)(1) + (3)(1) = 1 − 4 + 3 = 0 ✅

---

### Problem 4: Proving [a⃗ + b⃗, b⃗ + c⃗, c⃗ + a⃗] = 2 [a⃗ b⃗ c⃗]
Prove that **[a⃗ + b⃗, b⃗ + c⃗, c⃗ + a⃗] = 2 [a⃗ b⃗ c⃗]**.

**Solution:**
First expand (b⃗ + c⃗) × (c⃗ + a⃗) = b⃗×c⃗ + b⃗×a⃗ + c⃗×c⃗ + c⃗×a⃗ = **b⃗×c⃗ + b⃗×a⃗ + c⃗×a⃗**.
Dot with (a⃗ + b⃗) (any STP with a repeated vector is 0!):
- a⃗ · (b⃗×c⃗ + b⃗×a⃗ + c⃗×a⃗) = [a⃗ b⃗ c⃗] + 0 + 0 = **[a⃗ b⃗ c⃗]**.
- b⃗ · (b⃗×c⃗ + b⃗×a⃗ + c⃗×a⃗) = 0 + 0 + [b⃗ c⃗ a⃗] = **[a⃗ b⃗ c⃗]**.
Sum = **[a⃗ b⃗ c⃗] + [a⃗ b⃗ c⃗] = 2 [a⃗ b⃗ c⃗]**!

Jaanch: Matrix determinant check: det([ 1 1 0 ; 0 1 1 ; 1 0 1 ]) = 1(1) − 1(−1) = 2 ✅

---

### Problem 5: Solving a Vector Equation r⃗ × a⃗ = b⃗
Find a vector **r⃗** satisfying **r⃗ × a⃗ = b⃗** and **r⃗ · c⃗ = 0**, where **a⃗ · c⃗ ≠ 0** and **a⃗ · b⃗ = 0**.

**Solution:**
Take the cross product of **r⃗ × a⃗ = b⃗** with **c⃗** from the left:
c⃗ × (r⃗ × a⃗) = c⃗ × b⃗
Apply BAC − CAB to LHS:
(c⃗ · a⃗) r⃗ − (c⃗ · r⃗) a⃗ = c⃗ × b⃗
Since **r⃗ · c⃗ = 0**:
(a⃗ · c⃗) r⃗ = c⃗ × b⃗ ⇒ **r⃗ = (c⃗ × b⃗) / (a⃗ · c⃗)**!

Jaanch: Check r⃗ · c⃗ = [(c⃗ × b⃗) · c⃗] / (a⃗ · c⃗) = 0; check r⃗ × a⃗ = [(c⃗×b⃗)×a⃗]/(a⃗·c⃗) = [(a⃗·c⃗)b⃗ − (a⃗·b⃗)c⃗]/(a⃗·c⃗) = b⃗ ✅

---

## Advanced Practice Questions

1. Find the volume of the parallelepiped whose coterminous edges are **2î − 3ĵ + 4k̂**, **î + 2ĵ − k̂**, and **3î − ĵ + 2k̂**.
2. Show that the four points **A(4, 5, 1), B(0, −1, −1), C(3, 9, 4), and D(−4, 4, 4)** are coplanar.
3. Prove that **[a⃗ − b⃗, b⃗ − c⃗, c⃗ − a⃗] = 0** for any three vectors a⃗, b⃗, c⃗.
4. Evaluate **î × (ĵ × k̂) + ĵ × (k̂ × î) + k̂ × (î × ĵ)**.
5. Prove that **î × (a⃗ × î) + ĵ × (a⃗ × ĵ) + k̂ × (a⃗ × k̂) = 2 a⃗**.
6. If **a⃗ × (b⃗ × c⃗) = (1/2) b⃗** where b⃗ and c⃗ are non-parallel unit vectors and a⃗ is a unit vector, find the angles that a⃗ makes with **b⃗** and **c⃗**.
7. If **[a⃗ b⃗ c⃗] = 4**, find the value of **[a⃗ × b⃗, b⃗ × c⃗, c⃗ × a⃗]**.
8. Find the volume of the tetrahedron with vertices **(0, 0, 0), (1, 2, 1), (2, 1, 3), and (−1, 1, 2)**.
9. Simplify **[a⃗ + b⃗, b⃗ + c⃗, c⃗ + a⃗] / [a⃗ b⃗ c⃗]** (for non-coplanar a⃗, b⃗, c⃗).
10. Find **a⃗ × (b⃗ × c⃗)** if **a⃗ = 2î + ĵ − k̂**, **b⃗ = î + 2ĵ + k̂**, and **c⃗ = î − ĵ + 2k̂**.

---

### Solutions

1. det([ 2 −3 4 ; 1 2 −1 ; 3 −1 2 ]) = 2(4 − 1) + 3(2 + 3) + 4(−1 − 6) = 6 + 15 − 28 = −7 ⇒ Volume = |−7| = **7 cubic units**.
   Jaanch: 6 + 15 − 28 = −7 ⇒ |−7| = 7 ✅
2. AB⃗ = (−4, −6, −2), AC⃗ = (−1, 4, 3), AD⃗ = (−8, −1, 3).
   det = −4(12 + 3) + 6(−3 + 24) − 2(1 + 32) = −60 + 126 − 66 = **0** ⇒ Coplanar!
3. Sum of the 3 vectors (a⃗ − b⃗) + (b⃗ − c⃗) + (c⃗ − a⃗) = 0⃗ ⇒ linearly dependent ⇒ determinant = **0**!
4. By Jacobi identity (or directly 0⃗ + 0⃗ + 0⃗): **0⃗**!
5. Using BAC − CAB: î×(a⃗×î) = (î·î)a⃗ − (î·a⃗)î = a⃗ − a₁î.
   Summing over î, ĵ, k̂: (a⃗ − a₁î) + (a⃗ − a₂ĵ) + (a⃗ − a₃k̂) = 3a⃗ − a⃗ = **2 a⃗**!
6. By BAC − CAB: (a⃗·c⃗) b⃗ − (a⃗·b⃗) c⃗ = (1/2) b⃗ + 0 c⃗. Since b⃗, c⃗ are non-parallel, equate coefficients:
   - a⃗ · b⃗ = 0 ⇒ angle with b⃗ = **π/2 (90°)**.
   - a⃗ · c⃗ = 1/2 ⇒ angle with c⃗ = **π/3 (60°)**.
   Jaanch: Both a⃗, b⃗, c⃗ are unit vectors so dot product directly equals cos θ ✅
7. [a⃗×b⃗, b⃗×c⃗, c⃗×a⃗] = [a⃗ b⃗ c⃗]² = 4² = **16**!
8. det([ 1 2 1 ; 2 1 3 ; −1 1 2 ]) = 1(2 − 3) − 2(4 + 3) + 1(2 + 1) = −1 − 14 + 3 = −12.
   Volume = (1/6)|−12| = **2 cubic units**.
   Jaanch: 12 / 6 = 2 ✅
9. 2 [a⃗ b⃗ c⃗] / [a⃗ b⃗ c⃗] = **2**!
10. a⃗ · c⃗ = 2 − 1 − 2 = −1; a⃗ · b⃗ = 2 + 2 − 1 = 3.
    (−1)(î + 2ĵ + k̂) − 3(î − ĵ + 2k̂) = **−4î + ĵ − 7k̂**!
    Jaanch: Check perpendicular to a⃗: (−4)(2) + (1)(1) + (−7)(−1) = −8 + 1 + 7 = 0 ✅

---

Wapas core chapter wrap-up par jaane ke liye dekho: [Mixed Vector Problems & Chapter Wrap-up](vector-algebra-part5.md).
