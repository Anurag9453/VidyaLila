# Chapter: Complex Numbers and Quadratic Equations (Part 2)

> **Class:** 11 | **Subject:** Mathematics
> **Ye file [complex-numbers-and-quadratic-equations.md](complex-numbers-and-quadratic-equations.md) se aage chalti hai** (wahan Topic 1 mein iota i, powers of i, standard form a + ib aur algebra +, −, ×, ÷ the).
> **Topics covered in this file:**
> 2. Argand Plane, Modulus Aur Conjugate

---

# Topic 2: Argand Plane, Modulus Aur Conjugate

Topic 1 mein humne complex number **z = a + ib** ko algebra ki bhasha mein dekha. Par kya hum z ko **aankhon se dekh** sakte hain? Bilkul! Har complex number z = a + ib mein do real numbers (a, b) chhupe hain — aur do real numbers ek **2D plane ke ek unique point (a, b)** ko dikhate hain! Is topic mein hum complex numbers ke is 2D map (**Argand Plane**), origin se unki doori (**Modulus |z|**), aur real axis mein unki mirror image (**Conjugate z̄**) ke saare pakke niyam seekhenge.

---

## Savita ka treasure-hunt map aur nahar ka darpan

School camp mein Savita ek 2D treasure-hunt map padh rahi thi. Map par East–West line ko **Real axis** aur North–South line ko **Imaginary axis** kaha gaya tha. Clue 1 ka beacon point **(3, 4)** par tha — yaani 3 kadam East aur 4 kadam North (**z = 3 + 4i**).

Do cheezein turant kaam aayin:
1. Base camp (0, 0) se beacon tak ki seedhi doori (Pythagoras se): √(3² + 4²) = **5 units** — yahi complex number ka **Modulus |z|** hai!
2. Clue 2 mein likha tha: *"East–West nahar (Real axis) ke theek paar mirror image par jao!"* (3, 4) ka mirror image nikla **(3, −4)**, yaani **3 − 4i** — yahi z ka **Conjugate z̄** hai!

Dekha? Algebra ke do sabse zaroori concepts — Modulus aur Conjugate — geometry mein sirf **doori** aur **mirror reflection** hain!

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Argand plane** | 2D plane jisme x-axis Real axis aur y-axis Imaginary axis hoti hai | z = 3 + 4i → point (3, 4) |
| **Modulus of z (mod(z))** | Origin (0, 0) se point (a, b) tak ki doori: √(a² + b²) ≥ 0 | mod(3 + 4i) = 5 |
| **Conjugate of z (z̄)** | Imaginary part ka sign palatna: z = a + ib ⟹ z̄ = a − ib | conj(−2 + 5i) = −2 − 5i |
| **Triangle inequality** | Kisi triangle ki ek side baaki do sides ke jod se badi nahi ho sakti: mod(z₁ + z₂) ≤ mod(z₁) + mod(z₂) | mod(3+4i + (−3+4i)) = 8 ≤ 5 + 5 |

---

## Part A: Argand Plane (Complex Plane)

Har complex number **z = a + ib** ko 2D plane ke ek unique point **P(a, b)** se dikhate hain:
- **Horizontal axis (x-axis):** **Real axis** — is par sabhi purely real numbers (a, 0) baithte hain.
- **Vertical axis (y-axis):** **Imaginary axis** — is par sabhi purely imaginary numbers (0, b) baithte hain.

```
                         Imaginary axis (y)
                                 :
            (-2, 5) ●            :          ● (3, 4)  z = 3 + 4i
             -2 + 5i             :         /|
                                 :     r=5/ | 4
                                 :       /  |
      ---------------------------+----------●----------- Real axis (x)
                                 : O    3    \
         (-3, -2) ●              :            \
          -3 - 2i                :             ● (3, -4)  z̄ = 3 - 4i
                                 :         (mirror across Real axis!)
```

> **Figure 2.1** – Argand plane: z = 3 + 4i point (3, 4) par hai, origin se uski doori |z| = 5 hai, aur Real axis ke paar uski mirror image uska conjugate z̄ = 3 − 4i hai.

---

## Part B: Modulus |z| Aur Conjugate z̄ Ki Properties

Maan lo **z = a + ib** (jahan a, b ∈ R):
- **Modulus:** **|z| = √(a² + b²)**  *(hamesha ≥ 0, aur |z| = 0 ⟺ z = 0)*
- **Conjugate:** **z̄ = a − ib**  *(sirf i wale hisse ka sign badalta hai!)*

### 8 Sabse Zaroori Properties (Exam Goldmine!)

