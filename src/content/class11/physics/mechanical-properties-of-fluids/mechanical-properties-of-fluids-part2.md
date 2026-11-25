> **Class:** 11 | **Subject:** Physics | **Chapter 9:** Mechanical Properties of Fluids (Part 2)

# Streamline Flow, Continuity & Bernoulli's Principle

> **Pichle topic se:** [Fluid Pressure & Pascal's Law](mechanical-properties-of-fluids.md) mein humne ruke hue fluids (hydrostatics) padhe. Ab hum **behte hue fluids (Fluid Dynamics)** dekhenge — jahan pipe patli hone par paani tez bhagta hai (**Continuity**) aur tez behne wali hawa ka pressure kam ho jata hai (**Bernoulli's Principle**)!

---

## Kripa ka Aircraft-Wing & Garden-Hose Test

Kripa ek aerodynamics engineer hai. Tumne khud dekha hoga: garden hose ke munh par angutha rakh kar area aadha karne par paani ki speed **double** ho jati hai!

Aur jab hawa aircraft ke curved wing ke upar se **zyada tez** aur neeche se **dheemi** behti hai, toh upar pressure **kam** aur neeche pressure **zyada** ho jata hai — yahi pressure difference 400-tonne Boeing jumbo jet ko aasman mein utha leta hai! Chalo Continuity aur Bernoulli ke exact formulas derive karte hain.

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Streamline (Steady) Flow | Har point par fluid ki velocity time ke saath constant rahe; do streamlines kabhi ek doosre ko **intersect nahi karti** |
| Turbulent Flow | High speed par eddies/whirlpools wala chaotic flow |
| Equation of Continuity | Incompressible fluid mein mass conservation: **A₁ v₁ = A₂ v₂ = Q** (volume flow rate, m³/s) |
| Bernoulli's Principle | Ideal (non-viscous, incompressible, steady) fluid mein energy conservation per unit volume: **P + (1/2) ρ v² + ρ g h = constant** |
| Torricelli's Law | Tank mein surface se depth h neeche chhed se nikalne wale liquid ki speed: **v = √(2 g h)** |
| Magnus Effect | Ghoomti (spinning) ball ke ek taraf speed badhne se pressure kam hona aur ball ka hawa mein curve (swing) hona! |

---

## 1. Equation of Continuity (Conservation of Mass)

Pipe ke chaude hisse (area A₁, speed v₁) se patle hisse (area A₂, speed v₂) mein Δt time mein same volume (aur mass) guzarta hai:
```
  A₁ v₁ = A₂ v₂ = constant (Volume Flow Rate Q in m³/s)
```
*(Patla pipe => **TEZ speed**; chauda pipe => **DHEEMI speed**!)*

---

## 2. Bernoulli's Principle (Conservation of Energy per Unit Volume!)

Ideal fluid (steady, incompressible, non-viscous) ke unit volume par Work–Energy Theorem lagane par:
Work done by pressure difference (P₁ - P₂) = Gain in KE per unit volume + Gain in PE per unit volume:
```
  P₁ + (1/2) ρ v₁² + ρ g h₁  =  P₂ + (1/2) ρ v₂² + ρ g h₂  =  constant
```
- **Horizontal pipe (h₁ = h₂):** **P + (1/2) ρ v² = constant**!
  **Golden Rule:** Jahan **speed ZYADA**, wahan **pressure KAM**!

### 4 Famous Applications:
1. **Torricelli's Law (Speed of Efflux):** Open tank mein surface se depth **h** par chhota chhed (area a << A) ho, toh P_top = P_hole = P_atm aur v_top ≈ 0 => P_atm + ρ g h = P_atm + (1/2) ρ v² => **v = √(2 g h)** (exact same as free fall from height h!).
2. **Venturimeter:** Pipe mein flow speed naapne ka device (patle throat mein speed badhti hai => pressure ghatta hai => manometer Δh se speed milti hai!).
3. **Airplane Wing Lift & Roof Blowing Off in Storms:** Tez hawa upar => kam pressure upar => upward lift!
4. **Magnus Effect:** Spin karti hui cricket/football/tennis ball ka hawa mein swing hona!

