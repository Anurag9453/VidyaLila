# Chapter: Lines and Angles (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [lines-and-angles-part2.md](lines-and-angles-part2.md) se aage chalti hai.** (Topic 1 [lines-and-angles.md](lines-and-angles.md) mein hai.)
> **Topics covered in this file:**
> 3. Results on Parallel Lines: Parallel Lines, Transversal, Vertically Opposite Angles

---

# Topic 3: Results on Parallel Lines

Topic 2 mein hum ne Riya ke pizza se angles ke aapas ke rishte dekhe the. Complementary aur supplementary angles, adjacent angles, aur sabse zaroori **linear pair**: jab ek ray ek line par khadi ho, to dono taraf ke angles ka sum **180°** hota hai (Linear Pair Axiom, aur uska converse). Saath mein ye bhi dekha ki ek line par bane angles ka sum 180° aur ek point ke chaaron taraf bane angles ka sum 360° hota hai.

Is topic mein hum inhi tools ko use karenge. Pehle dekhenge ki jab do lines ek doosre ko kaatti hain to kya hota hai. Phir dekhenge ki jab ek line do **parallel** lines ko kaatti hai, to kaun kaun se angles barabar ho jate hain. Linear pair ka 180° wala rule yahan har jagah kaam aayega.

---

## Railway crossing ki kahani

Raju ke gaon ke paas ek railway crossing hai. Do patriyan (rails) seedhi chalti hain, hamesha ek doosre se barabar doori par. Kabhi milti nahi. Ek sadak in patriyon ko **tirchhi** kaat kar nikalti hai.

Ek din Raju ne crossing par khade hokar dekha:
- Sadak jab pehli patri ko kaatti hai, to wahan ek kona (angle) banta hai.
- Sadak jab doosri patri ko kaatti hai, to wahan bhi **bilkul waisa hi kona** banta hai.

Raju ne socha: "Ye sanyog hai ya koi niyam?"

Ye niyam hai. Aur is topic mein hum yahi niyam seekhenge:
- Patriyan = **parallel lines**
- Tirchhi sadak = **transversal**
- Barabar kone = **corresponding angles**, **alternate angles** wagairah

Aur pehle ek chhoti si cheez: **kainchi (scissors)**. Topic 1 mein kainchi ke dono blades ke beech ek angle dekha tha. Ab dhyan do ki kainchi kholo to do blade ek doosre ko kaatte hain. Upar wala kona aur neeche wala kona hamesha barabar dikhte hain. Ye bhi ek niyam hai, jiska naam hai **vertically opposite angles**.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Intersecting lines** | Aisi lines jo ek point par ek doosre ko kaatti hain | Kainchi ke blade, "X" |
| **Non-intersecting lines** | Aisi lines jo kabhi nahi milti | Railway ki do patriyan |
| **Vertically opposite angles** | Do lines kaatne par jo angles **aamne-saamne** bante hain | "X" mein upar aur neeche wale kone |
| **Parallel lines** | Ek hi plane mein aisi lines jo kabhi nahi milti | Notebook ki lines |
| **Transversal** | Wo line jo do (ya zyada) lines ko alag alag points par kaatti hai | Patriyon ko kaatne wali sadak |
| **Corresponding angles** | Transversal ke saath dono lines par **ek hi jagah (position)** wale angles | Dono crossings par "upar-left" wala kona |
| **Alternate interior angles** | Dono lines ke **beech**, transversal ke **alag alag taraf** wale angles | "Z" shape ke kone |
| **Co-interior angles** | Dono lines ke **beech**, transversal ke **ek hi taraf** wale angles | "C" / "U" shape ke kone |

---

## Part A: Intersecting aur Non-intersecting Lines

Ek plane (jaise kaagaz) par do lines ke saath sirf do hi cheezein ho sakti hain:

1. **Wo ek point par kaatti hain** (intersecting lines). Jaise "X" ya plus "+".
2. **Wo kabhi nahi milti** (non-intersecting lines). Inhe hum **parallel lines** kehte hain.

```
   Intersecting                Non-intersecting (parallel)

      \     /                  ------------------------
        \ /                    
         X                     ------------------------
        / \
      /     \
```

