# Chapter: Thermodynamics (Part 3)

> **Class:** 11 | **Subject:** Chemistry
> **Ye file [thermodynamics-part2.md](thermodynamics-part2.md) se aage chalti hai** (wahan humne Enthalpy, ΔH = ΔU + Δn_g RT, heat capacity aur standard enthalpy changes seekhe the). Chapter ki shuruaat: [thermodynamics.md](thermodynamics.md).
> **Topics covered in this file:**
> 3. Hess's Law of Constant Heat Summation aur Bond Enthalpies se Δ_rH° Nikaalna

---

# Topic 3: Hess's Law of Constant Heat Summation aur Bond Enthalpies se Δ_rH° Nikaalna

Agar tum lab mein Carbon (graphite) ko jalaakar sirf **CO(g)** banana chaho, to thoda bahut CO₂ bhi ban jaata hai — isliye **C(s) + ½O₂(g) → CO(g)** ka Δ_fH° calorimeter mein seedha nahi naapa ja sakta! Aur **C(graphite) → C(diamond)** to itna dheema hai ki lakhon saal lag jaayein! Aise reactions ka exact ΔH nikaalne ke liye 1840 mein Germain Hess ne ek kamaal ka niyam diya — **Hess's Law** — aur saath hi hum **Bond Enthalpies** se reaction heat nikaalna seekhenge!

---

## Parnika, chhat par chadhne ke do raaste aur LEGO ka kila

Parnika apne school ke ground floor se seedhe **chhat (rooftop)** par ja rahi thi. Ek din wo bina ruke **seedhe ramp** se upar gayi (kul unchaai = **12 m**). Agle din wo har manzil par rukti hui gayi: ground se 1st floor (**4 m**), 1st se 2nd (**4 m**), aur 2nd se chhat (**4 m**). Kul unchaai phir bhi 4 + 4 + 4 = **12 m** hi rahi!

Phir shaam ko usne apne **LEGO ke kile** ko poora tod kar saari eentein alag kin (energy lagi!) aur unhi eenton ko jodkar ek **spaceship** bana liya (energy nikli!).

Teacher ma'am ne muskurate hue kaha, "Parnika, chhat ki kul unchaai bilkul **Hess's Law** hai — kyunki Enthalpy ek **state function** hai, reaction chahe **ek step** mein ho ya **kai steps** mein, kul **ΔH hamesha barabar** rehta hai! Aur LEGO todna-jodna bilkul **Bond Enthalpy** ka hisaab hai!" Chalo, dono methods ko solve karna seekhte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Hess's Law** | Agar koi reaction ek step mein ho ya kai chhote steps mein, to poori reaction ka kul enthalpy change (ΔH) hamesha **ek hi (barabar)** hota hai | ΔH = ΔH₁ + ΔH₂ + ΔH₃ |
| **Thermochemical Equation** | Wo balanced chemical equation jismein har substance ki physical state (s, l, g) aur reaction ka ΔH likha ho | C(s) + O₂(g) → CO₂(g); ΔH = −393.5 kJ |
| **Bond Dissociation Enthalpy** | Gaseous haalat mein **1 mole khas bond** ko todne ke liye lagne wali energy (hamesha **positive / endothermic**) | H−H(g) → 2H(g); ΔH = +436 kJ/mol |
| **Mean (Average) Bond Enthalpy** | Polyatomic molecule (jaise CH₄) mein ek jaise kai bonds ko todne ki kul energy ka **average** | CH₄ mein average C−H = 1664 ÷ 4 = 416 kJ/mol |

---

## Part A: Hess's Law aur Thermochemical Equations ke 3 Golden Rules

```
                    ΔH (direct — naapna mushkil!)
        A (Reactants) --------------------------> D (Products)
              \                                    ^
               \  ΔH₁                        ΔH₃  /
                v             ΔH₂                /
                 B --------------------------> C

              Hess's Law:   ΔH  =  ΔH₁ + ΔH₂ + ΔH₃
```

> **Figure 3.1** – Hess's Law ka cycle: A se D tak seedhe jaane ka enthalpy change (ΔH) hamesha chhote steps (A → B → C → D) ke enthalpy changes ke jod (ΔH₁ + ΔH₂ + ΔH₃) ke barabar hota hai.

