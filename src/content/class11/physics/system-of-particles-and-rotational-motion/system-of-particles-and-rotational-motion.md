> **Class:** 11 | **Subject:** Physics | **Chapter 6:** System of Particles and Rotational Motion

# Centre of Mass & Motion of a System of Particles

> **Pichle chapter se:** [Work, Energy and Power](../work-energy-and-power/work-energy-and-power-part7.md) tak hum har object ko ek chhota point mass maan rahe the. Par asli cheezein — jaise cricket bat, spacecraft, ya car — extended rigid bodies hoti hain! Unke motion ko samajhne ka pehla jaadui point hai **Centre of Mass (CM)**!

---

## Ramakant ka Aerospace Cargo-Balance Check

Ramakant ek aerospace cargo-balance engineer hai. Jab ek rocket ke nose-cone mein **2 kg** battery aur **6 kg** sensor module **4 m** door rakhe jate hain, toh pura system beech (2 m) par balance nahi hota — balki bhari **6 kg** module ke kareeb (sirf **1 m** door, yani 2 kg se **3 m** door!) balance hota hai!

Aur sabse kamaal ki baat: agar hawa mein udta hua ek rocket/shell beech raaste mein internal explosion se tukdon mein phat jaye, toh tukde chahe jidhar udein, unka **Centre of Mass** bina bhatke wahi purana parabolic path follow karta rehta hai!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Rigid Body | Aisi body jiske kisi bhi do particles ke beech ki doori force lagne par bhi bilkul nahi badalti (idealized) |
| Centre of Mass (CM) | Woh khaas imaginary point jahan poore system ka total mass concentrated maana ja sakta hai translational motion ke liye |
| Internal Forces | System ke particles ke aapas ke forces — yeh hamesha action-reaction pairs mein cancel ho jate hain (CM ko hila nahi sakte!) |
| External Force (F_ext) | System ke bahar se lagne wala force — sirf yahi CM ko accelerate kar sakta hai (**M a_cm = F_ext**) |

---

## 1. Position of Centre of Mass

### A. Two-Particle System (m₁ at x₁, m₂ at x₂)
```
  x_cm = (m₁ x₁ + m₂ x₂) / (m₁ + m₂)
```
**Distance Shortcut:** Agar dono ke beech doori **d** ho, toh CM hamesha **bhari mass ke zyada paas** hota hai:
- m₁ se doori: **r₁ = m₂ d / (m₁ + m₂)**
- m₂ se doori: **r₂ = m₁ d / (m₁ + m₂)**
(Check: **m₁ r₁ = m₂ r₂**!)

### B. System of N Particles in 2D / 3D
```
  x_cm = (Σ mᵢ xᵢ) / M,    y_cm = (Σ mᵢ yᵢ) / M,    z_cm = (Σ mᵢ zᵢ) / M
  Vector form:   r_cm = (Σ mᵢ rᵢ) / M      (where M = Σ mᵢ)
```

*(Note: CM zaroori nahi ki material ke andar hi ho! Ring, hollow sphere, aur boomerang ka CM khali hawa mein hota hai!)*

---

## 2. Velocity, Acceleration & Momentum of CM

r_cm = (Σ mᵢ rᵢ) / M ko time ke respect mein differentiate karne par:
1. **Velocity of CM:** **v_cm = (Σ mᵢ vᵢ) / M = P_total / M**  =>  **P_total = M v_cm**!
2. **Acceleration of CM:** **a_cm = (Σ mᵢ aᵢ) / M**  =>  **M a_cm = Σ F_ext**!

**Golden Law:** Internal forces hamesha pairs mein cancel ho jati hain (Σ F_internal = 0)!
Agar **F_ext = 0**:
- **a_cm = 0  =>  v_cm = constant!**
- Agar CM shuru mein rest par tha (v_cm = 0), toh internal motion (jaise boat par chalna ya shell ka phatna) ke bawajood **CM ki position bilkul nahi hilti (Δx_cm = 0 => Σ mᵢ Δxᵢ = 0)**!

