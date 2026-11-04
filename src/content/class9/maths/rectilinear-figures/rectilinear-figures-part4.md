# Chapter: Rectilinear Figures (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [rectilinear-figures-part3.md](rectilinear-figures-part3.md) se aage chalti hai.** (Chapter ki shuruaat [rectilinear-figures.md](rectilinear-figures.md) se hoti hai. Circle ka recap [circles.md](../circles/circles.md) mein aur square/rhombus ka [quadrilaterals.md](../quadrilaterals/quadrilaterals.md) mein hai.)
> **Topics covered in this file:**
> 4. Regular Polygons, Tiling aur Mix Sawaal

---

# Topic 4: Regular Polygons, Tiling aur Mix Sawaal

Pichle topic mein humne polygon ke bahar ke kone, yaani exterior angles dekhe: unka sum hamesha 360° hota hai, aur regular n-gon ka har exterior angle 360° ÷ n hota hai. Tushar aur Aisha ka robot regular pentagon ke har corner par 72° muda tha, aur kul mudna 5 × 72° = 360° aaya tha. Usse hum ye bhi nikalna seekh gaye ki polygon ki kitni sides hain. Pehle topics mein vocabulary, diagonals aur interior angle sum (Gulshan ki hexagon table ka 120° wala kona) bhi aaye the.

Ab saare tools hamare paas hain. Is topic mein hum inhe ek asli jagah par lagayenge: **farsh par tiles**. Phir regular polygon ke centre se bante triangles dekhenge, aur aakhir mein mix sawaal hal karenge jahan alag alag formulas ek saath kaam aate hain. Ye chapter ka aakhri topic hai, to end mein poore chapter ka wrap-up bhi hoga.

---

## Tile ki dukaan mein Haribhai ka sawaal

Haribhai apne naye ghar ke liye farsh ki tiles dekhne ek dukaan par gaye. Dukaan ki malkin Mrs. D'Souza ne unhe sample dikhaye: square tiles, triangle tiles aur hexagon tiles.

Haribhai ne sample ghoomte ghoomte poocha, "Madam, ek baat batao. Bazaar mein square milti hain, triangle milti hain, hexagon bhi milti hain. Par regular pentagon, yaani paanch barabar sides wali tile, kabhi nahi dikhti. Wo to kitni sundar lagegi!"

Mrs. D'Souza muskuraiin. Unhone peeche se pentagon ke teen sample nikale aur farsh par ek kone par saath rakhe. "Haribhai, khud dekh lo."

Teen pentagons ke beech ek patli si **khaali jagah** reh gayi. Unhone chautha pentagon rakhne ki koshish ki to wo **upar chadh gaya**: tile ek doosri par chadh rahi thi.

"Na gap chahiye, na chadhna. Pentagon dono mein se ek galti zaroor karta hai," unhone kaha.

Haribhai ne poocha, "Par kyun, madam?" Iska jawab angles mein chhupa hai. Dekhte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Tiling (tessellation)** | Ek hi tarah ki ya alag alag tiles se plane ko bina gap aur bina overlap ke dhakna | Farsh par square tiles |
| **Vertex (kona-bindu)** | Wo point jahan kai tiles ke kone milte hain | Farsh par jahan 4 square tiles milti hain |
| **Gap** | Tiles ke beech bachi khaali jagah (angles ka sum 360° se kam) | 3 pentagons: 324°, 36° ka gap |
| **Overlap** | Tiles ka ek doosri par chadh jana (angles ka sum 360° se zyada) | 4 pentagons: 432° |
| **Central angle** | Regular polygon ke centre par ek side ke dono sire jo angle banate hain | Regular hexagon ka central angle 60° |
| **Circumcircle** | Wo circle jo polygon ke saare corners se guzarta hai | Hexagon ke corners par ghoomta circle |
| **Circumradius** | Us circle ki radius, yaani centre se kisi bhi corner tak ki doori | Hexagon mein side ke barabar |

---

## Part A: Regular polygons ka quick recap