Euclid ke chapter mein humne dekha tha ki do alag lines ka **zyada se zyada ek** common point hota hai ([Euclid Geometry, Topic 4](../euclids-geometry/euclids-geometry-part4.md), "Do alag lines ka zyada se zyada ek common point" theorem). Isliye intersecting lines **sirf ek** point par milti hain.

---

## Part B: Vertically Opposite Angles

### Kya hote hain?

Jab do lines ek point par kaatti hain, to **chaar angles** bante hain. Jo do angles ek doosre ke **bilkul saamne** (aamne-saamne) hote hain, unhe **vertically opposite angles** kehte hain.

Neeche line AB aur line CD point O par kaat rahi hain:

```
   A           D
     \       /
       \   /
         O
       /   \
     /       \
   C           B
```

Chaar angles bane:
- Upar: **∠AOD**
- Neeche: **∠BOC**
- Left: **∠AOC**
- Right: **∠BOD**

Vertically opposite pairs:
- **∠AOD aur ∠BOC** (upar-neeche)
- **∠AOC aur ∠BOD** (left-right)

Dhyan do, "vertically" ka matlab yahan "upar-neeche" nahi hai. Iska matlab hai **vertex (O) ke aar-paar, saamne wala**. Isliye left-right wala pair bhi vertically opposite hai.

### Vertically Opposite Angles theorem: vertically opposite angles barabar hote hain

Kainchi wali baat ab prove karte hain. Proof likhne ka format (Given, To prove, Proof with reasons) humne [Euclid Geometry ke Topic 4](../euclids-geometry/euclids-geometry-part4.md) mein seekha tha. Wahi yahan use karenge.

**Given:** Lines AB aur CD point O par kaatti hain.

**To prove:** (i) ∠AOC = ∠BOD (ii) ∠AOD = ∠BOC

**Proof:**

| Statement | Reason |
|---|---|
| 1. Ray OA, line CD par khadi hai. To ∠AOC + ∠AOD = 180° | Linear Pair Axiom (Topic 2) |
| 2. Ray OD, line AB par khadi hai. To ∠AOD + ∠BOD = 180° | Linear Pair Axiom |
| 3. ∠AOC + ∠AOD = ∠AOD + ∠BOD | 1 aur 2 se (jo cheezein ek hi cheez ke barabar hon, wo aapas mein barabar hoti hain) |
| 4. ∠AOC = ∠BOD | Dono taraf se ∠AOD ghatao (barabar mein se barabar ghatane par barabar bachta hai) |

Isi tarah, ray OA ko line CD par aur ray OC ko line AB par lekar, **∠AOD = ∠BOC** bhi prove ho jata hai.

**Hence proved.**

Chhoti si baat: is proof mein bas Topic 2 ka linear pair aur Euclid ke do axioms lage. Naya kuch nahi chahiye tha.

### Solved examples

**Example 1:** Do lines kaatti hain aur ek angle 40° hai. Baaki teen angles nikalo.

- Saamne wala angle: **40°** (vertically opposite)
- Bagal wala angle: 180° - 40° = **140°** (linear pair)
- Uske saamne wala: **140°** (vertically opposite)

Jaanch: 40 + 140 + 40 + 140 = 360° ✅ (ek point ke chaaron taraf ka sum, Topic 2)

**Example 2:** Lines AB aur CD point O par kaatti hain. ∠AOC = (2x + 10)° aur ∠BOD = (3x - 20)°. x aur chaaron angles nikalo.

∠AOC aur ∠BOD vertically opposite hain, to barabar:
2x + 10 = 3x - 20
x = **30**

∠AOC = 2(30) + 10 = **70°**, ∠BOD = 3(30) - 20 = **70°**
∠AOD = ∠BOC = 180° - 70° = **110°**

**Example 3:** Do lines kaatne par do adjacent angles x aur 3x hain. Chaaron angles nikalo.

Adjacent angles yahan linear pair bante hain:
x + 3x = 180°
4x = 180°
x = **45°**

Angles: **45°, 135°, 45°, 135°**

