> **Class:** 12 | **Subject:** Mathematics | **Chapter 4:** Determinants (Part 2)

# Area of a Triangle Using Determinants

> **Pichle topic mein:** Humne [Determinant of a Square Matrix and Properties](determinants.md) padha. Ab hum determinants ka pehla geometric application — **Area of a Triangle**, **Collinearity of 3 Points**, aur **Equation of a Line Through Two Points** — seekhenge!

---

Akshay apne gaon mein land surveyor ke saath khet ka area napne gaya tha. Surveyor ne khet ke teen konon ke coordinates map par mark kiye: (1, 0), (6, 0), aur (4, 3). Akshay ne socha ki ab lambi Heron's formula ya distance formula lagani padegi — par surveyor ne sirf ek 3 × 3 determinant likha, 10 seconds mein expand kiya, aur exact area **7.5 sq units** bata diya!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Determinant Area Formula** | Vertices (x₁, y₁), (x₂, y₂), (x₃, y₃) wale triangle ka area: **Δ = (1/2) | det([ x₁ y₁ 1 ; x₂ y₂ 1 ; x₃ y₃ 1 ]) |** |
| **Collinear Points** | Teen points jo **ek hi straight line** par sthit hon (unse banne wale triangle ka area **Δ = 0** hota hai!) |

---

## 1. Formula and Three Crucial Exam Rules

Triangle with vertices A(x₁, y₁), B(x₂, y₂), C(x₃, y₃) has area:
```
            1   │ x₁   y₁   1 │
Area Δ  =  ───  │ x₂   y₂   1 │   (take absolute value!)
            2   │ x₃   y₃   1 │
```
Expanding along Col 3 (or Col 1) gives the familiar coordinate formula:
**Δ = (1/2) | x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂) |**

### Three Must-Remember Rules:
1. **Area is ALWAYS positive:** Agar determinant negative aaye, toh uska **absolute value** lo!
2. **When Area IS GIVEN (Finding unknown k) — TAKE BOTH + AND − VALUES!**
   Agar question mein diya ho "Area = 4 sq units, find k", toh determinant ko **±4** (dono +4 aur −4!) ke barabar rakhna mandatory hai — warna tum ek valid value of k miss kar doge!
3. **Collinearity & Line Equation:**
   - Three points are **collinear ⇔ det([ x₁ y₁ 1 ; x₂ y₂ 1 ; x₃ y₃ 1 ]) = 0**.
   - **Equation of line joining (x₁, y₁) and (x₂, y₂):** Put a general point (x, y) as Row 1 and set determinant = 0:
     **det([ x  y  1 ; x₁  y₁  1 ; x₂  y₂  1 ]) = 0**!

---

## Solved Examples

### Example 1: Finding Area of a Triangle
Find the area of the triangle with vertices **(2, 7), (1, 1), and (10, 8)**.

**Solution:**
Δ = (1/2) × det([ 2  7  1 ; 1  1  1 ; 10  8  1 ]).
Apply R₁ → R₁ − R₂ and R₃ → R₃ − R₂ (creates two zeros in Col 3!):
= (1/2) × det([ 1  6  0 ; 1  1  1 ; 9  7  0 ]).
Expand along Col 3 (sign of (2,3) is −):
= (1/2) × (−1) × [1(7) − 6(9)] = (1/2) × (−1) × (7 − 54) = (1/2)(47) = **47/2 = 23.5 sq units**.

Jaanch: Direct formula: (1/2)|2(1−8) + 1(8−7) + 10(7−1)| = (1/2)|−14 + 1 + 60| = 47/2 = 23.5 ✅

---

### Example 2: Finding BOTH Values of k When Area Is Given
Find values of **k** if the area of the triangle with vertices **(k, 0), (4, 0), and (0, 2)** is **4 sq units**.

**Solution:**
Use **±4**!
(1/2) × det([ k  0  1 ; 4  0  1 ; 0  2  1 ]) = ±4
Expand along Col 2 (two zeros! Sign of (3,2) is −):
(1/2) × (−2) × (k − 4) = ±4
−(k − 4) = ±4 ⇒ 4 − k = ±4:
- Case 1 (+4): 4 − k = 4 ⇒ **k = 0**
- Case 2 (−4): 4 − k = −4 ⇒ **k = 8**
So **k = 0 or k = 8**!

