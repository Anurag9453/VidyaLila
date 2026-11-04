# Chapter: Compound Interest (Part 5)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [compound-interest-part4.md](compound-interest-part4.md) se aage chalti hai.** (Chapter ki shuruaat [compound-interest.md](compound-interest.md) se hoti hai.)
> **Topics covered in this file:**
> 5. Growth aur Depreciation

---

# Topic 5: Growth aur Depreciation

Pichle topic mein humne dekha ki compounding sirf saal mein ek baar nahi hoti: half-yearly aur quarterly mein rate aadha ya chauthai ho jata hai aur periods double ya four guna ho jaate hain. Farida chachi ke ₹10,000 half-yearly mein ₹11,025 bane the, saalana ₹11,000 ki jagah. Humne ye bhi dekha ki alag alag saal ka rate alag ho to har saal ka factor alag se guna kar dete hain.

Ab ek sawaal: kya ye sirf paise aur bank ki baat hai? Nahi! Jo bhi cheez **har baar apni hi current value ke hisaab se badhti ya ghatti hai**, usmein yahi machine chalti hai. Is topic mein hum wahi formula population, bacteria, paudhe aur scooter par lagayenge, aur dekhenge ki jab value **ghatti** hai to ek chhota sa sign badalta hai. Chapter ka aakhri topic hai, to end mein poore chapter ka wrap-up bhi hoga.

---

## Sundarpur ka board aur Shekhar chacha ka scooter

Sundarpur gaon ke entrance par ek board laga hai:

> **"Sundarpur: aabaadi 30,000. Har saal 5% badhti hui!"**

Shekhar chacha usi gaon ke hain. Is saal unhone ₹80,000 ka naya scooter kharida. Dealer ne chalte chalte kaha, "Chacha, scooter ki keemat har saal 20% kam hoti jaati hai."

Chacha ne apne bhatije Lakshya se poocha, "Beta, board kehta hai gaon badh raha hai, dealer kehta hai scooter ghat raha hai. Dono ka hisaab kaise lagayein? 2 saal baad gaon mein kitne log honge aur 3 saal baad scooter kitne ka bachega?"

Lakshya ne kaha, "Chacha, ye to wahi Compound Interest wali kahani hai. Bas yahan paisa nahi, log aur scooter ki keemat hai."

Dekhte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Growth (vriddhi)** | Value har saal apni current value ka r% badhti hai | Aabaadi 5% saal badhna |
| **Depreciation (mulya-hraas)** | Value har saal apni current value ka r% ghatti hai | Scooter ki keemat 20% saal ghatna |
| **Growth rate** | Badhne ka percent | 5% |
| **Depreciation rate** | Ghatne ka percent | 20% |
| **Inflation (mehengai)** | Cheezon ke daam ka saal dar saal badhna | Thali ₹100 se ₹108 |
| **Present value** | Abhi ki value | Gaon ki aaj ki aabaadi |

---

## Part A: Growth (badhna)

### Kyun same formula?

Topic 3 mein CI ka formula tha A = P(1 + r/100)ⁿ. Isme har saal paisa apne hi pichle saal ke amount ka r% badhta hai. Aabaadi bhi aisi hi hoti hai: is saal ke 30,000 ka 5% naye log judte hain, agle saal naye total ka 5%. Isliye:

**V = P(1 + r/100)ⁿ**

Yahan P shuruat ki value, r% har saal ka growth, n saal, aur V n saal baad ki value hai.

### Example 1: Sundarpur ki aabaadi

P = 30,000, r = 5, n = 2

V = 30,000 × (1 + 5/100)² = 30,000 × (1.05)² = 30,000 × 1.1025 = **33,075**

Jaanch (saal dar saal):
- 1 saal baad: 30,000 + 5% of 30,000 = 30,000 + 1,500 = 31,500
- 2 saal baad: 31,500 + 5% of 31,500 = 31,500 + 1,575 = **33,075** ✅

Dhyan do: agar 5% ko "har saal 1,500 log" maan lete to 2 saal baad 33,000 aate. Par asal mein 33,075 hai, kyunki doosre saal ka 5% **badi hui** aabaadi par laga.

