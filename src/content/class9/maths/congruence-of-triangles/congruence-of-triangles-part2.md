# Chapter: Congruence of Triangles (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [congruence-of-triangles.md](congruence-of-triangles.md) se aage chalti hai.** Proof likhne ka format [Euclid chapter ke Topic 4](../euclids-geometry/euclids-geometry-part4.md) mein seekha tha, aur angle sum [Triangles chapter ke Topic 2](../triangles/triangles-part2.md) mein.
> **Topics covered in this file:**
> 2. Congruence Relation, and Criteria for Congruence: SAS, ASA, AAS, SSS, RHS

---

# Topic 2: Congruence Relation aur Congruence ke Criteria (SAS, ASA, AAS, SSS, RHS)

Topic 1 mein humne Aman ki duplicate chaabi se dekha ki do figures **congruent** tab hoti hain jab ek ko doosri ke upar rakhne (superposition) par wo bilkul dhak jaye. Phir triangles mein humne seekha ki ΔABC ≅ ΔPQR likhte waqt **order** bahut zaroori hai, kyunki isse pata chalta hai ki kaun sa vertex kis vertex se milta hai. Isi order se humne **6 barabar parts** (3 sides, 3 angles) padhna seekha, aur ye bhi ki congruence pakki ho jaye to baaki parts **CPCT** se barabar maan sakte hain.

Par ek sawal reh gaya tha: **congruence pakki kaise karein?** Kya har baar triangle kaat kar doosre ke upar rakhna padega? Ya saare 6 parts naapne padenge? Is topic mein yahi seekhenge: **sirf 3 sahi parts** naap kar kaise pata chalta hai ki do triangles congruent hain.

---

## Salma darzi ki kahani

Salma aapa mohalle ki sabse mashhoor darzi hain. Ek din ek shaadi wale ghar se order aaya: "Humein **50 bilkul ek jaisi** triangle jhandiyan (bunting) chahiye. Ye rahi ek namoone ki jhandi."

Unka chela Golu bola, "Aapa, main is jhandi ki teeno sides aur teeno angles naap leta hoon. Phir har nayi jhandi ke bhi chhe ke chhe naap kar milaunga."

Salma aapa hans padi. "Golu, 50 jhandiyon ke 300 naap? Shaam ho jayegi! Main tujhe ek raaz batati hoon. Agar tu **sahi teen cheezein** naap le, to jhandi apne aap waisi hi banegi. Baaki teen naapne ki zaroorat hi nahi."

Golu ne poocha, "Kaunsi teen?"

Salma aapa ne kaha, "Yahi to asli kala hai. Kuch jodiyan kaam karti hain, kuch dhokha deti hain."

Yahi "sahi teen cheezein" is topic ke **criteria** hain: SAS, ASA, AAS, SSS aur RHS. Aur jo dhokha deti hain, wo AAA aur SSA hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Criterion** (bahuvachan: criteria) | Ek shart ya niyam jisse koi baat pakki ki jaati hai | SAS ek criterion hai |
| **Included angle** | Do sides ke **beech** ka angle, yaani jahan wo dono sides milti hain | AB aur BC ke beech ∠B |
| **Included side** | Do angles ke **beech** ki side, yaani jo dono angles ke vertex ko jodti hai | ∠A aur ∠B ke beech side AB |
| **Hypotenuse** | Right triangle mein right angle ke saamne wali (sabse lambi) side | ΔABC mein ∠B = 90° ho to AC |
| **Relation** | Do cheezon ke beech ka rishta | "≅" ek relation hai |
| **Reflexive / Symmetric / Transitive** | Rishte ki teen khaasiyat (Part A mein samjhenge) | ΔABC ≅ ΔABC |

---

## Part A: Congruence Relation (saare triangles ke beech ka rishta)

"Congruent hona" do triangles ke beech ka ek **rishta (relation)** hai. Is rishte ki teen khaasiyat hain.

### 1. Reflexive: har triangle khud se congruent hai

**ΔABC ≅ ΔABC**

Ye sunne mein bahut seedhi baat lagti hai. Aap aaine ke saamne khade ho to aapka **naap aapke hi barabar** hai. Koi triangle apne aap ke upar rakho to wo bilkul dhak jayega.

### 2. Symmetric: ulta bhi sach hai

**Agar ΔABC ≅ ΔPQR, to ΔPQR ≅ ΔABC**

Agar Ritu ki chappal Neha ke pair mein fit aati hai aur dono ka size bilkul ek hai, to Neha ki chappal bhi Ritu ke pair mein fit aayegi. Rishta dono taraf se chalta hai.

### 3. Transitive: chain mein chalta hai

**Agar ΔABC ≅ ΔPQR aur ΔPQR ≅ ΔXYZ, to ΔABC ≅ ΔXYZ**

