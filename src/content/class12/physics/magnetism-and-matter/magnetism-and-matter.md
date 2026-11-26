# Chapter: Magnetism and Matter

> **Class:** 12 | **Subject:** Physics
> **Previous chapter:** [Moving Charges and Magnetism](../moving-charges-and-magnetism/moving-charges-and-magnetism-part5.md)

---

## Toota Hua Bar Magnet aur Do Naye Poles!

Table saaf karte waqt **Heera** ke haath se ek chhota bar magnet farsh par gir kar theek beech se **do tukdon** mein toot gaya. Heera ne socha: "Oh no! Ab ek tukde mein sirf North pole bacha hoga aur doosre mein sirf South pole!" Par jab usne dono tukdon ko paas laaya, to hairaan reh gaya — **dono tukdon ke apne-apne North aur South poles the!**

Papa muskuraye: "Heera, electric charges (+ aur −) ko tum alag kar sakte ho, par **magnetic poles hamesha jode (dipole) mein hi milte hain!** Akele North ya akele South pole (**magnetic monopole**) ka duniya mein koi wajood nahi — aur yahi hai **Gauss's Law for Magnetism**!"

Class 9 mein tumne [Magnetism](../../../class9/physics/magnetism/magnetism.md) mein bar magnet ke basic gun padhe the. Aaj Class 12 mein hum **Bar Magnet as a Magnetic Dipole**, uske axial/equatorial fields, aur **Gauss's Law for Magnetism** ka poora mathematical roop seekhenge!

---

## Naye Shabd (New Words)

- **Magnetic Dipole Moment (m→):** Bar magnet ki magnetic taqat: **m = q_m × (2l)** (jahan q_m pole strength aur 2l magnetic length hai). Direction: magnet ke andar **South se North pole** ki taraf! SI unit **A m²** (or J/T).
- **Magnetic Monopole:** Ek akela North ya akela South pole — jo nature mein **exist nahi karta**!
- **Gauss's Law for Magnetism:** Kisi bhi closed surface se guzarne wala total magnetic flux hamesha **ZERO** hota hai: **Φ_B = Σ (B · ΔA) = 0**.

---

## 1. Bar Magnet aur Magnetic Field Lines

Bar magnet ke bahar magnetic field lines **North se South** jaati hain, aur magnet ke **andar South se North** wapas aakar **continuous closed loops** banati hain!

```
           . - - - - - - - - - .
        .-'   . - - - - - - .   '-.
       /     /               \     \
      :     :  +-----------+  :     :
      :     :  : S ------> N :     :   (Inside: S to N; Outside: N to S)
      :     :  +-----------+  :     :
       \     \               /     /
        '-.   ' - - - - - - '   .-'
           ' - - - - - - - - - '
```

### Electric Field Lines vs Magnetic Field Lines (Key Difference!):
- Electric field lines + charge se shuru hokar − charge par khatam hoti hain (open curves — kabhi closed loop nahi banati!).
- Magnetic field lines **hamesha closed continuous loops** banati hain!

---

## 2. Bar Magnet as an Equivalent Solenoid & Dipole Formulas

Ek current-carrying **solenoid** aur ek **bar magnet** ke magnetic fields bilkul ek jaise hote hain! Isliye bar magnet ke formulas electric dipole ke formulas ki **exact mirror copy** hote hain (bas **p → m**, **E → B**, aur **1/(4πε₀) → μ₀/(4π)** badal do!):

| Property | Electric Dipole (p) | Magnetic Dipole / Bar Magnet (m) |
|---|---|---|
| Axial field (short dipole, r >> l) | E_axial = (1/4πε₀) (2p / r³) | **B_axial = (μ₀ / 4π) × (2 m / r³)** |
| Equatorial field (short dipole) | E_eq = (1/4πε₀) (p / r³) | **B_eq = (μ₀ / 4π) × (m / r³)** |
| Ratio (same distance r) | E_axial = 2 E_eq | **B_axial = 2 B_eq** |
| Torque in uniform field | τ = p E sin θ | **τ = m B sin θ** |
| Potential Energy in uniform field | U = − p E cos θ | **U = − m B cos θ** |
| Work to rotate θ₁ → θ₂ | W = p E (cos θ₁ − cos θ₂) | **W = m B (cos θ₁ − cos θ₂)** |

*(Yaad rakho: θ = 0° par U = −mB **stable equilibrium**, aur θ = 180° par U = +mB **unstable equilibrium**!)*

### Bar Magnet ka Oscillation Time Period (Stated & Checked):
Agar ek magnetic needle (moment of inertia **I**, dipole moment **m**) ko uniform magnetic field **B** mein thoda sa hila kar chhod dein, to woh Simple Harmonic Motion (SHM) karti hai jiska time period hota hai:

**T = 2π √(I / (m B))**

---

## 3. Gauss's Law for Magnetism

Electrostatics mein Gauss's law tha: **Φ_E = q_enc / ε₀**.
Magnetism mein kisi bhi **closed 3D surface** se guzarne wala net magnetic flux hamesha **ZERO** hota hai:

**Φ_B = Σ (B · ΔA) = 0**

**Kyun? (Physical Meaning):**
Kyunki magnetic field lines **hamesha closed loops** banati hain! Kisi bhi closed surface ke andar jitni magnetic field lines enter karti hain (inward flux), theek utni hi bahar bhi nikalti hain (outward flux) — isliye net flux = 0! Iska seedha matlab hai ki **isolated magnetic monopoles exist nahi karte!**

---

## Solved Examples

### Example 1: Torque & Work on a Bar Magnet
A bar magnet of magnetic dipole moment **m = 0.40 A m²** is placed in a uniform magnetic field **B = 0.25 T**.
(a) Find the torque on it when its axis makes an angle of **30°** with the field.
(b) How much work is required to rotate it from stable equilibrium (0°) to unstable equilibrium (180°)?

**Hal (Solution):**
- (a) τ = m B sin 30° = 0.40 × 0.25 × 0.5 = 0.10 × 0.5 = **0.05 N m**.
- (b) W = m B (cos 0° − cos 180°) = m B (1 − (−1)) = 2 m B
  = 2 × 0.40 × 0.25 = **0.20 J**.
- **Jaanch:** m B = 0.40 × 0.25 = 0.10 J; τ = 0.10 × 0.5 = 0.05 N m ✅; W = 2 × 0.10 = 0.20 J ✅.

### Example 2: Axial & Equatorial Field of a Short Bar Magnet
A short bar magnet has magnetic dipole moment **m = 0.50 A m²**. Calculate the magnetic field at a distance of **r = 10 cm** from its centre on:
(a) the axial line, and
(b) the equatorial line.

**Hal (Solution):**
- r = 10 cm = 0.10 m ⟹ r³ = 10⁻³ m³, μ₀ / (4π) = 10⁻⁷ T m/A.
- (a) Axial: B_axial = (10⁻⁷ × 2 × 0.50) / 10⁻³ = (1.0 × 10⁻⁷) / 10⁻³ = **1.0 × 10⁻⁴ T** (= 1 Gauss).
- (b) Equatorial: B_eq = B_axial / 2 = **5.0 × 10⁻⁵ T** (= 0.5 Gauss).
- **Jaanch:** 2 × 0.5 = 1; 10⁻⁷ / 10⁻³ = 10⁻⁴ T; half = 5.0 × 10⁻⁵ T ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Sochna ki magnetic field lines North par shuru aur South par khatam hoti hain:**
   - *Galat:* Bar magnet ke andar field lines nahi hoti ya N→S jaati hain.
   - *Sahi:* Bahar **N → S** aur andar **S → N** — yeh hamesha **closed loops** banati hain!
2. **Sochna ki bar magnet ko kaat kar North aur South poles alag kiye ja sakte hain:**
   - *Galat:* Beech se kaatne par akela N pole mil jayega.
   - *Sahi:* Har chhote tukde mein phir se N aur S dono poles ban jaate hain — monopoles exist nahi karte!
3. **Gauss's law for magnetism mein non-zero right-hand side likh dena:**
   - *Galat:* Φ_B = μ₀ m likh dena.
   - *Sahi:* Kisi bhi closed surface ke liye **Φ_B = 0** (hamesha zero)!

---

## Quick Recap

| Concept | Formula / Fact | Key Point |
|---|---|---|
| Magnetic Dipole Moment | m = q_m × (2l) (unit A m² or J/T) | Vector directed **S → N** inside magnet |
| Short Bar Magnet Fields | B_axial = (μ₀/4π)(2m/r³); B_eq = (μ₀/4π)(m/r³) | B_axial = 2 B_eq (for same r) |
| Torque & Potential Energy | τ = mB sin θ; U = −mB cos θ | W = mB(cos θ₁ − cos θ₂) |
| Gauss's Law for Magnetism | Φ_B = Σ (B · ΔA) = 0 | Proves **no magnetic monopoles** exist |

---

## Practice Questions

