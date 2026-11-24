# Chapter: Quadratic Equations (Part 2)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [quadratic-equations.md](quadratic-equations.md) se aage chalti hai** (wahan Topic 1 mein quadratic equation kya hoti hai, uske roots, aur factorisation se hal seekha). Chapter ki shuruaat: [quadratic-equations.md](quadratic-equations.md).
> **Topics covered in this file:**
> 2. Aisi Equations Jo Quadratic Ban Jaati Hain: Fractions Aur Brackets

---

# Topic 2: Aisi Equations Jo Quadratic Ban Jaati Hain: Fractions Aur Brackets

Topic 1 mein hume aisi equations mili jo ax² + bx + c = 0 ke bahut kareeb thi, aur hum factorisation se unke roots nikaal paaye. Par asli sawaal aksar is saaf shakal mein nahi aate. Kabhi brackets ka jungle hota hai, kabhi x kisi fraction ke **neeche** baitha hota hai. Aise sawaal quadratic ka **bhes badal kar** aate hain. Is topic mein hum bhes utaarna seekhenge, aur ek khatarnak baat bhi: algebra kabhi-kabhi aisa jawab de deta hai jo asli sawaal mein baith hi nahi sakta.

---

## Shivani aur aam wale uncle

Garmiyon ki chhutti hai. Shivani Mummy ke saath mandi mein aam wale shopkeeper uncle ke paas gayi. Kal Mummy ne wahin se poore ₹440 ke aam liye the. Aaj uncle ne board par likha: **"Aam ka bhaav ₹15 per kg kam!"** Mummy ne phir ₹440 nikaale aur kaha, "Aaj kal se 3 kg zyada milenge, hai na uncle?" Uncle ne haan mein sir hilaaya.

Shivani ne puchha, "Mummy, kal bhaav kya tha?" Mummy ko yaad nahi aaya. "Tum hi nikaal lo, beta."

Shivani ne kal ka bhaav ₹x per kg maana. To kal ₹440 mein 440/x kg aam aaye the. Aaj bhaav x − 15 hai, to aaj 440/(x − 15) kg milenge. Aaj ke aam kal se 3 kg zyada hain:

440/(x − 15) − 440/x = 3

Shivani ruk gayi. "Is equation mein x denominator mein hai. Ye to quadratic jaisi dikhti bhi nahi. Wo ax² + bx + c = 0 wali shakal kahan hai?" Shakal chhupi hui hai, aur use bahar nikaalna aata hai. Saath hi ek sawaal baaki hai: jo jawab milenge, kya wo dono bhaav ban sakte hain? Part C mein Shivani ka jawab milega.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Reducible equation (quadratic mein badalne wali equation)** | Aisi equation jo pehle quadratic nahi dikhti, par brackets kholne ya fractions hatane ke baad ax² + bx + c = 0 ban jaati hai | (x + 5)(x − 3) = 5x + 13 (Part A) |
| **Excluded value (varjit maan)** | x ki wo value jisse kisi fraction ka neeche wala hissa 0 ho jaata hai. Us x par equation ka matlab hi nahi banta | 1/(x + 4) mein x = −4 |
| **Fractions hatana (clearing denominators)** | Equation ke dono taraf ko saare fractions ke neeche wale hisson ke common multiple se guna karna, taaki koi fraction na bache | 1/x = 3/(x + 2) ko x(x + 2) se guna karna |
| **Extraneous root (bahari root)** | Wo number jo algebra ke kadamon se mila, par mool equation (ya kahani) mein fit nahi hota | Part C mein x = 5 aur x = −40 |

---

## Class 9 aur Chapter 2 se yaad

Is topic mein hum chaar purani cheezein seedha use karenge.
- **Splitting the middle term:** Class 9 ke [factorisation-part5.md](../../../class9/maths/factorisation/factorisation-part5.md) mein a × c ke factor pair dhundh kar middle term todna seekha tha. Quadratic ban jaane ke baad hamara kaam yahi hai.
- **Roots aur zeros:** Topic 1 mein dekha tha ki equation ka root wahi number hai jo polynomial ka zero hai, yaani parabola jahan x-axis ko kaatti hai ([polynomials.md](../polynomials/polynomials.md) ka Part B).
- **x ± 1/x ka square:** Class 9 ke [expansions-part2.md](../../../class9/maths/expansions/expansions-part2.md) (Part C) mein (x + 1/x)² = x² + 1/x² + 2 mila tha. Example 4 mein ye jaanch ke kaam aayega.
- **Jaanch ka tool:** Chapter 2 ke [polynomials-part2.md](../polynomials/polynomials-part2.md) mein quadratic ke zeros ke liye α + β = −b/a aur αβ = c/a mile the. Har example ki Jaanch mein hum roots ko wapas rakhenge **aur** jod-guna bhi dekhenge.

