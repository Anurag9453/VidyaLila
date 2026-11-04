# Chapter: Statistics (Part 5)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [statistics-part4.md](statistics-part4.md) se aage chalti hai.** (Chapter ka Topic 1 [statistics.md](statistics.md) mein hai.)
> **Topics covered in this file:**
> 5. Mean (Ausat)

---

# Topic 5: Mean (Ausat)

Pichle topics mein humne data ikattha kiya, use tables mein sajaya (ungrouped aur grouped frequency tables), aur phir bar graph, histogram aur frequency polygon se uski **shakal** dekhi. Topic 4 mein Dr. Kavita ne October aur November ke mareezon ke do polygon ek hi graph par bana kar dekha tha ki flu mein bachche aur bujurg zyada beemar pade. Graph se pata chalta hai ki data kahan zyada hai, kahan kam, aur kaise faila hua hai.

Par kai baar hume poori shakal nahi, sirf **ek number** chahiye jo poore data ki taraf se bol sake. Jaise "is class ke bachche aam taur par kitne number laate hain?" ya "hamara mahine ka bill aam taur par kitna aata hai?". Is topic mein hum aisa pehla number seekhenge: **Mean**, yaani **ausat**.

---

## Kavya ke ghar ka bijli bill

Kavya ke papa har mahine bijli ka bill bharte hain. Ek din wo bole, "Main har mahine ek fix rakam alag rakhna chahta hoon, taaki bill aane par pareshani na ho. Par kitni rakhun?"

Kavya ne pichhle 6 mahine ke bill nikaale:

| Mahina | Jan | Feb | Mar | Apr | May | Jun |
|---|---|---|---|---|---|---|
| Bill (₹) | 800 | 950 | 1100 | 1400 | 1250 | 1100 |

Har mahine bill alag hai. Kisi ek mahine ka number utha lein to wo poori kahani nahi batata. 800 rakhenge to garmi mein kam pad jayega, 1400 rakhenge to sardi mein zyada bachega.

Kavya ne socha: "Agar ye saara paisa ikattha karke **chhe mahino mein barabar baant** dein, to har mahine kitna aayega?"

Kul bill = 800 + 950 + 1100 + 1400 + 1250 + 1100 = **₹6600**

Har mahine barabar = 6600 ÷ 6 = **₹1100**

Papa khush: "Bas, har mahine ₹1100 alag rakhenge. Kisi mahine thoda bachega, kisi mahine thoda lagega, par hisaab barabar ho jayega."

Yahi ₹1100 is data ka **mean** hai.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Central tendency** | Data ka "beech wala" ya "aam" value batane ka tareeka | Ek number jo poore data ki taraf se bole |
| **Mean (ausat)** | Saari values ka jod ÷ values ki ginti | Bill ka mean ₹1100 |
| **Observation** | Data ki ek value | Har mahine ka bill ek observation hai |
| **Σ (sigma)** | "Sab ko jodo" ka chinh | Σx matlab saare x ka jod |
| **x̄ (x-bar)** | Mean ka chinh | x̄ = 1100 |
| **Deviation** | Kisi value ki mean se doori (sign ke saath) | 800 − 1100 = −300 |
| **Outlier** | Baaki sab se bahut alag, ek dum bada ya chhota value | Sab ₹100 ke aas paas, ek ₹1100 |

---

## Part A: "Ek number" kyun? Central Tendency

Data ki taraf se bolne wala ek number dhundhne ke teen mashhoor tareeke hain:

1. **Mean** (ausat): sab ko barabar baant do. Ye is topic mein.
2. **Median**: sab ko line mein lagao, beech wala lo.
3. **Mode**: jo sabse zyada baar aaye.

Median aur Mode hum agle topic (Topic 6) mein seekhenge. Teeno ko milakar **measures of central tendency** kehte hain, kyunki teeno data ke "centre" ki taraf ishaara karte hain.

---

## Part B: Raw data ka Mean

### Barabar baantne wali soch

Paanch dost ke paas kanche (marbles) hain:

| Dost | A | B | C | D | E |
|---|---|---|---|---|---|
| Kanche | 3 | 7 | 4 | 8 | 3 |

Agar sab apne kanche beech mein rakh dein aur phir barabar baant lein, to har ek ko kitne milenge?

Pehle (dher alag alag):

```
           o
     o     o
     o     o
     o     o
     o  o  o
  o  o  o  o  o
  o  o  o  o  o
  o  o  o  o  o
  A  B  C  D  E
  3  7  4  8  3
```

