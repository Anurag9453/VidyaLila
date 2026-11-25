> **Class:** 11 | **Subject:** Physics | **Chapter 12:** Kinetic Theory (Part 3)

# Law of Equipartition of Energy, Degrees of Freedom & Specific Heats

> **Pichle topic se:** [Kinetic Pressure & Temperature](kinetic-theory-part2.md) mein humne dekha ki har molecule ki translational KE (3/2) k_B T hoti hai — yani x, y, z teeno independent directions mein exact **(1/2) k_B T** energy bant-ti hai! Boltzmann ne is niyam ko rotation aur vibration par bhi failaya — **Law of Equipartition of Energy** — jisse Chapter 11 ke sabhi C_v, C_p, aur γ values 2 lines mein derive ho jate hain!

---

## Hamsa ka Molecular-Spectroscopy Energy Budget

Hamsa ek molecular-spectroscopy chemist hai. Usne teen gases ko ek hi temperature T par compare kiya:
- **Helium (Monatomic):** Akela gol atom — sirf x, y, z mein chal sakta hai (**3 degrees of freedom**).
- **Nitrogen (Diatomic rigid dumbbell):** 3 translational + 2 rotational (**5 degrees of freedom** — bond axis ke along rotation ka MI negligible!).
- **Water vapour (H₂O, non-linear polyatomic):** 3 translational + 3 rotational (**6 degrees of freedom**)!

Aur **Equipartition Law** kehta hai: Nature kisi bhi degree of freedom ke saath bhedbhav nahi karti — har ek ko barabar **(1/2) k_B T** energy milti hai!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Degrees of Freedom (f) | Kisi molecule ki motion/energy ko poori tarah describe karne ke liye independent coordinates (squared terms in energy) ki sankhya |
| Law of Equipartition of Energy | Thermal equilibrium mein har degree of freedom ko average energy **=(1/2) k_B T** per molecule (ya **(1/2) R T** per mole) milti hai |
| Vibrational Mode | High temperature par atoms spring ki tarah vibrate karte hain — har vibrational mode mein **2 degrees of freedom** (1 KE + 1 PE = **k_B T**) hote hain! |
| Dulong–Petit Law (Solids) | Solid mein har atom 3D mein vibrate karta hai (3×2 = 6 degrees of freedom) => Molar specific heat **C = 3 R ≈ 25 J mol⁻¹ K⁻¹**! |

---

## 1. Master Table: Degrees of Freedom -> C_v, C_p, γ

Total internal energy of 1 mole of gas with **f** degrees of freedom: **U = (f / 2) R T**.
Therefore:
```
  C_v = dU / dT = (f / 2) R     |     C_p = (f / 2 + 1) R     |     γ = C_p / C_v = 1 + 2 / f
```

| Gas Type | Examples | Trans | Rot | Vib | Total f | C_v | C_p | γ = 1 + 2/f |
|---|---|---|---|---|---|---|---|---|
| **Monatomic** | He, Ne, Ar | 3 | 0 | 0 | **3** | (3/2) R | (5/2) R | **5/3 = 1.67** |
| **Diatomic (Rigid, room T)** | H₂, N₂, O₂ | 3 | 2 | 0 | **5** | (5/2) R | (7/2) R | **7/5 = 1.40** |
| **Diatomic (High T, vibrating)** | O₂ at 2000 K | 3 | 2 | 2 | **7** | (7/2) R | (9/2) R | **9/7 = 1.29** |
| **Polyatomic (Non-linear, rigid)** | H₂O, CH₄, NH₃ | 3 | 3 | 0 | **6** | 3 R | 4 R | **4/3 = 1.33** |
| **Solid (Dulong–Petit)** | Cu, Al, Fe | 0 | 0 | 6 | **6** | **3 R** | **3 R** | — |

---

## Solved Examples

### Example 1: Internal Energy of 2 Moles of Oxygen at 300 K

Find the total internal energy of 2 moles of Oxygen gas (diatomic, rigid, f = 5) at 300 K (take R = 8.3 J mol⁻¹ K⁻¹).

**Solution:**
U = n (f / 2) R T = 2 × (5 / 2) × 8.3 × 300 = 5 × 2490 = **12,450 J (12.45 kJ)**.

Jaanch:
- Jaanch: Translational = 3/5 (7470 J) + Rotational = 2/5 (4980 J) = 12,450 J ✅

---

### Example 2: Finding Degrees of Freedom f from γ = 1.33

