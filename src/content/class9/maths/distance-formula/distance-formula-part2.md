# Chapter: Distance Formula (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [distance-formula.md](distance-formula.md) se aage chalti hai** (wahan Topic 1 hai: grid line ke saath doori, Pythagoras se bana distance formula, aur origin se doori).
> Prior knowledge ke liye: [Triangles](../triangles/triangles.md), [Pythagoras ka converse](../pythagoras-theorem/pythagoras-theorem-part3.md), [Quadrilaterals](../quadrilaterals/quadrilaterals.md).
> **Topics covered in this file:**
> 2. Distance Formula se Shapes Pehchanna

---

# Topic 2: Distance Formula se Shapes Pehchanna

Topic 1 mein Yash aur Ishika ke treasure-hunt game mein humne dekha tha ki character (1, 2) se chest (4, 6) tak ki seedhi doori 5 hai (3-4-5 wala triangle), aur kisi bhi do points ke beech ki doori **d = √[(x₂ − x₁)² + (y₂ − y₁)²]** se nikal sakte hain, chahe line tirchhi ho. Ab ek naya sawaal: agar hamare paas **teen ya chaar points** hon, to kya sirf unki doorian nikaal kar bata sakte hain ki wo **kaunsa shape** banate hain?

Haan, bilkul. Triangles ke types ([triangles.md](../triangles/triangles.md)) aur quadrilaterals ke types ([quadrilaterals.md](../quadrilaterals/quadrilaterals.md)) hum pehle padh chuke hain. Wahan shape ko aankh se dekh kar ya angle naap kar pehchana tha. Yahan na scale chahiye, na protractor. **Sirf numbers**.

---

## Meghna aur Farooq ka plaza

Meghna ek young town planner hai. Usne shehar ke naye **square-shaped plaza** ka naksha grid map par banaya hai. Map par chaar lamp-posts ki jagah usne mark ki hain:

**A(1, 0), B(3, 1), C(2, 3), D(0, 2)**

Contractor Farooq ne naksha dekha aur sar hilaya. "Meghna ji, ye perfect square nahi lag raha. Ye to tirchha sa hai. Chaaron post ek perfect square nahi bana rahe. Mujhe numbers se saboot chahiye, tabhi kaam shuru karunga."

Meghna muskurayi. "Theek hai Farooq bhai. Saboot numbers se hi dungi."

Is topic ke end tak aapko wahi saboot aa jayega. Pehle tools bana lete hain: pehle triangles, phir quadrilaterals.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Side length** | Shape ke do paas-paas vertices ke beech ki doori | AB = √5 |
| **Diagonal** | Shape ke do saamne wale vertices ko jodne wali line | AC aur BD |
| **Vertices ka order** | Points ko shape ke **kinaare-kinaare** ghoom kar likhna (A, B, C, D) | A → B → C → D → wapas A |
| **Converse check** | Agar chhoti do sides ke squares ka jod, sabse lambi side ke square ke barabar ho, to triangle right-angled hai | 5 + 20 = 25 |
| **Right isosceles** | Aisa triangle jisme ek angle 90° ho aur do sides barabar hon | Sides √20, √20, √40 |

---

## Part A: Triangle ka type, sirf coordinates se

Teen points A, B, C diye hain. Triangle ka type nikalne ka tareeka:

> **Step 1:** Teeno sides AB, BC, CA ki doori distance formula se nikalo.
> **Step 2:** Lengths ko aapas mein compare karo (equal hain ya nahi).
> **Step 3:** Right angle ke liye converse check lagao.

Triangle ka type is tarah decide hota hai:

| Kya mila | Type |
|---|---|
| Do sides barabar | Isosceles |
| Teeno sides barabar | Equilateral |
| Teeno sides alag-alag | Scalene |
| Sabse lambi side ka square = baaki do ke squares ka jod | Right-angled |
| Right-angled aur do sides barabar | Right isosceles |

