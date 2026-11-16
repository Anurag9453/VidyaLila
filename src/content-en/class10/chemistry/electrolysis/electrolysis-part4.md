# Chapter: Electrolysis (Part 4)

> **Class:** 10 | **Subject:** Chemistry
> **This file continues from [electrolysis-part3.md](electrolysis-part3.md)** (where we established the principles of selective discharge: cation and anion discharge series, the three governing factors, and five detailed case studies, including aqueous $\text{CuSO}_4$ with active copper electrodes). Chapter overview: [electrolysis.md](electrolysis.md). For introductory review: electroplating basics [electricity-part7.md](../../../class9/physics/electricity/electricity-part7.md).
> **Topics covered in this file:**
> 4. Electroplating: Depositing a Lustrous Metallic Coat

---

# Topic 4: Electroplating: Depositing a Lustrous Metallic Coat

In the previous topic, we uncovered a fascinating phenomenon: when an aqueous solution of copper(II) sulfate is electrolysed using an **active copper anode**, the anions in solution never discharge. Instead, the copper anode itself oxidises and dissolves into the solution ($\text{Cu} \rightarrow \text{Cu}^{2+} + 2\text{e}^-$), while copper cations deposit simultaneously onto the cathode. As a result, copper is cleanly transferred from one electrode to the other, while the concentration of the electrolyte remains constant.

That single insight forms the bedrock of an indispensable global manufacturing process: **electroplating**.

Electroplating uses an electric current to coat an object made of a common or base metal with an ultra-thin, adherent layer of an expensive, lustrous, or corrosion-resistant metal. In this topic, we will examine why the target article must always serve as the cathode, how silver and nickel plating cells operate, how to calculate the exact mass of deposited metal by counting electrons, why industrial cyanide baths require strict regulation, and how electroplating differs fundamentally from hot-dip galvanising.

---

## The Tarnished Serving Platter at the Plating Workshop

On a quiet Saturday morning, Mr. Harrison took his nephew Liam to an old metal restoration and finishing workshop. The stainless-steel serving platter from Mr. Harrison's dining room had lost its mirror-like shine: years of scrubbing had worn away the original nickel plating, leaving the dull base steel exposed with unsightly scratches.

Inside the workshop, several large thermoplastic tanks were arranged in rows, connected to low-voltage DC power busbars. A master craftsman, wearing protective goggles and heavy neoprene gloves, clipped the tarnished platter to an electrical lead and lowered it into a clear, emerald-green solution. After several minutes of gentle agitation under steady current, he lifted the platter out, rinsed it in deionised water, and dried it with a soft lint-free cloth.

The transformed platter gleamed with a brilliant, **mirror-like silver luster**!

Liam's eyes went wide. *"Uncle Harrison, that looks like pure magic! He dipped a scratched, cloudy plate into liquid, and it came out looking brand-new! Did he paint it with liquid silver?"*

Mr. Harrison chuckled. *"Not paint, Liam—solid metal! That is **electroplating**. The electric current deposited a microscopically thin, tightly bonded layer of pure nickel onto the steel—thousands of times thinner than a human hair. But remember: stay behind the safety railing. That plating bath contains chemical solutions that require rigorous industrial training to handle."*

Liam took a step back, intrigued. *"I see the platter was hung from a wire, but there was also a shiny metal bar hanging on the other side of the tank. Why were both connected to the power supply? And how did the artisan know which wire to connect to which terminal?"*

*"That exact question unlocks the entire science of electroplating,"* replied Mr. Harrison. *"Let us break down the four golden rules."*

---

## Key Vocabulary

| Term | Meaning (Plain Language) | Example |
|---|---|---|
| **Electroplating** | The deposition of a thin, adherent protective or decorative coating of one metal onto another by electrolysis | Plating nickel onto a steel platter, or silver onto a brass spoon |
| **Plating metal** | The superior metal that forms the coating layer | Silver, gold, nickel, chromium, copper |
| **Article** | The conductive object that is to be coated | Spoon, door key, car emblem, jewelry piece |
| **Plating bath** | The electrolytic solution containing ions of the plating metal | Aqueous nickel(II) sulfate solution |
| **Active anode** | An anode made of the plating metal that dissolves into solution during electrolysis | A pure silver rod in an $\text{AgNO}_3$ bath |
| **Hot-dip galvanising** | Coating iron or steel by immersing it into molten zinc (no electric current used) | Galvanised corrugated roofing sheets |
| **Strike layer** | A preliminary, ultra-thin base electroplate applied to ensure strong adhesion of subsequent coatings | A copper flash coat applied to an iron key before nickel plating |

---

## Part A: The Four Golden Rules of Electroplating

Every successful electroplating setup follows **four non-negotiable rules**:

```
   (+) TERMINAL -----------------------------> (-) TERMINAL
         |                                           |
         v                                           v
    ANODE (+)                                   CATHODE (−)
  [Plating Metal]                             [Target Article]
  Must dissolve:                              Must receive metal:
  M → Mⁿ⁺ + n e⁻                              Mⁿ⁺ + n e⁻ → M
         \                                           ^
          \---> [ ELECTROLYTE: Soluble Salt ] ------/
                       of Plating Metal
```

**Rule 1: The Article to Be Plated Must Always Be the Cathode (−)**  
At the cathode, **cations gain electrons (reduction)** to form neutral solid metal atoms:

$$\text{Ag}^+ + \text{e}^- \rightarrow \text{Ag (solid)}$$
$$\text{Ni}^{2+} + 2\text{e}^- \rightarrow \text{Ni (solid)}$$

