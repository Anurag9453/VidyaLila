> **Class:** 12 | **Subject:** Chemistry | **Chapter 3:** Chemical Kinetics (Part 3)

# Integrated Rate Equations and Half-Life

> **Pichle topic mein:** Humne [Rate Law, Order and Molecularity](chemical-kinetics-part2.md) mein differential rate law Rate = k [A]ˣ [B]ʸ aur order ke baare mein padha. Ab hum differential equations ko integrate karke **Zero-Order** aur **First-Order** reactions ke exact concentration-vs-time formulas aur **Half-Life (t₁/₂)** nikalenge.

---

Pyare ne hospital mein nuclear medicine department ke bahar ek poster dekha: "Radioactive iodine-131 ka half-life 8 din hai." Pyare ne apne uncle se poocha, "Iska matlab 16 din mein saara iodine khatam ho jayega?" Uncle hase aur bole, "Nahi beta! 8 din mein aadha bachega (50%), agle 8 din mein us aadhe ka aadha (25%), phir 12.5% — yeh first-order decay hai, iski half-life har baar barabar rehti hai!"

Aaj hum dekhenge ki zero-order aur first-order reactions samay ke saath kaise ghat-te hain aur half-life dono ke liye bilkul alag tarah se kaise behave karti hai!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Integrated Rate Equation** | Woh direct equation jo reactant ki concentration [R] ko time t aur rate constant k se jodti hai (bina slope nikale) |
| **Zero-Order Reaction** | Woh reaction jiska rate reactant concentration ki power 0 par depend karta hai (Rate = k = constant) |
| **First-Order Reaction** | Woh reaction jiska rate reactant concentration ki first power par depend karta hai (Rate = k[R]) |
| **Half-Life (t₁/₂)** | Woh time jismein reactant ki concentration apni initial value [R]₀ ka theek aadha ([R]₀/2) reh jaye |
| **Pseudo First-Order Reaction** | Aisi higher-order reaction jo ek reactant ke bahut zyada excess mein hone par first-order jaisi behave kare |

---

## 1. Zero-Order Reaction

Reaction: R → P
Rate = − d[R]/dt = k [R]⁰ = k

Rearrange aur integrate karne par (t = 0 par [R] = [R]₀, aur time t par [R]):
∫ d[R] = −k ∫ dt
[R] − [R]₀ = −kt

### Integrated Rate Equation (Zero Order):
**[R] = [R]₀ − kt**  ya  **k = ([R]₀ − [R]) / t**

- **Graph ([R] vs t):** Straight line with **slope = −k** and **y-intercept = [R]₀**.
- **Half-Life (t₁/₂):** Put [R] = [R]₀/2 at t = t₁/₂:
  k = ([R]₀ − [R]₀/2) / t₁/₂ = [R]₀ / (2 t₁/₂)
  **t₁/₂ = [R]₀ / (2k)**
  Dhyan do: Zero-order reaction mein **t₁/₂ directly proportional to [R]₀** hota hai!
- **Time for 100% completion:** Put [R] = 0 → **t₁₀₀% = [R]₀ / k = 2 t₁/₂**. (Zero-order reaction finite time mein poori tarah khatam ho jati hai!)
- **Examples:** Thermal decomposition of NH₃ on hot platinum surface at high pressure; thermal decomposition of HI on gold surface.

```
Zero-Order Graph: [R] vs t

  [R]
   ^
[R]₀│\
    │  \   Slope = -k
    │    \
    │      \
    +--------\-----> t
            t = [R]₀/k
```

---

## 2. First-Order Reaction

Reaction: R → P
Rate = − d[R]/dt = k [R]¹

Separate variables aur integrate karne par (t = 0 par [R] = [R]₀, time t par [R]):
∫ d[R]/[R] = −k ∫ dt
ln([R]/[R]₀) = −kt  →  ln([R]₀/[R]) = kt

Base-10 log mein convert karne ke liye ln(x) = 2.303 log₁₀(x):

### Integrated Rate Equation (First Order):
**k = (2.303 / t) log([R]₀ / [R])**
Ya exponential form mein: **[R] = [R]₀ e⁻ᵏᵗ**

- **Graphs:**
  1. **ln[R] vs t:** Straight line with **slope = −k**, y-intercept = ln[R]₀.
  2. **log[R] vs t:** Straight line with **slope = −k / 2.303**, y-intercept = log[R]₀.
  3. **log([R]₀/[R]) vs t:** Straight line passing through origin with **slope = +k / 2.303**.

