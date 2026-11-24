# Chapter: Real Numbers

> **Class:** 10 | **Subject:** Mathematics
> **Ye Class 10 Maths ka pehla chapter hai.** Class 9 ke Number Systems chapter ki aakhri file ([number-systems-part6.md](../../../class9/maths/number-systems/number-systems-part6.md): roots aur exponents) se hum yahan aaye hain. Is chapter mein hum numbers ko aur andar se dekhenge: unka division, unke prime factors, unke decimals.
> **Topics covered in this file:**
> 1. Euclid Ka Division Lemma: Bachi Hui Cheez Ka Hisaab

---

# Topic 1: Euclid Ka Division Lemma: Bachi Hui Cheez Ka Hisaab

Class 9 ke Number Systems chapter mein humne rational aur irrational numbers ko decimals, roots aur exponents ke zariye jaana. Ab Class 10 mein hum wapas sabse purani cheez par aate hain, jo tumne Class 3 ya 4 mein seekhi thi: **division**. Bas ab hum dekhenge ki division mein jo **bachi hui cheez (remainder)** hoti hai, wo kitni kaam ki hai. Isi se do numbers ka HCF nikalne ka ek bahut tez tareeka niklega, jo Euclid ne lagbhag 2300 saal pehle likha tha aur jo aaj bhi computers mein chalta hai.

---

## School bus ki bench aur Amogh ka sawaal

School ki picnic ke liye ek badi bus aayi. Is bus ki har lambi **bench par theek 9 bachche** baithte hain. Teacher ma'am ne gin kar bataya ki aaj **83 bachche** hain.

Amogh ne dimaag mein hisaab lagaya: 9 × 9 = 81. Matlab **9 benches poori bhar gayin**, aur **2 bachche** khade reh gaye. Ma'am ne likha:

83 = 9 × 9 + 2

Amogh ne poochha, "Ma'am, kya aisa ho sakta hai ki bench par jagah na ho aur 9 bachche khade reh jayein?"

Ma'am hans padin. "Agar 9 bachche khade hain to ek aur poori bench ban gayi na! Phir wo khade kahan rahe? Khade rehne wale hamesha **9 se kam** hi hote hain: 0, 1, 2, ... ya zyada se zyada 8."

Amogh ko ye baat bahut pasand aayi: **bacha hua hissa hamesha divisor se chhota hota hai.** Ma'am ne aage kaha, "Ye chhoti si baat bahut badi cheez ki chaabi hai. Isi se tum do bade numbers ka HCF bina factors nikaale nikaal sakte ho." Chalo dekhte hain kaise.

---

## Naye shabd

Class 5 ke division ke shabd (dividend, divisor, quotient, remainder) tum jaante ho. Is topic ke **naye** shabd ye hain:

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Lemma** | Ek chhota sa pakka (proved) result, jo kisi bade result ya tareeke ko banane mein madad karta hai | Euclid ka Division Lemma |
| **Euclid ka Division Lemma** | Kisi bhi do positive integers a aur b ke liye ek hi tareeke se a = bq + r likha ja sakta hai, jahan r ≥ 0 aur r, b se chhota hai | 83 = 9 × 9 + 2 |
| **Algorithm** | Kadam-dar-kadam likha hua tareeka, jise baar-baar dohrane se jawab mil jata hai | Ek recipe jaisa: pehle ye, phir wo, aur jab ye shart aaye tab ruk jao |
| **Euclid ka Division Algorithm** | Do numbers ke HCF ka algorithm: divide karo, divisor aur remainder ko agle step ka pair banao, aur jab remainder 0 aa jaye tab ruk jao | HCF nikalne ki seedhi (ladder) |
| **Coprime numbers** | Do numbers jinka HCF 1 hai (dono khud prime hon, ye zaroori nahi) | 25 aur 32 |
| **Roop (form)** | Kisi number ko ek kaam ke saanche mein likhna, jaise 2q + 1 (odd) ya 3m + 1 | 83 = 2 × 41 + 1, yaani 83 odd roop ka hai |

---

## Class 9 se yaad

Class 9 ke [number-systems-part2.md](../../../class9/maths/number-systems/number-systems-part2.md) ke Part B mein humne dekha tha ki 7 se divide karne par remainder sirf 0, 1, ..., 6 ho sakte hain (7 ya usse bada remainder ho hi nahi sakta). Wahi baat yahan formal ban rahi hai. Aur [polynomials-part6.md](../../../class9/maths/polynomials/polynomials-part6.md) mein polynomials ka division algorithm tha: Dividend = Divisor × Quotient + Remainder. Hum yahan usi baat ka **numbers wala** roop dekhenge, aur uska use HCF nikalne mein karenge. HCF ka matlab tum Class 6 se jaante ho: wo sabse bada number jo dono numbers ko poora-poora (bina bache) divide kare.

