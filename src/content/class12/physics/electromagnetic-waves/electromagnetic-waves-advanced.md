> **Class:** 12 | **Subject:** Physics | **Chapter 8:** Electromagnetic Waves (Gehrai Mein — Advanced Level)

# Electromagnetic Waves — Gehrai Mein (Advanced Level)

> **Core chapter se:** Core lessons ([Topic 1](electromagnetic-waves.md) se [Topic 4](electromagnetic-waves-part4.md)) mein humne displacement current, EM wave properties aur EM spectrum cover kiye. Ab is **Gehrai Mein** section mein hum chaar high-level electrodynamics gems dekhenge — **Poynting Vector & Average Intensity (I = ½ c ε₀ E₀²)**, **Radiation Pressure at Oblique Incidence (cos² θ Law)**, **Radiation Force on a Sphere (Solar Dust Levitation)**, aur **Magnetic Field Inside a Charging Circular Capacitor (r < R vs r > R)**!

---

## Supriya ka Deep-Space Solar Sail Lab

**Supriya** ek space-propulsion & optics researcher hai. Solar-sail spacecraft design karte waqt uske chaar core formulas hote hain:
1. EM wave ki intensity (power per unit area) **Poynting Vector** ke average se milti hai: **I = ½ c ε₀ E₀² = c B₀² / (2 μ₀)**!
2. Agar light angle **θ** (normal se) par kisi surface par gire, to radiation pressure **P_rad = (I / c) cos² θ** (absorption) ya **(2 I / c) cos² θ** (reflection) hota hai!
3. Charging circular capacitor ke plates ke beech radius **r < R** par magnetic field **B = (μ₀ I_d r) / (2π R²)** linearly badhta hai!

---

## 1. Poynting Vector (S→) & Wave Intensity (I)

EM wave dwara per unit area per second le jaayi jaane wali energy (power flux) ko **Poynting Vector** kehte hain:

```
   S→ = (E→ × B→) / μ₀     |     Average Intensity: I = S_avg = ½ c ε₀ E₀² = E_rms B_rms / μ₀
```

*(Note: I = u_avg × c, jahan u_avg = ½ ε₀ E₀² average energy density hai!)*

---

## 2. Radiation Pressure at Oblique Incidence (Angle θ with Normal)

Intensity **I** ki parallel light beam area **A** par normal se angle **θ** par girti hai:
1. Effective intercepted area = **A cos θ** ⟹ Power hitting surface = **I A cos θ**.
2. Momentum component **perpendicular** to surface carries an extra **cos θ** factor!
3. Dono cos θ milkar **cos² θ** banate hain!

```
   Complete Absorption: P_rad = (I / c) cos² θ
   Complete Reflection: P_rad = (2 I / c) cos² θ
```

*(General partial reflectivity R, where 0 ≤ R ≤ 1: **P_rad = (1 + R)(I / c) cos² θ**!)*

---

## 3. Radiation Force on a Perfectly Absorbing/Reflecting Sphere

Radius **R** ke ek sphere par intensity **I** ki parallel light beam padti hai:
- **Perfectly Absorbing Sphere:** Projected cross-sectional area = **π R²** ⟹ **F = (π R² I) / c**.
- **Perfectly Reflecting Sphere (Classic Result!):** Spherical symmetry se reflected horizontal components integrate hokar cancel ho jaate hain ⟹ **F = (π R² I) / c** (EXACTLY SAME as absorbing sphere — NO factor of 2 for a sphere!)!

---

## 4. Magnetic Field Inside a Charging Circular Capacitor (r < R vs r > R)

Circular plates of radius **R** carrying total displacement current **I_d (= I_c)**:
- **Inside gap (r < R):** Area fraction = r² / R² ⟹ enclosed displacement current = **I_d (r² / R²)**!
  Ampere-Maxwell law: B (2π r) = μ₀ I_d (r² / R²) ⟹

```
   B_inside (r < R) = (μ₀ I_d r) / (2π R²)    (B ∝ r, max at edge r = R!)
   B_outside (r ≥ R) = (μ₀ I_d) / (2π r)      (B ∝ 1/r, just like a wire!)
```

---

## 5 Deep Solved Problems

### Problem 1: Peak Electric & Magnetic Field of Sunlight on Earth
The average intensity of sunlight reaching Earth's upper atmosphere (Solar Constant) is **I = 1380 W/m²**. Calculate the approximate **RMS electric field E_rms** and **peak electric field E₀** of sunlight (take c = 3.0 × 10⁸ m/s, ε₀ = 8.85 × 10⁻¹² F/m).

