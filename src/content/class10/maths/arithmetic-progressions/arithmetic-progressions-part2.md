# Chapter: Arithmetic Progressions (Part 2)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [arithmetic-progressions.md](arithmetic-progressions.md) se aage chalti hai** (wahan Topic 1 mein AP kya hoti hai, uska pehla term a aur common difference d seekha). Chapter ki shuruaat: [arithmetic-progressions.md](arithmetic-progressions.md). Seedhi line wali baat ke liye Class 9: [linear-equations-in-two-variables-part2.md](../../../class9/maths/linear-equations-in-two-variables/linear-equations-in-two-variables-part2.md).
> **Topics covered in this file:**
> 2. nth Term Ka Formula: aₙ = a + (n − 1)d

---

# Topic 2: nth Term Ka Formula: aₙ = a + (n − 1)d

Topic 1 mein humne dekha ki AP aisi list hai jisme har term se agla term **ek hi fixed qadam d** se milta hai. Par abhi tak agar 50ven term chahiye hota, to humein ek-ek karke 50 term likhne padte. Is topic mein hum ek chhota sa formula banayenge jo seedha **kisi bhi position ka term** de dega. Wahi formula ulta bhi chalega: term se position, term se a ya d, aur ek finite AP mein kitne term hain, ye bhi.

---

## Natasha aur sadak ke patthar

Natasha Papa ke saath car mein gaon ja rahi hai. Sadak ke kinare ek-ek karke chhote patthar (milestone) lage hain. Pehla patthar shehar ki seema se **6 km** door hai, doosra **10 km**, teesra **14 km**: har patthar pichhle se 4 km aage. Natasha khidki se patthar ginti rahi: 6, 10, 14, 18, ...

Papa ne paheli puchhi: "Gaon ke raaste mein 25ven patthar par kya likha hoga?" Natasha ne ginna shuru kiya, par 10 ke baad hi ruk gayi. "Papa, 25 term to likhne mein der lagegi. Koi seedha tareeka nahi hai?" Papa muskuraye: "Hai. Bas ye sochna ki 25ven patthar tak pahunchne ke liye pehle patthar se kitne **qadam** chalne padte hain." Chalo wahi sochte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **General term aₙ** | AP ka wo term jo n number par baitha hai; n koi bhi position ho sakta hai (1, 2, 3, ...). Isse banne wala formula har term ek hi baar mein de deta hai | 6, 10, 14, ... mein a₃ = 14 |
| **Position n** | Term ki ginti: pehla term n = 1, doosra n = 2, aur aise hi. Ye hamesha 1, 2, 3, ... jaisa poora (whole) number hota hai | 18 is AP ka 4th term hai, to n = 4 |
| **Aakhir se term** | Finite AP mein aakhri term ko 1st, usse pehle wale ko 2nd, aur aise hi ulti taraf ginna | 6, 10, 14, 18 mein aakhir se 1st term 18 aur 2nd term 14 hai |
| **Terms ki ginti n** | Finite AP mein kul kitne term hain. Wahi aakhri term (jise hum l likhte hain) ki position bhi hoti hai | 6 se 26 tak (4 ke qadam) 6 term |
| **n mein linear** | Aisa expression jisme n sirf pehli power mein ho, jaise 4n + 2 | aₙ = 4n + 2 |

---

## Class 9 aur Topic 1 se yaad

- **AP aur d** ([arithmetic-progressions.md](arithmetic-progressions.md), Topic 1): AP a, a + d, a + 2d, ... hoti hai aur d = aₙ₊₁ − aₙ. Is topic ke formula ka poora aadhaar yahi hai.
- **Seedhi line** ([linear-equations-in-two-variables-part2.md](../../../class9/maths/linear-equations-in-two-variables/linear-equations-in-two-variables-part2.md), Class 9): ek linear equation ke solutions (x, y) ek seedhi line par aate hain. Part F mein (n, aₙ) ke saath wahi hoga.
- **Linear polynomial** ([polynomials.md](../polynomials/polynomials.md), Chapter 2): degree 1 wala polynomial, jaise 4n + 2. Hum dekhenge ki aₙ aisa hi hai.

