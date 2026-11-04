# Chapter: Expansions (Part 5)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [expansions-part4.md](expansions-part4.md) se aage chalti hai.** (Chapter ki shuruaat [expansions.md](expansions.md) se hoti hai.)
> **Topics covered in this file:**
> 5. Special Products

---

# Topic 5: Special Products

Topic 4 mein humne cube wali identities dekhi thin: (a + b)³ aur (a − b)³ ko kholna, x ± 1/x ke cubes, aur ye ki a + b aur ab pata ho to a³ + b³ jaisi values bina a aur b dhundhe nikal jaati hain. Manoj bhaiya ki dice factory mein Chhotu ne 11³ ko 1001 samjha tha, jabki asli jawab 1331 tha.

Ab ek dilchasp sawaal: kya koi aisa multiplication hai jisme **do lambe brackets** multiply karo aur jawab mein **sirf do terms** bachen? Haan, hai. Is topic mein hum aise hi kuch "special products" dekhenge, jinme multiply karte hi beech ke saare terms ek doosre ko kaat dete hain.

---

## Munna jaadugar ka trick

School ke annual function mein Munna "jaadugar" bana. Usne stage par ek dost ko bulaya.

"Koi bhi do chhote numbers socho," Munna bola.

Dost ne socha: **4 aur 3**.

Munna: "Ab ek kaagaz par ye calculation karo: (4 + 3) × (4² − 4 × 3 + 3²)."

Dost ne mehnat ki:
- 4 + 3 = 7
- 4² − 12 + 3² = 16 − 12 + 9 = 13
- 7 × 13 = **91**

Par dost ke calculation khatam karne se pehle hi Munna bol chuka tha: "**91!**"

Sab hairaan. Munna ne baad mein raaz bataya: "Maine bas **4³ + 3³** kiya. 64 + 27 = 91. Ye lamba product hamesha do cubes ka jod hi hota hai."

Ye koi jaadu nahi, ek **special product** hai. Is topic mein hum dekhenge ki ye kyun kaam karta hai, aur aise aur kaunse products hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Special product** | Aisa multiplication jiska jawab ek pakke pattern mein aata hai, isliye seedha likh sakte hain | (a + b)(a − b) = a² − b² |
| **Cancel hona** | Ek hi term ka ek baar + aur ek baar − aana, jisse dono mil kar 0 ho jaate hain | +ab aur −ab |
| **Sum of cubes** | Do cubes ka jod | a³ + b³ |
| **Difference of cubes** | Do cubes ka antar | a³ − b³ |
| **Organised table** | Lamba multiplication rows aur columns mein likhna, taaki koi term chhoote nahi | Part C wali table |

---

## Part A: (a + b)(a² − ab + b²) = a³ + b³

Munna wala trick yahi hai. Chalo ise poora multiply karke dekhte hain.

Pehle bracket ka har term, doosre bracket ke har term se multiply hoga:

**a se multiply:**
a × a² = a³
a × (−ab) = −a²b
a × b² = ab²

**b se multiply:**
b × a² = a²b
b × (−ab) = −ab²
b × b² = b³

Ab sab jodo:

a³ − a²b + ab² + a²b − ab² + b³

Dekho kya hua:
- −a²b aur +a²b → **cancel**
- +ab² aur −ab² → **cancel**

Bacha: **a³ + b³**

> **(a + b)(a² − ab + b²) = a³ + b³**

**Jaanch (Munna ke numbers se):** a = 4, b = 3: (7)(16 − 12 + 9) = 7 × 13 = 91, aur 4³ + 3³ = 64 + 27 = 91 ✅

### Example 1: (x + 2)(x² − 2x + 4)

Yahan a = x, b = 2. Doosra bracket check karo: a² − ab + b² = x² − 2x + 4 ✅ (pattern bilkul sahi hai)

= x³ + 2³ = **x³ + 8**

### Example 2: (2x + 3y)(4x² − 6xy + 9y²)

a = 2x, b = 3y.
- a² = 4x² ✅
- ab = 6xy ✅
- b² = 9y² ✅

