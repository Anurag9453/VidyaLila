# Chapter: Arithmetic Progressions (Part 6)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [arithmetic-progressions-part5.md](arithmetic-progressions-part5.md) se aage chalti hai** (wahan Topic 5 mein aₙ = Sₙ − Sₙ₋₁ aur AP ke asli zindagi wale sawaal aaye). Chapter ki shuruaat: [arithmetic-progressions.md](arithmetic-progressions.md). nth term ka formula: [arithmetic-progressions-part2.md](arithmetic-progressions-part2.md). Sum ka formula: [arithmetic-progressions-part4.md](arithmetic-progressions-part4.md). Kahani ka story check: [quadratic-equations-part6.md](../quadratic-equations/quadratic-equations-part6.md). Pichhle chapter ka saar: [quadratic-equations-part7.md](../quadratic-equations/quadratic-equations-part7.md).
> **Topics covered in this file:**
> 6. Sab Kuch Mila Kar: Practice Aur Chapter Ka Saar

---

# Topic 6: Sab Kuch Mila Kar: Practice Aur Chapter Ka Saar

Paanch topics mein tumhare paas AP ke auzaar jama ho gaye: d aur test, aₙ = a + (n − 1)d, do terms se poora AP, Sₙ ke do formulas, aur aₙ = Sₙ − Sₙ₋₁ ke saath asli zindagi ke sawaal. Ab ek hi sawaal bacha hai: **kaun sa auzaar kab?** Is topic mein hum auzaar chunna seekhenge, ek sawaal mein kai topics ko jodna seekhenge, aur un chaar galtiyon se milenge jo ab tak kisi topic ki nahi thi. Aakhir mein poore chapter ka saar ek table mein milega.

---

## Aiyana ka Progression Parade

School ke Annual Day par ek **Progression Parade** hua: har class ek kataar mein chali, aur parade ka niyam ye tha ki pehli kataar mein 19 bacche, aur har agli kataar mein pichhli se 3 bacche zyada. Teacher ma'am ne Aiyana ko "Parade Control Room" ki table di: ek mez, ek board, aur ek dibba jisme har kataar ke "sawaal" ki parchi aati thi.

Pehli parchi: "12-wi kataar mein kitne bacche, aur 12 kataaron mein kul kitne?" Doosri: "Ek record mein sirf 5-wi aur 14-wi kataar likhi hai, baaki mita hai. Poora pattern wapas banao." Teesri: "Kul 639 bacche hain, kitni kataaren?" Chauthi: "Papa ke loan ke instalments ka hisaab." Paanchvi: "Ek bacche ne 'ab tak kitne bacche guzre' ka formula likha hai, usse har kataar ka size nikalo."

Aiyana ne dekha ki har parchi ko ek hi formula se nahi sulajha sakte: kisi mein aₙ chahiye, kisi mein Sₙ, kisi mein do terms se d, aur kisi mein Sₙ ka farak. Usne board par likha: **pehle suraagh pehchano, phir auzaar chuno, phir hal karo, phir doosre raaste se jaancho.** Aaj hum bhi Aiyana ke Control Room mein baithkar yahi karenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Suraagh (clue)** | Sawaal ka wo hissa jo batata hai ki kaun sa auzaar lagega: kya diya hai aur kya poochha hai. | "do terms diye hain" ka suraagh hai: pehle d nikalo |
| **Raasta chart** | Ek chart jisme har suraagh ke saamne uska auzaar likha ho. | Figure 6.1 |
| **Chain sawaal** | Aisa sawaal jisme ek step ka jawab agle step mein kaam aata hai (jaise pehle a aur d, phir sum). | Example 2 |

---

## Pichhle topics se yaad