---

## Part C: Parallel Lines (ek chhota recap)

Parallel lines ka idea humne [Euclid Geometry chapter](../euclids-geometry/euclids-geometry-part2.md) mein dekha tha: **ek hi plane mein aisi do lines jo kitna bhi badhao, kabhi nahi milti.**

Roz ki zindagi mein:
- Railway ki patriyan
- Notebook ki lines
- Seedhi ke (ladder ke) do lambe danday
- Zebra crossing ki safed pattiyan
- Darwaze ke do kinare

Notation: line l, line m ke parallel hai, to likhte hain **l ∥ m**.

---

## Part D: Transversal aur uske 8 angles

### Transversal kya hai?

Wo line jo do (ya zyada) lines ko **alag alag points** par kaatti hai, **transversal** kehlati hai. Railway crossing ki tirchhi sadak ek transversal hai.

### 8 angles

Neeche line l aur line m ko transversal t, points P aur Q par kaat raha hai. Har crossing par 4 angles bante hain, to total **8 angles**:

```
           t
            \
        1    \    2
l  -----------P-----------
        4      \    3
                \
                 \
        5         \    6
m  ----------------Q-----------
        8           \    7
                     \
```

**Position ko aise padho:**

| Point | Upar-left | Upar-right | Neeche-right | Neeche-left |
|---|---|---|---|---|
| P (line l par) | ∠1 | ∠2 | ∠3 | ∠4 |
| Q (line m par) | ∠5 | ∠6 | ∠7 | ∠8 |

**Exterior aur Interior angles:**
- **Interior angles** (dono lines ke **beech**): ∠3, ∠4, ∠5, ∠6
- **Exterior angles** (dono lines ke **bahar**): ∠1, ∠2, ∠7, ∠8

### Angles ke jodon ke naam

| Pair ka naam | Matlab | Pairs (is diagram mein) | Shape trick |
|---|---|---|---|
| **Corresponding angles** | Dono points par **ek hi position** wale | ∠1 & ∠5, ∠2 & ∠6, ∠3 & ∠7, ∠4 & ∠8 | **F** shape |
| **Alternate interior angles** | Beech mein, transversal ke **alag** taraf | ∠3 & ∠5, ∠4 & ∠6 | **Z** shape |
| **Alternate exterior angles** | Bahar, transversal ke **alag** taraf | ∠1 & ∠7, ∠2 & ∠8 | (bahar wala Z) |
| **Co-interior angles** (interior angles on the same side) | Beech mein, transversal ke **ek hi** taraf | ∠4 & ∠5, ∠3 & ∠6 | **C** ya **U** shape |

### Shape tricks samjho

**F shape (corresponding):** Angrezi ka "F" banao. Uski khadi line transversal hai aur do aadi lines l aur m. F ke dono "kono" mein jo angles hain, wo corresponding hain. Jaise ∠1 aur ∠5 dono **upar-left** position mein hain.

**Z shape (alternate interior):** "Z" ki upar aur neeche wali lines l aur m hain, aur beech ki tirchhi line transversal. Z ke do andar wale kone alternate interior angles hain. Jaise ∠3 (P par, neeche-right) aur ∠5 (Q par, upar-left).

**C / U shape (co-interior):** "C" ka upar wala hissa l, neeche wala m, aur khadi line transversal. C ke andar ke do kone co-interior hain. Jaise ∠4 aur ∠5 dono transversal ke **left** taraf, dono lines ke **beech**.

---

## Part E: Parallel lines ke niyam (Axioms aur Theorems)

Ab Raju wala sawaal: jab **l ∥ m** ho, to kaun se angles barabar hote hain?

### Corresponding Angles Axiom

> **Agar ek transversal do parallel lines ko kaate, to har jodi ke corresponding angles barabar hote hain.**

Yaani l ∥ m ho to: ∠1 = ∠5, ∠2 = ∠6, ∠3 = ∠7, ∠4 = ∠8.

Ise hum **axiom** maante hain (bina proof ke sach). Railway crossing par sadak dono patriyon ko ek hi tirchhepan se kaatti hai, isliye dono jagah kona same banta hai.

