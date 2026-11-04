# Chapter: Probability (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [probability.md](probability.md) se aage chalti hai** (wahan Topic 1 hai: chance ke shabd, experiment, random experiment, trial, outcome, event, certain aur impossible event, aur gully-cricket ka coin toss).
> **Pehle se kaam aayega:** tally aur frequency table ([../statistics/statistics-part2.md](../statistics/statistics-part2.md)), aur fraction ko decimal aur percent mein badalna ([../number-systems/number-systems-part2.md](../number-systems/number-systems-part2.md)).
> **Topics covered in this file:**
> 2. Experiment se Probability (Empirical Probability)

---

# Topic 2: Experiment se Probability (Empirical Probability)

Topic 1 mein Aryan aur Mahi ke gully-cricket toss se humne chance ko naam dena seekha: "shayad", "pakka", "namumkin". Humne ye bhi dekha ki random experiment mein har trial ka outcome pehle se nahi pata hota, aur event un outcomes ka ek group hota hai. Par "shayad" kehna kaafi nahi lagta. Hum poochna chahte hain: **kitna shayad?** Kya is chance ko ek number bana sakte hain?

Is topic mein hum number banane ka sabse seedha tareeka seekhenge: **experiment karo, baar-baar karo, aur ginti karo.** Isse jo number milta hai, usse **empirical probability** kehte hain.

---

## Mr. Fernandes ka bottle cap

Science ki class mein Mr. Fernandes ne har bachche ko ek plastic bottle cap diya. Phir bole, "Aaj ka sawaal simple hai. Ye cap jab floor par girta hai, to **seedha (mooh upar)** girta hai ya **ulta**? Koi andaza lagao."

Kisi ne kaha, "Sir, aadha-aadha." Kisi ne kaha, "Seedha zyada girega." Mr. Fernandes muskuraye. "Coin ki tarah isme bhi do hi tarah ke nateeje hain, par ye cap coin jaisa balanced nahi hai. Iska andaza kitaab se nahi, **cap se hi poochna padega**."

Tanya ne cap ko 20 baar uchhala aur har baar tally lagayi:

| Nateeja | Tally | Frequency |
|---|---|---|
| Seedha (mooh upar) | IIII/ III | 8 |
| Ulta | IIII/ IIII/ II | 12 |
| **Kul** | | **20** |

Tanya boli, "Sir, 20 mein se 8 baar seedha. To seedha girne ka chance 8/20 = 0.4 hai?"

Mr. Fernandes ne kaha, "Achha shuruaat hai. Par sirf 20 tosses par bharosa kitna karein? Chalo poori class ke results jodte hain."

Class ke saare results board par jude. Mr. Fernandes ne ek table banayi:

| Kul tosses | Seedha girne ki ginti | Seedha / Kul | Decimal |
|---|---|---|---|
| 20 | 8 | 8/20 | 0.400 |
| 100 | 41 | 41/100 | 0.410 |
| 200 | 83 | 83/200 | 0.415 |
| 500 | 208 | 208/500 | 0.416 |

Tanya ne dekha, "Sir, ye to ajeeb hai. Shuru mein number idhar-udhar ho sakta tha, par jaise-jaise tosses badhe, number **0.4 ke aas-paas tikne laga**."

"Bilkul," Mr. Fernandes bole. "Yahi idea hai. Ek chhote experiment par bharosa kam, bade experiment par zyada. Is topic ka poora khel yahi hai."

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Empirical (experimental) probability** | Experiment karke nikala gaya chance: event kitni baar hua ÷ kul kitni baar experiment kiya | Cap 500 baar uchhala, 208 baar seedha: 208/500 |
| **Relative frequency** | Empirical probability ka doosra naam: frequency ko kul trials se bhaag dena | 41/100 |
| **Frequency** | Koi nateeja kitni baar aaya | Seedha: 8 baar |
| **Kul trials** | Experiment kitni baar kiya gaya, yani sab frequencies ka jod | 20, 100, 200, 500 |
| **Stable (tikna)** | Trials badhne par ratio ka kisi number ke paas settle ho jana | 0.400, 0.410, 0.415, 0.416 |

