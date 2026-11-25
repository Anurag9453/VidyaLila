> **Class:** 11 | **Subject:** Physics | **Chapter 10:** Thermal Properties of Matter (Part 2)

# Thermal Expansion & Anomalous Behaviour of Water

> **Pichle topic se:** [Temperature & Thermometry](thermal-properties-of-matter.md) mein humne temperature naapna seekha. Ab dekhenge ki temperature badhane par solids aur liquids ka size kyun badhta hai (**Thermal Expansion**) — aur paani (water) 0 °C se 4 °C ke beech ulta kyun behave karta hai!

---

## Baldev ka Railway-Track & Metal-Washer Puzzle

Baldev ek railway-track aur bimetallic-thermostat technician hai. Usne ek metal washer (beech mein gol chhed wali flat steel disc) ko bhatti mein garam kiya aur trainee se poocha: "Garam karne par beech ka **chhed (hole) bada hoga ya chhota**?"

Trainee ne kaha, "Metal andar ki taraf failega toh chhed chhota ho jayega!" Baldev muskura kar bole, "Bilkul galat! Thermal expansion ek **photographic zoom-in** ki tarah hota hai — har linear dimension (outer radius, inner hole radius, thickness) exact same fraction α ΔT se **BADHTI** hai! Isliye garam karne par chhed **BADA** hota hai!"

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Linear Expansion (α) | Length mein fractional increase per °C: **ΔL = L α ΔT** (unit of α: **°C⁻¹ = K⁻¹**) |
| Area (Superficial) Expansion (β) | Area mein increase: **ΔA = A β ΔT**, jahan isotropic solid ke liye **β = 2 α** |
| Volume (Cubical) Expansion (γ) | Volume mein increase: **ΔV = V γ ΔT**, jahan isotropic solid ke liye **γ = 3 α** |
| Apparent Expansion of Liquid (γ_app) | Container bhi garam hokar failta hai, isliye dikhne wala expansion: **γ_apparent = γ_real - γ_vessel** |
| Anomalous Expansion of Water | 0 °C se **4 °C** tak garam karne par paani failne ke bajaye **sikudta (contracts)** hai => **Maximum density at 4 °C!** |

---

## 1. Linear, Area & Volume Expansion (1 : 2 : 3 Ratio!)

Isotropic solid (har direction mein same α) ke liye:
- **Linear:** L' = L (1 + α ΔT)
- **Area (A = L²):** A' = L² (1 + α ΔT)² ≈ L² (1 + 2 α ΔT) => **β = 2 α**
- **Volume (V = L³):** V' = L³ (1 + α ΔT)³ ≈ L³ (1 + 3 α ΔT) => **γ = 3 α**

```
  α : β : γ  =  1 : 2 : 3
```

**Density Variation with Temperature:**
Mass m constant hai aur V' = V (1 + γ ΔT), isliye density ghatti hai:
**ρ' = ρ / (1 + γ ΔT) ≈ ρ (1 - γ ΔT)**!

---

## 2. Anomalous Expansion of Water (Why Fish Survive Frozen Lakes!)

- 0 °C se **4 °C** tak garam karne par ice-like open hydrogen-bond cages toot-te hain, isliye paani **sikudta** hai aur density badh kar **4 °C par MAXIMUM (1000 kg/m³)** ho jati hai!
- 4 °C ke upar normal liquids ki tarah paani failta hai.
- **Sardiyon mein jheel (lake):** Jab hawa 0 °C se neeche jati hai, toh **4 °C wala sabse bhari paani neeche tal (bottom)** par baith jata hai aur 0 °C wala halka paani upar barf (ice) ban kar insulating blanket bana deta hai — isliye neeche 4 °C paani mein machhliyan zinda rehti hain!

---

## Solved Examples

### Example 1: Railway Track Expansion Gap

Steel rails of length 20 m each are laid at 15 °C (α_steel = 1.2 × 10⁻⁵ °C⁻¹). What minimum gap should be left between consecutive rails if the maximum summer temperature reaches 45 °C?

**Solution:**
ΔT = 45 - 15 = 30 °C.
ΔL = L α ΔT = 20 × (1.2 × 10⁻⁵) × 30 = 720 × 10⁻⁵ m = **7.2 × 10⁻³ m = 7.2 mm**.

Jaanch:
- Jaanch: 20 × 30 = 600; 600 × 1.2 = 720 × 10⁻⁵ m = 7.2 mm ✅

---

### Example 2: Expanding Circular Hole in a Brass Plate

A circular hole of diameter 4.000 cm is drilled in a brass sheet (α = 2.0 × 10⁻⁵ °C⁻¹) at 20 °C. Find the diameter of the hole when the sheet is heated to 220 °C.

