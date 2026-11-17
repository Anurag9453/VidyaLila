# Chapter: Electricity (Part 4)

> **Class:** 9 | **Subject:** Physics
> **Preceded by:** [electricity-part3.md](electricity-part3.md) (covered potential difference, voltage, and the voltmeter). The chapter began in [electricity.md](electricity.md). Circuit symbols and the ammeter were covered in [electricity-part2.md](electricity-part2.md). For graph concepts and slopes, see [motion-part5.md](../motion/motion-part5.md).
> **Topics covered in this file:**
> 4. Ohm's Law and Electrical Resistance

---

# Topic 4: Ohm's Law and Electrical Resistance

In the previous topic, we established that **electric potential difference (voltage) is the electrical "pressure" that propels charge** through conductors ($V = W / Q$), and that **electric current is the resulting flow of charge** ($I = Q / t$). We also saw that a voltmeter connects in parallel across a load to measure voltage, while an ammeter connects in series inline to measure current.

Now, a fundamental question arises: **if we increase the voltage driving a circuit, exactly how does the current respond?** Does doubling the voltage double the current? Does every conducting wire carry current with equal ease, or do some materials resist the flow of charges? In this topic, we investigate the relationship between voltage and current discovered by German physicist Georg Simon Ohm—**Ohm's Law**—and learn to measure the opposition that conductors present to current: **electrical resistance**.

---

## A Nichrome Wire in the Physics Lab

During a practical physics session, Dr. Ohm placed a laboratory apparatus on the demonstration bench: an adjustable DC power supply, a plug key switch, a sliding rheostat, a digital ammeter, a digital voltmeter, and a thin coil of **nichrome wire**. Leo, an inquisitive student who loved experimental physics, pulled up a stool to watch.

Dr. Ohm smiled. "Leo, today we will answer an empirical question: **when we increase the potential difference across a metal wire, by what factor does the electric current increase?**"

Together, they assembled the verification circuit (Figure 4.1): the power supply, key, rheostat, and ammeter were wired in a continuous series loop with the nichrome wire, while the voltmeter was bridged in parallel across the two ends of the nichrome wire.

```
      ┌──── key ──── rheostat ──── (A) ─────┬───────────┐
      │                                     │           │
    power                                  (V)       nichrome
   supply                                  │           wire
    ─┤├─                                    │           │
      │                                     │           │
      └─────────────────────────────────────┴───────────┘
```

> **Figure 4.1** – Experimental circuit for Ohm's Law: ammeter (A) in series with the nichrome wire; voltmeter (V) in parallel across the wire; rheostat controls total circuit resistance.

Dr. Ohm adjusted the power supply in steady steps: **$1.5\text{ V}, 3.0\text{ V}, 4.5\text{ V},\text{ and } 6.0\text{ V}$**. At each step, Leo carefully recorded the corresponding ammeter reading. Next, Dr. Ohm plotted the coordinates on graph paper. The plotted points formed a **straight line passing directly through the origin $(0, 0)$**.

Leo studied the graph thoughtfully. "The straight line proves that current is directly proportional to voltage, Dr. Ohm. But in our kinematics kinematics unit, the slope of a distance-time graph represented speed. **What does the physical slope of this line represent?**"

Dr. Ohm nodded with approval. "An insightful question, Leo. Let us formally analyze Ohm's Law, and the physical meaning of this slope will reveal itself."

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Ohm's Law** | The physical law stating that the electric current flowing through a metallic conductor is directly proportional to the potential difference across its ends, provided temperature remains constant ($V \propto I$) | Doubling the voltage across a wire doubles the current |
| **Resistance ($R$)** | The intrinsic opposition offered by a conductor to the passage of electric current ($R = V / I$) | A nichrome sample has a resistance of $5\text{ }\Omega$ |
| **Ohm ($\Omega$)** | The SI unit of electrical resistance. Defined as one volt per ampere ($1\text{ }\Omega = 1\text{ V/A}$) | A conductor drawing $1\text{ A}$ at $1\text{ V}$ has $R = 1\text{ }\Omega$ |
| **Kilo-ohm ($\text{k}\Omega$), Mega-ohm ($\text{M}\Omega$)** | Metric multiples: $1\text{ k}\Omega = 10^3\text{ }\Omega$, $1\text{ M}\Omega = 10^6\text{ }\Omega$ | A $2.2\text{ k}\Omega$ resistor has $2200\text{ }\Omega$ |
| **Rheostat** | A two-terminal or three-terminal variable resistor used to smoothly adjust current in a circuit | The sliding resistor used to regulate laboratory current |
| **Ohmic conductor** | A conductor that strictly obeys Ohm's Law; exhibits a linear $V\text{--}I$ graph passing through the origin | Metals like copper, silver, and nichrome at constant temperature |
| **Non-ohmic conductor** | A conductor whose resistance varies with voltage or current; exhibits a curved $V\text{--}I$ graph | Tungsten filament lamp, semiconductor diode |
| **Resistivity ($\rho$)** | An intrinsic material property defining the resistance of a unit cube of a material ($1\text{ m}$ length, $1\text{ m}^2$ area); unit: $\Omega\cdot\text{m}$ | Copper has $\rho = 1.7 \times 10^{-8}\text{ }\Omega\cdot\text{m}$ |
| **Conductance ($G$)** | The reciprocal of electrical resistance ($G = 1 / R$); unit: siemens ($\text{S}$) | If $R = 5\text{ }\Omega$, then $G = 0.2\text{ S}$ |

---

## Part A: Ohm's Law

### What the Experiment Reveals

Examine the experimental data recorded by Leo and Dr. Ohm:

| Potential Difference $V$ ($\text{V}$) | 1.5 | 3.0 | 4.5 | 6.0 |
|---|---|---|---|---|
| Electric Current $I$ ($\text{A}$) | 0.3 | 0.6 | 0.9 | 1.2 |

Notice the pattern:
- When voltage increases from $1.5\text{ V}$ to $3.0\text{ V}$ (**doubled**), current increases from $0.3\text{ A}$ to $0.6\text{ A}$ (**doubled**).
- When voltage increases to $4.5\text{ V}$ (**tripled**), current increases to $0.9\text{ A}$ (**tripled**).
- When voltage increases to $6.0\text{ V}$ (**quadrupled**), current increases to $1.2\text{ A}$ (**quadrupled**).