Salma aapa ki jhandi wali baat hi lo. Har nayi jhandi namoone jaisi hai. To pehli nayi jhandi aur doosri nayi jhandi bhi aapas mein ek jaisi hongi, chahe humne unhe seedhe milaya na ho.

Ye wahi baat hai jo Euclid ka [Axiom 1](../euclids-geometry/euclids-geometry.md) kehta hai: "Jo cheezein ek hi cheez ke barabar hon, wo aapas mein bhi barabar hoti hain."

> Jis rishte mein teeno khaasiyat hon, use maths mein **equivalence relation** kehte hain. Ye naam aage ki classes mein zyada kaam aayega. Abhi bas itna yaad rakho ki congruence teeno shartein poori karta hai.

---

## Part B: Saare 6 parts naapne ki zaroorat kyun nahi?

Ek triangle ke 6 parts hote hain: 3 sides aur 3 angles. Par ye 6 parts **aapas mein jude hue** hain:

- Teeno angles ka sum hamesha **180°** hota hai ([Triangles Topic 2](../triangles/triangles-part2.md) mein dekha tha). To do angles pata hain, to teesra apne aap tay ho jata hai.
- Teen sides tay kar do, to triangle ki shape bhi tay ho jati hai (ye SSS mein dekhenge).

Isliye kuch **3 sahi parts** dene par triangle **poori tarah fix** ho jata hai. Use alag shape mein banane ka koi raasta nahi bachta. Jab do triangles mein ye 3 sahi parts barabar hon, to wo congruent hain.

Ab dekhte hain kaunse 3 parts "sahi" hain.

---

## Part C: SAS Criterion (Side-Angle-Side)

> **SAS rule (axiom):** Agar ek triangle ki **do sides aur unke beech ka angle (included angle)** doosre triangle ki do sides aur unke beech ke angle ke barabar hon, to dono triangles congruent hote hain.

```
        A                         P
       /\                        /\
      /  \                      /  \
   5 /    \                  5 /    \
    /      \                  /      \
   /  60°   \                /  60°   \
  B----------C              Q----------R
       7                         7

 AB = PQ = 5,  ∠B = ∠Q = 60°,  BC = QR = 7
 ∠B, AB aur BC ke BEECH hai. ∠Q, PQ aur QR ke BEECH hai.
 To ΔABC ≅ ΔPQR (SAS)
```

### Ye axiom kyun hai, theorem kyun nahi?

Hum ise **prove nahi karte, maan lete hain** (axiom). Aap khud try karke dekho: ek 5 cm ki line, phir uske ek sire par 60° ka angle, phir doosri line 7 cm. Teesri side jodne ka **sirf ek hi tareeka** bachta hai. Har baar wahi triangle banta hai. Isliye ise sach maan liya gaya hai, aur baaki criteria isi ki madad se prove hote hain.

### Sabse zaroori baat: angle BEECH mein hona chahiye

Salma aapa ki zubaan mein: "Do kinaare naapo, aur **jahan wo dono kinaare milte hain** wahan ka kona naapo."

| Diya hua | Kya SAS hai? | Kyun |
|---|---|---|
| AB, BC, ∠B | ✅ Haan | ∠B, AB aur BC dono ka common vertex hai |
| AB, AC, ∠A | ✅ Haan | ∠A, AB aur AC ke beech hai |
| AB, BC, ∠A | ❌ Nahi | ∠A, BC ko chhoota hi nahi. Ye SSA hai (Part H mein dekhenge, ye dhokha deta hai) |

**Trick:** Angle ka vertex wala letter, dono sides ke naam mein aana chahiye. ∠**B** ke liye sides A**B** aur **B**C. Dono mein B hai, to sahi.

---

## Part D: ASA Criterion (Angle-Side-Angle)

> **ASA rule (theorem):** Agar ek triangle ke **do angles aur unke beech ki side (included side)** doosre triangle ke do angles aur unke beech ki side ke barabar hon, to dono triangles congruent hote hain.

```
        A                         D
       /\                        /\
      /  \                      /  \
     /    \                    /    \
    / 50°  \ 70°              / 50°  \ 70°
   B--------C                E--------F
       6                         6

 ∠B = ∠E = 50°,  BC = EF = 6,  ∠C = ∠F = 70°
 BC, ∠B aur ∠C ke vertices ko jodti hai, to BC "included side" hai.
 To ΔABC ≅ ΔDEF (ASA)
```

### Proof ka idea (seedhe shabdon mein)

Ye theorem hai, to ise SAS ki madad se prove kiya jata hai. Poora proof thoda lamba hai, par idea bahut saaf hai.

**Given:** ∠B = ∠E, BC = EF, ∠C = ∠F.
**To prove:** ΔABC ≅ ΔDEF.