Regular polygon mein saari sides barabar aur saare angles barabar hote hain. Pehle topics ke formulas yaad karo (derive nahi kar rahe):

- Interior angle sum = (n − 2) × 180°, to har interior angle = (n − 2) × 180° ÷ n
- Har exterior angle = 360° ÷ n
- Ek hi corner par interior + exterior = 180°

Ye table ek baar bana lo, aage bahut kaam aayegi:

| n (sides) | Naam | Har exterior angle (360° ÷ n) | Har interior angle (180° − exterior) |
|---|---|---|---|
| 3 | Triangle | 120° | 60° |
| 4 | Square | 90° | 90° |
| 5 | Pentagon | 72° | 108° |
| 6 | Hexagon | 60° | 120° |
| 7 | Heptagon | 51.43° (360/7) | 128.57° (900/7) |
| 8 | Octagon | 45° | 135° |
| 9 | Nonagon | 40° | 140° |
| 10 | Decagon | 36° | 144° |
| 12 | Dodecagon | 30° | 150° |

Jaanch (interior angle sum formula se): pentagon ke liye (5 − 2) × 180 ÷ 5 = 540 ÷ 5 = 108° ✅. Octagon ke liye 6 × 180 ÷ 8 = 1080 ÷ 8 = 135° ✅. Dodecagon ke liye 10 × 180 ÷ 12 = 1800 ÷ 12 = 150° ✅. Heptagon ke liye 5 × 180 ÷ 7 = 900 ÷ 7 ≈ 128.57° ✅.

Ek baat dhyan dene wali: n jitna bada hota hai, interior angle 180° ke utna paas aata hai (polygon circle jaisa lagne lagta hai), aur exterior angle chhota hota jaata hai.

---

## Part B: Farsh par tiling

### Kya chahiye ek achhi tiling ke liye?

Farsh par jahan kai tiles ke kone milte hain (vertex), wahan sab tiles ke angles milkar poora ghoom jaana chahiye. Poora ghoomna matlab **exactly 360°**:
- 360° se **kam** to beech mein **gap** reh jaata hai.
- 360° se **zyada** to tiles **overlap** karti hain.

Isliye: **vertex par sab angles ka sum = 360°.**

### Akele regular polygon se tiling

Agar sab tiles ek hi regular polygon ki hain, to har vertex par k tiles milein to k × (interior angle) = 360° hona chahiye, yaani **360° ÷ (interior angle) ek poori sankhya (whole number) ho.**

**Triangle:** interior 60°. 360 ÷ 60 = 6, to 6 triangles ek vertex par. 60 × 6 = 360° ✅. Tiles lagti hain.

**Square:** interior 90°. 360 ÷ 90 = 4, to 4 squares. 90 × 4 = 360° ✅. Tiles lagti hain.

**Hexagon:** interior 120°. 360 ÷ 120 = 3, to 3 hexagons. 120 × 3 = 360° ✅. Tiles lagti hain. (Isi se Haribhai ko dukaan mein hexagon tiles dikhi thi.)

**Pentagon:** interior 108°. 360 ÷ 108 = 3.33..., poori sankhya nahi.
- 3 pentagons: 108 × 3 = 324°. 360 − 324 = **36° ka gap**.
- 4 pentagons: 108 × 4 = 432°. 432 − 360 = **72° ka overlap**.

Mrs. D'Souza ke sample mein yahi hua tha: teen pentagons ke beech 36° ka gap, aur chautha rakha to 72° chadh gaya. Beech ka koi sankhya kaam nahi karti, kyunki tiles poori ginti mein hi lagti hain (3.33 tiles nahi hoti).

**Octagon:** interior 135°. 360 ÷ 135 = 2.67. 2 octagons: 270° (90° gap). 3 octagons: 405° (45° overlap). Akele nahi lagta.

**Heptagon:** interior 128.57°. 2 heptagons: 257.14° (gap), 3 heptagons: 385.71° (overlap). Akele nahi lagta.

**Nonagon, decagon, dodecagon:** interior 140°, 144°, 150°. In sab mein 2 tiles se 360° se kam aata hai (280°, 288°, 300°) aur 3 tiles se zyada (420°, 432°, 450°). Akele nahi lagte.

