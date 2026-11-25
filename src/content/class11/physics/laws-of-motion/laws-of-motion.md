> **Class:** 11 | **Subject:** Physics | **Chapter 4:** Laws of Motion

# Inertia, Momentum & Newton's First and Second Laws

> **Pichle chapter aur pehle ki padhai se:** [Motion in a Plane](../motion-in-a-plane/motion-in-a-plane-part5.md) mein humne sirf motion ka description (kinematics) padha. Ab hum **Dynamics** (motion ka kaaran — Force!) shuru kar rahe hain! Force aur Newton's laws ka basic intro tum [Class 9 Force and Laws of Motion](../../../class9/physics/force-and-laws-of-motion/force-and-laws-of-motion.md) mein dekh chuke ho — yahan hum ise vector momentum, rate-of-change dp/dt, aur real engineering applications tak le jayenge!

---

## Hemendra ka Ice-Rink & Air-Track Demo

Hemendra ek physics demonstration lab mein air-track chalata hai. 2000 saal pehle Aristotle ne kaha tha: "Kisi cheez ko chalte rakhne ke liye lagatar force lagana padta hai." Kyunki zameen par koi bhi ball thodi der baad ruk jati hai!

Par jab Hemendra ne air-track on kiya (friction lagbhag zero!) aur ek glider ko halka sa dhakka diya, toh glider bina kisi force ke constant velocity se phisalta chala gaya! Galileo aur Newton ne samjhaya: **motion banaye rakhne ke liye nahi, balki friction ko cancel karne ke liye force lagta tha!**

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Inertia | Kisi object ki apni state of rest ya uniform straight-line motion ko **badalne ka virodh** karne ki tendency (mass jitna zyada, inertia utna zyada!) |
| Inertial Frame | Aisa reference frame (non-accelerating) jahan Newton ke laws seedha valid hote hain |
| Linear Momentum (p) | Mass aur velocity ka vector product: **p = m v** (SI unit: **kg m s⁻¹**) |
| Net External Force (F_net) | Object par lagne wale sabhi bahari forces ka vector sum |
| 1 Newton (1 N) | Woh force jo 1 kg mass mein 1 m s⁻² ka acceleration paida kare (1 N = 1 kg m s⁻²) |

---

## 1. Newton's First Law (Law of Inertia)

> **Newton's First Law:** Every body continues in its state of rest or of uniform motion in a straight line unless compelled by a **net external force** to change that state.

Teen prakar ka inertia:
1. **Inertia of Rest:** Bus achanak chalne par passengers peeche ki taraf girte hain.
2. **Inertia of Motion:** Chalti bus mein achanak brake lagne par passengers aage jhukte hain.
3. **Inertia of Direction:** Bus tezi se left mudne par passengers right side ki taraf khinchte hain.

**Note:** First Law qualitatively **Force** ko define karta hai aur **Inertial Frames** ki pehchan batata hai.

---

## 2. Linear Momentum & Newton's Second Law

Ek cycle aur ek bhari truck dono 10 m/s se chal rahe hon — truck ko rokna hazaar guna mushkil hai! Isliye Newton ne **Linear Momentum** define kiya:
**p = m v** (vector quantity, direction same as velocity v!)

> **Newton's Second Law:** The rate of change of linear momentum of a body is directly proportional to the applied net external force and takes place in the direction in which the force acts:
> **F_net = dp / dt**

**Kyun F_net = m a?**
Jab mass m constant ho:
F_net = d(m v) / dt = m (dv / dt) = **m a**

Vector components mein (3 independent equations!):
- **F_x = m a_x**,  **F_y = m a_y**,  **F_z = m a_z**

*(First Law is a special case of Second Law: agar F_net = 0, toh a = 0 => velocity constant ya rest!)*

---

## Solved Examples

### Example 1: Constant Force Accelerating a 2 kg Block

A constant net force acts on a 2 kg block, increasing its velocity from 3 m/s to 15 m/s in 4 s along a straight line. Find the magnitude of the force and the change in momentum.

**Solution:**
- Initial momentum p₁ = 2 × 3 = 6 kg m/s; Final momentum p₂ = 2 × 15 = 30 kg m/s.
- Change in momentum Δp = 30 - 6 = **24 kg m/s**.
- Force F = Δp / Δt = 24 / 4 = **6 N**.

Jaanch:
- Jaanch: a = (15 - 3)/4 = 3 m/s² => F = m a = 2 × 3 = 6 N ✅

---

### Example 2: Bullet Stopping Inside a Wooden Block