Teen hi possibilities hain: AB = DE, ya AB > DE, ya AB < DE.

**Case 1: AB = DE.** Tab AB = DE, ∠B = ∠E, BC = EF. Ye seedha **SAS** hai. Ho gaya.

**Case 2: AB > DE.** To AB par ek point P lo, aisa ki PB = DE.

```
          A
          |\
          | \
          P  \        P, AB par hai aur PB = DE
          |\  \
          | \  \
          B--------C
```

Ab ΔPBC aur ΔDEF mein: PB = DE, ∠B = ∠E, BC = EF. To **SAS** se ΔPBC ≅ ΔDEF.
CPCT se ∠PCB = ∠DFE.
Par diya hua hai ∠ACB = ∠DFE. To ∠PCB = ∠ACB.
Ye tabhi ho sakta hai jab **P aur A ek hi point** hon, kyunki P, A se neeche hai to ∠PCB chhota hona chahiye tha.
Matlab Case 2 asal mein ho hi nahi sakta (AB > DE galat nikla).

**Case 3: AB < DE.** Bilkul yahi tareeka DE par lagao. Ye bhi asambhav nikalta hai.

To sirf Case 1 bachta hai, aur wahan SAS se **ΔABC ≅ ΔDEF**. Isliye ASA sach hai.

Salma aapa ki zubaan mein: "Ek kinaara naapo, aur **uske dono siron** ke kone naapo. Jhandi fix."

---

## Part E: AAS Criterion (Angle-Angle-Side)

> **AAS:** Agar ek triangle ke **do angles aur koi ek side (jo un dono angles ke beech na ho)** doosre triangle ke corresponding parts ke barabar hon, to dono triangles congruent hote hain.

### Ye ASA se kaise nikalta hai?

Yahan [Triangles Topic 2](../triangles/triangles-part2.md) ki **angle sum property** kaam aati hai.

Maan lo ∠A = ∠P aur ∠B = ∠Q, aur side BC = QR di hai. BC, ∠A aur ∠B ke beech **nahi** hai, to ye seedha ASA nahi hai.

Par:
- ∠C = 180° − ∠A − ∠B
- ∠R = 180° − ∠P − ∠Q
- Kyunki ∠A = ∠P aur ∠B = ∠Q, to **∠C = ∠R**.

Ab ∠B = ∠Q, BC = QR, ∠C = ∠R. BC, ∠B aur ∠C ke beech hai. Ye **ASA** hai.

To AAS koi naya niyam nahi, bas **ASA ka hi doosra roop** hai. Do angles barabar hon to teesra angle apne aap barabar ho jata hai, isliye koi bhi ek corresponding side kaafi hai.

```
        A                         P
       /\ 40°                    /\ 40°
      /  \                      /  \
     /    \ 8                  /    \ 8
    / 75°  \                  / 75°  \
   B--------C                Q--------R

 ∠A = ∠P = 40°,  ∠B = ∠Q = 75°,  AC = PR = 8
 AC, ∠A aur ∠B ke beech nahi hai, to ye AAS hai.
 (∠C = ∠R = 180° − 40° − 75° = 65°, to ASA bhi ban jata.)
```

### Dhyan rakho: side "corresponding" honi chahiye

AAS mein side wahi honi chahiye jo dono triangles mein **ek hi jagah** ho. Jaise dono triangles mein "40° wale angle ke saamne wali side". Agar ek triangle mein ek side aur doosre mein koi aur side barabar ho, to kaam nahi chalega.

---

## Part F: SSS Criterion (Side-Side-Side)

> **SSS rule (theorem):** Agar ek triangle ki **teeno sides** doosre triangle ki teeno sides ke barabar hon, to dono triangles congruent hote hain.

```
        A                         X
       /\                        /\
      /  \                      /  \
   4 /    \ 6                4 /    \ 6
    /      \                  /      \
   B--------C                Y--------Z
       7                         7

 AB = XY = 4,  BC = YZ = 7,  CA = ZX = 6
 To ΔABC ≅ ΔXYZ (SSS)
```

### Kyun? Compass wala idea

Salma aapa ke paas sirf teen naap hain: 7, 4 aur 6. Wo aise jhandi banati hain:

1. 7 ki seedhi line BC kheencho.
2. B ko centre maan kar 4 ki doori par ek arc kheencho.
3. C ko centre maan kar 6 ki doori par ek arc kheencho.
4. Dono arc line ke upar **sirf ek jagah** milte hain. Wahi point A hai.

Teeno sides tay hain to teesra kona ek hi jagah aa sakta hai. Isliye triangle ki shape fix ho jati hai. Angles naapne ki zaroorat hi nahi.

(Line ke neeche bhi arcs ek jagah milte hain, par wo bas ulta rakha hua wahi triangle hai, jo upar rakhne par dhak jayega.)

