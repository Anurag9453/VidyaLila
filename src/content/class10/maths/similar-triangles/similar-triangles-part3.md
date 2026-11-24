# Chapter: Similar Triangles (Part 3)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [similar-triangles-part2.md](similar-triangles-part2.md) se aage chalti hai** (wahan Topic 2 mein parallel line ka kamaal: Basic Proportionality Theorem aur uska converse dekha). Chapter ki shuruaat: [similar-triangles.md](similar-triangles.md). Class 9 se: [congruence-of-triangles-part2.md](../../../class9/maths/congruence-of-triangles/congruence-of-triangles-part2.md) (SAS, SSS, aur AAA wala dhokha), [triangles-part2.md](../../../class9/maths/triangles/triangles-part2.md) (angle sum) aur [lines-and-angles-part3.md](../../../class9/maths/lines-and-angles/lines-and-angles-part3.md) (parallel lines ke angles).
> **Topics covered in this file:**
> 3. Kab Kehte Hain Ki Do Triangle Similar Hain? AA, SSS, SAS

---

# Topic 3: Kab Kehte Hain Ki Do Triangle Similar Hain? AA, SSS, SAS

Topic 1 mein humne dekha ki do triangle **similar** tab hain jab unke corresponding angles barabar hon **aur** corresponding sides ek hi ratio (scale factor k) mein hon. Topic 2 mein ek parallel line ne triangle ki do sides ko ek hi ratio mein baant diya (Basic Proportionality Theorem). Lekin ek sawaal baki reh gaya: har baar **chhe cheezein** (teen angle, teen side) check karna bahut lamba kaam hai. Class 9 mein congruence ke liye bhi hum chhe cheezein nahi naapte the: SAS, SSS jaise chhote "tests" kaafi the. Is topic mein similarity ke teen aise chhote test milenge.

---

## Binita ke pennants

School ke Annual Function ke liye bunting (jhandiyon ki mala) banani hai. Stage ke upar chhote pennants ki mala lagegi, aur main gate par bade pennants ki. Teacher ma'am ne Binita ko ek chhota paper pennant diya jiski sides 5 cm, 7 cm aur 8 cm hain, aur kaha: "Printing wale uncle ne bade pennants kaat kar bheje hain. Dekh kar batao ki ye isi pennant ke bade bhai hain ya nahi. Garland tabhi achhi dikhegi jab har pennant ki **shape** ek hi ho."

Binita ne socha: "Teeno angle aur teeno sides naapu? Har pennant par chhe naap, aur pennants hain sau. Kya kam naapke kaam nahi chalega?" Ma'am muskuraayi: "Class 9 mein jab triangles ko **congruent** kehna tha, tab bhi saari chhe cheezein nahi naapi thi. Wahi soch yahan lagao: kitni kam cheezein shape ko pakka tay kar deti hain?"

Chalo, wahi dhoondhte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **AA test** | Agar ek triangle ke do angle doosre triangle ke do angle ke barabar hon, to dono triangle similar hote hain | ∠A = ∠P aur ∠B = ∠Q se ΔABC ~ ΔPQR |
| **SSS similarity test** | Agar ek triangle ki teeno sides doosre triangle ki teeno sides ke saath ek hi ratio mein hon, to dono similar hote hain | 8 : 12 : 14 aur 12 : 18 : 21 |
| **SAS similarity test** | Agar ek angle barabar ho aur us angle ko banane wali dono sides ek hi ratio mein hon, to dono similar hote hain | ∠A = ∠P, AB/PQ = AC/PR |
| **Sorted sides ki trick** | Teeno sides ko chhoti se badi ke kram mein likhna aur chhoti ko chhoti se, badi ko badi se jodna. Isi se vertex ka sahi kram milta hai | 8, 12, 14 aur 12, 18, 21 |
| **Chooser table** | Ek chhota table jo diye gaye data ko dekh kar batata hai ki AA, SSS ya SAS mein se kaun sa test lagega (ya koi nahi) | Part E |

---

## Pehle se yaad

- **Topic 1** ([similar-triangles.md](similar-triangles.md)): ΔABC ~ ΔPQR ka matlab A↔P, B↔Q, C↔R, yaani ∠A = ∠P, ∠B = ∠Q, ∠C = ∠R **aur** AB/PQ = BC/QR = CA/RP = k. Vertex ka kram hamesha likhte hain.
- **Class 9 ka vaada:** [congruence-of-triangles-part2.md](../../../class9/maths/congruence-of-triangles/congruence-of-triangles-part2.md) ke Part H mein do equilateral triangles ke baare mein likha tha: "Teeno angles barabar hain, phir bhi dono triangles **congruent nahi**. Inki **shape** ek jaisi hai par **size** alag hai." Aur wahi line aage kehti hai: "(Aise triangles ko **similar** kehte hain. Ye Class 10 mein padhenge.)" Wahi vaada ab poora ho raha hai: jo AAA congruence ke liye dhokha tha, wahi similarity ke liye pakka test hai.
- **Class 9 ka angle sum:** [triangles-part2.md](../../../class9/maths/triangles/triangles-part2.md) ke Part F se triangle ke teeno angle ka jod 180°.
- **Class 9 ke parallel-line ke niyam:** [lines-and-angles-part3.md](../../../class9/maths/lines-and-angles/lines-and-angles-part3.md) ke Part E mein Corresponding Angles Axiom aur Alternate Interior Angles theorem (aur Part B mein Vertically Opposite Angles). Part D mein hum inhe kaam par lagayenge.