A bullet of mass 0.04 kg moving with a speed of 90 m/s enters a heavy wooden block and is stopped after a distance of 60 cm (0.60 m). What is the average resistive force exerted by the block on the bullet?

**Solution:**
- u = 90 m/s, v = 0, s = 0.60 m.
- v² = u² + 2as => 0 = 8100 + 2 a (0.60) => 1.2 a = -8100 => a = **-6750 m/s²**.
- Resistive force magnitude: F = m |a| = 0.04 × 6750 = **270 N**.

Jaanch:
- Jaanch: Work/distance check: F × s = 270 × 0.6 = 162 J; (1/2) m u² = 0.02 × 8100 = 162 J ✅

---

### Example 3: 2D Vector Force -> Acceleration

A body of mass 2 kg is acted upon by a net force F = (6 î - 8 ĵ) N. Find its acceleration vector and the magnitude of acceleration.

**Solution:**
- a = F / m = (6 î - 8 ĵ) / 2 = **(3 î - 4 ĵ) m/s²**.
- Magnitude |a| = √(3² + (-4)²) = √25 = **5 m/s²**.

Jaanch:
- Jaanch: |F| = √(36 + 64) = 10 N => |a| = 10 / 2 = 5 m/s² ✅

---

### Example 4: Time-Varying Momentum p(t)

The momentum of a particle varies with time as p(t) = (4 t² + 3 t + 5) kg m/s. Find the instantaneous force acting on the particle at t = 2 s.

**Solution:**
F(t) = dp / dt = 8 t + 3.
At t = 2 s: F(2) = 8(2) + 3 = **19 N**.

