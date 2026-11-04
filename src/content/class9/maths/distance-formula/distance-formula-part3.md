# Chapter: Distance Formula (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [distance-formula-part2.md](distance-formula-part2.md) se aage chalti hai** (aur shuruaat [distance-formula.md](distance-formula.md) mein hai). Pichhli files mein distance formula, origin se doori, aur coordinates se triangle/quadrilateral pehchanna aa chuka hai.
> **Pehle se aana chahiye:** [Simultaneous equations (elimination)](../simultaneous-linear-equations/simultaneous-linear-equations-part2.md) aur [Triangles ka circumcentre](../triangles/triangles-part2.md).
> **Topics covered in this file:**
> 3. Collinear Points, Equidistant Points aur Unknown Values

---

# Topic 3: Collinear Points, Equidistant Points aur Unknown Values

Pichhle topic mein humne distance formula ko ek "jaasoos" ki tarah use kiya: sirf coordinates dekh kar bata diya ki triangle isosceles hai, right-angled hai, ya square hai. Meghna ke plaza ke lamp-posts (1, 0), (3, 1), (2, 3), (0, 2) tirchhe dikhte the, par chaaron sides √5 aur dono diagonals √10 nikle, to Farooq ko saboot mil gaya ki wo square hai. Wahan hamein **teen ya chaar points diye hue** the aur unki shape pehchanni thi.

Ab kahaani ulti chalegi. Ab kabhi sawaal hoga "kya ye teen points ek hi seedhi line par hain?", kabhi "wo point dhoondho jo in do (ya teen) points se **barabar door** ho", aur kabhi "kisi point ka ek coordinate gaayab hai, wo nikalo". Teeno sawaal ek hi aukaat par khade hain: **doori ka formula**, aur kabhi-kabhi uska **square**.

---

## Pani ki tanki ka jhagda

Ek gaon ki Sarpanch hain **Bhagwati devi**. Gaon ke paas teen basti (hamlet) hain, aur teeno mein paani ki dikkat hai. Bhagwati devi ne faisla kiya: "Ek hi bada paani ka tank banega, par aisi jagah ki **kisi ko bhi doosron se zyada na chalna pade**."

Unhone gaon ke engineer **Tarun** ko bulaya. Tarun ne ek grid wala naksha banaya, jisme 1 khana = 1 km. Teeno basti ke coordinates:

- Basti A: (0, 0)
- Basti B: (6, 0)
- Basti C: (0, 8)

Bhagwati devi bolin, "Beta, mujhe point chahiye jo A, B aur C se barabar door ho. Andaza mat lagana, pakka hisaab karo."

(Triangles chapter mein ek line mein dekha tha ki teen gaon se barabar door paani ka tank **circumcentre** par banta hai. Wahan sirf idea tha; yahan hum coordinates se uski pakki jagah nikalenge.)

Tarun ne kaha, "Devi ji, pehle chhote sawaal hal karte hain: do points se barabar door point kaisa dikhta hai, phir teen se. Aakhir mein tank ki jagah nikalenge." Chaliye hum bhi Tarun ke saath chalte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Collinear points** | Wo points jo ek hi seedhi line par hon | (1, 1), (2, 3), (3, 5) |
| **Equidistant** | Do ya zyada cheezon se barabar doori par | Tank jo A, B, C se barabar door ho |
| **Perpendicular bisector** | Kisi segment ko beech se kaat kar uske upar 90° par khadi line. Is line ka har point segment ke dono sirey se barabar door hota hai | AB ka perpendicular bisector |
| **Circumcentre** | Triangle ke teeno vertices se barabar door wala point | Teen basti se barabar door tank |
| **Circumradius** | Circumcentre se kisi bhi vertex tak ki doori | Tank se A tak 5 km |
| **Unknown value** | Wo coordinate (jaise y ya k) jo di nahi gayi, hame nikalni hai | (10, y) mein y |

---

## Part A: Collinear points (teen points ek line par?)

### Idea

Teen points A, B, C ek seedhi line par hon, aur B beech mein ho, to A se C jaane ka "seedha rasta" aur "B se hote hue rasta" **barabar** hota hai:

> **AB + BC = AC**

Yaani sabse lambi doori = baaki do doorion ka jod. Agar kisi bhi tareeke se ye na bane, to points line par nahi hain, aur A, B, C ek **triangle** banate hain.

