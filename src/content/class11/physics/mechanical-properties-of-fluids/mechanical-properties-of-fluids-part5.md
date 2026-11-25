> **Class:** 11 | **Subject:** Physics | **Chapter 9:** Mechanical Properties of Fluids (Part 5)

# Sab Kuch Mila Kar: Mixed Problems & Chapter Wrap-up

> **Pichle topic se:** [Surface Tension & Capillary Rise](mechanical-properties-of-fluids-part4.md) mein humne drops, bubbles, aur Jurin's law padha. Ab chalo poore Fluids chapter ke sabhi tools — Pascal's Law, hydrostatics, Continuity, Bernoulli, Viscosity, Stokes' Law, aur Surface Tension — ko ek saath mila kar mixed synthesis problems solve karte hain!

---

## Sitaram ka Hydraulic & Fluid-Systems Command Centre

Sitaram ek Fluid-Systems Chief hai. Uske test facility mein har din ek saath charon fluid regimes aate hain — hydraulic presses, Venturi pipelines, viscous oil settling tanks, aur microfluidic capillary tubes! Sitaram ka **Decision Map** har fluid problem ka turant rasta dikha deta hai.

---

## Decision Map: Kaun Sa Fluid Tool Kab Lagayein?

| Problem mein kya dikhe? | Kaun sa tool lagao? |
|---|---|
| Static depth, hydraulic lift, U-tube, dam thrust | **P = P_atm + ρgh**; **F₂/F₁ = A₂/A₁**; **ρ₁h₁ = ρ₂h₂** ([Topic 1](mechanical-properties-of-fluids.md)) |
| Flowing pipe, wing lift, tank hole (efflux), Venturimeter | **A₁v₁ = A₂v₂**; **P + (1/2)ρv² + ρgh = const**; **v = √(2gh)** ([Topic 2](mechanical-properties-of-fluids-part2.md)) |
| Falling sphere in oil/air, merging raindrops, laminar vs turbulent | **F = 6πηrv**; **v_T = 2r²(ρ-σ)g/(9η)**; **v_big = N^(2/3)v_small**; **R_e = ρvD/η** ([Topic 3](mechanical-properties-of-fluids-part3.md)) |
| Soap bubble, spraying drops, capillary rise/tilt | **ΔW = S ΔA**; Drop **2S/R**, Soap **4S/R**; **h = 2S cos θ/(rρg)** ([Topic 4](mechanical-properties-of-fluids-part4.md)) |

---

## 6 Mixed Synthesis Problems

### Problem 1: Bernoulli + Continuity in an Inclined Tapering Pipe

Water flows upward through a tapering pipe: at the lower end (h₁ = 0, area A₁ = 20 cm²), v₁ = 2 m/s and P₁ = 2.0 × 10⁵ Pa. At the upper end (h₂ = 2 m, area A₂ = 10 cm²), find v₂ and P₂ (g = 10 m/s², ρ = 1000 kg/m³).

**Solution:**
- Continuity: 20(2) = 10 v₂ => **v₂ = 4 m/s**.
- Bernoulli: P₁ + (1/2)ρv₁² + 0 = P₂ + (1/2)ρv₂² + ρgh₂
  200,000 + 500(4) = P₂ + 500(16) + 1000(10)(2)
  202,000 = P₂ + 8,000 + 20,000 => **P₂ = 174,000 Pa = 1.74 × 10⁵ Pa**.

Jaanch:
- Jaanch: Both rising height (-20 kPa) and higher speed (-6 kPa) drop the pressure by 26 kPa total ✅

---

### Problem 2: Sealed Tank Under Extra Air Pressure (Modified Torricelli!)

A closed water tank has water of depth h = 5 m, and the air space above the water is pressurized to gauge pressure P_g = 1.5 × 10⁵ Pa (g = 10 m/s², ρ = 1000 kg/m³). Find the efflux speed of water from a small hole at the bottom of the tank!

