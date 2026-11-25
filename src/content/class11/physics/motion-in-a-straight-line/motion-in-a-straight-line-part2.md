> **Class:** 11 | **Subject:** Physics | **Chapter 2:** Motion in a Straight Line (Part 2)

# Acceleration & Kinematic Graphs (x-t, v-t, a-t)

> **Pichle topic se:** [Position, Path Length, Displacement & Velocity](motion-in-a-straight-line.md) mein humne dekha ki velocity position ke badalne ka rate (dx/dt) hai. Ab dekhenge ki velocity khud kis rate se badalti hai (**Acceleration**) aur graphs (x-t, v-t, a-t) se bina equations likhe poora motion kaise padh lete hain!

---

## Bimal ka Skyscraper Express Lift Graph

Bimal ek high-speed elevator telemetry analyst hai. Ek 40-manzil building ki express lift ground floor se start hoti hai:
- Pehle **4 s** mein speed 0 se badh kar **12 m/s** hoti hai.
- Agle **6 s** tak lift constant **12 m/s** par chalti hai.
- Aakhiri **2 s** mein brake lag kar speed **12 m/s** se **0 m/s** par ruk jati hai.

Bimal ne monitor par sirf ek **velocity-time (v-t) trapezoid** dekha aur 3 second mein bata diya: "Lift ne total **108 m** upar travel kiya, aur braking deceleration **-6 m/s²** tha!" Kaise? Graph ke **slope** aur **area** se!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Average Acceleration (a_avg) | Velocity mein total change divided by time interval: (v₂ - v₁) / (t₂ - t₁) = Δv / Δt |
| Instantaneous Acceleration (a) | Kisi exact pal par velocity badalne ka rate: a = dv / dt |
| Retardation / Deceleration | Jab object ki **speed kam** ho rahi ho (velocity aur acceleration ke signs **opposite** hon) |
| Slope (Tangent) | Graph ki dhalan (Δy / Δx) — x-t ka slope = velocity; v-t ka slope = acceleration |
| Signed Area under Curve | Time axis ke upar ka area **positive (+)** aur neeche ka area **negative (-)** |

---

## 1. Acceleration & the Sign Trap

- **Average acceleration:** a_avg = (v₂ - v₁) / (t₂ - t₁) = Δv / Δt (SI unit: **m s⁻²**).
- **Instantaneous acceleration:** a = dv / dt = d²x / dt².

**Super Important Insight — Negative Acceleration ≠ Always Slowing Down!**
- Agar **v aur a ke signs SAME** hain (dono + ya dono -), toh object **SPEED UP** kar raha hai!
  - Example: v = -5 m/s aur a = -2 m/s² => 1 second baad v = -7 m/s (speed 5 se badh kar 7 ho gayi!).
- Agar **v aur a ke signs OPPOSITE** hain (+ aur -), toh object **SLOW DOWN (retardation)** kar raha hai!

---

## 2. The Three Kinematic Graphs: Slope Goes Down, Area Goes Up!

Yeh ek chhota sa master diagram hai jo poori Class 11 kinematics ko aasaan bana deta hai:

```
   x-t graph  ---(SLOPE)--->  v-t graph  ---(SLOPE)--->  a-t graph
   x-t graph  <---(AREA)----  v-t graph  <---(AREA)----  a-t graph
```

| Graph | Slope (dhalan) kya deta hai? | Area under graph (with time axis) kya deta hai? |
|---|---|---|
| **x-t** (Position vs Time) | **Velocity (v)** | (Physically useful nahi) |
| **v-t** (Velocity vs Time) | **Acceleration (a)** | **Displacement (Δx)** (signed area); **Distance** = sum of |areas| |
| **a-t** (Acceleration vs Time) | (Jerk — advanced) | **Change in velocity (Δv = v₂ - v₁)** |

### Quick Visual Shapes on x-t and v-t Graphs

- **Rest (ruka hua):** x-t horizontal line (slope 0); v-t axis par 0 line.
- **Uniform velocity (a = 0):** x-t straight tilted line (constant slope); v-t horizontal line.
- **Uniform positive acceleration (a > 0):** x-t upward-curving parabola (smiley face); v-t straight line sloping UP.
- **Uniform negative acceleration (a < 0):** x-t downward-curving parabola (sad face); v-t straight line sloping DOWN.

