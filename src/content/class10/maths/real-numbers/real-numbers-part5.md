# Chapter: Real Numbers (Part 5)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [real-numbers-part4.md](real-numbers-part4.md) se aage chalti hai** (wahan Topic 4 mein irrational numbers ke proof aaye: √p aur 3 + 2√7 jaise numbers kabhi rational nahi hote). Chapter ki shuruaat: [real-numbers.md](real-numbers.md). Class 9 ka decimals wala chapter: [number-systems-part2.md](../../../class9/maths/number-systems/number-systems-part2.md).
> **Topics covered in this file:**
> 5. Decimal Expansion Ka Raaz: Terminating Ya Recurring, Kyun?

---

# Topic 5: Decimal Expansion Ka Raaz: Terminating Ya Recurring, Kyun?

Topic 4 ke aakhir mein humne dekha ki irrational number ka decimal **kabhi nahi rukta aur kabhi repeat nahi hota**. Ab sikke ka doosra pehlu: **rational number ka decimal kaisa hota hai, aur ye pehle se kaise pata chal jata hai?** Class 9 mein tumne ek rule seekha tha ("denominator mein sirf 2 aur 5 ho to decimal rukta hai"), par us waqt hum ne use maan liya tha. Is topic mein hum us rule ko **saabit** karenge, aur dekhenge ki aur kya kya chhupa hai: decimal ke kitne digit aate hain, aur repeat hone wale block ki lambai kahan se aati hai. Topic 2 ka prime fingerprint (Fundamental Theorem of Arithmetic) phir kaam aayega.

---

## Himani ka tarazu

Himani ke Papa ki kirane ki dukaan hai. Dukaan mein ek naya digital tarazu aaya hai jiski screen par decimal ke baad sirf 5 digit dikhte hain. Aaj Himani ko bade bori ke maal ko barabar thailiyon mein baantna hai, aur wo har baar "kul kg ÷ thailiyon ki ginti" tarazu se nikalwa rahi hai.

- **87 kg chawal, 16 barabar thailiyon mein.** Tarazu ne dikhaya **5.4375** kg, aur uske baad kuch nahi. Himani ne 5.4375 × 16 kiya: poore 87. Sab theek.
- **40 kg dal, 7 barabar thailiyon mein.** Tarazu ne dikhaya **5.71428**, aur screen bhar gayi. Himani ne haath se division kiya:

```
40 ÷ 7 = 5, bacha 5
50 ÷ 7 = 7, bacha 1
10 ÷ 7 = 1, bacha 3
30 ÷ 7 = 4, bacha 2
20 ÷ 7 = 2, bacha 6
60 ÷ 7 = 8, bacha 4
40 ÷ 7 = 5, bacha 5   <- wahi 5 jo pehle bacha tha
```

Dobara 5 bacha, to ab 7, 1, 4, 2, 8, 5 phir se aayenge: **5.714285 714285 714285...** Ye kabhi nahi rukega.

Himani ne Papa se poocha, "Papa, ek division kuch digit ke baad ruk gaya, doosra kabhi nahi rukta. Kya main bina divide kiye pehle hi bata sakti hoon ki kaun sa ruka rahega?" Papa ne muskura kar kaha, "Haan, bas bhaag dene wale number ko dekho." Wo "dekhna" kya hai, aur wo kaam **kyun** karta hai, yahi aaj ka raaz hai.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Theorem** | Ek aisa result jise sirf maana nahi gaya, poore tark (proof) se saabit kiya gaya hai | Part B ka Decimal Expansion Theorem |
| **Tabhi aur sirf tabhi** (⇔) | Do baatein ek saath sach ya ek saath jhooth: "A sach hai tabhi aur sirf tabhi jab B sach hai" ka matlab "A se B milta hai, aur B se A milta hai" | Fraction ruke tabhi aur sirf tabhi jab denominator 2ᵐ5ⁿ ho |
| **2ᵐ5ⁿ roop** | Aisa number jisme sirf prime 2 aur prime 5 aate hain (m aur n whole numbers, 0 bhi chalega) | 200 = 2³ × 5², 625 = 2⁰ × 5⁴ |
| **Pehle ka hissa** | Mixed recurring decimal mein decimal point ke baad wo digits jo repeat hone se pehle sirf ek baar aate hain | 0.183̄ mein 18 |

---

## Part A: Class 9 ka rule, aur ek bada "kyun?"

Class 9 se 5 line mein yaad karo:

1. Fraction p/q ko pehle **lowest form** mein likho (p aur q ka common factor sirf 1).
2. q ko prime factors mein todo.
3. Agar q mein **sirf 2 aur 5** hain, to decimal **terminating** hai (jaise 7/8 = 0.875).
4. Agar koi aur prime bhi hai (3, 7, 11, ...), to decimal **non-terminating recurring** hai (jaise 1/7).
5. Isiliye 9/15 pehle 3/5 banta hai, aur wo terminating hai.