### Rule

**Ek regular n-gon akele tab hi tiling karta hai jab 360° ÷ (interior angle) ek poori sankhya ho.**

Interior angle 180° se chhota hota hai, to ek vertex par kam se kam 3 tiles chahiye. Aur n ≥ 7 ke liye interior angle 120° se bada hai, to 3 tiles se bhi 360° se zyada ho jaata hai, jabki 2 tiles se kam. Beech ki koi poori sankhya hi nahi, isliye 7 ya usse zyada sides wala regular polygon akela kabhi nahi lagta. Akele sirf **triangle, square aur hexagon** lagte hain.

### Alag alag polygons ko milakar tiling

Ab kai dukaanon par aisi tiles bhi milti hain jo do alag shapes ko milakar lagti hain. Vertex par fir bhi sum 360° hona chahiye.

**1. Regular octagon + square**
Ek vertex par 2 octagons aur 1 square: 135 + 135 + 90 = **360°** ✅. Bathroom ke farsh mein ye pattern bahut dikhta hai: bade octagons aur beech mein chhote square.

**2. Triangle + hexagon**
Ek vertex par 2 triangles aur 2 hexagons: 60 + 60 + 120 + 120 = **360°** ✅.
Doosra tareeka: 4 triangles aur 1 hexagon: 60 × 4 + 120 = 240 + 120 = **360°** ✅.

**3. Square + triangle**
Ek vertex par 2 squares aur 3 triangles: 90 + 90 + 60 + 60 + 60 = 180 + 180 = **360°** ✅.

(Dhyan rakho ki har combination ke saath ye bhi zaroori hai ki sides ki lambai barabar ho, taaki tiles ke kinare milein. Hum yahan angles dekh rahe hain.)

### Haribhai ke sawaal ka poora jawab

Haribhai ne poocha tha ki regular pentagon kyun nahi milta. Jawab: **pentagon ka interior angle 108° hai, jo 360° ko poora baant nahi karta.** 3 pentagons se 324° (36° ka gap), 4 pentagons se 432° (72° ka overlap). Na gap chhodna hai, na chadhna hai, to akele pentagon ki tiling hoti hi nahi. Isliye dukaan mein sirf wahi shapes milte hain jo angle ke hisaab se saaf baith jaate hain: triangle (60°), square (90°) aur hexagon (120°).

Haribhai ne sir hilaya, "Matlab shape sundar hona kaafi nahi, uske angles ko 360° mein baithna padta hai." Mrs. D'Souza hans padiin, "Bilkul. Bina maths ke tile bhi nahi lagti!"

### Fun fact: madhumakkhi aur hexagon

Madhumakkhi ka chhatta (honeycomb) hexagons ka bana hota hai. Ek ruchikar baat: triangle, square aur hexagon, jo tiling karte hain, unmein se barabar area ke liye hexagon mein **boundary (wall) sabse kam** lagti hai. Yaani kam mom mein zyada jagah. (Ye ek fun fact hai, iska proof hum yahan nahi kar rahe.)

---

## Part C: Central angle aur regular hexagon

### Central angle

Regular polygon ke centre se saare corners ko jodo. Polygon **n barabar isosceles triangles** mein kat jaata hai (do sides centre se corner tak ki barabar, kyunki centre sab corners se barabar doori par hai). Centre par saare n angle milkar poora ghoomte hain (360°), aur ye sab barabar hain, to

**Central angle = 360° ÷ n**

Ye regular polygon ke **exterior angle ke barabar** hi hota hai.

Ye teen angles alag cheezein hain, inhe mat milana:
- **Central angle** = 360° ÷ n (centre par)
- **Exterior angle** = 360° ÷ n (corner par, bahar)
- **Interior angle** = 180° − 360° ÷ n (corner par, andar)

Central aur exterior ki value barabar hai, par wo alag jagah ke angle hain.

### Isosceles triangle ke angles