Ye types ek-doosre se mil bhi sakte hain. Jaise ek triangle isosceles bhi ho sakta hai aur right-angled bhi (right isosceles). Isliye pehle sides compare karo, phir converse check bhi lagao.

**Chhoti trick:** Square root baar-baar likhne ki jagah pehle **d²** (doori ka square) nikaal lo. Barabari check karne ke liye d² hi kaafi hai, kyunki do doori barabar tabhi hain jab unke squares barabar hon. Root sirf end mein lagao.

### Example 1: Isosceles triangle

Points: **A(0, 4), B(3, 0), C(6, 4)**. Triangle ka type batao.

- AB² = (3−0)² + (0−4)² = 9 + 16 = 25, to **AB = 5**
- BC² = (6−3)² + (4−0)² = 9 + 16 = 25, to **BC = 5**
- CA² = (6−0)² + (4−4)² = 36 + 0 = 36, to **CA = 6**

AB = BC = 5, aur CA = 6 alag hai. **Do sides barabar hain, to triangle isosceles hai.**

Kya ye right-angled bhi hai? Sabse lambi side CA = 6 hai. Converse check:
AB² + BC² = 25 + 25 = 50, par CA² = 36. 50 ≠ 36.

**Jaanch:** 50 ≠ 36, to right angle nahi hai ✅. Triangle sirf **isosceles** hai.

### Example 2: Equilateral jaisa dikhne wala triangle

Points: **A(0, 0), B(4, 0), C(2, 3)**. Dekhne mein ye barabar sides wala triangle lagta hai. Kya ye equilateral hai?

- AB² = (4−0)² + (0−0)² = 16, to **AB = 4**
- BC² = (2−4)² + (3−0)² = 4 + 9 = 13, to **BC = √13**
- CA² = (2−0)² + (3−0)² = 4 + 9 = 13, to **CA = √13**

√13 ≈ 3.61, jo 4 se thoda chhota hai. BC = CA, par AB alag. Isliye ye **sirf isosceles** hai, equilateral nahi.

**Jaanch:** 13 ≠ 16, to teeno barabar nahi ✅. Aankh ko 3.61 aur 4 ka farak pata nahi chalta, par numbers pakad lete hain.

**Asli equilateral kaisa hota hai?** Ek example dekho: P(0, 0), Q(2, 0), R(1, √3).
- PQ² = 4, to PQ = 2
- QR² = (1−2)² + (√3−0)² = 1 + 3 = 4, to QR = 2
- RP² = (1−0)² + (√3−0)² = 1 + 3 = 4, to RP = 2

Teeno sides 2 hain, to ye **sach mein equilateral** hai. (Dhyan do: (√3)² = 3.)

### Example 3: Right-angled triangle

Points: **A(5, 2), B(3, 1), C(1, 5)**. Type batao.

- AB² = (3−5)² + (1−2)² = 4 + 1 = 5, to **AB = √5**
- BC² = (1−3)² + (5−1)² = 4 + 16 = 20, to **BC = √20 = 2√5**
- CA² = (1−5)² + (5−2)² = 16 + 9 = 25, to **CA = 5**

Teeno alag hain, to **scalene**. Sabse lambi side **CA = 5** hai (25 sabse bada d² hai). Converse check:

AB² + BC² = 5 + 20 = 25 = CA²

Pythagoras ka converse kehta hai ki agar chhoti do sides ke squares ka jod sabse lambi side ke square ke barabar ho, to lambi side ke saamne wala angle 90° hota hai. CA ke saamne B hai, to **angle B = 90°**. Triangle **right-angled scalene** hai.

**Jaanch:** 5 + 20 = 25 ✅

**Right isosceles ka chhota sa example:** P(2, 1), Q(6, 3), R(4, 7).
- PQ² = 16 + 4 = 20
- QR² = 4 + 16 = 20
- RP² = 4 + 36 = 40