---

## Solved Examples

### Example 1: Bimal's Express Lift (v-t Trapezoid)

An elevator accelerates uniformly from 0 to 12 m/s in 4 s, moves at constant 12 m/s for 6 s, and decelerates uniformly to 0 in 2 s. Find:
(a) Acceleration in each of the three stages.
(b) Total displacement using the v-t graph area.

**Solution:**
```
  v (m/s)
   12 |        /------------\
      :       /              \
      :      /                \
    0 +-----+--------+---------+---> t (s)
      0     4       10        12
```

**(a) Accelerations (slopes of v-t):**
- Stage 1 (0 to 4 s): a₁ = (12 - 0) / 4 = **+3 m/s²**.
- Stage 2 (4 to 10 s): a₂ = (12 - 12) / 6 = **0 m/s²**.
- Stage 3 (10 to 12 s): a₃ = (0 - 12) / 2 = **-6 m/s²**.

**(b) Total displacement (Area of trapezoid):**
- Area = (1/2) × (sum of parallel sides) × height = (1/2) × (12 + 6) × 12 = (1/2) × 18 × 12 = **108 m**.
  (Check by splitting: Triangle 1 = 24 m + Rectangle = 72 m + Triangle 2 = 12 m = 108 m!)

Jaanch:
- Jaanch: 24 + 72 + 12 = 108 m; Stage 3 slope steeper than Stage 1 (-6 vs +3) ✅

---

### Example 2: Signed Area — Displacement vs Distance on a v-t Graph

A particle's v-t graph is a positive triangle of height +10 m/s from t = 0 to 4 s, followed by a negative triangle of depth -5 m/s from t = 4 to 8 s. Find the net displacement and total distance travelled in 8 s.

**Solution:**
- Area 1 (above t-axis, 0 to 4 s): A₁ = +(1/2) × 4 × 10 = **+20 m**.
- Area 2 (below t-axis, 4 to 8 s): A₂ = -(1/2) × 4 × 5 = **-10 m**.
- **Net Displacement** = A₁ + A₂ = +20 + (-10) = **+10 m**.
- **Total Distance** = |A₁| + |A₂| = 20 + 10 = **30 m**.

Jaanch:
- Jaanch: Particle 20 m aage gaya aur 10 m peeche aaya => net +10 m aage, total 30 m chala ✅

---

### Example 3: Reading Change in Velocity from an a-t Graph

A car starting from rest has acceleration +4 m/s² from t = 0 to 3 s, and -2 m/s² from t = 3 to 5 s. Find its velocity at t = 3 s and t = 5 s using the a-t graph.

**Solution:**
- Area under a-t graph = Δv = v_final - v_initial.
- From t = 0 to 3 s: Δv₁ = (+4) × 3 = +12 m/s. Since v(0) = 0, **v(3) = 12 m/s**.
- From t = 3 to 5 s: Δv₂ = (-2) × 2 = -4 m/s.
- Total Δv = +12 + (-4) = +8 m/s => **v(5) = 0 + 8 = 8 m/s**.

Jaanch:
- Jaanch: 12 m/s se 2 second tak -2 m/s² se ghata => 12 - 4 = 8 m/s ✅

---

### Example 4: Instantaneous Acceleration from v(t)

The velocity of a particle is given by v(t) = 3 t² - 12 t + 5 (in m/s). Find:
(a) Average acceleration between t = 1 s and t = 3 s.
(b) Instantaneous acceleration at t = 2 s.

**Solution:**
**(a) Average acceleration:**
- v(1) = 3(1) - 12(1) + 5 = -4 m/s.
- v(3) = 3(9) - 12(3) + 5 = 27 - 36 + 5 = -4 m/s.
- a_avg = (-4 - (-4)) / (3 - 1) = 0 / 2 = **0 m/s²**.

**(b) Instantaneous acceleration:**
- a(t) = dv/dt = 6 t - 12.
- At t = 2 s: a(2) = 6(2) - 12 = **0 m/s²**.

