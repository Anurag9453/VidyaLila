> **Class:** 12 | **Subject:** Physics | **Chapter 5:** Magnetism and Matter (Gehrai Mein — Advanced Level)

# Magnetism and Matter — Gehrai Mein (Advanced Level)

> **Core chapter se:** Core lessons ([Topic 1](magnetism-and-matter.md) se [Topic 5](magnetism-and-matter-part5.md)) mein humne bar magnets, Earth's magnetism, magnetisation aur magnetic materials cover kiye. Ab is **Gehrai Mein** section mein hum chaar advanced geomagnetism & dipole tools dekhenge — **Apparent Dip in Two Perpendicular Vertical Planes**, **Vibration Magnetometer (Sum & Difference Method)**, **Deflection Magnetometer (Tan-A & Tan-B Positions)**, aur **Force Between Two Short Coaxial Bar Magnets**!

---

## Srishti ka Geomagnetic Survey Station

**Srishti** ek geophysical-magnetism researcher hai. Field survey mein jab magnetic meridian exact pata na ho, tab woh do perpendicular vertical planes mein apparent dip angles **δ₁** aur **δ₂** naap kar **1 line** mein true dip **δ** nikaal leti hai: **cot² δ = cot² δ₁ + cot² δ₂**! Saath hi woh oscillation magnetometer se do bar magnets ke dipole moments ka exact ratio **m₁ / m₂** bina B_H jaane nikaalti hai!

---

## 1. Apparent Dip in Two Mutually Perpendicular Vertical Planes

Agar dip circle ka plane magnetic meridian se angle **α** par ghooma ho:
- Vertical component **B_V** wahi rehta hai, par us plane mein effective horizontal component **B'_H = B_H cos α** ho jaata hai!
- Apparent dip **δ₁**: **tan δ₁ = B_V / (B_H cos α) = tan δ / cos α** ⟹ **cot δ₁ = cot δ cos α**.
- Doosre perpendicular plane (angle **90° − α**) mein apparent dip **δ₂**: **cot δ₂ = cot δ sin α**.
- Square karke jodo (cos² α + sin² α = 1!):

```
   cot² δ = cot² δ₁ + cot² δ₂
```

*(Note: Apparent dip hamesha true dip se **bada** hota hai: δ_app ≥ δ_true!)*

---

## 2. Vibration Magnetometer — Sum & Difference Method

Do bar magnets (moments **m₁ > m₂**, moments of inertia **I₁, I₂**) ko ek saath bandh kar horizontal field **B_H** mein oscillate karwaya jaata hai:
- **Sum Position (Same poles together: N-N, S-S):** Net moment = **m₁ + m₂**, Total inertia = **I₁ + I₂**:
  **T_s = 2π √[ (I₁ + I₂) / ((m₁ + m₂) B_H) ]**
- **Difference Position (Opposite poles together: N-S, S-N):** Net moment = **m₁ − m₂**, Total inertia = **I₁ + I₂** (inertia hamesha judta hai!):
  **T_d = 2π √[ (I₁ + I₂) / ((m₁ − m₂) B_H) ]**
- Divide & square (I₁ + I₂ aur B_H kat gaye!):

```
   m₁ / m₂ = (T_d² + T_s²) / (T_d² − T_s²)
```

---

## 3. Tangent Law & Deflection Magnetometer

Jab do perpendicular uniform horizontal magnetic fields **B** aur **B_H** lagte hain, to compass needle **B_H** se angle **θ** par equilibrium mein rukti hai:

```
   B = B_H tan θ    (Tangent Law!)
```

- **Tan-A (End-on / Axial) Position:** B_axial = (μ₀/4π)(2m/r³) = B_H tan θ.
- **Tan-B (Broadside-on / Equatorial) Position:** B_eq = (μ₀/4π)(m/r³) = B_H tan θ.

---

## 4. Force Between Two Short Coaxial Bar Magnets (1 / r⁴ Law!)

Electric dipoles ki tarah, do short coaxial bar magnets (moments **m₁, m₂**, centre-to-centre distance **r >> l**) ke beech force **1 / r⁴** ke hisaab se ghatta hai:

```
   F = (μ₀ / 4π) × (6 m₁ m₂) / r⁴
```

---

## 5 Deep Solved Problems

