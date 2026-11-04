# Chapter: Simultaneous Linear Equations (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [simultaneous-linear-equations-part3.md](simultaneous-linear-equations-part3.md) se aage chalti hai** (aur chapter ki shuruaat [simultaneous-linear-equations.md](simultaneous-linear-equations.md) mein hai). Pichhle topics mein substitution, elimination aur cross-multiplication se hal nikaalna seekha tha.
> **Pehle ki cheezein (zaroori nahi, par kaam aayengi):** [Graph of a Linear Equation](../linear-equations-in-two-variables/linear-equations-in-two-variables-part2.md) (3 points ki table aur seedhi line) aur [Coordinate Geometry](../coordinate-geometry/coordinate-geometry.md) (points plot karna).
> **Topics covered in this file:**
> 4. Graph se Hal aur Solutions kitne honge

---

# Topic 4: Graph se Hal aur Solutions kitne honge

Pichhle teen topics mein humne simultaneous equations ko **algebra** se todha: substitution, elimination, aur cross-multiplication. Teeno mein jawab ek (x, y) jodi aaya. Topic 3 mein ek ajeeb baat bhi dikhi thi: 2x + 3y = 5 aur 4x + 6y = 10 jaisi jodi mein a₁b₂ − a₂b₁ = 0 ho jata hai, to cross-multiplication ke formula mein denominator zero ho jata hai aur formula chalta hi nahi. Tab humne kaha tha ki ye ek **special case** hai.

Ab sawaal ye hai ki ye special case hota kya hai? Aur kya koi tareeka hai jisse hal nikaalne se pehle hi **dekh sakein** ki hal milega bhi ya nahi, aur milega to kitne? Is topic mein hum equations ko **dekhna** seekhenge: graph par. Aur wahin se saaf ho jayega ki zero denominator ka asli matlab kya tha.

---

## Vihaan aur Zara ke raaste

Ek shehar ke naksha (map) par chowk ek jaali (grid) ki tarah bane hain. Pehle number x batata hai ki **poorab (east)** mein kitne km chale, doosra number y batata hai ki **uttar (north)** mein kitne km. Dukaan ka godown origin (0, 0) par hai.

Do delivery riders hain: **Vihaan** aur **Zara**. Dono ek-ek seedhi sadak par chalte hain.

- Vihaan ki sadak ka niyam: uske har chowk par **x + y = 5**. (Jaise (1, 4) ya (5, 0).)
- Zara ki sadak ka niyam: uske har chowk par **x − y = 1**. (Jaise (1, 0) ya (4, 3).)

Customer ne kaha, "Mujhe wahi chowk chahiye jahan **dono** aa sakein, taaki ek hi jagah par Vihaan ka burger aur Zara ki cold coffee saath mil jaye." Yaani aisa point jo **dono sadakon par ho**. Map par dono sadkein ek jagah par kaatengi. Wahi chowk customer ka address hai.

Ye wahi simultaneous equations wala sawaal hai: ek aisa (x, y) jo **dono equations ko ek saath** sach kare. Algebra se hum use nikaalte the. Aaj hum use **map par saaf dekhenge**.

Par ek aur sawaal bhi uthta hai: kya do sadkein hamesha kahin na kahin milti hi hain? Agar Vihaan aur Zara ki sadkein ek-doosre ke **bagal mein, kabhi na milne wali** hoti, to? Ya dono ek hi sadak par chal rahe hote, to? Isi ka jawab is topic ka dil hai.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Graphical method** | Dono equations ki lines banao, jahan milein wahi hal | x + y = 5 aur x − y = 1 ki lines (3, 2) par milti hain |
| **Intersecting lines** | Aisi do lines jo bilkul ek point par kaatti hain | Vihaan aur Zara ki sadkein |
| **Parallel lines** | Do lines jo kabhi nahi milti, hamesha barabar doori par | x + y = 3 aur x + y = 5 |
| **Coincident lines** | Do lines jo ek-doosre ke upar poori tarah baith jati hain | 2x + y = 6 aur 4x + 2y = 12 |
| **Consistent** | Jiske hal ho: equations aapas mein "nibha" leti hain | Intersecting aur coincident lines |
| **Inconsistent** | Jiska koi hal nahi: equations aapas mein takrati hain | Parallel lines |
| **Dependent** | Ek equation doosri ki hi copy hai (dono ek hi baat kehti hain) | 2x + y = 6 aur 4x + 2y = 12 |
| **Ratio test** | Coefficients ke ratio dekh kar hal ki ginti pehle hi bata dena | a₁ ÷ a₂ aur b₁ ÷ b₂ |

---

## Part A: Graphical method (graph se hal)

Is method ke 4 kadam hain:

1. **Pehli equation** ke liye 3 points ki table banao.
2. **Doosri equation** ke liye bhi 3 points ki table banao.
3. Saare points ko graph par lagao (plot karo), aur har equation ki seedhi line kheencho.
4. Jahan dono lines **kaatti** hain, us point ke coordinates hi hal hain. Phir use **dono equations mein daal kar jaanch** lo.

