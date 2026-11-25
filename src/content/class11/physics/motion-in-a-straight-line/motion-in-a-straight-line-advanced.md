> **Class:** 11 | **Subject:** Physics | **Chapter 2:** Motion in a Straight Line (Gehrai Mein — Advanced Level)

# Motion in a Straight Line — Gehrai Mein (Advanced Level)

> **Core chapter se:** Core lessons ([Topic 1](motion-in-a-straight-line.md) se [Topic 6](motion-in-a-straight-line-part6.md)) mein humne uniform acceleration, graphs, free fall, aur 1D relative velocity master kiye. Ab is **Gehrai Mein** section mein hum woh deep kinematics tools seekhenge jo variable acceleration aur high-level mechanics problems ko secondon mein tod dete hain — a = v dv/dx, v²-x & 1/v-x graphs, optimal α-β minimum-time motion, aur water-tap drop spacing!

---

## Virendra ka Rocket-Sled Dynamics Lab

Virendra ek experimental rocket-sled dynamics researcher hai. Uske test track par sled ka acceleration constant nahi rehta — kabhi velocity position x ke function v(x) ke roop mein aati hai, toh kabhi track ke do stations ke beech sled ko max acceleration α aur max braking β ke saath **sabse kam time (minimum time)** mein pahunchana hota hai!

Chalo Virendra ke chaar advanced kinematics tools ko step-by-step derive aur practice karte hain!

---

## 1. Position-Dependent Velocity & The Chain Rule: a = v (dv / dx)

Jab velocity time t ka nahi balki **position x** ka function ho — jaise v(x) — toh a = dv/dt seedha nahi lagta!

Chain rule se:
```
  a = dv / dt = (dv / dx) · (dx / dt) = v (dv / dx)
```

Ek aur zabardast form:
Since d(v²)/dx = 2 v (dv/dx), isliye:
```
  a = (1/2) · d(v²) / dx
```

**Iska matlab:** Agar v² aur x ka graph diya ho, toh uska **slope = 2a** (yani **a = slope / 2**)!

---

## 2. Special Non-Standard Graphs (v²-x, a-x, 1/v-x)

| Graph | Slope kya deta hai? | Area under graph kya deta hai? |
|---|---|---|
| **v² vs x** | **2a** (so a = slope / 2) | — |
| **a vs x** | — | **(v₂² - v₁²) / 2** (kyunki a dx = v dv!) |
| **1/v vs x** | — | **Time elapsed Δt** (kyunki dt = dx / v!) |

---

## 3. Optimal Acceleration–Retardation Profile (Minimum Time Between Two Stops)

Maan lo ek train ya sled ko rest se chal kar distance **s** door agle station par rest par rukna hai. Uska max acceleration **α** hai aur max deceleration **β** hai. Minimum time tab lagta hai jab woh pehle full **α** se accelerate kare (time t₁ tak, peak speed v_max tak) aur phir turant full **β** se brake lagaye (time t₂ tak, rest tak)!

```
  v
  ^
  :        v_max
  :         /\
  :  slope /  \ slope
  :   +α  /    \ -β
  :      /      \
  0 ----+--------+----> t
        t₁      t₁ + t₂ = T
```

- v_max = α t₁ = β t₂  =>  **t₁ / t₂ = β / α**
- Total time T = t₁ + t₂ = v_max (1/α + 1/β) = v_max (α + β) / (α β)
  => **v_max = (α β / (α + β)) T**
- Total distance s = Area of v-t triangle = (1/2) T v_max = (1/2) [α β / (α + β)] T²
  => **T_min = √( 2 s (α + β) / (α β) )**
  => **v_max = √( 2 s α β / (α + β) )**

---

## 4. Collision Avoidance (Minimum Separation Condition)

Agar Car A (speed u_A) peeche se Car B (speed u_B < u_A) ki taraf aa rahi hai, beech ki initial doori **d** hai, aur Car A brake lagati hai (deceleration **a**):
Relative frame mein u_rel = u_A - u_B, a_rel = -a.
Collision tabhi bachega jab Car A ki relative velocity zero hone (v_rel = 0) se pehle uska relative stopping distance ≤ d ho:
```
  (u_A - u_B)² / (2 a) ≤ d   =>   a_min = (u_A - u_B)² / (2 d)
```

---

## 6 Deep Solved Problems

### Problem 1: Acceleration from v(x) via a = v (dv / dx)

A particle moves along the x-axis such that its velocity depends on position as:
(a) v(x) = √(16 + 6 x)
(b) v(x) = 4 x²
Find the acceleration a(x) in both cases.

