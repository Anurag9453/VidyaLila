> **Class:** 12 | **Subject:** Chemistry | **Chapter 3:** Chemical Kinetics (Gehrai Mein — Advanced Level)

# Chemical Kinetics — Gehrai Mein (Advanced Level)

> **Core chapter se bridge:** Core chapters ([Part 1: Reaction Rate](chemical-kinetics.md) se [Part 5: Mixed Problems](chemical-kinetics-part5.md) tak) mein humne zero-order, first-order, half-life aur Arrhenius equation padha. Ab hum competitive-exam depth mein **nth-order & second-order integrated equations, parallel & consecutive first-order reactions, steady-state approximation (SSA), aur radioactive/optical kinetics** cover karenge.

---

Reetu ek chemical engineering workshop mein thi jahan benzene ke chlorination reactor mein ek saath do products ban rahe the (parallel reactions) aur ek product aage aur react karke unwanted by-product bana raha tha (consecutive reactions). Engineer ne bataya: "Agar tumhe desired product ki maximum yield chahiye, toh sirf ek rate constant nahi — parallel aur sequential rate constants ke exact differential equations solve karne padte hain!"

---

## 1. General nth-Order & Second-Order Kinetics

Reaction: A → P with Rate = −d[A]/dt = k [A]ⁿ (for n ≠ 1).

Integrating from [A]₀ at t = 0 to [A] at time t:
**1 / [A]ⁿ⁻¹ − 1 / [A]₀ⁿ⁻¹ = (n − 1) k t**

### Special Case: Second-Order Reaction (n = 2)
- **Integrated equation:** **1/[A] − 1/[A]₀ = k t**
- **Straight-line graph:** 1/[A] vs t has **slope = +k** and y-intercept = 1/[A]₀.
- **Half-life:** **t₁/₂ = 1 / (k [A]₀)** (inversely proportional to [A]₀!).
- **General half-life scaling (for any order n):**
  **t₁/₂ ∝ 1 / [A]₀ⁿ⁻¹**
  Using two initial concentrations [A]₁ and [A]₂:
  **(t₁/₂)₁ / (t₁/₂)₂ = ([A]₂ / [A]₁)ⁿ⁻¹** → **n = 1 + log[(t₁/₂)₁ / (t₁/₂)₂] / log([A]₂ / [A]₁)**

---

## 2. Parallel (Competing) First-Order Reactions

Suppose A decomposes simultaneously into B and C:
- A → B (rate constant k₁)
- A → C (rate constant k₂)

Key equations:
1. **Overall rate of disappearance of A:** −d[A]/dt = (k₁ + k₂)[A] = **k_eff [A]**, where **k_eff = k₁ + k₂**.
2. **Overall half-life:** **1 / t₁/₂ = 1 / (t₁/₂)₁ + 1 / (t₁/₂)₂**
3. **Product ratio (constant at all times!):** **[B] / [C] = k₁ / k₂**
4. **Percentage yield of B:** **%B = [k₁ / (k₁ + k₂)] × 100%**
5. **Effective activation energy:** **Eₐ(eff) = (k₁ Eₐ₁ + k₂ Eₐ₂) / (k₁ + k₂)**

---

## 3. Consecutive (Sequential) First-Order Reactions

Suppose A → B (rate constant k₁) → C (rate constant k₂), starting with [A]₀ and [B]₀ = [C]₀ = 0.

1. **[A]_t = [A]₀ e⁻ᵏ¹ᵗ**
2. **[B]_t = [A]₀ [k₁ / (k₂ − k₁)] (e⁻ᵏ¹ᵗ − e⁻ᵏ²ᵗ)**
3. **Time at which intermediate [B] is maximum (t_max):**
   Set d[B]/dt = 0 → **t_max = [1 / (k₂ − k₁)] ln(k₂ / k₁) = [2.303 / (k₂ − k₁)] log(k₂ / k₁)**
4. **Maximum concentration of B:** **[B]_max = [A]₀ (k₂ / k₁)^(−k₂ / (k₂ − k₁))**

---

## 4. Steady-State Approximation (SSA) & Optical Rotation Kinetics

