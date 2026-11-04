# Chapter: Quadrilaterals (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [quadrilaterals.md](quadrilaterals.md) se aage chalti hai.** Proofs mein [Congruence of Triangles](../congruence-of-triangles/congruence-of-triangles-part2.md) ke criteria (ASA, AAS) aur [Lines and Angles](../lines-and-angles/lines-and-angles-part3.md) ke parallel lines wale results kaam aayenge.
> **Topics covered in this file:**
> 2. The Mid-point Theorem

---

# Topic 2: The Mid-point Theorem

Topic 1 mein Tanvi aur Arjun ke Diwali wale carrom ke khel se shuru karke humne quadrilaterals ki poori family dekhi: trapezium, parallelogram, rectangle, rhombus, square aur kite (patang). Phir parallelogram ke theorems aur unke converse prove kiye. Unme se ek theorem is topic mein baar baar kaam aayega:

> **"Ek pair opposite sides barabar aur parallel" theorem: Agar quadrilateral ka ek pair of opposite sides barabar bhi ho aur parallel bhi, to wo parallelogram hai.**

Ab hum wapas ek triangle ke andar jayenge. Is baar ek khaas line dekhenge: wo line jo do sides ke **midpoints** ko jodti hai. Ye chhoti si line kamaal ke kaam karti hai, aur uska raaz humein parallelogram ke theorem se hi milega.

---

## Bhola kaka ka khet

Bhola kaka ke paas ek **triangle ke aakar ka khet** hai. Uske kone A, B aur C hain. Neeche wali side BC sadak ke saath lagti hai, aur **40 metre** lambi hai.

Kaka chahte hain ki khet ka upar wala hissa bakriyon ke liye alag ho jaye. To unhone socha:

- Side AB ke **beech ke point** par ek khoonta gaado (E).
- Side AC ke **beech ke point** par ek khoonta gaado (F).
- E aur F ke beech **seedhi baadh (fence)** laga do.

Ab do sawaal the:

1. Baadh ke liye kitna taar khareedna padega?
2. Kya ye baadh sadak (BC) ke **bilkul seedh mein**, yaani parallel, hogi?

Kaka ka beta school mein Class 9 mein padhta tha. Usne turant kaha: "Baadh sadak ke **parallel** hogi, aur uski lambai sadak ki **aadhi**, yaani **20 metre** hogi." Naap kar dekha, to bilkul sahi nikla.

Beta itna pakka kaise tha? Wo **Mid-point Theorem** jaanta tha. Is topic mein hum yahi seekhenge.

### Ek chhota sa activity (kaagaz mod kar dekho)

Ek kaagaz ka koi bhi triangle kaat lo. Upar wale kone A ko neeche wali side BC par rakh kar mod do. Jo **crease (modne ka nishaan)** banega, use dekho:

- Wo AB aur AC ko unke **beech mein** kaatta hai.
- Wo BC ke **parallel** hai.
- Use naapo: wo BC ka **aadha** hai.

Ye koi jaadu nahi, ek theorem hai. Chalo prove karte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Mid-point (madhya bindu)** | Kisi line segment ka theek beech wala point, jo use do barabar hisson mein baante | AB = 10 cm ho to midpoint A se 5 cm par |
| **Bisect karna** | Kisi cheez ko do barabar hisson mein baantna | "F, AC ko bisect karta hai" matlab AF = FC |
| **Mid-point segment** | Triangle ki do sides ke midpoints ko jodne wali line | ΔABC mein E (AB ka midpoint) aur F (AC ka midpoint) ko jodne wala EF |
| **Converse** | Kisi theorem ka "ulta" roop, jahan given aur to prove aapas mein jagah badal lete hain | "Midpoint jodo, parallel milega" ka ulta: "midpoint se parallel kheencho, doosra midpoint milega" |
| **Intercept** | Do lines ke beech kisi teesri line ka kata hua tukda | (Part F mein extra ke roop mein) |

---

## Part A: Mid-point Theorem kya kehta hai