---

## Part A: Idea aur formula

Jab hum pehle se nahi bata sakte ki kya hoga, to hum **experiment karte hain**: use kai baar dohrate hain aur ginte hain.

> **Event E ki empirical probability = (kitne trials mein E hua) ÷ (kul trials)**

Isse P(E) likhte hain. Padhte hain "E ki probability".

Bottle cap ke 20 tosses mein:
- E = "seedha girna"
- E 8 baar hua, kul trials 20
- P(E) = 8 ÷ 20

Is number ko teen roop mein likhna seekho (fraction se decimal aur percent ke liye dekho Number Systems wali file):

- Fraction: 8/20 = 2/5
- Decimal: 8 ÷ 20 = 0.4
- Percent: 0.4 × 100 = 40%

**Jaanch:** 40% matlab har 100 mein 40. 20 tosses mein se 8, yani har 100 mein 40 ✅

Ye "ginti ÷ kul" wahi idea hai jo statistics ki frequency table se aata hai. Frequency table se P nikalna bas ek aur step hai: frequency ko kul se bhaag do.

---

## Part B: Worked tables

### Example 1: Bottle cap ki poori kahani

Mr. Fernandes ki class ke 500 tosses ka hisaab (cumulative yani ab tak ka jod):

| Kul tosses | Seedha | Ulta | Seedha / Kul | Percent |
|---|---|---|---|---|
| 20 | 8 | 12 | 8/20 = 0.4 | 40% |
| 100 | 41 | 59 | 41/100 = 0.41 | 41% |
| 200 | 83 | 117 | 83/200 = 0.415 | 41.5% |
| 500 | 208 | 292 | 208/500 = 0.416 | 41.6% |

**Jaanch:** har row mein Seedha + Ulta = kul: 8+12 = 20, 41+59 = 100, 83+117 = 200, 208+292 = 500 ✅

Ab ek sawaal: **500 tosses ke hisaab se ulta girne ki probability kya hai?**
- P(ulta) = 292 ÷ 500 = 0.584 = **58.4%**

**Jaanch:** P(seedha) + P(ulta) = 0.416 + 0.584 = 1 ✅

Ye jod 1 kyun aaya? Kyunki har toss mein ya to seedha aaya ya ulta, koi toss bacha nahi. 208 + 292 = 500 hi to hai. Ise Part D mein aur dekhenge.

Mr. Fernandes ne note kiya: "Seedha girne ka chance **lagbhag 0.4** hai." Dhyan do, ye "lagbhag" hai. Zyada tosses karte to 0.416 thoda aur hil sakta tha.

### Example 2: 100 baar coin ka toss

Ek coin 100 baar uchhala gaya.

| Nateeja | Tally | Frequency | Probability (fraction) | Decimal | Percent |
|---|---|---|---|---|---|
| Heads | 54 baar (tally se) | 54 | 54/100 = 27/50 | 0.54 | 54% |
| Tails | 46 baar | 46 | 46/100 = 23/50 | 0.46 | 46% |
| **Kul** | | **100** | | | |

**Jaanch:** 54 + 46 = 100 ✅ aur 0.54 + 0.46 = 1 ✅

Agar kisi se poochho, "heads kitni baar aana chahiye?", to wo kahega 50. Yahan 54 aaye. Ye bilkul normal hai. Experiment mein number hamesha thoda idhar-udhar hota hai (Part C mein detail se dekhenge).

### Example 3: Die ko 200 baar ludhkana

Ek die (1 se 6 wala paasa) 200 baar ludhkaya gaya:

| Nateeja | Frequency | Probability (fraction) | Decimal |
|---|---|---|---|
| 1 | 31 | 31/200 | 0.155 |
| 2 | 36 | 36/200 | 0.180 |
| 3 | 30 | 30/200 | 0.150 |
| 4 | 35 | 35/200 | 0.175 |
| 5 | 33 | 33/200 | 0.165 |
| 6 | 35 | 35/200 | 0.175 |
| **Kul** | **200** | **200/200** | **1.000** |

