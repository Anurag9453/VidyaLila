> **Class:** 11 | **Subject:** Physics | **Chapter 10:** Thermal Properties of Matter (Part 4)

# Heat Transfer: Conduction, Convection & Radiation

> **Pichle topic se:** [Calorimetry & Latent Heat](thermal-properties-of-matter-part3.md) mein humne seekha ki kitni heat (Q) chahiye. Ab hum seekhenge ki heat ek jagah se doosri jagah **kis rate (dQ/dt, Watts)** se travel karti hai — teen alag raston se: **Conduction**, **Convection**, aur **Radiation**!

---

## Lokanath ka Passive-Solar House & Furnace Wall

Lokanath ek green-building aur furnace-insulation architect hai. Ek thermos flask mein teenon modes ko roka jata hai:
- **Conduction** (solid contact mein vibration transfer) rokne ke liye plastic cap aur thin glass walls;
- **Convection** (garam fluid ka upar uthna) rokne ke liye double-wall ke beech **vacuum**;
- **Radiation** (EM waves bina medium ke) rokne ke liye andar **chamakdar silver coating**!

Chalo sabse zaroori calculation tool — **Fourier's Law of Conduction & Thermal Resistance** — ko electricity ke Ohm's Law ki tarah aasaan bana kar seekhte hain!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Conduction | Solids mein bina particles ki jagah chhode (vibrations & free electrons se) heat transfer |
| Thermal Conductivity (k) | Material ki heat conduct karne ki kshamta (SI unit: **W m⁻¹ K⁻¹**; Silver/Copper high k, wood/air very low k) |
| Heat Current (H) | Rate of heat flow: **H = dQ / dt = k A (T₁ - T₂) / L** (SI unit: **Watt = J/s**) |
| Thermal Resistance (R_th) | Ohm's Law analogue: **R_th = L / (k A)** => **H = ΔT / R_th** (unit: **K / W**) |
| Convection | Fluids mein garam halke fluid ka upar uthna aur thande bhari fluid ka neeche aana (sea breeze, land breeze, trade winds) |
| Radiation | Electromagnetic (infrared) waves ke roop mein heat transfer — **vacuum** mein bhi speed of light c se chalta hai! |

---

## 1. Fourier's Law of Conduction & Thermal Resistance Analogy

Steady state (jab rod ka temperature har point par constant ho jaye):
```
  Heat Current:   H = dQ / dt = k A (T₁ - T₂) / L = ΔT / R_th
  where Thermal Resistance:   R_th = L / (k A)
```

### Series & Parallel Combinations of Composite Slabs (Just Like Resistors!)

1. **Slabs in Series (End-to-End, same Area A, lengths L₁ & L₂):**
   - **Same Heat Current H** flows through both!
   - **R_eq = R₁ + R₂ = L₁/(k₁ A) + L₂/(k₂ A)**
   - **Junction Temperature T_J:** (T₁ - T_J) / R₁ = (T_J - T₂) / R₂
   - Equal lengths (L₁ = L₂): **k_eq = 2 k₁ k₂ / (k₁ + k₂)** (Harmonic Mean!)

2. **Slabs in Parallel (Side-by-Side, same Length L, areas A₁ & A₂):**
   - **Same Temperature Difference ΔT** across both!
   - **1 / R_eq = 1 / R₁ + 1 / R₂**  =>  **H_total = H₁ + H₂**
   - Equal areas (A₁ = A₂): **k_eq = (k₁ + k₂) / 2** (Arithmetic Mean!)

---

## 2. Convection & Radiation Highlights

- **Convection:** Natural convection (gravity-driven buoyancy: **Sea Breeze** din mein zameen garam hone se samudra se zameen ki taraf; **Land Breeze** raat mein zameen thandi hone se zameen se samudra ki taraf!) vs Forced convection (pump/fan/human blood circulation).
- **Radiation:** Sabse tez mode (c = 3 × 10⁸ m/s, no medium needed — Sun se Earth tak heat radiation se aati hai!). **Good absorbers (matte black) are good emitters**; shiny silver surfaces are poor absorbers and poor emitters!

---

## Solved Examples

### Example 1: Heat Flow Through a Copper Rod

A copper rod (k = 400 W m⁻¹ K⁻¹) of length 0.5 m and cross-sectional area 2 × 10⁻⁴ m² has its ends kept at 100 °C and 0 °C in steady state. Find: (a) the rate of heat flow H, (b) the temperature at a point 0.2 m from the hot end.

**Solution:**
- (a) H = k A ΔT / L = (400 × 2 × 10⁻⁴ × 100) / 0.5 = 8 / 0.5 = **16 W (16 J/s)**.
- (b) Temperature drops linearly at rate 100 °C / 0.5 m = 200 °C/m.
  At 0.2 m from hot end: T = 100 - 200(0.2) = **60 °C**.

Jaanch:
- Jaanch: Check H in first 0.2 m: 400(2×10⁻⁴)(40) / 0.2 = 3.2 / 0.2 = 16 W ✅

---

### Example 2: Junction Temperature of Two Slabs in Series

