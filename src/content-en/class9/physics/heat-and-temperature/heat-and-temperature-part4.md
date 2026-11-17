# Chapter: Heat and Temperature (Part 4)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [heat-and-temperature-part3.md](heat-and-temperature-part3.md)** (covering specific heat capacity and $Q = m c \Delta T$). For the introduction to heat and temperature, refer to [heat-and-temperature.md](heat-and-temperature.md). For the principle of conservation of energy, refer to [work-energy-and-power-part6.md](../work-energy-and-power/work-energy-and-power-part6.md). For percentage error calculations, refer to [measurement-and-units-part4.md](../measurement-and-units/measurement-and-units-part4.md).
> **Topics covered in this file:**
> 4. Calorimetry and the Principle of Mixtures

---

# Topic 4: Calorimetry and the Principle of Mixtures

In the preceding topic, we developed the fundamental equation of heat exchange: **$Q = m c \Delta T$**. This equation enables us to compute the quantity of heat energy a body absorbs when warming up or releases when cooling down. Up to this point, we examined single, isolated objects. 

Now, consider what happens when **two bodies at different temperatures** are brought into thermal contact—such as dropping a red-hot metal sphere into cold water, or blending scalding water with cold water in a bath. How much heat does the hotter body release? How much heat does the cooler body absorb? What final equilibrium temperature do they reach together? In this topic, we will answer these questions using the **Principle of Mixtures** and learn how this principle provides an experimental method for measuring the specific heat capacity of unknown solids.

Throughout this topic, we employ standard reference values:
$$c_{\text{water}} = 4200\text{ J/(kg }^\circ\text{C)}, \quad c_{\text{aluminium}} = 900\text{ J/(kg }^\circ\text{C)}, \quad c_{\text{iron}} = 450\text{ J/(kg }^\circ\text{C)}, \quad c_{\text{copper}} = 400\text{ J/(kg }^\circ\text{C)}$$

---

## A Chilly Morning Bath

On a crisp, freezing winter morning, Dr. Higgins called out to his granddaughter, **Maya**: "Maya, come along! Today you will learn the practical physics of preparing the morning bath." Maya eagerly wrapped her cardigan tight and joined him in the washroom.

The water heater outlet was scalding hot at **$80\text{ }^\circ\text{C}$**—far too dangerous to touch directly. The cold tap water, meanwhile, was an icy **$20\text{ }^\circ\text{C}$**, enough to numb your fingertips. Dr. Higgins filled a large tub with **$10\text{ kg}$** of scalding water from the heater, and then added **twice that amount ($20\text{ kg}$)** of cold tap water. He swirled the water thoroughly with a bath ladle, dipped his hand, and declared: "A comfortable, soothing bath temperature!"

Maya looked thoughtful. "Grandfather, you tested the water with your hand. But could we predict the **exact final mixture temperature** beforehand using physics? What if we mixed different masses or different temperatures?"

Dr. Higgins smiled warmly. "We can calculate it with pinpoint precision, Maya, relying entirely on one fundamental conservation law: **the heat energy lost by the scalding water must equal the heat energy gained by the cold water**." We will calculate Maya's bath temperature in Part C.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Calorimetry** | The quantitative science and technique of measuring heat energy exchanges | Measuring heat transferred when hot metal is dropped into cold water |
| **Calorimeter** | A thermally insulated vessel engineered to measure heat transfers accurately with minimal loss to surroundings | A thin copper vessel enclosed inside an insulated wooden or plastic jacket |
| **Stirrer** | A small metallic loop or paddle used to agitate liquids in a calorimeter | Ensures uniform temperature distribution throughout the mixture |
| **Principle of mixtures** | In an isolated thermal system: $\text{Heat Lost by Hotter Body} = \text{Heat Gained by Colder Body}$ | Mixing $80\text{ }^\circ\text{C}$ and $20\text{ }^\circ\text{C}$ water in an insulated tub |
| **Thermal equilibrium** | The state where contacting bodies reach an identical common temperature, stopping net heat flow | The final uniform bathwater temperature $T$ |
| **Final temperature ($T$)** | The steady-state equilibrium temperature achieved after thorough mixing | $40\text{ }^\circ\text{C}$ in Maya's bathwater problem |
| **Thermal insulation** | Materials with very low thermal conductivity that impede heat loss to external surroundings | Polystyrene, felt, or an air gap in a calorimeter jacket |

---

## Part A: Calorimetry and the Calorimeter

**Calorimetry** is the quantitative measurement of heat energy changes associated with physical and chemical processes. The apparatus specifically designed to conduct these measurements is called a **calorimeter**.

