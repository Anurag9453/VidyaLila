# Chapter: Complex Numbers and Quadratic Equations (Part 5)

> **Class:** 11 | **Subject:** Mathematics
> **Ye file [complex-numbers-and-quadratic-equations-part4.md](complex-numbers-and-quadratic-equations-part4.md) se aage chalti hai** (wahan Topic 4 mein D < 0 wali quadratic equations aur conjugate-root pairs the). Chapter ki shuruaat: [complex-numbers-and-quadratic-equations.md](complex-numbers-and-quadratic-equations.md). Modulus & Conjugate: [complex-numbers-and-quadratic-equations-part2.md](complex-numbers-and-quadratic-equations-part2.md). Polar Form: [complex-numbers-and-quadratic-equations-part3.md](complex-numbers-and-quadratic-equations-part3.md).
> **Topics covered in this file:**
> 5. Sab Kuch Mila Kar: Mixed Problems, Applications, Practice Aur Chapter Ka Saar

---

# Topic 5: Sab Kuch Mila Kar: Mixed Problems, Applications, Practice Aur Chapter Ka Saar

Pichhle chaar topics mein tumne Complex Numbers ki poori imaarat khadi kar li: iota aur algebra (Topic 1), Argand plane, modulus aur conjugate (Topic 2), polar form aur principal argument (Topic 3), aur complex-root quadratic equations (Topic 4). Ab waqt hai in chaaron ko **ek saath** istemal karne ka! Is aakhri topic mein hum ek **Decision Map** banayenge, 6 mixed challenge problems (jinme complex square root aur Argand-plane locus bhi shamil hain!) hal karenge, 3 aakhri galtiyon se bachenge, 12 mixed practice sawaal lagayenge, aur poore chapter ka saar ek table mein dekhenge.

---

## Keshav ka Complex Plane Challenge

School ke Maths Club mein **"Complex Plane Challenge"** chal raha tha. Keshav ko chaar desks paar karne the:
- **Desk 1 (Iota Simplifier):** ((1 + i)/(1 − i))ᵐ = 1 ke liye sabse chhota positive integer m.
- **Desk 2 (Modulus Prover):** x + iy = (a + ib)/(a − ib) se bina mehnat x² + y² = 1 saabit karna.
- **Desk 3 (Polar Navigator):** Quotient (1 + 7i)/(2 − i)² ka polar form aur real θ ke liye purely real condition!
- **Desk 4 (Square Root & Locus):** √(5 + 12i) nikaalna aur Argand plane par |z − 1| = |z + 1| ka geometric path (locus) pehchanna!

Keshav ne apna **Decision Map** khola aur ek-ek desk 2 minute mein paar kar liya. Chalo, Keshav ke saath sabhi 6 mixed problems hal karte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Square root of a complex number** | Aisa a + ib jiska square diya gaya complex number z de: (a + ib)² = z | √(5 + 12i) = ±(3 + 2i) |
| **Locus in Argand plane** | Kisi shart (jaise mod(z − 1) = mod(z + 1)) ko poora karne wale sabhi points z ka path | Imaginary axis (x = 0) |

---

## Part A: Kaun Sa Tool Kab? (Decision Map)

| Sawaal ka suraagh | Kaun sa tool lagao? | Pehla kadam | Topic |
|---|---|---|---|
| Badi powers of i ya ((1 + i)/(1 − i))ᵐ | Simplify inside first + i⁴ = 1 | Pehle bracket ko a + ib banao, phir power lagao | Topic 1 |
| "Prove x² + y² = ..." jab x + iy = fraction | Modulus trick | Dono taraf mod lo aur square karo (expand mat karo!) | Topic 2 |
| Polar form of a quotient z₁ / z₂ | Simplify to a + ib first! | Denominator ke conjugate se guna → quadrant → r aur θ ∈ (−π, π] | Topic 3 |
| "Purely real" ya "Purely imaginary" for θ | Standard form + Im = 0 / Re = 0 | Rationalise karo, phir Im(z) = 0 ya Re(z) = 0 hal karo | Topic 1 & 5 |
| √(p + iq) chahiye | Let √(p + iq) = a + ib | Square karo: a² − b² = p, 2ab = q, aur a² + b² = √(p² + q²) | Topic 5 |
| Locus mod(z − z₁) = mod(z − z₂) | Put z = x + iy (ya geometry!) | (x − x₁)² + (y − y₁)² = (x − x₂)² + (y − y₂)² | Topic 2 & 5 |
| ax² + bx + c = 0 with D < 0 | Complex quadratic formula | x = (−b ± i√(4ac − b²)) / (2a); sum/product se Jaanch | Topic 4 |

