# Chapter: Linear Equations in Two Variables (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [linear-equations-in-two-variables.md](linear-equations-in-two-variables.md) se aage chalti hai** (wahan Topic 1 hai).
> **Topics covered in this file:**
> 2. Graph of a Linear Equation in Two Variables

---

# Topic 2: Graph of a Linear Equation in Two Variables

Topic 1 mein hum ne dekha tha ki do variables wali linear equation ko **ax + by + c = 0** ki shakal mein likhte hain, aur uska solution ek **ordered pair (x, y)** hota hai. Humne table bana kar solutions dhundhe the, aur ye bhi dekha tha ki aisi equation ke **anginat (infinitely many) solutions** hote hain.

Ab ek sawal: agar solutions anginat hain, to unhe ek saath kaise dikhayein? Sabko likhna to mumkin hi nahi hai.

Jawab hai **graph**. Is topic mein hum har solution (x, y) ko kagaz par ek **point** ki tarah lagayenge. Phir ek jaadu dekhenge: ye saare points ek hi **seedhi line** par aate hain. Wo line hi equation ki poori kahani bata deti hai.

---

## Cinema hall ki kahani

Topic 1 mein cinema ticket ("Row 5, Seat 3") se dekha tha ki (x, y) mein kram kyun zaroori hai. Ab usi ticket ko ek nayi nazar se dekho: wo ticket aapko hall mein ek **pakki jagah** tak pahunchata hai. Ek number batata hai kitna **side mein chalna** hai, doosra kitna **upar chadhna** hai. Do numbers, ek jagah.

Graph paper bhi aisa hi ek cinema hall hai. Har point ka ek "ticket" hota hai: **(x, y)**. Topic 1 wala ordered pair yahi ticket hai.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Cartesian plane** | Graph paper jisme do number lines ek doosre ko seedha (90° par) kaatti hain | Neeche wala graph |
| **x-axis** | Aadi (horizontal) number line | Left se right |
| **y-axis** | Khadi (vertical) number line | Neeche se upar |
| **Origin** | Jahan dono axes milte hain | Point (0, 0), naam O |
| **Coordinates** | Kisi point ke do numbers (x, y) | (3, 2) |
| **Quadrant** | Axes se bane chaar hisson mein se ek | I, II, III, IV |
| **Plot karna** | Point ko graph par sahi jagah lagana | (3, 2) par dot lagana |
| **Graph of an equation** | Equation ke saare solutions ko points ki tarah lagane par jo shape bane | x + y = 5 ki line |

---

## Part A: Cartesian plane (bas utna jitna zaroori hai)

### Axes aur origin

Do number lines lo:
- Ek **aadi** line: ise **x-axis** kehte hain. Origin ke right mein positive numbers, left mein negative.
- Ek **khadi** line: ise **y-axis** kehte hain. Origin ke upar positive, neeche negative.

Dono jahan milti hain wo point **origin (O)** hai, jiske coordinates **(0, 0)** hain.

### Chaar quadrants

Do axes kagaz ko chaar hisson mein baant dete hain:

```
                 y
                 |
      II         |         I
    (-, +)       |       (+, +)
                 |
  ---------------O---------------> x
                 |
      III        |         IV
    (-, -)       |       (+, -)
                 |
```

| Quadrant | x ka sign | y ka sign | Example |
|---|---|---|---|
| I | + | + | (3, 2) |
| II | - | + | (-2, 4) |
| III | - | - | (-3, -1) |
| IV | + | - | (4, -2) |

Quadrants ki ginti **I se shuru hokar ulti ghadi (anticlockwise)** chalti hai: upar-right se, upar-left, neeche-left, neeche-right.

### Point kaise plot karein: "pehle chalo, phir chadho"

Point **(x, y)** ke liye:
1. **Origin se shuru karo.**
2. **x** jitna **chalo**: positive ho to right, negative ho to left.
3. Phir **y** jitna **chadho**: positive ho to upar, negative ho to neeche.
4. Wahan dot lagao aur naam likh do.