A standard school laboratory calorimeter consists of:
1. **Inner Vessel:** A thin-walled cylindrical vessel fabricated from **copper or aluminium**. Metals are chosen because they are excellent thermal conductors with low specific heat capacities, meaning the vessel rapidly attains thermal equilibrium with the liquid inside while absorbing minimal heat itself.
2. **Outer Insulated Jacket:** A wooden, metallic, or plastic outer casing packed with thermal insulating material (such as felt, wool, or polystyrene foam), or separated by a dead air gap. This jacket prevents heat transfer via conduction, convection, and radiation to the laboratory room.
3. **Lid and Accessories:** An insulating lid fitted with two apertures—one to admit a sensitive **thermometer** and another for a metallic **stirrer**. Continuous stirring ensures the liquid reaches a uniform temperature throughout without stratification.

```
          Thermometer      Stirrer
             │               │
       ┌─────┼───────────────┼─────┐  <- Insulating lid
       │     │               │     │
     ╔═╪═════╪═══════════════╪═════╪═╗
     ║ │   ┌─┴───────────────┴─┐   │ ║
     ║ │   │  ~ ~ ~ ~ ~ ~ ~ ~  │   │ ║  <- Thermal insulation jacket
     ║ │   │  ~ Water + Sample~│   │ ║     (e.g., polystyrene / felt)
     ║ │   │  ~ ~ ~ ~ ~ ~ ~ ~  │   │ ║
     ║ │   └───────────────────┘   │ ║
     ║ │   Thin copper/Al vessel   │ ║
     ╚═╧═══════════════════════════╧═╝
```

> **Figure 4.1** – A laboratory calorimeter: thin inner copper vessel, surrounded by insulating jacket and fitted with a lid, thermometer, and stirrer to minimize external heat exchange.

**Why the elaborate insulation?**
The foundational assumption of calorimetry is that **no thermal energy leaks into or escapes from the system**. If heat dissipates to the surrounding room air, our energy balance ($\text{Heat Lost} = \text{Heat Gained}$) becomes inaccurate. The insulated jacket, polished surfaces, and tight-fitting lid minimize these parasitic losses.

*(Note for Class 9: In introductory calculations, we neglect the small heat absorbed by the calorimeter vessel and stirrer unless explicitly provided in the problem statement. The formal treatment of this factor—termed the "water equivalent" of the calorimeter—is studied in advanced physics).*

---

## Part B: The Principle of Calorimetry (Principle of Mixtures)

When two or more substances at different initial temperatures are mixed or brought into intimate thermal contact within a perfectly insulated enclosure, thermal energy transfers spontaneously from the hotter body to the colder body. Assuming no heat is lost to the external surroundings:

$$\mathbf{\text{Heat Lost by Hotter Body} = \text{Heat Gained by Colder Body}}$$

Heat transfer continues until both substances attain the same common temperature ($T$), known as the **thermal equilibrium temperature**.

**Physical Foundation:**
The Principle of Mixtures is a direct manifestation of the **Law of Conservation of Energy** (reviewed in [work-energy-and-power-part6.md](../work-energy-and-power/work-energy-and-power-part6.md)): energy cannot be created or destroyed; it can only be transferred. Here, thermal energy departing from the hotter substance must enter the cooler substance.

### Working Formula

Consider a hotter body: mass $m_1$, specific heat capacity $c_1$, and initial temperature $T_1$.
Consider a colder body: mass $m_2$, specific heat capacity $c_2$, and initial temperature $T_2$ (where $T_1 > T_2$).
Let their final equilibrium temperature be $T$.

- The hotter body cools from $T_1$ down to $T$. Its temperature drop is $(T_1 - T)$:
  $$\text{Heat Lost} = m_1 c_1 (T_1 - T)$$
- The colder body warms from $T_2$ up to $T$. Its temperature rise is $(T - T_2)$:
  $$\text{Heat Gained} = m_2 c_2 (T - T_2)$$

Equating the two by the Principle of Mixtures:

$$\mathbf{m_1 c_1 (T_1 - T) = m_2 c_2 (T - T_2)}$$

> **Practical Tip to Avoid Sign Confusion:** Express temperature differences as strictly **positive quantities** ($\text{Higher Temperature} - \text{Lower Temperature}$) on both sides of the equation:
> - For the hotter body: $(T_1 - T)$
> - For the colder body: $(T - T_2)$

### Special Case: Same Substance (Mixing Water with Water)

When water is mixed with water, the specific heat capacity is identical on both sides ($c_1 = c_2 = c_{\text{water}}$) and cancels out algebraically:

$$m_1 (T_1 - T) = m_2 (T - T_2)$$
$$m_1 T_1 - m_1 T = m_2 T - m_2 T_2$$
$$m_1 T_1 + m_2 T_2 = (m_1 + m_2) T$$

$$\mathbf{T = \frac{m_1 T_1 + m_2 T_2}{m_1 + m_2}}$$

This result is a **mass-weighted average**: the fluid with the larger mass pulls the final temperature closer to its own initial temperature.
- If the masses are **equal** ($m_1 = m_2$):
  $$T = \frac{T_1 + T_2}{2}$$
  The final temperature is the exact arithmetic mean of the two initial temperatures!

### The Final Temperature Always Lies Strictly Between Initial Temperatures

