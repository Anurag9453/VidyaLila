# Chapter: Rectilinear Figures (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [rectilinear-figures.md](rectilinear-figures.md) se aage chalti hai** (wahan Topic 1 hai: polygon kya hota hai, sides, vertices, diagonals, triangle se decagon tak ke naam, convex aur concave, regular aur irregular, aur diagonals ginne ka formula).
> **Pichli padhai se judi cheezein:** triangle ke teeno angles ka jod 180° hota hai ([triangles-part2.md](../triangles/triangles-part2.md)); quadrilateral ke bare mein [quadrilaterals.md](../quadrilaterals/quadrilaterals.md) mein bhi dekha ja sakta hai.
> **Topics covered in this file:**
> 2. Polygon ke Andar ke Angles ka Jod

---

# Topic 2: Polygon ke Andar ke Angles ka Jod

Topic 1 mein humne polygons ko pehchanna seekha: kitni sides, kitne vertices, kitne diagonals, convex hai ya concave, regular hai ya irregular. Haveli ke mosaic farsh par Pari ne sides gin kar hexagon, octagon aur 7 sides wale heptagon ko pehchana tha, aur humne n(n − 3) ÷ 2 se diagonals gine the. Ab tak hum polygon ko **bahar se** dekh rahe the, uski shakal aur ginti se. Ab hum uske **andar ke kone** (angles) dekhenge. Sawaal simple hai: kisi bhi polygon ke andar ke saare angles ko jodo, to kitna aata hai? Aur agar polygon regular hai, to har ek angle kitna hoga?

Jawab aapko pehle se aata hua ek fact dega: triangle ke angles ka jod 180°.

---

## Gulshan ki hexagon wali table

Gulshan ek kaarigar (carpenter) hai. Aaj uske paas ek customer ka order hai: **hexagon (6 bhuja wali) lakdi ki table**. Table ka top chhe barabar lambai ki lakdi ki patti se banna hai, aur chhe patti aapas mein is tarah judni chahiye ki beech mein zara bhi gap na rahe.

Uska shagird Taru kaam seekh raha hai. Wo poochta hai, "Ustaad, in pattiyon ke kone kitne angle par kaatne hain? Agar zara bhi galat kata, to gap reh jayega."

Gulshan sar kharochta hai. "Arre, number to yaad nahi aa raha. Par chal, nikaal lete hain. Number yaad rakhne ki zaroorat nahi, bas ye pata hona chahiye ki number nikalta kaise hai."

Wo table ke top ka chhota sa naksha kaagaz par banata hai. "Dekh Taru, ek kone se sidhi lakeeren kheench kar hexagon ko triangles mein baant dete hain. Triangle ke angles ka jod to hum jaante hain: 180°."

Is topic ke end tak hum Gulshan aur Taru ke saath ye number nikaal chuke honge, aur saath mein ek aisa tareeka bhi mil chuka hoga jisse **kisi bhi polygon** ke angles ka jod nikala ja sake.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Interior angle** (andar ka angle) | Polygon ke andar, ek vertex par do sides ke beech ka kona | Hexagon table ka har kona |
| **Angle sum** (angles ka jod) | Polygon ke saare interior angles ko jodne par jo aata hai | Triangle ka angle sum 180° |
| **Triangulation** (triangles mein baantna) | Ek vertex se diagonals kheench kar polygon ko triangles mein tod dena | Hexagon se 4 triangles |
| **Regular polygon** | Saari sides barabar aur saare angles barabar | Square, regular hexagon |
| **Reflex angle** | 180° se bada angle (concave polygon mein andar ka angle aisa ho sakta hai) | 210° |

---

## Part A: Polygon ko triangles mein baantna

Triangle ka angle sum 180° pata hai. To trick ye hai: **kisi bhi polygon ko triangles mein tod do**, aur triangles ke angles jod do.

**Tareeka:** polygon ka **koi ek vertex** chuno. Us vertex se baaki saare vertices tak diagonals kheencho (jo diagonals bahar na jayein, matlab polygon convex ho). Polygon kai triangles mein bat jayega.

