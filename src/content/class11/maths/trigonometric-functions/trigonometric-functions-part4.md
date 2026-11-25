# Chapter: Trigonometric Functions (Part 4)

> **Class:** 11 | **Subject:** Mathematics
> **Ye file [trigonometric-functions-part3.md](trigonometric-functions-part3.md) se aage chalti hai** (wahan Topic 3 mein Compound Angle formulas sin(x ± y), cos(x ± y), tan(x ± y) the). Chapter ki shuruaat: [trigonometric-functions.md](trigonometric-functions.md).
> **Topics covered in this file:**
> 4. Multiple Aur Sub-Multiple Angle Formulas, Product-to-Sum Aur Sum-to-Product (C–D) Identities

---

# Topic 4: Multiple Aur Sub-Multiple Angle Formulas, Product-to-Sum Aur Sum-to-Product (C–D) Identities

Topic 3 ke chaar compound formulas — sin(x ± y) aur cos(x ± y) — ek jadui factory ki tarah hain. Unme **y = x** rakh do to **Double Angle (2x)** formulas nikal aate hain; **y = 2x** rakh do to **Triple Angle (3x)**; 2x ko x se badal do to **Half Angle (x/2)**; aur unhe aapas mein jod-ghata do to **Product-to-Sum** aur **Sum-to-Product (C–D)** formulas mil jaate hain! Is topic mein hum in sabhi formulas ko derive karenge taaki kuch bhi ratna na pade.

---

## Usha ka paper fan aur bansuri ki beats

Garmi ki chhutti mein Usha ek paper ko barabar **double** aur **triple** pleats mein mod kar haath ka pankha bana rahi thi. Ek pleat ka angle x tha, to do pleats ka **2x** aur teen pleats ka **3x**. Paas baithe uske bhai ne do bansuriyan ek saath bajayin — ek thodi tez, ek thodi dheemi — to dono ki awaz milkar **tez-dheemi beats** (lahrein) banane lagi.

Teacher ma'am ne bataya: "Do waves ka jod **sin C + sin D** jab ek single beat wave **2 sin((C+D)/2) cos((C−D)/2)** banta hai, to wahi Maths ka **Sum-to-Product (C–D) formula** hai! Aur pankhe ke 2x, 3x pleats wahi **Multiple Angle** formulas hain!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Double-angle formulas** | 2x ke trig functions ko x ke roop mein likhna | sin 2x = 2 sin x cos x |
| **Triple-angle formulas** | 3x ke trig functions ko x ke roop mein likhna | sin 3x = 3 sin x − 4 sin³ x |
| **Sub-multiple / Half-angle** | x/2 ke trig functions ko x (ya cos x) ke roop mein likhna | 1 − cos x = 2 sin²(x/2) |
| **Product-to-Sum formulas** | Do trig functions ke guna (product) ko jod/antar mein badalna | 2 sin A cos B = sin(A+B) + sin(A−B) |
| **Sum-to-Product (C–D)** | Do trig functions ke jod/antar ko guna (product) mein badalna | sin C + sin D = 2 sin((C+D)/2) cos((C−D)/2) |

---

## Part A: Double-Angle (2x) Aur Half-Angle (x/2) Formulas

Topic 3 ke compound formulas mein **y = x** rakh kar seedha derive karo:

### 1. sin 2x ke 2 Roop
- sin(x + x) = sin x cos x + cos x sin x:
  > **sin 2x = 2 sin x cos x = 2 tan x / (1 + tan² x)**
  *(Doosra roop: 2 sin x cos x / (sin² x + cos² x) ko cos² x se bhaag dekar!)*

### 2. cos 2x ke 4 Super-Useful Roop (Sabse Zyada Kaam Aate Hain!)
- cos(x + x) = cos x cos x − sin x sin x:
  > **cos 2x = cos² x − sin² x**
  > **= 2 cos² x − 1**   *(sin² x = 1 − cos² x rakh kar)*
  > **= 1 − 2 sin² x**   *(cos² x = 1 − sin² x rakh kar)*
  > **= (1 − tan² x) / (1 + tan² x)**