**Examples:**
- **(3, 2):** 3 right, 2 upar. Quadrant I.
- **(-2, 4):** 2 left, 4 upar. Quadrant II.
- **(-3, -1):** 3 left, 1 neeche. Quadrant III.
- **(4, -2):** 4 right, 2 neeche. Quadrant IV.

### Axes par wale points

- **(5, 0):** 5 right, upar-neeche bilkul nahi. Ye **x-axis** par hai.
- **(0, 3):** chalna nahi, seedha 3 upar. Ye **y-axis** par hai.

Yaad rakho: **x-axis par har point ka y = 0** hota hai, aur **y-axis par har point ka x = 0**. Ye cheez aage bahut kaam aayegi.

---

## Part B: Graph hamesha seedhi line kyun banta hai

### Laddoo wala experiment

Maan lo do bhai, Raju aur Sonu, ke paas milakar **5 laddoo** hain. Raju ke paas x aur Sonu ke paas y laddoo hain:

**x + y = 5**

Topic 1 ki tarah table banao:

| x | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| y | 5 | 4 | 3 | 2 | 1 | 0 |

Ab in points ko plot karo: (0, 5), (1, 4), (2, 3), (3, 2), (4, 1), (5, 0).

```
  y
  5 *
  4 |  *
  3 |     *
  2 |        *
  1 |           *
  0 +--------------*----> x
    0  1  2  3  4  5
```

Dekho, saare points **ek seedhi line** mein hain! Ruler rakh kar dekho, sab ek line par aate hain.

Ab equation ko laddoo se bahar le jao. x aur y koi bhi number ho sakte hain (fractions, negatives), bas sum 5 ho:
- (2.5, 2.5): 2.5 + 2.5 = 5 ✅
- (-1, 6): -1 + 6 = 5 ✅
- (6, -1): 6 + (-1) = 5 ✅

Ye points bhi **usi line** par padte hain, bas line ko dono taraf aage badhana padta hai.

### Line kyun? Barabar kadam

Table ko dhyan se dekho. **Jab bhi x ek badhta hai, y hamesha ek ghatta hai.** Kadam har baar ek jaise hain. Jab har kadam barabar ho, to raasta seedha hota hai, mudta nahi.

Doosra example: **y = 2x + 1**. Jab x ek badhta hai, y hamesha **2** badhta hai. Kadam phir barabar hain, isliye phir seedhi line.

Isi wajah se inhe **linear** equations kehte hain: inka graph ek **line** hota hai.

Fark dekhne ke liye ek non-linear equation lo: **y = x²**.

| x | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| y | 0 | 1 | 4 | 9 |

Yahan kadam 1, 3, 5 hain, barabar nahi. Isliye ye graph **mud jata hai** (curve banta hai). Ye linear nahi hai.

### Sabse zaroori baat (do taraf ka rishta)

Kisi bhi linear equation ax + by + c = 0 ke liye:

> 1. **Har solution (x, y) graph ki line par ek point hai.**
> 2. **Line ka har point equation ka ek solution hai.**

Yaani line aur solutions **ek hi cheez** hain, bas ek ko numbers mein likhte hain aur doosre ko drawing mein. Aur kyunki line par anginat points hote hain, isliye equation ke bhi anginat solutions hote hain. Topic 1 wali baat ab aankhon se dikh rahi hai.

---

## Part C: Graph banane ka tarika (3-point method)

Do points se ek seedhi line ban jati hai. Phir 3 kyun? **Teesra point jaanch ke liye hai.** Agar calculation mein galti hui, to teesra point line se bahar aa jayega aur galti pakad mein aa jayegi.

### Steps

1. **y ko x ke roop mein likho** (agar aasan ho). Jaise x + y = 5 → y = 5 - x.
2. **x ki 3 values chuno.** Aisi values lo jinse y **poora number** aaye (fraction se plotting mushkil hoti hai).
3. **Table banao** aur har x ke liye y nikalo.
4. **Scale tay karo.** Aam taur par 1 cm = 1 unit. Numbers bade hon to 1 cm = 5 ya 10 units bhi le sakte ho. Ek axis par **ek hi scale** rakho.
5. **Teeno points plot karo.**
6. **Ruler se** joda, aur line ko **dono taraf aage** badhao (dono siron par teer ka nishaan).
7. Line ke paas **equation likh do.**

