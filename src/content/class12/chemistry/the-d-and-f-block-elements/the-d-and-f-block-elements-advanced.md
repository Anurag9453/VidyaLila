> **Class:** 12 | **Subject:** Chemistry | **Chapter 4:** The d- and f-Block Elements (Gehrai Mein — Advanced Level)

# The d- and f-Block Elements — Gehrai Mein (Advanced Level)

> **Core chapter se bridge:** Core lessons ([Part 1: Electronic Configuration](the-d-and-f-block-elements.md) se [Part 5: Mixed Problems](the-d-and-f-block-elements-part5.md) tak) mein humne 3d trends, μ = √[n(n+2)], K₂Cr₂O₇/KMnO₄ aur f-block contractions padhe. Ab competitive-exam level par hum **Born–Haber thermodynamics of E°(M²⁺/M), disproportionation energetics (Latimer diagrams), Charge-Transfer Spectra, aur multi-step redox titrations** cover karenge.

---

Sima ek inorganic research lab mein thi jahan chemist ne white Cu₂SO₄ ko paani mein ghola — aur kuch hi seconds mein neela Cu²⁺ solution aur laal-bhoora metallic copper powder niche baith gaya! Sima ne poocha, "Cu⁺ (3d¹⁰) toh full shell hone ki wajah se stable hona chahiye tha, phir paani mein aate hi woh khud ko Cu²⁺ aur Cu mein kyun tod leta hai?" Chemist ne kaha, "Gas phase mein Cu⁺ stable hai, par paani mein **Cu²⁺ ki hydration enthalpy** itni zyada negative hoti hai ki woh IE₂ ko hara deti hai!"

---

## 1. Born–Haber Cycle for E°(M²⁺/M) and Disproportionation of Cu⁺

Solid metal M(s) se aqueous M²⁺(aq) banne ki total enthalpy change:
**ΔH_total = Δ_sub H° (atomisation) + IE₁ + IE₂ + Δ_hyd H° (hydration)**

- **More negative ΔH_total → more negative E°(M²⁺/M)** (easier oxidation).
- **Why Cu⁺ disproportionates in aqueous solution:**
  2Cu⁺(aq) → Cu²⁺(aq) + Cu(s)
  Standard reduction potentials:
  - Cu⁺ + e⁻ → Cu(s), E°₁ = +0.52 V
  - Cu²⁺ + e⁻ → Cu⁺, E°₂ = +0.15 V
  For disproportionation: E°_cell = E°(cathode: Cu⁺/Cu) − E°(anode: Cu²⁺/Cu⁺) = 0.52 − 0.15 = **+0.37 V > 0** (spontaneous!).
  **Thermodynamic reason:** Although IE₂ of Cu is high, the **hydration enthalpy of Cu²⁺ (−2100 kJ mol⁻¹)** is much more negative than that of Cu⁺ (−593 kJ mol⁻¹) due to higher charge (+2) and smaller size, driving disproportionation!
- **Exception:** Insoluble Cu(I) compounds like CuI, CuCl, Cu₂S, CuCN do NOT disproportionate because they do not hydrate freely in water.

---

## 2. Latimer Diagrams & Disproportionation Criterion

In a Latimer diagram, species are written from highest to lowest oxidation state with E° values on arrows:
M^(n+1) —(E°_left)→ M^n —(E°_right)→ M^(n-1)

**Golden Rule for Disproportionation:**
Species **M^n** will spontaneously disproportionate into M^(n+1) and M^(n-1) if and only if:
**E°_right > E°_left** (so E°_cell = E°_right − E°_left > 0!).

**Combining non-adjacent potentials (using ΔG° = −nFE°):**
If A → B takes n₁ electrons with E°₁, and B → C takes n₂ electrons with E°₂, then for A → C (n₃ = n₁ + n₂):
**E°₃ = (n₁ E°₁ + n₂ E°₂) / (n₁ + n₂)**

**Classic Example: Disproportionation of MnO₄²⁻ in acidic medium**
- MnO₄⁻ (+7) → MnO₄²⁻ (+6): E°_left = +0.56 V
- MnO₄²⁻ (+6) → MnO₂ (+4): E°_right = +2.26 V
Since E°_right (+2.26 V) > E°_left (+0.56 V), **MnO₄²⁻ spontaneously disproportionates**:
3MnO₄²⁻ + 4H⁺ → 2MnO₄⁻ + MnO₂ + 2H₂O (E°_cell = 2.26 − 0.56 = **+1.70 V**!).