---

## Part A: Brackets aur squares: kholo, ek taraf lo, milao

Jab equation mein brackets ya squares hon aur x fraction mein na ho, to **teen kaam** hain.
1. Dono taraf ke brackets **kholo** (Class 9 ke (a + b)² jaise identities kaam aate hain).
2. Sab kuch **ek taraf** le aao, taaki doosri taraf 0 bache.
3. Milte-julte terms **jodo**, aur ax² + bx + c = 0 ki shakal banao. Phir factorise karo.

### Example 1: brackets ek taraf

(x + 4)(x − 1) = 4x + 26 ke roots dhundo.

**Kholo:** (x + 4)(x − 1) = x² − x + 4x − 4 = x² + 3x − 4.
**Ek taraf lo:** x² + 3x − 4 − 4x − 26 = 0, yaani **x² − x − 30 = 0**.
**Factorise:** −30 ke factor pair jinka jod −1 ho: −6 aur 5. To (x − 6)(x + 5) = 0, aur **x = 6 ya x = −5**.

**Jaanch:** x = 6: bayen taraf 10 × 5 = 50, daayen taraf 4 × 6 + 26 = 50 ✅. x = −5: bayen taraf (−1)(−6) = 6, daayen taraf −20 + 26 = 6 ✅. Jod 6 + (−5) = 1 = −b/a ✅, guna 6 × (−5) = −30 = c/a ✅

### Example 2: square aur do brackets saath, a ≠ 1

(3x − 2)(2x + 5) = (x + 4)² ke roots dhundo.

**Kholo:** bayen taraf 6x² + 15x − 4x − 10 = 6x² + 11x − 10. Daayen taraf (x + 4)² = x² + 8x + 16 (Class 9 ka (a + b)²).
**Ek taraf lo:** 6x² + 11x − 10 − x² − 8x − 16 = 0, yaani **5x² + 3x − 26 = 0**.
**Factorise:** a × c = −130. Jod 3 dene wali jodi: 13 aur −10. 5x² + 13x − 10x − 26 = x(5x + 13) − 2(5x + 13) = (5x + 13)(x − 2). To **x = 2 ya x = −13/5**.

**Jaanch:** x = 2: bayen (6 − 2)(4 + 5) = 4 × 9 = 36, daayen (2 + 4)² = 36 ✅. x = −13/5: 3x − 2 = −49/5, 2x + 5 = −1/5, guna 49/25; x + 4 = 7/5, square 49/25 ✅. Jod 2 − 13/5 = −3/5 = −b/a ✅, guna 2 × (−13/5) = −26/5 = c/a ✅

Dhyan do: kabhi dono taraf ke x² aapas mein kat kar equation linear ban jaati hai. Tab wo quadratic nahi rahi (Topic 1 ke "chhupe hue" examples). Yahan 6x² aur x² ke baad 5x² bacha, isliye quadratic hi hai.

---

## Part B: x denominator mein: fraction hatao

Ab Shivani wali shakal: x kisi fraction ke neeche. Yahan **pehla kaam** hamesha ek hi hai: **likho ki x kin values par nahi ho sakta** (excluded values). Kyunki 0 se bhaag diya hi nahi ja sakta: "6 laddoo 0 bacchon mein baanto" ka koi matlab hi nahi.

Phir dono taraf ko common denominator se guna karke **fraction hata do**. Baaki kaam Part A jaisa. Poori recipe ek nazar mein:

```
  [ 1. Excluded values likho (kaun sa x denominator ko 0 karega)        ]
                                     v
  [ 2. Common denominator se dono taraf guna (fraction hatao)           ]
                                     v
  [ 3. Brackets kholo, sab ek taraf lo: ax² + bx + c = 0                ]
                                     v
  [ 4. Quadratic hal karo (factorise)                                   ]
                                     v
  [ 5. Har root ko excluded values se milao, bacha hua root Jaanch karo ]
```

> **Figure 2.1** – Fractions wali equation ko hal karne ke paanch kadam. Kadam 1 aur kadam 5 naye hain: pehle jahan x nahi chal sakta wo likhte hain, aur aakhir mein har root ko us list se milate hain.

### Example 3: x − 1/x = k

x − 1/x = 35/6 hal karo.