---

## Part A: Euclid ka Division Lemma

### Bus wali baat, zubaan badal kar

Bus mein 83 bachche aur 9 ki bench: wahan hamne **a = 83** aur **b = 9** liya. Quotient **q = 9** (poori benches) aur remainder **r = 2** (khade bachche).

**Euclid ka Division Lemma:** a aur b koi bhi do positive integers hon, to **do** whole numbers q aur r aise milte hain ki

**a = b × q + r,  jahan 0 ≤ r < b**

Aur ye q aur r **sirf ek hi** hote hain (unique).

Is line mein teen baatein chhupi hain:

1. **r kabhi 0 se chhota nahi** hota. Bache hue bachche minus mein nahi ho sakte.
2. **r hamesha b se chhota** hota hai. Agar r = b ya usse bada ho, to ek aur bench aur bhar sakti hai, matlab q ek aur badhana tha.
3. Jab **r = 0** ho, to b ne a ko poora-poora divide kiya (a, b ka multiple hai).

### Unique kyun? (number line se)

b ke multiples ko number line par rakho: 0, b, 2b, 3b, ... Koi bhi number a ya to kisi multiple par khada hota hai, ya do multiples ke **beech ki ek hi khaali jagah** mein. Wo bachi hui doori hi r hai. Dekho b = 9 aur a = 83:

```
   9 x 9                                        9 x 10
      +----+----+----+----+----+----+----+----+----+
     81   82   83   84   85   86   87   88   89   90
                ^
              83: 81 se 2 aage
```

> **Figure 1.1** – 9 ke do paas-paas multiples 81 aur 90 hain. 83 inke beech mein hai, 81 se 2 aage. Isliye q = 9 (81 = 9 × 9 tak poori benches) aur r = 2.

83 ko "9 × 8 + 11" ya "9 × 10 − 7" likhna bhi barabari to sahi rakhta hai, par wahan bacha hua 11 ya −7 hai, jo 0 se 8 ke beech nahi hai. Lemma ka matlab hi ye hai ki **sirf ek tareeke mein bacha hua hissa 0 se (b − 1) ke beech aata hai.** Wo ek tareeka hi q aur r deta hai.

### Example 1: Alag-alag a, b = 9 ke saath

| a | a = 9 × q + r | q | r |
|---|---|---|---|
| 82 | 82 = 9 × 9 + 1 | 9 | 1 |
| 88 | 88 = 9 × 9 + 7 | 9 | 7 |
| 99 | 99 = 9 × 11 + 0 | 11 | 0 |
| 7 | 7 = 9 × 0 + 7 | 0 | 7 |

Dhyan do aakhri row par: agar a, b se chhota ho to bhi lemma chalta hai: q = 0 aur r = a. Bus mein 7 bachche hon to ek bhi bench poori nahi bharti, aur saare 7 ek hi bench par baith jate hain.

Jaanch: 9 × 9 + 1 = 82 ✅, 9 × 9 + 7 = 88 ✅, 9 × 11 + 0 = 99 ✅, 9 × 0 + 7 = 7 ✅. Aur har r, 0 se 8 ke beech hai.

---

## Part B: Division Algorithm se HCF

Ab bus ka sawaal bada karte hain: do numbers ka HCF kaise nikalein, jab wo numbers bade hon (jaise 2116 aur 667) aur unke factors nikalna thaka dene wala ho?

### Tareeka (algorithm)

1. Bade number a ko chhote number b se divide karo: **a = b × q + r**.
2. Agar **r = 0** hai, to ruk jao: **b hi HCF hai.**
3. Agar r ≠ 0 hai, to ab **b ko dividend** aur **r ko divisor** banao, aur wapas kadam 1 par jao.

```
   bada a aur chhota b lo
          v
   a = b x q + r likho
          v
   Kya r = 0 hai ?
     haan  --->  ruko. HCF = b (aakhri divisor)
     nahi
          v
   b ko a ki jagah, r ko b ki jagah rakho
          v
   wapas upar jao
```

> **Figure 1.2** – Euclid ke algorithm ka naksha. Har chakkar mein numbers chhote hote jate hain, aur remainder 0 aate hi hum ruk jate hain.

### Ye ruk kyun jata hai?