Inhi se do **Golden Power-Reduction / Half-Angle Identities** nikalti hain (jo Calculus tak har chapter mein lagti hain!):
- **1 + cos 2x = 2 cos² x**   ⟹   **1 + cos x = 2 cos²(x/2)**
- **1 − cos 2x = 2 sin² x**   ⟹   **1 − cos x = 2 sin²(x/2)**

### 3. tan 2x
- tan(x + x) = (tan x + tan x) / (1 − tan x tan x):
  > **tan 2x = 2 tan x / (1 − tan² x)**

### Half-Angle Formulas (cos x se sin(x/2), cos(x/2), tan(x/2))
- **sin(x/2) = ±√[(1 − cos x) / 2]**
- **cos(x/2) = ±√[(1 + cos x) / 2]**
- **tan(x/2) = ±√[(1 − cos x) / (1 + cos x)]**

*(Sign + ya − hamesha **x/2 ke quadrant** ko dekh kar chunna hai, x ke quadrant ko nahi!)*

---

## Part B: Triple-Angle (3x) Formulas

y = 2x rakh kar derive karo:
1. **sin 3x** = sin(2x + x) = sin 2x cos x + cos 2x sin x = (2 sin x cos x)cos x + (1 − 2 sin² x)sin x
   = 2 sin x (1 − sin² x) + sin x − 2 sin³ x:
   > **sin 3x = 3 sin x − 4 sin³ x**
2. **cos 3x** = cos(2x + x) = cos 2x cos x − sin 2x sin x = (2 cos² x − 1)cos x − 2 sin² x cos x
   = 2 cos³ x − cos x − 2(1 − cos² x)cos x:
   > **cos 3x = 4 cos³ x − 3 cos x**
3. **tan 3x** = tan(2x + x) = (tan 2x + tan x)/(1 − tan 2x tan x):
   > **tan 3x = (3 tan x − tan³ x) / (1 − 3 tan² x)**

---

## Part C: Product-to-Sum Aur Sum-to-Product (C–D) Formulas

### 1. Product-to-Sum (Topic 3 ke formulas ko seedha jodo aur ghatao!)
- **2 sin A cos B = sin(A + B) + sin(A − B)**
- **2 cos A sin B = sin(A + B) − sin(A − B)**
- **2 cos A cos B = cos(A + B) + cos(A − B)**
- **2 sin A sin B = cos(A − B) − cos(A + B)**   *(ya −2 sin A sin B = cos(A + B) − cos(A − B)!)*

### 2. Sum-to-Product (C–D Formulas)
Upar wale formulas mein **A + B = C** aur **A − B = D** rakh do!
Hal karne par: **A = (C + D)/2** aur **B = (C − D)/2**. Seedha 4 formulas taiyaar:

1. **sin C + sin D = 2 sin((C + D)/2) cos((C − D)/2)**
2. **sin C − sin D = 2 cos((C + D)/2) sin((C − D)/2)**
3. **cos C + cos D = 2 cos((C + D)/2) cos((C − D)/2)**
4. **cos C − cos D = −2 sin((C + D)/2) sin((C − D)/2) = 2 sin((C + D)/2) sin((D − C)/2)**

*(Chauthe formula mein **minus sign** ya **(D − C)/2** par khaas dhyan dena!)*

---

## Part D: Worked Examples

### Example 1: Double-Angle aur Half-Angle ek saath (tan x = −4/3, Q II)

Agar **tan x = −4/3** aur **x Quadrant II** mein hai (π/2 < x < π), to nikalo:
(i) sin 2x, cos 2x, tan 2x
(ii) sin(x/2), cos(x/2), tan(x/2)

**Hal:**
1. Q II mein sin +, cos −: sec x = −√(1 + 16/9) = −5/3 ⟹ **cos x = −3/5**, **sin x = 4/5**.
2. **(i) Double angles:**
   - **sin 2x** = 2 sin x cos x = 2(4/5)(−3/5) = **−24/25**.
   - **cos 2x** = 2 cos² x − 1 = 2(9/25) − 1 = 18/25 − 1 = **−7/25**.
   - **tan 2x** = sin 2x / cos 2x = (−24/25) ÷ (−7/25) = **24/7**.