---

## Solved Examples

### Example 1: Horizontal Pipe Contraction (Continuity + Bernoulli)

Water (ρ = 1000 kg/m³) flows through a horizontal pipe whose cross-sectional area narrows from A₁ = 40 cm² to A₂ = 20 cm². If the speed in the wider section is v₁ = 2 m/s and pressure is P₁ = 1.5 × 10⁵ Pa, find v₂ and P₂ in the narrow section.

**Solution:**
- **Continuity:** A₁ v₁ = A₂ v₂ => 40(2) = 20 v₂ => **v₂ = 4 m/s**.
- **Bernoulli (horizontal, h₁ = h₂):**
  P₁ + (1/2) ρ v₁² = P₂ + (1/2) ρ v₂²
  1.5 × 10⁵ + (1/2)(1000)(4) = P₂ + (1/2)(1000)(16)
  150,000 + 2,000 = P₂ + 8,000 => **P₂ = 144,000 Pa = 1.44 × 10⁵ Pa**!

Jaanch:
- Jaanch: Narrow section mein speed badhi (2 -> 4 m/s), toh pressure ghata (150 kPa -> 144 kPa) ✅

---

### Example 2: Kripa's Airplane Wing Lift Force

Air (ρ = 1.2 kg/m³) flows past the upper surface of an airplane wing at 70 m/s and past the lower surface at 60 m/s. If the total wing area is 50 m², find the net upward lift force on the wings.

**Solution:**
ΔP = P_lower - P_upper = (1/2) ρ (v_upper² - v_lower²)
= (1/2)(1.2)(70² - 60²) = 0.6 × (4900 - 3600) = 0.6 × 1300 = **780 Pa**.
Lift Force F = ΔP × A = 780 × 50 = **39,000 N (39 kN)**.

Jaanch:
- Jaanch: 70² - 60² = (70 - 60)(70 + 60) = 10 × 130 = 1300; 0.6 × 1300 × 50 = 39,000 N ✅

---

### Example 3: Torricelli's Efflux Speed & Horizontal Range of Water Jet

A large open water tank is filled to height H = 5 m. A small hole is punched at depth h = 1.25 m below the water surface (so 3.75 m above the ground, g = 10 m/s²). Find: (a) efflux speed v, (b) horizontal distance R where the jet hits the ground.

**Solution:**
- (a) v = √(2 g h) = √(2 × 10 × 1.25) = √25 = **5 m/s**.
- (b) Time to fall remaining height (H - h) = 3.75 m: t = √(2(H - h) / g).
  Horizontal range R = v × t = √(2 g h) × √(2(H - h) / g) = **2 √( h (H - h) )**!
  R = 2 √(1.25 × 3.75) = 2 √(4.6875) ≈ **4.33 m**.
  *(Pro Tip: Range R is **MAXIMUM** when the hole is at exact midpoint **h = H / 2**, giving **R_max = H**!)*

Jaanch:
- Jaanch: Check R = 2 √(h(H-h)): when h = H/2 => R = 2 √(H²/4) = H ✅

---

### Example 4: Rising Pipe (All Three Bernoulli Terms!)

Water flows at 2 m/s through a pipe at ground level (h₁ = 0) under pressure 2.0 × 10⁵ Pa. The pipe rises to a height h₂ = 5 m while keeping the same diameter (v₂ = 2 m/s, g = 10 m/s²). Find the pressure P₂ at the upper floor.

**Solution:**
Same diameter => v₁ = v₂, so (1/2) ρ v² cancels!
P₂ = P₁ - ρ g h₂ = 2.0 × 10⁵ - (1000)(10)(5) = 2.0 × 10⁵ - 0.5 × 10⁵ = **1.5 × 10⁵ Pa**.

