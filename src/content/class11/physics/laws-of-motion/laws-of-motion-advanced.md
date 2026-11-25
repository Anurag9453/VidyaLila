> **Class:** 11 | **Subject:** Physics | **Chapter 4:** Laws of Motion (Gehrai Mein — Advanced Level)

# Laws of Motion — Gehrai Mein (Advanced Level)

> **Core chapter se:** Core lessons ([Topic 1](laws-of-motion.md) se [Topic 6](laws-of-motion-part6.md)) mein humne Newton's laws, FBDs, static/kinetic friction, aur circular dynamics cover kiye. Ab is **Gehrai Mein** section mein hum woh deep dynamics techniques seekhenge jo hardest mechanics setups ko clean bana deti hain — **Non-inertial frames & Pseudo Force**, **Movable-Pulley Constraints**, **Two-Block Friction Stacks**, **Minimum Pulling Force**, aur **Variable-Mass Rocket Thrust**!

---

## Zubeida ka Robotics-Dynamics Research Lab

Zubeida ek robotics-dynamics researcher hai. Uske lab mein ek chhota block ek **smooth 37° wedge** par rakha hai — wedge ko horizontally kis exact acceleration a = g tan 37° = 7.5 m/s² se chalaya jaye ki block wedge par bina phisle chipka rahe? Aur jab ek **2 kg** block ek **4 kg** block ke upar rakha ho (μ = 0.5), toh neeche wale block ko kitne max force se kheenchne tak dono saath chalenge?

Chalo Zubeida ke saath in paanch elite dynamics weapons ko ekdam crystal clear karte hain!

---

## 1. Non-Inertial Frames & Pseudo Force

Newton ke laws sirf inertial (non-accelerating) frames mein valid hote hain. Par agar tum kisi accelerating frame (jaise lift ya accelerating wedge, acceleration **a_frame**) ke andar baith kar FBD banana chaho, toh bas **ek extra imaginary force** add kar do:

```
  F_pseudo = - m a_frame   (always OPPOSITE to the frame's acceleration!)
```

**Smooth Wedge–Block Trick:**
Angle **θ** wale smooth wedge ko right (+x) mein acceleration **a** se chalane par block par left (-x) mein pseudo force **m a** lagta hai.
Incline ke along equilibrium ke liye:
m a cos θ = m g sin θ  =>  **a = g tan θ**!

---

## 2. Movable-Pulley String Constraints (Virtual Work / T · a = 0)

Jab ek hi string movable pulleys se guzarti hai, toh sabhi blocks ka acceleration same nahi hota!
**Master Shortcut (Zero Internal Tension Work):**
Inextensible massless string total work 0 karti hai, isliye sabhi connected blocks ke liye:
```
  Σ (T · a) = 0   (jahan T aur a same direction mein + aur opposite mein -!)
```
- Example: Agar Block 1 par tension **T** lag rahi hai aur Block 2 par movable pulley ke karan **2T** lag rahi hai, toh **T a₁ = (2T) a₂  =>  a₁ = 2 a₂**!

---

## 3. Two-Block Friction Stack (Will They Move Together?)

Block A (mass m₁) Block B (mass m₂) ke upar rakha hai (beech mein friction **μ**, floor smooth).
**3-Step Foolproof Method:**
1. Maan lo dono **saath (together)** chal rahe hain => common acceleration **a_common = F / (m₁ + m₂)**.
2. Jis block par direct F **NAHI** lag raha (passive block), use sirf friction chala sakta hai => uska max possible acceleration **a_max = f_max / m_passive** nikalo!
3. Compare karo:
   - Agar **a_common ≤ a_max**: dono **SAATH** chalenge with **a = a_common**!
   - Agar **a_common > a_max**: slipping hogi — dono ke alag-alag FBDs mein **f_k = μ m₁ g** lagao!

---

## 4. Minimum Force to Pull a Block on a Rough Floor

Horizontal pull se N = mg rehta hai, toh F = μ mg lagta hai. Par agar hum thode upward angle **θ** par kheenchein, toh N = mg - F sin θ kam ho jata hai aur friction bhi kam ho jata hai!
- Horizontal equilibrium: F cos θ = μ (m g - F sin θ)
  => F = μ m g / (cos θ + μ sin θ)
- Denominator (cos θ + μ sin θ) ka maximum value **√(1 + μ²)** hota hai (at **tan θ = μ**)!
- Therefore:
  **F_min = μ m g / √(1 + μ²)**  (at angle **θ = tan⁻¹(μ)**, i.e., angle of friction!)

---

## 5. Variable-Mass Rocket Thrust

