> **Class:** 12 | **Subject:** Chemistry | **Chapter 1:** Solutions (Gehrai Mein — Advanced Level)

# Solutions — Gehrai Mein (Advanced Level)

> **Core chapter se:** Core lessons ([Topic 1](solutions.md) se [Topic 6](solutions-part6.md)) mein humne concentration units, Henry's law, Raoult's law, colligative properties aur van't Hoff factor cover kiye. Ab is **Gehrai Mein** section mein hum chaar elite physical-chemistry tools dekhenge — **Total Pressure in Terms of Vapour-Phase Mole Fractions (1 / P_total = y_A/p_A° + y_B/p_B°)**, **Freezing Out Pure Ice from a Cooling Solution**, **Thermodynamic Expressions for K_b and K_f**, aur **Mixed-Electrolyte Osmotic Pressure & Common-Ion Effects**!

---

## Dileep ka Chemical-Thermodynamics Lab

**Dileep** ek physical-chemistry researcher hai. Uske distillation & cryoscopy lab mein yeh chaar advanced formulas roz kaam aate hain:
1. Agar tumhein liquid mole fractions (x_A, x_B) nahi, balki **vapour-phase mole fractions (y_A, y_B)** diye hon, to total pressure seedha **1 / P_total = y_A / p_A° + y_B / p_B°** se milta hai!
2. Jab kisi salt/glycol solution ko uske freezing point se **aur neeche** thanda kiya jaata hai, to **pure ice** jam kar alag hoti hai — aur bache hue liquid ka concentration badhta jaata hai!
3. **K_b** aur **K_f** random numbers nahi hain — yeh pure solvent ke **ΔH_vap** aur **ΔH_fus** se seedha calculate kiye ja sakte hain!

---

## 1. Total Pressure from Vapour-Phase Composition (y_A, y_B)

Raoult's law + Dalton's law: **x_A = p_A / p_A° = (y_A P_total) / p_A°**, aur **x_B = (y_B P_total) / p_B°**.
Since **x_A + x_B = 1**:

```
   1 / P_total = (y_A / p_A°) + (y_B / p_B°)
```

---

## 2. Freezing Out of Pure Ice Below the Freezing Point

Jab mass **W₀** solvent (containing **n_B** moles of non-volatile solute) ko temperature **T_f** (depression **ΔT_f = T_f° − T_f**) tak cool kiya jaata hai, to sirf **W_rem** kg liquid water bachta hai jiska freezing point exact T_f ho:
- **ΔT_f = i K_f (n_B / W_rem)** ⟹ **W_rem = (i K_f n_B) / ΔT_f**!
- **Mass of Pure Ice Separated Out:**

```
   W_ice = W₀ − W_rem
```

---

## 3. Thermodynamic Formulas for K_b and K_f

Clausius-Clapeyron thermodynamics se pure solvent (molar mass **M_A** in **g/mol**, boiling point **T_b°**, freezing point **T_f°**, molar enthalpies **ΔH_vap** & **ΔH_fus** in J/mol):

```
   K_b = (R M_A (T_b°)²) / (1000 ΔH_vap)      |      K_f = (R M_A (T_f°)²) / (1000 ΔH_fus)
```

*(Note: K_b aur K_f sirf **solvent** ki properties hain, solute ki nahi!)*

---

## 4. Mixed-Electrolyte Osmotic Pressure

Agar volume V₁ (molarity M₁, factor i₁) aur volume V₂ (molarity M₂, factor i₂) ke do non-reacting solutions milaye jaayein:

```
   π_mix = [ (i₁ M₁ V₁ + i₂ M₂ V₂) / (V₁ + V₂) ] × R T
```

---

## 5 Deep Solved Problems

### Problem 1: Total Pressure from Vapour-Phase Composition
An ideal solution of A (**p_A° = 100 mm Hg**) and B (**p_B° = 200 mm Hg**) has equal mole fractions in the **vapour phase** (**y_A = 0.5, y_B = 0.5**). Find (a) **P_total**, and (b) liquid mole fraction **x_A**!

