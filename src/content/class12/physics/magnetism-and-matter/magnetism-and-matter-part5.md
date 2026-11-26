# Chapter: Magnetism and Matter (Part 5)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Magnetic Materials and Hysteresis](magnetism-and-matter-part4.md)

---

## Magnetic Explorer Quiz & Lab Challenge

School science exhibition mein **Kratika** ki team ko "Magnetic Explorer Challenge" mila, jismein 4 mixed stations paar karne the:
1. Ek bar magnet ko kaat kar naya dipole moment aur torque nikaalna;
2. Ek jagah par Earth's B_H aur dip angle se total field B aur needle par torque calculate karna;
3. Solenoid + ferromagnetic core ke andar H, M, χ aur B ek saath nikaalna;
4. Hysteresis loop aur Curie's law ke basis par sahi material chunna!

Chalo Kratika ke saath poora chapter mila kar solve karte hain!

---

## Decision Map: Kaunsa Formula Kab Lagayein?

| Sawaal mein kya dikhe? | Kaunsa tool chuno? | Key Formula |
|---|---|---|
| Bar magnet axial/equatorial field or torque/work | Magnetic dipole formulas | B_ax = (μ₀/4π)(2m/r³); τ = mB sin θ; W = mB(cos θ₁ − cos θ₂) |
| Closed surface magnetic flux | Gauss's law for magnetism | Φ_B = 0 (always!) |
| Earth's magnetic components at a place | Dip triangle | B_H = B cos δ; B_V = B sin δ; tan δ = B_V/B_H; B = √(B_H² + B_V²) |
| Solenoid with magnetic core | Magnetisation & Permeability | H = nI; M = χH; μ_r = 1 + χ; B = μ₀(H + M) = μ₀μ_r H |
| Paramagnet at two temperatures | Curie's Law (use Kelvin!) | χ₁ T₁ = χ₂ T₂ |
| Choosing electromagnet vs permanent magnet | Hysteresis properties | Electromagnet: Soft iron (low coercivity, narrow loop); Permanent: Steel/Alnico (high retentivity & coercivity) |

---

## Mixed Solved Examples (Sab Kuch Mila Kar!)

### Example 1: Cutting a Bar Magnet + Work to Rotate
A bar magnet of magnetic dipole moment **m = 0.80 A m²** is cut into **two equal halves** perpendicular to its length. One half is placed in a uniform magnetic field **B = 0.50 T** aligned with the field (θ = 0°). Find the work required to rotate this half through **60°**.

**Hal (Solution):**
- Transversely (length ke perpendicular) aadha kaatne par har tukde ka dipole moment aadha ho jaata hai:
  **m' = m / 2 = 0.80 / 2 = 0.40 A m²**.
- θ₁ = 0° se θ₂ = 60° (cos 60° = 0.5):
  W = m' B (cos 0° − cos 60°) = 0.40 × 0.50 × (1 − 0.5) = 0.20 × 0.5 = **0.10 J**.
- **Jaanch:** m'B = 0.40 × 0.50 = 0.20 J; 0.20 × 0.5 = 0.10 J ✅.

### Example 2: Earth's Magnetism + Bar Magnet Torque
At a place, the total magnetic field of Earth is **B = 0.50 G** and the angle of dip is **δ = 60°**. A compass needle (free to rotate only in the **horizontal** plane) of magnetic moment **m = 0.20 A m²** is held at **30°** to the magnetic meridian. Find the horizontal restoring torque acting on the needle.

**Hal (Solution):**
- Horizontal plane mein ghoomne wali compass needle par sirf **Horizontal Component B_H** torque lagata hai!
- B_H = B cos 60° = 0.50 × 0.5 = **0.25 G = 2.5 × 10⁻⁵ T** (yaad rakho: 1 G = 10⁻⁴ T!).
- Torque τ = m B_H sin 30° = 0.20 × (2.5 × 10⁻⁵) × 0.5 = **2.5 × 10⁻⁶ N m**.
- **Jaanch:** 0.20 × 0.5 = 0.10; 0.10 × 2.5 × 10⁻⁵ = 2.5 × 10⁻⁶ N m ✅.

### Example 3: Toroid Core with μ_r + Magnetisation
A toroid of average radius **20 cm** has **1000 turns** and carries **2 A** current. If the core has relative permeability **μ_r = 200**, find (a) H, (b) M, and (c) B inside the core (take π = 3.14).