**Thermochemical Equations ko Algebra ki Tarah Solve Karne ke 3 Niyam:**
1. **Equation ulta (reverse) karne par ΔH ka sign badal jaata hai** (+ se −, ya − se +).
2. **Equation ko kisi sankhya 'k' se guna/bhaag karne par ΔH bhi usi 'k' se guna/bhaag hota hai.**
3. **Do ya zyada equations ko jodne par unke ΔH bhi seedhe jud jaate hain** (dono side ke common terms cancel ho jaate hain!).

### Example 1. Hess's Law se CO(g) ka Δ_fH° Nikaalna

*(Chetavani: CO zehreeli gas hai — ye reaction sirf paper calculation ke liye hai!)*

**Sawaal:** Neeche diye gaye do combustion enthalpies se **C(graphite) + ½O₂(g) → CO(g)** ka **Δ_fH°** nikalo:
- Eq (1): **C(graphite) + O₂(g) → CO₂(g)**; ΔH₁ = **−393.5 kJ mol⁻¹**
- Eq (2): **CO(g) + ½O₂(g) → CO₂(g)**; ΔH₂ = **−283.0 kJ mol⁻¹**

**Hal:**
- Humein **C(graphite)** left mein aur **CO(g)** right mein chahiye!
- **Step 1:** Eq (1) ko waisa hi rakho:
  C(graphite) + O₂(g) → CO₂(g); ΔH₁ = **−393.5 kJ**
- **Step 2:** Eq (2) ko **ulta (reverse)** karo (sign −283.0 se **+283.0** ho jaayega!):
  CO₂(g) → CO(g) + ½O₂(g); ΔH₂' = **+283.0 kJ**
- **Step 3:** Dono ko jod do! CO₂(g) cancel, aur left par O₂ − ½O₂ = ½O₂ bacha:
  **C(graphite) + ½O₂(g) → CO(g)**
  **Δ_fH° = −393.5 + 283.0 = −110.5 kJ mol⁻¹**!

**Jaanch:** Cycle check: ΔH(C → CO) + ΔH(CO → CO₂) = (−110.5) + (−283.0) = −393.5 kJ = ΔH(C → CO₂) ✅.

---

## Part B: Bond Enthalpy se Δ_rH° Nikaalna (Sign ka Sabse Bada Raaz!)

Yaad rakho:
- **Purane bonds (Reactants) TODNE** mein energy **LAGTI hai (+ve)**.
- **Naye bonds (Products) BANNE** par energy **NIKALTI hai (−ve)**.
Isliye gaseous reactions ke liye:
> **Δ_rH° = Σ Bond Enthalpies (Reactants broken) − Σ Bond Enthalpies (Products formed)**

*(Khaas Dhyan Do! **Δ_fH°** wale formula mein **Products − Reactants** hota hai, par **Bond Enthalpy** wale formula mein **Reactants − Products** hota hai — dono ko kabhi mat milaana!)*

### Example 2. Bond Enthalpies se H₂(g) + Cl₂(g) → 2HCl(g) ka Δ_rH°

*(Chetavani: H₂ aur Cl₂ ka mixture dhoop mein dhamake se react karta hai — sirf paper calculation ke liye!)*

**Sawaal:** Diye gaye bond enthalpies (kJ/mol) se **H₂(g) + Cl₂(g) → 2HCl(g)** ka Δ_rH° nikalo:
BE(H−H) = **436**, BE(Cl−Cl) = **242**, BE(H−Cl) = **431**.

**Hal:**
- **Bonds broken (Reactants):** 1 × (H−H) + 1 × (Cl−Cl) = 436 + 242 = **678 kJ**.
- **Bonds formed (Products):** 2 × (H−Cl) = 2 × 431 = **862 kJ**.
- **Δ_rH° = ΣBE(Reactants) − ΣBE(Products) = 678 − 862 = −184 kJ** (ya 1 mol HCl ke liye −92 kJ/mol)!

**Jaanch:** Naye H−Cl bonds todne wale bonds se zyada mazboot hain (862 > 678), isliye reaction strongly exothermic (−184 kJ) hai ✅.

---

### Example 3. Hess's Law ka Zabardast Upyog — Born–Haber Cycle se NaCl ki Lattice Enthalpy!

