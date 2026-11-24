# Chapter: Arithmetic Progressions (Part 5)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [arithmetic-progressions-part4.md](arithmetic-progressions-part4.md) se aage chalti hai** (wahan Topic 4 mein Gauss ki trick se Sₙ ke dono formulas bane). Chapter ki shuruaat: [arithmetic-progressions.md](arithmetic-progressions.md). nth term ka formula: [arithmetic-progressions-part2.md](arithmetic-progressions-part2.md). Do shartein, do unknown: [arithmetic-progressions-part3.md](arithmetic-progressions-part3.md). Quadratic equation ka formula: [quadratic-equations-part4.md](../quadratic-equations/quadratic-equations-part4.md). Kahani ka story check: [quadratic-equations-part6.md](../quadratic-equations/quadratic-equations-part6.md). Compound interest ka alag hisaab: [compound-interest.md](../../../class9/maths/compound-interest/compound-interest.md).
> **Topics covered in this file:**
> 5. AP Ka Upyog: Aaj Ki Zindagi Mein Progression

---

# Topic 5: AP Ka Upyog: Aaj Ki Zindagi Mein Progression

Topic 4 mein hum **terms se sum** tak pahunche: a, d aur n se Sₙ = (n/2)[2a + (n − 1)d]. Is topic mein do naye kaam hain. Pehla: **ulta safar**, yaani sirf sum ka formula diya ho (Sₙ = kuch n ke roop mein) to uske andar chhupa AP bahar nikalna: pehla term, common difference, koi bhi term. Doosra: ab tak ke saare auzaar (aₙ, Sₙ, quadratic, story check) ek **chaar kadam ki method** mein jodkar asli zindagi ke sawaal hal karna: salary, kisht, auditorium ki seats, aur ghadi ki ghantiyan.

---

## Trilok aur auditorium ka running total

Trilok ke school mein annual day ki taiyaari chal rahi hai. Auditorium ke gate par teacher ma'am ne ek board laga rakha hai, jis par ticket wale uncle ne apni suvidha ke liye likha hai:

> **"Pehli n rows mein kul seats = n² + 13n"**

Uncle ke register mein sirf **running total** likhe hain, yaani "ab tak kul kitni seats". Teacher ma'am ne Trilok se poochha, "Is board se bata sakte ho ki **10-vi row** mein akeli kitni seats hain? Aur pehli row mein kitni? Saari rows ek-ek karke ginne ki ijaazat nahi."

Trilok ne n = 1 rakha: 1 + 13 = 14. Pehli row mein 14 seats. n = 2 rakha: 4 + 26 = 30. Pehli do rows mein 30, to doosri row mein 30 − 14 = 16. n = 3: 9 + 39 = 48, to teesri row mein 48 − 30 = 18. Trilok ko ek pattern dikh gaya: **agle total se pichhla total ghatao, to wahi row ki seats mil jaati hain.** Aaj hum isi chhoti si baat ko pakka formula banayenge, aur use asli zindagi ke sawaalon par chalayenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Sₙ₋₁** | Pehle (n − 1) terms ka sum, yaani Sₙ se **ek term pehle** ka running total. | S₁₀ ke liye Sₙ₋₁ = S₉ |
| **Khaali sum (S₀)** | Jab koi term jodna hi nahi, to sum 0 hota hai. Isliye S₀ = 0 maana jaata hai. | Pehle 0 rows mein 0 seats |
| **Kisht (instalment)** | Karz ya udhaar ko ek saath na chukakar har mahine thoda-thoda lautana. Har baar jo rakam di jaati hai, wo ek kisht hai. | 1500, 1750, 2000, ... rupaye ki kishten |
| **Beech ke means (inserted means)** | Do diye hue numbers a aur b ke beech aise m numbers rakhna ki poori list AP ban jaaye. Beech wale ye numbers "arithmetic means" hain (Topic 3 ka arithmetic mean). | 7 aur 57 ke beech 17, 27, 37, 47 |
| **Chaar kadam ki method** | Word problem ke liye chaar kadam: pehchano, chuno, hisaab, story check. | Figure 5.3 |

---

## Pichhle topics se yaad

| Kahan | Kya mila | Is topic mein kahan kaam aayega |
|---|---|---|
| [Topic 4](arithmetic-progressions-part4.md) | Sₙ = (n/2)(a + l) aur Sₙ = (n/2)[2a + (n − 1)d]; Sₘ − Sₖ; Sₙ = (d/2)n² + (a − d/2)n | Part A, C, D: formulas ka istemal, aur "constant term nahi" wali baat |
| [Topic 2](arithmetic-progressions-part2.md) | aₙ = a + (n − 1)d aur n = (l − a)/d + 1 | Part D: term aur ginti |
| [Topic 3](arithmetic-progressions-part3.md) | Do shartein dekar a aur d dhundna (ghatakar) | Part D: do unknown wala sawaal |
| [Quadratic equations, Topic 4](../quadratic-equations/quadratic-equations-part4.md) | Quadratic formula, D = b² − 4ac | Part D: kisht aur seats ki ginti |
| [Quadratic equations, Topic 6](../quadratic-equations/quadratic-equations-part6.md) | Story check: jawab kahani mein baithe to hi sahi | Har word problem ke aakhir mein |

