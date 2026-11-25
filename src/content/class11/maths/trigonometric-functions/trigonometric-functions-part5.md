# Chapter: Trigonometric Functions (Part 5)

> **Class:** 11 | **Subject:** Mathematics
> **Ye file [trigonometric-functions-part4.md](trigonometric-functions-part4.md) se aage chalti hai** (wahan Topic 4 mein Double, Triple, Half-angle, Product-to-Sum aur C–D identities the). Chapter ki shuruaat: [trigonometric-functions.md](trigonometric-functions.md).
> **Topics covered in this file:**
> 5. Trigonometric Equations: Principal Aur General Solutions

---

# Topic 5: Trigonometric Equations: Principal Aur General Solutions

Algebraic equation 2x − 1 = 0 ka sirf ek hi hal (x = 1/2) hota hai. Par trigonometric equation **sin x = 1/2** ka kya? Topic 2 mein humne dekha ki sin x har **2π** ke baad repeat hota hai, aur ek hi chakkar [0, 2π) mein bhi sin x = 1/2 **do baar** aata hai: Quadrant I mein π/6 (30°) par, aur Quadrant II mein 5π/6 (150°) par! Isliye ek trigonometric equation ke **anant (infinitely many)** solutions hote hain. Is topic mein hum pehle chakkar ke **Principal Solutions** aur saare anant solutions ko ek formula mein sametne wale **General Solutions** seekhenge.

---

## Javed ka solar tracker panel

School science project ke liye Javed ek ghoomne wala solar tracker bana raha tha jo har chakkar mein ek barabar wave ke hisaab se upar-neeche jhukta tha. Usne sensor set kiya: *"Jab sin x = 1/2 ho, tab alarm baje."*

Javed ne socha alarm sirf x = 30° (π/6) par bajega. Par pahle hi chakkar mein alarm **do baar** baja — ek baar 30° (π/6) par upar jaate waqt, aur doosri baar **150° (5π/6)** par neeche aate waqt! Aur agle chakkar mein phir 390° aur 510° par!

Teacher ma'am muskuraayi: "Javed, pehle chakkar [0, 2π) ke andar milne wale dono hal (π/6 aur 5π/6) **Principal Solutions** hain. Aur sabhi chakkar ke anant hal ko integer **n ∈ Z** ke saath likhna **General Solution** kehlata hai!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Trigonometric equation** | Aisi equation jisme unknown angle x ke trig functions hon | 2 cos² x + 3 sin x = 0 |
| **Principal solutions** | Wo sabhi hal jo **0 ≤ x < 2π** ke andar aate hain | sin x = 1/2 ke liye π/6, 5π/6 |
| **General solution** | Integer **n ∈ Z** ka aisa formula jo equation ke **sabhi anant** hal de | x = nπ + (−1)ⁿ (π/6), n ∈ Z |

---

## Part A: Zero Wale Teen Buniyadi Formulas

Unit circle aur Topic 2 ke graphs se seedha dikhta hai (har jagah **n ∈ Z**):

1. **sin x = 0  ⟺  x = nπ**   *(0, ±π, ±2π, ...)*
2. **cos x = 0  ⟺  x = (2n + 1)π/2**   *(±π/2, ±3π/2, ...)*
3. **tan x = 0  ⟺  x = nπ**   *(kyunki tan x = sin x / cos x = 0 ⟺ sin x = 0)*

---

## Part B: Teen Master General-Solution Theorems (C–D Proof!)

Topic 4 ke C–D formulas se in teeno ke **exact derivations** 3-3 line mein nikal aate hain:

### Theorem 1: sin x = sin y
- sin x − sin y = 0 ⟹ **2 cos((x + y)/2) sin((x − y)/2) = 0**   *(C–D formula)*
- Ya to sin((x − y)/2) = 0 ⟹ (x − y)/2 = kπ ⟹ **x = 2kπ + y** *(even multiple of π + y)*
- Ya cos((x + y)/2) = 0 ⟹ (x + y)/2 = (2k + 1)π/2 ⟹ **x = (2k + 1)π − y** *(odd multiple of π − y)*
- Dono ko ek hi sundar formula mein jodo (even n par +y, odd n par −y):

