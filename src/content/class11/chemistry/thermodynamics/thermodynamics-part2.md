# Chapter: Thermodynamics (Part 2)

> **Class:** 11 | **Subject:** Chemistry
> **Ye file [thermodynamics.md](thermodynamics.md) se aage chalti hai** (wahan humne system, state functions, internal energy aur First Law ΔU = q + w seekha tha). Chapter ki shuruaat: [thermodynamics.md](thermodynamics.md). Recall ke liye: exothermic aur endothermic reactions ka basic idea tum Class 9 ([chemical-changes-and-reactions-part4.md](../../../class9/chemistry/chemical-changes-and-reactions/chemical-changes-and-reactions-part4.md)) mein padh chuke ho.
> **Topics covered in this file:**
> 2. Enthalpy (H), ΔH = ΔU + Δn_g RT, Heat Capacity aur Standard Enthalpy Changes

---

# Topic 2: Enthalpy (H), ΔH = ΔU + Δn_g RT, Heat Capacity aur Standard Enthalpy Changes

Class 9 mein humne dekha tha ki kuch reactions heat bahar nikalte hain (**exothermic**) aur kuch heat andar lete hain (**endothermic**). Par Class 11 mein ek zaroori sawaal aata hai: jab koi reaction **band rigid bartan (constant volume)** mein hota hai, to heat **q_v = ΔU** hoti hai; par jab wahi reaction **khule beaker (constant atmospheric pressure)** mein hota hai, to kuch heat gas ko phailane (PΔV work) mein bhi kharch hoti hai! Is constant-pressure heat ko naapne ke liye hi **Enthalpy (H)** banayi gayi!

---

## Utkarsh, khula patila, pressure cooker aur bhaari lohe ka tawa

Utkarsh kitchen mein Mummy ke saath khana bante dekh raha tha. Usne do baatein notice kin:
1. **Khula patila (constant atmospheric pressure)** mein ubalte paani ki bhaap aaram se upar phailkar hawa ko dhakel rahi thi, jabki **band pressure cooker (constant volume)** mein gas ko phailne ki jagah nahi milti!
2. Gas par ek chhoti **patli steel ki katori** kuch hi seconds mein bahut garam ho gayi, par utni hi aanch par **bhaari mota lohe ka tawa** garam hone mein kaafi waqt le raha tha!

Teacher ma'am ne muskurate hue kaha, "Utkarsh, pehli baat hai **q_p = ΔH (constant pressure)** aur **q_v = ΔU (constant volume)** ka antar! Aur doosri baat hai **Heat Capacity (C)** — bada ya bhaari tawa apna temperature 1 °C badhane ke liye zyada heat maangta hai!" Chalo, Enthalpy, Heat Capacity aur alag-alag prakar ki Standard Enthalpies seekhte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Enthalpy (H)** | State function: **H = U + PV**; constant pressure par heat exchange **q_p = ΔH** ke barabar hota hai | Exothermic: ΔH < 0; Endothermic: ΔH > 0 |
| **Heat Capacity (C)** | Kisi object ka temperature 1 K (ya 1 °C) badhane ke liye zaroori heat: **q = C ΔT** (Extensive!) | Bhaari tawa ki C chhoti katori se zyada |
| **Specific Heat (c)** | **1 gram** substance ka temperature 1 K badhane ke liye zaroori heat: **q = m c ΔT** (Intensive!) | Paani ka c = 4.18 J g⁻¹ K⁻¹ |
| **Standard Enthalpy of Formation (Δ_fH°)** | Standard haalat (298 K, 1 bar) mein **1 mole compound** ko uske **reference-state elements** se banane par hone wala enthalpy change | C(graphite) + O₂(g) → CO₂(g), Δ_fH° = −393.5 kJ/mol |
| **Standard Enthalpy of Combustion (Δ_cH°)** | **1 mole substance** ko excess O₂ mein poori tarah jalane par nikalne wali heat (hamesha **negative / exothermic!**) | CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l), Δ_cH° = −890 kJ/mol |

---

## Part A: Enthalpy (H), ΔH = ΔU + Δn_g RT aur Heat Capacity

