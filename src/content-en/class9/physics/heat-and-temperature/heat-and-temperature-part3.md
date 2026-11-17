# Chapter: Heat and Temperature (Part 3)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [heat-and-temperature-part2.md](heat-and-temperature-part2.md)** (covering thermal expansion). The foundational distinction between heat and temperature—and why a small cup of hot tea has a higher temperature while a large bucket of warm water holds more thermal energy—was established in [heat-and-temperature.md](heat-and-temperature.md). For calculations involving mechanical and electrical power (watt, kilowatt), refer to [work-energy-and-power-part7.md](../work-energy-and-power/work-energy-and-power-part7.md).
> **Topics covered in this file:**
> 3. Specific Heat Capacity

---

# Topic 3: Specific Heat Capacity

In the previous topic, we explored thermal expansion: supplying heat energy increases the physical dimensions of a body. Now we confront a fundamental quantitative question: **how much heat energy is actually required to raise the temperature of a substance?** Does it take the exact same amount of thermal energy to warm $1\text{ kg}$ of water by $1\text{ }^\circ\text{C}$ as it does to warm $1\text{ kg}$ of iron by $1\text{ }^\circ\text{C}$? And what if we double the mass to $2\text{ kg}$? In this topic, we will derive the exact mathematical relationship linking heat energy, mass, temperature change, and the intrinsic thermal properties of matter.

Recall the vital insight from Topic 1: a small teacup may have a higher **temperature**, but a large bucket of warm bathwater possesses a vastly greater **quantity of thermal energy**. We are now ready to substantiate that intuition with rigorous physics. In this topic, we use the standard values:
$$c_{\text{water}} = 4200\text{ J/(kg }^\circ\text{C)}, \quad 1\text{ cal} = 4.2\text{ J}$$

---

## Two Pans in the Kitchen

In the school culinary lab, instructor **Mrs. Harrison** was preparing demonstration stations. Curious about the thermal setup, Class 9 student **Liam** walked over and asked, "Mrs. Harrison, may I observe your temperature test?"

Mrs. Harrison smiled welcomingly. "Certainly, Liam. Look at these two identical stainless steel saucepans on the stove. In Pan A, I have poured exactly $0.2\text{ kg}$ of vegetable cooking oil. In Pan B, I have poured exactly $0.2\text{ kg}$ of water. Both pans rest on identical gas burners set to the exact same flame height, and we will heat them for the exact same duration."

After two minutes, Mrs. Harrison turned off the burners and inserted digital laboratory thermometers into both liquids. **The cooking oil had shot up to a blistering $62\text{ }^\circ\text{C}$, while the water had only reached a mild $40\text{ }^\circ\text{C}$!**

Liam was thoroughly bewildered. "Mrs. Harrison, the burners were identical, the heating time was identical, and the masses of liquid were identical. Why did the oil get so much hotter than the water? Did the burner somehow transfer more heat energy into the oil?"

"Not at all," Mrs. Harrison explained. "Both pans absorbed virtually identical quantities of heat energy from their respective burners. The difference lies not in the flames, but in the **intrinsic thermal nature of the materials themselves**. Water is far more 'reluctant' to change its temperature than oil." We will calculate the exact numbers behind Liam's kitchen puzzle in Part D.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Heat capacity (thermal capacity)** | The amount of heat energy required to raise the temperature of an entire body by $1\text{ }^\circ\text{C}$ (or $1\text{ K}$). Unit: $\text{J/}^\circ\text{C}$ | A $10\text{-kg}$ bucket of water has a heat capacity of $42{,}000\text{ J/}^\circ\text{C}$ |
| **Specific heat capacity ($c$)** | The amount of heat energy required to raise the temperature of unit mass ($1\text{ kg}$) of a substance by $1\text{ }^\circ\text{C}$ (or $1\text{ K}$). Unit: $\text{J/(kg }^\circ\text{C)}$ | For water, $c = 4200\text{ J/(kg }^\circ\text{C)}$ |
| **$\Delta T$ (Temperature change)** | The difference between final and initial temperatures: $\Delta T = T_{\text{final}} - T_{\text{initial}}$ | Warming from $20\text{ }^\circ\text{C}$ to $70\text{ }^\circ\text{C}$ gives $\Delta T = 50\text{ }^\circ\text{C}$ |
| **$Q$ (Quantity of heat)** | The total thermal energy absorbed or released by a body (measured in joules, $\text{J}$) | Supplying $420{,}000\text{ J}$ of heat to water |
| **Calorie (cal)** | An older thermal unit: heat required to raise $1\text{ g}$ of water by $1\text{ }^\circ\text{C}$. $1\text{ cal} \approx 4.2\text{ J}$ | $1\text{ kcal} = 1000\text{ cal} = 4200\text{ J}$ |
| **Coolant** | A circulating fluid with high specific heat capacity used to absorb excess heat and prevent machinery from overheating | Water circulating through automobile radiators |

---

## Part A: What Are Heat Capacity and Specific Heat Capacity?

### Heat Capacity: For an Entire Body

The **heat capacity** (or **thermal capacity**) of a body is defined as the quantity of heat energy required to raise the temperature of the entire body by $1\text{ }^\circ\text{C}$ (or $1\text{ K}$).

$$\text{SI Unit of Heat Capacity} = \text{joule per degree Celsius } (\text{J/}^\circ\text{C}) \quad \text{or} \quad \text{joules per kelvin } (\text{J/K})$$

Heat capacity depends on two distinct factors:
1. **The mass of the body:** Heating $10\text{ kg}$ of water by $1\text{ }^\circ\text{C}$ requires ten times more energy than heating $1\text{ kg}$ of water by $1\text{ }^\circ\text{C}$.
2. **The material composition:** A $1\text{-kg}$ block of iron requires far less heat to warm by $1\text{ }^\circ\text{C}$ than a $1\text{-kg}$ pool of water.

