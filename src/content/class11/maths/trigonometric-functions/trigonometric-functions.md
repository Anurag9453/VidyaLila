# Chapter: Trigonometric Functions

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla chapter [relations-and-functions-part5.md](../relations-and-functions/relations-and-functions-part5.md) tha** (Relations and Functions ka aakhri topic, jiske teaser ne vaada kiya tha ki hum sin, cos, tan ko 0°–90° ke chhote dabbe se bahar nikaal kar poori real number line par **radians** aur **periodic functions** ke roop mein phailayenge). Right-triangle wale sin, cos, tan ratios aur 0°–90° ke standard maan Class 9 mein padhe the: [trigonometry.md](../../../class9/maths/trigonometry/trigonometry.md).
> **Topics covered in this file:**
> 1. Angles, Radian Aur Degree Measure

---

# Topic 1: Angles, Radian Aur Degree Measure

Class 9–10 mein humne sirf **0° se 90°** ke beech ke angles dekhe the, kyunki right triangle ka koi bhi chhota kona 90° se bada nahi ho sakta. Par ghoomte hue pahiye, ghadi ki sooi, ya dharti ke sooraj ke charon taraf chakkar lagane mein angle 90°, 360° ya 1000° se bhi bada ho sakta hai — aur ulta (clockwise) ghoomne par negative bhi! Is pehle topic mein hum **directed angles** ko samjhenge aur angles naapne ki ek nayi, natural ikaai **Radian** seekhenge jo poore higher Maths aur Physics mein chalti hai.

---

## Hitesh ka bicycle wheel aur rassi

Sunday subah Hitesh apni cycle ko repair stand par ulta khada karke pichhla pahiya ghooma raha tha. Usne tyre ke valve par ek chalk ka nishaan lagaya.
- Pahiye ko **anticlockwise** (ghadi ke ulta) ek poora chakkar ghoomaya: valve 360° ghoom kar wapas aaya. Do chakkar ghoomaya: **720°**!
- Phir pahiye ko **clockwise** (ghadi ki disha mein) aadha chakkar ghoomaya: Papa ne kaha, "Is ulte ghoomav ko **−180°** kehte hain!"

Phir Hitesh ne ek rassi li, use pahiye ke **radius (r)** ke bilkul barabar kaata, aur us rassi ko tyre ke gol rim (circumference) par chipka diya. Rim par jitni doori us rassi ne gheri, usne centre par ek khaas angle banaya. Papa muskuraaye: "Beta, jab arc ki lambai theek radius ke barabar ho, to centre par banne wale us angle ko **1 Radian** kehte hain! Ye degrees (360) ki tarah insaan ka banaya hua random number nahi hai — ye circle ke apne size se nikla hua natural angle hai!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Directed angle** | Initial side se terminal side tak ghoomav, jisme disha (+ ya −) shamil ho | +120° (anticlockwise), −45° (clockwise) |
| **Degree (1°)** | Ek poore chakkar ka 1/360-vaan hissa; 1° = 60′ (minutes), 1′ = 60″ (seconds) | 40° 20′ |
| **Radian (1 rad)** | Unit circle (radius 1) mein 1 unit lambi arc dwara centre par bana angle | 1 rad ≈ 57° 16′ 22″ |
| **Arc length formula** | Radius r ke circle mein θ **radians** angle par arc ki lambai: l = rθ | r = 35 cm, θ = π/5 ⟹ l = 22 cm |
| **π radians = 180°** | Degree aur Radian ke beech ka sabse mukhya rishta | 90° = π/2, 60° = π/3, 45° = π/4 |

---

## Part A: Directed Angles Aur Degree-Minute-Second

Ek kiran (initial side) ko uske vertex par pakad kar ghoomao:
- **Anticlockwise** ghoomav → **Positive angle (+)**
- **Clockwise** ghoomav → **Negative angle (−)**
- Ek se zyada poore chakkar lagane par angle 360° se bada ho sakta hai (jaise 420° = ek poora chakkar 360° + 60°).

### Degree ke Chhote Tukde (Sexagesimal System)

Ghadi ki tarah degree ko 60-60 ke tukdon mein baanta jaata hai:
- **1 right angle = 90°**
- **1° = 60′** (60 minutes)
- **1′ = 60″** (60 seconds)

---

## Part B: Radian Measure Aur l = rθ

Radius **r** ke ek circle mein agar ek arc ki lambai **l** ho aur wo centre par **θ radians** ka angle banaye, to:

> **θ (in radians) = l / r**    yaani    **l = rθ**

