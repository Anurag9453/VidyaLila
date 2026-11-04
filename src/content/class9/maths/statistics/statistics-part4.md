# Chapter: Statistics (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [statistics-part3.md](statistics-part3.md) se aage chalti hai.** (Topic 1 [statistics.md](statistics.md) mein shuru hua tha.)
> **Topics covered in this file:**
> 4. Frequency Polygon

---

# Topic 4: Frequency Polygon

Topic 3 mein humne data ko **tasveer** mein badalna seekha: bar graph (Ritu didi ka baarish wala notice board), histogram (nursery ke paudhon ki lambai, jismein bars ek doosre se chipki hoti hain), aur alag-alag chaudai wali classes ke liye height ko adjust karna (jaise 0–20 wali class ki height 8 se 4 ho gayi thi). Histogram se ek nazar mein dikh jata hai ki kaunsi class mein sabse zyada log hain.

Par ek dikkat hai. Agar do alag data sets ko **ek hi graph par** compare karna ho, to do histograms ek doosre ke upar chadh jate hain aur kuch samajh nahi aata. Is topic mein hum ek aisi tasveer seekhenge jo histogram se hi nikalti hai, par usse kahin zyada saaf dikhati hai ki data ka **shape** kya hai: **frequency polygon**.

---

## Dr. Kavita ki clinic ki kahani

Ek chhote kasbe mein **Dr. Kavita** ki clinic hai. Har mahine wo ek register mein likhti hain ki kis umar ke kitne mareez aaye.

October ka hisaab ye tha:

| Umar (saal) | 10–20 | 20–30 | 30–40 | 40–50 | 50–60 | 60–70 |
|---|---|---|---|---|---|---|
| Mareez | 6 | 10 | 14 | 12 | 8 | 4 |

November mein thand aur flu aa gaya. Hisaab badal gaya:

| Umar (saal) | 10–20 | 20–30 | 30–40 | 40–50 | 50–60 | 60–70 |
|---|---|---|---|---|---|---|
| Mareez | 12 | 9 | 7 | 8 | 11 | 13 |

Dr. Kavita jaanna chahti thin: **"Flu mein kaun zyada beemar pada? Bachche aur bujurg, ya beech ki umar wale?"**

Unhone dono mahinon ke histogram banaye. Par jab dono ko ek hi kaagaz par banaya, to bars ek doosre ke upar aa gayi aur sab gadbad ho gaya. Tab unke compounder ne kaha: "Madam, har bar ke **sir ke beech ka point** le lijiye aur points ko line se jod dijiye. Do mahine, do alag rang ki lines. Turant pata chal jayega."

Yahi tareeka **frequency polygon** hai. Is topic ke end tak hum Dr. Kavita ke sawaal ka jawab bhi nikal lenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Frequency polygon** | Points ko seedhi lines se jod kar bani band shakal, jo dikhati hai ki data kaise faila hai | Dr. Kavita ke October ke mareezon ki line |
| **Class mark** | Class ka beech wala number (Topic 2 mein dekha tha): (lower limit + upper limit) ÷ 2 | 20–30 ka class mark 25 |
| **Zero-frequency class** (imaginary class) | Pehli class se pehle aur aakhri class ke baad ek "khayali" class, jiski frequency 0 maante hain | 0–10 aur 70–80, jab classes 10–70 tak hon |
| **Distribution ka shape** | Data kahan zyada, kahan kam hai, uski poori tasveer | October mein beech ki umar par "pahaad" |
| **Polygon** | Kai seedhi lines se bani band shakal | Triangle, quadrilateral, aur ye frequency polygon |

---

## Part A: Frequency polygon kya hai, aur kyun?

Frequency polygon ek **line graph** hai jismein:
- **x-axis** par har class ka **class mark** hota hai.
- **y-axis** par us class ki **frequency** hoti hai.
- Saare points ko **seedhi lines** (ruler se) joda jata hai.
- Dono kinaron par line ko **x-axis tak utaar kar band** kiya jata hai.

**Histogram ke hote hue iski zaroorat kyun?**

1. **Shape turant dikhta hai.** Line ka utaar-chadhaav ek nazar mein batata hai ki data kahan "pahaad" bana raha hai aur kahan "ghaati".
2. **Do ya zyada data sets ek hi graph par.** Do histograms ek doosre ko dhak lete hain, par do polygons (alag rang ya alag nishaan se) aaram se ek saath dikh jate hain.
3. **Banana aasan.** Histogram na bhi ho, to sirf table se bhi ban jata hai (Part C).