Har chakkar mein remainder pichhle divisor se **chhota** hota hai (lemma ki shart r < b). Matlab numbers ki ye lambi line hamesha neeche utarti hai: 115 se 92, 92 se 23, ... Aur whole numbers mein neeche utarte-utarte 0 par pahunchna hi padta hai, kyunki 0 se neeche wo ja nahi sakte. Isliye ye algorithm **hamesha** khatam hota hai.

### Ye sahi HCF kyun deta hai? (Kyun?)

Ye is topic ka sabse khoobsurat hissa hai. Maan lo a = b × q + r.

- Maan lo koi number d **a aur b dono ko** divide karta hai. Wo b × q ko bhi divide karta hai (kyunki b ko karta hai). To wo a − b × q ko bhi divide karega, aur a − b × q to **r** hi hai. Yaani **d, r ko bhi divide karta hai.**
- Ulta: maan lo d, **b aur r dono ko** divide karta hai. Wo b × q ko bhi, aur b × q + r ko bhi divide karega, aur b × q + r to **a** hi hai. Yaani **d, a ko bhi divide karta hai.**

Matlab **(a, b) ke common divisors aur (b, r) ke common divisors bilkul ek hi list hain.** Jab list wahi hai, to unmein sabse bada bhi wahi hoga:

**HCF(a, b) = HCF(b, r)**

Chhota sa namuna: 83 aur 9 ka common divisor sirf 1 hai. 83 = 9 × 9 + 2 se (9, 2) ka common divisor bhi sirf 1 hai. Dono jodiyon ka HCF 1.

Isi tarah har chakkar mein pair chhota hota jata hai par uska HCF badalta nahi. Aakhir mein pair (g, 0) rehta hai. g aur 0 ka HCF g hi hota hai, kyunki g khud ko bhi divide karta hai aur 0 ko bhi (0 = g × 0). Isliye **aakhri divisor hi HCF hai.**

---

## Part C: HCF nikalna, kadam-dar-kadam

### Example 2: HCF(667, 2116)

Bada number 2116 hai, chhota 667.

- 2116 = 667 × 3 + 115 (667 × 3 = 2001, 2116 − 2001 = 115)
- 667 = 115 × 5 + 92 (115 × 5 = 575, 667 − 575 = 92)
- 115 = 92 × 1 + 23
- 92 = 23 × 4 + 0 (remainder 0, ruk jao)

Aakhri divisor 23 hai, to **HCF(667, 2116) = 23.**

```
 Step   Bada   =  Divisor  x  Quotient  +  Bacha
 1      2116   =    667    x      3     +   115
 2       667   =    115    x      5     +    92
 3       115   =     92    x      1     +    23
 4        92   =     23    x      4     +     0   <- bacha 0, ruk jao
                     ^^
                   aakhri divisor = HCF
```

> **Figure 1.3** – Example 2 ki ladder. Har line ka "Bacha" agli line ka "Divisor" ban jata hai, aur har line ka "Divisor" agli line ka "Bada".

Jaanch: 667 ÷ 23 = 29 aur 2116 ÷ 23 = 92, dono poore ✅. Ab dekho 29 aur 92 mein koi common factor nahi hai (29 prime hai aur 92 ka factor nahi), isliye 23 se bada koi common divisor ho hi nahi sakta ✅.

Ab dekho, 23 poori ladder mein chhupa hua hai:

```
 Pair             23 ke multiples ke roop mein
 (2116, 667)      23 x 92 ,  23 x 29     bacha 115 = 23 x 5
 (667, 115)       23 x 29 ,  23 x 5      bacha  92 = 23 x 4
 (115, 92)        23 x 5  ,  23 x 4      bacha  23 = 23 x 1
 (92, 23)         23 x 4  ,  23 x 1      bacha   0
```

> **Figure 1.4** – Jo number shuru ke dono ko divide karta hai (yahan 23), wo har bache hue number ko bhi divide karta hai. Isi liye HCF ladder mein se kabhi nahi nikalta.

### Example 3: Panch ank wale numbers: HCF(13431, 14467)

- 14467 = 13431 × 1 + 1036
- 13431 = 1036 × 12 + 999 (1036 × 12 = 12432, 13431 − 12432 = 999)
- 1036 = 999 × 1 + 37
- 999 = 37 × 27 + 0

**HCF(13431, 14467) = 37.**

Dekho, factors nikalna 5 ank ke numbers par kitna lamba hota, par yahan sirf 4 division mein kaam khatam.