1. **z · z̄ = |z|²**  *(Kyun? (a + ib)(a − ib) = a² − i²b² = a² + b² = |z|²!)*
2. **z⁻¹ = z̄ / |z|²**  *(jab z ≠ 0; upar wali property ko z · |z|² se bhaag dekar!)*
3. **|z̄| = |−z| = |z|**  *(mirror image aur opposite point origin se barabar doori par!)*
4. **z + z̄ = 2 Re(z)**  aur  **z − z̄ = 2i Im(z)**
   - Isse seedha milta hai: z **purely real ⟺ z = z̄**; aur z **purely imaginary ⟺ z = −z̄** (z ≠ 0).
5. **Double conjugate:** **(z̄)̄ = z**.
6. **Conjugate sabhi operations par baant jaata hai:**
   - conj(z₁ ± z₂) = z̄₁ ± z̄₂
   - conj(z₁ z₂) = z̄₁ · z̄₂
   - conj(z₁ / z₂) = z̄₁ / z̄₂  (z₂ ≠ 0)
7. **Modulus multiplication aur division par baant jaata hai** *(stated and checked on examples; proof z · z̄ = |z|² se seedha aata hai!)*:
   - **|z₁ z₂| = |z₁| · |z₂|**
   - **|z₁ / z₂| = |z₁| / |z₂|**  (z₂ ≠ 0)
   - **|zⁿ| = |z|ⁿ**
8. **Triangle Inequality** *(stated and checked on examples; geometry se 0, z₁, z₁ + z₂ ka triangle)*:
   - **|z₁ + z₂| ≤ |z₁| + |z₂|**
   - **|z₁ − z₂| ≥ ||z₁| − |z₂||**

*(Khas shortcut: Agar kisi bade fraction z = (a + ib)(c + id) / (e + if) ka sirf **modulus** chahiye, to use multiply karke a + ib banane ki zaroorat nahi! Seedha upar-neeche alag-alag modulus lagao: |z| = (|a+ib| · |c+id|) / |e+if|!)*

---

## Part C: Worked Examples

### Example 1: Modulus aur Conjugate Properties Verify Karna

Maan lo **z₁ = 3 + 4i** aur **z₂ = 5 − 12i**.
Verify karo: (i) **|z₁ z₂| = |z₁| · |z₂|**, aur (ii) **|z₁ + z₂| ≤ |z₁| + |z₂|**.

**Hal:**
- |z₁| = √(3² + 4²) = √25 = **5**; |z₂| = √(5² + (−12)²) = √169 = **13**.
- **(i) Product modulus:**
  - z₁ z₂ = (3 + 4i)(5 − 12i) = (15 + 48) + i(−36 + 20) = **63 − 16i**.
  - LHS: |z₁ z₂| = √(63² + (−16)²) = √(3969 + 256) = √4225 = **65**.
  - RHS: |z₁| · |z₂| = 5 × 13 = **65**. Dono barabar!
- **(ii) Triangle inequality:**
  - z₁ + z₂ = (3 + 5) + i(4 − 12) = **8 − 8i**.
  - LHS: |z₁ + z₂| = √(8² + (−8)²) = √128 = **8√2 ≈ 11.31**.
  - RHS: |z₁| + |z₂| = 5 + 13 = **18**.
  - 11.31 ≤ 18 — sach hai!

**Jaanch:** 63² + 16² = 4225 = 65² ✅; 8√2 ≈ 11.31 < 18 ✅.

### Example 2: Quotient ka Modulus — Bina Simplify Kiye Shortcut!

Maan lo **z₁ = 2 − i** aur **z₂ = 1 + i**. Nikalo **|(z₁ + z₂ + 1) / (z₁ − z₂ + 1)|**.

**Hal:**
1. Numerator: z₁ + z₂ + 1 = (2 − i) + (1 + i) + 1 = **4**.
2. Denominator: z₁ − z₂ + 1 = (2 − i) − (1 + i) + 1 = **2 − 2i**.
3. Modulus property |A / B| = |A| / |B| lagao:
   |4 / (2 − 2i)| = |4| / |2 − 2i| = 4 / √(2² + (−2)²) = 4 / √8 = 4 / (2√2) = **√2**.

**Jaanch:** 4/(2 − 2i) = 2/(1 − i) = 2(1 + i)/2 = 1 + i, aur |1 + i| = √(1 + 1) = √2 ✅!

### Example 3: Bade Expression ka Conjugate Nikaalna

**z = [(3 − 2i)(2 + 3i)] ÷ [(1 + 2i)(2 − i)]** ka **conjugate z̄** nikalo.

