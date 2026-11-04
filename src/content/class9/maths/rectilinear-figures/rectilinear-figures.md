# Chapter: Rectilinear Figures

> **Class:** 9 | **Subject:** Mathematics
> **Pehle ki taiyari:** [Quadrilaterals](../quadrilaterals/quadrilaterals.md) (4 bhuja wali figures aur unke types) aur [Lines and Angles](../lines-and-angles/lines-and-angles.md) (line segment, angle).
> **Topics covered in this file:**
> 1. Polygon kya hai

---

# Topic 1: Polygon kya hai

Quadrilaterals chapter mein humne 4 sides wali figures dekhi thi: square, rectangle, rhombus, parallelogram, trapezium. Har ek mein 4 line segments aapas mein jud kar ek band figure banate the. Ab sawaal: agar sides 4 nahi, 5, 7 ya 20 hon, to? Is chapter mein hum **saari** aisi band, seedhi-seedhi figures ko ek saath samjhenge. Aur "kitne sides" ka naam kya hota hai, ye is pehle topic mein seekhenge.

---

## Haveli ka mosaic floor

Rajasthan ki ek purani haveli mein visitors ek bade kamre mein aaye. Poora farsh chhote-chhote rangeen tukdon se bana tha: kahin teen kone wale, kahin chaukor, aur beech mein ek chhe bhuja wala sitare jaisa pattern, uske baju mein ek aath bhuja wala pattern.

Guide Mr. Rathore ne ek chhoti bachchi Pari se kaha, "Beta, batao, in tukdon ke naam kya hain?"

Pari jhuki aur ungli se bolne lagi: "Ye teen kone wale triangle hain. Ye chaukor wale square hain. Ye wala..." Wo ungli rakh kar sides ginne lagi, "ek, do, teen, chaar, paanch, chhe. Chhe sides. Iska naam?"

"Hexagon," Mr. Rathore muskuraye. "Aur wo aath sides wala?"

Pari ne ginti ki: "...aath. Iska naam bhi hoga na?"

"Octagon."

Phir Pari ne farsh ke ek kone mein ek tukda dhoondha jisme usne gina, "ek, do, teen, chaar, paanch, chhe, saat. Saat sides! Mr. Rathore, iska kya naam hoga?"

Mr. Rathore hans pade. "Bahut achha sawaal. Naam hai **heptagon**. Dekho, in sabke naam sides ginne se hi bante hain. Aur ek mazedaar baat: in sab tukdon mein ek cheez common hai. Pata hai kya?"

Pari ne sochkar kaha, "Sab ke sides **seedhe** hain, aur sab **band** hain, koi khuli jagah nahi."

"Bilkul. Isi ko **polygon** kehte hain."

Chalo is topic mein dekhte hain ki polygon exactly kya hai, kaun sa polygon hai aur kaun sa nahi, aur sides ginne se kya-kya pata chal jata hai.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Polygon** | Sirf seedhe line segments se bani ek band figure | Triangle, square, hexagon |
| **Rectilinear** | "Rect" = seedha, "linear" = line wala. Sirf seedhi lines se bani | Polygon ko isi liye rectilinear figure bhi kehte hain |
| **Side (bhuja)** | Polygon ka ek line segment | Triangle ke 3 sides |
| **Vertex (shirsh)** | Jahan do sides milte hain (kone ka point) | Square ke 4 vertices |
| **Interior angle** | Polygon ke andar, kisi vertex par do sides ke beech ka angle | Square ka har interior angle 90° |
| **Diagonal** | Do vertices ko jodne wala segment, jo aas-paas ke (adjacent) vertices na hon | Square ke 2 diagonals |
| **Simple polygon** | Jiske sides aapas mein beech mein cross nahi karte | Triangle, hexagon |
| **Convex polygon** | Har interior angle 180° se chhota | Square, rectangle |
| **Concave polygon** | Kam se kam ek interior angle 180° se bada (reflex) | Arrowhead (teer ki nok) |
| **Regular polygon** | Saare sides barabar aur saare angles barabar | Square, equilateral triangle |
| **n-gon** | Jis polygon ke n sides hon | 12 sides wala = 12-gon |

---

## Part A: Polygon kya hai?

Polygon wo figure hai jo:
1. **sirf seedhe line segments** se bani ho (koi curve nahi), aur
2. **band** ho (shuru aur ant ek hi jagah mil jayein, koi khuli jagah nahi).

Isi liye chapter ka naam "Rectilinear Figures" hai: sirf seedhi lines se bani figures.

