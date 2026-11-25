> **Class:** 11 | **Subject:** Physics | **Chapter 12:** Kinetic Theory

# Molecular Picture of Matter & Behaviour of Ideal Gases

> **Pichle chapter aur pehle ki padhai se:** [Thermodynamics](../thermodynamics/thermodynamics-part6.md) mein humne gas ko ek macroscopic dabbe ki tarah dekha (P, V, T, U). Gas laws ka basic intro tum [Class 9 Gas Laws](../../../class9/chemistry/gas-laws/gas-laws.md) mein dekh chuke ho — ab hum **Kinetic Theory** ke microscope se dekhenge ki andar hazaaron-karodon chhote molecules ki halchal kaise Ideal Gas Law aur Dalton's Law ko janm deti hai!

---

## Alaknanda ka High-Altitude Weather-Balloon Launch

Alaknanda ek atmospheric physicist hai jo stratosphere mein helium weather balloons launch karti hai. Zameen par balloon sirf aadha bhara (flabby) chhoda jata hai — par jaise-jaise woh 30 km upar jata hai, bahari pressure 100 guna kam ho jata hai aur balloon phool kar poora gol ho jata hai!

Alaknanda ne dekha ki kam pressure aur zyada temperature par sabhi real gases (He, N₂, O₂) bilkul ek hi universal rule follow karti hain — **P V = n R T = N k_B T**!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Ideal Gas | Aisi theoretical gas jisme molecules ka apna volume negligible ho aur unke beech koi intermolecular attraction/repulsion na ho |
| Boltzmann Constant (k_B) | Per-molecule gas constant: **k_B = R / N_A = 1.38 × 10⁻²³ J K⁻¹** |
| Number Density (n_num) | Molecules per unit volume: **n_num = N / V = P / (k_B T)** (m⁻³) |
| Dalton's Law of Partial Pressures | Non-reacting gases ke mixture ka total pressure sabhi gases ke partial pressures ka sum hota hai: **P_total = P₁ + P₂ + P₃ + ...** |

---

## 1. Three Useful Forms of the Ideal Gas Equation

1. **Molar Form:** **P V = n R T**  (n = m / M_molar; R = 8.314 J mol⁻¹ K⁻¹)
2. **Molecular Form:** **P V = N k_B T**  (N = total number of molecules; k_B = 1.38 × 10⁻²³ J/K)
   => **P = n_num k_B T**
3. **Density Form:** Since ρ = m / V = n M_molar / V:
   ```
     P = (ρ R T) / M_molar     (M_molar MUST be in kg/mol!)
   ```

**Real Gas -> Ideal Gas Kab Banti Hai?**
Jab **Pressure LOW** aur **Temperature HIGH** ho (molecules ek doosre se bahut door hote hain, toh unka size aur attraction negligible ho jata hai!).

---

## 2. Dalton's Law of Partial Pressures

Volume V aur temperature T mein agar n₁, n₂, n₃ moles of non-reacting gases hon:
```
  P_total = (n₁ + n₂ + n₃) R T / V  =  P₁ + P₂ + P₃
```

---

## Solved Examples

### Example 1: Number of Air Molecules in a Room

Find the number of air molecules in a room of volume 41.4 m³ at 300 K and atmospheric pressure 1.0 × 10⁵ Pa (k_B = 1.38 × 10⁻²³ J/K).

**Solution:**
N = P V / (k_B T) = (1.0 × 10⁵ × 41.4) / (1.38 × 10⁻²³ × 300)
Notice 41.4 / 1.38 = **30**!
N = (30 × 10⁵) / (300 × 10⁻²³) = 0.1 × 10²⁸ = **1.0 × 10²⁷ molecules**!

Jaanch:
- Jaanch: 1.38 × 30 = 41.4; 30/300 = 0.1; 10⁵ / 10⁻²³ = 10²⁸ => 10²⁷ ✅

---

### Example 2: Density of Oxygen Gas at STP

Find the density of oxygen gas (M = 32 g/mol = 0.032 kg/mol) at 1.0 × 10⁵ Pa and 300 K (R = 8.31 J mol⁻¹ K⁻¹).

**Solution:**
ρ = P M / (R T) = (1.0 × 10⁵ × 0.032) / (8.31 × 300) = 3200 / 2493 ≈ **1.28 kg/m³**.

Jaanch:
- Jaanch: Air density is ~1.2 kg/m³; slightly heavier O₂ is ~1.28 kg/m³ ✅

