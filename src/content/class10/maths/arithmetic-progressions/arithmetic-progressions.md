# Chapter: Arithmetic Progressions

> **Class:** 10 | **Subject:** Mathematics
> **Ye Class 10 Maths ka chautha chapter hai.** Pichhle chapter ki aakhri file ([quadratic-equations-part7.md](../quadratic-equations/quadratic-equations-part7.md): Quadratic Equations ka saar) se hum yahan aaye hain. Wahan tumne har sawaal ke liye sahi auzaar chunna seekha. Is chapter ka pehla shabd bilkul naya hai: Class 9 mein sequence ya progression nahi padhaye gaye the. Class 9 ke saathi: [number-systems.md](../../../class9/maths/number-systems/number-systems.md) (natural numbers), [linear-equations-in-two-variables-part2.md](../../../class9/maths/linear-equations-in-two-variables/linear-equations-in-two-variables-part2.md) (seedhi line ka graph) aur [compound-interest.md](../../../class9/maths/compound-interest/compound-interest.md).
> **Topics covered in this file:**
> 1. Pattern Se Progression Tak: AP Kya Hoti Hai?

---

# Topic 1: Pattern Se Progression Tak: AP Kya Hoti Hai?

Pichhle chapter tak tumne ek ya do **anjaane** (x) wali equations hal kin. Ab hum ek bilkul alag cheez dekhenge: **numbers ki ek line jo ek pattern par chalti hai**. Bus ka kiraya, seedhiyon ki ginti, ek paudhe ki unchai: sab jagah numbers ek ke baad ek aate hain, aur aksar agla number pichhle se ek tay qadam door hota hai. Is topic mein hum is "tay qadam" wali list ko pehchanna seekhenge. Uska formula aur uska jod baad ke topics mein aayenge.

---

## Dilip aur kiraye ka board

Dilip apni Mummy ke saath AC bus mein railway station ja raha tha. Driver ki seat ke peeche ek chhota board laga tha: stage-wise kiraya.

Stage 1: ₹12, Stage 2: ₹21, Stage 3: ₹30, Stage 4: ₹39, Stage 5: ₹48.

Dilip ko list dekhte hi kuch ajeeb sa laga. Usne chupchaap dimaag mein ginna shuru kiya: 12 se 21 tak 9 badha, 21 se 30 tak bhi 9, 30 se 39 tak bhi 9. Conductor uncle paise lene aaye to Dilip ne pooch liya: "Uncle, stage 6 ka kiraya kya hoga?" Uncle muskuraaye: "57 rupaye. Kaise pata, beta?" Dilip bola: "Har baar 9 jodna hai na!"

Shaam ko wo Mummy ke saath metro station gaya. Seedhiyon par har landing par ek board tha: "bachi hui seedhiyan". Pehle landing par 30, phir 24, phir 18, 12, 6 aur sabse upar 0. Dilip ne phir wahi dekha: har baar **6 ghat raha hai**. Ek list mein 9 jud raha tha, doosri mein 6 ghat raha tha, par dono ke andar ek hi kahani thi: **har baar ek hi qadam**.

Sawaal ye hai: **aisi list ko kya kehte hain, uska "qadam" kaise naapte hain, aur kaise pata chalega ki koi list sach mein "har baar ek hi qadam" wali hai?** Chalo, ek ek karke dekhte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Sequence** | Numbers ki ek list jo ek **tay kram** (order) mein likhi ho: pehla, doosra, teesra, ... | 12, 21, 30, 39, 48 |
| **Term** | Sequence ka ek number. Pehla term a₁, doosra a₂, ..., n-wan term aₙ | Upar wali list mein a₃ = 30 |
| **Finite sequence** | Jis list ka aakhri term hota hai (list ruk jaati hai) | Stage 1 se 5 ka kiraya |
| **Infinite sequence** | Jis list ka aakhri term nahi hota (teen bindu ... se dikhate hain) | 1, 2, 3, 4, ... |
| **Arithmetic progression (AP)** | Aisi sequence jisme pehle term ke baad **har term apne pichhle term mein ek hi tay number jodne** se banta hai | 12, 21, 30, 39, 48 |
| **Pehla term (a)** | AP ka sabse pehla number | Kiraye wali AP mein a = 12 |
| **Common difference (d)** | Wo tay number jo har baar judta hai: d = aₙ₊₁ − aₙ (agla term minus pichhla term) | Kiraye mein d = 9 |
| **Increasing, decreasing, constant AP** | d > 0 ho to AP badhti hai. d < 0 ho to ghat-ti hai. d = 0 ho to har term wahi rehta hai | d = 9, d = −6, d = 0 |

