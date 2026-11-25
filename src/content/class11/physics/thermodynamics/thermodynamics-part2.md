> **Class:** 11 | **Subject:** Physics | **Chapter 11:** Thermodynamics (Part 2)

# First Law of Thermodynamics & Specific Heats of Gases

> **Pichle topic se:** [Thermal Equilibrium, Internal Energy & Work](thermodynamics.md) mein humne ΔQ, ΔU, aur ΔW define kiye. Ab in teeno ko ek hi equation mein jodte hain — **First Law of Thermodynamics** — aur dekhte hain ki gases ki **do** alag specific heats (C_p aur C_v) kyun hoti hain!

---

## Chakradhar ka Cylinder-Head Piston Experiment

Chakradhar ek gas-turbine physicist hai. Usne 1 mole ideal gas ko 1 K garam karne ke do tarike test kiye:
1. **Locked Piston (Constant Volume, C_v):** Gas expand nahi kar sakti (W = 0), isliye poori di hui heat sirf temperature (Internal Energy) badhane mein lagti hai!
2. **Free-Moving Piston (Constant Pressure, C_p):** Garam hone par gas expand hokar piston ko upar dhakelti hai (W = R ΔT)! Isliye wahi 1 K temperature badhane ke liye humein **EXTRA R (8.314 J/mol K)** heat deni padti hai!

Isse seedha **Mayer's Relation** milta hai: **C_p - C_v = R**!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| First Law of Thermodynamics | Energy conservation for thermal systems: **ΔQ = ΔU + ΔW** (Physics sign convention!) |
| Molar Specific Heat at Constant Volume (C_v) | Constant volume par 1 mole gas ka T 1 K badhane ki heat: **ΔU = n C_v ΔT** (ALWAYS valid for ANY ideal gas process!) |
| Molar Specific Heat at Constant Pressure (C_p) | Constant pressure par 1 mole gas ka T 1 K badhane ki heat: **ΔQ_p = n C_p ΔT** |
| Mayer's Relation | Ideal gas ke liye: **C_p - C_v = R** (hamesha **C_p > C_v**!) |
| Adiabatic Ratio (γ) | **γ = C_p / C_v** (Monatomic: **5/3 = 1.67**; Diatomic: **7/5 = 1.40**; Polyatomic: **4/3 = 1.33**) |

---

## 1. First Law of Thermodynamics (ΔQ = ΔU + ΔW)

System ko di gayi heat **ΔQ** do hisson mein bant-ti hai:
1. System ki Internal Energy badhane mein (**ΔU**),
2. Bahar work karne mein (**ΔW**).
```
  ΔQ = ΔU + ΔW
```
**Super Important Fact for Ideal Gases:**
Kyunki ideal gas ke liye U sirf T par depend karta hai, isliye **CHAHE KOI BHI PROCESS HO** (isobaric, isothermal, adiabatic, ya koi bhi tedha rasta!):
```
  ΔU = n C_v ΔT     (ALWAYS TRUE for an ideal gas!)
```

---

## 2. Derivation of Mayer's Relation (C_p - C_v = R)

**Kyun?**
1 mole ideal gas (n = 1) ko constant pressure P par ΔT garam karo:
- Heat supplied: ΔQ = C_p ΔT
- Internal energy change: ΔU = C_v ΔT
- Work done by gas: ΔW = P ΔV = R ΔT (from PV = RT!)
First Law (ΔQ = ΔU + ΔW) mein rakho:
C_p ΔT = C_v ΔT + R ΔT  =>  **C_p - C_v = R**!

**Standard Ideal Gas Values (with γ = C_p / C_v):**
- **C_v = R / (γ - 1)**,  **C_p = γ R / (γ - 1)**
- Monatomic (He, Ne, Ar): C_v = **(3/2) R**, C_p = **(5/2) R**, γ = **5/3**
- Diatomic (N₂, O₂, H₂ at room T): C_v = **(5/2) R**, C_p = **(7/2) R**, γ = **7/5**

---

## Solved Examples

### Example 1: Applying the First Law (Absorption & Work)

A gas absorbs 500 J of heat and does 200 J of external work while expanding. Find the change in its internal energy ΔU.

**Solution:**
ΔQ = +500 J, ΔW = +200 J.
ΔU = ΔQ - ΔW = 500 - 200 = **+300 J** (internal energy increases by 300 J!).

Jaanch:
- Jaanch: ΔU + ΔW = 300 + 200 = 500 J = ΔQ ✅

---

### Example 2: Isobaric Heating of a Diatomic Gas (Q, ΔU, W Split!)

2 moles of a diatomic ideal gas (C_v = (5/2) R, C_p = (7/2) R) are heated at constant pressure by ΔT = 100 K (take R = 8.3 J mol⁻¹ K⁻¹). Find: (a) heat absorbed ΔQ, (b) change in internal energy ΔU, (c) work done W.