Agar teeno points ek line mein na aayein, to table dobara check karo. Ye galti ka sanket hai.

---

## Part D: Solved graphs

### Graph 1: x + y = 5

y = 5 - x

| x | 0 | 2 | 5 |
|---|---|---|---|
| y | 5 | 3 | 0 |

Jaanch: 0 + 5 = 5 ✅, 2 + 3 = 5 ✅, 5 + 0 = 5 ✅

Points (0, 5), (2, 3), (5, 0) plot karo aur join karo. Line upar-left se neeche-right ki taraf jati hai (Part B wala sketch).

### Graph 2: y = 2x + 1

| x | -1 | 0 | 1 |
|---|---|---|---|
| y | -1 | 1 | 3 |

Jaanch: 2(-1) + 1 = -1 ✅, 2(0) + 1 = 1 ✅, 2(1) + 1 = 3 ✅

```
  5       |     *
  4       |
  3       |  *
  2       |
  1       *
  0 ------+------> x
 -1    *  |
 -2       |
 -3 *     |
   -2 -1  0  1  2
```

(Sketch mein (-2, -3) aur (2, 5) bhi dikhaye hain. Ye bhi line par hain: 2(-2) + 1 = -3 ✅, 2(2) + 1 = 5 ✅.)

Ye line neeche-left se upar-right ki taraf **chadhti** hai, aur y-axis ko **(0, 1)** par kaatti hai.

### Graph 3: 2x - 3y = 6

Pehle y nikalo: -3y = 6 - 2x → **y = (2x - 6)/3**

Yahan x ki koi bhi value lene se fraction aa sakta hai. Isliye x ko **3 ke multiples** mein chuno (0, 3, 6), taaki y poora number aaye.

| x | 0 | 3 | 6 |
|---|---|---|---|
| y | -2 | 0 | 2 |

Jaanch:
- x = 0: 2(0) - 3(-2) = 0 + 6 = 6 ✅
- x = 3: 2(3) - 3(0) = 6 ✅
- x = 6: 2(6) - 3(2) = 12 - 6 = 6 ✅

Points (0, -2), (3, 0), (6, 2) plot karo. Line y-axis ko neeche (0, -2) par aur x-axis ko (3, 0) par kaatti hai.

### Graph 4: y = 3x (origin se guzarne wali line)

| x | -1 | 0 | 1 |
|---|---|---|---|
| y | -3 | 0 | 3 |

Jaanch: 3(-1) = -3 ✅, 3(0) = 0 ✅, 3(1) = 3 ✅

Line **origin (0, 0)** se guzarti hai, Quadrant III se Quadrant I tak jati hai. Iske baare mein Part G mein aur baat karenge.

---

## Part E: Line axes ko kahan kaatti hai

Part A mein dekha tha:
- **x-axis** par har point ka **y = 0** hota hai.
- **y-axis** par har point ka **x = 0** hota hai.

Topic 1 mein x = 0 aur y = 0 rakh kar sabse aasan do solutions nikale the. Graph par wahi do solutions axes wale points hain. Yaani:

> **x-axis wala point:** equation mein **y = 0** rakho aur x nikalo.
> **y-axis wala point:** equation mein **x = 0** rakho aur y nikalo.

**Example: 3x + 4y = 12**

- y = 0 rakho: 3x = 12 → x = 4. Point **(4, 0)**, x-axis par.
- x = 0 rakho: 4y = 12 → y = 3. Point **(0, 3)**, y-axis par.
- Jaanch ke liye teesra point: x = -4 rakho: 3(-4) + 4y = 12 → -12 + 4y = 12 → 4y = 24 → y = 6. Point **(-4, 6)**.

Jaanch: 3(-4) + 4(6) = -12 + 24 = 12 ✅

Ye **graph banane ka sabse tez tarika** hai: do axis wale points, aur ek jaanch wala point.

**Example: 2x - 3y = 6** (Graph 3 wala)
- y = 0: x = 3 → (3, 0)
- x = 0: -3y = 6 → y = -2 → (0, -2)

Wahi points jo table mein mile the.

