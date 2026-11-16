# Chapter: Electrolysis (Part 3)

> **Class:** 10 | **Subject:** Chemistry
> **This file continues from [electrolysis-part2.md](electrolysis-part2.md)** (where we explored the electrolytic cell, anode and cathode polarities, migration of ions vs. electrons, redox in terms of electron transfer, and the electrolysis of molten $\text{PbBr}_2$). For review: reactivity series of metals [metals-and-non-metals-part4.md](../metals-and-non-metals/metals-and-non-metals-part4.md); the chlor-alkali process overview [acids-bases-and-salts-part6.md](../acids-bases-and-salts/acids-bases-and-salts-part6.md); water electrolysis and the $2 : 1$ volume ratio of $\text{H}_2 : \text{O}_2$ [water.md](../../../class9/chemistry/water/water.md).
> **Topics covered in this file:**
> 3. Selective Discharge: Who Discharges First?

---

# Topic 3: Selective Discharge: Who Discharges First?

In Topic 2, we examined molten lead(II) bromide—a simple system containing only **two** ion species ($\text{Pb}^{2+}$ and $\text{Br}^-$). With only one cation and one anion present, each had no competitor; their discharge at the cathode and anode was inevitable.

In the real world, however, most electrolysis is conducted in **aqueous solutions**. Water itself dissociates slightly into $\text{H}^+$ and $\text{OH}^-$ ions. Consequently, when an electric field is applied, **multiple cations** race toward the cathode and **multiple anions** race toward the anode.

Which ion surrenders or accepts electrons first? How do chemists predict the exact products of electrolysis on paper before stepping into the laboratory?

The rules governing this competition—known as **selective discharge** (or preferential discharge)—form the foundation of the global **chlor-alkali industry**, industrial **copper refining**, and decorative **electroplating**.

---

## The Salt Box at the Community Pool

At the local neighborhood sports center, tenth-grader Sophia was visiting the pool pump room with her uncle, Mr. Davis, a volunteer on the maintenance committee. Beside the massive circulation filtration pipes, Sophia noticed a sleek grey electrical unit labelled **"Saltwater Chlorine Generator"**, next to several large bags of coarse white salt.

*"Uncle Davis, why do you have bags of table salt in a swimming pool pump room?"* Sophia asked. *"Isn't chlorine added to sanitize the water?"*

Mr. Davis gestured toward the transparent chamber of the unit. *"The generator manufactures chlorine on demand directly from ordinary salt! We maintain a mild salinity in the pool—about 3 to 4 grams of dissolved salt per liter of water, roughly one-tenth as salty as seawater. As the water pumps through this chamber, it passes between titanium plates energized with a direct electric current. In other words, this unit runs an **electrolytic cell** continuously."*

Sophia thought for a moment. *"Wait... table salt in water means we have $\text{Na}^+$ and $\text{Cl}^-$ ions, plus $\text{H}^+$ and $\text{OH}^-$ from the water. When they reach the energized plates, who reacts first? Surely sodium metal doesn't form—sodium violently explodes in water!"*

Mr. Davis chuckled approvingly. *"You have sharp chemical instincts, Sophia! Metallic sodium never forms in water. Instead, **hydrogen gas** bubbles off at the cathode, while **chlorine** or **oxygen** forms at the anode depending on specific operating conditions. The competition between ions follows strict, predictable chemical rules. Let's master the rules of **selective discharge**."*

> [!WARNING]
> **Safety Note on Chlorine Gas:**
> Chlorine ($\text{Cl}_2$) is a suffocating, greenish-yellow toxic gas that causes severe eye and respiratory distress. Commercial pool chlorinators operate as closed, automated inline systems producing tiny amounts that dissolve immediately into hypochlorous acid. The electrolytic experiments discussed in this topic are strictly **theoretical studies** or **demonstrations conducted by a qualified teacher inside a certified fume cupboard**.

---

## Key Vocabulary

| Term | Meaning (Plain Language) | Example |
|---|---|---|
| **Selective discharge** | The preferential discharge of one ion species over competing ions at an electrode during electrolysis | At the cathode, $\text{Cu}^{2+}$ discharges preferentially over $\text{H}^+$ |
| **Discharge** | The process by which an ion gains or loses electrons at an electrode to become a neutral atom or molecule | $\text{Cu}^{2+} + 2\text{e}^- \rightarrow \text{Cu}$ |
| **Electrochemical discharge series** | The ranked hierarchy of ions indicating the ease with which they discharge | Cations: $\text{Ag}^+ > \text{Cu}^{2+} > \text{H}^+ > \text{Pb}^{2+} \dots$ |
| **Aqueous solution** | A solution in which water is the solvent; contains $\text{H}^+$ and $\text{OH}^-$ ions alongside solute ions | $\text{NaCl(aq)}$ |
| **Brine** | A concentrated aqueous solution of sodium chloride | Raw material for the chlor-alkali process |
| **Inert electrode** | An electrode that conducts current but does not dissolve or react chemically | Graphite, platinum |
| **Active electrode** | An electrode that takes part chemically in the reaction (its metal atoms dissolve) | Pure copper anode in $\text{CuSO}_4$ solution |
| **Acidified water** | Water containing a small amount of dilute $\text{H}_2\text{SO}_4$ to provide sufficient mobile ions for conduction | Used in the electrolysis of water |

---

## Part A: One Solution, Multiple Ions

In any aqueous solution, water molecules undergo slight self-ionisation:

$$\text{H}_2\text{O} \rightleftharpoons \text{H}^+ + \text{OH}^-$$

Therefore, an aqueous solution of an ionic compound $\text{MX}$ contains **two distinct sets of ions**:
- **From the solute:** Cation $\text{M}^{n+}$ and Anion $\text{X}^{m-}$
- **From the water:** Cation $\text{H}^+$ and Anion $\text{OH}^-$