Regular pentagon ke liye: central angle 360 ÷ 5 = 72°. Is isosceles triangle ke baaki do angle barabar hain: (180 − 72) ÷ 2 = 54° har ek. Ye dono 54° mil kar corner par interior angle banate hain: 54 + 54 = **108°** ✅. Yaani **interior angle = 2 × (isosceles triangle ka base angle)**.

### Regular hexagon: sabse khaas

Regular hexagon mein n = 6, to central angle = 360 ÷ 6 = **60°**. Triangle ke baaki do angle: (180 − 60) ÷ 2 = 60° har ek. Teeno angle 60° hain, to har triangle **equilateral** hai. Isliye centre se corner tak ki doori (circumradius) = side ke barabar.

**Regular hexagon mein side = circumradius.**

Isi wajah se hexagon ko circle mein banana aasaan hai (circle ki radius se hi side kaat do, [circles.md](../circles/circles.md) mein circle ke baare mein dekha tha). Circle par ek hi radius ke 6 step lagao to wapas shuruaat par pahunch jaate ho.

### Hexagon ke diagonals

Pichle topics ka diagonal count: n(n − 3) ÷ 2 = 6 × 3 ÷ 2 = **9 diagonals**. Regular hexagon ABCDEF (side a) mein ye do tarah ke hote hain:

- **Long diagonals (3):** AD, BE, CF. Ye centre se guzarte hain, to har ek = radius + radius = 2 × a. **Long diagonal = 2a.**
- **Short diagonals (6):** AC, BD, CE, DF, EA, FB. (Iski length nikalne ke liye Pythagoras chahiye; ye hissa thoda aage ka hai, extra samajh ke liye.) Triangle ABC mein AB = BC = a aur angle B = 120°. B se AC par perpendicular BM girao. Ye angle B ko 60° + 60° mein baantta hai aur AC ko barabar baantta hai. Right triangle ABM mein AB = a aur angle ABM = 60°, to BM = a ÷ 2 (triangle ABM ke angles 60°, 90°, 30° hain, yaani ye ek equilateral triangle ka aadha hai, isliye BM = AB ka aadha). Pythagoras se AM² = a² − a²/4 = 3a²/4, to AM = (√3 ÷ 2) × a. AC = 2 × AM = **a√3**.

Ginti check: 3 + 6 = 9 ✅.

Example: a = 6 cm. Long diagonal = 12 cm. Short diagonal = 6√3 ≈ 6 × 1.732 = 10.39 cm. Jaanch: BM = 3 aur AM² = 36 − 9 = 27, AM = √27 = 3√3, AC = 6√3 ✅.

---

## Part D: Mix sawaal

### Sawaal 1: Diagonals se angle sum

Ek polygon ke 77 diagonals hain. Uske interior angles ka sum batao.

n(n − 3) ÷ 2 = 77, to n(n − 3) = 154. n = 14 lene par 14 × 11 = 154 ✅. To polygon 14-gon hai.

Angle sum = (14 − 2) × 180 = 12 × 180 = **2160°**

Jaanch: 14 × 11 ÷ 2 = 77 ✅ aur 12 × 180 = 2160 ✅.

### Sawaal 2: Ratio mein interior angles

Ek irregular pentagon ke interior angles ka ratio 2 : 3 : 4 : 5 : 6 hai. Har angle batao.

Pentagon ka angle sum = (5 − 2) × 180 = 540°. Ratio ke parts = 2 + 3 + 4 + 5 + 6 = 20. Ek part = 540 ÷ 20 = 27°.

Angles: 2 × 27 = 54°, 3 × 27 = 81°, 4 × 27 = 108°, 5 × 27 = 135°, 6 × 27 = 162°.

Jaanch: 54 + 81 + 108 + 135 + 162 = 540° ✅.

### Sawaal 3: Interior exterior se 100° zyada

Ek regular polygon ka interior angle uske exterior angle se 100° zyada hai. Sides kitni hain?

Maan lo exterior = e. To interior = e + 100. Dono milkar 180°: e + (e + 100) = 180, 2e = 80, e = 40°.

