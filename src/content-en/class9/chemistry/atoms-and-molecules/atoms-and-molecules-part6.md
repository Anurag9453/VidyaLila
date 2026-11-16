# Chapter: Atoms and Molecules (Part 6)

> **Class:** 9 | **Subject:** Chemistry
> **This file continues from [atoms-and-molecules-part5.md](atoms-and-molecules-part5.md)** (where we introduced the mole concept, Avogadro's number $6.022 \times 10^{23}$, molar mass, the $n = m / M$ mass-mole triangle, and the $N = n \times 6.022 \times 10^{23}$ particle bridge). For the start of the chapter, see [atoms-and-molecules.md](atoms-and-molecules.md).
> **Topics covered in this file:**
> 6. Mole Calculations: Mass, Moles, and Particles

---

# Topic 6: Mole Calculations: Mass, Moles, and Particles

In the previous topic, we defined the mole as the chemist's universal counting unit: $1\text{ mole} = 6.022 \times 10^{23}$ particles, where the mass of one mole in grams is numerically identical to the particle's atomic or molecular mass in u. Now comes the exciting part: **putting the mole to work!** In this topic, we will establish a foolproof 4-step problem-solving method and work through a comprehensive collection of numerical problems, making transitions between laboratory mass, moles, and microscopic particle counts completely second nature.

**Standard rounded atomic masses (used throughout this topic):** H = 1, C = 12, N = 14, O = 16, Na = 23, Mg = 24, S = 32, Cl = 35.5, Ca = 40, Fe = 56, Cu = 63.5. Avogadro constant: $6.022 \times 10^{23}\text{ entities per mole}$.

---

## The Wedding Banquet and the Caterer's Math

Liam accompanied his uncle, Mr. Miller, to plan the dessert menu for a large wedding banquet. Chef Pierre, the head caterer, had a confirmed guest list of 350 people. "We plan to serve 2 artisanal macarons to each guest," Chef Pierre explained.

Liam quickly did the mental arithmetic: $350 \times 2 = \mathbf{700\text{ macarons}}$. Then he asked, "Chef Pierre, when you order ingredients from the bakery supplier, you order in kilograms. How many kilograms does 700 macarons make?"

Chef Pierre placed a freshly baked macaron on a digital kitchen scale: exactly 40 g. "It's simple math now: $700 \times 40\text{ g} = 28,000\text{ g} = \mathbf{28\text{ kg}}$. I simply tell the bakery to prepare 28 kilograms of macarons."

Liam smiled: "You effortlessly converted **piece count into kilograms**, using the single unit mass of 40 g as your bridge!"

Mr. Miller nodded warmly. "Exactly. And in chemistry, we do the exact same thing every day. A 'piece' is an individual atom or molecule, and the 'kilogram' is the mass we measure on our lab balance. Because individual atoms are so microscopic, we group them into **moles**, and **molar mass** acts as our indispensable bridge."

Every problem in this topic follows Chef Pierre's logic: converting between total mass and individual particle count via the mole bridge!

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Mole ($n$)** | The SI unit for amount of substance; $1\text{ mol} = 6.022 \times 10^{23}$ particles | $2\text{ mol of }\text{H}_2\text{O}$ |
| **Molar mass ($M$)** | The mass of one mole of substance in grams per mole ($\text{g/mol}$) | $M(\text{H}_2\text{O}) = 18\text{ g/mol}$ |
| **Given mass ($m$)** | The actual mass of a sample in grams | $36\text{ g of water}$ |
| **Number of particles ($N$)** | The total count of individual atoms, molecules, or formula units | $1.204 \times 10^{24}\text{ molecules}$ |
| **Moles of atoms** | The amount of constituent atoms contained within a chemical compound, expressed in moles | $1\text{ mol of }\text{H}_2\text{O}$ contains $3\text{ mol of atoms}$ |
| **Significant figures** | The meaningful digits in a numerical value reflecting measurement precision | 4 significant figures in $6.022 \times 10^{23}$ |

---

## Part A: Three Paths, One Crossroads Bridge

Recall the mass-mole triangle ($m, n, M$) and the mole-to-particle bridge from Topic 5. Let's combine them into one unified roadmap. Mass, moles, and particle count are three distinct quantities, with **the mole standing at the central crossroads**. You never jump directly from mass to particle count in a single unguided leap; you always travel through the **mole**:

```
               MASS (m, in grams)
                 │      ▲
           ÷ M   │      │   × M
                 ▼      │
               MOLES (n)
                 │      ▲
    × 6.022×10²³ │      │   ÷ 6.022×10²³
                 ▼      │
          PARTICLES (N, count)
```

> **Figure 6.1** – The complete mole conversion roadmap: travel between mass and moles using the molar mass ($M$); travel between moles and particle count using the Avogadro constant ($6.022 \times 10^{23}$). To go between mass and particles, always route through moles!

**The Four Working Formulas:**
1. $n = \frac{m}{M}$ (Converting mass to moles)
2. $m = n \times M$ (Converting moles to mass)
3. $N = n \times 6.022 \times 10^{23}$ (Converting moles to particle count)
4. $n = \frac{N}{6.022 \times 10^{23}}$ (Converting particle count to moles)

---

## Part B: The 4-Step Problem-Solving Method

Follow these four steps for every calculation:

1. **Identify the Given and Target:** Write down what information is provided ($m, n,$ or $N$) and what you need to find.
2. **Determine the Molar Mass ($M$):** Calculate $M$ using the chemical formula, taking care with subscripts and brackets.
3. **Route Through Moles ($n$):** Convert your starting quantity into moles ($n = m / M$ or $n = N / N_A$).
4. **Calculate Target and Verify:** Convert moles to the requested final quantity and perform a sanity check (reverse the calculation or check order of magnitude).

**Working with Scientific Notation:**
- When a product exceeds 10, shift the decimal left and increment the exponent:
  $$2 \times (6.022 \times 10^{23}) = 12.044 \times 10^{23} = \mathbf{1.204 \times 10^{24}}$$
- When dividing by powers of 10, subtract exponents:
  $$\frac{3.011 \times 10^{22}}{6.022 \times 10^{23}} = 0.5 \times 10^{-1} = \mathbf{0.05\text{ mol}}$$
- **Significant Figures:** We maintain **4 significant figures** for particle counts, matching the 4 digits in $6.022 \times 10^{23}$. Where clean exact integers result (e.g., $2\text{ mol}$), we write them directly.

---

## Part C: Solved Problems

### Problem 1: Mass to moles: 36 g of water

How many moles are present in 36 g of water ($\text{H}_2\text{O}$)?
- $M(\text{H}_2\text{O}) = (2 \times 1) + 16 = 18\text{ g/mol}$
- $n = \frac{m}{M} = \frac{36}{18} = \mathbf{2\text{ mol}}$

Check: $2\text{ mol} \times 18\text{ g/mol} = 36\text{ g}$ ✅

### Problem 2: Mass to moles: 11 g of CO₂

How many moles are present in 11 g of carbon dioxide?
- $M(\text{CO}_2) = 12 + (2 \times 16) = 44\text{ g/mol}$
- $n = \frac{m}{M} = \frac{11}{44} = \mathbf{0.25\text{ mol}}$

Check: $0.25\text{ mol} \times 44\text{ g/mol} = 11\text{ g}$ ✅

### Problem 3: Moles to mass: 0.5 mol of NaCl

What is the mass of 0.5 mol of sodium chloride ($\text{NaCl}$)?
- $M(\text{NaCl}) = 23 + 35.5 = 58.5\text{ g/mol}$
- $m = n \times M = 0.5 \times 58.5 = \mathbf{29.25\text{ g}}$

Check: $29.25\text{ g} \div 58.5\text{ g/mol} = 0.5\text{ mol}$ ✅

### Problem 4: Moles to particles: 2 mol of water

How many molecules are in 2 mol of water?
- $N = n \times 6.022 \times 10^{23} = 2 \times 6.022 \times 10^{23} = 12.044 \times 10^{23} \approx \mathbf{1.204 \times 10^{24}\text{ molecules}}$

Check: $(1.204 \times 10^{24}) \div (6.022 \times 10^{23}) \approx 2\text{ mol}$ ✅

### Problem 5: Particles to moles: 3.011 × 10²² molecules

A container contains $3.011 \times 10^{22}$ gas molecules. How many moles is this?
- $n = \frac{N}{N_A} = \frac{3.011 \times 10^{22}}{6.022 \times 10^{23}} = 0.5 \times 10^{-1} = \mathbf{0.05\text{ mol}}$

Check: $0.05 \times (6.022 \times 10^{23}) = 0.3011 \times 10^{23} = 3.011 \times 10^{22}$ ✅

### Problem 6: Mass to particles (two steps): 9 g of water

How many molecules are present in 9 g of pure water?
- Step 1 (Mass to moles): $n = \frac{9}{18} = 0.5\text{ mol}$
- Step 2 (Moles to molecules): $N = 0.5 \times 6.022 \times 10^{23} = \mathbf{3.011 \times 10^{23}\text{ molecules}}$

Check: Reversing steps: $(3.011 \times 10^{23}) \div (6.022 \times 10^{23}) = 0.5\text{ mol}$, and $0.5 \times 18\text{ g/mol} = 9\text{ g}$ ✅

### Problem 7: Particles to mass (two steps): 3.011 × 10²³ molecules of CO₂

What is the mass of $3.011 \times 10^{23}$ molecules of carbon dioxide?
- Step 1 (Particles to moles): $n = \frac{3.011 \times 10^{23}}{6.022 \times 10^{23}} = 0.5\text{ mol}$
- Step 2 (Moles to mass): $m = 0.5 \times 44 = \mathbf{22\text{ g}}$

Check: $22\text{ g} \div 44\text{ g/mol} = 0.5\text{ mol}$; $0.5 \times (6.022 \times 10^{23}) = 3.011 \times 10^{23}$ molecules ✅

### Problem 8: Counting constituent atoms inside molecules: 36 g of water

How many total atoms, hydrogen atoms, and oxygen atoms are present in 36 g of water?

First, look at the anatomy of one mole of water:

```
   1 mole of H₂O  =  6.022 × 10²³ molecules

        H₂O                          H    H
       ┌────┐                         \  /
       │ 1  │   one molecule has        O
       └────┘   2 H and 1 O

   1 mol H₂O  ──►  2 mol H atoms
                   1 mol O atoms
                   -------------
                   3 mol atoms total
```

> **Figure 6.2** – Inside 1 mole of $\text{H}_2\text{O}$: each water molecule contains 2 H atoms and 1 O atom. Therefore, 1 mole of water molecules ($6.022 \times 10^{23}$ molecules) contains 2 moles of H atoms and 1 mole of O atoms, totaling 3 moles of individual atoms!

- $n(\text{H}_2\text{O}) = \frac{36}{18} = 2\text{ mol of water molecules}$
- **Hydrogen atoms:** $2\text{ mol} \times 2 = \mathbf{4\text{ mol of H atoms}}$
  $$N(\text{H}) = 4 \times 6.022 \times 10^{23} = \mathbf{2.409 \times 10^{24}\text{ H atoms}}$$
- **Oxygen atoms:** $2\text{ mol} \times 1 = \mathbf{2\text{ mol of O atoms}}$
  $$N(\text{O}) = 2 \times 6.022 \times 10^{23} = \mathbf{1.204 \times 10^{24}\text{ O atoms}}$$
- **Total atoms:** $4\text{ mol} + 2\text{ mol} = 6\text{ mol of atoms}$
  $$N_{\text{total}} = 6 \times 6.022 \times 10^{23} = \mathbf{3.613 \times 10^{24}\text{ atoms}}$$

Check: $2.409 \times 10^{24} + 1.204 \times 10^{24} = 3.613 \times 10^{24}$ atoms total ✅

### Problem 9: Comparing molecule counts: 18 g of water, 32 g of oxygen, 2 g of hydrogen

Compare the count of molecules and the count of constituent atoms in 18 g of $\text{H}_2\text{O}$, 32 g of $\text{O}_2$, and 2 g of $\text{H}_2$:
- $n(\text{H}_2\text{O}) = 18 \div 18 = \mathbf{1\text{ mol}}$
- $n(\text{O}_2) = 32 \div 32 = \mathbf{1\text{ mol}}$
- $n(\text{H}_2) = 2 \div 2 = \mathbf{1\text{ mol}}$

All three samples contain the **exact same count of molecules**: $6.022 \times 10^{23}$ molecules each!
However, their total atom counts differ:
- Water contains $1 \times 3 = 3\text{ mol of atoms}$ ($1.807 \times 10^{24}$ atoms)
- Oxygen gas contains $1 \times 2 = 2\text{ mol of atoms}$ ($1.204 \times 10^{24}$ atoms)
- Hydrogen gas contains $1 \times 2 = 2\text{ mol of atoms}$ ($1.204 \times 10^{24}$ atoms)

Therefore, **water contains the greatest number of individual atoms**.

### Problem 9b: Equal mass comparison: do equal masses have equal counts? (10 g of each)

Suppose you have 10 g of $\text{H}_2$, 10 g of $\text{O}_2$, and 10 g of $\text{H}_2\text{O}$. Which sample contains the most molecules?
- $n(\text{H}_2) = \frac{10}{2} = \mathbf{5\text{ mol}}$ ($5 \times 6.022 \times 10^{23} = \mathbf{3.011 \times 10^{24}\text{ molecules}}$)
- $n(\text{O}_2) = \frac{10}{32} = \mathbf{0.3125\text{ mol}}$ ($0.3125 \times 6.022 \times 10^{23} = \mathbf{1.882 \times 10^{23}\text{ molecules}}$)
- $n(\text{H}_2\text{O}) = \frac{10}{18} = \mathbf{0.5556\text{ mol}}$ ($0.5556 \times 6.022 \times 10^{23} = \mathbf{3.346 \times 10^{23}\text{ molecules}}$)

When comparing equal masses, **the lightest molecule ($\text{H}_2$) yields by far the greatest count of molecules!** 10 g of hydrogen contains nearly 16 times as many molecules as 10 g of oxygen!

Check: $5 \times 2 = 10\text{ g}$, $0.3125 \times 32 = 10\text{ g}$, $0.5556 \times 18 \approx 10\text{ g}$ ✅

### Problem 10: The caterer's order and its chemical twin

**Part 1 (The Wedding Banquet):** 350 guests, 2 macarons per guest, each macaron weighing 40 g. What is the total order in kilograms?
- Total macarons: $350 \times 2 = 700\text{ macarons}$
- Total mass: $700 \times 40\text{ g} = 28,000\text{ g} = \mathbf{28\text{ kg}}$

**Part 2 (The Chemical Twin):** What is the mass in grams of $3.011 \times 10^{24}$ water molecules?
- $n = \frac{3.011 \times 10^{24}}{6.022 \times 10^{23}} = 5\text{ mol}$
- $m = 5 \times 18 = \mathbf{90\text{ g}}$

Check: Both problems use the exact same bridge: $\text{Count} \rightarrow \text{Package (mol)} \rightarrow \text{Total mass}$. $90 / 18 = 5\text{ mol}$, and $5 \times 6.022 \times 10^{23} = 3.011 \times 10^{24}$ ✅

### Problem 11: Mass of a single molecule or atom

(a) Calculate the mass of one single molecule of water in grams:
- 1 mole of water ($18\text{ g}$) contains $6.022 \times 10^{23}$ molecules.
- Mass of 1 molecule = $\frac{18\text{ g}}{6.022 \times 10^{23}} = \mathbf{2.989 \times 10^{-23}\text{ g}}$

(b) Calculate the mass of one single atom of copper in grams ($M = 63.5\text{ g/mol}$):
- Mass of 1 atom = $\frac{63.5\text{ g}}{6.022 \times 10^{23}} = \mathbf{1.054 \times 10^{-22}\text{ g}}$

Check: $(2.989 \times 10^{-23}\text{ g}) \times (6.022 \times 10^{23}) = 18.0\text{ g}$ ✅; $(1.054 \times 10^{-22}\text{ g}) \times (6.022 \times 10^{23}) = 63.5\text{ g}$ ✅

### Problem 12: Equal mass, comparing atom counts: 12 g of carbon vs 12 g of magnesium

- $n(\text{C}) = \frac{12}{12} = 1\text{ mol} = \mathbf{6.022 \times 10^{23}\text{ atoms}}$
- $n(\text{Mg}) = \frac{12}{24} = 0.5\text{ mol} = \mathbf{3.011 \times 10^{23}\text{ atoms}}$

The carbon sample contains **twice as many atoms** as the magnesium sample because each magnesium atom ($24\text{ u}$) is twice as heavy as a carbon atom ($12\text{ u}$).

Check: $1\text{ mol} \times 12\text{ g/mol} = 12\text{ g}$ and $0.5\text{ mol} \times 24\text{ g/mol} = 12\text{ g}$ ✅

### Problem 13: Counting atoms of a single element: oxygen atoms in 22 g of CO₂

- $n(\text{CO}_2) = \frac{22}{44} = 0.5\text{ mol of CO}_2\text{ molecules}$
- Each $\text{CO}_2$ molecule contains 2 oxygen atoms:
  $$n(\text{O atoms}) = 0.5 \times 2 = \mathbf{1\text{ mol of O atoms}}$$
- Count of oxygen atoms = $1 \times 6.022 \times 10^{23} = \mathbf{6.022 \times 10^{23}\text{ O atoms}}$

Check: $1\text{ mol of O atoms}$ weighs $16\text{ g}$. In 22 g of $\text{CO}_2$, oxygen makes up $\frac{32}{44}$ of the mass: $22 \times \frac{32}{44} = 16\text{ g}$ ✅

### Problem 14: Dealing with parentheses: H and O atoms in 37 g of Ca(OH)₂

- $M[\text{Ca(OH)}_2] = 40 + 2 \times (16 + 1) = 40 + 34 = 74\text{ g/mol}$
- $n = \frac{37}{74} = 0.5\text{ mol of formula units}$
- Each formula unit contains 2 O atoms and 2 H atoms:
  - $n(\text{O}) = 0.5 \times 2 = 1\text{ mol} \rightarrow \mathbf{6.022 \times 10^{23}\text{ O atoms}}$
  - $n(\text{H}) = 0.5 \times 2 = 1\text{ mol} \rightarrow \mathbf{6.022 \times 10^{23}\text{ H atoms}}$

Check: Calcium atoms $= 0.5 \times 1 = 0.5\text{ mol} = 3.011 \times 10^{23}$ atoms. Total atoms $= 0.5 \times 5 = 2.5\text{ mol}$ ✅

### Problem 15: An enormous count in a tiny sample: molecules in 1 g of water

How many molecules are in a single gram of water?
- $n = \frac{1}{18} \approx 0.05556\text{ mol}$
- $N = \left(\frac{1}{18}\right) \times 6.022 \times 10^{23} = \mathbf{3.346 \times 10^{22}\text{ molecules}}$

A single gram of water is only about 20 small drops, yet it contains thirty-three sextillion molecules!

Check: $(3.346 \times 10^{22}) \div (6.022 \times 10^{23}) = 0.05556\text{ mol}$; $0.05556 \times 18\text{ g/mol} = 1.00\text{ g}$ ✅

### Problem 16: Multi-element compound: 90 g of glucose

For 90 g of glucose ($\text{C}_6\text{H}_{12}\text{O}_6$, $M = 180\text{ g/mol}$), find the number of glucose molecules and the count of carbon atoms:
- $n = \frac{90}{180} = 0.5\text{ mol of glucose}$
- Molecules of glucose $= 0.5 \times 6.022 \times 10^{23} = \mathbf{3.011 \times 10^{23}\text{ molecules}}$
- Carbon atoms: each molecule has 6 carbon atoms:
  $$n(\text{C}) = 0.5 \times 6 = 3\text{ mol}$$
  $$N(\text{C}) = 3 \times 6.022 \times 10^{23} = \mathbf{1.807 \times 10^{24}\text{ C atoms}}$$

Check: $3\text{ mol of C} \times 12\text{ g/mol} = 36\text{ g of carbon}$. In 90 g of glucose, carbon accounts for $\frac{72}{180} = 40\%$: $90 \times 0.40 = 36\text{ g}$ ✅

---

## Part D: Handling Rounding and Significant Figures

- We use **rounded atomic masses** (H = 1, O = 16, C = 12 ...), so all calculated answers inherit that reasonable approximation.
- In scientific notation, always adjust the coefficient so there is **one non-zero digit before the decimal point** (between 1 and 10): write $1.204 \times 10^{24}$, not $12.044 \times 10^{23}$.
- We maintain **4 significant figures** for particle counts, matching $6.022 \times 10^{23}$.
- When multiplying powers of 10, add exponents ($10^{23} \times 10^1 = 10^{24}$); when dividing, subtract exponents ($10^{22} \div 10^{23} = 10^{-1}$).

---

## Common Pitfalls to Avoid

1. **Mistake 1: Confusing molecules with constituent atoms**
   $1\text{ mol of }\text{H}_2\text{O} = 6.022 \times 10^{23}$ **molecules**. To find the count of atoms, you must multiply by 3 (since each molecule has 2 H and 1 O). Always verify whether the question asks for molecules or atoms!

2. **Mistake 2: Forgetting subscripts when finding molar mass**
   For $\text{O}_2$, $M = 2 \times 16 = \mathbf{32\text{ g/mol}}$, not 16. In $\text{Ca(OH)}_2$, the subscript 2 outside the bracket applies to both O and H.

3. **Mistake 3: Multiplying mass directly by Avogadro's number**
   You can never go directly from grams to particle count! Doing $18\text{ g} \times 6.022 \times 10^{23}$ is completely meaningless. You must always convert grams to moles first ($18 / 18 = 1\text{ mol}$), and only then multiply by Avogadro's number.

4. **Mistake 4: Unit errors between grams and kilograms**
   Molar mass is expressed in **$\text{g/mol}$**, not $\text{kg/mol}$. If a problem gives sample mass in kilograms, convert to grams first ($28\text{ kg} = 28,000\text{ g}$).

5. **Mistake 5: Assuming equal masses contain equal particle counts**
   10 g of $\text{H}_2$ and 10 g of $\text{O}_2$ do not contain equal numbers of molecules ($5\text{ mol}$ vs $0.3125\text{ mol}$). Equal **moles** contain equal counts, not equal masses.

6. **Mistake 6: Exponent errors in scientific notation**
   Writing $12.044 \times 10^{23}$ as $1.204 \times 10^{23}$ loses a factor of 10! The correct expression is $1.204 \times 10^{24}$.

---

## Quick Recap

- The mole is the central crossroads bridge: travel between mass and moles using molar mass ($M$), and travel between moles and particles using Avogadro's number ($6.022 \times 10^{23}$). Never bypass the mole!
- **Core 4-step method:** Identify knowns/unknowns $\rightarrow$ find $M$ $\rightarrow$ route through moles $\rightarrow$ find target and check.
- **The four formulas:** $n = m / M$, $m = n \times M$, $N = n \times 6.022 \times 10^{23}$, $n = N / 6.022 \times 10^{23}$.
- $1\text{ mol of }\text{H}_2\text{O} = 6.022 \times 10^{23}\text{ molecules} = 2\text{ mol of H atoms} + 1\text{ mol of O atoms} = 3\text{ mol of total atoms}$.
- Samples of 18 g $\text{H}_2\text{O}$, 32 g $\text{O}_2$, and 2 g $\text{H}_2$ contain identical molecule counts (1 mol each), but different atom counts (3, 2, and 2 mol).
- For equal masses, the lighter substance contains significantly more particles.
- The mass of an individual atom or molecule is calculated as $M \div 6.022 \times 10^{23}$ ($\text{H}_2\text{O}: 2.989 \times 10^{-23}\text{ g}$; $\text{Cu}: 1.054 \times 10^{-22}\text{ g}$).
- Maintain 4 significant figures for particle counts and format exponents cleanly in scientific notation.

---

## Practice Questions

1. How many moles are present in 54 g of water? How many molecules does that represent?

2. What is the mass in grams of 0.2 mol of carbon dioxide ($\text{CO}_2$)?

3. A sample contains $6.022 \times 10^{22}$ molecules of ammonia ($\text{NH}_3$, $M = 17\text{ g/mol}$). Find its mass in grams.

4. Find the number of copper atoms present in a 127 g piece of pure copper wire ($M = 63.5\text{ g/mol}$).

5. How many moles of atoms of each element are present in 49 g of sulphuric acid ($\text{H}_2\text{SO}_4$, $M = 98\text{ g/mol}$)? How many individual hydrogen atoms does this represent?

6. Which sample contains the most molecules: 8 g of methane ($\text{CH}_4$), 8 g of oxygen ($\text{O}_2$), or 8 g of hydrogen ($\text{H}_2$)? State the number of moles of each.

7. Calculate the mass of one single molecule of carbon dioxide in grams.

8. A banquet caterer requires 3 dessert pastries per guest for 240 guests, with each pastry weighing 25 g. How many kilograms should be ordered? Which step of our chemical mole calculation method does this mirror?

9. A student claims: *"18 g of water contains $6.022 \times 10^{23}$ atoms."* Identify the mistake and provide the correct count of atoms.

10. How many carbon atoms and how many total atoms are present in 18 g of glucose ($\text{C}_6\text{H}_{12}\text{O}_6$, $M = 180\text{ g/mol}$)?

### Answers

1. $n = \frac{54}{18} = \mathbf{3\text{ mol}}$. Count of molecules $= 3 \times 6.022 \times 10^{23} = \mathbf{1.807 \times 10^{24}\text{ molecules}}$.
   Check: $3 \times 18 = 54\text{ g}$ ✅; $1.807 \times 10^{24} \div (6.022 \times 10^{23}) = 3\text{ mol}$ ✅

2. $M(\text{CO}_2) = 44\text{ g/mol}$. $m = 0.2 \times 44 = \mathbf{8.8\text{ g}}$.
   Check: $8.8 \div 44 = 0.2\text{ mol}$ ✅

3. $n = \frac{6.022 \times 10^{22}}{6.022 \times 10^{23}} = 0.1\text{ mol}$. $m = 0.1 \times 17 = \mathbf{1.7\text{ g}}$.
   Check: $1.7 \div 17 = 0.1\text{ mol}$ ✅

4. $n = \frac{127}{63.5} = 2\text{ mol}$.
   Number of Cu atoms $= 2 \times 6.022 \times 10^{23} = \mathbf{1.204 \times 10^{24}\text{ atoms}}$ ✅

5. $n(\text{H}_2\text{SO}_4) = \frac{49}{98} = 0.5\text{ mol}$.
   - $\text{H} = 0.5 \times 2 = \mathbf{1\text{ mol of H atoms}}$
   - $\text{S} = 0.5 \times 1 = \mathbf{0.5\text{ mol of S atoms}}$
   - $\text{O} = 0.5 \times 4 = \mathbf{2\text{ mol of O atoms}}$
   Total $= 1 + 0.5 + 2 = 3.5\text{ mol of atoms}$.
   Number of H atoms $= 1 \times 6.022 \times 10^{23} = \mathbf{6.022 \times 10^{23}\text{ H atoms}}$ ✅

6. $n(\text{CH}_4) = \frac{8}{16} = 0.5\text{ mol}$; $n(\text{O}_2) = \frac{8}{32} = 0.25\text{ mol}$; $n(\text{H}_2) = \frac{8}{2} = 4\text{ mol}$.
   **Hydrogen gas ($\text{H}_2$) contains the most molecules** ($4\text{ mol} = 2.409 \times 10^{24}$ molecules) because it has by far the lowest molar mass ✅.

7. $M(\text{CO}_2) = 44\text{ g/mol}$.
   Mass of 1 molecule $= \frac{44}{6.022 \times 10^{23}} = \mathbf{7.307 \times 10^{-23}\text{ g}}$.
   Check: $(7.307 \times 10^{-23}) \times (6.022 \times 10^{23}) \approx 44\text{ g}$ ✅

8. Total pastries $= 240 \times 3 = 720\text{ pastries}$.
   Total mass $= 720 \times 25\text{ g} = 18,000\text{ g} = \mathbf{18\text{ kg}}$.
   This mirrors converting **particle count to total mass**: $\text{Count} \times \text{unit mass} = \text{total mass}$. Check: $18,000 \div 25 = 720$ pastries ✅

9. 18 g of water equals 1 mole, which contains $6.022 \times 10^{23}$ **molecules**, not atoms! Since each water molecule contains 3 atoms (2 H and 1 O), the actual count of atoms is $3 \times 6.022 \times 10^{23} = \mathbf{1.807 \times 10^{24}\text{ atoms}}$ ✅.

10. $n = \frac{18}{180} = 0.1\text{ mol of glucose}$.
    - Carbon atoms: $0.1 \times 6 = 0.6\text{ mol} \rightarrow 0.6 \times 6.022 \times 10^{23} = \mathbf{3.613 \times 10^{23}\text{ C atoms}}$
    - Total atoms per molecule $= 6 + 12 + 6 = 24$ atoms.
    - Total atoms: $0.1 \times 24 = 2.4\text{ mol} \rightarrow 2.4 \times 6.022 \times 10^{23} = \mathbf{1.445 \times 10^{24}\text{ atoms}}$
    Check: $(0.6\text{ mol C}) + (1.2\text{ mol H}) + (0.6\text{ mol O}) = 2.4\text{ mol atoms}$ ✅

---

Brilliant! You can now navigate effortlessly between laboratory mass, moles, and particle counts. Like Liam and Chef Pierre, you know that whether you are planning a banquet or weighing chemicals in a beaker, one reliable bridge connects them all.

**What's next?** Now let's peer deeper inside a chemical compound. What **percentage by mass** does each element contribute to a compound? How much of water is oxygen, and for an agricultural farmer, which fertilizer — urea, ammonium nitrate, or ammonium sulphate — delivers the most nitrogen per dollar? In our final topic, **"Percentage Composition and Chapter Summary,"** we will master percentage calculations and tie the entire chapter together in one panoramic review table.
