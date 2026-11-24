# Chapter: Geometric Progressions (Part 5)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [geometric-progressions-part4.md](geometric-progressions-part4.md) se aage chalti hai** (wahan Topic 4 mein Sₙ = a(rⁿ − 1)/(r − 1) "r se guna karo aur ghatao" chaal se bana, aur shatranj ke daane, n aur r dhundhna, Sₘ − Sₖ aur Sₙ − Sₙ₋₁ = aₙ aaye). Chapter ki shuruaat: [geometric-progressions.md](geometric-progressions.md). nth term: [geometric-progressions-part2.md](geometric-progressions-part2.md). Do terms se GP aur b² = ac: [geometric-progressions-part3.md](geometric-progressions-part3.md). Pichhle chapter ka saar (AP): [arithmetic-progressions-part6.md](../arithmetic-progressions/arithmetic-progressions-part6.md). Quadratic equation: [quadratic-equations-part4.md](../quadratic-equations/quadratic-equations-part4.md). Story check: [quadratic-equations-part6.md](../quadratic-equations/quadratic-equations-part6.md). Compound interest (Class 9): [compound-interest-part3.md](../../../class9/maths/compound-interest/compound-interest-part3.md).
> **Topics covered in this file:**
> 5. Sab Kuch Mila Kar: Practice Aur Chapter Ka Saar

---

# Topic 5: Sab Kuch Mila Kar: Practice Aur Chapter Ka Saar

Topic 1 se Topic 4 tak tumhare paas GP ke auzaar jama ho gaye: r aur ratio test, aₙ = a rⁿ⁻¹, do terms se poora GP aur b² = ac, aur Sₙ ka formula. Ab ek hi sawaal bacha hai: **kaun sa auzaar kab?** Is topic mein hum auzaar chunna seekhenge, ek sawaal mein kai topics ko jodna seekhenge, aur un chaar galtiyon se milenge jo ab tak kisi topic ki nahi thi. Aakhir mein poore chapter ka saar ek table mein milega.

---

## Shambhavi ka Ratio Relay

Pichhli baar Annual Day par "Progression Parade" hua tha, jahan har kataar mein bacche ek hi number se **zyada** hote gaye (Chapter 4 ka AP: [arithmetic-progressions-part6.md](../arithmetic-progressions/arithmetic-progressions-part6.md)). Is baar sports day par uska sequel aaya: **Ratio Relay.** Niyam: Class 6 ne 2 tokens se shuru kiya, aur har class jo tokens pichhli class se paati hai, unke **6 guna** tokens agli class ko deti hai. Chaar classes mein tokens ban gaye 2, 12, 72, 432.

Teacher ma'am ne Shambhavi ko "Relay Desk" par bitha diya: ek mez, ek board aur clue slips ka dabba. Slips ye thin:

1. "Chaar classes ki relay mein aakhri class ke tokens aur kul tokens?"
2. "Ek purani chit par GP ke sirf do terms bache hain: 2nd term 96 aur 5th term 3/2. Poora GP aur pehle 6 terms ka jod?"
3. "Teen classes ke tokens GP mein hain, unka jod 134 aur gunanfal 21952. Kaun kaun se numbers?"
4. "GP 4, 36, 324, ... ka jod 3280 ho gaya. Kitne terms?"
5. "Class fund ke ₹36,000 14% saalana compound interest par rakhe hain. Kis saal ka amount pehli baar ₹60,000 se upar hoga?"
6. "Ek AP ka pehla term 9 hai, aur uska 1st, 4th aur 12th term GP mein hain. d kitna?"

Shambhavi ne dekha ki ek hi formula se saari slips nahi sulajhengi. Kisi mein aₙ chahiye, kisi mein Sₙ, kisi mein divide, kisi mein a/r, a, ar. Usne board par likha: **pehle suraagh pehchano, phir auzaar chuno, hal karo, aur doosre raaste se jaancho.** Aaj hum bhi Relay Desk par baithkar yahi karenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Method chooser** | Ek chart jisme har suraagh (kya diya, kya chahiye) ke saamne uska auzaar likha ho. | Figure 5.1 |
| **Dono-test** | Kisi list ko AP, GP ya "dono nahi" kehne ke liye farak aur ratio, dono ek saath nikalna. | Example 1 |
| **Pehli baar paar** | Wo sabse chhota n jisme amount (ya value) pehli baar target se upar (ya neeche) pahunche. n = 1, 2, 3, ... aazmakar milta hai. | Example 6 |

---

## Pichhle topics se yaad