---

## Part A: aₙ = Sₙ − Sₙ₋₁

Sₙ ka matlab hi hai "pehle n terms ka jod":
Sₙ = a₁ + a₂ + ... + aₙ₋₁ + aₙ
Sₙ₋₁ = a₁ + a₂ + ... + aₙ₋₁

Dono mein pehle (n − 1) terms ek jaise hain. Pehle sum se doosra ghatao to **sirf aakhri term bachta hai**:

**aₙ = Sₙ − Sₙ₋₁**  (n = 2, 3, 4, ...)

Pehle term ke liye pichhla sum hai hi nahi: pehle 1 term ka sum S₁ sirf a₁ hai. Ise ek line mein kahte hain **a₁ = S₁**. (Ya yun: S₀ = 0, to a₁ = S₁ − S₀ = S₁. Dhyan: ye S₀ = 0 "kuch jodna hi nahi" wale matlab se aata hai, kisi formula mein n = 0 rakhne se nahi. Part C aur Galti 2 mein iska asar dikhega.)

```
 row 1   ##############           14
 row 2   ################         16
 row 3   ##################       18
 row 4   ####################     20
 row 5   **********************   22
```

> **Figure 5.1** – Trilok ke auditorium ki pehli paanch rows: # wali chaar rows milkar S₄ = 14 + 16 + 18 + 20 = 68 seats hain, aur * wali paanchvi row ke saath S₅ = 90. Isliye paanchvi row akeli a₅ = S₅ − S₄ = 90 − 68 = 22 seats ki hai.

Ye relation sirf AP ke liye nahi, **kisi bhi sequence** ke liye sach hai, kyunki Sₙ ki paribhasha hi "pehle n terms ka jod" hai. AP hai ya nahi, ye alag se dekhna padta hai (Part C).

### Trilok ka jawab

Board par Sₙ = n² + 13n hai. Dasvi row: S₁₀ = 100 + 130 = 230 aur S₉ = 81 + 117 = 198, to a₁₀ = 230 − 198 = **32 seats.** Pehli row: a₁ = S₁ = 1 + 13 = **14.** Aur har row pichhli se 2 zyada thi (14, 16, 18), to d = 2.
**Jaanch:** doosra tareeka, AP ke formula se: a₁₀ = a + 9d = 14 + 18 = 32 ✅.

---

## Part B: Sₙ ka formula do, AP nikaalo

Sₙ ek expression hai n ki. Sₙ₋₁ nikalne ke liye **har n ki jagah (n − 1)** likho, phir ghatao.

### Example 1: Sₙ = 4n² − n

Pehle term: a₁ = S₁ = 4 − 1 = 3. S₂ = 16 − 2 = 14, to a₂ = 14 − 3 = 11. Common difference d = 11 − 3 = 8.
Ab aₙ ka poora formula. Sₙ₋₁ = 4(n − 1)² − (n − 1) = 4n² − 8n + 4 − n + 1 = 4n² − 9n + 5. To
aₙ = Sₙ − Sₙ₋₁ = (4n² − n) − (4n² − 9n + 5) = **8n − 5.**
n = 1 rakhne par 3 aata hai, jo a₁ se milta hai, to ye formula pehle term par bhi chalta hai. Dasvaan term: a₁₀ = 80 − 5 = **75.**

```
   n   kul-ab-tak   pichhla-total   us-term-ka-size
 ------------------------------------------------
   1            3               0                 3
   2           14               3                11
   3           33              14                19
   4           60              33                27
   5           95              60                35
   6          138              95                43
```

> **Figure 5.2** – Sₙ = 4n² − n ke pehle chhe running totals (kul-ab-tak = Sₙ, pichhla-total = Sₙ₋₁) aur unke farak aₙ = Sₙ − Sₙ₋₁. Aakhri column ke terms 3, 11, 19, 27, 35, 43 mein har baar 8 badhta hai, to ye AP hai jiska a = 3 aur d = 8.

**Jaanch:** S₃ ko AP ke terms jodkar dekho: 3 + 11 + 19 = 33, aur formula 4 × 9 − 3 = 33 ✅. Aur a₁₀ doosre tareeke se: a + 9d = 3 + 72 = 75 ✅.

### Example 2: fraction wala Sₙ