The final equilibrium temperature $T$ must always fall strictly between the two starting temperatures:
$$T_2 < T < T_1$$

The hot liquid cannot cool below the initial cold temperature, and the cold liquid cannot warm above the initial hot temperature.

```
   T₂ (20 °C)                                   T₁ (80 °C)
    ●────────────────────────────────────────────●
    Cold                                         Hot
                        ^
             Final Equilibrium Temperature T
             (Always sits strictly between T₂ and T₁)
```

> **Figure 4.2** – Equilibrium spectrum: The final temperature $T$ always lies strictly between the cold temperature $T_2$ and hot temperature $T_1$, shifting toward the system with the larger total heat capacity ($m \times c$).

### Five-Step Method for Solving Calorimetry Problems

1. **Tabulate the Data:** List mass ($m$), specific heat ($c$), and initial temperature for both components. Ensure all masses are in kilograms ($\text{kg}$).
2. **Identify Heat Flows:** Clearly establish which body loses thermal energy (hotter) and which body gains thermal energy (colder).
3. **Set Up the Conservation Equation:** Write $\text{Heat Lost} = \text{Heat Gained}$:
   $$m_1 c_1 (T_1 - T) = m_2 c_2 (T - T_2)$$
4. **Solve Algebraically:** Expand the brackets, group terms involving the unknown variable ($T$, $m$, or $c$), and solve.
5. **Sanity Check:** Verify that $T$ lies strictly between $T_2$ and $T_1$. If your answer is outside this range, check your algebraic signs.

---

## Part C: Solving Maya's Bathwater Problem

Let us calculate the exact final temperature of Maya's bathwater:
- Scalding water from heater: $m_1 = 10\text{ kg}$, $T_1 = 80\text{ }^\circ\text{C}$
- Cold water from tap: $m_2 = 20\text{ kg}$, $T_2 = 20\text{ }^\circ\text{C}$
- Both fluids are pure water, so $c_1 = c_2 = 4200\text{ J/(kg }^\circ\text{C)}$

Using our weighted average formula:
$$T = \frac{m_1 T_1 + m_2 T_2}{m_1 + m_2} = \frac{(10\text{ kg} \times 80\text{ }^\circ\text{C}) + (20\text{ kg} \times 20\text{ }^\circ\text{C})}{10\text{ kg} + 20\text{ kg}}$$
$$T = \frac{800 + 400}{30} = \frac{1200\text{ kg }^\circ\text{C}}{30\text{ kg}} = \mathbf{40\text{ }^\circ\text{C}}$$

**Verification from Energy Balance:**
- Heat lost by hot water:
  $$Q_{\text{lost}} = 10\text{ kg} \times 4200\text{ J/(kg }^\circ\text{C)} \times (80 - 40)\text{ }^\circ\text{C} = 42{,}000 \times 40 = \mathbf{1{,}680{,}000\text{ J}}$$
- Heat gained by cold water:
  $$Q_{\text{gained}} = 20\text{ kg} \times 4200\text{ J/(kg }^\circ\text{C)} \times (40 - 20)\text{ }^\circ\text{C} = 84{,}000 \times 20 = \mathbf{1{,}680{,}000\text{ J}}$$

Both quantities are identical ($1{,}680{,}000\text{ J}$), and $40\text{ }^\circ\text{C}$ sits safely between $20\text{ }^\circ\text{C}$ and $80\text{ }^\circ\text{C}$! Notice that because there is twice as much cold water as hot water ($2:1$ mass ratio), the equilibrium temperature sits twice as close to $20\text{ }^\circ\text{C}$ ($|40 - 20| = 20\text{ }^\circ\text{C}$) as it does to $80\text{ }^\circ\text{C}$ ($|80 - 40| = 40\text{ }^\circ\text{C}$).

Maya exclaimed: "That is brilliant! By doubling the cold water mass, the temperature change of the cold water is cut in half compared to the hot water!"

Dr. Higgins smiled. "Exactly. Physics allows us to control our comfort with pure mathematics."

---

## Part D: Solved Examples

**Example 1 (Equal Masses of Water: Simple Average):** $3\text{ kg}$ of water at $90\text{ }^\circ\text{C}$ is mixed with $3\text{ kg}$ of water at $30\text{ }^\circ\text{C}$. Calculate the final temperature.

Because $m_1 = m_2 = 3\text{ kg}$ and both are water:
$$T = \frac{T_1 + T_2}{2} = \frac{90\text{ }^\circ\text{C} + 30\text{ }^\circ\text{C}}{2} = \frac{120\text{ }^\circ\text{C}}{2} = \mathbf{60\text{ }^\circ\text{C}}$$

*Verification:* $\Delta T_1 = 90 - 60 = 30\text{ }^\circ\text{C}$; $\Delta T_2 = 60 - 30 = 30\text{ }^\circ\text{C}$. Both temperature changes are identical.

---

**Example 2 (Unequal Masses of Water):** $2\text{ kg}$ of water at $70\text{ }^\circ\text{C}$ is mixed with $8\text{ kg}$ of water at $20\text{ }^\circ\text{C}$. Determine the equilibrium temperature.