### 1. ΔH aur ΔU ka Golden Rishta
- Constant volume par (ΔV = 0): **q_v = ΔU**.
- Constant pressure par: **q_p = ΔH = ΔU + PΔV**.
- Ideal gases ke liye PV = nRT, isliye kisi chemical reaction ke liye:
  > **ΔH = ΔU + Δn_g RT**
  - Jahan **Δn_g = (Gaseous products ke moles) − (Gaseous reactants ke moles)**! *(Solids aur liquids ko mat ginna!)*
  - **R = 8.314 × 10⁻³ kJ K⁻¹ mol⁻¹** (dhyan rahe: ΔH aur ΔU aam taur par **kJ** mein hote hain!).
  - Agar Δn_g = 0 ho (jaise H₂(g) + I₂(g) → 2HI(g)), to **ΔH = ΔU**!

### 2. Heat Capacity aur C_p − C_v = R
- **q = C ΔT = m c ΔT = n C_m ΔT**
- **1 mole ideal gas** ke liye constant pressure molar heat capacity (**C_p**) hamesha constant volume (**C_v**) se **R** zyada hoti hai:
  > **C_p − C_v = R** *(kyunki constant P par gas ko garam karne ke saath-saath expansion work ke liye bhi extra heat deni padti hai!)*

### Example 1. CO(g) ke Combustion mein ΔH se ΔU Nikaalna

*(Chetavani: CO zehreeli gas hai — ye reaction sirf padhne aur paper calculation ke liye hai!)*

**Sawaal:** 300 K par reaction **CO(g) + ½O₂(g) → CO₂(g)** ke liye **ΔH = −283.0 kJ mol⁻¹** hai. **ΔU** nikalo. *(R = 8.314 × 10⁻³ kJ K⁻¹ mol⁻¹.)*

**Hal:**
1. **Δn_g** gino (sirf gases!): Products = 1 mol CO₂; Reactants = 1 mol CO + 0.5 mol O₂ = 1.5 mol.
   - **Δn_g = 1 − 1.5 = −0.5 mol**.
2. **Δn_g RT** nikalo (kJ mein!):
   - Δn_g RT = (−0.5) × (8.314 × 10⁻³) × 300 = **−1.2471 kJ mol⁻¹ ≈ −1.25 kJ mol⁻¹**.
3. **ΔH = ΔU + Δn_g RT** → **ΔU = ΔH − Δn_g RT**:
   - ΔU = −283.0 − (−1.25) = **−281.75 kJ mol⁻¹**.

**Jaanch:** ΔU + Δn_g RT = −281.75 + (−1.25) = −283.0 kJ mol⁻¹ = ΔH ✅.

### Example 2. Paani ko Garam Karne mein Lagi Heat (q = m c ΔT)

**Sawaal:** **200 g paani** ko **25 °C se 75 °C** tak garam karne ke liye kitni heat (kJ mein) lagegi? *(Paani ka specific heat c = 4.18 J g⁻¹ K⁻¹.)*

**Hal:**
- m = 200 g, c = 4.18 J g⁻¹ K⁻¹, ΔT = 75 − 25 = **50 °C = 50 K** *(temperature difference °C aur K mein barabar hota hai!)*.
- q = m × c × ΔT = 200 × 4.18 × 50 = **41800 J = 41.8 kJ**.

**Jaanch:** 200 × 50 = 10000; 10000 × 4.18 J = 41800 J = 41.8 kJ ✅.

---

## Part B: Standard Enthalpy Changes ke Mukhya Prakar

**Standard State (1 bar pressure, 298 K):**
> **Golden Rule:** Har element ki apni sabse stable **reference state** mein **Δ_fH° = 0** maani jaati hai!
> Examples with Δ_fH° = 0: **O₂(g), H₂(g), N₂(g), C(graphite), S(rhombic), Br₂(l), Na(s)**.
> *(Dhyan do: **C(diamond)**, **O₃(g)** ya **S(monoclinic)** ki Δ_fH° zero **NAHI** hoti!)*

