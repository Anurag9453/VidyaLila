> **Class:** 11 | **Subject:** Physics | **Chapter 3:** Motion in a Plane (Part 5)

# Sab Kuch Mila Kar: Mixed Problems & Chapter Wrap-up

> **Pichle topic se:** [Uniform Circular Motion & Centripetal Acceleration](motion-in-a-plane-part4.md) mein humne circle par ghoomne wale objects ka angular aur centripetal physics seekha. Ab chalo poore chapter ke sabhi 2D tools — vectors, 2D relative velocity, projectiles, aur circular motion — ko ek saath mila kar multi-concept challenges solve karte hain!

---

## Harendra ka Search-and-Rescue Drone Operations Desk

Harendra ek Search-and-Rescue Drone Operations Lead hai. Ek hi mission mein use chaar alag 2D problems solve karni padti hain:
1. Crosswind mein drone ka resultant vector nikalna,
2. Flooded river paar karne ke liye rescue boat ka shortest-path angle set karna,
3. Udte hue aircraft se relief packet girane ka exact release distance nikalna,
4. Aur base ke upar drone ke circular loitering path ka centripetal acceleration check karna!

Isliye Harendra ke paas ek **Decision Map** hai — dekhte hi sahi 2D formula click ho jata hai.

---

## Decision Map: Kaun Sa 2D Tool Kab Lagayein?

| Problem mein kya dikhe? | Kaun sa tool lagao? |
|---|---|
| Do forces/vectors angle θ par diye hon | **R = √(A² + B² + 2AB cos θ)** ya components **î, ĵ** ([Topic 1](motion-in-a-plane.md)) |
| 2D polynomial r(t) diya ho | **v(t) = dr/dt**, **a(t) = dv/dt** component-by-component ([Topic 2](motion-in-a-plane-part2.md)) |
| Rain-man ya River-boat crossing | Rain: **tan θ = v_m/v_r** forward; River: shortest time **d/v_b**, shortest path **d/√(v_b² - v_r²)** ([Topic 2](motion-in-a-plane-part2.md)) |
| Ground-to-ground launch (u, θ) | **T = 2u sin θ / g**, **H = u² sin² θ / (2g)**, **R = u² sin 2θ / g** ([Topic 3](motion-in-a-plane-part3.md)) |
| Horizontal launch / drop from plane at height h | **t = √(2h/g)**, **R = u √(2h/g)** ([Topic 3](motion-in-a-plane-part3.md)) |
| Circular path (uniform ya speeding up) | **ω = 2π f**, **v = ω r**, **a_c = v²/r**, **a_net = √(a_c² + a_t²)** ([Topic 4](motion-in-a-plane-part4.md)) |

---

## 6 Mixed Synthesis Problems

### Problem 1: Relief Packet Dropped from a Horizontal Rescue Plane

A rescue plane flies horizontally at a height of 500 m with a constant speed of 100 m/s. How far horizontally before a flood-hit camp should the pilot release a food packet so that it lands directly on the camp? (Take g = 10 m/s².)

**Solution:**
Packet ko plane ki horizontal speed **u_x = 100 m/s** aur vertical speed **u_y = 0** milti hai!
- Falling time: t = √(2h / g) = √(1000 / 10) = √100 = **10 s**.
- Horizontal distance covered before landing: R = u_x × t = 100 × 10 = **1000 m (1 km)** before the camp!

Jaanch:
- Jaanch: 10 s mein packet neeche gira (1/2)(10)(100) = 500 m aur aage gaya 100 × 10 = 1000 m ✅

---

### Problem 2: Projectile at 37° (3-4-5 Triangle Launch)

A projectile is launched from the ground at u = 50 m/s at θ = 37° (sin 37° = 3/5, cos 37° = 4/5, g = 10 m/s²). Find: (a) Time of flight T, (b) Maximum height H, (c) Horizontal range R.