> **Mid-point Theorem:** Kisi triangle ki **do sides ke midpoints ko jodne wala line segment teesri side ke parallel hota hai, aur teesri side ka aadha hota hai.**

Seedhi bhasha mein: ΔABC mein agar E, AB ka midpoint hai aur F, AC ka midpoint hai, to:

1. **EF ∥ BC**
2. **EF = ½ BC**

```
            A
           / \
          /   \
       E •-----• F        EF ∥ BC
        /       \         EF = ½ BC
       /         \
      B-----------C
```

Bhola kaka ke khet mein BC = 40 m tha, to EF = ½ × 40 = **20 m**.

---

## Part B: Mid-point Theorem ka proof

Ye proof thoda lamba hai, par har step pichle topics ki kisi pakki baat par tika hai. Dheere dheere chalte hain.

**Given:** ΔABC mein E, AB ka midpoint hai (AE = EB), aur F, AC ka midpoint hai (AF = FC).

**To prove:** (i) EF ∥ BC (ii) EF = ½ BC

**Construction (kya extra banana hai):** EF ko aage badhao. C se ek line BA ke parallel kheencho. Ye line badhayi hui EF ko **D** par kaategi.

```
               A
              / \
             /   \
            /     \
         E •-------• F-------• D
          /         \       /
         /           \     /
        /             \   /
       B---------------• C

   CD ∥ BA (construction)      (scale par nahi)
```

**Idea pehle samajh lo:** Hum pehle dikhayenge ki ΔAEF aur ΔCDF congruent hain. Usse CD = AE milega. Phir EBCD ek parallelogram ban jayega, aur parallelogram ki opposite sides parallel aur barabar hoti hain. Bas, wahi se EF ∥ BC aur EF = ½ BC nikal aayega.

**Step 1: ΔAEF ≅ ΔCDF dikhao.**

| Statement | Reason |
|---|---|
| AF = CF | F, AC ka midpoint hai (given) |
| ∠AFE = ∠CFD | Vertically opposite angles ([Lines and Angles Topic 3](../lines-and-angles/lines-and-angles-part3.md)) |
| ∠EAF = ∠DCF | Alternate interior angles: AB ∥ CD aur AC transversal hai |
| ΔAEF ≅ ΔCDF | **ASA** (side AF, dono angles ke beech mein hai) ([Congruence Topic 2](../congruence-of-triangles/congruence-of-triangles-part2.md)) |

Correspondence dhyan se dekho: A ↔ C, E ↔ D, F ↔ F.

**Step 2: CPCT se do baatein nikalo.**

| Statement | Reason |
|---|---|
| EF = DF | CPCT |
| AE = CD | CPCT |

**Step 3: EBCD parallelogram hai.**

| Statement | Reason |
|---|---|
| AE = BE | E, AB ka midpoint hai (given) |
| BE = CD | Dono AE ke barabar hain (Euclid ka Axiom 1) |
| BE ∥ CD | BA ∥ CD (construction), aur BE usi line BA ka hissa hai |
| EBCD ek parallelogram hai | Ek pair of opposite sides (BE aur CD) **barabar bhi aur parallel bhi** (Topic 1, "Ek pair opposite sides barabar aur parallel" theorem) |

**Step 4: Result nikalo.**

| Statement | Reason |
|---|---|
| ED ∥ BC | Parallelogram ki opposite sides parallel hoti hain (Topic 1) |
| EF ∥ BC | EF, ED ka hi hissa hai |
| ED = BC | Parallelogram ki opposite sides barabar hoti hain (Topic 1, "Opposite sides barabar" theorem) |
| EF = ½ ED | EF = DF (Step 2), to F, ED ka midpoint hai |
| **EF = ½ BC** | ED = BC rakhne par |

**Hence proved.**

---

## Part C: Converse of the Mid-point Theorem

