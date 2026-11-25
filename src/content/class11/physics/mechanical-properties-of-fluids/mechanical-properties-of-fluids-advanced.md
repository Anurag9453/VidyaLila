> **Class:** 11 | **Subject:** Physics | **Chapter 9:** Mechanical Properties of Fluids (Gehrai Mein — Advanced Level)

# Mechanical Properties of Fluids — Gehrai Mein (Advanced Level)

> **Core chapter se:** Core lessons ([Topic 1](mechanical-properties-of-fluids.md) se [Topic 5](mechanical-properties-of-fluids-part5.md)) mein humne Pascal's Law, Bernoulli, Viscosity, aur Surface Tension cover kiye. Ab is **Gehrai Mein** section mein hum woh iconic fluid-mechanics derivations seekhenge jo toughest problems mein kaam aate hain — **Accelerating Liquid Containers**, **Rotating Liquid Paraboloids**, **Time to Empty a Tank**, **Insufficient-Length Capillaries**, aur **Isothermal Soap Bubble Coalescence**!

---

## Triyambak ka Fluid-Dynamics Research Lab

Triyambak ek fluid-dynamics researcher hai. Uske lab mein chaar classic deep phenomena dekhe jate hain:
1. Jab paani se bhara tank horizontally acceleration a se chalta hai, toh paani ki free surface horizontal se exact angle **tan θ = a / g** par jhuk jati hai!
2. Jab cylindrical bucket angular speed ω se ghoomti hai, toh paani ki free surface ek exact **Parabola (y = ω² r² / (2g))** banati hai!
3. Vacuum mein do soap bubbles (radii R₁, R₂) isothermally milkar ek bada bubble banayein, toh uska radius **R = √(R₁² + R₂²)** hota hai!

Chalo Triyambak ke saath in paanch elite fluid-mechanics tools ko derive aur solve karte hain!

---

## 1. Accelerating Liquid Container (Pseudo Force Trick!)

Tank horizontally right (+x) mein acceleration **a** se chal raha hai. Tank frame mein har liquid element par effective gravity **g_eff = g (-ĵ) + a (-î)** lagti hai.
Liquid ki free surface hamesha **g_eff ke perpendicular** hoti hai => surface peeche ki taraf upar uth jati hai at angle **θ**:
```
  tan θ = a / g      |      Pressure difference horizontally over length L:   ΔP = ρ a L
```

---

## 2. Rotating Cylindrical Liquid (Paraboloid Free Surface)

Angular velocity **ω** se ghoomte cylinder mein distance **r** par centrifugal acceleration **ω² r** bahar lagta hai:
Free surface ka slope dy/dr = a_centrifugal / g = ω² r / g.
Integrate karne par (with y = 0 at centre r = 0):
```
  y(r) = ω² r² / (2 g)     (Exact Parabola! Rise from centre to rim R: Δh = ω² R² / (2 g))
```

---

## 3. Time to Empty a Tank Through a Bottom Orifice

Cross-sectional area **A** wale tank mein height **H** tak paani bhara hai aur bottom par chhota chhed (area **a << A**) hai.
Jab level y par ho, efflux speed v = √(2 g y) => volume rate -A dy/dt = a √(2 g y).
Integrate from y = H to y = 0 (stated, checked by dimensions & numbers):
```
  Time to empty from H to 0:     t = (A / a) √( 2 H / g )
  Time from H₁ to H₂:            t = (A / a) √( 2 / g ) · ( √H₁ - √H₂ )
```
*(Notice: Half the height (H to H/2) takes (1 - 1/√2) t ≈ 29.3% of the time, while the bottom half (H/2 to 0) takes **70.7%** of the time because pressure drops!)*

---

## 4. Insufficient-Length Capillary Tube (No Fountain!)

Agar capillary tube ki length **h'** normal rise **h** se kam ho (h' < h), toh paani top tak pahunch kar ruk jata hai aur meniscus apna **radius of curvature R_m** badha (flatten) kar leta hai taaki:
```
  h' R_m' = h R_m = 2 S / (ρ g)   ===>   cos θ' = (h' / h) cos θ
```

---

## 5. Isothermal Soap Bubble Merging & Common Interface

1. **Two Soap Bubbles Merging in Vacuum (Isothermal, P_out = 0):**
   Number of moles conserved (n = n₁ + n₂ => P V = P₁ V₁ + P₂ V₂).
   Since P = 4 S / R and V = (4/3) π R³ => P V ∝ R²!
   ```
     R² = R₁² + R₂²   (Surface area conserved in vacuum!)
   ```
2. **Two Soap Bubbles Sticking Together (Common Film Radius R_c):**
   Chhote bubble (R₁) mein pressure zyada (4S/R₁) aur bade (R₂) mein kam (4S/R₂), isliye common wall bade ki taraf bulge karti hai with pressure difference:
   4 S / R_c = 4 S / R₁ - 4 S / R₂  =>
   ```
     1 / R_c = 1 / R₁ - 1 / R₂   ===>   R_c = R₁ R₂ / (R₂ - R₁)
   ```

---

## 6 Deep Solved Problems

### Problem 1: Water Spill in an Accelerating Open Tank

