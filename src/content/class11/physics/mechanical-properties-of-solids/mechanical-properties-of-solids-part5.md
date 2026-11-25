> **Class:** 11 | **Subject:** Physics | **Chapter 8:** Mechanical Properties of Solids (Part 5)

# Sab Kuch Mila Kar: Mixed Problems & Chapter Wrap-up

> **Pichle topic se:** [Elastic Potential Energy & Applications](mechanical-properties-of-solids-part4.md) mein humne stored energy, crane ropes, aur I-beams dekhe. Ab chalo poore chapter ke sabhi tools — stress, strain, Stress–Strain curve, Y/G/B, Poisson's ratio, aur elastic energy — ko ek saath mila kar mixed problems solve karte hain!

---

## Yugandhar ka Structural Materials Testing Lab

Yugandhar ek Structural Materials Testing Director hai. Uske lab mein har din composite steel-brass wires, submarine pressure tests, aur breaking-limit checks ek saath aate hain! Yugandhar ka **Decision Map** har elasticity problem ko 30 second mein crack kar deta hai.

---

## Decision Map: Kaun Sa Elasticity Tool Kab Lagayein?

| Problem mein kya dikhe? | Kaun sa tool lagao? |
|---|---|
| Breaking load / safe radius of cable | **σ_max = F_max / A** (material property => **F_max ∝ r²**) ([Topic 1](mechanical-properties-of-solids.md)) |
| Stress–Strain graph slope / ductile vs brittle | **Slope = Y** (if Stress on y-axis); long plastic zone = ductile ([Topic 2](mechanical-properties-of-solids-part2.md)) |
| Wire stretch, shear shift, or deep-sea compression | **ΔL = FL/(AY)**; **Δx = FL/(AG)**; **|ΔV|/V = P/B**; **k = 1/B** ([Topic 3](mechanical-properties-of-solids-part3.md)) |
| Diameter thinning while stretching | **Poisson's ratio: |Δd|/d = σ (ΔL/L)** ([Topic 3](mechanical-properties-of-solids-part3.md)) |
| Stored energy / catapult / bridge sag / mountain height | **U = (1/2) F ΔL**; **u = σ²/(2Y)**; **δ ∝ L³/(bd³)**; **h_max = σ/(ρg)** ([Topic 4](mechanical-properties-of-solids-part4.md)) |

---

## 6 Mixed Synthesis Problems

### Problem 1: Composite Steel + Brass Wire (End-to-End Series Stretch)

A 2 m steel wire (Y_s = 2 × 10¹¹ Pa) and a 1 m brass wire (Y_b = 1 × 10¹¹ Pa), both of cross-sectional area 10⁻⁶ m², are joined end-to-end and loaded with 20 kg (g = 10 m/s²). Find the total elongation of the composite wire.

**Solution:**
Both wires carry the exact same tension F = 200 N!
- ΔL_steel = (200 × 2) / (10⁻⁶ × 2 × 10¹¹) = 400 / (2 × 10⁵) = **2.0 mm**.
- ΔL_brass = (200 × 1) / (10⁻⁶ × 1 × 10¹¹) = 200 / (1 × 10⁵) = **2.0 mm**.
- Total elongation = 2.0 + 2.0 = **4.0 mm**.

Jaanch:
- Jaanch: Brass is half as long and has half Y => exact same elongation (2 mm) as steel ✅

---

### Problem 2: Parallel Steel & Copper Wires Sharing a Load

A rigid horizontal bar is supported by two vertical wires of equal length L = 2 m and equal area A = 10⁻⁶ m² — one steel (Y_s = 2 × 10¹¹ Pa) and one copper (Y_c = 1 × 10¹¹ Pa). If a 300 N load is hung so that the bar stays horizontal (equal elongation ΔL!), find the tension in each wire!

**Solution:**
Equal ΔL, L, A => F = (Y A / L) ΔL ∝ Y!
So F_steel / F_copper = Y_s / Y_c = 2 / 1.
Since F_steel + F_copper = 300 N:
**F_steel = 200 N**, **F_copper = 100 N**!

