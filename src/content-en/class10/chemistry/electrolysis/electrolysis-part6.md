# Chapter: Electrolysis (Part 6)

> **Class:** 10 | **Subject:** Chemistry
> **This file continues from [electrolysis-part5.md](electrolysis-part5.md)** (where we explored industrial applications: copper refining, the chlor-alkali process, anodising of aluminum, and green hydrogen). Chapter introduction: [electrolysis.md](electrolysis.md). For review of the electrochemical discharge series: [electrolysis-part3.md](electrolysis-part3.md).
> **Topics covered in this file:**
> 6. Predict First, Then Verify: Practice and Chapter Summary

---

# Topic 6: Predict First, Then Verify: Practice and Chapter Summary

Throughout this chapter, we explored the separate components of electrolysis: the electrolytic cell, anode and cathode polarities, the migration of ions vs. the flow of electrons, selective discharge, decorative electroplating, industrial refining, and chlor-alkali production.

Now comes the ultimate test of scientific mastery: **given any electrolyte, any concentration, and any electrode material, can you deduce beforehand exactly what chemical products will form at both electrodes?**

In this concluding topic, we establish a robust **four-step prediction algorithm**, crack eight classic examination puzzles, tackle multi-concept challenges connecting back to reactivity and displacement, and bring the entire chapter together into a unified master summary.

---

## The Science Fair Stall: "Predict First, Then Verify"

At the annual regional Science and Technology Fair, tenth-grader Leo was exploring the exhibition hall with his uncle, Mr. Foster. Tucked into the chemistry pavilion was a lively booth with a bold banner overhead: **"Predict First, Then Verify!"**

On the bench, several small transparent electrolytic cells were wired to a regulated 6 V direct current power supply, operated safely by a chemistry instructor. Each cell had an information placard detailing:
1. The chemical identity of the electrolyte
2. The concentration (dilute or concentrated, aqueous or molten)
3. The composition of the electrodes (inert graphite/platinum or active metal)

The challenge was simple: before the instructor closed the knife switch, students had to write down their predictions for the cathode product, anode product, and any observable changes in the liquid. Each verified prediction earned a gold star!

A visitor stepped up to the bench, examined the card for **dilute sodium sulfate solution**, and confidently announced: *"Sodium metal will plate out at the negative electrode!"*

The instructor closed the switch. Instantly, streams of colorless gas bubbles erupted at both electrodes; zero solid metal appeared. The visitor looked bewildered, but Leo quickly noted in his journal: *"I almost made that same mistake last week. Is there a foolproof method to predict the exact products every time, without relying on guesswork?"*

Mr. Foster smiled. *"There certainly is, Leo. It is a systematic four-step algorithm. Let us master the four steps, and then solve every puzzle on the table."*

> [!WARNING]
> **Laboratory Safety Reminder:**
> All electrochemical reactions in this topic are presented for **theoretical study** or **teacher-conducted demonstrations**. Toxic gases such as chlorine ($\text{Cl}_2$) and bromine ($\text{Br}_2$), high-temperature molten salts, and concentrated acids require strict engineering controls (such as certified fume cupboards). Students must never collect or ignite hydrogen/oxygen mixtures.

---

## Key Vocabulary

| Term | Meaning (Plain Language) | Example |
|---|---|---|
| **Prediction** | Deducing the outcome of an experiment beforehand using systematic scientific laws | Predicting that $\text{H}_2$ gas forms at the cathode |
| **Discharge order** | The hierarchical ranking of ions indicating the ease with which they accept or surrender electrons | $\text{Cu}^{2+}$ discharges before $\text{H}^+$ |
| **Inert electrode** | An unreactive electrode that provides a conductive surface for electron transfer without dissolving | Platinum wire, graphite rod |
| **Active electrode** | A metallic electrode that participates directly in oxidation by dissolving into solution | Pure copper anode in $\text{CuSO}_4$ solution |
| **Half-equation** | A balanced chemical equation showing the oxidation or reduction process at a single electrode | $\text{Cu}^{2+} + 2\text{e}^- \rightarrow \text{Cu}$ |
| **Overall equation** | The combined equation representing the net chemical decomposition in the cell | $2\text{HCl} \rightarrow \text{H}_2 + \text{Cl}_2$ |
| **Ion inventory** | The comprehensive list of all cation and anion species present in the system | In aqueous $\text{NaCl}$: $\text{Na}^+$, $\text{Cl}^-$, $\text{H}^+$, $\text{OH}^-$ |

---

## Part A: The Four-Step Prediction Algorithm

Follow these four steps for any electrolytic problem:

```
    STEP 1                  STEP 2                   STEP 3              STEP 4
  Complete Ion    ====>  Select Preferential  ====>  Write Balanced ====> State Observable
   Inventory               Discharge Ions             Half-Equations        Changes
  (Include H⁺/OH⁻        (Account for Series,       (Balance Atoms      (Gases, Deposits,
   if Aqueous;            Concentration, and         and Charge;         Colors, pH of
   Omit if Molten)        Active Electrodes)         Combine to Net)     Electrolyte)
```

> **Figure 6.1** – The Four-Step Prediction Algorithm. Step 2 applies the three governing rules: position in the discharge series, ion concentration, and electrode reactivity.

