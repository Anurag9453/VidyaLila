# Chapter: Geometric Progressions

> **Class:** 10 | **Subject:** Mathematics
> **Ye Class 10 Maths ka paanchva chapter hai.** Pichhle chapter ki aakhri file ([arithmetic-progressions-part6.md](../arithmetic-progressions/arithmetic-progressions-part6.md): Arithmetic Progressions ka saar) se hum yahan aaye hain. Wahan tumne dekha tha ki AP "har baar ek hi number jodne" se banti hai, aur do vaade kiye the: compound interest ka pattern ([arithmetic-progressions.md](../arithmetic-progressions/arithmetic-progressions.md), Part G) aur doubling ([wahi file](../arithmetic-progressions/arithmetic-progressions.md), Part E ki Figure 1.3) is chapter mein naam paayenge. Class 9 ke saathi: [compound-interest-part3.md](../../../class9/maths/compound-interest/compound-interest-part3.md) (growth factor) aur [number-systems-part6.md](../../../class9/maths/number-systems/number-systems-part6.md) (exponents ke laws).
> **Topics covered in this file:**
> 1. Guna Karte Jao: GP Kya Hoti Hai?

---

# Topic 1: Guna Karte Jao: GP Kya Hoti Hai?

Chapter 4 mein hum APs ke saath khelte rahe: aisi lists jinme **har baar ek hi number joda** jaata hai. Aakhir mein do cheezein adhuri reh gayi thi. Ek, compound interest ke saalana amounts, jo AP nahi nikle. Do, doubling wali list (1, 2, 4, 8, 16), jahan jodna nahi, kuch aur ho raha tha. Is topic mein hum us "kuch aur" ko naam denge: **guna karna**. Jo list har baar ek hi number se **guna** hoti hai, wahi GP hai. Uska nth term, uske sum ka formula aur uski paheliyan aane wale topics mein aayengi.

---

## Gurpreet ka invite aur balcony wali ball

Gurpreet ke Chachu ne nayi dukaan kholi thi, aur opening ka ek chhota sa invite-poster banaya gaya. Gurpreet ne wo poster apne family group mein daal diya aur upar likh diya: "Ise apne **5 naye logon** ko bhejiye, aur unse kahiye ki wo bhi **5 naye logon** ko bhejein."

Papa ne mazaak mein kaha, "Dekhna, ye to phail jayega." Gurpreet ne hisaab lagaya. Pehle round mein poster **5** logon tak pahuncha. Un paanchon ne 5-5 naye logon ko bheja, to doosre round mein **25** naye log. Phir **125**, phir **625**. Papa ne kaha, "Dhyan do: 5 se 25 tak 20 nahi badha, aur 25 se 125 tak 100 badha. Ye **jodna** nahi hai. Har baar pichhla number **5 se guna** ho raha hai." (Asli zindagi mein itne log har baar aage nahi bhejte, ye bas ek simple model hai.)

Shaam ko Gurpreet balcony mein khelne gaya. Wahan se ek purani, kam hawa wali rubber ball neeche giraayi. Dadi ne diwaar par cm ke nishaan lagaye the. Pehla uchhaal **135 cm**, doosra **45 cm**, teesra **15 cm**, chautha **5 cm** gaya. Gurpreet ne dekha: har baar ball pichhli unchai ka **teesra hissa** hi uchhal rahi hai. Phir wahi baat: 135 se 45 tak 90 ghata, 45 se 15 tak sirf 30 ghata. Ye ghatna bhi **jodna-ghatana** nahi, ye bhi **guna** hai: har baar 1/3 se.

Sawaal ye hai: **aisi list ko kya kehte hain, uska "guna karne wala number" kaise naapte hain, aur kaise pata chalega ki koi list sach mein "har baar ek hi number se guna" wali hai?**

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Geometric progression (GP)** | Aisi sequence jisme pehle term ke baad **har term apne pichhle term ko ek hi tay number se guna karne** se banta hai | 5, 25, 125, 625 |
| **Common ratio (r)** | Wo tay number jisse har baar guna hota hai: r = aₙ₊₁ ÷ aₙ (agla term ÷ pichhla term) | Poster wali list mein r = 5 |
| **Ratio test** | Kisi list ko GP ya na-GP kehne ka tareeka: saare ek ke baad ek aane wale ratios nikalo, aur dekho sab barabar hain ya nahi | 5, 25, 125: ratios 5 aur 5 |
| **Growing GP** | Aisi GP jisme r > 1 ho (terms ka size badhta hai, jab a positive ho) | 16, 24, 36, 54 (r = 3/2) |
| **Shrinking GP** | Aisi GP jisme 0 < r < 1 ho (terms ka size ghatta hai) | 135, 45, 15, 5 (r = 1/3) |
| **Alternating GP** | Aisi GP jisme r negative ho: terms ke sign baari-baari se badalte hain | 40, −20, 10, −5 (r = −1/2) |
| **Constant GP** | Aisi GP jisme r = 1 ho: har term wahi rehta hai | 199, 199, 199, 199 |

