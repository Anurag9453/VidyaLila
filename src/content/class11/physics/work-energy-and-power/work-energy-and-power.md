> **Class:** 11 | **Subject:** Physics | **Chapter 5:** Work, Energy and Power

# Work Done by Constant & Variable Forces and Scalar (Dot) Product

> **Pichle chapter aur pehle ki padhai se:** [Laws of Motion](../laws-of-motion/laws-of-motion-part6.md) mein humne forces aur acceleration ka rishta padha. Work aur Energy ka basic intro tum [Class 9 Work, Energy and Power](../../../class9/physics/work-energy-and-power/work-energy-and-power.md) mein dekh chuke ho — yahan hum ise **Scalar (Dot) Product** aur **Variable Forces (F–x graph area)** ke exact level tak le jayenge!

---

## Abanindra ka Cargo-Dock Forklift Check

Abanindra ek cargo dock par forklift aur crane supervisor hai. Usne teen situations dekhi:
1. Forklift ne ek crate ko horizontal floor par **40 N** force se **5 m** aage khiska diya -> Work = **+200 J**.
2. Ek worker ne 20 kg box ko sir par utha kar horizontal platform par **10 m** chala -> Gravity dwara work = **0 J** (kyunki force vertically neeche hai aur displacement horizontal — exact **90°**!).
3. Brake lagane par friction ne chalti trolley ko peeche ki taraf rok diya -> Friction dwara work = **negative**!

Aam zindagi mein "mehnat = kaam" lagta hai, par physics mein Work sirf tab hota hai jab force ki disha mein displacement ho!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Scalar (Dot) Product (A · B) | Do vectors ka scalar result: **A · B = A B cos θ = A_x B_x + A_y B_y + A_z B_z** |
| Work Done by Constant Force (W) | Force aur displacement ka dot product: **W = F · d = F d cos θ** (SI unit: **Joule**, 1 J = 1 N m) |
| Positive / Negative / Zero Work | θ < 90° => Positive; θ = 90° => Zero; θ > 90° => Negative |
| Variable Force | Aisa force jo position x ke saath badalta rahe (jaise spring force F = -kx) |
| Area under F–x Graph | Variable force dwara x₁ se x₂ tak kiya gaya work = F–x curve ke neeche ka signed area |

---

## 1. Scalar (Dot) Product of Two Vectors

Do vectors **A** aur **B** ke beech angle **θ** ho, toh unka **Dot Product** (Scalar Product) hai:
```
  A · B = A B cos θ
```
**Component Form:**
Kyunki î · î = ĵ · ĵ = k̂ · k̂ = 1 aur î · ĵ = ĵ · k̂ = k̂ · î = 0:
```
  A · B = A_x B_x + A_y B_y + A_z B_z
```
**Super Useful Test:** Do non-zero vectors **perpendicular (90°)** hote hain agar aur sirf agar **A · B = 0**!

---

## 2. Work Done by a Constant Force

```
  W = F · d = F d cos θ = F_x d_x + F_y d_y + F_z d_z
```
- **θ = 0°:** W = +F d (maximum positive work).
- **θ = 90°:** W = 0 (e.g., Normal force on flat floor, Centripetal force in UCM, coolie carrying load horizontally!).
- **θ = 180°:** W = -F d (e.g., kinetic friction opposing sliding, gravity while lifting upward).

---

## 3. Work Done by a Variable Force

Jab force F(x) position x ke saath badalta hai, toh hum displacement ko bahut chhote hisson Δx mein baant kar sabhi chhote strips (F Δx) ka sum lete hain — yani **F–x graph ke neeche ka signed area**!

```
  W = Area under F–x graph from x₁ to x₂   (calculus mein: integral of F(x) dx)
```
**Classic Example — Stretching a Spring (F = k x):**
F–x graph origin se (x, kx) tak ek right triangle banta hai:
**W_external = (1/2) × base × height = (1/2) × x × (k x) = (1/2) k x²**!
(Aur spring khud opposite direction mein **W_spring = -(1/2) k x²** work karti hai!)

---

## Solved Examples

### Example 1: Dot Product & Angle Between Two Vectors

Find the dot product and the angle θ between A = 2 î + 2 ĵ - k̂ and B = 6 î - 3 ĵ + 2 k̂.

**Solution:**
- A · B = (2)(6) + (2)(-3) + (-1)(2) = 12 - 6 - 2 = **4**.
- |A| = √(4 + 4 + 1) = 3; |B| = √(36 + 9 + 4) = 7.
- cos θ = (A · B) / (|A| |B|) = 4 / (3 × 7) = **4 / 21** (θ ≈ 79°).

