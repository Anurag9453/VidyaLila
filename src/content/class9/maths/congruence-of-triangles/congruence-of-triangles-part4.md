# Chapter: Congruence of Triangles (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [congruence-of-triangles-part3.md](congruence-of-triangles-part3.md) se aage chalti hai.** (Topic 1 [congruence-of-triangles.md](congruence-of-triangles.md) mein, Topic 2 [congruence-of-triangles-part2.md](congruence-of-triangles-part2.md) mein hai.)
> **Topics covered in this file:**
> 4. Inequalities in a Triangle, and Distance Between a Point and a Line

---

# Topic 4: Triangle mein Inequalities, aur Point se Line ki Doori

Topic 3 mein Guddu ke jhoole se humne dekha ki jab triangle ki **do sides barabar** hon, to unke saamne ke **angles bhi barabar** hote hain (Isosceles Triangle theorem), aur ulta bhi sach hai (uska converse). Ab ek naya sawaal:

> Agar sides **barabar na hon**, to kya hoga? Badi side ke saamne bada angle aayega ya chhota?

Is topic mein hum "barabar" se aage badh kar "**bada aur chhota**" ki duniya mein jayenge. Aur end mein ek bahut kaam ki baat seekhenge: kisi point se ek line tak pahunchne ka **sabse chhota raasta** kaunsa hai.

---

## Park ki pagdandi ki kahani

Kabir ke ghar ke saamne ek bada sa park hai. Park ke kinare pakke raaste bane hain, jo ek kone se doosre kone tak park ke kinaron se ghoom kar jaate hain.

Par ek baat Kabir ne notice ki: park ke beech mein **ghaas par ek patli si pagdandi** ban gayi hai. Log pakka raasta chhod kar seedha ghaas ke beech se nikal jaate hain.

```
   Kabir ka ghar (A)
        *----------------------* B (park ka kona)
          `-.                  |
             `-.  pagdandi     |  pakka raasta
                `-. (shortcut) |
                   `-.         |
                      `-.      |
                         `-.   |
                            `-*
                              C (school gate)
```

Kyun? Kyunki sabko **bina sikhaye pata hai** ki A se B hote hue C jaane se, seedha A se C jaana **chhota** hai.

> **AB + BC > AC**

Ye triangle ki ek "inequality" (asamanta, yaani barabar na hona) hai. Triangles chapter ke Topic 1 mein humne ise Sonu ki tiliyon se dekha tha. Aaj hum ise **prove** karenge.

Aur ek doosri kahani. Kabir ke gaon mein ek seedhi nahar hai. Kisaan ko apne khet ke kuein (P) se nahar tak ek pipe daalna hai. Pipe mehnga hai, to wo sabse chhota pipe chahta hai. Kaunsi disha mein daale? Iska jawab bhi is topic ke end mein milega.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Inequality** | Do cheezon ka barabar na hona, ek badi aur ek chhoti | AC > AB |
| **Longest side** | Triangle ki sabse lambi side | Right triangle mein hypotenuse |
| **Perpendicular distance** | Point se line tak 90° par kheenchi gayi line ki lambai | Kuein se nahar tak seedha pipe |
| **Range of third side** | Teesri side kitni chhoti se kitni badi ho sakti hai | 5 aur 8 ho to 3 < x < 13 |

Yaad dilane ke liye: `>` ka matlab "se bada", `<` ka matlab "se chhota". Muh hamesha badi cheez ki taraf khulta hai.

---

## Part A: Badi side ke saamne bada angle

### Pehle activity

Ek triangle banao jiski sides bahut alag alag hon, jaise 3 cm, 5 cm aur 7 cm. Protractor se teeno angles naapo.

Tum dekhoge:
- 7 cm wali (sabse lambi) side ke saamne **sabse bada** angle hai.
- 3 cm wali (sabse chhoti) side ke saamne **sabse chhota** angle hai.

Ye coincidence nahi hai. Ye ek theorem hai.

### "Lambi side ke saamne bada angle" theorem

> **Agar triangle ki do sides barabar na hon, to badi side ke saamne wala angle bada hota hai.**

### Proof

**Given:** ΔABC mein AC > AB.
**To prove:** ∠ABC > ∠ACB (yaani ∠B > ∠C).

Dhyan do: AC ke saamne ∠B hai, aur AB ke saamne ∠C hai.

**Construction:** AC par ek point D lo aisa ki **AD = AB**. B ko D se jodo.

```
                A
               / \
              /   \
             /     \  D  (AD = AB)
            /    .--*
           /  .-'    \
          / .'        \
         /.'           \
        B---------------C