When electrodes are inserted and the DC power source is switched on:
- Both $\text{M}^{n+}$ and $\text{H}^+$ migrate toward the **Cathode (−)**.
- Both $\text{X}^{m-}$ and $\text{OH}^-$ migrate toward the **Anode (+)**.

**The Electrochemical Discharge Series**

Which ion gets discharged first? The fundamental rule is:

> **The ion situated LOWER in the electrochemical discharge series (or easier to reduce/oxidise) discharges preferentially.**

Notice that for cations, this series is the **exact reverse of the metal reactivity series**!
A highly reactive metal (such as potassium or sodium) holds onto its ionic state with extreme tenacity—it loses valence electrons eagerly, so its positive cation resists taking electrons back. Conversely, unreactive metals (such as copper and silver) accept electrons with great ease.

```
  CATIONS (at the Cathode)                   ANIONS (at the Anode)

    EASIEST to discharge                       EASIEST to discharge
              ^                                          ^
         Ag⁺  silver                                I⁻   iodide
         Cu²⁺ copper                                Br⁻  bromide
         H⁺   hydrogen   <== (from water)           Cl⁻  chloride
         Pb²⁺ lead                                  OH⁻  hydroxide (from water)
         Sn²⁺ tin                                - - - - - - - - - - - - - -
         Ni²⁺ nickel                                NO₃⁻ nitrate  : Never discharge
         Fe²⁺ iron                                  SO₄²⁻ sulfate : from aqueous
         Zn²⁺ zinc                                                : solutions (OH⁻
         Al³⁺ aluminium                                           : discharges instead)
         Mg²⁺ magnesium
         Ca²⁺ calcium
         Na⁺  sodium
         K⁺   potassium
              v
    HARDEST to discharge
    (In dilute aqueous solution, H⁺ discharges preferentially, forming H₂ gas)
```

> **Figure 3.1** – The Electrochemical Discharge Series: Cations are ranked by ease of electron gain (reduction) at the cathode. Anions are ranked by ease of electron loss (oxidation) at the anode. In dilute aqueous solutions, cations above $\text{H}^+$ (such as $\text{Na}^+$, $\text{Mg}^{2+}$, $\text{Al}^{3+}$) give way to $\text{H}^+$ (forming $\text{H}_2$), while complex oxo-anions ($\text{SO}_4^{2-}$, $\text{NO}_3^-$) never discharge (giving way to $\text{OH}^-$, forming $\text{O}_2$).

Because $\text{H}^+$ discharges far more easily than $\text{K}^+$, $\text{Na}^+$, $\text{Ca}^{2+}$, $\text{Mg}^{2+}$, and $\text{Al}^{3+}$, **these reactive metals can NEVER be extracted by electrolysing their aqueous solutions**! Whenever you electrolyse aqueous solutions of their salts, hydrogen gas ($\text{H}_2$) bubbles off at the cathode instead. That is why Chapter 3 required molten salts (Downs cell, Hall-Héroult cell) to extract sodium and aluminium.

---

## Part B: Three Factors Deciding Selective Discharge

Discharge is governed by three interrelated factors:

1. **Relative Position in the Discharge Series:**
   Under standard dilute conditions with inert electrodes, the ion situated lower in the series discharges preferentially (Figure 3.1).
2. **Relative Concentration of the Ions:**
   If a particular ion is present in an overwhelming concentration, it can overcome an unfavorable position in the series through sheer numerical abundance. The classic example is sodium chloride:
   - In **concentrated $\text{NaCl}$ (brine)**, the high concentration of $\text{Cl}^-$ causes **$\text{Cl}_2$ gas** to evolve at the anode.
   - In **very dilute $\text{NaCl}$**, $\text{OH}^-$ discharges preferentially, releasing **$\text{O}_2$ gas** at the anode.
3. **Nature of the Electrode (Inert vs. Active):**
   - **Inert electrodes (platinum, graphite):** Do not participate chemically; ions in solution discharge on their surfaces.
   - **Active electrodes (copper, silver, nickel):** When used as the **anode**, the metal atoms of the electrode itself oxidise and dissolve into the solution ($\text{Cu} \rightarrow \text{Cu}^{2+} + 2\text{e}^-$), completely bypassing the discharge of anions!

---

## Part C: Five Case Studies in Electrolysis

Let us apply these three rules to five foundational case studies.

---

### 1. Acidified Water (Dilute H₂SO₄) with Platinum Electrodes

Pure water is a poor conductor because its self-ionisation is minuscule ($\approx 10^{-7}\text{ M}$). Adding a small volume of dilute sulfuric acid ($\text{H}_2\text{SO}_4$) supplies abundant mobile ions, allowing current to pass freely without consuming the acid.

- **Ions Present:** Cations: $\text{H}^+$ (from acid and water); Anions: $\text{SO}_4^{2-}$ (from acid), $\text{OH}^-$ (from water).
- **At Cathode (−):** Only $\text{H}^+$ cations are present:
$$4\text{H}^+ + 4\text{e}^- \rightarrow 2\text{H}_2\text{ (gas)}$$
- **At Anode (+):** Both $\text{SO}_4^{2-}$ and $\text{OH}^-$ compete. Sulfate is extremely stable and never discharges in aqueous solution; **$\text{OH}^-$ discharges**:
$$4\text{OH}^- \rightarrow 2\text{H}_2\text{O} + \text{O}_2 + 4\text{e}^-$$
- **Overall Cell Reaction:**
Combining the two half-reactions (4 electrons transferred):
$$2\text{H}_2\text{O} \xrightarrow{\text{electricity}} 2\text{H}_2\text{ (cathode)} + \text{O}_2\text{ (anode)}$$
- **Volume Ratio:** The molar ratio of $\text{H}_2 : \text{O}_2$ produced by 4 electrons is $2 : 1$. By Avogadro's Law, **2 volumes of hydrogen collect at the cathode for every 1 volume of oxygen at the anode**.
- **Change in Electrolyte:** Water is consumed while sulfuric acid remains in the cell. As a result, the sulfuric acid becomes slightly **more concentrated**.

