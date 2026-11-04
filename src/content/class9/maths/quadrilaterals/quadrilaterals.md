# Chapter: Quadrilaterals

> **Class:** 9 | **Subject:** Mathematics
> **Ye ek naya chapter hai.** Isme pichle chapters ki teen cheezein bahut kaam aayengi: triangle ka angle sum ([Triangles Topic 2](../triangles/triangles-part2.md)), parallel lines ke angles ([Lines and Angles Topic 3](../lines-and-angles/lines-and-angles-part3.md)) aur congruence ke criteria aur CPCT ([Congruence Topic 1](../congruence-of-triangles/congruence-of-triangles.md), [Topic 2](../congruence-of-triangles/congruence-of-triangles-part2.md)).
> **Topics covered in this file:**
> 1. Quadrilaterals: Types, and Theorems on Parallelograms and their Converses

---

# Topic 1: Quadrilaterals, unke Types, aur Parallelogram ke Theorems

Pichle do chapters mein humne triangles ke saath bahut kaam kiya. Unke angles jode (sum 180°), unhe congruent saabit kiya (SAS, ASA, SSS...), aur CPCT se unke hisse barabar dikhaye. Ab hum ek kadam aage chalte hain: **teen kone se chaar kone.** Aur mazedaar baat ye hai ki chaar kone wali shapes ko samajhne ke liye hum unhe **do triangles mein kaat** denge, aur wahi purane tools kaam aayenge.

---

## Diwali ki chhuttiyon mein carrom

Diwali ki chhuttiyan thin. Tanvi aur uska cousin Arjun carrom khel rahe the.

Arjun ne board ko dekh kar kaha, "Ye board **square** hai na? Chaaron sides barabar, chaaron kone 90°."

Tanvi ne khidki ki taraf ishaara kiya. "Aur wo khidki? Uske kone bhi 90° hain, par lambi side aur chhoti side alag hain. Wo **rectangle** hai."

Chhat par Arjun ki **patang** padi thi. Usme upar ki do sides chhoti aur barabar thin, neeche ki do lambi aur barabar. "Ye na square hai, na rectangle," Arjun bola. "Iska kya naam hai?"

Tab Tanvi ke papa aaye aur ek purani **almirah ka darwaza** dikhaya jo tedha ho gaya tha. Uski saamne wali sides ab bhi barabar aur parallel thin, par kone 90° nahi rahe the. "Ye **parallelogram** ban gaya hai," unhone hans kar kaha.

Carrom board, khidki, patang, tedha darwaza: sab mein **chaar sides** hain, par sab alag alag hain. Is topic mein hum inhi chaar-side wali shapes ko pehchanna seekhenge, aur khaas kar **parallelogram** ki properties ko **prove** karenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Quadrilateral** | Chaar sides wali band shape (quad = chaar, lateral = side) | Carrom board, khidki, patang |
| **Diagonal** | Aamne-saamne ke do kono ko jodne wali line | ABCD mein AC aur BD |
| **Adjacent sides** | Wo do sides jo ek kone par milti hain | AB aur BC |
| **Opposite sides** | Aamne-saamne ki sides jo kahin nahi milti | AB aur DC |
| **Adjacent (consecutive) angles** | Ek hi side ke dono siron wale angles | ∠A aur ∠B |
| **Opposite angles** | Aamne-saamne ke angles | ∠A aur ∠C |
| **Parallelogram** | Jiske dono jode saamne wali sides parallel hon | Tedha darwaza |
| **Converse** | Ulta theorem: "agar P to Q" ka ulta "agar Q to P" | Neeche Part C mein (sides, angles aur diagonals wale theorems ke converse) |

---

## Part A: Quadrilateral kya hota hai

Chaar points A, B, C, D lo, jinme se **koi teen ek seedh mein (collinear) na hon**. Unhe **kram se** jodo: A se B, B se C, C se D, aur D se wapas A. Jo band shape bani, wo **quadrilateral ABCD** hai.

```
        D _____________ C
         /             \
        /               \
       /                 \
      /___________________\
     A                     B
```

Is quadrilateral ke hisse:

| Hissa | ABCD mein |
|---|---|
| 4 vertices (kone) | A, B, C, D |
| 4 sides | AB, BC, CD, DA |
| 4 angles | ∠A, ∠B, ∠C, ∠D |
| 2 diagonals | AC, BD |
| Opposite sides ke jode | AB aur DC; AD aur BC |
| Adjacent sides ke jode | AB-BC, BC-CD, CD-DA, DA-AB |
| Opposite angles ke jode | ∠A aur ∠C; ∠B aur ∠D |
| Adjacent angles ke jode | ∠A-∠B, ∠B-∠C, ∠C-∠D, ∠D-∠A |

### Naam kram se hi likhte hain

Quadrilateral ka naam **ghoomte hue kram** mein likhte hain, jaise ABCD, BCDA, ya DCBA (ulta ghoomna bhi chalega). Par **ABDC** likhna galat hai, kyunki B ke baad seedha D par koodna ek diagonal pe chalna hai, side pe nahi.

### Angle sum property: 360°

**Quadrilateral ke chaaron angles ka sum 360° hota hai.**

**Kyun?** Diagonal AC kheencho. Quadrilateral do triangles mein bant jata hai: ΔABC aur ΔACD.

```
        D _____________ C
         /         ..  \
        /      ..       \
       /   ..            \
      /.__________________\
     A                     B
```

| Statement | Reason |
|---|---|
| ∠DAC + ∠ACD + ∠D = 180° | ΔACD ka angle sum ([Triangles Topic 2](../triangles/triangles-part2.md)) |
| ∠CAB + ∠B + ∠BCA = 180° | ΔABC ka angle sum |
| Dono jodo: (∠DAC + ∠CAB) + ∠B + (∠ACD + ∠BCA) + ∠D = 360° | Barabar cheezein jodne par barabar (Euclid Axiom 2) |
| ∠DAC + ∠CAB = ∠A, aur ∠ACD + ∠BCA = ∠C | Diagonal ne in angles ko do hisson mein baanta |
| **∠A + ∠B + ∠C + ∠D = 360°** | Hence proved. |

**Jaanch:** Carrom board (square) ke chaaron kone 90° hain: 90 × 4 = 360° ✅

---

## Part B: Quadrilaterals ke types

| Type | Definition | Asli zindagi mein |
|---|---|---|
| **Trapezium** | Sirf **ek jodi** saamne wali sides parallel | Bhutte ki tokri ka side view, kuch tables |
| **Parallelogram** | **Dono jode** saamne wali sides parallel | Tedha darwaza, rubber ka mitaa jab daba do |
| **Rectangle** | Parallelogram jiska **har angle 90°** ho | Khidki, mobile screen |
| **Rhombus** | Parallelogram jiski **chaaron sides barabar** hon | Ludo ki kuch dibbiyon ka design, diamond shape |
| **Square** | Parallelogram jiski chaaron sides barabar **aur** har angle 90° ho | Carrom board, chessboard ka khana |
| **Kite** | Do jode **adjacent** sides barabar (aur ye parallelogram nahi hota) | Patang |

```
 Trapezium        Parallelogram       Rectangle
  _______           ________          ________
 /       \         /       /         |        |
/_________\       /_______/          |________|

 Rhombus           Square             Kite
    /\            ______               /\
   /  \          |      |             /  \
   \  /          |      |             \  /
    \/           |______|              \/
                                    (upar chhoti, neeche lambi sides)
```

### Family tree: kaun kiska rishtedaar hai

```
                 Quadrilateral
                /      |      \
         Trapezium  Parallelogram  Kite
                    /         \
             Rectangle       Rhombus
                    \         /
                      Square
```

Isse ye baatein nikalti hain:

- **Har square ek rectangle hai** (har angle 90° hai). Par har rectangle square nahi (sides barabar hona zaroori nahi).
- **Har square ek rhombus hai** (chaaron sides barabar). Par har rhombus square nahi (angles 90° hona zaroori nahi).
- **Rectangle, rhombus aur square, teeno parallelogram hain.** Isliye parallelogram ki har property inme bhi hogi.
- **Kite parallelogram nahi hai.** Uski saamne wali sides parallel nahi hoti.

Isse aise yaad rakho: square ghar ka sabse chhota bachcha hai, jo papa (rectangle) aur mummy (rhombus) dono ki khoobiyan leta hai.

### Properties ki comparison table