Ab ulta sawaal poochte hain. Bhola kaka ne is baar sirf **ek** khoonta AB ke beech mein (E par) gaada. Phir wahan se sadak ke **parallel** baadh lagate gaye, jab tak baadh AC se na takra jaye. Kya baadh AC ke **theek beech mein** khatam hogi?

Haan! Yahi converse kehta hai.

> **Converse:** Kisi triangle ki ek side ke **midpoint se**, doosri side ke **parallel** kheenchi gayi line, **teesri side ko bisect karti hai** (theek beech se kaatti hai).

### Proof

**Given:** ΔABC mein E, AB ka midpoint hai. E se ek line l, BC ke parallel kheenchi gayi, jo AC ko F par kaatti hai.

**To prove:** F, AC ka midpoint hai, yaani AF = FC.

**Construction:** Wahi purana tarika. C se BA ke parallel line kheencho, jo badhayi hui EF ko D par kaate. (Upar wala hi diagram.)

| Statement | Reason |
|---|---|
| ED ∥ BC | Line l, BC ke parallel hai (given) |
| BE ∥ CD | Construction |
| EBCD ek parallelogram hai | Dono pairs of opposite sides parallel hain (parallelogram ki definition, Topic 1) |
| BE = CD | Parallelogram ki opposite sides barabar (Topic 1, "Opposite sides barabar" theorem) |
| AE = BE | E, AB ka midpoint (given) |
| AE = CD | Dono BE ke barabar (Euclid ka Axiom 1) |
| ∠EAF = ∠DCF | Alternate interior angles (AB ∥ CD, transversal AC) |
| ∠AFE = ∠CFD | Vertically opposite angles |
| ΔAEF ≅ ΔCDF | **AAS** (AE aur CD, un angles ke saamne hain jo barabar hain, beech mein nahi) |
| **AF = CF** | CPCT |

**Hence proved.** F, AC ka midpoint hai.

### Theorem aur converse ek saath

| | Kya diya hai | Kya milta hai |
|---|---|---|
| **Mid-point Theorem** | Do sides ke **midpoints** | Jodne wali line **parallel** aur **aadhi** |
| **Converse** | Ek side ka **midpoint** + teesri side ke **parallel** line | Wo line doosri side ko **beech se kaatti** hai |

---

## Part D: Seedhe sawaal (lambai nikalna)

**Example 1:** ΔABC mein D aur E, AB aur AC ke midpoints hain. BC = 14 cm. DE nikalo.

DE = ½ BC = ½ × 14 = **7 cm**

**Example 2:** Usi tarah, agar DE = 4.5 cm ho to BC kitna?

BC = 2 × DE = 2 × 4.5 = **9 cm**

**Example 3 (algebra wala):** ΔABC mein D aur E, AB aur AC ke midpoints hain. DE = (2x + 1) cm aur BC = (5x − 4) cm. x aur BC nikalo.

Mid-point theorem se BC = 2 × DE:
5x − 4 = 2(2x + 1)
5x − 4 = 4x + 2
x = **6**

DE = 2(6) + 1 = 13 cm, BC = 5(6) − 4 = **26 cm**

**Jaanch:** 26 = 2 × 13 ✅

**Example 4 (converse wala):** ΔPQR mein X, PQ ka midpoint hai. X se QR ke parallel line PR ko Y par kaatti hai. PR = 11 cm ho to PY nikalo.

Converse se Y, PR ka midpoint hai. To PY = ½ × 11 = **5.5 cm**

---

## Part E: Bade applications

### Application 1: Teeno midpoints jodne se kya banta hai?

ΔABC mein D, E, F kramashah (respectively) BC, CA, AB ke midpoints hain. Inhe jodo.

```
              A
             / \
            /   \
         F •-----• E
          / \   / \
         /   \ /   \
        B-----•-----C
              D
```

Mid-point theorem teen baar lagao:

- F aur E (AB aur AC ke midpoints) → **FE = ½ BC**
- D aur E (BC aur CA ke midpoints) → **DE = ½ AB**
- D aur F (BC aur AB ke midpoints) → **DF = ½ CA**

