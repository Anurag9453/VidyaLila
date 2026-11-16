# Chapter: Mole Concept and Stoichiometry (Part 5)

> **Class:** 10 | **Subject:** Chemistry
> **This file continues from [mole-concept-and-stoichiometry-part4.md](mole-concept-and-stoichiometry-part4.md)** (where we read balanced equations as mole recipes and solved mass-to-mass problems using mole ratios). Start of chapter: [mole-concept-and-stoichiometry.md](mole-concept-and-stoichiometry.md). For a quick review: the mole and molar mass [atoms-and-molecules-part5.md](../../../class9/chemistry/atoms-and-molecules/atoms-and-molecules-part5.md) and [atoms-and-molecules-part6.md](../../../class9/chemistry/atoms-and-molecules/atoms-and-molecules-part6.md), STP and 22.4 L [gas-laws-part5.md](../../../class9/chemistry/gas-laws/gas-laws-part5.md), and how gas volume changes with temperature [gas-laws-part3.md](../../../class9/chemistry/gas-laws/gas-laws-part3.md).
> **Topics covered in this file:**
> 5. Calculations with Gas Volumes and Moles

---

# Topic 5: Calculations with Gas Volumes and Moles

In Topic 4, we learned that a balanced chemical equation is a recipe written in moles, and that the pathway from mass to mass is **mass → moles → mole ratio → moles → mass**. However, many chemical reactions consume or release a **gas**, and weighing a gas on a balance is tricky — it is much easier to measure a gas by its **volume** (in litres). In Class 9, we learned that at STP, **1 mole of any gas occupies 22.4 L**. In this topic, we attach that 22.4 L conversion to the other side of our mole bridge: we will solve **mass-to-volume**, **volume-to-mass**, and **volume-to-volume** problems, calculate how much air a kitchen gas burner needs, and bring mass, moles, gas volume, and particle counts together into a single **Mole Map**.

---

## The Kitchen Gas Safety Card

In Mr. Dawson's apartment kitchen, right next to the stove, hangs a laminated safety card provided by the gas utility company. When his niece Nora visited for the holidays, she stopped to read the five rules printed on the card:

1. If you **smell gas**, stay alert immediately (a strong odorant is deliberately added to cooking gas so leaks are easy to detect).
2. **Open all windows and doors** right away.
3. **Do not flip any electrical switches** (no lights, fans, or phone chargers), and **never strike a match or lighter**.
4. **Turn off the main gas valve / regulator.**
5. **Step outside to a safe area and call the gas company.**

"Uncle, I understand opening the windows, but why can't we touch a light switch?" Nora asked. Mr. Dawson explained: "Cooking gas (LPG or natural gas) is **highly flammable**, and if it mixes with air in a certain proportion, even a tiny spark inside a wall switch can ignite it. That's why we never touch switches or flames, and we open windows so the gas disperses outside. Memorize those five steps — they are real-life household safety rules, **never an experiment**." Later, watching the steady blue flame of the stove from a safe distance while her uncle cooked soup, Nora asked another question: "Uncle, where does the flame get the **air** it needs to burn? And how much air does it actually use?" Mr. Dawson smiled: "That is our exact chemistry topic today! We measure gases in **litres**, and we measure air in litres too. Let's work it out **on paper** — strictly on paper, since we never collect or burn gases ourselves."