---

## Part B: 6 Mixed Worked Problems

### Example 1: Smallest Positive Integer m for ((1 + i)/(1 − i))ᵐ = 1

Sabse chhota positive integer **m** nikalo jiske liye **[(1 + i) / (1 − i)]ᵐ = 1** ho.

**Hal:**
1. Pehle andar ka fraction simplify karo:
   (1 + i)/(1 − i) = [(1 + i)(1 + i)] / (1² + 1²) = (1 + 2i + i²) / 2 = 2i / 2 = **i**.
2. Equation ban gayi: **iᵐ = 1**.
3. 4-step cycle (i¹ = i, i² = −1, i³ = −i, i⁴ = 1) se sabse chhota positive integer **m = 4**!

**Jaanch:** i⁴ = (i²)² = (−1)² = 1 ✅.

---

### Example 2: 2-Line Modulus Proof — x + iy = (a + ib) / (a − ib)

Agar **x + iy = (a + ib) / (a − ib)** (jahan x, y, a, b ∈ R), to prove karo: **x² + y² = 1**.

**Hal:**
1. Dono taraf modulus lo:
   |x + iy| = |a + ib| / |a − ib|
2. √(x² + y²) = √(a² + b²) / √(a² + (−b)²) = √(a² + b²) / √(a² + b²) = **1**.
3. Dono taraf square karo: **x² + y² = 1**! (Proved in 2 lines!)

**Jaanch:** a = 3, b = 4 par (3 + 4i)/(3 − 4i) = (−7 + 24i)/25 ⟹ (−7/25)² + (24/25)² = (49 + 576)/625 = 1 ✅!

---

### Example 3: Quotient ka Polar Form — z = (1 + 7i) / (2 − i)²

**z = (1 + 7i) / (2 − i)²** ko **Polar Form** mein badlo.

**Hal:**
1. **Pehle standard form a + ib banao:**
   - (2 − i)² = 4 − 4i + i² = **3 − 4i**.
   - z = (1 + 7i) / (3 − 4i) = [(1 + 7i)(3 + 4i)] / (9 + 16)
   - = (3 + 4i + 21i + 28i²) / 25 = (−25 + 25i) / 25 = **−1 + i**.
2. **Ab Polar Form:** −1 + i **Quadrant II** mein hai!
   - r = √((−1)² + 1²) = **√2**.
   - tan α = |1/(−1)| = 1 ⟹ α = π/4 ⟹ θ = π − π/4 = **3π/4**.
   Polar form: **z = √2 (cos(3π/4) + i sin(3π/4))**.

**Jaanch:** √2(−1/√2 + i/√2) = −1 + i ✅; |(1 + 7i)/(2 − i)²| = √50 / 5 = √2 ✅!

---

### Example 4: Trig + Complex Combo — Purely Real Condition

Wo sabhi real angles **θ** nikalo jinke liye **(3 + 2i sin θ) / (1 − 2i sin θ)** **purely real** ho.

**Hal:**
1. Denominator ke conjugate (1 + 2i sin θ) se upar-neeche guna karo:
   - Numerator = (3 + 2i sin θ)(1 + 2i sin θ) = (3 − 4 sin² θ) + i(8 sin θ).
   - Denominator = 1 + 4 sin² θ (hamesha positive real!).
2. Purely real hone ke liye **Imaginary part = 0**:
   8 sin θ / (1 + 4 sin² θ) = 0 ⟹ **sin θ = 0**.
3. Chapter 3 (Trig equations) se: **θ = nπ, n ∈ Z**!

