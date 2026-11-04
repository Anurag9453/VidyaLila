# Chapter: Constructions (Part 6)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [constructions-part5.md](constructions-part5.md) se aage chalti hai.** (Chapter ki shuruaat [constructions.md](constructions.md) se hoti hai.)
> **Topics covered in this file:**
> 6. Quadrilateral Banana

---

# Topic 6: Quadrilateral Banana

Pichle topics mein humne seekha ki triangle kaafi "sakht" hota hai: teen sahi measurements (jaise SSS, SAS, ASA) mil jaayein to triangle ek hi ban sakta hai, aur do sides ka sum ya perimeter diya ho to bhi hum use bana lete the (jaise Mrs. Kulkarni ka 15 cm wala jhanda, jo equilateral nikla). Ab ek chaar-sides wali shape ki baari hai. Kya wahi 3 measurements kaafi honge? Nahi, aur aaj dekhenge ki kyun. Aur sabse achhi baat: har quadrilateral ko hum **triangles mein tod kar** banayenge, jo humein pehle se aata hai. Chapter ka aakhri topic hai, to end mein poore chapter ka wrap-up aur ek construction checklist bhi hoga.

---

## Ms. Joseph, Vinay aur diamond panel

Ms. Joseph school ke annual play ki stage backdrop designer hain. Is baar unhein ek bada **rhombus (diamond) wala panel** banana hai, aur ek **rectangle wala darwaza ka frame** bhi. Unka helper Vinay lakdi ki chaar patliyan (strips) le aaya, chaaron 5 cm ki (scale drawing mein), aur bola, "Madam, chaaron sides barabar hain, bas jod do. Diamond ban jaayega."

Ms. Joseph ne chaaron strips ke kone keel se jode. Jab Vinay ne frame ko thoda dhakela, to wo kabhi lamba patla diamond ban gaya, kabhi chauda sa. Madam ne hanskar kaha, "Dekha Vinay? Chaar sides ek hi kahani nahi sunaati. Frame **hil** jaata hai. Humein ek aur measurement chahiye: ek diagonal, ya ek angle."

Vinay ne kaha, "To triangle ko 3 chahiye, aur quadrilateral ko 5?" Madam ne kaha, "Bilkul. Chalo dekhte hain kyun."

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Quadrilateral** | 4 sides aur 4 angles wali band shape | Rhombus panel, door frame |
| **Diagonal** | Saamne ke do corners ko jodne wali line | Quadrilateral ABCD mein AC aur BD |
| **Independent measurement** | Aisi measurement jo baaki measurements se nikal nahi sakti | 4 sides aur 1 diagonal |
| **Rhombus** | Chaaron sides barabar wali shape | Vinay ka diamond |
| **Parallelogram** | Saamne ki sides parallel aur barabar | Do adjacent sides aur beech ka angle dekar banta hai |
| **Trapezium** | Ek jodi sides parallel wali shape | AB parallel DC |
| **Kite** | Pass-pass ki do jodi sides barabar | AB = AD aur CB = CD |
| **Reflect karna** | Ek line ke doosri taraf wahi point banana | Triangle ABC ka mirror image AC ke us paar |

---

## Part A: Quadrilateral ko kitni measurements chahiye?

Ek quadrilateral mein 4 sides aur 4 angles hote hain, yaani 8 cheezein. Par sab ki zaroorat nahi padti. **Banane ke liye 5 independent measurements chahiye**, jaise 4 sides aur 1 diagonal.

### Kyun 4 sides kaafi nahi?

Mensuration chapter ka [hinged frame](../mensuration/mensuration-part2.md) yaad karo, jo hinge par khulta band hota hai. Vinay ka frame bhi wahi hai: chaaron sides 5 cm hain, par kone ghoomte hi shape badal jaati hai. Triangle ke sides ko tum hila nahi sakte, kyunki triangle apne aap sakht hai. Isiliye:

- Diagonal AC daal do to quadrilateral **do triangles** ABC aur ACD mein toot jaata hai, aur dono triangles sakht hain (SSS).
- Yaani 4 sides + 1 diagonal = 5 measurements, aur shape fix.

