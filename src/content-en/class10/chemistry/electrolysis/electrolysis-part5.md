# Chapter: Electrolysis (Part 5)

> **Class:** 10 | **Subject:** Chemistry
> **This file continues from [electrolysis-part4.md](electrolysis-part4.md)** (where we explored electroplating: target article as cathode, plating metal as active anode, and a salt of the plating metal as electrolyte). Chapter introduction: [electrolysis.md](electrolysis.md); electrolytic cells and electrode fundamentals: [electrolysis-part2.md](electrolysis-part2.md); selective discharge principles: [electrolysis-part3.md](electrolysis-part3.md). Industrial context: copper refining and anodising in metallurgy [metallurgy-part6.md](../metallurgy/metallurgy-part6.md); extraction of Na, Mg, and Al [metallurgy-part4.md](../metallurgy/metallurgy-part4.md) and [metallurgy-part5.md](../metallurgy/metallurgy-part5.md); the chlor-alkali process [acids-bases-and-salts-part6.md](../acids-bases-and-salts/acids-bases-and-salts-part6.md); and green hydrogen [hydrogen-part3.md](../../../class9/chemistry/hydrogen/hydrogen-part3.md).
> **Topics covered in this file:**
> 5. Industrial Applications: Refining, Chlor-Alkali, and Anodising

---

# Topic 5: Industrial Applications: Refining, Chlor-Alkali, and Anodising

In [Topic 4](electrolysis-part4.md), we explored electroplating—depositing a delicate, decorative metallic veneer in a modest workshop bath. But the reach of electrolysis extends far beyond coating tableware. Modern industrial chemistry depends fundamentally on colossal electrolytic plants operating 24 hours a day: refining copper to extreme electrical-grade purity, converting ocean brine into millions of tonnes of chlorine and caustic soda, and building hardened, vibrantly colored protective oxide coatings on aerospace aluminum.

Back in metallurgy, we encountered these names with the promise: *"the underlying chemical theory will be mastered in Chapter 4."*

Now, armed with our complete toolkit—electrolytic cells, electrode polarities, and **selective discharge**—we can explain every nuance: **why** noble metals precipitate as valuable anode mud, **why** brine yields sodium hydroxide rather than explosive sodium metal, and **why** anodising requires the aluminum article to be the anode rather than the cathode.

---

## The Blue Bottle and the Blue Window Frame

On the first day of the school term, Maya arrived carrying a sleek, brilliant **metallic-blue** aluminum water bottle. That afternoon, she visited her uncle, Dr. Bennett, at his architectural studio. Setting the bottle on his drafting table, Maya glanced toward the studio's large casement windows.

*"Uncle Bennett, look at that!"* Maya laughed. *"My water bottle and your window frames are the exact same shade of electric blue! But painted bottles always chip within a month; my old painted thermos flaked off in my backpack. How come this finish never chips, flakes, or peels?"*

Dr. Bennett picked up the bottle and turned it over to examine the laser-etched mark on the base: *hard-anodised aluminum*.

*"That vibrant blue is not a coat of surface paint, Maya,"* Dr. Bennett explained. *"It is the metal's own **aluminum oxide layer**, intentionally grown dozens of times thicker using direct electric current, with organic dye sealed deep inside its microscopic pores. Both your bottle and those window frames were finished using the exact same electrochemical process: **anodising**."*

*"Electrolysis?"* Maya asked. *"The same process that silver-plates spoons?"*

*"A close technological cousin,"* Dr. Bennett replied. *"Except in anodising, we turn the setup upside down. Let us examine how industrial electrolysis refines copper, powers the chlor-alkali industry, and armors aluminum against the elements."*

---

## Key Vocabulary

| Term | Meaning (Plain Language) | Example |
|---|---|---|
| **Electrolytic refining** | Purifying an impure crude metal by making it the anode of an electrolytic cell and depositing pure metal onto the cathode | Industrial refining of blister copper to 99.99% purity |
| **Anode mud (sludge)** | Insoluble residue containing unreactive noble metals that settles beneath the anode during refining | Gold, silver, and platinum recovered beneath copper anodes |
| **Brine** | A concentrated aqueous solution of sodium chloride | Raw feedstock for the chlor-alkali process |
| **Chlor-alkali process** | Industrial electrolysis of brine producing chlorine gas ($\text{Cl}_2$), hydrogen gas ($\text{H}_2$), and sodium hydroxide ($\text{NaOH}$) | $2\text{NaCl} + 2\text{H}_2\text{O} \rightarrow 2\text{NaOH} + \text{Cl}_2 + \text{H}_2$ |
| **Membrane cell** | Modern chlor-alkali electrolytic cell utilizing a cation-exchange polymer membrane permeable only to $\text{Na}^+$ ions | Eliminates mercury and asbestos from industrial plants |
| **Anodising** | An electrochemical process that thickens the natural protective oxide film on aluminum by making it the anode | Blue aluminum sports bottles, architectural window frames |
| **Micropores** | Microscopic hexagonal pores in the anodised oxide layer that absorb dyes before sealing | Pores dyed blue, black, red, or gold |
| **Sealing** | Hydrating the anodised oxide layer in boiling deionised water to close the pores and lock in color | Prevents staining and fading |
| **Metallic conduction** | Electrical conduction via delocalised electrons in a solid lattice without chemical change | Copper busbars carrying DC current |
| **Electrolytic conduction** | Electrical conduction via mobile ions in an electrolyte accompanied by chemical reactions at electrodes | Current carried by $\text{Na}^+$ and $\text{Cl}^-$ in brine |

---

## Part A: Electrolytic Refining of Copper: Driven by Selective Discharge

Crude copper extracted from smelters—known as *blister copper*—is roughly 98% to 99% pure. While that sounds high, even 0.1% of impurities drastically reduces copper's electrical conductivity, making it unfit for wiring and electronics. To achieve **99.99% purity**, blister copper must undergo **electrolytic refining**.

```
    Electron flow in wire: Anode ---> DC Power Supply ---> Cathode
          +------------(+)[ DC POWER ](-)------------+
          :                                          :
          :                                          :
  +-------:------------------------------------------:---------+
  : +-----+-----+                              +-----+-----+   :
  : : ANODE (+) :  Cu²⁺ ------------------>    :CATHODE (-):   :
  : : Impure Cu :  Cu²⁺ ------------------>    :  Pure Cu  :   :
  : :Zn, Fe, Ag :                              : Thin Seed :   :
  : :  Au, Pt   :  Zn²⁺, Fe²⁺ remain dissolved :   Sheet   :   :
  : : (thick)   :  in the acid electrolyte     : (thickens):   :
  : +-----------+                              +-----------+   :
  : . . . . . . .                                              :
  : ^ Anode mud (Ag, Au, Pt)                                   :
  :                                                            :
  :        Aqueous CuSO₄ + dilute H₂SO₄ electrolyte           :
  +------------------------------------------------------------+
```

