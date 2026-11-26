> **Class:** 12 | **Subject:** Physics | **Chapter 4:** Moving Charges and Magnetism (Gehrai Mein — Advanced Level)

# Moving Charges and Magnetism — Gehrai Mein (Advanced Level)

> **Core chapter se:** Core lessons ([Topic 1](moving-charges-and-magnetism.md) se [Topic 5](moving-charges-and-magnetism-part5.md)) mein humne Lorentz force, Biot-Savart law, Ampere's law aur galvanometer cover kiye. Ab is **Gehrai Mein** section mein hum chaar high-level magnetism gems dekhenge — **Uniform Magnetic Field Inside an Off-Centre Cylindrical Cavity**, **Magnetic Force on an Arbitrary Curved Wire (L_eff Trick)**, **Gyromagnetic Ratio (m / L = q / 2m) of Rotating Charged Bodies**, aur **Finite Straight Wire Biot-Savart Formula**!

---

## Sonia ka Accelerator & Magnetics Lab

**Sonia** ek particle-accelerator magnetics physicist hai. Uske whiteboard par chaar jaw-dropping shortcuts likhe hain:
1. Agar ek moti current-carrying cylinder (current density **J**) ke andar ek off-centre **cylindrical cavity** kaat di jaaye, to cavity ke andar **har point par magnetic field bilkul UNIFORM** hota hai (**B = ½ μ₀ J a**)!
2. Uniform magnetic field **B** mein kisi bhi tedhe-medhe (curved) current-carrying wire par net force nikaalne ke liye integration ki zaroorat nahi — sirf start se end tak ki **seedhi displacement vector L_eff→** lo: **F→ = I (L_eff→ × B→)**!
3. Kisi bhi uniform rotating charged body (ring, disc, sphere) ke liye magnetic dipole moment aur angular momentum ka ratio hamesha **m / L = q / (2 M)** hota hai!

---

## 1. Uniform Magnetic Field Inside an Off-Centre Cylindrical Cavity

Ek long solid cylindrical wire (radius **R**, uniform current density **J = I / πR²**) ke andar distance **r** (< R) par Ampere's law se:
B (2πr) = μ₀ (J πr²) ⟹ **B_inside = ½ μ₀ J r** (vector form: **B→ = ½ μ₀ (J→ × r→)**).
- Ab centre **C** (offset vector **a→ = OC→**) par ek parallel cylindrical cavity kaat do (superposition of **+J** full cylinder and **−J** cavity cylinder):
  **B_cavity→ = ½ μ₀ (J→ × r→) − ½ μ₀ (J→ × (r→ − a→)) = ½ μ₀ (J→ × a→)**!

```
   B_cavity = ½ μ₀ J a   (UNIFORM everywhere inside the cavity, ⊥ to a→!)
```

---

## 2. Magnetic Force on Any Arbitrary Curved Wire in Uniform B

Uniform magnetic field **B→** mein kisi bhi shape ke wire (point P se point Q tak) par:
**F→ = Σ I (Δl→ × B→) = I (Σ Δl→) × B→ = I (L_eff→ × B→)**
- **L_eff→** = P se Q tak ki seedhi shortest vector!
- **Corollary:** Kisi bhi **closed current loop** ke liye start = end ⟹ **L_eff→ = 0** ⟹ **Net force = 0** (chahe loop kisi bhi tedhe-medhe shape ka ho)!

---

## 3. Finite Straight Wire Magnetic Field (Biot-Savart Result)

Ek finite straight wire (current **I**) se perpendicular doori **d** par point P par, agar wire ke dono sirhe P par perpendicular ke saath angles **θ₁** aur **θ₂** banate hon:

```
   B = (μ₀ I) / (4π d) × (sin θ₁ + sin θ₂)
```

*(Checks: Infinite wire: θ₁ = θ₂ = 90° ⟹ sin 90° + sin 90° = 2 ⟹ **μ₀I / (2πd)**! Semi-infinite wire (ek end P ke saamne): θ₁ = 90°, θ₂ = 0° ⟹ **μ₀I / (4πd)**!)*

---

## 4. Magnetic Moment of Rotating Charged Bodies (Gyromagnetic Ratio)

Maan lo mass **M** aur uniformly distributed charge **q** wali koi bhi symmetric rigid body (ring, disc, hollow/solid sphere) angular speed **ω** se ghoom rahi hai:
- Ring (radius R): I = q / T = q ω / (2π) ⟹ **m = I (π R²) = ½ q ω R²**. Angular momentum **L = M R² ω**.
- Ratio lo (R² aur ω kat gaye!):

