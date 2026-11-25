> **Class:** 11 | **Subject:** Physics | **Chapter 4:** Laws of Motion (Part 3)

# Equilibrium, Free-Body Diagrams & Connected Bodies

> **Pichle topic se:** [Newton's Third Law, Impulse & Momentum Conservation](laws-of-motion-part2.md) mein humne dekha ki forces pairs mein aate hain. Ab hum mechanics ka sabse powerful problem-solving weapon seekhenge — **Free-Body Diagrams (FBD)** — jisse koi bhi pulley, lift, ya connected-block problem ekdam systematic ho jati hai!

---

## Qamar ka Crane-Rigging & Lift Check

Qamar ek construction-crane rigging engineer hai. Jab ek **60 kg** technician building lift mein weighing scale par khada hota hai:
- Lift upar accelerate ho (a = +2 m/s²) toh scale **720 N (72 kg)** dikhata hai!
- Lift neeche accelerate ho (a = -2 m/s²) toh scale **480 N (48 kg)** dikhata hai!
- Lift ki cable toot jaye (free fall, a = g) toh scale **0 N (weightlessness!)** dikhata hai!

Aur jab crane pulley ke dono taraf **4 kg** aur **6 kg** blocks latakte hain, toh rope mein tension 40 N ya 60 N nahi balki exact **48 N** hoti hai! Yeh sab ek clean **Free-Body Diagram** se turant nikal aata hai.

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Equilibrium | Jab body par net external force zero ho: ΣF_x = 0, ΣF_y = 0 (rest ya constant velocity) |
| Lami's Theorem | 3 concurrent equilibrium forces ke liye: F₁ / sin α = F₂ / sin β = F₃ / sin γ |
| Free-Body Diagram (FBD) | Sirf EK chosen body ko alag bana kar **us par lagne wale** sabhi external forces dikhana |
| Normal Reaction (N) | Contact surface dwara body par surface ke **perpendicular** lagaya gaya push |
| Tension (T) | Khinchi hui light (massless) rassi dwara har end par **andar ki taraf** lagaya gaya pull |
| Atwood Machine | Frictionless massless pulley par rassi se latke do masses m₁ aur m₂ ka system |

---

## 1. Equilibrium of Concurrent Forces & Lami's Theorem

Jab teen ya zyada forces ek hi point par lag kar equilibrium banate hain:
**ΣF_x = 0** aur **ΣF_y = 0**.

**Lami's Theorem (3 forces F₁, F₂, F₃ in equilibrium):**
Agar F₁ ke saamne angle α, F₂ ke saamne β, aur F₃ ke saamne γ ho:
```
  F₁ / sin α  =  F₂ / sin β  =  F₃ / sin γ
```

---

## 2. How to Draw a Foolproof Free-Body Diagram (FBD)

1. Jis body ka motion chahiye, use mentally duniya se **alag** kar lo.
2. Sirf **us body par lagne wale** forces banao (body dwara doosron par lagaye gaye forces KABHI nahi!).
   - Gravity: **m g** (hamesha vertically downward).
   - Contact surfaces: **Normal N** (surface ke perpendicular, body ki taraf push).
   - Strings/ropes: **Tension T** (rassi ke along, body se door / pull).
3. Acceleration ki direction mein axis choose karo aur **F_net = m a** likho!

---

## 3. Apparent Weight in a Lift

Scale hamesha **Normal reaction N** padhta hai (weight mg nahi!):
- **Accelerating UP (a):** N - m g = m a  =>  **N = m (g + a)** (bhaari lagta hai!)
- **Accelerating DOWN (a):** m g - N = m a  =>  **N = m (g - a)** (halka lagta hai!)
- **Constant velocity (a = 0):** **N = m g**
- **Free fall (a = g downward):** **N = m (g - g) = 0** (apparent weightlessness!)

---

## 4. Connected Blocks & Atwood Machine

### A. Atwood Machine (m₂ > m₁ on smooth massless pulley)
- FBD of m₂ (going down): m₂ g - T = m₂ a
- FBD of m₁ (going up): T - m₁ g = m₁ a
Dono equations add karne par T cancel ho jata hai:
```
  Acceleration:   a = (m₂ - m₁) g / (m₁ + m₂)
  Tension:        T = (2 m₁ m₂ g) / (m₁ + m₂)
```
*(Shortcut: **a = Net Pulling Force / Total Mass**!)*

### B. Blocks in Contact on a Smooth Floor
Agar force F blocks m₁, m₂, m₃ ko push kare:
- Common acceleration: **a = F / (m₁ + m₂ + m₃)**
- Har contact force nikalne ke liye sirf aage wale blocks ka FBD banao!

---

## Solved Examples

### Example 1: Qamar's Lift Readings (60 kg Technician)

A 60 kg person stands on a weighing machine inside a lift (g = 10 m/s²). Find the scale reading (in N) when the lift: (a) accelerates upward at 2 m/s², (b) accelerates downward at 2 m/s², (c) falls freely.

**Solution:**
- (a) Upward: N = 60 (10 + 2) = 60 × 12 = **720 N** (72 kg-wt).
- (b) Downward: N = 60 (10 - 2) = 60 × 8 = **480 N** (48 kg-wt).
- (c) Free fall (a = 10 m/s² down): N = 60 (10 - 10) = **0 N**.

Jaanch:
- Jaanch: Constant velocity par 600 N; upar accelerate par > 600 N (720 N), neeche par < 600 N (480 N) ✅

---

### Example 2: Atwood Machine (4 kg and 6 kg)

Two masses m₁ = 4 kg and m₂ = 6 kg are connected by a light inextensible string over a smooth massless pulley (g = 10 m/s²). Find their acceleration and the tension in the string.

**Solution:**
- a = (6 - 4) × 10 / (4 + 6) = 20 / 10 = **2 m/s²**.
- T = 2(4)(6)(10) / (4 + 6) = 480 / 10 = **48 N**.

Jaanch:
- Jaanch: Check 4 kg: T - 40 = 48 - 40 = 8 = 4(2); Check 6 kg: 60 - T = 60 - 48 = 12 = 6(2) ✅

---

### Example 3: Three Connected Blocks Pushed on a Smooth Floor

Three blocks of masses 2 kg, 3 kg, and 5 kg lie in contact on a smooth horizontal floor. A horizontal force of 30 N pushes the 2 kg block. Find: (a) common acceleration, (b) contact force between 2 kg and 3 kg blocks, (c) contact force between 3 kg and 5 kg blocks.

**Solution:**
- (a) Total mass = 2 + 3 + 5 = 10 kg => a = 30 / 10 = **3 m/s²**.
- (b) Force N₁₂ pushes the remaining (3 + 5 = 8 kg) blocks: N₁₂ = 8 × 3 = **24 N**.
- (c) Force N₂₃ pushes only the last (5 kg) block: N₂₃ = 5 × 3 = **15 N**.

Jaanch:
- Jaanch: FBD of 2 kg: 30 - 24 = 6 = 2(3); FBD of 3 kg: 24 - 15 = 9 = 3(3) ✅

---

### Example 4: Equilibrium of a Suspended Mass (String Tension)

A 6 kg lamp is suspended from a ceiling by a rope. A horizontal force of 80 N pulls the lamp sideways until it stays in equilibrium at an angle θ with the vertical (g = 10 m/s²). Find the tension T in the rope and angle θ.

**Solution:**
Weight W = 6 × 10 = 60 N (downward); Horizontal pull = 80 N (right).
In equilibrium:
- T cos θ = 60 N
- T sin θ = 80 N
Squaring and adding: T² = 60² + 80² = 3600 + 6400 = 10,000 => **T = 100 N**.
Dividing: tan θ = 80 / 60 = 4 / 3 => **θ = 53°** with the vertical.

Jaanch:
- Jaanch: 60-80-100 (3-4-5 × 20) triangle ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Body dwara doosron par lagaye gaye forces ko uske apne FBD mein bana dena
- **Galat:** Block A ke FBD mein "A pushes B" force bhi dikha dena.
- **Sahi:** Block A ke FBD mein sirf woh forces aate hain jo **doosre objects A par lagate hain**!

### Galti 2: Accelerating pulley system mein tension T = m g maan lena
- **Galat:** 6 kg block latka hai toh rope mein tension T = 60 N hogi.
- **Sahi:** T = mg sirf **equilibrium (a = 0)** mein hota hai! Accelerating Atwood machine mein T dono weights ke beech (40 N < 48 N < 60 N) hoti hai!

### Galti 3: Inclined plane par Normal force ko vertically upward bana dena
- **Galat:** Inclined plane par N = m g (vertically up).
- **Sahi:** Normal reaction hamesha **surface ke perpendicular** hota hai, isliye smooth incline par **N = m g cos θ**!

---

## Quick Recap

- **Equilibrium:** ΣF_x = 0, ΣF_y = 0; Lami's theorem for 3 concurrent forces.
- **Lift apparent weight:** N = m(g + a) accelerating up; N = m(g - a) accelerating down; N = 0 in free fall.
- **Atwood machine:** a = (m₂ - m₁)g / (m₁ + m₂); T = 2m₁m₂g / (m₁ + m₂).
- **Universal Shortcut:** For any single-string connected system, **a = (Net Driving Force) / (Total Mass)**.

---

## Practice Questions

*(Take g = 10 m/s² unless stated otherwise.)*

### Question 1
A 50 kg boy stands in a lift moving upward with uniform acceleration of 4 m/s². Find the apparent weight shown by the weighing scale (in N).

**Solution:**
N = m (g + a) = 50 (10 + 4) = 50 × 14 = **700 N**.

Jaanch:
- Jaanch: True weight 500 N + extra ma (200 N) = 700 N ✅

---

### Question 2
A 50 kg boy stands in a lift moving **upward** with a uniform **deceleration** of 3 m/s². Find the scale reading.

**Solution:**
Upward deceleration means acceleration is **downward** (a = -3 m/s²)!
N = m (g - 3) = 50 × 7 = **350 N**.

Jaanch:
- Jaanch: Acceleration downward hai => scale reading true weight (500 N) se kam (350 N) hogi ✅

---

### Question 3
Two blocks of masses 3 kg and 7 kg are connected by a light string over a smooth pulley. Find their acceleration and the tension in the string.

**Solution:**
- a = (7 - 3)(10) / (3 + 7) = 40 / 10 = **4 m/s²**.
- T = 2(3)(7)(10) / 10 = **42 N**.

Jaanch:
- Jaanch: 3 kg: 42 - 30 = 12 = 3(4); 7 kg: 70 - 42 = 28 = 7(4) ✅

---

### Question 4
A 4 kg block lies on a smooth horizontal table and is connected by a light string over a smooth edge pulley to a hanging 1 kg block. Find the acceleration of the system and tension in the string.

**Solution:**
Driving force = weight of hanging 1 kg = 10 N; Total mass = 4 + 1 = 5 kg.
- a = 10 / 5 = **2 m/s²**.
- Tension pulls the 4 kg block on the table: T = 4 × 2 = **8 N**.

Jaanch:
- Jaanch: Hanging 1 kg: 10 - T = 1(2) => T = 8 N ✅

---

### Question 5
Two blocks of masses 4 kg and 6 kg are connected by a string on a smooth horizontal floor. A force of 50 N pulls the 6 kg block forward. Find the tension in the string between them.

**Solution:**
a = 50 / (4 + 6) = 5 m/s².
String pulls the rear 4 kg block: T = 4 × 5 = **20 N**.

Jaanch:
- Jaanch: Front 6 kg: 50 - 20 = 30 = 6(5) ✅

---

### Question 6
A smooth inclined plane makes an angle of 30° with the horizontal. A 5 kg block is released from rest on it. Find its acceleration down the plane and the Normal reaction from the plane.

**Solution:**
- Component along plane = m g sin 30° => a = g sin 30° = 10(1/2) = **5 m/s²**.
- Normal reaction N = m g cos 30° = 50 (√3 / 2) = **25 √3 ≈ 43.3 N**.

Jaanch:
- Jaanch: a = g sin θ is independent of mass ✅

---

### Question 7
A monkey of mass 20 kg climbs up a rope with an acceleration of 2 m/s². If the rope can withstand a maximum tension of 300 N, will the rope break?

**Solution:**
T - m g = m a => T = 20(10 + 2) = **240 N**.
Since 240 N < 300 N, the rope will **NOT break**.

Jaanch:
- Jaanch: 200 N weight + 40 N upward acceleration force = 240 N < 300 N ✅

---

### Question 8
A 10 kg mass is suspended by two strings making angles of 30° and 60° with the horizontal ceiling. Find the tensions T₁ (at 30°) and T₂ (at 60°).

**Solution:**
Angle between strings = 90°!
Horizontal equilibrium: T₁ cos 30° = T₂ cos 60° => T₁ (√3/2) = T₂ (1/2) => T₂ = √3 T₁.
Vertical equilibrium: T₁ sin 30° + T₂ sin 60° = 100 N
T₁ (1/2) + (√3 T₁)(√3/2) = 100 => (1/2 + 3/2) T₁ = 100 => 2 T₁ = 100 => **T₁ = 50 N**.
Then **T₂ = 50 √3 ≈ 86.6 N**.

Jaanch:
- Jaanch: Lami's theorem check: T₁/sin 150° = 50/0.5 = 100; T₂/sin 120° = 50√3/(√3/2) = 100; W/sin 90° = 100 ✅

---

### Question 9
In an Atwood machine with 2 kg and 6 kg masses, find the total downward force exerted by the string on the pulley clamp.

**Solution:**
- a = (6 - 2)(10) / 8 = 5 m/s².
- T = 2(2)(6)(10) / 8 = 30 N.
- Both sides of the string pull the pulley downward => Force on pulley = **2 T = 60 N**.

Jaanch:
- Jaanch: Notice 2T = 60 N < total weight (80 N), kyunki centre of mass neeche accelerate ho raha hai! ✅

---

### Question 10
A block of mass 5 kg is held at rest on a smooth 37° incline (sin 37° = 3/5) by a string parallel to the incline. Find the tension in the string.

**Solution:**
In equilibrium along the incline:
T = m g sin 37° = 5 × 10 × (3/5) = **30 N**.

Jaanch:
- Jaanch: 50 × 0.6 = 30 N ✅

---

### Question 11
State whether the following statements are True or False:
(a) When a lift moves downward with constant velocity, a person's apparent weight is less than their true weight.
(b) In a massless inextensible string passing over a frictionless pulley, the tension is the same throughout the string.

**Solution:**
- (a) **False** ❌ — Constant velocity ka matlab a = 0 => N = m g (true weight ke bilkul barabar!).
- (b) **True** ✅ — Massless string aur frictionless pulley par tension har point par uniform rehti hai.

Jaanch:
- Jaanch: Apparent weight sirf acceleration par depend karta hai, velocity ki direction par nahi ✅

---

### Question 12
Two blocks of masses 2 kg and 8 kg are connected by a light string over a smooth pulley. Starting from rest, how far does the 8 kg block descend in 2 seconds?

**Solution:**
a = (8 - 2)(10) / (2 + 8) = 60 / 10 = 6 m/s².
s = (1/2) a t² = (1/2)(6)(2²) = **12 m**.

Jaanch:
- Jaanch: 0.5 × 6 × 4 = 12 m ✅

---

Free-Body Diagrams ab tumhari superpower ban chuke hain!

**Agle topic mein:** Smooth surfaces toh sirf ideal duniya mein hoti hain — asli duniya mein **Friction** sab kuch badal deta hai! Chalo padhte hain [Friction: Static, Kinetic, Rolling & Rough Inclined Planes](laws-of-motion-part4.md)!