Pehle term ko hum Chapter 4 ki tarah **a** kehte hain. Is chapter mein **r** sirf common ratio ke liye hai. Byaaj ki dar ko hum **R%** likhenge, taaki dono akshar na bhidein.

---

## Pehle se kya yaad hona chahiye

Chapter 4 ka saar chaar line mein: AP mein pehle term ke baad har term = pichhla term **+ d**. d = agla − pichhla. Test: saare consecutive differences barabar hon. Aam roop: a, a + d, a + 2d, ... Aur GP ke saath ye sab ek jaisa chalega, bas **jodne ki jagah guna** aur **minus ki jagah bhaag**.

| Kahan | Kya mila | Is topic mein kahan kaam aayega |
|---|---|---|
| [AP, Topic 1](../arithmetic-progressions/arithmetic-progressions.md) | AP, d, "saare differences" wala test | Part C: wahi test, ratios ke saath |
| [AP, Topic 1, Part G](../arithmetic-progressions/arithmetic-progressions.md) | Simple interest ke amounts AP hain, compound interest ke nahi | Part E: compound interest ka pattern ab naam paata hai |
| [AP, Topic 1, Figure 1.3](../arithmetic-progressions/arithmetic-progressions.md) | 1, 2, 4, 8, 16 mein har baar guna ho raha tha | Part F: doubling ka vaada poora |
| [Compound Interest, Topic 3](../../../class9/maths/compound-interest/compound-interest-part3.md) | Growth factor (1 + R/100), har saal paisa itne guna | Part E: wahi factor r ban jaata hai |
| [Number Systems, Topic 6](../../../class9/maths/number-systems/number-systems-part6.md) | aᵐ × aⁿ = aᵐ⁺ⁿ | Part D: a × r × r = a r² |

---

## Part A: Jodna ya guna? Do alag chhalaangein

AP mein har kadam par **ek tay number joda** jaata tha. GP mein har kadam par **ek tay number se guna** hota hai. Number-line par dono chhalaangein dekho.

```
AP: har baar jodo
  12 --(+9)--> 21 --(+9)--> 30 --(+9)--> 39

GP: har baar guna karo
  16 --(×3/2)--> 24 --(×3/2)--> 36 --(×3/2)--> 54
```

> **Figure 1.1** – Upar: AP, jahan har chhalaang ka size barabar (+9) hai. Neeche: GP, jahan har chhalaang "×3/2" hai. 16 ka 3/2 guna 24 hai, 24 ka 3/2 guna 36 hai, 36 ka 3/2 guna 54 hai. Jodne wali chhalaang ka size nahi badalta, guna wali chhalaang ka asli size badalta jaata hai (16 se 24: +8, 24 se 36: +12, 36 se 54: +18).

Ye aakhri baat dhyan se dekho. GP mein har chhalaang ka **size** (kitna badha) badalta rehta hai, par uska **guna** wali baat nahi badalti. Isi liye GP ko "guna wali" progression kehte hain.

Poster wali list aur ball wali list ek hi kahani kehti hain: 5 → 25 → 125 → 625 (har baar ×5) aur 135 → 45 → 15 → 5 (har baar ×1/3).

---

## Part B: Common ratio r aur chaar shaklein

Common ratio nikalne ka tareeka AP ke d jaisa hi hai, bas bhaag ke saath: **r = aₙ₊₁ ÷ aₙ**, yaani **agla ÷ pichhla**. Hamesha isi order mein bhaag dena.

### Example 1: poster aur ball

(i) Poster wali list 5, 25, 125, 625 ka r nikalo. (ii) Ball wali list 135, 45, 15, 5 ka r nikalo.

**Hal:** (i) 25 ÷ 5 = 5, 125 ÷ 25 = 5, 625 ÷ 125 = 5. Teeno ratios barabar, to **GP hai, r = 5**.
(ii) 45 ÷ 135 = 1/3, 15 ÷ 45 = 1/3, 5 ÷ 15 = 1/3. **GP hai, r = 1/3.**

**Jaanch:** (i) 5 se teen baar ×5: 5 × 5 × 5 × 5 = 625 = aakhri term ✅. (ii) 135 × 1/3 × 1/3 × 1/3 = 135/27 = 5 = aakhri term ✅.

**Story check** (Chapter 3 ki aadat: jawab ko kahani mein rakh kar dekhna): poster ke round mein logon ki ginti poori hai (5, 25, 125, 625), aur ball ki unchai 5 cm abhi bhi positive aur pichhli unchai se kam hai, to kahani mein baith jaata hai.