> **Figure 5.1** – Electrolytic copper refining tank: A thick slab of impure blister copper serves as the anode (+), while a thin sheet of pure copper serves as the cathode (−). Copper dissolves from the anode as $\text{Cu}^{2+}$ and plates onto the cathode. More reactive impurities ($\text{Zn}$, $\text{Fe}$) dissolve and stay in solution. Less reactive noble metals ($\text{Ag}$, $\text{Au}$, $\text{Pt}$) do not oxidise and drop to the tank floor as valuable anode mud.

---

### Who Is Present in the Cell?

- **Anode (+):** A thick, heavy slab of impure blister copper containing ~98% copper and small amounts of impurities: reactive metals ($\text{Fe}$, $\text{Zn}$, $\text{Ni}$) and unreactive noble metals ($\text{Ag}$, $\text{Au}$, $\text{Pt}$).
- **Cathode (−):** A thin starting sheet of ultra-pure copper metal.
- **Electrolyte:** Aqueous copper(II) sulfate ($\text{CuSO}_4$) acidified with dilute sulfuric acid ($\text{H}_2\text{SO}_4$). Ions present: $\text{Cu}^{2+}$, $\text{H}^+$, $\text{SO}_4^{2-}$, $\text{OH}^-$.

---

### Who Discharges at the Cathode?

Four cation species enter or exist in the electrolyte: $\text{Cu}^{2+}$, $\text{H}^+$, and dissolved impurity cations $\text{Zn}^{2+}$ and $\text{Fe}^{2+}$.
Recall our **discharge series** from Topic 3 (easiest to hardest to reduce):

$$\text{Ag}^+ > \text{Cu}^{2+} > \text{H}^+ > \text{Pb}^{2+} > \text{Fe}^{2+} > \text{Zn}^{2+}$$

Among the ions swimming in the solution, **copper ($\text{Cu}^{2+}$) is far easier to discharge than $\text{H}^+$, $\text{Fe}^{2+}$, or $\text{Zn}^{2+}$**.
Under carefully regulated low cell voltage (~0.2 to 0.4 V), **only copper ions accept electrons at the cathode**:

$$\text{Cu}^{2+} + 2\text{e}^- \rightarrow \text{Cu (pure solid)}$$

The more reactive impurity ions ($\text{Zn}^{2+}$, $\text{Fe}^{2+}$) remain dissolved in the solution as spectators, completely unable to discharge. Consequently, the copper depositing on the cathode reaches an astonishing purity of **99.99%**!

---

### Who Dissolves at the Anode?

At the active anode (+), oxidation occurs. Metal atoms lose electrons to become hydrated cations. But which metals oxidise?
Oxidation ease follows the standard reactivity series: **more reactive metals lose electrons easiest**.

1. **Copper and More Reactive Metals ($\text{Zn}$, $\text{Fe}$, $\text{Ni}$):**
   Zinc and iron are more electropositive than copper; they lose electrons with ease and dissolve into the electrolyte:
   $$\text{Zn} \rightarrow \text{Zn}^{2+} + 2\text{e}^-$$
   $$\text{Fe} \rightarrow \text{Fe}^{2+} + 2\text{e}^-$$
   $$\text{Cu} \rightarrow \text{Cu}^{2+} + 2\text{e}^- \quad (\text{primary reaction})$$
2. **Less Reactive Noble Metals ($\text{Ag}$, $\text{Au}$, $\text{Pt}$):**
   Silver, gold, and platinum are less reactive than copper. They hold their electrons firmly and cannot oxidise at the low voltage applied. As the surrounding copper matrix dissolves away from the anode slab, these noble metal particles fall by gravity to the bottom of the cell, forming a dense sludge known as **anode mud**.

| Impurity in Anode | Reactivity Relative to Copper | Anode Behavior | Final Destination |
|---|---|---|---|
| **Zinc ($\text{Zn}$)** | More reactive | Dissolves easily ($\text{Zn}^{2+}$) | Remains dissolved in electrolyte |
| **Iron ($\text{Fe}$)** | More reactive | Dissolves easily ($\text{Fe}^{2+}$) | Remains dissolved in electrolyte |
| **Nickel ($\text{Ni}$)** | More reactive | Dissolves easily ($\text{Ni}^{2+}$) | Remains dissolved in electrolyte |
| **Silver ($\text{Ag}$)** | Less reactive (noble) | Does not oxidise | Settles as insoluble **anode mud** |
| **Gold ($\text{Au}$)** | Less reactive (noble) | Does not oxidise | Settles as insoluble **anode mud** |
| **Platinum ($\text{Pt}$)** | Less reactive (noble) | Does not oxidise | Settles as insoluble **anode mud** |

> [!TIP]
> **The Economic Miracle of Anode Mud:**
> Anode mud is far from waste! The recovered gold, silver, and platinum are extracted and sold, often generating enough revenue to pay for the entire electrical power bill of the copper refinery!

---

### Why Can't Reactive Metals Be Extracted from Aqueous Solution?

Copper can be refined from an aqueous bath because $\text{Cu}^{2+}$ lies below $\text{H}^+$ in the discharge series.
However, strongly reactive metals like **sodium, magnesium, and aluminium** lie far above $\text{H}^+$.
If you attempt to electrolyse an aqueous solution of $\text{NaCl}$ or $\text{Al}_2(\text{SO}_4)_3$, hydrogen ions ($\text{H}^+$) from water discharge preferentially at the cathode, releasing **hydrogen gas ($\text{H}_2$)** and leaving the metal ions stranded in solution!

To extract reactive metals, **water must be completely eliminated**:

| Metal | Electrolyte Used | Cathode Half-Reaction | Reference |
|---|---|---|---|
| **Sodium ($\text{Na}$)** | Molten $\text{NaCl} + \text{CaCl}_2$ | $\text{Na}^+ + \text{e}^- \rightarrow \text{Na}$ | Downs Cell ([metallurgy-part4.md](../metallurgy/metallurgy-part4.md)) |
| **Magnesium ($\text{Mg}$)** | Molten $\text{MgCl}_2$ | $\text{Mg}^{2+} + 2\text{e}^- \rightarrow \text{Mg}$ | Molten electrolysis ([metallurgy-part4.md](../metallurgy/metallurgy-part4.md)) |
| **Aluminium ($\text{Al}$)** | Molten $\text{Al}_2\text{O}_3$ in cryolite ($\text{Na}_3\text{AlF}_6$) | $\text{Al}^{3+} + 3\text{e}^- \rightarrow \text{Al}$ | Hall-Héroult Cell ([metallurgy-part5.md](../metallurgy/metallurgy-part5.md)) |

---

## Part B: The Chlor-Alkali Process: Three Vital Chemicals from Brine

The **chlor-alkali process** is one of the largest chemical industries on Earth, consuming common salt and electrical power to manufacture three cornerstone industrial commodities: **chlorine gas ($\text{Cl}_2$)**, **hydrogen gas ($\text{H}_2$)**, and **sodium hydroxide ($\text{NaOH}$)**.

---

### The Outcome of the Two-Ion Competition

A concentrated aqueous solution of sodium chloride (brine) contains four ions:
- Cations: $\text{Na}^+$ and $\text{H}^+$
- Anions: $\text{Cl}^-$ and $\text{OH}^-$