**Teen points kyun?** Ek seedhi line ke liye do points kaafi hain, par agar ek point ka hisaab galat ho gaya to line galat ban jayegi aur aapko pata bhi nahi chalega. Teen points agar **ek hi seedhi line** par aayein, to samajh jao ki hisaab sahi hai. Agar teesra point line se bahar gaya, to kahin galti hai.

### Graph 1: x + y = 5 aur x − y = 1

**Vihaan ki sadak: x + y = 5**

| x | 1 | 3 | 5 |
|---|---|---|---|
| y = 5 − x | 4 | 2 | 0 |

Har point ki jaanch: 1 + 4 = 5 ✅, 3 + 2 = 5 ✅, 5 + 0 = 5 ✅

**Zara ki sadak: x − y = 1**, yaani y = x − 1.

| x | 1 | 3 | 5 |
|---|---|---|---|
| y = x − 1 | 0 | 2 | 4 |

Har point ki jaanch: 1 − 0 = 1 ✅, 3 − 2 = 1 ✅, 5 − 4 = 1 ✅

Ab dono lines banate hain. **A** = Vihaan ki line, **B** = Zara ki line, **X** = jahan dono milti hain. Har column ek x-value hai (0, 1, 2, ...), har row ek y-value.

```
  y
  6  |  .  .  .  .  .  . 
  5  A  .  .  .  .  .  B 
  4  |  A  .  .  .  B  . 
  3  |  .  A  .  B  .  . 
  2  |  .  .  X  .  .  . 
  1  |  .  B  .  A  .  . 
  0  O  B  -  -  -  A  - 
     0  1  2  3  4  5  6   x
```

Dono lines (3, 2) par kaat rahi hain. Dhyan do ki ye point dono tables mein bhi hai: Vihaan ki table mein (3, 2) aur Zara ki table mein bhi (3, 2).

**Hal: x = 3, y = 2**

**Jaanch:**
- x + y = 3 + 2 = 5 ✅
- x − y = 3 − 2 = 1 ✅

Dono equations sach, to customer ka address **chowk (3, 2)**.

### Graph 2: 2x + y = 7 aur x − y = −1

**Pehli line: 2x + y = 7**, yaani y = 7 − 2x.

| x | 1 | 2 | 3 |
|---|---|---|---|
| y = 7 − 2x | 5 | 3 | 1 |

Jaanch: 2(1) + 5 = 7 ✅, 2(2) + 3 = 7 ✅, 2(3) + 1 = 7 ✅

**Doosri line: x − y = −1**, yaani y = x + 1.

| x | 0 | 2 | 4 |
|---|---|---|---|
| y = x + 1 | 1 | 3 | 5 |

Jaanch: 0 − 1 = −1 ✅, 2 − 3 = −1 ✅, 4 − 5 = −1 ✅

```
  y
  7  A  .  .  .  .  .  B 
  6  |  .  .  .  .  B  . 
  5  |  A  .  .  B  .  . 
  4  |  .  .  B  .  .  . 
  3  |  .  X  .  .  .  . 
  2  |  B  .  .  .  .  . 
  1  B  .  .  A  .  .  . 
  0  O  -  -  -  -  -  - 
     0  1  2  3  4  5  6   x
```

X, x = 2 wale column aur y = 3 wali row mein hai, yaani (2, 3). Dono tables mein (2, 3) common hai.

**Hal: x = 2, y = 3**

**Jaanch:**
- 2x + y = 2(2) + 3 = 4 + 3 = 7 ✅
- x − y = 2 − 3 = −1 ✅

### Graph 3: x + y = 1 aur 2x − y = −4 (negative numbers ke saath)

Kabhi-kabhi milne ka point axes ke doosri taraf bhi jata hai. Aisa hi ek example dekhte hain.

**Pehli line: x + y = 1**, yaani y = 1 − x.

| x | −1 | 0 | 2 |
|---|---|---|---|
| y = 1 − x | 2 | 1 | −1 |

Jaanch: −1 + 2 = 1 ✅, 0 + 1 = 1 ✅, 2 + (−1) = 1 ✅

**Doosri line: 2x − y = −4**, yaani y = 2x + 4.

| x | −2 | −1 | 0 |
|---|---|---|---|
| y = 2x + 4 | 0 | 2 | 4 |

Jaanch: 2(−2) − 0 = −4 ✅, 2(−1) − 2 = −4 ✅, 2(0) − 4 = −4 ✅

```
  y
  5  .  .  .  |  .  .  . 
  4  A  .  .  B  .  .  . 
  3  .  A  .  |  .  .  . 
  2  .  .  X  |  .  .  . 
  1  .  .  .  A  .  .  . 
  0  -  B  -  O  A  -  - 
 -1  .  .  .  |  .  A  . 
 -2  B  .  .  |  .  .  A 
    -3 -2 -1  0  1  2  3   x
```

