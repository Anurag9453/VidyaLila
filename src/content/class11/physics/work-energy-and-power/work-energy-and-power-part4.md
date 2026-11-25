> **Class:** 11 | **Subject:** Physics | **Chapter 5:** Work, Energy and Power (Part 4)

# Conservation of Mechanical Energy

> **Pichle topic se:** [Potential Energy & Conservative Forces](work-energy-and-power-part3.md) mein humne dekha ki conservative forces ke liye W_c = -ΔU hota hai. Jab hum ise Work–Energy Theorem (W_all = ΔK) mein dalte hain, toh physics ka sabse famous law paida hota hai — **Conservation of Mechanical Energy**!

---

## Fakhruddin ka Roller-Coaster & Bumper-Spring Test

Fakhruddin ek amusement-park safety inspector hai. Ek frictionless roller-coaster track par **20 m** oonche hill-top se cart rest se chhodi jati hai. Track kitna bhi ghumavdaar kyun na ho, ground level par cart ki speed exact **20 m/s** (√(2gh)) hoti hai!

Aur jab wahi cart station par lage ek bumper spring (k = 40,000 N/m) se takrati hai, toh uski poori kinetic energy spring compression (1/2) k x² mein badal jati hai — bina acceleration ya time nikale hum exact compression x nikal lete hain!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Mechanical Energy (E) | Kinetic Energy + Potential Energy ka sum: **E = K + U** |
| Conservation of Mechanical Energy | Agar sirf conservative forces work karein (W_nc = 0), toh **K_i + U_i = K_f + U_f = constant** |
| Modified Energy Equation | Jab friction ya external force bhi work kare (W_nc ≠ 0): **W_nc = E_f - E_i = (K_f + U_f) - (K_i + U_i)** |

---

## 1. Derivation of Conservation of Mechanical Energy

Work–Energy Theorem se: W_c + W_nc = ΔK.
Conservative force ke liye W_c = -ΔU rakhne par:
-ΔU + W_nc = ΔK  =>  **W_nc = ΔK + ΔU = ΔE**!

- **Case 1 (No friction / no external non-conservative work, W_nc = 0):**
  **ΔE = 0  ===>  K_i + U_i = K_f + U_f**
  (Note: Normal reaction ya string tension agar motion ke perpendicular hon, toh unka work 0 hota hai — isliye smooth curved track aur pendulum par mechanical energy conserved rehti hai!)

- **Case 2 (With friction, W_friction = -f_k d):**
  **K_i + U_i - f_k d = K_f + U_f** (Lost mechanical energy = heat generated!)

---

## 2. Classic Applications

1. **Smooth Curved Slide / Pendulum:** Height h neeche aane par: **v = √(2 g h)** (track ke shape par bilkul depend nahi karta!).
2. **Block Hitting a Horizontal Spring:** (1/2) m v² = (1/2) k x_max²  =>  **x_max = v √(m / k)**.
3. **Vertical Circle via Energy:** Bottom (h = 0) se top (h = 2R) tak:
   (1/2) m v_B² = (1/2) m v_T² + m g (2R)  =>  **v_B² = v_T² + 4 g R**!
   Min top speed v_T = √(gR) rakhne par seedha **v_B(min) = √(5 g R)** mil jata hai!

---

## Solved Examples

### Example 1: Pendulum Swing Speed at Lowest Point

A pendulum bob of mass 0.5 kg on a 1.8 m long string is released from rest when the string is horizontal (90° from vertical). Taking g = 10 m/s², find: (a) its speed at the lowest point, (b) tension in the string at the lowest point.

**Solution:**
String tension is always perpendicular to velocity (W_T = 0), so Mechanical Energy is conserved!
- (a) Vertical drop h = L = 1.8 m:
  (1/2) m v² = m g L => v = √(2 g L) = √(2 × 10 × 1.8) = √36 = **6 m/s**.
- (b) At lowest point: T - m g = m v² / L = m (2 g L) / L = 2 m g
  => **T = 3 m g** = 3 × 0.5 × 10 = **15 N**!

Jaanch:
- Jaanch: Famous pendulum result: horizontal release gives T = 3 mg at bottom, independent of length L! ✅

---

### Example 2: Block Compressing a Horizontal Spring (Smooth vs Rough!)

A 2 kg block moving at 4 m/s hits a horizontal spring of constant k = 200 N/m (g = 10 m/s²).
(a) Find the maximum compression x if the floor is smooth.
(b) Find the maximum compression if the floor is rough with μ_k = 0.2 (assuming friction acts over the compression x).

**Solution:**
**(a) Smooth floor (W_nc = 0):**
(1/2)(2)(4²) = (1/2)(200) x² => 16 = 100 x² => x² = 0.16 => **x = 0.4 m (40 cm)**.