1. **Compile the complete ion inventory:** List every cation and anion present in the electrolyte. If the electrolyte is an aqueous solution, add $\text{H}^+$ and $\text{OH}^-$ from water to the list. If it is molten, list only the compound's own ions (no water is present).
2. **Apply the selection rules:** At the cathode, select the cation situated highest in discharge ease (lowest in metal reactivity: $\text{Ag}^+ > \text{Cu}^{2+} > \text{H}^+ > \text{Pb}^{2+} \dots > \text{K}^+$). At the anode, check the electrode material first: if it is active ($\text{Cu}$, $\text{Ag}$, $\text{Ni}$), the anode itself oxidises and dissolves; if inert, select the anion most easily discharged ($\text{I}^- > \text{Br}^- > \text{Cl}^- > \text{OH}^-$) and check concentration (concentrated chloride yields $\text{Cl}_2$, very dilute yields $\text{O}_2$; oxo-anions like $\text{NO}_3^-$ and $\text{SO}_4^{2-}$ never discharge from solution).
3. **Write balanced half-equations:** Cathode reduction (electrons gained) and anode oxidation (electrons lost). Balance both atoms and net electrical charges.
4. **Predict observable changes:** State what is physically seen (gas bubbling, metal deposition, color changes) and whether the remaining electrolyte becomes acidic, alkaline, or remains unchanged.

---

### The Rules at a Glance

| Site & Condition | Selection Rule | Standard Outcome |
|---|---|---|
| **Cathode (Aqueous)** | Lower in reactivity series discharges first | $\text{Ag}^+ \rightarrow \text{Ag}$; $\text{Cu}^{2+} \rightarrow \text{Cu}$; for metals above $\text{H}^+$, $\text{H}^+ \rightarrow \text{H}_2\text{ (g)}$ |
| **Cathode (Molten)** | Sole metal cation discharges | $\text{Na}^+ \rightarrow \text{Na}$; $\text{Ca}^{2+} \rightarrow \text{Ca}$; $\text{Al}^{3+} \rightarrow \text{Al}$ |
| **Anode (Inert, Halide)** | Concentrated $\text{I}^-$, $\text{Br}^-$, $\text{Cl}^-$ discharges | $2\text{X}^- \rightarrow \text{X}_2 + 2\text{e}^-$ |
| **Anode (Inert, Oxo-anion or Dilute)** | $\text{SO}_4^{2-}$, $\text{NO}_3^-$ never discharge; dilute $\text{Cl}^-$ gives way | $4\text{OH}^- \rightarrow 2\text{H}_2\text{O} + \text{O}_2 + 4\text{e}^-$ |
| **Anode (Active Metal)** | Electrode metal oxidises directly | $\text{M} \rightarrow \text{M}^{n+} + n\text{e}^-$ (anode erodes; no gas) |
| **Anode (Molten Salt)** | Sole non-metal anion discharges | $2\text{Cl}^- \rightarrow \text{Cl}_2 + 2\text{e}^-$; $2\text{O}^{2-} \rightarrow \text{O}_2 + 4\text{e}^-$ |

---

## Part B: Eight Core Puzzles with Complete Solutions

Let us apply our four-step algorithm to the eight showcase puzzles at the Science Fair.

---

### Puzzle 1: Concentrated KI Solution, Graphite Electrodes

- **Step 1 (Ions):** Cations: $\text{K}^+$, $\text{H}^+$; Anions: $\text{I}^-$, $\text{OH}^-$.
- **Step 2 (Selection):**
  - Cathode (−): $\text{H}^+$ lies far below $\text{K}^+$ in reactivity $\rightarrow$ **$\text{H}^+$ discharges**.
  - Anode (+): Graphite is inert. Halide $\text{I}^-$ discharges preferentially over $\text{OH}^-$ $\rightarrow$ **$\text{I}^-$ discharges**.
- **Step 3 (Equations):**
  - Cathode (−): $2\text{H}^+ + 2\text{e}^- \rightarrow \text{H}_2\text{ (gas)}$
  - Anode (+): $2\text{I}^- \rightarrow \text{I}_2\text{ (solid/solution)} + 2\text{e}^-$
  - Overall: $2\text{KI} + 2\text{H}_2\text{O} \rightarrow 2\text{KOH} + \text{H}_2 + \text{I}_2$
- **Step 4 (Observations):**
  - Cathode evolves colorless hydrogen bubbles.
  - Anode turns yellow-brown as dissolved iodine accumulates.
  - Unreacted $\text{K}^+$ and $\text{OH}^-$ form **potassium hydroxide ($\text{KOH}$)**; solution becomes **strongly alkaline** (phenolphthalein turns deep pink near cathode).

---

### Puzzle 2: Concentrated HCl, Graphite Electrodes

- **Step 1 (Ions):** Cations: $\text{H}^+$; Anions: $\text{Cl}^-$, $\text{OH}^-$.
- **Step 2 (Selection):**
  - Cathode (−): Only $\text{H}^+$ is present $\rightarrow$ **$\text{H}^+$ discharges**.
  - Anode (+): Concentrated chloride discharges preferentially over $\text{OH}^-$ $\rightarrow$ **$\text{Cl}^-$ discharges**.
- **Step 3 (Equations):**
  - Cathode (−): $2\text{H}^+ + 2\text{e}^- \rightarrow \text{H}_2\text{ (gas)}$
  - Anode (+): $2\text{Cl}^- \rightarrow \text{Cl}_2\text{ (gas)} + 2\text{e}^-$
  - Overall: $2\text{HCl} \rightarrow \text{H}_2 + \text{Cl}_2$
- **Step 4 (Observations):**
  - Colorless $\text{H}_2$ bubbles at cathode; pungent greenish-yellow toxic $\text{Cl}_2$ gas at anode.
  - Gas volume ratio is strictly $1 : 1$.
  - The acid concentration decreases continuously.

---

### Puzzle 3: Molten ZnCl₂ (>290 °C), Graphite Electrodes

- **Step 1 (Ions):** Molten salt $\implies$ **Only $\text{Zn}^{2+}$ and $\text{Cl}^-$**. No water, no $\text{H}^+$, no $\text{OH}^-$.
- **Step 2 (Selection):**
  - Cathode (−): $\text{Zn}^{2+}$ is the sole cation $\rightarrow$ **$\text{Zn}^{2+}$ discharges**.
  - Anode (+): $\text{Cl}^-$ is the sole anion $\rightarrow$ **$\text{Cl}^-$ discharges**.
