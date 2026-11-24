# Chapter: Quadratic Equations (Part 3)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [quadratic-equations-part2.md](quadratic-equations-part2.md) se aage chalti hai** (wahan Topic 2 mein fractions aur brackets wali equations ko quadratic bana kar hal kiya gaya). Chapter ki shuruaat: [quadratic-equations.md](quadratic-equations.md). Class 9 ke perfect-square identities: [expansions.md](../../../class9/maths/expansions/expansions.md).
> **Topics covered in this file:**
> 3. Completing The Square: Adhura Square Poora Karna

---

# Topic 3: Completing The Square: Adhura Square Poora Karna

Topic 1 mein tumne quadratic equations ko factorisation se tora, aur Topic 2 mein dekha ki kai equations (fractions, brackets wali) thoda saaf karne par quadratic ban jaati hain. Par ek sawaal baaki tha: factorisation tab chalti hai jab sahi jodi mil jaaye. Agar jodi na mile, jaise x² + 6x + 2 = 0 mein, to kya equation hal hi nahi hoti? Is topic mein ek aisa tareeka aayega jo **kisi bhi quadratic equation par** chalta hai, chahe jodi mile ya na mile: ek adhure square ko ek chhota sa tukda jod kar poora karna. Aur isi tareeke se Topic 4 ka bada formula bhi nikalega.

---

## Paavan aur farsh ka khaali kona

Paavan Saturday ko Papa ke saath ek chhoti dukaan mein gaya, jahan naya farsh lag raha tha. Mistri uncle ne pehle ek square hissa bichhaya: x tiles lambi aur x tiles chaudi. Phir us square ki do side par (ek dayin aur ek neeche wali) 3 tiles chaudi patti laga di. Dukaan wale ne bataya: "Poore farsh mein kul **55 tiles** lagi hain." Square ki side x kitni thi, ye kisi ne nahi bataya.

Paavan ne copy mein tiles ka naksha banaya aur dekha ki ek kona **khaali** reh gaya hai: wahan dono patti milti hain, par wahan koi tile nahi hai.

```
    x = 5        3
 <----------->  <----->
 #  #  #  #  #  =  =  =
 #  #  #  #  #  =  =  =
 #  #  #  #  #  =  =  =
 #  #  #  #  #  =  =  =
 #  #  #  #  #  =  =  =
 =  =  =  =  =  .  .  .
 =  =  =  =  =  .  .  .
 =  =  =  =  =  .  .  .
```

> **Figure 3.1** – Paavan ka naksha, jab x = 5 hai: # wali tiles x × x ka square (25 tiles), = wali tiles dono pattiyan (15 + 15 = 30 tiles), aur . wala 3 × 3 kona khaali hai (9 tiles ki jagah). Agar ye 9 tiles aur laga di jaayein, to 8 × 8 ka poora square ban jaata hai.

"Ye kona bharte hi poora square ban jaayega," Paavan ne socha. "Kitni tiles chahiye? Patti 3 chaudi hai, to kona 3 × 3 = 9 tiles ka hoga. Tab kul 55 + 9 = 64 tiles, aur 64 = 8 × 8. Yaani bade square ki side 8 hai, aur wo x + 3 hai. To x = 5!"

Dekha? Paavan ne ek adhura square (L jaisa farsh) ko ek tukda jod kar poora square banaya, aur usi se x nikal liya. Isi ko **completing the square** kehte hain. Is topic mein hum ye kaam nikaalenge: kaun sa tukda jodna hai, kyun, aur jab answer 8 jaisa seedha nahi aata, tab kya karna hai.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Completing the square (square poora karna)** | x² + bx jaise adhure expression mein ek sahi number jodna, taaki wo ek bracket ka perfect square ban jaaye | x² + 6x mein 9 jodo, to (x + 3)² banta hai |
| **Aadha coefficient** | x ke coefficient ka aadha hissa. Yahi bracket ke andar ka number banta hai | x² + 6x mein x ka coefficient 6, uska aadha 3 |
| **Jodne wala number** | Wo number jo adhure square ke khaali kone ko bharta hai: (aadha coefficient)² | x² + 6x ke liye 3² = 9 |
| **Perfect-square roop** | Equation ko (x + h)² = k ke roop mein likhna: baayen taraf ek bracket ka square, daayen taraf ek number | (x + 3)² = 64 |

---

## Class 9 aur Chapter 2 se yaad

- [expansions.md](../../../class9/maths/expansions/expansions.md) (Part B aur Part C) mein tasveer ke saath seekha tha: **(a + b)² = a² + 2ab + b²** aur **(a − b)² = a² − 2ab + b²**. Beech wala term hamesha "dono ka double product" hota hai.
- [polynomials-part2.md](../polynomials/polynomials-part2.md) mein quadratic ke do zeros ka jod −b/a aur guna c/a mila tha. Is topic mein isi se hum apne roots ki **Jaanch** karenge.
- [polynomials.md](../polynomials/polynomials.md) (Part C) mein dekha tha ki parabola x-axis ko 2 jagah kaat sakta hai, 1 jagah chhoo sakta hai, ya bilkul nahi milta. Part E mein ye yaad kaam aayega.
- [real-numbers-part4.md](../real-numbers/real-numbers-part4.md) mein √ wali kai sankhyaayein irrational nikli thi. Hamare kai roots isi tarah ke honge.