3. **(ii) Half angles — pehle x/2 ka quadrant dekho!**
   π/2 < x < π ko 2 se bhaag do: **π/4 < x/2 < π/2** → yaani **x/2 Quadrant I** mein hai!
   Q I mein **sin(x/2), cos(x/2), tan(x/2) teeno positive** honge!
   - **sin(x/2)** = +√[(1 − (−3/5)) / 2] = √[(8/5) / 2] = √(4/5) = **2/√5** = **2√5 / 5**.
   - **cos(x/2)** = +√[(1 + (−3/5)) / 2] = √[(2/5) / 2] = √(1/5) = **1/√5** = **√5 / 5**.
   - **tan(x/2)** = sin(x/2) / cos(x/2) = (2/√5) ÷ (1/√5) = **2**.

**Jaanch:** (−24/25)² + (−7/25)² = (576 + 49)/625 = 1 ✅; (2/√5)² + (1/√5)² = 4/5 + 1/5 = 1 ✅; 2 tan(x/2)/(1 − tan²(x/2)) = 4/(1 − 4) = −4/3 = tan x ✅!

### Example 2: cos 4x = 1 − 8 sin² x cos² x Prove Karo

**Hal:**
LHS = cos 4x = cos(2 · 2x) = 1 − 2 sin² 2x   *(cos 2θ = 1 − 2 sin² θ)*
= 1 − 2(2 sin x cos x)²   *(sin 2x = 2 sin x cos x)*
= **1 − 8 sin² x cos² x** = RHS.

**Jaanch:** x = π/4 par LHS = cos π = −1; RHS = 1 − 8(1/2)(1/2) = 1 − 2 = −1 ✅.

### Example 3: Triple-Angle Verification (sin 3x at x = 30°)

x = 30° par verify karo ki **sin 3x = 3 sin x − 4 sin³ x**.

**Hal:**
- LHS = sin(3 × 30°) = sin 90° = **1**.
- RHS = 3 sin 30° − 4 sin³ 30° = 3(1/2) − 4(1/8) = 3/2 − 1/2 = **1**.
LHS = RHS!

**Jaanch:** 3/2 − 1/2 = 2/2 = 1 ✅.

### Example 4: Sum-to-Product (C–D) Simplification

Prove karo: **(sin 5x + sin 3x) ÷ (cos 5x + cos 3x) = tan 4x**.

**Hal:**
- Numerator: sin 5x + sin 3x = 2 sin((5x + 3x)/2) cos((5x − 3x)/2) = **2 sin 4x cos x**.
- Denominator: cos 5x + cos 3x = 2 cos((5x + 3x)/2) cos((5x − 3x)/2) = **2 cos 4x cos x**.
- Ratio = (2 sin 4x cos x) ÷ (2 cos 4x cos x) = sin 4x / cos 4x = **tan 4x** = RHS.

**Jaanch:** x = 15° par LHS = (sin 75° + sin 45°)/(cos 75° + cos 45°); tan(4 × 15°) = tan 60° = √3, aur (0.966 + 0.707)/(0.259 + 0.707) = 1.673/0.966 = 1.732 = √3 ✅.

### Example 5: Classic Product-to-Sum — cos 20° cos 40° cos 80° = 1/8

Prove karo: **cos 20° cos 40° cos 80° = 1/8**.

**Hal:**
2 se upar-neeche guna karke pehle 2 cos 80° cos 40° par Product-to-Sum lagao:
LHS = (1/2) cos 20° [2 cos 80° cos 40°]
= (1/2) cos 20° [cos(80° + 40°) + cos(80° − 40°)]
= (1/2) cos 20° [cos 120° + cos 40°]
= (1/2) cos 20° [−1/2 + cos 40°]   *(kyunki cos 120° = −1/2)*
= −(1/4) cos 20° + (1/4) [2 cos 40° cos 20°]
= −(1/4) cos 20° + (1/4) [cos 60° + cos 20°]
= −(1/4) cos 20° + (1/4)(1/2) + (1/4) cos 20°   *(cos 20° wale terms kat gaye!)*
= **1/8** = RHS!

**Jaanch:** cos 20° ≈ 0.9397, cos 40° ≈ 0.7660, cos 80° ≈ 0.1736; 0.9397 × 0.7660 × 0.1736 = 0.125 = 1/8 ✅!