**Safety Note (for this entire topic):** All reactions discussed in this topic (burning fuels, heating KClO₃, burning magnesium, reacting metals with acid) are **strictly for reading and paper calculation** or **teacher-led school lab demonstrations**. Never generate, collect, or ignite any gas yourself. For household gas safety, always follow the five steps on the safety card above.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **STP** | Standard Temperature and Pressure for measuring gases: 273 K (0 °C) and 1 atm pressure | The Class 9 molar volume of 22.4 L applies at STP |
| **Molar volume** | The volume occupied by 1 mole of any gas at STP: 22.4 L | 1 mol O₂ = 22.4 L; 1 mol CO₂ = 22.4 L |
| **Mass-volume problem** | A stoichiometry problem where a mass (g) is given and a gas volume (L) is asked, or vice versa | Volume of CO₂ formed from 21.2 g of Na₂CO₃ |
| **Volume-volume problem** | A stoichiometry problem where both the given and asked quantities are gas volumes | Volume of O₂ needed to burn 6 L of ethene |
| **Mole map** | A visual diagram connecting mass, moles, gas volume, and number of particles | Figure 5.1 |
| **Oxygen fraction of air** | Air contains roughly 21% O₂ and 78% N₂ by volume | 100 L of air contains about 21 L of O₂ |
| **Steam** | Water in the gas phase (at or above 100 °C), which occupies far more volume than liquid water | 18 g of liquid water is ~18 mL, whereas 18 g of steam occupies tens of litres |

---

## Part A: Three Faces of One Mole

In Class 9, we connected one mole to three different measurements: **mass** (molar mass, in g), **number of particles** (6.022 × 10²³), and **gas volume** (22.4 L at STP). Let's compare them **side by side**:

| 1 Mole of... | Mass | Gas Volume (at STP) | Number of Particles |
|---|---|---|---|
| H₂ (gas) | 2 g | 22.4 L | 6.022 × 10²³ molecules |
| O₂ (gas) | 32 g | 22.4 L | 6.022 × 10²³ molecules |
| CO₂ (gas) | 44 g | 22.4 L | 6.022 × 10²³ molecules |
| Liquid water, H₂O(l) | 18 g | ~18 mL (NOT 22.4 L) | 6.022 × 10²³ molecules |
| Solid carbon, C(s) | 12 g | ~5 mL (NOT 22.4 L) | 6.022 × 10²³ atoms |

Look at the first three rows (all gases): **their masses are completely different**, yet **their volumes at STP and their molecule counts are identical**. Why? Because of Avogadro's Law: equal volumes of gases at the same T and P contain equal numbers of molecules. By contrast, look at the liquid and solid rows: their volumes are **tiny** because their particles are packed tightly together, whereas gas molecules are spread far apart (we will revisit this in Common Pitfalls).

All three measurements connect through the **mole** at the centre of the **Mole Map**:

```
  MASS (g)                   MOLES (n)                    VOLUME (L)

  +---------+ ÷ molar mass  +---------+    × 22.4    +---------+
  :    m    : ------------> :    n    : -----------> :    V    :
  :         : <------------ :         : <----------- : gas, STP:
  +---------+ × molar mass  +---------+    ÷ 22.4    +---------+
                                :   ^
              × 6.022 × 10²³    :   : ÷ 6.022 × 10²³
                                v   :
                          +-----------------+
                          :    PARTICLES    :
                          +-----------------+
```

> **Figure 5.1** – The Mole Map. **Moles (*n*)** sit at the crossroads: on the left is mass (convert using molar mass M), on the right is gas volume (convert using 22.4 L/mol, strictly for gases at STP), and at the bottom is particle count (convert using 6.022 × 10²³). You never jump directly from mass to volume (or particles) — you always pass through moles first.

**The Golden Rule of the Mole Map:** **Moles always stand between any two outer boxes.** Need to go from mass to gas volume? Go mass → moles → volume. Need to go from particles to mass? Go particles → moles → mass.

---

## Part B: From Mass to Volume (Using an Equation)

Let's extend our 5-step method from Topic 4 to find the volume of a gas at STP:

1. **Balance** the chemical equation.
2. Convert the **given mass to moles** (*n* = *m* ÷ M).
3. Use the equation's **coefficients** (mole ratio) to find the moles of the asked gas.
4. **Multiply those moles by 22.4 L** to get the gas volume at STP.
5. **Check:** divide the volume by 22.4 to verify moles, and verify conservation of mass.