**Jaanch:** θ = π par sin π = 0, expression = 3/1 = 3 (purely real!) ✅.

---

### Example 5: Square Root of a Complex Number — √(5 + 12i)

**5 + 12i** ke dono square roots nikalo.

**Hal:**
Maan lo **√(5 + 12i) = a + ib** (jahan a, b ∈ R). Dono taraf square karo:
(a² − b²) + i(2ab) = 5 + 12i.
Compare karo:
1. **a² − b² = 5**
2. **2ab = 12** (positive! Iska matlab a aur b ke **same sign** honge — ya dono +, ya dono −!)
3. Modulus trick se **(a² + b²)² = (a² − b²)² + (2ab)² = 5² + 12² = 25 + 144 = 169**:
   **a² + b² = 13**   *(kyunki a² + b² ≥ 0)*.
4. Equation (1) aur (3) ko jodo aur ghatao:
   - 2a² = 13 + 5 = 18 ⟹ a² = 9 ⟹ **a = ±3**.
   - 2b² = 13 − 5 = 8 ⟹ b² = 4 ⟹ **b = ±2**.
5. Kyunki 2ab = +12 > 0 (same sign!), dono square roots hain: **3 + 2i** aur **−3 − 2i**, yaani **±(3 + 2i)**!

**Jaanch:** (3 + 2i)² = 9 + 12i − 4 = 5 + 12i ✅; (−3 − 2i)² = 5 + 12i ✅!

---

### Example 6: Argand Plane Locus — |z − 1| = |z + 1|

Argand plane mein un sabhi complex numbers **z = x + iy** ka path (locus) nikalo jo **|z − 1| = |z + 1|** ko poora karte hain.

**Hal:**
- **Algebraic tareeka:** z = x + iy rakho:
  |(x − 1) + iy| = |(x + 1) + iy|
  Dono taraf square karo:
  (x − 1)² + y² = (x + 1)² + y²
  x² − 2x + 1 = x² + 2x + 1 ⟹ 4x = 0 ⟹ **x = 0** (yaani **Imaginary axis**!).
- **Geometric tareeka (2 second mein!):** |z − 1| matlab point (1, 0) se doori, aur |z − (−1)| matlab (−1, 0) se doori. Dono points se barabar doori par rehne wale points unka **perpendicular bisector** banate hain — jo theek **Imaginary axis (x = 0)** hai!

**Jaanch:** z = 5i (x = 0) par |5i − 1| = √26 aur |5i + 1| = √26 ✅!

---

## Aam galtiyan (Chapter Synthesis)

1. **Fraction z₁/z₂ ko bina a + ib mein badle uska Quadrant ya Argument nikaalna:**
   - *Sahi soch:* Example 3 mein (1 + 7i) Q I mein aur (2 − i) Q IV mein tha, par unka quotient −1 + i **Quadrant II** mein aaya! Hamesha pehle standard form a + ib banao.
2. **|z − (a + ib)| mein bracket bhool kar |z − a + ib| likh dena:**
   - *Sahi soch:* z = x + iy rakhne par z − (a + ib) = **(x − a) + i(y − b)** — dono signs badalte hain!
3. **√(5 + 12i) mein sirf 3 + 2i likhna ya 2ab ka sign check kiye bina 3 − 2i likh dena:**
   - *Sahi soch:* Har non-zero complex number ke **do** square roots (±) hote hain; **2ab > 0** to a, b same sign; **2ab < 0** to a, b opposite sign!

---

## Quick Recap

- **i⁴ = 1** cycle; **√(−a)√(−b) = −√(ab)**; standard form a + ib.
- **Modulus & Conjugate:** z · z̄ = |z|², z⁻¹ = z̄/|z|², |z₁z₂| = |z₁||z₂|, |z₁/z₂| = |z₁|/|z₂|.
- **Polar Form:** r(cos θ + i sin θ) with r ≥ 0 and Principal Argument **θ ∈ (−π, π]**.
- **Complex Quadratics:** D < 0 ⟹ conjugate pair **[−b ± i√(4ac − b²)] / (2a)**.
- **Extras:** Complex square root via (a + ib)² = z; locus via z = x + iy ya perpendicular bisector!

