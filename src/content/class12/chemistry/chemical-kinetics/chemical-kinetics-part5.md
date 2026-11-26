> **Class:** 12 | **Subject:** Chemistry | **Chapter 3:** Chemical Kinetics (Part 5)

# Sab Kuch Mila Kar: Mixed Problems & Chapter Wrap-up

> **Pichle topic mein:** Humne [Temperature Dependence, Arrhenius Equation and Collision Theory](chemical-kinetics-part4.md) padha. Ab hum poore Chemical Kinetics chapter — rate definitions, order, integrated equations, half-life, aur Arrhenius equation — ko ek saath milakar mixed multi-concept problems solve karenge.

---

Ramila ek pharmaceutical quality-control lab ke seminar mein gayi thi, jahan expiry date calculate karne ka tareeka bataya gaya. Quality manager ne samjhaya: "Kisi medicine ki shelf-life pata karne ke liye hum 5 saal wait nahi karte! Hum 40°C aur 50°C par uske first-order decomposition ka rate constant k napte hain, Arrhenius equation se Eₐ nikalte hain, phir 25°C par k calculate karke integrated first-order equation se 10% degradation ka time (expiry date) nikal lete hain!" Ramila ne dekha ki is ek real-world calculation mein poora Chemical Kinetics chapter jud gaya!

---

## Naye Shabd (Revision Snapshot)

Is topic mein koi naya term nahi hai — hum pichle charon topics ke core tools ko ek saath apply karenge:
- **Stoichiometric Rate:** −(1/a) d[A]/dt = +(1/c) d[C]/dt
- **Rate Law & Units of k:** Rate = k [A]ˣ[B]ʸ ; units = (mol L⁻¹)¹⁻ⁿ s⁻¹
- **Zero Order:** [R] = [R]₀ − kt ; t₁/₂ = [R]₀ / (2k)
- **First Order:** k = (2.303 / t) log([R]₀ / [R]) ; t₁/₂ = 0.693 / k
- **Arrhenius:** log(k₂ / k₁) = [Eₐ / (2.303 R)] × [(T₂ − T₁) / (T₁ T₂)]

---

## Mixed Solved Examples

### Example 1: Joining Half-Life + Arrhenius Equation (Shelf-Life Style)
A first-order reaction has half-life t₁/₂ = 200 min at 300 K and t₁/₂ = 50 min at 320 K. Calculate:
(a) the activation energy Eₐ (in kJ mol⁻¹),
(b) the time required for 75% completion at 320 K. (log 2 = 0.3010, R = 8.314 J K⁻¹ mol⁻¹)

**Solution:**
(a) Since k = 0.693 / t₁/₂, we have k₂ / k₁ = (t₁/₂)₁ / (t₁/₂)₂ = 200 / 50 = 4.
Using Arrhenius equation:
log(k₂ / k₁) = [Eₐ / (2.303 R)] × [(T₂ − T₁) / (T₁ T₂)]
log(4) = [Eₐ / 19.147] × [(320 − 300) / (300 × 320)]
0.6020 = [Eₐ / 19.147] × (20 / 96000) = Eₐ / (19.147 × 4800)
Eₐ = 0.6020 × 19.147 × 4800 = 55327 J mol⁻¹ = **55.33 kJ mol⁻¹**.

(b) At 320 K, t₁/₂ = 50 min.
75% completion means 25% (= 1/4 = (1/2)²) remains → exact **2 half-lives**.
t₇₅% = 2 × 50 = **100 min**.

Jaanch: Ratio k₂/k₁ = 4 in 20 K matches 2× per 10 K (Eₐ ≈ 55 kJ mol⁻¹). At 320 K, 100 → 50 (50 min) → 25 (100 min) ✅

---

### Example 2: Joining Rate Law + Stoichiometry + Units
For the reaction 2X + Y → 3Z, the rate law is Rate = k [X][Y] with k = 0.40 L mol⁻¹ s⁻¹.
When [X] = 0.25 M and [Y] = 0.20 M, calculate:
(a) the overall rate of reaction,
(b) the rate of disappearance of X,
(c) the rate of appearance of Z.

