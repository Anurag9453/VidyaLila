# Chapter: Complex Numbers and Quadratic Equations

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla chapter [trigonometric-functions-part6.md](../trigonometric-functions/trigonometric-functions-part6.md) tha** (Trigonometric Functions ka aakhri topic, jiske teaser ne vaada kiya tha ki hum √(−1) = i ki nayi duniya kholenge). Class 10 mein quadratic equations aur real roots (D = b² − 4ac ≥ 0) padhe the: [quadratic-equations.md](../../../class10/maths/quadratic-equations/quadratic-equations.md).
> **Topics covered in this file:**
> 1. Need for Complex Numbers Aur Algebra of Complex Numbers

---

# Topic 1: Need for Complex Numbers Aur Algebra of Complex Numbers

Yaad karo Class 9 mein numbers ka parivaar kaise bada hota gaya tha: jab x + 3 = 1 hal nahi hua to negative integers aaye; jab 2x = 5 hal nahi hua to rational numbers aaye; jab x² = 2 hal nahi hua to irrational numbers aaye aur poori real number line **R** ban gayi! Par Class 10 mein ek deewar saamne aa khadi hui: **x² + 1 = 0**, yaani **x² = −1**. Kisi bhi real number ka square negative nahi ho sakta! Is pehle topic mein hum isi deewar ko todkar ek naya number **i = √(−1)** laayenge aur **Complex Numbers (C)** ka poora algebra seekhenge.

---

## Suresh ki x² + 1 = 0 wali paheli

Shaam ko Suresh apni Didi ke saath Maths puzzles khel raha tha. Didi ne paper par likha: **"Aisa number batao jiska square −1 ho."**
Suresh ne check kiya: (+1)² = +1, (−1)² = +1, 0² = 0 — real number line par har number ka square 0 ya positive aata hai! Suresh bola, "Didi, aisa koi number exist hi nahi karta!"

Didi muskuraayi: "Bilkul aisi hi baat log hazaaron saal pehle negative numbers aur √2 ke liye kehte the! Real numbers sirf ek **seedhi 1D line** par rehte hain. Agar hum line se ek kadam **sideways (upar)** nikal kar ek naya unit **i** define kar dein jiska niyam bas itna ho ki **i² = −1**, to na sirf x² + 1 = 0 hal ho jaata hai, balki duniya ki har polynomial equation ka hal mil jaata hai — aur yahi **i** aaj AC electricity, mobile signals aur quantum physics ki bhasha hai!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Iota (i)** | Imaginary unit jiska square −1 hota hai: i = √(−1), i² = −1 | √(−9) = 3i |
| **Complex number (z)** | a + ib roop ka number, jahan a aur b dono **real numbers** hain | 3 + 4i, −2 + 5i, 7 + 0i |
| **Real part Re(z)** | z = a + ib mein a (bina i wala real hissa) | Re(3 − 5i) = 3 |
| **Imaginary part Im(z)** | z = a + ib mein b (i ka real coefficient — i shamil NAHI!) | Im(3 − 5i) = −5 (not −5i!) |
| **Purely real** | Jab Im(z) = 0 ho (z = a + 0i) | 5, −3, 0 |
| **Purely imaginary** | Jab Re(z) = 0 aur Im(z) ≠ 0 ho (z = 0 + ib) | 4i, −√2 i |
| **Multiplicative inverse (z⁻¹)** | 1/z ko standard form a + ib mein badalna | (4 − 3i)⁻¹ = 4/25 + (3/25)i |

---

## Part A: Iota (i) Aur Uski Integral Powers (4-Step Cycle!)

Euler ne √(−1) ko symbol **i** (iota) diya, jiski paribhasha hai:

> **i = √(−1)**   ⟹   **i² = −1**

Ab i ki lagatar powers dekho — ek mazedaar **4-step cycle** dikhta hai!
- **i¹ = i**
- **i² = −1**
- **i³** = i² · i = (−1) · i = **−i**
- **i⁴** = (i²)² = (−1)² = **+1**
- **i⁵** = i⁴ · i = 1 · i = **i**  *(cycle phir shuru!)*

**Shortcut Rule (Kisi bhi integer k ke liye):**
Power **n** ko **4 se bhaag do** aur remainder **r** (0, 1, 2, ya 3) dekho: **iⁿ = iʳ**!
- **i^(4k) = 1**
- **i^(4k+1) = i**
- **i^(4k+2) = −1**
- **i^(4k+3) = −i**

**Bonus Shortcut:** Kisi bhi 4 lagatar powers ka jod hamesha **0** hota hai!
> **iⁿ + iⁿ⁺¹ + iⁿ⁺² + iⁿ⁺³ = iⁿ(1 + i − 1 − i) = 0**

**Negative powers:** **1/i** = (1 × i)/(i × i) = i/(−1) = **−i**! Aur i⁻ⁿ = 1/iⁿ.