| Kahan | Kya mila | Is topic mein kahan kaam aayega |
|---|---|---|
| [Topic 1](arithmetic-progressions.md) | AP, d = aₙ₊₁ − aₙ, d > 0, d < 0 aur d = 0 | Aam galtiyan: Galti 2 aur Galti 3 |
| [Topic 2](arithmetic-progressions-part2.md) | aₙ = a + (n − 1)d, n = (l − a)/d + 1, multiples | Part B: Example 1 aur Example 6 |
| [Topic 3](arithmetic-progressions-part3.md) | Do terms se d aur a, AM property | Part B: Example 2; Aam galtiyan: Galti 4 |
| [Topic 4](arithmetic-progressions-part4.md) | Sₙ = (n/2)(a + l) aur (n/2)[2a + (n − 1)d], n ki quadratic | Part B: Example 3 aur Example 4 |
| [Topic 5](arithmetic-progressions-part5.md) | aₙ = Sₙ − Sₙ₋₁ (a₁ = S₁) aur AP ke application | Part B: Example 4 aur Example 5 |
| [Quadratic equations, Topic 6](../quadratic-equations/quadratic-equations-part6.md) | Story check | Example 3 aur Example 4 |

---

## Part A: Raasta chart aur chaar kadam

Neeche ka chart har suraagh ke saamne uska auzaar rakhta hai. Kisi bhi sawaal ko padhkar pehle poochho: **mujhe kya diya hai, aur kya chahiye?**

```
 Sawaal ka suraagh                      Auzaar
 --------------------------------------  ----------------------------------------
 a, d aur n diye; term ya sum chahiye   ---->  aₙ = a + (n − 1)d  ya  Sₙ = (n/2)[2a + (n − 1)d]
 :
 pehla term a aur aakhri term l diye    ---->  Sₙ = (n/2)(a + l); n nahi diya to n = (l − a)/d + 1
 :
 AP ke do terms diye (aₚ aur a_q)       ---->  d = (aₚ − a_q)/(p − q), phir a = aₚ − (p − 1)d
 :
 sum diya, n poochha                    ---->  Sₙ ko sum ke barabar rakho: n ki quadratic, phir story check
 :
 Sₙ ka formula (n mein) diya            ---->  aₙ = Sₙ − Sₙ₋₁ aur a₁ = S₁
 :
 kisi number ke multiples ka sum        ---->  pehla aur aakhri multiple division se, n ginti se, phir (n/2)(a + l)
 :
 beech ke terms ka sum                  ---->  Sₘ − Sₖ = terms (k + 1) se m tak
```

> **Figure 6.1** – Raasta chart: baayen taraf sawaal ka suraagh, daayen taraf auzaar. Ek sawaal mein kai suraagh ek ke baad ek aa sakte hain (chain sawaal), to chart ko baar-baar upar se padho.

Har sawaal par ye **chaar kadam** lagao:

1. **Pehchano:** a, d, n, l, Sₙ mein se kaun sa diya hai aur kaun sa chahiye.
2. **Chuno:** chart se auzaar.
3. **Hal karo:** poora working, har line dikhate hue.
4. **Doosre raaste se jaancho:** aₙ hai to doosra term ya a se ulta chalo; Sₙ hai to doosra formula ya haath se chhote n par; kahani hai to **story check** (n poora aur positive, paise ya size samajhdaar).

Ab Aiyana ki paanch parchiyan, aur ek aur sawaal, hal karte hain.

---

## Part B: Mila-jula sawaal

### Example 1: Parade ki kataaren (a, d, n diye hain)

Pehli kataar mein 19 bacche, har agli mein 3 zyada. Yahan a = 19, d = 3.

```
 Row 1  ###################                 19
 Row 2  ######################              22
 Row 3  #########################           25
 Row 4  ############################        28
 Row 5  ###############################     31
 Row 6  ##################################  34
```

> **Figure 6.2** – Parade ki pehli 6 kataaren: har # ek bacche ke liye hai, aur daayen taraf kataar ka size likha hai. Har agli bar ek jaisi (3 #) lambi hai, yaani d = 3.

