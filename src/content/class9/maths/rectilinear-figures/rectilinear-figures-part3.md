# Chapter: Rectilinear Figures (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [rectilinear-figures-part2.md](rectilinear-figures-part2.md) se aage chalti hai** (wahan polygon ke andar ke angles ka sum aur regular polygon ka har interior angle aaya tha). Shuruaat ke liye [rectilinear-figures.md](rectilinear-figures.md) bhi dekh sakte ho (polygon ke shabd, convex aur concave, regular polygon).
> Purani baatein: triangle ka exterior angle aur uske teen exterior angles ka 360° wala sum [triangles-part2.md](../triangles/triangles-part2.md) mein hai, aur linear pair [lines-and-angles-part2.md](../lines-and-angles/lines-and-angles-part2.md) mein.
> **Topics covered in this file:**
> 3. Polygon ke Bahar ke Angles (Exterior Angles)

---

# Topic 3: Polygon ke Bahar ke Angles (Exterior Angles)

Pichhle topic mein humne polygon ke **andar** ke angles dekhe: n sides ka polygon ho to unka sum (n − 2) × 180° hota hai, aur regular polygon mein har interior angle (n − 2) × 180° ÷ n. Gulshan ki hexagon table ka har kona isi se 720° ÷ 6 = 120° nikla tha. Wo formula kaam karta hai, par n badhta hai to sum bhi badalta rehta hai: triangle ka 180°, quadrilateral ka 360°, pentagon ka 540°, aur aage badhta hi jata hai.

Ab hum polygon ko **bahar se** dekhenge. Ek hairaan karne wali baat milegi: bahar ke angles ka sum **kabhi nahi badalta**, chahe polygon mein 3 sides ho ya 30. Aur isi ek baat se "kitni sides hain?" jaise sawaal bas ek line mein hal ho jayenge.

---

## Tushar aur Aisha ka robot

Tushar aur Aisha ek chhota sa toy robot program kar rahe hain. Robot ko ek shape ke kinare-kinare chalna hai. Robot ke paas sirf do hukum hain: "seedha chalo" aur "itne degree mudo".

Unhone ek regular pentagon (paanch barabar sides wala) ka rasta socha. Robot ek side par seedha chalta hai, corner par ruk kar thoda mudta hai, phir agli side par chalta hai. Aisha ne pucha, "Corner par kitne degree mudna hai?" Tushar ne pehle 108° daala, kyunki pentagon ka interior angle 108° hota hai. Robot ne mudkar dekha to wo aage jaane ki jagah **peeche ki taraf** ghoom gaya.

Aisha ne zameen par chalk se rasta kheencha aur khud us par chal kar dekha. Corner par aap seedhe nahi, thoda sa hi mudte ho. Jo angle robot ko **mudna** padta hai, wo andar wala angle nahi, uska **bacha hua hissa** hai, jo seedhi line (180°) tak pahunchata hai. Tushar ne 72° daala (108° + 72° = 180°) aur robot sahi mud gaya.

Phir robot ne paanchon corner par 72° mudte hue poora rasta tay kiya, aur wapas shuruaat par aa kar **bilkul usi disha mein** khada ho gaya jisme wo shuru mein tha. Tab Aisha chillayi: "Ruko! Robot ne kul kitna ghooma? 72 × 5 = **360°**. Wo ek poora chakkar ghooma hai!"

Tushar ne socha, "Ye to hona hi tha. Agar robot wapas usi disha mein khada hai, to uska kul mudna ek poora chakkar hi hoga." Phir unhone triangle ka rasta try kiya, phir hexagon ka. Har baar mudne ka total **360°** aaya. Is topic mein hum yahi dekhenge ki aisa kyun hai.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Exterior angle** | Ek corner par side ko aage badhane se, badhi hui side aur agli side ke beech bana bahar ka angle | Regular pentagon ka exterior angle 72° |
| **Interior angle** | Corner par polygon ke andar ka angle | Regular pentagon ka 108° |
| **Ek vertex par ek exterior angle** | Har corner par sirf ek exterior angle ginte hain (ek hi disha mein ghoomte hue) | Pentagon mein kul 5 exterior angles |
| **Exterior angles ka sum** | Har corner ka ek exterior angle jodo | Har convex polygon mein 360° |
| **Poora chakkar (full turn)** | Ghoom kar wapas usi disha mein aana | 360° |

---

## Part A: Exterior angle kya hota hai