### Sabse Bada Warning: √a × √b = √(ab) KAB Fail Hota Hai?

Real numbers mein humne padha tha √a × √b = √(ab). Par agar **a aur b DONO negative** hon (a < 0 aur b < 0), to ye niyam **TOOT JAATA HAI**!
Dekho kyun:
- **Sahi tareeka:** √(−4) × √(−9) = (2i) × (3i) = 6i² = **−6**.
- **Galat tareeka:** √((−4)(−9)) = √36 = +6 (GALAT! Kyunki −6 ≠ +6!).

**Pakka Niyam:** Jab bhi square root ke andar minus dikhe, **sabse pehle √(−k) = i√k likho**, phir guna karo!

### Example 1: Powers of i ko Simplify Karna

Simplify karo: (i) **i⁹ + i¹⁹**, (ii) **i⁻³⁹**, (iii) **√(−4) × √(−9)**.

**Hal:**
- (i) 9 = 4(2) + 1 ⟹ i⁹ = i¹ = i.
  19 = 4(4) + 3 ⟹ i¹⁹ = i³ = −i.
  Isliye i⁹ + i¹⁹ = i + (−i) = **0**.
- (ii) i⁻³⁹ = 1 / i³⁹. 39 = 4(9) + 3 ⟹ i³⁹ = i³ = −i.
  1 / (−i) = i / (−i²) = i / 1 = **i**.
  *(Shorter trick: −39 mein 4 ka multiple 40 jodo → i^(−39 + 40) = i¹ = **i**!)*
- (iii) √(−4) × √(−9) = (2i)(3i) = 6i² = **−6**.

**Jaanch:** i⁹ = (i⁴)² · i = i, i¹⁹ = (i⁴)⁴ · i³ = −i, sum = 0 ✅; i⁻³⁹ × i³⁹ = i × (−i) = −i² = 1 ✅.

---

## Part B: Standard Form z = a + ib Aur Equality

Koi bhi complex number **z = a + ib** (jahan a, b ∈ R) ke roop mein likha jaata hai.
- **Re(z) = a** aur **Im(z) = b** (dhyan rahe: dono real numbers hain!).
- Sabhi real numbers bhi complex numbers hain (kyunki a = a + 0i), yaani **R ⊂ C**!

### Equality ka Niyam

> **a + ib = c + id  ⟺  a = c  aur  b = d**  *(jahan a, b, c, d ∈ R)*

*(Dhyan do: Complex numbers mein **chhota-bada (< ya >) nahi hota!** "3 + 4i > 2 + 5i" ya "i > 0" ka koi matlab nahi hai — C mein order relation exist nahi karta!)*

### Example 2: Complex Equality se x aur y Nikaalna

Agar **(2x − 1) + i(3y + 2) = 5 − 4i** (jahan x, y ∈ R), to x aur y nikalo.

**Hal:**
Real parts aur imaginary parts ko alag-alag barabar rakho:
1. 2x − 1 = 5 ⟹ 2x = 6 ⟹ **x = 3**.
2. 3y + 2 = −4 ⟹ 3y = −6 ⟹ **y = −2**.

**Jaanch:** (2(3) − 1) + i(3(−2) + 2) = 5 − 4i ✅.

---

## Part C: Algebra of Complex Numbers (+, −, ×, ÷)

Maan lo **z₁ = a + ib** aur **z₂ = c + id**:
1. **Addition:** z₁ + z₂ = **(a + c) + i(b + d)**
2. **Subtraction:** z₁ − z₂ = **(a − c) + i(b − d)**
3. **Multiplication:** Binomial ki tarah guna karo aur i² = −1 rakho:
   **z₁ z₂ = (ac − bd) + i(ad + bc)**
4. **Division (z₁ / z₂, jab z₂ ≠ 0):** Denominator c + id se i hatane ke liye upar aur neeche **c − id** (uska conjugate!) se guna karo:
   (a + ib)/(c + id) = [(a + ib)(c − id)] / (c² + d²).   *(Kyunki (c + id)(c − id) = c² − i²d² = **c² + d²**!)*

Sabhi algebraic identities (z₁ ± z₂)², (z₁ ± z₂)³, z₁² − z₂² complex numbers mein bhi bilkul waise hi chalti hain!

### Example 3: Addition, Multiplication aur (1 − i)⁴

Standard form **a + ib** mein likho:
(i) (2 + 3i) + (5 − 7i)
(ii) (3 − 2i)(4 + 5i)
(iii) (1 − i)⁴