### Problem 1: True Dip from Two Perpendicular Apparent Dips
The apparent angles of dip in two mutually perpendicular vertical planes are **δ₁ = 30°** and **δ₂ = 45°**. Find **cot δ** for the true angle of dip **δ** at that place.

**Solution:**
- cot 30° = √3, cot 45° = 1.
- cot² δ = cot² 30° + cot² 45° = (√3)² + 1² = 3 + 1 = **4** ⟹ **cot δ = 2** (tan δ = 1/2 ⟹ δ ≈ 26.6°!).
- Jaanch: δ ≈ 26.6° is smaller than both 30° and 45° ✅.

### Problem 2: Sum & Difference Oscillation Periods
Two bar magnets oscillate together in Earth's horizontal field with time period **T_s = 3.0 s** when like poles are together, and **T_d = 5.0 s** when opposite poles are together. Find the ratio **m₁ / m₂** of their magnetic moments.

**Solution:**
- m₁ / m₂ = (T_d² + T_s²) / (T_d² − T_s²) = (5² + 3²) / (5² − 3²) = (25 + 9) / (25 − 9) = 34 / 16 = **17 / 8 = 2.125**.
- Jaanch: (17+8)/(17−8) = 25/9 = (5/3)² = (T_d/T_s)² ✅.

### Problem 3: Tangent Galvanometer / Deflection Magnetometer
A short bar magnet placed in the Tan-A (axial) position at **r = 20 cm** produces a deflection of **45°** in a compass needle where **B_H = 3.0 × 10⁻⁵ T**. Find its magnetic dipole moment **m**.

**Solution:**
- B_axial = B_H tan 45° = 3.0 × 10⁻⁵ × 1 = 3.0 × 10⁻⁵ T.
- (10⁻⁷ × 2 m) / (0.20)³ = 3.0 × 10⁻⁵ ⟹ (2 × 10⁻⁷ m) / (8 × 10⁻³) = 3.0 × 10⁻⁵
- (2.5 × 10⁻⁵) m = 3.0 × 10⁻⁵ ⟹ **m = 3.0 / 2.5 = 1.2 A m²**.
- Jaanch: (10⁻⁷ × 2 × 1.2) / 0.008 = 2.4 × 10⁻⁷ / 8 × 10⁻³ = 3.0 × 10⁻⁵ T ✅.

### Problem 4: Force Between Two Short Coaxial Magnets
Two identical short bar magnets, each of magnetic moment **m = 0.50 A m²**, lie along the same line with their centres **10 cm** apart. Calculate the magnetic force between them.

**Solution:**
- F = (10⁻⁷ × 6 × 0.50 × 0.50) / (0.10)⁴ = (1.5 × 10⁻⁷) / 10⁻⁴ = **1.5 × 10⁻³ N = 1.5 mN**.
- Jaanch: 6 × 0.25 = 1.5; 10⁻⁷ / 10⁻⁴ = 10⁻³ N ✅.

### Problem 5: Cutting a Vibrating Bar Magnet in Half
A bar magnet oscillates in a uniform field B with time period **T = 4.0 s**. If it is cut into two equal halves **perpendicular to its length**, what is the new time period **T'** of one half in the same field B?

**Solution:**
- Length halves (L' = L/2) and mass halves (M' = M/2):
  - New moment of inertia: I' = (1/12) M' L'² = (1/12)(M/2)(L/2)² = **I / 8**!
  - New magnetic moment: **m' = m / 2**!
