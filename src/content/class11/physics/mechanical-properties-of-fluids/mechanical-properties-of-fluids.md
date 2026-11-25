> **Class:** 11 | **Subject:** Physics | **Chapter 9:** Mechanical Properties of Fluids

# Fluid Pressure, Pascal's Law, Depth Variation & Hydraulic Machines

> **Pichle chapter aur pehle ki padhai se:** [Mechanical Properties of Solids](../mechanical-properties-of-solids/mechanical-properties-of-solids-part5.md) mein humne dekha ki solids apna shape bacha kar rakhte hain, jabki fluids (liquids aur gases) ka shear modulus 0 hota hai — isliye woh beh sakte hain! Fluid pressure aur buoyancy ka basic intro tum [Class 9 Pressure and Fluids](../../../class9/physics/pressure-and-fluids/pressure-and-fluids.md) mein dekh chuke ho — yahan hum Pascal's Law, Hydraulic Lifts, Gauge Pressure, aur U-tube Manometers ka exact physics padhenge!

---

## Jugal ka Car-Service Hydraulic Lift

Jugal ek auto-service workshop mein hydraulic lift chalata hai. Ek chhote piston (area **10 cm²**) par sirf **200 N** ka force lagane se doosre bade piston (area **1000 cm²**) par **20,000 N (2 tonne car!)** aasani se upar uth jati hai!

Yeh koi energy ka jaadu nahi (chhota piston 100 cm neeche jata hai tab car 1 cm upar uthti hai — work conserved hai!) — balki **Pascal's Law** ka kamaal hai: band (confined) liquid mein lagaya gaya pressure har disha mein **bina ghate** fail jata hai!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Fluid Pressure (P) | Normal force per unit area: **P = F_⊥ / A** (scalar! SI unit: **Pascal**, 1 Pa = 1 N/m²; 1 atm = 1.013 × 10⁵ Pa = 1.013 bar) |
| Pascal's Law | Confined incompressible liquid par lagaya gaya extra pressure har point aur container ki deewaron par **equally undiminished** transmit hota hai |
| Hydrostatic Pressure | Depth h par total (absolute) pressure: **P = P_atm + ρ g h** (sirf depth h aur density ρ par depend, container ke shape par NAHI!) |
| Gauge Pressure (P_g) | Atmospheric pressure se upar ka extra pressure: **P_g = P - P_atm = ρ g h** |
| Barometer & Manometer | Barometer (Torricelli): atmospheric pressure (76 cm Hg) naapta hai; Open-tube Manometer: gauge pressure naapta hai |

---

## 1. Variation of Pressure with Depth (P = P_atm + ρ g h)

Density **ρ** ke static liquid mein cross-section **A** aur height **h** ke vertical liquid column ka equilibrium:
P A - P_atm A = (A h ρ) g  =>
```
  P = P_atm + ρ g h       |       Gauge Pressure:   P_g = ρ g h
```
- **Hydrostatic Paradox:** Teen alag shape ke bartanon (chauda, patla, tirchha) mein agar **same liquid** aur **same vertical height h** ho, toh bottom par **pressure exact SAME** hota hai!
- **Equal-Level Rule:** Connected static liquid mein ek hi horizontal level par har point ka pressure **SAME** hota hai!

---

## 2. Hydraulic Lift & Hydraulic Brakes (Pascal's Law)

Chhote piston (area A₁, force F₁) aur bade piston (area A₂, force F₂) par pressure equal:
```
  F₁ / A₁ = F₂ / A₂   ===>   F₂ = F₁ (A₂ / A₁)
```
Force **A₂ / A₁** guna multiply ho jata hai (Mechanical Advantage = A₂ / A₁), par distance **d₂ = d₁ (A₁ / A₂)** kam ho jata hai taaki **W₁ = F₁ d₁ = F₂ d₂ = W₂** (Energy Conservation)!

---

## Solved Examples

### Example 1: Jugal's Hydraulic Car Lift

In a hydraulic lift, the small piston has radius 2 cm and the large piston has radius 20 cm. What force must be applied to the small piston to lift a 2000 kg car (g = 10 m/s²)?

**Solution:**
F₂ = 2000 × 10 = 20,000 N.
A₂ / A₁ = (r₂ / r₁)² = (20 / 2)² = 10² = **100**.
F₁ = F₂ / 100 = 20,000 / 100 = **200 N**.

Jaanch:
- Jaanch: Pressure on both sides = 200 / (π × 4 cm²) = 20,000 / (π × 400 cm²) ✅

---

### Example 2: Absolute & Gauge Pressure on a Deep-Sea Diver

A diver is 20 m below the surface of a freshwater lake (ρ = 1000 kg/m³, g = 10 m/s², P_atm = 1.0 × 10⁵ Pa). Find the gauge pressure and absolute pressure on the diver.

