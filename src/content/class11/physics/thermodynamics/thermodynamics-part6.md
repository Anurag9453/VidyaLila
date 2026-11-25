> **Class:** 11 | **Subject:** Physics | **Chapter 11:** Thermodynamics (Part 6)

# Sab Kuch Mila Kar: Mixed Problems & Chapter Wrap-up

> **Pichle topic se:** [Reversible Processes & Carnot Engine](thermodynamics-part5.md) mein humne Carnot efficiency 1 - T₂/T₁ seekhi. Ab chalo poore Thermodynamics chapter ke sabhi tools — Zeroth Law, First Law, Mayer's Relation, 4 Core Processes, P–V Loops, Second Law, aur Carnot Engines — ko ek saath mila kar multi-concept challenges solve karte hain!

---

## Lumbini ka Energy-Systems & Cycle-Analysis Desk

Lumbini ek Energy-Systems Chief hai. Uske desk par har din cyclic P–V loops, adiabatic vs isothermal compression comparisons, aur Carnot efficiency audits aate hain! Lumbini ka **Decision Map** har thermodynamics problem ka fastest rasta dikha deta hai.

---

## Decision Map: Kaun Sa Thermodynamics Tool Kab Lagayein?

| Problem mein kya dikhe? | Kaun sa tool lagao? |
|---|---|
| P–V graph work (open or closed loop) | **W = Area**; Clockwise = **+Area**, Anticlockwise = **-Area**; **ΔU_cycle = 0** ([Topic 1](thermodynamics.md)) |
| Heat, Work, ΔU, C_p, C_v, γ | **ΔQ = ΔU + ΔW**; **ΔU = n C_v ΔT** (ALWAYS!); **C_p - C_v = R** ([Topic 2](thermodynamics-part2.md)) |
| Specific process (isochoric/isobaric/isothermal/adiabatic) | Isothermal: **PV=const, W=nRT ln(V₂/V₁)**; Adiabatic: **PV^γ=const, W=(P₁V₁-P₂V₂)/(γ-1)** ([Topic 3](thermodynamics-part3.md)) |
| Heat Engine / Refrigerator / Heat Pump | **η = W/Q₁ = 1 - Q₂/Q₁**; **α = Q₂/W**; **COP_pump = 1 + α** ([Topic 4](thermodynamics-part4.md)) |
| Maximum possible efficiency / Carnot | **η_C = 1 - T₂/T₁**; **α_C = T₂/(T₁-T₂)** (T in Kelvin!) ([Topic 5](thermodynamics-part5.md)) |

---

## 6 Mixed Synthesis Problems

### Problem 1: Full First-Law Audit of a Triangular P–V Cycle

An ideal gas undergoes a clockwise triangular cycle A -> B -> C -> A:
- A (1 L, 1 × 10⁵ Pa) -> B (1 L, 4 × 10⁵ Pa) [isochoric heating]
- B (1 L, 4 × 10⁵ Pa) -> C (5 L, 1 × 10⁵ Pa) [linear expansion]
- C (5 L, 1 × 10⁵ Pa) -> A (1 L, 1 × 10⁵ Pa) [isobaric compression]
Find: (a) work done in each leg, (b) net work W_net, (c) net heat ΔQ_net absorbed in one cycle!

**Solution:**
- Leg AB (isochoric): **W_AB = 0 J**.
- Leg BC (trapezoid): W_BC = (1/2)(4 + 1) × 10⁵ × (4 × 10⁻³) = 2.5 × 400 = **+1000 J**.
- Leg CA (isobaric compression): W_CA = (1 × 10⁵)(-4 × 10⁻³) = **-400 J**.
- (b) Net work: W_net = 0 + 1000 - 400 = **+600 J** (Check triangle area = (1/2)(4 L)(3 × 10⁵ Pa) = +600 J!).
- (c) Since ΔU_cycle = 0 => **ΔQ_net = W_net = +600 J**!

Jaanch:
- Jaanch: Sum of leg works (+600 J) matches enclosed clockwise triangle area (+600 J) ✅

---