Jaanch:
- Jaanch: Constant 5 ka derivative 0; d(4t²)/dt = 8t; 16 + 3 = 19 N ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Constant velocity banaye rakhne ke liye force zaroori samajhna (Aristotle's Fallacy)
- **Galat:** Car 60 km/h constant speed par chal rahi hai, toh us par net forward force lag raha hoga!
- **Sahi:** Constant velocity ka matlab **a = 0 => F_net = 0**! Engine ka forward force sirf friction aur air drag ko balance karta hai.

### Galti 2: Ek akela force dekh kar F = m a laga dena
- **Galat:** 5 kg block par right mein 20 N aur left mein 8 N laga hai -> a = 20 / 5 = 4 m/s².
- **Sahi:** Second law mein hamesha **NET external force** aata hai: F_net = 20 - 8 = 12 N => a = 12 / 5 = **2.4 m/s²**!

### Galti 3: Momentum change Δp mein sign/direction bhool jana
- **Galat:** 2 kg ball +5 m/s se deewar se takra kar -5 m/s se lauti => Δp = 10 - 10 = 0!
- **Sahi:** Δp = p_final - p_initial = (-10) - (+10) = **-20 kg m/s** (magnitude **20 kg m/s**, zero nahi!).

---

## Quick Recap

- **First Law:** F_net = 0 <=> constant velocity (or rest); mass measures inertia.
- **Momentum:** p = m v (vector, kg m/s).
- **Second Law:** F_net = dp / dt = m a (for constant mass); holds independently along x, y, z.

---

## Practice Questions

### Question 1
A force of 25 N acts on a 5 kg block initially at rest on a smooth horizontal floor. Find its velocity after 6 s.

**Solution:**
a = F / m = 25 / 5 = 5 m/s².
v = 0 + 5(6) = **30 m/s**.

Jaanch:
- Jaanch: Δp = F t = 25 × 6 = 150 kg m/s; v = 150 / 5 = 30 m/s ✅

---

### Question 2
A car of mass 1000 kg moving at 72 km/h is brought to rest in 5 s by uniform braking. Find the retarding force.

**Solution:**
u = 72 × (5/18) = 20 m/s, v = 0, t = 5 s => a = -4 m/s².
Retarding force magnitude F = 1000 × 4 = **4000 N**.

Jaanch:
- Jaanch: Δp = 1000 × 20 = 20,000; 20,000 / 5 = 4000 N ✅

---

### Question 3
Two forces F₁ = (3 î + 4 ĵ) N and F₂ = (5 î + 2 ĵ) N act on a 2 kg mass. Find its acceleration vector and magnitude.

**Solution:**
F_net = (3 + 5) î + (4 + 2) ĵ = (8 î + 6 ĵ) N.
a = F_net / 2 = **(4 î + 3 ĵ) m/s²**; |a| = √(16 + 9) = **5 m/s²**.

Jaanch:
- Jaanch: |F_net| = √(64 + 36) = 10 N; 10 / 2 = 5 m/s² ✅

---

### Question 4
A 0.5 kg ball moving at 10 m/s hits a wall perpendicularly and rebounds at 10 m/s in 0.02 s. Find the magnitude of the average force exerted by the wall.

**Solution:**
Δp = m (v - u) = 0.5 (-10 - 10) = -10 kg m/s (magnitude 10 kg m/s).
F = |Δp| / Δt = 10 / 0.02 = **500 N**.

Jaanch:
- Jaanch: 2 m v / Δt = 2(0.5)(10) / 0.02 = 10 / 0.02 = 500 N ✅

---

### Question 5
The motion of a particle of mass m is described by y = u t + (1/2) g t². Find the force acting on the particle.

**Solution:**
v = dy/dt = u + g t; a = dv/dt = g.
Force F = m a = **m g** (downward gravity).

Jaanch:
- Jaanch: Constant acceleration g corresponds to weight mg ✅

---

### Question 6
A constant force acts on a body of mass 3 kg and changes its speed from 2 m/s to 3.5 m/s in 25 s without changing direction. Find the magnitude of the force.

**Solution:**
a = (3.5 - 2) / 25 = 1.5 / 25 = 0.06 m/s².
F = 3 × 0.06 = **0.18 N**.

Jaanch:
- Jaanch: Δp = 3 × 1.5 = 4.5; 4.5 / 25 = 0.18 N ✅

---

### Question 7
A machine gun fires bullets of mass 0.05 kg at 400 m/s at a rate of 6 bullets per second. Find the average force required to hold the gun steady.

**Solution:**
Momentum per bullet = 0.05 × 400 = 20 kg m/s.
Rate of change of momentum F = 6 × 20 = **120 N**.

Jaanch:
- Jaanch: F = n m v / t = 6 × 0.05 × 400 = 120 N ✅

---

### Question 8
A particle's momentum is p(t) = (2 t³ - 5 t) kg m/s. Find the force at t = 3 s.

**Solution:**
F(t) = dp/dt = 6 t² - 5.
At t = 3 s: F(3) = 6(9) - 5 = 54 - 5 = **49 N**.

Jaanch:
- Jaanch: 6 × 9 = 54; 54 - 5 = 49 N ✅

---

### Question 9
A 4 kg block is pulled along a smooth floor by a 20 N force inclined at 60° above the horizontal. Find its horizontal acceleration.

**Solution:**
Horizontal component F_x = 20 cos 60° = 20(1/2) = 10 N.
a_x = F_x / m = 10 / 4 = **2.5 m/s²**.

Jaanch:
- Jaanch: Vertical component 10√3 N < weight 40 N, so block stays on floor ✅

---

### Question 10
A rocket of initial mass 20,000 kg is blasted upward with an initial acceleration of 5 m/s² (g = 10 m/s²). Find the initial upward thrust of the blast.

**Solution:**
Net upward force: F_thrust - m g = m a
F_thrust = m (g + a) = 20,000 × (10 + 5) = **300,000 N (3 × 10⁵ N)**.

Jaanch:
- Jaanch: Weight = 2×10⁵ N; extra net force = 1×10⁵ N; sum = 3×10⁵ N ✅

---

### Question 11
State whether the following statements are True or False:
(a) A body moving with constant velocity must have zero net external force acting on it.
(b) Mass is the quantitative measure of linear inertia.

**Solution:**
- (a) **True** ✅ — Constant velocity => a = 0 => F_net = 0.
- (b) **True** ✅ — Zyada mass ka matlab zyada inertia.

Jaanch:
- Jaanch: Direct consequence of Newton's First and Second Laws ✅

---

### Question 12
A 10 kg body initially at rest is acted upon by two perpendicular forces of 6 N and 8 N. Find the magnitude of its velocity after 5 s.

**Solution:**
|F_net| = √(6² + 8²) = 10 N.
|a| = 10 / 10 = 1 m/s².
v = 0 + 1 × 5 = **5 m/s**.

Jaanch:
- Jaanch: 6-8-10 triple => a = 1 m/s² => v(5) = 5 m/s ✅

---

Ab tumhe clear ho gaya ki force velocity ka nahi balki **velocity badalne (acceleration)** ka kaaran hai!

**Agle topic mein:** Action-reaction pairs, wicketkeeper ke haath peeche kheenchne ka science (Impulse), aur gun recoil — chalo padhte hain [Newton's Third Law, Impulse & Conservation of Linear Momentum](laws-of-motion-part2.md)!