**Hal:**
- (i) (2 + 5) + i(3 − 7) = **7 − 4i**.
- (ii) 3(4) + 3(5i) − 2i(4) − 2i(5i) = 12 + 15i − 8i − 10i² = 12 + 7i − 10(−1) = **22 + 7i**.
- (iii) Pehle (1 − i)² nikalo: 1 − 2i + i² = 1 − 2i − 1 = **−2i**.
  Ab uska square karo: (1 − i)⁴ = (−2i)² = 4i² = **−4** = **−4 + 0i**.

**Jaanch:** (ii) ac − bd = 12 − (−10) = 22, ad + bc = 15 − 8 = 7 ✅; (iii) (−2i)² = 4(−1) = −4 ✅.

### Example 4: Division aur Multiplicative Inverse

(i) **(5 + √2 i) / (1 − √2 i)** ko a + ib form mein likho.
(ii) **z = 4 − 3i** ka multiplicative inverse **z⁻¹** nikalo.

**Hal:**
- (i) Upar-neeche **1 + √2 i** se guna karo:
  - Numerator: (5 + √2 i)(1 + √2 i) = 5 + 5√2 i + √2 i + 2i² = (5 − 2) + 6√2 i = **3 + 6√2 i**.
  - Denominator: (1 − √2 i)(1 + √2 i) = 1² − (√2 i)² = 1 − (−2) = **3**.
  - Ratio = (3 + 6√2 i) / 3 = **1 + 2√2 i**.
- (ii) z⁻¹ = 1 / (4 − 3i) = (4 + 3i) / [(4 − 3i)(4 + 3i)] = (4 + 3i) / (16 + 9) = **4/25 + (3/25)i**.

**Jaanch:** (i) (1 + 2√2 i)(1 − √2 i) = 1 − √2 i + 2√2 i − 4i² = 5 + √2 i ✅; (ii) (4 − 3i)(4 + 3i)/25 = 25/25 = 1 ✅.

---

## Aam galtiyan

1. **√(−4) × √(−9) = √36 = +6 likh dena:**
   - *Galat kyun:* √a √b = √(ab) tab fail hota hai jab dono a, b < 0 hon! Pehle i bahar nikalo: (2i)(3i) = 6i² = **−6**.
2. **Im(3 + 4i) = 4i likh dena:**
   - *Sahi soch:* Real part aur Imaginary part **dono real numbers** hote hain! Im(3 + 4i) = **4** (i nahi likhna!).
3. **Complex numbers ko < ya > se tulna karna:** Student likhta hai "5 + 2i > 3 + i".
   - *Galat kyun:* Complex numbers 2D plane mein rehte hain, 1D line par nahi — unme "bada ya chhota" define nahi hota!

---

## Quick Recap

- **i = √(−1)**, **i² = −1**, **i³ = −i**, **i⁴ = 1** (4-step cycle; 4 lagatar powers ka jod = 0).
- **√(−a) = i√a** (a > 0); dono negative hon to √(−a)√(−b) = −√(ab).
- **z = a + ib** (Re(z) = a, Im(z) = b); equality: a = c aur b = d.
- **Division:** denominator ke c − id se upar-neeche guna karo (denominator c² + d² real ban jaata hai!).

---

## Practice Questions

1. Evaluate the following powers of i:
   (a) i²³    (b) i⁴⁸    (c) i⁻³⁵    (d) i¹⁰ + i¹¹ + i¹² + i¹³

2. Express each of the following in the standard form a + ib:
   (a) (5i)(−3i/5)
   (b) 3(7 + 7i) + i(7 + 7i)
   (c) (1 − i) − (−1 + 6i)
   (d) (1/3 + 3i)³

3. Express **[(3 + i√5)(3 − i√5)] ÷ [(√3 + √2 i) − (√3 − i√2)]** in the form a + ib.

4. Find the multiplicative inverse of each of the following complex numbers:
   (a) 2 − 3i    (b) √5 + 3i    (c) −i

5. Evaluate: **[i¹⁸ + (1/i)²⁵]³** and write the answer in the form a + ib.

6. Find the real values of x and y if:
   (a) (x + 2y) + i(2x − 3y) = 5 − 4i
   (b) (3x − 7) + 2iy = −5y + (5 + x)i

7. Evaluate carefully: **√(−16) × √(−25) + √(−9) × √4**.

8. Express **(2 − i) / [(1 − 2i)²]** in the standard form a + ib.

9. Show that **(1 + i)⁴ × (1 + 1/i)⁴ = 16**.

10. Find the real number x if **(x − 2i)(1 + 3i)** is purely imaginary.

11. Find the value of **x³ + 7x² − x + 16** when **x = 1 + 2i**. (Hint: from x − 1 = 2i, square both sides to get x² − 2x + 5 = 0!)

12. True or False? Give a one-line reason:
    (a) For z = 5 − 8i, Im(z) = −8i.
    (b) Every real number is a complex number.
    (c) 2 + 3i > 1 + 2i.
    (d) i⁻¹ = −i.

### Answers