**Solution:**
(a) Rate = k [X][Y] = 0.40 × 0.25 × 0.20 = **0.020 mol L⁻¹ s⁻¹** (2.0 × 10⁻² mol L⁻¹ s⁻¹).
(b) Rate = −(1/2) d[X]/dt → −d[X]/dt = 2 × Rate = 2 × 0.020 = **0.040 mol L⁻¹ s⁻¹**.
(c) Rate = +(1/3) d[Z]/dt → +d[Z]/dt = 3 × Rate = 3 × 0.020 = **0.060 mol L⁻¹ s⁻¹**.

Jaanch: Units of k (L mol⁻¹ s⁻¹) × M² = mol L⁻¹ s⁻¹. Ratio (−d[X]/dt) : (+d[Z]/dt) = 0.040 : 0.060 = 2 : 3 (matches coefficients 2X → 3Z) ✅

---

### Example 3: Identifying Order from Half-Life Data + Integrated Equation
For a reaction A → B, the half-life is 40 s when [A]₀ = 0.80 M, and 20 s when [A]₀ = 0.40 M.
(a) Determine the order of the reaction.
(b) Find the rate constant k with units.
(c) How long will it take for [A] to drop from 0.80 M to 0.20 M?

**Solution:**
(a) When [A]₀ is halved (0.80 → 0.40 M), t₁/₂ is also halved (40 s → 20 s). Thus t₁/₂ ∝ [A]₀, which is the signature of a **Zero-Order reaction (n = 0)**.
(b) For zero order, t₁/₂ = [A]₀ / (2k) → k = [A]₀ / (2 t₁/₂) = 0.80 / (2 × 40) = **0.010 mol L⁻¹ s⁻¹**.
(c) Using [A] = [A]₀ − kt:
0.20 = 0.80 − (0.010 × t)
0.010 t = 0.60 → t = **60 s**.

Jaanch: Check with second data point: k = 0.40 / (2 × 20) = 0.010 M s⁻¹. In 60 s, drop = 0.010 × 60 = 0.60 M → 0.80 − 0.60 = 0.20 M ✅

---

### Example 4: Gas-Phase First-Order Kinetics + Rate at Given Time
For the first-order decomposition N₂O₅(g) → 2NO₂(g) + ½O₂(g), the rate constant at 318 K is k = 5.0 × 10⁻⁴ s⁻¹.
Starting with [N₂O₅]₀ = 0.60 mol L⁻¹:
(a) Find [N₂O₅] after 1386 s.
(b) Find the instantaneous rate of reaction at t = 1386 s.

**Solution:**
(a) First check half-life: t₁/₂ = 0.693 / (5.0 × 10⁻⁴) = 1386 s!
Since t = 1386 s is exact 1 half-life, [N₂O₅] = 0.60 / 2 = **0.30 mol L⁻¹**.
(b) Instantaneous rate at t = 1386 s:
Rate = k [N₂O₅] = (5.0 × 10⁻⁴ s⁻¹) × (0.30 mol L⁻¹) = **1.5 × 10⁻⁴ mol L⁻¹ s⁻¹**.

Jaanch: k × t = 5.0 × 10⁻⁴ × 1386 = 0.693 = ln 2 → e⁻ᵏᵗ = 1/2 → [N₂O₅] = 0.30 M; Rate = 5×10⁻⁴ × 0.30 = 1.5×10⁻⁴ M s⁻¹ ✅

---

## Aam Galtiyan (Mixed-Problem Traps)

1. **k₂/k₁ ke liye t₁/₂ ratio ko seedha rakh dena:**
   - *Galat:* k₂/k₁ = (t₁/₂)₂ / (t₁/₂)₁ likh dena.
   - *Sahi:* First-order mein k = 0.693 / t₁/₂ (inversely proportional!), isliye **k₂ / k₁ = (t₁/₂)₁ / (t₁/₂)₂** hota hai! Tez reaction ka t₁/₂ chhota hota hai.

