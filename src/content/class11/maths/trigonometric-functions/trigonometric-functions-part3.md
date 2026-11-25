# Chapter: Trigonometric Functions (Part 3)

> **Class:** 11 | **Subject:** Mathematics
> **Ye file [trigonometric-functions-part2.md](trigonometric-functions-part2.md) se aage chalti hai** (wahan Topic 2 mein Unit Circle, ASTC sign rule, allied angles, domain, range aur periodic graphs the). Chapter ki shuruaat: [trigonometric-functions.md](trigonometric-functions.md).
> **Topics covered in this file:**
> 3. Trigonometric Functions of Sum and Difference of Two Angles (Compound Angles)

---

# Topic 3: Trigonometric Functions of Sum and Difference of Two Angles (Compound Angles)

Topic 2 mein humne 0°, 30°, 45°, 60°, 90° aur unke allied angles (120°, 150°, 210°, ...) ke exact maan nikaalna seekha. Par agar koi poochhe: **sin 75°** ya **cos 15°** ya **tan 105°** ka bina calculator exact maan kya hoga? Dhyan do: **75° = 45° + 30°** aur **15° = 45° − 30°**! Is topic mein hum **Compound Angle Formulas** — yaani sin(x ± y), cos(x ± y), tan(x ± y) aur cot(x ± y) — derive karenge aur dekhenge ki poori Class 11 Trigonometry ki chaabi ek hi master formula **cos(x + y)** se khulti hai!

---

## Kamal ka terrace flag-pole survey

School ke Geography project ke liye Kamal maidan se terrace par lage flag-pole ka angle naap raha tha. Clinometer ne dikhaya ki chhat ka kona **45°** par hai, aur uske upar flag-pole ka top **30° aur upar** — yaani kul **75°** par!

Kamal ke dost ne turant kaha, "75° = 45° + 30°, to sin 75° = sin 45° + sin 30° = 0.71 + 0.50 = **1.21**!"
Kamal chauk gaya: "Are, Topic 2 mein padha tha ki **sin ka maan kabhi 1 se bada ho hi nahi sakta!** 1.21 to pakka galat hai!"

Teacher ma'am muskuraayi: "Shabaash Kamal! sin(x + y) kabhi sin x + sin y nahi hota. Chalo, unit circle par do chords ki lambai barabar karke **asli formula** nikaalte hain!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Compound angle** | Do ya zyada angles ka jod ya antar | x + y, x − y, 45° + 30° |
| **Master identity cos(x + y)** | cos x cos y − sin x sin y (baaki saare formulas isi se nikalte hain!) | cos 75° = cos(45° + 30°) |
| **Chord distance proof** | Unit circle par barabar central angles ki barabar chords se cos(x + y) derive karna | Part A |

---

## Part A: Master Formula cos(x + y) Ka Derivation (Kyun?)

Unit circle (radius 1) par chaar points lo:
- **P₄ = (1, 0)** (angle 0)
- **P₁ = (cos x, sin x)** (angle x)
- **P₂ = (cos(x + y), sin(x + y))** (angle x + y)
- **P₃ = (cos(−y), sin(−y)) = (cos y, −sin y)** (angle −y)

Ab do triangles **ΔP₁OP₃** aur **ΔP₂OP₄** dekho:
- Dono mein centre O par bana angle **x + y** hai (P₁ se P₃ tak x − (−y) = x + y, aur P₂ se P₄ tak x + y)!
- Dono ki sides OP₁ = OP₂ = OP₃ = OP₄ = 1 (unit circle ka radius).
- SAS congruence se dono triangles congruent hain, isliye **chord P₁P₃ = chord P₂P₄**, yaani **P₁P₃² = P₂P₄²**!

Distance formula lagao:
1. **P₁P₃²** = (cos x − cos y)² + (sin x + sin y)²
   = (cos² x + sin² x) + (cos² y + sin² y) − 2 cos x cos y + 2 sin x sin y
   = **2 − 2(cos x cos y − sin x sin y)**.
2. **P₂P₄²** = (cos(x + y) − 1)² + (sin(x + y) − 0)²
   = cos²(x + y) + sin²(x + y) + 1 − 2 cos(x + y)
   = **2 − 2 cos(x + y)**.

Dono ko barabar rakho, 2 aur −2 kaato — aur nikal aaya **Master Formula**:

> **1. cos(x + y) = cos x cos y − sin x sin y**

---

## Part B: Baaki Saare Compound Angle Formulas (Seedha Master Formula Se!)

