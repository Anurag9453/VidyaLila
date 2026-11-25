> **Class:** 11 | **Subject:** Physics | **Chapter 2:** Motion in a Straight Line (Part 3)

# Kinematic Equations for Uniform Acceleration

> **Pichle topic se:** [Acceleration & Kinematic Graphs](motion-in-a-straight-line-part2.md) mein humne dekha ki v-t graph ka slope acceleration deta hai aur uska area displacement deta hai. Ab usi ek v-t trapezoid se hum uniform acceleration ke chaar powerhouse equations derive karenge!

---

## Damodar ka Runway Takeoff & Braking Check

Damodar ek airport par runway safety officer hai. Ek jet plane rest (u = 0) se start hokar constant acceleration se **12 s** mein **72 m/s** takeoff speed pakad leta hai. Damodar ko check karna hai ki kya **500 m** ka runway kaafi hai ya nahi!

Saath hi, highway safety check mein use pata hai ki agar koi car **20 m/s** ki speed se **-4 m/s²** deceleration par brake lagaye, toh woh **50 m** mein rukti hai — par agar speed double (**40 m/s**) ho jaye, toh braking distance double nahi balki **4 guna (200 m)** ho jata hai!

Aisa kyun hota hai? Chalo uniform acceleration ke equations derive karke samajhte hain!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Uniform Acceleration | Aisa motion jisme acceleration a poori journey mein bilkul constant rahe (na magnitude badle, na direction) |
| Initial Velocity (u) | Time t = 0 par object ki shuruati velocity |
| Final Velocity (v) | Time t ke baad object ki velocity |
| Displacement in n-th Second (s_n) | Sirf n-vein second (t = n - 1 se t = n tak) mein chala gaya displacement |
| Stopping Distance (d_s) | Brake lagane ke baad rukne (v = 0) tak chala gaya distance: u² / (2a) |
| Reaction Time (t_r) | Khatra dekhne aur brake dabane ke beech ka time — is dauran car constant speed u se chalti rehti hai |

---

## 1. Derivation of the 3 Kinematic Equations (From the v-t Graph)

Maan lo koi object initial velocity **u** se start karke **constant acceleration a** ke saath time **t** mein final velocity **v** tak pahunchta hai. Kyunki a constant hai, v-t graph ek **seedhi line** hogi:

```
  v
  ^
  :               B (t, v)
  :             / |
  :           /   | v - u
  :         /     |
  u       A-------+ C
  :       |       | u
  0 ------+-------+-----> time
          0       t
```

### Equation 1: Velocity–Time Relation (v = u + a t)
**Kyun?** v-t line ka slope = acceleration a:
a = (v - u) / (t - 0) => v - u = a t => **v = u + a t**

### Equation 2: Position–Time Relation (s = u t + (1/2) a t²)
**Kyun?** Displacement s = Area under v-t graph = Area of rectangle + Area of triangle ABC:
s = (u × t) + (1/2) × t × (v - u)
Equation 1 se (v - u) = a t rakhne par:
**s = u t + (1/2) a t²**

### Equation 3: Velocity–Position Relation (v² = u² + 2 a s)
**Kyun?** Trapezoid ka area = (1/2) × (u + v) × t.
Equation 1 se t = (v - u) / a rakhne par:
s = (1/2) × (u + v) × (v - u) / a = (v² - u²) / (2a)
=> **v² = u² + 2 a s**

*(Rate-of-change / calculus language mein: a = dv/dt constant hone par v linear function of t banta hai, aur s = integral of v dt quadratic function of t banta hai!)*

---

## 2. Two Super-Handy Derived Formulas

### A. Displacement in the n-th Second (s_n)
n-vein second mein displacement = (n seconds mein total displacement) - (n - 1 seconds mein total displacement):
s_n = s(n) - s(n - 1)
s_n = [u n + (1/2) a n²] - [u (n - 1) + (1/2) a (n - 1)²]
s_n = u + (1/2) a [n² - (n² - 2n + 1)]
=> **s_n = u + (a / 2) (2n - 1)**