---

## Part A: Formula banate hain (d ko n − 1 baar jodna)

AP ke terms ek-ek karke likhte hain. Pehla term a hai. Har agla term ke liye pichhle mein d jodna padta hai:

| Term | Kaise bana | d kitni baar joda |
|---|---|---|
| a₁ | a | 0 baar |
| a₂ | a + d | 1 baar |
| a₃ | a + d + d = a + 2d | 2 baar |
| a₄ | a + 3d | 3 baar |
| a₅ | a + 4d | 4 baar |
| a₆ | a + 5d | 5 baar |

Pattern saaf hai: **d jodne ki ginti hamesha position se ek kam hai.** a₆ mein 5 baar, a₄ mein 3 baar. To aₙ mein d ko (n − 1) baar jodna padega:

**aₙ = a + (n − 1)d**

```
a₁       a₂       a₃       a₄       a₅       a₆
6 -----> 10 ----> 14 ----> 18 ----> 22 ----> 26
  +4       +4       +4       +4       +4
```

> **Figure 2.1** – Sadak ke patthar (a = 6, d = 4). Chhe numbers ke beech paanch qadam (+4) hain: a₆ = 6 + 5 × 4 = 26. Numbers ki ginti qadam ki ginti se ek zyada hoti hai.

Isko ek aur tareeke se samjho: kisi bhi baad ke term tak pahunchne ke liye pehle term se shuru karke **gaps** ginne hain, numbers nahi. Jaise 6 khambhon ke beech 5 doori hoti hain, waise hi n terms ke beech (n − 1) qadam hote hain. Isliye "n × d" nahi, "(n − 1) × d".

---

## Part B: Term nikalna (a, d aur n diya ho)

### Example 1: Natasha ki paheli (6, 10, 14, ...)

AP: 6, 10, 14, 18, ... Yahan a = 6, d = 10 − 6 = 4, n = 25.

a₂₅ = a + (25 − 1)d = 6 + 24 × 4 = 6 + 96 = **102**. 25ven patthar par **102 km** likha hoga.

**Jaanch (doosra tareeka):** pehle a₁₀ = 6 + 9 × 4 = 42. Wahan se 15 qadam aur: a₂₅ = 42 + 15 × 4 = 42 + 60 = 102 ✅.

**Story check:** n = 25 poora number hai, aur doori positive hai. Papa ki paheli hal.

### Example 2: fraction wali AP (4/5, 11/10, 7/5, ...)

a = 4/5. d = 11/10 − 4/5 = 11/10 − 8/10 = 3/10. Jaanch ke liye agla gap: 7/5 − 11/10 = 14/10 − 11/10 = 3/10, barabar hai. Ab 31ven term chahiye (n = 31):

a₃₁ = 4/5 + 30 × 3/10 = 4/5 + 9 = 4/5 + 45/5 = **49/5** (= 9.8).

**Jaanch:** a₁₁ = 4/5 + 10 × 3/10 = 0.8 + 3 = 3.8. Phir a₃₁ = a₁₁ + 20d = 3.8 + 20 × 0.3 = 3.8 + 6 = 9.8 ✅.

### Example 3: negative d, decimal wali AP (5.5, 4.2, 2.9, ...)

a = 5.5, d = 4.2 − 5.5 = **−1.3** (AP ghat rahi hai). Jaanch ke liye: 2.9 − 4.2 = −1.3, barabar. 20va term:

a₂₀ = 5.5 + 19 × (−1.3) = 5.5 − 24.7 = **−19.2**.

**Jaanch:** a₁₀ = 5.5 + 9(−1.3) = 5.5 − 11.7 = −6.2. a₂₀ = a₁₀ + 10d = −6.2 − 13 = −19.2 ✅.

---

## Part C: Position nikalna ("kaunsa term hai?")