| Enthalpy Type | Symbol | Paribhasha (1 mole ke hisaab se) | Example / Khaas Baat |
|---|---|---|---|
| **Enthalpy of Formation** | **Δ_fH°** | **1 mol compound** uske reference-state elements se banna | H₂(g) + ½O₂(g) → H₂O(l), Δ_fH° = −285.8 kJ/mol |
| **Enthalpy of Combustion** | **Δ_cH°** | **1 mol fuel** excess O₂ mein jalna (hamesha −ve) | Bomb calorimeter (constant V) mein q_v = ΔU naapte hain *(teacher demo/paper only!)* |
| **Enthalpy of Atomisation** | **Δ_aH°** | **1 mol substance** ke saare bonds tootkar **gaseous atoms** banna | H₂(g) → 2H(g), Δ_aH° = +435.0 kJ/mol; Na(s) → Na(g), +108.4 kJ/mol |
| **Enthalpy of Neutralisation** | **Δ_neutH°** | Strong acid + strong base se **1 mol H₂O** banna | Hamesha lagbhag **−57.1 kJ/mol** *(weak acid ho to thoda kam negative kyunki ionisation mein kuch heat kharch hoti hai!)* |
| **Phase Transitions** | **Δ_fusH°, Δ_vapH°, Δ_subH°** | 1 mol solid → liquid (fusion), liquid → gas (vaporisation), solid → gas (sublimation) | **Δ_subH° = Δ_fusH° + Δ_vapH°** (sab endothermic, +ve!) |

### Calorimetry (Bomb vs Coffee-Cup) aur Enthalpy of Solution (Δ_solH°)
1. **Bomb Calorimeter (Constant Volume):** Mazboot band steel vessel mein fuel jalakar **q_v = ΔU** naapa jaata hai *(sirf padhne ke liye)*; **Coffee-Cup Calorimeter (Constant Pressure):** Khule insulated cup mein neutralisation/dissolving ki **q_p = ΔH** naapi jaati hai!
2. **Enthalpy of Solution (Δ_solH°):** Jab 1 mol ionic crystal (jaise NaCl) paani mein ghulta hai, to do steps hote hain: (1) Crystal lattice tootna (**+Δ_latticeH°**, endothermic) aur (2) Ions ka paani se ghirna (**Δ_hydH°**, exothermic):
   > **Δ_solH° = Δ_latticeH° + Δ_hydH°**

### Example 3. NaCl ke Paani mein Ghulne ki Enthalpy of Solution (Δ_solH°)

**Sawaal:** NaCl ke liye **Δ_latticeH° = +788 kJ mol⁻¹** aur hydration enthalpy **Δ_hydH° = −784 kJ mol⁻¹** hai. **Δ_solH°** nikaalo aur batao ki NaCl ka ghulna exothermic hai ya endothermic.

**Hal:**
- Δ_solH° = Δ_latticeH° + Δ_hydH° = (+788) + (−784) = **+4 kJ mol⁻¹** (halka **endothermic** — paani mamuli sa thanda hota hai!).

**Jaanch:** +788 − 784 = +4 kJ/mol ✅.

---

## Aam galtiyan (bachke rehna)

1. **Galti 1: ΔH = ΔU + Δn_g RT mein solids aur liquids ke moles bhi gin lena.**
   *Sahi baat:* Δn_g mein **SIRF GASEOUS (g)** reactants aur products ke moles gine jaate hain — (s) aur (l) ka volume na ke barabar hota hai!

2. **Galti 2: ΔH = ΔU + Δn_g RT mein R = 8.314 (Joules) seedha kJ mein jod dena.**
   Isse 1000 guna galat jawab aata hai! Hamesha **R = 8.314 × 10⁻³ kJ K⁻¹ mol⁻¹** use karo (ya ΔH aur ΔU ko Joules mein badlo).

3. **Galti 3: C(diamond) ya O₃(g) ki standard enthalpy of formation Δ_fH° = 0 maan lena.**
   Sirf sabse stable **reference state** (**C(graphite)** aur **O₂(g)**) ki Δ_fH° = 0 hoti hai!

---

## Quick Recap

- **H = U + PV**; **q_p = ΔH**, **q_v = ΔU**; **ΔH = ΔU + Δn_g RT** (sirf gaseous moles, R in kJ!).
- **q = C ΔT = m c ΔT**; ideal gas ke liye **C_p − C_v = R**.
- **Reference states** (O₂(g), C(graphite), Br₂(l), H₂(g)) ke liye **Δ_fH° = 0**.
- **Δ_subH° = Δ_fusH° + Δ_vapH°**; strong acid + strong base neutralisation ≈ **−57.1 kJ/mol**.

---

## Practice Questions

