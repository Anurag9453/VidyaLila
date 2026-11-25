> **Class:** 11 | **Subject:** Physics | **Chapter 10:** Thermal Properties of Matter (Part 6)

# Sab Kuch Mila Kar: Mixed Problems & Chapter Wrap-up

> **Pichle topic se:** [Newton's Law of Cooling, Stefan–Boltzmann & Wien's Law](thermal-properties-of-matter-part5.md) mein humne radiation aur cooling curves solve kiye. Ab chalo poore chapter ke sabhi thermal tools — thermometry, thermal expansion, calorimetry, conduction, aur radiation — ko ek saath mila kar multi-concept challenges solve karte hain!

---

## Uddhav ka Thermal-Engineering Command Lab

Uddhav ek Thermal-Engineering Lab Director hai. Uske lab mein ek hi device mein expansion, calorimetry, conduction, aur radiation sab ek saath kaam karte hain! Uddhav ka **Decision Map** har thermal problem ka turant sahi formula chunta hai.

---

## Decision Map: Kaun Sa Thermal Tool Kab Lagayein?

| Problem mein kya dikhe? | Kaun sa tool lagao? |
|---|---|
| Scale conversions, faulty thermometer, gas pressure vs T | **C/5 = (F-32)/9**; **K = C + 273**; **P₁/T₁ = P₂/T₂** (Kelvin!) ([Topic 1](thermal-properties-of-matter.md)) |
| Metal gap, hole expansion, liquid overflow, water at 4 °C | **ΔL = LαΔT**; **α:β:γ = 1:2:3**; **γ_app = γ_liq - 3α_vessel** ([Topic 2](thermal-properties-of-matter-part2.md)) |
| Mixing ice, water, steam, hot metal | Check **Q_avail vs Q_melt** first! **Q = mcΔT + mL** ([Topic 3](thermal-properties-of-matter-part3.md)) |
| Heat flow through rod/wall, junction temperature | **H = kAΔT/L = ΔT/R_th**; Series **R₁+R₂**; Parallel **1/R₁+1/R₂** ([Topic 4](thermal-properties-of-matter-part4.md)) |
| Star color/luminosity, cooling cup of tea | **λ_m T = b**; **P = eσAT⁴**; **(T₁-T₂)/t = K((T₁+T₂)/2 - T₀)** ([Topic 5](thermal-properties-of-matter-part5.md)) |

---

## 6 Mixed Synthesis Problems

### Problem 1: Ice (-20 °C) + Steam (100 °C) Calorimetry

50 g of ice at -20 °C is mixed with 20 g of steam at 100 °C (c_ice = 0.5, c_w = 1 cal/g°C, L_f = 80, L_v = 540 cal/g). Find the final temperature and composition of the mixture!

**Solution:**
- Heat needed to bring 50 g ice (-20 °C) -> water at 100 °C:
  Q_ice_to_100 = 50(0.5)(20) + 50(80) + 50(1)(100) = 500 + 4000 + 5000 = **9500 cal**.
- Heat available from condensing ALL 20 g steam at 100 °C:
  Q_steam_cond = 20 × 540 = **10,800 cal** (> 9500 cal!).
Since 10,800 > 9500, NOT all steam condenses!
- Mass of steam condensed = 9500 / 540 ≈ **17.59 g**.
- Final state: **Temperature = 100 °C**, consisting of **67.59 g water + 2.41 g steam**!

Jaanch:
- Jaanch: Always compare heat budgets before solving for T! ✅

---

### Problem 2: Series Composite Wall + Ice Melting

A copper slab (k₁ = 400 W m⁻¹ K⁻¹, L = 0.1 m) and an iron slab (k₂ = 80 W m⁻¹ K⁻¹, L = 0.1 m), each of area 0.01 m², are joined in series between 120 °C (copper end) and 0 °C (iron end). Find: (a) junction temperature T_J, (b) steady heat current H.