### Example 1: Acid on Sodium Carbonate: How Much CO₂ Gas?

**Question:** When dilute HCl is added to 21.2 g of Na₂CO₃ (a classic teacher demonstration producing fizzy bubbles), what volume of CO₂ gas is released at STP? (Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂; assume sufficient HCl.)

**Solution:**
- The equation is balanced: Na 2 = 2, C 1 = 1, O 3 = 1 + 2, H 2 = 2, Cl 2 = 2 ✅.
- M(Na₂CO₃) = 2 × 23 + 12 + 3 × 16 = 106 g/mol. Moles of Na₂CO₃ = 21.2 ÷ 106 = **0.2 mol**.
- Mole ratio Na₂CO₃ : CO₂ = 1 : 1, so CO₂ formed = **0.2 mol**.
- Volume of CO₂ at STP = 0.2 × 22.4 = **4.48 L**.
- **Check (conservation of mass):** Left: Na₂CO₃ (21.2 g) + HCl (0.4 mol × 36.5 = 14.6 g) = 35.8 g. Right: NaCl (0.4 × 58.5 = 23.4 g) + H₂O (0.2 × 18 = 3.6 g) + CO₂ (0.2 × 44 = 8.8 g) = 35.8 g ✅. And 4.48 ÷ 22.4 = 0.2 mol ✅.

### Example 2: Acid on a Metal to Produce Hydrogen (Teacher Demo Only)

**Question:** 5.4 g of aluminium reacts completely with dilute H₂SO₄: 2Al + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂. What volume of H₂ gas is produced at STP, and what mass of H₂SO₄ is used? (Hydrogen is flammable: never ignite it; this is for paper calculation and teacher demonstration only.)

**Solution:**
- Atom check: Al 2 = 2; S 3 = 3; O 12 = 12; H 6 = 6 ✅.
- Al = 27 g/mol → moles of Al = 5.4 ÷ 27 = **0.2 mol**.
- Mole ratio Al : H₂ = 2 : 3 → moles of H₂ = 0.2 × (3/2) = **0.3 mol**. Volume at STP = 0.3 × 22.4 = **6.72 L**.
- Mole ratio Al : H₂SO₄ = 2 : 3 → moles of H₂SO₄ = **0.3 mol** → mass = 0.3 × 98 = **29.4 g**.
- **Check:** Left: 5.4 + 29.4 = 34.8 g. Right: Al₂(SO₄)₃ (0.1 mol × 342 = 34.2 g) + H₂ (0.3 × 2 = 0.6 g) = 34.8 g ✅.

---

## Part C: From Volume to Mass (Going in Reverse)

Sometimes a problem gives you the volume of a gas at STP and asks **what mass of reactant is needed** (or product formed). Simply walk the pathway in reverse: **volume ÷ 22.4 → moles → mole ratio → moles → mass.**

### Example 3: Heating KClO₃ to Produce Oxygen (Paper-Only)

**Question:** 2KClO₃ → 2KCl + 3O₂. To obtain 10.08 L of oxygen at STP, what mass of KClO₃ must be decomposed? (KClO₃ is a **strong oxidiser**: paper-only; students never heat KClO₃.)

**Solution:**
- Atom check: K 2 = 2; Cl 2 = 2; O 6 = 6 ✅.
- Moles of O₂ = 10.08 ÷ 22.4 = **0.45 mol**.
- Mole ratio KClO₃ : O₂ = 2 : 3 → moles of KClO₃ = 0.45 × (2/3) = **0.3 mol**.
- M(KClO₃) = 39 + 35.5 + 48 = 122.5 g/mol. Mass of KClO₃ = 0.3 × 122.5 = **36.75 g**.
- **Check:** Products: KCl (0.3 × 74.5 = 22.35 g) + O₂ (0.45 × 32 = 14.4 g) = 36.75 g ✅ (matches the mass of reactant).

---