**Excluded:** x ≠ 0. 6x se dono taraf guna karo: 6x · x − 6x · (1/x) = 35x, yaani 6x² − 6 = 35x. Ek taraf lo: **6x² − 35x − 6 = 0**.
**Factorise:** a × c = −36. Jod −35 dene wali jodi: −36 aur 1. 6x² − 36x + x − 6 = 6x(x − 6) + 1(x − 6) = (6x + 1)(x − 6). To **x = 6 ya x = −1/6**. Dono 0 nahi hain, to koi excluded value nahi mili.

**Jaanch:** x = 6: 6 − 1/6 = 35/6 ✅. x = −1/6: −1/6 − (−6) = −1/6 + 6 = 35/6 ✅. Jod 6 − 1/6 = 35/6 = −b/a ✅, guna 6 × (−1/6) = −1 = c/a = −6/6 ✅

### Example 4: x + 1/x = k, aur ek mazedaar jaanch

x + 1/x = 13/6 hal karo.

**Excluded:** x ≠ 0. 6x se guna: 6x² + 6 = 13x, yaani **6x² − 13x + 6 = 0**.
**Factorise:** a × c = 36, jod −13: −9 aur −4. 6x² − 9x − 4x + 6 = 3x(2x − 3) − 2(2x − 3) = (2x − 3)(3x − 2). To **x = 3/2 ya x = 2/3**.

**Jaanch:** x = 3/2: 3/2 + 2/3 = 9/6 + 4/6 = 13/6 ✅. x = 2/3: 2/3 + 3/2 = 13/6 ✅. Guna 3/2 × 2/3 = 1 = c/a = 6/6 ✅

Dekho, dono roots ek-doosre ke **reciprocal** hain. Ye koi sanyog nahi: x + 1/x = k ka quadratic x² − kx + 1 = 0 banta hai, jisme c/a = 1, to roots ka guna 1 hi hoga.

Ek jaanch aur: expansions wali (x + 1/x)² = x² + 1/x² + 2 se x² + 1/x² = (13/6)² − 2 = 169/36 − 72/36 = 97/36. Ab seedha x = 3/2 se: 9/4 + 4/9 = 81/36 + 16/36 = 97/36 ✅. Ye hamare root ko doosre raaste se pakka karta hai.

### Example 5: do reciprocals ka farak

1/x − 1/(x + 9) = 1/4 hal karo.

**Excluded:** x ≠ 0 aur x ≠ −9. Common denominator 4x(x + 9). Dono taraf us se guna:
4(x + 9) − 4x = x(x + 9)
Bayen taraf 4x + 36 − 4x = 36. To 36 = x² + 9x, yaani **x² + 9x − 36 = 0**.
**Factorise:** −36 ke factor pair jinka jod 9 ho: 12 aur −3. (x + 12)(x − 3) = 0, to **x = 3 ya x = −12**. Dono excluded list (0, −9) mein nahi hain.

**Jaanch:** x = 3: 1/3 − 1/12 = 4/12 − 1/12 = 3/12 = 1/4 ✅. x = −12: −1/12 − 1/(−3) = −1/12 + 4/12 = 3/12 = 1/4 ✅. Jod −9 = −b/a ✅, guna −36 = c/a ✅

### Example 6: do fractions ka jod, denominator 2x − 1

1/(x − 1) + 1/(2x − 1) = 5/2 hal karo.

**Excluded:** x − 1 = 0 se x ≠ 1, aur 2x − 1 = 0 se x ≠ 1/2. Common denominator 2(x − 1)(2x − 1). Guna karne par:
2(2x − 1) + 2(x − 1) = 5(x − 1)(2x − 1)
Bayen 4x − 2 + 2x − 2 = 6x − 4. Daayen 5(2x² − 3x + 1) = 10x² − 15x + 5. Ek taraf lo: **10x² − 21x + 9 = 0**.
**Factorise:** a × c = 90, jod −21: −15 aur −6. 10x² − 15x − 6x + 9 = 5x(2x − 3) − 3(2x − 3) = (2x − 3)(5x − 3). To **x = 3/2 ya x = 3/5**. Dono excluded values (1 aur 1/2) se alag hain.

**Jaanch:** x = 3/2: 1/(1/2) + 1/2 = 2 + 1/2 = 5/2 ✅. x = 3/5: x − 1 = −2/5, 2x − 1 = 1/5, to −5/2 + 5 = 5/2 ✅. Jod 3/2 + 3/5 = 21/10 = −b/a ✅, guna 9/10 = c/a ✅

### Example 7: do fraction barabar (cross-multiply)

(x − 6)/(x + 6) = (2x − 7)/(x + 4) hal karo.