---

## Part F: Axes ke parallel lines

### x = a (khadi line)

Topic 1 ke end mein dekha tha ki **x = 3** ko do variables mein **1·x + 0·y = 3** likh sakte hain: y kuch bhi ho, bas x = 3 hona chahiye. Kuch solutions: (3, -2), (3, 0), (3, 1), (3, 4).

Ye saare points ek **khadi line** par hain, jo x-axis ko (3, 0) par kaatti hai aur **y-axis ke parallel** hai.

### y = b (aadi line)

Equation **y = -2**, yaani **0·x + 1·y = -2**. x kuch bhi ho, y = -2. Solutions: (-1, -2), (0, -2), (2, -2), (3, -2).

Ye ek **aadi line** hai, jo y-axis ko (0, -2) par kaatti hai aur **x-axis ke parallel** hai.

```
  3    |        #
  2    |        #
  1    |        #
  0 ---+--------#--> x
 -1    |        #
 -2 ===|========X===      <- y = -2
 -3    |        #
   -1  0  1  2  3  4
                ^
              x = 3
```

Dono lines **(3, -2)** par milti hain (X ka nishaan).

### Yaad rakhne ka tarika

- **x = a** → **khadi** line (y-axis ke parallel). "x fix hai, to sirf upar-neeche ja sakte ho."
- **y = b** → **aadi** line (x-axis ke parallel). "y fix hai, to sirf left-right ja sakte ho."

### Axes khud bhi lines hain

- **y = 0** ka graph **x-axis** hai (x-axis par har point ka y = 0).
- **x = 0** ka graph **y-axis** hai.

### Ek mazedaar sawal

**x = 3** ka graph kya hai?
- Agar sirf **ek variable** (number line) ki baat ho, to ye **ek point** hai: number line par 3.
- Agar **do variables** (Cartesian plane) ki baat ho, to ye **ek poori khadi line** hai.

Isliye exam mein dhyan se padho ki sawaal number line ka hai ya Cartesian plane ka.

---

## Part G: Origin se guzarne wali lines

Jab equation mein **constant term nahi** hota (c = 0), yaani equation **ax + by = 0** ya **y = mx** jaisi ho, to line **origin se guzarti hai**.

Kyun? x = 0 aur y = 0 rakho: a(0) + b(0) = 0 ✅. To (0, 0) hamesha ek solution hai.

| Equation | Origin se guzarti hai? | Kyun |
|---|---|---|
| y = 3x | Haan | 0 = 3(0) ✅ |
| y = -x | Haan | 0 = -(0) ✅ |
| 3x - 2y = 0 | Haan | 0 - 0 = 0 ✅ |
| x + y = 1 | Nahi | 0 + 0 = 0 ≠ 1 |
| y = x + 1 | Nahi | 0 ≠ 0 + 1 |

### Ek chhoti observation

y = x, y = 2x aur y = 3x teeno ko ek hi graph par banao. Teeno origin se guzarti hain, par **y = 3x sabse tez chadhti hai**, phir y = 2x, phir y = x. x ke saath laga number jitna bada, chadhai utni tez. (Is "chadhai" ko aage ki classes mein **slope** kehte hain.)

Aur **y = -x** ulti taraf jhukti hai: upar-left se neeche-right.

---

## Part H: Graph se solutions padhna

Graph sirf drawing nahi hai, ye ek **ready-made table** hai.

### Kisi x ke liye y padhna

**x + y = 5** ke graph se, **x = 1** par y kya hai?

x-axis par 1 dhundho, wahan se **seedha upar** jao jab tak line na mile, phir **seedha left** jaakar y-axis par padho. Milta hai **y = 4**.

Jaanch: 1 + 4 = 5 ✅

### Kisi y ke liye x padhna

Usi graph se, **y = -1** par x kya hai?

y-axis par -1 dhundho, wahan se **seedha right** jao jab tak line na mile, phir **seedha upar** jaakar x-axis par padho. Milta hai **x = 6**.

Jaanch: 6 + (-1) = 5 ✅

### Kya point line par hai?

