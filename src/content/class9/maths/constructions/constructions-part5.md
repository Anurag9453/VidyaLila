# Chapter: Constructions (Part 5)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [constructions-part4.md](constructions-part4.md) se aage chalti hai.** (Chapter ki shuruaat [constructions.md](constructions.md) se hoti hai.)
> **Topics covered in this file:**
> 5. Triangle Banana (II): Sides ka Jod, Antar aur Perimeter

---

# Topic 5: Triangle Banana (II): Sides ka Jod, Antar aur Perimeter

Pichle topic mein humne un triangles ko banana seekha jinke bare mein saari zaroori jaankari "seedhi" mili thi: teeno sides (SSS), do sides aur beech ka angle (SAS), angle-side-angle (ASA, AAS) aur right angle wale RHS. Humne ye bhi dekha ki do sides ka jod teesri side se bada hona chahiye (isi wajah se Faiz ka 3 m, 4 m, 8 m wala truss bana hi nahi), aur SSA se triangle kyun pakka nahi banta.

Ab ek naya sawaal: agar hume sides ek ek karke nahi, balki unka **jod**, **antar** ya poore triangle ka **perimeter** diya ho, to kya triangle phir bhi ban sakta hai? Haan, aur trick bahut pyaari hai: hum ek **extra point** lagate hain aur ek perpendicular bisector kheenchte hain. Is topic mein teen "famous" cases hain.

---

## Mrs. Kulkarni ke jhande aur Soham ka sawaal

Mrs. Kulkarni school ke sports day ke liye teen kone wale chhote jhande (pennants) banati hain. Ek design ke liye unke paas border ki tape thi, jo poore jhande ki outline ke liye **theek 15 cm** hai. Na ek cm zyada, na ek cm kam.

Unka beta Soham paas baitha dekh raha tha. Usne poocha, "Mummy, aap triangle ki teeno sides to nahi jaanti. Aapko bas poori tape ki length (perimeter) aur neeche ke do angle pata hain. Fir aap ye jhanda kaise draw karogi?"

Mrs. Kulkarni muskuraayi, "Ek trick hai, Soham. Tape ko ek seedhi line maan lo, usi par angle ke bisectors banao, aur do perpendicular bisector se tape ko teen hisson mein baant do. Wahi teen hisse triangle ki teen sides ban jaati hain!"

Chalo, pehle wo trick sikhte hain jisme sirf **ek side ka jod ya antar** diya hota hai, phir Mrs. Kulkarni wala poora jhanda banayenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Perimeter** | Triangle ki teeno sides ki total length | AB + BC + CA = 15 cm |
| **Sum of sides** | Do sides ka jod | AB + AC = 8 cm |
| **Difference of sides** | Do sides ka antar | AB − AC = 2 cm |
| **Perpendicular bisector** | Kisi segment ke beech ke point se 90° par jaane wali line | DC ka perpendicular bisector |
| **Equidistant** | Do points se barabar doori par | Bisector ka koi bhi point D aur C se barabar door |
| **Base angle** | Base ke dono ends par bane angle | ∠B aur ∠C |
| **Opposite ray** | Kisi ray ki bilkul ulti disha mein jaati ray | Ray BX ke ulti taraf ki ray |

---

## Ek zaroori idea (isi se teeno constructions chalti hain)

Do points D aur C lo. Unke beech ka perpendicular bisector ek aisi line hai ki uske **har point** se D aur C **barabar doori** par hote hain. Yani agar A us line par hai, to **AD = AC**.

Is poore topic mein hum ye idea baar baar use karenge: "AD = AC" ek chhota sa tareeka hai ek side ko doosri side ki jagah rakhne ka.

---

## Part A: Base, ek base angle aur baaki do sides ka JOD

**Sawaal:** △ABC banao jisme BC = 5 cm, ∠B = 60° aur AB + AC = 8 cm.

### Construction

**Kadam 1:** Ruler se 5 cm ka segment BC kheencho. B aur C label karo.