**Solution:**
Hole expands exactly like solid brass!
ΔT = 220 - 20 = 200 °C.
Δd = d α ΔT = 4.000 × (2.0 × 10⁻⁵) × 200 = **0.016 cm**.
New diameter = 4.000 + 0.016 = **4.016 cm**.

Jaanch:
- Jaanch: 4 × 2 × 200 = 1600 × 10⁻⁵ = 0.016 cm ✅

---

### Example 3: Apparent Overflow of Petrol in a Steel Tank

A 50 litre steel tank (α_steel = 1.2 × 10⁻⁵ °C⁻¹) is completely filled with petrol (γ_petrol = 9.6 × 10⁻⁴ °C⁻¹) at 20 °C. How much petrol overflows when the temperature rises to 40 °C?

**Solution:**
- γ_steel = 3 α_steel = 3.6 × 10⁻⁵ °C⁻¹ = 0.36 × 10⁻⁴ °C⁻¹.
- γ_apparent = γ_petrol - γ_steel = (9.6 - 0.36) × 10⁻⁴ = **9.24 × 10⁻⁴ °C⁻¹**.
- ΔV_overflow = V γ_apparent ΔT = 50 × (9.24 × 10⁻⁴) × 20 = 1000 × 9.24 × 10⁻⁴ = **0.924 litres (924 mL)**.

Jaanch:
- Jaanch: Tank expands slightly (0.036 L), petrol expands 0.960 L => overflow = 0.924 L ✅

---

### Example 4: Ideal Gas Volume Expansion Coefficient γ

Show that for an ideal gas at constant pressure, the coefficient of volume expansion γ = 1 / T (where T is in Kelvin).

**Solution:**
At constant P, V = (n R / P) T => dV / dT = n R / P = V / T.
Therefore **γ = (1 / V) (dV / dT) = 1 / T**! (At 300 K, γ = 1/300 ≈ 3.33 × 10⁻³ K⁻¹, much larger than solids/liquids!)

Jaanch:
- Jaanch: Dimensions of 1/T = K⁻¹ = unit of γ ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Garam karne par metal plate ke andar ka chhed (hole) chhota hota hai maan lena
- **Galat:** Metal fail kar hole ko bhar dega!
- **Sahi:** Thermal expansion uniform photographic enlargement hai — hole **BADA** hota hai!

### Galti 2: Liquid overflow mein container ka expansion (3 α_vessel) bhool jana
- **Galat:** Overflow = V γ_liquid ΔT!
- **Sahi:** Container bhi failta hai! Overflow = **V (γ_liquid - 3 α_vessel) ΔT**!

### Galti 3: Steel vessel ke liye γ_vessel ki jagah α_vessel ghata dena
- **Galat:** γ_app = γ_liquid - α_vessel!
- **Sahi:** Volume expansion ke liye **γ_vessel = 3 α_vessel** use karo!

---

## Quick Recap

- **Solids:** ΔL = L α ΔT, ΔA = A (2α) ΔT, ΔV = V (3α) ΔT (**α : β : γ = 1 : 2 : 3**).
- **Holes & cavities:** Expand by the exact same factor as the solid!
- **Density:** ρ' ≈ ρ (1 - γ ΔT); **Liquid overflow:** ΔV = V (γ_liquid - 3 α_vessel) ΔT.
- **Water:** Contracts from 0 °C to 4 °C (**max density at 4 °C**).

---

## Practice Questions

### Question 1
A 10 m aluminium rod (α = 2.4 × 10⁻⁵ °C⁻¹) is heated from 20 °C to 70 °C. Find its increase in length in mm.

**Solution:**
ΔL = 10 × (2.4 × 10⁻⁵) × 50 = 1.2 × 10⁻² m = **12 mm**.

Jaanch:
- Jaanch: 10 × 50 × 2.4 = 1200 × 10⁻⁵ m = 0.012 m = 12 mm ✅

---

### Question 2
If a solid metal has α = 1.5 × 10⁻⁵ °C⁻¹, find its coefficients of area expansion β and volume expansion γ.

**Solution:**
- β = 2 α = **3.0 × 10⁻⁵ °C⁻¹**.
- γ = 3 α = **4.5 × 10⁻⁵ °C⁻¹**.

Jaanch:
- Jaanch: 1.5 : 3.0 : 4.5 = 1 : 2 : 3 ✅

---

### Question 3
A solid metal sphere and a hollow metal sphere of the **same material** and **same outer radius** are heated through the same temperature rise ΔT. Which sphere expands more in outer volume?

**Solution:**
**Both expand by the EXACT SAME outer volume!** Because a hollow cavity expands identically to the solid material that would fill it.

Jaanch:
- Jaanch: Photographic enlargement principle ✅

---

### Question 4
A brass scale is calibrated accurately at 20 °C (α = 2 × 10⁻⁵ °C⁻¹). On a hot 45 °C day, the scale measures a wooden rod as 100.00 cm. Is the true length of the rod greater or smaller than 100.00 cm? Find the true length.

