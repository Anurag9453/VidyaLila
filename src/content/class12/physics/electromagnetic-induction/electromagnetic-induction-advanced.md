> **Class:** 12 | **Subject:** Physics | **Chapter 6:** Electromagnetic Induction (Gehrai Mein — Advanced Level)

# Electromagnetic Induction — Gehrai Mein (Advanced Level)

> **Core chapter se:** Core lessons ([Topic 1](electromagnetic-induction.md) se [Topic 6](electromagnetic-induction-part6.md)) mein humne Faraday's law, motional EMF, eddy currents, inductance aur AC generator cover kiye. Ab is **Gehrai Mein** section mein hum chaar high-level EMI gems dekhenge — **Induced Non-Conservative Electric Field (Circular E Loops)**, **Terminal Velocity of a Falling Conducting Rod/Loop**, **LR Circuit Growth & Decay Transients**, aur **Coupling Coefficient (M = k √(L₁ L₂)) & Series Inductors with Mutual Coupling**!

---

## Sujit ka Electromagnetic Systems Lab

**Sujit** ek electromagnetic-propulsion researcher hai. Uske whiteboard par chaar advanced EMI equations likhe hain:
1. Badalta hua magnetic field ek **non-conservative circular electric field** banata hai (jiske closed loops hote hain!): **E = (r / 2)(dB / dt)**!
2. Agar ek metal rod vertical rails par gravity mein gire aur horizontal B uske 90° par ho, to eddy/induced braking use exact **terminal velocity v_T = m g R / (B² l²)** par rok deti hai!
3. LR circuit ka time constant **τ = L / R** hota hai (just like RC's τ = RC!)!
4. Do coupled inductors series mein jodne par **L_eq = L₁ + L₂ ± 2 M** hota hai!

---

## 1. Induced Non-Conservative Electric Field in a Cylindrical B Region

Maan lo radius **R** ke ek cylindrical region mein uniform magnetic field **B** steady rate **dB/dt** se badh raha hai:
- **Andar (r ≤ R):** Radius r ke circular loop par Faraday's law: E (2π r) = π r² (dB/dt) ⟹

```
   E_inside = (r / 2) (dB / dt)      (tangential circular loops!)
```

- **Bahar (r > R):** Enclosed flux sirf radius R tak hai (π R²): E (2π r) = π R² (dB/dt) ⟹

```
   E_outside = (R² / 2r) (dB / dt)   (even where B = 0, E ≠ 0!)
```

*(Note: Yeh induced E **non-conservative** hai — closed loop mein work done = q E (2πr) = q ε ≠ 0!)*

---

## 2. Terminal Velocity of a Falling Conducting Rod on Vertical Rails

Mass **m**, length **l** ki ek conducting rod frictionless vertical rails (resistance **R**) par gravity **g** mein neeche gir rahi hai, aur uniform horizontal field **B** plane ke perpendicular hai:
- Speed v par upward magnetic braking force: **F_m = (B² l² v) / R**.
- Terminal velocity **v_T** par net force = 0 (**F_m = m g**):

```
   v_T = (m g R) / (B² l²)
```

*(Check: Terminal velocity par gravitational power **m g v_T** = electrical heat power **I² R = (B² l² v_T²) / R**!)*

---

## 3. LR Circuit Growth & Decay Transients (Time Constant τ = L / R)

Series LR circuit (battery **ε**, resistance **R**, inductance **L**):
- **Time Constant:** **τ = L / R** (unit: **seconds**! Check: H / Ω = (V s/A)/(V/A) = s!).
- **Growth of Current (switch closed at t = 0):**
  **I(t) = I₀ (1 − e^(−t / τ))**  (jahan steady current **I₀ = ε / R**).
  - **t = 0 (Just switched ON):** Inductor acts as **OPEN CIRCUIT (I = 0)**!
  - **t → ∞ (Steady State):** Pure inductor acts as **SHORT CIRCUIT (0 Ω, I = ε/R)**!
  - **At t = τ = L/R:** Current reaches **63.2%** of I₀!
- **Decay of Current:** **I(t) = I₀ e^(−t / τ)**.

---

## 4. Coefficient of Coupling (k) & Coupled Series Inductors

Do nearby inductors **L₁** aur **L₂** ka mutual inductance **M** max value **√(L₁ L₂)** se zyada nahi ho sakta:

```
   M = k √(L₁ L₂)     (0 ≤ k ≤ 1; k = 1 for 100% flux linkage!)
```

- **Series Aiding (fluxes add):** **L_eq = L₁ + L₂ + 2 M**.
- **Series Opposing (fluxes oppose):** **L_eq = L₁ + L₂ − 2 M**.

---

## 5 Deep Solved Problems

### Problem 1: Induced Electric Field Inside & Outside a Cylindrical B-Region
A uniform magnetic field confined to a circular region of radius **R = 10 cm** increases at a steady rate **dB/dt = 2.0 T/s**. Calculate the magnitude of the induced electric field at (a) **r = 5 cm** (inside), and (b) **r = 20 cm** (outside).

**Solution:**
- (a) Inside (r = 0.05 m): **E = (r / 2)(dB/dt) = (0.05 / 2) × 2.0 = 0.05 V/m**.
- (b) Outside (r = 0.20 m): **E = (R² / 2r)(dB/dt) = (0.01 / 0.40) × 2.0 = 0.05 V/m**.
- Jaanch: Max E at r = R = 0.10 m is 0.10 V/m; both r = R/2 and r = 2R give half of max = 0.05 V/m ✅.

### Problem 2: Terminal Velocity of a Falling Rod
A metal rod of mass **m = 20 g**, length **l = 0.50 m** slides down frictionless vertical rails connected by a **R = 2.0 Ω** resistor in a horizontal magnetic field **B = 1.0 T** (g = 10 m/s²). Find its terminal velocity **v_T**.

**Solution:**
- m = 0.020 kg: **v_T = (m g R) / (B² l²) = (0.020 × 10 × 2.0) / (1.0² × 0.25) = 0.40 / 0.25 = 1.6 m/s**.
- Jaanch: At 1.6 m/s, ε = Blv = 0.8 V ⟹ I = 0.4 A ⟹ F = IlB = 0.20 N = mg ✅.

### Problem 3: LR Circuit at t = 0 vs Steady State
A **12 V** battery is connected to a **3 Ω** resistor in series with a parallel branch of a **6 Ω** resistor and a **2 H** pure inductor. Find the battery current at (a) **t = 0**, and (b) **t → ∞** (steady state).

**Solution:**
- (a) **t = 0:** Inductor = **OPEN circuit** ⟹ current goes through 3 Ω + 6 Ω = 9 Ω:
  **I(0) = 12 / 9 = 4/3 ≈ 1.33 A**.
- (b) **t → ∞:** Pure inductor = **SHORT circuit (0 Ω)** ⟹ 6 Ω resistor bypassed!
  **I(∞) = 12 / 3 = 4.0 A**.
- Jaanch: Compare with RC — Inductor's t=0/t=∞ behaviour is the exact opposite of Capacitor's! ✅.

### Problem 4: LR Time Constant & Stored Energy
An LR circuit has **L = 0.40 H**, **R = 20 Ω**, and battery **ε = 10 V**. Calculate (a) time constant **τ**, (b) steady-state current **I₀**, and (c) steady-state magnetic energy **U**.

**Solution:**
- (a) **τ = L / R = 0.40 / 20 = 0.020 s = 20 ms**.
- (b) **I₀ = ε / R = 10 / 20 = 0.50 A**.
- (c) **U = ½ L I₀² = 0.5 × 0.40 × (0.50)² = 0.05 J = 50 mJ**.
- Jaanch: 0.4/20 = 0.02 s; 0.2 × 0.25 = 0.05 J ✅.

### Problem 5: Finding Coupling Coefficient k from Series Measurements
Two coils of self-inductances **L₁ = 4 mH** and **L₂ = 9 mH** give **L_eq = 19 mH** when connected in series aiding. Find (a) their mutual inductance **M**, and (b) their coupling coefficient **k**.

**Solution:**
- (a) L_eq = L₁ + L₂ + 2 M ⟹ 19 = 4 + 9 + 2 M ⟹ 2 M = 6 ⟹ **M = 3.0 mH**.
- (b) k = M / √(L₁ L₂) = 3 / √(4 × 9) = 3 / 6 = **0.50**.
- Jaanch: Series opposing would give 4 + 9 − 6 = 7 mH ✅.

---

## 10 Advanced Practice Questions

1. A circular magnetic field region of radius R = 5 cm has dB/dt = 4.0 T/s. Find the induced electric field at r = 5 cm (on the boundary).
2. A stationary electron (charge e) sits at distance r = 4 cm inside the region of Question 1. What is the magnitude of the tangential force accelerating the electron?
3. A 50 g metal rod of length 1.0 m slides down vertical rails of resistance 4.0 Ω in B = 0.50 T (g = 10 m/s²). Find its terminal velocity v_T.
4. Calculate the time constant τ of a series LR circuit with L = 50 mH and R = 25 Ω.
5. In an LR growth circuit with steady current I₀ = 4.0 A and τ = 0.1 s, what is the current at t = 0.1 s? (Use 1 − 1/e ≈ 0.632.)
6. Two coils with L₁ = 2 H and L₂ = 8 H are perfectly coupled (k = 1). Find their mutual inductance M and their series-aiding equivalent inductance.
7. Why is the induced electric field inside a changing magnetic field called **non-conservative**?
8. In a falling-rod terminal-velocity setup (Problem 2), if the resistance R is doubled, what happens to the terminal velocity v_T?
9. Find the initial rate of increase of current (dI/dt at t = 0) when a 20 V battery is switched across a 4.0 H inductor in series with a 10 Ω resistor.
10. A 2.0 H inductor carrying 5.0 A is disconnected and allowed to decay through a resistor with time constant τ = 0.05 s. Find the total heat dissipated in the resistor by the time the current reaches zero.

### Solutions

1. At r = R = 0.05 m: E = (0.05 / 2) × 4.0 = **0.10 V/m**.
   Jaanch: 0.05 × 2 = 0.10 V/m ✅.

2. E(0.04 m) = (0.04 / 2) × 4.0 = 0.08 V/m.
   F = e E = (1.6 × 10⁻¹⁹) × 0.08 = **1.28 × 10⁻²⁰ N**.
   Jaanch: 16 × 8 = 128 ⟹ 1.28 × 10⁻²⁰ N ✅.

3. v_T = (0.050 × 10 × 4.0) / (0.25 × 1.0) = 2.0 / 0.25 = **8.0 m/s**.
   Jaanch: 0.5 × 4 / 0.25 = 8.0 m/s ✅.

4. τ = L / R = (50 × 10⁻³) / 25 = **2.0 × 10⁻³ s = 2.0 ms**.
   Jaanch: 50 / 25 = 2 ms ✅.

5. At t = τ: I = 0.632 × 4.0 = **2.528 A ≈ 2.53 A**.
   Jaanch: 4 × 0.632 = 2.528 A ✅.

6. M = 1 × √(2 × 8) = √16 = **4.0 H**. Series aiding: L_eq = 2 + 8 + 2(4) = **18 H**.
   Jaanch: 2 + 8 + 8 = 18 H ✅.

7. Kyunki closed circular path mein induced electric field dwara unit charge par kiya gaya kaam **W_closed = E (2πr) = ε ≠ 0** hota hai (electrostatic field mein yeh hamesha 0 hota hai!).

8. v_T = m g R / (B² l²) ⟹ R double karne par **v_T double** ho jaati hai (kam current ⟹ kam braking force ⟹ tez terminal speed!).

9. At t = 0, I = 0 ⟹ ε = L (dI/dt) ⟹ **dI/dt = ε / L = 20 / 4.0 = 5.0 A/s** (independent of R!).
   Jaanch: 4.0 × 5.0 = 20 V ✅.

10. Total heat dissipated = total initial magnetic energy stored in L:
    **H = ½ L I₀² = 0.5 × 2.0 × (5.0)² = 25 J** (independent of R and τ!).
    Jaanch: 1.0 × 25 = 25 J ✅.

---

Shabaash! Tumne Non-Conservative Induced E-Fields, Falling-Rod Terminal Velocity, LR Transients aur Coupled Inductors tak conquer kar liye hain! Wapas chapter overview ke liye [Mixed Problems & Chapter Wrap-up](electromagnetic-induction-part6.md) dekho!