**Solution:**
- (a) 1 / P_total = 0.5 / 100 + 0.5 / 200 = 0.005 + 0.0025 = 0.0075 = 3 / 400
  ⟹ **P_total = 400 / 3 ≈ 133.3 mm Hg**.
- (b) **x_A = (y_A P_total) / p_A° = (0.5 × 400/3) / 100 = 2 / 3 ≈ 0.667**!
- Jaanch: P = 100(2/3) + 200(1/3) = 400/3 ≈ 133.3 mm Hg ✅.

### Problem 2: Mass of Ice Separating Out on Cooling
A solution containing **62 g of ethylene glycol** (molar mass **62 g/mol**) in **250 g of water** is cooled to **−9.3 °C** (**ΔT_f = 9.3 K**, **K_f = 1.86 K kg/mol**). Calculate the mass of **pure ice** that separates out!

**Solution:**
- n_B = 62 / 62 = **1.0 mol** (non-electrolyte, i = 1).
- Remaining liquid water at −9.3 °C:
  **W_rem = (K_f n_B) / ΔT_f = (1.86 × 1.0) / 9.3 = 0.20 kg = 200 g**!
- Ice separated out: **W_ice = 250 − 200 = 50 g**!
- Jaanch: 1.0 mol in 0.20 kg = 5.0 m ⟹ ΔT_f = 1.86 × 5.0 = 9.3 K ✅.

### Problem 3: Mixed-Electrolyte Osmotic Pressure
**100 mL of 0.1 M NaCl** (i = 2) is mixed with **100 mL of 0.2 M glucose** (i = 1) at **300 K**. Calculate the osmotic pressure of the resulting mixture (R = 0.0821 L atm/(mol K)).

**Solution:**
- Effective concentration: C_eff = (2 × 0.1 × 100 + 1 × 0.2 × 100) / (100 + 100) = (20 + 20) / 200 = **0.20 M**.
- **π_mix = 0.20 × 0.0821 × 300 = 4.926 atm**.
- Jaanch: Both had identical effective molarity 0.20 M (isotonic!), so mixing keeps C_eff = 0.20 M ✅.

### Problem 4: Exact RLVP Formula vs Dilute Approximation
Show why **(p° − p) / p = n_B / n_A** (dividing by **p** instead of **p°**) is **100% exact** at ALL concentrations (not just dilute solutions!).

**Solution:**
- Exact Raoult's law: p / p° = x_A = n_A / (n_A + n_B).
- Take reciprocal: p° / p = (n_A + n_B) / n_A = 1 + n_B / n_A ⟹
  **(p° − p) / p = n_B / n_A** (exact for ANY concentration!).
- Jaanch: Check n_A = 1, n_B = 1: p = 0.5 p° ⟹ (p° − 0.5 p°)/(0.5 p°) = 1 = n_B/n_A ✅.

### Problem 5: Computing K_f of Water from Latent Heat of Fusion
Given **T_f° = 273 K**, **M_A = 18 g/mol**, **R = 8.314 J/(mol K)**, and **ΔH_fus = 6000 J/mol**, compute **K_f** of water!

**Solution:**
- K_f = (8.314 × 18 × 273²) / (1000 × 6000) = (149.65 × 74529) / (6 × 10⁶) = (1.115 × 10⁷) / (6 × 10⁶) ≈ **1.86 K kg/mol**!
- Jaanch: Matches the standard experimental value 1.86 K kg/mol exactly! ✅.

---

## 10 Advanced Practice Questions