```

(AC lambi hai, to AB ke barabar tukda AD, AC ke andar hi aa jata hai.)

| Statement | Reason |
|---|---|
| 1. AD = AB | Construction |
| 2. ∠ABD = ∠ADB | ΔABD isosceles hai, barabar sides ke saamne ke angles barabar (Topic 3 ka theorem) |
| 3. ∠ADB > ∠DCB | ∠ADB, ΔBDC ka **exterior angle** hai, aur exterior angle har interior opposite angle se bada hota hai ([Triangles Topic 2](../triangles/triangles-part2.md)) |
| 4. ∠ADB > ∠ACB | ∠DCB aur ∠ACB ek hi angle hain (D, AC par hai) |
| 5. ∠ABD > ∠ACB | Step 2 aur 4 se |
| 6. ∠ABC > ∠ABD | D, AC par hai, to BD angle ABC ke andar hai. Poora hissa apne tukde se bada hota hai ([Euclid ka Axiom 5](../euclids-geometry/euclids-geometry.md)) |
| 7. ∠ABC > ∠ACB | Step 5 aur 6 se |

**Hence proved.**

Seedhi bhasha mein: ∠B ke andar ek "tukda" ∠ABD hai jo already ∠C se bada hai. To poora ∠B to aur bhi bada hoga.

---

## Part B: Ulta theorem: bade angle ke saamne badi side

### "Bade angle ke saamne lambi side" theorem

> **Kisi triangle mein bade angle ke saamne wali side lambi hoti hai.**

### Proof (teen hi rasta, do band)

**Given:** ΔABC mein ∠B > ∠C.
**To prove:** AC > AB.

AC aur AB ke beech sirf **teen hi possibilities** hain:
1. AC = AB
2. AC < AB
3. AC > AB

Pehle do ko jaanchte hain:

- **Agar AC = AB hota:** to isosceles theorem (Topic 3) se ∠B = ∠C hota. Par hume diya hai ∠B > ∠C. **Takraav.** Ye possibility band. ❌
- **Agar AC < AB hota:** to Part A wale theorem se, badi side AB ke saamne wala angle ∠C bada hota, yaani ∠C > ∠B. Ye bhi diye hue ∠B > ∠C se **takraata hai.** Ye bhi band. ❌

Sirf teesra rasta bacha: **AC > AB.** ✅

Ise **proof by contradiction** kehte hain (Euclid chapter ke [Topic 4](../euclids-geometry/euclids-geometry-part4.md) mein iska idea dekha tha): galat possibilities ko ek ek karke band kar do, jo bache wahi sach hai.

### Ek line mein dono theorems

> **Badi side ⟺ Bada saamne wala angle.**
> **Chhoti side ⟺ Chhota saamne wala angle.**

---

## Part C: Sabse lambi aur sabse chhoti side

In dono theorems se seedha nikalta hai:

- **Sabse bada angle** ke saamne **sabse lambi side**.
- **Sabse chhota angle** ke saamne **sabse chhoti side**.

**Yaad rakhne ki trick:** Side ka naam us angle ke **do baaki letters** se banta hai. ∠A ke saamne **BC**, ∠B ke saamne **CA**, ∠C ke saamne **AB**. (Missing letter wali trick, jo Triangles Topic 1 mein bhi thi.)

### Example 1

ΔABC mein ∠A = 50°, ∠B = 70°. Sabse lambi aur sabse chhoti side batao.

- Angle sum (Triangles Topic 2): ∠C = 180° − 50° − 70° = **60°**
- Angles: ∠A = 50° (sabse chhota), ∠C = 60°, ∠B = 70° (sabse bada)
- Sabse lambi side = ∠B ke saamne = **AC**
- Sabse chhoti side = ∠A ke saamne = **BC**
- Poora kram: **BC < AB < AC**

Jaanch: 50 < 60 < 70, aur unke saamne BC, AB, AC usi kram mein. ✅

### Example 2

ΔPQR mein PQ = 5 cm, QR = 7 cm, PR = 6 cm. Angles ko chhote se bade kram mein likho.

| Side | Lambai | Saamne wala angle |
|---|---|---|
| PQ | 5 cm | ∠R |
| PR | 6 cm | ∠Q |
| QR | 7 cm | ∠P |

Kram: **∠R < ∠Q < ∠P** ✅

### Example 3

Triangle ke angles 2x, 3x, 4x ke anupaat mein hain (∠A = 2x, ∠B = 3x, ∠C = 4x). Sabse lambi side kaunsi hai?

2x + 3x + 4x = 180° → 9x = 180° → x = 20°
Angles: ∠A = 40°, ∠B = 60°, ∠C = 80°.
Sabse bada ∠C, to sabse lambi side **AB**. Sabse chhota ∠A, to sabse chhoti side **BC**.

Jaanch: 40 + 60 + 80 = 180 ✅

### Example 4: Right triangle mein hypotenuse sabse lambi hai

**Given:** ΔABC mein ∠B = 90°.
**To prove:** AC sabse lambi side hai.

- ∠A + ∠C = 180° − 90° = 90° (angle sum)
- To ∠A aur ∠C dono **90° se chhote** hain.
- Matlab ∠B sabse bada angle hai.
- Sabse bade angle ke saamne sabse lambi side, to **AC (hypotenuse) sabse lambi hai.** ✅

### Example 5: Obtuse triangle

Bilkul isi tarah: obtuse angle 90° se bada hota hai, to baaki do angles ka sum 90° se kam hota hai. Isliye obtuse angle hi sabse bada hai, aur **uske saamne wali side sabse lambi** hai.

### Example 6

ΔPQR mein PQ > PR. QS aur RS, ∠Q aur ∠R ke bisectors hain, jo S par milte hain. Dikhao ki SQ > SR.

```
            P
           / \
          /   \
         /  S  \
        /  / \  \
       / /     \ \
      Q-----------R