---

## 3. Charge-Transfer (CT) Spectra vs d–d Transitions

Why are d⁰ complexes like MnO₄⁻ (deep purple), Cr₂O₇²⁻ (bright orange), and CrO₄²⁻ (bright yellow) intensely coloured — **100 to 1000 times more intense** than d–d coloured ions like [Mn(H₂O)₆]²⁺ (very pale pink)?

1. **d–d transitions** are **Laporte-forbidden** (same parity: d → d) and in Mn²⁺ (d⁵) also **spin-forbidden** (every jump flips a spin!) → weak absorption, pale colours.
2. **Ligand-to-Metal Charge Transfer (LMCT):** An electron transfers from a filled oxygen p-orbital (O²⁻) to an empty metal d-orbital (Mn⁷⁺, Cr⁶⁺, V⁵⁺). Because p → d changes parity, LMCT is **fully Laporte-allowed AND spin-allowed** → huge molar absorptivity, deep intense colours!
3. **Order of LMCT energy (and colour shift):** Higher oxidation state on smaller central metal lowers d-orbital energy → smaller energy gap → absorption shifts to longer wavelength (lower energy):
   - VO₄³⁻ (V⁵⁺) → pale yellow (absorbs violet)
   - CrO₄²⁻ (Cr⁶⁺) → bright yellow
   - MnO₄⁻ (Mn⁷⁺) → deep purple (absorbs green-yellow, lowest CT gap!)

---

## 4. Advanced Redox Titrations (Double Oxidation & Back Titrations)

When a salt has **both cation and anion oxidisable** by KMnO₄ or K₂Cr₂O₇, sum their individual electron losses to get the **total n-factor**:
- **FeC₂O₄ (Ferrous oxalate):** Fe²⁺ → Fe³⁺ (1e⁻) + C₂O₄²⁻ → 2CO₂ (2e⁻) → **n-factor = 3**.
- **Fe₂(C₂O₄)₃ (Ferric oxalate):** Fe³⁺ is already oxidised (0e⁻); 3 C₂O₄²⁻ → 6CO₂ (3 × 2 = 6e⁻) → **n-factor = 6**.
- **Cu₂S + MnO₄⁻ (acidic) → Cu²⁺ + SO₂:** 2 Cu⁺ → 2 Cu²⁺ (2e⁻) + S²⁻ → S⁴⁺ (6e⁻) → **n-factor = 8**.
- **KHC₂O₄·H₂C₂O₄·2H₂O (Potassium tetroxalate):** 2 C₂O₄²⁻ units → **redox n-factor = 4**, while **acid-base n-factor = 3** (3 replaceable H⁺)!

---

## Deep Solved Problems

### Problem 1: Non-Adjacent Potential Calculation from Latimer Diagram
Given for manganese in acidic medium:
- MnO₄⁻ → MnO₂ (3e⁻): E°₁ = +1.70 V
- MnO₂ → Mn²⁺ (2e⁻): E°₂ = +1.23 V
Calculate E° for the 5-electron reduction MnO₄⁻ → Mn²⁺.

**Solution:**
Using ΔG°₃ = ΔG°₁ + ΔG°₂ → n₃ E°₃ = n₁ E°₁ + n₂ E°₂:
5 × E°₃ = (3 × 1.70) + (2 × 1.23) = 5.10 + 2.46 = 7.56 V
E°₃ = 7.56 / 5 = **+1.512 V**.

Jaanch: Weighted average lies between 1.23 V and 1.70 V, closer to 1.70 V (weight 3 vs 2): 3(1.70) + 2(1.23) = 7.56; 7.56/5 = 1.512 V ✅

---

### Problem 2: Predicting Disproportionation of Mn³⁺
Given E°(MnO₂/Mn³⁺) = +0.95 V and E°(Mn³⁺/Mn²⁺) = +1.51 V in acidic medium, determine whether Mn³⁺ will disproportionate into MnO₂ and Mn²⁺, and calculate E°_cell.