**Solution:**
- (a) Equal lengths & areas: T_J = (400 × 120 + 80 × 0) / (400 + 80) = 48,000 / 480 = **100 °C**!
- (b) H = k₁ A (120 - 100) / 0.1 = (400 × 0.01 × 20) / 0.1 = 80 / 0.1 = **800 W**.

Jaanch:
- Jaanch: Check iron slab: H = (80 × 0.01 × 100) / 0.1 = 80 / 0.1 = 800 W ✅

---

### Problem 3: Wien's Law + Stefan–Boltzmann Luminosity Ratio

Star A has peak wavelength 300 nm and radius R_A = R. Star B has peak wavelength 600 nm and radius R_B = 4 R. Find the ratio of their total radiated powers P_A / P_B!

**Solution:**
- By Wien's Law (T ∝ 1/λ_m): T_A / T_B = 600 / 300 = **2**.
- By Stefan's Law (P ∝ R² T⁴): P_A / P_B = (R_A / R_B)² × (T_A / T_B)⁴ = (1 / 4)² × 2⁴ = (1 / 16) × 16 = **1 : 1**!

Jaanch:
- Jaanch: Smaller hotter star A radiates exact same total power as 4× larger cooler star B! ✅

---

### Problem 4: Thermal Expansion + Ideal Gas Pressure

A 1000 cm³ glass flask (γ_glass = 3 × 10⁻⁵ °C⁻¹) is completely filled with alcohol (γ_alc = 1.13 × 10⁻³ °C⁻¹) at 20 °C. Find the volume of alcohol that spills out when heated to 70 °C.

**Solution:**
γ_app = (113 - 3) × 10⁻⁵ = 110 × 10⁻⁵ = 1.1 × 10⁻³ °C⁻¹.
ΔV = 1000 × (1.1 × 10⁻³) × 50 = **55 cm³**.

Jaanch:
- Jaanch: 1000 × 50 × 1.1 × 10⁻³ = 55 cm³ ✅

---

### Problem 5: Newton's Law of Cooling + Finding Specific Heat

A calorimeter cools from 70 °C to 50 °C in 4 minutes in a 20 °C room. How long will it take to cool from 50 °C to 30 °C?

**Solution:**
- Stage 1 (avg 60 °C, excess 40 °C): 20 / 4 = 5 = 40 K => K = 1/8 min⁻¹.
- Stage 2 (avg 40 °C, excess 20 °C): 20 / t = (1/8)(20) => **t = 8 minutes**.

Jaanch:
- Jaanch: Excess temperature halved (40 -> 20) => time doubled (4 -> 8 min) ✅

---

### Problem 6: Electrical Heater + Specific Heat + Latent Heat

A 1000 W kettle contains 1 kg of water at 20 °C (c = 4200 J/kg K, L_v = 2.26 × 10⁶ J/kg). How long does it take to: (a) reach 100 °C, (b) boil away 100 g (0.1 kg) of water once at 100 °C?

**Solution:**
- (a) Q₁ = 1 × 4200 × 80 = 336,000 J => t₁ = 336,000 / 1000 = **336 s (5 min 36 s)**.
- (b) Q₂ = 0.1 × 2.26 × 10⁶ = 226,000 J => t₂ = 226,000 / 1000 = **226 s (3 min 46 s)**.

Jaanch:
- Jaanch: Boiling just 10% of the water takes nearly as long as heating ALL of it by 80 °C! ✅

---

## 3 Synthesis Mistakes (Mixed-Problem Traps)

### Galti 1: Steam + Ice mixing mein steam ko poora condense maan lena bina check kiye
- **Galat:** Problem 1 mein final T > 100 °C nikal lena!
- **Sahi:** Normal pressure par water + steam mixture 100 °C se upar nahi ja sakta jab tak saara paani steam na ban jaye! Hamesha heat budget compare karo!