**Kadam 2:** B par protractor rakho, aur BC ke upar ki taraf 60° ka angle naapo. Ek point mark karke B se uske through ray BX kheencho. Isse ∠XBC = 60° ban gaya.

**Kadam 3:** Centre B lo, radius 8 cm (ruler se naapo) aur compass se ray BX ko kaato. Kaatne wale point ka naam D rakho. Ab BD = 8 cm.

**Kadam 4:** Points D aur C ko ruler se jodo. DC kheencho.

**Kadam 5:** DC ka perpendicular bisector banao. Centre D, radius 4 cm lekar DC ke dono taraf arcs lagao. Phir centre C, radius wahi 4 cm lekar dono arcs ko kaato (DC lagbhag 7 cm ka hai, uska aadha 3.5 cm hai, isliye 4 cm ka radius kaafi bada hai). Dono arcs ke milan wale do points ko jodkar bisector kheencho.

**Kadam 6:** Ye bisector BD (yaani ray BX) ko jis point par kaate, usse A label karo. Ab A ko C se jodo, yaani AC kheencho.

△ABC taiyaar hai.

> **Figure 5.1** – △ABC jisme BC = 5 cm, ∠B = 60°; ray BX par D aisa ki BD = 8 cm, A point BD par hai (B aur D ke beech), DC aur perpendicular bisector of DC dotted lines mein, aur AC joda gaya.

### Kyun kaam karta hai?

A perpendicular bisector of DC par hai, isliye **AD = AC** (bisector ka har point D aur C se barabar door hota hai).

A, B aur D ek hi line (BX) par hain aur A beech mein hai, isliye AB + AD = BD = 8 cm.

AD ki jagah AC rakho: **AB + AC = AB + AD = BD = 8 cm.**

Aur ∠B = 60° aur BC = 5 cm hum ne pehle hi draw kiye the. To △ABC mein wahi sab hai jo sawaal ne mangi thi.

(Triangle isosceles △ADC bhi hai, kyunki AD = AC. Is topic mein hum isosceles theorems dobara nahi padhayenge. Unke liye dekho [congruence-of-triangles-part3.md](../congruence-of-triangles/congruence-of-triangles-part3.md).)

### Jaanch (Pythagoras se)

Maan lo AB = t. A se BC par perpendicular AF girao. ∠B = 60° hai, to △ABF ek equilateral triangle (side t) ka aadha hai, isliye BF = t/2 aur AF² = t² − t²/4 = 3t²/4. FC = 5 − t/2, to △AFC mein Pythagoras se:

AC² = 3t²/4 + (5 − t/2)² = t² − 5t + 25

Aur A, C aur D se barabar door hai, to AC = AD = 8 − t, yaani AC² = (8 − t)².

t² − 5t + 25 = 64 − 16t + t², to 11t = 39, **AB = 39/11 ≈ 3.55 cm** aur **AC = 8 − 39/11 = 49/11 ≈ 4.45 cm.**

Check: AB + AC = 39/11 + 49/11 = 88/11 = 8 ✅

Ruler se napo: AB ≈ 3.5 cm aur AC ≈ 4.5 cm aana chahiye, aur dono ka jod 8 cm. ✅

### Kab ban sakta hai?

Triangle tabhi banega jab **AB + AC > BC** (Topic 4 wali condition). Yahan 8 > 5 hai, isliye A mil gaya. Agar jod 5 cm ya usse kam hota (maan lo 4 cm), to D, B ke bahut paas hota aur bisector BX ko kaatta hi nahi ya B ke peeche kaatta, aur triangle nahi banta.

**Rule: sum of the two sides > base.**

---

## Part B: Base, ek base angle aur baaki do sides ka ANTAR

**Sawaal:** △ABC banao jisme BC = 6 cm, ∠B = 45° aur AB − AC = 2 cm.

### Case 1: AB > AC

**Kadam 1:** Ruler se BC = 6 cm kheencho.

**Kadam 2:** B par protractor se ∠XBC = 45° banao aur ray BX kheencho.

