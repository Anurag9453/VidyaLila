# Chapter: Coordinate Geometry (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [coordinate-geometry.md](coordinate-geometry.md) se aage chalti hai.** (Topic 1 wahan hai.)
> **Topics covered in this file:**
> 2. Coordinates of a Point in a Plane, and Quadrants

---

# Topic 2: Coordinates of a Point in a Plane, aur Quadrants

Topic 1 mein humne coordinate geometry ki neev rakhi thi. Humne dekha ki do number lines ko ek doosre ke **perpendicular** (90° par) rakhkar ek **coordinate system** banta hai. Leti hui line **x-axis** hai, khadi line **y-axis**, aur jahan dono milti hain wo point **origin** hai. Humne **ordered pair (x, y)** bhi seekha, jisme order bahut maayne rakhta hai. Aur **sign convention** bhi: origin se **right aur upar positive (+)**, **left aur neeche negative (−)**.

Ab tak humne ye "naksha" (map) banana seekha. Is topic mein hum us naksha ko **istemal karna** seekhenge:

- Kisi bhi point ka **pata (address)** kaise padhein, aur diya hua pata dekh kar point kaise lagayein.
- Dono axes plane ko **chaar hisson** mein baant dete hain. Inhe **quadrants** kehte hain, aur har hisse ki apni sign wali pehchaan hoti hai.

---

## Mele mein dost ko dhundhna

Diwali ka mela laga hai. Mele ke beech mein ek bada **fountain** hai. Saare log raasta fountain se hi batate hain.

Aapka dost Rohan phone par bolta hai:

"Main fountain se **3 kadam right** gaya, phir **2 kadam aage (upar)**. Yahan gol-gappe ka stall hai, yahin aa ja!"

Aap fountain par khade ho. Aap bhi 3 kadam right chalte ho, phir 2 kadam upar, aur Rohan mil jata hai.

Ab Priya ka message aata hai:

"Main fountain se **2 kadam left** aur **1 kadam neeche (peeche)** hoon, chaat wale ke paas."

Dekho, Priya ki jagah bhi do numbers se hi pata chal gayi. Bas is baar direction ulti thi (left aur neeche).

Coordinate geometry mein bhi bilkul yahi hota hai:
- **Fountain = origin**
- **Right/left kitna = x-coordinate**
- **Upar/neeche kitna = y-coordinate**

Rohan ka pata hai **(3, 2)**, aur Priya ka pata hai **(−2, −1)**. (Sign convention Topic 1 wala hai: left aur neeche negative.)

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Coordinates** | Kisi point ka "pata", do numbers ka jodha (x, y) | P(3, 2) |
| **Abscissa** | Point ka **x-coordinate**, yaani pehla number | (3, 2) ka abscissa **3** |
| **Ordinate** | Point ka **y-coordinate**, yaani doosra number | (3, 2) ka ordinate **2** |
| **Plot karna** | Diye hue coordinates se graph par point lagana | (3, 2) ko lagana |
| **Quadrant** | Dono axes se bane chaar hisson mein se ek hissa | Quadrant I, II, III, IV |
| **Perpendicular distance** | Point se kisi line tak sabse chhoti, seedhi (90° wali) doori | P se y-axis tak ki doori |

**Abscissa aur ordinate yaad rakhne ki trick:** Alphabet mein **a**bscissa pehle aata hai aur **o**rdinate baad mein. Isi tarah **x** pehle aata hai aur **y** baad mein. To abscissa = x, ordinate = y.

---

## Part A: Point ke coordinates ka asli matlab

Maan lo graph par ek point **P** hai. Uske coordinates do sawaalon ke jawab hain:

1. **P, y-axis se kitna door hai** (left ya right)? Ye **x-coordinate** hai.
2. **P, x-axis se kitna door hai** (upar ya neeche)? Ye **y-coordinate** hai.

Dhyan do, yahan ek ulti lagne wali baat hai:

> **x-coordinate = y-axis se doori**
> **y-coordinate = x-axis se doori**

Ye ulta kyun hai? Socho: right-left kitna gaye, ye naapne ke liye hum **khadi line (y-axis)** se naapte hain. Aur upar-neeche kitna gaye, ye **leti line (x-axis)** se naapte hain.