2. **Mixed questions mein half-life shortcut sirf first-order par lagane ke bajaye zero-order par laga dena:**
   - *Galat:* Zero-order mein 75% completion ko 2 × t₁/₂ bol dena.
   - *Sahi:* Zero-order mein 100% completion hi 2 × t₁/₂ par ho jata hai! 75% completion 1.5 × t₁/₂ par hota hai.

---

## Quick Recap

- **Shortcut to spot order fast:**
  - Units of k: mol L⁻¹ s⁻¹ (0th), s⁻¹ (1st), L mol⁻¹ s⁻¹ (2nd).
  - Half-life test: t₁/₂ ∝ [R]₀ (0th), t₁/₂ independent of [R]₀ (1st).
- **Combined strategy:** Use Arrhenius to shift k between temperatures, then plug k into integrated rate law or t₁/₂.

---

## Practice Questions

1. A first-order reaction is 50% complete in 30 min at 300 K and in 10 min at 320 K. Calculate Eₐ in kJ mol⁻¹. (log 3 = 0.4771, R = 8.314 J K⁻¹ mol⁻¹)
2. For 3A → 2B, Rate = k[A]² with k = 0.15 L mol⁻¹ s⁻¹. When [A] = 0.40 M, find the rate of appearance of B.
3. A reaction has t₁/₂ = 120 s regardless of whether [R]₀ is 0.50 M or 0.10 M. Find: (a) order of reaction, (b) rate constant k, (c) time for 87.5% completion.
4. For a zero-order reaction, [R] drops from 1.00 M to 0.70 M in 60 s. How much total time from t = 0 will it take for [R] to reach 0.10 M?
5. The rate constant of a first-order reaction is 2.303 × 10⁻³ s⁻¹. What percentage of the reactant remains after 1000 s?
6. A reaction A + B → C has rate law Rate = k[A]¹/²[B]¹/². What are the units of k? If [A] is quadrupled and [B] is kept constant, how does the rate change?
7. The activation energy of a reaction is 0 kJ mol⁻¹. If k = 1.6 × 10⁶ s⁻¹ at 280 K, what is the value of k at 350 K?
8. For a first-order reaction, show that the time required for 75% completion is twice the time required for 50% completion.
9. A catalyst lowers Eₐ of a reaction by 11.49 kJ mol⁻¹ at 300 K. Find the ratio k_catalysed / k_uncatalysed. (R = 8.314 J K⁻¹ mol⁻¹)
10. In a first-order gas reaction A(g) → B(g) + C(g), initial pressure is 0.60 atm. After 10 min, total pressure is 0.90 atm. Find: (a) rate constant k in min⁻¹, (b) half-life t₁/₂.

---

### Answers

1. k₂ / k₁ = (t₁/₂)₁ / (t₁/₂)₂ = 30 / 10 = 3.
   log 3 = [Eₐ / 19.147] × [20 / (300 × 320)]
   0.4771 = Eₐ / (19.147 × 4800)
   Eₐ = 0.4771 × 19.147 × 4800 = 43848 J mol⁻¹ = **43.85 kJ mol⁻¹**.
   Jaanch: 43848 / (19.147 × 4800) = 0.4771 = log 3 ✅
2. Rate = 0.15 × (0.40)² = 0.15 × 0.16 = 0.024 mol L⁻¹ s⁻¹.
   Rate = +(1/2) d[B]/dt → +d[B]/dt = 2 × 0.024 = **0.048 mol L⁻¹ s⁻¹**.
   Jaanch: 0.15 × 0.16 × 2 = 0.048 mol L⁻¹ s⁻¹ ✅
3. (a) t₁/₂ independent of [R]₀ → **First order (n = 1)**.
   (b) k = 0.693 / 120 = **5.775 × 10⁻³ s⁻¹**.
   (c) 87.5% complete → 12.5% (= 1/8 = (1/2)³) remains → 3 half-lives = 3 × 120 = **360 s**.
   Jaanch: 100% → 50% (120 s) → 25% (240 s) → 12.5% (360 s) ✅