$$T = \frac{m_1 T_1 + m_2 T_2}{m_1 + m_2} = \frac{(2 \times 70) + (8 \times 20)}{2 + 8} = \frac{140 + 160}{10} = \frac{300}{10} = \mathbf{30\text{ }^\circ\text{C}}$$

*Verification:*
- $Q_{\text{lost}} = 2 \times 4200 \times (70 - 30) = 8400 \times 40 = 336{,}000\text{ J}$
- $Q_{\text{gained}} = 8 \times 4200 \times (30 - 20) = 33{,}600 \times 10 = 336{,}000\text{ J}$
Because the cold water has four times the mass of the hot water ($8\text{ kg}$ vs $2\text{ kg}$), its temperature change is one-fourth as much ($10\text{ }^\circ\text{C}$ vs $40\text{ }^\circ\text{C}$).

---

**Example 3 (Determining the Required Mass of Hot Water):** A homeowner requires $30\text{ kg}$ of water at $40\text{ }^\circ\text{C}$ for domestic use. Hot water is available at $80\text{ }^\circ\text{C}$ and cold tap water at $20\text{ }^\circ\text{C}$. How many kilograms of each must be blended?

Let mass of hot water be $m_1\text{ kg}$. Then mass of cold water is $m_2 = (30 - m_1)\text{ kg}$.
$$\text{Heat Lost} = \text{Heat Gained}$$
$$m_1 \times c \times (80 - 40) = (30 - m_1) \times c \times (40 - 20)$$
Canceling $c$ from both sides:
$$40 m_1 = 20(30 - m_1)$$
$$40 m_1 = 600 - 20 m_1$$
$$60 m_1 = 600 \implies \mathbf{m_1 = 10\text{ kg (hot water)}}$$
$$m_2 = 30 - 10 = \mathbf{20\text{ kg (cold water)}}$$

---

**Example 4 (Hot Iron Sphere Dropped into Water):** An iron sphere of mass $200\text{ g}$ at $150\text{ }^\circ\text{C}$ is plunged into $400\text{ g}$ of water at $20\text{ }^\circ\text{C}$. Find the final equilibrium temperature of the mixture (neglecting the calorimeter vessel). ($c_{\text{iron}} = 450\text{ J/(kg }^\circ\text{C)}$, $c_{\text{water}} = 4200\text{ J/(kg }^\circ\text{C)}$)

*Convert masses to kilograms:*
$m_{\text{iron}} = 200\text{ g} = 0.2\text{ kg}$, $m_{\text{water}} = 400\text{ g} = 0.4\text{ kg}$.

$$\text{Heat Lost by Iron} = \text{Heat Gained by Water}$$
$$m_{\text{iron}} c_{\text{iron}} (150 - T) = m_{\text{water}} c_{\text{water}} (T - 20)$$
$$0.2 \times 450 \times (150 - T) = 0.4 \times 4200 \times (T - 20)$$
$$90(150 - T) = 1680(T - 20)$$
$$13{,}500 - 90 T = 1680 T - 33{,}600$$
$$13{,}500 + 33{,}600 = 1680 T + 90 T$$
$$47{,}100 = 1770 T$$
$$T = \frac{47{,}100}{1770} \approx \mathbf{26.6\text{ }^\circ\text{C}}$$

*Insight:* Although the iron was boiling hot at $150\text{ }^\circ\text{C}$, the water temperature only rose from $20\text{ }^\circ\text{C}$ to $26.6\text{ }^\circ\text{C}$. Why? Because water's heat capacity ($0.4 \times 4200 = 1680\text{ J/}^\circ\text{C}$) is nearly 19 times greater than iron's ($0.2 \times 450 = 90\text{ J/}^\circ\text{C}$). Water dominates the thermal balance!

---

**Example 5 (Hot Copper Block in Water):** A $500\text{-g}$ copper block at $100\text{ }^\circ\text{C}$ is immersed in $1\text{ kg}$ of water at $20\text{ }^\circ\text{C}$. Determine the final mixture temperature. ($c_{\text{copper}} = 400\text{ J/(kg }^\circ\text{C)}$)

- $m_{\text{copper}} = 0.5\text{ kg}$, $m_{\text{water}} = 1.0\text{ kg}$
- $0.5 \times 400 \times (100 - T) = 1.0 \times 4200 \times (T - 20)$
- $200(100 - T) = 4200(T - 20)$
- $20{,}000 - 200 T = 4200 T - 84{,}000$
- $104{,}000 = 4400 T \implies T = \frac{104{,}000}{4400} \approx \mathbf{23.6\text{ }^\circ\text{C}}$

---

**Example 6 (Thermal Contact Between Two Metals):** A $0.5\text{-kg}$ block of aluminium ($c = 900\text{ J/(kg }^\circ\text{C)}$) at $100\text{ }^\circ\text{C}$ is placed in thermal contact with a $1.0\text{-kg}$ block of iron ($c = 450\text{ J/(kg }^\circ\text{C)}$) at $20\text{ }^\circ\text{C}$. Determine their final equilibrium temperature, assuming no external heat loss.

