> **Class:** 11 | **Subject:** Physics | **Chapter 2:** Motion in a Straight Line (Part 6)

# Sab Kuch Mila Kar: Mixed Problems & Chapter Wrap-up

> **Pichle topic se:** [Relative Velocity in One Dimension](motion-in-a-straight-line-part5.md) mein humne 2-body overtaking aur crossing problems solve kiye. Ab chalo poore chapter ke sabhi 1D kinematics tools ko ek saath mila kar multi-concept challenges solve karte hain!

---

## Yogita ka Automated Highway Testbed

Yogita ek Automated Highway Testbed ki Director hai. Wahan ek hi test run mein teen-chaar concepts ek saath milte hain — kabhi upar uthte hue hot-air balloon se drop kiya gaya sensor, kabhi do stones ka hawa mein milna, toh kabhi rest se accelerate karti car ka constant-speed bus ko pakadna!

Yogita ke control room mein ek **Decision Map** laga hai jisse har problem ka sahi approach turant click ho jata hai.

---

## Decision Map: Kaun Sa Tool Kab Lagayein?

| Problem mein kya dikhe? | Kaun sa tool lagao? |
|---|---|
| Equal distances ya equal times mein alag speeds | Equal dist -> **2v₁v₂/(v₁+v₂)**; Equal time -> **(v₁+v₂)/2** ([Topic 1](motion-in-a-straight-line.md)) |
| x(t) ya v(t) ka polynomial function diya ho | Instantaneous **v = dx/dt**, **a = dv/dt** ([Topics 1 & 2](motion-in-a-straight-line-part2.md)) |
| Multi-stage motion (accelerate -> cruise -> brake) | **v-t graph** banao; slope = a, area = displacement ([Topic 2](motion-in-a-straight-line-part2.md)) |
| Constant acceleration, single body | **v = u + at**, **s = ut + (1/2)at²**, **v² = u² + 2as**, **s_n** ([Topic 3](motion-in-a-straight-line-part3.md)) |
| Vertical motion / rising balloon / cliff / two balls under gravity | Upward positive (**a = -g**), signed **s = -h** below release ([Topic 4](motion-in-a-straight-line-part4.md)) |
| Do objects chase, overtake, ya cross kar rahe hon | **Relative kinematics:** u_rel, a_rel, s_rel (free fall mein a_rel = 0!) ([Topic 5](motion-in-a-straight-line-part5.md)) |

---

## 6 Mixed Synthesis Problems

### Problem 1: Stone Dropped from a Rising Hot-Air Balloon

A hot-air balloon is rising vertically upward with a constant speed of 10 m/s. When it is at a height of 75 m above the ground, a stone is gently released (dropped) from it. Taking g = 10 m/s², find: (a) time taken by the stone to reach the ground, (b) its speed just before hitting the ground.

**Solution:**
**Crucial catch:** Balloon upar ja raha hai, isliye release ke waqt stone ki initial velocity 0 NAHI balki **u = +10 m/s** (upward) hai!
Upward positive, origin at release point (75 m above ground):
u = +10 m/s, a = -10 m/s², ground is at **s = -75 m**.

- (a) -75 = 10 t - 5 t² => 5 t² - 10 t - 75 = 0 => t² - 2 t - 15 = 0
  (t - 5)(t + 3) = 0 => **t = 5 s**.
- (b) v = u - g t = 10 - 10(5) = **-40 m/s** (speed = **40 m/s** downward).

Jaanch:
- Jaanch: v² = u² - 2gs = 100 - 2(10)(-75) = 100 + 1500 = 1600 => v = 40 m/s ✅

---

### Problem 2: Two Stones Meeting Mid-Air (Relative Free-Fall Shortcut!)

Stone A is dropped from the top of a 100 m tall tower. At the same instant, Stone B is projected vertically upward from the ground with a speed of 25 m/s. Taking g = 10 m/s², find when and at what height above the ground they meet.

**Solution:**
Relative frame (relative to Stone A):
Dono gravity mein hain => **a_rel = (-g) - (-g) = 0**!
Initial separation s_rel = 100 m; relative approach speed u_rel = 25 - 0 = **25 m/s** (constant!).
- Meeting time: **t = 100 / 25 = 4 s**.
- Height above ground (from Stone B): h = 25(4) - (1/2)(10)(4²) = 100 - 80 = **20 m**.