### Steady-State Approximation (SSA)
When a reaction produces a highly reactive, low-concentration intermediate **I**, after a brief induction period its net rate of change is approximately zero:
**d[I]/dt ≈ 0** (Rate of formation of I = Rate of consumption of I).

**Classic Example: Decomposition of N₂O₅**
Step 1 (reversible): N₂O₅ ⇌ NO₂ + NO₃ (forward k₁, backward k₋₁)
Step 2 (slow): NO₃ + NO₂ → NO + O₂ + NO₂ (k₂)
Step 3 (fast): NO + NO₃ → 2NO₂ (k₃)

Applying SSA to [NO₃] (ignoring fast Step 3 coupling or for standard two-step Lindemann/equilibrium mechanism):
If A ⇌ B (k₁, k₋₁) and B → C (k₂):
d[B]/dt = k₁[A] − k₋₁[B] − k₂[B] = 0 → [B] = k₁[A] / (k₋₁ + k₂)
Rate of product formation = k₂[B] = **[k₁ k₂ / (k₋₁ + k₂)] [A]**.

### First-Order Kinetics by Optical Rotation (Polarimetry)
For sucrose inversion (C₁₂H₂₂O₁₁ + H₂O → Glucose + Fructose), optical rotation changes from r₀ (at t = 0) to r_t (at time t) and r_∞ (at completion):
- [R]₀ ∝ (r₀ − r_∞)
- [R] ∝ (r_t − r_∞)
- **k = (2.303 / t) log [ (r₀ − r_∞) / (r_t − r_∞) ]**

### First-Order Kinetics by Titration (Acid-Catalysed Ester Hydrolysis)
If V₀, V_t, V_∞ are volumes of NaOH required to titrate acid at t = 0, t, and ∞:
- **k = (2.303 / t) log [ (V_∞ − V₀) / (V_∞ − V_t) ]**

---

## Deep Solved Problems

### Problem 1: Determining Order from Half-Life Scaling
For a reaction A → Products, t₁/₂ = 80 s when [A]₀ = 0.20 M, and t₁/₂ = 20 s when [A]₀ = 0.40 M. Find the order n and rate constant k.

**Solution:**
(t₁/₂)₁ / (t₁/₂)₂ = ([A]₂ / [A]₁)ⁿ⁻¹
80 / 20 = (0.40 / 0.20)ⁿ⁻¹ → 4 = 2ⁿ⁻¹ → n − 1 = 2 → **n = 3 (Third order)**.

For 3rd order: 1/[A]² − 1/[A]₀² = 2 k t.
At t = t₁/₂, [A] = [A]₀/2 → 4/[A]₀² − 1/[A]₀² = 3/[A]₀² = 2 k t₁/₂ → t₁/₂ = 3 / (2 k [A]₀²).
k = 3 / (2 × 80 × 0.20²) = 3 / (160 × 0.04) = 3 / 6.4 = **0.46875 L² mol⁻² s⁻¹**.

Jaanch: Check with [A]₀ = 0.40 M: t₁/₂ = 3 / (2 × 0.46875 × 0.16) = 3 / 0.15 = 20 s ✅

---

### Problem 2: Second-Order Reaction Time Calculation
A second-order reaction 2A → P has k = 0.25 L mol⁻¹ s⁻¹. If [A]₀ = 0.80 M, find: (a) t₁/₂, (b) time required for 75% completion.

**Solution:**
(a) t₁/₂ = 1 / (k [A]₀) = 1 / (0.25 × 0.80) = 1 / 0.20 = **5.0 s**.
(b) At 75% completion, [A] = 0.25 × 0.80 = 0.20 M.
1/[A] − 1/[A]₀ = kt → 1/0.20 − 1/0.80 = 0.25 t → 5.0 − 1.25 = 0.25 t → 3.75 = 0.25 t → t = **15.0 s**.
(Notice: For 2nd order, t₇₅% = 3 × t₁/₂!)

Jaanch: First half (0.80 → 0.40 M) takes 5 s; next half (0.40 → 0.20 M) takes 1/(0.25×0.40) = 10 s; total = 5 + 10 = 15 s ✅

---

### Problem 3: Parallel First-Order Decay
A radioactive nucleus X decays simultaneously by α-emission (t₁/₂ = 30 min) and β-emission (t₁/₂ = 60 min). Find: (a) effective half-life of X, (b) percentage of α-decay product formed.

