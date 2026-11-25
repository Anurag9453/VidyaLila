# Chapter: Units and Measurements (Part 2)

> **Class:** 11 | **Subject:** Physics
> **Pichhla topic [units-and-measurements.md](units-and-measurements.md) tha** (Topic 1: Physical Quantities, SI Units, Prefixes, aur Parallax).
> **Topics covered in this file:**
> 1. Dimensions of Physical Quantities, Dimensional Formulae, Aur Dimensionless Quantities

---

# Topic 2: Dimensions of Physical Quantities Aur Dimensional Formulae

Topic 1 mein tumne dekha ki har derived unit (jaise newton, joule, pascal) asal mein 7 base units (kg, m, s, A, K, mol, cd) ki powers se banti hai.

Ab hum in base quantities ko universal symbols dete hain: Mass = **[M]**, Length = **[L]**, Time = **[T]**, Current = **[A]**, Temperature = **[K]**, Amount = **[mol]**, Luminous Intensity = **[cd]**. Kisi bhi quantity ko inki powers mein likhne ko uska **Dimensional Formula** kehte hain — yeh har physical quantity ka unique "fingerprint" hota hai!

---

## Kailash ka aerodynamics wind-tunnel chart

Kailash ek formula-car aerodynamics technician hai. Wind-tunnel sensor sheet par alag-alag engineers ne Energy ko joules mein, Torque ko N·m mein, aur Work ko kg·m²/s² mein likha tha.
Kailash ne teeno ke **dimensional formulae** check kiye:
- Work = Force × Distance = [M L T⁻²][L] = **[M L² T⁻²]**
- Kinetic Energy = (1/2) m v² = [M][L T⁻¹]² = **[M L² T⁻²]**
- Torque = Force × Lever Arm = [M L T⁻²][L] = **[M L² T⁻²]**

Kailash muskuraaya: "Units aur naam bhale alag dikhein, par in teeno ka dimensional DNA **[M L² T⁻²]** bilkul same hai!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Dimensions** | Base quantities [M], [L], [T] etc. par chadhayi gayi **powers (exponents)** | Force [M¹ L¹ T⁻²] has dimensions 1 in M, 1 in L, -2 in T |
| **Dimensional Formula** | Square brackets mein base symbols ki powers ke saath expression | Force: [M L T⁻²] |
| **Dimensional Equation** | Quantity aur uske dimensional formula ko = se jodne wali equation | [F] = [M L T⁻²] |
| **Dimensionless Quantity** | Jiski sabhi powers zero hon: [M⁰ L⁰ T⁰] | Angle, Strain, Refractive Index, Relative Density |

---

## Part A: Master Table Of Essential Dimensional Formulae