Aur doori hamesha **perpendicular** (seedhi, 90° wali) li jati hai, tircchi nahi.

```
              y
              |
              |         P(3, 2)
              |         *
              |         :
              | <--3--> :  2 (x-axis se upar)
              |         :
  ------------O-------------------- x
```

P, y-axis se **3** unit right hai, isliye x = 3. Aur x-axis se **2** unit upar hai, isliye y = 2. To **P = (3, 2)**.

Sign kaise lagega, ye Topic 1 wala sign convention batata hai:
- y-axis ke **right** mein ho to x **positive**, **left** mein ho to x **negative**.
- x-axis ke **upar** ho to y **positive**, **neeche** ho to y **negative**.

---

## Part B: Graph se coordinates padhna (Reading)

Neeche ek graph hai. Har dot ek unit ka gap hai. Chaar points A, B, C, D lage hain.

```
                 y
 3   .  .  B  .  |  .  .  .  .
 2   .  .  .  .  |  .  .  A  .
 1   .  .  .  .  |  .  .  .  .
 0 --------------O------------ x
-1   .  .  .  .  |  .  D  .  .
-2   .  C  .  .  |  .  .  .  .
-3   .  .  .  .  |  .  .  .  .
    -4 -3 -2 -1  0  1  2  3  4
```

**Padhne ka tarika (har point ke liye):**
1. Point se **seedha neeche ya upar** x-axis tak jao. Wahan jo number hai, wo **x** hai.
2. Point se **seedha left ya right** y-axis tak jao. Wahan jo number hai, wo **y** hai.
3. Pata likho **(x, y)**, pehle x phir y.

**Point A:**
- Seedha neeche x-axis par aao: number **3**. To x = 3.
- Seedha left y-axis par aao: number **2**. To y = 2.
- **A = (3, 2)**

**Point B:**
- Seedha neeche x-axis par: **−2**. To x = −2.
- Seedha right y-axis par: **3**. To y = 3.
- **B = (−2, 3)**

**Point C:**
- Seedha upar x-axis par: **−3**. To x = −3.
- Seedha right y-axis par: **−2**. To y = −2.
- **C = (−3, −2)**

**Point D:**
- Seedha upar x-axis par: **2**. To x = 2.
- Seedha left y-axis par: **−1**. To y = −1.
- **D = (2, −1)**

| Point | Abscissa (x) | Ordinate (y) | Coordinates |
|---|---|---|---|
| A | 3 | 2 | (3, 2) |
| B | −2 | 3 | (−2, 3) |
| C | −3 | −2 | (−3, −2) |
| D | 2 | −1 | (2, −1) |

---

## Part C: Diye hue coordinates se point lagana (Plotting)

Ab ulta kaam. Pata diya hai, point lagana hai. Mele wali kahani jaisa: **"pehle x, phir y"**.

**Plot karne ke steps:**
1. **Origin** par shuru karo (fountain par khade ho jao).
2. **x dekho:** positive ho to utne unit **right**, negative ho to utne unit **left** chalo. (Abhi upar-neeche bilkul nahi jana.)
3. **y dekho:** positive ho to wahan se utne unit **upar**, negative ho to utne unit **neeche** jao.
4. Jahan pahunche, wahan dot lagao aur naam likho.

([Linear Equations in Two Variables](../linear-equations-in-two-variables/linear-equations-in-two-variables-part2.md) chapter ke graph wale topic mein bhi yahi rule "pehle chalo, phir chadho" ke naam se aaya hai. Wo padha ho to ye aur aasan lagega.)

### Example 1: P(4, 3) lagao
- Origin se **4 right**.
- Wahan se **3 upar**.
- Dot lagao: **P**.

### Example 2: Q(−3, 1) lagao
- Origin se **3 left** (x negative hai).
- Wahan se **1 upar**.
- Dot lagao: **Q**.

### Example 3: R(−2, −4) lagao
- Origin se **2 left**.
- Wahan se **4 neeche** (y negative hai).
- Dot lagao: **R**.

### Example 4: S(5, −2) lagao
- Origin se **5 right**.
- Wahan se **2 neeche**.
- Dot lagao: **S**.

### Example 5: Decimal wala point T(2.5, −1.5)
Decimal se ghabrao mat. 2.5 ka matlab hai 2 aur 3 ke **theek beech mein**.
- Origin se **2.5 right**, yaani 2 aur 3 ke beech.
- Wahan se **1.5 neeche**, yaani −1 aur −2 ke beech.
- Dot lagao: **T**.

