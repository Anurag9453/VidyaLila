# Chapter: Triangles (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [triangles.md](triangles.md) se aage chalti hai.** Is topic mein Lines and Angles chapter ke results ([linear pair](../lines-and-angles/lines-and-angles-part2.md), [parallel lines](../lines-and-angles/lines-and-angles-part3.md)) kaam aayenge.
> **Topics covered in this file:**
> 2. Some Terms Related to a Triangle (Median, Altitude, Incentre, Circumcentre), Angle Sum, and Exterior and Interior Opposite Angles

---

# Topic 2: Triangle se jude kuch Terms, Angle Sum Property, aur Exterior Angle

Topic 1 mein humne triangle ko pehchanna seekha: uske sides, vertices aur angles, ΔABC jaisa naam, aur kaunsa side kis angle ke saamne hai. Phir triangles ko **sides** ke hisaab se (scalene, isosceles, equilateral) aur **angles** ke hisaab se (acute, right, obtuse) baanta, aur perimeter nikala.

Topic 1 ne do vaade bhi kiye the:
1. Ek triangle mein **ek se zyada right ya obtuse angle kyun nahi** ho sakta?
2. Equilateral triangle ka har angle **60° hi kyun** hota hai?

Is topic mein ye dono vaade poore honge. Saath mein hum triangle ke andar chhupi kuch khaas lines aur points dekhenge, aur triangle ke **bahar** banne wale angle ko bhi samjhenge.

---

## Gattey ke triangle ki kahani

Riya ke paas ek **gattey (cardboard) ka triangle** hai. Wo use ek pencil ki nok par balance karna chahti hai, jaise circus wale plate ghumate hain.

Pehle wo kone ke paas pencil rakhti hai, aur triangle gir jata hai. Phir beech mein kahin rakhti hai, aur phir gir jata hai.

Uski didi kehti hain: "Ruk, ek trick hai."

- Didi har side ka **beech ka point** (midpoint) nishan lagati hain.
- Har kone se uske saamne wali side ke midpoint tak ek seedhi line kheenchti hain.
- Teeno lines **ek hi point** par milti hain.

Riya us point par pencil rakhti hai, aur triangle **bilkul balance** ho jata hai!

Wo khaas point triangle ka **centroid** hai, aur jo lines kheenchi gayi thin wo **medians** hain. Is topic mein hum aisi chaar tarah ki lines aur unse bane chaar khaas points seekhenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Median** | Vertex se saamne wali side ke **midpoint** tak line | A se BC ke midpoint D tak: AD |
| **Centroid (G)** | Teeno medians jahan milti hain; triangle ka balance point | Riya ki pencil wali jagah |
| **Altitude** | Vertex se saamne wali side par **perpendicular** (90° wali) line | A se BC par seedhi khadi line |
| **Orthocentre (H)** | Teeno altitudes jahan milti hain | |
| **Perpendicular bisector** | Side ke midpoint se, us side par 90° par kheenchi line | BC ke beech se khadi line |
| **Circumcentre (O)** | Teeno perpendicular bisectors jahan milte hain; teeno **vertices** se barabar door | Teeno konon se barabar door wala point |
| **Angle bisector** | Wo line jo angle ko **do barabar** hisson mein baante | ∠A ko aadha karne wali line |
| **Incentre (I)** | Teeno angle bisectors jahan milte hain; teeno **sides** se barabar door | |
| **Concurrent** | Teen ya zyada lines jo **ek hi point** se guzrein ([Euclid chapter ke Topic 2](../euclids-geometry/euclids-geometry-part2.md) mein dekha tha) | Teeno medians concurrent hain |
| **Exterior angle** | Ek side ko aage badhane par triangle ke **bahar** bana angle | |
| **Interior opposite angles** | Exterior angle se **door** wale do andar ke angles | |

---

## Part A: Median aur Centroid

### Median kya hai?

Triangle ke kisi vertex se, uske **saamne wali side ke midpoint** tak kheenchi gayi line ko **median** kehte hain.