Baad mein (sab barabar):

```
  o  o  o  o  o
  o  o  o  o  o
  o  o  o  o  o
  o  o  o  o  o
  o  o  o  o  o
  A  B  C  D  E
  5  5  5  5  5
```

Kul kanche = 3 + 7 + 4 + 8 + 3 = 25. Paanch logon mein barabar = 25 ÷ 5 = **5**.

Mean bas yahi hai: **oonche dher se kam karke neeche wale dher mein daalo, jab tak sab barabar na ho jayein.** Jo barabar uchaai bachti hai, wahi mean.

### Formula aur Σ ka matlab

Agar n observations hain x₁, x₂, x₃, …, xₙ, to:

**Mean = x̄ = (x₁ + x₂ + … + xₙ) ÷ n**

Ye lamba likhna thakaane wala hai, isliye ek chhota chinh use karte hain: **Σ** (Greek letter "sigma"). Iska matlab hai "sab ko jodo".

**x̄ = Σx / n**

Padho aise: "x-bar barabar sab x ka jod, bata n."

Σ se ghabrana mat. Ye koi naya hisaab nahi, sirf "jodo" ka shortcut hai. Jaise "₹" likhne se rupaye ka matlab samajh aata hai, waise hi "Σ" likhne se "jod" ka matlab.

### Example 1: Dance class ke bachchon ki umar

Umar (saal): 12, 13, 13, 14, 15, 11

Σx = 12 + 13 + 13 + 14 + 15 + 11 = 78
n = 6
x̄ = 78 ÷ 6 = **13 saal**

**Jaanch:** 13 × 6 = 78 ✅

### Example 2: Roz ki sair

Ek hafte ke 4 din Riddhi ne itne km chale: 2.5, 3, 4, 3.5

Σx = 2.5 + 3 + 4 + 3.5 = 13
x̄ = 13 ÷ 4 = **3.25 km**

Dhyan do, 3.25 km kisi bhi din bilkul itna nahi chala gaya. Mean ka data mein hona zaroori nahi hai. Iske baare mein Part D mein aur baat karenge.

---

## Part C: Frequency table ka Mean

Topic 2 mein humne bada data **frequency table** mein sajana seekha tha: ek value kitni baar aayi, wo uski **frequency (f)** hai. Ab sawaal ye hai ki table se mean kaise nikalein.

### Example 3: Mohalle mein bachchon ki ginti

Ek mohalle ke 20 parivaron se poocha gaya, "Aapke ghar mein kitne bachche hain?"

| Bachche (x) | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Parivar (f) | 2 | 6 | 8 | 3 | 1 |

Isse aise padho: 8 parivaron mein 2-2 bachche hain. To in 8 parivaron ke kul bachche = 8 × 2 = 16.

Yahi kaam har row ke liye karo. Isko **fx** column kehte hain:

| x | f | fx |
|---|---|---|
| 0 | 2 | 0 |
| 1 | 6 | 6 |
| 2 | 8 | 16 |
| 3 | 3 | 9 |
| 4 | 1 | 4 |
| **Kul** | **Σf = 20** | **Σfx = 35** |

- **Σfx** = kul bachche = 35
- **Σf** = kul parivar = 20

**x̄ = Σfx / Σf = 35 ÷ 20 = 1.75**

Yaani "aam taur par ek parivar mein 1.75 bachche". Koi parivar 1.75 bachche nahi rakhta, par ye number poore mohalle ki tasveer deta hai.

**Kyun kaam karta hai?** Agar aap saare 20 values alag alag likhte (0, 0, 1, 1, 1, 1, 1, 1, 2, 2, … ) aur Part B ka formula lagate, to bhi 35 ÷ 20 hi aata. fx bas lamba jod chhota karne ka tareeka hai.

### Example 4: Chhuttiyon mein padhi kitaabein

| Kitaabein (x) | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Bachche (f) | 4 | 7 | 5 | 3 | 1 |

| x | f | fx |
|---|---|---|
| 1 | 4 | 4 |
| 2 | 7 | 14 |
| 3 | 5 | 15 |
| 4 | 3 | 12 |
| 5 | 1 | 5 |
| **Kul** | **20** | **50** |

x̄ = 50 ÷ 20 = **2.5 kitaabein**

**Jaanch:** 20 bachche × 2.5 = 50 kitaabein ✅