- $m_1 c_1 (100 - T) = m_2 c_2 (T - 20)$
- $(0.5 \times 900)(100 - T) = (1.0 \times 450)(T - 20)$
- $450(100 - T) = 450(T - 20)$

Dividing both sides by 450:
$$100 - T = T - 20 \implies 2T = 120 \implies \mathbf{T = 60\text{ }^\circ\text{C}}$$

*Remark:* Even though the masses were unequal ($0.5\text{ kg}$ vs $1.0\text{ kg}$), the final temperature is the exact arithmetic mean ($(100 + 20)/2 = 60\text{ }^\circ\text{C}$). This occurs because their total heat capacities are perfectly equal: $m_1 c_1 = 450\text{ J/}^\circ\text{C} = m_2 c_2$.

---

**Example 7 (Adding Milk to Hot Tea):** A teacup contains $150\text{ g}$ of brewed tea at $80\text{ }^\circ\text{C}$. A student pours in $50\text{ g}$ of cold milk at $10\text{ }^\circ\text{C}$. Treating both fluids as having the specific heat capacity of water, calculate the final temperature of the beverage.

Because specific heats are assumed identical, we can work directly with mass ratios in grams:
$$T = \frac{m_1 T_1 + m_2 T_2}{m_1 + m_2} = \frac{(150\text{ g} \times 80\text{ }^\circ\text{C}) + (50\text{ g} \times 10\text{ }^\circ\text{C})}{150\text{ g} + 50\text{ g}} = \frac{12{,}000 + 500}{200} = \frac{12{,}500}{200} = \mathbf{62.5\text{ }^\circ\text{C}}$$

---

**Example 8 (Catching Impossible Answers):** A student mixes $3\text{ kg}$ of water at $90\text{ }^\circ\text{C}$ with $2\text{ kg}$ of water at $40\text{ }^\circ\text{C}$. Student A calculates $T = 20\text{ }^\circ\text{C}$, while Student B calculates $T = 95\text{ }^\circ\text{C}$. How do you know instantly that both are completely incorrect without calculating? What is the correct answer?

- **Why Student A is wrong:** The cold water was initially at $40\text{ }^\circ\text{C}$. Mixing it with boiling water cannot cause it to freeze down to $20\text{ }^\circ\text{C}$! $T$ must be $> 40\text{ }^\circ\text{C}$.
- **Why Student B is wrong:** The hot water was at $90\text{ }^\circ\text{C}$. Mixing it with cooler water cannot heat it up to $95\text{ }^\circ\text{C}$! $T$ must be $< 90\text{ }^\circ\text{C}$.
- **Correct Solution:**
  $$T = \frac{(3 \times 90) + (2 \times 40)}{3 + 2} = \frac{270 + 80}{5} = \frac{350}{5} = \mathbf{70\text{ }^\circ\text{C}}$$
  $70\text{ }^\circ\text{C}$ correctly lies within the valid boundary $40\text{ }^\circ\text{C} < 70\text{ }^\circ\text{C} < 90\text{ }^\circ\text{C}$.

---

**Example 9 (Impact of Environmental Heat Loss):** In practical experiments, if $10\%$ of the heat lost by the hotter liquid is dissipated into the ambient room air, the cold water absorbs only $90\%$ of $Q_{\text{lost}}$. As a result, the measured equilibrium temperature will be slightly lower than the theoretical prediction. This highlights the indispensable necessity of thorough insulation in calorimeters.

---

## Part E: Determining Specific Heat Capacity by the Method of Mixtures

The Principle of Mixtures provides an elegant, highly accurate experimental method to determine the unknown specific heat capacity ($c_m$) of a solid material.

**Experimental Procedure:**
1. Weigh the solid metal sample accurately ($m_m$).
2. Suspend the metal by a fine thread inside a water bath and boil it until it reaches steady boiling temperature ($T_1 \approx 100\text{ }^\circ\text{C}$).
3. Weigh the calorimeter vessel containing a known mass of cold water ($m_w$), and record its initial temperature ($T_2$).
4. Rapidly transfer the boiling hot metal specimen into the calorimeter, close the insulating lid immediately, and stir the water steadily.
5. Record the highest steady temperature reached on the thermometer ($T$).

```
   Step 1:                        Step 2:                    Step 3:
   Heat solid in boiling water    Transfer rapidly to cold   Stir gently and record
   to steady T₁ ≈ 100 °C          water in calorimeter       final equilibrium T

     ┌───────────┐                 ┌───────────┐ Lid          ┌───────────┐
     │ ~ ~ ~ ~ ~ │                 │  Solid    │              │  T = ?    │
     │   Solid   │  ─────────>     │ ~ ~ ~ ~ ~ │   ─────────> │ ~ ~ ~ ~ ~ │
     └─────┬─────┘                 └───────────┘              └───────────┘
        Burner                      Water at T₂                Water + Solid
```