Dhyan do: −1.5 ka matlab **−1 aur −2 ke beech** hai, 0 aur −1 ke beech nahi.

### Example 6: Fraction wala point U(−1/2, 7/2)
- −1/2 = −0.5, yaani 0 aur −1 ke beech: origin se **aadha unit left**.
- 7/2 = 3.5, yaani 3 aur 4 ke beech: wahan se **3.5 upar**.
- Dot lagao: **U**.

**Tip:** Fraction ko pehle decimal mein badal lo, plot karna aasan ho jata hai.

---

## Part D: Quadrants (chaar hisse)

### Chaar hisse kyun?

Ek roti lo. Use ek baar **khada** kaato aur ek baar **leta** kaato. Kitne tukde bane? **Chaar.**

Coordinate plane ke saath bhi yahi hota hai. x-axis (leti line) aur y-axis (khadi line) poore plane ko **chaar hisson** mein baant dete hain. Har hissa ek **quadrant** hai. ("Quad" ka matlab chaar hota hai.)

### Quadrants ki numbering

Numbering **upar-right wale hisse** se shuru hoti hai, aur **anticlockwise** chalti hai, yaani ghadi ki suiyon ki **ulti disha** mein.

```
                  y
                  |
    Quadrant II   |   Quadrant I
      (−, +)      |     (+, +)
                  |
  ----------------O---------------- x
                  |
    Quadrant III  |   Quadrant IV
      (−, −)      |     (+, −)
                  |
```

- **Quadrant I:** upar-right
- **Quadrant II:** upar-left
- **Quadrant III:** neeche-left
- **Quadrant IV:** neeche-right

**Yaad rakhne ki trick:** Capital letter **"C"** likhte waqt haath jaise ghoomta hai, waise hi chalo. Upar-right se shuru karke upar-left, phir neeche-left, phir neeche-right. Yahi I, II, III, IV hai.

### Har quadrant ke signs

| Quadrant | Kahan hai | x ka sign | y ka sign | Pattern | Example |
|---|---|---|---|---|---|
| **I** | Upar-right | + | + | (+, +) | (4, 3) |
| **II** | Upar-left | − | + | (−, +) | (−3, 1) |
| **III** | Neeche-left | − | − | (−, −) | (−2, −4) |
| **IV** | Neeche-right | + | − | (+, −) | (5, −2) |

**Signs yaad rakhne ki trick:**
- **Left side** (II aur III) mein **x negative** hota hai.
- **Neeche wali side** (III aur IV) mein **y negative** hota hai.
- Quadrant III dono taraf hai (left bhi, neeche bhi), isliye wahan **dono negative**.
- Quadrant I kisi taraf nahi (na left, na neeche), isliye wahan **dono positive**.

Bas itna yaad rakho: **"Left mein x minus, neeche mein y minus."** Baaki sab isi se nikal aata hai.

---

## Part E: Signs dekh kar quadrant batana

Point ke signs dekho, aur table se milao. Graph banane ki zaroorat hi nahi.

**Example 1:** (6, 2)
x = + , y = + → (+, +) → **Quadrant I**

**Example 2:** (−4, 9)
x = − , y = + → (−, +) → **Quadrant II**

**Example 3:** (−2.5, −6)
x = − , y = − → (−, −) → **Quadrant III**

**Example 4:** (8, −1/2)
x = + , y = − → (+, −) → **Quadrant IV**

**Example 5:** Part C ke points ke quadrant batao.

| Point | Signs | Quadrant |
|---|---|---|
| P(4, 3) | (+, +) | I |
| Q(−3, 1) | (−, +) | II |
| R(−2, −4) | (−, −) | III |
| S(5, −2) | (+, −) | IV |
| T(2.5, −1.5) | (+, −) | IV |
| U(−1/2, 7/2) | (−, +) | II |

Dhyan do: quadrant sirf **signs** se tay hota hai, numbers kitne bade ya chhote hain usse nahi. (100, 0.01) bhi Quadrant I mein hai, aur (0.5, 0.5) bhi.

---

## Part F: Letters wale sawaal (a aur b ke saath)

