# Chapter: Thermodynamics (Part 6)

> **Class:** 11 | **Subject:** Chemistry
> **Ye file [thermodynamics-part5.md](thermodynamics-part5.md) se aage chalti hai** (wahan humne Gibbs Free Energy ΔG = ΔH − TΔS, 4-case table aur Δ_rG° = −2.303 RT log K seekha tha). Chapter ki shuruaat: [thermodynamics.md](thermodynamics.md).
> **Topics covered in this file:**
> 6. Sab Kuch Mila Kar: Mixed Thermodynamics Problems aur Poora Chapter Wrap-Up

---

# Topic 6: Sab Kuch Mila Kar: Mixed Thermodynamics Problems aur Poora Chapter Wrap-Up

Real chemical engineering mein ek hi industrial reaction — jaise choone ke bhatte (lime kiln) mein CaCO₃ todna ya ammonia/NO₂ banana — tumse ek saath **ΔU se ΔH badalna**, **Hess/Bond enthalpy lagana**, **ΔS ka sign aur maan nikaalna**, **crossover temperature (T_eq)** dhoondhna aur **Equilibrium Constant (K)** calculate karna sab maangta hai! Is aakhiri topic mein hum poore chapter ke paanchon hisson ko ek saath jodkar bade sawal hal karenge, aur ant mein poore chapter ka **Quick Wrap-Up Table** banayenge.

---

## Avinash aur "Thermo-Audit Desk" Challenge

Science exhibition mein **Avinash** ko **"Thermo-Audit Desk"** ka lead banaya gaya! Uske saamne **3 industrial process cards** rakhe the — (1) **Limestone Kiln**, (2) **NO → NO₂ Oxidation**, aur (3) **Clean Fuel Reaction**! Har card ko pass karne ke liye 4 checks poore karne the:
- **Check 1:** Δn_g aur ΔH = ΔU + Δn_g RT
- **Check 2:** Entropy (ΔS) ka sign aur unit (J → kJ!)
- **Check 3:** Gibbs Energy (ΔG = ΔH − TΔS) aur Crossover Temperature
- **Check 4:** Equilibrium Constant (K) from Δ_rG°!

Avinash ne ek Golden Checklist board par chipkayi: **"Units ek karo (kJ aur K!), gas moles gino, aur signs par nazar rakho!"** Chalo, Avinash ke saath teeno multi-concept audit problems solve karte hain.

---

## Mixed Worked Examples

### Mixed Example 1. Limestone Kiln (CaCO₃ → CaO + CO₂) — ΔS Sign + Crossover T + Spontaneity!

**Sawaal:** Reaction **CaCO₃(s) → CaO(s) + CO₂(g)** ke liye **ΔH° = +178.0 kJ mol⁻¹** aur **ΔS° = +160.0 J K⁻¹ mol⁻¹** hai.
(a) ΔS° positive kyun hai?
(b) Minimum temperature (**T_eq**) nikalo jiske upar ye reaction spontaneous hoga.
(c) **300 K** aur **1200 K** par ΔG° nikaalkar verify karo.

**Hal:**
1. **Entropy Sign (Topic 4):** Left mein 0 mol gas hai aur right mein **1 mol CO₂(g)** ban rahi hai (Δn_g = +1) → randomness badhi → **ΔS° > 0 (+)**.
2. **Unit Conversion & Crossover Temperature (Topic 5):**
   - ΔS° = +160.0 ÷ 1000 = **+0.160 kJ K⁻¹ mol⁻¹**.
   - **T_eq = ΔH° / ΔS° = 178.0 / 0.160 = 1112.5 K (≈ 839.5 °C)**!
   - Kyunki ΔH (+) aur ΔS (+) hain (Case 4), ye reaction **T > 1112.5 K** par spontaneous hoga!
3. **Verification:**
   - **At 300 K:** ΔG° = 178.0 − (300 × 0.160) = 178.0 − 48.0 = **+130.0 kJ mol⁻¹** (> 0 → **Non-spontaneous**!).
   - **At 1200 K:** ΔG° = 178.0 − (1200 × 0.160) = 178.0 − 192.0 = **−14.0 kJ mol⁻¹** (< 0 → **Spontaneous**!).

