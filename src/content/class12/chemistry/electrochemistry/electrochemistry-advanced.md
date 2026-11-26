> **Class:** 12 | **Subject:** Chemistry | **Chapter 2:** Electrochemistry (Gehrai Mein — Advanced Level)

# Electrochemistry — Gehrai Mein (Advanced Level)

> **Core chapter se:** Core lessons ([Topic 1](electrochemistry.md) se [Topic 6](electrochemistry-part6.md)) mein humne Nernst equation, ΔG°, Kohlrausch's law, Faraday's laws aur batteries cover kiye. Ab is **Gehrai Mein** section mein hum chaar elite electrochemistry tools dekhenge — **Electrolyte Concentration Cells & pH Meter (E = 0.059 ΔpH)**, **Latimer Diagram & Non-Additivity of E° (E₃° = (n₁E₁° + n₂E₂°)/n₃)**, **Solubility Product K_sp from Standard Electrode Potentials**, aur **Conductometric Titration Curves**!

---

## Lekha ka Analytical Electrochemistry Lab

**Lekha** ek analytical electrochemist hai. Uske lab mein yeh chaar deep electrochemistry tricks sabse tricky questions ko 2 line mein solve kar deti hain:
1. Do identical electrodes ko alag-alag concentrations (C₁, C₂) mein dubone par **E°_cell = 0** hota hai, phir bhi spontaneous voltage milta hai (**Concentration Cell**: **E = (0.059 / n) log(C₂ / C₁)**)!
2. Do half-reactions ko jodkar teesra half-reaction banane par **E° seedha NAHI judta** — balki **ΔG° judta hai**, jisse **E₃° = (n₁ E₁° + n₂ E₂°) / n₃** milta hai!
3. Sparingly soluble salt (AgCl, AgBr) ka **K_sp** seedha Ag/AgCl aur Ag⁺/Ag electrodes ke E° difference se nikal aata hai!

---

## 1. Concentration Cells & Electrochemical pH Measurement

Jab anode aur cathode **dono same electrode** hon (e.g., **Zn | Zn²⁺(C₁) || Zn²⁺(C₂) | Zn**):
- **E°_cell = 0**!
- Nernst equation (298 K):

```
   E_cell = (0.059 / n) log (C₂ / C₁)    (Spontaneous when C_cathode > C_anode!)
```

- **Hydrogen Concentration Cell (pH Meter!):**
  **Pt | H₂(1 bar) | H⁺(pH₁) || H⁺(pH₂) | H₂(1 bar) | Pt** (n = 1):
  **E_cell = 0.059 × (pH₁ − pH₂)**! (Agar cathode SHE ho jahan pH₂ = 0, to **E_cell = 0.059 × pH_anode**!)

---

## 2. Latimer Diagram — Combining Half-Cell Potentials via ΔG°

Agar half-reaction 1 (n₁ electrons, E₁°) + half-reaction 2 (n₂ electrons, E₂°) = half-reaction 3 (n₃ electrons, E₃°):
- **E° kabhi seedha mat jodo!** Hamesha **ΔG₃° = ΔG₁° + ΔG₂°** lagao (−n₃ F E₃° = −n₁ F E₁° − n₂ F E₂°):

```
   E₃° = (n₁ E₁° + n₂ E₂°) / n₃
```

---

## 3. Finding Solubility Product (K_sp) from E° Values

Silver-Silver Chloride electrode (**AgCl(s) + e⁻ → Ag(s) + Cl⁻**) aur **Ag⁺ + e⁻ → Ag(s)** ko subtract karne par milta hai:
**AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)** (n = 1, K = K_sp!):

```
   E°(Cl⁻/AgCl/Ag) = E°(Ag⁺/Ag) + 0.059 log K_sp
```

---

## 4. Conductometric Titration Curves (Shapes to Master!)

1. **Strong Acid (HCl) vs Strong Base (NaOH):** Fast **H⁺** ions replace hote hain slow **Na⁺** ions se ⟹ conductance **tezi se GHATTA hai**; equivalence point ke baad excess fast **OH⁻** ions aate hain ⟹ conductance **tezi se BADHTA hai** (**V-shaped graph**!).
2. **Weak Acid (CH₃COOH) vs Strong Base (NaOH):** Initially kam conductance → NaOH milane par strong salt CH₃COONa banta hai ⟹ **dheere badhta hai** → equivalence point ke baad excess OH⁻ se **tezi se badhta hai**!

