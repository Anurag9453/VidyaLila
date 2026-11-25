> **Class:** 11 | **Subject:** Physics | **Chapter 11:** Thermodynamics

# Thermal Equilibrium, Zeroth Law, Heat, Internal Energy & Work

> **Pichle chapter aur Chemistry bridge se:** [Thermal Properties of Matter](../thermal-properties-of-matter/thermal-properties-of-matter-part6.md) mein humne heat aur temperature ka basic behavior padha. (Thermodynamics ka chemical perspective tum [Class 11 Chemistry: Thermodynamics](../../chemistry/thermodynamics/thermodynamics.md) mein bhi dekh sakte ho — **dhyan dena:** Physics mein Work Done **BY** the gas ko **+W** maante hain, jabki Chemistry mein work done ON the gas ko +w maante hain!)

---

## Yudhishthir ka Steam-Piston Lab

Yudhishthir ek thermal-power lab mein piston-cylinder engine test karta hai. Jab cylinder ke andar bhari gas ko neeche se burner se heat di jati hai, toh do cheezein ek saath hoti hain:
1. Gas ke molecules zyada tezi se ghoomne lagte hain (gas ki **Internal Energy U** badhti hai!).
2. Gas phool kar (expand hokar) piston ko upar dhakelti hai (gas **Work W = P ΔV** karti hai!).

Aur jab do containers A aur B teesre thermometer C ke saath thermal equilibrium mein hote hain, toh woh aapas mein bhi thermal equilibrium mein hote hain — yehi hai **Zeroth Law**, jo Temperature ki asli paribhasha deta hai!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Thermal Equilibrium | Jab do systems contact mein rehne par unke beech koi net heat flow na ho (dono ka Temperature equal!) |
| Zeroth Law of Thermodynamics | Agar A aur B alag-alag C ke saath thermal equilibrium mein hain, toh A aur B aapas mein bhi thermal equilibrium mein honge -> **Defines Temperature!** |
| Internal Energy (U) | System ke sabhi molecules ki total microscopic KE + PE ka sum; **State Function** hai (ideal gas ke liye sirf **Temperature T** par depend karta hai!) |
| State Function vs Path Function | State function (P, V, T, U) sirf initial & final states par depend karta hai; Path function (Heat Q, Work W) raste (process) par depend karta hai! |
| Thermodynamic Work (W) | Gas dwara kiya gaya work: **W = Area under P–V graph** (constant P par **W = P ΔV**; expansion => **+W**, compression => **-W**) |

---

## 1. Physics Sign Convention (Crystal Clear!)

| Quantity | Positive (+) | Negative (-) |
|---|---|---|
| **Heat (ΔQ)** | Heat **ABSORBED** by the system | Heat **RELEASED** by the system |
| **Work (ΔW)** | Work done **BY** the gas (**Expansion**, ΔV > 0) | Work done **ON** the gas (**Compression**, ΔV < 0) |
| **Internal Energy (ΔU)** | Temperature **INCREASES** (ΔT > 0) | Temperature **DECREASES** (ΔT < 0) |

---

## 2. Work from P–V Indicator Diagrams

- **Open process (A -> B):** **W = Area under P–V curve** (down to V-axis).
  - Going right (V increases): **W > 0**.
  - Going left (V decreases): **W < 0**.
- **Closed Cyclic Process (returns to start):**
  - **ΔU_cycle = 0** (since U is a state function!).
  - **W_net = Area ENCLOSED inside the loop!**
    - **Clockwise loop** => **W_net > 0** (Heat Engine!).
    - **Anticlockwise loop** => **W_net < 0** (Refrigerator!).

---

## Solved Examples

### Example 1: Isobaric Expansion Work

An ideal gas expands at a constant pressure of 2 × 10⁵ Pa from volume 0.02 m³ to 0.05 m³. Find the work done by the gas.

**Solution:**
W = P (V₂ - V₁) = (2 × 10⁵)(0.05 - 0.02) = (2 × 10⁵)(0.03) = **+6000 J (6 kJ)**.

Jaanch:
- Jaanch: Expansion => positive work; 2 × 3 × 10³ = 6000 J ✅

---

### Example 2: Work Done in a Rectangular Clockwise Cycle

An ideal gas undergoes a clockwise rectangular cycle on a P–V diagram between P₁ = 1 × 10⁵ Pa, P₂ = 4 × 10⁵ Pa, and V₁ = 1 L (10⁻³ m³), V₂ = 3 L (3 × 10⁻³ m³). Find: (a) net work done in one cycle, (b) change in internal energy ΔU for the full cycle.

