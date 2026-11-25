# Chapter: Thermodynamics (Part 5)

> **Class:** 11 | **Subject:** Chemistry
> **Ye file [thermodynamics-part4.md](thermodynamics-part4.md) se aage chalti hai** (wahan humne spontaneity, Entropy S, Second Law aur Third Law seekhe the). Chapter ki shuruaat: [thermodynamics.md](thermodynamics.md).
> **Topics covered in this file:**
> 5. Gibbs Free Energy (ΔG = ΔH − TΔS), 4-Case Temperature Table aur Equilibrium Constant (K)

---

# Topic 5: Gibbs Free Energy (ΔG = ΔH − TΔS), 4-Case Temperature Table aur Equilibrium Constant (K)

Topic 4 mein humne dekha ki spontaneity ka asli niyam **ΔS_total = ΔS_sys + ΔS_surr > 0** hai — par har reaction ke liye poore surroundings ka hisaab rakhna mushkil tha! 1876 mein Josiah Willard Gibbs ne ek jaadui **system-only** state function banaya — **Gibbs Free Energy (G)** — jo sirf system ke **ΔH**, **ΔS** aur **Temperature (T)** ko jodkar ek line mein bata deta hai ki reaction **chalega (spontaneous)**, **ruk jaayega (equilibrium)** ya **ulta chalega (non-spontaneous)**!

---

## Saloni aur weekend robotics workshop ka faisla

Saloni ko Sunday ko ek **robotics workshop** mein jaane ka mauka mila. Faisla karte waqt uske dimaag mein **do baatein** takra rahi thin:
1. **Entry fee aur mehnat (Energy cost = ΔH):** Agar fee kam ya muft ho (negative cost), to jaane ka mann karta hai!
2. **Maza aur naya seekhne ki azaadi (T × ΔS):** Agar dost bhi aa rahe hon aur workshop bahut mazedaar ho (bada TΔS), to thodi zyada fee dene par bhi **net score** faayde mein rehta hai!

Saloni ne notebook par likha: **Net Cost = (Fee) − (Maza × Utsaah)**! Agar ye net value **negative** aayi, to main pakka jaungi!

Teacher ma'am ne taali bajayi: "Saloni, tumne bilkul **Gibbs Free Energy Equation: ΔG = ΔH − TΔS** bana li! Prakriti bhi har reaction mein **enthalpy (ΔH)** aur **entropy (TΔS)** ka yahi balance tolkar faisla karti hai!" Chalo, ΔG ke niyam, 4-case table aur Equilibrium Constant (K) se uska rishta seekhte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Gibbs Free Energy (G)** | System ki wo energy jo constant T aur P par **useful (non-expansion) work** mein badli ja sakti hai: **G = H − TS** (State function & Extensive!) | ΔG = ΔH − TΔS |
| **Gibbs-Helmholtz Equation** | Constant T aur P par spontaneity ka master formula: **ΔG = ΔH − TΔS** (Derived from ΔG = −T ΔS_total!) | ΔG < 0 → Spontaneous! |
| **Crossover Temperature (T_eq)** | Wo temperature jahan ΔG = 0 hota hai aur reaction non-spontaneous se spontaneous mein palat jaata hai: **T_eq = ΔH / ΔS** | ΔH = +40 kJ, ΔS = +100 J/K → T_eq = 400 K |
| **Standard Gibbs Energy (Δ_rG°)** | Standard haalat (298 K, 1 bar) mein reaction ka Gibbs energy change; equilibrium constant **K** se juda hota hai | **Δ_rG° = −2.303 RT log K** |

---

## Part A: ΔG ka Golden Niyam aur 4-Case Temperature Table

Second Law (ΔS_total = ΔS_sys − ΔH_sys/T) ko dono taraf −T se guna karne par milta hai:
> **ΔG = −T ΔS_total = ΔH − TΔS** *(constant T aur P par!)*

**Spontaneity ki 3 Pakki Shartein:**
- **ΔG < 0 (Negative):** Reaction **Spontaneous** hai (apne aap aage badhega!).
- **ΔG = 0 (Zero):** System **Equilibrium** par hai (forward aur reverse barabar!).
- **ΔG > 0 (Positive):** Reaction **Non-spontaneous** hai (ulta reaction spontaneous hoga!).