```
            A
           /|\
          / | \
         /  |  \
        /   |   \
       /    |    \
      B-----D-----C
         BD = DC
```

Yahan D, BC ka midpoint hai (BD = DC). To **AD ek median** hai.

Har triangle mein **teen vertices** hain, isliye **teen medians** hote hain: A se, B se aur C se.

### Centroid: teeno medians ka milan

Teeno medians hamesha **ek hi point** par milti hain. Is point ko **centroid** kehte hain, aur ise **G** se likhte hain.

Centroid ki teen khaas baatein:

1. **Balance point:** Gattey ke triangle ko centroid par rakho, to wo balance ho jata hai (Riya wali kahani).
2. **Hamesha andar:** Triangle kaisa bhi ho (acute, right, obtuse), centroid hamesha triangle ke **andar** hota hai.
3. **2 : 1 ka batwara:** Centroid har median ko **2 : 1** mein baant deta hai. Vertex wala hissa lamba (2 hisse), side wala hissa chhota (1 hissa).

```
      A
      |
      |   AG = 2 hisse
      |
      G
      |   GD = 1 hissa
      D
```

**Example:** Median AD = 9 cm hai aur G centroid hai. AG aur GD nikalo.

AD ko 2 + 1 = 3 hisson mein baanto. Ek hissa = 9 ÷ 3 = 3 cm.
- **AG** = 2 × 3 = **6 cm**
- **GD** = 1 × 3 = **3 cm**

Jaanch: 6 + 3 = 9 ✅, aur 6 : 3 = 2 : 1 ✅

(Is 2 : 1 wali baat ka proof aage ki classes mein aata hai. Abhi ise ek fact ki tarah yaad rakho.)

---

## Part B: Altitude aur Orthocentre

### Altitude kya hai?

Triangle ke kisi vertex se, uske **saamne wali side par perpendicular** (90° par) kheenchi line ko **altitude** (oonchai) kehte hain.

```
            A
           /|\
          / | \
         /  |  \
        /   |   \
       /    |90°  \
      B-----L------C
          AL ⊥ BC
```

AL, BC par seedhi khadi hai. To **AL ek altitude** hai.

Roz ki zindagi mein: koi ladka ek dhalaan wali chhat ke neeche khada hai. Chhat ki noke se zameen tak **seedha neeche** girta hua dhaaga hi "oonchai" hai, tircha dhaaga nahi.

**Median aur altitude mein farak:**
- **Median** saamne wali side ke **beech (midpoint)** par girti hai.
- **Altitude** saamne wali side par **90°** par girti hai.

Dono alag ho sakte hain. Sirf kuch khaas triangles mein (jaise equilateral) dono ek hi line hote hain.

### Orthocentre: teeno altitudes ka milan

Teeno altitudes (ya unhe aage badhane par bani lines) ek hi point par milti hain. Is point ko **orthocentre** kehte hain, aur ise **H** se likhte hain.

Orthocentre kahan hota hai, ye triangle ke type par depend karta hai:

| Triangle ka type | Orthocentre kahan |
|---|---|
| **Acute** triangle | Triangle ke **andar** |
| **Right** triangle | **Right angle wale vertex** par |
| **Obtuse** triangle | Triangle ke **bahar** |

**Right triangle mein vertex par kyun?** Right triangle mein do sides pehle se hi ek doosre par perpendicular hain. Isliye wo do sides khud do altitudes ka kaam karti hain, aur wo right angle wale vertex par milti hain. To orthocentre wahi vertex hai.

**Obtuse triangle mein bahar kyun?** Baaki do (acute) vertices se altitude kheenchne ke liye saamne wali side ko **aage badhana padta hai**. Isliye altitudes ka milan bahar ho jata hai.

---

## Part C: Perpendicular Bisector aur Circumcentre

### Perpendicular bisector kya hai?

Kisi side ke **midpoint se**, us side par **90° par** kheenchi line ko us side ka **perpendicular bisector** kehte hain.

- "Bisector" = do barabar hisson mein kaatne wala
- "Perpendicular" = 90° par

```
            |
            |
     B------M------C
            |
            |
   BM = MC, aur line BC par 90° par hai
```