### Galti 2: Star luminosity compare karte waqt radius R² bhool kar sirf T⁴ le lena
- **Galat:** T_A = 2 T_B => P_A = 16 P_B!
- **Sahi:** Total power **P = σ (4 π R²) T⁴ ∝ R² T⁴**! Area (R²) bhi include karo!

### Galti 3: Conduction mein T₁ - T₂ ko Kelvin mein convert karne par +273 jodne ki galti
- **Galat:** ΔT = (100 + 273) - 0!
- **Sahi:** Difference ΔT Celsius aur Kelvin dono mein **exact same** hota hai (100 °C - 0 °C = 100 K)!

---

## Mixed Practice Questions

*(Take c_w = 1 cal/g°C = 4200 J/kg K, L_f = 80 cal/g, L_v = 540 cal/g, b = 2.9 × 10⁻³ m K unless stated otherwise.)*

### Question 1
Convert 68 °F to Celsius and Kelvin.

**Solution:**
C = (5/9)(68 - 32) = (5/9)(36) = **20 °C**; K = **293.15 K**.

Jaanch:
- Jaanch: (9/5)(20) + 32 = 36 + 32 = 68 °F ✅

---

### Question 2
A 2 m steel rod (α = 1.2 × 10⁻⁵ °C⁻¹) is heated by 100 °C. Find its increase in length in mm.

**Solution:**
ΔL = 2 × (1.2 × 10⁻⁵) × 100 = 2.4 × 10⁻³ m = **2.4 mm**.

Jaanch:
- Jaanch: 2 × 1.2 = 2.4 mm ✅

---

### Question 3
40 g of ice at 0 °C is mixed with 100 g of water at 40 °C. Find the final temperature.

**Solution:**
Q_melt = 40 × 80 = 3200 cal; Q_avail = 100 × 40 = 4000 cal > 3200 cal => ALL melts!
Leftover = 800 cal warms 140 g water: T = 800 / 140 = **40 / 7 ≈ 5.71 °C**.

Jaanch:
- Jaanch: 100(40 - 5.71) = 3429 cal = 3200 + 40(5.71) ✅

---

### Question 4
Two rods of equal length and area with k₁ = 150 and k₂ = 300 W m⁻¹ K⁻¹ are joined in series between 90 °C (at k₂ end) and 0 °C (at k₁ end). Find the junction temperature.

**Solution:**
T_J = [150(0) + 300(90)] / 450 = 27,000 / 450 = **60 °C**.

Jaanch:
- Jaanch: 300(90 - 60) = 9000 = 150(60 - 0) ✅

---

### Question 5
A blackbody emits peak radiation at 1000 nm at 2900 K. Find its peak wavelength at 5800 K.

**Solution:**
T doubles => λ halves => **500 nm**.

Jaanch:
- Jaanch: 500 × 5800 = 1000 × 2900 ✅

---

### Question 6
A body cools from 80 °C to 70 °C in 3 minutes in a 25 °C room. Find the time to cool from 60 °C to 50 °C.

**Solution:**
- Stage 1 (avg 75, excess 50): 10/3 = 50 K => K = 1/15 min⁻¹.
- Stage 2 (avg 55, excess 30): 10/t = (1/15)(30) = 2 => **t = 5 minutes**.

Jaanch:
- Jaanch: Excess ratio 50/30 = 5/3 => 3 × (5/3) = 5 min ✅

---

### Question 7
If the absolute temperature of a blackbody increases by 1%, find the approximate percentage increase in its radiated power.

**Solution:**
P ∝ T⁴ => %P ≈ 4 × (%T) = **4%**.

Jaanch:
- Jaanch: Power rule from Ch 1: 4 × 1% = 4% ✅

---

### Question 8
A 100 g block of ice at 0 °C melts completely when 8000 cal of heat is supplied. What is the change in its temperature?

**Solution:**
Phase change occurs at constant temperature => **ΔT = 0 °C**!