```
   m / L = q / (2 M)    (UNIVERSAL for ANY uniform rotating body!)
```

*(Example: Uniform solid disc (L = ½ MR²ω) ⟹ **m = (q / 2M)(½ MR²ω) = ¼ q ω R²**! Solid sphere (L = ⅖ MR²ω) ⟹ **m = (1/5) q ω R²**!)*

---

## 5 Deep Solved Problems

### Problem 1: Off-Centre Cylindrical Cavity Field
A long solid cylindrical conductor of radius **R = 10 cm** carries a uniform current density **J = 5.0 × 10⁴ A/m²**. A cylindrical hole of radius **2 cm** is drilled parallel to the axis at an offset distance **a = 4 cm** from the axis. Find the magnetic field inside the hole (take π = 3.14).

**Solution:**
- **B_cavity = ½ μ₀ J a** = 0.5 × (4 × 3.14 × 10⁻⁷) × (5.0 × 10⁴) × 0.04
  = (2 × 3.14 × 10⁻⁷) × 2000 = 4 × 3.14 × 10⁻⁴ = **1.256 × 10⁻³ T = 1.256 mT**!
- Jaanch: 0.5 × 4 = 2; 5×10⁴ × 0.04 = 2000; 2 × 2000 × 3.14 × 10⁻⁷ = 1.256 mT ✅.

### Problem 2: Force on a Semi-Circular Wire in Uniform B
A wire bent into a semi-circle of radius **R = 20 cm** carries current **I = 5.0 A** in a uniform magnetic field **B = 0.40 T** perpendicular to the plane of the semi-circle. Find the magnitude of the net magnetic force on the wire.

**Solution:**
- Start se end tak seedhi doori (diameter): **L_eff = 2 R = 0.40 m** (⊥ to B!).
- **F = I L_eff B = 5.0 × 0.40 × 0.40 = 0.80 N**!
- Jaanch: Semi-circle length πR nahi, balki diameter **2R** lagta hai; 5 × 0.16 = 0.80 N ✅.

### Problem 3: Magnetic Field at the Centre of a Square Current Loop
A square loop of side **a = 20 cm** carries a steady current **I = 5.0 A**. Calculate the magnetic field at the **centre** of the square (take √2 = 1.414).

**Solution:**
- Centre se har side ki perpendicular doori **d = a / 2 = 0.10 m**; har side centre par **θ₁ = θ₂ = 45°** banati hai!
- Ek side ka field: B₁ = (10⁻⁷ × I / d) × (sin 45° + sin 45°) = (10⁻⁷ × 5 / 0.10) × √2 = 5√2 × 10⁻⁶ T.
- 4 sides same direction mein judti hain: **B_net = 4 B₁ = 20 √2 × 10⁻⁶ = 20 × 1.414 × 10⁻⁶ ≈ 2.83 × 10⁻⁵ T**!
- Jaanch: Formula B_square = (2√2 μ₀ I)/(π a) = (2√2 × 4×10⁻⁷ × 5)/0.20 = 20√2 × 10⁻⁶ T ✅.

### Problem 4: Magnetic Dipole Moment of a Rotating Charged Disc
A uniformly charged insulating disc of radius **R = 0.20 m** and total charge **q = 4.0 μC** rotates about its axis at **ω = 50 rad/s**. Find its magnetic dipole moment **m**.

**Solution:**
- Gyromagnetic shortcut: **m = ¼ q ω R²** = 0.25 × (4.0 × 10⁻⁶) × 50 × (0.20)²
  = (1.0 × 10⁻⁶) × 50 × 0.04 = **2.0 × 10⁻⁶ A m²**.
- Jaanch: 0.25 × 4 = 1; 50 × 0.04 = 2 ⟹ 2.0 × 10⁻⁶ A m² ✅.

### Problem 5: Circular Path Entering a Magnetic Field Region (Deflection Angle)
A proton (mass m, charge +e, speed v) enters a magnetic field region of width **d < r** (where r = mv/qB) perpendicularly. Find the sine of its angle of deflection **sin θ** as it exits!

**Solution:**
- Geometry of circular arc of radius r crossing slab width d: **sin θ = d / r = (q B d) / (m v)**!
- (Agar **d ≥ r**, to proton poora 180° U-turn maarkar usi side se wapas bahar aa jaata hai!)
- Jaanch: When d = r, sin θ = 1 ⟹ θ = 90° (just grazes the far edge!) ✅.

---

## 10 Advanced Practice Questions