---

## Part A: Adhura square aur khaali kona

Class 9 ka identity dekho: **(x + h)² = x² + 2hx + h²**. Isme x² aur 2hx wale do terms hamare paas adhure expression x² + bx mein hain. Ab milao: x ka coefficient b hai, aur identity mein 2h. To

2h = b, yaani **h = b/2**.

Yaani bracket ke andar wala number **aadha coefficient** hai. Identity ka teesra term h² = (b/2)² adhure expression mein nahi hai: wahi **khaali kona** hai. Isliye

**x² + bx + (b/2)² = (x + b/2)²**

Tasveer mein dekho. x² ke saath b × x ka ek lamba rectangle hai. Use beech se do barabar tukdon mein baanto: har tukda (b/2) chaudi. Ek tukda square ki dayin side par aur ek neeche, aur kona bachta hai (b/2) × (b/2).

```
         x               3
+-----------------+-------------+
:                 :             :
:       x²        : x × 3 = 3x  :  x
:                 :             :
+-----------------+-------------+
:                 :. . . . . . .:
:   3 × x = 3x    :  3 × 3 = 9  :  3
:                 :. . . . . . .:
+-----------------+-------------+
```

> **Figure 3.2** – x² + 6x ka adhura square (figure naap ke hisaab se nahi hai). Patti 6 ki jagah do tukdon mein bati: 3x aur 3x. Dotted kona 3 × 3 = 9 khaali hai; use jodte hi x² + 6x + 9 = (x + 3)² ban jaata hai.

### Example 1: Paavan ki paheli, algebra ke saath

Farsh ki equation: x² + 6x = 55. Aadha coefficient 6 ÷ 2 = 3, to jodne wala number 3² = 9.

- Dono taraf 9 jodo: x² + 6x + 9 = 55 + 9
- Baayen taraf perfect square, daayen taraf jod: (x + 3)² = 64
- Square root lo: x + 3 = 8 ya x + 3 = −8
- x = 5 ya x = −11

**Jaanch:** 5² + 6(5) = 25 + 30 = 55 ✅. (−11)² + 6(−11) = 121 − 66 = 55 ✅. Roots ka jod 5 + (−11) = −6 aur equation x² + 6x − 55 = 0 mein −b/a = −6 ✅. Guna 5 × (−11) = −55 aur c/a = −55 ✅

**Story check:** tiles ginti negative nahi ho sakti, isliye farsh ke liye x = 5 hi chalega. (Story check ki poori aadat Topic 6 mein banegi; yahan itna dhyan rakho ki equation ke do roots hote hain, par kahani kabhi ek ko hi maanti hai.)

### Kya jodna hai: ek table

Jodne wala number nikalne ke liye bas do kaam: coefficient ka aadha, phir uska square. Negative coefficient ho to aadha bhi negative hota hai, par square hamesha positive.

| x ka coefficient | Aadha | Aadha ka square (jodna hai) | Perfect square |
|---|---|---|---|
| 2 | 1 | 1 | (x + 1)² |
| 16 | 8 | 64 | (x + 8)² |
| −20 | −10 | 100 | (x − 10)² |
| 3 | 3/2 | 9/4 | (x + 3/2)² |
| −17 | −17/2 | 289/4 | (x − 17/2)² |
| 1 | 1/2 | 1/4 | (x + 1/2)² |
| 2/3 | 1/3 | 1/9 | (x + 1/3)² |

**Jaanch (ek row):** (x + 3/2)² = x² + 2 × (3/2) × x + 9/4 = x² + 3x + 9/4 ✅. Is tarah har row ka perfect square wapas kholo, to middle term wahi aata hai jo coefficient tha.

---

## Part B: Method, a = 1 wali equations

Ab saari baatein ek saath. Figure 3.3 mein poori recipe hai.

```
+--------------------------------------------------------+
: Kadam 1: x² ka coefficient 1 nahi hai to poori         :
: equation ko a se divide karo                           :
+--------------------------------------------------------+
                             v
+--------------------------------------------------------+
: Kadam 2: constant ko doosri taraf bhejo:               :
: x² + bx = −c                                           :
+--------------------------------------------------------+
                             v
+--------------------------------------------------------+
: Kadam 3: x ke coefficient ka AADHA lo, uska square     :
: DONO taraf jodo                                        :
+--------------------------------------------------------+
                             v
+--------------------------------------------------------+
: Kadam 4: baayen taraf perfect square:                  :
: (x + aadha)² = ek number                               :
+--------------------------------------------------------+
                             v
+--------------------------------------------------------+
: Kadam 5: us number ko dekho:                           :
: positive: x + aadha = ± root (do roots)                :
: zero: ek hi root                                       :
: negative: real root nahi                               :
+--------------------------------------------------------+
                             v
+--------------------------------------------------------+
: Kadam 6: x akela karo, phir Jaanch: jod aur guna       :
+--------------------------------------------------------+
```

> **Figure 3.3** – Completing the square ka poora raasta. Kadam 1 tabhi chahiye jab x² ke aage 1 ke alawa koi number ho (Part D). Kadam 5 mein number ka sign tay karta hai ki kitne roots milenge (Part E).

### Dono taraf kyun?

