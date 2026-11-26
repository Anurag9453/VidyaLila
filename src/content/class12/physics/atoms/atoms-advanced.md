> **Class:** 12 | **Subject:** Physics | **Chapter 12:** Atoms (Gehrai Mein — Advanced Level)

# Atoms — Gehrai Mein (Advanced Level)

> **Core chapter se:** Core lessons ([Topic 1](atoms.md) se [Topic 4](atoms-part4.md)) mein humne Rutherford scattering, Bohr's model, Hydrogen spectra aur de Broglie standing waves cover kiye. Ab is **Gehrai Mein** section mein hum chaar elite atomic-physics gems dekhenge — **Reduced Mass Correction (Positronium & Muonic Hydrogen)**, **Atomic Recoil on Photon Emission**, **X-Ray Cutoff Wavelength (λ_min = 1240 / V nm) & Moseley's Law**, aur **Head-On Inelastic Electron-Atom Collisions (Franck-Hertz Idea)**!

---

## Tulika ka X-Ray & Exotic-Atom Lab

**Tulika** ek atomic-spectroscopy researcher hai. Uske whiteboard par chaar advanced atomic tools likhe hain:
1. Bohr model mein nucleus ko infinite mass maana gaya tha — par agar electron (m) aur positron (m) ek-doosre ke chaaron taraf ghoomein (**Positronium**), to **Reduced Mass μ = m/2** use hota hai ⟹ energies aadhi (**E₁ = −6.8 eV**) aur radii double (**r₁ = 1.06 Å**) ho jaate hain!
2. Jab koi free atom energy **ΔE** ka photon chhodta hai, to momentum conservation se atom peeche **recoil** karta hai: **K_recoil = (ΔE)² / (2 M c²)**!
3. X-ray tube mein accelerated electrons (voltage **V**) se banne wali continuous X-rays ki sabse chhoti wavelength **λ_min = 1240 / V nm** hoti hai, aur characteristic K_α X-rays **Moseley's Law** (**√ν = a (Z − 1)**) maanti hain!

---

## 1. Reduced Mass Correction (Positronium & Muonic Atoms)

Do bodies (masses **m₁** aur **m₂**) apne common Centre of Mass ke chaaron taraf ghoomti hain ⟹ Bohr formulas mein **m_e** ko **Reduced Mass μ** se replace karo:

```
   μ = (m₁ m₂) / (m₁ + m₂)    |    E_n ∝ μ    |    r_n ∝ 1 / μ
```

- **Positronium (e⁻ + e⁺, dono ka mass m_e):** μ = m_e / 2 ⟹ **E₁ = −13.6 / 2 = −6.8 eV**, **r₁ = 2 × 0.53 = 1.06 Å**!
- **Muonic Hydrogen (muon mass ≈ 207 m_e):** μ ≈ 186 m_e ⟹ orbit 186× chhota aur binding energy 186× zyada!

---

## 2. Atomic Recoil on Photon Emission

Maan lo mass **M** ka ek free stationary atom transition energy **ΔE** ka photon emit karta hai:
- Photon ka momentum: **p_photon = ΔE / c**.
- Momentum conservation se atom peeche **p_atom = ΔE / c** se recoil karta hai:

```
   v_recoil = ΔE / (M c)     |     K_recoil = p² / (2 M) = (ΔE)² / (2 M c²)
```

---

## 3. X-Ray Production: Cutoff Wavelength & Moseley's Law

*(Descriptive physics of medical/lab X-ray tubes — never handle high voltage!)*
1. **Continuous X-Rays (Bremsstrahlung):** Voltage **V** par accelerated electron (KE = e V) apni 100% energy ek hi photon ko de de ⟹ **shortest cutoff wavelength λ_min**:
   ```
   λ_min = (h c) / (e V) = 1240 / V (nm) = 12400 / V (Å)
   ```
   *(Sirf accelerating voltage **V** par depend karti hai, target metal Z par nahi!)*
2. **Characteristic X-Rays & Moseley's Law (K_α line: n = 2 → n = 1):**
   Inner K-shell electron (1 bacha hua electron) nucleus ko screen karta hai ⟹ effective nuclear charge **Z_eff = Z − 1**!
   ```
   1 / λ(K_α) = R (Z − 1)² (1/1² − 1/2²) = (3/4) R (Z − 1)²
   √ν = a (Z − b)    (Moseley's Law: b = 1 for K_α!)
   ```