```

| Statement | Reason |
|---|---|
| 1. PQ > PR | Given |
| 2. ∠R > ∠Q | Badi side PQ ke saamne ∠R hai (Part A) |
| 3. ½∠R > ½∠Q | Dono taraf aadha kiya |
| 4. ∠SRQ > ∠SQR | QS aur RS bisectors hain, to ∠SRQ = ½∠R aur ∠SQR = ½∠Q |
| 5. SQ > SR | ΔSQR mein bade angle ∠SRQ ke saamne SQ hai (Part B) |

**Hence proved.**

---

## Part D: Triangle Inequality ka proof

Triangles chapter ke [Topic 1](../triangles/triangles.md) mein humne Sonu ki tiliyon se dekha tha ki 3, 4, 8 se triangle nahi banta, kyunki 3 + 4 < 8. Wahan humne bas dekh kar maana tha. Ab Part A aur B ki madad se **prove** karte hain. Kabir ki pagdandi bhi isi se samjhegi.

### Triangle Inequality theorem

> **Triangle ki kinhi do sides ka sum, teesri side se bada hota hai.**

### Proof

**Given:** ΔABC.
**To prove:** BA + AC > BC.

**Construction:** BA ko A ke aage badhao, aur us par point D lo aisa ki **AD = AC**. D ko C se jodo.

```
        D
        |\
        | \
        |  \
        A   \       (AD = AC)
        |\   \
        | \   \
        |  \   \
        B---\---C
             \__/
```

(Seedhi baat: B se A, phir A se aage D. Yaani B, A, D ek line par hain aur BD = BA + AD.)

| Statement | Reason |
|---|---|
| 1. AD = AC | Construction |
| 2. ∠ADC = ∠ACD | ΔADC isosceles, barabar sides ke saamne barabar angles (Topic 3) |
| 3. ∠BCD > ∠ACD | A, B aur D ke beech hai, to CA angle BCD ke andar hai. Poora tukde se bada (Euclid ka Axiom 5) |
| 4. ∠BCD > ∠ADC | Step 2 aur 3 se |
| 5. ∠BCD > ∠BDC | ∠ADC aur ∠BDC ek hi angle hain |
| 6. BD > BC | ΔBCD mein bade angle ∠BCD ke saamne BD hai (Part B) |
| 7. BA + AD > BC | BD = BA + AD |
| 8. BA + AC > BC | AD = AC (Step 1) |

**Hence proved.**

Isi tarah AB + BC > AC aur BC + CA > AB bhi sach hain. Teeno jodiyon ke liye.

### Do sides ka difference

Triangle inequality se ek aur baat nikalti hai:

> **Triangle ki kinhi do sides ka difference, teesri side se chhota hota hai.**

Kyun? Maan lo sides a, b, c hain aur b ≥ c. Triangle inequality se b < a + c. Dono taraf se c ghatao: **b − c < a.** ✅

### Teesri side ki range

Agar do sides pata hon, to teesri side kitni ho sakti hai?

> **(Badi − Chhoti) < Teesri side < (Badi + Chhoti)**

**Example 7:** Do sides 5 cm aur 8 cm hain. Teesri side x ki range?
- x < 8 + 5 = 13
- x > 8 − 5 = 3
- **3 < x < 13** (cm mein)

Jaanch: x = 3 lo to 5 + 3 = 8, jo 8 se bada nahi, to triangle nahi banega. x = 13 lo to 5 + 8 = 13, wo bhi nahi. Beech ki koi bhi value, jaise 7, chalegi: 5 + 7 > 8, 5 + 8 > 7, 7 + 8 > 5. ✅

**Example 8:** Kya 6 cm, 6 cm, 13 cm se triangle banega?
Do chhoti sides ka sum: 6 + 6 = 12, jo 13 se **chhota** hai. **Nahi banega.** ❌

Shortcut: sirf **do chhoti sides ka sum** dekho. Agar wo sabse badi side se bada hai, to baaki do jodiyan apne aap sahi hongi.

### Example 9: Quadrilateral ki diagonals

ABCD ek quadrilateral (chaar sides wali shape) hai. Dikhao ki **AB + BC + CD + DA > AC + BD.**

```
        A---------B
        | \     / |
        |   \ /   |
        |   / \   |
        | /     \ |
        D---------C