Class 9 ka tark sirf ek halka sa ishara tha: "10 = 2 × 5, isliye 10 ki power mein sirf 2 aur 5 hote hain." Aaj hum **do sawaal** poore roop se hal karenge: (i) ye rule hamesha sach kyun hai, aur (ii) decimal ke kitne digit aate hain aur repeat hone wala block kahan se aata hai. Phir Part G mein ye bhi dekhenge ki irrational decimal in sab se kaise alag hai.

---

## Part B: Decimal Expansion Theorem aur uska proof

> **Theorem:** Maan lo p/q ek rational number hai, jahan p aur q ka common factor sirf 1 hai (lowest form) aur q > 0. To p/q ka decimal **terminating hai tabhi aur sirf tabhi jab q = 2ᵐ5ⁿ** (m, n whole numbers).

"Tabhi aur sirf tabhi" ka matlab hai ki hume **do** kaam saabit karne hain.

### Kaam 1: Agar q = 2ᵐ5ⁿ ho, to decimal ruk jaata hai

**Idea:** denominator ko 10 ki power bana do. Bada wala exponent lo, k = m aur n mein se bada. Jo prime kam baar aaya hai, usse upar-neeche guna karo, taaki dono 2 aur 5 ki powers k ho jayein:

p/q = p/(2ᵐ5ⁿ) = [p × 2ᵏ⁻ᵐ × 5ᵏ⁻ⁿ] / (2ᵏ × 5ᵏ) = N / 10ᵏ.

N ek poora number hai, aur N/10ᵏ ka matlab hai "N ko k decimal places tak likho". To decimal ruk gaya.

### Example 1: 23/200

200 = 2³ × 5², yaani m = 3, n = 2, k = 3. 5 ek baar kam hai, to upar-neeche 5 se guna:

```
  23/200  =  23/(2 × 2 × 2 × 5 × 5)
            2 teen baar, 5 sirf do baar: ek 5 kam hai
                          ↓  upar-neeche ek 5 se guna
  23 × 5          115
  ------------ =  ------  =  0.115
  200 × 5         1000
```

> **Figure 5.1** – 23/200 ko 10 ki power wale denominator mein badalna: denominator 2³ × 5² mein ek 5 kam tha, wo jod diya.

**Jaanch:** 0.115 × 200 = 23 ✅

### Kaam 2: Agar decimal ruk jaaye, to q = 2ᵐ5ⁿ hona hi padega

Maan lo p/q (lowest form) ka decimal k places par ruk jaata hai. Tab wo N/10ᵏ ke roop mein likha ja sakta hai (N poora number). Yaani

p/q = N/(2ᵏ × 5ᵏ), cross multiply karo: **p × 2ᵏ × 5ᵏ = N × q.**

Ab dekho: q is number p × 2ᵏ × 5ᵏ ko poora bhaag karta hai. Fundamental Theorem (ek hi prime fingerprint) kehta hai ki q ka har prime factor p × 2ᵏ × 5ᵏ ke fingerprint mein aana chahiye. Par p aur q ka **koi common prime nahi** hai (lowest form). To q ka har prime factor **2 ya 5** hi ho sakta hai. Isliye **q = 2ᵐ5ⁿ** kisi m, n ke liye. Saabit.

### Example 2: lowest form kyun zaroori hai

39/52 mein 52 = 2² × 13 hai, jisme 13 bhi hai. Phir bhi 39/52 ka decimal ruk jaata hai! Kyun? Kyunki 39 aur 52 ka common factor 13 hai, aur Kaam 2 ka tark yahin tootta hai: q ke prime 13 ko "p mein se" aane ka mauka mil jaata hai. Lowest form karo: 39 ÷ 13 = 3, 52 ÷ 13 = 4, to 39/52 = **3/4** = 0.75, aur 4 = 2², sirf 2.

**Jaanch:** 39 ÷ 52 = 0.75 ✅ aur 0.75 × 4 = 3 ✅

### Example 3: Kaam 2 ka tark ek asli fraction par

**Sawaal:** Dikhao ki 11/60 ka decimal kabhi nahi rukta.

**Hal:** 11 aur 60 = 2² × 3 × 5 ka common factor nahi, to fraction lowest form mein hai. Maan lo ye k places par ruk jaata hai: 11/60 = N/10ᵏ. To 11 × 10ᵏ = 60 × N, yaani 11 × 2ᵏ × 5ᵏ = 2² × 3 × 5 × N. Ab 3 dayein taraf ke fingerprint mein hai, to **baayein taraf 11 × 2ᵏ × 5ᵏ ke fingerprint mein bhi 3 hona chahiye**. Par wahan sirf 11, 2 aur 5 hain. **Contradiction.** To 11/60 nahi rukta.