PQ = QR = √20 (isosceles) aur PQ² + QR² = 20 + 20 = 40 = RP² (right angle Q par). Dono baaten sach hain, to ye **right isosceles** hai.

---

## Part B: Quadrilateral ka type, chaar vertices se

Chaar points diye hain. Quadrilateral ka type pehchanne ke liye **6 doorian** nikalni hoti hain:
- **4 sides** (A se B, B se C, C se D, D se A)
- **2 diagonals** (AC aur BD)

Pehle ye pakka karo ki points **order mein** hain, yaani kinaare-kinaare ghoom kar likhe hain: A → B → C → D → wapas A. Warna sides aur diagonals aapas mein mix ho jayenge (Aam galtiyan mein dikhayenge).

### Decision table

| Kya mila | Shape |
|---|---|
| Saamne wali (opposite) sides barabar | Parallelogram |
| Chaaron sides barabar | Rhombus |
| Opposite sides barabar **aur** diagonals barabar | Rectangle |
| Chaaron sides barabar **aur** diagonals barabar | Square |

Do khaas baatein jo is table se nikalti hain:

1. **Parallelogram + diagonals barabar = Rectangle.** Parallelogram mein diagonals aam taur par barabar nahi hote. Jab barabar nikal aayein, to wo rectangle ban jata hai.
2. **Rhombus + diagonals barabar = Square.** Rhombus ki chaaron sides to barabar hoti hi hain. Agar diagonals bhi barabar nikal aayein, to wo square hai.

Kyun kaam karta hai? Quadrilaterals ke properties ([quadrilaterals.md](../quadrilaterals/quadrilaterals.md)) mein humne dekha tha ki opposite sides barabar hone par parallelogram banta hai, rhombus ki sides saari barabar hoti hain, aur rectangle aur square ke diagonals barabar hote hain. Yahan bas unhi baaton ko numbers se check kar rahe hain.

### Example 4: Meghna ka plaza (Farooq ka saboot)

Points: **A(1, 0), B(3, 1), C(2, 3), D(0, 2)**. Order A → B → C → D → A.

**Sides:**
- AB² = (3−1)² + (1−0)² = 4 + 1 = 5, to **AB = √5**
- BC² = (2−3)² + (3−1)² = 1 + 4 = 5, to **BC = √5**
- CD² = (0−2)² + (2−3)² = 4 + 1 = 5, to **CD = √5**
- DA² = (1−0)² + (0−2)² = 1 + 4 = 5, to **DA = √5**

Chaaron sides barabar hain, to **rhombus** pakka.

**Diagonals:**
- AC² = (2−1)² + (3−0)² = 1 + 9 = 10, to **AC = √10**
- BD² = (0−3)² + (2−1)² = 9 + 1 = 10, to **BD = √10**

Dono diagonals barabar hain. Rhombus + diagonals barabar = **square**.

Meghna ne Farooq ko ye table dikhayi:

| Cheez | Value |
|---|---|
| AB, BC, CD, DA | Sab √5 |
| AC, BD | Dono √10 |

Farooq ne dekha aur bola, "Chaaron sides barabar, dono diagonals barabar. Matlab ye tirchha dikhne ke bawajood perfect square hai." Meghna boli, "Tirchha isliye lag raha tha ki ye grid ki lines ke saath **ghoom** kar rakha gaya hai. Shape wahi hai, bas tilt hua hai."

**Jaanch:** Agar side √5 hai, to square ka diagonal side × √2 hona chahiye: √5 × √2 = √10 ✅. Aur ye bilkul wahi nikla jo humne alag se distance formula se nikala.

Farooq ne maan liya. Plaza ka kaam shuru ho gaya.

### Example 5: Rectangle

Points: **A(1, 0), B(5, 2), C(4, 4), D(0, 2)**. Order A → B → C → D → A. Shape kya hai?

