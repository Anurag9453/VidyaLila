# Chapter: Mensuration (Part 7)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [mensuration-part6.md](mensuration-part6.md) se aage chalti hai.** (Chapter ki shuruaat [mensuration.md](mensuration.md) se hoti hai.)
> **Topics covered in this file:**
> 7. Circle ka Area aur Perimeter

---

# Topic 7: Circle ka Area aur Perimeter

Pichle topic mein Golu ki phati football aur mummy ki katori se humne sphere aur hemisphere dekhe: upar kitna chamda (4πr²) aur andar kitni hawa ((4/3)πr³). Usse pehle cylinder (Aarav ka tin) aur cone (Golu ki caps) mein bhi circle baar baar aaya, base ki tarah. Par ab tak humne circle ko sirf "kisi solid ka hissa" maan kar use kiya.

Is topic mein hum **akele circle** ko dhyan se dekhenge, ek flat shape ki tarah. Sirf poora circle nahi, uske tukde bhi: **aadha circle (semicircle), chauthai (quadrant), chhalla (ring), aur pankhe jaisa tukda (sector).** Aur phir aise figures jinmein circle aur rectangle mile hue hon.

---

## Gaon ke kuen ki kahani

Tara ke gaon mein ek purana **gol kuan** hai. Uska muh (opening) **7 m radius** ka hai. Barsaat mein kuen ke chaaron taraf keechad ho jata tha, isliye panchayat ne tay kiya ki kuen ke chaaron taraf **3.5 m chauda pakka chabootra** banega, ek gol chhalle jaisa.

Mistri chacha ne Tara se do sawaal poochhe:

1. "Chabootre par tiles lagani hain. **Kitne vargmetre** tiles lagengi?"
2. "Chabootre ke bahari kinaare par lohe ki railing lagegi. Railing **kitni lambi** hogi?"

Tara ne socha: pehla sawaal **andar ki jagah** ka hai (area), doosra **kinaare ki lambai** ka (perimeter). Par chabootra to ek **chhalla** hai, poora circle nahi. Uska area kaise nikalein?

Is topic ke end tak Tara dono jawab nikaal legi. (Spoiler: tiles 192.5 m² aur railing 66 m.)

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Circumference** | Circle ke kinaare ki poori lambai (circle ka perimeter) | 2πr |
| **Semicircle** | Diameter se kaata gaya aadha circle | Protractor ka shape |
| **Quadrant** | Circle ka chauthai hissa (90° wala tukda) | Do perpendicular radius ke beech ka hissa |
| **Ring (annulus)** | Do concentric circles ke beech ki jagah, ek chhalla | Kuen ke chaaron taraf ka chabootra |
| **Sector** | Do radius aur unke beech ke arc se ghira hissa | Sprinkler se bheega lawn ka tukda |
| **Revolution** | Pahiye ka ek poora chakkar | Cycle ke pahiye ka ek ghoomna |
| **Shaded region** | Figure ka wo hissa jiska area poocha gaya ho | Square mein se circle kaatne par bacha hissa |

---

## Part A: Circle ki do baatein (chhota sa recall)

Circle ke shabd (centre, radius, diameter) [Circles chapter](../circles/circles.md) mein, aur ye do formulas Topic 4 (cylinder) mein bhi aa chuke hain:

| Kya | Formula |
|---|---|
| **Circumference** (kinaare ki lambai) | **2πr = πd** |
| **Area** (andar ki jagah) | **πr²** |

Is chapter mein bhi **π = 22/7** lenge, jab tak kuch aur na kaha jaye.

**Example 1:** r = 7 cm
- Circumference = 2 × 22/7 × 7 = **44 cm**
- Area = 22/7 × 7 × 7 = **154 cm²**

**Example 2:** Circumference 88 cm hai. Area kya hoga?
- 2πr = 88 → 2 × 22/7 × r = 88 → r = **14 cm**
- Area = 22/7 × 14 × 14 = **616 cm²**

Jaanch: 2 × 22/7 × 14 = 88 ✅

### πr² kahan se aaya? (kaagaz wala tajurba)

Ek kaagaz ka circle lo. Use beech se **16 patli patli wedges** (tikone tukdon) mein kaat lo, jaise ek sandesh ki mithai ke tukde. Ab in tukdon ko ulta-seedha, ek upar ek neeche, line mein jod do:

```
   /\/\/\/\/\/\/\/\
  /\/\/\/\/\/\/\/\/       <- upar aadhe tukde, neeche aadhe
  |<----- πr ----->|
      unchai = r
```

- Upar ki lambai = aadhi circumference = ½ × 2πr = **πr**
- Unchai = har wedge ki lambai = **r**
- Jitne zyada patle tukde, utna ye **rectangle** jaisa banta jata hai.