Polygon ka har side ek line segment hota hai. Do sides jahan milte hain, wo **vertex** hai. Ek polygon mein **sides aur vertices ki ginti hamesha barabar** hoti hai (triangle: 3 sides, 3 vertices; hexagon: 6 aur 6).

### Polygon hai ya nahi?

```
  Polygon hai                 Polygon nahi hai

   A-------B                    ___
   |       |                   /   \      <- circle: koi seedha
   |       |                   \___/         side hi nahi
   D-------C

     /\                   A--B
    /  \                       \          <- khula zigzag:
   /    \                      C--D          band nahi hai
  /______\

                              ______
  Pentagon                   |      \     <- ek side tedha
     /\                      |       )       (curve) hai
    /  \                     |______/
   /    \
   \    /
    \__/
```

Dhyan do: teesri non-example figure mein 3 sides seedhe hain, par ek side curve hai. Ek bhi curve aa gayi to polygon nahi.

**Jaanch (polygon test):** Do sawaal poochho. "Kya har side seedha hai?" aur "Kya figure poori band hai?" Dono mein "haan" hai to polygon hai.

- Circle: seedhe sides hi nahi. Polygon nahi ❌
- Khula zigzag: band nahi hai. Polygon nahi ❌
- Seedhe sides wali band figure (jaise triangle): Polygon hai ✅

---

## Part B: Sides ginke naam

Polygon ka naam uske sides ki ginti se banta hai.

| Sides | Naam | Roz ki zindagi ka example |
|---|---|---|
| 3 | Triangle (trikon) | Samose ka ek tukda, set-square |
| 4 | Quadrilateral | Carrom board ka khaka (square) |
| 5 | Pentagon | Bachchon wali ghar ki drawing (chaukor deewar + teekhi chhat), America ki mashhoor "Pentagon" building, bhindi ko beech se kaato to kata hua hissa (lagbhag) |
| 6 | Hexagon | Madhumakkhi ke chhatte ka ek khana, nut-bolt wala nut, kai pencils ka kata hua hissa |
| 7 | Heptagon | Rozmarra mein kam dikhta hai; Pari ka haveli wala tukda |
| 8 | Octagon | Laal STOP sign board |
| 9 | Nonagon | Delhi ke Lotus Temple ka khaka (upar se dekho to 9 bhuja) |
| 10 | Decagon | Rozmarra mein kam dikhta hai; tiles aur design patterns mein milta hai |

Jinke sides 10 se zyada hon, unhe naam se kam bulate hain. Hum bas **"n-gon"** kehte hain: 12 sides wala **12-gon**, 20 sides wala **20-gon**. Aur kisi bhi unknown ginti ko hum **n** likhte hain: "n sides wala polygon" = **n-gon**.

**Ek chhoti trick naam yaad rakhne ki:** Naam ka pehla hissa Greek ginti hai: tri = 3, quad = 4, penta = 5, hexa = 6, hepta = 7, octa = 8, nona = 9, deca = 10. Aur "gon" ka matlab hai "kone". Matlab pentagon = "paanch kone wala", octagon = "aath kone wala". Isi liye Pari ka 7 sides wala tukda heptagon hai.

Ek aur dilchasp baat: **n sides wale polygon mein n vertices aur n interior angles bhi hote hain.**

**Jaanch:** Octagon ke liye: sides 8, vertices 8, interior angles 8 ✅

---

## Part C: Simple aur simple nahi

Kuch figures band bhi hain aur seedhi lines se bhi bani hain, par unke sides **beech mein ek doosre ko kaat dete hain**. Jaise bow-tie (titli ki tarah):

```
 A--------B
  \      /
   \    /
    \  /
     \/        <- yahan do sides
     /\           aapas mein cross karte hain
    /  \
   /    \
  /      \
 D--------C
```

Is figure ko A se B, B se D, D se C aur C se A tak banaya gaya hai. Beech mein side BD aur side CA ek doosre ko cross karte hain. Ise **simple polygon** nahi maante.

> **Simple polygon:** wo polygon jiske sides sirf apne vertices par milte hain, beech mein kahin cross nahi karte.

**Is chapter mein jab bhi "polygon" kahenge, matlab "simple polygon".** Bow-tie jaisi figures hum nahi lenge.

---

## Part D: Convex aur Concave

Simple polygons do tarah ke hote hain.

**Convex polygon:** Har interior angle **180° se chhota** hota hai. Aur ek pehchaan: polygon ke andar ke koi bhi do points ko seedhi line se jodo, to wo line **poori ki poori andar hi rehti hai**.

**Concave polygon:** Kam se kam ek interior angle **180° se bada** hota hai (isse **reflex angle** kehte hain). Aisa polygon "andar ki taraf dhasa hua" dikhta hai.