---

## Solved Examples

### Example 1: Ramakant's 2-Particle Balance & 3-Particle Triangle

(a) Masses 2 kg and 6 kg lie on the x-axis at x = 0 and x = 4 m. Find x_cm.
(b) Three particles of masses 1 kg, 2 kg, and 3 kg are placed at the vertices of an equilateral triangle of side 2 m: (0, 0), (2, 0), and (1, √3). Find the coordinates of the CM.

**Solution:**
- (a) x_cm = (2(0) + 6(4)) / (2 + 6) = 24 / 8 = **3.0 m** (3 m from 2 kg, 1 m from 6 kg!).
- (b) Total mass M = 1 + 2 + 3 = 6 kg.
  x_cm = [1(0) + 2(2) + 3(1)] / 6 = **7 / 6 m**.
  y_cm = [1(0) + 2(0) + 3(√3)] / 6 = 3√3 / 6 = **√3 / 2 m**.

Jaanch:
- Jaanch: (a) m₁ r₁ = 2(3) = 6 = m₂ r₂ = 6(1) ✅; (b) CM shifted closest to heaviest 3 kg vertex ✅

---

### Example 2: CM of an L-Shaped Uniform Lamina

An L-shaped thin uniform sheet of total mass 3 kg consists of three identical 1 kg squares of side 1 m each, with centres at (0.5, 0.5), (1.5, 0.5), and (0.5, 1.5). Find its CM.

**Solution:**
Each square's mass is concentrated at its geometric centre!
- x_cm = (1(0.5) + 1(1.5) + 1(0.5)) / 3 = 2.5 / 3 = **5 / 6 m**.
- y_cm = (1(0.5) + 1(0.5) + 1(1.5)) / 3 = 2.5 / 3 = **5 / 6 m**.

Jaanch:
- Jaanch: By symmetry about the y = x diagonal, x_cm = y_cm = 5/6 m ✅

---

### Example 3: Person Walking on a Floating Boat (Zero Shift of CM!)

A 60 kg person stands at one end of a 120 kg uniform boat of length 6 m floating on still water (no water friction). If the person walks to the other end of the boat, how far does the boat move relative to the water?

**Solution:**
No external horizontal force => **Δx_cm = 0 => m_p Δx_p + m_b Δx_b = 0**!
Let the boat shift backward by **x** (so Δx_b = -x).
Then the person's forward shift wrt water is **Δx_p = L - x = 6 - x**!
60 (6 - x) + 120 (-x) = 0 => 360 - 60 x - 120 x = 0 => 180 x = 360 => **x = 2 m** (backward!).

Jaanch:
- Jaanch: Person moves +4 m, boat moves -2 m: 60(+4) + 120(-2) = +240 - 240 = 0 ✅

---

### Example 4: Mid-Air Explosion of a Projectile

A projectile of mass 4 kg is fired so that its normal horizontal range is 80 m. At its highest point, it explodes into two equal 2 kg fragments. One fragment falls straight vertically downward from the highest point. Where does the second fragment land?

**Solution:**
Explosion is purely internal => CM STILL lands at **x_cm = 80 m**!
- First 2 kg fragment lands directly below highest point: x₁ = R/2 = **40 m**.
- x_cm = (2 x₁ + 2 x₂) / 4 => 80 = (40 + x₂) / 2 => 40 + x₂ = 160 => **x₂ = 120 m** from the launch point!

Jaanch:
- Jaanch: Midpoint of 40 m and 120 m is (40 + 120)/2 = 80 m = x_cm ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: CM ko hamesha body ke material ke andar hi maan lena
- **Galat:** Ring ya hollow cylinder ka CM uske rim par hota hai!
- **Sahi:** Ring ka CM uske **centre par (khali hawa mein)** hota hai!