**Excluded:** x ≠ −6 aur x ≠ −4. Jab ek fraction doosre fraction ke barabar ho, to guna karne par "ulte kone ka guna" milta hai (dono taraf ko (x + 6)(x + 4) se guna karne ka chhota roop):
(x − 6)(x + 4) = (2x − 7)(x + 6)
x² − 2x − 24 = 2x² + 5x − 42
Dono taraf se bayen ko ghatao: 0 = x² + 7x − 18, yaani **x² + 7x − 18 = 0**.
**Factorise:** −18 ke factor pair jinka jod 7 ho: 9 aur −2. (x + 9)(x − 2) = 0, to **x = 2 ya x = −9**.

**Jaanch:** x = 2: bayen −4/8 = −1/2, daayen (4 − 7)/6 = −3/6 = −1/2 ✅. x = −9: bayen −15/(−3) = 5, daayen (−18 − 7)/(−5) = 5 ✅. Jod −7 = −b/a ✅, guna −18 = c/a ✅

---

## Part C: Jab algebra jhooth bol de: extraneous root

Ab wo baat jo Shivani ko rok rahi thi. Dekho ek equation:

(x − 8)/(x − 5) + (x − 2)/(x − 1) = −12/((x − 5)(x − 1))

**Excluded:** x ≠ 5 aur x ≠ 1. Dono taraf ko (x − 5)(x − 1) se guna karo:
(x − 8)(x − 1) + (x − 2)(x − 5) = −12
x² − 9x + 8 + x² − 7x + 10 = −12
2x² − 16x + 30 = 0, yaani (2 se bhaag dekar) **x² − 8x + 15 = 0**.
Factorise: (x − 3)(x − 5) = 0. To algebra ne diye **x = 3 aur x = 5**.

Par x = 5 to hamari **excluded list mein hai**! Mool equation mein x = 5 rakho, to (x − 5) neeche aata hai aur 0 se bhaag karna padta hai: −3/0 ka koi matlab nahi. Isliye **x = 5 root nahi hai**, wo bahari (extraneous) root hai. Sirf **x = 3** bacha.

**Jaanch:** x = 3: (3 − 8)/(3 − 5) = −5/−2 = 5/2, aur (3 − 2)/(3 − 1) = 1/2. Jod 3. Daayen taraf −12/((−2)(2)) = −12/−4 = 3 ✅. Aur x = 5 par bayen taraf ke fractions define hi nahi hote ❌

```
          O               *               O
  +-------+-------+-------+-------+-------+-------+
  0       1       2       3       4       5       6
          excluded        root            excluded
```

> **Figure 2.2** – Number line par is equation ka haal. O ka matlab excluded value (x = 1 aur x = 5), * ka matlab sahi root (x = 3). Quadratic ke dono roots 3 aur 5 the, par 5 excluded value par pada, isliye wo hat gaya.

### Ye bahari root aaya kahan se?

Hum ne dono taraf ko (x − 5)(x − 1) se guna kiya. Ye number x = 5 par **0** ho jaata hai. Rule ye hai:

Maan lo guna karne wali cheez M hai (yahan M = (x − 5)(x − 1)).

- Agar L = R hai, to L × M = R × M **hamesha** sach hai.
- Par ulta (L × M = R × M se L = R) tabhi mil sakta hai jab **M ≠ 0** ho. M = 0 ho to L × M = R × M to 0 = 0 jaisa ho jaata hai, chahe L aur R kuch bhi hon.

Yani guna karne se equation mein **ek-do naye hal ghus sakte hain**: wahi x jahan hamara guna karne wala M = 0 hota hai. Isiliye kadam 5 (excluded list se milana) bahut zaroori hai. Isliye cleared quadratic ke roots pehle sirf **ummeedwar** hain: jawab tab bante hain jab wo excluded list aur kahani, dono se pass ho jayein.

### Example 8: Shivani ka jawab (extraneous root kahani mein)

Shivani ki equation: 440/(x − 15) − 440/x = 3.

**Excluded:** x ≠ 15 aur x ≠ 0. Dono taraf x(x − 15) se guna:
440x − 440(x − 15) = 3x(x − 15)
440x − 440x + 6600 = 3x² − 45x
6600 = 3x² − 45x. 3 se bhaag dekar: **x² − 15x − 2200 = 0**.
**Factorise:** −2200 ke factor pair jinka jod −15 ho: −55 aur 40. (x − 55)(x + 40) = 0, to **x = 55 ya x = −40**. Dono excluded values (15, 0) se alag hain, to excluded list ne koi root nahi hataya.

