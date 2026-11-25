> **Class:** 11 | **Subject:** Physics | **Chapter 5:** Work, Energy and Power (Part 7)

# Sab Kuch Mila Kar: Mixed Problems & Chapter Wrap-up

> **Pichle topic se:** [Collisions](work-energy-and-power-part6.md) mein humne elastic aur inelastic takkar solve kiye. Ab chalo poore chapter ke sabhi energy tools — work, dot product, Work–Energy Theorem, potential energy, conservation of mechanical energy, power, aur collisions — ko ek saath mila kar multi-concept problems solve karte hain!

---

## Ompal ka Renewable-Energy & Test-Track Command Station

Ompal ek Renewable-Energy & Test-Track Coordinator hai. Uske test yard mein ek hi problem ke andar do-teen concepts judte hain — jaise ek bullet ka block mein dhansna aur phir us block ka spring ko dabana, ya ek rough ramp se phisalkar bumper spring par rukna! Ompal ka **Decision Map** har sawaal ka rasta turant dikha deta hai.

---

## Decision Map: Kaun Sa Energy Tool Kab Lagayein?

| Problem mein kya dikhe? | Kaun sa tool lagao? |
|---|---|
| Vector force F aur displacement d, ya F–x graph | **W = F · d** ya **Area under F–x** ([Topic 1](work-energy-and-power.md)) |
| Variable/unknown force ya friction ke saath speed change | **Work–Energy Theorem: W_all = K_f - K_i** ([Topic 2](work-energy-and-power-part2.md)) |
| U(x) function diya ho, force ya stability poochi ho | **F = -dU/dx**; U min = stable, U max = unstable ([Topic 3](work-energy-and-power-part3.md)) |
| Smooth curved track, pendulum, vertical loop, spring drop | **K_i + U_i = K_f + U_f** (with friction: **-f_k d**) ([Topic 4](work-energy-and-power-part4.md)) |
| Rate of work, motor/pump/elevator, efficiency | **P = W/t = F · v**; **P_in = P_out / η** ([Topic 5](work-energy-and-power-part5.md)) |
| Collision / impact / rebound / ballistic pendulum | Pehle **Momentum Conservation** + **e**, phir swing/spring mein **Energy Conservation**! ([Topic 6](work-energy-and-power-part6.md)) |

---

## 6 Mixed Synthesis Problems

### Problem 1: Bullet + Block + Horizontal Spring (Collision + Energy!)

A 0.02 kg bullet moving at 400 m/s embeds into a stationary 1.98 kg block attached to a horizontal spring of constant k = 800 N/m on a smooth floor. Find the maximum compression of the spring!

**Solution:**
- **Stage 1 (Inelastic hit — Momentum ONLY):**
  0.02(400) = (0.02 + 1.98) v => 8 = 2.00 v => **v = 4 m/s**.
- **Stage 2 (Spring compression — Energy Conserved):**
  (1/2)(2)(4²) = (1/2)(800) x² => 16 = 400 x² => x² = 0.04 => **x = 0.20 m (20 cm)**.

Jaanch:
- Jaanch: Post-hit KE = 16 J; spring PE at 0.2 m = 400 × 0.04 = 16 J ✅

---

### Problem 2: Rough Incline Slide + Horizontal Spring Stop

A 2 kg block starts from rest at a height of 2.5 m on a smooth curved slide, reaches a rough horizontal floor (μ_k = 0.25, length 4 m), and then hits a horizontal spring (k = 300 N/m) on a smooth zone (g = 10 m/s²). Find the maximum compression of the spring.

**Solution:**
- Initial PE: U_i = 2 × 10 × 2.5 = 50 J.
- Friction loss on 4 m rough patch: W_f = -μ_k m g d = -0.25(20)(4) = **-20 J**.
- Energy reaching spring = 50 - 20 = **30 J**.
- (1/2)(300) x² = 30 => 150 x² = 30 => x² = 0.20 => **x = √0.20 ≈ 0.447 m**.

Jaanch:
- Jaanch: 30 J + 20 J friction = 50 J initial PE ✅

---

### Problem 3: Elastic Collision Followed by Pendulum Swing

A 2 kg ball moving horizontally at 6 m/s hits a stationary 2 kg pendulum bob (length L = 2 m, g = 10 m/s²) head-on elastically. To what maximum vertical height does the bob rise?

**Solution:**
- Equal-mass 1D elastic collision => velocities swap! Bob gets v = **6 m/s**.
- By mechanical energy conservation: m g h = (1/2) m v² => h = 36 / 20 = **1.8 m**.