### 4-Case Master Table (ΔH aur ΔS ke Sign ka Khel!)

| Case | ΔH (Enthalpy) | ΔS (Entropy) | ΔG = ΔH − TΔS | Reaction Kab Spontaneous Hoga? | Example |
|---|---|---|---|---|---|
| **1** | **−** (Exothermic) | **+** (Disorder badha) | **Hamesha −ve** | **Har temperature par Spontaneous!** | 2H₂O₂(l) → 2H₂O(l) + O₂(g) |
| **2** | **+** (Endothermic) | **−** (Order badha) | **Hamesha +ve** | **Kabhi Spontaneous NAHI** (har T par non-spont!) | 3O₂(g) → 2O₃(g) |
| **3** | **−** (Exothermic) | **−** (Order badha) | −ve jab **T chhota** ho | **LOW Temperature par Spontaneous** (T < ΔH/ΔS) | Paani ka jamna, N₂ + 3H₂ → 2NH₃ |
| **4** | **+** (Endothermic) | **+** (Disorder badha) | −ve jab **T bada** ho | **HIGH Temperature par Spontaneous** (T > ΔH/ΔS) | Barf pighalna, CaCO₃ → CaO + CO₂ |

### Example 1. Crossover Temperature (T_eq) aur Spontaneity Check

**Sawaal:** Ek chemical reaction ke liye **ΔH = +40.0 kJ mol⁻¹** aur **ΔS = +100 J K⁻¹ mol⁻¹** hai.
(a) Kis temperature (**T_eq**) par reaction equilibrium mein hoga?
(b) **300 K** aur **500 K** par ΔG nikaalkar batao ki reaction kab spontaneous hoga.

**Hal:**
1. **UNIT ALERT!** Pehle ΔS ko **kJ K⁻¹ mol⁻¹** mein badlo (1000 se bhaag do!):
   - ΔS = +100 ÷ 1000 = **+0.100 kJ K⁻¹ mol⁻¹**.
2. **Crossover Temperature (ΔG = 0 par):**
   - T_eq = ΔH / ΔS = 40.0 / 0.100 = **400 K**.
   - Kyunki ΔH (+) aur ΔS (+) dono positive hain (Case 4), reaction **400 K se UPAR (T > 400 K)** spontaneous hoga!
3. **300 K par ΔG:** ΔG = 40.0 − (300 × 0.100) = 40.0 − 30.0 = **+10.0 kJ mol⁻¹** (> 0 → **Non-spontaneous**!).
4. **500 K par ΔG:** ΔG = 40.0 − (500 × 0.100) = 40.0 − 50.0 = **−10.0 kJ mol⁻¹** (< 0 → **Spontaneous**!).

**Jaanch:** 400 K par ΔG = 40 − 40 = 0; 300 K par +10 kJ (non-spont); 500 K par −10 kJ (spont) ✅.

---

## Part B: Standard Gibbs Energy (Δ_rG°) aur Equilibrium Constant (K)

Equilibrium par actual **ΔG = 0** hota hai (jisse ΔG = Δ_rG° + RT ln Q mein Q = K rakhne par milta hai):
> **Δ_rG° = −RT ln K = −2.303 RT log₁₀ K**
> *(298 K par ek super-useful shortcut yaad rakho: **2.303 × R × 298 = 2.303 × 8.314 × 298 = 5705.8 J/mol ≈ 5.706 kJ mol⁻¹**!)*

- **K > 1** (Products zyada banenge) → log K > 0 → **Δ_rG° < 0 (Negative!)**
- **K = 1** → log K = 0 → **Δ_rG° = 0**
- **K < 1** (Reactants zyada bachenge) → log K < 0 → **Δ_rG° > 0 (Positive!)**

### Example 2. Equilibrium Constant (K) se Δ_rG° Nikaalna

**Sawaal:** **298 K** par kisi reaction ka equilibrium constant **K = 10⁴** hai. Uska **Δ_rG°** (kJ mol⁻¹ mein) nikalo. *(R = 8.314 J K⁻¹ mol⁻¹.)*

