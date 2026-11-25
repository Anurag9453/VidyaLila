> **Class:** 11 | **Subject:** Physics | **Chapter 5:** Work, Energy and Power (Gehrai Mein — Advanced Level)

# Work, Energy and Power — Gehrai Mein (Advanced Level)

> **Core chapter se:** Core lessons ([Topic 1](work-energy-and-power.md) se [Topic 7](work-energy-and-power-part7.md)) mein humne work, Work–Energy Theorem, PE, conservation of mechanical energy, power, aur collisions cover kiye. Ab is **Gehrai Mein** section mein hum woh deep energy-mechanics problems solve karenge jo har physics enthusiast ko pasand aati hain — **U(x) stability & turning points**, **sphere detachment angle (cos θ = 2/3)**, **heavy chain sliding off a table**, **infinite bouncing-ball series**, aur **constant-power motion (x ∝ t^(3/2))**!

---

## Qudrat ka Nonlinear-Mechanics Research Lab

Qudrat ek nonlinear-mechanics researcher hai. Uske desk par chaar classic deep challenges hain:
1. Ek smooth dome (hemisphere) ke top se phisalti ball kis exact angle par surface chhod kar hawa mein ud jati hai? (**cos θ = 2/3**, radius se bilkul independent!)
2. Ek bouncing ball (restitution e) agar height H se gire, toh rukne tak total kitna distance aur kitna time lagati hai? (Infinite Geometric Progression!)
3. Agar koi car **constant power P** se rest se start ho, toh uska velocity aur displacement time ke saath kaise badhta hai? (**v ∝ t^(1/2)**, **x ∝ t^(3/2)**!)

Chalo Qudrat ke saath in paanch elite energy tools ko master karte hain!

---

## 1. Potential Energy Curves U(x): Turning Points & Second Derivative Test

- **Equilibrium:** dU / dx = 0 (F = 0).
  - **Stable:** d²U / dx² > 0 (valley / minimum).
  - **Unstable:** d²U / dx² < 0 (peak / maximum).
  - **Neutral:** d²U / dx² = 0.
- **Turning Points:** Jahan Total Energy E = U(x) => **K = 0** (particle wahin ruk kar direction palatta hai!). Particle sirf wahan ja sakta hai jahan **U(x) ≤ E**!

---

## 2. Leaving Contact on a Smooth Hemisphere (cos θ = 2/3!)

Radius **R** ke smooth hemisphere ke top se mass **m** rest se phisalta hai. Vertical se angle **θ** neeche aane par:
- Vertical drop: h = R (1 - cos θ)  =>  **v² = 2 g R (1 - cos θ)** (Energy conservation).
- Radial equation: m g cos θ - N = m v² / R.
- Contact chhootne par **N = 0**:
  m g cos θ = m [2 g R (1 - cos θ)] / R = 2 m g (1 - cos θ)
  => cos θ = 2 - 2 cos θ  =>  3 cos θ = 2  =>  **cos θ = 2 / 3** (θ ≈ **48.2°**, height above ground = **(2/3) R**)!

---

## 3. Infinite Bouncing Ball Series (Restitution e)

Height **H** se girne par pehla rebound e² H, doosra e⁴ H, teesra e⁶ H, ...
- **Total Distance Travelled:**
  D = H + 2(e² H + e⁴ H + e⁶ H + ...) = H + 2 H [e² / (1 - e²)] = **H (1 + e²) / (1 - e²)**
- **Total Time Taken:**
  t₀ = √(2H/g); agle bounces ka time = 2 e t₀, 2 e² t₀, ...
  T = t₀ + 2 t₀ [e / (1 - e)] = **√(2 H / g) · (1 + e) / (1 - e)**

---

## 4. Constant-Power Motion from Rest (P = constant)

Since P = dK / dt = constant and K(0) = 0:
K(t) = (1/2) m v² = P t  =>  **v(t) = √(2 P / m) · t^(1/2)**  (**v ∝ √t**!)

Rate-of-change integration se (since d(t^(3/2))/dt = (3/2) t^(1/2)):
**x(t) = (2/3) √(2 P / m) · t^(3/2)**  (**x ∝ t^(3/2)**!)

---

## 6 Deep Solved Problems

### Problem 1: Detachment Height & Speed on a Smooth 3 m Hemisphere

