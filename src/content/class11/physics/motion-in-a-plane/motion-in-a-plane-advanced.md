> **Class:** 11 | **Subject:** Physics | **Chapter 3:** Motion in a Plane (Gehrai Mein — Advanced Level)

# Motion in a Plane — Gehrai Mein (Advanced Level)

> **Core chapter se:** Core lessons ([Topic 1](motion-in-a-plane.md) se [Topic 5](motion-in-a-plane-part5.md)) mein humne vectors, rain-man, river-boat, ground-to-ground projectiles, aur uniform circular motion cover kiye. Ab is **Gehrai Mein** section mein hum woh deep 2D tools seekhenge jo toughest mechanics problems ko clean aur fast bana dete hain — inclined-plane projectiles, trajectory-range shortcut, 2D closest approach between ships, aur radius of curvature!

---

## Kamini ka Ballistics & Autonomous-Ship Lab

Kamini ek ballistics aur autonomous-ship dynamics researcher hai. Ek hi hafte mein uski team ko teen tricky 2D problems mili:
1. Ek pahadi dhalan (30° inclined plane) par upar ki taraf projectile launch karna — jahan gravity ka ek hissa plane ke along (g sin β) aur ek hissa perpendicular (g cos β) lagta hai!
2. Open sea mein do autonomous ships ke beech **minimum distance of approach (d_min)** nikalna taaki collision na ho!
3. Ek parabolic trajectory ke kisi bhi point par **radius of curvature (R_c)** calculate karna!

Chalo Kamini ke saath in chaar high-level techniques ko ekdam crystal clear karte hain!

---

## 1. Projectile on an Inclined Plane (Rotated Axes Trick!)

Agar ek plane horizontal se angle **β** par jhuka hai, aur hum projectile ko **plane se angle α** par speed **u** se upar ki taraf (up the incline) phenkte hain:

**Master Trick:** Axes ko hi plane ke saath ghuma do!
- **x'-axis:** along the incline (upward)
- **y'-axis:** perpendicular to the incline

Gravity **g** ko in rotated axes par resolve karo:
- **a_x' = -g sin β** (plane ke neeche ki taraf — AB horizontal acceleration ZERO NAHI HAI!)
- **a_y' = -g cos β** (plane ke perpendicular!)
- **u_x' = u cos α**, **u_y' = u sin α**

