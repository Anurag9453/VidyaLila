# Chapter: Trigonometric Functions (Part 2)

> **Class:** 11 | **Subject:** Mathematics
> **Ye file [trigonometric-functions.md](trigonometric-functions.md) se aage chalti hai** (wahan Topic 1 mein directed angles, degrees, radians aur arc length l = rθ the). Right-triangle ratios aur 0°–90° standard maan: [trigonometry.md](../../../class9/maths/trigonometry/trigonometry.md).
> **Topics covered in this file:**
> 2. Trigonometric Functions of Real Numbers: Unit Circle, Signs (ASTC), Allied Angles, Domain, Range Aur Graphs

---

# Topic 2: Trigonometric Functions of Real Numbers: Unit Circle, Signs (ASTC), Allied Angles, Domain, Range Aur Graphs

Topic 1 mein humne dekha ki koi bhi real number **x** (chahe positive ho, negative ho ya 1000 ho) ek angle (x radians) ko dikha sakta hai. Par right triangle mein 150° ya −30° ka kona to ban nahi sakta! Phir sin 150° ya cos(−30°) kaise define honge? Is topic mein hum **Unit Circle** (radius = 1) ki madad se har real number x ke liye chhahon trigonometric functions define karenge, unke quadrants mein signs (**ASTC rule**), allied angles, aur unke **Domain, Range aur Periodic Graphs** seekhenge.

---

## Neha ka mela wala Giant Wheel

Gaon ke mele mein Neha apni Didi ke saath **Giant Wheel (Ferris wheel)** par baithi thi. Wheel ka radius 1 unit maan lo, aur centre ko zameen se ek fixed height par origin (0, 0).
- Jab Neha ki cabin right side par horizontal thi (angle 0°), uski height centre se **0** thi.
- Upar sabse choti par pahunchi (90° = π/2): height **+1**!
- Left side par aayi (180° = π): height phir se **0**!
- Neeche sabse tali par pahunchi (270° = 3π/2): height **−1** (centre se neeche)!
- Ek poora chakkar (360° = 2π) poora karke wapas wahi height **0**, aur agle chakkar mein bilkul wahi wave repeat!

Didi muskuraayi: "Neha, wheel par har angle x par tumhari **height (y-coordinate)** hi **sin x** hai, aur centre se tumhari **horizontal doori (x-coordinate)** hi **cos x** hai! Isliye sin aur cos 90° ke aage bhi chalte hain, negative bhi hote hain, aur har 2π ke baad repeat karte hain!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Unit circle** | Origin (0, 0) par centre aur radius 1 wala circle: x² + y² = 1 | Har point P = (cos θ, sin θ) |
| **ASTC rule** | Chaar quadrants mein positive trig functions yaad rakhne ki trick: **All, Sin, Tan, Cos** | Q II mein sirf sin aur cosec + |
| **Even / Odd function** | f(−x) = f(x) to even; f(−x) = −f(x) to odd | cos(−x) = cos x (even), sin(−x) = −sin x (odd) |
| **Allied angles** | −x, π/2 ± x, π ± x, 3π/2 ± x, 2π ± x jaise angles | sin(π − x) = sin x |
| **Periodic function** | Aisa function jo ek fixed gap T ke baad exact repeat kare: f(x + T) = f(x) | sin, cos ka period 2π; tan ka π |

---

## Part A: Unit Circle Definition Aur Signs (ASTC Rule)

Origin (0, 0) par centre aur **radius r = 1** ka circle banao. Point A(1, 0) se shuru karke **x radians** angle ghoom kar circle par kisi point **P(a, b)** par pahuncho. Tab:

> **cos x = a (x-coordinate)**    aur    **sin x = b (y-coordinate)**

Kyunki P unit circle par hai, Pythagoras se a² + b² = 1, yaani **cos² x + sin² x = 1** har real x ke liye sach hai!
Baaki chaar functions seedha inse define hote hain:
- **tan x = sin x / cos x** (jab cos x ≠ 0, yaani x ≠ (2n + 1)π/2)
- **cot x = cos x / sin x** (jab sin x ≠ 0, yaani x ≠ nπ)
- **sec x = 1 / cos x** (cos x ≠ 0)
- **cosec x = 1 / sin x** (sin x ≠ 0)