**Jaanch:** 1112.5 × 0.160 = 178.0 kJ (ΔG° = 0); 300 K par +130 kJ (non-spont); 1200 K par −14 kJ (spont) ✅.

---

### Mixed Example 2. NO Oxidation (2NO + O₂ → 2NO₂) — ΔU se ΔH + ΔS Sign + Temperature Control!

*(Chetavani: NO aur NO₂ zehreeli gases hain — sirf paper calculation ke liye!)*

**Sawaal:** **300 K** par reaction **2NO(g) + O₂(g) → 2NO₂(g)** ke liye **ΔU = −111.5 kJ** hai.
(a) **ΔH** nikalo (R = 8.314 × 10⁻³ kJ K⁻¹ mol⁻¹).
(b) **ΔS** ka sign batao aur batao ki **LOW T** ya **HIGH T** is reaction ki spontaneity ko favour karega.

**Hal:**
1. **Δn_g aur ΔH (Topic 2):**
   - Δn_g = 2 − (2 + 1) = **−1 mol**.
   - Δn_g RT = (−1) × (8.314 × 10⁻³) × 300 = **−2.4942 kJ ≈ −2.49 kJ**.
   - **ΔH = ΔU + Δn_g RT = −111.5 + (−2.49) = −113.99 kJ ≈ −114.0 kJ** (Exothermic!).
2. **ΔS Sign & Temperature Rule (Topics 4 & 5):**
   - 3 mol gas ghatkar 2 mol gas ban rahi hai (Δn_g = −1) → **ΔS < 0 (Negative!)**.
   - Dono **ΔH (−)** aur **ΔS (−)** hain (Case 3) → **LOW Temperature** spontaneity ko favour karega (kyunki high T par −TΔS bada positive hokar ΔG ko positive kar dega)!

**Jaanch:** ΔH (−114.0 kJ) < ΔU (−111.5 kJ) kyunki Δn_g = −1; Case 3 (ΔH < 0, ΔS < 0) → low T favours spontaneity ✅.

---

### Mixed Example 3. Clean Fuel Reaction — Δ_rG° se Equilibrium Constant (K) Nikaalna!

**Sawaal:** **298 K** par ek reaction ka **Δ_rG° = −17.12 kJ mol⁻¹** hai. Iska **Equilibrium Constant (K)** nikalo aur batao ki equilibrium par reactants zyada honge ya products. *(2.303 RT at 298 K = 5.706 kJ mol⁻¹.)*

**Hal:**
- **Δ_rG° = −2.303 RT log K**
- −17.12 = −5.706 × log K
- **log K = 17.12 / 5.706 ≈ 3.00**
- **K = 10³ = 1000**!
- Kyunki **K = 1000 >> 1**, equilibrium par **products bahut zyada** honge!

**Jaanch:** −5.706 × log(1000) = −5.706 × 3 = −17.118 kJ mol⁻¹ ≈ −17.12 kJ mol⁻¹ ✅.

---

### Mixed Example 4. Enthalpy of Solution (Δ_solH°) + Isothermal Gas Entropy (ΔS)

**Sawaal:**
(a) LiCl ke liye Δ_latticeH° = **+853 kJ/mol** aur Δ_hydH° = **−890 kJ/mol** hai. Δ_solH° nikaalo — kya LiCl ghulne par paani garam hoga ya thanda?
(b) **3.0 mol** ideal gas isothermal expansion mein **2 L se 20 L** tak phailti hai (log 10 = 1). **ΔS** (J K⁻¹ mein) nikaalo.

**Hal:**
- (a) Δ_solH° = +853 + (−890) = **−37 kJ mol⁻¹** (exothermic → heat niklegi → paani **garam** hoga!).
- (b) ΔS = 2.303 × 3.0 × 8.314 × log(20/2) = 2.303 × 3.0 × 8.314 × 1 = **+57.44 J K⁻¹**!

**Jaanch:** 853 − 890 = −37 kJ/mol ✅; 3 × 19.147 = 57.44 J/K ✅.

---

## Aam galtiyan (mixed problems mein bachke rehna)

