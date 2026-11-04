# Chapter: Polynomials (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [polynomials-part2.md](polynomials-part2.md) se aage chalti hai.** (Topic 1 aur 2 [polynomials.md](polynomials.md) mein hain.)
> **Topics covered in this file:**
> 4. Polynomials of Various Degrees: Linear, Quadratic, Cubic, Biquadratic

---

# Topic 4: Polynomials of Various Degrees

Pichle topic mein hum ne seekha ki polynomial kya hota hai aur use standard form mein kaise likhte hain. Ab ek sawal: kya sab polynomials ek jaise hote hain? Nahi. 5x + 1 aur x⁴ - 3x + 2 dono polynomial hain, par dono ka "swabhav" bahut alag hai. Is topic mein hum polynomials ko unki **degree** ke hisaab se alag alag naam dena seekhenge.

---

## Ek khilone ki kahani

Socho aapke paas ek chhota sa cube hai, jiski har side **x cm** hai.

- Agar aap uski **ek kinare (edge)** ki lambai naapo, to wo **x** hai. Ye ek seedhi line hai.
- Agar aap uski **ek face** ka area nikalo (x × x), to wo **x²** hai. Ye ek sapaat sataha (flat surface) hai.
- Agar aap uska **poora volume** nikalo (x × x × x), to wo **x³** hai. Ye poori thos cheez hai.

Dhyan do, jaise jaise hum "dimension" badhate gaye (line, surface, solid), x ki **power** bhi badhti gayi: 1, 2, 3. Polynomials ke naam isi power se bante hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Degree** | Polynomial mein variable ki sabse badi power | 4x³ + x mein degree **3** |
| **Linear polynomial** | Degree 1 wala polynomial | 2x + 5 |
| **Quadratic polynomial** | Degree 2 wala polynomial | x² - 3x + 2 |
| **Cubic polynomial** | Degree 3 wala polynomial | x³ + 1 |
| **Biquadratic polynomial** | Degree 4 wala polynomial (ise quartic bhi kehte hain) | x⁴ - 5x² + 4 |

---

## Part A: Degree kya hoti hai

Ek variable wale polynomial mein **x ki jo sabse badi power hoti hai, wahi polynomial ki degree hai.**

Is rule ko bas ek line mein yaad rakho:

> **Sabse badi power = Degree**

Aap Topic 3 mein standard form seekh chuke ho, to ye bahut aasan hai. Descending order mein likhne par **pehle term ki power hi degree hoti hai.**

### Examples

| Polynomial | Powers | Sabse badi | Degree |
|---|---|---|---|
| 3x + 7 | 1, 0 | 1 | **1** |
| 5x² - x + 2 | 2, 1, 0 | 2 | **2** |
| x³ - 4x | 3, 1 | 3 | **3** |
| 2x⁴ + x² - 9 | 4, 2, 0 | 4 | **4** |
| 9 | 0 | 0 | **0** |

### Teen zaroori baatein

**1. Degree ginte waqt terms ki ginti ya coefficient nahi dekhte, sirf power dekhte hain.**
- 100x² ki degree **2** hai (100 se koi farak nahi padta).
- x⁵ + 1 ki degree **5** hai.

**2. Degree dhundne se pehle expression ko simplify karo (like terms jodo).**
**x³ + 2x - x³** dekhne mein cubic lagta hai, par x³ - x³ = 0 ho jata hai, to bacha **2x**. Iski degree **1** hai.

**3. Constant polynomial (sirf number) ki degree 0 hoti hai.**
5 = 5x⁰, to degree 0 hai. Par **zero polynomial** (sirf 0) ki degree **define nahi hoti**, yani uski koi degree nahi maani jati.

---

## Part B: Linear Polynomial (Degree 1)

**Linear** shabd "line" se aaya hai, kyunki jab hum iska graph banate hain to ek **seedhi line** banti hai.

**General form:** **ax + b**, jahan a aur b numbers hain aur **a ≠ 0**.

Kuch examples:

- 5x + 3
- x - 7
- -2y + 1
- 4x (yahan b = 0, par phir bhi linear hai)
- x/3 + 2

### Real-life mein linear

Topic 1 ka auto wala yaad hai? **Kiraya = 30 + 12x.** Ye ek linear polynomial hai, kyunki x ki sabse badi power 1 hai.

Kya hota hai jab x badhta hai? Hamesha **barabar** badhta hai:

| Km (x) | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Kiraya (30 + 12x) | ₹42 | ₹54 | ₹66 | ₹78 | ₹90 |