Solid metal can only deposit where cations arrive and receive electrons. Therefore, the object to be coated must always be connected to the **negative terminal** of the DC power supply.

**Rule 2: The Anode (+) Must Be a Clean Bar of the Plating Metal**  
The anode is the site of oxidation. By making the anode from the pure plating metal (an active anode), metal atoms continuously lose electrons and dissolve into solution:

$$\text{Ag} \rightarrow \text{Ag}^+ + \text{e}^-$$
$$\text{Ni} \rightarrow \text{Ni}^{2+} + 2\text{e}^-$$

This replenishes the cations consumed at the cathode, keeping the metal ion concentration in the electrolyte bath constant.

**Rule 3: The Electrolyte Must Be a Soluble Salt of the Plating Metal**  
To plate silver, use a soluble silver salt (e.g., $\text{AgNO}_3$). To plate nickel, use nickel(II) sulfate ($\text{NiSO}_4$). To plate copper, use copper(II) sulfate ($\text{CuSO}_4$). The bath must supply the exact metal ions intended for deposition.

**Rule 4: Use a Low, Steady Direct Current and a Thoroughly Cleaned Article**  
A low, continuous direct current (DC) ensures that metal ions deposit slowly and uniformly, forming a compact, adherent crystalline lattice. Excessive current causes turbulent deposition, resulting in a dark, powdery, and flaking coat. Alternating current (AC) cannot be used because it constantly reverses electrode polarity, alternating deposition with dissolution!

---

## Part B: Silver Plating: The Journey of a Spoon

Consider coating an ordinary brass or steel spoon with a lustrous, durable layer of pure metallic silver:

- **Cathode (−):** The thoroughly degreased and cleaned spoon.
- **Anode (+):** A strip or rod of pure silver metal.
- **Electrolyte:** Aqueous silver nitrate ($\text{AgNO}_3$) solution (or sodium argentocyanide in industrial baths).

```
               e⁻ -->  [ DC Power ]  e⁻ -->
          +-----------(+)--------(−)-----------+
          :                                    :
          :                                    :
    +-----:------------------------------------:-----+
    :     :                                    :     :
    :  +--:-----+                       +------:--+  :
    :  :        :                       :         :  :
    :  : ANODE  :   Ag⁺ --->            : CATHODE :  :
    :  : Pure   :   Ag⁺ --->            : Brass   :  :
    :  : Silver :   Ag⁺ --->            : Spoon   :  :
    :  :        :                       :         :  :
    :  +--------+                       +---------+  :
    :                                                :
    :       Aqueous Silver Nitrate (AgNO₃) Bath      :
    +------------------------------------------------+

  At Anode (+):   Ag → Ag⁺ + e⁻      (Silver dissolves)
  At Cathode (−): Ag⁺ + e⁻ → Ag      (Silver deposits onto spoon)
```

> **Figure 4.1** – Silver electroplating cell: At the silver anode (+), silver atoms oxidise and dissolve into the electrolyte. Silver cations ($\text{Ag}^+$) migrate toward the cathode (−), where they gain electrons and deposit as a lustrous silver film onto the spoon. Electrons travel from anode to cathode through the external circuit.

Balanced electrode half-equations:
- **At Anode (+) [Oxidation]:** $\text{Ag} \rightarrow \text{Ag}^+ + \text{e}^-$ (Charge: $0 = (+1) + (-1)$ ✅)
- **At Cathode (−) [Reduction]:** $\text{Ag}^+ + \text{e}^- \rightarrow \text{Ag}$ (Charge: $(+1) + (-1) = 0$ ✅)

---

### Industrial Silver Plating in Practice (Informational Only)

In commercial plating factories, simple silver nitrate is rarely used alone because $\text{Ag}^+$ ions discharge so rapidly that they produce a rough, loose, granular crystal deposit. Instead, commercial platers use a bath of **sodium argentocyanide**, $\text{Na[Ag(CN)}_2\text{]}$, or potassium dicyanoargentate.

In this complex, silver ions are sequestered in a stable coordination anion ($\text{[Ag(CN)}_2\text{]}^-$), releasing free $\text{Ag}^+$ into solution at an extremely low, controlled equilibrium concentration. This slow, steady supply forces the depositing silver atoms to form a velvety, micro-crystalline, mirror-smooth coat.

> [!CAUTION]
> **Toxicity Hazard:**
> Cyanide salts are lethal poisons: even tiny traces are fatal, and accidental contact with acids liberates deadly hydrogen cyanide gas ($\text{HCN}$). Cyanide electroplating is restricted to licensed industrial facilities equipped with scrubbers and air-monitoring systems. It is never used in school labs or home environments.

---

### Why Does the Electrolyte Concentration Remain Constant?

One of the most elegant aspects of electroplating with an active anode is chemical equilibrium:
- For every 1 mole of $\text{Ag}^+$ ions discharged and deposited onto the spoon at the cathode:
$$\text{Ag}^+ + \text{e}^- \rightarrow \text{Ag}$$
- Exactly 1 mole of silver dissolves into solution from the anode:
$$\text{Ag} \rightarrow \text{Ag}^+ + \text{e}^-$$

Because the rate of dissolution at the anode equals the rate of deposition at the cathode, the concentration of $\text{Ag}^+$ ions in the electrolyte bath remains **strictly unchanged**. The anode grows progressively thinner and lighter, while the spoon gains an identical mass of silver!

---