Dono lines (−1, 2) par milti hain (doosra quadrant, jahan x negative aur y positive hota hai).

**Hal: x = −1, y = 2**

**Jaanch:**
- x + y = −1 + 2 = 1 ✅
- 2x − y = 2(−1) − 2 = −2 − 2 = −4 ✅

**Ek zaroori baat:** graph se mila point tabhi hal hai jab wo **dono equations mein sach nikle**. Isliye har baar jaanch zaroor karo, chahe graph kitna bhi saaf dikh raha ho.

---

## Part B: Teen sambhavnayein (ek hal, koi hal nahi, anginat hal)

Do seedhi lines ek plane par kitne tareeke se rah sakti hain? Sirf **teen**:

1. Ek point par **kaat** sakti hain.
2. Kabhi **na milein** (barabar doori par chalti rahein).
3. **Poori tarah ek-doosre ke upar** baith jayein.

Aur inhi teen se pata chalta hai ki solutions kitne honge. Ek ek karke dekhte hain, apni-apni example ke saath.

### 1. Intersecting lines: ek hi hal (Consistent)

Example: **x + y = 4** aur **x − y = 2**.

| x | 0 | 2 | 4 |
|---|---|---|---|
| y = 4 − x | 4 | 2 | 0 |

| x | 2 | 3 | 4 |
|---|---|---|---|
| y = x − 2 | 0 | 1 | 2 |

```
  y
  5  |  .  .  .  .  . 
  4  A  .  .  .  .  . 
  3  |  A  .  .  .  B 
  2  |  .  A  .  B  . 
  1  |  .  .  X  .  . 
  0  O  -  B  -  A  - 
     0  1  2  3  4  5   x
```

Sketch dhyan se padho. Line A ke points (0, 4), (1, 3), (2, 2), (3, 1), (4, 0) hain, aur line B ke points (2, 0), (3, 1), (4, 2), (5, 3). Dono mein common point sirf **(3, 1)** hai, jise X se dikhaya gaya hai.

**Hal: x = 3, y = 1.** Jaanch: 3 + 1 = 4 ✅, 3 − 1 = 2 ✅

Jab lines kaatti hain, to wo **ek hi point** par kaatti hain (do alag seedhi lines ek se zyada point par kabhi nahi kaat sakti). Isliye **ek aur sirf ek hal**.

### 2. Parallel lines: koi hal nahi (Inconsistent)

Example: **x + y = 3** aur **x + y = 5**.

| x | 0 | 1 | 3 |
|---|---|---|---|
| y = 3 − x | 3 | 2 | 0 |

| x | 0 | 2 | 5 |
|---|---|---|---|
| y = 5 − x | 5 | 3 | 0 |

```
  y
  5  B  .  .  .  .  . 
  4  |  B  .  .  .  . 
  3  A  .  B  .  .  . 
  2  |  A  .  B  .  . 
  1  |  .  A  .  B  . 
  0  O  -  -  A  -  B 
     0  1  2  3  4  5   x
```

Dono lines ek jaisi tirchi hain, hamesha barabar doori par, **kabhi nahi milti**. Koi common point nahi, to **koi hal nahi**.

Algebra se bhi samajh aata hai: koi (x, y) aisa ho hi nahi sakta jiska x + y ek saath **3 bhi ho aur 5 bhi**. Ye ek-doosre se takrati hui baatein hain.

Isliye ise **inconsistent** kehte hain.

### 3. Coincident lines: anginat hal (Consistent aur Dependent)

Example: **2x + y = 6** aur **4x + 2y = 12**.

| x | 0 | 1 | 3 |
|---|---|---|---|
| y = 6 − 2x | 6 | 4 | 0 |

Doosri equation ke liye bhi table banao:

| x | 0 | 1 | 3 |
|---|---|---|---|
| y = (12 − 4x) ÷ 2 | 6 | 4 | 0 |

Same table! Dekho, doosri equation pehli ka **double** hai: 4x + 2y = 12 mein har cheez ko 2 se bhaag do to 2x + y = 6 mil jata hai.

```
  y
  6  C  .  .  .  . 
  5  |  .  .  .  . 
  4  |  C  .  .  . 
  3  |  .  .  .  . 
  2  |  .  C  .  . 
  1  |  .  .  .  . 
  0  O  -  -  C  - 
     0  1  2  3  4   x
```

Yahan **C** ka matlab hai ki dono lines ke points yahin par baithe hain: do lines hain hi nahi, ek hi line hai jo do baar likhi gayi hai. Is line ka **har point** dono equations ko sach karta hai, yani **anginat hal**.

**Jaanch:** line ke kuch aur points lo:
- (2, 2): 2(2) + 2 = 6 ✅ aur 4(2) + 2(2) = 12 ✅
- (1.5, 3): 2(1.5) + 3 = 6 ✅ aur 4(1.5) + 2(3) = 6 + 6 = 12 ✅

