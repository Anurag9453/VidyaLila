# Chapter: Distance Formula

> **Class:** 9 | **Subject:** Mathematics
> **Pehle ki chapters se judi hui:** [Coordinate Geometry](../coordinate-geometry/coordinate-geometry.md) aur [Part 2](../coordinate-geometry/coordinate-geometry-part2.md) (points plot karna, axes, quadrants), [Pythagoras Theorem](../pythagoras-theorem/pythagoras-theorem.md), aur [Number Systems Part 4](../number-systems/number-systems-part4.md) (surds).
> **Topics covered in this file:**
> 1. Do Points ke beech ki Doori

---

# Topic 1: Do Points ke beech ki Doori

Coordinate Geometry mein humne seekha tha ki grid par har jagah ka ek **pata** hota hai, jaise (3, 4), aur us pate se point plot karna, axes aur quadrants pehchaanna. Ab ek naya sawaal: agar do points ke pate pata hain, to **unke beech ki seedhi doori** kitni hai? Iska jawab hume Pythagoras theorem dega. Sach kaho to distance formula koi naya jaadu nahi, bas **Pythagoras ko grid par rakh dena** hai.

---

## Treasure hunt wala sawaal

Yash aur Ishika ek treasure-hunt video game khel rahe hain. Screen par ek grid map hai. Unka character ek point par khada hai, aur treasure chest doosre point par. Character sirf grid ki lines par chal sakta hai.

Yash ne ginti ki: "Pehle 3 kadam seedha, phir 4 kadam upar. Total **7 steps**. Chest tak 7 steps lagenge."

Par game ke hint box mein likha tha: *"Chest is 5 units away as the crow flies."*

Ishika ne bhauhein uchkayi. "7 aur 5? Ye 5 kahan se aaya? Kya game galat hai?"

Yash ne socha. "Crow yaani kauwa seedha udta hai, grid ki lines pakad kar nahi. To 5 shayad wo **seedhi udaan** ki doori hai. Par game ne ye number nikala kaise?"

Ishika ne screen par ek chhota triangle dekha: 3 kadam ek taraf, 4 kadam doosri taraf, aur chest tak seedhi line teesri taraf. "Arre, 3 aur 4... aur seedhi line 5? Ye to wahi 3-4-5 hai jo Pythagoras mein dekha tha!"

Bilkul. Game ne chupke se **Pythagoras theorem** lagaya tha. Is topic mein hum wahi seekhenge, aur ek aisa formula banayenge jo kisi bhi do points ke liye chalega.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Distance (doori)** | Do points ke beech ki seedhi line ki lambai | Chest aur character ke beech 5 units |
| **Unit** | Grid ka ek khaana, doori naapne ki ikai | 1 unit = grid ka ek step |
| **Horizontal doori** | Same y wale do points ke beech ki doori (left-right) | (−3, 2) aur (4, 2) |
| **Vertical doori** | Same x wale do points ke beech ki doori (upar-neeche) | (5, −4) aur (5, 3) |
| **Origin** | Wo point jahan dono axes milte hain, yaani (0, 0) | Grid ka centre |
| **Absolute value (mod)** | Number ka bina sign wala hissa, yaani a ka absolute value (hamesha positive ya zero hone wali value). Doori kabhi negative nahi hoti | −7 ka mod 7 hai |

---

## Part A: Ek hi line par do points

Sabse aasaan case pehle. Jab do points **ek hi horizontal line** par hon (yaani dono ka y same), to doori bas x-coordinates ka farak hai. Number line wali baat: do numbers ke beech ki doori = bade mein se chhota ghatao, ya bina sign wala farak lo.

> **Same y ho to:** doori = |x₂ − x₁|
> **Same x ho to:** doori = |y₂ − y₁|

### Example 1: (3, 5) aur (9, 5)

Dono ka y = 5, to ye horizontal line hai.
Doori = |9 − 3| = **6 units**

### Example 2: Negative coordinate wala, (−3, 2) aur (4, 2)