**Solution:**
Hot scale has expanded (its 1 cm divisions are farther apart!), so it **under-reads** — true length is **GREATER**!
L_true = 100.00 (1 + 2 × 10⁻⁵ × 25) = 100.00 (1 + 0.0005) = **100.05 cm**.

Jaanch:
- Jaanch: Expanded ruler reads less => true length > measured reading ✅

---

### Question 5
A steel rod (α_s = 1.2 × 10⁻⁵ °C⁻¹) and a brass rod (α_b = 1.8 × 10⁻⁵ °C⁻¹) have lengths L_s and L_b such that the difference in their lengths (L_s - L_b = 10 cm) remains **constant at all temperatures**! Find L_s and L_b.

**Solution:**
For ΔL_s = ΔL_b at all ΔT: **L_s α_s = L_b α_b**!
L_s / L_b = α_b / α_s = 1.8 / 1.2 = 3 / 2 => L_s = 1.5 L_b.
Given L_s - L_b = 10 cm => 0.5 L_b = 10 => **L_b = 20 cm**, **L_s = 30 cm**!

Jaanch:
- Jaanch: 30(1.2) = 36 = 20(1.8); 30 - 20 = 10 cm ✅

---

### Question 6
Find the percentage increase in the volume of a copper cube (α = 1.7 × 10⁻⁵ °C⁻¹) when heated by 100 °C.

**Solution:**
γ = 3 α = 5.1 × 10⁻⁵ °C⁻¹.
% ΔV = γ ΔT × 100% = (5.1 × 10⁻⁵)(100)(100%) = **0.51%**.

Jaanch:
- Jaanch: 3 × 0.17% = 0.51% ✅

---

### Question 7
A liquid has γ = 5 × 10⁻⁴ °C⁻¹ and density 800 kg/m³ at 0 °C. Find its approximate density at 50 °C.

**Solution:**
ρ' ≈ ρ (1 - γ ΔT) = 800 (1 - 5 × 10⁻⁴ × 50) = 800 (1 - 0.025) = 800 × 0.975 = **780 kg/m³**.

Jaanch:
- Jaanch: 2.5% drop from 800 is 20 => 780 kg/m³ ✅

---

### Question 8
A bimetallic strip made of brass (higher α) and iron (lower α) is riveted together straight at room temperature. Which way does it bend when heated?

**Solution:**
Brass expands **more** than iron, so brass forms the longer **outer convex side** and the strip bends **toward the iron side**!

Jaanch:
- Jaanch: Outer arc of a curve is always longer than the inner arc ✅

---

### Question 9
Water at 0 °C is heated slowly to 10 °C. Describe how its volume changes during this process.

**Solution:**
From **0 °C to 4 °C**, its volume **decreases** (contracts to minimum volume at 4 °C); from **4 °C to 10 °C**, its volume **increases** normally!

Jaanch:
- Jaanch: Anomalous expansion of water ✅

---

### Question 10
A glass flask (γ_glass = 2.7 × 10⁻⁵ °C⁻¹) of volume 1000 cm³ is filled to the brim with mercury (γ_Hg = 1.8 × 10⁻⁴ °C⁻¹) at 0 °C. How much mercury overflows when heated to 100 °C?

**Solution:**
γ_app = (18.0 - 2.7) × 10⁻⁵ = 15.3 × 10⁻⁵ °C⁻¹.
ΔV = 1000 × (15.3 × 10⁻⁵) × 100 = **15.3 cm³**.

Jaanch:
- Jaanch: 1000 × 100 × 10⁻⁵ = 1 => 15.3 cm³ ✅

---

### Question 11
State whether the following statements are True or False:
(a) In a frozen winter lake, the water at the very bottom is typically near 4 °C.
(b) A metal ring heated in an oven gets smaller in inner diameter.

**Solution:**
- (a) **True** ✅ — Water is densest at 4 °C and sinks to the bottom.
- (b) **False** ❌ — Inner diameter increases just like any other linear dimension!

Jaanch:
- Jaanch: Core principles from Sections 1 and 2 ✅

---

### Question 12
Find the coefficient of volume expansion γ of an ideal gas at constant pressure at 27 °C (300 K).

**Solution:**
γ = 1 / T = 1 / 300 ≈ **3.33 × 10⁻³ K⁻¹**.

Jaanch:
- Jaanch: 1 / 300 = 0.00333 K⁻¹ ✅

---

Thermal expansion ab tumhare liye bilkul clear hai!

**Agle topic mein:** Heat dene par temperature kitna badhta hai aur barf/steam banne mein **Latent Heat** kahan chhup jati hai — chalo padhte hain [Specific Heat, Calorimetry & Latent Heat](thermal-properties-of-matter-part3.md)!
