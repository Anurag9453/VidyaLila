# Chapter: Compound Interest (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [compound-interest-part3.md](compound-interest-part3.md) se aage chalti hai.** Chapter ki shuruaat [compound-interest.md](compound-interest.md) mein hai.
> **Topics covered in this file:**
> 4. Half-yearly, Quarterly Compounding aur Alag-alag Rates

---

# Topic 4: Half-yearly, Quarterly Compounding aur Alag-alag Rates

Topic 3 mein humne ek chhota sa formula haath mein liya tha: **A = P(1 + r/100)ⁿ**, aur CI = A − P. Mohan chacha ki 10 saal ki FD bhi ek line mein ban gayi thi: 50,000 × (1.1)¹⁰. Us formula se paisa, rate aur saal, teeno mein se kuch bhi chhupa ho, nikaal sakte the. Lekin wahan ek baat chupchaap maani gayi thi: interest **saal mein ek hi baar** judta hai, aur **rate poore time ek hi rehta hai**.

Asli duniya mein aisa hamesha nahi hota. Kuch bank interest har 6 mahine mein jodte hain, kuch har 3 mahine mein. Aur kabhi rate saal-dar-saal badal bhi jaata hai. Is topic mein wahi formula thoda sa "adjust" karna seekhenge, bas.

---

## Farida chachi ke do bank

Farida chachi ne apni purani silai machine bechi aur unke haath mein aaye **₹10,000**. Wo ye paisa ek saal ke liye bank mein rakhna chahti hain. Gali mein do bank hain, aur dono kehte hain: "**10% per annum** interest denge."

Chachi ne ek bank ke baare mein poochha to pata chala: "Hum interest saal ke end mein ek baar jodte hain."

Doosre bank wale ne kaha: "Hum interest **har 6 mahine mein** jodte hain."

Chachi ne socha, "Rate to dono ka 10% hai. Matlab dono barabar!" Par unka bhatija, jo Class 9 mein hai, bola: "Chachi, ruko. Hisaab lagake dekhte hain."

**Bank 1 (saal mein ek baar):** 10% of ₹10,000 = ₹1,000. Saal ke end mein kul **₹11,000**.

**Bank 2 (har 6 mahine mein):** Rate 10% **saal** ka hai, to 6 mahine ka rate hoga aadha, yaani **5%**.
- Pehle 6 mahine: 5% of ₹10,000 = ₹500. Ab paisa hua ₹10,500.
- Agle 6 mahine: ab interest ₹10,500 par lagega. 5% of ₹10,500 = ₹525. Kul **₹11,025**.

Bank 2 ne ₹25 zyada diye! Wajah? Pehle 6 mahine ka ₹500 interest **doosre aadhe saal mein khud kamaane laga** (₹500 ka 5% = ₹25). Yahi to compound interest ka jaadu hai, bas ab wo jaadu saal mein do baar chal raha hai.

Is topic ka pura khel isi chhoti si baat par tika hai.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Compounding period** | Do baar interest judne ke beech ka time | Saalana = 1 saal, half-yearly = 6 mahine |
| **Half-yearly** | Interest har 6 mahine mein judta hai (saal mein 2 baar) | Farida chachi ka Bank 2 |
| **Quarterly** | Interest har 3 mahine mein judta hai (saal mein 4 baar) | 12 mahine ÷ 3 = 4 baar |
| **Rate per period** | Ek compounding period ka rate | 10% p.a. half-yearly: 5% har period |
| **Per annum (p.a.)** | Ek **saal** ka rate | 10% p.a. |
| **Growth factor** | Ek period mein paisa kitne guna hota hai | 5% rate ka factor 1.05 |

---

## Part A: Half-yearly Compounding

### Seedha rule

Jab interest half-yearly judta hai, to do cheezein badalti hain:

1. **Rate aadha** ho jaata hai: r% p.a. ka matlab har period mein **r/2 %**
2. **Periods double** ho jaate hain: n saal mein **2n periods**

Topic 3 ke formula mein bas yahi do badlaav karo:

> **A = P(1 + r/200)²ⁿ**

Kyun r/200? Kyunki (r ÷ 2) ÷ 100 = r/200. Ye koi naya formula nahi hai, wahi purana formula hai jisme rate aadha aur n double kar diya gaya.

### Example 1: Chachi ka paisa (jaanch ke saath)

**P = ₹10,000, r = 10% p.a., time = 1 saal, half-yearly.**

- Rate per period = 10 ÷ 2 = **5%**
- Periods = 1 × 2 = **2**

A = 10,000 × (1 + 5/100)² = 10,000 × (1.05)² = 10,000 × 1.1025 = **₹11,025**

CI = 11,025 − 10,000 = **₹1,025**