**Kahani ka check:** x bhaav (₹ per kg) tha, aur bhaav negative nahi ho sakta. To **x = −40 nahi chalega**. Par dhyan do: x = −40 algebra ke hisaab se equation ko satisfy karta hai (440/(−55) − 440/(−40) = −8 + 11 = 3), phir bhi kahani ke liye bahari hai. Yani bahari root sirf "0 se bhaag" se hi nahi, "kahani se mel na khaane" se bhi bante hain.
Bacha **x = 55**: kal bhaav ₹55 per kg tha.

**Jaanch:** kal 440 ÷ 55 = 8 kg aam. Aaj bhaav 55 − 15 = ₹40, to 440 ÷ 40 = 11 kg. 11 − 8 = 3 kg zyada ✅. Jod 55 + (−40) = 15 = −b/a ✅, guna 55 × (−40) = −2200 = c/a ✅

---

## Part D: Lagaatar numbers aur fractions

Kabhi equation kahani se banti hai, aur x ke saath x + 1 jaise **lagaatar (consecutive) numbers** aate hain.

### Example 9: do lagaatar numbers ke reciprocals ka jod

Do lagaatar natural numbers ke reciprocals ka jod 11/30 hai. Wo numbers dhundo.

Chhota number x maano, to doosra x + 1. Equation: 1/x + 1/(x + 1) = 11/30.

**Excluded:** x ≠ 0 aur x ≠ −1. Common denominator 30x(x + 1) se guna:
30(x + 1) + 30x = 11x(x + 1)
60x + 30 = 11x² + 11x. Ek taraf lo: **11x² − 49x − 30 = 0**.
**Factorise:** a × c = −330, jod −49: −55 aur 6. 11x² − 55x + 6x − 30 = 11x(x − 5) + 6(x − 5) = (11x + 6)(x − 5). To **x = 5 ya x = −6/11**.

**Kahani ka check:** numbers natural hone chahiye. x = −6/11 na natural hai, na poora number, to **bahari**. x = 5 se numbers **5 aur 6**.

**Jaanch:** 1/5 + 1/6 = 6/30 + 5/30 = 11/30 ✅. Jod 5 − 6/11 = 49/11 = −b/a ✅, guna 5 × (−6/11) = −30/11 = c/a ✅

**Ek seema:** kuch equations fraction hatane par x² se aage ka power bana deti hain, jaise x + 1/x² = 3. Dono taraf x² se guna karo to x³ + 1 = 3x² milta hai, jo **cubic** hai. Wo quadratic nahi, aur is chapter ke tool uspar nahi chalte. Hum sirf wahi equations lenge jinka cleared roop quadratic ho.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Dono taraf se (x − kuch) wala factor kaat dena**

Topic 1 mein x se bhaag dene ki galti dekhi thi. Yahan wahi galti fraction ke andar chhupi hoti hai. Sawaal: (x − 7)/(x + 2) = (x − 7)/13.

Ek bacche ne socha: "Dono taraf (x − 7) hai, kaat do." To 1/(x + 2) = 1/13, x + 2 = 13, **x = 11**. Bas ek root.

Ab sahi tarah se karo. Excluded: x ≠ −2. Cross-multiply: 13(x − 7) = (x + 2)(x − 7). Sab ek taraf lo:
(x + 2)(x − 7) − 13(x − 7) = 0
(x − 7)[(x + 2) − 13] = 0
(x − 7)(x − 11) = 0, to **x = 7 ya x = 11**.

Dekho, **x = 7 gayab ho gaya tha.** Jaanch karo: x = 7 par bayen taraf 0/9 = 0 aur daayen taraf 0/13 = 0, to dono barabar hain ✅. Aur x = 11: 4/13 aur 4/13 ✅.

Kyun gayab hua? (x − 7) ko kaatna matlab (x − 7) se bhaag dena. Aur x = 7 par (x − 7) = 0 hota hai, aur 0 se bhaag nahi hota. **Bhaag dene wali cheez mein x ho, to wo root khoya jaa sakta hai.** Sahi tareeka: kaatne ke bajaye sab ek taraf lo aur **common factor bahar nikaalo**, jaisa upar kiya. Isse factor 0 hone wala root bhi mil jaata hai.

**Galti 2: Jo root denominator ko 0 kare, use bhi jawab maan lena**

Sawaal: (x − 5)/(x − 4) + (x + 4)/(x − 1) = −3/((x − 4)(x − 1)).

Bacche ne excluded list nahi likhi. Dono taraf (x − 4)(x − 1) se guna:
(x − 5)(x − 1) + (x + 4)(x − 4) = −3
x² − 6x + 5 + x² − 16 = −3
2x² − 6x − 8 = 0, yaani x² − 3x − 4 = 0, to (x − 4)(x + 1) = 0.
Usne likha: "x = 4 aur x = −1, dono root."