> **Figure 4.3** – The Method of Mixtures experimental sequence: heating the sample in boiling water, rapid transfer, and equilibrium temperature recording.

By the Principle of Mixtures:
$$m_m c_m (T_1 - T) = m_w c_w (T - T_2)$$

Rearranging for the unknown specific heat capacity $c_m$:

$$\mathbf{c_m = \frac{m_w c_w (T - T_2)}{m_m (T_1 - T)}}$$

---

### Worked Experiment (Sample Laboratory Data)

A physics student performed this experiment with an aluminium cylinder:

| Parameter | Measured Value |
|---|---|
| Mass of metal cylinder ($m_m$) | $100\text{ g} = 0.1\text{ kg}$ |
| Initial temperature of metal ($T_1$) | $100\text{ }^\circ\text{C}$ |
| Mass of water in calorimeter ($m_w$) | $200\text{ g} = 0.2\text{ kg}$ |
| Initial temperature of water ($T_2$) | $27\text{ }^\circ\text{C}$ |
| Final equilibrium temperature ($T$) | $34\text{ }^\circ\text{C}$ |

- Heat gained by water:
  $$Q_{\text{gained}} = m_w c_w (T - T_2) = (0.2\text{ kg}) \times (4200\text{ J/(kg }^\circ\text{C)}) \times (34 - 27)\text{ }^\circ\text{C} = 840 \times 7 = \mathbf{5880\text{ J}}$$
- Heat lost by aluminium:
  $$Q_{\text{lost}} = m_m c_m (T_1 - T) = (0.1\text{ kg}) \times c_m \times (100 - 34)\text{ }^\circ\text{C} = 6.6 c_m$$
- Equating $Q_{\text{lost}} = Q_{\text{gained}}$:
  $$6.6 c_m = 5880 \implies c_m = \frac{5880}{6.6} \approx \mathbf{891\text{ J/(kg }^\circ\text{C)}}$$

**Percentage Error Analysis:**
Standard literature value for aluminium is $c_{\text{standard}} = 900\text{ J/(kg }^\circ\text{C)}$.
- Absolute Error $= |900 - 891| = 9\text{ J/(kg }^\circ\text{C)}$
- Percentage Error $= \frac{\text{Absolute Error}}{\text{Standard Value}} \times 100 = \frac{9}{900} \times 100 = \mathbf{1.0\%}$

An experimental error of just $1.0\%$ demonstrates the remarkable precision of the method of mixtures when heat losses are properly minimized.

---

### Example 10: Calculating Specific Heat from Experimental Data

A $100\text{-g}$ piece of an unknown metal alloy is heated to $100\text{ }^\circ\text{C}$ and dropped into $200\text{ g}$ of water at $20\text{ }^\circ\text{C}$. The final equilibrium temperature is measured as $25\text{ }^\circ\text{C}$. Determine the specific heat capacity of the alloy.

- $m_m = 0.1\text{ kg}$, $T_1 = 100\text{ }^\circ\text{C}$
- $m_w = 0.2\text{ kg}$, $T_2 = 20\text{ }^\circ\text{C}$, $T = 25\text{ }^\circ\text{C}$
- $c_m = \frac{m_w c_w (T - T_2)}{m_m (T_1 - T)} = \frac{0.2 \times 4200 \times (25 - 20)}{0.1 \times (100 - 25)} = \frac{0.2 \times 4200 \times 5}{0.1 \times 75} = \frac{4200}{7.5} = \mathbf{560\text{ J/(kg }^\circ\text{C)}}$

---

## Common Pitfalls to Avoid

1. **Mistake 1: Scrambling algebraic signs in the temperature difference**
   *Correction:* Always write $(T_1 - T)$ for the hotter body and $(T - T_2)$ for the colder body so that both temperature differences are strictly positive numbers. Never write $(T - T_1)$ on one side and $(T - T_2)$ on the other.

2. **Mistake 2: Mixing grams and kilograms in the same calculation**
   *Correction:* In $Q = m c \Delta T$, specific heat capacity is calibrated in $\text{J/(kg }^\circ\text{C)}$. Mass must be expressed in kilograms ($\text{kg}$). 

3. **Mistake 3: Accepting an equilibrium temperature outside the initial range**
   *Correction:* The final mixture temperature $T$ must obey $T_2 < T < T_1$. Any answer outside this interval indicates an algebraic sign or arithmetic blunder.

4. **Mistake 4: Assuming the equilibrium temperature is always the simple average**
   *Correction:* $T = \frac{T_1 + T_2}{2}$ is valid *only* when equal masses of the *same* substance are mixed (or when $m_1 c_1 = m_2 c_2$). In all other cases, $T$ is a weighted average shifted toward the body with higher heat capacity.