| Kahan | Kya mila | Is topic mein kahan kaam aayega |
|---|---|---|
| [Topic 1](geometric-progressions.md), Part C aur Part D | Ratio test (saare ratios), a, ar, ar², ... | Part A: Dono-test; Aam galtiyan |
| [Topic 1](geometric-progressions.md), Part E | Compound interest ke amounts GP hain, r = 1 + R/100 | Example 6 |
| [Topic 2](geometric-progressions-part2.md), Part A aur Part F | aₙ = a rⁿ⁻¹ aur A = P(1 + R/100)ⁿ | Example 2 aur Example 6 |
| [Topic 3](geometric-progressions-part3.md), Part A, Part E aur Part G | Do terms se r aur a, b² = ac, a/r, a, ar | Example 3, Example 4 aur Galti 4 |
| [Topic 3](geometric-progressions-part3.md), Part H | AP aur GP ek saath | Example 7 |
| [Topic 4](geometric-progressions-part4.md), Part B aur Part F | Sₙ ke do roop, sum se n aur r | Example 2, Example 5 |
| [Quadratic equations, Topic 6](../quadratic-equations/quadratic-equations-part6.md) | Story check | Example 2, Example 4 aur Example 6 |

---

## Part A: Method chooser aur Dono-test

Har sawaal ko padhkar pehle poochho: **mujhe kya diya hai, aur kya chahiye?** Phir chart se auzaar chuno.

```
 Suraagh (kya diya, kya chahiye)        Auzaar
 -------------------------------        --------------------------------------------------
 a, r, n diye; koi term chahiye     ->  aₙ = a rⁿ⁻¹
 a, r, n diye; sum chahiye          ->  r > 1: Sₙ = a(rⁿ − 1)/(r − 1)
                                        r < 1: Sₙ = a(1 − rⁿ)/(1 − r)
                                        r = 1: Sₙ = na
 a, r aur aakhri term l diye; sum   ->  Sₙ = (lr − a)/(r − 1)
 do terms diye (aₘ aur aₖ)          ->  rᵐ⁻ᵏ = aₘ/aₖ (divide), phir a = aₖ ÷ rᵏ⁻¹
 teen numbers GP mein; sum, product ->  a/r, a, ar (product seedha a³)
 teen numbers GP mein hain ya nahi? ->  b² = ac (teeno non-zero, ac > 0)
 sum diya; n ya r ya a poochha      ->  Sₙ = diya hua sum; rⁿ ko powers se pehchano
 beech ke terms ka sum              ->  Sₘ − Sₖ = terms (k + 1) se m tak
 list AP hai ya GP hai?             ->  farak aur ratio dono dekho (Figure 5.2)
 amount kab target paar kare?       ->  A = P(1 + R/100)ⁿ; n = 1, 2, 3, ... aazmao
```

> **Figure 5.1** – Method chooser: baayen taraf suraagh, daayen taraf auzaar. Ek sawaal mein kai suraagh ek ke baad ek aa sakte hain (jaise "do terms diye, sum chahiye": pehle divide, phir Sₙ), to chart ko baar-baar upar se padho.

| Suraagh | Auzaar | Kyun |
|---|---|---|
| a, r, n diye, term chahiye | aₙ = a rⁿ⁻¹ | a ko r se n − 1 baar guna (Topic 2) |
| a, r, n diye, sum chahiye | Sₙ ka sahi roop | r > 1 par a(rⁿ − 1)/(r − 1), r < 1 par a(1 − rⁿ)/(1 − r), r = 1 par na (Topic 4) |
| do terms diye | rᵐ⁻ᵏ = aₘ/aₖ | aₖ se aₘ tak (m − k) baar r se guna hota hai (Topic 3) |
| teen numbers GP mein, sum ya product diya | a/r, a, ar | product seedha a³ ho jaata hai (Topic 3) |
| teen numbers GP mein hain ya nahi | b² = ac | beech wala term GM hai (Topic 3) |
| sum diya, n poochha | Sₙ = sum, phir powers | rⁿ ek perfect power aata hai (Topic 4) |
| amount ya value kab target paar kare | n = 1, 2, 3, ... aazmao | seedha formula nahi, har n par kimat dekho |

**Pehla sawaal hamesha:** kya ye list AP hai ya GP? Uske liye **Dono-test**: farak nikalo aur ratio nikalo.