= (2x)³ + (3y)³ = **8x³ + 27y³**

**Jaanch:** x = 1, y = 1 rakho. Left: (5)(4 − 6 + 9) = 5 × 7 = 35. Right: 8 + 27 = 35 ✅

---

## Part B: (a − b)(a² + ab + b²) = a³ − b³

Bilkul waise hi multiply karo.

**a se multiply:**
a × a² = a³
a × ab = a²b
a × b² = ab²

**−b se multiply:**
−b × a² = −a²b
−b × ab = −ab²
−b × b² = −b³

Jodo: a³ + a²b + ab² − a²b − ab² − b³

- +a²b aur −a²b → cancel
- +ab² aur −ab² → cancel

Bacha: **a³ − b³**

> **(a − b)(a² + ab + b²) = a³ − b³**

### Dono ki tulna

| Product | Pehle bracket ka sign | Doosre bracket mein beech ka sign | Jawab |
|---|---|---|---|
| (a + b)(a² **−** ab + b²) | + | **−** (ulta) | a³ + b³ |
| (a − b)(a² **+** ab + b²) | − | **+** (ulta) | a³ − b³ |

Yaad rakhne ka tareeka: **beech wala sign hamesha pehle bracket ke sign ka ulta hota hai**, aur a² aur b² hamesha plus. (Aage Factorisation chapter mein ise "SOAP" naam se bhi yaad karenge, jab hum inhi identities ko ulta, yaani todne ke liye, use karenge.)

### Example 3: (3a − 2b)(9a² + 6ab + 4b²)

a ki jagah 3a, b ki jagah 2b.
- (3a)² = 9a² ✅
- (3a)(2b) = 6ab ✅, aur sign + hai (kyunki pehle bracket mein −)
- (2b)² = 4b² ✅

= (3a)³ − (2b)³ = **27a³ − 8b³**

### Example 4: (x − 1/x)(x² + 1 + 1/x²)

a = x, b = 1/x. Toh ab = x × 1/x = **1**. Isliye beech wala term sirf "1" dikh raha hai.

= x³ − (1/x)³ = **x³ − 1/x³**

### Example 5: Topic 4 ke Practice Q3 aur Q4, naye tareeke se

**Agar a + b = 7 aur ab = 10, to a³ + b³ nikalo.**

a³ + b³ = (a + b)(a² − ab + b²)

a² + b² = (a + b)² − 2ab = 49 − 20 = 29 (ye Topic 2 wala tareeka hai)
a² − ab + b² = 29 − 10 = 19

a³ + b³ = 7 × 19 = **133**

**Jaanch:** a = 2, b = 5 lene par a + b = 7, ab = 10. Aur 2³ + 5³ = 8 + 125 = 133 ✅

**Agar a − b = 3 aur ab = 10, to a³ − b³ nikalo.**

a² + b² = (a − b)² + 2ab = 9 + 20 = 29
a² + ab + b² = 29 + 10 = 39
a³ − b³ = 3 × 39 = **117**

**Jaanch:** a = 5, b = 2: 125 − 8 = 117 ✅

---

## Part C: Teen terms wala special product

Ab sabse lamba, par sabse mazedaar product:

> **(a + b + c)(a² + b² + c² − ab − bc − ca) = a³ + b³ + c³ − 3abc**

Isme pehle bracket mein 3 terms aur doosre mein 6 terms hain, yaani 18 chhote multiplications. Ghabrao mat. Table banao, taaki koi term chhoote nahi.

### Organised table

Upar doosre bracket ke 6 terms, aur side mein pehle bracket ke 3 terms:

| × | a² | b² | c² | −ab | −bc | −ca |
|---|---|---|---|---|---|---|
| **a** | a³ | ab² | ac² | −a²b | −abc | −a²c |
| **b** | a²b | b³ | bc² | −ab² | −b²c | −abc |
| **c** | a²c | b²c | c³ | −abc | −bc² | −ac² |

Ab jodi bana kar cancel karo:

| Term | Kahan + aaya | Kahan − aaya | Nateeja |
|---|---|---|---|
| ab² | row a | row b | cancel |
| ac² | row a | row c | cancel |
| a²b | row b | row a | cancel |
| a²c | row c | row a | cancel |
| bc² | row b | row c | cancel |
| b²c | row c | row b | cancel |
| abc | kahin nahi | teen baar (har row mein ek) | **−3abc** |
| a³, b³, c³ | ek-ek baar | kahin nahi | **a³ + b³ + c³** |

Bacha: **a³ + b³ + c³ − 3abc**

**Jaanch:** a = 1, b = 2, c = 3.
- Left: (1 + 2 + 3)(1 + 4 + 9 − 2 − 6 − 3) = 6 × 3 = 18
- Right: 1 + 8 + 27 − 3 × 6 = 36 − 18 = 18 ✅

### Example 6: (x + y + 2)(x² + y² + 4 − xy − 2y − 2x)

Yahan c = 2. Doosra bracket check karo: a² + b² + c² − ab − bc − ca = x² + y² + 4 − xy − 2y − 2x ✅

= x³ + y³ + 2³ − 3 × x × y × 2 = **x³ + y³ + 8 − 6xy**

### Example 7: a³ + b³ + c³ nikalna

**Agar a + b + c = 9, ab + bc + ca = 23 aur abc = 15, to a³ + b³ + c³ nikalo.**

Pehle a² + b² + c² chahiye. Topic 3 wali (a + b + c)² identity se:
a² + b² + c² = (a + b + c)² − 2(ab + bc + ca) = 81 − 46 = 35

Ab special product se:
a³ + b³ + c³ − 3abc = (a + b + c)(a² + b² + c² − ab − bc − ca)
a³ + b³ + c³ − 45 = 9 × (35 − 23) = 9 × 12 = 108
a³ + b³ + c³ = 108 + 45 = **153**

**Jaanch:** a = 1, b = 3, c = 5 se saari conditions poori hoti hain (jod 9, ab + bc + ca = 3 + 15 + 5 = 23, abc = 15). Aur 1 + 27 + 125 = 153 ✅

---

## Part D: Sabse kaam ka nateeja (jab a + b + c = 0)

Part C ki identity dobara dekho:

a³ + b³ + c³ − 3abc = **(a + b + c)** × (…)

Agar a + b + c = **0** ho, to poora right side 0 ho jaata hai, chahe doosra bracket kuch bhi ho. Matlab:

> **Agar a + b + c = 0, to a³ + b³ + c³ = 3abc**

Ye bade-bade cubes ko seedha multiplication mein badal deta hai.

### Example 8: 14³ − 9³ − 5³

Ise padho 14³ + (−9)³ + (−5)³.
Jod: 14 − 9 − 5 = 0 ✅

Toh value = 3 × 14 × (−9) × (−5) = **1890**

**Jaanch:** 2744 − 729 − 125 = 1890 ✅

### Example 9: (−16)³ + 10³ + 6³

Jod: −16 + 10 + 6 = 0 ✅
Value = 3 × (−16) × 10 × 6 = **−2880**

**Jaanch:** −4096 + 1000 + 216 = −2880 ✅

### Example 10: 11³ + (−4)³ + (−7)³

Jod: 11 − 4 − 7 = 0 ✅
Value = 3 × 11 × (−4) × (−7) = **924**

**Jaanch:** 1331 − 64 − 343 = 924 ✅

### Example 11 (algebra wala): (2a − b)³ + (b − 3c)³ + (3c − 2a)³

Teeno brackets ka jod: (2a − b) + (b − 3c) + (3c − 2a) = 0 ✅

Toh poora expression = **3(2a − b)(b − 3c)(3c − 2a)**

Bina ek bhi cube khole!

> **Dhyan rakho:** Ye shortcut **sirf tab** chalega jab jod sach mein 0 ho. Pehle jod zaroor check karo.

---

## Part E: Teen binomials ka product (extra)

*(Ye ek extra identity hai. Kuch sawaalon mein bahut kaam aati hai, par ise ratne ki zaroorat nahi, samajh lo bas.)*

Topic 1 mein humne (x + a)(x + b) = x² + (a + b)x + ab dekha tha. Ab ek aur bracket jod do:

> **(x + a)(x + b)(x + c) = x³ + (a + b + c)x² + (ab + bc + ca)x + abc**

Pattern dekho:
- x² ke saath: teeno numbers ka **jod**
- x ke saath: **do-do ke product ka jod**
- akela number: teeno ka **product**

### Example 12: (x + 1)(x + 2)(x + 3)

a = 1, b = 2, c = 3
- a + b + c = 6
- ab + bc + ca = 2 + 6 + 3 = 11
- abc = 6

= **x³ + 6x² + 11x + 6**

**Jaanch:** x = 1: Left = 2 × 3 × 4 = 24. Right = 1 + 6 + 11 + 6 = 24 ✅

### Example 13: (x − 2)(x + 3)(x − 4)

a = −2, b = 3, c = −4 (sign number ke saath hi jaata hai)
- a + b + c = −2 + 3 − 4 = −3
- ab + bc + ca = (−6) + (−12) + 8 = −10
- abc = (−2)(3)(−4) = 24

= **x³ − 3x² − 10x + 24**

**Jaanch:** x = 1: Left = (−1)(4)(−3) = 12. Right = 1 − 3 − 10 + 24 = 12 ✅

---

## Part F: Jaldi calculation ke liye special products

### Example 14: 1001 × 1001 − 1

Ise likho 1001² − 1² = (1001 + 1)(1001 − 1) = 1002 × 1000 = **10,02,000**

(Topic 1 wali (a + b)(a − b) = a² − b² ulti taraf se use ki.)

### Example 15: 37³ − 27³

a = 37, b = 27. a³ − b³ = (a − b)(a² + ab + b²)

- a − b = 10
- a² = 1369, ab = 999, b² = 729
- a² + ab + b² = 1369 + 999 + 729 = 3097

= 10 × 3097 = **30,970**

**Jaanch:** 37³ = 50,653 aur 27³ = 19,683. Antar = 30,970 ✅

### Example 16: Lamba expression simplify karo

**(a + b)(a² − ab + b²) + (a − b)(a² + ab + b²)**

Pehla = a³ + b³ (Part A)
Doosra = a³ − b³ (Part B)
Jod = a³ + b³ + a³ − b³ = **2a³**

---

## Part G: Kaunsi identity lagegi? (poore chapter ka revision)

Kisi bhi expression ko dekh kar pehle pehchano ki kaunsa pattern hai:

| Expression | Pattern | Topic |
|---|---|---|
| (x + 5)² | (a + b)² | Topic 1 |
| (2a − 3)(2a + 3) | (a + b)(a − b) | Topic 1 |
| (x + 4)(x − 7) | (x + a)(x + b) | Topic 1 |
| (p + q + r)² | (a + b + c)² | Topic 3 |
| (y − 2)³ | (a − b)³ | Topic 4 |
| (m + 1)(m² − m + 1) | sum of cubes wala product | Topic 5 |
| (x + 1)(x + 2)(x + 3) | teen binomials | Topic 5 |

**Pehchanne ki trick:**
- Ek hi bracket ki power 2 ya 3 → square ya cube wali identity.
- Do brackets jinme sirf beech ka sign alag → (a + b)(a − b).
- Ek chhota bracket (2 terms) aur ek bada bracket (3 terms jisme square + product + square) → Part A ya B.
- 3 terms ka bracket × 6 terms ka bracket → Part C.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Doosre bracket mein beech ka sign galat**
(a + b)(a² **+** ab + b²) ≠ a³ + b³.
Sahi pattern: pehle bracket mein + ho to beech mein **−**. Check: a = 1, b = 1 par (2)(1 + 1 + 1) = 6, jabki a³ + b³ = 2. Alag hai, isliye galat.

**Galti 2: (a + b)³ aur a³ + b³ ko ek samajhna**
a = 1, b = 2: (1 + 2)³ = 27, par 1³ + 2³ = 9. Bilkul alag. (a + b)³ mein beech ke terms bhi hote hain (Topic 4).