Aur teeno Pythagorean identities har real x ke liye (jahan defined hon) chalti hain:
1. **sin² x + cos² x = 1**
2. **1 + tan² x = sec² x**
3. **1 + cot² x = cosec² x**

### Chaar Quadrants Mein Signs — ASTC ("Add Sugar To Coffee")

```
                        y (π/2)
                        :
           Q II         :         Q I
        (−a, +b)        :       (+a, +b)
     S: sin, cosec +    :     A: ALL 6 +
                        :
   (π) -----------------+----------------- (0, 2π) x
                        :
           Q III        :         Q IV
        (−a, −b)        :       (+a, −b)
     T: tan, cot +      :     C: cos, sec +
                        :
                      (3π/2)
```

> **Figure 2.1** – Unit circle ke chaar quadrants aur ASTC rule: Q I mein sabhi +, Q II mein sin/cosec +, Q III mein tan/cot +, Q IV mein cos/sec +.

### Negative Angles (−x) — Symmetry se Kyun?

Agar +x anticlockwise upar point (a, b) par le jaata hai, to **−x** clockwise neeche uske mirror point **(a, −b)** par le jaata hai!
- x-coordinate wahi rehta hai: **cos(−x) = cos x** (aur **sec(−x) = sec x**) — **Even!**
- y-coordinate ka sign palat jaata hai: **sin(−x) = −sin x** (aur **tan(−x) = −tan x**, **cosec(−x) = −cosec x**, **cot(−x) = −cot x**) — **Odd!**

---

## Part B: Allied Angles Ki 2-Step Master Trick

Kisi bhi allied angle (jaise π/2 ± x, π ± x, 3π/2 ± x, 2π ± x) ka maan ratne ki zaroorat nahi — sirf **2 kadam** yaad rakho (x ko acute maan kar check karo):

1. **Kadam 1 (Naam badlega ya nahi?):**
   - **Horizontal line (π ± x, 2π ± x, nπ ± x):** Naam **NAHI badalta** (sin ka sin, cos ka cos, tan ka tan).
   - **Vertical line (π/2 ± x, 3π/2 ± x, odd π/2 ± x):** Naam **BADALTA hai**: sin ↔ cos, tan ↔ cot, sec ↔ cosec.
2. **Kadam 2 (+ ya − sign?):**
   - **Original (shuru wale)** function ka quadrant dekh kar **ASTC** se + ya − lagao!

Jaise **cos(π/2 + x):**
- Kadam 1: π/2 hai → cos badal kar **sin** banega.
- Kadam 2: π/2 + x **Quadrant II** mein hai, jahan original function **cos** negative hota hai → **−sin x**!

### Example 1: Ek Ratio se Baaki 5 Ratios Nikaalna

Agar **cos x = −3/5** aur **x Quadrant III** mein hai, to baaki paanchon trigonometric functions ke maan nikalo.

**Hal:**
1. sin² x = 1 − cos² x = 1 − (−3/5)² = 1 − 9/25 = 16/25 ⟹ sin x = ±4/5.
   Kyunki x **Quadrant III** mein hai (jahan sirf tan aur cot positive hain), **sin x = −4/5**.
2. **tan x** = sin x / cos x = (−4/5) ÷ (−3/5) = **4/3** (Q III mein positive!).
3. **cot x** = 1 / tan x = **3/4**.
4. **sec x** = 1 / cos x = **−5/3**.
5. **cosec x** = 1 / sin x = **−5/4**.

**Jaanch:** (−4/5)² + (−3/5)² = 16/25 + 9/25 = 1 ✅; 1 + (4/3)² = 25/9 = (−5/3)² ✅.

### Example 2: Bade aur Negative Angles ke Exact Maan