**Solution:**
(a) 1 / t₁/₂ = 1/30 + 1/60 = 3/60 = 1/20 → **t₁/₂(eff) = 20 min**.
(b) k_α / k_β = (t₁/₂)_β / (t₁/₂)_α = 60 / 30 = 2 / 1.
% α-product = [k_α / (k_α + k_β)] × 100 = [2 / (2 + 1)] × 100 = **66.67%**.

Jaanch: k_α = 0.693/30 = 0.0231 min⁻¹, k_β = 0.693/60 = 0.01155 min⁻¹, k_eff = 0.03465 min⁻¹, t₁/₂ = 0.693/0.03465 = 20 min ✅

---

### Problem 4: Consecutive Reaction Maximum Intermediate Time
For A → B (k₁ = 0.020 s⁻¹) → C (k₂ = 0.080 s⁻¹), find the time t_max when [B] reaches its maximum value. (log 2 = 0.3010)

**Solution:**
t_max = [2.303 / (k₂ − k₁)] log(k₂ / k₁)
= [2.303 / (0.080 − 0.020)] log(0.080 / 0.020)
= (2.303 / 0.060) log 4
= (2.303 × 0.6020) / 0.060 = 1.3864 / 0.060 = **23.1 s**.

Jaanch: ln(4) / 0.060 = 1.3863 / 0.060 = 23.105 s ✅

---

### Problem 5: Polarimetry First-Order Kinetics
In the inversion of sucrose at 300 K, optical rotations measured were: r₀ = +30.0°, r_t = +10.0° at t = 40 min, and r_∞ = −10.0°. Calculate the rate constant k. (log 2 = 0.3010)

**Solution:**
r₀ − r_∞ = 30.0 − (−10.0) = 40.0°.
r_t − r_∞ = 10.0 − (−10.0) = 20.0°.
k = (2.303 / 40) log(40.0 / 20.0) = (2.303 / 40) log 2 = 0.693 / 40 = **0.01733 min⁻¹**.

Jaanch: Remaining rotation difference dropped from 40° to 20° (exact half!) in 40 min → t₁/₂ = 40 min → k = 0.693/40 = 0.01733 min⁻¹ ✅

---

## Advanced Practice Questions

1. For a second-order reaction, prove that t₇₅% = 3 × t₅₀%.
2. A reaction has t₁/₂ = 100 s at [A]₀ = 0.50 M and t₁/₂ = 200 s at [A]₀ = 0.25 M. Find the order and rate constant k.
3. For a parallel first-order reaction A → B (k₁ = 1.5 × 10⁻³ s⁻¹) and A → C (k₂ = 4.5 × 10⁻³ s⁻¹), find the overall half-life and % yield of B.
4. In Question 3, if Eₐ₁ = 60 kJ mol⁻¹ and Eₐ₂ = 100 kJ mol⁻¹, calculate the effective activation energy Eₐ(eff).
5. For consecutive first-order reactions A → B → C with k₁ = 0.10 min⁻¹ and k₂ = 0.30 min⁻¹, find t_max. (log 3 = 0.4771)
6. Using the steady-state approximation for the Lindemann unimolecular mechanism:
   A + A ⇌ A* + A (k₁, k₋₁) and A* → P (k₂), derive the rate law and show its high-pressure and low-pressure limits.
7. In an ester hydrolysis titration, V₀ = 10.0 mL, V_t = 25.0 mL at t = 20 min, and V_∞ = 40.0 mL. Find k in min⁻¹. (log 2 = 0.3010)
8. Two first-order reactions have the same frequency factor A, but Eₐ₁ − Eₐ₂ = 11.49 kJ mol⁻¹ at 300 K. Find the ratio k₂ / k₁.
9. A second-order reaction with [A]₀ = 0.50 M is 50% complete in 40 s. How long will it take to reach 80% completion?
10. What is the ratio of t₈₇.₅% to t₅₀% for: (a) a first-order reaction, (b) a second-order reaction?

---

### Solutions