```
 Koi list: t1, t2, t3, t4, ...
        :
 Saare farak (t2 - t1, t3 - t2, ...) barabar?
        :
   haan :----> AP hai, d = farak (farak 0 ho to ratio bhi dekho)
        :
   nahi v
 Saare ratio (t2/t1, t3/t2, ...) barabar?
        :
   haan :----> GP hai, r = ratio
        :
   nahi v
 Na AP, na GP
```

> **Figure 5.2** – AP ya GP ka faisla. Pehle saare consecutive farak dekho, phir saare consecutive ratio. Sirf pehle do dekhna kaafi nahi (Topic 1, Galti 1). Ek constant list (jaise 13, 13, 13) dono tests paas karti hai.

### Example 1: Dono-test chaar lists par

| List | Farak | Ratio | Faisla |
|---|---|---|---|
| 19, 27, 35, 43 | 8, 8, 8 | 27/19, 35/27, 43/35 (barabar nahi) | AP, d = 8 |
| 5, 7, 9.8, 13.72 | 2, 2.8, 3.92 (barabar nahi) | 1.4, 1.4, 1.4 | GP, r = 7/5 |
| 13, 13, 13, 13 | 0, 0, 0 | 1, 1, 1 | AP (d = 0) aur GP (r = 1), dono |
| 2, 5, 11, 23 | 3, 6, 12 (barabar nahi) | 5/2, 11/5, 23/11 (barabar nahi) | na AP, na GP |

**Jaanch:** AP: 19 + 3 × 8 = 43 ✅. GP: 5 × (7/5)³ = 5 × 343/125 = 13.72 ✅. Teesri list mein 13 × 1³ = 13 ✅. Chauthi mein farak 3, 6, 12 khud ek GP hain, par list AP nahi hai, kyunki farak barabar nahi.

---

## Part B: Mila-jula sawaal

### Example 2: Relay ki slip 1 (a, r, n diye hain)

Class 6 ke 2 tokens, har agli class pichhli ka 6 guna. a = 2, r = 6, n = 4.
Aakhri class: a₄ = 2 × 6³ = 2 × 216 = **432 tokens.**
Kul tokens: r > 1, to Sₙ = a(rⁿ − 1)/(r − 1): S₄ = 2 × (6⁴ − 1)/(6 − 1) = 2 × 1295/5 = **518 tokens.**
**Jaanch:** 2 + 12 + 72 + 432 = 518 ✅. Aakhri term wale roop se: (lr − a)/(r − 1) = (432 × 6 − 2)/5 = 2590/5 = 518 ✅.
**Story check:** tokens poore numbers hain, aur 432 = 72 × 6 se mel khaata hai.

### Example 3: Slip 2: do terms se GP, phir Sₙ

a₂ = 96 aur a₅ = 3/2. **Pehle divide:** a₅/a₂ = r³ = (3/2)/96 = 1/64. Power ka farak 3 (odd) hai, to ek hi real r: r = **1/4.** Phir a₂ = a × r, to a = 96 ÷ (1/4) = **384.**
GP: 384, 96, 24, 6, 3/2, 3/8, ... Ab r < 1 hai, to S₆ = a(1 − r⁶)/(1 − r) = 384 × (1 − 1/4096)/(3/4) = 384 × (4095/4096) × (4/3) = 512 × 4095/4096 = **4095/8 = 511.875.**
**Jaanch:** 384 + 96 + 24 + 6 + 1.5 + 0.375 = 511.875 ✅. Aur a₅ = 384 × (1/4)⁴ = 384/256 = 1.5 ✅ (diya hua term wapas mil gaya).

### Example 4: Slip 3: teen numbers GP mein, sum aur product diya

Chart kehta hai: **a/r, a, ar.** Product = a³ = 21952, to a = 28 (28 × 28 = 784, 784 × 28 = 21952). Sum: 28/r + 28 + 28r = 134, to 28/r + 28r = 106. Do se divide: 14/r + 14r = 53. r se guna: 14r² − 53r + 14 = 0.
Discriminant D = 53² − 4 × 14 × 14 = 2809 − 784 = 2025 = 45². r = (53 ± 45)/28, to r = 98/28 = **7/2** ya r = 8/28 = **2/7.**
r = 7/2 par: 28 ÷ (7/2) = 8, 28, 28 × 7/2 = 98. r = 2/7 par wahi teen numbers ulte kram mein: 98, 28, 8. Isliye numbers **8, 28, 98** hain (ek hi set, ek ya doosre order mein).
**Jaanch:** 8 + 28 + 98 = 134 ✅, 8 × 28 × 98 = 21952 ✅, aur b² = ac: 28² = 784 = 8 × 98 ✅.
**Story check:** tokens positive poore numbers hain, dono r se ek hi set mila, to ek hi jawab.