Special shapes mein kuch measurements pehle se "free" mil jaati hain (jaise rhombus mein chaaron sides barabar), isliye unhein kam measurements mein bana lete hain. Ye hum aage dekhenge.

Diagonal daalne se banne wale triangles ka exist karna zaroori hai. Triangle inequality (kisi bhi do sides ka sum teesri se bada) har triangle par lagani hogi.

---

## Part B: General quadrilateral, 4 sides aur 1 diagonal

**Sawaal:** Quadrilateral ABCD banao jisme AB = 4 cm, BC = 5 cm, CD = 4.5 cm, DA = 3.5 cm aur diagonal AC = 6 cm.

**Pehle jaanch lo ki dono triangles ban sakte hain:**
- △ABC: sides 4, 5, 6. 4 + 5 = 9 > 6, 4 + 6 > 5, 5 + 6 > 4 ✅
- △ACD: sides 4.5, 3.5, 6. 4.5 + 3.5 = 8 > 6, 4.5 + 6 > 3.5, 3.5 + 6 > 4.5 ✅

**Steps:**

- **Kadam 1:** Ruler se line segment AC = 6 cm kheencho. Dono ends par A aur C likho.
- **Kadam 2:** Centre A, radius 4 cm lo, aur AC ke **upar** wali taraf ek arc lagao.
- **Kadam 3:** Centre C, radius 5 cm lo, aur upar wali taraf ek arc lagao jo Kadam 2 ke arc ko kaate. Kaatne wale point ko B naam do.
- **Kadam 4:** AB aur BC jodo. Ye △ABC hai (SSS).
- **Kadam 5:** Centre A, radius 3.5 cm, AC ke **neeche** wali taraf (doosri taraf) ek arc lagao.
- **Kadam 6:** Centre C, radius 4.5 cm, neeche wali taraf arc lagao jo Kadam 5 ke arc ko kaate. Kaatne wale point ko D naam do.
- **Kadam 7:** AD aur CD jodo. ABCD tayyar hai.

> **Figure 6.1** – Quadrilateral ABCD with diagonal AC = 6 cm, B above AC (AB = 4, BC = 5) and D below AC (AD = 3.5, CD = 4.5); the diagonal BD is dashed.

**Kyun kaam karta hai?** Diagonal AC dono triangles ki **common side** hai. Do SSS triangles ek hi side par jud jaate hain, to poori shape fix ho jaati hai. Quadrilateral ki baaki baatein (angles ka sum 360°, diagonals ke role) [quadrilaterals.md](../quadrilaterals/quadrilaterals.md) mein hain.

**Jaanch:** Coordinates se: A = (0, 0), C = (6, 0), to B ≈ (2.25, 3.31) aur D ≈ (2.33, −2.61). Isliye diagonal BD ≈ **5.92 cm**. Apni drawing mein BD naapo, 5.9 cm ke aas paas aana chahiye ✅. Ye bhi dekho ki ∠ABC ≈ 82.8° aur ∠ADC ≈ 96.4° protractor se milte hain ✅.

---

## Part C: Parallelogram, 2 adjacent sides aur beech ka angle

**Sawaal:** Parallelogram ABCD banao jisme AB = 5 cm, AD = 3 cm aur ∠A = 60°.

**Steps:**

- **Kadam 1:** Ruler se AB = 5 cm kheencho.
- **Kadam 2:** Protractor ka centre A par rakho, 0° AB par. 60° ka nishan lagao aur A se us nishan se ek lambi ray kheencho.
- **Kadam 3:** Centre A, radius 3 cm, us ray ko kaato. Kaatne wale point ko D likho. (AD = 3 cm.)
- **Kadam 4:** Centre D, radius 5 cm, B ki taraf ek arc lagao. (Saamne ki side DC = AB.)
- **Kadam 5:** Centre B, radius 3 cm, ek arc lagao jo Kadam 4 ke arc ko AB ke upar kaate. (Saamne ki side BC = AD.) Kaatne wala point C hai.
- **Kadam 6:** DC aur BC jodo. ABCD parallelogram hai.

> **Figure 6.2** – Parallelogram ABCD with AB = 5 cm, AD = 3 cm, ∠DAB = 60°; C is found by arcs of radius 5 cm from D and 3 cm from B; diagonal AC is dashed.