```

Diagonals AC aur BD quadrilateral ko chaar triangles mein baant deti hain. Har triangle mein inequality lagao:

| Triangle | Inequality |
|---|---|
| ΔABC | AB + BC > AC |
| ΔADC | AD + DC > AC |
| ΔABD | AB + AD > BD |
| ΔBCD | BC + CD > BD |

Chaaron ko jodo:
2AB + 2BC + 2CD + 2DA > 2AC + 2BD

Do se divide karo:
**AB + BC + CD + DA > AC + BD** ✅

(Yaani quadrilateral ka perimeter uski dono diagonals ke sum se bada hota hai.)

### Example 10: Andar ka point

P, ΔABC ke andar ek point hai. Dikhao ki **AB + AC > PB + PC.**

**Construction:** BP ko aage badhao, wo AC ko Q par kaatega.

```
            A
           / \
          /   \
         /     Q
        /   P / \
       /   / /   \
      /  /  /     \
     B-------------C
```

| Statement | Reason |
|---|---|
| 1. AB + AQ > BQ | ΔABQ mein triangle inequality |
| 2. AB + AQ > BP + PQ | BQ = BP + PQ (P, BQ par hai) |
| 3. PQ + QC > PC | ΔPQC mein triangle inequality |
| 4. AB + AQ + PQ + QC > BP + PQ + PC | Step 2 aur 3 ko jodo |
| 5. AB + AQ + QC > BP + PC | Dono taraf se PQ hatao |
| 6. AB + AC > PB + PC | AQ + QC = AC (Q, AC par hai) |

**Hence proved.**

---

## Part E: Point se line ki doori

### Kisaan ka pipe

Ab kahani wale kisaan ke paas wapas chalte hain. Kuan P par hai, aur nahar ek seedhi line l hai. Pipe kahan se kahan daale?

```
                 P  (kuan)
                /|\
               / | \
              /  |  \
             /   |   \
     -------N----M----K-------  l (nahar)
                 ⊥
