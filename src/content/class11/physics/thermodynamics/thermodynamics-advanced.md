> **Class:** 11 | **Subject:** Physics | **Chapter 11:** Thermodynamics (Gehrai Mein — Advanced Level)

# Thermodynamics — Gehrai Mein (Advanced Level)

> **Core chapter se:** Core lessons ([Topic 1](thermodynamics.md) se [Topic 6](thermodynamics-part6.md)) mein humne First & Second Laws, 4 core processes, aur Carnot engine cover kiye. Ab is **Gehrai Mein** section mein hum woh powerful advanced techniques seekhenge jo toughest thermal problems ko 3 lines mein solve kar deti hain — **Polytropic Processes (PV^x = const)**, **Molar Heat Capacity C = C_v + R/(1-x)**, **True Cyclic Efficiency from P–V Loops**, **Free Expansion**, aur **Multi-Gas Mixture γ_mix**!

---

## Rukmini ka Advanced-Thermodynamics Research Lab

Rukmini ek thermodynamics researcher hai. Uske lab mein har process hamesha pure isothermal ya adiabatic nahi hota — aksar gases ek general **Polytropic Process (P V^x = constant)** follow karti hain! Rukmini ka ek hi master formula **C = C_v + R / (1 - x)** poore thermodynamics ke sabhi processes (isobaric x=0, isothermal x=1, adiabatic x=γ, isochoric x=∞) ko ek line mein samet leta hai!

---

## 1. Polytropic Process (P V^x = constant) & Molar Heat Capacity C

Kisi bhi process **P V^x = constant** (jahan x koi bhi real number hai) ke liye:
- **Work Done:** **W = (P₁ V₁ - P₂ V₂) / (x - 1) = n R (T₁ - T₂) / (x - 1)** (for x ≠ 1)
- **Molar Heat Capacity:** First Law ΔQ = ΔU + ΔW ko n ΔT se divide karne par:
```
  C = C_v + R / (1 - x)
```
**Check ALL 4 standard processes in 1 second!**
- Isobaric (x = 0): C = C_v + R = **C_p**!
- Isochoric (x -> ∞): C = C_v + 0 = **C_v**!
- Isothermal (x = 1): C = C_v + R/0 = **∞**!
- Adiabatic (x = γ): C = R/(γ-1) + R/(1-γ) = **0**!

---

## 2. True Efficiency of Any Cyclic Process (η = W_net / Q_in)

Cyclic process ki efficiency **η = W_net / Q_absorbed** nikalne ke liye:
1. Loop ka enclosed area nikalo => **W_net**.
2. Har leg ka **ΔQ = ΔU + W** nikalo, aur **SIRF un legs ko jodo jahan ΔQ > 0 (heat absorbed)** => **Q_in**!
3. **η = W_net / Q_in**!

---

## 3. Free Expansion into Vacuum (Joule's Experiment)

Agar insulated chamber mein partition tod kar ideal gas ko **vacuum** mein expand hone diya jaye:
- Insulated => **ΔQ = 0**
- Expanding against vacuum (P_ext = 0) => **ΔW = 0**
- By First Law => **ΔU = 0** => **T_final = T_initial** (temperature nahi badalta — even though it is adiabatic & irreversible!).

---

## 4. Mixing Two Ideal Gases (C_v,mix & γ_mix)

n₁ moles (C_v1) aur n₂ moles (C_v2) milane par:
```
  C_v(mix) = (n₁ C_v1 + n₂ C_v2) / (n₁ + n₂)
  C_p(mix) = C_v(mix) + R      |      γ_mix = C_p(mix) / C_v(mix) = 1 + R / C_v(mix)
```

---

## 6 Deep Solved Problems

### Problem 1: Polytropic Molar Heat Capacity for P V² = constant

Find the molar heat capacity C of a monatomic ideal gas (C_v = (3/2) R) undergoing the process P V² = constant.

**Solution:**
Here x = 2:
C = C_v + R / (1 - 2) = (3/2) R - R = **(1/2) R**!

