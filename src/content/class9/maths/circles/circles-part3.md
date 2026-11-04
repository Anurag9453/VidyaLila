# Chapter: Circles (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [circles-part2.md](circles-part2.md) se aage chalti hai.** (Topic 1 [circles.md](circles.md) mein hai.) Proofs mein [Congruence of Triangles](../congruence-of-triangles/congruence-of-triangles-part2.md) ke criteria aur [CPCT](../congruence-of-triangles/congruence-of-triangles.md) kaam aayenge.
> **Topics covered in this file:**
> 3. Congruency of Circles and Properties of Chords

---

# Topic 3: Congruency of Circles aur Chords ki Properties

Topic 2 mein Pinky ke saath mele ke giant wheel par humne arc ko naapna seekha: arc ki degree measure wahi hoti hai jo centre par uska angle hota hai, aur minor arc ke saath major arc milkar 360° banata hai. Saath mein segments bhi dekhe.

Ab do naye sawaal:
1. Do circles (ya do arcs) **"bilkul ek jaise"** kab kehlate hain?
2. Circle ke andar kheenchi **chords** ke kya raaz hain? Kaunsi chord centre se kitni door hai, aur kyun?

Is topic mein hum ye sab **prove** karenge, aur proofs mein Congruence chapter ke criteria (SAS, SSS, RHS) hi hamare auzaar honge.

---

## Nani ki rasoi ki kahani

Pinky chhuttiyon mein Nani ke ghar gayi. Rasoi mein Nani rotiyan bana rahi thi.

**Pehli baat:** Rasoi mein do steel ki thaliyan rakhi thin. Pinky ne ek thali doosri ke upar rakhi. Upar wali thali neeche wali ko **poora dhak** gayi. Ek bhi kona bahar nahi nikla. Nani boli, "Dono ek hi naap ki hain, isliye."

**Doosri baat:** Nani ne ek gol roti ko chaaku se seedhi lakeeron mein kaata, taaki Pinky ke chhote bhai ke liye patti-patti tukde ban jayein. (Topic 1 wali roti yaad hai? Roti par kinaare se kinaare tak ka seedha cut ek **chord** tha.) Pinky ne dekha:
- Jo kaat **beech se** guzri, wo sabse lambi thi.
- Jo kaat **kinaare ke paas** thi, wo chhoti thi.
- Aur jo do kaatein **barabar lambi** thin, wo dono beech se **barabar door** thin.

Pinky ne poocha, "Nani, ye hamesha aisa hi hota hai?"

Nani hansi, "Ye sawaal apni maths teacher se poochna."

Thaliyon wali baat **congruent circles** hai, aur roti ki kaatein **chords** hain. Is topic mein hum Pinky ke sawaal ka pakka jawab, proof ke saath, nikalenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Congruent circles** | Aise circles jo ek doosre ko poora dhak lein, yaani **radius barabar** | Do ek jaisi thaliyan |
| **Congruent arcs** | Aise arcs jo ek doosre par rakhne se poora dhak lein | Same circle mein 60° ke do arcs |
| **Subtend** | Chord ya arc ke dono siron ko kisi point se jodne par jo angle bane, wo us point par "subtend" hota hai | Chord AB centre O par ∠AOB subtend karti hai |
| **Perpendicular bisector** | Wo line jo kisi segment ko 90° par kaate aur beech se (do barabar hisson mein) kaate | Chord ka perpendicular bisector |
| **Equidistant** | Barabar doori par | Do chords centre se 5 cm, 5 cm door |
| **Chord ki centre se doori** | Centre se chord par daala gaya **perpendicular** ki lambai | OM, jahan OM ⊥ AB |

---

## Part A: Congruent Circles

Congruence chapter ke Topic 1 mein humne dekha tha ki do figures congruent tab hoti hain jab ek ko doosri par rakhne se wo **bilkul dhak** jaye (superposition). Circles par bhi yahi baat lagti hai.

Ek circle ki shakal uske **radius** se hi tay hoti hai. Isliye:

> **Do circles congruent hote hain agar aur sirf agar unke radius barabar hon.**

| Circle 1 | Circle 2 | Congruent? |
|---|---|---|
| radius 4 cm | radius 4 cm | Haan |
| radius 4 cm | diameter 8 cm | Haan (diameter 8 matlab radius 4) |
| radius 4 cm | radius 5 cm | Nahi |