**Natija 1: Perimeter aadha.**
Perimeter of ΔDEF = ½ BC + ½ AB + ½ CA = **½ × (perimeter of ΔABC)**

**Natija 2: Chaar congruent triangles.**
Maan lo BC = a, CA = b, AB = c. Ab chaaron chhote triangles ki sides dekho:

| Triangle | Teen sides |
|---|---|
| ΔAFE | AF = ½c, AE = ½b, FE = ½a |
| ΔFBD | FB = ½c, BD = ½a, FD = ½b |
| ΔEDC | EC = ½b, DC = ½a, ED = ½c |
| ΔDEF | DE = ½c, EF = ½a, FD = ½b |

Chaaron ki sides ½a, ½b, ½c hain. To **SSS** se chaaron triangles **congruent** hain. Yaani midpoints jodne se triangle **4 bilkul ek jaise tukdon** mein bant jata hai.

**Numeric jaanch:** ΔABC ki sides 8 cm, 10 cm, 12 cm hon (perimeter 30 cm). To ΔDEF ki sides 4, 5, 6 cm, perimeter **15 cm**. Ye 30 ka aadha hai ✅

### Application 2: Kisi bhi quadrilateral ke midpoints

Ye bahut mazedaar result hai. Koi bhi quadrilateral ABCD lo, chahe kitna bhi tedha-medha ho. Uski chaaron sides ke midpoints P (AB), Q (BC), R (CD), S (DA) ko kram se jodo.

> **PQRS hamesha ek parallelogram hota hai.**

```
          A•-----P-----•B
          /             \
         S               Q
        /                 \
      D•---------R---------•C

   (diagonal AC bhi kheencho)
```

**Proof:** Diagonal AC kheencho.

| Statement | Reason |
|---|---|
| PQ ∥ AC aur PQ = ½ AC | ΔABC mein P, Q midpoints hain (Mid-point Theorem) |
| SR ∥ AC aur SR = ½ AC | ΔADC mein S, R midpoints hain (Mid-point Theorem) |
| PQ ∥ SR aur PQ = SR | Dono AC ke parallel aur AC ke aadhe |
| **PQRS ek parallelogram hai** | Ek pair of opposite sides barabar aur parallel (Topic 1, "Ek pair opposite sides barabar aur parallel" theorem) |

Isi tarah diagonal BD lene par PS ∥ BD, QR ∥ BD aur PS = QR = ½ BD milta hai. Ye agle khaas cases mein kaam aayega.

### Application 3: Khaas quadrilaterals ke midpoints

Topic 1 mein diagonals ki properties dekhi thin. Unhe yahan lagao.

| ABCD kya hai | Diagonals ki khaas baat (Topic 1) | PQRS kya banta hai | Kyun |
|---|---|---|---|
| Koi bhi quadrilateral | Kuch khaas nahi | **Parallelogram** | Upar ka proof |
| **Rhombus** | Diagonals perpendicular (AC ⊥ BD) | **Rectangle** | PQ ∥ AC aur PS ∥ BD, to PQ ⊥ PS. Ek right angle wala parallelogram rectangle hota hai |
| **Rectangle** | Diagonals barabar (AC = BD) | **Rhombus** | PQ = ½AC aur PS = ½BD, to PQ = PS. Do adjacent sides barabar wala parallelogram rhombus hota hai |
| **Square** | Diagonals barabar bhi, perpendicular bhi | **Square** | Upar ki dono baatein ek saath |

Dhyan do ki rhombus se **rectangle** banta hai aur rectangle se **rhombus**. Ulta lagta hai, par diagonals ki wajah se aisa hi hota hai.

### Application 4: Trapezium ki beech wali line

ABCD ek trapezium hai jisme AB ∥ DC. E, AD (ek tedhi side) ka midpoint hai. E se AB ke parallel line BC ko F par kaatti hai. Dikhao ki F, BC ka midpoint hai.