```
         (–) CATHODE                              (+) ANODE
     H₂ collection tube                      O₂ collection tube
     (2 relative volumes)                    (1 relative volume)

        +---------+                            +---------+
        :         :                            :         :
        :   H₂    :                            :         :
        :   H₂    :                            :   O₂    :
     ~~~:~~~~~~~~~:~~~~~~~~~~~~~~~~~~~~~~~~~~~~:~~~~~~~~~:~~~~
        :    I    :                            :    I    :
     ~~~~~~~~I~~~~~~~~~~~ Dilute H₂SO₄ ~~~~~~~~~~~~I~~~~~~~~~~
             I  (platinum)                         I  (platinum)
             I                                     I
             +------------[ DC Power ]-------------+
                        (–)          (+)
```

> **Figure 3.2** – Electrolysis of acidified water in a Hofmann voltameter: hydrogen gas evolves at the negative cathode, while oxygen gas evolves at the positive anode. The volume of hydrogen collected is precisely double the volume of oxygen ($2 : 1$ ratio).

---

### 2. Concentrated Sodium Chloride Solution (Brine) with Graphite Electrodes

- **Ions Present:** Cations: $\text{Na}^+$, $\text{H}^+$; Anions: $\text{Cl}^-$, $\text{OH}^-$.
- **At Cathode (−):** Both $\text{Na}^+$ and $\text{H}^+$ compete. In the discharge series, $\text{H}^+$ lies far below reactive sodium: **$\text{H}^+$ discharges preferentially**:
$$2\text{H}^+ + 2\text{e}^- \rightarrow \text{H}_2\text{ (gas)}$$
- **At Anode (+):** Both $\text{Cl}^-$ and $\text{OH}^-$ compete. Because the solution is **concentrated brine**, the overwhelming abundance of $\text{Cl}^-$ ions overrides the slight energy preference of $\text{OH}^-$: **$\text{Cl}^-$ discharges preferentially**:
$$2\text{Cl}^- \rightarrow \text{Cl}_2\text{ (gas)} + 2\text{e}^-$$
- **Change in Electrolyte:** As $\text{H}^+$ is discharged as $\text{H}_2$ gas and $\text{Cl}^-$ as $\text{Cl}_2$ gas, unreacted $\text{Na}^+$ cations and $\text{OH}^-$ anions accumulate in the solution. The electrolyte converts into **aqueous sodium hydroxide ($\text{NaOH}$)**, turning the solution strongly **alkaline**!
- **Overall Cell Reaction:**
$$2\text{NaCl} + 2\text{H}_2\text{O} \xrightarrow{\text{electricity}} 2\text{NaOH} + \text{Cl}_2\text{ (anode)} + \text{H}_2\text{ (cathode)}$$

This is the famous **Chlor-Alkali Process**, producing three high-value industrial chemicals from common salt.

---

### 3. Very Dilute Sodium Chloride Solution with Platinum Electrodes

Suppose we dilute the sodium chloride solution until the salt concentration is minuscule.
- **At Cathode (−):** $\text{H}^+$ still discharges preferentially:
$$2\text{H}^+ + 2\text{e}^- \rightarrow \text{H}_2\text{ (gas)}$$
- **At Anode (+):** With $\text{Cl}^-$ no longer in high concentration, the concentration effect vanishes. The intrinsic series position prevails, and **$\text{OH}^-$ discharges preferentially**:
$$4\text{OH}^- \rightarrow 2\text{H}_2\text{O} + \text{O}_2 + 4\text{e}^-$$
- **Net Outcome:** Hydrogen evolves at the cathode and oxygen at the anode in a $2 : 1$ ratio, exactly like acidified water! Water is consumed, leaving the salt solution slightly more concentrated.

> [!NOTE]
> **Why do saltwater pool chlorinators produce chlorine from dilute salt?**
> Sophia noticed that pool water has only 3–4 g/L of salt (quite dilute), yet it yields chlorine. In commercial pool chlorinators, this is accomplished using **custom ruthenium/iridium oxide-coated titanium electrodes**. The catalytic coating dramatically lowers the activation energy for chloride oxidation, favoring $\text{Cl}_2$ formation even at low salt concentrations!

---

### 4. Aqueous Copper(II) Sulfate with Inert (Graphite or Platinum) Electrodes

- **Ions Present:** Cations: $\text{Cu}^{2+}$, $\text{H}^+$; Anions: $\text{SO}_4^{2-}$, $\text{OH}^-$.
- **At Cathode (−):** Copper lies below hydrogen in the discharge series. **$\text{Cu}^{2+}$ discharges preferentially**:
$$\text{Cu}^{2+} + 2\text{e}^- \rightarrow \text{Cu (reddish-pink solid)}$$
A shiny layer of reddish-brown metallic copper coats the cathode.
- **At Anode (+):** Sulfate never discharges in aqueous solution. **$\text{OH}^-$ discharges preferentially**:
$$4\text{OH}^- \rightarrow 2\text{H}_2\text{O} + \text{O}_2\text{ (gas)} + 4\text{e}^-$$
Colorless bubbles of oxygen gas evolve at the anode.
- **Change in Electrolyte:** $\text{Cu}^{2+}$ ions are removed from the solution, causing the deep blue color of hydrated copper ions to **fade gradually to colorless**. As $\text{OH}^-$ is removed, spectator $\text{H}^+$ and $\text{SO}_4^{2-}$ remain, forming **sulfuric acid ($\text{H}_2\text{SO}_4$)**. The solution becomes distinctly acidic (litmus turns red).
- **Overall Cell Reaction:**
$$2\text{CuSO}_4 + 2\text{H}_2\text{O} \rightarrow 2\text{Cu (cathode)} + 2\text{H}_2\text{SO}_4 + \text{O}_2\text{ (anode)}$$