Formula mein n unknown ho sakta hai. aₙ = a + (n − 1)d ko n ke liye hal karte hain:

(n − 1)d = aₙ − a, to **n = (aₙ − a)/d + 1.**

Is n par ek zaroori sawal hamesha poochna: **kya n ek poora positive number hai?** Term ki position sirf 1, 2, 3, ... ho sakti hai.

### Example 4: kaunsa term hai −12.7? (AP: 5.5, 4.2, 2.9, ...)

a = 5.5, d = −1.3, aₙ = −12.7.

n = (−12.7 − 5.5)/(−1.3) + 1 = (−18.2)/(−1.3) + 1 = 14 + 1 = **15**. −12.7 is AP ka **15va term** hai.

**Jaanch:** a₁₅ = 5.5 + 14(−1.3) = 5.5 − 18.2 = −12.7 ✅.

Ab −13 lo: n = (−13 − 5.5)/(−1.3) + 1 = 14.23 + 1 = 15.23, ye poora number nahi, to **−13 is AP ka term nahi hai.** Jaanch: a₁₅ = −12.7 aur a₁₆ = −14.0. −13 in dono ke beech mein hai, kisi term par nahi baitha ✅.

```
a₁₄=−11.4        a₁₅=−12.7   −13   a₁₆=−14.0
   +---------------+---------+-----+
         (1.3)         (0.3)  (1.0)
```

> **Figure 2.2** – Number line par −13, a₁₅ aur a₁₆ ke beech mein hai, to term nahi hai (figure naap ke hisaab se nahi hai).

### Example 5: AP 13, 21, 29, ...: kya 301, 250 aur −3 term hain?

a = 13, d = 8.

| Sankhya | n = (aₙ − 13)/8 + 1 | Nateeja |
|---|---|---|
| 301 | 288/8 + 1 = 36 + 1 = 37 | Haan, 37va term |
| 250 | 237/8 + 1 = 29.625 + 1 = 30.625 | Nahi, poora number nahi |
| −3 | (−16)/8 + 1 = −2 + 1 = −1 | Nahi, n negative hai |

**Jaanch:** a₃₇ = 13 + 36 × 8 = 301 ✅. 250 ke liye a₃₀ = 13 + 29 × 8 = 245 aur a₃₁ = 253: 250 in dono ke beech ✅. −3 ke liye AP ko peeche badhao: 13 se pehle 13 − 8 = 5, aur usse pehle 5 − 8 = −3. Yaani −3 pehle term se **do qadam peeche** baithta hai, list shuru hone se pehle ✅.

Dhyan do: n = −1 ka matlab ye hai ki AP ko peeche badhaoge to −3 aata hai, par **hamari AP 13 se shuru hoti hai**, isliye −3 uska term nahi.

---

## Part D: a ya d nikalna (ek unknown)

Jab ek term, n aur ek aur cheez diye hon, to formula se bacha hua unknown nikalta hai.

### Example 6: a nikalo

AP ka d = −3 hai aur a₁₄ = 8. a₁₄ = a + 13d = a + 13(−3) = a − 39 = 8, to **a = 47**.

**Jaanch:** 47 se shuru karke 13 baar −3: a₁₄ = 47 − 39 = 8 ✅.

### Example 7: d nikalo

AP ka a = −7 hai aur a₁₂ = 48. a₁₂ = a + 11d ⇒ −7 + 11d = 48 ⇒ 11d = 55 ⇒ **d = 5**.

**Jaanch:** a₁₂ = −7 + 11 × 5 = 48 ✅. Pehle terms: −7, −2, 3, 8, ...: gap 5 baar-baar ✅.

---

## Part E: Aakhir se term aur terms ki ginti

### Aakhir se term (do tareeke)

Maan lo finite AP ka aakhri term l hai. Aakhir se 1st term l hai, 2nd term l − d hai (ek qadam peeche), 3rd term l − 2d. Isliye **aakhir se n-va term = l − (n − 1)d.**