**Solution:**
- I = c ε₀ E_rms² ⟹ **E_rms² = I / (c ε₀)** = 1380 / (3.0 × 10⁸ × 8.85 × 10⁻¹²) = 1380 / (2.655 × 10⁻³) ≈ **5.20 × 10⁵ (V/m)²**.
- **E_rms = √(5.20 × 10⁵) ≈ 721 V/m**!
- **E₀ = √2 × 721 ≈ 1020 V/m** (lagbhag 1 kV/m!).
- Jaanch: 3 × 8.85 = 26.55; 1380 / 0.002655 ≈ 5.20 × 10⁵; √520000 ≈ 721 V/m ✅.

### Problem 2: Oblique Radiation Pressure on a Mirror
A laser beam of intensity **I = 6.0 × 10⁵ W/m²** strikes a perfectly **reflecting** mirror at an angle of incidence **θ = 60°** to the normal. Calculate the radiation pressure on the mirror.

**Solution:**
- cos 60° = 1/2 ⟹ cos² 60° = **1/4**.
- **P_rad = (2 I / c) cos² 60°** = [ (2 × 6.0 × 10⁵) / (3.0 × 10⁸) ] × (1/4)
  = (4.0 × 10⁻³) × (1/4) = **1.0 × 10⁻³ Pa = 1.0 mPa**.
- Jaanch: 12 / 3 = 4; 4 × 0.25 = 1.0 mPa ✅.

### Problem 3: Magnetic Field Inside a Charging Circular Capacitor
A circular parallel plate capacitor of plate radius **R = 10 cm** is being charged by a steady current **I = 2.0 A**. Calculate the magnetic field at distance (a) **r = 5 cm** (inside the gap), and (b) **r = 10 cm** (at the edge).

**Solution:**
- (b) Edge (r = R = 0.10 m): **B_edge = (2 × 10⁻⁷ × 2.0) / 0.10 = 4.0 × 10⁻⁶ T**.
- (a) Inside (r = 5 cm = R/2): B ∝ r ⟹ **B_in = ½ B_edge = 2.0 × 10⁻⁶ T**!
- Jaanch: (2 × 10⁻⁷ × 2.0 × 0.05) / (0.10)² = 2.0 × 10⁻⁸ / 10⁻² = 2.0 × 10⁻⁶ T ✅.

### Problem 4: Intensity at Distance r from a Point Bulb
A **100 W** isotropic point bulb radiates **5%** of its power as visible light uniformly in all directions. Find the intensity **I** at a distance of **r = 2.0 m** (take π = 3.14).

**Solution:**
- Radiated light power: P = 0.05 × 100 = **5.0 W**.
- Spherical surface area at r = 2 m: A = 4π r² = 4 × 3.14 × 4 = **50.24 m²**.
- **I = P / A = 5.0 / 50.24 ≈ 0.10 W/m²**.
- Jaanch: 5 / 50.24 ≈ 0.0995 ≈ 0.10 W/m² ✅.

### Problem 5: Partial Reflectivity Radiation Pressure
A surface absorbs **60%** and reflects **40%** (R = 0.4) of an incident EM wave of intensity **I = 3.0 × 10⁶ W/m²** at normal incidence (θ = 0°). Find the radiation pressure on the surface.

**Solution:**
- **P_rad = (1 + R) (I / c)** = (1 + 0.4) × (3.0 × 10⁶) / (3.0 × 10⁸)
  = 1.4 × 10⁻² = **0.014 Pa = 14 mPa**.
- Jaanch: 0.6(I/c) + 0.4(2I/c) = (0.6 + 0.8)(I/c) = 1.4(I/c) ✅.

---

## 10 Advanced Practice Questions

