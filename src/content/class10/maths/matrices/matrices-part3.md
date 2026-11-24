# Chapter: Matrices (Part 3)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [matrices-part2.md](matrices-part2.md) se aage chalti hai** (wahan Topic 2 mein matrices ka barabar hona, jodna-ghatana aur number se guna dekha). Chapter ki shuruaat: [matrices.md](matrices.md).
> **Topics covered in this file:**
> 3. Matrix Ka Guna: Row Ko Column Se Milana

---

# Topic 3: Matrix Ka Guna: Row Ko Column Se Milana

Topic 1 mein humne seekha ki matrix numbers ki ek table hai, jiske rows aur columns hote hain, aur uska order "pehle rows, phir columns" padha jaata hai. Topic 2 mein humne do matrices ko jodna-ghatana seekha, jahan sab kuch **element-by-element** hota tha (same order ke matrices, har jagah ka number apni hi jagah ke number ke saath). Ab sawaal ye hai: kya do matrices ko **guna** bhi kiya ja sakta hai? Aur agar haan, to kaise? Jawab thoda chauka dene wala hai: yahan guna element-by-element **nahi** hota. Chalo, ek dukaan mein chalte hain.

---

## Orvi aur school-uniform ki dukaan

Naya session shuru hone wala hai. Orvi apni Mummy ke saath school-uniform ki dukaan par gayi hai. Dukaan ke uncle ne counter ke peeche ek chhota rate-list laga rakha hai, jisme sirf do cheezein hain: **shirt** aur **skirt**. Rate sau rupaye mein likha hai: shirt 4, skirt 5. Matlab shirt ₹400 ka aur skirt ₹500 ka.

Mummy ne kaha: "Orvi, hume 3 shirt aur 2 skirt chahiye. Bill kitna banega, zara batao." Orvi ne dimaag mein hisaab lagaya: "3 shirt ka 3 × 4 = 12, 2 skirt ka 2 × 5 = 10, aur dono ko jodo: 22." Yaani 22 sau rupaye, ₹2200.

Phir Orvi ne dekha ki uncle ke register mein rate ek **row** mein likhe the, aur Mummy ke order ki ginti ek **column** mein likhi ja sakti thi. Usne socha: "Ye to wahi table wali baat hai jo humne matrix mein seekhi thi. Kya meri bill-wali ginti ko row aur column ka guna kehkar likha ja sakta hai?" Jawab haan hai. Isi sochne se matrix ke guna ka rule nikalta hai.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Guna matrix (product)** | Do matrices ko row-by-column rule se guna karne par jo naya matrix banta hai | Rate wali row aur ginti wala column milkar ek bill banate hain |
| **Row-by-column rule** | Pehle matrix ki ek row ke numbers ko doosre matrix ke ek column ke numbers se ek-ek karke milao, har jodi ko guna karo aur sab guna jod do: yahi ek element banata hai | 4 × 3 + 5 × 2 = 22 |
| **Guna ban sakta hai (defined)** | Do matrices ka guna tab ban sakta hai jab pehle ke columns ki ginti doosre ke rows ki ginti ke barabar ho | 1 × 2 aur 2 × 1 ka guna banta hai, 1 × 2 aur 1 × 2 ka nahi |
| **Ones ka column** | Ek column jisme har jagah 1 likha ho: iska guna rows ke jod (total) deta hai | [1; 1; 1] ek 3 × 1 ones ka column hai |

---

## Topic 1 aur Topic 2 se yaad

- **Topic 1** ([matrices.md](matrices.md)): order ka matlab "pehle rows, phir columns". Aur a₁₂ ka matlab pehli row, doosra column.
- Is topic mein A, B, C jaise letters har example mein **naye matrices** ke naam hain.
- **Topic 2** ([matrices-part2.md](matrices-part2.md)): jodne aur ghatane ke liye order ka **barabar** hona zaroori tha. Guna ke liye order ka barabar hona zaroori nahi hai: yahan ek alag shart lagegi, jo hum Part B mein dekhenge.
- Guna ke jawab ke elements ko hum c₁₁, c₁₂, c₂₁, c₂₂ likhenge (pehla chhota number row, doosra column), bilkul Topic 1 ki tarah.

---

## Part A: Ek row aur ek column ka guna: ek single number

### Kyun: bill ek jodi-jodi ka sum hota hai

Orvi ka bill dekho. Har cheez ka rate usi cheez ki ginti se guna hota hai, aur phir sab jod diye jaate hain. Rate ki cheezein aur ginti ki cheezein **same kram mein** (pehle shirt, phir skirt) honi chahiye, warna shirt ka rate skirt ki ginti se mil jayega.