Jaanch: 13431 = 37 × 363 aur 14467 = 37 × 391. Aur 363 = 3 × 11 × 11, 391 = 17 × 23: koi factor common nahi ✅. 37 hi sabse bada common divisor hai.

### Example 4: Jab HCF prime nahi, prime ka power ho: HCF(8788, 9971)

- 9971 = 8788 × 1 + 1183
- 8788 = 1183 × 7 + 507 (1183 × 7 = 8281, 8788 − 8281 = 507)
- 1183 = 507 × 2 + 169
- 507 = 169 × 3 + 0

**HCF(8788, 9971) = 169**, jo 13 × 13 hai. HCF hamesha prime hi ho, ye zaroori nahi.

Jaanch: 8788 ÷ 169 = 52 aur 9971 ÷ 169 = 59. 59 prime hai aur 52 ka factor nahi hai, to 52 aur 59 mein koi common factor nahi, aur 169 hi sabse bada hai ✅.

---

## Part D: Jab HCF 1 nikle: coprime numbers

### Example 5: HCF(1645, 3489)

- 3489 = 1645 × 2 + 199
- 1645 = 199 × 8 + 53
- 199 = 53 × 3 + 40
- 53 = 40 × 1 + 13
- 40 = 13 × 3 + 1
- 13 = 1 × 13 + 0

Yahan ek remainder **1** aaya, par algorithm tab bhi nahi rukta. Rukne ka nishaan hai **remainder 0**, aur wo agli line mein aaya (13 = 1 × 13 + 0). Aakhri divisor **1** hai, to **HCF(1645, 3489) = 1.** Aise numbers ko **coprime** kehte hain.

Jaanch: 1645 = 5 × 7 × 47. 3489 ko 5, 7, 47 se divide karo: 3489 = 5 × 697 + 4, 3489 = 7 × 498 + 3, 3489 = 47 × 74 + 11. Koi remainder 0 nahi, yaani koi common prime factor nahi ✅.

Coprime ka matlab ye nahi ki dono numbers prime hain. 1645 aur 3489 dono composite hain, phir bhi coprime hain.

---

## Part E: Teen numbers ka HCF

Teen numbers ke liye algorithm do baar chalate hain: pehle do numbers ka HCF, phir us HCF aur teesre number ka HCF.

**HCF(a, b, c) = HCF( HCF(a, b), c )**

Kyun? Aakhri step ki baat yaad karo: ladder ke baad pair (g, 0) bacha, jahan g = HCF. Ladder ke har pair ke common divisors wahi hain, to a aur b ka **har** common divisor g ko bhi divide karta hai. Isliye jo number a, b aur c teeno ko divide karega, wo pehle a aur b ko divide karega, matlab g ko divide karega, aur sath mein c ko bhi. Yaani teeno ke common divisors = g aur c ke common divisors. HCF bhi wahi.

### Example 6: HCF(1479, 1914, 1015)

Pehle 1479 aur 1914:

- 1914 = 1479 × 1 + 435
- 1479 = 435 × 3 + 174
- 435 = 174 × 2 + 87
- 174 = 87 × 2 + 0

HCF(1479, 1914) = 87. Ab 87 aur 1015:

- 1015 = 87 × 11 + 58 (87 × 11 = 957, 1015 − 957 = 58)
- 87 = 58 × 1 + 29
- 58 = 29 × 2 + 0

**HCF(1479, 1914, 1015) = 29.**

Dhyan do: do numbers ka HCF 87 tha, teen ka 29. Teesra number aane se HCF chhota ya barabar hi ho sakta hai, bada kabhi nahi.

Jaanch: 1479 = 29 × 51, 1914 = 29 × 66, 1015 = 29 × 35. Ab 51 = 3 × 17, 66 = 2 × 3 × 11, 35 = 5 × 7. Teeno mein koi common factor nahi ✅. Order badal kar bhi dekho: HCF(1914, 1015) ka algorithm 1914 = 1015 × 1 + 899, 1015 = 899 × 1 + 116, 899 = 116 × 7 + 87, 116 = 87 × 1 + 29, 87 = 29 × 3 + 0, yaani 29, aur HCF(29, 1479): 1479 = 29 × 51 + 0, to 29 ✅.

---

## Part F: Kahani wale sawaal (word problems)

### Example 7: Sabse lamba scale

Ek darzi ke paas do patti hain: 1073 cm aur 1258 cm lambi. Use ek aisa **sabse lamba scale** chahiye jo dono ko bina bache naap de.