Because heat capacity varies whenever the mass of the object changes, it is an **extensive property**. To compare the inherent thermal qualities of different materials scientifically, we need a property that is independent of mass: the **specific heat capacity**.

### Specific Heat Capacity ($c$): Per Unit Mass ($1\text{ kg}$)

> The **specific heat capacity ($c$)** of a substance is defined as the quantity of heat energy required to raise the temperature of unit mass ($1\text{ kg}$) of that substance by $1\text{ }^\circ\text{C}$ (or $1\text{ K}$).

- **SI Unit:** $\mathbf{\text{J/(kg }^\circ\text{C)}}$ or $\mathbf{\text{J kg}^{-1}\text{ K}^{-1}}$. (Because a temperature increment of $1\text{ }^\circ\text{C}$ is identical in size to an increment of $1\text{ K}$, $\text{J/(kg }^\circ\text{C)}$ and $\text{J/(kg K)}$ represent the exact same physical unit.)
- **CGS / Calorie Unit:** $\text{cal/(g }^\circ\text{C)}$. For pure water, $c = 1\text{ cal/(g }^\circ\text{C)}$.
  Converting to SI units:
  $$1\text{ cal/(g }^\circ\text{C)} = \frac{4.2\text{ J}}{0.001\text{ kg} \times 1\text{ }^\circ\text{C}} = \mathbf{4200\text{ J/(kg }^\circ\text{C)}}$$

**Physical Interpretation:**
- For water, $c = 4200\text{ J/(kg }^\circ\text{C)}$ means that $4200\text{ J}$ of thermal energy must be supplied to raise the temperature of $1\text{ kg}$ of water by $1\text{ }^\circ\text{C}$.
- For iron, $c = 450\text{ J/(kg }^\circ\text{C)}$ means that only $450\text{ J}$ is needed to raise the temperature of $1\text{ kg}$ of iron by $1\text{ }^\circ\text{C}$—roughly one-tenth the thermal requirement of water!

### Relationship Between Heat Capacity and Specific Heat Capacity

If $1\text{ kg}$ of a substance requires $c$ joules of heat for a $1\text{ }^\circ\text{C}$ temperature rise, then an object of mass $m$ kilograms requires $m \times c$ joules:

$$\mathbf{\text{Heat Capacity} = m \times c}$$

Where $m$ is in $\text{kg}$ and $c$ is in $\text{J/(kg }^\circ\text{C)}$, yielding the unit $\text{kg} \times \frac{\text{J}}{\text{kg }^\circ\text{C}} = \text{J/}^\circ\text{C}$.

*Example:* A $0.5\text{-kg}$ block of iron ($c = 450\text{ J/(kg }^\circ\text{C)}$) has a heat capacity of:
$$\text{Heat Capacity} = 0.5\text{ kg} \times 450\text{ J/(kg }^\circ\text{C)} = \mathbf{225\text{ J/}^\circ\text{C}}$$
This means raising the temperature of this specific piece of iron by $1\text{ }^\circ\text{C}$ requires $225\text{ J}$.

### Key Differences at a Glance