---

### 5. Aqueous Copper(II) Sulfate with Active Copper Electrodes

Now replace the inert graphite rods with **pure copper metal strips** at both cathode and anode.

- **At Cathode (−):** Copper ions still discharge preferentially:
$$\text{Cu}^{2+} + 2\text{e}^- \rightarrow \text{Cu (solid)}$$
The cathode strip grows visibly thicker and heavier as pure copper deposits onto it.
- **At Anode (+):** The anode is made of copper—an **active electrode**. Because copper atoms release electrons more readily than either $\text{OH}^-$ or $\text{SO}_4^{2-}$ can discharge, **the copper anode itself oxidises and dissolves**:
$$\text{Cu (solid anode)} \rightarrow \text{Cu}^{2+} + 2\text{e}^-$$
No gas bubbles form at the anode! Instead, the anode strip erodes and becomes progressively thinner.
- **Change in Electrolyte:** For every $\text{Cu}^{2+}$ ion deposited at the cathode, exactly one new $\text{Cu}^{2+}$ ion is released into solution by the dissolving anode. Consequently:
  - The concentration of $\text{Cu}^{2+}$ in solution remains **constant**.
  - The **blue color of the solution never fades**.
  - The net result is the clean transfer of copper metal from the anode to the cathode!

```
   CELL (a): CuSO₄(aq), INERT Electrodes           CELL (b): CuSO₄(aq), ACTIVE Copper Electrodes

     (–) Cathode         (+) Anode                   (–) Cathode         (+) Anode
        Graphite            Graphite                      Copper              Copper

           I                 I                           I                  I
           I     ~~~~~~~     I                           I    ~~~~~~~~      I
       ~~~~I~~~~~ Blue  ~~~~~I~~~~                   ~~~~I~~~~~ Blue  ~~~~~~I~~~~
           I     soln        I                           I     soln         I
           I                 I                           I                  I
      Cu deposits        O₂ gas evolves              Cu deposits        Anode dissolves
      (grows thicker)                                (grows thicker)    (grows thinner)
                                                         
    Cu²⁺ + 2e⁻ → Cu    4OH⁻ → 2H₂O + O₂ + 4e⁻      Cu²⁺ + 2e⁻ → Cu    Cu → Cu²⁺ + 2e⁻

    Solution: Blue color FADES;                     Solution: Blue color REMAINS CONSTANT;
    H₂SO₄ forms (becomes acidic).                   Concentration unchanged.
```

> **Figure 3.3** – Comparison of aqueous $\text{CuSO}_4$ electrolysis: **(a)** With inert graphite electrodes, $\text{Cu}$ deposits at the cathode while $\text{O}_2$ gas evolves at the anode; the blue color fades as copper ions are depleted. **(b)** With active copper electrodes, the anode dissolves at the exact rate copper deposits at the cathode; the solution concentration and blue color remain unchanged throughout.

---

## Part D: Comprehensive Summary Table

| Electrolyte | Electrodes | Cathode Product (−) | Anode Product (+) | Fate of Electrolyte Solution |
|---|---|---|---|---|
| **Acidified water** ($\text{dilute H}_2\text{SO}_4$) | Platinum (inert) | $\text{H}_2\text{ (g)}$ | $\text{O}_2\text{ (g)}$ | Water consumed; $\text{H}_2\text{SO}_4$ becomes slightly more concentrated |
| **Concentrated } $\text{NaCl}$ (brine) | Graphite (inert) | $\text{H}_2\text{ (g)}$ | $\text{Cl}_2\text{ (g)}$ | $\text{NaOH}$ accumulates; solution becomes strongly alkaline |
| **Very dilute } $\text{NaCl}$ | Platinum (inert) | $\text{H}_2\text{ (g)}$ | $\text{O}_2\text{ (g)}$ | Water consumed; salt solution becomes slightly more concentrated |
| **Aqueous } $\text{CuSO}_4$ | Platinum / Graphite (inert) | $\text{Cu (s)}$ | $\text{O}_2\text{ (g)}$ | Blue color fades; $\text{H}_2\text{SO}_4$ forms; becomes acidic |
| **Aqueous } $\text{CuSO}_4$ | Copper strips (active) | $\text{Cu (s)}$ | Anode dissolves: $\text{Cu} \rightarrow \text{Cu}^{2+} + 2\text{e}^-$ | Blue color and $\text{CuSO}_4$ concentration remain completely constant |

---

## Part E: The Salt Chlorinator Mystery Solved

Sophia reviewed her notes in the pump room:
*"In the pool chlorinator cell containing aqueous $\text{NaCl}$, $\text{H}^+$ defeats $\text{Na}^+$ at the cathode to evolve $\text{H}_2$ gas. At the specially coated anode plates, $\text{Cl}^-$ discharges to release $\text{Cl}_2$. The dissolved chlorine immediately sanitizes the water by killing bacteria."*

Mr. Davis nodded. *"Spot on, Sophia. And what would happen if the chlorinator plates were made of copper?"*

*"The anode would dissolve into solution as copper ions instead of releasing chlorine gas,"* Sophia answered promptly. *"The pool would turn blue, and no sanitizer would be produced!"*

*"Exactly why the electrodes must be inert or catalytic,"* Mr. Davis smiled.

---

## Part F: Solved Examples (Tracking Electrons and Stoichiometry)

*(Atomic masses: $\text{H} = 1$, $\text{C} = 12$, $\text{N} = 14$, $\text{O} = 16$, $\text{Na} = 23$, $\text{S} = 32$, $\text{Cl} = 35.5$, $\text{K} = 39$, $\text{Cu} = 63.5$, $\text{Br} = 80$, $\text{Ag} = 108$, $\text{I} = 127$)*

### Example 1: Aqueous CuSO₄ with Inert Electrodes: Copper, O₂, and Acid