- **Half-Life (t₁/₂):** Put [R] = [R]₀/2 at t = t₁/₂:
  k = (2.303 / t₁/₂) log(2) = (2.303 × 0.3010) / t₁/₂ = 0.693 / t₁/₂
  **t₁/₂ = 0.693 / k**
  Sabse bada nateeja: First-order reaction mein **t₁/₂ initial concentration [R]₀ se bilkul independent hoti hai!**

- **Completion time:** Theoretically [R] = [R]₀ e⁻ᵏᵗ kabhi exact 0 nahi hota (infinite time lagta hai).
- **Examples:** All natural and artificial radioactive decays (e.g., ¹⁴C, ¹³¹I), hydrogenation of ethene (C₂H₄ + H₂ → C₂H₆), decomposition of N₂O₅ and H₂O₂.

### First-Order Gas Phase Reaction (Pressure Form)

Maan lo gas-phase first-order reaction hai: A(g) → B(g) + C(g)
- t = 0 par: P_A = Pᵢ, P_B = 0, P_C = 0 → Total pressure = Pᵢ
- time t par: P_A = Pᵢ − x, P_B = x, P_C = x
- Total pressure P_t = (Pᵢ − x) + x + x = Pᵢ + x → x = P_t − Pᵢ
- Isliye P_A = Pᵢ − (P_t − Pᵢ) = **2Pᵢ − P_t**

Formula: **k = (2.303 / t) log [ Pᵢ / (2Pᵢ − P_t) ]**
(Warning: Yeh 2Pᵢ − P_t sirf tab lagta hai jab 1 mole gas se 2 moles gas banein! Har reaction ke liye stoichiometry se P_A nikalna best hai.)

---

## 3. Pseudo First-Order Reaction

Kabhi-kabhi reaction asal mein second-order (bimolecular) hoti hai, par ek reactant (jaise paani) itna zyada excess mein hota hai ki reaction ke dauran uski concentration lagbhag constant rehti hai.

**Example 1: Acid-catalysed hydrolysis of ethyl acetate**
CH₃COOC₂H₅ + H₂O (excess) → CH₃COOH + C₂H₅OH (H⁺ catalyst)
True rate law: Rate = k' [CH₃COOC₂H₅] [H₂O]
Kyunki [H₂O] lagbhag constant hai, k = k'[H₂O] → **Rate = k [CH₃COOC₂H₅]** (appears first order!).

**Example 2: Inversion of cane sugar (sucrose)**
C₁₂H₂₂O₁₁ + H₂O (excess) → C₆H₁₂O₆ (glucose) + C₆H₁₂O₆ (fructose) (H⁺ catalyst)
Rate = k [C₁₂H₂₂O₁₁].

---

## Solved Examples

### Example 1: Zero-Order Concentration & Completion Time
A zero-order reaction has rate constant k = 2.5 × 10⁻³ mol L⁻¹ s⁻¹. Starting with [R]₀ = 0.50 mol L⁻¹, calculate:
(a) the concentration of R after 80 s,
(b) the half-life t₁/₂,
(c) the time for complete consumption of R.

**Solution:**
(a) [R] = [R]₀ − kt = 0.50 − (2.5 × 10⁻³ × 80) = 0.50 − 0.20 = **0.30 mol L⁻¹**.
(b) t₁/₂ = [R]₀ / (2k) = 0.50 / (2 × 2.5 × 10⁻³) = 0.50 / 0.005 = **100 s**.
(c) t₁₀₀% = [R]₀ / k = 0.50 / 0.0025 = **200 s**.

Jaanch: At t = 100 s, [R] = 0.50 − 0.0025 × 100 = 0.25 = [R]₀/2. At t = 200 s, [R] = 0.50 − 0.50 = 0 ✅

---

### Example 2: First-Order Rate Constant and Half-Life
A first-order reaction is 40% complete in 50 minutes. Calculate:
(a) the rate constant k (in min⁻¹),
(b) the half-life t₁/₂,
(c) the time required for 80% completion. (Given: log 10 = 1, log 6 = 0.7782, log 5 = 0.6990)

**Solution:**
Let [R]₀ = 100.
(a) After 40% completion, remaining [R] = 100 − 40 = 60.
k = (2.303 / t) log([R]₀ / [R]) = (2.303 / 50) log(100 / 60) = (2.303 / 50) (log 10 − log 6)
= (2.303 / 50) × (1 − 0.7782) = (2.303 × 0.2218) / 50 = 0.5108 / 50 = **0.01022 min⁻¹** (1.022 × 10⁻² min⁻¹).

(b) t₁/₂ = 0.693 / k = 0.693 / 0.01022 = **67.8 min**.

(c) For 80% completion, remaining [R] = 100 − 80 = 20, so [R]₀/[R] = 100/20 = 5.
t₈₀% = (2.303 / k) log 5 = (2.303 × 0.6990) / 0.01022 = 1.6098 / 0.01022 = **157.5 min**.