Rectangle ka area = lambai × chaudai = πr × r = **πr²**

(Ye ek samajhne wala tareeka hai. Bilkul pakka proof aage ki classes mein aata hai.)

---

## Part B: Semicircle aur Quadrant

### Semicircle (aadha circle)

- **Area** = ½ × πr²
- **Perimeter** = gol hissa + seedha diameter = **πr + 2r**

Yahan sabse badi galti hoti hai: log sirf πr likh dete hain aur **diameter wala seedha kinaara bhool jaate hain.** Agar aap semicircle ke chaaron taraf dhaaga lapeto, to dhaaga gol hisse ke saath **seedhe hisse par bhi** chalega.

**Example 3:** r = 7 cm wala semicircle (protractor jaisa)
- Area = ½ × 154 = **77 cm²**
- Perimeter = (22/7 × 7) + 2 × 7 = 22 + 14 = **36 cm**

### Quadrant (chauthai circle)

- **Area** = ¼ × πr²
- **Perimeter** = ¼ × 2πr + 2r (gol hissa + do radius)

**Example 4:** r = 14 cm wala quadrant
- Area = ¼ × 616 = **154 cm²**
- Perimeter = ¼ × 88 + 2 × 14 = 22 + 28 = **50 cm**

---

## Part C: Ring (chhalla)

Ab Tara ke chabootre par aate hain. Ring do circles ke beech ki jagah hai:

```
         _______
      .'  _____  '.
     /  .'     '.  \
    |  |  kuan   |  |    <- andar wala circle: r
    |  |   (r)   |  |
     \  '._____.'  /     <- bahar wala circle: R
      '._________.'
       chabootra = ring
```

**Ring ka area = bade circle ka area − chhote circle ka area**

> **Area = πR² − πr² = π(R² − r²)**

Aur R² − r² ko [Factorisation Topic 4](../factorisation/factorisation-part4.md) wale "difference of two squares" se tod sakte hain:

> **Area = π(R + r)(R − r)**

Ye doosra roop calculation ko bahut aasan bana deta hai.

### Example 5: Tara ka chabootra

- Kuen ka radius r = 7 m
- Chabootra 3.5 m chauda, to R = 7 + 3.5 = 10.5 m

Area = 22/7 × (10.5 + 7)(10.5 − 7) = 22/7 × 17.5 × 3.5 = 22/7 × 61.25 = **192.5 m²**

Railing bahari kinaare par = 2πR = 2 × 22/7 × 10.5 = **66 m**

Agar tile ₹40 prati m² ho, to kharcha = 192.5 × 40 = **₹7700**

Jaanch (doosre tareeke se): πR² = 22/7 × 110.25 = 346.5, πr² = 154, farak = 346.5 − 154 = 192.5 ✅

### Example 6: Park ke chaaron taraf raasta

Ek gol park ka radius 21 m hai. Uske **bahar** chaaron taraf 3.5 m chauda raasta hai. Raaste ka area?

- r = 21, R = 21 + 3.5 = 24.5
- Area = 22/7 × (24.5 + 21)(24.5 − 21) = 22/7 × 45.5 × 3.5 = **500.5 m²**

### Example 7: Circumference se ring

Ek gol running track ki andar wali circumference 88 m aur bahar wali 132 m hai. Track ka area?

- 2πr = 88 → r = 14 m
- 2πR = 132 → R = 21 m
- Area = 22/7 × (21 + 14)(21 − 14) = 22/7 × 35 × 7 = **770 m²**

Dhyan do: track ki chaudai = R − r = **7 m**. Agar galti se (R − r)² le lo, to π × 49 = 154 aata, jo bilkul galat hai.

---

## Part D: Pahiya kitni doori tay karta hai

Pahiye ka ek poora chakkar (revolution) lagane par wo zameen par **apni circumference jitni** doori tay karta hai. Socho pahiye ke kinaare par geela rang laga ho, ek chakkar mein zameen par jo seedhi lakeer banegi, uski lambai 2πr hogi.

> **Ek chakkar = circumference = 2πr**
> **Kul doori = chakkar × 2πr**
> **Chakkar = kul doori ÷ 2πr**

### Example 8: Kitne chakkar?

Ek cycle ke pahiye ka diameter 70 cm hai. 1.1 km jaane mein kitne chakkar lagenge?

- Circumference = πd = 22/7 × 70 = 220 cm
- 1.1 km = 1,10,000 cm
- Chakkar = 1,10,000 ÷ 220 = **500**

### Example 9: Kitni doori?

Ek gaadi ke pahiye ka radius 21 cm hai. 1000 chakkar mein kitni doori?

- Circumference = 2 × 22/7 × 21 = 132 cm
- Doori = 1000 × 132 = 1,32,000 cm = **1.32 km**