### Galti 2: Boat-walk problem mein person ka displacement wrt ground ko poora L le lena
- **Galat:** 60(6) = 120 x => x = 3 m!
- **Sahi:** Boat bhi peeche x khisak gayi, toh ground ke respect mein person sirf **(L - x)** aage gaya => **x = m_p L / (m_p + m_b) = 2 m**!

### Galti 3: Internal explosion ke baad CM ka path badalta hua maan lena
- **Galat:** Bomb phat gaya toh ab CM kahin aur girega!
- **Sahi:** Internal forces CM ka acceleration bilkul nahi badal sakti — jab tak koi tukda zameen na chhoo le, CM wahi original parabola follow karta hai!

---

## Quick Recap

- **CM position:** r_cm = (Σ mᵢ rᵢ) / M; always closer to the heavier mass (m₁ r₁ = m₂ r₂).
- **CM motion:** P_total = M v_cm; **M a_cm = F_ext**.
- **If F_ext = 0 and initially at rest:** **Σ mᵢ Δxᵢ = 0** (boat shift x = m L / (m + M)).

---

## Practice Questions

### Question 1
Find the centre of mass of two particles of masses 3 kg and 5 kg located at x = 2 m and x = 10 m respectively.

**Solution:**
x_cm = (3(2) + 5(10)) / (3 + 5) = (6 + 50) / 8 = 56 / 8 = **7 m**.

Jaanch:
- Jaanch: Distances from CM: 3(5) = 15 = 5(3) ✅

---

### Question 2
In a carbon monoxide (CO) molecule, the carbon atom (mass 12 u) and oxygen atom (mass 16 u) are separated by 1.12 × 10⁻¹⁰ m. Find the distance of the CM from the carbon atom.

**Solution:**
r_C = m_O d / (m_C + m_O) = (16 / 28) × 1.12 × 10⁻¹⁰ = (4 / 7) × 1.12 × 10⁻¹⁰ = **0.64 × 10⁻¹⁰ m**.

Jaanch:
- Jaanch: Closer to heavier oxygen (0.48 × 10⁻¹⁰ m from O): 12(0.64) = 7.68 = 16(0.48) ✅

---

### Question 3
Two blocks of masses 2 kg and 3 kg move along the x-axis with velocities +10 m/s and -5 m/s respectively. Find the velocity of their centre of mass.

**Solution:**
v_cm = (2(10) + 3(-5)) / (2 + 3) = (20 - 15) / 5 = **+1 m/s**.

Jaanch:
- Jaanch: Total momentum = +5 kg m/s; total mass = 5 kg => 5/5 = +1 m/s ✅

---

### Question 4
Two masses 4 kg and 6 kg are connected by a light string over a smooth pulley (Atwood machine, g = 10 m/s²). Find the magnitude of the downward acceleration of their centre of mass!

**Solution:**
- Individual acceleration a = (6 - 4)(10) / 10 = 2 m/s² (6 kg down: +2; 4 kg up: -2).
- a_cm = (6(+2) + 4(-2)) / (6 + 4) = (12 - 8) / 10 = **0.4 m/s² downward**.

Jaanch:
- Jaanch: Shortcut: a_cm = [(m₂ - m₁)/(m₁ + m₂)]² g = (2/10)² × 10 = 0.04 × 10 = 0.4 m/s² ✅

---

### Question 5
Four particles of masses 1 kg, 2 kg, 3 kg, and 4 kg are placed at the corners of a square of side 1 m: (0,0), (1,0), (1,1), and (0,1). Find the coordinates of their CM.

**Solution:**
Total mass M = 10 kg.
- x_cm = [1(0) + 2(1) + 3(1) + 4(0)] / 10 = 5 / 10 = **0.5 m**.
- y_cm = [1(0) + 2(0) + 3(1) + 4(1)] / 10 = 7 / 10 = **0.7 m**.