Voltage and current increase in exact, constant proportion. This fundamental relationship is known as **Ohm's Law**:

> **Ohm's Law:** At a constant temperature, the electric current ($I$) flowing through a metallic conductor is directly proportional to the potential difference ($V$) applied across its ends.  
> 
> **$V \propto I$**  or  **$V = I \times R$**

Where $R$ is a constant of proportionality characteristic of the conductor, known as its **electrical resistance**.

### What is Electrical Resistance?

Although conductors permit charges to pass through them, they naturally offer an internal **opposition or friction** to the moving electrons. The greater this internal opposition, the smaller the current that can pass through the wire for a given applied voltage. This physical opposition is called **electrical resistance ($R$)**:

> **$R = \frac{V}{I}$**  
> **$\text{Resistance (ohms)} = \frac{\text{Potential Difference (volts)}}{\text{Current (amperes)}}$**

Ohm's Law can be rearranged into three standard mathematical equations:

| Desired Quantity | Formula | Unit |
|---|---|---|
| **Potential Difference ($V$)** | $V = I \times R$ | Volts ($\text{V}$) |
| **Electric Current ($I$)** | $I = \frac{V}{R}$ | Amperes ($\text{A}$) |
| **Electrical Resistance ($R$)** | $R = \frac{V}{I}$ | Ohms ($\Omega$) |

### The Ohm ($\Omega$): Unit of Resistance

The SI unit of electrical resistance is the **ohm (symbol: $\Omega$, capital Greek letter omega)**:

> **One ohm ($1\text{ }\Omega$) is the resistance of a conductor such that a potential difference of $1\text{ volt}$ across its ends produces an electric current of $1\text{ ampere}$ through it.**  
> 
> **$1\text{ }\Omega = \frac{1\text{ V}}{1\text{ A}} = 1\text{ V/A}$**

For large resistances in electronic engineering, metric multiples are standard:
- **$1\text{ kilo-ohm (k}\Omega\text{)} = 10^3\text{ }\Omega = 1000\text{ }\Omega$**
- **$1\text{ mega-ohm (M}\Omega\text{)} = 10^6\text{ }\Omega = 1{,}000{,}000\text{ }\Omega$**

Household heating appliances (electric toasters, kettles, irons) have resistances ranging from $20\text{ }\Omega$ to $100\text{ }\Omega$, whereas transistorized electronic circuits routinely employ resistors rated in kilo-ohms and mega-ohms.

### The Water Pipe Analogy

Recall our plumbing model from Topic 3:
- Water pressure corresponds to **potential difference (voltage)**.
- Rate of water flow corresponds to **electric current**.

Now imagine inserting a section of narrow, rough, rust-encrusted pipe into the plumbing line. That narrow constriction resists the flow of water: for the same water pressure, the delivered volume per second decreases significantly. A wide, smooth pipe offers minimal resistance, permitting high flow. Similarly, a thick copper wire offers very low electrical resistance, while a long, thin nichrome wire presents substantial electrical resistance.

---

## Part B: Verification Experiment and the V-I Graph

### Conducting the Experiment

**Apparatus:** Regulated DC power supply (or battery of dry cells), key switch, rheostat, DC ammeter, DC voltmeter, sample nichrome wire mounted on an insulating board, and insulated copper connecting leads.

**Procedure:**
1. Connect the circuit as shown in Figure 4.1: ammeter in **series** with the test wire; voltmeter in **parallel** directly across the ends of the wire. Ensure proper polarities are maintained ($+$ to $+$).
2. Close the circuit key and adjust the power supply or rheostat to establish an initial voltage across the wire ($1.5\text{ V}$). Record the voltage $V$ and current $I$.
3. **Open the key immediately after taking each reading.** This prevents prolonged current from heating the wire. Ohm's Law requires **constant temperature**; excessive Joule heating alters the resistance of the metal.
4. Increase the voltage in steady increments ($3.0\text{ V}, 4.5\text{ V}, 6.0\text{ V}$), recording both meter readings each time.
5. Calculate the ratio $R = V / I$ for every individual data pair.

### Calculating R from Data

Let us calculate the ratio $R = V / I$ for Leo's experimental dataset:

| Trial | $V$ ($\text{V}$) | $I$ ($\text{A}$) | $R = V / I$ ($\Omega$) |
|---|---|---|---|
| 1 | 1.5 | 0.3 | $\frac{1.5\text{ V}}{0.3\text{ A}} = \mathbf{5.0\text{ }\Omega}$ |
| 2 | 3.0 | 0.6 | $\frac{3.0\text{ V}}{0.6\text{ A}} = \mathbf{5.0\text{ }\Omega}$ |
| 3 | 4.5 | 0.9 | $\frac{4.5\text{ V}}{0.9\text{ A}} = \mathbf{5.0\text{ }\Omega}$ |
| 4 | 6.0 | 1.2 | $\frac{6.0\text{ V}}{1.2\text{ A}} = \mathbf{5.0\text{ }\Omega}$ |

The ratio $V / I$ remains strictly constant at **$5.0\text{ }\Omega$** across all voltages. This constancy verifies Ohm's Law.

### The V-I Graph

Plotting potential difference $V$ on the vertical $y$-axis against electric current $I$ on the horizontal $x$-axis yields:

```
V (V)
6.0 :                                        O
    :                                     *
    :                                 *
4.5 :                              O
    :                           *
    :                       *
3.0 :                    O
    :                 *
    :             *
1.5 :          O
    :       *
    :   *
0.0 +---------------------------------------->  I (A)
    0         0.3       0.6       0.9       1.2
```

> **Figure 4.2** – Current-voltage characteristic of an ohmic conductor (nichrome wire). The points $(0.3, 1.5), (0.6, 3.0), (0.9, 4.5),\text{ and } (1.2, 6.0)$ form a straight line passing through $(0, 0)$.

Key physical observations from the $V\text{--}I$ graph:
- The graph is an unbroken **straight line**, confirming direct proportionality ($V \propto I$).
- The line passes through the **origin $(0, 0)$**: zero potential difference produces zero current.
- Any conductor whose $V\text{--}I$ characteristic is a straight line through the origin is classified as an **ohmic conductor**.

---

## Part C: What Does the Slope of the Graph Represent?