*(Note: Is formula mein har term ke saath 1 s implicitly multiplied hota hai, isliye dimensions consistent rehte hain!)*

### B. Stopping Distance (d_s) & Reaction Time
Brake lagane par final velocity v = 0 aur acceleration = -a (deceleration magnitude a):
0 = u² - 2 a d_s => **d_s = u² / (2a)**

Notice: **d_s ∝ u²**! Speed double karne par stopping distance **4 times** ho jata hai!
Aur agar driver ka reaction time t_r hai, toh total stopping distance = **u t_r + u² / (2a)**.

---

## Solved Examples

### Example 1: Damodar's Jet Takeoff Check

A jet plane starts from rest (u = 0) and accelerates uniformly to 72 m/s in 12 s. Find: (a) its acceleration, (b) the minimum runway length required for takeoff.

**Solution:**
- (a) v = u + a t => 72 = 0 + a(12) => **a = 6 m/s²**.
- (b) s = u t + (1/2) a t² = 0 + (1/2)(6)(12²) = 3 × 144 = **432 m**.
Since 432 m < 500 m, a 500 m runway is safe!

Jaanch:
- Jaanch: Check with Eq 3: v² = u² + 2as => 72² = 5184; 2(6)(432) = 12 × 432 = 5184 ✅

---

### Example 2: Stopping Distance with Reaction Time

A car travelling at 20 m/s sees an obstacle ahead. The driver has a reaction time of 0.5 s before applying brakes, which produce a uniform deceleration of 4 m/s². Find the total distance travelled before the car stops.

**Solution:**
1. **Reaction distance** (constant speed 20 m/s for 0.5 s):
   d₁ = u t_r = 20 × 0.5 = **10 m**.
2. **Braking distance** (u = 20 m/s, v = 0, a = -4 m/s²):
   d₂ = u² / (2a) = 20² / (2 × 4) = 400 / 8 = **50 m**.
3. **Total distance** = 10 + 50 = **60 m**.

Jaanch:
- Jaanch: Braking time t = 20/4 = 5 s; avg speed = 10 m/s => 10 × 5 = 50 m; plus 10 m = 60 m ✅

---

### Example 3: Displacement in the 4th Second

A scooter starts with initial velocity u = 5 m/s and uniform acceleration a = 4 m/s². Find the distance covered specifically during the 4th second (between t = 3 s and t = 4 s).

**Solution:**
Using s_n = u + (a/2)(2n - 1) with n = 4:
s_4 = 5 + (4/2)(2×4 - 1) = 5 + 2(7) = 5 + 14 = **19 m**.

Jaanch:
- Jaanch: s(4) = 5(4) + 2(16) = 52 m; s(3) = 5(3) + 2(9) = 33 m; s(4) - s(3) = 52 - 33 = 19 m ✅

---

### Example 4: Comparing Speeds via v² = u² + 2as

A bullet enters a thick wooden plank with speed 100 m/s and comes to rest after penetrating 10 cm (0.10 m). Assuming uniform retardation, find the retardation and the time taken to stop.

**Solution:**
- v = 0, u = 100 m/s, s = 0.10 m.
- 0 = 100² + 2 a (0.10) => 0.20 a = -10,000 => **a = -50,000 m/s²** (-5 × 10⁴ m/s²).
- v = u + a t => 0 = 100 - 50,000 t => **t = 0.002 s (2 ms)**.

Jaanch:
- Jaanch: Average velocity = 50 m/s; distance = 50 × 0.002 = 0.10 m = 10 cm ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Non-uniform acceleration mein v = u + at ya s = ut + (1/2)at² laga dena
- **Galat:** Agar acceleration a(t) = 2t (time ke saath badal raha hai), toh s = (1/2)(2t)t² = t³ likh dena.
- **Sahi:** Teeno kinematic equations **SIRF CONSTANT (UNIFORM) ACCELERATION** ke liye valid hain! Variable acceleration mein calculus ya graph area lagta hai.