Sₙ = n²/2 + 4n. a₁ = S₁ = 1/2 + 4 = 9/2. S₂ = 2 + 8 = 10, to a₂ = 10 − 9/2 = 11/2, aur d = 1.
Sₙ₋₁ = (n − 1)²/2 + 4(n − 1) = n²/2 − n + 1/2 + 4n − 4 = n²/2 + 3n − 7/2. To aₙ = (n²/2 + 4n) − (n²/2 + 3n − 7/2) = **n + 7/2.** (n = 1 par 9/2 ✓.)
Ab ek sawaal: **kaunsa term 81/2 = 40.5 hai?** n + 7/2 = 81/2, to n = 37. **Story check:** 37 poora aur positive hai, to **37-wa term.** Aur kya 20 is AP ka term hai? n + 7/2 = 20 se n = 16.5, jo term ki position nahi ho sakti, to **20 term nahi hai.**
**Jaanch:** a₃₇ = a + 36d = 9/2 + 36 = 81/2 ✅. Aur S₃ = 9/2 + 11/2 + 13/2 = 33/2, formula se 9/2 + 12 = 33/2 ✅.

---

## Part C: kya Sₙ kisi AP ka sum hai?

Topic 4 (Part I) mein dekha tha ki AP ka Sₙ ek **quadratic polynomial hai jisme constant term nahi.** Ulta bhi sach hai. Maan lo Sₙ = An² + Bn (A ≠ 0). Tab
Sₙ₋₁ = A(n − 1)² + B(n − 1) = An² − 2An + A + Bn − B,
aₙ = Sₙ − Sₙ₋₁ = **2An − A + B.**
Ye n mein **linear** hai (Topic 2 ka aₙ = dn + (a − d) jaisa), aur aₙ − aₙ₋₁ = 2A har jagah ek hi number hai. To terms ek AP hain jiska **d = 2A**. Aur a₁ = S₁ = A + B, jo 2An − A + B mein n = 1 rakhne se bhi aata hai, kyunki Sₙ mein koi constant nahi hai (n = 0 par Sₙ = 0).

**Constant term ho to?** Maan lo Sₙ = An² + Bn + C aur C ≠ 0. n ≥ 2 ke liye ghatane par C kat jaata hai (dono Sₙ aur Sₙ₋₁ mein hai), to wahi aₙ = 2An − A + B milta hai, aur a₂, a₃, a₄, ... ek AP hain jiska d = 2A. Par pehla term a₁ = S₁ = A + B + C hai, jo "line" 2An − A + B ke n = 1 wale mulya A + B se C zyada hai. Isliye a₂ − a₁ = 2A − C hota hai, 2A nahi. **Pura sequence AP tab hi hai jab C = 0.**

**Seedhi jaanch (a₁, a₂, a₃ se):** quadratic Sₙ ke liye a₂ − a₁ aur a₃ − a₂ barabar nikle to AP hai, nahi to nahi. (Kyunki a₃ − a₂ to hamesha 2A hota hai.)

### Example 3: Sₙ = 6n² − 5n

Ye An² + Bn jaisa hai (A = 6, B = −5), constant nahi. a₁ = S₁ = 1. S₂ = 24 − 10 = 14, a₂ = 13. S₃ = 54 − 15 = 39, a₃ = 25. Farak 12 aur 12: AP hai, d = 12 = 2A. aₙ = 2An − A + B = 12n − 11. Bees-wa term: a₂₀ = 240 − 11 = **229.**
**Jaanch:** S₃ = 1 + 13 + 25 = 39 ✅, aur a₂₀ = a + 19d = 1 + 228 = 229 ✅.

---

## Part D: asli zindagi: chaar kadam ki method

```
 KADAM 1  Pehchano      a, d aur n (ya aakhri term l) kya diye hain?
             v
 KADAM 2  Chuno         ek term chahiye to aₙ; jod chahiye to Sₙ ((1) ya (2))
             v
 KADAM 3  Hisaab        formula mein rakho; n dhundna ho to equation hal karo
             v
 KADAM 4  Story check   n poora aur positive? rupaye, seats, ginti sahi?
```

> **Figure 5.3** – Har word problem ke chaar kadam: pehchano, chuno, hisaab, story check. Teesre kadam par n ki quadratic aaye to dono jawab aate hain, aur chauthe kadam par kahani decide karti hai ki kaun sa rahega.

### Example 4: auditorium: kul seats diye hain, rows kitni?

Trilok ke board ke hisaab se pehli row mein 14 seats hain aur har row mein 2 zyada. Auditorium mein kul 1148 seats hain. Rows kitni hain aur aakhri row mein kitni seats?
**Kadam 1:** a = 14, d = 2, Sₙ = 1148. **Kadam 2:** Sₙ chahiye aur n unknown hai: (2). **Kadam 3:** Sₙ = (n/2)[28 + 2(n − 1)] = (n/2)(2n + 26) = n² + 13n (wahi board wala formula!). n² + 13n − 1148 = 0. D = 169 + 4592 = 4761 = 69². n = (−13 ± 69)/2, to n = 28 ya n = −41.
**Story check:** −41 rows ho nahi sakti, reject. **28 rows.** Aakhri row: a₂₈ = 14 + 27 × 2 = **68 seats.**
**Jaanch:** doosra formula (1): S₂₈ = (28/2)(14 + 68) = 14 × 82 = 1148 ✅.