**Question:** An aqueous solution of copper(II) sulfate is electrolysed using platinum electrodes until exactly $0.20\text{ mol}$ of pure copper deposits at the cathode.
(a) How many moles of electrons passed through the circuit?
(b) What mass and volume of oxygen gas (at STP, where $1\text{ mol} = 22.4\text{ L}$) were evolved at the anode?
(c) What mass of sulfuric acid ($\text{H}_2\text{SO}_4$) was produced in the solution? Verify conservation of mass.

**Solution:**
(a) Cathode half-equation: $\text{Cu}^{2+} + 2\text{e}^- \rightarrow \text{Cu}$.
Each mole of copper requires $2\text{ mol}$ of electrons.
$$\text{Moles of electrons} = 0.20\text{ mol} \times 2 = \mathbf{0.40\text{ mol of electrons}}$$

(b) Anode half-equation: $4\text{OH}^- \rightarrow 2\text{H}_2\text{O} + \text{O}_2 + 4\text{e}^-$.
Four moles of electrons liberate $1\text{ mol}$ of $\text{O}_2$.
$$\text{Moles of O}_2 = \frac{0.40\text{ mol e}^-}{4} = \mathbf{0.10\text{ mol of O}_2}$$
$$\text{Mass of O}_2 = 0.10\text{ mol} \times 32\text{ g/mol} = \mathbf{3.2\text{ g}}$$
$$\text{Volume of O}_2\text{ at STP} = 0.10\text{ mol} \times 22.4\text{ L/mol} = \mathbf{2.24\text{ L}}$$

(c) Stoichiometry of overall reaction:
$$2\text{CuSO}_4 + 2\text{H}_2\text{O} \rightarrow 2\text{Cu} + 2\text{H}_2\text{SO}_4 + \text{O}_2$$
The molar ratio of $\text{Cu} : \text{H}_2\text{SO}_4$ is $1 : 1$. Thus, $0.20\text{ mol}$ of $\text{Cu}$ corresponds to $0.20\text{ mol}$ of $\text{H}_2\text{SO}_4$.
$$\text{Molar mass of H}_2\text{SO}_4 = 2(1) + 32 + 4(16) = 98\text{ g/mol}$$
$$\text{Mass of H}_2\text{SO}_4 = 0.20\text{ mol} \times 98\text{ g/mol} = \mathbf{19.6\text{ g}}$$

*(Conservation of Mass Check:*
*Reactants consumed: $0.20\text{ mol CuSO}_4\ (0.20 \times 159.5 = 31.9\text{ g}) + 0.20\text{ mol H}_2\text{O}\ (0.20 \times 18 = 3.6\text{ g}) = 35.5\text{ g}$.*
*Products formed: $12.7\text{ g (Cu)} + 19.6\text{ g (H}_2\text{SO}_4) + 3.2\text{ g (O}_2) = 35.5\text{ g}$ ✅)*

---

### Example 2: Acidified Water: Water Decomposed and Gas Volumes

**Question:** During the electrolysis of acidified water, exactly $90\text{ g}$ of water is completely decomposed into gases. Calculate the moles and masses of $\text{H}_2$ and $\text{O}_2$ produced, the moles of electrons transferred, and the gas volume ratio.

**Solution:**
- Moles of water decomposed:
$$n(\text{H}_2\text{O}) = \frac{90\text{ g}}{18\text{ g/mol}} = \mathbf{5.0\text{ mol}}$$
- From $2\text{H}_2\text{O} \rightarrow 2\text{H}_2 + \text{O}_2$:
  - Moles of $\text{H}_2 = 5.0\text{ mol} \implies \text{Mass} = 5.0 \times 2 = \mathbf{10\text{ g}}$
  - Moles of $\text{O}_2 = \frac{5.0}{2} = 2.5\text{ mol} \implies \text{Mass} = 2.5 \times 32 = \mathbf{80\text{ g}}$
  - Mass check: $10\text{ g} + 80\text{ g} = 90\text{ g}$ ✅
- Electron transfer: Each mole of $\text{H}_2$ requires $2\text{ mol e}^-$; thus, $5.0 \times 2 = \mathbf{10.0\text{ mol of electrons}}$ passed. At the anode, $2.5\text{ mol O}_2 \times 4 = 10.0\text{ mol e}^-$ ✅.
- Volume ratio: $\text{Volume H}_2 : \text{Volume O}_2 = 5.0 : 2.5 = \mathbf{2 : 1}$ ✅.

---

### Example 3: Concentrated NaCl (Brine): Yield of NaOH and Gases

**Question:** Concentrated sodium chloride solution is electrolysed using graphite electrodes, producing $0.50\text{ mol}$ of hydrogen gas at the cathode.
(a) What mass of chlorine gas is liberated at the anode?
(b) What mass of sodium hydroxide is generated in the solution?
(c) How many moles of electrons flowed through the circuit?

**Solution:**
Overall reaction: $2\text{NaCl} + 2\text{H}_2\text{O} \rightarrow 2\text{NaOH} + \text{Cl}_2 + \text{H}_2$.
- (a) The stoichiometric ratio of $\text{H}_2 : \text{Cl}_2$ is $1 : 1$.
$$\text{Moles of Cl}_2 = 0.50\text{ mol}$$
$$\text{Mass of Cl}_2 = 0.50\text{ mol} \times 71\text{ g/mol} = \mathbf{35.5\text{ g}}$$
- (b) The ratio of $\text{H}_2 : \text{NaOH}$ is $1 : 2$.
$$\text{Moles of NaOH} = 0.50 \times 2 = 1.0\text{ mol}$$
$$\text{Mass of NaOH} = 1.0\text{ mol} \times 40\text{ g/mol} = \mathbf{40.0\text{ g}}$$
- (c) At the cathode: $2\text{H}^+ + 2\text{e}^- \rightarrow \text{H}_2$.
$$\text{Moles of electrons} = 0.50\text{ mol} \times 2 = \mathbf{1.0\text{ mol of electrons}}$$