---

## Part G: RHS Criterion (Right angle-Hypotenuse-Side)

> **RHS rule (theorem):** Agar do **right triangles** mein **hypotenuse aur ek side** barabar hon, to dono triangles congruent hote hain.

```
   A                          P
   |\                         |\
   | \                        | \
 5 |  \ 13                  5 |  \ 13
   |   \                      |   \
   |90° \                     |90° \
   B-----C                    Q-----R

 ∠B = ∠Q = 90°,  hypotenuse AC = PR = 13,  AB = PQ = 5
 To ΔABC ≅ ΔPQR (RHS)
```

### Teen shartein, teeno zaroori

1. **R:** Dono triangles mein ek **right angle** ho.
2. **H:** Dono ka **hypotenuse** barabar ho.
3. **S:** Ek aur **side** barabar ho (corresponding).

### Ye SSA jaisa kyun dikhta hai?

RHS mein do sides (hypotenuse aur ek side) aur ek angle (90°) hai, aur wo angle dono sides ke beech **nahi** hai. Ye SSA jaisa hi hai! Aage Part H mein dekhenge ki SSA aam taur par kaam nahi karta. Par **right triangle ek khaas case** hai, jahan ye kaam kar jata hai. Isliye RHS sirf right triangles ke liye hai.

---

## Part H: Kya kaam NAHI karta? (Dhokha dene wali jodiyan)

Golu ne socha, "Koi bhi teen cheezein naap lo, kaam ho jayega." Salma aapa ne do misaalein di.

### 1. AAA (teeno angles barabar): kaam NAHI karta

```
        A
       /\
      /  \                      P
     /    \                    /\
    / 60°  \                  /  \
   /        \                / 60°\
  B----------C              Q------R
       6                       3

 Dono equilateral hain. Teeno angles 60°, 60°, 60°.
 Par ek ki side 6, doosre ki 3. Ek bada, ek chhota.
```

Teeno angles barabar hain, phir bhi dono triangles **congruent nahi**. Inki **shape** ek jaisi hai par **size** alag hai. Ek doosre ka zoomed version hai. (Aise triangles ko **similar** kehte hain. Ye Class 10 mein padhenge.)

**Kyun nahi chalta:** AAA mein ek bhi side ka naap nahi hai, to size tay hi nahi hota.

### 2. SSA (do sides aur ek non-included angle): kaam NAHI karta

AB = 5, ∠B = 40°, aur AC = 4 diya hai. ∠B, AB aur AC ke beech **nahi** hai.

```
                A
               /|\ \
            5 / | \  \  4
             /  |  \4  \
            /40°|   \    \
           B----+---C₂-----C₁------->
                (scale par nahi)

 A se 4 ki doori par ek arc kheencho.
 Wo B wali seedhi line ko DO jagah kaatta hai: C₂ aur C₁.
```

Dono triangles ΔABC₂ aur ΔABC₁ mein AB = 5, ∠B = 40°, AC = 4 hai. Par ek chhota triangle hai, ek bada. Yaani **do alag triangles** ban gaye. Isliye SSA se congruence pakki nahi hoti.

**Yaad rakhne ki trick:** SSA mein angle "kinaare par latka hua" hai, dono sides ke beech pakda hua nahi. Isliye teesri side idhar-udhar jhool sakti hai. (Sirf right triangles mein, RHS ke roop mein, ye chal jata hai.)

---

## Part I: Saare criteria ek nazar mein

| Criterion | Kya barabar hona chahiye | Khaas shart |
|---|---|---|
| **SAS** | 2 sides + 1 angle | Angle dono sides ke **beech** ho |
| **ASA** | 2 angles + 1 side | Side dono angles ke **beech** ho |
| **AAS** | 2 angles + 1 side | Side beech mein **na** ho, par corresponding ho |
| **SSS** | 3 sides | Koi shart nahi |
| **RHS** | Right angle + hypotenuse + 1 side | Sirf **right triangles** ke liye |
| ~~AAA~~ | 3 angles | **Kaam nahi karta** (size tay nahi) |
| ~~SSA~~ | 2 sides + non-included angle | **Kaam nahi karta** (do triangles ban sakte hain) |

### Kaunsa criterion? (Pehchanne ki practice)

ΔABC aur ΔPQR mein:

**1.** AB = PQ, ∠B = ∠Q, BC = QR
∠B, AB aur BC ke beech hai. **SAS** ✅

**2.** ∠A = ∠P, AB = PQ, ∠B = ∠Q
AB, ∠A aur ∠B ke beech hai. **ASA** ✅

**3.** ∠A = ∠P, ∠C = ∠R, AB = PQ
AB, ∠A aur ∠C ke beech nahi hai (∠A aur ∠C ke beech AC hai). **AAS** ✅

