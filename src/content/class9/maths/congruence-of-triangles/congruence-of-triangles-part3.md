# Chapter: Congruence of Triangles (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [congruence-of-triangles-part2.md](congruence-of-triangles-part2.md) se aage chalti hai.** (Topic 1 [congruence-of-triangles.md](congruence-of-triangles.md) mein hai.) Triangles chapter ke [Topic 1](../triangles/triangles.md) aur [Topic 2](../triangles/triangles-part2.md) mein kiye gaye do vaade yahan poore honge.
> **Topics covered in this file:**
> 3. Some Properties of a Triangle: Isosceles Triangle Theorems

---

# Topic 3: Some Properties of a Triangle (Isosceles Triangle Theorems)

Topic 2 mein Salma aapa darzi ki jhandiyon se humne congruence ke paanch criteria seekhe: SAS, ASA, AAS, SSS aur RHS, aur ye bhi ki AAA aur SSA dhokha dete hain. Saath mein Statement-Reason wale proofs bhi likhe. Ab tak humne in criteria ko sirf ye dikhane ke liye use kiya ki "do triangles congruent hain".

Is topic mein hum ek kadam aage jayenge. **Ab in criteria se triangle ki properties prove karenge.** Yaani congruence ek tool banega, jisse hum aisi baatein sabit karenge jo ab tak humne bas maan li thin.

---

## Ek vaada jo abhi tak adhoora hai

[Triangles chapter ke Topic 1](../triangles/triangles.md) mein humne do baatein **bina proof** ke maan li thin:

1. Isosceles triangle ke **base angles barabar** hote hain.
2. Equilateral triangle ke **teeno angles barabar** hote hain (aur [Topic 2](../triangles/triangles-part2.md) mein angle sum se har angle 60° nikla).

Wahan likha tha ki inka proof aage Congruence of Triangles chapter mein aayega. Wo waqt aa gaya hai. Is file mein dono ka proof milega.

---

## Jhoole ki kahani

Gaon ke bade neem ke ped par Guddu ke papa ne ek jhoola baandha. Ek hi daal ke ek point A se do rassiyan latkayi, aur neeche ek lakdi ka patta (seat) BC baandh diya.

```
             A  (daal par ek point)
            / \
           /   \
   rassi  /     \  rassi
         /       \
        /         \
       B-----------C
         lakdi ka patta (seat)
```

Papa ne dhyan rakha ki **dono rassiyan bilkul barabar lambi** hon: AB = AC.

Guddu ne dekha ki seat bilkul **seedhi (level)** latki hai. Na left jhuki, na right. Usne pucha, "Papa, ye seedhi kyun hai?"

Papa bole, "Kyunki dono rassiyan barabar hain. Agar ek rassi chhoti hoti, to seat ek taraf jhuk jaati. Barabar rassiyon ki wajah se rassi aur seat ke beech **dono taraf ka kona (angle) bhi barabar** hai. ∠B = ∠C."

Guddu ne socha, "Ye to dikh raha hai, par kya ise **prove** kar sakte hain?"

Haan! Topic 2 ke criteria se bilkul kar sakte hain. Yahi is topic ka pehla theorem hai.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Isosceles triangle** | Do sides barabar wala triangle (Triangles chapter mein dekha tha) | AB = AC |
| **Vertex angle** | Do barabar sides ke beech ka angle | AB = AC ho to ∠A |
| **Base** | Teesri side, jo barabar sides ke saamne hai | BC |
| **Base angles** | Base ke dono siron par bane angles | ∠B aur ∠C |
| **Converse** | Kisi baat ko ulta karke kehna | "Barabar sides → barabar angles" ka converse: "Barabar angles → barabar sides" |
| **Angle bisector** | Wo ray jo angle ko do barabar hisson mein baante ([Lines and Angles Topic 1](../lines-and-angles/lines-and-angles.md) mein dekha tha) | AD, ∠A ko baante |

---

## Part A: Isosceles Triangle Theorem (Barabar sides ke saamne ke angles barabar)