In kinematics, the slope of a line is defined as $\text{Slope} = \frac{\text{Vertical Rise}}{\text{Horizontal Run}}$.

For our $V\text{--}I$ graph:
- Vertical rise $= \Delta V$ (in volts)
- Horizontal run $= \Delta I$ (in amperes)

> **$\text{Slope of } V\text{--}I\text{ Graph} = \frac{\Delta V}{\Delta I} = \frac{V}{I} = R$**

**When potential difference $V$ is plotted on the $y$-axis and current $I$ on the $x$-axis, the slope of the line equals the electrical resistance ($R$) of the conductor.**

> [!IMPORTANT]
> **Beware of inverted axes:** If an experimenter plots current $I$ on the vertical $y$-axis and voltage $V$ on the horizontal $x$-axis (an $I\text{--}V$ graph), the slope becomes $\text{Slope} = \frac{\Delta I}{\Delta V} = \frac{1}{R}$. In that case, the resistance is the reciprocal of the slope ($R = 1 / \text{Slope}$). Always check the axis labels first!

---

## Part D: Resolving Leo's Question

Let us compute the slope from Figure 4.2 using two different pairs of coordinates:

**Method 1: Using the origin $(0, 0)$ and the maximum point $(1.2\text{ A}, 6.0\text{ V})$:**
$$\text{Slope} = \frac{6.0\text{ V} - 0\text{ V}}{1.2\text{ A} - 0\text{ A}} = \frac{6.0\text{ V}}{1.2\text{ A}} = \mathbf{5.0\text{ }\Omega}$$

**Method 2: Using intermediate coordinates $(0.6\text{ A}, 3.0\text{ V})$ and $(1.2\text{ A}, 6.0\text{ V})$:**
$$\text{Slope} = \frac{6.0\text{ V} - 3.0\text{ V}}{1.2\text{ A} - 0.6\text{ A}} = \frac{3.0\text{ V}}{0.6\text{ A}} = \mathbf{5.0\text{ }\Omega}$$

Both calculations yield **$5.0\text{ }\Omega$**, matching the calculated resistance from the data table exactly.

Dr. Ohm explained: "The physical slope of the line represents the **electrical resistance** of our nichrome sample. A steeper line indicates a higher resistance, because a greater voltage is required to push each unit of current. A flatter line indicates a lower resistance, allowing large currents to flow under modest voltages."

---

## Part E: Ohmic and Non-Ohmic Conductors

Ohm's Law is not a universal law of nature like Newton's Law of Universal Gravitation; rather, it is an empirical material behavior obeyed only by certain conductors under specific operating conditions.

- **Ohmic Conductors:** Materials that strictly obey Ohm's Law ($V \propto I$). Their $V\text{--}I$ graph is a straight line through the origin. Examples: all pure metals (copper, silver, gold, aluminium) and metallic alloys (nichrome, constantan, manganin) maintained at **constant temperature**.
- **Non-Ohmic Conductors:** Devices and materials that do not obey Ohm's Law. Their resistance changes dynamically with voltage or current, producing a **curved $V\text{--}I$ graph**.

### 1. Incandescent Bulb Filament
As current increases through a tungsten filament, intense Joule heating causes the filament to reach incandescent temperatures ($> 2000\text{ }^\circ\text{C}$). As metal temperature rises, atomic lattice vibrations increase, causing more frequent electron collisions and increasing the filament's resistance. Consequently, current increases more slowly than voltage. The $V\text{--}I$ curve bends upward toward the voltage axis:

```
V (V)
    :                                        *
    :                                      *
    :                                   *
    :                                *
    :                             *
    :                          *
    :                       *
    :                   *
    :               *
    :          *
    +-------------------------------------->  I (A)
```

> **Figure 4.3** – Non-linear $V\text{--}I$ characteristic of a tungsten lamp filament. The curve bends upward because resistance increases as the filament heats up.

### 2. Semiconductor Diode
A semiconductor diode is an electronic component that permits electric current to flow freely in only one direction (forward bias) while virtually blocking current in the reverse direction (reverse bias). In the forward direction, current remains near zero until a threshold voltage ($\sim 0.7\text{ V}$ for silicon) is reached, after which current surges non-linearly:

```
               I
               :                   *
               :                  *
               :                *
               :            *
               :       ***
   ************+-----------------------> V
   Reverse V   0       0.7 V
```

> **Figure 4.4** – Non-ohmic characteristic of a semiconductor diode ($I$ vs. $V$). Current is blocked in reverse bias and rises non-linearly past threshold in forward bias.

---

## Part F: The Microscopic Origin of Resistance

Why do conductors resist electric current?

In solid metals, atoms are locked in a regular crystalline lattice. When metallic bonds form, each metal atom releases one or two valence electrons into a shared "sea of free electrons." Under an applied electric potential, these free electrons experience an electrostatic force that accelerates them toward the positive terminal.

However, their path is not clear. As electrons drift through the lattice, they continuously **collide with the vibrating metallic ions (atoms)**. Each collision scatters the electron, dissipating its directional kinetic energy into thermal lattice vibrations and halting its forward progress. The electric field must accelerate the electron again, only for it to suffer another collision a fraction of a picosecond later.

```
   O       O       O       O       O       O
      e⁻ ───►  ╲       ╱╲       ╱───►
   O       O       O       O       O       O

   O = vibrating lattice atom,  e⁻ = free electron,  angled paths = collision deflections
```

> **Figure 4.5** – Microscopic origin of resistance: drifting free electrons repeatedly collide with vibrating lattice ions, retarding their net forward motion.

This continuous barrage of microscopic collisions acts as internal friction. The cumulative macroscopic result is **electrical resistance**.

---

## Part G: Factors Affecting the Resistance of a Wire

At a constant temperature, the electrical resistance of a conducting wire depends on four physical factors:

### 1. Length of the Conductor ($l$): $R \propto l$
The longer the wire, the greater the distance an electron must travel, and the more collisions it experiences with lattice ions. 

> **Resistance is directly proportional to length:**  
> **$R \propto l$**  
> (Doubling length doubles resistance; halving length halves resistance.)

### 2. Cross-Sectional Area ($A$): $R \propto \frac{1}{A}$
A thicker wire provides a wider cross-section containing a greater number of parallel conducting paths for electrons, reducing congestion and lowering opposition.