1. **Galti 1: Ek hi multi-step sawaal mein do baar unit trap (J vs kJ aur °C vs K) mein phans jaana.**
   *Sahi baat:* Har multi-step problem shuru karte hi sabse upar teeno units ek saath set kar lo: **ΔU, ΔH, ΔG → kJ**; **ΔS → kJ K⁻¹** (÷ 1000); **T → Kelvin** (+ 273); **R → 8.314 × 10⁻³ kJ K⁻¹ mol⁻¹**!

2. **Galti 2: Exothermic reaction (ΔH < 0) dekhkar bina ΔS check kiye "hamesha spontaneous" bol dena.**
   Agar **ΔS < 0** ho (jaise 2NO + O₂ → 2NO₂), to high temperature par **−TΔS** bada positive ho jaata hai aur reaction **non-spontaneous** ban jaata hai!

---

## Practice Questions (Sab Kuch Mila Kar — 12 Fresh Questions)

1. **1.0 mol** of an ideal gas at **300 K** expands **isothermally and reversibly** from **2.0 L to 8.0 L** (log 4 = 0.6020). Calculate **w_rev, ΔU and q** in Joules. *(R = 8.314 J K⁻¹ mol⁻¹.)*
2. For the dissociation **PCl₅(g) → PCl₃(g) + Cl₂(g)** at **500 K**, **ΔH = +92.5 kJ mol⁻¹**. Calculate **ΔU** in kJ mol⁻¹ and predict the **sign of ΔS**. *(Corrosive/toxic gases: paper problem only. R = 8.314 × 10⁻³ kJ K⁻¹ mol⁻¹.)*
3. Using Hess's Law, calculate the standard enthalpy of formation (**Δ_fH°**) of liquid ethanol **C₂H₅OH(l)** from the following combustion enthalpies:
   - C(graphite) + O₂(g) → CO₂(g); ΔH₁ = **−393.5 kJ**
   - H₂(g) + ½O₂(g) → H₂O(l); ΔH₂ = **−285.8 kJ**
   - C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(l); ΔH₃ = **−1367.0 kJ**
   *(Flammable liquid: paper problem only.)*
4. Estimate **Δ_rH°** for **H₂(g) + F₂(g) → 2HF(g)** using bond enthalpies (kJ/mol):
   BE(H−H) = **436**, BE(F−F) = **158**, BE(H−F) = **565**. *(Toxic/corrosive gases: paper problem only.)*
5. Liquid ethanol boils at **78 °C (351 K)** with **Δ_vapH = 38.6 kJ mol⁻¹**. Calculate **Δ_vapS** in **J K⁻¹ mol⁻¹**.
6. A reaction has **ΔH° = +30.5 kJ mol⁻¹** and **ΔS° = +61.0 J K⁻¹ mol⁻¹**.
   (a) Find the temperature **T_eq** at which the reaction reaches equilibrium.
   (b) State whether the reaction is spontaneous at **400 K** and at **600 K**.
7. Calculate **Δ_rG°** at **298 K** for a reaction whose equilibrium constant is **K = 10⁻²**. Will the forward reaction proceed strongly towards products under standard conditions? *(2.303 RT = 5.706 kJ mol⁻¹.)*
8. Why is **Δ_fH° = 0** for **Br₂(l)** and **O₂(g)**, but NOT for **Br₂(g)** or **O₃(g)**?
9. Compare an **isothermal** process and an **adiabatic** process for an ideal gas on: (a) what stays zero (ΔT or q), (b) value of ΔU, and (c) First Law equation.
10. For a reaction **A(g) + B(g) → C(g)**, it is found that **ΔH = −45 kJ** and **ΔS = −100 J K⁻¹**.
    (a) Predict whether the reaction is spontaneous at **300 K** and at **500 K**.
    (b) Find the maximum temperature below which the reaction remains spontaneous.