1. 1/[A] − 1/[A]₀ = kt.
   For 50%: [A] = [A]₀/2 → 2/[A]₀ − 1/[A]₀ = 1/[A]₀ = k t₅₀% → t₅₀% = 1/(k[A]₀).
   For 75%: [A] = [A]₀/4 → 4/[A]₀ − 1/[A]₀ = 3/[A]₀ = k t₇₅% → t₇₅% = 3/(k[A]₀) = **3 × t₅₀%**.
2. Halving [A]₀ doubles t₁/₂ → t₁/₂ ∝ 1/[A]₀ → **Second order (n = 2)**.
   k = 1 / (t₁/₂ [A]₀) = 1 / (100 × 0.50) = **0.020 L mol⁻¹ s⁻¹**.
   Jaanch: At 0.25 M, t₁/₂ = 1/(0.020 × 0.25) = 200 s ✅
3. k_eff = 1.5 × 10⁻³ + 4.5 × 10⁻³ = 6.0 × 10⁻³ s⁻¹.
   t₁/₂ = 0.693 / (6.0 × 10⁻³) = **115.5 s**.
   %B = (1.5 / 6.0) × 100 = **25%**.
   Jaanch: k₁ : k₂ = 1 : 3 → 25% B and 75% C ✅
4. Eₐ(eff) = (k₁ Eₐ₁ + k₂ Eₐ₂) / (k₁ + k₂) = (1.5 × 60 + 4.5 × 100) / 6.0 = (90 + 450) / 6.0 = 540 / 6.0 = **90.0 kJ mol⁻¹**.
   Jaanch: 0.25(60) + 0.75(100) = 15 + 75 = 90 kJ mol⁻¹ ✅
5. t_max = [2.303 / (0.30 − 0.10)] log(0.30 / 0.10) = (2.303 / 0.20) × 0.4771 = 1.0988 / 0.20 = **5.49 min**.
   Jaanch: ln(3) / 0.20 = 1.0986 / 0.20 = 5.493 min ✅
6. SSA on [A*]: d[A*]/dt = k₁[A]² − k₋₁[A*][A] − k₂[A*] = 0 → [A*] = k₁[A]² / (k₋₁[A] + k₂).
   Rate = k₂[A*] = **k₁ k₂ [A]² / (k₋₁[A] + k₂)**.
   - High pressure (k₋₁[A] >> k₂): Rate ≈ (k₁k₂/k₋₁)[A] (**1st order**).
   - Low pressure (k₂ >> k₋₁[A]): Rate ≈ k₁[A]² (**2nd order**).
7. V_∞ − V₀ = 40.0 − 10.0 = 30.0 mL; V_∞ − V_t = 40.0 − 25.0 = 15.0 mL.
   k = (2.303 / 20) log(30.0 / 15.0) = 0.693 / 20 = **0.03465 min⁻¹**.
   Jaanch: Exact half of ester hydrolysed in 20 min → t₁/₂ = 20 min ✅
8. log(k₂ / k₁) = (Eₐ₁ − Eₐ₂) / (2.303 R T) = 11490 / (19.147 × 300) = 2.000 → **k₂ / k₁ = 100**.
   Jaanch: Lower activation energy gives 100× larger rate constant ✅
9. k = 1 / (40 × 0.50) = 0.050 L mol⁻¹ s⁻¹.
   80% complete → [A] = 0.20 × 0.50 = 0.10 M.
   t = (1/0.10 − 1/0.50) / 0.050 = (10 − 2) / 0.050 = 8 / 0.050 = **160 s**.
   Jaanch: For 2nd order, t₈₀% = 4 × t₅₀% = 4 × 40 = 160 s ✅
10. 87.5% complete means [A] = [A]₀/8.
    (a) First order: t₈₇.₅% = 3 × t₅₀% → ratio = **3**.
    (b) Second order: t₈₇.₅% = (8/[A]₀ − 1/[A]₀)/k = 7/(k[A]₀) = 7 × t₅₀% → ratio = **7**.
    Jaanch: 1st order: 1 → 1/2 (1) → 1/4 (2) → 1/8 (3). 2nd order: 1 + 2 + 4 = 7 half-lives ✅

---

Wapas core chapter wrap-up par jaane ke liye dekho: [Mixed Problems & Chapter Wrap-up](chemical-kinetics-part5.md).