### Example 5: Slip 4: sum diya, n poochha

GP 4, 36, 324, ...: a = 4, r = 36/4 = 9. Sₙ = 4(9ⁿ − 1)/(9 − 1) = (9ⁿ − 1)/2. Ise 3280 ke barabar rakho: 9ⁿ − 1 = 6560, to 9ⁿ = 6561. 9 ke powers: 9, 81, 729, **6561**: ye chautha power hai, to **n = 4.**
**Jaanch:** 4 + 36 + 324 + 2916 = 3280 ✅. **Story check:** n poora aur positive hai, to chalta hai.

### Example 6: Slip 5: compound interest aur "pehli baar paar"

₹36,000 par R = 14% saalana compound interest. Saal ke end ke amounts: 36000 × 1.14 = 41,040, phir 1.14 se guna, ... Ye **GP** hai: a = 41,040 (pehle saal ka amount), r = 1 + 14/100 = 1.14. Nth term aₙ = 41040 × 1.14ⁿ⁻¹ = 36000 × 1.14ⁿ (Topic 2, Part F wala wada).

```
Saal 0   ####################################                          36,000.00
Saal 1   #########################################                     41,040.00
Saal 2   ###############################################               46,785.60
Saal 3   #####################################################         53,335.58
Saal 4   ############################################################# 60,802.57
Lakshya  ############################################################  60,000.00
```

> **Figure 5.3** – Saal 0 (principal) se saal 4 tak ke amounts, 1 # lagbhag ₹1,000 ke barabar. Neeche "Lakshya" ki bar ₹60,000 ki hai. Saal 3 ki bar lakshya se chhoti hai, saal 4 ki bar uske upar nikal gayi.

n seedhe formula se nahi nikalta, to **aazmao** (calculator se):

| Saal n | Amount |
|---|---|
| 1 | ₹41,040 |
| 2 | ₹46,785.60 |
| 3 | ₹53,335.58 |
| 4 | ₹60,802.57 |

3 saal baad ₹53,335.58, jo ₹60,000 se kam hai. 4 saal baad ₹60,802.57, jo upar hai. Isliye **pehli baar paar 4th saal ke end mein.**
**Jaanch:** 1.14³ = 1.481544 aur 1.14⁴ = 1.68896016; chahiye 60000/36000 = 1.6666...; 1.481544 < 1.6666 < 1.68896 ✅.
**Story check:** byaaj saal ke end mein jodte hain, isliye jawab poora saal (4) hai, 3.5 jaisa kuch nahi. Paise 2 decimal tak liye hain.

### Example 7: Slip 6: AP aur GP ek saath

AP: a = 9, difference d (d ≠ 0). 1st, 4th, 12th terms: 9, 9 + 3d, 9 + 11d. Ye GP mein hain, to beech wale ka square = pehla × teesra:
(9 + 3d)² = 9 × (9 + 11d)
81 + 54d + 9d² = 81 + 99d
9d² − 45d = 0, to 9d(d − 5) = 0, **d = 0 ya d = 5.**
d = 0 mein har term 9 hota (constant list), jise sawaal ne alag rakha hai (d ≠ 0), to **d = 5.**
AP: 9, 14, 19, 24, ..., a₁₂ = 9 + 11 × 5 = 64. GP ke teen terms: **9, 24, 64**, r = 8/3.
Ek aur sawaal: AP ke pehle 12 terms ka sum: S₁₂ = (12/2)(9 + 64) = **438.**
**Jaanch:** 24² = 576 = 9 × 64 ✅. S₁₂ doosre formula se: 6 × [18 + 11 × 5] = 6 × 73 = 438 ✅.

---

## Aam galtiyan (bachke rehna)

**Galti 1: "r negative hai, to GP ghat rahi hai"**