Inke exact maan nikalo:
(i) **sin(31π / 3)**
(ii) **cos(−1710°)**
(iii) **tan(19π / 3)**

**Hal:**
- **(i) sin(31π/3):** 31 ko 3 se bhaag do: 31π/3 = 10π + π/3 = 5(2π) + π/3.
  Kyunki sin ka period 2π hai, 5 poore chakkar (10π) hata do:
  sin(31π/3) = sin(π/3) = **√3 / 2**.
- **(ii) cos(−1710°):** Pehle even rule se cos(−1710°) = cos(1710°).
  360° ke poore chakkar hatao: 1710° = 4 × 360° + 270° = 1440° + 270° (ya 5 × 360° − 90°).
  cos(1710°) = cos(270°) = **0**.
- **(iii) tan(19π/3):** 19π/3 = 6π + π/3. (tan ka period π hai, 6π hatao!)
  tan(19π/3) = tan(π/3) = **√3**.

**Jaanch:** 10π + π/3 = 31π/3 ✅; 4 × 360 + 270 = 1710 ✅; 6π + π/3 = 19π/3 ✅.

### Example 3: Quadrant II mein cot x = −5/12

Agar **cot x = −5/12** aur **x Quadrant II** mein hai, to sin x, cos x aur sec x nikalo.

**Hal:**
1. cosec² x = 1 + cot² x = 1 + 25/144 = 169/144 ⟹ cosec x = ±13/12.
   Q II mein sin aur cosec positive hote hain, isliye **cosec x = +13/12** aur **sin x = 12/13**.
2. cos x = cot x × sin x = (−5/12) × (12/13) = **−5/13** (Q II mein negative!).
3. **sec x** = 1 / cos x = **−13/5**.

**Jaanch:** (12/13)² + (−5/13)² = (144 + 25)/169 = 1 ✅.

---

## Part C: Domain, Range Aur Periodic Graphs

Unit circle par P(cos x, sin x) ke dono coordinates hamesha −1 aur +1 ke beech rehte hain! Isliye:

| Function | Domain | Range | Period |
|---|---|---|---|
| **sin x** | R | [−1, 1] | 2π |
| **cos x** | R | [−1, 1] | 2π |
| **tan x** | R − {(2n + 1)π/2 : n ∈ Z} | R | π |
| **cot x** | R − {nπ : n ∈ Z} | R | π |
| **sec x** | R − {(2n + 1)π/2 : n ∈ Z} | (−∞, −1] ∪ [1, ∞) | 2π |
| **cosec x** | R − {nπ : n ∈ Z} | (−∞, −1] ∪ [1, ∞) | 2π |

*(Khas baat: sin x aur cos x kabhi 1 se bade ya −1 se chhote nahi ho sakte; sec x aur cosec x kabhi (−1, 1) ke beech nahi aa sakte!)*

```
   y = sin x (0 se 2π):
   +1 :      .--.
      :    .'    '.
    0 :--.'--------'.--------.-- x
      : 0   π/2    π '.3π/2.' 2π
   -1 :                '--'

   y = cos x (0 se 2π):
   +1 :--.                .--
      :   '.            .'
    0 :-----'.--------.'----- x
      : 0  π/2'.  π .'3π/2 2π
   -1 :         '--'
```

> **Figure 2.2** – sin x aur cos x ki waves (period 2π, range [−1, 1]): sin x origin (0, 0) se upar uthta hai, jabki cos x peak (0, 1) se shuru hota hai.

### Example 4: Bounded Range ka Istemal

Real function **f(x) = 3 sin x + 4** ka minimum aur maximum maan (Range) nikalo.

**Hal:**
- Hum jaante hain har real x ke liye: **−1 ≤ sin x ≤ 1**.
- 3 se guna karo: **−3 ≤ 3 sin x ≤ 3**.
- 4 jodo: **1 ≤ 3 sin x + 4 ≤ 7**.
Isliye **Range = [1, 7]** (minimum = 1, maximum = 7).

**Jaanch:** sin x = −1 par 3(−1) + 4 = 1 ✅; sin x = 1 par 3(1) + 4 = 7 ✅.

