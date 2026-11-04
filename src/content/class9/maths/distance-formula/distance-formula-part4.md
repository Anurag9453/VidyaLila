# Chapter: Distance Formula (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [distance-formula-part3.md](distance-formula-part3.md) se aage chalti hai.** (Chapter ki shuruaat [distance-formula.md](distance-formula.md) se hoti hai. Purani baatein: [quadrilaterals.md](../quadrilaterals/quadrilaterals.md), [quadrilaterals-part2.md](../quadrilaterals/quadrilaterals-part2.md), [circles.md](../circles/circles.md).)
> **Topics covered in this file:**
> 4. Mid-point Formula (Extra)

---

# Topic 4: Mid-point Formula (Extra)

Is chapter mein ab tak humne coordinates se **doori** nikaalna seekha, usse shapes pehchaane, aur dekha ki teen points ek hi seedhi line par hain ya nahi, ya koi point do ya teen points se barabar doori par hai ya nahi. Topic 3 mein to Bhagwati devi ke gaon ka paani ka tank (3, 4) par mila tha, jo teeno basti se barabar 5 km door tha. Ye sab "kitni door?" wale sawaal the.

Ab ek naya sawaal: do points ke **theek beech** ka point kahan hai? Ye ek **extra** topic hai: chapter ka mukhya kaam doori wala tha, par mid-point ka formula itna chhota aur kaam ka hai ki ise jaan lena faayda ka sauda hai. Ye aakhri topic bhi hai, to end mein poore chapter ka wrap-up aur saare formulas ki ek table milegi.

---

## Sahil, Kiran aur beech ka café

Sahil aur Kiran college ke dost hain. Ab dono alag alag shehar mein job karte hain. Ek din dono ne grid map kholkar apni jagah mark ki: Sahil ka shehar (2, 9) par hai aur Kiran ka (10, 3) par. (Map par 1 khana = 10 km.)

Sahil ne kaha, "Chal, kisi café mein milte hain, aur ye dhyan rakhna ki **dono ko barabar** safar karna pade."

Kiran ne poocha, "Theek hai, par wo jagah map par kahan hogi? Seedhi line par aadhe raste mein, yaani Sahil se utni hi door jitni mujhse. Isse nikaalte kaise hain?"

Sahil ne kaha, "Pehle number line par socha jaye, phir map par."

Chalo, dekhte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Mid-point** | Line segment ka wo point jo dono sire se barabar doori par ho, yaani segment ko do barabar hisson mein baante | (2, 3) aur (8, 7) ka mid-point (5, 5) |
| **Average (ausat)** | Do numbers ko jodkar 2 se bhaag dena | 2 aur 10 ka average 6 |
| **Bisect karna** | Kisi cheez ko do barabar hisson mein baantna | Parallelogram ke diagonal ek doosre ko bisect karte hain |
| **Diameter** | Circle ke ek point se doosre point tak wo line jo centre se guzre | Circle ka sabse lamba chord |
| **Median** | Triangle ke ek vertex se samne wali side ke mid-point tak ki line | Vertex A se side BC ke mid-point D tak AD |

---

## Part A: Mid-point formula kahan se aaya?

### Pehle number line par

Number line par do points lo: 2 aur 10. Inke theek beech mein kaun sa number hai?

Doori = 10 − 2 = 8. Aadhi doori = 4. 2 se 4 aage chalo: 2 + 4 = **6**.

Yahi 6 aise bhi mil jaata hai: (2 + 10) / 2 = 12 / 2 = **6**. Yaani do numbers ka mid-point unka **average** hai.

Jaanch: 6 − 2 = 4 aur 10 − 6 = 4. Dono taraf barabar ✅

### Ab dono axes par

Map par ek point ke do number hote hain: x (left-right) aur y (upar-neeche). Beech ka point dhoondhna hai to **x ka alag average aur y ka alag average** lo. Dono kaam number line wale kaam jaise hain, bas do baar.

> **Mid-point formula:** A(x₁, y₁) aur B(x₂, y₂) ka mid-point
> **M = ((x₁ + x₂) / 2, (y₁ + y₂) / 2)**

Isko yaad rakhne ka tareeka: "x ka average, y ka average".

### Kya ye sach mein theek hai? Distance formula se jaanch

Do cheezein honi chahiye: (1) M dono sire se barabar doori par ho, (2) AM + MB = AB ho.

A(2, 3), B(8, 7) lo. Formula se M = ((2 + 8)/2, (3 + 7)/2) = (5, 5).