---

## Common Pitfalls to Avoid

1. **Mistake 1: Expecting sodium metal to deposit at the cathode during electrolysis of aqueous NaCl.**
   *Correction:* In aqueous solution, both $\text{Na}^+$ and $\text{H}^+$ ions are present at the cathode. Because hydrogen is far lower in the discharge series than sodium, $\text{H}^+$ discharges preferentially to yield $\text{H}_2$ gas. Sodium metal can only be obtained by electrolysing **dry, molten NaCl** (where no water or $\text{H}^+$ exists).

2. **Mistake 2: Assuming copper electrodes and inert graphite electrodes give the same result in CuSO₄ solution.**
   *Correction:* With inert electrodes, $\text{O}_2$ gas evolves at the anode and the blue solution fades as $\text{Cu}^{2+}$ is depleted. With active copper electrodes, the copper anode itself oxidises and dissolves ($\text{Cu} \rightarrow \text{Cu}^{2+} + 2\text{e}^-$); no $\text{O}_2$ evolves, and the blue color of the solution never fades!

3. **Mistake 3: Thinking that sulfate (SO₄²⁻) or nitrate (NO₃⁻) ions discharge at the anode in aqueous solution.**
   *Correction:* Polyatomic oxo-anions like $\text{SO}_4^{2-}$ and $\text{NO}_3^-$ are extremely stable and do not surrender electrons under aqueous electrolysis conditions. Instead, hydroxide ions ($\text{OH}^-$) from water always discharge preferentially, evolving **oxygen gas ($\text{O}_2$)**.

4. **Mistake 4: Believing the anode in an electrolytic cell has a negative charge.**
   *Correction:* Always remember: the anode is wired to the **positive terminal** of the DC power supply, giving it a **positive charge**. Negative anions ($\text{Cl}^-$, $\text{OH}^-$) are attracted to it. Reduction occurs at the cathode (−); oxidation occurs at the anode (+).

---

## Quick Recap

- **Aqueous Solutions:** Contain ions from both the dissolved solute and water ($\text{H}^+$, $\text{OH}^-$).
- **Cation Discharge Series (easiest to hardest):** $\text{Ag}^+ > \text{Cu}^{2+} > \text{H}^+ > \text{Pb}^{2+} > \text{Sn}^{2+} > \text{Ni}^{2+} > \text{Fe}^{2+} > \text{Zn}^{2+} > \text{Al}^{3+} > \text{Mg}^{2+} > \text{Ca}^{2+} > \text{Na}^+ > \text{K}^+$. Cations above $\text{H}^+$ yield $\text{H}_2$ gas in dilute aqueous solutions.
- **Anion Discharge Series (easiest to hardest):** $\text{I}^- > \text{Br}^- > \text{Cl}^- > \text{OH}^-$. Oxo-anions ($\text{SO}_4^{2-}$, $\text{NO}_3^-$) never discharge in aqueous solution; $\text{OH}^-$ discharges to release $\text{O}_2$.
- **Three Governing Factors:**
  1. Position in discharge series
  2. Concentration of competing ions (e.g., concentrated $\text{Cl}^-$ yields $\text{Cl}_2$; dilute yields $\text{O}_2$)
  3. Nature of electrodes (inert graphite/Pt vs. active dissolvable metal like Cu)
- **Key Aqueous Systems:**
  - Acidified water ($\text{Pt}$): $\text{H}_2$ and $\text{O}_2$ in a $2 : 1$ volume ratio.
  - Concentrated $\text{NaCl}$ (brine, graphite): $\text{H}_2$ (cathode), $\text{Cl}_2$ (anode), $\text{NaOH}$ in solution.
  - $\text{CuSO}_4$ with inert electrodes: $\text{Cu}$ deposited, $\text{O}_2$ evolved, solution turns acidic and blue fades.
  - $\text{CuSO}_4$ with copper electrodes: $\text{Cu}$ deposited at cathode, anode dissolves; concentration and blue color remain constant.

---

## Practice Questions

1. A dilute solution of calcium nitrate, $\text{Ca(NO}_3)_2$, is electrolysed using inert platinum electrodes.
   (a) List all ions present in the solution.
   (b) State the product formed at each electrode and write the corresponding half-equation.
   (c) State the volume ratio of the two gases collected.

2. Concentrated hydrochloric acid ($\text{HCl}$) is electrolysed using graphite electrodes.
   (a) Name the ions present in the electrolyte.
   (b) State the product formed at the cathode and anode, providing balanced half-equations.
   (c) State one major laboratory precaution necessary when conducting this reaction.

3. Dilute silver nitrate ($\text{AgNO}_3$) solution is electrolysed using inert platinum electrodes.
   (a) Identify the products at the cathode and anode.
   (b) Write the overall balanced chemical equation.
   (c) Describe the change in appearance and pH of the solution.
   (d) Predict what happens if the platinum electrodes are replaced with pure silver electrodes.

4. Concentrated potassium iodide ($\text{KI}$) solution is electrolysed using graphite electrodes.
   (a) Name the products liberated at the cathode and anode, and the compound remaining in solution.
   (b) If $76.2\text{ g}$ of solid iodine ($\text{I}_2$) is formed ($\text{I} = 127$), calculate:
       (i) Moles of electrons transferred
       (ii) Mass of hydrogen gas evolved
       (iii) Mass of $\text{KOH}$ produced in solution

5. Concentrated copper(II) chloride ($\text{CuCl}_2$) solution is electrolysed with graphite electrodes until $3.81\text{ g}$ of copper metal is deposited.
   (a) Calculate the moles of electrons transferred.
   (b) Calculate the mass of chlorine gas liberated at the anode.

6. Dilute sulfuric acid is electrolysed using a copper anode and a platinum cathode.
   (a) Name the products formed at each electrode in the initial minutes.
   (b) Describe and explain the color change observed in the solution over time.