Bilkul alag-alag points, aur dono equations mein sach.

### Consistent, inconsistent, dependent: shabd ka asli matlab

Ye bhaari shabd lagte hain, par inke matlab roz ki bhasha mein hi hain.

| Shabd | Roz ka matlab | Equations par |
|---|---|---|
| **Consistent** | "Saath nibhane wala": jo baat pehle kahi, wahi baad mein bhi kehta hai. Koi contradiction nahi | Hal milta hai (ek ya anginat) |
| **Inconsistent** | "Jo baat se mukar jaye": ek baar kuch, doosri baar kuch aur. Contradiction | Koi hal nahi |
| **Dependent** | "Nirbhar": ek doosre par tika hua. Ek ki alag pehchaan hi nahi | Ek equation doosri ki copy hai |

Jaise do dost kahein: "Hum 3 baje milenge" aur "Hum 5 baje milenge": ye ek hi shaam ke liye contradiction hai (inconsistent). Aur agar dono kahein "3 baje milenge" aur "teen baje milenge": ek hi baat do tareeke se (dependent).

### Teeno ka saar

| Lines | Hal ki ginti | Kehte hain |
|---|---|---|
| Kaatti hain (intersecting) | Sirf **ek** | Consistent |
| Parallel | **Koi nahi** | Inconsistent |
| Coincident | **Anginat** | Consistent aur dependent |

**Dhyan do:** kabhi bhi **do** hal ya **teen** hal nahi hote. Do seedhi lines ya to ek point par milti hain, ya kabhi nahi, ya poori tarah milti hain.

---

## Part C: Ratio test (ek extra shortcut)

> **Ye ek extra shortcut hai.** Graph aur algebra hi asli kaam hain. Ratio test sirf is liye hai ki hal nikaalne se pehle hi pata chal jaye ki kya hone wala hai.

Pehle dono equations ko **standard form** mein likho (sab kuch ek taraf, aur right side 0):

> a₁x + b₁y + c₁ = 0
> a₂x + b₂y + c₂ = 0

Phir teen ratio dekho: **a₁ ÷ a₂**, **b₁ ÷ b₂**, **c₁ ÷ c₂**.

| Ratio ki condition | Lines | Hal |
|---|---|---|
| a₁ ÷ a₂ ≠ b₁ ÷ b₂ | Kaatti hain | **Ek hi hal** (consistent) |
| a₁ ÷ a₂ = b₁ ÷ b₂ ≠ c₁ ÷ c₂ | Parallel | **Koi hal nahi** (inconsistent) |
| a₁ ÷ a₂ = b₁ ÷ b₂ = c₁ ÷ c₂ | Coincident | **Anginat hal** (dependent) |

**Yaad rakhne ki trick:** pehle x aur y ke coefficients dekho. Agar unke ratio alag hain, to bas ek hi hal. Agar barabar hain, to ab dekho ki constant wala ratio bhi barabar hai ya nahi.

### Ye kyun kaam karta hai?

x aur y ke coefficients se line ki **tirchaan (jhukaav)** tay hoti hai. Agar a₁ ÷ a₂ = b₁ ÷ b₂, to dono lines ka jhukaav ek jaisa hai: ya to parallel hongi ya ek-doosri ke upar. Phir constant ratio batata hai ki kya wo ek hi line hain (c ratio bhi barabar) ya thodi hati hui (c ratio alag).

### Topic 3 se link: zero denominator ka matlab

Topic 3 mein special case tha a₁b₂ − a₂b₁ = 0. Is condition ko ratio ki shakal mein likhein (dono taraf b₂ aur a₂ se bhaag dene par):

a₁b₂ = a₂b₁, yaani **a₁ ÷ a₂ = b₁ ÷ b₂**

Bilkul wahi condition jahan ratio test ki pehli shart **toot jaati** hai! Matlab:

- Jab a₁b₂ − a₂b₁ **zero nahi** hota, to ek hal milta hai (Topic 3 ka formula chalta hai).
- Jab a₁b₂ − a₂b₁ **zero** hota hai, to lines **parallel ya coincident** hain. Tab ya to koi hal nahi, ya anginat hal. Isliye formula mein "ek hal" nikalne ki koshish bekaar thi.

Yahin se Topic 3 ke zero denominator ka rahasya khul gaya.

### Example 1: ratio test lagao

(a) **x + y = 5** aur **x − y = 1** (Vihaan aur Zara).

Standard form: x + y − 5 = 0 aur x − y − 1 = 0.
a₁ = 1, b₁ = 1, c₁ = −5 aur a₂ = 1, b₂ = −1, c₂ = −1.

- a₁ ÷ a₂ = 1 ÷ 1 = 1
- b₁ ÷ b₂ = 1 ÷ (−1) = −1

1 ≠ −1, to **ek hi hal**. Graph 1 ne bhi yahi dikhaya ((3, 2)).

