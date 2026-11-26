> **Class:** 12 | **Subject:** Physics | **Chapter 1:** Electric Charges and Fields (Gehrai Mein — Advanced Level)

# Electric Charges and Fields — Gehrai Mein (Advanced Level)

> **Core chapter se:** Core lessons ([Topic 1](electric-charges-and-fields.md) se [Topic 5](electric-charges-and-fields-part5.md)) mein humne Coulomb's law, electric field, dipoles aur Gauss's law cover kiye. Ab is **Gehrai Mein** section mein hum chaar high-level electrostatics gems dekhenge jo toughest problems ko 3 line mein solve kar dete hain — **Uniform Field Inside an Off-Centre Spherical Cavity**, **Solid Non-Conducting Charged Sphere**, **Charged Ring Max Field at x = R/√2**, aur **Force on a Dipole in a Non-Uniform Field**!

---

## Shital ka High-Voltage Research Lab

**Shital** ek computational electrostatics researcher hai. Uske whiteboard par teen hairaan karne wale results likhe hain:
1. Agar ek uniformly charged solid non-conducting sphere (charge density ρ) ke andar ek off-centre **spherical cavity** kaat di jaaye, to cavity ke andar **har point par electric field bilkul UNIFORM** hota hai (**E = ρ a→ / 3ε₀**)!
2. Ek uniformly charged circular ring ke axis par electric field centre (x = 0) par zero hota hai, aur **x = ±R / √2** par **MAXIMUM** hota hai!
3. Uniform electric field mein electric dipole par net force 0 hota hai, par **non-uniform field** mein dipole par net force lagta hai: **F = p (ΔE / Δr)**!

Chalo Shital ke saath in chaar advanced tools ko derive aur apply karte hain!

---

## 1. Uniformly Charged Solid Non-Conducting Sphere (Inside & Outside)

Maan lo radius **R** ke ek solid insulating sphere mein total charge **Q** poore volume mein uniformly bhara hai (volume charge density **ρ = Q / [(4/3)πR³]**):
- **Bahar (r ≥ R):** Gauss's law se **E_out = k Q / r²** (point charge jaisa!).
- **Andar (r < R):** Radius **r** ke chhote Gaussian sphere mein enclosed charge **q_enc = ρ × (4/3)πr³ = Q (r³ / R³)**!
  E (4πr²) = q_enc / ε₀ ⟹

```
   E_inside = (ρ r) / (3 ε₀) = (k Q r) / R³    (vector: E→ = ρ r→ / 3ε₀)
```

*(Hollow shell mein andar E = 0 tha, par solid insulating sphere mein andar **E ∝ r** linearly badhta hai!)*

---

## 2. Uniform Electric Field Inside an Off-Centre Spherical Cavity (Superposition Miracle!)