---

## 4. Inelastic Atom-Atom Collisions (Minimum KE for Excitation)

Jab ek tez **Hydrogen atom** (mass m, speed v, KE = K) ek **stationary Hydrogen atom** (mass m) se head-on takrata hai, to momentum conservation ke karan max **50% (K / 2)** energy hi internal excitation mein ja sakti hai!
- 1st excitation (n = 1 → n = 2) ke liye **10.2 eV** chahiye ⟹ incident Hydrogen atom ki minimum KE honi chahiye: **K_min = 2 × 10.2 = 20.4 eV**!

---

## 5 Deep Solved Problems

### Problem 1: Positronium Ground-State Energy & Lyman-α Wavelength
Calculate (a) the ground-state energy **E₁**, and (b) the wavelength of the n = 2 → n = 1 transition in **Positronium** (use hc = 1240 eV nm).

**Solution:**
- Reduced mass μ = m_e / 2 ⟹ saari energies Hydrogen ki **aadhi** ho jaati hain!
- (a) **E₁ = −13.6 / 2 = −6.8 eV** (E₂ = −6.8 / 4 = −1.7 eV).
- (b) ΔE(2→1) = −1.7 − (−6.8) = **5.1 eV** ⟹ **λ = 1240 / 5.1 ≈ 243 nm** (Hydrogen ke 121.6 nm ka exact double!).
- Jaanch: Energies halved ⟹ wavelengths doubled (2 × 121.6 = 243.2 nm) ✅.

### Problem 2: X-Ray Cutoff Wavelength at 31 kV
An X-ray tube operates at an accelerating potential of **V = 31 kV**. Calculate the shortest wavelength **λ_min** of the continuous X-rays emitted (use hc = 1240 eV nm).

**Solution:**
- V = 31,000 V: **λ_min = 1240 / 31,000 nm = 0.040 nm = 0.40 Å**.
- Jaanch: 1240 / 31 = 40; 40 × 10⁻³ nm = 0.040 nm ✅.

### Problem 3: Moseley's Law Comparison of Two Target Metals
The K_α X-ray wavelength for Cobalt (**Z₁ = 27**) is **λ₁**. Find the ratio **λ₁ / λ₂** compared to Copper (**Z₂ = 29**), using Moseley's law (**b = 1**).

**Solution:**
- 1/λ ∝ (Z − 1)² ⟹ **λ₁ / λ₂ = (Z₂ − 1)² / (Z₁ − 1)²**.
- Z₁ − 1 = 26, Z₂ − 1 = 28 ⟹ **λ₁ / λ₂ = 28² / 26² = 14² / 13² = 196 / 169 ≈ 1.16**.
- Jaanch: Higher Z (Copper) has shorter K_α wavelength ⟹ λ₁ > λ₂ ✅.

### Problem 4: Recoil Speed of a Hydrogen Atom
A stationary Hydrogen atom (mass **M = 1.67 × 10⁻²⁷ kg**) emits a Lyman-α photon of energy **ΔE = 10.2 eV**. Calculate the recoil speed **v_recoil** of the atom.

**Solution:**
- ΔE = 10.2 × 1.6 × 10⁻¹⁹ = **1.632 × 10⁻¹⁸ J**.
- Photon momentum p = ΔE / c = (1.632 × 10⁻¹⁸) / (3.0 × 10⁸) = **5.44 × 10⁻²⁷ kg m/s**.
- **v_recoil = p / M = (5.44 × 10⁻²⁷) / (1.67 × 10⁻²⁷) ≈ 3.26 m/s**!
- Jaanch: 5.44 / 1.67 ≈ 3.257 m/s ✅.

### Problem 5: Minimum Energy of Colliding Hydrogen Atoms for Excitation
A moving Hydrogen atom collides head-on with an identical stationary Hydrogen atom in its ground state. What is the minimum kinetic energy (in eV) of the moving atom so that one of the atoms gets excited to **n = 3**?