**Kyun kaam karta hai?** Parallelogram mein saamne ki sides barabar hoti hain (DC = AB aur BC = AD). Hum ulta use kar rahe hain: do arcs se C aisi jagah par aata hai jahan dono saamne ki sides barabar ho jaati hain, aur aisa chaar-side shape parallelogram hota hai. Ye property [quadrilaterals.md](../quadrilaterals/quadrilaterals.md) mein samjhayi gayi hai.

**Jaanch:** Coordinates: A = (0, 0), B = (5, 0), D = (1.5, 2.598), to C = (6.5, 2.598). Diagonal AC² = 6.5² + 2.598² = 42.25 + 6.75 = 49, to **AC = 7 cm**. Naapo, AC = 7 cm ✅. Doosra diagonal BD = √19 ≈ **4.36 cm** ✅. Ye bhi dekho ki ∠B = 120°, kyunki ∠A + ∠B = 180°.

---

## Part D: Rhombus

### Tareeka 1: Ek side aur ek diagonal se

**Sawaal:** Rhombus ABCD banao jisme side 4 cm aur diagonal AC = 6 cm.

Rhombus ki chaaron sides barabar hoti hain, to △ABC mein AB = BC = 4 cm aur AC = 6 cm. Triangle check: 4 + 4 = 8 > 6 ✅.

**Steps:**

- **Kadam 1:** AC = 6 cm kheencho.
- **Kadam 2:** Centre A, radius 4 cm, AC ke **upar** ek arc lagao.
- **Kadam 3:** Centre C, radius 4 cm, upar ek arc lagao jo pehle arc ko kaate. Kaatne wala point B hai.
- **Kadam 4:** Wahi radius 4 cm rakhte hue, centre A lekar AC ke **neeche** arc lagao, aur centre C lekar neeche arc lagao. Kaatne wala point D hai. (D, B ka AC mein mirror image hai.)
- **Kadam 5:** AB, BC, CD, DA jodo. ABCD rhombus hai.

> **Figure 6.3** – Rhombus ABCD with every side 4 cm and diagonal AC = 6 cm, B above AC and D below it (the mirror image of B in AC); diagonal BD is dashed and meets AC at O.

**Kyun kaam karta hai?** Rhombus ki diagonals ek doosre ko **sahi 90° par aur barabar do hisson mein** kaat-ti hain, aur har diagonal rhombus ko do barabar triangles mein baantti hai. Isliye B ka mirror image D hota hai. Ye properties [quadrilaterals.md](../quadrilaterals/quadrilaterals.md) mein hain.

**Jaanch:** O = AC ka midpoint, to AO = 3 cm. △ABO mein Pythagoras: BO = √(4² − 3²) = √7, to **BD = 2√7 ≈ 5.29 cm**. Naapo BD ≈ 5.3 cm ✅, aur BD ⊥ AC (protractor se 90°) ✅. Angle ∠ABC ≈ 97.2° aur ∠BAD ≈ 82.8° aana chahiye.

### Tareeka 2: Do diagonals se (perpendicular bisector tareeka)

**Sawaal:** Rhombus ABCD banao jisme diagonals AC = 8 cm aur BD = 6 cm.

**Steps:**

- **Kadam 1:** AC = 8 cm kheencho.
- **Kadam 2:** Centre A, radius 5 cm (AC ke aadhe se zyada), AC ke upar aur neeche arc lagao.
- **Kadam 3:** Centre C, wahi radius 5 cm, upar aur neeche arc lagao jo pehle arcs ko X (upar) aur Y (neeche) par kaate.
- **Kadam 4:** X aur Y jodo. Ye AC ka perpendicular bisector hai (Topic 1). Ye AC ko O par kaat-ta hai, aur AO = OC = 4 cm.
- **Kadam 5:** Centre O, radius 3 cm, line XY par upar aur neeche kaato. Upar wala point B, neeche wala point D hai. (OB = OD = 3 cm, to BD = 6 cm.)
- **Kadam 6:** AB, BC, CD, DA jodo. ABCD rhombus hai.

> **Figure 6.4** – Rhombus ABCD with diagonals AC = 8 cm (horizontal) and BD = 6 cm (vertical) crossing at O, where OA = OC = 4 cm and OB = OD = 3 cm.