Maan lo solid sphere (centre **O**, charge density **+ρ**) ke andar centre **C** (displacement vector **a→ = OC→**) par ek spherical cavity kaat di gayi hai.
- Superposition trick: Cavity ko **(+ρ poore sphere) + (−ρ chhote sphere at C)** maano!
- Cavity ke andar kisi bhi point P (O se vector **r→**, C se vector **r'→ = r→ − a→**) par:
  **E_cavity→ = (ρ / 3ε₀) r→ + (−ρ / 3ε₀) (r→ − a→) = (ρ / 3ε₀) a→**!

**Miracle:** Point P ka position vector **r→** kat gaya! Cavity ke andar **HAR POINT par electric field CONSTANT magnitude (ρ a / 3ε₀) aur CONSTANT direction (O se C ki taraf)** hota hai — cavity ke radius par bhi depend nahi karta!

---

## 3. Electric Field on the Axis of a Uniformly Charged Ring

Radius **R** aur total charge **Q** wali patli circular ring ke axis par centre se doori **x** par electric field (symmetry se perpendicular components cancel, cos θ = x / √(R² + x²)):

```
   E_axis = (k Q x) / (R² + x²)^(3/2)
```

- **x = 0 (Centre):** **E = 0** (symmetry se!).
- **x >> R (Bahut door):** **E ≈ k Q / x²** (point charge!).
- **Maximum Field Position:** E_axis ka rate-of-change zero karne par (maxima condition): **x = ± R / √2**, jahan:
  **E_max = (2 k Q) / (3 √3 R²)**!
- **SHM of Small Negative Charge (−q) near Centre (x << R):**
  F = −q E ≈ −(k Q q / R³) x ⟹ **SHM** with **ω = √(k Q q / (m R³))**!

---

## 4. Force on a Short Electric Dipole in a Non-Uniform Field

Uniform E mein dipole par F_net = 0 hota hai. Agar field x ke saath badal raha ho (gradient **dE/dx**):
- +q par force q E(x + a) aur −q par −q E(x − a) ⟹ difference **q (2a) (ΔE / Δx)**:

```
   F = p (ΔE / Δx)
```

*(Point charge Q se doori r par aligned dipole p par force: E = kQ/r² ⟹ |dE/dr| = 2kQ/r³ ⟹ **F = 2 k Q p / r³**!)*

---

## 5 Deep Solved Problems

### Problem 1: Field Inside an Off-Centre Cavity
A solid non-conducting sphere of radius **R = 12 cm** has uniform volume charge density **ρ = 8.854 × 10⁻⁶ C/m³**. A spherical cavity of radius **3 cm** is scooped out with its centre at distance **a = 6 cm** from the centre of the sphere. Calculate the electric field at any point inside the cavity.

**Solution:**
- E_cavity = (ρ a) / (3 ε₀) = (8.854 × 10⁻⁶ × 0.06) / (3 × 8.854 × 10⁻¹²)
  = (0.06 / 3) × 10⁶ = 0.02 × 10⁶ = **2.0 × 10⁴ N/C** (uniform everywhere inside the cavity, pointing from O to C!).
- Jaanch: 8.854 kat gaya; 0.06/3 = 0.02; 0.02 × 10⁶ = 2.0 × 10⁴ N/C ✅.

### Problem 2: Charged Ring Maximum Field
A circular ring of radius **R = √2 m** carries a uniformly distributed charge **Q = 3√3 μC**. Find the position **x** on its axis where the electric field is maximum, and calculate **E_max**.

**Solution:**
- Max position: **x = R / √2 = √2 / √2 = 1.0 m**.
- E_max = (2 k Q) / (3 √3 R²) = (2 × 9 × 10⁹ × 3√3 × 10⁻⁶) / (3√3 × 2) = **9.0 × 10³ N/C**.
- Jaanch: Direct formula at x = 1, R = √2: (9×10⁹ × 3√3×10⁻⁶ × 1) / (2 + 1)^(3/2) = 27√3 × 10³ / (3√3) = 9.0 × 10³ N/C ✅.

### Problem 3: Force Between a Point Charge and a Short Dipole
A short electric dipole of dipole moment **p = 2.0 × 10⁻⁹ C m** lies along the x-axis at **r = 0.30 m** from a point charge **Q = +5.0 μC** (p pointing away from Q). Find the magnitude of the force between them.

**Solution:**
- F = (2 k Q p) / r³ = (2 × 9 × 10⁹ × 5.0 × 10⁻⁶ × 2.0 × 10⁻⁹) / (0.30)³
  = (1.8 × 10⁻⁴) / 0.027 = (180 / 27) × 10⁻³ = (20 / 3) × 10⁻³ ≈ **6.67 × 10⁻³ N** (attractive, pulling p toward Q!).
- Jaanch: 2 × 9 × 5 × 2 = 180; 180 × 10⁻⁶ / 0.027 = 6.67 × 10⁻³ N ✅.

### Problem 4: Solid Sphere — Where is E_inside = E_outside?
For a uniformly charged solid non-conducting sphere of radius **R**, the electric field at distance **r₁ = R/4** inside equals the electric field at distance **r₂** outside. Find **r₂** in terms of R.

**Solution:**
- E_in(R/4) = k Q (R/4) / R³ = k Q / (4 R²).
- E_out(r₂) = k Q / r₂².
- Equate: 1 / r₂² = 1 / (4 R²) ⟹ **r₂ = 2 R**.
- Jaanch: At r = 2R, E_out = kQ/(4R²) = E_in(R/4) ✅.

### Problem 5: Flux Through a Curved Cone Base
A point charge **+q** is placed at the centre of the flat circular base (radius R) of a hollow cone. What is the electric flux passing through the **curved lateral surface** of the cone?

**Solution:**
- Symmetry trick: Imagine a **hemisphere** covering the flat base (forming a closed surface around +q). Half of all field lines go into the upper half-space ⟹ flux through the curved cone surface equals the flux through the upper hemisphere = **q / (2 ε₀)**!
- Jaanch: Flat base has θ = 90° (zero flux); upper half-space captures exact half of q/ε₀ ✅.

---

## 10 Advanced Practice Questions

1. A solid non-conducting sphere of radius R = 10 cm carries charge density ρ = 2.6562 × 10⁻⁵ C/m³. Find the electric field at r = 5 cm from the centre (take ε₀ = 8.854 × 10⁻¹² C²/(N m²)).
2. If the sphere in Question 1 has an off-centre spherical cavity whose centre is 3 cm from O, find the electric field inside the cavity.
3. For a uniformly charged ring of radius R = 10 cm, at what axial distance x is the electric field maximum?
4. A small negative charge −q of mass m is displaced slightly by x (<< R) along the axis from the centre of a positively charged ring (Q, R). Write the time period T of its Simple Harmonic Motion.
5. A point charge +q is placed at distance d = R/√3 directly above the centre of a circular disc of radius R. Using solid angle Ω = 2π(1 − cos θ), find the flux through the disc.
6. Two short electric dipoles of moments p₁ and p₂ lie coaxially (end-on) at distance r apart. Given E_axial = 2kp₁/r³, find the magnitude of the force between them (hint: |dE/dr| = 6kp₁/r⁴).
7. A thin semicircular arc of radius R carries uniform positive charge Q. State the magnitude of the electric field at its centre (result from integration: E = 2kQ / (π R²)) and check its units.
8. A uniformly charged solid sphere has surface electric field E₀. What is its electric field at (a) r = R/2, and (b) r = 3R?
9. A point charge +q is placed inside a cubical box of side a, NOT at the centre, but slightly shifted toward one face. Does the **total** flux through all 6 faces change? Does the flux through the **nearest** face change?
10. An electric dipole of moment p = 5 × 10⁻⁹ C m is placed in a non-uniform electric field E = 2000 x î N/C (parallel to the x-axis). Find the net force on the dipole.

### Solutions

1. ρ / (3 ε₀) = (2.6562 × 10⁻⁵) / (3 × 8.854 × 10⁻¹²) = 1.0 × 10⁶ N/(C m).
   E = (ρ r) / (3 ε₀) = (1.0 × 10⁶) × 0.05 = **5.0 × 10⁴ N/C**.
   Jaanch: 3 × 8.854 × 10⁻¹² = 2.6562 × 10⁻¹¹; 10⁶ × 0.05 = 5.0 × 10⁴ N/C ✅.

2. E_cav = (ρ a) / (3 ε₀) = (1.0 × 10⁶) × 0.03 = **3.0 × 10⁴ N/C** (uniform everywhere inside the cavity!).
   Jaanch: 10⁶ × 0.03 = 3.0 × 10⁴ N/C ✅.

3. x = R / √2 = 10 / 1.414 ≈ **7.07 cm**.
   Jaanch: 7.07 × 1.414 ≈ 10 cm ✅.

4. Restoring force F = −(k Q q / R³) x ⟹ ω = √(k Q q / (m R³)) ⟹ **T = 2π √(m R³ / (k Q q))**.
   Jaanch: Dimensions of √(m R³ / (kQq)) = √(m R / F) = √(R / a) = T ✅.

5. Half-angle θ satisfies tan θ = R / (R/√3) = √3 ⟹ **θ = 60°** (cos 60° = 1/2).
   Flux Φ = (q / 2ε₀) (1 − cos 60°) = (q / 2ε₀)(1 − 1/2) = **q / (4 ε₀)**.
   Jaanch: θ = 90° gives q/(2ε₀); θ = 60° gives half of that = q/(4ε₀) ✅.

6. F = p₂ |dE₁/dr| = p₂ (6 k p₁ / r⁴) = **6 k p₁ p₂ / r⁴** (falls off as 1/r⁴!).
   Jaanch: Unit check: (N m²/C²)(C m)² / m⁴ = N ✅.

7. E = 2 k Q / (π R²). (For a full ring, opposite halves cancel giving 0; for half-ring, components along symmetry axis add to 2kQ/(πR²)!).
   Jaanch: Unit check: (N m²/C²)(C) / m² = **N/C** ✅.

8. (a) Inside (r = R/2): E ∝ r ⟹ **E = E₀ / 2**.
   (b) Outside (r = 3R): E ∝ 1/r² ⟹ **E = E₀ / 9**.
   Jaanch: E(R) = E₀ matches both formulas ✅.

9. **Total flux** through all 6 faces stays **UNCHANGED (= q / ε₀)** by Gauss's law! However, the flux through the **nearest face INCREASES** (it subtends a larger solid angle at the charge!).

10. dE/dx = 2000 N/(C m).
    F = p (dE/dx) = (5 × 10⁻⁹) × 2000 = **1.0 × 10⁻⁵ N** (along +x).
    Jaanch: 5 × 2 = 10; 10⁻⁹ × 10³ × 10 = 10⁻⁵ N ✅.

---

Shabaash! Tumne Electric Charges and Fields ke off-centre cavities, charged rings, aur non-uniform dipole forces tak conquer kar liye hain! Wapas chapter overview ke liye [Mixed Problems & Chapter Wrap-up](electric-charges-and-fields-part5.md) dekho!