(a) 12-wi kataar: a₁₂ = 19 + 11 × 3 = **52 bacche.**
(b) 12 kataaron ka kul: S₁₂ = (12/2)(19 + 52) = 6 × 71 = **426 bacche.**
**Jaanch:** doosra formula: S₁₂ = 6 × [2 × 19 + 11 × 3] = 6 × [38 + 33] = 6 × 71 = 426 ✅.
(c) Kis kataar mein 70 bacche honge? n = (70 − 19)/3 + 1 = 17 + 1 = **18.** **Story check:** n = 18 poora aur positive hai, to 18-wi kataar. **Jaanch:** a₁₈ = 19 + 17 × 3 = 70 ✅.

### Example 2: Chain sawaal: do terms, phir sum

Ek purane record mein ek AP ka 6-wa term 45 aur 14-wa term −19 likha hai. Pehle 25 terms ka sum?

Kadam 1 (suraagh: do terms): d = (a₁₄ − a₆)/(14 − 6) = (−19 − 45)/8 = −64/8 = **−8.** a₆ = a + 5d, to 45 = a + 5 × (−8), a = 45 + 40 = **85.**
Kadam 2 (suraagh: a, d, n): a₂₅ = 85 + 24 × (−8) = 85 − 192 = −107. S₂₅ = (25/2)(85 + (−107)) = (25/2) × (−22) = **−275.**
**Jaanch:** doosra formula: S₂₅ = (25/2)[170 + 24 × (−8)] = (25/2)(170 − 192) = (25/2) × (−22) = −275 ✅. Aur a₁₄ = 85 + 13 × (−8) = −19 ✅ (diye hue term se mila).

### Example 3: Sum diya, n poochha

AP −8, −1, 6, ... ke kitne terms ka sum 615 hoga? a = −8, d = 7.
Sₙ = (n/2)[−16 + 7(n − 1)] = (n/2)(7n − 23). Ise 615 ke barabar rakho: n(7n − 23) = 1230, to 7n² − 23n − 1230 = 0.
D = 529 + 4 × 7 × 1230 = 529 + 34440 = 34969 = 187². n = (23 ± 187)/14, to n = 210/14 = 15 ya n = −164/14 (lagbhag −11.71).
**Story check:** −11.71 na positive hai na poora, reject. **n = 15.**
**Jaanch:** a₁₅ = −8 + 14 × 7 = 90. (15/2)(−8 + 90) = (15/2) × 82 = 615 ✅. Doosra formula: (15/2) × [−16 + 98] = (15/2) × 82 = 615 ✅.

### Example 4: Instalments (loan) ka hisaab

Aiyana ke Papa ko ek loan chukane ke liye (byaaj samet) kul ₹58,600 dene hain. Pehla instalment ₹2,350 hai aur har mahine ka instalment pichhle se ₹175 zyada. Kitne mahine lagenge, aur aakhri instalment kitna hoga?
a = 2350, d = 175. Sₙ = (n/2)[4700 + 175(n − 1)] = (n/2)(4525 + 175n) = 58600, to 175n² + 4525n − 117200 = 0. 25 se divide: 7n² + 181n − 4688 = 0.
D = 181² + 4 × 7 × 4688 = 32761 + 131264 = 164025 = 405². n = (−181 ± 405)/14, to n = 224/14 = 16 ya n = −586/14 lagbhag −41.86.
**Story check:** mahine negative ya fractional nahi hote, to **16 mahine.** Aakhri instalment a₁₆ = 2350 + 15 × 175 = 2350 + 2625 = **₹4,975.**
**Jaanch:** (n/2)(a + l) se: 8 × (2350 + 4975) = 8 × 7325 = 58600 ✅. Neeche ki table mein har mahine ka "ab tak diya" bhi dekho.

```
 Mahina   Instalment   Ab tak diya
 ------   ----------   -----------
    1         2350          2350
    2         2525          4875
    3         2700          7575
    4         2875         10450
    5         3050         13500
    6         3225         16725
    7         3400         20125
    8         3575         23700
    9         3750         27450
   10         3925         31375
   11         4100         35475
   12         4275         39750
   13         4450         44200
   14         4625         48825
   15         4800         53625
   16         4975         58600
```

> **Figure 6.3** – Repayment table: instalment har mahine 175 badhta hai (AP), aur "ab tak diya" ka aakhri number 58600 hai, jo Sₙ se mila.

