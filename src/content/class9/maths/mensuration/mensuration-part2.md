# Chapter: Mensuration (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [mensuration.md](mensuration.md) se aage chalti hai** (wahan Topic 1 hai: perimeter aur area ka farak, triangle ka area aur Heron's formula).
> **Topics covered in this file:**
> 2. Heron's Formula se Quadrilateral ka Area

---

# Topic 2: Heron's Formula se Quadrilateral ka Area

Topic 1 mein humne dekha ki triangle ka area nikalne ke liye height hamesha zaroori nahi hoti. Sameer ke chacha peepal ke pedh ki wajah se traffic island ki height naap hi nahi paaye, phir bhi sirf 13, 14, 15 m sides se **84 m²** nikal aaya. Agar teeno sides pata hon, to **Heron's formula** se seedha area nikal aata hai: pehle semi-perimeter **s** nikalo, phir √(s(s − a)(s − b)(s − c)).

Ab ek naya sawaal: agar zameen ka tukda **chaar kinaaron wala** ho, yaani quadrilateral, to kya karein? Is topic mein hum dekhenge ki Heron's formula ki madad se kisi bhi quadrilateral ka area kaise nikalte hain. Trick ek hi hai: **quadrilateral ko do triangles mein tod do.**

---

## School ke kitchen garden ki kahani

Nisha ke school mein ek khaali zameen ka tukda hai. Principal ma'am ne tay kiya ki wahan bachche ek **kitchen garden** banayenge, jismein dhaniya, palak aur tamatar ugenge. Par pehle ye pata karna hai ki zameen kitni hai, taaki utni hi khaad aur beej mangwaye ja sakein.

Zameen ka aakaar na rectangle hai, na square. Chaar kone hain, chaaron sides alag alag lambai ki. Nisha aur uske dost ek naapne wala tape lekar aate hain aur chaaron sides naap lete hain.

Ab Nisha sochti hai: "Chaaron sides to pata hain. Ab area nikal jayega na?"

Uske Science teacher, Verma sir, muskurate hain aur chaar lakdi ki pattiyan laate hain, jinke kone kabze (hinge) se jude hain. Wo ise ek chaukor frame bana kar zameen par rakhte hain, phir dheere se ek kone ko dabaate hain. Frame **chapta** hone lagta hai. Sides ki lambai wahi hai, par andar ki jagah ghatti jaa rahi hai.

"Dekha?" Verma sir kehte hain. "Chaaron sides same rahi, par area badal gaya. Isliye sirf chaar sides kaafi nahi hain."

Phir wo ek **paanchvi patti** frame ke do aamne saamne ke konon ke beech jod dete hain. Ab frame hil hi nahi pata. Wo patti thi ek **diagonal**.

Is topic mein hum yahi seekhenge: **chaar sides + ek diagonal = quadrilateral ka pakka area.**

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Quadrilateral** | Chaar sides aur chaar kono wali band shakal | Khet, patang, darwaza |
| **Diagonal** | Aamne saamne ke do kono ko jodne wali line | ABCD mein AC ya BD |
| **Semi-perimeter (s)** | Triangle ke perimeter ka aadha (Topic 1 se) | 3, 4, 5 ke liye s = 6 |
| **Rigid (pakka)** | Jo shakal dabaane par na badle | Triangle hamesha rigid hota hai |
| **Rhombus** | Chaaron sides barabar wala quadrilateral | Patang jaisa diamond |
| **Parallelogram** | Aamne saamne ki sides barabar aur parallel | Jhuka hua rectangle |

---

## Part A: Sirf chaar sides kaafi kyun nahi?

Verma sir wala frame yaad karo. Chaar sides ke saath bhi frame kai shakal le sakta tha:

```
   Pehle (seedha):          Dabaane ke baad (chapta):

   D ___________ C            D ___________ C
    |           |               \           \
    |           |                \           \
    |           |                 \___________\
   A|___________|B                A            B

   Area zyada                  Area kam
```