**Hal:**
- **Δ_rG° = −2.303 RT log K**
- 2.303 × 8.314 × 298 = **5705.8 J mol⁻¹ = 5.706 kJ mol⁻¹**; aur log(10⁴) = **4**.
- Δ_rG° = −5.706 × 4 = **−22.82 kJ mol⁻¹**!

**Jaanch:** K = 10⁴ >> 1 (products strongly favoured) → Δ_rG° strongly negative (−22.82 kJ/mol) ✅.

---

### Standard Gibbs Energy of Formation (Δ_fG°) aur Coupled Reactions

1. **Δ_fG° se Δ_rG° Nikaalna:** Bilkul Δ_fH° ki tarah, har element ki reference state mein **Δ_fG° = 0** hoti hai, aur:
   > **Δ_rG° = ΣΔ_fG°(Products) − ΣΔ_fG°(Reactants)**
2. **Coupled Reactions:** Agar koi zaroori reaction non-spontaneous (**ΔG₁ > 0**) ho, to use ek strongly spontaneous reaction (**ΔG₂ << 0**) ke saath jod (couple) kar chalaya ja sakta hai jab tak **ΔG_net = ΔG₁ + ΔG₂ < 0**! *(Shareer mein **ATP hydrolysis, ΔG° ≈ −30.5 kJ/mol** aur dhatu nikaalne mein **Carbon reduction** isi siddhant par chalte hain!)*

### Example 3. Δ_fG° se Reaction ki Spontaneity Check

**Sawaal:** 298 K par **CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)** ka **Δ_rG°** nikaalo. *(Δ_fG° in kJ/mol: CH₄ = −50.8, CO₂ = −394.4, H₂O(l) = −237.2, O₂ = 0.)*

**Hal:**
- Δ_rG° = [−394.4 + 2(−237.2)] − [−50.8 + 0] = (−394.4 − 474.4) + 50.8 = −868.8 + 50.8 = **−818.0 kJ mol⁻¹** (strongly spontaneous!).

**Jaanch:** −868.8 + 50.8 = −818.0 kJ/mol < 0 ✅.

---

## Aam galtiyan (bachke rehna)

1. **Galti 1: ΔG = ΔH − TΔS mein ΔS ko J K⁻¹ mol⁻¹ mein hi chhod dena (kJ mein na badalna!).**
   *Dekho kitni badi galti hoti hai:* Example 1 mein agar 40 − (300 × 100) kar doge to −29,960 aa jaayega! Hamesha **ΔS ko 1000 se bhaag** dekar kJ K⁻¹ mol⁻¹ mein badlo!

2. **Galti 2: Equilibrium par "Δ_rG° = 0" likh dena.**
   *Sahi baat:* Equilibrium par **actual ΔG = 0** hota hai! **Δ_rG°** to sirf tab 0 hota hai jab **K = 1** ho!

3. **Galti 3: K > 1 hone par Δ_rG° ko positive (+) samajh lena.**
   Formula mein **MINUS sign** hai (**Δ_rG° = −2.303 RT log K**): isliye **K > 1 → Δ_rG° NEGATIVE** aur **K < 1 → Δ_rG° POSITIVE**!

---

## Quick Recap

- **ΔG = ΔH − TΔS** (hamesha ΔH aur TΔS ko **ek hi unit kJ** mein rakho!).
- **ΔG < 0** spontaneous; **ΔG = 0** equilibrium; **ΔG > 0** non-spontaneous.
- **4 Cases:** (−, +) hamesha spont; (+, −) kabhi nahi; (−, −) low T par spont; (+, +) high T par spont.
- **Crossover T:** **T_eq = ΔH / ΔS**.
- **Equilibrium link:** **Δ_rG° = −2.303 RT log K** (at 298 K, **2.303 RT ≈ 5.706 kJ/mol**).

---

## Practice Questions

