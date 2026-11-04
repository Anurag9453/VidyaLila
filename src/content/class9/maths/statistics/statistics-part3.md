# Chapter: Statistics (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [statistics-part2.md](statistics-part2.md) se aage chalti hai.** (Topic 1 [statistics.md](statistics.md) mein hai.)
> **Topics covered in this file:**
> 3. Bar Graph aur Histogram

---

# Topic 3: Bar Graph aur Histogram

Topic 2 mein humne bikhre hue raw data ko tally marks se gina, use **frequency table** mein sajaya (jaise Raghu bhaiya ki dukaan ke joote ke size), aur bade data ko **class intervals** (groups) mein baanta (jaise customers ki umar 10–20, 20–30...). Wahan class size, class mark, exclusive aur inclusive classes, aur cumulative frequency bhi dekhi thi. Ab data saaf-suthri table mein baitha hai. Par table padhne mein abhi bhi thoda time lagta hai. Is topic mein hum usi table ko ek **tasveer** mein badlenge, jise ek nazar mein samjha ja sake.

---

## Panchayat ke notice board ki kahani

Ek pahadi gaon mein **Ritu didi** panchayat ka kaam sambhalti hain. Har saal barsaat ke baad unke paas mahine ke hisaab se baarish ka record aata hai:

| Mahina | Baarish (mm) |
|---|---|
| June | 100 |
| July | 300 |
| August | 250 |
| September | 150 |
| October | 50 |

Ritu didi ne ye table panchayat ke notice board par chipka di. Par gaon ke log aate, numbers dekhte, aur bina samjhe chale jaate. Ramdeen kaka ne seedha poocha: "Beti, ye bata do ki sabse zyada paani kab gira? Bas itna."

Agle din Ritu didi ne har mahine ke liye ek **khadi patti (bar)** bana di. Jitni zyada baarish, utni oonchi patti:

```
  300 |        ███
  250 |        ███   ███
  200 |        ███   ███
  150 |        ███   ███   ███
  100 |  ███   ███   ███   ███
   50 |  ███   ███   ███   ███   ███
    0 +-------------------------------
         Jun   Jul   Aug   Sep   Oct
```

Ab Ramdeen kaka ko kuch poochna hi nahi pada. Sabse oonchi patti **July** ki thi, aur sabse chhoti **October** ki. Ek nazar mein poori baat samajh aa gayi.

Yahi graph ki taaqat hai: **table mein numbers padhne padte hain, graph mein baat dikh jaati hai.** Is topic mein hum do tarah ke graph seekhenge: **bar graph** aur **histogram**.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Bar graph** | Alag-alag cheezon (categories) ke liye barabar chaudai ki pattiyan, beech mein barabar gap | Mahine ke hisaab se baarish |
| **Scale** | Graph par 1 khana kitne ke barabar hai | 1 khana = 50 mm |
| **Axis** | Graph ki do seedhi lines: neeche wali (horizontal) aur khadi (vertical) | x-axis par mahine, y-axis par mm |
| **Double bar graph** | Do cheezon ki tulna ke liye har category par do pattiyan saath-saath | Do saalon ki library ki kitabein |
| **Histogram** | Grouped (continuous) data ke liye pattiyan jo **aapas mein chipki** hoti hain, koi gap nahi | Paudhon ki lambai 10–15, 15–20 cm... |
| **Kink (zigzag)** | x-axis par chhota sa toda hua nishaan, jab graph 0 se shuru na ho | 0 ke baad seedha 10 se shuru |
| **Adjusted frequency** | Unequal chaudai wali classes ke liye patti ki sahi oonchai | Neeche Part E mein |

---

## Part A: Graph kyun banate hain?

Ek seedha sa test karo. Neeche wali table dekho, aur 3 second mein batao ki kaunsi kitab sabse zyada padhi gayi:

| Kitab ka type | Kahani | Comics | Science | Itihaas | Kavita |
|---|---|---|---|---|---|
| Kitni baar li gayi | 40 | 50 | 30 | 20 | 10 |

Aapko numbers ek-ek karke compare karne pade honge. Ab yahi data graph mein dekho (K = Kahani, C = Comics, S = Science, I = Itihaas, V = Kavita):