**Jaanch:** 11 ÷ 60 = 0.18333... (3 baar baar aata hai, kabhi nahi rukta) ✅

---

## Part C: Decimal ke kitne places? Bada wala exponent

Kaam 1 mein humne k = m aur n mein se **bada** liya tha. Ye isliye ki denominator 2ᵏ × 5ᵏ mein dono primes ki power k honi chahiye, aur jo prime pehle se bade exponent par hai, uska exponent ghata nahi sakte. Maano, lowest form mein q = 2ᵐ5ⁿ ho. To:

> **Decimal places ki ginti = m aur n mein se bada number.**

### Example 4: 91/80

80 = 2⁴ × 5¹, m = 4, n = 1, to k = 4. Upar-neeche 5³ = 125 se guna: 91 × 125 = 11375, denominator 10000. **91/80 = 11375/10000 = 1.1375.** 4 places.

**Jaanch:** 1.1375 × 80 = 91 ✅

### Example 5: 17/250

250 = 2 × 5³, m = 1, n = 3, to k = 3. Upar-neeche 2² = 4 se guna: 17 × 4 = 68, denominator 1000. **17/250 = 68/1000 = 0.068.** 3 places (aage ka 0 bhi ginti mein aata hai).

**Jaanch:** 0.068 × 250 = 17 ✅

```
23/200     2: ###-   5: ##--    places = 3
91/80      2: ####   5: #---    places = 4
17/250     2: #---   5: ###-    places = 3
7/2500     2: ##--   5: ####    places = 4
```

> **Figure 5.2** – Har # ek prime ka ek power hai (2 ki alag line, 5 ki alag line), - ka matlab wo power nahi hai. Places har fraction mein un do lambai mein se **lambi wali** line ke barabar hain, dono ka jod nahi.

**"Exactly k" kyun, k se kam kyun nahi?** Kaam 1 mein N = p × 2ᵏ⁻ᵐ × 5ᵏ⁻ⁿ hai. Agar k > 0 hai, to m aur n mein se kam se kam ek k ke barabar hai. Agar m = k hai (aur n < k), to N = p × 5ᵏ⁻ⁿ: yahan p **odd** hai (kyunki q mein 2 hai aur p, q ka common factor nahi), aur 5ᵏ⁻ⁿ odd hai, to N odd hai, yaani uska aakhri digit 0 nahi. Isliye N/10ᵏ ka k-th digit 0 nahi, to places k se kam nahi ho sakte. Agar n = k hai (aur m < k), to N = p × 2ᵏ⁻ᵐ aur p mein 5 nahi hai, to N 5 se bhaag nahi hota, aakhri digit 0 nahi. Agar m = n = k, to N = p aur p, 10 se coprime hai. Teeno mein k hi places milte hain.

---

## Part D: Jab denominator mein koi aur prime ho: recurring decimal

Ab Kaam 2 ko ulta padho: agar lowest form mein q mein 2 aur 5 ke alawa koi prime hai (jaise 13), to p/q **kabhi N/10ᵏ ke roop mein nahi likha ja sakta**. Isliye uska decimal nahi rukta. Par Class 9 (Part B) mein dekha tha ki division mein remainders q se chhote hote hain, to koi remainder zaroor repeat hota hai. Chalo ek poora example dekhte hain.

### Example 6: 5/13 ka long division

```
Kadam Bhaag         Digit   Bacha
----- -----         -----   -----
1     50 ÷ 13       3       11
2     110 ÷ 13      8       6
3     60 ÷ 13       4       8
4     80 ÷ 13       6       2
5     20 ÷ 13       1       7
6     70 ÷ 13       5       5  <- shuru wala 5 wapas
```

> **Figure 5.3** – 5/13 ka long division (5 ko 13 se bhaag karne par 0 aata hai, bacha 5, aur phir 0 laga kar aage ke kadam). Kadam 6 ke baad remainder phir 5 hai, to kadam 1 se aage sab dobara aayega.

Remainders ki chain: **5 → 11 → 6 → 8 → 2 → 7 → 5 (wapas).** 5/13 = **0.384615 384615 ...** Block 384615, yaani **6 digits**.

**Jaanch:** 384615 × 13 = 4999995, aur 4999995 + 5 = 5000000. Yaani 5/13 = 384615/999999 ✅

### Example 7: 7/11

70 ÷ 11 = 6, bacha 4. 40 ÷ 11 = 3, bacha 7. Remainder 7 shuru wala hai, to ab 6, 3 dobara. **7/11 = 0.636363...** Block 63, yaani **2 digits**.

**Jaanch:** 63 × 11 = 693 = 7 × 99, to 7/11 = 63/99 ✅

### Example 8: 8/37