**Solution:**
**(a) v(x) = √(16 + 6 x):**
Square both sides: v² = 16 + 6 x.
Differentiate wrt x: d(v²)/dx = 6.
Since a = (1/2) d(v²)/dx => **a = 6 / 2 = 3 m/s²** (constant!).

**(b) v(x) = 4 x²:**
dv/dx = 8 x.
a = v (dv/dx) = (4 x²) (8 x) = **32 x³**.

Jaanch:
- Jaanch: (a) Compare v² = 16 + 6x with v² = u² + 2ax => 2a = 6 => a = 3 m/s² ✅

---

### Problem 2: Reading Acceleration from a v² vs x Graph

The v² vs x graph of a particle is a straight line passing through (x = 0 m, v² = 4 m²/s²) and (x = 10 m, v² = 44 m²/s²). Find its initial velocity u and acceleration a.

**Solution:**
- At x = 0: v² = u² = 4 => **u = 2 m/s**.
- Slope of v² vs x line = (44 - 4) / (10 - 0) = 40 / 10 = 4 m/s².
- Since slope = 2a => **a = 4 / 2 = 2 m/s²**.

Jaanch:
- Jaanch: v² = u² + 2ax = 4 + 2(2)(10) = 44 m²/s² ✅

---

### Problem 3: Optimal α–β Minimum-Time Sled Run

A rocket sled must travel s = 300 m from rest to rest with maximum acceleration α = 2 m/s² and maximum braking deceleration β = 4 m/s². Find: (a) the minimum time T_min, (b) the peak velocity v_max, (c) the acceleration time t₁ and braking time t₂.

**Solution:**
- (a) T_min = √(2 s (α + β) / (α β)) = √(2 × 300 × (2 + 4) / (2 × 4)) = √(3600 / 8) = √450 = **15 √2 ≈ 21.21 s**.
- (b) v_max = √(2 s α β / (α + β)) = √(2 × 300 × 8 / 6) = √800 = **20 √2 ≈ 28.28 m/s**.
- (c) t₁ = v_max / α = 20√2 / 2 = **10 √2 s**; t₂ = v_max / β = 20√2 / 4 = **5 √2 s**.

Jaanch:
- Jaanch: t₁ + t₂ = 15√2 s = T_min; Area = (1/2) × 15√2 × 20√2 = (1/2) × 600 = 300 m ✅

---

### Problem 4: Water Drops Falling at Regular Intervals from a Tap

Water drops fall at regular intervals from a tap 5 m above the floor. At the exact instant the 1st drop hits the floor, the 3rd drop is just beginning to fall from the tap. Taking g = 10 m/s², find the height of the 2nd drop above the floor at that instant.

**Solution:**
- Time for 1st drop to fall 5 m: 5 = (1/2)(10) t² => t² = 1 => **t = 1 s**.
- Since 3rd drop is just leaving when 1st hits the floor, there are **2 equal intervals** between drop 1 and drop 3 => each interval Δt = 1 / 2 = **0.5 s**.
- So the 2nd drop has been falling for 0.5 s:
  Distance fallen by 2nd drop = (1/2)(10)(0.5²) = 5 × 0.25 = **1.25 m** below the tap.
- Height of 2nd drop above the floor = 5 - 1.25 = **3.75 m**.

Jaanch:
- Jaanch: Galileo odd-number law for 2 equal intervals: top gap : bottom gap = 1 : 3 => 1.25 m : 3.75 m (sum = 5 m) ✅

---

### Problem 5: Time Elapsed from a 1/v vs x Graph

For a particle moving from x = 0 m to x = 20 m, the graph of (1/v) (in s/m) versus x (in m) is a straight line rising from (0, 0.2) to (20, 0.6). Find the total time taken to travel from x = 0 to x = 20 m.

**Solution:**
Since dt = dx / v, the area under the (1/v) vs x graph equals total time Δt!
Trapezoid area = (1/2) × (0.2 + 0.6) × 20 = (1/2) × 0.8 × 20 = **8.0 s**.

Jaanch:
- Jaanch: Average (1/v) = 0.4 s/m over 20 m => 0.4 × 20 = 8.0 s ✅

---

### Problem 6: Collision Avoidance Between Two Trains on the Same Track

Train A moves at 30 m/s on a straight track and spots Train B moving in the same direction at 10 m/s, at a distance of 80 m ahead. What minimum constant deceleration must Train A apply to avoid a collision?