5. **Mistake 5: Canceling specific heat capacities when substances are different**
   *Correction:* You can cancel $c$ from both sides of the equation *only* when mixing water with water. When mixing iron with water, you must retain $c_{\text{iron}} = 450$ and $c_{\text{water}} = 4200$.

6. **Mistake 6: Forgetting to stir the mixture before taking the final temperature**
   *Correction:* Without stirring, thermal stratification occurs—warm water pools at the top while cool, denser water rests at the bottom, producing an inaccurate reading.

---

## Quick Recap

- **Calorimetry** is the scientific measurement of heat exchange. A **calorimeter** consists of a thin metal inner vessel, an outer insulated jacket, an insulating lid, a stirrer, and an accurate thermometer.
- **Principle of Mixtures:** In an isolated thermal system with negligible environmental heat loss:
  $$\mathbf{\text{Heat Lost by Hotter Body} = \text{Heat Gained by Colder Body}}$$
  This is a direct application of the Law of Conservation of Energy.
- Master Equation:
  $$\mathbf{m_1 c_1 (T_1 - T) = m_2 c_2 (T - T_2)}$$
  Where both $(T_1 - T)$ and $(T - T_2)$ are written as positive differences.
- For mixing two masses of water ($c_1 = c_2$):
  $$T = \frac{m_1 T_1 + m_2 T_2}{m_1 + m_2}$$
  If $m_1 = m_2$, $T = \frac{T_1 + T_2}{2}$.
- Equilibrium rule: $T$ always lies strictly between $T_2$ and $T_1$ ($T_2 < T < T_1$).
- **Method of Mixtures:** Used to determine unknown specific heat capacity:
  $$c_m = \frac{m_w c_w (T - T_2)}{m_m (T_1 - T)}$$

---

## Practice Questions

1. A volume of $4\text{ kg}$ of water at $90\text{ }^\circ\text{C}$ is mixed with $6\text{ kg}$ of water at $20\text{ }^\circ\text{C}$. Determine the final equilibrium temperature. Verify your result by calculating the heat lost and heat gained. ($c_{\text{water}} = 4200\text{ J/(kg }^\circ\text{C)}$)

2. A mass of $2\text{ kg}$ of water at $60\text{ }^\circ\text{C}$ is mixed with $2\text{ kg}$ of water at $30\text{ }^\circ\text{C}$. Find the final temperature. Explain why it is the exact arithmetic mean of the initial temperatures.

3. How much hot water at $70\text{ }^\circ\text{C}$ must be added to $10\text{ kg}$ of cold water at $20\text{ }^\circ\text{C}$ so that the mixture reaches an equilibrium temperature of $30\text{ }^\circ\text{C}$?

4. A $0.5\text{-kg}$ aluminium block at $100\text{ }^\circ\text{C}$ is dropped into $1\text{ kg}$ of water at $20\text{ }^\circ\text{C}$. Calculate the final temperature to one decimal place (neglecting the calorimeter vessel). ($c_{\text{aluminium}} = 900\text{ J/(kg }^\circ\text{C)}$, $c_{\text{water}} = 4200\text{ J/(kg }^\circ\text{C)}$)

5. A $100\text{-g}$ metal cylinder at $100\text{ }^\circ\text{C}$ is dropped into $200\text{ g}$ of water at $20\text{ }^\circ\text{C}$. The final equilibrium temperature is $24\text{ }^\circ\text{C}$. Calculate the specific heat capacity of the metal. If the metal is iron ($c_{\text{standard}} = 450\text{ J/(kg }^\circ\text{C)}$), calculate the percentage experimental error.

6. A volume of $200\text{ g}$ of brewed tea at $70\text{ }^\circ\text{C}$ is mixed with $100\text{ g}$ of cold milk at $10\text{ }^\circ\text{C}$. Treating both fluids as having the specific heat of water, determine the final equilibrium temperature.

7. Calculate the final mixture temperature when $1\text{ kg}$ of water at $80\text{ }^\circ\text{C}$ is blended with $3\text{ kg}$ of water at $20\text{ }^\circ\text{C}$.

8. A $0.3\text{-kg}$ copper cylinder at $90\text{ }^\circ\text{C}$ is placed in direct contact with a $0.2\text{-kg}$ iron cylinder at $20\text{ }^\circ\text{C}$. Assuming zero heat loss to surroundings, determine their final common temperature. ($c_{\text{copper}} = 400\text{ J/(kg }^\circ\text{C)}$, $c_{\text{iron}} = 450\text{ J/(kg }^\circ\text{C)}$)

9. A student blends $5\text{ kg}$ of water at $50\text{ }^\circ\text{C}$ with $5\text{ kg}$ of water at $30\text{ }^\circ\text{C}$ and writes the final temperature as $80\text{ }^\circ\text{C}$. Without performing any algebra, explain why this answer is impossible. What is the correct answer?

