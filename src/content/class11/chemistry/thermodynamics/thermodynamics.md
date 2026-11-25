# Chapter: Thermodynamics

> **Class:** 11 | **Subject:** Chemistry
> **Pichhle chapter se aage:** [Chemical Bonding and Molecular Structure (Part 6)](../chemical-bonding-and-molecular-structure/chemical-bonding-and-molecular-structure-part6.md) mein humne atoms ke beech bonds banana aur bond/lattice enthalpy ka parichay seekha tha. Ab hum **Thermodynamics** — yaani chemical reactions mein **heat, work, energy aur spontaneity** ke kanoon — seekhenge!
> **Topics covered in this file:**
> 1. System, Surroundings, State Functions, Internal Energy aur First Law of Thermodynamics

---

# Topic 1: System, Surroundings, State Functions, Internal Energy aur First Law of Thermodynamics

Har chemical reaction mein energy ka len-den hota hai — kabhi heat bahar nikalti hai, kabhi andar jaati hai, aur kabhi gas phailkar piston ko dhakelti (kaam karti) hai! **Thermodynamics** (thermo = heat, dynamics = flow/motion) vigyaan ki wo shaakha hai jo heat, work aur energy ke aapas mein badalne ke niyam batati hai. Yaad rakho: thermodynamics sirf **bade (macroscopic) systems** par lagti hai aur ye batati hai ki reaction **hoga ya nahi**, par ye **nahi** batati ki reaction kitni tez (rate) hoga!

---

## Anuradha aur sardi ki subah mein chai ke teen bartan

Sardi ki subah Anuradha ne kitchen mein garam chai ko teen alag-alag bartanon mein daala:
1. **Khula steel ka cup:** Bhaap (matter) bhi upar udd rahi thi aur cup pakadne par haath ko garmi (energy) bhi lag rahi thi — yaani **matter aur energy dono ka len-den**!
2. **Band dhakkan wali kaanch ki bottle:** Bhaap bahar nahi nikal rahi thi, par bahar se chhoone par bottle garam thi — yaani **sirf energy ka len-den**, matter ka nahi!
3. **Achhe vacuum thermos flask:** Na bhaap bahar gayi, na thermos bahar se garam hua — yaani **na matter ka len-den, na energy ka**!

Phir school pahunchkar Anuradha chauthi manzil (4th floor) par gayi. Usne socha: "Chahe main **lift** se seedhe 4th floor par aaun ya **seedhiyon** se ghoomkar, meri **unchaai (height) ka badlaav** to bilkul ek hi rahega — par meri **thakaan (kaam/work)** raaste par nirbhar karegi!"

Teacher ma'am ne muskurate hue kaha, "Anuradha, tumne abhi-abhi Thermodynamics ke pehle do bade concept samajh liye — **Open, Closed, Isolated Systems** aur **State Functions banaam Path Functions**!" Chalo, in sab ko aur **First Law of Thermodynamics** ko detail mein seekhte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **System & Surroundings** | Universe ka wo hissa jiska hum adhyayan kar rahe hain (**System**) aur uske alawa baaki poora brahmand (**Surroundings**); dono ko **Boundary** alag karti hai | Beaker mein chal raha reaction (system), kamre ki hawa (surroundings) |
| **State Function** | Wo property jo sirf **shuruaati (initial)** aur **aakhiri (final)** haalat par nirbhar karti hai, raaste (path) par nahi | Internal energy (U), Enthalpy (H), Entropy (S), Gibbs energy (G), P, V, T |
| **Path Function** | Wo quantity jo is baat par nirbhar karti hai ki badlaav **kis raaste (process)** se hua | Heat (q) aur Work (w) |
| **Extensive vs Intensive** | **Extensive** matter ki matra (size) par nirbhar kare; **Intensive** matra par nirbhar NA kare | Extensive: mass, V, U, H; Intensive: T, P, density, boiling point |
| **Internal Energy (U)** | System ke andar maujood sabhi particles ki kul energy (kinetic + potential + chemical) ka jod | Ideal gas ke liye U sirf temperature (T) par nirbhar karta hai |

---

## Part A: Systems ke Prakar aur Thermodynamic Processes

| System ka Prakar | Matter ka Exchange? | Energy (Heat) ka Exchange? | Rozmarra ka Example |
|---|---|---|---|
| **Open System** | Haan | Haan | Khule cup mein garam chai |
| **Closed System** | Nahi | Haan | Band dhakkan wali steel/kaanch ki bottle mein garam paani |
| **Isolated System** | Nahi | Nahi | Ideal vacuum thermos flask |