1. For the Haber-process synthesis **N₂(g) + 3H₂(g) → 2NH₃(g)** at **300 K**, the internal energy change is **ΔU = −87.4 kJ mol⁻¹**. Calculate **ΔH** in kJ mol⁻¹. *(R = 8.314 × 10⁻³ kJ K⁻¹ mol⁻¹.)*
2. Identify which of the following reactions have **ΔH = ΔU** (assuming ideal gas behaviour):
   (a) **H₂(g) + I₂(g) → 2HI(g)**
   (b) **CaCO₃(s) → CaO(s) + CO₂(g)**
   (c) **C(s) + O₂(g) → CO₂(g)**
   (d) **2SO₂(g) + O₂(g) → 2SO₃(g)**
3. Using standard enthalpies of formation (**Δ_fH°**): CO₂(g) = **−393.5 kJ/mol**, H₂O(l) = **−285.8 kJ/mol**, CH₄(g) = **−74.8 kJ/mol**, calculate the standard enthalpy of combustion of methane:
   **CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)** *(Flammable gas: paper calculation only.)*
4. Which of the following species have **Δ_fH° = 0** at 298 K and 1 bar, and which do NOT? Give a one-line reason for the non-zero ones:
   (a) **C(graphite)**, (b) **C(diamond)**, (c) **O₃(g)**, (d) **Br₂(l)**, (e) **Br₂(g)**.
5. Explain conceptually why **C_p is always greater than C_v** for an ideal gas, and calculate **C_p** if **C_v = 20.8 J K⁻¹ mol⁻¹** (given R = 8.314 J K⁻¹ mol⁻¹).
6. How much heat (in Joules and kJ) is needed to raise the temperature of a **50 g aluminium block** from **20 °C to 100 °C**? *(Specific heat of Al = 0.90 J g⁻¹ K⁻¹.)*
7. The enthalpy of fusion of a solid at its melting point is **12.5 kJ mol⁻¹** and its enthalpy of vaporisation is **43.2 kJ mol⁻¹**. Estimate its **enthalpy of sublimation (Δ_subH°)**.
8. Why is the enthalpy of neutralisation of a strong acid (HCl) with a strong base (NaOH) always close to **−57.1 kJ mol⁻¹**, whereas that of weak acetic acid (CH₃COOH) with NaOH is slightly **less negative (−55.2 kJ mol⁻¹)**? *(Strong acids/bases: paper question only.)*
9. Distinguish clearly between **enthalpy of formation (Δ_fH°)** and **enthalpy of combustion (Δ_cH°)** using **C(graphite) + O₂(g) → CO₂(g)** as an example where both happen to be identical!
10. State whether each statement is True or False, and correct the false ones:
    (a) Heat absorbed at constant volume equals ΔH.
    (b) Standard enthalpy of combustion (Δ_cH°) is always negative.
    (c) Specific heat capacity (c) is an intensive property, whereas heat capacity (C) is an extensive property.
    (d) In ΔH = ΔU + Δn_g RT, moles of liquid water H₂O(l) are included in Δn_g.
11. For potassium chloride (KCl), **Δ_latticeH° = +715 kJ mol⁻¹** and **Δ_hydH° = −698 kJ mol⁻¹**. Calculate **Δ_solH°** and state whether dissolving KCl in water makes the beaker slightly warmer or slightly cooler.
12. What is the key difference between the thermodynamic quantity measured by a **bomb calorimeter** and that measured by a **coffee-cup calorimeter**?

### Answers

1. **Δn_g** = 2 − (1 + 3) = **−2 mol**.
   Δn_g RT = (−2) × (8.314 × 10⁻³) × 300 = **−4.9884 kJ ≈ −4.99 kJ**.
   ΔH = ΔU + Δn_g RT = −87.4 + (−4.99) = **−92.39 kJ mol⁻¹**.
   Jaanch: Δn_g < 0 hone se ΔH, ΔU se aur zyada negative (−92.39 < −87.4) aaya ✅.

2. (a) Δn_g = 2 − 2 = **0 → ΔH = ΔU**.
   (b) Δn_g = 1 − 0 = **+1 → ΔH ≠ ΔU**.
   (c) Δn_g = 1 − 1 = **0 → ΔH = ΔU** (C solid hai, count nahi hoga!).
   (d) Δn_g = 2 − 3 = **−1 → ΔH ≠ ΔU**.