---

### Example 3: Dalton's Law — Mixture of Oxygen and Nitrogen

A 10 L (0.01 m³) tank at 300 K contains 1 mole of O₂ and 3 moles of N₂ (R = 8.3 J mol⁻¹ K⁻¹). Find the partial pressure of each gas and the total pressure.

**Solution:**
- P_O₂ = (1 × 8.3 × 300) / 0.01 = **2.49 × 10⁵ Pa**.
- P_N₂ = (3 × 8.3 × 300) / 0.01 = **7.47 × 10⁵ Pa**.
- P_total = 2.49 + 7.47 = **9.96 × 10⁵ Pa** (≈ 10 atm!).

Jaanch:
- Jaanch: Total moles = 4 => 4 × 2.49 × 10⁵ = 9.96 × 10⁵ Pa ✅

---

### Example 4: Gas Leaking Out of an Open Vessel When Heated

An open vessel contains air at 27 °C (300 K). To what temperature must it be heated so that 1/3 of the air escapes out (at constant pressure and constant vessel volume)?

**Solution:**
At constant P and V, P V = n R T => **n T = constant**!
1/3 escapes => remaining moles n₂ = (2/3) n₁.
n₁ T₁ = (2/3) n₁ T₂ => T₂ = (3/2) T₁ = (3/2)(300) = **450 K (177 °C)**!

Jaanch:
- Jaanch: Higher T => fewer moles fit in same V at same P (n₁(300) = (2/3)n₁(450)) ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Density formula P = ρ R T / M mein molar mass M ko grams/mol mein rakh dena
- **Galat:** O₂ ke liye M = 32 rakh diya!
- **Sahi:** SI units mein M hamesha **kg/mol** mein rakho: O₂ ke liye **M = 0.032 kg/mol**!

### Galti 2: High Pressure aur Low Temperature ko Ideal Gas condition bol dena
- **Galat:** Gas dabane (high P) aur thanda karne (low T) se ideal banti hai!
- **Sahi:** Ulta! High P aur low T par molecules chipak kar **liquid** banne lagte hain! Real gases **LOW Pressure aur HIGH Temperature** par ideal behavior dikhati hain!

### Galti 3: Avogadro's Number N_A aur Total Molecules N ko confuse karna
- **Galat:** P V = N_A k_B T har sample ke liye!
- **Sahi:** N_A k_B = R sirf **1 mole** ke liye hai; general sample ke liye **P V = N k_B T = n N_A k_B T**!

---

## Quick Recap

- **Ideal Gas Law:** P V = n R T = N k_B T; **P = ρ R T / M** (M in kg/mol, T in Kelvin!).
- **Boltzmann constant:** k_B = R / N_A = 1.38 × 10⁻²³ J/K.
- **Ideal limit:** Low Pressure, High Temperature.
- **Dalton's Law:** P_total = P₁ + P₂ + ... (non-reacting gases).

---

## Practice Questions

*(Take R = 8.31 J mol⁻¹ K⁻¹, k_B = 1.38 × 10⁻²³ J/K, N_A = 6.02 × 10²³ mol⁻¹ unless stated otherwise.)*

### Question 1
Find the volume occupied by 1 mole of any ideal gas at STP (P = 1.013 × 10⁵ Pa, T = 273 K).

**Solution:**
V = (1 × 8.31 × 273) / (1.013 × 10⁵) = 2268.6 / 101,300 ≈ **0.0224 m³ = 22.4 litres**.

Jaanch:
- Jaanch: Standard molar volume = 22.4 L at STP ✅

---

### Question 2
Find the number density (molecules per m³) of an ideal gas at P = 1.38 × 10⁵ Pa and T = 500 K.

**Solution:**
n_num = P / (k_B T) = (1.38 × 10⁵) / (1.38 × 10⁻²³ × 500) = 10²⁸ / 500 = **2 × 10²⁵ molecules/m³**.

Jaanch:
- Jaanch: 1.38 cancels cleanly; 10⁵ / (500 × 10⁻²³) = 2 × 10²⁵ ✅

---

### Question 3
A vessel contains 2 moles of He and 3 moles of Ar at a total pressure of 10 atm. Find the partial pressure of Helium.

**Solution:**
P_He = (n_He / n_total) P_total = (2 / 5) × 10 = **4 atm**.

Jaanch:
- Jaanch: P_Ar = 6 atm; 4 + 6 = 10 atm ✅

---