Jaanch:
- Jaanch: 100 × 80 = 8000 cal exactly melts it to 0 °C water ✅

---

### Question 9
Two slabs of equal thickness and area with k₁ = 100 and k₂ = 300 W m⁻¹ K⁻¹ are joined in series. Find k_eq.

**Solution:**
k_eq = 2(100)(300) / (100 + 300) = 60,000 / 400 = **150 W m⁻¹ K⁻¹**.

Jaanch:
- Jaanch: Harmonic mean of 100 and 300 is 150 ✅

---

### Question 10
A sealed gas cylinder at 27 °C has pressure 1.5 atm. Find its pressure at 127 °C (constant volume).

**Solution:**
T₁ = 300 K, T₂ = 400 K => P₂ = 1.5 × (400 / 300) = **2.0 atm**.

Jaanch:
- Jaanch: 1.5 × 4/3 = 2.0 atm ✅

---

### Question 11
State whether the following statements are True or False:
(a) Water has its minimum volume (maximum density) at 4 °C.
(b) A shiny white surface is a better radiator of heat than a matte black surface at the same temperature.

**Solution:**
- (a) **True** ✅ — Anomalous expansion of water!
- (b) **False** ❌ — Good absorber = good emitter => matte black radiates much better than shiny white!

Jaanch:
- Jaanch: Verified from Topics 2 and 4 ✅

---

### Question 12
Find the ratio of radiated power of Star X (radius R, temperature 2T) to Star Y (radius 2R, temperature T).

**Solution:**
P_X / P_Y = (R / 2R)² × (2T / T)⁴ = (1/4) × 16 = **4 : 1**.

Jaanch:
- Jaanch: 16 / 4 = 4 : 1 ✅

---

## Chapter Wrap-up: Thermal Properties of Matter at a Glance

| Topic | Core Formula / Rule | Ek Line Mein Yaad Rakho |
|---|---|---|
| [Topic 1: Thermometry](thermal-properties-of-matter.md) | C/5 = (F-32)/9; K = C + 273.15; PV = nRT | Gas laws mein HAMESHA Kelvin; ΔC = ΔK |
| [Topic 2: Thermal Expansion](thermal-properties-of-matter-part2.md) | ΔL = LαΔT; α:β:γ = 1:2:3; γ_app = γ_liq - 3α_vessel | Holes expand; water has max density at 4 °C |
| [Topic 3: Calorimetry & Latent](thermal-properties-of-matter-part3.md) | Q = mcΔT; Q = mL (L_f = 80, L_v = 540 cal/g) | Ice+water mein pehle Q_avail vs Q_melt check karo! |
| [Topic 4: Heat Transfer](thermal-properties-of-matter-part4.md) | H = kAΔT/L = ΔT/R_th; Series 2k₁k₂/(k₁+k₂) | Conduction = Ohm's law; Radiation needs no medium |
| [Topic 5: Cooling & Radiation](thermal-properties-of-matter-part5.md) | λ_m T = b; P = eσAT⁴; (T₁-T₂)/t = K((T₁+T₂)/2 - T₀) | Kelvin MUST for T⁴ & λ_m T; smaller sphere cools faster |
| [Topic 6: Mixed & Wrap-up](thermal-properties-of-matter-part6.md) | Ice+steam, series wall, star luminosity | Decision Map se sahi thermal formula chuno |

Tumne Thermal Properties of Matter ko poori tarah master kar liya hai! Agar 3-rod thermal junction networks, frozen pond ice-thickness time (t ∝ x²), pendulum clock thermal error (Δt/t = (1/2) α ΔT), aur bimetallic strip curvature radius dekhna chahte ho, toh [Gehrai Mein — Advanced Level](thermal-properties-of-matter-advanced.md) zaroor padho!

**Agle chapter mein:** Heat aur Work ko ek saath jod kar engines, refrigerators aur universe ke sabse gehre laws padhenge — **Thermodynamics** mein!