Jaanch:
- Jaanch: Top row has 7 kg vs bottom 3 kg => y_cm = 0.7 m; left and right columns both have 5 kg => x_cm = 0.5 m ✅

---

### Question 6
A 50 kg boy stands at one end of a 150 kg raft of length 8 m floating on still water. If the boy walks to the other end, how far does the raft shift?

**Solution:**
x = m L / (m + M) = (50 × 8) / (50 + 150) = 400 / 200 = **2 m** (opposite to the boy).

Jaanch:
- Jaanch: Boy moves +6 m, raft moves -2 m => 50(6) + 150(-2) = 0 ✅

---

### Question 7
Two particles of masses 2 kg and 4 kg attract each other mutually (no external force) and start moving from rest. At a certain instant, the 2 kg particle has speed 6 m/s. Find the speed of the 4 kg particle at that instant.

**Solution:**
v_cm = 0 => m₁ v₁ + m₂ v₂ = 0 => 2(6) + 4 v₂ = 0 => **v₂ = -3 m/s** (speed **3 m/s** opposite).

Jaanch:
- Jaanch: 2 × 6 = 4 × 3 = 12 ✅

---

### Question 8
A uniform square plate of side 2 m has its CM at (1, 1). A point mass equal to the mass of the plate is stuck at the corner (2, 2). Find the new CM.

**Solution:**
Let mass of plate = m at (1, 1), point mass = m at (2, 2):
x_cm = (1 + 2) / 2 = **1.5 m**; y_cm = (1 + 2) / 2 = **1.5 m**.

Jaanch:
- Jaanch: Equal masses => exact midpoint of (1,1) and (2,2) is (1.5, 1.5) ✅

---

### Question 9
A shell fired with range 100 m explodes at its highest point into two equal halves. One half retraces its exact path back to the launch point (x₁ = 0). Where does the second half land?

**Solution:**
x_cm = 100 = (0 + x₂) / 2 => **x₂ = 200 m** from the launch point!

Jaanch:
- Jaanch: Midpoint of 0 and 200 is 100 m = original range ✅

---

### Question 10
A 1 kg particle at (0, 0) moves with a₁ = 4 î m/s² and a 3 kg particle at (2, 0) moves with a₂ = 4 ĵ m/s². Find the magnitude of a_cm.

**Solution:**
a_cm = [1(4 î) + 3(4 ĵ)] / 4 = î + 3 ĵ m/s².
|a_cm| = √(1² + 3²) = **√10 ≈ 3.16 m/s²**.

Jaanch:
- Jaanch: (4î + 12ĵ) / 4 = î + 3ĵ => √10 ✅

---

### Question 11
State whether the following statements are True or False:
(a) The centre of mass of a body must always lie inside the solid material of the body.
(b) Internal forces can change the kinetic energy of a system, but cannot change the velocity of its centre of mass.

**Solution:**
- (a) **False** ❌ — Ring ya hollow sphere ka CM khali space mein hota hai.
- (b) **True** ✅ — Bomb explosion mein internal chemical forces KE bahut badha deti hain, par v_cm bilkul nahi badalta!

Jaanch:
- Jaanch: Internal forces cancel in ΣF = M a_cm, yet can do non-zero internal work ✅

---

### Question 12
Two identical particles move at 6 m/s East and 8 m/s North respectively. Find the speed of their centre of mass.

**Solution:**
v_cm = (6 î + 8 ĵ) / 2 = 3 î + 4 ĵ m/s.
|v_cm| = √(3² + 4²) = **5 m/s**.

Jaanch:
- Jaanch: 3-4-5 right triangle ✅

---

Centre of Mass ka foundation ab bilkul pakka hai!

**Agle topic mein:** Cheezon ko ghumane wala force (**Torque**), **Cross Product**, aur **Angular Momentum Conservation** — chalo padhte hain [Torque, Angular Momentum & Conservation](system-of-particles-and-rotational-motion-part2.md)!