Ek bachche ne list 6, −6, 6, −6, 6 dekhi. Ratio −1 hai, aur bachche ne kaha: "−1 chhota number hai, to har term chhota hota hai: GP ghat rahi hai."
**Ulta udaharan:** 6 se −6 par term sach mein ghata, par −6 se 6 par term **badha.** Terms baari-baari se 6 aur −6 ho rahe hain, na badh rahe, na ghat rahe. Sums bhi dekho: S₁ = 6, S₂ = 0, S₃ = 6, S₄ = 0, ... Formula se S₇ = 6 × ((−1)⁷ − 1)/(−1 − 1) = 6 × (−2)/(−2) = 6.
Kyun? "Badhna" ya "ghatna" ke liye har term ko pichhle se bada (ya chhota) hona chahiye. r < 0 par sign badalta rehta hai, to list **alternating** hai (Topic 1), na increasing, na decreasing. Aur ek ulta mamla: a negative ho aur r > 1, jaise −2, −20, −200 (r = 10), to terms **ghatte** hain, jabki r bada hai. Sahi tareeka: a aur r dono dekho: a > 0 aur r > 1 badhti, a > 0 aur 0 < r < 1 ghatti, r < 0 alternating.
**Jaanch:** −20 < −2 hai, to −2, −20, −200 ghat rahi hai ✅, aur 6, −6, 6 mein sign baari-baari badalta hai ✅.

**Galti 2: "GP mein 0 aa sakta hai"**

List 250, 50, 10, 2, 0 dekhkar ek bachche ne kaha: "terms 1/5 se chhote hote ja rahe hain, to aakhir mein 0 aa jaata hai. Ye GP hai."
**Ulta udaharan:** ratios: 50/250 = 1/5, 10/50 = 1/5, 2/10 = 1/5, par 0/2 = **0**, jo 1/5 nahi hai. Ratio test fail, to **ye GP nahi hai.** Asli GP ka agla term 2 × 1/5 = 2/5 hota, phir 2/25, ...: chhote hote jaate hain, par kabhi 0 nahi.
Kyun? Non-zero number ko non-zero r se guna karo to non-zero hi milta hai. Isliye GP ka koi term 0 nahi hota (a ≠ 0 aur r ≠ 0). 0, 0, 0 jaisi list mein ratio 0/0 bhi nikalta hi nahi.
**Jaanch:** a₅ = 250 × (1/5)⁴ = 250/625 = 2/5 ≠ 0 ✅.

**Galti 3: "r = 0 le lo, GP ban jaati hai"**

a = 9 aur r = 0 se list 9, 0, 0, 0 banti hai. Bachche ne kaha: "ye GP hai, r = 0."
**Ulta udaharan:** r = agla ÷ pichhla se pehla ratio 0/9 = 0 aata hai, par doosra ratio 0/0 hai, jo define hi nahi hota. Ulta bhi chalo: a₃ = a₂ × r likho to 0 = 0 × r, jisme r **koi bhi number** ho sakta hai. Matlab list se r pakda nahi jaata. Aur a/r, a, ar ya GP ko ulta likhne par ratio 1/r chahiye, jo r = 0 par bana hi nahi sakta.
Kyun? GP ki parivaasha mein r ≠ 0 shart hai: tabhi har term pichhle se ek hi r se juda hota hai aur r list se wapas mil jaata hai (Topic 1 aur Topic 3).
**Jaanch:** 9, 0, 0, 0 mein ratios 0/9 = 0 aur 0/0 (undefined): ratio test poora hota hi nahi, to GP nahi ✅.

**Galti 4: "GP mein pehle aur aakhri term ka mean beech ka term hota hai"**

GP 2, 14, 98 (r = 7). Ek bachche ne AP wali baat lagayi: "(2 + 98)/2 = 50, to beech ka term 50 hona chahiye."

```
 -o-----o-----------------o-----------------------o--
  2     14                50                      98
  a     b                 AM                      c
```

> **Figure 5.4** – Number line (1 chinh = 2 units). GP ke terms a = 2, b = 14, c = 98 aur unka AM = 50. AM beech ke term 14 se bahut door hai.

**Ulta udaharan:** beech ka term 14 hai, 50 nahi. Sahi GP-wali baat: b² = ac, yaani 14² = 196 = 2 × 98, aur GM = √196 = 14. Mean (AM) 50 hai, GM 14, aur GM chhota hai.
Kyun? "Beech ka term = mean" AP ki property hai: 2b = a + c. GP ki property b² = ac hai. Dono ek saath tabhi sach hote hain jab a = c: (a + c)² = 4b² = 4ac se (a − c)² = 0, to a = c = b, yaani constant list (Topic 3, Part H mein ye pehle dekha tha). Pehle test karo ki list AP hai ya GP, phir property lagao.
**Jaanch:** 2b = 28 aur a + c = 100, barabar nahi, to AP nahi ✅. b² = 196 = ac ✅, to GP hai.

---

## Quick Recap

