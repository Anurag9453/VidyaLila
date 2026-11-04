# Chapter: Quadrilaterals (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [quadrilaterals-part2.md](quadrilaterals-part2.md) se aage chalti hai.** (Topic 1 [quadrilaterals.md](quadrilaterals.md) mein hai.) Congruent triangles ke liye [Congruence of Triangles](../congruence-of-triangles/congruence-of-triangles.md) chapter dekho.
> **Topics covered in this file:**
> 3. Areas of Parallelograms and Triangles, and Euclidean Area Axioms

---

# Topic 3: Areas of Parallelograms and Triangles, aur Euclidean Area Axioms

Topic 1 mein humne quadrilaterals ke types dekhe aur parallelogram ki properties prove kin. Jaise opposite sides barabar aur parallel hoti hain, diagonals ek doosre ko bisect karti hain, aur ek **diagonal parallelogram ko do congruent triangles mein baant deti hai** ("Diagonal se do congruent triangles" theorem). Topic 2 mein mid-point theorem se sides aur lambaiyon ke rishte dekhe: Bhola kaka ke triangle wale khet mein midpoints ke beech ki baadh sadak ke parallel aur uski aadhi (20 m) nikli thi.

Ab tak hum **lambai aur angles** ki baat kar rahe the. Is topic mein hum ek nayi cheez naapenge: **area**, yaani shape ke andar kitni jagah hai. Aur Topic 1 wali baat, "diagonal do congruent triangles banati hai", yahan bahut kaam aayegi.

---

## Do bhaiyon ke khet ki kahani

Bhola kaka ke khet mein sawaal tha "baadh kitni lambi?". Is baar ek alag gaon ke alag khet hain, aur sawaal hai "zameen kitni?".

Ramu aur Shamu do bhai hain. Dadaji ne unhe gaon ki do **parallel kachchi sadkon** ke beech zameen di.

- **Ramu** ka khet ek seedha **rectangle** hai: neeche 20 m lamba, aur ek sadak se doosri sadak tak 10 m.
- **Shamu** ka khet **tircha (slanted)** hai, ek parallelogram. Neeche ki lambai wahi 20 m, aur ye bhi unhi do sadkon ke beech hai. Par iski tirchi side 14 m lambi dikhti hai.

Shamu khush hokar bola: "Mera khet bada hai! Meri side 14 m ki hai, Ramu ki sirf 10 m."

Dadaji muskuraye. Unhone Shamu ke khet ke ek kone se ek **triangle ke aakar ka tukda** kaata (kaagaz par), use utha kar doosre kone par chipka diya. Aur dekho, Shamu ka khet bhi **20 m × 10 m ka rectangle** ban gaya!

```
  Shamu ka khet (parallelogram)          Tukda shift karne ke baad

      ______________                     ______________
     /|            /                    |              |
    / |           /         ---->       |              |
   /  |          /                      |              |
  /___|_________/                       |______________|
   tukda                                   rectangle, 20 x 10
```

"Dekho beta," Dadaji bole, "**tirchi side lambi hone se zameen nahi badhti.** Dono khet ek hi neev (base) par hain aur ek hi do sadkon ke beech hain, isliye dono ka area barabar hai: 200 vargmetre."

Is topic mein hum isi baat ko theek se samjhenge aur prove karenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Area** | Shape ke andar ghiri hui jagah kitni hai | Ramu ke khet ka area 200 m² |
| **Square unit** | Area naapne ki ikai: 1 unit × 1 unit ka chhota square | cm², m² |
| **ar(ABCD)** | "Area of ABCD" likhne ka chhota tarika | ar(ΔABC) = 12 cm² |
| **Euclidean area axioms** | Area ke baare mein kuch buniyadi niyam jo hum maan kar chalte hain | Congruent figures ka area barabar |
| **Base** | Shape ki wo side jise hum neeche maan kar chalte hain | Khet ki 20 m wali side |
| **Height (altitude)** | Base se saamne wali side ya vertex tak ki **perpendicular** doori | Do sadkon ke beech 10 m |
| **Same base, same parallels** | Do figures jinki base ek hi ho, aur saamne wale vertices ek hi parallel line par hon | Ramu aur Shamu ke khet |
| **‖gm** | "Parallelogram" likhne ka chhota tarika | ‖gm ABCD |