- AM = √((5 − 2)² + (5 − 3)²) = √(9 + 4) = √13
- MB = √((8 − 5)² + (7 − 5)²) = √(9 + 4) = √13
- AB = √((8 − 2)² + (7 − 3)²) = √(36 + 16) = √52 = 2√13

Jaanch: AM = MB ✅ aur AM + MB = √13 + √13 = 2√13 = AB ✅. To M sach mein beech ka point hai, aur A, M, B ek hi seedhi line par hain (Topic 3 wala collinear sawaal bhi yahin pass ho gaya).

---

## Part B: Solved examples

### Example 1: Seedha formula

A(2, 3) aur B(8, 7) ka mid-point.

x = (2 + 8)/2 = 5, y = (3 + 7)/2 = 5

**M = (5, 5)**

Jaanch: Upar Part A mein AM = MB = √13 nikal chuka hai ✅

### Example 2: Negative numbers ke saath

A(−4, 6) aur B(2, −10) ka mid-point.

x = (−4 + 2)/2 = −2/2 = −1
y = (6 + (−10))/2 = −4/2 = −2

**M = (−1, −2)**

Jaanch: AM = √((−1 + 4)² + (−2 − 6)²) = √(9 + 64) = √73. MB = √((2 + 1)² + (−10 + 2)²) = √(9 + 64) = √73 ✅

Dhyan do: jodte waqt negative ka sign sambhalo. −4 + 2 = −2, 6 − 10 = −4.

### Example 3: Decimal aur fraction waale answers

(a) A(1, 2) aur B(4, 5):
x = (1 + 4)/2 = 5/2 = 2.5, y = (2 + 5)/2 = 7/2 = 3.5
**M = (2.5, 3.5)**

Mid-point ke coordinates poore number hon, ye zaroori nahi. Jab sum odd ho to aadha aata hai.

(b) A(−1.5, 2) aur B(3.5, 5):
x = (−1.5 + 3.5)/2 = 2/2 = 1, y = (2 + 5)/2 = 3.5
**M = (1, 3.5)**

Jaanch (a): AM = √(1.5² + 1.5²) = √4.5, MB = √(1.5² + 1.5²) = √4.5 ✅
Jaanch (b): AM = √(2.5² + 1.5²) = √8.5, MB = √(2.5² + 1.5²) = √8.5 ✅

### Example 4: Sahil aur Kiran ka café

Sahil (2, 9), Kiran (10, 3).

x = (2 + 10)/2 = 6, y = (9 + 3)/2 = 6

**Café (6, 6)** par hoga.

Jaanch: Sahil se café: √((6 − 2)² + (6 − 9)²) = √(16 + 9) = 5 khane = 50 km. Kiran se café: √((10 − 6)² + (3 − 6)²) = √(16 + 9) = 5 khane = 50 km. Dono barabar ✅ Aur Sahil-Kiran ki poori doori √(64 + 36) = 10 khane = 100 km = 50 + 50 ✅

### Example 5: Gayab hua sira dhoondhna

M(2, 1) segment AB ka mid-point hai, A = (−2, 3). B dhoondho.

Maan lo B = (x, y). Mid-point formula ulta lagao:
(−2 + x)/2 = 2, to −2 + x = 4, **x = 6**
(3 + y)/2 = 1, to 3 + y = 2, **y = −1**

**B = (6, −1)**

Jaanch: ((−2 + 6)/2, (3 + (−1))/2) = (2, 1) = M ✅

Shortcut: B = (2 × M ke x − A ke x, 2 × M ke y − A ke y) = (4 + 2, 2 − 3) = (6, −1). Matlab "jo sira diya hai, mid-point ke us par ulta jaao".

### Example 6: Circle ka centre aur radius

Ek circle ke diameter ke sire P(−2, 1) aur Q(6, 7) hain. Centre aur radius dhoondho.

Diameter centre se guzarta hai, aur centre diameter ko do barabar hisson mein baantta hai (circle ki baat [circles.md](../circles/circles.md) mein hui thi). To **centre = diameter ka mid-point**.

Centre = ((−2 + 6)/2, (1 + 7)/2) = **(2, 4)**

Diameter PQ = √((6 + 2)² + (7 − 1)²) = √(64 + 36) = 10, to **radius = 10 / 2 = 5**.

Jaanch: Centre se P: √((2 + 2)² + (4 − 1)²) = √(16 + 9) = 5. Centre se Q: √((6 − 2)² + (7 − 4)²) = √(16 + 9) = 5 ✅ Dono sire centre se radius jitni doori par hain.

