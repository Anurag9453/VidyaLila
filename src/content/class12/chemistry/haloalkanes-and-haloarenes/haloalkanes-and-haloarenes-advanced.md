> **Class:** 12 | **Subject:** Chemistry | **Chapter 6:** Haloalkanes and Haloarenes (Gehrai Mein — Advanced Level)

# Haloalkanes and Haloarenes — Gehrai Mein (Advanced Level)

> **Core chapter se bridge:** Core lessons ([Part 1: C–X Bond](haloalkanes-and-haloarenes.md) se [Part 5: Conversions](haloalkanes-and-haloarenes-part5.md) tak) mein humne SN1, SN2, Zaitsev elimination, chirality aur haloarenes padhe. Ab competitive-exam depth mein hum **Cahn–Ingold–Prelog (R/S) Configuration, Solvent Effects & Nucleophilicity, SNi Mechanism (SOCl₂ with vs without Pyridine), Neighbouring Group Participation (NGP), aur SNAr vs Benzyne Mechanisms** cover karenge.

---

Akshara ek organic mechanism tutorial mein ek surprising result dekh rahi thi: optically active (S)-2-butanol ko jab pure **SOCl₂** ke saath react karwaya gaya, toh **(S)-2-chlorobutane (Retention!)** mila — par jaise hi usmein thoda **pyridine** dala gaya, product **(R)-2-chlorobutane (Inversion!)** ban gaya! Mentor ne samjhaya: "Bina pyridine ke reaction **SNi (Internal Nucleophilic Substitution)** se jati hai, aur pyridine dalte hi Cl⁻ free hokar **SN2 backside attack** kar deta hai!"

---

## 1. Cahn–Ingold–Prelog (CIP) Rules for R/S Configuration

Har chiral carbon ko exact 3D naam (**R = Rectus / clockwise** ya **S = Sinister / anticlockwise**) dene ke 3 steps:
1. **Assign Priority (1 > 2 > 3 > 4)** to the 4 atoms directly attached to the chiral carbon by **higher atomic number (Z)** (e.g., I > Br > Cl > S > F > O > N > C > D > H).
   - Tie? Move outward atom-by-atom until the first point of difference!
   - Multiple bonds count as duplicate/triplicate atoms: –CH=O counts as C bonded to (O, O, H); –C≡N counts as C bonded to (N, N, N).
2. **Place lowest priority group (4) away from you** (on dashed bond; or on vertical bond in a Fischer projection!).
3. **Trace arrow 1 → 2 → 3:**
   - **Clockwise → R**
   - **Anticlockwise → S**
   - *(Shortcut: If group 4 is on a wedge / horizontal bond in Fischer, simply **reverse** the apparent result: clockwise → S, anticlockwise → R!)*

---

## 2. Solvent Effects & Halide Nucleophilicity Order

| Solvent Type | Examples | Solvation of Anions (Nu⁻) | Halide Nucleophilicity Order | Favours |
|---|---|---|---|---|
| **Polar Protic** (H-bond donors) | H₂O, ROH, HCOOH | Strongly solvates small F⁻ (cages it!) | **I⁻ > Br⁻ > Cl⁻ > F⁻** | **SN1** (stabilises both carbocation & X⁻) |
| **Polar Aprotic** (No O–H / N–H) | DMSO, DMF, Acetone, CH₃CN | Poorly solvates anions ("naked" anions!) | **F⁻ > Cl⁻ > Br⁻ > I⁻** (basicity wins!) | **SN2** (naked Nu⁻ attacks super fast!) |

---

## 3. SNi Mechanism & Neighbouring Group Participation (NGP)

### (a) SNi (Substitution Nucleophilic Internal)
- **R–OH + SOCl₂ (no base, ether):** Forms alkyl chlorosulphite (R–O–SOCl) which collapses intramolecularly via a 4-membered cyclic transition state → **Retention of configuration!**
- **R–OH + SOCl₂ + Pyridine:** Pyridine traps HCl to generate free **Cl⁻**, which performs backside **SN2 attack** on R–O–SOCl → **Inversion of configuration!**

### (b) Neighbouring Group Participation (NGP / Anchimeric Assistance)
When a molecule has an internal nucleophile (lone pair on –SR, –NR₂, –O⁻, –OCOCH₃, or π-bond) at the β-position:
- Step 1: Internal group attacks from the back, kicking out leaving group X⁻ (**1st inversion** → forms cyclic intermediate like episulphonium ion).
- Step 2: External nucleophile opens the cyclic intermediate from the back (**2nd inversion**).
- **Net result:** **Double Inversion = Overall RETENTION of configuration**, PLUS a massive rate acceleration (**10³ to 10⁶ times faster** than normal SN2)!
- Classic example: **Mustard gas (Cl–CH₂–CH₂–S–CH₂–CH₂–Cl)** hydrolyses extraordinarily fast via cyclic episulphonium ion!

---

