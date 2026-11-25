# Chapter: Complex Numbers and Quadratic Equations (Part 4)

> **Class:** 11 | **Subject:** Mathematics
> **Ye file [complex-numbers-and-quadratic-equations-part3.md](complex-numbers-and-quadratic-equations-part3.md) se aage chalti hai** (wahan Topic 3 mein Polar Form r(cos θ + i sin θ) aur Principal Argument the). Real roots wala quadratic formula Class 10 mein padha tha: [quadratic-equations.md](../../../class10/maths/quadratic-equations/quadratic-equations.md).
> **Topics covered in this file:**
> 4. Quadratic Equations with Complex Roots

---

# Topic 4: Quadratic Equations with Complex Roots

Class 10 ke [quadratic-equations.md](../../../class10/maths/quadratic-equations/quadratic-equations.md) mein tumne quadratic equation **ax² + bx + c = 0** (jahan a, b, c ∈ R, a ≠ 0) ka discriminant **D = b² − 4ac** dekha tha. Jab D ≥ 0 hota tha, to tum real roots nikaal lete the; par jaise hi **D < 0** aata, hum likh kar ruk jaate the: *"No real roots."* Ab hamare paas **i = √(−1)** hai! Is topic mein hum D < 0 wali har quadratic equation ke exact **complex roots** nikaalenge aur unke conjugate-pair ke sundar niyam dekhenge.

---

## Vijaya ki hawa mein tairti parabola

Vijaya apni Class 10 ki graph notebook palat rahi thi. Ek page par **y = x² + 4** ka U-shaped parabola bana tha, jo x-axis se 4 units upar hawa mein tair raha tha — x-axis ko kahin nahi chhoota tha! Uske neeche likha tha: *"No real roots."*

Vijaya ne ab Class 11 ki nazar se x² + 4 = 0 hal kiya:
x² = −4 ⟹ x = ±√(−4) = **±2i**!
Usne check kiya: (2i)² + 4 = −4 + 4 = 0, aur (−2i)² + 4 = −4 + 4 = 0!
Teacher ma'am muskuraayi: "Dekha Vijaya? Real number line par roots nahi the, par **Complex Plane C** mein har quadratic equation ke **hamesha theek 2 roots** hote hain — aur agar coefficients real hon, to complex roots hamesha **conjugate pairs (p + iq aur p − iq)** mein aate hain!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Complex roots** | D = b² − 4ac < 0 hone par milne wale non-real roots | x² + 4 = 0 ke roots ±2i |
| **Conjugate-root pair** | Real coefficients wali quadratic ke non-real roots hamesha p + iq aur p − iq hote hain | −1 + 2i aur −1 − 2i |
| **Fundamental Theorem of Algebra** | Har degree n ki polynomial equation ke C mein (ginti sahit) theek n roots hote hain *(stated)* | x⁴ − 16 = 0 ke 4 roots: ±2, ±2i |

---

## Part A: Quadratic Formula Jab D < 0 Ho

Quadratic equation **ax² + bx + c = 0** (a, b, c ∈ R, a ≠ 0) mein discriminant **D = b² − 4ac < 0** ho, to **4ac − b² > 0** (positive!).
Tab √D = √(−(4ac − b²)) = **i √(4ac − b²)**.
Isliye quadratic formula seedha ban jaata hai:

> **x = [−b ± i √(4ac − b²)] / (2a)**

### Teen Zaroori Baatein (Kyun?)

1. **Conjugate Pair Theorem:** Upar ke formula mein do roots hain:
   α = (−b)/(2a) + i [√(4ac − b²)/(2a)]   aur   β = (−b)/(2a) − i [√(4ac − b²)/(2a)].
   Saaf dikhta hai **β = ᾱ**! Yaani agar real coefficients wali quadratic ka ek root **p + iq** hai, to doosra root pakka **p − iq** hoga!
2. **Sum aur Product of Roots ab bhi bilkul waise hi chalte hain:**
   - **α + β = −b / a**  (= 2p, jo real hai!)
   - **α · β = c / a**  (= p² + q², jo positive real hai!)
3. **Root se Equation Banana:** Agar ek root **p + iq** diya ho, to doosra **p − iq** hoga, aur equation hogi:
   > **x² − (α + β)x + αβ = 0**   ⟹   **x² − 2px + (p² + q²) = 0**

---

## Part B: Worked Examples

### Example 1: Seedhi Complex Quadratic — x² + 2x + 5 = 0

Solve karo: **x² + 2x + 5 = 0**.