4. Zero order: k = (1.00 − 0.70) / 60 = 0.30 / 60 = 0.005 mol L⁻¹ s⁻¹.
   Time to reach 0.10 M: t = (1.00 − 0.10) / 0.005 = 0.90 / 0.005 = **180 s**.
   Jaanch: Drop of 0.30 M takes 60 s, so drop of 0.90 M (3×) takes 180 s ✅
5. log([R]₀ / [R]) = (k × t) / 2.303 = (2.303 × 10⁻³ × 1000) / 2.303 = 1.000.
   [R]₀ / [R] = 10¹ = 10 → [R] / [R]₀ = 1/10 = **10% remains**.
   Jaanch: 90% reacted → t₉₀% = 2.303/k = 1000 s ✅
6. Overall order n = 1/2 + 1/2 = 1 → units of k = **s⁻¹**.
   If [A] is quadrupled: New rate = k (4[A])¹/² [B]¹/² = √4 × Rate = **2 times (doubles)**.
   Jaanch: 4¹/² = 2 ✅
7. When Eₐ = 0, k = A e⁰ = A (independent of T). So at 350 K, k = **1.6 × 10⁶ s⁻¹** (unchanged).
8. t₇₅% = (2.303/k) log(100/25) = (2.303/k) log 4 = (2.303/k) × 2 log 2 = 2 × [(2.303/k) log 2] = **2 × t₅₀%**.
9. log(k_cat / k_uncat) = ΔEₐ / (2.303 R T) = 11490 / (19.147 × 300) = 11490 / 5744.1 = 2.000.
   k_cat / k_uncat = 10² = **100 times**.
   Jaanch: 2 × 5744.1 = 11488.2 ≈ 11490 J mol⁻¹ ✅
10. P_A at 10 min = 2Pᵢ − P_t = 2(0.60) − 0.90 = 0.30 atm.
    P_A dropped from 0.60 atm to 0.30 atm (exact half) in 10 min → **(b) t₁/₂ = 10 min**.
    **(a)** k = 0.693 / 10 = **0.0693 min⁻¹**.
    Jaanch: (2.303/10) log(0.60/0.30) = (2.303 × 0.3010)/10 = 0.0693 min⁻¹ ✅

---

## Chapter Ka Saar (Chemical Kinetics Wrap-up)

| Topic | Core Formula / Rule | Key Takeaway |
|---|---|---|
| 1. Reaction Rate | Rate = −(1/a) d[A]/dt = +(1/c) d[C]/dt | Always positive; depends on concentration, T, surface area, catalyst |
| 2. Rate Law & Order | Rate = k[A]ˣ[B]ʸ ; k unit = (mol L⁻¹)¹⁻ⁿ s⁻¹ | Order is experimental (can be 0, fraction); molecularity is theoretical (1, 2, 3) |
| 3. Zero-Order Kinetics | [R] = [R]₀ − kt ; t₁/₂ = [R]₀ / (2k) | Linear [R] vs t; t₁/₂ ∝ [R]₀; finishes in finite time |
| 4. First-Order Kinetics | k = (2.303/t) log([R]₀/[R]) ; t₁/₂ = 0.693/k | Linear log[R] vs t; t₁/₂ independent of [R]₀; gas form uses 2Pᵢ − P_t |
| 5. Arrhenius & Collisions | k = A e⁻ᴱᵃ/ᴿᵀ ; log(k₂/k₁) = [Eₐ/(2.303R)][(T₂−T₁)/(T₁T₂)] | Catalyst lowers Eₐ (ΔH, K unchanged); effective collisions need energy ≥ Eₐ + orientation |

---

Ab tumne Chemical Kinetics ke saare topics aur mixed problems master kar liye hain! Agar tum competitive exams (JEE/NEET) ke liye **second-order integrated kinetics, parallel/consecutive reactions, steady-state approximation aur nuclear decay kinetics** seekhna chahte ho, toh [Chemical Kinetics — Gehrai Mein (Advanced Level)](chemical-kinetics-advanced.md) zaroor padho.

**Agle chapter mein:** Hum **The d- and f-Block Elements** shuru karenge — jahan transition metals ke rang-birange compounds, variable oxidation states, magnetic moments aur lanthanoid contraction ke raaz khulenge!