### Question 4
An open flask containing air at 27 °C is heated until half of the air escapes. Find the final temperature in °C.

**Solution:**
n₁ T₁ = (n₁ / 2) T₂ => T₂ = 2 T₁ = 2 × 300 = 600 K = **327 °C**.

Jaanch:
- Jaanch: Doubling Kelvin temperature halves the number of moles at constant P, V ✅

---

### Question 5
Compare the densities of Nitrogen (M = 28 g/mol) and Hydrogen (M = 2 g/mol) at the same temperature and pressure.

**Solution:**
ρ = P M / (R T) ∝ M => ρ_N₂ / ρ_H₂ = 28 / 2 = **14 : 1**.

Jaanch:
- Jaanch: Same P, T => denser gas has larger molar mass ✅

---

### Question 6
A scuba tank of volume 0.02 m³ holds oxygen at 1.5 × 10⁷ Pa and 300 K. How many moles of oxygen are inside? (Take R = 8.3 J/mol K.)

**Solution:**
n = P V / (R T) = (1.5 × 10⁷ × 0.02) / (8.3 × 300) = 300,000 / 2490 ≈ **120.5 moles**.

Jaanch:
- Jaanch: 3 × 10⁵ / 2490 ≈ 120.5 mol ✅

---

### Question 7
Two equal volumes of gas at the same temperature T and pressures 2 atm and 6 atm are connected by a thin tube. Find the final equilibrium pressure (at constant T).

**Solution:**
P_f (V + V) = 2 V + 6 V = 8 V => **P_f = 4 atm**.

Jaanch:
- Jaanch: Average of 2 atm and 6 atm is 4 atm ✅

---

### Question 8
If the density of a gas at 300 K and 1 atm is 1.2 kg/m³, find its density at 600 K and 4 atm.

**Solution:**
ρ ∝ P / T => ρ₂ = 1.2 × (4 / 1) × (300 / 600) = 1.2 × 4 × (1/2) = **2.4 kg/m³**.

Jaanch:
- Jaanch: P ×4 and T ×2 => net ρ ×2 ✅

---

### Question 9
Under what conditions of pressure and temperature does a real gas behave most closely like an ideal gas?

**Solution:**
At **Low Pressure** and **High Temperature**.

Jaanch:
- Jaanch: Large separation makes molecular size and intermolecular forces negligible ✅

---

### Question 10
A weather balloon has volume 5 m³ at ground level (P = 1.0 × 10⁵ Pa, T = 300 K). At high altitude where P = 0.2 × 10⁵ Pa and T = 240 K, what is its new volume?

**Solution:**
P₁ V₁ / T₁ = P₂ V₂ / T₂ => (1.0 × 5) / 300 = (0.2 × V₂) / 240
V₂ = (5 / 0.2) × (240 / 300) = 25 × 0.8 = **20 m³**.

Jaanch:
- Jaanch: Pressure dropped 5× (×5 vol) while T dropped to 0.8 (×0.8 vol) => 5 × 4 = 20 m³ ✅

---

### Question 11
State whether the following statements are True or False:
(a) At the same temperature and pressure, equal volumes of all ideal gases contain the same number of molecules.
(b) The Boltzmann constant k_B equals R × N_A.

**Solution:**
- (a) **True** ✅ — Avogadro's Law (N = PV / (k_B T))!
- (b) **False** ❌ — **k_B = R / N_A** (R divided by N_A, NOT multiplied!).

Jaanch:
- Jaanch: R = 8.314, N_A = 6.02 × 10²³ => k_B = 1.38 × 10⁻²³ J/K ✅

---

### Question 12
Estimate the total number of molecules in 1 cm³ (10⁻⁶ m³) of an ideal gas at 300 K and 1.38 × 10⁵ Pa.

**Solution:**
N = (1.38 × 10⁵ × 10⁻⁶) / (1.38 × 10⁻²³ × 300) = 10²² / 300 ≈ **3.33 × 10¹⁹ molecules**.

Jaanch:
- Jaanch: ~3 × 10¹⁹ molecules in just 1 cubic centimetre of air! ✅

---

Ideal gas laws ka molecular picture ab tumhare samne clear hai!

**Agle topic mein:** Molecules ki deewar se takkar kaise **Pressure (P = (1/3) ρ v_rms²)** banati hai aur **Temperature = Average Kinetic Energy** kaise prove hota hai — chalo padhte hain [Kinetic Theory Pressure, Temperature & RMS Speed](kinetic-theory-part2.md)!