Ab r ke maayne dekho. r kitna hai, us par GP ki shakal badalti hai (a positive maan kar chal rahe hain):

- **r > 1:** har term pichhle se bada, list badhti hai.
- **0 < r < 1:** har term pichhle se chhota par positive, list ghatti hai.
- **r < 0:** sign baari-baari se badalte hain.
- **r = 1:** har term wahi.

Figure 1.2 mein chaaron ko bars ki tarah dikhaya hai. Har tasveer ka apna scale hai, isliye unchaiyon ko sirf apni tasveer ke andar compare karna.

```
Badhti (r = 3/2)    Ghat-ti (r = 1/3)    Badal-badal (r = −1/2)    Constant (r = 1)
            ###     ###
            ###     ###
        ### ###     ###                  ###                       ### ### ### ###
    ### ### ###     ###                  ###                       ### ### ### ###
### ### ### ###     ### ###              ###                       ### ### ### ###
### ### ### ###     ### ### ### ###      ###     ###               ### ### ### ###
---------------     ---------------      ---------------           ---------------
                                             ###     ###
                                             ###
 16  24  36  54     135  45  15  5        40 -20  10  -5           199 199 199 199
```

> **Figure 1.2** – Chaar tarah ki GP, har ek ke chaar terms (bar ki unchai lagbhag hai, har bar kam se kam ek row ki rakhi gayi hai). Pehli: 16, 24, 36, 54 badh rahe hain (r = 3/2). Doosri: 135, 45, 15, 5 ghat rahe hain (r = 1/3). Teesri: 40, −20, 10, −5, bars baari-baari se line ke upar aur neeche (r = −1/2). Chauthi: 199, 199, 199, 199, sab bars barabar (r = 1).

Ek chhoti si baat: agar pehla term **negative** ho, to "badhti" aur "ghatti" ka matlab ulta dikhta hai. Jaise a = −8 aur r = 2 mein −8, −16, −32: terms ka **size** badhta hai par number neeche jaata hai. Isliye hum "growing" ka matlab "terms ka size badhna" lete hain.

### Example 2: r ke alag roop

Teeno list ka r nikalo: (i) 7, −14, 28, −56 (ii) 40, −20, 10, −5 (spring ke sire ki centre se doori, cm mein, jo har baar ulti taraf aur aadhi door jaati hai: ek simple model) (iii) 199, 199, 199, 199 (ek fixed monthly recharge, ₹ mein).

**Hal:** (i) −14 ÷ 7 = −2, 28 ÷ (−14) = −2, −56 ÷ 28 = −2. **GP, r = −2** (alternating).
(ii) −20 ÷ 40 = −1/2, 10 ÷ (−20) = −1/2, −5 ÷ 10 = −1/2. **GP, r = −1/2** (alternating).
(iii) 199 ÷ 199 = 1 teeno baar. **Constant GP, r = 1.**

**Jaanch:** (i) 7 × (−2)³ = 7 × (−8) = −56 ✅. (ii) 40 × (−1/2)³ = 40 × (−1/8) = −5 ✅. (iii) 199 × 1³ = 199 ✅.

**Story check:** spring ki doori ka sign "centre ke dayen ya bayen" batata hai, to negative hona theek hai. Recharge har mahine ek hi rakam hai, to r = 1 mein baith jaata hai.

---

## Part C: Kya ye GP hai? (saare ratios check karo)

GP ki pehchaan ek hi test se hoti hai: **saare ek ke baad ek aane wale ratios barabar hon.** Dhyan do: **saare**, sirf pehle do nahi.

### Example 3: chaar list, chaar faisle

(a) 250, 275, 302.5, 332.75 (b) 12, 15, 18, 21 (c) 1, 3, 6, 10, 15 (d) 6, −9, 13.5, −20.25.

**Hal:**
(a) 275 ÷ 250 = 1.1, 302.5 ÷ 275 = 1.1, 332.75 ÷ 302.5 = 1.1. Sab barabar: **GP hai, r = 1.1.**
(b) 15 ÷ 12 = 5/4, 18 ÷ 15 = 6/5, 21 ÷ 18 = 7/6. Barabar nahi: **GP nahi hai.** (Ye to AP hai, har baar +3.)
(c) 3 ÷ 1 = 3, 6 ÷ 3 = 2, 10 ÷ 6 = 5/3, 15 ÷ 10 = 3/2. Har ratio alag: **GP nahi hai.** (Ye Chapter 4 ki dots wali triangular numbers hain.)
(d) −9 ÷ 6 = −3/2, 13.5 ÷ (−9) = −3/2, −20.25 ÷ 13.5 = −3/2. **GP hai, r = −3/2.**

