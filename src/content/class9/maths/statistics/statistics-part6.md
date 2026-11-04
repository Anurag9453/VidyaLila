# Chapter: Statistics (Part 6)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [statistics-part5.md](statistics-part5.md) se aage chalti hai.** (Chapter ki shuruaat [statistics.md](statistics.md) se hoti hai.)
> **Topics covered in this file:**
> 6. Median aur Mode

---

# Topic 6: Median aur Mode

Pichle topic mein humne **mean** (average) nikalna seekha: saari values jodo aur ginti se bhaag do, aur frequency table ho to Σfx/Σf. Wahin ek khatarnaak baat bhi dikhi thi: agar data mein **ek bahut badi ya bahut chhoti value** ho (outlier), to wo akeli mean ko apni taraf kheench leti hai. Yaad hai pocket money wala example? Paanch doston ka mean ₹100 tha, par ₹1100 paane wala ek dost judte hi mean lagbhag ₹267 ho gaya. Phir mean "beech ki" value nahi rehta.

To sawaal ye hai: jab ek value pure data ki tasveer bigaad de, tab "beech" ya "aam" value kaise dhundhein? Iske do aur tareeke hain: **median** aur **mode**. Is topic mein yahi do seekhenge, aur aakhir mein tay karenge ki teeno mein se kab kaunsa use karna chahiye.

---

## Rangeela Printing Press ki naukri

Deepak ko naukri chahiye thi. Akhbaar mein ek ad dikha:

> **"Rangeela Printing Press: hamare yahan average salary ₹55,700 mahina!"**

Deepak khush ho gaya. Interview mein pahuncha to wahan kaam karne wali Shabnam didi se poocha, "Yahan sach mein itni salary milti hai?"

Shabnam didi hans padi. "Chalo, sabki salary dikhati hoon." Unhone register khola. Yahan 10 log kaam karte hain (salary hazaar rupaye mein):

| Kaun | Salary (₹ hazaar) |
|---|---|
| 9 karmchari | 12, 14, 15, 15, 16, 18, 20, 22, 25 |
| Maalik | 400 |

Ab mean nikalo (Topic 5 wala tareeka):
- Sabka jod = 12 + 14 + 15 + 15 + 16 + 18 + 20 + 22 + 25 + 400 = **557**
- Mean = 557 ÷ 10 = **55.7**, yaani ₹55,700

Ad jhooth nahi bol raha tha. Par **10 mein se 9 log ₹25,000 ya usse kam kamate hain!** Sirf maalik ki ₹4 lakh ki salary ne average ko upar kheench liya.

Shabnam didi boli: "Agar sach jaanna hai, to saari salaries ko chhoti se badi line mein lagao aur **beech wala** dekho. Aur ye bhi dekho ki **sabse zyada logon** ko kitna milta hai."

- Line mein lagao: 12, 14, 15, 15, **16, 18**, 20, 22, 25, 400. Beech mein do values hain, 16 aur 18. Unka beech = **17**, yaani ₹17,000.
- Sabse zyada baar aane wali salary: **15** (do logon ki), yaani ₹15,000.

Deepak samajh gaya ki is office mein aam taur par ₹15,000 se ₹17,000 milte hain, ₹55,700 nahi. Beech wali value ko **median** kehte hain, aur sabse zyada baar aane wali ko **mode**.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Median** | Data ko chhote se bade kram mein lagao, to theek beech wali value | 3, 5, **7**, 9, 11 ka median 7 |
| **Mode** | Jo value sabse zyada baar aaye | 2, 4, **4**, 4, 6 ka mode 4 |
| **Ascending order** | Chhote se bade ki taraf kram | 2, 5, 8, 11 |
| **Outlier** | Baaki data se bahut alag (bahut badi ya chhoti) value (Topic 5 wala) | Salary wale data mein 400 |
| **Bimodal** | Jab do values barabar, sabse zyada baar aayen | 3, 3, 5, 7, 7 (mode 3 aur 7) |
| **Cumulative frequency (cf)** | Ab tak ki frequencies ka chalta hua jod (Topic 2 wala) | f: 2, 3, 5 → cf: 2, 5, 10 |

---

## Part A: Kachche (raw) data ka median

### Pehla niyam: hamesha pehle kram mein lagao

Median ka matlab hai "beech wali value". Par beech tabhi pata chalega jab values **chhote se bade kram** (ascending order) mein lagi hon. Bina kram ke beech dekhna bilkul bekaar hai.

### Kitni values hain, uske hisaab se

Maan lo n values hain.