### Example 7: Parallelogram ka chautha vertex

Parallelogram ABCD ke teen vertex hain A(1, 1), B(5, 2), C(6, 5). D dhoondho.

Parallelogram ke diagonal ek doosre ko bisect karte hain (ye [quadrilaterals.md](../quadrilaterals/quadrilaterals.md) mein dekha tha). Yaani **AC ka mid-point = BD ka mid-point**.

AC ka mid-point = ((1 + 6)/2, (1 + 5)/2) = (3.5, 3)

Maan lo D = (x, y). BD ka mid-point = ((5 + x)/2, (2 + y)/2) = (3.5, 3)
5 + x = 7, **x = 2**; 2 + y = 6, **y = 4**

**D = (2, 4)**

Jaanch (diagonal bisect karte hain): BD ka mid-point = ((5 + 2)/2, (2 + 4)/2) = (3.5, 3) = AC ka mid-point ✅
Extra jaanch (doori se): AB = √(16 + 1) = √17 aur DC = √((6 − 2)² + (5 − 4)²) = √17 ✅; BC = √(1 + 9) = √10 aur AD = √((2 − 1)² + (4 − 1)²) = √10 ✅. Saamne ki sides barabar hain.

### Example 8: Parallelogram hai ya nahi, saabit karo

Kya A(1, 0), B(5, 1), C(6, 4), D(2, 3) ek parallelogram ke vertex hain (is order mein)?

**Step 1: diagonals ke mid-points**
AC ka mid-point = ((1 + 6)/2, (0 + 4)/2) = (3.5, 2)
BD ka mid-point = ((5 + 2)/2, (1 + 3)/2) = (3.5, 2)

Dono diagonals ka mid-point ek hi hai, yaani wo ek doosre ko bisect karte hain. To ABCD **parallelogram** hai. (Ye is topic ka ulta kaam hai: jo parallelogram ki pehchaan thi, wahi test bana li.)

**Step 2: doori se cross-check**
AB = √(16 + 1) = √17, DC = √((6 − 2)² + (4 − 3)²) = √17 ✅
BC = √(1 + 9) = √10, AD = √((2 − 1)² + (3 − 0)²) = √10 ✅

Saamne ki sides barabar hain.

Agar rectangle ka sawaal ho, to diagonals ki lambai bhi dekhni padegi: AC = √(25 + 16) = √41 aur BD = √(9 + 4) = √13. Ye barabar nahi, to ye rectangle nahi. Sirf parallelogram hai. (Ye Topic 2 wala shape test hai.)

### Example 9: Median ki lambai

Triangle ABC ke vertex A(−1, 6), B(−2, 1), C(6, 3) hain. Vertex A se aane wale median AD ki lambai nikaalo.

Median matlab A se **BC ke mid-point** D tak ki line.

D = ((−2 + 6)/2, (1 + 3)/2) = **(2, 2)**

AD = √((2 + 1)² + (2 − 6)²) = √(9 + 16) = √25 = **5**

Jaanch: D ko dobara B aur C se dekho. BD = √((2 + 2)² + (2 − 1)²) = √17 aur DC = √((6 − 2)² + (3 − 2)²) = √17 ✅ To D sach mein BC ka mid-point hai.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Average ki jagah sirf jodna**
A(2, 3), B(8, 7). Agar sirf jodkar (2 + 8, 3 + 7) = (10, 10) likha, to ye mid-point nahi hai. Ye to dono ke baad ka point ban gaya, jo AB se bahut door hai. **2 se bhaag dena** zaroori hai. Sahi: (5, 5).

**Galti 2: Sirf ek coordinate ko 2 se bhaag dena**
(2 + 8)/2 = 5 to kar liya, par y ke liye 3 + 7 = 10 hi likh diya. Dono coordinates ko 2 se bhaag karo. Sahi: (5, 5), galat: (5, 10).

**Galti 3: Gayab sira nikaalte waqt M ko hi sira bana dena**
Example 5 mein M(2, 1) diya hai. B nikaalna hai, M nahi. Kai log (−2 + 2)/2 karte hain, jo galat hai. Sahi: (−2 + x)/2 = 2, jisse x = 6. Yaad rakho: **M ka 2 guna − diya hua sira = gayab sira**.