### Problem 2: Isobaric Heating -> Adiabatic Expansion (Two-Stage Gas Process)

1 mole of a monatomic ideal gas (γ = 5/3, R = 8.3 J mol⁻¹ K⁻¹) at 300 K is first heated isobarically to 400 K, and then expanded adiabatically back to 300 K! Find the total work done by the gas over both stages.

**Solution:**
- Stage 1 (Isobaric, 300 K -> 400 K): W₁ = n R ΔT = 1 × 8.3 × 100 = **+830 J**.
- Stage 2 (Adiabatic, 400 K -> 300 K): W₂ = n R (T₁ - T₂) / (γ - 1) = 830 / (2/3) = **+1245 J**.
- Total Work W = 830 + 1245 = **+2075 J**!

Jaanch:
- Jaanch: Since start T = end T = 300 K, net ΔU = 0 => total heat absorbed in Stage 1 = n C_p ΔT = (5/2)(830) = 2075 J = total work! ✅

---

### Problem 3: Carnot Engine Driving a Carnot Refrigerator

A Carnot engine works between 600 K and 300 K, absorbing 1000 J from the 600 K source. Its entire mechanical work output W drives a Carnot refrigerator operating between 250 K and 300 K. How much heat Q₂ does the refrigerator remove from the 250 K cold box?

**Solution:**
- Engine efficiency: η = 1 - 300 / 600 = 0.50 => W = 0.50 × 1000 = **500 J**.
- Refrigerator COP: α = 250 / (300 - 250) = 250 / 50 = **5.0**.
- Heat removed from cold box: Q₂ = α × W = 5.0 × 500 = **2500 J**!

Jaanch:
- Jaanch: 1000 J hot fuel -> 500 J work -> removes 2500 J from freezer! ✅

---

### Problem 4: Adiabatic vs Isothermal Pressure Comparison After Compression

Two identical samples of a diatomic gas (γ = 1.4) at pressure P₀ and volume V₀ are compressed to volume V₀ / 2 — Sample A isothermally and Sample B adiabatically. Find the ratio P_B / P_A of their final pressures (take 2^(0.4) ≈ 1.32).

**Solution:**
- Sample A (Isothermal): P_A = 2 P₀.
- Sample B (Adiabatic): P_B = 2^(1.4) P₀ = 2 × 2^(0.4) P₀ ≈ 2.64 P₀.
- Ratio P_B / P_A = 2^(0.4) ≈ **1.32** (adiabatic final pressure is 32% higher!).

Jaanch:
- Jaanch: Adiabatic curve is steeper, so compressing to V₀/2 shoots pressure higher than isothermal ✅

---

### Problem 5: Finding γ from Isobaric Work Fraction

When an ideal gas is heated at constant pressure, 25% of the supplied heat is converted into external work. Find the adiabatic exponent γ and identify the type of gas!

**Solution:**
W / ΔQ = 1 - 1 / γ = 0.25 = 1 / 4
=> 1 / γ = 3 / 4 => **γ = 4 / 3 ≈ 1.33** (a non-linear **polyatomic** gas like CH₄ or H₂O vapour!).

Jaanch:
- Jaanch: C_v = 3R, C_p = 4R => W/ΔQ = R/(4R) = 1/4 = 25% ✅

---

### Problem 6: Efficiency of a Real Engine Compared to Carnot Limit

A real heat engine operates between 527 °C (800 K) and 127 °C (400 K). It absorbs 2000 J per cycle and does 600 J of work. Find: (a) its actual efficiency, (b) the Carnot limit between these temperatures, (c) what percentage of the Carnot limit it achieves.

**Solution:**
- (a) Actual η = 600 / 2000 = **30%**.
- (b) Carnot limit η_C = 1 - 400 / 800 = **50%**.
- (c) Relative performance = 30% / 50% = **60% of the Carnot limit**.

Jaanch:
- Jaanch: 30% < 50% (physically possible!) ✅

---

## 3 Synthesis Mistakes (Mixed-Problem Traps)

