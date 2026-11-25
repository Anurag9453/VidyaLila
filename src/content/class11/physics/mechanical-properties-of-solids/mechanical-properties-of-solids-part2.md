> **Class:** 11 | **Subject:** Physics | **Chapter 8:** Mechanical Properties of Solids (Part 2)

# Hooke's Law & the Stress–Strain Curve

> **Pichle topic se:** [Elasticity, Stress & Strain](mechanical-properties-of-solids.md) mein humne stress (F/A) aur strain (ΔL/L) define kiye. Ab dekhenge ki jab hum kisi metal wire par dheere-dheere load badhate jate hain — shuru se tootne tak — toh uska **Stress–Strain Curve** kya poori kahani sunata hai!

---

## Pitam ki Tensile-Testing Machine

Pitam ek materials-testing lab mein tensile-testing machine chalata hai. Usne teen alag materials ko khinch kar unke Stress–Strain graphs compare kiye:
1. **Mild Steel (Ductile):** Lamba plastic region — tootne se pehle khinch kar taar ban jata hai!
2. **Glass / Cast Iron (Brittle):** Elastic limit ke turant baad bina warning ke chatak kar toot jata hai!
3. **Rubber / Human Aorta (Elastomer):** Bahut bada elastic stretch (500% tak!), par curve straight line nahi hota — Hooke's Law follow nahi karta!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Hooke's Law | Chhote deformations (proportional limit) ke andar: **Stress ∝ Strain** => **Stress / Strain = Modulus of Elasticity (constant)** |
| Proportional Limit (A) | Woh point jahan tak Stress–Strain graph exact **seedhi line** rehta hai |
| Elastic Limit / Yield Point (B) | Woh maximum stress jahan tak load hatane par body 100% original shape wapas pa leti hai |
| Permanent Set | Yield point ke aage khinch kar load hatane par jo permanent elongation bacha reh jata hai |
| Ultimate Tensile Strength (D) | Material dwara jhela ja sakne wala maximum stress (curve ka peak!) |
| Fracture Point (E) | Woh point jahan wire aakhirkaar toot jati hai |
| Ductile vs Brittle | Bada plastic region (D to E door) = **Ductile** (gold, copper, steel); D aur E bilkul paas = **Brittle** (glass, ceramic) |
| Elastomer | Aisa material jo bina permanent deformation ke bahut zyada khinch sake par Hooke's Law na maane (jaise rubber, aorta tissue) |

---

## 1. The Classic Stress–Strain Curve (Ductile Metal)

```
  Stress
  ^                  D (Ultimate Tensile Strength)
  :                /---\
  :          B   C/     \ E (Fracture Point)
  :         /--*/
  :       A/
  :       /  (Linear Hooke's Law region: slope = Young's Modulus!)
  :      /
  0 ----+-----------------------------------> Strain
```

- **O to A (Linear Elastic):** Hooke's Law strictly holds (**Stress = Y × Strain**); graph ka **slope = Modulus of Elasticity**!
- **A to B (Non-linear Elastic):** Graph thoda mudta hai, par load hatane par body abhi bhi original length par wapas aa jati hai. B ko **Yield Point** (aur wahan ke stress ko **Yield Strength S_y**) kehte hain.
- **B to D (Plastic Region):** Load hatane par body wapas nahi aati (permanent set reh jata hai!). Point D par material apna peak stress (**Ultimate Tensile Strength S_u**) dikhata hai.
- **D to E (Necking to Fracture):** Wire beech se patli hone lagti hai aur kam stress par hi point E par toot jati hai!

---

## Solved Examples

### Example 1: Comparing Two Materials from Their Stress–Strain Slopes

On a Stress–Strain graph (Stress on y-axis, Strain on x-axis), Material A makes an angle of 60° with the strain axis and Material B makes an angle of 30° with the strain axis in their linear regions. Which material has the higher Modulus of Elasticity, and what is the ratio Y_A / Y_B?

**Solution:**
Slope = Stress / Strain = tan θ = Modulus of Elasticity Y!
- Y_A ∝ tan 60° = √3.
- Y_B ∝ tan 30° = 1 / √3.
- Ratio Y_A / Y_B = √3 / (1/√3) = **3 : 1** (Material A is 3× stiffer!).

Jaanch:
- Jaanch: Steeper slope (60° > 30°) means higher modulus of elasticity ✅

---

### Example 2: Reading Yield Strength & UTS from Lab Data