### Grouped data ka mean?

Jab data **class intervals** mein ho (jaise 10–20, 20–30), to har class ke **class mark** (beech wala value, Topic 2 mein dekha tha) ko x maan kar yahi tareeka lagta hai. Iski poori detail aage ki class mein aayegi. Abhi hum discrete (alag alag values wale) data par hi dhyan denge.

---

## Part D: Mean ki kuch mazedaar khaasiyatein

### Khaasiyat 1: Deviations ka jod hamesha 0

Kanche wale example mein mean 5 tha. Har dost mean se kitna upar ya neeche hai?

| Dost | Kanche (x) | Deviation (x − x̄) |
|---|---|---|
| A | 3 | −2 |
| B | 7 | +2 |
| C | 4 | −1 |
| D | 8 | +3 |
| E | 3 | −2 |
| **Jod** | | **0** |

Upar wale (+2, +3 = +5) aur neeche wale (−2, −1, −2 = −5) bilkul barabar hain.

Ise **see-saw** jaisa socho. Mean wo jagah hai jahan see-saw ka beech wala khamba rakho to dono taraf ka vajan barabar ho jaye.

```
   values:   3  3  4     5     7  8
             ●  ●  ●           ●  ●
   ══════════════════════▲══════════════════
                         mean = 5
```

Isliye hamesha: **Σ(x − x̄) = 0**

### Khaasiyat 2: Sab mein k jodo, to mean bhi k badhega

Har dost ko 2 kanche aur mil gaye: 5, 9, 6, 10, 5

Naya mean = 35 ÷ 5 = **7** = purana mean 5 + 2 ✅

Matlab: **sab values mein k jodo, mean bhi k badhega.** Ghatao to ghatega.

### Khaasiyat 3: Sab ko k se guna karo, to mean bhi k guna

Har dost ke kanche teen guna ho gaye: 9, 21, 12, 24, 9

Naya mean = 75 ÷ 5 = **15** = 5 × 3 ✅

Matlab: **sab values ko k se guna karo, mean bhi k guna.** k se bhaag do to mean bhi k se bhaag.

### Khaasiyat 4: Mean data mein hona zaroori nahi

1.75 bachche, 2.5 kitaabein, 3.25 km. Ye sab mean hain, par inme se koi bhi value data mein nahi thi. Mean ek **hisaabi** number hai, zaroori nahi ki wo kisi ek observation ke barabar ho.

### Khaasiyat 5: Ek bahut alag value mean ko kheench leti hai

Paanch doston ki hafte ki pocket money (₹): 100, 120, 110, 90, 80

Mean = 500 ÷ 5 = **₹100**. Ye sab ke aas paas hai. Bilkul theek tasveer.

Ab ek chhatha dost juda, jise ₹1100 milte hain.

Naya mean = (500 + 1100) ÷ 6 = 1600 ÷ 6 ≈ **₹266.67**

Ab mean ₹267 ke aas paas hai, par chhe mein se **ek bhi dost** is ke paas nahi hai. Paanch ko ₹80 se ₹120 milte hain, aur ek ko ₹1100. Mean ne kisi ki bhi sachchi tasveer nahi di.

Aisi ek dum alag value ko **outlier** kehte hain. Outlier mean ko apni taraf kheench leta hai. Aise data ke liye ek behtar number hai jo itni aasani se nahi hilta. Wo hum Topic 6 mein dekhenge.

---

## Part E: Mean wale khaas sawaal

### Example 5: Gayab value dhundho

5 numbers ka mean 18 hai. Chaar numbers hain 12, 20, 15, 16. Paanchwa kya hai?

Mean × ginti = kul jod. Ye ek bahut kaam ki trick hai.

Kul jod = 18 × 5 = 90
Chaar ka jod = 12 + 20 + 15 + 16 = 63
Paanchwa = 90 − 63 = **27**

**Jaanch:** (12 + 20 + 15 + 16 + 27) ÷ 5 = 90 ÷ 5 = 18 ✅

### Example 6: Gayab frequency (p) dhundho

Neeche ki table ka mean 13 hai. p ki value nikalo.

| x | 5 | 10 | 15 | 20 |
|---|---|---|---|---|
| f | 2 | p | 6 | 4 |

| x | f | fx |
|---|---|---|
| 5 | 2 | 10 |
| 10 | p | 10p |
| 15 | 6 | 90 |
| 20 | 4 | 80 |
| **Kul** | **12 + p** | **180 + 10p** |