Dono ka y = 2.
Doori = |4 − (−3)| = |4 + 3| = **7 units**

Dhyan do: y-axis (x = 0) paar karna padta hai. Origin se (−3, 2) ka x 3 units left hai aur (4, 2) ka x 4 units right, to kul 3 + 4 = 7. 

**Jaanch:** Number line par −3 se 4 tak ginke dekho: −3 se 0 tak 3 kadam, 0 se 4 tak 4 kadam, kul 7 ✅

### Example 3: Vertical line, (5, −4) aur (5, 3)

Dono ka x = 5, to ye vertical line hai.
Doori = |3 − (−4)| = |3 + 4| = **7 units**

**Jaanch:** −4 se 0 tak 4 kadam, 0 se 3 tak 3 kadam, kul 7 ✅

### Example 4: Dono negative, (−2, −6) aur (−2, −1)

Dono ka x = −2.
Doori = |−1 − (−6)| = |−1 + 6| = **5 units**

**Jaanch:** −6 se −1 tak: −6, −5, −4, −3, −2, −1, yaani 5 kadam ✅

---

## Part B: Tirchhe points aur Pythagoras

Ab Yash aur Ishika ka sawaal. Maan lo character (1, 2) par hai aur chest (4, 6) par. Dono ka na x same hai, na y. To seedhi line tirchhi hogi.

Trick: ek **right triangle** banao. Character se seedha x-direction mein chalo, phir chest tak y-direction mein upar jao. Ye dono sidhi raahein ek corner banati hain, aur tirchhi line us triangle ki **hypotenuse** hai.

```
 y
 6 |                 C (4, 6)  <- chest
   |               / |
   |             /   |
   |    d = ?  /     |  y-wala hissa
   |         /       |  = 6 - 2 = 4
 2 |       P ------- Q (4, 2)
   |    (1, 2)  x-wala hissa
   |            = 4 - 1 = 3
   +-----------------------------> x
```

- **P (1, 2)**: character
- **C (4, 6)**: chest
- **Q (4, 2)**: ye "corner" point hai. Iska x chest wala (4) hai aur y character wala (2).

P se Q ek horizontal line hai (same y = 2), to Part A se PQ = |4 − 1| = **3**.
Q se C ek vertical line hai (same x = 4), to QC = |6 − 2| = **4**.

Corner Q par horizontal aur vertical line milti hain, to wahan **90° ka angle** hai. Right triangle PQC ban gaya. Ab Pythagoras (hypotenuse² = baaki dono sides ke square ka jod):

PC² = PQ² + QC² = 3² + 4² = 9 + 16 = 25
PC = √25 = **5**

Yehi tha game ka "5 units"! Walking-wala rasta 3 + 4 = 7 steps tha, par seedhi udaan sirf 5.

### Ab kisi bhi do points ke liye

Pehle point ko (x₁, y₁) aur doosre ko (x₂, y₂) kehte hain. Chhote 1 aur 2 bas "pehla" aur "doosra" batane ke label hain.

```
 y
y2 |                 B (x2, y2)
   |               / |
   |             /   |
   |    d      /     |  |y2 - y1|
   |         /       |
y1 | A ------------- Q (x2, y1)
   | (x1, y1)  |x2 - x1|
   +-----------------------------> x
```

- Horizontal side: |x₂ − x₁|
- Vertical side: |y₂ − y₁|
- Pythagoras: d² = (x₂ − x₁)² + (y₂ − y₁)²

Dono taraf square root lene par:

> **Distance formula:** d = √[(x₂ − x₁)² + (y₂ − y₁)²]

Yahan absolute value (| |) ki bar nahi lagayi, kyunki square karne se sign vaise bhi hat jata hai. Isi ka ek faayda aage dekhte hain.

### Formula ko 3 kadam mein chalao

1. **x ka farak** nikalo: x₂ − x₁
2. **y ka farak** nikalo: y₂ − y₁
3. Dono ko **square** karo, **jodo**, aur phir **square root** lo.