### Example 2: Bacteria ka double hona

Ek petri dish mein 500 bacteria hain, aur wo **har ghante double** ho jaate hain. 3 ghante baad kitne honge?

Double hona matlab 100% growth. Yaani 1 + 100/100 = 2.

V = 500 × 2³ = 500 × 8 = **4,000**

Jaanch: 500 → 1,000 → 2,000 → **4,000** ✅

Yahan period "saal" nahi, "ghanta" hai. Formula ko isse fark nahi padta, bas rate aur period ki unit milni chahiye.

### Example 3: Paudhe ki height

Ek paudha 40 cm ka hai aur **har hafte 10%** lamba hota hai. 2 hafte baad height?

V = 40 × (1.10)² = 40 × 1.21 = **48.4 cm**

Jaanch: 40 + 4 = 44 cm, phir 44 + 4.4 = **48.4 cm** ✅

---

## Part B: Depreciation (ghatna)

Ab ulta: jab value har saal r% **ghat** rahi hai, to har saal ke baad uski (100 − r)% value bachti hai. Isliye 1 + r/100 ki jagah **1 − r/100** aata hai.

**V = P(1 − r/100)ⁿ**

Sirf ek sign ka fark hai: growth mein **+**, depreciation mein **−**.

### Example 4: Machine ki keemat

Ek machine ki keemat ₹50,000 hai aur wo **10% saal** depreciate hoti hai. 2 saal baad?

V = 50,000 × (1 − 10/100)² = 50,000 × (0.9)² = 50,000 × 0.81 = **₹40,500**

Jaanch:
- 1 saal baad: 50,000 − 5,000 = 45,000
- 2 saal baad: 45,000 − 4,500 = **₹40,500** ✅

### Example 5: Shekhar chacha ka scooter

₹80,000 ka scooter, 20% saal depreciation, 3 saal baad?

V = 80,000 × (1 − 20/100)³ = 80,000 × (0.8)³ = 80,000 × 0.512 = **₹40,960**

Jaanch:
- 1 saal baad: 80,000 − 16,000 = 64,000
- 2 saal baad: 64,000 − 12,800 = 51,200
- 3 saal baad: 51,200 − 10,240 = **₹40,960** ✅

Chacha ne socha tha ki 3 saal mein 20% × 3 = 60% ghatega, yaani ₹32,000 bachega. Par asal mein ₹40,960 bacha. Kyun? Kyunki har saal ka 20% **ghati hui** keemat ka hai, to ghatav har saal chhota hota jaata hai (16,000, 12,800, 10,240).

---

## Part C: Ulte sawaal (reverse problems)

### Pehle ki value nikalna

Kabhi kabhi **aaj** ki value di hoti hai aur poocha jata hai ki shuru mein kitni thi. Formula wahi rehta hai, bas P ko unknown maan lo.

### Example 6: Aabaadi pehle kitni thi?

Ek gaon ki aabaadi aaj 13,520 hai. Wo 4% saal badh rahi hai. 2 saal pehle kitni thi?

13,520 = P × (1.04)² = P × 1.0816

P = 13,520 ÷ 1.0816 = **12,500**

Jaanch: 12,500 → 13,000 → **13,520** ✅

### Example 7: Machine pehle kitni ki thi?

Ek machine ki keemat aaj ₹72,900 hai, jo 10% saal ghat rahi hai. 2 saal pehle kitni thi?

72,900 = P × (0.9)² = P × 0.81

P = 72,900 ÷ 0.81 = **₹90,000**

Jaanch: 90,000 → 81,000 → **72,900** ✅

### Rate nikalna

### Example 8: Growth rate

₹25,000 ki value 2 saal mein ₹28,090 ho gayi. Rate kya tha?

28,090 = 25,000 × (1 + r/100)²

(1 + r/100)² = 28,090 ÷ 25,000 = 1.1236

1 + r/100 = 1.06 (kyunki 1.06 × 1.06 = 1.1236), to r = **6%**