Doosra tareeka: AP ko ulta likh do. Naye pehle term l hai aur naya gap −d hai. Ab seedha formula lagao: l + (n − 1)(−d). Wahi.

### Example 8: AP 18, 25, 32, ..., 291: aakhir se 12va term

a = 18, d = 7, l = 291.

**Tareeka 1:** l − 11d = 291 − 77 = **214**.

**Tareeka 2 (ulti AP):** 291, 284, 277, ...: a = 291, d = −7. a₁₂ = 291 + 11(−7) = 291 − 77 = 214.

**Jaanch (shuru se position):** pehle total terms: n = (291 − 18)/7 + 1 = 39 + 1 = 40. Aakhir se 12va term shuru se 40 − 12 + 1 = 29va hai. a₂₉ = 18 + 28 × 7 = 18 + 196 = 214 ✅.

```
shuru se  a₁    a₂    a₃    ...   a₂₉   ...   a₃₈   a₃₉   a₄₀
value     18    25    32    ...   214   ...   277   284   291
end se    40th  39th  38th  ...   12th  ...   3rd   2nd   1st
```

> **Figure 2.3** – Ek hi AP ko do taraf se ginna. Jo term shuru se 29va hai, wahi aakhir se 12va hai: 29 + 12 = 40 + 1.

### Terms ki ginti: n = (l − a)/d + 1

aₙ = l se n = (l − a)/d + 1. Dhyan rahe: (l − a)/d sirf **qadam** ginta hai, terms ek zyada hote hain, isliye **+ 1**.

### Example 9: daud ke markers (4, 5.5, 7, ..., 41.5)

Ek lambi daud ke raaste mein pehla marker 4 km par hai aur har agla 1.5 km aage. Aakhri marker 41.5 km par hai. Kitne markers hain?

a = 4, d = 1.5, l = 41.5. n = (41.5 − 4)/1.5 + 1 = 37.5/1.5 + 1 = 25 + 1 = **26 markers**.

**Jaanch:** a₂₆ = 4 + 25 × 1.5 = 4 + 37.5 = 41.5 ✅.

**Story check:** n = 26 poora positive number hai, to 41.5 sach mein ek marker ki jagah hai. (Agar aakhri marker 42 km ka hota, to (42 − 4)/1.5 = 25.33 aata, aur wo marker is AP mein hota hi nahi.)

### Example 10: 100 aur 500 ke beech 13 ke multiples kitne?

Pehle aur aakhri multiple division se dhundho. 100 ÷ 13 = 7 baaki 9, to 13 × 7 = 91 jo 100 se chhota hai. Agla multiple 13 × 8 = **104** (pehla). 500 ÷ 13 = 38 baaki 6, to 13 × 38 = **494** (aakhri). Ye AP hai: 104, 117, ..., 494, d = 13.

n = (494 − 104)/13 + 1 = 390/13 + 1 = 30 + 1 = **31 multiples**.

**Jaanch (doosra tareeka):** multiples 13 × 8 se 13 × 38 hain, yaani 8 se 38 tak ginti: 38 − 8 + 1 = 31 ✅. (Seedha shortcut: 500 ÷ 13 ka poora hissa 38, minus 100 ÷ 13 ka 7 = 31, kyunki 100 aur 500 khud 13 ke multiple nahi hain.)

---

## Part F: aₙ ek linear expression hai

aₙ = a + (n − 1)d = a + nd − d = **dn + (a − d).** Yaani aₙ = (d) × n + (a − d): n ki pehli power, aur ek fixed number. Ye Chapter 2 ka degree 1 polynomial hai, aur Class 9 ki linear equation jaisa: n badhta hai to aₙ **barabar qadam** se badhta hai.

### Example 11: Natasha ki AP ka formula

6, 10, 14, ... mein d = 4, a − d = 6 − 4 = 2. To **aₙ = 4n + 2**.