An open rectangular tank of length L = 2 m and height 1.5 m is filled with water up to height 1.0 m. What maximum horizontal acceleration a can it be given so that water just begins to spill over the back rim (g = 10 m/s²)?

**Solution:**
Midpoint of water stays at 1.0 m; back edge can rise by Δh = 1.5 - 1.0 = **0.5 m** over half-length L/2 = **1.0 m**!
tan θ = Δh / (L/2) = 0.5 / 1.0 = 0.5.
Since tan θ = a / g => a = 0.5 × 10 = **5 m/s²**.

Jaanch:
- Jaanch: Front drops to 0.5 m, back rises to 1.5 m (average stays 1.0 m, volume conserved!) ✅

---

### Problem 2: Rotating Bucket Paraboloid Height Difference

A cylindrical vessel of radius R = 0.2 m containing water rotates about its vertical axis at ω = 10 rad/s (g = 10 m/s²). Find the height difference between the water level at the rim and at the centre.

**Solution:**
Δh = ω² R² / (2 g) = (100 × 0.04) / 20 = 4 / 20 = **0.20 m (20 cm)**.

Jaanch:
- Jaanch: (ω R)² / (2g) = (2 m/s)² / 20 = 4 / 20 = 0.20 m ✅

---

### Problem 3: Time to Empty a Cylindrical Tank

A cylindrical tank of area A = 0.5 m² is filled with water to height H = 5 m. A small hole of area a = 5 × 10⁻⁴ m² is opened at the bottom (g = 10 m/s²). Find: (a) total time to empty the tank, (b) time to empty the top 3.75 m (down to 1.25 m).

**Solution:**
A / a = 0.5 / (5 × 10⁻⁴) = **1000**.
- (a) Total time: t = 1000 × √(2 × 5 / 10) = 1000 × √1 = **1000 s**.
- (b) From H₁ = 5 m to H₂ = 1.25 m:
  t₁ = 1000 × √(2/10) × (√5 - √1.25) = 1000 × (1/√5) × (√5 - √5 / 2) = 1000 × (1/2) = **500 s**!
  *(Top 75% of water drains in 500 s; last 25% ALSO takes 500 s!)*

Jaanch:
- Jaanch: √(1.25 / 5) = √(1/4) = 1/2 => bottom 25% takes 50% of total time ✅

---

### Problem 4: Common Film Radius of Two Touching Soap Bubbles

Two soap bubbles of radii R₁ = 3 cm and R₂ = 6 cm coalesce to share a common thin film interface. Find the radius of curvature R_c of the common interface.

**Solution:**
R_c = R₁ R₂ / (R₂ - R₁) = (3 × 6) / (6 - 3) = 18 / 3 = **6 cm** (concave toward the smaller 3 cm bubble!).

Jaanch:
- Jaanch: 1/3 - 1/6 = 1/6 => R_c = 6 cm ✅

---

### Problem 5: Isothermal Merging of Two Bubbles in Vacuum

Two soap bubbles of radii 3 cm and 4 cm coalesce isothermally in vacuum to form a single bubble. Find the radius of the resulting bubble.

**Solution:**
R = √(R₁² + R₂²) = √(3² + 4²) = √25 = **5 cm**.

Jaanch:
- Jaanch: 3-4-5 Pythagorean triple ✅

---

### Problem 6: Insufficient-Length Capillary Tube Contact Angle

Water normally rises to h = 10 cm in a glass capillary tube (θ = 0°). If the tube is cut so only h' = 5 cm sticks out above the water surface, what new contact angle θ' does the water meniscus make at the top rim?

**Solution:**
cos θ' = (h' / h) cos 0° = 5 / 10 = 1/2 => **θ' = 60°**!

Jaanch:
- Jaanch: 2 S cos 60° / (r ρ g) = (1/2) h = 5 cm exact balance ✅

---

## 3 Advanced Mistakes

### Galti 1: Tank emptying time mein constant efflux speed √(2gH) maan lena
- **Galat:** Volume = A H, rate = a √(2gH) => t = (A/a) H / √(2gH) = (A/a) √(H / (2g))!
- **Sahi:** Speed √(2gy) level girne ke saath kam hoti jati hai — exact integration se **factor of 2** aata hai: **t = (A/a) √(2 H / g)**!

### Galti 2: Vacuum mein do soap bubbles milne par volume add (R³ = R₁³ + R₂³) kar dena
- **Galat:** R³ = R₁³ + R₂³!
- **Sahi:** Liquid drops (incompressible) mein **R³ = R₁³ + R₂³** hota hai, par **soap bubbles** (compressible gas, P ∝ 1/R) mein PV ∝ R² conserved hota hai => **R² = R₁² + R₂²**!

### Galti 3: Accelerating tank mein liquid ko aage ki taraf uthta hua bana dena
- **Galat:** Tank right accelerate hua toh paani right (front) mein upar uthega!
- **Sahi:** Pseudo force **peeche (left)** lagta hai, isliye paani **peeche ki taraf** upar uthta hai at tan θ = a / g!

---

## Practice Questions (Advanced)

*(Take g = 10 m/s² unless stated otherwise.)*