> **Isosceles Triangle theorem:** Isosceles triangle mein, barabar sides ke saamne wale angles barabar hote hain.

### Pehle samjho "saamne" ka matlab

```
            A
           / \
          /   \
         /     \
        B-------C
```

- Side **AB** ke saamne wala angle **∠C** hai (jis vertex ka letter AB mein nahi hai).
- Side **AC** ke saamne wala angle **∠B** hai.

To agar AB = AC, theorem kehta hai: **∠C = ∠B**. Yaani base angles barabar.

### Proof

**Given:** ΔABC mein AB = AC.

**To prove:** ∠B = ∠C.

**Construction:** ∠A ka bisector AD kheencho, jo BC ko D par mile.

```
              A
             /|\
            / | \
           /  |  \
          /   |   \
         /    |    \
        B-----D-----C

   ∠BAD = ∠CAD  (AD bisector hai)
```

**Proof:** ΔBAD aur ΔCAD mein:

| Statement | Reason |
|---|---|
| AB = AC | Given |
| ∠BAD = ∠CAD | AD, ∠A ka bisector hai (construction) |
| AD = AD | Common side |
| ∴ ΔBAD ≅ ΔCAD | SAS rule |
| ∴ ∠ABD = ∠ACD | CPCT |
| Yaani ∠B = ∠C | ∠ABD hi ∠B hai aur ∠ACD hi ∠C hai |

**Hence proved.**

Dhyan do ki SAS kyun lagta hai: angle ∠BAD, sides AB aur AD ke **beech** mein hai. Aur ∠CAD, sides AC aur AD ke beech mein. Topic 2 mein dekha tha ki SAS mein angle **included** (beech wala) hona chahiye.

Guddu ka sawaal hal ho gaya. Rassiyan barabar (AB = AC), to seat ke dono kone barabar (∠B = ∠C).

---

## Part B: Isosceles Triangle Theorem ka Converse (Ulti baat: barabar angles ke saamne ki sides barabar)

Ab sawaal ulta karte hain. Agar pata ho ki do **angles** barabar hain, to kya unke saamne ki **sides** bhi barabar hongi?

> **Isosceles Triangle theorem ka converse:** Kisi triangle ke barabar angles ke saamne wali sides barabar hoti hain.

Ye Isosceles Triangle theorem ka **converse** hai.

### Proof

**Given:** ΔABC mein ∠B = ∠C.

**To prove:** AB = AC.

**Construction:** ∠A ka bisector AD kheencho, jo BC ko D par mile. (Wahi figure jo upar hai.)

**Proof:** ΔABD aur ΔACD mein:

| Statement | Reason |
|---|---|
| ∠ABD = ∠ACD | Given (∠B = ∠C) |
| ∠BAD = ∠CAD | AD, ∠A ka bisector hai (construction) |
| AD = AD | Common side |
| ∴ ΔABD ≅ ΔACD | AAS criterion |
| ∴ AB = AC | CPCT |

**Hence proved.**

Yahan AAS kyun? Do angles (∠B aur ∠BAD) aur ek side AD hai. AD in dono angles ke beech wali side nahi hai (beech wali side to AB hoti). Isliye ye **AAS** hai, ASA nahi.

### Dono theorems ek saath

| Agar ye pata ho | To ye nikalta hai | Theorem |
|---|---|---|
| Do sides barabar | Unke saamne ke angles barabar | 7.2 |
| Do angles barabar | Unke saamne ki sides barabar | 7.3 |

Yaad rakhne ka tarika: **"Barabar side ↔ barabar saamne wala angle."** Dono taraf chalta hai.

---

## Part C: Vaada poora: Equilateral triangle ke angles

### Equilateral triangle ke teeno angles barabar hote hain

**Given:** ΔABC mein AB = BC = CA.

**To prove:** ∠A = ∠B = ∠C = 60°.

**Proof:**