Jaanch:
- Jaanch: v(t) parabola ka minimum vertex t = 2 s par hai, isliye slope dv/dt at t = 2 zero hai ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Negative acceleration ko hamesha slowing down maan lena
- **Galat:** a = -4 m/s² hai toh car pakka dheemi ho rahi hogi!
- **Sahi:** Agar car pehle se negative direction (-x) mein chal rahi hai (jaise v = -10 m/s), toh a = -4 m/s² use **aur tez** (-14 m/s) kar dega! Speeding up vs slowing down hamesha v aur a ke signs compare karke dekho.

### Galti 2: v-t graph ke time-axis ke neeche wale area ko bhi positive jod kar displacement bol dena
- **Galat:** Area above = 20 m, area below = 10 m => Displacement = 30 m.
- **Sahi:** **Distance = 30 m** (magnitude sum), par **Displacement = +20 - 10 = +10 m** (signed sum)!

### Galti 3: x-t graph ki height (y-value) ko velocity padh lena
- **Galat:** x-t graph par point (t = 4 s, x = 20 m) hai, toh velocity = 20 m/s.
- **Sahi:** x-t graph ki height **position (20 m)** batati hai; velocity us point par graph ka **slope (Δx / Δt)** hota hai!

---

## Quick Recap

- **Acceleration:** a = dv / dt; same sign as v => speeding up; opposite sign => slowing down.
- **x-t graph:** slope = velocity.
- **v-t graph:** slope = acceleration; signed area = displacement; |area| sum = distance.
- **a-t graph:** signed area = change in velocity Δv.

---

## Practice Questions

### Question 1
A bike increases its velocity from 10 m/s to 26 m/s in 4 s. Find its average acceleration.

**Solution:**
a_avg = (26 - 10) / 4 = 16 / 4 = **4 m/s²**.

Jaanch:
- Jaanch: 10 + 4(4) = 26 m/s ✅

---

### Question 2
A train moving at 30 m/s brakes uniformly and stops in 15 s. Find its acceleration and the distance covered during braking using the v-t graph.

**Solution:**
- Acceleration = (0 - 30) / 15 = **-2 m/s²**.
- v-t graph is a triangle of base 15 s and height 30 m/s:
  Distance = (1/2) × 15 × 30 = **225 m**.

Jaanch:
- Jaanch: Average velocity = (30 + 0)/2 = 15 m/s; 15 × 15 = 225 m ✅

---

### Question 3
A particle moves with velocity v = +6 m/s from t = 0 to 5 s, and then v = -4 m/s from t = 5 to 10 s. Using the v-t graph, find its displacement and total distance in 10 s.

**Solution:**
- Area 1 = (+6) × 5 = +30 m.
- Area 2 = (-4) × 5 = -20 m.
- Displacement = +30 - 20 = **+10 m**.
- Distance = 30 + 20 = **50 m**.

Jaanch:
- Jaanch: 30 m forward + 20 m backward = 50 m total, +10 m net ✅

---

### Question 4
A car starts with velocity u = 5 m/s. Its a-t graph is a rectangle of height +3 m/s² from t = 0 to 6 s. Find its velocity at t = 6 s.

**Solution:**
Δv = Area under a-t = 3 × 6 = +18 m/s.
v(6) = u + Δv = 5 + 18 = **23 m/s**.

Jaanch:
- Jaanch: 5 + 3(6) = 23 m/s ✅

---

### Question 5
The position of a particle is x(t) = 2 t³ - 3 t² + 5 t (x in m, t in s). Find its velocity and acceleration at t = 2 s.

**Solution:**
- v(t) = dx/dt = 6 t² - 6 t + 5 => v(2) = 6(4) - 6(2) + 5 = 24 - 12 + 5 = **17 m/s**.
- a(t) = dv/dt = 12 t - 6 => a(2) = 12(2) - 6 = **18 m/s²**.

Jaanch:
- Jaanch: 24 - 12 + 5 = 17; 24 - 6 = 18 ✅

---

### Question 6
On an x-t graph, a straight line passes through (t = 2 s, x = 8 m) and (t = 6 s, x = 28 m). Find the velocity and acceleration of the object.