1. For a reaction at **300 K**, **ΔH = −20.0 kJ mol⁻¹** and **ΔS = −50.0 J K⁻¹ mol⁻¹**. Calculate **ΔG** (in kJ mol⁻¹) and state whether the reaction is spontaneous at 300 K.
2. A reaction has **ΔH = −60.0 kJ mol⁻¹** and **ΔS = −150 J K⁻¹ mol⁻¹**. Above or below what temperature (**T_eq**) will this reaction be **spontaneous**?
3. At **298 K**, a reaction has **Δ_rG° = −11.41 kJ mol⁻¹**. Calculate its equilibrium constant **K**. *(Use 2.303 RT at 298 K = 5.706 kJ mol⁻¹.)*
4. Without doing any calculation, predict the **sign of Δ_rG°** (positive, negative, or zero) when:
   (a) **K = 5.0 × 10⁶**
   (b) **K = 1.0**
   (c) **K = 2.0 × 10⁻⁵**
5. Classify each of the following four reactions by predicting whether it is spontaneous at **all T, no T, low T only, or high T only**:
   (a) ΔH = −120 kJ, ΔS = +45 J/K
   (b) ΔH = +85 kJ, ΔS = −30 J/K
   (c) ΔH = −90 kJ, ΔS = −180 J/K
   (d) ΔH = +110 kJ, ΔS = +220 J/K
6. Calculate **Δ_rG°** for the reaction **2A(g) + B(g) → 2D(g)** at **298 K**, given **Δ_rU° = −10.5 kJ** and **Δ_rS° = −44.1 J K⁻¹**. *(First convert ΔU° to ΔH° using R = 8.314 × 10⁻³ kJ K⁻¹ mol⁻¹!)*
7. Explain why the decomposition of limestone (**CaCO₃(s) → CaO(s) + CO₂(g)**, ΔH° > 0, ΔS° > 0) does NOT occur at room temperature, yet proceeds smoothly inside a hot industrial lime kiln (> 1120 K).
8. What is the difference between **ΔG** and **Δ_rG°**? Which one is **always zero at chemical equilibrium**?
9. At **298 K**, **K = 10⁻³** for a weak-acid dissociation reaction. Calculate **Δ_rG°** in kJ mol⁻¹. *(2.303 RT = 5.706 kJ mol⁻¹.)*
10. State whether each statement is True or False, and correct the false ones:
    (a) If ΔH > 0 and ΔS > 0, the reaction is spontaneous at low temperatures.
    (b) At equilibrium, ΔG = 0.
    (c) If Δ_rG° = 0, then the equilibrium constant K = 1.
    (d) In ΔG = ΔH − TΔS, ΔG is directly equal to +T ΔS_total.
11. Using standard Gibbs energies of formation (in kJ/mol): **Δ_fG°(NH₃, g) = −16.5**, **Δ_fG°(N₂, g) = 0**, **Δ_fG°(H₂, g) = 0**, calculate **Δ_rG°** for **N₂(g) + 3H₂(g) → 2NH₃(g)** at 298 K and predict whether the reaction is spontaneous under standard conditions.
12. Explain the concept of **coupled reactions** with a simple numerical example showing how a reaction with **ΔG₁ = +15 kJ/mol** can be driven forward by coupling it with ATP hydrolysis (**ΔG₂ = −30.5 kJ/mol**).

### Answers

1. ΔS = −50.0 ÷ 1000 = **−0.050 kJ K⁻¹ mol⁻¹**.
   ΔG = ΔH − TΔS = −20.0 − 300(−0.050) = −20.0 + 15.0 = **−5.0 kJ mol⁻¹**.
   Kyunki ΔG < 0, reaction 300 K par **spontaneous** hai!
   Jaanch: −20 + 15 = −5.0 kJ/mol < 0 ✅.

2. ΔS = −150 ÷ 1000 = **−0.150 kJ K⁻¹ mol⁻¹**.
   T_eq = ΔH / ΔS = (−60.0) / (−0.150) = **400 K**.
   Kyunki ΔH (−) aur ΔS (−) dono negative hain (Case 3), reaction **400 K se NEECHE (T < 400 K)** spontaneous hoga!
   Jaanch: 300 K par ΔG = −60 + 45 = −15 kJ (spont); 500 K par ΔG = −60 + 75 = +15 kJ (non-spont) ✅.