---

## Part B: Method 1: Histogram se frequency polygon

Pehle Dr. Kavita ke **October** ka histogram socho (Topic 3 wala tareeka: x-axis par classes, bars chipki hui).

**Steps:**
1. Har bar ke **upar wale kinare ka midpoint** nishaan karo. Ye point class mark ke theek upar, frequency ki unchai par hota hai.
2. Pehli class (10–20) se pehle ek **khayali class 0–10** maano, jiski frequency 0 hai. Uska midpoint x-axis par **5** par hoga.
3. Aakhri class (60–70) ke baad ek **khayali class 70–80** maano, frequency 0. Uska midpoint x-axis par **75** par hoga.
4. Saare midpoints ko **left se right, seedhi lines** se jodo.

### Points ki table (October)

| Class | Class mark (x) | Frequency (y) | Point |
|---|---|---|---|
| 0–10 (khayali) | (0 + 10)/2 = **5** | 0 | (5, 0) |
| 10–20 | (10 + 20)/2 = **15** | 6 | (15, 6) |
| 20–30 | (20 + 30)/2 = **25** | 10 | (25, 10) |
| 30–40 | (30 + 40)/2 = **35** | 14 | (35, 14) |
| 40–50 | (40 + 50)/2 = **45** | 12 | (45, 12) |
| 50–60 | (50 + 60)/2 = **55** | 8 | (55, 8) |
| 60–70 | (60 + 70)/2 = **65** | 4 | (65, 4) |
| 70–80 (khayali) | (70 + 80)/2 = **75** | 0 | (75, 0) |

**Jaanch:** Asli frequencies ka jod = 6 + 10 + 14 + 12 + 8 + 4 = **54** mareez. Khayali classes 0 jodti hain, to total wahi rehta hai. ✅

### Graph ka andaaza

Har ● ek point hai. Inhe ruler se left se right jodo. (Ye sketch sirf andaaza hai; graph paper par 1 cm = 10 saal aur 1 cm = 2 mareez jaisa scale lo.)

```
 f
14 |                    ●
12 |                          ●
10 |              ●
 8 |                                ●
 6 |        ●
 4 |                                      ●
 2 |
 0 +--●-----+-----+-----+-----+-----+-----+-----●--> umar (saal)
      5    15    25    35    45    55    65    75
```

**Kya dikha?** Line 15 se chadhti hai, **35 par sabse upar** (30–40 saal wale sabse zyada) aur phir utarti hai. Ek "pahaad" jaisa shape.

### Khayali classes kyun jodte hain?

Agar hum (15, 6) se shuru karke (65, 4) par ruk jayein, to polygon **hawa mein latka** rehta hai, band nahi hota. Dono kinaron ko x-axis tak utaarne se:
- shakal **band** ho jati hai (polygon ban jata hai), aur
- polygon ke neeche ka **area** histogram ke area ke **barabar** ho jata hai.

### Area barabar kyun? (halki si samajh)

Jab do padosi bars ke upar ke midpoints ko line se jodte hain, to wo line:
- ek bar ke kone se ek chhota **triangle kaat deti hai** (jo polygon ke bahar chala jata hai), aur
- padosi bar ke bahar ek **utna hi bada triangle jod deti hai** (jo polygon ke andar aa jata hai).

Ye dono triangles **congruent** hote hain (barabar chaudai ka aadha, aur unchaai ka wahi farak), isliye jo area gaya, utna hi wapas aa gaya. Isliye jab saari classes ki chaudai barabar ho, **polygon ke neeche ka area = histogram ka area**. (Congruent triangles ka idea [Congruence of Triangles](../congruence-of-triangles/congruence-of-triangles.md) chapter mein dekha tha.)

---

## Part C: Method 2: Bina histogram ke frequency polygon

Histogram banana zaroori nahi hai. Seedhe table se bhi polygon ban jata hai.

**Steps:**
1. Har class ka **class mark** nikalo.
2. Points **(class mark, frequency)** plot karo.
3. Pehle aur baad mein ek-ek khayali class ka class mark lo, frequency **0**.
4. Saare points ko left se right **seedhi lines** se jodo.

### Example 2: Mohalle ke gharon ka paani

Ek mohalle ke 50 gharon ne ek din mein kitna paani use kiya (litre mein):

| Paani (litre) | 200–300 | 300–400 | 400–500 | 500–600 | 600–700 |
|---|---|---|---|---|---|
| Ghar | 5 | 11 | 18 | 10 | 6 |

**Step 1: class marks**