```
  Convex (pentagon)              Concave (arrowhead)

       /\                              A
      /  \                            / \
     /    \                          /   \
    |      |                        /     \
    |______|                       /   C   \
                                  /  _/ \_  \
                                 B_/       \_D
```

Arrowhead mein vertex C par andar ka angle 180° se bada hai (reflex angle). Is wajah se ye polygon concave hai.

Pehchaan ka asaan tareeka: arrowhead ke andar B aur D ke paas ek-ek point lo aur unhe seedhi line se jodo. Wo line C wale dhase hue hisse se hokar **polygon ke bahar nikal jati hai**. Convex mein aisa kabhi nahi hota.

| Sawaal | Convex | Concave |
|---|---|---|
| Har interior angle? | 180° se chhota | Kam se kam ek 180° se bada |
| Andar ke do points ko jodne wali line? | Hamesha andar | Kabhi-kabhi bahar nikal jati hai |
| Example | Square, triangle, regular hexagon | Arrowhead, "L" aakar ki figure |

Triangle hamesha convex hota hai (uska koi angle 180° se bada nahi ho sakta, ye aage ke topics mein samajh aa jayega).

---

## Part E: Regular aur Irregular polygon

> **Regular polygon:** wo polygon jisme **saare sides barabar** hon **aur** saare interior angles bhi barabar hon.

Jo regular nahi, wo **irregular** hai.

Regular polygons ke examples: equilateral triangle, square, regular pentagon, regular hexagon (madhumakkhi ke chhatte ka khana), regular octagon (stop sign).

### Sirf sides barabar kaafi nahi

**Rhombus** ke saare 4 sides barabar hote hain. Par uske angles barabar nahi hote (do angles chhote, do bade, jaise 60° aur 120°). To rhombus **regular nahi** hai.

```
      ____
     /   /       <- Rhombus: sides barabar,
    /   /           par angles barabar nahi
   /___/
```

### Sirf angles barabar bhi kaafi nahi

**Rectangle** ke saare 4 angles 90° hote hain, par uske sides barabar nahi (lambai aur chaudai alag). To rectangle bhi **regular nahi** hai.

```
   ________
  |        |      <- Rectangle: angles barabar (90°),
  |________|         par sides barabar nahi
```

### To 4 sides wala regular polygon kaun sa hai?

Wahi jisme dono baatein ek saath hon: sides barabar **aur** angles barabar. Wo hai **square**. Triangle mein bhi dono ek saath hoti hain, jab wo equilateral ho.

**Jaanch:**

| Figure | Sides barabar? | Angles barabar? | Regular? |
|---|---|---|---|
| Square | Haan | Haan | Haan ✅ |
| Rhombus | Haan | Nahi | Nahi ❌ |
| Rectangle | Nahi | Haan | Nahi ❌ |

Regular polygons aage ke topics mein bahut kaam aayenge. Abhi ke liye sirf pehchaan yaad rakho.

---

## Part F: Diagonals ginna

**Diagonal** wo line segment hai jo polygon ke do **aise vertices** ko jodta hai jo aas-paas (adjacent) nahi hain. Aas-paas ke vertices ko jodne wala segment to polygon ka side hi hai, diagonal nahi.

### Pehle chhote polygons mein gino

**Quadrilateral** (n = 4): vertex A se B aur D ke saath side hai. Sirf C bacha, to A se **1 diagonal** (AC). Total 2 diagonals (AC aur BD).

**Pentagon** (n = 5): ek vertex A se, apne aur dono padosi vertices ko chhodkar baaki 2 vertices tak diagonal ban sakte hain. Total 5 diagonals.

### Formula kaise nikalta hai?

Ek n-gon lo, jisme n vertices hain.

**Step 1: Ek vertex se kitne diagonals?**
Ek vertex se wo **khud ko** nahi jod sakta (1 baar hata), aur apne **2 padosi** vertices se jodne par diagonal nahi, side banti hai (2 baar hata). To baaki bache **n − 3** vertices. Isliye:

> **Ek vertex se (n − 3) diagonals ban sakte hain.**

**Step 2: Saare vertices se milakar kitne?**
n vertices hain, har ek se (n − 3) diagonals: n × (n − 3). Par har diagonal **do baar** gina gaya: ek baar A ke taraf se (A–C), ek baar C ke taraf se (C–A). To aadhe karo:

> **Total diagonals = n(n − 3) ÷ 2**

### Formula ki jaanch