Do tarike hain:
1. **Graph se:** point plot karo aur dekho ki line par padta hai ya nahi.
2. **Calculation se (zyada pakka):** point ke x aur y equation mein rakho. Dono taraf barabar aaye to point line par hai.

**y = 2x + 1** ke liye:
- **(2, 5):** 2(2) + 1 = 5 ✅, line par hai.
- **(3, 6):** 2(3) + 1 = 7 ≠ 6, line par **nahi** hai.

### Ek point se kitni lines guzar sakti hain?

Point **(2, 3)** lo. Kya ye in sab lines par hai?
- x + y = 5: 2 + 3 = 5 ✅
- y = 2x - 1: 2(2) - 1 = 3 ✅
- 3x - 2y = 0: 6 - 6 = 0 ✅
- x = 2 aur y = 3 bhi ✅

Haan! Ek point se **anginat lines** guzar sakti hain. (Par **do alag points** se sirf **ek hi** seedhi line guzarti hai. Isiliye graph ke liye 2 points kaafi hain, aur teesra jaanch ke liye.)

---

## Part I: Real-life graph: auto ka kiraya

Auto wala kehta hai: meter down hote hi **₹30**, aur phir har km ke **₹12**.

Agar x km ka safar ho aur kiraya ₹y ho:

**y = 12x + 30**

| x (km) | 0 | 5 | 10 |
|---|---|---|---|
| y (₹) | 30 | 90 | 150 |

Jaanch: 12(5) + 30 = 90 ✅, 12(10) + 30 = 150 ✅

### Scale chunna

Yahan y ki values 150 tak jati hain. Agar 1 cm = ₹1 lo, to graph 150 cm lamba ho jayega! Isliye:
- **x-axis:** 1 cm = 1 km
- **y-axis:** 1 cm = ₹20

### Ek khaas baat

Yahan **x negative nahi ho sakta** (safar -3 km nahi hota). Isliye graph sirf **x = 0 se aage** banta hai. Ye line **(0, 30)** se shuru hoti hai aur upar-right jati hai. Real-life graphs aksar sirf **Quadrant I** mein hote hain.

### Graph se jawab padhna

**Sawal:** ₹120 mein kitne km ja sakte hain?

y-axis par 120 se right jao, line mile to neeche aao. Milta hai **x = 7.5 km**.

Jaanch: 12(7.5) + 30 = 90 + 30 = 120 ✅

### Ek aur real-life example: Celsius aur Fahrenheit

Temperature ko Celsius (C) se Fahrenheit (F) mein badalne ki equation: **F = (9/5)C + 32**

| C | 0 | 100 | -40 |
|---|---|---|---|
| F | 32 | 212 | -40 |

Jaanch: (9/5)(100) + 32 = 180 + 32 = 212 ✅, (9/5)(-40) + 32 = -72 + 32 = -40 ✅

Yahan C negative ho sakta hai (sardi mein), isliye line dono taraf jati hai. Aur dilchasp baat: **-40 par dono scale ek jaise** hote hain.

---

## Aam galtiyan (bachke rehna)

**Galti 1: (x, y) ka kram ulta kar dena**
(2, 3) ka matlab hai 2 right, 3 upar. Ise 3 right, 2 upar plot karna galat hai. Cinema ka ticket yaad karo: kram badla to seat badal gayi.

**Galti 2: Sirf 2 points lena**
2 points se line to ban jati hai, par galti pakad mein nahi aati. Teesra point hamesha lo.

**Galti 3: Line ko sirf points ke beech tak khinchna**
Line dono taraf aage jati hai (anginat solutions). Dono siron par teer lagao. (Real-life graph jaise auto ke kiraye mein, jahan x negative nahi ho sakta, wahan rokna theek hai.)

**Galti 4: Scale barabar na rakhna**
Ek hi axis par kahin 1 cm = 1 aur kahin 1 cm = 2 le liya, to line tedhi dikhegi. Ek axis par ek hi scale.

**Galti 5: x = 3 ko aadi line bana dena**
x = 3 **khadi** line hai (y-axis ke parallel). y = 3 aadi line hai. "x fix hai to sirf upar-neeche."