**Solution:**
- Gauge pressure: P_g = ρ g h = 1000 × 10 × 20 = **2.0 × 10⁵ Pa (2 atm)**.
- Absolute pressure: P = P_atm + P_g = 1.0 × 10⁵ + 2.0 × 10⁵ = **3.0 × 10⁵ Pa (3 atm)**.

Jaanch:
- Jaanch: Every 10 m of water adds ~1 atm of pressure => 20 m adds 2 atm => total 3 atm ✅

---

### Example 3: U-Tube with Two Immiscible Liquids (Water & Oil)

A U-tube contains water (ρ_w = 1000 kg/m³) in the right arm and an unknown oil in the left arm. Above the common water–oil interface, the water column is 12 cm high and the oil column is 15 cm high. Find the density of the oil.

**Solution:**
Equating pressure at the horizontal level of the interface:
P_atm + ρ_oil g h_oil = P_atm + ρ_w g h_w
ρ_oil × 15 = 1000 × 12 => **ρ_oil = 12,000 / 15 = 800 kg/m³**.

Jaanch:
- Jaanch: Lighter oil (800 < 1000) needs a taller column (15 cm > 12 cm) to balance water ✅

---

### Example 4: Height of a Water Barometer vs Mercury Barometer

Mercury (ρ_Hg = 13.6 × 10³ kg/m³) stands 76 cm high in a barometer at 1 atm. How tall would a water barometer (ρ_w = 1.0 × 10³ kg/m³) have to be to measure 1 atm?

**Solution:**
ρ_w g h_w = ρ_Hg g h_Hg => h_w = (13.6 / 1.0) × 0.76 m = **10.34 m**!
(That's why mercury is used in barometers — a 10.3 m glass tube won't fit in a room!)

Jaanch:
- Jaanch: 1000 × 9.8 × 10.34 ≈ 1.013 × 10⁵ Pa = 1 atm ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Pressure ko Vector quantity samajh lena
- **Galat:** Force vector hai toh P = F/A bhi vector hoga!
- **Sahi:** Static fluid mein ek point par pressure sabhi directions mein **barabar (isotropic)** lagta hai — iski koi ek fixed direction nahi hoti, isliye **Pressure SCALAR** hai!

### Galti 2: Hydraulic lift mein radius ratio r₂ / r₁ le lena (square bhool jana!)
- **Galat:** Radius 10× hai toh force 10× hoga!
- **Sahi:** Area = π r², isliye force multiplication **(r₂ / r₁)² = 10² = 100×** hota hai!

### Galti 3: Gauge pressure aur Absolute pressure ko mix kar dena
- **Galat:** 20 m gehrai par total pressure sirf ρgh = 2 atm hai!
- **Sahi:** **Gauge pressure** = ρgh = 2 atm; **Absolute (total) pressure** = P_atm + ρgh = **3 atm**!

---

## Quick Recap

- **Pressure:** P = F_⊥ / A (scalar, Pa); 1 atm = 1.013 × 10⁵ Pa = 76 cm Hg = 10.34 m water.
- **Depth:** P = P_atm + ρ g h; **Gauge pressure** = ρ g h (independent of vessel shape!).
- **Pascal's Law (Hydraulic Lift):** F₂ / F₁ = A₂ / A₁ = (r₂ / r₁)².
- **U-tube equilibrium:** ρ₁ h₁ = ρ₂ h₂ above the common interface!

---

## Practice Questions

*(Take g = 10 m/s², ρ_water = 1000 kg/m³, P_atm = 1.0 × 10⁵ Pa unless stated otherwise.)*

### Question 1
A 60 kg person stands on two shoes whose total contact area with the floor is 0.03 m². Find the pressure exerted on the floor.

**Solution:**
P = (60 × 10) / 0.03 = 600 / 0.03 = **2 × 10⁴ Pa (20 kPa)**.

Jaanch:
- Jaanch: 20,000 × 0.03 = 600 N ✅

---

### Question 2
In a hydraulic press, the diameters of the small and large pistons are 4 cm and 20 cm respectively. Find the load lifted by the large piston when a force of 50 N is applied to the small piston.

**Solution:**
F₂ = F₁ (d₂ / d₁)² = 50 × (20 / 4)² = 50 × 25 = **1250 N**.

Jaanch:
- Jaanch: Diameter 5× => Area 25× => Force 25× ✅

---

### Question 3
Find the gauge pressure and absolute pressure at the bottom of a 5 m deep swimming pool filled with water.

**Solution:**
- Gauge P_g = 1000 × 10 × 5 = **5 × 10⁴ Pa (0.5 atm)**.
- Absolute P = 1.0 × 10⁵ + 0.5 × 10⁵ = **1.5 × 10⁵ Pa (1.5 atm)**.

Jaanch:
- Jaanch: 5 m is half of 10 m => +0.5 atm ✅

---

### Question 4
A U-tube has mercury (ρ = 13,600 kg/m³) in the bottom. Water is poured into one arm to a height of 27.2 cm. How high does the mercury rise in the other arm above the water–mercury interface?