**Solution:**
- n = 1 → n = 3 excitation energy = **12.09 eV**.
- Equal-mass head-on collision mein max **½ K** energy internal excitation mein ja sakti hai ⟹ ½ K_min = 12.09 ⟹ **K_min = 24.18 eV**!
- Jaanch: Remaining 12.09 eV stays as centre-of-mass KE (momentum conservation!) ✅.

---

## 10 Advanced Practice Questions

1. What is the ionisation energy of Positronium in its ground state?
2. An X-ray tube runs at 62 kV. Calculate the minimum wavelength λ_min of X-rays emitted (use hc = 1240 eV nm).
3. If the accelerating voltage of an X-ray tube is doubled, what happens to (a) the cutoff wavelength λ_min, and (b) the characteristic K_α wavelength of the target?
4. Using Moseley's law (b = 1), if the K_α wavelength for Z = 11 is λ₀, find the K_α wavelength for Z = 21 in terms of λ₀.
5. A stationary Hydrogen atom emits a photon of energy 12.09 eV (3 → 1). Find its recoil speed (M = 1.67 × 10⁻²⁷ kg).
6. Find the minimum kinetic energy of a moving Hydrogen atom colliding head-on with a stationary Hydrogen atom to cause **ionisation** (13.6 eV) of one atom.
7. A hypothetical atom has an electron of mass **2 m_e** orbiting a very heavy proton (Z = 1). Find its ground-state energy E₁ and Bohr radius r₁.
8. Why does the characteristic K_α X-ray wavelength NOT change when the accelerating voltage V of the X-ray tube is increased (above threshold)?
9. Calculate the kinetic energy (in eV) of the electron hitting the target in an X-ray tube if λ_min = 0.05 nm (= 0.5 Å).
10. What is the ratio of the first Bohr orbit radius of Positronium to that of normal Hydrogen?

### Solutions

1. E₁ = −6.8 eV ⟹ Ionisation energy = **+6.8 eV**.

2. λ_min = 1240 / 62,000 nm = **0.020 nm = 0.20 Å**.
   Jaanch: 1240 / 62 = 20 ⟹ 0.020 nm ✅.

3. (a) **λ_min halves** (λ_min ∝ 1/V).
   (b) **K_α wavelength stays UNCHANGED** (it depends ONLY on the target element's atomic number Z!).

4. λ ∝ 1 / (Z − 1)²: (Z₁ − 1) = 10, (Z₂ − 1) = 20 (double!) ⟹ **λ₂ = λ₀ / 4**!
   Jaanch: (10/20)² = 1/4 ✅.

5. ΔE = 12.09 × 1.6 × 10⁻¹⁹ = 1.934 × 10⁻¹⁸ J ⟹ p = 1.934 × 10⁻¹⁸ / (3 × 10⁸) = 6.45 × 10⁻²⁷ kg m/s.
   v_recoil = 6.45 / 1.67 ≈ **3.86 m/s**.
   Jaanch: Scales linearly with ΔE: 3.26 × (12.09/10.2) ≈ 3.86 m/s ✅.

6. Equal-mass head-on collision: **K_min = 2 × 13.6 = 27.2 eV**.
   Jaanch: Half of 27.2 eV = 13.6 eV ✅.

7. E₁ ∝ m ⟹ **E₁ = 2 × (−13.6) = −27.2 eV**; r₁ ∝ 1/m ⟹ **r₁ = 0.53 / 2 = 0.265 Å**.
   Jaanch: Heavier electron orbits closer and is more tightly bound ✅.

8. Characteristic K_α X-rays target metal ke **n = 2 → n = 1 atomic energy levels** ke antar se banti hain — jo sirf target ke **Z** par depend karta hai, tube voltage V par nahi!

9. V = 1240 / 0.05 = **24,800 V = 24.8 kV** ⟹ **KE = 24.8 keV**.
   Jaanch: 24800 × 0.05 = 1240 ✅.

10. r₁ ∝ 1 / μ ⟹ μ_Positronium = m_e / 2 ⟹ **r₁(Positronium) : r₁(H) = 2 : 1**!

---

Shabaash! Tumne Reduced Mass, Atomic Recoil, X-Ray Cutoff & Moseley's Law aur Inelastic Collisions tak conquer kar liye hain! Wapas chapter overview ke liye [Mixed Problems & Chapter Wrap-up](atoms-part4.md) dekho!