(Ye properties Part C aur Part D mein prove hongi.)

| Property | Parallelogram | Rectangle | Rhombus | Square |
|---|---|---|---|---|
| Saamne wali sides parallel | Haan | Haan | Haan | Haan |
| Saamne wali sides barabar | Haan | Haan | Haan | Haan |
| Chaaron sides barabar | Nahi | Nahi | **Haan** | **Haan** |
| Saamne wale angles barabar | Haan | Haan | Haan | Haan |
| Har angle 90° | Nahi | **Haan** | Nahi | **Haan** |
| Diagonals ek doosre ko bisect karte hain | Haan | Haan | Haan | Haan |
| Diagonals barabar | Nahi | **Haan** | Nahi | **Haan** |
| Diagonals perpendicular (90° par milte hain) | Nahi | Nahi | **Haan** | **Haan** |

Kite ke liye: do jode adjacent sides barabar hote hain, aur uske diagonals perpendicular hote hain. Par diagonals ek doosre ko bisect nahi karte (sirf ek diagonal doosre ko aadha karta hai).

---

## Part C: Parallelogram ke theorems

Ab asli maza. Parallelogram ki definition sirf itni hai: **dono jode saamne wali sides parallel.** Baaki sari properties (sides barabar, angles barabar, diagonals bisect) hum **prove** karenge.

Har proof mein ye teen cheezein baar baar aayengi:
- **Alternate interior angles barabar** hote hain jab lines parallel hon ([Lines and Angles Topic 3](../lines-and-angles/lines-and-angles-part3.md), Alternate Interior Angles theorem).
- **Congruence criteria** (ASA, SAS, SSS...) ([Congruence Topic 2](../congruence-of-triangles/congruence-of-triangles-part2.md)).
- **CPCT** ([Congruence Topic 1](../congruence-of-triangles/congruence-of-triangles.md)).

### "Diagonal se do congruent triangles" theorem: Diagonal parallelogram ko do congruent triangles mein baantta hai

```
        D _____________ C
         /          . /
        /       .    /
       /    .       /
      /.___________/
     A              B
```

**Given:** ABCD ek parallelogram hai (AB ∥ DC, AD ∥ BC). AC ek diagonal hai.
**To prove:** ΔABC ≅ ΔCDA

| Statement | Reason |
|---|---|
| ∠BCA = ∠DAC | Alternate interior angles (AD ∥ BC, transversal AC) |
| ∠BAC = ∠DCA | Alternate interior angles (AB ∥ DC, transversal AC) |
| AC = CA | Common side |
| ΔABC ≅ ΔCDA | ASA (dono angles ke beech side AC hai) |

Hence proved.

Dhyan do correspondence par: A ↔ C, B ↔ D, C ↔ A.

### "Opposite sides barabar" theorem: Parallelogram ki saamne wali sides barabar hoti hain

**Given:** ABCD parallelogram.
**To prove:** AB = DC aur AD = BC

| Statement | Reason |
|---|---|
| ΔABC ≅ ΔCDA | "Diagonal se do congruent triangles" theorem |
| AB = CD | CPCT (A↔C, B↔D, to AB ↔ CD) |
| BC = DA | CPCT (B↔D, C↔A, to BC ↔ DA) |

Hence proved.

### "Opposite sides barabar" theorem ka converse: Agar saamne wali sides ke dono jode barabar hon, to quadrilateral parallelogram hai

**Given:** ABCD mein AB = CD aur AD = CB.
**To prove:** ABCD parallelogram hai.

Diagonal AC kheencho.

| Statement | Reason |
|---|---|
| AB = CD | Given |
| BC = DA | Given |
| AC = CA | Common |
| ΔABC ≅ ΔCDA | SSS |
| ∠BAC = ∠DCA | CPCT |
| AB ∥ DC | Alternate interior angles barabar hain (transversal AC), Alternate Interior Angles theorem ka converse |
| ∠BCA = ∠DAC | CPCT |
| AD ∥ BC | Alternate interior angles barabar hain, Alternate Interior Angles theorem ka converse |
| ABCD parallelogram hai | Dono jode saamne wali sides parallel |

Hence proved.

### "Opposite angles barabar" theorem: Parallelogram ke saamne wale angles barabar hote hain