Let us apply our Topic 3 selective discharge principles:
1. **At the Cathode (−):** Both $\text{Na}^+$ and $\text{H}^+$ migrate to the cathode. In the discharge series, $\text{H}^+$ is far easier to reduce than reactive sodium. Therefore, **$\text{H}^+$ discharges preferentially**:
$$2\text{H}^+ + 2\text{e}^- \rightarrow \text{H}_2\text{ (gas)}$$
*(Sodium metal does not form!)*
2. **At the Anode (+):** Both $\text{Cl}^-$ and $\text{OH}^-$ migrate to the anode. Because the brine is **highly concentrated**, the overwhelming numerical abundance of chloride ions overrides the slight position preference of hydroxide: **$\text{Cl}^-$ discharges preferentially**:
$$2\text{Cl}^- \rightarrow \text{Cl}_2\text{ (gas)} + 2\text{e}^-$$
3. **In the Remaining Solution:** As $\text{H}^+$ ions are consumed at the cathode and $\text{Cl}^-$ ions at the anode, the spectator $\text{Na}^+$ cations and $\text{OH}^-$ anions accumulate in solution, producing **aqueous sodium hydroxide ($\text{NaOH}$)**!

Combining the electrode half-reactions yields the overall equation:

$$2\text{NaCl} + 2\text{H}_2\text{O} \xrightarrow{\text{electricity}} 2\text{NaOH (aq)} + \text{Cl}_2\text{ (anode)} + \text{H}_2\text{ (cathode)}$$

*(Verification: Atoms: 2 Na, 2 Cl, 4 H, 2 O on each side ✅; Charge: $0 = 0$ ✅; Molar ratio: $\text{Cl}_2 : \text{H}_2 : \text{NaOH} = 1 : 1 : 2$ ✅)*

---

### Why Is a Membrane Essential?

If all three products are allowed to mingle inside an open tank, two catastrophic side-reactions occur:
1. **Chlorine reacts with sodium hydroxide:**
$$\text{Cl}_2 + 2\text{NaOH} \rightarrow \text{NaCl} + \text{NaOCl} + \text{H}_2\text{O}$$
The expensive $\text{NaOH}$ product is consumed, producing household bleach ($\text{NaOCl}$) and reverting back to salt!
2. **Hydrogen and chlorine form an explosive mixture:**
A mixture of $\text{H}_2$ and $\text{Cl}_2$ gases detonates violently when exposed to sunlight or sparks: $\text{H}_2 + \text{Cl}_2 \rightarrow 2\text{HCl}$.

To prevent this, modern industrial plants utilize a **membrane cell** incorporating an advanced ion-exchange fluoropolymer membrane (such as Nafion):

```
             Cl₂ gas outlet                     H₂ gas outlet
                    ^                                  ^
              +-----+---------------------+------------+--------------+
              : ANODE (+) COMPARTMENT     : CATHODE (−) COMPARTMENT   :
              : Catalytic titanium anode  : Nickel mesh cathode       :
              : 2Cl⁻ → Cl₂ + 2e⁻          : 2H⁺ + 2e⁻ → H₂            :
Concentrated  :                           :                           : Pure water
brine in ---> : Electrolyte:              : Electrolyte:              : <--- in
              : Na⁺, Cl⁻, H₂O             : Na⁺, OH⁻, H₂O             :
              :                           :                           :
              : Na⁺ ions migrate -------> : Na⁺ ions enter            :
              : across membrane           : Na⁺ + OH⁻ forms NaOH      :
              :                           :                           :
              +---------------------------+---------------------------+
              Depleted brine out            Concentrated NaOH out

              Central separator: Cation-permeable membrane
              (Permits ONLY Na⁺ to pass; blocks Cl⁻, OH⁻, and gases)
```

> **Figure 5.2** – Modern chlor-alkali membrane cell: Concentrated brine enters the anode compartment where $\text{Cl}_2$ gas evolves. The central membrane allows only hydrated $\text{Na}^+$ cations to pass through to the cathode compartment. In the cathode compartment, $\text{H}^+$ discharge produces $\text{H}_2$ gas, leaving $\text{OH}^-$ ions to combine with arriving $\text{Na}^+$ ions, forming high-purity, uncontaminated $\text{NaOH}$!

---

### The Three Products and Their Industrial Applications

| Product | Electrode Site | Major Industrial Applications |
|---|---|---|
| **Chlorine ($\text{Cl}_2$)** | Anode (+) | Municipal water sanitation, manufacture of PVC plastic, bleaching paper pulp, production of hydrochloric acid, pharmaceuticals, pesticides |
| **Hydrogen ($\text{H}_2$)** | Cathode (−) | Synthesis of ammonia fertilizer (Haber process), hydrogenation of vegetable oils to margarine, fuel for zero-emission fuel cells, synthesis of $\text{HCl}$ |
| **Sodium Hydroxide ($\text{NaOH}$)** | Cathode liquid | Soap and detergent manufacture, paper and cardboard pulping, rayon textiles, bauxite ore purification (Baeyer process), industrial degreasing |

---

### Handling Chlorine and Sodium Hydroxide Safely (Informational Only)

- **Chlorine Gas:** Toxic, suffocating, greenish-yellow gas with an irritating pungent odor. It is roughly 2.5 times denser than air ($71 \div 29 \approx 2.45$), meaning any leaked gas settles in low-lying trenches and basements. In industrial emergencies, personnel evacuate **crosswind and to high ground**. Never mix household chlorine bleach with toilet bowl acid or ammonia cleaners, as toxic chlorine and chloramine fumes are liberated!
- **Sodium Hydroxide:** Highly corrosive strong base (caustic soda) that dissolves organic tissue and causes rapid blindness upon contact with eyes. Handled only with chemical splash goggles, face shields, and neoprene gloves.
- **Hydrogen Gas:** Colorless, odorless, highly flammable gas that burns with an invisible flame. Electrolytic plants use spark-proof electrical fixtures and positive-pressure ventilation to prevent explosive air-hydrogen mixtures.

---

## Part C: Anodising: Thickening Aluminium's Protective Oxide Armor

### A Quick Review of Aluminium Chemistry

Aluminum is a naturally reactive metal that forms an ultra-thin, continuous, self-healing oxide film ($\text{Al}_2\text{O}_3$, roughly 2 to 5 nanometers thick) upon exposure to atmospheric oxygen ([metals-and-non-metals-part2.md](../metals-and-non-metals/metals-and-non-metals-part2.md)). This natural barrier passivates the metal, preventing further atmospheric corrosion.
**Anodising** is an industrial electrochemical process that deliberately expands this oxide film from a few nanometers to **5 to 25 micrometers**—thousands of times thicker!

---

### The Setup: The Article Is the Anode, Not the Cathode!

In electroplating, the article is the **cathode** because it receives foreign metal cations from solution.
In anodising, the aluminum article is made the **ANODE (+)**:

- **Anode (+):** The cleaned aluminum object (e.g., water bottle body, window sash).
- **Cathode (−):** An inert lead or aluminum plate.
- **Electrolyte:** Dilute sulfuric acid ($\approx 15\%\text{ to }20\%\text{ }\text{H}_2\text{SO}_4$).