- **Step 3 (Equations):**
  - Cathode (−): $\text{Zn}^{2+} + 2\text{e}^- \rightarrow \text{Zn (molten metal)}$
  - Anode (+): $2\text{Cl}^- \rightarrow \text{Cl}_2\text{ (gas)} + 2\text{e}^-$
  - Overall: $\text{ZnCl}_2\text{ (l)} \rightarrow \text{Zn (l)} + \text{Cl}_2\text{ (g)}$
- **Step 4 (Observations):**
  - Shiny molten zinc pools at the cathode bottom; toxic $\text{Cl}_2$ gas evolves at the anode.
  - *Key takeaway:* In molten state, zinc metal is extracted. In aqueous solution, $\text{H}_2$ forms instead!

---

### Puzzle 4: Dilute Na₂SO₄ Solution, Platinum Electrodes

- **Step 1 (Ions):** Cations: $\text{Na}^+$, $\text{H}^+$; Anions: $\text{SO}_4^{2-}$, $\text{OH}^-$.
- **Step 2 (Selection):**
  - Cathode (−): $\text{H}^+$ discharges preferentially over $\text{Na}^+$ $\rightarrow$ **$\text{H}^+$ discharges**.
  - Anode (+): Platinum is inert. Sulfate ($\text{SO}_4^{2-}$) never discharges in water; **$\text{OH}^-$ discharges**.
- **Step 3 (Equations):**
  - Cathode (−): $4\text{H}^+ + 4\text{e}^- \rightarrow 2\text{H}_2\text{ (gas)}$
  - Anode (+): $4\text{OH}^- \rightarrow 2\text{H}_2\text{O} + \text{O}_2\text{ (gas)} + 4\text{e}^-$
  - Overall: $2\text{H}_2\text{O} \rightarrow 2\text{H}_2\text{ (cathode)} + \text{O}_2\text{ (anode)}$
- **Step 4 (Observations):**
  - Colorless gases evolve at both electrodes: volume ratio $\text{H}_2 : \text{O}_2 = 2 : 1$.
  - Water is decomposed; the amount of $\text{Na}_2\text{SO}_4$ remains constant while its concentration rises slightly.
  - Universal indicator turns blue-violet (alkaline) at cathode ($\text{OH}^-$ excess) and red (acidic) at anode ($\text{H}^+$ excess).

---

### Puzzle 5: Concentrated CuCl₂ Solution, Graphite Electrodes

- **Step 1 (Ions):** Cations: $\text{Cu}^{2+}$, $\text{H}^+$; Anions: $\text{Cl}^-$, $\text{OH}^-$.
- **Step 2 (Selection):**
  - Cathode (−): $\text{Cu}^{2+}$ discharges preferentially over $\text{H}^+$ $\rightarrow$ **$\text{Cu}^{2+}$ discharges**.
  - Anode (+): Concentrated chloride discharges $\rightarrow$ **$\text{Cl}^-$ discharges**.
- **Step 3 (Equations):**
  - Cathode (−): $\text{Cu}^{2+} + 2\text{e}^- \rightarrow \text{Cu (solid)}$
  - Anode (+): $2\text{Cl}^- \rightarrow \text{Cl}_2\text{ (gas)} + 2\text{e}^-$
  - Overall: $\text{CuCl}_2\text{ (aq)} \rightarrow \text{Cu (s)} + \text{Cl}_2\text{ (g)}$
- **Step 4 (Observations):**
  - Reddish-brown metallic copper coats the cathode; greenish-yellow $\text{Cl}_2$ bubbles evolve at the anode.
  - The blue-green color of the electrolyte gradually fades as $\text{Cu}^{2+}$ ions are removed.

---

### Puzzle 6: Concentrated CuCl₂ Solution, Copper Electrodes

- **Step 1 (Ions):** Cations: $\text{Cu}^{2+}$, $\text{H}^+$; Anions: $\text{Cl}^-$, $\text{OH}^-$.
- **Step 2 (Selection):**
  - Cathode (−): $\text{Cu}^{2+}$ discharges preferentially $\rightarrow$ **$\text{Cu}^{2+}$ discharges**.
  - Anode (+): The anode is **active copper**! It dissolves directly $\rightarrow$ **$\text{Cu} \rightarrow \text{Cu}^{2+} + 2\text{e}^-$**.
- **Step 3 (Equations):**
  - Cathode (−): $\text{Cu}^{2+} + 2\text{e}^- \rightarrow \text{Cu}$
  - Anode (+): $\text{Cu} \rightarrow \text{Cu}^{2+} + 2\text{e}^-$
- **Step 4 (Observations):**
  - The cathode gains mass as copper deposits; the anode loses an identical mass of copper.
  - Zero chlorine gas evolves! The blue-green color and concentration of the electrolyte remain **completely unchanged**.

---

### Puzzle 7: AgNO₃ Solution, Platinum Electrodes

- **Step 1 (Ions):** Cations: $\text{Ag}^+$, $\text{H}^+$; Anions: $\text{NO}_3^-$, $\text{OH}^-$.
- **Step 2 (Selection):**
  - Cathode (−): $\text{Ag}^+$ discharges preferentially over $\text{H}^+$ $\rightarrow$ **$\text{Ag}^+$ discharges**.
  - Anode (+): Platinum is inert. Nitrate never discharges; **$\text{OH}^-$ discharges**.
- **Step 3 (Equations):**
  - Cathode (−): $4\text{Ag}^+ + 4\text{e}^- \rightarrow 4\text{Ag (solid)}$
  - Anode (+): $4\text{OH}^- \rightarrow 2\text{H}_2\text{O} + \text{O}_2\text{ (gas)} + 4\text{e}^-$
  - Overall: $4\text{AgNO}_3 + 2\text{H}_2\text{O} \rightarrow 4\text{Ag} + 4\text{HNO}_3 + \text{O}_2$