> **sin x = sin y  ⟹  x = nπ + (−1)ⁿ y,  n ∈ Z**

### Theorem 2: cos x = cos y
- cos x − cos y = 0 ⟹ **−2 sin((x + y)/2) sin((x − y)/2) = 0**   *(C–D formula)*
- Ya to (x + y)/2 = nπ ⟹ x = 2nπ − y
- Ya (x − y)/2 = nπ ⟹ x = 2nπ + y
- Dono ko jodo:

> **cos x = cos y  ⟹  x = 2nπ ± y,  n ∈ Z**

### Theorem 3: tan x = tan y
- sin x / cos x = sin y / cos y ⟹ sin x cos y − cos x sin y = 0 ⟹ **sin(x − y) = 0**
- Isliye x − y = nπ:

> **tan x = tan y  ⟹  x = nπ + y,  n ∈ Z**

### Ek Nazar Mein: General Solution Table (n ∈ Z)

| Equation | General Solution |
|---|---|
| **sin x = 0** | x = nπ |
| **cos x = 0** | x = (2n + 1)π/2 |
| **tan x = 0** | x = nπ |
| **sin x = sin y** | x = nπ + (−1)ⁿ y |
| **cos x = cos y** | x = 2nπ ± y |
| **tan x = tan y** | x = nπ + y |

*(Chhota niyam: y ko hamesha sabse chhota convenient angle chuno; jaise sin x = −1/2 ke liye y = −π/6 ya 7π/6 dono bilkul same anant set dete hain!)*

---

## Part C: Worked Examples

### Example 1: Principal Solutions Nikaalna

Inke **principal solutions** (0 ≤ x < 2π) nikalo:
(i) **sin x = √3 / 2**
(ii) **tan x = −1 / √3**

**Hal:**
- **(i) sin x = √3 / 2 (positive → Q I aur Q II):**
  - Q I: x = **π/3** (60°)
  - Q II: x = π − π/3 = **2π/3** (120°)
  Principal solutions: **π/3, 2π/3**.
- **(ii) tan x = −1 / √3 (negative → Q II aur Q IV; acute reference angle = π/6):**
  - Q II: x = π − π/6 = **5π/6** (150°)
  - Q IV: x = 2π − π/6 = **11π/6** (330°)
  Principal solutions: **5π/6, 11π/6**.

**Jaanch:** sin(2π/3) = √3/2 ✅; tan(5π/6) = −1/√3 aur tan(11π/6) = −1/√3 ✅.

### Example 2: General Solution of sin x = −1/2

**sin x = −1/2** ka general solution nikalo.

**Hal:**
- Hum jaante hain sin(π/6) = 1/2, aur sin negative Q III mein hota hai: sin(π + π/6) = sin(7π/6) = −1/2.
  (Ya sin(−π/6) = −1/2 bhi le sakte hain — dono ek hi solution set dete hain!)
- sin x = sin(7π/6) ⟹ **x = nπ + (−1)ⁿ (7π/6), n ∈ Z**.
  *(Agar y = −π/6 lete, to x = nπ + (−1)ⁿ (−π/6) = nπ − (−1)ⁿ (π/6) milta — n = 0, 1, 2 rakh kar dekho, exact wahi angles 7π/6, 11π/6, −π/6, ... aate hain!)*

**Jaanch:** n = 0 → 7π/6 (sin = −1/2); n = 1 → π − 7π/6 = −π/6 (sin = −1/2) ✅.

### Example 3: cos 4x = cos 2x (Factoring / C–D Method)

**cos 4x = cos 2x** ka general solution nikalo.

**Hal:**
- **Tareeka 1 (Theorem 2 se seedha):**
  4x = 2nπ ± 2x
  - (+) sign: 4x − 2x = 2nπ ⟹ 2x = 2nπ ⟹ **x = nπ**
  - (−) sign: 4x + 2x = 2nπ ⟹ 6x = 2nπ ⟹ **x = nπ / 3**
  Dhyan do: har nπ (jaise 0, π, 2π) pehle se hi nπ/3 ke andar aa jaata hai (n = 0, 3, 6 par)!
  Isliye combined final answer: **x = nπ / 3, n ∈ Z**!