Units ka dhyan: cm aur km ko pehle ek jaise karo, warna answer 1000 guna galat aa sakta hai.

---

## Part E: Sector aur Arc ki lambai

[Circles Topic 2](../circles/circles-part2.md) mein Pinky ke giant wheel ke saath humne arc ka degree measure dekha tha, aur Part F mein "arc ki lambai" ki ek jhalak bhi li thi. Ab ise poora karte hain.

Agar centre par angle **θ** ho, to wo poore circle (360°) ka **θ/360** hissa hai. Isliye:

> **Arc ki lambai = (θ/360) × 2πr**
> **Sector ka area = (θ/360) × πr²**
> **Sector ka perimeter = arc ki lambai + 2r**

| θ | Circle ka kitna hissa | Naam |
|---|---|---|
| 360° | poora | circle |
| 180° | ½ | semicircle |
| 90° | ¼ | quadrant |
| 60° | ⅙ | |
| 30° | 1/12 | |

### Example 10: 90° wala sector, r = 14 cm

- Arc = ¼ × 88 = **22 cm**
- Area = ¼ × 616 = **154 cm²**
- Perimeter = 22 + 28 = **50 cm** (Example 4 wala quadrant hi hai!)

### Example 11: Sprinkler

Lawn mein ek sprinkler 21 m door tak paani phenkta hai aur ek baar mein **60°** ghoomta hai. Kitna lawn bheegega?

- Area = (60/360) × 22/7 × 21 × 21 = ⅙ × 1386 = **231 m²**
- Bheege hisse ka gol kinaara = ⅙ × 132 = **22 m**

### Example 12: Car ka wiper

Ek car ka wiper centre se 21 cm tak sheesha saaf karta hai aur **120°** ghoomta hai. Kitna sheesha saaf hota hai? (Seedha karne ke liye maan lo wiper centre se hi saaf karna shuru karta hai.)

- Area = (120/360) × 1386 = ⅓ × 1386 = **462 cm²**

### Example 13: Arc se angle

r = 21 cm ke circle mein ek arc ki lambai 11 cm hai. Centre par angle?

- Poori circumference = 132 cm
- θ/360 = 11/132 = 1/12
- θ = 360/12 = **30°**

---

## Part F: Mili-juli shapes (shaded region)

Asli zindagi mein shapes akele nahi aate. Rule simple hai:

> **Shaded area = bada area − kaata hua area** (ya alag alag hisse jod do)

### Example 14: Square mein se circle

14 cm side ke square mein sabse bada circle banaya (r = 7). Bacha hua (shaded) area?

- Square = 14 × 14 = 196 cm²
- Circle = 154 cm²
- Shaded = 196 − 154 = **42 cm²**

### Example 15: Running track jaisa maidan

Ek maidan ka beech wala hissa 50 m × 28 m ka rectangle hai, aur dono chhoti sides par **semicircles** lage hain (diameter 28 m, r = 14 m).

```
       ___________________
     /|                   |\
    ( |   50 m × 28 m     | )
     \|___________________|/
   semicircle         semicircle
```

- Area = rectangle + do semicircles = 50 × 28 + 22/7 × 14 × 14 = 1400 + 616 = **2016 m²**
- Perimeter (sirf bahari kinaara) = 2 × 50 + 2πr = 100 + 88 = **188 m**

Dhyan do: perimeter mein rectangle ki **28 m wali sides nahi aati**, kyunki wo andar hain. Do semicircles milkar ek poora circle ka kinaara (2πr) banate hain.

### Example 16: Square ke kono par quadrants

28 cm side ke square ke chaaron kono par 7 cm radius ke quadrants kaate gaye. Bacha hua area?

- Chaar quadrants = ek poora circle = 22/7 × 7 × 7 = 154 cm²
- Square = 28 × 28 = 784 cm²
- Bacha = 784 − 154 = **630 cm²**

---

## Aam galtiyan (bachke rehna)

**Galti 1: Diameter ko radius samajh lena**
"Diameter 14 cm" diya ho to r = 7. Area 22/7 × 14 × 14 = 616 likh diya, to 4 guna galat. Pehle hamesha r nikaalo.

**Galti 2: Semicircle ke perimeter mein diameter bhoolna**
r = 7 wale semicircle ka perimeter 22 nahi, **22 + 14 = 36 cm** hai. Quadrant mein bhi do radius jodne hain.

**Galti 3: Ring mein (R − r)² le lena**
Ring ka area π(R² − r²) = π(R + r)(R − r) hai, **π(R − r)² nahi**. Example 7 mein (R − r)² se 154 aata, sahi answer 770 hai.

**Galti 4: θ/360 ki jagah θ/180 ya θ/100**
Poora circle 360° hai, isliye hissa hamesha **θ/360**.