Jaanch:
- Jaanch: Notice C = +0.5 R < C_v because gas does negative work when heated (P V² = const => T V = const => heating compresses the gas!) ✅

---

### Problem 2: Process P ∝ V (Straight Line Through Origin on P–V!)

1 mole of a monatomic ideal gas (C_v = 1.5 R) undergoes the process P = k V (straight line through origin on P–V). Find its molar heat capacity C!

**Solution:**
P / V = const => **P V⁻¹ = const** => **x = -1**!
C = C_v + R / (1 - (-1)) = (3/2) R + (1/2) R = **2 R**!

Jaanch:
- Jaanch: Direct check: P V = R T => W = (1/2) R ΔT => ΔQ = 1.5 R ΔT + 0.5 R ΔT = 2 R ΔT => C = 2 R ✅

---

### Problem 3: Exact Efficiency of a Rectangular Monatomic Cycle

1 mole of a monatomic ideal gas (C_v = 1.5 R, C_p = 2.5 R) goes through a clockwise rectangular cycle:
- A (P₀, V₀) -> B (2 P₀, V₀) [isochoric]
- B (2 P₀, V₀) -> C (2 P₀, 2 V₀) [isobaric]
- C (2 P₀, 2 V₀) -> D (P₀, 2 V₀) [isochoric]
- D (P₀, 2 V₀) -> A (P₀, V₀) [isobaric]
Find the exact thermal efficiency η of this cycle!

**Solution:**
- Net work W_net = Enclosed area = (2 P₀ - P₀)(2 V₀ - V₀) = **P₀ V₀**.
- Heat absorbed occurs ONLY in legs **AB** and **BC** (where T increases!):
  - T_A = P₀V₀/R, T_B = 2 P₀V₀/R, T_C = 4 P₀V₀/R.
  - Q_AB = 1 × (3/2) R (T_B - T_A) = **(3/2) P₀ V₀**.
  - Q_BC = 1 × (5/2) R (T_C - T_B) = (5/2)(2 P₀ V₀) = **5 P₀ V₀**.
  - Total heat absorbed Q_in = 1.5 + 5.0 = **6.5 P₀ V₀ = (13/2) P₀ V₀**.
- Efficiency: **η = W_net / Q_in = 1 / 6.5 = 2 / 13 ≈ 15.38%**!

Jaanch:
- Jaanch: Carnot limit between T_min (T_A) and T_max (4 T_A) is 1 - 1/4 = 75%; our rectangular cycle gets 15.4% < 75% ✅

---

### Problem 4: Adiabatic Exponent γ_mix of a Monatomic + Diatomic Mixture

1 mole of Helium (monatomic, C_v1 = 1.5 R) is mixed with 1 mole of Nitrogen (diatomic, C_v2 = 2.5 R). Find C_v(mix), C_p(mix), and γ_mix!

**Solution:**
- C_v(mix) = [1(1.5 R) + 1(2.5 R)] / (1 + 1) = **2.0 R**.
- C_p(mix) = 2.0 R + R = **3.0 R**.
- γ_mix = 3.0 R / 2.0 R = **3 / 2 = 1.50**!

Jaanch:
- Jaanch: Lies cleanly between monatomic (1.67) and diatomic (1.40) ✅

---

### Problem 5: Bulk Modulus of an Ideal Gas (Isothermal vs Adiabatic)

Find the Bulk Modulus B = -V (dP / dV) of an ideal gas during: (a) an isothermal process, (b) an adiabatic process.

**Solution:**
- (a) Isothermal (P V = const => dP/dV = -P/V): **B_isothermal = P**!
- (b) Adiabatic (P V^γ = const => dP/dV = -γ P/V): **B_adiabatic = γ P**!
Ratio **B_adiabatic / B_isothermal = γ** (important in speed of sound in Chapter 14!).

Jaanch:
- Jaanch: Dimensions of P and γ P are both Pa (same as Bulk Modulus B) ✅

---

### Problem 6: Negative Molar Heat Capacity!

