> **Class:** 12 | **Subject:** Chemistry | **Chapter 5:** Coordination Compounds (Gehrai Mein — Advanced Level)

# Coordination Compounds — Gehrai Mein (Advanced Level)

> **Core chapter se bridge:** Core lessons ([Part 1: Werner & IUPAC](coordination-compounds.md) se [Part 5: Mixed Problems](coordination-compounds-part5.md) tak) mein humne nomenclature, isomerism, VBT, CFT aur carbonyls padhe. Ab competitive-exam depth mein hum **Crystal Field Stabilisation Energy (CFSE), Effective Atomic Number (EAN / 18-Electron Rule), Jahn–Teller Distortion, C–O Stretching Frequency Shifts, aur Advanced Stereoisomer Counting** cover karenge.

---

Tej ek organometallic chemistry seminar mein tha jahan professor ne 3 isoelectronic carbonyls dikhaye: [V(CO)₆]⁻, [Cr(CO)₆], aur [Mn(CO)₆]⁺. Teeno octahedral hain aur teeno mein exact 18 valence electrons hain! Professor ne poocha: "In teeno mein sabse kamzor (sabse lamba) C–O bond kis mein hoga?" Tej ne turant back-bonding ka logic lagaya: "V⁻ par negative charge hai → sabse zyada electron density → sabse zyada π* back-donation → **[V(CO)₆]⁻ mein sabse kamzor C–O bond**!"

---

## 1. Crystal Field Stabilisation Energy (CFSE)

### Octahedral CFSE:
**CFSE = (−0.4 × n_t₂g + 0.6 × n_eg) Δₒ + m P**
*(where m = extra electron pairs forced by strong field compared to the free ion, or total pairs if specified; in standard Δₒ-only problems, m = 0 for weak-field and m = extra pairs for strong-field).*

### Tetrahedral CFSE:
**CFSE = (−0.6 × n_e + 0.4 × n_t₂) Δₜ** (no pairing term since Δₜ < P).

| dⁿ | Weak-Field Octahedral | CFSE (Weak) | Strong-Field Octahedral | CFSE (Strong, with extra pairs) |
|---|---|---|---|---|
| d³ | t₂g³ e_g⁰ | −1.2 Δₒ | t₂g³ e_g⁰ | −1.2 Δₒ |
| d⁴ | t₂g³ e_g¹ | −0.6 Δₒ | t₂g⁴ e_g⁰ | −1.6 Δₒ + 1P |
| d⁵ | t₂g³ e_g² | **0.0 Δₒ** | t₂g⁵ e_g⁰ | −2.0 Δₒ + 2P |
| d⁶ | t₂g⁴ e_g² | −0.4 Δₒ | t₂g⁶ e_g⁰ | **−2.4 Δₒ + 2P** (Max!) |
| d⁷ | t₂g⁵ e_g² | −0.8 Δₒ | t₂g⁶ e_g¹ | −1.8 Δₒ + 1P |
| d⁸ | t₂g⁶ e_g² | −1.2 Δₒ | t₂g⁶ e_g² | −1.2 Δₒ |
| d⁹ | t₂g⁶ e_g³ | −0.6 Δₒ | t₂g⁶ e_g³ | −0.6 Δₒ |

---

## 2. Effective Atomic Number (EAN) / Sidgwick 18-Electron Rule

**EAN = Z − (Oxidation State) + 2 × (Coordination Number)**
*(For metal-metal bonded dimers like [Mn₂(CO)₁₀], add +1 for each M–M bond per metal atom!)*

Complexes whose EAN equals the next noble gas (**36 for Kr, 54 for Xe, 86 for Rn**) are especially stable (equivalent to the **18-valence-electron rule** in organometallics!):
- **[Fe(CN)₆]⁴⁻:** Z = 26, OS = +2, CN = 6 → EAN = 26 − 2 + 2(6) = **36 (Kr)**!
- **[Ni(CO)₄]:** Z = 28, OS = 0, CN = 4 → EAN = 28 − 0 + 2(4) = **36 (Kr)**!
- **[Fe(CO)₅]:** Z = 26, OS = 0, CN = 5 → EAN = 26 − 0 + 2(5) = **36 (Kr)**!
- **[Mn₂(CO)₁₀]:** Per Mn: Z = 25, OS = 0, 5 CO (10 e⁻) + 1 Mn–Mn bond (1 e⁻) → EAN = 25 + 10 + 1 = **36 (Kr)**!
- **[Cr(CO)₆]:** Z = 24, OS = 0, CN = 6 → EAN = 24 + 12 = **36 (Kr)**!