**Kadam 3:** Centre B, radius 2 cm lekar ray BX ko kaato. Point ka naam D. Ab BD = 2 cm.

**Kadam 4:** D aur C ko jodo (DC ≈ 4.8 cm).

**Kadam 5:** DC ka perpendicular bisector banao: centre D aur centre C se radius 3 cm ke arcs (DC ka aadha ≈ 2.4 cm, to 3 cm kaafi hai) lagao, aur dono ke milan wale points ko jodo.

**Kadam 6:** Ye bisector ray BX ko jahan kaate, use A label karo. A ko C se jodo.

> **Figure 5.2** – △ABC jisme BC = 6 cm, ∠B = 45°; ray BX par D aisa ki BD = 2 cm, A ray BX par D ke aage (B, D, A kramanusar), aur DC ka perpendicular bisector A se hokar guzarta hai; AC joda gaya.

**Kyun kaam karta hai?** A bisector par hai, isliye AD = AC. Is figure ko dhyan se dekho: D, B aur A ke **beech** mein hai (kyunki BD = 2 cm chhota hai aur A door hai). To AB = BD + DA = 2 + AC, yaani **AB − AC = 2 cm.**

**Jaanch (Pythagoras se):** AB = t lo aur A se BC par perpendicular AF girao. ∠B = 45° hai, to △ABF isosceles right triangle hai: BF = AF, aur BF² + AF² = t², to BF = AF = t/√2. FC = 6 − t/√2, to AC² = t²/2 + (6 − t/√2)² = t² − 6√2 t + 36. AC = t − 2 chahiye.

(t − 2)² = t² − 4t + 4. Barabar karo: 36 − 6√2 t = 4 − 4t, to t(6√2 − 4) = 32.

t = AB ≈ 7.13 cm aur AC = t − 2 ≈ 5.13 cm.

Check: sides 7.13, 5.13, 6. Inme se do ka jod teesri se bada hai (5.13 + 6 > 7.13 ✅), aur AB − AC = 2.00 ✅. Triangle exist karta hai.

### Case 2: AB < AC

Ab AC bada hai, to AC − AB = 2 hona chahiye. Is baar D ko **ray BX ki ulti disha** (opposite ray) mein lete hain.

**Kadam 1 aur 2:** Pehle jaisa: BC = 6 cm, ∠XBC = 45°, ray BX.

**Kadam 3:** Ray BX ko piche (B ke doosri taraf) badhao. Centre B, radius 2 cm lekar us ulti ray par point D mark karo. Ab BD = 2 cm, aur D, B, A is order mein ek line par honge (B beech mein).

**Kadam 4:** DC jodo (DC ≈ 7.5 cm).

**Kadam 5:** DC ka perpendicular bisector banao, radius 4.5 cm ke arcs se (DC ka aadha ≈ 3.8 cm).

**Kadam 6:** Ye bisector ray BX ko A par kaatega. AC jodo.

> **Figure 5.3** – △ABC jisme BC = 6 cm, ∠B = 45°; D opposite ray par aisa ki BD = 2 cm (D, B, A kramanusar ek line mein), AC joda gaya, aur A DC ke perpendicular bisector par.

Kyun? AD = AC (bisector). Aur D–B–A ek line mein hain, to AD = DB + BA = 2 + AB. To **AC − AB = 2 cm.**

**Jaanch:** AB ≈ 2.56 cm aur AC ≈ 4.56 cm. (Upar wala Pythagoras hisaab, bas AC = t + 2 lekar: t(6√2 + 4) = 32, to t = AB ≈ 2.56 aur AC = t + 2 ≈ 4.56.) Check: 2.56 + 4.56 = 7.12 > 6 ✅, aur 2.56 + 6 > 4.56 ✅.

**Rule: difference of the two sides < base.** Yahan 2 < 6 ✅.

---

## Part C: Perimeter aur do base angles

**Sawaal:** △XYZ banao jisme XY + YZ + ZX = 12 cm, ∠Y = 60° aur ∠Z = 45°.