**Kyun kaam karta hai?** Rhombus ki diagonals ek doosre ko 90° par bisect karti hain, aur hum perpendicular bisector se bilkul yahi bana rahe hain. Rhombus ki ye property [quadrilaterals.md](../quadrilaterals/quadrilaterals.md) mein hai.

**Jaanch:** Right triangle AOB mein OA = 4, OB = 3. [Pythagoras](../pythagoras-theorem/pythagoras-theorem.md) se AB = √(4² + 3²) = √25 = **5 cm**. Chaaron sides naapo, sab 5 cm honi chahiye ✅. (Ye 3-4-5 triple hai.)

---

## Part E: Rectangle, length aur breadth se

**Sawaal:** Rectangle ABCD banao jisme AB = 5 cm aur BC = AD = 3 cm.

**Steps:**

- **Kadam 1:** AB = 5 cm kheencho.
- **Kadam 2:** A par 90° banao (Topic 3). Centre A, radius 2 cm, AB ko P par kaato aur AB ko peeche badhakar Q par kaato. Phir P aur Q ko centre lekar radius 3 cm se A ke upar ek hi jagah milne wale arcs lagao, jo R par milein. Line AR kheencho; ∠BAR = 90° hai.
- **Kadam 3:** Centre A, radius 3 cm, ray AR ko kaato. Kaatne wala point D hai.
- **Kadam 4:** Centre D, radius 5 cm, B ki taraf arc lagao.
- **Kadam 5:** Centre B, radius 3 cm, arc lagao jo pehle arc ko AB ke upar kaate. Kaatne wala point C hai.
- **Kadam 6:** DC aur BC jodo. ABCD rectangle hai.

> **Figure 6.5** – Rectangle ABCD with AB = DC = 5 cm and AD = BC = 3 cm, right angle at A; diagonal AC is dashed.

**Kyun kaam karta hai?** Rectangle ek aisa parallelogram hai jisme ek angle 90° hota hai (to baaki teeno bhi 90° ho jaate hain). Humne parallelogram wali arc trick lagayi aur 90° A par pehle hi bana diya. Ye [quadrilaterals.md](../quadrilaterals/quadrilaterals.md) wali baat hai.

**Jaanch:** Diagonal AC = √(5² + 3²) = √34 ≈ **5.83 cm**. Naapo AC aur BD, dono 5.83 cm ke aas paas aur barabar aane chahiye ✅. Chaaron angles protractor se 90° ✅.

---

## Part F: Square, ek side se

**Sawaal:** Square ABCD banao jisme side 4 cm.

**Steps:**

- **Kadam 1:** AB = 4 cm kheencho.
- **Kadam 2:** A par 90° banao: centre A, radius 2 cm, AB par P aur peeche ki taraf Q kaato. P aur Q ko centre lekar radius 3 cm se arcs lagao jo R par milein. Ray AR kheencho.
- **Kadam 3:** Centre A, radius 4 cm, ray AR ko D par kaato.
- **Kadam 4:** Centre B, radius 4 cm, ek arc lagao. Centre D, radius 4 cm, ek arc lagao jo pehle ko C par kaate.
- **Kadam 5:** BC aur DC jodo. ABCD square hai.

> **Figure 6.6** – Square ABCD with every side 4 cm and ∠A = 90°; both diagonals AC and BD are dashed and cross each other at 90°.

**Kyun kaam karta hai?** Square matlab chaaron sides barabar aur chaaron angles 90°. Humne 90° banaya aur chaaron sides 4 cm rakhi, to ye wahi shape hai. [quadrilaterals.md](../quadrilaterals/quadrilaterals.md) mein square ko rectangle aur rhombus, dono ka special roop dikhaya gaya hai.

**Jaanch:** Diagonal AC = √(4² + 4²) = √32 = 4√2 ≈ **5.66 cm**. Dono diagonals naapo, 5.66 cm ✅, aur dono ek doosre ko 90° par kaat-ti hain ✅.

---

## Part G: Trapezium

**Sawaal:** Trapezium ABCD banao jisme AB ∥ DC, AB = 6 cm, DC = 3 cm, AD = 2.5 cm, BC = 3 cm.