Ek chhoti baat: **progression** ka matlab "aage badhte jaana" hai, par AP ghat bhi sakti hai (d negative ho to). Naam ek hi hai, teen roop hain.

---

## Pehle se kya yaad hona chahiye

- **Natural numbers 1, 2, 3, ...** ([number-systems.md](../../../class9/maths/number-systems/number-systems.md)): terms ko ginne ke liye hum yehi numbers use karenge: pehla, doosra, teesra, ...
- **Ek seedhi line ka graph** ([linear-equations-in-two-variables-part2.md](../../../class9/maths/linear-equations-in-two-variables/linear-equations-in-two-variables-part2.md)): Part F mein hum AP ke points ko graph par rakhenge, aur wahi seedhi line wali baat wapas aayegi.
- **Negative numbers aur fractions** ki jod-ghata (Class 6 se 8): d negative ya fraction ho sakta hai, to ye kaam aayega.

---

## Part A: Sequence kya hai?

**Sequence ek list hai jisme order matter karta hai.** 5, 8, 11 aur 11, 8, 5 do **alag** sequences hain: pehle mein a₁ = 5 hai, doosre mein a₁ = 11. Ek set mein order nahi hota, sequence mein hota hai.

Kuch aam sequences:

| Sequence | Finite ya infinite? | Pattern ka ishara |
|---|---|---|
| Kisi mahine ki taareekhein: 1, 2, 3, ..., 30 | Finite (30 term) | Har baar 1 badhna |
| Bus ka kiraya: 12, 21, 30, 39, 48 | Finite (5 term) | Har baar 9 badhna |
| Seedhiyon ke board: 30, 24, 18, 12, 6, 0 | Finite (6 term) | Har baar 6 ghatna |
| Ek gullak mein har hafte daali rakam (₹): 11, 14, 14, 20, 9 | Finite | Koi pattern nahi |
| Dots wali tasveerein: 1, 3, 6, 10, ... | Infinite | Pattern hai, par alag |

Ek zaroori baat: **har sequence mein pattern ho, ye zaroori nahi.** Gullak waali list bas jo hua wo hai. Hum sirf un sequences par dhyan denge jinme pattern "agle term ko nikalne ka niyam" ban sake.

Aakhri wali list ko dekho: dots ki tasveer mein har baar ek nayi row judti hai.

```
*     *       *         *
      * *     * *       * *
              * * *     * * *
                        * * * *

1     3       6         10
```

> **Figure 1.1** – Dots ki ek sequence: pehli tasveer mein 1 dot, doosri mein 1 + 2 = 3, teesri mein 1 + 2 + 3 = 6, chauthi mein 1 + 2 + 3 + 4 = 10. Neeche likhe numbers sequence ke terms hain: a₁ = 1, a₂ = 3, a₃ = 6, a₄ = 10.

Is list mein bhi pattern hai (nayi row mein ek dot zyada), par kya "har baar ek hi qadam" wala pattern hai? 1 se 3 tak +2, 3 se 6 tak +3, 6 se 10 tak +4. **Qadam badal raha hai**, isliye ye AP nahi hai. Part E mein hum aise aur sequences dekhenge.

---

## Part B: AP ka idea aur common difference d