---

## Part A: AA test (do angle kaafi hain)

### Kyun?

Binita ne paper par ek base kheencha aur uske dono sire par 70° aur 50° ke kone banaye. Dono kiran ek point par mil gayi aur ek triangle ban gaya. Phir usne **bada base** kheencha aur dono sire par wahi 70° aur 50° banaye: ab bhi kiranen ek hi jagah mili aur triangle ban gaya, bas bada. Dono ki shape ek jaisi nikli. Matlab: do angle tay hote hi triangle ki shape tay ho jaati hai, aur base ki lambai sirf size badalti hai. Teesra angle to angle sum se apne aap aata hai: 180° − 70° − 50° = 60°.

```
         /\                          /\
        /  \                        /  \
       /    \                      /    \
      /  ??  \                    /  ??  \
     /        \                  /        \
    /__________\                /__________\
   70°        50°              70°        50°

   chhota pennant              bada pennant
```

> **Figure 3.1** – Do pennants jinke base ke dono kone 70° aur 50° hain. Apex ka kona dono mein ek hi hai (60°, angle sum se). Is topic ki saari figures naap ke hisaab se nahi hain.

### AA test

> **Agar ΔABC aur ΔPQR mein ∠A = ∠P aur ∠B = ∠Q ho, to ΔABC ~ ΔPQR.**

Teesra angle ∠C = ∠R apne aap barabar nikalta hai (dono 180° − do barabar angle). Isliye isey kabhi-kabhi "teeno angle barabar" bhi kehte hain, par dekhna do hi padta hai.

**Ye proof hai ya maanyata?** Honest baat: AA ko hum yahan **maan kar** chalte hain (accepted), upar wali drawing aur "do angle shape tay kar dete hain" wale vichaar ke saath. Iska poora formal proof is level se aage ki padhai mein aata hai. Par ek cheez pakki hai: ye AAA wale dhokhe se alag kaam hai. Congruence mein AAA se size nahi mil raha tha, par similarity ko size chahiye hi nahi, sirf shape chahiye.

### Example 1: Angle se similarity aur kram

ΔABC mein ∠A = 50° aur ∠B = 70° hai. ΔDEF mein ∠D = 70° aur ∠F = 60° hai. Kya ye similar hain? Agar haan, to similarity statement likho.

**Hal:**

1. ΔABC ka teesra angle: ∠C = 180° − 50° − 70° = 60°.
2. ΔDEF ka teesra angle: ∠E = 180° − 70° − 60° = 50°.
3. ΔABC ke angle: 50°, 70°, 60°. ΔDEF ke angle: 70°, 50°, 60°. Do angle (50° aur 70°) milte hain, to AA se similar hain.
4. Kram: ∠A = 50° = ∠E, ∠B = 70° = ∠D, ∠C = 60° = ∠F. To A↔E, B↔D, C↔F.

**ΔABC ~ ΔEDF.** (ΔABC ~ ΔDEF likhna galat hoga: wahan A↔D hota, par ∠A = 50° aur ∠D = 70° barabar nahi.)

**Jaanch:** teeno jodi: ∠A = ∠E = 50°, ∠B = ∠D = 70°, ∠C = ∠F = 60° ✅. Dono ka jod 50 + 70 + 60 = 180 ✅.

### Example 2: Ek angle barabar, par similar nahi

ΔABC mein ∠A = 40° aur ∠B = 75°. ΔPQR mein ∠P = 40° aur ∠R = 70°. Kya ye similar hain?

**Hal:**

1. ∠C = 180° − 40° − 75° = 65°. Isliye ΔABC ke angle 40°, 75°, 65° hain.
2. ∠Q = 180° − 40° − 70° = 70°. Isliye ΔPQR ke angle 40°, 70°, 70° hain.
3. Sirf ek angle (40°) milta hai. 75° aur 65° ki jodi ΔPQR mein nahi hai. AA ke liye do alag-alag angle milne chahiye. **Similar nahi.**

**Jaanch:** ΔABC ke angle ka set {40°, 75°, 65°} aur ΔPQR ka {40°, 70°, 70°} ek jaisa nahi. Dono triangle ke angle ka jod 180° hai ✅, to hisaab sahi hai.

---

## Part B: SSS similarity (teeno sides ek ratio mein)

### Kyun?

Maan lo ΔPQR ki har side ΔABC ki us side ki k guna hai. Topic 1 ki enlargement wali baat se ΔABC ko k guna bada (ya chhota) karke ek nakal ΔA′B′C′ banao: uske angle ΔABC ke angle hi rahenge aur sides k guna ho jayengi, yaani ΔPQR ki sides ke barabar. Ab ΔA′B′C′ aur ΔPQR ki teeno sides barabar hain, to **Class 9 ke SSS congruence** se ΔA′B′C′ ≅ ΔPQR. Isliye ΔPQR ke angle bhi ΔABC ke angle ke barabar hain.

