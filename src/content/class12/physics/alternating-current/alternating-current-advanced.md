> **Class:** 12 | **Subject:** Physics | **Chapter 7:** Alternating Current (Gehrai Mein — Advanced Level)

# Alternating Current — Gehrai Mein (Advanced Level)

> **Core chapter se:** Core lessons ([Topic 1](alternating-current.md) se [Topic 6](alternating-current-part6.md)) mein humne RMS values, phasors, series LCR resonance, power factor aur transformers cover kiye. Ab is **Gehrai Mein** section mein hum chaar high-level AC engineering gems dekhenge — **Bandwidth & Half-Power Frequencies (Δω = R / L)**, **RMS Value of Composite / Non-Sinusoidal Waves**, **Parallel LC Anti-Resonance (Rejector Circuit)**, aur **Power Factor Improvement using a Parallel Capacitor**!

---

## Suman ka Power-Grid & RF Lab

**Suman** ek RF-communications & power-grid engineer hai. Uske test bench par chaar advanced AC formulas roz kaam aate hain:
1. Series LCR circuit mein jahan power max power ka **aadha (½ P_max)** ho jaaye (**half-power frequencies ω₁, ω₂**), unka antar (Bandwidth) exact **Δω = R / L = ω₀ / Q** hota hai!
2. Agar kisi circuit mein DC (I₀) aur AC (I₁ sin ωt) ek saath beh rahe hon, to net RMS current **I_rms = √(I₀² + ½ I₁²)** hota hai!
3. Parallel LC circuit resonance par **maximum impedance (minimum current)** deta hai — isliye ise **Rejector Circuit** kehte hain!

---

## 1. Bandwidth & Half-Power Frequencies in Series LCR

Resonance par current max **I_max = V / R** aur power max **P_max = I_max² R** hoti hai.
- **Half-Power Frequencies (ω₁ aur ω₂):** Woh do frequencies jahan power **P_max / 2** aur current **I_max / √2** ho jaaye!
- Tab Z = √2 R ⟹ **|X_L − X_C| = R** (phase angle **φ = ±45°**!).
- Solve karne par exact **Bandwidth (Δω = ω₂ − ω₁)** aur **Q-Factor** ka rishta milta hai:

```
   Bandwidth: Δω = ω₂ − ω₁ = R / L    |    Q = ω₀ / Δω    |    ω₀ = √(ω₁ ω₂)
```

---

## 2. RMS Value of Composite & Non-Sinusoidal Signals

Orthogonality (cross-terms ka full-cycle average = 0!) se, agar **i(t) = I₀ + I₁ sin(ωt) + I₂ cos(ωt)** (or different harmonic frequencies):

```
   I_rms = √( I₀² + ½ I₁² + ½ I₂² )
```

- **Square wave (±I₀):** i² hamesha I₀² ⟹ **I_rms = I₀**.
- **Triangular / Sawtooth wave (peak I₀):** **I_rms = I₀ / √3**.

---

## 3. Parallel LC Tank Circuit (Rejector / Anti-Resonance)

Jab pure L aur pure C **parallel** mein AC source se jude hon:
- Branch currents **I_L = V / X_L** (lags V by 90°) aur **I_C = V / X_C** (leads V by 90°) bilkul **180° opposite** hote hain!
- Net source current **I_net = |I_L − I_C| = V |1/X_L − 1/X_C|**.
- Resonance (**ω₀ = 1 / √(LC)**, X_L = X_C) par: **I_net = 0** aur **Z_eq = ∞**! (Series LCR = **Acceptor** circuit; Parallel LC = **Rejector** circuit!)

---

## 4. Power Factor Correction (Industrial Capacitor Bank)

Factory motors inductive (RL) hoti hain (low cos φ, high line current!). Motor ke **parallel** mein ek **Capacitor C** lagane se uska leading current **I_C** motor ke lagging wattless current **I_L sin φ** ko cancel kar deta hai — jisse **cos φ → 1** ho jaata hai aur line current ghat jaata hai (without changing real power P)!

---

## 5 Deep Solved Problems

### Problem 1: Bandwidth & Half-Power Frequencies
A series LCR circuit has **R = 10 Ω**, **L = 0.50 H**, and resonant frequency **ω₀ = 200 rad/s**. Calculate (a) its bandwidth **Δω**, (b) its quality factor **Q**, and (c) approximate half-power frequencies **ω₁** and **ω₂**.

**Solution:**
- (a) **Δω = R / L = 10 / 0.50 = 20 rad/s**.
- (b) **Q = ω₀ / Δω = 200 / 20 = 10**.
- (c) High Q (≥ 10) ke liye symmetric: **ω₁ ≈ ω₀ − Δω/2 = 190 rad/s**; **ω₂ ≈ ω₀ + Δω/2 = 210 rad/s**.
- Jaanch: ω₀ L / R = (200 × 0.50) / 10 = 10 = Q ✅.

### Problem 2: RMS Current of a DC + AC Signal
A wire carries a combined current **i(t) = 3 + 4√2 sin(100π t)** Amperes. Find the RMS current read by a hot-wire AC ammeter!

**Solution:**
- DC part: I₀ = 3 A. AC peak: I₁ = 4√2 A (so ½ I₁² = ½ × 32 = 16 A²).
- **I_rms = √(I₀² + ½ I₁²) = √(3² + 16) = √(9 + 16) = √25 = 5.0 A**!
- Jaanch: 3-4-5 right triangle (3 A DC + 4 A RMS AC = 5 A total RMS!) ✅.

### Problem 3: RMS of Two Perpendicular-Phase Harmonics
Find the RMS value of **v(t) = 60 sin(ωt) + 80 cos(ωt)** Volts.