---

## Aam galtiyan

1. **Quadrant ka sign bhool kar hamesha + square root le lena:** Student cos x = −3/5 (Q III) se sin x = +4/5 likh deta hai.
   - *Galat kyun:* Q III mein sin negative hota hai! Hamesha ASTC se sign pakka karo.
2. **Allied angles mein naam kab badalta hai aur kab nahi, isme ulajh jaana:** Student sin(π − x) = cos x likh deta hai!
   - *Sahi soch:* π aur 2π (horizontal axis) par naam **kabhi nahi badalta** (sin(π − x) = +sin x); sirf π/2 aur 3π/2 (vertical axis) par sin ↔ cos badalta hai!
3. **cos(−x) = −cos x likh dena:**
   - *Galat kyun:* cos aur sec **even** functions hain — minus andar hi gaayab ho jaata hai: **cos(−x) = +cos x**. Sirf sin, tan, cosec, cot minus bahar nikaalte hain.

---

## Quick Recap

- Unit circle par point P = **(cos x, sin x)**; **cos² x + sin² x = 1** har real x ke liye.
- **ASTC:** Q I (All), Q II (Sin/Cosec), Q III (Tan/Cot), Q IV (Cos/Sec).
- **Even/Odd:** cos(−x) = cos x, sin(−x) = −sin x, tan(−x) = −tan x.
- **Allied angles:** π, 2π → no change; π/2, 3π/2 → change; sign hamesha original function ke quadrant se.
- **sin, cos:** Domain R, Range [−1, 1], Period 2π. **tan:** Range R, Period π.

---

## Practice Questions

1. Find the values of the other five trigonometric functions if **sin x = 3/5** and x lies in Quadrant II.

2. Find the values of the other five trigonometric functions if **tan x = −5/12** and x lies in Quadrant II.

3. Find the values of the other five trigonometric functions if **sec x = 13/5** and x lies in Quadrant IV.

4. Find the exact values of:
   (a) sin 765°    (b) cosec(−1410°)    (c) cot(−15π/4)    (d) sin(−11π/3)

5. Simplify using allied angles:
   (a) cos(π + x)    (b) sin(3π/2 − x)    (c) tan(2π − x)    (d) sec(π/2 + x)

6. Prove that: **[cos(π + x) cos(−x)] ÷ [sin(π − x) cos(π/2 + x)] = cot² x**.

7. Evaluate: **sin(5π/6) cos(2π/3) + cos(5π/6) sin(2π/3)**.

8. Find the maximum and minimum values (Range) of:
   (a) f(x) = 5 − 2 cos x
   (b) g(x) = 4 sin² x + 1

9. If sin x = −1/2 and tan x = 1/√3, in which quadrant does x lie? Find cos x.

10. State the exact Domain and Range of f(x) = sec x. Can sec x ever equal 1/2? Give a one-line reason.

11. Evaluate: **cos(3π/2 + x) cos(2π + x) [cot(3π/2 − x) + cot(2π + x)]**.

12. True or False? Give a one-line reason:
    (a) sin(2π + x) = sin x for all real x.
    (b) tan(π + x) = −tan x.
    (c) There exists a real angle x such that cos x = 4/3.
    (d) For all x ∈ (π/2, π), sin x > 0 and cos x < 0.

### Answers

1. Q II mein sin, cosec + aur baaki −:
   cos x = −√(1 − 9/25) = **−4/5**, tan x = **−3/4**, cot x = **−4/3**, sec x = **−5/4**, cosec x = **5/3**.
   Jaanch: (3/5)² + (−4/5)² = 1 ✅.

2. Q II mein sec negative: sec x = −√(1 + 25/144) = **−13/12** ⟹ cos x = **−12/13**.
   sin x = tan x × cos x = (−5/12)(−12/13) = **5/13**, cosec x = **13/5**, cot x = **−12/5**.
   Jaanch: (5/13)² + (−12/13)² = 1 ✅.