| Polygon | n | n − 3 | n(n − 3) | n(n − 3) ÷ 2 |
|---|---|---|---|---|
| Triangle | 3 | 0 | 0 | **0** |
| Quadrilateral | 4 | 1 | 4 | **2** |
| Pentagon | 5 | 2 | 10 | **5** |
| Hexagon | 6 | 3 | 18 | **9** |
| Heptagon | 7 | 4 | 28 | **14** |
| Octagon | 8 | 5 | 40 | **20** |
| Decagon | 10 | 7 | 70 | **35** |

Triangle mein koi diagonal nahi hoti (har vertex baaki sab ka padosi hai), aur formula bhi 0 deta hai ✅.

**Hexagon hath se gino (9 hona chahiye):** vertices A, B, C, D, E, F. Diagonals: AC, AD, AE, BD, BE, BF, CE, CF, DF. Ginti = 9 ✅ (formula se bhi 9).

---

## Part G: Solved examples

### Example 1: Naam batao

Ek polygon mein 9 vertices hain. Uska naam?
n = 9 sides, to **nonagon**. Check: 9 vertices matlab 9 sides ✅

### Example 2: Convex ya concave?

Ek pentagon ke interior angles 70°, 80°, 60°, 90°, 240° hain. Convex hai ya concave?
240° **180° se bada** hai, matlab ek reflex angle hai. To polygon **concave** hai.

### Example 3: 12-gon ke diagonals

n = 12.
- Ek vertex se: n − 3 = 12 − 3 = **9** diagonals
- Total: 12 × 9 ÷ 2 = 108 ÷ 2 = **54** diagonals

**Jaanch:** 12 × 9 = 108, aur 108 ÷ 2 = 54 ✅

### Example 4: Diagonals se sides ki ginti

Ek polygon mein total 27 diagonals hain. Uske kitne sides hain?

n(n − 3) ÷ 2 = 27, to n(n − 3) = 54. Aise do number dhoondho jinka gunaa 54 ho aur jinka farak 3 ho: 9 aur 6 (9 − 3 = 6).
Isliye n = **9**.

**Jaanch:** 9 × 6 ÷ 2 = 54 ÷ 2 = 27 ✅

### Example 5: Ek vertex se diagonals de diye

Ek polygon ke ek vertex se 7 diagonals nikalte hain. Uske kitne sides aur total kitne diagonals?

n − 3 = 7, to n = 10 (decagon).
Total diagonals = 10 × 7 ÷ 2 = 35.

**Jaanch:** Table mein decagon ke liye 35 tha ✅

### Example 6: Kya aisa polygon ho sakta hai?

Kya aisa polygon hai jiske exactly 10 diagonals hon?
n(n − 3) = 20. Try karo: n = 5 par 10, n = 6 par 18, n = 7 par 28. 20 kisi n par nahi aaya.
**Nahi**, aisa polygon nahi hota.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Padosi vertices ko jodna aur use diagonal ginna**
Pentagon ABCDE mein A se B ko jodne par jo line milti hai wo side AB hai, diagonal nahi. Diagonal sirf **aage ke** vertices (C aur D) se bante hain. Isliye ek vertex se n − 3, na ki n − 1.

**Galti 2: Aadha karna bhool jana**
Hexagon mein ek vertex se 3 diagonals, 6 vertices, to 6 × 3 = 18? Ye galat hai. Har diagonal do baar ginta gaya (AD aur DA). **2 se bhaag do:** 18 ÷ 2 = **9** ✅

**Galti 3: Bow-tie ko polygon kehna**
Bow-tie ke do sides beech mein cross karte hain. Ye simple polygon nahi hai, aur is chapter mein hum ise polygon nahi maante.

**Galti 4: Sochna ki regular ka matlab sirf barabar sides**
Rhombus ke saare sides barabar hain, par wo regular nahi hai kyunki uske angles barabar nahi. Regular matlab sides **aur** angles, dono barabar.

**Galti 5: Curve wali figure ko polygon mein ginna**
Agar ek bhi side tedha hai (curve), to figure polygon nahi hai.

---

## Quick Recap

- **Polygon** = sirf seedhe line segments se bani band figure. Isi liye "rectilinear" kehte hain.
- Sides, vertices aur interior angles ki ginti hamesha **barabar** hoti hai (n-gon mein n, n, n).
- Naam: 3 triangle, 4 quadrilateral, 5 pentagon, 6 hexagon, 7 heptagon, 8 octagon, 9 nonagon, 10 decagon, aur uske baad n-gon.
- **Simple polygon:** sides beech mein cross nahi karte. Bow-tie simple nahi hai. Hum sirf simple polygons lete hain.
- **Convex:** har interior angle 180° se chhota. **Concave:** kam se kam ek angle 180° se bada (reflex).
- **Regular:** saare sides barabar **aur** saare angles barabar. Rhombus (sirf sides) aur rectangle (sirf angles) regular nahi.
- **Diagonal:** do non-adjacent vertices ko jodne wala segment.
- Ek vertex se **(n − 3)** diagonals. Total = **n(n − 3) ÷ 2**.