Dilip ke dono boards ek jaise hain: pehle term ke baad har term = pichhla term + ek tay number. Number-line par ye "chhalaang" ki tarah dikhta hai.

```
    +9       +9       +9       +9
--+--------+--------+--------+--------+--
 12       21       30       39       48

    −6    −6    −6    −6    −6
--+-----+-----+-----+-----+-----+--
  0     6    12    18    24    30
```

> **Figure 1.2** – Upar: kiraya 12 se shuru karke har baar +9 ki chhalaang lagata hai (chhalaangein left se right chalti hain). Neeche: seedhiyon ka board 30 se shuru hota hai aur har baar −6 ki chhalaang lagata hai, yaani **right se left**, 30, 24, 18, 12, 6, 0. Dono mein har chhalaang ek hi lambai ki hai.

Is "ek hi lambai" ka naam **common difference d** hai: **d = aₙ₊₁ − aₙ**, yaani agla term **minus** pichhla term. Hamesha is order mein ghatana: agla minus pichhla.

- d **positive** ho to AP **badhti** hai (kiraye wali, d = 9).
- d **negative** ho to AP **ghat-ti** hai (seedhiyon wali, d = −6).
- d **zero** ho to **har term wahi** hai, AP "constant" hai (jaise 25, 25, 25, ...). Number-line par chhalaang ki lambai 0 hai: tum ek hi point par khade rehte ho.

### Example 1: pani ki tanki ka level

Ek tanki ka pani ka level (cm mein) har ghante par naapa gaya: 36, 33.5, 31, 28.5. Kya ye AP hai? Hai to d batao, ye badh rahi hai ya ghat rahi, aur agle do term likho.

**Hal:** a₂ − a₁ = 33.5 − 36 = −2.5. a₃ − a₂ = 31 − 33.5 = −2.5. a₄ − a₃ = 28.5 − 31 = −2.5. Teeno differences barabar hain, to **AP hai, d = −2.5**. d negative hai, to AP **ghat rahi** hai.
Agle do term: a₅ = 28.5 − 2.5 = 26 aur a₆ = 26 − 2.5 = 23.5.

**Jaanch:** a₁ se 5 chhalaang (har ek −2.5) lagao: 36 − 5 × 2.5 = 36 − 12.5 = 23.5 = a₆ ✅.

**Story check:** level kabhi negative nahi ho sakta. Yahan 23.5 cm abhi bhi positive hai, to kahani mein baith jaata hai.

### Example 2: paudhe ki unchai (fraction wala d)

Ek paudhe ki unchai (cm mein) har din: 11, 11.75, 12.5, 13.25. Kya AP hai? d ko fraction mein bhi likho, aur agle do term batao.

**Hal:** 11.75 − 11 = 0.75, 12.5 − 11.75 = 0.75, 13.25 − 12.5 = 0.75. **AP hai, d = 0.75 = 3/4.** Fraction mein: 11, 47/4, 25/2, 53/4 aur d = 47/4 − 11 = 47/4 − 44/4 = 3/4.
Agle do term: a₅ = 13.25 + 0.75 = 14 aur a₆ = 14 + 0.75 = 14.75.

**Jaanch:** a₁ se 4 chhalaang (har ek 3/4): 11 + 4 × 3/4 = 11 + 3 = 14 = a₅ ✅.

**Story check:** paudhe ki unchai badhti hi gayi, d positive hai, to kahani se mel khaata hai.

---

## Part C: Kya ye AP hai? (saare differences check karo)

AP ki pehchaan ek hi test se hoti hai: **saare ek ke baad ek aane wale differences barabar hon.** Dhyan do: **saare**, sirf pehle do nahi.

### Example 3: teen lists, teen faisle

(a) 52, 46, 40, 34, 28, 22 (b) 13, 22, 32, 41 (c) 33, 33, 33, 33.