**Jaanch:** n = 25 par 4 × 25 + 2 = 102, jo Example 1 ne diya tha ✅. n = 1 par 4 + 2 = 6 = a₁ ✅.

Ulta bhi chalta hai: agar aₙ = 5 − 2n diya ho, to a₁ = 3, a₂ = 1, a₃ = −1, ... AP 3, 1, −1, ... hai, d = −2 (n ke aage wala number) ✅.

```
aₙ
 30 +                               *
 26 +                          *
 22 +                     *
 18 +                *
 14 +           *
 10 +      *
  6 +  *
    +----------------------------------> n
       1    2    3    4    5    6    7
```

> **Figure 2.4** – aₙ = 4n + 2 ke points (n, aₙ) ek seedhi line par hain: har step par 4 oopar. Yahi Class 9 ki seedhi line wali baat hai. Dhyan rahe ki n sirf poore numbers hote hain, isliye graph ke bas ye alag-alag points hote hain, beech ka hissa nahi.

---

## Aam galtiyan (bachke rehna)

### Galti 1: aₙ = a + nd likh dena (ek qadam zyada)

AP 20, 23, 26, 29, 32, ... mein a₄ chahiye. Galat tareeka: 20 + 4 × 3 = 32. Par list mein dekho: a₄ = **29**. 32 to a₅ hai. Sahi: a₄ = 20 + (4 − 1) × 3 = 29. Aisi galti ka asar: n = 1 par bhi galat aayega, kyunki a + 1 × d = 23 ≠ 20 = a₁. **Jaanch ka seedha niyam:** n = 1 daalo, a₁ = a milna chahiye.

### Galti 2: terms ki ginti l − a samajhna

AP 22, 25, 28, ..., 46. Galat: l − a = 46 − 22 = 24 terms. Do galtiyan hain: d se divide nahi kiya, aur +1 bhool gaye. Sahi: (46 − 22)/3 + 1 = 8 + 1 = **9 terms**. List likhkar dekho: 22, 25, 28, 31, 34, 37, 40, 43, 46: nau terms ✅. 24 sirf pehle aur aakhri term ka **farak** hai, terms ki ginti nahi.

---

## Quick Recap

- **aₙ = a + (n − 1)d**: d ko n − 1 baar jodna, kyunki n terms ke beech n − 1 qadam hote hain.
- Position n: **n = (aₙ − a)/d + 1**. n poora aur positive ho tabhi wo number AP ka term hai; fractional ya negative n ka matlab: term nahi.
- Aakhir se n-va term = **l − (n − 1)d**, ya AP ko ulta likho (d ki jagah −d).
- Finite AP mein terms: **n = (l − a)/d + 1**. Range ke multiples: pehla aur aakhri multiple division se, phir yahi formula.
- aₙ = dn + (a − d): n mein linear. (n, aₙ) ke points ek seedhi line par.
- Har jawab ki Jaanch: n = 1 par a milna chahiye, ya doosra tareeka.

---

## Practice Questions

1. Find the 31st term of the AP 14, 25, 36, ... and check it by first finding the 11th term.

2. Find the 40th term of the AP 1/3, 5/6, 4/3, ...

3. In the AP 62, 54, 46, ..., which term is −130? Is −65 a term of this AP?

4. For the AP 3.4, 5.8, 8.2, ..., decide whether 51.4 and 52.6 are terms of the AP. If they are, give the position.

5. In an AP the common difference is −5 and the 22nd term is −60. Find the first term.

6. The first term of an AP is −18 and the 31st term is 87. Find the common difference and write the first four terms.

7. The finite AP 21, 35, 49, ..., 623 is given. Find its 15th term from the end by two methods, and check it using its position from the start.

8. How many terms are there in the AP −16.5, −12, −7.5, ..., 55.5?

9. How many multiples of 17 lie between 200 and 900? Give the first and last of them.

10. A gardener plants saplings along a straight path. The first sapling is 9.5 m from the gate and each next one is 2.8 m farther. (a) How far is the 21st sapling from the gate? (b) Can a sapling stand exactly 100 m from the gate? (c) The path is 120 m long. How many saplings can be planted along it?