Isliye rate ko ek row mein aur ginti ko ek column mein likhte hain, aur dono ka guna aise karte hain:

**(pehle ka pehla × doosre ka pehla) + (pehle ka doosra × doosre ka doosra) + ...**

```
   shirt  skirt          ginti
 [   4      5   ]   ×   [  3  ]   shirt
                        [  2  ]   skirt

   4 × 3   +   5 × 2   =   12 + 10   =   22
```

> **Figure 3.1** – Rate ki row aur ginti ka column. Row ka pehla number (4) column ke pehle number (3) se milta hai, row ka doosra number (5) column ke doosre number (2) se. Dono guna jodne par ek single number 22 aata hai.

Ye 22 ek 1 × 1 matrix hai (ek row, ek column): [ 22 ]. Pehla matrix **1 × 2** tha (1 row, 2 columns) aur doosra **2 × 1** (2 rows, 1 column).

### Example 1: Orvi ka bill (1 × 2 guna 2 × 1)

Rate row R = [ 4  5 ] (shirt, skirt), ginti column Q = [ 3 ; 2 ] (3 shirt, 2 skirt). RQ nikalo.

**Hal:**
1. R ka pehla number 4, Q ka pehla number 3: 4 × 3 = 12.
2. R ka doosra number 5, Q ka doosra number 2: 5 × 2 = 10.
3. Jodo: 12 + 10 = 22.

RQ = [ 22 ].

**Jaanch:** ulta chalo. Shirt aur skirt ka bill alag nikalo: shirt 3 × 4 = 12 sau, skirt 2 × 5 = 10 sau. Total 22 sau ✅.

**Story check:** 5 kapde aur rate 4 aur 5 sau: bill 5 × 4 = 20 sau se zyada aur 5 × 5 = 25 sau se kam hona chahiye. 22 sau isi beech mein hai.

### Example 2: teen cheezein (1 × 3 guna 3 × 1)

Mummy ne socha ki ek tie bhi le lete hain. Rate row S = [ 4  5  1 ] (shirt, skirt, tie; sau rupaye mein), aur poore ghar ke bacchon ke liye ginti column T = [ 2 ; 1 ; 3 ] (2 shirt, 1 skirt, 3 tie). ST nikalo.

**Hal:**
1. Pehle numbers: 4 × 2 = 8.
2. Doosre numbers: 5 × 1 = 5.
3. Teesre numbers: 1 × 3 = 3.
4. Jodo: 8 + 5 + 3 = 16.

ST = [ 16 ]. Matlab ₹1600.

**Jaanch:** alag-alag: shirt 8 sau, skirt 5 sau, tie 3 sau. 8 + 5 + 3 = 16 sau ✅.

**Story check:** kul 6 kapde (2 + 1 + 3) aur har ka rate 1 se 5 sau ke beech, to total 6 sau se 30 sau ke beech hona chahiye. 16 sau isi beech mein hai.

**Ek zaroori baat:** jab row mein 3 numbers hon, column mein bhi theek 3 numbers hone chahiye. Do hote to teesre rate ka koi partner nahi bachta. Yahi baat ab ek shart ban jaayegi.

---

## Part B: Kab ho sakta hai guna, aur jawab ka order kya hoga?

### Kyun: har rate ko ek ginti chahiye

Part A mein dekha ki row ka har number column ke ek number se jodta hai. Row ke numbers ki ginti = pehle matrix ke **columns** ki ginti. Column ke numbers ki ginti = doosre matrix ke **rows** ki ginti. Jodi poori tabhi banegi jab dono ginti barabar hon.

**Shart:** pehle matrix ke columns = doosre matrix ke rows.

Agar ye shart poori ho, to jawab ka order bhi bina kuch kiye pata chal jaata hai. Jawab mein utni rows hongi jitni pehle matrix mein thi, aur utne columns jitne doosre matrix mein the.

```
        A           ×         B          =         AB
   (m × n)                 (n × p)              (m × p)
        \__________________/
         ye dono n barabar hone chahiye

   udaharan:   2 × 3        3 × 2        gives     2 × 2
```

> **Figure 3.2** – Guna ki shart aur jawab ka order. Beech wale dono numbers (n) milne chahiye, aur bahar wale (m aur p) jawab ka order batate hain.

Yahan m, n, p sirf ginti ke naam hain: m pehle matrix ki rows, n beech wali ginti, p doosre matrix ke columns.

### Example 3: order ka check (guna banta hai ya nahi?)

Neeche diye har jode ke liye batao ki guna ban sakta hai ya nahi, aur banta hai to jawab ka order kya hoga.