Jaanch: 40% takes 50 min (< t₁/₂ = 67.8 min, sensible!). 75% takes 2 t₁/₂ = 135.6 min, so 80% taking 157.5 min is completely consistent ✅

---

### Example 3: Proof of t₉₉.₉% ≈ 10 × t₁/₂ for First-Order Reaction
Show that for a first-order reaction, the time required for 99.9% completion is approximately 10 times its half-life.

**Solution:**
For 99.9% completion: [R]₀ = 100, remaining [R] = 100 − 99.9 = 0.1.
t₉₉.₉% = (2.303 / k) log(100 / 0.1) = (2.303 / k) log(1000) = (2.303 / k) × 3 = 6.909 / k.
Half-life: t₁/₂ = 0.693 / k.
Ratio: t₉₉.₉% / t₁/₂ = 6.909 / 0.693 = **9.97 ≈ 10**.

Jaanch: After 10 half-lives, remaining fraction = (1/2)¹⁰ = 1/1024 ≈ 0.000977 = 0.098% → 99.9% complete ✅

---

### Example 4: Gas-Phase First-Order Reaction
For the first-order decomposition SO₂Cl₂(g) → SO₂(g) + Cl₂(g) at constant volume and temperature:
At t = 0, total pressure Pᵢ = 0.40 atm.
At t = 100 s, total pressure P_t = 0.60 atm.
Calculate the rate constant k. (log 2 = 0.3010)

**Solution:**
1 mole gas produces 2 moles gas, so P(SO₂Cl₂) at time t = 2Pᵢ − P_t = 2(0.40) − 0.60 = 0.80 − 0.60 = 0.20 atm.
k = (2.303 / t) log [ Pᵢ / (2Pᵢ − P_t) ]
= (2.303 / 100) log(0.40 / 0.20) = (2.303 / 100) log 2
= (2.303 × 0.3010) / 100 = 0.693 / 100 = **6.93 × 10⁻³ s⁻¹**.

Jaanch: P(SO₂Cl₂) dropped from 0.40 atm to 0.20 atm (exact half!) in 100 s, so t₁/₂ = 100 s and k = 0.693/100 = 6.93 × 10⁻³ s⁻¹ ✅

---

## Aam Galtiyan (Common Mistakes)

1. **First-order formula mein [R] ki jagah reacted amount (x) rakh dena:**
   - *Galat:* 30% complete hone par log(100 / 30) likh dena.
   - *Sahi:* [R] **bacha hua (remaining)** reactant hai! 30% complete hone par 70% bacha hai, isliye **log(100 / 70)** likho.

2. **log[R] vs t graph ka slope −k maan lena:**
   - *Galat:* log₁₀[R] vs t ke slope ko −k bolna.
   - *Sahi:* **ln[R] vs t** ka slope −k hota hai; **log₁₀[R] vs t** ka slope **−k / 2.303** hota hai!

3. **Zero-order aur first-order half-life formulas mix kar dena:**
   - *Galat:* First-order mein initial concentration double hone par t₁/₂ double kar dena.
   - *Sahi:* Zero order: t₁/₂ = [R]₀ / (2k) (depends on [R]₀). First order: t₁/₂ = 0.693 / k (independent of [R]₀).

---

## Quick Recap

| Property | Zero Order | First Order |
|---|---|---|
| Integrated equation | [R] = [R]₀ − kt | k = (2.303 / t) log([R]₀ / [R]) |
| Straight-line plot | [R] vs t (slope = −k) | log[R] vs t (slope = −k/2.303) |
| Half-life (t₁/₂) | [R]₀ / (2k) (∝ [R]₀) | 0.693 / k (independent of [R]₀) |
| Units of k | mol L⁻¹ s⁻¹ | s⁻¹ |
| 100% completion | Finite time ([R]₀/k) | Infinite time |

- **Pseudo first-order:** Excess reactant stays nearly constant (e.g., ester hydrolysis, sucrose inversion).

---

## Practice Questions