Equation ek **taraazu** hai: dono palle barabar. Agar baayen palle mein 9 ka vazan jodo aur daayen mein nahi, to taraazu tedha ho jaayega, yaani nayi baat ab purani equation ki baat nahi rahi. Isliye jo bhi jodo, **dono taraf** jodo. Aur 9 jodne ka maksad sirf itna hai ki baayen taraf perfect square bane. Galti ka namoona Aam galtiyan mein dekhenge.

### Example 2: x² − 14x + 33 = 0

- Constant bhejo: x² − 14x = −33
- Aadha: −14 ÷ 2 = −7. Square: 49. Dono taraf jodo: x² − 14x + 49 = −33 + 49
- Perfect square: (x − 7)² = 16
- Square root: x − 7 = 4 ya x − 7 = −4
- **x = 11 ya x = 3**

**Jaanch:** 11² − 14(11) + 33 = 121 − 154 + 33 = 0 ✅. 3² − 14(3) + 33 = 9 − 42 + 33 = 0 ✅. Jod 11 + 3 = 14 = −b/a ✅. Guna 11 × 3 = 33 = c/a ✅

**Factorisation se milao:** x² − 14x + 33 = (x − 3)(x − 11), to roots 3 aur 11: wahi. Jab daayen taraf ka number perfect square hota hai (yahan 16 = 4²), tab roots rational aate hain aur factorisation bhi chalti hai.

### Example 3: x² − 7x − 18 = 0 (aadha coefficient fraction mein)

- Constant bhejo: x² − 7x = 18
- Aadha: −7/2. Square: 49/4. Dono taraf jodo: x² − 7x + 49/4 = 18 + 49/4
- 18 = 72/4, to daayen taraf 72/4 + 49/4 = 121/4. Perfect square: (x − 7/2)² = 121/4
- Square root: x − 7/2 = 11/2 ya x − 7/2 = −11/2
- x = 7/2 + 11/2 = **9** ya x = 7/2 − 11/2 = **−2**

**Jaanch:** 9² − 7(9) − 18 = 81 − 63 − 18 = 0 ✅. (−2)² − 7(−2) − 18 = 4 + 14 − 18 = 0 ✅. Jod 9 + (−2) = 7 = −b/a ✅. Guna 9 × (−2) = −18 = c/a ✅

Odd coefficient aane par fraction se ghabrao mat: aadha kuch bhi ho, square lekar ek hi common denominator banao aur aage badho.

---

## Part C: Jab roots irrational hon

Ab asli maza. x² + 6x + 2 = 0 ko factorise karne ki koshish karo: 2 ke factor pairs (1, 2) aur (−1, −2) hain, aur unka jod 3 aur −3 hai, 6 nahi. Class 9 ke [factorisation-part5.md](../../../class9/maths/factorisation/factorisation-part5.md) (Part I) ke hisaab se integers mein factorise nahi hota. Par kya equation ka koi root hai hi nahi? Completing the square se dekhte hain.

Decimal likhne ke liye in √ ki **calculator se** nikali hui lagbhag values kaam aayengi:

| √ | √2 | √3 | √5 | √6 | √7 | √10 |
|---|---|---|---|---|---|---|
| Lagbhag value | 1.414 | 1.732 | 2.236 | 2.449 | 2.646 | 3.162 |

### Example 4: x² + 6x + 2 = 0

- Constant bhejo: x² + 6x = −2
- Aadha 3, square 9. Dono taraf 9 jodo: x² + 6x + 9 = −2 + 9
- Perfect square: (x + 3)² = 7
- Square root: x + 3 = √7 ya x + 3 = −√7
- **x = −3 + √7 ya x = −3 − √7**

√7 irrational hai ([real-numbers-part4.md](../real-numbers/real-numbers-part4.md) mein isi ka proof tha), isliye ye roots bhi irrational hain. Ye roots **surd roop** mein poore aur sahi hain. Decimal chahiye to √7 ≈ 2.646 lekar: −3 + 2.646 = −0.354 ≈ **−0.35** aur −3 − 2.646 = −5.646 ≈ **−5.65**.

**Jaanch:** x = −3 + √7 rakho. x² = 9 − 6√7 + 7 = 16 − 6√7, 6x = −18 + 6√7, to x² + 6x + 2 = 16 − 6√7 − 18 + 6√7 + 2 = 0 ✅. Dusre root ke liye √7 ka sign ulta karo, wahi hisaab ✅. Jod (−3 + √7) + (−3 − √7) = −6 = −b/a ✅. Guna (−3 + √7)(−3 − √7) = 9 − 7 = 2 = c/a ✅

### Example 5: x² − 10x + 15 = 0

- Constant bhejo: x² − 10x = −15
- Aadha −5, square 25. Dono taraf 25 jodo: x² − 10x + 25 = −15 + 25
- Perfect square: (x − 5)² = 10
- **x = 5 + √10 ya x = 5 − √10**

Decimal (√10 ≈ 3.162): 5 + 3.162 = 8.162 ≈ **8.16** aur 5 − 3.162 = 1.838 ≈ **1.84**.

**Jaanch:** x = 5 + √10: x² = 25 + 10√10 + 10 = 35 + 10√10, −10x = −50 − 10√10, to x² − 10x + 15 = 35 − 50 + 15 + (10√10 − 10√10) = 0 ✅. Jod (5 + √10) + (5 − √10) = 10 = −b/a ✅. Guna 25 − 10 = 15 = c/a ✅