**4.** AB = PQ, BC = QR, CA = RP
Teeno sides. **SSS** ✅

**5.** ∠C = ∠R = 90°, AB = PQ, AC = PR
Right angle C par hai, to hypotenuse AB hai. AB = PQ (hypotenuse), aur AC = PR (side). **RHS** ✅

**6.** ∠A = ∠P, ∠B = ∠Q, ∠C = ∠R
Sirf angles. **AAA**, koi criterion nahi ❌

**7.** AB = PQ, AC = PR, ∠C = ∠R
∠C, AB ko nahi chhoota. Ye **SSA** hai, koi criterion nahi ❌

---

## Part J: Proofs (Given, To prove, Statement-Reason)

Proof likhne ka format (Given, To prove, Proof table) [Euclid chapter ke Topic 4](../euclids-geometry/euclids-geometry-part4.md) mein seekha tha. Yahan wahi format use karenge. Har proof mein pehle sahi criterion se congruence dikhayenge, phir **CPCT** se jo maanga hai wo nikalenge.

### Proof 1 (SAS): Perpendicular bisector par har point dono siron se barabar door hai

Line l, segment AB ki perpendicular bisector hai, aur AB ko O par kaatti hai. P, line l par koi bhi point hai. Prove karo ki PA = PB.

```
             P
            /|\
           / | \
          /  |  \
         /   |   \
        A----O----B
             |
             l
     AO = OB,  PO ⊥ AB
```

**Given:** l, AB ki perpendicular bisector hai, O par. P, l par hai.
**To prove:** PA = PB.

| Statement | Reason |
|---|---|
| ΔPOA aur ΔPOB mein: | |
| AO = BO | O, AB ka midpoint hai (bisector) |
| ∠POA = ∠POB = 90° | l ⊥ AB |
| PO = PO | Common side |
| ∴ ΔPOA ≅ ΔPOB | **SAS** (∠O dono sides ke beech hai) |
| ∴ PA = PB | CPCT |

Hence proved.

### Proof 2 (SAS): Quadrilateral mein do barabar sides aur barabar angles

ABCD ek quadrilateral hai jisme AD = BC aur ∠DAB = ∠CBA. Prove karo ki ΔABD ≅ ΔBAC, aur BD = AC.

```
     D             C
      \           /
       \         /
        \       /
         A-----B
   AD = BC,  ∠DAB = ∠CBA
```

**Given:** AD = BC, ∠DAB = ∠CBA.
**To prove:** ΔABD ≅ ΔBAC, aur BD = AC.

| Statement | Reason |
|---|---|
| ΔABD aur ΔBAC mein: | |
| AD = BC | Given |
| ∠DAB = ∠CBA | Given |
| AB = BA | Common side |
| ∴ ΔABD ≅ ΔBAC | **SAS** (∠A, AD aur AB ke beech; ∠B, BC aur BA ke beech) |
| ∴ BD = AC | CPCT |

Hence proved.

**Order dhyan se dekho:** A ↔ B, B ↔ A, D ↔ C. Isliye ΔABD ≅ **ΔBAC** likha, ΔABC nahi.

### Proof 3 (ASA): Parallel lines aur midpoint

AB ∥ CD, aur O, segment AD ka midpoint hai. AD aur BC ek doosre ko O par kaatte hain. Prove karo ki ΔAOB ≅ ΔDOC, aur O, BC ka bhi midpoint hai.

```
     A--------B
      \      /
       \    /
        \  /
         O
        /  \
       /    \
      /      \
     C--------D
   AB ∥ CD,  AO = OD
```

**Given:** AB ∥ CD, AO = OD.
**To prove:** ΔAOB ≅ ΔDOC, aur BO = CO.

| Statement | Reason |
|---|---|
| ΔAOB aur ΔDOC mein: | |
| ∠OAB = ∠ODC | Alternate interior angles (AB ∥ CD, transversal AD) |
| AO = DO | Given |
| ∠AOB = ∠DOC | Vertically opposite angles |
| ∴ ΔAOB ≅ ΔDOC | **ASA** (AO, ∠A aur ∠O ke beech hai) |
| ∴ BO = CO | CPCT |

To O, BC ka bhi midpoint hai. Hence proved.

(Alternate interior angles aur vertically opposite angles [Lines and Angles ke Topic 3](../lines-and-angles/lines-and-angles-part3.md) mein dekhe the.)

### Proof 4 (ASA): Diagonal dono angles ko aadha kare

Quadrilateral ABCD mein diagonal AC, ∠A aur ∠C dono ko bisect karta hai. Prove karo ki ΔABC ≅ ΔADC, aur AB = AD, CB = CD.

```
            B
           / \
          /   \
         A-----C
          \   /
           \ /
            D
   ∠BAC = ∠DAC,  ∠BCA = ∠DCA
```