Ionic crystal ki **Lattice Enthalpy (U)** seedha calorimeter mein nahi naapi ja sakti — par **Born–Haber Cycle** (Hess's Law ka hi ek roop!) se ise 5 aasaan steps jodkar exact nikala jaata hai:
- **Direct route:** Na(s) + ½Cl₂(g) → NaCl(s), **Δ_fH° = −412 kJ/mol**.
- **5-Step indirect route:**
  1. Sublimation: Na(s) → Na(g), Δ_subH° = **+108 kJ/mol**
  2. Ionisation: Na(g) → Na⁺(g) + e⁻, ΔᵢH = **+496 kJ/mol**
  3. Bond dissociation (½ mol Cl₂): ½Cl₂(g) → Cl(g), ½Δ_bondH° = **+121 kJ/mol**
  4. Electron gain: Cl(g) + e⁻ → Cl⁻(g), ΔₑgH = **−349 kJ/mol**
  5. Lattice formation: Na⁺(g) + Cl⁻(g) → NaCl(s), **−U** (jahan U = lattice enthalpy)
- **Hess's Law lagao:** −412 = 108 + 496 + 121 − 349 − U = **376 − U** → **U = 376 + 412 = +788 kJ mol⁻¹**!

**Jaanch:** 108 + 496 + 121 − 349 − 788 = 725 − 1137 = −412 kJ/mol = Δ_fH°(NaCl) ✅.

---

## Aam galtiyan (bachke rehna)

1. **Galti 1: Bond Enthalpy formula mein "Products − Reactants" laga dena.**
   *Sahi baat:*
   - Using **Δ_fH°** → **Products − Reactants**.
   - Using **Bond Enthalpies** → **Reactants (broken) − Products (formed)**!
   *(Agar ulta kar doge to har exothermic reaction endothermic dikhne lagegi!)*

2. **Galti 2: Hess's Law mein equation ulta (reverse) karke ΔH ka sign badalna bhool jaana.**
   Jab bhi arrow palat-te ho, **+ ko −** aur **− ko +** karna zaroori hai!

3. **Galti 3: Equation ko 2 ya 3 se guna karke ΔH ko guna karna bhool jaana.**
   Enthalpy ek **extensive property** hai — 2 mole jalane par **dugni heat** nikalti hai!

---

## Quick Recap

- **Hess's Law:** Enthalpy ek state function hai, isliye multi-step reaction ka kul **ΔH = ΔH₁ + ΔH₂ + ...**
- **Equation rules:** Reverse → flip sign; Multiply by k → multiply ΔH by k; Add equations → add ΔH.
- **From Δ_fH°:** Δ_rH° = ΣΔ_fH°(Products) − ΣΔ_fH°(Reactants).
- **From Bond Enthalpies (gaseous):** **Δ_rH° = ΣBE(Reactants broken) − ΣBE(Products formed)**.
- **Mean Bond Enthalpy (CH₄):** Kul atomisation enthalpy (1664 kJ/mol) ÷ 4 = **416 kJ/mol**.

---

## Practice Questions

1. Using Hess's Law, calculate **ΔH°** for the allotropic conversion **C(graphite) → C(diamond)** from the following combustion data:
   - C(graphite) + O₂(g) → CO₂(g); ΔH₁ = **−393.5 kJ mol⁻¹**
   - C(diamond) + O₂(g) → CO₂(g); ΔH₂ = **−395.4 kJ mol⁻¹**
2. Calculate the standard enthalpy of formation (**Δ_fH°**) of liquid methanol **CH₃OH(l)** from the following combustion enthalpies:
   - CH₃OH(l) + (3/2)O₂(g) → CO₂(g) + 2H₂O(l); ΔH₁ = **−726 kJ mol⁻¹**
   - C(graphite) + O₂(g) → CO₂(g); ΔH₂ = **−393 kJ mol⁻¹**
   - H₂(g) + ½O₂(g) → H₂O(l); ΔH₃ = **−286 kJ mol⁻¹**
   *(Flammable alcohol: paper calculation only.)*
3. Using Hess's Law, calculate **Δ_fH°** of liquid carbon disulphide **CS₂(l)** from:
   - C(s) + O₂(g) → CO₂(g); ΔH₁ = **−393.5 kJ**
   - S(s) + O₂(g) → SO₂(g); ΔH₂ = **−296.8 kJ**
   - CS₂(l) + 3O₂(g) → CO₂(g) + 2SO₂(g); ΔH₃ = **−1075.0 kJ**
4. Estimate **Δ_rH°** for the synthesis of ammonia **N₂(g) + 3H₂(g) → 2NH₃(g)** using bond enthalpies (kJ/mol):
   BE(N≡N) = **946**, BE(H−H) = **436**, BE(N−H) = **391**.
5. Calculate **Δ_rH°** for the hydrogenation of ethene **C₂H₄(g) + H₂(g) → C₂H₆(g)** using bond enthalpies (kJ/mol):
   BE(C=C) = **614**, BE(C−C) = **348**, BE(C−H) = **413**, BE(H−H) = **436**.
6. For **CH₄(g) → C(g) + 4H(g)**, the enthalpy of atomisation is **+1664 kJ mol⁻¹**. Calculate the **mean (average) C−H bond enthalpy**. Why are the four successive C−H bond dissociation enthalpies in CH₄ not identical, even though all four C−H bonds in CH₄ are equal?
7. Explain why the **Bond Enthalpy** formula uses **ΣBE(Reactants) − ΣBE(Products)**, whereas the **Enthalpy of Formation** formula uses **ΣΔ_fH°(Products) − ΣΔ_fH°(Reactants)**.
8. Given:
   - 2Fe(s) + (3/2)O₂(g) → Fe₂O₃(s); ΔH = **−824 kJ**
   - 2Al(s) + (3/2)O₂(g) → Al₂O₃(s); ΔH = **−1676 kJ**
   Use Hess's Law to find **ΔH** for the thermite reaction **2Al(s) + Fe₂O₃(s) → Al₂O₃(s) + 2Fe(s)**. *(Highly exothermic industrial reaction: paper problem only!)*
9. Why is **Hess's Law** a direct consequence of the **First Law of Thermodynamics** (and the fact that Enthalpy is a state function)?
10. State whether each statement is True or False, and correct the false ones:
    (a) If a thermochemical equation is multiplied by 2, its ΔH remains unchanged.
    (b) Bond dissociation enthalpy is always positive because energy is required to break a bond.
    (c) Using bond enthalpies gives exact Δ_rH° values for reactions involving solids and liquids.
    (d) Reversing a reaction changes the sign of ΔH from negative to positive (or vice versa).
11. Using a **Born–Haber cycle** (Hess's Law), calculate the **lattice enthalpy (U)** of **KF(s)** from the following data (all in kJ/mol): Δ_fH°(KF) = **−567**, Δ_subH°(K) = **+89**, ΔᵢH(K) = **+419**, ½Δ_bondH°(F₂) = **+79**, ΔₑgH(F) = **−328**.
12. Estimate **Δ_rH°** for the combustion of methane **CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g)** using bond enthalpies (kJ/mol): BE(C−H) = **416**, BE(O=O) = **498**, BE(C=O) = **805**, BE(O−H) = **464**. *(Flammable gas: paper problem only.)*

### Answers

1. Eq (1) − Eq (2) [reverse Eq (2)]:
   ΔH° = (−393.5) − (−395.4) = −393.5 + 395.4 = **+1.9 kJ mol⁻¹** (endothermic!).
   Jaanch: Graphite thoda zyada stable hai, isliye diamond banane mein +1.9 kJ lagte hain ✅.

2. Target equation: **C(s) + 2H₂(g) + ½O₂(g) → CH₃OH(l)**.
   Apply: Eq (2) + 2 × Eq (3) − Eq (1):
   Δ_fH° = (−393) + 2(−286) − (−726) = −393 − 572 + 726 = −965 + 726 = **−239 kJ mol⁻¹**.
   Jaanch: −965 + 726 = −239 kJ/mol ✅.

3. Target equation: **C(s) + 2S(s) → CS₂(l)**.
   Apply: Eq (1) + 2 × Eq (2) − Eq (3):
   Δ_fH° = (−393.5) + 2(−296.8) − (−1075.0) = −393.5 − 593.6 + 1075.0 = −987.1 + 1075.0 = **+87.9 kJ mol⁻¹** (endothermic!).
   Jaanch: −393.5 − 593.6 = −987.1; 1075.0 − 987.1 = +87.9 kJ/mol ✅.

4. Bonds broken: 1(N≡N) + 3(H−H) = 946 + 3(436) = 946 + 1308 = **2254 kJ**.
   Bonds formed: 6(N−H) = 6 × 391 = **2346 kJ**.
   Δ_rH° = 2254 − 2346 = **−92 kJ** (ya −46 kJ per mol NH₃).
   Jaanch: 2254 − 2346 = −92 kJ ✅.

5. Bonds broken (C₂H₄ + H₂): 1(C=C) + 4(C−H) + 1(H−H) = 614 + 4(413) + 436 = 614 + 1652 + 436 = **2702 kJ**.
   Bonds formed (C₂H₆): 1(C−C) + 6(C−H) = 348 + 6(413) = 348 + 2478 = **2826 kJ**.
   Δ_rH° = 2702 − 2826 = **−124 kJ mol⁻¹**.
   *(Shortcut: sirf badalne wale bonds dekho — 1 C=C + 1 H−H toota (614+436=1050), 1 C−C + 2 C−H bana (348+826=1174) → 1050 − 1174 = −124 kJ!)*
   Jaanch: Dono tarikon se −124 kJ mol⁻¹ ✅.

6. Mean C−H bond enthalpy = 1664 ÷ 4 = **416 kJ mol⁻¹**.
   Pehla H nikalne ke baad **CH₃·** radical bachta hai jiska chemical environment badal jaata hai; phir **CH₂:**, phir **CH·** — har step mein alag species toot-ti hai, isliye chaaron step-by-step dissociation enthalpies thodi alag hoti hain!
   Jaanch: 4 × 416 = 1664 kJ/mol ✅.

7. Bond todna **endothermic (+ve)** hai aur bond banana **exothermic (−ve)** hai, isliye net heat = (+ energy spent breaking reactants) + (− energy released forming products) = **ΣBE(Reactants) − ΣBE(Products)**. Iske ulta, Δ_fH° har substance ki enthalpy level ko reference elements se naapta hai, isliye ΔH = H_final − H_initial = **ΣΔ_fH°(Products) − ΣΔ_fH°(Reactants)**.

8. Target: **2Al(s) + Fe₂O₃(s) → Al₂O₃(s) + 2Fe(s)** = Eq (2) − Eq (1).
   ΔH = (−1676) − (−824) = −1676 + 824 = **−852 kJ** (bahut tez exothermic — railway tracks weld karne mein kaam aata hai!).
   Jaanch: −1676 + 824 = −852 kJ ✅.

9. Agar do alag raaston se A → B jaane par alag-alag ΔH milta, to ek raaste se jaakar doosre se waapas aane par bina kisi kharch ke **muft mein energy paida** ki ja sakti — jo **First Law (Conservation of Energy)** ka ullanghan hota!

10. (a) **False** ❌. Equation ko 2 se guna karne par **ΔH bhi 2 se guna** hota hai.
    (b) **True** ✅. Bond todne ke liye hamesha energy deni padti hai.
    (c) **False** ❌. Bond enthalpy formula sirf **gaseous** reactants aur products ke liye lagta hai (solids/liquids mein lattice/intermolecular energies alag hoti hain).
    (d) **True** ✅.

11. Born–Haber Cycle: Δ_fH° = Δ_subH° + ΔᵢH + ½Δ_bondH° + ΔₑgH − U
    → −567 = 89 + 419 + 79 − 328 − U = 259 − U → **U = 259 + 567 = +826 kJ mol⁻¹**.
    Jaanch: 89 + 419 + 79 − 328 − 826 = 587 − 1154 = −567 kJ/mol ✅.

12. Bonds broken: 4(C−H) + 2(O=O) = 4(416) + 2(498) = 1664 + 996 = **2660 kJ**.
    Bonds formed: 2(C=O) + 4(O−H) = 2(805) + 4(464) = 1610 + 1856 = **3466 kJ**.
    Δ_rH° = 2660 − 3466 = **−806 kJ mol⁻¹** (strongly exothermic!).
    Jaanch: 2660 − 3466 = −806 kJ/mol ✅.

---

Ab tum Hess's Law aur Bond Enthalpies se kisi bhi reaction ka exact Δ_rH° bina calorimeter ke nikaal sakte ho!

**Aage kya?** First Law humein sirf ye batata hai ki **energy barabar rehti hai** — par ye nahi batata ki **barf kamre mein apne aap pighal** kyun jaati hai (jabki wo endothermic hai!), ya **garam chai thandi** to hoti hai par thandi chai apne aap garam kyun nahi hoti! Disha (spontaneity) ka ye raaz **Entropy (S) aur Second Law of Thermodynamics** mein chhupa hai — chalo, agle topic (**Topic 4**) mein chalte hain!
