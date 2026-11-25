> **Class:** 11 | **Subject:** Physics | **Chapter 8:** Mechanical Properties of Solids (Part 4)

# Elastic Potential Energy & Applications of Elasticity

> **Pichle topic se:** [Elastic Moduli](mechanical-properties-of-solids-part3.md) mein humne dekha ki ek wire spring constant k = YA/L ki tarah behave karti hai. Ab dekhenge ki khinchi hui wire mein kitni **Elastic Potential Energy** store hoti hai, aur yahi principles **cranes, I-beam bridges, aur Mount Everest ki maximum height (~10 km)** ko kaise samjhate hain!

---

## Tarkeshwar ka Heavy-Crane & I-Beam Bridge Design

Tarkeshwar ek bridge aur crane architect hai. Usne teen engineering secrets dikhaye:
1. Jab ek load M g wire ko ΔL khinchta hai, toh gravity **M g ΔL** work karti hai, par wire mein sirf **aadhi energy ((1/2) M g ΔL)** store hoti hai — baaki aadhi heat/oscillation mein chali jati hai!
2. Bridges mein solid square beams ke bajaye **I-shaped steel girders** lagaye jate hain — kyunki beam ka sag (jhukav) δ = W L³ / (4 Y b d³) depth ke **cube (d³)** ke inversely proportional hota hai! I-shape kam weight mein badi depth d deta hai!
3. Earth par koi bhi pahad ~10 km se ooncha kyun nahi ho sakta? Kyunki usse zyada height par base ki rocks apne hi weight ke shear stress se pighal/behnay lagti hain!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Elastic Potential Energy (U) | Stretched wire mein stored energy: **U = (1/2) F ΔL = (1/2) × Stress × Strain × Volume** |
| Elastic Energy Density (u) | Energy stored per unit volume: **u = (1/2) σ ε = (1/2) Y ε² = σ² / (2 Y)** (unit: **J m⁻³**) |
| Depression / Sag of a Beam (δ) | Centre par load W lagne se beam ka neeche jhukna: **δ = W L³ / (4 Y b d³)** |
| I-Section Girder | I-shape wala steel beam jo kam mass mein badi depth d aur anti-buckling flanges deta hai |

---

## 1. Elastic Potential Energy in a Stretched Wire

Wire ke liye F = (Y A / L) x (spring law!).
0 se ΔL tak khinchne mein kiya gaya work = Area under F–x triangle:
```
  U = (1/2) F ΔL = (1/2) (F / A) (ΔL / L) (A L) = (1/2) × Stress × Strain × Volume
```
Volume (V = A L) se divide karne par **Energy Density (u)**:
```
  u = U / V = (1/2) × Stress × Strain = (1/2) Y (Strain)² = (Stress)² / (2 Y)
```

---

## 2. Three Iconic Engineering Applications

1. **Crane Rope Minimum Radius:**
   Max load M g ke liye Stress = M g / (π r²) ≤ S_yield (yield strength) =>
   **r_min = √( M g / (π S_yield) )** (and thick steel ropes are braided from many thin wires for flexibility!).
2. **Bridge Beam Design (I-Beam):**
   Sag **δ = W L³ / (4 Y b d³)**! Depth **d** double karne se sag **8 guna kam** ho jata hai! Par bahut patla-lamba beam sideways mud (buckle) sakta hai — isliye upar-neeche flat flanges jod kar **I-shape** banate hain!
3. **Maximum Height of a Mountain on Earth:**
   Height h ke pahad ke base par pressure P = h ρ g.
   Rock ka elastic shear limit ≈ 3 × 10⁸ Pa, rock density ρ ≈ 3 × 10³ kg/m³, g ≈ 10 m/s²:
   **h_max ≈ σ_limit / (ρ g) ≈ (3 × 10⁸) / (3 × 10³ × 10) = 10,000 m = 10 km!**
   (Aur Mount Everest ki height **8.85 km** hai — bilkul is limit ke neeche!)

---

## Solved Examples

### Example 1: Elastic Energy & Energy Density in a Stretched Wire

A 2 m long steel wire of cross-sectional area 10⁻⁶ m² (Y = 2 × 10¹¹ Pa) is stretched by 2 mm by a force of 200 N. Find: (a) total elastic potential energy stored, (b) energy density u.

**Solution:**
- (a) U = (1/2) F ΔL = (1/2)(200)(2 × 10⁻³) = **0.20 J**.
- (b) Volume V = A L = 10⁻⁶ × 2 = 2 × 10⁻⁶ m³.
  u = U / V = 0.20 / (2 × 10⁻⁶) = **1.0 × 10⁵ J/m³**.

Jaanch:
- Jaanch: Check u = (1/2) Y ε²: ε = 2×10⁻³ / 2 = 10⁻³ => u = 0.5(2×10¹¹)(10⁻⁶) = 10⁵ J/m³ ✅

---

### Example 2: Crane Cable Minimum Radius