Jaanch:
- Jaanch: Stone A ne 4 s mein gira: (1/2)(10)(16) = 80 m => ground se height = 100 - 80 = 20 m ✅

---

### Problem 3: Car Chasing a Constant-Speed Bus

A bus passes a traffic signal at a constant speed of 12 m/s. At the exact same instant, a car starts from rest at the signal with uniform acceleration 2 m/s² to catch the bus. Find: (a) when the car catches the bus, (b) distance travelled by both, (c) speed of the car when it overtakes the bus.

**Solution:**
At meeting time t, s_car = s_bus:
(1/2)(2) t² = 12 t => t² = 12 t => **t = 12 s** (t > 0).
- (b) Distance s = 12 × 12 = **144 m**.
- (c) Car speed v = 0 + 2(12) = **24 m/s** (notice: exactly DOUBLE the bus speed!).

Jaanch:
- Jaanch: Car avg speed = (0 + 24)/2 = 12 m/s = Bus speed, isliye dono ne exact 144 m cover kiya ✅

---

### Problem 4: Three-Stage Motion via v-t Graph

A metro train starts from rest, accelerates uniformly at 1 m/s² for 20 s, cruises at constant speed for 40 s, and decelerates uniformly at 2 m/s² to stop at the next station. Find the total distance between the two stations and the average speed of the train.

**Solution:**
- Cruise speed reached: v_max = 0 + 1(20) = 20 m/s.
- Braking time: t₃ = 20 / 2 = 10 s.
- Total time = 20 + 40 + 10 = **70 s**.
- Trapezoid area under v-t graph:
  Total distance = (1/2) × (70 + 40) × 20 = (1/2) × 110 × 20 = **1100 m (1.1 km)**.
- Average speed = 1100 / 70 = **110/7 ≈ 15.71 m/s**.

Jaanch:
- Jaanch: Stage 1 = 200 m + Stage 2 = 800 m + Stage 3 = 100 m = 1100 m ✅

---

### Problem 5: Polynomial Kinematics x(t) -> v(t) & a(t)

The position of a particle along the x-axis is x(t) = 3 t³ - 6 t² + 4 t (x in m, t in s). Find:
(a) expressions for v(t) and a(t),
(b) the time at which acceleration is zero,
(c) the velocity at that instant.

**Solution:**
- (a) v(t) = dx/dt = **9 t² - 12 t + 4**; a(t) = dv/dt = **18 t - 12**.
- (b) a(t) = 0 => 18 t - 12 = 0 => **t = 12/18 = 2/3 s**.
- (c) v(2/3) = 9(4/9) - 12(2/3) + 4 = 4 - 8 + 4 = **0 m/s**!

Jaanch:
- Jaanch: Notice v(t) = (3t - 2)², jo t = 2/3 par exact 0 hai aur uska minimum bhi wahin hai (isliye dv/dt = 0)! ✅

---

### Problem 6: n-th Second Ratio & Finding Total Distance

A body starting from rest moves with uniform acceleration. If it travels 18 m in the 5th second, find its acceleration and the total distance travelled in 6 seconds.

**Solution:**
- s_5 = 0 + (a/2)(2×5 - 1) = (9/2) a = 18 => **a = 4 m/s²**.
- Total distance in 6 s: s(6) = (1/2)(4)(6²) = 2 × 36 = **72 m**.

Jaanch:
- Jaanch: s(5) = 2(25) = 50 m; s(4) = 2(16) = 32 m; s_5 = 50 - 32 = 18 m ✅

---

## 3 Synthesis Mistakes (Mixed-Problem Traps)

### Galti 1: Rising balloon se giraye gaye stone ki initial velocity u = 0 maan lena
- **Galat:** "Dropped" likha hai toh u = 0 hoga!
- **Sahi:** "Dropped" ka matlab sirf balloon ke respect mein speed 0 hai — ground ke respect mein stone ke paas **balloon ki upward velocity (+10 m/s)** hoti hai!

### Galti 2: Release point ke neeche ground ke liye s = +75 m rakh dena
- **Galat:** u = +10, a = -10 aur s = +75 ek saath rakh dena.
- **Sahi:** Upward positive mein 75 m neeche ground ka displacement **s = -75 m** hoga!