**Galti 6: Aisi x values chunna jinse fraction aaye**
2x - 3y = 6 mein x = 1 lene par y = -4/3 aata hai, jise plot karna mushkil hai. x ko 3 ke multiples mein chuno.

**Galti 7: Negative points galat quadrant mein lagana**
(-3, -1) Quadrant III mein hai (left aur neeche). Sign dekh kar disha tay karo.

**Galti 8: Points ek line mein na aayein, phir bhi tedhi-medhi line jod dena**
Agar teeno points ek line mein nahi aa rahe, to **calculation galat hai**. Line ko zabardasti mat modo, table dobara check karo.

---

## Quick Recap

- **Cartesian plane:** x-axis (aadi), y-axis (khadi), origin (0, 0), chaar quadrants: I (+, +), II (-, +), III (-, -), IV (+, -).
- **Point (x, y) plot karna:** pehle x jitna chalo (right/left), phir y jitna chadho (upar/neeche).
- **x-axis par y = 0**, **y-axis par x = 0**.
- Linear equation ka graph hamesha **seedhi line** hota hai. **Har solution line par ek point hai, aur line ka har point ek solution hai.**
- **3-point method:** table mein 3 points (teesra jaanch ke liye), plot karo, ruler se jodo, dono taraf badhao.
- **Axis wale points:** y = 0 rakh kar x-axis wala point, x = 0 rakh kar y-axis wala point.
- **x = a** khadi line (y-axis ke parallel), **y = b** aadi line (x-axis ke parallel). **x = 0** y-axis hai, **y = 0** x-axis hai.
- **c = 0** ho (ax + by = 0 ya y = mx), to line **origin se guzarti hai**.
- Graph se kisi x ka y, ya kisi y ka x **padh** sakte ho. Point line par hai ya nahi, ye equation mein rakh kar check karo.
- Ek point se anginat lines, par do points se sirf ek line.

---

## Practice Questions

1. State the quadrant or the axis in which each point lies:
   (a) (4, -3)
   (b) (-2, -5)
   (c) (0, 6)
   (d) (-7, 0)
   (e) (-1, 8)

2. Draw the graph of each equation. Use a table of at least three points.
   (a) x + y = 4
   (b) y = x - 2
   (c) 2x + y = 6
   (d) x - 2y = 4

3. Find the points where the graph of 3x + 2y = 12 cuts the x-axis and the y-axis. Find one more point on the line as a check.

4. Draw the graphs of x = -2 and y = 3 on the same axes. Write the coordinates of the point where they meet.

5. Which of the following lines pass through the origin? Give a reason.
   (a) y = 4x
   (b) x + y = 1
   (c) 3x - 2y = 0
   (d) y = x + 1

6. Draw the graph of y = 2x + 1. From the graph, find:
   (a) the value of y when x = 2
   (b) the value of x when y = -3

7. Check whether each point lies on the line 2x - 3y = 6:
   (a) (6, 2)
   (b) (1, -1)
   (c) (0, -2)

8. Write the equations of any three lines that pass through the point (2, 3). How many such lines are there?

9. A tank already has 10 litres of water. A pipe adds 5 litres of water every minute.
   (a) Write a linear equation for the total water y (in litres) after x minutes.
   (b) Draw its graph.
   (c) From the graph, find the water in the tank after 4 minutes.
   (d) After how many minutes will the tank have 35 litres?

### Answers

1. (a) x positive, y negative → **Quadrant IV**
   (b) dono negative → **Quadrant III**
   (c) x = 0 → **y-axis** par
   (d) y = 0 → **x-axis** par
   (e) x negative, y positive → **Quadrant II**

2. (Koi bhi teen sahi points chalenge. Ek example:)
   (a) y = 4 - x. Points **(0, 4), (2, 2), (4, 0)**. Jaanch: 2 + 2 = 4 ✅
   (b) Points **(0, -2), (2, 0), (4, 2)**. Jaanch: 4 - 2 = 2 ✅
   (c) y = 6 - 2x. Points **(0, 6), (1, 4), (3, 0)**. Jaanch: 2(1) + 4 = 6 ✅
   (d) y = (x - 4)/2. x ko even lo. Points **(0, -2), (2, -1), (4, 0)**. Jaanch: 2 - 2(-1) = 2 + 2 = 4 ✅