**Solution:**
ρ_Hg h_Hg = ρ_w h_w => 13,600 × h_Hg = 1000 × 27.2 => **h_Hg = 27.2 / 13.6 = 2.0 cm**.

Jaanch:
- Jaanch: 13.6 × 2 = 27.2 cm ✅

---

### Question 5
A dam wall holds back water of depth H = 10 m and width W = 20 m. Since water gauge pressure increases linearly from 0 at the surface to ρ g H at the bottom (average pressure = (1/2) ρ g H), find the total horizontal thrust exerted by the water on the dam wall!

**Solution:**
P_avg = (1/2) ρ g H = (1/2)(1000)(10)(10) = 5 × 10⁴ Pa.
Area of dam wall A = H × W = 10 × 20 = 200 m².
Total thrust F = P_avg × A = (5 × 10⁴)(200) = **1.0 × 10⁷ N (10 MN)**.

Jaanch:
- Jaanch: F = (1/2) ρ g W H² = 0.5(1000)(10)(20)(100) = 10⁷ N ✅

---

### Question 6
A submarine window of area 0.05 m² is at a depth of 500 m in seawater (ρ = 1030 kg/m³). If the interior of the submarine is kept at atmospheric pressure, find the net inward force on the window.

**Solution:**
Net pressure difference ΔP = P_inside_out = Gauge pressure = ρ g h = 1030 × 10 × 500 = 5.15 × 10⁶ Pa.
Net force F = ΔP × A = (5.15 × 10⁶)(0.05) = **2.575 × 10⁵ N**.

Jaanch:
- Jaanch: P_atm cancels between inside and outside, leaving only gauge pressure ρgh ✅

---

### Question 7
In a hydraulic lift (A₂ / A₁ = 50), if the small piston is pushed down by 25 cm, by how many cm does the large piston rise?

**Solution:**
Incompressible liquid volume conserved: A₁ d₁ = A₂ d₂ => d₂ = d₁ / 50 = 25 / 50 = **0.5 cm**.

Jaanch:
- Jaanch: Force ×50, distance ÷50 => Work conserved ✅

---

### Question 8
An open-tube mercury manometer connected to a gas cylinder shows the mercury level in the open arm is 15 cm higher than in the gas arm. Express the absolute pressure of the gas in cm of Hg (taking P_atm = 76 cm Hg).

**Solution:**
P_gas = P_atm + h = 76 + 15 = **91 cm Hg**.

Jaanch:
- Jaanch: Gas pushes mercury up in the open arm => P_gas > P_atm ✅

---

### Question 9
A beaker contains a 10 cm layer of oil (ρ = 800 kg/m³) floating on a 20 cm layer of water (ρ = 1000 kg/m³). Find the total gauge pressure at the bottom of the beaker.

**Solution:**
P_g = ρ_oil g h_oil + ρ_w g h_w = (800)(10)(0.10) + (1000)(10)(0.20) = 800 + 2000 = **2800 Pa**.

Jaanch:
- Jaanch: Pressures of stacked immiscible layers add directly: 800 + 2000 = 2800 Pa ✅

---

### Question 10
A wooden block of volume 0.02 m³ and density 600 kg/m³ floats in water. What fraction of its volume is submerged?

**Solution:**
Buoyant force = weight => ρ_w V_sub g = ρ_block V g => V_sub / V = ρ_block / ρ_w = 600 / 1000 = **0.6 (60%)**.

Jaanch:
- Jaanch: 60% submerged (0.012 m³) displaces 12 kg of water = mass of block ✅

---

### Question 11
State whether the following statements are True or False:
(a) In a hydraulic lift, both force and energy are multiplied by the ratio A₂ / A₁.
(b) At the same depth in a static lake, the pressure is the same in all directions.

**Solution:**
- (a) **False** ❌ — Force is multiplied by A₂ / A₁, par **Work/Energy hamesha conserved** rehta hai!
- (b) **True** ✅ — Fluid pressure is isotropic (same in all directions).

Jaanch:
- Jaanch: Core principles of hydrostatics and Pascal's Law ✅

---

### Question 12
At what depth in a freshwater lake is the absolute pressure equal to 4 atm (P_atm = 1.0 × 10⁵ Pa)?

**Solution:**
Gauge pressure = 4 - 1 = 3 atm = 3 × 10⁵ Pa = ρ g h => 1000(10) h = 3 × 10⁵ => **h = 30 m**.

Jaanch:
- Jaanch: 1 atm surface + 3 atm (30 m water) = 4 atm ✅

---

Hydrostatics aur Pascal's Law ab tumhare liye bilkul clear hain!

**Agle topic mein:** Ab fluids ko behne dete hain! **Equation of Continuity** aur **Bernoulli's Principle** (airplane wings kaise udte hain aur spin ball kyun swing hoti hai!) — chalo padhte hain [Streamline Flow, Continuity & Bernoulli's Principle](mechanical-properties-of-fluids-part2.md)!