### Galti 1: Cyclic efficiency ko W_net / ΔQ_net likh kar hamesha 100% bana dena!
- **Galat:** ΔU_cycle = 0 => W_net = ΔQ_net => η = W_net / ΔQ_net = 100%!
- **Sahi:** Efficiency ka denominator sirf **Q_absorbed (positive heat IN)** hota hai, net heat nahi! **η = W_net / Q_in = (Q_in - Q_out) / Q_in < 100%**!

### Galti 2: Two-stage process mein ΔU_total nikalne ke liye har stage alag-alag compute karna jab T_start = T_end
- **Galat:** Lamba calculation karke error kar dena!
- **Sahi:** U state function hai — agar final temperature initial temperature ke barabar hai, toh **ΔU_total = 0** (turant!)!

### Galti 3: Adiabatic vs Isothermal expansion mein same final temperature maan lena
- **Galat:** Dono V₀ se 2V₀ expand hui toh final T same hoga!
- **Sahi:** Isothermal mein T constant rehta hai, jabki Adiabatic expansion mein gas **thandi (T_f < T_i)** ho jati hai!

---

## Mixed Practice Questions

*(Take R = 8.3 J mol⁻¹ K⁻¹, 1 atm = 10⁵ Pa unless stated otherwise.)*

### Question 1
A gas absorbs 400 J of heat and expands doing 150 J of work. Find ΔU.

**Solution:**
ΔU = 400 - 150 = **+250 J**.

Jaanch:
- Jaanch: 250 + 150 = 400 J ✅

---

### Question 2
A Carnot engine operates between 727 °C and 227 °C. Find its efficiency.

**Solution:**
T₁ = 1000 K, T₂ = 500 K => η = 1 - 500/1000 = **50%**.

Jaanch:
- Jaanch: 1 - 1/2 = 50% ✅

---

### Question 3
2 moles of a monatomic ideal gas (C_v = (3/2) R) are heated isobarically by 50 K. Find the work done by the gas (in terms of R).

**Solution:**
W = n R ΔT = 2 R (50) = **100 R** (≈ 830 J).

Jaanch:
- Jaanch: Isobaric work depends only on n, R, ΔT ✅

---

### Question 4
A clockwise rectangular cycle on a P–V diagram spans P from 2 atm to 5 atm and V from 1 L to 4 L. Find the net heat absorbed in one cycle.

**Solution:**
ΔQ_net = W_net = (3 × 10⁵)(3 × 10⁻³) = **+900 J**.

Jaanch:
- Jaanch: 3 × 3 × 10² = 900 J ✅

---

### Question 5
A monatomic gas (γ = 5/3) at 400 K expands adiabatically to 8 times its volume. Find its final temperature.

**Solution:**
T₂ = 400 / (8^(2/3)) = 400 / 4 = **100 K**.

Jaanch:
- Jaanch: 8^(2/3) = 4; 400/4 = 100 K ✅

---

### Question 6
Find the COP of a Carnot refrigerator operating between 270 K and 300 K.

**Solution:**
α = 270 / (300 - 270) = 270 / 30 = **9.0**.

Jaanch:
- Jaanch: 270 / 30 = 9 ✅

---

### Question 7
An ideal gas is compressed isothermally at 300 K while 500 J of work is done ON the gas. How much heat is released by the gas?

**Solution:**
Isothermal => ΔU = 0 => ΔQ = ΔW = -500 J => **500 J of heat is released**!

Jaanch:
- Jaanch: Work done on gas leaves completely as heat to keep T constant ✅

---

### Question 8
A diatomic gas (γ = 7/5) absorbs 700 J of heat at constant pressure. Find the increase in its internal energy ΔU.

**Solution:**
ΔU = ΔQ / γ = 700 / (7/5) = **500 J** (and W = 200 J!).

Jaanch:
- Jaanch: 500 + 200 = 700 J ✅

---

### Question 9
A heat engine has efficiency 30% and rejects 1400 J of waste heat per cycle. Find the work done per cycle.