---

## 3. Jahn–Teller Distortion & Synergic IR Stretching Order

### Jahn–Teller Theorem:
Any non-linear molecule with an **electronically degenerate ground state** (unsymmetrical filling of **e_g** orbitals in octahedral complexes!) distorts geometrically to remove degeneracy and lower energy!
- **Strong Jahn–Teller distortion (unsymmetrical e_g):**
  - **d⁹** (e.g., [Cu(H₂O)₆]²⁺: t₂g⁶ e_g³) → **z-out elongation** (2 axial Cu–O bonds longer than 4 equatorial bonds!).
  - **High-spin d⁴** (e.g., [Cr(H₂O)₆]²⁺, [Mn(H₂O)₆]³⁺: t₂g³ e_g¹).
  - **Low-spin d⁷** (e.g., [Co(CN)₆]⁴⁻: t₂g⁶ e_g¹).
- **No Jahn–Teller distortion:** d⁰, d³, high-spin d⁵, low-spin d⁶, d⁸, d¹⁰ (symmetrical t₂g and e_g!).

### Synergic Back-Bonding & C–O Stretching Frequency (ν_CO):
- More negative charge on metal → stronger M → CO π* back-bonding → weaker C–O bond → **lower ν_CO** and **longer C–O bond**!
- Isoelectronic series: **[V(CO)₆]⁻ < [Cr(CO)₆] < [Mn(CO)₆]⁺** (in order of **C–O bond strength & ν_CO**; exact reverse for **M–C bond strength**!).

---

## 4. Advanced Stereoisomer Counting (Octahedral Complexes)

| Formula Type | Geometrical Isomers (GI) | Optically Active Pairs | Total Stereoisomers |
|---|---|---|---|
| Ma₄b₂ / Ma₄bc / Ma₃b₃ | 2 | 0 | 2 |
| Ma₃b₂c | 3 | 0 | 3 |
| Ma₂b₂c₂ | 5 | 1 (all-cis) | **6** |
| **Mabcdef** | **15** | **15** (all chiral!) | **30** |
| M(AA)₃ | 0 | 1 | 2 |
| M(AA)₂b₂ | 2 (cis, trans) | 1 (cis only) | **3** |
| **M(AB)₃** (unsymmetrical bidentate, e.g., [Co(gly)₃]) | **2** (fac, mer) | **2** (both fac & mer are chiral!) | **4** |

---

## Deep Solved Problems

### Problem 1: Calculating CFSE of [Co(H₂O)₆]²⁺ and [Co(NH₃)₆]³⁺
Calculate the CFSE (in terms of Δₒ and P) for: (a) high-spin [Co(H₂O)₆]²⁺, (b) low-spin [Co(NH₃)₆]³⁺.

**Solution:**
(a) Co²⁺ = 3d⁷, high-spin (weak-field H₂O) → **t₂g⁵ e_g²** (0 extra pairs).
CFSE = [−0.4(5) + 0.6(2)] Δₒ = (−2.0 + 1.2) Δₒ = **−0.8 Δₒ**.

