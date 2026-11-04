# Chapter: Circles (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [circles-part3.md](circles-part3.md) se aage chalti hai.** (Chapter ki shuruaat [circles.md](circles.md) se hai.) Proofs mein [Congruence of Triangles Topic 3](../congruence-of-triangles/congruence-of-triangles-part3.md) ka isosceles theorem, [Triangles Topic 2](../triangles/triangles-part2.md) ka exterior angle aur angle sum, aur [Quadrilaterals Topic 1](../quadrilaterals/quadrilaterals.md) ke results kaam aayenge.
> **Topics covered in this file:**
> 4. Angle Subtended by an Arc, and Cyclic Quadrilaterals

---

# Topic 4: Arc se bane Angles, aur Cyclic Quadrilaterals

Topic 3 mein Nani ki rasoi mein humne thaliyon se congruent circles samjhe, aur roti ki kaaton se chords ki properties dekhi thin: barabar chords centre par barabar angle banati hain, centre se chord par daala perpendicular chord ko aadha karta hai, aur teen non-collinear points se ek hi circle guzarta hai. Wahan humara dhyan **centre** par tha.

Ab ek naya sawaal: agar hum centre se hat kar **circle ki boundary par** khade ho jayein, to ek arc humein kitne angle par dikhega? Aur centre wale angle se uska kya rishta hai? Isi sawaal se do bade results nikalte hain, aur unse ek khaas quadrilateral, **cyclic quadrilateral**, ki property milti hai.

---

## Kuhu aur gol bagiche ka gate

Kuhu ko photography ka shauk hai. Uske colony mein ek **gol bagicha** hai, jiske kinare par chalne ka raasta bana hai. Bagiche ki boundary par ek **gate** hai, jiske do khambe A aur B hain.

Kuhu gate ki photo kheenchna chahti hai. Wo raaste par alag alag jagah khadi hoti hai: P par, Q par, R par. Har baar wo camera se dono khambon ke beech ka angle naapti hai.

```
                 P     Q
              .   *   *   .
           .                 .  R
         .                     *
        .           O           .
        .                       .
         .                     .
           A *-------------* B
                  (gate)
```

Use hairani hoti hai: **P, Q aur R, teeno jagah se angle bilkul barabar aata hai!** Chahe wo gate ke paas khadi ho ya door, jab tak wo gate ke **ek hi taraf wale bade hisse** par hai, khambe A aur B usse ek hi angle par dikhte hain.

Phir uske papa, jo engineer hain, bagiche ke beech ke fountain (centre O) par khade hote hain aur wahan se angle naapte hain. Wo angle Kuhu wale angle ka **theek double** nikalta hai.

Ye do baatein is topic ki jaan hain:
1. Centre par bana angle = boundary par bane angle ka **double**.
2. Ek hi segment mein bane saare angles **barabar** hote hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Arc ka centre par angle** | Arc ke dono siron ko centre se jodne par bana angle (Topic 2 ka central angle) | ∠AOB |
| **Arc ka circle par angle** | Arc ke dono siron ko circle ke **baaki hisse** ke kisi point se jodne par bana angle | ∠APB |
| **Inscribed angle** | Circle par bana aisa angle jiska vertex circle par ho aur arms chords hon | ∠APB |
| **Concyclic points** | Aise points jo ek hi circle par pade hon | A, B, C, D ek circle par |
| **Cyclic quadrilateral** | Aisa quadrilateral jiske chaaron vertices ek hi circle par hon | ABCD, sab circle par |

---

## Part A: Arc ka angle, centre par aur circle par

Topic 2 mein humne dekha tha ki arc ka **degree measure** uske **central angle** ke barabar hota hai. Ab dekhte hain ki wahi arc circle ke kisi aur point par kya angle banata hai.