Polygon ke kisi bhi corner par **ek side ko aage badhao** (usi seedhi line mein, jaise rasta aage jaata hai). Badhi hui side aur polygon ki agli side ke beech jo angle banta hai, wahi **exterior angle** hai.

```
                          agli side
                         /
       interior angle   /
       (andar)         /   exterior angle
                      /    (bahar)
   ------------------A- - - - - - - ->  badhi hui side
   pichhli side

   Exterior angle = badhi hui side aur agli side ke beech ka angle
```

Ek corner par interior angle aur exterior angle **ek seedhi line par** baithte hain, yaani ye ek **linear pair** hain (lines-and-angles-part2.md mein dekha tha). Linear pair ke angles ka sum 180° hota hai:

> **Exterior angle + interior angle = 180°**
> **Exterior angle = 180° − interior angle**

### Example 1: Ek corner ka exterior angle

Ek polygon ke corner par interior angle 110° hai. Exterior angle?

180° − 110° = **70°**

**Jaanch:** 110° + 70° = 180° ✅

### Example 2: Ulta, exterior se interior

Ek corner par exterior angle 65° hai. Interior angle?

180° − 65° = **115°**

**Jaanch:** 115° + 65° = 180° ✅

Triangle mein hum pehle hi dekh chuke hain ki uske teen exterior angles ka sum 360° hota hai ([triangles-part2.md](../triangles/triangles-part2.md)). Ab dekhte hain ki ye baat **sirf triangle ki nahi**, har convex polygon ki hai.

---

## Part B: Sabse zaroori baat, exterior angles ka sum 360° hota hai

> **Kisi bhi convex polygon ke exterior angles ka sum (har corner par ek) hamesha 360° hota hai.**

Ye sum sides ki ginti n par depend nahi karta. Triangle ho ya 50 sides ka polygon, sum 360° hi hai.

### Tareeka 1: Robot ki chaal se

Robot polygon ke kinare-kinare chalta hai. Har corner par wo exactly exterior angle jitna mudta hai. Jab wo poora rasta tay karke wapas shuruaat par usi disha mein khada hota hai, to usne ek **poora chakkar** ghooma hai, yaani 360°. Isliye saare mudne (saare exterior angles) ka sum 360° hai. Polygon kitna bhi bada ya chhota ho, robot ko ek hi chakkar lagana padta hai.

Ye samajhna hi asli baat hai. Ab algebra se bhi pakka karte hain, taki shak na rahe.

### Tareeka 2: Interior angles ke sum se

Maan lo polygon mein n sides (aur n corners) hain. Har corner ka exterior angle = 180° − (us corner ka interior angle). Saare n corners ke exterior angles jodo:

Exterior angles ka sum = n × 180° − (interior angles ka sum)

Pichhle topic se interior angles ka sum = (n − 2) × 180°. To:

Exterior angles ka sum = 180n − (n − 2) × 180
= 180n − 180n + 360
= **360°**

n khatam ho gaya, bas 360° bacha. Isi liye ye sum n par depend nahi karta.

### Jaanch 1: Ek irregular pentagon

Pentagon (n = 5) ke interior angles: 95°, 115°, 105°, 130°, 95°.

- Interior sum: 95 + 115 + 105 + 130 + 95 = 540°, aur (5 − 2) × 180 = 540° ✅
- Exterior angles: 180 − 95 = 85°, 180 − 115 = 65°, 180 − 105 = 75°, 180 − 130 = 50°, 180 − 95 = 85°
- Exterior sum: 85 + 65 + 75 + 50 + 85 = **360°** ✅

### Jaanch 2: Ek irregular hexagon

Hexagon (n = 6) ke interior angles: 150°, 100°, 125°, 115°, 140°, 90°.

- Interior sum: 150 + 100 + 125 + 115 + 140 + 90 = 720°, aur (6 − 2) × 180 = 720° ✅
- Exterior angles: 30°, 80°, 55°, 65°, 40°, 90°
- Exterior sum: 30 + 80 + 55 + 65 + 40 + 90 = **360°** ✅

Pentagon aur hexagon, dono mein 360° aaya, bilkul waisa jaisa robot ke ek chakkar se socha tha.

Note: Ye 360° wala result **convex** polygon ke liye hai (jisme har interior angle 180° se chhota hota hai). Concave polygon Topic 1 aur Topic 2 mein aaya tha (Topic 2 ke dart mein ek kona 210° ka reflex tha). Aise reflex kone par 180° − 210° negative aa jata hai, isliye is topic mein exterior angles ka hisaab hum sirf convex polygon par lagayenge.