80 ÷ 37 = 2, bacha 6. 60 ÷ 37 = 1, bacha 23. 230 ÷ 37 = 6, bacha 8. Remainder 8 dobara aaya. **8/37 = 0.216216...**, block 216, yaani **3 digits**.

**Jaanch:** 216 = 27 × 8 aur 999 = 27 × 37, to 216/999 = 8/37 ✅

---

## Part E: Block ki lambai kahan se aati hai?

Class 9 ne bataya tha ki block zyada se zyada q − 1 digit ka hoga. Par block ki **asli** lambai alag-alag q ke liye alag hoti hai. Ye hum 1/q ke liye lambai dekhte hain (long division se, jaise Example 6 mein kiya):

| Denominator q | 1/q ka block | Block ki lambai | q − 1 |
|---|---|---|---|
| 3 | 3 | 1 | 2 |
| 11 | 09 | 2 | 10 |
| 37 | 027 | 3 | 36 |
| 7 | 142857 | 6 | 6 |
| 13 | 076923 | 6 | 12 |
| 17 | 0588235294117647 | 16 | 16 |

Ye lambaiyan ek ajeeb pattern dikhati hain: kabhi q − 1 (7 aur 17), kabhi use kam (13 mein 6 aur 12). Aur 5/13 aur 8/37 mein bhi block ki lambai wahi rahi jo 1/13 aur 1/37 ki hai (6 aur 3). **Kyun?** Is "kyun" ka ek suljha hua jawab humare haath mein hai, jo Class 9 ke "x maano, multiply karo, ghatao" trick se milta hai.

**Ek recurring block, 9, 99, 999 se banta hai.** Maan lo koi fraction **seedha** (decimal ke turant baad se) repeat hota hai, aur block L digit ka hai (jaise B). Class 9 ki trick kehti hai:

p/q = B/(10ᴸ − 1), yaani B/9, B/99, B/999, ...

Ye 10ᴸ − 1 = 99...9 (L nine) hota hai. Ab Part B ke Kaam 2 wala tark yahan phir chalta hai: p × (10ᴸ − 1) = B × q, p aur q ka common factor nahi, to **q, 10ᴸ − 1 ko poora bhaag karta hai.** Aur ulta bhi: agar q, 99...9 (L nine) ko bhaag kare, to 1/q = (99...9 ÷ q) / 99...9 ek L-digit wala repeating block banata hai. To **1/q ke block ki lambai wo sabse chhota L hai jahan q, L nine wale number ko bhaag karta ho.**

Ab in numbers ko Topic 2 wale fingerprint se todte hain:

| L | 10ᴸ − 1 | Prime fingerprint | Naye primes jo pehli baar aaye |
|---|---|---|---|
| 1 | 9 | 3² | 3 |
| 2 | 99 | 3² × 11 | 11 |
| 3 | 999 | 3³ × 37 | 37 |
| 4 | 9999 | 3² × 11 × 101 | 101 |
| 5 | 99999 | 3² × 41 × 271 | 41, 271 |
| 6 | 999999 | 3³ × 7 × 11 × 13 × 37 | 7, 13 |

Dekho! **3 pehli baar L = 1 par aaya (block 1), 11 L = 2 par (block 2), 37 L = 3 par (block 3), 7 aur 13 L = 6 par (block 6)**. Bilkul wahi lambaiyan jo upar ki table mein milin. Aur 101 L = 4 par aayega, 41 L = 5 par. 17 ke liye L = 16 tak jaana padta hai, kyunki 17 pehli baar 16 nine wale number (10¹⁶ − 1) mein aata hai.

Dhyan do: ye tark kisi bhi p ke liye chalta hai (p/q lowest form mein ho), isliye 5/13 aur 8/37 ke block ki lambai bhi 6 aur 3 hi rahi. Ye bhi dekha gaya hai ki prime q ke liye (jo 2 aur 5 nahi) aisa L hamesha milta hai aur L, q − 1 ko bhaag karta hai (6 ko 12, 3 ko 36, 2 ko 10, 16 ko 16), par ye aage ki class mein saabit hota hai, yahan sirf **dekh kar** note kar lo.

### Example 9: Block ki lambai batao bina long division

**Sawaal:** 41 ke baare mein dikhao ki 7/41 ka block 5 digit ka hai, aur block nikalo.

**Hal:** Table mein L = 5 par 41 pehli baar aata hai: 99999 = 41 × 2439. Isliye 7/41 = 7 × 2439 / 99999 = 17073/99999. Yaani block **17073** (5 digit), **7/41 = 0.17073 17073...**

**Jaanch:** 17073 × 41 = 699993 aur 7 × 99999 = 699993 ✅

---

## Part F: Mixed recurring aur pehle ka hissa

Ab ek aur sawaal: 3/14 jaise fraction mein 14 = 2 × 7, yaani 2 bhi hai aur 7 bhi. Iska decimal kaisa hoga?