1. A solid cylindrical wire of radius R carries uniform current I. Find the ratio of the magnetic field at r = R/2 (inside) to the magnetic field at r = 2R (outside).
2. A cylindrical cavity is drilled off-centre at offset a = 2 cm inside a long wire carrying current density J = 1.0 × 10⁵ A/m². Calculate B inside the cavity (take π = 3.14).
3. A wire shaped like a parabola y = x² from x = −2 m to x = +2 m carries a current of 3 A in a uniform magnetic field B = 0.5 T perpendicular to the xy-plane. Find the magnitude of the magnetic force on the wire.
4. Calculate the magnetic field at the centre of a square loop of side 10 cm carrying current 2.0 A (take √2 = 1.414).
5. Find the magnetic field at distance d = 5 cm from one end of a **semi-infinite** straight wire carrying current 10 A (point lies on the perpendicular to the wire at its end).
6. A uniformly charged solid sphere of charge q = 10 μC and radius R = 0.10 m rotates about a diameter at ω = 100 rad/s. Find its magnetic dipole moment using m = (q/2M) L (for solid sphere I_inertia = 2/5 M R²).
7. A charged particle of radius of curvature r = 10 cm enters a uniform magnetic field slab of width d = 5 cm perpendicularly. Find the angle of deflection θ of the particle on emerging.
8. What happens if the slab width in Question 7 is increased to d = 12 cm (> r)? What is the total angle of deflection?
9. A closed triangular loop carrying current I is placed in a uniform magnetic field B. What is the net magnetic force on the loop?
10. A proton enters a region with crossed E and B fields from rest (v = 0). Does it move in a straight line, a circle, or a cycloid?

### Solutions

1. B_in(R/2) = μ₀ I (R/2) / (2π R²) = μ₀ I / (4π R).
   B_out(2R) = μ₀ I / (2π × 2R) = μ₀ I / (4π R).
   Ratio = **1 : 1**! Jaanch: Exact equality at R/2 and 2R ✅.

2. B = ½ μ₀ J a = 0.5 × (4 × 3.14 × 10⁻⁷) × (10⁵) × 0.02 = 2 × 3.14 × 2 × 10⁻⁴ = **1.256 × 10⁻³ T = 1.256 mT**.
   Jaanch: 2 × 3.14 × 0.02 × 10⁻² = 1.256 × 10⁻³ T ✅.

3. End points are (−2, 4) and (+2, 4) ⟹ straight displacement **L_eff = 4.0 m** along +x!
   F = I L_eff B = 3 × 4.0 × 0.5 = **6.0 N**!
   Jaanch: Shape of parabola cancels out — only end-to-end 4 m matters! ✅.

4. d = 0.05 m, B = 4 × (10⁻⁷ × 2.0 / 0.05) × √2 = 4 × 4 × 1.414 × 10⁻⁶ ≈ **2.26 × 10⁻⁵ T**.
   Jaanch: 16 × 1.414 = 22.624 ⟹ 2.26 × 10⁻⁵ T ✅.

5. Semi-infinite (θ₁ = 90°, θ₂ = 0°): B = (10⁻⁷ × 10 / 0.05) × (1 + 0) = **2.0 × 10⁻⁵ T**.
   Jaanch: Half of infinite wire field (4 × 10⁻⁵ T) ✅.

6. m = (q / 2M)(2/5 M R² ω) = **(1/5) q ω R²** = 0.2 × (10 × 10⁻⁶) × 100 × (0.10)² = **2.0 × 10⁻⁶ A m²**.
   Jaanch: 0.2 × 10 × 100 × 0.01 = 2.0 μA m² ✅.

7. sin θ = d / r = 5 / 10 = 1/2 ⟹ **θ = 30°**.
   Jaanch: sin 30° = 0.5 ✅.

8. Since d = 12 cm > r = 10 cm, the particle completes a full **semi-circle** inside the slab and exits back out the entry face ⟹ total deflection = **180°**!

9. **Zero (0 N)!** Closed loop has L_eff = 0 ⟹ F_net = 0.

10. **Cycloid!** Electric field accelerates it from rest, magnetic force bends it sideways, and the repeating looping arch path is a cycloid!

---

Shabaash! Tumne Off-Centre Cylindrical Cavities, Curved-Wire L_eff Forces, Finite-Wire Biot-Savart aur Gyromagnetic Ratios tak conquer kar liye hain! Wapas chapter overview ke liye [Mixed Problems & Chapter Wrap-up](moving-charges-and-magnetism-part5.md) dekho!