**Jaanch:** (a) 250 × 1.1³ = 250 × 1.331 = 332.75 ✅. (b) Agar r = 5/4 hota to teesra term 15 × 5/4 = 18.75 hota, par list mein 18 hai, to GP nahi ✅. (c) Agar r = 3 hota to teesra term 9 hona chahiye tha, par 6 hai, to GP nahi ✅. (d) 6 × (−3/2)³ = 6 × (−27/8) = −81/4 = −20.25 ✅.

### Example 4: algebra wale terms

(i) x ki kis value par x, x + 6, x + 21 GP banti hai? (ii) Kya 3x, −6x, 12x har x ke liye GP hai?

**Hal:** (i) GP mein dono ratios barabar hone chahiye: (x + 6)/x = (x + 21)/(x + 6). Cross-multiply: (x + 6)² = x(x + 21). Left: x² + 12x + 36. Right: x² + 21x. x² dono taraf kat gaya: 12x + 36 = 21x, to 36 = 9x, **x = 4.** Terms: 4, 10, 25 aur r = 10/4 = 5/2.
(ii) −6x ÷ 3x = −2 aur 12x ÷ (−6x) = −2. Dono ratios −2, **x chahe kuch bhi ho** (x ≠ 0, kyunki 0 se bhaag nahi hota). To x ≠ 0 ke liye **GP hai, r = −2.**

**Jaanch:** (i) 10 ÷ 4 = 5/2 aur 25 ÷ 10 = 5/2 ✅. (ii) x = 5 lo: 15, −30, 60, ratios −2 aur −2 ✅.

---

## Part D: Aam roop: a, ar, ar², ...

Agar pehla term a ho aur common ratio r, to poori GP likhi jaati hai:

a₁ = a, a₂ = a × r = ar, a₃ = ar × r = ar², a₄ = ar² × r = ar³, ...

Dhyan se dekho: a₄ mein r **teen** baar aaya hai (a × r × r × r), chaar baar nahi. Ye Class 9 ke exponents wala hi hisaab hai: r × r = r². "Teen" ka pattern kyun banta hai, ye Topic 2 mein dekhenge.

### Example 5: a aur r se GP likhna

Pehle paanch term likho: (i) a = 16, r = 3/2 (ii) a = 96, r = −1/2 (iii) a = 4/5, r = 5.

**Hal:**

| Term | Kaise | (i) | (ii) | (iii) |
|---|---|---|---|---|
| a₁ = a | pehla term | 16 | 96 | 4/5 |
| a₂ = ar | a × r | 24 | −48 | 4 |
| a₃ = ar² | a₂ × r | 36 | 24 | 20 |
| a₄ = ar³ | a₃ × r | 54 | −12 | 100 |
| a₅ = ar⁴ | a₄ × r | 81 | 6 | 500 |

**Jaanch (aakhri term doosre tareeke se, r chaar baar):** (i) 16 × (3/2)⁴ = 16 × 81/16 = 81 ✅. (ii) 96 × (−1/2)⁴ = 96 × 1/16 = 6 ✅. (iii) 4/5 × 5⁴ = 4/5 × 625 = 500 ✅.

Dhyan do: (ii) mein negative r ki wajah se sign baari-baari se badle. Aur (iii) mein pehla term fraction hai, phir bhi GP bani.

---

## Part E: Compound interest aur ghatti keemat: ab naam mil gaya

Chapter 4 ke Part G mein simple interest ke amounts AP nikle the, par compound interest ke nahi. Ab wo vaada poora karte hain. ₹44,000 par 10% saalana byaaj, chaar saal:

| Saal ke end mein | Simple interest se amount | Compound interest se amount |
|---|---|---|
| 1 | ₹48,400 | ₹48,400 |
| 2 | ₹52,800 | ₹53,240 |
| 3 | ₹57,200 | ₹58,564 |
| 4 | ₹61,600 | ₹64,420.40 |

Simple wali list mein har saal ₹4,400 judta hai: AP, d = 4,400. Compound wali list mein ratios dekho: 53,240 ÷ 48,400 = 1.1, 58,564 ÷ 53,240 = 1.1, 64,420.40 ÷ 58,564 = 1.1. **GP hai, a = 48,400, r = 1.1.**

Ye 1.1 koi nayi cheez nahi. Class 9 ka **growth factor** (1 + R/100) hai: R = 10 ke liye 1 + 10/100 = 1.1. Yaani **compound interest ke saalana amounts ek GP hote hain jiska r = 1 + R/100 hota hai.** Ab samajh aaya ki unmein difference barabar kyun nahi the: har saal paisa pichhle amount ka 1.1 guna hota hai, to jo badhta hai wo bhi har baar badi rakam ka 10% hai.