### Galti 2: s_n ko total distance in n seconds samajh lena
- **Galat:** 4th second ka distance 19 m hai, toh 4 seconds mein total 19 m chala.
- **Sahi:** s_4 sirf **3 s se 4 s ke beech** ka 1-second distance (19 m) hai; 0 se 4 s tak total distance **52 m** hai!

### Galti 3: Speed double karne par stopping distance bhi double maan lena
- **Galat:** 20 m/s par car 50 m mein rukti hai, toh 40 m/s par 100 m mein rukegi.
- **Sahi:** d_s = u² / (2a) => d_s ∝ u²! Speed 2× hone par stopping distance 2² = **4× (200 m)** ho jata hai!

---

## Quick Recap

- Valid **ONLY for constant acceleration a**:
  1. **v = u + a t**
  2. **s = u t + (1/2) a t²**
  3. **v² = u² + 2 a s**
  4. **s_n = u + (a/2)(2n - 1)**
- **Stopping distance:** d_s = u² / (2a) (proportional to u²!).
- **With reaction time t_r:** Total stopping distance = u t_r + u² / (2a).

---

## Practice Questions

### Question 1
A train starts from rest and attains a velocity of 54 km/h in 30 s with uniform acceleration. Find its acceleration and the distance travelled.

**Solution:**
u = 0, v = 54 × (5/18) = 15 m/s, t = 30 s.
- a = (15 - 0) / 30 = **0.5 m/s²**.
- s = (1/2)(0.5)(30²) = 0.25 × 900 = **225 m**.

Jaanch:
- Jaanch: v² = 225; 2as = 2(0.5)(225) = 225 ✅

---

### Question 2
A car moving at 36 km/h accelerates uniformly at 2 m/s² for 5 s. Find its final velocity and displacement.

**Solution:**
u = 36 × (5/18) = 10 m/s, a = 2 m/s², t = 5 s.
- v = 10 + 2(5) = **20 m/s**.
- s = 10(5) + (1/2)(2)(25) = 50 + 25 = **75 m**.

Jaanch:
- Jaanch: Avg speed = (10 + 20)/2 = 15 m/s; 15 × 5 = 75 m ✅

---

### Question 3
A car moving at 15 m/s stops in 25 m when brakes are applied. What will be its stopping distance if it was moving at 30 m/s under the same braking deceleration?

**Solution:**
Since d_s ∝ u² and speed is doubled (30 / 15 = 2):
d_new = 2² × 25 = 4 × 25 = **100 m**.

Jaanch:
- Jaanch: a = 15² / (2×25) = 225 / 50 = 4.5 m/s²; d_new = 30² / (2×4.5) = 900 / 9 = 100 m ✅

---

### Question 4
A body starts from rest with uniform acceleration 6 m/s². Find the distance covered by it in the 5th second.

**Solution:**
s_5 = 0 + (6/2)(2×5 - 1) = 3 × 9 = **27 m**.

Jaanch:
- Jaanch: s(5) = 3(25) = 75 m; s(4) = 3(16) = 48 m; 75 - 48 = 27 m ✅

---

### Question 5
A particle moving with uniform acceleration covers 20 m in the 3rd second and 36 m in the 7th second. Find its initial velocity u and acceleration a.

**Solution:**
- s_3 = u + (a/2)(5) = 20
- s_7 = u + (a/2)(13) = 36
Subtracting: (a/2)(13 - 5) = 16 => 4a = 16 => **a = 4 m/s²**.
Substituting into s_3: u + 2(5) = 20 => **u = 10 m/s**.

Jaanch:
- Jaanch: s_7 = 10 + 2(13) = 36 m ✅

---

### Question 6
A cyclist moving at 12 m/s applies brakes and comes to rest in 4 s. Find the deceleration and the distance travelled before stopping.