**Galti 5: Arc ki lambai aur sector ka area mix karna**
Arc ki lambai mein **2πr** (lambai, cm), sector ke area mein **πr²** (area, cm²). Units dekh kar pakdo.

**Galti 6: Mili-juli shape ke perimeter mein andar ki lines jodna**
Example 15 mein rectangle ki 28 m wali sides perimeter mein nahi aati. Perimeter sirf **bahari kinaara** hai.

**Galti 7: Units mix karna**
Pahiye ke sawaal mein cm aur km, ya area mein m² aur cm². Pehle sab ek unit mein lao.

---

## Quick Recap

- **Circumference = 2πr = πd**, **Area = πr²** (π = 22/7).
- πr² ka idea: circle ko patli wedges mein kaat kar jodo to πr × r ka rectangle banta hai.
- **Semicircle:** area ½πr², perimeter **πr + 2r**.
- **Quadrant:** area ¼πr², perimeter ½πr + 2r.
- **Ring:** area **π(R² − r²) = π(R + r)(R − r)**.
- **Pahiya:** ek chakkar = 2πr; chakkar = doori ÷ 2πr.
- **Sector:** arc = (θ/360) × 2πr, area = (θ/360) × πr², perimeter = arc + 2r.
- **Shaded region:** bada area − kaata hua area. Perimeter mein sirf bahari kinaara.

---

## Practice Questions

1. Find the circumference and the area of a circle of radius 21 cm.

2. The circumference of a circle is 44 cm. Find its area.

3. Find the area and the perimeter of a semicircle of diameter 28 cm.

4. A circular garden of radius 35 m has a path 7 m wide running around it on the outside. Find the area of the path.

5. The diameter of a wheel is 56 cm. How many revolutions will it make to cover 352 m?

6. Find the length of the arc and the area of the sector of a circle of radius 21 cm, if the angle at the centre is 60°.

7. The largest possible circle is cut out from a square sheet of side 21 cm. Find the area of the remaining sheet.

8. State true or false:
   (a) The perimeter of a semicircle of radius r is πr.
   (b) The area of a ring with outer radius R and inner radius r is π(R − r)².
   (c) If the radius of a circle is doubled, its area becomes 4 times.
   (d) A sector with a central angle of 90° is a quadrant.

9. The inner boundary of a running track has two straight parts of 80 m each, joined by two semicircles of diameter 42 m. Find the length of the inner boundary.

### Answers

1. C = 2 × 22/7 × 21 = **132 cm**
   A = 22/7 × 21 × 21 = **1386 cm²**

2. 2πr = 44 → r = 7 cm
   Area = 22/7 × 7 × 7 = **154 cm²**

3. r = 14 cm
   Area = ½ × 22/7 × 14 × 14 = ½ × 616 = **308 cm²**
   Perimeter = πr + 2r = 44 + 28 = **72 cm**

4. r = 35, R = 35 + 7 = 42
   Area = 22/7 × (42 + 35)(42 − 35) = 22/7 × 77 × 7 = **1694 m²**

5. Circumference = 22/7 × 56 = 176 cm
   352 m = 35,200 cm
   Chakkar = 35,200 ÷ 176 = **200**

6. 60° = ⅙ hissa
   Arc = ⅙ × 132 = **22 cm**
   Area = ⅙ × 1386 = **231 cm²**

7. Circle ka r = 21/2 = 10.5 cm
   Circle = 22/7 × 10.5 × 10.5 = 346.5 cm²
   Square = 21 × 21 = 441 cm²
   Bacha = 441 − 346.5 = **94.5 cm²**

8. (a) **False** ❌. Perimeter = πr + 2r (diameter bhi jodna hai).
   (b) **False** ❌. Area = π(R² − r²) = π(R + r)(R − r).
   (c) **True** ✅. π(2r)² = 4πr².
   (d) **True** ✅. 90/360 = ¼.

9. Do semicircles milkar ek poora circle ka kinaara: 2 × 22/7 × 21 = 132 m
   Seedhe hisse: 2 × 80 = 160 m
   Kul = 160 + 132 = **292 m**

---

Agar circle ke itne tukde ek saath ulajh rahe hain, to bas ek baat yaad rakho: **har tukda poore circle ka ek hissa hai.** Semicircle ½, quadrant ¼, sector θ/360. Area ke liye πr² ka utna hissa lo, kinaare ke liye 2πr ka utna hissa, aur seedhe kinaare alag se jodna mat bhoolo. Aap kar loge!

**Aage kya?** Ab tak humne flat circle aur rectangle dekhe, aur cube se sphere tak ke solids. Agle topic mein aisi cheezein dekhenge jinka shape **poori lambai mein ek jaisa** rehta hai, jaise ek naali ya prism. Unka volume ek hi chhoti si trick se nikal jata hai.