**Honest baat:** ye khaka ek proof ka aadha-pakka roop hai: isme hum Topic 1 ki "enlargement angle nahi badalti" wali baat maan rahe hain. Isliye ise **stated and checked** maano: hum test ko maan kar examples par check karenge.

> **SSS similarity:** Agar AB/PQ = BC/QR = CA/RP ho, to ΔABC ~ ΔPQR.

### Sorted sides ki trick

Sabse bada khatra ye hai ki sides ko **diye gaye kram mein** jod diya jaye. Sahi jodi kaise banti hai? Class 9 ke [congruence-of-triangles-part4.md](../../../class9/maths/congruence-of-triangles/congruence-of-triangles-part4.md) mein Part A aur B ne bataya tha ki triangle mein **badi side ke saamne bada angle** hota hai (aur ulta). Similar triangles mein angle barabar hote hain, to sabse bada angle sabse bade angle se milta hai. Isliye sabse badi side sabse badi side se milti hai, aur sabse chhoti sabse chhoti se. **Pehle dono triangle ki sides sort karo, phir ratio nikalo.** Vertex ka kram bhi isi se milta hai: do sides ka common vertex common vertex se milega.

### Example 3: Sorted sides se similarity aur kram

ΔABC mein AB = 12 cm, BC = 8 cm, CA = 14 cm. ΔPQR mein PQ = 18 cm, QR = 21 cm, RP = 12 cm. Kya ΔABC ~ ΔPQR? Agar haan, to sahi kram likho aur k nikalo.

**Hal:**

1. Existence: 8 + 12 > 14 aur 12 + 18 > 21, dono theek (teen sides tabhi triangle banati hain jab do chhoti sides ka jod teesri se bada ho).
2. ΔABC ki sorted sides: BC = 8, AB = 12, CA = 14. ΔPQR ki sorted sides: RP = 12, PQ = 18, QR = 21.
3. Ratios: RP/BC = 12/8 = 3/2, PQ/AB = 18/12 = 3/2, QR/CA = 21/14 = 3/2. Teeno barabar, **SSS se similar.**
4. Kram: BC↔RP aur AB↔PQ. Common vertex B aur P: B↔P. AB↔PQ se A↔Q. To C↔R. Check: CA↔QR (C→R, A→Q), sahi.

**ΔABC ~ ΔQPR**, aur k = 3/2 (ΔQPR, ΔABC ka 3/2 guna).

```
         A                              Q
        / \                            / \
 AB=12 /   \ CA=14              QP=18 /   \ QR=21
      /     \                        /     \
     /       \                      /       \
    B---------C                    P---------R
       BC=8                           PR=12
```

> **Figure 3.2** – ΔABC aur ΔQPR ek jaisi jagah par rakhe gaye hain (A aur Q upar, B aur P baayein, C aur R daayein). Har jodi ki side ka ratio 3/2 hai.

**Jaanch:** 18/12 = 3/2, 12/8 = 3/2, 21/14 = 3/2 ✅. Ye bhi dekho: ΔPQR ko sort kiye bina, diye gaye kram mein jodte to 18/12, 21/8, 12/14 aate: teeno alag. Isiliye sort karna zaroori hai.

### Example 4: Do ratio barabar, teesra nahi

ΔDEF mein DE = 13 cm, EF = 7 cm, FD = 9 cm. ΔXYZ mein XY = 24 cm, YZ = 14 cm, ZX = 18 cm. Kya similar?

**Hal:**

1. Existence: 7 + 9 > 13 aur 14 + 18 > 24, dono theek.
2. Sorted: ΔDEF: 7, 9, 13. ΔXYZ: 14, 18, 24.
3. Ratios: 14/7 = 2, 18/9 = 2, 24/13 = 1.846... (2 nahi).
4. Do ratio 2 hain, par teesra alag. Teeno barabar nahi, to **similar nahi.**

**Jaanch:** agar similar hote to 13 ki jodi 2 × 13 = 26 cm honi chahiye thi, par ΔXYZ ki sabse badi side 24 cm hai ✅ (26 ≠ 24, to galti nahi hui).

---

## Part C: SAS similarity (ek angle aur uski dono sides)

### Kyun?

Class 9 ke SAS congruence ([congruence-of-triangles-part2.md](../../../class9/maths/congruence-of-triangles/congruence-of-triangles-part2.md) ka Part C) mein do sides aur **unke beech ka angle** (included angle) barabar hote the. Wahi idea, bas "barabar" ki jagah "ek hi ratio mein". Maan lo ∠A = ∠P aur AB/PQ = AC/PR = k. ΔABC ki k guna wali nakal banao: uski do sides PQ aur PR ke barabar aur unke beech ka angle ∠P ke barabar ban jayega. Class 9 ke SAS congruence se wo nakal ΔPQR ke congruent hai, to ΔPQR ke angle ΔABC ke angle ke barabar nikalte hain. (Yahan bhi wahi honest baat: ye "nakal ke angle nahi badalte" wali baat par tika khaka hai, poora formal proof nahi.)