Har km par kiraya **₹12** badha. Ye "barabar badhna" linear ki pehchaan hai.

Aur examples:
- Ek car 60 km/h ki speed se chale to distance = **60t** (t ghante mein). Ye linear hai.
- Ek pen ₹10 ka hai. n pen ka cost = **10n**. Linear.

### a ≠ 0 kyun?

Agar a = 0 ho jaye to ax + b = 0·x + b = b rah jata hai, jo ek constant hai (degree 0). Isliye linear banne ke liye x ka coefficient zero nahi hona chahiye.

---

## Part C: Quadratic Polynomial (Degree 2)

**General form:** **ax² + bx + c**, jahan a, b, c numbers hain aur **a ≠ 0**.

Kuch examples:

- x² - 3x + 2
- 2y² + 5
- t² - 9
- 4z² + z
- 7x² (b = 0, c = 0, par phir bhi quadratic)

### Ek bahut common galatfehmi

"Quad" sunke log sochte hain ki iska 4 se koi lena dena hoga. **Aisa nahi hai.** "Quadratic" shabd Latin ke "**quadratus**" se aaya hai, jiska matlab **square (vargakar)** hota hai, aur x² ko "x squared" kehte hain. Isiliye degree **2** wale polynomial ko quadratic kehte hain.

### Real-life mein quadratic

- **Square ka area:** Side x ho to area = **x²**. Ye quadratic hai.
- **Circle ka area:** Radius r ho to area = **πr²**. Ye bhi quadratic hai, kyunki r ki sabse badi power 2 hai.
- **Topic 3 ka khet:** x² + 5x + 6, jahan plot square tha.
- **Upar phenki gayi gend:** Ek gend ko upar phenko to waqt ke saath uski height ek quadratic polynomial se milti hai.

### Quadratic aur linear mein farak

Dekho x badhne par kya hota hai. Square ka area x² dekho:

| Side (x) | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Area (x²) | 1 | 4 | 9 | 16 | 25 |

Area **barabar nahi badh raha.** Pehle 3 se badha (1 se 4), phir 5 se (4 se 9), phir 7 se (9 se 16). Quadratic **tezi se** badhta hai. Isiliye jab side double karte ho to area **chaar guna** ho jata hai.

---

## Part D: Cubic Polynomial (Degree 3)

**General form:** **ax³ + bx² + cx + d**, jahan a ≠ 0.

Kuch examples:

- x³ - 2x² + x - 5
- 3y³ + 4
- z³ - z
- 5x³ (monomial hai, par phir bhi cubic)

**Cubic** shabd "**cube**" se aaya hai. Cube ka volume x³ hota hai, isiliye.

### Real-life mein cubic

- **Cube ka volume:** Side x ho to volume = **x³**.
- **Dabbe (box) ka volume:** Agar length x, chaudai x + 1 aur unchai x + 2 ho, to volume = x(x + 1)(x + 2) = **x³ + 3x² + 2x**. Ye cubic polynomial hai.
- **Paani ki tanki:** Agar tanki cube ke aakar ki hai to uski capacity x³ hogi.

### x, x², x³ ki race

Dekhte hain ki teeno kitni tezi se badhte hain:

| x | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| x | 1 | 2 | 3 | 4 | 5 |
| x² | 1 | 4 | 9 | 16 | 25 |
| x³ | 1 | 8 | 27 | 64 | 125 |

x = 5 par x³ pehle hi 125 ho gaya. Power badhne ke saath value bahut tezi se badhti hai.

---

## Part E: Biquadratic Polynomial (Degree 4)

**General form:** **ax⁴ + bx³ + cx² + dx + e**, jahan a ≠ 0.

Kuch examples:

- x⁴ - 5x² + 4
- 2y⁴ + y
- z⁴ - 1
- 3x⁴ + x³ - x² + 7x - 2

### Naam kahan se aaya?

- **Bi** = do
- **Quadratic** = square (x²)

**Biquadratic** matlab "**square ka bhi square**". Dekho:
(x²)² = x² × x² = **x⁴**

Isiliye degree 4 wale polynomial ko biquadratic kehte hain. Kuch kitabon mein ise **quartic** bhi kaha jata hai (quart = chauthai, yaani 4). Dono naam ek hi cheez ke hain.

### Real-life mein biquadratic

Sach bolein to roz ki zindagi mein ye baaki teeno se kam dikhta hai. Par ek example hai:

Maan lo ek square ki side **x²** hai (khud ek area ki tarah). To us square ka area hoga (x²) × (x²) = **x⁴**. Aage chalke higher classes mein ye physics aur engineering mein bahut kaam aata hai.