---

## Practice Questions

1. Which of the following are polygons? Give a reason for each: (a) a triangle, (b) a circle, (c) a figure made of 5 straight segments that does not close, (d) a figure with 4 straight sides and one curved side.

2. Name the polygon with (a) 5 sides, (b) 8 sides, (c) 10 sides. What do we call a polygon with 15 sides?

3. Draw (or describe) a concave quadrilateral. How many reflex angles can a quadrilateral have at most? Explain with a sketch idea.

4. A student says: "A rhombus is a regular polygon because all its sides are equal." Is she right? Explain. Give a similar example for the "equal angles" case.

5. Find the number of diagonals of (a) a heptagon, (b) a 15-gon.

6. A polygon has 44 diagonals. How many sides does it have?

7. From one vertex of a polygon, 10 diagonals can be drawn. Find the number of sides and the total number of diagonals.

8. Is there a polygon with exactly 12 diagonals? Justify.

9. A student counts the diagonals of a hexagon as 6 × 3 = 18. Where is the mistake?

10. State True or False:
    (a) Every polygon has the same number of sides and vertices.
    (b) A bow-tie shaped figure is a simple polygon.
    (c) A triangle has no diagonals.
    (d) A rectangle is a regular polygon.

### Answers

1. (a) **Polygon hai**: 3 seedhe sides, band figure
   (b) **Polygon nahi**: koi seedha side hi nahi, sab curve hai
   (c) **Polygon nahi**: figure band nahi hai
   (d) **Polygon nahi**: ek side curve hai

2. (a) Pentagon (b) Octagon (c) Decagon. 15 sides wale ko **15-gon** kehte hain.

3. Arrowhead jaisa quadrilateral concave hota hai (Part D wali figure). Quadrilateral mein **sirf 1 reflex angle** ho sakta hai. (Iska poora reason hum angles ke jod ka idea seekhne ke baad samjhenge; abhi sketch banakar dekho ki do reflex angle banane ki koshish karte hi sides cross karne lagte hain.)

4. Nahi, wo galat hai. Rhombus ke sides barabar hain par angles barabar nahi (jaise 60° aur 120°), to wo regular nahi. Aise hi rectangle mein angles barabar (90°) hain par sides barabar nahi, to wo bhi regular nahi. Regular ke liye dono shartein chahiye.

5. (a) n = 7: 7 × 4 ÷ 2 = 28 ÷ 2 = **14**.
   (b) n = 15: 15 × 12 ÷ 2 = 180 ÷ 2 = **90**.
   Jaanch: 7 × 4 = 28 aur 28 ÷ 2 = 14 ✅; 15 × 12 = 180 aur 180 ÷ 2 = 90 ✅

6. n(n − 3) ÷ 2 = 44, to n(n − 3) = 88. n = 11 par 11 × 8 = 88 ✅. Sides = **11** (11-gon).

7. n − 3 = 10, to n = **13** (13-gon). Total diagonals = 13 × 10 ÷ 2 = 130 ÷ 2 = **65**.
   Jaanch: 13 × 10 = 130 aur 130 ÷ 2 = 65 ✅

8. n(n − 3) = 24. Try: n = 6 par 18, n = 7 par 28. 24 kisi par nahi aaya. **Nahi**, aisa polygon nahi hai.

9. Har diagonal 2 baar gina gaya (jaise AD aur DA). 18 ko **2 se bhaag** karna tha: 18 ÷ 2 = **9** diagonals.

10. (a) **True** ✅. n sides to n vertices.
    (b) **False** ❌. Uske do sides cross karte hain, to ye simple nahi hai.
    (c) **True** ✅. Triangle ka har vertex baaki do ka padosi hai. Formula bhi 3 × 0 ÷ 2 = 0 deta hai.
    (d) **False** ❌. Rectangle ke sides barabar nahi hote.

---

Pari ne Mr. Rathore se kaha, "Ab har tukde ko dekh kar main uska naam bata sakti hoon." Aap bhi ab polygon pehchaan sakte hain, naam de sakte hain, aur diagonals gin sakte hain. Bas ginte jao aur sawal poochhte jao.

**Aage kya?** Pari ab farsh ke tukdon ke andar ke kone dekh rahi hai. Topic 2 mein hum poochhenge: **polygon ke andar ke saare angles ka jod kitna hota hai?**