---

## Part A: Area kya hai

Kisi shape ka **area** matlab uske andar ka **ghira hua hissa (region)** kitna bada hai.

Isse naapne ke liye hum chhote chhote **1 × 1 ke squares** se shape ko bharte hain, aur ginte hain ki kitne lage.

```
  +---+---+---+---+
  |   |   |   |   |
  +---+---+---+---+
  |   |   |   |   |
  +---+---+---+---+
  |   |   |   |   |
  +---+---+---+---+
```

Ye rectangle 4 unit lamba aur 3 unit chauda hai. Isme **12** chhote squares hain, to iska area **12 square units** hai.

Units ka dhyan rakho:
- Lambai **cm** mein ho to area **cm²** (square centimetre) mein.
- Lambai **m** mein ho to area **m²** mein.

---

## Part B: Euclidean Area Axioms

Area ke saath kaam karne ke liye hum teen buniyadi baatein **maan kar chalte hain**. (Euclid chapter mein dekha tha ki axioms wo baatein hain jinhe bina proof ke sach maana jata hai: [Euclid Topic 1](../euclids-geometry/euclids-geometry.md).)

### Area Axiom 1: Congruent figures ka area barabar hota hai

Agar do figures **congruent** hain, yaani ek doosre par bilkul fit baith jaate hain, to unka **area barabar** hota hai. (Congruent figures [Congruence of Triangles ke Topic 1](../congruence-of-triangles/congruence-of-triangles.md) mein dekhe the.)

Agar ΔABC ≅ ΔPQR, to **ar(ΔABC) = ar(ΔPQR)**.

**Par ulta sach nahi hai.** Barabar area wale figures congruent hon, ye zaroori nahi.

**Example:**
- Ek rectangle 8 cm × 2 cm: area = 16 cm²
- Ek square 4 cm × 4 cm: area = 16 cm²

Area barabar hai, par ek lamba-patla hai aur ek square. Ek doosre par fit nahi baithenge. **Congruent nahi hain.** (Yahi example Euclid chapter ke Axiom 4 mein bhi aaya tha.)

### Area Axiom 2: Area jodne ka niyam (additivity)

Agar ek shape ko **aise tukdon mein kaata jaye jo ek doosre ke upar na chadhein (non-overlapping)**, to:

**Poore shape ka area = sab tukdon ke area ka jod**

**Example:** Ek L-shape ka kamra hai.

```
  +-----------+
  |           |
  |   6 x 4   |
  |           |
  +-----+-----+
  |3 x 2|
  +-----+
```

- Upar wala hissa: 6 × 4 = 24 m²
- Neeche wala hissa: 3 × 2 = 6 m²
- Poore kamre ka area = 24 + 6 = **30 m²**

### Area Axiom 3: Rectangle ka area = lambai × chaudai

Rectangle ka area **l × b** hota hai. Isko hum buniyaad maan lete hain, kyunki Part A mein squares gin kar yahi mila tha. Square ka area = a × a = a².

Baaki saare shapes (parallelogram, triangle) ka area hum isi buniyaad se nikalenge.

---

## Part C: Same base aur same parallels ke beech figures

Ye is topic ka sabse zaroori idea hai. Dhyan se samjho.

Do figures **same base par aur same parallels ke beech** tab kehlaate hain jab:
1. Dono ki ek side **common (same)** ho. Ye **base** hai.
2. Base ke **saamne wale vertices** (ya saamne wali side) **ek hi line par** hon, jo base ke **parallel** ho.

### Example 1: Do parallelograms

```
D     F   C     E
+-----+---+-----+      <- line m (D, F, C, E sab isi line par)
|    /    |    /
|   /     |   /
|  /      |  /
| /       | /
|/        |/
+---------+            <- line l
A         B
```

- ‖gm ABCD aur ‖gm ABEF, dono ki base **AB** hai.
- Dono ke upar wale vertices D, C, F, E sab **line m** par hain, aur m ∥ l.
- To ye dono **same base AB par aur same parallels l aur m ke beech** hain.

(Ramu aur Shamu ke khet bilkul aise hi the: ABCD Ramu ka, ABEF Shamu ka.)