> **SAS similarity:** Agar ∠A = ∠P aur AB/PQ = AC/PR ho (angle A dono sides AB, AC ke **beech** mein), to ΔABC ~ ΔPQR.

### Example 5: Ek angle aur do sides

ΔABC mein AB = 6 cm, AC = 9 cm, ∠A = 75°. ΔPQR mein PR = 15 cm, PQ = 10 cm, ∠P = 75°. Kya similar? Agar haan, to k aur ∠B ke barabar angle batao.

**Hal:**

1. ∠A = ∠P = 75° (diya hai), aur ∠A sides AB aur AC ke beech hai, ∠P sides PQ aur PR ke beech.
2. Jodi: AB ↔ PQ aur AC ↔ PR. AB/PQ = 6/10 = 3/5. AC/PR = 9/15 = 3/5. Dono barabar.
3. **SAS se ΔABC ~ ΔPQR.** A↔P, B↔Q, C↔R. ΔPQR, ΔABC ka 5/3 guna: k = PQ/AB = 10/6 = 5/3.
4. Corresponding angle: ∠B = ∠Q aur ∠C = ∠R.

```
         A                               P
        / \                             / \
  AB=6 /75°\ AC=9                PQ=10 /75°\ PR=15
      /     \                         /     \
     /       \                       /       \
    B---------C                     Q---------R
```

> **Figure 3.3** – Dono triangles mein 75° ka angle apex par hai, aur usi apex se nikalne wali do sides ka ratio 3/5 hai.

**Jaanch:** 6/10 = 0.6 aur 9/15 = 0.6 ✅. Aur k ulta bhi chalta hai: 10/6 = 15/9 = 5/3 ✅.

### Example 6: Common angle wala SAS

ΔABC mein D point AB par aur E point AC par hai. AD = 6 cm, AB = 15 cm, AE = 8 cm, AC = 20 cm, BC = 17 cm. Dikhao ki ΔADE ~ ΔABC aur DE nikalo. Kya DE ∥ BC?

**Hal:**

1. ΔADE aur ΔABC mein ∠A **common** hai (dono mein wahi angle). Ye angle AD, AE ke beech hai aur AB, AC ke beech bhi.
2. AD/AB = 6/15 = 2/5. AE/AC = 8/20 = 2/5. Barabar.
3. **SAS se ΔADE ~ ΔABC** (A↔A, D↔B, E↔C), k = 2/5 (ΔADE chhota hai).
4. DE/BC = 2/5, to DE = 17 × 2/5 = **6.8 cm.**
5. Similar hone se ∠ADE = ∠ABC. Ye corresponding angles hain (transversal AB), aur Class 9 ke Corresponding Angles Axiom ke **converse** se DE ∥ BC. **Haan.**

**Jaanch:** DE/BC = 6.8/17 = 2/5 ✅. Triangles ki existence: ΔABC (15, 20, 17) mein 15 + 17 > 20 ✅ aur ΔADE (6, 8, 6.8) mein 6 + 6.8 > 8 ✅.

**Mid-point wali ek baat:** agar D aur E midpoints hote, to AD/AB = AE/AC = 1/2, aur SAS se ΔADE ~ ΔABC with k = 1/2, to DE = ½ BC. Topic 2 mein Mid-point Theorem ka jo "aadha" wala hissa BPT se nahi mil raha tha, wo yahin se milta hai.

---

## Part D: Parallel line wale figure mein AA

Figure mein jab koi line parallel ho, to angle **Class 9 ke parallel-line niyam** se mil jaate hain, aur AA test lag jaata hai. Ye cheezein dhoondho: ek **common angle**, **corresponding angles** (DE ∥ BC par), **alternate interior angles** (do parallel patti aur ek tirchhi par) aur **vertically opposite angles** (jab do line ek point par kaatein).

### Example 7: DE ∥ BC wala triangle

ΔABC mein AD = 12 cm, DB = 8 cm, AC = 15 cm, BC = 18 cm. D point AB par aur E point AC par hai, aur DE ∥ BC. Dikhao ki ΔADE ~ ΔABC aur AE aur DE nikalo.

```
         A
        / \
 AD=12 /   \ AC=15
      D-----E
 DB=8 /       \
     B---------C
        BC=18
```

> **Figure 3.4** – DE, BC ke parallel hai. D aur E ke beech wali patti DE hai jiski lambai nikalni hai.

**Hal (Statement-Reason):**

| Statement | Reason |
|---|---|
| 1. ∠ADE = ∠ABC | Corresponding angles, DE ∥ BC, transversal AB |
| 2. ∠A = ∠A | Common angle |
| 3. ∴ ΔADE ~ ΔABC | AA test (A↔A, D↔B, E↔C) |

AB = 12 + 8 = 20 cm. Similar triangles mein sides ek ratio mein hain:

AD/AB = AE/AC = DE/BC, yaani 12/20 = AE/15 = DE/18.

Ratio 12/20 = 3/5. Isliye AE = 15 × 3/5 = **9 cm** aur DE = 18 × 3/5 = **10.8 cm.**

**Jaanch:** 12/20 = 3/5, 9/15 = 3/5, 10.8/18 = 3/5 ✅. (Ye Topic 2 ke Basic Proportionality Theorem se bhi milta hai: AD : DB = 12 : 8 = 3 : 2 aur AE : EC = 9 : 6 = 3 : 2 ✅.)

### Example 8: Do line ek point par kaatein (bow-tie)

Do parallel patti AB aur CD ke beech do tirchhi patti AC aur BD ek point O par kaatti hain. AB = 9 cm, CD = 15 cm, OA = 6 cm, OB = 7.5 cm. Dikhao ki ΔOAB ~ ΔOCD aur OC, OD nikalo.

```
      AB=9
     A-----B
      \   /
       \ /
        O
       / \
      /   \
     /     \
    /       \
   D---------C
      CD=15
```

> **Figure 3.5** – AB ∥ CD, aur AC, BD ek point O par kaatti hain. O, A aur C ke beech hai, aur B aur D ke beech bhi.

**Hal:**

| Statement | Reason |
|---|---|
| 1. ∠OAB = ∠OCD | Alternate interior angles, AB ∥ CD, transversal AC |
| 2. ∠AOB = ∠COD | Vertically opposite angles |
| 3. ∴ ΔOAB ~ ΔOCD | AA test (O↔O, A↔C, B↔D) |

Ratio: OA/OC = OB/OD = AB/CD. Yahan AB/CD = 9/15 = 3/5. Isliye OC = 6 × 5/3 = **10 cm** aur OD = 7.5 × 5/3 = **12.5 cm.**

**Jaanch:** OC/OA = 10/6 = 5/3, OD/OB = 12.5/7.5 = 5/3, CD/AB = 15/9 = 5/3 ✅. Ye bhi: ΔOAB (6, 7.5, 9) mein 6 + 7.5 > 9 ✅.

---

## Part E: Kaun sa test kab? (Chooser table)

| Dono triangles ke baare mein kya pata hai | Kaun sa test | Dhyan rakhne ki baat |
|---|---|---|
| Do angle ki jodi barabar | AA | Teesra angle angle sum se aa jaata hai, use naapna nahi |
| Teeno sides ka data | SSS | Pehle sides sort karo, phir ratio |
| Ek angle barabar aur uske dono sides ka ratio barabar | SAS | Angle un dono sides ke **beech** hona chahiye |
| Figure mein parallel line | AA | Common angle, corresponding ya alternate angle, vertically opposite angle |
| Do sides ka ratio aur ek angle jo un dono ke beech **nahi** | Koi test nahi | Do alag triangle ban sakte hain (Aam galti 2) |
| Sirf ek angle ya sirf ek ratio | Koi test nahi | Data kam hai |

**Theorem aur test ka jodi (ek line mein):**

| Baat | Sidha rasta | Ulta rasta |
|---|---|---|
| Similar triangles | ΔABC ~ ΔPQR hai, to ∠A = ∠P, ∠B = ∠Q, ∠C = ∠R aur AB/PQ = BC/QR = CA/RP | AA, ya SSS, ya SAS mein se koi ek mile, to ΔABC ~ ΔPQR |

### Example 9: Pennants ka asli sawaal

Binita ka chhota pennant 5 cm, 7 cm, 8 cm ka hai. Printing wale uncle ne do bade pennants bheje. Pehle pennant ki sides 21 cm, 24 cm, 15 cm hain aur doosre ki 24 cm, 15 cm, 20 cm. Kaun sa bada bhai (similar) hai, aur kitna bada?

**Hal:**

1. Chhote pennant ki sorted sides: 5, 7, 8.
2. Pehla pennant sorted: 15, 21, 24. Ratio: 15/5 = 3, 21/7 = 3, 24/8 = 3. **SSS se similar, k = 3.**
3. Doosra pennant sorted: 15, 20, 24. Ratio: 15/5 = 3, 20/7 = 2.857..., 24/8 = 3. Beech wali side ka ratio alag hai: **similar nahi.**

**Story check:** pehla pennant chhote ka seedha 3 guna bada nakal hai, to garland mein same shape dikhegi. Doosre mein beech wali side thodi chhoti hai (20 cm, jabki 21 cm honi chahiye thi), isliye wo thoda "pichka" dikhega, aur Binita use gate par nahi lagayegi.

---

## Aam galtiyan (bachke rehna)

### Galti 1: SSS mein sides ko diye gaye kram mein jodna (sort na karna)

ΔABC: AB = 14 cm, BC = 6 cm, CA = 10 cm. ΔDEF: DE = 15 cm, EF = 21 cm, FD = 9 cm. Kya similar?

**Galat tareeka:** diye kram mein jodo: AB/DE = 14/15, BC/EF = 6/21 = 2/7, CA/FD = 10/9. Teeno ratio alag, to "similar nahi."

