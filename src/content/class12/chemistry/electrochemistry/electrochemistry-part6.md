# Chapter: Electrochemistry (Part 6)

> **Class:** 12 | **Subject:** Chemistry
> **Previous topic:** [Batteries, Fuel Cells and Corrosion](electrochemistry-part5.md)

---

## Electrochemistry Power Lab ke Chaar Stations

School chemistry fest ke "Electrochemistry Power Lab" mein **Karishma** ko chaar mixed-concept benches paar karni thin:
1. Non-standard cell ka Nernst EMF + ΔG° + log K_c ek saath nikaalna;
2. Kohlrausch's law se weak acid ka Λ_m°, α aur K_a calculate karna;
3. Faraday's law se deposited metal mass aur gas volume (STP) dono nikaalna;
4. E° table dekh kar reaction feasibility aur sacrificial protection check karna!

Chalo Karishma ke saath poora Electrochemistry chapter mila kar solve karte hain!

---

## Decision Map: Kaunsa Formula Kab Lagayein?

| Sawaal mein kya dikhe? | Kaunsa tool chuno? | Key Formula |
|---|---|---|
| Galvanic cell with non-1 M ions | Nernst Equation (298 K) | E_cell = E°_cell − (0.059/n) log Q; E° = E°_c − E°_a |
| Cell EMF → ΔG° and K_c | Thermodynamics bridge | ΔG° = −n F E°_cell; log K_c = (n E°_cell)/0.059 |
| Conductivity cell R, G*, κ, Λ_m | Electrolytic conductance | κ = G*/R; Λ_m = (κ × 1000)/M |
| Weak electrolyte Λ_m°, α, K_a | Kohlrausch's Law | Λ_m° = ν_+λ_+° + ν_-λ_-°; α = Λ_m/Λ_m°; K_a = cα²/(1−α) |
| Electrolysis mass / gas volume | Faraday's Laws | w = (M/nF) I t; 1 F = 96500 C = 1 gram-equivalent |

---

## Mixed Solved Examples (Sab Kuch Mila Kar!)

### Example 1: Full Galvanic Cell Analysis (Nernst + ΔG° + K_c)
For the cell **Fe(s) | Fe²⁺(0.001 M) || H⁺(1.0 M) | H₂(g, 1 bar) | Pt(s)** at 298 K, given **E°(Fe²⁺/Fe) = −0.44 V**:
Calculate (a) **E°_cell**, (b) **E_cell**, and (c) **ΔG°** in kJ/mol.

**Hal (Solution):**
- Overall reaction: **Fe(s) + 2 H⁺(aq) → Fe²⁺(aq) + H₂(g)** (**n = 2**).
- (a) **E°_cell = E°(H⁺/H₂) − E°(Fe²⁺/Fe) = 0.00 − (−0.44) = +0.44 V**.
- (b) Q = [Fe²⁺] / [H⁺]² = 0.001 / (1.0)² = **10⁻³** ⟹ log Q = **−3**.
  **E_cell = 0.44 − (0.059 / 2)(−3) = 0.44 + 0.0885 = +0.5285 V**.
- (c) **ΔG° = −n F E°_cell = −2 × 96500 × 0.44 = −84,920 J/mol = −84.92 kJ/mol**.
- **Jaanch:** 0.0295 × 3 = 0.0885; 0.44 + 0.0885 = 0.5285 V ✅.

### Example 2: Faraday's Law — Mass of Metal + Volume of O₂ Gas
A current of **2.0 A** is passed through aqueous **CuSO₄** (inert Pt electrodes) for **965 seconds**. Find (a) mass of **Cu** deposited at cathode (Cu = 63.5), and (b) volume of **O₂** gas evolved at anode at STP (22.4 L/mol).