**Solution:**
- (a) ΔQ = n C_p ΔT = 2 × (7/2)(8.3)(100) = 7 × 830 = **5810 J**.
- (b) ΔU = n C_v ΔT = 2 × (5/2)(8.3)(100) = 5 × 830 = **4150 J**.
- (c) W = n R ΔT = 2 × 8.3 × 100 = **1660 J**.

Jaanch:
- Jaanch: ΔU + W = 4150 + 1660 = 5810 J = ΔQ! Notice ratio ΔQ : ΔU : W = 7 : 5 : 2 ✅

---

### Example 3: Cyclic Process — Heat Absorbed Equals Net Work

In a complete thermodynamic cycle, a gas absorbs 800 J of heat from a hot reservoir and rejects 500 J to a cold reservoir. Find the net work done by the gas in one cycle.

**Solution:**
For a full cycle, ΔU = 0 => ΔQ_net = W_net!
W_net = 800 - 500 = **+300 J**.

Jaanch:
- Jaanch: ΔU = 0 => W_net = Q_in - Q_out = 300 J ✅

---

### Example 4: Finding C_p and C_v from γ

An ideal gas has γ = 1.4 (diatomic). Taking R = 8.31 J mol⁻¹ K⁻¹, find C_v and C_p.

**Solution:**
- C_v = R / (γ - 1) = 8.31 / (1.4 - 1) = 8.31 / 0.4 = **20.78 J mol⁻¹ K⁻¹**.
- C_p = C_v + R = 20.78 + 8.31 = **29.09 J mol⁻¹ K⁻¹**.

Jaanch:
- Jaanch: 29.09 / 20.78 = 1.40 = γ; 29.09 - 20.78 = 8.31 = R ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Physics aur Chemistry ke First Law signs mix kar dena
- **Galat:** Gas ne 200 J expand work kiya aur ΔU = ΔQ + W = 500 + 200 = 700 J likh diya!
- **Sahi:** Physics mein **ΔQ = ΔU + ΔW** (jahan expansion = +ΔW), so **ΔU = ΔQ - ΔW = 500 - 200 = 300 J**!

### Galti 2: ΔU = n C_v ΔT ko sirf constant-volume process tak seemit maan lena
- **Galat:** Isobaric process hai toh ΔU = n C_p ΔT hoga!
- **Sahi:** Ideal gas ke liye **ΔU = n C_v ΔT HAR PROCESS mein** lagta hai (isobaric mein bhi!).

### Galti 3: Specific heat (per kg, c_p - c_v = r) aur Molar specific heat (per mole, C_p - C_v = R) ko mix kar dena
- **Galat:** Per-kg c_p - c_v = R!
- **Sahi:** Per mole **C_p - C_v = R**; per unit mass (kg) **c_p - c_v = R / M** (jahan M molar mass in kg/mol hai)!

---

## Quick Recap

- **First Law:** ΔQ = ΔU + ΔW (energy conservation).
- **Ideal Gas ΔU:** Always **ΔU = n C_v ΔT** (for ANY process!).
- **Mayer's Relation:** **C_p - C_v = R**; **C_v = R/(γ - 1)**; **C_p = γ R/(γ - 1)**.
- **Isobaric fraction:** ΔU / ΔQ = **1 / γ**; W / ΔQ = **1 - 1 / γ**!

---

## Practice Questions

*(Take R = 8.3 J mol⁻¹ K⁻¹ = 2 cal mol⁻¹ K⁻¹ unless stated otherwise.)*

### Question 1
A system releases 300 J of heat while 100 J of work is done ON it (compression). Find the change in its internal energy ΔU.

**Solution:**
ΔQ = -300 J, ΔW = -100 J.
ΔU = ΔQ - ΔW = -300 - (-100) = **-200 J**.

Jaanch:
- Jaanch: ΔU + ΔW = -200 + (-100) = -300 J = ΔQ ✅

---

### Question 2
When a monatomic ideal gas (γ = 5/3) is heated at constant pressure, what fraction of the supplied heat goes into: (a) increasing internal energy, (b) doing external work?

**Solution:**
- (a) ΔU / ΔQ = 1 / γ = **3 / 5 (60%)**.
- (b) W / ΔQ = 1 - 3/5 = **2 / 5 (40%)**.

Jaanch:
- Jaanch: 60% + 40% = 100% ✅

---

### Question 3
3 moles of a monatomic ideal gas (C_v = (3/2) R) are heated at constant volume from 300 K to 400 K. Find ΔQ, ΔU, and W (in terms of R).

**Solution:**
Constant volume => **W = 0**.
ΔU = ΔQ = n C_v ΔT = 3 × (3/2) R × 100 = **450 R** (≈ 3735 J).

