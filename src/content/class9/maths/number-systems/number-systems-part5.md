# Chapter: Number Systems (Part 5)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [number-systems-part4.md](number-systems-part4.md) se aage chalti hai.** (Topic 1 [number-systems.md](number-systems.md) mein hai.)
> **Topics covered in this file:**
> 5. Rationalisation (Denominator se Root Hatana)

---

# Topic 5: Rationalisation (Denominator se Root Hatana)

Topic 4 mein humne real numbers ko jodna, ghatana, guna karna seekha, surds ko simple karna seekha (jaise √50 = 5√2), aur kuch roots wali identities dekhin. Unme se ek identity is topic ki **chaabi** hai:

> **(√a + √b)(√a − √b) = a − b** aur **(a + √b)(a − √b) = a² − b**

Dhyan do, left side mein roots hain, par right side mein **root gayab** ho gaya. Bas isi jaadu se hum kisi fraction ke neeche (denominator) se root hata denge. Isi kaam ko **rationalisation** kehte hain.

---

## Dadaji ki long division ki kahani

Meenu ke Dadaji school mein the, tab calculator nahi hote the. Ek din unke maths teacher ne board par likha:

**1/√2 ki value nikalo.**

Sabko pata tha ki √2 ≈ 1.41421. To sawaal ban gaya:

**1 ÷ 1.41421 = ?**

Ab socho, 1 ko 1.41421 se haath se divide karna. Pehle decimal hatao, phir 100000 ko 141421 se divide karo, phir har kadam par lamba guna-bhaag... Poori class 10 minute tak ulajhi rahi.

Tabhi Dadaji ke ek dost ne ek chalaaki ki. Usne fraction ke upar aur neeche dono ko √2 se guna kar diya:

1/√2 = (1 × √2)/(√2 × √2) = √2/2

Ab sawaal ban gaya: **1.41421 ÷ 2**. Ye to munh-zubaani ho jata hai: **0.707105**.

Value wahi rahi, par kaam 10 minute se 10 second ka ho gaya. Kyunki ab **neeche root nahi tha**, sirf ek seedha number 2 tha.

Aaj calculator hai, par ye trick ab bhi zaroori hai. Kyunki:
- Answer saaf aur simple dikhta hai (√2/2 jaisa, 1/√2 jaisa nahi).
- Do answers ko compare karna aasan ho jata hai.
- Aage algebra mein bahut jagah yahi kadam kaam aata hai.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Rationalise karna** | Denominator ko root-free (rational) bana dena, bina value badle | 1/√2 → √2/2 |
| **Rationalising factor** | Wo cheez jisse upar-neeche dono ko guna karte hain, taaki neeche ka root hat jaye | 1/√2 ka factor √2 hai |
| **Conjugate (jodidaar)** | a + √b ka conjugate a − √b hai. Sirf beech ka sign badalta hai | 2 + √3 ka conjugate 2 − √3 |
| **Conjugate pair** | Aisa jodha jinka guna karne par root gayab ho jata hai | (2 + √3)(2 − √3) = 4 − 3 = 1 |

---

## Part A: Rationalise karna kya hai, aur value kyun nahi badalti

Kisi fraction ke upar aur neeche ko **ek hi number** se guna karo, to value nahi badalti. Kyunki asal mein hum us fraction ko **1** se guna kar rahe hote hain.

Jaise: 3/4 = (3 × 5)/(4 × 5) = 15/20. Dono barabar hain.

Rationalisation mein bhi yahi hota hai. Hum aisa number chunte hain (rationalising factor), jisse guna karne par neeche ka root hat jaye:

1/√2 = (1/√2) × (√2/√2) = √2/2

Yahan √2/√2 = 1 hai. Isliye value wahi hai, bas roop badla hai.

> **Golden rule:** Jo neeche se guna karo, wahi **upar se bhi** guna karo.

### Rationalising factor kaise chunein?

| Denominator ka roop | Rationalising factor | Kyunki |
|---|---|---|
| √a | √a | √a × √a = a |
| a + √b | a − √b | (a + √b)(a − √b) = a² − b |
| a − √b | a + √b | (a − √b)(a + √b) = a² − b |
| √a + √b | √a − √b | (√a + √b)(√a − √b) = a − b |
| √a − √b | √a + √b | (√a − √b)(√a + √b) = a − b |

Seedha niyam: **denominator mein do terms hon to beech ka sign ulta karo.** Wahi conjugate hai, wahi factor hai.

---

## Part B: Type 1, sirf ek root neeche (1/√a aur k/√a)

Neeche sirf √a ho, to upar-neeche dono ko **√a** se guna karo.