## Part D: From Volume to Volume: No Need to Convert to Moles

When **both the given and asked substances are gases** measured at **the same temperature and pressure**, our shortcut from Topic 1 applies directly: **the coefficient ratio is the volume ratio**. Why? Because equal volumes contain equal numbers of molecules (Avogadro's Law), so volume ratio = mole ratio. Converting to moles by dividing by 22.4 and then multiplying back by 22.4 would just cancel out!

### Example 4: How Much Oxygen Does Ethene Need?

**Question:** Ethene (C₂H₄) burns according to C₂H₄ + 3O₂ → 2CO₂ + 2H₂O. For 6 L of ethene, what volume of O₂ is required, and what volume of CO₂ is formed? Assume all gases are measured at the same T and P (paper calculation).

**Solution:**
- Atom check: C 2 = 2; H 4 = 4; O 6 = 4 + 2 ✅.
- Volume ratio C₂H₄ : O₂ : CO₂ = 1 : 3 : 2.
- Volume of O₂ = 6 × 3 = **18 L**. Volume of CO₂ = 6 × 2 = **12 L**.
- If the temperature is high enough for H₂O to remain steam, 12 L of steam also forms; once cooled to room temperature, it condenses into liquid water of negligible volume.
- **Check (counting O atom-volumes):** Left O atoms: 18 × 2 = 36. Right O atoms: CO₂ (12 × 2 = 24) + steam (12 × 1 = 12) = 36 ✅.

**Important Reminder:** This direct shortcut works **only when both the given and asked substances are gases**. Whenever a solid or liquid is involved (like Mg, Na₂CO₃, or liquid water), you must go through moles (Parts B and C).

---

## Part E: How Much Air Does a Stove Burner Need?

Now let's answer Nora's kitchen question! Cooking gas (LPG) consists mainly of propane and butane. Let's do a paper calculation for **propane (C₃H₈)**:

C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Atom check: C 3 = 3; H 8 = 8; O 10 = 6 + 4 ✅.

The gas volume ratio C₃H₈ : O₂ : CO₂ : H₂O (steam) is **1 : 5 : 3 : 4**.

```
  1 unit box = 2.1 L

  C₃H₈          [ ]
  O₂ needed     [ ][ ][ ][ ][ ]
  CO₂ formed    [ ][ ][ ]
  H₂O (steam)   [ ][ ][ ][ ]
```

> **Figure 5.2** – Burning 2.1 L of propane (on paper): it requires 10.5 L of oxygen (5 boxes) and produces 6.3 L of CO₂ (3 boxes) and 8.4 L of steam (4 boxes). The box counts match the 1 : 5 : 3 : 4 coefficients.

However, a stove burner draws oxygen from the **surrounding air**, and air is only about **21% oxygen** by volume:

```
  100 L of air divided into 100 unit squares (1 square = 1 L):

    N N N N N N N N N N
    N N N N N N N N N N
    N N N N N N N N N N
    N N N N N N N N N N
    N N N N N N N N N N
    N N N N N N N N N N
    N N N N N N N N N N
    N N N N N N N N O O
    O O O O O O O O O O
    O O O O O O O O O A

    N = 78 (nitrogen), O = 21 (oxygen), A = 1 (argon and trace gases)
```

> **Figure 5.3** – A visual grid of 100 L of air: roughly 78 L of nitrogen (N), 21 L of oxygen (O), and 1 L of argon and other gases (A). Therefore, **Volume of air needed = Volume of O₂ needed ÷ 0.21**.

### Example 5: Volume of Air Needed to Burn 2.1 L of Propane

**Question:** What volume of air is required to burn 2.1 L of propane completely? (Assume air is 21% O₂ by volume, all measured at the same T and P.)

**Solution:**
- Volume of pure O₂ needed = 2.1 × 5 = **10.5 L** (from the 1 : 5 volume ratio).
- Volume of air needed = 10.5 ÷ 0.21 = **50 L**.
- **Check:** 21% of 50 L of air = 50 × 0.21 = 10.5 L of O₂ ✅.
- Look at what this means: **1 L of propane needs nearly 24 L of air** (50 ÷ 2.1 = 23.8)! Every litre of fuel gas requires about **24 times** its own volume in fresh air.

**Why Kitchen Ventilation Matters (for understanding):** If a kitchen is tightly closed and lacks fresh air, incomplete combustion occurs: the burner flame turns yellow, black soot deposits on pots, and **carbon monoxide (CO)** — a **colourless, odourless, poisonous gas** — can form. That is why good kitchen ventilation (an open window or exhaust hood) is essential.

---

## Part F: Connecting Volume and Particle Count

To connect gas volume and number of particles, follow the bottom arrow of the Mole Map: **Volume → Moles → Particles**.

### Example 6: How Many Particles in 1.12 L of Methane?

**Question:** A sample of methane (CH₄) occupies 1.12 L at STP. How many CH₄ molecules are in the sample, and how many total atoms?

**Solution:**
- Moles of CH₄ = 1.12 ÷ 22.4 = **0.05 mol**.
- Number of molecules = 0.05 × 6.022 × 10²³ = **3.011 × 10²² molecules**.
- Each CH₄ molecule contains 1 C + 4 H = **5 atoms**. Total atoms = 3.011 × 10²² × 5 = **1.5055 × 10²³** (or **1.506 × 10²³ atoms**).
- **Check:** 0.05 mol × 5 = 0.25 mol of atoms; 0.25 × 6.022 × 10²³ = 1.5055 × 10²³ ✅.

---

## Part G: Two-Step Problems: Using a Gas from One Reaction in Another

### Example 7: Oxygen from H₂O₂ Used to Burn Magnesium

**Question:** The oxygen gas released by decomposing 5.1 g of H₂O₂ (2H₂O₂ → 2H₂O + O₂) is used completely to burn magnesium ribbon (2Mg + O₂ → 2MgO). Find the volume of oxygen at STP, the mass of magnesium burned, and the mass of MgO formed. (Paper-only: magnesium burns with a blinding white flame, and concentrated H₂O₂ is corrosive.)

**Solution:**
- Atom check: First equation: H 4 = 4, O 4 = 2 + 2 ✅. Second equation: Mg 2 = 2, O 2 = 2 ✅.
- M(H₂O₂) = 34 g/mol → moles of H₂O₂ = 5.1 ÷ 34 = **0.15 mol**.
- Ratio H₂O₂ : O₂ = 2 : 1 → moles of O₂ = **0.075 mol**. Volume of O₂ at STP = 0.075 × 22.4 = **1.68 L**.
- In the second equation, Mg : O₂ = 2 : 1 → moles of Mg = 0.075 × 2 = **0.15 mol** → mass of Mg = 0.15 × 24 = **3.6 g**. Moles of MgO = **0.15 mol** → mass of MgO = 0.15 × 40 = **6.0 g**.
- **Check (conservation of mass):** Mg (3.6 g) + O₂ (0.075 × 32 = 2.4 g) = 6.0 g = MgO ✅.

---

## Common Pitfalls to Avoid

**Mistake 1: Using 22.4 L per mole for liquids or solids.**
Suppose a friend claims: "36 g of liquid water is 2 moles, so its volume is 2 × 22.4 = 44.8 L." Let's reality-check that! 36 g of **liquid water** has a volume of about **36 mL** (since liquid water has a density of ~1 g/mL) — which fits inside a small espresso cup and is **more than 1,200 times smaller** than 44.8 L! Why? Because in a liquid or solid, particles are packed tightly together, whereas in a gas they are spread far apart. **The 22.4 L molar volume applies strictly to gases at STP.** Even for steam, 22.4 L does not apply directly because water is not a gas at 273 K (0 °C); at 100 °C (373 K) and 1 atm, 1 mole of steam occupies 22.4 × (373 ÷ 273) ≈ **30.6 L** (by Charles's Law from Class 9). Similarly, in CaCO₃(s) → CaO(s) + CO₂(g), only **CO₂** is a gas whose volume at STP is 22.4 L/mol; CaO is a solid.