(b) **x + y = 3** aur **2x + 2y = 10**, yaani x + y − 3 = 0 aur 2x + 2y − 10 = 0.

- a₁ ÷ a₂ = 1 ÷ 2
- b₁ ÷ b₂ = 1 ÷ 2
- c₁ ÷ c₂ = (−3) ÷ (−10) = 3 ÷ 10

Pehle do barabar (½), teesra alag (3/10 ≠ 1/2). To **koi hal nahi**. Jaanch: 2x + 2y = 10 ko 2 se bhaag do to x + y = 5 aata hai. Ek hi (x + y) 3 bhi aur 5 bhi ho nahi sakta ✅

(c) **2x + y = 6** aur **4x + 2y = 12**, yaani 2x + y − 6 = 0 aur 4x + 2y − 12 = 0.

- a₁ ÷ a₂ = 2 ÷ 4 = 1/2
- b₁ ÷ b₂ = 1 ÷ 2 = 1/2
- c₁ ÷ c₂ = (−6) ÷ (−12) = 1/2

Teeno barabar, to **anginat hal**. Jaanch: 4x + 2y = 12, 2x + y = 6 ka double hai ✅

### Example 2: k nikalo taaki koi hal na ho

**3x + 2y = 5** aur **6x + ky = 12**. k ki wo value nikalo jisse koi hal na ho.

Standard form: 3x + 2y − 5 = 0 aur 6x + ky − 12 = 0.

Koi hal na ho, iske liye chahiye: a₁ ÷ a₂ = b₁ ÷ b₂ ≠ c₁ ÷ c₂.

- a₁ ÷ a₂ = 3 ÷ 6 = 1/2
- b₁ ÷ b₂ = 2 ÷ k

Pehle do barabar: 2 ÷ k = 1/2, to **k = 4**.

Ab c ratio dekho: c₁ ÷ c₂ = (−5) ÷ (−12) = 5/12, aur 5/12 ≠ 1/2 ✅. To shart poori hui.

**k = 4**

**Jaanch:** k = 4 par equations: 3x + 2y = 5 aur 6x + 4y = 12. Doosri ko 2 se bhaag do: 3x + 2y = 6. Ek hi 3x + 2y ya to 5 ho sakta hai ya 6, dono nahi. Koi hal nahi ✅

### Example 3: k nikalo taaki anginat hal hon

**2x + 3y = 7** aur **(k − 1)x + (k + 2)y = 3k**. k ki value nikalo jisse anginat hal hon.

Standard form: 2x + 3y − 7 = 0 aur (k − 1)x + (k + 2)y − 3k = 0.

Anginat hal ke liye teeno ratio barabar: 2 ÷ (k − 1) = 3 ÷ (k + 2) = 7 ÷ 3k.

**Pehle do barabar karo:**
2 ÷ (k − 1) = 3 ÷ (k + 2)
Cross-multiply: 2(k + 2) = 3(k − 1)
2k + 4 = 3k − 3
7 = k

**Ab pehla aur teesra barabar karo** (taaki pakka ho jaye):
2 ÷ (k − 1) = 7 ÷ 3k
Cross-multiply: 2 × 3k = 7(k − 1)
6k = 7k − 7
k = 7

Dono se **k = 7**.

**Jaanch:** k = 7 par doosri equation: (7 − 1)x + (7 + 2)y = 3 × 7, yaani **6x + 9y = 21**. Ye 2x + 3y = 7 ka theek **3 guna** hai (2 × 3 = 6, 3 × 3 = 9, 7 × 3 = 21) ✅. Teeno ratio 1/3 hain, to anginat hal.

### Example 4: ek chalaaki wali baat (c ratio zaroor dekho)

**kx + 2y = 5** aur **6x + 4y = 8**. Kya k ki koi value hai jisse anginat hal hon? Aur koi hal na ho, ye kab hoga?

Standard form: kx + 2y − 5 = 0 aur 6x + 4y − 8 = 0.

Pehle do barabar: k ÷ 6 = 2 ÷ 4 = 1/2, to k = 3.

Ab c ratio: (−5) ÷ (−8) = 5/8. Ye 1/2 ke barabar **nahi** hai (5/8 ≠ 4/8).

To k = 3 par ratio **a = b ≠ c** hua. Yaani **koi hal nahi**. Is sawaal mein k ki koi bhi value anginat hal nahi dilati.

**Jaanch:** k = 3: 3x + 2y = 5 aur 6x + 4y = 8, yaani 3x + 2y = 4. Ek hi 3x + 2y, 5 aur 4 dono nahi ho sakta ✅

**Seekh:** sirf a aur b ke ratio barabar karne se hum bas "parallel ya coincident" tak pahunchte hain. Kaun sa? Ye **c ratio** batata hai. Isliye teesra ratio kabhi mat chhodo.

