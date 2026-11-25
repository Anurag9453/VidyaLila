> **Class:** 11 | **Subject:** Physics | **Chapter 10:** Thermal Properties of Matter (Gehrai Mein — Advanced Level)

# Thermal Properties of Matter — Gehrai Mein (Advanced Level)

> **Core chapter se:** Core lessons ([Topic 1](thermal-properties-of-matter.md) se [Topic 6](thermal-properties-of-matter-part6.md)) mein humne thermometry, expansion, calorimetry, conduction, aur radiation cover kiye. Ab is **Gehrai Mein** section mein hum woh iconic thermal-physics derivations solve karenge jo hardest problems mein aate hain — **3-Rod Thermal Junction Networks**, **Pond Ice-Layer Freezing Time (t ∝ x²)**, **Pendulum Clock Thermal Drift**, **Bimetallic Strip Curvature**, aur **Solar-Constant Planetary Equilibrium Temperature**!

---

## Adinath ka Heat-Transfer Research Lab

Adinath ek heat-transfer researcher hai. Uske lab mein chaar classic deep problems hain:
1. Thand mein jheel (pond) par barf ki pehli 1 cm layer jamne mein agar **1 ghanta** lagta hai, toh 1 cm se 2 cm tak jamne mein 1 ghanta nahi balki **3 ghante** kyun lagte hain? (Kyunki t ∝ x² — nayi heat ko pehle se jami barf se guzar kar bahar jana padta hai!)
2. Garmi mein metal pendulum clock thodi lamba hone par ek din mein kitne seconds **slow** ho jati hai? (Δt / t = (1/2) α ΔT!)
3. Teen alag rods ek Y-junction par milein toh junction ka temperature **Kirchhoff's Current Law** ki tarah 2 lines mein kaise milta hai?

Chalo Adinath ke saath in paanch elite thermal tools ko derive aur solve karte hain!

---

## 1. 3-Rod Thermal Junction Network (Thermal Kirchhoff's Law)

Steady state mein junction J par heat jama nahi hoti, isliye junction mein aane wali sabhi heat currents ka algebraic sum = **0**:
```
  (T₁ - T_J) / R₁  +  (T₂ - T_J) / R₂  +  (T₃ - T_J) / R₃  =  0
```
Agar sabhi rods identical (R₁ = R₂ = R₃) hon, toh seedha **T_J = (T₁ + T₂ + T₃) / 3**!

---

## 2. Freezing Time of an Ice Layer on a Pond (t ∝ x²)

Hawa ka temperature **-θ °C** (so ΔT = θ across ice) hai aur neeche paani **0 °C** par hai. Jab ice ki thickness **x** ho, toh patli layer **dx** jamne mein latent heat **dQ = (ρ A dx) L** bahar nikalti hai through thickness **x**:
dQ / dt = k A θ / x  =>  ρ A L (dx / dt) = k A θ / x  =>  x dx = (k θ / (ρ L)) dt!

Integrate from x = 0 to x (since integral of x dx is x²/2):
```
  t(0 -> x) = ρ L x² / (2 k θ)       |       t(x₁ -> x₂) = ρ L (x₂² - x₁²) / (2 k θ)
```
**Golden Result:** Time **t ∝ x²**! Equal thickness layers (0->1, 1->2, 2->3 cm) jamne ke times ka ratio **1 : 3 : 5** hota hai!

---

## 3. Pendulum Clock Thermal Time Error

Pendulum ka time period T = 2π √(L / g) ∝ L^(1/2).
Temperature ΔT badhne par ΔL / L = α ΔT => **ΔT_period / T = (1/2) (ΔL / L) = (1/2) α ΔT**!
- **Garmi (ΔT > 0):** L badhta hai => T badhta hai => clock **SLOW** ho jati hai (loses time!).
- **Sardi (ΔT < 0):** L ghatta hai => T ghatta hai => clock **FAST** ho jati hai (gains time!).
- **Time lost/gained in 1 day (86,400 s):**
  ```
    Δt = (1/2) α ΔT × 86,400 seconds/day
  ```

---

