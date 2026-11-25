> **Class:** 11 | **Subject:** Physics | **Chapter 4:** Laws of Motion (Part 6)

# Sab Kuch Mila Kar: Mixed Problems & Chapter Wrap-up

> **Pichle topic se:** [Dynamics of Circular Motion, Banking of Roads & Vertical Circle](laws-of-motion-part5.md) mein humne curved roads aur vertical loops ke FBDs dekhe. Ab chalo poore chapter ke sabhi tools — Newton's laws, impulse, momentum conservation, connected pulleys, friction, aur circular dynamics — ko ek saath mila kar multi-concept challenges solve karte hain!

---

## Waman ka Industrial Automation & Safety Command Desk

Waman ek Industrial Automation & Safety Chief hai. Uske plant mein har machine ek saath do-teen concepts jodti hai — jaise ek rough inclined ramp par pulley se juda counterweight, ya banked test track par high-speed robotic cart! Waman ke paas ek **Decision Map** hai jo har dynamics problem ka pehla step turant clear kar deta hai.

---

## Decision Map: Kaun Sa Dynamics Tool Kab Lagayein?

| Problem mein kya dikhe? | Kaun sa tool lagao? |
|---|---|
| Single body, force/momentum vs time | **F_net = dp/dt = m a** ([Topic 1](laws-of-motion.md)) |
| Collision, rebound, gun recoil, bomb explosion, F–t graph | **J = Area(F–t) = Δp**; if F_ext = 0 => **Σp = constant** ([Topic 2](laws-of-motion-part2.md)) |
| Lift, hanging ropes, smooth pulleys, blocks in contact | **FBD** banao; **a = Net Pulling Force / Total Mass** ([Topic 3](laws-of-motion-part3.md)) |
| Rough floor / rough incline / wall press | Pehle **f_max = μ_s N** check karo! F ≤ f_max => rest; F > f_max => **f_k = μ_k N** ([Topic 4](laws-of-motion-part4.md)) |
| Flat turn, banked road, cyclist, conical pendulum, vertical loop | **ΣF_inward = m v² / r**; vertical loop min top **√(gR)**, bottom **√(5gR)** ([Topic 5](laws-of-motion-part5.md)) |

---

## 6 Mixed Synthesis Problems

### Problem 1: Hanging Mass Pulling a Block on a Rough Table

A 6 kg block rests on a rough horizontal table (μ_s = 0.4, μ_k = 0.25) and is connected via a smooth edge pulley to a hanging 4 kg block (g = 10 m/s²). Does the system move? If yes, find the acceleration and tension.

**Solution:**
- Normal on 6 kg block: N = 60 N.
- Limiting static friction: f_max = 0.4 × 60 = **24 N**.
- Pulling weight of hanging block = 4 × 10 = **40 N** > 24 N => **Yes, the system moves!**
- Kinetic friction: f_k = 0.25 × 60 = **15 N**.
- Net driving force = 40 - 15 = 25 N; Total mass = 6 + 4 = 10 kg.
- Acceleration: **a = 25 / 10 = 2.5 m/s²**.
- Tension (from 4 kg block): 40 - T = 4(2.5) = 10 => **T = 30 N**.

Jaanch:
- Jaanch: Check 6 kg block: T - f_k = 30 - 15 = 15 = 6(2.5) ✅

---

### Problem 2: Inclined Atwood Machine (Smooth 30° Incline)

A 4 kg block on a smooth 30° inclined plane is connected by a light string over a pulley at the top to a hanging 6 kg block (g = 10 m/s²). Find the acceleration of the blocks and tension in the string.

**Solution:**
- Pulling force of hanging 6 kg = 60 N (downward).
- Opposing gravity component on 4 kg along incline = 4(10) sin 30° = 20 N.
- Net driving force = 60 - 20 = 40 N; Total mass = 4 + 6 = 10 kg.
- **a = 40 / 10 = 4 m/s²** (6 kg moves down, 4 kg moves up the incline).
- Tension: 60 - T = 6(4) = 24 => **T = 36 N**.