Dhyan do: perpendicular bisector **vertex se nahi** shuru hota. Wo side ke beech se khada hota hai.

### Circumcentre: teeno perpendicular bisectors ka milan

Teeno sides ke perpendicular bisectors ek hi point par milte hain. Is point ko **circumcentre** kehte hain, aur ise **O** se likhte hain.

**Sabse khaas baat:** Circumcentre teeno **vertices se barabar door** hota hai.

OA = OB = OC

Isliye O ko centre maan kar, OA jitna radius lekar circle banao, to wo teeno vertices se guzarta hai. Is circle ko **circumcircle** kehte hain, aur iske radius ko **circumradius**.

**Roz ki zindagi mein:** Teen gaon A, B, C hain. Sarkar ek aisa paani ka tank banana chahti hai jo **teeno gaon se barabar door** ho. Tank circumcentre par banega.

Circumcentre kahan hota hai:

| Triangle ka type | Circumcentre kahan |
|---|---|
| **Acute** triangle | Triangle ke **andar** |
| **Right** triangle | **Hypotenuse ke midpoint** par |
| **Obtuse** triangle | Triangle ke **bahar** |

**Example:** Ek right triangle ka hypotenuse 10 cm hai. Circumradius kitna hai?

Right triangle mein circumcentre hypotenuse ke midpoint par hota hai. To circumradius = hypotenuse ka aadha = 10 ÷ 2 = **5 cm**.

---

## Part D: Angle Bisector aur Incentre

### Angle bisector kya hai?

Wo line jo kisi angle ko **do barabar hisson** mein baante, use **angle bisector** kehte hain. (Lines and Angles chapter ke Topic 1 mein ise ek idea ki tarah dekha tha.)

Agar ∠A = 70° hai, to uska bisector use 35° aur 35° mein baant deta hai.

### Incentre: teeno angle bisectors ka milan

Triangle ke teeno angles ke bisectors ek hi point par milte hain. Is point ko **incentre** kehte hain, aur ise **I** se likhte hain.

**Khaas baat:** Incentre teeno **sides se barabar door** hota hai.

Isliye I ko centre maan kar ek circle banao jo teeno sides ko andar se bas **chhoo** le. Is circle ko **incircle** kehte hain.

**Roz ki zindagi mein:** Ek triangle wale khet mein sabse bada **gol fountain** banana hai jo teeno deewaron ko chhoo le. Uska centre incentre par hoga.

Incentre hamesha triangle ke **andar** hota hai, triangle chahe kaisa bhi ho.

```
            A
           / \
          /   \
         /  I  \      I se teeno sides ki doori barabar
        /       \
       B---------C
```

---

## Part E: Chaaron centres ek nazar mein

Inhe yaad rakhna thoda mushkil lagta hai, isliye ek table banate hain.

| Centre | Kin lines ka milan | Khaas baat | Acute | Right | Obtuse |
|---|---|---|---|---|---|
| **Centroid (G)** | Medians | Balance point, median ko 2 : 1 mein baantta hai | Andar | Andar | Andar |
| **Orthocentre (H)** | Altitudes | | Andar | Right angle wale vertex par | Bahar |
| **Circumcentre (O)** | Perpendicular bisectors | Vertices se barabar door, circumcircle | Andar | Hypotenuse ke midpoint par | Bahar |
| **Incentre (I)** | Angle bisectors | Sides se barabar door, incircle | Andar | Andar | Andar |

**Yaad rakhne ka tarika:**
- **M**edian → centroi**d** (balance, "**M**iddle wali side")
- **A**ltitude → **O**rtho (ortho matlab "seedha khada", jaise 90°)
- **C**ircumcentre → **C**ircle **vertices** se (bahar wala circle)
- **I**ncentre → **I**nside circle (andar wala circle, sides ko chhoota hai)

### Equilateral triangle: sab ek hi jagah

Equilateral triangle mein teeno sides aur teeno angles barabar hote hain. Isliye har vertex se:
- median (midpoint tak),
- altitude (90° par),
- angle bisector (angle ko aadha karne wali),
- aur us side ka perpendicular bisector