- **Method chooser (Figure 5.1):** pehle suraagh pehchano: kya diya, kya chahiye. Phir auzaar: aₙ = a rⁿ⁻¹, Sₙ ke do roop (r = 1 par na), do terms se divide, a/r, a, ar, b² = ac.
- **Dono-test:** saare farak aur saare ratio dekho: AP, GP, dono (constant list) ya dono nahi.
- **Mixed sawaal:** do terms se r, a, phir Sₙ; teen numbers GP mein, sum ya product se quadratic; sum se n powers pehchan kar; AP aur GP ke sawaal mein pehle beech ka square = pehla × teesra likho.
- **Compound interest:** amounts GP hain, r = 1 + R/100; "pehli baar paar" n = 1, 2, 3, ... aazmakar milta hai, aur jawab poora saal hota hai.
- **Galti 1:** r negative ho to GP alternating hai, ghatti hui nahi. **Galti 2:** GP ka koi term 0 nahi hota. **Galti 3:** r = 0 se GP nahi banti. **Galti 4:** pehle aur aakhri ka mean beech ka term AP mein hota hai, GP mein b² = ac.

---

## Practice Questions

1. Decide whether each list is an AP, a GP, both or neither. Give d or r where it exists. (i) 216, 180, 150, 125 (ii) 17, 28, 39, 50 (iii) 2, 6, 12, 20 (iv) 360, −120, 40, −40/3.

2. Find the 6th term and the sum of the first 6 terms of the GP 0.7, 7, 70, ... .

3. In a GP the 2nd term is 72 and the 5th term is −8/3. Find the first term, the common ratio and the sum of the first 4 terms.

4. Three numbers are in GP. Their sum is 151 and their product is 91125. Find the numbers.

5. How many terms of the GP 7, 56, 448, ... must be added to get 4095?

6. An AP has first term 18 and a common difference d ≠ 0. Its 1st, 4th and 11th terms are in GP. Find d, write the three GP terms, and find the sum of the first 11 terms of the AP.

7. ₹38,000 is invested at 9% per annum compound interest (compounded yearly). (a) Write the amounts at the end of years 1, 2 and 3 and show that they form a GP with r = 1.09. (b) In which year does the amount first exceed ₹50,000?

8. A new cloth holds 1296 mg of loose dye after the first wash. Each later wash leaves one-sixth of the dye that was in the cloth before it. (a) How much dye is left after the 4th wash? (b) After which wash is the dye first less than 1 mg? (c) Will the dye ever be exactly 0 in this model?

9. Find the sum of the 4th to the 7th terms of the GP 1024, −256, 64, ... .

10. Without solving, name the tool you would use: (a) the 15th term of a GP whose first two terms are given; (b) the 3rd and 8th terms of a GP are given and the sum of the first 10 terms is wanted; (c) three numbers in GP with a given sum and product; (d) deciding whether 40 is the geometric mean of 25 and 64.

11. True or false, with a reason: (a) 11, −11, 11, −11, ... is a decreasing GP. (b) 512, 64, 8, 1, 0 is a GP with r = 1/8. (c) 5, 0, 0, 0 is a GP with r = 0. (d) In the GP 6, 30, 150 the middle term is the mean of the first and the last. (e) The GP −3, −30, −300, ... has r = 10 but its terms decrease.

12. A laptop bought for ₹84,000 loses 12% of its previous year's value every year. Write its value at the end of years 1, 2 and 3 and find r. In which year does the value first fall below ₹50,000?

### Answers

1. (i) Farak 180 − 216 = −36, 150 − 180 = −30: barabar nahi. Ratio 180/216 = 5/6, 150/180 = 5/6, 125/150 = 5/6: **GP, r = 5/6.** (ii) Farak 11, 11, 11: **AP, d = 11** (ratio 28/17, 39/28 barabar nahi). (iii) Farak 4, 6, 8 aur ratio 3, 2, 5/3: **na AP, na GP.** (iv) Ratio −120/360 = −1/3, 40/(−120) = −1/3, (−40/3)/40 = −1/3: **GP, r = −1/3** (farak barabar nahi). Jaanch: 40 × (−1/3) = −40/3 ✅ aur 216 × (5/6)³ = 216 × 125/216 = 125 ✅.

2. a = 0.7, r = 7/0.7 = 10, n = 6. a₆ = 0.7 × 10⁵ = **70000.** S₆ = 0.7 × (10⁶ − 1)/9 = 0.7 × 111111 = **77777.7.** Jaanch: 0.7 + 7 + 70 + 700 + 7000 + 70000 = 77777.7 ✅.