**Example 1:** 1/√2 ko rationalise karo.

1/√2 = (1 × √2)/(√2 × √2) = **√2/2**

Jaanch: 1/√2 = 1/1.41421 ≈ 0.7071, aur √2/2 = 1.41421/2 ≈ 0.7071 ✅

**Example 2:** 6/√3 ko rationalise karo.

6/√3 = (6 × √3)/(√3 × √3) = 6√3/3 = **2√3**

Jaanch: 6/√3 = 6/1.732 ≈ 3.464, aur 2√3 = 2 × 1.732 = 3.464 ✅

**Example 3:** 3/(2√5) ko rationalise karo.

Yahan neeche 2√5 hai. Sirf √5 se guna karna kaafi hai (2 to pehle se rational hai).

3/(2√5) = (3 × √5)/(2√5 × √5) = 3√5/(2 × 5) = **3√5/10**

Jaanch: 3/(2 × 2.236) = 3/4.472 ≈ 0.6708, aur 3 × 2.236/10 = 0.6708 ✅

---

## Part C: Type 2, neeche "number ± root" (1/(a ± √b))

Ab neeche do terms hain, jaise 2 + √3. Agar hum sirf √3 se guna karein, to root nahi hatega:

(2 + √3) × √3 = 2√3 + 3. Root abhi bhi hai!

Isliye yahan **conjugate** se guna karte hain. Topic 4 ki identity yaad karo: (a + √b)(a − √b) = a² − b.

**Example 4:** 1/(2 + √3) ko rationalise karo.

Conjugate: 2 − √3

1/(2 + √3) = (1 × (2 − √3)) / ((2 + √3)(2 − √3))

Neeche: (2)² − (√3)² = 4 − 3 = 1

= (2 − √3)/1 = **2 − √3**

Jaanch: 1/(2 + 1.732) = 1/3.732 ≈ 0.268, aur 2 − 1.732 = 0.268 ✅

**Example 5:** 1/(5 − √3) ko rationalise karo.

Conjugate: 5 + √3

Neeche: (5)² − (√3)² = 25 − 3 = 22

1/(5 − √3) = **(5 + √3)/22**

Jaanch: 1/(5 − 1.732) = 1/3.268 ≈ 0.306, aur (5 + 1.732)/22 = 6.732/22 ≈ 0.306 ✅

**Example 6:** 1/(3 + 2√2) ko rationalise karo.

Conjugate: 3 − 2√2

Neeche: (3)² − (2√2)² = 9 − 4 × 2 = 9 − 8 = 1

1/(3 + 2√2) = **3 − 2√2**

Dhyan do, (2√2)² = 4 × 2 = 8 hota hai, 2 × 2 = 4 nahi. Number aur root dono ka square karo.

Jaanch: 1/(3 + 2.828) = 1/5.828 ≈ 0.1716, aur 3 − 2.828 = 0.172 ✅

---

## Part D: Type 3, neeche "root ± root" (1/(√a ± √b))

Ab neeche dono terms root wale hain. Phir bhi tarika wahi: **conjugate se guna karo.** Identity: (√a + √b)(√a − √b) = a − b.

**Example 7:** 1/(√7 − √6) ko rationalise karo.

Conjugate: √7 + √6

Neeche: (√7)² − (√6)² = 7 − 6 = 1

1/(√7 − √6) = **√7 + √6**

Jaanch: √7 ≈ 2.6458, √6 ≈ 2.4495. 1/(2.6458 − 2.4495) = 1/0.1963 ≈ 5.094, aur 2.6458 + 2.4495 = 5.095 ✅

**Example 8:** 1/(√5 + √2) ko rationalise karo.

Conjugate: √5 − √2

Neeche: 5 − 2 = 3

1/(√5 + √2) = **(√5 − √2)/3**

Jaanch: 1/(2.236 + 1.414) = 1/3.650 ≈ 0.274, aur (2.236 − 1.414)/3 = 0.822/3 ≈ 0.274 ✅

**Example 9:** 1/(√3 − 1) ko rationalise karo.

Yahan 1 bhi ek "number" hai (1 = √1). Conjugate: √3 + 1

Neeche: 3 − 1 = 2

1/(√3 − 1) = **(√3 + 1)/2**

---

## Part E: Type 4, upar bhi root ho, aur combinations

Upar (numerator) mein bhi root ho, to koi farak nahi padta. Tarika wahi: neeche ka conjugate dhundo, aur upar-neeche dono ko usse guna karo. Bas upar ka guna thoda lamba hoga.

**Example 10:** (√3 + √2)/(√3 − √2) ko simplify karo.