**Solution:**
- u_x = 50(4/5) = **40 m/s**; u_y = 50(3/5) = **30 m/s**.
- (a) T = 2 u_y / g = 2(30) / 10 = **6 s**.
- (b) H = u_y² / (2g) = 900 / 20 = **45 m**.
- (c) R = u_x × T = 40 × 6 = **240 m**.

Jaanch:
- Jaanch: Formula check R = u² sin 2θ / g = 2500 × 2(3/5)(4/5) / 10 = 250 × (24/25) = 240 m ✅

---

### Problem 3: 2D Polynomial Position Vector r(t)

The position of a drone in the xy-plane is r(t) = (3 t î + 2 t² ĵ) m. Find:
(a) velocity vector and speed at t = 2 s,
(b) acceleration vector at t = 2 s.

**Solution:**
- (a) v(t) = dr/dt = (3 î + 4 t ĵ) m/s.
  At t = 2 s: **v(2) = (3 î + 8 ĵ) m/s**.
  Speed = √(3² + 8²) = **√73 ≈ 8.54 m/s**.
- (b) a(t) = dv/dt = **4 ĵ m/s²** (constant along +y!).

Jaanch:
- Jaanch: x = 3t => uniform speed 3 m/s; y = 2t² = (1/2)(4)t² => constant a_y = 4 m/s² ✅

---

### Problem 4: River Crossing Shortest Path vs Shortest Time

A 400 m wide river flows at 6 m/s. A rescue boat has a speed of 10 m/s in still water. Find the difference between the shortest-path crossing time and the shortest-time crossing.

**Solution:**
- Shortest time: t_min = 400 / 10 = **40 s**.
- Shortest path (zero drift): v_net = √(10² - 6²) = 8 m/s => t_path = 400 / 8 = **50 s**.
- Difference = 50 - 40 = **10 s**.

Jaanch:
- Jaanch: 6-8-10 right triangle; 50 - 40 = 10 s ✅

---

### Problem 5: Vector Addition & Magnitude of Resultant

Two vectors are given by A = 2 î + 3 ĵ and B = 4 î - ĵ. Find: (a) A + B, (b) |A + B|, (c) unit vector along A + B.

**Solution:**
- (a) A + B = (2 + 4) î + (3 - 1) ĵ = **6 î + 2 ĵ**.
- (b) |A + B| = √(6² + 2²) = √(36 + 4) = √40 = **2 √10**.
- (c) Unit vector = (6 î + 2 ĵ) / (2√10) = **(3 / √10) î + (1 / √10) ĵ**.

Jaanch:
- Jaanch: (3/√10)² + (1/√10)² = 9/10 + 1/10 = 1 ✅

---

### Problem 6: Non-Uniform Circular Loitering

A rescue drone flies in a horizontal circle of radius 25 m. At a certain moment, its speed is 15 m/s and its speed is decreasing at 12 m/s². Find the magnitude of its net acceleration.

**Solution:**
- Centripetal acceleration: a_c = v² / r = 15² / 25 = 225 / 25 = **9 m/s²**.
- Tangential acceleration magnitude: |a_t| = **12 m/s²**.
- Net acceleration: a_net = √(9² + 12²) = √(81 + 144) = √225 = **15 m/s²**.

Jaanch:
- Jaanch: 9-12-15 is a 3-4-5 triangle scaled by 3 ✅

---

## 3 Synthesis Mistakes (Mixed-Problem Traps)

### Galti 1: Chalte hue plane se giraye gaye packet ko seedha neeche girta hua maan lena
- **Galat:** Packet camp ke theek upar chhodna chahiye taaki seedha neeche gire!
- **Sahi:** Packet ke paas plane ki horizontal velocity (100 m/s) hoti hai — woh aage ki taraf parabola banata hua **1 km aage** girega!

### Galti 2: Circular motion mein a_c aur a_t ko seedha add kar dena
- **Galat:** a_c = 9 m/s² aur a_t = 12 m/s² => a_net = 9 + 12 = 21 m/s².
- **Sahi:** a_c (radial) aur a_t (tangential) ke beech **90°** hota hai, isliye hamesha **a_net = √(9² + 12²) = 15 m/s²**!