```
        A•-------------•B
        /               \
      E•-------G---------•F
      /                   \
    D•---------------------•C

   (diagonal AC, jo EF ko G par kaatta hai)
```

**Proof:** Diagonal AC kheencho, jo EF ko G par kaate.

| Statement | Reason |
|---|---|
| EG ∥ DC | EF ∥ AB aur AB ∥ DC, to EF ∥ DC ([Lines and Angles Topic 3](../lines-and-angles/lines-and-angles-part3.md): ek hi line ke parallel lines aapas mein parallel) |
| G, AC ka midpoint hai | ΔADC mein E, AD ka midpoint aur EG ∥ DC (**Converse**) |
| GF ∥ AB | EF ∥ AB (given) |
| **F, BC ka midpoint hai** | ΔCAB mein G, AC ka midpoint aur GF ∥ AB (**Converse**) |

**Bonus (lambai):** Mid-point Theorem se EG = ½ DC (ΔADC mein) aur GF = ½ AB (ΔCAB mein). To:

**EF = EG + GF = ½ (AB + DC)**

Yaani trapezium ki tedhi sides ke midpoints jodne wali line, dono parallel sides ke **sum ka aadha** hoti hai.

**Example:** AB = 10 cm, DC = 6 cm ho to EF = ½ (10 + 6) = **8 cm**.

### Application 5: Right triangle ke hypotenuse ka midpoint (ek classic sawaal)

ΔABC mein ∠C = 90°. M, hypotenuse AB ka midpoint hai. M se BC ke parallel line AC ko D par kaatti hai. Dikhao ki:
(i) D, AC ka midpoint hai
(ii) MD ⊥ AC
(iii) CM = MA = ½ AB

```
       A
       |\
       | \
     D •--• M
       |   \
       |    \
       C-----B

   ∠C = 90°, M midpoint of AB, MD ∥ BC
```

**(i)** ΔABC mein M, AB ka midpoint aur MD ∥ BC. **Converse** se D, AC ka midpoint hai.

**(ii)** MD ∥ BC aur AC ek transversal hai. To ∠ADM = ∠ACB (corresponding angles) = 90°. Isliye **MD ⊥ AC**.

**(iii)**

| Statement | Reason |
|---|---|
| AD = CD | Part (i) |
| ∠ADM = ∠CDM = 90° | Part (ii), aur ∠CDM, ∠ADM ka linear pair hai |
| MD = MD | Common side |
| ΔADM ≅ ΔCDM | **SAS** |
| CM = AM | CPCT |
| AM = ½ AB | M, AB ka midpoint hai |
| **CM = MA = ½ AB** | Upar ki do lines se |

**Kuch yaad aaya?** [Triangles chapter ke Topic 2](../triangles/triangles-part2.md) mein humne padha tha ki right triangle ka **circumcentre hypotenuse ke midpoint** par hota hai. Wahan humne ise bas ek fact ki tarah maana tha. Yahan **CM = MA = MB** hai, yaani M teeno vertices se barabar doori par hai. Wahi baat ab prove ho gayi.

**Numeric:** AB = 10 cm ho to CM = **5 cm**.

---

## Part F: Ek extra baat (Intercept Theorem)

*(Ye extra baat hai, bas jaankari ke liye.)*

Notebook ki lines dekho: wo sab parallel hain aur barabar doori par hain. Ab ek tedha pencil un par rakho. Pencil ko lines jo tukde kaatti hain, wo **sab barabar** honge. Pencil kitna bhi tedha ho, ye baat badalti nahi.

> **Intercept Theorem:** Agar teen ya zyada parallel lines kisi ek transversal par **barabar intercepts** banati hain, to wo kisi bhi doosre transversal par bhi barabar intercepts banayengi.

Mid-point theorem ka converse isi ka ek chhota roop hai.

---

## Aam galtiyan (bachke rehna)

**Galti 1: EF = BC likh dena**
EF teesri side ke **aadhe** ke barabar hota hai, poore ke nahi. BC = 14 cm ho to EF = 7 cm.