Conjugate: √3 + √2

Upar: (√3 + √2)(√3 + √2) = (√3 + √2)² = 3 + 2 + 2√6 = 5 + 2√6
Neeche: 3 − 2 = 1

= **5 + 2√6**

(Yahan (√a + √b)² = a + b + 2√ab use kiya. Topic 4 ki identities mein ye bhi tha.)

Jaanch: (1.732 + 1.414)/(1.732 − 1.414) = 3.146/0.318 ≈ 9.89, aur 5 + 2 × 2.449 = 9.898 ✅

**Example 11:** (3 − √5)/(3 + √5) ko simplify karo.

Conjugate: 3 − √5

Upar: (3 − √5)² = 9 + 5 − 6√5 = 14 − 6√5
Neeche: 9 − 5 = 4

= (14 − 6√5)/4 = **(7 − 3√5)/2**

Jaanch: (3 − 2.236)/(3 + 2.236) = 0.764/5.236 ≈ 0.146, aur (7 − 6.708)/2 = 0.146 ✅

**Example 12 (do fractions ka jod/ghatav):** 1/(√3 + √2) − 1/(√3 − √2) ko simplify karo.

Har ek ko alag se rationalise karo:
- 1/(√3 + √2) = (√3 − √2)/(3 − 2) = √3 − √2
- 1/(√3 − √2) = (√3 + √2)/(3 − 2) = √3 + √2

Ab ghatao: (√3 − √2) − (√3 + √2) = **−2√2**

Jaanch: 1/3.146 − 1/0.318 ≈ 0.318 − 3.146 = −2.828, aur −2 × 1.414 = −2.828 ✅

---

## Part F: "a aur b nikalo" wale sawaal

Ye bahut common sawaal hai: ek fraction diya hota hai, aur kaha jata hai ki ise **a + b√c** ke roop mein likho.

**Tarika:** Pehle rationalise karo, phir dono taraf ko milao. Jo bina root wala hissa hai wo **a**, aur √c ke saath wala number **b**.

**Example 13:** Agar (5 + 2√3)/(7 + 4√3) = a + b√3 ho, to a aur b nikalo.

Conjugate: 7 − 4√3

Neeche: (7)² − (4√3)² = 49 − 16 × 3 = 49 − 48 = 1

Upar: (5 + 2√3)(7 − 4√3)
= 5 × 7 − 5 × 4√3 + 2√3 × 7 − 2√3 × 4√3
= 35 − 20√3 + 14√3 − 8 × 3
= 35 − 24 − 6√3
= 11 − 6√3

To: 11 − 6√3 = a + b√3

Dono taraf milao: **a = 11, b = −6**

Jaanch: (5 + 3.464)/(7 + 6.928) = 8.464/13.928 ≈ 0.6077, aur 11 − 6 × 1.732 = 11 − 10.392 = 0.608 ✅

**Example 14:** Agar (√2 + 1)/(√2 − 1) = a + b√2 ho, to a aur b nikalo.

Conjugate: √2 + 1

Upar: (√2 + 1)² = 2 + 1 + 2√2 = 3 + 2√2
Neeche: 2 − 1 = 1

3 + 2√2 = a + b√2, to **a = 3, b = 2**

Dhyan do, b ka sign bhi saath jata hai. Example 13 mein b = −6 tha, +6 nahi.

---

## Part G: Value nikalne wale sawaal

### Jab root ki value di ho

**Example 15:** √2 ≈ 1.414 ho, to 1/√2 ki value nikalo.

Seedha 1 ÷ 1.414 karna lamba hai. Pehle rationalise karo:

1/√2 = √2/2 = 1.414/2 = **0.707**

Dadaji wali kahani yahi thi!

**Example 16:** √3 ≈ 1.732 ho, to 1/(√3 − 1) ki value nikalo.

Part D ke Example 9 se: 1/(√3 − 1) = (√3 + 1)/2

= (1.732 + 1)/2 = 2.732/2 = **1.366**

### x aur 1/x wale sawaal

**Example 17:** Agar x = 2 + √3 ho, to x + 1/x aur x² + 1/x² nikalo.

Pehle 1/x nikalo:
1/x = 1/(2 + √3) = 2 − √3 (Part C ka Example 4)

x + 1/x = (2 + √3) + (2 − √3) = **4**

Ab x² + 1/x² ke liye ek chhoti trick:
(x + 1/x)² = x² + 2 + 1/x²

To x² + 1/x² = (x + 1/x)² − 2 = 4² − 2 = 16 − 2 = **14**