**Mistake 2: Assuming 22.4 L of a gas is 1 mole at any temperature and pressure.**
A student writes: "44.8 L of gas at 546 K and 1 atm equals 2 moles." Careful! At 273 K (STP), 1 mole occupies 22.4 L, so at **546 K** (double the Kelvin temperature at constant pressure), 1 mole expands to **44.8 L** ([gas-laws-part3.md](../../../class9/chemistry/gas-laws/gas-laws-part3.md)). Therefore, 44.8 L at 546 K is **1 mole**, not 2 moles! Even at ordinary room temperature (~300 K) and 1 atm, 1 mole of gas occupies about **24.6 L** (22.4 × 300 ÷ 273), not 22.4 L. Always check whether the problem specifies **STP** before using 22.4 L/mol (or check if it's a volume-to-volume problem at constant T and P, where 22.4 isn't needed at all).

---

## Quick Recap

- At STP, **1 mole of any gas occupies 22.4 L** (strictly for gases, and strictly at STP). The three faces of 1 mole of gas at STP: molar mass (g), molar volume (22.4 L), and Avogadro's number (6.022 × 10²³ molecules).
- **The Mole Map (Figure 5.1):** Always pass through **moles** when converting between mass, gas volume, and particle count.
- **Mass-to-volume and volume-to-mass:** Balance the equation, convert to moles, apply the coefficient mole ratio, convert using 22.4 L/mol at STP, and check mass conservation.
- **Volume-to-volume (all gases, same T and P):** The coefficient ratio is the volume ratio directly — no need to convert to moles.
- Since air is ~21% O₂ by volume: **Volume of air = Volume of O₂ ÷ 0.21**. Burning 1 L of propane requires nearly 24 L of air.
- Never apply 22.4 L/mol to liquids or solids (36 g of liquid water is ~36 mL), or at non-STP temperatures without adjusting for T and P.
- Household gas leak rule: smell gas → open windows/doors → touch no switches or flames → turn off regulator → call the gas company from outside.