Jaanch: 25,000 → 26,500 → **28,090** ✅

### Example 9: Depreciation rate

₹60,000 ki machine 2 saal mein ₹48,600 ki reh gayi. Rate?

(1 − r/100)² = 48,600 ÷ 60,000 = 0.81

1 − r/100 = 0.9, to r = **10%**

Jaanch: 60,000 → 54,000 → **48,600** ✅

(Yahan ratio saaf perfect square nikalta hai. Mushkil roots wale sawaal aage ki class mein aayenge.)

---

## Part D: Alag alag saal mein alag rate (growth aur decline mix)

Topic 4 mein dekha tha ki har saal ka factor alag se guna kar dete hain. Yahan factor kabhi 1 + r/100 aur kabhi 1 − r/100 ho sakta hai.

### Example 10: Pehle badha, phir ghata

Ek kasbe ki aabaadi 50,000 hai. Pehle saal 10% badhi, doosre saal 5% ghati. 2 saal baad?

V = 50,000 × (1 + 10/100) × (1 − 5/100) = 50,000 × 1.10 × 0.95 = **52,250**

Jaanch: 50,000 → 55,000 → 55,000 − 2,750 = **52,250** ✅

### Example 11: 10% badhna, phir 10% ghatna

Ek gaon ki aabaadi 10,000 hai. Pehle saal 10% badhi, doosre saal 10% ghati.

V = 10,000 × 1.10 × 0.90 = 10,000 × 0.99 = **9,900**

Jaanch: 10,000 → 11,000 → 11,000 − 1,100 = **9,900** ✅

Aabaadi shuru ke 10,000 par **wapas nahi aayi**; 100 kam reh gayi, yaani **net 1% decrease**. Wajah: badhne ka 10% 10,000 ka tha (1,000), par ghatne ka 10% **bade 11,000** ka tha (1,100). Ghatne wala hissa bada pada.

Isi tarah 20% badhna aur 20% ghatna: 1.2 × 0.8 = 0.96, yaani net 4% decrease.

---

## Part E: Real life mein kahan dikhta hai

- **Inflation:** Ek thali ₹100 ki hai aur daam 8% saal badhte hain. 2 saal baad: 100 × (1.08)² = 100 × 1.1664 = **₹116.64**. Isliye aaj ke ₹100 kal utne nahi kharid paate.
- **Phone ya car ki value:** Naya phone ₹30,000 ka lo aur wo 20% saal ghate, to 2 saal baad 30,000 × 0.64 = ₹19,200 ka bachega. Second-hand bazaar isi hisaab se daam lagata hai.
- **Bacteria, population:** Sehat aur sheher ki planning isi se hoti hai.

### Growth rate aur decline rate: ek hi cheez ke do roop

Dono mein formula ek jaisa hai, bas sign alag. Fark dhyan se samajhna:
- Growth rate r% = factor **1 + r/100** (1 se bada)
- Decline rate r% = factor **1 − r/100** (1 se chhota)

Factor 1 se bada ho to cheez badhti hai, 1 se chhota ho to ghatti hai. Ek nazar mein factor dekhkar pata chal jata hai.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Depreciation mein + lagana**
₹50,000, 10% depreciation, 2 saal. Agar (1 + 0.10)² lagaya to 60,500 aaya, jo **badhi hui** keemat hai. Sahi: (1 − 0.10)² se **40,500**.

**Galti 2: 10% badhna aur phir 10% ghatna matlab wapas wahin**
Example 11 mein aabaadi 10,000 se 9,900 ho gayi. Dono % ka base alag hai (10,000 aur 11,000), isliye wo ek doosre ko cancel nahi karte.

**Galti 3: n saal mein n × r% ghatna maan lena**
Scooter par 20% × 3 = 60% ghatna nahi hua. ₹80,000 ka 60% = 48,000 ghatta to ₹32,000 bachta. Asal mein ₹40,960 bacha.

