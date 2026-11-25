> **Class:** 11 | **Subject:** Physics | **Chapter 12:** Kinetic Theory (Part 5)

# Sab Kuch Mila Kar: Mixed Problems & Chapter Wrap-up

> **Pichle topic se:** [Mean Free Path](kinetic-theory-part4.md) mein humne molecular collisions ka spacing dekha. Ab chalo poore Kinetic Theory chapter ke sabhi tools — Ideal Gas Law, Dalton's Law, Pressure & v_rms, Equipartition & Degrees of Freedom, aur Mean Free Path — ko ek saath mila kar multi-concept challenges solve karte hain!

---

## Narmada ka Atmospheric-Physics Lab Desk

Narmada ek Atmospheric-Physics Lab Director hai. Uske lab mein har din upper-atmosphere gases ke v_rms, escape velocity comparisons, Dalton's partial pressures, equipartition γ values, aur mean free paths ek saath analyze kiye jate hain! Narmada ka **Decision Map** har kinetic-theory problem ka turant sahi formula chunta hai.

---

## Decision Map: Kaun Sa Kinetic Theory Tool Kab Lagayein?

| Problem mein kya dikhe? | Kaun sa tool lagao? |
|---|---|
| Number of molecules N, density ρ, partial pressure | **PV = nRT = N k_B T**; **P = ρRT/M**; **P_total = Σ Pᵢ** ([Topic 1](kinetic-theory.md)) |
| Gas pressure from speeds, v_rms, translational KE | **P = (1/3)ρ v_rms² = (2/3)(E_trans/V)**; **v_rms = √(3RT/M)**; **K_avg = (3/2)k_B T** ([Topic 2](kinetic-theory-part2.md)) |
| Total internal energy U, C_v, C_p, γ, solids C | **U = (f/2) nRT**; **C_v = (f/2)R**; **γ = 1 + 2/f**; Solids **C = 3R** ([Topic 3](kinetic-theory-part3.md)) |
| Mean free path & collision frequency | **λ = 1/(√2 π n d²) = k_B T/(√2 π d² P)**; **f_coll = v_avg / λ** ([Topic 4](kinetic-theory-part4.md)) |

---

## 6 Mixed Synthesis Problems

### Problem 1: Temperature at Which H₂ Molecules Escape Earth!

Earth's escape velocity is v_e = 11.2 km/s (11,200 m/s). At what temperature T would the RMS speed of Hydrogen molecules (M = 2 g/mol = 0.002 kg/mol, R = 8.31 J mol⁻¹ K⁻¹) equal Earth's escape velocity?