Dhyan do: centre kahan hai, isse farak nahi padta. Ek thali mez par ho aur doosri almaari mein, phir bhi dono congruent hain.

---

## Part B: Congruent Arcs

Do arcs congruent tab hain jab ek ko doosre par rakhne se wo poora dhak jaye.

> **Ek hi circle (ya congruent circles) mein, do arcs congruent hote hain agar unki degree measure barabar ho.**

Topic 2 mein dekha tha ki arc ki degree measure = centre par uska angle. To ek hi circle mein 60° ka arc aur doosra 60° ka arc, dono congruent hain.

### Ek zaroori shart

"Ek hi circle ya congruent circles" wali shart bahut zaroori hai.

Socho ek chhoti katori aur ek badi thali. Dono par 60° ka arc lo. Degree barabar hai, par thali wala arc **zyada lamba** hai. Ek doosre ko dhak nahi sakte.

> **Alag-alag size ke circles mein barabar degree ke arcs congruent NAHI hote.**

---

## Part C: Chords aur centre ke angles

Ab Pinky ke roti wale sawaalon ki taraf chalte hain.

### Theorem: Barabar chords centre par barabar angles banati hain

```
              A         C
               \       /
                \     /
                 \   /
                   O
                 /   \
                /     \
               B       D
   (AB aur CD do barabar chords, O centre.
    OA, OB, OC, OD sab radius hain.)
```

**Given:** Circle ka centre O hai. AB aur CD do chords hain, AB = CD.
**To prove:** ∠AOB = ∠COD

**Proof:** ΔAOB aur ΔCOD mein:

| Statement | Reason |
|---|---|
| OA = OC | Ek hi circle ke radius |
| OB = OD | Ek hi circle ke radius |
| AB = CD | Given |
| ΔAOB ≅ ΔCOD | SSS criterion |
| ∠AOB = ∠COD | CPCT |

**Hence proved.**

### Converse (ulta): Centre par barabar angles banane wali chords barabar hoti hain

**Given:** ∠AOB = ∠COD
**To prove:** AB = CD

**Proof:** ΔAOB aur ΔCOD mein:

| Statement | Reason |
|---|---|
| OA = OC | Radius |
| ∠AOB = ∠COD | Given |
| OB = OD | Radius |
| ΔAOB ≅ ΔCOD | SAS criterion (angle dono sides ke **beech** mein hai) |
| AB = CD | CPCT |

**Hence proved.**

Dhyan do: 'Barabar chords, centre par barabar angle' theorem mein **SSS** laga, aur uske converse mein **SAS**. Dono mein radius wali do baraabariyan muft mein mil jaati hain.

### Chords aur arcs ka rishta (halki si baat)

Topic 2 mein dekha tha ki arc ki degree = centre ka angle. Ab:
- Barabar chords → barabar centre ke angles ('Barabar chords, centre par barabar angle' theorem) → barabar (minor) arcs.
- Barabar arcs → barabar centre ke angles → barabar chords (uska converse).

> **Ek hi circle mein: chords barabar ⇔ unke (minor) arcs congruent.**

**Example:** Ek circle mein chords AB = CD hain aur ∠AOB = 70°. To ∠COD = **70°** ('Barabar chords, centre par barabar angle' theorem), aur arc CD ki degree measure bhi **70°** hogi.

---

## Part D: Centre se chord par perpendicular

Roti ki kaat ko yaad karo. Agar centre se kaat par seedha (90° par) dhaga girao, to wo kaat ko kahan chhuega? Theek beech mein!

### Theorem: Centre se chord par daala gaya perpendicular chord ko bisect karta hai

```
              O
              |
              |
     A--------M--------B
   (OM ⊥ AB. Dikhana hai AM = MB.
    OA aur OB radius hain.)
```

**Given:** Circle ka centre O, chord AB, aur OM ⊥ AB.
**To prove:** AM = MB

**Proof:** OA aur OB jodo. ΔOMA aur ΔOMB mein:

| Statement | Reason |
|---|---|
| ∠OMA = ∠OMB = 90° | Given (OM ⊥ AB) |
| OA = OB | Radius (ye hypotenuse hain) |
| OM = OM | Common side |
| ΔOMA ≅ ΔOMB | RHS criterion |
| AM = MB | CPCT |