Maan lo circle ka centre O hai aur PQ ek arc hai.
- P aur Q ko O se jodo. **∠POQ** arc PQ ka **centre par angle** hai.
- Circle ke **baaki hisse** par (yaani arc PQ par nahi, uske saamne wale hisse par) koi point A lo. P aur Q ko A se jodo. **∠PAQ** arc PQ ka **circle par angle** hai.

```
                A
              .*.
           .  / \  .
         .   /   \   .
        .   /  O  \   .
        .  /  / \  \  .
         ./  /   \  \.
          P*---------*Q
             (arc PQ neeche)
```

Dhyan rakho, point A **arc PQ ke upar nahi** hona chahiye. Wo circle ke **remaining part** par hona chahiye.

---

## Part B: Theorem — Centre wala angle double hota hai

> **Theorem:** Ek arc dwara **centre par bana angle**, circle ke **baaki hisse ke kisi bhi point par** bane angle ka **double** hota hai.
>
> ∠POQ = 2 ∠PAQ

### Proof (wo case jab centre O angle ke andar ho)

**Given:** Circle ka centre O. Arc PQ, centre par ∠POQ banata hai aur circle ke baaki hisse ke point A par ∠PAQ.

**To prove:** ∠POQ = 2∠PAQ

**Construction:** A ko O se jodo aur aage badhakar circle par point B tak le jao.

```
                A
              .*.
           .  /|\  .
         .   / | \   .
        .   /  O  \   .
        .  /  /|\  \  .
         ./  / | \  \.
          P*   |   *Q
               B
```

| Statement | Reason |
|---|---|
| 1. OA = OQ | Dono radius hain |
| 2. ∠OAQ = ∠OQA | Barabar sides ke saamne ke angles barabar ([Congruence Topic 3](../congruence-of-triangles/congruence-of-triangles-part3.md), Isosceles Triangle theorem) |
| 3. ∠BOQ = ∠OAQ + ∠OQA | ΔAOQ ka exterior angle = interior opposite angles ka sum ([Triangles Topic 2](../triangles/triangles-part2.md)) |
| 4. ∠BOQ = 2∠OAQ | Step 2 aur 3 se |
| 5. Isi tarah, ∠BOP = 2∠OAP | ΔAOP mein OA = OP lekar wahi steps |
| 6. ∠BOP + ∠BOQ = 2(∠OAP + ∠OAQ) | Step 4 aur 5 ko jodo |
| 7. ∠POQ = 2∠PAQ | ∠BOP + ∠BOQ = ∠POQ aur ∠OAP + ∠OAQ = ∠PAQ |

**Hence proved.**

### Baaki cases (sirf jhalak)

Ye theorem **har case** mein sach hai. Do aur cases hote hain:
- **Arc PQ major arc ho:** Tab centre par bana angle **reflex** hota hai (180° se zyada, [Lines and Angles Topic 1](../lines-and-angles/lines-and-angles.md) mein dekha tha). Phir bhi reflex ∠POQ = 2∠PAQ.
- **Centre O angle ke bahar ho:** Tab angles ko jodne ki jagah **ghatate** hain (∠BOQ − ∠BOP), par result wahi aata hai.

Teeno cases mein proof ka idea ek hi hai: **AO ko aage badhao, isosceles triangle aur exterior angle lagao.**

### Numbers se samjho

**Example 1:** Centre par angle ∠POQ = 100° hai. Circle par ∠PAQ kitna hoga?

∠PAQ = ½ × 100° = **50°**

**Example 2:** Circle par ∠PAQ = 35° hai. Centre par ∠POQ?

∠POQ = 2 × 35° = **70°**

**Example 3:** ∠BOC = 130°. Point A major arc par hai aur point D minor arc par. ∠BAC aur ∠BDC nikalo.

- A major arc par hai, to wo **minor arc BC** ka angle dekh raha hai. ∠BAC = ½ × 130° = **65°**
- D minor arc par hai, to wo **major arc BC** ka angle dekh raha hai. Us arc ka centre wala angle reflex hai: 360° − 130° = 230°. To ∠BDC = ½ × 230° = **115°**