### Pentagon (5 sides)

Pentagon ABCDE mein vertex A chuno. A se do diagonals jaate hain: AC aur AD (AB aur AE to pehle se sides hain).

```
              A
            / | \
          /  / \  \
        E   /   \   B
         \ /     \ /
          D-------C
```

Andar ki do lakeeren AD aur AC hain. Teen triangles bane: **ABC, ACD, ADE**.

Har triangle ka angle sum 180° hai, to:

> Pentagon ka angle sum = 3 × 180° = **540°**

### Hexagon (6 sides)

Hexagon ABCDEF mein vertex A se teen diagonals: AC, AD, AE (AB aur AF sides hain).

```
             A
           / | \
         /  /|\  \
       F   / | \   B
       |  /  |  \  |
       | /   |   \ |
       E     |     C
         \   |   /
           \ | /
             D
```

Chaar triangles bane: **ABC, ACD, ADE, AEF**.

> Hexagon ka angle sum = 4 × 180° = **720°**

### Pattern kya hai?

| Polygon | Sides (n) | Triangles | Triangles ka jod |
|---|---|---|---|
| Triangle | 3 | 1 | 1 × 180° |
| Quadrilateral | 4 | 2 | 2 × 180° |
| Pentagon | 5 | 3 | 3 × 180° |
| Hexagon | 6 | 4 | 4 × 180° |

Triangles ki ginti hamesha **sides se 2 kam** hai. Kyun? Jis vertex A se hum diagonals kheench rahe hain, wo apne **do padosi vertices** tak diagonal nahi bana sakta (wahan to pehle se side hai), aur khud tak bhi nahi. Is tarah n vertices mein se 3 chhoot gaye, baaki n − 3 diagonals bane. n − 3 diagonals polygon ko (n − 3) + 1 = **n − 2** triangles mein baant dete hain.

> **n sides wale convex polygon ko ek vertex se (n − 2) triangles mein baanta ja sakta hai.**

---

## Part B: Interior angles ke jod ka formula

Har triangle ka angle sum 180°, aur triangles ke saare kone milkar polygon ke andar ke kone bana dete hain (koi kona bachta nahi, koi extra nahi). To:

> **n sides wale polygon ke interior angles ka jod = (n − 2) × 180°**

Isko samajhna bhi aasan hai: "sides se 2 kam, phir 180 se guna."

### Table: alag-alag polygons ke angle sum

| Polygon | n | (n − 2) | Angle sum |
|---|---|---|---|
| Triangle | 3 | 1 | 1 × 180° = **180°** |
| Quadrilateral | 4 | 2 | 2 × 180° = **360°** |
| Pentagon | 5 | 3 | 3 × 180° = **540°** |
| Hexagon | 6 | 4 | 4 × 180° = **720°** |
| Heptagon | 7 | 5 | 5 × 180° = **900°** |
| Octagon | 8 | 6 | 6 × 180° = **1080°** |
| Nonagon | 9 | 7 | 7 × 180° = **1260°** |
| Decagon | 10 | 8 | 8 × 180° = **1440°** |

Quadrilateral ka 360° aapne [quadrilaterals.md](../quadrilaterals/quadrilaterals.md) mein bhi dekha hoga. Ab aap janate hain ki wo kyun hai: quadrilateral ko ek diagonal se 2 triangles mein baanta, 2 × 180° = 360°.

Dhyan do: har agli row mein angle sum **180° badhta hai**. Ek side badhi, to ek triangle aur judta hai.

---

## Part C: Regular polygon ka har ek angle

Regular polygon mein **saare angles barabar** hote hain. To agar angle sum pata ho, to usse n se baant do:

> **Regular n-gon ka har interior angle = (n − 2) × 180° ÷ n**

### Table