**Solution:**
Relative frame: u_rel = 30 - 10 = 20 m/s, d = 80 m.
To just avoid collision (v_rel = 0 at s_rel = 80 m):
a_min = u_rel² / (2 d) = 20² / (2 × 80) = 400 / 160 = **2.5 m/s²**.

Jaanch:
- Jaanch: Time to match speeds t = 20 / 2.5 = 8 s; Train B travels 10×8 = 80 m (at 160 m mark); Train A travels 30(8) - 0.5(2.5)(64) = 240 - 80 = 160 m (just touches!) ✅

---

## 3 Advanced Mistakes

### Galti 1: dv/dx ko hi acceleration maan lena
- **Galat:** v(x) = 4x² diya hai toh a = dv/dx = 8x likh dena.
- **Sahi:** Acceleration time-derivative dv/dt hai, position-derivative nahi! Sahi formula hai **a = v (dv/dx) = (4x²)(8x) = 32x³**!

### Galti 2: v² vs x graph ka slope seedha acceleration a padh lena
- **Galat:** v² vs x line ka slope 4 aaya toh a = 4 m/s².
- **Sahi:** v² = u² + 2ax => slope = **2a**! Isliye **a = slope / 2 = 2 m/s²**!

### Galti 3: Optimal α–β problem mein t₁ = t₂ maan lena jab α ≠ β
- **Galat:** Total time T hai toh aadha time accelerate aur aadha brake karega.
- **Sahi:** α t₁ = β t₂ => **t₁ / t₂ = β / α**! Tez brake (bada β) ka matlab kam braking time t₂ aur zyada acceleration time t₁!

---

## Practice Questions (Advanced)

### Question 1
A particle moves along the x-axis with velocity v(x) = 5 √x (in m/s). Find its acceleration a.

**Solution:**
v² = 25 x => d(v²)/dx = 25.
a = (1/2) d(v²)/dx = **12.5 m/s²** (constant!).

Jaanch:
- Jaanch: Compare v² = 25x with v² = 0 + 2ax => 2a = 25 => a = 12.5 m/s² ✅

---

### Question 2
The velocity of a particle is given by v(x) = 10 - 2 x (in m/s). Find its acceleration when it is at x = 3 m.

**Solution:**
dv/dx = -2. At x = 3 m, v = 10 - 6 = 4 m/s.
a = v (dv/dx) = 4 × (-2) = **-8 m/s²**.

Jaanch:
- Jaanch: v > 0 aur dv/dx < 0 => particle slow ho raha hai, so negative a = -8 m/s² ✅

---

### Question 3
A particle starts from rest at x = 0 and its acceleration varies with position as a(x) = 6 x (m/s²). Using the area under the a-x graph, find its speed at x = 4 m.

**Solution:**
Area under a-x triangle from x = 0 to 4 m (height = 6×4 = 24):
(v² - u²) / 2 = (1/2) × 4 × 24 = 48.
Since u = 0: v² = 96 => **v = √96 = 4 √6 ≈ 9.80 m/s**.

Jaanch:
- Jaanch: Integral of 6x dx from 0 to 4 = [3x²] = 48 = v²/2 => v² = 96 ✅

---

### Question 4
A car accelerates from rest at α = 3 m/s² and then decelerates at β = 6 m/s² to come to rest. If the total time of the journey is 12 s, find the maximum velocity reached and the total distance travelled.

**Solution:**
- v_max = (α β / (α + β)) T = (3 × 6 / 9) × 12 = 2 × 12 = **24 m/s**.
- Total distance s = (1/2) × T × v_max = (1/2) × 12 × 24 = **144 m**.

Jaanch:
- Jaanch: t₁ = 24/3 = 8 s, t₂ = 24/6 = 4 s; t₁ + t₂ = 12 s; s = 96 + 48 = 144 m ✅

---

### Question 5
Water drops fall at regular intervals from a roof 16 m high. When the 1st drop hits the ground, the 5th drop is just leaving the roof. Find the height of the 3rd drop above the ground (g = 10 m/s²).

**Solution:**
There are 4 equal intervals between drop 1 and drop 5.
Galileo ratio for 4 equal intervals: 1 : 3 : 5 : 7 (total = 16 parts = 16 m => 1 part = 1 m!).
3rd drop has fallen for 2 intervals => distance below roof = 1 + 3 = 4 m.
Height above ground = 16 - 4 = **12 m**.

Jaanch:
- Jaanch: Drop 1 time = √(32/10) = √3.2 s; Drop 3 time = (1/2)√3.2 => falls (1/4) of 16 m = 4 m => 12 m above ground ✅