### Example 10: 3/14

30 ÷ 14 = 2, bacha 2. 20 ÷ 14 = 1, bacha 6. 60 ÷ 14 = 4, bacha 4. 40 ÷ 14 = 2, bacha 12. 120 ÷ 14 = 8, bacha 8. 80 ÷ 14 = 5, bacha 10. 100 ÷ 14 = 7, bacha 2. Remainder 2 phir aaya (jo pehle kadam ke baad tha). **3/14 = 0.2 142857 142857...** Pehle ek digit (2) ek baar, phir 142857 repeat.

**Jaanch:** 0.2142857... × 14 = 2.99999... = 3 (Class 9 wala 0.9̄ = 1 wala tark) ✅

### Example 11: 11/60 aur uska ulta safar

60 = 2² × 3 × 5. 110 ÷ 60 = 1, bacha 50. 500 ÷ 60 = 8, bacha 20. 200 ÷ 60 = 3, bacha 20. Remainder 20 repeat. **11/60 = 0.18 3 3 3...** = 0.183̄: **pehle ka hissa 18**, repeat 3.

Ab ulta: x = 0.18333... (Class 9 ka mixed recurring trick). 100x = 18.333..., 1000x = 183.333..., ghatao: 900x = 165, x = 165/900 = 11/60. Dekho, 900 = 2² × 3² × 5²: 2 aur 5 ki power 2 hai, wahi 11/60 ke 2² aur 5 ke bade exponent 2 ke barabar.

**Jaanch:** 165 ÷ 15 = 11, 900 ÷ 15 = 60 ✅

**Pattern:** Maan lo q = 2ᵐ5ⁿ × r, jahan r mein 2 ya 5 nahi hai, aur k = m, n mein se bada. To:

- **pehle ka hissa k digit ka** (ek baar aane wale digits),
- **block ki lambai sirf r se tay hoti hai** (Part E ke tark se).

Ye table in examples par dekho:

| Fraction | q ka roop | k | pehle ka hissa | block |
|---|---|---|---|---|
| 3/14 | 2 × 7 | 1 | 2 | 142857 |
| 11/60 | 2² × 5 × 3 | 2 | 18 | 3 |
| 19/30 | 2 × 5 × 3 | 1 | 6 | 3 |
| 49/110 | 2 × 5 × 11 | 1 | 4 | 45 |

Reason (sketch): 10ᵏ se guna karne par p/q ban jaata hai p × 2ᵏ⁻ᵐ × 5ᵏ⁻ⁿ / r. Yahan sirf r bacha (2 aur 5 hat gaye), aur jis fraction ke denominator mein 2 ya 5 nahi hota wo seedha repeat hota hai (jaise 1/7). Isliye k digit baad repeat shuru. Ye har example mein bilkul sahi baithta hai; poora proof aage ki class ka kaam hai.

---

## Part G: Irrational decimal in sab se alag

Ab teesra khilaadi. Class 9 mein 0.1010010001... jaisa decimal dekha tha jo kabhi nahi rukta aur kabhi repeat nahi hota. Ek aur example: **0.707007000700007...** (7, phir 0 ek baar 7, phir 0 do baar 7, phir 0 teen baar 7, aur har baar ek zero zyada).

**Repeat kyun nahi hota?** Agar koi L digit ka block hamesha ke liye repeat hota, to koi bhi zeros ki lambi line 2L se zyada lambi nahi ho sakti. Par yahan zeros ki line 1, 2, 3, 4, ... badhti jaati hai: koi bhi L chuno, kabhi na kabhi L se zyada zeros aa jayenge. Isliye koi block repeat nahi karta, aur ye decimal rukta bhi nahi. Class 9 ka niyam kehta hai ki aisa decimal rational ho hi nahi sakta (rational ka decimal ya to rukta hai ya repeat hota hai). To ye **irrational** hai.

**Jaanch:** Agar ye 70/99 = 0.70707070... hota, to 5th digit 7 hota. Par yahan 5th digit 0 hai: 0.70700 aur 0.70707 alag hain ✅

> **Saavdhan:** Kuch digit ka pattern dikh jaana kaafi nahi. Recurring tab tab hai jab **ek block hamesha ke liye** dohrata rahe.

```
Koi bhi decimal
      ↓
      +-- rukta hai --------------> terminating  (rational, q = 2ᵐ5ⁿ)
      ↓
      +-- ek block repeat hota ---> recurring    (rational, q mein koi aur prime)
      ↓
      +-- na rukta, na repeat ----> irrational   (p/q mein likha hi nahi ja sakta)
```

> **Figure 5.4** – Decimal ke teen roop. Pehle do rational hain (q ke prime factors se pehchane jaate hain), teesra irrational hai.