### Galti 3: Complementary angles (θ aur 90° - θ) ki ranges ko alag-alag samajhna
- **Galat:** 60° par ball zyada upar gayi toh range bhi 30° se zyada hogi.
- **Sahi:** Same speed u par 30° aur 60° ki **heights alag (1 : 3)** hoti hain, par **horizontal range bilkul SAME (1 : 1)** hoti hai!

---

## Mixed Practice Questions

*(Take g = 10 m/s² unless stated otherwise.)*

### Question 1
Two forces of 8 N and 15 N act at 90° to each other. Find the magnitude of their resultant.

**Solution:**
R = √(8² + 15²) = √(64 + 225) = √289 = **17 N**.

Jaanch:
- Jaanch: 8-15-17 Pythagorean triple ✅

---

### Question 2
A relief crate is dropped from a helicopter flying horizontally at 60 m/s at a height of 180 m. Find the horizontal distance travelled by the crate before hitting the ground.

**Solution:**
t = √(2 × 180 / 10) = √36 = 6 s.
R = 60 × 6 = **360 m**.

Jaanch:
- Jaanch: (1/2)(10)(36) = 180 m; 60 × 6 = 360 m ✅

---

### Question 3
A projectile is fired at 20√2 m/s at 45° to the horizontal. Find its maximum height H and horizontal range R.

**Solution:**
u² = 800.
- R = u² sin 90° / g = 800 / 10 = **80 m**.
- H = u² sin² 45° / (2g) = 800 (1/2) / 20 = **20 m**.

Jaanch:
- Jaanch: At 45°, R = 4 H => 80 = 4 × 20 ✅

---

### Question 4
Rain falls vertically at 8 m/s and a person runs West at 6 m/s. Find the apparent speed of the rain to the runner.

**Solution:**
|v_rm| = √(8² + 6²) = √100 = **10 m/s**.

Jaanch:
- Jaanch: 6-8-10 Pythagorean triple ✅

---

### Question 5
A boat crosses a 150 m wide river flowing at 4 m/s. If the boat's speed in still water is 5 m/s, find the time to cross along the shortest path (zero drift).

**Solution:**
v_net = √(5² - 4²) = 3 m/s.
t = 150 / 3 = **50 s**.

Jaanch:
- Jaanch: 3-4-5 right triangle; 3 × 50 = 150 m ✅

---

### Question 6
A particle moves in a circle of radius 10 m at constant speed 10 m/s. Find its angular velocity ω and centripetal acceleration a_c.

**Solution:**
- ω = v / r = 10 / 10 = **1 rad/s**.
- a_c = v² / r = 100 / 10 = **10 m/s²**.

Jaanch:
- Jaanch: ω² r = 1² × 10 = 10 m/s² ✅

---

### Question 7
The position of a particle is r(t) = (5 t² î + 12 t ĵ) m. Find its speed at t = 1 s.

**Solution:**
v(t) = 10 t î + 12 ĵ.
At t = 1 s: v(1) = 10 î + 12 ĵ => speed = √(10² + 12²) = √244 = **2 √61 ≈ 15.62 m/s**.

Jaanch:
- Jaanch: 100 + 144 = 244 = 4 × 61 ✅

---

### Question 8
A car on a circular track of radius 20 m has speed 10 m/s and tangential acceleration 12 m/s². Find its net acceleration.

**Solution:**
a_c = 10² / 20 = 5 m/s²; a_t = 12 m/s².
a_net = √(5² + 12²) = √169 = **13 m/s²**.

Jaanch:
- Jaanch: 5-12-13 Pythagorean triple ✅

---

### Question 9
Two projectiles launched at the same speed have angles of projection 15° and 75°. If the range of the first is 50 m, what is the range of the second?

**Solution:**
Since 15° + 75° = 90° (complementary angles), both have the **exact same range = 50 m**.