**Hal:**
- a = 1, b = 2, c = 5.
- D = 2² − 4(1)(5) = 4 − 20 = **−16 < 0**.
- √D = √(−16) = **4i**.
- x = (−2 ± 4i) / 2 = **−1 ± 2i**.
Roots: **−1 + 2i** aur **−1 − 2i**.

**Jaanch:** Sum = (−1 + 2i) + (−1 − 2i) = −2 = −b/a ✅; Product = (−1)² + 2² = 5 = c/a ✅!

### Example 2: Fractional Complex Roots — 2x² − 3x + 2 = 0

Solve karo: **2x² − 3x + 2 = 0**.

**Hal:**
- a = 2, b = −3, c = 2.
- D = (−3)² − 4(2)(2) = 9 − 16 = **−7 < 0**.
- √D = **i√7**.
- x = (3 ± i√7) / 4 = **3/4 ± (√7 / 4)i**.

**Jaanch:** Sum = 3/4 + 3/4 = 3/2 = −(−3)/2 ✅; Product = (3/4)² + (√7/4)² = (9 + 7)/16 = 1 = 2/2 ✅!

### Example 3: Irrational Coefficients — √5 x² + x + √5 = 0

Solve karo: **√5 x² + x + √5 = 0**.

**Hal:**
- a = √5, b = 1, c = √5.
- D = 1² − 4(√5)(√5) = 1 − 20 = **−19 < 0**.
- √D = **i√19**.
- x = **(−1 ± i√19) / (2√5)**.

**Jaanch:** Sum = −2/(2√5) = −1/√5 = −b/a ✅; Product = (1 + 19)/(4 × 5) = 20/20 = 1 = √5/√5 ✅!

### Example 4: Ek Complex Root se Quadratic Equation Banana

Wo real-coefficient quadratic equation nikalo jiska ek root **2 − 3i** hai.

**Hal:**
- Kyunki coefficients real hain, doosra root iska conjugate hoga: **2 + 3i**.
- Sum of roots: (2 − 3i) + (2 + 3i) = **4**.
- Product of roots: (2 − 3i)(2 + 3i) = 2² + 3² = 4 + 9 = **13**.
- Required equation: **x² − 4x + 13 = 0**.

**Jaanch:** D = 16 − 52 = −36 ⟹ x = (4 ± 6i)/2 = 2 ± 3i ✅!

### Example 5: Degree 4 Equation Over C — x⁴ − 16 = 0

**x⁴ − 16 = 0** ke sabhi 4 roots complex numbers C mein nikalo.

**Hal:**
Factor karo:
x⁴ − 16 = (x² − 4)(x² + 4) = 0
- Branch 1: x² − 4 = 0 ⟹ **x = 2, −2** (2 real roots).
- Branch 2: x² + 4 = 0 ⟹ x² = −4 ⟹ **x = 2i, −2i** (2 imaginary roots).
Kul 4 roots: **2, −2, 2i, −2i**.

**Jaanch:** (±2)⁴ = 16 aur (±2i)⁴ = 16 i⁴ = 16 ✅!

---

## Aam galtiyan

1. **D < 0 dekh kar "No solution" likh kar chhod dena:**
   - *Sahi soch:* Class 10 mein hum sirf real roots poochhte the. Class 11 mein complex numbers mein har quadratic equation ke **2 roots** hote hain — √(−|D|) = i√|D| lagao!
2. **i ko square root ke andar hi chhod dena ya bhool jaana:** Student D = −7 ke liye (3 ± √7)/4 likh deta hai (i gayab!).
   - *Sahi soch:* Minus bahar nikaal kar hamesha **i** likho: √(−7) = **i√7**.
3. **Real quadratic ke do unrelated complex roots maan lena:** Student sochta hai ek root 2 + 3i aur doosra 5 − i ho sakta hai.
   - *Galat kyun:* Real coefficients wale quadratic ke non-real roots **hamesha conjugate pair (p ± iq)** hote hain — kabhi alag nahi!

---

## Quick Recap

- **D = b² − 4ac < 0** ke liye roots: **x = [−b ± i √(4ac − b²)] / (2a)**.
- Real coefficients wali quadratic ke non-real roots hamesha **conjugate pair p ± iq** hote hain.
- **Sum = −b/a = 2p**, **Product = c/a = p² + q²** → **Jaanch** ke liye sabse tez tareeka!
- Ek root p + iq diya ho to equation: **x² − 2px + (p² + q²) = 0**.

---

## Practice Questions

1. Solve the following quadratic equations in C:
   (a) x² + 9 = 0    (b) 2x² + x + 1 = 0    (c) x² + 3x + 9 = 0

2. Solve: **−x² + x − 2 = 0**.

3. Solve: **x² + 3x + 5 = 0**.

4. Solve: **√2 x² + x + √2 = 0**.