**(b) Rough floor (f_k = 0.2 × 20 = 4 N):**
Initial KE = Spring PE + Friction work:
16 = 100 x² + 4 x => 100 x² + 4 x - 16 = 0 => 25 x² + x - 4 = 0.
x = (-1 + √(1 + 400)) / 50 = (-1 + √401) / 50 ≈ (-1 + 20.025) / 50 ≈ **0.38 m (38 cm)**.

Jaanch:
- Jaanch: Friction eats a bit of energy, so compression is slightly less (38 cm < 40 cm) ✅

---

### Example 3: Block Dropped Onto a Vertical Spring

A 2 kg block is dropped from a height of 0.4 m directly onto the top of a vertical spring of constant k = 1960 N/m (g = 9.8 m/s²). Find the maximum compression x of the spring.

**Solution:**
**Crucial catch:** Block total height **(h + x)** neeche girta hai (sirf h nahi!) before momentarily stopping!
m g (h + x) = (1/2) k x²
2(9.8)(0.4 + x) = 980 x² => 19.6 (0.4 + x) = 980 x²
Divide by 19.6: 0.4 + x = 50 x² => 50 x² - x - 0.4 = 0 => 250 x² - 5 x - 2 = 0.
x = (5 + √(25 + 2000)) / 500 = (5 + 45) / 500 = 50 / 500 = **0.10 m (10 cm)**!

Jaanch:
- Jaanch: Check m g (h + x) = 19.6 × 0.5 = 9.8 J; (1/2) k x² = 980 × 0.01 = 9.8 J ✅

---

### Example 4: Roller-Coaster Loop Entry Height

A small block slides from rest down a smooth track from height H into a vertical circular loop of radius R = 4 m. What minimum height H is needed so that the block just completes the vertical loop?

**Solution:**
To just complete the loop, speed at the bottom must be v_B = √(5 g R).
By energy conservation from height H to bottom:
m g H = (1/2) m v_B² = (1/2) m (5 g R) => **H_min = (5/2) R = 2.5 R**!
For R = 4 m: H_min = 2.5 × 4 = **10 m**.

Jaanch:
- Jaanch: Loop top is at height 2R = 8 m; extra 0.5R = 2 m gives KE = mg(0.5R) = (1/2)m(gR) => v_top = √(gR) ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Vertical spring drop mein gravitational drop sirf h lena (x bhool jana!)
- **Galat:** m g h = (1/2) k x².
- **Sahi:** Spring x dabne par block h + x neeche gaya hai! Hamesha **m g (h + x) = (1/2) k x²**!

### Galti 2: Rough surface par bhi K_i + U_i = K_f + U_f laga dena
- **Galat:** Rough slide se girte block par mgh = (1/2)mv² laga diya!
- **Sahi:** Friction energy heat mein badal deta hai => **m g h - f_k d = (1/2) m v²**!

### Galti 3: Roller-coaster loop ke liye H_min = 2 R maan lena
- **Galat:** Loop ki height 2R hai toh H = 2R se chhodne par block top tak pahunch jayega!
- **Sahi:** H = 2R par top mein speed 0 hogi aur block gir jayega! Top par v = √(gR) chahiye, isliye **H_min = 2.5 R**!

---

## Quick Recap

- **Mechanical Energy:** E = K + U; **W_nc = E_f - E_i**.
- **When W_nc = 0:** K_i + U_i = K_f + U_f (Normal/Tension perpendicular to motion do zero work!).
- **Key Shortcuts:** Smooth slide v = √(2gh); vertical spring m g(h + x) = (1/2) k x²; vertical loop H_min = 2.5 R.

---

## Practice Questions

*(Take g = 10 m/s² unless stated otherwise.)*

### Question 1
A 3 kg ball is dropped from a height of 20 m. Using conservation of mechanical energy, find its speed when it is 15 m above the ground.

**Solution:**
Drop Δh = 20 - 15 = 5 m => v = √(2 g Δh) = √(2 × 10 × 5) = √100 = **10 m/s**.

Jaanch:
- Jaanch: K = 150 J, U = 450 J; total = 600 J = initial U (3×10×20) ✅

---

### Question 2
A 4 kg block moving at 5 m/s compresses a horizontal spring of constant k = 100 N/m on a smooth floor. Find the maximum compression.

**Solution:**
(1/2)(4)(25) = (1/2)(100) x² => 50 = 50 x² => **x = 1.0 m**.

Jaanch:
- Jaanch: x = v √(m/k) = 5 √(4/100) = 5(0.2) = 1.0 m ✅

---

### Question 3
A stone is thrown upward from the ground at 20 m/s. At what height will its kinetic energy be equal to its potential energy?

**Solution:**
Total E = (1/2) m (400) = 200 m.
When K = U => U = E / 2 = 100 m = m g h => 10 h = 100 => **h = 10 m** (half of H_max = 20 m!).

