> **Class:** 11 | **Subject:** Physics | **Chapter 11:** Thermodynamics (Part 3)

# Thermodynamic Processes: Isothermal, Adiabatic, Isochoric & Isobaric

> **Pichle topic se:** [First Law of Thermodynamics](thermodynamics-part2.md) mein humne ΔQ = ΔU + ΔW aur Mayer's Relation seekha. Ab hum chaar sabse famous thermodynamic processes ke equations, work formulas, aur P–V indicator diagrams compare karenge!

---

## Devki ka Diesel-Engine & Compressor P–V Lab

Devki ek diesel-engine aur industrial-compressor analyst hai. Diesel engine mein spark plug nahi hota — phir fuel kaise jalta hai? Cylinder mein hawa ko itni **tezi se compress** kiya jata hai ki heat bahar nikalne ka waqt hi nahi milta (**Adiabatic Compression**, ΔQ = 0)! Isse hawa ka temperature achanak 600 °C se upar chala jata hai aur fuel spray hote hi khud aag pakad leta hai!

Doosri taraf, agar compression bahut **dheere-dheere** (conducting walls ke saath) ho, toh temperature constant rehta hai (**Isothermal**)! Chalo chaaron processes ko ek master table mein dekhte hain!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Quasi-static Process | Itna dheema process ki har pal system almost equilibrium mein rahe (tabhi P–V curve draw ho sakta hai!) |
| Isochoric Process | **Volume constant (ΔV = 0)** => W = 0, ΔQ = ΔU = n C_v ΔT |
| Isobaric Process | **Pressure constant (ΔP = 0)** => W = P ΔV = n R ΔT, ΔQ = n C_p ΔT |
| Isothermal Process | **Temperature constant (ΔT = 0)** => P V = constant, ΔU = 0, ΔQ = W = n R T ln(V₂ / V₁) |
| Adiabatic Process | **No heat exchange (ΔQ = 0)** => P V^γ = constant, T V^(γ-1) = constant, W = -ΔU = (P₁V₁ - P₂V₂) / (γ - 1) |

---

## 1. Master Table of the 4 Core Thermodynamic Processes

| Process | What's Constant? | Equation of State | Work Done (W) | First Law Result |
|---|---|---|---|---|
| **Isochoric** | Volume V | P / T = const | **0** | ΔQ = ΔU = n C_v ΔT |
| **Isobaric** | Pressure P | V / T = const | **P (V₂ - V₁) = n R ΔT** | ΔQ = n C_p ΔT |
| **Isothermal** | Temperature T | **P V = const** | **n R T ln(V₂/V₁) = 2.303 n R T log₁₀(V₂/V₁)** | ΔU = 0 => **ΔQ = W** |
| **Adiabatic** | Heat (ΔQ = 0) | **P V^γ = const**; **T V^(γ-1) = const** | **(P₁V₁ - P₂V₂) / (γ - 1) = n R (T₁ - T₂) / (γ - 1)** | ΔQ = 0 => **W = -ΔU** |

---

## 2. Comparing Slopes on a P–V Diagram (Adiabatic is Steeper!)

- **Isothermal (P V = const):** dP / dV = **- P / V**
- **Adiabatic (P V^γ = const):** dP / dV = **- γ (P / V)**

```
  Slope of Adiabatic  =  γ × (Slope of Isothermal)
```
Since γ > 1 (1.4 or 1.67), **Adiabatic curve hamesha Isothermal curve se ZYADA STEEP (teekha)** hota hai!
- **Expansion (V₁ -> V₂):** Isobaric (top) > Isothermal (middle) > Adiabatic (bottom) => **W_isobaric > W_isothermal > W_adiabatic**!
- **Compression (V₁ -> V₂):** Adiabatic curve upar chadh jata hai => **|W_adiabatic| > |W_isothermal| > |W_isobaric|**!

---

## Solved Examples

### Example 1: Isothermal Expansion Work (Doubling Volume)

1 mole of an ideal gas at 300 K expands isothermally from V₁ = 10 L to V₂ = 20 L (R = 8.3 J mol⁻¹ K⁻¹, ln 2 ≈ 0.693). Find: (a) work done by the gas, (b) change in internal energy, (c) heat absorbed.

**Solution:**
- (a) W = n R T ln(V₂ / V₁) = 1 × 8.3 × 300 × ln 2 = 2490 × 0.693 ≈ **1726 J**.
- (b) Isothermal => ΔT = 0 => **ΔU = 0 J**.
- (c) ΔQ = ΔU + W = **+1726 J**.

Jaanch:
- Jaanch: 2490 × 0.693 = 1725.57 ≈ 1726 J ✅

---

### Example 2: Adiabatic Compression Temperature Rise (Diesel Principle!)

A monatomic ideal gas (γ = 5/3) at 27 °C (300 K) is compressed adiabatically to 1/8th of its original volume (V₂ = V₁ / 8). Find its final temperature T₂!