| Pehla matrix | Doosra matrix | Beech wali ginti | Guna banta hai? | Jawab ka order |
|---|---|---|---|---|
| 1 × 2 | 2 × 1 | 2 aur 2, barabar | Haan | 1 × 1 |
| 2 × 2 | 2 × 1 | 2 aur 2, barabar | Haan | 2 × 1 |
| 2 × 3 | 3 × 2 | 3 aur 3, barabar | Haan | 2 × 2 |
| 2 × 3 | 2 × 3 | 3 aur 2, alag | Nahi | koi nahi |
| 2 × 1 | 1 × 2 | 1 aur 1, barabar | Haan | 2 × 2 |

**Jaanch:** aakhri wala ek baar haath se karke dekho. A = [ 2 ; 3 ] (2 × 1) aur B = [ 4  5 ] (1 × 2). Row-by-column rule: A ki har row mein sirf ek number hai, B ke har column mein sirf ek number. To c₁₁ = 2 × 4 = 8, c₁₂ = 2 × 5 = 10, c₂₁ = 3 × 4 = 12, c₂₂ = 3 × 5 = 15. Jawab [ 8  10 ; 12  15 ], jo 2 × 2 hai ✅.

---

## Part C: Jab doosre matrix mein ek se zyada column hon

### Kyun: ek hi rate list, kai ginti

Orvi ke ghar mein hi nahi, uski do saheliyon ke ghar bhi usi dukaan se kapde le rahe hain. Ek hi rate list se ham kai orders ke bill ek saath nikaal sakte hain, agar har order ko ek alag **column** mein rakh den. Aur agar dukaan do hain, to har dukaan ki rate list ek alag **row** hogi.

### Example 4: do dukaan, ek order (2 × 2 guna 2 × 1)

Do dukaan ke rate (sau rupaye mein): pehli dukaan shirt 4, skirt 5; doosri dukaan shirt 3, skirt 6. Order wahi: 3 shirt, 2 skirt. Matrices:

A = [ 4  5 ; 3  6 ] (rows: dukaan 1, dukaan 2; columns: shirt, skirt) aur D = [ 3 ; 2 ].

Guna ki shart: A ke columns 2, D ke rows 2: barabar, to AD ban sakta hai. Order 2 × 1.

**Hal:**
1. Row 1 aur column: 4 × 3 + 5 × 2 = 12 + 10 = 22.
2. Row 2 aur column: 3 × 3 + 6 × 2 = 9 + 12 = 21.

```
 [ 4  5 ]   [ 3 ]     [ 4 × 3 + 5 × 2 ]     [ 22 ]
 [ 3  6 ] × [ 2 ]  =  [ 3 × 3 + 6 × 2 ]  =  [ 21 ]
```

> **Figure 3.3** – Har row apna ek hi element banati hai. Upar wali row (dukaan 1) pehla total deti hai, neeche wali row (dukaan 2) doosra.

AD = [ 22 ; 21 ].

**Jaanch:** pehli row ka matlab wahi hai jo Example 1 mein tha (4, 5 aur 3, 2): 22 ✅. Doosri dukaan: shirt 3 × 3 = 9, skirt 2 × 6 = 12, jod 21 ✅.

**Story check:** doosri dukaan ek sau rupaye sasti padi (₹2100, jabki pehli dukaan par ₹2200). Jawab ka order 2 × 1 bhi theek hai: 2 dukaan, har ek ka ek total.

### Example 5: do dukaan, do orders (2 × 2 guna 2 × 2)

Wahi do dukaan, A = [ 4  5 ; 3  6 ]. Orders ab do hain: pehla ghar 3 shirt aur 2 skirt, doosra ghar 1 shirt aur 4 skirt. Har order ek **column** hai:

B = [ 3  1 ; 2  4 ] (column 1: pehla ghar, column 2: doosra ghar). AB nikalo.

A ke columns 2, B ke rows 2: ban sakta hai. Order 2 × 2.

**Recipe (element-by-element):**

```
 [ 4  5 ]   [ 3  1 ]     [ c₁₁  c₁₂ ]
 [ 3  6 ] × [ 2  4 ]  =  [ c₂₁  c₂₂ ]

 c₁₁ = row 1 aur column 1 :  4 × 3 + 5 × 2 = 12 + 10 = 22
 c₁₂ = row 1 aur column 2 :  4 × 1 + 5 × 4 =  4 + 20 = 24
 c₂₁ = row 2 aur column 1 :  3 × 3 + 6 × 2 =  9 + 12 = 21
 c₂₂ = row 2 aur column 2 :  3 × 1 + 6 × 4 =  3 + 24 = 27
```