A small ice cube slides from rest from the top of a smooth hemispherical igloo of radius R = 3 m (g = 10 m/s²). Find: (a) the height above the ground where it leaves the surface, (b) its speed at detachment.

**Solution:**
- (a) Leaves contact at cos θ = 2/3 => height above base = R cos θ = 3 × (2/3) = **2 m**.
- (b) Vertical drop = 3 - 2 = 1 m => v = √(2 g (1)) = **√20 = 2 √5 ≈ 4.47 m/s**.

Jaanch:
- Jaanch: v² / R = 20 / 3; g cos θ = 10 × (2/3) = 20 / 3 => N = 0 exact match ✅

---

### Problem 2: Infinite Bouncing Ball (H = 9 m, e = 1/2)

A rubber ball is dropped from a height H = 9 m onto a hard floor with coefficient of restitution e = 1/2 (g = 10 m/s²). Find: (a) total distance travelled before coming to rest, (b) total time taken.

**Solution:**
- (a) D = H (1 + e²) / (1 - e²) = 9 × (1 + 1/4) / (1 - 1/4) = 9 × (5/4) / (3/4) = 9 × (5/3) = **15 m**.
- (b) t₀ = √(18 / 10) = √1.8 = 3 / √5 s.
  T = t₀ (1 + 1/2) / (1 - 1/2) = 3 t₀ = **9 / √5 ≈ 4.02 s**.

Jaanch:
- Jaanch: First drop 9 m + bounce 1 (2 × 2.25 = 4.5 m) + bounce 2 (1.125 m) + ... -> 9 + 4.5 / (1 - 1/4) = 9 + 6 = 15 m ✅

---

### Problem 3: Heavy Chain Sliding Off a Smooth Table

A uniform chain of mass M and length L = 4 m rests on a smooth horizontal table with 1/4 of its length (1 m) hanging over the edge. It is released from rest (g = 10 m/s²). Find its speed at the instant the last link leaves the table!

**Solution:**
Take table level as U = 0:
- Initial PE: Hanging mass = M/4, its CM is at depth (L/4)/2 = L/8 => U_i = -(M/4) g (L/8) = **-M g L / 32**.
- Final PE (full chain hanging): CM is at depth L/2 => U_f = **-M g L / 2**.
- Loss in PE = Gain in KE:
  (1/2) M v² = M g L (1/2 - 1/32) = (15 / 32) M g L
  => v² = (15 / 16) g L = (15 / 16) × 10 × 4 = 37.5 => **v = √37.5 ≈ 6.12 m/s**.

Jaanch:
- Jaanch: General formula for initial hanging fraction 1/n: v = √(g L (1 - 1/n²)) = √(40 × 15/16) = √37.5 m/s ✅

---

### Problem 4: Constant-Power Car Kinematics

A car of mass 1000 kg starts from rest on a smooth horizontal road with its engine delivering a constant power of 20 kW. Find: (a) its speed at t = 4 s, (b) the distance travelled in the first 4 s.

**Solution:**
- (a) (1/2) m v² = P t => 500 v² = 20,000 × 4 = 80,000 => v² = 160 => **v = 4 √10 ≈ 12.65 m/s**.
- (b) x = (2/3) √(2 P / m) t^(3/2) = (2/3) √(40) (8) = (16/3)(2√10) = **(32/3) √10 ≈ 33.73 m**.
  *(Notice: x = (2/3) v t = (2/3)(4√10)(4) = (32/3)√10 m!)*

Jaanch:
- Jaanch: Under constant power from rest, x = (2/3) v t (compare with constant acceleration where x = (1/2) v t) ✅

---

### Problem 5: Stability Analysis of U(x) = x³/3 - 4 x

A particle moves in a potential U(x) = x³/3 - 4 x (in J, x in m). Find all equilibrium positions and classify each as stable or unstable using the second derivative test.

**Solution:**
- dU/dx = x² - 4 = 0 => **x = +2 m** and **x = -2 m**.
- d²U/dx² = 2 x:
  - At x = +2 m: d²U/dx² = +4 > 0 => **Stable Equilibrium**!
  - At x = -2 m: d²U/dx² = -4 < 0 => **Unstable Equilibrium**!

Jaanch:
- Jaanch: U(+2) = 8/3 - 8 = -16/3 (local valley); U(-2) = -8/3 + 8 = +16/3 (local peak) ✅