**4 Mukhya Thermodynamic Processes:**
1. **Isothermal process:** Temperature constant (**ΔT = 0**). Ideal gas ke liye **ΔU = 0**!
2. **Adiabatic process:** System aur surroundings ke beech koi heat exchange nahi (**q = 0**).
3. **Isobaric process:** Pressure constant (**ΔP = 0**).
4. **Isochoric process:** Volume constant (**ΔV = 0**, isliye expansion work **w = 0**!).

---

## Part B: Internal Energy (U), IUPAC Sign Convention aur First Law

**First Law of Thermodynamics (Urja Sanrakshan ka Niyam — Law of Conservation of Energy):**
> Energy na paida ki ja sakti hai, na nasht — bas ek roop se doosre roop mein badal sakti hai.
> **ΔU = q + w** *(Chemistry IUPAC Sign Convention!)*

```
                  HEAT ABSORBED (q > 0, +ve)
                            :
                            v
               +-------------------------+
   WORK DONE   :                         :   WORK DONE
   ON SYSTEM   :      SYSTEM (ΔU)        :   BY SYSTEM
  (w > 0, +ve) :                         :  (w < 0, -ve)
   --------->  +-------------------------+  --------->
                            :
                            v
                  HEAT RELEASED (q < 0, -ve)
```

> **Figure 1.1** – Chemistry ka IUPAC Sign Convention: System ke andar aane wali har energy (heat absorbed q > 0 ya work done ON system w > 0) POSITIVE hai; system se bahar jaane wali har energy (heat released q < 0 ya work done BY system w < 0) NEGATIVE hai.

### Pressure-Volume (P–V) Work ke Do Zaroori Formulas
1. **Constant external pressure (Irreversible expansion/compression):**
   > **w = −P_ext ΔV = −P_ext (V₂ − V₁)**
   - **Unit conversion:** 1 L·bar = **100 J**; 1 L·atm = **101.3 J**.
   - **Free expansion (in vacuum):** P_ext = 0 → **w = 0**!
2. **Reversible Isothermal expansion of an ideal gas (at constant T):**
   > **w_rev = −2.303 nRT log(V₂ / V₁) = −2.303 nRT log(P₁ / P₂)**
   - Yahan **R = 8.314 J K⁻¹ mol⁻¹**, aur kyunki ideal gas ka isothermal process hai, **ΔU = 0**, isliye **q = −w_rev**!

### Example 1. First Law (ΔU = q + w) ka Seedha Hisaab

**Sawaal:** Ek cylinder mein band gas surroundings se **700 J heat absorb** karti hai aur phailkar piston par **300 J kaam (work) karti hai**. Gas ki internal energy mein badlaav (**ΔU**) nikalo.

**Hal:**
- Heat absorbed BY system → **q = +700 J**.
- Work done BY system (expansion) → **w = −300 J**.
- First Law: **ΔU = q + w = +700 + (−300) = +400 J**.
- *(Matlab: system ki internal energy 400 J badh gayi!)*

**Jaanch:** 700 J andar aaya, 300 J kaam mein kharch hua, bacha +400 J andar jama hua ✅.

### Example 2. Reversible Isothermal Expansion of Ideal Gas

**Sawaal:** **2 mol** ideal gas **300 K** par reversibly aur isothermally **10 L se 20 L** tak phailti hai. **w_rev, ΔU aur q** nikalo. *(Diya hai: R = 8.314 J K⁻¹ mol⁻¹, log 2 = 0.3010.)*

**Hal:**
1. **w_rev = −2.303 nRT log(V₂ / V₁)**
   - w_rev = −2.303 × 2 × 8.314 × 300 × log(20 / 10)
   - w_rev = −2.303 × 2 × 8.314 × 300 × 0.3010
   - 2.303 × 2 × 8.314 × 300 = 11488.2852; usko 0.3010 se guna karne par:
   - **w_rev = −3457.97 J ≈ −3.46 kJ** *(minus sign = gas ne expansion mein kaam kiya!)*.
2. Kyunki ideal gas ka **isothermal** process hai (T constant): **ΔU = 0**.
3. First Law (ΔU = q + w): 0 = q + (−3458 J) → **q = +3458 J ≈ +3.46 kJ** *(gas ne utni hi heat bahar se li!)*.

**Jaanch:** ΔU = q + w = (+3458) + (−3458) = 0 ✅.

### Reversible banaam Irreversible Process — Ek Nazar Mein

| Gun (Feature) | Reversible Process | Irreversible Process |
|---|---|---|
| **Gati (Speed)** | Behad dheemi (infinite chhote kadam, har pal equilibrium!) | Tez aur real-life prakriya (sirf shuru aur ant mein equilibrium) |
| **Driving vs Opposing Force** | Dono mein antar lagbhag zero (dP) | Bada antar hota hai (ek jhatke mein expansion/compression) |
| **Expansion Work** | **Sabse ZYADA work milta hai** (maximum work!) | Kam work milta hai (|w_rev| > |w_irrev|) |

