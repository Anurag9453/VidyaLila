> **Class:** 11 | **Subject:** Physics | **Chapter 5:** Work, Energy and Power (Part 2)

# Kinetic Energy & the Work–Energy Theorem

> **Pichle topic se:** [Work & Scalar Product](work-energy-and-power.md) mein humne constant aur variable forces dwara kiya gaya work nikalna seekha. Ab hum dekhenge ki kisi body par lagne wale **sabhi forces ka total work** seedha uski **Kinetic Energy ke change** ke barabar kyun hota hai!

---

## Badrinath ka High-Speed Train Braking Check

Badrinath ek railway braking aur crash-barrier engineer hai. Ek **1000 kg** test pod **20 m/s** ki speed se chal kar ek non-linear rubber crash barrier mein takrata hai jahan force har centimetre par badalta rehta hai!

Newton ke F = ma se acceleration nikalna mushkil tha kyunki force constant nahi tha. Par Badrinath ne 5 second mein **Work–Energy Theorem** lagaya:
- Pod ki initial kinetic energy = (1/2)(1000)(20²) = **200,000 J**.
- Rukne par final kinetic energy = **0 J**.
- Matlab barrier ne exact **-200,000 J** ka work kiya — chahe force kitna bhi tedha-medha kyun na raha ho!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Kinetic Energy (K) | Motion ki wajah se energy: **K = (1/2) m v²** (scalar, hamesha ≥ 0, SI unit: **Joule**) |
| Momentum–KE Relation | **K = p² / (2 m)**  ya  **p = √(2 m K)** |
| Work–Energy Theorem | Kisi bhi body par **sabhi forces** (conservative + non-conservative + external) dwara kiya gaya total work = Change in Kinetic Energy: **W_all = ΔK = K_f - K_i** |

---

## 1. Derivation of the Work–Energy Theorem

**Constant Force Case (Kyun?):**
Uniform acceleration mein: v² - u² = 2 a s.
Dono taraf **(1/2) m** se multiply karo:
(1/2) m v² - (1/2) m u² = (m a) s = F_net s = W_net!

```
  W_all = K_f - K_i = (1/2) m v² - (1/2) m u²
```

**Variable Force Case:**
Chhote displacement dx par dK = d((1/2) m v²) = m v dv = m (dx/dt) dv = m (dv/dt) dx = F_net dx = dW!
Saare chhote hisson ko jodne par fir wahi exact theorem milta hai: **W_all = ΔK** — yeh **har tarah ke force** (constant, variable, curved path, friction, spring, gravity) ke liye 100% valid hai!

---

## 2. Kinetic Energy & Linear Momentum Relation (K = p² / 2m)

Since p = m v => v = p / m:
```
  K = (1/2) m (p / m)² = p² / (2 m)     <===>     p = √(2 m K)
```
**Two Quick Insights:**
1. Agar ek light aur ek heavy body ka **momentum p same** ho, toh **halki (smaller m) body ki KE ZYADA** hoti hai (K ∝ 1/m)!
2. Agar dono ki **KE same** ho, toh **bhari (larger m) body ka momentum p ZYADA** hota hai (p ∝ √m)!

---

## Solved Examples

### Example 1: Raindrop Falling Through Air Resistance

A raindrop of mass 1 g (10⁻³ kg) falls from a height of 1000 m and hits the ground with a constant terminal speed of 50 m/s (g = 10 m/s²). Find: (a) work done by gravity, (b) work done by air resistance!

**Solution:**
- (a) W_gravity = m g h = (10⁻³)(10)(1000) = **+10.0 J**.
- (b) Change in KE: ΔK = (1/2)(10⁻³)(50²) - 0 = 0.5 × 10⁻³ × 2500 = **+1.25 J**.
- By Work–Energy Theorem: W_gravity + W_air = ΔK
  10.0 + W_air = 1.25 => **W_air = -8.75 J**!

Jaanch:
- Jaanch: Gravity ne 10 J diye, air resistance ne 8.75 J kha liye, bache 1.25 J KE mein gaye ✅

---

### Example 2: Percentage Change in Kinetic Energy When Momentum Changes

If the linear momentum of a body increases by 50%, find the percentage increase in its kinetic energy.

**Solution:**
New momentum p' = 1.5 p.
Since K = p² / (2m) ∝ p²:
K' / K = (1.5)² = 2.25.
Percentage increase = (2.25 - 1) × 100% = **125%**.