---

## Aam galtiyan

1. **sin 2x = 2 sin x likh dena:** Student 2 ko bracket se bahar kheench leta hai!
   - *Galat kyun:* x = 45° par sin 90° = 1, jabki 2 sin 45° = √2 ≠ 1. Hamesha **sin 2x = 2 sin x cos x**.
2. **cos C − cos D mein minus sign bhool jaana:** Student 2 sin((C+D)/2) sin((C−D)/2) likh deta hai.
   - *Galat kyun:* C = 60°, D = 0° par LHS = 1/2 − 1 = **−1/2** (negative!), jabki bina minus ke +1/2 aata! Hamesha **−2 sin((C+D)/2) sin((C−D)/2)** ya **2 sin((C+D)/2) sin((D−C)/2)** likho.
3. **Half-angle sin(x/2), cos(x/2) ka sign x ke quadrant se chun lena:**
   - *Sahi soch:* Agar x Quadrant II mein hai (90° < x < 180°), to **x/2 Quadrant I** mein hai (45° < x/2 < 90°)! Hamesha x ki inequality ko 2 se bhaag dekar x/2 ka asli quadrant nikalo.

---

## Quick Recap

- **Double:** sin 2x = 2 sin x cos x; cos 2x = cos² x − sin² x = 2 cos² x − 1 = 1 − 2 sin² x; tan 2x = 2 tan x / (1 − tan² x).
- **Half:** 1 + cos x = 2 cos²(x/2), 1 − cos x = 2 sin²(x/2); sign x/2 ke quadrant se!
- **Triple:** sin 3x = 3 sin x − 4 sin³ x; cos 3x = 4 cos³ x − 3 cos x; tan 3x = (3 tan x − tan³ x)/(1 − 3 tan² x).
- **C–D:** sin + sin → 2 sin cos; sin − sin → 2 cos sin; cos + cos → 2 cos cos; **cos − cos → −2 sin sin**.

---

## Practice Questions

1. If **sin x = 5/13** and x lies in Quadrant I, find **sin 2x**, **cos 2x**, and **tan 2x**.

2. If **cos x = −1/2** and x lies in Quadrant III (π < x < 3π/2), find **sin(x/2)**, **cos(x/2)**, and **tan(x/2)**.

3. Find the exact values of **sin(π/8)** and **cos(π/8)** (i.e., 22.5°) using the half-angle formulas from cos(π/4) = 1/√2.

4. Prove that: **(cos 7x + cos 5x) ÷ (sin 7x − sin 5x) = cot x**.

5. Prove that: **(sin x − sin 3x) ÷ (sin² x − cos² x) = 2 sin x**.

6. Prove that: **cos 6x = 32 cos⁶ x − 48 cos⁴ x + 18 cos² x − 1**. (Hint: write cos 6x = cos(3 · 2x) or cos(2 · 3x)!)

7. Prove that: **cot 4x (sin 5x + sin 3x) = cot x (sin 5x − sin 3x)**.

8. Prove that: **(cos 9x − cos 5x) ÷ (sin 17x − sin 3x) = −sin 2x ÷ cos 10x**.

9. Prove that: **sin 10° sin 50° sin 70° = 1/8**.

10. Prove that: **tan 4x = [4 tan x (1 − tan² x)] ÷ (1 − 6 tan² x + tan⁴ x)**.

11. Prove that: **(cos x + cos y)² + (sin x − sin y)² = 4 cos²((x + y)/2)**.

12. True or False? Give a one-line reason:
    (a) 1 − cos 2x = 2 sin² x for all real x.
    (b) cos 3x = 3 cos x − 4 cos³ x.
    (c) If π < x < 3π/2, then x/2 lies in Quadrant II.
    (d) cos C − cos D = 2 sin((C + D)/2) sin((D − C)/2).

### Answers

1. Q I mein cos x = 12/13.
   - sin 2x = 2(5/13)(12/13) = **120/169**.
   - cos 2x = (12/13)² − (5/13)² = (144 − 25)/169 = **119/169**.
   - tan 2x = **120/119**. Jaanch: 120² + 119² = 14400 + 14161 = 28561 = 169² ✅.