### Example 3. Reversible banaam Irreversible Expansion Work ki Tulna

**Sawaal:** **1.0 mol** ideal gas **300 K** par **10 L se 20 L** tak phailti hai. (a) Reversible isothermal expansion work (w_rev), aur (b) Irreversible expansion work against constant final pressure **P_ext = 1.247 bar** nikalo, aur dikhao ki |w_rev| > |w_irrev|. *(log 2 = 0.3010, 1 L·bar = 100 J.)*

**Hal:**
- (a) **w_rev** = −2.303 × 1 × 8.314 × 300 × 0.3010 = **−1729.0 J**.
- (b) **w_irrev** = −P_ext (V₂ − V₁) = −1.247 × (20 − 10) = −12.47 L·bar = **−1247.0 J**.
- Tulna: **1729 J > 1247 J** — reversible expansion mein hamesha maximum work milta hai!

**Jaanch:** |w_rev| (1729 J) > |w_irrev| (1247 J) ✅.

---

## Aam galtiyan (bachke rehna)

1. **Galti 1: Chemistry mein Physics wala formula ΔU = q − w laga dena.**
   *Sahi baat:* Chemistry (IUPAC) mein hamesha **ΔU = q + w** lagao, aur yaad rakho: expansion (work BY system) → **w negative**, compression (work ON system) → **w positive**!

2. **Galti 2: Extensive aur Intensive properties ko aapas mein mila dena.**
   *Aasaan test:* System ko beech se **aadha** kaat do! Jo property aadhi ho jaaye (mass, volume V, internal energy U, enthalpy H, heat capacity C) wo **Extensive** hai; jo wahi rahe (temperature T, pressure P, density, molar heat capacity C_m) wo **Intensive** hai!

3. **Galti 3: Isothermal expansion mein bhi ΔU ≠ 0 nikaal dena.**
   Ideal gas ki internal energy U **sirf temperature T** par nirbhar karti hai! Isliye har isothermal process (ΔT = 0) mein ideal gas ke liye **ΔU = 0** hota hai!

---

## Quick Recap

- **Systems:** Open (matter + energy), Closed (sirf energy), Isolated (kuch nahi).
- **State functions** (U, H, S, G, P, V, T) path par nirbhar nahi karte; **Path functions** (q, w) path par nirbhar karte hain.
- **First Law (IUPAC):** **ΔU = q + w** (andar aane wali energy +, bahar jaane wali −).
- **Work:** Constant P_ext: **w = −P_ext ΔV**; Reversible isothermal: **w_rev = −2.303 nRT log(V₂/V₁)**; Vacuum free expansion: **w = 0**.
- **Ideal gas isothermal (ΔT = 0):** **ΔU = 0** aur **q = −w**.

---

## Practice Questions

1. Classify each of the following as an **open, closed, or isolated system**:
   (a) A steaming cup of hot soup on a table
   (b) A sealed tin can of juice placed in a refrigerator
   (c) Hot tea inside a perfectly insulated vacuum flask
   (d) A living green plant in a garden
2. Classify the following properties as **extensive** or **intensive**:
   (a) Volume (V), (b) Temperature (T), (c) Density (ρ), (d) Internal energy (U), (e) Pressure (P), (f) Molar volume (V_m).
3. Why are **internal energy (U)** and **volume (V)** called state functions, while **heat (q)** and **work (w)** are called path functions?
4. A chemical system **releases 450 J of heat** to the surroundings while **180 J of work is done ON the system** by compressing it. Calculate **ΔU** using IUPAC sign conventions.
5. A gas expands from **2.0 L to 7.0 L** against a **constant external pressure of 2.0 bar**. Calculate the work done **w** in **Joules** (given: 1 L·bar = 100 J).
6. **1.0 mol** of an ideal gas expands **isothermally and reversibly** at **300 K** from **5.0 L to 50.0 L**. Calculate **w_rev, ΔU and q** in Joules and kJ. *(R = 8.314 J K⁻¹ mol⁻¹, log 10 = 1.)*
7. **2.0 mol** of an ideal gas expands **freely into a vacuum** (P_ext = 0) from 4.0 L to 12.0 L under isothermal conditions. Calculate **w, ΔU and q**.
8. In a **cyclic process**, a gas starts at state A, goes to state B, and returns to state A. What is the exact value of **ΔU** for the complete cycle? Does **q** also have to be zero? Explain!
9. In an **adiabatic compression**, **620 J** of work is done ON a gas. Find **q** and **ΔU**, and state whether the temperature of the gas rises or falls.
10. State whether each statement is True or False, and correct the false ones:
    (a) The ratio of two extensive properties (such as mass ÷ volume = density) is an intensive property.
    (b) According to IUPAC convention, work done BY the system during expansion is taken as positive.
    (c) For an isochoric process (ΔV = 0), pressure-volume work w is zero.
    (d) For an ideal gas undergoing an isothermal process, ΔU = 0.