Jaanch:
- Jaanch: Both stretch by ΔL = (200×2)/(2×10⁵) = 2 mm and (100×2)/(1×10⁵) = 2 mm ✅

---

### Problem 3: Fractional Density Change Under Deep-Ocean Pressure

A liquid of Bulk Modulus B = 2 × 10⁹ Pa is subjected to an extra pressure ΔP = 4 × 10⁷ Pa. Find the percentage **increase** in its density ρ!

**Solution:**
Mass m = ρ V is constant => Δρ / ρ = - ΔV / V = + ΔP / B!
Δρ / ρ = (4 × 10⁷) / (2 × 10⁹) = 2 × 10⁻² = **+2.0% increase in density**!

Jaanch:
- Jaanch: Volume shrinks by 2% => density rises by 2% ✅

---

### Problem 4: Stored Elastic Energy & Heat in a Loaded Wire

A 4 m wire of area 2 × 10⁻⁶ m² (Y = 2 × 10¹¹ Pa) supports a 50 kg load (g = 10 m/s²). Find: (a) its elongation, (b) elastic energy stored, (c) energy density.

**Solution:**
- (a) F = 500 N => ΔL = (500 × 4) / (2 × 10⁻⁶ × 2 × 10¹¹) = 2000 / (4 × 10⁵) = **5.0 mm**.
- (b) U = (1/2) F ΔL = (1/2)(500)(5 × 10⁻³) = **1.25 J**.
- (c) Volume V = 2 × 10⁻⁶ × 4 = 8 × 10⁻⁶ m³ => u = 1.25 / (8 × 10⁻⁶) = **1.5625 × 10⁵ J/m³**.

Jaanch:
- Jaanch: Check σ = 500 / (2×10⁻⁶) = 2.5×10⁸ Pa => σ²/(2Y) = 6.25×10¹⁶ / (4×10¹¹) = 1.5625 × 10⁵ J/m³ ✅

---

### Problem 5: Shear + Young's Modulus Ratio Check

A steel wire has Y = 2.1 × 10¹¹ Pa and Shear Modulus G = 0.8 × 10¹¹ Pa. Which requires more force for the same 0.001 strain on the same area — stretching or shearing?

**Solution:**
Stress = Modulus × Strain. Since Y (2.1 × 10¹¹) > G (0.8 × 10¹¹), **stretching requires 2.1 / 0.8 = 2.625 times more force** than shearing!

Jaanch:
- Jaanch: For metals, Y is always roughly 2.5 to 3 times larger than G ✅

---

### Problem 6: Maximum Safe Length of a Hanging Wire Under Its Own Weight

A steel wire has breaking stress σ_max = 8 × 10⁸ Pa and density ρ = 8 × 10³ kg/m³ (g = 10 m/s²). What is the maximum length L_max of this wire that can hang vertically without snapping under its own weight?

**Solution:**
Maximum tension occurs right at the **top** support = total weight = (A L ρ) g!
Stress at top = F_top / A = **ρ g L** ≤ σ_max!
L_max = σ_max / (ρ g) = (8 × 10⁸) / (8 × 10³ × 10) = **10,000 m (10 km)**!
*(Notice: independent of cross-sectional area A!)*

Jaanch:
- Jaanch: Same formula σ / (ρg) as maximum mountain height! ✅

---

## 3 Synthesis Mistakes (Mixed-Problem Traps)

### Galti 1: Parallel wires mein dono wires par tension equal maan lena
- **Galat:** 300 N load do wires (steel + copper) par hai toh dono par 150 N lagega!
- **Sahi:** Parallel mein **elongation ΔL equal** hota hai, isliye stiffer wire (steel, higher Y) **zyada tension (200 N)** uthati hai!

### Galti 2: Series wires mein elongation equal maan lena
- **Galat:** Series (end-to-end) wires mein dono barabar khinchengi!
- **Sahi:** Series mein **tension F equal** hota hai, aur total elongation **ΔL = ΔL₁ + ΔL₂**!