```
   50 |        ███
   40 |  ███   ███
   30 |  ███   ███   ███
   20 |  ███   ███   ███   ███
   10 |  ███   ███   ███   ███   ███
    0 +-------------------------------
          K     C     S     I     V
```

Comics wali patti turant dikh jaati hai. Isliye kehte hain: **graph aankhon ke liye hai, table hisaab ke liye.** Dono ka apna kaam hai.

---

## Part B: Bar Graph

### Bar graph kab use karte hain?

Jab data **alag-alag categories** mein ho, ya **gine hue (discrete)** numbers hon. Jaise:
- Mahine (June, July...)
- Kitabon ke type
- Khel ke naam
- Kisi class ke bachchon ki sankhya

In categories ke beech koi "beech ki value" nahi hoti. June aur July ke beech koi "June-July" mahina nahi hota. Isliye pattiyon ke beech **gap** chhodte hain.

### Bar graph ke niyam

1. **Saari pattiyon ki chaudai barabar** ho.
2. **Pattiyon ke beech ka gap bhi barabar** ho.
3. **Patti ki oonchai = frequency** (ya jo value dikhani hai).
4. **Scale samajhdari se chuno.** Agar values 10 se 50 tak hain, to 1 khana = 10 theek hai. 1 khana = 1 lene par graph bahut lamba ho jayega.
5. **Dono axes par naam likho** (x-axis par kya hai, y-axis par kya hai), aur graph ka title bhi.
6. Y-axis **0 se shuru karo.** Warna chhota farak bhi bahut bada dikhne lagta hai.

### Bar graph banane ke steps

Library wale data se:

**Step 1:** x-axis par categories likho: Kahani, Comics, Science, Itihaas, Kavita.

**Step 2:** Sabse badi value 50 hai. To scale lo: **1 khana = 10 kitabein.** Y-axis par 0, 10, 20, 30, 40, 50 likho.

**Step 3:** Har category ke liye barabar chaudai ki patti banao, oonchai uski value ke hisaab se:
- Kahani: 40, yaani 4 khane
- Comics: 50, yaani 5 khane
- Science: 30, yaani 3 khane
- Itihaas: 20, yaani 2 khane
- Kavita: 10, yaani 1 khana

**Step 4:** Title likho: "Library mein kitabein kis type ki li gayi". Axes ke naam: "Kitab ka type" aur "Kitni baar".

Graph upar Part A mein bana hua hai.

### Bar graph padhna

Usi library graph se:

| Sawaal | Jawab | Kaise |
|---|---|---|
| Sabse zyada kaun si? | Comics (50) | Sabse oonchi patti |
| Sabse kam kaun si? | Kavita (10) | Sabse chhoti patti |
| Comics aur Kavita ka farak? | 40 | 50 − 10 |
| Kul kitni baar kitabein li gayi? | 150 | 40 + 50 + 30 + 20 + 10 |
| Comics kul ka kitna hissa? | ⅓ | 50 ÷ 150 |

### Horizontal bar graph

Pattiyan **leti hui** bhi ho sakti hain. Jab categories ke naam lambe hon, to ye aasan padta hai. Yahan har █ = 5 kitabein:

```
Kahani  | ████████ 40
Comics  | ██████████ 50
Science | ██████ 30
Itihaas | ████ 20
Kavita  | ██ 10
```

Niyam wahi hain: barabar motai, barabar gap, lambai = value.

### Double bar graph (do cheezon ki tulna)

Maan lo library ne do saal ka data rakha:

| Type | Pichla saal (█) | Is saal (░) |
|---|---|---|
| Kahani (K) | 40 | 30 |
| Comics (C) | 50 | 60 |
| Science (S) | 30 | 40 |

Har category par **do pattiyan saath-saath** banate hain, alag rang ya design se:

```
   60 |            ░░
   50 |          ██░░
   40 |  ██      ██░░      ░░
   30 |  ██░░    ██░░    ██░░
   20 |  ██░░    ██░░    ██░░
   10 |  ██░░    ██░░    ██░░
    0 +-------------------------
          K       C       S
```