A steel crane cable has yield strength S_y = 3 × 10⁸ Pa and must safely lift a maximum load of 10⁴ kg (g = 10 m/s², π = 3.14). Find the minimum radius of the steel cable.

**Solution:**
F = 10⁴ × 10 = 10⁵ N.
A_min = F / S_y = 10⁵ / (3 × 10⁸) = (1/3) × 10⁻³ m².
π r² = (1/3) × 10⁻³ => r² ≈ 1.06 × 10⁻⁴ m² => **r ≈ 1.03 × 10⁻² m ≈ 1.03 cm** (in practice, safety factor 10 gives ~3.3 cm!).

Jaanch:
- Jaanch: π (0.0103)² ≈ 3.33 × 10⁻⁴ m²; 3.33×10⁻⁴ × 3×10⁸ = 10⁵ N ✅

---

### Example 3: Effect of Doubling Beam Depth on Bridge Sag

A wooden plank of breadth b and depth d sags by 16 mm at its centre under a load W. If the plank is turned on its edge so that its depth doubles (2d) and breadth halves (b/2), what will be the new sag?

**Solution:**
δ ∝ 1 / (b d³).
New / Old = [ 1 / ((b/2)(2d)³) ] / [ 1 / (b d³) ] = 2 / 8 = **1 / 4**.
New sag = 16 / 4 = **4 mm**!

Jaanch:
- Jaanch: Turning a rectangular plank vertically makes it 4× stiffer! ✅

---

### Example 4: Half Energy Stored, Half Lost as Heat!

A 10 kg mass is gently attached to a hanging wire and stretches it by 4 mm to its equilibrium position (g = 10 m/s²). Compare the decrease in gravitational PE of the mass with the elastic PE stored in the wire.

**Solution:**
- Loss in gravitational PE = M g ΔL = 10 × 10 × (4 × 10⁻³) = **0.40 J**.
- Elastic PE stored in wire = (1/2) M g ΔL = **0.20 J**.
- Remaining **0.20 J (50%)** is dissipated as heat during damping to equilibrium!

Jaanch:
- Jaanch: Always exactly 50% stored as elastic PE and 50% lost as heat! ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Stretched wire ki elastic energy ko F ΔL likh dena (1/2 bhool jana!)
- **Galat:** U = F ΔL = 200 × 0.002 = 0.40 J.
- **Sahi:** Force 0 se F tak linearly badhta hai => **U = (1/2) F ΔL = 0.20 J**!

### Galti 2: Energy density u = (1/2) σ ε ko total energy U maan lena
- **Galat:** (1/2) × Stress × Strain = Total Energy!
- **Sahi:** (1/2) × Stress × Strain sirf **Energy PER UNIT VOLUME (J/m³)** hai — total energy ke liye **Volume (A L)** se multiply karna mat bhoolo!

### Galti 3: Beam sag mein depth d ko breadth b ke barabar importance dena
- **Galat:** Breadth double karo ya depth double karo, sag dono mein aadha hoga!
- **Sahi:** **δ ∝ 1 / (b d³)**! Breadth double karne par sag **1/2** hota hai, par depth double karne par sag **1/8** ho jata hai!

---

## Quick Recap

- **Elastic PE:** U = (1/2) F ΔL = (1/2) σ ε V; **Energy Density:** u = (1/2) Y ε² = σ² / (2Y).
- **Hanging load:** 50% of gravitational PE loss is stored as elastic PE, 50% goes to heat.
- **Beam sag:** δ = W L³ / (4 Y b d³) => I-beams maximize d while preventing buckling.
- **Max mountain height:** h_max ≈ σ_limit / (ρ g) ≈ 10 km on Earth.

---

## Practice Questions

*(Take g = 10 m/s² unless stated otherwise.)*

### Question 1
A wire is stretched by 1 mm under a force of 50 N. Find the elastic potential energy stored in the wire.

**Solution:**
U = (1/2)(50)(10⁻³) = **0.025 J (25 mJ)**.

Jaanch:
- Jaanch: 25 × 10⁻³ = 0.025 J ✅

---

### Question 2
A steel wire (Y = 2 × 10¹¹ Pa) is subjected to a longitudinal strain of 2 × 10⁻³. Find the elastic energy density stored in the wire.

**Solution:**
u = (1/2) Y ε² = (1/2)(2 × 10¹¹)(4 × 10⁻⁶) = **4 × 10⁵ J/m³**.

Jaanch:
- Jaanch: 10¹¹ × 4 × 10⁻⁶ = 4 × 10⁵ J/m³ ✅

---

### Question 3
A wire of volume 4 × 10⁻⁶ m³ is subjected to a stress of 2 × 10⁸ Pa (Y = 2 × 10¹¹ Pa). Find the total elastic potential energy stored in it.

**Solution:**
u = σ² / (2Y) = (4 × 10¹⁶) / (4 × 10¹¹) = 10⁵ J/m³.
U = u × V = (10⁵)(4 × 10⁻⁶) = **0.4 J**.

