> **Class:** 12 | **Subject:** Mathematics | **Chapter 2:** Inverse Trigonometric Functions

# Basic Concepts, Domain and Range of Inverse Trigonometric Functions

> **Pichle chapter mein:** Humne [Relations and Functions — Mixed Problems & Wrap-up](../relations-and-functions/relations-and-functions-part5.md) mein dekha ki koi bhi function **tabhi invertible** hota hai jab woh **bijective (one-one + onto)** ho. **Class 11 bridge:** Trigonometric ratios, radian angles aur quadrant signs hum [Trigonometric Functions](../../../class11/maths/trigonometric-functions/trigonometric-functions.md) mein padh chuke hain — ab hum **Inverse Trigonometric Functions (sin⁻¹x, cos⁻¹x, tan⁻¹x, ...)** ki duniya shuru kar rahe hain!

---

Nima apne archery club mein ek digital angle-sensor test kar rahi thi. Sensor ne bataya: "sin θ = 1/2." Nima ne socha, "θ toh 30° (π/6) bhi ho sakta hai, 150° (5π/6) bhi, 390° (13π/6) bhi — infinite angles!" Agar har baar infinite answers aayenge, toh sin⁻¹(1/2) ek function hi nahi ban payega! Isliye mathematicians ne har trig function ke domain ko ek chhote se interval par **restrict (bandh)** kar diya jahan woh **one-one aur onto** ban jaye — aur usi unique answer ko **Principal Value** kaha!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Inverse Trigonometric Function** | Trigonometric ratio (number) ko wapas uske unique angle (radians mein) par map karne wala function (e.g., sin⁻¹x, also written arcsin x) |
| **Principal Value Branch** | Restricted range (angle interval) jismein har inverse trig function ka **unique output** aata hai |
| **Principal Value** | Kisi given x ke liye inverse trig function ka woh unique angle jo uski principal value branch mein aata ho |

---

## 1. Domain and Principal Value Branch (Range) — MUST MEMORISE!

Kyunki sin x poore R par periodic (many-one) hai, hum uska domain **[−π/2, π/2]** par restrict karte hain jahan woh [−1, 1] par strictly increasing aur bijective hai! Isi tarah sabhi 6 functions ki exact table yaad kar lo:

| Function | Domain (Input x) | Principal Value Branch (Range / Output θ) |
|---|---|---|
| **y = sin⁻¹ x** | **[−1, 1]** | **[−π/2, π/2]**  (Quadrants IV & I) |
| **y = cos⁻¹ x** | **[−1, 1]** | **[0, π]**  (Quadrants I & II) |
| **y = tan⁻¹ x** | **R** (−∞, ∞) | **(−π/2, π/2)**  (open interval!) |
| **y = cot⁻¹ x** | **R** (−∞, ∞) | **(0, π)**  (open interval!) |
| **y = cosec⁻¹ x** | **R − (−1, 1)** (i.e., |x| ≥ 1) | **[−π/2, π/2] − {0}** |
| **y = sec⁻¹ x** | **R − (−1, 1)** (i.e., |x| ≥ 1) | **[0, π] − {π/2}** |

### Two Super-Easy Memory Families!
- **Family 1 — [−π/2, π/2] (Odd family: negative input → −θ):** **sin⁻¹, tan⁻¹, cosec⁻¹**
- **Family 2 — [0, π] (Positive-angle family: negative input → π − θ):** **cos⁻¹, cot⁻¹, sec⁻¹**

---

## 2. Evaluating Principal Values (Step-by-Step)

1. Let **θ = trig⁻¹(x)** so **trig(θ) = x**.
2. Find the basic acute angle α ∈ [0, π/2] for |x|.
3. If x ≥ 0 → answer is simply **+α**!
4. If x < 0:
   - For **sin⁻¹, tan⁻¹, cosec⁻¹** → answer is **−α**!
   - For **cos⁻¹, cot⁻¹, sec⁻¹** → answer is **π − α**!