Aise sawaal bhi aate hain: "Agar a > 0 aur b > 0 ho, to (−a, b) kis quadrant mein hai?"

Yahan **a aur b positive numbers** hain, jaise a = 3, b = 5. Is liye:
- **a** positive hai
- **−a** negative hai (kyunki positive ke aage minus laga diya)
- **b** positive hai

To **(−a, b)** ke signs hain **(−, +)**, yaani **Quadrant II**.

**Tarika:** Agar confusion ho, to a aur b ki jagah sachche numbers rakh kar dekho. a = 3, b = 5 rakho, to (−a, b) = (−3, 5). Ye Quadrant II mein hai. ✅

### a > 0, b > 0 ke saath table

| Point | a = 3, b = 5 rakhne par | Signs | Quadrant |
|---|---|---|---|
| (a, b) | (3, 5) | (+, +) | I |
| (−a, b) | (−3, 5) | (−, +) | II |
| (−a, −b) | (−3, −5) | (−, −) | III |
| (a, −b) | (3, −5) | (+, −) | IV |

### Trick question: jab a negative ho

**Example:** Agar **a < 0** aur **b > 0** ho, to (−a, b) kis quadrant mein hai?

Yahan a khud negative hai, jaise a = −3. To −a = −(−3) = **3**, jo positive hai!
- −a = + , b = +
- (−a, b) → (+, +) → **Quadrant I**

Isliye **"−a" ko dekh kar ye mat maan lo ki wo negative hi hoga.** Pehle dekho ki a khud positive hai ya negative.

---

## Part G: Points se shape banana, aur chautha kona dhundhna

Coordinates se hum points laga kar **shapes** bhi bana sakte hain.

### Example: Rectangle ka chautha kona

Ek rectangle ABCD ke teen kone diye hain: **A(−3, 2)**, **B(2, 2)**, **C(2, −1)**. Chautha kona **D** dhundho.

**Step 1: Teeno points lagao.**

```
                 y
 3   .  .  .  .  |  .  .  .  .
 2   .  A  .  .  |  .  B  .  .
 1   .  .  .  .  |  .  .  .  .
 0 --------------O------------ x
-1   .  .  .  .  |  .  C  .  .
-2   .  .  .  .  |  .  .  .  .
    -4 -3 -2 -1  0  1  2  3  4
```

**Step 2: Pattern dekho.**
- A aur B dono ka y = 2 hai, yaani dono ek hi **leti line** par hain (upar wali side).
- B aur C dono ka x = 2 hai, yaani dono ek hi **khadi line** par hain (right wali side).
- Rectangle mein saamne wali sides barabar aur seedhi hoti hain. To D, A ke **theek neeche** hoga (A jaisa x), aur C ki **seedh mein** hoga (C jaisa y).

**Step 3: D ke coordinates.**
- D ka x = A ka x = **−3**
- D ka y = C ka y = **−1**
- **D = (−3, −1)**

Ab grid mein (−3, −1) par D laga do. Dekho, ye A ke theek neeche aur C ki seedh mein aata hai, aur chaaron kone mil kar rectangle bana dete hain.

**Jaanch:**
- AB ki lambai: x −3 se 2 tak = **5 unit**. DC ki lambai: x −3 se 2 tak = **5 unit**. Barabar ✅
- BC ki lambai: y 2 se −1 tak = **3 unit**. AD ki lambai: y 2 se −1 tak = **3 unit**. Barabar ✅

Aur ek mazedaar baat: is rectangle ke chaaron kone **alag alag quadrants** mein hain. A(−3, 2) II mein, B(2, 2) I mein, C(2, −1) IV mein, aur D(−3, −1) III mein.

---

## Part H: Aaina (mirror) wale points

Ek point lo **P(3, 2)**. Ab sirf ek sign badal kar dekho kya hota hai:

| Point | Kya badla | Kahan gaya | Quadrant |
|---|---|---|---|
| P(3, 2) | kuch nahi | upar-right | I |
| Q(−3, 2) | x ka sign | y-axis ke **doosri taraf** (left mein) | II |
| R(3, −2) | y ka sign | x-axis ke **doosri taraf** (neeche) | IV |
| S(−3, −2) | dono signs | dono axes ke doosri taraf | III |