**Solution:**
- a = (0 - 12) / 4 = **-3 m/s²** (deceleration = 3 m/s²).
- s = (12 + 0)/2 × 4 = **24 m**.

Jaanch:
- Jaanch: s = 12(4) + (1/2)(-3)(16) = 48 - 24 = 24 m ✅

---

### Question 7
A body starting from rest moves with uniform acceleration. Find the ratio of distances covered in the 1st, 2nd, and 3rd seconds.

**Solution:**
s_n = (a/2)(2n - 1).
- n = 1: (a/2)(1)
- n = 2: (a/2)(3)
- n = 3: (a/2)(5)
Ratio = **1 : 3 : 5**.

Jaanch:
- Jaanch: Total distances in 1, 2, 3 s are 1, 4, 9 units; differences = 1, 3, 5 ✅

---

### Question 8
A car travelling along a straight road at 72 km/h sees a red light 60 m ahead. If the driver's reaction time is 0.4 s and maximum braking deceleration is 5 m/s², will the car stop before the red light?

**Solution:**
u = 72 × (5/18) = 20 m/s.
- Reaction distance = 20 × 0.4 = 8 m.
- Braking distance = 20² / (2 × 5) = 400 / 10 = 40 m.
- Total stopping distance = 8 + 40 = **48 m**.
Since 48 m < 60 m, **yes, the car stops safely 12 m before the light**!

Jaanch:
- Jaanch: 8 + 40 = 48 m < 60 m ✅

---

### Question 9
An electron enters a uniform electric field with initial velocity 5 × 10⁴ m/s and experiences a constant acceleration of 10¹² m/s² in the direction of motion. How much time will it take to double its velocity?

**Solution:**
v = 2u = 10 × 10⁴ = 10⁵ m/s.
t = (v - u) / a = (5 × 10⁴) / 10¹² = **5 × 10⁻⁸ s**.

Jaanch:
- Jaanch: u + a t = 5×10⁴ + 10¹²(5×10⁻⁸) = 5×10⁴ + 5×10⁴ = 10⁵ m/s ✅

---

### Question 10
A particle accelerates uniformly from u = 4 m/s to v = 20 m/s over a distance of 48 m. Find its acceleration and time taken.

**Solution:**
- v² = u² + 2as => 400 = 16 + 96 a => 96 a = 384 => **a = 4 m/s²**.
- t = (20 - 4) / 4 = **4 s**.

Jaanch:
- Jaanch: s = 4(4) + (1/2)(4)(16) = 16 + 32 = 48 m ✅

---

### Question 11
State whether the following statements are True or False:
(a) The equation s = ut + (1/2)at² holds for any motion in a straight line even if acceleration changes with time.
(b) For a body starting from rest with constant acceleration, the displacement is directly proportional to t².

**Solution:**
- (a) **False** ❌ — Yeh sirf constant (uniform) acceleration ke liye valid hai.
- (b) **True** ✅ — Jab u = 0 aur a constant ho, s = (1/2)a t² => s ∝ t².

Jaanch:
- Jaanch: (a) non-uniform acceleration par slope curved hota hai; (b) u = 0 par s ∝ t² ✅

---

### Question 12
A car starts from rest and accelerates uniformly. If its velocity after covering distance x is v, what will be its velocity after covering distance 4x?

**Solution:**
Since u = 0, v² = 2 a x => v ∝ √x.
When distance becomes 4x, v_new = √4 × v = **2 v**.

Jaanch:
- Jaanch: v_new² = 2a(4x) = 4(2ax) = 4v² => v_new = 2v ✅

---

Ab uniform acceleration ke chaar equations tumhari fingertips par hain!

**Agle topic mein:** Nature ka sabse famous uniform acceleration — gravity! Chalo padhte hain [Free Fall & Vertical Motion Under Gravity](motion-in-a-straight-line-part4.md).