**Jaanch:** 65° + 115° = 180° ✅. (Ye sanyog nahi hai. Part E mein iska raaz khulega.)

---

## Part C: Theorem — Ek hi segment ke angles barabar

Kuhu wali baat yaad karo: gate ke ek hi taraf, kahin bhi khade ho jao, angle barabar aata tha.

> **Theorem:** Ek hi segment mein bane angles barabar hote hain.

Topic 2 mein humne seekha tha ki ek chord circle ko do **segments** mein baantti hai. Agar A aur D dono ek hi segment mein hain, to:

**∠BAC = ∠BDC**

```
              A        D
           .  *        *  .
         .    |\      /|    .
        .     | \    / |     .
        .     |  \  /  |     .
        .     |   \/   |     .
        .     |   /\   |     .
        .     |  /  \  |     .
         .    | /    \ |    .
          .   |/      \|   .
            B *--------* C
   (A ko B, C se jodo; D ko B, C se jodo.
    ∠BAC aur ∠BDC dono chord BC ke upar wale segment mein hain.)
```

### Ye kyun sach hai?

Bahut aasan. 'Centre par angle = circle par angle ka double' theorem se:
- ∠BAC = ½ ∠BOC
- ∠BDC = ½ ∠BOC

Dono ek hi cheez ke aadhe hain, to **∠BAC = ∠BDC**. (Euclid ka Axiom 7: ek hi cheez ke aadhe barabar hote hain. [Euclid Topic 1](../euclids-geometry/euclids-geometry.md))

**Example 4:** A, B, C, D ek circle par hain, aur A, D chord BC ke ek hi taraf hain. ∠BAC = 40°. ∠BDC kitna hai?

Ek hi segment mein hain, to ∠BDC = **40°**.

---

## Part D: Semicircle ka angle 90° hota hai

Ye 'Centre par angle = circle par angle ka double' theorem ka sabse mashhoor nateeja hai.

Agar AB circle ka **diameter** hai, to arc AB ek **semicircle** hai. Topic 2 se, semicircle ka degree measure **180°** hai. Yaani centre par ∠AOB = 180° (ek seedhi line).

To circle par kisi bhi point C par:

**∠ACB = ½ × 180° = 90°**

```
               C
             . * .
          .   / \   .
        .    /   \    .
       .    /     \    .
       A *-----O-----* B
         (diameter AB)
```

> **Semicircle mein bana angle hamesha 90° hota hai.**

**Example 5:** AB diameter hai aur C circle par hai. ∠CAB = 35°. ∠CBA nikalo.

- ∠ACB = 90° (semicircle ka angle)
- ΔABC mein: 35° + 90° + ∠CBA = 180°
- **∠CBA = 55°**

**Jaanch:** 35 + 90 + 55 = 180 ✅

---

## Part E: Converse (halki jhalak) — Kab chaar points ek circle par hote hain?

'Same segment ke angles barabar' theorem ka **ulta** bhi sach hai:

> Agar do points A aur B ko jodne wala segment, line AB ke **ek hi taraf** ke do points C aur D par **barabar angle** banata hai, to **A, B, C, D concyclic** hote hain (ek hi circle par).

Yaani agar ∠ACB = ∠ADB ho aur C, D, AB ke ek hi taraf hon, to chaaron points ko ek circle se guzara ja sakta hai.

Is chapter mein hum iska proof nahi karenge, bas isse **use** karna seekhenge.

---

## Part F: Cyclic Quadrilateral

Ab Part B ke Example 3 wale raaz par aate hain.

**Cyclic quadrilateral** wo quadrilateral hai jiske **chaaron vertices ek hi circle par** hon.

```
              A
           .  *----------* B
         .   /             \ .
        .   /               \ .
        .  /                 \.
         D*-------------------* C
           .                .
              .   .   .
```