**Sides:**
- AB² = (5−1)² + (2−0)² = 16 + 4 = 20, to **AB = √20**
- BC² = (4−5)² + (4−2)² = 1 + 4 = 5, to **BC = √5**
- CD² = (0−4)² + (2−4)² = 16 + 4 = 20, to **CD = √20**
- DA² = (1−0)² + (0−2)² = 1 + 4 = 5, to **DA = √5**

Opposite sides barabar (AB = CD, BC = DA), par saari sides barabar nahi hain. To kam se kam **parallelogram**. Ab diagonals:

- AC² = (4−1)² + (4−0)² = 9 + 16 = 25, to **AC = 5**
- BD² = (0−5)² + (2−2)² = 25 + 0 = 25, to **BD = 5**

Diagonals barabar hain. Parallelogram + diagonals barabar = **rectangle**. Sides barabar nahi hain, to square nahi, sirf rectangle.

**Jaanch:** Rectangle mein diagonal² = length² + breadth². 20 + 5 = 25 ✅

### Example 6: Rhombus, par square nahi

Points: **A(0, 0), B(4, 3), C(8, 0), D(4, −3)**. Order A → B → C → D → A.

**Sides:**
- AB² = (4−0)² + (3−0)² = 16 + 9 = 25, to **AB = 5**
- BC² = (8−4)² + (0−3)² = 16 + 9 = 25, to **BC = 5**
- CD² = (4−8)² + (−3−0)² = 16 + 9 = 25, to **CD = 5**
- DA² = (0−4)² + (0−(−3))² = 16 + 9 = 25, to **DA = 5**

Chaaron sides 5 hain, to **rhombus**. Ab square hai ya nahi, ye diagonals batayenge:

- AC² = (8−0)² + (0−0)² = 64, to **AC = 8**
- BD² = (4−4)² + (−3−3)² = 0 + 36 = 36, to **BD = 6**

AC = 8 aur BD = 6, barabar nahi. To ye **rhombus hai, square nahi**. Agar hum sirf sides check karke ruk jaate, to galti se "square" bol dete.

**Jaanch:** Rhombus mein side² = (AC ÷ 2)² + (BD ÷ 2)² hota hai, kyunki diagonals ek-doosre ko seedhe kaat te hain: 4² + 3² = 16 + 9 = 25 = 5² ✅

---

## Aam galtiyan (bachke rehna)

**Galti 1: Sirf sides check karke "square" bol dena**

Example 6 mein chaaron sides 5 thi, par diagonals 8 aur 6 the. Sab sides barabar hone par sirf **rhombus** pakka hota hai. Square ke liye diagonals ka barabar hona bhi zaroori hai.

**Galti 2: Diagonals bhool jana**

Quadrilateral ka type pakka karne ke liye 4 nahi, **6 doorian** nikalni padti hain. Sirf 4 sides se rectangle aur parallelogram, ya rhombus aur square ka farak nahi pata chalta.

**Galti 3: Vertices ko order mein na likhna**

Plaza ke points ko agar A, B, D, C order mein le lo, to "sides" ban jayengi:
- AB² = 5, BD² = 10, DC² = (2−0)² + (3−2)² = 5, CA² = 10

Ye dikhayega ki sides √5, √10, √5, √10 hain, aur aap ghalat nateeje par pahunch jaoge (rectangle jaisa). Asal mein BD aur CA diagonals hain, sides nahi. Isliye pehle points ko **shape ke kinaare-kinaare** ghoom kar likho. Agar pata na ho, to ek chhota sa diagram bana lo. Ek ishaara: kisi ek point se baaki teen points ki doori nikalo, to **sabse badi doori aksar** diagonal hoti hai. Par ye hamesha sach nahi (bahut chapte rhombus ya parallelogram mein chhota diagonal side se bhi chhota ho sakta hai), isliye diagram hi sabse pakka tareeka hai.

**Galti 4: Right angle ke liye galat "sabse lambi side" lena**