Ab bilkul normal projectile ki tarah solve karo:
1. **Time of Flight (y' = 0):**
   **T = (2 u sin α) / (g cos β)**
2. **Range along the Incline:**
   R = u_x' T + (1/2) a_x' T² = (u cos α) T - (1/2) (g sin β) T²
   Simplify karne par:
   **R = (u² / (g cos² β)) [ sin(2α + β) - sin β ]**
3. **Maximum Range up the Incline:**
   sin(2α + β) = 1 => 2α + β = 90° => **α = 45° - β/2**
   **R_max (up) = u² / (g (1 + sin β))**
4. **Maximum Range down the Incline** (replace β with -β):
   **R_max (down) = u² / (g (1 - sin β))**

---

## 2. Trajectory–Range Shortcut Form

Ground-to-ground trajectory equation:
y = x tan θ - g x² / (2 u² cos² θ)

Ismein Range R = (2 u² sin θ cos θ) / g = (2 u² cos² θ tan θ) / g substitute karne par ek jaadui compact form milta hai:

```
  y = x tan θ ( 1 - x / R )
```

Jab bhi trajectory y = a x - b x² di ho, bas x tan θ common le lo — bracket mein seedha **(1 - x / R)** dikh jayega aur **R = a / b** ek second mein mil jayega!

---

## 3. 2D Closest Approach (Minimum Distance Between Two Ships)

Do ships A aur B alag-alag constant velocities **v_A** aur **v_B** se chal rahi hain. Ground frame mein unki doori ka quadratic banana lamba padta hai.

**1-Line Relative Frame Trick:**
1. Ship B ko **rest par** maan lo => Ship A ki relative velocity **v_rel = v_A - v_B** nikalo.
2. Ship A se **v_rel** ki direction mein ek seedhi line kheecho.
3. Stationary Ship B se is line par **perpendicular distance** hi **d_min** (minimum distance of approach) hai!
   **d_min = d₀ sin φ** (jahan d₀ initial separation hai aur φ line-of-sight aur v_rel ke beech ka angle hai!).

---

## 4. Radius of Curvature (R_c) of a Projectile

Kisi curved path ke kisi point par agar particle ki speed **v** hai aur velocity ke perpendicular acceleration **a_n** hai, toh us point par path ko touch karne wale circle ka radius (**Radius of Curvature**) hota hai:

```
  a_n = v² / R_c   ===>   R_c = v² / a_n
```

Projectile mein kisi point par agar velocity horizontal se angle **φ** bana rahi hai, toh gravity g ka velocity ke perpendicular component **a_n = g cos φ** hota hai!
- **General point:** **R_c = v² / (g cos φ) = v³ / (g v_x)** (kyunki cos φ = v_x / v!)
- **Highest point (φ = 0, v = u cos θ):** **R_c = (u² cos² θ) / g** (yeh trajectory par **MINIMUM** radius of curvature hota hai!).

---

## 6 Deep Solved Problems

### Problem 1: Projectile Up a 30° Inclined Plane

A particle is projected from the foot of a 30° inclined plane with speed u = 20 m/s at an angle of 60° with the horizontal (so α = 60° - 30° = 30° with the incline). Taking g = 10 m/s², find: (a) time of flight T, (b) range R along the incline.

**Solution:**
Here β = 30°, α = 30°, u = 20 m/s.
- (a) T = (2 u sin α) / (g cos β) = (2 × 20 × 1/2) / (10 × √3/2) = 20 / (5√3) = **4 / √3 ≈ 2.31 s**.
- (b) R = (u cos α) T - (1/2) (g sin β) T²
  = (20 × √3/2)(4/√3) - (1/2)(10 × 1/2)(16/3)
  = 40 - 40/3 = **80 / 3 ≈ 26.67 m**.

Jaanch:
- Jaanch: Check max range formula! Here α = 30° = 45° - 30°/2 (exact max range angle!): R_max = u² / (g(1 + sin 30°)) = 400 / (10 × 1.5) = 400 / 15 = 80/3 m ✅

---

### Problem 2: Instant Range & Max Height from y = 12 x - (3/4) x²

The equation of trajectory of a projectile is y = 12 x - (3/4) x² (x, y in metres). Find its horizontal range R and maximum height H without finding u or g!

**Solution:**
Factor out 12 x:
y = 12 x ( 1 - x / 16 )
Compare with y = x tan θ (1 - x / R):
- **R = 16 m** (instantly!).
- tan θ = 12.
- Using R tan θ = 4 H => 4 H = 16 × 12 = 192 => **H = 48 m**.

Jaanch:
- Jaanch: Parabola vertex at x = R/2 = 8 m: y(8) = 12(8) - (3/4)(64) = 96 - 48 = 48 m ✅

---

### Problem 3: Closest Approach Between Two Ships

At t = 0, Ship A is at the origin moving North at 10 m/s, and Ship B is 100 m due East of A moving West at 10 m/s. Find the minimum distance between the two ships and the time when it occurs.

**Solution:**
v_A = 10 ĵ, v_B = -10 î.
Relative to B (B fixed at (100, 0)):
v_AB = v_A - v_B = **10 î + 10 ĵ** (speed = 10√2 m/s, angle 45° North of East!).
Initial line from A(0, 0) to B(100, 0) is along +x (d₀ = 100 m).
Angle between v_AB and AB-line is φ = 45°:
- **d_min = d₀ sin 45° = 100 / √2 = 50 √2 ≈ 70.71 m**.
- Distance travelled along v_AB until closest approach = d₀ cos 45° = 50√2 m.
- Time t = (50√2) / (10√2) = **5 s**.

Jaanch:
- Jaanch: At t = 5 s: A is at (0, 50), B is at (50, 0) => distance = √(50² + 50²) = 50√2 m ✅

---

### Problem 4: Radius of Curvature at Highest Point & Launch Point

A ball is projected with speed 20 m/s at 60° to the horizontal (g = 10 m/s²). Find the radius of curvature of its trajectory at: (a) the highest point, (b) the point of projection.

**Solution:**
- (a) At highest point: v = u cos 60° = 10 m/s, φ = 0° => a_n = g = 10 m/s².
  R_c = v² / g = 10² / 10 = **10 m**.
- (b) At launch point: v = 20 m/s, φ = 60° => a_n = g cos 60° = 5 m/s².
  R_c = v² / a_n = 20² / 5 = 400 / 5 = **80 m**.

Jaanch:
- Jaanch: Check v³ / (g v_x): at launch, 20³ / (10 × 10) = 8000 / 100 = 80 m; at top, 10³ / 100 = 10 m ✅

---

### Problem 5: Down-the-Incline Maximum Range

A ski jumper launches off a 30° downward slope with speed 15 m/s (g = 10 m/s²). What is the maximum possible range along the downward slope?

**Solution:**
Using R_max (down) = u² / (g (1 - sin β)) with β = 30° (sin 30° = 1/2):
R_max = 15² / (10 × (1 - 1/2)) = 225 / 5 = **45 m**.

Jaanch:
- Jaanch: Flat-ground R_max = 225/10 = 22.5 m; 30° downward slope doubles it to 45 m! ✅

---

### Problem 6: Minimum Speed to Clear a Wall

A projectile is launched from the ground to just clear a vertical wall of height h = 15 m located at a horizontal distance d = 20 m. Find the minimum speed of projection u_min required (g = 10 m/s²).

**Solution:**
Known optimal result (from minimizing u² in trajectory equation y = x tan θ - g x² sec² θ / (2u²), treating it as a quadratic in tan θ with discriminant ≥ 0):
**u_min = √( g (h + √(h² + d²)) )**

Substituting h = 15 m, d = 20 m (so √(h² + d²) = √(225 + 400) = 25 m):
u_min = √( 10 × (15 + 25) ) = √(400) = **20 m/s**!

Jaanch:
- Jaanch: Check quadratic in tan θ for u = 20: 15 = 20 tan θ - (10×400)/(800) (1 + tan² θ) = 20 tan θ - 5 - 5 tan² θ => 5 tan² θ - 20 tan θ + 20 = 0 => (tan θ - 2)² = 0 (exact double root tan θ = 2!) ✅

---

## 3 Advanced Mistakes

### Galti 1: Inclined plane par a_x' = 0 maan lena
- **Galat:** Normal projectile ki tarah inclined plane par bhi x' direction mein velocity constant rahegi!
- **Sahi:** Gravity vertical hai — inclined plane ke along uska component **a_x' = ±g sin β ≠ 0** aata hai, isliye x' speed badalti hai!

### Galti 2: Radius of curvature mein har point par R_c = v² / g laga dena
- **Galat:** Launch point par v = 20 m/s hai toh R_c = 20² / 10 = 40 m.
- **Sahi:** R_c = v² / **a_n**, jahan a_n = **g cos φ** (velocity ke perpendicular component of g)! Launch par φ = 60° => a_n = 5 m/s² => R_c = **80 m**!

### Galti 3: 2D closest approach mein ground frame ka lamba quadratic banana
- **Galat:** x_A(t), y_A(t), x_B(t), y_B(t) likh kar distance square differentiate karna.
- **Sahi:** Ek ship ko rest par karke relative frame mein **d_min = d₀ sin φ** 10 second mein exact answer deta hai!

---

## Practice Questions (Advanced)

*(Take g = 10 m/s² unless stated otherwise.)*

### Question 1
A projectile is launched up a 30° inclined plane with speed 30 m/s. Find the maximum possible range along the incline.

**Solution:**
R_max (up) = u² / (g (1 + sin 30°)) = 900 / (10 × 1.5) = 900 / 15 = **60 m**.

Jaanch:
- Jaanch: Flat max range = 90 m; up 30° incline = 90 / 1.5 = 60 m ✅

---

### Question 2
A projectile is launched down a 37° inclined plane (sin 37° = 3/5) with speed 20 m/s. Find the maximum range along the downward incline.

**Solution:**
R_max (down) = u² / (g (1 - sin 37°)) = 400 / (10 × (1 - 3/5)) = 400 / 4 = **100 m**.

Jaanch:
- Jaanch: 1 - 0.6 = 0.4; 400 / (10 × 0.4) = 100 m ✅

---

### Question 3
The equation of a projectile's path is y = 8 x - 0.5 x² (in metres). Find its horizontal range R and maximum height H.

**Solution:**
y = 8 x (1 - x / 16) => **R = 16 m**, tan θ = 8.
4 H = R tan θ = 16 × 8 = 128 => **H = 32 m**.

Jaanch:
- Jaanch: At x = 8 m: y(8) = 64 - 0.5(64) = 32 m ✅

---

### Question 4
A ball is projected at 10 m/s at 45° to the horizontal. Find the radius of curvature at the highest point of its trajectory.

**Solution:**
At highest point: v = u cos 45° = 10 / √2 m/s, a_n = g = 10 m/s².
R_c = v² / g = (100 / 2) / 10 = **5 m**.

Jaanch:
- Jaanch: u² cos² 45° / g = 100(0.5)/10 = 5 m ✅

---

### Question 5
At t = 0, Ship P is at (0, 0) moving East at 10 m/s, and Ship Q is at (0, 200 m) moving South at 10 m/s. Find the minimum distance between them.

**Solution:**
v_P = 10 î, v_Q = -10 ĵ => v_PQ = 10 î + 10 ĵ (45° North of East).
Line PQ is along +y (d₀ = 200 m); angle between +y and v_PQ is φ = 45°.
d_min = 200 sin 45° = **100 √2 ≈ 141.4 m**.

Jaanch:
- Jaanch: At t = 10 s: P is at (100, 0), Q is at (0, 100) => distance = √(100² + 100²) = 100√2 m ✅

---

### Question 6
Find the minimum speed of projection required to just clear a wall of height 6 m at a horizontal distance of 8 m.

**Solution:**
√(h² + d²) = √(6² + 8²) = 10 m.
u_min = √(g (h + √(h² + d²))) = √(10 × (6 + 10)) = √160 = **4 √10 ≈ 12.65 m/s**.

Jaanch:
- Jaanch: 6 + 10 = 16; 16 × 10 = 160; √160 = 4√10 ✅

---

### Question 7
A particle is projected horizontally from the top of an inclined plane of inclination 45° with speed 10 m/s. How far down the incline does it land?

**Solution:**
Here launch is horizontal (α = 45° with the downward 45° incline), β = -45°.
Using normal x, y with origin at launch (downward y positive):
x = u t = 10 t; y = (1/2) g t² = 5 t².
On a 45° incline, y = x => 5 t² = 10 t => t = **2 s**.
x = 20 m, y = 20 m => Range along incline R = √(20² + 20²) = **20 √2 ≈ 28.28 m**.

Jaanch:
- Jaanch: T = 2 u sin 45° / (g cos 45°) = 2(10)/10 = 2 s ✅

---

### Question 8
A projectile is fired at angle θ such that at some instant its velocity becomes perpendicular to its initial velocity u. Find the time t when this happens (assuming it is still in flight).

**Solution:**
Initial velocity u = (u cos θ) î + (u sin θ) ĵ.
Velocity at time t: v(t) = (u cos θ) î + (u sin θ - g t) ĵ.
For u ⊥ v(t), dot product u · v(t) = 0:
u² cos² θ + u² sin² θ - u g t sin θ = 0
u² - u g t sin θ = 0 => **t = u / (g sin θ)**.

Jaanch:
- Jaanch: Must have t < T = 2u sin θ / g => 1 / sin θ < 2 sin θ => sin² θ > 1/2 => possible only for θ > 45°! ✅

---

### Question 9
For a ground-to-ground projectile, find the ratio of the radius of curvature at the launch point to the radius of curvature at the highest point, in terms of the launch angle θ.

**Solution:**
- Launch point: R_launch = u² / (g cos θ).
- Highest point: R_top = u² cos² θ / g.
- Ratio: R_launch / R_top = **1 / cos³ θ = sec³ θ**.

Jaanch:
- Jaanch: Check Problem 4 (θ = 60°, cos 60° = 1/2): sec³ 60° = 8 => 80 / 10 = 8 ✅

---

### Question 10
A projectile is launched from the origin and passes through two points at the same height y = 15 m at horizontal distances x₁ = 10 m and x₂ = 30 m. Find its total horizontal range R and angle of projection θ.

**Solution:**
By parabola symmetry, R = x₁ + x₂ = 10 + 30 = **40 m**!
Using y = x tan θ (1 - x / R) at (10, 15):
15 = 10 tan θ (1 - 10/40) = 10 tan θ (3/4) = 7.5 tan θ => **tan θ = 2** (θ ≈ 63.4°).

Jaanch:
- Jaanch: Check at x₂ = 30: y = 30(2)(1 - 30/40) = 60(1/4) = 15 m ✅

---

### Question 11
Two particles are projected simultaneously from the same point with speeds u₁ and u₂ at angles θ₁ and θ₂. What is the shape of the trajectory of particle 1 as seen from particle 2?

**Solution:**
Dono free fall mein hain => a_rel = (-g ĵ) - (-g ĵ) = **0**!
Zero relative acceleration ka matlab constant relative velocity => path of particle 1 as seen from particle 2 is a **straight line**!

Jaanch:
- Jaanch: Relative position r_12(t) = (u₁ - u₂) t — pure linear function of t (straight line) ✅

---

### Question 12
A particle moves on a circle of radius R = 4 m such that its speed varies with time as v = 2 t (in m/s). Find the magnitude of its net acceleration at t = 2 s.

**Solution:**
- Tangential acceleration: a_t = dv/dt = **2 m/s²**.
- At t = 2 s: v = 4 m/s => a_c = v² / R = 16 / 4 = **4 m/s²**.
- Net acceleration: a_net = √(4² + 2²) = √20 = **2 √5 ≈ 4.47 m/s²**.

Jaanch:
- Jaanch: 16 + 4 = 20 = 4 × 5 => 2√5 ✅

---

Shabaash! Tumne 2D kinematics ko inclined-plane projectiles, closest approach aur curvature radius tak conquer kar liya hai. Wapas chapter overview ke liye [Mixed Problems & Chapter Wrap-up](motion-in-a-plane-part5.md) dekho!