### Example 5: Sₙ ka formula diya, AP dhundo

Parade ki ek doosri tukdi ke "ab tak guzre bacche" ka formula Sₙ = (9n² + n)/2 hai. AP ka a, d aur 10-wa term?
a₁ = S₁ = (9 + 1)/2 = **5.** Aur aₙ = Sₙ − Sₙ₋₁ = [9n² + n − 9(n − 1)² − (n − 1)]/2 = [9(2n − 1) + 1]/2 = (18n − 8)/2 = **9n − 4.** To a₁ = 5 (9 × 1 − 4 = 5, S₁ se mel khaata hai), a₂ = 14, **d = 9**, a₁₀ = 9 × 10 − 4 = **86.**
**Jaanch:** AP 5, 14, 23, ...: a₁₀ = 5 + 9 × 9 = 86 ✅. S₁₀ = (9 × 100 + 10)/2 = 455, aur (10/2)(5 + 86) = 5 × 91 = 455 ✅.

### Example 6: Multiples ka sum

250 aur 650 ke beech ke 19 ke multiples ka sum. 250 ÷ 19 = 13.1..., pehla multiple 14 × 19 = **266.** 650 ÷ 19 = 34.2..., aakhri 34 × 19 = **646.** d = 19, n = (646 − 266)/19 + 1 = 20 + 1 = 21. S = (21/2)(266 + 646) = (21/2) × 912 = 21 × 456 = **9576.**
**Jaanch:** ye multiples 19 × 14 se 19 × 34 tak hain: 19 × (S₃₄ − S₁₃) = 19 × (595 − 91) = 19 × 504 = 9576 ✅.

---

Mixed sawaalon mein sabse zyada galtiyan tab hoti hain jab shabdon ya formulas ka mix-up ho jaaye (jaise Sₙ aur aₙ). Neeche chaar nayi galtiyan hain, jo ab tak kisi topic ki nahi thi.

---

## Aam galtiyan (bachke rehna)

**Galti 1: "pehle 10 terms ka sum" ko "10-wa term" samajh lena**

Sawaal: AP ka pehla term 6 hai aur pehle 10 terms ka sum 195 hai. d kitna hai? Ek bachche ne 195 ko 10-wa term maan liya: 6 + 9d = 195, to d = 21.
**Ulta udaharan:** d = 21 se AP 6, 27, 48, ... bani. Iske pehle 10 terms ka sum S₁₀ = (10/2)(6 + 195) = 5 × 201 = **1005**, 195 nahi. Sum bahut bada aa gaya, kyunki bachche ne 195 ko akele ek term ki jagah rakh diya, jabki 195 poore 10 terms ka jod hai.
Kyun galat? "Sum of first 10 terms" ka matlab S₁₀ hai, a₁₀ nahi. Sahi: S₁₀ = (10/2)[12 + 9d] = 195, to 12 + 9d = 39, 9d = 27, **d = 3.**
**Jaanch:** AP 6, 9, 12, ...: a₁₀ = 6 + 27 = 33 aur (10/2)(6 + 33) = 5 × 39 = 195 ✅.

**Galti 2: "24, 24, 24, ... ka common difference 24 hai"**

Parade ki ek class mein har kataar mein 24 bacche hain: 24, 24, 24, ... 10 kataaren. Ek bachche ne kaha: "number 24 hi 24 hai, to d = 24."
**Ulta udaharan:** d = 24 maan lo: a₁₀ = 24 + 9 × 24 = 240 aur S₁₀ = (10/2)(24 + 240) = 1320. Par 10 kataaron mein sirf 10 × 24 = **240** bacche hain. 1320 nikalna asambhav hai.
Kyun galat? d **farak** hai: agla term minus pichhla = 24 − 24 = **0.** Ye constant AP hai (Topic 1). Sahi: S₁₀ = (10/2)[48 + 9 × 0] = 5 × 48 = **240.**
**Jaanch:** a₁₀ = 24 + 0 = 24 aur (10/2)(24 + 24) = 240 ✅.

**Galti 3: "AP ka pehla term positive hi hota hoga"**