**Solution:**
Write Latimer segment: MnO₂ (+4) —(+0.95 V)→ Mn³⁺ (+3) —(+1.51 V)→ Mn²⁺ (+2).
Since E°_right (+1.51 V) > E°_left (+0.95 V), **Mn³⁺ spontaneously disproportionates!**
Reaction: 2Mn³⁺ + 2H₂O → MnO₂ + Mn²⁺ + 4H⁺
E°_cell = 1.51 − 0.95 = **+0.56 V**.

Jaanch: Positive E°_cell (+0.56 V) → ΔG° = −nFE° < 0 → spontaneous ✅

---

### Problem 3: Mixture of FeC₂O₄ and Fe₂(C₂O₄)₃ with KMnO₄
A mixture contains 0.50 mol of FeC₂O₄ and 0.25 mol of Fe₂(C₂O₄)₃. How many moles of acidified KMnO₄ are needed for complete oxidation?

**Solution:**
- Equivalents of FeC₂O₄ (n = 3) = 0.50 × 3 = 1.50 eq.
- Equivalents of Fe₂(C₂O₄)₃ (n = 6) = 0.25 × 6 = 1.50 eq.
Total equivalents = 1.50 + 1.50 = 3.00 eq.
For acidic KMnO₄ (n = 5): Moles × 5 = 3.00 → **Moles of KMnO₄ = 0.60 mol**.

Jaanch: 0.60 × 5 = 3.00 mol e⁻ gained; 0.50(3) + 0.25(6) = 3.00 mol e⁻ lost ✅

---

### Problem 4: Spin-Only vs Effective Magnetic Moment in Lanthanoids
Why does the spin-only formula μ = √[n(n+2)] work well for 3d transition ions but FAIL for most 4f lanthanoid ions (except Gd³⁺)?

**Solution:**
In 3d ions, the outer 3d orbitals interact strongly with surrounding ligands, **quenching** the orbital angular momentum (L ≈ 0), so μ ≈ μ_spin. In 4f lanthanoids, the 4f orbitals are deeply buried beneath 5s and 5p shells, so ligands cannot quench their orbital motion! Thus BOTH spin (S) and orbital (L) angular momenta couple (J = L ± S), and μ_eff = g √[J(J+1)] BM.
**Exception:** **Gd³⁺ (4f⁷)** has L = 0 (spherical half-filled shell), so spin-only formula works accurately: μ = √[7(9)] = √63 = **7.94 BM**.

Jaanch: For Gd³⁺, 7 unpaired electrons → √(7×9) = 7.937 ≈ 7.94 BM (matches experimental ~7.9 BM!) ✅

---

### Problem 5: Chromyl Chloride Test Stoichiometry
Write the balanced equation for the chromyl chloride test (teacher demo / theoretical: heating a solid chloride with K₂Cr₂O₇ and conc. H₂SO₄ produces red vapours of CrO₂Cl₂). Which metal chlorides fail this test?

**Solution:**
Balanced equation:
**K₂Cr₂O₇ + 4NaCl + 6H₂SO₄ (conc.) → 2CrO₂Cl₂ (red vapours) + 2KHSO₄ + 4NaHSO₄ + 3H₂O**
When passed into NaOH, yellow Na₂CrO₄ forms: CrO₂Cl₂ + 4NaOH → Na₂CrO₄ + 2NaCl + 2H₂O.
**Chlorides that FAIL this test:** Covalent / insoluble chlorides like **AgCl, Hg₂Cl₂, HgCl₂, PbCl₂, SnCl₂** (they do not easily release Cl⁻ ions to form CrO₂Cl₂).

Jaanch: Cr stays +6 in K₂Cr₂O₇, CrO₂Cl₂, and Na₂CrO₄ (non-redox reaction!). Atoms: 2K, 2Cr, 4Na, 4Cl, 6S, 12H, 31O on both sides ✅

---

## Advanced Practice Questions