**Jaanch:** Humne upar 500 + 525 = 1,025 nikala tha, wahi aaya. ✅ (Saalana compounding mein CI sirf ₹1,000 hota.)

### Example 2: Der tak, dedh saal

**P = ₹16,000, r = 10% p.a., time = 1½ saal, half-yearly.**

- Rate per period = **5%**
- Periods = 1½ × 2 = **3**

A = 16,000 × (1.05)³ = 16,000 × 1.157625 = **₹18,522**

CI = 18,522 − 16,000 = **₹2,522**

**Jaanch (period-by-period):**
- 1st period: 16,000 × 1.05 = 16,800
- 2nd period: 16,800 × 1.05 = 17,640
- 3rd period: 17,640 × 1.05 = 18,522 ✅

---

## Part B: Quarterly Compounding

Wahi sochne ka tareeka, bas ab saal ke **4 hisse**:

1. **Rate chauthai** (r/4) per period
2. **Periods 4 guna** (4n)

> **A = P(1 + r/400)⁴ⁿ**

### Example 3

**P = ₹7,500, r = 16% p.a., time = 6 mahine, quarterly.**

- Rate per period = 16 ÷ 4 = **4%**
- 6 mahine = 2 quarters (har quarter 3 mahine ka), to periods = **2**

A = 7,500 × (1.04)² = 7,500 × 1.0816 = **₹8,112**

CI = 8,112 − 7,500 = **₹612**

**Jaanch:** Pehla quarter: 4% of 7,500 = 300, paisa 7,800. Doosra: 4% of 7,800 = 312. Kul 7,800 + 312 = 8,112 ✅

> **Tip:** Time hamesha pehle **mahino mein** soch lo, phir compounding period (6 ya 3 mahine) se bhaag do. Periods ki ginti wahin se seedhi mil jaati hai. 6 mahine ÷ 3 mahine = 2.

---

## Part C: Zyada baar compounding se zyada paisa kyun?

Farida chachi ke ₹10,000, 10% p.a., 1 saal par ye ladder dekho:

| Interest kitni baar judta hai | Kul paisa (1 saal baad) |
|---|---|
| Saal mein 1 baar | ₹11,000 |
| Saal mein 2 baar (half-yearly) | ₹11,025 |
| Saal mein 4 baar (quarterly) | ₹11,038.13 (lagbhag) |

Check: quarterly mein rate 2.5%, periods 4, to 10,000 × (1.025)⁴ = 10,000 × 1.1038129 ≈ ₹11,038.13 ✅

**Kyun badhta hai?** Jitni jaldi interest judega, utni jaldi wo interest bhi paisa kamaana shuru kar dega. Interest ko "kaam par lagne ka" zyada mauka milta hai. Jaise koi vyakti 6 mahine pehle hi kaam par lag jaaye, to saal ke end tak uski kamai zyada hogi.

Dhyan do: farak **chhota** hai (₹25, ₹38). Compounding ko aur aur tez karte jaoge to bhi paisa ek hadd se aage nahi badhta. Yaani frequency badhane ka faayda hai, lekin dheere-dheere kam hota jaata hai.

---

## Part D: Alag-alag saal, alag-alag rate

Kabhi bank kehta hai: "Pehle saal 10%, doosre saal 12%." Ab ek hi (1 + r/100) se kaam nahi chalega. Lekin sochna wahi hai: **har saal ka apna growth factor**, aur factors ko **multiply** karte jaao.

> **A = P(1 + r₁/100)(1 + r₂/100)(1 + r₃/100) ...**

(r₁ pehle saal ka rate, r₂ doosre saal ka, aur aage isi tarah.)

### Example 4

**₹10,000, pehle saal 10%, doosre saal 12%. Kul kitna?**

- Pehle saal ka factor: 1 + 10/100 = 1.10
- Doosre saal ka factor: 1 + 12/100 = 1.12

A = 10,000 × 1.10 × 1.12 = 10,000 × 1.232 = **₹12,320**

CI = 12,320 − 10,000 = **₹2,320**

**Jaanch (saal-dar-saal):**
- Saal 1: 10,000 + 10% of 10,000 = 10,000 + 1,000 = 11,000
- Saal 2: 11,000 + 12% of 11,000 = 11,000 + 1,320 = 12,320 ✅

### Example 5: Teen saal, teen rate

**₹20,000 ka paisa: pehle saal 5%, doosre saal 10%, teesre saal 20%.**

A = 20,000 × 1.05 × 1.10 × 1.20

- 20,000 × 1.05 = 21,000
- 21,000 × 1.10 = 23,100
- 23,100 × 1.20 = **₹27,720**

CI = 27,720 − 20,000 = **₹7,720**