Scale ki lambai dono lambaiyon ko poora-poora divide karni chahiye, yaani **common divisor**, aur sabse lamba chahiye, yaani **HCF**.

- 1258 = 1073 × 1 + 185
- 1073 = 185 × 5 + 148
- 185 = 148 × 1 + 37
- 148 = 37 × 4 + 0

HCF = **37 cm.** Pehli patti mein 1073 ÷ 37 = 29 baar aur doosri mein 1258 ÷ 37 = 34 baar scale lagega.

Chhota model dekho: 16 aur 28 units ki do pattiyan, scale 4 units ka (HCF(16, 28) = 4):

```
  16 : [###][###][###][###]
  28 : [###][###][###][###][###][###][###]
```

> **Figure 1.5** – Har dabba 4 units ka. 16 mein 4 dabbe aur 28 mein 7 dabbe poore aate hain, kuch bachta nahi. Agar 8 units ka scale lete, to 16 mein 2 baar aata par 28 mein 3 baar ke baad 4 units bach jate, isliye 4 hi sabse bada scale hai.

Jaanch: 37 × 29 = 1073 ✅ aur 37 × 34 = 1258 ✅. Aur 29, 34 coprime hain (29 prime, 34 = 2 × 17), to 37 se bada scale nahi chalega.

### Example 8: Sabse bade square tiles

Ek kamre ka farsh 901 cm × 1071 cm hai. Poore farsh par **bina todhe** barabar square tiles lagane hain, aur tiles jitne ho sake utne **bade** chahiye.

Tile ki side 901 aur 1071 dono ko poora-poora divide kare, aur sabse badi ho: **HCF(901, 1071)**.

- 1071 = 901 × 1 + 170
- 901 = 170 × 5 + 51
- 170 = 51 × 3 + 17
- 51 = 17 × 3 + 0

HCF = **17 cm**. Ek line mein 901 ÷ 17 = 53 tiles, aur 1071 ÷ 17 = 63 lines. Tiles = 53 × 63 = **3339**.

Jaanch: 3339 tiles, har tile ka area 17 × 17 = 289 cm². Kul area 3339 × 289 = 964971 cm². Farsh ka area 901 × 1071 = 964971 cm² ✅.

---

## Part G: Lemma se "roop" nikalna

Lemma ki sabse khoobsurat baat ye hai ki wo **har** positive integer ke baare mein ek saath baat kar sakta hai. Dekho kaise.

### Example 9: Har odd positive integer 2q + 1 ke roop ka hota hai

b = 2 lo. Lemma kehta hai ki koi bhi positive integer a ko a = 2q + r likha ja sakta hai, jahan r = 0 ya 1 (kyunki r, 2 se chhota hai).

- r = 0 ho to a = 2q, jo **even** hai.
- r = 1 ho to a = 2q + 1, aur wo **odd** hai.

Koi teesra rasta nahi, isliye har odd number 2q + 1 ke roop ka hai. Jaanch: 83 = 2 × 41 + 1 ✅ (bus ke bachche odd the).

### Example 10: Har positive integer ka roop 3q, 3q + 1 ya 3q + 2 hota hai

b = 3 lo. Remainder sirf 0, 1 ya 2 ho sakta hai, isliye a = 3q, ya 3q + 1, ya 3q + 2. Jaanch: 83 = 3 × 27 + 2 ✅.

### Example 11: Kisi bhi integer ka square 3m ya 3m + 1 ke roop ka hota hai

Example 10 se a teen mein se ek roop ka hai. Teeno ka square nikalo:

- (3q)² = 9q² = 3 × (3q²). Ye **3m** ka roop hai, m = 3q².
- (3q + 1)² = 9q² + 6q + 1 = 3 × (3q² + 2q) + 1. Ye **3m + 1** ka roop hai.
- (3q + 2)² = 9q² + 12q + 4 = 3 × (3q² + 4q + 1) + 1. Ye bhi **3m + 1** ka roop hai.

Sabhi cases mein roop **3m ya 3m + 1** aaya, 3m + 2 kabhi nahi. (Negative integer ka square bhi positive wale jaisa hi hota hai, isliye wo bhi isi mein aata hai.)

Ek kaam ki baat: 2381 ko dekho. 2381 = 3 × 793 + 2, yaani 3m + 2 ka roop. Kisi square ka roop 3m + 2 ho hi nahi sakta, isliye **2381 perfect square nahi hai.** Jaanch: 48² = 2304 aur 49² = 2401, 2381 in dono ke beech hai ✅.