> **Figure 3.4** – Chaaron elements kaise bane. Naam ka pehla number batata hai ki pehle matrix ki kaun si row li gayi, doosra number batata hai ki doosre matrix ka kaun sa column. Jaise c₁₂ ke liye A ki row 1 aur B ka column 2.

AB:

```
 [ 22  24 ]
 [ 21  27 ]
```

> **Figure 3.5** – AB ka jawab. Row 1 dukaan 1 ke totals hain (pehle ghar ke 22, doosre ghar ke 24); row 2 dukaan 2 ke totals hain (21 aur 27).

**Jaanch:** c₂₂ dobara haath se: dukaan 2, doosra ghar. Shirt 3 × 1 = 3, skirt 6 × 4 = 24. 3 + 24 = 27 ✅. Aur pehla column (22 aur 21) wahi hai jo Example 4 mein AD mein aaya tha, kyunki B ka pehla column D hi tha ✅.

**Story check:** doosre ghar (1 shirt, 4 skirt) ka bill dono dukaan par 24 aur 27 sau hai: skirt zyada hai, aur skirt ka rate dukaan 2 par zyada (6 sau) hai, isliye dukaan 2 yahan mehngi hai. Pehle ghar par dukaan 2 sasti thi. Matlab koi ek dukaan har ghar ke liye sasti nahi: AB ne ye ek saath dikha diya.

---

## Part D: 2 × 3 guna 3 × 2: marks aur weights

### Kyun: guna sirf paise ka nahi, kisi bhi "weighted total" ka hai

Orvi ki class mein ma'am teen quizzes ke marks (10 mein) ko alag-alag weights se jodti hain: kabhi pehle quiz ko kam, aakhri ko zyada. Ye bhi wahi baat hai: marks = ginti, weight = rate.

### Example 6: do bacche, teen quiz, do weighting plans (2 × 3 guna 3 × 2)

Marks matrix M: 2 bacche (rows), 3 quiz (columns):

M = [ 8  6  9 ; 7  10  5 ].

Weights matrix W: 3 quiz (rows), 2 plans (columns). Plan 1 mein weights 2, 3, 5; plan 2 mein 1, 2, 3:

W = [ 2  1 ; 3  2 ; 5  3 ].

M 2 × 3 hai aur W 3 × 2, to beech wala 3 barabar hai: MW ban sakta hai, order 2 × 2.

```
 [ 8   6   9 ]   [ 2  1 ]     [ 79  47 ]
 [ 7  10   5 ] × [ 3  2 ]  =  [ 69  42 ]
                 [ 5  3 ]

 c₁₁ = 8 × 2 + 6 × 3 + 9 × 5 = 16 + 18 + 45 = 79
 c₁₂ = 8 × 1 + 6 × 2 + 9 × 3 =  8 + 12 + 27 = 47
 c₂₁ = 7 × 2 + 10 × 3 + 5 × 5 = 14 + 30 + 25 = 69
 c₂₂ = 7 × 1 + 10 × 2 + 5 × 3 =  7 + 20 + 15 = 42
```

> **Figure 3.6** – Teen quiz ke marks aur do weighting plans. Row 1 pehle bacche ke marks hain, column 1 plan 1 ke weights; dono milkar c₁₁ = 79 dete hain. Har element mein teen guna aate hain kyunki beech ki ginti 3 hai.

MW = [ 79  47 ; 69  42 ].

**Jaanch:** c₂₂ dobara: 7 × 1 + 10 × 2 + 5 × 3 = 42 ✅. Aur order 2 × 2: 2 bacche, 2 plans ✅.

**Story check:** plan 1 ke weights bade hain (2, 3, 5 ka jod 10; plan 2 ka 1 + 2 + 3 = 6), isliye plan 1 ke totals bade aaye (79 aur 69) aur plan 2 ke chhote (47 aur 42). Bacche 1 ne plan 1 mein 79, plan 2 mein 47: dono plan mein bacche 1 aage hai bacche 2 se (69 aur 42). Ye natija sach lagta hai, kyunki bacche 1 ke marks 8, 6, 9 aur bacche 2 ke 7, 10, 5, aur dono ke jod (23 aur 22) lagbhag barabar hain.

---

## Part E: Ones ka column: sab ka total ek saath

### Kyun: 1 se guna karne par kuch nahi badalta, bas jod bacha rehta hai

Agar column ka har number 1 ho, to row ka har number 1 se guna hoga (kuch nahi badlega) aur phir sab jod diye jaayenge. Yaani ones ka column row ka sum nikal deta hai.