Jaanch:
- Jaanch: At h = 10 m, U = 100 m and K = 100 m ✅

---

### Question 4
A 2 kg block slides from rest down a rough curved track of vertical height 10 m and reaches the bottom with a speed of 10 m/s. Find the work done by friction.

**Solution:**
- E_i = m g h = 2(10)(10) = 200 J.
- E_f = (1/2)(2)(10²) = 100 J.
- W_friction = E_f - E_i = 100 - 200 = **-100 J**.

Jaanch:
- Jaanch: 100 J lost to heat/friction ✅

---

### Question 5
A pendulum of length 2 m is released from rest at an angle of 60° with the vertical. Find the speed of the bob at the lowest point.

**Solution:**
Vertical drop h = L (1 - cos 60°) = 2 (1 - 1/2) = 1 m.
v = √(2 g h) = √(2 × 10 × 1) = **√20 = 2 √5 ≈ 4.47 m/s**.

Jaanch:
- Jaanch: L(1 - cos 60°) = L/2 = 1 m ✅

---

### Question 6
A 1 kg block slides down a smooth ramp from height 5 m and then travels on a rough horizontal floor (μ_k = 0.25) until it stops. How far does it travel on the rough floor?

**Solution:**
Initial PE = Friction work on horizontal floor:
m g h = μ_k m g d => d = h / μ_k = 5 / 0.25 = **20 m**.

Jaanch:
- Jaanch: Initial E = 50 J; f_k = 2.5 N => 50 / 2.5 = 20 m ✅

---

### Question 7
A roller-coaster car starts from rest at height H = 15 m and enters a vertical circular loop of radius R = 6 m. Will it complete the loop safely?

**Solution:**
Minimum height needed = 2.5 R = 2.5 × 6 = **15 m**.
Since H = 15 m, **yes, it just completes the loop**!

Jaanch:
- Jaanch: H_min = (5/2) × 6 = 15 m ✅

---

### Question 8
A 1 kg mass is attached to a vertical spring (k = 100 N/m) at its natural length and suddenly released from rest. Find the maximum extension of the spring.

**Solution:**
At max extension x_max (v = 0): m g x_max = (1/2) k x_max² => **x_max = 2 m g / k** = 2(10) / 100 = **0.20 m (20 cm)**.
(Notice: equilibrium extension is mg/k = 10 cm, and sudden drop stretches it **twice** as far!)

Jaanch:
- Jaanch: m g x = 10(0.2) = 2 J; (1/2)(100)(0.04) = 2 J ✅

---

### Question 9
A 0.5 kg projectile is fired from a 10 m high roof at 20 m/s at an angle of 37° above the horizontal. Using conservation of mechanical energy, find its speed just before hitting the ground.

**Solution:**
(1/2) m v² = (1/2) m u² + m g h => v² = u² + 2 g h = 400 + 2(10)(10) = 600 => **v = 10 √6 ≈ 24.49 m/s** (completely independent of angle 37°!).

Jaanch:
- Jaanch: Energy conservation bypasses angle completely: √(400 + 200) = 10√6 m/s ✅

---

### Question 10
A block of mass 2 kg is pushed against a horizontal spring (k = 800 N/m), compressing it by 0.25 m, and released on a smooth floor. Find the speed with which the block leaves the spring.

**Solution:**
(1/2)(2) v² = (1/2)(800)(0.0625) = 25 => v² = 25 => **v = 5 m/s**.

Jaanch:
- Jaanch: v = x √(k/m) = 0.25 × √400 = 0.25 × 20 = 5 m/s ✅

---

### Question 11
State whether the following statements are True or False:
(a) Mechanical energy is conserved when a block slides down a smooth curved track because Normal force does zero work.
(b) In a pendulum swinging without air resistance, total mechanical energy is maximum at the lowest point.

**Solution:**
- (a) **True** ✅ — Normal force is perpendicular to the velocity at every instant (W_N = 0).
- (b) **False** ❌ — **Kinetic** energy is maximum at the lowest point, while **Total Mechanical Energy (K + U)** stays CONSTANT everywhere!

Jaanch:
- Jaanch: Conservation means E = K + U does not change along the swing ✅

---

### Question 12
A 4 kg block is released from rest at the top of a smooth 30° incline of length 10 m. Find its kinetic energy when it reaches the bottom.

**Solution:**
Vertical height h = 10 sin 30° = 5 m.
K_bottom = m g h = 4 × 10 × 5 = **200 J**.

Jaanch:
- Jaanch: v² = 2gh = 100 => K = (1/2)(4)(100) = 200 J ✅

---

Energy conservation physics ka sabse clean shortcut hai — bina time ya acceleration nikale seedha speed mil jati hai!

**Agle topic mein:** Kitni **tezi** se work ya energy transfer hoti hai — chalo padhte hain [Power](work-energy-and-power-part5.md)!
