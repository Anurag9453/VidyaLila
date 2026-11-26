> **Class:** 12 | **Subject:** Mathematics | **Chapter 4:** Determinants (Part 4)

# Applications: Solving Systems of Linear Equations (Matrix Method)

> **Pichle topic mein:** Humne [Minors, Cofactors, Adjoint and Inverse](determinants-part3.md) mein A⁻¹ = (1/|A|) adj(A) seekha. Ab hum is chapter ka sabse practical application — **Matrix Method (X = A⁻¹B)** se 2-variable aur 3-variable systems of linear equations solve karna aur consistency check karna — seekhenge!

---

Anchal apni mummy ke saath sabzi mandi gayi thi jahan teen alag-alag bills mile:
- 4 kg pyaz + 3 kg gehun + 2 kg chawal = ₹60
- 2 kg pyaz + 4 kg gehun + 6 kg chawal = ₹90
- 6 kg pyaz + 2 kg gehun + 3 kg chawal = ₹70
Teeno equations ko ek single compact matrix equation **A X = B** mein likh kar **X = A⁻¹ B** nikalne se ek hi baar mein pyaz, gehun aur chawal ke exact per-kg daam mil jate hain!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Consistent System** | Woh system of equations jiska kam se kam **1 solution** (unique ya infinitely many) exist karta ho |
| **Inconsistent System** | Woh system of equations jiska **KOI solution nahi** hota |
| **Matrix Form (AX = B)** | Coefficient matrix A, variable column X = [ x ; y ; z ], aur constant column B = [ d₁ ; d₂ ; d₃ ] |

---

## 1. Complete Decision Tree for AX = B (100% Exam Concept!)

Given linear system **A X = B**:

```
                   Compute det(A)
                    /           \
         det(A) ≠ 0              det(A) = 0
              │                      │
      Unique Solution        Compute (adj A) · B
         X = A⁻¹ B            /               \
        (Consistent)   (adj A)B ≠ O       (adj A)B = O
                            │                  │
                       NO Solution     Infinitely Many Solutions
                      (Inconsistent)   (Consistent) OR No Solution
```

- **Case 1 (|A| ≠ 0):** A⁻¹ exists → **Unique solution X = A⁻¹B** (always **Consistent**).
- **Case 2 (|A| = 0 and (adj A)B ≠ O):** **No solution** (**Inconsistent**).
- **Case 3 (|A| = 0 and (adj A)B = O):** Usually **Infinitely many solutions** (**Consistent** — put z = k and solve for x, y in terms of k; occasionally parallel planes can still be inconsistent, so check directly!).

---

## Solved Examples

### Example 1: Solving a 3 × 3 System by Matrix Method (Anchal's Mandi Problem!)
Solve by matrix method:
- 4x + 3y + 2z = 60
- 2x + 4y + 6z = 90
- 6x + 2y + 3z = 70

**Solution:**
Write AX = B where A = [ 4  3  2 ; 2  4  6 ; 6  2  3 ], X = [ x ; y ; z ], B = [ 60 ; 90 ; 70 ].

1. **Compute |A|:**
   |A| = 4(12 − 12) − 3(6 − 36) + 2(4 − 24)
   = 0 − 3(−30) + 2(−20) = 90 − 40 = **50 ≠ 0** (unique solution exists!).

2. **Compute Cofactors of A:**
   - A₁₁ = 0,     A₁₂ = 30,    A₁₃ = −20
   - A₂₁ = −5,    A₂₂ = 0,     A₂₃ = 10
   - A₃₁ = 10,    A₃₂ = −20,   A₃₃ = 10

3. **Adjoint & Inverse:**
   adj(A) = [ 0  −5  10 ; 30  0  −20 ; −20  10  10 ]
   A⁻¹ = (1/50) [ 0  −5  10 ; 30  0  −20 ; −20  10  10 ]

4. **Compute X = A⁻¹B:**
   - x = (1/50)[ 0(60) + (−5)(90) + 10(70) ] = (1/50)(−450 + 700) = 250 / 50 = **5**
   - y = (1/50)[ 30(60) + 0(90) + (−20)(70) ] = (1/50)(1800 − 1400) = 400 / 50 = **8**
   - z = (1/50)[ (−20)(60) + 10(90) + 10(70) ] = (1/50)(−1200 + 900 + 700) = 400 / 50 = **8**
   So **x = ₹5/kg (onion), y = ₹8/kg (wheat), z = ₹8/kg (rice)**!