---

## Practice Questions

All reactions are **for paper calculation or teacher demonstration only**; assume all gas volumes are at STP unless stated otherwise.

1. Find the volume at STP and the mass of 0.75 mol of carbon dioxide. How many molecules is that?
2. A gas jar holds 10.08 L of ethane (C₂H₆, M = 30 g per mol) at STP. Find its moles and its mass.
3. 29.4 g of sodium hydrogencarbonate (NaHCO₃, M = 84 g per mol) reacts completely with dilute HCl: NaHCO₃ + HCl → NaCl + H₂O + CO₂. Find the volume of CO₂ at STP and the mass of NaCl formed.
4. 33.6 g of iron reacts with dilute sulphuric acid: Fe + H₂SO₄ → FeSO₄ + H₂. Find the volume of hydrogen at STP and the mass of H₂SO₄ used. (Teacher demo; hydrogen is flammable.)
5. Hot copper(II) oxide is reduced by hydrogen: CuO + H₂ → Cu + H₂O. If 17.92 L of hydrogen at STP is used, find the mass of copper formed and the mass of CuO taken. (Described only.)
6. For C₅H₁₂ + 8O₂ → 5CO₂ + 6H₂O, 3 L of pentane vapour is burnt (all gases, including steam, at the same T and P). Find the volume of O₂ needed and of CO₂ formed, and the volume of air needed if air has 21% oxygen by volume.
7. Butane burns as 2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O. For 4.2 L of butane gas (paper calculation), find the volume of oxygen needed, of CO₂ formed, and of air needed (21% oxygen). Also give the volume of air needed per litre of butane.
8. A gas jar holds 89.6 L of helium at STP. Find the moles, the number of atoms, and the mass of helium in the jar.
9. 50.4 g of NaHCO₃ is heated: 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂. The CO₂ is passed into lime water: CO₂ + Ca(OH)₂ → CaCO₃ + H₂O. Find the volume of CO₂ at STP and the mass of CaCO₃ formed. (Add one safety line for a heating demo.)
10. State True or False and correct the false ones: (a) 1 mol of iron occupies 22.4 L at STP. (b) For 2H₂ + O₂ → 2H₂O (all gases, same T and P), 10 L of H₂ needs 5 L of O₂. (c) At 546 K and 1 atm, 22.4 L of a gas is 1 mol. (d) The number of molecules in 22.4 L of any gas at STP is 6.022 × 10²³. (e) 1 mol of liquid water at room temperature occupies about 18 mL.
11. Which has the most molecules: (a) 4.48 L of neon at STP, (b) 5.4 g of liquid water, (c) 6.4 g of methane (CH₄)? Give the moles of each, and say how much space (a) and (b) fill.
12. A student says: "6 L of hydrogen needs 3 L of oxygen to burn, so I need 3 L of air." Find the mistake and give the correct volume of air.