n = 360 ÷ 40 = **9 sides** (nonagon). Interior = 140°.

Jaanch: 140 − 40 = 100 ✅ aur 140 + 40 = 180 ✅.

(Agar "100° zyada" ki jagah "20° zyada" hota to e = 80°, n = 4.5 aata, jo possible nahi. Hamesha dekho ki n poori sankhya aaye.)

### Sawaal 4: Exterior angle 18°, diagonals?

Ek regular polygon ka har exterior angle 18° hai. Uske diagonals kitne hain?

n = 360 ÷ 18 = 20. Diagonals = 20 × (20 − 3) ÷ 2 = 20 × 17 ÷ 2 = 340 ÷ 2 = **170**.

Jaanch: 20 × 18 = 360 ✅, aur 20 × 17 = 340, aadha 170 ✅.

### Sawaal 5: Central angle diya hai

Ek regular polygon ka central angle 6° hai. Uska interior angle sum aur har interior angle batao.

n = 360 ÷ 6 = 60. Angle sum = (60 − 2) × 180 = 58 × 180 = **10440°**. Har interior angle = 10440 ÷ 60 = **174°**.

Jaanch: 180 − 6 = 174 ✅ (central = exterior = 6°).

### Sawaal 6: Ek vertex par teen alag polygons

Ek vertex par ek regular hexagon, ek square aur ek aur regular polygon milte hain aur koi gap nahi hai. Teesra polygon kaun sa hai?

Hexagon 120° + square 90° = 210°. Baaki 360 − 210 = 150°. Interior angle 150° ka matlab exterior 30°, to n = 360 ÷ 30 = **12**. Teesra polygon **regular dodecagon** hai.

Jaanch: 120 + 90 + 150 = 360 ✅.

### Sawaal 7: Diagonals se n, phir tiling

Ek regular polygon ke 20 diagonals hain. Kya wo akele tiling kar sakta hai? Aur kisi doosre polygon ke saath?

n(n − 3) = 40. n = 8 lene par 8 × 5 = 40 ✅, to octagon. Interior angle = 135°. 360 ÷ 135 = 2.67, poori sankhya nahi, to **akele nahi lagta**. Par square ke saath lagta hai: 135 + 135 + 90 = 360° ✅.

### Sawaal 8: Hexagon ki side aur circle

Ek regular hexagon ek circle ke andar bana hai, jiski radius 7 cm hai. Hexagon ka perimeter aur long diagonal batao.

Hexagon mein side = circumradius = 7 cm. Perimeter = 6 × 7 = **42 cm**. Long diagonal = 2 × 7 = **14 cm** (circle ka diameter hi hai).

Jaanch: central angle 60° aur dono sides 7, to triangle equilateral hai, to teesri side bhi 7 ✅.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Har regular polygon tiling kar leta hai, aisa maan lena**
Pentagon regular hai, par 3 × 108 = 324° (gap) aur 4 × 108 = 432° (overlap). "Regular" hona kaafi nahi, 360° exact chahiye. Akele sirf triangle, square, hexagon.

**Galti 2: Central, interior aur exterior angle ko milana**
Regular hexagon mein central 60°, exterior 60°, interior 120°. Central aur exterior ki value barabar hai, par interior alag hai. Interior ke liye 360 ÷ n nahi, 180 − 360 ÷ n lena hai.

**Galti 3: 360° ko galat jodna**
Octagon + octagon + square = 135 + 135 + 90 = 360 ✅. Par agar koi teen octagons aur ek square le le to 135 × 3 + 90 = 495°, jo 360° se bahut zyada hai (overlap). Har vertex par ek ek tile ka angle jodkar check karo ki sum exactly 360° aaye.

**Galti 4: Ek hi tile ko do baar ginna**
Triangle + hexagon wale vertex par 2 triangles aur 2 hexagons hain: 60 + 60 + 120 + 120 = 360°. Agar koi shared tile ko dobara jod de ya ek vertex par dikhne wali tiles ki jagah poore farsh ki tiles gin le, to sum galat aayega. Sirf wahi tiles gino jo us ek vertex par milti hain, har ek ko ek hi baar.

