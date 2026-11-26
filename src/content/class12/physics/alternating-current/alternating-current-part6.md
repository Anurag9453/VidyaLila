# Chapter: Alternating Current (Part 6)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [LC Oscillations and Transformers](alternating-current-part5.md)

---

## AC Power Grid Challenge ke Chaar Stations

School science club mein **Neetu** ko "AC Power Grid Challenge" ke chaar mixed-concept problems diye gaye:
1. Instantaneous AC equation se RMS values, impedance, power factor aur average power ek saath nikaalna;
2. Series LCR resonance par V_L aur V_C ka supply voltage se zyada hona verify karna;
3. Real 90% efficient transformer mein input current aur power loss calculate karna;
4. High-voltage vs low-voltage power transmission mein line heat loss compare karna!

Chalo Neetu ke saath poora chapter mila kar solve karte hain!

---

## Decision Map: Kaunsa Formula Kab Lagayein?

| Sawaal mein kya dikhe? | Kaunsa tool chuno? | Key Formula |
|---|---|---|
| Equation v = v_m sin(ωt) given | Convert peak → RMS first! | V_rms = v_m / √2; f = ω / (2π) |
| Pure L or C in AC | Reactance & 90° phase (CIVIL) | X_L = ωL (I lags); X_C = 1/(ωC) (I leads) |
| Series LCR circuit | Phasor Impedance & Phase | Z = √[R² + (X_L − X_C)²]; tan φ = (X_L − X_C)/R |
| Resonance / Radio Tuning | X_L = X_C | ω₀ = 1/√(LC); Z_min = R; Q = (ω₀L)/R |
| Average AC Power & Power Factor | Only R dissipates power! | P = V_rms I_rms cos φ = I_rms² R; cos φ = R/Z |
| Transformer (Ideal vs Real) | Turns ratio & efficiency η | V_s/V_p = N_s/N_p; P_out = η P_in (I_p = P_in/V_p) |

---

## Mixed Solved Examples (Sab Kuch Mila Kar!)

### Example 1: Full Series LCR Analysis from AC Equation
An AC source **v = 200√2 sin(100π t)** V is connected across a series combination of **R = 40 Ω**, **X_L = 80 Ω**, and **X_C = 50 Ω**. Calculate:
(a) V_rms and frequency f,
(b) Impedance Z and I_rms,
(c) Power factor cos φ and Average Power P.

**Hal (Solution):**
- (a) v_m = 200√2 V ⟹ **V_rms = v_m / √2 = 200 V**! ω = 100π ⟹ **f = 50 Hz**.
- (b) X_L − X_C = 80 − 50 = 30 Ω.
  **Z = √(40² + 30²) = √(1600 + 900) = 50 Ω**.
  **I_rms = V_rms / Z = 200 / 50 = 4.0 A**.
- (c) **cos φ = R / Z = 40 / 50 = 0.8**.
  **P = V_rms I_rms cos φ = 200 × 4.0 × 0.8 = 640 W**.
- **Jaanch:** P = I_rms² R = (4.0)² × 40 = 16 × 40 = 640 W ✅.

### Example 2: 90% Efficient Transformer + Transmission Line Loss
A step-down transformer with **90% efficiency** steps down **2200 V** to **220 V** and supplies **9.0 kW** of power to a small workshop. Calculate (a) the secondary current **I_s**, and (b) the primary current **I_p**.

**Hal (Solution):**
- (a) Output power P_out = 9.0 kW = 9000 W = V_s I_s ⟹
  **I_s = 9000 / 220 ≈ 40.91 A**.
- (b) Efficiency η = 0.90 = P_out / P_in ⟹ **P_in = 9000 / 0.90 = 10,000 W**.
  Primary current: **I_p = P_in / V_p = 10,000 / 2200 = 50 / 11 ≈ 4.55 A**.
- **Jaanch:** 0.90 × (2200 × 50/11) = 0.90 × 10,000 = 9000 W ✅.

### Example 3: Why High-Voltage Transmission Saves Power
A power station sends **100 kW** of electrical power through transmission cables of total resistance **R_line = 10 Ω**. Compare the power wasted as heat in the cables when transmitted at (a) **1,000 V**, and (b) **10,000 V**.