**sab ek hi line** hote hain. Isliye chaaron centres (G, H, O, I) **ek hi point** par aa jaate hain.

---

## Part F: Angle Sum Property (180°)

Ab Topic 1 ke vaadon ki baari.

### Pehle ek activity: kaagaz phaado

1. Kaagaz par koi bhi triangle banao aur kaat lo.
2. Teeno konon par 1, 2, 3 likho.
3. Teeno kone **phaad kar** alag kar lo.
4. Ek seedhi line kheencho aur teeno kone us par **ek ke baad ek** chipka do, nokein ek hi point par rakh kar.

```
        \  2  /
       1 \   / 3
   -------\-/-------
           *
```

Teeno kone mil kar **ek seedhi line** bana dete hain, yaani **180°**. Kisi bhi triangle ke saath karo, yahi hoga.

### Theorem: Triangle ke teeno angles ka sum 180° hota hai

**Given:** ΔPQR, jiske angles ∠P, ∠Q, ∠R hain.

**To prove:** ∠P + ∠Q + ∠R = 180°

**Construction:** P se ek line XPY kheencho jo QR ke **parallel** ho.

```
   X --------- P --------- Y
              / \
             /   \
            /     \
           /       \
          Q---------R
```

**Proof:**

| Statement | Reason |
|---|---|
| ∠XPQ = ∠PQR (yaani ∠Q) | XY ∥ QR aur PQ transversal hai, to ye **alternate interior angles** hain, jo barabar hote hain |
| ∠YPR = ∠PRQ (yaani ∠R) | XY ∥ QR aur PR transversal hai, alternate interior angles |
| ∠XPQ + ∠QPR + ∠YPR = 180° | Ye teeno angles seedhi line XY par ek ke baad ek hain, to inka sum 180° (angles on a straight line) |
| ∠Q + ∠P + ∠R = 180° | Upar ki pehli do lines ko teesri mein rakha |

**Hence proved.**

Alternate interior angles wala result humne [Lines and Angles ke Topic 3](../lines-and-angles/lines-and-angles-part3.md) mein dekha tha, aur seedhi line par angles ka sum 180° [Topic 2](../lines-and-angles/lines-and-angles-part2.md) mein. Yahan bas un dono ko jod diya.

### Vaada 1: Ek se zyada right ya obtuse angle kyun nahi?

Maan lo kisi triangle mein do right angles hain: 90° + 90° = 180°. Teeno ka sum 180° hona chahiye, to teesra angle **0°** bachega. Par 0° ka angle triangle nahi banata (do sides ek doosre par so jayengi).

Aur agar ek angle obtuse ho (jaise 100°) aur doosra right (90°), to 100° + 90° = 190° pehle hi 180° se zyada ho gaya. **Namumkin.**

To ek triangle mein **zyada se zyada ek** right angle ya obtuse angle ho sakta hai. Baaki do angles **hamesha acute** hote hain.

### Vaada 2: Equilateral ka har angle 60° kyun?

Equilateral triangle ke teeno angles barabar hote hain (Topic 1 mein dekha tha; iska proof aage [Congruence of Triangles chapter ke Topic 3](../congruence-of-triangles/congruence-of-triangles-part3.md) mein aayega). Maan lo har angle x hai.

x + x + x = 180°
3x = 180°
**x = 60°**

To equilateral triangle ka **har angle 60°** hota hai.

### Ek aur nateeja: right triangle ke do acute angles

Right triangle mein ek angle 90° hai. Baaki do ka sum = 180° − 90° = **90°**.

Yaani right triangle ke do acute angles **complementary** hote hain. (Complementary angles [Lines and Angles Topic 2](../lines-and-angles/lines-and-angles-part2.md) mein dekhe the.)

**Example:** Right triangle ka ek acute angle 35° hai. Doosra?
90° − 35° = **55°**
Jaanch: 90 + 35 + 55 = 180 ✅

---

## Part G: Exterior Angle aur Interior Opposite Angles

### Exterior angle kya hai?