7. Dilute sodium sulfate ($\text{Na}_2\text{SO}_4$) solution is electrolysed using platinum electrodes.
   (a) Identify the products formed at the cathode and anode.
   (b) If $0.50\text{ mol}$ of electrons passes through the cell, calculate the mass of each gas evolved.
   (c) Explain how the concentration of $\text{Na}_2\text{SO}_4$ changes.

8. A single aqueous solution contains a mixture of silver nitrate, copper(II) nitrate, and zinc nitrate. It is electrolysed using platinum electrodes for an extended duration. Given that the discharge order of cations is $\text{Ag}^+ > \text{Cu}^{2+} > \text{H}^+ > \text{Zn}^{2+}$, state the sequence in which substances deposit or evolve at the cathode, and name the sole gas evolved at the anode.

9. Concentrated sodium bromide ($\text{NaBr}$) solution is electrolysed using graphite electrodes.
   (a) Identify the products formed at both electrodes and the compound remaining in solution.
   (b) If a concentrated mixture of $\text{NaBr}$ and $\text{NaCl}$ is electrolysed, which halogen gas evolves first at the anode? Justify your answer.

10. Explain why very dilute aqueous $\text{NaCl}$ yields oxygen gas at the anode, whereas concentrated brine yields chlorine gas. Furthermore, explain why sodium metal can never be produced by electrolysing aqueous $\text{NaCl}$, naming the industrial process that extracts metallic sodium.

11. State whether each statement is True or False. If false, provide the correction:
    (a) Concentrated $\text{NaCl}$ solution yields sodium metal at the cathode.
    (b) In an electrolytic cell, the anode is the positive electrode.
    (c) Electrolysing $\text{CuSO}_4$ solution with copper electrodes causes the blue color of the electrolyte to fade.
    (d) In the electrolysis of dilute $\text{H}_2\text{SO}_4$, sulfate ions ($\text{SO}_4^{2-}$) discharge at the anode.
    (e) Electrons travel directly through the aqueous electrolyte from cathode to anode.

12. **Ranking Exercise:** Arrange the following cations in order of preferential discharge at the cathode, starting with the easiest: $\text{Zn}^{2+}$, $\text{Ag}^+$, $\text{Na}^+$, $\text{H}^+$, $\text{Ni}^{2+}$.
    (a) State which of these cations give way to $\text{H}^+$ in a dilute aqueous solution.
    (b) Identify the cation that can never be discharged from any aqueous solution.

---

### Answers

1. (a) Ions present: $\text{Ca}^{2+}$, $\text{NO}_3^-$ (from salt) and $\text{H}^+$, $\text{OH}^-$ (from water).
   (b)
   - Cathode (−): $\text{H}^+$ discharges preferentially over $\text{Ca}^{2+}$:
     $$4\text{H}^+ + 4\text{e}^- \rightarrow 2\text{H}_2\text{ (g)}$$
   - Anode (+): $\text{OH}^-$ discharges preferentially over $\text{NO}_3^-$:
     $$4\text{OH}^- \rightarrow 2\text{H}_2\text{O} + \text{O}_2\text{ (g)} + 4\text{e}^-$$
   (c) The volume ratio of $\text{H}_2 : \text{O}_2$ is **$2 : 1$**. Overall: $2\text{H}_2\text{O} \rightarrow 2\text{H}_2 + \text{O}_2$.

2. (a) Ions: $\text{H}^+$, $\text{Cl}^-$ (from $\text{HCl}$) and $\text{H}^+$, $\text{OH}^-$ (from water).
   (b)
   - Cathode (−): $2\text{H}^+ + 2\text{e}^- \rightarrow \text{H}_2\text{ (g)}$
   - Anode (+): $2\text{Cl}^- \rightarrow \text{Cl}_2\text{ (g)} + 2\text{e}^-$ (due to high concentration of $\text{Cl}^-$).
   (c) Chlorine gas is choking and toxic; the demonstration must be conducted inside an operating fume hood.

3. (a) Cathode: Metallic silver ($\text{Ag}$); Anode: Oxygen gas ($\text{O}_2$).
   (b) Overall: $4\text{AgNO}_3 + 2\text{H}_2\text{O} \rightarrow 4\text{Ag} + 4\text{HNO}_3 + \text{O}_2$.
   (c) As silver deposits, $\text{Ag}^+$ is removed; $\text{HNO}_3$ accumulates in solution, causing the pH to drop sharply (becomes acidic).
   (d) With silver electrodes: the silver anode dissolves ($\text{Ag} \rightarrow \text{Ag}^+ + \text{e}^-$) at the same rate silver deposits at the cathode. No $\text{O}_2$ gas is produced, and the $\text{AgNO}_3$ concentration remains constant.

4. (a) Cathode: Hydrogen gas ($\text{H}_2$); Anode: Solid iodine ($\text{I}_2$); Remaining solute: Potassium hydroxide ($\text{KOH}$). Overall: $2\text{KI} + 2\text{H}_2\text{O} \rightarrow 2\text{KOH} + \text{H}_2 + \text{I}_2$.
   (b) Molar mass of $\text{I}_2 = 2 \times 127 = 254\text{ g/mol}$.
   - Moles of $\text{I}_2 = \frac{76.2\text{ g}}{254\text{ g/mol}} = 0.30\text{ mol}$.
   - (i) Since $2\text{I}^- \rightarrow \text{I}_2 + 2\text{e}^-$, moles of electrons = $0.30 \times 2 = \mathbf{0.60\text{ mol of electrons}}$.
   - (ii) $0.60\text{ mol e}^-$ produces $0.30\text{ mol H}_2 \implies \text{Mass} = 0.30 \times 2 = \mathbf{0.60\text{ g of H}}_2$.
   - (iii) Moles of $\text{KOH} = 2 \times 0.30 = 0.60\text{ mol}$. Molar mass of $\text{KOH} = 39 + 16 + 1 = 56\text{ g/mol}$. Mass = $0.60 \times 56 = \mathbf{33.6\text{ g of KOH}}$.
   *(Check: Reactants $= 0.60(166) + 0.60(18) = 110.4\text{ g}$; Products $= 33.6 + 0.60 + 76.2 = 110.4\text{ g}$ ✅)*