1. (a) 23 = 4(5) + 3 ⟹ i³ = **−i**.
   (b) 48 = 4(12) ⟹ **1**.
   (c) i⁻³⁵ = i^(−35 + 36) = i¹ = **i**.
   (d) 4 lagatar powers ka jod = **0**. Jaanch: i¹⁰(1 + i − 1 − i) = 0 ✅.

2. (a) −3i² = **3 + 0i**.
   (b) 21 + 21i + 7i + 7i² = (21 − 7) + 28i = **14 + 28i**.
   (c) (1 + 1) + i(−1 − 6) = **2 − 7i**.
   (d) (1/3)³ + 3(1/3)²(3i) + 3(1/3)(3i)² + (3i)³ = 1/27 + i − 9 − 27i = **−242/27 − 26i**.
   Jaanch: 1/27 − 243/27 = −242/27 ✅.

3. Numerator = 3² − (i√5)² = 9 + 5 = **14**.
   Denominator = √3 + √2 i − √3 + √2 i = **2√2 i**.
   Ratio = 14 / (2√2 i) = 7 / (√2 i) = (7√2 i) / (2i²) = **0 − (7√2 / 2)i**. Jaanch: (−7√2 i / 2)(2√2 i) = −7(2)(−1) = 14 ✅.

4. (a) (2 + 3i)/(4 + 9) = **2/13 + (3/13)i**.
   (b) (√5 − 3i)/(5 + 9) = **√5/14 − (3/14)i**.
   (c) 1/(−i) = i/(−i²) = **0 + i**. Jaanch: (−i)(i) = −i² = 1 ✅.

5. i¹⁸ = i² = −1; (1/i)²⁵ = (−i)²⁵ = −(i²⁵) = −i.
   (−1 − i)³ = −(1 + i)³ = −(1 + 3i + 3i² + i³) = −(1 + 3i − 3 − i) = −(−2 + 2i) = **2 − 2i**.
   Jaanch: (−1 − i)² = 2i, 2i(−1 − i) = −2i + 2 = 2 − 2i ✅.

6. (a) x + 2y = 5 aur 2x − 3y = −4. Hal karne par: 7y = 14 ⟹ **y = 2**, **x = 1**. Jaanch: 1+4=5, 2−6=−4 ✅.
   (b) Real: 3x − 7 = −5y ⟹ 3x + 5y = 7; Imag: 2y = 5 + x ⟹ x = 2y − 5.
   Rakho: 3(2y − 5) + 5y = 7 ⟹ 11y = 22 ⟹ **y = 2**, **x = −1**. Jaanch: 3(−1)−7 = −10 = −5(2), 2(2) = 4 = 5 + (−1) ✅.

7. (4i)(5i) + (3i)(2) = 20i² + 6i = **−20 + 6i**.

8. (1 − 2i)² = 1 − 4i + 4i² = −3 − 4i.
   (2 − i)/(−3 − 4i) = [(2 − i)(−3 + 4i)] / (9 + 16) = (−6 + 8i + 3i − 4i²) / 25 = **−2/25 + (11/25)i**.
   Jaanch: (−2 + 11i)(−3 − 4i)/25 = (6 + 8i − 33i + 44)/25 = (50 − 25i)/25 = 2 − i ✅.

9. (1 + 1/i) = 1 − i.
   LHS = [(1 + i)(1 − i)]⁴ = (1 − i²)⁴ = 2⁴ = **16** = RHS. Jaanch: 2⁴ = 16 ✅.

10. (x − 2i)(1 + 3i) = (x + 6) + i(3x − 2).
    Purely imaginary hone ke liye Real part = 0 ⟹ x + 6 = 0 ⟹ **x = −6** (tab Im = −20 ≠ 0).

11. x − 1 = 2i ⟹ (x − 1)² = −4 ⟹ **x² − 2x + 5 = 0**.
    Divide x³ + 7x² − x + 16 by (x² − 2x + 5):
    x³ + 7x² − x + 16 = (x + 9)(x² − 2x + 5) + (12x − 29).
    Kyunki x² − 2x + 5 = 0, value = 12(1 + 2i) − 29 = **−17 + 24i**.
    Jaanch: (x+9)(x²−2x+5) = x³+7x²−13x+45; + (12x−29) = x³+7x²−x+16 ✅.

12. (a) ❌ False: Im(z) = −8 (real number, bina i ke!).
    (b) ✅ True: har real number a ko a + 0i likh sakte hain.
    (c) ❌ False: complex numbers mein < ya > define nahi hota.
    (d) ✅ True: 1/i = i/i² = −i.

---

Ab tum iota (i), uski powers aur complex numbers ke chaaron arithmetic operations par poori pakad bana chuke ho.

**Agle topic mein:** complex numbers ko 2D nakshon par utaarenge — **Argand Plane, Modulus aur Conjugate**!