### Example 7: har class ke kul kapde (3 ones ka column)

Dukaan ke register mein do classes ke order hain. Unhe 2 × 3 matrix N mein likho: rows do classes, columns shirt, skirt, tie ki ginti:

N = [ 12  9  7 ; 6  11  8 ].

(a) Har class ke kul kapde: N ko 3 × 1 ones ka column U = [ 1 ; 1 ; 1 ] se guna karo. Order: 2 × 3 guna 3 × 1 = 2 × 1.

NU = [ 12 + 9 + 7 ; 6 + 11 + 8 ] = [ 28 ; 25 ].

(b) Har cheez ke kul pieces (dono classes mila kar): ones ki **row** V = [ 1  1 ] (1 × 2) ko N se guna karo. Order: 1 × 2 guna 2 × 3 = 1 × 3.

VN = [ 12 + 6  9 + 11  7 + 8 ] = [ 18  20  15 ].

```
 [ 12   9   7 ]   [ 1 ]     [ 28 ]
 [  6  11   8 ] × [ 1 ]  =  [ 25 ]
                  [ 1 ]

              [ 12   9   7 ]
 [ 1  1 ]  ×  [  6  11   8 ]  =  [ 18  20  15 ]
```

> **Figure 3.7** – Upar ones ka column (3 × 1) har row ka total deta hai. Neeche ones ki row (1 × 2) har column ka total deti hai.

**Jaanch:** dono jawab ka grand total ek hona chahiye. 28 + 25 = 53 aur 18 + 20 + 15 = 53 ✅.

**Story check:** class 1 ne 28 pieces mangaye, class 2 ne 25: 53 kul pieces. Shirt 18, skirt 20, tie 15: phir 53.

Dhyan do: ones ka column N ke **baad** (N × U) rakha gaya aur ones ki row N se **pehle** (V × N). Order ki shart yahi tay karti hai ki kaun kahan rakha ja sakta hai; is kram wali baat par Topic 4 mein poori charcha hogi.

---

## Aam galtiyan (bachke rehna)

### Galti 1: corresponding elements ko seedha guna kar dena

Seedhi si sochi hui baat: jodna element-by-element tha, to guna bhi waisa hi hoga. Dekho kya hota hai.

Maan lo A = [ 1  2 ; 3  4 ] aur B = [ 5  6 ; 7  8 ]. Ek vidyarthi ne likha:

```
 [ 1  2 ]   [ 5  6 ]     [  5  12 ]
 [ 3  4 ] × [ 7  8 ]  =  [ 21  32 ]      (galat)
```

Usne 1 × 5, 2 × 6, 3 × 7, 4 × 8 kiya. Ye guna ka rule nahi hai.

**Sahi tareeka:** c₁₁ ke liye A ki row 1 aur B ka column 1 lo: 1 × 5 + 2 × 7 = 5 + 14 = 19. Ye sirf 5 nahi hai kyunki row ke **dono** numbers apne-apne column ke numbers se milte hain aur dono ke guna jude hain. Poora:

```
 c₁₁ = 1 × 5 + 2 × 7 =  5 + 14 = 19
 c₁₂ = 1 × 6 + 2 × 8 =  6 + 16 = 22
 c₂₁ = 3 × 5 + 4 × 7 = 15 + 28 = 43
 c₂₂ = 3 × 6 + 4 × 8 = 18 + 32 = 50
```

Sahi AB = [ 19  22 ; 43  50 ].

**Jaanch (isi demo ke numbers se):** c₁₁ ka matlab dekho. Agar A ki row 1 rate [ 1  2 ] ho aur B ka column 1 ginti [ 5 ; 7 ], to bill = 1 × 5 + 2 × 7 = 19. Seedhe guna wale jawab mein pehla element sirf 5 tha: matlab bill mein sirf pehli cheez ginti gayi, doosri cheez bhool gayi ✅ (sahi 19 hai, 5 nahi).

### Galti 2: aise matrices ko guna karna jinka order milta nahi (ya jawab ka galat order likhna)

**(a) Order nahi milta.** Maan lo A = [ 2  7  1 ; 5  3  6 ] (2 × 3) aur B = [ 1 ; 4 ] (2 × 1). Ek vidyarthi ne row 1 ke teen numbers aur B ke sirf do numbers milane ki koshish ki: 2 × 1 + 7 × 4 + 1 × ? Teesre number 1 ke liye column mein koi partner nahi hai. Koi bhi "guess" us jodi ko poora nahi karta.

A ke columns 3, B ke rows 2: 3 ≠ 2, to AB **ban hi nahi sakta**. Sahi jawab: "AB defined nahi hai."