**k ki baaki values par kya hoga?** k ≠ 3 par a ka ratio aur b ka ratio alag ho jayenge, to **ek hi hal** hoga. Tab lines kaatti hain, bas itna yaad rakho.

---

## Part D: Graph ki seema (limitation)

Graph ek kamaal ka tool hai, par ek kamzori hai: jab hal **fraction ya decimal** ho, to graph se bas **andaaza** milta hai, pakka jawab nahi.

### Example 5: 2x + y = 4 aur x + 3y = 5

**Pehli line: 2x + y = 4**

| x | 0 | 1 | 2 |
|---|---|---|---|
| y = 4 − 2x | 4 | 2 | 0 |

Jaanch: 0 + 4 = 4 ✅, 2 + 2 = 4 ✅, 4 + 0 = 4 ✅

**Doosri line: x + 3y = 5**

| x | −1 | 2 | 5 |
|---|---|---|---|
| y = (5 − x) ÷ 3 | 2 | 1 | 0 |

Jaanch: −1 + 6 = 5 ✅, 2 + 3 = 5 ✅, 5 + 0 = 5 ✅

Graph par dono lines kaatengi x = 1 aur x = 2 ke **beech mein**, kahin x ≈ 1.4 aur y ≈ 1.2 ke aas-paas. Par graph paper par kisi ek point ko "ye bilkul 1.4 hai" kehna mushkil hai: pencil ki moti line, hath ka halka sa hilna, aur aankh ka andaaza sab milkar thoda galat kar dete hain.

Algebra se (Topic 1 ya 2 ka tareeka) saaf nikalta hai: **x = 7/5 = 1.4, y = 6/5 = 1.2**.

**Jaanch:**
- 2x + y = 2(1.4) + 1.2 = 2.8 + 1.2 = 4 ✅
- x + 3y = 1.4 + 3(1.2) = 1.4 + 3.6 = 5 ✅

Ye dikhata hai ki graph ka kaam **dekhna aur samajhna** hai (kitne hal, kahan ke aas-paas). Exact jawab ke liye algebra ke tareeke behtar hain. Aur jab hal wo integers ho (jaise 3, 2), to graph ek bahut saaf aur sundar tareeka hai.

**Ek tareeka jo dono ka fayda deta hai:** pehle ratio test se pata karo ki ek hal hai ya nahi. Phir graph se andaaza lagao ki hal kitna ke aas-paas hoga. Aur end mein algebra se exact jawab nikalo aur dono equations mein daal kar jaanch lo.

---

## Aam galtiyan (bachke rehna)

**Galti 1: x aur y ulta plot kar dena**

Point (3, 2) ka matlab hai x = 3 (side mein 3 kadam), y = 2 (upar 2 kadam). Agar (2, 3) lagaya, to ye bilkul alag chowk hai. Graph 2 mein (2, 3) hal tha, par graph 1 mein (3, 2). Dono alag points hain. Order hamesha **(x, y)**.

**Galti 2: sirf 2 points se line kheench dena**

Dono points sahi hon to line sahi, par agar ek point mein addition-subtraction ki galti ho gayi, to line tedhi ban jati hai aur aapko pata nahi chalta.
Jaise x − y = 1 ke liye (1, 0) aur (3, 3) liya (galat). Line ban jayegi par galat. **Teesra point** (5, 4) uske saath ek seedhi line par nahi aayega, aur aap pakad loge. Isliye **3 points**, aur teesra point jaanch ka kaam karta hai.

**Galti 3: Parallel aur coincident ko mila dena**

Dono mein a₁ ÷ a₂ = b₁ ÷ b₂ hota hai. Farak sirf **c ratio** mein hai.
- x + y = 3 aur 2x + 2y = 6: teeno ratio 1/2, **coincident** (anginat hal).
- x + y = 3 aur 2x + 2y = 10: c ratio 3/10, **parallel** (koi hal nahi).

Bas ek number ke badalne se jawab poora ulta ho gaya.

**Galti 4: Ratio test mein sign ki galti**

Pehle sab kuch ek taraf karo, phir coefficients (sign ke saath) padho.

3x − 2y = 4 aur 6x − 4y = 8 lo. Sahi form: 3x − 2y − 4 = 0 aur 6x − 4y − 8 = 0.
- Sahi: b₁ ÷ b₂ = (−2) ÷ (−4) = 1/2, c₁ ÷ c₂ = (−4) ÷ (−8) = 1/2. Teeno 1/2, to **anginat hal**.
- Galat (sign bhool gaye): b₁ = 2 aur b₂ = −4 padh liya, to b ratio −1/2 aaya, a ratio 1/2 se alag, to galat jawab "ek hi hal" nikla. Ya c₁ = −4 liya par c₂ = +8 (sign badalna bhool gaye), to c ratio −1/2 aaya aur galat jawab "koi hal nahi" nikla. Dono baar jawab ulta.

Aur x − y = 1 mein **b = −1** hai, 1 nahi, aur c = −1 hai (constant ko left side laate waqt sign badalta hai).