Poori kahani ek line mein: **rational ka decimal teen hi tareeke se khatam ya repeat hota hai (terminating ya recurring), irrational ka decimal in dono mein nahi aata.** Topic 4 ka √p isi teesre khaane mein baithta hai.

---

## Aam galtiyan (bachke rehna)

**Galti 1: "Denominator 10 ka multiple hai, to decimal rukega" (ya "10 ka multiple nahi hai, to nahi rukega")**

10 ke multiple mein 2 aur 5 hote hain, par aur primes bhi ho sakte hain. Test hamesha: **lowest form mein sirf 2 aur 5**.

- **19/30:** 30 = 2 × 3 × 5. 3 hai, to recurring: 0.6333... (pehle ka hissa 6, repeat 3).
- **49/110:** 110 = 2 × 5 × 11. 11 hai, to recurring: 0.44545... (pehle ka hissa 4, block 45).
- Ulta bhi: **7/32** mein 32 10 ka multiple nahi hai, par 32 = 2⁵, to terminating: 0.21875.

**Jaanch:** 0.6333... × 30 = 19 ✅ aur 0.21875 × 32 = 7 ✅

**Galti 2: "Decimal places = m + n"**

Maan lo 7/2500. 2500 = 2² × 5⁴, to m = 2, n = 4. Galat: 2 + 4 = 6 places. Sahi: bada exponent, k = 4. Dekhte hain: upar-neeche 2² = 4 se guna: 7 × 4 = 28, 2500 × 4 = 10000. **7/2500 = 28/10000 = 0.0028.** Sirf 4 places.

**Jaanch:** 0.0028 × 2500 = 7 ✅. Agar 6 places hote, to 0.002800 likhna padta, aur aakhri do zero bekaar hote.

---

## Quick Recap

- **Theorem:** lowest form p/q ka decimal terminating hai **tabhi aur sirf tabhi** jab q = 2ᵐ5ⁿ.
- **Proof (ek taraf):** q = 2ᵐ5ⁿ ho to upar-neeche kam wale prime se guna karke denominator 10ᵏ ban jata hai (k = m, n mein se bada), to N/10ᵏ.
- **Proof (doosri taraf):** agar decimal N/10ᵏ hai, to p × 2ᵏ × 5ᵏ = N × q. Fundamental Theorem aur "p, q ka common factor nahi" se q ke sab primes 2 ya 5 hain.
- **Lowest form** zaroori hai: 39/52 mein 13 hai, par wo 3/4 ban jata hai.
- **Decimal places = m aur n mein se bada** (jod nahi): 7/2500 = 0.0028 ke 4 places.
- Agar q mein koi aur prime ho to decimal nahi rukta. Block ki lambai: 1/q ke liye sabse chhota L jahan q, 99...9 (L nine) ko bhaag kare (3: 1, 11: 2, 37: 3, 7 aur 13: 6, 101: 4, 41: 5, 17: 16).
- **Mixed recurring:** q = 2ᵐ5ⁿ × r ho to pehle ka hissa k = m, n mein se bada digit ka, aur block r se tay hota hai (observation).
- Irrational decimal na rukta hai, na ek block ke saath repeat hota hai.

---

## Practice Questions

1. Without doing any division, say whether each decimal will terminate or recur. Give the reason (remember the lowest form).
   (a) 57/5000
   (b) 33/150
   (c) 41/196
   (d) 72/450
   (e) 13/875

2. Without dividing, state how many digits come after the decimal point, then confirm by writing the decimal.
   (a) 19/800
   (b) 9/15625
   (c) 13/128

3. Convert to decimal by making the denominator a power of 10 (show the multiplier).
   (a) 29/160
   (b) 31/625

4. Find the decimal expansion of 9/22 by long division. Before dividing, predict from the denominator how many digits come before the repeating block. Then convert your decimal back to a fraction.

5. Given that 41 divides 99999, find the decimal expansion of 12/41 and its block length. How many digits at most could the block have by the q − 1 rule?

6. Given that 101 × 99 = 9999, write 3/101 as a decimal without long division. What is the length of the block?

7. Predict the number of digits before the repeating block for 5/26, then find the decimal by long division.

8. Prove that 1/21 cannot be a terminating decimal. (Use the idea of the proof in Part B.)

9. True or false? Give a reason.
   (a) The decimal of 49/70 terminates.
   (b) A fraction in lowest form with denominator 2⁴ × 5⁴ has exactly 4 digits after the decimal point.
   (c) The number 0.5655655565555655555... (each time one more 5 between the 6s) is rational.
   (d) For a fraction in lowest form with denominator 7, the repeating block can never be longer than 6 digits.

10. A baker divides flour into equal packets. (a) 63 kg into 140 packets. (b) 55 kg into 132 packets. In which case is the weight of one packet an exact decimal? Find each weight.