## Part C: Nickel and Copper Plating: The Iron Key

To protect a steel key from rusting while providing a brilliant chrome-like shine, it is electroplated with nickel:

- **Cathode (−):** The cleaned steel key.
- **Anode (+):** A pure nickel metal plate.
- **Electrolyte:** Aqueous nickel(II) sulfate ($\text{NiSO}_4$) solution.

```
               e⁻ -->  [ DC Power ]  e⁻ -->
          +-----------(+)--------(−)-----------+
          :                                    :
          :                                    :
    +-----:------------------------------------:-----+
    :     :                                    :     :
    :  +--:-----+                       +------:--+  :
    :  :        :                       :         :  :
    :  : ANODE  :   Ni²⁺ --->           : CATHODE :  :
    :  : Pure   :   Ni²⁺ --->           :  Steel  :  :
    :  : Nickel :                       :   Key   :  :
    :  :        :                       :         :  :
    :  +--------+                       +---------+  :
    :                                                :
    :      Aqueous Nickel(II) Sulfate (NiSO₄) Bath   :
    +------------------------------------------------+

  At Anode (+):   Ni → Ni²⁺ + 2e⁻     (Nickel dissolves)
  At Cathode (−): Ni²⁺ + 2e⁻ → Ni     (Nickel deposits onto key)
```

> **Figure 4.2** – Nickel electroplating of an iron key: At the nickel anode (+), each nickel atom surrenders 2 electrons to enter the solution as $\text{Ni}^{2+}$. At the steel key cathode (−), each $\text{Ni}^{2+}$ ion absorbs 2 electrons to plate out as a uniform layer of metallic nickel. The concentration of $\text{NiSO}_4$ in the bath remains constant.

Balanced electrode half-equations:
- **Anode (+):** $\text{Ni} \rightarrow \text{Ni}^{2+} + 2\text{e}^-$
- **Cathode (−):** $\text{Ni}^{2+} + 2\text{e}^- \rightarrow \text{Ni}$

---

### Copper Plating (Teacher Demonstration & Concept)

In school demonstrations, teachers frequently demonstrate copper electroplating using a copper plate anode, a brass key cathode, and an aqueous solution of copper(II) sulfate ($\text{CuSO}_4$):
- **Anode (+):** $\text{Cu} \rightarrow \text{Cu}^{2+} + 2\text{e}^-$
- **Cathode (−):** $\text{Cu}^{2+} + 2\text{e}^- \rightarrow \text{Cu}$

> [!NOTE]
> **The Strike Layer Insight:**
> If an iron nail is simply dipped into aqueous $\text{CuSO}_4$ without any battery, a copper coating appears spontaneously due to displacement:
> $$\text{Fe} + \text{CuSO}_4 \rightarrow \text{FeSO}_4 + \text{Cu}$$
> However, this displacement deposit is loose, porous, and flakes off easily when touched! Electroplating with a regulated direct current forces the copper atoms to form a dense, tightly bonded crystalline coating. In industry, steel parts often receive an initial thin **copper strike layer** to guarantee strong mechanical adhesion before the outer nickel or chromium coat is applied.

---

## Part D: Which Metal Goes Where, and Why?

The table below outlines standard industrial plating systems:

| Target Article | Plating Metal | Anode Material | Electrolyte Bath | Primary Purpose |
|---|---|---|---|---|
| Cutlery, serving platters | Silver ($\text{Ag}$) | Pure silver strip | $\text{AgNO}_3$ or argentocyanide complex | Decorative elegance, corrosion resistance |
| Steel keys, fasteners, tools | Nickel ($\text{Ni}$) | Pure nickel plate | Aqueous $\text{NiSO}_4$ | Hard wear-resistant coat, rust prevention |
| Printed circuit boards (PCBs) | Copper ($\text{Cu}$) | Pure copper bar | Aqueous $\text{CuSO}_4$ + $\text{H}_2\text{SO}_4$ | High electrical conductivity, strike coat |
| Bathroom faucets, car trim | Chromium ($\text{Cr}$) | Insoluble lead-antimony anode | Chromic acid bath (contains toxic $\text{Cr}^{6+}$) | Mirror finish, extreme hardness, scratch resistance |
| Steel food cans | Tin ($\text{Sn}$) | Pure tin bar | Aqueous tin(II) salt | Non-toxic barrier protecting food from acidic corrosion |
| Electrical connectors, jewelry | Gold ($\text{Au}$) | Insoluble platinum or gold | Gold cyanide complex | Tarnish resistance, superior electrical contact |

---

### Four Reasons for Electroplating

1. **Corrosion Protection:** Base metals like iron and steel rust rapidly when exposed to air and moisture. A coating of nickel, tin, or chromium provides an impermeable barrier.
2. **Decorative Enhancement:** Inexpensive alloys (such as brass or steel) are transformed with the lustrous finish of silver, gold, or chrome at a fraction of the cost.
3. **Mechanical Hardness and Wear Resistance:** Chromium and nickel coatings provide superior hardness, protecting engine parts, machine tools, and faucets from abrasion.
4. **Economic Value:** Solid sterling silver or 18-karat gold cutlery is prohibitively expensive ($1,000+ per set); electroplating coats a sturdy base alloy with a micro-thin layer of precious metal, achieving identical luxury and durability for a tiny fraction of the cost ($50).

---

## Part E: Electroplating vs. Hot-Dip Galvanising

Students often confuse electroplating with galvanising. Both coat an underlying metal, but their techniques, properties, and applications differ sharply:

| Feature | Electroplating | Hot-Dip Galvanising |
|---|---|---|
| **Mechanism** | Electrochemical deposition from an aqueous electrolyte bath | Physical immersion into a bath of **molten zinc** ($\approx 450\ ^\circ\text{C}$) |
| **Electricity required?** | **Yes** (regulated low-voltage DC power) | **No** (purely thermal dipping process) |
| **Coating thickness** | Extremely thin ($5\text{ to }25\ \mu\text{m}$), highly uniform | Much thicker ($50\text{ to }100+\ \mu\text{m}$), rougher |
| **Metals applied** | Silver, gold, nickel, chromium, tin, copper, zinc | Almost exclusively **zinc** |
| **Scratch behavior** | If nickel or tin is scratched, the exposed iron rusts *faster* | Even if scratched, zinc acts as a **sacrificial anode** to protect iron |
| **Typical uses** | Jewelry, silverware, luxury faucets, keys, electronics | Structural steel beams, buckets, utility poles, chain-link fences |

---

## Part F: Counting Electrons: Calculating Deposited Metal Mass

In introductory electrochemistry, we calculate masses by counting the moles of electrons transferred:

$$\text{Moles of electrons } (n_{\text{e}}) = \frac{\text{Mass of metal deposited}}{\text{Molar mass of metal}} \times (\text{Valency charge of ion})$$

- For monovalent ions like $\text{Ag}^+$:
$$\text{Ag}^+ + \text{e}^- \rightarrow \text{Ag} \implies 1\text{ mol of electrons deposits } 1\text{ mol of Ag } (108\text{ g})$$
- For divalent ions like $\text{Ni}^{2+}$ or $\text{Cu}^{2+}$:
$$\text{M}^{2+} + 2\text{e}^- \rightarrow \text{M} \implies 2\text{ mol of electrons deposit } 1\text{ mol of metal}$$

*(Atomic masses: $\text{Cu} = 63.5$, $\text{Ni} = 59$, $\text{Ag} = 108$)*

---

### Solved Example 1: Silver: Mass from Moles of Electrons

**Question:** In an electroplating cell, a current passes until exactly $0.025\text{ mol}$ of electrons arrives at the cathode. What mass of silver is deposited on the article?

**Solution:**
1. Cathode half-reaction: $\text{Ag}^+ + \text{e}^- \rightarrow \text{Ag}$.
2. Molar ratio: $1\text{ mol e}^- \rightarrow 1\text{ mol Ag}$.
$$\text{Moles of Ag deposited} = 0.025\text{ mol}$$
3. Mass of silver deposited:
$$\text{Mass} = 0.025\text{ mol} \times 108\text{ g/mol} = \mathbf{2.70\text{ g of Ag}}$$
*(Check: $2.70 \div 108 = 0.025\text{ mol}$ ✅)*

---

### Solved Example 2: Nickel: Deposited Mass and Anode Loss

**Question:** A nickel electroplating cell is operated until $0.30\text{ mol}$ of electrons has passed through the external circuit.
(a) What mass of nickel is deposited onto the cathode?
(b) By how much does the mass of the nickel anode decrease?
(c) What change occurs in the concentration of the aqueous $\text{NiSO}_4$ electrolyte?

**Solution:**
(a) Cathode half-reaction: $\text{Ni}^{2+} + 2\text{e}^- \rightarrow \text{Ni}$.
$$\text{Moles of Ni deposited} = \frac{0.30\text{ mol e}^-}{2} = 0.15\text{ mol Ni}$$
$$\text{Mass of Ni deposited} = 0.15\text{ mol} \times 59\text{ g/mol} = \mathbf{8.85\text{ g of Ni}}$$

(b) At the active nickel anode, $\text{Ni} \rightarrow \text{Ni}^{2+} + 2\text{e}^-$.
The same $0.30\text{ mol}$ of electrons causes $0.15\text{ mol}$ of nickel to dissolve.
$$\text{Mass loss of anode} = 0.15\text{ mol} \times 59\text{ g/mol} = \mathbf{8.85\text{ g}}$$

(c) Because the rate of nickel dissolution at the anode matches the rate of deposition at the cathode, the $\text{NiSO}_4$ concentration in the bath undergoes **zero change**.

---

### Solved Example 3: Reverse Calculation: Copper-Plating a Key

**Question:** A brass key must be electroplated with a uniform copper strike layer of mass $1.27\text{ g}$. How many moles of electrons must pass through the plating cell?

**Solution:**
1. Moles of copper required:
$$n(\text{Cu}) = \frac{1.27\text{ g}}{63.5\text{ g/mol}} = 0.020\text{ mol Cu}$$
2. Half-reaction: $\text{Cu}^{2+} + 2\text{e}^- \rightarrow \text{Cu}$.
Each mole of $\text{Cu}$ requires $2\text{ mol}$ of electrons:
$$\text{Moles of electrons required} = 0.020\text{ mol} \times 2 = \mathbf{0.040\text{ mol of electrons}}$$
*(Check: $0.040 \div 2 = 0.020\text{ mol Cu} \times 63.5 = 1.27\text{ g}$ ✅)*

---

### Solved Example 4: Anode Dissolution in Silver Plating

**Question:** During the silver plating of a dessert spoon, the spoon gains $4.32\text{ g}$ of pure silver.
(a) How many moles of electrons flowed through the circuit?
(b) What was the mass loss of the pure silver anode?