---

## Part C: Regular polygon ka har exterior angle

Regular polygon mein saari sides aur saare angles barabar hote hain, to saare n exterior angles bhi barabar hote hain. Unka sum 360° hai, to:

> **Regular polygon ka har exterior angle = 360° ÷ n**

Robot wale pentagon mein: 360° ÷ 5 = **72°** (Tushar ne yahi daala tha, aur 5 mudne × 72° = 360°.)

### Table: n = 3 se 10 aur 12

| Sides (n) | Polygon | Har exterior angle = 360° ÷ n | Har interior angle = 180° − exterior |
|---|---|---|---|
| 3 | Triangle | 120° | 60° |
| 4 | Square | 90° | 90° |
| 5 | Pentagon | 72° | 108° |
| 6 | Hexagon | 60° | 120° |
| 7 | Heptagon | ≈ 51.43° (360 ÷ 7, approximate) | ≈ 128.57° (approximate) |
| 8 | Octagon | 45° | 135° |
| 9 | Nonagon | 40° | 140° |
| 10 | Decagon | 36° | 144° |
| 12 | Dodecagon | 30° | 150° |

Dekho, n badhta hai to exterior angle **chhota** hota jata hai (robot ko har corner par kam mudna padta hai), par n × (har exterior angle) hamesha 360° hi rehta hai.

**Jaanch:** 9 × 40 = 360 ✅, 10 × 36 = 360 ✅, 12 × 30 = 360 ✅, 8 × 45 = 360 ✅. Aur interior angle: 144° pichhle topic ke (10 − 2) × 180 ÷ 10 = 144° se match karta hai ✅.

(Heptagon mein 360 ÷ 7 poora number nahi aata, 51.428571... aata hai. Isliye wahan "approximately" likha hai.)

---

## Part D: Sides ki ginti nikalna

Ab ulta sochte hain. Agar har exterior angle pata ho (regular polygon), to:

> **n = 360° ÷ (har exterior angle)**

### Example 3: Exterior angle 24°

n = 360 ÷ 24 = **15 sides**.

**Jaanch:** 15 × 24 = 360 ✅

### Example 4: Exterior angle 40°

n = 360 ÷ 40 = **9 sides** (nonagon).

**Jaanch:** 9 × 40 = 360 ✅

### Example 5: Exterior angle 20°

n = 360 ÷ 20 = **18 sides**.

**Jaanch:** 18 × 20 = 360 ✅

### Example 6: Interior angle 156° diya hai

Regular polygon ka har interior angle 156° hai. Kitni sides?

- Exterior angle = 180° − 156° = 24°
- n = 360 ÷ 24 = **15**

**Jaanch (Topic 2 ke tareeke se):** Interior angle = (n − 2) × 180 ÷ n = 13 × 180 ÷ 15 = 2340 ÷ 15 = 156° ✅

### Example 7: Interior angle 171° diya hai

- Exterior angle = 180 − 171 = 9°
- n = 360 ÷ 9 = **40**

**Jaanch:** (40 − 2) × 180 ÷ 40 = 38 × 180 ÷ 40 = 6840 ÷ 40 = 171° ✅

### Ye tareeka kitna tez hai?

Topic 2 ke tareeke se Example 6 karte to equation banate: 

(n − 2) × 180 ÷ n = 156
(n − 2) × 180 = 156n
180n − 360 = 156n
24n = 360
n = 15

Sahi jawab mila, par 4 line lag gayi. Exterior angle wale tareeke mein bas do line: 180 − 156 = 24, phir 360 ÷ 24 = 15. Dhyan do ki upar wali equation mein bhi "24n = 360" aaya, yaani wahan bhi aakhir mein wahi exterior angle wali baat chhupi thi.

---

## Part E: Mile-jule sawaal

### Example 8: Exterior angles x, 2x, 3x, 4x, 5x

Ek pentagon ke paanchon exterior angles x, 2x, 3x, 4x aur 5x hain. Har angle ki value?

Exterior angles ka sum = 360°, to:

x + 2x + 3x + 4x + 5x = 360
15x = 360
x = 24

Angles: 24°, 48°, 72°, 96°, 120°.

**Jaanch:** 24 + 48 + 72 + 96 + 120 = 360 ✅