Ab jaanch karo. **x = 4:** pehla fraction (4 − 5)/(4 − 4) = −1/0. Ye define hi nahi hota ❌. **x = −1:** (−6)/(−5) = 6/5, aur 3/(−2) = −3/2, jod 6/5 − 3/2 = 12/10 − 15/10 = −3/10. Daayen taraf −3/((−5)(−2)) = −3/10 ✅.

Sahi jawab sirf **x = −1**. Aadat: hal shuru karne se pehle likho x ≠ 4, x ≠ 1, aur aakhir mein har root ko us list se milao.

---

## Quick Recap

- Brackets aur squares wali equation: **kholo, sab ek taraf lo, milao**, phir ax² + bx + c = 0 ki shakal mein factorise karo.
- Jab x denominator mein ho, **pehle excluded values likho** (jo x kisi denominator ko 0 karta hai).
- Phir saare denominators ke **common multiple se dono taraf guna** karke fractions hata do. Ek fraction = ek fraction ho to cross-multiply bhi chalta hai.
- x − 1/x = k aur x + 1/x = k ka cleared roop quadratic banta hai. x + 1/x = k mein roots ek-doosre ke reciprocal hote hain (guna 1).
- Guna karne se **bahari (extraneous) root** aa sakta hai: wo x jahan hamara guna karne wala M = 0. Har root ko excluded list se milao.
- Kahani wale sawaal mein bhi story check karo: negative bhaav, fractional number jaisi baatein bahari hain, chahe algebra unhe equation ka hal maane.
- Har example ki Jaanch: root wapas rakho **aur** α + β = −b/a, αβ = c/a dekho.
- Galtiyan: (x − kuch) wala factor dono taraf se kaat dena (root kho jaata hai), aur excluded value ko root maan lena.
- Jis equation ka cleared roop cubic ya usse bada ho, wo is chapter ke bahar hai.

---

## Practice Questions

1. Solve (x + 6)(x − 1) = 10x + 18. Check both roots.

2. Solve (4x − 3)² = (3x + 4)². Check both roots.

3. Solve x − 1/x = 24/5.

4. Solve x + 1/x = 29/10. Then, without using the roots, find x² + 1/x², and check your value using one of the roots.

5. Solve 1/x − 1/(x + 12) = 1/9. State the excluded values first.

6. Solve 1/(x + 1) + 5/(2x − 1) = 2. State the excluded values first.

7. Solve (x + 3)/(x − 5) = (3x − 1)/(x − 3).

8. Solve (x − 7)/(x − 6) + (x + 1)/(x − 2) = −4/((x − 6)(x − 2)). Say clearly which root of the quadratic you reject and why.

9. A fruit seller sells grapes. A customer spends ₹420 on grapes. Next week the price is ₹25 per kg less, and for ₹420 the customer gets 5 kg more. Find the original price per kg. Check your answer against the story.

10. The reciprocals of two consecutive positive odd integers add up to 16/63. Find the integers.

11. A number x and 28 divided by x add up to 11. Solve x + 28/x = 11, and check the roots using the sum and the product of the roots (not by substituting).

12. A student solves (x − 9)/(x + 4) = (x − 9)/6 by cancelling (x − 9) from both sides, gets x = 2 and stops. Find the root that is missing, solve the equation properly and explain what went wrong.

13. State True or False, with a reason:
    (a) Every root of the quadratic obtained after clearing fractions is a root of the original equation.
    (b) The equation x + 1/x = 7 can have x = 0 as a root.
    (c) For x ≠ 0, the equation x + 1/x = k becomes x² − kx + 1 = 0.
    (d) The equation 1/(x − 1) = 3/(x − 1) has the solution x = 1.
    (e) After clearing fractions you get x² − 6x + 8 = 0, and x = 4 is an excluded value. Then the only solution is x = 2.

### Answers

1. Kholo: bayen (x + 6)(x − 1) = x² + 5x − 6, daayen 10x + 18. Ek taraf lo: x² − 5x − 24 = 0. Factor pair −24 ke, jod −5: −8 aur 3. (x − 8)(x + 3) = 0, to **x = 8 ya x = −3**.
   Jaanch: x = 8: 14 × 7 = 98 aur 80 + 18 = 98 ✅. x = −3: 3 × (−4) = −12 aur −30 + 18 = −12 ✅. Jod 5 = −b/a ✅, guna −24 = c/a ✅

