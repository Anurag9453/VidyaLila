> **Class:** 12 | **Subject:** Physics | **Chapter 11:** Dual Nature of Radiation and Matter (Gehrai Mein — Advanced Level)

# Dual Nature of Radiation and Matter — Gehrai Mein (Advanced Level)

> **Core chapter se:** Core lessons ([Topic 1](dual-nature-of-radiation-and-matter.md) se [Topic 4](dual-nature-of-radiation-and-matter-part4.md)) mein humne photoelectric effect, photons, de Broglie waves aur Davisson-Germer experiment cover kiye. Ab is **Gehrai Mein** section mein hum chaar elite quantum-mechanics gems dekhenge — **Maximum Charge on an Isolated Irradiated Metal Sphere**, **Quantum Efficiency & Photocurrent from Laser Power**, **Compton Scattering (Photon-Electron Billiard Collision!)**, aur **Thermal de Broglie Wavelength of Gas Molecules**!

---

## Tabassum ka Quantum-Optics Lab

**Tabassum** ek quantum-optics researcher hai. Uske lab notes mein chaar classic advanced problems hain:
1. Agar ek isolated neutral metal sphere (radius **R**, work function **φ₀**) par UV light lagataar daali jaaye, to electrons nikalne se sphere positive charge hota jaata hai — aur exact **V = V₀** (stopping potential) par ruk jaata hai, jahan max charge **Q_max = 4π ε₀ R V₀** hota hai!
2. Agar har 100 photons mein sirf 1 photoelectron nikle (**quantum efficiency η = 1%**), to photocurrent exact **I = η e (P λ / hc)** hota hai!
3. **Compton Effect** mein X-ray photon electron se takrakar apni wavelength **Δλ = (h / m_e c)(1 − cos θ)** badha leta hai — photon ke momentum ka sabse pakka saboot!

---

## 1. Maximum Charge on an Isolated Irradiated Metal Sphere

Isolated metal sphere (radius **R**, work function **φ₀**) par photon energy **E > φ₀** ki light daali jaati hai:
- Jaise-jaise electrons bahar jaate hain, sphere par positive potential **V = k Q / R** badhta jaata hai aur electrons ko wapas kheenchta hai!
- Emission tab rukta hai jab sphere ka surface potential exact **stopping potential V₀ = (E − φ₀) / e** ke barabar ho jaaye!

```
   V_max = V₀ = (hν − φ₀) / e     |     Q_max = (4π ε₀ R) V₀ = (R V₀) / k
```

---

## 2. Photocurrent with Quantum Efficiency (η)

Power **P**, wavelength **λ** ki beam per second **N_p = P λ / (h c)** photons bhejti hai. Agar fraction **η** (quantum efficiency, 0 < η ≤ 1) photons hi photoelectrons nikaal paate hain:

```
   I_sat = η × e × (N_p) = (η e P λ) / (h c)
```

---

## 3. Compton Scattering (Photon-Electron Elastic Collision!)