**Hence proved.**

### Converse (ulta): Centre ko chord ke midpoint se jodne wali line chord par perpendicular hoti hai

**Given:** M chord AB ka midpoint hai (AM = MB).
**To prove:** OM ⊥ AB

**Proof:** OA aur OB jodo. ΔOMA aur ΔOMB mein:

| Statement | Reason |
|---|---|
| OA = OB | Radius |
| AM = MB | Given |
| OM = OM | Common |
| ΔOMA ≅ ΔOMB | SSS criterion |
| ∠OMA = ∠OMB | CPCT |
| ∠OMA + ∠OMB = 180° | Linear pair ([Lines and Angles Topic 2](../lines-and-angles/lines-and-angles-part2.md)) |
| 2∠OMA = 180°, yaani ∠OMA = 90° | Upar ki do lines se |
| OM ⊥ AB | ∠OMA = 90° |

**Hence proved.**

> **Ek line mein yaad rakho:** centre se chord tak ka **perpendicular** chord ko **aadha** karta hai, aur centre se chord ke **beech** tak ki line chord par **perpendicular** hoti hai.

### Chord ki centre se doori

'Centre se perpendicular chord ko bisect karta hai' theorem se ek bahut kaam ka tarika nikalta hai. Chord AB, centre O, aur OM ⊥ AB lo. Tab ΔOMA ek **right triangle** hai:
- Hypotenuse = OA = **radius (r)**
- Ek side = AM = **aadhi chord**
- Doosri side = OM = **chord ki centre se doori (d)**

Pythagoras theorem (jo pichhli classes mein padha tha) se:

> **r² = (aadhi chord)² + d²**

Bas yahi ek formula is topic ke saare numericals solve karta hai.

---

## Part E: Teen points se ek hi circle

### Sawaal

- **Ek point** se kitne circles guzar sakte hain? **Anginat** (us point ke chaaron taraf jitne chaho).
- **Do points** A aur B se? Ye bhi **anginat**. Har circle ka centre AB ke perpendicular bisector par kahin bhi ho sakta hai.
- **Teen points** jo ek seedh mein na hon (non-collinear)? Yahan jawab hai: **sirf ek!**

### Theorem: Teen non-collinear points se ek aur sirf ek circle guzarta hai

**Given:** A, B, C teen points jo ek line par nahi hain.
**To prove:** A, B, C se ek aur sirf ek circle guzarta hai.

**Construction:**
1. AB ka perpendicular bisector kheencho (line PQ).
2. BC ka perpendicular bisector kheencho (line RS).
3. Dono jahan milein, us point ko O kaho.

```
            A
           / \
          /   \
         /  O  \
        /       \
       B---------C
   (O = AB aur BC ke perpendicular bisectors ka milan)
```

**Proof (seedhe shabdon mein):**

**Step 1: Perpendicular bisector par har point dono siron se barabar door hota hai.**
Maan lo AB ka midpoint M hai aur O perpendicular bisector par hai. ΔOMA aur ΔOMB mein: AM = MB, ∠OMA = ∠OMB = 90°, OM common, to SAS se ΔOMA ≅ ΔOMB, aur CPCT se **OA = OB**.

**Step 2:** Isi tarah O, BC ke perpendicular bisector par bhi hai, to **OB = OC**.

**Step 3:** OA = OB = OC. To O ko centre aur OA ko radius lekar circle kheencho. Ye **A, B aur C teeno se** guzrega. Yaani ek circle to zaroor hai.

**Step 4: Sirf ek kyun?** Koi bhi aisa circle jo A, B, C se guzre, uska centre A aur B se barabar door hoga (dono radius hain), to wo AB ke perpendicular bisector par hoga. Isi tarah wo BC ke perpendicular bisector par bhi hoga. Do alag lines zyada se zyada **ek point** par milti hain ([Euclid chapter, 'Do alag lines ka zyada se zyada ek common point' theorem](../euclids-geometry/euclids-geometry-part4.md)). To centre sirf O ho sakta hai, aur radius OA. Yaani **circle sirf ek hai**.

**Hence proved.**