- **n odd ho:** median = **((n + 1)/2)va** value
- **n even ho:** beech mein do values aati hain, **(n/2)vi** aur **(n/2 + 1)vi**. Median = in dono ka **average**.

### Example 1 (n odd): line mein khade bachche

7 bachchon ki height (cm): 142, 135, 150, 138, 145, 140, 148

Kram mein lagao: 135, 138, 140, **142**, 145, 148, 150

n = 7 (odd), to (7 + 1)/2 = **4thi** value.

**Median = 142 cm**

Jaanch: 142 se chhote 3 bachche (135, 138, 140), aur bade bhi 3 (145, 148, 150). Theek beech mein ✅

### Example 2 (n even): hafte mein khel ke ghante

8 doston ne pichhle hafte itne ghante cricket khela: 3, 7, 2, 5, 9, 4, 6, 8

Kram mein: 2, 3, 4, **5, 6**, 7, 8, 9

n = 8 (even). Beech ki values: (8/2) = **4thi** aur (8/2 + 1) = **5vi**, yaani 5 aur 6.

**Median = (5 + 6)/2 = 5.5**

Dhyan do: median **5.5** hai, jo data mein kahin hai hi nahi. Even n mein aisa ho sakta hai, aur ye bilkul theek hai.

### Example 3: bina kram ke galti

Data: 9, 2, 7, 4, 5

Agar seedha beech wali value utha lo, to **7** milega. Ye **galat** hai.

Kram mein: 2, 4, **5**, 7, 9. **Median = 5.**

### Example 4: dohraayi hui values ke saath

Data (n = 9): 6, 3, 6, 8, 3, 6, 10, 2, 5

Kram mein: 2, 3, 3, 5, **6**, 6, 6, 8, 10

(9 + 1)/2 = 5vi value. **Median = 6**

Repeat hone wali values ko **har baar** likhna hai, ek baar nahi.

### Example 5: decimal median

6 din ka dopahar ka temperature (°C): 31, 28, 35, 30, 29, 33

Kram mein: 28, 29, **30, 31**, 33, 35

Median = (30 + 31)/2 = **30.5 °C**

---

## Part B: Frequency table se median

Jab data bahut bada ho, to wo frequency table mein aata hai (Topic 2 mein bana tha). Yahan har value ko line mein likhna mushkil hai. Isliye **cumulative frequency (cf)** ka sahara lete hain, jo Topic 2 mein dekha tha.

### Tareeka

1. Table mein **cf ka column** banao (frequencies ko jodte jao).
2. N = kul frequency (aakhri cf).
3. Median ki position nikalo:
   - N odd: **((N + 1)/2)vi** value
   - N even: **(N/2)vi** aur **(N/2 + 1)vi** values, phir dono ka average
4. Upar se neeche dekho: **pehli cf jo position ke barabar ya usse badi ho**, usi row ki value median hai.

cf asal mein batata hai "is value tak kitne log aa gaye". Jaise cf = 11 ka matlab hai ki line mein 11ve number tak ke log is value tak aa chuke hain.

### Example 6 (N odd): mohalle ke gharon mein log

| Ghar mein log (x) | Gharon ki ginti (f) | cf |
|---|---|---|
| 2 | 4 | 4 |
| 3 | 7 | 11 |
| 4 | 10 | 21 |
| 5 | 6 | 27 |
| 6 | 3 | 30 |
| 7 | 1 | 31 |

N = 31 (odd). Position = (31 + 1)/2 = **16vi**.

cf column dekho: 4 (16 se chhota), 11 (abhi bhi chhota), **21** (16 se bada). Pehli baar 21 par pahunche, to 16va ghar x = 4 wali row mein hai.

- 1 se 4 tak ke ghar: 2 log
- 5 se 11 tak: 3 log
- **12 se 21 tak: 4 log** (16 isi range mein hai)

**Median = 4 log**

### Example 7 (N even): library jaane ki ginti

Ek class ke bachchon ne mahine mein library itni baar visit ki:

| Visits (x) | Bachche (f) | cf |
|---|---|---|
| 0 | 3 | 3 |
| 1 | 5 | 8 |
| 2 | 7 | 15 |
| 3 | 9 | 24 |
| 4 | 4 | 28 |
| 5 | 2 | 30 |

N = 30 (even). Beech ki positions: 30/2 = **15vi** aur **16vi**.

- 15vi value: cf 15 theek 15 par khatam hota hai, to 15va bachcha **x = 2** wali row mein hai (9 se 15 tak).
- 16vi value: x = 2 ki row 15 par khatam ho gayi. 16va bachcha agli row **x = 3** mein hai (16 se 24 tak).