> **Resistance is inversely proportional to cross-sectional area:**  
> **$R \propto \frac{1}{A}$**  
> (Doubling the area halves the resistance; tripling the area reduces resistance to one-third.)

Because wires have circular cross-sections ($A = \pi r^2 = \pi \frac{d^2}{4}$):
- If the **radius (or diameter) is doubled**, the area increases by a factor of $2^2 = 4$.
- Therefore, doubling the radius reduces the resistance by a factor of four: **$R_{\text{new}} = \frac{R}{4}$**.

### 3. Nature of the Material
Different materials have different atomic lattice spacings and free electron densities. A copper wire carries current with far fewer collisions than an identically sized nichrome wire. Copper is an outstanding conductor; nichrome offers high resistance.

### 4. Temperature
- In **pure metals (conductors)**, higher temperature increases the amplitude of thermal vibrations of the lattice ions. This increases the collision cross-section, causing more frequent collisions. Thus, **the resistance of metals increases with increasing temperature**.
- In **semiconductors** (silicon, germanium), higher temperature frees previously bound electrons, **decreasing resistance**.
- In certain special materials cooled to near absolute zero, electrical resistance drops abruptly to zero. This state of zero resistance is called **superconductivity**.

---

## Part H: Advanced Look: R = ρ l / A (Class 10 Overlap)

> [!NOTE]
> **Class 10 Curriculum Preview:** This section provides an introductory foundation for senior physics studies.

Combining the proportionalities $R \propto l$ and $R \propto \frac{1}{A}$ gives:

> **$R = \rho \times \frac{l}{A}$**

Where:
- $R$ is electrical resistance in **ohms ($\Omega$)**
- $l$ is length of the conductor in **meters ($\text{m}$)**
- $A$ is cross-sectional area in **square meters ($\text{m}^2$)**
- **$\rho$ (Greek letter rho)** is the **resistivity** of the material, measured in **ohm-meters ($\Omega\cdot\text{m}$)**

**Physical Meaning of Resistivity:**  
Resistivity ($\rho$) is the resistance offered by a conductor of unit length ($1\text{ m}$) and unit cross-sectional area ($1\text{ m}^2$) of that material. Unlike resistance, **resistivity does not depend on the dimensions of the wire**; it depends solely on the chemical composition of the material and its temperature.

**Checking the SI Unit:**
$$\rho = \frac{R \times A}{l} = \frac{\Omega \times \text{m}^2}{\text{m}} = \mathbf{\Omega\cdot\text{m}}$$

### Table of Resistivities (Approximate, at 20 °C)

| Material | Resistivity $\rho$ ($\Omega\cdot\text{m}$) | Material Classification |
|---|---|---|
| Silver | $1.6 \times 10^{-8}$ | Best metallic conductor |
| Copper | $1.7 \times 10^{-8}$ | Excellent conductor (standard electrical cables) |
| Aluminium | $2.8 \times 10^{-8}$ | Good conductor (lightweight overhead power cables) |
| Tungsten | $5.6 \times 10^{-8}$ | High-melting conductor (lamp filaments) |
| Iron | $1.0 \times 10^{-7}$ | Moderate conductor |
| Nichrome (Ni-Cr-Fe alloy) | $1.1 \times 10^{-6}$ | High-resistance alloy (heating elements) |
| Carbon (Graphite) | $\sim 3.5 \times 10^{-5}$ | Non-metal conductor |
| Silicon (Semiconductor) | $\sim 2.3 \times 10^3$ | Semiconductor |
| Window Glass | $10^{10} - 10^{14}$ | Electrical insulator |
| Hard Rubber | $10^{13} - 10^{16}$ | Outstanding electrical insulator |

Observations:
- Metallic conductors have tiny resistivities on the order of $10^{-8}\text{ }\Omega\cdot\text{m}$.
- Insulators have enormous resistivities exceeding $10^{10}\text{ }\Omega\cdot\text{m}$—over eighteen orders of magnitude greater!
- The resistivity of **nichrome is approximately 65 times higher than that of copper**.

### Why Nichrome for Heating Elements and Copper for Cables?

- **Nichrome for Heating Elements:** Heating appliances (electric kettles, toasters, space heaters) require high resistance to convert electrical energy into intense heat ($H = I^2 R t$, Topic 6). Nichrome combines an exceptionally high resistivity with a high melting point ($1400\text{ }^\circ\text{C}$) and does not oxidize (burn) at red-hot temperatures.
- **Copper and Aluminium for Electrical Wires:** Power transmission lines and home electrical cords require minimal resistance to transmit current with minimal energy loss and minimal heating. Copper provides extremely low resistivity. Aluminium, though having slightly higher resistivity, is much lighter and cheaper, making it ideal for overhead long-distance transmission grids.

---

## Part I: Resistors, Variable Resistors, and Conductance

- **Fixed Resistors:** Circuit components manufactured to provide a precise, unchanging resistance value. Small carbon-composition resistors are marked with standardized **colored bands (color code)** to indicate their resistance value and tolerance.
- **Variable Resistors (Rheostats and Potentiometers):** Components whose resistance can be adjusted manually by sliding a contact wiper along a coiled resistive wire. Used as laboratory rheostats, electronic volume controls, and ceiling fan speed dials.
- **Conductance ($G$):** The measure of the ease with which electric charge flows through a conductor. Defined as the mathematical reciprocal of resistance:  
  $$G = \frac{1}{R}$$  
  The SI unit of conductance is the **siemens (symbol: $\text{S}$)**. If a wire has $R = 5\text{ }\Omega$, its conductance is $G = 1 / 5 = 0.2\text{ S}$.

---

## Part J: Solved Examples

**Example 1 (Direct Calculation of $R$):** A potential difference of $12\text{ V}$ applied across a heating coil produces a current of $3\text{ A}$. What is the resistance of the coil?

- $R = \frac{V}{I} = \frac{12\text{ V}}{3\text{ A}} = \mathbf{4\text{ }\Omega}$

**Check:** $V = I \times R = 3\text{ A} \times 4\text{ }\Omega = 12\text{ V}$ ✅

---

**Example 2 (Finding Current from Voltage and Resistance):** An electronic buzzer has a resistance of $5\text{ }\Omega$. What current will flow when connected across a $10\text{ V}$ battery?

- $I = \frac{V}{R} = \frac{10\text{ V}}{5\text{ }\Omega} = \mathbf{2\text{ A}}$