- **Step 4 (Observations):**
  - Brilliant, crystalline white silver deposits at cathode; oxygen bubbles at anode.
  - Nitric acid ($\text{HNO}_3$) accumulates in solution; the liquid becomes strongly **acidic**.

---

### Puzzle 8: Dilute H₂SO₄, Copper Electrodes

- **Step 1 (Ions):** Cations: $\text{H}^+$; Anions: $\text{SO}_4^{2-}$, $\text{OH}^-$.
- **Step 2 (Selection):**
  - Cathode (−): Only $\text{H}^+$ is available initially $\rightarrow$ **$\text{H}^+$ discharges**.
  - Anode (+): Active copper anode oxidises and dissolves $\rightarrow$ **$\text{Cu} \rightarrow \text{Cu}^{2+} + 2\text{e}^-$**.
- **Step 3 (Equations):**
  - Cathode (−): $2\text{H}^+ + 2\text{e}^- \rightarrow \text{H}_2\text{ (gas)}$
  - Anode (+): $\text{Cu} \rightarrow \text{Cu}^{2+} + 2\text{e}^-$
  - Net: $\text{Cu} + \text{H}_2\text{SO}_4 \xrightarrow{\text{electricity}} \text{CuSO}_4 + \text{H}_2$
- **Step 4 (Observations):**
  - Hydrogen bubbles evolve at cathode; copper anode erodes.
  - The clear acid solution gradually turns **sky-blue** as hydrated $\text{Cu}^{2+}$ ions accumulate!
  - *(Note: Copper cannot react spontaneously with dilute non-oxidising acid in a beaker, but the battery forces electron transfer!)*

---

## Part C: Mixed Multi-Concept Problems

### Mixed 1: Competing Metal Cations in the Same Solution

**Problem:** A dilute aqueous solution contains a mixture of $\text{CuSO}_4$ and $\text{ZnSO}_4$. The solution is electrolysed using inert graphite electrodes.
(a) In what sequence do substances deposit or evolve at the cathode?
(b) What gas evolves at the anode?
(c) Will zinc metal ever deposit at the cathode? Explain.

**Solution:**
- Cathode sequence: Compare cations ($\text{Cu}^{2+}$, $\text{H}^+$, $\text{Zn}^{2+}$).
  1. **Copper ($\text{Cu}$)** discharges first because $\text{Cu}^{2+}$ lies below $\text{H}^+$ and $\text{Zn}^{2+}$.
  2. Once $\text{Cu}^{2+}$ is completely depleted (blue color fades entirely), **Hydrogen gas ($\text{H}_2$)** discharges next ($2\text{H}^+ + 2\text{e}^- \rightarrow \text{H}_2$).
  3. **Zinc metal will never deposit** because $\text{H}^+$ discharges preferentially over $\text{Zn}^{2+}$. Zinc ions remain spectator ions in solution.
- Anode product: Sulfate never discharges; $\text{OH}^-$ discharges to evolve **Oxygen gas ($\text{O}_2$)**.

---

### Mixed 2: Why Cannot Aluminium Be Extracted from Aqueous Solution?

**Problem:** A student suggests extracting metallic aluminium cheaply by electrolysing concentrated aqueous aluminium chloride ($\text{AlCl}_3$) using graphite electrodes. Explain why this approach fails, identify the actual products obtained, and recall how aluminium is extracted industrially.

**Solution:**
- In aqueous $\text{AlCl}_3$, competing cations are $\text{Al}^{3+}$ and $\text{H}^+$.
- Because aluminium is highly electropositive, its ions hold an extreme negative standard reduction potential; **$\text{H}^+$ discharges far more easily**.
- Products obtained: **Hydrogen gas ($\text{H}_2$)** at cathode, **Chlorine gas ($\text{Cl}_2$)** at anode, leaving insoluble $\text{Al(OH)}_3$ or basic aluminium salts.
- Industrial extraction: Aluminium must be extracted by the **Hall-Héroult process**, electrolysing molten anhydrous alumina ($\text{Al}_2\text{O}_3$) dissolved in molten cryolite ($\text{Na}_3\text{AlF}_6$) at $\approx 950\ ^\circ\text{C}$, completely free of water!

---

### Mixed 3: Counting Electrons to Calculate Deposited Mass (Molten ZnCl₂)

**Problem:** In Puzzle 3 (molten $\text{ZnCl}_2$ with graphite electrodes), a current passes until exactly $0.50\text{ mol}$ of electrons has flowed through the circuit ($\text{Zn} = 65$, $\text{Cl} = 35.5$). Calculate the mass of zinc deposited at the cathode and chlorine evolved at the anode. Verify conservation of mass.

**Solution:**
- At cathode: $\text{Zn}^{2+} + 2\text{e}^- \rightarrow \text{Zn}$.
$$\text{Moles of Zn} = \frac{0.50\text{ mol e}^-}{2} = 0.25\text{ mol Zn}$$
$$\text{Mass of Zn} = 0.25\text{ mol} \times 65\text{ g/mol} = \mathbf{16.25\text{ g of Zn}}$$
- At anode: $2\text{Cl}^- \rightarrow \text{Cl}_2 + 2\text{e}^-$.
$$\text{Moles of Cl}_2 = \frac{0.50\text{ mol e}^-}{2} = 0.25\text{ mol Cl}_2$$
$$\text{Mass of Cl}_2 = 0.25\text{ mol} \times 71\text{ g/mol} = \mathbf{17.75\text{ g of Cl}}_2$$
- Total product mass = $16.25\text{ g} + 17.75\text{ g} = \mathbf{34.00\text{ g}}$.
- Mass of $\text{ZnCl}_2$ decomposed = $0.25\text{ mol} \times (65 + 71) = 0.25 \times 136 = \mathbf{34.00\text{ g}}$ ✅.

---

### Mixed 4: Metal Displacement vs. Electrolysis: Two Sides of the Same Coin

