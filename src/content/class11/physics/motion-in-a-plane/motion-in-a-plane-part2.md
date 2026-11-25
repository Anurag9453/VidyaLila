> **Class:** 11 | **Subject:** Physics | **Chapter 3:** Motion in a Plane (Part 2)

# 2D Motion with Constant Acceleration & 2D Relative Velocity

> **Pichle topic se:** [Scalars, Vectors, Addition, Resolution & Unit Vectors](motion-in-a-plane.md) mein humne kisi bhi vector ko x aur y components (î, ĵ) mein todna seekha. Ab hum dekhenge ki poora 2D motion asal mein **do bilkul independent 1D motions** (ek x-axis par, ek y-axis par) ka jod hai — aur yahi idea rain-man aur river-boat problems ko super easy bana deta hai!

---

## Tribhuvan ka River-Ferry aur Monsoon Cycle Test

Tribhuvan ek river-ferry aur weather navigator hai. Uske saamne ek din do classic 2D puzzles aaye:
1. Subah barish seedhi neeche **12 m/s** se gir rahi thi, aur Tribhuvan apni cycle par East ki taraf **5 m/s** se chala. Baarish use seedhi nahi, balki saamne se tirchhi (angled) lagne lagi! Use apni chhatri (umbrella) vertical se kitne angle par **aage** jhukani chahiye?
2. Dopahar mein use **240 m** chaudi nadi paar karni thi (nadi ka bahav **3 m/s**, boat ki still-water speed **5 m/s**). Agar use **sabse kam time** mein paar karna ho toh boat seedhi samne (perpendicular) chalani hogi (**48 s**, par 144 m drift hoga!). Aur agar **seedhe saamne wale ghat (zero drift, shortest path)** pahunchne ho, toh use nadi ke bahav ke khilaf **37° upstream** aim karna hoga (**60 s**)!

Chalo 2D kinematics aur 2D relative velocity ka poora math samajhte hain!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Position Vector (r) | Origin se particle ki 2D location: r = x î + y ĵ |
| Independence of Motion | 2D motion ka x-hissa aur y-hissa ek doosre ko disturb nahi karte — dono alag-alag 1D kinematics follow karte hain! |
| Apparent Rain Velocity (v_rm) | Chalte hue insaan ko dikhne wali barish ki velocity: v_rm = v_r - v_m |
| Drift (x_drift) | Nadi paar karte waqt paani ke bahav ki wajah se boat jitna downstream beh jati hai |
| Shortest Time Crossing | Boat ko nadi ke kinare ke bilkul perpendicular (90°) aim karna -> t_min = d / v_b |
| Shortest Path Crossing | Zero drift (seedhe opposite point par pahunchna) -> sin θ = v_r / v_b upstream (possible sirf jab v_b > v_r!) |

---

## 1. Motion in a Plane with Constant Acceleration

Agar 2D plane mein acceleration **a = a_x î + a_y ĵ** constant hai, toh vector kinematic equations seedha do 1D equations mein toot jati hain:

```
  Vector form:                      x-component:                 y-component:
  v = v₀ + a t          ===>        v_x = v₀_x + a_x t           v_y = v₀_y + a_y t
  r = r₀ + v₀ t + ½at²  ===>        x = x₀ + v₀_x t + ½a_x t²    y = y₀ + v₀_y t + ½a_y t²
```

**Kyun?** Kyunki î aur ĵ aapas mein perpendicular hain — x-axis ka acceleration y-axis ki velocity ko kabhi nahi badal sakta!

---

## 2. 2D Relative Velocity: Rain–Man Problem

Maan lo barish seedhi neeche gir rahi hai: **v_r = -v_r ĵ**.
Insaan +x (East) mein chal raha hai: **v_m = +v_m î**.

Insaan ko barish ki apparent velocity:
**v_rm = v_r - v_m = -v_m î - v_r ĵ**

```
      -v_m (backward)
   <-------+
    \ θ    :
     \     : -v_r (downward)
      \    :
       v   v
     v_rm (hits face from front!)
```

- **Apparent speed:** |v_rm| = **√(v_r² + v_m²)**
- **Umbrella angle θ with vertical (tilted FORWARD into motion):**
  **tan θ = v_m / v_r**