**Triangle inequality (ek yaad):** Kisi bhi triangle mein koi do bhujaon ka jod teesri bhuja se **zyada** hota hai ([Congruence of Triangles](../congruence-of-triangles/congruence-of-triangles-part4.md) mein iska proof dekha tha). To teen points se agar triangle ban sakta hai, to AB + BC **strictly bada** hoga AC se. Barabar tabhi hoga jab triangle "pichak kar" ek line ban jaye, yaani points collinear hon.

**Steps:**
1. Teeno doorian nikalo (AB, BC, AC).
2. **Sabse lambi** doori pehchano.
3. Check karo: baaki do ka jod = sabse lambi?

### Example 1: Kya (1, 1), (2, 3), (3, 5) collinear hain?

A(1, 1), B(2, 3), C(3, 5).

- AB = √[(2 − 1)² + (3 − 1)²] = √(1 + 4) = **√5**
- BC = √[(3 − 2)² + (5 − 3)²] = √(1 + 4) = **√5**
- AC = √[(3 − 1)² + (5 − 1)²] = √(4 + 16) = √20 = √(4 × 5) = **2√5**

Sabse lambi AC = 2√5. Baaki do ka jod: AB + BC = √5 + √5 = 2√5.

**Jaanch:** AB + BC = 2√5 = AC ✅. Teeno points **collinear** hain.

(Surds ko jodna aisa hi hai jaise 1 aam + 1 aam = 2 aam: √5 + √5 = 2√5.)

### Example 2: Kya (0, 0), (1, 2), (3, 3) collinear hain? (Non-example)

A(0, 0), B(1, 2), C(3, 3).

- AB = √(1 + 4) = **√5** ≈ 2.236
- BC = √[(3 − 1)² + (3 − 2)²] = √(4 + 1) = **√5** ≈ 2.236
- AC = √(9 + 9) = √18 = **3√2** ≈ 4.243

Sabse lambi AC ≈ 4.243. Baaki do ka jod = √5 + √5 = 2√5 ≈ 4.472.

**Jaanch:** 4.472 ≠ 4.243, aur jod **bada** hai (triangle inequality jaisa) ❌. Points collinear **nahi** hain, ye ek triangle banate hain (isosceles, kyunki AB = BC).

Dhyan do: yahan AB = BC hone se line nahi banti. Example 1 mein bhi AB = BC tha, par wahan **AC = AB + BC** tha. Barabar bhujaayein hona kaafi nahi hai, **sabse lambi = baaki do ka jod** hona zaroori hai.

---

## Part B: Axis par ek point jo do points se barabar door ho

Ab Tarun ka pehla chhota sawaal. Ek point jo **x-axis par** ho aur do diye hue points se barabar door ho.

**Trick:**
- x-axis par har point ka y = 0 hota hai, to point **(x, 0)** likho. (y-axis par ho to **(0, y)**.)
- Do doorian barabar likho. Root se bachne ke liye **dono taraf square kar do** (kyunki doori barabar, to doori ka square bhi barabar).
- Dono taraf x² aa jayega, aur wo **cut ho jayega**. Bachegi ek seedhi (linear) equation.

### Example 3: x-axis par wo point jo (2, −5) aur (−2, 9) se barabar door ho

Point P(x, 0). Maan lo A(2, −5) aur B(−2, 9). Hame PA = PB chahiye.

PA² = (x − 2)² + (0 − (−5))² = (x − 2)² + 25

PB² = (x − (−2))² + (0 − 9)² = (x + 2)² + 81

PA² = PB² likho:

(x − 2)² + 25 = (x + 2)² + 81

x² − 4x + 4 + 25 = x² + 4x + 4 + 81

x² dono taraf the, cut ho gaye. Bacha:

−4x + 29 = 4x + 85

−56 = 8x

**x = −7**

Point **P(−7, 0)**.

**Jaanch:**
- PA² = (−7 − 2)² + 25 = 81 + 25 = 106
- PB² = (−7 + 2)² + 81 = 25 + 81 = 106 ✅

Dono doorian √106 hain, to PA = PB.

*Tarun ke liye matlab:* agar tank ko sirf kisi **sadak (x-axis)** par hi banana hota, to do basti ke liye wahi ek jagah hoti. Par hamare paas poora naksha khula hai, to ye dekhte hain.