Jaanch:
- Jaanch: Check 4 kg block: T - 20 = 36 - 20 = 16 = 4(4) ✅

---

### Problem 3: Bomb Exploding into Three Fragments in 2D

A 5 kg stationary bomb explodes into three fragments: a 1 kg piece moves East at 20 m/s, and a 2 kg piece moves North at 15 m/s. Find the velocity magnitude of the remaining 2 kg piece.

**Solution:**
Initial momentum = 0 => p₁ + p₂ + p₃ = 0.
- p₁ = 1(20) î = 20 î; p₂ = 2(15) ĵ = 30 ĵ.
- p₃ = -(20 î + 30 ĵ) => |p₃| = √(400 + 900) = √1300 = 10 √13 kg m/s.
- Speed v₃ = |p₃| / 2 = **5 √13 ≈ 18.03 m/s**.

Jaanch:
- Jaanch: (2 × 5√13)² = 1300 = 20² + 30² ✅

---

### Problem 4: Lift + Weighing Scale (Spring Balance) Reading

A 10 kg block hangs from a spring balance attached to the ceiling of a lift. What does the spring balance read (in kg-wt, g = 10 m/s²) when the lift: (a) accelerates upward at 3 m/s², (b) moves downward with constant speed 5 m/s?

**Solution:**
- (a) T = m (g + a) = 10(10 + 3) = 130 N = **13 kg-wt**.
- (b) Constant speed => a = 0 => T = 10(10) = 100 N = **10 kg-wt**.

Jaanch:
- Jaanch: Spring balance tension padhta hai; constant speed par a = 0 => true weight ✅

---

### Problem 5: F–t Impulse Followed by Rough Floor Braking

A 4 kg block initially at rest on a smooth floor receives an impulse from a rectangular force of 20 N lasting 2 s. It then slides onto a rough floor with μ_k = 0.25 (g = 10 m/s²). How far does it travel on the rough floor before stopping?

**Solution:**
- Impulse J = 20 × 2 = 40 N s => speed entering rough floor u = 40 / 4 = **10 m/s**.
- Deceleration on rough floor: a = μ_k g = 0.25 × 10 = 2.5 m/s².
- Stopping distance: s = u² / (2a) = 100 / 5 = **20 m**.

Jaanch:
- Jaanch: Stopping time = 10/2.5 = 4 s; avg speed = 5 m/s => 5 × 4 = 20 m ✅

---

### Problem 6: Banked Curve Safe Speed Check

A highway curve of radius 100 m is banked at an angle θ with tan θ = 0.4 (g = 10 m/s²). (a) Find the optimum no-friction speed. (b) If a 1000 kg car drives at this speed, what is the Normal force exerted by the road?

**Solution:**
- (a) v_opt = √(r g tan θ) = √(100 × 10 × 0.4) = √400 = **20 m/s**.
- (b) At optimum speed (zero friction), N cos θ = m g and N sin θ = m v²/r = 4000 N.
  So N = √((m g)² + (m v²/r)²) = √(10,000² + 4,000²) = 1000 √116 ≈ **10,770 N**.

Jaanch:
- Jaanch: N > mg (10,770 N > 10,000 N) kyunki N ko weight aur centripetal force dono sambhalne hain ✅

---

## 3 Synthesis Mistakes (Mixed-Problem Traps)

### Galti 1: Rassi ki tension ko sirf ek side lagta hua dikha dena
- **Galat:** Pulley ke ek block par T laga diya aur doosre par bhool gaye!
- **Sahi:** Khinchi hui rassi **dono ends** par blocks ko andar ki taraf (away from each block) equal force **T** se kheenchti hai!

### Galti 2: Weighing scale par kg (mass) aur N (force) mix kar dena
- **Galat:** N = 720 N aaya toh scale 720 kg dikhayega!
- **Sahi:** Scale reading kg-wt mein **N / g = 720 / 10 = 72 kg-wt** hoti hai!