**Jaanch:** 31 + 36 + 30 + 35 + 33 + 35 = 200 ✅ (31+36 = 67, +30 = 97, +35 = 132, +33 = 165, +35 = 200)

Ab is table se kuch events ki probability:

**(a) P(even number)**
- Even outcomes: 2, 4, 6. Frequency: 36 + 35 + 35 = 106
- P = 106/200 = 53/100 = 0.53 = **53%**

**(b) P(4 se bada number)**
- 4 se bade: 5 aur 6. Frequency: 33 + 35 = 68
- P = 68/200 = 17/50 = 0.34 = **34%**

**(c) P(odd number)**
- Odd: 1, 3, 5. Frequency: 31 + 30 + 33 = 94
- P = 94/200 = 47/100 = 0.47 = **47%**

**(d) P(3 se chhota number)**
- 1 aur 2. Frequency: 31 + 36 = 67
- P = 67/200 = 0.335 = **33.5%**

**Jaanch:** (a) aur (c) ke events mil kar saare outcomes dete hain: 0.53 + 0.47 = 1 ✅

### Example 4: Survey, 50 students ka favourite subject

50 students se poocha gaya ki unka favourite subject kaun sa hai (har ek ne ek hi subject chuna):

| Subject | Tally ka jod (frequency) | Probability (fraction) | Decimal | Percent |
|---|---|---|---|---|
| Maths | 14 | 14/50 | 0.28 | 28% |
| Science | 12 | 12/50 | 0.24 | 24% |
| English | 9 | 9/50 | 0.18 | 18% |
| Hindi | 6 | 6/50 | 0.12 | 12% |
| Social Science | 9 | 9/50 | 0.18 | 18% |
| **Kul** | **50** | **50/50** | **1.00** | **100%** |

**Jaanch:** 14 + 12 + 9 + 6 + 9 = 50 ✅ aur 28 + 24 + 18 + 12 + 18 = 100 ✅

Ab in 50 students mein se **ek student randomly chuno**. Uska favourite subject:
- Maths hone ki probability = 14/50 = 0.28
- Hindi ya English hone ki probability = (6 + 9)/50 = 15/50 = 0.3 = 30%

**Dhyan do:** ye probability sirf **in 50 students ke survey** par tiki hai. Doosre 50 students se poochho to table thodi badal sakti hai.

### Example 5: Class-record, 40 batters ke scores

Ek school tournament mein 40 batters ne ballebaazi ki. Unke scores ka hisaab:

| Score | Batters (frequency) |
|---|---|
| 0 se 24 | 14 |
| 25 se 49 | 13 |
| 50 se 99 | 10 |
| 100 ya zyada | 3 |
| **Kul** | **40** |

**Jaanch:** 14 + 13 + 10 + 3 = 40 ✅

In 40 mein se ek batter randomly chuno. Poochhte hain: **us batter ne 50 ya zyada score kiye?**

- 50 ya zyada: 50 se 99 wale (10) aur 100 ya zyada wale (3). Kul 10 + 3 = 13
- P = 13/40 = 0.325 = **32.5%**

**Aur 100 ya zyada?** P = 3/40 = 0.075 = **7.5%**

**Aur 25 se kam?** P = 14/40 = 0.35 = **35%**

**Jaanch:** 13 batters ne 50 ya zyada kiye, to 40 − 13 = 27 ne 50 se kam. 13/40 + 27/40 = 40/40 = 1 ✅

---

## Part C: Stability, jaise-jaise trials badhte hain

Tanya ko ek baat khatak rahi thi. "Sir, 20 tosses mein 0.4 mila, 500 mein 0.416. Kya ye number kabhi bilkul pakka ho jayega?"

Mr. Fernandes ne ek aur experiment karwaya: ek coin ka. Ab hum ek hi coin ke tosses ko jodte jaate hain aur **running ratio** (ab tak ke tosses mein heads ka hissa) dekhte hain.

| Kul tosses | Ab tak heads | Heads / Kul |
|---|---|---|
| 10 | 7 | 0.70 |
| 20 | 12 | 0.60 |
| 50 | 29 | 0.58 |
| 100 | 54 | 0.54 |