---

## Solved Examples

### Example 1: Evaluating Principal Values of Negative Arguments
Find the principal value of:
(a) sin⁻¹(−1/2)   (b) cos⁻¹(−1/2)   (c) tan⁻¹(−√3)   (d) sec⁻¹(−2)

**Solution:**
(a) Basic angle for sin α = 1/2 is α = π/6. Since sin⁻¹ ∈ [−π/2, π/2]:
    **sin⁻¹(−1/2) = −π/6**.
(b) Basic angle for cos α = 1/2 is α = π/3. Since cos⁻¹ ∈ [0, π]:
    **cos⁻¹(−1/2) = π − π/3 = 2π/3**.
(c) Basic angle for tan α = √3 is α = π/3. Since tan⁻¹ ∈ (−π/2, π/2):
    **tan⁻¹(−√3) = −π/3**.
(d) Basic angle for sec α = 2 is α = π/3. Since sec⁻¹ ∈ [0, π] − {π/2}:
    **sec⁻¹(−2) = π − π/3 = 2π/3**.

Jaanch: sin(−π/6) = −1/2 ∈ [−π/2, π/2]; cos(2π/3) = −1/2 ∈ [0, π]; tan(−π/3) = −√3 ∈ (−π/2, π/2); sec(2π/3) = −2 ∈ [0, π] − {π/2} ✅

---

### Example 2: Evaluating a Combined Expression
Find the value of: **tan⁻¹(1) + cos⁻¹(−1/2) + sin⁻¹(−1/2)**.

**Solution:**
- tan⁻¹(1) = **π/4**
- cos⁻¹(−1/2) = π − π/3 = **2π/3**
- sin⁻¹(−1/2) = **−π/6**
Sum = π/4 + 2π/3 − π/6 = (3π + 8π − 2π) / 12 = 9π / 12 = **3π/4**.

Jaanch: 45° + 120° − 30° = 135° = 3π/4 ✅

---

### Example 3: Finding Domain of an Inverse Trig Function
Find the domain of **f(x) = sin⁻¹(2x − 3)**.

**Solution:**
Domain of sin⁻¹(u) is −1 ≤ u ≤ 1:
−1 ≤ 2x − 3 ≤ 1
Add 3 to all sides: 2 ≤ 2x ≤ 4
Divide by 2: **1 ≤ x ≤ 2** → Domain = **[1, 2]**.

Jaanch: At x = 1, 2x − 3 = −1; at x = 2, 2x − 3 = 1; both endpoints valid ✅

---

## Aam Galtiyan (Common Mistakes)

1. **sin⁻¹x ko (sin x)⁻¹ = 1 / sin x = cosec x samajh lena:**
   - *Galat:* sin⁻¹(1/2) = 1 / sin(1/2).
   - *Sahi:* **sin⁻¹x** inverse function (arcsin x) hai, reciprocal **bilkul nahi**! Reciprocal ko (sin x)⁻¹ likhte hain!

2. **cos⁻¹(−1/2) ko −π/3 likh dena:**
   - *Galat:* cos⁻¹(−1/2) = −π/3.
   - *Sahi:* −π/3 cos⁻¹ ki range **[0, π]** se bahar hai! cos⁻¹(−x) = **π − cos⁻¹x** → **2π/3**!

3. **tan⁻¹x aur cot⁻¹x ki range mein endpoints include kar dena:**
   - *Galat:* Range of tan⁻¹x = [−π/2, π/2].
   - *Sahi:* tan(±π/2) undefined hai, isliye **open interval (−π/2, π/2)** (aur cot⁻¹ ke liye **(0, π)**) hota hai!

---

## Quick Recap

- **Family 1 (Negative → −α):** sin⁻¹: [−π/2, π/2]; tan⁻¹: (−π/2, π/2); cosec⁻¹: [−π/2, π/2] − {0}.
- **Family 2 (Negative → π − α):** cos⁻¹: [0, π]; cot⁻¹: (0, π); sec⁻¹: [0, π] − {π/2}.
- **sin⁻¹x ≠ 1/sin x!**