### Ye O jaana-pehchana hai!

[Triangles chapter ke Topic 2](../triangles/triangles-part2.md) mein dekha tha ki triangle ki sides ke perpendicular bisectors jahan milte hain, wo **circumcentre** hai. Yahan O bilkul wahi hai. Aur jo circle hamne banaya, wo ΔABC ka **circumcircle** hai.

### Teen collinear points ka kya?

Agar A, B, C ek hi line par hon, to AB aur BC ke perpendicular bisectors **parallel** honge (dono us line par perpendicular hain). Parallel lines kabhi nahi miltin. To koi centre nahi milega, aur **koi circle A, B, C teeno se nahi guzar sakta.**

---

## Part F: Barabar chords aur centre se doori

Ab Pinky ki teesri baat: "jo do kaatein barabar lambi thin, wo beech se barabar door thin."

### Theorem: Barabar chords centre se barabar door hoti hain

```
          A------L------B
                 |
                 O
                 |
          C------M------D
   (AB = CD. OL ⊥ AB, OM ⊥ CD.
    Dikhana hai OL = OM.)
```

**Given:** Circle ka centre O. AB = CD. OL ⊥ AB aur OM ⊥ CD.
**To prove:** OL = OM

**Proof:** OA aur OC jodo.

| Statement | Reason |
|---|---|
| AL = ½AB | 'Centre se perpendicular chord ko bisect karta hai' theorem (centre se perpendicular chord ko aadha karta hai) |
| CM = ½CD | 'Centre se perpendicular chord ko bisect karta hai' theorem |
| AL = CM | AB = CD (given), to unke aadhe bhi barabar (Euclid Axiom 7) |
| ∠OLA = ∠OMC = 90° | Given |
| OA = OC | Radius (hypotenuse) |
| ΔOLA ≅ ΔOMC | RHS criterion |
| OL = OM | CPCT |

**Hence proved.**

### Converse (ulta): Centre se barabar door chords barabar hoti hain

**Given:** OL ⊥ AB, OM ⊥ CD, aur OL = OM.
**To prove:** AB = CD

**Proof:**

| Statement | Reason |
|---|---|
| ∠OLA = ∠OMC = 90° | Given |
| OA = OC | Radius (hypotenuse) |
| OL = OM | Given |
| ΔOLA ≅ ΔOMC | RHS criterion |
| AL = CM | CPCT |
| AB = 2AL aur CD = 2CM | 'Centre se perpendicular chord ko bisect karta hai' theorem |
| AB = CD | Barabar cheezon ke double barabar (Euclid Axiom 6) |

**Hence proved.**

> Ye dono theorems **congruent circles** mein bhi sach hain (do alag thaliyan, par radius barabar).

### Ek mazedaar extra baat: lambi chord centre ke paas

Formula r² = (aadhi chord)² + d² dekho. r fixed hai. To:
- Aadhi chord **badi** → d **chhota** (centre ke **paas**).
- Aadhi chord **chhoti** → d **bada** (centre se **door**).

Radius 10 cm ke circle mein:

| Chord | Aadhi chord | d = √(100 − aadhi²) |
|---|---|---|
| 20 cm (diameter) | 10 | 0 (centre se hi guzarti hai) |
| 16 cm | 8 | 6 cm |
| 12 cm | 6 | 8 cm |

Isiliye roti ki sabse lambi kaat beech se guzarti hai. **Diameter sabse lambi chord hai.** Pinky ka sawaal hal ho gaya!

---

## Part G: Solved numerical examples

(Inme Pythagoras theorem use hota hai, jo pichhli classes mein padha tha.)

**Example 1:** Radius 10 cm ke circle mein 16 cm ki chord hai. Centre se uski doori nikalo.

Aadhi chord = 8 cm, r = 10 cm.
d² = r² − 8² = 100 − 64 = 36
**d = 6 cm**

Jaanch: 6² + 8² = 36 + 64 = 100 = 10² ✅

**Example 2:** Radius 13 cm ke circle mein ek chord centre se 5 cm door hai. Chord ki lambai nikalo.

(Aadhi chord)² = 13² − 5² = 169 − 25 = 144
Aadhi chord = 12 cm
**Chord = 24 cm**

Jaanch: 12² + 5² = 144 + 25 = 169 = 13² ✅