**(b) Order milta hai, par jawab ka order galat likha.** Maan lo A wahi 2 × 3 hai aur C = [ 1 ; 4 ; 3 ] (3 × 1). Ab 3 = 3, to AC ban sakta hai. Vidyarthi ne likha ki jawab 3 × 1 hoga (rows C ki, jaise C ka order). Ye galat hai: jawab ka order = A ki rows × C ke columns = 2 × 1.

AC: row 1 aur C: 2 × 1 + 7 × 4 + 1 × 3 = 2 + 28 + 3 = 33; row 2 aur C: 5 × 1 + 3 × 4 + 6 × 3 = 5 + 12 + 18 = 35. AC = [ 33 ; 35 ], jo 2 × 1 hai.

**Jaanch (isi demo ke numbers se):** A ke 2 rows hain, to jawab mein 2 numbers hone chahiye (ek har row ke liye): 33 aur 35, yaani 2 rows ✅. 3 rows wala jawab banta hi nahi.

---

## Quick Recap

- Matrix ka guna **row-by-column** rule se hota hai: pehle matrix ki ek row ke numbers, doosre matrix ke ek column ke numbers ke saath ek-ek karke guna hote hain, phir sab jod diye jaate hain. Ye element-by-element guna **nahi** hai.
- Rate ki row aur ginti ka column milkar bill dete hain: 1 × 2 guna 2 × 1 ek single number (1 × 1) deta hai.
- **Shart:** pehle ke columns = doosre ke rows. Warna guna ban hi nahi sakta.
- **Order:** (m × n) guna (n × p) ka jawab m × p. Beech wala n kat jaata hai.
- Jawab ka element c₁₂ banta hai pehle ki row 1 aur doosre ke column 2 se (naam ke numbers ka matlab: pehla row, doosra column).
- Ones ka column row ka total deta hai, aur ones ki row column ka total.
- Har bar Jaanch mein ek element haath se dobara nikalo aur order ki shart dekho.

---

## Practice Questions

1. A uniform shop sells sweaters at 8 and blazers at 11 (price in units of ₹100). A family buys 2 sweaters and 1 blazer. Write the price row and the quantity column, find their product, and say what the answer means.
2. For each pair of orders, say whether the product of the first matrix and the second is defined, and give its order if it is: (a) 2 × 3 and 3 × 2; (b) 3 × 2 and 3 × 2; (c) 1 × 3 and 3 × 3; (d) 2 × 2 and 1 × 2; (e) 3 × 1 and 1 × 2.
3. Two shops give prices (₹ per piece, in tens) for a tie and a belt: shop 1 charges 2 and 9, shop 2 charges 6 and 5. Write them as the matrix A = [ 2  9 ; 6  5 ]. A school orders 7 ties and 3 belts. Find the product with the order column and say which shop is cheaper.
4. Find the product CD for C = [ 5  0 ; 2  6 ] and D = [ 3  4 ; 1  9 ].
5. Two students scored the following marks (out of 12) in three quizzes: student 1: 11, 7, 3; student 2: 4, 12, 8. Weights of the quizzes under plan 1 are 1, 4, 2 and under plan 2 are 3, 0, 5. Write the marks matrix and the weights matrix, find their product, and say what each element means.
6. Three classes (rows) ordered pieces of two kinds of clothes (columns): N = [ 10  3 ; 8  6 ; 2  11 ]. (a) Find the total pieces for each class using a column of ones. (b) Find the total pieces of each kind using a row of ones. (c) Check that both grand totals are equal.
7. If A = [ 9  2  10 ; 1  12  4 ] and B = [ 3  6 ; 5  0 ; 7  2 ], state the order of AB and find the element in row 2, column 1 of AB only.
8. Say whether each statement is true or false and give a reason. (a) If A is 3 × 2 and B is 2 × 2, then AB is defined and has order 3 × 2. (b) If A is 2 × 2 and B is 3 × 2, then AB is defined. (c) If A is 1 × 3 and B is 3 × 1, then AB is a single number. (d) If A is 2 × 3 and B is 3 × 2, then AB has 6 elements.
9. A student found the product of A = [ 3  7 ; 4  2 ] and B = [ 6  5 ; 0  7 ] as [ 18  35 ; 0  14 ]. Find the mistake and write the correct product.
10. A price row is [ 6  3  2 ] (belt, socks, handkerchief, in units of ₹10) and the family orders 4, 7 and 5 of them in that order. Find the bill.
11. Two shops have prices (in units of ₹10) for a shirt, a skirt and a tie: shop 1 = 7, 3, 1; shop 2 = 9, 2, 8. Two families order: family 1 wants 2 shirts, 1 skirt and 4 ties; family 2 wants 0 shirts, 5 skirts and 3 ties. Write the two matrices, find the product, say its order, and read off the cheaper shop for each family.
12. A 2 × 3 matrix is multiplied by a ones column. What must the order of the ones column be, and what does the order of the answer look like? Explain in your own words with a small example.