### Galti 3: 2D bomb explosion mein x aur y momentum ko ek saath scalar add kar dena
- **Galat:** p₁ = 20 (East) aur p₂ = 30 (North) => p₃ = 20 + 30 = 50 kg m/s.
- **Sahi:** Perpendicular components Pythagoras se judte hain: |p₃| = **√(20² + 30²) = 10√13 ≈ 36.06 kg m/s**!

---

## Mixed Practice Questions

*(Take g = 10 m/s² unless stated otherwise.)*

### Question 1
A 3 kg block and a 5 kg block are connected by a string over a smooth pulley. Find the acceleration and tension in the string.

**Solution:**
a = (5 - 3)(10) / 8 = **2.5 m/s²**; T = 2(3)(5)(10) / 8 = **37.5 N**.

Jaanch:
- Jaanch: 50 - 37.5 = 12.5 = 5(2.5) ✅

---

### Question 2
A 4 kg block lies on a rough floor (μ_s = 0.5, μ_k = 0.4). A horizontal force of 16 N is applied. Find the friction force and acceleration.

**Solution:**
f_max = 0.5 × 40 = 20 N. Since 16 N < 20 N, block stays at rest: **a = 0**, **f = 16 N**.

Jaanch:
- Jaanch: Static friction self-adjusts to match applied 16 N ✅

---

### Question 3
A 0.2 kg ball hits a wall perpendicularly at 15 m/s and rebounds at 10 m/s in 0.05 s. Find the average force exerted by the wall.

**Solution:**
|Δp| = 0.2 × (15 + 10) = 5 N s.
F_avg = 5 / 0.05 = **100 N**.

Jaanch:
- Jaanch: 100 × 0.05 = 5 N s ✅

---

### Question 4
A 70 kg person is in a lift decelerating downward at 2 m/s². Find the apparent weight (in N).

**Solution:**
Downward deceleration means acceleration is **upward** (+2 m/s²)!
N = 70 (10 + 2) = **840 N**.

Jaanch:
- Jaanch: Upward acceleration increases apparent weight above 700 N ✅

---

### Question 5
A 2 kg block slides down a rough 30° incline (μ_k = 1/(2√3)). Find its acceleration.

**Solution:**
a = g (sin 30° - μ_k cos 30°) = 10 (1/2 - [1/(2√3)] · [√3/2]) = 10 (1/2 - 1/4) = **2.5 m/s²**.

Jaanch:
- Jaanch: 1/2 - 1/4 = 1/4 => 10 × 0.25 = 2.5 m/s² ✅

---

### Question 6
Find the maximum speed of a car on a flat curve of radius 25 m if μ_s = 0.4.

**Solution:**
v_max = √(0.4 × 25 × 10) = √100 = **10 m/s**.

Jaanch:
- Jaanch: v²/r = 100/25 = 4 m/s² = μ_s g ✅

---

### Question 7
A 10 kg gun fires a 0.1 kg bullet at 300 m/s. Find the recoil velocity of the gun.

**Solution:**
10 v_g + 0.1(300) = 0 => 10 v_g = -30 => **v_g = -3 m/s**.

Jaanch:
- Jaanch: 10 × 3 = 30 = 0.1 × 300 ✅

---

### Question 8
Three blocks of 1 kg, 2 kg, and 3 kg are in contact on a smooth floor and pushed by 24 N on the 1 kg block. Find the contact force between the 2 kg and 3 kg blocks.

**Solution:**
a = 24 / 6 = 4 m/s².
Force pushing the 3 kg block alone: N₂₃ = 3 × 4 = **12 N**.

Jaanch:
- Jaanch: 3 × 4 = 12 N ✅

---

### Question 9
A 1 kg stone tied to a 0.4 m string just completes a vertical circle. Find its speed at the top and bottom of the circle.