For a diatomic gas (C_v = 2.5 R) undergoing P V^x = constant, find the range of x for which its molar heat capacity C is **NEGATIVE** (gas cools down even while absorbing heat!).

**Solution:**
C = 2.5 R + R / (1 - x) < 0.
For this to be negative, (1 - x) must be negative (x > 1) and 1 / (x - 1) > 2.5 = 5/2
=> x - 1 < 2/5 = 0.4 => **1 < x < 1.4** (i.e., strictly between isothermal x = 1 and adiabatic x = γ = 1.4)!

Jaanch:
- Jaanch: Test x = 1.2: C = 2.5 R + R/(-0.2) = 2.5 R - 5 R = -2.5 R < 0 ✅

---

## 3 Advanced Mistakes

### Galti 1: Free expansion (ΔQ = 0) par P V^γ = constant laga dena!
- **Galat:** Free expansion adiabatic hai toh T V^(γ-1) = const se gas thandi ho jayegi!
- **Sahi:** P V^γ = const sirf **REVERSIBLE quasi-static adiabatic** process ke liye hai! Free expansion **irreversible** hai jahan W = 0 => ΔU = 0 => **T stays CONSTANT**!

### Galti 2: Gas mixture mein γ_mix = (n₁ γ₁ + n₂ γ₂) / (n₁ + n₂) likh dena!
- **Galat:** 1 mol He (1.67) + 1 mol N₂ (1.40) => γ_mix = (1.67 + 1.40)/2 = 1.535!
- **Sahi:** **C_v** weighted average hota hai, **γ nahi**! Exact answer is **γ_mix = 1.50** (NOT 1.535)!

### Galti 3: P–V loop efficiency mein negative-Q legs ko bhi Q_in mein jod dena
- **Galat:** Q_in = Q_AB + Q_BC + Q_CD + Q_DA!
- **Sahi:** Q_in mein sirf **positive ΔQ (heat absorbed)** legs aate hain!

---

## Practice Questions (Advanced)

### Question 1
Find the molar heat capacity of a diatomic ideal gas (C_v = 2.5 R) undergoing the process P V³ = constant.

**Solution:**
x = 3 => C = 2.5 R + R / (1 - 3) = 2.5 R - 0.5 R = **2.0 R**.

Jaanch:
- Jaanch: 2.5 - 0.5 = 2.0 R ✅

---

### Question 2
An ideal monatomic gas (C_v = 1.5 R) undergoes a process in which T ∝ V² (so T V⁻² = const). Find its molar heat capacity C!

**Solution:**
From PV = nRT, P V ∝ V² => P V⁻¹ = const => **x = -1**!
C = 1.5 R + R / (1 - (-1)) = 1.5 R + 0.5 R = **2.0 R**.

Jaanch:
- Jaanch: Matches Problem 2 (P ∝ V <=> T ∝ V²) ✅

---

### Question 3
2 moles of a monatomic gas (C_v = 1.5 R) are mixed with 3 moles of a diatomic gas (C_v = 2.5 R). Find γ_mix.

**Solution:**
C_v(mix) = [2(1.5) + 3(2.5)] R / 5 = (3 + 7.5) R / 5 = **2.1 R**.
C_p(mix) = 3.1 R => **γ_mix = 3.1 / 2.1 = 31 / 21 ≈ 1.476**.

Jaanch:
- Jaanch: Between 1.40 and 1.67 ✅

---

### Question 4
An ideal gas at 300 K undergoes free expansion into an evacuated chamber, doubling its volume from V₀ to 2 V₀. Find its final temperature and pressure (if initial pressure was 4 atm).

**Solution:**
Free expansion => ΔU = 0 => **T_final = 300 K**!
By ideal gas law (T constant): P_final = 4 atm / 2 = **2 atm**.

Jaanch:
- Jaanch: Initial and final states satisfy P₁V₁ = P₂V₂ even though the path is irreversible ✅

---

### Question 5
Find the work done by 2 moles of an ideal gas expanding in a polytropic process P V² = constant from T₁ = 400 K to T₂ = 300 K (in terms of R).