3. Δ_rH° = ΣΔ_fH°(products) − ΣΔ_fH°(reactants)
   = [−393.5 + 2(−285.8)] − [−74.8 + 2(0)]
   = [−393.5 − 571.6] − [−74.8] = −965.1 + 74.8 = **−890.3 kJ mol⁻¹**.
   Jaanch: Combustion exothermic hai (−890.3 kJ/mol) ✅.

4. **Zero:** (a) C(graphite) aur (d) Br₂(l) (apni standard reference state mein hain).
   **Non-zero:** (b) C(diamond) (graphite reference state hai), (c) O₃(g) (O₂(g) reference state hai), (e) Br₂(g) (298 K par Br₂ liquid state mein stable hai).

5. Constant volume (C_v) par saari heat sirf temperature (U) badhati hai; constant pressure (C_p) par heat ko temperature badhane ke saath-saath **expansion work (PΔV)** bhi karna padta hai, isliye C_p > C_v.
   C_p = C_v + R = 20.8 + 8.314 = **29.114 J K⁻¹ mol⁻¹**.
   Jaanch: C_p − C_v = 29.114 − 20.8 = 8.314 = R ✅.

6. ΔT = 100 − 20 = 80 K.
   q = m c ΔT = 50 × 0.90 × 80 = **3600 J = 3.6 kJ**.
   Jaanch: 50 × 0.90 = 45; 45 × 80 = 3600 J ✅.

7. Δ_subH° = Δ_fusH° + Δ_vapH° = 12.5 + 43.2 = **+55.7 kJ mol⁻¹**.
   Jaanch: 12.5 + 43.2 = 55.7 ✅.

8. Strong acid + strong base poori tarah ionised hote hain, isliye asli reaction sirf **H⁺(aq) + OH⁻(aq) → H₂O(l)** (ΔH° = −57.1 kJ/mol) hota hai. Weak acid (CH₃COOH) poora ionised nahi hota — use todne (ionise karne) mein lagbhag **+1.9 kJ/mol** heat andar kharch ho jaati hai, isliye net heat sirf **−55.2 kJ/mol** bahar nikalti hai!

9. Δ_fH° mein **1 mol product** reference elements se banta hai; Δ_cH° mein **1 mol reactant** O₂ mein jalta hai. **C(graphite) + O₂(g) → CO₂(g)** mein 1 mol CO₂ bhi ban raha hai aur 1 mol C jal bhi raha hai, isliye Δ_fH°(CO₂) = Δ_cH°(C_graphite) = −393.5 kJ/mol!

10. (a) **False** ❌. Constant volume par heat **q_v = ΔU** hoti hai (constant pressure par ΔH hoti hai).
    (b) **True** ✅. Combustion hamesha heat nikalta hai (exothermic).
    (c) **True** ✅. c (1 g ke liye) mass par nirbhar nahi karta, par C = m c mass par nirbhar karta hai.
    (d) **False** ❌. Δn_g mein **sirf gaseous (g)** substances ke moles gine jaate hain.

11. Δ_solH° = Δ_latticeH° + Δ_hydH° = (+715) + (−698) = **+17 kJ mol⁻¹** (endothermic → heat absorb hogi, isliye beaker halka **thanda** ho jaayega!).
    Jaanch: 715 − 698 = +17 kJ/mol ✅.

12. **Bomb calorimeter** band rigid bartan (constant volume) mein kaam karta hai, isliye wo **q_v = ΔU** naapta hai; **coffee-cup calorimeter** khule atmospheric pressure (constant pressure) par kaam karta hai, isliye wo **q_p = ΔH** naapta hai!

---

Ab tum Enthalpy (ΔH), ΔH = ΔU + Δn_g RT aur Heat Capacity ke saare numericals aasani se solve kar sakte ho!

**Aage kya?** Kai reactions (jaise **C(graphite) + ½O₂ → CO**, ya **C(graphite) → C(diamond)**) ko calorimeter mein seedha naapna lagbhag namumkin hota hai! Phir unka exact ΔH kaise nikala jaata hai? Iska jaadui tarika hai **Hess's Law** aur **Bond Enthalpies** — jo hum agle topic (**Topic 3**) mein seekhenge!