| Statement | Reason |
|---|---|
| AB = AC | Given |
| ∴ ∠C = ∠B | Isosceles Triangle theorem (AB ke saamne ∠C, AC ke saamne ∠B) |
| AB = BC | Given |
| ∴ ∠C = ∠A | Isosceles Triangle theorem (AB ke saamne ∠C, BC ke saamne ∠A) |
| ∴ ∠A = ∠B = ∠C | Dono baaton se (Euclid ka Axiom 1: ek hi cheez ke barabar cheezein aapas mein barabar) |
| ∠A + ∠B + ∠C = 180° | Angle sum property ([Triangles Topic 2](../triangles/triangles-part2.md)) |
| 3∠A = 180°, ∴ ∠A = 60° | Teeno barabar hain |

**Hence proved.** Har angle **60°** hai.

Triangles chapter mein jo baat maan li thi ("teeno angles barabar hote hain"), wo ab Isosceles Triangle theorem se **prove** ho gayi. Dono vaade poore!

### Ulta bhi sach hai: teeno angles barabar → equilateral

**Given:** ΔABC mein ∠A = ∠B = ∠C.

| Statement | Reason |
|---|---|
| ∠A = ∠B | Given |
| ∴ BC = AC | Isosceles Triangle theorem ka converse (∠A ke saamne BC, ∠B ke saamne AC) |
| ∠B = ∠C | Given |
| ∴ AC = AB | Isosceles Triangle theorem ka converse (∠B ke saamne AC, ∠C ke saamne AB) |
| ∴ AB = BC = CA | Dono baaton se |

To jis triangle ke teeno angles barabar (har ek 60°) hon, wo **equilateral** hota hai.

---

## Part D: Isosceles triangle ki ek khaas line

Part A ke proof mein humne ΔBAD ≅ ΔCAD dikhaya tha. CPCT se humne sirf ∠B = ∠C nikala. Par CPCT se **aur bhi** baatein milti hain!

```
              A
             /|\
            / | \
           /  |  \
          /   |   \
         /    |    \
        B-----D-----C
```

ΔBAD ≅ ΔCAD se, CPCT:

1. **BD = CD.** Yaani D, BC ka midpoint hai. To AD ek **median** hai.
2. **∠ADB = ∠ADC.** Par ye dono ek linear pair bhi hain (BC ek seedhi line hai), to inka sum 180° hai ([Lines and Angles Topic 2](../lines-and-angles/lines-and-angles-part2.md)). Do barabar angles ka sum 180° ho to har ek **90°** hoga. To AD ⊥ BC, yaani AD ek **altitude** hai.
3. BD = CD aur AD ⊥ BC, dono saath mein. To AD, BC ka **perpendicular bisector** bhi hai.

> **Isosceles triangle mein vertex angle ka bisector hi base ka median, altitude aur perpendicular bisector hota hai.** Chaaron ek hi line hain!

(Median, altitude aur perpendicular bisector kya hote hain, ye [Triangles Topic 2](../triangles/triangles-part2.md) mein dekha tha. Wahan ye bhi dekha tha ki equilateral triangle mein chaaron centres ek hi point par aate hain. Is Part ki baat se samajh aata hai ki aisa kyun hota hai: equilateral triangle har vertex se isosceles hai.)

Jhoole wale example mein: daal ke point A se seedha neeche latka hua dhaga, seat ke **theek beech** mein girega aur seat se **90°** banayega.

---

## Part E: Angles nikalne wale solved examples

**Example 1:** Isosceles triangle ka vertex angle 40° hai. Base angles nikalo.

Base angles barabar hain (Isosceles Triangle theorem). Maan lo har ek x hai.
x + x + 40° = 180°
2x = 140°
x = **70°**

Jaanch: 70° + 70° + 40° = 180° ✅

**Example 2:** Isosceles triangle ka ek base angle 65° hai. Vertex angle nikalo.

Doosra base angle bhi 65° hai.
Vertex angle = 180° − 65° − 65° = **50°**

