# Chapter: Arithmetic Progressions (Part 4)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [arithmetic-progressions-part3.md](arithmetic-progressions-part3.md) se aage chalti hai** (wahan Topic 3 mein do terms se poora AP banana aur terms ki aage-peechhe wali barabari seekhi). Chapter ki shuruaat: [arithmetic-progressions.md](arithmetic-progressions.md). nth term ka formula: [arithmetic-progressions-part2.md](arithmetic-progressions-part2.md). Quadratic equation ka formula: [quadratic-equations-part4.md](../quadratic-equations/quadratic-equations-part4.md). Kahani ka story check: [quadratic-equations-part6.md](../quadratic-equations/quadratic-equations-part6.md). Polynomial ki degree: [polynomials.md](../polynomials/polynomials.md).
> **Topics covered in this file:**
> 4. Sum Of n Terms: Gauss Ki Trick

---

# Topic 4: Sum Of n Terms: Gauss Ki Trick

Topic 1 se Topic 3 tak hum AP ke **terms** ke saath khelte rahe: kisi bhi term ko aₙ = a + (n − 1)d se nikalna, do terms se poora AP banana. Ab ek naya sawaal: agar saare terms ko **jod** diya jaaye, to kul kitna hoga? Terms ko ek-ek karke jodna n bada ho to thakane wala kaam hai. Is topic mein ek chhoti si chaal seekhenge, jisse 100 terms ka sum bhi kuch seconds mein nikal jaata hai, aur phir uski madad se n dhundhna, a ya d dhundhna aur beech ke terms ka sum nikalna.

---

## Mitul ke dibbon ki pyramid aur Gauss ki kahani

Mitul ke Papa ka tiles ka chhota godown hai. Sunday ko Papa ne tiles ke dibbon ki ek pyramid lagayi: sabse upar wali kataar mein 1 dibba, uske neeche 2, phir 3, aur isi tarah sabse neeche 15 dibbe. Papa ne poochha, "Mitul, kul kitne dibbe hain? Bina ek-ek ginne batao." (Bhaari dibbon ki itni oonchi pyramid asli godown mein kabhi nahi lagti aur us par chadhna bhi mana hai. Yahan ye sirf neeche khade hokar ginne ki paheli hai.)

Mitul ne ginna shuru kiya: 1 + 2 = 3, 3 + 3 = 6, 6 + 4 = 10 ... aur beech mein hi gadbad ho gayi. Didi ne hanskar kaha, "Ruk, pehle ek purani kahani sun."

Kaha jaata hai ki Germany mein Carl Friedrich Gauss naam ka ek bachcha tha. Class 3 mein, lagbhag 9 se 10 saal ki umar mein, ek din teacher ne class ko der tak busy rakhne ke liye likha: 1 + 2 + 3 + ... + 100. Teacher ko laga ki ab aadha ghanta shaanti rahegi. Par Gauss ne kuch hi der mein slate par sirf ek number likha: **5050**. (Kahani ke chhote-chhote hisse kai tareeke se sunaye jaate hain, par vichaar bilkul sahi hai.)

Gauss ne kya socha? Usne 1 ko sabse aakhri number 100 se jodi: 1 + 100 = 101. Phir 2 ko 99 se: 2 + 99 = 101. Phir 3 + 98 = 101. Har jodi ka jod **101**. Aur aisi jodiyan 100 ÷ 2 = **50** hain. To kul = 50 × 101 = 5050.

Aaj hum is chaal ko AP ke liye hamesha chalne wale formula mein badalenge, aur Mitul ki pyramid ka jawab Part D mein nikalenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Sₙ** | Kisi AP ke **pehle n terms ka sum**: a₁ + a₂ + ... + aₙ. | AP 9, 13, 17, ... mein S₃ = 9 + 13 + 17 = 39 |
| **Series** | Terms ko + lagakar likha hua jod: 9 + 13 + 17 + ... (sequence mein sirf list hoti hai, series mein jodna bhi hota hai). | 1 + 2 + 3 + ... + 100 |
| **Gauss jodi** | AP ke shuru se k-wa term aur aakhir se k-wa term ki jodi. Aisi har jodi ka jod ek hi number hota hai: a + l. | 1 + 100, 2 + 99, 3 + 98: har jodi 101 |
| **Aage-peechhe wali trick** | AP ko ek baar seedha aur ek baar ulta (aakhri term se pehle tak) likhna, aur dono ko column ke hisaab se jodna. Isse Sₙ ka formula banta hai. | Figure 4.3 |
| **Beech ka sum** | Pehle m terms ka sum Sₘ, pehle k terms ka sum Sₖ ho, to **Sₘ − Sₖ** terms (k + 1) se m tak ka sum hai. | S₂₀ − S₁₀ = 11-wa se 20-wa term tak |

---

## Pichhle topics se yaad