11. The terms of an AP are given by the formula aₙ = 71 − 11n. Write the first four terms and say which is the first negative term.

12. A student found the 18th term of 59, 65, 71, ... as 59 + 18 × 6 = 167. Find the mistake and give the correct term with a check.

13. For the AP −32, −25.5, −19, ..., find the first positive term. Show that the term before it is negative.

14. State True or False, with a reason:
    (a) The nth term of an AP is a + nd.
    (b) The AP 5, 10, 15, ..., 50 has 10 terms.
    (c) The number of terms of a finite AP is (l − a)/d.
    (d) The points (n, aₙ) of an AP lie on a straight line.
    (e) The 20th term from the end of 3, 6, 9, ..., 300 is 300 − 20 × 3.

### Answers

1. a = 14, d = 25 − 14 = 11. a₃₁ = 14 + 30 × 11 = 14 + 330 = **344**.
   Jaanch: a₁₁ = 14 + 10 × 11 = 124. Phir a₃₁ = a₁₁ + 20 × 11 = 124 + 220 = 344 ✅.

2. a = 1/3, d = 5/6 − 1/3 = 5/6 − 2/6 = 1/2. a₄₀ = 1/3 + 39 × 1/2 = 2/6 + 117/6 = **119/6** (lagbhag 19.83).
   Jaanch: a₂₀ = 1/3 + 19/2 = 2/6 + 57/6 = 59/6. Phir a₄₀ = 59/6 + 20 × 1/2 = 59/6 + 60/6 = 119/6 ✅.

3. a = 62, d = 54 − 62 = −8. n = (−130 − 62)/(−8) + 1 = 24 + 1 = **25**. −130 AP ka 25va term hai.
   Jaanch: a₂₅ = 62 + 24(−8) = 62 − 192 = −130 ✅.
   −65: n = (−65 − 62)/(−8) + 1 = 15.875 + 1 = 16.875, poora number nahi, to **−65 term nahi hai**. Jaanch: a₁₆ = −58 aur a₁₇ = −66, −65 in dono ke beech ✅.

4. a = 3.4, d = 5.8 − 3.4 = 2.4. 51.4: n = (51.4 − 3.4)/2.4 + 1 = 48/2.4 + 1 = 20 + 1 = **21**, to haan, **21va term**. Jaanch: 3.4 + 20 × 2.4 = 51.4 ✅.
   52.6: n = (52.6 − 3.4)/2.4 + 1 = 49.2/2.4 + 1 = 20.5 + 1 = 21.5, to **term nahi**. Jaanch: a₂₁ = 51.4 aur a₂₂ = 53.8, 52.6 beech mein ✅.

5. a₂₂ = a + 21d = a + 21(−5) = a − 105 = −60, to **a = 45**.
   Jaanch: 45 − 105 = −60 ✅.

6. a₃₁ = a + 30d: −18 + 30d = 87, 30d = 105, **d = 3.5**. Pehle chaar terms: **−18, −14.5, −11, −7.5**.
   Jaanch: a₃₁ = −18 + 30 × 3.5 = −18 + 105 = 87 ✅.

7. a = 21, d = 14, l = 623. Tareeka 1: l − 14d = 623 − 14 × 14 = 623 − 196 = **427**. Tareeka 2: ulti AP 623, 609, ... d = −14, a₁₅ = 623 + 14(−14) = 427.
   Jaanch: n = (623 − 21)/14 + 1 = 43 + 1 = 44. Shuru se position 44 − 15 + 1 = 30. a₃₀ = 21 + 29 × 14 = 21 + 406 = 427 ✅.

8. a = −16.5, d = −12 − (−16.5) = 4.5, l = 55.5. n = (55.5 + 16.5)/4.5 + 1 = 72/4.5 + 1 = 16 + 1 = **17 terms**.
   Jaanch: a₁₇ = −16.5 + 16 × 4.5 = −16.5 + 72 = 55.5 ✅.