---

## Practice Questions

1. Write the domain and principal value branch (range) of: (a) sin⁻¹x, (b) cos⁻¹x, (c) tan⁻¹x, (d) sec⁻¹x.
2. Find the principal value of: (a) sin⁻¹(√3/2), (b) cos⁻¹(−1/√2), (c) cosec⁻¹(−2).
3. Find the principal value of: (a) cot⁻¹(−√3), (b) sec⁻¹(2/√3), (c) tan⁻¹(−1).
4. Evaluate: **cos⁻¹(1/2) + 2 sin⁻¹(1/2)**.
5. Evaluate: **tan⁻¹(√3) − sec⁻¹(−2)**.
6. Evaluate: **tan⁻¹(√3) − cot⁻¹(−√3)**.
7. Find the domain of: (a) f(x) = cos⁻¹(3x − 1), (b) g(x) = sin⁻¹(x² − 3).
8. If sin⁻¹x = y, what is the exact range of y?
9. Find the value of **sin[π/3 − sin⁻¹(−1/2)]**.
10. State whether cos⁻¹(2) is defined for real values. Give reason.

---

### Answers

1. (a) sin⁻¹x: Domain [−1, 1], Range [−π/2, π/2].
   (b) cos⁻¹x: Domain [−1, 1], Range [0, π].
   (c) tan⁻¹x: Domain R, Range (−π/2, π/2).
   (d) sec⁻¹x: Domain R − (−1, 1), Range [0, π] − {π/2}.
2. (a) **π/3**; (b) π − π/4 = **3π/4**; (c) **−π/6**.
3. (a) π − π/6 = **5π/6**; (b) **π/6**; (c) **−π/4**.
4. cos⁻¹(1/2) + 2 sin⁻¹(1/2) = π/3 + 2(π/6) = π/3 + π/3 = **2π/3**.
   Jaanch: 60° + 2(30°) = 120° = 2π/3 ✅
5. tan⁻¹(√3) − sec⁻¹(−2) = π/3 − (π − π/3) = π/3 − 2π/3 = **−π/3**.
   Jaanch: 60° − 120° = −60° = −π/3 ✅
6. tan⁻¹(√3) − cot⁻¹(−√3) = π/3 − (π − π/6) = π/3 − 5π/6 = **−π/2**.
   Jaanch: 60° − 150° = −90° = −π/2 ✅
7. (a) −1 ≤ 3x − 1 ≤ 1 ⇒ 0 ≤ 3x ≤ 2 ⇒ **[0, 2/3]**.
   (b) −1 ≤ x² − 3 ≤ 1 ⇒ 2 ≤ x² ≤ 4 ⇒ √2 ≤ |x| ≤ 2 ⇒ **[−2, −√2] ∪ [√2, 2]**.
   Jaanch: At x = ±√2, x²−3 = −1; at x = ±2, x²−3 = 1 ✅
8. **−π/2 ≤ y ≤ π/2** (i.e., [−π/2, π/2]).
9. sin⁻¹(−1/2) = −π/6. Then π/3 − (−π/6) = π/3 + π/6 = π/2.
   sin(π/2) = **1**.
   Jaanch: sin(60° + 30°) = sin(90°) = 1 ✅
10. **Not defined** — because the domain of cos⁻¹x is **[−1, 1]** and 2 ∉ [−1, 1] (no real angle has cos θ = 2!).

---

Ab tum sabhi 6 inverse trig functions ke domains aur principal values bina kisi sign mistake ke nikal sakte ho!

**Agle topic mein:** Hum [Principal Value Branches, Graphs and Self-Cancellation Traps](inverse-trigonometric-functions-part2.md) padhenge — aur dekhenge ki **sin⁻¹(sin 2π/3)** ka answer 2π/3 kyun **NAHI** hota!