3. y = 0: 3x = 12 → x = 4. **x-axis par (4, 0).**
   x = 0: 2y = 12 → y = 6. **y-axis par (0, 6).**
   Jaanch point: x = 2: 6 + 2y = 12 → y = 3. **(2, 3)**. Jaanch: 3(2) + 2(3) = 6 + 6 = 12 ✅

4. x = -2 ek **khadi** line hai jo x-axis ko (-2, 0) par kaatti hai. y = 3 ek **aadi** line hai jo y-axis ko (0, 3) par kaatti hai. Dono milti hain **(-2, 3)** par.

5. (a) **Haan.** 0 = 4(0) ✅ (c = 0)
   (b) **Nahi.** 0 + 0 = 0 ≠ 1
   (c) **Haan.** 3(0) - 2(0) = 0 ✅
   (d) **Nahi.** 0 ≠ 0 + 1
   To **(a) aur (c)** origin se guzarti hain.

6. Points (-1, -1), (0, 1), (1, 3) se graph banao.
   (a) x = 2 par **y = 5**. Jaanch: 2(2) + 1 = 5 ✅
   (b) y = -3 par **x = -2**. Jaanch: 2(-2) + 1 = -3 ✅

7. (a) 2(6) - 3(2) = 12 - 6 = 6 ✅ **Line par hai.**
   (b) 2(1) - 3(-1) = 2 + 3 = 5 ≠ 6. **Line par nahi hai.**
   (c) 2(0) - 3(-2) = 0 + 6 = 6 ✅ **Line par hai.**

8. Koi bhi teen sahi equations chalenge. Jaise:
   **x + y = 5** (2 + 3 = 5 ✅), **y = 2x - 1** (4 - 1 = 3 ✅), **3x - 2y = 0** (6 - 6 = 0 ✅). (x = 2 aur y = 3 bhi sahi hain.)
   Aisi **anginat (infinitely many)** lines hain.

9. (a) Shuru mein 10 litre, har minute 5 litre: **y = 5x + 10**
   (b) Points **(0, 10), (2, 20), (4, 30)**. Jaanch: 5(2) + 10 = 20 ✅. x negative nahi ho sakta (time), isliye graph (0, 10) se shuru karo. Scale: x-axis 1 cm = 1 minute, y-axis 1 cm = 5 litre.
   (c) x = 4 par **y = 30 litre**. Jaanch: 5(4) + 10 = 30 ✅
   (d) y = 35: 5x + 10 = 35 → 5x = 25 → **x = 5 minute**. Jaanch: 5(5) + 10 = 35 ✅

---

Graph shuru mein thoda mehnat wala lagta hai, par ek baar haath baith gaya to ye sabse mazedaar hissa ban jata hai. Bas yaad rakho: **teen points, ek ruler, aur jaanch.** Aap kar loge.

---

## Chapter Wrap-up: Linear Equations in Two Variables

| Topic | Kya seekha |
|---|---|
| **Topic 1:** Intro, Linear Equations in Two Variables, Solution | Ek variable se do variables tak. Standard form **ax + by + c = 0** (a aur b dono zero nahi). Shabdon se equation banana. Solution ek **ordered pair (x, y)**. Pair solution hai ya nahi, ye check karna. Table se solutions dhundhna. **Anginat solutions** hote hain. x = 0 ya y = 0 rakh kar solution. k ki value nikalna. |
| **Topic 2:** Graph of a Linear Equation | Cartesian plane, quadrants aur point plot karna. Graph hamesha **seedhi line**. Har solution line par, line ka har point solution. **3-point method.** Axes kahan kaatti hai (y = 0, x = 0 rakh kar). **x = a** khadi, **y = b** aadi line. **c = 0** ho to line origin se. Graph se solutions padhna. Real-life graphs. |

**Aage ki jhalak:** Agar do alag lines ek hi graph par banao, to wo aksar ek point par milti hain. Wo point **dono equations ka common solution** hota hai. Isi ko aage ke chapter (**Simultaneous Linear Equations**) mein vistar se seekhenge.