| Class | Class mark | Frequency | Point |
|---|---|---|---|
| 100–200 (khayali) | (100 + 200)/2 = **150** | 0 | (150, 0) |
| 200–300 | (200 + 300)/2 = **250** | 5 | (250, 5) |
| 300–400 | (300 + 400)/2 = **350** | 11 | (350, 11) |
| 400–500 | (400 + 500)/2 = **450** | 18 | (450, 18) |
| 500–600 | (500 + 600)/2 = **550** | 10 | (550, 10) |
| 600–700 | (600 + 700)/2 = **650** | 6 | (650, 6) |
| 700–800 (khayali) | (700 + 800)/2 = **750** | 0 | (750, 0) |

**Jaanch:** 5 + 11 + 18 + 10 + 6 = **50** ghar. ✅

**Step 2:** In 7 points ko plot karke seedhi lines se jodo. Polygon (150, 0) se shuru hoga, **(450, 18) par sabse upar** jayega, aur (750, 0) par khatam hoga.

**Matlab:** Zyaadatar ghar ek din mein 400–500 litre ke aas-paas paani use karte hain.

**Dhyan do:** Khayali class ki chaudai bhi baaki classes jitni (100) li hai. Isliye pehla khayali point 250 − 100 = 150 par aur aakhri 650 + 100 = 750 par aaya.

### Example 3: Ulta sawaal: polygon se table banana

Ek frequency polygon ke points hain: (15, 0), (25, 4), (35, 9), (45, 6), (55, 0). Table banao.

- Class marks ke beech ka farak = 25 − 15 = **10**, to har class ki chaudai 10 hai.
- Pehla aur aakhri point (frequency 0) khayali classes hain.
- Class mark 25 ka matlab class **20–30** (25 − 5 se 25 + 5).

| Class | 20–30 | 30–40 | 40–50 |
|---|---|---|---|
| Frequency | 4 | 9 | 6 |

**Jaanch:** Class marks wapas nikalo: (20 + 30)/2 = 25 ✅, (30 + 40)/2 = 35 ✅, (40 + 50)/2 = 45 ✅.

---

## Part D: Do data sets ki tulna ek hi graph par

Ab Dr. Kavita ka asli sawaal. October aur November dono ke points:

| Class mark | 5 | 15 | 25 | 35 | 45 | 55 | 65 | 75 |
|---|---|---|---|---|---|---|---|---|
| October (●) | 0 | 6 | 10 | 14 | 12 | 8 | 4 | 0 |
| November (◆) | 0 | 12 | 9 | 7 | 8 | 11 | 13 | 0 |

Dono ko **ek hi axes** par plot karo. October ke points ● se, November ke ◆ se (asli graph paper par do alag rang ki pencil lo).

```
 f
14 |                    ●
13 |                                      ◆
12 |        ◆                 ●
11 |                                ◆
10 |              ●
 9 |              ◆
 8 |                          ◆     ●
 7 |                    ◆
 6 |        ●
 5 |
 4 |                                      ●
 3 |
 2 |
 1 |
 0 +--●-----+-----+-----+-----+-----+-----+-----●--> umar (saal)
      5    15    25    35    45    55    65    75
```

(Dono polygons 5 aur 75 par x-axis par milte hain. Sketch sirf andaaza hai.)

**Graph padhna:**
- **October** ki line beech mein (35 par) sabse upar hai: ek **pahaad**. Normal mahine mein beech ki umar wale zyada aaye.
- **November** ki line dono kinaron par upar hai (15 par 12, 65 par 13) aur beech mein neeche (35 par 7): ek **ghaati** jaisa shape, jaise "U".
- **Jawab:** Flu mein **bachche/jawan (10–20) aur bujurg (60–70)** zyada beemar pade.

**Kuch aur baatein graph se:**
- October mein total = 6 + 10 + 14 + 12 + 8 + 4 = **54**. November mein total = 12 + 9 + 7 + 8 + 11 + 13 = **60**.
- Sabse bada farak 60–70 wali class mein: 13 − 4 = **9** mareez zyada.
- 20–30 (class mark 25) par dono lagbhag barabar hain: 10 aur 9.

Yahi frequency polygon ki asli taakat hai: **ek graph, do kahaniyan, saaf tulna.**

---

## Part E: Inclusive classes ho to pehle badlo

Kabhi table aisi hoti hai: 11–15, 16–20, 21–25... Isme ek class 15 par khatam hoti hai aur agli 16 se shuru, beech mein **gap** hai. Topic 2 mein dekha tha ki aisi **inclusive** classes ko pehle **exclusive** (bina gap) banate hain.