---

### Problem 6: Interatomic Potential U(r) = A/r¹² - B/r⁶ Equilibrium

The potential energy between two atoms is U(r) = A / r¹² - B / r⁶ (where A, B > 0). Find the equilibrium separation r₀ and the minimum potential energy U_min.

**Solution:**
- dU/dr = -12 A / r¹³ + 6 B / r⁷ = 0
  => 12 A / r¹³ = 6 B / r⁷ => r⁶ = 2 A / B => **r₀ = (2 A / B)^(1/6)**.
- Substitute r₀⁶ = 2 A / B into U(r):
  U_min = A / (4 A² / B²) - B / (2 A / B) = B² / (4 A) - B² / (2 A) = **- B² / (4 A)**.

Jaanch:
- Jaanch: Negative U_min confirms a bound stable molecule! ✅

---

## 3 Advanced Mistakes

### Galti 1: Hemisphere par leaving-contact angle 60° (cos θ = 1/2) maan lena
- **Galat:** N = 0 at cos θ = 1/2 (60°).
- **Sahi:** Energy conservation + radial equation gives **cos θ = 2/3** (48.2°), height = **(2/3) R**!

### Galti 2: Constant power P par v = a t aur x = (1/2) a t² laga dena
- **Galat:** Power constant hai toh acceleration bhi constant hoga!
- **Sahi:** P = F v = m a v => **a = P / (m v)** speed badhne ke saath kam hota jata hai! Isliye **v ∝ t^(1/2)** aur **x ∝ t^(3/2)**!

### Galti 3: Bouncing ball ke total distance mein pehle drop H ko bhi double (2H) kar dena
- **Galat:** D = 2H / (1 - e²).
- **Sahi:** Pehla drop H sirf **ek baar (neeche)** hota hai; baaki sabhi bounces (e²H, e⁴H, ...) upar-neeche **do baar** hote hain => **D = H (1 + e²) / (1 - e²)**!

---

## Practice Questions (Advanced)

*(Take g = 10 m/s² unless stated otherwise.)*

### Question 1
A particle slides from rest from the top of a smooth sphere of radius 6 m. At what height above the bottom of the sphere does it lose contact?

**Solution:**
Centre is 6 m above bottom; leaves at R cos θ = 6 × (2/3) = 4 m above centre => **6 + 4 = 10 m** above the bottom!

Jaanch:
- Jaanch: Top is at 12 m; drop is R/3 = 2 m => 12 - 2 = 10 m ✅

---

### Question 2
A ball is dropped from height 10 m onto a floor with e = 1/3. Find the total distance travelled before it comes to rest.

**Solution:**
D = 10 × (1 + 1/9) / (1 - 1/9) = 10 × (10/9) / (8/9) = 100 / 8 = **12.5 m**.

Jaanch:
- Jaanch: 10 + 2(10/9)/(8/9) = 10 + 2.5 = 12.5 m ✅

---

### Question 3
A uniform chain of length 5 m rests on a smooth table with 1 m (1/5 of its length) hanging over the edge. Released from rest, find its speed when it completely leaves the table.

**Solution:**
v = √(g L (1 - 1/n²)) = √(10 × 5 × (1 - 1/25)) = √(50 × 24/25) = √48 = **4 √3 ≈ 6.93 m/s**.

Jaanch:
- Jaanch: 50 × 24 / 25 = 2 × 24 = 48 ✅

---

### Question 4
A particle of mass m starts from rest under constant power P. Find the ratio of distances covered in the first 1 second and the first 4 seconds.

**Solution:**
Since x ∝ t^(3/2): x(1) / x(4) = 1^(3/2) / 4^(3/2) = **1 : 8**.

Jaanch:
- Jaanch: 4^(3/2) = (√4)³ = 2³ = 8 ✅

---

### Question 5
A particle has potential energy U(x) = x⁴ / 4 - 2 x² (in J). Find all equilibrium positions and classify them.

**Solution:**
dU/dx = x³ - 4 x = x (x - 2)(x + 2) = 0 => **x = 0, +2, -2 m**.
d²U/dx² = 3 x² - 4:
- At x = 0: -4 < 0 => **Unstable**.
- At x = ±2: 12 - 4 = +8 > 0 => **Stable** (double well!).