1. Two ideal liquids A (p_A° = 300 mm Hg) and B (p_B° = 600 mm Hg) have y_A = 0.5 and y_B = 0.5 in the vapour phase. Find P_total and x_A.
2. 31 g of ethylene glycol (molar mass 62 g/mol) is dissolved in 200 g of water and cooled to −9.3 °C (K_f = 1.86 K kg/mol). Find the mass of ice separated out.
3. 200 mL of 0.1 M BaCl₂ (i = 3) is mixed with 300 mL of 0.2 M NaCl (i = 2) at 300 K. Find the effective molar concentration C_eff of the mixture.
4. For a non-volatile solute dissolved in a solvent, p° = 100 mm Hg and p = 80 mm Hg. Using the exact formula (p° − p)/p = n_B/n_A, find n_B if n_A = 4.0 mol.
5. Why does K_f of a solvent depend on the square of its freezing point (T_f°)² and inversely on ΔH_fus?
6. A solution of urea in water boils at 100.104 °C (K_b = 0.52 K kg/mol). Calculate its freezing point (K_f = 1.86 K kg/mol).
7. At 25 °C, a 0.1 M aqueous solution of a weak monobasic acid HA has osmotic pressure 2.71 atm (assume RT = 24.63 L atm/mol). Find its degree of dissociation α.
8. Two solutions of the same non-electrolyte with osmotic pressures π₁ = 2 atm and π₂ = 6 atm are mixed in equal volumes at constant temperature. Find π_mix.
9. When 1 mole of HgI₂ is added to 1 kg of a 2 m aqueous KI solution, the freezing point **rises** instead of falling! Explain why using complex formation (HgI₂ + 2 I⁻ → [HgI₄]²⁻).
10. What is the van't Hoff factor i for 100% ionisation of K₂[HgI₄] in dilute aqueous solution?

### Solutions

1. 1/P_total = 0.5/300 + 0.5/600 = 1/600 + 1/1200 = 3/1200 = 1/400 ⟹ **P_total = 400 mm Hg**.
   x_A = (0.5 × 400) / 300 = **2/3 ≈ 0.667**.
   Jaanch: 300(2/3) + 600(1/3) = 200 + 200 = 400 mm Hg ✅.

2. n_B = 31 / 62 = 0.50 mol.
   W_rem = (1.86 × 0.50) / 9.3 = 0.93 / 9.3 = **0.10 kg = 100 g**.
   Ice separated = 200 − 100 = **100 g**!
   Jaanch: 0.50 mol in 0.10 kg = 5 m ⟹ ΔT_f = 9.3 K ✅.

3. C_eff = (3 × 0.1 × 200 + 2 × 0.2 × 300) / (200 + 300) = (60 + 120) / 500 = 180 / 500 = **0.36 M**.
   Jaanch: 180 / 500 = 0.36 M ✅.

4. (100 − 80) / 80 = 20 / 80 = 1/4 = n_B / 4.0 ⟹ **n_B = 1.0 mol**!
   Jaanch: x_A = 4/(4+1) = 0.8 ⟹ p = 0.8 × 100 = 80 mm Hg ✅.

5. From thermodynamics, **K_f = R M_A (T_f°)² / (1000 ΔH_fus)** — higher ΔH_fus means harder to melt/freeze, so smaller K_f!

6. m = ΔT_b / K_b = 0.104 / 0.52 = **0.20 mol/kg**.
   ΔT_f = K_f × m = 1.86 × 0.20 = **0.372 K** ⟹ **T_f = −0.372 °C**.
   Jaanch: Ratio ΔT_f / ΔT_b = 1.86 / 0.52; 0.104 × 1.86 / 0.52 = 0.372 K ✅.

7. i = π / (C R T) = 2.71 / (0.1 × 24.63) = 2.71 / 2.463 ≈ **1.10**.
   α = (i − 1) / (2 − 1) = **0.10 = 10%**.
   Jaanch: 1.1 × 2.463 = 2.709 ≈ 2.71 atm ✅.

8. Equal volumes ⟹ simple average: **π_mix = (2 + 6) / 2 = 4.0 atm**.
   Jaanch: (2 + 6)/2 = 4.0 atm ✅.

9. 2 I⁻ ions combine with HgI₂ to form 1 single complex ion [HgI₄]²⁻ — total number of solute particles **DECREASES** ⟹ ΔT_f decreases ⟹ freezing point **RISES**!

10. K₂[HgI₄] → 2 K⁺ + [HgI₄]²⁻ ⟹ **3 ions (i = 3)**!

---

Shabaash! Tumne Vapour-Phase Composition, Ice Separation, Thermodynamic K_f/K_b aur Mixed-Electrolyte Osmotic Pressure tak conquer kar liye hain! Wapas chapter overview ke liye [Mixed Problems & Chapter Wrap-up](solutions-part6.md) dekho!