**Solution:**
(a) Moles of silver deposited:
$$n(\text{Ag}) = \frac{4.32\text{ g}}{108\text{ g/mol}} = 0.040\text{ mol Ag}$$
Since $\text{Ag}^+ + \text{e}^- \rightarrow \text{Ag}$, $1\text{ mol Ag}$ corresponds to $1\text{ mol e}^-$:
$$\text{Moles of electrons} = \mathbf{0.040\text{ mol}}$$
(b) At the anode, $\text{Ag} \rightarrow \text{Ag}^+ + \text{e}^-$. Exactly $0.040\text{ mol}$ of silver dissolved:
$$\text{Mass loss of anode} = 0.040\text{ mol} \times 108\text{ g/mol} = \mathbf{4.32\text{ g}}$$

---

### Solved Example 5: Two Cells in Series: Same Charge, Different Masses

**Question:** A silver plating cell and a copper plating cell are connected in series to the same DC power supply, so the exact same number of electrons passes through both cells. If $0.10\text{ mol}$ of electrons flows through the circuit, calculate the mass of metal deposited at each cathode.

**Solution:**
- **In the Silver Cell ($\text{Ag}^+ + \text{e}^- \rightarrow \text{Ag}$):**
$$\text{Moles of Ag} = 0.10\text{ mol}$$
$$\text{Mass of Ag} = 0.10\text{ mol} \times 108\text{ g/mol} = \mathbf{10.80\text{ g}}$$
- **In the Copper Cell ($\text{Cu}^{2+} + 2\text{e}^- \rightarrow \text{Cu}$):**
$$\text{Moles of Cu} = \frac{0.10\text{ mol}}{2} = 0.050\text{ mol}$$
$$\text{Mass of Cu} = 0.050\text{ mol} \times 63.5\text{ g/mol} = \mathbf{3.175\text{ g}}$$
- **Comparison:** The silver cathode gains significantly more mass ($10.80\text{ g}$ vs. $3.175\text{ g}$) because each silver ion requires only 1 electron (yielding twice as many atoms per electron) and silver has a much higher atomic mass ($108$ vs. $63.5$).

---

## Part G: Correct vs. Incorrect Setup: Side-by-Side Comparison

Why was the artisan so careful to wire the platter to the negative terminal? Let us compare the correct setup with the disastrous inverted setup:

```
   CORRECT SETUP                                 INCORRECT SETUP (FATAL ERROR)

   (+) Battery terminal --- Silver plate         (+) Battery terminal --- Spoon
                            = ANODE                                       = ANODE (X)
   (−) Battery terminal --- Spoon                (−) Battery terminal --- Silver plate
                            = CATHODE                                     = CATHODE (X)
   Electrolyte: Aqueous AgNO₃                    Electrolyte: Aqueous AgNO₃

   Result: Silver deposits onto spoon!           Result: Spoon dissolves into bath! (X)
```

> **Figure 4.3** – Comparison of correct and inverted plating circuits. In the correct circuit (left), the target article is the cathode (−) and receives metal. In the inverted circuit (right), the target article is wired to the positive terminal as the anode (+), causing the article itself to oxidise, dissolve, and corrode into ruin!

**What happens in the inverted setup:**
If an iron or brass spoon is connected to the positive terminal, it becomes an active anode. The base metal atoms of the spoon lose electrons:

$$\text{Fe} \rightarrow \text{Fe}^{2+} + 2\text{e}^- \quad \text{or} \quad \text{Cu} \rightarrow \text{Cu}^{2+} + 2\text{e}^-$$

The spoon is severely etched, pitted, and dissolved into the liquid, permanently destroying it and contaminating the expensive plating bath. Meanwhile, silver simply plates back onto the silver anode plate! Always remember: **the article to be preserved and plated must be the cathode (−)**.

---

## Part H: Three Practical Tips for Flawless Electroplating

1. **The Article Must Be Chemically Clean and Degreased:**
   Before entering the plating tank, the article is scrubbed, acid-pickled to strip surface oxides, and degreased with alkaline detergents. Even a microscopic fingerprint leaves a hydrophobic oil film that prevents ions from making electrical contact, resulting in blistering and peeling.
2. **Current Density Must Be Low and Constant:**
   A low, steady current ensures that arriving ions have sufficient time to settle orderly into the metal crystal lattice. High current densities cause chaotic deposition, resulting in dark, spongy, and brittle coatings.
3. **Firm Electrical Contact:**
   The article must be clamped securely to the cathode busbar to ensure uniform current distribution across its entire surface.

---

## Part I: Classroom Exercise: Design and Label Plating Cells

**Exercise (Paper Design):** Design three separate electroplating cells. For each, specify the cathode, anode, electrolyte, and write the balanced half-reactions:

| Target Article | Desired Coating |
|---|---|
| Steel hex nut | Nickel coat |
| Brass decorative vase | Silver coat |
| Iron key (educational demo) | Copper coat |

**Reference Solutions for Verification:**

| Article | Cathode (−) | Anode (+) | Electrolyte Solution | Cathode Half-Reaction | Anode Half-Reaction |
|---|---|---|---|---|---|
| Steel nut | Nut | Pure nickel plate | Aqueous $\text{NiSO}_4$ | $\text{Ni}^{2+} + 2\text{e}^- \rightarrow \text{Ni}$ | $\text{Ni} \rightarrow \text{Ni}^{2+} + 2\text{e}^-$ |
| Brass vase | Vase | Pure silver rod | Aqueous $\text{AgNO}_3$ | $\text{Ag}^+ + \text{e}^- \rightarrow \text{Ag}$ | $\text{Ag} \rightarrow \text{Ag}^+ + \text{e}^-$ |
| Iron key | Key | Pure copper strip | Aqueous $\text{CuSO}_4$ | $\text{Cu}^{2+} + 2\text{e}^- \rightarrow \text{Cu}$ | $\text{Cu} \rightarrow \text{Cu}^{2+} + 2\text{e}^-$ |