**Galti 5: k wale sawaal mein c ratio dekhna bhool jana**

Example 4 mein dekha tha ki a aur b ka ratio barabar karke k = 3 milta hai, par wahan c ratio alag nikla, to hal "anginat" nahi, "koi nahi" tha. Hamesha teeno ratio dekho.

**Galti 6: Graph se mile point ko bina jaanch ke jawab maan lena**

Graph se mila point sirf andaaza ho sakta hai. Hamesha dono equations mein daal kar dekho.

---

## Quick Recap

- **Graphical method:** dono equations ki 3-3 points ki table, plot karo, jahan lines milein wahi hal. Hal ko dono equations mein daal kar jaanch lo.
- **Teen points** isliye lo ki teesra point jaanch ka kaam kare.
- Do lines ke teen hi sambhavnayein: **kaatti hain** (ek hal), **parallel** (koi hal nahi), **coincident** (anginat hal).
- **Consistent** = hal hai (ek ya anginat). **Inconsistent** = hal nahi hai. **Dependent** = ek equation doosri ki copy hai.
- **Ratio test (extra shortcut):** a₁ ÷ a₂ ≠ b₁ ÷ b₂ to ek hal. a₁ ÷ a₂ = b₁ ÷ b₂ ≠ c₁ ÷ c₂ to koi hal nahi. Teeno barabar to anginat hal. Pehle equation ko ax + by + c = 0 form mein likho, aur sign ka dhyan rakho.
- Topic 3 ka zero denominator (a₁b₂ − a₂b₁ = 0) wahi hai jahan a₁ ÷ a₂ = b₁ ÷ b₂: lines parallel ya coincident.
- **Seema:** jab hal fraction ho, graph se bas andaaza milta hai. Exact jawab algebra se.
- Galtiyan: x, y ulta plot karna; 2 hi points lena; parallel aur coincident mein ghalat-malat; sign ki galti; c ratio chhodna.

---

## Practice Questions

1. Solve graphically: x + y = 7 and x − y = 3. Make a table of three points for each line, sketch both lines, read off the meeting point, and verify it in both equations.

2. Solve graphically: 2x + y = 5 and x − y = 1. Use three points for each line and verify your answer.

3. Without solving, decide whether each pair has one solution, no solution, or infinitely many solutions. Show the ratios.
   (a) x + 2y = 4 and 2x + 4y = 12
   (b) 3x + 2y = 6 and 6x + 4y = 12
   (c) x − 3y = 3 and 2x + y = 7

4. Find the value of k for which the system 2x + 3y = 7 and 4x + ky = 9 has no solution. Verify your answer.

5. Find the value of k for which the system kx + 3y = 6 and 4x + 6y = 12 has infinitely many solutions. Verify your answer.

6. Is there any value of k for which 2x − y = 3 and 4x − 2y = k has exactly one solution? Explain.

7. A student wrote the pair 3x − y = 2 and 6x − 2y = 4 and said "a₁ ÷ a₂ = 3 ÷ 6 = 1/2, b₁ ÷ b₂ = 1 ÷ 2 = 1/2, c₁ ÷ c₂ = 2 ÷ 4 = 1/2, so infinitely many solutions". Was the final answer correct? Was the working correct? Explain what the student should be careful about.

8. State True or False:
   (a) Two lines that meet at exactly one point give a consistent system.
   (b) Parallel lines give a system with infinitely many solutions.
   (c) A system with exactly two solutions is possible.
   (d) If a₁ ÷ a₂ ≠ b₁ ÷ b₂, the system always has a unique solution.
   (e) A graph always gives the exact solution, even if it is a fraction.

### Answers

1. x + y = 7, y = 7 − x:

   | x | 3 | 5 | 7 |
   |---|---|---|---|
   | y | 4 | 2 | 0 |

   Jaanch: 3 + 4 = 7, 5 + 2 = 7, 7 + 0 = 7 ✅

   x − y = 3, y = x − 3:

   | x | 3 | 5 | 7 |
   |---|---|---|---|
   | y | 0 | 2 | 4 |

   Jaanch: 3 − 0 = 3, 5 − 2 = 3, 7 − 4 = 3 ✅

   Dono tables mein (5, 2) common hai, to lines (5, 2) par milti hain.
   **x = 5, y = 2.** Jaanch: 5 + 2 = 7 ✅ aur 5 − 2 = 3 ✅

2. 2x + y = 5, y = 5 − 2x:

   | x | 1 | 2 | 3 |
   |---|---|---|---|
   | y | 3 | 1 | −1 |

   Jaanch: 2 + 3 = 5, 4 + 1 = 5, 6 − 1 = 5 ✅

   x − y = 1, y = x − 1:

   | x | 1 | 2 | 3 |
   |---|---|---|---|
   | y | 0 | 1 | 2 |

   Jaanch: 1 − 0 = 1, 2 − 1 = 1, 3 − 2 = 1 ✅

   Common point **(2, 1)**: dono tables mein hai. **x = 2, y = 1.**
   Jaanch: 2(2) + 1 = 5 ✅ aur 2 − 1 = 1 ✅