### Answers

**1.** Price row [ 8  11 ], quantity column [ 2 ; 1 ]. Guna: 8 × 2 + 11 × 1 = 16 + 11 = **27**, yaani [ 27 ], matlab 27 sau rupaye ka bill (₹2700).
**Jaanch:** sweater 2 × 8 = 16 sau, blazer 1 × 11 = 11 sau, jod 27 sau ✅.
**Story check:** 3 kapde, ₹800 aur ₹1100 ke rate: 2700 theek lagta hai.

**2.** Shart: pehle ke columns = doosre ke rows.
(a) 3 aur 3 barabar: **defined**, order 2 × 2.
(b) 2 aur 3 alag: **defined nahi**.
(c) 3 aur 3 barabar: **defined**, order 1 × 3.
(d) 2 aur 1 alag: **defined nahi**.
(e) 1 aur 1 barabar: **defined**, order 3 × 2.

**3.** Order column [ 7 ; 3 ]. A ke columns 2, column ke rows 2: ban sakta hai, order 2 × 1.
Shop 1: 2 × 7 + 9 × 3 = 14 + 27 = 41. Shop 2: 6 × 7 + 5 × 3 = 42 + 15 = 57.
Jawab [ 41 ; 57 ] (₹10 ke unit mein, yaani ₹410 aur ₹570). **Shop 1 sasti hai.**
**Jaanch:** shop 2 ki tie 7 × 6 = 42, belt 3 × 5 = 15, jod 57 ✅.
**Story check:** shop 2 ki tie bahut mehngi (6, jabki shop 1 mein 2) aur tie ginti mein zyada (7), isliye shop 2 ka bill zyada aaya.

**4.** C 2 × 2, D 2 × 2: ban sakta hai, order 2 × 2.
c₁₁ = 5 × 3 + 0 × 1 = 15 + 0 = 15.
c₁₂ = 5 × 4 + 0 × 9 = 20 + 0 = 20.
c₂₁ = 2 × 3 + 6 × 1 = 6 + 6 = 12.
c₂₂ = 2 × 4 + 6 × 9 = 8 + 54 = 62.
CD = **[ 15  20 ; 12  62 ]**.
**Jaanch:** c₂₂ dobara: 2 × 4 = 8 aur 6 × 9 = 54, jod 62 ✅.

**5.** Marks matrix M = [ 11  7  3 ; 4  12  8 ] (2 × 3). Weights matrix W = [ 1  3 ; 4  0 ; 2  5 ] (3 × 2: column 1 plan 1, column 2 plan 2). 3 = 3: ban sakta hai, order 2 × 2.
c₁₁ = 11 × 1 + 7 × 4 + 3 × 2 = 11 + 28 + 6 = 45.
c₁₂ = 11 × 3 + 7 × 0 + 3 × 5 = 33 + 0 + 15 = 48.
c₂₁ = 4 × 1 + 12 × 4 + 8 × 2 = 4 + 48 + 16 = 68.
c₂₂ = 4 × 3 + 12 × 0 + 8 × 5 = 12 + 0 + 40 = 52.
MW = **[ 45  48 ; 68  52 ]**. Har element ek bacche ka ek plan ke hisaab se weighted total hai: jaise c₂₁ = 68 student 2 ka plan 1 ka total.
**Jaanch:** c₁₂ dobara: 33 + 0 + 15 = 48 ✅.
**Story check:** plan 2 mein quiz 2 ka weight 0 hai, to student 2 ke 12 marks plan 2 mein gine hi nahi gaye: isliye student 2 ka plan 2 total (52) uske plan 1 total (68) se kam hai.

**6.** (a) N 3 × 2, ones column [ 1 ; 1 ] (2 × 1): jawab 3 × 1. [ 10 + 3 ; 8 + 6 ; 2 + 11 ] = **[ 13 ; 14 ; 13 ]**.
(b) Ones ki row [ 1  1  1 ] (1 × 3), jawab 1 × 2: [ 10 + 8 + 2  3 + 6 + 11 ] = **[ 20  20 ]**.
(c) **Jaanch:** 13 + 14 + 13 = 40 aur 20 + 20 = 40 ✅.