**Trick (leg ko khiskana):** C se AD ke parallel ek line kheencho jo AB ko E par kaate. Tab AECD parallelogram ban jaata hai (AE ∥ DC aur EC ∥ AD), to AE = DC = 3 cm aur EC = AD = 2.5 cm. Isliye EB = AB − AE = 6 − 3 = 3 cm. Ab △EBC ke teeno sides pata hain: EB = 3, BC = 3, CE = 2.5.

**Pehle jaanch:** △EBC mein 3 + 3 = 6 > 2.5, 3 + 2.5 = 5.5 > 3 ✅. Triangle exist karta hai.

**Steps:**

- **Kadam 1:** AB = 6 cm kheencho.
- **Kadam 2:** AB par A se 3 cm naapo aur E likho. (AE = 3 cm, EB = 3 cm.)
- **Kadam 3:** Centre B, radius 3 cm, AB ke upar arc lagao.
- **Kadam 4:** Centre E, radius 2.5 cm, upar arc lagao jo pehle ko C par kaate. △EBC (SSS) ban gaya.
- **Kadam 5:** Centre C, radius 3 cm (DC = 3), AB ke A wali taraf arc lagao.
- **Kadam 6:** Centre A, radius 2.5 cm (AD = 2.5), arc lagao jo Kadam 5 ke arc ko kaate. Kaatne wala point D hai (wo jo AB ke upar, C ke baayein aur C ki hi oonchai par ho).
- **Kadam 7:** AD aur DC jodo. E ko mita do ya halka rakho. ABCD trapezium hai.

> **Figure 6.7** – Trapezium ABCD with AB = 6 cm parallel to DC = 3 cm, legs AD = 2.5 cm and BC = 3 cm; E is the point on AB with AE = 3 cm, and EC (dashed) is parallel to AD.

**Kyun kaam karta hai?** Leg AD ko C tak "khiska" kar EC bana diya. Isse trapezium ek parallelogram AECD aur ek triangle EBC mein toot gaya. Parallelogram ki saamne ki sides barabar hoti hain, [quadrilaterals.md](../quadrilaterals/quadrilaterals.md) mein dekha tha.

**Jaanch (coordinates se):** A = (0, 0), B = (6, 0), E = (3, 0). C = (4.042, 2.273) aur D = (1.042, 2.273). Check: AD = √(1.042² + 2.273²) = 2.5 ✅, DC = 3 ✅, BC = 3 ✅. Height = **2.27 cm**, ∠A = ∠CEB ≈ 65.4° aur ∠B ≈ 49.2°. Naapo: DC ∥ AB (D aur C ki AB se doori dono 2.27 cm) ✅. Area = (6 + 3)/2 × 2.27 ≈ 10.23 cm².

---

## Part H: Kite

**Sawaal:** Kite ABCD banao jisme AB = AD = 3 cm, CB = CD = 5 cm aur BD = 4 cm.

**Pehle jaanch:** △ABD: 3, 3, 4 ke liye 3 + 3 = 6 > 4 ✅. △CBD: 5, 5, 4 ke liye 5 + 5 = 10 > 4 ✅.

**Steps:**

- **Kadam 1:** BD = 4 cm kheencho.
- **Kadam 2:** Centre B, radius 3 cm, BD ke **upar** arc lagao. Centre D, radius 3 cm, upar arc lagao jo pehle ko A par kaate.
- **Kadam 3:** Centre B, radius 5 cm, BD ke **neeche** arc lagao. Centre D, radius 5 cm, neeche arc lagao jo pehle ko C par kaate.
- **Kadam 4:** AB, AD, CB, CD jodo. ABCD kite hai.

> **Figure 6.8** – Kite ABCD with AB = AD = 3 cm and CB = CD = 5 cm, base diagonal BD = 4 cm horizontal, A above BD and C below it; diagonal AC (dashed) is perpendicular to BD.

**Kyun kaam karta hai?** A aur C dono B aur D se barabar doori par hain, to dono point BD ke perpendicular bisector par hain. Isliye AC ⊥ BD, jo kite ki khaas property hai ([quadrilaterals.md](../quadrilaterals/quadrilaterals.md)).