**Sahi tareeka:** pehle sort karo. ΔABC: BC = 6, CA = 10, AB = 14. ΔDEF: FD = 9, DE = 15, EF = 21. Ratio: 9/6 = 3/2, 15/10 = 3/2, 21/14 = 3/2. Teeno barabar, to **similar hain.** Kram: BC↔FD aur CA↔DE se C↔D, B↔F, A↔E: **ΔABC ~ ΔEFD.**

**Jaanch:** 9/6 = 15/10 = 21/14 = 3/2 ✅ (diye gaye kram wale ratio 14/15, 2/7, 10/9 sach mein alag the, par wo galat jodiyan thi).

### Galti 2: SAS mein aisa angle lena jo do sides ke beech mein nahi hai

ΔABC mein AB = 12 cm, BC = 8 cm aur ∠A = 30°. ΔPQR mein PQ = 18 cm, QR = 12 cm aur ∠P = 30°. Ek vidyarthi kehta hai: "AB/PQ = 12/18 = 2/3, BC/QR = 8/12 = 2/3, aur ∠A = ∠P. SAS se similar."

**Galat kyun?** ∠A sides AB aur **AC** ke beech hai. Diya hua BC to A se door wali side hai, ∠A ke saamne. Isliye ye SAS nahi hai: angle dono sides ke beech mein nahi hai.

**Kya sach mein similar nahi ho sakte?** Class 9 ke SSA wale dhokhe ki tarah: A par 30° ka kona banao, AB = 12 cm lo, aur B se 8 cm ka chaap lagao. Chaap ray ko **do** jagah kaatta hai (Figure 3.6), C1 aur C2.

```
                          .* C2
                       ....*
                   ....   **
                ....      *
            .....        **
      C1 :...            *
     ....:::::::         *
  ....         :::::::  **
A-----------------------B
```

> **Figure 3.6** – A par 30°. Dotted ray A se upar jaati hai. B se dono line (BC1 aur BC2) 8 cm ki hain. Ek triangle ABC1 hai (C1 paas mein), aur doosra ABC2 (C2 door).

Dono triangles mein AB = 12, BC1 = BC2 = 8, ∠A = 30° hai. Par ΔABC1 mein ∠C naap kar lagbhag 131° (motaa) aata hai aur ΔABC2 mein lagbhag 49° (nokila). Agar ΔABC ek ho aur ΔPQR doosra, to angle mel nahi khayenge. Isliye diya data **similar hone ki guarantee nahi deta.**

**Jaanch (isi data par):** 12/18 = 8/12 = 2/3 ✅ aur ∠A = ∠P = 30° ✅, par ∠A dono diye gaye sides ke beech nahi hai. Sahi SAS ke liye AB aur AC chahiye the, par AC diya hi nahi.

---

## Quick Recap

- **AA:** do angle barabar, to similar. Teesra angle angle sum se. AA ko hum yahan drawing ke vichaar se **maan kar** chalte hain.
- **SSS:** teeno sides ek ratio mein, to similar. Pehle **sides sort karo**, badi ko badi se milao.
- **SAS:** ek angle barabar aur uske **beech** ki dono sides ek ratio mein, to similar.
- Dono triangle ki **vertex ka kram** likho: ΔABC ~ ΔQPR jaisa, jahan jodi ke vertex alag naam ke ho sakte hain.
- Figure mein parallel line ho to **common angle, corresponding, alternate aur vertically opposite angles** se AA lag jaata hai, phir sides ke ratio se length.
- Do sides ka ratio aur ek angle jo dono ke beech nahi, ye kaafi **nahi** hai.
- Class 9 ka AAA congruence ke liye dhokha tha, similarity ke liye wahi AA ka pakka test ban gaya.

---

## Practice Questions