### Example 5: salary

Trilok ke Papa ki nayi naukri mein pehle saal ki monthly salary ₹28,000 hai, aur har saal ₹1,200 ka increment milta hai. (a) 9-wein saal mein monthly salary kitni? (b) kis saal monthly salary ₹46,000 hogi? (c) pehle 10 saalon mein kul kitna paisa milega?
**Kadam 1:** monthly salary har saal ek fixed qadam se badhti hai, to a = 28000, d = 1200. **Kadam 2 aur 3:**
(a) a₉ = 28000 + 8 × 1200 = **₹37,600.**
(b) 28000 + (n − 1) × 1200 = 46000, (n − 1) × 1200 = 18000, n − 1 = 15, n = 16. **Story check:** 16 poora aur positive: **16-wein saal.**
(c) 10 saalon ki monthly salaries ka sum S₁₀ = (10/2)[56000 + 9 × 1200] = 5 × 66800 = 334000. Har saal 12 mahine ek hi monthly salary milti hai, to kul = 12 × 334000 = **₹40,08,000.**
**Jaanch:** a₁₀ = 28000 + 10800 = 38800, (1): S₁₀ = 5 × (28000 + 38800) = 5 × 66800 = 334000 ✅. (a) ke liye: 9-wein saal tak 8 increment lage, 8 × 1200 = 9600, aur 28000 + 9600 = 37600 ✅.

### Example 6: kishten badhti hui

Ek note: asli bank karz par byaaj leta hai, aur uska hisaab alag hota hai (Class 9 ka compound interest). Hum yahan sirf **bina byaaj ka udhaar** lete hain, taaki maths saaf dikhe.
Papa ke ek dost ne ₹54,000 bina byaaj ke diye. Papa pehle mahine ₹1,500 lautate hain, aur har agle mahine pichhle se ₹250 zyada. Kitne mahine mein udhaar chukega, aur aakhri kisht kitni?
**Kadam 1:** a = 1500, d = 250, Sₙ = 54000. **Kadam 3:** Sₙ = (n/2)[3000 + 250(n − 1)] = (n/2)(2750 + 250n) = 125n² + 1375n = 54000. 125 se divide: n² + 11n − 432 = 0. D = 121 + 1728 = 1849 = 43². n = (−11 ± 43)/2, to n = 16 ya n = −27.
**Story check:** −27 mahine nahi ho sakte. **16 mahine.** Aakhri kisht a₁₆ = 1500 + 15 × 250 = **₹5,250.**
**Jaanch:** (1): S₁₆ = 8 × (1500 + 5250) = 8 × 6750 = 54000 ✅.

### Example 7: kishten ghatti hui

Mummy ne apne ek rishtedar se ₹36,000 bina byaaj ke liye. Pehli kisht ₹3,000 hai, aur har agli kisht pichhli se ₹100 kam. Kitni kishten, aur aakhri kisht kitni?
a = 3000, d = −100. Sₙ = (n/2)[6000 − 100(n − 1)] = (n/2)(6100 − 100n) = 3050n − 50n² = 36000. 50n² − 3050n + 36000 = 0, 50 se divide: n² − 61n + 720 = 0. D = 3721 − 2880 = 841 = 29². n = (61 ± 29)/2, to **n = 16 ya n = 45.**
**Story check:** kisht ka formula aₙ = 3100 − 100n hai. n = 16 par 1500, theek. n = 31 par kisht 0 ho jaati hai, aur n = 45 par −1400 aati, jo "rupaye wapas lena" hota hai, kahani mein nahi baithta. To **45 reject, 16 kishten**, aakhri kisht **₹1,500.** (Maths ke dono jawab AP ke liye sahi hain, par kahani ek hi ko maanti hai: Topic 4 ka Example 10 jaisa.)
**Jaanch:** (1): S₁₆ = 8 × (3000 + 1500) = 36000 ✅.

```
 mahina   kisht  ab tak diya   baaki
 ------------------------------------
      1    3000         3000   33000
      2    2900         5900   30100
      3    2800         8700   27300
      4    2700        11400   24600
      5    2600        14000   22000
     ..      ..           ..      ..
     15    1600        34500    1500
     16    1500        36000       0
```

> **Figure 5.4** – Example 7 ka repayment table. Kisht har mahine 100 kam hoti hai, "ab tak diya" mein kishten judti jaati hain (jaise 3000 + 2900 = 5900), aur "baaki" 36000 se ghatkar 16-wein mahine par theek 0 ho jaata hai. Table ki aakhri row S₁₆ = 36000 ki jaanch bhi hai.

### Example 8: ghadi ki ghantiyan