**Jaanch:** Class 9 ke formula se chauthe saal ka amount: 44,000 × 1.1⁴ = 44,000 × 1.4641 = 64,420.40 ✅.

**Story check:** paise sensible hain (₹64,420.40), aur saal poore hain, to kahani mein baith jaata hai.

### Example 6: scooter ki ghatti keemat

Ek scooter ₹95,000 ka kharida gaya. Har saal uski keemat pichhle saal ki keemat se 10% kam ho jaati hai. Pehle chaar saal ke end ki keemat likho aur dekho ki GP hai ya nahi.

**Hal:** 10% kam ho to pichhli keemat ka 90% bachta hai, yaani guna 0.9. Keemat: 95,000 × 0.9 = 85,500, phir 85,500 × 0.9 = 76,950, phir 76,950 × 0.9 = 69,255, phir 69,255 × 0.9 = 62,329.50. Ratios sab 0.9 = 9/10. **GP hai, a = 85,500, r = 9/10** (shrinking GP). Dhyan do: r = 1 − R/100 = 1 − 10/100 = 0.9, kyunki ab paisa **ghat** raha hai.

**Jaanch:** 95,000 × 0.9⁴ = 95,000 × 0.6561 = 62,329.50 ✅.

**Story check:** keemat positive hai aur har saal kam hai, paise sensible hain, to kahani mein baith jaata hai.

---

## Part F: Doubling ka vaada: kagaz ki tah

Chapter 4 ki doubling wali list ab hum samajh sakte hain: har baar ×2, to GP, r = 2. Ek asli cheez par dekho. Aam kagaz ki ek sheet lagbhag 0.08 mm moti maan lo. Use aadha mod do to 2 parat, phir mod do to 4 parat. Har mod par moti "doguni" ho jaati hai. Sheet ki motai aur har mod ke baad ki motai (mm mein):

0.08, 0.16, 0.32, 0.64, 1.28, 2.56, 5.12, 10.24

### Example 7: kagaz ki motai

Dekho ki ye GP hai, r batao, aur 7 mod ke baad motai nikalo.

**Hal:** 0.16 ÷ 0.08 = 2, 0.32 ÷ 0.16 = 2, 0.64 ÷ 0.32 = 2, 1.28 ÷ 0.64 = 2, 2.56 ÷ 1.28 = 2, 5.12 ÷ 2.56 = 2, 10.24 ÷ 5.12 = 2. Saare ratios 2, to **GP hai, a = 0.08, r = 2.** Pehla term "0 mod ke baad" hai, to 7 mod ke baad wo aathva term hai: **10.24 mm**, yaani lagbhag 1 cm.

**Jaanch:** 0.08 × 2 × 2 × 2 × 2 × 2 × 2 × 2 (saat baar ×2) = 0.08 × 128 = 10.24 ✅.

**Story check:** motai positive hai, mod ki ginti poori hai (7). Ek sachchai: aam A4 kagaz ko lagbhag 7 ya 8 baar se zyada modna lagbhag namumkin hai. Wajah ye hai ki har mod par motai doguni hoti hai aur length aadhi, to kagaz jaldi ek chhoti moti gaddi ban jaata hai jo aur modne ko raazi nahi hota. Ganit ki list aage bhi chalti hai, par kagaz nahi.

---

## Part G: AP aur GP aamne-saamne

| Baat | AP | GP |
|---|---|---|
| Agla term kaise banta hai | pichhle mein d **jodo** | pichhle ko r se **guna** karo |
| Tay number ka naam | common difference d | common ratio r |
| Kaise nikalte hain | d = agla − pichhla | r = agla ÷ pichhla |
| Test | saare differences barabar | saare ratios barabar |
| Aam roop | a, a + d, a + 2d, ... | a, ar, ar², ... |
| (n, aₙ) ka graph | seedhi line par points | ek mudi hui curve par points |
| Byaaj ki kahani | simple interest | compound interest |

Graph wali baat ko ek tasveer se dekhte hain. Ek AP 16, 24, 32, 40, 48 (d = 8) aur ek GP 16, 24, 36, 54, 81 (r = 3/2) lo. Dono 16, 24 se shuru hote hain, phir alag ho jaate hain. Figure 1.3 mein n = 1, 2, 3, 4, 5 par aₙ ke points hain.

```
    +
 80 +                                                x
    +
 70 +
    +
 60 +
    +                                      x
 50 +                                                o
    +
 40 +                                      o
    +                            x
 30 +                            o
    +                  *
 20 +
    +        *
 10 +
    +
    +---------------------------------------------------
             1         2         3         4         5    n
```

> **Figure 1.3** – (n, aₙ) ke points, har point lagbhag 5 ke kareeb wali row par rakha gaya hai. o = AP 16, 24, 32, 40, 48. x = GP 16, 24, 36, 54, 81. * = jahan dono ke point ek hi jagah hain (n = 1 aur n = 2). AP ke points seedhi line par chadhte hain, GP ke points upar ki taraf mudti hui curve par.