**Problem:** In Chapter 2, dipping a zinc strip into blue $\text{CuSO}_4$ solution produced a copper coating spontaneously. In electrolysis, copper coats the cathode. Compare the similarities and differences in electron transfer.

**Solution:**
- **Similarity:** In both processes, copper ions undergo identical reduction: $\text{Cu}^{2+} + 2\text{e}^- \rightarrow \text{Cu}$.
- **Difference:**
  - In beaker displacement, electron transfer occurs **directly and spontaneously** at the metal surface: reactive zinc atoms surrender electrons directly to colliding $\text{Cu}^{2+}$ ions ($\text{Zn} + \text{Cu}^{2+} \rightarrow \text{Zn}^{2+} + \text{Cu}$).
  - In electrolysis, oxidation and reduction are **physically separated** at two different electrodes. Electrons are pumped non-spontaneously through an external circuit by a DC power supply.

---

## Part D: The Interactive Science Stall Scorecard

Test your understanding by filling in the blank scorecard below:

```
    +----+--------------------------------+------------+------------+-----------------+
    : No : Electrolyte and Electrodes     : Cathode    : Anode      : Electrolyte     :
    :    :                                : Product    : Product    : Outcome         :
    +----+--------------------------------+------------+------------+-----------------+
    : 1  : Molten NaBr, graphite          :            :            :                 :
    +----+--------------------------------+------------+------------+-----------------+
    : 2  : Concentrated KBr(aq), graphite :            :            :                 :
    +----+--------------------------------+------------+------------+-----------------+
    : 3  : Concentrated CuBr₂(aq), graph. :            :            :                 :
    +----+--------------------------------+------------+------------+-----------------+
    : 4  : Dilute KOH(aq), platinum       :            :            :                 :
    +----+--------------------------------+------------+------------+-----------------+
    : 5  : Molten ZnBr₂, graphite         :            :            :                 :
    +----+--------------------------------+------------+------------+-----------------+
    : 6  : Concentrated CuBr₂(aq), copper :            :            :                 :
    +----+--------------------------------+------------+------------+-----------------+
```

> **Figure 6.2** – Interactive Science Fair challenge scorecard.

**Master Solutions for Verification:**
1. **Molten $\text{NaBr}$, graphite:** Cathode: $\text{Na (liquid metal)}$; Anode: $\text{Br}_2\text{ (red-brown vapor)}$; No solution.
2. **Concentrated $\text{KBr(aq)}$, graphite:** Cathode: $\text{H}_2\text{ (g)}$; Anode: $\text{Br}_2\text{ (aq/l)}$; Remaining liquid becomes strongly **alkaline $\text{KOH}$**.
3. **Concentrated $\text{CuBr}_2\text{(aq)}$, graphite:** Cathode: $\text{Cu (s)}$; Anode: $\text{Br}_2\text{ (aq/l)}$; Blue-green color fades as $\text{Cu}^{2+}$ is depleted.
4. **Dilute $\text{KOH(aq)}$, platinum:** Cathode: $\text{H}_2\text{ (g)}$; Anode: $\text{O}_2\text{ (g)}$ ($2 : 1$ ratio); Water decomposed; $\text{KOH}$ becomes slightly more concentrated.
5. **Molten $\text{ZnBr}_2$, graphite:** Cathode: $\text{Zn (liquid metal)}$; Anode: $\text{Br}_2\text{ (vapor)}$; No solution.
6. **Concentrated $\text{CuBr}_2\text{(aq)}$, copper electrodes:** Cathode: $\text{Cu (deposits)}$; Anode: Copper dissolves ($\text{Cu} \rightarrow \text{Cu}^{2+} + 2\text{e}^-$); No bromine gas; concentration and color remain **constant**.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Predicting hydrogen gas during the electrolysis of molten salts.**
   *Correction:* Hydrogen gas forms only when water is present! Molten salts contain zero water and zero $\text{H}^+$ ions. In molten $\text{NaCl}$, the cathode product is pure **metallic sodium**.

2. **Mistake 2: Thinking the anode in an electrolytic cell is negative.**
   *Correction:* In an electrolytic cell, the anode is wired to the battery's **positive terminal**, giving it a **positive charge**. Negative anions ($\text{Cl}^-$, $\text{OH}^-$) migrate toward it. Oxidation always occurs at the anode.

3. **Mistake 3: Assuming electrons travel through the liquid electrolyte.**
   *Correction:* Free electrons cannot exist in water or molten salts! Electrons travel strictly through the **external metal wires**. Conduction within the electrolyte is carried out entirely by **migrating physical ions**.

4. **Mistake 4: Expecting identical anode products from concentrated and very dilute chloride solutions.**
   *Correction:* Concentrated $\text{NaCl}$ yields **chlorine gas ($\text{Cl}_2$)** at the anode due to chloride concentration dominance. Very dilute $\text{NaCl}$ yields **oxygen gas ($\text{O}_2$)** because hydroxide ions discharge preferentially when chloride concentration is low.

5. **Mistake 5: Believing metals always form at the cathode.**
   *Correction:* Metals form at the cathode only if their cations lie below $\text{H}^+$ in the discharge series ($\text{Cu}^{2+}$, $\text{Ag}^+$) or if the salt is molten. In aqueous solutions of $\text{Na}^+$, $\text{K}^+$, $\text{Ca}^{2+}$, $\text{Mg}^{2+}$, or $\text{Al}^{3+}$, the cathode product is **hydrogen gas ($\text{H}_2$)**.

6. **Mistake 6: Assuming changing electrode material does not affect the reaction products.**
   *Correction:* With inert graphite electrodes, aqueous $\text{CuCl}_2$ evolves $\text{Cl}_2$ gas at the anode. With active copper electrodes, the copper anode itself dissolves, evolving zero gas and maintaining constant solution concentration. Always check whether the anode is inert or active!

---

## Quick Recap