### Example 2: Ek parallelogram aur ek triangle

```
D      P        C
+------*--------+     <- line m
|     / \       |
|    /   \      |
|   /     \     |
|  /       \    |
| /         \   |
|/           \  |
+---------------+     <- line l
A               B
```

- ‖gm ABCD aur ΔPAB, dono ki base **AB**.
- P line DC par hai, jo AB ke parallel hai.
- To ye bhi **same base aur same parallels ke beech** hain.

(Is sketch mein triangle ki side PB, B tak seedhi jaani chahiye. ASCII mein thodi tedhi dikh rahi hai, par asli figure mein P se B tak seedhi line hogi.)

### Non-examples (jo same base, same parallels nahi hain)

**(a) Base alag hai:** ‖gm ABCD aur ‖gm PQRS dono do parallel lines ke beech hain, par ek ki base AB hai aur doosre ki PQ. Base common nahi.

**(b) Saamne wala vertex parallel line par nahi:** ΔPAB aur ‖gm ABCD ki base AB common hai, par P line DC par nahi, uske upar kahin hai.

**(c) Do triangles jinke upar wale vertices alag unchai par hain:** ΔABC aur ΔABD dono ki base AB hai, par C aur D ko jodne wali line AB ke parallel nahi.

> **Yaad rakho:** Same base aur same parallels ke beech hone ka asli matlab hai **"dono ki base ek, aur height ek"**. Kyunki parallel lines ke beech ki doori har jagah barabar hoti hai.

---

## Part D: Parallelograms ka area

### Theorem: Same base aur same parallels ke beech parallelograms ka area barabar hota hai

Yahi Dadaji wali baat hai. Ab ise prove karte hain.

**Given:** ‖gm ABCD aur ‖gm ABEF same base AB par hain, aur same parallels AB aur DE (line m) ke beech hain. (Part C ka Example 1 wala figure.)

**To prove:** ar(ABCD) = ar(ABEF)

**Proof:**

Pehle ΔADF aur ΔBCE ko dekho (dono figure ke kinaron par bane chhote triangles).

| Statement | Reason |
|---|---|
| AD = BC | ‖gm ABCD ki opposite sides (Topic 1, "Opposite sides barabar" theorem) |
| ∠ADF = ∠BCE | Corresponding angles (AD ∥ BC, aur line m transversal hai) |
| ∠AFD = ∠BEC | Corresponding angles (AF ∥ BE, aur line m transversal hai) |
| ΔADF ≅ ΔBCE | AAS criterion |
| ar(ΔADF) = ar(ΔBCE) | Congruent figures ka area barabar (Area Axiom 1) |

(Corresponding angles [Lines and Angles ke Topic 3](../lines-and-angles/lines-and-angles-part3.md) mein, aur AAS [Congruence of Triangles ke Topic 2](../congruence-of-triangles/congruence-of-triangles-part2.md) mein dekha tha.)

Ab trapezium ABED (A, B, E, D wala poora bada shape) ko do tarah se todo:

| Statement | Reason |
|---|---|
| ar(ABED) = ar(ABCD) + ar(ΔBCE) | Area jodne ka niyam (Area Axiom 2) |
| ar(ABED) = ar(ABEF) + ar(ΔADF) | Area jodne ka niyam (Area Axiom 2) |
| ar(ABCD) + ar(ΔBCE) = ar(ABEF) + ar(ΔADF) | Dono ar(ABED) ke barabar hain |
| ar(ABCD) = ar(ABEF) | Dono taraf se barabar cheez ghatao: ar(ΔBCE) = ar(ΔADF) |

**Hence proved.**

**Jaanch numbers se:** Maan lo AB = 10, height = 4, aur DF = CE = 6.
- ar(ABCD) = 10 × 4 = 40
- ar(ΔBCE) = ½ × 6 × 4 = 12
- ar(ABED) = trapezium = ½ × (10 + 16) × 4 = 52 (trapezium ke area ka formula Class 8 mein padha tha)
- 40 + 12 = 52 ✅, aur ar(ABEF) + ar(ΔADF) = ar(ABEF) + 12 = 52, to ar(ABEF) = 40 ✅

Ye trapezium wala tarika tab bhi kaam karta hai jab F, C se aage nikal jaye. Isliye ye proof har case mein chalta hai.