([Quadrilaterals Topic 1](../quadrilaterals/quadrilaterals.md) mein humne quadrilateral ke hisse aur angle sum 360° dekha tha.)

### Cyclic Quadrilateral theorem — Opposite angles ka sum 180°

> **Theorem:** Cyclic quadrilateral ke **opposite angles ka sum 180°** hota hai.
>
> ∠A + ∠C = 180° aur ∠B + ∠D = 180°

**Given:** ABCD ek cyclic quadrilateral hai.

**To prove:** ∠ABC + ∠ADC = 180° aur ∠BAD + ∠BCD = 180°

**Construction:** Diagonals AC aur BD kheencho.

| Statement | Reason |
|---|---|
| 1. ∠ACB = ∠ADB | Ek hi segment ke angles (chord AB, 'Same segment ke angles barabar' theorem) |
| 2. ∠BAC = ∠BDC | Ek hi segment ke angles (chord BC, 'Same segment ke angles barabar' theorem) |
| 3. ∠ACB + ∠BAC = ∠ADB + ∠BDC | Step 1 aur 2 jodo (Euclid Axiom 2) |
| 4. ∠ADB + ∠BDC = ∠ADC | D par dono angles milkar ∠ADC banate hain |
| 5. ∠ACB + ∠BAC = ∠ADC | Step 3 aur 4 se |
| 6. ∠ABC + ∠ACB + ∠BAC = ∠ABC + ∠ADC | Dono taraf ∠ABC jodo |
| 7. 180° = ∠ABC + ∠ADC | Left side ΔABC ka angle sum hai ([Triangles Topic 2](../triangles/triangles-part2.md)) |
| 8. ∠BAD + ∠BCD = 360° − 180° = 180° | Quadrilateral ka angle sum 360° ([Quadrilaterals Topic 1](../quadrilaterals/quadrilaterals.md)) |

**Hence proved.**

Ab Part B ke Example 3 ka raaz samajh aaya? A, B, D, C ek circle par the, to ABDC ek cyclic quadrilateral tha. Isliye ∠BAC + ∠BDC = 65° + 115° = 180° aaya.

### Cyclic Quadrilateral theorem ka converse — Ulta bhi sach hai

> **Theorem:** Agar kisi quadrilateral ke **opposite angles ka ek pair 180°** jode, to wo quadrilateral **cyclic** hota hai.

Isse hum check kar sakte hain ki koi quadrilateral circle mein "fit" hoga ya nahi.

**Example:** Har rectangle cyclic hota hai. Kyun? Rectangle ke har angle 90° hain, to ∠A + ∠C = 90° + 90° = 180°. Cyclic Quadrilateral theorem ke converse se rectangle cyclic hai.

### Exterior angle wali property

> Cyclic quadrilateral ki ek side aage badhao, to bana **exterior angle**, **interior opposite angle** ke barabar hota hai.

```
              A          B
              *----------*-------- E
             /            \
            /              \
           *----------------*
           D                C
```

ABCD cyclic hai aur AB ko E tak badhaya. To **∠CBE = ∠ADC**.

**Kyun?**
- ∠ABC + ∠CBE = 180° (linear pair, [Lines and Angles Topic 2](../lines-and-angles/lines-and-angles-part2.md))
- ∠ABC + ∠ADC = 180° (Cyclic Quadrilateral theorem)
- Dono mein ∠ABC hai, to **∠CBE = ∠ADC**

---

## Part G: Solved examples

**Example 6:** ABCD cyclic quadrilateral hai. ∠A = 70° aur ∠B = 95°. ∠C aur ∠D nikalo.

- ∠C = 180° − 70° = **110°**
- ∠D = 180° − 95° = **85°**

**Jaanch:** 70 + 95 + 110 + 85 = 360 ✅

**Example 7:** Cyclic quadrilateral ke do opposite angles (2x + 10)° aur (3x − 5)° hain. x aur dono angles nikalo.

(2x + 10) + (3x − 5) = 180
5x + 5 = 180
5x = 175
**x = 35**