3. a₅/a₂ = r³ = (−8/3)/72 = −1/27, to **r = −1/3** (power ka farak 3 odd hai, ek hi real r). a = a₂/r = 72 ÷ (−1/3) = **−216.** S₄ = −216 × (1 − (−1/3)⁴)/(1 − (−1/3)) = −216 × (80/81)/(4/3) = −216 × (80/81) × (3/4) = **−160.** Jaanch: GP −216, 72, −24, 8, −8/3 (a₅ = −8/3 ✅) aur −216 + 72 − 24 + 8 = −160 ✅.

4. Numbers a/r, a, ar. Product a³ = 91125, to a = 45 (45³ = 91125). Sum: 45/r + 45 + 45r = 151, to 45/r + 45r = 106, 45r² − 106r + 45 = 0. D = 106² − 4 × 45 × 45 = 11236 − 8100 = 3136 = 56². r = (106 ± 56)/90, to r = 9/5 ya 5/9. r = 9/5 par numbers 25, 45, 81 (r = 5/9 par ulte kram mein). **Numbers 25, 45, 81.** Jaanch: 25 + 45 + 81 = 151 ✅, 25 × 45 × 81 = 91125 ✅, 45² = 2025 = 25 × 81 ✅.

5. a = 7, r = 8. Sₙ = 7(8ⁿ − 1)/7 = 8ⁿ − 1 = 4095, to 8ⁿ = 4096. 8, 64, 512, 4096: chautha power, **n = 4.** Jaanch: 7 + 56 + 448 + 3584 = 4095 ✅.

6. 1st, 4th, 11th terms: 18, 18 + 3d, 18 + 10d. (18 + 3d)² = 18(18 + 10d): 324 + 108d + 9d² = 324 + 180d, to 9d² − 72d = 0, 9d(d − 8) = 0. d ≠ 0, to **d = 8.** AP: 18, 26, 34, 42, ..., a₁₁ = 18 + 80 = 98. GP terms **18, 42, 98** (r = 7/3). S₁₁ = (11/2)(18 + 98) = 11 × 58 = **638.** Jaanch: 42² = 1764 = 18 × 98 ✅. S₁₁ doosre formula se: (11/2) × [36 + 10 × 8] = (11/2) × 116 = 638 ✅.

7. (a) Year 1: 38000 × 1.09 = ₹41,420. Year 2: 41420 × 1.09 = ₹45,147.80. Year 3: 45147.8 × 1.09 = ₹49,211.10 (lagbhag). Ratios 45147.8/41420 = 1.09 aur 49211.102/45147.8 = 1.09, to **GP, a = 41,420, r = 1.09** (r = 1 + R/100). (b) 3 saal baad ₹49,211.10 < ₹50,000; 4th saal: ₹53,640.10 > ₹50,000. **4th saal ke end mein.** Jaanch: 38000 × 1.09⁴ = 38000 × 1.41158161 = 53,640.10 ✅. Story check: poora saal chahiye, aur 3 saal par ₹788.90 kam hai.

8. a = 1296, r = 1/6. (a) a₄ = 1296 × (1/6)³ = 1296/216 = **6 mg.** (b) Terms: 1296, 216, 36, 6, 1, 1/6. 5th wash ke baad exactly 1 mg hai (1 se kam nahi), 6th wash ke baad 1/6 mg < 1. **6th wash.** (c) **Nahi:** har wash par non-zero amount ka 1/6 bachta hai, jo non-zero hi hota hai (Galti 2). Asli kapde mein dye ke kan ginti ke hote hain, to ye sirf ek model hai. Jaanch: a₆ = 1296/6⁵ = 1296/7776 = 1/6 ✅.

9. a = 1024, r = −1/4. Terms 4 se 7: S₇ − S₃. S₇ = 1024(1 − (−1/4)⁷)/(5/4) = 819.2 × (1 + 1/16384) = 819.25 = 3277/4. S₃ = 1024 − 256 + 64 = 832. **S₇ − S₃ = 819.25 − 832 = −12.75 = −51/4.** Jaanch: terms 4 se 7: −16, 4, −1, 1/4. −16 + 4 − 1 + 0.25 = −12.75 ✅.

10. (a) aₙ = a rⁿ⁻¹ (a = pehla term, r = doosra ÷ pehla, n = 15). (b) Divide: rᵖ⁻ᵠ = a₈/a₃, yaani r⁵, phir r, phir a, phir Sₙ ka formula. (c) a/r, a, ar likho: product a³, sum se quadratic. (d) b² = ac: 40² = 1600 aur 25 × 64 = 1600, to **haan**, 40 GM hai. Jaanch (d): 25, 40, 64 mein ratio 8/5, 8/5 ✅.