Jaanch: 65° + 65° + 50° = 180° ✅

**Example 3 (right isosceles):** ΔABC mein ∠A = 90° aur AB = AC. ∠B aur ∠C nikalo.

AB = AC, to ∠C = ∠B (Isosceles Triangle theorem). Maan lo har ek x hai.
90° + x + x = 180°
2x = 90°
x = **45°**

To angles hain **90°, 45°, 45°**. Ek set-square (geometry box wala tikona) aisa hi hota hai.

**Example 4 (algebra wala):** ΔABC mein AB = AC, ∠B = (3x − 10)° aur ∠C = (2x + 20)°. x aur teeno angles nikalo.

AB = AC, to ∠B = ∠C (Isosceles Triangle theorem).
3x − 10 = 2x + 20
x = **30**

∠B = 3(30) − 10 = **80°**, ∠C = 2(30) + 20 = **80°**
∠A = 180° − 80° − 80° = **20°**

Jaanch: 80° + 80° + 20° = 180° ✅

**Example 5 (converse wala):** ΔABC mein ∠B = ∠C = 50° aur AB = 6 cm. AC aur ∠A nikalo.

∠B = ∠C, to unke saamne ki sides barabar (Isosceles Triangle theorem ka converse). ∠C ke saamne AB hai, ∠B ke saamne AC hai.
To **AC = AB = 6 cm**.
∠A = 180° − 50° − 50° = **80°**

**Example 6 (exterior angle wala):** ΔABC mein AB = AC. BC ko D tak badhaya gaya, aur exterior angle ∠ACD = 110° hai. ΔABC ke teeno angles nikalo.

```
            A
           / \
          /   \
         /     \
        B-------C-------D
                 110°
```

∠ACB aur ∠ACD linear pair hain, to ∠ACB = 180° − 110° = **70°**.
AB = AC, to ∠B = ∠C = **70°**.
∠A = 180° − 70° − 70° = **40°**.

Jaanch ([Triangles Topic 2](../triangles/triangles-part2.md) ka exterior angle theorem): exterior angle = interior opposite angles ka sum. ∠A + ∠B = 40° + 70° = 110° ✅

---

## Part F: Proof wale solved examples

**Example 7:** ΔABC isosceles hai jismein AB = AC. BE aur CF altitudes hain (BE ⊥ AC, CF ⊥ AB). Prove karo ki BE = CF.

```
              A
             / \
            /   \
         F *     * E
          /       \
         /         \
        B-----------C

   E, AC par hai aur BE ⊥ AC
   F, AB par hai aur CF ⊥ AB
   (B ko E se aur C ko F se jodo: ye dono altitudes hain)
```

**Proof:** ΔABE aur ΔACF mein:

| Statement | Reason |
|---|---|
| ∠AEB = ∠AFC = 90° | BE ⊥ AC aur CF ⊥ AB (given) |
| ∠A = ∠A | Common angle |
| AB = AC | Given |
| ∴ ΔABE ≅ ΔACF | AAS criterion |
| ∴ BE = CF | CPCT |

**Hence proved.**

(AAS kyun? Do angles ∠E aur ∠A hain. Side AB inke beech wali side nahi hai, kyunki beech wali side AE hoti. Isliye AAS.)

**Example 8:** ΔABC aur ΔDBC ek hi base BC par bane do isosceles triangles hain, jahan AB = AC aur DB = DC. Prove karo ki ∠ABD = ∠ACD.

```
              A
             / \
            /   \
           /     \
          B-------C
           \     /
            \   /
             \ /
              D
```

**Proof:** AD ko jodo. ΔABD aur ΔACD mein:

| Statement | Reason |
|---|---|
| AB = AC | Given |
| DB = DC | Given |
| AD = AD | Common side |
| ∴ ΔABD ≅ ΔACD | SSS criterion |
| ∴ ∠ABD = ∠ACD | CPCT |

**Hence proved.**

