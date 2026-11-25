> **Class:** 11 | **Subject:** Physics | **Chapter 5:** Work, Energy and Power (Part 3)

# Potential Energy & Conservative Forces

> **Pichle topic se:** [Kinetic Energy & Work–Energy Theorem](work-energy-and-power-part2.md) mein humne motion ki energy (KE) dekhi. Par jab tum ek patthar ko upar utha kar rakhte ho ya ek spring ko dabate ho, toh tumhara kiya gaya kaam gayab nahi hota — woh **Potential Energy** ke roop mein store ho jata hai!

---

## Dattatreya ka Hydroelectric Dam & Suspension Spring

Dattatreya ek hydroelectric dam aur vehicle-suspension engineer hai.
- Dam mein **100 m** oonchai par stored paani gravity ke against store ki hui **Gravitational Potential Energy (mgh)** rakhta hai — jab gate khulta hai toh wahi energy turbines ghumati hai!
- Car ke shock-absorber spring (k = 20,000 N/m) ko **5 cm** dabane par usme **(1/2) k x² = 25 J** **Elastic Potential Energy** store hoti hai!

Par friction se garam hue tyres ki heat wapas motion mein nahi badalti — kyunki gravity aur spring **Conservative Forces** hain, jabki friction **Non-Conservative** hai!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Conservative Force | Aisa force jiska work sirf **initial aur final positions** par depend kare, raste (path) par NAHI — aur closed loop (round trip) mein work = **0** (jaise Gravity, Spring, Electrostatic) |
| Non-Conservative Force | Aisa force jiska work **path par depend** kare aur round trip mein work ≠ 0 (jaise Friction, Air Drag) |
| Potential Energy (U) | Position ya configuration ki wajah se stored energy — **SIRF conservative forces** ke liye defined hoti hai! |
| Gravitational PE | Earth surface ke paas height h par: **U = m g h** (reference level h = 0 par U = 0) |
| Elastic (Spring) PE | Natural length se x stretch/compress karne par: **U = (1/2) k x²** |
| Force–PE Relation | **F = - dU / dx** (force hamesha Potential Energy ghatane wali direction mein lagta hai!) |

---

## 1. Conservative vs Non-Conservative Forces

| Property | Conservative Force (Gravity, Spring) | Non-Conservative Force (Friction) |
|---|---|---|
| Path dependence | **Path-independent** (sirf start aur end point) | **Path-dependent** (lamba rasta = zyada loss) |
| Round-trip (closed loop) work | **Always ZERO** | **Non-zero** (energy heat mein chali jati hai) |
| Potential Energy U defined? | **Yes!** (ΔU = -W_conservative) | **No!** (Friction ki koi PE nahi hoti) |

---

## 2. Two Key Potential Energy Formulas

1. **Gravitational Potential Energy:**
   U(h) = m g h  (reference level jahan U = 0 hum apni suvidha se choose kar sakte hain — sirf **change ΔU = m g Δh** physically matter karta hai!).