**Given:** ∠BAC = ∠DAC, ∠BCA = ∠DCA.
**To prove:** ΔABC ≅ ΔADC, AB = AD, CB = CD.

| Statement | Reason |
|---|---|
| ΔABC aur ΔADC mein: | |
| ∠BAC = ∠DAC | AC, ∠A ko bisect karta hai |
| AC = AC | Common side |
| ∠BCA = ∠DCA | AC, ∠C ko bisect karta hai |
| ∴ ΔABC ≅ ΔADC | **ASA** (AC, ∠A aur ∠C ke beech hai) |
| ∴ AB = AD aur CB = CD | CPCT |

Hence proved.

### Proof 5 (AAS): Angle bisector se dono arms tak ki doori

Line l, ∠A ki bisector hai. B, line l par ek point hai. BP aur BQ, B se ∠A ki dono arms par perpendicular hain. Prove karo ki ΔAPB ≅ ΔAQB, aur BP = BQ.

```
              P
             /|
            / |
           /  |
          A---+------B----- l
           \  |     /
            \ |   /
             \| /
              Q
   (scale par nahi)
   ∠PAB = ∠QAB,  BP ⊥ AP,  BQ ⊥ AQ
```

**Given:** ∠PAB = ∠QAB, ∠APB = ∠AQB = 90°.
**To prove:** ΔAPB ≅ ΔAQB, aur BP = BQ.

| Statement | Reason |
|---|---|
| ΔAPB aur ΔAQB mein: | |
| ∠PAB = ∠QAB | l, ∠A ki bisector hai |
| ∠APB = ∠AQB | Dono 90° hain (perpendicular) |
| AB = AB | Common side |
| ∴ ΔAPB ≅ ΔAQB | **AAS** (AB, ∠A aur ∠P ke beech nahi hai) |
| ∴ BP = BQ | CPCT |

Hence proved. Matlab angle bisector par koi bhi point, angle ki dono arms se **barabar door** hota hai.

### Proof 6 (SSS): Patang (kite) ka diagonal angle ko aadha karta hai

ABCD mein AB = AD aur CB = CD. Prove karo ki ΔABC ≅ ΔADC, aur AC, ∠A ko bisect karta hai.

```
            B
           / \
          /   \
         A-----C
          \   /
           \ /
            D
   AB = AD,  CB = CD
```

**Given:** AB = AD, CB = CD.
**To prove:** ΔABC ≅ ΔADC, aur ∠BAC = ∠DAC.

| Statement | Reason |
|---|---|
| ΔABC aur ΔADC mein: | |
| AB = AD | Given |
| CB = CD | Given |
| AC = AC | Common side |
| ∴ ΔABC ≅ ΔADC | **SSS** |
| ∴ ∠BAC = ∠DAC | CPCT |

To AC, ∠A ko bisect karta hai. Hence proved.

Dekho, Proof 4 aur Proof 6 ka figure ek jaisa hai, par **diya hua alag** hai. Proof 4 mein angles diye the to ASA laga, yahan sides di hain to SSS laga. Criterion hamesha diye hue parts se chuna jata hai.

### Proof 7 (RHS): Do right triangles, common base

AB ⊥ BC aur DC ⊥ BC, aur AC = DB. Prove karo ki ΔABC ≅ ΔDCB, aur AB = DC.

```
   A           D
   |\         /|
   | \       / |
   |  \     /  |
   |   \   /   |
   |    \ /    |
   |     X     |
   |    / \    |
   |   /   \   |
   B-----------C
   AB ⊥ BC,  DC ⊥ BC,  AC = DB
```

**Given:** ∠ABC = ∠DCB = 90°, AC = DB.
**To prove:** ΔABC ≅ ΔDCB, aur AB = DC.

| Statement | Reason |
|---|---|
| ΔABC aur ΔDCB mein: | |
| ∠ABC = ∠DCB = 90° | Given (dono right angles) |
| AC = DB | Given (dono hypotenuse hain, right angle ke saamne) |
| BC = CB | Common side |
| ∴ ΔABC ≅ ΔDCB | **RHS** |
| ∴ AB = DC | CPCT |

Hence proved.

---

## Aam galtiyan (bachke rehna)

**Galti 1: SAS mein koi bhi angle le lena**
AB, BC aur ∠A diye hon to ye SAS **nahi** hai, SSA hai. SAS mein angle **dono sides ke beech** hona chahiye: AB aur BC ke liye ∠B.

**Galti 2: ASA aur AAS ko mix karna**
∠A, ∠B aur AB → ASA (AB beech mein hai).
∠A, ∠B aur BC → AAS (BC beech mein nahi hai).
Dono sahi criteria hain, par naam alag hai. Proof mein sahi naam likho.