**Solution:**
Apply Bernoulli between water top (P_atm + P_g, v ≈ 0, height h) and bottom hole (P_atm, v, height 0):
P_g + ρ g h = (1/2) ρ v²
1.5 × 10⁵ + 1000(10)(5) = 500 v²
150,000 + 50,000 = 500 v² => 200,000 = 500 v² => v² = 400 => **v = 20 m/s**!

Jaanch:
- Jaanch: Without extra air pressure, v = √(2gh) = 10 m/s; extra 1.5 atm boosts it to 20 m/s ✅

---

### Problem 3: Coalescing Drops — Terminal Speed AND Surface Energy Together!

64 identical small raindrops of radius r = 0.5 mm (S = 0.07 N/m), each falling at terminal speed 1 cm/s, merge into a single large drop. Find: (a) the new radius R, (b) the new terminal speed, (c) the fraction of surface energy released as heat!

**Solution:**
- (a) R = 64^(1/3) r = 4 r = **2.0 mm**.
- (b) v_big = 64^(2/3) × 1 = 16 × 1 = **16 cm/s**.
- (c) Initial area A_i = 64 (4 π r²); Final area A_f = 4 π (4r)² = 16 (4 π r²).
  Fraction released = (64 - 16) / 64 = 48 / 64 = **3 / 4 = 75%**!

Jaanch:
- Jaanch: 1 - 1/N^(1/3) = 1 - 1/4 = 3/4 = 75% ✅

---

### Problem 4: Hydraulic Lift + Buoyancy Check

A 500 kg block of iron (density 5000 kg/m³) is completely submerged in water (1000 kg/m³) while resting on the large piston (area 0.5 m²) of a hydraulic lift. What force is needed on the small piston (area 0.01 m²) to just lift the submerged iron block (g = 10 m/s²)?

**Solution:**
- Apparent weight of submerged iron = W (1 - ρ_w / ρ_iron) = 5000 (1 - 1000/5000) = 5000 × 0.8 = **4000 N**.
- Hydraulic lift: F₁ = F₂ (A₁ / A₂) = 4000 × (0.01 / 0.5) = 4000 / 50 = **80 N**.

Jaanch:
- Jaanch: Buoyancy reduces effective load by 20% (5000 -> 4000 N), then hydraulic lift divides by 50 => 80 N ✅

---

### Problem 5: Capillary Rise Inside a Free-Falling Lift!

Water normally rises to 5 cm in a 15 cm long glass capillary tube on Earth. If the apparatus is inside a freely falling elevator (g_eff = 0!), what happens to the water column?

**Solution:**
With g_eff = 0, weight of the water column is zero while upward surface tension still pulls! So the water **rises all the way to the top of the 15 cm tube and stops there** (its meniscus flattens so cos θ -> 0; it does **NOT** overflow as a fountain!).

Jaanch:
- Jaanch: Conservation of energy forbids a perpetual fountain — the meniscus simply flattens at the top! ✅

---

### Problem 6: Air Bubble Rising & Expanding Near Surface

An air bubble has radius 1 mm at a depth of 10 m in water (P_atm = 10⁵ Pa, ignoring surface tension and assuming constant temperature). What is its volume when it reaches just below the surface?

**Solution:**
At depth 10 m: P₁ = 10⁵ + 1000(10)(10) = 2 × 10⁵ Pa (2 atm).
At surface: P₂ = 10⁵ Pa (1 atm).
By Boyle's Law (P₁ V₁ = P₂ V₂): **V₂ = 2 V₁** (volume doubles; radius becomes 2^(1/3) ≈ 1.26 mm!).

Jaanch:
- Jaanch: Pressure halves => volume doubles ✅

---

## 3 Synthesis Mistakes (Mixed-Problem Traps)