---

## Part C: Order se farak nahi padta

Kya pehle character ko (x₁, y₁) maanein ya chest ko? Check karte hain, wahi (1, 2) aur (4, 6) lekar.

**Pehla tareeka:** (x₁, y₁) = (1, 2), (x₂, y₂) = (4, 6)
d = √[(4 − 1)² + (6 − 2)²] = √[3² + 4²] = √25 = 5

**Ulta tareeka:** (x₁, y₁) = (4, 6), (x₂, y₂) = (1, 2)
d = √[(1 − 4)² + (2 − 6)²] = √[(−3)² + (−4)²] = √[9 + 16] = √25 = 5

Differences ulte sign ke aaye (−3 aur −4), par square karte hi (−3)² = 9 aur (−4)² = 16, wahi positive number. To jawab same: **5**. 

Matlab "Yash se Ishika tak" aur "Ishika se Yash tak" ki doori ek hi hoti hai, aur formula mein koi point pehle rakho, farak nahi padta. Bas saaf rakhne ke liye **dono brackets mein ek hi point pehle rakho**: x wale bracket mein jo point pehle, y wale mein bhi wahi (ye baat "Aam galtiyan" mein bhi hai).

---

## Part D: Origin se doori

Origin (0, 0) bhi ek point hi hai. Isse kisi point (x, y) tak ki doori ke liye formula mein (x₁, y₁) = (0, 0) rakh do:

d = √[(x − 0)² + (y − 0)²] = √(x² + y²)

> **Origin se (x, y) ki doori = √(x² + y²)**

### Example 5: (6, 8) ki origin se doori

d = √(6² + 8²) = √(36 + 64) = √100 = **10**

### Example 6: (−5, 12) ki origin se doori

d = √[(−5)² + 12²] = √(25 + 144) = √169 = **13**

Dhyan do: (−5)² = 25, kyunki (−5) × (−5) = +25. Ye point doosre quadrant mein hai, par doori phir bhi positive aayi.

**Jaanch:** 13² = 169 aur 25 + 144 = 169 ✅

---

## Part E: Aur solved examples

### Example 7: (1, 2) aur (4, 6)

Ye wahi Yash-Ishika wala sawaal hai: d = √(3² + 4²) = **5**.

### Example 8: Dono points negative hisse mein, (−2, −3) aur (4, 5)

- x ka farak: 4 − (−2) = 4 + 2 = 6
- y ka farak: 5 − (−3) = 5 + 3 = 8

d = √(6² + 8²) = √(36 + 64) = √100 = **10**

**Jaanch:** 10² = 100 = 36 + 64 ✅

### Example 9: Jawab surd mein, (2, 3) aur (7, 8)

- x ka farak: 7 − 2 = 5
- y ka farak: 8 − 3 = 5

d = √(5² + 5²) = √(25 + 25) = √50

Ye perfect square nahi hai, to jawab **surd** hai. Surds wale chapter mein jaisa seekha tha, √50 ko simplify karte hain: 50 = 25 × 2, to

√50 = √25 × √2 = **5√2**

Taki andaza ho, √2 ≈ 1.414 hai, to 5√2 ≈ 7.07 units.

**Jaanch:** (5√2)² = 25 × 2 = 50 ✅. Aur sense check: 3-4-5 triangle mein sides 3 aur 4 the aur hypotenuse 5. Yahan dono sides 5 hain, to hypotenuse 5 se bada hona chahiye, aur 7.07 theek lagta hai (par 5 + 5 = 10 se chhota).

### Example 10: Dono points ke coordinates negative, (−4, −3) aur (−1, −2)

- x ka farak: −1 − (−4) = −1 + 4 = 3
- y ka farak: −2 − (−3) = −2 + 3 = 1

d = √(3² + 1²) = √(9 + 1) = √10

10 = 2 × 5 mein koi perfect square factor nahi hai (2 aur 5 dono prime), to √10 aur simplify nahi hoga. Jawab: **√10 ≈ 3.16 units**.