### x⁴ ki value

| x | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| x⁴ | 1 | 16 | 81 | 256 | 625 |

x = 5 par x⁴ = 625. Dekho kitni tezi se badha!

### Aur badi degree wale polynomials

Degree 5 wale polynomial ko **quintic** kehte hain. Isse aage ke liye alag naam use nahi hote. Hum bas "**degree n ka polynomial**" kehte hain (jaise degree 6, degree 10).

---

## Sab ek saath: summary table

| Degree | Naam | General form (a ≠ 0) | Example | Zyada se zyada terms |
|---|---|---|---|---|
| 0 | Constant | k | 7 | 1 |
| 1 | Linear | ax + b | 3x - 5 | 2 |
| 2 | Quadratic | ax² + bx + c | x² - 4x + 3 | 3 |
| 3 | Cubic | ax³ + bx² + cx + d | 2x³ - x + 1 | 4 |
| 4 | Biquadratic | ax⁴ + bx³ + cx² + dx + e | x⁴ - 16 | 5 |

Kam se kam terms ki baat nahi hoti, kyunki koi bhi term gayab ho sakta hai (jaise x⁴ - 16 mein sirf 2 terms hain).

---

## Part F: Naam pehchanne ke solved examples

**Example 1:** 5x - 3
Sabse badi power 1 hai. **Linear polynomial** (degree 1).

**Example 2:** 2x² + 7
Isme x wala term nahi hai, par sabse badi power 2 hai. **Quadratic polynomial** (degree 2).

**Example 3:** y³ - y² + 4y - 1
Sabse badi power 3. **Cubic polynomial** (degree 3).

**Example 4:** 3t⁴ + t² - 9
Sabse badi power 4. **Biquadratic polynomial** (degree 4).

**Example 5:** 9
Koi variable nahi, **constant polynomial** (degree 0).

**Example 6:** 4x - x² (kram bikhra hua hai)
Kram se farak nahi padta. Sabse badi power 2 hai. **Quadratic polynomial.**

**Example 7:** 2x(x² - 3)
Pehle bracket kholo: 2x · x² - 2x · 3 = 2x³ - 6x.
Sabse badi power 3. **Cubic polynomial.**

**Example 8:** 2x³ - 2x³ + 5x
Pehle simplify karo: 2x³ - 2x³ = 0, bacha **5x**.
Degree 1. **Linear polynomial.** (Dekhne mein cubic tha, par simplify karne par linear nikla!)

**Example 9:** Ek quadratic polynomial likho jiske coefficients 2, -3 aur 5 hon.
Quadratic form ax² + bx + c mein a = 2, b = -3, c = 5 rakho:
**2x² - 3x + 5**

**Example 10:** Ek cubic polynomial likho jisme sirf 2 terms hon.
x³ + 1 (ya 5x³ - 2x). Dono cubic hain, kyunki sabse badi power 3 hai. Terms ki ginti degree tay nahi karti.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Quadratic ka matlab 4 samajhna**
Quadratic ka matlab **square** hai, to degree **2**. Degree 4 ke liye **biquadratic** hai.

**Galti 2: Terms ki ginti ko degree samajhna**
- x⁴ + 1 mein sirf **2 terms** hain (binomial), par degree **4** hai (biquadratic).
- 7x³ mein sirf **1 term** hai (monomial), par degree **3** hai (cubic).
Terms ki ginti aur degree dono alag baatein hain.

**Galti 3: Simplify kiye bina degree bata dena**
x³ - x³ + 2x ko cubic mat kehna. Pehle simplify karo. Degree 1 hai.

**Galti 4: Bikhre hue kram mein pehle term ko degree samajhna**
4x - x² + 7x³ mein pehla term 4x hai, par degree 3 hai (sabse badi power x³ ki hai). Pehle standard form mein likho: 7x³ - x² + 4x.

**Galti 5: Gayab term se degree badalne ka dar**
x² + 3 mein x wala term nahi hai, phir bhi ye quadratic hai. Gayab term se degree par asar nahi padta.

**Galti 6: a = 0 ko bhool jana**
(k - 2)x² + 5x + 1 tabhi quadratic hai jab k ≠ 2. Agar k = 2 ho to x² wala term gayab ho jata hai aur ye linear ban jata hai.

**Galti 7: Constant polynomial aur zero polynomial ko ek jaisa samajhna**
5 ki degree 0 hai. Par 0 (zero polynomial) ki degree define nahi hoti.

---

## Quick Recap