Ek baar **cos(x + y)** mil gaya, to baaki sab 2-2 line mein nikal aate hain:

2. **cos(x − y):** Master formula mein y ki jagah −y rakho (cos(−y) = cos y, sin(−y) = −sin y):
   > **cos(x − y) = cos x cos y + sin x sin y**
   *(Dhyan do: cos mein sign **ulta** chalta hai — plus mein minus, minus mein plus!)*

3. **sin(x + y):** sin(x + y) = cos(π/2 − (x + y)) = cos((π/2 − x) − y)
   = cos(π/2 − x) cos y + sin(π/2 − x) sin y:
   > **sin(x + y) = sin x cos y + cos x sin y**

4. **sin(x − y):** y ki jagah −y rakho:
   > **sin(x − y) = sin x cos y − cos x sin y**
   *(sin mein sign **seedha** chalta hai — plus mein plus, minus mein minus!)*

5. **tan(x + y):** sin(x + y) / cos(x + y) mein numerator aur denominator dono ko **cos x cos y** se bhaag do:
   > **tan(x + y) = (tan x + tan y) / (1 − tan x tan y)**

6. **tan(x − y):** y ki jagah −y rakho:
   > **tan(x − y) = (tan x − tan y) / (1 + tan x tan y)**

7. **cot(x + y) aur cot(x − y):** (cos/sin ko sin x sin y se bhaag dekar):
   > **cot(x + y) = (cot x cot y − 1) / (cot y + cot x)**
   > **cot(x − y) = (cot x cot y + 1) / (cot y − cot x)**

### Do Bonus Shortcuts (Exam mein bahut kaam aate hain!)

- **tan(π/4 + x) = (1 + tan x) / (1 − tan x)**  *(kyunki tan(π/4) = 1)*
- **tan(π/4 − x) = (1 − tan x) / (1 + tan x)**
- **sin(x + y) sin(x − y) = sin² x − sin² y = cos² y − cos² x**
- **cos(x + y) cos(x − y) = cos² x − sin² y = cos² y − sin² x**

---

## Part C: Worked Examples

### Example 1: sin 75°, cos 15° aur tan 15° ke Exact Maan

Bina calculator exact maan nikalo: (i) sin 75°, (ii) cos 15°, (iii) tan 15°.

**Hal:**
- **(i) sin 75° = sin(45° + 30°)**
  = sin 45° cos 30° + cos 45° sin 30°
  = (1/√2)(√3/2) + (1/√2)(1/2) = **(√3 + 1) / (2√2)** = **(√6 + √2) / 4**.
- **(ii) cos 15° = cos(45° − 30°)**
  = cos 45° cos 30° + sin 45° sin 30°
  = (1/√2)(√3/2) + (1/√2)(1/2) = **(√6 + √2) / 4**.
  *(Dhyan do: cos 15° = sin(90° − 15°) = sin 75° — bilkul match hua!)*
- **(iii) tan 15° = tan(45° − 30°)**
  = (tan 45° − tan 30°) / (1 + tan 45° tan 30°)
  = (1 − 1/√3) / (1 + 1/√3) = (√3 − 1) / (√3 + 1).
  Rationalise karo (√3 − 1 se upar-neeche guna):
  = (√3 − 1)² / (3 − 1) = (3 + 1 − 2√3) / 2 = (4 − 2√3) / 2 = **2 − √3**.

**Jaanch:** (√6 + √2)/4 ≈ (2.449 + 1.414)/4 ≈ 0.966 < 1 ✅; 2 − √3 ≈ 0.268 > 0 ✅.

### Example 2: Quadrant wale Compound Angle Sawaal

Agar **sin x = 3/5** (x Quadrant II mein) aur **cos y = −12/13** (y Quadrant III mein), to **sin(x + y)** aur **cos(x − y)** nikalo.

**Hal:**
1. Pehle missing ratios nikalo (ASTC sign ke saath!):
   - x in Q II ⟹ cos x negative: cos x = −√(1 − 9/25) = **−4/5**.
   - y in Q III ⟹ sin y negative: sin y = −√(1 − 144/169) = **−5/13**.
2. **sin(x + y)** = sin x cos y + cos x sin y
   = (3/5)(−12/13) + (−4/5)(−5/13) = −36/65 + 20/65 = **−16/65**.
3. **cos(x − y)** = cos x cos y + sin x sin y
   = (−4/5)(−12/13) + (3/5)(−5/13) = 48/65 − 15/65 = **33/65**.