### Idea

Poore perimeter 12 cm ka ek seedha segment PQ banate hain. Triangle ki teeno sides ko is segment par "seedha lita" dete hain: PY = XY, YZ, ZQ = XZ. Angle ke aadhe (30° aur 22½°) isliye lagte hain ki baad mein isosceles triangles se wo poore 60° aur 45° ban jaate hain.

### Construction

**Kadam 1:** Ruler se segment PQ = 12 cm kheencho.

**Kadam 2:** P par PQ ke upar ki taraf 60° (= ∠Y) banao (protractor se). Us ray ko compass se bisect karo: centre P, radius 4 cm lekar arc lagao jo PQ ko S par aur 60° wali ray ko T par kaate. Phir centre S aur centre T, radius 3 cm se arcs lagao jo andar milte hain. Milne wale point U ko P se jodkar ray PU kheencho. Ab ∠UPQ = 30°.

**Kadam 3:** Q par PQ ke usi taraf (upar) 45° (= ∠Z) banao. Ise bhi bisect karo: centre Q, radius 4 cm ka arc jo QP ko V par aur 45° wali ray ko W par kaate. Centre V aur centre W, radius 3 cm se arcs lagao jo milte hain, aur milne wale point ko R naam do. Q se R tak ray QR kheencho. Ab ∠RQP = 22½°.

**Kadam 4:** Ray PU aur ray QR jis point par milen, use X label karo. (Is X ko P aur Q se milaao to △XPQ banega.)

**Kadam 5:** XP ka perpendicular bisector banao: centre X aur centre P, radius 3.5 cm se arcs lagao (XP ≈ 5.8 cm, aadha ≈ 2.9 cm). Bisector PQ ko jahan kaate, use Y label karo.

**Kadam 6:** Isi tarah XQ ka perpendicular bisector banao: centre X aur centre Q, radius 4.5 cm se arcs (XQ ≈ 7.6 cm, aadha ≈ 3.8 cm). Ye PQ ko jahan kaate, use Z label karo.

**Kadam 7:** X ko Y se aur X ko Z se jodo. △XYZ taiyaar hai.

> **Figure 5.4** – Segment PQ = 12 cm par bisectors PX (30° par) aur QX (22½° par) point X par milte hain; XP aur XQ ke perpendicular bisectors PQ ko Y aur Z par kaatte hain (P, Y, Z, Q kramanusar); △XYZ mein ∠Y = 60° aur ∠Z = 45°.

### Kyun kaam karta hai?

**Y se baat:** Y, XP ke perpendicular bisector par hai, isliye **YX = YP** (bisector ka koi bhi point X aur P se barabar door). To △YPX isosceles hai, aur barabar sides ke saamne ke angles barabar hote hain ([congruence-of-triangles-part3.md](../congruence-of-triangles/congruence-of-triangles-part3.md) mein dekha tha), isliye ∠YXP = ∠YPX = 30°.

Ab ∠XYZ △YPX ka **exterior angle** hai (kyunki P, Y, Z ek line mein hain). Exterior angle apne do door ke interior angles ke jod ke barabar hota hai:
∠XYZ = ∠YPX + ∠YXP = 30° + 30° = **60°.**

**Z se baat:** Isi tarah Z, XQ ke perpendicular bisector par hai, to **ZX = ZQ**, aur ∠ZXQ = ∠ZQX = 22½°. Exterior angle:
∠XZY = ∠ZQX + ∠ZXQ = 22½° + 22½° = **45°.**

**Perimeter:** XY = PY aur XZ = QZ (upar dekha). P, Y, Z, Q ek line mein is order mein hain.
XY + YZ + ZX = PY + YZ + ZQ = **PQ = 12 cm.**

### Jaanch