5. (a) Moles of $\text{Cu} = \frac{3.81\text{ g}}{63.5\text{ g/mol}} = 0.060\text{ mol}$.
   Since $\text{Cu}^{2+} + 2\text{e}^- \rightarrow \text{Cu}$, moles of electrons = $0.060 \times 2 = \mathbf{0.12\text{ mol of electrons}}$.
   (b) At the anode, $2\text{Cl}^- \rightarrow \text{Cl}_2 + 2\text{e}^-$.
   $$\text{Moles of Cl}_2 = \frac{0.12}{2} = 0.060\text{ mol} \implies \text{Mass} = 0.060 \times 71 = \mathbf{4.26\text{ g of Cl}}_2$$

6. (a) At the active copper anode (+), copper atoms oxidise and dissolve: $\text{Cu} \rightarrow \text{Cu}^{2+} + 2\text{e}^-$. At the platinum cathode (−), $\text{H}^+$ discharges to yield hydrogen gas: $2\text{H}^+ + 2\text{e}^- \rightarrow \text{H}_2$.
   (b) The solution gradually turns blue because hydrated copper(II) ions ($\text{Cu}^{2+}$) continuously enter the liquid from the dissolving anode.

7. (a) Cathode: Hydrogen gas ($\text{H}_2$); Anode: Oxygen gas ($\text{O}_2$).
   (b) With $0.50\text{ mol}$ of electrons:
   - Moles of $\text{H}_2 = \frac{0.50}{2} = 0.25\text{ mol} \implies \text{Mass} = 0.25 \times 2 = \mathbf{0.50\text{ g of H}}_2$.
   - Moles of $\text{O}_2 = \frac{0.50}{4} = 0.125\text{ mol} \implies \text{Mass} = 0.125 \times 32 = \mathbf{4.0\text{ g of O}}_2$.
   (c) Water is decomposed ($2\text{H}_2\text{O} \rightarrow 2\text{H}_2 + \text{O}_2$), while $\text{Na}^+$ and $\text{SO}_4^{2-}$ remain intact. The loss of solvent causes the concentration of $\text{Na}_2\text{SO}_4$ to **increase slightly**.

8. Sequence of cathode products:
   1. **Silver ($\text{Ag}$)** deposits first (easiest to discharge).
   2. Once $\text{Ag}^+$ is exhausted, **Copper ($\text{Cu}$)** deposits next.
   3. Once $\text{Cu}^{2+}$ is exhausted, **Hydrogen gas ($\text{H}_2$)** evolves.
   *(Zinc metal never deposits because $\text{H}^+$ discharges preferentially over $\text{Zn}^{2+}$).*
   - Anode product: **Oxygen gas ($\text{O}_2$)** exclusively ($\text{NO}_3^-$ never discharges).

9. (a) Cathode: $\text{H}_2\text{ (g)}$; Anode: $\text{Br}_2\text{ (l/g)}$; Remaining solute: $\text{NaOH}$.
   (b) In a mixture of $\text{NaBr}$ and $\text{NaCl}$, **Bromine ($\text{Br}_2$) evolves first**, because bromide ($\text{Br}^-$) stands above chloride ($\text{Cl}^-$) in the anion discharge series and loses electrons with greater ease.

10. In very dilute $\text{NaCl}$, the concentration of $\text{Cl}^-$ is extremely low, allowing the thermodynamic preference of $\text{OH}^-$ to prevail and evolve $\text{O}_2$. In concentrated brine, the overwhelming concentration of $\text{Cl}^-$ overcomes this slight energy difference, causing $\text{Cl}_2$ to discharge. Sodium metal can never be formed in aqueous solution because $\text{H}^+$ is discharged preferentially; metallic sodium is manufactured via the **electrolysis of molten NaCl (Downs Process)**.

11. (a) **False.** Aqueous $\text{NaCl}$ yields $\text{H}_2$ gas at the cathode; sodium metal requires molten $\text{NaCl}$.
    (b) **True.**
    (c) **False.** With copper electrodes, the rate of anode dissolution equals the rate of cathode deposition; the blue color remains unchanged.
    (d) **False.** Sulfate ions do not discharge; hydroxide ions ($\text{OH}^-$) discharge to yield $\text{O}_2$ gas.
    (e) **False.** Electrons flow strictly through external wires; conduction in the electrolyte occurs via migrating ions.

12. Ranked order (easiest to hardest): **$\text{Ag}^+ > \text{H}^+ > \text{Ni}^{2+} > \text{Zn}^{2+} > \text{Na}^+$**.
    (a) In dilute aqueous solution, **$\text{Ni}^{2+}$, $\text{Zn}^{2+}$, and $\text{Na}^+$** give way to $\text{H}^+$ (yielding $\text{H}_2$).
    (b) **$\text{Na}^+$** can never be discharged from any aqueous solution.

---

Sophia finished her summary table with a flourish. *"Everything connects: the discharge series, ion concentration, and whether the electrode is active or inert."*

Mr. Davis nodded toward the door. *"Now, what if we use an active metal anode to intentionally coat a metallic object at the cathode with a shiny, corrosion-resistant layer?"*

**What comes next?** In Topic 4, **"Electroplating: Depositing a Lustrous Metallic Coat"** ([electrolysis-part4.md](electrolysis-part4.md)), we put active electrodes to work in jewelry, silverware, and hardware: coating an ordinary iron key with shining nickel, electroplating silver onto cutlery, and calculating the exact mass of metal deposited atom by atom.