11. Distinguish between a **reversible process** and an **irreversible process** on any two points, and state which one gives the **maximum work** during expansion of a gas.
12. During an **adiabatic expansion** (q = 0), a gas does **420 J of work** on the surroundings. Calculate **ΔU** and state whether the temperature of the gas **rises or falls**.

### Answers

1. (a) **Open** (matter/steam aur heat dono bahar jaate hain).
   (b) **Closed** (band dabba hai, sirf heat bahar jaati hai).
   (c) **Isolated** (na matter, na heat ka exchange).
   (d) **Open** (CO₂, O₂, paani aur sunlight sab ka len-den hota hai).

2. **Extensive:** (a) Volume, (d) Internal energy.
   **Intensive:** (b) Temperature, (c) Density, (e) Pressure, (f) Molar volume (V/n).

3. **U aur V** sirf system ki initial aur final state par nirbhar karte hain (raaste par nahi), isliye state functions hain. **q aur w** is baat par nirbhar karte hain ki badlaav reversible tha ya irreversible (raaste par nirbhar), isliye path functions hain.

4. Heat released → q = **−450 J**; Work done ON system → w = **+180 J**.
   ΔU = q + w = −450 + 180 = **−270 J**.
   Jaanch: 450 J gaya aur 180 J aaya → net 270 J kam hua ✅.

5. ΔV = V₂ − V₁ = 7.0 − 2.0 = **+5.0 L**.
   w = −P_ext ΔV = −(2.0 bar)(5.0 L) = **−10.0 L·bar** = −10.0 × 100 J = **−1000 J (−1.0 kJ)**.
   Jaanch: Expansion hai isliye w negative (−1000 J) ✅.

6. w_rev = −2.303 nRT log(V₂/V₁) = −2.303 × 1 × 8.314 × 300 × log(50/5) = −2.303 × 8.314 × 300 × 1 = **−5744.1 J ≈ −5.74 kJ**.
   Isothermal ideal gas → **ΔU = 0**, isliye **q = −w_rev = +5744.1 J ≈ +5.74 kJ**.
   Jaanch: ΔU = +5744.1 + (−5744.1) = 0 ✅.

7. Vacuum mein P_ext = 0 → **w = −0 × ΔV = 0**.
   Isothermal ideal gas → **ΔU = 0**.
   First Law: **q = ΔU − w = 0**.
   Jaanch: Free isothermal expansion mein w = q = ΔU = 0 ✅.

8. Kyunki **U ek state function hai** aur initial = final state (A → B → A), poori cycle ke liye **ΔU = 0**! Par **q** zero hona zaroori NAHI hai (q = −w), kyunki q ek path function hai!

9. Adiabatic process → **q = 0**. Work done ON gas → **w = +620 J**.
   ΔU = q + w = 0 + 620 = **+620 J**. Internal energy badhi, isliye gas ka **temperature badhega (rises)**!
   Jaanch: ΔU = +620 J > 0 → T rises ✅.

10. (a) **True** ✅. Mass (ext) ÷ Volume (ext) = Density (intensive).
    (b) **False** ❌. IUPAC mein expansion work (work done BY system) **negative (w < 0)** hota hai.
    (c) **True** ✅. ΔV = 0 hone par w = −P_ext(0) = 0.
    (d) **True** ✅. Ideal gas ki U sirf T par nirbhar karti hai.

11. **Reversible process** infinite chhote kadmon mein har pal equilibrium par chalta hai (driving ≈ opposing force), jabki **irreversible process** tez aur finite difference se hota hai. Expansion mein hamesha **reversible process** se **maximum work** milta hai!

12. Adiabatic → **q = 0**; work done BY gas → **w = −420 J**.
    ΔU = q + w = 0 + (−420) = **−420 J**. Internal energy ghati, isliye gas ka temperature **girega (falls — adiabatic cooling!)**.
    Jaanch: ΔU = −420 J < 0 → T falls ✅.

---

Ab tum System, State Functions aur First Law (ΔU = q + w) ke saare sign conventions pakke kar chuke ho!

**Aage kya?** Lab mein lagbhag har chemical reaction **khule beaker (constant atmospheric pressure)** mein hota hai, band cylinder (constant volume) mein nahi! Constant pressure par milne wali heat ko ek khaas naam diya gaya hai — **Enthalpy (H)**! Agle topic (**Topic 2**) mein hum **ΔH aur ΔU ka rishta**, **Heat Capacity (C_p − C_v = R)** aur alag-alag **Enthalpy Changes** seekhenge!