### Corresponding Angles Axiom ka converse (ulti baat)

> **Agar ek transversal do lines ko aise kaate ki corresponding angles ka koi ek jodi barabar ho, to wo do lines parallel hoti hain.**

Ye check karne ka tarika hai ki lines parallel hain ya nahi.

### Alternate Interior Angles theorem: alternate interior angles barabar hote hain

> **Agar ek transversal do parallel lines ko kaate, to alternate interior angles ki har jodi barabar hoti hai.**

**Given:** l ∥ m, transversal t inhe P aur Q par kaatta hai (upar wale diagram jaisa).

**To prove:** ∠4 = ∠6 (aur isi tarah ∠3 = ∠5)

**Proof:**

| Statement | Reason |
|---|---|
| 1. ∠4 = ∠2 | Vertically Opposite Angles theorem |
| 2. ∠2 = ∠6 | Corresponding Angles Axiom, l ∥ m |
| 3. ∠4 = ∠6 | 1 aur 2 se (ek hi cheez ke barabar cheezein barabar) |

Isi tarah ∠3 = ∠1 (vertically opposite) aur ∠1 = ∠5 (corresponding), to **∠3 = ∠5**.

**Hence proved.**

### Alternate Interior Angles theorem ka converse

> **Agar ek transversal do lines ko aise kaate ki alternate interior angles ka ek jodi barabar ho, to wo lines parallel hain.**

**Reason (chhota):** Maan lo ∠4 = ∠6. Hum jaante hain ∠4 = ∠2 (vertically opposite). To ∠2 = ∠6. Ye corresponding angles hain, aur barabar hain. Corresponding Angles Axiom ke converse se **l ∥ m**.

### Co-interior Angles theorem: co-interior angles supplementary hote hain

> **Agar ek transversal do parallel lines ko kaate, to transversal ke ek hi taraf ke interior angles ka sum 180° hota hai.**

**Given:** l ∥ m, transversal t.

**To prove:** ∠4 + ∠5 = 180° (aur ∠3 + ∠6 = 180°)

**Proof:**

| Statement | Reason |
|---|---|
| 1. ∠4 + ∠1 = 180° | Linear Pair Axiom. Line l ka left wala hissa (ray) line t par khada hai, to ∠1 aur ∠4 linear pair hain |
| 2. ∠1 = ∠5 | Corresponding Angles Axiom, l ∥ m |
| 3. ∠4 + ∠5 = 180° | Step 1 mein ∠1 ki jagah ∠5 rakho |

Isi tarah ∠3 + ∠2 = 180° (linear pair) aur ∠2 = ∠6 (corresponding), to **∠3 + ∠6 = 180°**.

**Hence proved.**

### Co-interior Angles theorem ka converse

> **Agar ek transversal do lines ko aise kaate ki transversal ke ek hi taraf ke interior angles ka sum 180° ho, to wo lines parallel hain.**

**Reason (chhota):** Maan lo ∠4 + ∠5 = 180°. Linear pair se ∠4 + ∠1 = 180°. Dono ko milao: ∠1 = ∠5. Ye corresponding angles hain aur barabar hain, to Corresponding Angles Axiom ke converse se **l ∥ m**.

### Ek nazar mein

| Agar l ∥ m ho to... | Reason |
|---|---|
| Corresponding angles **barabar** | Corresponding Angles Axiom |
| Alternate interior angles **barabar** | Alternate Interior Angles theorem |
| Co-interior angles ka sum **180°** | Co-interior Angles theorem |

| Lines parallel hain, agar... | Reason |
|---|---|
| Corresponding angles ka ek jodi barabar ho | Corresponding Angles Axiom ka converse |
| Alternate interior angles ka ek jodi barabar ho | Alternate Interior Angles theorem ka converse |
| Co-interior angles ka sum 180° ho | Co-interior Angles theorem ka converse |

Dhyan do: pehli table ka kaam hai **angles nikalna** (jab pata ho ki lines parallel hain). Doosri table ka kaam hai **parallel prove karna** (jab angles pata hon).

---

## Part F: "Ek hi line ke parallel lines aapas mein parallel" theorem