**Jaanch:** |−16/65| < 1 aur |33/65| < 1 ✅; (−36 + 20)/65 = −16/65, (48 − 15)/65 = 33/65 ✅.

### Example 3: tan(π/4 ± x) Identity Proof

Prove karo: **tan(π/4 + x) ÷ tan(π/4 − x) = [(1 + tan x) / (1 − tan x)]²**.

**Hal:**
- Numerator: tan(π/4 + x) = (1 + tan x) / (1 − tan x).
- Denominator: tan(π/4 − x) = (1 − tan x) / (1 + tan x).
- Dono ka bhaag:
  LHS = [(1 + tan x) / (1 − tan x)] × [(1 + tan x) / (1 − tan x)] = **[(1 + tan x) / (1 − tan x)]²** = RHS.

**Jaanch:** x = 0 par LHS = 1/1 = 1 = RHS ✅; x = π/6 (tan = 1/√3) par tan 75° / tan 15° = (2 + √3)/(2 − √3) = (2 + √3)² = 7 + 4√3, aur [(√3 + 1)/(√3 − 1)]² = (2 + √3)² ✅.

### Example 4: cos(π/4 + x) + cos(π/4 − x) Simplify Karo

Prove karo: **cos(π/4 + x) + cos(π/4 − x) = √2 cos x**.

**Hal:**
LHS = [cos(π/4) cos x − sin(π/4) sin x] + [cos(π/4) cos x + sin(π/4) sin x]
= 2 cos(π/4) cos x   *(sin wale terms kat gaye!)*
= 2 × (1/√2) cos x = **√2 cos x** = RHS.

**Jaanch:** x = 0 par LHS = 1/√2 + 1/√2 = √2 = RHS ✅.

---

## Aam galtiyan

1. **Trig functions ko bracket par distribute kar dena:** Student sin(x + y) = sin x + sin y ya cos(x − y) = cos x − cos y likh deta hai!
   - *Galat kyun:* x = 45°, y = 45° par sin(90°) = 1, jabki sin 45° + sin 45° = √2 ≈ 1.414 ≠ 1!
2. **cos(x + y) aur cos(x − y) ke beech ke sign palat dena:**
   - *Yaad rakhne ki trick:* **sin** dostana hai (jo sign bracket mein, wahi bahar: + ka +, − ka −); **cos** ziddi hai (sign ulta karta hai: + ka −, − ka +)!

---

## Quick Recap

- **cos(x + y) = cos x cos y − sin x sin y**, **cos(x − y) = cos x cos y + sin x sin y**.
- **sin(x + y) = sin x cos y + cos x sin y**, **sin(x − y) = sin x cos y − cos x sin y**.
- **tan(x ± y) = (tan x ± tan y) / (1 ∓ tan x tan y)**; **tan(π/4 ± x) = (1 ± tan x) / (1 ∓ tan x)**.
- **sin 75° = cos 15° = (√6 + √2)/4**, **sin 15° = cos 75° = (√6 − √2)/4**, **tan 15° = 2 − √3**, **tan 75° = 2 + √3**.

---

## Practice Questions

1. Find the exact values of:
   (a) sin 15°    (b) cos 75°    (c) tan 75°    (d) cos 105°

2. Evaluate without a calculator:
   (a) sin 40° cos 20° + cos 40° sin 20°
   (b) cos(π/4 − x) cos(π/4 − y) − sin(π/4 − x) sin(π/4 − y)

3. Prove that: **sin(n + 1)x sin(n + 2)x + cos(n + 1)x cos(n + 2)x = cos x**.

4. Prove that: **cos(3π/4 + x) − cos(3π/4 − x) = −√2 sin x**.

5. Prove that: **sin² 6x − sin² 4x = sin 2x sin 10x**.

6. Prove that: **cos² 2x − cos² 6x = sin 4x sin 8x**.

7. If **cos x = 4/5** (x in Quadrant IV) and **sin y = 5/13** (y in Quadrant I), find **sin(x + y)** and **cos(x + y)**.

8. Prove that: **tan(A + B) = 1** if **tan A = 1/2** and **tan B = 1/3** (hence A + B = 45° for acute A, B).

9. Prove that: **cot x cot 2x − cot 2x cot 3x − cot 3x cot x = 1**. (Hint: start with 3x = 2x + x and take cot on both sides!)

10. Evaluate: **tan(13π/12)** using 13π/12 = π + π/12.