1. In ΔABC, ∠A = 35° and ∠C = 80°. In ΔXYZ, ∠Y = 80° and ∠Z = 35°. Show that the triangles are similar and write the similarity statement with the vertices in the correct order.
2. For each pair, decide whether the triangles are similar. If yes, write the similarity statement. (a) In ΔKLM, ∠K = 45° and ∠L = 85°; in ΔTUV, ∠T = 50° and ∠U = 85°. (b) In ΔEFG, ∠E = 30° and ∠F = 100°; in ΔHIJ, ∠H = 30° and ∠I = 95°.
3. In ΔLMN, LM = 16 cm, MN = 10 cm, NL = 11 cm. In ΔUVW, UV = 16.5 cm, VW = 24 cm, WU = 15 cm. Show that the triangles are similar, write the similarity statement and find the scale factor from ΔLMN to ΔUVW.
4. In ΔPQR, PQ = 14 cm, QR = 9 cm, RP = 12 cm. In ΔXYZ, XY = 24 cm, YZ = 15 cm, ZX = 20 cm. Are the triangles similar? If not, which pair of sides spoils the ratio?
5. In ΔDEF, DE = 16 cm, DF = 20 cm and ∠D = 85°. In ΔKLM, KL = 12 cm, KM = 15 cm and ∠K = 85°. Show that ΔDEF ~ ΔKLM and write the scale factor from ΔDEF to ΔKLM.
6. In ΔDEF, DE = 14 cm, EF = 9 cm and ∠D = 35°. In ΔGHI, GH = 21 cm, HI = 13.5 cm and ∠G = 35°. A student says the triangles are similar by SAS because 21/14 = 13.5/9 and ∠D = ∠G. Is she right? Explain.
7. In ΔABC, D lies on AB and E lies on AC with DE ∥ BC. AD = 9 cm, DB = 15 cm, AC = 22 cm and BC = 20 cm. Prove that ΔADE ~ ΔABC and find AE and DE.
8. Two parallel strips PQ and SR are joined by crossing strips PS and QR, which meet at O (O lies between P and S, and between Q and R). PQ = 8 cm, SR = 14 cm, OP = 5 cm and OQ = 6 cm. Prove that ΔOPQ ~ ΔOSR and find OS and OR.
9. In ΔABC, AB = 18 cm, AC = 24 cm and BC = 21 cm. D lies on AB with AD = 8 cm, and E lies on AC such that ∠ADE = ∠ACB. Prove that ΔADE ~ ΔACB (write the vertices in the correct order) and find AE and DE.
10. A paper triangle has sides 6 cm, 11 cm and 13 cm. A bigger cut-out with the same shape has a shortest side of 9 cm. Find the other two sides of the cut-out.
11. Which test (AA, SSS, SAS, or none) applies in each case? (a) ∠B = ∠E = 58° and ∠C = ∠F = 77°. (b) The sides of one triangle are 5.5 cm, 8 cm, 10 cm and of the other 11 cm, 16 cm, 20 cm. (c) XY = 7 cm, XZ = 12 cm, ∠X = 100° and LM = 10.5 cm, LN = 18 cm, ∠L = 100° (X↔L). (d) AB = 10 cm, BC = 7 cm, ∠A = 40° and PQ = 15 cm, QR = 10.5 cm, ∠P = 40°.
12. True or false? (a) Any two equilateral triangles are similar. (b) If two triangles have two pairs of sides in the same ratio, they are similar. (c) If ∠A = ∠P and ∠B = ∠Q, then ∠C = ∠R. (d) Two congruent triangles are similar. (e) Any two isosceles triangles are similar.
13. ΔABC ~ ΔPQR, ∠A = 48° and ∠Q = 62°. Find ∠R.

### Answers