## 4. Nucleophilic Aromatic Substitution: SNAr vs Benzyne Mechanism

### (a) Addition–Elimination (SNAr / Meisenheimer Complex)
- Requires strong **electron-withdrawing groups (–NO₂, –CN)** at **ortho/para** to the halogen.
- Rate-determining step (Step 1): Nucleophile adds to ipso-carbon to form resonance-stabilised **Meisenheimer carbanion** (aromaticity temporarily lost).
- Step 2 (Fast): Leaving group X⁻ departs, restoring aromaticity.
- **Shocking Reactivity Order (OPPOSITE to SN1/SN2!):** **Ar–F >> Ar–Cl > Ar–Br > Ar–I**!
  Why? Because C–X bond does NOT break in the RDS! Strongly electronegative **F** creates the largest δ⁺ on ipso-carbon and stabilises the carbanion intermediate best!

### (b) Elimination–Addition (Benzyne Mechanism)
- Occurs when **NO activating –NO₂ group** is present, using an ultra-strong base like **NaNH₂ / liquid NH₃** (or NaOH at 623 K):
  C₆H₅–Cl + NaNH₂ —(liq. NH₃)→ [Benzyne intermediate (C₆H₄)] —(NH₃)→ **C₆H₅–NH₂ (Aniline)**.
- **Cine-substitution proof:** With ¹⁴C-labelled chlorobenzene (¹⁴C at C1), **50% of aniline has –NH₂ at ¹⁴C (ipso)** and **50% at adjacent C2 (ortho)** — proving the symmetrical **benzyne** intermediate!
- **Requirement:** Must have at least one **ortho-hydrogen**! (2,6-dimethylchlorobenzene has no ortho-H → NO benzyne reaction!)

---

## Deep Solved Problems

### Problem 1: Assigning R/S Configuration
Assign the R/S configuration to the chiral centre in **2-bromobutane** where C2 has: –Br (wedge), –C₂H₅ (in-plane left), –CH₃ (in-plane right), and –H (dash).