A mild steel wire of area 10⁻⁵ m² has Yield Strength S_y = 2.5 × 10⁸ Pa and Ultimate Tensile Strength S_u = 4.0 × 10⁸ Pa. Find: (a) max load without permanent deformation, (b) max load before necking/breaking.

**Solution:**
- (a) F_yield = S_y × A = (2.5 × 10⁸)(10⁻⁵) = **2500 N**.
- (b) F_ultimate = S_u × A = (4.0 × 10⁸)(10⁻⁵) = **4000 N**.

Jaanch:
- Jaanch: Safe operating load must stay below 2500 N to avoid permanent set ✅

---

### Example 3: Hooke's Law Linear Check

A wire stretches by 0.8 mm under a load of 20 N (within proportional limit). What load will stretch it by 2.0 mm?

**Solution:**
Within proportional limit, F ∝ ΔL:
F₂ / 20 = 2.0 / 0.8 = 2.5 => **F₂ = 2.5 × 20 = 50 N**.

Jaanch:
- Jaanch: 20 / 0.8 = 25 N/mm; 25 × 2.0 = 50 N ✅

---

### Example 4: Identifying Ductile, Brittle & Elastomer from Curves

Match each curve description to its material type:
(i) Steep straight line ending abruptly right after elastic limit -> **Brittle** (e.g. glass).
(ii) Steep straight line followed by a long curved plastic plateau before fracture -> **Ductile** (e.g. copper, steel).
(iii) Gently curving non-linear graph stretching to strain > 5 with zero plastic region -> **Elastomer** (e.g. vulcanized rubber, aorta).

Jaanch:
- Jaanch: All three material classes match their physical definitions ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Strain ko y-axis aur Stress ko x-axis par hone par bhi tan θ ko Y bol dena
- **Galat:** Har graph par slope = Y!
- **Sahi:** Agar **Stress y-axis** par hai toh slope = Y; par agar **Strain y-axis** par ho toh slope = **1 / Y** (yani Y = cot θ)!

### Galti 2: Elastomers (jaise rubber) ko Hooke's Law follow karta hua maan lena
- **Galat:** Rubber elastic hai toh woh Hooke's Law follow karta hoga!
- **Sahi:** Rubber elastic hai (original shape wapas paa leta hai), par uska Stress–Strain curve **straight line NAHI** hota — so it does NOT obey Hooke's Law!

### Galti 3: Ultimate Tensile Strength ko Fracture Stress samajh lena
- **Galat:** Material hamesha maximum stress (point D) par hi toot-ta hai!
- **Sahi:** Ductile metals mein point D (UTS) ke baad necking hoti hai aur wire thode **kam stress** par point E par toot-ti hai!

---

## Quick Recap

- **Hooke's Law:** Stress = Modulus × Strain (linear region O to A; slope = Modulus).
- **Key Points:** A (proportional limit), B (yield point / elastic limit), D (UTS), E (fracture).
- **Ductile:** large D–E plastic zone; **Brittle:** D and E very close; **Elastomer:** huge non-linear elastic stretch, no plastic zone.

---

## Practice Questions

### Question 1
In a Stress–Strain graph (Stress on y-axis), the linear part passes through (0, 0) and (strain = 0.002, stress = 4 × 10⁸ Pa). Find the Modulus of Elasticity.

**Solution:**
Y = Stress / Strain = (4 × 10⁸) / (2 × 10⁻³) = **2 × 10¹¹ Pa**.

Jaanch:
- Jaanch: 4/2 = 2; 10⁸ / 10⁻³ = 10¹¹ Pa (typical for steel!) ✅

---

### Question 2
On a Strain (y-axis) vs Stress (x-axis) graph, Wire P makes 30° with the Stress axis and Wire Q makes 60° with the Stress axis. Which wire is more elastic (higher Y), and what is Y_P / Y_Q?

**Solution:**
Here slope = Strain / Stress = 1 / Y => **Y = 1 / slope = cot θ**!
- Y_P ∝ cot 30° = √3; Y_Q ∝ cot 60° = 1 / √3.
- **Wire P is more elastic**, and Y_P / Y_Q = **3 : 1**!

Jaanch:
- Jaanch: Smaller strain for same stress => higher Y (Wire P wins!) ✅

---

### Question 3
A wire extends by 1.5 mm under a load of 30 N. Within the proportional limit, what will be its extension under a load of 70 N?

**Solution:**
ΔL = 1.5 × (70 / 30) = **3.5 mm**.