| Physical Quantity | Relation / Formula | Dimensional Formula |
|---|---|---|
| Area | Length × Breadth | **[M⁰ L² T⁰]** |
| Volume | L × B × H | **[M⁰ L³ T⁰]** |
| Density (ρ) | Mass / Volume | **[M L⁻³ T⁰]** |
| Velocity / Speed (v) | Displacement / Time | **[M⁰ L T⁻¹]** |
| Acceleration (a) | Change in velocity / Time | **[M⁰ L T⁻²]** |
| Linear Momentum (p) | Mass × Velocity | **[M L T⁻¹]** |
| Force (F) | Mass × Acceleration | **[M L T⁻²]** |
| Impulse (J) | Force × Time | **[M L T⁻¹]** *(same as Momentum!)* |
| Work / Energy / Torque | Force × Distance | **[M L² T⁻²]** |
| Power (P) | Work / Time | **[M L² T⁻³]** |
| Pressure / Stress / Young's Modulus | Force / Area | **[M L⁻¹ T⁻²]** |
| Surface Tension (S) | Force / Length | **[M L⁰ T⁻²]** |
| Spring Constant (k) | Force / Extension | **[M L⁰ T⁻²]** *(same as Surface Tension!)* |
| Frequency (ν) / Angular Velocity (ω) | 1 / Time | **[M⁰ L⁰ T⁻¹]** |
| Coefficient of Viscosity (η) | F / (A · dv/dx) | **[M L⁻¹ T⁻¹]** |
| Universal Gravitational Constant (G) | F r² / (m₁ m₂) | **[M⁻¹ L³ T⁻²]** |
| Planck's Constant (h) | Energy / Frequency | **[M L² T⁻¹]** |
| Angular Momentum (L) | r × p | **[M L² T⁻¹]** *(same as Planck's Constant!)* |
| Electric Charge (q) | Current × Time | **[M⁰ L⁰ T A]** |
| Universal Gas Constant (R) | PV / (nT) | **[M L² T⁻² K⁻¹ mol⁻¹]** |

---

## Part B: Dimensionless Quantities — Unitless Hona Zaroori Nahi!

- **Dimensionless AND Unitless:** Strain (ΔL/L), Refractive Index (c/v), Relative Density (ρ/ρ_water), Pure numbers (π, 2, 1/2).
- **Dimensionless BUT HAS A UNIT:** Plane Angle (radian, rad) aur Solid Angle (steradian, sr)! Kyunki arc/radius = [L]/[L] = [M⁰ L⁰ T⁰], par unka unit radian hota hai!

---

## Solved Examples (Step-by-Step With Jaanch)

### Example 2.1: Dimensional Formula Of Universal Gravitational Constant (G)
**Sawaal:** Newton's law of gravitation F = G m₁ m₂ / r² se G ka dimensional formula gyat karo.

**Solution:**
Rearrange for G: G = (F · r²) / (m₁ · m₂).
Substitute dimensions:
[G] = ([M L T⁻²] · [L²]) / ([M] · [M])
= [M L³ T⁻²] / [M²]
= **[M⁻¹ L³ T⁻²]**.

Jaanch:
- Jaanch: [G m₁ m₂ / r²] = [M⁻¹ L³ T⁻²][M²][L⁻²] = [M L T⁻²] = [F] ✅

---

### Example 2.2: Dimensional Formula Of Coefficient Of Viscosity (η)
**Sawaal:** Viscous force F = η A (v / d) se coefficient of viscosity η ka dimensional formula gyat karo (jahan A = area, v = velocity, d = distance).

**Solution:**
η = (F · d) / (A · v).
[η] = ([M L T⁻²] · [L]) / ([L²] · [L T⁻¹])
= [M L² T⁻²] / [L³ T⁻¹]
= **[M L⁻¹ T⁻¹]**.

Jaanch:
- Jaanch: SI unit of η is Pa·s = (kg m⁻¹ s⁻²)(s) = kg m⁻¹ s⁻¹ => [M L⁻¹ T⁻¹] ✅

---

### Example 2.3: Pairs Of Quantities With Identical Dimensions
**Sawaal:** Prove karo ki Planck's constant h (jahan E = hν) aur Angular Momentum L (jahan L = mvr) ke dimensional formulae bilkul identical hain.

**Solution:**
- **Planck's constant h = E / ν:**
  [h] = [M L² T⁻²] / [T⁻¹] = **[M L² T⁻¹]**.
- **Angular momentum L = m v r:**
  [L] = [M] · [L T⁻¹] · [L] = **[M L² T⁻¹]**.

Dono ke dimensional formulae **[M L² T⁻¹]** bilkul identical hain!

Jaanch:
- Jaanch: Unit check: h has unit J·s = kg m² s⁻¹; L = mvr has unit kg (m/s)(m) = kg m² s⁻¹ ✅

---

### Example 2.4: Dimensional Formula Of Boltzmann Constant (k_B) And Gas Constant (R)
**Sawaal:** Ideal gas law PV = nRT se R ka aur E = (3/2) k_B T se Boltzmann constant k_B ka dimensional formula gyat karo.

**Solution:**
Note: [P · V] = [M L⁻¹ T⁻²][L³] = [M L² T⁻²] (Energy!).
- **[R]** = [PV] / ([n][T]) = [M L² T⁻²] / ([mol][K]) = **[M L² T⁻² K⁻¹ mol⁻¹]**.
- **[k_B]** = [E] / [T] = [M L² T⁻²] / [K] = **[M L² T⁻² K⁻¹]**  *(3/2 dimensionless hai!)*.

Jaanch:
- Jaanch: k_B = R / N_A (Avogadro number has unit mol⁻¹), so [k_B] = [R]/[mol⁻¹] = [M L² T⁻² K⁻¹] ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Dimensionless quantity ko hamesha unitless maan lena
- **Galat soch:** "Angle ka dimensional formula [M⁰L⁰T⁰] hai, isliye angle ka koi unit nahi hota."
- **Sahi samajh:** Angle dimensionless hai, par uska SI unit **radian (rad)** hota hai! (Har unitless quantity dimensionless hoti hai, par har dimensionless quantity unitless hona zaroori nahi!)

### Galti 2: Power aur Energy ke dimensions mix kar dena
- **Galat soch:** "Power = [M L² T⁻²]."
- **Sahi samajh:** [M L² T⁻²] **Work / Energy** hai! Power = Work / Time hota hai, isliye Power = **[M L² T⁻³]**!

### Galti 3: Pure constants (jaise 1/2, 2π) ko dimensions de dena
- **Galat soch:** "KE = (1/2) m v² ka dimensional formula [(1/2) M L² T⁻²] hai."
- **Sahi samajh:** Pure numerical constants (1/2, π, 4/3) **dimensionless** hote hain aur dimensional formula mein kabhi nahi likhe jaate: **[KE] = [M L² T⁻²]**!

---

## Quick Recap

- **7 Base Symbols:** [M], [L], [T], [A], [K], [mol], [cd].
- **Famous Equal-Dimension Pairs:**
  - Work = Energy = Torque = [M L² T⁻²]
  - Momentum = Impulse = [M L T⁻¹]
  - Pressure = Stress = Young's Modulus = Energy Density = [M L⁻¹ T⁻²]
  - Surface Tension = Spring Constant = [M T⁻²]
  - Planck's Constant = Angular Momentum = [M L² T⁻¹]
- **Dimensionless ≠ Unitless** (example: radian, steradian).

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Find the dimensional formula of (a) Acceleration (b) Linear Momentum.

**Solution:**
- (a) a = v / t => [L T⁻¹] / [T] = **[M⁰ L T⁻²]**.
- (b) p = m · v => [M][L T⁻¹] = **[M L T⁻¹]**.

Jaanch:
- Jaanch: Units m s⁻² and kg m s⁻¹ match directly ✅

---

### Question 2
Find the dimensional formula of Surface Tension S = Force / Length.

**Solution:**
[S] = [M L T⁻²] / [L] = **[M L⁰ T⁻²]**.

Jaanch:
- Jaanch: Unit N/m = (kg m s⁻²)/m = kg s⁻² => [M T⁻²] ✅

---

### Question 3
Find the dimensional formula of Moment of Inertia I = m r².

**Solution:**
[I] = [M][L²] = **[M L² T⁰]**.

Jaanch:
- Jaanch: SI unit kg m² => [M L² T⁰] ✅

---

### Question 4
Find the dimensional formula of Young's Modulus Y = Stress / Strain (where Stress = Force/Area and Strain = ΔL/L).

**Solution:**
Strain is dimensionless [M⁰ L⁰ T⁰].
[Y] = [Stress] = [M L T⁻²] / [L²] = **[M L⁻¹ T⁻²]**.

Jaanch:
- Jaanch: Same dimensions as Pressure [M L⁻¹ T⁻²] ✅

---

### Question 5
Show that Energy Density (Energy per unit Volume) has the same dimensions as Pressure.

**Solution:**
[Energy Density] = [Energy] / [Volume] = [M L² T⁻²] / [L³] = **[M L⁻¹ T⁻²]** = [Pressure]!

Jaanch:
- Jaanch: J/m³ = (N·m)/m³ = N/m² = Pa ✅

---

### Question 6
Find the dimensional formula of Velocity Gradient (dv / dx, change in velocity per unit distance).

**Solution:**
[Velocity Gradient] = [L T⁻¹] / [L] = **[M⁰ L⁰ T⁻¹]** (same as Frequency!).

Jaanch:
- Jaanch: (m/s)/m = s⁻¹ => [T⁻¹] ✅

---

### Question 7
Find the dimensional formula of Electric Potential V = Work / Charge (where Charge = Current × Time).

**Solution:**
[q] = [A T].
[V] = [M L² T⁻²] / [A T] = **[M L² T⁻³ A⁻¹]**.

Jaanch:
- Jaanch: Matches base unit kg m² s⁻³ A⁻¹ from Topic 1 ✅

---

### Question 8
Find the dimensional formula of Electrical Resistance R = V / I (using V from Question 7).

**Solution:**
[R] = [M L² T⁻³ A⁻¹] / [A] = **[M L² T⁻³ A⁻²]**.

Jaanch:
- Jaanch: Power P = I² R => [A²][M L² T⁻³ A⁻²] = [M L² T⁻³] = [Power] ✅

---

### Question 9
Find the dimensional formula of Specific Heat Capacity c from Q = m c ΔT (where Q is heat energy and ΔT is temperature change).

**Solution:**
c = Q / (m ΔT) => [c] = [M L² T⁻²] / ([M][K]) = **[M⁰ L² T⁻² K⁻¹]**.

Jaanch:
- Jaanch: Unit J kg⁻¹ K⁻¹ = (kg m² s⁻²)/(kg K) = m² s⁻² K⁻¹ ✅

---

### Question 10
Find the dimensional formula of Latent Heat L from Q = m L.

**Solution:**
L = Q / m => [L] = [M L² T⁻²] / [M] = **[M⁰ L² T⁻²]** (same as v²!).

Jaanch:
- Jaanch: J/kg = m²/s² => [L² T⁻²] ✅

---

### Question 11
Find the dimensional formula of Gravitational Potential V_g = Work / Mass.

**Solution:**
[V_g] = [M L² T⁻²] / [M] = **[M⁰ L² T⁻²]** (same as Latent Heat!).

Jaanch:
- Jaanch: Unit J/kg = m² s⁻² => [L² T⁻²] ✅

---

### Question 12
Name two pairs of physical quantities that have identical dimensional formulae.

**Solution:**
1. **Work (or Energy) and Torque:** both have **[M L² T⁻²]**.
2. **Momentum and Impulse:** both have **[M L T⁻¹]**.
(Other valid pairs: Planck's constant & Angular Momentum [M L² T⁻¹]; Surface Tension & Spring Constant [M T⁻²].)

Jaanch:
- Jaanch: Both pairs verified directly from the Master Table ✅

---

Ab tum kisi bhi physical quantity ka dimensional formula seconds mein nikaal sakte ho! Agle topic [units-and-measurements-part3.md](units-and-measurements-part3.md) mein hum in dimensions ka asli jaadoo dekhenge — **Dimensional Analysis** se equations check karna, units convert karna, aur naye formulas derive karna!