---

## Part J: Can Only Metals Be Plated? And What Happened at the Workshop?

Because electroplating requires the cathode to conduct electric current, non-conductive materials like plastics, resins, and wax cannot be electroplated directly.

However, modern engineering routinely plates plastics—such as chrome-plated automotive grilles, plumbing faucet knobs, and musical instrument components! How is this achieved?
The plastic part is first chemically etched to create a microscopic tooth, then treated with a sensitizing tin(II) chloride solution followed by an ultra-thin chemical layer of metallic palladium or conductive graphite powder. Once the surface is electrically conductive, it is connected as the cathode in a standard electroplating bath!

Returning to the workshop, the master artisan buffed the newly plated platter on a soft cotton wheel. The steel platter looked as though it had just been forged from solid sterling silver.

Liam admired his reflection in the mirror surface. *"Now I understand completely, Uncle Harrison: the platter was the cathode, receiving nickel ions from the solution. The nickel bar was the anode, replacing every ion that plated out. That's why the bath never ran out of metal!"*

Mr. Harrison nodded proudly. *"And remember the most important rule of the workshop: never wash electroplated silverware with harsh abrasive steel wool, or you will strip away the cathode's hard work!"*

---

## Common Pitfalls to Avoid

1. **Mistake 1: Connecting the target article to the positive terminal (anode).**
   *Correction:* If the article is made the anode (+), it acts as an active electrode and dissolves into the solution ($\text{Fe} \rightarrow \text{Fe}^{2+} + 2\text{e}^-$), corroding and destroying the object! The article must always be the **cathode (−)**, where reduction occurs and metal deposits.

2. **Mistake 2: Assuming higher current produces faster and better electroplating.**
   *Correction:* Rapid plating with high current density produces a rough, powdery, dark, and loosely adherent deposit that flakes off easily. High-quality, lustrous, and adherent coatings require a **low, steady direct current**.

3. **Mistake 3: Believing the electrolyte concentration drops during electroplating.**
   *Correction:* In standard electroplating with an active anode of the plating metal, the rate of anode dissolution matches the rate of cathode deposition. For every cation deposited at the cathode, an identical cation dissolves from the anode. Consequently, the **electrolyte concentration remains constant**.

4. **Mistake 4: Skipping the pre-cleaning step, thinking the electroplate will cover surface dirt.**
   *Correction:* Any trace of grease, rust, or fingerprints will prevent the depositing metal from bonding to the substrate lattice. The electroplated layer will blister, peel, and flake off. Thorough degreasing and pickling are mandatory.

5. **Mistake 5: Conflating electroplating with hot-dip galvanising.**
   *Correction:* Electroplating is an electrochemical process utilizing an aqueous electrolyte and DC power to deposit a thin, uniform coating. Hot-dip galvanising is a thermal dipping process in molten zinc ($\approx 450\ ^\circ\text{C}$) that produces a much thicker, rougher coat without electricity.

6. **Mistake 6: Believing non-metals can never be electroplated.**
   *Correction:* While plastics cannot be electroplated directly, coating them first with an ultra-thin conductive strike layer (e.g., colloidal graphite or chemical palladium) allows them to act as cathodes and receive electroplated finishes.

---

## Quick Recap

- **Electroplating:** Using electrolysis to deposit a thin, adherent metallic coating onto a conductive object.
- **The Four Rules:**
  1. Article to be coated = **Cathode (−)**
  2. Plating metal = **Anode (+)** (active anode)
  3. Electrolyte = Aqueous soluble salt of the plating metal
  4. Current = Low, steady DC
- **Electrode Reactions:**
  - Anode (+): $\text{M} \rightarrow \text{M}^{n+} + n\text{e}^-$ (metal dissolves)
  - Cathode (−): $\text{M}^{n+} + n\text{e}^- \rightarrow \text{M}$ (metal deposits)
- **Concentration Invariance:** The rate of metal dissolution at the anode equals the rate of metal deposition at the cathode; the electrolyte bath concentration remains unchanged.
- **Stoichiometry of Electrons:** $1\text{ mol of Ag}$ requires $1\text{ mol of electrons}$; $1\text{ mol of Cu or Ni}$ requires $2\text{ mol of electrons}$.
- **Safety Hazards:** Commercial baths often use cyanide or chromic acid complexes; these are lethal poisons restricted to certified industrial plants.
- **Purposes:** Corrosion prevention, aesthetic appeal, surface hardness, and cost-effective luxury.

---

## Practice Questions

1. A brass door handle is to be electroplated with pure silver.
   (a) Name the cathode, the anode, and a suitable electrolyte.
   (b) Write the balanced half-equation for the reaction occurring at each electrode.

2. A student mistakenly connects a plain steel nut to the positive terminal of a 6 V battery and a strip of pure nickel to the negative terminal, immersing both in aqueous $\text{NiSO}_4$.
   (a) Will the steel nut be nickel-plated? Explain why or why not.
   (b) Describe what happens to the nut and the nickel strip during this experiment.