**Hal:**
(a) Differences: 46 − 52 = −6, 40 − 46 = −6, 34 − 40 = −6, 28 − 34 = −6, 22 − 28 = −6. Sab barabar: **AP hai, d = −6.**
(b) Differences: 22 − 13 = 9, 32 − 22 = **10**, 41 − 32 = 9. Barabar nahi: **AP nahi hai.**
(c) Differences: 0, 0, 0. **AP hai (constant AP), d = 0.**

**Jaanch:** (a) a₁ se 5 chhalaang: 52 − 5 × 6 = 22 = aakhri term ✅. (b) Agar d = 9 hota to a₃ = 13 + 2 × 9 = 31 hona chahiye tha, par list mein 32 hai, to AP nahi ✅. (c) Har term 33 hai, d = 0 ✅.

### Example 4: fraction aur decimal wali AP

Pehchano ki ye APs hain: (i) 23/2, 49/4, 13, 55/4 (ii) 12.4, 9.9, 7.4, 4.9. Dono ka d nikalo.

**Hal:** (i) Sabko chauthe (denominator 4) mein likho: 46/4, 49/4, 52/4, 55/4. Differences: 3/4, 3/4, 3/4. **AP hai, d = 3/4.**
(ii) 9.9 − 12.4 = −2.5, 7.4 − 9.9 = −2.5, 4.9 − 7.4 = −2.5. **AP hai, d = −2.5.**

**Jaanch:** (i) 23/2 + 3 × 3/4 = 46/4 + 9/4 = 55/4 ✅. (ii) 12.4 − 3 × 2.5 = 12.4 − 7.5 = 4.9 ✅.

### Example 5: algebra wale terms

(i) Kya x, 2x + 1, 3x + 2 har x ke liye AP hai? (ii) x ki kis value par x, 2x + 3, 4x − 1 AP banti hai?

**Hal:** (i) (2x + 1) − x = x + 1. (3x + 2) − (2x + 1) = x + 1. Dono differences barabar, **x kuch bhi ho**. To **AP hai, d = x + 1**.
(ii) AP tab banegi jab dono differences barabar hon: (2x + 3) − x = (4x − 1) − (2x + 3). Left: x + 3. Right: 2x − 4. To x + 3 = 2x − 4, **x = 7**. Terms: 7, 17, 27.

**Jaanch:** (i) x = 5 lo: 5, 11, 17, differences 6 aur 6, aur x + 1 = 6 ✅. (ii) 17 − 7 = 10 aur 27 − 17 = 10 ✅.

---

## Part D: Aam roop: a, a + d, a + 2d, ...

Agar pehla term a ho aur common difference d, to poori AP is tarah likhi jaati hai:

a₁ = a, a₂ = a + d, a₃ = a + 2d, a₄ = a + 3d, ...

Dhyan se dekho: a₄ mein d **teen** baar juda hai, chaar baar nahi. "Kitni baar?" ka pattern kyun banta hai, ye Topic 2 mein dekhenge.

### Example 6: a aur d se AP likhna

Pehle paanch term likho: (i) a = 19, d = −6 (ii) a = 14, d = 3/4 (iii) a = −7, d = 9 (iv) a = 22, d = 0.

**Hal:**
(i) 19, 19 − 6 = 13, 7, 1, −5. (ii) 14, 14 3/4, 15 1/2, 16 1/4, 17. (iii) −7, 2, 11, 20, 29. (iv) 22, 22, 22, 22, 22.

**Jaanch (aakhri term doosre tareeke se, 4 chhalaang):** (i) 19 + 4 × (−6) = 19 − 24 = −5 ✅. (ii) 14 + 4 × 3/4 = 14 + 3 = 17 ✅. (iii) −7 + 4 × 9 = −7 + 36 = 29 ✅. (iv) 22 + 4 × 0 = 22 ✅.

Dhyan do: (iii) mein pehla term **negative** hai, phir bhi ye AP hai. a negative ya fraction bhi ho sakta hai.

---

## Part E: Wo sequences jo AP nahi hain