Jaanch:
- Jaanch: U(0) = 0 (peak between wells); U(±2) = 4 - 8 = -4 J (two symmetric valleys) ✅

---

### Question 6
For a ball dropped from height H = 20 m with e = 1/2, find the total time taken until it stops bouncing.

**Solution:**
t₀ = √(2 × 20 / 10) = 2 s.
T = t₀ (1 + 1/2) / (1 - 1/2) = 2 × 3 = **6 s**.

Jaanch:
- Jaanch: 2 + 2(1 + 1/2 + 1/4 + ...) = 2 + 2(2) = 6 s ✅

---

### Question 7
In Problem 1 (sphere of radius R), suppose the particle is given a horizontal velocity v₀ at the top. What minimum v₀ makes it leave contact **immediately** at the top?

**Solution:**
At top (θ = 0), m g - N = m v₀² / R. For N = 0 immediately: **v₀ = √(g R)**.

Jaanch:
- Jaanch: Same as minimum top speed of a vertical circle! ✅

---

### Question 8
A 2 kg particle moves in potential U(x) = 8 x² (in J) with total mechanical energy E = 32 J. Find the two turning points of its motion.

**Solution:**
At turning points, K = 0 => U(x) = E:
8 x² = 32 => x² = 4 => **x = +2 m** and **x = -2 m**.

Jaanch:
- Jaanch: Particle oscillates between -2 m and +2 m (where K = 0) ✅

---

### Question 9
Two blocks of masses m₁ = 2 kg and m₂ = 4 kg are connected by a spring (k = 600 N/m) on a smooth floor. The 2 kg block is given an initial velocity of 6 m/s toward the stationary 4 kg block. Find the maximum compression of the spring!

**Solution:**
At maximum compression, both blocks move at the **same** centre-of-mass velocity v_cm!
- v_cm = (2 × 6) / (2 + 4) = 2 m/s.
- Max compression KE loss = (1/2) [m₁ m₂ / (m₁ + m₂)] u_rel² = (1/2) (8/6) (36) = **24 J** (stored as spring PE!).
- (1/2)(600) x_max² = 24 => 300 x_max² = 24 => x_max² = 0.08 => **x_max = √0.08 ≈ 0.283 m**.

Jaanch:
- Jaanch: K_i = 36 J; K_cm = (1/2)(6)(4) = 12 J; stored PE = 36 - 12 = 24 J ✅

---

### Question 10
A car starts from rest with constant power P = 10 kW and mass m = 500 kg. Find its acceleration at t = 4 s.

**Solution:**
v(4) = √(2 P t / m) = √(2 × 10,000 × 4 / 500) = √160 = 4 √10 m/s.
Since P = m a v => a = P / (m v) = 10,000 / (500 × 4√10) = 5 / √10 = **√10 / 2 ≈ 1.58 m/s²**.

Jaanch:
- Jaanch: Check a = dv/dt = (1/2) √(2P/m) t^(-1/2) = (1/2)(√40)(1/2) = √10 / 2 m/s² ✅

---

### Question 11
A particle moves along the x-axis with U(x) = A / x² - B / x (A, B > 0). Find its equilibrium position x₀.

**Solution:**
dU/dx = -2 A / x³ + B / x² = 0 => 2 A / x³ = B / x² => **x₀ = 2 A / B**.

Jaanch:
- Jaanch: d²U/dx² = 6A/x⁴ - 2B/x³; at x₀ = 2A/B it is +B⁴/(8A³) > 0 (stable!) ✅

---

### Question 12
A bob of mass m on a string of length L is given horizontal velocity u = √(3.5 g L) at the bottom of a vertical circle. Does it complete the circle, oscillate below mid-level, or leave the circle in the upper half?

**Solution:**
- Oscillates below mid-level if u ≤ √(2gL).
- Completes full circle if u ≥ √(5gL).
- Since √(2gL) < √(3.5gL) < √(5gL), the string goes slack in the upper half and the bob **leaves the circular path as a projectile**!

Jaanch:
- Jaanch: 2 < 3.5 < 5 places it squarely in the slack-string regime ✅

---

Shabaash! Tumne Work, Energy and Power ko potential wells, detachment angles, chain energy, aur constant-power kinematics tak conquer kar liya hai. Wapas chapter overview ke liye [Mixed Problems & Chapter Wrap-up](work-energy-and-power-part7.md) dekho!