```
  BEFORE (Untreated Aluminum)           AFTER (Anodised Aluminum)
  Air                                   Air
                                        ------------------------------------
  --------------------------------         :   :   :   :   :   :   :   :
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~         :   :   :   :   :   :   :   :
  ================================         :   :   :   :   :   :   :   :
                                           :   :   :   :   :   :   :   :
                                           :   :   :   :   :   :   :   :  Nanopores
  ALUMINIUM SUBSTRATE                   .................................... filled
                                        ==================================== with dye
                                        ALUMINIUM SUBSTRATE
                                        (consumed slightly)
  --------------------------------      ------------------------------------
  ~~~ = Natural oxide: ~3 nm thick      Thick engineered oxide: 5–25 µm thick
```

> **Figure 5.3** – Cross-section of aluminum surface before and after anodising: Natural aluminum has a fragile, 3-nanometer surface oxide film. Anodising converts the surface into a thick, honeycomb-like array of hexagonal aluminum oxide columns containing open vertical nanopores. These nanopores absorb vibrant dyes before being sealed permanently in boiling water.

---

### What Happens at the Electrodes?

- **At the Cathode (−):**
Hydrogen ions from the sulfuric acid electrolyte accept electrons:
$$6\text{H}^+ + 6\text{e}^- \rightarrow 3\text{H}_2\text{ (gas)}$$
- **At the Anode (+) [The Aluminum Article]:**
Normally, hydroxide ions would discharge to release free oxygen gas ($4\text{OH}^- \rightarrow 2\text{H}_2\text{O} + \text{O}_2 + 4\text{e}^-$). However, the nascent oxygen atoms react instantaneously with the aluminum metal of the anode itself, building an integral oxide lattice:
$$2\text{Al (solid article)} + 3\text{H}_2\text{O} \rightarrow \text{Al}_2\text{O}_3\text{ (solid film)} + 6\text{H}^+ + 6\text{e}^-$$

**Overall Anodising Reaction:**
Combining cathode and anode half-reactions (6 electrons transferred):
$$2\text{Al} + 3\text{H}_2\text{O} \xrightarrow{\text{electricity}} \text{Al}_2\text{O}_3\text{ (film)} + 3\text{H}_2\text{ (cathode)}$$

*(Verification: Atoms: 2 Al, 6 H, 3 O on both sides ✅; Net charge = 0 ✅)*

Notice that the oxide film is created **from the aluminum atoms of the article itself**! It grows partly inward into the metal and partly outward. Because it is chemically integrated into the metal rather than glued onto the surface, it **cannot peel, chip, or flake like paint**.

---

### Dyeing and Sealing

The newly formed anodic oxide film possesses a cellular honeycomb structure filled with billions of microscopic vertical pores (roughly 10–20 nm in diameter).
1. **Dyeing:** The freshly anodised article is dipped into a heated bath of organic or inorganic dye. Capillary action draws dye molecules deep inside the open nanopores.
2. **Sealing:** The dyed article is transferred into a tank of boiling deionised water ($98–100\ ^\circ\text{C}$). The boiling water converts anhydrous aluminum oxide ($\text{Al}_2\text{O}_3$) into hydrated boehmite ($\text{Al}_2\text{O}_3 \cdot \text{H}_2\text{O}$), which expands in volume, swelling shut and permanently locking the dye molecules inside!

---

### Properties of Anodised Aluminium

| Property | Scientific Explanation | Everyday Applications |
|---|---|---|
| **High Surface Hardness** | Sapphire-like crystalline $\text{Al}_2\text{O}_3$ structure | Scratch-proof hard-anodised cookware, carabiners |
| **Corrosion Resistance** | Thick, non-reactive protective ceramic barrier | Architectural facades, marine hardware, bicycle frames |
| **Electrical Insulator** | Aluminum oxide is a dielectric insulator | Anodised surfaces prevent short circuits (requires stripping for grounding) |
| **Permanent Color** | Dye molecules are locked inside sealed mineral pores | Smartphone and laptop chassis, reusable sports bottles |

---

### Electroplating vs. Anodising: Key Differences

| Feature | Electroplating (Topic 4) | Anodising (Topic 5) |
|---|---|---|
| **Article polarity** | **Cathode (−)** | **Anode (+)** |
| **Origin of new layer** | Foreign metal cations from electrolyte | The article's own aluminum atoms |
| **Nature of coating** | Solid metallic film (e.g., $\text{Ni}$, $\text{Ag}$, $\text{Cu}$) | Ceramic oxide film ($\text{Al}_2\text{O}_3$) |
| **Coating electrical conductivity** | Conductive | **Electrical insulator** |
| **Electrolyte used** | Soluble salt of the plating metal | Dilute sulfuric acid ($\text{H}_2\text{SO}_4$) |

---

## Part D: Hydrogen from Water and the Energy Economics of Electrolysis

### Green Hydrogen: Fulfilling the Promise

In introductory chemistry, we introduced **green hydrogen**—hydrogen fuel produced by splitting water using renewable electricity ([hydrogen-part3.md](../../../class9/chemistry/hydrogen/hydrogen-part3.md)).
Inside large industrial electrolysers:
- Cathode (−): $4\text{H}^+ + 4\text{e}^- \rightarrow 2\text{H}_2$
- Anode (+): $4\text{OH}^- \rightarrow 2\text{H}_2\text{O} + \text{O}_2 + 4\text{e}^-$
- Overall: $2\text{H}_2\text{O} \rightarrow 2\text{H}_2 + \text{O}_2$ (Gas volume ratio $\text{H}_2 : \text{O}_2 = 2 : 1$).

While the chlor-alkali process generates hydrogen as an industrial by-product, dedicated water electrolysers produce zero-carbon hydrogen for steel manufacturing and clean transportation.

---

### The Energy Bill of Electrolysis

Electrolysis forces non-spontaneous endothermic chemical reactions to proceed against thermodynamic equilibrium. Consequently, the electric power consumption is enormous:

| Industrial Electrolytic Process | Approximate Electricity Consumption | Thermodynamic Reason |
|---|---|---|
| **Copper Refining** | $\approx 0.3\text{ kWh per kg of Cu}$ | Low energy: copper simply dissolves at anode and redeposits at cathode; no strong bonds broken |
| **Chlor-Alkali Process** | $\approx 2,500\text{ kWh per tonne of }\text{Cl}_2$ | High energy: stable ionic $\text{Na}-\text{Cl}$ and covalent $\text{H}-\text{O}$ bonds must be cleaved |
| **Aluminium Extraction** | $\approx 13–15\text{ kWh per kg of Al}$ | Massive energy: extraordinarily strong $\text{Al}-\text{O}$ lattice broken at $950\ ^\circ\text{C}$ |
| **Water Electrolysis (Green H₂)** | $\approx 50–55\text{ kWh per kg of }\text{H}_2$ | High energy: breaking strong $\text{H}-\text{OH}$ bonds; large enthalpy of formation |

Because of these power demands, large chlor-alkali and aluminum smelting facilities are built directly adjacent to cheap, abundant hydroelectric or nuclear power stations.

---

### Metallic vs. Electrolytic Conduction: In the Same Circuit

Every electrolytic plant integrates both modes of conduction simultaneously:

| Characteristic | Metallic Conduction (Cables & Busbars) | Electrolytic Conduction (Cell Electrolyte) |
|---|---|---|
| **Charge carrier** | Free delocalised electrons | Mobile cations and anions |
| **Chemical change** | **None**; metal wire is unaltered | **Extensive**; chemical decomposition at electrodes |
| **Effect of temperature** | Conductivity decreases with heating | Conductivity increases with heating |
| **Physical location** | From anode to DC supply to cathode | Across the liquid between anode and cathode |

> [!IMPORTANT]
> **Electrons never swim through the electrolyte solution!**
> Electrons flow strictly through external copper busbars. At the electrode interfaces, ions deliver electrons (anode) or accept electrons (cathode), completing the electrical relay loop.

---

## Part E: Solved Examples

*(Atomic masses: $\text{H} = 1$, $\text{C} = 12$, $\text{O} = 16$, $\text{Na} = 23$, $\text{Al} = 27$, $\text{S} = 32$, $\text{Cl} = 35.5$, $\text{Ca} = 40$, $\text{Cu} = 63.5$)*

### Example 1: Quantitative Calculations for a Chlor-Alkali Plant

**Question:** An industrial chlor-alkali membrane plant electrolyses exactly $17.55\text{ kg}$ of pure sodium chloride in brine over a shift.
$$2\text{NaCl} + 2\text{H}_2\text{O} \rightarrow 2\text{NaOH} + \text{Cl}_2 + \text{H}_2$$
Calculate:
(a) The mass of sodium hydroxide ($\text{NaOH}$) generated.
(b) The mass of chlorine gas ($\text{Cl}_2$) evolved at the anode.
(c) The mass of hydrogen gas ($\text{H}_2$) evolved at the cathode.
(d) Verify conservation of mass.

**Solution:**
- Moles of $\text{NaCl}$ electrolysed:
$$\text{Molar mass of NaCl} = 23 + 35.5 = 58.5\text{ g/mol}$$
$$n(\text{NaCl}) = \frac{17,550\text{ g}}{58.5\text{ g/mol}} = \mathbf{300\text{ mol}}$$
- Stoichiometric ratio: $\text{NaCl} : \text{NaOH} : \text{Cl}_2 : \text{H}_2 = 2 : 2 : 1 : 1$.
  - Moles of $\text{NaOH} = 300\text{ mol}$
  - Moles of $\text{Cl}_2 = \frac{300}{2} = 150\text{ mol}$
  - Moles of $\text{H}_2 = \frac{300}{2} = 150\text{ mol}$
- (a) Mass of $\text{NaOH} = 300\text{ mol} \times 40\text{ g/mol} = 12,000\text{ g} = \mathbf{12.0\text{ kg}}$
- (b) Mass of $\text{Cl}_2 = 150\text{ mol} \times 71\text{ g/mol} = 10,650\text{ g} = \mathbf{10.65\text{ kg}}$
- (c) Mass of $\text{H}_2 = 150\text{ mol} \times 2\text{ g/mol} = 300\text{ g} = \mathbf{0.30\text{ kg}}$
- (d) Conservation of Mass Check:
  - Water consumed: $300\text{ mol} \times 18\text{ g/mol} = 5,400\text{ g} = 5.40\text{ kg}$.
  - Total mass of reactants = $17.55\text{ kg (NaCl)} + 5.40\text{ kg (H}_2\text{O)} = \mathbf{22.95\text{ kg}}$.
  - Total mass of products = $12.0\text{ kg} + 10.65\text{ kg} + 0.30\text{ kg} = \mathbf{22.95\text{ kg}}$ ✅.

---

### Example 2: Copper Refining: Tracking Electron Flow

**Question:** In a copper refinery cell, exactly $38.10\text{ kg}$ of pure copper deposits onto the cathodes.
(a) How many moles of copper were deposited?
(b) How many moles of electrons flowed through the cathode busbar?
(c) Assuming the $\text{Cu}^{2+}$ concentration of the electrolyte was unchanged, what mass of copper dissolved from the impure anodes?

**Solution:**
(a) Moles of copper:
$$n(\text{Cu}) = \frac{38,100\text{ g}}{63.5\text{ g/mol}} = \mathbf{600\text{ mol Cu}}$$
(b) At cathode: $\text{Cu}^{2+} + 2\text{e}^- \rightarrow \text{Cu}$.
$$\text{Moles of electrons} = 600\text{ mol} \times 2 = \mathbf{1,200\text{ mol of electrons}}$$
(c) Because electrolyte concentration remains constant, the rate of anode dissolution matches cathode deposition:
$$\text{Mass of copper dissolved} = 600\text{ mol} \times 63.5\text{ g/mol} = \mathbf{38.10\text{ kg}}$$

---

### Example 3: Fate of Impurities: Anode Mud vs. Dissolved Ions

**Question:** An impure copper anode has an initial mass of $20.0\text{ kg}$. Chemical assay reveals: $19.4\text{ kg}$ copper, $0.4\text{ kg}$ reactive metals (zinc and iron), and $0.2\text{ kg}$ noble metals (silver and gold). During refining, all copper is transferred to the cathode.
(a) What mass of pure copper is collected at the cathode?
(b) What mass of anode mud settles to the bottom of the tank?
(c) What mass of impurities dissolves into the electrolyte?
(d) Calculate the initial percentage purity of the copper anode.

**Solution:**
- (a) Mass of pure copper deposited at cathode = $\mathbf{19.4\text{ kg}}$.
- (b) Silver and gold do not oxidise; they drop to form anode mud: $\text{Mass} = \mathbf{0.2\text{ kg}}$.
- (c) Zinc and iron oxidise into $\text{Zn}^{2+}$ and $\text{Fe}^{2+}$, remaining in solution: $\text{Mass} = \mathbf{0.4\text{ kg}}$.
- (d) Percentage purity of blister copper:
$$\text{Purity} = \frac{19.4\text{ kg}}{20.0\text{ kg}} \times 100\% = \mathbf{97.0\%}$$
*(Verification: $19.4 + 0.4 + 0.2 = 20.0\text{ kg}$ ✅)*

---

### Example 4: Anodising: Oxide Mass and Electron Transfer

**Question:** During the anodising of an aluminum sports bottle, exactly $4.05\text{ g}$ of surface aluminum metal is converted into protective aluminum oxide ($\text{Al}_2\text{O}_3$):
$$2\text{Al} + 3\text{H}_2\text{O} \rightarrow \text{Al}_2\text{O}_3 + 6\text{H}^+ + 6\text{e}^-$$
(a) What mass of $\text{Al}_2\text{O}_3$ is synthesized on the bottle surface?
(b) How many moles of electrons were liberated at the anode?
(c) Explain why the mass of the newly formed oxide layer is greater than the mass of aluminum metal consumed.