### Parallelogram ka area = base × height

Upar ka theorem humein formula deta hai.

Kisi bhi ‖gm ABEF ke liye, usi base AB par aur unhi parallels ke beech ek **rectangle** ABCD bana lo.

- Theorem se: ar(ABEF) = ar(ABCD)
- Rectangle ka area (Area Axiom 3): ar(ABCD) = AB × AD
- AD = do parallel lines ke beech ki **perpendicular doori**, yaani **height**

To:

> **Parallelogram ka area = base × height**

**Dhyan rakho:** Height hamesha **perpendicular** doori hoti hai, tirchi side nahi. Shamu ke khet ki tirchi side 14 m thi, par height 10 m hi thi. (Point se line ki sabse chhoti doori perpendicular hoti hai, ye [Congruence of Triangles ke Topic 4](../congruence-of-triangles/congruence-of-triangles-part4.md) mein dekha tha.)

### Koi bhi side base ban sakti hai

Parallelogram ki kisi bhi side ko base maan sakte ho, bas **usi side ke hisaab se height** leni hogi.

```
        D _______________ C
         /|              /
        / |h1           /
       /  |            /
      /___|___________/
     A                 B
```

- Base AB lo to height h1 (AB par perpendicular).
- Base AD lo to height h2 (AD par perpendicular).
- **Area = AB × h1 = AD × h2**

**Example:** Ek ‖gm ki sides AB = 12 cm aur AD = 8 cm hain. AB par height 6 cm hai. AD par height kitni hogi?

- Area = AB × h1 = 12 × 6 = **72 cm²**
- Area = AD × h2, to 8 × h2 = 72, **h2 = 9 cm**

Jaanch: height kabhi apni saamne wali tirchi side se lambi nahi ho sakti. h1 = 6 ≤ AD = 8 ✅, h2 = 9 ≤ AB = 12 ✅

---

## Part E: Triangles ka area

### Triangle aur parallelogram, same base aur same parallels

> Agar ek triangle aur ek parallelogram **same base par aur same parallels ke beech** hon, to **triangle ka area = parallelogram ke area ka aadha**.

**Given:** ‖gm ABCD aur ΔPAB, same base AB par, same parallels AB aur DC ke beech. (Part C ka Example 2 wala figure.)

**To prove:** ar(ΔPAB) = ½ ar(ABCD)

**Construction:** B se AP ke parallel ek line kheencho, jo line DC ko Q par kaate.

```
D      P              Q   C
+------*--------------*---+      <- line m
|     /              /
|    /              /
|   /              /
|  /              /
| /              /
|/              /
+--------------+                 <- line l
A              B
```

(Asal figure mein Q, C ke aage ya peeche kahin bhi ho sakta hai, proof par farak nahi padta.)

**Proof:**

| Statement | Reason |
|---|---|
| ABQP ek parallelogram hai | AB ∥ PQ (line m ∥ line l) aur AP ∥ BQ (construction se) |
| ar(ΔPAB) = ½ ar(ABQP) | Diagonal PB ‖gm ABQP ko do congruent triangles mein baantti hai (Topic 1, "Diagonal se do congruent triangles" theorem), aur congruent triangles ka area barabar (Axiom 1) |
| ar(ABQP) = ar(ABCD) | Same base AB aur same parallels ke beech parallelograms ("Same base, same parallels: parallelograms ka area barabar" theorem) |
| ar(ΔPAB) = ½ ar(ABCD) | Upar ki do lines milakar |

**Hence proved.**

### Triangle ka area = ½ × base × height

Upar ke result se:
- ar(Δ) = ½ × ar(‖gm) = ½ × (base × height)

> **Triangle ka area = ½ × base × height**

Height = saamne wale vertex se base (ya base ko aage badha kar bani line) tak ki **perpendicular** doori.

### Theorem: Same base aur same parallels ke beech triangles ka area barabar hota hai

Agar ΔABC aur ΔABD same base AB par hain, aur C, D ek hi line par hain jo AB ke parallel hai:
- Dono ki base = AB
- Dono ki height = do parallel lines ke beech ki doori (barabar)
- To ar(ΔABC) = ½ × AB × h = ar(ΔABD)