---

## Part C: Koi bhi point (x, y) jo do points se barabar door ho

Ab point ko kisi axis tak bandh kar mat rakho. P(x, y) aisa ho ki PA = PB, jahan A(1, 2) aur B(5, 4).

### Example 4: PA = PB ki shart

PA² = (x − 1)² + (y − 2)² = x² − 2x + 1 + y² − 4y + 4

PB² = (x − 5)² + (y − 4)² = x² − 10x + 25 + y² − 8y + 16

PA² = PB² karo. x² aur y² dono taraf cut ho jaate hain:

−2x − 4y + 5 = −10x − 8y + 41

8x + 4y = 36

**2x + y = 9**

Ye ek **seedhi line** ki equation hai. Matlab sirf ek point nahi, **aise bahut saare points** hain, jo ek line par hain.

**Jaanch (do point us line par chun kar):**
- (3, 3): 2(3) + 3 = 9 ✓. PA² = 4 + 1 = 5, PB² = 4 + 1 = 5 ✅
- (4, 1): 2(4) + 1 = 9 ✓. PA² = 9 + 1 = 10, PB² = 1 + 9 = 10 ✅

### Ye line hai kya?

Ye line **AB ka perpendicular bisector** hai: AB ko beech se kaat-ti hai aur AB par 90° par khadi hai. Iska har point A aur B se barabar door hota hai. Triangles chapter mein [perpendicular bisector](../triangles/triangles-part2.md) isi tarah define hua tha. Wahan use diagram se dekha tha, yahan equation se mil gaya.

(AB ke beech wala point kaise nikalte hain, wo hum aage dekhenge. Abhi ke liye itna: (3, 3) us line par hai aur A se bhi aur B se bhi barabar door hai.)

**Seedhi baat:** do points se barabar doori ki shart = ek line (perpendicular bisector). Isi liye, **teen points se barabar door** point ke liye hame **do aisi lines** chahiye, aur unka milan-bindu hi jawab hoga.

---

## Part D: Teen points se barabar door point (circumcentre)

Triangles chapter mein hum pade the ki triangle ke teeno vertices se barabar door wale point ko **circumcentre** kehte hain, aur wo teeno perpendicular bisectors ka milan hota hai ([yahan dekho](../triangles/triangles-part2.md)). Ab hum use coordinates se **nikal** sakte hain.

**Tareeka:**
1. Circumcentre P(x, y) maan lo.
2. **PA² = PB²** likho: ek linear equation (Part C jaisi).
3. **PB² = PC²** (ya PA² = PC²) likho: doosri linear equation.
4. Dono equations ko [elimination ya substitution](../simultaneous-linear-equations/simultaneous-linear-equations-part2.md) se hal karo.
5. Radius = P se kisi bhi vertex tak ki doori.

### Example 5: Bhagwati devi ki tanki (A(0,0), B(6,0), C(0,8))

Tank ki jagah P(x, y).

**Equation 1: PA² = PB²**

x² + y² = (x − 6)² + y²

x² + y² = x² − 12x + 36 + y²

0 = −12x + 36 → **x = 3**

**Equation 2: PA² = PC²**

x² + y² = x² + (y − 8)²

x² + y² = x² + y² − 16y + 64

0 = −16y + 64 → **y = 4**

Is baar dono equations mein ek-ek variable hi bachi, to simultaneous solve karne ki zaroorat bhi nahi padi. Tank ki jagah **P(3, 4)**.

**Radius:**
PA = √(3² + 4²) = √25 = **5 km**

**Jaanch (teeno doorian):**
- PA² = 9 + 16 = 25 ✅
- PB² = (3 − 6)² + (4 − 0)² = 9 + 16 = 25 ✅
- PC² = (3 − 0)² + (4 − 8)² = 9 + 16 = 25 ✅

Teeno basti tank se **5 km** door hain. Tarun ne Bhagwati devi ko bataya, "Devi ji, tank (3, 4) par banega. Har basti se barabar 5 km." Bhagwati devi muskuraayin: "Ab koi nahi bolega ki mujhse zyada chalna pada!"

### Ek chhoti si khaas baat

Is triangle ka angle A par 90° hai (A, B se x-axis par aur A, C se y-axis par jaate hain). Iska hypotenuse BC hai:

BC = √[(0 − 6)² + (8 − 0)²] = √(36 + 64) = √100 = 10 km

Triangles chapter ka fact yaad karo: **right triangle ka circumcentre hypotenuse ke beech mein** hota hai, aur circumradius = hypotenuse ka aadha = 10 ÷ 2 = **5 km** ✅. Hamara jawab isse mel khata hai. Kyun: P se B aur C dono ki doori 5 hai, aur BC = 10 = 5 + 5, yaani P, B aur C **collinear** hain (Part A ki shart!) aur P, BC ke beech mein hai.

### Example 6: Non-right triangle ka circumcentre: A(1, −1), B(4, 2), C(0, 2)

Pehle dekh lo ye right-angled nahi hai: AB² = 9 + 9 = 18, BC² = 16, AC² = 1 + 9 = 10. 16 + 10 = 26 ≠ 18, 18 + 10 = 28 ≠ 16, 18 + 16 = 34 ≠ 10. Right-angled nahi hai, to hypotenuse wali shortcut yahan nahi chalegi. Poora hisaab karte hain.

P(x, y).

**PA² = PB²:**

(x − 1)² + (y + 1)² = (x − 4)² + (y − 2)²

x² − 2x + 1 + y² + 2y + 1 = x² − 8x + 16 + y² − 4y + 4

−2x + 2y + 2 = −8x − 4y + 20

6x + 6y = 18 → **x + y = 3** ... (i)

**PA² = PC²:**

(x − 1)² + (y + 1)² = x² + (y − 2)²

x² − 2x + 1 + y² + 2y + 1 = x² + y² − 4y + 4

−2x + 6y + 2 = 4 → −2x + 6y = 2 → **−x + 3y = 1** ... (ii)

**Elimination:** (i) aur (ii) ko jodo (x cut ho jayega):

4y = 4 → **y = 1**

(i) mein: x + 1 = 3 → **x = 2**

Circumcentre **P(2, 1)**.

**Jaanch:**
- PA² = (2 − 1)² + (1 + 1)² = 1 + 4 = 5
- PB² = (2 − 4)² + (1 − 2)² = 4 + 1 = 5
- PC² = (2 − 0)² + (1 − 2)² = 4 + 1 = 5 ✅

Circumradius = **√5**.

---

## Part E: Unknown value dhoondhna (doori di hui hai)

Ab ulta: do points di hain, par ek coordinate gaayab hai, aur **doori di hui** hai.

Tarun ke naksha mein ek naya kuan hai. Bhagwati devi ne kaha: "Naye kuan ke coordinates (10, y) hain aur ye ek nayi basti D(2, −3) se theek 10 km door hai." Tarun ko y nikalna hai.

### Example 7: (2, −3) aur (10, y) ke beech doori 10 hai. y = ?

Doori = 10, to doori ka square = 100.

(10 − 2)² + (y − (−3))² = 100

64 + (y + 3)² = 100

(y + 3)² = 36

Ab yahan **square root dono taraf lena** hai, aur **plus-minus** dono lene hain:

y + 3 = **±6**

- y + 3 = 6 → **y = 3**
- y + 3 = −6 → **y = −9**

**Jaanch:**
- (10, 3): 64 + (3 + 3)² = 64 + 36 = 100 ✅
- (10, −9): 64 + (−9 + 3)² = 64 + 36 = 100 ✅

Dono answers sahi hain.

### Do answers kyun?

Point (10, y) sirf ek **seedhi khadi line x = 10** par hi ho sakta hai. (2, −3) se wahan tak dayein 8 chalne ke baad, upar ya neeche, kitna jaana hai ki doori 10 ho jaye? Pythagoras: 8² + 6² = 10², to **6 upar ya 6 neeche**.

```
 y
 3 |                    * (10, 3)
   |                 /  |
   |        10    /     |  6 upar
   |           /        |
-3 |  (2,-3) *----8-----+ (10, -3)
   |           \        |
   |        10    \     |  6 neeche
   |                 \  |
-9 |                    * (10, -9)
   |
           x = 2      x = 10
```

(2, −3) ke barabar ki ooncha-ayi (same y = −3) par (10, −3) hai. Usse **6 upar** (10, 3) aur **6 neeche** (10, −9). Dono se (2, −3) tak 10 hai. Isliye answer **do** hain. Agar sawaal mein "y positive hai" jaisi koi shart di ho, to ek hi bachega.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Dono taraf square kiye bina solve karna, ya sirf ek taraf square karna**