**Jaanch:** (√10)² = 10 = 9 + 1 ✅

### Example 11: Map par doori (scale 1 unit = 100 m)

Ek gaon ke map par grid banayi gayi hai, jahan 1 unit = 100 metre. School (1, 1) par hai aur mandir (13, 6) par. School se mandir tak seedhi doori kitni hai?

- x ka farak: 13 − 1 = 12
- y ka farak: 6 − 1 = 5

d = √(12² + 5²) = √(144 + 25) = √169 = **13 units**

Scale ke hisaab se: 13 × 100 = **1,300 metre** (1.3 km).

**Jaanch:** 13² = 169 = 144 + 25 ✅

Dhyan do: pehle units mein doori nikalo, aur **sabse end mein** scale se guna karo.

---

## Aam galtiyan (bachke rehna)

**Galti 1: x ko y se ghatana**

(1, 2) aur (4, 6) mein "4 − 2" ya "6 − 1" kar dena galat hai. x ka farak x se aur y ka farak y se hi banta hai: (4 − 1) aur (6 − 2).

**Galti 2: Square karna bhool jana**

Galat: d = √[(4 − 1) + (6 − 2)] = √(3 + 4) = √7
Sahi: d = √[(4 − 1)² + (6 − 2)²] = √(9 + 16) = **5**

**Galti 3: Square root lena bhool jana**

Galat: "d = 9 + 16 = 25 units". Ye to d² hai, doori nahi. Sahi: d = √25 = **5**. Hamesha end mein ek baar poochho: "Maine √ liya?"

**Galti 4: Negative sign ke saath galti**

(−2, −3) aur (4, 5) mein x ka farak 4 − (−2) hai.
Galat: 4 − (−2) = 2 
Sahi: 4 − (−2) = 4 + 2 = **6**

Minus ke saath minus ho to wo plus ban jata hai. Isi tarah 5 − (−3) = **8**, 2 nahi.

**Galti 5: Dono brackets mein alag-alag order rakhna**

Ganda tareeka: (4 − 1)² + (2 − 6)². Pehle bracket mein doosre point se pehla ghataya, doosre bracket mein pehle se doosra. Distance formula mein square ki wajah se jawab phir bhi 5 hi aata hai, kyunki (2 − 6)² = (−4)² = 16 = (6 − 2)². Par aisi ulti-seedhi likhawat mein x aur y ke numbers mix hone ki galti (Galti 1) jaldi hoti hai, aur hisaab check karna mushkil ho jata hai. Seedha niyam: **dono brackets mein ek hi point pehle rakho.**

Sahi: (4 − 1)² + (6 − 2)², yaani dono brackets mein "doosra point − pehla point".

Bracket ke andar kabhi x aur y ko mat milao, jaise (4 − 2): wahan 4 x hai aur 2 y hai.

---

## Quick Recap

- Do points ke beech ki seedhi doori = right triangle ki hypotenuse, aur use Pythagoras se nikalte hain.
- **Same y:** doori = |x₂ − x₁|. **Same x:** doori = |y₂ − y₁|. Doori kabhi negative nahi hoti.
- **Distance formula:** d = √[(x₂ − x₁)² + (y₂ − y₁)²]
- Order se farak nahi padta, kyunki square sign hata deta hai.
- **Origin se doori:** √(x² + y²).
- Jawab perfect square na ho to surd mein rakho aur simplify karo, jaise √50 = 5√2.
- Map par scale ho to pehle units mein doori nikalo, phir scale se guna karo.
- Galtiyan: x ko y se ghatana, square ya square root bhoolna, negative ka sign galat karna, dono brackets mein alag order rakhna.

---

## Practice Questions

1. Find the distance between the points (2, 3) and (10, 9).

2. Find the distance between (−1, −1) and (4, 11).

3. Find the distance of the point (−7, −24) from the origin.

4. Find the distance between (−3, 1) and (3, −1). Give the answer in simplest surd form.