Ek honest sawdhani: ye test sirf "nahi" kehne ke liye kaam karta hai. Agar kisi number ka roop 3m + 1 ho, to wo square ho **sakta hai**, par zaroori nahi. Jaise 7 = 3 × 2 + 1, par 7 square nahi hai.

---

## Aam galtiyan (bachke rehna)

### Galti 1: "Remainder 1 aaya, to algorithm ruk gaya"

Kuch bachche 1 dekhte hi ruk jate hain, kyunki 1 sabse chhota positive number hai. Dekho HCF(1714, 3769):

- 3769 = 1714 × 2 + 341
- 1714 = 341 × 5 + 9
- 341 = 9 × 37 + 8
- 9 = 8 × 1 + 1
- 8 = 1 × 8 + 0

Yahan "remainder 1" par ruk kar koi ye likh de ki "HCF = pichhla divisor 8", to galat hoga. Sahi nishaan hai **remainder 0**, aur wo agli line mein aaya. Aakhri divisor 1 hai, to HCF = 1 (coprime). Ye bhi dhyan do: 1 aate hi pair (8, 1) bacha, aur 1 har number ko poora divide karta hai, isliye agle step mein remainder **hamesha** 0 hoga. Yaani remainder 1 aane ka matlab hota hai "ab jawab 1 hi hoga", par ruk jane ki shart ab bhi 0 hi hai.

### Galti 2: "Quotient HCF mein kuch kaam karta hai"

Quotient sirf ginti hai ki divisor kitni baar aaya. HCF pe iska koi hath nahi. Dekho do pairs: (779, 836) aur (779, 6289).

- 836 = 779 × **1** + 57 aur 6289 = 779 × **8** + 57
- Dono ke baad ka kaam bilkul ek jaisa: 779 = 57 × 13 + 38, 57 = 38 × 1 + 19, 38 = 19 × 2 + 0

Pehla quotient 1 tha ya 8, HCF dono mein **19**. Kyunki remainder wahi (57) bacha, aur HCF toh remainder pe tika hai. Isliye quotient na jodo, na guna karo, na HCF samjho. Bas dhyan rakho ki r sahi nikla ya nahi.

---

## Quick Recap

- **Euclid ka Division Lemma:** a, b positive integers ke liye a = bq + r, jahan 0 ≤ r < b, aur q, r unique hain.
- Remainder hamesha divisor se chhota hota hai. Agar a < b to q = 0 aur r = a.
- **Euclid ka Division Algorithm:** a = bq + r likho. r = 0 ho to b HCF hai. Warna (b, r) par wahi kaam dohrao.
- **Kyun chalta hai:** (a, b) aur (b, r) ke common divisors ek hi list hain, isliye HCF(a, b) = HCF(b, r). Aur remainders chhote hote jate hain, isliye 0 aana tay hai.
- **Rukne ka nishaan remainder 0 hai**, 1 nahi. Aakhri divisor 1 ho to numbers **coprime** hain.
- Quotient HCF ko nahi chhoota. Sirf remainders se jawab banta hai.
- Teen numbers: HCF(a, b, c) = HCF(HCF(a, b), c).
- HCF ke sawaal: sabse lamba scale, sabse bada square tile, barabar groups.
- Lemma se roop: odd = 2q + 1; integer = 3q, 3q + 1 ya 3q + 2; square = 3m ya 3m + 1.

---

## Practice Questions

1. Use Euclid's division algorithm to find the HCF of 3944 and 5075.
2. Find the HCF of 4082 and 4121. Which quotient in your working was the largest, and does it change the HCF?
3. Find the HCF of 8107 and 9196, and say whether it is a prime number, a power of a prime, or neither.
4. Show that 2535 and 2653 are coprime.
5. Find the HCF of 806, 1209 and 1705.
6. A plumber has two pipes of lengths 1273 cm and 1558 cm. He wants to cut both into pieces of equal length, as long as possible, with no pipe left over. What is the length of each piece, and how many pieces does he get in all?
7. A courtyard is 2461 cm long and 3519 cm wide. It is to be covered with identical square tiles, as large as possible, with no tile cut. Find the side of the tile and the number of tiles.
8. Using Euclid's division lemma with b = 4, show that every positive integer is of the form 4q, 4q + 1, 4q + 2 or 4q + 3. Hence show that every odd positive integer is of the form 4q + 1 or 4q + 3.
9. It is known that the square of any positive integer is of the form 4m or 4m + 1. Using this, say which of 5779, 6402, 6241, 7396 cannot be a perfect square.
10. Find q and r so that a = bq + r with 0 ≤ r < b, for (a) a = 2917, b = 46; (b) a = 64, b = 73; (c) a = 3416, b = 61.
11. A student writes 519 = 43 × 8 + 175 and says "the lemma is satisfied". Find the mistake and write the correct q and r.
12. When Euclid's algorithm is applied to two numbers, the last divisor turns out to be 1. (a) What do we call such numbers? (b) Must both numbers be prime? Test with 44 and 75.
13. A bus has benches of 11 seats each and carries 137 students. How many benches are full and how many students are left standing? A friend says "maybe 11 students are left standing". Explain, using the lemma, why this cannot happen.