### Galti 3: Pressure badhne par density ghat-ti hai likh dena
- **Galat:** ΔV/V = -P/B negative hai toh density bhi negative change hogi!
- **Sahi:** Volume kam hone se molecules paas aate hain => **Δρ / ρ = + P / B (density BADHTI hai)**!

---

## Mixed Practice Questions

*(Take g = 10 m/s² unless stated otherwise.)*

### Question 1
A 2 m wire of area 10⁻⁶ m² (Y = 10¹¹ Pa) carries a 10 kg mass. Find its elongation in mm.

**Solution:**
ΔL = (100 × 2) / (10⁻⁶ × 10¹¹) = 200 / 10⁵ = 2 × 10⁻³ m = **2 mm**.

Jaanch:
- Jaanch: 200 / 100,000 = 0.002 m = 2 mm ✅

---

### Question 2
Find the maximum vertical length of a copper wire (breaking stress 4.5 × 10⁸ Pa, density 9 × 10³ kg/m³) that can hang without breaking under its own weight.

**Solution:**
L_max = (4.5 × 10⁸) / (9 × 10³ × 10) = 4.5 × 10⁸ / (9 × 10⁴) = **5000 m (5 km)**.

Jaanch:
- Jaanch: 4.5 / 9 = 0.5 × 10⁴ = 5000 m ✅

---

### Question 3
A pressure of 5 × 10⁶ Pa is applied to a liquid of Bulk Modulus 2.5 × 10⁹ Pa. Find the percentage increase in its density.

**Solution:**
Δρ / ρ = (5 × 10⁶) / (2.5 × 10⁹) = 2 × 10⁻³ = **0.2%**.

Jaanch:
- Jaanch: 5 / 2.5 = 2 × 10⁻³ = 0.2% ✅

---

### Question 4
A wire stretches by 4 mm under a force of 100 N. Find the elastic energy stored in it.

**Solution:**
U = (1/2)(100)(4 × 10⁻³) = **0.2 J**.

Jaanch:
- Jaanch: 50 × 0.004 = 0.2 J ✅

---

### Question 5
Two wires of equal length and area, with Young's moduli Y₁ = 1 × 10¹¹ Pa and Y₂ = 3 × 10¹¹ Pa, support a horizontal bar in parallel carrying 400 N. Find the tension in each wire.

**Solution:**
F₁ : F₂ = Y₁ : Y₂ = 1 : 3 => **F₁ = 100 N**, **F₂ = 300 N**.

Jaanch:
- Jaanch: 100 + 300 = 400 N; ratio 1 : 3 ✅

---

### Question 6
A wire of radius 1 mm has breaking force 200 N. What is the breaking force of a wire of the same material with radius 3 mm?

**Solution:**
F_max ∝ r² => 3² × 200 = **1800 N**.

Jaanch:
- Jaanch: 9 × 200 = 1800 N ✅

---

### Question 7
A 1 m wire stretches by 1 mm and its diameter decreases by 0.0003 mm (original diameter 1 mm). Find Poisson's ratio σ.

**Solution:**
Longitudinal strain = 1 / 1000 = 10⁻³; lateral strain = 0.0003 / 1 = 3 × 10⁻⁴.
σ = (3 × 10⁻⁴) / 10⁻³ = **0.3**.

Jaanch:
- Jaanch: 0.3 is right in the typical metal range (0.25–0.35) ✅

---

### Question 8
A metal cube of side 10 cm is sheared by 10⁴ N on its top face (G = 2 × 10¹⁰ Pa). Find the shear displacement Δx in μm.

**Solution:**
A = 0.01 m² => Stress = 10⁶ Pa.
Δx = (Stress × L) / G = (10⁶ × 0.1) / (2 × 10¹⁰) = 5 × 10⁻⁶ m = **5 μm**.

Jaanch:
- Jaanch: 10⁵ / (2×10¹⁰) = 0.5 × 10⁻⁵ = 5 × 10⁻⁶ m ✅