3. In a silver electroplating cell, exactly $0.075\text{ mol}$ of electrons arrives at the cathode.
   (a) Calculate the moles and mass of silver deposited on the article.
   (b) Determine the mass loss of the silver anode.
   (c) Explain what happens to the concentration of $\text{Ag}^+$ ions in the solution.

4. An industrial copper electroplating bath uses an active copper anode and aqueous $\text{CuSO}_4$. If $0.50\text{ mol}$ of electrons passes through the cell, calculate the mass of copper deposited at the cathode.

5. During the nickel plating of a steel bolt, the bolt gains exactly $2.95\text{ g}$ of nickel.
   (a) How many moles of nickel were deposited?
   (b) How many moles of electrons flowed through the circuit?

6. A batch of dessert spoons is silver-plated, depositing a total mass of $16.2\text{ g}$ of silver. How many moles of electrons were required?

7. A silver plating cell and a nickel plating cell are connected in series so that the exact same quantity of electric current passes through both. If $0.20\text{ mol}$ of electrons flows through the series circuit:
   (a) Calculate the mass of silver deposited in the first cell.
   (b) Calculate the mass of nickel deposited in the second cell.
   (c) Explain why one cathode gains substantially more mass than the other.

8. A solid copper anode with an initial mass of $50.0\text{ g}$ is used to electroplate a brass tray in an aqueous $\text{CuSO}_4$ bath. After plating, the tray has gained $25.4\text{ g}$ of copper. Assuming $100\%$ efficiency:
   (a) Find the final mass of the copper anode.
   (b) Calculate the total moles of electrons that flowed through the circuit.
   (c) State what change, if any, occurred in the blue color of the electrolyte solution.

9. Three separate electrolytic cells (A, B, and C) each contain aqueous $\text{CuSO}_4$ and an iron cathode. Cell A has a copper anode, Cell B has a platinum anode, and Cell C has a graphite anode.
   (a) In which cell(s) does the cathode gain mass?
   (b) In which cell(s) does the anode lose mass?
   (c) In which cell(s) does a gas evolve at the anode? Name the gas.
   (d) In which cell(s) does the blue color of the solution fade? Explain why.

10. State two fundamental differences between electroplating and hot-dip galvanising. Which method would you select to apply a bright, tarnish-resistant decorative finish to a brass door key, and why?

11. A plastic automotive bumper badge features a mirror-chrome finish. Explain in two or three sentences how a non-conductive plastic object can be electroplated.

12. A hobbyist proposes silver-plating a copper ring at home using silver nitrate and an old phone charger. State three distinct safety or technical reasons why this attempt should be discouraged.

13. Draw and label a complete diagram of an electrolytic cell for nickel-plating a steel spoon. Clearly indicate:
    - The anode and cathode
    - The electrolyte solution
    - The polarity of the battery terminals
    - The direction of electron flow in the external circuit
    - The direction of migration of cations in the solution

14. State whether each statement is True or False. If false, provide the correct statement:
    (a) In electroplating, the article to be coated serves as the anode.
    (b) The electrolyte must contain ions of the plating metal.
    (c) When silver-plating with a silver anode, the concentration of $\text{Ag}^+$ in the bath drops significantly over time.
    (d) Cyanide electroplating baths are completely safe for home use because they are commercial products.

---

### Answers

1. (a) **Cathode (−):** The thoroughly cleaned brass handle. **Anode (+):** A pure silver rod or plate. **Electrolyte:** Aqueous silver nitrate ($\text{AgNO}_3$) solution (or sodium argentocyanide).
   (b)
   - Cathode (−): $\text{Ag}^+ + \text{e}^- \rightarrow \text{Ag}$
   - Anode (+): $\text{Ag} \rightarrow \text{Ag}^+ + \text{e}^-$

2. (a) **No, the nut will not be plated.** The nut is connected to the positive terminal, making it the anode.
   (b) As an active anode, the iron nut oxidises and dissolves into solution: $\text{Fe} \rightarrow \text{Fe}^{2+} + 2\text{e}^-$. The nut becomes corroded and pitted. Meanwhile, at the negative nickel strip (cathode), nickel ions deposit onto the nickel strip itself: $\text{Ni}^{2+} + 2\text{e}^- \rightarrow \text{Ni}$. The experiment destroys the nut!

3. (a) $\text{Ag}^+ + \text{e}^- \rightarrow \text{Ag}$.
   $$\text{Moles of Ag} = 0.075\text{ mol}$$
   $$\text{Mass of Ag} = 0.075\text{ mol} \times 108\text{ g/mol} = \mathbf{8.10\text{ g}}$$
   (b) The silver anode dissolves at the identical rate: $\text{Mass loss} = \mathbf{8.10\text{ g}}$.
   (c) The concentration of $\text{Ag}^+$ in the solution remains **completely constant** because the rate of anode dissolution equals the rate of cathode deposition.

4. Cathode half-reaction: $\text{Cu}^{2+} + 2\text{e}^- \rightarrow \text{Cu}$.
   $$\text{Moles of Cu} = \frac{0.50\text{ mol e}^-}{2} = 0.25\text{ mol Cu}$$
   $$\text{Mass of Cu} = 0.25\text{ mol} \times 63.5\text{ g/mol} = \mathbf{15.875\text{ g}}$$

5. (a) Moles of nickel = $\frac{2.95\text{ g}}{59\text{ g/mol}} = \mathbf{0.050\text{ mol Ni}}$.
   (b) Since each $\text{Ni}^{2+}$ ion accepts 2 electrons ($\text{Ni}^{2+} + 2\text{e}^- \rightarrow \text{Ni}$):
   $$\text{Moles of electrons} = 0.050\text{ mol} \times 2 = \mathbf{0.10\text{ mol of electrons}}$$