### Answers

1. 5075 = 3944 × 1 + 1131; 3944 = 1131 × 3 + 551; 1131 = 551 × 2 + 29; 551 = 29 × 19 + 0. **HCF = 29.**
   Jaanch: 3944 ÷ 29 = 136 aur 5075 ÷ 29 = 175, dono poore. 136 = 2³ × 17 aur 175 = 5² × 7: koi common factor nahi ✅.
2. 4121 = 4082 × 1 + 39; 4082 = 39 × 104 + 26; 39 = 26 × 1 + 13; 26 = 13 × 2 + 0. **HCF = 13.**
   Sabse bada quotient 104 tha, par HCF ko usse koi fark nahi pada. HCF sirf remainders (39, 26, 13, 0) se bana.
   Jaanch: 4082 ÷ 13 = 314 aur 4121 ÷ 13 = 317. 317 prime hai aur 314 ka factor nahi (314 = 2 × 157): koi common factor nahi ✅.
3. 9196 = 8107 × 1 + 1089; 8107 = 1089 × 7 + 484; 1089 = 484 × 2 + 121; 484 = 121 × 4 + 0. **HCF = 121 = 11 × 11**, yaani **prime ka power** (11²). Prime nahi hai kyunki 121 ke 3 factors hain: 1, 11, 121.
   Jaanch: 8107 ÷ 121 = 67 aur 9196 ÷ 121 = 76. 67 prime hai, 76 = 2 × 2 × 19: koi common factor nahi ✅.
4. 2653 = 2535 × 1 + 118; 2535 = 118 × 21 + 57; 118 = 57 × 2 + 4; 57 = 4 × 14 + 1; 4 = 1 × 4 + 0. Aakhri divisor 1, **HCF = 1**, to dono **coprime** hain. Remainder 1 aane par rukna nahi, agla step 0 deta hai.
   Jaanch: 2535 = 3 × 5 × 13 × 13. 2653 ko 3, 5, 13 se divide karo: 2653 = 3 × 884 + 1, 2653 = 5 × 530 + 3, 2653 = 13 × 204 + 1. Koi remainder 0 nahi ✅.
5. Pehle 806 aur 1209: 1209 = 806 × 1 + 403; 806 = 403 × 2 + 0. HCF = 403. Ab 403 aur 1705: 1705 = 403 × 4 + 93; 403 = 93 × 4 + 31; 93 = 31 × 3 + 0. **HCF(806, 1209, 1705) = 31.**
   Jaanch: 806 = 31 × 26, 1209 = 31 × 39, 1705 = 31 × 55. 26 = 2 × 13, 39 = 3 × 13, 55 = 5 × 11: teeno mein koi common factor nahi ✅.
6. HCF(1273, 1558): 1558 = 1273 × 1 + 285; 1273 = 285 × 4 + 133; 285 = 133 × 2 + 19; 133 = 19 × 7 + 0. HCF = 19, to har tukda **19 cm** ka. Pehli pipe se 1273 ÷ 19 = 67 tukde, doosri se 1558 ÷ 19 = 82 tukde. Kul 67 + 82 = **149 tukde.**
   Jaanch: 19 × 67 = 1273 ✅, 19 × 82 = 1558 ✅. 67 prime hai aur 82 = 2 × 41: coprime, to 19 se bada nahi chalega.
7. HCF(2461, 3519): 3519 = 2461 × 1 + 1058; 2461 = 1058 × 2 + 345; 1058 = 345 × 3 + 23; 345 = 23 × 15 + 0. HCF = **23 cm** (tile ki side). Lambai mein 2461 ÷ 23 = 107 tiles, chaudai mein 3519 ÷ 23 = 153 tiles. Kul tiles 107 × 153 = **16371.**
   Jaanch: 16371 × 23 × 23 = 16371 × 529 = 8660259 cm². Aangan ka area 2461 × 3519 = 8660259 cm² ✅.