**Given:** ABCD parallelogram.
**To prove:** ∠A = ∠C aur ∠B = ∠D

| Statement | Reason |
|---|---|
| ΔABC ≅ ΔCDA (diagonal AC se) | "Diagonal se do congruent triangles" theorem |
| ∠B = ∠D | CPCT (B ↔ D) |
| Isi tarah diagonal BD lo: ΔABD ≅ ΔCDB | "Diagonal se do congruent triangles" theorem |
| ∠A = ∠C | CPCT (A ↔ C) |

Hence proved.

### "Opposite angles barabar" theorem ka converse: Agar saamne wale angles ke dono jode barabar hon, to quadrilateral parallelogram hai

**Given:** ABCD mein ∠A = ∠C aur ∠B = ∠D.
**To prove:** ABCD parallelogram hai.

| Statement | Reason |
|---|---|
| ∠A + ∠B + ∠C + ∠D = 360° | Quadrilateral ka angle sum (Part A) |
| ∠A + ∠B + ∠A + ∠B = 360° | ∠C = ∠A, ∠D = ∠B (given) |
| 2(∠A + ∠B) = 360°, to ∠A + ∠B = 180° | Dono taraf 2 se divide |
| AD ∥ BC | ∠A aur ∠B, transversal AB ke ek hi taraf ke interior angles hain aur sum 180°, Co-interior Angles theorem ka converse |
| Isi tarah ∠A + ∠D = 180°, to AB ∥ DC | Transversal AD, Co-interior Angles theorem ka converse |
| ABCD parallelogram hai | Dono jode parallel |

Hence proved.

Isi se ek kaam ki baat bhi nikalti hai: **parallelogram ke adjacent (consecutive) angles ka sum 180° hota hai** (∠A + ∠B = 180°). Inhe co-interior angles samjho.

### "Diagonals ek doosre ko bisect karte hain" theorem: Parallelogram ke diagonals ek doosre ko bisect karte hain

"Bisect karna" yaani **beech se aadha karna.** Diagonals AC aur BD, point O par milte hain.

```
        D _____________ C
         \ .         . /
          \   .   .   /
           \    O    /
          / .      .  \
      A /_____________\ B
```

(Sketch sirf idea ke liye: AC aur BD, O par cross karte hain.)

**Given:** ABCD parallelogram, diagonals AC aur BD, O par milte hain.
**To prove:** OA = OC aur OB = OD

| Statement | Reason |
|---|---|
| AB = CD | "Opposite sides barabar" theorem |
| ∠OAB = ∠OCD | Alternate interior angles (AB ∥ DC, transversal AC) |
| ∠OBA = ∠ODC | Alternate interior angles (AB ∥ DC, transversal BD) |
| ΔAOB ≅ ΔCOD | ASA (AB, dono angles ke beech) |
| OA = OC, OB = OD | CPCT |

Hence proved.

### "Diagonals ek doosre ko bisect karte hain" theorem ka converse: Agar diagonals ek doosre ko bisect karein, to quadrilateral parallelogram hai

**Given:** ABCD mein diagonals O par milte hain, aur OA = OC, OB = OD.
**To prove:** ABCD parallelogram hai.

| Statement | Reason |
|---|---|
| OA = OC, OB = OD | Given |
| ∠AOB = ∠COD | Vertically opposite angles |
| ΔAOB ≅ ΔCOD | SAS |
| ∠OAB = ∠OCD | CPCT |
| AB ∥ DC | Alternate angles barabar (transversal AC), Alternate Interior Angles theorem ka converse |
| Isi tarah ΔAOD ≅ ΔCOB (SAS), to ∠OAD = ∠OCB, to AD ∥ BC | Same reasoning |
| ABCD parallelogram hai | Dono jode parallel |

Hence proved.

### "Ek pair opposite sides barabar aur parallel" theorem: Agar ek jodi saamne wali sides barabar aur parallel ho, to quadrilateral parallelogram hai

Ye ek shortcut hai. Dono jode check karne ki zaroorat nahi, **sirf ek jodi** kaafi hai, bas wo **barabar bhi ho aur parallel bhi.**

**Given:** ABCD mein AB = CD aur AB ∥ CD.
**To prove:** ABCD parallelogram hai.

Diagonal AC kheencho.