5. Solve: **√3 x² − √2 x + 3√3 = 0**.

6. Solve: **x² + x + 1/√2 = 0**.

7. Solve: **x² + x/√2 + 1 = 0**.

8. Solve: **3x² − 4x + 20/3 = 0**.

9. Solve: **27x² − 10x + 1 = 0**.

10. Form a quadratic equation with real coefficients whose one root is:
    (a) 3 + 4i    (b) −2 − i√5

11. Find all 4 roots of **x⁴ − 81 = 0** in the complex number system C.

12. Solve **x³ + 8 = 0** completely in C. (Hint: factor as (x + 2)(x² − 2x + 4) = 0!)

### Answers

1. (a) x² = −9 ⟹ **x = ±3i**.
   (b) D = 1 − 8 = −7 ⟹ **x = (−1 ± i√7) / 4**.
   (c) D = 9 − 36 = −27 = −9×3 ⟹ **x = (−3 ± 3i√3) / 2**.
   Jaanch: (c) sum = −3, product = (9 + 27)/4 = 9 ✅.

2. Multiply by −1: x² − x + 2 = 0. D = 1 − 8 = −7 ⟹ **x = (1 ± i√7) / 2**.
   Jaanch: sum = 1, product = (1 + 7)/4 = 2 ✅.

3. D = 9 − 20 = −11 ⟹ **x = (−3 ± i√11) / 2**. Jaanch: product = (9 + 11)/4 = 5 ✅.

4. D = 1 − 4(√2)(√2) = 1 − 8 = −7 ⟹ **x = (−1 ± i√7) / (2√2)**.
   Jaanch: product = (1 + 7)/8 = 1 = √2/√2 ✅.

5. D = 2 − 4(√3)(3√3) = 2 − 36 = −34 ⟹ **x = (√2 ± i√34) / (2√3)**.
   Jaanch: product = (2 + 34)/12 = 36/12 = 3 = 3√3/√3 ✅.

6. Multiply by √2: √2 x² + √2 x + 1 = 0. D = 2 − 4√2 < 0 ⟹ 4√2 − 2 > 0.
   **x = [−√2 ± i√(4√2 − 2)] / (2√2)** = **[−1 ± i√(2√2 − 1)] / 2**.
   Jaanch: product = (1 + 2√2 − 1)/4 = 2√2/4 = 1/√2 ✅!

7. Multiply by √2: √2 x² + x + √2 = 0 (same as Q4!) ⟹ **x = (−1 ± i√7) / (2√2)**.

8. Multiply by 3: 9x² − 12x + 20 = 0. D = 144 − 720 = −576 ⟹ √D = 24i.
   x = (12 ± 24i)/18 = **2/3 ± (4/3)i**. Jaanch: sum = 4/3, product = (4 + 16)/9 = 20/9 = (20/3)/3 ✅!

9. D = 100 − 108 = −8 ⟹ √D = 2i√2.
   x = (10 ± 2i√2)/54 = **(5 ± i√2) / 27**. Jaanch: product = (25 + 2)/729 = 27/729 = 1/27 ✅!

10. (a) Doosra root 3 − 4i. Sum = 6, Product = 9 + 16 = 25 ⟹ **x² − 6x + 25 = 0**.
    (b) Doosra root −2 + i√5. Sum = −4, Product = 4 + 5 = 9 ⟹ **x² + 4x + 9 = 0**.
    Jaanch: (a) D = 36 − 100 = −64 ⟹ (6 ± 8i)/2 = 3 ± 4i ✅.

11. (x² − 9)(x² + 9) = 0 ⟹ **x = 3, −3, 3i, −3i**. Jaanch: (±3i)⁴ = 81 ✅.

12. (x + 2)(x² − 2x + 4) = 0.
    - x + 2 = 0 ⟹ **x = −2** (1 real root).
    - x² − 2x + 4 = 0: D = 4 − 16 = −12 ⟹ **x = (2 ± 2i√3)/2 = 1 ± i√3** (2 conjugate complex roots).
    Kul 3 roots: **−2, 1 + i√3, 1 − i√3**. Jaanch: (1 + i√3)³ = 1 + 3i√3 − 9 − 3i√3 = −8 ✅!

---

Ab tum kisi bhi D < 0 wali quadratic equation (aur factorable cubic/biquadratic equations) ke saare complex roots nikaalna aur verify karna seekh chuke ho.

**Agle aur aakhri topic mein:** poore chapter ke saare tools ko ek saath jodne wale **Decision Map, 6 mixed challenge problems (jinme complex square root aur locus bhi shamil hain!), 12 practice sawaal** aur **Chapter Ka Saar**!