### Answers

1. Volume = 0.75 × 22.4 = **16.8 L**. M(CO₂) = 44, so mass = 0.75 × 44 = **33 g**. Molecules = 0.75 × 6.022 × 10²³ = **4.5165 × 10²³** (≈ **4.517 × 10²³**). Check: 16.8 ÷ 22.4 = 0.75 mol ✅; 33 ÷ 44 = 0.75 mol ✅.
2. Moles = 10.08 ÷ 22.4 = **0.45 mol**. Mass = 0.45 × 30 = **13.5 g**. Check: 13.5 ÷ 30 = 0.45 mol ✅.
3. Moles of NaHCO₃ = 29.4 ÷ 84 = **0.35 mol**. Ratio 1 : 1 : 1 : 1 → CO₂ = 0.35 mol = 0.35 × 22.4 = **7.84 L**. NaCl = 0.35 mol × 58.5 = **20.475 g** (≈ **20.5 g**). Check: Left: 29.4 + HCl (0.35 × 36.5 = 12.775) = 42.175 g; Right: NaCl (20.475) + H₂O (0.35 × 18 = 6.3) + CO₂ (0.35 × 44 = 15.4) = 42.175 g ✅.
4. Fe = 33.6 ÷ 56 = **0.6 mol**. Ratio Fe : H₂ = 1 : 1 → H₂ = 0.6 mol = 0.6 × 22.4 = **13.44 L**. H₂SO₄ = 0.6 mol × 98 = **58.8 g**. Check: Left: 33.6 + 58.8 = 92.4 g; Right: FeSO₄ (0.6 × 152 = 91.2) + H₂ (0.6 × 2 = 1.2) = 92.4 g ✅.
5. Moles of H₂ = 17.92 ÷ 22.4 = **0.8 mol**. Ratio H₂ : Cu : CuO = 1 : 1 : 1 → Cu = 0.8 mol × 63.5 = **50.8 g**; CuO = 0.8 mol × 79.5 = **63.6 g**. Check: 63.6 + H₂ (0.8 × 2 = 1.6) = 65.2 g; Cu (50.8) + H₂O (0.8 × 18 = 14.4) = 65.2 g ✅.
6. Volume ratio C₅H₁₂ : O₂ : CO₂ = 1 : 8 : 5. For 3 L of pentane: O₂ = 8 × 3 = **24 L**; CO₂ = 5 × 3 = **15 L**. Volume of air = 24 ÷ 0.21 = 114.3 L (≈ **114 L**). Check: 114.3 × 0.21 = 24 L ✅; O atoms: 24 × 2 = 48 = 15 × 2 (CO₂) + 18 × 1 (steam: 6 × 3 = 18 L) ✅. (Pentane is a flammable liquid: paper-only.)
7. Ratio C₄H₁₀ : O₂ : CO₂ = 2 : 13 : 8. For 4.2 L of butane, 1 part = 4.2 ÷ 2 = 2.1 L. O₂ = 13 × 2.1 = **27.3 L**; CO₂ = 8 × 2.1 = **16.8 L**. Air needed = 27.3 ÷ 0.21 = **130 L**. Air per litre of butane = 130 ÷ 4.2 ≈ **31 L of air** (more than propane because each butane molecule has more C and H atoms). Check: 130 × 0.21 = 27.3 L ✅.
8. Moles = 89.6 ÷ 22.4 = **4 mol**. Since helium is monoatomic, atoms = 4 × 6.022 × 10²³ = **2.4088 × 10²⁴** (≈ **2.409 × 10²⁴ atoms**). Mass = 4 × 4 = **16 g**. Check: 16 ÷ 4 = 4 mol, and 4 × 22.4 = 89.6 L ✅.
9. Moles of NaHCO₃ = 50.4 ÷ 84 = **0.6 mol**. Since 2NaHCO₃ : CO₂ = 2 : 1, CO₂ = **0.3 mol** = 0.3 × 22.4 = **6.72 L**. In the lime-water reaction, CO₂ : CaCO₃ = 1 : 1, so CaCO₃ = 0.3 mol × 100 = **30 g**. Check: 0.3 × 44 = 13.2 g CO₂; NaHCO₃ (50.4 g) = Na₂CO₃ (0.3 × 106 = 31.8 g) + H₂O (0.3 × 18 = 5.4 g) + CO₂ (13.2 g) = 50.4 g ✅. Safety note: never heat a sealed tube, and always remove the delivery tube from the lime water before removing the burner to prevent cold liquid from sucking back into the hot glass tube (teacher demonstration only).
10. (a) **False** ❌: iron is a solid (1 mol Fe = 56 g and occupies only ~7 mL); 22.4 L applies only to gases at STP. (b) **True** ✅: the volume ratio is 2 : 1, so 10 L of H₂ needs 5 L of O₂. (c) **False** ❌: at 546 K and 1 atm, 1 mol of gas occupies 44.8 L, so 22.4 L is only 0.5 mol. (d) **True** ✅ (Avogadro's Law). (e) **True** ✅: 18 g of liquid water occupies ~18 mL.
11. (a) 4.48 ÷ 22.4 = **0.2 mol**; (b) 5.4 ÷ 18 = **0.3 mol**; (c) 6.4 ÷ 16 = **0.4 mol**. **Methane (c)** has the most molecules (0.4 × 6.022 × 10²³ = 2.409 × 10²³). Space occupied: (a) **4.48 L**, whereas (b) liquid water occupies only **~5.4 mL** — even with fewer moles, neon gas takes up far more space because gas particles are spread wide apart. Check: 0.2 × 22.4 = 4.48 L ✅; 0.4 × 16 = 6.4 g ✅.
12. 6 L of hydrogen requires 3 L of **pure oxygen**, not 3 L of air! Since air is only about 21% oxygen by volume, the volume of air needed is 3 ÷ 0.21 = **14.3 L** (about 14 L of air). Check: 14.3 × 0.21 = 3.0 L of O₂ ✅. (Burning hydrogen is strictly for paper calculation.)

---

Nora sketched the Mole Map in her notebook and wrote a reminder underneath: "Use 22.4 L/mol only for a gas, and only at STP." Mr. Dawson tapped the laminated safety card on the wall: "Keep the math on paper, and the safety rules in the kitchen. Both will serve you well!"

**What's Next?** In Topic 6, we bring all our tools together: a 5-step Master Method, mixed stoichiometry problems connecting reactions from across Class 10 Chemistry, and a complete chapter summary.