Jab koi rocket gas ko relative speed **v_rel** se peeche fekta hai (mass ejection rate **dm/dt**):
```
  Upward Thrust:     F_thrust = v_rel (dm / dt)
  Net Acceleration:  a = (v_rel (dm / dt) - m g) / m
```

---

## 6 Deep Solved Problems

### Problem 1: Accelerating Smooth Wedge (Pseudo Force)

A 2 kg block rests on a smooth inclined wedge of angle 37° (tan 37° = 3/4, g = 10 m/s²). What horizontal acceleration a must be given to the wedge so that the block does not slip on it? Also find the Normal force between block and wedge.

**Solution:**
In the wedge's non-inertial frame, pseudo force **m a** acts horizontally backward:
- Along incline: m a cos 37° = m g sin 37° => a = g tan 37° = 10 × (3/4) = **7.5 m/s²**.
- Perpendicular to incline: N = m g cos 37° + m a sin 37° = m g / cos 37° = 20 / (4/5) = **25 N**.

Jaanch:
- Jaanch: Ground frame check: N cos 37° = 25(0.8) = 20 N = mg; N sin 37° = 25(0.6) = 15 N = 2 × 7.5 ✅

---

### Problem 2: Movable Pulley Constraint (a₁ = 2 a₂)

Block A (1 kg) lies on a smooth horizontal table and is tied to a string passing over a fixed edge pulley, around a movable pulley carrying hanging Block B (4 kg), and fixed to the ceiling. Find the accelerations a_A and a_B (g = 10 m/s²).

**Solution:**
Let tension in the string be T.
- Block A feels tension T => T = m_A a_A = 1 · a_A.
- Block B hangs from 2 segments of the string (upward 2T) => 40 - 2T = 4 a_B.
- Constraint (Σ T · a = 0): T a_A = (2T) a_B => **a_A = 2 a_B**.
Substitute a_A = 2 a_B into T = a_A => T = 2 a_B.
Put in Block B's equation: 40 - 2(2 a_B) = 4 a_B => 40 = 8 a_B => **a_B = 5 m/s²**!
Then **a_A = 10 m/s²** and **T = 10 N**.

Jaanch:
- Jaanch: Block A: T = 10 = 1(10); Block B: 40 - 2(10) = 20 = 4(5) ✅

---

### Problem 3: Two-Block Friction Stack (Maximum Force Before Slipping)

A 2 kg block rests on top of a 4 kg block on a smooth horizontal floor. The coefficient of static friction between the two blocks is μ = 0.5 (g = 10 m/s²). Find the maximum horizontal force F that can be applied to the **lower 4 kg block** so that both blocks move together without slipping.

**Solution:**
- Limiting friction between blocks: f_max = 0.5 × (2 × 10) = **10 N**.
- Upper 2 kg block is the passive block (only friction accelerates it!):
  a_max = f_max / m_upper = 10 / 2 = **5 m/s²**.
- Maximum force for both blocks (2 + 4 = 6 kg) to move at 5 m/s²:
  F_max = (2 + 4) × 5 = **30 N**.

Jaanch:
- Jaanch: At F = 30 N, a = 30/6 = 5 m/s²; required friction on 2 kg = 2 × 5 = 10 N = f_max ✅

---

### Problem 4: Minimum Pulling Force at Optimal Angle

A 10 kg block rests on a rough floor with μ_s = 3/4 (g = 10 m/s²). Find the minimum force required to just slide the block and the angle at which it must be applied.

**Solution:**
- Angle: tan θ = μ_s = 3/4 => **θ = 37° above horizontal**.
- Minimum force: F_min = μ_s m g / √(1 + μ_s²) = (0.75 × 100) / √(1 + 9/16) = 75 / (5/4) = **60 N**.
  (Compare with horizontal pull: 0.75 × 100 = 75 N — angled pull saves 15 N!)

Jaanch:
- Jaanch: At F = 60 N, θ = 37°: F_x = 48 N, F_y = 36 N => N = 100 - 36 = 64 N => f_max = 0.75(64) = 48 N = F_x ✅

---

### Problem 5: Variable-Mass Rocket Launch

A 1000 kg rocket burns fuel at the rate of 5 kg/s, ejecting exhaust gases at a relative speed of 4000 m/s (g = 10 m/s²). Find: (a) the upward thrust, (b) the initial upward acceleration of the rocket.

**Solution:**
- (a) F_thrust = v_rel (dm/dt) = 4000 × 5 = **20,000 N**.
- (b) Net upward force = F_thrust - m g = 20,000 - 10,000 = 10,000 N.
  Initial acceleration a = 10,000 / 1000 = **10 m/s²**.

Jaanch:
- Jaanch: Thrust is double the weight (20 kN vs 10 kN) => a = (2mg - mg)/m = g = 10 m/s² ✅