An ideal gas has γ = 4/3 (≈ 1.33). Find its degrees of freedom f and molar specific heats C_v and C_p in terms of R.

**Solution:**
γ = 1 + 2 / f = 4 / 3 => 2 / f = 1 / 3 => **f = 6** (non-linear polyatomic gas!).
C_v = (6/2) R = **3 R**; C_p = **4 R**.

Jaanch:
- Jaanch: 4R / 3R = 4/3 = 1.33 ✅

---

### Example 3: Total Energy of a Gas Mixture (He + N₂)

A container holds 2 moles of Helium (f = 3) and 3 moles of Nitrogen (f = 5) at temperature T. Find the total internal energy of the mixture in terms of R and T.

**Solution:**
U_total = U_He + U_N₂ = 2 (3/2) R T + 3 (5/2) R T = 3 R T + 7.5 R T = **10.5 R T = (21/2) R T**.

Jaanch:
- Jaanch: 3 + 7.5 = 10.5 R T ✅

---

### Example 4: Specific Heat of Solid Copper via Dulong–Petit Law

Using Dulong–Petit Law (C = 3 R, R = 8.31 J mol⁻¹ K⁻¹), estimate the specific heat capacity per kg of solid Copper (molar mass M = 63.5 g/mol = 0.0635 kg/mol).

**Solution:**
C_molar = 3 × 8.31 = **24.93 J mol⁻¹ K⁻¹**.
Specific heat c = C_molar / M = 24.93 / 0.0635 ≈ **393 J kg⁻¹ K⁻¹** (actual experimental value for Cu is 386 J kg⁻¹ K⁻¹ — remarkably close!).

Jaanch:
- Jaanch: 24.93 / 0.0635 ≈ 392.6 J kg⁻¹ K⁻¹ ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Vibrational mode ko 1 degree of freedom count kar lena
- **Galat:** Diatomic vibrating gas ke f = 3 + 2 + 1 = 6!
- **Sahi:** Har vibrational mode mein **2 quadratic terms** (Kinetic (1/2)mv² + Potential (1/2)kx²) hote hain => **2 degrees of freedom**! So vibrating diatomic has **f = 3 + 2 + 2 = 7**!

### Galti 2: Diatomic gas ke 3 rotational degrees of freedom maan lena
- **Galat:** 3D mein 3 axes hain toh diatomic ke 3 rotational modes honge!
- **Sahi:** Bond ke along rotation ka Moment of Inertia almost zero hota hai, isliye linear/diatomic molecule ke sirf **2 rotational** degrees of freedom hote hain (non-linear polyatomic ke 3 hote hain)!

### Galti 3: Solids ke liye C = (3/2) R likh dena
- **Galat:** Solid atoms 3D mein move karte hain toh (3/2) R!
- **Sahi:** Solid atoms apni jagah 3D mein **vibrate** karte hain (3 KE + 3 PE = 6 degrees of freedom) => **C = 3 R** (Dulong–Petit Law)!

---

## Quick Recap

- **Equipartition:** **(1/2) k_B T** per degree of freedom per molecule; **(1/2) R T** per mole.
- **f values:** Monatomic **3**, Diatomic rigid **5**, Diatomic vibrating **7**, Non-linear polyatomic **6**, Solid **6 (C = 3R)**.
- **Formulas:** C_v = (f/2) R; C_p = (f/2 + 1) R; **γ = 1 + 2 / f**.

---

## Practice Questions

*(Take R = 8.3 J mol⁻¹ K⁻¹ unless stated otherwise.)*

### Question 1
Find the degrees of freedom and γ for Argon (Ar, monatomic) at room temperature.

**Solution:**
f = **3** (purely translational); γ = 1 + 2/3 = **5 / 3 ≈ 1.67**.

Jaanch:
- Jaanch: Monatomic noble gas => f = 3, γ = 5/3 ✅

---

### Question 2
Calculate the rotational kinetic energy of 1 mole of Nitrogen gas (N₂, room temp) at 300 K.

**Solution:**
N₂ has 2 rotational degrees of freedom => E_rot = (2 / 2) R T = R T = 8.3 × 300 = **2490 J**.

Jaanch:
- Jaanch: 2 out of 5 degrees of freedom are rotational => (2/5) of 6225 J = 2490 J ✅

---

### Question 3
If a gas has γ = 9 / 7, find its number of degrees of freedom f.

**Solution:**
1 + 2 / f = 9 / 7 => 2 / f = 2 / 7 => **f = 7** (vibrating diatomic gas!).

Jaanch:
- Jaanch: 1 + 2/7 = 9/7 ✅