10. State whether the following statements are True or False:
    (a) According to the Principle of Mixtures, the heat lost by the hotter body is always greater than the heat gained by the colder body.
    (b) The final equilibrium temperature of a mixture always lies strictly between the two initial temperatures.
    (c) The final temperature of any thermal mixture is always the simple arithmetic average of the two starting temperatures.
    (d) Calorimeters are fitted with an insulated jacket primarily to minimize heat exchange with the surrounding environment.

---

### Answers

1. $T = \frac{(4 \times 90) + (6 \times 20)}{4 + 6} = \frac{360 + 120}{10} = \frac{480}{10} = \mathbf{48\text{ }^\circ\text{C}}$.
   - $Q_{\text{lost}} = 4\text{ kg} \times 4200\text{ J/(kg }^\circ\text{C)} \times (90 - 48)\text{ }^\circ\text{C} = 16{,}800 \times 42 = \mathbf{705{,}600\text{ J}}$.
   - $Q_{\text{gained}} = 6\text{ kg} \times 4200\text{ J/(kg }^\circ\text{C)} \times (48 - 20)\text{ }^\circ\text{C} = 25{,}200 \times 28 = \mathbf{705{,}600\text{ J}}$.
   Both values match perfectly and $48\text{ }^\circ\text{C}$ lies between $20\text{ }^\circ\text{C}$ and $90\text{ }^\circ\text{C}$.

2. $T = \frac{60\text{ }^\circ\text{C} + 30\text{ }^\circ\text{C}}{2} = \frac{90\text{ }^\circ\text{C}}{2} = \mathbf{45\text{ }^\circ\text{C}}$.
   Because both components have identical masses ($2\text{ kg}$) and identical specific heat capacities ($4200\text{ J/(kg }^\circ\text{C)}$), their total heat capacities are equal ($m_1 c_1 = m_2 c_2$), making the equilibrium point the exact arithmetic midpoint.

3. Let mass of hot water be $m\text{ kg}$.
   $$m \times c \times (70 - 30) = 10 \times c \times (30 - 20)$$
   $$40 m = 10 \times 10 = 100 \implies m = \frac{100}{40} = \mathbf{2.5\text{ kg}}$$.

4. $0.5 \times 900 \times (100 - T) = 1 \times 4200 \times (T - 20)$
   $$450(100 - T) = 4200(T - 20)$$
   $$45{,}000 - 450 T = 4200 T - 84{,}000$$
   $$129{,}000 = 4650 T \implies T = \frac{129{,}000}{4650} \approx \mathbf{27.7\text{ }^\circ\text{C}}$$.

5. $m_m = 0.1\text{ kg}$, $m_w = 0.2\text{ kg}$.
   $$c_m = \frac{0.2 \times 4200 \times (24 - 20)}{0.1 \times (100 - 24)} = \frac{3360}{7.6} \approx \mathbf{442.1\text{ J/(kg }^\circ\text{C)}}$$.
   Absolute Error $= |450 - 442.1| = 7.9\text{ J/(kg }^\circ\text{C)}$.
   Percentage Error $= \frac{7.9}{450} \times 100 \approx \mathbf{1.8\%}$.

6. $T = \frac{(200 \times 70) + (100 \times 10)}{200 + 100} = \frac{14{,}000 + 1000}{300} = \frac{15{,}000}{300} = \mathbf{50\text{ }^\circ\text{C}}$.

7. $T = \frac{(1 \times 80) + (3 \times 20)}{1 + 3} = \frac{80 + 60}{4} = \frac{140}{4} = \mathbf{35\text{ }^\circ\text{C}}$.

8. $m_1 c_1 (90 - T) = m_2 c_2 (T - 20)$
   $$(0.3 \times 400)(90 - T) = (0.2 \times 450)(T - 20)$$
   $$120(90 - T) = 90(T - 20)$$
   $$10{,}800 - 120 T = 90 T - 1800$$
   $$12{,}600 = 210 T \implies T = \frac{12{,}600}{210} = \mathbf{60\text{ }^\circ\text{C}}$$.

9. The equilibrium temperature $T$ must lie strictly between the initial temperatures ($30\text{ }^\circ\text{C} < T < 50\text{ }^\circ\text{C}$). A temperature of $80\text{ }^\circ\text{C}$ exceeds even the hottest starting component, violating energy conservation. The correct answer for equal masses is $T = \frac{50 + 30}{2} = \mathbf{40\text{ }^\circ\text{C}}$.

10. (a) **False**. By energy conservation in an isolated system, heat lost equals heat gained.
    (b) **True**. Equilibrium temperature must lie strictly between the two initial temperatures.
    (c) **False**. It is an arithmetic average only when the total heat capacities ($m \times c$) of the two components are equal.
    (d) **True**. The insulation prevents heat exchange with ambient laboratory surroundings.

---

Now you understand how thermal equilibrium governs mixed systems.

**What's Next?** Until now, every time an object absorbed or released heat energy, its temperature changed. But is that always true? What happens when ice melts into water or boiling water turns into steam? In Topic 5, we will discover the fascinating phenomenon of **Change of State and Latent Heat**—where huge amounts of heat are absorbed without any temperature change at all!