---

### Problem 6: Spring-Cut Instantaneous Acceleration

Two blocks A (2 kg) and B (3 kg) are hung vertically from the ceiling: a light spring connects ceiling to A, and an inextensible string connects A to B (g = 10 m/s²). If the **string** between A and B is suddenly cut, find the instantaneous accelerations of A and B just after the cut.

**Solution:**
**Key Physics:** Spring force **CANNOT change instantaneously** (it depends on extension x), whereas string tension drops to **0 instantly**!
- Before cut (equilibrium): String tension T = 30 N; Spring force F_s = (2 + 3) g = **50 N** (upward).
- Immediately after cutting the string (T -> 0, F_s stays 50 N!):
  - Block B (3 kg): only gravity acts => **a_B = 10 m/s² downward**.
  - Block A (2 kg): F_s = 50 N up, weight = 20 N down => net upward force = 30 N => **a_A = 30 / 2 = 15 m/s² upward**!

Jaanch:
- Jaanch: Notice a_A = (m_B / m_A) g = (3/2) g = 15 m/s² upward ✅

---

## 3 Advanced Mistakes

### Galti 1: Ground (inertial) frame mein bhi pseudo force laga dena
- **Galat:** Ground se dekhte hue bhi block par peeche m a laga dena!
- **Sahi:** Pseudo force **SIRF accelerating (non-inertial) frame** mein lagta hai — ground frame mein sirf real forces (mg, N, T, f) lagte hain!

### Galti 2: Movable pulley mein sabhi blocks ka acceleration equal maan lena
- **Galat:** Block A aur hanging Block B dono ka acceleration a maan kar solve kar dena.
- **Sahi:** Hamesha **Σ (T · a) = 0** check karo! Agar ek par T aur doosre par 2T hai toh **a₁ = 2 a₂**!

### Galti 3: Rough floor par horizontal pull ko minimum force maan lena
- **Galat:** Horizontal pull mein poora F aage lagta hai, toh wahi minimum force hoga!
- **Sahi:** Upward angle **θ = tan⁻¹(μ)** par pull karne se Normal force kam hota hai aur **F_min = μ mg / √(1 + μ²)** horizontal pull (μ mg) se kam aata hai!

---

## Practice Questions (Advanced)

*(Take g = 10 m/s² unless stated otherwise.)*

### Question 1
A smooth wedge of angle 45° carries a 3 kg block. What horizontal acceleration must be given to the wedge so the block remains stationary on it?

**Solution:**
a = g tan 45° = 10 × 1 = **10 m/s²**.

Jaanch:
- Jaanch: m a cos 45° = m g sin 45° => a = g = 10 m/s² ✅

---

### Question 2
A pendulum bob hangs from the ceiling of a car accelerating horizontally at 7.5 m/s². Find the angle θ that the string makes with the vertical in equilibrium inside the car.

**Solution:**
Pseudo force m a backward + gravity m g downward => tan θ = a / g = 7.5 / 10 = 3 / 4 => **θ = 37°**.

Jaanch:
- Jaanch: tan 37° = 3/4 ✅

---

### Question 3
A 2 kg block rests on top of a 4 kg block on a smooth floor (μ = 0.5 between blocks). If a horizontal force F is now applied to the **upper 2 kg block**, find the maximum F for which both move together.

**Solution:**
f_max = 0.5 × 20 = 10 N.
Now the **lower 4 kg block** is passive! Its max acceleration a_max = 10 / 4 = **2.5 m/s²**.
So F_max = (2 + 4) × 2.5 = **15 N** (half of when applied to lower block!).

Jaanch:
- Jaanch: At F = 15 N, a = 15/6 = 2.5 m/s²; friction needed on 4 kg = 4 × 2.5 = 10 N = f_max ✅

---

### Question 4
Find the minimum force required to slide a 5 kg block on a rough horizontal floor with μ_s = 1.

**Solution:**
F_min = μ_s m g / √(1 + μ_s²) = (1 × 50) / √2 = **25 √2 ≈ 35.36 N** (at 45° above horizontal).

Jaanch:
- Jaanch: Horizontal pull would take 50 N; 45° pull takes only 35.36 N ✅

---

### Question 5
A rocket of mass 500 kg burns fuel at 2 kg/s with exhaust speed 2500 m/s relative to the rocket. Find its thrust and whether it can lift off from Earth.

**Solution:**
Thrust = v_rel (dm/dt) = 2500 × 2 = **5000 N**.
Weight = 500 × 10 = 5000 N => Thrust just balances weight (**a = 0**, it hovers and will rise as mass decreases!).