| Statement | Reason |
|---|---|
| AB = CD | Given |
| ∠BAC = ∠DCA | Alternate interior angles (AB ∥ CD, transversal AC) |
| AC = CA | Common |
| ΔABC ≅ ΔCDA | SAS (∠BAC, sides AB aur AC ke beech hai) |
| BC = DA | CPCT |
| Ab dono jode saamne wali sides barabar: AB = CD, BC = DA | |
| ABCD parallelogram hai | "Opposite sides barabar" theorem ka converse |

Hence proved.

### Ek nazar mein: kaise pata karein ki quadrilateral parallelogram hai?

Inme se **koi bhi ek** baat saabit kar do:

| Kya dikhana hai | Theorem |
|---|---|
| Dono jode saamne wali sides parallel | Definition |
| Dono jode saamne wali sides barabar | 8.3 |
| Dono jode saamne wale angles barabar | 8.5 |
| Diagonals ek doosre ko bisect karte hain | 8.7 |
| Ek jodi saamne wali sides barabar **aur** parallel | 8.8 |

---

## Part D: Special parallelograms ke results

### Result 1: Parallelogram ka ek angle 90° ho, to har angle 90° hai (yaani wo rectangle hai)

Maan lo ∠A = 90°.
- ∠A + ∠B = 180° (adjacent angles, Part C mein "Opposite angles barabar" theorem ke converse ke baad wali baat), to ∠B = 90°.
- ∠C = ∠A = 90° aur ∠D = ∠B = 90° ("Opposite angles barabar" theorem).

Isliye rectangle ko check karne ke liye ek hi 90° wala kona kaafi hai, agar shape parallelogram hai.

### Result 2: Rectangle ke diagonals barabar hote hain

```
     D ______________ C
      |  .        .  |
      |     .  .     |
      |     .  .     |
      |  .        .  |
     A|______________|B
```

**Given:** ABCD rectangle hai.
**To prove:** AC = BD

ΔABC aur ΔBAD lo.

| Statement | Reason |
|---|---|
| AB = BA | Common |
| ∠ABC = ∠BAD = 90° | Rectangle ke angles |
| BC = AD | Saamne wali sides ("Opposite sides barabar" theorem) |
| ΔABC ≅ ΔBAD | SAS |
| AC = BD | CPCT |

Hence proved.

### Result 3: Rhombus ke diagonals ek doosre par perpendicular hote hain

**Given:** ABCD rhombus hai, diagonals O par milte hain.
**To prove:** AC ⊥ BD

| Statement | Reason |
|---|---|
| OA = OC | Rhombus ek parallelogram hai, diagonals bisect karte hain ("Diagonals ek doosre ko bisect karte hain" theorem) |
| AB = CB | Rhombus ki sides barabar |
| OB = OB | Common |
| ΔAOB ≅ ΔCOB | SSS |
| ∠AOB = ∠COB | CPCT |
| ∠AOB + ∠COB = 180° | Linear pair (AC seedhi line hai) |
| 2∠AOB = 180°, to ∠AOB = 90° | |
| AC ⊥ BD | |

Hence proved.

### Result 4: Square ke diagonals barabar bhi hain aur perpendicular bhi

Square ek rectangle bhi hai (Result 2 se diagonals barabar) aur ek rhombus bhi (Result 3 se diagonals perpendicular). Aur kyunki ye parallelogram hai, diagonals ek doosre ko bisect bhi karte hain.

Ye family tree ka fayda hai: ek baar proof kar liya, to saare bachchon par lag jata hai.

---

## Part E: Solved examples

**Example 1: Quadrilateral ke angles 3 : 5 : 7 : 9 ke ratio mein hain. Angles nikalo.**

Maan lo angles 3x, 5x, 7x, 9x hain.
3x + 5x + 7x + 9x = 360° → 24x = 360° → x = 15°
Angles: **45°, 75°, 105°, 135°**

**Jaanch:** 45 + 75 + 105 + 135 = 360 ✅

Aur ek mazedaar baat: agar ye angles kram se ∠A, ∠B, ∠C, ∠D hain, to ∠A + ∠D = 45 + 135 = 180° aur ∠B + ∠C = 75 + 105 = 180°. Yaani AB ∥ DC (transversal AD ke ek taraf ke interior angles ka sum 180°). Par ∠A ≠ ∠C, to ye parallelogram nahi hai. Ye ek **trapezium** hai.