**Hal (Solution):**
- Turns per unit length n = N / (2π r) = 1000 / (2 × 3.14 × 0.20) = 1000 / 1.256 ≈ **796.2 m⁻¹**.
- (a) H = n I = 796.2 × 2 ≈ **1592.4 A/m**.
- (b) χ = μ_r − 1 = 199 ⟹ M = χ H = 199 × 1592.4 ≈ **3.17 × 10⁵ A/m**.
- (c) Exact shortcut: B = μ₀ μ_r n I = [ μ₀ / (2π) ] × (μ_r N I / r)
  = (2 × 10⁻⁷ × 200 × 1000 × 2) / 0.20 = (8 × 10⁻²) / 0.20 = **0.40 T**!
- **Jaanch:** 2 × 200 × 1000 × 2 = 8 × 10⁵; 8 × 10⁵ × 10⁻⁷ = 0.08; 0.08 / 0.20 = 0.40 T ✅.

---

## Aam Galtiyan (Synthesis Mistakes)

1. **Gauss (G) ko seedha Tesla (T) maan kar torque ya energy nikaal dena:**
   - *Galat:* B = 0.5 G ko 0.5 T rakh kar τ = mB nikaalna (answer 10,000 guna galat!).
   - *Sahi:* SI units mein hamesha convert karo: **1 G = 10⁻⁴ T**!
2. **Curie's Law mein °C use kar dena (Kelvin bhool jaana!):**
   - *Galat:* 27 °C se 54 °C jaane par temperature double maan kar χ aadhi kar dena!
   - *Sahi:* Hamesha **Kelvin (T = °C + 273)** use karo! 27 °C = 300 K, 54 °C = 327 K (double nahi hua!).
3. **Horizontal compass needle par total Earth field B laga dena:**
   - *Galat:* Horizontal compass ke torque mein τ = m B sin θ lagana.
   - *Sahi:* Horizontal compass sirf horizontal plane mein ghoom sakta hai ⟹ us par sirf **B_H = B cos δ** kaam karta hai!

---

## Practice Questions (Mixed Chapter Challenge)

1. A bar magnet of magnetic moment 0.60 A m² is placed in a uniform magnetic field of 0.30 T at an angle of 30°. Calculate (a) the torque on it, and (b) its potential energy (take √3 = 1.732).
2. A short bar magnet produces a magnetic field of 4.0 × 10⁻⁵ T at an axial point 10 cm from its centre. Find its magnetic dipole moment m.
3. At a place, the horizontal component of Earth's magnetic field is 0.35 G and the vertical component is 0.35 G. Find (a) the angle of dip δ, and (b) the total magnetic field B in Tesla (take √2 = 1.414).
4. A solenoid has 2000 turns per metre and carries a current of 1.5 A. Its core has susceptibility χ = 499. Find (a) H, (b) μ_r, and (c) B inside the core (take π = 3.14).
5. A paramagnetic salt has susceptibility χ = 3.0 × 10⁻⁴ at 27 °C. What will be its susceptibility at −123 °C? (Hint: convert to Kelvin!)
6. A bar magnet of magnetic moment m is bent into a semi-circular arc. Will its new magnetic moment be equal to m, greater than m, or less than m? Explain briefly.
7. Why is the magnetic flux through any closed surface enclosing a bar magnet always equal to zero?
8. Compare Soft Iron and Steel on two hysteresis parameters and state one practical use of each.
9. State whether True or False: At the magnetic equator of the Earth, a dip needle rests horizontally.
10. A magnetic needle oscillates with a time period T = 2.0 s in a horizontal magnetic field B. What will be its new time period if the magnetic field is increased to 4B?

### Answers

1. (a) τ = m B sin 30° = 0.60 × 0.30 × 0.5 = **0.09 N m**.
   (b) U = −m B cos 30° = −(0.60 × 0.30) × (1.732 / 2) = −0.18 × 0.866 ≈ **−0.156 J**.
   Jaanch: 0.6 × 0.3 = 0.18; 0.18 × 0.5 = 0.09 N m ✅.

2. B_axial = (10⁻⁷ × 2 m) / r³ ⟹ 4.0 × 10⁻⁵ = (2 × 10⁻⁷ × m) / (0.10)³ = (2 × 10⁻⁴) m
   ⟹ **m = (4.0 × 10⁻⁵) / (2 × 10⁻⁴) = 0.20 A m²**.
   Jaanch: (10⁻⁷ × 2 × 0.20) / 10⁻³ = 4.0 × 10⁻⁵ T ✅.