**Galti 2: Kisi bhi do points ko jod kar theorem laga dena**
Dono points **theek midpoints** hone chahiye. Agar E, AB ka midpoint hai par F, AC par kahin aur hai, to EF ∥ BC zaroori nahi.

**Galti 3: Converse mein ek shart bhool jana**
Converse ke liye **dono** shartein chahiye: line ek side ke **midpoint se** guzre, **aur** doosri side ke **parallel** ho. Sirf parallel ya sirf midpoint kaafi nahi.

**Galti 4: "Teesri side" galat pehchanna**
Jin do sides ke midpoints jode, unke alawa jo side bachi, wahi teesri side hai. AB aur AC ke midpoints jode to teesri side BC hai, AB nahi.

**Galti 5: Midpoint quadrilateral ko hamesha rectangle samajhna**
Kisi bhi quadrilateral ke midpoints se **parallelogram** banta hai. Rectangle sirf tab banta hai jab original ke diagonals perpendicular hon (jaise rhombus mein).

**Galti 6: Rhombus aur rectangle ulte yaad karna**
Rhombus ke midpoints se **rectangle** banta hai, aur rectangle ke midpoints se **rhombus**. Diagonals wali table dekh kar yaad karo.

**Galti 7: Trapezium mein difference ka aadha lena**
Trapezium ki beech wali line = ½ (AB **+** DC), yaani **sum** ka aadha. Difference ka nahi.

**Galti 8: Parallelogram dikhane ka reason na likhna**
Proof mein "EBCD parallelogram hai" likhte waqt reason zaroor do: "ek pair of opposite sides barabar aur parallel". Bina reason ke proof adhoora hai.

---

## Quick Recap

- **Mid-point Theorem:** Triangle ki do sides ke midpoints ko jodne wali line teesri side ke **parallel** aur uski **aadhi** hoti hai.
- **Proof ka raasta:** Construction (C se BA ke parallel), ASA se congruence, CPCT, phir parallelogram (Topic 1 ka "ek pair barabar aur parallel" wala theorem).
- **Converse:** Ek side ke midpoint se, doosri side ke parallel kheenchi line, teesri side ko **bisect** karti hai. Proof mein AAS lagta hai.
- **Teeno midpoints jodo:** Naya triangle original ke **aadhe perimeter** ka hota hai, aur triangle **4 congruent tukdon** mein bant jata hai.
- **Kisi bhi quadrilateral ke midpoints** jodne se **parallelogram** banta hai. Rhombus se rectangle, rectangle se rhombus, square se square.
- **Trapezium:** Tedhi sides ke midpoints jodne wali line parallel sides ke parallel hai aur = ½ (sum of parallel sides).
- **Right triangle:** Hypotenuse ka midpoint teeno vertices se barabar doori par hota hai (circumcentre ka proof).

---

## Practice Questions

1. In ΔPQR, X and Y are the mid-points of PQ and PR respectively. If QR = 18 cm, find XY.

2. D, E and F are the mid-points of the sides BC, CA and AB of ΔABC. If AB = 6 cm, BC = 8 cm and CA = 7 cm, find the perimeter of ΔDEF.

3. In ΔABC, D is the mid-point of AB. A line through D parallel to BC meets AC at E. If AC = 11 cm, find AE.

4. In ΔABC, D and E are the mid-points of AB and AC. If DE = (3x − 2) cm and BC = (5x + 2) cm, find x and the length of BC.

5. Show that the quadrilateral formed by joining the mid-points of the sides of a rectangle, in order, is a rhombus.

6. ABCD is a trapezium in which AB ∥ DC, AB = 12 cm and DC = 8 cm. E and F are the mid-points of AD and BC. Find EF.

7. ABC is a triangle right-angled at C, and M is the mid-point of the hypotenuse AB. If AB = 13 cm, find CM.

8. Prove that the line segments joining the mid-points of the sides of a triangle divide it into four congruent triangles.