Ek diwaar ghadi har ghante utni baar bajti hai jitna ghante ka number hai: 1 baje ek baar, 2 baje do baar, ..., 12 baje barah baar. (a) 12 ghanton mein kul kitni ghantiyan? (b) agar wo har aadhe ghante par ek baar bhi bajti hai, to 12 ghante mein kul kitni?
(a) Ghantiyon ki ginti 1, 2, 3, ..., 12 ek AP hai (a = 1, d = 1, n = 12). S₁₂ = (12/2)(1 + 12) = 6 × 13 = **78.**
(b) Aadhe ghante wali 12 baar ek-ek: 12 aur. Kul 78 + 12 = **90.** Poore din (24 ghante) mein is hisaab se 2 × 90 = **180.**
**Jaanch:** Gauss jodi: (1 + 12), (2 + 11), ..., (6 + 7): 6 jodiyan, har ek 13, to 6 × 13 = 78 ✅.

### Example 9: lakdi ke logs ka dher

Ek godown mein logs aise lage hain: sabse neeche wali row mein 21 logs, aur har upar wali row mein ek log kam, aur sabse upar wali row mein 6 logs. Kul kitne logs, aur kitni rows?
a = 21, d = −1, l = 6. n = (l − a)/d + 1 = (6 − 21)/(−1) + 1 = 15 + 1 = 16 rows. (1): S₁₆ = 8 × (21 + 6) = **216 logs.**
**Story check:** 16 poori rows, aur 17-wi row mein 5 logs hote, jo hi nahi lagayi gayi: kahani theek.
**Jaanch:** doosra formula (2): 8 × [42 + 15 × (−1)] = 8 × 27 = 216 ✅.

### Example 10: beech ke arithmetic means

Ek rope-skipping practice mein pehle din 7 jumps hain aur chhathe din 57, aur beech ke chaar dinon mein jumps ek-ek fixed qadam se badhte hain. Beech ke din kitne jumps?
Yahan a = 7 aur b = 57 ke beech **m = 4 means** rakhne hain. Poori list mein m + 2 = 6 numbers hain, to pehle se aakhri tak d **(m + 1) = 5 baar** judta hai: 7 + 5d = 57, **d = (b − a)/(m + 1) = 50/5 = 10.** Means: 17, 27, 37, 47.

```
 7       17      27      37      47      57
 o       *       *       *       *       o
 a       m1      m2      m3      m4      b
```

> **Figure 5.5** – a = 7 aur b = 57 ke beech chaar means (*): paanch barabar qadam, har ek d = 10.

**Jaanch:** 7 + 5 × 10 = 57 ✅. Ek rochak baat: chaaron means ka sum 17 + 27 + 37 + 47 = 128 hai, aur 4 × (7 + 57)/2 = 4 × 32 = 128 ✅ (AP mein beech ke terms ka average a aur b ke average jaisa hi hota hai). Ye topic mein ek extra hai: "inserted means" ka naam kuch hi sawaalon mein aata hai.

### Example 11: do unknown, do shartein

Trilok ki Didi ek fund mein har hafte paise daalti hai: pehle hafte kuch rakam, aur har hafte pichhle se utni hi zyada. 7-wein hafte mein usne ₹390 daale, aur pehle 15 hafton mein kul ₹6,450. Pehle hafte ki rakam a aur har hafte ka badhav d kitna?
a₇ = a + 6d = 390  ... (i)
S₁₅ = (15/2)(2a + 14d) = 15(a + 7d) = 6450, to a + 7d = 430  ... (ii)
(ii) − (i): d = 40. (i) se a = 390 − 240 = 150. **Pehle hafte ₹150, har hafte ₹40 zyada.**
**Story check:** a aur d dono positive rupaye hain, theek.
**Jaanch:** a₇ = 150 + 240 = 390 ✅. a₁₅ = 150 + 560 = 710 aur (1): (15/2)(150 + 710) = 15 × 430 = 6450 ✅.

---

## Aam galtiyan (bachke rehna)

**Galti 1: "Sₙ polynomial hai, to sequence AP hi hoga"**

Sawaal: Sₙ = n² + 1 diya hai. Ek bachche ne kaha, "Ye quadratic hai, to AP hoga, d = 2." **Ulta udaharan:** S₁ = 2, S₂ = 5, S₃ = 10, S₄ = 17. To a₁ = 2, a₂ = 5 − 2 = 3, a₃ = 10 − 5 = 5, a₄ = 17 − 10 = 7. Sequence 2, 3, 5, 7, ...: farak 1, 2, 2, ... barabar nahi, to **AP nahi.**
Kyun? "Quadratic" kaafi nahi hai, **constant term nahi hona chahiye** (Part C). Yahan constant 1 hai: a₂, a₃, a₄, ... AP hain (d = 2), par a₁ line se bahar hai, kyunki a₁ = S₁ = 2, jabki line 2n − 1 n = 1 par 1 deti. Sahi: Sₙ = An² + Bn jaisa ho tabhi AP; warna a₁, a₂, a₃ se jaanch lo.
**Jaanch:** terms sahi hain, kyunki 2 + 3 + 5 + 7 = 17 aur formula se S₄ = 16 + 1 = 17 ✅. Par 2, 3, 5, 7 mein farak 1, 2, 2 hain, barabar nahi.