**Solution:**
v_rms = √(3 R T / M) = v_e => T = M v_e² / (3 R)
= (0.002 × (11,200)²) / (3 × 8.31)
= (0.002 × 1.2544 × 10⁸) / 24.93 = 250,880 / 24.93 ≈ **10,063 K**!
(Even though Earth's atmosphere is ~300 K, the fast tail of H₂ speeds + high upper-atmosphere temperatures let H₂ slowly leak away over billions of years!)

Jaanch:
- Jaanch: v_rms(H₂) at 300 K is ~1.93 km/s; (11.2 / 1.93)² × 300 ≈ 33.6 × 300 ≈ 10,080 K ✅

---

### Problem 2: Gas Mixture — Partial Pressure + Total Internal Energy + γ_mix

A 0.02 m³ tank at 300 K contains 1 mole of Argon (f = 3) and 2 moles of Oxygen (f = 5) (R = 8.3 J mol⁻¹ K⁻¹). Find: (a) total pressure, (b) total internal energy U, (c) γ_mix of the mixture!

**Solution:**
- (a) Total moles n = 1 + 2 = 3 => P = n R T / V = (3 × 8.3 × 300) / 0.02 = 7470 / 0.02 = **3.735 × 10⁵ Pa**.
- (b) U = [1(3/2) + 2(5/2)] R T = (1.5 + 5.0)(8.3)(300) = 6.5 × 2490 = **16,185 J**.
- (c) C_v(mix) = [1(1.5) + 2(2.5)] R / 3 = (6.5 / 3) R = **(13/6) R**.
  C_p(mix) = (19/6) R => **γ_mix = 19 / 13 ≈ 1.46**.

Jaanch:
- Jaanch: γ_mix = 1.46 lies neatly between O₂ (1.40) and Ar (1.67) ✅

---

### Problem 3: Rotational vs Translational Energy in Diatomic Gas

At what fraction of total internal energy does a rigid diatomic gas store its **rotational** kinetic energy, and what is the rotational KE of 4 moles of N₂ at 300 K (R = 8.3 J mol⁻¹ K⁻¹)?

**Solution:**
- Rigid diatomic: 3 translational + 2 rotational = 5 DOF => Rotational fraction = **2 / 5 (40%)**.
- E_rot = n (2 / 2) R T = 4 × 8.3 × 300 = **9960 J**.

Jaanch:
- Jaanch: Total U = 4(2.5)(2490) = 24,900 J; 40% of 24,900 J = 9960 J ✅

---

### Problem 4: Mean Free Path + RMS Speed Under Isobaric Heating

A gas at constant pressure P₀ is heated from 300 K to 1200 K. Find the factor by which: (a) v_rms changes, (b) mean free path λ changes, (c) collision frequency f_coll changes!

**Solution:**
T becomes 4× at constant P:
- (a) v_rms ∝ √T => **2× (doubles!)**.
- (b) At constant P, λ ∝ T => **4× (quadruples!)**.
- (c) f_coll = v_avg / λ ∝ √T / T = 1 / √T => **1/2 (halves!)**!

Jaanch:
- Jaanch: Gas expands 4× so molecules are much sparser => despite moving 2× faster, collisions per second drop by half! ✅

---

### Problem 5: Total KE of a Moving Box of Gas (Thermal + Bulk!)

A closed insulated box containing n moles of a monatomic ideal gas (molar mass M) moves horizontally at a constant speed v₀ and is suddenly stopped! Assuming all bulk kinetic energy converts into internal energy of the gas, find the rise in temperature ΔT of the gas!

**Solution:**
- Bulk KE of the gas = (1/2) (n M) v₀².
- Increase in internal energy = n C_v ΔT = n (3/2) R ΔT.
Equating the two: (1/2) n M v₀² = (3/2) n R ΔT => **ΔT = M v₀² / (3 R)**!

Jaanch:
- Jaanch: Dimensions: [M][L² T⁻²] / ([M L² T⁻² K⁻¹]) = [K] ✅

---

### Problem 6: Ratio of Pressure to Total Internal Energy Density

Find the ratio P / (U / V) for: (a) a monatomic gas (f = 3), (b) a rigid diatomic gas (f = 5), (c) a non-linear polyatomic gas (f = 6).

**Solution:**
Since P V = n R T and U = (f / 2) n R T => U / V = (f / 2) P => **P / (U / V) = 2 / f = γ - 1**!
- (a) Monatomic: **2 / 3**
- (b) Diatomic: **2 / 5**
- (c) Polyatomic: **2 / 6 = 1 / 3**.

Jaanch:
- Jaanch: Only translational energy (3 DOF) creates pressure, so P/(U/V) shrinks as more energy goes into rotation! ✅

---

## 3 Synthesis Mistakes (Mixed-Problem Traps)

### Galti 1: Diatomic gas ke liye P = (2/3)(U_total / V) laga dena!
- **Galat:** P = (2/3) E_total / V har gas ke liye!
- **Sahi:** P = (2/3) **E_TRANSLATIONAL** / V! Diatomic gas mein E_trans = (3/5) U_total, isliye **P = (2/5) U_total / V**!

### Galti 2: Suddenly-stopped moving gas box mein C_p use kar dena
- **Galat:** (1/2) n M v₀² = n C_p ΔT!
- **Sahi:** Box **closed (constant volume)** aur insulated hai => ΔW = 0, saari bulk KE **ΔU = n C_v ΔT** mein jati hai!

### Galti 3: Isobaric heating mein f_coll badhta hai maan lena
- **Galat:** Garam karne par molecules tez chalte hain toh zyada takrayenge!
- **Sahi:** Constant **volume** par f_coll ∝ √T (badhta hai), par constant **pressure** par gas itna fail jati hai (λ ∝ T) ki **f_coll ∝ 1/√T (GHAT-TA hai)**!

---

## Mixed Practice Questions

*(Take R = 8.3 J mol⁻¹ K⁻¹, k_B = 1.38 × 10⁻²³ J/K unless stated otherwise.)*

### Question 1
Find the ratio of RMS speeds of N₂ (M = 28) and O₂ (M = 32) at the same temperature.

**Solution:**
v_N₂ / v_O₂ = √(32 / 28) = **√(8 / 7) ≈ 1.07**.

Jaanch:
- Jaanch: Lighter N₂ moves ~7% faster than O₂ ✅

---

### Question 2
Find the degrees of freedom f of a gas whose γ = 1.4.

**Solution:**
1 + 2/f = 1.4 => 2/f = 0.4 => **f = 5**.

Jaanch:
- Jaanch: 1 + 2/5 = 7/5 = 1.4 ✅

---

### Question 3
If the RMS speed of a gas at 300 K is 400 m/s, find its RMS speed at 1200 K.

**Solution:**
v ∝ √T => 400 × √(1200 / 300) = 400 × 2 = **800 m/s**.

Jaanch:
- Jaanch: T quadruples => v_rms doubles ✅

---

### Question 4
Find the total internal energy of 3 moles of Helium (f = 3) at 400 K.

**Solution:**
U = 3 × (3/2) × 8.3 × 400 = 4.5 × 3320 = **14,940 J (14.94 kJ)**.

Jaanch:
- Jaanch: 4.5 × 3320 = 14,940 J ✅

---

### Question 5
A gas has mean free path λ = 100 nm at 2 atm and 300 K. Find its mean free path at 1 atm and 600 K.

**Solution:**
λ ∝ T / P => λ₂ = 100 × (600/300) × (2/1) = 100 × 2 × 2 = **400 nm**.

Jaanch:
- Jaanch: T doubles (×2) and P halves (×2) => 4× longer λ ✅

---

### Question 6
Find the pressure of a gas whose translational kinetic energy per unit volume is 3 × 10⁵ J/m³.

**Solution:**
P = (2/3) (E_trans / V) = (2/3)(3 × 10⁵) = **2 × 10⁵ Pa (2 atm)**.

Jaanch:
- Jaanch: (3/2)(2 × 10⁵) = 3 × 10⁵ J/m³ ✅

---

### Question 7
A sealed rigid box of Oxygen gas (M = 0.032 kg/mol, C_v = (5/2) R) moving at 100 m/s is suddenly stopped. Find the rise in temperature ΔT (R = 8.3 J/mol K).

**Solution:**
(1/2) M v₀² = (5/2) R ΔT => ΔT = M v₀² / (5 R) = (0.032 × 10,000) / (5 × 8.3) = 320 / 41.5 ≈ **7.71 K**.

Jaanch:
- Jaanch: 320 / 41.5 ≈ 7.71 K ✅

---

### Question 8
A container has 2 moles of He (f = 3) and 2 moles of H₂ (f = 5). Find γ_mix of the mixture.

**Solution:**
C_v(mix) = (1.5 + 2.5) R / 2 = 2.0 R; C_p(mix) = 3.0 R => **γ_mix = 3 / 2 = 1.50**.

Jaanch:
- Jaanch: Equal moles of 1.5 R and 2.5 R gives 2.0 R => γ = 1.5 ✅

---

### Question 9
Find the average translational KE of 1 molecule of CO₂ at 500 K.

**Solution:**
K_trans = (3/2) k_B T = 1.5 × (1.38 × 10⁻²³) × 500 = **1.035 × 10⁻²⁰ J**.

Jaanch:
- Jaanch: Translational KE is ALWAYS (3/2) k_B T regardless of molecular shape ✅

---

### Question 10
A gas of density 1.5 kg/m³ has RMS speed 400 m/s. Find its pressure in kPa.

**Solution:**
P = (1/3) ρ v_rms² = (1/3)(1.5)(160,000) = 0.5 × 160,000 = **80,000 Pa = 80 kPa**.

Jaanch:
- Jaanch: 0.5 × 160 kPa = 80 kPa ✅

---

### Question 11
State whether the following statements are True or False:
(a) According to Dulong–Petit Law, the molar specific heat of most solid metals at room temperature is approximately 3R.
(b) In an ideal gas mixture at thermal equilibrium, heavier molecules have a higher RMS speed than lighter molecules.

**Solution:**
- (a) **True** ✅ — 3D atomic vibrations give 6 DOF => C = 3R ≈ 25 J mol⁻¹ K⁻¹.
- (b) **False** ❌ — v_rms = √(3RT/M) ∝ 1/√M => **lighter** molecules move faster!

Jaanch:
- Jaanch: Verified from Topics 2 and 3 ✅

---

### Question 12
How many molecules are present in 1 mole of any ideal gas, and what is the ratio R / k_B?

**Solution:**
1 mole contains **N_A = 6.022 × 10²³ molecules**, and **R / k_B = N_A = 6.022 × 10²³ mol⁻¹**!

Jaanch:
- Jaanch: 8.314 / (1.38 × 10⁻²³) ≈ 6.02 × 10²³ mol⁻¹ ✅

---

## Chapter Wrap-up: Kinetic Theory at a Glance

| Topic | Core Formula / Rule | Ek Line Mein Yaad Rakho |
|---|---|---|
| [Topic 1: Molecular Picture](kinetic-theory.md) | PV = nRT = N k_B T; P = ρRT/M; P_total = Σ Pᵢ | Low P, High T => Ideal gas; M MUST be in kg/mol |
| [Topic 2: Pressure & v_rms](kinetic-theory-part2.md) | P = (1/3)ρ v_rms²; K_avg = (3/2)k_B T; v_rms = √(3RT/M) | Same T => same translational KE, lighter gas moves faster |
| [Topic 3: Equipartition](kinetic-theory-part3.md) | U = (f/2)nRT; C_v = (f/2)R; γ = 1 + 2/f; Solids C = 3R | f = 3 (mono), 5 (di-rigid), 7 (di-vib), 6 (poly/solid) |
| [Topic 4: Mean Free Path](kinetic-theory-part4.md) | λ = 1/(√2 π n d²) = k_B T/(√2 π d² P); f_coll = v/λ | Constant V => λ constant; Constant P => λ ∝ T |
| [Topic 5: Mixed & Wrap-up](kinetic-theory-part5.md) | Escape T, gas mixtures, stopped box ΔT | P = (2/3) E_trans/V (NOT E_total for polyatomic!) |

Tumne Kinetic Theory ko microscopic collisions se lekar equipartition aur mean free path tak poori tarah master kar liya hai! Agar Maxwell–Boltzmann speed distribution (v_mp : v_avg : v_rms), Graham's Law of Effusion, aur multi-gas thermal mixing (T_f) dekhna chahte ho, toh [Gehrai Mein — Advanced Level](kinetic-theory-advanced.md) zaroor padho!

**Agle chapter mein:** Thermal physics ke baad ab hum nature ki sabse rhythmic gati ki taraf chalte hain — **Oscillations** mein hum Simple Harmonic Motion (SHM), springs, pendulums, aur energy oscillations ka safar shuru karenge!