Jaanch:
- Jaanch: 12 - 6 - 2 = 4; |A| = 3, |B| = 7; |cos θ| = 4/21 < 1 ✅

---

### Example 2: Work Done by a 3D Force Vector

A constant force F = (5 î + 3 ĵ + 2 k̂) N displaces a body from r₁ = (1 î + 2 ĵ + 1 k̂) m to r₂ = (4 î - 1 ĵ + 3 k̂) m. Find the work done by the force.

**Solution:**
- Displacement vector: d = r₂ - r₁ = (4 - 1) î + (-1 - 2) ĵ + (3 - 1) k̂ = **3 î - 3 ĵ + 2 k̂ m**.
- Work W = F · d = (5)(3) + (3)(-3) + (2)(2) = 15 - 9 + 4 = **10 J**.

Jaanch:
- Jaanch: 15 - 9 = 6; 6 + 4 = 10 J ✅

---

### Example 3: Work Done on a Rough Floor (All Forces!)

A 5 kg crate is pulled 4 m horizontally across a rough floor (μ_k = 0.2, g = 10 m/s²) by a horizontal force of 30 N. Find the work done by: (a) applied force, (b) friction, (c) gravity, (d) Normal force, (e) net work.

**Solution:**
- (a) W_applied = 30 × 4 × cos 0° = **+120 J**.
- (b) f_k = 0.2 × 50 = 10 N (opposite to motion) => W_friction = 10 × 4 × cos 180° = **-40 J**.
- (c) Gravity is at 90° to horizontal motion => W_gravity = **0 J**.
- (d) Normal is at 90° to horizontal motion => W_normal = **0 J**.
- (e) W_net = 120 - 40 + 0 + 0 = **+80 J**.

Jaanch:
- Jaanch: F_net = 30 - 10 = 20 N => W_net = 20 × 4 = 80 J ✅

---

### Example 4: Work from a Variable F–x Graph

A variable force acts on a particle along the x-axis: F = 10 N from x = 0 to 4 m, then decreases linearly to 0 N at x = 8 m, and becomes -5 N (constant) from x = 8 m to 10 m. Find the net work done from x = 0 to 10 m.

**Solution:**
- Area 1 (0 to 4 m, rectangle): 10 × 4 = **+40 J**.
- Area 2 (4 to 8 m, triangle): (1/2) × 4 × 10 = **+20 J**.
- Area 3 (8 to 10 m, negative rectangle): (-5) × 2 = **-10 J**.
- Net Work = 40 + 20 - 10 = **+50 J**.

Jaanch:
- Jaanch: Signed areas summed: 40 + 20 - 10 = 50 J ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Force aur displacement ke beech angle cos θ bhool jana
- **Galat:** 20 N force 60° par laga kar 5 m khiskaya => W = 20 × 5 = 100 J.
- **Sahi:** Sirf displacement ki disha wala component kaam karta hai: W = 20 × 5 × cos 60° = **50 J**!

### Galti 2: Centripetal force dwara work ko non-zero bol dena
- **Galat:** Earth Sun ke chaaron taraf poora chakkar lagati hai, toh gravity bahut zyada work karti hai!
- **Sahi:** Uniform circular motion mein centripetal force har pal velocity/displacement ke **90°** par hota hai => **W = 0 J**!

### Galti 3: Variable force F(x) par seedha W = F × x laga dena
- **Galat:** Spring force F = k x hai toh x stretch karne ka work W = (kx) × x = k x²!
- **Sahi:** F 0 se kx tak linearly badha hai (average force = kx / 2), isliye triangle area = **(1/2) k x²**!

---

## Quick Recap

- **Dot Product:** A · B = AB cos θ = A_xB_x + A_yB_y + A_zB_z (zero when perpendicular!).
- **Constant Force Work:** W = F · d = Fd cos θ (scalar, Joules).
- **Variable Force Work:** Signed area under F–x graph (spring stretch from 0 to x: W = (1/2) k x²).

---

## Practice Questions

### Question 1
Find the value of p so that A = 2 î + p ĵ + k̂ and B = 4 î - 2 ĵ - 2 k̂ are perpendicular to each other.

**Solution:**
A · B = 0 => (2)(4) + p(-2) + (1)(-2) = 0 => 8 - 2p - 2 = 0 => 2p = 6 => **p = 3**.

Jaanch:
- Jaanch: 8 - 6 - 2 = 0 ✅

---

### Question 2
A force of 50 N pulls a suitcase 12 m along a level floor at an angle of 60° above the horizontal. Find the work done by the force.