Jaanch: x ≈ 3.732, x² ≈ 13.928. 1/x ≈ 0.268, 1/x² ≈ 0.0718. Jod: 13.928 + 0.072 = 14.000 ✅

---

## Part H: Lambi series jo apne aap kat jaati hai

Kabhi kabhi kai fractions ka jod diya hota hai, aur sab ko rationalise karte hi beech ke terms **ek doosre ko kaat dete hain**. Bas pehla aur aakhri bachte hain.

**Example 18:** 1/(√2 + 1) + 1/(√3 + √2) + 1/(2 + √3) ko simplify karo.

Har term ko rationalise karo (har neeche ka conjugate se guna karne par neeche **1** aata hai, kyunki do lagaataar numbers ka fark 1 hai):

- 1/(√2 + 1) = (√2 − 1)/(2 − 1) = √2 − 1
- 1/(√3 + √2) = (√3 − √2)/(3 − 2) = √3 − √2
- 1/(2 + √3) = (2 − √3)/(4 − 3) = 2 − √3

Ab jodo:

(√2 − 1) + (√3 − √2) + (2 − √3)

√2 aur −√2 kat gaye. √3 aur −√3 kat gaye. Bacha:

= 2 − 1 = **1**

Jaanch: 1/2.414 + 1/3.146 + 1/3.732 ≈ 0.414 + 0.318 + 0.268 = 1.000 ✅

Isse ek seedhi line ki tarah socho: har kadam pichle kadam ko mita deta hai, aur aakhir mein sirf shuruaat aur ant bachta hai.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Sirf neeche guna karna, upar bhool jana**
1/√2 = 1/2 likhna galat hai. Neeche √2 × √2 = 2 kiya, par upar √2 se guna karna bhool gaye. Sahi: √2/2.

**Galti 2: Do terms wale denominator ko sirf root se guna karna**
1/(2 + √3) ko √3 se guna kiya: neeche 2√3 + 3 aaya. Root abhi bhi hai! Do terms ho to **conjugate** (2 − √3) se hi guna karo.

**Galti 3: Conjugate mein galat sign badalna**
2 + √3 ka conjugate −2 + √3 nahi, **2 − √3** hai. Sirf **beech ka sign** badalta hai, pehle term ka nahi.

**Galti 4: (a + √b)(a − √b) = a − b likh dena**
(5 − √3)(5 + √3) = 25 − 3 = 22 hai, 5 − 3 = 2 nahi. Jo number root ke bina hai, uska **square** karna mat bhoolo.

**Galti 5: (2√2)² = 4 likh dena**
(2√2)² = 2² × (√2)² = 4 × 2 = **8**. Number aur root dono ka square hota hai.

**Galti 6: (√a + √b)² = a + b likh dena**
(√3 + √2)² = 3 + 2 + **2√6** = 5 + 2√6. Beech ka 2√ab wala term bhoolna aam galti hai.

**Galti 7: Ye sochna ki rationalise karne se value badal gayi**
1/√2 aur √2/2 **ek hi number** hain (dono ≈ 0.707). Humne sirf roop badla, value nahi.

**Galti 8: "a aur b" mein sign chhod dena**
11 − 6√3 = a + b√3 mein **b = −6** hai. Minus sign b ke saath jata hai.

---

## Quick Recap

- **Rationalise karna** = denominator se root hatana, bina value badle.
- Upar-neeche dono ko **ek hi cheez** (rationalising factor) se guna karo. Ye 1 se guna karne jaisa hai.
- **Neeche sirf √a:** √a se guna karo. 1/√a = √a/a.
- **Neeche do terms (a ± √b ya √a ± √b):** **conjugate** se guna karo (beech ka sign ulta).
- Chaabi wali identities: (a + √b)(a − √b) = a² − b, aur (√a + √b)(√a − √b) = a − b.
- **"a aur b nikalo":** rationalise karo, phir rational hissa = a, root ke saath wala = b (sign ke saath).
- **x + 1/x** wale sawaal mein pehle 1/x rationalise karo. x² + 1/x² = (x + 1/x)² − 2.
- Lambi series mein rationalise karne ke baad beech ke terms kat jaate hain.
- Har baar decimal se **jaanch** kar sakte ho.

---

## Practice Questions

1. Rationalise the denominator:
   (a) 1/√7
   (b) 5/(2√3)
   (c) 1/(3 + √2)
   (d) 1/(√6 − √5)

2. Write the rationalising factor of:
   (a) √11
   (b) 4 − √7
   (c) √3 + √10

3. Simplify: (√5 + √3)/(√5 − √3)

4. If (3 + √2)/(3 − √2) = a + b√2, find the values of a and b.