Ek bachche ne kaha: "progression matlab badhna, to shuruaat zero se upar honi chahiye." Bijli jaane ke baad ek chhote freezer ke andar ka temperature (°C) maan lo har ghante 7° badhta hai: −26, −19, −12, −5, 2, 9.
**Ulta udaharan:** differences −19 − (−26) = 7, −12 − (−19) = 7, −5 − (−12) = 7, 2 − (−5) = 7, 9 − 2 = 7: sab barabar, to ye AP hai, aur a = −26 negative hai. Formula bhi chalta hai: a₅ = −26 + 4 × 7 = 2, S₅ = (5/2)(−26 + 2) = −60.

```
  -26    -19    -12     -5      2      9
   o------o------o------o------o------o
   a₁     a₂     a₃     a₄     a₅     a₆
```

> **Figure 6.4** – Number line par AP −26, −19, −12, −5, 2, 9: pehla term negative, d = 7 positive, aur terms zero paar karke positive ho jaate hain. Sirf d ka sign batata hai ki AP badh rahi hai ya ghat rahi hai, a ka sign nahi.

Kyun galat? AP ke liye sirf "har baar ek hi tay qadam" chahiye (Topic 1). a koi bhi number ho sakta hai: negative, zero (0, 4, 8, 12, 16) ya fraction.
**Jaanch:** haath se: −26 − 19 − 12 − 5 + 2 = −60 ✅.

**Galti 4: "pehle aur aakhri term ka mean hamesha beech ka term hota hai"**

Ek bachche ne AP wali baat ("(a₁ + aₙ)/2 = beech ka term") ko har list par laga diya. List: 1, 2, 4, 7, 11. Beech ka term 4 hai, par (1 + 11)/2 = **6.** Mel nahi khaata.
**Ulta udaharan:** Topic 3 ki AM property sirf AP mein sach hai: differences 1, 2, 3, 4 barabar nahi, to ye AP hai hi nahi. Ek asli AP lo, 3.5, 6, 8.5, 11, 13.5: beech ka term 8.5 aur (3.5 + 13.5)/2 = 8.5 ✅ mel khaata hai.
Kyun? AP mein terms barabar qadam par rakhe hote hain, isliye shuru se k-wa aur aakhir se k-wa term ka jod ek-sa hota hai (Topic 3 aur 4). Agar qadam barabar nahi, to ye symmetry toot jaati hai. Pehle test karo ki list AP hai ya nahi, phir ye property lagao.
**Jaanch:** 1, 2, 4, 7, 11 mein 2 + 7 = 9 aur 1 + 11 = 12, jodiyon ke jod barabar nahi ✅ (isliye AP nahi).

---

## Quick Recap

- **Raasta chart:** suraagh pehchano, auzaar chuno, hal karo, doosre raaste se jaancho (Figure 6.1).
- a, d, n diye hain to **aₙ = a + (n − 1)d** ya **Sₙ = (n/2)[2a + (n − 1)d].** a aur l diye hain to **Sₙ = (n/2)(a + l).**
- Do terms diye hain to **d = (aₚ − a_q)/(p − q)**, phir a, phir jo poochha ho.
- Sum diya, n poochha: Sₙ ko barabar rakho, **n ki quadratic**, aur **story check** (n poora aur positive).
- Sₙ ka formula diya hai: **aₙ = Sₙ − Sₙ₋₁**, a₁ = S₁.
- Multiples ka sum: pehla aur aakhri multiple division se, n ginti se, phir (n/2)(a + l). Beech ka sum: Sₘ − Sₖ.
- **Galti 1:** Sₙ aur aₙ alag hain (sum ko term nahi maanna). **Galti 2:** 24, 24, 24, ... ka d = 0. **Galti 3:** a negative bhi ho sakta hai. **Galti 4:** (pehla + aakhri)/2 = beech ka term sirf AP mein.

---

## Practice Questions