**Samjho aise:**
- **x ka sign badlo** to point y-axis ke **aaine** mein dikhta hai, jaise y-axis ek mirror ho. Left-right badal jata hai, upar-neeche wahi rehta hai.
- **y ka sign badlo** to point x-axis ke aaine mein dikhta hai. Upar-neeche badal jata hai, left-right wahi rehta hai.

```
                  y
                  |
      Q(−3, 2) *  |  * P(3, 2)
                  |
  ----------------O---------------- x
                  |
      S(−3, −2) * |  * R(3, −2)
                  |
```

Chaaron points origin se barabar doori par, ek sundar pattern mein hain.

---

## Aam galtiyan (bachke rehna)

**Galti 1: x aur y ka order ulta likhna**
Topic 1 mein dekha tha ki order maayne rakhta hai. (3, 2) ka matlab 3 right aur 2 upar hai. (2, 3) ek alag point hai: 2 right aur 3 upar. Hamesha **pehle x, phir y**.

**Galti 2: "Abscissa = x-axis se doori" samajhna**
Ulta hai! **Abscissa (x) = y-axis se doori.** **Ordinate (y) = x-axis se doori.** P(3, 2) y-axis se 3 door hai aur x-axis se 2 door.

**Galti 3: Quadrants ko clockwise ginna**
Numbering **anticlockwise** hai: I upar-right, II upar-left, III neeche-left, IV neeche-right. Agar clockwise gin liya to II aur IV ki jagah aapas mein badal jayegi, jo galat hai.

**Galti 4: Tirchha (diagonal) chalna**
Point lagate waqt seedha diagonal mat chalo. Pehle sirf **right/left** (x), phir sirf **upar/neeche** (y).

**Galti 5: Negative decimal ko galat jagah lagana**
−1.5 ka matlab **−1 aur −2 ke beech** hai. Ise 0 aur −1 ke beech mat lagao (wo −0.5 hota).

**Galti 6: "−a" ko hamesha negative samajhna**
Agar a khud negative ho (jaise a = −3), to −a = 3, jo positive hai. Pehle dekho ki a kaisa hai.

**Galti 7: Graph padhte waqt galat axis se number uthana**
x-coordinate ke liye **seedha upar/neeche x-axis** tak jao. y-coordinate ke liye **seedha left/right y-axis** tak jao. Ulta mat karna.

---

## Quick Recap

- Point ke **coordinates (x, y)** uska pata hain.
- **Abscissa = x-coordinate** = y-axis se perpendicular doori (sign ke saath).
- **Ordinate = y-coordinate** = x-axis se perpendicular doori (sign ke saath).
- **Padhna:** point se seedha x-axis tak jao (x mila), phir seedha y-axis tak (y mila).
- **Plot karna:** origin se pehle x (right/left), phir y (upar/neeche). Kabhi diagonal nahi.
- Dono axes plane ko **4 quadrants** mein baant-te hain, jinki numbering upar-right se **anticlockwise** hai.
- **Signs:** I (+, +), II (−, +), III (−, −), IV (+, −). Trick: **left mein x minus, neeche mein y minus.**
- Quadrant sirf **signs** se tay hota hai, numbers ke size se nahi.
- Letters wale sawaal mein (jaise −a) sachche numbers rakh kar check karo.
- **x ka sign badlo** to point y-axis ke aaine mein jata hai. **y ka sign badlo** to x-axis ke aaine mein.

---

## Practice Questions

1. Write the abscissa and the ordinate of each point:
   (a) (5, −3)
   (b) (−7, 4)
   (c) (−1.5, −2.5)

2. In which quadrant does each point lie?
   (a) (6, 2)
   (b) (−4, 9)
   (c) (−3, −8)
   (d) (2.5, −7)
   (e) (−1/2, 3/4)

3. Write the coordinates of the points P, Q, R and S shown below. Also state the quadrant of each point.

   ```
                    y
    3   .  .  .  .  |  P  .  .  .
    2   .  .  .  .  |  .  .  .  .
    1   Q  .  .  .  |  .  .  .  .
    0 --------------O------------ x
   -1   .  .  .  .  |  .  .  .  .
   -2   .  .  .  .  |  .  .  S  .
   -3   .  .  R  .  |  .  .  .  .
       -4 -3 -2 -1  0  1  2  3  4
   ```