**Hal (Solution):**
- (a) At V = 1,000 V: Current I₁ = P / V = 100,000 / 1,000 = **100 A**.
  Heat loss **P_loss1 = I₁² R_line = (100)² × 10 = 100,000 W = 100 kW** (saari bijli taaron mein jal gayi!).
- (b) At V = 10,000 V (10× voltage): Current I₂ = 100,000 / 10,000 = **10 A**.
  Heat loss **P_loss2 = I₂² R_line = (10)² × 10 = 1,000 W = 1 kW** (sirf 1% loss — 100 guna kam!).
- **Jaanch:** Voltage 10× ⟹ Current 1/10× ⟹ I²R loss 1/100× (100 kW → 1 kW) ✅.

---

## Aam Galtiyan (Synthesis Mistakes)

1. **v = 200√2 sin(100πt) mein V_rms = 200√2 rakh dena:**
   - *Galat:* Equation ke saamne likhi sankhya ko seedha V_rms maan lena!
   - *Sahi:* Equation mein hamesha **peak value v_m** hoti hai ⟹ **V_rms = v_m / √2 = 200 V**!
2. **Real (non-ideal) transformer mein bhi V_p I_p = V_s I_s laga dena:**
   - *Galat:* 90% efficiency dene ke baad bhi P_in = P_out maan kar I_p nikaalna!
   - *Sahi:* Efficiency η < 1 ho to **P_in = P_out / η** (yaani P_in > P_out), phir **I_p = P_in / V_p** nikaalo!
3. **Resonance par V_L > V_source dekh kar answer galat samajhna:**
   - *Galat:* 200 V source par V_L = 1000 V aaya to pakka calculation galti hai!
   - *Sahi:* Resonance par V_L aur V_C barabar aur **180° opposite** hote hain (ek-doosre ko cancel karte hain), isliye **V_L = V_C = Q × V_source** bilkul possible aur sahi hai!

---

## Practice Questions (Mixed Chapter Challenge)

1. An AC voltage v = 100√2 sin(50π t) V is applied across a 20 Ω resistor. Find (a) V_rms, (b) frequency f, and (c) average power dissipated.
2. In a series LCR circuit, R = 15 Ω, X_L = 35 Ω, and X_C = 15 Ω, connected to a 100 V (RMS) AC source. Calculate (a) impedance Z, (b) I_rms, and (c) power factor.
3. Find the average power consumed by the circuit in Question 2.
4. A series LCR circuit has L = 0.40 H, C = 10 μF, and R = 20 Ω. Calculate (a) its resonant angular frequency ω₀, and (b) its Quality Factor Q.
5. An AC source of 220 V, 50 Hz is connected across a series RC circuit where R = 60 Ω and X_C = 80 Ω. Find (a) impedance Z, (b) I_rms, and (c) whether current leads or lags the voltage.
6. An ideal step-up transformer has primary turns 400 and secondary turns 2000. If 120 V AC is applied to the primary and the secondary delivers 1.5 A, find (a) V_s, and (b) I_p.
7. A real transformer of efficiency 80% steps down 240 V to 24 V and delivers a secondary current of 10 A. Find the primary current I_p.
8. A power plant transmits 50 kW over a line of resistance 4 Ω. Calculate the power lost as heat if transmitted at 5,000 V.
9. State whether True or False: In a series LCR circuit at resonance, the net voltage across the inductor-capacitor combination (V_L − V_C) is zero.
10. A 20 μF capacitor is initially charged to 100 V and connected across a pure 50 mH inductor. Find (a) the total oscillating energy, and (b) the angular frequency ω₀ of oscillations.

### Answers

1. (a) **V_rms = 100√2 / √2 = 100 V**.
   (b) 2π f = 50π ⟹ **f = 25 Hz**.
   (c) **P = V_rms² / R = 100² / 20 = 10000 / 20 = 500 W**.
   Jaanch: I_rms = 100/20 = 5 A ⟹ 100 × 5 = 500 W ✅.

2. X_L − X_C = 35 − 15 = 20 Ω:
   (a) Z = √(15² + 20²) = √(225 + 400) = √625 = **25 Ω**.
   (b) I_rms = 100 / 25 = **4.0 A**.
   (c) cos φ = R / Z = 15 / 25 = **0.6**.
   Jaanch: 15-20-25 right triangle! 15/25 = 0.6 ✅.