> **Jo lines ek hi line ke parallel hon, wo aapas mein bhi parallel hoti hain.**

Matlab: l ∥ m aur n ∥ m, to **l ∥ n**.

Roz ki zindagi: notebook ki pehli line teesri line ke parallel hai, aur doosri line bhi teesri ke parallel hai. To pehli aur doosri bhi aapas mein parallel hain.

**Reason (chhota):** Ek transversal t teeno lines ko kaate. Maan lo t, line m ke saath corresponding position par angle θ banata hai.
- l ∥ m, to l par bhi corresponding angle **θ** (Corresponding Angles Axiom).
- n ∥ m, to n par bhi corresponding angle **θ** (Corresponding Angles Axiom).
- To l aur n par corresponding angles barabar hain, isliye **l ∥ n** (Corresponding Angles Axiom ka converse).

```
   t
    \
-----\------------  l
      \ θ
-------\----------  m
        \ θ
---------\--------  n
          \ θ
```

---

## Part G: "Find x, y, z" wale solved examples

**Example 4: Saare 8 angles nikalo.**
Diagram (Part D wala) mein l ∥ m aur ∠1 = 65°. Baaki saat angles nikalo.

- ∠2 = 180° - 65° = **115°** (∠1 aur ∠2 linear pair)
- ∠3 = ∠1 = **65°** (vertically opposite)
- ∠4 = ∠2 = **115°** (vertically opposite)
- ∠5 = ∠1 = **65°** (corresponding)
- ∠6 = ∠2 = **115°** (corresponding)
- ∠7 = ∠3 = **65°** (corresponding)
- ∠8 = ∠4 = **115°** (corresponding)

Jaanch:
- Alternate interior: ∠3 = ∠5 = 65°, ∠4 = ∠6 = 115° ✅
- Co-interior: ∠4 + ∠5 = 115° + 65° = 180° ✅
- Alternate exterior: ∠1 = ∠7 = 65°, ∠2 = ∠8 = 115° ✅

Ek mazedaar baat: jab l ∥ m ho, to 8 mein se har angle **sirf do values** mein se ek hota hai. Yahan 65° ya 115°, aur dono ka sum 180°.

**Example 5: Corresponding angles se x.**
l ∥ m, aur do corresponding angles (3x + 10)° aur (5x - 30)° hain. x nikalo.

Corresponding angles barabar:
3x + 10 = 5x - 30
40 = 2x
x = **20**

Angle = 3(20) + 10 = **70°**. Jaanch: 5(20) - 30 = 70° ✅

**Example 6: Alternate interior angles se y.**
l ∥ m, alternate interior angles (3y + 15)° aur (5y - 25)° hain. y nikalo.

3y + 15 = 5y - 25
40 = 2y
y = **20**

Angle = 3(20) + 15 = **75°**. Jaanch: 5(20) - 25 = 75° ✅

**Example 7: Co-interior angles se x.**
l ∥ m, co-interior angles (2x + 20)° aur (3x - 40)° hain. x nikalo.

Co-interior ka sum 180°:
(2x + 20) + (3x - 40) = 180
5x - 20 = 180
5x = 200
x = **40**

Angles: 2(40) + 20 = **100°** aur 3(40) - 40 = **80°**. Jaanch: 100 + 80 = 180° ✅

**Example 8: Alternate exterior angles.**
l ∥ m, ∠2 = (3x + 25)° aur ∠8 = (5x - 15)°. x aur ∠1 nikalo.

∠2 aur ∠8 alternate exterior hain. l ∥ m ho to ye bhi barabar hote hain (kyunki ∠2 = ∠6 corresponding, aur ∠6 = ∠8 vertically opposite).
3x + 25 = 5x - 15
x = **20**
∠2 = 3(20) + 25 = **85°**
∠1 = 180° - 85° = **95°** (linear pair)

**Example 9: Lines parallel hain ya nahi?**

(a) ∠4 = 110° aur ∠5 = 70°.
Co-interior sum = 110° + 70° = 180°. To Co-interior Angles theorem ke converse se **l ∥ m** ✅