| Regular polygon | n | Angle sum | Har ek angle |
|---|---|---|---|
| Equilateral triangle | 3 | 180° | 180 ÷ 3 = **60°** |
| Square | 4 | 360° | 360 ÷ 4 = **90°** |
| Regular pentagon | 5 | 540° | 540 ÷ 5 = **108°** |
| Regular hexagon | 6 | 720° | 720 ÷ 6 = **120°** |
| Regular octagon | 8 | 1080° | 1080 ÷ 8 = **135°** |
| Regular decagon | 10 | 1440° | 1440 ÷ 10 = **144°** |

**Jaanch:** square ka 90° aur equilateral triangle ka 60° to pehle se pata tha ✅. Baaki mein: 108 × 5 = 540 ✅, 120 × 6 = 720 ✅, 135 × 8 = 1080 ✅, 144 × 10 = 1440 ✅.

Dekho, sides badhne par har angle bhi badhta hai (60°, 90°, 108°, 120°, 135°, 144°). Polygon dheere-dheere gol hota jata hai, aur angle 180° ke paas pahunchta jata hai, par kabhi 180° tak nahi pahunchta.

---

## Part D: Solved examples

### Example 1: Gulshan ki table ke kone

Gulshan aur Taru ki hexagon table regular hai (chhe patti barabar, kone barabar).

- Hexagon ke liye n = 6.
- Angle sum = (6 − 2) × 180° = 4 × 180° = 720°.
- Har interior angle = 720° ÷ 6 = **120°**.

Taru ne poochha, "Ustaad, to patti 120° par kaat doon?" Gulshan hasa. "Nahi re, ye 120° to table ke **andar** ka kona hai, jahan do pattiyan milti hain. Kone par do pattiyan milti hain, to kona dono mein aadha-aadha batega: 120° ÷ 2 = **60°**. Har patti ke sire ko tirchha aise kaatna hai ki patti ke kinare aur kate hue sire ke beech **60°** ka kona bane. Do pattiyon ke 60° + 60° = 120°, aur kone ek dam fit."

**Jaanch:** chhe kone × 120° = 720° ✅, aur 60° + 60° = 120° ✅.

Kaam ka saaf result: **regular hexagon ka har kona 120°**, aur har patti ka sira 60° par.

### Example 2: Missing angle dhoondhna

Ek pentagon ke chaar angle 100°, 110°, 120° aur 90° hain. Paanchva angle kya hai?

- Pentagon ka angle sum = (5 − 2) × 180° = 540°.
- Diye hue chaar angles ka jod = 100 + 110 + 120 + 90 = 420°.
- Paanchva angle = 540° − 420° = **120°**.

**Jaanch:** 100 + 110 + 120 + 90 + 120 = 540 ✅.

### Example 3: Algebra wale angles

Ek quadrilateral ke angles x, 2x, 3x aur 4x hain. Har angle dhoondho.

- Quadrilateral ka angle sum = 360°.
- x + 2x + 3x + 4x = 10x = 360°, to x = **36°**.
- Angles: 36°, 72°, 108°, 144°.

**Jaanch:** 36 + 72 + 108 + 144 = 360 ✅.

### Example 4: Angle sum se sides ki ginti

Ek polygon ke interior angles ka jod 1620° hai. Uski kitni sides hain?

- (n − 2) × 180 = 1620
- n − 2 = 1620 ÷ 180 = 9
- n = **11**

**Jaanch:** (11 − 2) × 180 = 9 × 180 = 1620 ✅. Ye 11 sides wala polygon (hendecagon) hai.

### Example 5: Regular polygon ka angle diya hai, sides dhoondho

Ek regular polygon ka har interior angle 150° hai. Kitni sides hain?

n sides wale polygon ka angle sum (n − 2) × 180 hai. Regular hai, to har ek angle 150°, matlab n angles ka jod 150 × n.

- (n − 2) × 180 = 150n
- 180n − 360 = 150n
- 180n − 150n = 360
- 30n = 360
- n = **12**

**Jaanch:** n = 12 ke liye har angle = (12 − 2) × 180 ÷ 12 = 1800 ÷ 12 = 150° ✅.