1. ΔXYZ ka ∠X = 180° − 80° − 35° = 65°. ΔABC ka ∠B = 180° − 35° − 80° = 65°. ∠A = 35° = ∠Z aur ∠C = 80° = ∠Y: do angle barabar, to AA se similar. A↔Z, B↔X, C↔Y: **ΔABC ~ ΔZXY.** Jaanch: ∠A = ∠Z = 35°, ∠B = ∠X = 65°, ∠C = ∠Y = 80° ✅ aur 35 + 65 + 80 = 180 ✅.
2. (a) ΔKLM: ∠M = 180° − 45° − 85° = 50°. ΔTUV: ∠V = 180° − 50° − 85° = 45°. Angle 45°, 85°, 50° dono mein milte hain: K↔V, L↔U, M↔T. **Similar: ΔKLM ~ ΔVUT.** (b) ΔEFG: ∠G = 180° − 30° − 100° = 50°. ΔHIJ: ∠J = 180° − 30° − 95° = 55°. Sets {30°, 100°, 50°} aur {30°, 95°, 55°}: sirf 30° milta hai, **similar nahi.** Jaanch: (a) 45 + 85 + 50 = 180 ✅, (b) 30 + 95 + 55 = 180 ✅.
3. Sorted: ΔLMN: MN = 10, NL = 11, LM = 16. ΔUVW: WU = 15, UV = 16.5, VW = 24. Ratios: 15/10 = 3/2, 16.5/11 = 3/2, 24/16 = 3/2. SSS se similar. Kram: MN↔WU aur NL↔UV se N↔U, M↔W, L↔V. **ΔLMN ~ ΔVWU**, scale factor **3/2.** Jaanch: 1.5 × 10 = 15 ✅, 1.5 × 11 = 16.5 ✅, 1.5 × 16 = 24 ✅. Existence: 10 + 11 > 16 ✅ aur 15 + 16.5 > 24 ✅.
4. Sorted: ΔPQR: 9, 12, 14. ΔXYZ: 15, 20, 24. Ratios: 15/9 = 5/3, 20/12 = 5/3, 24/14 = 12/7. Pehle do barabar (5/3), teesra 12/7 ≈ 1.71 (5/3 ≈ 1.67 nahi), to **similar nahi.** Sabse badi sides PQ = 14 aur XY = 24 wali jodi ratio bigaadti hai. Jaanch: similar hote to badi side 14 × 5/3 = 70/3 ≈ 23.3 cm hoti, par XY = 24 cm hai ✅.
5. KL/DE = 12/16 = 3/4 aur KM/DF = 15/20 = 3/4, aur ∠D = ∠K = 85° jo DE, DF ke (aur KL, KM ke) beech hai. SAS se **ΔDEF ~ ΔKLM** (D↔K, E↔L, F↔M), scale factor ΔDEF se ΔKLM tak **3/4.** Jaanch: 16 × 3/4 = 12 ✅ aur 20 × 3/4 = 15 ✅.
6. **Nahi, wo sahi nahi hai.** ∠D sides DE aur DF ke beech hai, par diye gaye sides DE aur EF hain. Sides ka ratio sach hai (21/14 = 13.5/9 = 3/2), par angle in dono ke beech nahi, to SAS nahi lagta. Aise data se do alag shape ke triangle ban sakte hain (Aam galti 2 jaisa). Jaanch: DE, EF ke beech ka angle ∠E hai, aur wo diya hi nahi ✅ (isliye test shuru hi nahi hota).
7. ∠ADE = ∠ABC (corresponding angles, DE ∥ BC) aur ∠A common: AA se **ΔADE ~ ΔABC.** AB = 9 + 15 = 24, to AD/AB = 9/24 = 3/8. AE = 22 × 3/8 = **8.25 cm** aur DE = 20 × 3/8 = **7.5 cm.** Jaanch: 9/24 = 3/8, 8.25/22 = 3/8, 7.5/20 = 3/8 ✅. Existence: ΔABC (24, 22, 20) mein 22 + 20 > 24 ✅.
8. ∠OPQ = ∠OSR (alternate interior, PQ ∥ SR, transversal PS), ∠OQP = ∠ORS (alternate interior, transversal QR). AA se **ΔOPQ ~ ΔOSR** (O↔O, P↔S, Q↔R). SR/PQ = 14/8 = 7/4. OS = 5 × 7/4 = **8.75 cm** aur OR = 6 × 7/4 = **10.5 cm.** Jaanch: 8.75/5 = 10.5/6 = 14/8 = 7/4 ✅. Existence: ΔOPQ (5, 6, 8) mein 5 + 6 > 8 ✅.
9. ∠ADE = ∠ACB aur ∠A common. Isliye **ΔADE ~ ΔACB** (A↔A, D↔C, E↔B; ΔADE ~ ΔABC likhna galat hoga). Ratio: AD/AC = AE/AB = DE/CB = 8/24 = 1/3. AE = 18/3 = **6 cm**, DE = 21/3 = **7 cm.** Jaanch: AD/AC = 8/24 = 1/3, AE/AB = 6/18 = 1/3, DE/CB = 7/21 = 1/3 ✅. Existence: ΔABC (18, 24, 21) mein 18 + 21 > 24 ✅.
10. Shortest side 6 ↔ 9, to k = 9/6 = 3/2. Doosri sides: 11 × 3/2 = **16.5 cm** aur 13 × 3/2 = **19.5 cm.** Jaanch: 9/6 = 16.5/11 = 19.5/13 = 1.5 ✅. Story check: cut-out ki teeno sides sirf ek hi guna se badi hain, isliye shape wahi rahegi.
11. (a) **AA** (do angle ki jodi). (b) **SSS** (sorted: 5.5, 8, 10 aur 11, 16, 20, ratio 2, 2, 2). (c) **SAS**: XY/LM = 7/10.5 = 2/3 aur XZ/LN = 12/18 = 2/3, aur ∠X = ∠L = 100° dono sides ke beech hai. (d) **Koi test nahi**: ∠A sides AB aur AC ke beech hai, par diye gaye sides AB aur BC hain. Jaanch: (b) 11/5.5 = 16/8 = 20/10 = 2 ✅; (c) 7 × 3/2 = 10.5 ✅, 12 × 3/2 = 18 ✅.
12. (a) **True** ✅: har equilateral triangle ke teeno angle 60° hote hain, AA se similar. (b) **False** ❌: do sides ka ratio aur teesri alag, ya angle beech mein nahi, to guarantee nahi. (c) **True** ✅: teesra angle angle sum se tay hota hai. (d) **True** ✅: congruent triangles similar hain, k = 1. (e) **False** ❌: ek isosceles triangle ka apex 40° aur doosre ka 80° ho sakta hai, to unke angle alag honge.
13. ΔABC ~ ΔPQR, to ∠B = ∠Q = 62°. ∠C = 180° − 48° − 62° = 70°. A↔P, B↔Q, C↔R, to **∠R = ∠C = 70°.** Jaanch: ΔPQR ke angle 48°, 62°, 70° ka jod 180 ✅.

---

Ab tum sirf do ya teen cheezein dekh kar bata sakte ho ki do triangle similar hain ya nahi, aur yahi asli taakat hai: chhe cheezein naapne ki zaroorat nahi. Ab jab bhi triangle ki jodi dikhe, to pehle apne aap se poocho: "Mere paas do angle hain, teen sides hain, ya ek angle aur uski do sides?"

**Aage ka teaser:** Topic 4 mein hum isi similarity ko kaam par lagayenge: ek stick aur uski parchhai se unche tank ya flagpole ki height nikalenge, aur right triangle ke andar ek perpendicular se Pythagoras theorem ka bilkul naya proof milega.