**Galti 4: Sochna ki formula mein x ya y ka order matter karta hai**
Mid-point formula mein A aur B ka order matter nahi karta. (x₁ + x₂)/2 aur (x₂ + x₁)/2 barabar hain, kyunki jodne mein order se fark nahi padta. Bas ye dhyan rakho ki x ke saath x jude aur y ke saath y, kabhi x ko y se mat jodo.

---

## Quick Recap

- Do points ka mid-point = unka **average**: M = ((x₁ + x₂)/2, (y₁ + y₂)/2).
- Number line par shuru karo: 2 aur 10 ka mid-point 6. Phir x aur y ko alag alag average karo.
- Jaanch: M se dono sire ki doori barabar ho aur AM + MB = AB.
- Gayab sira: B = (2 × M ke x − A ke x, 2 × M ke y − A ke y).
- Circle ka **centre = diameter ka mid-point**, aur radius = diameter / 2.
- Parallelogram ke diagonals ka mid-point ek hi hota hai. Isse chautha vertex mil jaata hai, aur isi se parallelogram saabit bhi hota hai.
- **Median** ki lambai: pehle opposite side ka mid-point, phir vertex se uski doori.
- Ye topic "extra" hai. Section formula (kisi point ka line ko kisi ratio mein baantna) aage ki classes mein aayega.

---

## Practice Questions

1. Find the mid-point of the segment joining (4, −3) and (−2, 9).

2. The mid-point of AB is M(3, −2) and A = (7, 1). Find B.

3. The end points of a diameter of a circle are (−3, −1) and (5, 5). Find the centre and the radius of the circle.

4. Three vertices of a parallelogram PQRS are P(0, 0), Q(4, 1), R(7, 5). Find S, and show that the diagonals bisect each other.

5. Are A(−1, 3), B(2, 2), C(6, 5), D(3, 6) the vertices of a parallelogram (in this order)? Justify using mid-points and then check using distances.

6. In triangle PQR, P = (1, 1), Q = (7, 1), R = (4, 9). Find the length of the median from R to side PQ.

7. Say whether each statement is true or false, giving a reason.
   (a) The mid-point of (3, 5) and (3, 11) is (3, 8).
   (b) The mid-point of A and B always lies on segment AB.
   (c) The mid-point of the origin and the point (a, b) is (a, b).

8. Let A(−3, 2) and B(5, −4). Find the mid-point M and verify that MA = MB and MA + MB = AB.

9. The mid-point of the segment joining (k, 3) and (5, 7) is (4, 5). Find k.

### Answers

1. x = (4 + (−2))/2 = 1, y = (−3 + 9)/2 = 3. **M = (1, 3)**
   Jaanch: M se pehle point: √((4 − 1)² + (−3 − 3)²) = √(9 + 36) = √45. M se doosre point: √((−2 − 1)² + (9 − 3)²) = √(9 + 36) = √45 ✅

2. Maan lo B = (x, y). (7 + x)/2 = 3, to x = −1. (1 + y)/2 = −2, to y = −5. **B = (−1, −5)**
   Jaanch: ((7 − 1)/2, (1 − 5)/2) = (3, −2) ✅

3. Centre = mid-point = ((−3 + 5)/2, (−1 + 5)/2) = **(1, 2)**.
   Diameter = √((5 + 3)² + (5 + 1)²) = √(64 + 36) = 10, to **radius = 5**.
   Jaanch: Centre se (−3, −1): √(16 + 9) = 5. Centre se (5, 5): √(16 + 9) = 5 ✅

4. PR ka mid-point = ((0 + 7)/2, (0 + 5)/2) = (3.5, 2.5). S = (x, y) ke liye QS ka mid-point bhi yahi hona chahiye: (4 + x)/2 = 3.5, to x = 3; (1 + y)/2 = 2.5, to y = 4. **S = (3, 4)**
   Jaanch: QS ka mid-point = ((4 + 3)/2, (1 + 4)/2) = (3.5, 2.5) = PR ka mid-point ✅

5. AC ka mid-point = ((−1 + 6)/2, (3 + 5)/2) = (2.5, 4). BD ka mid-point = ((2 + 3)/2, (2 + 6)/2) = (2.5, 4). Dono ek hi hain, to **haan, ye parallelogram hai**.
   Doori se jaanch: AB = √((2 + 1)² + (2 − 3)²) = √(9 + 1) = √10, DC = √((6 − 3)² + (5 − 6)²) = √10 ✅. BC = √((6 − 2)² + (5 − 2)²) = √(16 + 9) = 5, AD = √((3 + 1)² + (6 − 3)²) = √(16 + 9) = 5 ✅