1. For each situation, name the formula or method you would use first (no need to solve): (a) the 9th and 20th terms are given and the sum of the first 30 terms is asked; (b) the sum of the first n terms is given as 4n² + n and the 12th term is asked; (c) the sum of the first n terms is known and n is asked; (d) all multiples of a number between two numbers are to be added.

2. The 8th term of an AP is 49 and its 18th term is −41. Find the AP and the sum of its first 20 terms.

3. The sum of the first n terms of the AP −15, −11, −7, ... is 744. Find n, and check it with a story check.

4. A shopkeeper repays a debt in 12 monthly instalments. The first instalment is ₹4,200 and each next one is ₹150 less than the one before. Find the last instalment and the total repaid. How much is still left after 7 instalments?

5. The sum of the first n terms of an AP is Sₙ = 9n² − 2n. Find the AP's first term and common difference, the 15th term, and the sum of the terms from the 12th to the 20th.

6. Find the sum of all multiples of 23 from 100 to 800.

7. For the AP −3.5, −0.75, 2, ... find the 24th term and the sum of the first 24 terms by both formulas.

8. A marching band stands in rows: 16 marchers in the first row and 2 more in each next row. (a) If the band has 544 marchers in all, how many rows are there? (b) Can any row have exactly 71 marchers?

9. The sum of the first 6 terms of an AP is 84 and its 10th term is 66. Find the first term, the common difference and the sum of the first 20 terms.

10. The AP 47, 44, 41, ... has 25 terms. Find the sum of the terms from the 12th to the 25th term in two ways.

11. A bookshelf has 14 rows, and every row holds 31 books. Write this as an AP, state d, and find the total number of books by the sum formula.

12. State True or False, with a reason: (a) The common difference of 8, 8, 8, 8 is 8. (b) −4.5, −1.5, 1.5, 4.5 is an AP although its first term is negative. (c) In 3, 4, 6, 9, 13 the middle term is the mean of the first and last terms. (d) If the sum of the first 10 terms of an AP is 260, then its 10th term is 260. (e) For 4.5, 7, 9.5 the middle term is the mean of the first and last terms.

### Answers

1. (a) Do terms ka suraagh: pehle d = (a₂₀ − a₉)/11 aur a = a₉ − 8d, phir S₃₀ = (30/2)[2a + 29d]. (b) Sₙ ka formula diya: aₙ = Sₙ − Sₙ₋₁ se aₙ, ya seedha S₁₂ − S₁₁. (c) Sₙ ko sum ke barabar rakho, n ki quadratic, hal karo, story check. (d) Pehla aur aakhri multiple division se, n ginti se, phir (n/2)(a + l).
   Jaanch: har jawab Figure 6.1 ki ek row se milta hai ✅.

2. d = (−41 − 49)/(18 − 8) = −90/10 = **−9.** a₈ = a + 7d: 49 = a − 63, **a = 112.** AP: **112, 103, 94, ...** a₂₀ = 112 + 19 × (−9) = −59. S₂₀ = (20/2)(112 − 59) = 10 × 53 = **530.**
   Jaanch: doosra formula: 10 × [224 + 19 × (−9)] = 10 × (224 − 171) = 530 ✅. a₁₈ = 112 − 153 = −41 ✅.

3. a = −15, d = 4. Sₙ = (n/2)[−30 + 4(n − 1)] = (n/2)(4n − 34) = n(2n − 17). n(2n − 17) = 744, to 2n² − 17n − 744 = 0. D = 289 + 5952 = 6241 = 79². n = (17 ± 79)/4, to n = 24 ya n = −15.5. **Story check:** −15.5 reject, **n = 24.**
   Jaanch: a₂₄ = −15 + 23 × 4 = 77. (24/2)(−15 + 77) = 12 × 62 = 744 ✅.

4. a = 4200, d = −150, n = 12. Aakhri a₁₂ = 4200 + 11 × (−150) = 4200 − 1650 = **₹2,550.** Kul: S₁₂ = (12/2)(4200 + 2550) = 6 × 6750 = **₹40,500.** 7 instalments: S₇ = (7/2)[8400 + 6 × (−150)] = (7/2) × 7500 = 26250. Bacha: 40500 − 26250 = **₹14,250.**
   Jaanch: bache hue instalments 8 se 12: 3150 + 3000 + 2850 + 2700 + 2550 = 14250 ✅. Story check: har instalment positive hai, aakhri bhi (₹2,550).