**Check:** $V = 2\text{ A} \times 5\text{ }\Omega = 10\text{ V}$ ✅

---

**Example 3 (Finding Potential Difference):** An electric current of $0.5\text{ A}$ passes through a $20\text{ }\Omega$ resistor. Calculate the voltage drop across the resistor.

- $V = I \times R = 0.5\text{ A} \times 20\text{ }\Omega = \mathbf{10\text{ V}}$

**Check:** $I = \frac{10\text{ V}}{20\text{ }\Omega} = 0.5\text{ A}$ ✅

---

**Example 4 (Laboratory Data Analysis):** A student tests a wire and records the following data: $V = 1.5, 3.0, 4.5, 6.0\text{ V}$ at $I = 0.3, 0.6, 0.9, 1.2\text{ A}$. Find the resistance and determine the slope of the $V\text{--}I$ graph.

- For each data point: $R = \frac{V}{I} = 5.0\text{ }\Omega$
- Slope of $V\text{--}I$ line: $\text{Slope} = \frac{\Delta V}{\Delta I} = \frac{6.0\text{ V} - 0\text{ V}}{1.2\text{ A} - 0\text{ A}} = \mathbf{5.0\text{ }\Omega}$
- *(Note: If current were plotted on the vertical axis, the slope would be $\text{Slope} = \frac{1.2\text{ A}}{6.0\text{ V}} = 0.2\text{ S}$, and $R = \frac{1}{0.2} = 5.0\text{ }\Omega$.)*

**Check:** Data ratio matches graphical slope identically ✅

---

**Example 5 (Current Drawn by a Space Heater):** An electric space heater has a nichrome heating element of resistance $46\text{ }\Omega$. How much current does it draw from a $230\text{ V}$ mains outlet?

- $I = \frac{V}{R} = \frac{230\text{ V}}{46\text{ }\Omega} = \mathbf{5\text{ A}}$

**Check:** $5\text{ A} \times 46\text{ }\Omega = 230\text{ V}$ ✅

---

**Example 6 (Effect of Doubling Wire Length):** A metal wire has a resistance of $10\text{ }\Omega$. What will be the resistance of a wire made of the same material and identical cross-section, but of twice the length?

- Because $R \propto l$, doubling length doubles resistance:
- $R_{\text{new}} = 2 \times 10\text{ }\Omega = \mathbf{20\text{ }\Omega}$

**Check:** Ratio $\frac{R}{l} = \frac{10}{l} = \frac{20}{2l}$ is constant ✅

---

**Example 7 (Effect of Doubling Wire Radius):** A cylindrical wire of length $l$ and radius $r$ has a resistance of $8\text{ }\Omega$. A second wire of the same material and length has a radius of $2r$. Determine its resistance.

- Area of first wire: $A_1 = \pi r^2$
- Area of second wire: $A_2 = \pi (2r)^2 = 4 \pi r^2 = 4 A_1$
- Since $R \propto \frac{1}{A}$, quadrupling area reduces resistance to one-fourth:
- $R_{\text{new}} = \frac{8\text{ }\Omega}{4} = \mathbf{2\text{ }\Omega}$

**Check:** Be careful not to assume area doubles when radius doubles; area scales with $r^2$ ✅

---

**Example 8 (Stretching a Wire to Double Length):** A wire of resistance $3\text{ }\Omega$ is mechanically stretched so that its length is doubled while its volume remains constant. What is its new resistance?