**Hal:**
Pehle numerator aur denominator simplify karo:
- Numerator = (3 − 2i)(2 + 3i) = (6 + 6) + i(9 − 4) = **12 + 5i**.
- Denominator = (1 + 2i)(2 − i) = (2 + 2) + i(−1 + 4) = **4 + 3i**.
- Division: z = [(12 + 5i)(4 − 3i)] / (16 + 9) = [(48 + 15) + i(−36 + 20)] / 25 = **63/25 − (16/25)i**.
- Conjugate (sirf i ka sign palato!): **z̄ = 63/25 + (16/25)i**.

**Jaanch:** |z| = |12 + 5i| / |4 + 3i| = 13/5; check √((63/25)² + (−16/25)²) = 65/25 = 13/5 ✅!

### Example 4: Classic Proof — a + ib = (x + i)² / (2x² + 1)

Agar **a + ib = (x + i)² / (2x² + 1)** (jahan a, b, x ∈ R), to prove karo: **a² + b² = (x² + 1)² / (2x² + 1)²**.

**Hal:**
Dono taraf **modulus** lo aur **square** kar do!
1. |a + ib| = |(x + i)² / (2x² + 1)| = |x + i|² / |2x² + 1|   *(kyunki 2x² + 1 > 0 real hai)*
2. √(a² + b²) = (√(x² + 1))² / (2x² + 1) = (x² + 1) / (2x² + 1).
3. Dono taraf square karo:
   **a² + b² = (x² + 1)² / (2x² + 1)²**. (3 line mein proved — bina expand kiye!)

**Jaanch:** x = 1 par (1 + i)² / 3 = 2i/3 ⟹ a = 0, b = 2/3, a² + b² = 4/9; RHS = (2/3)² = 4/9 ✅!

---

## Aam galtiyan

1. **Modulus ke andar i daal dena:** Student |3 + 4i| = √(3² + (4i)²) = √(9 − 16) = √(−7) likh deta hai!
   - *Galat kyun:* Modulus sirf real numbers a aur b ke squares ka jod hai: **|a + ib| = √(a² + b²)** — isme i **kabhi nahi** aata!
2. **Conjugate lete waqt real part ka sign bhi palat dena:** Student z = −3 + 2i ka conjugate +3 − 2i likh deta hai.
   - *Galat kyun:* Conjugate sirf **imaginary part (i wale hisse)** ka sign badalta hai: z̄ = **−3 − 2i**!
3. **|z₁ + z₂| = |z₁| + |z₂| maan lena:**
   - *Counterexample:* z₁ = 3 + 4i (|z₁| = 5) aur z₂ = −3 + 4i (|z₂| = 5). z₁ + z₂ = 8i ⟹ |z₁ + z₂| = **8 ≠ 10**!

---

## Quick Recap

- **Argand plane:** z = a + ib ↔ point (a, b); Real axis (x) aur Imaginary axis (y).
- **Modulus:** |z| = √(a² + b²) ≥ 0; **|z₁z₂| = |z₁||z₂|**, **|z₁/z₂| = |z₁|/|z₂|**.
- **Conjugate:** z̄ = a − ib; **z · z̄ = |z|²**; **z⁻¹ = z̄ / |z|²**; conjugate +, −, ×, ÷ sab par distribute hota hai.
- **Triangle inequality:** |z₁ + z₂| ≤ |z₁| + |z₂|.

---

## Practice Questions

1. Find the modulus and conjugate of each of the following complex numbers:
   (a) −3 + 4i    (b) 5 − 12i    (c) −7 − 24i    (d) −6i

2. Using z⁻¹ = z̄ / |z|², find the multiplicative inverse of:
   (a) 3 + 4i    (b) −1 + 2i    (c) 7 − 24i

3. Find the modulus of **[(1 + i)/(1 − i)] − [(1 − i)/(1 + i)]**.

4. Find the modulus of **[(3 + 4i)(1 − i)] ÷ [(2 + i)(4 − 3i)]** without expanding into a + ib form!

5. If **(x + iy) = √[(a + ib)/(c + id)]**, prove that **(x² + y²)² = (a² + b²) / (c² + d²)**.

6. If **z₁ = 2 − i** and **z₂ = −2 + i**, find:
   (a) Re(z₁ z₂ / z̄₁)    (b) Im(1 / (z₁ z̄₁))

7. Find the number of non-zero integral solutions of the equation **|1 − i|ˣ = 2ˣ**.

8. If **(a + ib)(c + id)(e + if)(g + ih) = A + iB**, show that **(a² + b²)(c² + d²)(e² + f²)(g² + h²) = A² + B²**.

9. If **|z₁| = |z₂| = 1** and z₁ z₂ ≠ −1, verify with z₁ = i and z₂ = 1 that **(z₁ + z₂)/(1 + z₁ z₂)** is purely real.

10. Find the real numbers x and y if **(x − iy)(3 + 5i)** is the conjugate of **−6 − 24i**.