- **Degree** = polynomial mein variable ki **sabse badi power**.
- Degree dhundne se pehle **simplify** karo, aur like terms jodo.
- **Degree 0:** Constant polynomial (jaise 7).
- **Degree 1:** **Linear** (ax + b). Seedhi line, barabar badhta hai. Jaise auto ka kiraya.
- **Degree 2:** **Quadratic** (ax² + bx + c). "Quadratic" = square. Jaise square ka area.
- **Degree 3:** **Cubic** (ax³ + bx² + cx + d). Jaise cube ka volume.
- **Degree 4:** **Biquadratic** (ax⁴ + ...). "Square ka square", yaani (x²)² = x⁴. Ise quartic bhi kehte hain.
- **Zaroori shart:** Sabse badi power ka coefficient **a ≠ 0** hona chahiye.
- Degree aur **terms ki ginti alag** baatein hain.
- **Zero polynomial** ki degree define nahi hoti.

---

## Practice Questions

1. Write the degree and the name (constant, linear, quadratic, cubic or biquadratic) of each polynomial:
   (a) 7x - 2
   (b) 3y² + y
   (c) 5
   (d) z⁴ - 2z² + 1
   (e) 2 - x³
   (f) 9x
   (g) 3x³ - 3x³ + 5x²

2. Write one example of each:
   (a) a linear binomial
   (b) a quadratic trinomial
   (c) a cubic monomial
   (d) a biquadratic binomial

3. State whether each statement is true or false. Give a reason.
   (a) x⁴ + 1 is a trinomial.
   (b) 5x³ is a cubic polynomial.
   (c) A quadratic polynomial must have exactly 3 terms.
   (d) The degree of the constant polynomial 8 is 0.
   (e) "Quadratic" means a polynomial of degree 4.

4. For what value of k is the polynomial p(x) = (k - 2)x² + 5x + 1
   (a) linear?
   (b) quadratic?

5. Find the value of x, x², x³ and x⁴ when x = -2. What do you notice about the signs?

6. The side of a cube is a cm. Write its volume as a polynomial in a, and name the polynomial according to its degree. Find the volume when a = 5.

7. Write 5x³ - 2x² + 7 - x⁴ in standard form and name it according to its degree.

### Answers

1. (a) Degree **1**, **linear**
   (b) Degree **2**, **quadratic**
   (c) Degree **0**, **constant**
   (d) Degree **4**, **biquadratic**
   (e) Degree **3**, **cubic** (standard form: -x³ + 2)
   (f) Degree **1**, **linear**
   (g) Pehle simplify karo: 3x³ - 3x³ = 0, bacha 5x². Degree **2**, **quadratic**.
2. Koi bhi sahi example chalega. Jaise:
   (a) **x + 4**  (b) **x² - 5x + 6**  (c) **7x³**  (d) **x⁴ - 1**
3. (a) **False.** Isme 2 terms hain, to ye binomial hai (degree 4 hai).
   (b) **True.** Sabse badi power 3 hai.
   (c) **False.** Quadratic mein 1, 2 ya 3 terms ho sakte hain (jaise 7x², x² + 3, x² - 3x + 2). Sirf x² wala term hona zaroori hai.
   (d) **True.** 8 = 8x⁰, to degree 0 hai.
   (e) **False.** Quadratic ka matlab degree **2** hai. Degree 4 biquadratic hai.
4. (a) Linear tab hoga jab x² ka coefficient 0 ho: k - 2 = 0, to **k = 2**. Tab p(x) = 5x + 1.
   (b) Quadratic tab hoga jab k - 2 ≠ 0, yaani **k ≠ 2**.
5. x = -2 par:
   x = **-2**
   x² = (-2)² = **4**
   x³ = (-2)³ = **-8**
   x⁴ = (-2)⁴ = **16**
   Signs: odd power (1, 3) par answer negative aata hai, even power (2, 4) par positive. (Ye hum ne Exponents chapter mein seekha tha.)
6. Volume = a × a × a = **a³**. Ye ek **cubic polynomial** hai (degree 3). a = 5 par volume = 5³ = **125 cm³**.
7. Standard form (descending): **-x⁴ + 5x³ - 2x² + 7**. Sabse badi power 4 hai, to **biquadratic polynomial** (degree 4).

---

Agar sab kuch ek saath yaad rakhna mushkil lag raha ho, to bas ye ek line yaad kar lo: **degree 1 = linear, 2 = quadratic, 3 = cubic, 4 = biquadratic.** Aur sabse badi power hi degree hai. Baaki sab isi se nikalta hai.