| Feature | Specific Heat Capacity ($c$) | Heat Capacity ($C' = m \times c$) |
|---|---|---|
| **Scope** | Defined for unit mass ($1\text{ kg}$) of substance | Defined for the entire body as a whole |
| **SI Unit** | $\text{J/(kg }^\circ\text{C)}$ or $\text{J kg}^{-1}\text{ K}^{-1}$ | $\text{J/}^\circ\text{C}$ or $\text{J/K}$ |
| **Mass Dependence** | Independent of mass (characteristic material constant) | Directly proportional to the mass of the body |
| **Example** | Iron: $c = 450\text{ J/(kg }^\circ\text{C)}$ | $0.5\text{ kg}$ of iron: $C' = 225\text{ J/}^\circ\text{C}$; $2\text{ kg}$ of iron: $C' = 900\text{ J/}^\circ\text{C}$ |

---

## Part B: The Formula $Q = m c \Delta T$ in Three Intuitive Steps

Rather than memorizing the heat formula blindly, let us construct it from first principles using water ($c = 4200\text{ J/(kg }^\circ\text{C)}$):

**Step 1: Heat is directly proportional to mass ($Q \propto m$).**
Holding the temperature rise constant at $\Delta T = 1\text{ }^\circ\text{C}$:
- Warming $1\text{ kg}$ of water by $1\text{ }^\circ\text{C}$ requires $4200\text{ J}$.
- Warming $2\text{ kg}$ of water by $1\text{ }^\circ\text{C}$ requires $2 \times 4200 = 8400\text{ J}$.
- Warming $3\text{ kg}$ of water by $1\text{ }^\circ\text{C}$ requires $3 \times 4200 = 12{,}600\text{ J}$.

**Step 2: Heat is directly proportional to temperature rise ($Q \propto \Delta T$).**
Holding the mass constant at $m = 2\text{ kg}$:
- Warming $2\text{ kg}$ of water by $1\text{ }^\circ\text{C}$ requires $8400\text{ J}$.
- Warming $2\text{ kg}$ of water by $5\text{ }^\circ\text{C}$ requires $5 \times 8400 = 42{,}000\text{ J}$.

**Step 3: Heat depends on the nature of the substance ($c$).**
For $1\text{ kg}$ warmed by $1\text{ }^\circ\text{C}$, water requires $4200\text{ J}$, iron requires $450\text{ J}$, and mercury requires only $140\text{ J}$. This material-specific scaling factor is the specific heat capacity $c$.

Combining all three proportionalities:
$$\text{Heat} = (\text{Mass}) \times (\text{Energy per kg per }^\circ\text{C}) \times (\text{Temperature Change})$$

$$\mathbf{Q = m \times c \times \Delta T}$$

Where:
- $Q$ = Heat energy absorbed or released (in joules, $\text{J}$)
- $m$ = Mass of the substance (in kilograms, $\text{kg}$)
- $c$ = Specific heat capacity (in $\text{J/(kg }^\circ\text{C)}$)
- $\Delta T$ = Temperature change in degrees Celsius ($T_{\text{final}} - T_{\text{initial}}$)

*Sign Convention:* When a body is heated, $T_{\text{final}} > T_{\text{initial}}$, so $\Delta T > 0$ and $Q$ is positive (heat absorbed). When a body cools, it releases heat ($Q_{\text{lost}}$); in Class 9, we calculate the magnitude of heat released using positive differences: $\Delta T = T_{\text{hot}} - T_{\text{cold}}$, explicitly stating whether heat is **absorbed** or **released**.

### Rearranging the Formula

Depending on the unknown quantity in a given physics problem, rearrange $Q = m c \Delta T$ as follows:

| Unknown Quantity | Formula | Operational Steps |
|---|---|---|
| **Heat Energy ($Q$)** | $Q = m \times c \times \Delta T$ | Multiply mass, specific heat, and temperature change |
| **Temperature Change ($\Delta T$)** | $\Delta T = \frac{Q}{m \times c}$ | Divide heat energy by total heat capacity |
| **Mass ($m$)** | $m = \frac{Q}{c \times \Delta T}$ | Divide heat energy by energy needed per kilogram |
| **Specific Heat Capacity ($c$)** | $c = \frac{Q}{m \times \Delta T}$ | Divide heat energy by the product of mass and temperature change |

### A Graphical Comparison: Same Heat, Different Substances

Suppose an identical quantity of heat ($Q = 8400\text{ J}$) is supplied separately to $1\text{ kg}$ of three different substances. Using $\Delta T = \frac{Q}{m \times c}$:
- Water ($c = 4200$): $\Delta T = \frac{8400}{1 \times 4200} = \mathbf{2\text{ }^\circ\text{C}}$
- Copper ($c = 400$): $\Delta T = \frac{8400}{1 \times 400} = \mathbf{21\text{ }^\circ\text{C}}$
- Mercury ($c = 140$): $\Delta T = \frac{8400}{1 \times 140} = \mathbf{60\text{ }^\circ\text{C}}$

```
 Same heat supplied (8400 J) to 1 kg of each substance: Temperature Rise (ΔT)

 Water    (c = 4200 J/kg °C) : ## 2 °C
 Copper   (c = 400 J/kg °C)  : ##################### 21 °C
 Mercury  (c = 140 J/kg °C)  : ############################################################ 60 °C
```

> **Figure 3.1** – Inverse relationship: For a given quantity of heat and mass, the temperature rise is inversely proportional to specific heat capacity ($\Delta T \propto 1/c$). Each `#` represents approximately $1\text{ }^\circ\text{C}$.

---

## Part C: Table of Specific Heat Capacities

| Substance | Specific Heat Capacity $c$ ($\text{J/(kg }^\circ\text{C)}$) |
|---|---|
| **Water** | $4200$ |
| **Ice** | $2100$ |
| **Steam** | $\approx 2000$ |
| **Aluminium** | $900$ |
| **Sand / Soil** | $\approx 830$ |
| **Cooking Oil (Vegetable)** | $\approx 2000$ |
| **Iron / Steel** | $450$ |
| **Copper** | $400$ (some references cite $390$) |
| **Lead** | $130$ |
| **Mercury** | $140$ |

Key deductions from this empirical data:
1. **Water has an exceptionally high specific heat capacity ($4200\text{ J/(kg }^\circ\text{C)}$).** It is nearly 5 times that of aluminium, 9 times that of iron, and 30 times that of mercury!
2. **Metals have very low specific heat capacities** (typically ranging between $130$ and $900\text{ J/(kg }^\circ\text{C)}$). They heat up and cool down rapidly upon absorbing or releasing modest amounts of heat.
3. **Specific heat capacity depends on the physical state of matter.** For the exact same chemical substance ($\text{H}_2\text{O}$), liquid water has $c = 4200$, solid ice has $c = 2100$, and gaseous steam has $c \approx 2000\text{ J/(kg }^\circ\text{C)}$.

---

## Part D: Solving Liam's Kitchen Puzzle

Let us apply our formulas to resolve the mystery from Mrs. Harrison's kitchen demonstration.

Mrs. Harrison placed $0.2\text{ kg}$ of water and $0.2\text{ kg}$ of cooking oil on identical burners. Suppose each pan absorbed $16{,}800\text{ J}$ of thermal energy over two minutes:

**For Water ($c = 4200\text{ J/(kg }^\circ\text{C)}$):**
$$\Delta T_{\text{water}} = \frac{Q}{m \times c} = \frac{16{,}800\text{ J}}{0.2\text{ kg} \times 4200\text{ J/(kg }^\circ\text{C)}} = \frac{16{,}800\text{ J}}{840\text{ J/}^\circ\text{C}} = \mathbf{20\text{ }^\circ\text{C}}$$

If room temperature was $20\text{ }^\circ\text{C}$, the water reached:
$$T_{\text{final}} = 20\text{ }^\circ\text{C} + 20\text{ }^\circ\text{C} = \mathbf{40\text{ }^\circ\text{C}}$$

**For Cooking Oil ($c = 2000\text{ J/(kg }^\circ\text{C)}$):**
$$\Delta T_{\text{oil}} = \frac{Q}{m \times c} = \frac{16{,}800\text{ J}}{0.2\text{ kg} \times 2000\text{ J/(kg }^\circ\text{C)}} = \frac{16{,}800\text{ J}}{400\text{ J/}^\circ\text{C}} = \mathbf{42\text{ }^\circ\text{C}}$$

The oil reached:
$$T_{\text{final}} = 20\text{ }^\circ\text{C} + 42\text{ }^\circ\text{C} = \mathbf{62\text{ }^\circ\text{C}}$$

```
   Identical flame, identical duration, identical mass (0.2 kg):
   Both absorb exactly 16,800 J of thermal energy!

      Cooking Oil                      Water
     ┌───────────┐                 ┌───────────┐
     │  62 °C    │                 │  40 °C    │
     │(ΔT = 42°C)│                 │(ΔT = 20°C)│
     └───────────┘                 └───────────┘
     ═════════════                 ═════════════
       ^  ^  ^  ^                    ^  ^  ^  ^
        Burner 1                      Burner 2
```

> **Figure 3.2** – For equal masses and identical heat input, cooking oil undergoes more than double the temperature rise of water because its specific heat capacity is less than half that of water.

Mrs. Harrison turned to Liam: "Do you see? Because water has an unusually high specific heat capacity, each kilogram requires $4200\text{ J}$ of energy just to warm by $1\text{ }^\circ\text{C}$. Cooking oil requires only $2000\text{ J}$ per kilogram for the same $1\text{ }^\circ\text{C}$ rise. Therefore, the same heat packet that warmed the water by only $20\text{ }^\circ\text{C}$ drove the oil up by $42\text{ }^\circ\text{C}$!"

Liam smiled in realization: "So water has high 'thermal inertia'—it resists changing temperature, while oil heats up eagerly!"

---

## Part E: Solved Examples

**Example 1 (Calculating Heat Required):** Calculate the quantity of heat energy needed to raise the temperature of $2\text{ kg}$ of water from $20\text{ }^\circ\text{C}$ to $70\text{ }^\circ\text{C}$. ($c_{\text{water}} = 4200\text{ J/(kg }^\circ\text{C)}$)

- $m = 2\text{ kg}$, $c = 4200\text{ J/(kg }^\circ\text{C)}$, $\Delta T = 70\text{ }^\circ\text{C} - 20\text{ }^\circ\text{C} = 50\text{ }^\circ\text{C}$
- $Q = m \times c \times \Delta T$
- $Q = (2\text{ kg}) \times (4200\text{ J/(kg }^\circ\text{C)}) \times (50\text{ }^\circ\text{C}) = 8400 \times 50 = \mathbf{420{,}000\text{ J}}$ (or $420\text{ kJ}$)

*Verification:* $\Delta T = \frac{420{,}000}{2 \times 4200} = \frac{420{,}000}{8400} = 50\text{ }^\circ\text{C}$.

---

**Example 2 (Heat Released During Cooling):** A $500\text{-g}$ block of iron cools down from $150\text{ }^\circ\text{C}$ to $50\text{ }^\circ\text{C}$. How much heat energy does it release to its surroundings? ($c_{\text{iron}} = 450\text{ J/(kg }^\circ\text{C)}$)

- Convert grams to kilograms: $m = 500\text{ g} = \frac{500}{1000}\text{ kg} = 0.5\text{ kg}$
- $\Delta T = 150\text{ }^\circ\text{C} - 50\text{ }^\circ\text{C} = 100\text{ }^\circ\text{C}$
- $Q_{\text{released}} = m \times c \times \Delta T = (0.5\text{ kg}) \times (450\text{ J/(kg }^\circ\text{C)}) \times (100\text{ }^\circ\text{C})$
- $Q_{\text{released}} = 225 \times 100 = \mathbf{22{,}500\text{ J}}$ (or $22.5\text{ kJ}$)

*Warning:* Failing to convert $500\text{ g}$ to kilograms would yield $22{,}500{,}000\text{ J}$—an error of a factor of 1000! Always ensure mass is in kilograms.

---

**Example 3 (Determining Temperature Rise):** A $1\text{-kg}$ block of aluminium absorbs $18{,}000\text{ J}$ of heat energy. By how many degrees does its temperature rise? ($c_{\text{aluminium}} = 900\text{ J/(kg }^\circ\text{C)}$)

- $\Delta T = \frac{Q}{m \times c} = \frac{18{,}000\text{ J}}{1\text{ kg} \times 900\text{ J/(kg }^\circ\text{C)}} = \frac{18{,}000}{900} = \mathbf{20\text{ }^\circ\text{C}}$

*Verification:* $Q = 1 \times 900 \times 20 = 18{,}000\text{ J}$.

---

**Example 4 (Finding Final Temperature):** A sample of $3\text{ kg}$ of water at an initial temperature of $30\text{ }^\circ\text{C}$ absorbs $252{,}000\text{ J}$ of thermal energy. Determine its final temperature.

- $\Delta T = \frac{Q}{m \times c} = \frac{252{,}000\text{ J}}{3\text{ kg} \times 4200\text{ J/(kg }^\circ\text{C)}} = \frac{252{,}000}{12{,}600} = 20\text{ }^\circ\text{C}$
- $T_{\text{final}} = T_{\text{initial}} + \Delta T = 30\text{ }^\circ\text{C} + 20\text{ }^\circ\text{C} = \mathbf{50\text{ }^\circ\text{C}}$

*Note:* $20\text{ }^\circ\text{C}$ is the temperature *change*; the final reading is $50\text{ }^\circ\text{C}$.

---

**Example 5 (Calculating Mass):** A block of iron absorbs $90{,}000\text{ J}$ of heat, causing its temperature to rise by $50\text{ }^\circ\text{C}$. Determine the mass of the iron block. ($c = 450\text{ J/(kg }^\circ\text{C)}$)

- $m = \frac{Q}{c \times \Delta T} = \frac{90{,}000\text{ J}}{450\text{ J/(kg }^\circ\text{C)} \times 50\text{ }^\circ\text{C}} = \frac{90{,}000}{22{,}500} = \mathbf{4\text{ kg}}$

*Verification:* $Q = 4 \times 450 \times 50 = 90{,}000\text{ J}$.

---

**Example 6 (Determining Unknown Specific Heat Capacity from Lab Data):** An unknown metal specimen of mass $200\text{ g}$ absorbs $3600\text{ J}$ of heat as its temperature increases by $20\text{ }^\circ\text{C}$. Calculate its specific heat capacity, and identify the metal from the reference table.

- $m = 200\text{ g} = 0.2\text{ kg}$, $\Delta T = 20\text{ }^\circ\text{C}$, $Q = 3600\text{ J}$
- $c = \frac{Q}{m \times \Delta T} = \frac{3600\text{ J}}{0.2\text{ kg} \times 20\text{ }^\circ\text{C}} = \frac{3600}{4} = \mathbf{900\text{ J/(kg }^\circ\text{C)}}$
- Consulting Part C's table, $900\text{ J/(kg }^\circ\text{C)}$ corresponds to **aluminium**.

---

**Example 7 (Direct Ratio Comparison: Water vs. Copper):** Exactly $8400\text{ J}$ of heat is supplied separately to $1\text{ kg}$ of water and $1\text{ kg}$ of copper. Compare their temperature increases.

- For Water: $\Delta T_{\text{water}} = \frac{8400\text{ J}}{1\text{ kg} \times 4200\text{ J/(kg }^\circ\text{C)}} = \mathbf{2\text{ }^\circ\text{C}}$
- For Copper: $\Delta T_{\text{copper}} = \frac{8400\text{ J}}{1\text{ kg} \times 400\text{ J/(kg }^\circ\text{C)}} = \mathbf{21\text{ }^\circ\text{C}}$
- Ratio: $\frac{\Delta T_{\text{water}}}{\Delta T_{\text{copper}}} = \frac{2}{21} \approx \frac{1}{10.5}$
  The temperature rise of copper is more than ten times greater than that of water!

---

**Example 8 (Heat Capacity of a Large Body of Water):** Calculate the heat capacity of a $10\text{-kg}$ bucket of water (neglecting the bucket's own mass).

- $\text{Heat Capacity } C' = m \times c = 10\text{ kg} \times 4200\text{ J/(kg }^\circ\text{C)} = \mathbf{42{,}000\text{ J/}^\circ\text{C}}$

*Revisiting Leo's teacup vs. bucket question from Topic 1:*
- A small teacup holding $0.2\text{ kg}$ of hot tea cooling from $80\text{ }^\circ\text{C}$ to room temperature ($20\text{ }^\circ\text{C}$) releases:
  $$Q_{\text{cup}} = 0.2\text{ kg} \times 4200\text{ J/(kg }^\circ\text{C)} \times (80 - 20)\text{ }^\circ\text{C} = 0.2 \times 4200 \times 60 = \mathbf{50{,}400\text{ J}}$$
- A $10\text{-kg}$ bucket of warm water cooling from $40\text{ }^\circ\text{C}$ to $20\text{ }^\circ\text{C}$ releases:
  $$Q_{\text{bucket}} = 10\text{ kg} \times 4200\text{ J/(kg }^\circ\text{C)} \times (40 - 20)\text{ }^\circ\text{C} = 10 \times 4200 \times 20 = \mathbf{840{,}000\text{ J}}$$
The warm bucket releases nearly **17 times more heat energy** than the boiling hot teacup!

---

**Example 9 (Cooling of a Hot Copper Cylinder):** A hot copper cylinder of mass $300\text{ g}$ cools from $100\text{ }^\circ\text{C}$ to $30\text{ }^\circ\text{C}$. Calculate the heat lost. ($c_{\text{copper}} = 400\text{ J/(kg }^\circ\text{C)}$)

- $m = 300\text{ g} = 0.3\text{ kg}$, $\Delta T = 100 - 30 = 70\text{ }^\circ\text{C}$
- $Q_{\text{lost}} = m \times c \times \Delta T = 0.3\text{ kg} \times 400\text{ J/(kg }^\circ\text{C)} \times 70\text{ }^\circ\text{C} = 120 \times 70 = \mathbf{8400\text{ J}}$

---

**Example 10 (Domestic Bathwater and Heater Power):** A domestic water tank contains $20\text{ kg}$ of water at $25\text{ }^\circ\text{C}$. An electric immersion heater warms it to $45\text{ }^\circ\text{C}$.
(a) How much heat energy must be supplied?
(b) If the immersion heater is rated at $2\text{ kW}$, how long will it take to heat the water? (Assume zero heat loss to surroundings).

- **(a)** $\Delta T = 45\text{ }^\circ\text{C} - 25\text{ }^\circ\text{C} = 20\text{ }^\circ\text{C}$
  $$Q = m \times c \times \Delta T = 20\text{ kg} \times 4200\text{ J/(kg }^\circ\text{C)} \times 20\text{ }^\circ\text{C} = 84{,}000 \times 20 = \mathbf{1{,}680{,}000\text{ J}} = \mathbf{1680\text{ kJ}}$$
- **(b)** Power $P = \frac{Q}{t} \implies t = \frac{Q}{P}$.
  $P = 2\text{ kW} = 2000\text{ W} = 2000\text{ J/s}$.
  $$t = \frac{1{,}680{,}000\text{ J}}{2000\text{ J/s}} = \mathbf{840\text{ seconds}} = \frac{840}{60}\text{ min} = \mathbf{14\text{ minutes}}$$

---

**Example 11 (Converting Between Joules and Calories):** 
(a) Convert $4200\text{ J}$ into calories.
(b) Convert $420{,}000\text{ J}$ into kilocalories ($\text{kcal}$). ($1\text{ cal} = 4.2\text{ J}$, $1\text{ kcal} = 1000\text{ cal}$)

- **(a)** $\frac{4200\text{ J}}{4.2\text{ J/cal}} = \mathbf{1000\text{ cal}}$ ($1\text{ kcal}$).
- **(b)** $\frac{420{,}000\text{ J}}{4.2\text{ J/cal}} = 100{,}000\text{ cal} = \frac{100{,}000}{1000} = \mathbf{100\text{ kcal}}$.

---

**Example 12 (Using Heat Capacity Directly):** A piece of aluminium has a heat capacity of $180\text{ J/}^\circ\text{C}$. Calculate the heat required to raise its temperature from $20\text{ }^\circ\text{C}$ to $70\text{ }^\circ\text{C}$.

- $\Delta T = 70\text{ }^\circ\text{C} - 20\text{ }^\circ\text{C} = 50\text{ }^\circ\text{C}$
- $Q = \text{Heat Capacity} \times \Delta T = 180\text{ J/}^\circ\text{C} \times 50\text{ }^\circ\text{C} = \mathbf{9000\text{ J}}$

---

## Part F: Consequences of the High Specific Heat Capacity of Water in Everyday Life

Because water has an extraordinarily large specific heat capacity ($4200\text{ J/(kg }^\circ\text{C)}$), it absorbs an immense amount of heat for a small temperature rise, and conversely releases an immense amount of heat as it cools down slightly. This property has profound physical, engineering, and environmental consequences:

**1. Water as an Industrial and Automotive Coolant**
Automobile engines generate tremendous amounts of waste heat during internal combustion. Water is pumped through jacket channels surrounding the engine block. Because of its high specific heat capacity, circulating water extracts massive quantities of heat from the hot cylinder walls without boiling.

Conversely, for thermal therapy, **hot-water bottles** are filled with warm water rather than other liquids because cooling water releases substantial heat energy slowly over many hours.

**2. Moderating Coastal Climates: Sea Breezes and Land Breezes**
Regions near oceans and large lakes experience mild, moderate climates with small diurnal temperature swings, unlike inland continental interiors.
- **During the day:** The sun beats down on both land and sea with equal solar radiation. Sand and rock have a low specific heat capacity ($\approx 830\text{ J/(kg }^\circ\text{C)}$), while water has $c = 4200\text{ J/(kg }^\circ\text{C)}$. The land heats up rapidly, causing warm air above it to rise. Cooler, denser air over the ocean flows inland to replace it, creating a refreshing daytime **sea breeze**.
- **During the night:** The land cools down rapidly by radiation, while the ocean loses temperature very slowly. The air above the ocean remains warmer than over the land, causing a reverse flow from land to sea: a **land breeze**.

**3. Extreme Temperatures in Desert Regions**
In sandy deserts, the lack of surface water combined with the low specific heat capacity of dry silica sand ($\approx 800\text{ J/(kg }^\circ\text{C)}$) results in dramatic diurnal temperature fluctuations: midday temperatures soar above $45\text{ }^\circ\text{C}$ as sand heats instantly, while nighttime temperatures plummet near freezing as sand radiates its thermal energy away just as rapidly.

**4. Biological Temperature Regulation**
The human body is approximately $60\text{–}70\%$ water by mass. This high aqueous content acts as a massive thermal buffer, preventing rapid spikes or drops in internal core body temperature when exposed to hot or cold external environments, thereby preserving essential enzymatic function.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Failing to convert grams to kilograms**
   *Correction:* In $Q = m c \Delta T$, mass must be in kilograms ($\text{kg}$). Using $m = 500\text{ g}$ directly instead of $0.5\text{ kg}$ inflates your answer by a factor of $1000$.

2. **Mistake 2: Conflating heat capacity with specific heat capacity**
   *Correction:* **Specific heat capacity ($c$)** is an intrinsic material property per kilogram ($\text{J/(kg }^\circ\text{C)}$). **Heat capacity ($C' = m \times c$)** represents the thermal requirement for the entire body ($\text{J/}^\circ\text{C}$).

3. **Mistake 3: Substituting final temperature ($T_2$) instead of temperature change ($\Delta T$)**
   *Correction:* Always calculate $\Delta T = T_{\text{final}} - T_{\text{initial}}$. Heating from $20\text{ }^\circ\text{C}$ to $70\text{ }^\circ\text{C}$ means $\Delta T = 50\text{ }^\circ\text{C}$, not $70\text{ }^\circ\text{C}$.

4. **Mistake 4: Assuming high specific heat implies rapid heating**
   *Correction:* The opposite is true! Substances with a high specific heat capacity (like water) require *more* energy per degree, meaning they heat up and cool down **slowly**. Substances with low specific heat (like copper and mercury) change temperature rapidly.

5. **Mistake 5: Believing that increasing mass changes specific heat capacity**
   *Correction:* Specific heat capacity $c$ is a characteristic material constant. A raindrop of water and an entire swimming pool both have $c = 4200\text{ J/(kg }^\circ\text{C)}$. Only the total heat capacity ($m \times c$) increases with mass.

6. **Mistake 6: Confusing joules, kilojoules, and calories**
   *Correction:* Remember the conversion factors: $1\text{ kJ} = 1000\text{ J}$, $1\text{ cal} \approx 4.2\text{ J}$, and $1\text{ kcal} = 1000\text{ cal} = 4200\text{ J}$.

---

## Quick Recap

- **Heat Capacity ($C'$):** The quantity of heat required to raise the temperature of an entire object by $1\text{ }^\circ\text{C}$ (or $1\text{ K}$). $C' = m \times c$. Unit: $\text{J/}^\circ\text{C}$ or $\text{J/K}$.
- **Specific Heat Capacity ($c$):** The heat required to raise the temperature of unit mass ($1\text{ kg}$) of a substance by $1\text{ }^\circ\text{C}$ (or $1\text{ K}$). Unit: $\text{J/(kg }^\circ\text{C)}$ or $\text{J kg}^{-1}\text{ K}^{-1}$. It is an intrinsic property independent of mass.
- Master equation:
  $$\mathbf{Q = m \times c \times \Delta T}$$
  Where $\Delta T = T_{\text{final}} - T_{\text{initial}}$.
- Standard benchmark values: Water $= 4200$, Ice $= 2100$, Steam $\approx 2000$, Aluminium $= 900$, Sand $\approx 830$, Vegetable Oil $\approx 2000$, Iron $= 450$, Copper $= 400$, Mercury $= 140\text{ J/(kg }^\circ\text{C)}$.
- A substance with a **high specific heat capacity** heats up slowly and cools down slowly; a substance with a **low specific heat capacity** heats up and cools down rapidly.
- Units conversion: $1\text{ cal} \approx 4.2\text{ J}$, $1\text{ cal/(g }^\circ\text{C)} = 4200\text{ J/(kg }^\circ\text{C)}$, $1\text{ kcal} = 4200\text{ J}$.
- Real-world applications of water's high $c$: automotive engine coolants, hot-water bottles, moderation of coastal climates (sea and land breezes), and biological thermal homeostasis.

---

## Practice Questions

1. How much heat energy is required to raise the temperature of $3\text{ kg}$ of water from $10\text{ }^\circ\text{C}$ to $40\text{ }^\circ\text{C}$? ($c_{\text{water}} = 4200\text{ J/(kg }^\circ\text{C)}$)

2. A copper cylinder of mass $2\text{ kg}$ is heated from $20\text{ }^\circ\text{C}$ to $70\text{ }^\circ\text{C}$. Calculate the thermal energy absorbed. ($c_{\text{copper}} = 400\text{ J/(kg }^\circ\text{C)}$)

3. A $400\text{-g}$ block of aluminium cools from $80\text{ }^\circ\text{C}$ to $30\text{ }^\circ\text{C}$. Determine the amount of heat energy released. ($c_{\text{aluminium}} = 900\text{ J/(kg }^\circ\text{C)}$)

4. A mass of $250\text{ g}$ of water is heated from $20\text{ }^\circ\text{C}$ to $60\text{ }^\circ\text{C}$. Calculate the heat absorbed in both joules and kilojoules.

5. A $5\text{-kg}$ iron anvil at $20\text{ }^\circ\text{C}$ absorbs $90{,}000\text{ J}$ of heat energy. What is its final temperature? ($c_{\text{iron}} = 450\text{ J/(kg }^\circ\text{C)}$)

6. A heat input of $84{,}000\text{ J}$ raises the temperature of a sample of water by $10\text{ }^\circ\text{C}$. Find the mass of the water.

7. A liquid metal sample of mass $0.5\text{ kg}$ requires $7000\text{ J}$ of heat to undergo a temperature rise of $100\text{ }^\circ\text{C}$. Calculate its specific heat capacity, and identify the substance from Part C's table.

8. (a) Calculate the heat capacity of a $3\text{-kg}$ block of copper ($c = 400\text{ J/(kg }^\circ\text{C)}$).
   (b) Using this heat capacity, find the heat needed to raise its temperature by $15\text{ }^\circ\text{C}$.

9. Equal heat quantities of $8400\text{ J}$ are supplied separately to $1\text{ kg}$ of water and $1\text{ kg}$ of ice (assuming no melting occurs). Calculate the temperature rise for each. Which warms up faster, and why? ($c_{\text{ice}} = 2100\text{ J/(kg }^\circ\text{C)}$)

10. A $1\text{-kW}$ electric kettle is used to heat $5\text{ kg}$ of water through a temperature rise of $20\text{ }^\circ\text{C}$. Calculate the heat required and the operating time taken, assuming no energy is lost to the environment.

11. (a) Convert $8400\text{ J}$ into calories and kilocalories.
    (b) Convert $5000\text{ cal}$ into joules.

12. State whether the following statements are True or False:
    (a) For equal heat supplied to equal masses, a substance with high specific heat capacity warms up faster than one with low specific heat capacity.
    (b) The specific heat capacity of $10\text{ kg}$ of water is ten times greater than that of $1\text{ kg}$ of water.
    (c) The SI unit of heat capacity is $\text{J/}^\circ\text{C}$.
    (d) Beach sand becomes hotter than adjacent seawater under midday sun because sand has a lower specific heat capacity.

13. Explain in two or three sentences why water is chosen as an automotive engine coolant and as the filling fluid in hot-water therapy bottles.

14. In Mrs. Harrison's kitchen scenario, if the $0.2\text{-kg}$ sample of oil and the $0.2\text{-kg}$ sample of water each absorbed $33{,}600\text{ J}$ of heat, what would be the temperature rise of each? ($c_{\text{oil}} = 2000\text{ J/(kg }^\circ\text{C)}$)

---

### Answers

1. $\Delta T = 40\text{ }^\circ\text{C} - 10\text{ }^\circ\text{C} = 30\text{ }^\circ\text{C}$.
   $Q = m \times c \times \Delta T = 3\text{ kg} \times 4200\text{ J/(kg }^\circ\text{C)} \times 30\text{ }^\circ\text{C} = 12{,}600 \times 30 = \mathbf{378{,}000\text{ J}}$ ($378\text{ kJ}$).

2. $\Delta T = 70\text{ }^\circ\text{C} - 20\text{ }^\circ\text{C} = 50\text{ }^\circ\text{C}$.
   $Q = 2\text{ kg} \times 400\text{ J/(kg }^\circ\text{C)} \times 50\text{ }^\circ\text{C} = 800 \times 50 = \mathbf{40{,}000\text{ J}}$ ($40\text{ kJ}$).

3. $m = 400\text{ g} = 0.4\text{ kg}$, $\Delta T = 80\text{ }^\circ\text{C} - 30\text{ }^\circ\text{C} = 50\text{ }^\circ\text{C}$.
   $Q_{\text{released}} = 0.4\text{ kg} \times 900\text{ J/(kg }^\circ\text{C)} \times 50\text{ }^\circ\text{C} = 360 \times 50 = \mathbf{18{,}000\text{ J}}$ ($18\text{ kJ}$).

4. $m = 250\text{ g} = 0.25\text{ kg}$, $\Delta T = 60\text{ }^\circ\text{C} - 20\text{ }^\circ\text{C} = 40\text{ }^\circ\text{C}$.
   $Q = 0.25\text{ kg} \times 4200\text{ J/(kg }^\circ\text{C)} \times 40\text{ }^\circ\text{C} = 1050 \times 40 = \mathbf{42{,}000\text{ J}} = \mathbf{42\text{ kJ}}$.

5. $\Delta T = \frac{Q}{m \times c} = \frac{90{,}000\text{ J}}{5\text{ kg} \times 450\text{ J/(kg }^\circ\text{C)}} = \frac{90{,}000}{2250} = 40\text{ }^\circ\text{C}$.
   $T_{\text{final}} = 20\text{ }^\circ\text{C} + 40\text{ }^\circ\text{C} = \mathbf{60\text{ }^\circ\text{C}}$.

6. $m = \frac{Q}{c \times \Delta T} = \frac{84{,}000\text{ J}}{4200\text{ J/(kg }^\circ\text{C)} \times 10\text{ }^\circ\text{C}} = \frac{84{,}000}{42{,}000} = \mathbf{2\text{ kg}}$.

7. $c = \frac{Q}{m \times \Delta T} = \frac{7000\text{ J}}{0.5\text{ kg} \times 100\text{ }^\circ\text{C}} = \frac{7000}{50} = \mathbf{140\text{ J/(kg }^\circ\text{C)}}$.
   From the table, this corresponds to **mercury**.

8. (a) $\text{Heat Capacity } C' = m \times c = 3\text{ kg} \times 400\text{ J/(kg }^\circ\text{C)} = \mathbf{1200\text{ J/}^\circ\text{C}}$.
   (b) $Q = C' \times \Delta T = 1200\text{ J/}^\circ\text{C} \times 15\text{ }^\circ\text{C} = \mathbf{18{,}000\text{ J}}$.

9. For Water: $\Delta T = \frac{8400\text{ J}}{1\text{ kg} \times 4200\text{ J/(kg }^\circ\text{C)}} = \mathbf{2\text{ }^\circ\text{C}}$.
   For Ice: $\Delta T = \frac{8400\text{ J}}{1\text{ kg} \times 2100\text{ J/(kg }^\circ\text{C)}} = \mathbf{4\text{ }^\circ\text{C}}$.
   **Ice warms up twice as fast** because its specific heat capacity is half that of liquid water, requiring only half as much heat per degree rise.

10. $Q = m \times c \times \Delta T = 5\text{ kg} \times 4200\text{ J/(kg }^\circ\text{C)} \times 20\text{ }^\circ\text{C} = 21{,}000 \times 20 = \mathbf{420{,}000\text{ J}}$.
    $P = 1\text{ kW} = 1000\text{ W} = 1000\text{ J/s}$.
    Time $t = \frac{Q}{P} = \frac{420{,}000\text{ J}}{1000\text{ J/s}} = \mathbf{420\text{ seconds}} = \mathbf{7\text{ minutes}}$.

11. (a) $\frac{8400\text{ J}}{4.2\text{ J/cal}} = \mathbf{2000\text{ cal}} = \mathbf{2\text{ kcal}}$.
    (b) $5000\text{ cal} \times 4.2\text{ J/cal} = \mathbf{21{,}000\text{ J}}$ ($21\text{ kJ}$).

12. (a) **False**. A substance with higher specific heat capacity requires more thermal energy per degree, warming up *slower*.
    (b) **False**. Specific heat capacity is an intrinsic property independent of mass ($c = 4200\text{ J/(kg }^\circ\text{C)}$ for both). Only heat capacity scales with mass.
    (c) **True**. Unit of heat capacity is $\text{J/}^\circ\text{C}$ (or $\text{J/K}$).
    (d) **True**. Sand has lower $c$ ($\approx 830\text{ J/(kg }^\circ\text{C)}$) than water ($4200\text{ J/(kg }^\circ\text{C)}$), reaching higher temperatures faster under the same sunlight.

13. Water possesses an exceptionally high specific heat capacity ($4200\text{ J/(kg }^\circ\text{C)}$). As a coolant, it absorbs massive amounts of heat from an engine with minimal temperature rise. In a hot-water bottle, it stores a vast reservoir of heat that is released gradually over several hours as it slowly cools.

14. For Oil: $\Delta T = \frac{33{,}600\text{ J}}{0.2\text{ kg} \times 2000\text{ J/(kg }^\circ\text{C)}} = \frac{33{,}600}{400} = \mathbf{84\text{ }^\circ\text{C}}$.
    For Water: $\Delta T = \frac{33{,}600\text{ J}}{0.2\text{ kg} \times 4200\text{ J/(kg }^\circ\text{C)}} = \frac{33{,}600}{840} = \mathbf{40\text{ }^\circ\text{C}}$.
    The temperature rise of oil ($84\text{ }^\circ\text{C}$) is $2.1$ times that of water ($40\text{ }^\circ\text{C}$).

---

Now you understand why cooking oil shoots up in temperature while water remains comfortably warm under the same flame: water's enormous specific heat capacity gives it remarkable thermal stability.

**What's Next?** Until now, we have examined heat added to or removed from a single isolated object. But what happens when we drop a red-hot metal sphere into cold water, or mix hot and cold water in a bath? What is the final equilibrium temperature? We will discover the answers in Topic 4: **Calorimetry and the Principle of Mixtures**!