Har pattern wali list AP nahi hoti. Dekhne ka tareeka wahi hai: differences nikalo.

```
Squares
      1    4    9    16   25
        +3   +5   +7   +9

Triangular
      1    3    6    10   15
        +2   +3   +4   +5

Fibonacci
      1    1    2    3    5    8
        +0   +1   +1   +2   +3

Doubling
      1    2    4    8    16
        +1   +2   +4   +8
```

> **Figure 1.3** – Chaar mashhoor sequences aur unke differences. Squares (1², 2², 3², ...), triangular numbers (Figure 1.1 wali dots ki ginti), Fibonacci (har term pichhle do terms ka jod: 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8) aur doubling (har term pichhle ka double). Kisi mein bhi saare differences barabar nahi hain, isliye koi bhi AP nahi hai.

Sabse alag shakal **doubling** ki hai: wahan har baar **jodna nahi, guna karna** hai. Aisi sequences ka alag chapter hai: Class 10 Maths ka Chapter 5, Geometric Progressions. Abhi bas itna yaad rakho ki AP ka matlab **jodna**.

---

## Part F: AP aur seedhi line

Kiraye wali AP ke points (n, aₙ) graph par rakho: n = 1 par 12, n = 2 par 21, n = 3 par 30, n = 4 par 39, n = 5 par 48.

```
 48 +                          o
 45 +                        .
 42 +                      .
 39 +                    o
 36 +                  .
 33 +                .
 30 +              o
 27 +            .
 24 +          .
 21 +        o
 18 +      .
 15 +    .
 12 +  o
  9 +
    +---------------------------> n
       1     2     3     4     5
```

> **Figure 1.4** – Kiraye wali AP ke points (n, aₙ). Bade o terms hain. Beech ke chhote bindu sirf is liye hain ki saaf dikhe ki o ek seedhi line par hain. Asli points sirf n = 1, 2, 3, 4, 5 par hain, beech mein koi term nahi hota.

Points ek seedhi line par aaye, aur ye atefaq nahi hai: **n har baar 1 badhta hai aur aₙ har baar ek hi d se badhta hai**, to har qadam par chadhai barabar rehti hai. Class 9 ki seedhi line wahi cheez hai ([linear-equations-in-two-variables-part2.md](../../../class9/maths/linear-equations-in-two-variables/linear-equations-in-two-variables-part2.md)). Yahan har qadam par chadhai **d** hai. Is AP ka n-wan term aₙ = 9n + 3 niklega (n = 1 par 12, n = 5 par 48): ye ek linear expression hai, aur isi se line banti hai. Ye formula **Topic 2** mein theek se banega.

Ghat-ti AP ka graph neeche utarti line deta hai:

```
 30 +  o
 27 +     .
 24 +        o
 21 +           .
 18 +              o
 15 +                 .
 12 +                    o
  9 +                       .
  6 +                          o
  3 +                             .
  0 +                                o
    +---------------------------------> n
       1     2     3     4     5     6
```

> **Figure 1.5** – Seedhiyon ke board wali AP (30, 24, 18, 12, 6, 0) ke points. Line neeche ki taraf jaati hai kyunki d = −6 negative hai. Agar d = 0 hota to saare points ek **seedhi aadi (horizontal) line** par hote.

Yaani graph se bhi AP pehchani ja sakti hai: **points ek seedhi line par aayein to AP, nahi to nahi.** Figure 1.1 ke dots wale terms 1, 3, 6, 10 ek line par nahi aate: wahan 1 se 3 tak chadhai 2 hai, 3 se 6 tak 3.

---

## Part G: Simple interest AP hai, compound interest nahi

Class 9 mein tumne simple interest aur compound interest padhe the ([compound-interest.md](../../../class9/maths/compound-interest/compound-interest.md)). Dekho ki dono ke saalana amounts ka kya hota hai. ₹12,000 par 5% saalana byaaj, teen saal:

| Saal | Simple interest se amount | Compound interest se amount |
|---|---|---|
| 1 | ₹12,600 | ₹12,600 |
| 2 | ₹13,200 | ₹13,230 |
| 3 | ₹13,800 | ₹13,891.50 |

Simple interest mein har saal ₹600 ka byaaj judta hai, to amounts **12,600, 13,200, 13,800: AP hai, d = 600.** Compound interest mein differences 13,230 − 12,600 = 630 aur 13,891.50 − 13,230 = 661.50 hain, **barabar nahi**, isliye AP nahi. Compound interest wali list ko ek alag naam milega: Chapter 5 mein, jahan list "jodne" se nahi, "guna karne" se aage badhti hai.

---

## Aam galtiyan (bachke rehna)

**Galti 1: "Pehle do differences barabar hain, to AP hai"**

Ek bacche ne paanch hafton ka apna jeb-kharch (₹ mein) likha: 55, 49, 43, 38, 32. Phir usne dekha: 49 − 55 = −6 aur 43 − 49 = −6, to usne likh diya "AP hai, d = −6" aur agla term 38 ki jagah 37 bata diya.

Check karo. Saare differences: −6, −6, **−5**, −6. Teesra difference alag hai, to **ye AP nahi hai**. Agar AP hoti to a₄ = 43 − 6 = 37 hota, par list mein 38 hai. Sirf do differences dekhne se list ko AP maan lena pakka nahi hota: **saare** consecutive differences dekho.

**Jaanch:** 55, 49, 43 tak d = −6 theek chalta hai, par 38 − 43 = −5 ≠ −6, to test fail ✅.

**Galti 2: "d hamesha positive hota hai"**

Ek list hai: 64, 58, 52, 46. Ek bacche ne kaha: "difference matlab fark, aur fark positive hota hai, to d = 6". Phir usne agla term 46 + 6 = 52 likh diya.

Check karo. List neeche ja rahi hai (64 → 58 → 52 → 46), to agla term 46 se **chhota** hona chahiye, bada nahi. Sahi: d = **agla minus pichhla** = 58 − 64 = **−6**, aur agla term 46 + (−6) = **40**. Ulta subtract karne (pichhla minus agla = +6) se sign galat aata hai: aise chalein to 64, 70, ... jaisi badhti AP bani, jo list se mel nahi khati.

**Jaanch:** 64 + 3 × (−6) = 46 ✅ aur 64, 58, 52, 46, 40 mein saare differences −6 hain ✅.

---

## Quick Recap

- **Sequence** numbers ki ek list hai jisme order matter karta hai. Terms: a₁, a₂, a₃, ..., aₙ. Aakhri term ho to **finite**, na ho to **infinite**.
- **AP** (arithmetic progression): pehle term ke baad har term apne pichhle term mein ek hi tay number jodne se banta hai.
- **Common difference d = aₙ₊₁ − aₙ** (agla minus pichhla). d > 0 badhti, d < 0 ghat-ti, d = 0 constant AP.
- **AP ka test:** saare consecutive differences barabar hon. Sirf pehle do dekhna kaafi nahi.
- **Aam roop:** a, a + d, a + 2d, a + 3d, ... (a₄ mein d teen baar judta hai).
- d aur terms fraction, decimal, negative ya x wale expressions bhi ho sakte hain. Algebra wale terms mein dono differences barabar karke x nikalte hain.
- Squares, triangular numbers aur Fibonacci AP nahi hain (differences barabar nahi). Doubling (guna) Chapter 5 ka vishay hai.
- (n, aₙ) ke points AP mein ek **seedhi line** par aate hain. Simple interest ke amounts AP banate hain, compound interest ke nahi.

---

## Practice Questions

1. Say whether each sequence is finite or infinite, and write its fourth term: (a) the odd numbers 1, 3, 5, ... (b) the stations of a metro line numbered 1 to 21 (c) the multiples of 7 less than 60.

2. The fares at four stages of a tempo route are ₹27, ₹31, ₹35 and ₹39. Show that the fares form an AP, state d, and write the fares for stages 5, 6 and 7.