**Galti 2: a₁ = S₁ − S₀ likhna jab formula se S₀ ≠ 0 aaye**

Sawaal: Sₙ = 3n² + n + 6. Ek bachche ne a₁ = S₁ − S₀ likha. Formula se S₁ = 10 aur S₀ = 6, to a₁ = 4. Phir a₂ = S₂ − S₁ = 20 − 10 = 10 aur a₃ = S₃ − S₂ = 36 − 20 = 16, aur usne kaha "4, 10, 16 AP hai, d = 6." **Ulta udaharan:** pehla term akela hi pehla sum hai: S₁ = a₁, to **a₁ = 10**, 4 nahi. Asli terms: 10, 10, 16, 22, ... (farak 0, 6, 6), jo AP nahi.
Kyun? S₀ = 0 "kuch jodna nahi" ka matlab hai. Formula mein n = 0 rakhne par jo 6 aaya, wo sirf constant term ka asar hai, kisi asli sum ka nahi. Isliye **a₁ hamesha S₁ se lo, S₁ − S₀ se nahi.**
**Jaanch:** sach mein pehle do terms ka sum 20 hona chahiye: 10 + 10 = 20 ✅, jabki bachche ke "4, 10" ka sum 14 hai, jo S₂ = 20 se nahi milta.

---

## Quick Recap

- **aₙ = Sₙ − Sₙ₋₁** (n ≥ 2) aur **a₁ = S₁**: running total se term. Ye kisi bhi sequence ke liye sach hai.
- Sₙ₋₁ ke liye Sₙ mein har n ki jagah (n − 1) likho, phir ghatao.
- Sₙ = An² + Bn (koi constant nahi) ho to sequence AP hai, **d = 2A**, **a₁ = A + B**. Constant term ho to a₁ line se bahar hota hai: a₁, a₂, a₃ se jaancho.
- **Chaar kadam:** pehchano (a, d, n), chuno (aₙ ya Sₙ), hisaab, **story check.**
- Salary, kisht, seats, logs, ghadi ki ghantiyan: sab "har baar ek fixed qadam" wali kahaniyan hain, to AP.
- Kisht bina byaaj ke maanne par AP hai; asli karz mein byaaj ka alag hisaab hota hai.
- Do diye hue numbers ke beech m means: **d = (b − a)/(m + 1)**, kyunki m + 2 terms mein d (m + 1) baar judta hai.
- **Galti 1:** quadratic Sₙ kaafi nahi, constant term nahi hona chahiye (Sₙ = n² + 1 AP nahi deta).
- **Galti 2:** a₁ = S₁ lo, S₁ − S₀ nahi (formula ka S₀ asli sum nahi hota agar constant ho).

---

## Practice Questions

1. The sum of the first n terms of a sequence is Sₙ = 5n² + 3n. Find a₁, a₂, the common difference d, the formula for aₙ, and a₁₂.

2. The sum of the first n terms of an AP is Sₙ = 30n − 4n². (a) Find the AP's first term, d and aₙ. (b) For which value of n is Sₙ = 36? Give your answer after a story check. (c) What is the largest value Sₙ can take, and for which n?

3. The sum of the first n terms of a sequence is Sₙ = (n² + 9n)/4. Show that the sequence is an AP and find its first term, its common difference and its 31st term.

4. The sum of the first n terms of a sequence is Sₙ = 4n² + 3n + 2. Find the first four terms and decide, with a reason, whether the sequence is an AP. From which term onwards is it an AP, and what is its d?

5. A lecture hall has 26 rows. The first row has 17 seats and each next row has 3 more than the row before it. How many seats are in the last row, and how many in the whole hall? Can any row have exactly 60 seats?