### Example 6: x² + 3x + 1 = 0 (fraction aur irrational ek saath)

- Constant bhejo: x² + 3x = −1
- Aadha 3/2, square 9/4. Dono taraf jodo: x² + 3x + 9/4 = −1 + 9/4
- −1 = −4/4, to daayen taraf 5/4. Perfect square: (x + 3/2)² = 5/4
- Square root: x + 3/2 = ±√5/2, kyunki √(5/4) = √5/√4 = √5/2
- x = −3/2 + √5/2 = (−3 + √5)/2 ya x = (−3 − √5)/2

Decimal (√5 ≈ 2.236): (−3 + 2.236)/2 = −0.382 ≈ **−0.38** aur (−3 − 2.236)/2 = −2.618 ≈ **−2.62**.

**Jaanch:** x = (−3 + √5)/2: x² = (9 − 6√5 + 5)/4 = (14 − 6√5)/4, 3x = (−9 + 3√5)/2 = (−18 + 6√5)/4, aur 1 = 4/4. Teeno jodo: (14 − 6√5 − 18 + 6√5 + 4)/4 = 0 ✅. Jod −3 = −b/a ✅. Guna (9 − 5)/4 = 1 = c/a ✅

**Dhyan do:** factorisation har baar kaam nahi karti, par completing the square sirf do cheezein maangti hai: aadha lo aur square jodo. Jodi dhundhne ki "kismat" ki zaroorat nahi.

---

## Part D: Jab x² ke aage 1 na ho

Completing the square tabhi seedha chalta hai jab x² ka coefficient 1 ho (identity (x + h)² = x² + ... mein x² ka coefficient 1 hai). Isliye **Kadam 1: poori equation ko a se divide karo.** Ye barabari ko nahi bigaadta, kyunki dono taraf ek hi non-zero number se divide kar rahe ho.

### Example 7: 3x² − 8x + 4 = 0

- 3 se divide karo: x² − (8/3)x + 4/3 = 0
- Constant bhejo: x² − (8/3)x = −4/3
- Aadha: −4/3. Square: 16/9. Dono taraf jodo: x² − (8/3)x + 16/9 = −4/3 + 16/9
- −4/3 = −12/9, to daayen taraf 4/9. Perfect square: (x − 4/3)² = 4/9
- Square root: x − 4/3 = 2/3 ya x − 4/3 = −2/3
- **x = 2 ya x = 2/3**

**Jaanch:** 3(2)² − 8(2) + 4 = 12 − 16 + 4 = 0 ✅. 3(2/3)² − 8(2/3) + 4 = 4/3 − 16/3 + 12/3 = 0 ✅. Jod 2 + 2/3 = 8/3 = −b/a ✅. Guna 2 × 2/3 = 4/3 = c/a ✅

### Example 8: 2x² + 8x + 3 = 0

- 2 se divide karo: x² + 4x + 3/2 = 0
- Constant bhejo: x² + 4x = −3/2
- Aadha 2, square 4. Dono taraf jodo: x² + 4x + 4 = −3/2 + 4
- Daayen taraf −3/2 + 8/2 = 5/2. Perfect square: (x + 2)² = 5/2
- Square root: x + 2 = ±√(5/2). √(5/2) = √5/√2 hai. Ise √2 se upar-neeche guna karke rationalise karo ([number-systems-part5.md](../../../class9/maths/number-systems/number-systems-part5.md)): (√5 × √2)/(√2 × √2) = √10/2
- x = −2 ± √10/2 = **(−4 ± √10)/2**

Decimal (√10 ≈ 3.162): (−4 + 3.162)/2 = −0.419 ≈ **−0.42** aur (−4 − 3.162)/2 = −3.581 ≈ **−3.58**.

**Jaanch:** x = −2 + √10/2: x² = 4 − 2√10 + 10/4 = 13/2 − 2√10. Phir 2x² = 13 − 4√10, 8x = −16 + 4√10, aur +3. Jodo: 13 − 16 + 3 + (−4√10 + 4√10) = 0 ✅. Jod −4 = −b/a (−8/2) ✅. Guna (16 − 10)/4 = 3/2 = c/a ✅

### Example 9: 4x² − 12x + 7 = 0

- 4 se divide karo: x² − 3x + 7/4 = 0, to x² − 3x = −7/4
- Aadha −3/2, square 9/4. Dono taraf jodo: x² − 3x + 9/4 = −7/4 + 9/4 = 2/4 = 1/2
- Perfect square: (x − 3/2)² = 1/2
- Square root: x − 3/2 = ±√(1/2) = ±1/√2 = ±√2/2
- x = 3/2 ± √2/2 = **(3 ± √2)/2**

Decimal (√2 ≈ 1.414): (3 + 1.414)/2 = 2.207 ≈ **2.21** aur (3 − 1.414)/2 = 0.793 ≈ **0.79**.

**Jaanch:** jod (3 + √2)/2 + (3 − √2)/2 = 3 = −b/a (12/4) ✅. Guna (9 − 2)/4 = 7/4 = c/a ✅. Ek root seedha rakh kar bhi: x = (3 + √2)/2, to x² = (9 + 6√2 + 2)/4 = (11 + 6√2)/4, aur 4x² = 11 + 6√2. 12x = 18 + 6√2. 4x² − 12x + 7 = 11 + 6√2 − 18 − 6√2 + 7 = 0 ✅