**Solution:**
(a) Moles of aluminum reacted:
$$n(\text{Al}) = \frac{4.05\text{ g}}{27\text{ g/mol}} = 0.15\text{ mol Al}$$
From the stoichiometry, $2\text{ mol Al} \rightarrow 1\text{ mol Al}_2\text{O}_3$:
$$\text{Moles of Al}_2\text{O}_3 = \frac{0.15}{2} = 0.075\text{ mol}$$
$$\text{Molar mass of Al}_2\text{O}_3 = 2(27) + 3(16) = 102\text{ g/mol}$$
$$\text{Mass of Al}_2\text{O}_3 = 0.075\text{ mol} \times 102\text{ g/mol} = \mathbf{7.65\text{ g}}$$

(b) Each aluminum atom loses 3 electrons:
$$\text{Moles of electrons} = 0.15\text{ mol Al} \times 3 = \mathbf{0.45\text{ mol of electrons}}$$

(c) The oxide layer incorporates oxygen atoms from the water molecules of the electrolyte:
$$\text{Mass of bonded oxygen} = 7.65\text{ g} - 4.05\text{ g} = 3.60\text{ g}$$
*(Check: $0.075\text{ mol} \times 48\text{ g/mol (O}_3) = 3.60\text{ g}$ ✅)*
The mass increases because the chemical layer is a compound ($\text{Al}_2\text{O}_3$), combining oxygen with the substrate metal.

---

### Example 5: Electricity Economics in a Chlor-Alkali Plant

**Question:** An industrial chlor-alkali plant produces $40.0\text{ tonnes}$ of chlorine gas per day. Operating data indicates that each tonne of chlorine requires $2,500\text{ kWh}$ of electrical energy. Electricity costs $\$0.06\text{ per kWh}$.
(a) Calculate the total daily electrical energy consumed (in $\text{kWh}$).
(b) Calculate the daily electricity bill for the plant.
(c) Calculate the mass of sodium hydroxide produced simultaneously (in tonnes).

**Solution:**
(a) Daily electrical consumption:
$$\text{Energy} = 40.0\text{ tonnes} \times 2,500\text{ kWh/tonne} = \mathbf{100,000\text{ kWh}}$$
(b) Daily electricity bill:
$$\text{Cost} = 100,000\text{ kWh} \times \$0.06\text{/kWh} = \mathbf{\$6,000\text{ per day}}$$
(c) From $2\text{NaCl} + 2\text{H}_2\text{O} \rightarrow 2\text{NaOH} + \text{Cl}_2 + \text{H}_2$, the mass ratio of $\text{NaOH} : \text{Cl}_2$ is:
$$\frac{2 \times 40}{71} = \frac{80}{71} \approx 1.1268$$
$$\text{Mass of NaOH} = 40.0\text{ tonnes} \times \frac{80}{71} \approx \mathbf{45.1\text{ tonnes of NaOH}}$$

---

## Part F: Activities (Home Observation and Paper Design)