Jaanch:
- Jaanch: h = 1.8 m < 2 m (bob stays below the pivot point, doesn't loop) ✅

---

### Problem 4: Variable Force F(x) -> Instantaneous Power

A 2 kg particle starts from rest at x = 0 under a force F(x) = 4 x (in N). Using the F–x graph area, find its speed and the instantaneous power delivered at x = 3 m.

**Solution:**
- Work from x = 0 to 3 m (F–x triangle: base 3 m, height 12 N): W = (1/2)(3)(12) = **18 J**.
- By Work–Energy Theorem: (1/2)(2) v² = 18 => v = **√18 = 3 √2 ≈ 4.24 m/s**.
- At x = 3 m, F = 12 N => Instantaneous power P = F v = 12 × 3√2 = **36 √2 ≈ 50.9 W**.

Jaanch:
- Jaanch: Area = 18 J; v = √18; P = 12√18 = 36√2 W ✅

---

### Problem 5: Climbing Car Power + Efficiency

A 1000 kg car climbs a rough 30° hill at a steady speed of 15 m/s against a frictional resistance of 1000 N (g = 10 m/s²). If the engine efficiency is 60%, find the fuel power input required.

**Solution:**
- Total opposing force: F = m g sin 30° + f = 5000 + 1000 = 6000 N.
- Useful output power: P_out = 6000 × 15 = 90,000 W = **90 kW**.
- Input power: P_in = 90 / 0.60 = **150 kW**.

Jaanch:
- Jaanch: 60% of 150 kW = 90 kW ✅

---

### Problem 6: Potential Energy Well -> Speed at Equilibrium

A 1 kg particle moves in a 1D potential U(x) = 2 x² - 8 x + 10 (in J). If it is released from rest at x = 4 m, find its maximum speed during the subsequent motion.

**Solution:**
- Total mechanical energy E = K(4) + U(4) = 0 + [2(16) - 32 + 10] = **10 J**.
- Speed is maximum where U(x) is **MINIMUM** (equilibrium: dU/dx = 4x - 8 = 0 => **x = 2 m**).
- U_min = U(2) = 2(4) - 16 + 10 = **2 J**.
- K_max = E - U_min = 10 - 2 = 8 J = (1/2)(1) v_max² => **v_max = 4 m/s**.

Jaanch:
- Jaanch: K_max (8 J) + U_min (2 J) = 10 J = E ✅

---

## 3 Synthesis Mistakes (Mixed-Problem Traps)

### Galti 1: Multi-stage collision + spring problem mein poore process mein KE conserve kar dena
- **Galat:** Bullet ki 1600 J KE ko seedha (1/2) k x² ke barabar kar diya!
- **Sahi:** Collision ke dauran KE loss hoti hai — sirf **momentum** conserve hota hai! Spring compression (collision ke baad) mein mechanical energy conserve hoti hai!

### Galti 2: Efficiency η se multiply kar dena jab input power poochi ho
- **Galat:** P_out = 90 kW aur η = 60% => P_in = 90 × 0.6 = 54 kW!
- **Sahi:** Input power hamesha output se **ZYADA** hoti hai => **P_in = P_out / η = 90 / 0.6 = 150 kW**!

### Galti 3: U(x) minimum par speed minimum maan lena
- **Galat:** U minimum hai toh speed bhi minimum hogi!
- **Sahi:** K + U = E (constant)! Jahan **U minimum** hota hai, wahin **K (aur speed) MAXIMUM** hoti hai!

---

## Mixed Practice Questions

*(Take g = 10 m/s² unless stated otherwise.)*

### Question 1
A constant force F = (4 î - 2 ĵ + 3 k̂) N displaces a body by d = (2 î + 5 ĵ + 2 k̂) m. Find the work done.

**Solution:**
W = (4)(2) + (-2)(5) + (3)(2) = 8 - 10 + 6 = **4 J**.

Jaanch:
- Jaanch: 8 - 10 + 6 = 4 J ✅

---

### Question 2
If a body's speed is doubled, by what factor does its kinetic energy increase?

**Solution:**
K ∝ v² => 2² = **4 times**.

Jaanch:
- Jaanch: (1/2) m (2v)² = 4 [(1/2) m v²] ✅

---

### Question 3
A 5 kg block slides from rest down a smooth ramp of vertical height 5 m and compresses a spring of k = 500 N/m at the bottom. Find the maximum compression.

**Solution:**
m g h = (1/2) k x² => 5(10)(5) = 250 x² => 250 = 250 x² => **x = 1 m**.

Jaanch:
- Jaanch: 250 J = 0.5(500)(1²) ✅

---

### Question 4
A pump lifts 120 kg of water per minute to a height of 25 m. Find its output power in Watts.

**Solution:**
m/t = 120 / 60 = 2 kg/s => P = 2 × 10 × 25 = **500 W**.

Jaanch:
- Jaanch: 2 × 250 = 500 W ✅

---

### Question 5
A 2 kg ball moving at 8 m/s collides and sticks to a stationary 2 kg ball. Find the heat generated in the collision.

**Solution:**
ΔK_loss = (1/2) · [(2×2)/4] · (8²) = (1/2)(1)(64) = **32 J**.

Jaanch:
- Jaanch: K_i = 64 J; v = 4 m/s => K_f = 32 J; loss = 32 J ✅

---

### Question 6
A 4 kg ball moving at 10 m/s makes a head-on elastic collision with a stationary 4 kg ball. Find the final kinetic energy of the first ball.

**Solution:**
Equal masses => velocities swap! First ball stops (**v₁ = 0**), so its final KE = **0 J**.

Jaanch:
- Jaanch: 100% of KE transfers to the second ball ✅

---

### Question 7
A ball is dropped from height 25 m onto a floor with e = 0.6. Find the height of the first rebound.

**Solution:**
h = e² H = (0.6)² × 25 = 0.36 × 25 = **9 m**.

Jaanch:
- Jaanch: 36/100 × 25 = 36 / 4 = 9 m ✅

---

### Question 8
A 1 kg block slides 5 m across a rough floor (μ_k = 0.4) starting with speed 8 m/s. Find its speed at the end of 5 m.

**Solution:**
W_f = -0.4(10)(5) = -20 J; K_i = (1/2)(1)(64) = 32 J.
K_f = 32 - 20 = 12 J = (1/2)(1) v² => v² = 24 => **v = 2 √6 ≈ 4.90 m/s**.

Jaanch:
- Jaanch: a = -4 m/s² => v² = 64 - 2(4)(5) = 24 ✅

---

### Question 9
The potential energy of a particle is U(x) = x² - 6 x + 15 (in J). Find the equilibrium position and the minimum potential energy.

**Solution:**
dU/dx = 2 x - 6 = 0 => **x = 3 m**.
U_min = 9 - 18 + 15 = **6 J**.

Jaanch:
- Jaanch: U(x) = (x - 3)² + 6 => minimum is 6 J at x = 3 m ✅

---

### Question 10
A car engine produces 40 kW of useful power while travelling at 20 m/s. Find the forward driving force exerted on the car.

**Solution:**
F = P / v = 40,000 / 20 = **2000 N**.

Jaanch:
- Jaanch: 2000 × 20 = 40,000 W = 40 kW ✅

---

### Question 11
State whether the following statements are True or False:
(a) In a 2D elastic collision between two identical balls (one initially at rest), they move at 90° to each other after impact.
(b) A conservative force can never do negative work.

**Solution:**
- (a) **True** ✅ — Momentum triangle + Pythagoras KE equation proves θ₁ + θ₂ = 90°!
- (b) **False** ❌ — Jab tum ball upar phenkte ho, gravity (conservative!) **negative work** (-mgh) karti hai!

Jaanch:
- Jaanch: Gravity does negative work on upward motion and positive work on downward motion ✅

---

### Question 12
A 2 kg block is pushed 10 m up a smooth 30° incline at constant speed in 5 s. Find the average power of the pushing force.

**Solution:**
W = m g h = 2 × 10 × (10 sin 30°) = 20 × 5 = 100 J.
P = 100 / 5 = **20 W**.

Jaanch:
- Jaanch: F = mg sin 30° = 10 N; v = 10/5 = 2 m/s => P = 10 × 2 = 20 W ✅

---

## Chapter Wrap-up: Work, Energy and Power at a Glance

| Topic | Core Formula / Rule | Ek Line Mein Yaad Rakho |
|---|---|---|
| [Topic 1: Work & Dot Product](work-energy-and-power.md) | W = F · d = Fd cos θ; W = Area(F–x) | 90° par work = 0; variable force ke liye F–x area lo |
| [Topic 2: KE & Work–Energy](work-energy-and-power-part2.md) | K = (1/2)mv² = p²/(2m); W_all = ΔK | W_all = ΔK sabhi forces (friction samet) ke liye valid hai |
| [Topic 3: PE & Conservative](work-energy-and-power-part3.md) | U_g = mgh; U_s = (1/2)kx²; F = -dU/dx | Conservative = path-independent; U min = stable equilibrium |
| [Topic 4: Mechanical Energy](work-energy-and-power-part4.md) | W_nc = ΔK + ΔU; loop H_min = 2.5 R | Smooth track par v = √(2gh); vertical spring drop = h + x |
| [Topic 5: Power](work-energy-and-power-part5.md) | P = W/t = F · v; 1 hp = 746 W; 1 kWh = 3.6×10⁶ J | kWh energy hai, power nahi; P_in = P_out / η |
| [Topic 6: Collisions](work-energy-and-power-part6.md) | e = (v₂ - v₁)/(u₁ - u₂); ΔK_loss = (1/2)μ(1-e²)(u₁-u₂)² | Momentum always conserved; KE only when e = 1 |
| [Topic 7: Mixed & Wrap-up](work-energy-and-power-part7.md) | Ballistic + spring, rough slide, U(x) wells | Collision mein momentum, baad mein mechanical energy! |

Tumne Work, Energy, Power aur Collisions ko poori tarah master kar liya hai! Agar U(x) equilibrium wells, vertical-sphere detachment angle (cos θ = 2/3), chain sliding off a table, multi-bounce geometric series, aur constant-power kinematics dekhna chahte ho, toh [Gehrai Mein — Advanced Level](work-energy-and-power-advanced.md) zaroor padho!

**Agle chapter mein:** Ab tak humne objects ko point masses maana tha — ab hum asli extended rigid bodies ko ghumayenge! **System of Particles and Rotational Motion** mein hum Centre of Mass, Torque, Moment of Inertia, Angular Momentum, aur Rolling Motion ka safar shuru karenge!