11. Express 0.7181818... (18 repeats) as a fraction in lowest form. Check that the denominator fits the rule for the number of non-repeating digits.

12. A student says that 9/400 has 6 digits after the decimal point because 400 = 2⁴ × 5² and 4 + 2 = 6. Find the mistake and write the correct decimal.

13. List every denominator q with 1 ≤ q ≤ 20 for which 1/q is a terminating decimal. Explain your list.

### Answers

1. (a) 5000 = 2³ × 5⁴; 57 = 3 × 19 ka 2 ya 5 se koi lena-dena nahi, to lowest form. Sirf 2 aur 5, to **terminating** (0.0114).
   (b) 33/150 = 11/50 (dono ko 3 se bhaag diya). 50 = 2 × 5², to **terminating** (0.22). (Pehle lowest form: 150 mein 3 tha, par 33 mein bhi 3 tha.)
   (c) 196 = 2² × 7². 41 prime hai aur 2, 7 nahi, to lowest form. 7 hai, to **recurring**.
   (d) 72/450: 72 = 2³ × 3², 450 = 2 × 3² × 5². Common factor 2 × 9 = 18. 72/450 = 4/25. 25 = 5², to **terminating** (0.16).
   (e) 875 = 5³ × 7. 13 prime hai, to lowest form. 7 hai, to **recurring**: 13/875 = 0.014 857142 857142... (pehle ke 3 digit 014, block 857142).
   **Jaanch:** 0.0114 × 5000 = 57 ✅, 0.22 × 50 = 11 ✅, 0.16 × 25 = 4 ✅

2. (a) 800 = 2⁵ × 5², bada exponent 5, to **5 places**. 5 ki power 2 hai, 3 kam, to 5³ = 125 se guna: 19 × 125 = 2375, denominator 10⁵: **0.02375**.
   (b) 15625 = 5⁶, k = 6, 2⁶ = 64 se guna: 9 × 64 = 576, 10⁶ mein: **0.000576**, 6 places.
   (c) 128 = 2⁷, k = 7, 5⁷ = 78125 se guna: 13 × 78125 = 1015625 / 10⁷ = **0.1015625**, 7 places.
   **Jaanch:** 0.02375 × 800 = 19 ✅, 0.000576 × 15625 = 9 ✅, 0.1015625 × 128 = 13 ✅

3. (a) 160 = 2⁵ × 5, k = 5. 5 ki power 1 hai, 5⁴ = 625 se guna: 29 × 625 = 18125, denominator 10⁵. **29/160 = 0.18125.**
   (b) 625 = 5⁴, k = 4. 2⁴ = 16 se guna: 31 × 16 = 496, denominator 10⁴. **31/625 = 0.0496.**
   **Jaanch:** 0.18125 × 160 = 29 ✅ aur 0.0496 × 625 = 31 ✅

4. 22 = 2 × 11, to m = 1, n = 0, k = 1: **pehle 1 digit** aayega, phir block (11 ke karan).
   90 ÷ 22 = 4, bacha 2. 20 ÷ 22 = 0, bacha 20. 200 ÷ 22 = 9, bacha 2 (dobara 2). **9/22 = 0.4 09 09 09...** (4 ke baad 09 repeat), yaani pehle ka hissa 4 (ek digit, jaisa socha tha), block 09.
   Ulta: x = 0.40909..., 10x = 4.0909..., 1000x = 409.0909..., ghatao: 990x = 405, x = 405/990 = 9/22 (dono ko 45 se bhaag).
   **Jaanch:** 405 ÷ 45 = 9 aur 990 ÷ 45 = 22 ✅

5. 41 ko 99999 bhaag karta hai: 99999 = 41 × 2439. To 12/41 = 12 × 2439/99999 = 29268/99999. **Block 29268 (5 digit)**: 0.29268 29268... q − 1 rule se zyada se zyada 40 digit ho sakte the, par asli 5 hai.
   Long division se bhi: 120 ÷ 41 = 2 bacha 38, 380 ÷ 41 = 9 bacha 11, 110 ÷ 41 = 2 bacha 28, 280 ÷ 41 = 6 bacha 34, 340 ÷ 41 = 8 bacha 12. Remainder 12 (shuru wala numerator) wapas, 5 digit: 29268.
   **Jaanch:** 29268 × 41 = 1199988, 12 × 99999 = 1199988 ✅
6. 101 × 99 = 9999. To 3/101 = 3 × 99/9999 = 297/9999. Isliye block 0297 (L = 4, 4 digit likhna zaroori hai, pehle ek 0 ke saath): **3/101 = 0.0297 0297 0297...** Block ki lambai **4**. (Ye wahi hai jo table mein 101 pehli baar L = 4 par aaya.)
   **Jaanch:** 297 ÷ 99 = 3 aur 9999 ÷ 99 = 101, to 297/9999 = 3/101 ✅