**Galti 4: Beech mein round kar dena**
Maan lo 2,010 ki aabaadi 5% badhti hai, 2 saal ke liye.
- Sahi: 2,010 × 1.1025 = **2,216.025**, to ant mein round karke **2,216**.
- Galat: pehle saal ke baad 2,110.5 ko round karke 2,111 kar diya, phir 2,111 × 1.05 = 2,216.55 ≈ 2,217. **Ek ka fark!**

Hamesha **poori calculation** karo, round sirf **aakhir mein**.

Log aadhe nahi hote, to final answer ko nearest whole number mein likho.

**Galti 5: Ulte sawaal mein guna kar dena**
"Aaj 13,520 hai" ka matlab 13,520 = P × 1.0816. P nikalne ke liye **bhaag** do, guna nahi.

---

## Quick Recap

- **Growth:** V = P(1 + r/100)ⁿ. CI wala hi idea, bas paise ki jagah koi bhi cheez.
- **Depreciation:** V = P(1 − r/100)ⁿ. Sirf sign badalta hai.
- **Reverse:** shuru ki value P = V ÷ (1 ± r/100)ⁿ.
- **Rate nikalna:** V/P ratio nikalo, uska root lo, aur 1 se ghatao/badhao.
- **Alag alag saal ke rate:** har saal ka factor alag guna karo.
- **10% up phir 10% down** = 1.1 × 0.9 = 0.99, yaani **net 1% decrease**. Wapas wahin nahi aate.
- **Inflation** ek tarah ka growth hai; phone/car ki value depreciation.
- Beech mein round mat karo.

---

## Practice Questions

1. The population of a village is 15,000 and it grows at 4% per year. Find the population after 2 years.

2. A car bought for ₹6,00,000 loses 15% of its value every year. Find its value after 2 years.

3. A dish has 1,000 bacteria and the number doubles every hour. How many bacteria are there after 4 hours?

4. The population of a town is 13,310 now, after growing at 10% per year for 3 years. What was it 3 years ago?

5. A machine bought for ₹50,000 is worth ₹32,000 after 2 years. Find the yearly rate of depreciation.

6. The population of a town is 40,000. In the first year it increases by 20%, and in the second year it decreases by 10%. Find the population at the end of 2 years.

7. Say whether each statement is true or false, giving a reason.
   (a) If a value rises by 20% and then falls by 20%, it returns to the starting value.
   (b) A value that depreciates at 10% per year loses exactly 20% of the original in 2 years.
   (c) A plant 10 cm tall whose height doubles every week is 80 cm tall after 3 weeks.

8. A phone costing ₹30,000 loses 20% of its value every year. After how many whole years will its value first fall below half of the original price?

9. A tea cup costs ₹50 and prices rise by 5% per year. Find the price after 2 years, rounded to the nearest paisa.

10. A village had 2,010 people. It grows at 5% per year. Why is it better to find the 2-year population as 2,010 × 1.1025 than to round after the first year? Compute both ways and compare.

### Answers

1. V = 15,000 × (1.04)² = 15,000 × 1.0816 = **16,224**
   Jaanch: 15,000 → 15,600 → 15,600 + 624 = **16,224** ✅

2. V = 6,00,000 × (0.85)² = 6,00,000 × 0.7225 = **₹4,33,500**
   Jaanch: 6,00,000 → 5,10,000 → 5,10,000 − 76,500 = **4,33,500** ✅

3. V = 1,000 × 2⁴ = 1,000 × 16 = **16,000**
   Jaanch: 1,000 → 2,000 → 4,000 → 8,000 → **16,000** ✅

4. 13,310 = P × (1.1)³ = P × 1.331, to P = 13,310 ÷ 1.331 = **10,000**
   Jaanch: 10,000 → 11,000 → 12,100 → **13,310** ✅

5. (1 − r/100)² = 32,000 ÷ 50,000 = 0.64, to 1 − r/100 = 0.8 aur **r = 20%**
   Jaanch: 50,000 → 40,000 → **32,000** ✅

6. V = 40,000 × 1.2 × 0.9 = 40,000 × 1.08 = **43,200**
   Jaanch: 40,000 → 48,000 → 48,000 − 4,800 = **43,200** ✅