2. Kholo: 16x² − 24x + 9 = 9x² + 24x + 16. Ek taraf lo: 7x² − 48x − 7 = 0. a × c = −49, jod −48: −49 aur 1. 7x² − 49x + x − 7 = 7x(x − 7) + 1(x − 7) = (7x + 1)(x − 7). To **x = 7 ya x = −1/7**.
   Jaanch: x = 7: 4x − 3 = 25, 3x + 4 = 25, dono ke square 625 ✅. x = −1/7: 4x − 3 = −25/7, 3x + 4 = 25/7, dono ke square 625/49 ✅. Jod 48/7 = −b/a ✅, guna −1 = c/a ✅

3. Excluded x ≠ 0. 5x se guna: 5x² − 5 = 24x, yaani 5x² − 24x − 5 = 0. a × c = −25, jod −24: −25 aur 1. 5x² − 25x + x − 5 = 5x(x − 5) + (x − 5) = (5x + 1)(x − 5). To **x = 5 ya x = −1/5**.
   Jaanch: x = 5: 5 − 1/5 = 24/5 ✅. x = −1/5: −1/5 + 5 = 24/5 ✅. Guna 5 × (−1/5) = −1 = c/a ✅

4. Excluded x ≠ 0. 10x se guna: 10x² + 10 = 29x, yaani 10x² − 29x + 10 = 0. a × c = 100, jod −29: −25 aur −4. 10x² − 25x − 4x + 10 = 5x(2x − 5) − 2(2x − 5) = (2x − 5)(5x − 2). To **x = 5/2 ya x = 2/5**.
   x² + 1/x² = (x + 1/x)² − 2 = (29/10)² − 2 = 841/100 − 200/100 = **641/100**.
   Jaanch: x = 5/2: x² + 1/x² = 25/4 + 4/25 = 625/100 + 16/100 = 641/100 ✅. Dono roots ka guna 1 = c/a ✅

5. Excluded x ≠ 0 aur x ≠ −12. 9x(x + 12) se guna: 9(x + 12) − 9x = x(x + 12), yaani 108 = x² + 12x. x² + 12x − 108 = 0. Factor pair −108 ke, jod 12: 18 aur −6. (x + 18)(x − 6) = 0, to **x = 6 ya x = −18**. Dono excluded list se bahar hain.
   Jaanch: x = 6: 1/6 − 1/18 = 3/18 − 1/18 = 2/18 = 1/9 ✅. x = −18: −1/18 − 1/(−6) = −1/18 + 3/18 = 1/9 ✅. Jod −12 = −b/a ✅

6. Excluded x ≠ −1 aur x ≠ 1/2. Dono taraf (x + 1)(2x − 1) se guna (daayen taraf ki 2 ko bhi): (2x − 1) + 5(x + 1) = 2(x + 1)(2x − 1). Bayen 7x + 4, daayen 2(2x² + x − 1) = 4x² + 2x − 2. Ek taraf lo: 4x² − 5x − 6 = 0. a × c = −24, jod −5: −8 aur 3. 4x² − 8x + 3x − 6 = 4x(x − 2) + 3(x − 2) = (4x + 3)(x − 2). To **x = 2 ya x = −3/4**.
   Jaanch: x = 2: 1/3 + 5/3 = 2 ✅. x = −3/4: x + 1 = 1/4, 2x − 1 = −5/2, to 4 + 5/(−5/2) = 4 − 2 = 2 ✅. Jod 5/4 = −b/a ✅, guna −3/2 = c/a ✅

7. Excluded x ≠ 5 aur x ≠ 3. Cross-multiply: (x + 3)(x − 3) = (3x − 1)(x − 5). Bayen x² − 9, daayen 3x² − 15x − x + 5 = 3x² − 16x + 5. Daayen minus bayen: 2x² − 16x + 14 = 0, yaani x² − 8x + 7 = 0. (x − 1)(x − 7) = 0, to **x = 1 ya x = 7**.
   Jaanch: x = 1: 4/(−4) = −1 aur 2/(−2) = −1 ✅. x = 7: 10/2 = 5 aur 20/4 = 5 ✅. Jod 8 ✅, guna 7 ✅

8. Excluded x ≠ 6 aur x ≠ 2. (x − 6)(x − 2) se guna: (x − 7)(x − 2) + (x + 1)(x − 6) = −4. x² − 9x + 14 + x² − 5x − 6 = −4. 2x² − 14x + 8 = −4, yaani 2x² − 14x + 12 = 0, x² − 7x + 6 = 0. (x − 1)(x − 6) = 0.
   **x = 6 reject**, kyunki wo excluded value hai (x − 6 denominator mein 0 deta hai). Jawab **x = 1**.
   Jaanch: x = 1: (1 − 7)/(1 − 6) = −6/−5 = 6/5, aur (1 + 1)/(1 − 2) = −2. Jod 6/5 − 2 = −4/5. Daayen −4/((−5)(−1)) = −4/5 ✅