**Solution:**
Using **T₁ V₁^(γ-1) = T₂ V₂^(γ-1)** with γ - 1 = 5/3 - 1 = **2/3**:
T₂ = T₁ (V₁ / V₂)^(2/3) = 300 × (8)^(2/3) = 300 × 2² = 300 × 4 = **1200 K (927 °C)**!

Jaanch:
- Jaanch: 8^(1/3) = 2; 2² = 4; 300 × 4 = 1200 K ✅

---

### Example 3: Adiabatic Expansion Work

2 moles of a diatomic ideal gas (γ = 1.4, R = 8.3 J mol⁻¹ K⁻¹) expand adiabatically, causing its temperature to drop from 400 K to 300 K. Find the work done by the gas.

**Solution:**
W = n R (T₁ - T₂) / (γ - 1) = 2 × 8.3 × (400 - 300) / (1.4 - 1)
= (16.6 × 100) / 0.4 = 1660 / 0.4 = **+4150 J**!
(Notice: gas cools down because it uses its own internal energy ΔU = -4150 J to do +4150 J of work!)

Jaanch:
- Jaanch: ΔU = -n C_v ΔT = -2(5/2)(8.3)(100) = -4150 J => W = -ΔU = +4150 J ✅

---

### Example 4: Adiabatic Pressure Drop When Volume Doubles

A monatomic ideal gas (γ = 5/3) at pressure 32 atm expands adiabatically to 8 times its volume (V₂ = 8 V₁). Find its final pressure P₂.

**Solution:**
P₁ V₁^γ = P₂ V₂^γ => P₂ = P₁ (V₁ / V₂)^(5/3) = 32 / (8^(5/3)) = 32 / 2⁵ = 32 / 32 = **1 atm**!

Jaanch:
- Jaanch: Isothermal would give 32/8 = 4 atm; adiabatic drops much steeper to 1 atm! ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Adiabatic process mein ΔT = 0 maan lena
- **Galat:** Adiabatic mein ΔQ = 0 hai toh temperature nahi badlega!
- **Sahi:** **Isothermal** mein ΔT = 0 hota hai! **Adiabatic** mein **ΔQ = 0** hota hai — expansion mein gas **thandi** hoti hai aur compression mein **bahut garam**!

### Galti 2: Isothermal work mein log₁₀ ki jagah ln bhool jana (2.303 factor!)
- **Galat:** W = n R T log₁₀(V₂ / V₁)!
- **Sahi:** Natural log **ln(V₂/V₁) = 2.303 log₁₀(V₂/V₁)**! Factor of **2.303** bhoolne par answer 2.3× chhota ho jayega!

### Galti 3: Expansion aur Compression dono mein W_isothermal > W_adiabatic bol dena
- **Galat:** Isothermal work hamesha adiabatic work se bada hota hai!
- **Sahi:** **Expansion** mein W_isothermal > W_adiabatic; par **Compression** mein adiabatic curve upar chadh jata hai => **|W_adiabatic| > |W_isothermal|**!

---

## Quick Recap

- **Isochoric:** W = 0, ΔQ = ΔU = n C_v ΔT.
- **Isobaric:** W = P ΔV = n R ΔT, ΔQ = n C_p ΔT.
- **Isothermal:** P V = const, ΔU = 0, W = ΔQ = n R T ln(V₂/V₁).
- **Adiabatic:** P V^γ = const, T V^(γ-1) = const, ΔQ = 0, W = -ΔU = n R (T₁ - T₂)/(γ - 1).
- **P–V Slope:** Adiabatic is **γ times steeper** than Isothermal!

---

## Practice Questions

*(Take R = 8.3 J mol⁻¹ K⁻¹, ln 2 ≈ 0.693, ln 10 ≈ 2.303 unless stated otherwise.)*

### Question 1
2 moles of an ideal gas expand isothermally at 400 K from 2 L to 20 L. Find the work done by the gas.

**Solution:**
W = n R T ln(20/2) = 2 × 8.3 × 400 × 2.303 = 6640 × 2.303 ≈ **15,292 J (15.3 kJ)**.

Jaanch:
- Jaanch: 2 × 8.3 × 400 = 6640; × 2.303 ≈ 15.3 kJ ✅

---

### Question 2
A diatomic ideal gas (γ = 1.4) at 300 K is compressed adiabatically to 1/32 of its volume. Find its final temperature (use 32^(0.4) = 2^(2) = 4).

**Solution:**
γ - 1 = 0.4 = 2/5.
T₂ = 300 × (32)^(2/5) = 300 × (2⁵)^(2/5) = 300 × 2² = **1200 K**.

Jaanch:
- Jaanch: 32^(1/5) = 2 => 2² = 4 => 1200 K ✅

---