**Solution:**
- (a) Clockwise loop => positive work equal to enclosed area:
  W_net = (P₂ - P₁)(V₂ - V₁) = (3 × 10⁵)(2 × 10⁻³) = **+600 J**.
- (b) Cyclic process returns to exact initial state => **ΔU_cycle = 0 J**!

Jaanch:
- Jaanch: 3 × 2 × 10² = 600 J; U is a state function so ΔU_cycle = 0 ✅

---

### Example 3: Work Along a Slanted Straight-Line P–V Process

A gas expands linearly on a P–V graph from state A (P₁ = 2 × 10⁵ Pa, V₁ = 1 L) to state B (P₂ = 6 × 10⁵ Pa, V₂ = 3 L). Find the work done by the gas.

**Solution:**
Area under straight line = Area of trapezoid:
W = (1/2) (P₁ + P₂) (V₂ - V₁) = (1/2)(2 + 6) × 10⁵ × (2 × 10⁻³) = 4 × 10⁵ × 2 × 10⁻³ = **+800 J**.

Jaanch:
- Jaanch: Average pressure = 4 × 10⁵ Pa over ΔV = 2 × 10⁻³ m³ => 800 J ✅

---

### Example 4: Path Dependence of Work vs Path Independence of ΔU

A gas goes from state A to state B via two different paths: Path 1 (higher P curve) does 500 J of work, and Path 2 (lower P curve) does 200 J of work. If U_A = 100 J and U_B = 400 J, compare ΔU and W for both paths.

**Solution:**
- **ΔU** is identical for both paths: ΔU = U_B - U_A = 400 - 100 = **+300 J** (state function!).
- **Work W** is different: **500 J** on Path 1 vs **200 J** on Path 2 (path function!).

Jaanch:
- Jaanch: Same endpoints => same ΔU, different areas => different W ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Heat Q aur Work W ko State Functions samajh lena
- **Galat:** State A par gas mein 500 J work aur 300 J heat hai!
- **Sahi:** State par sirf **P, V, T, U** hote hain; **Q aur W** sirf **process (path)** ke dauran energy transfer hain!

### Galti 2: Anticlockwise P–V cycle ka net work positive (+Area) likh dena
- **Galat:** Har loop ka work = +Area!
- **Sahi:** **Clockwise** P–V loop => **+Area**; **Anticlockwise** P–V loop => **-Area**!

### Galti 3: P–V graph mein litre ko m³ mein convert karna bhool jana
- **Galat:** ΔV = 2 L aur P = 10⁵ Pa => W = 2 × 10⁵ J!
- **Sahi:** **1 L = 10⁻³ m³**! So W = 10⁵ × (2 × 10⁻³) = **200 J**!

---

## Quick Recap

- **Zeroth Law:** Defines **Temperature** via thermal equilibrium.
- **Internal Energy (U):** State function (depends ONLY on T for an ideal gas; ΔU_cycle = 0).
- **Work (W):** Path function = Area under P–V graph (Expansion +W, Compression -W; Clockwise loop +Area, Anticlockwise -Area).

---

## Practice Questions

### Question 1
A gas is compressed at a constant pressure of 3 × 10⁵ Pa from 5 L to 2 L. Find the work done by the gas (with sign).

**Solution:**
ΔV = (2 - 5) × 10⁻³ = -3 × 10⁻³ m³.
W = (3 × 10⁵)(-3 × 10⁻³) = **-900 J** (900 J done ON the gas).

Jaanch:
- Jaanch: Compression => negative work done by the gas ✅

---

### Question 2
A gas undergoes an **anticlockwise** triangular cycle on a P–V diagram with vertices (1 L, 2 × 10⁵ Pa), (4 L, 2 × 10⁵ Pa), and (1 L, 6 × 10⁵ Pa). Find the net work done by the gas in one cycle.

**Solution:**
Base = 3 L = 3 × 10⁻³ m³; height = 4 × 10⁵ Pa.
Area = (1/2)(3 × 10⁻³)(4 × 10⁵) = 600 J.
Since the cycle is **anticlockwise**, **W_net = -600 J**.

Jaanch:
- Jaanch: Anticlockwise => negative net work ✅

---

### Question 3
Which thermodynamic law defines the concept of temperature?

**Solution:**
The **Zeroth Law of Thermodynamics**.

Jaanch:
- Jaanch: Thermal equilibrium transitivity establishes temperature ✅

---