**Solution:**
x = 2 => W = n R (T₁ - T₂) / (x - 1) = 2 R (400 - 300) / (2 - 1) = **+200 R**.

Jaanch:
- Jaanch: T drops as V rises (T V = const), so expansion gives positive W = +200 R ✅

---

### Question 6
For a monatomic ideal gas (γ = 5/3), find the range of polytropic index x where C < 0.

**Solution:**
Between isothermal (x = 1) and adiabatic (x = γ = 5/3): **1 < x < 5/3**.

Jaanch:
- Jaanch: At x = 1.5: C = 1.5 R + R/(-0.5) = -0.5 R < 0 ✅

---

### Question 7
Find the adiabatic Bulk Modulus of air (γ = 1.4) at standard atmospheric pressure P = 1.0 × 10⁵ Pa.

**Solution:**
B_adiabatic = γ P = 1.4 × 10⁵ Pa = **1.4 × 10⁵ Pa**.

Jaanch:
- Jaanch: 1.4 × 10⁵ Pa ✅

---

### Question 8
1 mole of a monatomic gas undergoes a process where P = a / V^(1/2) (i.e. P V^(1/2) = const). Find its molar heat capacity C.

**Solution:**
x = 1/2 => C = 1.5 R + R / (1 - 1/2) = 1.5 R + 2 R = **3.5 R**.

Jaanch:
- Jaanch: 1 / 0.5 = 2; 1.5 + 2 = 3.5 R ✅

---

### Question 9
In a V–T diagram (V on y-axis, T on x-axis), two straight lines pass through the origin representing two isobaric processes at pressures P₁ and P₂. If Line 1 has a steeper slope than Line 2, which pressure is LARGER?

**Solution:**
V = (n R / P) T => Slope = **n R / P ∝ 1 / P**!
Steeper slope (Line 1) means **SMALLER pressure** => **P₂ > P₁**!

Jaanch:
- Jaanch: At fixed T, larger V corresponds to lower pressure P ✅

---

### Question 10
A gas absorbs heat Q in a process where its molar heat capacity is C = 3 R. If it is a monatomic ideal gas (C_v = 1.5 R), what fraction of Q goes into doing work W?

**Solution:**
ΔU / ΔQ = C_v / C = 1.5 R / 3 R = 1/2 => W / ΔQ = 1 - 1/2 = **1 / 2 (50%)**.

Jaanch:
- Jaanch: 50% to ΔU and 50% to W ✅

---

### Question 11
Two chambers of volumes V₁ and V₂ contain the same ideal gas at pressures P₁, P₂ and the SAME temperature T. When the connecting valve is opened (insulated walls), find the final equilibrium pressure P_f!

**Solution:**
Total moles conserved (n = n₁ + n₂) at constant T:
P_f (V₁ + V₂) = P₁ V₁ + P₂ V₂ => **P_f = (P₁ V₁ + P₂ V₂) / (V₁ + V₂)**!

Jaanch:
- Jaanch: Volume-weighted average of the two pressures ✅

---

### Question 12
In Problem 3's rectangular cycle (monatomic gas, η = 2/13), what would the efficiency be if the working gas were **diatomic** (C_v = 2.5 R, C_p = 3.5 R) instead?

**Solution:**
- W_net = P₀ V₀ (unchanged!).
- Q_in = Q_AB + Q_BC = 2.5 P₀ V₀ + 3.5 (2 P₀ V₀) = 2.5 + 7.0 = **9.5 P₀ V₀ = (19/2) P₀ V₀**.
- **η = 1 / 9.5 = 2 / 19 ≈ 10.53%** (lower than monatomic's 15.38% because diatomic stores more rotational energy!).

Jaanch:
- Jaanch: Unlike Carnot, a non-Carnot rectangular cycle's efficiency DOES depend on γ! ✅

---

Shabaash! Tumne Thermodynamics ko polytropic processes, exact cyclic efficiencies, free expansion, aur multi-gas mixtures tak conquer kar liya hai. Wapas chapter overview ke liye [Mixed Problems & Chapter Wrap-up](thermodynamics-part6.md) dekho!