3. At 6 pm the water in a tank is 81 cm deep and it falls by 6 cm every hour. Write the depths at 6 pm, 7 pm, 8 pm, 9 pm and 10 pm. Is this AP increasing or decreasing? What is d?

4. A sapling is 17 cm tall on day 1 and grows 3/4 cm every day. Write its heights for the first five days, first as fractions and then as decimals.

5. Write the first four terms of each AP: (a) a = 44, d = −2.5 (b) a = −18, d = 9 (c) a = 29, d = 0.

6. Is 85/2, 40, 75/2, 35 an AP? If it is, find d and write the next two terms.

7. Find the value of x for which x + 2, 3x − 1, 6x − 13 are in AP, and write the three terms.

8. Show that 4p + 5, 7p + 8, 10p + 11, 13p + 14 form an AP for every value of p, and find d in terms of p.

9. A student says that 1, 9, 25, 49, 81 (the squares of the odd numbers) is an AP because "it has a clear pattern". Show that he is wrong by finding the differences.

10. ₹10,000 is invested for 3 years at 8% per annum. Write the amount at the end of each year (a) under simple interest (b) under compound interest. Which of the two lists is an AP, and what is its d?

11. The points (1, 90), (2, 84), (3, 78), (4, 72) are plotted on a graph. Do they lie on one straight line? Does the line rise or fall as n increases, and by how much for each step? Is the point (5, 66) also on this line?

12. State True or False, with a reason: (a) 20, 15, 10, 5, 0, −5 is an AP. (b) For 1, 4, 9, 16 the common difference is 3 because 4 − 1 = 3. (c) A list in which all terms are equal is not an AP. (d) The sequences 4, 5, 6 and 6, 5, 4 are the same. (e) In an AP with d < 0 every term is smaller than the term before it.

### Answers

1. (a) 1, 3, 5, ... kabhi nahi ruki, to **infinite**. a₄ = **7**. (b) Stations 1 se 21 tak, 21 term par ruk gayi, to **finite**. a₄ = **4** (chautha station). (c) 7 ke multiples jo 60 se kam hain: 7, 14, 21, 28, 35, 42, 49, 56. Aakhri term hai, to **finite**. a₄ = **28**.
   Jaanch: (c) agla multiple 63 hai jo 60 se bada hai, to list 56 par ruki ✅.

2. Differences: 31 − 27 = 4, 35 − 31 = 4, 39 − 35 = 4. Saare barabar, to **AP hai, d = 4**. Stage 5 = 39 + 4 = **₹43**, stage 6 = 43 + 4 = **₹47**, stage 7 = 47 + 4 = **₹51**.
   Jaanch: 27 se 6 chhalaang (har ek 4): 27 + 6 × 4 = 51 ✅.

3. Har ghante 6 cm kam hota hai: 81, 75, 69, 63, 57 cm. Ye **decreasing AP** hai (d < 0), **d = −6**.
   Jaanch: 81 + 4 × (−6) = 81 − 24 = 57 ✅.
   Story check: depth abhi bhi positive hai, kahani theek hai.

4. Har din 3/4 cm badhti hai: 17, 17 3/4, 18 1/2, 19 1/4, 20 (fraction mein 17, 71/4, 37/2, 77/4, 20). Decimal mein: **17, 17.75, 18.5, 19.25, 20**.
   Jaanch: 17 + 4 × 3/4 = 17 + 3 = 20 ✅.
   Story check: unchai badhti rahi, d > 0 hai, mel khaata hai.

5. (a) 44, 41.5, 39, 36.5. (b) −18, −9, 0, 9. (c) 29, 29, 29, 29.
   Jaanch: (a) 44 + 3 × (−2.5) = 44 − 7.5 = 36.5 ✅. (b) −18 + 3 × 9 = 9 ✅. (c) 29 + 3 × 0 = 29 ✅.