---

## 5 Deep Solved Problems

### Problem 1: Latimer Calculation for Cu⁺/Cu
Given **E°(Cu²⁺/Cu) = +0.34 V** and **E°(Cu²⁺/Cu⁺) = +0.15 V**, calculate **E°(Cu⁺/Cu)**!

**Solution:**
- (1) Cu²⁺ + 2e⁻ → Cu (n₁ = 2, E₁° = +0.34 V)
- (2) Cu²⁺ + 1e⁻ → Cu⁺ (n₂ = 1, E₂° = +0.15 V)
- Subtract (1) − (2) to get **Cu⁺ + 1e⁻ → Cu** (n₃ = 1):
  n₃ E₃° = n₁ E₁° − n₂ E₂° ⟹ 1 × E₃° = 2(0.34) − 1(0.15) = 0.68 − 0.15 = **+0.53 V**!
- Jaanch: Disproportionation check: E°(Cu⁺/Cu) = +0.53 V > E°(Cu²⁺/Cu⁺) = +0.15 V ⟹ Cu⁺ spontaneously disproportionates into Cu²⁺ + Cu! ✅.

### Problem 2: Hydrogen Concentration Cell & pH
Calculate the EMF at 298 K of the cell:
**Pt | H₂(1 bar) | H⁺(pH = 5) || H⁺(pH = 2) | H₂(1 bar) | Pt**.

**Solution:**
- **E_cell = 0.059 × (pH_anode − pH_cathode) = 0.059 × (5 − 2) = 0.059 × 3 = +0.177 V**!
- Jaanch: [H⁺]_cathode (10⁻²) > [H⁺]_anode (10⁻⁵) ⟹ ratio 10³ ⟹ 0.059 × 3 = +0.177 V ✅.

### Problem 3: Finding K_sp of AgCl from Electrode Potentials
Given **E°(Ag⁺/Ag) = +0.80 V** and **E°(Cl⁻/AgCl/Ag) = +0.21 V** at 298 K, calculate **K_sp** of AgCl!

**Solution:**
- 0.21 = 0.80 + 0.059 log K_sp ⟹ 0.059 log K_sp = −0.59 ⟹ **log K_sp = −10** ⟹ **K_sp = 10⁻¹⁰**!
- Jaanch: 0.80 − 0.59 = 0.21 V ✅.

### Problem 4: Concentration Cell with Zinc Electrodes
Calculate E_cell at 298 K for **Zn | Zn²⁺(0.01 M) || Zn²⁺(1.0 M) | Zn**.

**Solution:**
- n = 2, C₂ / C₁ = 1.0 / 0.01 = **100 = 10²** (log = 2):
- **E_cell = (0.059 / 2) × 2 = +0.059 V**.
- Jaanch: C_cathode > C_anode ⟹ E_cell > 0 (spontaneous!) ✅.

### Problem 5: Disproportionation Feasibility of Fe²⁺ vs Cu⁺
Given E°(Fe³⁺/Fe²⁺) = **+0.77 V** and E°(Fe²⁺/Fe) = **−0.44 V**, will **Fe²⁺** disproportionate into Fe³⁺ and Fe in aqueous solution?

**Solution:**
- Disproportionation reaction: **3 Fe²⁺ → 2 Fe³⁺ + Fe**.
- E°_cell = E°(cathode: Fe²⁺/Fe) − E°(anode: Fe³⁺/Fe²⁺) = −0.44 − (+0.77) = **−1.21 V < 0**!
- **NO** — Fe²⁺ is **stable** against disproportionation!
- Jaanch: Negative E°_cell ⟹ non-spontaneous ✅.

---

## 10 Advanced Practice Questions