7. (a) **False** ❌. 1.2 × 0.8 = 0.96, yaani 4% kam. Jaise 100 → 120 → 96.
   (b) **False** ❌. 100 → 90 → 81, yaani 19% hi ghata, 20% nahi, kyunki doosre saal ka ghatav chhota (9) tha.
   (c) **True** ✅. 10 → 20 → 40 → 80 cm.

8. Aadha = ₹15,000. Saal dar saal: 30,000 → 24,000 → 19,200 → 15,360 → 12,288.
   3 saal baad ₹15,360 hai, jo abhi bhi 15,000 se zyada hai. 4 saal baad ₹12,288 hai, jo 15,000 se kam hai. To **4 saal** ke baad.

9. V = 50 × (1.05)² = 50 × 1.1025 = **₹55.125 ≈ ₹55.13**
   Jaanch: 50 → 52.50 → 52.50 + 2.625 = 55.125 ✅

10. Sahi tareeka: 2,010 × 1.1025 = 2,216.025, to **2,216**.
    Beech mein round: 2,010 × 1.05 = 2,110.5 ≈ 2,111, phir 2,111 × 1.05 = 2,216.55 ≈ **2,217**.
    Dono mein 1 ka fark aa gaya, kyunki beech wale rounding ki chhoti galti agle step mein bhi aage badh gayi. Isliye round hamesha aakhir mein.

---

Ab aap jaante ho ki Compound Interest sirf bank ki baat nahi hai: jahan bhi koi cheez apni hi current value ke hisaab se badhti ya ghatti hai, wahan ye idea kaam karta hai. Aap ye kar sakte ho!

---

# Chapter Wrap-up: Compound Interest

| Topic | Kya seekha | Sabse kaam ki baat |
|---|---|---|
| 1. SI aur CI ka idea | Simple Interest ka recap, aur CI mein byaaj par bhi byaaj lagna | CI mein har saal ka byaaj pichle saal ke amount par lagta hai |
| 2. Saal dar saal tareeka | Har saal ka byaaj nikalkar principal mein jodte jaana, 2 saal mein CI − SI, ulte sawaal, loan ka part payment | Chhote n ke liye sabse saaf; part payment ke baad baaki rakam hi agle saal ka principal |
| 3. Formula A = P(1 + r/100)ⁿ | Seedha formula, CI = A − P, formula se P, r ya n nikalna, doubling | Bade n ke liye time bachata hai; n saal mein 2 guna to 2n mein 4 guna |
| 4. Half-yearly, quarterly aur alag rates | Rate aur period ko compounding ke hisaab se badalna, har saal ka alag rate, fractional time (jaise 2½ saal) | Half-yearly: r/2 aur 2n; quarterly: r/4 aur 4n |
| 5. Growth aur Depreciation | Aabaadi, bacteria, scooter ki keemat par wahi formula, ulte sawaal | Growth mein +, depreciation mein −; 10% up aur 10% down wapas nahi laata |

### All formulas

| Kya | Formula |
|---|---|
| Simple Interest | SI = (P × R × T) / 100 |
| CI − SI (sirf 2 saal) | P(r/100)² |
| Compound Interest | CI = A − P |
| Amount (yearly) | A = P(1 + r/100)ⁿ |
| Half-yearly | A = P(1 + r/200)²ⁿ |
| Quarterly | A = P(1 + r/400)⁴ⁿ |
| Alag alag saal ke rate | A = P(1 + r₁/100)(1 + r₂/100)... |
| Fractional time (saalana, jaise 2½ saal) | Poore saal tak A = P(1 + r/100)ⁿ, bache aadhe saal ka us rakam par SI |
| Growth | V = P(1 + r/100)ⁿ |
| Depreciation | V = P(1 − r/100)ⁿ |
| Shuru ki value nikalna | P = V ÷ (1 ± r/100)ⁿ |

---

Paise ho ya aabaadi, bacteria ho ya scooter, jo cheez apni hi value ke hisaab se badhe ya ghate, uska hisaab ab aapke haath mein hai.