Jaanch:
- Jaanch: Strain = 10⁻³; (1/2)(2×10⁸)(10⁻³)(4×10⁻⁶) = 0.4 J ✅

---

### Question 4
If a wire is stretched by 2 mm, it stores energy U. How much energy will it store if stretched by 6 mm (within elastic limit)?

**Solution:**
U ∝ (ΔL)² => stretch becomes 3× => energy becomes 3² = **9 U**.

Jaanch:
- Jaanch: (6/2)² = 9 ✅

---

### Question 5
A rectangular bridge beam of length L sags by 8 mm. If another beam of the same material has the same b and d, but twice the length (2L), what will be its sag under the same load?

**Solution:**
δ ∝ L³ => length 2× => sag becomes 2³ = 8× => **64 mm**!

Jaanch:
- Jaanch: Long spans sag dramatically (∝ L³), which is why bridges need intermediate pillars ✅

---

### Question 6
On a planet where g is half of Earth's gravity (g' = g / 2), what would be the maximum possible height of a mountain made of Earth-like rock (given h_max ≈ 10 km on Earth)?

**Solution:**
h_max = σ_limit / (ρ g) ∝ 1 / g => if g halves, **h_max doubles to ~20 km**! (That's why Olympus Mons on Mars — where g ≈ 0.38 g_Earth — is ~22 km tall!)

Jaanch:
- Jaanch: Lower gravity allows much taller mountains ✅

---

### Question 7
Two wires of the same material and same length have radii r and 2r. If both are stretched by the same tension F, find the ratio of elastic energy stored U₁ / U₂.

**Solution:**
U = F² L / (2 A Y) ∝ 1 / A ∝ 1 / r²!
U₁ / U₂ = (2r / r)² = **4 : 1** (thinner wire stretches 4× more and stores 4× more energy!).

Jaanch:
- Jaanch: ΔL₁ = 4 ΔL₂ and same F => U = (1/2) F ΔL gives 4 : 1 ✅

---

### Question 8
A 5 kg mass stretches a vertical wire by 2 mm. How much heat is dissipated in the process when the mass settles to equilibrium?

**Solution:**
Heat = (1/2) M g ΔL = (1/2)(50)(2 × 10⁻³) = **0.05 J**.

Jaanch:
- Jaanch: Total gravity work = 0.10 J; 0.05 J elastic PE + 0.05 J heat ✅

---

### Question 9
Why are crane lifting ropes made by twisting many thin steel wires together instead of using a single solid steel rod of the same cross-sectional area?

**Solution:**
Same total cross-sectional area same breaking strength deta hai, par kai patli taaron ko twist karne se rope **flexible** banti hai (pulley par bina toote mud sakti hai) aur agar ek taar toot bhi jaye toh baaki load sambhal leti hain!

Jaanch:
- Jaanch: Flexibility + safety redundancy with identical total area ✅

---

### Question 10
A rubber cord of cross-section 1 cm² (10⁻⁴ m²) and length 10 cm (0.1 m) is stretched by 2 cm to launch a 5 g pebble (Y_rubber = 5 × 10⁶ Pa). Assuming all elastic energy becomes KE, find the launch speed of the pebble!

**Solution:**
U = (1/2)(Y A / L) (ΔL)² = (1/2) [ (5 × 10⁶ × 10⁻⁴) / 0.1 ] (0.02)²
= (1/2)(5000)(4 × 10⁻⁴) = **1.0 J**.
(1/2)(0.005) v² = 1.0 => v² = 400 => **v = 20 m/s**.

Jaanch:
- Jaanch: 0.5 × 0.005 × 400 = 1.0 J ✅

---

### Question 11
State whether the following statements are True or False:
(a) Hollow cylindrical pillars are stronger against bending than solid cylindrical pillars of the same mass and length.
(b) Elastic potential energy density has the same SI units as Pressure.

**Solution:**
- (a) **True** ✅ — Hollow pillar mein material centre se door hota hai (larger outer diameter d => much less bending!).
- (b) **True** ✅ — J/m³ = (N m)/m³ = N/m² = Pa!

Jaanch:
- Jaanch: Both structural mechanics and dimensional analysis confirm ✅

---

### Question 12
Find the elastic energy stored per unit volume in a wire subjected to a stress of 10⁷ Pa and strain of 2 × 10⁻⁴.

**Solution:**
u = (1/2)(10⁷)(2 × 10⁻⁴) = **1000 J/m³**.

Jaanch:
- Jaanch: 0.5 × 2 × 10³ = 1000 J/m³ ✅

---

Elastic energy aur engineering design ab tumhare samne bilkul clear hain!

**Agle topic mein:** Chapter ke sabhi solid-mechanics concepts ko ek saath mila kar solve karenge [Mixed Problems & Chapter Wrap-up](mechanical-properties-of-solids-part5.md) mein!