6. Moles of silver = $\frac{16.2\text{ g}}{108\text{ g/mol}} = 0.15\text{ mol Ag}$.
   Since $\text{Ag}^+ + \text{e}^- \rightarrow \text{Ag}$, each mole of silver requires $1\text{ mol}$ of electrons:
   $$\text{Moles of electrons} = \mathbf{0.15\text{ mol}}$$

7. (a) Silver cell: $0.20\text{ mol e}^- \rightarrow 0.20\text{ mol Ag} \implies \text{Mass} = 0.20 \times 108 = \mathbf{21.60\text{ g}}$.
   (b) Nickel cell: $\text{Moles of Ni} = \frac{0.20}{2} = 0.10\text{ mol Ni} \implies \text{Mass} = 0.10 \times 59 = \mathbf{5.90\text{ g}}$.
   (c) The silver cathode gains far more mass because: (1) each silver ion requires only 1 electron compared to 2 for nickel (depositing twice as many atoms), and (2) silver has a much higher atomic mass ($108$ vs. $59$).

8. (a) Mass of copper dissolved from anode = mass deposited = $25.4\text{ g}$.
   $$\text{Final mass of anode} = 50.0\text{ g} - 25.4\text{ g} = \mathbf{24.6\text{ g}}$$
   (b) Moles of $\text{Cu} = \frac{25.4\text{ g}}{63.5\text{ g/mol}} = 0.40\text{ mol}$.
   $$\text{Moles of electrons} = 0.40\text{ mol} \times 2 = \mathbf{0.80\text{ mol of electrons}}$$
   (c) The blue color of the solution remains **completely unchanged** because $\text{Cu}^{2+}$ ions enter the solution from the anode at the exact same rate they deposit onto the cathode.

9. (a) Cathode gains mass in **all three cells (A, B, and C)** due to $\text{Cu}^{2+} + 2\text{e}^- \rightarrow \text{Cu}$.
   (b) The anode loses mass **only in Cell A** (active copper anode dissolves: $\text{Cu} \rightarrow \text{Cu}^{2+} + 2\text{e}^-$). Platinum and graphite are inert.
   (c) A gas evolves at the anode in **Cells B and C**; the gas is **Oxygen ($\text{O}_2$)**, formed via $4\text{OH}^- \rightarrow 2\text{H}_2\text{O} + \text{O}_2 + 4\text{e}^-$. No gas evolves in Cell A.
   (d) The blue color fades in **Cells B and C** because copper ions are permanently depleted from solution without replenishment, forming $\text{H}_2\text{SO}_4$.

10. Differences: (1) Electroplating uses electric current in an aqueous salt bath; hot-dip galvanising immerses the object into molten zinc without electricity. (2) Electroplating yields an ultra-thin, smooth, uniform coat; galvanising yields a thick, rugged, crystalline coat. For a brass door key, select **electroplating** (e.g., nickel or chromium) to achieve an aesthetically pleasing, precise, mirror-like finish that fits lock tolerances.

11. Non-conductive plastic cannot conduct electrons directly. To plate it, the plastic surface is chemically etched and treated with a micro-thin layer of conductive material (such as colloidal graphite or chemical palladium). Once conductive, it is connected as the cathode in an electroplating bath.

12. (i) **Toxicity:** Silver nitrate causes corrosive black chemical burns on skin and severe eye injury.
    (ii) **Hazard of unregulated current:** Phone chargers are designed for battery charging, not precision electroplating; improper current densities produce rough, peeling deposits or short circuits.
    (iii) **Environmental disposal:** Soluble silver solutions cannot be safely poured down household drains due to toxic environmental impact.

13. The diagram must match Figure 4.2:
    - Beaker containing aqueous $\text{NiSO}_4$.
    - Nickel plate wired to battery positive terminal, labelled **Anode (+)**.
    - Steel spoon wired to battery negative terminal, labelled **Cathode (−)**.
    - Arrow in external wire showing electrons flowing from anode to cathode.
    - Arrow in electrolyte showing $\text{Ni}^{2+}$ cations migrating toward the spoon.
    - Half-equations: $\text{Ni} \rightarrow \text{Ni}^{2+} + 2\text{e}^-$ (anode) and $\text{Ni}^{2+} + 2\text{e}^- \rightarrow \text{Ni}$ (cathode).

14. (a) **False.** The article must always be the cathode (−).
    (b) **True.**
    (c) **False.** The concentration of $\text{Ag}^+$ remains constant because the anode dissolves at the rate of deposition.
    (d) **False.** Cyanide baths are deadly poisons restricted strictly to licensed industrial facilities.

---

Liam packed up his notes, glancing admiringly at the polished platter. *"Electroplating is the perfect bridge between pure chemistry and real-world technology!"*

Mr. Harrison agreed. *"And wait until you see the colossal scale of industrial electrochemistry."*

**What comes next?** In Topic 5, **"Further Applications of Electrolysis: Refining, Chlor-Alkali, and Anodising"** ([electrolysis-part5.md](electrolysis-part5.md)), we leave small plating tanks behind to explore massive industrial plants: refining blister copper to $99.99\%$ purity, manufacturing essential chlorine and caustic soda from ocean salt, and generating brilliant, hardened color coatings on aluminum through **anodising**.