4. If a > 0 and b > 0, state the quadrant in which each point lies:
   (a) (a, −b)
   (b) (−a, −b)
   (c) (−a, b)

5. If a < 0 and b > 0, state the quadrant in which each point lies:
   (a) (a, b)
   (b) (−a, b)
   (c) (−a, −b)

6. Three vertices of a rectangle ABCD are A(−2, −1), B(3, −1) and C(3, 2). Find the coordinates of the fourth vertex D. In which quadrant does D lie?

7. For the point (4, −3), write the point:
   (a) on the opposite side of the y-axis at the same distance,
   (b) on the opposite side of the x-axis at the same distance.
   State the quadrant of each.

8. State whether each statement is true or false. Give a reason.
   (a) (3, 5) and (5, 3) represent the same point.
   (b) The abscissa of a point is its distance from the x-axis.
   (c) A point with a negative abscissa and a positive ordinate lies in Quadrant II.
   (d) In Quadrant IV, both coordinates are negative.

### Answers

1. (a) Abscissa **5**, ordinate **−3**
   (b) Abscissa **−7**, ordinate **4**
   (c) Abscissa **−1.5**, ordinate **−2.5**

2. (a) (+, +) → **Quadrant I**
   (b) (−, +) → **Quadrant II**
   (c) (−, −) → **Quadrant III**
   (d) (+, −) → **Quadrant IV**
   (e) −1/2 negative, 3/4 positive → (−, +) → **Quadrant II**

3. Har point se seedha x-axis tak (x ke liye) aur seedha y-axis tak (y ke liye) jao:
   - **P = (1, 3)**, (+, +) → Quadrant I
   - **Q = (−4, 1)**, (−, +) → Quadrant II
   - **R = (−2, −3)**, (−, −) → Quadrant III
   - **S = (3, −2)**, (+, −) → Quadrant IV

4. a = 3, b = 5 rakh kar dekho:
   (a) (3, −5) → (+, −) → **Quadrant IV**
   (b) (−3, −5) → (−, −) → **Quadrant III**
   (c) (−3, 5) → (−, +) → **Quadrant II**

5. a = −3, b = 5 rakh kar dekho (a negative hai):
   (a) (a, b) = (−3, 5) → (−, +) → **Quadrant II**
   (b) −a = 3, to (−a, b) = (3, 5) → (+, +) → **Quadrant I**
   (c) −a = 3, −b = −5, to (3, −5) → (+, −) → **Quadrant IV**

6. A aur B ka y = −1 (same), B aur C ka x = 3 (same). To D ka x = A ka x = −2, aur D ka y = C ka y = 2.
   **D = (−2, 2)**, jo (−, +) hai, yaani **Quadrant II**.
   Jaanch: AB = 3 − (−2) = 5, DC = 3 − (−2) = 5 ✅. BC = 2 − (−1) = 3, AD = 2 − (−1) = 3 ✅

7. (a) x ka sign badlo: **(−4, −3)**, (−, −) → **Quadrant III**
   (b) y ka sign badlo: **(4, 3)**, (+, +) → **Quadrant I**
   (Original point (4, −3) Quadrant IV mein hai.)

8. (a) **False.** Order maayne rakhta hai. (3, 5) matlab 3 right, 5 upar. (5, 3) matlab 5 right, 3 upar. Dono alag points hain. ❌
   (b) **False.** Abscissa (x) point ki **y-axis** se doori hai, x-axis se nahi. ❌
   (c) **True.** (−, +) wala pattern Quadrant II ka hai. ✅
   (d) **False.** Quadrant IV mein (+, −) hota hai: x positive, y negative. Dono negative sirf Quadrant III mein hote hain. ❌

---

Shuru mein quadrants ke signs ulte-seedhe lag sakte hain, par bas ek line pakdo: **left mein x minus, neeche mein y minus.** Do-teen graph khud bana loge to ye hamesha ke liye yaad ho jayega.

**Agle topic mein (Topic 3):** Ab tak ke saare points kisi na kisi quadrant ke andar the. Par agar point **theek axis ke upar** baitha ho, jaise (3, 0) ya (0, −2), to wo kis quadrant mein hai? Jawab chaunkane wala hai. Jab ek coordinate 0 ho to kya hota hai, ye Topic 3 mein dekhenge.