- **Tareeka 2 (C–D se):** cos 4x − cos 2x = 0 ⟹ −2 sin 3x sin x = 0 ⟹ sin 3x = 0 (x = nπ/3) ya sin x = 0 (x = nπ) → wahi **x = nπ/3**!

**Jaanch:** x = π/3 par cos(4π/3) = −1/2 aur cos(2π/3) = −1/2 ✅!

### Example 4: Quadratic Trig Equation — 2 cos² x + 3 sin x = 0

**2 cos² x + 3 sin x = 0** ka general solution nikalo.

**Hal:**
1. Poori equation ko ek hi function (**sin x**) mein badlo (cos² x = 1 − sin² x):
   2(1 − sin² x) + 3 sin x = 0
   2 − 2 sin² x + 3 sin x = 0
   **2 sin² x − 3 sin x − 2 = 0**
2. Factor karo: (2 sin x + 1)(sin x − 2) = 0.
3. Do cases:
   - Case 1: sin x − 2 = 0 ⟹ sin x = 2 — **NAMUMKIN!** (Kyunki |sin x| ≤ 1 hamesha!)
   - Case 2: 2 sin x + 1 = 0 ⟹ **sin x = −1/2** = sin(7π/6).
4. General solution: **x = nπ + (−1)ⁿ (7π/6), n ∈ Z**.

**Jaanch:** x = 7π/6 par cos²(7π/6) = 3/4, sin(7π/6) = −1/2 ⟹ 2(3/4) + 3(−1/2) = 3/2 − 3/2 = 0 ✅!

### Example 5: Factoring (Cancel Mat Karna!) — sin 2x + cos x = 0

**sin 2x + cos x = 0** ka general solution nikalo.

**Hal:**
1. sin 2x = 2 sin x cos x rakho:
   2 sin x cos x + cos x = 0
2. **cos x common nikalo** (kabhi cancel mat karna!):
   **cos x (2 sin x + 1) = 0**
3. Do branches:
   - **cos x = 0** ⟹ **x = (2n + 1)π/2, n ∈ Z**
   - **sin x = −1/2** ⟹ **x = nπ + (−1)ⁿ (7π/6), n ∈ Z**.

**Jaanch:** x = π/2 par sin π + cos(π/2) = 0 + 0 = 0 ✅; x = 7π/6 par sin(7π/3) + cos(7π/6) = √3/2 − √3/2 = 0 ✅!

### Example 6: Identity + Quadratic — sec² 2x = 1 − tan 2x

**sec² 2x = 1 − tan 2x** ka general solution nikalo.

**Hal:**
1. sec² 2x = 1 + tan² 2x rakho:
   1 + tan² 2x = 1 − tan 2x
   tan² 2x + tan 2x = 0
   **tan 2x (tan 2x + 1) = 0**
2. Do branches:
   - tan 2x = 0 ⟹ 2x = nπ ⟹ **x = nπ / 2**
   - tan 2x = −1 = tan(3π/4) ⟹ 2x = nπ + 3π/4 ⟹ **x = nπ/2 + 3π/8** (n ∈ Z).

**Jaanch:** x = 3π/8 par 2x = 3π/4, sec²(3π/4) = 2, 1 − tan(3π/4) = 1 − (−1) = 2 ✅!

---

## Aam galtiyan

1. **Equation ke dono taraf se cos x ya sin x cancel kar dena:** Example 5 mein student 2 sin x cos x = −cos x se cos x kaat kar sirf sin x = −1/2 likhta hai!
   - *Galat kyun:* Aisa karne par **cos x = 0** (yaani x = (2n + 1)π/2) wale saare anant solutions kho jaate hain! Hamesha ek taraf laakar **factor** karo.
2. **sin x = sin y aur cos x = cos y ke general formulas aapas mein badal dena:**
   - *Yaad rakhne ki trick:* **cos** even hai (cos(−y) = cos y), isliye usme **±y** aata hai (2nπ ± y). **sin** mein nπ + (−1)ⁿ y aata hai!