---

## 3. River–Boat Crossing Problems

Maan lo nadi ki width **d** hai (+y direction), nadi +x mein **v_r** speed se beh rahi hai, aur boat still water mein **v_b** speed se chal sakti hai.

### Case A: Shortest Time (Sabse Jaldi Paar Karna)
Boat ko seedha +y (90° to river bank) aim karo:
- Velocity across river: v_y = v_b => **t_min = d / v_b**
- Velocity along river: v_x = v_r => **Drift = v_r × t_min = d (v_r / v_b)**

### Case B: Shortest Path (Seedhe Opposite Bank, Zero Drift)
Boat ko vertical (+y) se upstream angle **θ** par aim karo taaki uska upstream component (v_b sin θ) nadi ke bahav (v_r) ko cancel kar de!
- Zero drift condition: **v_b sin θ = v_r  =>  sin θ = v_r / v_b** (Possible ONLY if **v_b > v_r**!)
- Net speed straight across: **v_net = v_b cos θ = √(v_b² - v_r²)**
- Crossing time: **t = d / √(v_b² - v_r²)**

---

## Solved Examples

### Example 1: 2D Motion with Constant Acceleration

A particle starts from the origin at t = 0 with velocity v₀ = 5 î m/s and moves in the xy-plane with constant acceleration a = (3 î + 2 ĵ) m/s². Find:
(a) the position coordinates (x, y) at t = 4 s,
(b) the speed of the particle at t = 4 s.

**Solution:**
**(a) Position at t = 4 s (x₀ = 0, y₀ = 0):**
- x(4) = v₀_x t + (1/2) a_x t² = 5(4) + (1/2)(3)(16) = 20 + 24 = **44 m**.
- y(4) = v₀_y t + (1/2) a_y t² = 0 + (1/2)(2)(16) = **16 m**.
So position = **(44 m, 16 m)**.

**(b) Velocity & speed at t = 4 s:**
- v_x = 5 + 3(4) = 17 m/s; v_y = 0 + 2(4) = 8 m/s.
- Speed |v| = √(17² + 8²) = √(289 + 64) = **√353 ≈ 18.79 m/s**.

Jaanch:
- Jaanch: x aur y dono bilkul alag-alag 1D equations se solve kiye gaye; 289 + 64 = 353 ✅

---

### Example 2: Tribhuvan's Monsoon Cycle (Rain–Man)

Rain is falling vertically downward at 12 m/s. A cyclist rides East at 5 m/s. Find the magnitude of the apparent velocity of rain and the angle with the vertical at which the cyclist should hold the umbrella.

**Solution:**
- |v_rm| = √(12² + 5²) = √(144 + 25) = √169 = **13 m/s**.
- tan θ = v_m / v_r = **5 / 12** (≈ 22.6° **forward / East** from the vertical).

Jaanch:
- Jaanch: 5-12-13 Pythagorean triple; umbrella hamesha chalne ki disha (East) mein jhukti hai ✅

---

### Example 3: Tribhuvan's River Ferry (Shortest Time vs Shortest Path)

A river 240 m wide flows at 3 m/s. A ferry boat has a speed of 5 m/s in still water. Find:
(a) the shortest time to cross and the resulting drift,
(b) the direction and time to cross along the shortest path (zero drift).

**Solution:**
**(a) Shortest Time:**
Aim straight across (perpendicular to river):
- t_min = d / v_b = 240 / 5 = **48 s**.
- Drift = v_r × t_min = 3 × 48 = **144 m downstream**.

**(b) Shortest Path (Zero Drift):**
- sin θ = v_r / v_b = 3 / 5 => **θ = 37° upstream** from the perpendicular (i.e., 127° from downstream flow).
- Net across speed = √(5² - 3²) = √16 = **4 m/s**.
- Crossing time = 240 / 4 = **60 s**.

Jaanch:
- Jaanch: Shortest time (48 s) < Shortest path time (60 s), aur 3-4-5 right triangle exact match ✅

---

### Example 4: Time to Reach a Given x-Coordinate

A particle starts from the origin with v₀ = 10 ĵ m/s and constant acceleration a = (8 î + 2 ĵ) m/s². Find the y-coordinate when its x-coordinate is 16 m.