Interior angles: 180 − 24 = 156°, 180 − 48 = 132°, 180 − 72 = 108°, 180 − 96 = 84°, 180 − 120 = 60°. Sum = 156 + 132 + 108 + 84 + 60 = 540°, aur (5 − 2) × 180 = 540° ✅. Saare interior angles 180° se chhote hain, to polygon convex hi hai.

### Example 9: Kuch exterior angles diye hain, aakhri dhoondho

Ek quadrilateral ke teen exterior angles 80°, 95° aur 70° hain. Chautha?

Teen ka sum = 80 + 95 + 70 = 245°
Chautha = 360 − 245 = **115°**

**Jaanch:** 80 + 95 + 70 + 115 = 360 ✅

Interior angles: 100°, 85°, 110°, 65°. Sum = 360°, aur quadrilateral ka interior sum (4 − 2) × 180 = 360° ✅

### Example 10: Ek pentagon ka aakhri angle

Ek pentagon ke chaar exterior angles 70°, 85°, 60° aur 90° hain. Paanchva exterior angle? Uska interior angle?

Chaar ka sum = 70 + 85 + 60 + 90 = 305°
Paanchva exterior angle = 360 − 305 = **55°**
Uska interior angle = 180 − 55 = **125°**

**Jaanch:** 305 + 55 = 360 ✅, aur 125 + 55 = 180 ✅

### Example 11: Exterior angle = interior angle

Ek regular polygon ka exterior angle uske interior angle ke barabar hai. Kitni sides?

Exterior + interior = 180° aur dono barabar hain, to har ek 90° hai.
n = 360 ÷ 90 = **4**. Ye square hai.

**Jaanch:** Square ka interior 90° aur exterior 90° ✅

### Example 12: Interior angle = 3 × exterior angle

Ek regular polygon ka interior angle uske exterior angle ka 3 guna hai. Sides?

Maan lo exterior = x, to interior = 3x.
x + 3x = 180
4x = 180
x = 45°, interior = 135°
n = 360 ÷ 45 = **8**. Ye octagon hai.

**Jaanch:** (8 − 2) × 180 ÷ 8 = 1080 ÷ 8 = 135°, aur 135 = 3 × 45 ✅

---

## Robot wali kahani, hal

Tushar aur Aisha ke regular pentagon wale rasta par:
- Har corner par mudna = 360 ÷ 5 = **72°**
- 5 corner, to kul mudna = 5 × 72 = **360°**, yaani ek poora chakkar

Agar Tushar hexagon ka rasta banata, to har corner par 360 ÷ 6 = 60° mudna padta. Aur agar robot ko har corner par 30° mudna ho aur wapas usi disha mein aana ho, to 360 ÷ 30 = 12 corners, yaani 12 sides ka rasta.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Ek corner par dono taraf ke exterior angles jod dena**

Har corner par side ko dono taraf badhaya ja sakta hai, aur dono taraf ke exterior angles barabar (vertically opposite) hote hain. Agar dono ginoge, to sum 720° aa jayega. 360° tab hai jab **har corner par sirf ek exterior angle** lo. Pentagon mein 5 angles jodo, 10 nahi.

**Galti 2: Exterior ki jagah interior angle use kar dena**

Sawaal: "Exterior angle 36° hai, sides?" Sahi: n = 360 ÷ 36 = **10**. Agar interior diya ho (jaise 144°), to pehle exterior nikalo: 180 − 144 = 36°, tab 360 ÷ 36 = 10. Seedha 360 ÷ 144 = 2.5 karna galat hai (2.5 sides ka polygon nahi hota), kyunki 360° exterior angle se bhagna hai, interior se nahi.

**Galti 3: Sochna ki sum n ke saath badalta hai**

Interior angles ka sum n ke saath badalta hai, par exterior angles ka sum nahi: har convex polygon mein 360°. 20 sides ke polygon ke exterior angles ka sum bhi 360° hi hoga, 3600° nahi.

**Galti 4: Ye na dekhna ki n poora number aaya ya nahi**

Sides ki ginti hamesha **poora number** hoti hai. Agar exterior angle 25° diya ho, to 360 ÷ 25 = 14.4 aata hai. 14.4 sides ka polygon nahi hota, to aisa koi regular polygon hai hi nahi. Jawab likhne se pehle dekho ki n whole number hai.

---

## Quick Recap