Jaanch:
- Jaanch: Notice 50% bada momentum 100% nahi balki 125% KE badhata hai! (2×50% + 50²/100 = 125%) ✅

---

### Example 3: Bullet Penetrating a Wooden Plank

A 0.02 kg bullet moving at 200 m/s emerges from a 5 cm (0.05 m) thick wooden plank with a speed of 100 m/s. Find the average resistive force offered by the plank.

**Solution:**
- K_i = (1/2)(0.02)(200²) = 0.01 × 40,000 = 400 J.
- K_f = (1/2)(0.02)(100²) = 0.01 × 10,000 = 100 J.
- W_resistive = -F × 0.05 = K_f - K_i = 100 - 400 = -300 J.
- F = 300 / 0.05 = **6000 N**.

Jaanch:
- Jaanch: 6000 × 0.05 = 300 J loss; 400 - 300 = 100 J ✅

---

### Example 4: Stopping Distance via Work–Energy Theorem

A 1000 kg car moving at 30 m/s brakes on a rough horizontal road with μ_k = 0.45 (g = 10 m/s²). Use the Work–Energy Theorem to find its stopping distance.

**Solution:**
- Friction f_k = 0.45 × 10,000 = 4500 N.
- W_friction = -f_k d = 0 - (1/2)(1000)(30²) = -450,000 J.
- d = 450,000 / 4500 = **100 m**.

Jaanch:
- Jaanch: Kinematics check: a = μg = 4.5 m/s²; d = 900 / 9 = 100 m ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Work–Energy Theorem mein sirf ek force ka work lena (friction ya gravity bhool jana)
- **Galat:** Raindrop par sirf W_gravity = ΔK laga diya!
- **Sahi:** Theorem kehta hai **W_ALL** (sabhi forces — gravity + friction + air drag + applied + spring) = ΔK!

### Galti 2: Large percentage change (jaise 50% ya 100%) par linear 2× error rule laga dena
- **Galat:** Momentum 50% badha toh K ∝ p² se KE 2 × 50% = 100% badhegi!
- **Sahi:** Linear rule sirf chhote changes (< 5%) ke liye hota hai! 50% par exact square karo: (1.5)² - 1 = **125%**!

### Galti 3: Same momentum par bhari body ki KE zyada maan lena
- **Galat:** Truck aur cycle ka momentum same hai toh truck ki KE zyada hogi.
- **Sahi:** K = p² / (2m) => same p par **chhote mass (cycle) ki KE ZYADA** hoti hai (kyunki uski speed bahut zyada hogi)!

---

## Quick Recap

- **Kinetic Energy:** K = (1/2) m v² = p² / (2m); **p = √(2 m K)**.
- **Work–Energy Theorem:** **W_all = K_f - K_i** — works for ALL forces (constant, variable, friction, curved paths!).
- **Same p:** lighter body has more KE; **Same K:** heavier body has more momentum.

---

## Practice Questions

### Question 1
Find the kinetic energy of a 4 kg object moving with velocity v = (3 î + 4 ĵ) m/s.

**Solution:**
v² = 3² + 4² = 25 m²/s².
K = (1/2)(4)(25) = **50 J**.

Jaanch:
- Jaanch: Speed = 5 m/s => (1/2)(4)(25) = 50 J ✅

---

### Question 2
Two bodies of masses 1 kg and 4 kg have equal kinetic energies. Find the ratio of their linear momenta p₁ / p₂.

**Solution:**
p = √(2 m K) => for equal K, p ∝ √m.
p₁ / p₂ = √(1 / 4) = **1 : 2**.

Jaanch:
- Jaanch: Check with K = 8 J: p₁ = √16 = 4, p₂ = √64 = 8 => 4 : 8 = 1 : 2 ✅

---

### Question 3
Two bodies of masses 2 kg and 8 kg have equal linear momenta. Find the ratio of their kinetic energies K₁ / K₂.

**Solution:**
K = p² / (2m) => for equal p, K ∝ 1 / m.
K₁ / K₂ = m₂ / m₁ = 8 / 2 = **4 : 1**.

Jaanch:
- Jaanch: Lighter mass (2 kg) has 4× the kinetic energy of heavier mass (8 kg) ✅

---

### Question 4
If the kinetic energy of a body increases by 300%, by what percentage does its linear momentum increase?

**Solution:**
K' = K + 3K = 4K.
Since p ∝ √K => p' = √4 p = 2 p.
Percentage increase = (2 - 1) × 100% = **100%**.