**Median = (2 + 3)/2 = 2.5**

Yahi wo jagah hai jahan bachche sabse zyada galti karte hain. Dono positions **alag rows** mein ho sakti hain, isliye dono ko alag se dhundho.

---

## Part C: Mode, sabse zyada baar aane wali value

Mode sabse aasan hai: **jo value sabse zyada baar aaye, wahi mode.**

### Example 8: kachcha data

Data: 4, 6, 2, 6, 8, 6, 3, 4

- 6 teen baar aaya, 4 do baar, baaki ek ek baar.
- **Mode = 6**

### Example 9: do mode (bimodal)

Data: 3, 5, 5, 7, 8, 8, 9

5 aur 8 dono do do baar aaye. **Mode = 5 aur 8** (bimodal)

### Example 10: koi mode nahi

Data: 2, 4, 7, 9. Har value ek hi baar hai. **Is data ka koi mode nahi.**

### Example 11: frequency table se mode

Ek class mein bachchon ke bhai-behen ki ginti:

| Bhai-behen (x) | Bachche (f) |
|---|---|
| 0 | 5 |
| 1 | **14** |
| 2 | 9 |
| 3 | 3 |
| 4 | 1 |

Sabse badi frequency 14 hai, jo **x = 1** ki hai.

**Mode = 1** (14 nahi!). Mode hamesha **value** hota hai, uski frequency nahi.

### Example 12: jab data numbers mein na ho

Class 9 ke bachchon se poocha gaya ki school bag kis rang ka pasand hai:

| Rang | Bachche |
|---|---|
| Neela | 12 |
| Kaala | 15 |
| Laal | 7 |
| Hara | 6 |

**Mode = Kaala**

Yahan **mean ya median nikal hi nahi sakte**. "Neela + Laal" ka koi matlab nahi, aur rangon ka chhote se bada kram bhi nahi hota. Aise data mein sirf **mode** kaam aata hai. Isiliye dukaandaar mode ke sabse bade fan hote hain: jo cheez sabse zyada bikti hai, wahi zyada mangwao.

---

## Part D: Mean, Median ya Mode, kab kaunsa?

### Comparison table

| | Mean | Median | Mode |
|---|---|---|---|
| **Kya hai** | Sab jodo ÷ ginti | Kram mein lagane par beech wali value | Sabse zyada baar aane wali value |
| **Outlier ka asar** | **Bahut** (kheench leta hai) | Lagbhag **nahi** | **Nahi** |
| **Kab use karein** | Values ek jaisi hon, outlier na ho (jaise class ke marks, roz ka paani) | Outlier ho (salary, ghar ki keemat) | Sabse popular cheez (rang, size, brand) |
| **Non-number data** | Nahi chalta | Nahi chalta | **Chalta hai** |
| **Hamesha ek hi?** | Haan | Haan | Ek, do, ya ek bhi nahi |

### Rangeela Press ki kahani dobara

| Measure | Value | Sach batata hai? |
|---|---|---|
| Mean | ₹55,700 | Nahi, maalik ne kheench liya |
| Median | ₹17,000 | Haan, aam karmchari ke kareeb |
| Mode | ₹15,000 | Haan, sabse common salary |

Isiliye log jab "aam aadmi ki kamaai" ki baat karte hain, to aksar **median** dekhte hain, mean nahi.

### Example 13: value jodne ya hatane par median

Data: 4, 7, 9, 12, 15. Median = **9** (5 values, teesri).

- **20 jod do:** 4, 7, **9, 12**, 15, 20 → median = (9 + 12)/2 = **10.5**
- **Original data mein se 4 hata do:** 7, **9, 12**, 15 → median = (9 + 12)/2 = **10.5**
- **15 ki jagah 150 kar do:** 4, 7, **9**, 12, 150 → median abhi bhi **9**. Par mean dekho:
  - Pehle: (4 + 7 + 9 + 12 + 15)/5 = 47/5 = **9.4**
  - Baad mein: (4 + 7 + 9 + 12 + 150)/5 = 182/5 = **36.4**

Ek badi value ne mean ko 9.4 se 36.4 kar diya, par median hila tak nahi. Yahi median ki taaqat hai.

### Example 14: median diya hai, x nikalo

Ye data ascending order mein hai: **10, 12, 14, x − 2, x + 2, 25, 28, 30**. Median **20** hai. x nikalo.

n = 8 (even), to median = 4thi aur 5vi value ka average.

Median = [(x − 2) + (x + 2)]/2 = 2x/2 = **x**