(b) Co³⁺ = 3d⁶, low-spin (strong-field NH₃) → **t₂g⁶ e_g⁰** (2 extra pairs forced compared to free ion's 1 pair: 3 total pairs − 1 free-ion pair = 2 extra pairs).
CFSE = [−0.4(6) + 0.6(0)] Δₒ + 2P = **−2.4 Δₒ + 2P**.

Jaanch: −2.0 + 1.2 = −0.8 Δₒ; −2.4 + 0 = −2.4 Δₒ (highest possible CFSE in octahedral field!) ✅

---

### Problem 2: EAN Rule & Metal–Metal Bond Prediction
Calculate the EAN of Fe in [Fe(CN)₆]³⁻ and predict the number of Fe–Fe bonds in [Fe₂(CO)₉] assuming each Fe obeys the EAN = 36 rule.

**Solution:**
- **[Fe(CN)₆]³⁻:** Fe (Z = 26), OS = +3, CN = 6 → EAN = 26 − 3 + 2(6) = 23 + 12 = **35** (1 short of 36 — exception to EAN rule, still stable!).
- **[Fe₂(CO)₉]:** Total valence/core electrons from 2 Fe (2 × 26 = 52) + 9 CO (9 × 2 = 18) = 70 electrons.
  To reach 2 × 36 = 72 electrons, deficit = 72 − 70 = 2 electrons → **2 / 2 = 1 Fe–Fe bond**!

Jaanch: Per Fe: 26 + 3 terminal CO (6 e⁻) + 3 bridging CO (3 e⁻) + 1 Fe–Fe bond (1 e⁻) = 36 ✅

---

### Problem 3: Determining Preferred Spin State Numerically
For a d⁶ octahedral complex, Δₒ = 18000 cm⁻¹ and pairing energy P = 15000 cm⁻¹. Calculate the total energy of both high-spin and low-spin states and predict which is more stable.

**Solution:**
- **High-spin (t₂g⁴ e_g²):** 1 pair total (0 extra pairs).
  E_HS = −0.4 Δₒ = −0.4 × 18000 = **−7200 cm⁻¹**.
- **Low-spin (t₂g⁶ e_g⁰):** 2 extra pairs over free ion.
  E_LS = −2.4 Δₒ + 2P = −2.4(18000) + 2(15000) = −43200 + 30000 = **−13200 cm⁻¹**.
Since −13200 cm⁻¹ < −7200 cm⁻¹ (more negative = more stable!), the **low-spin state (t₂g⁶ e_g⁰)** is more stable!

Jaanch: Δₒ (18000) > P (15000) → confirms low-spin is favoured ✅

---

### Problem 4: Why [Cu(H₂O)₆]²⁺ Shows Unequal Cu–O Bond Lengths
Experimental X-ray data show that [Cu(H₂O)₆]²⁺ has four shorter Cu–O bonds (198 pm) and two longer axial Cu–O bonds (238 pm). Explain.

**Solution:**
Cu²⁺ has a **3d⁹ (t₂g⁶ e_g³)** configuration — the e_g level is unsymmetrically filled (two electrons in d_z² and one in d_(x²−y²)). Due to greater electron density along the z-axis, the two axial ligands experience stronger electrostatic repulsion and move farther away (**z-out Jahn–Teller distortion**), lowering overall energy by splitting both e_g and t₂g levels.

Jaanch: Unsymmetrical e_g³ → strong Jahn–Teller elongation along z-axis ✅

---

### Problem 5: Stereoisomers of Tris(glycinato)cobalt(III), [Co(gly)₃]
How many geometrical and total stereoisomers exist for [Co(gly)₃], where gly⁻ = H₂N–CH₂–COO⁻ is an unsymmetrical bidentate ligand (AB)?

**Solution:**
- **Geometrical isomers:** 2 — **fac** (all three N donors on one triangular face, all three O donors on the opposite face) and **mer** (two N donors trans to each other).
- **Optical activity:** Neither fac nor mer has a plane of symmetry → **both are chiral** (each exists as a d/l enantiomer pair!).
- **Total stereoisomers = 2 × 2 = 4.**

Jaanch: fac (d, l) + mer (d, l) = 4 stereoisomers ✅

---

## Advanced Practice Questions

1. Calculate the CFSE (in units of Δₒ) for: (a) [Cr(H₂O)₆]³⁺, (b) [Mn(H₂O)₆]²⁺ (high-spin), (c) [Fe(CN)₆]⁴⁻ (low-spin, include extra P term).
2. Calculate the CFSE (in units of Δₜ) for tetrahedral [CoCl₄]²⁻ (Co²⁺ = 3d⁷).
3. Calculate the EAN of central metal in: (a) [Co(NH₃)₆]³⁺, (b) [PtCl₆]²⁻ (Pt: Z = 78), (c) [V(CO)₆] (V: Z = 23). Which one does not obey EAN = noble gas?
4. Arrange [Ti(CO)₆]²⁻, [V(CO)₆]⁻, [Cr(CO)₆], and [Mn(CO)₆]⁺ in increasing order of C–O bond length.
5. Which of the following octahedral complexes will show strong Jahn–Teller distortion: [Cr(H₂O)₆]³⁺, [Cr(H₂O)₆]²⁺ (high-spin), [Ni(H₂O)₆]²⁺, [Cu(NH₃)₆]²⁺?
6. For a d⁴ octahedral complex, Δₒ = 14000 cm⁻¹ and P = 20000 cm⁻¹. Predict whether it is high-spin or low-spin and calculate its CFSE in cm⁻¹.
7. Find the total number of stereoisomers of: (a) [Pt(NH₃)(Br)(Cl)(py)] (square planar), (b) [Co(NH₃)₂(H₂O)₂Cl₂]⁺ (octahedral).
8. Using the 18-electron rule, find the value of x in [Fe(CO)ₓ] and [Co₂(CO)ₓ] (with 1 Co–Co bond).
9. Why is [V(CO)₆] (17 valence e⁻) easily reduced to [V(CO)₆]⁻?
10. If Δₒ for [Co(H₂O)₆]²⁺ is 9300 cm⁻¹, estimate Δₜ for [CoCl₄]²⁻ (assuming similar ligand effect using Δₜ = 4/9 Δₒ).

---

### Solutions

1. (a) Cr³⁺ = 3d³ (t₂g³ e_g⁰): CFSE = −0.4(3) Δₒ = **−1.2 Δₒ**.
   (b) Mn²⁺ = 3d⁵ (t₂g³ e_g²): CFSE = [−0.4(3) + 0.6(2)] Δₒ = **0.0 Δₒ**.
   (c) Fe²⁺ = 3d⁶ low-spin (t₂g⁶ e_g⁰): CFSE = **−2.4 Δₒ + 2P**.
   Jaanch: −1.2 + 1.2 = 0 for high-spin d⁵ ✅
2. Co²⁺ = 3d⁷ in tetrahedral field (e⁴ t₂³):
   CFSE = [−0.6(4) + 0.4(3)] Δₜ = (−2.4 + 1.2) Δₜ = **−1.2 Δₜ**.
   Jaanch: e holds 4 e⁻, t₂ holds 3 e⁻ → −2.4 + 1.2 = −1.2 Δₜ ✅
3. (a) Co (27) − 3 + 12 = **36 (Kr)** — obeys.
   (b) Pt (78) − 4 + 12 = **86 (Rn)** — obeys.
   (c) V (23) − 0 + 12 = **35** — does **NOT** obey EAN = 36 (17-electron radical!).
   Jaanch: 27−3+12=36, 78−4+12=86, 23+12=35 ✅
4. Greater negative charge on metal → more π* back-donation → **longer C–O bond**.
   Increasing C–O bond length: **[Mn(CO)₆]⁺ < [Cr(CO)₆] < [V(CO)₆]⁻ < [Ti(CO)₆]²⁻**.
5. Strong Jahn–Teller occurs for unsymmetrical e_g: **[Cr(H₂O)₆]²⁺** (high-spin d⁴: t₂g³ e_g¹) and **[Cu(NH₃)₆]²⁺** (d⁹: t₂g⁶ e_g³). (Cr³⁺ d³ and Ni²⁺ d⁸ have symmetrical e_g⁰ and e_g² → no distortion.)
6. Since Δₒ (14000) < P (20000), it is **high-spin (t₂g³ e_g¹)**.
   CFSE = [−0.4(3) + 0.6(1)] Δₒ = −0.6 × 14000 = **−8400 cm⁻¹**.
   Jaanch: Low-spin would be −1.6(14000) + 20000 = −22400 + 20000 = −2400 cm⁻¹ (less stable than −8400 cm⁻¹) ✅
7. (a) Square planar Mabcd → **3** stereoisomers (all achiral).
   (b) Octahedral Ma₂b₂c₂ → **6** stereoisomers (5 geometrical, of which the all-cis isomer is chiral → 1 d/l pair).
8. - [Fe(CO)ₓ]: Fe (8 valence e⁻) + 2x = 18 → 2x = 10 → **x = 5** ([Fe(CO)₅]).
   - [Co₂(CO)ₓ]: 2 Co (18 valence e⁻) + 2x + 2 (1 Co–Co bond) = 36 → 2x = 16 → **x = 8** ([Co₂(CO)₈]).
   Jaanch: 8 + 10 = 18; (18 + 16 + 2)/2 = 18 per Co ✅
9. [V(CO)₆] has EAN = 35 (17 valence e⁻, paramagnetic radical). Gaining 1 electron forms **[V(CO)₆]⁻** with EAN = **36 (18 valence e⁻)**, achieving noble gas stability!
10. Δₜ = (4/9) × Δₒ = (4/9) × 9300 = **4133 cm⁻¹**.
    Jaanch: 4 × 9300 = 37200; 37200 / 9 = 4133.3 cm⁻¹ ✅

---

Wapas core chapter wrap-up par jaane ke liye dekho: [Mixed Problems & Chapter Wrap-up](coordination-compounds-part5.md).
