# Chapter: Triangles

> **Class:** 9 | **Subject:** Mathematics
> **Ye ek naya chapter hai.** Isme [Lines and Angles](../lines-and-angles/lines-and-angles.md) chapter (angles ke types) aur [Euclid's Geometry](../euclids-geometry/euclids-geometry-part2.md) chapter (collinear points) ki baatein kaam aayengi.
> **Topics covered in this file:**
> 1. Triangles: Types on the Basis of Sides, Perimeter, Types on the Basis of Angles

---

# Topic 1: Triangles, unke Types aur Perimeter

Lines and Angles chapter mein humne angles ko naapna aur pehchanna seekha: acute, right, obtuse. Ab hum un lines aur angles se bani ek sabse simple aur sabse kaam ki shape se milenge: **triangle (tribhuj)**. Is topic mein hum dekhenge ki triangle kya hai, use sides aur angles ke hisaab se kaise pehchante hain, aur uska perimeter kaise nikalte hain.

---

## Camping trip ki kahani

Sonu apne doston ke saath pehli baar camping par gaya. Raaste mein usne teen cheezein dekhi:

1. Highway par ek **laal-safed board**, jiska aakaar teen kinaron wala tha. Uspe likha tha "Aage mod hai, dheere chalo".
2. Dhabe par garam **samosa**, jo upar se dekhne par teen kinaron wala lagta tha.
3. Camp par unka **tent**, jiska saamne wala hissa bhi teen kinaron wala tha: do tirchhe parde aur neeche zameen.

Tent lagate waqt Sonu ke dost ne poocha: "Yaar, tent hamesha is shape ka kyun hota hai? Chaukor kyun nahi?"

Camp ke instructor ne muskura kar kaha: "Kyunki ye shape **sabse mazboot** hoti hai. Teen danda jod do, to ye hilta nahi. Chaar jodo, to dhakka dene par tedha ho jata hai. Isiliye pul, chhat aur tower sab mein yahi shape dikhti hai."

Ye shape hai **triangle**. Chaliye ise dhyan se samajhte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Triangle (tribhuj)** | Teen seedhi lines se bana band aakaar | Samosa, tent ka saamne ka hissa |
| **Vertex (sheersh)** | Wo kona jahan do sides milti hain (bahuvachan: vertices) | ΔABC mein A, B, C |
| **Side (bhuja)** | Do vertices ko jodne wali line segment | AB, BC, CA |
| **Scalene** | Teeno sides alag lambai ki | 4 cm, 5 cm, 6 cm |
| **Isosceles** | Kam se kam do sides barabar | 5 cm, 5 cm, 8 cm |
| **Equilateral** | Teeno sides barabar | 6 cm, 6 cm, 6 cm |
| **Perimeter (parimaap)** | Boundary ke chaaron taraf ek baar ghoomne ki kul doori | Teeno sides ka jod |
| **Acute-angled** | Teeno angles 90° se chhote | 50°, 60°, 70° |
| **Right-angled** | Ek angle theek 90° | 90°, 60°, 30° |
| **Obtuse-angled** | Ek angle 90° se bada | 120°, 35°, 25° |
| **Hypotenuse (karn)** | Right triangle mein 90° ke saamne wali side | Sabse lambi side |

---

## Part A: Triangle kya hai

### Teen points, par ek shart ke saath

Kaagaz par koi bhi **teen points** lo, A, B aur C. Unhe seedhi lines se jod do. Ek band shape ban jati hai: yahi **triangle** hai.

```
            A
           / \
          /   \
         /     \
        /       \
       B---------C
```

Par ek shart hai. Agar teeno points **ek hi seedhi line par** ho, yaani **collinear** hon (Euclid chapter ke Topic 2 mein dekha tha), to jodne par sirf ek line banti hai, koi band shape nahi:

```
   A-------B-------C        (collinear: triangle nahi banta)
```

> **Triangle = teen non-collinear points ko jodne se bani band shape.**

### Triangle ke hisse

ΔABC (padho "triangle ABC") ko dekho. Iske paas hain:

- **3 vertices:** A, B, C
- **3 sides:** AB, BC, CA
- **3 angles:** ∠A (yaani ∠BAC), ∠B (yaani ∠ABC), ∠C (yaani ∠BCA)

Kul milakar **6 hisse** (3 sides + 3 angles). Inhe triangle ke **6 parts** kehte hain.

Naam kisi bhi kram mein le sakte ho: ΔABC, ΔBCA, ΔCAB sab ek hi triangle hain.

### Saamne wali side, saamne wala angle

Ye baat aage bahut kaam aayegi. Har angle ke **theek saamne** ek side hoti hai, jo us angle ko chhooti nahi.

```
            A
           / \
          /   \
         /     \
        B-------C
```

| Angle | Saamne wali side |
|---|---|
| ∠A | BC |
| ∠B | CA |
| ∠C | AB |

Pehchanne ki trick: **jis vertex ka angle hai, wo letter side ke naam mein nahi aayega.** ∠A ke saamne wali side mein A nahi hai: BC.

Ulta bhi: side AB ke saamne wala angle wo hai jiska letter AB mein nahi hai, yaani **∠C**.

---

## Part B: Kya koi bhi teen lambaiyan triangle bana sakti hain?

### Teen tiliyon ka khel

Sonu ke paas teen tiliyan hain: **3 cm, 4 cm aur 8 cm**. Wo inse triangle banane ki koshish karta hai.

3 cm aur 4 cm wali tiliyan 8 cm wali ke dono siro se lagata hai. Dono ko upar uthata hai taaki wo mil jayein. Par 3 + 4 = 7 cm hi hai, aur neeche wali 8 cm hai. Dono choti tiliyan **milti hi nahi**!

```
   3 cm        4 cm
   \              /
    \            /       (beech mein gap reh gaya)
     B----------C
        8 cm
```

Ab agar tiliyan **5 cm, 6 cm aur 10 cm** hon: 5 + 6 = 11, jo 10 se bada hai. Choti tiliyan upar mil jati hain aur triangle ban jata hai.

### Rule (triangle inequality)

> **Kisi bhi triangle mein, kinhi bhi do sides ka jod teesri side se bada hota hai.**

Shortcut: Teeno pairs check karne ki zaroorat nahi. Bas **do chhoti sides ka jod, sabse badi side se bada** hona chahiye.

| Sides | Do chhoti ka jod | Sabse badi | Triangle banega? |
|---|---|---|---|
| 3, 4, 8 | 3 + 4 = 7 | 8 | Nahi (7 < 8) ❌ |
| 5, 6, 10 | 5 + 6 = 11 | 10 | Haan (11 > 10) ✅ |
| 2, 3, 5 | 2 + 3 = 5 | 5 | Nahi (5 = 5, barabar hai, bada nahi) ❌ |
| 7, 7, 7 | 7 + 7 = 14 | 7 | Haan ✅ |

**2, 3, 5 wala case dhyan se dekho.** Jod barabar hai, to choti tiliyan upar uthne ki jagah **seedhi let jati hain**, bilkul 5 cm wali ke upar. Triangle nahi, sirf ek line banti hai.

---

## Part C: Sides ke hisaab se types

Triangle ki teeno sides naapo, aur dekho kitni barabar hain.

### 1. Scalene triangle (teeno sides alag)

```
            A
           / \
     5 cm /   \ 7 cm
         /     \
        B-------C
          6 cm
```

Teeno sides alag lambai ki: 5 cm, 6 cm, 7 cm. Iske teeno angles bhi alag alag hote hain.

Example: Ek aisa zameen ka tukda jiski teeno deewarein alag lambai ki hon.

### 2. Isosceles triangle (kam se kam do sides barabar)

```
            A
           / \
     5 cm /   \ 5 cm
         /     \
        B-------C
          8 cm
```

Do sides barabar: AB = AC = 5 cm.

Iske hisson ke khaas naam hain:
- Barabar wali do sides (AB, AC) ko **legs** ya **barabar bhujayein** kehte hain.
- Teesri side (BC) ko **base (aadhar)** kehte hain.
- Base ke dono siro par bane angles (∠B aur ∠C) ko **base angles** kehte hain.

Ek dilchasp baat: isosceles triangle ke **dono base angles barabar** hote hain. Abhi bas itna yaad rakho. Iska proof aage [Congruence of Triangles chapter ke Topic 3](../congruence-of-triangles/congruence-of-triangles-part3.md) mein aayega.

Example: Tent ka saamne wala hissa. Dono tirchhe parde barabar lambe hote hain, aur zameen base hai.

### 3. Equilateral triangle (teeno sides barabar)

```
            A
           / \
     6 cm /   \ 6 cm
         /     \
        B-------C
          6 cm
```

Teeno sides barabar: AB = BC = CA = 6 cm.

Iske **teeno angles bhi barabar** hote hain, aur har angle **60°** ka hota hai. Ye 60° kahan se aaya, iska reason Topic 2 mein milega.

Example: Highway ke kuch warning board, ek samaan kaate gaye sandwich ke kuch tukde.

### Ek chhoti baat: equilateral bhi ek tarah ka isosceles hai

Isosceles ki definition hai "**kam se kam** do sides barabar". Equilateral mein to teeno barabar hain, to usme do barabar to hain hi. Isliye har equilateral triangle, ek isosceles triangle bhi hai. Par ulta sach nahi: har isosceles, equilateral nahi hota.

### Summary table

| Type | Barabar sides | Barabar angles | Example sides |
|---|---|---|---|
| Scalene | Koi nahi | Koi nahi | 4, 5, 6 |
| Isosceles | Kam se kam 2 | 2 (base angles) | 5, 5, 8 |
| Equilateral | Teeno | Teeno (har ek 60°) | 6, 6, 6 |

---

## Part D: Perimeter of a triangle

### Kahani: tent ke chaaron taraf rassi

Camp mein instructor ne kaha: "Tent ke neeche wale triangle ki boundary par rassi baandho, taaki koi usse na takraye." Kitni rassi chahiye?

Bas boundary par **ek baar poora chakkar** lagao aur doori jodo. Yahi **perimeter** hai.

> **Perimeter = teeno sides ka jod**

### Har type ke liye formula

| Type | Sides | Perimeter |
|---|---|---|
| Scalene | a, b, c | **a + b + c** |
| Isosceles | a, a, b (a = leg, b = base) | **2a + b** |
| Equilateral | a, a, a | **3a** |

Perimeter ek **lambai** hai, isliye uski unit cm, m, km jaisi hoti hai (cm² nahi).

### Solved examples

**Example 1: Scalene.** Sides 5 cm, 7 cm, 9 cm. Perimeter?
P = 5 + 7 + 9 = **21 cm**

**Example 2: Isosceles.** Legs 8 cm each, base 6 cm. Perimeter?
P = 2 × 8 + 6 = 16 + 6 = **22 cm**

**Example 3: Equilateral.** Side 7 cm. Perimeter?
P = 3 × 7 = **21 cm**

Dhyan do: Example 1 aur 3 ka perimeter ek hi (21 cm) hai, par shapes alag hain. Perimeter se triangle ki shape tay nahi hoti.

**Example 4: Units mix hon.** Sides 50 cm, 1.2 m, 80 cm. Perimeter?
Pehle sab ko ek unit mein lao: 1.2 m = 120 cm.
P = 50 + 120 + 80 = 250 cm = **2.5 m**
(Triangle banta hai? 50 + 80 = 130 > 120 ✅)

**Example 5: Fencing (baad).** Ek triangular park ki sides 30 m, 40 m aur 50 m hain. Baad lagane ka kharcha ₹25 prati metre hai. Kul kharcha?
Perimeter = 30 + 40 + 50 = 120 m
Kharcha = 120 × 25 = **₹3000**

**Example 6: Gayab side nikalna.** Ek triangle ka perimeter 36 cm hai. Do sides 10 cm aur 12 cm hain. Teesri side?
10 + 12 + x = 36 → 22 + x = 36 → x = **14 cm**
Jaanch: 10 + 12 + 14 = 36 ✅. Triangle banta hai? 10 + 12 = 22 > 14 ✅

**Example 7: Isosceles ke legs nikalna.** Isosceles triangle ka perimeter 30 cm hai aur base 8 cm. Har leg?
2a + 8 = 30 → 2a = 22 → a = **11 cm**
Jaanch: 11 + 11 + 8 = 30 ✅

**Example 8: Equilateral ki side.** Perimeter 45 cm. Side?
3a = 45 → a = **15 cm**

**Example 9: Algebra wali sides.** Ek triangle ki sides (x + 2) cm, (2x − 1) cm aur (x + 5) cm hain, aur perimeter 30 cm hai. Sides nikalo aur triangle ka type batao.

(x + 2) + (2x − 1) + (x + 5) = 30
Like terms jodo (Polynomials chapter wala kaam): 4x + 6 = 30
4x = 24 → x = 6

Sides:
- x + 2 = 8 cm
- 2x − 1 = 11 cm
- x + 5 = 11 cm

Jaanch: 8 + 11 + 11 = 30 ✅. Do sides barabar (11, 11), to ye **isosceles triangle** hai.

---

## Part E: Angles ke hisaab se types

Lines and Angles chapter ke Topic 1 mein humne acute (90° se chhota), right (theek 90°) aur obtuse (90° se bada) angles dekhe the. Triangles ke angles ke hisaab se naam bhi unhi par tike hain.

### 1. Acute-angled triangle (teeno angles acute)

Teeno angles 90° se chhote.

Example: angles 50°, 60°, 70°. Ek equilateral triangle (60°, 60°, 60°) bhi acute-angled hota hai.

### 2. Right-angled triangle (ek angle 90°)

```
      A
      |\
      | \
      |  \    AC = hypotenuse (karn)
      |   \
      |_   \
      |_|___\
      B      C
```

∠B = 90°. Is triangle mein:
- 90° ke **saamne wali side AC** ko **hypotenuse (karn)** kehte hain. Ye right triangle ki **sabse lambi side** hoti hai.
- Baaki do sides (AB, BC), jo right angle banati hain, unhe **legs** kehte hain.

Examples:
- Geometry box ka set square: 90°, 60°, 30°.
- Doosra set square: 90°, 45°, 45°.
- Deewar se tiki seedhi (ladder): deewar aur zameen 90° banate hain.

### 3. Obtuse-angled triangle (ek angle obtuse)

Ek angle 90° se bada.

```
                  A
             .-'    '-.
        .-'      120°    '-.
     B------------------------C
```

Yahan ∠A = 120° hai (bahut khula hua angle), aur ∠B, ∠C chhote hain.

Example: angles 120°, 35°, 25°. Ek **neecha aur chauda tent**, jiske parde zameen par door tak faile hon, uski chot (top) par obtuse angle banta hai.

### Ek sawaal jiska jawab Topic 2 mein

Kya ek triangle mein **do right angles** ho sakte hain? Ya **do obtuse angles**? Ya ek right aur ek obtuse saath mein?

Nahi! Kisi triangle mein **zyada se zyada ek** right ya obtuse angle hi ho sakta hai. Ye kyun hota hai, iska jawab Topic 2 ki **angle sum property** mein milega. Abhi bas ye yaad rakho.

### Summary table

| Type | Shart | Example angles |
|---|---|---|
| Acute-angled | Teeno angles < 90° | 50°, 60°, 70° |
| Right-angled | Ek angle = 90° | 90°, 60°, 30° |
| Obtuse-angled | Ek angle > 90° | 120°, 35°, 25° |

---

## Part F: Dono naam ek saath

Ek triangle ko **sides** se bhi naam de sakte hain aur **angles** se bhi. Dono milakar poora naam banta hai, jaise "right-angled isosceles triangle".

| | Acute-angled | Right-angled | Obtuse-angled |
|---|---|---|---|
| **Scalene** | Ho sakta hai (50°, 60°, 70°) | Ho sakta hai (90°, 60°, 30°) | Ho sakta hai (120°, 35°, 25°) |
| **Isosceles** | Ho sakta hai (70°, 70°, 40°) | Ho sakta hai (90°, 45°, 45°) | Ho sakta hai (120°, 30°, 30°) |
| **Equilateral** | **Hamesha** (60°, 60°, 60°) | **Kabhi nahi** | **Kabhi nahi** |

**Equilateral right ya obtuse kyun nahi ho sakta?** Kyunki equilateral ke teeno angles 60° hote hain. 60° na 90° hai, na 90° se bada. To equilateral triangle **hamesha acute-angled** hota hai.

Isosceles rows mein dekho: barabar wale angles hamesha **base angles** hote hain (70°-70°, 45°-45°, 30°-30°).

---

## Aam galtiyan (bachke rehna)

**Galti 1: Koi bhi teen lambaiyan triangle bana deti hain, ye sochna**
3, 4, 8 se triangle nahi banta, kyunki 3 + 4 = 7, jo 8 se chhota hai. Pehle check karo.

**Galti 2: "Barabar" ko "bada" samajh lena**
2, 3, 5 mein 2 + 3 = 5 hai, bada nahi. Triangle nahi banta. Jod **bada** hona chahiye.

**Galti 3: Perimeter mein units mix kar dena**
50 cm + 1.2 m + 80 cm ko 50 + 1.2 + 80 = 131.2 mat likhna. Pehle sab ek unit mein lao.

**Galti 4: Saamne wali side galat batana**
∠A ke saamne wali side AB nahi, **BC** hai. Trick: us vertex ka letter side ke naam mein nahi aata.

**Galti 5: Hypotenuse kisi bhi triangle mein dhundhna**
Hypotenuse sirf **right-angled triangle** mein hota hai: 90° ke saamne wali side.

**Galti 6: Equilateral ko isosceles nahi maanna**
Isosceles = **kam se kam** do sides barabar. Equilateral mein teeno barabar hain, to wo bhi isosceles ki shart poori karta hai.

**Galti 7: Isosceles ke perimeter mein a aur b ulta lena**
2a + b mein **a = barabar wali side (leg)** aur **b = base**. Legs 8 cm aur base 6 cm ho to 2 × 8 + 6 = 22 cm, 2 × 6 + 8 = 20 cm nahi.

**Galti 8: Ek triangle mein do obtuse angles maan lena**
Aisa kabhi nahi hota. Zyada se zyada ek angle 90° ya usse bada ho sakta hai (reason Topic 2 mein).

---

## Quick Recap

- **Triangle** = teen **non-collinear** points ko jodne se bani band shape. Isme 3 vertices, 3 sides aur 3 angles (kul 6 parts) hote hain.
- Har angle ke **saamne ek side** hoti hai (∠A ke saamne BC).
- **Triangle inequality:** do chhoti sides ka jod sabse badi side se **bada** hona chahiye.
- **Sides se types:** scalene (koi barabar nahi), isosceles (kam se kam 2 barabar, base angles barabar), equilateral (teeno barabar, har angle 60°).
- **Perimeter** = teeno sides ka jod: a + b + c, 2a + b, 3a. Units pehle ek jaisi karo.
- **Angles se types:** acute (teeno < 90°), right (ek = 90°, saamne wali side hypotenuse), obtuse (ek > 90°).
- Equilateral triangle **hamesha acute** hota hai.
- Triangle mein **zyada se zyada ek** right ya obtuse angle hota hai (reason Topic 2 mein).

---

## Practice Questions

1. Can the following lengths form a triangle? Give a reason.
   (a) 4 cm, 5 cm, 6 cm
   (b) 2 cm, 3 cm, 6 cm
   (c) 7 cm, 7 cm, 14 cm
   (d) 6 cm, 8 cm, 10 cm

2. Classify each triangle on the basis of its sides:
   (a) 6 cm, 6 cm, 6 cm
   (b) 5 cm, 7 cm, 5 cm
   (c) 4 cm, 6 cm, 8 cm

3. Classify each triangle on the basis of its angles:
   (a) 50°, 60°, 70°
   (b) 90°, 30°, 60°
   (c) 110°, 40°, 30°
   (d) 45°, 45°, 90°

4. Find the perimeter of a triangle whose sides are 6.5 cm, 8 cm and 9.5 cm.

5. The equal sides of an isosceles triangle are 9 cm each and its perimeter is 25 cm. Find its base.

6. A triangular park has sides 40 m, 50 m and 60 m. Find the cost of fencing it at ₹20 per metre.

7. The sides of a triangle are (2x + 1) cm, (3x − 2) cm and (x + 4) cm, and its perimeter is 39 cm. Find the sides and classify the triangle by its sides.

8. In ΔPQR:
   (a) Name the side opposite ∠Q.
   (b) Name the angle opposite side QR.

9. State whether each statement is true or false. Give a reason.
   (a) An equilateral triangle can be obtuse-angled.
   (b) A right-angled triangle can be isosceles.
   (c) The hypotenuse is the longest side of a right-angled triangle.
   (d) Every isosceles triangle is equilateral.

### Answers

1. (a) 4 + 5 = 9 > 6. **Haan, banega** ✅
   (b) 2 + 3 = 5 < 6. **Nahi banega** ❌
   (c) 7 + 7 = 14, jo 14 ke barabar hai, bada nahi. **Nahi banega** ❌
   (d) 6 + 8 = 14 > 10. **Haan, banega** ✅
2. (a) Teeno barabar: **equilateral**
   (b) Do barabar (5, 5): **isosceles**
   (c) Teeno alag: **scalene**
3. (a) Teeno 90° se chhote: **acute-angled**
   (b) Ek angle 90°: **right-angled**
   (c) Ek angle 110° (90° se bada): **obtuse-angled**
   (d) Ek angle 90°: **right-angled** (aur do angles barabar, to right-angled isosceles)
4. P = 6.5 + 8 + 9.5 = **24 cm**
5. 2 × 9 + b = 25 → 18 + b = 25 → b = **7 cm**
   Jaanch: 9 + 9 + 7 = 25 ✅
6. Perimeter = 40 + 50 + 60 = 150 m. Kharcha = 150 × 20 = **₹3000**
7. (2x + 1) + (3x − 2) + (x + 4) = 39 → 6x + 3 = 39 → 6x = 36 → x = 6
   Sides: 2(6) + 1 = **13 cm**, 3(6) − 2 = **16 cm**, 6 + 4 = **10 cm**
   Jaanch: 13 + 16 + 10 = 39 ✅. Triangle banta hai? 10 + 13 = 23 > 16 ✅
   Teeno alag hain, to **scalene triangle**.
8. (a) ∠Q ke saamne wali side mein Q nahi aayega: **PR**
   (b) QR mein P nahi hai, to saamne wala angle **∠P**
9. (a) **False.** Equilateral ke teeno angles 60° hote hain, koi bhi 90° se bada nahi. Ye hamesha acute hota hai.
   (b) **True.** Jaise 90°, 45°, 45° wala triangle: do sides barabar aur ek right angle.
   (c) **True.** Hypotenuse right angle ke saamne hoti hai aur sabse lambi hoti hai.
   (d) **False.** Jaise 5, 5, 8 isosceles hai, par equilateral nahi.

---

Triangle geometry ki sabse simple shape hai, par isi se aage ki lagbhag saari geometry banti hai. Sides aur angles se naam dena aur perimeter nikalna pakka kar lo, kyunki ye har jagah kaam aayega.

**Agle topic mein (Topic 2):** Triangle ke andar chhupi kuch khaas lines aur points: **median, altitude, incentre aur circumcentre**. Aur saath mein jaanenge ki triangle ke teeno angles ka jod hamesha kitna hota hai, aur bahar bana **exterior angle** andar ke angles se kaise juda hai.