Ek nazar mein dikhta hai: Kahani **10 kam** hui (40 se 30), Comics aur Science dono **10-10 badhe**. Pichle saal kul 120 thi, is saal 130.

Double bar graph mein ek **legend (chabi)** zaroor do, jo bataye ki kaunsi patti kis saal ki hai.

---

## Part C: Histogram

### Bar graph se histogram tak

Ab ek alag tarah ka data lo. Ek nursery mein 30 paudhon ki lambai (cm) naapi gayi, aur use groups mein rakha gaya. Ye wahi grouped frequency table hai jo Topic 2 mein banana seekha tha:

| Lambai (cm) | Paudhe (frequency) |
|---|---|
| 10–15 | 2 |
| 15–20 | 6 |
| 20–25 | 10 |
| 25–30 | 8 |
| 30–35 | 4 |
| **Kul** | **30** |

Yahan ek khaas baat hai. Lambai **lagaataar (continuous)** hai. 15 cm ke baad seedha 15 cm se agla group shuru ho jata hai, beech mein koi khaali jagah nahi. 14.9 cm ka paudha bhi ho sakta hai, 15.1 cm ka bhi.

Isliye is data ki pattiyan **chipki hui** honi chahiye, gap ke bina. Ise **histogram** kehte hain.

### Histogram ke niyam

1. Sirf **grouped, continuous (exclusive)** classes ke liye.
2. **Pattiyon ke beech koi gap nahi.** Ek patti jahan khatam, wahin se agli shuru.
3. **Patti ki chaudai = class size.** x-axis par class ki limits likhte hain (10, 15, 20, ...).
4. **Patti ki oonchai = frequency** (jab saari classes ki chaudai barabar ho).
5. Dono axes ke naam aur title.

### Histogram banana

**Step 1:** x-axis par class limits likho: 10, 15, 20, 25, 30, 35. Scale: 1 khana = 5 cm.

**Step 2:** y-axis par frequency. Sabse badi 10 hai, to scale: 1 khana = 2 paudhe.

**Step 3:** Har class par patti, chipki hui:

```
  10 |             █████
   8 |             ██████████
   6 |        ███████████████
   4 |        ████████████████████
   2 |   █████████████████████████
   0 +~~-|----|----|----|----|----|
         10   15   20   25   30   35
```

**Step 4:** Title: "Nursery ke paudhon ki lambai". Axes: "Lambai (cm)" aur "Paudhon ki sankhya".

### Kink (zigzag) kyun?

Graph 0 se shuru hona chahiye, par hamari pehli class **10** se shuru ho rahi hai. Agar 0 se 10 tak poori jagah khaali chhodein, to graph ka bada hissa bekaar jayega.

Isliye x-axis par 0 ke theek baad ek **chhota sa zigzag (~~ ya /\/)** banate hain. Iska matlab hai: "yahan beech ki values chhod di gayi hain." Upar wale histogram mein `~~` yahi kink hai.

### Histogram padhna

| Sawaal | Jawab | Kaise |
|---|---|---|
| Sabse zyada paudhe kis class mein? | 20–25 cm (10 paudhe) | Sabse oonchi patti |
| 25 cm ya usse lambe kitne? | 12 | 8 + 4 |
| 20 cm se chhote kitne? | 8 | 2 + 6 |
| Kul paudhe? | 30 | 2 + 6 + 10 + 8 + 4 |

### Inclusive classes ho to pehle badlo

Agar classes **inclusive** hon, jaise 1–10, 11–20, 21–30, to unke beech 10 aur 11 ke beech ek chhota sa gap hai. Histogram ki pattiyan chipki honi chahiye, isliye pehle unhe **exclusive** banana padta hai. Ye tareeka Topic 2 mein dekha tha: har lower limit se 0.5 ghatao, har upper limit mein 0.5 jodo.

| Inclusive | Exclusive (histogram ke liye) |
|---|---|
| 1–10 | 0.5–10.5 |
| 11–20 | 10.5–20.5 |
| 21–30 | 20.5–30.5 |