x = 20.

Jaanch: data 10, 12, 14, 18, 22, 25, 28, 30 ban jata hai. Kram sahi hai, aur (18 + 22)/2 = 20 ✅

### Example 15: odd n ke saath

Ascending data: 5, 7, x, 11, 13. Median = 9.

n = 5, median = 3rd value = x. To **x = 9** (aur kram 7 ≤ 9 ≤ 11 bhi sahi hai ✅).

### Example 16

Ascending data: 2, 4, 6, x, 10, 12. Median = 7.

n = 6, median = (3rd + 4th)/2 = (6 + x)/2 = 7, to 6 + x = 14, aur **x = 8**.

Jaanch: 2, 4, 6, 8, 10, 12 → (6 + 8)/2 = 7 ✅

### Aage ki classes mein

- **Grouped data (class intervals, jaise 10–20, 20–30) ka median** ek formula se nikalta hai. Ye aage ki class mein aayega.
- Mean, median aur mode ke beech ek andaaze wala rishta hota hai: **mode ≈ 3 median − 2 mean**. Ye bhi aage ki class ka topic hai.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Kram mein lagaye bina median**
9, 2, 7, 4, 5 ka median 7 nahi, **5** hai. Pehle 2, 4, 5, 7, 9 likho.

**Galti 2: Even n mein ek hi value utha lena**
2, 3, 4, 5, 6, 7, 8, 9 ka median 5 ya 6 nahi, **(5 + 6)/2 = 5.5** hai.

**Galti 3: Position ko hi median samajh lena**
n = 7 mein (7 + 1)/2 = 4 aata hai. Iska matlab "4thi value" hai, median 4 nahi.

**Galti 4: Frequency ko mode bata dena**
Example 11 mein sabse badi frequency 14 hai, par **mode 1 hai** (value).

**Galti 5: cf ka galat istemaal**
Example 7 mein 15vi aur 16vi values **alag rows** mein thin (2 aur 3). Ek ko dekh kar dono ko same maan lena galat hai.

**Galti 6: Repeat values ko ek hi baar likhna**
6, 3, 6, 8, 3, 6 ... mein 6 ko teen baar likhna hai. Warna kram aur beech dono badal jayenge.

**Galti 7: Har data ka mode hona maan lena**
2, 4, 7, 9 ka koi mode nahi hai.

---

## Quick Recap

- **Median** = kram mein lagane par beech ki value.
  - n odd: ((n + 1)/2)vi value
  - n even: (n/2)vi aur (n/2 + 1)vi ka average
- **Frequency table se median:** cf banao, position nikalo, aur pehli cf jo position ke barabar ya badi ho, wahi row.
- **Mode** = sabse zyada baar aane wali **value**. Ek, do (bimodal) ya ek bhi nahi ho sakta hai.
- **Outlier** mean ko kheench leta hai, par median aur mode par lagbhag asar nahi hota.
- **Non-number data** (rang, brand) mein sirf mode kaam karta hai.
- **Kab kaunsa:** sab values ek jaisi → mean; outlier ho → median; sabse popular → mode.

---

## Practice Questions

1. Find the median of: 23, 18, 30, 27, 19, 25, 21.

2. Find the median of: 45, 32, 50, 38, 41, 36.

3. Find the mode of: 7, 3, 9, 7, 2, 3, 7, 5, 3, 8.

4. Find the median and the mode of the following data:

   | x | 10 | 20 | 30 | 40 | 50 |
   |---|---|---|---|---|---|
   | f | 2 | 5 | 9 | 6 | 3 |

5. Find the median of the following data:

   | x | 1 | 2 | 3 | 4 | 5 | 6 |
   |---|---|---|---|---|---|---|
   | f | 4 | 6 | 5 | 7 | 2 | 6 |

6. The following observations are in ascending order: 11, 13, 15, x, x + 4, 24, 26, 30. If the median is 18, find x.

7. A tea stall's sales (in ₹) on five days were 200, 250, 300, 350 and 2400 (the last day was a local fair). Find the mean and the median. Which one better represents a typical day's sales, and why?

8. The median of 7 observations is 15. If the largest observation is increased by 10, what is the new median?

9. State whether each statement is true or false. Give a reason.
   (a) The median of 2, 3, 10 changes if 10 is replaced by 100.
   (b) A set of data can have more than one mode.
   (c) In a frequency table, the mode is the highest frequency.
   (d) We can find the median of the favourite colours of students.

### Answers

1. Kram mein: 18, 19, 21, **23**, 25, 27, 30. n = 7, to 4thi value. **Median = 23**