Jaanch:
- Jaanch: 5 m climb drops pressure by 0.5 × 10⁵ Pa ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Tez behne wale fluid mein pressure zyada maan lena
- **Galat:** Patle pipe mein paani tez bhag raha hai toh wahan pressure zyada hoga!
- **Sahi:** Bernoulli kehta hai **P + (1/2) ρ v² = const** => tez speed wale hisse mein **pressure KAM** hota hai!

### Galti 2: Torricelli's Law mein h ko ground se height le lena
- **Galat:** Tank 5 m ooncha hai aur chhed ground se 3.75 m upar hai => v = √(2 g (3.75))!
- **Sahi:** **h** hamesha **free liquid surface se neeche ki depth** hoti hai (yahan 1.25 m), ground se height nahi!

### Galti 3: Streamlines ko aapas mein intersect karta hua draw kar dena
- **Galat:** Do streamlines ek point par cross kar sakti hain.
- **Sahi:** Agar do streamlines intersect karein, toh ek hi point par fluid ki do alag directions hongi — jo steady flow mein **IMPOSSIBLE** hai!

---

## Quick Recap

- **Continuity:** A₁ v₁ = A₂ v₂ = Q (mass conservation).
- **Bernoulli:** P + (1/2) ρ v² + ρ g h = constant (energy conservation per unit volume; fast flow = low pressure!).
- **Torricelli:** v = √(2 g h); horizontal range **R = 2 √(h(H - h))** (max R = H at h = H/2!).

---

## Practice Questions

*(Take ρ_water = 1000 kg/m³, g = 10 m/s² unless stated otherwise.)*

### Question 1
Water flows at 3 m/s in a pipe of radius 4 cm. If the pipe narrows to a radius of 2 cm, find the speed of water in the narrow section.

**Solution:**
A ∝ r² => v₂ = v₁ (r₁ / r₂)² = 3 × (4 / 2)² = 3 × 4 = **12 m/s**.

Jaanch:
- Jaanch: Radius halves => area becomes 1/4 => speed becomes 4× ✅

---

### Question 2
In a horizontal pipe, water flows at 4 m/s where the pressure is 1.2 × 10⁵ Pa. Where the pipe narrows, the speed rises to 6 m/s. Find the pressure in the narrow section.

**Solution:**
P₂ = P₁ - (1/2) ρ (v₂² - v₁²) = 120,000 - 500 (36 - 16) = 120,000 - 10,000 = **1.1 × 10⁵ Pa**.

Jaanch:
- Jaanch: 500 × 20 = 10,000 Pa pressure drop ✅

---

### Question 3
A large water tank has water up to height H = 8 m. A small hole is made at depth h = 2 m below the water surface. Find the efflux speed and the horizontal range where the jet strikes the ground.

**Solution:**
- v = √(2 × 10 × 2) = √40 = **2 √10 ≈ 6.32 m/s**.
- R = 2 √(h (H - h)) = 2 √(2 × 6) = 2 √12 = **4 √3 ≈ 6.93 m**.

Jaanch:
- Jaanch: R < R_max (8 m) ✅

---

### Question 4
In Question 3 (tank height H = 8 m), at what depth h below the surface should the hole be punched to get the MAXIMUM horizontal range, and what is that maximum range?

**Solution:**
Maximum range occurs at exact midpoint **h = H / 2 = 4 m**, giving **R_max = H = 8 m**.

Jaanch:
- Jaanch: 2 √(4 × 4) = 2 × 4 = 8 m ✅

---

### Question 5
A storm wind blows horizontally at 40 m/s over a flat house roof of area 100 m² while air inside the house is still (ρ_air = 1.2 kg/m³). Find the upward aerodynamic lift force on the roof!

**Solution:**
ΔP = (1/2)(1.2)(40² - 0) = 0.6 × 1600 = 960 Pa.
F = 960 × 100 = **96,000 N (96 kN)**!

Jaanch:
- Jaanch: Huge upward lift explains why tin roofs blow off during cyclones ✅