### Galti 3: km/h ko m/s mein convert kiye bina m/s² ke saath mix kar dena
- **Galat:** u = 72 km/h aur a = -4 m/s² mein t = 72 / 4 = 18 s bol dena.
- **Sahi:** Pehle 72 × (5/18) = **20 m/s** karo, phir t = 20 / 4 = **5 s**!

---

## Mixed Practice Questions

*(Take g = 10 m/s² unless stated otherwise.)*

### Question 1
A stone is dropped from a hot-air balloon rising at 5 m/s when it is 30 m above the ground. Find the time taken by the stone to hit the ground.

**Solution:**
u = +5 m/s, a = -10 m/s², s = -30 m.
-30 = 5 t - 5 t² => t² - t - 6 = 0 => (t - 3)(t + 2) = 0 => **t = 3 s**.

Jaanch:
- Jaanch: 5(3) - 5(9) = 15 - 45 = -30 m ✅

---

### Question 2
Ball A is dropped from an 80 m tower and at the same instant Ball B is thrown upward from the ground at 40 m/s. When and at what height do they meet?

**Solution:**
a_rel = 0, u_rel = 40 m/s => t = 80 / 40 = **2 s**.
Height from ground = 40(2) - 5(4) = 80 - 20 = **60 m**.

Jaanch:
- Jaanch: Ball A falls 5(4) = 20 m => 80 - 20 = 60 m ✅

---

### Question 3
A car covers the first 100 km at 50 km/h and the next 100 km at 100 km/h. Find its average speed.

**Solution:**
Equal distances => v_avg = 2(50)(100) / (50 + 100) = 10,000 / 150 = **200/3 ≈ 66.67 km/h**.

Jaanch:
- Jaanch: Total distance = 200 km; total time = 2 + 1 = 3 h; 200 / 3 ≈ 66.67 km/h ✅

---

### Question 4
A car starting from rest accelerates uniformly at 4 m/s² for 5 s, moves at constant speed for 10 s, and stops in 4 s. Find the total distance covered.

**Solution:**
v_max = 4 × 5 = 20 m/s; total time = 5 + 10 + 4 = 19 s; cruise = 10 s.
Area = (1/2)(19 + 10)(20) = 29 × 10 = **290 m**.

Jaanch:
- Jaanch: 50 m + 200 m + 40 m = 290 m ✅

---

### Question 5
A particle's position is x(t) = t³ - 9 t² + 24 t (x in m, t in s). Find the time instants when the particle momentarily comes to rest.

**Solution:**
v(t) = dx/dt = 3 t² - 18 t + 24 = 0 => t² - 6 t + 8 = 0 => (t - 2)(t - 4) = 0.
So **t = 2 s** and **t = 4 s**.

Jaanch:
- Jaanch: v(2) = 12 - 36 + 24 = 0; v(4) = 48 - 72 + 24 = 0 ✅

---

### Question 6
A truck moving at 15 m/s passes a stationary police car. The police car immediately starts accelerating at 3 m/s². How far from the starting point does the police car catch the truck?

**Solution:**
(1/2)(3) t² = 15 t => t = 10 s.
Distance = 15 × 10 = **150 m**.

Jaanch:
- Jaanch: Police car = 1.5 × 100 = 150 m ✅

---

### Question 7
Two trains of lengths 140 m and 160 m travel in opposite directions at 18 m/s and 12 m/s. Find the time taken to completely cross each other.

**Solution:**
v_rel = 18 + 12 = 30 m/s; total length = 140 + 160 = 300 m.
t = 300 / 30 = **10 s**.

Jaanch:
- Jaanch: 30 × 10 = 300 m ✅

---

### Question 8
A bullet fired into a fixed wooden block loses half of its velocity after penetrating 3 cm. How much further will it penetrate before coming to rest (assuming uniform retardation)?

**Solution:**
From u to u/2 over 3 cm: (u/2)² = u² - 2a(3) => 6a = (3/4)u² => 2a = u²/4.
Total stopping distance d_total = u² / (2a) = 4 cm.
Further penetration = 4 - 3 = **1 cm**.

Jaanch:
- Jaanch: From u/2 to 0: (u/2)² / (2a) = (u²/4) / (u²/4) = 1 cm ✅

---

### Question 9
A ball is thrown vertically upward with speed 30 m/s. Find the total distance covered by it in the first 4 seconds.

**Solution:**
t_up = 30 / 10 = 3 s (H = 45 m).
In the 4th second (1 s falling from rest): 5 m.
Total distance = 45 + 5 = **50 m**.