**Jaanch:** Factors ka guna: 1.05 × 1.10 × 1.20 = 1.386, aur 20,000 × 1.386 = 27,720 ✅

---

## Part E: Fractional time (halka sa)

Kabhi time hota hai **2½ saal**, aur rate saalana ho (interest saal mein ek hi baar judta hai). Aadhe saal ka "poora period" to bana nahi, to usme kya karein?

> **Tareeka:** Poore saalon (2 saal) tak compound interest lagao. Phir bache hue aadhe saal ke liye, **us tak bani hui rakam par simple interest** lagao.

### Example 6

**₹8,000, 10% p.a. (saalana compounding), time = 2½ saal.**

**Step 1:** Pehle 2 saal compound:
A₂ = 8,000 × (1.10)² = 8,000 × 1.21 = ₹9,680

**Step 2:** Bache aadhe saal ka simple interest ₹9,680 par:
SI = 9,680 × 10 × ½ ÷ 100 = ₹484

**Step 3:** Kul = 9,680 + 484 = **₹10,164**

**Jaanch:** 484 sahi hai kyunki 10% saal ka ₹968 hota, aadhe saal ka uska aadha = ₹484 ✅

(Agar sawaal mein "half-yearly" likha ho, to ye alag cheez hai. Wahan Part A wala tareeka lagta hai aur 2½ saal = 5 periods.)

---

## Aam galtiyan (bachke rehna)

**Galti 1: Rate aadha karna bhool jaana**
₹10,000, 10% p.a., 1 saal, half-yearly. Galat: 10,000 × (1.10)² = 12,100. ❌ Ye to 2 **saal** ka saalana CI ban gaya! Sahi: rate 5%, to 10,000 × (1.05)² = **₹11,025**. ✅

**Galti 2: Periods double karna bhool jaana**
Rate aadha kiya (5%), par n = 1 hi rakha: 10,000 × 1.05 = 10,500. ❌ Ye sirf **6 mahine** ka hisaab hai! Sahi: 1 saal = 2 periods, **₹11,025**. ✅

**Galti 3: Factors ki jagah rates ko jodna ya guna karna**
Pehle saal 10%, doosre saal 12%. Galat: "10 + 12 = 22%, to 10,000 × 1.22 = 12,200" ❌. Ya "average 11% do baar": 10,000 × (1.11)² = 12,321 ❌. Dono sahi ₹12,320 se alag hain. Sahi: har saal ka **factor** (1.10 aur 1.12) banao, phir **factors** ko guna karo. ✅

**Galti 4: "Per annum" aur "per half-year" mein confusion**
"10% per annum" = saal ka 10%. "10% per half-year" = **har 6 mahine ka** 10%, yaani saal ka 20%! Agar sawaal mein "per half-year" likha hai to rate ko aadha **mat** karo, wo pehle se hi period ka rate hai. Hamesha "per annum" ya "per half-year" ka shabd dhyan se padho.

Example: ₹5,000 at **10% per half-year**, 1 saal. Periods = 2, rate per period = 10% (aadha nahi karna): 5,000 × 1.10 × 1.10 = **₹6,050**.

---

## Quick Recap

- **Half-yearly:** rate per period = r/2, periods = 2n, **A = P(1 + r/200)²ⁿ**
- **Quarterly:** rate per period = r/4, periods = 4n, **A = P(1 + r/400)⁴ⁿ**
- Time ko mahino mein soch kar compounding period se bhaag do, periods mil jaayenge.
- Zyada baar compounding = **thoda** zyada paisa, kyunki interest jaldi kamaana shuru kar deta hai. (₹10,000, 10%, 1 saal: ₹11,000, ₹11,025, ≈₹11,038.13)
- **Alag-alag rates:** A = P × (1 + r₁/100) × (1 + r₂/100) × ... Rates nahi, **factors** multiply karo.
- **Fractional time (saalana compounding):** poore saal compound, bache hue hisse par simple interest.
- "Per annum" = saal ka rate, "per half-year" = 6 mahine ka rate. Padhke hi rate aadha karo.
- Hamesha **jaanch** karo: ek-ek period ka paisa nikaal ke dekh lo.

---

## Practice Questions

1. Find the amount and the compound interest on ₹20,000 at 8% per annum for 1 year, compounded half-yearly. How much would the amount be if the interest were compounded yearly instead?

2. Find the amount if ₹5,000 is invested at 16% per annum for 1 year, compounded half-yearly.

3. Find the amount on ₹25,000 at 8% per annum for 6 months, compounded quarterly.

4. A sum of ₹8,000 earns 5% interest in the first year and 10% in the second year (compounded yearly). Find the amount and the compound interest after 2 years.