1923 mein Arthur Compton ne dikhaya ki jab X-ray photon (wavelength **λ**) ek stationary free electron (mass **m_e**) se takrakar angle **θ** par scatter hota hai, to uski wavelength **badh** jaati hai (**λ' > λ**):

```
   Δλ = λ' − λ = (h / m_e c) (1 − cos θ) = λ_C (1 − cos θ)
```

jahan **λ_C = h / (m_e c) ≈ 0.00243 nm (= 0.0243 Å)** ko **Compton Wavelength of Electron** kehte hain!
- **θ = 90°:** Δλ = λ_C = **0.00243 nm**.
- **θ = 180° (Head-on backscattering):** Δλ_max = **2 λ_C = 0.00486 nm**!

---

## 4. Thermal de Broglie Wavelength of Gas Molecules / Neutrons

Absolute temperature **T** par thermal equilibrium mein gas molecule ya thermal neutron ki average kinetic energy **K = (3/2) k_B T** hoti hai (jahan Boltzmann constant **k_B = 1.38 × 10⁻²³ J/K**):

```
   λ_thermal = h / √(3 m k_B T)     (λ ∝ 1 / √T !)
```

---

## 5 Deep Solved Problems

### Problem 1: Maximum Charge on an Isolated Copper Sphere
An isolated copper sphere of radius **R = 10 cm** (work function **φ₀ = 4.5 eV**) is illuminated by UV light of wavelength **λ = 200 nm** (**E = 6.2 eV**). Find (a) the maximum potential developed on the sphere, and (b) the maximum charge **Q_max** on it.

**Solution:**
- (a) Stopping potential: **V_max = (6.2 − 4.5) = 1.7 V**.
- (b) **Q_max = (R V_max) / k = (0.10 × 1.7) / (9 × 10⁹) ≈ 1.89 × 10⁻¹¹ C = 18.9 pC**!
- Jaanch: k Q / R = (9 × 10⁹ × 1.89 × 10⁻¹¹) / 0.10 ≈ 1.7 V ✅.

### Problem 2: Saturation Photocurrent with 1% Quantum Efficiency
A monochromatic light beam of power **P = 6.2 mW** and wavelength **λ = 400 nm** (**E = 3.1 eV**) falls on a photocell with quantum efficiency **η = 1% (0.01)**. Calculate the saturation photocurrent **I_sat**.

**Solution:**
- Ek photon ki energy: E = 3.1 × 1.6 × 10⁻¹⁹ = **4.96 × 10⁻¹⁹ J**.
- Photons/s: N_p = (6.2 × 10⁻³) / (4.96 × 10⁻¹⁹) = **1.25 × 10¹⁶ photons/s**.
- Electrons/s: N_e = 0.01 × 1.25 × 10¹⁶ = **1.25 × 10¹⁴ electrons/s**.
- **I_sat = N_e × e = (1.25 × 10¹⁴) × (1.6 × 10⁻¹⁹) = 2.0 × 10⁻⁵ A = 20 μA**!
- Jaanch: Shortcut I = η × P / E(eV) = 0.01 × (6.2 mW) / 3.1 V = 0.01 × 2 mA = 20 μA! (Super clean!) ✅.

### Problem 3: Compton Shift at 90° and 180°
X-rays of wavelength **λ = 0.1000 nm** undergo Compton scattering from free electrons. Find the scattered wavelength **λ'** at (a) **θ = 90°**, and (b) **θ = 180°** (take λ_C = 0.0024 nm).

**Solution:**
- (a) θ = 90° (cos 90° = 0): Δλ = 0.0024 nm ⟹ **λ' = 0.1024 nm**.
- (b) θ = 180° (cos 180° = −1): Δλ = 2 × 0.0024 = 0.0048 nm ⟹ **λ' = 0.1048 nm**.
- Jaanch: Scattered photon loses energy ⟹ λ' > λ ✅.

### Problem 4: Thermal de Broglie Wavelength Scaling
At temperature **T₁ = 300 K**, the thermal de Broglie wavelength of Helium atoms is **λ₁**. At what temperature **T₂** will their thermal de Broglie wavelength become **λ₁ / 2**?

**Solution:**
- λ ∝ 1 / √T ⟹ λ₂ / λ₁ = √(T₁ / T₂) ⟹ 1/2 = √(300 / T₂) ⟹ 1/4 = 300 / T₂ ⟹ **T₂ = 1200 K**!
- Jaanch: 4× Kelvin temperature ⟹ 2× speed ⟹ 1/2 wavelength ✅.

### Problem 5: Circular Orbit of Fastest Photoelectron in a Magnetic Field
Photoelectrons of **K_max = 1.8 eV** enter a perpendicular magnetic field **B = 1.0 × 10⁻⁴ T**. Find the radius **r** of the largest circular arc they trace (m_e = 9.1 × 10⁻³¹ kg, e = 1.6 × 10⁻¹⁹ C).

**Solution:**
- K_max = 1.8 × 1.6 × 10⁻¹⁹ = 2.88 × 10⁻¹⁹ J.
- Momentum p = √(2 m_e K_max) = √(2 × 9.1 × 10⁻³¹ × 2.88 × 10⁻¹⁹) = √(5.24 × 10⁻⁴⁹) ≈ **7.24 × 10⁻²⁵ kg m/s**.
- **r = p / (e B) = (7.24 × 10⁻²⁵) / (1.6 × 10⁻¹⁹ × 10⁻⁴) ≈ 0.045 m = 4.5 cm**!
- Jaanch: 7.24 / 1.6 = 4.525 ⟹ 4.5 cm ✅.

---

## 10 Advanced Practice Questions

1. An isolated metal sphere of radius 18 cm (φ₀ = 2.0 eV) is irradiated with photons of energy 5.0 eV. Find its maximum charge Q_max.
2. A 10 mW laser of photon energy 2.5 eV hits a photocell with 2% quantum efficiency. Use the shortcut I = η P / E(eV) to find the saturation photocurrent in μA.
3. Calculate the maximum possible Compton wavelength shift Δλ_max for an X-ray scattered by a free electron (take λ_C = 0.00243 nm).
4. At what scattering angle θ is the Compton wavelength shift equal to **half** of the electron's Compton wavelength (Δλ = λ_C / 2)?
5. Why is the Compton effect easily observed with **X-rays** (~0.1 nm) but practically unobservable with **visible light** (~500 nm)?
6. If the absolute temperature of a neutron gas is increased from 27 °C (300 K) to 927 °C (1200 K), by what factor does the thermal de Broglie wavelength of the neutrons change?
7. Two metals A and B have work functions φ_A and φ_B (φ_A < φ_B). Light of frequency ν (> ν_0B) ejects electrons of max speeds v_A and v_B. Show that v_A² − v_B² = 2(φ_B − φ_A) / m_e.
8. A particle of mass m splits at rest into two fragments of masses m₁ and m₂ flying in opposite directions. What is the ratio of their de Broglie wavelengths λ₁ : λ₂?
9. Find the ratio of de Broglie wavelengths of an Oxygen molecule (O₂, molar mass 32) and a Hydrogen molecule (H₂, molar mass 2) at the **same temperature T**.
10. A proton and an electron are accelerated by the same potential V, and then enter the same perpendicular magnetic field B. What is the ratio of their circular radii r_p / r_e in terms of √(m_p / m_e)?

### Solutions

1. V_max = 5.0 − 2.0 = 3.0 V.
   Q_max = (R V_max) / k = (0.18 × 3.0) / (9 × 10⁹) = 0.54 / (9 × 10⁹) = **6.0 × 10⁻¹¹ C = 60 pC**.
   Jaanch: 0.54 / 9 = 0.06 ⟹ 60 pC ✅.

2. I = η × P / E(eV) = 0.02 × (10 × 10⁻³) / 2.5 = 0.02 × 4.0 × 10⁻³ = **8.0 × 10⁻⁵ A = 80 μA**.
   Jaanch: 10/2.5 = 4 mA at 100%; 2% of 4000 μA = 80 μA ✅.

3. Max shift at θ = 180°: **Δλ_max = 2 λ_C = 2 × 0.00243 = 0.00486 nm**.
   Jaanch: 1 − cos 180° = 2 ✅.

4. 1 − cos θ = 1/2 ⟹ cos θ = 1/2 ⟹ **θ = 60°**.
   Jaanch: 1 − cos 60° = 0.5 ✅.

5. Compton shift Δλ ≈ 0.0024 nm. For X-rays (0.1 nm), Δλ/λ is ~**2.4%** (easily measurable!). For visible light (500 nm), Δλ/λ is ~**0.0005%** (too tiny to detect!).

6. T increases by 1200 / 300 = 4× ⟹ λ ∝ 1/√T becomes **1 / 2 (halved)**!

7. ½ m_e v_A² = hν − φ_A; ½ m_e v_B² = hν − φ_B. Subtracting: ½ m_e (v_A² − v_B²) = φ_B − φ_A ⟹ **v_A² − v_B² = 2(φ_B − φ_A) / m_e** (independent of ν!). Jaanch: hν cancels cleanly ✅.

8. Momentum conservation from rest: **|p₁| = |p₂|** ⟹ since λ = h/p, **λ₁ : λ₂ = 1 : 1** (regardless of masses m₁, m₂!)!

9. λ = h / √(3 m k_B T) ⟹ same T means **λ ∝ 1 / √m**:
   λ(O₂) / λ(H₂) = √(2 / 32) = √(1/16) = **1 : 4**!
   Jaanch: Lighter H₂ molecule has 4× longer thermal wavelength ✅.

10. r = √(2 m q V) / (q B) = (1/B) √(2 m V / q). Same q = e, V, B ⟹ **r_p / r_e = √(m_p / m_e)** (≈ 42.8)!

---

Shabaash! Tumne Isolated Sphere Charging, Quantum Efficiency, Compton Scattering aur Thermal Matter Waves tak conquer kar liye hain! Wapas chapter overview ke liye [Mixed Problems & Chapter Wrap-up](dual-nature-of-radiation-and-matter-part4.md) dekho!