9. State whether each statement is true or false. Give a reason.
   (a) The line segment joining the mid-points of two sides of a triangle is parallel to the third side.
   (b) The line segment joining the mid-points of two sides of a triangle is equal to the third side.
   (c) The figure formed by joining the mid-points of the sides of any quadrilateral, in order, is a parallelogram.
   (d) The figure formed by joining the mid-points of the sides of a rhombus, in order, is always a square.

### Answers

1. Mid-point Theorem se XY = ½ QR = ½ × 18 = **9 cm**.

2. EF = ½ BC = 4 cm, DF = ½ CA = 3.5 cm, DE = ½ AB = 3 cm.
   Perimeter = 4 + 3.5 + 3 = **10.5 cm**.
   Jaanch: ΔABC ka perimeter 21 cm hai, aur 10.5 uska aadha hai ✅

3. D, AB ka midpoint hai aur DE ∥ BC. Converse se E, AC ka midpoint hai. AE = ½ × 11 = **5.5 cm**.

4. BC = 2 × DE:
   5x + 2 = 2(3x − 2) = 6x − 4
   **x = 6**
   BC = 5(6) + 2 = **32 cm** (aur DE = 16 cm).
   Jaanch: 32 = 2 × 16 ✅

5. Rectangle ABCD lo, P, Q, R, S kramashah AB, BC, CD, DA ke midpoints.

   | Statement | Reason |
   |---|---|
   | PQ ∥ AC, PQ = ½ AC aur SR ∥ AC, SR = ½ AC | ΔABC aur ΔADC mein Mid-point Theorem |
   | PQRS ek parallelogram hai | PQ aur SR barabar aur parallel (Topic 1, "Ek pair opposite sides barabar aur parallel" theorem) |
   | PS = ½ BD | ΔABD mein Mid-point Theorem |
   | AC = BD | Rectangle ke diagonals barabar hote hain (Topic 1, Part D, Result 2) |
   | PQ = PS | Dono barabar diagonals ke aadhe |
   | **PQRS ek rhombus hai** | Do adjacent sides barabar wala parallelogram |

6. Trapezium ki tedhi sides ke midpoints jodne wali line:
   EF = ½ (AB + DC) = ½ (12 + 8) = **10 cm**.

7. Application 5 se CM = ½ AB = ½ × 13 = **6.5 cm**.

8. ΔABC mein D, E, F kramashah BC, CA, AB ke midpoints hain.

   | Statement | Reason |
   |---|---|
   | FE = ½ BC, DE = ½ AB, DF = ½ CA | Mid-point Theorem teen baar |
   | AF = FB = ½ AB, BD = DC = ½ BC, CE = EA = ½ CA | D, E, F midpoints hain |
   | ΔAFE, ΔFBD, ΔEDC, ΔDEF, chaaron ki sides ½AB, ½BC, ½CA hain | Upar ki do lines se (Application 1 ki table) |
   | **Chaaron triangles congruent hain** | **SSS** |

9. (a) **True.** Ye Mid-point Theorem hai.
   (b) **False.** Wo teesri side ke **aadhe** ke barabar hota hai.
   (c) **True.** Diagonal kheench kar Mid-point Theorem do baar lagao (Application 2).
   (d) **False.** Rhombus ke midpoints se **rectangle** banta hai. Square tabhi banega jab rhombus khud ek square ho.

---

Ek chhoti si line, do midpoints ke beech, aur itne saare results! Bhola kaka ki baadh yaad rakho: **midpoint jodo, to line parallel aur aadhi milegi.** Baaki sab isi se nikalta hai.

**Agle topic mein (Topic 3):** Ab tak humne sides aur angles naape. Agla sawaal hai: kisi parallelogram ya triangle ke andar **kitni jagah** hai? Topic 3 mein **area** ke Euclidean axioms seekhenge, aur dekhenge ki ek hi base aur ek hi parallels ke beech bane parallelograms aur triangles ke area mein kya rishta hai.