**Activity 5.1: Investigating Anodised Finishes at Home (Observation Only).**
Locate an item in your home labelled *anodised* or *hard-anodised* (such as a chef's sauté pan, an aluminum mountain bike frame, a premium reusable water bottle, or a laptop casing).
- Closely inspect the colored surface: does it show peeling or flaking edges like paint?
- Notice that the color permeates the metal's surface layer. Do not scrape, scratch, or apply chemicals to the object.

**Activity 5.2: Three-Cell Schematic Drawing (Paper Exercise).**
On paper, draft clean schematic diagrams for three industrial cells:
1. Copper refining cell
2. Chlor-alkali membrane cell
3. Aluminum anodising cell
Clearly label the anode (+), cathode (−), electrolyte, ion migrations, and products at each electrode.

**Activity 5.3: Concept Sorting Challenge.**
Create 10 index cards with the following terms: $\text{Cl}_2$, $\text{H}_2$, $\text{NaOH}$, *Anode mud*, $\text{Zn}^{2+}$, $\text{Al}_2\text{O}_3$, *Pure Cu cathode*, *Nascent oxygen*, $\text{Na}^+$ *across membrane*, $\text{Al}^{3+}$ *in cryolite*. Sort each card into one of four categories: Chlor-Alkali, Copper Refining, Anodising, or Hall-Héroult Smelting.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Believing anodising is just electroplating with an aluminum coat.**
   *Correction:* In electroplating, a foreign metal is plated onto a cathode. In anodising, the article is the **anode (+)**, and the coating is not metal—it is a ceramic **oxide layer ($\text{Al}_2\text{O}_3$)** formed by the oxidation of the article's own surface atoms!

2. **Mistake 2: Expecting metallic sodium to form at the cathode in the chlor-alkali process.**
   *Correction:* In aqueous brine, both $\text{Na}^+$ and $\text{H}^+$ are present. In the discharge series, $\text{H}^+$ is discharged preferentially, yielding **hydrogen gas ($\text{H}_2$)**. Sodium metal can only be extracted from **dry, molten $\text{NaCl}$** (Downs process).

3. **Mistake 3: Thinking all impurities in blister copper settle as anode mud.**
   *Correction:* Only metals **less reactive than copper** ($\text{Ag}$, $\text{Au}$, $\text{Pt}$) settle as anode mud. Metals **more reactive than copper** ($\text{Zn}$, $\text{Fe}$, $\text{Ni}$) oxidise and dissolve into the electrolyte as cations ($\text{Zn}^{2+}$, $\text{Fe}^{2+}$).

4. **Mistake 4: Assuming a chlor-alkali cell operates safely without a membrane.**
   *Correction:* Without a separating membrane, chlorine gas reacts with sodium hydroxide to form sodium hypochlorite bleach, while chlorine and hydrogen mix to form an explosive gas combination. The cation-permeable membrane is essential.

5. **Mistake 5: Believing the vibrant color on an anodised bottle is a type of baked paint.**
   *Correction:* The color is an organic dye absorbed deep inside the microscopic pores of the aluminum oxide honeycomb, which is subsequently sealed shut in boiling water.

---

## Quick Recap

- **Copper Refining:**
  - Anode (+): Impure blister copper (thick slab). Reaction: $\text{Cu} \rightarrow \text{Cu}^{2+} + 2\text{e}^-$.
  - Cathode (−): Pure copper seed sheet. Reaction: $\text{Cu}^{2+} + 2\text{e}^- \rightarrow \text{Cu}$. Purity reaches $99.99\%$.
  - Impurity fates: Reactive metals ($\text{Zn}$, $\text{Fe}$) dissolve into solution; noble metals ($\text{Ag}$, $\text{Au}$, $\text{Pt}$) fall as valuable **anode mud**.
  - Electrolyte concentration remains virtually constant.
- **Chlor-Alkali Process:**
  - Electrolyte: Concentrated brine ($\text{NaCl(aq)}$).
  - Anode (+): $\text{Cl}^-$ discharges $\rightarrow \text{Cl}_2\text{ (g)}$.
  - Cathode (−): $\text{H}^+$ discharges $\rightarrow \text{H}_2\text{ (g)}$.
  - Remaining in solution: $\text{NaOH (aq)}$.
  - Molar ratio: $\text{Cl}_2 : \text{H}_2 : \text{NaOH} = 1 : 1 : 2$.
  - **Membrane:** Allows $\text{Na}^+$ to migrate into the cathode chamber while preventing product mixing.
- **Anodising:**
  - Article is the **Anode (+)** immersed in dilute $\text{H}_2\text{SO}_4$.
  - Anode reaction: $2\text{Al} + 3\text{H}_2\text{O} \rightarrow \text{Al}_2\text{O}_3 + 6\text{H}^+ + 6\text{e}^-$.
  - Nanoporous oxide layer absorbs colored dyes; sealed permanently in boiling water.
  - Result: Hard, wear-resistant, corrosion-proof, insulating surface.
- **Energy Economics:** Electrolysis consumes massive electrical power ($\text{kWh}$), which is why plants locate near cheap renewable hydroelectric or nuclear energy sources.

---

## Practice Questions

1. In a chlor-alkali plant, exactly $28.4\text{ kg}$ of chlorine gas is produced in a production run.
   (a) Calculate the mass of sodium hydroxide ($\text{NaOH}$) and hydrogen gas ($\text{H}_2$) produced simultaneously.
   (b) Calculate the mass of pure $\text{NaCl}$ consumed.

2. A portion of the chlorine ($7.1\text{ kg}$) from Question 1 is reacted with dry slaked lime to manufacture bleaching powder:
   $$\text{Ca(OH)}_2 + \text{Cl}_2 \rightarrow \text{CaOCl}_2 + \text{H}_2\text{O}$$
   Calculate the mass of slaked lime required and the mass of bleaching powder produced ($\text{Ca} = 40$).

3. A commercial copper refinery deposits $44.45\text{ kg}$ of pure copper onto cathode sheets in a single shift.
   (a) How many moles of copper were deposited?
   (b) How many moles of electrons were transferred through the cathodes?
   (c) Assuming no net change in electrolyte concentration, what mass of copper dissolved from the blister anodes?

4. An impure blister copper anode contains impurities of nickel ($\text{Ni}$), palladium ($\text{Pd}$), and tin ($\text{Sn}$). Given that nickel and tin are more reactive than copper, whereas palladium is less reactive than copper, describe the fate of each impurity during refining.

5. A machined aluminum aerospace component of surface mass $18.9\text{ g}$ of aluminum is converted to an anodised oxide layer:
   $$2\text{Al} + 3\text{H}_2\text{O} \rightarrow \text{Al}_2\text{O}_3 + 6\text{H}^+ + 6\text{e}^-$$
   Calculate:
   (a) The moles of electrons liberated at the anode.
   (b) The mass of $\text{Al}_2\text{O}_3$ synthesized.
   (c) The mass of oxygen incorporated into the metal.

6. Write the balanced half-equation at the cathode during anodising, along with the overall cell reaction. Demonstrate that both atoms and electrical charges are balanced.

7. A technician inadvertently connects an aluminum window frame to the negative terminal and an inert plate to the positive terminal in dilute sulfuric acid.
   (a) What gas will evolve at the window frame?
   (b) Will an anodised protective oxide layer grow on the frame? Explain your answer.

8. Explain why metallic aluminium cannot be produced by the electrolysis of an aqueous solution of aluminium sulfate, $\text{Al}_2(\text{SO}_4)_3$. State what forms at the cathode instead.

9. A regional chlor-alkali unit produces $15.0\text{ tonnes}$ of chlorine per day, consuming $2,400\text{ kWh}$ per tonne. If electricity costs $\$0.07\text{ per kWh}$, calculate the daily electrical energy consumption and the daily power cost.

10. You are presented with three unlabelled industrial electrolytic cells:
    - **Cell X:** An aluminum article is connected to the positive terminal in dilute $\text{H}_2\text{SO}_4$.
    - **Cell Y:** Inert graphite electrodes are immersed in concentrated aqueous $\text{NaCl}$.
    - **Cell Z:** An impure copper slab is connected to the positive terminal in acidified $\text{CuSO}_4$.
    (a) Name the specific industrial process carried out in each cell.
    (b) In which cell(s) is a gas evolved at the cathode? Name the gas.
    (c) In which cell(s) is a gas evolved at the anode? Name the gas.

11. State whether each statement is True or False. If false, provide the correction:
    (a) The anode mud of a copper refinery consists of metals that are less reactive than copper.
    (b) In a chlor-alkali membrane cell, chloride ions ($\text{Cl}^-$) migrate across the membrane to the cathode compartment.
    (c) Hydrogen gas evolves at the cathode in both the chlor-alkali process and the anodising process.
    (d) An anodised aluminum surface is a superior electrical conductor compared to bare aluminum.
    (e) Per kilogram of metal product, copper refining consumes significantly more electricity than aluminum extraction.

12. Draw a clean, labelled schematic of the modern chlor-alkali membrane cell. Include: brine inlet, anode (+), cathode (−), membrane, $\text{Cl}_2$ outlet, $\text{H}_2$ outlet, $\text{NaOH}$ outlet, and indicate the migration direction of $\text{Na}^+$ ions.

13. Chlorine gas is roughly 2.5 times denser than ambient air. In the event of an accidental chlorine leak in an industrial plant yard, should workers evacuate to low basements or to higher open ground? Should they move with the wind or upwind (crosswind)? Explain.

14. A student claims: *"In an electrolytic copper refining tank, electrons swim through the blue copper sulfate solution from anode to cathode."* Correct the statement and explain how electric current is conducted through the cell.

---

### Answers

1. (a) Moles of $\text{Cl}_2 = \frac{28,400\text{ g}}{71\text{ g/mol}} = 400\text{ mol}$.
   - Ratio: $\text{Cl}_2 : \text{H}_2 : \text{NaOH} = 1 : 1 : 2$.
   - $\text{Moles of H}_2 = 400\text{ mol} \implies \text{Mass} = 400 \times 2 = 800\text{ g} = \mathbf{0.80\text{ kg of H}}_2$.
   - $\text{Moles of NaOH} = 800\text{ mol} \implies \text{Mass} = 800 \times 40 = 32,000\text{ g} = \mathbf{32.0\text{ kg of NaOH}}$.
   (b) $\text{Moles of NaCl} = 800\text{ mol} \implies \text{Mass} = 800 \times 58.5 = 46,800\text{ g} = \mathbf{46.8\text{ kg of NaCl}}$.
   *(Check: Water consumed = $800 \times 18 = 14.4\text{ kg}$. Reactants = $46.8 + 14.4 = 61.2\text{ kg}$; Products = $32.0 + 28.4 + 0.80 = 61.2\text{ kg}$ ✅)*

2. Moles of $\text{Cl}_2 = \frac{7,100\text{ g}}{71\text{ g/mol}} = 100\text{ mol}$.
   - From $\text{Ca(OH)}_2 + \text{Cl}_2 \rightarrow \text{CaOCl}_2 + \text{H}_2\text{O}$ (1 : 1 stoichiometry):
   - $\text{Mass of Ca(OH)}_2 = 100\text{ mol} \times 74\text{ g/mol} = \mathbf{7.40\text{ kg}}$.
   - $\text{Mass of CaOCl}_2 = 100\text{ mol} \times (40 + 16 + 71) = 100 \times 127 = \mathbf{12.70\text{ kg}}$.
   - $\text{Mass of H}_2\text{O} = 100\text{ mol} \times 18 = \mathbf{1.80\text{ kg}}$.
   *(Check: $7.40 + 7.10 = 14.50\text{ kg} = 12.70 + 1.80\text{ kg}$ ✅)*

3. (a) Moles of $\text{Cu} = \frac{44,450\text{ g}}{63.5\text{ g/mol}} = \mathbf{700\text{ mol Cu}}$.
   (b) Cathode accepts 2 electrons per ion ($\text{Cu}^{2+} + 2\text{e}^- \rightarrow \text{Cu}$):
   $$\text{Moles of electrons} = 700 \times 2 = \mathbf{1,400\text{ mol of electrons}}$$
   (c) $\mathbf{44.45\text{ kg of copper}}$ dissolved from the anodes to maintain constant bath concentration.

4. - **Nickel ($\text{Ni}$):** More reactive than copper; oxidises at the anode ($\text{Ni} \rightarrow \text{Ni}^{2+} + 2\text{e}^-$) and **remains dissolved in the electrolyte** because $\text{Ni}^{2+}$ cannot discharge before $\text{Cu}^{2+}$.
   - **Tin ($\text{Sn}$):** More reactive than copper; oxidises ($\text{Sn} \rightarrow \text{Sn}^{2+} + 2\text{e}^-$) and **remains dissolved in the electrolyte**.
   - **Palladium ($\text{Pd}$):** Less reactive (noble) than copper; does not oxidise at the applied cell voltage and settles beneath the anode as **anode mud**.

5. (a) Moles of $\text{Al} = \frac{18.9\text{ g}}{27\text{ g/mol}} = 0.70\text{ mol Al}$.
   Since each $\text{Al}$ loses 3 electrons:
   $$\text{Moles of electrons} = 0.70 \times 3 = \mathbf{2.10\text{ mol of electrons}}$$
   (b) Moles of $\text{Al}_2\text{O}_3 = \frac{0.70}{2} = 0.35\text{ mol}$.
   $$\text{Mass of Al}_2\text{O}_3 = 0.35\text{ mol} \times 102\text{ g/mol} = \mathbf{35.70\text{ g}}$$
   (c) $\text{Mass of oxygen} = 35.70\text{ g} - 18.90\text{ g} = \mathbf{16.80\text{ g}}$ (or $0.35\text{ mol} \times 48 = 16.80\text{ g}$ ✅).

6. - Cathode: $6\text{H}^+ + 6\text{e}^- \rightarrow 3\text{H}_2$ (Atoms: 6 H; Charge: $+6 - 6 = 0$ ✅).
   - Anode: $2\text{Al} + 3\text{H}_2\text{O} \rightarrow \text{Al}_2\text{O}_3 + 6\text{H}^+ + 6\text{e}^-$ (Atoms: 2 Al, 6 H, 3 O; Charge: $0 = +6 - 6 = 0$ ✅).
   - Overall cell reaction: $2\text{Al} + 3\text{H}_2\text{O} \rightarrow \text{Al}_2\text{O}_3 + 3\text{H}_2$ (Atoms: 2 Al, 6 H, 3 O; Net charge = 0 ✅).

7. (a) The window frame is connected to the negative terminal (cathode); hydrogen ions discharge to form **Hydrogen gas ($\text{H}_2$)**: $2\text{H}^+ + 2\text{e}^- \rightarrow \text{H}_2$.
   (b) **No oxide layer will grow.** Oxide film formation requires oxidation at the anode (+), where aluminum atoms surrender electrons to combine with oxygen.

8. In aqueous solution, both $\text{Al}^{3+}$ and $\text{H}^+$ migrate to the cathode. In the discharge series, $\text{H}^+$ lies far below aluminum and discharges preferentially, evolving **hydrogen gas ($\text{H}_2$)**. Aluminium can only be extracted from **anhydrous molten alumina dissolved in cryolite** (Hall-Héroult process).

9. - Daily energy = $15.0\text{ tonnes} \times 2,400\text{ kWh/tonne} = \mathbf{36,000\text{ kWh}}$.
   - Daily cost = $36,000\text{ kWh} \times \$0.07 = \mathbf{\$2,520\text{ per day}}$.

10. (a) Cell X: **Anodising of aluminium**; Cell Y: **Chlor-alkali process**; Cell Z: **Electrolytic refining of copper**.
    (b) Gas evolves at the cathode in **Cell X** ($\text{H}_2$) and **Cell Y** ($\text{H}_2$). In Cell Z, solid copper plates out without gas evolution.
    (c) Gas evolves at the anode in **Cell Y** only: **Chlorine gas ($\text{Cl}_2$)**. In Cell X, oxygen bonds immediately to form solid $\text{Al}_2\text{O}_3$; in Cell Z, the copper anode dissolves.

11. (a) **True.**
    (b) **False.** The membrane is permeable strictly to **$\text{Na}^+$ cations**; it blocks anions ($\text{Cl}^-$, $\text{OH}^-$).
    (c) **True.** Both processes discharge $\text{H}^+$ at the cathode to produce $\text{H}_2$ gas.
    (d) **False.** Aluminum oxide is an electrical **insulator**, drastically reducing surface electrical conductivity.
    (e) **False.** Aluminum extraction requires $\approx 13–15\text{ kWh/kg}$ to break strong ionic bonds, whereas copper refining requires only $\approx 0.3\text{ kWh/kg}$.

12. The diagram must match Figure 5.2:
    - Dual-compartment tank divided by a vertical cation-permeable membrane.
    - Left anode compartment (+): concentrated brine inlet, catalytic anode, $\text{Cl}_2$ gas outlet at top, depleted brine outlet at bottom.
    - Right cathode compartment (−): pure water inlet, cathode, $\text{H}_2$ gas outlet at top, concentrated $\text{NaOH}$ outlet at bottom.
    - Arrow indicating $\text{Na}^+$ ions passing through the membrane from anode to cathode compartment.

13. Chlorine gas has a relative molecular mass of 71, making it roughly 2.5 times denser than air ($M_r \approx 29$). It accumulates in low depressions, trenches, and basements. Personnel should immediately evacuate to **higher open ground** and move **upwind (crosswind)** away from the drifting plume to avoid inhaling toxic fumes.

14. **Incorrect.** Free electrons cannot survive or flow through liquid water. Electrons travel exclusively through the external copper wiring and DC power supply. Inside the blue copper sulfate solution, electric current is carried by the physical migration of **ions** ($\text{Cu}^{2+}$ cations drift toward the cathode, while $\text{SO}_4^{2-}$ anions drift toward the anode).

---

Maya admired her water bottle with a new appreciation. *"So this blue color is chemically bound into an oxide armor synthesized by electrons!"*

Dr. Bennett smiled. *"Exactly. And now you have seen every facet of electrolysis: from basic cells to selective discharge, electroplating, and heavy industrial plants."*

**What comes next?** In our final topic, Topic 6, **"Predict First, Then Verify: Practice and Chapter Summary"** ([electrolysis-part6.md](electrolysis-part6.md)), we test our mastery: solving multi-step electrochemical puzzles, identifying mystery products from unlabelled cells, avoiding classic examination pitfalls, and summarizing the entire chapter into a unified master framework.