---

## Part E: Jab daayen taraf negative number aaye

### Example 10: x² + 6x + 13 = 0

- Constant bhejo: x² + 6x = −13
- Aadha 3, square 9. Dono taraf jodo: x² + 6x + 9 = −13 + 9
- Perfect square: (x + 3)² = −4

Yahan ruk jao. Kisi bhi real number ka square 0 ya positive hota hai, kabhi negative nahi (ye har real number ke liye sach hai: (+3)² = 9 aur (−3)² = 9, dono positive). To (x + 3)² = −4 ka koi real x hai hi nahi. **Is equation ke real roots nahi hain.** (Aage ki class mein ek naya number-system aayega, complex numbers, jisme isse bhi roots milte hain; abhi ke liye "real roots nahi" kaafi hai.)

**Jaanch (story ke bajaye):** x² + 6x + 13 = (x + 3)² + 4. Isme (x + 3)² ≥ 0, to poora expression kam se kam 4 hai, kabhi 0 nahi. Parabola y = x² + 6x + 13 ka sabse neecha point (−3, 4) hai: graph x-axis ke upar hi upar chalta hai, aur x-axis ko kabhi nahi chhoota ✅ ([polynomials.md](../polynomials/polynomials.md) Part C ka p(x) = x² + 4 isi tarah x-axis se door thi).

### Daayen taraf ka number aur roots: ek table

Perfect-square roop (x + h)² = k mein sab kuch k par tika hai.

| k kaisa hai | Square root | Roots |
|---|---|---|
| k positive | x + h = ±√k, do alag values | Do alag real roots |
| k = 0 | x + h = 0 | Ek hi root (do baar) |
| k negative | koi real number nahi | Real roots nahi |

Ye teen haalat bilkul wahi hain jo Chapter 2 mein parabola ne dikhaye the: do jagah kaatna, ek jagah chhoona, kabhi na milna. Topic 5 mein hum is k ko hi pehle se pehchan lenge, bina poora hal kiye.

---

## Part F: Factorisation se tulna

| | Factorisation | Completing the square |
|---|---|---|
| Kya chahiye | Sahi jodi, jiska guna aur jod mile | Sirf aadha coefficient aur uska square |
| Kab fail | Jab roots irrational hon: jodi milti hi nahi | Kabhi fail nahi hota (jo real roots hain, wo mil jaate hain) |
| Kaun sa jawab | Rational roots ke liye hi | Rational, irrational dono, aur "real roots nahi" ka faisla |
| Mehnat | Chhote numbers mein tez | Har baar ek jaisi recipe |

**Kyun kabhi fail nahi?** Kyunki Kadam 3 mein jo number hum jodte hain wo hamesha mil jaata hai: (aadha coefficient)². Baayen taraf perfect square banna pakka hai. Phir bacha hua sawaal sirf "daayen taraf ka number kya hai" hai, aur uska sign (Part E) sab kuch tay kar deta hai. Is topic ka seedha sabak: jis equation par factorisation ne haath khade kar diye, usi par ye tareeka chalta rehta hai. Aur is tareeke mein jab x² + bx + c ki jagah a, b, c letters rakhenge, to ek hi formula nikalega: Topic 4.

---

## Aam galtiyan (bachke rehna)

**Galti 1: (aadha)² sirf ek taraf jodna**

Equation: x² + 12x − 28 = 0, yaani x² + 12x = 28. Ek bacche ne baayen taraf 36 jod kar perfect square bana diya, par daayen taraf wahi 28 rehne diya:

(x + 6)² = 28, to x = −6 ± √28.

Check karo. x = −6 + √28 rakho. (x + 6)² = 28 hai, to x² + 12x = (x + 6)² − 36 = 28 − 36 = **−8**, jabki equation ke hisaab se x² + 12x = 28 hona chahiye tha. Dono alag hain, to ye x equation ka root nahi hai. (Ek taraf 36 jodne se asli mein equation x² + 12x + 8 = 0 ban gayi: bilkul doosri equation.)

Sahi: dono taraf 36 jodo. x² + 12x + 36 = 28 + 36, yaani (x + 6)² = 64. x + 6 = ±8, to **x = 2 ya x = −14**.

**Jaanch:** 2² + 12(2) − 28 = 4 + 24 − 28 = 0 ✅. (−14)² + 12(−14) − 28 = 196 − 168 − 28 = 0 ✅. Jod −12 = −b/a ✅. Guna −28 = c/a ✅

**Galti 2: a ≠ 1 hone par bina divide kiye (aadha)² jodna**

Equation: 3x² + 18x − 21 = 0, yaani 3x² + 18x = 21. Ek bacche ne socha: "x ka coefficient 18 hai, aadha 9, square 81. Dono taraf 81 jodta hoon: 3x² + 18x + 81 = 21 + 81, aur baayen taraf (x + 9)² ban gaya." To usne likha (x + 9)² = 102, x = −9 ± √102.