3. P = V_rms I_rms cos φ = 100 × 4.0 × 0.6 = **240 W**.
   Jaanch: I_rms² R = 16 × 15 = 240 W ✅.

4. L C = 0.40 × 10 × 10⁻⁶ = 4.0 × 10⁻⁶ s² ⟹ √(L C) = 2.0 × 10⁻³ s.
   (a) **ω₀ = 1 / (2.0 × 10⁻³) = 500 rad/s**.
   (b) **Q = (ω₀ L) / R = (500 × 0.40) / 20 = 200 / 20 = 10**.
   Jaanch: 500 × 0.4 = 200; 200 / 20 = 10 ✅.

5. (a) Z = √(60² + 80²) = √(3600 + 6400) = **100 Ω**.
   (b) I_rms = 220 / 100 = **2.2 A**.
   (c) Capacitive circuit hai ⟹ **Current LEADS voltage**!
   Jaanch: 60-80-100 triangle! 220 / 100 = 2.2 A ✅.

6. (a) V_s = 120 × (2000 / 400) = 120 × 5 = **600 V**.
   (b) Ideal: I_p = (600 × 1.5) / 120 = 900 / 120 = **7.5 A**.
   Jaanch: 120 × 7.5 = 900 W = 600 × 1.5 W ✅.

7. P_out = 24 × 10 = 240 W.
   P_in = P_out / 0.80 = 240 / 0.80 = **300 W**.
   I_p = P_in / V_p = 300 / 240 = **1.25 A**.
   Jaanch: 0.80 × (240 × 1.25) = 0.80 × 300 = 240 W ✅.

8. I = P / V = 50,000 / 5,000 = 10 A.
   P_loss = I² R = (10)² × 4 = **400 W**.
   Jaanch: 100 × 4 = 400 W ✅.

9. **True ✅.** Resonance par X_L = X_C ⟹ V_L = V_C (aur 180° opposite) ⟹ net voltage across L and C together is **zero**!

10. (a) U = ½ C V₀² = 0.5 × (20 × 10⁻⁶) × (100)² = 10⁻⁵ × 10⁴ = **0.10 J**.
    (b) L C = (50 × 10⁻³) × (20 × 10⁻⁶) = 1000 × 10⁻⁹ = 10⁻⁶ s² ⟹ √(L C) = 10⁻³ s ⟹ **ω₀ = 1000 rad/s**.
    Jaanch: 50 × 20 = 1000; 10⁻⁶ ⟹ √10⁻⁶ = 10⁻³ ⟹ 1000 rad/s ✅.

---

## Chapter Ka Saar: Alternating Current

| Topic | Mukhya Formula / Niyam | Yaad Rakhne Ki Khaas Baat |
|---|---|---|
| RMS & Peak Values | V_rms = v_m/√2; I_rms = i_m/√2; I_avg(full) = 0 | AC meters read RMS; 220 V AC peaks at 311 V |
| Pure R, L, C & Phasors | X_L = ωL (I lags 90°); X_C = 1/(ωC) (I leads 90°) | Mnemonic **CIVIL**; C blocks DC, L passes DC |
| Series LCR & Resonance | Z = √[R² + (X_L − X_C)²]; ω₀ = 1/√(LC); Q = ω₀L/R | At resonance: X_L = X_C, Z_min = R, I_max = V/R |
| AC Power & Power Factor | P = V_rms I_rms cos φ = I_rms² R; cos φ = R/Z | Pure L or C has cos φ = 0 (wattless current!) |
| LC Oscillations & Transformer | V_s/V_p = N_s/N_p; P_out = η P_in | Works ONLY on AC; high-voltage transmission cuts I²R loss |

---

Ab tum Alternating Current, Phasors, LCR Resonance, Power Factor aur Transformers ke har concept ko master kar chuke ho!

**Agle chapter mein:** Badalta hua Electric Field Magnetic Field banata hai, aur badalta Magnetic Field Electric Field — yeh dono milkar space mein light ki speed se daudti **Electromagnetic Waves** kaise banate hain, dekhenge!