(b) ∠4 = 110° aur ∠5 = 75°.
Sum = 185°, 180° nahi. To **l aur m parallel nahi** hain ❌

(c) ∠3 = 62° aur ∠5 = 62°.
Alternate interior barabar hain. To Alternate Interior Angles theorem ke converse se **l ∥ m** ✅

**Example 10: Do parallel lines ke beech ek point (auxiliary line wala classic).**

AB ∥ CD hai. Point E dono lines ke beech hai. ∠BAE = 50° aur ∠DCE = 30° hai. ∠AEC nikalo.

```
   A ------------------------ B
     \
       \
         \
  G - - - - E
         /
       /
     /
   C ------------------------ D
```

**Trick:** E se ek nayi line GE banao jo **AB ke parallel** ho. Ise **auxiliary line** (madadgaar line) kehte hain. Isse ek mushkil angle do aasan angles mein toot jata hai.

**Step 1:** GE ∥ AB (humne aise banayi) aur AB ∥ CD (diya hai). To "Ek hi line ke parallel lines aapas mein parallel" theorem se **GE ∥ CD** bhi.

**Step 2:** AB ∥ GE, aur AE transversal hai. ∠BAE aur ∠AEG alternate interior angles hain ("Z" shape).
∠AEG = ∠BAE = **50°**

**Step 3:** CD ∥ GE, aur CE transversal hai. ∠DCE aur ∠CEG alternate interior angles hain (ulta "Z").
∠CEG = ∠DCE = **30°**

**Step 4:** ∠AEC = ∠AEG + ∠CEG = 50° + 30° = **80°**

Yaad rakhne layak result: is shape mein (jahan E "andar ki taraf" muda hua ho), **beech wala angle = dono kono ka sum**.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Vertically opposite aur adjacent angles mein confuse hona**
"X" mein **aamne-saamne** wale angles vertically opposite hain (barabar). **Bagal wale** angles linear pair hain (sum 180°). Example 1 mein 40° ke saamne 40° hai, bagal mein 140°.

**Galti 2: Corresponding aur alternate mein confuse hona**
- Corresponding: dono points par **same position** (∠1 & ∠5, dono upar-left). "F" shape.
- Alternate interior: dono lines ke **beech**, transversal ke **alag** taraf (∠3 & ∠5). "Z" shape.

**Galti 3: Co-interior angles ko barabar samajhna**
Co-interior angles **barabar nahi**, unka **sum 180°** hota hai. (Example 7 mein 100° aur 80°.) Barabar sirf tab honge jab dono 90° hon.

**Galti 4: Lines parallel na hon, tab bhi ye niyam laga dena**
Corresponding barabar, alternate barabar, co-interior 180°: ye sab **sirf tab** sach hain jab lines **parallel** hon. Agar question mein l ∥ m nahi likha, to ye maan kar mat chalo.

**Galti 5: Theorem aur uske converse ko ulta use karna**
- Lines parallel **pata hain**, angle **nikalna hai**: Corresponding Angles Axiom / Alternate Interior Angles theorem / Co-interior Angles theorem.
- Angles **pata hain**, parallel **prove karna hai**: inhi teeno ke converse.
Galat wala reason likhoge to proof mein number katenge.

**Galti 6: Reason likhna bhool jana**
Har step ke saath bataao kyun: "vertically opposite", "corresponding angles, l ∥ m", "linear pair". Bina reason ke answer sahi ho tab bhi poore number nahi milte.

**Galti 7: "Vertically" ka matlab sirf upar-neeche samajhna**
Left-right wale saamne ke angles bhi vertically opposite hain. "Vertical" yahan **vertex** (kone ka point) se juda hai.

**Galti 8: Auxiliary line ko kisi bhi direction mein bana dena**
Example 10 jaise sawaal mein nayi line **diye gaye parallel lines ke parallel** honi chahiye. Tabhi alternate angles wala niyam lagega.

---

## Quick Recap