Teesra angle ∠X = 180° − 60° − 45° = 75°. Sides ka hisaab: X se YZ par perpendicular XF girao, XF = h. ∠Z = 45° hai, to △XFZ isosceles right triangle hai: FZ = h aur ZX = h√2. ∠Y = 60° hai, to △XFY ek equilateral triangle ka aadha hai: XY = 2·YF, aur Pythagoras se YF = h/√3, XY = 2h/√3. Perimeter: 2h/√3 + (h/√3 + h) + h√2 = h(√3 + 1 + √2) = 12, to h ≈ 2.89 cm. Ye dete hain:

- XY ≈ 3.34 cm, YZ ≈ 4.57 cm, ZX ≈ 4.09 cm
- Jod: 3.34 + 4.57 + 4.09 = 12.00 ✅

Ruler se napo: XY ≈ 3.3 cm, YZ ≈ 4.6 cm, ZX ≈ 4.1 cm, aur protractor se ∠Y ≈ 60°, ∠Z ≈ 45°. ✅

---

## Part D: Mrs. Kulkarni ka 15 cm wala jhanda

Ab Soham ke sawaal ka jawab. Perimeter 15 cm, base angles 60° aur 60°.

**Kadam 1:** PQ = 15 cm kheencho.

**Kadam 2:** P aur Q par 60° ke angle banao aur har ek ko bisect karo (30° ban jaate hain). Dono bisector rays X par milti hain.

**Kadam 3:** XP aur XQ ke perpendicular bisectors banao: centre X aur P, radius 5 cm (XP ≈ 8.7 cm, aadha ≈ 4.3 cm), aur centre X aur Q, radius 5 cm. Ye PQ ko Y aur Z par kaatte hain.

**Kadam 4:** XY aur XZ jodo.

> **Figure 5.5** – Segment PQ = 15 cm par 30° ke bisectors X par milte hain; XP aur XQ ke perpendicular bisectors PQ ko Y aur Z par kaatte hain, aur △XYZ equilateral hai jiski har side 5 cm hai.

**Kyun equilateral?** Upar ke proof se ∠Y = 60° aur ∠Z = 60°, to ∠X = 60°. Teeno angle barabar hain, isliye triangle equilateral hai, aur uski teeno sides barabar hain. Perimeter 15 cm hai, to har side 15 ÷ 3 = **5 cm.**

**Jaanch:** Proof se PY = XY aur ZQ = XZ. Triangle equilateral hai, to PY = XY = YZ = XZ = ZQ, yaani PQ teen barabar hisson mein bant gaya: Y, P se 5 cm par aur Z, P se 10 cm par. Ruler se XY, YZ, ZX naapo: har ek **5 cm** ✅. Jod = 5 + 5 + 5 = 15 ✅.

Soham ne taali bajayi, "Wah mummy! To tape ko teen barabar hisson mein kaatna hi tha, ye to pehle bata dete!" Mrs. Kulkarni hans padi, "Haan, par ye is liye pata chala kyunki hum ne construction se saabit kiya, andaza nahi lagaya."

---

## Part E: Kuch aur solved constructions

### Example 1: Sum wala

△ABC banao: BC = 6 cm, ∠B = 60°, AB + AC = 9 cm.

**Kadam 1:** BC = 6 cm kheencho.
**Kadam 2:** B par ∠XBC = 60° banao, ray BX.
**Kadam 3:** Centre B, radius 9 cm lekar BX ko D par kaato. BD = 9 cm.
**Kadam 4:** DC jodo (DC ≈ 7.9 cm).
**Kadam 5:** DC ka perpendicular bisector banao: centre D aur C, radius 4.5 cm ke arcs se (DC ka aadha ≈ 3.97 cm).
**Kadam 6:** Ye bisector BX ko A par kaate. AC jodo.

> **Figure 5.6** – △ABC jisme BC = 6 cm, ∠B = 60°, D ray BX par BD = 9 cm, A BD par DC ke perpendicular bisector se bana; AB + AC = 9 cm.

Kyun: AC = AD, to AB + AC = AB + AD = BD = 9. Condition: 9 > 6.