**Hal (Solution):**
- Q = I t = 2.0 × 965 = **1930 C** = 1930 / 96500 = **0.020 F**.
- (a) Cathode (Cu²⁺ + 2e⁻ → Cu, n = 2): moles of Cu = 0.020 / 2 = **0.010 mol** ⟹ **w_Cu = 0.010 × 63.5 = 0.635 g**.
- (b) Anode (2 H₂O → O₂ + 4 H⁺ + 4e⁻, **n = 4** per mol O₂!):
  moles of O₂ = 0.020 / 4 = **0.005 mol** ⟹ **V(O₂) = 0.005 × 22.4 = 0.112 L = 112 mL**.
- **Jaanch:** 4 F liberates 22.4 L O₂ ⟹ 1 F liberates 5.6 L ⟹ 0.02 F liberates 0.112 L ✅.

---

## Aam Galtiyan (Synthesis Mistakes)

1. **O₂ gas ke liye n = 2 maan lena (n = 4 bhool jaana!):**
   - *Sahi:* 1 mol H₂ ke liye **2 F** (11.2 L/F), par 1 mol O₂ (2 H₂O → O₂ + 4H⁺ + 4e⁻) ke liye **4 F** (**5.6 L per Faraday** at STP)!
2. **Nernst equation mein stoichiometric powers bhool jaana:**
   - *Sahi:* Fe + 2 H⁺ → Fe²⁺ + H₂ mein Q = [Fe²⁺] / **[H⁺]²** (square zaroor lagao)!
3. **Weak electrolyte ke liye K_a = c α² mein (1 − α) chhodna jab α > 5% ho:**
   - *Sahi:* Jab α chhota (< 0.05) ho tabhi c α² approximate karo; bada α ho to exact **K_a = c α² / (1 − α)** lagao!

---

## Practice Questions (Mixed Chapter Challenge)

1. Calculate E_cell at 298 K for **Cr(s) | Cr³⁺(0.1 M) || Fe²⁺(0.01 M) | Fe(s)** given E°(Cr³⁺/Cr) = −0.74 V and E°(Fe²⁺/Fe) = −0.44 V.
2. Calculate ΔG° (in kJ/mol) and log K_c for the cell in Question 1 (F = 96,500 C/mol).
3. Conductivity of 0.0025 M methanoic acid (HCOOH) is 8.0 × 10⁻⁵ S cm⁻¹. Calculate its Λ_m and degree of dissociation α given Λ_m°(HCOOH) = 400 S cm² mol⁻¹.
4. Calculate the dissociation constant K_a of methanoic acid in Question 3.
5. How many Faradays are required to produce (a) 27 g of Al from molten Al₂O₃, and (b) 11.2 L of Cl₂ gas at STP from brine?
6. A current of 5.0 A flows for 1930 s through molten MgCl₂ (Mg = 24 g/mol). Calculate the mass of Mg deposited at the cathode.
7. Given E° values: A²⁺/A = −2.36 V, B²⁺/B = −0.44 V, C²⁺/C = +0.34 V, D⁺/D = +0.80 V. Arrange A, B, C, D in order of **increasing reducing power**.
8. Write the overall recharging reaction of a lead storage battery.
9. State whether True or False: During electrolysis of aqueous NaCl, the pH of the solution increases with time.
10. Calculate the standard cell potential E°_cell for a 2-electron reaction with ΔG° = −96.5 kJ/mol.

### Answers

1. Balanced reaction: **2 Cr + 3 Fe²⁺ → 2 Cr³⁺ + 3 Fe** (**n = 6**!).
   E°_cell = −0.44 − (−0.74) = **+0.30 V**.
   Q = [Cr³⁺]² / [Fe²⁺]³ = (0.1)² / (0.01)³ = 10⁻² / 10⁻⁶ = **10⁴** (log Q = 4).
   **E_cell = 0.30 − (0.059 / 6) × 4 = 0.30 − 0.0393 ≈ +0.261 V**.
   Jaanch: 4 × 0.059 / 6 = 0.0393; 0.30 − 0.0393 = 0.2607 V ✅.