```
     C            D
     *------------*        <- line m (AB ke parallel)
    / \          / \
   /   \        /   \
  /     \      /     \
 /       \    /       \
*---------\--/---------*   <- line l
A          \/          B
```

(Sketch sirf idea ke liye hai. Dono triangles ki base poori AB hai, aur unke upar ke vertices C aur D line m par hain.)

### Ulta theorem: barabar area aur same base ho, to same parallels ke beech

> Agar do triangles **same base par, base ki ek hi taraf** hon, aur unka **area barabar** ho, to wo **same parallels ke beech** hote hain.

**Kyun?**
- Area = ½ × base × height
- Base same hai aur area same hai, to **height bhi same** honi chahiye.
- Dono upar wale vertices base se **ek jitni unchai** par hain, aur base ki ek hi taraf hain.
- Ek jitni unchai wale points ko jodne wali line base ke **parallel** hoti hai.

To agar ar(ΔABC) = ar(ΔABD), aur C, D, AB ki ek hi taraf hain, to **CD ∥ AB**.

### Median triangle ko do barabar area wale triangles mein baantti hai

Median ki definition [Triangles chapter ke Topic 2](../triangles/triangles-part2.md) mein dekhi thi: vertex se saamne wali side ke midpoint tak ki line.

**Given:** ΔABC mein AD median hai, yaani BD = DC.

**To prove:** ar(ΔABD) = ar(ΔACD)

**Proof:** A se BC par perpendicular AL kheencho. AL dono triangles ki height hai.

| Statement | Reason |
|---|---|
| ar(ΔABD) = ½ × BD × AL | Triangle ka area |
| ar(ΔACD) = ½ × DC × AL | Triangle ka area |
| BD = DC | D, BC ka midpoint hai (median) |
| ar(ΔABD) = ar(ΔACD) | Upar ki teen lines se |

**Hence proved.**

**Jaanch numbers se:** BC = 10 cm, AL = 6 cm. To ar(ΔABC) = ½ × 10 × 6 = 30 cm². BD = DC = 5, to har tukde ka area = ½ × 5 × 6 = 15 cm². 15 + 15 = 30 ✅

---

## Part F: Solved examples

**Example 1:** Ek parallelogram ki base 15 cm aur height 8 cm hai. Area nikalo.

Area = base × height = 15 × 8 = **120 cm²**

**Example 2:** Ek parallelogram ka area 96 cm² hai aur base 12 cm. Height nikalo.

96 = 12 × h, to **h = 8 cm**

Jaanch: 12 × 8 = 96 ✅

**Example 3:** ABCD ek parallelogram hai. AE ⊥ DC aur CF ⊥ AD. AB = 16 cm, AE = 8 cm aur CF = 10 cm. AD nikalo.

- DC = AB = 16 cm (opposite sides)
- Base DC, height AE: area = 16 × 8 = **128 cm²**
- Base AD, height CF: area = AD × 10
- AD × 10 = 128, to **AD = 12.8 cm**

Jaanch: AE = 8 ≤ AD = 12.8 ✅, CF = 10 ≤ CD = 16 ✅

**Example 4:** Ek triangle ki base 12 cm aur height 7 cm hai. Area nikalo.

Area = ½ × 12 × 7 = **42 cm²**

**Example 5:** ABCD ek parallelogram hai aur P, side CD par koi bhi point hai. Dikhao ki ar(ΔAPB) = ½ ar(ABCD).

ΔAPB aur ‖gm ABCD dono ki base AB hai, aur P line DC par hai jo AB ke parallel hai. To dono **same base aur same parallels ke beech** hain. Part E ke result se:

**ar(ΔAPB) = ½ ar(ABCD)** **Hence proved.**

Jaanch numbers se: AB = 10, height = 4. ar(ABCD) = 40, ar(ΔAPB) = ½ × 10 × 4 = 20 = ½ × 40 ✅. P kahin bhi ho CD par, height wahi 4 rahegi, to answer nahi badlega.

**Example 6:** Dikhao ki parallelogram ki diagonals use **chaar barabar area wale triangles** mein baant deti hain.

**Given:** ‖gm ABCD ki diagonals AC aur BD, point O par milti hain.

**To prove:** ar(ΔAOB) = ar(ΔBOC) = ar(ΔCOD) = ar(ΔDOA)