2. Kram mein: 32, 36, **38, 41**, 45, 50. n = 6, to 3rd aur 4th ka average. **Median = (38 + 41)/2 = 39.5**

3. 7 teen baar, 3 bhi teen baar, baaki kam. **Mode = 3 aur 7** (bimodal)

4. cf: 2, 7, 16, 22, 25. N = 25 (odd), position = 13vi. Pehli cf ≥ 13 hai 16, jo x = 30 ki hai. **Median = 30**
   Sabse badi frequency 9 hai, jo x = 30 ki hai. **Mode = 30**

5. cf: 4, 10, 15, 22, 24, 30. N = 30 (even), positions 15vi aur 16vi.
   - 15vi: cf 15 par x = 3 ki row khatam hoti hai, to 15vi = **3**
   - 16vi: agli row x = 4 (16 se 22), to 16vi = **4**
   - **Median = (3 + 4)/2 = 3.5**

6. n = 8, median = (4th + 5th)/2 = [x + (x + 4)]/2 = x + 2 = 18, to **x = 16**.
   Jaanch: 11, 13, 15, 16, 20, 24, 26, 30 → (16 + 20)/2 = 18 ✅

7. Mean = (200 + 250 + 300 + 350 + 2400)/5 = 3500/5 = **₹700**
   Median = 3rd value = **₹300**
   **Median behtar hai.** Paanch mein se chaar din bikri ₹350 ya usse kam rahi. Akele mele wale din ke ₹2400 ne mean ko ₹700 tak kheench diya, jo kisi bhi aam din ki bikri jaisa nahi hai.

8. Median = 4thi value (kram mein). Sabse badi value 7th position par hai, aur use badhane se 4thi value nahi badalti. **Naya median = 15**

9. (a) **False** ❌. Median beech wali value 3 hai. 10 ko 100 karne se bhi beech mein 3 hi rehta hai.
   (b) **True** ✅. Jaise 3, 3, 5, 7, 7 mein mode 3 aur 7 dono hain.
   (c) **False** ❌. Mode wo **value** hai jiski frequency sabse zyada ho, frequency khud nahi.
   (d) **False** ❌. Rangon ka chhote se bada kram nahi hota, isliye median nahi nikal sakte. Yahan sirf mode chalega.

---

# Chapter Wrap-up: Statistics

| Topic | Kya seekha | Sabse kaam ki baat |
|---|---|---|
| 1. Data aur Statistics ka parichay | Data kya hai, primary aur secondary data, kaise ikattha karte hain, raw data, range | Range = sabse badi value − sabse chhoti value |
| 2. Data ko table mein sajana | Tally marks, ungrouped aur grouped frequency table, class interval, class mark, inclusive aur exclusive classes, cumulative frequency | Bada data table mein aate hi samajh aane lagta hai |
| 3. Bar graph aur Histogram | Alag cheezon ke liye bar graph, class intervals ke liye histogram (alag chaudai par height adjust karna) | Histogram mein bars ke beech gap nahi hota |
| 4. Frequency Polygon | Class mark par (class mark, frequency) points, dono kinaron par zero-frequency class, seedhi lines se joda graph | Do data sets ko ek saath compare karne ke liye best |
| 5. Mean | Σx/n aur Σfx/Σf, mean ki properties, outlier ka asar | Ek badi value mean ko kheench leti hai |
| 6. Median aur Mode | Beech ki value, sabse zyada baar aane wali value, cf se median | Outlier ho to median, sabse popular chahiye to mode |

### Kaunsa graph kab?

| Data kaisa hai | Graph |
|---|---|
| Alag alag categories (rang, khel, mahine) | **Bar graph** |
| Class intervals wala continuous data (height 140–150, 150–160) | **Histogram** |
| Do groups ko ek graph par compare karna, ya data ki shakal dekhni | **Frequency polygon** |

### Kaunsa average kab?

| Sthiti | Average |
|---|---|
| Values lagbhag ek jaisi, koi outlier nahi | **Mean** |
| Koi bahut badi ya chhoti value hai (salary, keemat) | **Median** |
| Sabse popular cheez chahiye, ya data numbers mein nahi | **Mode** |

---

Deepak ki tarah agli baar koi "average" ka number dikhaye, to ek pal ruk kar poochhna: kaunsa average, mean, median ya mode? Bas itna sawaal aapko bahut se bhram se bacha lega. Statistics ka asli kaam yahi hai: numbers ke peeche ka sach dekhna. Aap ye kar sakte ho!