9. Pichhle hafte ka bhaav ₹x per kg. Pichhle hafte 420/x kg, is hafte 420/(x − 25) kg. Equation: 420/(x − 25) − 420/x = 5. Excluded x ≠ 25, x ≠ 0. x(x − 25) se guna: 420x − 420(x − 25) = 5x(x − 25), yaani 10500 = 5x² − 125x. 5 se bhaag: x² − 25x − 2100 = 0. Factor pair −2100 ke, jod −25: −60 aur 35. (x − 60)(x + 35) = 0, to x = 60 ya x = −35.
   Story check: bhaav negative nahi ho sakta, to **x = −35 reject**. **Original price ₹60 per kg.**
   Jaanch: 420 ÷ 60 = 7 kg. Naya bhaav ₹35, 420 ÷ 35 = 12 kg. 12 − 7 = 5 kg zyada ✅. Jod 60 − 35 = 25 = −b/a ✅

10. Chhota odd number x, to doosra x + 2. 1/x + 1/(x + 2) = 16/63. Excluded x ≠ 0, −2. 63x(x + 2) se guna: 63(x + 2) + 63x = 16x(x + 2), yaani 126x + 126 = 16x² + 32x. 16x² − 94x − 126 = 0, 2 se bhaag: 8x² − 47x − 63 = 0. a × c = −504, jod −47: −56 aur 9. 8x² − 56x + 9x − 63 = 8x(x − 7) + 9(x − 7) = (8x + 9)(x − 7). To x = 7 ya x = −9/8.
    Story check: numbers positive odd integers hone chahiye, to **x = −9/8 reject**. **Numbers 7 aur 9.**
    Jaanch: 1/7 + 1/9 = 9/63 + 7/63 = 16/63 ✅. Jod 7 − 9/8 = 47/8 = −b/a ✅

11. Excluded x ≠ 0. x se guna: x² + 28 = 11x, yaani x² − 11x + 28 = 0. Factor pair 28 ke, jod −11: −4 aur −7. (x − 4)(x − 7) = 0, to **x = 4 ya x = 7**.
    Jaanch (jod-guna se): −b/a = 11 aur c/a = 28. Roots ka jod 4 + 7 = 11 ✅ aur guna 4 × 7 = 28 ✅.

12. Bacche ne (x − 9) ko kaat diya, yaani (x − 9) se bhaag diya. Par x = 9 par (x − 9) = 0, to wahan bhaag nahi ho sakta. Sahi tareeka: excluded x ≠ −4. Cross-multiply: 6(x − 9) = (x + 4)(x − 9). Sab ek taraf: (x + 4)(x − 9) − 6(x − 9) = 0, yaani (x − 9)(x + 4 − 6) = (x − 9)(x − 2) = 0. To **x = 9 ya x = 2**. Gayab root **x = 9** hai.
    Jaanch: x = 9: bayen 0/13 = 0, daayen 0/6 = 0 ✅. x = 2: bayen −7/6, daayen −7/6 ✅. Jod 11 ✅, guna 18 ✅

13. (a) **False** ❌. Fraction hatane ke liye jis cheez se guna kiya, wo kisi x par 0 ho sakti hai, aur wahan se bahari root aa sakta hai (Part C).
    (b) **False** ❌. x = 0 par 1/x define nahi hota, wo excluded value hai.
    (c) **True** ✅. x se guna: x² + 1 = kx, yaani x² − kx + 1 = 0.
    (d) **False** ❌. x = 1 par dono taraf 0 se bhaag hota hai. Dono taraf (x − 1) se guna karo to 1 = 3, jo kabhi sach nahi. Is equation ka koi hal nahi.
    (e) **True** ✅. x² − 6x + 8 = (x − 2)(x − 4), roots 2 aur 4. x = 4 excluded hai, to bacha sirf x = 2.

---

Shabaash! Ab tum jaante ho ki quadratic kai baar bhes badal kar aati hai, aur bhes utaarne ka tareeka (excluded values, fraction hatao, ek taraf lo, factorise, roots ko list se milao) tumhare haath mein hai. Shivani ka jawab bhi mil gaya: kal ka bhaav ₹55 per kg tha, aur −40 sirf algebra ka mehmaan tha.

**Aage kya?** Ab tak har quadratic ke factors "dikh" jaate the. Par kuch equations aisi hoti hain jinke factors dhundhte-dhundhte thak jaoge. Topic 3 mein ek adhoore square ko poora karne ka jaadu seekhenge: **completing the square**, jo har quadratic par kaam karta hai. Wahan [Topic 3](quadratic-equations-part3.md) mein milte hain.
