> **Class:** 11 | **Subject:** Physics | **Chapter 8:** Mechanical Properties of Solids (Part 3)

# Elastic Moduli: Young's, Bulk, Shear & Poisson's Ratio

> **Pichle topic se:** [Hooke's Law & Stress–Strain Curve](mechanical-properties-of-solids-part2.md) mein humne dekha ki Stress / Strain ek constant (Modulus of Elasticity) hota hai. Kyunki stress aur strain 3 prakar ke hote hain (longitudinal, shear, volume), isliye **3 Elastic Moduli** hote hain — **Y, G, aur B**!

---

## Ratanlal ka Deep-Sea Submersible & Steel-Beam Design

Ratanlal ek structural-steel aur deep-sea submersible engineer hai.
- Bridge cables khinchne ke liye woh **Young's Modulus (Y)** check karta hai (Steel ka Y = 2 × 10¹¹ Pa — bahut stiff!).
- Metal rivets aur bolts par sideways kaatne wale force ke liye woh **Shear Modulus (G)** check karta hai (liquids aur gases ka G = 0, isliye woh beh jate hain!).
- Samudra ki 4 km gehrai mein submarine hull ke dabne ke liye woh **Bulk Modulus (B)** check karta hai!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Young's Modulus (Y) | Longitudinal Stress / Longitudinal Strain: **Y = (F L) / (A ΔL)** (SIRF solids ke liye!) |
| Shear Modulus / Modulus of Rigidity (G) | Shearing Stress / Shearing Strain: **G = F / (A θ) = (F L) / (A Δx)** (SIRF solids ke liye; typically G ≈ Y / 3!) |
| Bulk Modulus (B) | Hydraulic Stress / Volume Strain: **B = - P / (ΔV / V)** (Solids, Liquids, AND Gases sabke liye!) |
| Compressibility (k) | Bulk Modulus ka ulta (reciprocal): **k = 1 / B** (SI unit: **Pa⁻¹ = m²/N**) |
| Poisson's Ratio (σ) | Lateral strain divided by longitudinal strain: **σ = - (Δd / d) / (ΔL / L)** (dimensionless; typical metals 0.25–0.35; theoretical limit -1 to +0.5) |

---

## 1. Master Comparison of the Three Moduli

| Modulus | Symbol | Formula | Applies To | SI Unit |
|---|---|---|---|---|
| **Young's Modulus** | **Y** | (F L) / (A ΔL) | Solids ONLY | N/m² (Pa) |
| **Shear Modulus** | **G** (or η) | F / (A θ) | Solids ONLY | N/m² (Pa) |
| **Bulk Modulus** | **B** | - P / (ΔV / V) | Solids, Liquids & Gases | N/m² (Pa) |

**Wire as a Spring Shortcut!**
Y = (F L) / (A ΔL) ko rearrange karo: **F = (Y A / L) ΔL**!
Compare with Hooke's spring law F = k x => ek elastic wire ka effective spring constant hota hai:
```
  k_wire = Y A / L
```

---

## 2. Poisson's Ratio (σ)

Jab tum kisi wire ko lamba khinchte ho (+ΔL), toh woh thoda **patla (-Δd)** ho jata hai!
```
  σ = - (Δd / d) / (ΔL / L)     (dimensionless pure number!)
```
- Minus sign isliye hai taaki ΔL > 0 aur Δd < 0 hone par σ **positive** aaye.
- Practical values for real materials: **0 ≤ σ ≤ 0.5** (steel ≈ 0.28, rubber ≈ 0.50).

---

## Solved Examples

### Example 1: Elongation of a Steel vs Copper Wire

A steel wire of length 2 m and cross-sectional area 10⁻⁶ m² (Y = 2 × 10¹¹ Pa) hangs vertically with a 10 kg mass attached (g = 10 m/s²). Find its elongation ΔL in mm.

**Solution:**
F = 10 × 10 = 100 N.
ΔL = (F L) / (A Y) = (100 × 2) / (10⁻⁶ × 2 × 10¹¹) = 200 / (2 × 10⁵) = 10⁻³ m = **1.0 mm**.

Jaanch:
- Jaanch: Stress = 10⁸ Pa; Strain = 10⁸ / (2×10¹¹) = 5 × 10⁻⁴; ΔL = 5×10⁻⁴ × 2 m = 1 mm ✅

---

### Example 2: Deep-Sea Bulk Compression of Water

The average depth of an ocean is 3000 m, creating a pressure P = 3 × 10⁷ Pa. If the Bulk Modulus of water is B = 2.2 × 10⁹ Pa, find the fractional compression (|ΔV| / V) of water at the ocean bottom!

**Solution:**
|ΔV| / V = P / B = (3 × 10⁷) / (2.2 × 10⁹) = (3 / 2.2) × 10⁻² ≈ **1.36 × 10⁻² (1.36%)**.

Jaanch:
- Jaanch: Water is nearly incompressible — even at 3 km depth it compresses by only 1.36%! ✅

---

### Example 3: Shearing Displacement of a Lead Cube

A square lead slab of side 50 cm (0.5 m) and thickness 10 cm (0.1 m) is subjected to a shearing force of 9 × 10⁴ N on its narrow edge (area = 0.5 × 0.1 = 0.05 m²). If the shear modulus of lead is G = 5.6 × 10⁹ Pa, how much does the upper edge displace?

**Solution:**
Shearing stress = F / A = (9 × 10⁴) / 0.05 = 1.8 × 10⁶ Pa.
Shearing strain θ = Δx / L = Stress / G => Δx = (1.8 × 10⁶ × 0.5) / (5.6 × 10⁹) = (0.9 / 5.6) × 10⁻³ m ≈ **0.16 mm**.

Jaanch:
- Jaanch: Very small shear displacement (0.16 mm) due to high G ✅

---

### Example 4: Lateral Contraction Using Poisson's Ratio

A brass wire of length 2 m and diameter 2 mm stretches by 1 mm under tension. If Poisson's ratio for brass is σ = 0.34, find the decrease in its diameter Δd.

**Solution:**
- Longitudinal strain = ΔL / L = 1 mm / 2000 mm = 5 × 10⁻⁴.
- Lateral strain |Δd| / d = σ × (ΔL / L) = 0.34 × (5 × 10⁻⁴) = 1.7 × 10⁻⁴.
- Decrease in diameter |Δd| = (1.7 × 10⁻⁴) × 2 mm = **3.4 × 10⁻⁴ mm (0.34 μm)**.

Jaanch:
- Jaanch: 0.34 × 5 × 2 = 3.4 × 10⁻⁴ mm ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Radius double hone par elongation ΔL ko aadha (1/2) maan lena
- **Galat:** Radius 2× kiya toh ΔL aadha ho jayega!
- **Sahi:** ΔL = F L / (π r² Y) ∝ 1 / r²! Radius 2× karne par area **4×** hota hai, isliye ΔL **1/4** ho jata hai!

### Galti 2: Liquids aur Gases ka Young's Modulus ya Shear Modulus non-zero maan lena
- **Galat:** Paani ka Young's modulus 2.2 × 10⁹ Pa hai!
- **Sahi:** Fluids (liquids & gases) apna fixed shape ya length nahi rakhte — unka **Y = 0, G = 0**, sirf **Bulk Modulus B** defined hota hai!

### Galti 3: Compressibility k ko Bulk Modulus B ke proportional maan lena
- **Galat:** Steel ka B bahut bada hai toh uski compressibility bhi bahut badi hogi!
- **Sahi:** **k = 1 / B**! Bada B = **KAM compressibility** (solids sabse kam compressible, gases sabse zyada compressible)!

---

## Quick Recap

- **Y = F L / (A ΔL)** (solids only; spring constant k = YA/L).
- **G = F / (A θ)** (solids only); **B = -P / (ΔV/V)** (all states; **k = 1/B**).
- **Poisson's Ratio:** σ = -(Δd/d)/(ΔL/L) (dimensionless; 0 ≤ σ ≤ 0.5 for real materials).

---

## Practice Questions

*(Take g = 10 m/s² unless stated otherwise.)*

### Question 1
A 4 m wire of area 2 × 10⁻⁶ m² stretches by 2 mm under a load of 100 N. Find its Young's modulus Y.

**Solution:**
Y = (100 × 4) / (2 × 10⁻⁶ × 2 × 10⁻³) = 400 / (4 × 10⁻⁹) = **1 × 10¹¹ Pa**.

Jaanch:
- Jaanch: 400 / 4 = 100 × 10⁹ = 10¹¹ Pa ✅

---

### Question 2
Two wires of the same material have lengths in the ratio 1 : 2 and radii in the ratio 2 : 1. If they are stretched by the same force F, find the ratio of their elongations ΔL₁ / ΔL₂.

**Solution:**
ΔL ∝ L / r² => ΔL₁ / ΔL₂ = (L₁ / L₂) × (r₂ / r₁)² = (1 / 2) × (1 / 2)² = **1 : 8**.

Jaanch:
- Jaanch: Wire 2 is 2× longer and has 1/4th the area => stretches 8× more ✅

---

### Question 3
A pressure of 2 × 10⁶ Pa decreases the volume of a liquid by 0.1% (ΔV/V = 10⁻³). Find its Bulk Modulus B and Compressibility k.

**Solution:**
- B = (2 × 10⁶) / 10⁻³ = **2 × 10⁹ Pa**.
- k = 1 / B = **5 × 10⁻¹⁰ Pa⁻¹**.

Jaanch:
- Jaanch: (2 × 10⁹)(5 × 10⁻¹⁰) = 1 ✅

---

### Question 4
What is the Bulk Modulus of a perfectly incompressible (rigid) material?

**Solution:**
Incompressible means ΔV = 0 for any pressure P => B = P / 0 -> **Infinity (∞)** (and compressibility k = 0)!

Jaanch:
- Jaanch: Zero volume change => infinite resistance to compression ✅

---

### Question 5
A steel wire (Y = 2 × 10¹¹ Pa) of length 1 m and area 1 mm² (10⁻⁶ m²) is treated as a spring. Find its effective force constant k in N/m.

**Solution:**
k = Y A / L = (2 × 10¹¹ × 10⁻⁶) / 1 = **2 × 10⁵ N/m**.

Jaanch:
- Jaanch: 2 × 10⁵ N needed per 1 m stretch => 200 N per 1 mm ✅

---

### Question 6
A metal cube of side 0.2 m is sheared by a tangential force of 4 × 10⁵ N on its top face. If G = 4 × 10¹⁰ Pa, find the shear angle θ (in radians) and top-face shift Δx (in mm).

**Solution:**
- A = 0.04 m² => Stress = (4 × 10⁵) / 0.04 = 10⁷ Pa.
- θ = Stress / G = 10⁷ / (4 × 10¹⁰) = **2.5 × 10⁻⁴ rad**.
- Δx = L θ = 0.2 × 2.5 × 10⁻⁴ = 5 × 10⁻⁵ m = **0.05 mm**.

Jaanch:
- Jaanch: 0.2 × 2.5 × 10⁻⁴ = 0.5 × 10⁻⁴ m = 0.05 mm ✅

---

### Question 7
A wire stretches by 0.2% in length when pulled. If its Poisson's ratio is 0.3, find the percentage decrease in its diameter and percentage decrease in its cross-sectional area.

**Solution:**
- % decrease in diameter = σ × (% increase in length) = 0.3 × 0.2% = **0.06%**.
- Since A = (π/4) d², % decrease in area = 2 × (%d) = **0.12%**.

Jaanch:
- Jaanch: Area ∝ d² => 2 × 0.06% = 0.12% ✅

---

### Question 8
If a wire stretches with **ZERO change in volume** (incompressible material), what must its Poisson's ratio σ be?

**Solution:**
V = A L ∝ d² L => ΔV/V = ΔL/L + 2 (Δd/d) = 0 => -Δd/d = (1/2) ΔL/L => **σ = 0.5**!

Jaanch:
- Jaanch: That's why σ = 0.5 is the upper limit for real isotropic solids (like rubber)! ✅

---

### Question 9
Why is the Bulk Modulus of solids much greater than that of gases?

**Solution:**
Solids mein atoms bahut close aur strong interatomic forces se bandhe hote hain, toh unhe dabana (ΔV/V) bahut mushkil hota hai => bada B! Gases mein molecules door hote hain => chhota B.

Jaanch:
- Jaanch: B_solid > B_liquid >> B_gas ✅

---

### Question 10
A copper wire (Y = 1.1 × 10¹¹ Pa) and a steel wire (Y = 2.2 × 10¹¹ Pa) of identical length and radius are hung side by side with equal weights. Find the ratio of their extensions ΔL_copper / ΔL_steel.

**Solution:**
ΔL ∝ 1 / Y => ΔL_copper / ΔL_steel = Y_steel / Y_copper = 2.2 / 1.1 = **2 : 1**.

Jaanch:
- Jaanch: Steel has 2× higher Y, so it stretches half as much as copper ✅

---

### Question 11
State whether the following statements are True or False:
(a) The Shear Modulus of an ideal liquid is zero.
(b) Young's Modulus of a wire doubles if its length is doubled.

**Solution:**
- (a) **True** ✅ — Liquids cannot sustain static shear stress; they flow!
- (b) **False** ❌ — Y is an intrinsic **material property** independent of length or radius!

Jaanch:
- Jaanch: Moduli depend only on the material (and temperature), never on geometry ✅

---

### Question 12
A 100 N force stretches a wire of length 2 m and diameter 2 mm by 0.5 mm. What force is needed to stretch a wire of the same material, length 4 m, and diameter 4 mm by 1.0 mm?

**Solution:**
F = Y A ΔL / L ∝ (d² ΔL) / L.
New / Old = (2² × 2) / 2 = 4 => **F_new = 4 × 100 = 400 N**.

Jaanch:
- Jaanch: Area 4×, ΔL 2×, L 2× => (4 × 2)/2 = 4× force ✅

---

Teeno Elastic Moduli aur Poisson's Ratio ab tumhari fingertips par hain!

**Agle topic mein:** Khinchi hui taar mein kitni energy store hoti hai aur bridges mein **I-shaped steel girders** kyun lagaye jate hain — chalo padhte hain [Elastic Potential Energy & Engineering Applications](mechanical-properties-of-solids-part4.md)!