| Kahan | Kya mila | Is topic mein kahan kaam aayega |
|---|---|---|
| [Topic 2](arithmetic-progressions-part2.md) | aₙ = a + (n − 1)d, aakhri term l, aur terms ki ginti n = (l − a)/d + 1 | Part A, B, C, E: l ko pehchanna, n nikalna |
| [Quadratic equations, Topic 4](../quadratic-equations/quadratic-equations-part4.md) | Quadratic formula, D = b² − 4ac | Part F: Sₙ diya ho to n ki quadratic |
| [Quadratic equations, Topic 6](../quadratic-equations/quadratic-equations-part6.md) | Story check: jawab kahani mein baith raha hai ya nahi | Part F: n poora aur positive ho |
| [Polynomials, Topic 1](../polynomials/polynomials.md) | Polynomial ki degree: x² wala polynomial degree 2 ka hota hai | Part I: Sₙ ek quadratic polynomial hai |

---

## Part A: Gauss ki soch: jodi banana

Chhota example pehle: 1 + 2 + 3 + ... + 10. Dus numbers, jodiyan paanch.

```
  1   2   3   4   5   6   7   8   9   10
  :   :   :   :   +---+   :   :   :   :   5 + 6 = 11
  :   :   :   +-----------+   :   :   :   4 + 7 = 11
  :   :   +-------------------+   :   :   3 + 8 = 11
  :   +---------------------------+   :   2 + 9 = 11
  +-----------------------------------+   1 + 10 = 11
```

> **Figure 4.1** – 1 se 10 tak ke numbers ki Gauss jodiyan: sabse bahar wali 1 + 10 se andar wali 5 + 6 tak. Har jodi ka jod 11 hai, aur jodiyan 10 ÷ 2 = 5 hain, to sum = 5 × 11 = 55.