Mean = Σfx / Σf:

(180 + 10p) ÷ (12 + p) = 13
180 + 10p = 13(12 + p) = 156 + 13p
180 − 156 = 13p − 10p
24 = 3p
**p = 8**

**Jaanch:** Σf = 20, Σfx = 180 + 80 = 260, mean = 260 ÷ 20 = 13 ✅

### Example 7: Galat copy hui value ko sudhaarna

30 numbers ka mean 40 nikala gaya. Baad mein pata chala ki ek number **72** ko galti se **27** likh diya gaya tha. Sahi mean kya hai?

Galat kul jod = 40 × 30 = 1200
Sahi kul jod = 1200 − 27 (galat wala hatao) + 72 (sahi wala jodo) = **1245**
Sahi mean = 1245 ÷ 30 = **41.5**

**Jaanch:** Sahi jod galat se 45 zyada hai (72 − 27 = 45). 45 ÷ 30 = 1.5, aur 40 + 1.5 = 41.5 ✅

### Example 8: Do groups ka milaa-jula mean

Section A ke 30 bachchon ka average score 62 hai. Section B ke 20 bachchon ka average 72 hai. Dono sections milakar average kya hoga?

Section A ka kul = 30 × 62 = 1860
Section B ka kul = 20 × 72 = 1440
Dono ka kul = 3300, kul bachche = 50
Milaa-jula mean = 3300 ÷ 50 = **66**

Dhyan do: (62 + 72) ÷ 2 = 67 **galat** hai, kyunki dono sections mein bachche barabar nahi hain. Bade group (A) ka vajan zyada hai, isliye answer 62 ki taraf khisak gaya.

### Example 9: Algebra wala mean

x, x + 2, x + 4, x + 6, x + 8 ka mean 11 hai. x nikalo.

Jod = 5x + 20
Mean = (5x + 20) ÷ 5 = 11
5x + 20 = 55
5x = 35
**x = 7**

**Jaanch:** Numbers 7, 9, 11, 13, 15. Jod 55, mean 11 ✅

### Example 10: Pehle 10 natural numbers ka mean

1 + 2 + … + 10 = 55
Mean = 55 ÷ 10 = **5.5**

---

## Aam galtiyan (bachke rehna)

**Galti 1: Σfx ko rows ki ginti se bhaag dena**
Kitaabon wale example (Example 4) mein 5 rows hain. 50 ÷ 5 = 10 kitaabein galat hai. Bhaag hamesha **Σf** (kul bachche = 20) se do: 50 ÷ 20 = 2.5.

**Galti 2: fx bhool kar sirf x jodna**
Kitaabon wale example mein 1 + 2 + 3 + 4 + 5 = 15, aur 15 ÷ 20 = 0.75. Ye bilkul galat hai. Har x ko uski frequency se guna karna zaroori hai.

**Galti 3: Do groups ke mean ka seedha average lena**
Groups ke size alag hon to (62 + 72) ÷ 2 mat karo. Pehle har group ka **kul** nikalo, phir jodo.

**Galti 4: Galat value sudhaarte waqt sirf sahi wala jodna**
Galat value ko pehle **hatana** bhi padta hai. 1200 + 72 galat hai, 1200 − 27 + 72 sahi hai.

**Galti 5: Mean ko hamesha "sabse sahi tasveer" maan lena**
Outlier ho to mean kisi ke bhi paas nahi rehta (pocket money wala example). Tab doosra measure dekhna padta hai.

**Galti 6: Mean data mein na mile to ghabra jaana**
1.75 bachche ya 2.5 kitaabein bilkul theek answers hain.

---

## Quick Recap

- **Mean (ausat)** = saari values ka jod ÷ values ki ginti. Ye "sab ko barabar baantne" jaisa hai.
- **Raw data:** x̄ = Σx / n. Σ ka matlab hai "sab jodo".
- **Frequency table:** x̄ = Σfx / Σf. fx column banao, aur Σf se bhaag do (rows ki ginti se nahi).
- **Mean × ginti = kul jod.** Gayab value, galat value aur milaa-jula mean, teeno isi trick se.
- **Khaasiyatein:**
  - Σ(x − x̄) = 0 (see-saw balance)
  - Sab mein k jodo, mean k badhega
  - Sab ko k se guna karo, mean k guna
  - Mean data mein hona zaroori nahi
  - Outlier mean ko kheench leta hai