*Kyun hai 2π radians = 360°?*
Ek poore chakkar mein arc ki lambai poori circumference hoti hai: **l = 2πr**.
Formula mein rakho: θ = l/r = 2πr / r = **2π radians**!
Par degree mein ek poora chakkar **360°** hota hai. Isliye:

> **2π radians = 360°**   ⟹   **π radians = 180°**

```
               .---.
            .-'  l  '-.
           /     |     \       Jab arc ki lambai l = r ho,
          :   O--|--r---:      tab centre ka angle θ = 1 radian!
           \     θ     /
            '-.     .-'        Poora chakkar: l = 2πr  ==>  θ = 2π rad = 360°
               '---'
```

> **Figure 1.1** – Radian ki paribhasha: radius r ke barabar arc (l = r) centre par theek 1 radian (lagbhag 57.3°) ka angle banati hai.

### Conversion Formulas (Sabse Zaroori!)

- **Degree → Radian:** **× (π / 180)**
- **Radian → Degree:** **× (180 / π)**   (numerical degree-minute-second mein aam taur par π ≈ 22/7 lete hain)

### Standard Angles Table (Zubani Yaad Rakho!)

| Degree | 0° | 30° | 45° | 60° | 90° | 120° | 135° | 150° | 180° | 270° | 360° |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Radian** | 0 | π/6 | π/4 | π/3 | π/2 | 2π/3 | 3π/4 | 5π/6 | π | 3π/2 | 2π |

*(Ek khas baat: Jab kisi angle ke aage ° ka nishaan na laga ho — jaise "sin 2" ya "angle = 6" — to wo hamesha **radians** mein hota hai!)*

---

## Part C: Worked Examples

### Example 1: Degree-Minute se Radian mein Badalna

**40° 20′** ko radian measure mein badlo.

**Hal:**
1. Pehle poore angle ko sirf degrees mein badlo (kyunki 1° = 60′, isliye 20′ = 20/60 = 1/3°):
   40° 20′ = 40 + 1/3 = **121/3 degrees**.
2. Ab π/180 se guna karo:
   (121/3) × (π/180) = **121π / 540 radians**.

**Jaanch:** 121/540 × 180 = 121/3 = 40 + 1/3 = 40° 20′ ✅.

### Example 2: Radian se Degree-Minute-Second mein Badalna

**6 radians** ko degree measure mein badlo (π = 22/7 lo).

**Hal:**
1. 6 radians = 6 × (180 / π) = 6 × 180 × 7 / 22 = 1080 × 7 / 22 = **3780 / 11 degrees**.
2. 3780 ko 11 se bhaag do: 3780 = 11 × **343** + 7 ⟹ **343°** aur bacha **7/11°**.
3. Bache hue 7/11° ko minutes mein badlo (× 60):
   (7/11) × 60 = 420 / 11 = **38′** aur bacha **2/11′** (kyunki 11 × 38 = 418, 420 − 418 = 2).
4. Bache hue 2/11′ ko seconds mein badlo (× 60):
   (2/11) × 60 = 120 / 11 ≈ **10.91″ ≈ 11″**.
Isliye **6 radians ≈ 343° 38′ 11″**.

**Jaanch:** 1 rad ≈ 57.27° (with 22/7), 6 × 57.27° = 343.64°; 38/60 = 0.633°, plus 11/3600 ≈ 0.636° ✅.

### Example 3: Arc Length Formula (l = rθ)

Radius **r = 35 cm** ke ek circle mein ek arc centre par **36°** ka angle banati hai. Arc ki lambai l nikalo (π = 22/7 lo).

**Hal:**
1. Pehle 36° ko **radians** mein badlo!
   θ = 36 × (π / 180) = **π / 5 radians**.
2. Ab l = rθ lagao:
   l = 35 × (π / 5) = 7π = 7 × (22/7) = **22 cm**.

**Jaanch:** Poori circumference = 2 × (22/7) × 35 = 220 cm; 36° poore 360° ka 1/10 hai; 220 ÷ 10 = 22 cm ✅!

### Example 4: Ghoomta Pahiya (Revolutions per Minute)

Ek pahiya **1 minute mein 360 revolutions** (chakkar) lagata hai. Wo **1 second** mein kitne **radians** ghoomega?

**Hal:**
1. 1 minute (60 seconds) mein = 360 revolutions.
2. 1 second mein revolutions = 360 ÷ 60 = **6 revolutions**.
3. Ek revolution = **2π radians**.
4. 6 revolutions = 6 × 2π = **12π radians**.

**Jaanch:** 6 rev/s × 60 s = 360 rev/min; 6 × 2π = 12π rad ✅.

### Example 5: Ghadi ki Minute Hand ki Doori