Isi baat ko ek aur tarah se dekho: 1 + 2 + ... + 6 ko seedhi seedhi (#) aur ulti seedhi (o) dono se banao, aur ulti seedhi ko seedhi ke saath chipka do.

```
 #oooooo
 ##ooooo
 ###oooo
 ####ooo
 #####oo
 ######o
```

> **Figure 4.2** – # wali seedhi mein kataaron mein 1, 2, 3, 4, 5, 6 dibbe hain, aur o wali ulti seedhi mein 6, 5, 4, 3, 2, 1. Dono milkar 6 kataar × 7 dibbe ka ek poora aayat (rectangle) banati hain, yaani 42 dibbe. Seedhi aadhi hai, to 1 + 2 + ... + 6 = 42 ÷ 2 = 21.

Dhyan do ki Figure 4.2 mein jodna **kataar ke hisaab se** hai, term ke naam se nahi. Isi soch se Part B ka formula banega, aur wo ginti ke even ya odd hone par nirbhar nahi karega.

---

## Part B: Formula ka janm: AP ko aage-peechhe likhkar jodna

Ek AP lo jiska pehla term a, common difference d, n terms, aur aakhri term l hai. Yaad rakho aakhri term l = a + (n − 1)d (Topic 2). Pehle ek chhota AP dekhte hain: 9, 13, 17, 21, 25 (a = 9, d = 4, n = 5, l = 25).

```
forward :      9   13   17   21   25
backward:     25   21   17   13    9
            -------------------------
add     :     34   34   34   34   34
```

> **Figure 4.3** – Upar S₅ seedha likha, neeche wahi sum ulta (aakhri term se pehle term tak). Har column ka jod 9 + 25 = 34 aaya. Paanch columns, to dono sum milkar 5 × 34 = 170, aur ek sum = 85. Check: 9 + 13 + 17 + 21 + 25 = 85.

Ab yahi kaam **letters** se, har line dikhate hue.

**Seedha likho** (pehle term se):
Sₙ = a + (a + d) + (a + 2d) + ... + (l − 2d) + (l − d) + l

**Ulta likho** (aakhri term se). AP ko ulta padhne par har kadam par d **ghatta** hai, isliye l ke baad l − d, phir l − 2d, ... aur aakhir mein a:
Sₙ = l + (l − d) + (l − 2d) + ... + (a + 2d) + (a + d) + a

**Dono ko column ke hisaab se jodo.** Pehla column: a + l. Doosra: (a + d) + (l − d) = a + l, kyunki +d aur −d kat gaye. k-wa column: (a + (k − 1)d) + (l − (k − 1)d) = a + l. Yaani **har column ka jod a + l** hai, aur kul n columns hain:

2Sₙ = n(a + l), to **Sₙ = (n/2)(a + l)**  ... (1)

Ab l = a + (n − 1)d rakho: a + l = 2a + (n − 1)d, aur

**Sₙ = (n/2)[2a + (n − 1)d]**  ... (2)

Ye kyun sahi hai, ek line mein: shuru se k-wa term a + (k − 1)d hai aur aakhir se k-wa term l − (k − 1)d hai. Ye dono bade term ke saath utna hi door hain, isliye ek badhta hai aur doosra ghatta hai, aur jod nahi badalta. Ye proof n even ho ya odd, dono par chalta hai, kyunki hum terms ko aapas mein nahi, seedhi aur ulti line ke columns mein jod rahe hain.

**Kab kaun sa formula:**

| Kya diya hai | Konsa formula | Kyun |
|---|---|---|
| Pehla term a aur aakhri term l (aur n) | (1): Sₙ = (n/2)(a + l) | Bas ek jod aur ek guna |
| Pehla term a aur common difference d (aur n) | (2): Sₙ = (n/2)[2a + (n − 1)d] | l banane ki zaroorat nahi |
| Sirf a, d aur l diye ho, n nahi | Pehle n = (l − a)/d + 1 (Topic 2), phir (1) | (1) mein n chahiye |

---

## Part C: Seedha sum nikalna

### Example 1: a = 9, d = 4, n = 25

AP 9, 13, 17, ... ke pehle 25 terms ka sum. Yahan a = 9, d = 13 − 9 = 4, n = 25. Formula (2):
S₂₅ = (25/2)[2 × 9 + 24 × 4] = (25/2)[18 + 96] = (25/2) × 114 = 25 × 57 = **1425.**
**Jaanch:** doosra formula. a₂₅ = 9 + 24 × 4 = 105. (1): S₂₅ = (25/2)(9 + 105) = (25/2) × 114 = 1425 ✅.

### Example 2: negative first term

AP −14, −9, −4, 1, ... ke pehle 30 terms ka sum. a = −14, d = −9 − (−14) = 5, n = 30.
S₃₀ = (30/2)[2 × (−14) + 29 × 5] = 15[−28 + 145] = 15 × 117 = **1755.**
**Jaanch:** a₃₀ = −14 + 145 = 131. (1): 15 × (−14 + 131) = 15 × 117 = 1755 ✅. Chhote n par bhi dekh lo (formula zero paar karne par bhi chalta hai): S₆ haath se: −14 − 9 − 4 + 1 + 6 + 11 = −9, aur formula 3 × [−28 + 25] = −9 ✅.

### Example 3: fraction wala AP

AP 1/2, 2, 7/2, 5, ... ke pehle 18 terms ka sum. a = 1/2, d = 2 − 1/2 = 3/2, n = 18.
S₁₈ = 9 × [1 + 17 × 3/2] = 9 × [1 + 51/2] = 9 × 53/2 = **477/2 = 238.5.**
**Jaanch:** a₁₈ = 1/2 + 17 × 3/2 = 1/2 + 51/2 = 26. (1): 9 × (1/2 + 26) = 9 × 53/2 = 477/2 ✅.

### Example 4: aakhri term diya hai, n nahi

AP 30, 26, 22, ..., −22 ka sum. a = 30, d = −4, l = −22.
Pehle n: n = (l − a)/d + 1 = (−22 − 30)/(−4) + 1 = 13 + 1 = 14. (1): S₁₄ = 7 × (30 + (−22)) = 7 × 8 = **56.**
**Jaanch:** doosra formula (2): 7 × [60 + 13 × (−4)] = 7 × 8 = 56 ✅. Haath se bhi: positive terms 30, 26, ..., 2 (8 terms) ka sum 128, aur negative terms −2, −6, −10, −14, −18, −22 ka sum −72, to 128 − 72 = 56 ✅.

---

## Part D: Khaas sums: natural, odd aur even numbers

Teen AP bahut milte hain. Har ek mein (1) lagao.

**1. Pehle n natural numbers: 1, 2, 3, ..., n.** a = 1, l = n: Sₙ = (n/2)(1 + n) = **n(n + 1)/2.** (Gauss ka 100: 100 × 101/2 = 5050 ✅.)

**2. Pehle n odd numbers: 1, 3, 5, ..., (2n − 1).** n-wa odd number 2n − 1 hai (a + (n − 1)d = 1 + 2(n − 1) = 2n − 1). a = 1, l = 2n − 1: Sₙ = (n/2)(1 + 2n − 1) = (n/2)(2n) = **n².**

**3. Pehle n even numbers: 2, 4, 6, ..., 2n.** a = 2, l = 2n: Sₙ = (n/2)(2 + 2n) = **n(n + 1).** (Ye pehle n natural numbers ke sum ka doguna hi hai: har even number 2 × natural number hai.) Aur ek rishta: n-th even number 2n, n-th odd number 2n − 1 se 1 zyada hai, to n even numbers ka sum n odd numbers ke sum se n zyada hai: n² + n ✅.

```
 1 2 3 4 5 6
 2 2 3 4 5 6
 3 3 3 4 5 6
 4 4 4 4 5 6
 5 5 5 5 5 6
 6 6 6 6 6 6
```

> **Figure 4.4** – 6 × 6 ka chaukor, jisme har box ke andar likha number us "L" ka naam hai jisme wo box hai. Number 1 sirf ek box mein, number 2 teen boxes mein, 3 paanch boxes mein, ... 6 gyaarah boxes mein, yaani number k kul 2k − 1 boxes mein aata hai. Isliye 1 + 3 + 5 + 7 + 9 + 11 = 6 × 6 = 36. Chaukor ke boxes ginne se wahi n².

### Example 5: Mitul ki pyramid

Kataaren 1, 2, 3, ..., 15 hain, to kul dibbe 1 + 2 + ... + 15 = 15 × 16/2 = **120.**
**Jaanch:** Gauss jodiyan: 1 + 15, 2 + 14, ..., 7 + 9, har ek 16, aur aisi 7 jodiyan = 112. Beech ka 8-wa term akela bacha (kyunki 15 odd hai): 112 + 8 = 120 ✅. Mitul ne Papa ko bataya, "120 dibbe." (Part B ka formula odd n par bhi chalta hai, bas haath se jodiyan banate waqt beech ka term alag aata hai.)

### Example 6: odd aur even numbers

(a) Pehle 45 odd numbers ka sum: 45² = **2025.** **Jaanch:** aakhri odd number 2 × 45 − 1 = 89, aur (1): (45/2)(1 + 89) = 45 × 45 = 2025 ✅.
(b) Pehle 37 even numbers ka sum: 37 × 38 = **1406.** **Jaanch:** 2 × (1 + 2 + ... + 37) = 2 × (37 × 38/2) = 2 × 703 = 1406 ✅.
(c) Pehle n odd numbers ka sum 1156 hai. n kitna? n² = 1156 to n = 34 ya n = −34. **Story check:** terms ki ginti negative nahi hoti, to n = **34.** **Jaanch:** aakhri odd number 2 × 34 − 1 = 67, (34/2)(1 + 67) = 17 × 68 = 1156 ✅.

---

## Part E: Kisi number ke multiples ka sum

Multiples hamesha ek AP banate hain: 11 ke multiples 11, 22, 33, ... ka common difference 11 hai. Topic 2 wali ginti ka kaam: pehla aur aakhri multiple, phir n.

### Example 7: 200 aur 600 ke beech ke 11 ke multiples

200 ÷ 11 = 18.18..., to 200 ke baad ka pehla multiple 19 × 11 = **209.** 600 ÷ 11 = 54.54..., to 600 se pehle ka aakhri multiple 54 × 11 = **594.** a = 209, l = 594, d = 11. n = (594 − 209)/11 + 1 = 35 + 1 = 36. (1): S = (36/2)(209 + 594) = 18 × 803 = **14454.**
**Jaanch:** ye multiples 11 × 19, 11 × 20, ..., 11 × 54 hain, to sum = 11 × (19 + 20 + ... + 54) = 11 × (S₅₄ − S₁₈) = 11 × (54 × 55/2 − 18 × 19/2) = 11 × (1485 − 171) = 11 × 1314 = 14454 ✅.

---

## Part F: Sum diya hai, n dhundo (quadratic wali kahani)

Sₙ ke formula mein n **do jagah** hai (n/2 aur (n − 1) mein), to Sₙ ko kisi number ke barabar rakhne par n ki **quadratic equation** banti hai. Hum use Chapter 3 ke tareeke se hal karte hain, aur phir **story check**: n poora (whole) aur positive hona chahiye. n = 7.5 ya n = −4 koi AP ke terms ki ginti nahi ho sakti.

### Example 8: tiles ki dher, total diya hai

Ek dher mein sabse upar wali kataar mein 9 tiles hain, aur har neeche wali kataar mein pichhli se 4 zyada. Total 1534 tiles hain. Kitni kataaren?
a = 9, d = 4. Sₙ = (n/2)[18 + 4(n − 1)] = (n/2)(4n + 14) = n(2n + 7) = 2n² + 7n. Isse 1534 ke barabar rakho:
2n² + 7n − 1534 = 0. D = 49 + 4 × 2 × 1534 = 49 + 12272 = 12321 = 111². n = (−7 ± 111)/4, to n = 104/4 = 26 ya n = −118/4 = −29.5.
**Story check:** −29.5 na positive hai, na poora: reject. **26 kataaren.**
**Jaanch:** a₂₆ = 9 + 25 × 4 = 109. (1): S₂₆ = 13 × (9 + 109) = 13 × 118 = 1534 ✅.

### Example 9: n ke do jawab (d negative ho to)

AP 30, 26, 22, ... ke kitne terms ka sum 120 hoga? a = 30, d = −4. Sₙ = (n/2)[60 − 4(n − 1)] = (n/2)(64 − 4n) = 32n − 2n². Ise 120 karo: 2n² − 32n + 120 = 0, 2 se divide: n² − 16n + 60 = 0, (n − 6)(n − 10) = 0, to **n = 6 ya n = 10.**
Dono poore aur positive hain, to AP ke liye **dono sahi hain.** Kyun? Terms likhkar dekho: 30, 26, 22, 18, 14, 10, 6, 2, −2, −6. 7-wa se 10-wa term tak 6 + 2 + (−2) + (−6) = 0 hain. Pehle 6 terms ka sum 120 tha, aage ke 4 terms ne kuch jodha nahi, to 10 terms ka sum bhi 120.
**Jaanch:** S₆ = 30 + 26 + 22 + 18 + 14 + 10 = 120 ✅. S₁₀ = 120 + 6 + 2 − 2 − 6 = 120 ✅.

```
 n= 1  ########                          30
 n= 2  ##############                    56
 n= 3  ####################              78
 n= 4  ########################          96
 n= 5  ############################     110
 n= 6  ##############################   120   <-- 120
 n= 7  ################################ 126
 n= 8  ################################ 128   <-- sabse bada
 n= 9  ################################ 126
 n=10  ##############################   120   <-- 120
 n=11  ############################     110
 n=12  ########################          96
 n=13  ####################              78
 n=14  ##############                    56
```

> **Figure 4.5** – AP 30, 26, 22, ... ke Sₙ ki bars: har bar ki lambai Sₙ ka lagbhag chauthaai hissa hai, asli kimat daayen taraf likhi hai. Sum pehle badhta hai, n = 8 par sabse bada (128) hota hai, kyunki 8-wa term tak sab terms positive hain, aur phir ghatne lagta hai. Isliye 120 do jagah milta hai, n = 6 par chadhte hue aur n = 10 par utarte hue.

### Example 10: wahi AP, par ab kahani hai

Mitul ke Papa ek staircase jaisi dher lagate hain: sabse neeche wali kataar mein 30 dibbe, aur har upar wali kataar mein 4 kam. Unke paas 120 dibbe hain aur sab lagane hain. Kitni kataaren?
Equation wahi: n = 6 ya n = 10 (Example 9). **Story check:** kataaron mein dibbe 30, 26, 22, 18, 14, 10, 6, 2 hain, aur 9-wi kataar mein 2 − 4 = −2 dibbe honge, jo ho hi nahi sakte. To 10 kataaren mumkin nahi: **6 kataaren** (30 + 26 + 22 + 18 + 14 + 10 = 120). Aur ye bhi dikha ki is dher mein zyada se zyada 128 dibbe lag sakte hain (8 kataaren).
Ye AP ke "dono sahi" aur kahani ke "ek hi sahi" ka farak hai: **maths ke dono jawab jaancho, aur har jawab ko kahani ke saamne khada karo.**

---

## Part G: a ya d dhundo

### Example 11: d dhundo

AP ka pehla term −14 hai, aur pehle 16 terms ka sum 16 hai. d kitna hai? (2): S₁₆ = 8[−28 + 15d] = 16, to −28 + 15d = 2, **15d = 30, d = 2.**
**Jaanch:** AP −14, −12, −10, ...: a₁₆ = −14 + 15 × 2 = 16. (1): 8 × (−14 + 16) = 8 × 2 = 16 ✅.

### Example 12: a dhundo

AP mein d = −3, pehle 12 terms ka sum 42 hai. a? (2): S₁₂ = 6[2a + 11 × (−3)] = 6(2a − 33) = 42, to 2a − 33 = 7, 2a = 40, **a = 20.**
**Jaanch:** AP 20, 17, 14, ...: a₁₂ = 20 − 33 = −13. (1): 6 × (20 + (−13)) = 6 × 7 = 42 ✅.

---

## Part H: Beech ke terms ka sum

Pehle m terms mein se pehle k terms hata do, to bacha **(k + 1)-wa se m-wa term tak.** Isliye Sₘ − Sₖ.

### Example 13: terms 11 se 20

AP 9, 13, 17, ... ke 11-wa se 20-wa term ka sum. S₂₀ = 10 × [18 + 19 × 4] = 10 × 94 = 940. S₁₀ = 5 × [18 + 9 × 4] = 5 × 54 = 270. Beech ka sum = 940 − 270 = **670.**
**Jaanch:** a₁₁ = 9 + 40 = 49 aur a₂₀ = 9 + 76 = 85. Terms 11 se 20 tak 10 hain: (10/2)(49 + 85) = 5 × 134 = 670 ✅.

### Example 14: aakhri 8 terms

AP −14, −9, −4, ... (30 terms) ke aakhri 8 terms ka sum. Aakhri 8 terms: 23-wa se 30-wa. S₃₀ = 1755 (Example 2), S₂₂ = 11 × [−28 + 21 × 5] = 11 × 77 = 847. Sum = 1755 − 847 = **908.**
**Jaanch:** a₂₃ = −14 + 22 × 5 = 96, a₃₀ = 131. (8/2)(96 + 131) = 4 × 227 = 908 ✅.

---

## Part I: Sₙ ek quadratic polynomial hai

Formula (2) ko kholo: Sₙ = (n/2)[2a + (n − 1)d] = (d/2)n² + (a − d/2)n.

Ye n mein ek polynomial hai: n² ka coefficient **d/2**, n ka coefficient **a − d/2**, aur **koi constant term nahi.** To d ≠ 0 ho to Sₙ degree 2 ka (quadratic) polynomial hai. n = 0 par Sₙ = 0, yaani koi term nahi to sum 0.

- AP 9, 13, 17, ... (a = 9, d = 4): Sₙ = 2n² + 7n. n = 25 par 2 × 625 + 175 = 1425 (Example 1 se wahi ✅).
- AP −14, −9, −4, ... (a = −14, d = 5): Sₙ = (5/2)n² − (33/2)n. n = 30 par (5/2) × 900 − (33/2) × 30 = 2250 − 495 = 1755 (Example 2 se wahi ✅).

Ek tulna: aₙ = dn + (a − d) n mein **linear** hai, to (n, aₙ) ke points ek seedhi line par aate hain (Class 9 ka [linear equation ka graph](../../../class9/maths/linear-equations-in-two-variables/linear-equations-in-two-variables-part2.md)). Sₙ n mein **quadratic** hai, to (n, Sₙ) ke points ek parabola par aate hain, jo (0, 0) se guzarta hai. d > 0 ho to parabola ooper khulta hai aur sum badhta hi jaata hai. d < 0 ho to neeche khulta hai: sum pehle badhta hai, phir ghatta hai, aur wahi Figure 4.5 mein dikha. Parabola ke do symmetric points par ek jaisi height hoti hai, isliye Example 9 mein n = 6 aur n = 10 mile (6 + 10 = 16 = 2 × 8, aur 8 par sabse bada sum). Bas dhyan rahe: n sirf poore numbers hain, parabola sirf ek guide hai.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Sₙ = (n/2)(a + l) mein l ko "AP ka aakhri likha hua term" maan lena**

Sawaal: AP 9, 13, 17, ..., 61 ke pehle 10 terms ka sum. Ek bachche ne l = 61 rakha: S₁₀ = (10/2)(9 + 61) = 5 × 70 = 350. **Ulta udaharan:** haath se jodo: 9 + 13 + 17 + 21 + 25 = 85 aur 29 + 33 + 37 + 41 + 45 = 185, to sum 270, 350 nahi.
Kyun galat? (1) mein l **us hisse ka aakhri term** hai jise tum jod rahe ho, yaani yahan 10-wa term. 61 to 14-wa term hai (9 + 13 × 4 = 61), 10-wa term a₁₀ = 9 + 9 × 4 = 45 hai. Sahi: S₁₀ = 5 × (9 + 45) = 5 × 54 = **270.**
**Jaanch:** (2): 5 × [18 + 36] = 5 × 54 = 270 ✅. Aur akal ka check: pehle 10 terms ka average (9 + 45)/2 = 27 hai, 10 terms ka sum 270. 350 ka matlab average 35 hota, jo asli average 27 se bahut zyada hai.

**Galti 2: S₂₀ − S₁₀ ko 10-wa se 20-wa term ka sum samajhna**

AP 9, 13, 17, ... mein ek bachche ne kaha: "S₂₀ − S₁₀ = terms 10 se 20 ka sum." Ye 11 terms hote hain. **Ulta udaharan:** S₂₀ − S₁₀ = 940 − 270 = 670 (Example 13). Par 10-wa se 20-wa term (a₁₀ = 45, a₁₁ = 49, ..., a₂₀ = 85) ka sum (11/2)(45 + 85) = 11 × 65 = 715 hai. Farak 715 − 670 = 45 = a₁₀.
Kyun? S₁₀ mein **10-wa term bhi shaamil hai** (S₁₀ = pehle 10 terms), isliye use hatane par wo bhi hat jaata hai. Sahi baat: **Sₘ − Sₖ = terms (k + 1) se m tak.** S₂₀ − S₁₀ = 11-wa se 20-wa term, 10 terms. Agar 10-wa se 20-wa chahiye to S₂₀ − S₉.
**Jaanch:** S₂₀ − S₉ = 940 − (9/2)(18 + 8 × 4) = 940 − (9/2) × 50 = 940 − 225 = 715 ✅.

---

## Quick Recap

- **Sₙ** = pehle n terms ka sum. Gauss ki chaal: shuru se k-wa aur aakhir se k-wa term ki jodi ka jod hamesha a + l.
- **Derivation:** AP ko seedha aur ulta likho, column jodo: 2Sₙ = n(a + l). Isse **Sₙ = (n/2)(a + l)** aur l = a + (n − 1)d rakhne par **Sₙ = (n/2)[2a + (n − 1)d].**
- Pehla aur aakhri term pata ho to (1), a aur d pata ho to (2). Sirf l pata ho to pehle n = (l − a)/d + 1.
- Pehle n natural numbers: **n(n + 1)/2**, pehle n odd numbers: **n²**, pehle n even numbers: **n(n + 1).**
- Multiples ka sum: pehla aur aakhri multiple division se, n ginti se, phir (1).
- Sₙ diya ho to n ki **quadratic** milti hai: hal karo, phir **story check** (n poora aur positive). d < 0 ho to AP ke do n mil sakte hain, kahani mein shayad ek hi.
- Beech ka sum: **Sₘ − Sₖ = terms (k + 1) se m tak.**
- **Sₙ = (d/2)n² + (a − d/2)n:** n mein quadratic polynomial, koi constant term nahi.
- **Galti 1:** l wo term hai jahan tak tum jod rahe ho (n-wa term), jo likha hua aakhri term ho zaroori nahi.
- **Galti 2:** S₂₀ − S₁₀ terms 11 se 20 ka sum hai, 10 se 20 ka nahi.

---

## Practice Questions

1. Find the sum of the first 32 terms of the AP 12, 19, 26, ... .

2. Find the sum of the first 24 terms of the AP −22, −18.5, −15, ... .

3. Find the sum of the first 21 terms of the AP 1/2, 5/6, 7/6, ... .

4. The first term of an AP is −5, its common difference is 4, and the sum of its first 15 terms is 345. Check this by finding the last term (the 15th) and applying the formula (1).

5. Find how many multiples of 6 lie between 50 and 400, and find their sum.

6. Find the sum of all multiples of 11 between 1000 and 1500.

7. A mason lays bricks in a wall pattern with 8 bricks in the top row, and every row below has 6 more bricks than the row above it. If the pattern uses 1300 bricks, how many rows does it have? Give your answer after a story check.

8. (a) How many terms of the AP 36, 30, 24, ... add up to 108? (b) Why are there two answers? (c) These numbers describe chairs in rows of a hall: 36 chairs in the first row and 6 fewer in each next row. How many rows give exactly 108 chairs?

9. The AP −20, −17, −14, ... has 30 terms. Find the sum of the terms from the 16th term to the 30th term.

10. Find the sum of the first 41 odd numbers and the sum of the first 41 even numbers. By how much do they differ, and why does it come out that way?

11. The sum of the first n natural numbers is 465. Find n.

12. Find the sum of all natural numbers from 101 to 200 in two ways: by formula (1), and by using the sum of the first 100 natural numbers and the sum of the first 200 natural numbers.

13. A shopkeeper stacks cans in a triangle: 1 can in the top row, 2 in the next, 3 in the next, and so on. Is it possible to use exactly (a) 190 cans, (b) 100 cans? Show the working for each, with a story check.

14. State True or False, with a reason: (a) The formula Sₙ = (n/2)[2a + (n − 1)d] works only when n is even. (b) S₁₈ − S₇ is the sum of the terms from the 7th term to the 18th term. (c) The sum of the first n terms of an AP can have a constant term when written as a polynomial in n. (d) For an AP with positive first term and negative d, the same sum can come for two different values of n. (e) In Sₙ = (n/2)(a + l), l can be any term of the AP.

15. For the AP 13, 11, 9, ..., write Sₙ as a polynomial in n and check that the coefficient of n² is d/2. Then find S₁₂, the value of n (other than 0) for which Sₙ = 0, and the largest possible sum.

### Answers

1. a = 12, d = 7, n = 32. (2): S₃₂ = 16 × [24 + 31 × 7] = 16 × 241 = **3856.** Jaanch: a₃₂ = 12 + 217 = 229, (1): 16 × (12 + 229) = 16 × 241 = 3856 ✅.

2. d = −18.5 − (−22) = 3.5, a = −22, n = 24. S₂₄ = 12 × [−44 + 23 × 3.5] = 12 × [−44 + 80.5] = 12 × 36.5 = **438.** Jaanch: a₂₄ = −22 + 80.5 = 58.5, (1): 12 × (−22 + 58.5) = 12 × 36.5 = 438 ✅.

3. d = 5/6 − 1/2 = 1/3 (aur 7/6 − 5/6 = 1/3, to AP hai). a = 1/2, n = 21. S₂₁ = (21/2)[1 + 20/3] = (21/2) × (23/3) = **161/2 = 80.5.** Jaanch: a₂₁ = 1/2 + 20/3 = 43/6, (1): (21/2)(1/2 + 43/6) = (21/2) × (46/6) = (21/2) × (23/3) = 161/2 ✅.

4. a = −5, d = 4, n = 15. a₁₅ = −5 + 14 × 4 = **51.** (1): S₁₅ = (15/2)(−5 + 51) = (15/2) × 46 = 15 × 23 = **345** ✅ (diye hue sum se milta hai). Doosra formula: (15/2)[−10 + 56] = (15/2) × 46 = 345 ✅.

5. 50 ÷ 6 = 8.33..., pehla multiple 9 × 6 = 54. 400 ÷ 6 = 66.67..., aakhri 66 × 6 = 396. n = (396 − 54)/6 + 1 = 57 + 1 = **58 multiples.** S = 29 × (54 + 396) = 29 × 450 = **13050.** Jaanch: 6 × (S₆₆ − S₈) = 6 × (66 × 67/2 − 8 × 9/2) = 6 × (2211 − 36) = 6 × 2175 = 13050 ✅.

6. 1000 ÷ 11 = 90.9..., pehla multiple 91 × 11 = 1001. 1500 ÷ 11 = 136.36..., aakhri 136 × 11 = 1496. n = (1496 − 1001)/11 + 1 = 45 + 1 = 46. S = 23 × (1001 + 1496) = 23 × 2497 = **57431.** Jaanch: 11 × (S₁₃₆ − S₉₀) = 11 × (9316 − 4095) = 11 × 5221 = 57431 ✅.

7. a = 8, d = 6. Sₙ = (n/2)[16 + 6(n − 1)] = (n/2)(6n + 10) = 3n² + 5n. 3n² + 5n = 1300, to 3n² + 5n − 1300 = 0. D = 25 + 15600 = 15625 = 125². n = (−5 ± 125)/6 = 20 ya −130/6 (lagbhag −21.67). **Story check:** rows ki ginti negative ya fraction nahi, to ye reject. **20 rows.** Jaanch: a₂₀ = 8 + 19 × 6 = 122, (1): 10 × (8 + 122) = 10 × 130 = 1300 ✅.

8. (a) a = 36, d = −6. Sₙ = (n/2)[72 − 6(n − 1)] = (n/2)(78 − 6n). Ise 108 karo: 78n − 6n² = 216, 6n² − 78n + 216 = 0, 6 se divide: n² − 13n + 36 = 0, (n − 4)(n − 9) = 0, **n = 4 ya n = 9.**
   (b) AP 36, 30, 24, 18, 12, 6, 0, −6, −12, ... 5-wa se 9-wa term: 12 + 6 + 0 − 6 − 12 = 0. Pehle 4 terms ka sum 108 hai (36 + 30 + 24 + 18), aur aage ke 5 terms ka sum 0 hai, to 9 terms ka sum bhi 108. Dono n poore aur positive hain.
   (c) **Story check:** 5-wi kataar mein 12 chairs, 6-wi mein 6, 7-wi mein 0 aur 8-wi mein −6 chairs honge, jo nahi ho sakte. To n = 9 reject, **4 rows** (36 + 30 + 24 + 18 = 108).
   Jaanch: S₄ = 108 ✅. S₉ = 108 + 12 + 6 + 0 − 6 − 12 = 108 ✅ (AP ke liye).

9. a = −20, d = 3. Terms 16 se 30: S₃₀ − S₁₅. S₃₀ = 15 × [−40 + 29 × 3] = 15 × 47 = 705. S₁₅ = (15/2)[−40 + 14 × 3] = (15/2) × 2 = 15. Sum = 705 − 15 = **690.** (Dhyan: S₁₅ hataya, to 16-wa term se shuru hota hai.) Jaanch: a₁₆ = −20 + 45 = 25, a₃₀ = −20 + 87 = 67, 15 terms: (15/2)(25 + 67) = (15/2) × 92 = 690 ✅.

10. Pehle 41 odd numbers: 41² = **1681.** Pehle 41 even numbers: 41 × 42 = **1722.** Farak 1722 − 1681 = **41.** Kyun: i-wa even number (2i) i-wa odd number (2i − 1) se 1 zyada hai, aur 41 jodiyan hain, to 41 zyada. Jaanch: (1) se: 41 even numbers ka sum (41/2)(2 + 82) = 41 × 42 = 1722 ✅, 41 odd numbers ka (41/2)(1 + 81) = 41 × 41 = 1681 ✅.

11. n(n + 1)/2 = 465, to n² + n − 930 = 0. D = 1 + 3720 = 3721 = 61². n = (−1 ± 61)/2 = 30 ya −31. **Story check:** n positive hona chahiye, to **n = 30.** Jaanch: 30 × 31/2 = 465 ✅.

12. Tareeka 1: a = 101, l = 200, n = 100. (1): S = 50 × (101 + 200) = 50 × 301 = **15050.** Tareeka 2: pehle 100 natural numbers ka sum 5050 aur pehle 200 ka 200 × 201/2 = 20100, to 101 se 200 tak = 20100 − 5050 = **15050.** Jaanch: dono tareeke ek hi jawab dete hain ✅.

13. Pehle n kataaron mein cans n(n + 1)/2 hote hain. (a) n(n + 1)/2 = 190, n² + n − 380 = 0, D = 1 + 1520 = 1521 = 39², n = (−1 ± 39)/2 = 19 ya −20. **Story check:** −20 reject, n = 19 poora hai: **haan, 19 rows se exactly 190 cans.** Jaanch: 19 × 20/2 = 190 ✅. (b) n² + n − 200 = 0, D = 1 + 800 = 801, aur 28² = 784, 29² = 841, to 801 perfect square nahi, n whole nahi aata (n lagbhag 13.6). **Story check:** poori rows ginti mein hoti hain, to **nahi**, exactly 100 cans se triangle nahi banta. Jaanch: 13 rows mein 13 × 14/2 = 91 aur 14 rows mein 14 × 15/2 = 105, 100 beech mein hai, kisi ke barabar nahi ✅.

14. (a) **False** ❌. Part B ke proof mein seedhi aur ulti line ke n columns jode, isliye n even ya odd dono par chalta hai (Example 5: n = 15). (b) **False** ❌. S₁₈ − S₇ terms 8 se 18 ka sum hai, 7-wa term S₇ mein pehle se shaamil hai (Galti 2). (c) **False** ❌. Sₙ = (d/2)n² + (a − d/2)n, koi constant term nahi (n = 0 par sum 0). (d) **True** ✅. Example 9 aur Question 8: n = 6 aur 10, n = 4 aur 9. (e) **False** ❌. l wo term hai jahan tak jod rahe ho, yaani n-wa term (Galti 1).

15. a = 13, d = −2. Sₙ = (n/2)[26 − 2(n − 1)] = (n/2)(28 − 2n) = n(14 − n) = **−n² + 14n.** n² ka coefficient −1 = d/2 = −2/2 ✅. S₁₂ = −144 + 168 = **24.** Sₙ = 0 par n(14 − n) = 0, **n = 14** (n = 0 chhodkar). Sabse bada sum: terms 13, 11, 9, 7, 5, 3, 1 positive hain aur 8-wa term −1 hai, to **n = 7 par S₇ = 49** sabse bada hai (−49 + 98 = 49). Jaanch: 13 + 11 + 9 + 7 + 5 + 3 + 1 = 49 ✅. n = 14 ke terms: 13, 11, ..., 1, −1, ..., −13, sum 0 ✅.

---

Shabaash! Ab tum Gauss ki tarah kisi bhi AP ke terms ko seedha aur ulta likhkar jodne ki chaal se pehle n terms ka sum nikal sakte ho, aur ye bhi jaanchte ho ki n ke dono jawab kahani mein baithte hain ya nahi.

**Aage kya?** Topic 5 mein ye formulas asli zindagi ke sawaalon mein kaam aayenge: savings jo har mahine ek fixed qadam se badhti hain, auditorium ki seat-rows, aur instalments, aur har baar chaar kadam wali method se.