**7.** A 2 × 3, B 3 × 2, to AB defined hai aur order **2 × 2**. Row 2 aur column 1: 1 × 3 + 12 × 5 + 4 × 7 = 3 + 60 + 28 = **91**.
**Jaanch:** 12 × 5 = 60 aur 4 × 7 = 28, 3 + 60 + 28 = 91 ✅.

**8.** (a) **Sach** ✅. A ke columns 2, B ke rows 2: ban sakta hai, order = A ki rows × B ke columns = 3 × 2.
(b) **Galat** ❌. A ke columns 2, B ke rows 3: alag hain, guna defined nahi.
(c) **Sach** ✅. 1 × 3 guna 3 × 1 ka order 1 × 1 hai, yaani ek single number.
(d) **Galat** ❌. AB ka order 2 × 2 hai, to 4 elements hain, 6 nahi.

**9.** Galti: vidyarthi ne corresponding elements ko guna kar diya (3 × 6, 7 × 5, 4 × 0, 2 × 7, yaani [ 18  35 ; 0  14 ]), yaani element-by-element guna. Row-by-column rule se:
c₁₁ = 3 × 6 + 7 × 0 = 18 + 0 = 18.
c₁₂ = 3 × 5 + 7 × 7 = 15 + 49 = 64.
c₂₁ = 4 × 6 + 2 × 0 = 24 + 0 = 24.
c₂₂ = 4 × 5 + 2 × 7 = 20 + 14 = 34.
Sahi: **[ 18  64 ; 24  34 ]**.
**Jaanch:** c₁₂ dobara: 15 + 49 = 64, jabki galat jawab mein 35 tha ✅ (sahi 64 hai, 35 nahi).

**10.** Bill: 6 × 4 + 3 × 7 + 2 × 5 = 24 + 21 + 10 = **55**, yaani ₹550.
**Jaanch:** 24 + 21 = 45, 45 + 10 = 55 ✅.
**Story check:** kul 4 + 7 + 5 = 16 pieces aur rate ₹20 se ₹60 ke beech, to bill ₹320 se ₹960 ke beech hona chahiye. ₹550 isi beech mein hai.

**11.** Prices (rows: shop 1, shop 2; columns: shirt, skirt, tie): H = [ 7  3  1 ; 9  2  8 ] (2 × 3). Orders (columns: family 1, family 2; rows: shirt, skirt, tie): G = [ 2  0 ; 1  5 ; 4  3 ] (3 × 2). 3 = 3: ban sakta hai, order 2 × 2.
c₁₁ = 7 × 2 + 3 × 1 + 1 × 4 = 14 + 3 + 4 = 21.
c₁₂ = 7 × 0 + 3 × 5 + 1 × 3 = 0 + 15 + 3 = 18.
c₂₁ = 9 × 2 + 2 × 1 + 8 × 4 = 18 + 2 + 32 = 52.
c₂₂ = 9 × 0 + 2 × 5 + 8 × 3 = 0 + 10 + 24 = 34.
Jawab **[ 21  18 ; 52  34 ]** (₹10 ke unit mein). Family 1 ke liye shop 1 (21) sasti hai, family 2 ke liye bhi shop 1 (18).
**Jaanch:** c₂₂ dobara: 9 × 0 = 0, 2 × 5 = 10, 8 × 3 = 24, jod 34 ✅.
**Story check:** shop 2 ki tie bahut mehngi (8, jabki shop 1 mein 1), aur dono familiyon ko ties chahiye (4 aur 3), isliye shop 2 dono ke liye mehngi padi.

**12.** 2 × 3 ke columns 3 hain, to ones column mein theek **3 rows** chahiye: yaani 3 × 1. Jawab ka order 2 × 1 hoga (2 rows, 1 column), jisme har row ka total hoga. Chhota example: [ 3  1  4 ; 2  6  5 ] guna [ 1 ; 1 ; 1 ] = [ 8 ; 13 ].
**Jaanch:** 3 + 1 + 4 = 8 aur 2 + 6 + 5 = 13 ✅.

---

Ab tum row ko column se milakar guna kar sakte ho, aur guna karne se pehle hi bata sakte ho ki wo banega ya nahi aur jawab ka order kya hoga. Har baar pehle order ki shart dekho, phir element banao.

**Aage ka rasta:** abhi tak humne A ko B se guna kiya. Topic 4 mein dekhenge ki kya B ko A se guna karne par bhi wahi jawab aata hai? Moze aur joote ki kahani se samjhenge ki order badalne par kya hota hai. Wahan identity matrix (jo "kuch na kare") aur zero matrix ka bhi saath milega.