**Solution:**
- Single sine-wave amplitude: **v_m = √(60² + 80²) = 100 V**!
- **V_rms = v_m / √2 = 100 / √2 = 50√2 ≈ 70.7 V**.
- Jaanch: General formula √(½(3600) + ½(6400)) = √(1800 + 3200) = √5000 = 50√2 V ✅.

### Problem 4: Phase Angle at Half-Power Frequencies
In a series LCR circuit driven at one of its half-power frequencies (P = P_max / 2), what is the power factor **cos φ**?

**Solution:**
- Half-power par Z = √2 R ⟹ **cos φ = R / Z = R / (√2 R) = 1 / √2 ≈ 0.707** (φ = ±45°!).
- Jaanch: P = (V²/Z²) R = V² R / (2 R²) = ½ (V²/R) = ½ P_max ✅.

### Problem 5: Parallel RC Circuit Impedance & Current
A **30 Ω** resistor and a capacitor of reactance **X_C = 40 Ω** are connected in **parallel** across a **120 V** AC source. Find the net RMS current drawn from the source.

**Solution:**
- Parallel mein voltage V = 120 V same hai!
- Branch currents: **I_R = 120 / 30 = 4.0 A** (in phase with V); **I_C = 120 / 40 = 3.0 A** (leads V by 90°!).
- Phasor sum (90° apart!): **I_net = √(I_R² + I_C²) = √(4² + 3²) = 5.0 A**!
- Jaanch: Admittance 1/Z = √(1/30² + 1/40²) = 5/120 ⟹ Z = 24 Ω ⟹ 120/24 = 5.0 A ✅.

---

## 10 Advanced Practice Questions

1. A series LCR circuit has half-power frequencies f₁ = 900 Hz and f₂ = 1000 Hz. Find (a) its approximate resonant frequency f₀, and (b) its Quality Factor Q.
2. Find the RMS value of the current i(t) = 6 + 8√2 sin(ωt) A.
3. What is the RMS value of a symmetric square wave that alternates between +10 V and −10 V?
4. In a series LCR circuit, L = 0.25 H and R = 5.0 Ω. Calculate its angular bandwidth Δω in rad/s.
5. Why is a series LCR circuit called an **acceptor circuit**, while a parallel LC circuit is called a **rejector circuit**?
6. A 20 Ω resistor and an inductor of reactance X_L = 15 Ω are connected in **parallel** across a 60 V AC supply. Find the total RMS current drawn from the supply.
7. Find the RMS value of v(t) = 100 sin(100t) + 100 sin(300t) V (different frequencies!).
8. An industrial motor draws 10 A from a 220 V supply at a lagging power factor of 0.6. What capacitive reactive current I_C (in parallel) is needed to raise the power factor to 1.0?
9. In Question 8, what is the new line current drawn from the 220 V supply after raising the power factor to 1.0?
10. If ω₁ = 400 rad/s and ω₂ = 900 rad/s are the exact half-power frequencies of a series LCR circuit, find the exact resonant angular frequency ω₀ = √(ω₁ ω₂).

### Solutions

1. (a) f₀ ≈ (900 + 1000) / 2 = **950 Hz** (exact √(900 × 1000) ≈ 948.7 Hz).
   (b) Δf = 1000 − 900 = 100 Hz ⟹ **Q = f₀ / Δf = 950 / 100 = 9.5**.
   Jaanch: 950 / 100 = 9.5 ✅.

2. I_rms = √(6² + ½(8√2)²) = √(36 + 64) = √100 = **10 A**.
   Jaanch: 6-8-10 right triangle! ✅.

3. Square wave (±10 V) has v² = 100 V² at every instant ⟹ **V_rms = √100 = 10 V**.
   Jaanch: Same heating as 10 V DC ✅.

4. Δω = R / L = 5.0 / 0.25 = **20 rad/s**.
   Jaanch: 5 / 0.25 = 20 ✅.

5. Series LCR resonance par **minimum impedance (Z = R, max current)** dekar resonant frequency ko **accept** karta hai; Parallel LC resonance par **maximum impedance (min current)** dekar resonant frequency ko **reject** (block) karta hai!

6. I_R = 60 / 20 = 3.0 A; I_L = 60 / 15 = 4.0 A (90° apart!).
   **I_net = √(3² + 4²) = 5.0 A**.
   Jaanch: 3-4-5 triangle ✅.

7. Different frequencies are orthogonal ⟹ V_rms = √(½(100²) + ½(100²)) = √(5000 + 5000) = √10000 = **100 V**.
   Jaanch: √(5000 + 5000) = 100 V ✅.

8. cos φ = 0.6 ⟹ sin φ = 0.8. Lagging wattless current = I sin φ = 10 × 0.8 = **8.0 A**.
   Isse cancel karne ke liye **I_C = 8.0 A** leading capacitive current chahiye!
   Jaanch: Net reactive current = 8 − 8 = 0 ⟹ φ = 0° (cos φ = 1) ✅.

9. Active (real) current stays unchanged: **I_new = I cos φ = 10 × 0.6 = 6.0 A** (40% reduction in cable current!).
   Jaanch: Real power P = 220 × 6 = 1320 W = 220 × 10 × 0.6 ✅.

10. **ω₀ = √(400 × 900) = √360000 = 600 rad/s**.
    Jaanch: 20 × 30 = 600 rad/s ✅.

---

Shabaash! Tumne AC Bandwidth, Composite RMS Waves, Parallel Anti-Resonance aur Power Factor Correction tak conquer kar liye hain! Wapas chapter overview ke liye [Mixed Problems & Chapter Wrap-up](alternating-current-part6.md) dekho!