Jaanch: Part A wale Pythagoras hisaab se t² − 6t + 36 = (9 − t)², to 12t = 45, AB = 3.75 cm aur AC = 9 − 3.75 = 5.25 cm. Jod = 3.75 + 5.25 = 9 ✅, aur 3.75 + 5.25 > 6 ✅. Ruler se AB ≈ 3.75 cm aur AC ≈ 5.25 cm aana chahiye.

### Example 2: Perimeter wala (right angle ke saath)

△XYZ banao: perimeter 10 cm, ∠Y = 90°, ∠Z = 45°.

**Kadam 1:** PQ = 10 cm kheencho.
**Kadam 2:** P par 90° banao aur bisect karo (centre P, radius 4 cm ka arc, phir radius 3 cm ke arcs): ∠UPQ = 45°. Ray PU kheencho.
**Kadam 3:** Q par 45° banao aur bisect karo (centre Q, radius 4 cm, phir 3 cm ke arcs): ∠RQP = 22½°. Ray QR kheencho.
**Kadam 4:** PU aur QR X par milte hain.
**Kadam 5:** XP ka perpendicular bisector banao (centre X aur P, radius 3 cm; XP ≈ 4.14 cm, aadha ≈ 2.07 cm). Ye PQ ko Y par kaata.
**Kadam 6:** XQ ka perpendicular bisector banao (centre X aur Q, radius 4.5 cm; XQ ≈ 7.65 cm, aadha ≈ 3.83 cm). Ye PQ ko Z par kaata.
**Kadam 7:** XY, XZ jodo.

> **Figure 5.7** – Segment PQ = 10 cm par 45° aur 22½° ke bisectors X par milte hain; XP aur XQ ke perpendicular bisectors PQ ko Y aur Z par kaatte hain; △XYZ mein ∠Y = 90° aur ∠Z = 45°.

Kyun: YX = YP to ∠YXP = ∠YPX = 45°, exterior ∠XYZ = 45° + 45° = 90°. ZX = ZQ to ∠XZY = 22½° + 22½° = 45°.

Jaanch: ∠X = 45°, to △XYZ right angled isosceles hai, XY = YZ = a, ZX = a√2. Perimeter: a(2 + √2) = 10, to a = 10 ÷ 3.414 ≈ 2.93 cm aur ZX ≈ 4.14 cm. Jod: 2.93 + 2.93 + 4.14 = 10.00 ✅.

### Example 3: Antar wala, doosra case (AB < AC)

△ABC banao: BC = 5 cm, ∠B = 60°, AC − AB = 1 cm.

**Kadam 1:** BC = 5 cm kheencho.
**Kadam 2:** B par ∠XBC = 60° banao, ray BX.
**Kadam 3:** Ray BX ki ulti disha mein centre B, radius 1 cm se D mark karo.
**Kadam 4:** DC jodo (DC ≈ 5.6 cm).
**Kadam 5:** DC ka perpendicular bisector banao: centre D aur C, radius 3 cm ke arcs se.
**Kadam 6:** Ye bisector ray BX ko A par kaate. AC jodo.

> **Figure 5.8** – △ABC jisme BC = 5 cm, ∠B = 60°, D opposite ray par BD = 1 cm, A ray BX par DC ke perpendicular bisector se bana; AC − AB = 1 cm.

Kyun: AD = AC, aur D–B–A ek line mein hain, to AC = AD = DB + BA = 1 + AB, yaani AC − AB = 1.

Jaanch: t² − 5t + 25 = (t + 1)², to 24 = 7t, AB = 24/7 ≈ 3.43 cm aur AC = 31/7 ≈ 4.43 cm. AC − AB = 1 ✅; 3.43 + 4.43 > 5 ✅.

---

## Aam galtiyan (bachke rehna)

**Galti 1: BD ki galat length lena**
Sum wale case mein BD = AB + AC (poora jod) hota hai, aur difference wale case mein BD = AB − AC (sirf antar). Agar Part A mein 5 cm ya 3 cm lagaya to bisector A bana dega, par AB + AC 8 nahi aayega. Sahi: BD = 8 cm.