**Ek doosra tarika** (Isosceles Triangle theorem se):
- AB = AC, to ∠ABC = ∠ACB (Isosceles Triangle theorem).
- DB = DC, to ∠DBC = ∠DCB (Isosceles Triangle theorem).
- Dono ko jodo: ∠ABC + ∠DBC = ∠ACB + ∠DCB. Yaani ∠ABD = ∠ACD. (Euclid ka Axiom 2: barabar mein barabar jodo to barabar.)

Ye doosra tarika upar wale figure ke liye hai, jahan A aur D, BC ke alag alag taraf hain. Agar D bhi A ki taraf (andar) ho, to jodne ki jagah ghatana padta hai (Axiom 3). SSS wala tarika dono figures mein chalta hai.

**Example 9:** ΔABC mein AB = AC, aur AD altitude hai (AD ⊥ BC). Prove karo ki AD, BC ko bisect karta hai aur ∠A ko bhi bisect karta hai.

**Proof:** ΔABD aur ΔACD mein:

| Statement | Reason |
|---|---|
| ∠ADB = ∠ADC = 90° | AD ⊥ BC (given) |
| AB = AC (hypotenuse) | Given |
| AD = AD | Common side |
| ∴ ΔABD ≅ ΔACD | RHS rule |
| ∴ BD = CD | CPCT (AD, BC ko bisect karta hai) |
| ∴ ∠BAD = ∠CAD | CPCT (AD, ∠A ko bisect karta hai) |

**Hence proved.** (Part D wali baat ka ye ulta roop hai: wahan bisector se shuru kiya tha, yahan altitude se.)

**Example 10:** ΔABC mein AB = AC. Side BA ko D tak aise badhaya ki AD = AB. Prove karo ki ∠BCD = 90°.

```
        D
         \
          \
           A
          / \
         /   \
        /     \
       B-------C

   B, A, D ek seedhi line par;  AD = AB = AC
```

**Proof:**

| Statement | Reason |
|---|---|
| AB = AC, ∴ ∠ABC = ∠ACB. Maan lo dono x hain. | Isosceles Triangle theorem (ΔABC mein) |
| AD = AB = AC, ∴ AC = AD | Given aur AB = AC |
| ∴ ∠ACD = ∠ADC. Maan lo dono y hain. | Isosceles Triangle theorem (ΔACD mein) |
| ΔBCD mein: ∠DBC + ∠BCD + ∠BDC = 180° | Angle sum property |
| x + (x + y) + y = 180° | ∠DBC = x, ∠BCD = ∠ACB + ∠ACD = x + y, ∠BDC = y |
| 2x + 2y = 180°, ∴ x + y = 90° | Simplify |
| ∴ ∠BCD = x + y = 90° | |

**Hence proved.**

Jaanch ek number se: maan lo ∠B = x = 50°. To ΔABC mein ∠BAC = 80°. ∠DAC uska linear pair hai, to 100°. ΔACD isosceles hai (AC = AD), to y = (180° − 100°)/2 = 40°. ∠BCD = 50° + 40° = 90° ✅

---

## Aam galtiyan (bachke rehna)

**Galti 1: Galat angle ko "saamne wala" maan lena**
AB = AC ho to ∠C = ∠B hota hai, **∠A = ∠B nahi**. Saamne wala angle wo hai jis vertex ka letter us side mein nahi hai. AB mein A aur B hain, to saamne ∠C.

**Galti 2: Vertex angle ko base angle samajh lena**
"Isosceles triangle ka ek angle 40° hai" kehne par pehle dekho ki wo vertex angle hai ya base angle. Vertex angle 40° ho to base angles 70°, 70°. Base angle 40° ho to angles 40°, 40°, 100°. Dono alag answer hain.

**Galti 3: Isosceles Triangle theorem aur uske converse ko mix karna**
- Sides barabar diye hon, aur angles nikalne hon: **Isosceles Triangle theorem**.
- Angles barabar diye hon, aur sides nikalni hon: **Isosceles Triangle theorem ka converse**.
Proof mein sahi theorem ka naam likho.