```
   D _____________ C
    \ \         / /
     \  \     /  /
      \   \ /   /
       \  / O \ /
        \/     \
   A _____________ B
```

(Sketch rough hai: A–C aur B–D diagonals hain, jo O par milti hain.)

**Proof:**

| Statement | Reason |
|---|---|
| AO = OC aur BO = OD | Parallelogram ki diagonals ek doosre ko bisect karti hain (Topic 1, "Diagonals ek doosre ko bisect karte hain" theorem) |
| ΔABD mein AO median hai | O, BD ka midpoint hai |
| ar(ΔAOB) = ar(ΔAOD) | Median barabar area mein baantti hai |
| ΔABC mein BO median hai | O, AC ka midpoint hai |
| ar(ΔAOB) = ar(ΔBOC) | Median barabar area mein baantti hai |
| ΔBCD mein CO median hai | O, BD ka midpoint hai |
| ar(ΔBOC) = ar(ΔCOD) | Median barabar area mein baantti hai |
| ar(ΔAOB) = ar(ΔBOC) = ar(ΔCOD) = ar(ΔDOA) | Upar ki lines milakar |

**Hence proved.** Har triangle ka area = ¼ ar(ABCD).

**Example 7:** ΔABC mein AD median hai aur E, AD ka midpoint hai. Dikhao ki ar(ΔBED) = ¼ ar(ΔABC).

| Statement | Reason |
|---|---|
| ar(ΔABD) = ½ ar(ΔABC) | AD median hai, barabar baantti hai |
| ΔABD mein BE median hai | E, AD ka midpoint hai |
| ar(ΔBED) = ½ ar(ΔABD) | Median barabar baantti hai |
| ar(ΔBED) = ½ × ½ ar(ΔABC) = ¼ ar(ΔABC) | Upar ki lines milakar |

**Hence proved.**

Jaanch: Agar ar(ΔABC) = 40 cm², to ar(ΔABD) = 20, aur ar(ΔBED) = 10 = ¼ × 40 ✅

**Example 8:** ΔABC aur ΔDBC same base BC par, BC ki ek hi taraf hain, aur dono ka area barabar hai. Dikhao ki AD ∥ BC.

Same base BC, base ki ek hi taraf, aur barabar area. Part E ke ulte theorem se, dono triangles **same parallels ke beech** hain, yaani A aur D ko jodne wali line BC ke parallel hai.

**AD ∥ BC** **Hence proved.**

**Example 9:** Ek triangle ki base 6 cm aur height 4 cm hai. Doosre ki base 8 cm aur height 3 cm hai. Kya area barabar hone se dono congruent ho jaate hain?

- Pehla: ½ × 6 × 4 = 12 cm²
- Doosra: ½ × 8 × 3 = 12 cm²

Area barabar hai, par sirf isse congruent nahi keh sakte. Maan lo dono right triangles hain: pehle ki perpendicular sides 6 cm aur 4 cm, doosre ki 8 cm aur 3 cm. Doosre mein 3 cm ki side hai, par pehle ki sabse chhoti side 4 cm hai (hypotenuse to sabse lambi hoti hai). To ye do triangles **congruent nahi** hain. Area Axiom 1 ka ulta sach nahi hota.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Tirchi side ko height maan lena**
Shamu ke khet mein tirchi side 14 m thi, par height 10 m thi. Parallelogram ka area 20 × 14 = 280 nahi, **20 × 10 = 200** hai. Height hamesha **perpendicular** doori hoti hai.

**Galti 2: Base aur height ka jod galat lena**
Example 3 mein base DC ke saath height AE, aur base AD ke saath height CF jaati hai. AB × CF likhna galat hai, kyunki CF, AD par perpendicular hai, AB par nahi.

**Galti 3: Parallelogram ka area = do sides ka product samajhna**
12 cm aur 8 cm sides wale ‖gm ka area 96 cm² nahi hai (jab tak wo rectangle na ho). Area = base × **height**.

**Galti 4: Barabar area ko congruent samajh lena**
8 × 2 ka rectangle aur 4 × 4 ka square, dono 16 cm², par congruent nahi. Congruent ⇒ barabar area, par barabar area ⇏ congruent.