2. π < x < 3π/2 ⟹ **π/2 < x/2 < 3π/4** (Quadrant II: sin +, cos −, tan −!).
   - sin(x/2) = +√[(1 − (−1/2))/2] = √(3/4) = **√3 / 2**.
   - cos(x/2) = −√[(1 + (−1/2))/2] = −√(1/4) = **−1/2**.
   - tan(x/2) = (√3/2) ÷ (−1/2) = **−√3**.
   Jaanch: x = 240° (Q III) par x/2 = 120°: sin 120° = √3/2, cos 120° = −1/2, tan 120° = −√3 ✅!

3. π/8 = 22.5° (Q I, dono +). cos(π/4) = √2/2:
   - sin(π/8) = √[(1 − √2/2)/2] = **√(2 − √2) / 2**.
   - cos(π/8) = √[(1 + √2/2)/2] = **√(2 + √2) / 2**.
   Jaanch: sin²(π/8) + cos²(π/8) = (2 − √2 + 2 + √2)/4 = 4/4 = 1 ✅.

4. LHS = [2 cos 6x cos x] ÷ [2 cos 6x sin x] = cos x / sin x = **cot x** = RHS.

5. Numerator: sin x − sin 3x = −(sin 3x − sin x) = −2 cos 2x sin x.
   Denominator: sin² x − cos² x = −cos 2x.
   Ratio = (−2 cos 2x sin x) / (−cos 2x) = **2 sin x** = RHS.

6. cos 6x = 4 cos³ 2x − 3 cos 2x = 4(2 cos² x − 1)³ − 3(2 cos² x − 1)
   = 4(8 cos⁶ x − 12 cos⁴ x + 6 cos² x − 1) − 6 cos² x + 3
   = **32 cos⁶ x − 48 cos⁴ x + 18 cos² x − 1** = RHS.
   Jaanch: x = 0 par LHS = 1, RHS = 32 − 48 + 18 − 1 = 1 ✅.

7. LHS = (cos 4x / sin 4x)(2 sin 4x cos x) = **2 cos 4x cos x**.
   RHS = (cos x / sin x)(2 cos 4x sin x) = **2 cos 4x cos x**. LHS = RHS!

8. Numerator: cos 9x − cos 5x = −2 sin 7x sin 2x.
   Denominator: sin 17x − sin 3x = 2 cos 10x sin 7x.
   Ratio = **−sin 2x / cos 10x** = RHS.

9. sin 10° = cos 80°, sin 50° = cos 40°, sin 70° = cos 20°!
   To LHS = cos 80° cos 40° cos 20° = **1/8** (Example 5 se seedha!). Jaanch: complementary angles 10+80=90, 50+40=90, 70+20=90 ✅.

10. tan 4x = 2 tan 2x / (1 − tan² 2x), jahan tan 2x = 2t/(1 − t²) (t = tan x):
    Numerator = 4t/(1 − t²); Denominator = 1 − 4t²/(1 − t²)² = [(1 − t²)² − 4t²]/(1 − t²)² = (1 − 6t² + t⁴)/(1 − t²)².
    Ratio = **4t(1 − t²) / (1 − 6t² + t⁴)** = RHS.

11. Expand karo: (cos² x + sin² x) + (cos² y + sin² y) + 2(cos x cos y − sin x sin y)
    = 1 + 1 + 2 cos(x + y) = 2(1 + cos(x + y)) = 2 · 2 cos²((x + y)/2) = **4 cos²((x + y)/2)** = RHS.

12. (a) ✅ True: cos 2x = 1 − 2 sin² x se seedha.
    (b) ❌ False: ulta likha hai! Sahi formula **cos 3x = 4 cos³ x − 3 cos x** hai.
    (c) ✅ True: π/2 < x/2 < 3π/4, jo Quadrant II hai.
    (d) ✅ True: −sin((C − D)/2) = +sin((D − C)/2).

---

Ab tumhare paas Trigonometry ki poori formula toolbox — double, triple, half, product-to-sum aur C–D — maujood hai.

**Agle topic mein:** in sabhi formulas ka asli istemal — **Trigonometric Equations** (Principal aur General Solutions nikaalna)!