Sides wahi hain, par andar ki jagah badal gayi. Iska matlab: **chaar sides se quadrilateral ka area tay nahi hota.**

Ab triangle ke saath yahi try karo. Teen pattiyan jodo. Kitna bhi dabao, triangle **hilega hi nahi.** Teen sides tay kar do, to triangle ki shakal aur area dono pakke ho jaate hain. Isiliye Heron's formula sirf teen sides se area de deta hai.

Isiliye quadrilateral ke liye hum ek **diagonal** bhi naapte hain. Diagonal quadrilateral ko **do triangles** mein baant deta hai, aur dono triangles pakke ho jaate hain.

> Yaad rakho: **Quadrilateral ke liye chaar sides + ek diagonal chahiye** (ya phir koi angle).

Isiliye bridges aur cycle ke frame mein triangle wali pattiyan lagaate hain. Triangle shakal nahi badalta.

---

## Part B: Tarika (3 kadam)

Quadrilateral ABCD hai, aur diagonal AC pata hai.

```
            D
           /\
          /  \
         /    \
        /      \  C
       /     .´|
      /   .´   |
     / .´      |
   A/__________|B
```

**Kadam 1: Diagonal se do triangles bana lo.**
Diagonal AC quadrilateral ko do hisson mein baant deta hai: **ΔABC** aur **ΔACD**.

**Kadam 2: Har triangle ka area Heron's formula se nikalo.**
Har triangle ki teeno sides pata hain. Topic 1 wala formula lagao. **Dhyan do, s har triangle ka alag alag nikalta hai.**

**Kadam 3: Dono areas ko jod do.**
ar(ABCD) = ar(ΔABC) + ar(ΔACD)

Bas itna hi. Ab examples dekhte hain.

---

## Part C: Solved examples

### Example 1: Nisha ka kitchen garden

Garden ABCD mein AB = 3 m, BC = 4 m, CD = 4 m, DA = 5 m, aur diagonal AC = 5 m. Area nikalo.

**ΔABC** (sides 3, 4, 5):
- s = (3 + 4 + 5)/2 = **6**
- Area = √(6 × 3 × 2 × 1) = √36 = **6 m²**

(Ye 3-4-5 wala right triangle hai, jo Topic 1 mein bhi dekha tha.)

**ΔACD** (sides AC = 5, CD = 4, DA = 5):
- s = (5 + 4 + 5)/2 = **7**
- Area = √(7 × (7 − 5) × (7 − 4) × (7 − 5)) = √(7 × 2 × 3 × 2) = √84 = **2√21 m²**
- √21 ≈ 4.583, to 2√21 ≈ **9.17 m²**

**Kul area** = 6 + 2√21 ≈ 6 + 9.17 = **15.17 m²**, yaani lagbhag **15.2 m²**.

Jaanch: √84 ≈ 9.165, aur 6 + 9.165 = 15.165 ✅

### Example 2: Ek park jismein ek kona 90° ka hai

Park ABCD mein ∠C = 90°, AB = 9 m, BC = 12 m, CD = 5 m, AD = 8 m. Area nikalo.

```
   A __________ D
    \          |
     \         | 5 m
      \        |
       \_______|
       B  12 m  C   (∠C = 90°)
```

Yahan diagonal diya hi nahi hai. Par ∠C = 90° hai, to diagonal **BD** khud nikal sakte hain.

**Diagonal BD:** ΔBCD right triangle hai, to Pythagoras se (ye pichhli classes mein padha hai):
BD² = 12² + 5² = 144 + 25 = 169, to **BD = 13 m**

**ΔBCD** (right triangle):
- Area = ½ × 12 × 5 = **30 m²**

**ΔABD** (sides AB = 9, AD = 8, BD = 13):
- s = (9 + 8 + 13)/2 = **15**
- Area = √(15 × 6 × 7 × 2) = √1260 = **6√35 m²**
- √35 ≈ 5.916, to 6√35 ≈ **35.5 m²**