1. Given E°(Cu²⁺/Cu) = +0.34 V and E°(Cu⁺/Cu) = +0.52 V, calculate E°(Cu²⁺/Cu⁺) and verify that Cu⁺ disproportionates in water.
2. Calculate the spin-only magnetic moment of Gd³⁺ (Z = 64) and explain why spin-only formula is valid for Gd³⁺.
3. Why is [Mn(H₂O)₆]²⁺ very pale pink, whereas MnO₄⁻ is intensely purple?
4. How many moles of acidified K₂Cr₂O₇ are required to oxidise 1.0 mole of FeC₂O₄ completely?
5. A 0.20 mol sample of Cu₂S is completely oxidised by acidified KMnO₄ to Cu²⁺ and SO₂. Calculate the moles of KMnO₄ consumed.
6. Given E°(Fe³⁺/Fe²⁺) = +0.77 V and E°(Fe²⁺/Fe) = −0.44 V, calculate E°(Fe³⁺/Fe).
7. Explain why AgCl does not give a positive chromyl chloride test while NaCl does.
8. Arrange VO₄³⁻, CrO₄²⁻, and MnO₄⁻ in decreasing order of LMCT absorption energy.
9. Why does CuI NOT disproportionate in water, whereas Cu₂SO₄ does?
10. Find the n-factor of KHC₂O₄·H₂C₂O₄ (potassium tetroxalate) when titrated with: (a) NaOH, (b) acidified KMnO₄.

---

### Solutions

1. Cu²⁺ + 2e⁻ → Cu: ΔG° = −2F(0.34) = −0.68 F.
   Cu⁺ + 1e⁻ → Cu: ΔG° = −1F(0.52) = −0.52 F.
   Subtract: Cu²⁺ + e⁻ → Cu⁺: ΔG° = −0.68 F − (−0.52 F) = −0.16 F → **E°(Cu²⁺/Cu⁺) = +0.16 V**.
   Disproportionation E°_cell = 0.52 − 0.16 = **+0.36 V > 0** → spontaneous!
   Jaanch: (1 × 0.16 + 1 × 0.52) / 2 = 0.68 / 2 = 0.34 V ✅
2. Gd³⁺ = [Xe] 4f⁷ → n = 7 unpaired e⁻, L = 0 (half-filled spherical symmetry).
   μ = √[7(7 + 2)] = √63 = **7.94 BM**.
   Jaanch: 7.94² = 63.04 ≈ 63 ✅
3. [Mn(H₂O)₆]²⁺ (d⁵) has d–d transitions that are both **Laporte-forbidden and spin-forbidden** (very weak, pale pink). MnO₄⁻ (d⁰) exhibits **Laporte-allowed and spin-allowed O²⁻ → Mn⁷⁺ LMCT** (intense purple).
4. FeC₂O₄ has n-factor = 3; acidic K₂Cr₂O₇ has n-factor = 6.
   Moles K₂Cr₂O₇ × 6 = 1.0 × 3 → **0.50 mol K₂Cr₂O₇**.
   Jaanch: 0.50 × 6 = 3.0 mol e⁻ ✅
5. Cu₂S → 2Cu²⁺ + SO₂ loses 2(1) + 6 = 8 electrons (n = 8).
   Equivalents = 0.20 × 8 = 1.60 eq.
   Acidic KMnO₄ (n = 5): Moles = 1.60 / 5 = **0.32 mol**.
   Jaanch: 0.32 × 5 = 1.60 mol e⁻ ✅
6. E°(Fe³⁺/Fe) = [1(0.77) + 2(−0.44)] / 3 = (0.77 − 0.88) / 3 = −0.11 / 3 = **−0.037 V**.
   Jaanch: 3(−0.0367) = −0.11 = 0.77 − 0.88 ✅
7. AgCl is strongly covalent and insoluble in water/acid, so it does not supply free Cl⁻ ions needed to react with K₂Cr₂O₇/H₂SO₄ to form CrO₂Cl₂; NaCl is ionic and readily releases Cl⁻.
8. Higher metal oxidation state lowers d-orbital energy and reduces the LMCT gap.
   Decreasing LMCT energy: **VO₄³⁻ > CrO₄²⁻ > MnO₄⁻**.
9. CuI is highly insoluble in water, so Cu⁺ ions are not free to hydrate and drive disproportionation via the large negative hydration enthalpy of Cu²⁺; Cu₂SO₄ is water-soluble so Cu⁺ immediately disproportionates.
10. KHC₂O₄·H₂C₂O₄ has 3 acidic H⁺ atoms and 2 oxalate (C₂O₄²⁻) groups:
    (a) With NaOH (acid-base): **n = 3**.
    (b) With acidified KMnO₄ (redox, 2 × 2e⁻): **n = 4**.

---

Wapas core chapter wrap-up par jaane ke liye dekho: [Mixed Problems & Chapter Wrap-up](the-d-and-f-block-elements-part5.md).