Ek ghadi ki minute hand **1.5 cm** lambi hai. **40 minutes** mein uski nok (tip) kitni doori (arc length) tay karegi? (π = 3.14 lo.)

**Hal:**
1. Minute hand 60 minutes mein 1 poora chakkar (2π radians) lagati hai.
2. 40 minutes mein angle θ = (40 / 60) × 2π = **(4π / 3) radians**.
3. Arc length l = rθ = 1.5 × (4π / 3) = (3/2) × (4π / 3) = **2π cm**.
   π = 3.14 rakhne par: l = 2 × 3.14 = **6.28 cm**.

**Jaanch:** 40 min = 2/3 of full circle; full circle = 2π(1.5) = 3π; (2/3) × 3π = 2π ≈ 6.28 cm ✅.

### Example 6: Ghadi ki Dono Sooiyon ke Beech ka Angle (3:30 par)

**3:30** baje ghadi ki hour hand aur minute hand ke beech ka chhota angle degrees aur radians dono mein nikalo.

**Hal:**
1. **Minute hand** 30 min par theek 6 ke nishaan par hai: 12 se angle = 30 × 6° = **180°**.
   *(Har minute mein minute hand 360° ÷ 60 = 6° chalti hai!)*
2. **Hour hand** 12 ghante mein 360° (yaani 1 ghante mein 30°, aur 1 minute mein 0.5°) chalti hai.
   3:30 = 3.5 ghante ⟹ 12 se angle = 3.5 × 30° = **105°**.
3. Dono sooiyon ke beech ka angle = |180° − 105°| = **75°**.
4. Radians mein: 75 × (π / 180) = **5π / 12 radians**.

**Jaanch:** 3:30 par hour hand 3 aur 4 ke theek beech (3.5) aur minute hand 6 par: 2.5 ghante ka gap × 30° = 75° ✅.

---

## Aam galtiyan

1. **l = rθ mein θ ko degrees mein rakh dena:** Student r = 35 cm, θ = 36° ke liye l = 35 × 36 = 1260 cm nikaal deta hai!
   - *Galat kyun:* Formula l = rθ **sirf aur sirf** tab chalta hai jab θ **radians** mein ho! Degrees ko hamesha pehle π/180 se guna karo.
2. **1° = 100′ maan lena:** Student 40° 20′ ko 40.20° likh kar hal kar deta hai.
   - *Galat kyun:* 1° = **60′** (100 nahi!). Isliye 20′ = 20/60 = 1/3° ≈ 0.333°.
3. **1 radian aur 1 degree ko lagbhag barabar samajhna:**
   - *Sahi soch:* 1 radian ≈ **57.3°** (lagbhag 60° ke paas!), isliye 1 radian, 1° se 57 guna se bhi bada hota hai!

---

## Quick Recap

- **Anticlockwise = +**, **Clockwise = −**; angles 360° se bade bhi ho sakte hain.
- **1° = 60′**, **1′ = 60″**; **π radians = 180°**.
- **Degree → Radian:** × π/180; **Radian → Degree:** × 180/π.
- **Arc length:** **l = rθ** (jahan θ **radians** mein hona zaroori hai!).

---

## Practice Questions

1. Convert the following degree measures into radian measures:
   (a) 25°    (b) −47° 30′    (c) 240°    (d) 520°

2. Convert the following radian measures into degree measures (use π = 22/7 where needed):
   (a) 11/16 rad    (b) −4 rad    (c) 5π/3 rad    (d) 7π/6 rad

3. Find the radius of the circle in which a central angle of 60° intercepts an arc of length 37.4 cm (use π = 22/7).

4. Find the degree measure of the angle subtended at the centre of a circle of radius 100 cm by an arc of length 22 cm (use π = 22/7).

5. In a circle of diameter 40 cm, the length of a chord is 20 cm. Find the length of the minor arc of the chord.

6. A pendulum of length 75 cm swings through an angle, and its tip describes an arc of length:
   (a) 10 cm    (b) 15 cm    (c) 21 cm.
   Find the angle in radians through which the pendulum swings in each case.

7. A bicycle wheel makes 180 revolutions in one minute. Through how many radians does it turn in 1 second?

8. Find the angle (in degrees and in radians) between the hour hand and the minute hand of a clock at:
   (a) 4:20    (b) 7:30

9. The angles of a triangle are in the ratio 2 : 3 : 4. Find all three angles in degrees and in radians.

10. A railway train is travelling on a circular curve of radius 1500 m at the rate of 66 km/h. Through what angle (in radians and degrees) has it turned in 10 seconds? (Use π = 22/7.)

11. Find the radian measure of the interior angle of a regular octagon (8-sided regular polygon).