**Galti 5: Hexagon ki long aur short diagonal ko barabar maan lena**
Side 6 cm ho to long diagonal 12 cm hai aur short diagonal 6√3 ≈ 10.39 cm. Dono alag hain.

---

## Quick Recap

- Regular polygon: har exterior angle 360° ÷ n, har interior angle 180° − 360° ÷ n.
- **Tiling:** ek vertex par sab angles ka sum exactly 360° hona chahiye. Kam to gap, zyada to overlap.
- Akele regular polygon sirf **triangle (60° × 6), square (90° × 4) aur hexagon (120° × 3)** se tiling karte hain.
- Rule: regular n-gon akele tab lagta hai jab 360° ÷ (interior angle) poori sankhya ho.
- Pentagon (108°), octagon (135°) aur baaki akele nahi lagte. Combinations lagte hain, jaise octagon + square (135 + 135 + 90), triangle + hexagon (60 + 60 + 120 + 120), square + triangle (90 + 90 + 60 + 60 + 60).
- **Central angle** = 360° ÷ n. Regular polygon centre se n barabar isosceles triangles mein katta hai.
- Regular hexagon mein side = circumradius. Long diagonal = 2 × side, short diagonal = side × √3, kul 9 diagonals.
- Mix sawaal mein pehle n nikalo (diagonals, exterior angle ya central angle se), phir baaki formula lagao.

---

## Practice Questions

1. Find the central angle, the exterior angle and the interior angle of a regular polygon with 90 sides.

2. Can a regular polygon with 45 sides tile the floor by itself? Show your calculation.

3. Regular octagons and squares of the same side length are used together to tile a floor. How many octagons and how many squares meet at each vertex? Verify that the angles add up to 360°.

4. Three regular pentagons are placed around a point so that they share the vertex and touch each other. What is the angle of the gap that is left?

5. A polygon has 119 diagonals. Find the sum of its interior angles.

6. The angles of a quadrilateral are in the ratio 4 : 5 : 6 : 9. Find each angle.

7. A regular hexagon has side 8 cm. Find its perimeter, its long diagonal and its short diagonal (leave the short diagonal in terms of √3).

8. Say whether each statement is true or false, giving a reason.
   (a) A regular pentagon can tile a floor by itself.
   (b) In a regular hexagon, the distance from the centre to a corner equals the side.
   (c) In every regular polygon, the central angle equals the exterior angle.

9. Each interior angle of a regular polygon is 7 times its exterior angle. Find the number of sides and the number of diagonals.

10. Explain with numbers why regular heptagons cannot tile a floor by themselves.

### Answers

1. n = 90. Central angle = 360 ÷ 90 = **4°**. Exterior angle = 360 ÷ 90 = **4°**. Interior angle = 180 − 4 = **176°**.
   Jaanch: (90 − 2) × 180 ÷ 90 = 88 × 2 = 176° ✅

2. n = 45, exterior = 360 ÷ 45 = 8°, interior = 180 − 8 = 172°. 360 ÷ 172 ≈ 2.09, jo poori sankhya nahi hai. 2 tiles se 344° (16° ka gap), 3 tiles se 516° (overlap). To **nahi**, akele tiling nahi hoti.

3. Octagon ka interior 135° aur square ka 90°. 135 + 135 + 90 = 360, to ek vertex par **2 octagons aur 1 square** milte hain.
   Jaanch: 135 × 2 = 270, 270 + 90 = **360°** ✅

4. Pentagon ka interior 108°. 3 pentagons = 3 × 108 = 324°. Gap = 360 − 324 = **36°**.
   Jaanch: 324 + 36 = 360 ✅

5. n(n − 3) ÷ 2 = 119, to n(n − 3) = 238. n = 17 lene par 17 × 14 = 238 ✅. Angle sum = (17 − 2) × 180 = 15 × 180 = **2700°**.
   Jaanch: 17 × 14 ÷ 2 = 119 ✅