2. **Elastic Potential Energy of a Spring (Hooke's Law F_s = -k x):**
   W_spring (from 0 to x) = -(1/2) k x².
   Since ΔU = -W_conservative:
   ```
     U_spring = (1/2) k x²
   ```
   *(Notice: chahe spring stretch ho (+x) ya compress ho (-x), x² hamesha positive hai => U_spring ≥ 0!)*

---

## 3. Force from Potential Energy & Three Types of Equilibrium

Conservative force aur PE ka deep relation hai:
```
  F(x) = - dU / dx   (negative slope of U–x graph!)
```
Jab **F = 0** (yani **dU / dx = 0**), particle **Equilibrium** mein hota hai:
1. **Stable Equilibrium:** U(x) **MINIMUM** par ho (katori ke neeche rakhi ball — halka hilao toh wapas laut aati hai!).
2. **Unstable Equilibrium:** U(x) **MAXIMUM** par ho (ulti katori ke top par rakhi ball — halka hilao toh door gir jati hai!).
3. **Neutral Equilibrium:** U(x) **CONSTANT** ho (flat table par rakhi ball — jahan rakho wahin ruk jati hai!).

---

## Solved Examples

### Example 1: Dattatreya's Spring Energy Comparison

A suspension spring of spring constant k = 20,000 N/m is compressed by 5 cm (0.05 m). (a) Find the elastic potential energy stored. (b) How much EXTRA energy is needed to compress it by another 5 cm (from 5 cm to 10 cm)?

**Solution:**
- (a) U₁ = (1/2)(20,000)(0.05)² = 10,000 × 0.0025 = **25 J**.
- (b) At 10 cm (0.10 m): U₂ = (1/2)(20,000)(0.10)² = 10,000 × 0.01 = 100 J.
  Extra energy needed = U₂ - U₁ = 100 - 25 = **75 J** (3 times the first 5 cm!).

Jaanch:
- Jaanch: Double compression makes U four times (25 -> 100 J), so extra = 75 J ✅

---

### Example 2: Gravitational PE — Path Independence Check

A 5 kg block is lifted to a vertical height of 4 m (g = 10 m/s²): (a) straight vertically up, (b) along a smooth 30° ramp of length 8 m. Compare the work done by gravity and the increase in PE.

**Solution:**
- Vertical rise Δh = 4 m in BOTH cases!
- W_gravity = -m g Δh = -5(10)(4) = **-200 J** in both cases.
- ΔU = -W_gravity = **+200 J** in both cases (completely path-independent!).

Jaanch:
- Jaanch: Along ramp: -(m g sin 30°) × 8 = -(25) × 8 = -200 J ✅

---

### Example 3: Finding Force & Equilibrium from U(x)

The potential energy of a particle is given by U(x) = 3 x² - 12 x + 5 (in Joules, x in metres). Find:
(a) the force F(x) acting on the particle,
(b) the equilibrium position x, and state whether it is stable or unstable.

**Solution:**
- (a) F(x) = -dU/dx = -(6 x - 12) = **12 - 6 x N**.
- (b) For equilibrium, F(x) = 0 => 12 - 6 x = 0 => **x = 2 m**.
- Check stability: U(2) = 12 - 24 + 5 = -7 J; at x = 1 or x = 3, U = -4 J > -7 J => U is **MINIMUM** at x = 2 m => **Stable Equilibrium**!

Jaanch:
- Jaanch: Right of x = 2 (e.g. x = 3), F = -6 N (pushes left back to 2); left of 2 (x = 1), F = +6 N (pushes right back to 2) ✅

---

### Example 4: Two Springs Stretched by Same Force vs Same Distance

Two springs have constants k₁ = 100 N/m and k₂ = 400 N/m. Find the ratio of energy stored U₁ / U₂ if they are stretched by: (a) the same distance x, (b) the same pulling force F.

**Solution:**
- (a) Same x: U = (1/2) k x² ∝ k => U₁ / U₂ = 100 / 400 = **1 : 4** (stiffer spring stores more!).
- (b) Same F: Since F = k x => x = F / k => **U = F² / (2 k) ∝ 1 / k** => U₁ / U₂ = 400 / 100 = **4 : 1** (softer spring stretches more and stores MORE energy!).

Jaanch:
- Jaanch: Check (b) with F = 400 N: x₁ = 4 m (U₁ = 800 J), x₂ = 1 m (U₂ = 200 J) => 800 : 200 = 4 : 1 ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: ΔU = +W_conservative likh dena (minus sign bhool jana!)
- **Galat:** Gravity ne -200 J work kiya toh PE bhi -200 J ho gayi!
- **Sahi:** **ΔU = -W_conservative**! Gravity ke against upar uthane par W_gravity negative (-200 J) hota hai aur PE **positive (+200 J) badhti** hai!

### Galti 2: Same force par stiff (bade k) spring mein zyada energy maan lena
- **Galat:** U = (1/2) k x² mein k bada hai toh hamesha stiff spring mein zyada energy hogi!
- **Sahi:** Same **x** par U ∝ k (stiff wins), par same **F** par U = F²/(2k) ∝ 1/k (**soft spring wins**)!

### Galti 3: Friction ke liye Potential Energy define kar dena
- **Galat:** Friction ki PE = μ m g x.
- **Sahi:** Friction **non-conservative** hai (path par depend karta hai) — iski koi Potential Energy exist hi nahi karti!

---

## Quick Recap

- **Conservative forces:** Path-independent, zero closed-loop work, ΔU = -W_c.
- **Gravitational PE:** U = m g h; **Spring PE:** U = (1/2) k x² = F² / (2k).
- **Force–PE:** F = -dU/dx; Equilibrium at dU/dx = 0 (U min = stable, U max = unstable, U const = neutral).

---

## Practice Questions

*(Take g = 10 m/s² unless stated otherwise.)*

### Question 1
A 20 kg water tank is raised to a roof 15 m high. Find the increase in its gravitational potential energy.

**Solution:**
ΔU = m g h = 20 × 10 × 15 = **3000 J (3 kJ)**.

Jaanch:
- Jaanch: 200 × 15 = 3000 J ✅

---

### Question 2
A spring stores 10 J of energy when stretched by 2 cm. How much energy will it store when stretched by 6 cm?

**Solution:**
U ∝ x² => stretch becomes 3× (6/2 = 3), so U becomes 3² = 9× => **90 J**.

Jaanch:
- Jaanch: k = 2(10)/(0.02)² = 50,000 N/m; at 0.06 m: 25,000 × 0.0036 = 90 J ✅

---

### Question 3
Find the work done by gravity when a 4 kg ball is thrown upward to a height of 10 m and returns to the thrower's hand.

**Solution:**
Gravity is conservative and start = end (closed loop) => **W_gravity = 0 J**.

Jaanch:
- Jaanch: Upward W = -400 J, downward W = +400 J; sum = 0 J ✅

---

### Question 4
A spring of constant k = 500 N/m is compressed by 0.2 m. Find the stored elastic potential energy.

**Solution:**
U = (1/2)(500)(0.04) = **10 J**.

Jaanch:
- Jaanch: 250 × 0.04 = 10 J ✅

---

### Question 5
The potential energy of a particle is U(x) = 4 x² - 8 x (in J). Find the force at x = 3 m and the equilibrium position.

**Solution:**
- F(x) = -dU/dx = -(8 x - 8) = 8 - 8 x => F(3) = 8 - 24 = **-16 N**.
- Equilibrium F = 0 => 8 - 8 x = 0 => **x = 1 m** (stable).

Jaanch:
- Jaanch: U(1) = -4 J (minimum); at x = 3, slope is positive (+16) so force is -16 N ✅

---

### Question 6
Two springs of constants 300 N/m and 600 N/m are stretched by the same force F. Find the ratio of their stored potential energies U₁ / U₂.

**Solution:**
Same force => U = F²/(2k) ∝ 1/k => U₁ / U₂ = 600 / 300 = **2 : 1**.

Jaanch:
- Jaanch: Softer spring (300 N/m) stretches twice as far and stores twice the energy ✅

---

### Question 7
A uniform chain of mass 2 kg and length 4 m hangs vertically over the edge of a table with half of its length (2 m) hanging down. Find the work required to pull the hanging part completely onto the table.

**Solution:**
Hanging mass = 1 kg; its centre of mass is at depth L/4 = 1 m below the table!
Work required = ΔU = m_hang g h_cm = 1 × 10 × 1 = **10 J**.

Jaanch:
- Jaanch: Half mass (1 kg) lifted by average height 1 m => 10 J ✅

---

### Question 8
The potential energy of a particle is U(x) = -2 x² + 12 x (in J). Find the equilibrium position and state whether it is stable or unstable.

**Solution:**
F = -dU/dx = 4 x - 12 = 0 => **x = 3 m**.
U(3) = -18 + 36 = +18 J; at x = 2 or 4, U = +16 J < 18 J => U is **MAXIMUM** => **Unstable Equilibrium**!

Jaanch:
- Jaanch: Downward parabola has a peak (maximum) at x = 3 m => unstable ✅

---

### Question 9
A 2 kg block is dragged 10 m forward and then 10 m back to its starting point on a rough horizontal floor (μ_k = 0.25). Find the total work done by friction over the closed loop.

**Solution:**
f_k = 0.25 × 20 = 5 N. Friction opposes motion in BOTH legs (total path = 20 m):
W_friction = -5 × 20 = **-100 J** (non-zero => non-conservative!).

Jaanch:
- Jaanch: -50 J going + (-50 J) returning = -100 J ✅

---

### Question 10
A spring has k = 800 N/m. How much work is done in stretching it from x = 5 cm to x = 15 cm?

**Solution:**
W = (1/2)(800)(0.15² - 0.05²) = 400(0.0225 - 0.0025) = 400 × 0.02 = **8 J**.

Jaanch:
- Jaanch: (0.15 - 0.05)(0.15 + 0.05) = 0.1 × 0.2 = 0.02; 400 × 0.02 = 8 J ✅

---

### Question 11
State whether the following statements are True or False:
(a) Potential energy can be negative depending on the choice of reference level.
(b) A particle in stable equilibrium sits at a maximum of potential energy.

**Solution:**
- (a) **True** ✅ — Agar ground par U = 0 maano, toh kuye (well) ke andar U = -mgh negative hota hai!
- (b) **False** ❌ — Stable equilibrium **minimum** of PE par hota hai (maximum par unstable hota hai).

Jaanch:
- Jaanch: Reference level is arbitrary; stable = energy valley (minimum) ✅

---

### Question 12
A 2D conservative potential energy is U(x, y) = 3 x + 4 y (in J). Find the magnitude of the constant force acting on the particle.

**Solution:**
F_x = -dU/dx = -3 N; F_y = -dU/dy = -4 N.
|F| = √((-3)² + (-4)²) = **5 N**.

Jaanch:
- Jaanch: 3-4-5 right triangle ✅

---

Potential energy aur conservative forces ka concept bilkul crystal clear ho gaya!

**Agle topic mein:** Kinetic aur Potential Energy ko jod kar physics ka sabse elegant conservation law dekhenge — [Conservation of Mechanical Energy](work-energy-and-power-part4.md)!