Isse bar-chart jaisa dekho (har `#` ka matlab 0.05):

```
Tosses    Heads / Kul
  10   |##############   0.70
  20   |############     0.60
  50   |############     0.58
 100   |###########      0.54
       +-------------------> 1.0
```

Shuru ke chhote experiment mein ratio bahut upar-neeche hota hai (0.70). Jaise-jaise tosses badhte hain, jhatke chhote hote jaate hain aur ratio ek jagah ke aas-paas **tikne lagta hai**.

**Do zaroori baatein:**
1. **Zyada trials, zyada bharosa.** 10 tosses ka ratio kaafi hilta hai, 500 ka kam.
2. **Koi guarantee nahi.** Ratio tikta hai, par kisi pehle se likhe number ke barabar ban jaye ye zaroori nahi. Bottle cap 0.416 ke paas tika, par agar kisi aur class ke 500 tosses karaye to 0.41 ya 0.42 bhi aa sakta hai. Har experiment ek **naya, apna nateeja** deta hai.

Isiliye empirical probability ko hum hamesha "experiment ke hisaab se" bolte hain. Ye ek **andaza** hai jo experiment ke saath badalta hai.

---

## Part D: Empirical probability ki do khaas baatein

Die wali table (Example 3) dobara dekho.

**Baat 1: Har probability 0 aur 1 ke beech aati hai.**

Dekho: 31/200 = 0.155, 36/200 = 0.18, ... sab 0 aur 1 ke beech. Kyun? Kyunki "event kitni baar hua" kabhi kul trials se zyada nahi ho sakta. Zyada se zyada har baar hua to ratio 1 hoga (jaise 200/200). Kabhi hua hi nahi to 0 (jaise die par 7 nikalna: 0/200 = 0).

**Baat 2: Sab outcomes ki probability ka jod 1 hota hai.**

Die table mein:
0.155 + 0.18 + 0.15 + 0.175 + 0.165 + 0.175
= 0.155 + 0.18 = 0.335
→ 0.335 + 0.15 = 0.485
→ 0.485 + 0.175 = 0.66
→ 0.66 + 0.165 = 0.825
→ 0.825 + 0.175 = **1.000**

Ye hona hi tha: frequencies ka jod 200 hai, to unhe 200 se bhaagne par jod 200/200 = 1 aata hai.

Isi tarah bottle cap mein 0.416 + 0.584 = 1, coin mein 0.54 + 0.46 = 1, survey mein 0.28 + 0.24 + 0.18 + 0.12 + 0.18 = 1.

Ye dono baatein aage Topic 4 mein aur pakki tarah dekhenge. Abhi bas itna yaad rakho.

---

## Part E: Asli zindagi mein empirical probability

Jab bhi sawaal ho "kitna chance hai?" aur pehle se jawab na pata ho, to log purana record gin kar jawab dhoondhte hain.

- **Mausam ki bhavishyavani:** pichhle kai saalon mein 10 June ko 30 mein se 18 baar baarish hui, to kehte hain "baarish ka chance 18/30 = 0.6, yani 60%". Ye purane record ka relative frequency hai.
- **Insurance:** ek shehar mein 1,000 gaadiyon mein se pichhle saal 30 ka accident hua. To accident ka empirical chance 30/1,000 = 0.03 = 3%. Isi se company tay karti hai ki premium kitna rakhe.
- **Cricket:** ek batter ne pichhli 60 gendon mein 12 boundaries maari. Uski boundary maarne ka record 12/60 = 0.2 = 20%. (Batting average thoda alag hota hai, par soch yahi hai: purane record se aage ka andaza.)
- **Factory mein quality check:** 200 bulbs ki ek sample mein 3 kharab nikle.
  - P(kharab) = 3/200 = 0.015 = **1.5%**
  - P(theek) = 197/200 = 0.985 = **98.5%**
  - **Jaanch:** 0.015 + 0.985 = 1 ✅
  - Factory kehti hai ki lagbhag 1.5% bulb kharab hote hain. Agar 10,000 bulbs bane, to andaza hai ki 10,000 × 0.015 = 150 ke aas-paas kharab hone chahiye. "Aas-paas", kyunki ye bhi andaza hi hai.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Galat total se bhaag dena**