**Solution:**
- Along x: x = 0 + (1/2)(8) t² = 4 t². Given x = 16 => 4 t² = 16 => t² = 4 => **t = 2 s**.
- Along y at t = 2 s: y = 10(2) + (1/2)(2)(2²) = 20 + 4 = **24 m**.

Jaanch:
- Jaanch: Time t dono axes ke liye common bridge hai: t = 2 s par x = 16 m aur y = 24 m ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Chhatri (umbrella) ko chalne ki disha ke peeche jhuka dena
- **Galat:** East ja rahe ho toh umbrella West mein jhukani chahiye.
- **Sahi:** v_rm = -v_m î - v_r ĵ ka matlab barish **saamne (East)** se aa rahi hai — isliye umbrella ko **East (forward)** jhukao!

### Galti 2: Shortest path aur shortest time ko ek hi case samajh lena
- **Galat:** Seedhe opposite ghat pahunchne mein hi sabse kam time lagega!
- **Sahi:** Seedhe opposite ghat (shortest path) ke liye speed ka kuch hissa river cancel karne mein kharch ho jata hai (v_net = 4 m/s -> 60 s). Shortest time mein poori 5 m/s across lagti hai (48 s), bhale hi 144 m drift ho!

### Galti 3: x aur y components ko ek hi scalar equation mein mila dena
- **Galat:** v₀ = 5 î aur a = 2 ĵ mein v = 5 + 2t likh dena.
- **Sahi:** x aur y perpendicular hain! v = 5 î + (2t) ĵ, isliye speed |v| = **√(25 + 4t²)** hogi, (5 + 2t) nahi!

---

## Quick Recap

- **2D constant acceleration:** Solve x and y independently using the same time t!
- **Rain–Man:** |v_rm| = √(v_r² + v_m²); tilt umbrella **forward** at tan θ = v_m / v_r from vertical.
- **River–Boat (width d):**
  - Shortest time: aim 90° across => t_min = d / v_b, drift = v_r t_min.
  - Shortest path (v_b > v_r): aim sin θ = v_r / v_b upstream => t = d / √(v_b² - v_r²), drift = 0.

---

## Practice Questions

### Question 1
A particle starts from rest at the origin with constant acceleration a = (4 î + 3 ĵ) m/s². Find its distance from the origin at t = 2 s.

**Solution:**
x = (1/2)(4)(4) = 8 m; y = (1/2)(3)(4) = 6 m.
Distance |r| = √(8² + 6²) = √100 = **10 m**.

Jaanch:
- Jaanch: |a| = 5 m/s² straight line from rest => s = (1/2)(5)(4) = 10 m ✅

---

### Question 2
Rain is falling vertically at 10 m/s. A girl walks North at 10 m/s. At what angle with the vertical should she hold her umbrella?

**Solution:**
tan θ = v_m / v_r = 10 / 10 = 1 => **θ = 45° North (forward)** from the vertical.

Jaanch:
- Jaanch: Equal perpendicular components => 45° ✅

---

### Question 3
A swimmer can swim at 4 m/s in still water. A river 120 m wide flows at 3 m/s. If the swimmer swims straight perpendicular to the river bank, find the time taken to cross and the downstream drift.

**Solution:**
- t = 120 / 4 = **30 s**.
- Drift = 3 × 30 = **90 m**.

Jaanch:
- Jaanch: Net velocity magnitude = 5 m/s; net path = √(120² + 90²) = 150 m; 150 / 5 = 30 s ✅

---

### Question 4
A boat with still-water speed 10 m/s wants to cross a 320 m wide river flowing at 6 m/s along the shortest path (zero drift). Find the crossing time and upstream angle.

**Solution:**
- sin θ = 6 / 10 = 3 / 5 => **θ = 37° upstream**.
- v_net = √(10² - 6²) = √64 = 8 m/s.
- t = 320 / 8 = **40 s**.

Jaanch:
- Jaanch: 6-8-10 right triangle; 8 × 40 = 320 m ✅

---

### Question 5
The position of a particle is r(t) = (4 t î + 3 t² ĵ) m. Find its velocity vector and speed at t = 1 s.