---

### Question 9
Find the elastic energy density in a copper wire (Y = 10¹¹ Pa) stretched to a stress of 2 × 10⁸ Pa.

**Solution:**
u = σ² / (2Y) = (4 × 10¹⁶) / (2 × 10¹¹) = **2 × 10⁵ J/m³**.

Jaanch:
- Jaanch: 4/2 = 2; 10¹⁶ / 10¹¹ = 10⁵ J/m³ ✅

---

### Question 10
A beam sags by 12 mm under a load W. If its depth d is increased by a factor of 2 while keeping L and b unchanged, what is the new sag?

**Solution:**
δ ∝ 1 / d³ => 12 / 2³ = 12 / 8 = **1.5 mm**.

Jaanch:
- Jaanch: 12 / 8 = 1.5 mm ✅

---

### Question 11
State whether the following statements are True or False:
(a) Steel is more elastic than rubber because steel has a much larger Young's modulus.
(b) Gases have a non-zero Bulk Modulus but zero Shear Modulus.

**Solution:**
- (a) **True** ✅ — Higher Y = stronger restoring force = more elastic.
- (b) **True** ✅ — Gases resist volume compression (B > 0) but flow under any shear (G = 0).

Jaanch:
- Jaanch: Core definitions from Topics 1 and 3 ✅

---

### Question 12
Two wires of the same material have equal volumes, but Wire B has twice the length of Wire A. If both are stretched by the same force F, find the ratio ΔL_B / ΔL_A.

**Solution:**
Constant volume V = A L => A ∝ 1 / L!
Since ΔL = F L / (A Y) = F L² / (V Y) ∝ L²:
ΔL_B / ΔL_A = (2 L / L)² = **4 : 1**!

Jaanch:
- Jaanch: Wire B is 2× longer AND has half the area => 2 × 2 = 4× more stretch ✅

---

## Chapter Wrap-up: Mechanical Properties of Solids at a Glance

| Topic | Core Formula / Rule | Ek Line Mein Yaad Rakho |
|---|---|---|
| [Topic 1: Stress & Strain](mechanical-properties-of-solids.md) | Stress = F/A (Pa); Strain = ΔL/L (unitless) | Steel > Rubber in elasticity; Breaking stress = material property |
| [Topic 2: Stress–Strain Curve](mechanical-properties-of-solids-part2.md) | Hooke's Law: Stress = Y × Strain (linear region) | Slope = Y; Ductile = long plastic zone; Brittle = snaps early |
| [Topic 3: Elastic Moduli](mechanical-properties-of-solids-part3.md) | Y = FL/(AΔL); G = F/(Aθ); B = -P/(ΔV/V); k = 1/B | Fluids have Y = G = 0, only B > 0; wire acts like spring k = YA/L |
| [Topic 4: Elastic Energy & Apps](mechanical-properties-of-solids-part4.md) | U = (1/2)FΔL; u = σ²/(2Y); δ = WL³/(4Ybd³) | 50% stored, 50% heat; I-beams maximize d; max mountain ~10 km |
| [Topic 5: Mixed & Wrap-up](mechanical-properties-of-solids-part5.md) | Series/parallel wires, Δρ/ρ = P/B, L_max = σ/(ρg) | Series = same F; Parallel = same ΔL |

Tumne Solids ke Mechanical Properties ko poori tarah master kar liya hai! Agar self-weight elongation (ρgL²/(2Y)), thermal stress (Y α ΔT), Y–B–G–σ inter-relations, aur rotating-ring expansion dekhna chahte ho, toh [Gehrai Mein — Advanced Level](mechanical-properties-of-solids-advanced.md) zaroor padho!

**Agle chapter mein:** Solids ke baad ab chalte hain behne wali duniya mein — **Mechanical Properties of Fluids** mein hum Pascal's Law, Buoyancy, Bernoulli's Principle, Viscosity, aur Surface Tension ka safar shuru karenge!