11. Prove that: **[sin(x + y)] ÷ [sin(x − y)] = (tan x + tan y) ÷ (tan x − tan y)**.

12. True or False? Give a one-line reason:
    (a) cos(A + B) = cos A + cos B.
    (b) sin(A − B) = sin A cos B − cos A sin B.
    (c) tan(π/4 + θ) = (1 + tan θ)/(1 − tan θ).
    (d) sin(x + y) sin(x − y) = sin² x − sin² y.

### Answers

1. (a) sin(45° − 30°) = **(√6 − √2)/4**.
   (b) cos(45° + 30°) = **(√6 − √2)/4**.
   (c) tan(45° + 30°) = (√3 + 1)/(√3 − 1) = **2 + √3**.
   (d) cos(60° + 45°) = (1/2)(1/√2) − (√3/2)(1/√2) = **(√2 − √6)/4** (Q II mein negative!).
   Jaanch: cos 105° = −sin 15° = −(√6 − √2)/4 = (√2 − √6)/4 ✅.

2. (a) sin(40° + 20°) = sin 60° = **√3/2**.
   (b) cos[(π/4 − x) + (π/4 − y)] = cos[π/2 − (x + y)] = **sin(x + y)**.

3. cos A cos B + sin A sin B = cos(A − B) lagao (A = (n + 2)x, B = (n + 1)x):
   LHS = cos((n + 2)x − (n + 1)x) = **cos x** = RHS. Jaanch: n = 0, x = π/3 par sin(π/3)sin(2π/3) + cos(π/3)cos(2π/3) = 3/4 − 1/4 = 1/2 = cos(π/3) ✅.

4. LHS = [cos(3π/4) cos x − sin(3π/4) sin x] − [cos(3π/4) cos x + sin(3π/4) sin x]
   = −2 sin(3π/4) sin x = −2(1/√2) sin x = **−√2 sin x** = RHS.

5. Identity sin² A − sin² B = sin(A + B) sin(A − B) (A = 6x, B = 4x):
   LHS = sin(6x + 4x) sin(6x − 4x) = **sin 10x sin 2x** = RHS.

6. cos² 2x − cos² 6x = (1 − sin² 2x) − (1 − sin² 6x) = sin² 6x − sin² 2x
   = sin(6x + 2x) sin(6x − 2x) = **sin 8x sin 4x** = RHS.

7. x in Q IV ⟹ sin x = −3/5; y in Q I ⟹ cos y = 12/13.
   - sin(x + y) = (−3/5)(12/13) + (4/5)(5/13) = (−36 + 20)/65 = **−16/65**.
   - cos(x + y) = (4/5)(12/13) − (−3/5)(5/13) = (48 + 15)/65 = **63/65**.
   Jaanch: (−16/65)² + (63/65)² = (256 + 3969)/4225 = 4225/4225 = 1 ✅!

8. tan(A + B) = (1/2 + 1/3) ÷ (1 − 1/6) = (5/6) ÷ (5/6) = **1**. Jaanch: 5/6 ÷ 5/6 = 1 ✅.

9. cot 3x = cot(2x + x) = (cot 2x cot x − 1) / (cot 2x + cot x).
   Cross-multiply: cot 3x cot 2x + cot 3x cot x = cot 2x cot x − 1.
   Rearrange: **cot x cot 2x − cot 2x cot 3x − cot 3x cot x = 1**.

10. tan(13π/12) = tan(π + π/12) = tan(π/12) = tan 15° = **2 − √3**.

11. LHS = (sin x cos y + cos x sin y) / (sin x cos y − cos x sin y).
    Numerator aur denominator dono ko cos x cos y se bhaag do:
    = **(tan x + tan y) / (tan x − tan y)** = RHS.

12. (a) ❌ False: cos(A + B) = cos A cos B − sin A sin B.
    (b) ✅ True: standard difference formula for sine.
    (c) ✅ True: tan(π/4) = 1 rakhne par seedha milta hai.
    (d) ✅ True: (sin x cos y + cos x sin y)(sin x cos y − cos x sin y) = sin² x cos² y − cos² x sin² y = sin² x(1 − sin² y) − (1 − sin² x)sin² y = sin² x − sin² y.

---

Ab tum kisi bhi do angles ke jod aur antar ke sin, cos, tan aur cot bina jhijhak nikaal sakte ho.

**Agle topic mein:** jab dono angles barabar hon (x + x = 2x), ya 3x, ya aadha x/2 — milenge **Multiple, Sub-multiple, Product-to-Sum aur C–D Identities** se!