PA = PB mein agar sirf ek taraf ke root hata do aur doosre ko chhod do, to equation bigad jati hai. Hamesha **PA² = PB²** likho, dono taraf poore square. (Part B mein dekha: x² cut ho kar seedhi equation bachti hai.)

**Galti 2: ± wala answer kho dena**

Example 7 mein (y + 3)² = 36 se sirf y + 3 = 6 likh dena, to y = 3 hi milega, **y = −9 chhoot gaya**. Hamesha: x² = a (a > 0) ka matlab x = **±√a**.

**Galti 3: x aur y coordinates mix kar dena**

(2, −5) ka pehla number x hai, doosra y. Doori mein "x − x" aur "y − y" milte hain. Example 3 mein galat: (x − 2)² + (0 − 2)² (y ki jagah x use kiya). Sahi: (x − 2)² + (0 − (−5))² = (x − 2)² + 25. Negative coordinate ke saath bracket ka dhyan rakho: 0 − (−5) = +5, −5 nahi.

**Galti 4: Collinearity mein sabse lambi doori se check na karna**

Example 2 mein AB + BC = 2√5 ≈ 4.472 hai, par agar koi AB + AC ya BC + AC jaisa koi aur jod le kar "barabar" dhoondhe, to wo hamesha sabse lambi doori se bada hi niklega aur confusion hoga. Sahi dhang: pehle **sabse lambi doori** pehchano (AC), phir baaki do ka jod uske barabar hai ya nahi. Aur sirf AB = BC dekh kar line mat bol do (Example 1 aur 2 dono mein AB = BC tha, par ek collinear, ek nahi).

**Galti 5: Surds ko galat jodna**

√5 + √5 = 2√5, par √5 + √5 ≠ √10. Aur √20 ko pehle simplify karo: √20 = 2√5, tab jod mil sakega.

---

## Quick Recap

- **Collinear:** A, B, C ek line par hain agar **sabse lambi doori = baaki do ka jod** (jaise AB + BC = AC). Warna triangle banta hai, aur wahan baaki do ka jod strictly bada hota hai (triangle inequality).
- **Axis par equidistant point:** x-axis par P(x, 0), y-axis par P(0, y). PA² = PB² likho; squares cut hote hain, linear equation bachti hai.
- **Koi bhi (x, y) jo A, B se barabar door ho:** PA² = PB² se ek **seedhi line** milti hai, jo AB ka **perpendicular bisector** hai.
- **Teen points se barabar door:** **circumcentre**. PA² = PB² aur PB² = PC² likho, do linear equations ko simultaneous hal karo. Radius = P se kisi vertex tak.
- **Right triangle** ka circumcentre hypotenuse ke beech mein, radius = hypotenuse ÷ 2.
- **Unknown value:** doori ka square likho, equation hal karo. x² = a se **±√a**: aksar **do** answers.
- Hamesha jaanch karo: asli doorian substitute karke.

---

## Practice Questions

1. Show that the points A(0, 0), B(1, 1), C(3, 3) are collinear by finding all three distances.

2. Are the points A(1, 1), B(3, 2), C(5, 4) collinear? Find the three distances (leave surds where needed) and explain how you decide.

3. Find the point on the x-axis that is equidistant from (1, 3) and (5, −1).

4. Find the point on the y-axis that is equidistant from (3, 2) and (−1, 6).

5. A point P(x, y) is equidistant from O(0, 0) and Q(4, 6). Find the relation between x and y. What does this relation represent geometrically?

6. Find the circumcentre and circumradius of the triangle with vertices A(1, 1), B(5, 1), C(3, 5).

7. Find x such that the distance between (x, 7) and (1, 3) is 5. Why do you get two values?

8. State True or False:
   (a) If AB + BC = AC for three points, then they lie on one straight line.
   (b) When we equate PA² = PB² for P(x, 0), the x² terms cancel and a linear equation remains.
   (c) Every triangle has a point equidistant from all three vertices.
   (d) A distance condition like "the distance is 5" always gives exactly one value of the unknown coordinate.

### Answers