**Example 2: Parallelogram ABCD mein ∠A = 70°. Baaki angles nikalo.**

- ∠C = ∠A = **70°** (saamne wale angles)
- ∠B = 180° − 70° = **110°** (adjacent angles)
- ∠D = ∠B = **110°**

**Jaanch:** 70 + 110 + 70 + 110 = 360 ✅

**Example 3: Parallelogram ke do adjacent angles (2x + 10)° aur (3x − 20)° hain. Angles nikalo.**

Adjacent angles ka sum 180°:
(2x + 10) + (3x − 20) = 180 → 5x − 10 = 180 → x = 38
Angles: 2(38) + 10 = **86°** aur 3(38) − 20 = **94°**
Saare angles: 86°, 94°, 86°, 94°.

**Jaanch:** 86 + 94 = 180 ✅

**Example 4: Parallelogram ke do saamne wale angles (3x − 2)° aur (50 − x)° hain. Saare angles nikalo.**

Saamne wale angles barabar:
3x − 2 = 50 − x → 4x = 52 → x = 13
Ek angle = 3(13) − 2 = **37°**. Iske adjacent = 180 − 37 = **143°**.
Saare angles: 37°, 143°, 37°, 143°.

**Jaanch:** 50 − 13 = 37 ✅, aur 37 + 143 + 37 + 143 = 360 ✅

**Example 5: Parallelogram ki adjacent sides 3 : 2 ke ratio mein hain aur perimeter 60 cm hai. Sides nikalo.**

Sides 3k aur 2k. Perimeter = 2(3k + 2k) = 10k = 60 → k = 6
Sides: **18 cm aur 12 cm** (saamne wali sides barabar, to 18, 12, 18, 12).

**Jaanch:** 18 + 12 + 18 + 12 = 60 ✅

**Example 6: Parallelogram ABCD ke diagonals O par milte hain. OA = (x + 3) cm aur OC = (2x − 4) cm. x aur AC nikalo.**

Diagonals bisect karte hain, to OA = OC:
x + 3 = 2x − 4 → x = 7
OA = 10 cm, to **AC = 2 × 10 = 20 cm**

**Example 7: Rectangle ABCD mein AC = (2x + 5) cm aur BD = (3x − 1) cm. Diagonal ki lambai nikalo.**

Rectangle ke diagonals barabar:
2x + 5 = 3x − 1 → x = 6
**AC = BD = 17 cm**

**Example 8: Rhombus ke diagonals 16 cm aur 12 cm hain. Uski side nikalo.**

Diagonals ek doosre ko aadha karte hain aur 90° par milte hain. To beech mein ek right triangle banta hai jiski do sides 8 cm aur 6 cm hain.
Side² = 8² + 6² = 64 + 36 = 100 → **side = 10 cm** (Pythagoras theorem, jo aap pichhli classes mein padh chuke ho).

**Example 9 (proof): Parallelogram ke do adjacent angles ke bisectors 90° par milte hain.**

```
        D ______________ C
         /             /
        /      P      /
       /    .    .   /
      /.___________./
     A               B
```

**Given:** ABCD parallelogram. ∠A aur ∠B ke bisectors P par milte hain.
**To prove:** ∠APB = 90°

| Statement | Reason |
|---|---|
| ∠A + ∠B = 180° | Parallelogram ke adjacent angles |
| ½∠A + ½∠B = 90° | Dono taraf aadha (Euclid Axiom 7 jaisa) |
| ∠PAB = ½∠A, ∠PBA = ½∠B | AP aur BP bisectors hain |
| ∠PAB + ∠PBA = 90° | |
| ΔAPB mein: ∠APB = 180° − (∠PAB + ∠PBA) = 180° − 90° | Triangle ka angle sum |
| **∠APB = 90°** | Hence proved. |

**Example 10 (proof): Parallelogram ABCD mein E, AB par aur F, CD par aise points hain ki AE = CF. Dikhao ki AECF ek parallelogram hai.**

```
        D ______F_______ C
         /       .      /
        /      .       /
       /     .        /
      /____E_________/
     A               B
```

