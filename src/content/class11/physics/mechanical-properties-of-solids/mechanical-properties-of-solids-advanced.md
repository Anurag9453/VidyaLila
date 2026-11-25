> **Class:** 11 | **Subject:** Physics | **Chapter 8:** Mechanical Properties of Solids (Gehrai Mein — Advanced Level)

# Mechanical Properties of Solids — Gehrai Mein (Advanced Level)

> **Core chapter se:** Core lessons ([Topic 1](mechanical-properties-of-solids.md) se [Topic 5](mechanical-properties-of-solids-part5.md)) mein humne stress, strain, Y/G/B, Poisson's ratio, aur elastic energy cover kiye. Ab is **Gehrai Mein** section mein hum woh deep solid-mechanics results derive karenge jo hardest problems mein pooche jate hain — **Self-Weight Elongation**, **Thermal Stress in Clamped Rods**, **Series/Parallel Effective Y**, **Exact Inter-Relations Between Y, B, G, σ**, aur **Elongation of a Rotating Thin Ring**!

---

## Dindayal ka Solid-Mechanics Research Lab

Dindayal ek solid-mechanics researcher hai. Uske lab mein chaar high-level problems aati hain:
1. Ek bhari uniform rope/wire apne **khud ke weight** se kitni lambi khinchti hai? (Tension top par Mg aur bottom par 0 — average tension **Mg/2**!)
2. Railway tracks ko garam hone par failne se roka jaye toh unme kitna **Thermal Stress (Y α ΔT)** paida hota hai?
3. Ek thin metal ring speed ω se ghoome toh centrifugal tension se uska radius kitna badhta hai?

Chalo Dindayal ke saath in paanch elite tools ko solve karte hain!

---

## 1. Elongation of a Heavy Uniform Wire Under Its Own Weight

Length **L**, mass **M**, density **ρ**, area **A** ki wire latki hai. Bottom se height y par tension T(y) = (M g / L) y — yani tension linearly 0 (bottom) se M g (top) tak badhta hai => **average tension = M g / 2**!
```
  ΔL_self = (M g / 2) L / (A Y) = M g L / (2 A Y) = ρ g L² / (2 Y)
```
*(Notice: Half the elongation produced if the same mass M hung at the bottom of a massless wire!)*

---

## 2. Thermal Stress in a Rigidly Clamped Rod

Temperature ΔT badhne par free rod **ΔL = L α ΔT** failti (thermal strain = α ΔT). Agar dono ends rigid walls ke beech clamp kar diye jayein, toh deewarein utna hi compressive strain paida karti hain:
```
  Thermal Stress:   σ_thermal = Y α ΔT      |      Force on walls:   F = Y A α ΔT
```
*(Notice: Thermal stress length L par bilkul depend NAHI karta!)*

---

## 3. Exact Inter-Relations Among Y, B, G, and σ

Isotropic solids ke chaar elastic constants independent nahi hote — koi bhi 2 pata hon toh baaki 2 mil jate hain:
```
  1.  Y = 3 B (1 - 2 σ)
  2.  Y = 2 G (1 + σ)
  3.  9 / Y = 1 / B + 3 / G    (ya  Y = 9 B G / (3 B + G))
```
*(Inhi 1 & 2 se theoretical limits **-1 < σ < 0.5** aati hain, kyunki Y, B, G > 0!)*

---

## 4. Elongation of a Rapidly Rotating Thin Ring

Mass **M** (density **ρ**), radius **R**, area **A** ki thin ring angular velocity **ω** se ghoom rahi hai. Chhote arc element (dθ) par radial force balance: 2 T sin(dθ/2) = (dm) ω² R => **T = ρ A ω² R²**!
- Tensile stress: **σ = T / A = ρ ω² R²**
- Strain: Δ(2πR) / (2πR) = ΔR / R = σ / Y = **ρ ω² R² / Y**
- Increase in radius: **ΔR = ρ ω² R³ / Y**!

---

## 6 Deep Solved Problems

### Problem 1: Self-Weight Elongation of a 100 m Steel Cable

A uniform steel cable of length L = 100 m, density ρ = 8 × 10³ kg/m³, and Y = 2 × 10¹¹ Pa hangs vertically under its own weight (g = 10 m/s²). Find its elongation ΔL in mm.

