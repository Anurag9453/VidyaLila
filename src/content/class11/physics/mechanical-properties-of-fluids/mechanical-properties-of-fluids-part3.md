> **Class:** 11 | **Subject:** Physics | **Chapter 9:** Mechanical Properties of Fluids (Part 3)

# Viscosity, Stokes' Law, Terminal Velocity & Reynolds Number

> **Pichle topic se:** [Bernoulli's Principle](mechanical-properties-of-fluids-part2.md) mein humne "ideal" (zero-friction) fluid maana tha. Par asli duniya mein paani tezi se behta hai aur **shahad (honey)** bahut dheere — kyunki fluid ki layers ke beech internal friction hota hai, jise **Viscosity** kehte hain!

---

## Lilavati ka Oil-Refinery & Raindrop Lab

Lilavati ek petroleum-refinery lab chemist hai. Usne ek glass tube mein bhare glycerine ke andar do steel balls (radius r aur 2r) girayi:
- Shuru mein balls accelerate hui, par jaldi hi upward viscous drag + buoyancy ne weight ko balance kar diya aur balls ek **constant Terminal Velocity (v_T)** se girne lagi!
- Aur kamaal ki baat: 2r radius wali ball r radius wali ball se **4 guna (2²)** zyada terminal speed se giri!

Isi physics ki wajah se baarish ki boondein aasman se goli ki tarah nahi, balki halki terminal speed se gir kar humein chot nahi pahunchati!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Viscosity (η) | Fluid ki layers ke beech relative motion ka virodh karne wala internal friction: **F = - η A (dv / dx)** |
| SI Unit of Viscosity | **Pa s** (= N s m⁻² = kg m⁻¹ s⁻¹ = **Poiseuille**); CGS unit **1 Poise = 0.1 Pa s** |
| Stokes' Law | Radius r ke smooth sphere par speed v se chalte waqt viscous drag: **F = 6 π η r v** |
| Terminal Velocity (v_T) | Woh constant maximum speed jab Weight = Buoyancy + Viscous Drag: **v_T = 2 r² (ρ - σ) g / (9 η)** |
| Reynolds Number (R_e) | Flow laminar hai ya turbulent batane wala dimensionless number: **R_e = ρ v D / η** |

---

## 1. Newton's Law of Viscosity & Temperature Effect

Do parallel fluid layers (area A, velocity gradient dv/dx) ke beech viscous drag:
```
  F = η A (dv / dx)     (dimension of η: [M L⁻¹ T⁻¹])
```
**Super Important Temperature Contrast:**
- **Liquids mein:** Temperature badhane par intermolecular cohesion kam hoti hai => **Viscosity DECREASES** (garam tel/shahad patla ho kar tez behta hai!).
- **Gases mein:** Temperature badhane par molecules zyada tez takrate hain (momentum transfer badhta hai) => **Viscosity INCREASES**!

---

## 2. Stokes' Law & Terminal Velocity Derivation

Density **ρ** aur radius **r** ka sphere density **σ** aur viscosity **η** wale fluid mein gir raha hai:
- Downward Weight: **W = (4/3) π r³ ρ g**
- Upward Buoyancy: **F_B = (4/3) π r³ σ g**
- Upward Viscous Drag (Stokes' Law): **F_v = 6 π η r v**

Terminal velocity **v_T** par net force = 0 (W = F_B + F_v):
6 π η r v_T = (4/3) π r³ (ρ - σ) g  =>
```
  v_T = 2 r² (ρ - σ) g / (9 η)      ===>      v_T ∝ r² !
```
*(Agar sphere ki density fluid se kam ho, ρ < σ — jaise paani mein air bubble — toh v_T negative aata hai, matlab bubble **upar** uthta hai!)*

---

## 3. Reynolds Number (R_e)

Diameter **D** wale pipe mein speed **v** se behte fluid ke liye:
```
  R_e = ρ v D / η   (Dimensionless = Inertial Force / Viscous Force!)
```
- **R_e < 1000:** **Laminar (Streamline)** flow
- **1000 < R_e < 2000:** Unsteady / transitional flow
- **R_e > 2000:** **Turbulent** flow

---

## Solved Examples

### Example 1: Pulling a Plate Over an Oil Film

A flat square metal plate of side 10 cm (area 0.01 m²) slides over a 0.5 mm (5 × 10⁻⁴ m) thick layer of oil (η = 0.2 Pa s) at a constant speed of 0.2 m/s. Find the horizontal force required.

**Solution:**
F = η A (v / Δx) = 0.2 × 0.01 × (0.2 / (5 × 10⁻⁴)) = 0.002 × 400 = **0.8 N**.

Jaanch:
- Jaanch: Velocity gradient = 0.2 / 0.0005 = 400 s⁻¹; 0.2 × 0.01 × 400 = 0.8 N ✅

---

### Example 2: Coalescing Raindrops (8 Small Drops -> 1 Big Drop!)

Eight identical spherical raindrops, each falling through air with a terminal velocity of 5 cm/s, coalesce (merge) to form a single large spherical drop. Find the terminal velocity of the large drop!

**Solution:**
Volume conserved: (4/3) π R³ = 8 × (4/3) π r³ => **R = 2 r**!
Since **v_T ∝ r²**:
v_large = (R / r)² × v_small = 2² × 5 = **20 cm/s**!
*(General shortcut: N identical drops merge => **R = N^(1/3) r** => **v_large = N^(2/3) v_small**!)*

Jaanch:
- Jaanch: 8^(2/3) = 2² = 4; 4 × 5 = 20 cm/s ✅

---

### Example 3: Terminal Velocity of a Steel Ball in Glycerine

A steel ball of radius 2 mm (2 × 10⁻³ m) and density 8000 kg/m³ falls through glycerine of density 1250 kg/m³ and viscosity η = 1.5 Pa s (g = 10 m/s²). Find its terminal velocity.

**Solution:**
v_T = 2 r² (ρ - σ) g / (9 η)
= 2 (4 × 10⁻⁶) (8000 - 1250) (10) / (9 × 1.5)
= (8 × 10⁻⁵ × 6750) / 13.5 = 0.54 / 13.5 = **0.04 m/s (4 cm/s)**.

Jaanch:
- Jaanch: 6750 / 13.5 = 500; 8 × 10⁻⁵ × 500 = 0.04 m/s ✅

---

### Example 4: Checking Laminar vs Turbulent Flow via Reynolds Number

Water (ρ = 1000 kg/m³, η = 10⁻³ Pa s) flows through a 1 cm (0.01 m) diameter tap pipe at 0.05 m/s. Find the Reynolds number and state whether the flow is laminar or turbulent.

**Solution:**
R_e = ρ v D / η = (1000 × 0.05 × 0.01) / 10⁻³ = 0.5 / 10⁻³ = **500**.
Since R_e = 500 < 1000, the flow is **Laminar (Streamline)**!

Jaanch:
- Jaanch: 1000 × 0.0005 / 0.001 = 500 < 1000 ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Gases ki viscosity ko temperature badhne par ghatta hua maan lena
- **Galat:** Garam hone par sabhi fluids patle (kam viscous) ho jate hain!
- **Sahi:** **Liquids** ki viscosity garam hone par **ghat-ti** hai, par **Gases** ki viscosity garam hone par **BADHTI** hai!

### Galti 2: Terminal velocity ko radius r ke linearly proportional (v_T ∝ r) maan lena
- **Galat:** Radius double hua toh terminal speed double hogi!
- **Sahi:** **v_T ∝ r²**! Radius double hone par terminal speed **4×** ho jati hai!

### Galti 3: Poise aur Pa s (SI unit) ko barabar maan lena
- **Galat:** 1 Poise = 1 Pa s!
- **Sahi:** **1 Pa s = 10 Poise** (yani **1 Poise = 0.1 Pa s**)!

---

## Quick Recap

- **Viscosity:** F = η A (dv/dx); 1 Pa s = 10 Poise; Temp ↑ => η_liquid ↓, η_gas ↑.
- **Stokes' Law:** F = 6 π η r v; **Terminal Velocity:** v_T = 2 r² (ρ - σ) g / (9 η) ∝ r².
- **N drops merge:** v_big = N^(2/3) v_small.
- **Reynolds Number:** R_e = ρ v D / η (< 1000 laminar, > 2000 turbulent).

---

## Practice Questions

*(Take g = 10 m/s² unless stated otherwise.)*

### Question 1
Convert a viscosity of 8 Poise into SI units (Pa s).

**Solution:**
1 Poise = 0.1 Pa s => 8 Poise = **0.8 Pa s**.

Jaanch:
- Jaanch: 8 / 10 = 0.8 Pa s ✅

---

### Question 2
A metal plate of area 0.05 m² rests on a 1 mm (10⁻³ m) oil film of viscosity 0.4 Pa s. What horizontal force is needed to move it at 0.5 m/s?

**Solution:**
F = 0.4 × 0.05 × (0.5 / 10⁻³) = 0.02 × 500 = **10 N**.

Jaanch:
- Jaanch: 0.02 × 500 = 10 N ✅

---

### Question 3
27 identical raindrops, each falling at terminal speed 2 cm/s, merge into one large drop. Find the terminal speed of the large drop.

**Solution:**
v_big = N^(2/3) v_small = 27^(2/3) × 2 = 3² × 2 = 9 × 2 = **18 cm/s**.

Jaanch:
- Jaanch: R = 3 r => v_T ∝ r² gives 9× ✅

---

### Question 4
Two spheres of the same material with radii in the ratio 1 : 3 fall through the same viscous oil. Find the ratio of their terminal velocities v₁ / v₂.

**Solution:**
v_T ∝ r² => v₁ / v₂ = (1 / 3)² = **1 : 9**.

Jaanch:
- Jaanch: 1² : 3² = 1 : 9 ✅

---

### Question 5
A sphere of radius 1 mm falls through air (η = 2 × 10⁻⁵ Pa s) at 5 m/s. Find the viscous drag force acting on it (take π = 3.14).

**Solution:**
F = 6 π η r v = 6(3.14)(2 × 10⁻⁵)(10⁻³)(5) = 60(3.14) × 10⁻⁸ ≈ **1.88 × 10⁻⁶ N**.

Jaanch:
- Jaanch: 6 × 2 × 5 = 60; 60 × 3.14 = 188.4 × 10⁻⁸ = 1.884 × 10⁻⁶ N ✅

---

### Question 6
Find the maximum speed of water (ρ = 1000 kg/m³, η = 10⁻³ Pa s) in a 2 cm diameter pipe for the flow to remain strictly laminar (R_e ≤ 1000).

**Solution:**
v_max = R_e η / (ρ D) = (1000 × 10⁻³) / (1000 × 0.02) = 1 / 20 = **0.05 m/s (5 cm/s)**.

Jaanch:
- Jaanch: (1000 × 0.05 × 0.02) / 10⁻³ = 1000 ✅

---

### Question 7
An air bubble (ρ ≈ 0) of radius 1 mm rises through a liquid of density 900 kg/m³ and viscosity 0.2 Pa s. Find its upward terminal speed.

**Solution:**
|v_T| = 2 (10⁻⁶) (900) (10) / (9 × 0.2) = (1.8 × 10⁻²) / 1.8 = **0.01 m/s (1 cm/s) upward**.

Jaanch:
- Jaanch: 2 × 900 × 10 / 1.8 = 10,000 × 10⁻⁶ = 0.01 m/s ✅

---

### Question 8
When a ball falls through a viscous fluid from rest, what is its acceleration at the instant it reaches terminal velocity?

**Solution:**
At terminal velocity, speed is constant => **acceleration a = 0 m/s²**! (Net force = W - F_B - F_v = 0.)

Jaanch:
- Jaanch: Constant velocity means zero acceleration ✅

---

### Question 9
Find the rate of heat generation (viscous power dissipated) when a sphere of radius r moves at terminal velocity v_T through a viscous fluid (ignoring buoyancy, so F_drag = m g).

**Solution:**
P = F_drag × v_T = 6 π η r v_T² = **m g v_T** (since v_T ∝ r² and F ∝ r³, P ∝ r⁵!).

Jaanch:
- Jaanch: Gravity's power mg v_T turns completely into viscous heat since KE is constant ✅

---

### Question 10
A river 5 m deep flows at 2 m/s at the surface (and 0 at the riverbed). Assuming a linear velocity gradient and η = 10⁻³ Pa s, find the shearing stress between horizontal layers of water.

**Solution:**
Stress = F / A = η (v / h) = 10⁻³ × (2 / 5) = **4 × 10⁻⁴ Pa**.

Jaanch:
- Jaanch: Velocity gradient = 0.4 s⁻¹; 0.4 × 10⁻³ = 4 × 10⁻⁴ Pa ✅

---

### Question 11
State whether the following statements are True or False:
(a) Heating a gas increases its viscosity.
(b) Reynolds number has SI units of N s m⁻².

**Solution:**
- (a) **True** ✅ — Faster molecular collisions increase momentum transfer between gas layers.
- (b) **False** ❌ — Reynolds number R_e is a **dimensionless** pure number!

Jaanch:
- Jaanch: Verified from Sections 1 and 3 ✅

---

### Question 12
A ball of density 4000 kg/m³ falls in oil of density 1000 kg/m³ with terminal speed 6 cm/s. What would be the terminal speed of an identical-radius ball of density 7000 kg/m³ in the same oil?

**Solution:**
v_T ∝ (ρ - σ) => v₂ / 6 = (7000 - 1000) / (4000 - 1000) = 6000 / 3000 = 2 => **v₂ = 12 cm/s**.

Jaanch:
- Jaanch: Effective density doubled (3000 -> 6000) => v_T doubled (6 -> 12 cm/s) ✅

---

Viscosity aur Terminal Velocity ab tumhare liye bilkul clear hain!

**Agle topic mein:** Baarish ki boondein gol kyun hoti hain, machhar paani par kaise chal leta hai, aur ped ki jadon se paani upar kaise chadhta hai — chalo padhte hain [Surface Tension, Drops, Bubbles & Capillary Rise](mechanical-properties-of-fluids-part4.md)!