AP ke points isliye seedhi line par hain ki har kadam par aₙ **barabar** (8) badhta hai. GP ke kadam dekho: 24 − 16 = 8, 36 − 24 = 12, 54 − 36 = 18, 81 − 54 = 27. Har kadam pichhle se **bada** hai (ye kadam khud 8, 12, 18, 27 ek GP hain, r = 3/2), to points seedhi line par nahi reh sakte. Isi se GP "mudi hui curve" banati hai. Jab r < 1 ho, to curve neeche girti hai aur sirf chapti hoti jaati hai: 135, 45, 15, 5, 5/3, ... Har term positive hi rehta hai, kyunki positive number ko 1/3 se guna karke positive hi milta hai.

---

## Aam galtiyan (bachke rehna)

**Galti 1: "Pehle do ratios barabar hain, to GP hai"**

Ek video ke har ghante ke naye views (hazaar mein) likhe gaye: 48, 72, 108, 150. Ek bacche ne dekha: 72 ÷ 48 = 3/2 aur 108 ÷ 72 = 3/2, to usne likh diya "GP hai, r = 3/2" aur agle term ka andaza lagaya 108 × 3/2 = 162.

Check karo. Saare ratios: 3/2, 3/2 aur 150 ÷ 108 = 25/18, jo **3/2 se alag** hai. To **ye GP nahi hai**. Agar GP hoti to chautha term 162 hota, par list mein 150 hai. Sirf pehle do ratios dekhne se list ko GP maan lena pakka nahi hota: **saare** consecutive ratios dekho.

**Jaanch:** 48, 72, 108 tak r = 3/2 theek chalta hai, par 150 ÷ 108 = 25/18 ≠ 3/2, to test fail ✅.

**Galti 2: "r hamesha poora number aur 1 se bada hota hai"**

Ek phone ki battery ka percentage har ghante ke baad (ek simple model): 99, 66, 44. Ek bacche ne kaha: "66 ÷ 99 poora number nahi aata, aur GP ka r to 2, 3, 4 jaisa bada hota hai, to ye GP nahi."

Check karo. 66 ÷ 99 = 2/3 aur 44 ÷ 66 = 2/3. Dono ratios barabar, to **GP hai, r = 2/3.** r ek **fraction** hai aur **1 se chhota** hai (shrinking GP). Agla term 44 × 2/3 = 88/3, lagbhag 29.33%. r negative bhi ho sakta hai (Part B ki alternating GPs).

**Jaanch:** 99 × (2/3)² = 99 × 4/9 = 44 ✅ aur 99, 66, 44 mein dono ratios 2/3 hain ✅.

---

## Quick Recap

- **GP:** pehle term ke baad har term apne pichhle term ko ek hi tay number r se guna karne se banta hai.
- **Common ratio r = agla ÷ pichhla.** r > 1 growing, 0 < r < 1 shrinking, r < 0 alternating, r = 1 constant.
- **GP ka test:** saare consecutive ratios barabar hon. Sirf pehle do dekhna kaafi nahi.
- **Aam roop:** a, ar, ar², ar³, ... (a₄ mein r teen baar aata hai).
- **r hamesha poora ya 1 se bada nahi hota:** ye fraction, negative ya 1 se chhota bhi ho sakta hai.
- **AP aur GP:** AP mein jodna aur d, GP mein guna aur r. AP ke points seedhi line par, GP ke points curve par.
- **Compound interest ke saalana amounts GP hote hain** jiska r = 1 + R/100 hai (ghatti keemat mein r = 1 − R/100).
- **Doubling GP hai** (r = 2), kagaz ki tah jaise.

---

## Practice Questions