**Kul area** = 30 + 35.5 = **65.5 m²** (lagbhag)

Jaanch: ΔBCD ka area Heron se bhi nikalo: s = (12 + 5 + 13)/2 = 15, √(15 × 3 × 10 × 2) = √900 = 30 ✅. Right angle wala shortcut aur Heron, dono same jawab dete hain.

### Example 3: Rhombus jaisa khet

Ek khet rhombus jaisa hai. Har side 30 m hai, aur ek diagonal 48 m hai. Area nikalo.

Diagonal rhombus ko do **ekdum barabar** triangles mein baant deta hai, dono ki sides 30, 30, 48.

**Ek triangle** (30, 30, 48):
- s = (30 + 30 + 48)/2 = **54**
- Area = √(54 × 24 × 24 × 6) = √186624 = **432 m²**

**Kul area** = 2 × 432 = **864 m²**

Jaanch (rhombus wala shortcut): Rhombus ke diagonals ek doosre ko 90° par aadha karte hain. Doosre diagonal ka aadha = √(30² − 24²) = √(900 − 576) = √324 = 18, to doosra diagonal = 36 m.
Rhombus ka area = ½ × d₁ × d₂ = ½ × 48 × 36 = **864 m²** ✅

### Example 4: Parallelogram, sides aur diagonal se

Ek parallelogram ki do sides 26 cm aur 28 cm hain, aur ek diagonal 30 cm hai. Area nikalo.

Diagonal parallelogram ko do **congruent** triangles mein baant deta hai (Quadrilaterals chapter mein dekha tha). Dono ki sides 26, 28, 30. (Ye wahi triangle hai jo Topic 1 ke Practice Question 7 mein deewar thi.)

**Ek triangle** (26, 28, 30):
- s = (26 + 28 + 30)/2 = **42**
- Area = √(42 × 16 × 14 × 12) = √112896 = **336 cm²**

**Parallelogram ka area** = 2 × 336 = **672 cm²**

Jaanch: 42 × 16 = 672, aur 14 × 12 = 168. 672 × 168 = 112896, aur 336² = 112896 ✅

### Example 5: Kharche wala sawaal

Example 3 wale rhombus khet mein ghaas lagani hai. ₹4 per m² ka kharcha hai. Kul kharcha kitna?

Area = 864 m² (Example 3 se)
Kharcha = 864 × 4 = **₹3456**

Dhyan do: ghaas **andar ki jagah** par lagti hai, isliye **area** use kiya. Agar khet ke chaaron taraf **baadh** lagani hoti, to **perimeter** (4 × 30 = 120 m) use hota. Topic 1 wala area aur perimeter ka farak yahan bahut kaam aata hai.

### Example 6: Chhatri ke kapde

Ek chhatri **10 triangular tukdon** se bani hai. Har tukde ki sides 50 cm, 50 cm aur 20 cm hain. Tukde do rang ke hain, 5 laal aur 5 neele. Har rang ka kitna kapda laga?

**Ek tukda** (50, 50, 20):
- s = (50 + 50 + 20)/2 = **60**
- Area = √(60 × 10 × 10 × 40) = √240000 = **200√6 cm²** ≈ 489.9 cm²

**Har rang** = 5 tukde = 5 × 200√6 = **1000√6 cm²** ≈ **2449.5 cm²**

Jaanch: √6 ≈ 2.449, to 1000 × 2.449 ≈ 2449 ✅

### Example 7: Patang ke kaagaz

Ek patang square aakaar ki hai, jiska diagonal 24 cm hai. Ek diagonal ke dono taraf alag rang ka kaagaz laga hai. Neeche ek chhoti triangular poonchh hai, jiski sides 5 cm, 5 cm aur 6 cm hain. Har kaagaz kitna laga?