5. Find the amount on ₹4,000 at 20% per annum for 1½ years, if the interest is compounded **yearly** (use simple interest for the last half-year). Then find the amount if it is compounded **half-yearly**. Which gives more money, and by how much?

6. Bank A offers 20% per annum, compounded yearly. Bank B offers 19% per annum, compounded half-yearly. For ₹10,000 kept for 1 year, which bank gives more money? Does a "lower" rate always lose?

7. A student solved this: "₹10,000 at 10% per annum, half-yearly, 1 year. A = 10,000 × (1 + 10/100)² = ₹12,100." Find the mistake and give the correct answer.

8. State True or False:
   (a) For ₹P at r% per annum compounded half-yearly for 2 years, the rate per period is r/2 and the number of periods is 4.
   (b) For 12% per annum compounded quarterly, the rate per period is 3%.
   (c) Half-yearly compounding always gives less amount than yearly compounding at the same rate (for the same time).
   (d) If the rates in two successive years are 10% and 20%, the amount is the same as at 30% for one year.

### Answers

1. Rate per period = 8 ÷ 2 = 4%, periods = 2.
   A = 20,000 × (1.04)² = 20,000 × 1.0816 = **₹21,632**
   CI = 21,632 − 20,000 = **₹1,632**
   Yearly compounding mein: 20,000 × 1.08 = **₹21,600**. (Half-yearly mein ₹32 zyada.)
   Jaanch: 1st period 20,000 × 1.04 = 20,800; 2nd 20,800 × 1.04 = 21,632 ✅

2. Rate per period = 8%, periods = 2.
   A = 5,000 × (1.08)² = 5,000 × 1.1664 = **₹5,832**
   Jaanch: 5,000 × 1.08 = 5,400; 5,400 × 1.08 = 5,832 ✅

3. 8% p.a. quarterly: rate per period = 2%. 6 mahine = 2 quarters.
   A = 25,000 × (1.02)² = 25,000 × 1.0404 = **₹26,010**
   Jaanch: 25,000 × 1.02 = 25,500; 25,500 × 1.02 = 26,010 ✅

4. A = 8,000 × 1.05 × 1.10 = 8,000 × 1.155 = **₹9,240**
   CI = 9,240 − 8,000 = **₹1,240**
   Jaanch: saal 1: 8,000 + 400 = 8,400; saal 2: 8,400 + 840 = 9,240 ✅

5. **Yearly:** 1 saal compound: 4,000 × 1.20 = ₹4,800. Bache aadhe saal ka SI = 4,800 × 20 × ½ ÷ 100 = ₹480. Kul = **₹5,280**.
   **Half-yearly:** rate 10% per period, periods = 3. A = 4,000 × (1.10)³ = 4,000 × 1.331 = **₹5,324**.
   Half-yearly zyada hai, **₹5,324 − ₹5,280 = ₹44** zyada.
   Jaanch: 4,000 → 4,400 → 4,840 → 5,324 ✅

6. Bank A: 10,000 × 1.20 = **₹12,000**.
   Bank B: rate per period = 9.5%, periods = 2. A = 10,000 × (1.095)² = 10,000 × 1.199025 = **₹11,990.25**.
   **Bank A** zyada deta hai (₹9.75 zyada). Haan, yahan lower rate wala haar gaya, kyunki 1% ka farak compounding ke chhote faayde se bada hai. Par agar rate barabar hota to Bank B jeetta. Isliye dono cheezein dekhni padti hain: rate **aur** compounding.

7. Galti: rate aadha nahi kiya, aur periods double nahi kiye. 1 + 10/100 se 2 baar guna karne ka matlab 10% ke **2 saal** ho gaya.
   Sahi: rate per period = 5%, periods = 2. A = 10,000 × (1.05)² = **₹11,025**.

8. (a) **True** ✅. 2 saal = 4 half-years, rate per period r/2.
   (b) **True** ✅. 12 ÷ 4 = 3.
   (c) **False** ❌. Half-yearly mein amount **zyada** milta hai (jaise ₹11,025 vs ₹11,000).
   (d) **False** ❌. 1.10 × 1.20 = 1.32, yaani 32% ka growth. 30% ke saath 1.30 aata hai.

---

Ab aapke haath mein ek hi formula se kai tarah ke bank ke hisaab nikaalne ki taaqat hai. Bas do sawaal khud se poochho: "Ek period ka rate kya hai?" aur "Kul kitne periods hain?" Baaki sab wahi purana guna.

**Aage kya?** Ab tak paisa hi badh raha tha. Topic 5 mein dekhenge ki **yahi formula** shehar ki badhti hui **population** par bhi chalta hai, aur ghat-te hue maal, jaise **purani machine ki kimat**, par bhi (wahan bas ek chhota sa ulta-pulta hota hai).