### Example 4

Ek library mein aane wale bachchon ki umar:

| Umar (saal) | 11–15 | 16–20 | 21–25 | 26–30 |
|---|---|---|---|---|
| Bachche | 3 | 7 | 9 | 5 |

**Step 1: Gap bharo.** Gap = 16 − 15 = 1. Aadha = 0.5. Har lower limit se 0.5 ghatao, har upper limit mein 0.5 jodo.

| Nayi class | 10.5–15.5 | 15.5–20.5 | 20.5–25.5 | 25.5–30.5 |
|---|---|---|---|---|
| Bachche | 3 | 7 | 9 | 5 |

**Step 2: Class marks.**
- (10.5 + 15.5)/2 = **13**
- (15.5 + 20.5)/2 = **18**
- (20.5 + 25.5)/2 = **23**
- (25.5 + 30.5)/2 = **28**

**Jaanch:** Purani class se bhi class mark wahi aata hai: (11 + 15)/2 = 13 ✅, (26 + 30)/2 = 28 ✅. (Class mark nahi badalta, sirf limits badalti hain.)

**Step 3: Khayali classes.** Chaudai = 15.5 − 10.5 = 5.
- Pehle: 5.5–10.5, class mark **8**, frequency 0.
- Baad mein: 30.5–35.5, class mark **33**, frequency 0.

**Points:** (8, 0), (13, 3), (18, 7), (23, 9), (28, 5), (33, 0). Inhe jodo.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Class limits par point lagana.**
20–30 class ka point x = 20 ya x = 30 par nahi, **x = 25** (class mark) par lagta hai. Galat jagah lagane se poora polygon aadhi class khisak jata hai.

**Galti 2: Khayali classes bhool jana.**
(15, 6) se shuru karke (65, 4) par rukne se polygon band nahi hota, aur area bhi histogram ke barabar nahi rehta. Dono kinaron par **frequency 0** wale points zaroor lagao.

**Galti 3: Khayali class ki chaudai galat lena.**
Agar classes 10-10 ki hain (10–20, 20–30...), to khayali class bhi 10 ki hogi: 0–10 aur 70–80. Pehla point 15 − 10 = **5** par aayega, 0 par nahi.

**Galti 4: Points ko curve se jodna.**
Frequency polygon mein points **seedhi lines** (ruler) se jodte hain. Haath se gol curve banana galat hai. "Polygon" ka matlab hi seedhi lines se bani shakal hai.

**Galti 5: Alag chaudai wali classes mein seedhe frequency lagana.**
Agar ek class 20–40 (chaudai 20) hai aur baaki 10 chaudai ki, to histogram mein us bar ki height adjust karni padti hai (Topic 3 mein dekha tha). Histogram se polygon banate waqt wahi **adjusted height** lo.

**Galti 6: Inclusive classes ko bina badle use karna.**
11–15, 16–20 jaisi classes mein pehle gap bharo (Part E), phir khayali classes ki limits sahi aayengi.

---

## Quick Recap

- **Frequency polygon** = (class mark, frequency) wale points ko seedhi lines se jodkar bani band shakal.
- **Method 1:** Histogram ki har bar ke upar ka **midpoint** lo aur jodo.
- **Method 2:** Bina histogram ke, seedhe **class marks** aur frequencies se points plot karo.
- Dono kinaron par **zero-frequency wali khayali class** jodo, taaki polygon x-axis par band ho.
- Barabar chaudai ho to **polygon ke neeche ka area = histogram ka area** (jo triangle kata, utna hi juda).
- Polygon ka sabse bada fayda: **do data sets ek hi graph par** saaf compare hote hain.
- **Inclusive classes** ko pehle exclusive banao; class mark wahi rehta hai.

---

## Practice Questions

1. Find the class mark of each class: (a) 20–30 (b) 35–45 (c) 7.5–12.5

2. The weekly pocket money of 24 students is given below. Write all the points (including the two zero-frequency points) needed to draw a frequency polygon.

   | Pocket money (₹) | 50–100 | 100–150 | 150–200 | 200–250 |
   |---|---|---|---|---|
   | Students | 4 | 10 | 7 | 3 |

3. Convert the classes into exclusive form, find the class marks, and write the end points of the frequency polygon.

   | Runs scored | 11–20 | 21–30 | 31–40 | 41–50 |
   |---|---|---|---|---|
   | Batsmen | 2 | 6 | 9 | 3 |