- **Exterior angle + interior angle = 180°** (ek corner par linear pair), yaani exterior = 180° − interior.
- Kisi bhi **convex polygon** ke exterior angles ka sum (har corner par ek) = **360°**, n chahe kuch bhi ho.
- Robot ki chaal: ek poora chakkar lagana = 360° mudna.
- Algebra se: Σ(180° − interior) = 180n − (n − 2) × 180 = 360°.
- Regular n-gon ka **har exterior angle = 360° ÷ n**.
- **n = 360° ÷ (har exterior angle)**. Interior diya ho to pehle exterior = 180° − interior nikalo.
- n hamesha whole number aana chahiye.

---

## Practice Questions

1. Find each exterior angle and each interior angle of a regular polygon with 18 sides.

2. Each exterior angle of a regular polygon is 12°. Find the number of sides.

3. Each interior angle of a regular polygon is 170°. Find the number of sides. Check your answer with the (n − 2) × 180° ÷ n formula.

4. The exterior angles of a quadrilateral are 2x, 3x, 3x and 4x. Find each exterior angle and each interior angle. Verify that the interior angles add up to 360°.

5. Five exterior angles of a hexagon are 40°, 55°, 65°, 70° and 80°. Find the sixth exterior angle and the interior angle at that vertex.

6. Is there a regular polygon whose exterior angle is 25°? Give a reason.

7. Each interior angle of a regular polygon is 4 times its exterior angle. Find the number of sides.

8. A toy robot walks around a regular polygon path and makes a turn of 5° at each corner. How many corners does the path have? What is the total turning when it returns to the start facing the same way?

9. State True or False:
   (a) The exterior angles of a convex polygon with 20 sides add up to 360°.
   (b) A regular polygon can have each exterior angle equal to 100°.
   (c) As the number of sides of a regular polygon increases, each exterior angle decreases.
   (d) The sum of the exterior angles of a hexagon is twice that of a triangle.

### Answers

1. Exterior angle = 360 ÷ 18 = **20°**. Interior angle = 180 − 20 = **160°**.
   Jaanch: (18 − 2) × 180 ÷ 18 = 16 × 10 = 160° ✅

2. n = 360 ÷ 12 = **30 sides**.
   Jaanch: 30 × 12 = 360 ✅

3. Exterior = 180 − 170 = 10°, to n = 360 ÷ 10 = **36**.
   Jaanch: (36 − 2) × 180 ÷ 36 = 34 × 5 = 170° ✅

4. 2x + 3x + 3x + 4x = 360, to 12x = 360, x = 30.
   Exterior angles: **60°, 90°, 90°, 120°**.
   Interior angles: 180 − 60 = 120°, 180 − 90 = 90°, 180 − 90 = 90°, 180 − 120 = 60°.
   Jaanch: 120 + 90 + 90 + 60 = 360° ✅

5. Paanch ka sum = 40 + 55 + 65 + 70 + 80 = 310°. Chhatha exterior angle = 360 − 310 = **50°**. Interior angle = 180 − 50 = **130°**.
   Jaanch: 310 + 50 = 360 ✅, 130 + 50 = 180 ✅

6. 360 ÷ 25 = 14.4, jo whole number nahi hai. Sides ki ginti whole number hoti hai, to aisa regular polygon **nahi** hota.

7. Exterior = x, interior = 4x. x + 4x = 180, 5x = 180, x = 36°. n = 360 ÷ 36 = **10 sides** (decagon).
   Jaanch: interior = 144° = 4 × 36, aur (10 − 2) × 180 ÷ 10 = 144° ✅

8. Corners = 360 ÷ 5 = **72**. Total turning = 72 × 5 = **360°** (ek poora chakkar).

9. (a) **True** ✅. Convex polygon mein sum hamesha 360° hota hai.
   (b) **False** ❌. 360 ÷ 100 = 3.6, whole number nahi.
   (c) **True** ✅. 360 ÷ n chhota hota jata hai jaise n badhta hai (triangle 120°, square 90°, pentagon 72°).
   (d) **False** ❌. Dono ka sum 360° hota hai, to barabar hain, doguna nahi.

---

Exterior angle ka sabse bada fayda yahi hai ki wo polygon ko ek chakkar jaisa bana deta hai: robot ki tarah chalo, mudte jao, aur kul 360°. Jab bhi regular polygon ki sides ka sawaal aaye, pehle exterior angle ko yaad karna.

**Aage kya?** Regular polygon ke baare mein abhi bahut kuch dekhna baaki hai. Jaise, kya sirf regular polygon se hi poora floor bina gap ke dhak sakta hai? Topic 4 mein hum regular polygon ki aur khaasiyaten aur ye tiling ka sawaal dekhenge.