12. True or False? Give a one-line reason:
    (a) 1 radian is smaller than 1 degree.
    (b) In l = rθ, if r is doubled and l is kept the same, θ becomes half.
    (c) sin(1) and sin(1°) have the same value.

### Answers

1. (a) 25 × π/180 = **5π/36 rad**.
   (b) −47° 30′ = −(47 + 1/2)° = −95/2° ⟹ −(95/2) × (π/180) = **−19π/72 rad**.
   (c) 240 × π/180 = **4π/3 rad**.
   (d) 520 × π/180 = **26π/9 rad**. Jaanch: 26 × 20 = 520 ✅.

2. (a) (11/16) × (180 × 7 / 22) = (180 × 7)/(16 × 2) = 315/8° = **39° 22′ 30″** (kyunki 3/8° = 22.5′ = 22′ 30″).
   (b) −4 × (180 × 7 / 22) = −2520/11° = **−229° 5′ 27″** (approx: 1/11° = 60/11′ = 5′ + 5/11′ ≈ 5′ 27″).
   (c) (5π/3) × (180/π) = **300°**.
   (d) (7π/6) × (180/π) = **210°**. Jaanch: 39 + 22.5/60 = 39.375 = 315/8 ✅.

3. θ = 60° = π/3 rad. r = l / θ = 37.4 ÷ (π/3) = (37.4 × 3 × 7) / 22 = 1.7 × 21 = **35.7 cm**.
   Jaanch: 35.7 × (22/7) / 3 = 11.9 × 22 / 7 = 1.7 × 22 = 37.4 cm ✅.

4. θ = l/r = 22/100 rad. Degrees = (22/100) × (180 × 7 / 22) = 1260/100 = 12.6° = **12° 36′** (0.6 × 60 = 36′).
   Jaanch: 12° 36′ = 12.6° ✅.

5. Diameter = 40 cm ⟹ radius r = 20 cm. Chord = 20 cm = r!
   Centre aur chord ke dono ends milkar **equilateral triangle** (20, 20, 20) banate hain, to θ = 60° = **π/3 rad**.
   Minor arc l = rθ = 20 × (π/3) = **20π/3 cm**. Jaanch: equilateral angle = 60° = π/3 ✅.

6. θ = l / 75:
   (a) 10/75 = **2/15 rad**; (b) 15/75 = **1/5 rad**; (c) 21/75 = **7/25 rad**.

7. 1 second mein revolutions = 180 ÷ 60 = 3. Angle = 3 × 2π = **6π radians**.

8. (a) **4:20:** Minute hand = 20 × 6° = 120°; Hour hand = (4 + 20/60) × 30° = (13/3) × 30° = 130°.
   Difference = |130° − 120°| = **10° = π/18 rad**.
   (b) **7:30:** Minute hand = 180°; Hour hand = 7.5 × 30° = 225°.
   Difference = |225° − 180°| = **45° = π/4 rad**. Jaanch: 7.5 − 6 = 1.5 hr × 30° = 45° ✅.

9. 2k + 3k + 4k = 180° ⟹ 9k = 180° ⟹ k = 20°.
   Angles: **40°, 60°, 80°**; radians mein: **2π/9, π/3, 4π/9**. Jaanch: 40 + 60 + 80 = 180° ✅.

10. Speed = 66 km/h = 66 × (5/18) = **55/3 m/s**.
    10 seconds mein arc length l = (55/3) × 10 = **550/3 m**.
    θ = l/r = (550/3) ÷ 1500 = **11/90 rad**.
    Degrees mein: (11/90) × (180 × 7 / 22) = (2 × 7)/2 = **7°**.
    Jaanch: 7° × (22/7) / 180 = 22/180 = 11/90 rad ✅.

11. Regular n-gon ka interior angle = (n − 2) × 180° / n = (6 × 180°) / 8 = **135°** = **3π/4 rad**. Jaanch: 3 × 45° = 135° ✅.

12. (a) ❌ False: 1 rad ≈ 57.3° > 1°.
    (b) ✅ True: θ = l/r, to r double hone par θ aadha ho jaata hai.
    (c) ❌ False: sin(1) matlab sin(1 rad ≈ 57.3°), jo sin(1°) se bahut bada hai!

---

Ab tum kisi bhi positive, negative ya bade angle ko degrees aur radians ke beech badalna aur arc length nikaalna seekh chuke ho.

**Agle topic mein:** sin, cos aur tan ko right triangle se aazaad karke **Unit Circle** par le jaayenge — milenge **ASTC Sign Rule, Allied Angles, Domain, Range aur Periodic Graphs** se!