Example 3 mein sabse lambi side CA = 5 thi. Agar koi galti se BC = √20 ko lambi side maan le aur check kare AB² + CA² = 5 + 25 = 30 ≠ 20, to wo "right angle nahi hai" bol dega. Ye galat hai. **Hamesha sabse bada d² dhoondho**, wahi lambi side hai, aur baaki do ke squares ka jod usi se compare karo.

**Galti 5: Squares mein root lagana bhool jana (ya jaldi lagana)**

Distance ka answer √ ke saath likhna hai, par barabari check karne ke liye d² kaafi hai. Example 2 mein 13 aur 16 ko compare karna aasan tha. Bas sawaal ke final answer mein root mat bhoolo.

---

## Quick Recap

- Shape pehchanne ke liye pehle saari zaroori **doorian** distance formula se nikalo. Barabari ke liye **d²** hi kaafi hai.
- **Triangle:** do sides barabar = isosceles, teeno barabar = equilateral, teeno alag = scalene. Right angle ke liye **sabse lambi side** ka square = baaki do ke squares ka jod (converse). Right + do sides barabar = right isosceles.
- **Quadrilateral:** 4 sides + 2 diagonals = 6 doorian.
  - Opposite sides barabar = parallelogram
  - Saari sides barabar = rhombus
  - Opposite sides barabar + diagonals barabar = rectangle
  - Saari sides barabar + diagonals barabar = square
- Parallelogram + diagonals barabar = rectangle. Rhombus + diagonals barabar = square.
- Galtiyan: sirf sides dekhna, diagonals bhool jana, vertices ko order mein na likhna, right angle ke liye galat longest side lena.

---

## Practice Questions

1. Show that the points P(−2, 0), Q(2, 0) and R(0, 3) form an isosceles triangle. Is it also equilateral or right-angled?

2. Show that A(1, 1), B(4, 2) and C(2, 8) form a right-angled triangle. Name the vertex at the right angle, and say whether the triangle is scalene or isosceles.

3. Show that A(0, 0), B(4, 0) and C(2, 2√3) form an equilateral triangle.

4. Find the type of quadrilateral with vertices A(0, 0), B(4, 0), C(5, 2) and D(1, 2) (taken in this order). Compute all four sides and both diagonals.

5. Show that A(0, 0), B(3, 1), C(2, 4) and D(−1, 3) are the vertices of a square.

6. Meghna writes the four corners of a small flower bed as (0, 0), (2, 2), (2, 0), (0, 2), in this order. Farooq says the "sides" come out as √8, 2, √8, 2, so it is a rectangle and not a square. What mistake is he making? Find the correct type of the shape.

7. Show that A(1, 1), B(4, 5), C(9, 5) and D(6, 1) form a rhombus but not a square.

8. State True or False:
   (a) A triangle with sides 5, 12 and 13 is right-angled.
   (b) If all four sides of a quadrilateral are equal, it must be a square.
   (c) A parallelogram whose diagonals are equal is a rectangle.
   (d) A triangle with sides 3, 4 and √20 is right-angled.

### Answers

1. PQ² = (2−(−2))² + 0 = 16, to PQ = 4.
   QR² = (0−2)² + (3−0)² = 4 + 9 = 13, to QR = √13.
   RP² = (−2−0)² + (0−3)² = 4 + 9 = 13, to RP = √13.
   QR = RP, to **isosceles**.
   Equilateral nahi, kyunki 4 ≠ √13 (16 ≠ 13). Right-angled bhi nahi: sabse lambi side PQ (d² = 16), aur 13 + 13 = 26 ≠ 16.

2. AB² = (4−1)² + (2−1)² = 9 + 1 = 10, to AB = √10.
   BC² = (2−4)² + (8−2)² = 4 + 36 = 40, to BC = √40.
   CA² = (1−2)² + (1−8)² = 1 + 49 = 50, to CA = √50.
   Sabse lambi side CA (d² = 50). Jaanch: AB² + BC² = 10 + 40 = 50 = CA² ✅. Right angle **B** par (lambi side CA ke saamne). Teeno sides alag (10, 40, 50), to **scalene**.