9. 200 ÷ 17 = 11 baaki 13, to 17 × 11 = 187 < 200. Pehla multiple 17 × 12 = **204**. 900 ÷ 17 = 52 baaki 16, to aakhri multiple 17 × 52 = **884**. n = (884 − 204)/17 + 1 = 680/17 + 1 = 40 + 1 = **41**.
   Jaanch: multiples 17 × 12 se 17 × 52 tak: 52 − 12 + 1 = 41 ✅.

10. a = 9.5, d = 2.8. (a) a₂₁ = 9.5 + 20 × 2.8 = 9.5 + 56 = **65.5 m**. Jaanch: a₁₁ = 9.5 + 28 = 37.5, a₂₁ = 37.5 + 28 = 65.5 ✅.
    (b) n = (100 − 9.5)/2.8 + 1 = 32.32 + 1 = 33.32, poora number nahi, to **100 m par koi sapling nahi**. Story check: a₃₃ = 99.1 aur a₃₄ = 101.9; 100 beech mein.
    (c) Aakhri sapling 120 m se zyada door nahi ho sakta. aₙ ≤ 120 ⇒ (n − 1) × 2.8 ≤ 110.5 ⇒ n − 1 ≤ 39.46, to n − 1 = 39 aur **n = 40 saplings**. Story check: a₄₀ = 9.5 + 39 × 2.8 = 118.7 m (path ke andar), a₄₁ = 121.5 m (bahar). n poora hai, 40 hi sahi.

11. a₁ = 71 − 11 = **60**, a₂ = 49, a₃ = 38, a₄ = 27. d = −11 (n ke aage ka number) aur a₆ = 71 − 66 = 5, a₇ = 71 − 77 = −6. **Pehla negative term a₇ = −6** hai, usse pehla a₆ = 5 positive hai.
    Jaanch: AP 60, 49, 38, ... mein 60 + 6(−11) = −6 ✅.

12. Galti: a + nd likha, (n − 1)d nahi. Sahi: a₁₈ = 59 + 17 × 6 = 59 + 102 = **161**. Jaanch: n = 1 par galat formula 59 + 6 = 65 deta hai, jo a₂ hai, a₁ nahi. Sahi formula 59 + 0 = 59 ✅. Aur 167 = 161 + 6 = a₁₉.

13. a = −32, d = 6.5. aₙ > 0 ke liye −32 + (n − 1) × 6.5 > 0 ⇒ n − 1 > 4.92..., to n − 1 = 5, **n = 6**. a₆ = −32 + 32.5 = **0.5**. Pehle ka term a₅ = −32 + 26 = **−6**, negative.
    Jaanch: a₆ = a₅ + d = −6 + 6.5 = 0.5 ✅.

14. (a) **False**: a + nd ek qadam zyada hai, sahi (n − 1)d hai. n = 1 par a₁ = a + d ban jaata, jo galat hai.
    (b) **True** ✅: (50 − 5)/5 + 1 = 10.
    (c) **False**: (l − a)/d sirf qadam hain, terms ek zyada hote hain, (l − a)/d + 1.
    (d) **True** ✅: aₙ = dn + (a − d) ka graph seedhi line par alag-alag points hain.
    (e) **False**: aakhir se 20va term l − 19d = 300 − 19 × 3 = 243 hai. Jaanch: 300 − 20 × 3 = 240 to aakhir se 21va term hai.

---

Ab tum kisi bhi AP ka koi bhi term seedha nikal sakte ho, aur ye bhi bata sakte ho ki koi number us AP ka term hai ya nahi. Ek baat zaroor yaad rakhna: term ki position hamesha poora, positive number hoti hai.

**Aage kya?** Topic 3 mein ulta sawal aayega: kabhi puri AP nahi, sirf do terms diye honge, aur tumhe usse a aur d dhundhkar poori AP banani hai.