**Jaanch:** BD ke midpoint se A tak √(3² − 2²) = √5 ≈ 2.24 aur C tak √(5² − 2²) = √21 ≈ 4.58. To **AC = √5 + √21 ≈ 6.82 cm** ✅, aur AC aur BD ke beech 90° ✅.

---

## Story solved: Ms. Joseph ka panel aur darwaza

Ms. Joseph ne scale chuna: **1 cm drawing = 25 cm asli**. Phir Vinay ko kaam diya.

**Diamond panel (rhombus):** diagonals 6 cm aur 8 cm. Wo Part D ka Tareeka 2 hai (Figure 6.4): AC = 8, perpendicular bisector, OB = OD = 3 cm. Side = 5 cm.

**Darwaza frame (rectangle):** 5 cm × 3 cm. Wo Part E hai (Figure 6.5).

| Cheez | Drawing mein | Asli size (× 25) |
|---|---|---|
| Panel ki lambi diagonal | 8 cm | 200 cm |
| Panel ki chhoti diagonal | 6 cm | 150 cm |
| Panel ki har side | 5 cm | 125 cm |
| Darwaze ki lambai | 5 cm | 125 cm |
| Darwaze ki chauda | 3 cm | 75 cm |
| Darwaze ka diagonal | √34 ≈ 5.83 cm | ≈ 145.8 cm |

Vinay ne ek diagonal ka naap bhi liya: "Madam, ye frame tabhi sahi rectangle hai jab dono diagonals 145.8 cm aayein." Ms. Joseph ne kaha, "Shabaash. Ab frame hilega nahi." Panel ke liye unhone chaaron strips 125 cm ki kaati aur beech mein ek patli patti 200 cm ki lagayi, taaki frame sakht rahe.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Sirf chaar sides kheench kar shape fix samajhna**
Chaar 5 cm ki strips diamond bhi bana sakti hain aur lamba patla parallelogram bhi (hinged frame). Hamesha ek diagonal ya angle chahiye.

**Galti 2: Doosra triangle pehle wali taraf hi bana dena**
Part B mein D ko B wali taraf (AC ke upar) bana diya, to dono triangles ek doosre ke upar chadh jaate hain aur chaar-side shape bani hi nahi. D ko hamesha **AC ke doosri taraf** banao.

**Galti 3: Rhombus mein poori diagonal se side nikalna**
Diagonals 6 aur 8 se side nikalne ke liye **aadhi** diagonals (3 aur 4) lo, kyunki right triangle AOB ki sides aadhi diagonals hain. √(6² + 8²) = 10 galat hai; sahi √(3² + 4²) = **5** hai. Aur jo diagonal tumne base banaya, usi par dono triangles khade karo.

**Galti 4: Angles check na karna**
Parallelogram mein ∠A = 60° aur ∠B = 120° milna chahiye, rectangle mein chaaron 90°. Bina naape drawing chhod dene se galti pata nahi chalti.

**Galti 5: Triangle inequality bhool jaana**
Agar AC = 9 cm ho aur AB = 4, BC = 5, to 4 + 5 = 9 triangle nahi, sirf seedhi line banti hai. Pehle check karo.

---

## Quick Recap

- Quadrilateral ko **5 independent measurements** chahiye (jaise 4 sides aur 1 diagonal). 4 sides kaafi nahi, frame hil jaata hai.
- Har quadrilateral ko diagonal se **triangles mein todo** aur har triangle SSS/SAS se banao.
- General quadrilateral: AC par B ek taraf, D doosri taraf.
- Parallelogram: do sides aur beech ka angle, phir do arcs se C.
- Rhombus: side + diagonal (SSS aur reflect), ya do diagonals (perpendicular bisector). Side = √((d₁/2)² + (d₂/2)²).
- Rectangle: perpendicular aur arcs, diagonal = √(l² + b²). Square: diagonal = side × √2.
- Trapezium: leg ko khiska kar triangle EBC banao, EB = AB − DC.
- Kite: BD ke dono taraf SSS triangles.

---

## Practice Questions

1. Why are four sides alone not enough to fix the shape of a quadrilateral? Give an example with a rhombus of side 5 cm.

2. Construct quadrilateral PQRS with PQ = 3 cm, QR = 4 cm, RS = 5 cm, SP = 4 cm and diagonal PR = 5 cm. First check that both triangles exist.