5. a₁ = S₁ = 9 − 2 = **7.** S₂ = 36 − 4 = 32, to a₂ = 32 − 7 = 25, **d = 18.** Poora: aₙ = Sₙ − Sₙ₋₁ = 9(2n − 1) − 2 = 18n − 11, a₁₅ = 270 − 11 = **259.** 12-wa se 20-wa term: S₂₀ − S₁₁ = (3600 − 40) − (1089 − 22) = 3560 − 1067 = **2493.**
   Jaanch: AP 7, 25, 43, ...: a₁₅ = 7 + 14 × 18 = 259 ✅. a₁₂ = 205, a₂₀ = 349, 9 terms: (9/2)(205 + 349) = (9/2) × 554 = 2493 ✅.

6. 100 ÷ 23 = 4.3..., pehla multiple 5 × 23 = **115.** 800 ÷ 23 = 34.78..., aakhri 34 × 23 = **782.** n = (782 − 115)/23 + 1 = 29 + 1 = 30. S = (30/2)(115 + 782) = 15 × 897 = **13455.**
   Jaanch: 23 × (S₃₄ − S₄) = 23 × (595 − 10) = 23 × 585 = 13455 ✅.

7. a = −3.5, d = −0.75 − (−3.5) = 2.75 (aur 2 − (−0.75) = 2.75, to AP hai). a₂₄ = −3.5 + 23 × 2.75 = −3.5 + 63.25 = **59.75.** Formula (1): S₂₄ = 12 × (−3.5 + 59.75) = 12 × 56.25 = **675.** Formula (2): 12 × [−7 + 23 × 2.75] = 12 × (−7 + 63.25) = 12 × 56.25 = 675.
   Jaanch: dono formulas ek hi jawab dete hain ✅. Aur akal ka check: average term (−3.5 + 59.75)/2 = 28.125, 24 terms × 28.125 = 675 ✅.

8. (a) a = 16, d = 2. Sₙ = (n/2)[32 + 2(n − 1)] = n(n + 15) = 544, to n² + 15n − 544 = 0. D = 225 + 2176 = 2401 = 49². n = (−15 ± 49)/2, to n = 17 ya n = −32. **Story check:** rows negative nahi hoti, to **17 rows.** (b) Har row ka size 16, 18, 20, ... sab **even** hai. 71 odd hai, to **nahi.** Position se bhi: (71 − 16)/2 + 1 = 28.5, poora nahi.
   Jaanch: a₁₇ = 16 + 32 = 48, (17/2)(16 + 48) = 17 × 32 = 544 ✅.

9. S₆ = 3(2a + 5d) = 84, to 2a + 5d = 28 ... (i). a₁₀ = a + 9d = 66, to 2a + 18d = 132 ... (ii). (ii) − (i): 13d = 104, **d = 8.** (i): 2a = 28 − 40 = −12, **a = −6.** a₂₀ = −6 + 19 × 8 = 146. S₂₀ = 10 × (−6 + 146) = **1400.**
   Jaanch: AP −6, 2, 10, 18, 26, 34: sum = 84 ✅ aur a₁₀ = −6 + 72 = 66 ✅. Doosra formula: 10 × [−12 + 152] = 1400 ✅.

10. a = 47, d = −3. a₁₂ = 47 − 33 = 14, a₂₅ = 47 − 72 = −25. Terms 12 se 25: 14 terms. Tareeka 1: (14/2)(14 − 25) = 7 × (−11) = **−77.** Tareeka 2: S₂₅ − S₁₁ = (25/2)(94 − 72) − (11/2)(94 − 30) = 275 − 352 = **−77.**
   Jaanch: dono tareeke ek hi jawab dete hain ✅.