**Galti 3: AAA ko criterion samajhna**
Teeno angles barabar hone se sirf **shape** ek jaisi hoti hai, size nahi. 3 cm aur 6 cm side wale equilateral triangles congruent nahi hain.

**Galti 4: RHS ko normal triangles par lagana**
RHS **sirf right triangles** ke liye hai. Normal triangle mein do sides aur non-included angle (SSA) se congruence pakki nahi hoti.

**Galti 5: RHS mein hypotenuse ki jagah koi aur side lena**
RHS mein **hypotenuse** barabar hona zaroori hai. Do legs barabar hon (aur right angle), to wo RHS nahi balki **SAS** hai (right angle dono legs ke beech hai). Wo bhi sahi hai, bas naam alag hai.

**Galti 6: Congruence ka order galat likhna**
Proof 2 mein A ↔ B, B ↔ A, D ↔ C hai. To ΔABD ≅ ΔBAC likhna hai. ΔABD ≅ ΔABC likhoge to CPCT se galat parts barabar ho jayenge.

**Galti 7: CPCT ko criterion ki jagah use karna**
CPCT **congruence pakki hone ke baad** hi use hota hai. Pehle SAS/ASA/AAS/SSS/RHS se ΔABC ≅ ΔPQR dikhao, tab CPCT likho. Ulta nahi.

**Galti 8: Common side ka reason na likhna**
Jab dono triangles ek side share karte hain (jaise AC = AC), to reason mein "**Common side**" likhna zaroori hai. Ye bhi teen parts mein se ek part hai.

---

## Quick Recap

- Congruence ek **relation** hai jo **reflexive** (ΔABC ≅ ΔABC), **symmetric** (ulta bhi sach) aur **transitive** (chain mein chalta hai) hai.
- Saare 6 parts naapne ki zaroorat nahi. **Sahi 3 parts** kaafi hain.
- **SAS** (axiom): 2 sides + **unke beech ka** angle.
- **ASA** (theorem): 2 angles + **unke beech ki** side. SAS se prove hota hai.
- **AAS:** 2 angles + koi corresponding side. Angle sum se teesra angle barabar, phir ASA.
- **SSS** (theorem): teeno sides.
- **RHS** (theorem): right angle + hypotenuse + ek side. **Sirf right triangles** ke liye.
- **AAA aur SSA kaam nahi karte.** AAA mein size tay nahi hota, SSA mein do triangles ban sakte hain.
- Proof mein: pehle criterion se congruence, phir **CPCT** se baaki parts.

---

## Practice Questions

1. In ΔABC and ΔPQR, state the congruence criterion (SAS, ASA, AAS, SSS or RHS) that applies, or write "not possible":
   (a) AB = PQ, BC = QR, ∠B = ∠Q
   (b) ∠A = ∠P, ∠B = ∠Q, AB = PQ
   (c) AB = PQ, BC = QR, CA = RP
   (d) ∠B = ∠Q = 90°, AC = PR, BC = QR
   (e) ∠A = ∠P, ∠B = ∠Q, BC = QR
   (f) ∠A = ∠P, ∠B = ∠Q, ∠C = ∠R
   (g) AB = PQ, AC = PR, ∠B = ∠Q

2. You want to prove ΔABC ≅ ΔPQR by SAS, and you know AB = PQ and BC = QR. Which pair of angles must be equal?

3. Two line segments AB and CD bisect each other at O. Prove that ΔAOC ≅ ΔBOD. Hence show that AC = BD and AC ∥ BD.

4. In quadrilateral ACBD, AC = AD and AB bisects ∠A. Show that ΔABC ≅ ΔABD, and hence BC = BD.

5. Two lines l and m intersect at A. P is a point such that its perpendicular distances from l and m are equal (PB ⊥ l, PC ⊥ m, PB = PC). Prove that AP bisects the angle between l and m.

6. ΔABC and ΔDCB are drawn on the same base BC, with AB = DC and AC = DB. Prove that ∠ABC = ∠DCB.

7. State whether each statement is true or false. Give a reason.
   (a) If all three angles of two triangles are equal, the triangles are congruent.
   (b) SSA is a valid criterion of congruence.
   (c) RHS can be used only for right triangles.
   (d) If ΔABC ≅ ΔDEF, then ΔDEF ≅ ΔABC.
   (e) In SAS, any angle of the triangle can be used.

8. Explain why the AAS criterion follows from the ASA criterion.

### Answers

1. (a) ∠B, AB aur BC ke beech hai. **SAS**
   (b) AB, ∠A aur ∠B ke beech hai. **ASA**
   (c) Teeno sides. **SSS**
   (d) Right angle B par hai, to AC hypotenuse hai. AC = PR (hypotenuse), BC = QR (side). **RHS**
   (e) BC, ∠A aur ∠B ke beech nahi hai. **AAS**
   (f) Sirf angles (AAA). **Not possible**
   (g) ∠B, AC ko nahi chhoota (AB aur AC ke beech ∠A hai). Ye SSA hai. **Not possible**