Jaanch:
- Jaanch: 2500 × 2 = 5000 N = 500 × 10 N ✅

---

### Question 6
In Question 6 of Solved Problems (spring between ceiling and 2 kg block A; string between A and 3 kg block B), what are the instantaneous accelerations of A and B if the **spring** is cut instead of the string?

**Solution:**
Spring cut => F_s drops to 0 instantly! Both A and B fall freely together under gravity (string goes slack, T = 0):
**a_A = 10 m/s² downward**, **a_B = 10 m/s² downward**.

Jaanch:
- Jaanch: Combined system has only gravity acting => free fall at g = 10 m/s² ✅

---

### Question 7
In a movable pulley system, Block 1 feels tension 3T and Block 2 feels tension T along the same inextensible string. If Block 1 moves upward with acceleration 2 m/s², find the downward acceleration of Block 2.

**Solution:**
Σ (T · a) = 0 => (3T)(2) = T a₂ => **a₂ = 6 m/s²** downward.

Jaanch:
- Jaanch: 3 × 2 = 1 × 6 ✅

---

### Question 8
A 2 kg block rests on a 3 kg block on a smooth floor (μ_s = μ_k = 0.4). A horizontal force of 30 N is applied to the **lower 3 kg block**. Find the accelerations of both blocks.

**Solution:**
- f_max = 0.4 × 20 = 8 N => max acceleration of upper 2 kg block = 8 / 2 = **4 m/s²**.
- If together: a_common = 30 / 5 = 6 m/s² > 4 m/s² => **Slipping occurs!**
- Upper 2 kg block: **a_upper = 8 / 2 = 4 m/s²**.
- Lower 3 kg block: (30 - 8) / 3 = **22 / 3 ≈ 7.33 m/s²**.

Jaanch:
- Jaanch: Centre-of-mass check: (2×4 + 3×22/3) / 5 = (8 + 22)/5 = 6 m/s² = 30/5 ✅

---

### Question 9
Sand drops vertically at a rate of 0.5 kg/s onto a conveyor belt moving horizontally at a constant speed of 4 m/s. Find the extra horizontal force required to keep the belt moving at constant 4 m/s.

**Solution:**
F = v (dm/dt) = 4 × 0.5 = **2 N**.

Jaanch:
- Jaanch: Momentum added per second = 0.5 kg/s × 4 m/s = 2 kg m/s² = 2 N ✅

---

### Question 10
A block of mass m rests on a smooth wedge of angle 30°. What horizontal acceleration a (in the direction **away** from the incline's vertical face, i.e., toward the left) causes the block to just lose contact (N = 0) with the wedge?

**Solution:**
Pseudo force m a now acts to the right (+x), lifting the block off the wedge!
Perpendicular to incline: N + m a sin 30° = m g cos 30°.
For N = 0: a sin 30° = g cos 30° => **a = g cot 30° = 10 √3 ≈ 17.32 m/s²**.

Jaanch:
- Jaanch: As θ -> 0 (flat), cot θ -> ∞ (never lifts); at 30°, cot 30° = √3 ✅

---

### Question 11
A heavy uniform rope of mass 4 kg and length 2 m lies on a smooth horizontal floor and is pulled at one end by a horizontal force of 20 N. Find the tension in the rope at a distance of 0.5 m from the pulled end.

**Solution:**
- Acceleration of entire rope: a = 20 / 4 = 5 m/s².
- Remaining length behind the 0.5 m mark = 2 - 0.5 = 1.5 m => mass behind = (1.5 / 2) × 4 = 3 kg.
- Tension pulls this 3 kg trailing section: T = 3 × 5 = **15 N**.

Jaanch:
- Jaanch: Linear drop from 20 N at pulled end to 0 N at free end: 20 × (1.5/2) = 15 N ✅

---

### Question 12
A particle of mass m is placed inside a smooth hollow cone (semi-vertical angle 45°) rotating about its vertical axis at height h = 0.4 m above the apex. Find the angular velocity ω for the particle to stay at height h without sliding (g = 10 m/s²).

**Solution:**
At height h with semi-vertical angle 45°, radius r = h tan 45° = 0.4 m.
Just like a banked road (45°): tan 45° = ω² r / g => 1 = ω² (0.4) / 10 => ω² = 25 => **ω = 5 rad/s**.

Jaanch:
- Jaanch: a_c = ω² r = 25 × 0.4 = 10 m/s² = g tan 45° ✅

---

Shabaash! Tumne Laws of Motion ko non-inertial frames, movable pulleys, two-block friction, aur rocket thrust tak conquer kar liya hai. Wapas chapter overview ke liye [Mixed Problems & Chapter Wrap-up](laws-of-motion-part6.md) dekho!