**Square patang:** Square ke diagonals barabar hote hain, to dono 24 cm.
Square ka area = ½ × 24 × 24 = **288 cm²**
Diagonal ise do barabar triangles mein baant deta hai, to **har rang = 144 cm²**.

**Poonchh** (5, 5, 6), Topic 1 ke Example 2 wala hi triangle:
- s = (5 + 5 + 6)/2 = **8**
- Area = √(8 × 3 × 3 × 2) = √144 = **12 cm²**

Jaanch: Square ki side = 24/√2 ≈ 16.97 cm. Ek triangle ki sides 16.97, 16.97, 24 hain, aur Heron se area ≈ 144 cm² aata hai ✅

---

## Part D: Kab shortcut, kab Heron?

Heron's formula **har baar** chalta hai. Par kuch shakalon mein seedha formula jaldi kaam karta hai. Accha tarika ye hai: **shortcut se nikalo, Heron se jaanch karo** (ya ulta).

| Shakal | Shortcut | Heron se jaanch |
|---|---|---|
| Right angle wala triangle | ½ × base × height | Teeno sides se Heron |
| Rhombus | ½ × d₁ × d₂ | Diagonal se do triangles |
| Rectangle | lambai × chaudai | Diagonal se do right triangles |
| Koi bhi quadrilateral (sides + diagonal) | Koi shortcut nahi | Sirf Heron, do baar |

---

## Aam galtiyan (bachke rehna)

**Galti 1: Sirf chaar sides se area nikaalne ki koshish**
Chaar sides se quadrilateral ka area tay nahi hota (Verma sir ka frame yaad karo). Diagonal ya koi angle zaroor chahiye.

**Galti 2: Diagonal galat triangle ke saath jodna**
Diagonal AC ho, to triangles hain **ABC** (sides AB, BC, AC) aur **ACD** (sides AC, CD, DA). Kuch bachche AB ko CD wale triangle mein daal dete hain. Hamesha figure bana kar dekho ki kaunsi side kis triangle mein hai.

**Galti 3: Dono triangles ka ek hi s use karna**
s har triangle ka **alag** hota hai. Example 1 mein pehle triangle ka s = 6 tha aur doosre ka s = 7.

**Galti 4: Quadrilateral ka perimeter le kar s banana**
s triangle ka semi-perimeter hai, quadrilateral ka nahi. Quadrilateral ke liye Heron seedha nahi lagta. Pehle triangles banao.

**Galti 5: Area aur perimeter mix karna**
Ghaas, paint, tiles ke liye **area** chahiye. Baadh, boundary, rassi ke liye **perimeter** chahiye.

**Galti 6: Diagonal ko dono triangles mein bhool jana**
Diagonal **dono** triangles ki side hai. Use dono baar likhna hai.

**Galti 7: Units mix karna**
Ek side m mein aur doosri cm mein ho, to pehle sabko ek unit mein badlo. Area ki unit **square** wali hoti hai (m², cm²).

---

## Quick Recap

- **Chaar sides kaafi nahi** hain quadrilateral ke area ke liye, kyunki quadrilateral dabaane par shakal badal leta hai. Triangle nahi badalta.
- **Diagonal** quadrilateral ko **do triangles** mein baant deta hai.
- **Tarika:** diagonal se do triangles banao, phir har triangle ka area Heron se nikalo (s alag alag), phir dono areas jodo.
- Diagonal na diya ho par **90° ka kona** ho, to Pythagoras se diagonal nikalo.
- **Rhombus aur parallelogram** mein diagonal do barabar triangles banata hai, to ek ka area nikal kar double kar do.
- **Area** se ghaas, paint, kapda. **Perimeter** se baadh, boundary.
- Jahan ho sake, **shortcut aur Heron, dono se jaanch** karo.

---

## Practice Questions

1. In quadrilateral ABCD, AB = 6 cm, BC = 8 cm, CD = 10 cm, DA = 12 cm and diagonal AC = 10 cm. Find the area of ABCD.