- Grouped data ka mean (class marks se) aage ki class mein.

---

## Practice Questions

1. Find the mean of 7, 9, 11, 13, 15, 17.

2. Find the mean of 4.2, 3.8, 5.0, 4.6, 3.4.

3. Find the mean of the following distribution:

   | x | 1 | 2 | 3 | 4 | 5 | 6 |
   |---|---|---|---|---|---|---|
   | f | 3 | 5 | 8 | 6 | 2 | 1 |

4. The mean of 6 numbers is 15. Five of them are 10, 12, 18, 20 and 14. Find the sixth number.

5. The mean of the following distribution is 22. Find p.

   | x | 10 | 20 | 30 | 40 |
   |---|---|---|---|---|
   | f | 5 | 8 | p | 2 |

6. The mean of 25 observations was found to be 36. Later it was found that 47 was misread as 74. Find the correct mean.

7. The mean of 5 numbers is 20.
   (a) If 3 is added to each number, what is the new mean?
   (b) If each number is multiplied by 2, what is the new mean?

8. Class A has 25 students with a mean score of 60. Class B has 35 students with a mean score of 72. Find the mean score of all 60 students together.

9. If the mean of y, y + 3, y + 6 and y + 9 is 10.5, find y.

10. State whether each statement is true or false. Give a reason.
    (a) The mean must always be one of the values in the data.
    (b) The sum of deviations of all values from their mean is zero.
    (c) A single very large value can change the mean a lot.

### Answers

1. Σx = 7 + 9 + 11 + 13 + 15 + 17 = 72, n = 6
   x̄ = 72 ÷ 6 = **12**

2. Σx = 4.2 + 3.8 + 5.0 + 4.6 + 3.4 = 21.0, n = 5
   x̄ = 21.0 ÷ 5 = **4.2**

3. fx column: 3, 10, 24, 24, 10, 6
   Σf = 3 + 5 + 8 + 6 + 2 + 1 = 25
   Σfx = 3 + 10 + 24 + 24 + 10 + 6 = 77
   x̄ = 77 ÷ 25 = **3.08**

4. Kul jod = 15 × 6 = 90
   Paanch ka jod = 10 + 12 + 18 + 20 + 14 = 74
   Chhatha = 90 − 74 = **16**
   Jaanch: 90 ÷ 6 = 15 ✅

5. Σf = 15 + p, Σfx = 50 + 160 + 30p + 80 = 290 + 30p
   (290 + 30p) ÷ (15 + p) = 22
   290 + 30p = 330 + 22p
   8p = 40, **p = 5**
   Jaanch: Σf = 20, Σfx = 440, mean = 22 ✅

6. Galat jod = 36 × 25 = 900
   Sahi jod = 900 − 74 + 47 = 873
   Sahi mean = 873 ÷ 25 = **34.92**

7. (a) Sab mein 3 joda, to mean bhi 3 badhega: **23**
   (b) Sab ko 2 se guna kiya, to mean bhi 2 guna: **40**

8. A ka kul = 25 × 60 = 1500, B ka kul = 35 × 72 = 2520
   Milaa-jula mean = (1500 + 2520) ÷ 60 = 4020 ÷ 60 = **67**
   (Dhyan do: (60 + 72) ÷ 2 = 66 galat hota.)

9. Jod = 4y + 18
   (4y + 18) ÷ 4 = 10.5
   4y + 18 = 42, 4y = 24, **y = 6**
   Jaanch: 6, 9, 12, 15 ka jod 42, mean 10.5 ✅

10. (a) **False** ❌. Jaise 1, 2 ka mean 1.5 hai, jo data mein nahi.
    (b) **True** ✅. Mean se upar aur neeche wali doori hamesha barabar katti hai (see-saw balance).
    (c) **True** ✅. Outlier mean ko apni taraf kheench leta hai (pocket money wala example).

---

Mean ka sabse aasan matlab yaad rakho: **sab kuch ek jagah ikattha karo, aur barabar baant do.** Baaki saare formulas isi ek baat se nikalte hain.

**Aage kya?** Pocket money wale example mein humne dekha ki ek ameer dost ne mean ko bigaad diya. Topic 6 mein do aur tareeke seekhenge, **Median** (line mein beech wala) aur **Mode** (sabse zyada baar aane wala), jo aise data mein zyada sachchi tasveer dete hain.