3. Construct a parallelogram with adjacent sides 4 cm and 3 cm and the angle between them 90°. What shape do you get? What is its diagonal?

4. Construct a rhombus with diagonals 6 cm and 4.5 cm and find its side by Pythagoras. Then find the area of the rhombus using the diagonals.

5. Construct a rectangle 6 cm by 4 cm. Find the length of each diagonal to two decimal places.

6. Construct a square of side 5 cm. Find its diagonal to two decimal places.

7. Construct a trapezium ABCD with AB ∥ DC, AB = 7 cm, DC = 4 cm, AD = 3 cm and BC = 3.5 cm. Which triangle do you build first? What are its sides? Does it exist?

8. Construct a kite with AB = AD = 4 cm, CB = CD = 6 cm and BD = 5 cm. Find the length of AC.

9. Say whether each statement is true or false, giving a reason.
   (a) A quadrilateral can always be built from its four sides alone.
   (b) A quadrilateral with all four sides 5 cm and one diagonal 5 cm is a rhombus made of two equilateral triangles.
   (c) A quadrilateral cannot be built with sides 2, 2, 2, 2 cm and diagonal 5 cm.

10. In the story, Ms. Joseph's scale is 1 cm = 25 cm. If the panel's longer diagonal were 3 m, what would it be in the drawing?

### Answers

1. Chaar sides ke baad bhi frame ke kone ghoom sakte hain. Side 5 cm wala rhombus ek hi baar mein diamond ya patla lamba shape ban sakta hai (alag angles). Ek diagonal dene se frame do triangles mein toot kar sakht ho jaata hai.

2. △PQR: 3, 4, 5, aur 3 + 4 = 7 > 5 ✅. △PRS: 5, 5, 4, aur 5 + 4 = 9 > 5 ✅. PR = 5 cm kheencho. Q ke liye P par 3 cm aur R par 4 cm ke arcs ek taraf, S ke liye P par 4 cm aur R par 5 cm ke arcs doosri taraf. Jodo.
   Jaanch: △PQR ka ∠Q = 90° (3-4-5) protractor se ✅.

3. Ye **rectangle** banega 4 cm × 3 cm, kyunki angle 90° hai. Diagonal = √(16 + 9) = **5 cm** ✅.

4. Aadhi diagonals 3 cm aur 2.25 cm. Side = √(3² + 2.25²) = √(9 + 5.0625) = √14.0625 = **3.75 cm**. Area = (1/2) × 6 × 4.5 = **13.5 cm²**.
   Jaanch: 4 right triangles, har ek ka area (1/2) × 3 × 2.25 = 3.375, aur 4 × 3.375 = **13.5** ✅. Aur 3.75² = 14.0625 ✅.

5. Diagonal = √(36 + 16) = √52 ≈ **7.21 cm**.
   Jaanch: 7.21² = 51.98 ≈ 52 ✅.

6. Diagonal = 5√2 = √50 ≈ **7.07 cm**.
   Jaanch: 7.07² ≈ 49.98 ≈ 50 ✅.

7. E ko AB par A se 4 cm par rakho, to EB = 7 − 4 = 3 cm. Triangle EBC ke sides EB = 3, BC = 3.5, CE = AD = 3. Check: 3 + 3 = 6 > 3.5, 3 + 3.5 > 3 ✅, to exist karta hai. Pehle △EBC banao, phir D ke liye C par 4 cm aur A par 3 cm ke arcs lagao.

8. BD ke midpoint se A tak √(4² − 2.5²) = √9.75 ≈ 3.12 aur C tak √(6² − 2.5²) = √29.75 ≈ 5.45. **AC = √9.75 + √29.75 ≈ 8.58 cm**.
   Jaanch: triangles 4, 4, 5 aur 6, 6, 5 dono exist karte hain (4 + 4 > 5, 6 + 6 > 5) ✅.

9. (a) **False** ❌. Frame hil jaata hai, ek diagonal ya angle chahiye.
   (b) **True** ✅. Diagonal 5 cm hone par dono triangles 5, 5, 5 (equilateral) hain, to chaaron sides barabar aur ye rhombus hai.
   (c) **True** ✅. △2, 2, 5 mein 2 + 2 = 4 < 5, to triangle exist nahi karta.