Triangle ki kisi side ko **aage badhao**. Jo naya angle triangle ke **bahar** banta hai, use **exterior angle** kehte hain.

```
            P
           / \
          /   \
         /     \
        /       \
       Q---------R------S
                  ∠PRS = exterior angle
```

Yahan QR ko S tak badhaya. ∠PRS exterior angle hai.

**Interior opposite angles:** Exterior angle ke **paas wala** andar ka angle ∠PRQ hai. Baaki do andar ke angles, **∠P aur ∠Q**, exterior angle se door hain. Inhe **interior opposite angles** kehte hain.

Isse ek sadak ki tarah socho: aap R par khade ho aur sadak RS par aage dekh rahe ho. P aur Q aapke **peeche aur door** hain. Wahi interior opposite angles hain.

### Theorem: Exterior angle = dono interior opposite angles ka sum

**∠PRS = ∠P + ∠Q**

**Proof:**

| Statement | Reason |
|---|---|
| ∠PRQ + ∠PRS = 180° | QS seedhi line hai, to ye **linear pair** hai |
| ∠P + ∠Q + ∠PRQ = 180° | Triangle ka **angle sum** (Part F) |
| ∠PRQ + ∠PRS = ∠P + ∠Q + ∠PRQ | Dono 180° ke barabar hain |
| ∠PRS = ∠P + ∠Q | Dono taraf se ∠PRQ hata diya |

**Hence proved.**

**Example:** ∠P = 50°, ∠Q = 60°. Exterior angle ∠PRS kitna hai?
∠PRS = 50° + 60° = **110°**
Jaanch: ∠PRQ = 180 − 50 − 60 = 70°, aur 70 + 110 = 180 (linear pair) ✅

### Ek seedha nateeja: exterior angle har interior opposite angle se bada hai

Kyunki ∠PRS = ∠P + ∠Q, aur ∠P, ∠Q dono positive hain, to:
- ∠PRS > ∠P
- ∠PRS > ∠Q

Jaise 110° > 50° aur 110° > 60°.

### Saare exterior angles ka sum (ek halki jhalak)

Har vertex par ek exterior angle banao. Har exterior angle = 180° − us vertex ka andar wala angle.

Teeno ka sum = (180 − ∠P) + (180 − ∠Q) + (180 − ∠R)
= 540° − (∠P + ∠Q + ∠R)
= 540° − 180°
= **360°**

**Example:** Andar ke angles 50°, 60°, 70° hain. Exterior angles: 130°, 120°, 110°.
130 + 120 + 110 = **360°** ✅

Ek gol chakkar 360° hota hai. Triangle ke chaaron taraf ghoomo, to aap ek poora chakkar laga lete ho.

---

## Part H: "Find x" ke solved examples

**Example 1: Angles ka ratio 2 : 3 : 4 hai. Angles nikalo.**
Angles = 2k, 3k, 4k
2k + 3k + 4k = 180°
9k = 180°, k = 20°
Angles: **40°, 60°, 80°**
Jaanch: 40 + 60 + 80 = 180 ✅ (Teeno acute hain, to ye acute triangle hai.)

**Example 2: Angles (2x + 10)°, (3x + 5)° aur (x + 15)° hain. x aur angles nikalo.**
(2x + 10) + (3x + 5) + (x + 15) = 180
6x + 30 = 180
6x = 150, **x = 25**
Angles: 2(25) + 10 = **60°**, 3(25) + 5 = **80°**, 25 + 15 = **40°**
Jaanch: 60 + 80 + 40 = 180 ✅

**Example 3: Ek angle doosre ka 3 guna hai, aur teesra angle chhote angle se 20° zyada hai.**
Chhota angle = x. Phir angles: x, 3x, x + 20.
x + 3x + x + 20 = 180
5x = 160, **x = 32**
Angles: **32°, 96°, 52°**
Jaanch: 32 + 96 + 52 = 180 ✅ (96° obtuse hai, to ye obtuse triangle hai.)