**Solution:**
- Top: v_T = √(10 × 0.4) = √4 = **2 m/s**.
- Bottom: v_B = √(5 × 10 × 0.4) = √20 = **2 √5 ≈ 4.47 m/s**.

Jaanch:
- Jaanch: v_B² - v_T² = 20 - 4 = 16 = 4 g R ✅

---

### Question 10
A 4 kg block on a rough horizontal table (μ_k = 0.5) is pulled by a hanging 6 kg block via a smooth pulley. Find the acceleration of the system.

**Solution:**
f_k = 0.5 × 40 = 20 N; driving weight = 60 N; total mass = 10 kg.
a = (60 - 20) / 10 = **4 m/s²**.

Jaanch:
- Jaanch: T = 60 - 6(4) = 36 N; on 4 kg: 36 - 20 = 16 = 4(4) ✅

---

### Question 11
State whether the following statements are True or False:
(a) Friction always acts opposite to the direction of motion of a body.
(b) A smooth banked road allows a car to turn safely at the optimum speed even if the road is icy (μ = 0).

**Solution:**
- (a) **False** ❌ — Friction opposes **relative slipping**, not necessarily motion (e.g. walking, accelerating car tires).
- (b) **True** ✅ — N sin θ provides the required centripetal force at v = √(r g tan θ).

Jaanch:
- Jaanch: Core insights from Topics 4 and 5 ✅

---

### Question 12
A 5 kg block is pressed against a rough vertical wall (μ_s = 0.25) with a horizontal force of 250 N. Does it slip? Find the friction force acting on it.

**Solution:**
N = 250 N => f_max = 0.25 × 250 = 62.5 N.
Weight mg = 50 N < 62.5 N => **No, it does NOT slip!**
Static friction self-adjusts to balance weight: **f = 50 N** (upward).

Jaanch:
- Jaanch: Weight 50 N balanced by upward static friction 50 N (not 62.5 N!) ✅

---

## Chapter Wrap-up: Laws of Motion at a Glance

| Topic | Core Formula / Rule | Ek Line Mein Yaad Rakho |
|---|---|---|
| [Topic 1: Laws 1 & 2](laws-of-motion.md) | p = mv; F_net = dp/dt = ma | Constant velocity means F_net = 0; mass measures inertia |
| [Topic 2: Law 3, Impulse & Momentum](laws-of-motion-part2.md) | F_AB = -F_BA; J = F Δt = Δp; F_ext = 0 => Σp = const | Action-reaction act on DIFFERENT bodies; rebound Δp = 2mv |
| [Topic 3: FBDs & Pulleys](laws-of-motion-part3.md) | Lift N = m(g ± a); a = Net Force / Total Mass | Sirf chosen body par lagne wale external forces FBD mein banao |
| [Topic 4: Friction](laws-of-motion-part4.md) | f_s ≤ μ_s N; f_k = μ_k N; tan α = μ_s; incline N = mg cos θ | Static friction self-adjusting hai — pehle f_max check karo! |
| [Topic 5: Circular Dynamics](laws-of-motion-part5.md) | Flat √(μrg); Banked √(rg tan θ); Loop top √(gR), bottom √(5gR) | Centripetal force koi naya force nahi, real forces ka inward role hai |
| [Topic 6: Mixed & Wrap-up](laws-of-motion-part6.md) | Rough pulley, inclined Atwood, 2D explosion | Decision Map se FBD + sign convention fix karke solve karo |

Tumne Newton's Laws of Motion ko zero se lekar banked curves aur vertical loops tak master kar liya hai! Agar pseudo forces in accelerating wedges, movable-pulley string constraints, two-block friction stacks, aur variable-mass rocket thrust jaise deep challenges dekhna chahte ho, toh [Gehrai Mein — Advanced Level](laws-of-motion-advanced.md) zaroor padho!

**Agle chapter mein:** Ab jab humein forces aur motion dono ka rishta pata chal gaya, toh chalo physics ki sabse powerful currency — **Work, Energy and Power** — ke baare mein seekhte hain!