- **The Four-Step Method:** (1) List all ions; (2) Select discharging species using discharge series, concentration, and electrode reactivity; (3) Balance half-equations; (4) Deduce observations and electrolyte changes.
- **Cathode Discharges:** $\text{Ag}^+ > \text{Cu}^{2+} > \text{H}^+$. More reactive metal cations ($\text{Na}^+$, $\text{K}^+$, $\text{Al}^{3+}$) give way to $\text{H}^+$ in aqueous solution, yielding $\text{H}_2$. Molten salts yield the metal.
- **Anode Discharges:** Active anodes dissolve ($\text{Cu} \rightarrow \text{Cu}^{2+} + 2\text{e}^-$). Inert anodes discharge halides ($\text{I}^- > \text{Br}^- > \text{Cl}^-$) if concentrated, or $\text{OH}^-$ (yielding $\text{O}_2$) if dilute or if oxo-anions ($\text{SO}_4^{2-}$, $\text{NO}_3^-$) are present.
- **Polarities:** Anode is positive (attached to battery $+$); Cathode is negative (attached to battery $-$).
- **Stoichiometry:** $1\text{ mol of Ag}$ requires $1\text{ mol e}^-$; $1\text{ mol of Cu or Zn}$ requires $2\text{ mol e}^-$; $1\text{ mol of O}_2$ requires $4\text{ mol e}^-$.

---

## Practice Questions

1. Molten calcium chloride ($\text{CaCl}_2$) is electrolysed using graphite electrodes.
   (a) List all ions present.
   (b) Name the products at cathode and anode, providing balanced half-equations and the overall cell equation.
   (c) If $1.20\text{ mol}$ of electrons passes through the cell, calculate the masses of calcium and chlorine formed, demonstrating that mass is conserved ($\text{Ca} = 40$, $\text{Cl} = 35.5$).

2. Dilute nitric acid ($\text{HNO}_3$) is electrolysed using platinum electrodes.
   (a) List the ions present and name the product at each electrode.
   (b) Write balanced half-equations and state the volume ratio of the two gases collected.
   (c) What happens to the acid concentration over time?

3. Dilute aqueous sodium hydroxide ($\text{NaOH}$) is electrolysed using platinum electrodes.
   (a) Identify the products at the cathode and anode, and provide the half-equations.
   (b) Describe what happens to the concentration of the $\text{NaOH}$ solution.
   (c) If $0.80\text{ mol}$ of electrons passes, calculate the mass of $\text{H}_2$ and $\text{O}_2$ formed and the mass of water decomposed.

4. Concentrated aqueous magnesium chloride ($\text{MgCl}_2$) is electrolysed using graphite electrodes.
   (a) Name the products liberated at the two electrodes and identify the precipitate remaining in solution.
   (b) Explain why metallic magnesium cannot be prepared by this method, and name the industrial extraction method.

5. Aqueous copper(II) nitrate, $\text{Cu(NO}_3)_2$, is electrolysed in two separate cells:
   - **Cell A:** Uses inert graphite electrodes.
   - **Cell B:** Uses active copper electrodes.
   (a) For Cell A: State the electrode products, and describe the changes in electrolyte color and pH.
   (b) For Cell B: Describe the changes at both electrodes and in the electrolyte.
   (c) In Cell A, $19.05\text{ g}$ of copper deposits. Calculate the moles of electrons transferred and the mass of oxygen evolved at the anode.
   (d) In Cell B, $0.70\text{ mol}$ of electrons passes. Calculate the mass change of each electrode.

6. Separate aqueous solutions of the following salts are electrolysed using platinum electrodes: (i) dilute $\text{K}_2\text{SO}_4$, (ii) concentrated $\text{KCl}$, (iii) concentrated $\text{NaI}$, (iv) dilute $\text{KNO}_3$.
   (a) Which solutions yield exclusively hydrogen and oxygen in a $2 : 1$ volume ratio?
   (b) Which solutions yield a halogen at the anode? Name each halogen.
   (c) In which solutions does the electrolyte turn alkaline? Identify the alkaline compound formed.

7. Identify the scientific error in each statement and write the corrected version:
   (a) *"Electrolysis of molten potassium bromide yields hydrogen gas at the cathode."*
   (b) *"Electrolysis of concentrated aqueous KCl produces metallic potassium at the cathode."*
   (c) *"In an electrolyte solution, electrons carry current from cathode to anode."*
   (d) *"The anode is the negative electrode in an electrolytic cell."*

8. A very dilute aqueous solution of potassium chloride is electrolysed with platinum electrodes. Name the products formed at both electrodes, and explain how this outcome differs from concentrated $\text{KCl}$.

9. Following the electrolysis of concentrated $\text{KCl}$ solution for several minutes, a few drops of phenolphthalein indicator are added near the cathode. State the observed color change, explain why it occurs, and link your answer to acid-base chemistry.

10. For the molten $\text{CaCl}_2$ cell in Question 1, trace the path of electrons through the external circuit and the migration of ions in the melt. Identify which electrode is connected to the positive terminal of the power supply and state its technical name.

11. State whether each statement is True or False. If false, provide the correction:
    (a) In a molten salt electrolyte, hydrogen ions from water migrate to the cathode.
    (b) When an active metal anode is used, the anode itself oxidises and dissolves.
    (c) Metallic aluminium is manufactured industrially by electrolysing aqueous aluminium chloride.
    (d) Nitrate ions ($\text{NO}_3^-$) discharge readily at the anode from aqueous solutions.

12. Write balanced electrode half-equations for:
    (a) Dilute $\text{KOH}$ with platinum electrodes (both electrodes).
    (b) Concentrated $\text{CuBr}_2$ with copper electrodes (both electrodes).

13. Name two toxic products produced during electrolysis exercises in this chapter, identify the reaction in which each forms, and state two safety precautions implemented by instructors. Explain why students are never permitted to collect or ignite gases from water electrolysis.

---

### Answers