Jaanch: Check all 3 original equations: 4(5)+3(8)+2(8) = 20+24+16 = 60; 2(5)+4(8)+6(8) = 10+32+48 = 90; 6(5)+2(8)+3(8) = 30+16+24 = 70 ✅

---

### Example 2: Checking Consistency When |A| = 0
Examine the consistency of the system:
- x + 3y = 5
- 2x + 6y = 8

**Solution:**
A = [ 1  3 ; 2  6 ], B = [ 5 ; 8 ].
- |A| = 6 − 6 = **0**.
- Compute adj(A) = [ 6  −3 ; −2  1 ].
- Compute (adj A)B = [ 6(5) − 3(8) ; −2(5) + 1(8) ] = **[ 6 ; −2 ] ≠ O**!
Since |A| = 0 and (adj A)B ≠ O, the system has **NO solution (Inconsistent)**!

Jaanch: Dividing 2x + 6y = 8 by 2 gives x + 3y = 4, contradicting x + 3y = 5 (parallel lines!) ✅

---

### Example 3: Solving a System Using Reciprocal Variables (1/x, 1/y, 1/z)
Solve: 2/x + 3/y = 13 and 5/x − 4/y = −2 using the matrix method.

**Solution:**
Let **u = 1/x** and **v = 1/y**. System becomes:
2u + 3v = 13,   5u − 4v = −2.
A = [ 2  3 ; 5  −4 ], B = [ 13 ; −2 ].
- |A| = −8 − 15 = **−23 ≠ 0**.
- adj(A) = [ −4  −3 ; −5  2 ].
- [ u ; v ] = (−1/23) [ −4(13) + (−3)(−2) ; −5(13) + 2(−2) ] = (−1/23) [ −46 ; −69 ] = **[ 2 ; 3 ]**.
Therefore, u = 1/x = 2 ⇒ **x = 1/2**, and v = 1/y = 3 ⇒ **y = 1/3**!

Jaanch: 2/(1/2) + 3/(1/3) = 4 + 9 = 13; 5/(1/2) − 4/(1/3) = 10 − 12 = −2 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **X = B A⁻¹ likh dena:**
   - *Galat:* AX = B ⇒ X = B·A⁻¹.
   - *Sahi:* Matrix multiplication non-commutative hai! Dono taraf **left se (pre-multiply)** A⁻¹ lagao → **X = A⁻¹ B**!

2. **Missing variable ka coefficient 0 rakhna bhool jana:**
   - *Galat:* x + 2z = 5 ko Row [ 1  2  5 ] likh dena.
   - *Sahi:* Missing y ka coefficient **0** rakho → Row = **[ 1  0  2 ]**!

3. **|A| = 0 aate hi bina (adj A)B check kiye "No solution" likh dena:**
   - *Galat:* |A| = 0 ⇒ inconsistent.
   - *Sahi:* Pehle **(adj A)B** check karo! Agar (adj A)B ≠ O tab inconsistent; agar (adj A)B = O toh infinitely many solutions (consistent) ho sakte hain!

---

## Quick Recap

- **Matrix equation:** AX = B → **X = A⁻¹B** (when |A| ≠ 0, unique solution, consistent).
- **When |A| = 0:** (adj A)B ≠ O ⇒ **Inconsistent (no solution)**; (adj A)B = O ⇒ **Consistent (infinite solutions)** or check parallel planes.
- **Always substitute final (x, y, z)** into all 3 original equations as your Jaanch!

---

## Practice Questions

1. Examine the consistency of the system: 2x − y = 5 and x + y = 4.
2. Examine the consistency of the system: x + 2y = 2 and 2x + 4y = 4.
3. Solve by matrix method: 5x + 2y = 4 and 7x + 3y = 5.
4. Solve by matrix method: 2x − y = −2 and 3x + 4y = 3.
5. Solve by matrix method:
   x + y + z = 6
   y + 3z = 11
   x − 2y + z = 0
6. Solve by matrix method:
   2x + y + z = 1
   x − 2y − z = 3/2
   3y − 5z = 9
7. Solve by matrix method:
   x − y + 2z = 7
   3x + 4y − 5z = −5
   2x − y + 3z = 12