Tanya ke cap ke 20 tosses mein 8 seedha, 12 ulta.
- Galat: 8 ÷ 12 (sirf ulte tosses se bhaag diya)
- Sahi: 8 ÷ **20** (kul trials se)

Total hamesha **saare trials** ka hota hai, sirf ek nateeje ka nahi.

**Galti 2: Event ÷ "baaki" (favourable ÷ unfavourable)**

Coin ke 100 tosses mein heads 54, tails 46.
- Galat: P(heads) = 54/46 = 1.17...
- Sahi: P(heads) = 54/100 = 0.54

54/46 "heads tails se kitna zyada" batata hai, probability nahi. Probability mein neeche hamesha **kul** aata hai.

**Galti 3: Sochna ki 10 tosses mein bilkul 5 aur 5 aayenge**

Coin ko 10 baar uchhalo to heads 5 hi aaye ye zaroori nahi. 7 aa sakte hain (Part C ki table ka pehla row: 0.70), ya 4. Ye galti nahi, experiment ka swabhav hai. Chhote experiment mein jhatke bade hote hain. Isiliye hum **bade** experiment ka ratio dekhte hain.

**Galti 4: Probability ko 1 se bada bata dena**

50 tosses mein 30 heads aaye.
- Galat: 30 ÷ 20 = 1.5 (kisi aur number se bhaag diya)
- Sahi: 30 ÷ 50 = 0.6

Event kul trials se zyada baar ho hi nahi sakta, to ratio 1 se bada nahi aa sakta. Agar jawab 1 se bada aaye, to ruk kar total check karo.

---

## Quick Recap

- Jab pehle se jawab pata nahi, to **experiment ko kai baar karo aur ginti karo**.
- **Empirical probability P(E) = (E kitne trials mein hua) ÷ (kul trials)**. Isse **relative frequency** bhi kehte hain.
- Frequency table se nikalo: frequency ÷ kul. Jawab fraction, decimal aur percent, teeno mein likh sakte ho.
- Bottle cap: 8/20, 41/100, 83/200, 208/500, yani 0.4, 0.41, 0.415, 0.416. **Trials badhne par ratio tikne lagta hai.**
- Tikne ka matlab ye nahi ki wo kisi pehle se tay number ke barabar ho jayega. Har experiment ka apna nateeja hota hai.
- Probability hamesha **0 aur 1 ke beech** hoti hai, aur **sab outcomes ki probability ka jod 1** hota hai.
- Zindagi mein: mausam ki bhavishyavani, insurance, cricket ka record, factory ki quality check.
- Galtiyan: galat total, favourable ÷ unfavourable, "10 tosses mein 5-5 hi hoga", probability 1 se bada.

---

## Practice Questions

1. A coin was tossed 80 times and heads came up 38 times. Find the empirical probability of getting heads and of getting tails. Write each as a fraction, a decimal and a percent. What do the two probabilities add up to?

2. A die was rolled 60 times with these results:

   | Outcome | 1 | 2 | 3 | 4 | 5 | 6 |
   |---|---|---|---|---|---|---|
   | Frequency | 8 | 11 | 9 | 12 | 10 | 10 |

   (a) Check that the frequencies add up to 60. (b) Find P(6). (c) Find P(odd number). (d) Find P(a number that is at least 4).

3. A quality inspector checked 500 pens from a factory and found 12 faulty ones. Find the empirical probability that a pen chosen at random from this sample is faulty, and that it is not faulty. Add the two probabilities.

4. In 40 tosses of a bottle cap, it landed upright 18 times. A student says, "The probability of landing upright is 18 ÷ 22 ≈ 0.82." What mistake did the student make? Give the correct value.

5. Use the favourite-subject survey of 50 students from Example 4. Find the probability that a randomly chosen student from that survey likes Maths or Science.

6. Use the table of 40 batters from Example 5. Find the probability that a randomly chosen batter scored from 25 to 99 (both included).