### Galti 1: Free-falling lift mein capillary water ko fountain ban kar bahar nikalta hua maan lena
- **Galat:** g = 0 => h = ∞ => paani tube se bahar fountain ki tarah udega!
- **Sahi:** Fountain se perpetual energy ban jati jo impossible hai! Paani tube ke top par pahunch kar ruk jata hai aur meniscus flat (radius of curvature -> ∞) ho jata hai!

### Galti 2: Pressurized tank mein efflux speed sirf √(2 g h) laga dena
- **Galat:** Hole depth 5 m hai toh v = √(2×10×5) = 10 m/s!
- **Sahi:** Jab top par extra gauge pressure P_g ho, toh **v = √(2 g h + 2 P_g / ρ)**!

### Galti 3: Area ratio aur radius ratio ko Continuity ya Hydraulic Lift mein mix kar dena
- **Galat:** Pipe ka radius aadha hua toh speed double hui!
- **Sahi:** A = π r² => radius aadha hone par area **1/4** hota hai, toh speed **4×** hoti hai!

---

## Mixed Practice Questions

*(Take g = 10 m/s², ρ_water = 1000 kg/m³, P_atm = 1.0 × 10⁵ Pa unless stated otherwise.)*

### Question 1
A hydraulic press has piston radii 5 cm and 25 cm. A 100 N force on the small piston lifts what load on the large piston?

**Solution:**
F₂ = 100 × (25 / 5)² = 100 × 25 = **2500 N**.

Jaanch:
- Jaanch: Radius 5× => Area 25× => Force 25× ✅

---

### Question 2
Water flows at 2 m/s through a pipe of diameter 6 cm that narrows to diameter 3 cm. Find the speed in the narrow section.

**Solution:**
v₂ = 2 × (6 / 3)² = 2 × 4 = **8 m/s**.

Jaanch:
- Jaanch: Diameter halves => speed quadruples ✅

---

### Question 3
A large open tank is filled with water to height 12 m. Find the maximum horizontal range of a water jet emerging from a small side hole.

**Solution:**
R_max = H = **12 m** (when hole is at depth 6 m).

Jaanch:
- Jaanch: 2 √(6 × 6) = 12 m ✅

---

### Question 4
8 identical drops each falling at terminal speed 3 cm/s merge into one drop. Find the new terminal speed.

**Solution:**
v_big = 8^(2/3) × 3 = 4 × 3 = **12 cm/s**.

Jaanch:
- Jaanch: R = 2 r => v_T ∝ r² => 4 × 3 = 12 cm/s ✅

---

### Question 5
Find the excess pressure inside a soap bubble of radius 4 mm (S = 0.04 N/m).

**Solution:**
ΔP = 4 S / R = 4(0.04) / (4 × 10⁻³) = **40 Pa**.

Jaanch:
- Jaanch: 0.16 / 0.004 = 40 Pa ✅

---

### Question 6
Water rises 8 cm in a capillary tube of diameter 1 mm. Find the rise in a tube of diameter 2 mm.

**Solution:**
h ∝ 1 / d => 8 / 2 = **4 cm**.

Jaanch:
- Jaanch: Double diameter => half rise ✅

---

### Question 7
In a horizontal pipe, water pressure drops by 8000 Pa where speed rises from 0 to v. Find v.

**Solution:**
(1/2)(1000) v² = 8000 => 500 v² = 8000 => v² = 16 => **v = 4 m/s**.

Jaanch:
- Jaanch: 500 × 16 = 8000 Pa ✅

---

### Question 8
A wooden cube of density 750 kg/m³ floats in water. What percentage of its volume sticks OUT above the water surface?

**Solution:**
Submerged fraction = 750 / 1000 = 75%.
Above water = 100% - 75% = **25%**.

Jaanch:
- Jaanch: 75% submerged + 25% above = 100% ✅

---

### Question 9
A metal sphere of radius 1 mm falls at terminal speed 5 cm/s in an oil. What is the terminal speed of a sphere of the same metal with radius 2 mm in the same oil?