**Solution:**
ΔL = ρ g L² / (2 Y) = (8 × 10³ × 10 × 10⁴) / (2 × 2 × 10¹¹) = (8 × 10⁸) / (4 × 10¹¹) = 2 × 10⁻³ m = **2.0 mm**.

Jaanch:
- Jaanch: Independent of cross-sectional area A! 8/4 = 2 × 10⁻³ m = 2 mm ✅

---

### Problem 2: Thermal Stress & Force in a Clamped Steel Rail

A steel rail (Y = 2 × 10¹¹ Pa, α = 1.2 × 10⁻⁵ °C⁻¹) of cross-sectional area 50 cm² (5 × 10⁻³ m²) is rigidly fixed at both ends. If the temperature rises by 25 °C, find: (a) the thermal stress, (b) the compressive force exerted on the end supports.

**Solution:**
- (a) σ = Y α ΔT = (2 × 10¹¹)(1.2 × 10⁻⁵)(25) = **6 × 10⁷ Pa (60 MPa)**.
- (b) F = σ A = (6 × 10⁷)(5 × 10⁻³) = **3 × 10⁵ N (300 kN)**!

Jaanch:
- Jaanch: 2 × 1.2 × 25 = 60; 10¹¹ × 10⁻⁵ = 10⁶ => 60 MPa (that's why rails need expansion gaps!) ✅

---

### Problem 3: Finding B and G from Y and σ

A metal has Young's modulus Y = 1.5 × 10¹¹ Pa and Poisson's ratio σ = 0.25. Find its Bulk Modulus B and Shear Modulus G.

**Solution:**
- Y = 3 B (1 - 2 σ) = 3 B (1 - 0.5) = 1.5 B => **B = Y / 1.5 = 1.0 × 10¹¹ Pa**.
- Y = 2 G (1 + σ) = 2 G (1.25) = 2.5 G => **G = Y / 2.5 = 0.6 × 10¹¹ Pa**.

Jaanch:
- Jaanch: Check 9/Y = 1/B + 3/G: 9/1.5 = 6; 1/1.0 + 3/0.6 = 1 + 5 = 6 ✅

---

### Problem 4: Equivalent Young's Modulus of Two Rods in Series

Two rods of equal length L and equal area A, with Young's moduli Y₁ and Y₂, are joined end-to-end (total length 2L). Find the equivalent Young's modulus Y_eq of the composite rod.

**Solution:**
Total stretch ΔL = ΔL₁ + ΔL₂:
F (2L) / (A Y_eq) = F L / (A Y₁) + F L / (A Y₂)
2 / Y_eq = 1 / Y₁ + 1 / Y₂  =>  **Y_eq = 2 Y₁ Y₂ / (Y₁ + Y₂)** (Harmonic Mean!).

Jaanch:
- Jaanch: If Y₁ = Y₂ = Y => Y_eq = 2Y² / (2Y) = Y ✅

---

### Problem 5: Rotating Metal Ring Bursting Speed

A thin metal ring of density ρ = 8 × 10³ kg/m³ and breaking stress σ_max = 8 × 10⁸ Pa rotates about its central axis. Find the maximum linear rim speed v_max (= ω R) before the ring bursts!

**Solution:**
Hoop stress in rotating ring: σ = ρ ω² R² = **ρ v²**!
At bursting: ρ v_max² = σ_max => v_max = √(σ_max / ρ) = √((8 × 10⁸) / (8 × 10³)) = √(10⁵) = **100 √10 ≈ 316 m/s** (independent of radius R!).

Jaanch:
- Jaanch: √(8×10⁸ / 8×10³) = √(10⁵) ≈ 316 m/s ✅

---

### Problem 6: Effective Young's Modulus of Two Rods in Parallel

Two rods of equal length L and equal area A, with Young's moduli Y₁ and Y₂, are placed side-by-side (total area 2A) and stretched equally by ΔL. Find Y_eq.

**Solution:**
F_total = F₁ + F₂ => Y_eq (2A) ΔL / L = Y₁ A ΔL / L + Y₂ A ΔL / L
=> **Y_eq = (Y₁ + Y₂) / 2** (Arithmetic Mean!).

Jaanch:
- Jaanch: Series = Harmonic Mean; Parallel = Arithmetic Mean! ✅

---

## 3 Advanced Mistakes

### Galti 1: Self-weight elongation mein ρ g L² / Y likh dena (factor of 1/2 bhool jana!)
- **Galat:** Weight M g hai toh ΔL = M g L / (A Y) = ρ g L² / Y!
- **Sahi:** Tension top se bottom tak Mg se 0 linearly ghatti hai (avg = Mg/2), isliye **ΔL = ρ g L² / (2 Y)**!

### Galti 2: Thermal stress ko rod ki length L ke proportional maan lena
- **Galat:** Lambi clamped rod mein thermal stress zyada hoga!
- **Sahi:** **σ_thermal = Y α ΔT** — length L bilkul cancel ho jati hai!

### Galti 3: Rotating ring ka hoop tension T = M ω² R likh dena
- **Galat:** Ring ka mass M hai toh tension M ω² R hogi!
- **Sahi:** 2π radius par distributed mass ke liye **T = (M / (2π)) ω² R = ρ A ω² R²** (factor of 1/(2π) zaroori hai)!

---

## Practice Questions (Advanced)

*(Take g = 10 m/s² unless stated otherwise.)*

### Question 1
A rubber rope of length 8 m, density 1.5 × 10³ kg/m³, and Y = 5 × 10⁶ Pa hangs vertically under its own weight. Find its elongation in mm.

**Solution:**
ΔL = ρ g L² / (2 Y) = (1.5 × 10³ × 10 × 64) / (2 × 5 × 10⁶) = (9.6 × 10⁵) / 10⁷ = 0.096 m = **96 mm (9.6 cm)**.

Jaanch:
- Jaanch: 1.5 × 64 = 96; 10⁴ / 10⁷ = 10⁻³ => 96 mm ✅

---

### Question 2
A copper rod (Y = 1.2 × 10¹¹ Pa, α = 1.7 × 10⁻⁵ °C⁻¹) is clamped rigidly at both ends. Find the thermal stress developed when its temperature drops by 50 °C.

**Solution:**
σ = Y α ΔT = (1.2 × 10¹¹)(1.7 × 10⁻⁵)(50) = 1.2 × 1.7 × 50 × 10⁶ = **1.02 × 10⁸ Pa (102 MPa, tensile)**.

Jaanch:
- Jaanch: 1.2 × 50 = 60; 60 × 1.7 = 102 MPa ✅

---

### Question 3
If for a solid material, Bulk Modulus B = 1.6 × 10¹¹ Pa and Shear Modulus G = 0.6 × 10¹¹ Pa, find its Young's Modulus Y.

**Solution:**
Y = 9 B G / (3 B + G) = 9(1.6)(0.6) / (4.8 + 0.6) × 10¹¹ = (8.64 / 5.4) × 10¹¹ = **1.6 × 10¹¹ Pa**.

Jaanch:
- Jaanch: 9/1.6 = 5.625; 1/1.6 + 3/0.6 = 0.625 + 5 = 5.625 ✅

---

### Question 4
Two equal-length, equal-area wires with Y₁ = 2 × 10¹¹ Pa and Y₂ = 6 × 10¹¹ Pa are joined in series. Find their equivalent Young's modulus.

**Solution:**
Y_eq = 2 Y₁ Y₂ / (Y₁ + Y₂) = 2(2)(6) / (2 + 6) × 10¹¹ = 24 / 8 × 10¹¹ = **3 × 10¹¹ Pa**.

Jaanch:
- Jaanch: Harmonic mean of 2 and 6 is 3 ✅

---

### Question 5
A thin copper ring (ρ = 9 × 10³ kg/m³, Y = 1.2 × 10¹¹ Pa, R = 0.2 m) rotates at ω = 100 rad/s. Find the increase in its radius ΔR in μm.

**Solution:**
ΔR = ρ ω² R³ / Y = (9 × 10³ × 10⁴ × 0.008) / (1.2 × 10¹¹) = (7.2 × 10⁵) / (1.2 × 10¹¹) = 6 × 10⁻⁶ m = **6 μm**.

Jaanch:
- Jaanch: 9 × 0.008 = 0.072; 0.072 × 10⁷ = 7.2 × 10⁵; divide by 1.2 × 10¹¹ => 6 μm ✅

---

### Question 6
If Poisson's ratio σ = 0 for a material (like cork), find the ratios B / Y and G / Y.

**Solution:**
- Y = 3 B (1 - 0) => **B / Y = 1 / 3**.
- Y = 2 G (1 + 0) => **G / Y = 1 / 2**.

Jaanch:
- Jaanch: 1/B + 3/G = 3/Y + 6/Y = 9/Y ✅

---

### Question 7
A uniform rod of mass M, length L, and area A is pulled horizontally on a smooth floor by a constant force F at one end (accelerating at a = F/M). Find its total elongation ΔL!

**Solution:**
Tension varies linearly from F at the pulled end to 0 at the free end => average tension = **F / 2**!
ΔL = (F / 2) L / (A Y) = **F L / (2 A Y)**.

Jaanch:
- Jaanch: Exact same linear tension profile as self-weight hanging wire! ✅

---

### Question 8
What is the Poisson's ratio σ of a material for which Y = 2.6 G?

**Solution:**
Y = 2 G (1 + σ) => 2.6 = 2 (1 + σ) => 1 + σ = 1.3 => **σ = 0.3**.

Jaanch:
- Jaanch: 2(1 + 0.3) = 2.6 ✅

---

### Question 9
Two rods of equal length and area with Y₁ = 1 × 10¹¹ Pa and Y₂ = 2 × 10¹¹ Pa are arranged in parallel. Find their equivalent Young's modulus.

**Solution:**
Y_eq = (1 + 2) / 2 × 10¹¹ = **1.5 × 10¹¹ Pa**.

Jaanch:
- Jaanch: Arithmetic mean of 1 and 2 is 1.5 ✅

---

### Question 10
A heavy vertical wire hangs under its own weight (elongation ΔL). Express the **elastic potential energy** stored in the wire under its own weight in terms of M, g, and ΔL (hint: integrate (1/2) T² dx / (AY) where T(x) = Mg x/L -> gives (1/3) instead of (1/2)!).

**Solution:**
Since T(x) = (M g / L) x, energy density ∝ x², whose average from 0 to L is 1/3 of its top value!
U = (1/6) (M g)² L / (A Y) = **(1/3) M g ΔL** (where ΔL = M g L / (2 A Y))!

Jaanch:
- Jaanch: Check (1/3) M g [M g L / (2 A Y)] = M² g² L / (6 A Y) ✅

---

### Question 11
A uniform conical/tapered rod of length L tapers linearly from radius r₁ to r₂. Under a constant pulling force F, its elongation (by integration) is ΔL = F L / (π r₁ r₂ Y). Check this formula when r₁ = r₂ = r.

**Solution:**
When r₁ = r₂ = r: ΔL = F L / (π r² Y) = F L / (A Y) — exact uniform-cylinder formula!
For r₁ = 1 mm, r₂ = 2 mm: geometric-mean radius √(r₁ r₂) = √2 mm controls the stretch!

Jaanch:
- Jaanch: Dimensions [F][L] / ([L²][F L⁻²]) = [L] ✅

---

### Question 12
A steel wire of length 2 m is clamped between two rigid walls at 20 °C with zero tension. If cooled to 0 °C (α = 1.2 × 10⁻⁵ °C⁻¹, Y = 2 × 10¹¹ Pa), find the tensile stress developed.

**Solution:**
ΔT = 20 °C => σ = (2 × 10¹¹)(1.2 × 10⁻⁵)(20) = **4.8 × 10⁷ Pa (48 MPa)**.

Jaanch:
- Jaanch: 2 × 1.2 × 20 = 48 MPa ✅

---

Shabaash! Tumne Mechanical Properties of Solids ko self-weight, thermal stress, Y-B-G-σ relations, aur rotating rings tak conquer kar liya hai. Wapas chapter overview ke liye [Mixed Problems & Chapter Wrap-up](mechanical-properties-of-solids-part5.md) dekho!