**Solution:**
1. Priorities by atomic number: –Br (Z = 35, **#1**) > –CH₂CH₃ (C bonded to C,H,H, **#2**) > –CH₃ (C bonded to H,H,H, **#3**) > –H (Z = 1, **#4**).
2. Group #4 (–H) is on the **dash (away)**.
3. Going #1 (Br, top/wedge) → #2 (C₂H₅, left) → #3 (CH₃, right) goes **anticlockwise** → **(S)-2-bromobutane**.

Jaanch: Z(Br)=35 > C(C,H,H) > C(H,H,H) > H; 1→2→3 anticlockwise with H on dash = S ✅

---

### Problem 2: SNAr Reactivity Order of Halonitrobenzenes
Arrange 1-fluoro-2,4-dinitrobenzene, 1-chloro-2,4-dinitrobenzene, and 1-iodo-2,4-dinitrobenzene in decreasing order of rate of reaction with CH₃O⁻ (methoxide).

**Solution:**
This reaction proceeds via the **Addition–Elimination (SNAr)** mechanism where nucleophilic attack (Step 1) is the rate-determining step. The more electronegative the halogen, the greater the δ⁺ on the ipso carbon and the better the stabilisation of the Meisenheimer carbanion.
Decreasing rate: **1-Fluoro-2,4-dinitrobenzene > 1-Chloro-2,4-dinitrobenzene > 1-Iodo-2,4-dinitrobenzene**.

Jaanch: SNAr order is Ar–F >> Ar–Cl > Ar–Br > Ar–I (opposite to aliphatic SN1/SN2!) ✅

---

### Problem 3: Predicting Benzyne Isotopic Distribution
Chlorobenzene labelled with ¹⁴C at C1 is treated with KNH₂ in liquid NH₃. What products are formed and in what approximate ratio?

**Solution:**
Elimination of HCl across C1–C2 forms the symmetrical **¹⁴C-benzyne** intermediate (triple bond between ¹⁴C1 and C2). Subsequent attack by NH₂⁻ occurs equally at ¹⁴C1 and C2:
- **50% [1-¹⁴C]-aniline** (ipso-substitution)
- **50% [2-¹⁴C]-aniline** (cine-substitution)

Jaanch: Equal attack on both ends of the benzyne triple bond gives ~50:50 distribution ✅

---

### Problem 4: SNi vs SN2 Stereochemical Outcome
Predict the stereochemical product when **(R)-1-phenylethanol** reacts with:
(a) SOCl₂ in diethyl ether (no base)
(b) SOCl₂ in the presence of pyridine

**Solution:**
(a) Without pyridine → **SNi mechanism** → **Retention of configuration** → **(R)-1-chloro-1-phenylethane**.
(b) With pyridine → free Cl⁻ does backside **SN2 attack** → **Inversion of configuration** → **(S)-1-chloro-1-phenylethane**.

Jaanch: SNi = retention (R → R); SN2 = inversion (R → S) ✅

---

### Problem 5: Explaining Why Bridgehead Halides Fail Both SN1 and SN2
Explain why **1-bromobicyclo[2.2.1]heptane** (a bridgehead 3° halide) is almost completely unreactive in BOTH SN2 and SN1 reactions.

**Solution:**
- **Fails SN2:** The rigid bicyclic cage completely blocks **backside attack** by any nucleophile.
- **Fails SN1:** A carbocation requires a **planar sp² geometry (120° bond angles)** for stability. The rigid bridgehead carbon cannot flatten without extreme angle strain (**Bredt's rule**), making the bridgehead carbocation impossibly high in energy!

Jaanch: Blocked backside (no SN2) + impossible planar carbocation (no SN1) ✅

---

## Advanced Practice Questions

1. Arrange the following groups in decreasing CIP priority order: –COOH, –CHO, –CH₂OH, –OH.
2. In polar aprotic solvent (DMSO), arrange F⁻, Cl⁻, Br⁻, and I⁻ in increasing order of nucleophilicity. How does this order change in water (polar protic)?
3. Why does 2-chloroethyl ethyl sulphide (C₂H₅–S–CH₂–CH₂–Cl) hydrolyse thousands of times faster than 1-chloropentane in aqueous ethanol?
4. Predict the major product(s) when **p-chlorotoluene** is treated with NaNH₂ in liquid NH₃.
5. Why does **2,6-dimethylchlorobenzene** fail to react with NaNH₂ in liquid NH₃?
6. Explain why 1-fluoro-4-nitrobenzene reacts much faster with NaOCH₃ than 1-bromo-4-nitrobenzene.
7. An optically active alcohol (R)-CH₃CH(OH)C₂H₅ is treated with PBr₃. Does the product have R or S configuration? (Hint: PBr₃ goes via SN2!)
8. Why does the rate of SN2 reaction of CH₃Br + I⁻ increase dramatically when the solvent is changed from methanol to acetone?
9. What is the maximum number of stereoisomers possible for **2,3-dichlorobutane** (which has a plane of symmetry in one form — meso)?
10. Why does neopentyl bromide ((CH₃)₃C–CH₂–Br), despite being a 1° alkyl halide, react extremely slowly by SN2?

---

### Solutions

1. Compare first atom (Z), then attached atoms:
   - **–OH** (O, Z = 8) → **#1**
   - **–COOH** (C bonded to O, O, O) → **#2**
   - **–CHO** (C bonded to O, O, H) → **#3**
   - **–CH₂OH** (C bonded to O, H, H) → **#4**
   Order: **–OH > –COOH > –CHO > –CH₂OH**.
2. - In **DMSO (polar aprotic):** Anions are unsolvated → basicity dominates → **I⁻ < Br⁻ < Cl⁻ < F⁻**.
   - In **H₂O (polar protic):** Small F⁻ is heavily H-bonded/caged → **F⁻ < Cl⁻ < Br⁻ < I⁻**.
3. Via **Neighbouring Group Participation (NGP)**: the sulphur lone pair performs rapid intramolecular backside attack to form a 3-membered **episulphonium ion** (kicking out Cl⁻), which is then rapidly opened by water — giving huge rate enhancement and overall retention.
4. Elimination forms **4-methylbenzyne** (triple bond between C3 and C4 of the toluene ring). NH₂⁻ attacks both ends to give a ~50:50 mixture of **m-toluidine (3-methylaniline)** and **p-toluidine (4-methylaniline)**.
5. Because **both ortho positions** (C2 and C6) are occupied by –CH₃ groups — there is **no ortho-hydrogen** available to eliminate HCl and form a benzyne intermediate!
6. Because SNAr proceeds by Addition–Elimination where nucleophilic attack (not C–X cleavage) is the RDS; fluorine's strong −I effect activates C1 and stabilises the Meisenheimer anion far better than bromine.
7. PBr₃ converts –OH into –OPBr₂, followed by backside **SN2 attack** by Br⁻ → **inversion of configuration** → **(S)-2-bromobutane**!
8. Methanol (polar protic) H-bonds strongly to I⁻, lowering its reactivity. Acetone (polar aprotic) leaves I⁻ unsolvated ("naked") and high in energy, drastically lowering ΔG‡ for SN2!
9. 2,3-Dichlorobutane has 2 identical chiral carbons → **(2R,3R)**, **(2S,3S)** (enantiomer pair), and **meso-(2R,3S)** (achiral, has plane of symmetry) → **3 stereoisomers total**!
   Jaanch: 2² − 1 (meso duplicates itself) = 3 stereoisomers ✅
10. Because the bulky **tert-butyl group** on the β-carbon severely shields the backside of the C1–Br bond, creating massive **steric hindrance** against the incoming SN2 nucleophile!

---

Wapas core chapter wrap-up par jaane ke liye dekho: [Mixed Conversions & Chapter Wrap-up](haloalkanes-and-haloarenes-part5.md).