3. (a) tan δ = B_V / B_H = 0.35 / 0.35 = 1 ⟹ **δ = 45°**.
   (b) B = 0.35 √2 = 0.35 × 1.414 ≈ 0.495 G = **4.95 × 10⁻⁵ T**.
   Jaanch: 0.35 × 1.414 = 0.4949 G ✅.

4. (a) H = n I = 2000 × 1.5 = **3000 A/m**.
   (b) μ_r = 1 + χ = 1 + 499 = **500**.
   (c) B = μ₀ μ_r H = (4 × 3.14 × 10⁻⁷) × 500 × 3000 = 12.56 × 10⁻⁷ × 1.5 × 10⁶ = **1.884 T**.
   Jaanch: 500 × 3000 = 1.5 × 10⁶; 12.56 × 0.15 = 1.884 T ✅.

5. T₁ = 27 + 273 = 300 K; T₂ = −123 + 273 = 150 K (Kelvin mein aadha!).
   χ₂ = (3.0 × 10⁻⁴) × (300 / 150) = **6.0 × 10⁻⁴**.
   Jaanch: 300 / 150 = 2; 2 × 3.0 × 10⁻⁴ = 6.0 × 10⁻⁴ ✅.

6. **Less than m!** Jab straight length L ko semi-circle mein moda jaata hai (πR = L ⟹ R = L/π), to dono poles ke beech ki seedhi doori (diameter 2R = 2L/π ≈ 0.637 L) pehle ki length L se kam ho jaati hai ⟹ **m' = (2/π) m < m**!

7. Kyunki magnetic poles hamesha equal-opposite pairs mein hote hain aur magnetic field lines **closed loops** banati hain — jitni lines bahar nikalti hain utni hi andar aati hain ⟹ **Φ_B = 0** (Gauss's law for magnetism).

8. **Soft Iron:** Low coercivity + narrow hysteresis loop ⟹ **Electromagnets / Transformer cores**.
   **Steel:** High retentivity + high coercivity ⟹ **Permanent magnets**.

9. **True ✅.** Magnetic equator par dip angle **δ = 0°** hota hai, isliye dip needle bilkul horizontal rehti hai.

10. T = 2π √(I / (m B)) ⟹ **T ∝ 1 / √B**.
    B ko 4B karne par √B double ho jayega ⟹ **T' = T / 2 = 2.0 / 2 = 1.0 s**.
    Jaanch: 1/√4 = 1/2 ⟹ 2.0/2 = 1.0 s ✅.

---

## Chapter Ka Saar: Magnetism and Matter

| Topic | Mukhya Formula / Niyam | Yaad Rakhne Ki Khaas Baat |
|---|---|---|
| Bar Magnet Dipole | B_ax = (μ₀/4π)(2m/r³); τ = mB sin θ; U = −mB cos θ | Field lines form closed loops (S→N inside); cutting halves m |
| Gauss's Law for Magnetism | Φ_B = Σ (B · ΔA) = 0 | No isolated magnetic monopoles exist |
| Earth's Magnetism | B_H = B cos δ; B_V = B sin δ; tan δ = B_V / B_H | Equator: δ = 0°; Poles: δ = 90°; 1 G = 10⁻⁴ T |
| Magnetisation & Intensity | H = nI; M = χH; B = μ₀(H + M) = μ₀μ_r H; μ_r = 1 + χ | H depends ONLY on free current; H and M are in A/m |
| Magnetic Materials | Dia (χ < 0), Para (χ > 0, χ ∝ 1/T), Ferro (χ ≫ 1, domains) | Above Curie temp T_C, ferromagnetic becomes paramagnetic |
| Hysteresis & Applications | Loop area = heat loss/vol/cycle | Soft iron → electromagnets; Steel/Alnico → permanent magnets |

---

Ab tum Bar Magnets, Earth's Magnetism, Magnetisation aur Magnetic Materials ke saare concepts aur numericals master kar chuke ho!

**Agle chapter mein:** Electricity se Magnetism banana hum seekh chuke hain — ab ulta chamatkar dekhenge: **badalte hue Magnetic Field se Bijli (Electricity) kaise banti hai** — **Electromagnetic Induction**!