**Solution:**
v(t) = dr/dt = (4 î + 6 t ĵ) m/s.
At t = 1 s: v(1) = **4 î + 6 ĵ m/s**.
Speed = √(4² + 6²) = √52 = **2 √13 ≈ 7.21 m/s**.

Jaanch:
- Jaanch: 16 + 36 = 52 = 4 × 13 ✅

---

### Question 6
For the particle in Question 5 (r(t) = 4 t î + 3 t² ĵ), find its acceleration vector a(t). Is the acceleration constant?

**Solution:**
v(t) = 4 î + 6 t ĵ => a(t) = dv/dt = **6 ĵ m/s²**.
Yes, the acceleration is **constant** (6 m/s² along +y).

Jaanch:
- Jaanch: d(4)/dt = 0; d(6t)/dt = 6 ✅

---

### Question 7
Car A moves East at 15 m/s and Car B moves North at 20 m/s. Find the magnitude of the velocity of Car A relative to Car B.

**Solution:**
v_A = 15 î, v_B = 20 ĵ.
v_AB = v_A - v_B = 15 î - 20 ĵ.
|v_AB| = √(15² + (-20)²) = √(225 + 400) = √625 = **25 m/s**.

Jaanch:
- Jaanch: 15-20-25 (3-4-5 × 5) Pythagorean triple ✅

---

### Question 8
A person standing still observes rain falling at 30° with the vertical. When the person starts walking at 5 m/s, the rain appears to fall vertically! Find the actual speed of the rain.

**Solution:**
Horizontal component of actual rain must equal the person's walking speed so they cancel:
v_r sin 30° = 5 => v_r (1/2) = 5 => **v_r = 10 m/s**.

Jaanch:
- Jaanch: v_rx = 10 sin 30° = 5 m/s matches walking speed 5 m/s => relative horizontal velocity = 0 (vertical!) ✅

---

### Question 9
An aircraft flies with airspeed 300 km/h pointing due North. A crosswind blows due East at 400 km/h. Find the ground speed of the aircraft.

**Solution:**
v_ground = 400 î + 300 ĵ.
|v_ground| = √(400² + 300²) = **500 km/h**.

Jaanch:
- Jaanch: 3-4-5 × 100 triple ✅

---

### Question 10
A river flows at 5 m/s, and a swimmer can swim at only 3 m/s in still water. Can the swimmer cross the river with zero drift? Explain briefly.

**Solution:**
Zero drift requires sin θ = v_r / v_b = 5 / 3 > 1, which is **impossible**!
So **no**, the swimmer cannot achieve zero drift (there will always be some downstream drift).

Jaanch:
- Jaanch: Since sin θ ≤ 1 always, zero drift needs v_b > v_r; here 3 < 5 ✅

---

### Question 11
State whether the following statements are True or False:
(a) In 2D motion with constant acceleration, the x-motion and y-motion can be solved independently.
(b) A boat aiming perpendicular to a flowing river takes longer to cross than a boat aiming upstream.

**Solution:**
- (a) **True** ✅ — Perpendicular axes x and y are completely independent.
- (b) **False** ❌ — Perpendicular aim gives maximum across-river velocity v_b, hence the **shortest** crossing time!

Jaanch:
- Jaanch: v_b > v_b cos θ for any θ ≠ 0, so perpendicular crossing is always fastest ✅

---

### Question 12
A particle leaves the origin with initial velocity v₀ = (2 î + 4 ĵ) m/s and acceleration a = (2 î - 2 ĵ) m/s². Find its velocity vector at t = 3 s.

**Solution:**
v_x = 2 + 2(3) = 8 m/s; v_y = 4 - 2(3) = -2 m/s.
So **v(3) = (8 î - 2 ĵ) m/s**.

Jaanch:
- Jaanch: v₀ + 3a = (2 + 6) î + (4 - 6) ĵ = 8 î - 2 ĵ ✅

---

Ab jab tumne 2D independence aur relative velocity samajh li, toh Physics ka sabse mazedaar topic tumhare liye cakewalk ban jayega!

**Agle topic mein:** Hawa mein udate hue javelin, football, aur cricket sixes ka exact path — chalo padhte hain [Projectile Motion](motion-in-a-plane-part3.md)!