---

### Question 6
A garden hose of cross-section 2 cm² delivers water at 5 m/s through a showerhead having 25 tiny holes, each of area 0.04 cm². Find the speed of water emerging from each tiny hole.

**Solution:**
Total exit area A₂ = 25 × 0.04 = 1.0 cm².
A₁ v₁ = A₂ v₂ => 2 × 5 = 1.0 × v₂ => **v₂ = 10 m/s**.

Jaanch:
- Jaanch: Total area halved (2 -> 1 cm²) => speed doubled (5 -> 10 m/s) ✅

---

### Question 7
In a horizontal Venturimeter, water speeds are v₁ = 1 m/s (wide) and v₂ = 5 m/s (throat). Find the pressure difference (P₁ - P₂) between the wide section and the throat.

**Solution:**
P₁ - P₂ = (1/2)(1000)(25 - 1) = 500 × 24 = **12,000 Pa (12 kPa)**.

Jaanch:
- Jaanch: 500 × 24 = 12,000 Pa ✅

---

### Question 8
Water falls vertically from a tap of cross-sectional area 1.0 cm² at initial speed 1 m/s. Find the cross-sectional area of the water stream 0.15 m below the tap!

**Solution:**
Speed after falling 0.15 m: v₂ = √(v₁² + 2 g h) = √(1 + 2(10)(0.15)) = √(1 + 3) = √4 = **2 m/s**.
By Continuity: A₂ = A₁ (v₁ / v₂) = 1.0 × (1 / 2) = **0.5 cm²** (that's why a falling stream gets narrower!).

Jaanch:
- Jaanch: Speed doubles => stream cross-section halves ✅

---

### Question 9
Two identical holes are punched in a tank of height H = 10 m, one at depth 2 m and one at depth 8 m below the water surface. Compare their horizontal ranges R₁ and R₂.

**Solution:**
R₁ = 2 √(2 × 8) = 2 √16 = **8 m**.
R₂ = 2 √(8 × 2) = 2 √16 = **8 m** (exact same range!).

Jaanch:
- Jaanch: Holes at symmetric depths h and (H - h) always give the exact same horizontal range! ✅

---

### Question 10
What is the SI unit of each term in Bernoulli's equation P + (1/2) ρ v² + ρ g h = constant?

**Solution:**
Every term has the SI unit **Pascal (Pa = N/m² = J/m³)** — i.e., **Energy per unit volume**!

Jaanch:
- Jaanch: Dimensional homogeneity: [M L⁻¹ T⁻²] for all three terms ✅

---

### Question 11
State whether the following statements are True or False:
(a) Bernoulli's equation is a statement of the conservation of linear momentum for ideal fluids.
(b) Two streamlines in a steady flow can never cross each other.

**Solution:**
- (a) **False** ❌ — Bernoulli's equation is **Conservation of Mechanical Energy** per unit volume!
- (b) **True** ✅ — Crossing would mean two velocities at one point, impossible in steady flow.

Jaanch:
- Jaanch: Verified from Sections 1 and 2 ✅

---

### Question 12
Water enters a horizontal pipe at 2 m/s and pressure 1.0 × 10⁵ Pa. If the pipe widens so that the area doubles, find the new speed and new pressure.

**Solution:**
Area doubles => v₂ = 2 / 2 = **1 m/s**.
P₂ = 100,000 + 500 (4 - 1) = 100,000 + 1,500 = **1.015 × 10⁵ Pa** (pressure rises when flow slows down!).

Jaanch:
- Jaanch: Slower flow => higher pressure ✅

---

Continuity aur Bernoulli ab tumhare pocket mein hain!

**Agle topic mein:** Asli liquids (jaise shahad aur engine oil) ideal nahi hote — unme internal friction hota hai! Chalo padhte hain [Viscosity, Stokes' Law, Terminal Velocity & Reynolds Number](mechanical-properties-of-fluids-part3.md)!