11. Rows ke hisaab se 31, 31, 31, ... (14 terms). Differences 0, to **constant AP, d = 0**, a = 31. S₁₄ = (14/2)[62 + 13 × 0] = 7 × 62 = **434 books.**
    Jaanch: 14 × 31 = 434 ✅ (d = 31 maan lena Galti 2 hota).

12. (a) **False** ❌. d = 8 − 8 = 0, constant AP (Galti 2). (b) **True** ✅. Differences 3, 3, 3 barabar, a negative hone se AP nahi tootti (Galti 3). (c) **False** ❌. Beech ka term 6, par (3 + 13)/2 = 8, aur ye AP nahi hai (differences 1, 2, 3, 4) (Galti 4). (d) **False** ❌. 260 sum hai, term nahi: S₁₀ aur a₁₀ alag cheezein hain (Galti 1). (e) **True** ✅. 4.5, 7, 9.5 ek AP hai (d = 2.5), to (4.5 + 9.5)/2 = 7 ✅.

---

Shabaash! Aiyana ke Control Room ki saari parchiyan hal ho gayin. Ab tum bhi sawaal padhkar suraagh pakad sakte ho, sahi auzaar chun sakte ho, aur har jawab ko doosre raaste ya story check se parakh sakte ho.

Ab chapter ka saar neeche ek table mein hai.

---

# Chapter Wrap-up: Arithmetic Progressions

| Topic | Kya seekha | Sabse kaam ki baat |
|---|---|---|
| 1. Pattern se progression tak | Sequence, finite aur infinite; AP aur common difference d = aₙ₊₁ − aₙ; d > 0, d < 0, d = 0; AP ka test; AP ka aam roop; wo sequences jo AP nahi (squares, triangular, Fibonacci); (n, aₙ) ek seedhi line; simple aur compound interest | Saare consecutive differences check karo, sirf pehle do nahi; d negative bhi hota hai |
| 2. nth term ka formula | aₙ = a + (n − 1)d aur uska kyun; term, position, a ya d nikalna; aakhir se term; n = (l − a)/d + 1; multiples ki ginti; aₙ n mein linear | d ko n − 1 baar jodna; n poora aur positive ho, tabhi wo number term hai |
| 3. Do terms se poora AP | d = (aₚ − a_q)/(p − q), phir a; term aur rishte se AP; AM property 2b = a + c; m − h, m, m + h aur m − 3h, m − h, m + h, m + 3h; barabar-doori wale terms | Ghatate waqt dono taraf ek order; teen numbers kabhi a, a + d, a + 3d nahi |
| 4. Sum of n terms | Gauss ki trick; Sₙ = (n/2)(a + l) aur (n/2)[2a + (n − 1)d] ka derivation; n(n + 1)/2, n², n(n + 1); multiples ka sum; n ki quadratic aur story check; Sₘ − Sₖ; Sₙ n mein quadratic hai, constant term nahi | l wo term hai jahan tak jod rahe ho; S₂₀ − S₁₀ terms 11 se 20 hai |
| 5. AP ka upyog | aₙ = Sₙ − Sₙ₋₁ (a₁ = S₁); AP ke application; chaar kadam ki method aur story check | Pehchano, auzaar chuno, hal karo, story check; a₁ = S₁ se hi shuru karo |
| 6. Sab kuch mila kar | Raasta chart aur chaar kadam; chain sawaal (do terms se sum, sum se n, instalments, Sₙ formula se AP, multiples); galtiyan: Sₙ ko aₙ samajhna, constant AP ka d = 0, negative pehla term, (pehla + aakhri)/2 sirf AP mein | Suraagh pakdo, auzaar chuno, aur jawab ko doosre raaste ya story check se jaancho |

---

Arithmetic Progressions ka ye safar ek "tay qadam" wali list se shuru hua, nth term aur do-terms ki paheliyon se guzra, Gauss ki trick se sum tak pahuncha, aur asli zindagi ke sawaalon par khatam hua. Ab tum kisi bhi AP ko dekh, pehchan aur hal kar sakte ho.

**Aage kya?** Class 10 Maths Chapter 5 Geometric Progressions mein ek aisi list milegi jisme har number pichhle ka double ho jaata hai.