1. Which of these lists are GPs? For each GP give r. For each non-GP show one pair of unequal ratios. (i) 22, 33, 49.5, 74.25 (ii) 175, 140, 112, 89.6 (iii) 5, 8, 12, 17 (iv) 18, −6, 2, −2/3.
2. Write the next two terms of each GP: (i) 6.4, 8, 10 (ii) 650, 130, 26 (iii) 325, −130, 52.
3. Write the first five terms of the GP with (i) a = 75, r = 2/5 (ii) a = 9/8, r = −4.
4. Find x so that x + 134, x + 170, x + 215 are in GP, and write the GP.
5. A bank pays 5% per annum compound interest (compounded yearly) on ₹26,000. (a) Write the amounts at the end of years 1, 2 and 3 and show that they form a GP. What is r in terms of R? (b) Write the three amounts if the same ₹26,000 earned simple interest, and show that they form an AP.
6. A machine costs ₹2,10,000 and loses 20% of the previous year's value every year. Write its value at the end of years 1, 2 and 3. Show that they form a GP and find r.
7. A ball rebounds to 150 cm, 90 cm and 54 cm in its first three bounces. Show that these form a GP and find the height of the fourth rebound.
8. A school notice reaches 9 parents on day 1. On every later day each parent who got it the day before tells 4 new parents. Write the number of new parents informed on days 1 to 4 and show that it is a GP.
9. A swing's distance from its centre (in cm) at successive extremes is 27, −18, 12, −8 (a simple model, the sign shows the side). Show that it is a GP, name its type, and find the next two terms.
10. Plan A saves ₹45 in week 1 and ₹10 more every week after that. Plan B saves ₹45 in week 1 and 1.2 times the previous week's saving every week after that. (a) Which plan is an AP and which a GP? Give d and r. (b) Write Plan B's savings for weeks 1 to 4. (c) In which week does Plan B first save more than Plan A in that week?
11. Look at the points (n, aₙ) for the GP 56, 98, 171.5. Find the rise from n = 1 to n = 2 and from n = 2 to n = 3. Can these three points lie on one straight line? Explain in one line why no GP with r ≠ 1 can have its points on a straight line.
12. True or false, with a reason: (a) A GP can have a negative common ratio, like 10, −30, 90. (b) A list in which every term is 4 more than the previous one is a GP. (c) 9, 9, 9, 9 is a GP. (d) In the GP with a = 12 and r = 1/4 the terms keep getting smaller.

### Answers

1. (i) 33 ÷ 22 = 3/2, 49.5 ÷ 33 = 3/2, 74.25 ÷ 49.5 = 3/2. **GP, r = 3/2.** Jaanch: 22 × (3/2)³ = 22 × 27/8 = 74.25 ✅.
   (ii) 140 ÷ 175 = 4/5, 112 ÷ 140 = 4/5, 89.6 ÷ 112 = 4/5. **GP, r = 4/5.** Jaanch: 175 × (4/5)³ = 175 × 64/125 = 89.6 ✅.
   (iii) 8 ÷ 5 = 1.6 aur 12 ÷ 8 = 1.5, barabar nahi. **GP nahi.** Jaanch: r = 1.6 hota to teesra term 8 × 1.6 = 12.8 hota, par 12 hai ✅.
   (iv) −6 ÷ 18 = −1/3, 2 ÷ (−6) = −1/3, (−2/3) ÷ 2 = −1/3. **GP, r = −1/3.** Jaanch: 18 × (−1/3)³ = 18 × (−1/27) = −2/3 ✅.

2. (i) r = 8 ÷ 6.4 = 5/4 aur 10 ÷ 8 = 5/4. Agle term: 10 × 5/4 = **12.5** aur 12.5 × 5/4 = **15.625**. Jaanch: 6.4 × (5/4)⁴ = 6.4 × 625/256 = 15.625 ✅.
   (ii) r = 130 ÷ 650 = 1/5 aur 26 ÷ 130 = 1/5. Agle term: 26 × 1/5 = **5.2** aur 5.2 × 1/5 = **1.04**. Jaanch: 650 × (1/5)⁴ = 650/625 = 1.04 ✅.
   (iii) r = −130 ÷ 325 = −2/5 aur 52 ÷ (−130) = −2/5. Agle term: 52 × (−2/5) = **−20.8** aur −20.8 × (−2/5) = **8.32**. Jaanch: 325 × (−2/5)⁴ = 325 × 16/625 = 8.32 ✅.

3. (i) 75, 75 × 2/5 = 30, 30 × 2/5 = 12, 12 × 2/5 = 24/5, 24/5 × 2/5 = 48/25. Terms: **75, 30, 12, 24/5, 48/25.** Jaanch: 75 × (2/5)⁴ = 75 × 16/625 = 48/25 ✅.
   (ii) 9/8, 9/8 × (−4) = −9/2, × (−4) = 18, × (−4) = −72, × (−4) = 288. Terms: **9/8, −9/2, 18, −72, 288.** Jaanch: 9/8 × (−4)⁴ = 9/8 × 256 = 288 ✅.

4. Ratios barabar: (x + 170)/(x + 134) = (x + 215)/(x + 170). Cross-multiply: (x + 170)² = (x + 134)(x + 215). Left: x² + 340x + 28,900. Right: x² + 349x + 28,810. x² kat gaya: 340x + 28,900 = 349x + 28,810, to 90 = 9x, **x = 10.** GP: **144, 180, 225**, r = 5/4.
   Jaanch: 180 ÷ 144 = 5/4 aur 225 ÷ 180 = 5/4 ✅.