Check karo. (x + 9)² = x² + 18x + 81, jisme x² ka coefficient **1** hai, 3 nahi. Baayen taraf 3x² + 18x + 81 hai, jo (x + 9)² nahi hai: x = 1 rakho to 3 + 18 + 81 = 102, aur (1 + 9)² = 100, dono alag. Seedha bhi dekho: x = −9 + √102 ≈ 1.10 par 3x² + 18x − 21 ≈ 3(1.21) + 19.79 − 21 ≈ 2.4, jo 0 nahi. Yaani ye x equation ka root hi nahi.

Sahi: pehle **poori equation ko 3 se divide karo** (Part D): x² + 6x − 7 = 0, to x² + 6x = 7. Ab aadha 3, square 9: x² + 6x + 9 = 16, yaani (x + 3)² = 16. x + 3 = ±4, to **x = 1 ya x = −7**.

**Jaanch:** 3(1)² + 18(1) − 21 = 0 ✅. 3(−7)² + 18(−7) − 21 = 147 − 126 − 21 = 0 ✅. Jod 1 + (−7) = −6 = −18/3 = −b/a ✅. Guna 1 × (−7) = −7 = −21/3 = c/a ✅.

---

## Quick Recap

- **Completing the square:** adhure expression x² + bx mein **(b/2)²** jodo, to wo **(x + b/2)²** ban jaata hai. Tasveer mein ye khaali kona bharna hai.
- Tareeka: (1) a se divide karo, (2) constant doosri taraf bhejo, (3) **dono taraf** (aadha coefficient)² jodo, (4) perfect-square roop (x + h)² = k, (5) **x + h = ±√k**, (6) x akela karo aur Jaanch.
- **Dono taraf kyun:** equation taraazu hai; ek taraf jodne se wo doosri equation ban jaati hai.
- Jab k perfect square ho (jaise 16, 121/4, 4/9) to roots rational aate hain, factorisation bhi chalti hai. Jab nahi ho, to roots irrational aate hain (3 ± √7 jaise), aur surd roop sahi hai; decimal ke liye √ ki calculator se lagbhag value (√2 ≈ 1.414, √3 ≈ 1.732, √5 ≈ 2.236, √6 ≈ 2.449, √7 ≈ 2.646, √10 ≈ 3.162).
- **k positive:** do roots. **k = 0:** ek root. **k negative:** real roots nahi (aage ki class mein complex numbers).
- Jaanch hamesha: roots ka jod = −b/a, guna = c/a, ya direct substitute.
- Galtiyan: (aadha)² sirf ek taraf jodna, aur a ≠ 1 par pehle divide kiye bina (aadha)² jodna. (√ lete waqt ± na bhoolna: Topic 1 mein dekha tha.)

---

## Practice Questions

1. For each expression, say what number must be added to make it a perfect square, and write the perfect square: (a) x² + 24x, (b) x² − 13x, (c) x² + (4/5)x, (d) x² − (9/2)x.

2. Solve by completing the square: x² + 22x + 96 = 0.

3. Solve by completing the square: x² − 16x + 48 = 0. Then factorise it and confirm that you get the same roots.

4. Solve by completing the square: x² − 5x − 36 = 0.

5. Solve by completing the square: x² + 11x + 24 = 0.

6. Solve by completing the square and give each root in surd form and to 2 decimal places (use √7 ≈ 2.646 and √10 ≈ 3.162): (a) x² + 4x − 3 = 0 (b) x² − 8x + 6 = 0.

7. Solve by completing the square and give each root in surd form and to 2 decimal places (use √5 ≈ 2.236): (a) x² + 2x − 4 = 0 (b) x² + 7x + 11 = 0.

8. First divide by the coefficient of x², then complete the square: (a) 2x² − 3x − 20 = 0 (b) 5x² − 9x + 4 = 0.

9. Solve and give each root in surd form and to 2 decimal places (use √6 ≈ 2.449 and √3 ≈ 1.732): (a) 2x² + 4x − 1 = 0 (b) 4x² − 8x + 1 = 0.

10. Try to solve x² − 8x + 19 = 0 by completing the square. What do you find, and what does it say about the graph of y = x² − 8x + 19?

11. A student solves x² + 26x + 105 = 0 as follows: "x² + 26x = −105, so x² + 26x + 169 = 64, so (x + 13)² = 64, so x + 13 = 8, so x = −5." Find the mistake, give all the roots and check them.

12. A rectangular courtyard is 5 m longer than it is wide, and its area is 126 m². Let the width be x metres, form an equation, solve it by completing the square, and do the story check.

13. Mistri uncle lays a floor of x × x tiles and a strip 4 tiles wide along two adjacent sides, leaving the corner square empty. Altogether 105 tiles are used. Write the equation, say how many tiles the missing corner needs, and find x.

14. State True or False, with a reason: (a) x² + 9x + 81/4 is a perfect square. (b) x² + 30x + 30 is a perfect square. (c) Completing the square works only for equations that factorise. (d) (x − 4)² = −16 has two real solutions. (e) To complete the square, it is enough to add (half of the x-coefficient)² to the left side alone.

### Answers