### Question 4
A gas expands at constant volume V = 4 L while its pressure increases from 1 × 10⁵ Pa to 5 × 10⁵ Pa. Find the work done by the gas.

**Solution:**
ΔV = 0 => **W = 0 J**!

Jaanch:
- Jaanch: Vertical line on P–V graph has zero area underneath ✅

---

### Question 5
An ideal gas goes through a clockwise circular cycle on a P–V graph with pressure ranging from 1 × 10⁵ Pa to 5 × 10⁵ Pa and volume ranging from 2 L to 6 L. Find the net work done in one cycle (take π = 3.14).

**Solution:**
Semi-axes: a = (5 - 1)/2 × 10⁵ = 2 × 10⁵ Pa; b = (6 - 2)/2 × 10⁻³ = 2 × 10⁻³ m³.
Area of ellipse/circle = π a b = 3.14 × (2 × 10⁵)(2 × 10⁻³) = 3.14 × 400 = **+1256 J**.

Jaanch:
- Jaanch: Clockwise => +π a b = +1256 J ✅

---

### Question 6
If an ideal gas expands at constant temperature T = 300 K from 1 L to 5 L, what is the change in its internal energy ΔU?

**Solution:**
For an ideal gas, U depends ONLY on temperature T. Since ΔT = 0 => **ΔU = 0 J**!

Jaanch:
- Jaanch: Ideal gas has zero intermolecular PE, so U = U(T) only ✅

---

### Question 7
Convert 1 litre-atmosphere (1 L atm) into Joules (1 atm = 1.013 × 10⁵ Pa).

**Solution:**
1 L atm = (10⁻³ m³)(1.013 × 10⁵ Pa) = **101.3 J**.

Jaanch:
- Jaanch: 10⁻³ × 10⁵ = 10² => 101.3 J ✅

---

### Question 8
A gas expands linearly from (2 L, 4 × 10⁵ Pa) to (6 L, 2 × 10⁵ Pa). Find the work done by the gas.

**Solution:**
Trapezoid area: W = (1/2)(4 + 2) × 10⁵ × (4 × 10⁻³) = 3 × 10⁵ × 4 × 10⁻³ = **+1200 J**.

Jaanch:
- Jaanch: Average P = 3 × 10⁵ Pa × 4 × 10⁻³ m³ = 1200 J ✅

---

### Question 9
Why does the internal energy of a REAL gas depend slightly on volume V in addition to temperature T, unlike an ideal gas?

**Solution:**
Real gas molecules ke beech chhote intermolecular forces (potential energy) hote hain — volume badalne par molecules ki doori badalti hai, isliye internal PE thodi badal jati hai! Ideal gas mein intermolecular forces zero hote hain, isliye U sirf T par depend karta hai.

Jaanch:
- Jaanch: U = KE(T) + PE(V); for ideal gas PE = 0 ✅

---

### Question 10
A system is taken from state A to state B along a path where ΔU = +250 J. If it is returned from state B back to state A along a completely different path, what is ΔU for the return path?

**Solution:**
Since U is a state function, ΔU(B -> A) = -ΔU(A -> B) = **-250 J**!

Jaanch:
- Jaanch: +250 + (-250) = 0 for the closed loop ✅

---

### Question 11
State whether the following statements are True or False:
(a) In Physics sign convention, work done by an expanding gas is taken as positive.
(b) Work done in a thermodynamic process depends only on the initial and final states.

**Solution:**
- (a) **True** ✅ — Expansion (ΔV > 0) => W = P ΔV > 0.
- (b) **False** ❌ — Work is a **path function** (equals area under the specific P–V curve!).

Jaanch:
- Jaanch: Verified from Sections 1 and 2 ✅

---

### Question 12
In a P–V diagram, a clockwise square loop has ΔP = 2 atm and ΔV = 5 L (1 atm = 10⁵ Pa). Find the net work done in 10 complete cycles.

**Solution:**
Work per cycle = (2 × 10⁵)(5 × 10⁻³) = 1000 J.
In 10 cycles: 10 × 1000 = **10,000 J (10 kJ)**.

Jaanch:
- Jaanch: 1 kJ/cycle × 10 cycles = 10 kJ ✅

---

Zeroth Law, Internal Energy aur P–V Work ab tumhare liye bilkul clear hain!

**Agle topic mein:** Heat, Internal Energy, aur Work ko jodne wala universe ka energy-conservation law — **First Law of Thermodynamics** aur **Mayer's Relation (C_p - C_v = R)** — chalo padhte hain [First Law of Thermodynamics & Specific Heats of Gases](thermodynamics-part2.md)!