- Total volume of metal $V = l \times A = \text{constant}$.
- If length becomes $l' = 2l$, the cross-sectional area must halve: $A' = \frac{A}{2}$.
- New resistance: $R' = \rho \frac{l'}{A'} = \rho \frac{2l}{A/2} = 4 \left(\rho \frac{l}{A}\right) = 4 R$
- $R' = 4 \times 3\text{ }\Omega = \mathbf{12\text{ }\Omega}$

**Check:** Stretching increases length ($\times 2$) AND narrows area ($\times 2$), yielding a fourfold increase ($2 \times 2 = 4$) ✅

---

**Example 9 (Resistance of a Copper Cable):** Calculate the resistance of a $100\text{ m}$ copper cable having a cross-sectional area of $1\text{ mm}^2$. ($\rho_{\text{copper}} = 1.7 \times 10^{-8}\text{ }\Omega\cdot\text{m}$)

- Convert area to SI units: $1\text{ mm} = 10^{-3}\text{ m} \implies 1\text{ mm}^2 = (10^{-3}\text{ m})^2 = 10^{-6}\text{ m}^2$
- $R = \rho \frac{l}{A} = \frac{(1.7 \times 10^{-8}\text{ }\Omega\cdot\text{m}) \times (100\text{ m})}{10^{-6}\text{ m}^2} = \frac{1.7 \times 10^{-6}}{10^{-6}} = \mathbf{1.7\text{ }\Omega}$

**Check:** A $100\text{ m}$ long wire has only $1.7\text{ }\Omega$ of resistance, demonstrating why copper is used for electrical wiring ✅

---

**Example 10 (Calculating Resistivity from Geometry):** A metal wire $2\text{ m}$ long with a cross-sectional area of $0.5\text{ mm}^2$ has a measured resistance of $4\text{ }\Omega$. Calculate the resistivity of the material.

- Area: $A = 0.5\text{ mm}^2 = 0.5 \times 10^{-6}\text{ m}^2 = 5 \times 10^{-7}\text{ m}^2$
- $\rho = \frac{R \times A}{l} = \frac{4\text{ }\Omega \times (5 \times 10^{-7}\text{ m}^2)}{2\text{ m}} = \frac{2 \times 10^{-6}}{2} = \mathbf{1.0 \times 10^{-6}\text{ }\Omega\cdot\text{m}}$

**Check:** This value closely matches the resistivity of nichrome ($1.1 \times 10^{-6}\text{ }\Omega\cdot\text{m}$) ✅

---

**Example 11 (Designing a Heating Element):** An engineer needs to design a $55\text{ }\Omega$ heating element using nichrome wire of cross-sectional area $0.2\text{ mm}^2$. What length of wire is required? ($\rho_{\text{nichrome}} = 1.1 \times 10^{-6}\text{ }\Omega\cdot\text{m}$)

- Area: $A = 0.2\text{ mm}^2 = 0.2 \times 10^{-6}\text{ m}^2 = 2 \times 10^{-7}\text{ m}^2$
- $l = \frac{R \times A}{\rho} = \frac{55\text{ }\Omega \times (2 \times 10^{-7}\text{ m}^2)}{1.1 \times 10^{-6}\text{ }\Omega\cdot\text{m}} = \frac{1.1 \times 10^{-5}}{1.1 \times 10^{-6}} = \mathbf{10\text{ m}}$

**Check:** $R = \frac{(1.1 \times 10^{-6}) \times 10}{2 \times 10^{-7}} = 55\text{ }\Omega$ ✅

---

**Example 12 (Comparing Nichrome and Copper):** By what factor does the resistivity of nichrome exceed that of copper?

- Ratio $= \frac{\rho_{\text{nichrome}}}{\rho_{\text{copper}}} = \frac{1.1 \times 10^{-6}\text{ }\Omega\cdot\text{m}}{1.7 \times 10^{-8}\text{ }\Omega\cdot\text{m}} \approx \mathbf{65}$

**Check:** For identical dimensions, a nichrome wire exhibits roughly 65 times more electrical resistance than copper ✅

---

**Example 13 (Prefix Conversions):** Convert: (a) $2.2\text{ k}\Omega$ to $\Omega$, (b) $470{,}000\text{ }\Omega$ to $\text{M}\Omega$.

- (a) $2.2\text{ k}\Omega = 2.2 \times 1000\text{ }\Omega = \mathbf{2200\text{ }\Omega}$
- (b) $470{,}000\text{ }\Omega = \frac{470{,}000}{1{,}000{,}000}\text{ M}\Omega = \mathbf{0.47\text{ M}\Omega}$

**Check:** $2200 / 1000 = 2.2\text{ k}\Omega$; $0.47 \times 10^6 = 470{,}000\text{ }\Omega$ ✅

---

**Example 14 (Doubling Applied Voltage):** A $5\text{ }\Omega$ ohmic wire is connected across $2\text{ V}$. Find the current. If the voltage is doubled to $4\text{ V}$, what is the new current?

- At $2\text{ V}$: $I = \frac{2\text{ V}}{5\text{ }\Omega} = \mathbf{0.4\text{ A}}$
- At $4\text{ V}$: $I = \frac{4\text{ V}}{5\text{ }\Omega} = \mathbf{0.8\text{ A}}$

**Check:** Current doubled ($0.4\text{ A} \rightarrow 0.8\text{ A}$) because the wire is ohmic and temperature is assumed constant ✅

---

## Common Pitfalls to Avoid

1. **Mistake 1: Believing Ohm's Law applies universally to all electrical components.**  
   *Correction:* Ohm's Law is valid only for **ohmic conductors** maintained at **constant temperature**. Devices like incandescent bulbs, diodes, thermistors, and discharge tubes do not follow $V \propto I$.

2. **Mistake 2: Stating that resistance depends on voltage and current.**  
   *Correction:* In the equation $R = V / I$, the ratio $V / I$ is constant for an ohmic conductor. Doubling the voltage doubles the current, leaving $R$ unchanged. Resistance is an intrinsic property of the wire that depends on its **length, cross-sectional area, material, and temperature**.

3. **Mistake 3: Inverting the slope of a graph.**  
   *Correction:* On a $V\text{--}I$ graph ($V$ on the $y$-axis), $\text{Slope} = R$. On an $I\text{--}V$ graph ($I$ on the $y$-axis), $\text{Slope} = 1 / R$. Always check which quantity is on the vertical axis before calculating resistance.

4. **Mistake 4: Incorrect area unit conversion from $\text{mm}^2$ to $\text{m}^2$.**  
   *Correction:* Since $1\text{ mm} = 10^{-3}\text{ m}$, $1\text{ mm}^2 = (10^{-3}\text{ m})^2 = 10^{-6}\text{ m}^2$ (not $10^{-3}\text{ m}^2$). Omitting this square creates an error of three orders of magnitude.

5. **Mistake 5: Using wire diameter instead of radius in $A = \pi r^2$.**  
   *Correction:* If a wire has a diameter of $2\text{ mm}$, its radius is $r = 1\text{ mm} = 10^{-3}\text{ m}$. Using $2\text{ mm}$ directly as the radius overestimates the area by a factor of 4 and underestimates resistance by a factor of 4.

6. **Mistake 6: Assuming thicker wires provide greater resistance.**  
   *Correction:* The opposite is true. Since $R \propto 1 / A$, **thicker wires provide lower electrical resistance**. This is why high-current appliances (heaters, air conditioners) use thick supply cables.

7. **Mistake 7: Conflating resistance ($R$) and resistivity ($\rho$).**  
   *Correction:* Resistance ($R$, in $\Omega$) is a property of a specific object and depends on its length and thickness. Resistivity ($\rho$, in $\Omega\cdot\text{m}$) is a property of the material itself and is independent of dimensions.

---

## Quick Recap

- **Ohm's Law:** At constant temperature, the current in a metallic conductor is directly proportional to the applied potential difference: **$V \propto I \implies V = I R$**.
- **Resistance ($R$):** The opposition to the flow of electric charge: **$R = \frac{V}{I}$**. The SI unit is the **ohm ($\Omega$)** ($1\text{ }\Omega = 1\text{ V/A}$). Multiples: $1\text{ k}\Omega = 10^3\text{ }\Omega$, $1\text{ M}\Omega = 10^6\text{ }\Omega$.
- In the laboratory verification with nichrome wire, the ratio $V / I$ remained constant at $5.0\text{ }\Omega$.
- On a **$V\text{--}I$ graph** ($V$ on the $y$-axis, $I$ on the $x$-axis), the line is straight, passes through the origin, and its **$\text{Slope} = R$**.
- **Ohmic conductors** exhibit linear $V\text{--}I$ graphs (metals at constant temperature). **Non-ohmic conductors** exhibit non-linear curves (lamp filaments, diodes).
- The microscopic origin of resistance is the collision of drifting free electrons with vibrating atomic ions in the metallic lattice.
- The resistance of a conductor depends on:
  1. Length: **$R \propto l$** (longer wire = more resistance).
  2. Cross-sectional area: **$R \propto \frac{1}{A}$** (thicker wire = less resistance).
  3. Material: Conductors have low resistivity; insulators have high resistivity.
  4. Temperature: In metals, resistance increases with temperature; in semiconductors, it decreases.
- Advanced formula: **$R = \rho \frac{l}{A}$**, where $\rho$ is the material resistivity in $\Omega\cdot\text{m}$.
- Nichrome ($\rho \approx 1.1 \times 10^{-6}\text{ }\Omega\cdot\text{m}$) is ideal for heating elements; copper ($\rho \approx 1.7 \times 10^{-8}\text{ }\Omega\cdot\text{m}$) is ideal for electrical cables.
- **Conductance ($G$):** $G = 1 / R$, measured in siemens ($\text{S}$).

---

## Practice Questions

1. A resistor of $8\text{ }\Omega$ carries a steady current of $1.5\text{ A}$. Calculate the potential difference across its terminals.

2. A potential difference of $6\text{ V}$ drives a current of $0.03\text{ A}$ through an unknown conductor. Determine its resistance.

3. Calculate the electric current flowing through a $24\text{ }\Omega$ heating element connected across a $12\text{ V}$ power source.

4. In an experiment, a student records the following data: $V = 2, 4, 6, 8\text{ V}$ with corresponding currents $I = 0.5, 1.0, 1.5, 2.0\text{ A}$.  
   (a) Calculate $R$ for each measurement.  
   (b) Is the conductor ohmic? Explain.  
   (c) What is the slope of the $V\text{--}I$ graph ($V$ on the vertical axis)?  
   (d) If the graph were drawn with current $I$ on the vertical axis, what would its slope be?

5. A metallic wire has an initial resistance of $6\text{ }\Omega$. Determine its new resistance if:  
   (a) Its length is tripled while its cross-sectional area remains unchanged.  
   (b) It is cut into two equal halves (find the resistance of one half).  
   (c) It is replaced by a wire of the same material and length, but with twice the cross-sectional area.

6. A wire of resistance $18\text{ }\Omega$ is replaced by a second wire of identical material and length, but with three times the radius. Find the resistance of the new wire.

7. Calculate the electrical resistance of a copper wire $50\text{ m}$ long with a cross-sectional area of $0.5\text{ mm}^2$. ($\rho_{\text{copper}} = 1.7 \times 10^{-8}\text{ }\Omega\cdot\text{m}$)

8. Determine the resistance of a $100\text{ m}$ long aluminium cable having a cross-sectional area of $1.0\text{ mm}^2$. ($\rho_{\text{aluminium}} = 2.8 \times 10^{-8}\text{ }\Omega\cdot\text{m}$)

9. A copper wire is $100\text{ m}$ in length and has a diameter of $2\text{ mm}$. Calculate its resistance. ($\rho_{\text{copper}} = 1.7 \times 10^{-8}\text{ }\Omega\cdot\text{m}$, use $\pi = 3.14$)

10. What length of nichrome wire having a cross-sectional area of $0.1\text{ mm}^2$ is required to fabricate a $33\text{ }\Omega$ heating element? ($\rho_{\text{nichrome}} = 1.1 \times 10^{-6}\text{ }\Omega\cdot\text{m}$)

11. Perform the following conversions:  
    (a) $3.3\text{ k}\Omega$ to $\Omega$  
    (b) $47{,}000\text{ }\Omega$ to $\text{k}\Omega$  
    (c) $1.5\text{ M}\Omega$ to $\Omega$

12. An electric kettle of resistance $100\text{ }\Omega$ is connected to a $230\text{ V}$ mains outlet. Calculate the electric current it draws.

13. In our introductory lab story, Leo replaces the $5\text{ }\Omega$ nichrome wire with a second wire having a resistance of $10\text{ }\Omega$.  
    (a) What current will flow through the new wire when connected across $6\text{ V}$?  
    (b) What will be the slope of its $V\text{--}I$ graph ($V$ on the vertical axis), and will its line be steeper or flatter than the original $5\text{ }\Omega$ line?

14. State whether each statement is True or False, correcting any false statements:  
    (a) Ohm's Law holds true for every physical conductor under all operating conditions.  
    (b) The resistance of an ohmic wire doubles when the voltage across it is doubled.  
    (c) A thicker wire of identical length and material offers smaller electrical resistance.  
    (d) The slope of a $V\text{--}I$ graph ($V$ on the $y$-axis) for an ohmic conductor represents its resistance.  
    (e) Electrical resistance and material resistivity are identical physical properties.  
    (f) The $V\text{--}I$ graph for an incandescent lamp filament is a straight line through the origin.

15. In two to three sentences, explain why the $V\text{--}I$ characteristic of an incandescent lightbulb filament curves upward rather than forming a straight line.

---

### Answers

1. $V = I \times R = 1.5\text{ A} \times 8\text{ }\Omega = \mathbf{12\text{ V}}$.  
   *Check:* $12\text{ V} / 8\text{ }\Omega = 1.5\text{ A}$ ✅

2. $R = \frac{V}{I} = \frac{6\text{ V}}{0.03\text{ A}} = \mathbf{200\text{ }\Omega}$.  
   *Check:* $0.03\text{ A} \times 200\text{ }\Omega = 6\text{ V}$ ✅

3. $I = \frac{V}{R} = \frac{12\text{ V}}{24\text{ }\Omega} = \mathbf{0.5\text{ A}}$.  
   *Check:* $0.5\text{ A} \times 24\text{ }\Omega = 12\text{ V}$ ✅

4. (a) For each trial: $2 / 0.5 = 4\text{ }\Omega$; $4 / 1.0 = 4\text{ }\Omega$; $6 / 1.5 = 4\text{ }\Omega$; $8 / 2.0 = 4\text{ }\Omega$. Constant at **$4.0\text{ }\Omega$**.  
   (b) **Yes, the conductor is ohmic**, because the ratio $V / I$ is strictly constant.  
   (c) $\text{Slope} = \frac{\Delta V}{\Delta I} = \frac{8\text{ V}}{2\text{ A}} = \mathbf{4.0\text{ }\Omega}$.  
   (d) With $I$ on the vertical axis: $\text{Slope} = \frac{\Delta I}{\Delta V} = \frac{2\text{ A}}{8\text{ V}} = \mathbf{0.25\text{ A/V}} = \mathbf{0.25\text{ S}}$.  
   *Check:* $4\text{ }\Omega \times 0.25\text{ S} = 1.0$ ✅

5. (a) Since $R \propto l$, $R_{\text{new}} = 3 \times 6\text{ }\Omega = \mathbf{18\text{ }\Omega}$.  
   (b) Halving length halves resistance: $R_{\text{half}} = \frac{6\text{ }\Omega}{2} = \mathbf{3\text{ }\Omega}$.  
   (c) Since $R \propto \frac{1}{A}$, doubling area halves resistance: $R_{\text{new}} = \frac{6\text{ }\Omega}{2} = \mathbf{3\text{ }\Omega}$.  
   *Check:* In (b), connecting both $3\text{ }\Omega$ halves in series restores $6\text{ }\Omega$ ✅

6. Radius increases threefold ($r' = 3r$), so area increases ninefold ($A' = 3^2 A = 9A$).  
   Since $R \propto \frac{1}{A}$: $R_{\text{new}} = \frac{18\text{ }\Omega}{9} = \mathbf{2\text{ }\Omega}$.  
   *Check:* $2\text{ }\Omega \times 9 = 18\text{ }\Omega$ ✅

7. Area $A = 0.5\text{ mm}^2 = 0.5 \times 10^{-6}\text{ m}^2 = 5 \times 10^{-7}\text{ m}^2$.  
   $R = \rho \frac{l}{A} = \frac{(1.7 \times 10^{-8}\text{ }\Omega\cdot\text{m}) \times (50\text{ m})}{5 \times 10^{-7}\text{ m}^2} = \frac{8.5 \times 10^{-7}}{5 \times 10^{-7}} = \mathbf{1.7\text{ }\Omega}$.  
   *Check:* Halving length and halving area leaves the ratio $l/A$ and hence resistance unchanged from Example 9 ($1.7\text{ }\Omega$) ✅

8. Area $A = 1.0\text{ mm}^2 = 1.0 \times 10^{-6}\text{ m}^2$.  
   $R = \rho \frac{l}{A} = \frac{(2.8 \times 10^{-8}\text{ }\Omega\cdot\text{m}) \times (100\text{ m})}{1.0 \times 10^{-6}\text{ m}^2} = \mathbf{2.8\text{ }\Omega}$.  
   *Check:* Greater than copper ($1.7\text{ }\Omega$) due to higher resistivity of aluminium ✅

9. Diameter $= 2\text{ mm} \implies \text{radius } r = 1\text{ mm} = 10^{-3}\text{ m}$.  
   $A = \pi r^2 = 3.14 \times (10^{-3}\text{ m})^2 = 3.14 \times 10^{-6}\text{ m}^2$.  
   $R = \rho \frac{l}{A} = \frac{(1.7 \times 10^{-8}) \times 100}{3.14 \times 10^{-6}} = \frac{1.7 \times 10^{-6}}{3.14 \times 10^{-6}} \approx \mathbf{0.54\text{ }\Omega}$.  
   *Check:* Area is $3.14$ times larger than $1\text{ mm}^2$, so $R = 1.7 / 3.14 \approx 0.54\text{ }\Omega$ ✅

10. Area $A = 0.1\text{ mm}^2 = 10^{-7}\text{ m}^2$.  
    $l = \frac{R \times A}{\rho} = \frac{33\text{ }\Omega \times 10^{-7}\text{ m}^2}{1.1 \times 10^{-6}\text{ }\Omega\cdot\text{m}} = \frac{3.3 \times 10^{-6}}{1.1 \times 10^{-6}} = \mathbf{3.0\text{ m}}$.  
    *Check:* $R = \frac{(1.1 \times 10^{-6}) \times 3}{10^{-7}} = 33\text{ }\Omega$ ✅

11. (a) $3.3\text{ k}\Omega = 3.3 \times 1000 = \mathbf{3300\text{ }\Omega}$  
    (b) $47{,}000\text{ }\Omega = \frac{47{,}000}{1000} = \mathbf{47\text{ k}\Omega}$  
    (c) $1.5\text{ M}\Omega = 1.5 \times 10^6 = \mathbf{1{,}500{,}000\text{ }\Omega}$  
    *Check:* $3300 / 1000 = 3.3$; $47 \times 1000 = 47{,}000$; $1{,}500{,}000 / 10^6 = 1.5$ ✅

12. $I = \frac{V}{R} = \frac{230\text{ V}}{100\text{ }\Omega} = \mathbf{2.3\text{ A}}$.  
    *Check:* $2.3\text{ A} \times 100\text{ }\Omega = 230\text{ V}$ ✅

13. (a) $I = \frac{V}{R} = \frac{6\text{ V}}{10\text{ }\Omega} = \mathbf{0.6\text{ A}}$.  
    (b) $\text{Slope} = R = \mathbf{10\text{ }\Omega}$. The graph will be **steeper** than the $5\text{ }\Omega$ line because a greater voltage rise is required per unit of current.  
    *Check:* At $6\text{ V}$, current is halved from the original $1.2\text{ A}$ to $0.6\text{ A}$ ✅

14. (a) **False** ❌. Ohm's Law applies only to ohmic conductors at constant temperature.  
    (b) **False** ❌. Voltage doubling doubles current; resistance remains constant.  
    (c) **True** ✅. Resistance is inversely proportional to cross-sectional area ($R \propto 1/A$).  
    (d) **True** ✅. $\text{Slope} = \Delta V / \Delta I = R$.  
    (e) **False** ❌. Resistance depends on dimensions; resistivity is an intrinsic material property.  
    (f) **False** ❌. A lamp filament heats up, increasing its resistance and producing a curved $V\text{--}I$ graph.

15. As the applied voltage across a lightbulb increases, the increasing current generates intense Joule heating. In tungsten and other metals, elevated temperature increases lattice ion vibrations, causing more frequent collisions with drifting electrons and raising the filament's resistance. Because resistance increases as voltage increases, the ratio $V / I$ is not constant, causing the $V\text{--}I$ graph to bend upward toward the voltage axis.

---

Leo now understands that the straight-line slope of a $V\text{--}I$ graph measures the electrical resistance of the wire.

**What lies ahead?** So far, we have analyzed circuits containing a single resistor. But practical electrical systems contain dozens or hundreds of components wired together. How do multiple resistors behave when connected one after another or side by side? In Topic 5, we investigate **Combinations of Resistors: Series and Parallel**.