**Example 3:** Ek circle mein 8 cm ki chord centre se 3 cm door hai. Radius nikalo.

Aadhi chord = 4 cm.
r² = 4² + 3² = 16 + 9 = 25
**r = 5 cm**

**Example 4:** Radius 17 cm ke circle mein 30 cm ki chord hai. Centre se doori?

Aadhi chord = 15. d² = 289 − 225 = 64. **d = 8 cm**

Jaanch: 8² + 15² = 64 + 225 = 289 = 17² ✅

**Example 5 (parallel chords, dono cases):** Radius 5 cm ke circle mein do parallel chords AB = 8 cm aur CD = 6 cm hain. Dono chords ke beech ki doori nikalo.

Pehle har chord ki centre se doori:
- AB: aadhi = 4, d₁² = 25 − 16 = 9, **d₁ = 3 cm**
- CD: aadhi = 3, d₂² = 25 − 9 = 16, **d₂ = 4 cm**

Ab do cases:

```
  Case 1: Ek hi taraf          Case 2: Ulti taraf

     ____C____D____               ____A____B____  (3 cm upar)
     __A________B__                    O
          O                       ____C____D____  (4 cm neeche)
```

- **Case 1 (centre ki ek hi taraf):** doori = 4 − 3 = **1 cm**
- **Case 2 (centre ki alag-alag taraf):** doori = 4 + 3 = **7 cm**

Agar question mein ye na bataya ho ki chords kis taraf hain, to **dono answers** likho.

**Example 6 (do circles ki common chord):** Radius 5 cm aur 3 cm ke do circles do points par milte hain, aur unke centres ke beech 4 cm ki doori hai. Common chord ki lambai nikalo.

Common chord AB ho, aur centres O₁ (radius 5) aur O₂ (radius 3). Line O₁O₂ chord AB ko M par 90° par kaatti hai (ye neeche practice Q7 mein prove karenge). Maan lo O₁M = x, to O₂M = 4 − x, aur AM = h.

- ΔO₁MA se: h² = 25 − x²
- ΔO₂MA se: h² = 9 − (4 − x)²

Dono barabar karo:
25 − x² = 9 − (16 − 8x + x²)
25 − x² = −7 + 8x − x²
25 = −7 + 8x
x = 4

To M theek O₂ par hai, aur h² = 25 − 16 = 9, yaani h = 3.
**Common chord = 2h = 6 cm**

Jaanch: chhote circle mein AM = 3 = uska radius, matlab chord chhote circle ka diameter hai. 6 = 2 × 3 ✅

---

## Part H: Proof wala sawaal

**Example 7:** Agar ek circle ki do chords ek doosre ko kaatein, aur unke kaatne wale point se guzarne wale diameter ke saath barabar angles banayein, to prove karo ki dono chords barabar hain.

```
         C               A
            \         /
               \   /
     P-----------E-----O-----Q   (PQ diameter)
               /   \
            /         \
         B               D
  (Chords AB aur CD, E par kaatti hain.
   ∠AEQ = ∠DEQ diya hai: EA aur ED,
   diameter EQ ke dono taraf barabar jhuke hain.)
```

**Given:** Chords AB aur CD point E par kaatti hain. PQ diameter E se guzarta hai. ∠AEQ = ∠DEQ.
**To prove:** AB = CD

**Construction:** O se OL ⊥ AB aur OM ⊥ CD daalo.

**Proof:** ΔOLE aur ΔOME mein:

| Statement | Reason |
|---|---|
| ∠OLE = ∠OME = 90° | Construction |
| ∠LEO = ∠MEO | Given (dono chords diameter ke saath barabar angle banati hain) |
| OE = OE | Common |
| ΔOLE ≅ ΔOME | AAS criterion |
| OL = OM | CPCT |
| AB = CD | 'Barabar chords centre se barabar doori par' theorem ka converse (centre se barabar door chords barabar hoti hain) |

**Hence proved.**

---

## Aam galtiyan (bachke rehna)

**Galti 1: Pythagoras mein poori chord daal dena**
r² = (**aadhi** chord)² + d². Example 1 mein 16² lagaoge to 100 − 256 negative aa jayega. Pehle chord ko 2 se divide karo.