Angles: 2(35) + 10 = **80°** aur 3(35) − 5 = **100°**

**Jaanch:** 80 + 100 = 180 ✅

**Example 8:** ABCD cyclic hai. AB ko E tak badhaya. ∠ADC = 105°. ∠CBE aur ∠ABC nikalo.

- ∠CBE = ∠ADC = **105°** (exterior angle property)
- ∠ABC = 180° − 105° = **75°**

**Example 9:** ABCD cyclic quadrilateral hai. ∠DBC = 55° aur ∠BAC = 45°. ∠BCD nikalo.

- ∠CAD = ∠DBC = 55° (chord CD ke ek hi segment ke angles)
- ∠BAD = ∠BAC + ∠CAD = 45° + 55° = 100°
- ∠BCD = 180° − 100° = **80°** (cyclic quadrilateral ke opposite angles)

**Example 10:** A, B, C, D ek circle par hain. Diagonals AC aur BD point E par milte hain. ∠BEC = 130° aur ∠ECD = 20°. ∠BAC nikalo.

- ΔCED mein ∠BEC ek exterior angle hai. To ∠BEC = ∠ECD + ∠EDC
- 130° = 20° + ∠EDC, to ∠EDC = 110°
- ∠EDC hi ∠BDC hai (E, BD par hai)
- ∠BAC = ∠BDC (chord BC ke ek hi segment ke angles) = **110°**

**Example 11 (proof):** Agar cyclic quadrilateral ke dono diagonals circle ke diameter hon, to wo rectangle hota hai.

| Statement | Reason |
|---|---|
| 1. AC diameter hai, to ∠ABC = 90° aur ∠ADC = 90° | Semicircle ka angle 90° |
| 2. BD diameter hai, to ∠BAD = 90° aur ∠BCD = 90° | Semicircle ka angle 90° |
| 3. ABCD ke chaaron angles 90° hain | Step 1 aur 2 |
| 4. ABCD rectangle hai | Quadrilateral jiske saare angles 90° hon (aur ye parallelogram bhi hai kyunki opposite angles barabar hain, [Quadrilaterals Topic 1](../quadrilaterals/quadrilaterals.md), 'Opposite angles barabar' theorem ka converse) |

**Hence proved.**

**Example 12 (proof):** Cyclic parallelogram hamesha rectangle hota hai.

| Statement | Reason |
|---|---|
| 1. ∠A = ∠C | Parallelogram ke opposite angles barabar ([Quadrilaterals Topic 1](../quadrilaterals/quadrilaterals.md), 'Opposite angles barabar' theorem) |
| 2. ∠A + ∠C = 180° | Cyclic quadrilateral (Cyclic Quadrilateral theorem) |
| 3. 2∠A = 180°, to ∠A = 90° | Step 1 aur 2 |
| 4. Parallelogram ka ek angle 90° ho to wo rectangle hai | Quadrilaterals Topic 1 (Part D) |

**Hence proved.**

---

## Aam galtiyan (bachke rehna)

**Galti 1: Ulta likh dena — circle wala angle double**
Centre wala angle **double** hota hai, circle wala **aadha**. ∠POQ = 2∠PAQ. Agar ∠PAQ = 40° hai, to ∠POQ = 80°, 20° nahi.

**Galti 2: Point ko arc ke upar hi le lena**
'Centre par angle = circle par angle ka double' theorem mein point A circle ke **baaki hisse** par hona chahiye. Agar A arc PQ ke upar hi ho, to wo doosra (major) arc dekh raha hota hai. Example 3 mein dekha: minor arc wale point D ka angle 115° tha, 65° nahi.

**Galti 3: Alag segments ke angles ko barabar maan lena**
'Same segment ke angles barabar' theorem sirf **ek hi segment** ke angles ke liye hai. Chord ke **alag taraf** ke angles barabar nahi hote; wo milkar 180° bante hain (Example 3).