**Galti 5: Triangle mein ½ bhool jana**
Triangle ka area = **½** × base × height. Same base aur same parallels ke beech triangle, parallelogram ka **aadha** hota hai, barabar nahi.

**Galti 6: "Same parallels" jaanche bina theorem laga dena**
Base common hona kaafi nahi. Saamne wala vertex (ya side) **base ke parallel line par** hona chahiye. Warna height alag hogi aur area bhi.

**Galti 7: Units bhool jana**
Lambai cm mein ho to area **cm²** mein likho, sirf cm nahi.

**Galti 8: Median aur altitude mein confuse hona**
Median midpoint tak jaati hai aur area barabar baantti hai. Altitude perpendicular hoti hai. Har median altitude nahi hoti.

---

## Quick Recap

- **Area** = shape ke andar ki jagah, square units (cm², m²) mein.
- **Euclidean area axioms:**
  1. Congruent figures ka area barabar. (Ulta sach nahi.)
  2. Non-overlapping tukdon ka area jodne se poore ka area milta hai.
  3. Rectangle ka area = l × b.
- **Same base aur same parallels** = base ek, aur saamne wala vertex/side base ke parallel line par, yaani **height bhi ek**.
- Same base, same parallels ke beech **parallelograms ka area barabar** ("Same base, same parallels: parallelograms ka area barabar" theorem).
- **‖gm ka area = base × height.** Koi bhi side base ho sakti hai, bas usi ki height lo.
- Same base, same parallels ke beech **triangle = ½ × parallelogram**.
- **Triangle ka area = ½ × base × height.**
- Same base, same parallels ke beech **triangles ka area barabar** ("Same base, same parallels: triangles ka area barabar" theorem), aur same base + barabar area ⇒ same parallels ("Same base, same parallels: triangles ka area barabar" theorem ka converse).
- **Median** triangle ko do barabar area wale triangles mein baantti hai.
- ‖gm ki **diagonals** use chaar barabar area wale triangles mein baantti hain.

---

## Practice Questions

1. Find the area of a parallelogram whose base is 14 cm and height is 9 cm.

2. The adjacent sides of a parallelogram are 25 cm and 15 cm, and its area is 150 cm². Find the heights corresponding to both sides.

3. ABCD is a parallelogram. AE ⊥ DC and CF ⊥ AD. If AB = 20 cm, AE = 9 cm and CF = 12 cm, find AD.

4. A triangle and a parallelogram lie on the same base of 10 cm and between the same parallels. The area of the parallelogram is 60 cm². Find the area of the triangle and the distance between the parallels.

5. State whether each pair of figures lies on the same base and between the same parallels:
   (a) Parallelogram ABCD and ΔPAB, where P lies on DC.
   (b) ΔABC and ΔABD, where C and D lie on a line parallel to AB.
   (c) ΔABC and ΔDEF, where BC and EF are different segments on the same line.
   (d) Parallelogram ABCD and ΔQAB, where Q lies above the line DC.

6. Prove that a median of a triangle divides it into two triangles of equal area.

7. In ΔABC, AD is a median and E is the midpoint of AD. Prove that ar(BED) = ¼ ar(ABC).

8. Show that the diagonals of a parallelogram divide it into four triangles of equal area.

9. ΔABC and ΔDBC lie on the same base BC, on the same side of BC, and have equal areas. Prove that AD ∥ BC.

10. State whether each statement is true or false. Give a reason.
    (a) Two figures with equal areas are always congruent.
    (b) A triangle and a parallelogram on the same base and between the same parallels have equal areas.
    (c) The area of a parallelogram is the product of its two adjacent sides.
    (d) Congruent figures have equal areas.

### Answers

1. Area = 14 × 9 = **126 cm²**

2. - 25 cm wali side par height: 150 ÷ 25 = **6 cm**
   - 15 cm wali side par height: 150 ÷ 15 = **10 cm**
   - Jaanch: 6 ≤ 15 ✅ aur 10 ≤ 25 ✅ (height apne saamne wali side se lambi nahi ho sakti)

3. - DC = AB = 20 cm. Area = DC × AE = 20 × 9 = 180 cm².
   - Area = AD × CF, to AD × 12 = 180, **AD = 15 cm**.
   - Jaanch: AE = 9 ≤ AD = 15 ✅, CF = 12 ≤ CD = 20 ✅