Jaanch:
- Jaanch: Doubling p makes K = 2² = 4 times (+300%) ✅

---

### Question 5
A 2 kg block starts from rest and is acted upon by a net force whose F–x graph is a rectangle of 10 N from x = 0 to 5 m, followed by a triangle dropping to 0 at x = 9 m. Find its final speed at x = 9 m.

**Solution:**
W = 10(5) + (1/2)(4)(10) = 50 + 20 = 70 J.
(1/2)(2) v² = 70 => v² = 70 => **v = √70 ≈ 8.37 m/s**.

Jaanch:
- Jaanch: 50 + 20 = 70 J = (1/2)(2)(70) ✅

---

### Question 6
A 5 kg block moving at 6 m/s on a rough horizontal floor comes to rest after sliding 9 m. Find the coefficient of kinetic friction μ_k (g = 10 m/s²).

**Solution:**
-μ_k m g s = 0 - (1/2) m u² => μ_k (10)(9) = (1/2)(36) = 18 => 90 μ_k = 18 => **μ_k = 0.2**.

Jaanch:
- Jaanch: f_k = 0.2 × 50 = 10 N; W = -90 J; K_i = 0.5 × 5 × 36 = 90 J ✅

---

### Question 7
A particle of mass 0.5 kg travels in a straight line with velocity v = 5 x^(3/2) (in SI units). Find the work done by the net force during its displacement from x = 0 to x = 2 m.

**Solution:**
- At x = 0: v_i = 0 => K_i = 0.
- At x = 2 m: v_f = 5 (2)^(3/2) => v_f² = 25 × 8 = 200 m²/s².
- W = K_f - K_i = (1/2)(0.5)(200) = **50 J**.

Jaanch:
- Jaanch: Work-Energy Theorem solves variable-force motion in 2 lines without integration! ✅

---

### Question 8
A 10 g bullet moving at 400 m/s is stopped by a 10 cm thick wall. Find the average resistive force.

**Solution:**
K_i = (1/2)(0.01)(160,000) = 800 J.
F × 0.10 = 800 => **F = 8000 N**.

Jaanch:
- Jaanch: 8000 × 0.10 = 800 J ✅

---

### Question 9
A 2 kg block is pushed from rest up a smooth 30° incline by a constant force of 20 N parallel to the incline for 4 m (g = 10 m/s²). Find its speed at the end of 4 m.

**Solution:**
- W_applied = 20 × 4 = +80 J.
- W_gravity = -(m g sin 30°) × 4 = -10 × 4 = -40 J.
- W_net = 80 - 40 = +40 J = (1/2)(2) v² => v² = 40 => **v = 2 √10 ≈ 6.32 m/s**.

Jaanch:
- Jaanch: a = (20 - 10)/2 = 5 m/s² => v² = 2(5)(4) = 40 ✅

---

### Question 10
A car's momentum increases by 1%. What is the approximate percentage increase in its kinetic energy?

**Solution:**
For a tiny change (1%), K ∝ p² => %K ≈ 2 × (%p) = **2%**.

Jaanch:
- Jaanch: Exact (1.01)² - 1 = 0.0201 = 2.01% ≈ 2% ✅

---

### Question 11
State whether the following statements are True or False:
(a) The Work–Energy Theorem applies only when all forces are conservative.
(b) Kinetic energy of a body can never be negative.

**Solution:**
- (a) **False** ❌ — W_all = ΔK sabhi forces (friction aur air drag samet!) ke liye valid hai.
- (b) **True** ✅ — m > 0 aur v² ≥ 0, isliye K = (1/2)mv² ≥ 0 always!

Jaanch:
- Jaanch: Raindrop example (Ex 1) mein air resistance ke saath theorem valid tha ✅

---

### Question 12
A 3 kg object has velocity 4 m/s. A net work of 75 J is done on it. Find its new speed.

**Solution:**
K_i = (1/2)(3)(16) = 24 J.
K_f = 24 + 75 = 99 J = (1/2)(3) v² => v² = 66 => **v = √66 ≈ 8.12 m/s**.

Jaanch:
- Jaanch: (1/2)(3)(66) - (1/2)(3)(16) = 99 - 24 = 75 J ✅

---

Work–Energy Theorem tumhe har variable-force aur braking problem mein superfast shortcut deta hai!

**Agle topic mein:** Kuch forces (jaise gravity aur spring) energy ko store kar lete hain — chalo padhte hain [Potential Energy & Conservative Forces](work-energy-and-power-part3.md)!