| Statement | Reason |
|---|---|
| AB ∥ DC | ABCD parallelogram hai |
| AE ∥ FC | AE, AB ka hissa hai aur FC, DC ka hissa hai |
| AE = CF | Given |
| AECF mein ek jodi saamne wali sides (AE aur CF) barabar aur parallel hai | |
| **AECF parallelogram hai** | "Ek pair opposite sides barabar aur parallel" theorem |

Hence proved.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Naam ulta-pulta likhna**
Quadrilateral ABCD ko ABDC likhna galat hai. Kram se ghoomte hue likho.

**Galti 2: Har quadrilateral ke diagonals ko bisect karta maan lena**
Ye sirf parallelogram (aur uske bachchon) ki property hai. Trapezium ya kite mein diagonals ek doosre ko aadha nahi karte.

**Galti 3: Rectangle ke diagonals ko perpendicular maan lena**
Rectangle ke diagonals **barabar** hote hain, perpendicular nahi. Perpendicular rhombus ke hote hain. Square ke dono.

**Galti 4: Rhombus ke diagonals ko barabar maan lena**
Rhombus ke diagonals perpendicular hote hain, barabar nahi (jab tak wo square na ho). Example 8 mein diagonals 16 aur 12 the.

**Galti 5: Adjacent aur saamne wale angles mix karna**
Parallelogram mein **saamne wale angles barabar** hote hain, aur **adjacent angles ka sum 180°** hota hai. ∠A = 70° ho to ∠B = 110° hoga, 70° nahi.

**Galti 6: "Ek pair opposite sides barabar aur parallel" theorem mein sirf "barabar" ya sirf "parallel" dekhna**
Ek jodi sides ka **barabar aur parallel, dono** hona zaroori hai. Sirf ek jodi parallel ho to wo trapezium bhi ho sakta hai.

**Galti 7: Har rectangle ko square kehna**
Har square rectangle hai, par ulta nahi. Khidki rectangle hai, par uski sides barabar nahi.

**Galti 8: Proof mein reason chhod dena**
"∠BAC = ∠DCA" likh kar chhod do to adhoora hai. Likho: "Alternate interior angles, AB ∥ DC, transversal AC."

---

## Quick Recap

- **Quadrilateral:** chaar sides, chaar angles, do diagonals. Naam kram se likho.
- **Angle sum = 360°** (ek diagonal se do triangles, 180° + 180°).
- **Types:** trapezium (ek jodi parallel), parallelogram (dono jode parallel), rectangle, rhombus, square, kite.
- **Family:** square ek rectangle bhi hai aur rhombus bhi. Teeno parallelogram hain. Kite parallelogram nahi hai.
- **Parallelogram ke theorems (8.1–8.8):**
  - Diagonal do congruent triangles banata hai.
  - Saamne wali sides barabar (aur converse).
  - Saamne wale angles barabar (aur converse). Adjacent angles ka sum 180°.
  - Diagonals ek doosre ko bisect karte hain (aur converse).
  - Ek jodi sides barabar **aur** parallel ho to parallelogram.
- **Special results:** ek angle 90° ho to rectangle. Rectangle ke diagonals barabar. Rhombus ke diagonals perpendicular. Square ke dono.
- Proofs mein teen tools: **alternate angles, congruence criteria, CPCT.**

---

## Practice Questions

1. The angles of a quadrilateral are in the ratio 2 : 3 : 5 : 8. Find all the angles.

2. In a parallelogram ABCD, ∠A = (3x + 10)° and ∠B = (2x + 20)°. Find all the angles of the parallelogram.

3. The perimeter of a parallelogram is 56 cm. One side is 4 cm longer than the other. Find the lengths of the sides.

4. The diagonals of a parallelogram ABCD meet at O. If AO = (3y − 1) cm, OC = (2y + 4) cm and BD = 18 cm, find y, AC and OB.

5. The diagonals of a rhombus are 24 cm and 10 cm. Find the length of each side.

6. Show that if the diagonals of a parallelogram are equal, then it is a rectangle.

7. Show that the diagonals of a square are equal and bisect each other at right angles.

8. ABCD is a parallelogram. AP and CQ are perpendiculars from A and C on the diagonal BD. Show that:
   (a) ΔAPB ≅ ΔCQD
   (b) AP = CQ