1. AB = √(1 + 1) = **√2**. BC = √(4 + 4) = √8 = **2√2**. AC = √(9 + 9) = √18 = **3√2**.
   Sabse lambi AC = 3√2, aur AB + BC = √2 + 2√2 = 3√2.
   Jaanch: AB + BC = AC ✅. Points **collinear** hain.

2. AB = √(4 + 1) = **√5** ≈ 2.236. BC = √(4 + 4) = √8 = **2√2** ≈ 2.828. AC = √(16 + 9) = **5**.
   Sabse lambi AC = 5. AB + BC ≈ 2.236 + 2.828 = 5.064, jo 5 se **bada** hai, barabar nahi.
   Jaanch: AB + BC ≠ AC ❌. Points collinear **nahi** hain. (Sirf thoda sa bada, isliye decimal sahi se nikalna.)

3. P(x, 0): (x − 1)² + 9 = (x − 5)² + 1.
   x² − 2x + 1 + 9 = x² − 10x + 25 + 1 → −2x + 10 = −10x + 26 → 8x = 16 → **x = 2**. Point **(2, 0)**.
   Jaanch: (2 − 1)² + 9 = 10 aur (2 − 5)² + 1 = 10 ✅

4. P(0, y): 9 + (y − 2)² = 1 + (y − 6)².
   9 + y² − 4y + 4 = 1 + y² − 12y + 36 → 13 − 4y = 37 − 12y → 8y = 24 → **y = 3**. Point **(0, 3)**.
   Jaanch: 9 + (3 − 2)² = 10 aur 1 + (3 − 6)² = 10 ✅

5. x² + y² = (x − 4)² + (y − 6)² → 0 = −8x + 16 − 12y + 36 → 8x + 12y = 52 → **2x + 3y = 13**.
   Ye ek seedhi line hai: OQ ka **perpendicular bisector**.
   Jaanch: (2, 3) line par hai (4 + 9 = 13). O se doori² = 4 + 9 = 13, Q se doori² = (2 − 4)² + (3 − 6)² = 4 + 9 = 13 ✅

6. P(x, y). PA² = PB²: (x − 1)² + (y − 1)² = (x − 5)² + (y − 1)² → −2x + 1 = −10x + 25 → 8x = 24 → **x = 3**.
   PA² = PC²: (x − 1)² + (y − 1)² = (x − 3)² + (y − 5)² → −2x − 2y + 2 = −6x − 10y + 34 → 4x + 8y = 32 → x + 2y = 8.
   x = 3 daalo: 3 + 2y = 8 → **y = 2.5**. Circumcentre **(3, 2.5)**.
   Radius: PA² = (3 − 1)² + (2.5 − 1)² = 4 + 2.25 = 6.25, to radius = **2.5**.
   Jaanch: PB² = (3 − 5)² + 1.5² = 6.25 ✅, PC² = 0 + (2.5 − 5)² = 6.25 ✅

7. (x − 1)² + (7 − 3)² = 25 → (x − 1)² + 16 = 25 → (x − 1)² = 9 → x − 1 = ±3 → **x = 4 ya x = −2**.
   Jaanch: (4 − 1)² + 16 = 25 ✅ aur (−2 − 1)² + 16 = 25 ✅.
   Do values isliye ki (x, 7) ek horizontal line y = 7 par hai, aur (1, 3) se 5 door aise do point hain: ek dayein, ek bayein (dono 3 ki doori par, jo doori 4 ke saath 3-4-5 banata hai).

8. (a) **True** ✅. Sabse lambi doori baaki do ke jod ke barabar ho, to wo ek hi line par hote hain.
   (b) **True** ✅. x² dono taraf aata hai aur cut ho jata hai.
   (c) **True** ✅. Circumcentre. Ye teeno perpendicular bisectors ka milan hai.
   (d) **False** ❌. Jaise Example 7 mein y = 3 aur y = −9, dono kaam karte hain.

---

Bhagwati devi ke gaon ka tank ab (3, 4) par ban gaya hai, aur Tarun ke naksha mein ek naya chhota-sa nishaan lag gaya hai. Jab bhi "barabar door" suno, to PA² = PB² likho aur square ko cut hone do.

**Aage kya?** Ek sawaal abhi adhoora reh gaya: do points ke **ekdum beech** mein jo point padta hai, uske coordinates kya honge? Topic 4 mein hum "beech ka point" nikalna seekhenge.