7. 26 = 2 × 13, m = 1, n = 0, k = 1: **pehle 1 digit** aayega.
   50 ÷ 26 = 1 bacha 24. 240 ÷ 26 = 9 bacha 6. 60 ÷ 26 = 2 bacha 8. 80 ÷ 26 = 3 bacha 2. 20 ÷ 26 = 0 bacha 20. 200 ÷ 26 = 7 bacha 18. 180 ÷ 26 = 6 bacha 24 (kadam 1 wala remainder wapas).
   **5/26 = 0.1 923076 923076...**: pehle ka hissa 1, block 923076 (6 digit, jaisa 13 ke liye hota hai).
   **Jaanch:** 0.1923076923... × 26 = 4.99999... = 5 ✅

8. Maan lo 1/21 = N/10ᵏ (kuch k ke liye). To 10ᵏ = 21 × N, yaani 2ᵏ × 5ᵏ = 3 × 7 × N. To 3 aur 7, 2ᵏ × 5ᵏ ko bhaag karte hain. Par Fundamental Theorem ke mutabik 2ᵏ × 5ᵏ ke fingerprint mein sirf 2 aur 5 hain. **Contradiction.** To 1/21 nahi rukta.
   **Jaanch:** 1/21 = 0.047619 047619... (block 6 digit, 21 = 3 × 7, aur 21 ko 999999 bhaag karta hai) ✅

9. (a) **True** ✅. 49/70 = 7/10 (dono ko 7 se bhaag), 10 = 2 × 5, to 0.7.
   (b) **True** ✅. m = n = 4, k = 4. N = p, jo 2 ya 5 se bhaag nahi hota (lowest form), to aakhri digit 0 nahi, exactly 4 places.
   (c) **False** ❌. 5 ke beech mein 6 har baar zyada 5 ke baad aata hai, to koi block repeat nahi hota, aur decimal rukta bhi nahi. Irrational.
   (d) **True** ✅. 7 se bhaag karne par non-zero remainder 1 se 6 tak hi ho sakte hain (Class 9 ka Part B), to 6 steps mein repeat. (1/7 mein exactly 6.)

10. (a) 63/140: 63 = 3² × 7, 140 = 2² × 5 × 7, common factor 7: 63/140 = 9/20. 20 = 2² × 5, **terminating**: 9/20 = 45/100 = **0.45 kg**.
    (b) 55/132: 55 = 5 × 11, 132 = 2² × 3 × 11, common factor 11: 55/132 = 5/12. 12 = 2² × 3, 3 hai, to **recurring**: 5/12 = 0.41 6 6 6... = 0.4166... kg (kabhi exact nahi).
    To **(a) mein exact decimal**.
    **Jaanch:** 0.45 × 140 = 63 ✅ aur 5/12 × 132 = 55 ✅

11. x = 0.7181818... 10x = 7.181818..., 1000x = 718.181818... Ghatao: 990x = 711, x = 711/990 = 79/110 (dono ko 9 se bhaag). 110 = 2 × 5 × 11, k = 1, to pehle ka hissa 1 digit (7), block 18. Bilkul mel khata hai.
    **Jaanch:** 79 ÷ 110 = 0.71818... ✅

12. Galti: jod liya, bada exponent lena tha. 400 = 2⁴ × 5², k = 4 (bada). 5² = 25 se guna: 9 × 25 = 225, 400 × 25 = 10000. **9/400 = 225/10000 = 0.0225.** 4 places.
    **Jaanch:** 0.0225 × 400 = 9 ✅

13. q = 2ᵐ5ⁿ hona chahiye (1/q lowest form mein hai). 2 ki powers: 1, 2, 4, 8, 16. 5 ki powers: 5. Mile hue: 2 × 5 = 10, 4 × 5 = 20. (25 = 5² > 20.) To **q = 1, 2, 4, 5, 8, 10, 16, 20**. Baaki (3, 6, 7, 9, 11, 12, 13, 14, 15, 17, 18, 19) mein koi aur prime hai, to recurring.
    **Jaanch:** 1/16 = 0.0625 ✅ aur 1/20 = 0.05 ✅

---

Shabaash! Ab tum sirf denominator ko dekh kar bata sakte ho ki decimal rukega ya repeat hoga, kitne digit aayenge, aur ye bhi samajh gaye ho ki ye sab Fundamental Theorem ki wajah se hota hai.

**Aage kya?** Topic 6 (Sab Kuch Mila Kar) mein hum chapter ke saare paanch topics ko ek saath jodenge: Euclid ka algorithm, prime fingerprint, HCF-LCM, irrational numbers ke proof aur decimal expansion. Ek "kaun sa tareeka kab" chart milega, mixed practice hogi, aur chapter ka saar.