Jaanch: Base on x-axis from k to 4 has length |4 − k| and height = 2; Area = (1/2)|4 − k|(2) = |4 − k| = 4 ⇒ k = 0 or 8 ✅

---

### Example 3: Equation of a Line Using Determinants
Find the equation of the line joining **(1, 2)** and **(3, 6)** using determinants.

**Solution:**
Let (x, y) be any point on the line. Collinearity gives:
det([ x  y  1 ; 1  2  1 ; 3  6  1 ]) = 0
Expand along Row 1:
x(2 − 6) − y(1 − 3) + 1(6 − 6) = 0
−4x + 2y + 0 = 0 ⇒ **y = 2x** (or 2x − y = 0)!

Jaanch: Check (1, 2): 2 = 2(1); Check (3, 6): 6 = 2(3) ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Area given hone par sirf +Δ lena aur −Δ bhool jana:**
   - *Galat:* (1/2) det = +4 se sirf k = 0 nikal kar ruk jana.
   - *Sahi:* Determinant positive ya negative dono ho sakta hai, isliye hamesha **±4** lo → **k = 0 aur k = 8 dono!**

2. **Formula ke bahar wala (1/2) bhool jana:**
   - *Galat:* Area = |det| likh dena.
   - *Sahi:* Determinant **parallelogram** ka area deta hai; triangle ke liye **(1/2)** zaroor lagao!

---

## Quick Recap

- **Area:** Δ = (1/2) |det([ x₁ y₁ 1 ; x₂ y₂ 1 ; x₃ y₃ 1 ])|.
- **Given area:** Set (1/2) det = **±Area** (gives 2 values of unknown!).
- **Collinear ⇔ det = 0**; **Line through (x₁,y₁) & (x₂,y₂):** det([ x y 1 ; x₁ y₁ 1 ; x₂ y₂ 1 ]) = 0.

---

## Practice Questions

1. Find the area of the triangle with vertices: (a) (1, 0), (6, 0), (4, 3); (b) (−2, −3), (3, 2), (−1, −8).
2. Show that the points A(a, b + c), B(b, c + a), and C(c, a + b) are collinear.
3. Find the values of k if the area of the triangle with vertices (−2, 0), (0, 4), and (0, k) is 4 sq units.
4. Find the equation of the line joining (3, 1) and (9, 3) using determinants.
5. If the area of the triangle with vertices (2, −6), (5, 4), and (k, 4) is 35 sq units, find the values of k.
6. Find the value of k for which the points (k, 2 − 2k), (−k + 1, 2k), and (−4 − k, 6 − 2k) are collinear.
7. Using determinants, check whether the points (1, 4), (2, 7), and (5, 16) are collinear.
8. Find the area of the quadrilateral with vertices (in order) A(0, 0), B(4, 0), C(4, 3), and D(1, 5) by splitting it into two triangles.
9. A triangle has vertices (0, 0), (a, 0), and (0, b) with a, b > 0. Verify using determinants that its area is ab/2.
10. Find the equation of the line passing through (−1, 3) and (2, −3) using determinants.

---

### Answers

1. (a) (1/2) |det([1 0 1 ; 6 0 1 ; 4 3 1])| = (1/2)|−3(1−6)| = **15/2 = 7.5 sq units**.
   (b) (1/2) |det([−2 −3 1 ; 3 2 1 ; −1 −8 1])| = (1/2)|−2(10) + 3(4) + 1(−22)| = (1/2)|−30| = **15 sq units**.
   Jaanch: (a) Base = 5, height = 3 → 5×3/2 = 7.5; (b) −20 + 12 − 22 = −30 → |−30|/2 = 15 ✅