## 4. Bimetallic Strip Radius of Curvature (R)

Do strips (thickness **d** each, coefficients α₁ and α₂ > α₁) ko ΔT garam karne par inner arc L(1 + α₁ΔT) = (R - d/2) θ aur outer arc L(1 + α₂ΔT) = (R + d/2) θ.
Divide aur simplify karne par:
```
  R ≈ d / [ (α₂ - α₁) ΔT ]
```

---

## 6 Deep Solved Problems

### Problem 1: 3-Rod Y-Junction Temperature

Three identical metal rods (same L, A, k) meet at a junction J. Their free ends are maintained at 90 °C, 90 °C, and 0 °C respectively. Find the steady-state temperature T_J of the junction.

**Solution:**
Identical thermal resistances R₁ = R₂ = R₃ = R:
(90 - T_J) + (90 - T_J) + (0 - T_J) = 0 => 180 = 3 T_J => **T_J = 60 °C**!

Jaanch:
- Jaanch: Heat in from two 90° ends = (30 + 30)/R = 60/R; heat out to 0° end = 60/R ✅

---

### Problem 2: Pond Ice Freezing Time (0 -> 2 cm vs 2 -> 4 cm)

On a freezing winter night, a 2 cm layer of ice forms on a pond in 4 hours. Assuming constant air temperature below 0 °C, how much MORE time will it take for the ice thickness to grow from 2 cm to 4 cm?

**Solution:**
Since t ∝ x²:
- t(0 -> 2 cm) ∝ 2² = 4 => 4 hours.
- t(2 -> 4 cm) ∝ (4² - 2²) = 16 - 4 = 12 => **12 hours**!
(Ratio 4 : 12 = 1 : 3!)

Jaanch:
- Jaanch: Total time for 4 cm = 4 × (4/2)² = 16 hours; extra time = 16 - 4 = 12 hours ✅

---

### Problem 3: Pendulum Clock Losing Time in Summer

A brass pendulum clock (α = 2 × 10⁻⁵ °C⁻¹) keeps exact time at 20 °C. How many seconds does it lose per day when the room temperature rises to 40 °C?

**Solution:**
ΔT = 40 - 20 = 20 °C.
Δt = (1/2) α ΔT × 86,400 = (1/2)(2 × 10⁻⁵)(20)(86,400) = 20 × 10⁻⁵ × 86,400 = **17.28 seconds/day** (runs slow!).

Jaanch:
- Jaanch: 2 × 10⁻⁴ × 86,400 = 17.28 s ✅

---

### Problem 4: Non-Identical 3-Rod Junction (Copper, Steel, Brass)

Three rods of equal length and area meet at junction J: Rod 1 (k = 300) at 100 °C, Rod 2 (k = 200) at 50 °C, Rod 3 (k = 100) at 0 °C. Find T_J.

**Solution:**
300(100 - T_J) + 200(50 - T_J) + 100(0 - T_J) = 0
Divide by 100: 300 - 3 T_J + 100 - 2 T_J - T_J = 0 => 400 = 6 T_J => **T_J = 200 / 3 ≈ 66.67 °C**.

Jaanch:
- Jaanch: Weighted average (3×100 + 2×50 + 1×0) / (3 + 2 + 1) = 400 / 6 = 66.67 °C ✅

---

### Problem 5: Planetary Equilibrium Temperature from Solar Radiation

A spherical blackbody planet of radius R orbits the Sun at distance d where the Sun's radiation intensity (Solar Constant) is I_0. Find its steady-state equilibrium temperature T (where absorbed solar power = radiated thermal power)!