```

Kisaan P se nahar tak kai raaste soch sakta hai: PN, PM, PK... Inme **PM** wo hai jo nahar par **90°** (perpendicular) bana raha hai.

> **Point se line tak kheenche gaye saare line segments mein, perpendicular sabse chhota hota hai.**

Is perpendicular ki lambai ko hi **point ki line se doori** (distance) kehte hain.

### Proof

**Given:** Point P line l par nahi hai. PM ⊥ l (M, l par hai). N, l par koi aur point hai (N ≠ M).
**To prove:** PN > PM.

| Statement | Reason |
|---|---|
| 1. ∠PMN = 90° | PM ⊥ l |
| 2. ∠PNM < 90° | ΔPMN mein ∠M = 90°, to baaki do angles ka sum 90° (angle sum), to ∠PNM 90° se chhota |
| 3. ∠PMN > ∠PNM | Step 1 aur 2 se |
| 4. PN > PM | Bade angle ∠PMN ke saamne PN hai (Part B) |

**Hence proved.**

(Ye Example 4 jaisa hi hai: ΔPMN ek right triangle hai, aur PN uska hypotenuse, jo sabse lamba hota hai.)

### Zaroori baatein

- Kisaan ko pipe **PM** ki disha mein daalna chahiye, yaani nahar par seedha 90° par.
- Agar point **line ke upar hi ho**, to doori **0** hai.
- "Point se line ki doori" ka matlab hamesha **perpendicular** doori hota hai, koi tirchhi doori nahi.

### Roz ki zindagi mein

- **Sadak paar karna:** Sabse kam chalna ho to sadak ko **seedha 90°** par paar karo. Tirchha paar karoge to zyada chalna padega (aur zyada der sadak par rahoge).
- **Ghar se main road tak gali:** Sabse chhoti gali wo hogi jo road par perpendicular ho.
- **Deewar se door khade hona:** "Deewar se 2 metre door" ka matlab hai seedha 90° par naapi gayi doori.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Side ko galat angle ke saamne maan lena**
∠A ke saamne BC hai, AB nahi. Missing letter trick lagao: ∠A ke saamne wo side jisme A nahi hai.

**Galti 2: Angle sum se teesra angle nikaalna bhool jana**
Example 1 mein sirf ∠A aur ∠B diye the. ∠C = 60° nikaale bina sabse lambi side nahi bata sakte.

**Galti 3: Triangle inequality mein galat jodi jodna**
6, 6, 13 mein 6 + 13 > 6 dekh kar "triangle banega" bol dena galat hai. Hamesha **do chhoti sides ka sum** sabse badi side se compare karo.

**Galti 4: "Barabar" ko "bada" maan lena**
2, 3, 5 mein 2 + 3 = 5 hai, bada nahi. **Triangle nahi banega**, teeno points ek line par aa jayenge.

**Galti 5: Range mein barabar ka chinh laga dena**
5 aur 8 ke liye range **3 < x < 13** hai, 3 ≤ x ≤ 13 nahi. Kinare wali values par triangle nahi banta.

**Galti 6: Point se line ki doori tirchhi naap lena**
Doori hamesha **perpendicular** se naapi jati hai, kyunki wahi sabse chhoti hoti hai.

**Galti 7: Proof mein reason chhod dena**
"∠ABD > ∠ACB" likha, par kyun? Har step ke saath reason likho: isosceles theorem, exterior angle, ya whole > part.

---

## Quick Recap

- **Badi side ke saamne bada angle** ("Lambi side ke saamne bada angle" theorem). Proof: lambi side par chhoti side jitna tukda kaato, isosceles triangle aur exterior angle lagao.
- **Bade angle ke saamne badi side** ("Bade angle ke saamne lambi side" theorem). Proof: contradiction, baaki do possibilities band karo.
- Sabse bada angle ⟺ sabse lambi side. Sabse chhota angle ⟺ sabse chhoti side.
- **Right triangle mein hypotenuse** aur **obtuse triangle mein obtuse angle ke saamne wali side** sabse lambi hoti hai.
- **Triangle inequality** (Triangle Inequality theorem): kinhi do sides ka sum > teesri side. Proof: ek side ko badhao aur isosceles triangle banao.
- Do sides ka **difference < teesri side**. Teesri side ki range: **(badi − chhoti) < x < (badi + chhoti)**.
- **Point se line ki doori** = perpendicular ki lambai. Perpendicular sabse chhota segment hai. Point line par ho to doori 0.

---

## Practice Questions

1. In ΔABC, ∠A = 65° and ∠B = 45°. Name the longest side and the shortest side of the triangle.

2. In ΔPQR, PQ = 6 cm, QR = 8 cm and PR = 5 cm. Arrange the angles of the triangle in ascending order.

3. Can a triangle be formed with sides of lengths 4 cm, 9 cm and 4 cm? Give a reason.

4. Two sides of a triangle are 6 cm and 10 cm. Between which two values must the third side lie?

5. Prove that in an obtuse-angled triangle, the side opposite the obtuse angle is the longest.

6. D is a point on side BC of ΔABC such that AD = AC. Show that AB > AD.

7. AD is a median of ΔABC. Prove that AB + BC + CA > 2AD.

8. State whether each statement is true or false. Give a reason.
   (a) A triangle can have sides 3 cm, 4 cm and 7 cm.
   (b) In ΔABC, if ∠A > ∠B, then BC > AC.
   (c) The perpendicular is the longest line segment that can be drawn from a point to a line.
   (d) If a point lies on a line, its distance from the line is zero.

### Answers

1. ∠C = 180° − 65° − 45° = **70°**.
   Sabse bada ∠C, to sabse lambi side **AB**.
   Sabse chhota ∠B, to sabse chhoti side **AC**.
   Jaanch: 65 + 45 + 70 = 180 ✅

2. Sabse chhoti side PR (5 cm), uske saamne ∠Q. Phir PQ (6 cm), uske saamne ∠R. Sabse lambi QR (8 cm), uske saamne ∠P.
   **∠Q < ∠R < ∠P**

3. Do chhoti sides: 4 + 4 = 8, jo 9 se chhota hai. **Nahi banega.** ❌

4. 10 − 6 < x < 10 + 6, yaani **4 cm < x < 16 cm**.

5. **Given:** ΔABC mein ∠B obtuse hai (∠B > 90°). **To prove:** AC sabse lambi side hai.
   | Statement | Reason |
   |---|---|
   | 1. ∠A + ∠B + ∠C = 180° | Angle sum property |
   | 2. ∠A + ∠C = 180° − ∠B < 90° | ∠B > 90° |
   | 3. ∠A < 90° < ∠B aur ∠C < 90° < ∠B | Step 2 se, dono 90° se chhote |
   | 4. ∠B sabse bada angle | Step 3 |
   | 5. AC sabse lambi side | Bade angle ke saamne badi side (Part B) |

6. ```
           A
          /|\
         / | \
        /  |  \
       B---D---C      (AD = AC)
   ```
   | Statement | Reason |
   |---|---|
   | 1. AD = AC | Given |
   | 2. ∠ADC = ∠ACD | Barabar sides ke saamne barabar angles (Topic 3) |
   | 3. ∠ADC > ∠ABD | ∠ADC, ΔABD ka exterior angle hai, interior opposite angle ∠ABD se bada |
   | 4. ∠ACB > ∠ABC | Step 2 aur 3 se (∠ACD = ∠ACB, ∠ABD = ∠ABC) |
   | 5. AB > AC | ΔABC mein bade angle ∠ACB ke saamne AB hai (Part B) |
   | 6. AB > AD | AC = AD (Step 1) |

7. D, BC ka midpoint hai (median ki definition, [Triangles Topic 2](../triangles/triangles-part2.md)).
   | Statement | Reason |
   |---|---|
   | 1. AB + BD > AD | ΔABD mein triangle inequality |
   | 2. AC + DC > AD | ΔADC mein triangle inequality |
   | 3. AB + AC + BD + DC > 2AD | Step 1 aur 2 jodo |
   | 4. AB + AC + BC > 2AD | BD + DC = BC |

8. (a) **False.** 3 + 4 = 7, jo 7 se bada nahi. Triangle nahi banega. ❌
   (b) **True.** ∠A ke saamne BC hai aur ∠B ke saamne AC. Bade angle ke saamne badi side. ✅
   (c) **False.** Perpendicular sabse **chhota** segment hota hai, lamba nahi. ❌
   (d) **True.** Point line par hi hai, to doori 0. ✅

---

Ye topic pehli baar mein thoda "proof-heavy" lag sakta hai, par sab ek hi chhoti si baat se nikalta hai: **badi side ke saamne bada angle, aur ulta bhi.** Kabir ki pagdandi aur kisaan ka pipe yaad rakhoge, to ye kabhi nahi bhoologe. Shabaash, aapne poora chapter kar liya!

---

## Chapter Wrap-up: Congruence of Triangles

| Topic | Kya seekha | Sabse zaroori baat |
|---|---|---|
| 1. Congruent figures aur congruent triangles | Congruent ka matlab, correspondence (kaunsa vertex kiske saath), CPCT | Congruent = bilkul ek jaisi shape aur size; sahi kram mein likhna zaroori |
| 2. Congruence ke criteria | Congruence relation, SAS, ASA, AAS, SSS, RHS, aur unse proofs | Paanch criteria mein se koi ek mile to triangles congruent; phir CPCT se baaki hisse barabar |
| 3. Isosceles triangle ke theorems | Barabar sides ⟺ barabar saamne ke angles, equilateral ke 60° angles, vertex angle ka bisector | Barabar sides ke saamne barabar angles, aur ulta bhi |
| 4. Inequalities aur point se line ki doori | Badi side ⟺ bada angle, triangle inequality ka proof, teesri side ki range, perpendicular sabse chhota | Badi side ke saamne bada angle; do sides ka sum teesri se bada; doori = perpendicular |