3. **Principal solutions mein sirf ek angle likh kar chhod dena:** Student sin x = √3/2 ka principal solution sirf π/3 likh deta hai.
   - *Sahi soch:* [0, 2π) mein har non-extreme value (±1, 0 ko chhod kar) **do quadrants** mein aati hai — dono principal solutions likho!

---

## Quick Recap

- **Principal solutions:** 0 ≤ x < 2π ke andar sabhi hal (aam taur par 2 hal).
- **Zero rules:** sin x = 0 ⟹ nπ; cos x = 0 ⟹ (2n + 1)π/2; tan x = 0 ⟹ nπ.
- **General rules (n ∈ Z):**
  - sin x = sin y ⟹ **x = nπ + (−1)ⁿ y**
  - cos x = cos y ⟹ **x = 2nπ ± y**
  - tan x = tan y ⟹ **x = nπ + y**
- Hamesha **factor** karo (cancel mat karo), aur |sin x| > 1 ya |cos x| > 1 wale roots reject karo!

---

## Practice Questions

1. Find the **principal** and **general** solutions of:
   (a) tan x = √3    (b) sec x = 2    (c) cot x = −√3    (d) cosec x = −2

2. Find the general solution of:
   (a) cos 3x = −1/2    (b) sin 2x = √3/2    (c) tan 3x = 1

3. Find the general solution of **cos 3x + cos x − cos 2x = 0**.

4. Find the general solution of **sin 2x − sin 4x + sin 6x = 0**.

5. Find the general solution of **2 sin² x + √3 cos x + 1 = 0**.

6. Find the general solution of **sin x + cos x = 0** (and list its principal solutions).

7. Find the general solution of **4 sin² x − 3 = 0**.

8. Find the general solution of **tan x + tan 2x + √3 tan x tan 2x = √3**. (Hint: rearrange to get tan(x + 2x)!)

9. Find all solutions of **cos 2x = sin x** in the interval [0, 2π).

10. Find the general solution of **cot² x − (√3 + 1) cot x + √3 = 0**.

11. Does the equation **3 sin x − 4 = 0** have any real solution? Explain in one line.

12. True or False? Give a one-line reason:
    (a) The general solution of cos x = 0 is x = nπ, n ∈ Z.
    (b) Principal solutions always lie in the interval [0, 2π).
    (c) The equation sin 3x = sin x has x = nπ/2 as its ONLY solutions.
    (d) If tan x = tan(π/5), then x = nπ + π/5, n ∈ Z.

### Answers

1. (a) tan x = √3 (Q I, Q III): Principal = **π/3, 4π/3**; General = **nπ + π/3**.
   (b) sec x = 2 ⟹ cos x = 1/2 (Q I, Q IV): Principal = **π/3, 5π/3**; General = **2nπ ± π/3**.
   (c) cot x = −√3 ⟹ tan x = −1/√3 (Q II, Q IV): Principal = **5π/6, 11π/6**; General = **nπ + 5π/6** (ya nπ − π/6).
   (d) cosec x = −2 ⟹ sin x = −1/2 (Q III, Q IV): Principal = **7π/6, 11π/6**; General = **nπ + (−1)ⁿ (7π/6)**.
   Jaanch: har principal solution 0 ≤ x < 2π mein hai ✅.

2. (a) cos 3x = cos(2π/3) ⟹ 3x = 2nπ ± 2π/3 ⟹ **x = 2nπ/3 ± 2π/9**.
   (b) sin 2x = sin(π/3) ⟹ 2x = nπ + (−1)ⁿ (π/3) ⟹ **x = nπ/2 + (−1)ⁿ (π/6)**.
   (c) tan 3x = tan(π/4) ⟹ 3x = nπ + π/4 ⟹ **x = nπ/3 + π/12**.