**Solution:**
Q₂ = (1 - η) Q₁ = 0.70 Q₁ = 1400 => Q₁ = 2000 J.
W = Q₁ - Q₂ = 2000 - 1400 = **600 J**.

Jaanch:
- Jaanch: 600 / 2000 = 30% ✅

---

### Question 10
A gas expands from V₁ to V₂ = 3 V₁ at constant pressure P = 2 × 10⁵ Pa (V₁ = 2 L). Find the work done by the gas.

**Solution:**
ΔV = 6 L - 2 L = 4 L = 4 × 10⁻³ m³.
W = (2 × 10⁵)(4 × 10⁻³) = **800 J**.

Jaanch:
- Jaanch: 2 × 4 × 100 = 800 J ✅

---

### Question 11
State whether the following statements are True or False:
(a) In an adiabatic expansion of an ideal gas, the gas cools down.
(b) The efficiency of a Carnot engine can be increased more effectively by lowering T₂ by 10 K than by raising T₁ by 10 K.

**Solution:**
- (a) **True** ✅ — W > 0 with ΔQ = 0 => ΔU < 0 => T drops!
- (b) **True** ✅ — Lowering T₂ reduces T₂/T₁ more strongly than raising T₁ by the same ΔT!

Jaanch:
- Jaanch: Verified from Topics 3 and 5 ✅

---

### Question 12
1 mole of an ideal gas undergoes an isochoric process where its pressure doubles from P₀ to 2 P₀ (initial T = 300 K, C_v = 20 J mol⁻¹ K⁻¹). Find the heat absorbed ΔQ.

**Solution:**
Constant V => P ∝ T => T₂ = 600 K (ΔT = 300 K).
W = 0 => ΔQ = ΔU = 1 × 20 × 300 = **6000 J (6 kJ)**.

Jaanch:
- Jaanch: 20 × 300 = 6000 J ✅

---

## Chapter Wrap-up: Thermodynamics at a Glance

| Topic | Core Formula / Rule | Ek Line Mein Yaad Rakho |
|---|---|---|
| [Topic 1: Zeroth Law & Work](thermodynamics.md) | W = Area(P–V); ΔU_cycle = 0 | Zeroth Law defines T; Clockwise +W, Anticlockwise -W |
| [Topic 2: First Law & Mayer](thermodynamics-part2.md) | ΔQ = ΔU + ΔW; ΔU = n C_v ΔT; C_p - C_v = R | ΔU = n C_v ΔT HAR process mein lagta hai! |
| [Topic 3: 4 Core Processes](thermodynamics-part3.md) | Isothermal PV=const; Adiabatic PV^γ=const | Adiabatic slope = γ × Isothermal slope (steeper!) |
| [Topic 4: Second Law & Engines](thermodynamics-part4.md) | η = W/Q₁ = 1 - Q₂/Q₁; α = Q₂/W; COP_pump = 1+α | η < 1 always; fridge COP can be > 1 |
| [Topic 5: Carnot Cycle](thermodynamics-part5.md) | η_C = 1 - T₂/T₁; α_C = T₂/(T₁-T₂) | Kelvin MUST; lowering T₂ beats raising T₁ |
| [Topic 6: Mixed & Wrap-up](thermodynamics-part6.md) | Triangular loops, Carnot combos, multi-stage | Efficiency denominator is Q_absorbed, NOT ΔQ_net! |

Tumne Thermodynamics ke laws, processes aur Carnot cycles ko poori tarah master kar liya hai! Agar polytropic processes (PV^x = const, C = C_v + R/(1-x)), cyclic P–V efficiency, graph conversions (P–V <-> V–T <-> P–T), free expansion, aur gas mixtures (γ_mix) dekhna chahte ho, toh [Gehrai Mein — Advanced Level](thermodynamics-advanced.md) zaroor padho!

**Agle chapter mein:** Ab hum microscope utha kar gas ke andar jhankenge — **Kinetic Theory** mein hum dekhenge ki trillion-trillion molecules ki takkar kaise Pressure aur Temperature paida karti hai, aur Degrees of Freedom se C_v, C_p, aur γ kaise derive hote hain!