**Solution:**
W = 50 × 12 × cos 60° = 600 × (1/2) = **300 J**.

Jaanch:
- Jaanch: Horizontal component = 25 N; 25 × 12 = 300 J ✅

---

### Question 3
A force F = (3 î + 4 ĵ) N causes a displacement d = (2 î - 5 ĵ) m. Find the work done.

**Solution:**
W = F · d = (3)(2) + (4)(-5) = 6 - 20 = **-14 J**.

Jaanch:
- Jaanch: 6 - 20 = -14 J (negative work!) ✅

---

### Question 4
A spring of force constant k = 400 N/m is stretched by 0.10 m from its natural length. Find the work done by the external pulling agent and the work done by the spring force.

**Solution:**
- W_ext = (1/2) k x² = (1/2)(400)(0.01) = **+2 J**.
- W_spring = **-2 J**.

Jaanch:
- Jaanch: 200 × 0.01 = 2 J ✅

---

### Question 5
How much work is done in stretching a spring (k = 200 N/m) from x₁ = 0.1 m to x₂ = 0.3 m?

**Solution:**
W = (1/2) k (x₂² - x₁²) = (1/2)(200)(0.09 - 0.01) = 100 × 0.08 = **8 J**.

Jaanch:
- Jaanch: Trapezoid area on F–x from F₁ = 20 N to F₂ = 60 N over 0.2 m: (1/2)(20 + 60)(0.2) = 8 J ✅

---

### Question 6
A 10 kg mass is lifted vertically upward by 6 m at constant speed (g = 10 m/s²). Find the work done by: (a) the lifting force, (b) gravity.

**Solution:**
- (a) F_lift = 100 N upward => W_lift = +100 × 6 = **+600 J**.
- (b) W_gravity = -100 × 6 = **-600 J**.

Jaanch:
- Jaanch: Net work = +600 - 600 = 0 J (constant speed!) ✅

---

### Question 7
A variable force F(x) = 3 x² (in N) acts on a particle from x = 0 to x = 2 m. Using the fact that the area under 3x² from 0 to x is x³, find the work done.

**Solution:**
W = [x³] from 0 to 2 = 2³ - 0³ = **8 J**.

Jaanch:
- Jaanch: Derivative of x³ is 3x² = F(x) ✅

---

### Question 8
A particle moves along the x-axis under a force whose F–x graph is a triangle rising from (0, 0) to (4 m, 20 N) and dropping to (6 m, 0). Find the total work done from x = 0 to 6 m.

**Solution:**
Area of triangle = (1/2) × base × height = (1/2) × 6 × 20 = **60 J**.

Jaanch:
- Jaanch: Left triangle (40 J) + right triangle (20 J) = 60 J ✅

---

### Question 9
Find the angle between vectors P = î + ĵ and Q = î - ĵ.

**Solution:**
P · Q = (1)(1) + (1)(-1) = 0 => **θ = 90°**!

Jaanch:
- Jaanch: +45° aur -45° ke beech exact 90° angle hota hai ✅

---

### Question 10
A 2 kg block slides 5 m down a smooth 30° inclined plane (g = 10 m/s²). Find the work done by gravity.

**Solution:**
Component of gravity along incline = m g sin 30° = 20(1/2) = 10 N.
W_gravity = 10 × 5 = **+50 J** (same as m g h = 2 × 10 × 2.5 = 50 J!).

Jaanch:
- Jaanch: Vertical drop h = 5 sin 30° = 2.5 m => mgh = 50 J ✅

---

### Question 11
State whether the following statements are True or False:
(a) Work done by friction is always negative.
(b) Work is a scalar quantity even though it is the product of two vectors.

**Solution:**
- (a) **False** ❌ — Jab upper block lower block ke saath friction ki wajah se aage chalta hai (walking ya two-block stack), toh static friction **positive work** karta hai!
- (b) **True** ✅ — Dot product hamesha scalar deta hai.

Jaanch:
- Jaanch: Friction opposes relative slipping, not necessarily ground displacement ✅

---

### Question 12
A body is pushed 10 m across a floor by a force F = (6 î + 8 ĵ) N along the +x axis. Find the work done.

**Solution:**
d = 10 î m => W = (6)(10) + (8)(0) = **60 J**.

Jaanch:
- Jaanch: Sirf x-component (6 N) displacement ke along hai: 6 × 10 = 60 J ✅

---

Work aur dot product ka foundation pakka ho gaya!

**Agle topic mein:** Work karne se object ki speed par kya asar padta hai — chalo physics ke sabse universal theorem ko padhte hain: [Kinetic Energy & the Work–Energy Theorem](work-energy-and-power-part2.md)!