9. State whether each statement is true or false.
   (a) Every rectangle is a square.
   (b) Every square is a rhombus.
   (c) A parallelogram with one angle of 90° is a rectangle.
   (d) The diagonals of every parallelogram are equal.
   (e) The diagonals of a kite are perpendicular to each other.

### Answers

1. Angles 2x, 3x, 5x, 8x. 18x = 360 → x = 20.
   Angles: **40°, 60°, 100°, 160°**
   Jaanch: 40 + 60 + 100 + 160 = 360 ✅

2. ∠A aur ∠B adjacent hain, to sum 180°:
   (3x + 10) + (2x + 20) = 180 → 5x + 30 = 180 → x = 30
   ∠A = **100°**, ∠B = **80°**, ∠C = ∠A = **100°**, ∠D = ∠B = **80°**
   Jaanch: 100 + 80 + 100 + 80 = 360 ✅

3. Sides a aur (a + 4). Perimeter = 2(a + a + 4) = 56 → 2a + 4 = 28 → a = 12.
   Sides: **12 cm aur 16 cm**
   Jaanch: 2(12 + 16) = 56 ✅

4. Diagonals bisect karte hain, to AO = OC:
   3y − 1 = 2y + 4 → **y = 5**
   AO = 14 cm, to **AC = 28 cm**
   OB = ½ BD = **9 cm**

5. Aadhe diagonals 12 cm aur 5 cm, aur wo 90° par milte hain.
   Side² = 12² + 5² = 144 + 25 = 169 → **side = 13 cm** (Pythagoras theorem, pichhli classes wala)

6. **Given:** ABCD parallelogram, AC = BD. **To prove:** ABCD rectangle hai.

   | Statement | Reason |
   |---|---|
   | AB = DC | Parallelogram ki saamne wali sides ("Opposite sides barabar" theorem) |
   | BC = CB | Common |
   | AC = DB | Given |
   | ΔABC ≅ ΔDCB | SSS |
   | ∠ABC = ∠DCB | CPCT |
   | ∠ABC + ∠DCB = 180° | Parallelogram ke adjacent angles |
   | 2∠ABC = 180°, to ∠ABC = 90° | |
   | ABCD rectangle hai | Parallelogram ka ek angle 90° (Part D, Result 1) |

   Hence proved.

7. Square ek rectangle hai, to uske diagonals **barabar** hain (Result 2). Square ek rhombus bhi hai, to uske diagonals **perpendicular** hain (Result 3). Aur square ek parallelogram hai, to diagonals ek doosre ko **bisect** karte hain ("Diagonals ek doosre ko bisect karte hain" theorem). Teeno baatein mila kar: diagonals barabar hain aur ek doosre ko 90° par bisect karte hain. Hence proved.

8. (a)

   | Statement | Reason |
   |---|---|
   | ∠APB = ∠CQD = 90° | AP ⊥ BD, CQ ⊥ BD (given) |
   | ∠ABP = ∠CDQ | Alternate interior angles (AB ∥ DC, transversal BD) |
   | AB = CD | Parallelogram ki saamne wali sides ("Opposite sides barabar" theorem) |
   | ΔAPB ≅ ΔCQD | AAS |

   (b) ΔAPB ≅ ΔCQD, to **AP = CQ** (CPCT). Hence proved.

9. (a) **False** ❌. Rectangle ki sides barabar hona zaroori nahi.
   (b) **True** ✅. Square ki chaaron sides barabar hain.
   (c) **True** ✅. Ek angle 90° ho to baaki teen bhi 90° ho jaate hain.
   (d) **False** ❌. Sirf rectangle (aur square) ke diagonals barabar hote hain.
   (e) **True** ✅. Kite ke diagonals 90° par milte hain.

---

Bahut saare theorems the, par sab ek hi kahani ke hisse hain: **diagonal kheencho, do triangles banao, congruence dikhao, CPCT lagao.** Ye chaar kadam yaad rakho, aur parallelogram ka koi bhi proof aapke haath mein hoga.

**Agle topic mein (Topic 2: Mid-point Theorem):** Kisi bhi triangle ki do sides ke beech ke points (midpoints) ko jodo, to jo line banti hai uske baare mein ek kamaal ki baat pata chalti hai. Aur iska proof bhi isi topic ke parallelogram theorems se nikalega.