**Galti 4: Kisi bhi quadrilateral ke opposite angles ko 180° maan lena**
Ye sirf **cyclic** quadrilateral ke liye sach hai. Ek aam parallelogram (jo rectangle na ho) ke opposite angles barabar hote hain, unka sum 180° nahi hota (jaise 70° + 70° = 140°).

**Galti 5: Adjacent angles ko 180° jodna**
Cyclic quadrilateral mein **opposite** angles (∠A aur ∠C) 180° jodte hain, paas wale (∠A aur ∠B) nahi.

**Galti 6: Semicircle ka angle 180° bolna**
Semicircle ka **arc** 180° ka hai (centre par). Par semicircle mein **bana angle** (circle par) 90° hota hai.

**Galti 7: Exterior angle ko galat angle se barabar karna**
Cyclic quadrilateral ka exterior angle **interior opposite** angle ke barabar hota hai, paas wale angle ke nahi. ∠CBE = ∠ADC (D, B ke saamne hai), ∠ABC ke nahi.

---

## Quick Recap

- **'Centre par angle = circle par angle ka double' theorem:** Arc ka centre par angle = circle ke baaki hisse par bane angle ka **double**. (∠POQ = 2∠PAQ)
- **'Same segment ke angles barabar' theorem:** Ek hi segment ke angles **barabar** hote hain.
- **Semicircle ka angle 90°** hota hai.
- **Uska converse:** Agar ek segment, ek hi taraf ke do points par barabar angle banaye, to chaaron points **concyclic** hote hain.
- **Cyclic quadrilateral:** chaaron vertices ek circle par.
- **Cyclic Quadrilateral theorem:** Cyclic quadrilateral ke **opposite angles ka sum 180°**.
- **Cyclic Quadrilateral theorem ka converse:** opposite angles ka ek pair 180° jode, to quadrilateral cyclic hai.
- **Exterior angle** = interior opposite angle (cyclic quadrilateral mein).

---

## Practice Questions

1. The angle subtended by an arc at the centre of a circle is 140°. Find the angle subtended by the same arc at a point on:
   (a) the major arc
   (b) the minor arc

2. AB is a diameter of a circle and C is a point on the circle. If ∠CAB = 28°, find ∠ABC.

3. In a cyclic quadrilateral ABCD, ∠A = 3x° and ∠C = (2x + 20)°. Find x and the measures of ∠A and ∠C.

4. A, B, C, D are points on a circle such that C and D lie on the same side of chord AB. If ∠ACB = 34°, find ∠ADB.

5. ABCD is a cyclic quadrilateral and side AB is produced to E. If ∠ADC = 120°, find ∠CBE and ∠ABC.

6. ABCD is a cyclic quadrilateral in which ∠DBC = 50° and ∠BAC = 35°. Find ∠BCD.

7. Prove that a cyclic rhombus is a square.

8. Prove that every rectangle is a cyclic quadrilateral.

9. State whether each statement is true or false. Give a reason.
   (a) The angle subtended by an arc at the centre is half the angle subtended at a point on the remaining part of the circle.
   (b) The angle in a semicircle is a right angle.
   (c) The opposite angles of every quadrilateral add up to 180°.
   (d) Angles in the same segment of a circle are equal.

### Answers

1. (a) Major arc par point minor arc ka angle dekhta hai: ½ × 140° = **70°**
   (b) Minor arc par point major arc ka angle dekhta hai. Reflex angle = 360° − 140° = 220°. To ½ × 220° = **110°**
   Jaanch: 70 + 110 = 180 ✅ (cyclic quadrilateral wali baat)

2. ∠ACB = 90° (semicircle ka angle). ΔABC mein: 28° + 90° + ∠ABC = 180°, to **∠ABC = 62°**

3. 3x + (2x + 20) = 180, to 5x = 160, **x = 32**
   ∠A = 3(32) = **96°**, ∠C = 2(32) + 20 = **84°**
   Jaanch: 96 + 84 = 180 ✅