**Galti 3: a² − ab + b² ko (a − b)² samajhna**
(a − b)² = a² **− 2ab** + b². Yahan sirf **−ab** hai, 2ab nahi. Ye ek alag hi bracket hai.

**Galti 4: a + b + c = 0 check kiye bina shortcut lagana**
2³ + 3³ + 4³ = 99, par 3 × 2 × 3 × 4 = 72. Jod 9 hai, 0 nahi, isliye shortcut nahi lagta.

**Galti 5: Teen binomials mein beech ka coefficient bhool jana**
(x + 1)(x + 2)(x + 3) mein x ka coefficient ab + bc + ca = 11 hai, sirf abc = 6 nahi.

**Galti 6: Negative number ka sign chhod dena**
(x − 2)(x + 3)(x − 4) mein a = **−2**, c = **−4**. Agar 2 aur 4 le liye to saara jawab galat aayega.

---

## Quick Recap

- **(a + b)(a² − ab + b²) = a³ + b³**
- **(a − b)(a² + ab + b²) = a³ − b³**
- Beech wala sign pehle bracket ke sign ka **ulta**; a² aur b² hamesha **plus**.
- **(a + b + c)(a² + b² + c² − ab − bc − ca) = a³ + b³ + c³ − 3abc.** Lamba multiplication table bana kar karo.
- **Agar a + b + c = 0, to a³ + b³ + c³ = 3abc.** Pehle jod check karo.
- **(x + a)(x + b)(x + c) = x³ + (a + b + c)x² + (ab + bc + ca)x + abc** (extra).
- Har jawab ko kisi chhote number (jaise x = 1) se **jaanch** lo.

---

## Practice Questions

1. Find each product using a suitable identity:
   (a) (x + 3)(x² − 3x + 9)
   (b) (2y − 1)(4y² + 2y + 1)
   (c) (a/2 + b)(a²/4 − ab/2 + b²)

2. Find the product (x + y − z)(x² + y² + z² − xy + yz + zx).

3. Expand (x + 2)(x + 5)(x − 3).

4. Without finding the cubes, find the value of:
   (a) 9³ − 5³ − 4³
   (b) (−8)³ + 3³ + 5³

5. Using a suitable product, find the value of 43³ − 33³.

6. If a + b = 6 and ab = 8, find a³ + b³ using the identity (a + b)(a² − ab + b²) = a³ + b³.

7. If x − 1/x = 6, find the value of x³ − 1/x³.

8. If a + b + c = 8, ab + bc + ca = 19 and abc = 12, find a³ + b³ + c³.

9. Name the identity you would use for each:
   (a) (3p + 2)²
   (b) (k − 6)(k + 6)
   (c) (n + 4)(n² − 4n + 16)
   (d) (a + 2b + c)²
   (e) (x + 2)(x − 5)(x + 1)

10. Simplify: (x + 1)(x² − x + 1) − (x − 1)(x² + x + 1).

### Answers

1. (a) a = x, b = 3, aur doosra bracket a² − ab + b² hai. Jawab: **x³ + 27**
   (b) a = 2y, b = 1, doosra bracket a² + ab + b². Jawab: (2y)³ − 1³ = **8y³ − 1**
   (c) a = a/2, b = b. (a/2)² = a²/4 ✅, (a/2)(b) = ab/2 ✅. Jawab: (a/2)³ + b³ = **a³/8 + b³**

2. Yahan c = −z maano. Tab a² + b² + c² − ab − bc − ca = x² + y² + z² − xy − y(−z) − (−z)x = x² + y² + z² − xy + yz + zx ✅. Jawab: x³ + y³ + (−z)³ − 3xy(−z) = **x³ + y³ − z³ + 3xyz**

3. a = 2, b = 5, c = −3. Jod = 4, ab + bc + ca = 10 − 15 − 6 = −11, abc = −30.
   Jawab: **x³ + 4x² − 11x − 30**
   Jaanch: x = 1 par Left = 3 × 6 × (−2) = −36, Right = 1 + 4 − 11 − 30 = −36 ✅