3. Δ_rG° = −2.303 RT log K → −11.41 = −5.706 × log K
   → log K = 11.41 / 5.706 ≈ **2.00** → **K = 10² = 100**.
   Jaanch: −5.706 × log(100) = −5.706 × 2 = −11.412 kJ/mol ✅.

4. (a) K > 1 → **Δ_rG° < 0 (Negative)**.
   (b) K = 1 → **Δ_rG° = 0 (Zero)**.
   (c) K < 1 → **Δ_rG° > 0 (Positive)**.

5. (a) (−, +): **All temperatures** par spontaneous.
   (b) (+, −): **No temperature** (kabhi spontaneous nahi).
   (c) (−, −): **Low T only** (T < 90/0.180 = 500 K).
   (d) (+, +): **High T only** (T > 110/0.220 = 500 K).

6. Pehle Δn_g = 2 − (2 + 1) = **−1 mol**.
   Δ_rH° = Δ_rU° + Δn_g RT = −10.5 + (−1)(8.314 × 10⁻³)(298) = −10.5 − 2.478 = **−12.98 kJ**.
   Ab Δ_rS° = −44.1 ÷ 1000 = **−0.0441 kJ K⁻¹**.
   Δ_rG° = Δ_rH° − TΔ_rS° = −12.98 − 298(−0.0441) = −12.98 + 13.14 = **+0.16 kJ** (slightly non-spontaneous!).
   Jaanch: −12.98 + 13.14 = +0.16 kJ ✅.

7. CaCO₃ ke tootne mein ΔH° > 0 (endothermic) aur ΔS° > 0 (CO₂ gas banti hai). Kamre ke taapmaan (300 K) par TΔS chhota hota hai, isliye ΔH > TΔS → ΔG > 0 (non-spont). High temperature (> 1120 K) par **TΔS, ΔH se bada** ho jaata hai → **ΔG < 0 (spontaneous!)**.

8. **ΔG** kisi bhi actual concentration/pressure haalat par Gibbs energy change hai; **Δ_rG°** sirf **standard haalat (1 bar, 1 M)** par hota hai. Equilibrium par hamesha **actual ΔG = 0** hota hai (Δ_rG° sirf K = 1 par 0 hota hai).

9. Δ_rG° = −5.706 × log(10⁻³) = −5.706 × (−3) = **+17.12 kJ mol⁻¹** (positive kyunki K < 1!).
   Jaanch: K < 1 → Δ_rG° positive (+17.12 kJ/mol) ✅.

10. (a) **False** ❌. ΔH > 0 aur ΔS > 0 hone par reaction **high temperatures** par spontaneous hota hai.
    (b) **True** ✅.
    (c) **True** ✅. 0 = −2.303 RT log K → log K = 0 → K = 1.
    (d) **False** ❌. **ΔG = −T ΔS_total** (minus sign hota hai!).

11. Δ_rG° = 2(−16.5) − [0 + 3(0)] = **−33.0 kJ** (< 0 → standard haalat 298 K par **spontaneous** hai!).
    Jaanch: 2 × (−16.5) = −33.0 kJ ✅.

12. Dono reactions ko couple karne par net Gibbs energy jud jaati hai:
    **ΔG_net = ΔG₁ + ΔG₂ = +15.0 + (−30.5) = −15.5 kJ mol⁻¹** (< 0!).
    Isliye net coupled process **spontaneous** ho jaata hai aur non-spontaneous reaction aage badh jaati hai!
    Jaanch: +15.0 − 30.5 = −15.5 kJ/mol < 0 ✅.

---

Ab tum ΔG = ΔH − TΔS aur Δ_rG° = −2.303 RT log K se har reaction ki spontaneity aur equilibrium constant aaram se nikaal sakte ho!

**Aage kya?** Ab waqt hai poore Thermodynamics chapter ke paanchon concepts — **First Law (ΔU = q + w), Enthalpy (ΔH = ΔU + Δn_g RT), Hess's Law/Bond Enthalpy, Entropy (ΔS) aur Gibbs Energy (ΔG ↔ K)** — ko **ek saath mila kar** asli multi-step industrial problems hal karne ka! Chalo, aakhiri topic (**Topic 6: Sab Kuch Mila Kar**) mein chalte hain!