1. Aadha coefficient lo, phir uska square.
   (a) Aadha 12, square **144**. x² + 24x + 144 = **(x + 12)²**. Jaanch: (x + 12)² = x² + 24x + 144 ✅
   (b) Aadha −13/2, square **169/4**. x² − 13x + 169/4 = **(x − 13/2)²**. Jaanch: x² − 13x + 169/4 ✅
   (c) Aadha 2/5, square **4/25**. x² + (4/5)x + 4/25 = **(x + 2/5)²**. Jaanch: 2 × (2/5) = 4/5 ✅
   (d) Aadha −9/4, square **81/16**. x² − (9/2)x + 81/16 = **(x − 9/4)²**. Jaanch: 2 × (9/4) = 9/2 ✅

2. x² + 22x = −96. Aadha 11, square 121. x² + 22x + 121 = −96 + 121, yaani (x + 11)² = 25. x + 11 = ±5, to x = −6 ya x = −16.
   Jaanch: (−6)² + 22(−6) + 96 = 36 − 132 + 96 = 0 ✅. (−16)² + 22(−16) + 96 = 256 − 352 + 96 = 0 ✅. Jod −22 = −b/a ✅. Guna 96 = c/a ✅

3. x² − 16x = −48. Aadha −8, square 64. (x − 8)² = −48 + 64 = 16. x − 8 = ±4, to **x = 12 ya x = 4**.
   Factorisation: x² − 16x + 48 = (x − 4)(x − 12), roots 4 aur 12: wahi.
   Jaanch: 144 − 192 + 48 = 0 ✅. 16 − 64 + 48 = 0 ✅. Jod 16 ✅. Guna 48 ✅

4. x² − 5x = 36. Aadha −5/2, square 25/4. (x − 5/2)² = 36 + 25/4 = 144/4 + 25/4 = 169/4. x − 5/2 = ±13/2, to x = 5/2 + 13/2 = **9** ya x = 5/2 − 13/2 = **−4**.
   Jaanch: 81 − 45 − 36 = 0 ✅. 16 + 20 − 36 = 0 ✅. Jod 5 = −b/a ✅. Guna −36 = c/a ✅

5. x² + 11x = −24. Aadha 11/2, square 121/4. (x + 11/2)² = −24 + 121/4 = −96/4 + 121/4 = 25/4. x + 11/2 = ±5/2, to x = −11/2 + 5/2 = **−3** ya x = −11/2 − 5/2 = **−8**.
   Jaanch: 9 − 33 + 24 = 0 ✅. 64 − 88 + 24 = 0 ✅. Jod −11 ✅. Guna 24 ✅

6. (a) x² + 4x = 3. Aadha 2, square 4. (x + 2)² = 7. x = **−2 ± √7**. Decimal: −2 + 2.646 = 0.646 ≈ **0.65** aur −2 − 2.646 = −4.646 ≈ **−4.65**.
   Jaanch: jod −4 = −b/a ✅. Guna 4 − 7 = −3 = c/a ✅. Seedha: x = −2 + √7 se x² = 11 − 4√7, 4x = −8 + 4√7, to x² + 4x − 3 = 11 − 8 − 3 = 0 ✅
   (b) x² − 8x = −6. Aadha −4, square 16. (x − 4)² = 10. x = **4 ± √10**. Decimal: 4 + 3.162 = 7.162 ≈ **7.16** aur 4 − 3.162 = 0.838 ≈ **0.84**.
   Jaanch: jod 8 = −b/a ✅. Guna 16 − 10 = 6 = c/a ✅. Seedha: x = 4 + √10 se x² = 26 + 8√10, −8x = −32 − 8√10, to x² − 8x + 6 = 26 − 32 + 6 = 0 ✅

7. (a) x² + 2x = 4. Aadha 1, square 1. (x + 1)² = 5. x = **−1 ± √5**. Decimal: −1 + 2.236 = 1.236 ≈ **1.24** aur −1 − 2.236 = −3.236 ≈ **−3.24**.
   Jaanch: jod −2 = −b/a ✅. Guna 1 − 5 = −4 = c/a ✅
   (b) x² + 7x = −11. Aadha 7/2, square 49/4. (x + 7/2)² = −44/4 + 49/4 = 5/4. x + 7/2 = ±√5/2, to x = **(−7 ± √5)/2**. Decimal: (−7 + 2.236)/2 = −2.382 ≈ **−2.38** aur (−7 − 2.236)/2 = −4.618 ≈ **−4.62**.
   Jaanch: jod −7 = −b/a ✅. Guna (49 − 5)/4 = 11 = c/a ✅

8. (a) 2 se divide karo: x² − (3/2)x − 10 = 0, to x² − (3/2)x = 10. Aadha −3/4, square 9/16. (x − 3/4)² = 10 + 9/16 = 160/16 + 9/16 = 169/16. x − 3/4 = ±13/4, to x = 3/4 + 13/4 = **4** ya x = 3/4 − 13/4 = **−5/2**.
   Jaanch: 2(16) − 3(4) − 20 = 32 − 12 − 20 = 0 ✅. 2(25/4) + 3(5/2) − 20 = 25/2 + 15/2 − 20 = 0 ✅. Jod 4 − 5/2 = 3/2 = −b/a ✅. Guna 4 × (−5/2) = −10 = c/a ✅
   (b) 5 se divide karo: x² − (9/5)x + 4/5 = 0, to x² − (9/5)x = −4/5. Aadha −9/10, square 81/100. (x − 9/10)² = −80/100 + 81/100 = 1/100. x − 9/10 = ±1/10, to **x = 1 ya x = 4/5**.
   Jaanch: 5 − 9 + 4 = 0 ✅. 5(16/25) − 9(4/5) + 4 = 16/5 − 36/5 + 20/5 = 0 ✅. Jod 9/5 = −b/a ✅. Guna 4/5 = c/a ✅