8. The sum of three numbers is 6. If we multiply the third number by 3 and add the second number to it, we get 11. By adding the first and third numbers, we get double the second number. Find the three numbers using the matrix method.
9. Find the value of **k** for which the system **kx + 3y = 7** and **2x + 6y = 10** has NO solution.
10. Solve by matrix method: 2/x + 3/y + 10/z = 4, 4/x − 6/y + 5/z = 1, 6/x + 9/y − 20/z = 2.

---

### Answers

1. |A| = 2(1) − (−1)(1) = 3 ≠ 0 ⇒ **Consistent** (unique solution: x = 3, y = 1).
2. |A| = 4 − 4 = 0; adj(A)B = [ 4 −2 ; −2 1 ][ 2 ; 4 ] = [ 0 ; 0 ] = O (second eq is 2× first!) ⇒ **Consistent (infinitely many solutions)**.
3. |A| = 15 − 14 = 1; A⁻¹ = [ 3  −2 ; −7  5 ].
   X = [ 3(4)−2(5) ; −7(4)+5(5) ] = [ 2 ; −3 ] ⇒ **x = 2, y = −3**.
   Jaanch: 5(2)+2(−3) = 4; 7(2)+3(−3) = 5 ✅
4. |A| = 8 − (−3) = 11; A⁻¹ = (1/11)[ 4  1 ; −3  2 ].
   X = (1/11)[ −8+3 ; 6+6 ] = [ −5/11 ; 12/11 ] ⇒ **x = −5/11, y = 12/11**.
   Jaanch: 2(−5/11)−12/11 = −22/11 = −2; 3(−5/11)+4(12/11) = 33/11 = 3 ✅
5. A = [ 1  1  1 ; 0  1  3 ; 1  −2  1 ], |A| = 1(7) − 1(−3) + 1(−1) = **9**.
   adj(A) = [ 7  −3  2 ; 3  0  −3 ; −1  3  1 ].
   X = (1/9)[ 42−33+0 ; 18+0+0 ; −6+33+0 ] = (1/9)[ 9 ; 18 ; 27 ] = **[ 1 ; 2 ; 3 ]** ⇒ **x = 1, y = 2, z = 3**!
   Jaanch: 1+2+3=6, 2+9=11, 1−4+3=0 ✅
6. Multiply 2nd eq by 2: 2x − 4y − 2z = 3. A = [ 2  1  1 ; 2  −4  −2 ; 0  3  −5 ], |A| = 68.
   Solving X = A⁻¹B gives **x = 1, y = 1/2, z = −3/2**.
   Jaanch: 2(1)+1/2−3/2 = 1; 1−1+3/2 = 3/2; 3/2+15/2 = 9 ✅
7. A = [ 1 −1 2 ; 3 4 −5 ; 2 −1 3 ], |A| = 1(7) + 1(19) + 2(−11) = **4**.
   adj(A) = [ 7  1  −3 ; −19  −1  11 ; −11  −1  7 ].
   X = (1/4)[ 49−5−36 ; −133+5+132 ; −77+5+84 ] = (1/4)[ 8 ; 4 ; 12 ] = **[ 2 ; 1 ; 3 ]** ⇒ **x = 2, y = 1, z = 3**!
   Jaanch: 2−1+6 = 7; 6+4−15 = −5; 4−1+9 = 12 ✅
8. Equations: x + y + z = 6, y + 3z = 11, x − 2y + z = 0 (same as Q5!) ⇒ **1, 2, and 3**.
9. |A| = 6k − 6 = 0 ⇒ **k = 1**. Check (adj A)B = [ 6 −3 ; −2 1 ][ 7 ; 10 ] = [ 12 ; −4 ] ≠ O ⇒ no solution for **k = 1**!
10. Put u = 1/x, v = 1/y, w = 1/z. |A| = 1200; solving gives u = 1/2, v = 1/3, w = 1/5 ⇒ **x = 2, y = 3, z = 5**!
    Jaanch: 2/2 + 3/3 + 10/5 = 1 + 1 + 2 = 4; 4/2 − 6/3 + 5/5 = 2 − 2 + 1 = 1; 6/2 + 9/3 − 20/5 = 3 + 3 − 4 = 2 ✅

---

Ab tum matrix method se kisi bhi linear system ko solve kar sakte ho aur consistency check kar sakte ho!

**Agle topic mein:** [Sab Kuch Mila Kar: Mixed Problems & Chapter Wrap-up](determinants-part5.md) mein hum poore Determinants chapter ke mixed high-scoring problems (product-to-inverse shortcut!) solve karenge aur final summary table banayenge!