Ab classes bina gap ke jud gayi, aur histogram ban sakta hai.

---

## Part D: Bar Graph aur Histogram ka farak

| Baat | Bar Graph | Histogram |
|---|---|---|
| Data kaisa hai | Categories ya alag-alag (discrete) cheezein | Grouped, continuous data |
| Pattiyon ke beech gap | **Haan**, barabar gap | **Nahi**, pattiyan chipki |
| Patti ki chaudai ka matlab | Kuch nahi (sab barabar) | Class size |
| x-axis par kya | Categories ke naam | Class limits (numbers) |
| Example | Pasandeeda khel, mahine ki baarish | Lambai, wazan, marks ke groups |

Ek line mein: **bar graph cheezon ko alag-alag dikhata hai, histogram ek lagaataar range ko tukdon mein.**

---

## Part E: Jab class ki chaudai barabar na ho (varying base lengths)

### Mushkil kya hai?

Ek test ke marks ka data ye hai:

| Marks | Bachche (frequency) | Class size |
|---|---|---|
| 0–20 | 8 | 20 |
| 20–30 | 10 | 10 |
| 30–40 | 16 | 10 |
| 40–50 | 12 | 10 |
| 50–80 | 18 | 30 |
| **Kul** | **64** | |

Dhyan do: classes ki **chaudai alag-alag** hai. 0–20 ki chaudai 20 hai, beech wali 10, aur 50–80 ki 30.

Agar hum seedha oonchai = frequency rakh dein, to aisa dikhega:

```
  18 |                            ███████████████
  16 |                  █████     ███████████████
  14 |                  █████     ███████████████
  12 |                  █████████████████████████
  10 |             ██████████████████████████████
   8 |   ████████████████████████████████████████
   6 |   ████████████████████████████████████████
   4 |   ████████████████████████████████████████
   2 |   ████████████████████████████████████████
   0 +---|---------|----|----|----|--------------|
         0         20   30   40   50             80
```

Ye graph **dhokha deta hai.** 50–80 wali patti sabse badi dikh rahi hai, kyunki wo oonchi bhi hai aur bahut chaudi bhi. Aankh patti ka poora **area** dekhti hai, sirf oonchai nahi. Par asal mein 50–80 mein 18 bachche hain aur 30–40 mein 16, yaani lagbhag barabar. Graph mein 50–80 teen guna se zyada badi lag rahi hai.

### Hal: area = frequency

Histogram mein asli niyam ye hai: **patti ka area frequency ke hisaab se ho.** Jab chaudai barabar ho, to oonchai = frequency rakhne se ye apne aap ho jata hai. Jab chaudai barabar na ho, to oonchai ko **adjust** karna padta hai.

**Formula:**

> **Adjusted frequency (patti ki oonchai) = (sabse chhota class size ÷ is class ka size) × is class ki frequency**

### Poora example

Sabse chhota class size = **10**.

| Marks | Frequency | Class size | Adjusted frequency |
|---|---|---|---|
| 0–20 | 8 | 20 | (10 ÷ 20) × 8 = **4** |
| 20–30 | 10 | 10 | (10 ÷ 10) × 10 = **10** |
| 30–40 | 16 | 10 | (10 ÷ 10) × 16 = **16** |
| 40–50 | 12 | 10 | (10 ÷ 10) × 12 = **12** |
| 50–80 | 18 | 30 | (10 ÷ 30) × 18 = **6** |

Ab sahi histogram (oonchai = adjusted frequency):

```
  16 |                  █████
  14 |                  █████
  12 |                  ██████████
  10 |             ███████████████
   8 |             ███████████████
   6 |             ██████████████████████████████
   4 |   ████████████████████████████████████████
   2 |   ████████████████████████████████████████
   0 +---|---------|----|----|----|--------------|
         0         20   30   40   50             80
```

Ab 30–40 wali patti sabse oonchi hai, aur 50–80 ki patti neechi par chaudi hai. Dono ka area lagbhag barabar dikhta hai, jo sach hai (16 aur 18 bachche).