**Galti 2: Chord ki doori ko centre se chord ke siron tak naapna**
Chord ki centre se doori **perpendicular** se naapi jaati hai (OM ⊥ AB). OA to radius hai, doori nahi.

**Galti 3: Kisi bhi point se daala perpendicular chord ko aadha karta hai, ye sochna**
Ye sirf **centre** se daale gaye perpendicular ke liye sach hai ('Centre se perpendicular chord ko bisect karta hai' theorem).

**Galti 4: Alag size ke circles mein barabar degree ke arcs ko congruent kehna**
60° ka arc katori par aur 60° ka arc thali par congruent nahi hain. Shart hai: ek hi circle ya congruent circles.

**Galti 5: Parallel chords mein sirf ek case likhna**
Jab tak question na bataye, **ek taraf** (d₂ − d₁) aur **alag taraf** (d₁ + d₂) dono answers likho.

**Galti 6: Teen collinear points se circle bana dena**
Teen points ek line par hon to koi circle teeno se nahi guzar sakta. 'Teen non-collinear points se ek hi circle' theorem sirf **non-collinear** points ke liye hai.

**Galti 7: 'Barabar chords, centre par barabar angle' theorem aur uske converse mein criterion mix karna**
Theorem (chords given, angles prove) mein **SSS**. Converse (angles given, chords prove) mein **SAS**. Jo given hai, use dekhkar criterion chuno.

---

## Quick Recap

- **Congruent circles:** radius barabar. Centre kahin bhi ho.
- **Congruent arcs:** ek hi circle (ya congruent circles) mein degree measure barabar. Alag size ke circles mein barabar degree ke arcs congruent nahi.
- **'Barabar chords, centre par barabar angle' theorem aur uska converse:** barabar chords ⇔ centre par barabar angles (SSS / SAS).
- **Ek hi circle mein:** chords barabar ⇔ (minor) arcs congruent.
- **'Centre se perpendicular chord ko bisect karta hai' theorem:** centre se chord par perpendicular, chord ko aadha karta hai (RHS).
- **Uska converse:** centre se chord ke midpoint tak ki line, chord par perpendicular hai (SSS + linear pair).
- **'Teen non-collinear points se ek hi circle' theorem:** teen non-collinear points se **ek aur sirf ek** circle. Centre = circumcentre.
- **'Barabar chords centre se barabar doori par' theorem aur uska converse:** barabar chords ⇔ centre se barabar doori (RHS).
- **Numericals ka formula:** r² = (aadhi chord)² + d².
- **Lambi chord centre ke paas.** Diameter sabse lambi chord hai (d = 0).

---

## Practice Questions

1. State whether each statement is true or false. Give a reason.
   (a) Two circles of radius 4 cm are congruent.
   (b) Any two arcs of 60° are congruent.
   (c) The perpendicular from the centre of a circle to a chord bisects the chord.
   (d) A circle can be drawn through three collinear points.

2. A chord of length 24 cm is drawn in a circle of radius 13 cm. Find the distance of the chord from the centre.

3. A chord of a circle of radius 10 cm is at a distance of 8 cm from the centre. Find the length of the chord.

4. A chord of length 8 cm is at a distance of 3 cm from the centre of a circle. Find the radius of the circle.

5. AB and CD are two parallel chords of a circle of radius 13 cm, with AB = 10 cm and CD = 24 cm. Find the distance between the chords if they lie (a) on the same side of the centre, (b) on opposite sides of the centre.

6. AB and CD are equal chords of a circle with centre O. If ∠AOB = 75°, find ∠COD. Give a reason.

7. Two circles intersect at two points A and B. Prove that the line joining their centres is the perpendicular bisector of the common chord AB.

8. Two circles of radii 10 cm and 17 cm intersect at two points, and their common chord is 16 cm long. Find the distance between their centres, if the centres lie on opposite sides of the common chord.

9. Prove that equal chords of congruent circles subtend equal angles at their centres.

### Answers

1. (a) **True ✅.** Radius barabar hai, to circles congruent hain.
   (b) **False ❌.** Ye sirf ek hi circle ya congruent circles mein sach hai. Alag size ke circles mein 60° ke arcs ki lambai alag hogi.
   (c) **True ✅.** Ye 'Centre se perpendicular chord ko bisect karta hai' theorem hai.
   (d) **False ❌.** Collinear points ke liye perpendicular bisectors parallel hote hain, kabhi nahi milte, to koi centre nahi milta.