3. Q IV mein cos, sec + aur baaki −:
   cos x = **5/13**, sin x = −√(1 − 25/169) = **−12/13**, tan x = **−12/5**, cot x = **−5/12**, cosec x = **−13/12**.
   Jaanch: 1 + (−12/5)² = 169/25 = (13/5)² ✅.

4. (a) 765° = 2(360°) + 45° ⟹ sin 45° = **1/√2**.
   (b) cosec(−1410°) = −cosec(1410°). 1410° = 4(360°) − 30° ⟹ cosec(1410°) = −cosec 30° = −2 ⟹ −(−2) = **2**.
   (c) cot(−15π/4) = −cot(15π/4) = −cot(4π − π/4) = −(−cot(π/4)) = **1**.
   (d) sin(−11π/3) = −sin(11π/3) = −sin(4π − π/3) = −(−sin(π/3)) = **√3/2**.
   Jaanch: 4 × 360 − 30 = 1410, 4π − π/4 = 15π/4 ✅.

5. (a) **−cos x** (Q III); (b) **−cos x** (Q III, naam badla); (c) **−tan x** (Q IV); (d) **−cosec x** (Q II, naam badla).

6. Numerator = (−cos x)(cos x) = −cos² x.
   Denominator = (sin x)(−sin x) = −sin² x.
   Ratio = (−cos² x)/(−sin² x) = **cot² x**. Jaanch: x = π/4 par LHS = (−1/2)/(−1/2) = 1 = cot²(π/4) ✅.

7. sin(5π/6) = 1/2, cos(2π/3) = −1/2, cos(5π/6) = −√3/2, sin(2π/3) = √3/2.
   Value = (1/2)(−1/2) + (−√3/2)(√3/2) = −1/4 − 3/4 = **−1**. Jaanch: 5π/6 + 2π/3 = 3π/2, sin(3π/2) = −1 ✅!

8. (a) −1 ≤ cos x ≤ 1 ⟹ −2 ≤ −2 cos x ≤ 2 ⟹ **3 ≤ 5 − 2 cos x ≤ 7** → Range = **[3, 7]**.
   (b) 0 ≤ sin² x ≤ 1 ⟹ 0 ≤ 4 sin² x ≤ 4 ⟹ **1 ≤ 4 sin² x + 1 ≤ 5** → Range = **[1, 5]**.

9. sin negative aur tan positive sirf **Quadrant III** mein hota hai!
   cos x = sin x / tan x = (−1/2) ÷ (1/√3) = **−√3/2**. Jaanch: (−1/2)² + (−√3/2)² = 1 ✅.

10. Domain = **R − {(2n + 1)π/2 : n ∈ Z}**, Range = **(−∞, −1] ∪ [1, ∞)**.
    **Nahi**, sec x kabhi 1/2 nahi ho sakta kyunki |sec x| ≥ 1 (agar sec x = 1/2 hota to cos x = 2 hota, jo namumkin hai!).

11. cos(3π/2 + x) = sin x, cos(2π + x) = cos x, cot(3π/2 − x) = tan x, cot(2π + x) = cot x.
    Expression = sin x cos x (sin x / cos x + cos x / sin x) = sin² x + cos² x = **1**.
    Jaanch: x = π/4 par (1/√2)(1/√2)(1 + 1) = (1/2)(2) = 1 ✅.

12. (a) ✅ True: sin x ka period 2π hai.
    (b) ❌ False: π + x Quadrant III mein hai jahan tan positive hota hai, isliye tan(π + x) = **+tan x**.
    (c) ❌ False: |cos x| ≤ 1 hamesha, par 4/3 > 1.
    (d) ✅ True: (π/2, π) Quadrant II hai jahan sin > 0 aur cos < 0.

---

Ab tum Unit Circle, ASTC rule, allied angles aur sin/cos/tan ke graphs par poori pakad bana chuke ho.

**Agle topic mein:** do alag angles ko jodne ya ghatane par unke sin, cos, tan kaise milte hain — **Compound Angle Formulas: sin(x ± y), cos(x ± y), tan(x ± y)**!