5. On a map, 1 unit = 50 m. Two shops are at A(−2, 1) and B(4, 9). How far apart are they in metres?

6. A student finds the distance between (2, −3) and (5, 1) as √[(5 − 2)² + (1 − 3)²] = √13. Find the mistake and give the correct distance.

7. Find the distance between (a) (−4, −7) and (−4, 5), and (b) (6, −2) and (−9, −2), without using the full formula.

8. State True or False:
   (a) The distance between (3, 4) and (4, 3) is the same as the distance between (4, 3) and (3, 4).
   (b) The distance of (−3, −4) from the origin is −5.
   (c) Walking along grid lines from one point to another always gives the same number as the straight-line distance.
   (d) The distance between (2, 5) and (2, 9) is 4.

### Answers

1. x ka farak = 10 − 2 = 8, y ka farak = 9 − 3 = 6.
   d = √(8² + 6²) = √(64 + 36) = √100 = **10**
   Jaanch: 10² = 100 = 64 + 36 ✅

2. x ka farak = 4 − (−1) = 5, y ka farak = 11 − (−1) = 12.
   d = √(25 + 144) = √169 = **13**
   Jaanch: 13² = 169 ✅

3. d = √[(−7)² + (−24)²] = √(49 + 576) = √625 = **25**
   Jaanch: 25² = 625 ✅

4. x ka farak = 3 − (−3) = 6, y ka farak = −1 − 1 = −2.
   d = √[6² + (−2)²] = √(36 + 4) = √40 = √(4 × 10) = **2√10**
   Jaanch: (2√10)² = 4 × 10 = 40 ✅

5. x ka farak = 4 − (−2) = 6, y ka farak = 9 − 1 = 8.
   d = √(36 + 64) = √100 = 10 units. Scale: 10 × 50 = **500 m**.
   Jaanch: 36 + 64 = 100 ✅

6. Galti: y ka farak 1 − 3 likha gaya, jabki y-coordinates −3 aur 1 hain. Sahi farak 1 − (−3) = 1 + 3 = 4 hai. (−3 ko +3 ki tarah le liya gaya.)
   Sahi: d = √[(5 − 2)² + (1 − (−3))²] = √(9 + 16) = √25 = **5**
   Jaanch: 3-4-5 triangle ✅

7. (a) Dono ka x = −4, y-coordinates −7 aur 5 hain, to doori = 5 − (−7) = 5 + 7 = **12**.
   (b) Dono ka y = −2, to doori = 6 − (−9) = 6 + 9 = **15**.
   Jaanch: (a) −7 se 0 tak 7, 0 se 5 tak 5, kul 12 ✅ (b) 6 se 0 tak 6, 0 se −9 tak 9, kul 15 ✅

8. (a) **True** ✅. Order se farak nahi padta.
   (b) **False** ❌. Doori kabhi negative nahi hoti. √[(−3)² + (−4)²] = √25 = **5**.
   (c) **False** ❌. Grid par chalne ke steps (jaise 3 + 4 = 7) seedhi doori (5) se zyada ho sakte hain. Dono barabar tabhi hote hain jab points ek hi horizontal ya vertical line par hon.
   (d) **True** ✅. Dono ka x = 2, to doori = |9 − 5| = 4.

---

Yash aur Ishika ne chest khol liya, aur Ishika bola, "Ab pata chala, 7 aur 5 dono sahi the. Bas ek chalne ka rasta tha, doosra udne ka." Distance formula ka sar yahi hai: koi bhi do points ho, ek chhota sa right triangle banao aur Pythagoras laga do.

**Aage kya?** Ab hamare paas ek tool hai jo kisi bhi do points ki doori nikaal deta hai. Agle topic mein town planner Meghna ke naye plaza ke chaar lamp-posts ke coordinates milenge, aur sawaal hoga: sirf **doorian** nikaal kar kya hum bata sakte hain ki points kaunsi shape banate hain, triangle ho ya square?