9. (a) 2 se divide karo: x² + 2x − 1/2 = 0, to x² + 2x = 1/2. Aadha 1, square 1. (x + 1)² = 3/2. x + 1 = ±√(3/2) = ±√3/√2 = ±√6/2. x = −1 ± √6/2 = **(−2 ± √6)/2**. Decimal: (−2 + 2.449)/2 = 0.2245 ≈ **0.22** aur (−2 − 2.449)/2 = −2.2245 ≈ **−2.22**.
   Jaanch: jod −2 = −b/a ✅. Guna (4 − 6)/4 = −1/2 = c/a ✅
   (b) 4 se divide karo: x² − 2x + 1/4 = 0, to x² − 2x = −1/4. Aadha −1, square 1. (x − 1)² = 3/4. x − 1 = ±√3/2. x = **(2 ± √3)/2**. Decimal: (2 + 1.732)/2 = 1.866 ≈ **1.87** aur (2 − 1.732)/2 = 0.134 ≈ **0.13**.
   Jaanch: jod 2 = −b/a (8/4) ✅. Guna (4 − 3)/4 = 1/4 = c/a ✅

10. x² − 8x = −19. Aadha −4, square 16. (x − 4)² = −19 + 16 = −3. Square negative nahi ho sakta, to **real roots nahi hain**.
    Graph: x² − 8x + 19 = (x − 4)² + 3 ≥ 3, to parabola ka sabse neecha point (4, 3) hai, x-axis ke upar. Graph x-axis ko kabhi nahi chhoota.
    Jaanch: x = 4 par (x − 4)² + 3 = 3, aur kisi bhi x par kam se kam 3, kabhi 0 nahi ✅

11. Galti: (x + 13)² = 64 ke do square root hain, +8 aur −8. Bacche ne sirf +8 liya. x + 13 = 8, to x = −5. x + 13 = −8, to x = −21.
    **Roots −5 aur −21.**
    Jaanch: 25 − 130 + 105 = 0 ✅. 441 − 546 + 105 = 0 ✅. Jod −26 = −b/a ✅. Guna 105 = c/a ✅

12. Width x m, to length (x + 5) m. Area: x(x + 5) = 126, yaani x² + 5x = 126.
    Aadha 5/2, square 25/4. (x + 5/2)² = 126 + 25/4 = 504/4 + 25/4 = 529/4. x + 5/2 = ±23/2. x = −5/2 + 23/2 = **9** ya x = −5/2 − 23/2 = **−14**.
    Story check: width negative nahi ho sakti, to −14 reject. Width **9 m**, length **14 m**.
    Jaanch: 9 × 14 = 126 ✅. Length width se 5 zyada: 14 − 9 = 5 ✅. Roots ka jod 9 + (−14) = −5 = −b/a ✅

13. Strip 4 tile chaudi, to do strips ke tiles 4x + 4x = 8x. Equation: x² + 8x = 105.
    Aadha 4, to missing corner 4 × 4 = **16 tiles**. (x + 4)² = 105 + 16 = 121. x + 4 = ±11, to x = 7 ya x = −15. Tiles ginti negative nahi hoti, to **x = 7**.
    Jaanch: 7² + 8(7) = 49 + 56 = 105 ✅. Bada square (7 + 4)² = 121 = 105 + 16 ✅. Roots ka jod 7 + (−15) = −8 = −b/a ✅

14. (a) **True** ✅. Aadha 9/2, square 81/4: x² + 9x + 81/4 = (x + 9/2)².
    (b) **False** ❌. Aadha 15 hai, to perfect square banne ke liye constant 225 chahiye: x² + 30x + 225 = (x + 15)². Yahan constant 30 hai. Jaanch: (x + 15)² kholne par constant 225 aata hai, 30 nahi.
    (c) **False** ❌. Ye tareeka factorisation se alag hai aur har quadratic par chalta hai, irrational roots wali par bhi (jaise Part C mein).
    (d) **False** ❌. Square kabhi negative nahi hota, to (x − 4)² = −16 ka koi real x nahi.
    (e) **False** ❌. Equation taraazu hai: ek taraf jodne se wo doosri equation ban jaati hai (Aam galti 1). Dono taraf jodna hi sahi hai.

---

Shabaash! Ab tum kisi bhi quadratic equation ke saamne ghabraoge nahi: jodi mile to bhi theek, na mile to bhi, aadha lo, square jodo aur square root lo. Paavan ki tarah tumne bhi adhure square ka khaali kona bharna seekh liya hai, aur aadha coefficient ka square hi tumhara jaadui tukda hai.

**Aage kya?** Completing the square achha hai, par har baar wahi lambi recipe likhna thaka deta hai. Topic 4 mein hum **ax² + bx + c = 0** par ek hi baar ye saari recipe letters ke saath chalayenge, aur ek aisa formula milega jo har quadratic equation ke roots seedha bata dega. Wahan [Topic 4](quadratic-equations-part4.md) mein milte hain.