- Do lines **kaatti** hain (intersecting) ya **kabhi nahi milti** (parallel).
- **Vertically opposite angles barabar** hote hain (Vertically Opposite Angles theorem). Proof linear pair se aata hai.
- **Transversal** do lines ko kaate to **8 angles** bante hain: 4 interior (beech mein), 4 exterior (bahar).
- **Jodon ke naam:** corresponding (F), alternate interior (Z), alternate exterior, co-interior (C/U).
- **Agar l ∥ m:**
  - Corresponding angles barabar (Corresponding Angles Axiom)
  - Alternate interior angles barabar (Alternate Interior Angles theorem)
  - Co-interior angles ka sum 180° (Co-interior Angles theorem)
- **Converse:** inme se koi bhi ek baat sach ho, to lines parallel hain (upar wale teeno ke converse).
- **"Ek hi line ke parallel lines aapas mein parallel" theorem:** Ek hi line ke parallel lines aapas mein bhi parallel.
- Parallel lines ke beech ke point wale sawaalon mein **auxiliary line** banao.
- Har step ke saath **reason** zaroor likho.

---

## Practice Questions

All questions use the figure of Part D (lines l and m, transversal t, angles ∠1 to ∠8) wherever angle numbers are mentioned.

1. Two lines intersect each other. One of the angles formed is 35°. Find the other three angles.

2. Lines AB and CD intersect at O. If ∠AOC = (4x − 10)° and ∠BOD = (2x + 30)°, find x and all four angles at O.

3. If l ∥ m and ∠5 = 72°, find ∠1, ∠3, ∠4, ∠6, ∠7 and ∠8. Give a reason for each.

4. Name the type of each pair of angles:
   (a) ∠2 and ∠6
   (b) ∠3 and ∠5
   (c) ∠4 and ∠5
   (d) ∠1 and ∠7
   (e) ∠2 and ∠4

5. Two co-interior angles formed by a transversal with two parallel lines are (3x + 15)° and (2x + 15)°. Find x and both angles.

6. In each case, state whether l ∥ m. Give a reason.
   (a) ∠3 = 62° and ∠5 = 62°
   (b) ∠4 = 100° and ∠5 = 70°
   (c) ∠2 = 120° and ∠6 = 120°

7. AB ∥ CD and a point E lies between them, as in Example 10. If ∠BAE = 40° and ∠DCE = 55°, find ∠AEC.

8. Prove that if two lines are each perpendicular to the same line, they are parallel to each other.

9. State whether each statement is true or false. Give a reason.
   (a) Vertically opposite angles are always supplementary.
   (b) If a transversal cuts two lines and a pair of alternate interior angles are equal, the lines are parallel.
   (c) Co-interior angles formed by a transversal with two parallel lines are equal.
   (d) If l ∥ m and n ∥ m, then l ∥ n.

### Answers

1. Saamne wala angle **35°** (vertically opposite). Bagal wale angles 180° - 35° = **145°** (linear pair), aur unke saamne wala bhi **145°**.
   Jaanch: 35 + 145 + 35 + 145 = 360° ✅

2. ∠AOC aur ∠BOD vertically opposite hain, to barabar:
   4x - 10 = 2x + 30 → 2x = 40 → **x = 20**
   ∠AOC = ∠BOD = 4(20) - 10 = **70°**
   ∠AOD = ∠BOC = 180° - 70° = **110°** (linear pair)

3. - ∠1 = ∠5 = **72°** (corresponding angles, l ∥ m)
   - ∠3 = ∠1 = **72°** (vertically opposite)
   - ∠4 = 180° - 72° = **108°** (∠3 aur ∠4 linear pair)
   - ∠6 = 180° - 72° = **108°** (∠5 aur ∠6 linear pair)
   - ∠7 = ∠5 = **72°** (vertically opposite)
   - ∠8 = ∠6 = **108°** (vertically opposite)

   Jaanch: co-interior ∠4 + ∠5 = 108° + 72° = 180° ✅

4. (a) **Corresponding angles** (dono upar-right)
   (b) **Alternate interior angles**
   (c) **Co-interior angles** (interior angles on the same side)
   (d) **Alternate exterior angles**
   (e) **Vertically opposite angles** (dono P par, aamne-saamne)