2. det([ a  b+c  1 ; b  c+a  1 ; c  a+b  1 ]). Apply C₁ → C₁ + C₂: Col 1 becomes [ a+b+c, a+b+c, a+b+c ] = (a+b+c) × Col 3 ⇒ **det = 0** ⇒ collinear!
3. (1/2) det([ −2  0  1 ; 0  4  1 ; 0  k  1 ]) = ±4 ⇒ (1/2)(−2)(4 − k) = ±4 ⇒ k − 4 = ±4 ⇒ **k = 8 or k = 0**.
   Jaanch: Base on y-axis = |k − 4|, height = 2 ⇒ Area = |k − 4| = 4 ⇒ k = 0, 8 ✅
4. det([ x  y  1 ; 3  1  1 ; 9  3  1 ]) = 0 ⇒ x(1−3) − y(3−9) + 1(9−9) = 0 ⇒ −2x + 6y = 0 ⇒ **x − 3y = 0** (or y = x/3).
   Jaanch: (3, 1) and (9, 3) both satisfy x = 3y ✅
5. (1/2) det([ 2  −6  1 ; 5  4  1 ; k  4  1 ]) = ±35 ⇒ det = ±70.
   Expand: 2(4−4) − (−6)(5−k) + 1(20 − 4k) = 30 − 6k + 20 − 4k = 50 − 10k = ±70.
   - 50 − 10k = 70 ⇒ 10k = −20 ⇒ **k = −2**.
   - 50 − 10k = −70 ⇒ 10k = 120 ⇒ **k = 12**.
   Answer: **k = 12 or k = −2**!
   Jaanch: Base on y = 4 is |5 − k|, height from y = −6 to y = 4 is 10; Area = 5|5 − k| = 35 ⇒ |5 − k| = 7 ⇒ k = −2 or 12 ✅
6. Apply R₂ → R₂ − R₁ and R₃ → R₃ − R₁:
   det([ k  2−2k  1 ; 1−2k  4k−2  0 ; −4−2k  4  0 ]) = 0
   ⇒ 4(1 − 2k) − (4k − 2)(−4 − 2k) = 0 ⇒ 4 − 8k + 8k² + 12k − 8 = 0 ⇒ 8k² + 4k − 4 = 0 ⇒ 2k² + k − 1 = 0 ⇒ (2k − 1)(k + 1) = 0 ⇒ **k = 1/2 or k = −1**!
   Jaanch: At k = −1: points are (−1, 4), (2, −2), (−3, 8) → slopes (−2−4)/(2+1) = −2 and (8−4)/(−3+1) = −2 (collinear!) ✅
7. det([ 1 4 1 ; 2 7 1 ; 5 16 1 ]) = 1(7−16) − 4(2−5) + 1(32−35) = −9 + 12 − 3 = **0** ⇒ **Collinear**!
8. Split along diagonal AC:
   - Area(ΔABC) = (1/2)|det([0 0 1 ; 4 0 1 ; 4 3 1])| = (1/2)(12) = **6**.
   - Area(ΔACD) = (1/2)|det([0 0 1 ; 4 3 1 ; 1 5 1])| = (1/2)|20 − 3| = **17/2 = 8.5**.
   Total Area = 6 + 8.5 = **14.5 sq units**.
   Jaanch: Both triangles are non-overlapping; 6 + 8.5 = 14.5 ✅
9. Δ = (1/2) |det([ 0 0 1 ; a 0 1 ; 0 b 1 ])| = (1/2) |1(ab − 0)| = **ab / 2**.
10. det([ x y 1 ; −1 3 1 ; 2 −3 1 ]) = 0 ⇒ x(6) − y(−3) + 1(3 − 6) = 0 ⇒ 6x + 3y − 3 = 0 ⇒ **2x + y − 1 = 0**.
    Jaanch: 2(−1)+3−1 = 0; 2(2)+(−3)−1 = 0 ✅

---

Ab tum determinants se kisi bhi triangle ka area, unknown coordinates (dono ± cases!) aur line equations aasani se nikal sakte ho!

**Agle topic mein:** Hum [Minors, Cofactors, Adjoint and Inverse of a Matrix](determinants-part3.md) padhenge — jahan elementary row operations ke bina **A⁻¹ = (1/|A|) adj(A)** ka direct super-fast formula milega!