6. Sabko half mein likho: 85/2, 80/2, 75/2, 70/2. Differences: −5/2, −5/2, −5/2. **AP hai, d = −5/2 = −2.5.** Agle do term: 35 − 5/2 = **65/2 (32.5)** aur 65/2 − 5/2 = **30**.
   Jaanch: 85/2 + 5 × (−5/2) = 85/2 − 25/2 = 60/2 = 30 ✅.

7. AP ke liye dono differences barabar: (3x − 1) − (x + 2) = (6x − 13) − (3x − 1). Left: 2x − 3. Right: 3x − 12. To 2x − 3 = 3x − 12, **x = 9**. Terms: x + 2 = **11**, 3x − 1 = **26**, 6x − 13 = **41**.
   Jaanch: 26 − 11 = 15 aur 41 − 26 = 15 ✅.

8. (7p + 8) − (4p + 5) = 3p + 3. (10p + 11) − (7p + 8) = 3p + 3. (13p + 14) − (10p + 11) = 3p + 3. Teeno barabar, p kuch bhi ho, to **AP hai, d = 3p + 3**.
   Jaanch: p = 3 lo: 17, 29, 41, 53, differences 12, 12, 12 aur 3p + 3 = 12 ✅.

9. Differences: 9 − 1 = 8, 25 − 9 = 16, 49 − 25 = 24, 81 − 49 = 32. Barabar nahi (8, 16, 24, 32), to **AP nahi hai**. Pattern hona kaafi nahi, qadam bhi tay hona chahiye.
   Jaanch: agar d = 8 hota to a₃ = 1 + 2 × 8 = 17 hona chahiye tha, par list mein 25 hai ✅.

10. Simple interest: har saal 10,000 × 8/100 = ₹800. Amounts: **10,800, 11,600, 12,400**. Compound interest: 10,000 × 1.08 = 10,800, phir 10,800 × 1.08 = 11,664, phir 11,664 × 1.08 = 12,597.12. Amounts: **10,800, 11,664, 12,597.12**.
    Differences: simple mein 800, 800 (barabar); compound mein 864 aur 933.12 (barabar nahi). To **simple interest wali list AP hai, d = 800**.
    Jaanch: 10,800 + 2 × 800 = 12,400 ✅.

11. Differences: 84 − 90 = −6, 78 − 84 = −6, 72 − 78 = −6. Barabar, to **AP**, aur points **ek seedhi line** par hain. n badhne par line **girti hai**, har qadam par **6** (kyunki d = −6). Agla point (5, 66) bhi line par hai, kyunki 72 − 6 = 66.
    Jaanch: 90 + 4 × (−6) = 66 ✅.

12. (a) **True** ✅. Differences −5, −5, −5, −5, −5 sab barabar, d = −5.
    (b) **False** ❌. 9 − 4 = 5 aur 16 − 9 = 7, saare differences barabar nahi, to common difference hai hi nahi.
    (c) **False** ❌. Sab terms barabar hon to differences sab 0 hain, to ye constant AP hai, d = 0.
    (d) **False** ❌. Sequence mein order matter karta hai: pehle mein a₁ = 4, doosre mein a₁ = 6.
    (e) **True** ✅. d negative hai, to har term = pichhla term + (negative number), yaani pichhle se chhota.

---

Shabaash! Ab tum kisi bhi list ko dekhkar bata sakte ho ki wo AP hai ya nahi: saare differences nikalo, barabar mile to AP. Dilip ka board bhi ab tumhein ek seedhi line wali kahani lagega.

**Aage kya?** Conductor uncle ne stage 6 ka kiraya to Dilip se jod jod ke nikalwa liya. Par agar kisi ne poocha ki **stage 40 ka kiraya** kya hoga, to kya Dilip 39 baar 9 jodega? Topic 2 mein tumhein ek chhota formula milega, jisse kisi bhi term tak seedha pahunchoge: [Topic 2](arithmetic-progressions-part2.md) mein milte hain.