---

## Practice Questions

1. Find the smallest positive integer n such that **[(1 − i) / (1 + i)]ⁿ = 1**.

2. If **(x + iy)³ = u + iv** (where x, y, u, v ∈ R), show that **u/x + v/y = 4(x² − y²)**.

3. Convert **z = (1 + 3i) / (1 − 2i)** into Polar Form.

4. Convert **z = (i − 1) / [cos(π/3) + i sin(π/3)]** into Polar Form.

5. Find the real value of θ such that **(3 + 2i sin θ) / (1 − 2i sin θ)** is **purely imaginary** (give the general solution for sin² θ).

6. Find the square roots of:
   (a) **7 − 24i**    (b) **−8 − 6i**

7. If **α** and **β** are different complex numbers with **|β| = 1**, find the value of **|(β − α) / (1 − ᾱ β)|**. (Hint: write 1 = β β̄ in the denominator!)

8. Find the locus of z = x + iy in the Argand plane if:
   (a) **|z − 2| = 3**
   (b) **|z − 2i| = |z + 2i|**

9. If **z = x + iy** and **|(z − 5i) / (z + 5i)| = 1**, show that z lies on the **Real axis** (y = 0).

10. Solve the quadratic equation **x² − 4x + 29 = 0** in C, and find the modulus of each root.

11. If **z₁ = 1 − i** and **z₂ = −2 + 4i**, find **Im(z₁ z₂ / z̄₁)**.

12. Evaluate **[(1 + i)⁶ + (1 − i)³]** and express it in the form a + ib.

### Answers

1. (1 − i)/(1 + i) = −i. (−i)¹ = −i, (−i)² = −1, (−i)³ = i, (−i)⁴ = 1 ⟹ **n = 4**. Jaanch: (−i)⁴ = i⁴ = 1 ✅.

2. (x + iy)³ = (x³ − 3xy²) + i(3x²y − y³) = u + iv.
   u/x = x² − 3y² aur v/y = 3x² − y².
   Dono ko jodo: u/x + v/y = 4x² − 4y² = **4(x² − y²)**.

3. z = [(1 + 3i)(1 + 2i)] / (1 + 4) = (−5 + 5i)/5 = **−1 + i** (Q II).
   r = √2, θ = 3π/4 ⟹ **√2(cos(3π/4) + i sin(3π/4))**.

4. Numerator = −1 + i; Denominator = 1/2 + i√3/2.
   z = 2(−1 + i)/(1 + i√3) = 2(−1 + i)(1 − i√3)/4 = [(√3 − 1) + i(√3 + 1)] / 2.
   Modulus shortcut: |z| = |−1 + i| / |cos π/3 + i sin π/3| = **√2 / 1 = √2**!
   Argument shortcut (from Topic 3 PQ 6): Arg(z₁/z₂) = Arg(−1 + i) − Arg(cos π/3 + i sin π/3) = 3π/4 − π/3 = **5π/12**!
   Polar form: **√2(cos(5π/12) + i sin(5π/12))**. Jaanch: 3π/4 − π/3 = (9 − 4)π/12 = 5π/12 ✅!

5. Example 4 se Real part = (3 − 4 sin² θ)/(1 + 4 sin² θ).
   Purely imaginary ⟹ Real part = 0 ⟹ **3 − 4 sin² θ = 0 ⟹ sin² θ = 3/4 ⟹ sin θ = ±√3/2**.
   General solution: **θ = nπ ± π/3, n ∈ Z**. Jaanch: sin²(π/3) = 3/4 ✅.

6. (a) a² − b² = 7, 2ab = −24 (< 0, opposite signs!), a² + b² = √(49 + 576) = 25.
   2a² = 32 ⟹ a = ±4; 2b² = 18 ⟹ b = ±3. Opposite signs ⟹ **±(4 − 3i)**. Jaanch: (4 − 3i)² = 16 − 9 − 24i = 7 − 24i ✅.
   (b) a² − b² = −8, 2ab = −6 (< 0, opposite signs!), a² + b² = √(64 + 36) = 10.
   2a² = 2 ⟹ a = ±1; 2b² = 18 ⟹ b = ±3. Opposite signs ⟹ **±(1 − 3i)**. Jaanch: (1 − 3i)² = 1 − 9 − 6i = −8 − 6i ✅.