---

### Question 4
Find the total internal energy of 1 mole of Helium and 1 mole of Oxygen (rigid) mixed together at temperature T.

**Solution:**
U = (3/2) R T + (5/2) R T = **4 R T**.

Jaanch:
- Jaanch: 1.5 + 2.5 = 4 R T ✅

---

### Question 5
What is the molar specific heat of water (liquid H₂O, 3 atoms per molecule each vibrating in 3D like a solid) estimated by equipartition?

**Solution:**
3 atoms × 3 R per atom = **9 R ≈ 75 J mol⁻¹ K⁻¹** (experimental value for water is 75.4 J mol⁻¹ K⁻¹ — amazing match!).

Jaanch:
- Jaanch: 75.4 / 0.018 kg = 4189 J kg⁻¹ K⁻¹ (exact specific heat of water!) ✅

---

### Question 6
Find the ratio of total internal energy of 1 mole of Oxygen (f = 5) to 1 mole of Argon (f = 3) at the same temperature T.

**Solution:**
U_O₂ / U_Ar = (5/2 R T) / (3/2 R T) = **5 : 3**.

Jaanch:
- Jaanch: Directly proportional to degrees of freedom f ✅

---

### Question 7
A linear triatomic molecule like CO₂ (O=C=O) is rigid at room temperature. How many translational and rotational degrees of freedom does it have? Find its γ.

**Solution:**
Being **linear**, CO₂ has 3 translational + 2 rotational = **5 degrees of freedom** (just like diatomic!).
γ = 1 + 2/5 = **7 / 5 = 1.40**.

Jaanch:
- Jaanch: Linear molecules always have 2 rotational DOF, non-linear have 3 ✅

---

### Question 8
Why does the molar specific heat C_v of Hydrogen (H₂) drop from (5/2) R at room temperature (300 K) down to (3/2) R at very low temperature (50 K)?

**Solution:**
Quantum mechanics ke karan 50 K par thermal energy itni kam hoti hai ki rotational modes "freeze out" (excite nahi ho pate), isliye sirf 3 translational modes active rehte hain => **C_v = (3/2) R**!

Jaanch:
- Jaanch: Equipartition is classical; quantum freezing lowers f at low T ✅

---

### Question 9
Estimate the specific heat capacity (in J kg⁻¹ K⁻¹) of Aluminium (molar mass 27 g/mol = 0.027 kg/mol) using Dulong–Petit Law.

**Solution:**
c = 3 R / M = (3 × 8.31) / 0.027 = 24.93 / 0.027 ≈ **923 J kg⁻¹ K⁻¹** (actual Al value: 900 J kg⁻¹ K⁻¹!).

Jaanch:
- Jaanch: 24.93 / 0.027 ≈ 923 J kg⁻¹ K⁻¹ ✅

---

### Question 10
A gas molecule has 3 translational, 3 rotational, and 1 vibrational mode active. Find its total degrees of freedom f and γ.

**Solution:**
f = 3 + 3 + 2(1) = **8**.
γ = 1 + 2 / 8 = 1 + 1/4 = **5 / 4 = 1.25**.

Jaanch:
- Jaanch: 1 vibrational mode adds 2 DOF => f = 8 ✅

---

### Question 11
State whether the following statements are True or False:
(a) Every vibrational mode contributes (1/2) k_B T to the average energy of a molecule.
(b) For a monatomic gas, all internal energy is purely translational kinetic energy.

**Solution:**
- (a) **False** ❌ — Each vibrational mode has 2 DOF (KE + PE), so it contributes **2 × (1/2) k_B T = k_B T**!
- (b) **True** ✅ — f = 3 translational modes only.

Jaanch:
- Jaanch: Verified from Section 1 ✅

---

### Question 12
Find the heat required to raise the temperature of 2 moles of a non-linear polyatomic gas (f = 6) by 50 K at constant volume (R = 8.3 J mol⁻¹ K⁻¹).

**Solution:**
C_v = 3 R = 24.9 J mol⁻¹ K⁻¹.
Q = n C_v ΔT = 2 × 24.9 × 50 = **2490 J**.

Jaanch:
- Jaanch: 100 × 24.9 = 2490 J ✅

---

Equipartition aur Degrees of Freedom ne poore Thermodynamics ke C_v, C_p, γ ka raaz khol diya!

**Agle topic mein:** Do takkaron ke beech ek molecule bina takraye kitni door chalta hai — chalo padhte hain [Mean Free Path](kinetic-theory-part4.md)!