**Jaanch (area check):** Area ko "oonchai × chaudai ÷ 10" lo, to har class ki asli frequency wapas milni chahiye.
- 0–20: 4 × 20 ÷ 10 = 8 ✅
- 30–40: 16 × 10 ÷ 10 = 16 ✅
- 50–80: 6 × 30 ÷ 10 = 18 ✅

Yaani area hamesha frequency ke barabar anupaat mein hai. Bas isi baat ke liye adjust kiya.

### Yaad rakhne ka tareeka

Chaudi class ki patti ko **utna neeche dabao** jitni wo chaudi hai. 0–20 do guna chaudi hai, to oonchai aadhi (8 se 4). 50–80 teen guna chaudi hai, to oonchai ek-tihaai (18 se 6).

---

## Aam galtiyan (bachke rehna)

**Galti 1: Histogram mein pattiyon ke beech gap chhodna**
Histogram continuous data ka hai. Gap chhodne se lagta hai ki beech ki values hain hi nahi. Pattiyan chipki honi chahiye.

**Galti 2: Bar graph mein gap na chhodna, ya gap barabar na rakhna**
Categories alag-alag hain, isliye beech mein barabar gap chahiye. Chipki pattiyan histogram jaisi dikhengi aur galat matlab nikalega.

**Galti 3: Unequal chaudai mein frequency ko seedha oonchai bana dena**
50–80 jaisi chaudi class bahut badi dikhegi. Pehle adjusted frequency nikalo.

**Galti 4: Galat scale ya axis ke naam bhool jana**
Bina naam ke graph ka matlab koi nahi samjhega. Aur bar graph mein y-axis 0 se shuru na karne par chhota sa farak bhi bahut bada dikhta hai.

**Galti 5: Categories ke liye histogram banana**
"Pasandeeda khel" jaise data mein koi lagaataar range nahi hai. Wahan bar graph hi sahi hai.

**Galti 6: Inclusive classes ko bina badle histogram banana**
1–10, 11–20 ke beech 10 aur 11 ke beech gap hai. Pehle 0.5 wala adjustment karo (Topic 2).

**Galti 7: Unequal chaudai wale histogram mein oonchai ko hi frequency padh lena**
Sahi histogram mein 0–20 ki oonchai 4 hai, par us class mein **8** bachche hain. Frequency area se milti hai, oonchai se nahi.

---

## Quick Recap

- **Graph** table ko tasveer bana deta hai, jisse baat ek nazar mein samajh aati hai.
- **Bar graph:** categories ya discrete data ke liye. Pattiyan barabar chaudi, beech mein barabar gap, oonchai = value. Vertical ya horizontal dono ho sakte hain.
- **Double bar graph:** do cheezon ki tulna, har category par do pattiyan, saath mein legend.
- **Histogram:** grouped continuous data ke liye. Pattiyan **chipki hui**, chaudai = class size, oonchai = frequency (barabar chaudai mein).
- Inclusive classes ho to pehle **exclusive** banao.
- Graph 0 se shuru na ho to x-axis par **kink (zigzag)** lagao.
- **Unequal class size:** adjusted frequency = (sabse chhota class size ÷ is class ka size) × frequency. Histogram mein **area = frequency** ka niyam chalta hai.
- Scale, title aur dono axes ke naam hamesha likho.

---

## Practice Questions

1. Which type of graph (bar graph or histogram) should be used for each? Give a reason.
   (a) Number of students who like each colour: red, blue, green, yellow
   (b) Heights of 40 students grouped as 140–145, 145–150, 150–155 cm
   (c) Runs scored by 5 players in a match
   (d) Weights of 50 people grouped in classes of 5 kg

2. The number of trees planted by five classes is: Class VI: 30, Class VII: 45, Class VIII: 25, Class IX: 50, Class X: 40.
   (a) Which class planted the most trees?
   (b) Which class planted the fewest?
   (c) How many more trees did Class IX plant than Class VIII?
   (d) How many trees were planted in total?
   (e) Suggest a suitable scale for the bar graph.

3. The weights (kg) of 40 people are: 30–35: 4, 35–40: 9, 40–45: 14, 45–50: 8, 50–55: 5.
   (a) Which class has the highest frequency?
   (b) How many people weigh 45 kg or more?
   (c) Why do we draw a kink on the x-axis for this histogram?
   (d) Should the bars of this graph have gaps between them? Why?