5. Co-interior ka sum 180°:
   (3x + 15) + (2x + 15) = 180 → 5x + 30 = 180 → 5x = 150 → **x = 30**
   Angles: 3(30) + 15 = **105°** aur 2(30) + 15 = **75°**
   Jaanch: 105 + 75 = 180° ✅

6. (a) **Haan, l ∥ m.** ∠3 aur ∠5 alternate interior hain aur barabar hain (Alternate Interior Angles theorem ka converse).
   (b) **Nahi.** ∠4 aur ∠5 co-interior hain, par sum 100° + 70° = 170°, 180° nahi. Agar l ∥ m hoti to Co-interior Angles theorem se ye sum 180° hota, isliye lines parallel nahi hain.
   (c) **Haan, l ∥ m.** ∠2 aur ∠6 corresponding hain aur barabar hain (Corresponding Angles Axiom ka converse).

7. E se AB ke parallel auxiliary line GE banao. "Ek hi line ke parallel lines aapas mein parallel" theorem se GE ∥ CD bhi.
   ∠AEG = ∠BAE = 40° (alternate interior, AB ∥ GE)
   ∠CEG = ∠DCE = 55° (alternate interior, CD ∥ GE)
   ∠AEC = 40° + 55° = **95°**

8. **Given:** Lines l aur m dono, line t par perpendicular hain.
   **To prove:** l ∥ m

   | Statement | Reason |
   |---|---|
   | 1. t, line l aur m ko kaatne wala transversal hai | Diya hai (t dono ko kaatti hai) |
   | 2. l aur t ke beech ka angle = 90° | l ⊥ t (diya hai) |
   | 3. m aur t ke beech, usi position par angle = 90° | m ⊥ t (diya hai) |
   | 4. Corresponding angles barabar hain (90° = 90°) | Step 2 aur 3 se |
   | 5. l ∥ m | Corresponding Angles Axiom ka converse (corresponding angles barabar ho to lines parallel) |

   **Hence proved.**

9. (a) **False.** Vertically opposite angles **barabar** hote hain. Supplementary (sum 180°) sirf tab honge jab dono 90° hon.
   (b) **True.** Ye Alternate Interior Angles theorem ka converse hai.
   (c) **False.** Co-interior angles ka **sum 180°** hota hai. Barabar sirf tab jab dono 90° hon.
   (d) **True.** Ye "Ek hi line ke parallel lines aapas mein parallel" theorem hai.

---

## Chapter Wrap-up: Lines and Angles

| Topic | Kya seekha | Sabse zaroori baat |
|---|---|---|
| **1. Basic terms and angles** | Line, segment, ray (Euclid chapter se recap); angle, uska naam (vertex beech mein), interior/exterior; degree aur protractor; angles ke types (acute, right, obtuse, straight, reflex, complete); reflex saathi; angle bisector; ghadi ke angles | Angle ka type uske size (degree) se tay hota hai |
| **2. Angle relations** | Complementary (sum 90°), supplementary (sum 180°), adjacent angles, linear pair; Linear Pair Axiom aur uska converse; line par angles ka sum 180°, point ke chaaron taraf 360° | **Linear pair = 180°** (aage ke saare proofs isi par tike hain) |
| **3. Results on parallel lines** | Intersecting aur parallel lines; vertically opposite angles (Vertically Opposite Angles theorem); transversal ke 8 angles; Corresponding Angles Axiom aur uska converse; Alternate Interior Angles aur Co-interior Angles theorems aur unke converse; "Ek hi line ke parallel lines aapas mein parallel" theorem; auxiliary line wali trick | **l ∥ m ho to: corresponding barabar, alternate barabar, co-interior 180°** |

---

Agar 8 angles ke naam ek saath yaad karna mushkil lage, to bas teen letters yaad rakho: **F** (corresponding, barabar), **Z** (alternate, barabar), aur **C** (co-interior, sum 180°). Railway crossing par khade Raju ki tarah dekhoge, to har jagah ye shapes dikhne lagenge.

Aage chal kar (Triangles chapter mein) inhi parallel lines ki madad se prove karenge ki **triangle ke teeno angles ka sum 180°** hota hai.