Jaanch:
- Jaanch: 1.5 / 30 = 0.05 mm/N; 0.05 × 70 = 3.5 mm ✅

---

### Question 4
Why are materials with a large elastic hysteresis loop (like vulcanized rubber) preferred for shock absorbers in heavy machinery?

**Solution:**
Loading aur unloading curve ke beech ka area (**elastic hysteresis loop**) har vibration cycle mein **energy dissipated as heat** dikhata hai — isliye rubber vibration energy ko absorb karke machine ko shaant rakhta hai!

Jaanch:
- Jaanch: Area of hysteresis loop = thermal energy absorbed per cycle ✅

---

### Question 5
A metal rod of cross-section 2 cm² (2 × 10⁻⁴ m²) has a yield strength of 3 × 10⁸ Pa. Find the maximum force it can carry without suffering a permanent set.

**Solution:**
F_max = (3 × 10⁸)(2 × 10⁻⁴) = **6 × 10⁴ N (60 kN)**.

Jaanch:
- Jaanch: 3 × 2 = 6; 10⁸ × 10⁻⁴ = 10⁴ N ✅

---

### Question 6
Two metals X and Y have the same Ultimate Tensile Strength, but X breaks at strain 0.01 while Y breaks at strain 0.25. Classify X and Y as ductile or brittle.

**Solution:**
- **X** (breaks at tiny 0.01 strain) -> **Brittle**.
- **Y** (stretches to 0.25 strain before breaking) -> **Ductile**.

Jaanch:
- Jaanch: Large plastic strain before fracture = ductile ✅

---

### Question 7
What is the physical meaning of the area under the linear portion of a Stress–Strain graph?

**Solution:**
Area = (1/2) × Stress × Strain = **Elastic Potential Energy stored per unit volume (Energy Density)** in Joules/m³!

Jaanch:
- Jaanch: Units: (N/m²) × (dimensionless) = N m / m³ = J/m³ ✅

---

### Question 8
A spring balance gives slightly inaccurate readings after being used continuously for several years. Name the elastic phenomenon responsible.

**Solution:**
**Elastic Fatigue** — baar-baar repeated alternating stress lagne se material ki elastic strength temporary kam ho jati hai!

Jaanch:
- Jaanch: Standard real-world phenomenon in springs and bridges ✅

---

### Question 9
Why does the human aorta (main blood vessel from the heart) have an elastomer-like Stress–Strain curve?

**Solution:**
Har heartbeat par aorta ko bade blood-pressure pulses ke saath bina phate aur bina permanent set ke expand aur contract hona padta hai — elastomer tissue bada reversible strain allow karta hai!

Jaanch:
- Jaanch: Elastomers allow large elastic strain with zero plastic region ✅

---

### Question 10
A copper wire has proportional limit stress 1.2 × 10⁸ Pa and Young's modulus 1.2 × 10¹¹ Pa. Find the maximum strain up to which Hooke's law is obeyed.

**Solution:**
Strain = Stress / Y = (1.2 × 10⁸) / (1.2 × 10¹¹) = **10⁻³ (0.1%)**.

Jaanch:
- Jaanch: Typical elastic limit strain for metals is ~0.1%–0.2% ✅

---

### Question 11
State whether the following statements are True or False:
(a) Hooke's Law is a universal law of nature that holds for all strains up to the fracture point.
(b) Brittle materials have a very small plastic region between the elastic limit and fracture point.

**Solution:**
- (a) **False** ❌ — Hooke's Law is an empirical approximation valid ONLY within the small proportional limit!
- (b) **True** ✅ — Brittle materials snap almost immediately past the elastic limit.

Jaanch:
- Jaanch: Verified from Stress–Strain curve ✅

---

### Question 12
If a wire's Stress–Strain graph has slope 1.5 × 10¹¹ Pa in the linear region, find the stress needed to produce a strain of 2 × 10⁻⁴.

**Solution:**
Stress = Y × Strain = (1.5 × 10¹¹)(2 × 10⁻⁴) = **3 × 10⁷ Pa (30 MPa)**.

Jaanch:
- Jaanch: 1.5 × 2 = 3; 10¹¹ × 10⁻⁴ = 10⁷ Pa ✅

---

Stress–Strain curve ki har turning ab tumhe samajh aa gayi hai!

**Agle topic mein:** Teen elastic moduli — **Young's, Bulk, aur Shear Modulus** plus **Poisson's Ratio** — chalo padhte hain [Elastic Moduli & Poisson's Ratio](mechanical-properties-of-solids-part3.md)!