3. (a) x + 2y − 4 = 0, 2x + 4y − 12 = 0. a: 1/2, b: 2/4 = 1/2, c: (−4) ÷ (−12) = 1/3. a = b ≠ c, to **koi hal nahi**.
   (b) 3x + 2y − 6 = 0, 6x + 4y − 12 = 0. a: 1/2, b: 1/2, c: (−6) ÷ (−12) = 1/2. Teeno barabar, to **anginat hal**.
   (c) x − 3y − 3 = 0, 2x + y − 7 = 0. a: 1/2, b: (−3) ÷ 1 = −3. 1/2 ≠ −3, to **ek hi hal**.
   Jaanch (c): algebra se x = 3 + 3y ko 2x + y = 7 mein daalo: 6 + 6y + y = 7, 7y = 1, y = 1/7 aur x = 24/7. Check: 24/7 − 3/7 = 21/7 = 3 ✅ aur 48/7 + 1/7 = 49/7 = 7 ✅. Ek hal mila.
   Jaanch (a): 2x + 4y = 12 ko 2 se bhaago: x + 2y = 6, jabki pehli x + 2y = 4. Contradiction ✅
   Jaanch (b): doosri pehli ka double hai ✅

4. 2x + 3y − 7 = 0 aur 4x + ky − 9 = 0. Koi hal nahi: 2/4 = 3/k ≠ 7/9. 2/4 = 1/2, to 3/k = 1/2, **k = 6**. c ratio: 7/9 ≠ 1/2 ✅. 
   Jaanch: k = 6 par 4x + 6y = 9. Pehli ko 2 se guna karo: 4x + 6y = 14. Ek hi 4x + 6y ya to 14 ya 9, dono nahi. Koi hal nahi ✅

5. kx + 3y − 6 = 0 aur 4x + 6y − 12 = 0. Anginat hal: k/4 = 3/6 = 6/12. 3/6 = 1/2 aur 6/12 = 1/2 barabar hain. k/4 = 1/2, to **k = 2**.
   Jaanch: k = 2 par 2x + 3y = 6. Doosri 4x + 6y = 12 iska double hai ✅

6. Equations: 2x − y − 3 = 0 aur 4x − 2y − k = 0. a ratio = 2/4 = 1/2. b ratio = (−1) ÷ (−2) = 1/2. **Dono ratio hamesha barabar** hain, k kuch bhi ho. Isliye ek hi hal (a ≠ b ratio) kabhi nahi ban sakta. k = 6 par: 4x − 2y = 6, jo 2x − y = 3 ka double hai, to c ratio 3/6 = 1/2 bhi barabar, anginat hal. k ≠ 6 par koi hal nahi.
   Jaanch: k = 6 mein 4x − 2y = 6, 2 se bhaago to 2x − y = 3 ✅. k = 8 ke liye: 2x − y = 4, jo 2x − y = 3 se takrata hai ✅

7. **Final answer sahi hai** (anginat hal): 6x − 2y = 4 ko 2 se bhaago to 3x − y = 2 milta hai. Par working mein galti hai: b₁ ÷ b₂ = (−1) ÷ (−2) = 1/2 aana chahiye. Student ne signs ko ignore kiya, aur ye kismat se theek aa gaya kyunki dono b negative hain. Standard form mein c₁ = −2 aur c₂ = −4, to c ratio = (−2) ÷ (−4) = 1/2 ✅. Padhte waqt sign hamesha saath rakho, warna kisi aur sawal mein jawab ulta ho jayega.

8. (a) **True** ✅. Ek point par milti hain, hal hai, consistent.
   (b) **False** ❌. Parallel lines ka koi common point nahi, to koi hal nahi (inconsistent).
   (c) **False** ❌. Do alag seedhi lines ek se zyada point par nahi kaat sakti. Ya 0, ya 1, ya anginat hal.
   (d) **True** ✅. Lines parallel/coincident nahi hain, to bilkul ek point par kaatti hain.
   (e) **False** ❌. Fraction wale hal mein graph se sirf andaaza milta hai.

---

Ab aap kisi bhi do equations ko dekh kar bata sakte ho ki hal ek hoga, koi nahi hoga ya anginat, aur graph se uska nazara bhi dekh sakte ho. Hal nikalne ke tareeke ab aapke paas chaar hain: substitution, elimination, cross-multiplication aur graph.

**Aage kya?** Kabhi-kabhi equations dekhne mein linear nahi lagti: jaise 2/x + 3/y = 13, jahan x aur y neeche (denominator mein) baithe hain. Topic 5 mein hum ek chhoti si chaal se inhe bhi simple linear equations bana kar hal karna seekhenge.