10. 3 m = 300 cm, aur 300 ÷ 25 = **12 cm** drawing mein.
    Jaanch: 12 × 25 = 300 ✅.

---

Ab aap kisi bhi quadrilateral ko sirf compass, ruler aur protractor se, triangles mein tod kar bana sakte ho. Aap ye kar sakte ho!

---

# Chapter Wrap-up: Constructions

| Topic | Kya seekha | Sabse kaam ki baat |
|---|---|---|
| 1. Geometry box, segments, perpendicular bisector | Compass aur ruler ka sahi use, line segment banana aur copy karna, perpendicular bisector, segment ko 2 ya 4 barabar hisson mein baantna | Arcs ka radius segment ke aadhe se zyada aur dono taraf ek hi; bisector par har point dono ends se barabar hai |
| 2. Angle constructions | Angle banana, copy karna aur bisect karna; 60°, 30°, 90°, 45°, 15°, 75°, 105°, 135°, 150°, 22½° jaise angle | 60° compass se seedha milta hai; bisect karke aur angles nikalte hain |
| 3. Perpendiculars aur parallels | Line par aur line ke bahar ke point se perpendicular, parallel line, do parallel lines ke beech ki doori | Perpendicular aur parallel dono arcs se bante hain |
| 4. Triangles (SSS, SAS, ASA, AAS, RHS) | In sab data se triangle banana, equilateral aur isosceles bhi | Teen sahi measurements (sahi combination) se triangle fix ho jaata hai; pehle do chhoti sides ka jod check karo; SSA fix nahi karta |
| 5. Triangles (sides ka sum, difference, perimeter) | Base, ek base angle aur do sides ka sum ya difference; perimeter aur do base angles | Extra point D (ya segment PQ) lo aur perpendicular bisector se barabar lambaiyan (AD = AC, YX = YP) pao; sum > base, difference < base |
| 6. Quadrilaterals | 4 sides + 1 diagonal, parallelogram, rhombus, rectangle, square, trapezium, kite | 5 measurements chahiye; quadrilateral ko triangles mein todo |

### Construction checklist (given data se method)

| Given data | Method |
|---|---|
| Line segment ki lambai | Ruler se kheencho, ya compass se copy karo |
| Segment ko aadha karna | Dono ends se barabar radius ke arcs, perpendicular bisector |
| Angle ki degree | Protractor, ya compass se 60°, phir bisect/add |
| Angle ko aadha karna | Angle bisector (arcs se) |
| Point se perpendicular | Compass se barabar arcs, phir perpendicular bisector |
| Line ke parallel | Corresponding angle ki copy, ya rhombus method (ek hi radius ke arcs) |
| Do parallel lines ke beech doori d | l ke do points par d lambe perpendiculars, unke sire jodo |
| Triangle: SSS | Base, do arcs |
| Triangle: SAS | Do sides aur beech ka angle |
| Triangle: ASA ya AAS | Ek side aur do angles (teesra angle 180° se nikalo) |
| Triangle: RHS | Right angle banao, leg aur hypotenuse |
| Triangle: sum ya difference of sides | Ray BX par BD = jod ya antar (antar mein AB < AC ho to ulti ray par), phir DC ka perpendicular bisector A deta hai |
| Triangle: perimeter aur do base angles | PQ = perimeter, P aur Q par aadhe angles, phir XP aur XQ ke perpendicular bisectors se Y aur Z |
| Quadrilateral: 4 sides + 1 diagonal | Diagonal ke dono taraf SSS triangles |
| Parallelogram: 2 sides + angle | Angle banao, do arcs se 4th vertex |
| Rhombus: side + diagonal | SSS triangle, phir reflect |
| Rhombus: 2 diagonals | AC kheencho, perpendicular bisector, aadhi doosri diagonal |
| Rectangle ya square | 90° banao, phir do arcs |
| Trapezium | Leg ko khiskao, triangle EBC banao |
| Kite | Common diagonal ke dono taraf SSS triangles |

---

Segment se lekar quadrilateral tak, har shape ab aapke compass aur ruler ke haath mein hai.