1. Given E°(Fe³⁺/Fe) = −0.036 V and E°(Fe²⁺/Fe) = −0.440 V, calculate E°(Fe³⁺/Fe²⁺) using ΔG° additivity.
2. Calculate the EMF at 298 K of the concentration cell **Cu | Cu²⁺(0.001 M) || Cu²⁺(0.1 M) | Cu**.
3. For a Hydrogen electrode dipped in a buffer of pH = 4 paired with a standard SHE (pH = 0) as cathode, calculate E_cell at 298 K.
4. Given E°(Ag⁺/Ag) = +0.80 V and K_sp(AgI) = 10⁻¹⁶ at 298 K, calculate E°(I⁻/AgI/Ag).
5. Sketch or describe the shape of the conductometric titration curve of **HCl (strong acid)** titrated against **NaOH (strong base)**.
6. Why does the conductance of an HCl solution drop sharply when NaOH is initially added, even though the total number of ions stays constant?
7. What is the condition on C₁ and C₂ for the concentration cell **M | Mⁿ⁺(C₁) || Mⁿ⁺(C₂) | M** to be spontaneous?
8. Given E°(MnO₄⁻/MnO₂) = +1.70 V (3e⁻) and E°(MnO₂/Mn²⁺) = +1.23 V (2e⁻), calculate E°(MnO₄⁻/Mn²⁺) (5e⁻).
9. Calculate the pH of the anode solution if **Pt | H₂(1 bar) | H⁺(aq) || H⁺(1 M) | H₂(1 bar) | Pt** shows an EMF of +0.295 V at 298 K.
10. What happens to the EMF of a concentration cell if both C₁ and C₂ are diluted by a factor of 10?

### Solutions

1. Fe³⁺ + 3e⁻ → Fe (n = 3, −0.036 V); Fe²⁺ + 2e⁻ → Fe (n = 2, −0.440 V).
   Subtract: Fe³⁺ + 1e⁻ → Fe²⁺ (n = 1):
   E° = [3(−0.036) − 2(−0.440)] / 1 = −0.108 + 0.880 = **+0.772 V**!
   Jaanch: Matches standard value +0.77 V ✅.

2. n = 2, C₂/C₁ = 0.1 / 0.001 = 100 (log = 2):
   **E_cell = (0.059 / 2) × 2 = +0.059 V**.
   Jaanch: 2 cancels ✅.

3. **E_cell = 0.059 × (4 − 0) = +0.236 V**.
   Jaanch: 4 × 0.059 = 0.236 V ✅.

4. E°(I⁻/AgI/Ag) = 0.80 + 0.059 × (−16) = 0.80 − 0.944 = **−0.144 V**.
   Jaanch: 0.059 × 16 = 0.944; 0.80 − 0.944 = −0.144 V ✅.

5. **V-shaped curve:** Conductance pehle tezi se neeche girti hai (H⁺ replaced by Na⁺), equivalence point par minimum hit karti hai, aur phir excess OH⁻ se tezi se upar chadh jaati hai!

6. Kyunki **H⁺ ion** ki molar ionic conductivity (~350 S cm² mol⁻¹) **Na⁺ ion** (~50 S cm² mol⁻¹) se ~7 guna zyada hoti hai — fast H⁺ ko slow Na⁺ replace karta hai!

7. **C₂ > C₁** (Cathode concentration must be greater than Anode concentration so log(C₂/C₁) > 0!).

8. E° = [3(1.70) + 2(1.23)] / 5 = (5.10 + 2.46) / 5 = 7.56 / 5 = **+1.512 V**!
   Jaanch: Matches standard E°(MnO₄⁻/Mn²⁺) = +1.51 V ✅.

9. E_cell = 0.059 × pH ⟹ **pH = 0.295 / 0.059 = 5.0**.
   Jaanch: 5 × 0.059 = 0.295 V ✅.

10. **UNCHANGED!** Ratio C₂ / C₁ = (C₂/10) / (C₁/10) stays exact same ⟹ E_cell doesn't change!

---

Shabaash! Tumne Concentration Cells, Latimer Diagrams, K_sp from E° aur Conductometric Titrations tak conquer kar liye hain! Wapas chapter overview ke liye [Mixed Problems & Chapter Wrap-up](electrochemistry-part6.md) dekho!