4. State whether each statement is true or false.
   (a) In a frequency polygon, points are plotted at the class limits.
   (b) A frequency polygon is closed at both ends by joining it to the x-axis.
   (c) Two frequency distributions can be compared on the same graph using frequency polygons.
   (d) The points of a frequency polygon are joined by a smooth freehand curve.

5. The weights (in grams) of mangoes from two orchards are given below.

   | Weight (g) | 150–200 | 200–250 | 250–300 | 300–350 |
   |---|---|---|---|---|
   | Orchard P | 5 | 12 | 20 | 8 |
   | Orchard Q | 10 | 18 | 9 | 3 |

   (a) Write the points for both frequency polygons.
   (b) Which orchard mostly has heavier mangoes?
   (c) At which class mark is the difference between the two orchards the largest?

6. Why do we add a class with zero frequency at each end of a frequency polygon? Give two reasons.

7. A frequency table has the classes 10–20 (f = 8), 20–40 (f = 14) and 40–50 (f = 6). A histogram is drawn taking width 10 as standard. What height should the 20–40 bar have, and where will its point lie when the frequency polygon is drawn from this histogram?

8. The points of a frequency polygon are (5, 0), (15, 3), (25, 8), (35, 5), (45, 0). Write the frequency table.

### Answers

1. (a) (20 + 30)/2 = **25**  (b) (35 + 45)/2 = **40**  (c) (7.5 + 12.5)/2 = **10**

2. Class marks: 75, 125, 175, 225. Chaudai 50 hai, to khayali class marks 75 − 50 = 25 aur 225 + 50 = 275.
   Points: **(25, 0), (75, 4), (125, 10), (175, 7), (225, 3), (275, 0)**.
   Jaanch: 4 + 10 + 7 + 3 = 24 students ✅

3. Gap = 21 − 20 = 1, aadha 0.5. Exclusive classes: **10.5–20.5, 20.5–30.5, 30.5–40.5, 40.5–50.5**.
   Class marks: (10.5 + 20.5)/2 = **15.5**, **25.5**, **35.5**, **45.5**.
   Chaudai 10, to end points: **(5.5, 0)** aur **(55.5, 0)**.
   Poore points: (5.5, 0), (15.5, 2), (25.5, 6), (35.5, 9), (45.5, 3), (55.5, 0).

4. (a) **False** ❌. Points class marks par lagte hain.
   (b) **True** ✅. Zero-frequency khayali classes se.
   (c) **True** ✅. Yahi iska sabse bada fayda hai.
   (d) **False** ❌. Seedhi lines (ruler) se jodte hain.

5. (a) Class marks: 175, 225, 275, 325; khayali: 125 aur 375.
   P: (125, 0), (175, 5), (225, 12), (275, 20), (325, 8), (375, 0).
   Q: (125, 0), (175, 10), (225, 18), (275, 9), (325, 3), (375, 0).
   (b) P ka polygon **275 par** sabse upar hai, Q ka **225 par**. To **Orchard P** ke aam zyaadatar bhaari hain.
   (c) Farak: 175 par |5 − 10| = 5, 225 par |12 − 18| = 6, 275 par |20 − 9| = **11**, 325 par |8 − 3| = 5. Sabse bada farak **class mark 275** par.

6. (1) Polygon x-axis par **band** ho jata hai, hawa mein latka nahi rehta. (2) Barabar chaudai ho to polygon ke neeche ka **area histogram ke area ke barabar** ho jata hai.

7. 20–40 ki chaudai 20 hai, standard 10 se dugni. Adjusted height = 14 × 10/20 = **7**.
   Class mark = (20 + 40)/2 = **30**, to point **(30, 7)** par aayega.

8. Class marks ka farak 10, to chaudai 10. (5, 0) aur (45, 0) khayali hain.

   | Class | 10–20 | 20–30 | 30–40 |
   |---|---|---|---|
   | Frequency | 3 | 8 | 5 |

   Jaanch: (10 + 20)/2 = 15 ✅, (20 + 30)/2 = 25 ✅, (30 + 40)/2 = 35 ✅

---

Bas itna yaad rakho: **class mark par point, ruler se line, aur dono kinaron par zero.** Dr. Kavita ki tarah aap bhi ab do mahinon, do classes ya do baagon ka data ek hi graph par padh sakte ho.

**Aage kya?** Ab tak humne data ko tasveer mein dekha. Par kabhi poore data ko **ek hi number** mein batana hota hai, jaise "average kitna hai?" Topic 5 mein yahi seekhenge: **mean**.