4. C aur D chord AB ke ek hi segment mein hain. To **∠ADB = ∠ACB = 34°** ('Same segment ke angles barabar' theorem)

5. ∠CBE = ∠ADC = **120°** (exterior angle = interior opposite angle)
   ∠ABC = 180° − 120° = **60°** (linear pair, ya Cyclic Quadrilateral theorem)

6. ∠CAD = ∠DBC = 50° (chord CD ke ek hi segment ke angles)
   ∠BAD = ∠BAC + ∠CAD = 35° + 50° = 85°
   ∠BCD = 180° − 85° = **95°** (Cyclic Quadrilateral theorem)

7. **Given:** ABCD ek cyclic rhombus hai. **To prove:** ABCD square hai.

   | Statement | Reason |
   |---|---|
   | 1. ABCD parallelogram hai | Har rhombus parallelogram hota hai |
   | 2. ∠A = ∠C | Parallelogram ke opposite angles barabar ('Opposite angles barabar' theorem) |
   | 3. ∠A + ∠C = 180° | Cyclic quadrilateral (Cyclic Quadrilateral theorem) |
   | 4. ∠A = 90° | Step 2 aur 3 se: 2∠A = 180° |
   | 5. Rhombus ka ek angle 90° hai, to saare angles 90° hain | Parallelogram mein ek angle 90° ho to saare 90° (Quadrilaterals Topic 1) |
   | 6. ABCD square hai | Saari sides barabar (rhombus) aur saare angles 90° |

   **Hence proved.**

8. **Given:** ABCD ek rectangle hai. **To prove:** ABCD cyclic hai.

   | Statement | Reason |
   |---|---|
   | 1. ∠A = 90° aur ∠C = 90° | Rectangle ke saare angles 90° |
   | 2. ∠A + ∠C = 180° | Step 1 |
   | 3. ABCD cyclic hai | Opposite angles ka ek pair 180° (Cyclic Quadrilateral theorem ka converse) |

   **Hence proved.**

9. (a) **False** ❌. Centre wala angle **double** hota hai, aadha nahi.
   (b) **True** ✅. Semicircle ka arc 180° hai, to circle par angle ½ × 180° = 90°.
   (c) **False** ❌. Ye sirf **cyclic** quadrilateral ke liye sach hai. Ek aam parallelogram mein 70° + 70° = 140° bhi ho sakta hai.
   (d) **True** ✅. 'Same segment ke angles barabar' theorem.

---

## Chapter Wrap-up: Circles

| Topic | Kya seekha | Sabse zaroori baat |
|---|---|---|
| **1. Circle aur uske terms** | Circle ki definition, centre, radius, diameter, chord, arc, circumference, segment, sector, secant, tangent, concentric circles, point ki position | Point centre se d doori par: d < r andar, d = r circle par, d > r bahar |
| **2. Arc ka degree measure** | Central angle, minor aur major arcs, semicircle, segments aur alternate segments | Major arc = 360° − minor arc |
| **3. Congruent circles aur chord properties** | Congruent circles aur arcs, chords ke saare theorems (barabar chords, centre se perpendicular, teen points se ek circle, centre se doori) | Centre se chord par perpendicular chord ko aadha karta hai; barabar chords centre se barabar doori par |
| **4. Arc ke angles aur cyclic quadrilaterals** | Centre par angle ka double wala theorem, same segment ke angles, cyclic quadrilateral theorems, semicircle ka angle, exterior angle property | Centre wala angle double; cyclic quadrilateral ke opposite angles 180° |

---

Kuhu wali kahani yaad rakho: gate ke ek taraf kahin bhi khade ho jao, gate ek hi angle par dikhta hai, aur fountain se wahi gate double angle par. Bas yahi do baatein pakki ho gayin, to is topic ke saare sawaal inhi se nikal aate hain. Bahut badhiya kaam kiya aapne, poora Circles chapter khatam!