2. Aadhi chord = 12. d² = 13² − 12² = 169 − 144 = 25. **d = 5 cm**
   Jaanch: 5² + 12² = 25 + 144 = 169 ✅

3. (Aadhi chord)² = 10² − 8² = 100 − 64 = 36, aadhi chord = 6. **Chord = 12 cm**

4. Aadhi chord = 4. r² = 4² + 3² = 25. **r = 5 cm**

5. AB ki doori: aadhi = 5, d₁² = 169 − 25 = 144, d₁ = 12 cm.
   CD ki doori: aadhi = 12, d₂² = 169 − 144 = 25, d₂ = 5 cm.
   (a) Ek hi taraf: 12 − 5 = **7 cm**
   (b) Alag taraf: 12 + 5 = **17 cm**

6. **∠COD = 75°.** Reason: 'Barabar chords, centre par barabar angle' theorem (barabar chords centre par barabar angles banati hain).

7. **Given:** Do circles, centres O₁ aur O₂, A aur B par milte hain.
   **To prove:** O₁O₂ line, AB ka perpendicular bisector hai.
   **Proof:** O₁A, O₁B, O₂A, O₂B jodo.

   | Statement | Reason |
   |---|---|
   | O₁A = O₁B | Pehle circle ke radius |
   | O₂A = O₂B | Doosre circle ke radius |
   | O₁O₂ = O₁O₂ | Common |
   | ΔO₁AO₂ ≅ ΔO₁BO₂ | SSS criterion |
   | ∠AO₁O₂ = ∠BO₁O₂ | CPCT |

   Ab maan lo O₁O₂ line AB ko M par kaatti hai. ΔAO₁M aur ΔBO₁M mein:

   | Statement | Reason |
   |---|---|
   | O₁A = O₁B | Radius |
   | ∠AO₁M = ∠BO₁M | Upar CPCT se mila |
   | O₁M = O₁M | Common |
   | ΔAO₁M ≅ ΔBO₁M | SAS criterion |
   | AM = BM | CPCT |
   | ∠AMO₁ = ∠BMO₁ | CPCT |
   | ∠AMO₁ + ∠BMO₁ = 180° | Linear pair |
   | ∠AMO₁ = 90° | Upar ki do lines se |

   AM = BM aur ∠AMO₁ = 90°, to O₁O₂, AB ka **perpendicular bisector** hai. **Hence proved.**

8. Common chord AB = 16, to aadhi chord AM = 8 (Q7 se M, AB ka midpoint hai aur O₁O₂ ⊥ AB).
   - Radius 10 wale circle se: O₁M² = 100 − 64 = 36, O₁M = 6 cm
   - Radius 17 wale circle se: O₂M² = 289 − 64 = 225, O₂M = 15 cm
   Centres alag taraf hain, to O₁O₂ = 6 + 15 = **21 cm**

9. **Given:** Do congruent circles, centres O aur O′. Pehle mein chord AB, doosre mein chord CD, AB = CD.
   **To prove:** ∠AOB = ∠CO′D

   | Statement | Reason |
   |---|---|
   | OA = O′C | Congruent circles ke radius barabar |
   | OB = O′D | Congruent circles ke radius barabar |
   | AB = CD | Given |
   | ΔAOB ≅ ΔCO′D | SSS criterion |
   | ∠AOB = ∠CO′D | CPCT |

   **Hence proved.**

---

Shabaash! Ab aap jaante ho ki roti ki sabse lambi kaat beech se kyun guzarti hai, aur barabar kaatein beech se barabar door kyun hoti hain. Har theorem ke peeche wahi purane dost hain: SSS, SAS, RHS aur CPCT. Bas Nani ki rasoi ko yaad rakho, baaki sab apne aap aa jayega.

**Agle topic mein (Topic 4):** Ek arc centre par jo angle banata hai, aur wahi arc circle ke kisi point par jo angle banata hai, dono ka kya rishta hai? Aur jab ek quadrilateral ke chaaron kone circle par hon, to uske angles mein kya khaas baat chhupi hoti hai?