8. b = 4 lo. Lemma kehta hai a = 4q + r, jahan r < 4, yaani r = 0, 1, 2 ya 3. To har positive integer 4q, 4q + 1, 4q + 2 ya 4q + 3 hai (teesra koi roop nahi). Ab 4q = 2 × (2q) aur 4q + 2 = 2 × (2q + 1) even hain. To odd sirf bache hue do mein se: **4q + 1 ya 4q + 3.**
   Jaanch: 347 = 4 × 86 + 3 (odd, roop 4q + 3) ✅ aur 349 = 4 × 87 + 1 (roop 4q + 1) ✅.
9. Har number ko 4 se divide karo aur remainder dekho (ya aakhri do ank 4 se divide karo, kyunki 100, 4 ka multiple hai).
   - 5779: aakhri do ank 79 = 4 × 19 + 3, to 5779 = 4m + 3. Roop 4m ya 4m + 1 nahi, **square nahi ho sakta.**
   - 6402: aakhri do ank 02, to 6402 = 4m + 2. **Square nahi ho sakta.**
   - 6241: aakhri do ank 41 = 4 × 10 + 1, to 4m + 1. Test "pass", par isse sirf itna pata chalta hai ki square ho **sakta** hai.
   - 7396: aakhri do ank 96 = 4 × 24, to 4m. Test pass.
   Jaanch: sach mein 6241 = 79² aur 7396 = 86² ✅.
10. (a) 46 × 63 = 2898 aur 2917 − 2898 = 19, to 2917 = 46 × 63 + 19: **q = 63, r = 19**, aur 19 < 46.
    (b) 64, 73 se chhota hai, to 64 = 73 × 0 + 64: **q = 0, r = 64**.
    (c) 61 × 56 = 3416, to 3416 = 61 × 56 + 0: **q = 56, r = 0.** Matlab 3416, 61 ka multiple hai.
    Jaanch: 46 × 63 + 19 = 2917 ✅, 73 × 0 + 64 = 64 ✅, 61 × 56 + 0 = 3416 ✅.
11. 43 × 8 = 344 aur 344 + 175 = 519, barabari to sahi hai, par **r = 175 divisor 43 se bada hai.** Lemma ki shart r < 43 tootti hai. Sahi: 43 × 12 = 516 aur 519 − 516 = 3, to **519 = 43 × 12 + 3**, q = 12, r = 3.
    Jaanch: 43 × 12 + 3 = 516 + 3 = 519 ✅ aur 3 < 43.
12. (a) Aise numbers **coprime** kehlate hain (HCF = 1).
    (b) Nahi, dono prime hona zaroori nahi. 44 aur 75: 75 = 44 × 1 + 31; 44 = 31 × 1 + 13; 31 = 13 × 2 + 5; 13 = 5 × 2 + 3; 5 = 3 × 1 + 2; 3 = 2 × 1 + 1; 2 = 1 × 2 + 0. Aakhri divisor 1, to HCF = 1. Par 44 = 2 × 2 × 11 aur 75 = 3 × 5 × 5 dono composite hain.
    Jaanch: 44 ke prime factor 2, 11 hain aur 75 ke 3, 5: common koi nahi ✅.
13. 137 = 11 × 12 + 5 (11 × 12 = 132, 137 − 132 = 5). To **12 benches poori bharin aur 5 bachche khade rahe.**
    Dost ki baat galat hai: lemma kehta hai r < 11. Agar 11 bachche khade hote, to wo ek aur poori bench bhar sakte the, yaani wo "bacha hua" hissa nahi, ek aur poori bench hoti. Isliye khade bachche sirf 0 se 10 ho sakte hain. Aur 137 ke liye lemma ka sirf ek hi jawab hai: q = 12, r = 5.
    Jaanch: 11 × 12 + 5 = 137 ✅ aur 5 < 11.

---

Amogh ne bus se utarte hue ma'am se kaha, "Ma'am, ab mujhe samajh aaya: **bachi hui cheez sirf kachra nahi hoti, usi mein HCF chhupa hota hai!**" Tum bhi ab bade se bade numbers ka HCF bas kuch division mein nikal sakte ho. Shabaash!

**Aage kya?** Euclid ka algorithm HCF to de deta hai, par ye nahi batata ki ek number banta kis se hai. Agle topic (Topic 2, [real-numbers-part2.md](real-numbers-part2.md)) mein hum dekhenge ki **har number ke andar prime numbers ka ek unique "fingerprint"** chhupa hota hai, jise Fundamental Theorem of Arithmetic kehte hain.