11. **100 g** of copper (specific heat **c = 0.385 J g⁻¹ K⁻¹**) is heated from **25 °C to 125 °C**. Calculate the heat absorbed in **Joules** and **kJ**, and state whether heat capacity **C** is extensive or intensive.
12. State whether each statement is True or False, and correct the false ones:
    (a) In an exothermic reaction with ΔS < 0, spontaneity is favoured at high temperatures.
    (b) Hess's Law works because Enthalpy (H) is a state function.
    (c) For an ideal gas, C_p − C_v = R.
    (d) If K = 10⁵ at 298 K, then Δ_rG° is positive.

### Answers

1. w_rev = −2.303 × 1 × 8.314 × 300 × log(8/2) = −5744.14 × 0.6020 = **−3458.0 J ≈ −3.46 kJ**.
   Isothermal ideal gas → **ΔU = 0**, isliye **q = −w_rev = +3458.0 J ≈ +3.46 kJ**.
   Jaanch: ΔU = +3458 + (−3458) = 0 ✅.

2. Δn_g = (1 + 1) − 1 = **+1 mol**.
   Δn_g RT = (+1)(8.314 × 10⁻³)(500) = **+4.157 kJ ≈ +4.16 kJ**.
   ΔU = ΔH − Δn_g RT = 92.5 − 4.16 = **+88.34 kJ mol⁻¹**.
   Kyunki Δn_g = +1 (gas ke moles badhe), **ΔS > 0 (Positive)**!
   Jaanch: 88.34 + 4.16 = 92.5 kJ/mol ✅.

3. Target: **2C(s) + 3H₂(g) + ½O₂(g) → C₂H₅OH(l)** = 2×Eq(1) + 3×Eq(2) − Eq(3).
   Δ_fH° = 2(−393.5) + 3(−285.8) − (−1367.0) = −787.0 − 857.4 + 1367.0 = −1644.4 + 1367.0 = **−277.4 kJ mol⁻¹**.
   Jaanch: −787.0 − 857.4 = −1644.4; −1644.4 + 1367.0 = −277.4 kJ/mol ✅.

4. Bonds broken: 1(H−H) + 1(F−F) = 436 + 158 = **594 kJ**.
   Bonds formed: 2(H−F) = 2 × 565 = **1130 kJ**.
   Δ_rH° = 594 − 1130 = **−536 kJ** (behad exothermic!).
   Jaanch: 594 − 1130 = −536 kJ ✅.

5. Δ_vapH = 38.6 × 1000 = 38600 J mol⁻¹; T_b = 351 K.
   Δ_vapS = 38600 / 351 = **+109.97 J K⁻¹ mol⁻¹ ≈ +110.0 J K⁻¹ mol⁻¹**.
   Jaanch: 109.97 × 351 = 38599.5 J ≈ 38.6 kJ/mol ✅.

6. (a) ΔS° = +61.0 ÷ 1000 = +0.061 kJ K⁻¹ mol⁻¹.
   **T_eq = 30.5 / 0.061 = 500 K**.
   (b) ΔH (+) aur ΔS (+) → **T > 500 K** par spontaneous: isliye **400 K par non-spontaneous** (ΔG = +6.1 kJ) aur **600 K par spontaneous** (ΔG = −6.1 kJ)!
   Jaanch: 500 × 0.061 = 30.5 kJ ✅.

7. Δ_rG° = −5.706 × log(10⁻²) = −5.706 × (−2) = **+11.41 kJ mol⁻¹**.
   Kyunki Δ_rG° > 0 (aur K < 1), forward reaction standard haalat mein products ki taraf strongly **NAHI** jaayega!
   Jaanch: K < 1 → Δ_rG° positive (+11.41 kJ/mol) ✅.

8. 298 K aur 1 bar par Bromine ki sabse stable reference state **liquid Br₂(l)** hai aur Oxygen ki **O₂(g)** hai — isliye unki Δ_fH° = 0 hai; **Br₂(g)** aur **O₃(g)** unki reference states nahi hain (unhe banane mein extra energy lagti hai).

9. - **Isothermal:** (a) **ΔT = 0**, (b) ideal gas ke liye **ΔU = 0**, (c) **q = −w**.
   - **Adiabatic:** (a) **q = 0**, (b) **ΔU ≠ 0** (temperature badalta hai!), (c) **ΔU = w**.