Jaanch:
- Jaanch: W = 0 => ΔQ = ΔU ✅

---

### Question 4
If 200 J of heat is supplied to a diatomic ideal gas (γ = 7/5) at constant pressure, find the work done by the gas.

**Solution:**
W / ΔQ = 1 - 1/γ = 1 - 5/7 = 2/7.
W = (2 / 7) × 200 = **400 / 7 ≈ 57.14 J**.

Jaanch:
- Jaanch: ΔU = (5/7)(200) ≈ 142.86 J; 142.86 + 57.14 = 200 J ✅

---

### Question 5
A gas goes from state A to state B along Path 1 absorbing 400 J of heat and doing 150 J of work. If it goes from A to B along Path 2 doing 100 J of work, how much heat does it absorb along Path 2?

**Solution:**
- Path 1: ΔU = 400 - 150 = **+250 J**.
- Path 2 (same endpoints => same ΔU = +250 J!): ΔQ₂ = ΔU + W₂ = 250 + 100 = **350 J**.

Jaanch:
- Jaanch: ΔU is path-independent (+250 J on both paths) ✅

---

### Question 6
Find the molar specific heats C_v and C_p (in cal mol⁻¹ K⁻¹) of a monatomic ideal gas (R = 2 cal mol⁻¹ K⁻¹).

**Solution:**
- C_v = (3/2) R = (3/2)(2) = **3 cal mol⁻¹ K⁻¹**.
- C_p = (5/2) R = (5/2)(2) = **5 cal mol⁻¹ K⁻¹**.

Jaanch:
- Jaanch: C_p - C_v = 5 - 3 = 2 = R; 5/3 = γ ✅

---

### Question 7
An electric heater supplies 100 W of power to a gas in a cylinder for 10 s. If the gas expands and does 400 J of work, find the increase in its internal energy.

**Solution:**
ΔQ = P × t = 100 × 10 = 1000 J.
ΔU = 1000 - 400 = **600 J**.

Jaanch:
- Jaanch: 600 + 400 = 1000 J ✅

---

### Question 8
If c_p - c_v = a for hydrogen gas (molar mass 2 g/mol) and c_p - c_v = b for nitrogen gas (molar mass 28 g/mol), where c_p and c_v are specific heats per unit mass, find the ratio a / b.

**Solution:**
c_p - c_v = R / M ∝ 1 / M!
a / b = M_N₂ / M_H₂ = 28 / 2 = **14 : 1**.

Jaanch:
- Jaanch: Lighter molar mass (H₂) has 14× larger specific heat difference per kg ✅

---

### Question 9
An ideal gas expands isothermally (ΔT = 0) while absorbing 600 J of heat. Find the work done by the gas.

**Solution:**
ΔT = 0 => ΔU = 0 => **W = ΔQ = +600 J**!

Jaanch:
- Jaanch: All absorbed heat converts directly into expansion work in an isothermal process ✅

---

### Question 10
A gas is compressed adiabatically (ΔQ = 0) by doing 350 J of work on it. Find the change in its internal energy ΔU. Does its temperature rise or fall?

**Solution:**
ΔQ = 0, ΔW = -350 J (compression).
ΔU = 0 - (-350) = **+350 J** => **Temperature RISES**!

Jaanch:
- Jaanch: Compressing a bicycle pump heats it up (ΔU > 0)! ✅

---

### Question 11
State whether the following statements are True or False:
(a) For any ideal gas, C_p is always greater than C_v.
(b) The First Law of Thermodynamics is simply the Law of Conservation of Energy applied to heat and work.

**Solution:**
- (a) **True** ✅ — C_p = C_v + R > C_v because constant-pressure heating also does expansion work!
- (b) **True** ✅ — ΔQ = ΔU + ΔW tracks every Joule of energy.

Jaanch:
- Jaanch: Core statements of Sections 1 and 2 ✅

---

### Question 12
1 mole of an ideal gas (C_v = 20 J mol⁻¹ K⁻¹) is heated at constant pressure from 300 K to 350 K (R = 8.3 J mol⁻¹ K⁻¹). Find the heat supplied ΔQ.

**Solution:**
C_p = C_v + R = 20 + 8.3 = 28.3 J mol⁻¹ K⁻¹.
ΔQ = 1 × 28.3 × 50 = **1415 J**.

Jaanch:
- Jaanch: ΔU = 1000 J + W = 415 J = 1415 J ✅

---

First Law aur Mayer's Relation ab tumhare liye bilkul clear hain!

**Agle topic mein:** Chaaron classic thermodynamic processes — **Isochoric, Isobaric, Isothermal, aur Adiabatic** — ke P–V graphs aur work formulas — chalo padhte hain [Thermodynamic Processes & P–V Diagrams](thermodynamics-part3.md)!