**Galti 4: Converse ke proof mein ASA likh dena**
Wahan side AD, diye gaye do angles ke beech nahi hai. Isliye wo **AAS** hai. Topic 2 ka farak yaad rakho: ASA mein side beech mein, AAS mein bahar.

**Galti 5: Construction likhna bhool jana**
Isosceles Triangle theorem aur uske converse ke proof mein AD **hum khud kheenchte hain**. Proof mein "Construction: ∠A ka bisector AD kheencho" likhna zaroori hai, warna AD kahan se aaya, ye saaf nahi hota.

**Galti 6: Base angle 90° ya usse bada maan lena**
Isosceles triangle ke do base angles barabar hote hain. Agar har ek 90° ya usse bada ho, to dono ka sum hi 180° ya usse zyada ho jayega, jo ho nahi sakta. Isliye **base angles hamesha acute** hote hain.

**Galti 7: Har isosceles ko equilateral samajhna**
Har equilateral triangle isosceles hai (kam se kam do sides barabar). Par har isosceles triangle equilateral nahi hota. 70°, 70°, 40° wala triangle isosceles hai, equilateral nahi.

---

## Quick Recap

- **Isosceles Triangle theorem:** Barabar sides ke saamne ke angles barabar. Proof: vertex angle ka bisector, phir SAS aur CPCT.
- **Isosceles Triangle theorem ka converse:** Barabar angles ke saamne ki sides barabar. Proof: bisector, phir AAS aur CPCT.
- **"Saamne wala":** Side AB ke saamne ∠C (jis vertex ka letter side mein nahi hai).
- **Equilateral:** Teeno angles barabar (Isosceles Triangle theorem do baar), har ek 60°. Ulta bhi sach hai: teeno angles barabar ho to triangle equilateral.
- **Isosceles mein:** Vertex angle ka bisector = base ka median = altitude = perpendicular bisector.
- **Base angles hamesha acute** hote hain.
- Triangles chapter ke dono vaade (base angles barabar, equilateral ke angles 60°) ab **prove** ho gaye.

---

## Practice Questions

1. In ΔPQR, PQ = PR and ∠P = 50°. Find ∠Q and ∠R.

2. One base angle of an isosceles triangle is 72°. Find the other two angles.

3. In ΔABC, ∠B = ∠C = 55° and AB = 7.5 cm. Find AC and ∠A.

4. In ΔABC, AB = AC, ∠B = (2x + 15)° and ∠C = (3x − 5)°. Find x and all three angles of the triangle.

5. In ΔABC, ∠A = 90° and AB = AC. Find ∠B and ∠C.

6. In ΔABC, AB = AC and D is the midpoint of BC. Prove that AD ⊥ BC and that AD bisects ∠A.

7. BE and CF are two equal altitudes of ΔABC. Using the RHS congruence rule, prove that ΔABC is isosceles.

8. In ΔABC, AB = AC. E and F are the midpoints of AC and AB respectively. Prove that BE = CF.

9. State whether each statement is true or false. Give a reason.
   (a) If two sides of a triangle are equal, the angles opposite them are equal.
   (b) Every isosceles triangle is equilateral.
   (c) Every equilateral triangle is isosceles.
   (d) An isosceles triangle can have a vertex angle of 100°.
   (e) An isosceles triangle can have base angles of 95° each.

### Answers

1. PQ = PR, to ∠R = ∠Q (Isosceles Triangle theorem). 2∠Q = 180° − 50° = 130°, to **∠Q = ∠R = 65°**.
   Jaanch: 50° + 65° + 65° = 180° ✅

2. Doosra base angle bhi **72°** hai. Vertex angle = 180° − 72° − 72° = **36°**.
   Jaanch: 72° + 72° + 36° = 180° ✅

3. ∠B = ∠C, to unke saamne ki sides barabar (Isosceles Triangle theorem ka converse): ∠C ke saamne AB, ∠B ke saamne AC. To **AC = 7.5 cm**.
   ∠A = 180° − 55° − 55° = **70°**.