1. (a) Molten salt $\implies$ **$\text{Ca}^{2+}$ and $\text{Cl}^-$ only**.
   (b) Cathode (−): $\text{Ca}^{2+} + 2\text{e}^- \rightarrow \text{Ca}$ (calcium metal); Anode (+): $2\text{Cl}^- \rightarrow \text{Cl}_2 + 2\text{e}^-$ (chlorine gas). Overall: $\text{CaCl}_2\text{ (l)} \rightarrow \text{Ca (s)} + \text{Cl}_2\text{ (g)}$.
   (c) With $1.20\text{ mol e}^-$:
   - $\text{Moles of Ca} = \frac{1.20}{2} = 0.60\text{ mol} \implies \text{Mass} = 0.60 \times 40 = \mathbf{24.0\text{ g of Ca}}$.
   - $\text{Moles of Cl}_2 = \frac{1.20}{2} = 0.60\text{ mol} \implies \text{Mass} = 0.60 \times 71 = \mathbf{42.6\text{ g of Cl}}_2$.
   - Mass check: $24.0 + 42.6 = 66.6\text{ g}$; Mass of $\text{CaCl}_2$ decomposed = $0.60 \times (40 + 71) = 66.6\text{ g}$ ✅.

2. (a) Ions: $\text{H}^+$, $\text{NO}_3^-$ (from acid) and $\text{H}^+$, $\text{OH}^-$ (from water). Cathode: $\text{H}_2\text{ (g)}$; Anode: $\text{O}_2\text{ (g)}$ ($\text{NO}_3^-$ never discharges).
   (b) Cathode: $4\text{H}^+ + 4\text{e}^- \rightarrow 2\text{H}_2$; Anode: $4\text{OH}^- \rightarrow 2\text{H}_2\text{O} + \text{O}_2 + 4\text{e}^-$. Overall: $2\text{H}_2\text{O} \rightarrow 2\text{H}_2 + \text{O}_2$. Volume ratio $\text{H}_2 : \text{O}_2 = \mathbf{2 : 1}$.
   (c) Water is decomposed while nitric acid remains in the cell; the acid becomes **more concentrated**.

3. (a) Cathode: $\text{H}_2$ ($4\text{H}^+ + 4\text{e}^- \rightarrow 2\text{H}_2$); Anode: $\text{O}_2$ ($4\text{OH}^- \rightarrow 2\text{H}_2\text{O} + \text{O}_2 + 4\text{e}^-$).
   (b) Solvent water is decomposed, so the $\text{NaOH}$ concentration **increases**.
   (c) With $0.80\text{ mol e}^-$:
   - Moles of $\text{H}_2 = \frac{0.80}{2} = 0.40\text{ mol} \implies \text{Mass} = 0.40 \times 2 = \mathbf{0.80\text{ g}}$.
   - Moles of $\text{O}_2 = \frac{0.80}{4} = 0.20\text{ mol} \implies \text{Mass} = 0.20 \times 32 = \mathbf{6.40\text{ g}}$.
   - Mass of water decomposed = $0.40\text{ mol} \times 18 = \mathbf{7.20\text{ g}}$ ($0.80 + 6.40 = 7.20\text{ g}$ ✅).

4. (a) Cathode: Hydrogen gas ($\text{H}_2$); Anode: Chlorine gas ($\text{Cl}_2$); Remaining precipitate: Magnesium hydroxide, $\text{Mg(OH)}_2$ (white suspension). Net: $\text{MgCl}_2 + 2\text{H}_2\text{O} \rightarrow \text{Mg(OH)}_2\downarrow + \text{H}_2 + \text{Cl}_2$.
   (b) Magnesium cannot be extracted because $\text{H}^+$ is discharged preferentially over $\text{Mg}^{2+}$ in water. Magnesium is extracted industrially by the **electrolysis of anhydrous molten $\text{MgCl}_2$**.

5. (a) Cell A: Cathode: Copper metal ($\text{Cu}$); Anode: Oxygen gas ($\text{O}_2$). The blue color fades as $\text{Cu}^{2+}$ is removed; nitric acid forms, making the solution **strongly acidic** ($2\text{Cu(NO}_3)_2 + 2\text{H}_2\text{O} \rightarrow 2\text{Cu} + 4\text{HNO}_3 + \text{O}_2$).
   (b) Cell B: Cathode gains copper ($\text{Cu}^{2+} + 2\text{e}^- \rightarrow \text{Cu}$); active copper anode dissolves ($\text{Cu} \rightarrow \text{Cu}^{2+} + 2\text{e}^-$); no gas evolves; color and concentration remain **constant**.
   (c) Moles of $\text{Cu} = \frac{19.05\text{ g}}{63.5\text{ g/mol}} = 0.30\text{ mol}$. Moles of electrons = $0.30 \times 2 = \mathbf{0.60\text{ mol}}$.
   $$\text{Moles of O}_2 = \frac{0.60}{4} = 0.15\text{ mol} \implies \text{Mass} = 0.15 \times 32 = \mathbf{4.80\text{ g of O}}_2$$
   (d) With $0.70\text{ mol e}^-$, moles of $\text{Cu} = \frac{0.70}{2} = 0.35\text{ mol} \implies \text{Mass} = 0.35 \times 63.5 = \mathbf{22.225\text{ g}}$. Cathode gains $22.225\text{ g}$; anode loses $22.225\text{ g}$.

6. (a) Exclusive $\text{H}_2$ and $\text{O}_2$ ($2 : 1$): **(i) dilute $\text{K}_2\text{SO}_4$** and **(iv) dilute $\text{KNO}_3$**.
   (b) Halogen at anode: **(ii) Chlorine gas ($\text{Cl}_2$)** and **(iii) Iodine ($\text{I}_2$)**.
   (c) Electrolyte becomes alkaline in **(ii)** (forms $\text{KOH}$) and **(iii)** (forms $\text{NaOH}$).