2. The perimeter of a rhombus is 80 m and one of its diagonals is 24 m. Find the area of the rhombus using Heron's formula. Check your answer using the diagonals.

3. Two adjacent sides of a parallelogram are 17 cm and 10 cm, and one diagonal is 21 cm. Find the area of the parallelogram.

4. A field ABCD has ∠C = 90°, BC = 8 m, CD = 15 m, AB = 10 m and AD = 21 m. Find the area of the field.

5. An umbrella is made by stitching 8 triangular pieces of cloth of two colours, 4 pieces of each colour. Each piece has sides 25 cm, 25 cm and 14 cm. How much cloth of each colour is required?

6. The quadrilateral in Question 1 is a garden with all measurements in metres. Find the cost of levelling it at ₹12 per m².

7. Explain why knowing only the four sides of a quadrilateral is not enough to find its area.

8. A kite is in the shape of a square with a diagonal of 30 cm. It is made of two colours of paper, one on each side of a diagonal. Its tail is a triangle with sides 17 cm, 17 cm and 16 cm, made of a third colour. Find the area of paper of each colour used.

### Answers

1. **ΔABC** (6, 8, 10): s = 12, area = √(12 × 6 × 4 × 2) = √576 = 24 cm².
   **ΔACD** (10, 10, 12): s = 16, area = √(16 × 6 × 6 × 4) = √2304 = 48 cm².
   **Kul area = 24 + 48 = 72 cm²**

2. Side = 80/4 = 20 m. Diagonal 24 se do triangles (20, 20, 24) bante hain.
   s = 32, area = √(32 × 12 × 12 × 8) = √36864 = 192 m².
   **Rhombus ka area = 2 × 192 = 384 m²**
   Jaanch: doosre diagonal ka aadha = √(20² − 12²) = √256 = 16, to doosra diagonal = 32 m. ½ × 24 × 32 = 384 ✅

3. Triangle (17, 10, 21): s = 24, area = √(24 × 7 × 14 × 3) = √7056 = 84 cm².
   **Parallelogram ka area = 2 × 84 = 168 cm²**

4. **Diagonal BD** = √(8² + 15²) = √289 = 17 m (Pythagoras, pichhli classes wala).
   **ΔBCD** = ½ × 8 × 15 = 60 m².
   **ΔABD** (10, 21, 17): s = 24, area = √(24 × 14 × 3 × 7) = √7056 = 84 m².
   **Kul area = 60 + 84 = 144 m²**

5. Ek tukda (25, 25, 14): s = 32, area = √(32 × 7 × 7 × 18) = √28224 = 168 cm².
   **Har rang = 4 × 168 = 672 cm²**

6. Area = 72 m² (Q1 se). Kharcha = 72 × 12 = **₹864**

7. Quadrilateral rigid nahi hota. Chaar sides ki lambai same rakhte hue bhi use dabaa kar chapta kiya ja sakta hai, aur aisa karne se andar ka area badal jata hai. Isliye area tay karne ke liye ek diagonal (ya ek angle) bhi chahiye. Diagonal ise do triangles mein baant deta hai, aur triangle teen sides se pakka ho jata hai.

8. Square ka area = ½ × 30 × 30 = 450 cm². Diagonal ke dono taraf **225 cm² har rang**.
   Poonchh (17, 17, 16): s = 25, area = √(25 × 8 × 8 × 9) = √14400 = **120 cm²** (teesra rang).

---

Ab aap koi bhi chaar kone wali zameen, chhatri ya patang dekh kar uska area nikal sakte ho, bas ek diagonal naap lo. Aap kar loge!

**Agle topic mein:** Ab tak hum **chapti** (flat) shakalon ke saath khel rahe the. Agle topic mein hum **3D** duniya mein jaayenge: ek dabba (cuboid) aur pasa (cube) ko kitna kaagaz lapetne ke liye chahiye, aur unke andar kitna saaman aata hai.