**Example 4: Ek triangle ke do angles barabar hain aur teesra 40° hai. Barabar wale angles nikalo.**
x + x + 40 = 180
2x = 140, **x = 70°**
Angles: **70°, 70°, 40°**

**Example 5: Exterior angle 110° hai aur ek interior opposite angle 45° hai. Baaki angles nikalo.**
Exterior angle theorem: 110 = 45 + (doosra interior opposite)
Doosra interior opposite angle = 110 − 45 = **65°**
Exterior ke paas wala andar ka angle = 180 − 110 = **70°** (linear pair)
Angles: **45°, 65°, 70°**
Jaanch: 45 + 65 + 70 = 180 ✅

**Example 6: Exterior angle 105° hai, aur interior opposite angles x aur 2x hain.**
x + 2x = 105
3x = 105, **x = 35**
Interior opposite angles: **35°** aur **70°**
Teesra angle = 180 − 105 = **75°**
Jaanch: 35 + 70 + 75 = 180 ✅

**Example 7: Exterior angle 120° hai, aur interior opposite angles ka ratio 1 : 2 hai.**
k + 2k = 120, 3k = 120, k = 40
Interior opposite angles: **40°** aur **80°**. Teesra angle = 180 − 120 = **60°**.
Jaanch: 40 + 80 + 60 = 180 ✅

**Example 8: Kya 90°, 60°, 40° ek triangle ke angles ho sakte hain?**
90 + 60 + 40 = 190 ≠ 180. **Nahi**, ye triangle nahi bana sakte.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Median aur altitude ko ek samajhna**
Median side ke **midpoint** par girti hai, altitude side par **90°** par. Aam triangle mein dono alag hote hain.

**Galti 2: Perpendicular bisector ko vertex se kheenchna**
Perpendicular bisector side ke **midpoint** se khada hota hai. Zaroori nahi ki wo vertex se guzre.

**Galti 3: Circumcentre aur incentre ko mix karna**
- Circumcentre: **vertices** se barabar door (circle bahar se, konon se guzarta hai).
- Incentre: **sides** se barabar door (circle andar se, sides ko chhoota hai).

**Galti 4: Centroid ka ratio ulta likhna**
Vertex se centroid tak wala hissa **bada** (2) hota hai. AD = 9 ho to AG = 6, GD = 3. Ulta (AG = 3) likhna galat hai.

**Galti 5: Exterior angle mein paas wala angle jod dena**
Exterior angle = **door wale** do angles ka sum. Paas wala andar ka angle exterior ke saath **linear pair** banata hai, use jodna nahi hai.

**Galti 6: Har jagah orthocentre ko andar maan lena**
Obtuse triangle mein orthocentre aur circumcentre **bahar** hote hain. Right triangle mein orthocentre vertex par aur circumcentre hypotenuse ke midpoint par.

**Galti 7: x nikal kar ruk jana**
Sawaal angles maange to x ki value rakh kar **teeno angles** likho, aur jaanch karo ki sum 180° aata hai.

---

## Quick Recap

- **Median:** vertex se saamne ki side ke midpoint tak. Teeno medians **centroid (G)** par milti hain. G median ko **2 : 1** mein baantta hai aur balance point hai.
- **Altitude:** vertex se saamne ki side par 90°. Teeno altitudes **orthocentre (H)** par milti hain.
- **Perpendicular bisector:** side ke midpoint se 90° par. Teeno **circumcentre (O)** par milte hain. O vertices se barabar door, **circumcircle** ka centre.
- **Angle bisector:** angle ko aadha karti hai. Teeno **incentre (I)** par milte hain. I sides se barabar door, **incircle** ka centre.
- Centroid aur incentre hamesha andar. Orthocentre aur circumcentre: acute mein andar, right mein vertex / hypotenuse ke midpoint par, obtuse mein bahar.
- Equilateral triangle mein **chaaron centres ek** hi point par.
- **Angle sum property:** ∠A + ∠B + ∠C = **180°**.
- Isliye: zyada se zyada **ek** right ya obtuse angle, equilateral ka har angle **60°**, right triangle ke do acute angles **complementary**.
- **Exterior angle = dono interior opposite angles ka sum**, aur exterior angle har interior opposite angle se **bada** hota hai.
- Teeno exterior angles ka sum **360°**.