5. Given √5 ≈ 2.236, find the value of 1/(√5 − 2) correct to three decimal places.

6. If x = 3 + 2√2, find:
   (a) x + 1/x
   (b) x² + 1/x²

7. Simplify: 1/(√5 + √2) + 1/(√5 − √2)

8. Show that: 1/(1 + √2) + 1/(√2 + √3) + 1/(√3 + √4) + … + 1/(√8 + √9) = 2

9. State whether each statement is true or false. Give a reason.
   (a) Rationalising the denominator changes the value of the number.
   (b) The rationalising factor of 2 + √3 is 2 − √3.
   (c) (5 + √3)(5 − √3) = 2

### Answers

1. (a) Upar-neeche √7 se guna karo: **√7/7**
   (b) Sirf √3 se guna karna kaafi hai: 5√3/(2 × 3) = **5√3/6**
   (c) Conjugate 3 − √2. Neeche: 9 − 2 = 7. **(3 − √2)/7**
   Jaanch: 1/(3 + 1.414) = 1/4.414 ≈ 0.2266, aur (3 − 1.414)/7 = 1.586/7 ≈ 0.2266 ✅
   (d) Conjugate √6 + √5. Neeche: 6 − 5 = 1. **√6 + √5**

2. (a) **√11** (kyunki √11 × √11 = 11)
   (b) **4 + √7** (kyunki (4 − √7)(4 + √7) = 16 − 7 = 9)
   (c) **√3 − √10** (ya √10 − √3; dono se root hat jata hai, kyunki guna karne par 3 − 10 = −7 aata hai)

3. Conjugate √5 + √3.
   Upar: (√5 + √3)² = 5 + 3 + 2√15 = 8 + 2√15
   Neeche: 5 − 3 = 2
   (8 + 2√15)/2 = **4 + √15**
   Jaanch: (2.236 + 1.732)/(2.236 − 1.732) = 3.968/0.504 ≈ 7.87, aur 4 + 3.873 = 7.873 ✅

4. Conjugate 3 + √2.
   Upar: (3 + √2)² = 9 + 2 + 6√2 = 11 + 6√2
   Neeche: 9 − 2 = 7
   (11 + 6√2)/7 = 11/7 + (6/7)√2
   **a = 11/7, b = 6/7**

5. Conjugate √5 + 2. Neeche: 5 − 4 = 1. To 1/(√5 − 2) = √5 + 2 = 2.236 + 2 = **4.236**
   (Seedha 1 ÷ 0.236 karna kitna lamba hota, Dadaji wali kahani yaad karo!)

6. Pehle 1/x: 1/(3 + 2√2) = (3 − 2√2)/(9 − 8) = 3 − 2√2
   (a) x + 1/x = (3 + 2√2) + (3 − 2√2) = **6**
   (b) x² + 1/x² = (x + 1/x)² − 2 = 36 − 2 = **34**

7. 1/(√5 + √2) = (√5 − √2)/3, aur 1/(√5 − √2) = (√5 + √2)/3
   Jodo: (√5 − √2 + √5 + √2)/3 = **2√5/3**
   Jaanch: 1/3.650 + 1/0.822 ≈ 0.274 + 1.217 = 1.491, aur 2 × 2.236/3 ≈ 1.491 ✅

8. Har term ka neeche do lagaataar numbers ke roots hain, to har ek rationalise karne par neeche 1 aata hai:
   1/(1 + √2) = √2 − 1
   1/(√2 + √3) = √3 − √2
   1/(√3 + √4) = √4 − √3
   …
   1/(√8 + √9) = √9 − √8
   Jodne par beech ke saare terms kat jaate hain. Bachta hai: √9 − 1 = 3 − 1 = **2** ✅

9. (a) **False** ❌. Hum fraction ko √a/√a (yaani 1) se guna karte hain, isliye value wahi rehti hai. Sirf roop badalta hai.
   (b) **True** ✅. (2 + √3)(2 − √3) = 4 − 3 = 1, root hat jata hai.
   (c) **False** ❌. (5 + √3)(5 − √3) = 25 − 3 = **22**. 5 ka square karna zaroori hai.

---

Rationalisation ek baar haath mein aa gaya, to ye sabse mazedaar tricks mein se ek lagta hai: neeche ka root dekho, conjugate pakdo, guna karo, aur root gayab! Aap kar loge.

**Agle topic mein:** √a ko ek naye roop mein dekhenge, **a^(1/2)**. Yaani power bhi fraction ho sakti hai! Exponents ke purane niyam yaad karke unhe fraction wali powers tak le jayenge.