- T' = 2π √(I' / (m' B)) = 2π √((I/8) / ((m/2) B)) = 2π √(I / (4 m B)) = **T / 2 = 2.0 s**!
- Jaanch: I drops by 8, m drops by 2 ⟹ ratio drops by 4 ⟹ √4 = 2 ⟹ T' = T/2 ✅.

---

## 10 Advanced Practice Questions

1. At a place, the apparent dip in two mutually perpendicular vertical planes are 45° and 45°. Find the true angle of dip (in terms of tan⁻¹).
2. If the true dip at a place is 45°, find the apparent dip in a vertical plane making an angle of 60° with the magnetic meridian (use tan 60° = √3, cos 60° = 0.5).
3. Two magnets have T_s = 2 s and T_d = 4 s in a vibration magnetometer. Find m₁ : m₂.
4. A bar magnet of time period T = 6.0 s is cut into two equal halves **along its length** (longitudinally). What is the new time period of each half in the same field? (Hint: length L stays same, mass M halves, m halves!)
5. Two short coaxial bar magnets exert a force F on each other at distance r. What will be the force if the distance is doubled to 2r?
6. A magnetic needle in a deflection magnetometer shows θ = 60° in the Tan-A position. What deflection would the same magnet produce at the same distance in the Tan-B (equatorial) position? (Given tan 60° = √3.)
7. A bar magnet of moment m and pole strength q_m is bent into an L-shape (90°) right at its midpoint. Find its new magnetic dipole moment in terms of m.
8. A paramagnetic substance obeys Curie's law. Its magnetisation is M = 6 A/m at B = 0.4 T and T = 4 K. Find its magnetisation at B = 0.6 T and T = 12 K.
9. What is the apparent dip in a vertical plane **perpendicular (α = 90°)** to the magnetic meridian at any non-equatorial location?
10. Two short magnets of moments 1.0 A m² and 2.0 A m² are placed coaxially 20 cm apart. Calculate the force between them.

### Solutions

1. cot² δ = cot² 45° + cot² 45° = 1 + 1 = 2 ⟹ cot δ = √2 ⟹ **tan δ = 1 / √2** (δ = tan⁻¹(1/√2) ≈ 35.3°).
   Jaanch: 35.3° < 45° ✅.

2. tan δ_app = tan δ / cos α = tan 45° / cos 60° = 1 / 0.5 = **2** ⟹ **δ_app = tan⁻¹(2) ≈ 63.4°**.
   Jaanch: 63.4° > 45° ✅.

3. m₁ / m₂ = (4² + 2²) / (4² − 2²) = (16 + 4) / (16 − 4) = 20 / 12 = **5 / 3**.
   Jaanch: (5+3)/(5−3) = 8/2 = 4 = (4/2)² ✅.

4. Cut longitudinally: L stays same, M' = M/2 ⟹ I' = I/2; and m' = m/2.
   I'/m' = (I/2)/(m/2) = I/m ⟹ **T' = T = 6.0 s (UNCHANGED!)**.
   Jaanch: Both I and m halve together ✅.

5. F ∝ 1 / r⁴ ⟹ doubling r reduces F by 2⁴ = 16 ⟹ **F' = F / 16**.
   Jaanch: 2⁴ = 16 ✅.

6. Same distance: B_eq = ½ B_axial ⟹ tan θ_B = ½ tan θ_A = √3 / 2 ≈ 0.866 ⟹ **θ_B = tan⁻¹(√3 / 2) ≈ 40.9°**.
   Jaanch: B_eq = B_axial / 2 ✅.

7. Each arm has length l (original length 2l). Distance between N and S poles = √(l² + l²) = l √2.
   New m' = q_m (l √2) = (q_m × 2l) / √2 = **m / √2**.
   Jaanch: m' < m because poles are closer ✅.

8. Curie's law: M ∝ B / T ⟹ M₂ / M₁ = (B₂ / B₁)(T₁ / T₂) = (0.6 / 0.4)(4 / 12) = (3/2)(1/3) = 1/2 ⟹ **M₂ = 6 / 2 = 3.0 A/m**.
   Jaanch: (3/2)(1/3) = 1/2 ✅.

9. α = 90° ⟹ cos 90° = 0 ⟹ horizontal component in that plane = 0! Only B_V acts ⟹ **δ_app = 90°** (needle stands vertically!).

10. F = (10⁻⁷ × 6 × 1.0 × 2.0) / (0.20)⁴ = (1.2 × 10⁻⁶) / (1.6 × 10⁻³) = **7.5 × 10⁻⁴ N = 0.75 mN**.
    Jaanch: 12 / 16 = 0.75; 10⁻⁶ / 10⁻³ = 10⁻³ ⟹ 0.75 mN ✅.

---

Shabaash! Tumne Apparent Dip, Vibration & Deflection Magnetometers aur 1/r⁴ Dipole Forces tak conquer kar liye hain! Wapas chapter overview ke liye [Mixed Problems & Chapter Wrap-up](magnetism-and-matter-part5.md) dekho!