6. PQ ka mid-point = ((1 + 7)/2, (1 + 1)/2) = (4, 1). Median = R(4, 9) se (4, 1) tak = √(0 + 64) = **8**.
   Jaanch: (4, 1) se P: 3 aur Q: 3, to wo sach mein PQ ka mid-point hai ✅

7. (a) **True** ✅. (3 + 3)/2 = 3 aur (5 + 11)/2 = 8.
   (b) **True** ✅. M dono sire se barabar doori par, segment ke andar hi hota hai, aur AM + MB = AB.
   (c) **False** ❌. Mid-point ((0 + a)/2, (0 + b)/2) = (a/2, b/2) hota hai. Sirf (0, 0) ke liye (a, b) ke barabar hota.

8. M = ((−3 + 5)/2, (2 + (−4))/2) = **(1, −1)**.
   MA = √((1 + 3)² + (−1 − 2)²) = √(16 + 9) = 5. MB = √((5 − 1)² + (−4 + 1)²) = √(16 + 9) = 5. AB = √((5 + 3)² + (−4 − 2)²) = √(64 + 36) = 10.
   MA = MB ✅ aur MA + MB = 5 + 5 = 10 = AB ✅

9. (k + 5)/2 = 4, to k + 5 = 8 aur **k = 3**.
   Jaanch: y ke liye (3 + 7)/2 = 5 ✅, aur x ke liye (3 + 5)/2 = 4 ✅

---

Ab aap sirf doori hi nahi, beech ka point bhi nikaal sakte ho. Sahil aur Kiran ka café mil gaya, aap bhi grid par aise hi kisi bhi do points ke beech tak pahunch sakte ho. Aap ye kar sakte ho!

---

# Chapter Wrap-up: Distance Formula

| Topic | Kya seekha | Sabse kaam ki baat |
|---|---|---|
| 1. Distance formula | Pythagoras se do points ke beech ki seedhi doori, aur origin se doori (Yash-Ishika ka chest 5 units door) | x ke farak aur y ke farak ke squares jodo, phir square root lo |
| 2. Coordinates se shape pehchaanna | Sirf doori nikaalkar triangle aur quadrilateral ki kism pata karna (Meghna ka tirchha plaza bhi square nikla) | Triangle ke liye 3 sides aur converse check; quadrilateral ke liye 4 sides + 2 diagonals = 6 doorian |
| 3. Collinear points, barabar doori aur unknown values | Teen points ek seedhi line par hain ya nahi; axis par ya kahin bhi equidistant point; circumcentre (Bhagwati devi ka tank); doori di ho to gayab coordinate | Collinear mein sabse lambi doori = baaki do doorion ka jod; barabar doori ke liye PA² = PB² likho; unknown ke liye ± se aksar do answers |
| 4. Mid-point formula (extra) | Do points ke beech ka point, gayab sira, circle ka centre, parallelogram ka chautha vertex, median | Mid-point = x ka average aur y ka average; parallelogram ke diagonals ka mid-point ek hi hota hai |

### All formulas

| Kya | Formula |
|---|---|
| Distance formula | d = √[(x₂ − x₁)² + (y₂ − y₁)²] |
| Origin se doori | OP = √(x² + y²) |
| Mid-point formula | M = ((x₁ + x₂)/2, (y₁ + y₂)/2) |
| Collinearity condition | AB + BC = AC (sabse lambi doori = baaki do doorion ka jod) |
| Equidistant condition | P, A aur B se barabar doori par ho to PA = PB, yaani PA² = PB² (teen points ke liye: circumcentre) |
| Isosceles triangle | Do sides barabar |
| Equilateral triangle | Teeno sides barabar |
| Scalene triangle | Teeno sides alag-alag |
| Right-angled triangle | Sabse lambi side ka square = baaki do sides ke squares ka jod (Pythagoras ka converse) |
| Right isosceles triangle | Right-angled aur do sides barabar |
| Parallelogram | Opposite sides barabar, ya diagonals ka mid-point ek hi |
| Rectangle | Opposite sides barabar + diagonals barabar |
| Rhombus | Chaaron sides barabar |
| Square | Chaaron sides barabar + diagonals barabar (rhombus + diagonals barabar) |

Aage ki classes mein section formula aayega: kisi point ka line ko kisi ratio mein baantna, jiska mid-point ek khaas case (ratio 1 : 1) hoga.

---

Doori, shape, seedhi line aur beech ka point: grid par jo bhi sawaal aaye, ab aapke paas uska hisaab hai.