A steel rod (k₁ = 50 W m⁻¹ K⁻¹) and a copper rod (k₂ = 400 W m⁻¹ K⁻¹) of identical length L and identical cross-section A are joined end-to-end. The free steel end is at 0 °C and the free copper end is at 90 °C. Find the junction temperature T_J in steady state!

**Solution:**
Same heat current H through both (and same L, A):
k₁ (T_J - 0) = k₂ (90 - T_J)
50 T_J = 400 (90 - T_J) => T_J = 8 (90 - T_J) = 720 - 8 T_J => 9 T_J = 720 => **T_J = 80 °C**!
*(Notice: Junction is very close to copper's 90 °C because copper conducts 8× better than steel!)*

Jaanch:
- Jaanch: Weighted formula T_J = (k₁ T₁ + k₂ T₂)/(k₁ + k₂) = (50×0 + 400×90)/450 = 36000/450 = 80 °C ✅

---

### Example 3: Equivalent Conductivity of Two Equal Slabs (Series vs Parallel)

Two slabs of equal thickness and area have thermal conductivities k₁ = 200 and k₂ = 600 W m⁻¹ K⁻¹. Find k_eq when placed: (a) in series, (b) in parallel.

**Solution:**
- (a) Series: k_eq = 2 k₁ k₂ / (k₁ + k₂) = 2(200)(600) / 800 = **300 W m⁻¹ K⁻¹**.
- (b) Parallel: k_eq = (k₁ + k₂) / 2 = (200 + 600) / 2 = **400 W m⁻¹ K⁻¹**.

Jaanch:
- Jaanch: Harmonic mean (300) < Arithmetic mean (400) ✅

---

### Example 4: Melting Ice Rate Through a Metal Rod

One end of an iron rod (L = 0.2 m, A = 10⁻³ m², k = 84 W m⁻¹ K⁻¹) is placed in boiling water (100 °C) and the other end in melting ice (0 °C). How much ice melts per second (L_f = 3.36 × 10⁵ J/kg)?

**Solution:**
- Heat current H = (84 × 10⁻³ × 100) / 0.2 = 8.4 / 0.2 = **42 J/s**.
- Rate of melting dm/dt = H / L_f = 42 / (3.36 × 10⁵) = **1.25 × 10⁻⁴ kg/s (0.125 g/s)**.

Jaanch:
- Jaanch: 42 / 336 = 1/8 = 0.125 g/s ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Series slabs mein k_eq = (k₁ + k₂)/2 le lena
- **Galat:** Series mein average k = (k₁ + k₂)/2!
- **Sahi:** Series mein **Thermal Resistance add** hota hai (R = R₁ + R₂), jisse equal lengths ke liye **Harmonic Mean 2 k₁ k₂ / (k₁ + k₂)** milta hai!

### Galti 2: Natural convection ko zero-gravity (space station) mein bhi hota hua maan lena
- **Galat:** Space station mein bhi garam hawa upar uth kar convection karegi!
- **Sahi:** Natural convection **gravity-driven buoyancy** se chalta hai — zero-g space mein natural convection **ZERO** hota hai (sirf fans se forced convection chalta hai)!

### Galti 3: Sea Breeze aur Land Breeze ka time ulta yaad kar lena
- **Galat:** Raat mein samudra se hawa aati hai!
- **Sahi:** **Din mein** zameen jaldi garam hoti hai (low specific heat) => upar uthti hai => thandi hawa samudra se zameen aati hai (**Sea Breeze**)! Raat mein ulta (**Land Breeze**)!

---

## Quick Recap

- **Conduction:** H = dQ/dt = k A ΔT / L = ΔT / R_th; **R_th = L / (k A)**.
- **Series (equal L):** k_eq = 2k₁k₂/(k₁+k₂); **Parallel (equal A):** k_eq = (k₁+k₂)/2.
- **Convection:** Fluid motion (needs gravity for natural convection).
- **Radiation:** EM waves (fastest, works in vacuum!).

---

## Practice Questions

### Question 1
A 0.4 m long aluminium rod (k = 200 W m⁻¹ K⁻¹) of area 5 × 10⁻⁴ m² has its ends at 120 °C and 20 °C. Find the steady-state heat current H in Watts.

**Solution:**
H = (200 × 5 × 10⁻⁴ × 100) / 0.4 = 10 / 0.4 = **25 W**.

Jaanch:
- Jaanch: 200 × 0.05 = 10; 10 / 0.4 = 25 W ✅

---

### Question 2
Two identical rods of thermal conductivities k and 3k are joined in series between 100 °C (at the 3k end) and 20 °C (at the k end). Find the junction temperature T_J.

**Solution:**
T_J = (k₁ T₁ + k₂ T₂) / (k₁ + k₂) = [k(20) + 3k(100)] / (4k) = 320 / 4 = **80 °C**.

Jaanch:
- Jaanch: 3k(100 - 80) = 60k = k(80 - 20) ✅

---

### Question 3
Find the thermal resistance of a glass window pane of area 2 m², thickness 4 mm (4 × 10⁻³ m), and thermal conductivity k = 0.8 W m⁻¹ K⁻¹.

**Solution:**
R_th = L / (k A) = (4 × 10⁻³) / (0.8 × 2) = (4 × 10⁻³) / 1.6 = **2.5 × 10⁻³ K/W**.

Jaanch:
- Jaanch: 4 / 1.6 = 2.5 × 10⁻³ K/W ✅

---

### Question 4
Two equal rods of thermal resistance 4 K/W and 12 K/W are connected: (a) in series, (b) in parallel. Find the equivalent thermal resistance in each case.

**Solution:**
- (a) Series: R_eq = 4 + 12 = **16 K/W**.
- (b) Parallel: R_eq = (4 × 12) / (4 + 12) = 48 / 16 = **3 K/W**.

Jaanch:
- Jaanch: Exact same algebra as electrical resistors! ✅

---

### Question 5
A rod carries heat current H when its ends are at 100 °C and 0 °C. If the rod is melted and recast into a rod of **half the length** (same volume!), what is the new heat current for the same end temperatures?

**Solution:**
Constant volume V = A L => halving L **doubles A**!
H = k A ΔT / L ∝ A / L => new / old = 2 / (1/2) = **4 H**!

Jaanch:
- Jaanch: 2× area and 1/2 length => 4× heat current ✅

---

### Question 6
Two slabs of equal thickness and area with k₁ = 100 and k₂ = 300 W m⁻¹ K⁻¹ are placed in parallel. Find their equivalent thermal conductivity k_eq.

**Solution:**
k_eq = (100 + 300) / 2 = **200 W m⁻¹ K⁻¹**.

Jaanch:
- Jaanch: Arithmetic mean for equal-area parallel slabs ✅

---

### Question 7
Why are cooking utensils made of copper/aluminium bottoms with wooden or plastic handles?

**Solution:**
Copper/aluminium have very high thermal conductivity k (heat passes rapidly to food), while wood/plastic have very low k (insulators, safe to hold!).

Jaanch:
- Jaanch: High k for heating base, low k for grip ✅

---

### Question 8
A brass boiler has a base area of 0.15 m² and thickness 1 cm (0.01 m) with k = 100 W m⁻¹ K⁻¹. It boils water at 100 °C at the rate of 2.5 g/s (L_v = 2.26 × 10⁶ J/kg). Find the temperature of the outer surface of the boiler touching the flame.

**Solution:**
H = (dm/dt) L_v = (2.5 × 10⁻³)(2.26 × 10⁶) = **5650 W**.
H = k A (T - 100) / L => 5650 = (100 × 0.15 / 0.01) (T - 100) = 1500 (T - 100).
T - 100 = 5650 / 1500 ≈ 3.77 °C => **T ≈ 103.8 °C**.

Jaanch:
- Jaanch: High k of brass means only ~3.8 °C difference across 1 cm base drives 5.65 kW! ✅

---

### Question 9
Why does a double-glazed glass window (two glass panes with a thin trapped air layer between them) insulate a room much better than a single thick glass pane?

**Solution:**
Still trapped air has a very low thermal conductivity (~0.025 W m⁻¹ K⁻¹, 30× lower than glass!) and the thin gap prevents convection currents — giving huge thermal resistance!

Jaanch:
- Jaanch: Trapped air acts as an excellent thermal insulator ✅

---

### Question 10
A rod of length 1 m has its ends at 80 °C and 20 °C in steady state. Find the temperature gradient (dT / dx) and the temperature at a distance of 0.25 m from the cold end.

**Solution:**
- Temperature gradient magnitude = (80 - 20) / 1 = **60 °C/m**.
- At 0.25 m from cold end (20 °C): T = 20 + 60(0.25) = **35 °C**.

Jaanch:
- Jaanch: 0.75 m from hot end: 80 - 60(0.75) = 80 - 45 = 35 °C ✅

---

### Question 11
State whether the following statements are True or False:
(a) Heat reaches Earth from the Sun primarily by convection.
(b) Two thin blankets keep you warmer in winter than one single blanket of double thickness.

**Solution:**
- (a) **False** ❌ — Space is a vacuum; heat travels from Sun to Earth by **Radiation**!
- (b) **True** ✅ — Two thin blankets trap an extra insulating layer of air between them!

Jaanch:
- Jaanch: Verified from Sections 1 and 2 ✅

---

### Question 12
Two rods of the same material have lengths in the ratio 1 : 2 and radii in the ratio 2 : 1. Find the ratio of their steady-state heat currents H₁ / H₂ under the same temperature difference.

**Solution:**
H ∝ A / L ∝ r² / L => H₁ / H₂ = (2/1)² / (1/2) = 4 × 2 = **8 : 1**.

Jaanch:
- Jaanch: Rod 1 has 4× area and 1/2 length => 8× heat current ✅

---

Conduction, Convection, aur Radiation ab tumhare liye bilkul clear hain!

**Agle topic mein:** Garam chai kis rate se thandi hoti hai (**Newton's Law of Cooling**), taaron ka rang unka temperature kaise batata hai (**Wien's Law**), aur **Stefan–Boltzmann T⁴ Law** — chalo padhte hain [Newton's Law of Cooling, Stefan–Boltzmann & Wien's Law](thermal-properties-of-matter-part5.md)!