**Solution:**
- Velocity = slope = (28 - 8) / (6 - 2) = 20 / 4 = **5 m/s**.
- Since the x-t graph is a straight line, velocity is constant => Acceleration = **0 m/s²**.

Jaanch:
- Jaanch: x(t) = 5t - 2 => x(2) = 8, x(6) = 28 ✅

---

### Question 7
A particle's v-t graph is a straight line from (0 s, 20 m/s) to (10 s, -20 m/s). Find: (a) acceleration, (b) displacement in 10 s, (c) total distance in 10 s.

**Solution:**
- (a) a = (-20 - 20) / 10 = **-4 m/s²**.
- Line crosses v = 0 at t = 5 s.
- Area (0 to 5 s) = +(1/2)(5)(20) = +50 m; Area (5 to 10 s) = -(1/2)(5)(20) = -50 m.
- (b) Displacement = +50 - 50 = **0 m**.
- (c) Distance = 50 + 50 = **100 m**.

Jaanch:
- Jaanch: Symmetric triangles above and below t-axis cancel for displacement (0 m) and add for distance (100 m) ✅

---

### Question 8
A particle has v = -8 m/s and a = -3 m/s² at t = 0. Find its velocity at t = 4 s. Is it speeding up or slowing down?

**Solution:**
v(4) = -8 + (-3)(4) = **-20 m/s**.
Speed increased from 8 m/s to 20 m/s (same signs of v and a), so it is **speeding up**.

Jaanch:
- Jaanch: |-20| > |-8|, confirming speeding up despite negative acceleration ✅

---

### Question 9
An object's a-t graph is a triangle rising from a = 0 at t = 0 to a = 6 m/s² at t = 4 s. If the object starts from rest, find its velocity at t = 4 s.

**Solution:**
Δv = Area of a-t triangle = (1/2) × 4 × 6 = +12 m/s.
Since u = 0, **v(4) = 12 m/s**.

Jaanch:
- Jaanch: Average acceleration = 3 m/s² over 4 s => 3 × 4 = 12 m/s ✅

---

### Question 10
A car accelerates from rest at 2 m/s² for 5 s, cruises for 10 s, and decelerates to rest in 5 s. Find the total distance covered using the v-t graph.

**Solution:**
Max velocity reached = 0 + 2(5) = 10 m/s.
Total time = 5 + 10 + 5 = 20 s; cruise time = 10 s.
Trapezoid area = (1/2) × (20 + 10) × 10 = (1/2) × 30 × 10 = **150 m**.

Jaanch:
- Jaanch: 25 m (accel) + 100 m (cruise) + 25 m (decel) = 150 m ✅

---

### Question 11
State whether the following statements are True or False:
(a) A vertical straight line on an x-t graph represents physically possible motion.
(b) A particle can have zero velocity and non-zero acceleration at the same instant.

**Solution:**
- (a) **False** ❌ — Vertical line ka matlab ek hi time par infinite positions (infinite velocity), jo impossible hai.
- (b) **True** ✅ — Jaise upar phenki gayi ball highest point par v = 0 par bhi a = -g rakhti hai!

Jaanch:
- Jaanch: Infinite slope = infinite speed (impossible); turning point par v = 0 with a ≠ 0 ✅

---

### Question 12
At t = 0, a particle is at x = 0 with v = 4 m/s. Its velocity increases linearly to 12 m/s at t = 4 s. Find its position x at t = 4 s using the v-t graph.

**Solution:**
Trapezoid under v-t from t = 0 to 4 s:
Δx = (1/2) × (4 + 12) × 4 = (1/2) × 16 × 4 = 32 m.
Since x(0) = 0, **x(4) = 32 m**.

Jaanch:
- Jaanch: Average velocity = (4 + 12)/2 = 8 m/s; 8 × 4 = 32 m ✅

---

Ab jab bhi tumhe koi x-t, v-t, ya a-t graph mile, tum bina ghabraye slope aur area se uska poora raaz khol sakte ho!

**Agle topic mein:** Isi v-t trapezoid se hum physics ke 3 sabse famous equations derive karenge — [Kinematic Equations for Uniform Acceleration](motion-in-a-straight-line-part3.md).