4. (a) 9 + (−5) + (−4) = 0, toh value = 3 × 9 × (−5) × (−4) = **540**. Jaanch: 729 − 125 − 64 = 540 ✅
   (b) −8 + 3 + 5 = 0, toh value = 3 × (−8) × 3 × 5 = **−360**. Jaanch: −512 + 27 + 125 = −360 ✅

5. a = 43, b = 33. a − b = 10. a² + ab + b² = 1849 + 1419 + 1089 = 4357. Jawab: 10 × 4357 = **43,570**
   Jaanch: 79,507 − 35,937 = 43,570 ✅

6. a² + b² = 36 − 16 = 20. a² − ab + b² = 20 − 8 = 12. a³ + b³ = 6 × 12 = **72**
   Jaanch: a = 2, b = 4 → 8 + 64 = 72 ✅

7. x² + 1/x² = (x − 1/x)² + 2 = 36 + 2 = 38. Toh x² + 1 + 1/x² = 39.
   x³ − 1/x³ = (x − 1/x)(x² + 1 + 1/x²) = 6 × 39 = **234**
   Jaanch (Topic 4 wale formula se): 6³ + 3 × 6 = 216 + 18 = 234 ✅

8. a² + b² + c² = 64 − 38 = 26.
   a³ + b³ + c³ − 3 × 12 = 8 × (26 − 19) = 56
   a³ + b³ + c³ = 56 + 36 = **92**
   Jaanch: a = 1, b = 3, c = 4 → 1 + 27 + 64 = 92 ✅

9. (a) **(a + b)²**
   (b) **(a + b)(a − b) = a² − b²**
   (c) **(a + b)(a² − ab + b²) = a³ + b³**
   (d) **(a + b + c)²**
   (e) **(x + a)(x + b)(x + c)** (teen binomials)

10. Pehla = x³ + 1, doosra = x³ − 1. Antar = x³ + 1 − x³ + 1 = **2**

---

## Chapter Wrap-up: Expansions

| Topic | Kya seekha | Sabse kaam ki baat |
|---|---|---|
| 1 | (a ± b)², (a + b)(a − b), (x + a)(x + b) | Square mein beech ka 2ab mat bhoolo |
| 2 | Squares wali identities se values nikalna, x ± 1/x ke squares | a + b aur ab se a² + b² bina a, b dhundhe |
| 3 | (a + b + c)² | Teeno squares + har jodi ka 2 guna |
| 4 | (a ± b)³, x ± 1/x ke cubes | (a + b)³ ≠ a³ + b³ |
| 5 | Special products: a³ ± b³ wale products, teen terms wala product, teen binomials | a + b + c = 0 ho to a³ + b³ + c³ = 3abc |

### Saari identities ek jagah

| # | Identity |
|---|---|
| 1 | (a + b)² = a² + 2ab + b² |
| 2 | (a − b)² = a² − 2ab + b² |
| 3 | (a + b)(a − b) = a² − b² |
| 4 | (x + a)(x + b) = x² + (a + b)x + ab |
| 5 | (a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ca |
| 6 | (a + b)³ = a³ + 3a²b + 3ab² + b³ = a³ + b³ + 3ab(a + b) |
| 7 | (a − b)³ = a³ − 3a²b + 3ab² − b³ = a³ − b³ − 3ab(a − b) |
| 8 | (a + b)(a² − ab + b²) = a³ + b³ |
| 9 | (a − b)(a² + ab + b²) = a³ − b³ |
| 10 | (a + b + c)(a² + b² + c² − ab − bc − ca) = a³ + b³ + c³ − 3abc |
| 11 | (x + a)(x + b)(x + c) = x³ + (a + b + c)x² + (ab + bc + ca)x + abc (extra) |

Aage Factorisation chapter mein hum inhi identities ko **ulti taraf** se use karenge: lambe expressions ko todkar chhote brackets mein likhna.

---

Shabaash! Ye poora chapter ab aapke haath mein ek "multiplication ka toolbox" de gaya hai. Koi bhi lamba product dikhe, pehle pattern pehchano, phir seedha jawab likho, aur aakhir mein x = 1 rakh kar jaanch lo. Aap kar loge!