### Question 3
A monatomic gas (γ = 5/3) expands adiabatically from pressure 16 atm, volume 1 L to volume 8 L. Find its final pressure.

**Solution:**
P₂ = 16 / (8^(5/3)) = 16 / 32 = **0.5 atm**.

Jaanch:
- Jaanch: 8^(5/3) = 2⁵ = 32; 16/32 = 0.5 atm ✅

---

### Question 4
Find the ratio of the slope of an adiabatic curve to the slope of an isothermal curve at their point of intersection on a P–V diagram for a diatomic ideal gas.

**Solution:**
Slope_adiabatic / Slope_isothermal = **γ = 7 / 5 = 1.4**.

Jaanch:
- Jaanch: Always equals γ at any intersection point ✅

---

### Question 5
A gas expands from V₁ to V₂ = 2 V₁ by three different processes: Isobaric, Isothermal, and Adiabatic. Arrange the work done (W_iso, W_isob, W_adia) in descending order.

**Solution:**
From P–V areas during expansion: **W_isobaric > W_isothermal > W_adiabatic**.

Jaanch:
- Jaanch: Isobaric stays horizontal (largest area), adiabatic drops steepest (smallest area) ✅

---

### Question 6
In an adiabatic expansion, 1 mole of a monatomic gas (γ = 5/3) does 1245 J of work. Find the drop in its temperature ΔT.

**Solution:**
W = n R (T₁ - T₂) / (γ - 1) => 1245 = 1(8.3)(ΔT) / (2/3) = 12.45 ΔT => **ΔT = 100 K** (drops by 100 K!).

Jaanch:
- Jaanch: ΔU = -(3/2)(8.3)(100) = -1245 J => W = +1245 J ✅

---

### Question 7
Why does a bicycle tyre suddenly feel **cold** when air rapidly escapes through a punctured valve?

**Solution:**
Rapid expansion mein bahar se heat aane ka time nahi milta (**Adiabatic expansion**, ΔQ = 0) — hawa apni khud ki internal energy kharch karke expand hoti hai, isliye uska temperature tezi se gir jata hai!

Jaanch:
- Jaanch: Adiabatic expansion always cools a gas ✅

---

### Question 8
Write the adiabatic relation between Pressure P and Temperature T (eliminating V from P V^γ = const).

**Solution:**
Substitute V ∝ T / P into P V^γ = const:
P (T / P)^γ = const => **P^(1 - γ) T^γ = constant** (or **T^γ / P^(γ - 1) = constant**).

Jaanch:
- Jaanch: Check with P₂/P₁ = (T₂/T₁)^(γ/(γ-1)): for monatomic γ/(γ-1) = 5/2 ✅

---

### Question 9
An ideal gas undergoes an isothermal compression where pressure doubles (P₂ = 2 P₁). Express the work done by the gas in terms of n, R, T, and ln 2.

**Solution:**
P₁ V₁ = P₂ V₂ => V₂ / V₁ = P₁ / P₂ = 1 / 2.
W = n R T ln(1/2) = **- n R T ln 2** (negative => work done ON gas!).

Jaanch:
- Jaanch: Compression => negative W ✅

---

### Question 10
A gas at P = 2 × 10⁵ Pa and V = 4 L expands isobarically to 9 L. Find the work done by the gas.

**Solution:**
W = (2 × 10⁵)(9 - 4) × 10⁻³ = 2 × 5 × 10² = **1000 J (1 kJ)**.

Jaanch:
- Jaanch: 2 × 500 = 1000 J ✅

---

### Question 11
State whether the following statements are True or False:
(a) An isothermal process must be performed very slowly in a container with conducting walls.
(b) In an adiabatic process, the internal energy of an ideal gas never changes.

**Solution:**
- (a) **True** ✅ — Slow + conducting walls let heat flow freely to keep T constant.
- (b) **False** ❌ — In an adiabatic process ΔQ = 0, so **ΔU = -W ≠ 0**!

Jaanch:
- Jaanch: Verified from Master Table ✅

---

### Question 12
What is the molar specific heat of an ideal gas during: (a) an isothermal process, (b) an adiabatic process?

**Solution:**
C = ΔQ / (n ΔT):
- (a) Isothermal (ΔT = 0, ΔQ ≠ 0) => **C = ∞ (Infinity!)**.
- (b) Adiabatic (ΔQ = 0, ΔT ≠ 0) => **C = 0 (Zero!)**.

Jaanch:
- Jaanch: Depending on the process, molar heat capacity of a gas can range from 0 to ∞! ✅

---

Chaaron thermodynamic processes ab tumhare fingertips par hain!

**Agle topic mein:** Kya 100% efficient heat engine ban sakta hai? Nahi! Kyun? Chalo padhte hain [Second Law of Thermodynamics, Heat Engines & Refrigerators](thermodynamics-part4.md)!