2. n = 6, E° = 0.30 V:
   **ΔG° = −6 × 96500 × 0.30 = −173,700 J/mol = −173.7 kJ/mol**.
   **log K_c = (6 × 0.30) / 0.059 = 1.80 / 0.059 ≈ 30.51**.
   Jaanch: 1.8 × 96.5 = 173.7 kJ/mol ✅.

3. Λ_m = (8.0 × 10⁻⁵ × 1000) / 0.0025 = 0.08 / 0.0025 = **32.0 S cm² mol⁻¹**.
   **α = 32.0 / 400 = 0.08** (8.0%).
   Jaanch: 0.08 / 0.0025 = 32; 32 / 400 = 0.08 ✅.

4. K_a = (c α²) / (1 − α) = (0.0025 × 0.0064) / 0.92 = (1.6 × 10⁻⁵) / 0.92 ≈ **1.74 × 10⁻⁵ mol/L**.
   Jaanch: 25 × 64 = 1600 ⟹ 1.6 × 10⁻⁵ / 0.92 ≈ 1.74 × 10⁻⁵ ✅.

5. (a) 27 g Al = 1 mol Al (n = 3) ⟹ **3 F**.
   (b) 11.2 L Cl₂ = 0.5 mol Cl₂ (2 Cl⁻ → Cl₂ + 2e⁻, 2 F/mol) ⟹ **1 F**.

6. Q = 5.0 × 1930 = 9650 C = **0.10 F**.
   Mg²⁺ + 2e⁻ → Mg (n = 2): moles of Mg = 0.10 / 2 = 0.05 mol ⟹ **w = 0.05 × 24 = 1.20 g**.
   Jaanch: 0.05 × 24 = 1.20 g ✅.

7. More negative E° = stronger reducing agent! Increasing reducing power: **D (+0.80) < C (+0.34) < B (−0.44) < A (−2.36)**!

8. Recharging: **2 PbSO₄(s) + 2 H₂O(l) → Pb(s) + PbO₂(s) + 2 H₂SO₄(aq)**.

9. **True ✅.** Cathode par H₂O reduce hokar **OH⁻ ions** (NaOH) banata hai ⟹ solution basic hota jaata hai ⟹ **pH badhta hai**!

10. −96,500 = −2 × 96,500 × E° ⟹ **E°_cell = +0.50 V**.
    Jaanch: 2 × 96.5 × 0.5 = 96.5 kJ/mol ✅.

---

## Chapter Ka Saar: Electrochemistry

| Topic | Mukhya Formula / Niyam | Yaad Rakhne Ki Khaas Baat |
|---|---|---|
| Galvanic Cell & Nernst | E°_cell = E°_c − E°_a; E = E° − (0.059/n) log Q | LOAN rule; E° is intensive (never multiply!) |
| Thermodynamics Link | ΔG° = −n F E°_cell; log K_c = (n E°_cell)/0.059 | E° > 0 ⟺ ΔG° < 0 ⟺ K_c > 1 |
| Conductance & Kohlrausch | κ = G*/R; Λ_m = 1000κ/M; Λ_m° = ν_+λ_+° + ν_-λ_-° | Dilution: κ↓, Λ_m↑; α = Λ_m/Λ_m° |
| Faraday's Laws | w = (M/nF) I t; w₁/w₂ = E₁/E₂ | 1 F = 96500 C; aqueous NaCl gives H₂ & Cl₂ |
| Batteries, Fuel Cell, Rust | Lead storage, H₂–O₂ fuel cell (~70%), Rust Fe₂O₃·xH₂O | Mercury cell = constant 1.35 V; Zn/Mg sacrificial anode |

---

Ab tum Galvanic Cells, Nernst Equation, Kohlrausch's Law, Faraday's Laws aur Batteries/Corrosion ko poori tarah master kar chuke ho!

**Agle chapter mein:** Thermodynamics batati hai ki reaction **hogi ya nahi** — par reaction **kitni TEZ (rate)** hogi? Chaliye padhte hain **Chemical Kinetics**!