**Solution:**
v_T ∝ r² => 2² × 5 = **20 cm/s**.

Jaanch:
- Jaanch: 4 × 5 = 20 cm/s ✅

---

### Question 10
A liquid drop of radius R is broken into 27 identical smaller drops. By what factor does its total surface energy increase?

**Solution:**
r = R / 3 => total area = 27 × 4π (R/3)² = 3 × (4 π R²).
Surface energy increases by a factor of **3** (200% increase!).

Jaanch:
- Jaanch: N^(1/3) = 27^(1/3) = 3 ✅

---

### Question 11
State whether the following statements are True or False:
(a) If two soap bubbles of different radii are connected by a tube, air flows from the smaller bubble to the larger bubble.
(b) Water flows faster in the wider part of a horizontal pipe.

**Solution:**
- (a) **True** ✅ — Smaller R => higher excess pressure (4S/R) => air flows from smaller to larger!
- (b) **False** ❌ — Continuity A₁v₁ = A₂v₂ means water flows faster in the **narrower** part!

Jaanch:
- Jaanch: Core results from Topics 2 and 4 ✅

---

### Question 12
A U-tube contains water in one arm (height 20 cm above interface) and an immiscible liquid in the other arm (height 25 cm above interface). Find the density of the unknown liquid.

**Solution:**
ρ × 25 = 1000 × 20 => **ρ = 20,000 / 25 = 800 kg/m³**.

Jaanch:
- Jaanch: 800 × 25 = 20,000 = 1000 × 20 ✅

---

## Chapter Wrap-up: Mechanical Properties of Fluids at a Glance

| Topic | Core Formula / Rule | Ek Line Mein Yaad Rakho |
|---|---|---|
| [Topic 1: Hydrostatics & Pascal](mechanical-properties-of-fluids.md) | P = P_atm + ρgh; F₂/F₁ = A₂/A₁; ρ₁h₁ = ρ₂h₂ | Pressure is scalar & shape-independent; lift multiplies force, NOT work |
| [Topic 2: Continuity & Bernoulli](mechanical-properties-of-fluids-part2.md) | A₁v₁ = A₂v₂; P + ½ρv² + ρgh = const; v = √(2gh) | Narrow = fast = low pressure; max jet range R_max = H at h = H/2 |
| [Topic 3: Viscosity & Stokes](mechanical-properties-of-fluids-part3.md) | F = 6πηrv; v_T = 2r²(ρ-σ)g/(9η); R_e = ρvD/η | Temp ↑ => η_liquid ↓, η_gas ↑; N drops merge => v_big = N^(2/3)v |
| [Topic 4: Surface Tension](mechanical-properties-of-fluids-part4.md) | ΔW = S ΔA; Drop 2S/R, Soap 4S/R; h = 2S cos θ/(rρg) | Soap bubble has 2 surfaces; smaller bubble has higher pressure! |
| [Topic 5: Mixed & Wrap-up](mechanical-properties-of-fluids-part5.md) | Pressurized efflux, buoyancy + lift, free-fall capillary | Decision Map se hydrostatics, dynamics, viscosity ya ST chuno |

Tumne Fluid Mechanics ko hydrostatics se lekar Bernoulli, viscosity aur surface tension tak poori tarah master kar liya hai! Agar accelerating liquid tanks (tan θ = a/g), rotating liquid paraboloids, time to empty a tank, insufficient-length capillaries, aur isothermal bubble merging (R² = R₁² + R₂²) dekhna chahte ho, toh [Gehrai Mein — Advanced Level](mechanical-properties-of-fluids-advanced.md) zaroor padho!

**Agle chapter mein:** Mechanics ke baad ab hum **Heat aur Temperature** ki duniya mein kadam rakhenge — **Thermal Properties of Matter** mein hum thermal expansion, calorimetry, latent heat, aur heat transfer (conduction, convection, radiation) seekhenge!