11. (a) **False** ❌. Ratio −1 hai, par −11 se 11 par term badhta hai: alternating hai (Galti 1). (b) **False** ❌. 0/1 = 0 ≠ 1/8, GP ka koi term 0 nahi hota (Galti 2). (c) **False** ❌. 0/0 define nahi hota, r ≠ 0 chahiye (Galti 3). (d) **False** ❌. (6 + 150)/2 = 78 ≠ 30; 30² = 900 = 6 × 150 (Galti 4). (e) **True** ✅. r = 10 hai, par −30 < −3 aur −300 < −30: terms ghat rahe hain (a negative hai, Galti 1).

12. r = 1 − 12/100 = 0.88. Year 1: 84000 × 0.88 = ₹73,920. Year 2: ₹65,049.60. Year 3: ₹57,243.65 (57243.648). Ratios 0.88 sab jagah, to **GP, r = 0.88.** Aage: year 4: ₹50,374.41 (abhi bhi ₹50,000 se upar), year 5: ₹44,329.48. **5th saal ke end mein** pehli baar ₹50,000 se neeche. Jaanch: 84000 × 0.88⁵ = 84000 × 0.5277319 = 44,329.48 ✅. Story check: poore saal ke end par value li hai, aur 4th saal par ₹374.41 upar rehta hai.

---

Shabaash! Ab tum kisi bhi GP ka sawaal padhkar suraagh pakad sakte ho, sahi auzaar chun sakte ho, aur apne jawab ko doosre raaste ya story check se parakh sakte ho. Poora chapter ab tumhare haath mein hai. Neeche chapter ka saar ek table mein hai.

---

# Chapter Wrap-up: Geometric Progressions

| Topic | Kya seekha | Ek line |
|---|---|---|
| 1. Guna Karte Jao: GP Kya Hoti Hai? | GP, common ratio r = aₙ₊₁/aₙ; r > 1, 0 < r < 1, r < 0, r = 1; ratio test; a, ar, ar², ...; AP aur GP ki tulna; compound interest aur ghatti keemat ke amounts GP hain; doubling | Saare consecutive ratios check karo, sirf pehle do nahi; r fraction ya negative bhi ho sakta hai |
| 2. nth Term Of A GP | aₙ = a rⁿ⁻¹ aur uska kyun; term, position, a ya r nikalna; term hai ya nahi; aakhir se term aur terms ki ginti; aₙ ek exponential expression | r ko n − 1 baar guna karo, n baar nahi; AP wala a + (n − 1)r nahi |
| 3. GP Ko Pehchanne Ki Paheliyan | do terms se rᵐ⁻ᵏ = aₘ/aₖ, phir a; power ka farak even ho to r = ±; har m-wa term GP, ratio rᵐ; b² = ac, GM; a/r, a, ar; AP aur GP ek saath | Teen numbers a, ar, ar² ya a/r, a, ar likho, ar³ nahi; b² = ac ke liye ac > 0 |
| 4. Sum Of n Terms Of A GP | guna-ghatao chaal se Sₙ = a(rⁿ − 1)/(r − 1) (r = 1 par na); shatranj 2⁶⁴ − 1; n aur r sum se; Sₘ − Sₖ; Sₙ − Sₙ₋₁ = aₙ; compound interest ka jawab aₙ | r < 1 par numerator aur denominator ke sign mel mein rakho; S₉ − S₄ terms 5 se 9 hain |
| 5. Sab Kuch Mila Kar | method chooser aur Dono-test; do terms se Sₙ, teen numbers sum ke saath, sum se n, "pehli baar paar", AP aur GP ek saath; galtiyan: r < 0 ghatti nahi, GP mein 0 nahi, r = 0 nahi, mean sirf AP mein | Suraagh pakdo, auzaar chuno, aur jawab ko doosre raaste ya story check se jaancho |

---

Geometric Progressions ka ye safar "har baar guna karo" wali ek chhoti si list se shuru hua, nth term aur do-terms ki paheliyon se guzra, guna-ghatao chaal se sum tak pahuncha, aur aaj Relay Desk par poora hua. Ab tum kisi bhi GP ko dekh, pehchan aur hal kar sakte ho.

**Aage kya?** Class 10 Maths Chapter 6 Linear Inequations mein wo sawaal aayenge jab equation mein barabar (=) ke bajaye "se zyada" ya "se kam" ho.