1. Write the expression for the Poynting vector S→ and its SI unit.
2. An EM wave in vacuum has peak electric field E₀ = 60 V/m. Calculate its average intensity I (take c = 3.0 × 10⁸ m/s, ε₀ = 8.85 × 10⁻¹² F/m).
3. A parallel light beam of intensity 9.0 × 10⁵ W/m² hits a perfectly absorbing black plate at angle θ = 30° to the normal. Calculate the radiation pressure on the plate.
4. A perfectly reflecting mirror of area 0.50 m² is struck normally by a beam of intensity 1.2 × 10⁴ W/m². Find the total radiation force on the mirror.
5. A charging circular capacitor has plate radius R = 6 cm and charging current I = 3.0 A. Find the magnetic field inside the gap at r = 2 cm from the axis.
6. What is the ratio of the magnetic field at r = R/3 to the magnetic field at r = 3R for a charging circular capacitor of plate radius R?
7. A point source emits EM waves uniformly with power P = 4π × 10³ W. Find the intensity I at distance r = 10 m from the source.
8. A tiny spherical dust grain of radius R = 1.0 μm is hit by sunlight of intensity I = 1500 W/m². Calculate the radiation force on the dust grain (take π = 3.14).
9. If the peak electric field E₀ of an EM wave is doubled, by what factor does its intensity I increase?
10. A surface reflects 80% and absorbs 20% of normal incident radiation of intensity 3.0 × 10⁴ W/m². Calculate the radiation pressure.

### Solutions

1. **S→ = (E→ × B→) / μ₀**. SI unit: **W/m²** (energy per unit area per unit time).

2. I = ½ c ε₀ E₀² = 0.5 × (3.0 × 10⁸) × (8.85 × 10⁻¹²) × (60)²
   = 1.5 × 8.85 × 10⁻⁴ × 3600 = 5.4 × 8.85 × 10⁻¹ ≈ **4.78 W/m²**.
   Jaanch: 0.5 × 3 × 3600 = 5400; 5400 × 8.85 × 10⁻⁴ = 4.779 W/m² ✅.

3. cos 30° = √3 / 2 ⟹ cos² 30° = 3/4.
   P_rad = (I / c) cos² 30° = [ (9.0 × 10⁵) / (3.0 × 10⁸) ] × (3/4) = (3.0 × 10⁻³) × 0.75 = **2.25 × 10⁻³ Pa = 2.25 mPa**.
   Jaanch: 3 × 0.75 = 2.25 mPa ✅.

4. F = (2 I A) / c = (2 × 1.2 × 10⁴ × 0.50) / (3.0 × 10⁸) = (1.2 × 10⁴) / (3.0 × 10⁸) = **4.0 × 10⁻⁵ N**.
   Jaanch: 2 × 0.5 = 1; 1.2 / 3.0 = 0.4 ⟹ 4.0 × 10⁻⁵ N ✅.

5. B = (2 × 10⁻⁷ × I × r) / R² = (2 × 10⁻⁷ × 3.0 × 0.02) / (0.06)² = (1.2 × 10⁻⁸) / (3.6 × 10⁻³) = **(1/3) × 10⁻⁵ ≈ 3.33 × 10⁻⁶ T**.
   Jaanch: 12 / 36 = 1/3 ✅.

6. B_in(R/3) = (μ₀ I)/(2π × 3R); B_out(3R) = (μ₀ I)/(2π × 3R) ⟹ Ratio = **1 : 1**!
   Jaanch: Both equal (1/3) B_edge ✅.

7. I = P / (4π r²) = (4π × 10³) / (4π × 100) = **10 W/m²**.
   Jaanch: 4π kat gaya; 1000 / 100 = 10 W/m² ✅.

8. F = (π R² I) / c = [ 3.14 × (1.0 × 10⁻⁶)² × 1500 ] / (3.0 × 10⁸)
   = (3.14 × 1.5 × 10⁻⁹) / (3.0 × 10⁸) = 3.14 × 0.5 × 10⁻¹⁷ = **1.57 × 10⁻¹⁷ N**.
   Jaanch: 1500 / 3 = 500; 3.14 × 500 × 10⁻²⁰ = 1.57 × 10⁻¹⁷ N ✅.

9. I ∝ E₀² ⟹ doubling E₀ increases intensity by **4 times (4 I)**!

10. R = 0.80 ⟹ P_rad = (1 + 0.80) × (3.0 × 10⁴) / (3.0 × 10⁸) = 1.8 × 10⁻⁴ Pa = **0.18 mPa**.
    Jaanch: 1.8 × 10⁻⁴ Pa ✅.

---

Shabaash! Tumne Poynting Vector, Oblique Radiation Pressure, Solar-Dust Force aur Charging-Capacitor B-Fields tak conquer kar liye hain! Wapas chapter overview ke liye [Mixed Problems & Chapter Wrap-up](electromagnetic-waves-part4.md) dekho!