4. - Triangle ka area = ½ × 60 = **30 cm²**
   - ‖gm ka area = base × height, to 60 = 10 × h, **h = 6 cm** (parallels ke beech ki doori)
   - Jaanch: ½ × 10 × 6 = 30 ✅

5. (a) **Haan.** Base AB common hai, aur P line DC par hai jo AB ke parallel hai.
   (b) **Haan.** Base AB common hai, aur C, D, AB ke parallel line par hain.
   (c) **Nahi.** Base common nahi hai (BC aur EF alag hain).
   (d) **Nahi.** Q line DC par nahi hai, to height alag hai.

6. Part E ka proof dekho. Short mein:
   | Statement | Reason |
   |---|---|
   | BD = DC | AD median hai |
   | AL dono triangles ki height hai | A se BC par perpendicular |
   | ar(ΔABD) = ½ × BD × AL = ½ × DC × AL = ar(ΔACD) | Triangle ka area, aur BD = DC |

7. | Statement | Reason |
   |---|---|
   | ar(ΔABD) = ½ ar(ΔABC) | AD median hai |
   | BE, ΔABD ki median hai | E, AD ka midpoint hai |
   | ar(ΔBED) = ½ ar(ΔABD) | Median barabar baantti hai |
   | ar(ΔBED) = ¼ ar(ΔABC) | Upar ki lines milakar |

8. Part F ka Example 6 dekho. Diagonals ek doosre ko O par bisect karti hain, to AO, BO aur CO teen alag triangles (ΔABD, ΔABC, ΔBCD) ki medians hain. Har median barabar area mein baantti hai, isliye ar(AOB) = ar(AOD), ar(AOB) = ar(BOC), aur ar(BOC) = ar(COD). Chaaron barabar hain.

9. | Statement | Reason |
   |---|---|
   | ar(ΔABC) = ½ × BC × h₁, ar(ΔDBC) = ½ × BC × h₂ | Triangle ka area (h₁, h₂ = A aur D se BC tak ki perpendicular doori) |
   | ½ × BC × h₁ = ½ × BC × h₂, to h₁ = h₂ | Area barabar diya hai |
   | A aur D, BC se barabar unchai par aur BC ki ek hi taraf hain | h₁ = h₂ aur same side |
   | AD ∥ BC | Barabar unchai wale do points ko jodne wali line base ke parallel hoti hai ("Same base, same parallels: triangles ka area barabar" theorem ka converse) |

10. (a) **False** ❌. 8 × 2 ka rectangle aur 4 × 4 ka square, dono 16 cm², par congruent nahi.
    (b) **False** ❌. Triangle ka area parallelogram ka **aadha** hota hai.
    (c) **False** ❌. Area = base × **height**. Do sides ka product sirf rectangle ke liye sahi hai.
    (d) **True** ✅. Ye Area Axiom 1 hai.

---

Bahut badhiya! Ab aap kisi bhi parallelogram ya triangle ka area nikal sakte ho, aur ye bhi samajh gaye ho ki **tirchi side lambi hone se area nahi badhta, sirf base aur height se badhta hai.** Dadaji ki ye seekh yaad rakhna.

---

## Chapter Wrap-up: Quadrilaterals

| Topic | Kya seekha | Sabse zaroori baat |
|---|---|---|
| **1. Quadrilaterals aur Parallelogram ke Theorems** | Quadrilateral ke types (trapezium, parallelogram, rectangle, rhombus, square, kite), parallelogram ke theorems aur unke converse | ‖gm mein opposite sides aur angles barabar, diagonals ek doosre ko bisect karti hain, aur ek diagonal do congruent triangles banati hai |
| **2. Mid-point Theorem** | Mid-point theorem aur uska converse, aur unke upyog | Do sides ke midpoints ko jodne wali line teesri side ke parallel aur uski aadhi hoti hai |
| **3. Areas of Parallelograms and Triangles** | Euclidean area axioms, same base aur same parallels, ‖gm aur triangle ka area, median aur diagonals se barabar area | ‖gm = base × height, triangle = ½ × base × height, aur same base + same parallels ⇒ same height |