5. (a) Amounts: 26,000 × 1.05 = **27,300**, 27,300 × 1.05 = **28,665**, 28,665 × 1.05 = **30,098.25**. Ratios: 28,665 ÷ 27,300 = 1.05 aur 30,098.25 ÷ 28,665 = 1.05. **GP, a = 27,300, r = 1.05 = 1 + R/100** (R = 5).
   (b) Simple interest har saal 26,000 × 5/100 = ₹1,300. Amounts: **27,300, 28,600, 29,900.** Differences 1,300 aur 1,300, to **AP, d = 1,300.**
   Jaanch: 26,000 × 1.05³ = 26,000 × 1.157625 = 30,098.25 ✅. Story check: paise sensible, saal poore.

6. 20% kam hone par pichhli keemat ka 80% bachta hai, guna 0.8. Keemat: 2,10,000 × 0.8 = **1,68,000**, × 0.8 = **1,34,400**, × 0.8 = **1,07,520.** Ratios 0.8 = 4/5 teeno jagah. **GP, r = 4/5 = 1 − R/100** (R = 20).
   Jaanch: 2,10,000 × 0.8³ = 2,10,000 × 0.512 = 1,07,520 ✅. Story check: keemat positive aur har saal kam.

7. 90 ÷ 150 = 3/5 aur 54 ÷ 90 = 3/5. **GP, r = 3/5.** Chautha rebound: 54 × 3/5 = **32.4 cm.**
   Jaanch: 150 × (3/5)³ = 150 × 27/125 = 32.4 ✅. Story check: unchai positive aur pichhli se kam, ball ke liye theek.

8. Day 1: 9. Day 2: 9 × 4 = 36. Day 3: 36 × 4 = 144. Day 4: 144 × 4 = 576. Ratios 36 ÷ 9 = 4, 144 ÷ 36 = 4, 576 ÷ 144 = 4. **GP: 9, 36, 144, 576, r = 4.**
   Jaanch: 9 × 4³ = 9 × 64 = 576 ✅. Story check: parents ki ginti poori hai.

9. −18 ÷ 27 = −2/3, 12 ÷ (−18) = −2/3, −8 ÷ 12 = −2/3. **GP, r = −2/3, alternating** (sign baari-baari se badalta hai, size ghatta hai). Agle do term: −8 × (−2/3) = **16/3** (lagbhag 5.33) aur 16/3 × (−2/3) = **−32/9** (lagbhag −3.56).
   Jaanch: 27 × (−2/3)³ = 27 × (−8/27) = −8 ✅. Story check: sign dono taraf ke extremes batata hai, to theek.

10. (a) Plan A: 55 − 45 = 10, **AP, d = 10** (45, 55, 65, 75). Plan B: 1.2 guna, **GP, r = 1.2.**
    (b) 45, 45 × 1.2 = **54**, 54 × 1.2 = **64.80**, 64.80 × 1.2 = **77.76.**
    (c) Week 1: 45 aur 45 barabar. Week 2: 54 < 55. Week 3: 64.80 < 65. Week 4: 77.76 > 75. To Plan B **week 4** mein pehli baar aage nikalta hai (shuru mein dheema, phir tez: guna ka asar).
    Jaanch: 45 × 1.2³ = 45 × 1.728 = 77.76 ✅. Story check: paise sensible (₹77.76).

11. n = 1 se 2 tak: 98 − 56 = 42. n = 2 se 3 tak: 171.5 − 98 = 73.5. Rise barabar nahi (42 aur 73.5), to **teeno points ek seedhi line par nahi.**
    Ek line mein: n se n + 1 tak rise aₙ₊₁ − aₙ = aₙ(r − 1) hota hai. r ≠ 1 ho to (r − 1) ≠ 0, aur aₙ har kadam par badalta hai, to rise bhi badalti hai. Jaanch: 73.5 ÷ 42 = 1.75 = 7/4 = r ✅ (rise bhi har baar r guna ho rahi hai).

12. (a) **True** ✅. r = −30 ÷ 10 = −3 aur 90 ÷ (−30) = −3, dono barabar.
    (b) **False** ❌. 4 jodne se AP banti hai, GP nahi. Jaise 5, 9, 13: ratios 9/5 aur 13/9 barabar nahi.
    (c) **True** ✅. Har ratio 9 ÷ 9 = 1, to constant GP, r = 1.
    (d) **True** ✅. r = 1/4 aur a = 12 positive hai: 12, 3, 3/4, ... har term pichhle se chhota.

---

Shabaash! Ab tum kisi bhi list ko dekhkar "jodna ya guna?" pooch sakte ho, r nikal sakte ho, aur ratio test se jaan sakte ho ki wo GP hai ya nahi.

**Aage kya?** Topic 2 mein hum pata lagayenge ki 100-wan ya 20-wan term ko ek ek karke guna kiye bina seedha kaise nikalein: GP ke nth term ka formula.