6. Parts = 4 + 5 + 6 + 9 = 24. Quadrilateral ka angle sum 360°, to ek part = 360 ÷ 24 = 15°. Angles: **60°, 75°, 90°, 135°**.
   Jaanch: 60 + 75 + 90 + 135 = 360 ✅

7. Side a = 8 cm. Perimeter = 6 × 8 = **48 cm**. Long diagonal = 2 × 8 = **16 cm**. Short diagonal = 8√3 cm (lagbhag 8 × 1.732 = 13.86 cm).
   Jaanch: half-triangle mein BM = 4, AM² = 64 − 16 = 48, AM = 4√3, AC = 8√3 ✅

8. (a) **False** ❌. Pentagon ka interior 108° hai aur 360 ÷ 108 = 3.33, poori sankhya nahi.
   (b) **True** ✅. Centre se corners jodne par equilateral triangles bante hain, to radius = side.
   (c) **True** ✅. Dono 360° ÷ n hote hain (alag jagah ke angle hain, par value barabar).

9. Maan lo exterior = e, to interior = 7e. e + 7e = 180, 8e = 180, e = 22.5°. n = 360 ÷ 22.5 = **16 sides**. Diagonals = 16 × 13 ÷ 2 = **104**.
   Jaanch: interior = 180 − 22.5 = 157.5 = 7 × 22.5 ✅, aur 16 × 22.5 = 360 ✅

10. Heptagon ka interior 900 ÷ 7 ≈ 128.57°. 2 heptagons: ≈ 257.14° (360 se kam, 102.86° ka gap). 3 heptagons: ≈ 385.71° (360 se zyada, 25.71° ka overlap). Beech ki koi poori sankhya 360 nahi deti, to **akele tiling nahi hoti**.

---

Ab aap jaante ho ki farsh ki tiles ke peeche bhi angle ka hisaab chhupa hai. Regular polygon ka har kona aur har triangle ab aapke control mein hai. Aap ye kar sakte ho!

---

# Chapter Wrap-up: Rectilinear Figures

| Topic | Kya seekha | Sabse kaam ki baat |
|---|---|---|
| 1. Polygon ki bhasha | Polygon ke naam, regular aur irregular, convex aur concave, diagonals ginna | Diagonals ki ginti n(n − 3) ÷ 2 se nikalti hai |
| 2. Interior angles | Polygon ko triangles mein baantkar angle sum nikalna, regular polygon ka har interior angle | Angle sum = (n − 2) × 180°, ye sirf n par depend karta hai |
| 3. Exterior angles | Bahar ke kone, unka sum, regular n-gon ka har exterior angle, sides ki sankhya nikalna | Convex polygon ke exterior angles ka sum hamesha 360°; regular n-gon ka har exterior angle = 360° ÷ n |
| 4. Regular polygons, tiling aur mix sawaal | Regular polygons ki table, farsh par tiling, central angle, hexagon ke diagonals, mile jule sawaal | Tiling ke liye vertex par angles ka sum exactly 360°; akele sirf triangle, square, hexagon |

### All polygon formulas

| Kya | Formula |
|---|---|
| Diagonals ki sankhya | n(n − 3) ÷ 2 |
| Interior angles ka sum | (n − 2) × 180° |
| Regular polygon ka har interior angle | (n − 2) × 180° ÷ n, ya 180° − 360° ÷ n |
| Regular polygon ka har exterior angle | 360° ÷ n |
| Exterior angles ka sum (kisi bhi convex polygon ka) | 360° |
| Central angle (regular polygon) | 360° ÷ n |
| Interior + exterior (ek corner par) | 180° |
| Tiling ki shart (akele regular n-gon) | 360° ÷ (interior angle) poori sankhya ho; ya vertex par angles ka sum 360° |
| Regular hexagon (side a) | Circumradius = a, long diagonal = 2a, short diagonal = a√3 |

---

Polygon ka naam, uske angles, uski diagonals aur uski tiling: ab ye saari baatein aapke haath mein hain, kisi bhi bahu-bhujaon wali aakriti ko dekhkar uska hisaab laga sakte ho.