3. AB² = 16, to AB = 4.
   BC² = (2−4)² + (2√3−0)² = 4 + 12 = 16, to BC = 4. (Yaad rakho (2√3)² = 4 × 3 = 12.)
   CA² = (2−0)² + (2√3−0)² = 4 + 12 = 16, to CA = 4.
   Teeno sides 4 hain, to **equilateral**.

4. Sides: AB² = 16, to AB = 4. BC² = (5−4)² + (2−0)² = 1 + 4 = 5, to BC = √5. CD² = (1−5)² + 0 = 16, to CD = 4. DA² = (0−1)² + (0−2)² = 1 + 4 = 5, to DA = √5.
   Diagonals: AC² = 25 + 4 = 29, to AC = √29. BD² = (1−4)² + (2−0)² = 9 + 4 = 13, to BD = √13.
   Opposite sides barabar, par sides saari barabar nahi, aur diagonals barabar nahi (29 ≠ 13). To sirf **parallelogram**.

5. AB² = 9 + 1 = 10. BC² = (2−3)² + (4−1)² = 1 + 9 = 10. CD² = (−1−2)² + (3−4)² = 9 + 1 = 10. DA² = (0−(−1))² + (0−3)² = 1 + 9 = 10. Chaaron sides √10, to rhombus.
   AC² = 4 + 16 = 20. BD² = (−1−3)² + (3−1)² = 16 + 4 = 20. Diagonals barabar (√20), to **square**.
   Jaanch: √10 × √2 = √20 ✅.

6. Farooq ne points ko order mein nahi socha. Points (0,0), (2,2), (2,0), (0,2) us order mein shape ke kinaare-kinaare nahi hain. (0,0) se (2,2) asal mein diagonal hai, side nahi. Sahi order: (0, 0) → (2, 0) → (2, 2) → (0, 2).
   Sides: 2, 2, 2, 2. Diagonals: (0,0)-(2,2): √8, aur (2,0)-(0,2): √8. Saari sides barabar aur diagonals barabar, to **square**.

7. AB² = (4−1)² + (5−1)² = 9 + 16 = 25, to AB = 5. BC² = (9−4)² + 0 = 25, to BC = 5. CD² = (6−9)² + (1−5)² = 9 + 16 = 25, to CD = 5. DA² = (1−6)² + 0 = 25, to DA = 5. Chaaron sides 5, to **rhombus**.
   Diagonals: AC² = (9−1)² + (5−1)² = 64 + 16 = 80, to AC = √80. BD² = (6−4)² + (1−5)² = 4 + 16 = 20, to BD = √20. 80 ≠ 20, diagonals barabar nahi, to **square nahi**.
   Jaanch: side² = (AC÷2)² + (BD÷2)² = 80/4 + 20/4 = 20 + 5 = 25 ✅.

8. (a) **True** ✅. 25 + 144 = 169 = 13².
   (b) **False** ❌. Rhombus mein bhi saari sides barabar hoti hain. Diagonals bhi barabar ho tabhi square.
   (c) **True** ✅. Parallelogram + diagonals barabar = rectangle.
   (d) **False** ❌. Sabse lambi side √20 hai, par 3² + 4² = 25 ≠ 20.

---

Ab aap sirf numbers dekh kar shape ki pehchaan kar sakte ho. Jab bhi koi shape pehchanna ho, pehle points order mein likho, phir saari zaroori doorian nikalo.

**Aage kya?** Topic 3 mein hum dekhenge ki teen points ek hi seedhi line par kab aate hain (bina line kheenche, sirf doorian jod kar), aur kab koi point do points se barabar doori par hota hai. Aur jab kisi point ka ek coordinate pata hi na ho (x ya y unknown), to bhi distance formula se usse kaise nikalte hain.