7. (a) **Correction:** Molten $\text{KBr}$ contains zero water; cathode product is **potassium metal ($\text{K}$)**.
   (b) **Correction:** In aqueous $\text{KCl}$, $\text{H}^+$ discharges preferentially over $\text{K}^+$, producing **hydrogen gas ($\text{H}_2$)**.
   (c) **Correction:** Conduction inside the electrolyte is carried out exclusively by **migrating mobile ions**; electrons flow through external wires.
   (d) **Correction:** In an electrolytic cell, the anode is wired to the positive terminal of the power supply and is **positive**.

8. In very dilute $\text{KCl}$, $\text{OH}^-$ discharges preferentially over the low concentration of chloride, evolving **Oxygen gas ($\text{O}_2$)** at the anode. In concentrated $\text{KCl}$, chloride concentration dominance causes **Chlorine gas ($\text{Cl}_2$)** to evolve. In both cells, hydrogen gas forms at the cathode.

9. The indicator turns **deep pink**. As $\text{H}^+$ discharges at the cathode ($2\text{H}^+ + 2\text{e}^- \rightarrow \text{H}_2$), excess $\text{OH}^-$ ions combine with unreacted $\text{K}^+$ to form **potassium hydroxide ($\text{KOH}$)**, a strong alkali. Phenolphthalein turns pink in basic solutions ($\text{pH} > 8.2$).

10. Electrons flow through external copper wiring from the graphite anode into the battery's positive terminal, and from the battery's negative terminal into the graphite cathode. Inside the molten salt, $\text{Ca}^{2+}$ cations migrate to the cathode to receive electrons, while $\text{Cl}^-$ anions migrate to the anode to surrender electrons. The electrode connected to the positive terminal is the **anode**.

11. (a) **False.** Molten electrolytes contain no water or hydrogen ions.
    (b) **True.**
    (c) **False.** Aluminium extraction requires anhydrous molten alumina in cryolite.
    (d) **False.** Nitrate ions never discharge in aqueous solution; hydroxide ions discharge to yield $\text{O}_2$.

12. (a) Dilute $\text{KOH}$ (Pt):
    - Cathode: $4\text{H}^+ + 4\text{e}^- \rightarrow 2\text{H}_2$ (or $4\text{H}_2\text{O} + 4\text{e}^- \rightarrow 2\text{H}_2 + 4\text{OH}^-$)
    - Anode: $4\text{OH}^- \rightarrow 2\text{H}_2\text{O} + \text{O}_2 + 4\text{e}^-$
    (b) Concentrated $\text{CuBr}_2$ (Cu electrodes):
    - Cathode: $\text{Cu}^{2+} + 2\text{e}^- \rightarrow \text{Cu}$
    - Anode: $\text{Cu} \rightarrow \text{Cu}^{2+} + 2\text{e}^-$

13. Toxic products: **Chlorine gas ($\text{Cl}_2$)** (from concentrated chlorides) and **Bromine vapor ($\text{Br}_2$)** (from bromides). Precautions: conducted strictly inside a certified fume cupboard with high-efficiency exhaust fans, using low-voltage DC supplies. Students must never collect or ignite water electrolysis gases because hydrogen-oxygen mixtures form a stoichiometric, highly explosive detonating gas.

---

## Chapter Summary: Electrolysis Master Framework

| Topic | Core Concepts | Unifying Takeaway |
|---|---|---|
| **Topic 1** | Electrolytes vs. Non-Electrolytes | Freely mobile ions enable conduction in molten or aqueous states; covalent molecules without ions cannot conduct; strong vs. weak depends on degree of ionisation; metallic conduction (electrons) differs from electrolytic conduction (ions). |
| **Topic 2** | Mechanism of Electrolysis | Electrolytic cell comprises electrolyte, electrodes, and DC source; Anode is (+), Cathode is (−); Cations $\rightarrow$ Cathode, Anions $\rightarrow$ Anode; $\text{OIL RIG}$ (Oxidation Is Loss at anode, Reduction Is Gain at cathode); molten $\text{PbBr}_2$ baseline. |
| **Topic 3** | Selective Discharge | Governed by (1) electrochemical discharge series, (2) ion concentration (brine yields $\text{Cl}_2$, dilute yields $\text{O}_2$), and (3) electrode nature (inert vs. active); five fundamental aqueous systems mastered. |
| **Topic 4** | Electroplating | Target article = Cathode (−); Plating metal = Active Anode (+); Electrolyte = Soluble salt of plating metal; Low steady DC ensures smooth adherent coat; Bath concentration remains constant; Stoichiometry via electron counting. |
| **Topic 5** | Industrial Applications | Copper refining ($99.99\%$ purity, anode mud recovery); Chlor-alkali process ($2\text{NaCl} + 2\text{H}_2\text{O} \rightarrow 2\text{NaOH} + \text{Cl}_2 + \text{H}_2$ in membrane cells); Anodising thickens protective oxide armor on aluminum; Energy economics. |
| **Topic 6** | Prediction & Synthesis | The Four-Step Algorithm (Inventory $\rightarrow$ Selection $\rightarrow$ Half-Equations $\rightarrow$ Observations); Resolving classic examination puzzles; Mastering multi-concept electrochemical problems. |

---

As the Science Fair ended, Leo held up his completed scorecard, filled with gold verification stars.

Mr. Foster congratulated him: *"You didn't have to guess or memorize tables blindly. You paused, identified the ions, applied the selection hierarchy, and reasoned out the chemistry."*

Leo nodded with a confident smile. *"No matter what cell or solution is on the bench, the four steps reveal the answer every time!"*

**What comes next?** In Chapter 5, **"Mole Concept and Stoichiometry"** ([mole-concept-and-stoichiometry.md](../mole-concept-and-stoichiometry/mole-concept-and-stoichiometry.md)), we take our quantitative electron accounting to the ultimate level: counting atoms, calculating molar gas volumes, balancing chemical yields, and mastering the universal mathematical language of chemistry!