4. Convert the inclusive classes 10–19, 20–29, 30–39 into exclusive classes so that a histogram can be drawn. What is the class size?

5. The daily wages (₹) of workers are: 100–150: 10 workers, 150–200: 15, 200–300: 20, 300–500: 16. Find the adjusted frequency (height of each bar) for drawing a histogram.

6. In Question 5, the class 300–500 has 16 workers but its bar height is much less than 16. Explain why, using the idea of area.

7. State whether each statement is true or false.
   (a) In a histogram, there are gaps between the bars.
   (b) In a bar graph, all bars have the same width.
   (c) In every histogram, the height of a bar is equal to its frequency.
   (d) A bar graph can be drawn with horizontal bars.

### Answers

1. (a) **Bar graph.** Rang alag-alag categories hain, koi lagaataar range nahi.
   (b) **Histogram.** Lambai continuous hai aur classes mein grouped hai.
   (c) **Bar graph.** Har player ek alag category hai.
   (d) **Histogram.** Wazan continuous hai, 5 kg ki classes mein.

2. (a) **Class IX** (50)
   (b) **Class VIII** (25)
   (c) 50 − 25 = **25**
   (d) 30 + 45 + 25 + 50 + 40 = **190**
   (e) Sabse badi value 50 hai, aur saari values 5 ke multiple hain. To **1 khana = 5 ped** (ya 10 ped) theek rahega.

3. (a) **40–45 kg** (14 log)
   (b) 8 + 5 = **13**
   (c) Pehli class **30** se shuru hoti hai, 0 se nahi. 0 se 30 tak ki khaali jagah chhodne ke liye x-axis par kink banate hain.
   (d) **Nahi.** Wazan continuous hai aur classes exclusive hain (35 par ek khatam, wahin se agli), isliye histogram ki pattiyan chipki hongi.
   Jaanch: 4 + 9 + 14 + 8 + 5 = 40 ✅

4. Har lower limit se 0.5 ghatao aur upper limit mein 0.5 jodo:
   **9.5–19.5, 19.5–29.5, 29.5–39.5**. Class size = 19.5 − 9.5 = **10**.

5. Class sizes: 50, 50, 100, 200. Sabse chhota = **50**.
   - 100–150: (50 ÷ 50) × 10 = **10**
   - 150–200: (50 ÷ 50) × 15 = **15**
   - 200–300: (50 ÷ 100) × 20 = **10**
   - 300–500: (50 ÷ 200) × 16 = **4**

6. 300–500 ki class 200 chaudi hai, jo sabse chhoti class (50) se **4 guna** hai. Histogram mein **area** frequency dikhata hai, isliye oonchai ko 4 se bhaag dena padta hai: 16 ÷ 4 = 4.
   Jaanch: area ko "oonchai × chaudai ÷ 50" lo, to 4 × 200 ÷ 50 = **16** ✅, yaani asli frequency wapas mil gayi. Agar oonchai 16 rakhte, to ye patti asal se 4 guna badi dikhti.

7. (a) **False** ❌. Histogram ki pattiyan chipki hoti hain.
   (b) **True** ✅. Bar graph mein saari pattiyan barabar chaudi hoti hain.
   (c) **False** ❌. Ye sirf tab sach hai jab saari classes ki chaudai barabar ho. Warna adjusted frequency lagti hai.
   (d) **True** ✅. Horizontal bar graph bhi bilkul sahi hai.

---

Graph banana ek aadat hai. Pehli baar scale chunne aur pattiyan naapne mein time lagega, par do-teen graph banane ke baad ye khel jaisa lagne lagega. Bas yaad rakho: **categories ke liye gap, continuous data ke liye chipki pattiyan.**

**Aage kya?** Agle topic mein hum histogram ki har patti ke **upar ke beech wale point** ko pakdenge aur un sab points ko seedhi lines se jod denge. Isse ek naya graph banta hai, **frequency polygon**, jo data ka "pahaad jaisa" roop dikhata hai.