6. A company offers a starting monthly salary of ₹36,000 with an increment of ₹2,500 every year. (a) What is the monthly salary in the 8th year? (b) In which year will it be exactly ₹56,000? (c) Will it ever be exactly ₹60,000? (d) How much will a person earn in the first 6 years (12 months at each year's monthly salary)?

7. An interest-free loan of ₹69,000 is repaid in monthly instalments: the first is ₹1,800 and every instalment is ₹400 more than the one before. How many instalments are needed, and how large is the last one?

8. An interest-free loan is repaid in 15 monthly instalments: the first is ₹2,400 and each next one is ₹80 less than the previous one. Find the loan amount, the 9th instalment and the last instalment.

9. A hall clock strikes the hour number at each hour (for example 4 times at 4 o'clock) and once at every half hour. How many strikes are there from 4:00 to 11:30, both included?

10. Pipes are stacked so that the bottom row has 24 pipes and every row above has one pipe fewer. (a) If the top row has 7 pipes, how many rows and how many pipes are there? (b) If the stack were continued all the way to a single pipe on top, how many pipes would there be in all?

11. Insert 5 arithmetic means between −20 and 58. Write the full AP, and show that the sum of the five means equals 5 times the average of −20 and 58.

12. In the seating of a stadium stand, the 5th row has 57 seats and the first 12 rows together have 828 seats. Each row has the same number of extra seats than the row before. Find the number of seats in the first row, the increase per row, and the number of seats in the 20th row.

13. State True or False, with a reason: (a) If Sₙ = 7n² + 3n, the sequence is an AP with d = 14. (b) If Sₙ = 5n² + 4n + 1, the sequence is an AP. (c) a₁ = S₁ for every sequence. (d) To insert 5 arithmetic means between p and q, we take d = (q − p)/5. (e) S₁₀ − S₉ is the 10th term.

### Answers

1. a₁ = S₁ = 5 + 3 = **8.** S₂ = 20 + 6 = 26, to a₂ = 26 − 8 = **18**, d = **10.** Sₙ₋₁ = 5(n − 1)² + 3(n − 1) = 5n² − 7n + 2, to aₙ = (5n² + 3n) − (5n² − 7n + 2) = **10n − 2.** a₁₂ = 120 − 2 = **118.** Jaanch: a₁ + 11d = 8 + 110 = 118 ✅. Aur S₃ = 45 + 9 = 54, jabki 8 + 18 + 28 = 54 ✅.

2. (a) a₁ = S₁ = 30 − 4 = **26.** S₂ = 60 − 16 = 44, a₂ = 18, d = **−8.** Sₙ₋₁ = 30(n − 1) − 4(n − 1)² = −4n² + 38n − 34, to aₙ = (30n − 4n²) − (−4n² + 38n − 34) = **34 − 8n.** (n = 1 par 26 ✓.)
   (b) 30n − 4n² = 36, to 4n² − 30n + 36 = 0, aur 2 se divide: 2n² − 15n + 18 = 0. D = 225 − 144 = 81, n = (15 ± 9)/4, to **n = 6 ya n = 3/2.** **Story check:** n = 3/2 terms ki ginti nahi ho sakti (poora number chahiye), reject. **n = 6.**
   (c) Terms 26, 18, 10, 2, −6, ... hain: a₄ = 2 positive, a₅ = −6 negative. To sum **n = 4 par sabse bada: S₄ = 120 − 64 = 56.**
   Jaanch: S₆ = 26 + 18 + 10 + 2 − 6 − 14 = 36 ✅, aur S₄ = 26 + 18 + 10 + 2 = 56 ✅.

3. Sₙ = (1/4)n² + (9/4)n hai: An² + Bn jaisa, A = 1/4, B = 9/4, koi constant nahi. **Haan, AP hai**, d = 2A = **1/2.** a₁ = S₁ = 10/4 = **5/2.** aₙ = 2An − A + B = n/2 + 2 = (n + 4)/2, to a₃₁ = 35/2 = **17.5.** Jaanch: a₁ + 30d = 5/2 + 15 = 35/2 ✅. Aur S₂ = (4 + 18)/4 = 11/2, jabki 5/2 + 3 = 11/2 ✅.

4. S₁ = 9, S₂ = 16 + 6 + 2 = 24, S₃ = 36 + 9 + 2 = 47, S₄ = 64 + 12 + 2 = 78. To terms: a₁ = **9**, a₂ = 24 − 9 = **15**, a₃ = 47 − 24 = **23**, a₄ = 78 − 47 = **31.** Farak 6, 8, 8: barabar nahi, to **AP nahi hai.** Kaaran: Sₙ mein constant term 2 hai (Part C: a₂ − a₁ = 2A − C = 8 − 2 = 6). **a₂ se aage** (15, 23, 31, ...) AP hai jiska **d = 8** (= 2A). Jaanch: S₃ = 9 + 15 + 23 = 47 ✅.

5. a = 17, d = 3, n = 26. a₂₆ = 17 + 25 × 3 = **92 seats.** (1): S₂₆ = 13 × (17 + 92) = 13 × 109 = **1417 seats.** Kya koi row mein exactly 60? 17 + 3(n − 1) = 60, 3(n − 1) = 43, n − 1 = 43/3, jo poora nahi: **story check** se **nahi** (rows ki seats 17, 20, ..., 59, 62, ... mein 60 aata hi nahi). Jaanch: (2): S₂₆ = 13 × [34 + 75] = 13 × 109 = 1417 ✅.

6. a = 36000, d = 2500. (a) a₈ = 36000 + 7 × 2500 = **₹53,500.** (b) 36000 + (n − 1) × 2500 = 56000, n − 1 = 8, **n = 9**, to 9-wein saal mein. (c) (n − 1) × 2500 = 24000, n − 1 = 9.6, n = 10.6: **story check** se **nahi**, kyunki 10-wein saal mein ₹58,500 aur 11-wein mein ₹61,000 hoga, ₹60,000 beech mein chhoot jaata hai. (d) S₆ (monthly salaries ka sum) = 3 × [72000 + 5 × 2500] = 3 × 84500 = 253500, to kul = 12 × 253500 = **₹30,42,000.** Jaanch: 36000 + 38500 + 41000 + 43500 + 46000 + 48500 = 253500 ✅.

7. a = 1800, d = 400. Sₙ = (n/2)[3600 + 400(n − 1)] = (n/2)(3200 + 400n) = 200n² + 1600n = 69000. 200 se divide: n² + 8n − 345 = 0. D = 64 + 1380 = 1444 = 38². n = (−8 ± 38)/2, to n = 15 ya n = −23. **Story check:** negative instalments nahi, to **15 instalments.** Aakhri: a₁₅ = 1800 + 14 × 400 = **₹7,400.** Jaanch: (1): S₁₅ = (15/2)(1800 + 7400) = 15 × 4600 = 69000 ✅.

8. a = 2400, d = −80, n = 15. Aakhri: a₁₅ = 2400 − 14 × 80 = **₹1,280.** Loan = S₁₅ = (15/2)(2400 + 1280) = (15/2) × 3680 = **₹27,600.** 9-wi kisht: a₉ = 2400 − 8 × 80 = **₹1,760.** Jaanch: (2): (15/2)[4800 − 14 × 80] = (15/2) × 3680 = 27600 ✅. **Story check:** kishten 2400 se 1280 tak ghatti hain, sab positive rupaye.

9. Ghante ki ghantiyan 4, 5, 6, ..., 11 (AP, a = 4, d = 1, n = 8): S₁₁ − S₃ = 66 − 6 = **60** (Topic 4 ka Sₘ − Sₖ). Aadhe ghante par ek-ek baar: 4:30, 5:30, ..., 11:30, yaani 8 baar. Kul **60 + 8 = 68 strikes.** Jaanch: 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 = 60 ✅ (aur (8/2)(4 + 11) = 4 × 15 = 60 ✅).

10. (a) a = 24, d = −1, l = 7. n = (7 − 24)/(−1) + 1 = 17 + 1 = **18 rows.** S₁₈ = 9 × (24 + 7) = **279 pipes.** (b) Ek pipe upar tak: l = 1, n = (1 − 24)/(−1) + 1 = 24 rows, S₂₄ = 12 × (24 + 1) = **300 pipes.** **Story check:** dono mein n poora aur positive. Jaanch: (a) (2): 9 × [48 − 17] = 9 × 31 = 279 ✅; (b) 24 × 25/2 = 300 ✅ (pehle 24 natural numbers ka sum).

11. m = 5 means, to d = (58 − (−20))/(5 + 1) = 78/6 = **13.** AP: **−20, −7, 6, 19, 32, 45, 58.** Means ka sum: −7 + 6 + 19 + 32 + 45 = **95.** (−20 + 58)/2 = 19, 5 × 19 = **95** ✅. Jaanch: −20 + 6 × 13 = 58 ✅.

12. a₅ = a + 4d = 57 ... (i). S₁₂ = 6(2a + 11d) = 828, to 2a + 11d = 138 ... (ii). (i) ko 2 se guna karo: 2a + 8d = 114 ... (iii). (ii) − (iii): 3d = 24, **d = 8**, aur (i) se a = 57 − 32 = **25.** a₂₀ = 25 + 19 × 8 = **177 seats.** Jaanch: a₁₂ = 25 + 88 = 113, (1): 6 × (25 + 113) = 6 × 138 = 828 ✅, aur a₅ = 25 + 32 = 57 ✅. **Story check:** a = 25 aur d = 8 dono sahi sizes ke hain.

13. (a) **True** ✅. 7n² + 3n mein koi constant nahi, A = 7, to d = 2A = 14 (a₁ = 10, a₂ = S₂ − S₁ = 34 − 10 = 24, farak 14 ✓). (b) **False** ❌. Constant term 1 hai: S₁ = 10, S₂ = 29, S₃ = 58, to a₁ = 10, a₂ = 19, a₃ = 29: farak 9 aur 10, barabar nahi, AP nahi. (c) **True** ✅. Pehle 1 term ka sum wahi term hai. (d) **False** ❌. 5 means ke saath 7 terms hain, to d (q − p)/6 hai (m + 1 = 6, 5 nahi). (e) **True** ✅. S₁₀ mein pehle 10 terms hain aur S₉ mein pehle 9, ghatane par 10-wa term bachta hai.

---

Shabaash! Ab tum kisi bhi running total se uska AP bahar nikaal sakte ho, ye bata sakte ho ki constant term ne sequence ko kab bigada, aur salary, kisht ya seats ke sawaal ko chaar kadam aur story check ke saath hal kar sakte ho.

**Aage kya?** Topic 6 mein poore chapter ka practice aur saar hai: ek method-chooser chart ki kaun sa formula kab, kuch mila-jule sawaal jisme Topic 1 se 5 tak sab kaam aayega, kuch aur galtiyan, aur chapter ka wrap-up.