Jaanch:
- Jaanch: sin(2×15°) = sin 30° = 1/2; sin(2×75°) = sin 150° = 1/2 ✅

---

### Question 10
A vector A = 3 î - 4 ĵ. Find a vector of magnitude 15 in the same direction as A.

**Solution:**
|A| = √(9 + 16) = 5; unit vector Â = (3/5) î - (4/5) ĵ.
Required vector = 15 Â = **9 î - 12 ĵ**.

Jaanch:
- Jaanch: √(9² + (-12)²) = √(81 + 144) = √225 = 15 ✅

---

### Question 11
State whether the following statements are True or False:
(a) In projectile motion, the velocity and acceleration are perpendicular to each other only at the highest point.
(b) A particle moving in a circle with constant speed has constant velocity.

**Solution:**
- (a) **True** ✅ — Highest point par v purely horizontal (î) aur a purely downward (-ĵ) hota hai => exact 90°!
- (b) **False** ❌ — Speed constant hai par direction har pal badal rahi hai, isliye velocity constant nahi hai.

Jaanch:
- Jaanch: Only at v_y = 0 is velocity perpendicular to vertical g ✅

---

### Question 12
A projectile is fired at 40 m/s at an angle of 60° to the horizontal. Find the time when its velocity makes an angle of 45° with the horizontal (while going upward).

**Solution:**
- v_x = 40 cos 60° = 20 m/s (constant).
- At 45° upward: tan 45° = v_y / v_x = 1 => v_y = v_x = 20 m/s.
- Initial u_y = 40 sin 60° = 20√3 m/s.
- v_y = u_y - g t => 20 = 20√3 - 10 t => t = 2(√3 - 1) ≈ **1.46 s**.

Jaanch:
- Jaanch: t_top = 2√3 ≈ 3.46 s; t = 1.46 s < 3.46 s (going upward!) ✅

---

## Chapter Wrap-up: Motion in a Plane at a Glance

| Topic | Core Formula / Rule | Ek Line Mein Yaad Rakho |
|---|---|---|
| [Topic 1: Vectors & Components](motion-in-a-plane.md) | R = √(A² + B² + 2AB cos θ); A = A_x î + A_y ĵ | Tail-to-tail angle θ lo; axis chipke pe cos, doosre pe sin |
| [Topic 2: 2D Kinematics & Relative](motion-in-a-plane-part2.md) | Rain: tan θ = v_m/v_r; River: d/v_b vs d/√(v_b² - v_r²) | x aur y bilkul independent; umbrella hamesha forward jhukao |
| [Topic 3: Projectile Motion](motion-in-a-plane-part3.md) | T = 2u sin θ/g; H = u² sin²θ/(2g); R = u² sin 2θ/g | Parabola path; top par v_x = u cos θ ≠ 0; max R at 45° |
| [Topic 4: Circular Motion](motion-in-a-plane-part4.md) | ω = 2π f; v = ω r; a_c = v²/r = ω² r; a_net = √(a_c² + a_t²) | UCM is accelerated! a_c hamesha centre ki taraf lagta hai |
| [Topic 5: Mixed & Wrap-up](motion-in-a-plane-part5.md) | Plane air-drop, 3-4-5 launches, non-uniform UCM | Decision Map se sahi 2D tool chuno aur components alag rakho |

Tumne 2D kinematics ko vectors se lekar projectiles aur circular motion tak poori tarah master kar liya hai! Agar inclined-plane projectiles, y = x tan θ(1 - x/R) shortcut, 2D closest approach of ships, aur radius of curvature jaise deep challenges dekhna chahte ho, toh [Gehrai Mein — Advanced Level](motion-in-a-plane-advanced.md) zaroor padho!

**Agle chapter mein:** Ab tak humne sirf yeh dekha ki cheezein **kaise** chalti hain (kinematics). Ab hum poochhenge cheezein **kyun** chalti hain — **Laws of Motion** mein hum Newton ke teen niyam, free-body diagrams, tension, friction, aur circular banking ki asli duniya mein kadam rakhenge!