---

### Question 6
A train moving at 40 m/s spots a slower train moving at 20 m/s in the same direction, 100 m ahead. Find the minimum deceleration needed to avoid a crash.

**Solution:**
u_rel = 40 - 20 = 20 m/s, d = 100 m.
a_min = 20² / (2 × 100) = 400 / 200 = **2 m/s²**.

Jaanch:
- Jaanch: t = 20 / 2 = 10 s; slow train = 200 m (at 300 m); fast train = 400 - 100 = 300 m ✅

---

### Question 7
The relation between time t and position x of a particle is t = α x² + β x, where α and β are positive constants. Express the acceleration a in terms of velocity v and α.

**Solution:**
Differentiate both sides wrt x:
dt / dx = 2 α x + β => 1 / v = 2 α x + β => v = (2 α x + β)⁻¹.
Differentiate wrt t:
a = dv / dt = -(2 α x + β)⁻² · (2 α) · (dx / dt) = -v² · (2 α) · v = **-2 α v³**.

Jaanch:
- Jaanch: Dimensions: [α] = [T L⁻²], [v³] = [L³ T⁻³] => [α v³] = [L T⁻²] = [a] ✅

---

### Question 8
A particle's v² vs x graph is a straight line dropping from (x = 0, v² = 100 m²/s²) to (x = 25 m, v² = 0). Find its deceleration and the time taken to come to rest.

**Solution:**
- Slope = (0 - 100) / 25 = -4 m/s² => 2a = -4 => **a = -2 m/s²** (deceleration = **2 m/s²**).
- Initial velocity u = √100 = 10 m/s => time to stop t = 10 / 2 = **5 s**.

Jaanch:
- Jaanch: s = (10 + 0)/2 × 5 = 25 m ✅

---

### Question 9
For a particle moving from x = 2 m to x = 10 m, the graph of (1/v) versus x is a horizontal line at 1/v = 0.25 s/m. Find the time taken and the constant speed of the particle.

**Solution:**
- Constant speed v = 1 / 0.25 = **4 m/s**.
- Time = Area under (1/v) vs x = 0.25 × (10 - 2) = **2 s**.

Jaanch:
- Jaanch: Distance = 8 m at 4 m/s => 8 / 4 = 2 s ✅

---

### Question 10
A ball is dropped from a height H = 20 m onto a hard floor. After each bounce, its speed drops to half of its impact speed. Find the total time it takes before hitting the floor for the **second** time (g = 10 m/s²).

**Solution:**
- First fall: t₁ = √(2H / g) = √(40 / 10) = **2 s**; impact speed v₁ = g t₁ = 20 m/s.
- Rebound speed: u₂ = v₁ / 2 = 10 m/s.
- Time of flight for the first bounce (up and back to floor): t₂ = 2 u₂ / g = 2(10) / 10 = **2 s**.
- Total time until second impact = 2 + 2 = **4 s**.

Jaanch:
- Jaanch: First fall 2 s + bounce up 1 s + bounce down 1 s = 4 s ✅

---

### Question 11
A particle starts from rest with acceleration a(t) = 6 t (in m/s²). Find its velocity and displacement at t = 2 s.

**Solution:**
- v(t) is the area under the a-t triangle from 0 to t: v(t) = (1/2) t (6t) = **3 t²** => v(2) = 3(4) = **12 m/s**.
- Since d(t³)/dt = 3 t², displacement x(t) = **t³** => x(2) = 2³ = **8 m**.

Jaanch:
- Jaanch: dx/dt = 3t² = v(t); dv/dt = 6t = a(t); x(0) = 0, v(0) = 0 ✅

---

### Question 12
A body starts from rest and travels distance s = 450 m with maximum acceleration α = 1 m/s² and maximum retardation β = 2 m/s². Find the minimum time T_min to come to rest at the end.

**Solution:**
T_min = √(2 s (α + β) / (α β)) = √(2 × 450 × 3 / (1 × 2)) = √(2700 / 2) = √1350 = **15 √6 ≈ 36.74 s**.

Jaanch:
- Jaanch: v_max = (αβ/(α+β)) T_min = (2/3)(15√6) = 10√6 m/s; Area = (1/2)(15√6)(10√6) = 75 × 6 = 450 m ✅

---

Shabaash! Tumne 1D kinematics ko variable acceleration aur optimal profiles tak conquer kar liya hai. Wapas chapter overview ke liye [Mixed Problems & Chapter Wrap-up](motion-in-a-straight-line-part6.md) dekho!