10. ΔS = −100 ÷ 1000 = −0.100 kJ K⁻¹.
    (a) **300 K par:** ΔG = −45 − 300(−0.100) = −45 + 30 = **−15 kJ (Spontaneous!)**.
        **500 K par:** ΔG = −45 − 500(−0.100) = −45 + 50 = **+5 kJ (Non-spontaneous!)**.
    (b) **T_max = (−45) / (−0.100) = 450 K** (450 K se neeche spontaneous!).
    Jaanch: 450 K par ΔG = −45 + 45 = 0 ✅.

11. ΔT = 125 − 25 = 100 K.
    q = m c ΔT = 100 × 0.385 × 100 = **3850 J = 3.85 kJ**.
    Heat capacity **C (= m c)** mass par nirbhar karti hai, isliye **extensive** property hai!
    Jaanch: 100 × 0.385 = 38.5; 38.5 × 100 = 3850 J ✅.

12. (a) **False** ❌. ΔH < 0 aur ΔS < 0 hone par spontaneity **LOW temperatures** par favour hoti hai.
    (b) **True** ✅.
    (c) **True** ✅.
    (d) **False** ❌. K = 10⁵ > 1 hone par Δ_rG° = −2.303 RT log K **NEGATIVE** hota hai.

---

## Chapter Ka Saar: Thermodynamics

| Topic | Mukhya Concept | Golden Formula / Niyam | Star Example / Yaad Rakhne ki Baat |
|---|---|---|---|
| **1. First Law & Work** | Open/Closed/Isolated systems, State vs Path functions, Internal energy U | **ΔU = q + w**; **w = −P_ext ΔV**; **w_rev = −2.303 nRT log(V₂/V₁)** | IUPAC: andar aaye +, bahar jaaye −; ideal gas isothermal → ΔU = 0 |
| **2. Enthalpy & Heat Capacity** | Constant-P heat (q_p = ΔH) vs constant-V (q_v = ΔU), Heat capacity, Standard enthalpies | **ΔH = ΔU + Δn_g RT**; **q = m c ΔT**; **C_p − C_v = R** | Δn_g mein sirf **gases**; R = 8.314 × 10⁻³ kJ K⁻¹ mol⁻¹; reference states Δ_fH° = 0 |
| **3. Hess's Law & Bond Enthalpy** | Multi-step ΔH summation, Bond breaking (+) vs Bond forming (−) | **ΔH = ΔH₁ + ΔH₂ + ...**; **Δ_rH° = ΣBE(Reactants) − ΣBE(Products)** | Reverse equation → flip sign; BE formula is **Reactants − Products**! |
| **4. Entropy & 2nd/3rd Law** | Randomness (S), Spontaneity, Universe entropy increases, 0 K perfect crystal | **ΔS = q_rev / T**; **ΔS_total = ΔS_sys + ΔS_surr > 0** | S(gas) >> S(liq) > S(solid); T hamesha **Kelvin** mein! |
| **5. Gibbs Energy & K** | System-only spontaneity check, 4-case T table, Equilibrium link | **ΔG = ΔH − TΔS**; **T_eq = ΔH/ΔS**; **Δ_rG° = −2.303 RT log K** | ΔS ko **÷ 1000** karke kJ mein badlo! ΔG < 0 spont; K > 1 → Δ_rG° < 0 |

---

Ab tum kisi bhi chemical reaction ki poori energy aur spontaneity report — First Law work aur ΔH/ΔU se lekar Hess's Law, Bond Enthalpy, Entropy, Crossover Temperature aur Equilibrium Constant K tak — poore bharose ke saath nikaal sakte ho!

**Agle chapter mein kya?** Humne dekha ki jab **ΔG = 0** hota hai, to reaction **Equilibrium** par pahunch jaata hai aur uska maap **Equilibrium Constant (K)** hota hai! Par equilibrium par forward aur reverse reactions ki raftaar kaisi hoti hai, **K_c aur K_p** mein kya rishta hai, **Le Chatelier's Principle** se hum reaction ko apni marzi ki disha mein kaise mod sakte hain, aur **acids, bases, pH aur buffers** ka poora khel kya hai? Ye sab hum agle chapter — **Equilibrium** — mein padhenge!