11. Find the distance between the points representing **z₁ = 2 + 3i** and **z₂ = −1 + 7i** in the Argand plane (hint: distance = |z₁ − z₂|).

12. True or False? Give a one-line reason:
    (a) For any complex number z, z · z̄ is always a non-negative real number.
    (b) If z = z̄, then z is purely imaginary.
    (c) |z₁ + z₂| ≤ |z₁| + |z₂| for all complex numbers z₁, z₂.
    (d) conj(−4 − 5i) = 4 + 5i.

### Answers

1. (a) |z| = √(9 + 16) = **5**, z̄ = **−3 − 4i**.
   (b) |z| = √(25 + 144) = **13**, z̄ = **5 + 12i**.
   (c) |z| = √(49 + 576) = **25**, z̄ = **−7 + 24i**.
   (d) |z| = **6**, z̄ = **+6i**. Jaanch: 7² + 24² = 625 = 25² ✅.

2. (a) (3 − 4i)/25 = **3/25 − (4/25)i**.
   (b) (−1 − 2i)/5 = **−1/5 − (2/5)i**.
   (c) (7 + 24i)/625 = **7/625 + (24/625)i**.

3. (1 + i)/(1 − i) = i aur (1 − i)/(1 + i) = −i.
   Difference = i − (−i) = 2i ⟹ |2i| = **2**. Jaanch: |2i| = √(0² + 2²) = 2 ✅.

4. |z| = (|3 + 4i| · |1 − i|) / (|2 + i| · |4 − 3i|) = (5 × √2) / (√5 × 5) = **√(2/5)** = **√10 / 5**.
   Jaanch: 5 aur 5 kat gaye, √2/√5 = √10/5 ✅.

5. Dono taraf square karo: (x + iy)² = (a + ib)/(c + id).
   Ab dono taraf modulus lo: |x + iy|² = |a + ib| / |c + id| ⟹ x² + y² = √(a² + b²) / √(c² + d²).
   Phir square karo: **(x² + y²)² = (a² + b²) / (c² + d²)**.

6. (a) z₁ z₂ = (2 − i)(−2 + i) = −3 + 4i; z̄₁ = 2 + i.
   (−3 + 4i)/(2 + i) = [(−3 + 4i)(2 − i)] / 5 = (−2 + 11i)/5 ⟹ Re = **−2/5**.
   (b) z₁ z̄₁ = |z₁|² = 5 (purely real!), isliye 1/5 ka Im = **0**. Jaanch: (−3)(2) − 4(−1) = −6 + 4 = −2 ✅.

7. |1 − i| = √2. Equation: (√2)ˣ = 2ˣ ⟹ 2^(x/2) = 2ˣ ⟹ x/2 = x ⟹ x = 0.
   Kyunki **non-zero** integral solutions poochhe hain, ginti = **0** (koi non-zero hal nahi!).

8. Dono taraf modulus lo aur square kar do:
   |a + ib|² |c + id|² |e + if|² |g + ih|² = |A + iB|²
   ⟹ **(a² + b²)(c² + d²)(e² + f²)(g² + h²) = A² + B²**.

9. z₁ = i, z₂ = 1 rakho: (i + 1)/(1 + i) = **1**, jo purely real hai! Jaanch: |i| = 1, |1| = 1 ✅.

10. −6 − 24i ka conjugate = **−6 + 24i**.
    (x − iy)(3 + 5i) = (3x + 5y) + i(5x − 3y) = −6 + 24i.
    3x + 5y = −6 aur 5x − 3y = 24. Hal karne par: 34x = 102 ⟹ **x = 3**, **y = −3**.
    Jaanch: 3(3) + 5(−3) = −6, 5(3) − 3(−3) = 24 ✅.

11. z₁ − z₂ = (2 − (−1)) + i(3 − 7) = 3 − 4i ⟹ distance = |3 − 4i| = √(9 + 16) = **5 units**.

12. (a) ✅ True: z · z̄ = a² + b² ≥ 0.
    (b) ❌ False: z = z̄ ⟹ a + ib = a − ib ⟹ 2ib = 0 ⟹ b = 0, yaani z **purely real** hai!
    (c) ✅ True: Triangle inequality.
    (d) ❌ False: sirf imaginary part ka sign badalta hai → conj(−4 − 5i) = **−4 + 5i**.

---

Ab tum Argand plane par complex numbers ko dekhna, unka modulus nikaalna aur conjugate properties se bade proofs chhutkiyon mein karna seekh chuke ho.

**Agle topic mein:** Argand plane ke points ko (x, y) ke bajay **distance r aur angle θ** se likhna — **Polar Form of a Complex Number**!