7. State True or False, with a short reason:
   (a) If a coin is tossed 10 times, heads must come up exactly 5 times.
   (b) The empirical probability of an event can be 1.5.
   (c) The empirical probabilities of all the outcomes of an experiment add up to 1.
   (d) With more trials, the empirical probability usually settles near some value.

8. A coin was tossed 10, 20, 50 and 100 times (running totals), with 3, 8, 22 and 47 heads respectively. Write the running ratio heads ÷ tosses for each and say what you notice as the number of tosses grows.

### Answers

1. P(heads) = 38/80 = 19/40 = 0.475 = **47.5%**.
   Tails = 80 − 38 = 42, to P(tails) = 42/80 = 21/40 = 0.525 = **52.5%**.
   Jaanch (jod): 0.475 + 0.525 = **1** ✅ (38 + 42 = 80)

2. (a) Jaanch: 8 + 11 + 9 + 12 + 10 + 10 = 60 ✅ (8+11 = 19, +9 = 28, +12 = 40, +10 = 50, +10 = 60)
   (b) P(6) = 10/60 = 1/6 ≈ **0.167**
   (c) Odd: 1, 3, 5. Frequency 8 + 9 + 10 = 27. P = 27/60 = 9/20 = **0.45**
   (d) At least 4 yani 4, 5, 6. Frequency 12 + 10 + 10 = 32. P = 32/60 = 8/15 ≈ **0.533**
   Jaanch: P(even) = (11 + 12 + 10)/60 = 33/60 = 0.55, aur 0.45 + 0.55 = 1 ✅

3. P(faulty) = 12/500 = 0.024 = **2.4%**.
   Not faulty = 500 − 12 = 488, to P = 488/500 = 0.976 = **97.6%**.
   Jaanch (jod): 0.024 + 0.976 = **1** ✅

4. Student ne ulte tosses (40 − 18 = 22) se bhaag diya, yaani favourable ÷ unfavourable (Galti 2). Neeche kul tosses aane chahiye. Sahi: 18 ÷ 40 = 9/20 = **0.45** (45%).
   Jaanch: P(ulta) = 22/40 = 0.55, aur 0.45 + 0.55 = 1 ✅

5. Maths 14 aur Science 12, to 14 + 12 = 26. P = 26/50 = 13/25 = **0.52**.
   Jaanch: baaki subjects 9 + 6 + 9 = 24, aur 26 + 24 = 50 ✅

6. 25 se 49 wale 13 aur 50 se 99 wale 10, to 13 + 10 = 23. P = 23/40 = **0.575 = 57.5%**.
   Jaanch: baaki 14 + 3 = 17, aur 23 + 17 = 40 ✅

7. (a) **False** ❌. 7 ya 4 bhi aa sakte hain. Chhote experiment mein ratio kaafi hilta hai.
   (b) **False** ❌. Event kul trials se zyada baar nahi ho sakta, to ratio 1 se bada nahi hota.
   (c) **True** ✅. Frequencies ka jod kul trials hota hai, to ratios ka jod 1.
   (d) **True** ✅. Yahi stability hai, par ye guarantee nahi ki ek tay number hi mile.

8. 3/10 = **0.30**, 8/20 = **0.40**, 22/50 = **0.44**, 47/100 = **0.47**.
   Dekha: shuru mein ratio zyada hila (0.30 se 0.40), phir har step par kam hila aur ek jagah ke paas aane laga. Yani zyada trials, zyada stable ratio.

---

Tanya ki tarah ginti karna aur jodna seekh liya, to empirical probability aapki mutthi mein hai. Jab bhi koi chance ka sawaal aaye, pehle poocho: "kul kitne trials the, aur event kitni baar hua?"

**Aage kya?** Ab tak har baar humne tosses karke dekhe. Par kya hum **bina tosses ke** bata sakte hain? Haan, agar sab outcomes barabar mauke wale hon. Topic 3 mein Holi ke rang-packet wale thaile se dekhenge ki aisa chance (aur coin, die ka bhi) seedha gin kar kaise nikalta hai.