**Galti 2: DC ka perpendicular bisector bhool jaana**
Sirf D ko C se jodkar A ko "andaze se" rakh diya, to AD = AC ka koi saboot nahi rahega. Hamesha DC ka perpendicular bisector banao. Wahi point A ko sahi jagah deta hai.

**Galti 3: Aisa sum ya antar lena jisse triangle ban hi nahi sakta**
Sum wale case mein BC = 5 cm, ∠B = 60° aur AB + AC = 4 cm lo. 4 < 5 hai, to ye galat hai: do sides ka jod base se bada hona chahiye. Difference wale case mein BC = 6 cm aur AB − AC = 7 cm lo, to 7 > 6 hai, aur triangle nahi banta kyunki antar base se chhota hona chahiye.
**Rule: sum > base, difference < base.**

**Galti 4: Perimeter wale case mein angles ko bisect na karna**
P par seedha 60° aur Q par 45° bana diya, to △XYZ ke angle 60° aur 45° nahi aayenge. Wahan Y aur Z ke angle 30° + 30° aur 22½° + 22½° se bante hain, isliye pehle aadhe (30° aur 22½°) banao.

**Galti 5: Difference mein D galat taraf rakhna**
AB > AC ke liye D ray BX par hota hai (B ke aage), aur AB < AC ke liye D opposite ray par. Dono mein D ki side badli to difference ka sign badal jayega.

---

## Quick Recap

- **Sum case (AB + AC):** BC, ∠B banao; BX par BD = AB + AC mark karo; DC ka perpendicular bisector BX ko A par kaatta hai. Shart: sum > base.
- **Difference case (AB − AC):** BD = AB − AC; AB > AC ho to D ray BX par, AB < AC ho to D opposite ray par. Shart: difference < base.
- **Perimeter case:** PQ = perimeter; P aur Q par angles ke aadhe banao (bisect karo); X par bisectors milte hain; XP aur XQ ke perpendicular bisectors PQ ko Y aur Z par kaatte hain.
- **Idea:** perpendicular bisector ka har point do ends se barabar door hota hai, isliye "AD = AC" ya "YX = YP" milta hai.
- Mrs. Kulkarni ka 15 cm pennant, 60° aur 60°: equilateral, har side 5 cm.

---

## Practice Questions

1. Construct △ABC with BC = 4 cm, ∠B = 60° and AB + AC = 7 cm. Write the length of BD you will use, and the lengths of AB and AC you expect.

2. Construct △ABC with BC = 5 cm, ∠B = 60° and AB − AC = 1 cm (take AB > AC). Where does D lie? State the expected AB and AC.

3. Construct △ABC with BC = 5 cm, ∠B = 60° and AC − AB = 2 cm. On which ray do you mark D, and what are the expected AB and AC?

4. Can a triangle ABC be constructed with BC = 6 cm, ∠B = 45° and AB + AC = 5 cm? Explain.

5. Can a triangle ABC be constructed with BC = 4 cm, ∠B = 30° and AB − AC = 4.5 cm? Explain.

6. In the construction of △XYZ from the perimeter PQ and base angles ∠Y and ∠Z, we take half the angles at P and Q. Explain, using the isosceles triangle YPX, why ∠XYZ comes out equal to the full angle.

7. Mrs. Kulkarni has 9 cm of tape for an equilateral pennant. Describe how to construct it using the perimeter method, and give the side length of the pennant.

8. State true or false, with a reason.
   (a) In the sum construction, A lies on the perpendicular bisector of DC.
   (b) In the perimeter construction, XY = PY.
   (c) For BC = 7 cm and ∠B = 50°, a triangle with AB + AC = 7 cm can be constructed.

9. Construct △XYZ with perimeter 12 cm, ∠Y = 90° and ∠Z = 30°. Which half-angles do you draw at P and Q? After constructing, find ∠X, and state the expected values of XY, YZ and ZX.

10. In Figure 5.1, why must A lie between B and D, and not beyond D, for AB + AC to equal BD?