### Example 6: Concave polygon par bhi formula chalta hai

Ab tak hamare saare polygons convex the. Kya concave polygon (jisme koi kona andar dhansa ho) par bhi (n − 2) × 180° chalta hai? Haan, bilkul chalta hai, bas dhyan rakhna hai ki dhanse hue kone ka interior angle **180° se bada (reflex)** hota hai.

Ek chhoti si "arrowhead" (dart) shape lo, jo ek quadrilateral hai. Uske teen angle 40°, 60° aur 50° hain. Chautha angle reflex angle hai.

- Angle sum = (4 − 2) × 180° = 360°.
- Teen angles ka jod = 40 + 60 + 50 = 150°.
- Reflex angle = 360° − 150° = **210°**.

**Jaanch:** 40 + 60 + 50 + 210 = 360 ✅, aur 210° > 180° hai, yaani sach mein reflex ✅.

Ye kyun chalta hai? Is dart ko dhanse hue kone wale vertex se ek diagonal kheench kar 2 triangles mein baanta ja sakta hai, aur triangles ka hisaab wahi rehta hai: n − 2 triangles, har ek 180°. (Aise hi kisi bhi concave polygon ko diagonals se triangles mein baanta ja sakta hai, par har baar ek hi vertex se kaam nahi chalta. Ye baat aage ki class mein detail se aati hai.)

**Dhyan do:** concave polygon regular nahi ho sakta, isliye "har ek angle barabar" wala formula sirf regular (convex) polygon ke liye hai.

---

## Aam galtiyan (bachke rehna)

**Galti 1: (n − 2) ki jagah n × 180° karna**

Pentagon ke liye:
- Galat: 5 × 180° = 900°.
- Sahi: (5 − 2) × 180° = 3 × 180° = **540°**.

Triangles ki ginti n nahi, n − 2 hai.

**Galti 2: Regular polygon mein n se divide karna bhool jana**

Regular hexagon ka har angle:
- Galat: (6 − 2) × 180° = 720° ko "har ek angle" bata dena. Ek angle 720° kaise ho sakta hai?
- Sahi: 720° ÷ 6 = **120°**.

**Galti 3: Angle sum aur har ek angle ko mila dena**

"Angle sum" saare angles ka jod hai. "Har ek angle" sirf regular polygon ke ek kone ka maap hai. Octagon: angle sum **1080°**, par regular octagon ka har angle **135°**.

**Galti 4: (n − 2) × 360° likhna**

Pentagon ke liye:
- Galat: (5 − 2) × 360° = 1080°.
- Sahi: (5 − 2) × **180°** = 540°.

Triangle ka angle sum 180° hai, 360° nahi. Isliye "triangle ka jod" yaad rakho, 180°.

---

## Quick Recap

- Ek vertex se diagonals kheench kar n sides wale convex polygon ko **(n − 2) triangles** mein baanta ja sakta hai.
- Interior angles ka jod = **(n − 2) × 180°**.
- Angle sum: triangle 180°, quadrilateral 360°, pentagon 540°, hexagon 720°, heptagon 900°, octagon 1080°, nonagon 1260°, decagon 1440°.
- Regular n-gon ka har interior angle = **(n − 2) × 180° ÷ n**: 60°, 90°, 108°, 120°, 135°, 144° (n = 3, 4, 5, 6, 8, 10).
- Missing angle: angle sum − diye hue angles ka jod.
- Sides dhoondhna: (n − 2) × 180 = diya hua sum, ya regular ke liye (n − 2) × 180 = angle × n.
- Concave polygon par bhi formula chalta hai; reflex angle 180° se bada hota hai.
- Galtiyan: n × 180° likhna, n se divide karna bhoolna, sum aur har ek angle ko mila dena, 360° ka istemaal.

---

## Practice Questions

1. Using a diagram, show how a heptagon can be split into triangles from one vertex. How many triangles do you get, and what is the sum of its interior angles?

2. Find the sum of the interior angles of a polygon with 12 sides.