1. Derive the expression for half-life of a zero-order reaction from its integrated rate equation.
2. A first-order reaction has rate constant k = 1.155 × 10⁻³ s⁻¹. Calculate its half-life.
3. For a zero-order reaction, initial concentration is 0.80 mol L⁻¹ and k = 4.0 × 10⁻³ mol L⁻¹ s⁻¹. Find t₁/₂ and concentration remaining after 150 s.
4. A radioactive isotope has a half-life of 20 days. What fraction of the original sample remains after 60 days?
5. Show that for a first-order reaction, t₉₉% = 2 × t₉₀%.
6. A first-order reaction takes 40 min for 30% decomposition. Calculate t₁/₂. (log 10 = 1, log 7 = 0.8451)
7. What is a pseudo first-order reaction? Give one balanced chemical example.
8. For the gas-phase first-order reaction A(g) → B(g) + C(g), initial pressure is 0.50 atm and total pressure after 200 s is 0.75 atm. Find the rate constant k.
9. A zero-order reaction has t₁/₂ = 60 s when [R]₀ = 0.40 M. What will be its half-life when [R]₀ = 0.10 M?
10. The rate constant of a first-order reaction is 6.93 × 10⁻² min⁻¹. How much time will it take to reduce 20 g of the reactant to 2.5 g?

---

### Answers

1. Zero-order equation: [R] = [R]₀ − kt. At t = t₁/₂, [R] = [R]₀/2. Substituting: [R]₀/2 = [R]₀ − k t₁/₂ → k t₁/₂ = [R]₀/2 → **t₁/₂ = [R]₀ / (2k)**.
2. t₁/₂ = 0.693 / k = 0.693 / (1.155 × 10⁻³) = **600 s (10 min)**.
   Jaanch: 1.155 × 600 = 693 → 1.155 × 10⁻³ × 600 = 0.693 ✅
3. t₁/₂ = [R]₀ / (2k) = 0.80 / (2 × 4.0 × 10⁻³) = 0.80 / 0.008 = **100 s**.
   After 150 s: [R] = 0.80 − (4.0 × 10⁻³ × 150) = 0.80 − 0.60 = **0.20 mol L⁻¹**.
   Jaanch: 150 s is 1.5 half-lives; zero-order uses 0.40 M in 100 s and 0.20 M in next 50 s → 0.20 M left ✅
4. Number of half-lives = 60 / 20 = 3.
   Remaining fraction = (1/2)³ = **1/8 (12.5%)**.
   Jaanch: 1 → 1/2 (20 d) → 1/4 (40 d) → 1/8 (60 d) ✅
5. For 99% completion, [R] = 1% of [R]₀ → t₉₉% = (2.303/k) log(100/1) = (2.303/k) × 2.
   For 90% completion, [R] = 10% of [R]₀ → t₉₀% = (2.303/k) log(100/10) = (2.303/k) × 1.
   Therefore, **t₉₉% = 2 × t₉₀%**.
6. 30% decomposed → 70% remains.
   k = (2.303 / 40) log(100 / 70) = (2.303 / 40) × (1 − 0.8451) = (2.303 × 0.1549) / 40 = 0.3567 / 40 = 8.918 × 10⁻³ min⁻¹.
   t₁/₂ = 0.693 / (8.918 × 10⁻³) = **77.7 min**.
   Jaanch: 30% takes 40 min, so 50% taking ~77.7 min is logical ✅
7. A reaction of higher true order (typically 2) that behaves as first order because one reactant is present in large excess so its concentration remains practically constant. Example: CH₃COOC₂H₅ + H₂O (excess) → CH₃COOH + C₂H₅OH (H⁺ catalyst).
8. P_A at 200 s = 2Pᵢ − P_t = 2(0.50) − 0.75 = 0.25 atm.
   Notice P_A dropped to exact half (0.50 → 0.25 atm) in 200 s, so t₁/₂ = 200 s.
   k = 0.693 / 200 = **3.465 × 10⁻³ s⁻¹**.
   Jaanch: (2.303/200) log(0.50/0.25) = (2.303 × 0.3010)/200 = 3.466 × 10⁻³ s⁻¹ ✅
9. For zero order, t₁/₂ ∝ [R]₀.
   [R]₀ becomes 1/4 (0.40 → 0.10 M), so t₁/₂ becomes 60 / 4 = **15 s**.
   Jaanch: k = 0.40 / (2 × 60) = 1/300 M s⁻¹; new t₁/₂ = 0.10 / (2/300) = 15 s ✅
10. t₁/₂ = 0.693 / (6.93 × 10⁻²) = 10 min.
    20 g → 10 g (1st) → 5 g (2nd) → 2.5 g (3rd) = 3 half-lives.
    Time = 3 × 10 = **30 min**.
    Jaanch: (2.303 / 0.0693) log(20 / 2.5) = 33.23 × log 8 = 33.23 × 0.9031 = 30.0 min ✅

---

Ab tum zero-order aur first-order reactions ke liye concentration, half-life aur completion time dono aasani se calculate kar sakte ho.

**Agle topic mein:** Hum [Temperature Dependence, Arrhenius Equation and Collision Theory](chemical-kinetics-part4.md) padhenge — aur dekhenge ki sirf 10°C badhane par reaction ki speed dugni kyun ho jati hai!