3. (cos 3x + cos x) − cos 2x = 0 ⟹ 2 cos 2x cos x − cos 2x = 0 ⟹ **cos 2x (2 cos x − 1) = 0**.
   - cos 2x = 0 ⟹ 2x = (2n + 1)π/2 ⟹ **x = (2n + 1)π/4**.
   - cos x = 1/2 = cos(π/3) ⟹ **x = 2nπ ± π/3**.
   Jaanch: x = π/4 par cos(3π/4) + cos(π/4) − cos(π/2) = −1/√2 + 1/√2 − 0 = 0 ✅.

4. (sin 6x + sin 2x) − sin 4x = 0 ⟹ 2 sin 4x cos 2x − sin 4x = 0 ⟹ **sin 4x (2 cos 2x − 1) = 0**.
   - sin 4x = 0 ⟹ **x = nπ/4**.
   - cos 2x = 1/2 = cos(π/3) ⟹ **x = nπ ± π/6**.
   Jaanch: x = π/6 par sin(π/3) − sin(2π/3) + sin π = √3/2 − √3/2 + 0 = 0 ✅.

5. 2(1 − cos² x) + √3 cos x + 1 = 0 ⟹ 2 cos² x − √3 cos x − 3 = 0.
   Factor: (2 cos x + √3)(cos x − √3) = 0.
   - cos x = √3 > 1 (namumkin!).
   - cos x = −√3/2 = cos(5π/6) ⟹ **x = 2nπ ± 5π/6**.
   Jaanch: x = 5π/6 par 2(1/4) + √3(−√3/2) + 1 = 1/2 − 3/2 + 1 = 0 ✅.

6. sin x = −cos x ⟹ tan x = −1 = tan(3π/4) (kyunki cos x = 0 par sin x = ±1 ≠ 0).
   General: **x = nπ + 3π/4** (ya nπ − π/4); Principal: **3π/4, 7π/4**.

7. sin² x = 3/4 ⟹ sin x = ±√3/2 = sin(±π/3).
   Dono ko jodo: **x = nπ ± π/3, n ∈ Z**. Jaanch: sin²(π/3) = sin²(2π/3) = 3/4 ✅.

8. tan x + tan 2x = √3(1 − tan x tan 2x) ⟹ (tan x + tan 2x)/(1 − tan x tan 2x) = √3 ⟹ **tan 3x = √3 = tan(π/3)**.
   3x = nπ + π/3 ⟹ **x = nπ/3 + π/9, n ∈ Z**. Jaanch: x = π/9 par 3x = π/3, tan(π/3) = √3 ✅.

9. 1 − 2 sin² x = sin x ⟹ 2 sin² x + sin x − 1 = 0 ⟹ (2 sin x − 1)(sin x + 1) = 0.
   - sin x = 1/2 → **π/6, 5π/6**
   - sin x = −1 → **3π/2**.
   [0, 2π) mein 3 solutions: **π/6, 5π/6, 3π/2**. Jaanch: cos(π/3) = 1/2 = sin(π/6), cos(3π) = −1 = sin(3π/2) ✅.

10. (cot x − √3)(cot x − 1) = 0 ⟹ tan x = 1/√3 ya tan x = 1.
    **x = nπ + π/6** ya **x = nπ + π/4** (n ∈ Z).

11. **Nahi.** sin x = 4/3 > 1, jo namumkin hai kyunki −1 ≤ sin x ≤ 1 hamesha.

12. (a) ❌ False: cos x = 0 ke liye x = (2n + 1)π/2 hota hai (nπ par cos x = ±1 hota hai!).
    (b) ✅ True: principal solutions 0 ≤ x < 2π mein hote hain.
    (c) ❌ False: sin 3x − sin x = 2 cos 2x sin x = 0 se x = nπ AUR x = (2n + 1)π/4 dono aate hain!
    (d) ✅ True: Theorem 3 (tan x = tan y ⟹ x = nπ + y).

---

Ab tum kisi bhi trigonometric equation ke principal aur general solutions bina koi root khoye nikaal sakte ho.

**Agle aur aakhri topic mein:** poore chapter ke saare tools ko ek saath jodne wale **Decision Map, 6 mixed challenge problems, 12 practice sawaal** aur **Chapter Ka Saar**!