3. Find each interior angle of a regular nonagon (9 sides).

4. Five angles of a hexagon are 130°, 110°, 120°, 140° and 100°. Find the sixth angle.

5. The angles of a pentagon are x, x + 10°, x + 20°, x + 30° and x + 40°. Find x and write all five angles.

6. The interior angles of a polygon add up to 2340°. How many sides does it have?

7. Each interior angle of a regular polygon is 165°. Find the number of sides. Solve it using (n − 2) × 180 = 165n.

8. A concave quadrilateral has three angles of 25°, 35° and 45°. Find its fourth (reflex) angle.

9. Taru says, "The angle sum of a hexagon is 6 × 180° = 1080°." Find his mistake and give the correct sum.

10. State True or False:
    (a) The interior angles of any pentagon add up to 540°.
    (b) A regular polygon can have an interior angle of 180°.
    (c) The interior angle sum of a decagon is 1440°.
    (d) The formula (n − 2) × 180° works for concave polygons too.

### Answers

1. Heptagon ke 7 vertices hain. Ek vertex se 7 − 3 = 4 diagonals bante hain, jisse **5 triangles** milte hain (7 − 2 = 5).
   Angle sum = 5 × 180° = **900°**.

2. n = 12: (12 − 2) × 180° = 10 × 180° = **1800°**.

3. n = 9: angle sum = 7 × 180° = 1260°. Har angle = 1260° ÷ 9 = **140°**.
   Jaanch: 140 × 9 = 1260 ✅

4. Hexagon ka angle sum 720°. Diye hue pancho angles ka jod = 130 + 110 + 120 + 140 + 100 = 600°. Chhatha angle = 720° − 600° = **120°**.
   Jaanch: 600 + 120 = 720 ✅

5. Pentagon ka angle sum = 540°.
   x + (x + 10) + (x + 20) + (x + 30) + (x + 40) = 5x + 100 = 540, to 5x = 440, **x = 88°**.
   Angles: **88°, 98°, 108°, 118°, 128°**.
   Jaanch: 88 + 98 + 108 + 118 + 128 = 540 ✅

6. (n − 2) × 180 = 2340, to n − 2 = 2340 ÷ 180 = 13, **n = 15**.
   Jaanch: 13 × 180 = 2340 ✅

7. (n − 2) × 180 = 165n, to 180n − 360 = 165n, 15n = 360, **n = 24**.
   Jaanch: 22 × 180 ÷ 24 = 3960 ÷ 24 = 165° ✅

8. Quadrilateral ka angle sum 360°. Teen angles ka jod = 25 + 35 + 45 = 105°. Reflex angle = 360° − 105° = **255°**.
   Jaanch: 255° > 180° ✅, aur 105 + 255 = 360 ✅

9. Taru ne n × 180° kiya, jabki (n − 2) × 180° karna chahiye. Sahi: (6 − 2) × 180° = 4 × 180° = **720°**.
   Jaanch: hexagon ek vertex se 4 triangles mein banta hai, 4 × 180 = 720 ✅

10. (a) **True** ✅. Har pentagon (3 triangles) ka angle sum (5 − 2) × 180° = 540° hota hai.
    (b) **False** ❌. 180° par to sidhi line ban jati hai, polygon ka kona nahi. Regular polygon mein angle hamesha 180° se chhota hota hai.
    (c) **True** ✅. (10 − 2) × 180° = 1440°.
    (d) **True** ✅. Concave polygon ka reflex angle bhi ginti mein aata hai.

---

Gulshan ne table ka top bana kar customer ko diya, aur Taru ne apni copy mein likh liya: "Kone nikalne hon to polygon ko triangles mein baanto." Jab bhi koi polygon mile, (n − 2) × 180° yaad kar lena.

**Aage kya?** Ab tak humne polygon ke **andar** ke angles dekhe. Topic 3 mein ek aur tareeka dekhenge: andar ki jagah **bahar** ke angles dekhna, aur wahan ek bahut hi chaukane wali baat milegi.