### Question 1
A tank of water accelerates horizontally at 10 m/s². Find the angle θ that the free water surface makes with the horizontal.

**Solution:**
tan θ = a / g = 10 / 10 = 1 => **θ = 45°**.

Jaanch:
- Jaanch: tan 45° = 1 ✅

---

### Question 2
Two soap bubbles of radii 6 cm and 8 cm merge isothermally in vacuum. Find the radius of the new bubble.

**Solution:**
R = √(6² + 8²) = √100 = **10 cm**.

Jaanch:
- Jaanch: 6-8-10 triple ✅

---

### Question 3
Two soap bubbles of radii 4 cm and 12 cm stick together sharing a common film. Find the radius of curvature of the common film.

**Solution:**
R_c = (4 × 12) / (12 - 4) = 48 / 8 = **6 cm**.

Jaanch:
- Jaanch: 1/4 - 1/12 = 2/12 = 1/6 => 6 cm ✅

---

### Question 4
A cylindrical glass of radius 5 cm rotates at 20 rad/s. Find the difference in water height between the rim and the centre (in cm).

**Solution:**
Δh = ω² R² / (2g) = (400 × 0.0025) / 20 = 1 / 20 = **0.05 m = 5 cm**.

Jaanch:
- Jaanch: 400 × 25 × 10⁻⁴ = 1.0; 1/20 = 5 cm ✅

---

### Question 5
A water tank takes 100 s to empty completely from height H through a bottom hole. How long does it take for the water level to fall from H to H/4?

**Solution:**
t₁ / t_total = (√H - √(H/4)) / √H = 1 - 1/2 = **1 / 2** => **50 s**!

Jaanch:
- Jaanch: Top 3/4th drains in half the total time (50 s), bottom 1/4th takes the other 50 s ✅

---

### Question 6
Water rises to 8 cm in a capillary tube (θ = 0°). If the tube is cut to length 4√3 cm above water, find the new contact angle θ' at the top.

**Solution:**
cos θ' = (4√3) / 8 = √3 / 2 => **θ' = 30°**.

Jaanch:
- Jaanch: cos 30° = √3 / 2 ✅

---

### Question 7
A closed horizontal tube of length 0.5 m completely filled with water (ρ = 1000 kg/m³) accelerates horizontally at 4 m/s². Find the pressure difference between the back end and front end of the tube.

**Solution:**
ΔP = ρ a L = 1000 × 4 × 0.5 = **2000 Pa (2 kPa)** (higher at the back end!).

Jaanch:
- Jaanch: Analogous to ρ g h horizontally ✅

---

### Question 8
If two **identical** soap bubbles of radius R each stick together, what is the radius of curvature of their common interface?

**Solution:**
1 / R_c = 1/R - 1/R = 0 => **R_c = ∞** (the common wall is a **completely flat plane**!).

Jaanch:
- Jaanch: Equal pressures on both sides => zero curvature (flat wall) ✅

---

### Question 9
A water tank of area A has a small hole of area a at the bottom. If the water height is quadrupled (4H), by what factor does the total time to empty increase?

**Solution:**
t ∝ √H => √4 = **2 times**.

Jaanch:
- Jaanch: 4× more water, but average efflux speed is 2× faster => 4/2 = 2× time ✅

---

### Question 10
A U-tube containing liquid has its two vertical arms separated by horizontal length L = 0.4 m. When accelerated horizontally along the line of the arms at a = 5 m/s², find the difference in liquid levels Δh between the two arms.

**Solution:**
Δh = L tan θ = L (a / g) = 0.4 × (5 / 10) = **0.2 m (20 cm)** (higher in the rear arm!).

Jaanch:
- Jaanch: ρ g Δh = ρ a L => Δh = a L / g = 0.2 m ✅

---

### Question 11
A small hole of area a is punched in the bottom of a large tank filled to height H. What is the **horizontal thrust (reaction force)** exerted on the tank if the hole is instead on the vertical side wall at depth h?

**Solution:**
Mass flow rate dm/dt = ρ a v, exit speed v = √(2 g h).
Thrust F = v (dm/dt) = ρ a v² = **2 ρ g a h**! (Notice: **TWICE** the static force ρ g h a that acted on the plug before removing it!)

Jaanch:
- Jaanch: Dimensions: [M L⁻³][L²][L² T⁻²] = [M L T⁻²] = Force ✅

---

### Question 12
In a U-tube rotating about one of its vertical arms at angular velocity ω (distance between arms = L), find the difference in liquid levels Δh between the outer arm and the axis arm.

**Solution:**
By paraboloid equation y(r) = ω² r² / (2g) at r = L:
**Δh = ω² L² / (2 g)** (higher in the outer arm!).

Jaanch:
- Jaanch: At r = 0, y = 0; at r = L, y = ω² L² / (2g) ✅

---

Shabaash! Tumne Fluid Mechanics ko accelerating tanks, rotating paraboloids, draining tanks, aur bubble coalescence tak conquer kar liya hai. Wapas chapter overview ke liye [Mixed Problems & Chapter Wrap-up](mechanical-properties-of-fluids-part5.md) dekho!