Jaanch:
- Jaanch: Displacement s(4) = 120 - 80 = 40 m; distance = 45 + 5 = 50 m ✅

---

### Question 10
A car slows down from 108 km/h to 36 km/h over a distance of 100 m with uniform retardation. Find the magnitude of retardation.

**Solution:**
u = 108 × (5/18) = 30 m/s; v = 36 × (5/18) = 10 m/s.
v² = u² + 2as => 100 = 900 + 200 a => 200 a = -800 => a = -4 m/s².
Magnitude of retardation = **4 m/s²**.

Jaanch:
- Jaanch: t = (30 - 10)/4 = 5 s; avg speed = 20 m/s; 20 × 5 = 100 m ✅

---

### Question 11
State whether the following statements are True or False:
(a) A stone dropped from a rising balloon immediately begins moving downward.
(b) Area under a velocity-time graph between t₁ and t₂ gives the displacement during that interval.

**Solution:**
- (a) **False** ❌ — Stone ke paas balloon ki upward velocity hoti hai, toh woh pehle thoda upar jata hai, rukta hai, aur phir neeche girta hai!
- (b) **True** ✅ — Signed area under v-t graph hamesha displacement Δx deta hai.

Jaanch:
- Jaanch: Problem 1 mein stone u = +10 m/s se 1 s tak upar (5 m) gaya, phir neeche gira ✅

---

### Question 12
A body starts from rest with constant acceleration a. If it travels distance x₁ in the first 2 seconds and distance x₂ in the next 2 seconds, find the ratio x₂ / x₁.

**Solution:**
- x₁ = s(2) = (1/2) a (2²) = 2a.
- s(4) = (1/2) a (4²) = 8a => x₂ = s(4) - s(2) = 8a - 2a = 6a.
- Ratio x₂ / x₁ = 6a / 2a = **3**.

Jaanch:
- Jaanch: Galileo's odd-number law for equal 2-second blocks gives 1 : 3 => x₂ / x₁ = 3 ✅

---

## Chapter Wrap-up: Motion in a Straight Line at a Glance

| Topic | Core Formula / Rule | Ek Line Mein Yaad Rakho |
|---|---|---|
| [Topic 1: Position & Velocity](motion-in-a-straight-line.md) | Δx = x₂ - x₁; v = dx/dt; Equal dist: 2v₁v₂/(v₁+v₂) | Distance ≥ |Displacement|; equal distance mein harmonic mean lagta hai |
| [Topic 2: Acceleration & Graphs](motion-in-a-straight-line-part2.md) | a = dv/dt; x-t slope = v; v-t slope = a, area = Δx; a-t area = Δv | Same sign (v, a) = speedup; opposite sign = slowdown |
| [Topic 3: Kinematic Equations](motion-in-a-straight-line-part3.md) | v = u + at; s = ut + (1/2)at²; v² = u² + 2as; s_n = u + (a/2)(2n-1) | SIRF constant acceleration ke liye valid; stopping distance ∝ u² |
| [Topic 4: Free Fall](motion-in-a-straight-line-part4.md) | a = -g; H = u²/(2g); T = 2u/g; Galileo 1 : 3 : 5 : 7 | Highest point par v = 0 par a = -g; neeche ground s = -h |
| [Topic 5: Relative Velocity](motion-in-a-straight-line-part5.md) | v_AB = v_A - v_B; crossing dist = L₁ + L₂; free fall a_rel = 0 | Opposite direction mein speeds add, same direction mein subtract |
| [Topic 6: Mixed & Wrap-up](motion-in-a-straight-line-part6.md) | Rising balloon, two-ball meet, multi-stage v-t | Decision Map se sahi tool chuno aur sign convention fixed rakho |

Tumne 1D kinematics ko zero se hero tak poori tarah master kar liya hai! Agar non-uniform acceleration (a = v dv/dx), v²-x graphs, optimal α-β minimum-time profiles aur water-tap drop spacing jaise deep problems dekhna chahte ho, toh [Gehrai Mein — Advanced Level](motion-in-a-straight-line-advanced.md) zaroor padho!

**Agle chapter mein:** Seedhi line se bahar nikalkar ab hum 2D duniya mein kadam rakhenge — **Motion in a Plane** mein vectors, river-boat crossing, rain-umbrella angle, projectile motion, aur uniform circular motion seekhenge!