4. AB = AC, to ∠B = ∠C (Isosceles Triangle theorem).
   2x + 15 = 3x − 5, to **x = 20**.
   ∠B = 2(20) + 15 = **55°**, ∠C = 3(20) − 5 = **55°**, ∠A = 180° − 110° = **70°**.
   Jaanch: 55° + 55° + 70° = 180° ✅

5. AB = AC, to ∠B = ∠C. 90° + 2∠B = 180°, to **∠B = ∠C = 45°**.

6. ΔABD aur ΔACD mein:

   | Statement | Reason |
   |---|---|
   | AB = AC | Given |
   | BD = CD | D, BC ka midpoint hai |
   | AD = AD | Common side |
   | ∴ ΔABD ≅ ΔACD | SSS rule |
   | ∴ ∠ADB = ∠ADC | CPCT |
   | ∠ADB + ∠ADC = 180° | Linear Pair Axiom |
   | ∴ ∠ADB = ∠ADC = 90°, yaani AD ⊥ BC | Do barabar angles ka sum 180° |
   | ∴ ∠BAD = ∠CAD, yaani AD, ∠A ko bisect karta hai | CPCT |

   **Hence proved.**

7. BE ⊥ AC aur CF ⊥ AB, aur BE = CF (given). ΔBEC aur ΔCFB mein:

   | Statement | Reason |
   |---|---|
   | ∠BEC = ∠CFB = 90° | Altitudes |
   | BC = CB (hypotenuse) | Common side |
   | BE = CF | Given |
   | ∴ ΔBEC ≅ ΔCFB | RHS rule |
   | ∴ ∠BCE = ∠CBF, yaani ∠C = ∠B | CPCT |
   | ∴ AB = AC | Isosceles Triangle theorem ka converse (∠C ke saamne AB, ∠B ke saamne AC) |

   To ΔABC **isosceles** hai. **Hence proved.**

8. AB = AC, to inke aadhe bhi barabar: BF = ½AB = ½AC = CE. ΔBCF aur ΔCBE mein:

   | Statement | Reason |
   |---|---|
   | BF = CE | Barabar sides ke aadhe (Euclid ka Axiom 7) |
   | ∠FBC = ∠ECB | Isosceles Triangle theorem (AB = AC, to ∠B = ∠C) |
   | BC = CB | Common side |
   | ∴ ΔBCF ≅ ΔCBE | SAS rule |
   | ∴ CF = BE | CPCT |

   **Hence proved.** (SAS kyun? ΔBCF mein ∠FBC, sides BF aur BC ke beech hai. ΔCBE mein ∠ECB, sides CE aur CB ke beech hai.)

9. (a) **True.** Ye Isosceles Triangle theorem hai. ✅
   (b) **False.** 70°, 70°, 40° wala triangle isosceles hai par equilateral nahi. ❌
   (c) **True.** Equilateral mein teeno sides barabar hain, to kam se kam do to barabar hain hi. ✅
   (d) **True.** Base angles = (180° − 100°)/2 = 40° each. 100° + 40° + 40° = 180°. ✅
   (e) **False.** 95° + 95° = 190°, jo akele hi 180° se zyada hai. Base angles hamesha acute hote hain. ❌

---

Shabaash! Ab aap congruence ko sirf "do triangles barabar hain" dikhane ke liye nahi, balki **naye theorems prove karne** ke liye use kar sakte ho. Guddu ke jhoole ki tarah, jab bhi do barabar sides dikhein, turant socho: "inke saamne ke angles bhi barabar honge."

**Agle topic mein (Topic 4: Inequalities in a Triangle):** Is topic mein humne dekha ki barabar sides ke saamne barabar angles hote hain. Par agar sides **barabar na hon** to? Kya badi side ke saamne bada angle hota hai? Aur kisi point se line tak sabse chhota raasta kaunsa hai? Ye sab Topic 4 mein dekhenge.