7. Kyunki |β| = 1, to β β̄ = 1. Denominator = β β̄ − ᾱ β = β(β̄ − ᾱ) = β · conj(β − α).
   Modulus lo: |(β − α) / [β · conj(β − α)]| = |β − α| / (|β| · |β − α|) = 1 / 1 = **1**!
   Jaanch: α = 0, β = i par |i / 1| = 1 ✅.

8. (a) (x − 2)² + y² = 9 → **Circle** with centre (2, 0) and radius 3.
   (b) x² + (y − 2)² = x² + (y + 2)² ⟹ −4y = 4y ⟹ **y = 0** (**Real axis**).

9. |z − 5i| = |z + 5i| ⟹ x² + (y − 5)² = x² + (y + 5)² ⟹ −10y = 10y ⟹ **y = 0** (Real axis).

10. D = 16 − 116 = −100 ⟹ √D = 10i ⟹ x = (4 ± 10i)/2 = **2 ± 5i**.
    Modulus of each root = √(2² + 5²) = **√29**. Jaanch: sum = 4, product = 4 + 25 = 29 ✅.

11. z₁ z₂ = (1 − i)(−2 + 4i) = (−2 + 4) + i(4 + 2) = 2 + 6i; z̄₁ = 1 + i.
    (2 + 6i)/(1 + i) = [(2 + 6i)(1 − i)] / 2 = (8 + 4i)/2 = 4 + 2i ⟹ **Im = 2**. Jaanch: (4 + 2i)(1 + i) = 2 + 6i ✅.

12. (1 + i)² = 2i ⟹ (1 + i)⁶ = (2i)³ = 8i³ = **−8i**.
    (1 − i)³ = (1 − i)²(1 − i) = (−2i)(1 − i) = −2i + 2i² = **−2 − 2i**.
    Sum = −8i + (−2 − 2i) = **−2 − 10i**. Jaanch: −2 + i(−8 − 2) = −2 − 10i ✅.

---

Shabaash! Tumne **Complex Numbers and Quadratic Equations** ko poori gehrai — algebra, geometry, polar form, aur complex roots — ke saath poora kar liya hai!

---

## Chapter Ka Saar: Complex Numbers and Quadratic Equations

| Topic | Mukhya vishay | Khaas formula / yaad rakhne ki baat |
|---|---|---|
| **Topic 1** | Iota (i), Powers & Algebra of C | i² = −1, i⁴ = 1; √(−a)√(−b) = −√(ab); z = a + ib (Im(z) = b real!); division mein conjugate se multiply. |
| **Topic 2** | Argand Plane, Modulus & Conjugate | mod(z) = √(a² + b²); z̄ = a − ib; z · z̄ = mod(z)²; z⁻¹ = z̄/mod(z)²; mod(z₁z₂) = mod(z₁)mod(z₂); Triangle inequality. |
| **Topic 3** | Polar Form & Principal Argument | z = r(cos θ + i sin θ), r ≥ 0, θ ∈ (−π, π]: Q I (+α), Q II (π − α), Q III (−(π − α)), Q IV (−α). |
| **Topic 4** | Quadratic Equations with D < 0 | x = [−b ± i√(4ac − b²)] / (2a); real coefficients par non-real roots hamesha conjugate pairs (p ± iq) hote hain. |
| **Topic 5** | Mixed Problems, Square Roots & Locus | Simplify to a + ib before polar; √(p + iq) = ±(a + ib); Argand plane loci (circles, perpendicular bisectors). |

**Aage kya?** Agle chapter **Linear Inequalities** mein hum equations ke "=" nishaan ko chhod kar "<, >, ≤, ≥" ki duniya mein kadam rakhenge — jahan answers ek akele point ke bajay **poori number line ke regions aur 2D half-planes** hote hain!