**Solution:**
- Sunlight hits the planet's flat projected disc area **π R²** => Power absorbed = **I_0 (π R²)**.
- Planet radiates from its ENTIRE spherical surface **4 π R²** => Power emitted = **σ (4 π R²) T⁴**.
Equating the two: I_0 (π R²) = 4 π R² σ T⁴ => **T = (I_0 / (4 σ))^(1/4)**!
(Notice: independent of the planet's radius R! For Earth, I_0 ≈ 1360 W/m² gives ~278 K!)

Jaanch:
- Jaanch: Absorbing area πR² vs emitting area 4πR² gives the crucial factor of 1/4! ✅

---

### Problem 6: Bimetallic Strip Curvature Radius

A bimetallic strip consists of two strips of thickness d = 1 mm each, with α₁ = 1 × 10⁻⁵ °C⁻¹ and α₂ = 2 × 10⁻⁵ °C⁻¹. Find its radius of curvature R when heated by ΔT = 100 °C.

**Solution:**
R = d / [(α₂ - α₁) ΔT] = (10⁻³ m) / [(1 × 10⁻⁵)(100)] = 10⁻³ / 10⁻³ = **1.0 m**.

Jaanch:
- Jaanch: Smaller ΔT => larger R (flatter strip); ΔT -> 0 => R -> ∞ (straight!) ✅

---

## 3 Advanced Mistakes

### Galti 1: Pond freezing mein thickness double hone par time bhi double maan lena
- **Galat:** 2 cm mein 4 ghante lage toh 4 cm mein 8 ghante lagenge!
- **Sahi:** **t ∝ x²** => 4 cm mein 4 × 2² = **16 ghante** (yani 2 se 4 cm mein **12 ghante**)!

### Galti 2: Pendulum clock thermal error mein factor of 1/2 bhool jana
- **Galat:** Δt / t = α ΔT!
- **Sahi:** T ∝ L^(1/2) => fractional change **Δt / t = (1/2) α ΔT**!

### Galti 3: Planet equilibrium temperature mein absorbing area ko 4 π R² le lena
- **Galat:** Sunlight poori 4πR² surface par padti hai!
- **Sahi:** Parallel sunrays sirf cross-sectional disc **π R²** par padti hain, jabki planet poori **4 π R²** se radiate karta hai!

---

## Practice Questions (Advanced)

### Question 1
Three identical rods meet at a junction J. Their outer ends are at 100 °C, 60 °C, and 20 °C. Find the junction temperature T_J.

**Solution:**
T_J = (100 + 60 + 20) / 3 = 180 / 3 = **60 °C**.

Jaanch:
- Jaanch: Heat in from 100° = 40/R; heat out to 20° = 40/R; 60° rod has zero current! ✅

---

### Question 2
On a cold lake, 1 cm of ice forms in 2 hours. How much additional time will it take to grow from 1 cm to 3 cm?

**Solution:**
t(1 -> 3) / t(0 -> 1) = (3² - 1²) / 1² = 8 / 1 = 8 => **8 × 2 = 16 hours**.

Jaanch:
- Jaanch: Total for 3 cm = 9 × 2 = 18 h; minus first 2 h = 16 h ✅

---

### Question 3
A steel pendulum clock (α = 1.2 × 10⁻⁵ °C⁻¹) is accurate at 25 °C. How many seconds does it **gain** per day at 5 °C?

**Solution:**
Cold => shorter L => gains time! ΔT = 20 °C.
Δt = (1/2)(1.2 × 10⁻⁵)(20)(86,400) = 1.2 × 10⁻⁴ × 86,400 ≈ **10.37 seconds/day**.

Jaanch:
- Jaanch: 12 × 0.864 = 10.368 s/day ✅

---

### Question 4
If a planet moves to 4 times its current distance from the Sun (so Solar Constant I_0 ∝ 1/d² becomes 1/16th), by what factor does its equilibrium Kelvin temperature T change?

**Solution:**
T ∝ I_0^(1/4) ∝ (1 / d²)^(1/4) = **1 / √d**!
At 4 d: T' = T / √4 = **T / 2** (halves!).

Jaanch:
- Jaanch: (1/16)^(1/4) = 1/2 ✅

---

### Question 5
A metal rod of length L is heated by ΔT, while its ends are free. What is the fractional change in its Moment of Inertia I = (1/12) M L² about its centre?

**Solution:**
I ∝ L² => ΔI / I = 2 (ΔL / L) = **2 α ΔT**!

Jaanch:
- Jaanch: By angular momentum conservation, a heated spinning disc slows down by fractional Δω/ω = -2 α ΔT ✅

---

### Question 6
Two rods of thermal resistances R and 2R meet a third rod of resistance 2R at junction J. The free ends are at 100 °C (for R), 0 °C (for 2R), and 0 °C (for 2R). Find T_J.

**Solution:**
(100 - T_J) / R = T_J / (2R) + T_J / (2R) = T_J / R
100 - T_J = T_J => 2 T_J = 100 => **T_J = 50 °C**.

Jaanch:
- Jaanch: Two parallel 2R rods have equivalent resistance R => voltage divider splits 100 °C in half (50 °C)! ✅

---

### Question 7
A bimetallic strip has thickness d = 2 mm each, α₂ - α₁ = 10⁻⁵ °C⁻¹. Find the temperature rise ΔT required to bend it into a circle of radius R = 4 m.

**Solution:**
R = d / [(α₂ - α₁) ΔT] => ΔT = (2 × 10⁻³) / (10⁻⁵ × 4) = 200 / 4 = **50 °C**.

Jaanch:
- Jaanch: 2×10⁻³ / (50 × 10⁻⁵) = 4 m ✅

---

### Question 8
A solid metal sphere of density ρ floats in a liquid of density σ at 0 °C. If the temperature rises by ΔT, under what condition does the submerged fraction of the sphere remain **unchanged**?

**Solution:**
Submerged fraction = ρ_sphere / ρ_liquid. It stays unchanged if both densities shrink by the exact same factor => **γ_liquid = γ_sphere = 3 α_sphere**!

Jaanch:
- Jaanch: If γ_liquid > 3α_sphere (usual case), liquid thins faster so sphere sinks deeper! ✅

---

### Question 9
A pond freezes from thickness 0 to 1 cm in time t₁, from 1 to 2 cm in time t₂, and from 2 to 3 cm in time t₃. Find the ratio t₁ : t₂ : t₃.

**Solution:**
t₁ ∝ 1² - 0² = 1; t₂ ∝ 2² - 1² = 3; t₃ ∝ 3² - 2² = 5 => **1 : 3 : 5**!

Jaanch:
- Jaanch: Cumulative times 1, 4, 9 => differences 1, 3, 5 ✅

---

### Question 10
A hollow cylindrical pipe of inner radius r₁ and outer radius r₂ conducts heat radially outward. Why is the radial heat current proportional to 1 / ln(r₂ / r₁) rather than 1 / (r₂ - r₁)?

**Solution:**
Radially bahar jane par cross-sectional area **A(r) = 2 π r L** radius r ke saath **badhta** jata hai! Isliye dR_th = dr / (k · 2π r L) integrate karne par **R_th = ln(r₂ / r₁) / (2 π k L)** milta hai!

Jaanch:
- Jaanch: For very thin wall (r₂ - r₁ << r₁), ln(1 + Δr/r₁) ≈ Δr/r₁ recovers flat slab formula! ✅

---

### Question 11
A blackbody sphere cools by radiation in vacuum (T₀ = 0) from 1000 K to 500 K. By what factor does its rate of cooling (-dT/dt) drop?

**Solution:**
In vacuum (T₀ = 0), (-dT/dt) ∝ T⁴ => (500 / 1000)⁴ = (1/2)⁴ = **1 / 16** (drops by a factor of 16!).

Jaanch:
- Jaanch: 2⁴ = 16 ✅

---

### Question 12
Four identical rods form a square ABCD. Corner A is kept at 100 °C and opposite corner C at 0 °C. Find the steady-state temperatures of corners B and D.

**Solution:**
By complete symmetry between paths A-B-C and A-D-C, both B and D sit at the exact midpoint => **T_B = T_D = 50 °C**!

Jaanch:
- Jaanch: Symmetrical thermal bridge: 50 °C at both B and D ✅

---

Shabaash! Tumne Thermal Properties of Matter ko 3-rod networks, pond freezing, pendulum drift, aur planetary equilibrium tak conquer kar liya hai. Wapas chapter overview ke liye [Mixed Problems & Chapter Wrap-up](thermal-properties-of-matter-part6.md) dekho!