### Answers

1. BD = 7 cm. t² − 4t + 16 = (7 − t)², to 10t = 33, **AB = 3.3 cm** aur **AC = 3.7 cm**. Jaanch: 3.3 + 3.7 = 7 ✅, aur 7 > 4 ✅.

2. D ray BX par hai, B se 1 cm door, B aur A ke beech. t² − 5t + 25 = (t − 1)², to 3t = 24, **AB = 8 cm, AC = 7 cm**. Jaanch: 8 − 7 = 1 ✅. A se BC par perpendicular AF lo: BF = 8 ÷ 2 = 4, AF² = 64 − 16 = 48, FC = 5 − 4 = 1, to AC² = 48 + 1 = 49, AC = 7 ✅.

3. D opposite ray par (BX ki ulti taraf), BD = 2 cm. t² − 5t + 25 = (t + 2)², to 9t = 21, **AB = 7/3 ≈ 2.33 cm** aur **AC = 13/3 ≈ 4.33 cm**. Jaanch: AC − AB = 2 ✅, aur 2 < 5 (antar base se chhota) ✅.

4. **Nahi.** Sum 5 < 6 = base. Do sides ka jod teesri side se bada hona chahiye, aur yahan AB + AC = 5 cm base BC = 6 cm se chhota hai.

5. **Nahi.** Difference 4.5 > 4 = base. Difference base se chhota hona chahiye (AB < AC + BC, to AB − AC < BC). 4.5 > 4 ❌.

6. YX = YP (Y perpendicular bisector of XP par hai), to △YPX isosceles hai, aur ∠YXP = ∠YPX = aadha angle. Exterior angle ∠XYZ = ∠YPX + ∠YXP = aadha + aadha = **poora angle**. Isliye aadhe angle lete hain.

7. PQ = 9 cm kheencho. P aur Q par 60° banao, har ek ko bisect karke 30° banao, rays X par milti hain. XP aur XQ ke perpendicular bisectors PQ ko Y aur Z par kaatte hain, aur XY, XZ jodte hain. Triangle equilateral hai (60°, 60°, 60°), to har side 9 ÷ 3 = **3 cm**. Jaanch: PY = 3, YZ = 3, ZQ = 3, total 9 ✅.

8. (a) **True** ✅. Kyunki A ko DC ke perpendicular bisector se hi mark kiya gaya hai, isliye AD = AC.
   (b) **True** ✅. Y, XP ke perpendicular bisector par hai, to YX = YP.
   (c) **False** ❌. Condition sum > base hai, aur yahan sum 7 base 7 ke barabar hai, bada nahi. Isliye triangle nahi banega.

9. P par 90° ka aadha **45°** aur Q par 30° ka aadha **15°** banao. ∠X = 180° − 90° − 30° = **60°.** Ye right triangle ek equilateral triangle ka aadha hai, to XY (30° ke saamne) = ZX ÷ 2, aur Pythagoras se YZ = √(ZX² − XY²). Perimeter se ZX ≈ **5.07 cm**, XY ≈ **2.54 cm**, YZ ≈ **4.39 cm**. Jaanch: 2.54 + 4.39 + 5.07 = 12.00 ✅.

10. Agar A, D ke aage hota to AB = BD + DA, aur AB + AC = BD + 2·AD, jo BD se bada hota. Hamare case mein AB ≈ 3.55 cm, jo BD = 8 cm se chhota hai, isliye A, B aur D ke beech hai aur AB + AD = BD. Isi se AB + AC = BD milta hai.

---

Ab aap sirf sides se hi nahi, unke jod, antar aur poore perimeter se bhi triangle bana sakte ho. Ek extra point aur ek perpendicular bisector, bas! Aap ye kar sakte ho!

**Aage ka topic (Topic 6):** Ab tak sirf triangles the. Agle topic mein hum char sides wali shapes, yaani quadrilaterals, banana seekhenge: jaise ki kuch sides aur angles diye hon to parallelogram, rectangle ya kite kaise banta hai.