2. SAS mein angle dono sides ke beech hona chahiye. AB aur BC dono B par milti hain, aur PQ aur QR dono Q par. To **∠B = ∠Q** hona chahiye.

3. **Given:** AO = OB, CO = OD.
   **To prove:** ΔAOC ≅ ΔBOD, AC = BD, AC ∥ BD.

   | Statement | Reason |
   |---|---|
   | ΔAOC aur ΔBOD mein: | |
   | AO = BO | O, AB ka midpoint hai |
   | ∠AOC = ∠BOD | Vertically opposite angles |
   | CO = DO | O, CD ka midpoint hai |
   | ∴ ΔAOC ≅ ΔBOD | **SAS** |
   | ∴ AC = BD | CPCT |
   | ∴ ∠OAC = ∠OBD | CPCT |

   ∠OAC aur ∠OBD, lines AC aur BD ke liye transversal AB par **alternate interior angles** hain, aur barabar hain. To **AC ∥ BD** ([Lines and Angles Topic 3](../lines-and-angles/lines-and-angles-part3.md) ka Alternate Interior Angles theorem ka converse). Hence proved.

4. **Given:** AC = AD, ∠CAB = ∠DAB.
   **To prove:** ΔABC ≅ ΔABD, aur BC = BD.

   | Statement | Reason |
   |---|---|
   | ΔABC aur ΔABD mein: | |
   | AC = AD | Given |
   | ∠CAB = ∠DAB | AB, ∠A ko bisect karta hai |
   | AB = AB | Common side |
   | ∴ ΔABC ≅ ΔABD | **SAS** (∠A, AC aur AB ke beech hai) |
   | ∴ BC = BD | CPCT |

5. **Given:** PB ⊥ l, PC ⊥ m, PB = PC.
   **To prove:** ∠PAB = ∠PAC.

   | Statement | Reason |
   |---|---|
   | ΔABP aur ΔACP mein: | |
   | ∠ABP = ∠ACP = 90° | PB ⊥ l, PC ⊥ m |
   | AP = AP | Common side (dono triangles ka hypotenuse) |
   | PB = PC | Given |
   | ∴ ΔABP ≅ ΔACP | **RHS** |
   | ∴ ∠PAB = ∠PAC | CPCT |

   To AP, l aur m ke beech ke angle ko bisect karta hai. Hence proved.

6. **Given:** AB = DC, AC = DB.
   **To prove:** ∠ABC = ∠DCB.

   | Statement | Reason |
   |---|---|
   | ΔABC aur ΔDCB mein: | |
   | AB = DC | Given |
   | AC = DB | Given |
   | BC = CB | Common side |
   | ∴ ΔABC ≅ ΔDCB | **SSS** |
   | ∴ ∠ABC = ∠DCB | CPCT |

7. (a) **False.** ❌ AAA se sirf shape ek jaisi hoti hai, size nahi. Jaise 3 cm aur 6 cm side wale equilateral triangles.
   (b) **False.** ❌ SSA se do alag triangles ban sakte hain (Part H).
   (c) **True.** ✅ RHS mein right angle aur hypotenuse chahiye, jo sirf right triangle mein hote hain.
   (d) **True.** ✅ Congruence symmetric hai.
   (e) **False.** ❌ SAS mein angle dono barabar sides ke **beech** hona chahiye.

8. AAS mein do angles barabar hain, maan lo ∠A = ∠P aur ∠B = ∠Q. Angle sum property se ∠C = 180° − ∠A − ∠B aur ∠R = 180° − ∠P − ∠Q, to **∠C = ∠R**. Ab teeno angles barabar hain, to di hui side jo bhi ho, wo kisi na kisi do angles ke **beech** zaroor hogi. Jaise BC, ∠B aur ∠C ke beech hai. To ye **ASA** ban jata hai. Isliye AAS, ASA ka hi doosra roop hai.

---

Shuru mein itne saare criteria dekh ke ghabrana mat. Bas Salma aapa ki baat yaad rakho: **sahi teen cheezein naapo, jhandi apne aap fix.** Aur do dhokhebaaz, AAA aur SSA, se door raho. Kuch proofs khud likhoge to criterion pehchanna apne aap aa jayega.

**Agle topic mein:** Ab ye criteria hamare haath mein hathiyaar ki tarah hain. Topic 3 mein inhi ki madad se ek mashhoor baat **prove** karenge: isosceles triangle mein barabar sides ke saamne wale angles barabar kyun hote hain. Triangles chapter mein jo baat sirf "maan li" thi, ab uska proof milega.