---

## Practice Questions

1. Fill in the blanks:
   (a) The point where the three medians of a triangle meet is called the ________.
   (b) The point where the three altitudes meet is called the ________.
   (c) The point where the perpendicular bisectors of the sides meet is called the ________.
   (d) The point where the angle bisectors meet is called the ________.

2. Where does each point lie?
   (a) The orthocentre of a right triangle.
   (b) The circumcentre of an obtuse triangle.
   (c) The incentre of an obtuse triangle.

3. In ΔABC, AD is a median and G is the centroid. If AD = 12 cm, find AG and GD.

4. The hypotenuse of a right triangle is 13 cm. Find the radius of its circumcircle.

5. The angles of a triangle are in the ratio 3 : 4 : 5. Find the angles.

6. The angles of a triangle are (x + 20)°, (2x − 10)° and (x + 30)°. Find x and each angle.

7. An exterior angle of a triangle is 130° and one of its interior opposite angles is 60°. Find the other two angles of the triangle.

8. An exterior angle of a triangle is 100° and the two interior opposite angles are equal. Find all the angles of the triangle.

9. Can a triangle have:
   (a) two right angles?
   (b) all three angles equal to 60°?
   (c) all three angles acute?
   (d) two obtuse angles?
   Give a reason for each.

10. One acute angle of a right triangle is 28°. Find the other acute angle.

### Answers

1. (a) **Centroid**  (b) **Orthocentre**  (c) **Circumcentre**  (d) **Incentre**

2. (a) **Right angle wale vertex par.** Do perpendicular sides khud altitudes hain aur wahin milti hain.
   (b) **Triangle ke bahar.**
   (c) **Triangle ke andar.** Incentre hamesha andar hota hai.

3. Centroid median ko 2 : 1 mein baantta hai. Ek hissa = 12 ÷ 3 = 4 cm.
   **AG = 8 cm, GD = 4 cm**
   Jaanch: 8 + 4 = 12 ✅

4. Right triangle mein circumcentre hypotenuse ke midpoint par hota hai, to circumradius = 13 ÷ 2 = **6.5 cm**.

5. 3k + 4k + 5k = 180, 12k = 180, k = 15.
   Angles: **45°, 60°, 75°**
   Jaanch: 45 + 60 + 75 = 180 ✅

6. (x + 20) + (2x − 10) + (x + 30) = 180
   4x + 40 = 180, 4x = 140, **x = 35**
   Angles: **55°, 60°, 65°**
   Jaanch: 55 + 60 + 65 = 180 ✅

7. Doosra interior opposite angle = 130 − 60 = **70°**
   Exterior ke paas wala angle = 180 − 130 = **50°**
   Angles: **60°, 70°, 50°**
   Jaanch: 60 + 70 + 50 = 180 ✅

8. Interior opposite angles barabar hain: x + x = 100, x = 50.
   Teesra angle = 180 − 100 = 80.
   Angles: **50°, 50°, 80°**
   Jaanch: 50 + 50 + 80 = 180 ✅

9. (a) **Nahi.** 90 + 90 = 180, teesra angle 0° bachega. ❌
   (b) **Haan.** 60 + 60 + 60 = 180. Ye equilateral triangle hai. ✅
   (c) **Haan.** Jaise 50°, 60°, 70°. Ye acute triangle hai. ✅
   (d) **Nahi.** Do obtuse angles ka sum hi 180° se zyada ho jayega. ❌

10. Right triangle ke do acute angles complementary hote hain: 90 − 28 = **62°**.
    Jaanch: 90 + 28 + 62 = 180 ✅

---

Is topic mein bahut saare naye naam aaye: centroid, orthocentre, circumcentre, incentre. Agar ek baar mein yaad na ho, to Part E ki table dobara dekh lo. Aur 180° wala rule to ab aapka pakka dost ban gaya hai. Triangle ka koi bhi "find x" sawaal isi se shuru hota hai. Aap kar loge!