1. Write two key differences between electric field lines and magnetic field lines.
2. State Gauss's law for magnetism. What fundamental physical fact does it express?
3. A bar magnet of magnetic moment 1.5 A m² is placed in a uniform magnetic field of 0.22 T. Calculate the work done in turning the magnet from (a) 0° to 90°, and (b) 0° to 180°.
4. What is the torque on the bar magnet in Question 3 when it is held perpendicular (θ = 90°) to the magnetic field?
5. A short bar magnet of magnetic moment 0.80 A m² is placed horizontally. Find the magnitude of the magnetic field at a distance of 20 cm from its centre on (a) its axial line, and (b) its equatorial line.
6. What happens to the magnetic dipole moment of a bar magnet if it is cut into two equal halves (a) perpendicular to its length (transversely), and (b) along its length (longitudinally)?
7. A closely wound solenoid of 800 turns and area of cross-section 2.5 × 10⁻⁴ m² carries a current of 3.0 A. What is its equivalent magnetic dipole moment?
8. State whether True or False: The direction of magnetic dipole moment m→ of a bar magnet is from its North pole to its South pole.
9. A magnetic needle of moment of inertia I = 7.5 × 10⁻⁶ kg m² and magnetic moment m = 6.0 × 10⁻² A m² oscillates in a uniform magnetic field B = 0.02 T. Find its time period T (take π = 3.14, √6.25 = 2.5).
10. At what angle θ with a uniform magnetic field B is a bar magnet in (a) stable equilibrium, and (b) unstable equilibrium? Write its potential energy in each position.

### Answers

1. (i) Magnetic field lines **closed continuous loops** banati hain; electric field lines open curves hoti hain (+ se − tak).
   (ii) Magnetic field lines ka closed surface se net flux **zero** hota hai (no monopoles); electric field lines ka flux q_enc/ε₀ hota hai.

2. **Φ_B = Σ (B · ΔA) = 0** (kisi bhi closed surface se net magnetic flux zero hota hai). Yeh batata hai ki **isolated magnetic monopoles exist nahi karte**.

3. m B = 1.5 × 0.22 = 0.33 J:
   (a) 0° → 90°: W = m B (cos 0° − cos 90°) = 0.33 × (1 − 0) = **0.33 J**.
   (b) 0° → 180°: W = m B (1 − (−1)) = 2 × 0.33 = **0.66 J**.
   Jaanch: 1.5 × 0.22 = 0.33; 2 × 0.33 = 0.66 J ✅.

4. τ = m B sin 90° = 1.5 × 0.22 × 1 = **0.33 N m**.
   Jaanch: 1.5 × 0.22 = 0.33 N m ✅.

5. r = 0.20 m ⟹ r³ = 8 × 10⁻³ m³:
   (a) B_axial = (10⁻⁷ × 2 × 0.80) / (8 × 10⁻³) = (1.6 × 10⁻⁷) / (8 × 10⁻³) = **2.0 × 10⁻⁵ T**.
   (b) B_eq = B_axial / 2 = **1.0 × 10⁻⁵ T**.
   Jaanch: 1.6 / 8 = 0.2; 0.2 × 10⁻⁴ = 2.0 × 10⁻⁵ T ✅.

6. (a) **Transversely (length aadhi):** Pole strength q_m same, par length 2l aadhi ho gayi ⟹ **m' = m / 2**.
   (b) **Longitudinally (width aadhi):** Length 2l same, par pole strength q_m aadhi ho gayi ⟹ **m' = m / 2**.
   *(Dono cases mein har aadhe tukde ka dipole moment m/2 ho jaata hai!)*

7. Equivalent solenoid dipole moment: **m = N I A** = 800 × 3.0 × (2.5 × 10⁻⁴) = 2400 × 2.5 × 10⁻⁴ = **0.60 A m²**.
   Jaanch: 2400 × 2.5 = 6000; 6000 × 10⁻⁴ = 0.60 A m² ✅.

8. **False ❌.** Magnetic dipole moment **m→** ki direction magnet ke andar **South pole se North pole** ki taraf hoti hai!

9. m B = (6.0 × 10⁻²) × 0.02 = 1.2 × 10⁻³ J.
   I / (m B) = (7.5 × 10⁻⁶) / (1.2 × 10⁻³) = 6.25 × 10⁻³ s² = 0.00625 s².
   √0.00625 ≈ 0.079 s ⟹ T = 2 × 3.14 × 0.079 ≈ **0.50 s**.
   Jaanch: 7.5 / 1.2 = 6.25; 6.28 × 0.07906 ≈ 0.496 ≈ 0.50 s ✅.

10. (a) **Stable equilibrium:** θ = **0°**, U = **−m B** (minimum).
    (b) **Unstable equilibrium:** θ = **180°**, U = **+m B** (maximum).

---

Ab tum Bar Magnet as a Dipole aur Gauss's Law for Magnetism ko pakka samajh chuke ho!

**Agle topic mein:** Duniya ka sabse bada chumbak — khud hamari **Prithvi (Earth's Magnetism)**! Declination, Dip aur Horizontal Component seekhenge!
