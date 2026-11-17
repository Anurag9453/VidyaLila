# Chapter: Electricity (Part 5)

> **Class:** 9 | **Subject:** Physics
> **Preceded by:** [electricity-part4.md](electricity-part4.md) (covered Ohm's Law and electrical resistance). The chapter began with electric charge in [electricity.md](electricity.md). Circuit symbols, ammeters, and voltmeters were introduced in [electricity-part2.md](electricity-part2.md) and [electricity-part3.md](electricity-part3.md).
> **Topics covered in this file:**
> 5. Combinations of Resistors: Series and Parallel

---

# Topic 5: Combinations of Resistors: Series and Parallel

> [!NOTE]
> **Class 10 Curriculum Preview:** Resistor network analysis is a foundational topic bridging Class 9 and Class 10. Here, we build the clear, step-by-step principles of series, parallel, and fundamental mixed combinations.

In Topic 4, we examined a **single resistor**, applied Ohm's Law ($V = I R$), and studied how its resistance depends on physical dimensions and material resistivity. However, practical electrical circuits rarely contain just a solitary resistor. Real-world systems—from home appliances and electronics to automotive dashboards—contain numerous lamps, heating elements, and resistors connected together.

This raises critical questions: **when multiple resistors are interconnected, what is the net "equivalent resistance" of the overall circuit? How are the available voltage and current shared among the individual components?** In this topic, we master the two fundamental connection topologies: **series** and **parallel**.

---

## Holiday Lighting: A Single Broken Bulb

With the winter holiday season approaching, Mr. Davis and his daughter Maya were decorating their front porch railing with a long decorative string of colored miniature holiday lights. The string was powered by a low-voltage plug-in adapter. When Mr. Davis plugged it into the outdoor outlet, dozens of brilliant miniature lamps sparkled merrily.

A few moments later, Maya noticed one tiny bulb was loose in its plastic socket. She gave it a gentle twist to straighten it—and instantly, **the entire string of lights went dark!** One single loose bulb had extinguished all fifty lamps simultaneously.

Maya was astonished: "Dad, what happened? Only one bulb was loose, so why did all fifty bulbs shut off together?"

Mr. Davis smiled. "Let's step inside the living room for a moment." Inside, Mr. Davis walked over to the wall switch and clicked off the ceiling fan. The overhead LED lights and television continued running without even a flicker.

Maya tapped her chin. "That's even more puzzling, Dad! On the porch, one loose bulb shut down the whole string. But inside the house, switching off the ceiling fan leaves the lamps and television working perfectly. Both run on electricity, so why do they behave so differently?"

Mr. Davis nodded. "The secret lies in the two distinct ways electrical components can be connected. Let us explore series and parallel circuits to solve your holiday lighting mystery."

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Series combination** | An arrangement where components are connected end-to-end along a **single continuous path**; current has only one route | Traditional decorative holiday light strings |
| **Parallel combination** | An arrangement where components are connected across the **same two common junctions**; current divides among multiple parallel branches | Household wall outlets, lamps, and appliances |
| **Junction (Node)** | A circuit point where three or more conductors meet and current divides or combines | Junction points $A$ and $B$ in a parallel network |
| **Branch** | An individual parallel conducting pathway connecting two common circuit junctions | A single lighting or appliance circuit in a home |
| **Equivalent resistance ($R_{\text{eq}}$)** | A single theoretical resistance that would draw the exact same total current from the power supply as the original resistor network | Replacing two $5\text{ }\Omega$ series resistors with one $10\text{ }\Omega$ resistor |
| **Mixed combination** | A network containing both series and parallel groupings interconnected together | A series resistor paired with a parallel resistor branch |
| **Voltage division** | The proportional distribution of total supply voltage across individual resistors connected in series | Higher resistance drops more voltage in series |
| **Current division** | The inversely proportional branching of total current among individual resistors connected in parallel | Lower resistance branch draws more current in parallel |

---

## Part A: Series Combination (A Single Pathway)

In a **series circuit**, resistors are wired sequentially **end-to-end**, forming a single continuous chain like railroad stations along a single track. Electric charge leaving the power source has **only one path** to follow: it must flow consecutively through $R_1$, then $R_2$, and then $R_3$.

```
     +-----/\/\/-----/\/\/-----/\/\/-----+
     :      R₁         R₂         R₃      :
     :                                    :
     +-----(A)-----------─┤├─────────────+
```

> **Figure 5.1** – Three resistors connected in series. The current has only one path; an ammeter inserted anywhere in the loop measures the identical current.

### Three Fundamental Rules of Series Circuits

**Rule 1: Electric current is identical through every series resistor.**  
Because electric charge is conserved and has no alternative pathways, the charge passing through $R_1$ must continue through $R_2$ and $R_3$. No charge accumulates or vanishes:

> **$I = I_1 = I_2 = I_3$**

**Rule 2: Total potential difference equals the sum of individual voltage drops.**  
The total electrical work supplied by the battery per coulomb is partitioned across the series resistors:

> **$V = V_1 + V_2 + V_3$**

**Rule 3: Equivalent resistance equals the algebraic sum of the individual resistances.**  
Applying Ohm's Law ($V = I R$) to each component:
- $V_1 = I R_1$, $V_2 = I R_2$, $V_3 = I R_3$
- $V = V_1 + V_2 + V_3 = I R_1 + I R_2 + I R_3 = I (R_1 + R_2 + R_3)$

For the entire circuit, $V = I R_{\text{eq}}$. Equating these two expressions:

> **$R_{\text{series}} = R_1 + R_2 + R_3 + \dots$**

Key implications:
- The equivalent resistance of a series circuit is **greater than the largest individual resistance** in the chain. Each added resistor adds more obstacle to the flow of charge.
- Increasing the length of a wire is physically equivalent to adding series resistance ($R \propto l$, Topic 4).

### Voltage Division in Series Circuits

Because the current $I$ is identical through all components in a series circuit:
$$V_1 = I R_1 \quad \text{and} \quad V_2 = I R_2 \implies \frac{V_1}{V_2} = \frac{R_1}{R_2}$$

> **In a series circuit, voltage divides in direct proportion to resistance:**  
> A larger resistance drops a proportionally larger share of the total supply voltage.

*Quick check:* A $10\text{ V}$ battery connected across a $4\text{ }\Omega$ and a $6\text{ }\Omega$ resistor in series:  
$R_{\text{total}} = 4 + 6 = 10\text{ }\Omega$. Circuit current $I = 10\text{ V} / 10\text{ }\Omega = 1\text{ A}$.  
Voltage across $4\text{ }\Omega$: $V_1 = 1\text{ A} \times 4\text{ }\Omega = 4\text{ V}$.  
Voltage across $6\text{ }\Omega$: $V_2 = 1\text{ A} \times 6\text{ }\Omega = 6\text{ V}$.  
$4\text{ V} + 6\text{ V} = 10\text{ V}$ ✅ and $V_1 / V_2 = 4 / 6 = R_1 / R_2$ ✅.

### Circuit Interruption in Series

Because there is strictly one conducting pathway, if the circuit is severed at any single point (a burned filament, loose wire, or open switch), the entire circuit becomes an **open circuit**. Current drops to zero everywhere immediately. This explains Maya's holiday lights!

---

## Part B: Parallel Combination (Multiple Branching Pathways)

In a **parallel circuit**, all resistors are connected across the **same two common junction points ($A$ and $B$)**. The electric current approaching junction $A$ divides into **multiple independent branch pathways**, passing through the respective resistors before recombining at junction $B$.

```
            A                      B
     +------+----/\/\/ R₁ ---------+------+
     :      :                      :      :
     :      +----/\/\/ R₂ ---------+      :
     :      :                      :      :
     :      +----/\/\/ R₃ ---------+      :
     :                                    :
     +------------------─┤├─--------------+
```

> **Figure 5.2** – Three resistors in parallel across junctions $A$ and $B$. Current branches at $A$ and recombines at $B$.

### Three Fundamental Rules of Parallel Circuits

**Rule 1: Potential difference is identical across every parallel branch.**  
Because each resistor's terminals are wired directly to the common nodes $A$ and $B$, each branch experiences the exact same voltage:

> **$V = V_1 = V_2 = V_3$**

**Rule 2: Total circuit current equals the sum of the individual branch currents.**  
By conservation of electric charge, the total incoming current at junction $A$ equals the sum of the currents traversing the individual branches:

> **$I = I_1 + I_2 + I_3$**

**Rule 3: The reciprocal of equivalent resistance equals the sum of the reciprocals of the individual resistances.**  
Applying Ohm's Law ($I = V / R$) to each branch:
- $I_1 = \frac{V}{R_1}$, $I_2 = \frac{V}{R_2}$, $I_3 = \frac{V}{R_3}$
- $I = I_1 + I_2 + I_3 = \frac{V}{R_1} + \frac{V}{R_2} + \frac{V}{R_3} = V \left(\frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3}\right)$

For the entire circuit, $I = \frac{V}{R_{\text{eq}}}$. Dividing both sides by $V$:

> **$\frac{1}{R_{\text{parallel}}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \dots$**

### Why Does Equivalent Resistance Decrease in Parallel?

Adding parallel branches provides additional conducting pathways for charges to travel. Think of a crowded highway toll plaza: opening additional toll gates allows traffic to clear faster by reducing overall congestion. Similarly, each new parallel resistor adds a new conducting route, making it easier for charge to flow from the battery.

> **The equivalent resistance of a parallel circuit is always smaller than the smallest individual resistor in the combination.**

### Direct Product-over-Sum Formula for Two Resistors

For exactly two resistors in parallel:
$$\frac{1}{R_{\text{eq}}} = \frac{1}{R_1} + \frac{1}{R_2} = \frac{R_2 + R_1}{R_1 R_2}$$
Taking the reciprocal yields the handy **product-over-sum rule**:

> **$R_{\text{parallel}} = \frac{R_1 \times R_2}{R_1 + R_2}$**  *(Valid strictly for two resistors!)*

### n Identical Resistors (R₀ each)

- **In Series:** $R_{\text{eq}} = R_0 + R_0 + \dots = \mathbf{n R_0}$
- **In Parallel:** $\frac{1}{R_{\text{eq}}} = \frac{n}{R_0} \implies R_{\text{eq}} = \mathbf{\frac{R_0}{n}}$

For example, connecting four $20\text{ }\Omega$ resistors in parallel yields $R_{\text{eq}} = 20 / 4 = 5\text{ }\Omega$.

### Current Division in Parallel Branches

Because the voltage $V$ is identical across all parallel branches:
$$I_1 = \frac{V}{R_1} \quad \text{and} \quad I_2 = \frac{V}{R_2} \implies \frac{I_1}{I_2} = \frac{R_2}{R_1}$$

> **Current divides in inverse proportion to branch resistance:**  
> A branch with smaller resistance carries a proportionally larger share of the total current.

### Circuit Interruption in Parallel

If an individual branch in a parallel circuit is broken (such as turning off a ceiling fan), the remaining branches remain connected across junctions $A$ and $B$. They continue to experience the full supply voltage, and their branch currents remain completely unaffected. This is why residential buildings are wired in parallel.

---

## Part C: Series vs. Parallel at a Glance

| Feature | Series Circuit | Parallel Circuit |
|---|---|---|
| **Conducting path** | Single continuous loop | Multiple independent branch loops |
| **Electric current** | **Identical** everywhere ($I = I_1 = I_2$) | **Divides** among branches ($I = I_1 + I_2 + I_3$) |
| **Potential difference** | **Divides** across resistors ($V = V_1 + V_2$) | **Identical** across all branches ($V = V_1 = V_2$) |
| **Equivalent resistance** | $R_{\text{eq}} = R_1 + R_2 + R_3$ (greater than largest) | $\frac{1}{R_{\text{eq}}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3}$ (smaller than smallest) |
| **Component failure** | Break anywhere halts entire circuit | Break in one branch leaves others working normally |
| **Division principle** | $V \propto R$ (larger $R$ drops more voltage) | $I \propto \frac{1}{R}$ (smaller $R$ draws more current) |
| **Typical application** | String decorative lights, safety limit switches | Household wiring, automobiles, consumer appliances |

---

## Part D: Mixed Combinations and the Circuit Reduction Method

Many practical circuits contain resistors connected in a **combination of series and parallel networks**. Consider a circuit where resistor $R_1$ is connected in series with a parallel pair ($R_2$ and $R_3$):

```
              R₁         A      R₂       B
     +-----/\/\/-----+----+---/\/\/---+---+
     :                    :           :   :
     :                    +---/\/\/---+   :
     :                        R₃          :
     :                                    :
     +-------------─┤├─--------------------+
```

> **Figure 5.3** – A classic mixed combination: $R_1$ is in series with the parallel pair $R_2$ and $R_3$.

### The Circuit Reduction Method: Step by Step

To solve mixed resistor networks, we systematically reduce complex clusters into single equivalent resistances, working from the "inside out":

1. **Identify and reduce pure parallel branches:** Find any sub-branches that share identical junction nodes and compute their parallel equivalent:  
   $$R_{23} = \frac{R_2 \times R_3}{R_2 + R_3}$$
2. **Combine remaining series elements:** Replace the parallel cluster with a single equivalent resistor $R_{23}$ and add it to any series resistors:  
   $$R_{\text{total}} = R_1 + R_{23}$$
3. **Calculate total circuit current:** Apply Ohm's Law to the total circuit:  
   $$I_{\text{total}} = \frac{V_{\text{source}}}{R_{\text{total}}}$$
4. **Work backward to find individual voltages and currents:**  
   - Resistor $R_1$ carries the full circuit current: $V_1 = I_{\text{total}} \times R_1$.  
   - The remaining voltage drops across the parallel pair: $V_{\text{parallel}} = V_{\text{source}} - V_1$.  
   - Branch currents are found via Ohm's Law: $I_2 = V_{\text{parallel}} / R_2$ and $I_3 = V_{\text{parallel}} / R_3$.

```
   Original Circuit        Step 1: Simplify Parallel Pair       Step 2: Add in Series

   R₁ ── [ R₂ ]                 R₁ ── [ R₂₃ ]                      [ R_total = R₁ + R₂₃ ]
         [ R₃ ]
```

> **Figure 5.4** – Reduction method: collapse parallel groups into single equivalent blocks, then sum along the series line.

---

## Part E: Meters and Cells in Combination Circuits

### Proper Placement of Ammeters and Voltmeters

- **Ammeter Placement:** Must always be inserted **in series** directly along the branch whose current is to be measured. Because an ammeter has near-zero internal resistance, placing it in parallel across a component acts as a dangerous short circuit.
- **Voltmeter Placement:** Must always be connected **in parallel** across the two specific terminals between which the potential difference is desired. Its massive internal resistance ensures it draws virtually no current from the branch.

```
                                 +-------(V)---------+
                                 :                   :
     +-----(A)-----/\/\/ R₁ -----+-----/\/\/ R₂ -----+
     :                                               :
     +--------------------─┤├─-----------------------+
```

> **Figure 5.5** – Proper instrument connections: Ammeter (A) in series measures total circuit current; Voltmeter (V) in parallel measures the voltage drop strictly across resistor $R_2$.

### Combinations of Cells

Electrochemical cells can also be grouped in series or parallel:
- **Cells in Series:** Connecting the positive terminal of one cell to the negative terminal of the next sums their voltages:  
  $$V_{\text{total}} = V_1 + V_2 + V_3$$  
  Two $1.5\text{ V}$ cells in series produce $3.0\text{ V}$.
- **Cells in Parallel:** Connecting like terminals together ($+$ to $+$, $−$ to $−$) provides the **same voltage** as a single cell ($1.5\text{ V}$), but divides the drawn current among the cells, allowing the battery pack to operate for a much longer duration before discharging.

---

## Part F: Solved Examples

**Example 1 (Three Resistors in Series):** Three resistors of $2\text{ }\Omega$, $3\text{ }\Omega$, and $5\text{ }\Omega$ are connected in series across a $20\text{ V}$ DC supply. Find the equivalent resistance, circuit current, and voltage drop across each resistor.

- $R_{\text{series}} = R_1 + R_2 + R_3 = 2\text{ }\Omega + 3\text{ }\Omega + 5\text{ }\Omega = \mathbf{10\text{ }\Omega}$
- $I = \frac{V}{R} = \frac{20\text{ V}}{10\text{ }\Omega} = \mathbf{2\text{ A}}$ (identical through all three)
- $V_1 = I R_1 = 2\text{ A} \times 2\text{ }\Omega = \mathbf{4\text{ V}}$
- $V_2 = I R_2 = 2\text{ A} \times 3\text{ }\Omega = \mathbf{6\text{ V}}$
- $V_3 = I R_3 = 2\text{ A} \times 5\text{ }\Omega = \mathbf{10\text{ V}}$

**Check:** $V_1 + V_2 + V_3 = 4\text{ V} + 6\text{ V} + 10\text{ V} = 20\text{ V}$ ✅. Ratios: $4:6:10 = 2:3:5 = R_1:R_2:R_3$ ✅

---

**Example 2 (Same Three Resistors in Parallel):** The same three resistors ($2\text{ }\Omega$, $3\text{ }\Omega$, $5\text{ }\Omega$) are now connected in parallel across a $6\text{ V}$ supply. Determine the equivalent resistance, individual branch currents, and total current drawn.

- $\frac{1}{R_{\text{parallel}}} = \frac{1}{2} + \frac{1}{3} + \frac{1}{5} = \frac{15}{30} + \frac{10}{30} + \frac{6}{30} = \frac{31}{30}\text{ }\Omega^{-1}$
- $R_{\text{parallel}} = \frac{30}{31}\text{ }\Omega \approx \mathbf{0.968\text{ }\Omega}$
- $I_1 = \frac{V}{R_1} = \frac{6\text{ V}}{2\text{ }\Omega} = \mathbf{3.0\text{ A}}$
- $I_2 = \frac{V}{R_2} = \frac{6\text{ V}}{3\text{ }\Omega} = \mathbf{2.0\text{ A}}$
- $I_3 = \frac{V}{R_3} = \frac{6\text{ V}}{5\text{ }\Omega} = \mathbf{1.2\text{ A}}$
- Total current: $I_{\text{total}} = 3.0\text{ A} + 2.0\text{ A} + 1.2\text{ A} = \mathbf{6.2\text{ A}}$

**Check:** $I = \frac{V}{R_{\text{eq}}} = \frac{6\text{ V}}{30/31\text{ }\Omega} = 6 \times \frac{31}{30} = 6.2\text{ A}$ ✅. Notice that $R_{\text{parallel}} = 0.968\text{ }\Omega$, which is smaller than the smallest branch ($2\text{ }\Omega$) ✅

---

**Example 3 (Two Resistors in Parallel):** Calculate the equivalent resistance of a $6\text{ }\Omega$ and a $3\text{ }\Omega$ resistor in parallel.

- Product-over-sum: $R_{\text{eq}} = \frac{R_1 \times R_2}{R_1 + R_2} = \frac{6\text{ }\Omega \times 3\text{ }\Omega}{6\text{ }\Omega + 3\text{ }\Omega} = \frac{18}{9} = \mathbf{2\text{ }\Omega}$

**Check:** Reciprocal method: $\frac{1}{6} + \frac{1}{3} = \frac{1}{6} + \frac{2}{6} = \frac{3}{6} = \frac{1}{2} \implies R = 2\text{ }\Omega$ ✅. Also $2\text{ }\Omega < 3\text{ }\Omega$ ✅

---

**Example 4 (Pair of Identical Resistors):** Two $4\text{ }\Omega$ resistors are connected: (a) in parallel, (b) in series. Find the equivalent resistance in each case.

- (a) Parallel: $R_{\text{eq}} = \frac{R_0}{n} = \frac{4\text{ }\Omega}{2} = \mathbf{2\text{ }\Omega}$
- (b) Series: $R_{\text{eq}} = n R_0 = 2 \times 4\text{ }\Omega = \mathbf{8\text{ }\Omega}$

**Check:** Parallel resistance is one-fourth of series resistance for two identical components ✅

---

**Example 5 (Five Identical Resistors):** Five identical $10\text{ }\Omega$ resistors are connected: (a) in parallel, (b) in series. Find the equivalent resistance.

- (a) Parallel: $R = \frac{10\text{ }\Omega}{5} = \mathbf{2\text{ }\Omega}$
- (b) Series: $R = 5 \times 10\text{ }\Omega = \mathbf{50\text{ }\Omega}$

**Check:** $(5 \times 10 = 50\text{ }\Omega)$; $(10 / 5 = 2\text{ }\Omega)$ ✅

---

**Example 6 (Series Voltage Division):** A $12\text{ V}$ battery powers a $4\text{ }\Omega$ and a $6\text{ }\Omega$ resistor in series. Find the current and the potential difference across each.

- $R_{\text{total}} = 4\text{ }\Omega + 6\text{ }\Omega = 10\text{ }\Omega$
- $I = \frac{12\text{ V}}{10\text{ }\Omega} = \mathbf{1.2\text{ A}}$
- $V_1 = 1.2\text{ A} \times 4\text{ }\Omega = \mathbf{4.8\text{ V}}$
- $V_2 = 1.2\text{ A} \times 6\text{ }\Omega = \mathbf{7.2\text{ V}}$

**Check:** $4.8\text{ V} + 7.2\text{ V} = 12.0\text{ V}$ ✅. Ratios: $4.8 / 7.2 = 4 / 6 = 2 / 3$ ✅

---

**Example 7 (Parallel Current Division):** The same $4\text{ }\Omega$ and $6\text{ }\Omega$ resistors are now placed in parallel across $12\text{ V}$. Find the branch currents and total current.

- $I_1 = \frac{12\text{ V}}{4\text{ }\Omega} = \mathbf{3\text{ A}}$
- $I_2 = \frac{12\text{ V}}{6\text{ }\Omega} = \mathbf{2\text{ A}}$
- $I_{\text{total}} = 3\text{ A} + 2\text{ A} = \mathbf{5\text{ A}}$
- $R_{\text{eq}} = \frac{V}{I_{\text{total}}} = \frac{12\text{ V}}{5\text{ A}} = \mathbf{2.4\text{ }\Omega}$

**Check:** Product-over-sum: $\frac{4 \times 6}{4 + 6} = \frac{24}{10} = 2.4\text{ }\Omega$ ✅. Current ratio: $I_1 / I_2 = 3 / 2 = R_2 / R_1 = 6 / 4 = 3 / 2$ ✅

---

**Example 8 (Classic Mixed Combination):** A $2\text{ }\Omega$ resistor ($R_1$) is wired in series with a parallel pair of $6\text{ }\Omega$ ($R_2$) and $3\text{ }\Omega$ ($R_3$). The circuit is connected to a $12\text{ V}$ source. Find:  
(a) Total equivalent resistance  
(b) Total circuit current  
(c) Potential difference across the parallel cluster  
(d) Current through each individual resistor

- Step 1 (parallel cluster): $R_{23} = \frac{6 \times 3}{6 + 3} = \frac{18}{9} = 2.0\text{ }\Omega$
- Step 2 (series combination): $R_{\text{total}} = R_1 + R_{23} = 2\text{ }\Omega + 2\text{ }\Omega = \mathbf{4.0\text{ }\Omega}$
- Step 3 (total current): $I_{\text{total}} = \frac{12\text{ V}}{4\text{ }\Omega} = \mathbf{3\text{ A}}$ (passes through $R_1$)
- Step 4 (voltages and branch currents):  
  - Voltage across $R_1$: $V_1 = 3\text{ A} \times 2\text{ }\Omega = \mathbf{6\text{ V}}$  
  - Voltage across parallel pair: $V_{\text{parallel}} = 12\text{ V} - 6\text{ V} = \mathbf{6\text{ V}}$  
  - Current in $6\text{ }\Omega$: $I_2 = \frac{6\text{ V}}{6\text{ }\Omega} = \mathbf{1.0\text{ A}}$  
  - Current in $3\text{ }\Omega$: $I_3 = \frac{6\text{ V}}{3\text{ }\Omega} = \mathbf{2.0\text{ A}}$

**Check:** $I_2 + I_3 = 1.0\text{ A} + 2.0\text{ A} = 3.0\text{ A} = I_{\text{total}}$ ✅; $V_1 + V_{\text{parallel}} = 6\text{ V} + 6\text{ V} = 12\text{ V}$ ✅

---

**Example 9 (Current Limiting Resistor in Series):** A small indicator lamp has an internal resistance of $12\text{ }\Omega$ and operates safely at $0.2\text{ A}$. We wish to operate it from a $6\text{ V}$ DC battery. What series resistor must be added to protect the lamp?

- Desired total circuit resistance: $R_{\text{total}} = \frac{V}{I} = \frac{6\text{ V}}{0.2\text{ A}} = 30\text{ }\Omega$
- Additional series resistance required: $R_{\text{extra}} = R_{\text{total}} - R_{\text{lamp}} = 30\text{ }\Omega - 12\text{ }\Omega = \mathbf{18\text{ }\Omega}$
- Voltage across lamp: $V_{\text{lamp}} = 0.2\text{ A} \times 12\text{ }\Omega = \mathbf{2.4\text{ V}}$
- Voltage across protective resistor: $V_{\text{resistor}} = 0.2\text{ A} \times 18\text{ }\Omega = \mathbf{3.6\text{ V}}$

**Check:** $2.4\text{ V} + 3.6\text{ V} = 6.0\text{ V}$ ✅

---

**Example 10 (Lowering Resistance with a Parallel Resistor):** A technician has a $10\text{ }\Omega$ resistor but needs a net resistance of $5\text{ }\Omega$. What resistance should be connected, and in what configuration?

- To reduce total resistance, the added resistor must be placed in **parallel**.
- $\frac{1}{R_{\text{new}}} = \frac{1}{R_1} + \frac{1}{R_x} \implies \frac{1}{5} = \frac{1}{10} + \frac{1}{R_x}$
- $\frac{1}{R_x} = \frac{1}{5} - \frac{1}{10} = \frac{2}{10} - \frac{1}{10} = \frac{1}{10} \implies R_x = \mathbf{10\text{ }\Omega\text{ in parallel}}$

**Check:** Two $10\text{ }\Omega$ resistors in parallel give $10 / 2 = 5\text{ }\Omega$ ✅

---

**Example 11 (Household Parallel Appliances):** Three home appliances are connected in parallel across a $230\text{ V}$ residential circuit: an electric heater drawing $5\text{ A}$, a television drawing $2\text{ A}$, and an LED reading lamp drawing $0.5\text{ A}$. Find the total current drawn from the mains and the equivalent resistance of the network.

- Total current: $I_{\text{total}} = 5\text{ A} + 2\text{ A} + 0.5\text{ A} = \mathbf{7.5\text{ A}}$
- Equivalent resistance: $R_{\text{eq}} = \frac{V}{I_{\text{total}}} = \frac{230\text{ V}}{7.5\text{ A}} \approx \mathbf{30.67\text{ }\Omega}$

**Check:** Branch resistances are $230 / 5 = 46\text{ }\Omega$; $230 / 2 = 115\text{ }\Omega$; $230 / 0.5 = 460\text{ }\Omega$. Reciprocal sum yields $R_{\text{eq}} = 30.67\text{ }\Omega < 46\text{ }\Omega$ ✅. Notice: as more parallel appliances are turned on, total current increases!

---

**Example 12 (Current Division in Parallel):** A total current of $9\text{ A}$ enters a parallel junction containing a $6\text{ }\Omega$ and a $3\text{ }\Omega$ resistor. Determine the current flowing through each branch.

- Parallel equivalent resistance: $R_{\text{eq}} = \frac{6 \times 3}{6 + 3} = 2\text{ }\Omega$
- Junction voltage: $V = I_{\text{total}} \times R_{\text{eq}} = 9\text{ A} \times 2\text{ }\Omega = 18\text{ V}$
- Current through $6\text{ }\Omega$: $I_1 = \frac{18\text{ V}}{6\text{ }\Omega} = \mathbf{3\text{ A}}$
- Current through $3\text{ }\Omega$: $I_2 = \frac{18\text{ V}}{3\text{ }\Omega} = \mathbf{6\text{ A}}$

**Check:** $3\text{ A} + 6\text{ A} = 9\text{ A}$ ✅. Current ratio: $3 / 6 = 1 / 2 = R_2 / R_1$ (lower resistance carries twice the current) ✅

---

**Example 13 (Comparing Bulb Brightness in Series):** Two lightbulbs with filament resistances of $2\text{ }\Omega$ and $4\text{ }\Omega$ are connected in series across a $6\text{ V}$ battery. Determine the voltage across each and state which bulb shines brighter.

- $R_{\text{total}} = 2\text{ }\Omega + 4\text{ }\Omega = 6\text{ }\Omega$
- Circuit current: $I = \frac{6\text{ V}}{6\text{ }\Omega} = 1\text{ A}$ (identical for both)
- Voltage across $2\text{ }\Omega$ bulb: $V_1 = 1\text{ A} \times 2\text{ }\Omega = \mathbf{2\text{ V}}$
- Voltage across $4\text{ }\Omega$ bulb: $V_2 = 1\text{ A} \times 4\text{ }\Omega = \mathbf{4\text{ V}}$
- Since current is identical, the $4\text{ }\Omega$ bulb drops twice as much voltage, dissipates more electrical power ($P = I^2 R$, Topic 6), and therefore **glows brighter**.

**Check:** $2\text{ V} + 4\text{ V} = 6\text{ V}$ ✅

---

## Part G: Resolving Maya's Holiday Lights Puzzle

Let us apply our formulas to Maya's holiday lights:

**Example 14 (The 10-Bulb Holiday String Model):** Suppose a miniature holiday light string contains $10$ identical bulbs wired in series, each having a resistance of $3\text{ }\Omega$, operated from a $12\text{ V}$ step-down transformer.

- In series, equivalent resistance: $R = 10 \times 3\text{ }\Omega = 30\text{ }\Omega$
- Operating current: $I = \frac{12\text{ V}}{30\text{ }\Omega} = \mathbf{0.4\text{ A}}$ (flowing through all bulbs)
- Potential difference across each individual bulb:  
  $$V_{\text{bulb}} = 0.4\text{ A} \times 3\text{ }\Omega = \mathbf{1.2\text{ V}}$$  
  The $12\text{ V}$ total supply is divided equally across the 10 bulbs ($10 \times 1.2\text{ V} = 12\text{ V}$).

When Maya twisted and loosened one bulb, she severed the conducting loop at that point. Because a series circuit has strictly **one path**, an air gap was introduced. Total current dropped to $I = 0\text{ A}$, extinguishing all 10 bulbs at once!

```
      Holiday string (Series): one loose bulb breaks entire loop

      +--⊗--⊗--⊗--⊗--  X  --⊗--⊗--⊗--+
      :                  ^            :
      :          (open circuit gap)   :
      +-------------─┤├─--------------+

      Household wiring (Parallel): one appliance switched OFF

      +--------+--------+--------+
      :        :        :        :
      :        ⊗        ⊗        o
    ──┬──      :        :         o  ← switch OFF
    ──┴─       :        :        :
      :        :        :        ⊗
      :        :        :        :
      +--------+--------+--------+
             (lamp ON) (TV ON) (fan OFF)
```

> **Figure 5.6** – Series string vs. parallel home wiring. In series, an open gap halts all components. In parallel, each appliance connects across the full supply lines, operating independently.

Mr. Davis concluded: "In our holiday string, all bulbs are in **series** to divide the adapter's voltage into tiny, safe fractions ($1.2\text{ V}$ per bulb). But in our house, every outlet and appliance is connected in **parallel**. Each device receives the full $230\text{ V}$ mains potential, and each branch operates on its own dedicated switch."

Maya beamed: "So in series, every component depends on the others to complete the path. But in parallel, each branch is an independent circuit!"

---

## Common Pitfalls to Avoid

1. **Mistake 1: Adding parallel resistances directly.**  
   *Correction:* In parallel, resistances do not add directly ($R \neq R_1 + R_2$). You must add their reciprocals: $\frac{1}{R} = \frac{1}{R_1} + \frac{1}{R_2}$. For two resistors, use the product-over-sum formula: $R = \frac{R_1 R_2}{R_1 + R_2}$.

2. **Mistake 2: Forgetting to invert $\frac{1}{R_{\text{eq}}}$ at the end of a parallel calculation.**  
   *Correction:* Calculating $\frac{1}{R} = \frac{1}{6} + \frac{1}{3} = \frac{1}{2}$ is not the final answer. You must invert the result: $R = 2\text{ }\Omega$. Leaving the answer as $0.5\text{ }\Omega$ is a frequent mathematical slip.

3. **Mistake 3: Expecting parallel resistance to exceed branch values.**  
   *Correction:* In parallel, equivalent resistance is always **less than the smallest individual resistance** in the cluster. If your parallel calculation for $6\text{ }\Omega$ and $3\text{ }\Omega$ yields anything larger than $3\text{ }\Omega$, an algebraic error has occurred.

4. **Mistake 4: Believing current decreases along a series chain.**  
   *Correction:* Current is strictly conserved. The current leaving the third resistor is identical to the current entering the first ($I = I_1 = I_2 = I_3$). What is consumed is electrical energy per unit charge—the voltage drop ($V_1 + V_2 + V_3 = V_{\text{total}}$).

5. **Mistake 5: Mixing up series and parallel voltage/current rules.**  
   *Correction:*  
   - **Series:** Current is identical ($I$ constant); voltage divides ($V = V_1 + V_2$).  
   - **Parallel:** Voltage is identical ($V$ constant); current divides ($I = I_1 + I_2$).

6. **Mistake 6: Placing an ammeter in parallel.**  
   *Correction:* An ammeter has near-zero internal resistance. Connecting it in parallel across a component bypasses that component and creates an instant short circuit, damaging the meter. Ammeters must **always be connected in series**.

7. **Mistake 7: Assuming household appliances are wired in series.**  
   *Correction:* If household circuits were series-wired, turning off a single lightbulb would shut down every refrigerator, computer, and light in the house! Furthermore, each added appliance would reduce the voltage to all other appliances. Home wiring is strictly parallel.

---

## Quick Recap

- **Series Circuits:** Single continuous pathway; **current is identical throughout** ($I = I_1 = I_2$); voltage divides ($V = V_1 + V_2$); **equivalent resistance is the sum**:  
  $$R_{\text{series}} = R_1 + R_2 + R_3 + \dots$$  
  ($R_{\text{eq}}$ is greater than the largest individual resistance). Voltage divides in direct proportion to resistance ($V \propto R$). A break anywhere interrupts the entire circuit.
- **Parallel Circuits:** Multiple independent branch pathways; **voltage is identical across all branches** ($V = V_1 = V_2$); current divides ($I = I_1 + I_2$); **equivalent resistance reciprocal**:  
  $$\frac{1}{R_{\text{parallel}}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \dots$$  
  For two resistors: $R_{\text{eq}} = \frac{R_1 R_2}{R_1 + R_2}$. Equivalent resistance is smaller than the smallest branch. Current divides inversely with resistance ($I \propto 1/R$). A break in one branch leaves other branches functioning normally.
- For $n$ identical resistors of value $R_0$:  
  - Series: $R_{\text{eq}} = n R_0$  
  - Parallel: $R_{\text{eq}} = \frac{R_0}{n}$
- **Circuit Reduction Method:** For mixed networks, simplify inner parallel clusters first using product-over-sum, then add remaining series elements.
- **Meters:** Ammeters connect in series (low resistance); voltmeters connect in parallel (high resistance).
- **Cells:** Connected in series, voltages add ($1.5\text{ V} + 1.5\text{ V} = 3.0\text{ V}$). In parallel, voltage is unchanged, but run time increases.
- Turning on more parallel appliances in a home increases the total current drawn from the supply ($I_{\text{total}} = \sum I_{\text{branch}}$).

---

## Practice Questions

1. Three resistors of $3\text{ }\Omega$, $6\text{ }\Omega$, and $9\text{ }\Omega$ are connected in series across a $36\text{ V}$ power supply. Determine the equivalent resistance, circuit current, and potential difference across each individual resistor.

2. Calculate the equivalent resistance of a $12\text{ }\Omega$ and a $4\text{ }\Omega$ resistor connected in parallel.

3. Three resistors of $3\text{ }\Omega$, $6\text{ }\Omega$, and $2\text{ }\Omega$ are connected in parallel across a $6\text{ V}$ battery. Determine the equivalent resistance, current in each resistor, and total circuit current.

4. Six identical $12\text{ }\Omega$ resistors are available. Calculate their equivalent resistance when connected: (a) in parallel, (b) in series.

5. A $9\text{ V}$ battery powers a $10\text{ }\Omega$ and a $20\text{ }\Omega$ resistor. Find the current through each resistor and the total current when they are connected: (a) in series, (b) in parallel.

6. A $4\text{ }\Omega$ resistor is connected in series with a parallel combination of $6\text{ }\Omega$ and $12\text{ }\Omega$. The entire circuit is connected across a $16\text{ V}$ DC supply. Calculate:  
   (a) The total equivalent resistance.  
   (b) The total circuit current.  
   (c) The voltage drop across the parallel pair.  
   (d) The branch current in each of the $6\text{ }\Omega$ and $12\text{ }\Omega$ resistors.

7. An incandescent lamp of resistance $20\text{ }\Omega$ operates correctly at a rated current of $0.25\text{ A}$. It is to be connected to a $9\text{ V}$ power source. What value of resistance must be connected in series with the lamp? Calculate the voltage across the lamp and across the protective resistor.

8. A laboratory technician needs to reduce a $12\text{ }\Omega$ resistance down to an equivalent resistance of $4\text{ }\Omega$. What resistance should be connected, and in what configuration (series or parallel)?

9. A $12\text{ V}$ power source drives a steady current of $0.5\text{ A}$ through two resistors connected in series. One resistor has a value of $10\text{ }\Omega$. Determine the resistance of the second resistor and the voltage drop across each.

10. A total current of $12\text{ A}$ divides between a $2\text{ }\Omega$ and a $4\text{ }\Omega$ resistor connected in parallel. Determine the current flowing through each resistor and the potential difference across the parallel combination.

11. In a circuit, a $5\text{ }\Omega$ and a $10\text{ }\Omega$ resistor are connected in series across a $6\text{ V}$ battery. An ammeter is connected in series with the circuit, and a voltmeter is connected in parallel across the $10\text{ }\Omega$ resistor. What are the readings on the two meters?

12. State whether each statement is True or False, correcting any false statements:  
    (a) In a series circuit, current is largest in the resistor closest to the positive terminal.  
    (b) The equivalent resistance of a parallel resistor network is smaller than the smallest branch resistance.  
    (c) In a parallel combination, the potential difference across every resistor is identical.  
    (d) Removing one lightbulb from a series holiday string allows the remaining bulbs to stay illuminated.

13. Three $1.5\text{ V}$ cells are connected in series to power a $9\text{ }\Omega$ resistor. Find the total battery voltage and the current through the resistor. What would the voltage be if the three cells were rewired in parallel?

14. Explain why the formula $R = \frac{R_1 R_2}{R_1 + R_2}$ cannot be applied directly to three resistors in parallel. Show how to correctly determine the parallel equivalent resistance of $2\text{ }\Omega$, $3\text{ }\Omega$, and $6\text{ }\Omega$.

15. State two distinct reasons why electrical appliances in modern homes are wired in parallel rather than in series.

---

### Answers

1. $R_{\text{series}} = 3\text{ }\Omega + 6\text{ }\Omega + 9\text{ }\Omega = \mathbf{18\text{ }\Omega}$.  
   $I = \frac{36\text{ V}}{18\text{ }\Omega} = \mathbf{2\text{ A}}$.  
   $V_1 = 2\text{ A} \times 3\text{ }\Omega = \mathbf{6\text{ V}}$, $V_2 = 2\text{ A} \times 6\text{ }\Omega = \mathbf{12\text{ V}}$, $V_3 = 2\text{ A} \times 9\text{ }\Omega = \mathbf{18\text{ V}}$.  
   *Check:* $6\text{ V} + 12\text{ V} + 18\text{ V} = 36\text{ V}$ ✅

2. $R_{\text{parallel}} = \frac{12 \times 4}{12 + 4} = \frac{48}{16} = \mathbf{3\text{ }\Omega}$.  
   *Check:* $\frac{1}{12} + \frac{1}{4} = \frac{1}{12} + \frac{3}{12} = \frac{4}{12} = \frac{1}{3} \implies R = 3\text{ }\Omega < 4\text{ }\Omega$ ✅

3. $\frac{1}{R} = \frac{1}{3} + \frac{1}{6} + \frac{1}{2} = \frac{2}{6} + \frac{1}{6} + \frac{3}{6} = \frac{6}{6} = 1\text{ }\Omega^{-1} \implies \mathbf{R = 1\text{ }\Omega}$.  
   $I_1 = \frac{6\text{ V}}{3\text{ }\Omega} = \mathbf{2\text{ A}}$, $I_2 = \frac{6\text{ V}}{6\text{ }\Omega} = \mathbf{1\text{ A}}$, $I_3 = \frac{6\text{ V}}{2\text{ }\Omega} = \mathbf{3\text{ A}}$.  
   $I_{\text{total}} = 2\text{ A} + 1\text{ A} + 3\text{ A} = \mathbf{6\text{ A}}$.  
   *Check:* $I = \frac{V}{R} = \frac{6\text{ V}}{1\text{ }\Omega} = 6\text{ A}$ ✅

4. (a) Parallel: $R_{\text{eq}} = \frac{R_0}{n} = \frac{12\text{ }\Omega}{6} = \mathbf{2\text{ }\Omega}$.  
   (b) Series: $R_{\text{eq}} = n R_0 = 6 \times 12\text{ }\Omega = \mathbf{72\text{ }\Omega}$.  
   *Check:* $6 \times (1/12) = 1/2 \implies R = 2\text{ }\Omega$ ✅

5. (a) Series: $R = 10 + 20 = 30\text{ }\Omega$. $I = \frac{9\text{ V}}{30\text{ }\Omega} = \mathbf{0.3\text{ A}}$ (same through both).  
   $V_1 = 0.3\text{ A} \times 10\text{ }\Omega = 3\text{ V}$, $V_2 = 0.3\text{ A} \times 20\text{ }\Omega = 6\text{ V}$.  
   (b) Parallel: $I_1 = \frac{9\text{ V}}{10\text{ }\Omega} = \mathbf{0.9\text{ A}}$, $I_2 = \frac{9\text{ V}}{20\text{ }\Omega} = \mathbf{0.45\text{ A}}$, $I_{\text{total}} = 0.9 + 0.45 = \mathbf{1.35\text{ A}}$.  
   *Check:* (a) $3\text{ V} + 6\text{ V} = 9\text{ V}$ ✅. (b) $R_{\text{eq}} = \frac{200}{30} = 6.67\text{ }\Omega$, $9 / 6.67 = 1.35\text{ A}$ ✅

6. Parallel pair: $R_{23} = \frac{6 \times 12}{6 + 12} = \frac{72}{18} = 4\text{ }\Omega$.  
   (a) $R_{\text{total}} = 4\text{ }\Omega + 4\text{ }\Omega = \mathbf{8\text{ }\Omega}$.  
   (b) $I_{\text{total}} = \frac{16\text{ V}}{8\text{ }\Omega} = \mathbf{2\text{ A}}$.  
   (c) Voltage across series $4\text{ }\Omega$: $V_1 = 2\text{ A} \times 4\text{ }\Omega = 8\text{ V}$. Voltage across parallel pair: $V_{\text{parallel}} = 16\text{ V} - 8\text{ V} = \mathbf{8\text{ V}}$.  
   (d) $I(6\text{ }\Omega) = \frac{8\text{ V}}{6\text{ }\Omega} = \mathbf{\frac{4}{3}\text{ A} \approx 1.33\text{ A}}$, $I(12\text{ }\Omega) = \frac{8\text{ V}}{12\text{ }\Omega} = \mathbf{\frac{2}{3}\text{ A} \approx 0.67\text{ A}}$.  
   *Check:* $1.33\text{ A} + 0.67\text{ A} = 2.0\text{ A} = I_{\text{total}}$ ✅

7. $R_{\text{total}} = \frac{V}{I} = \frac{9\text{ V}}{0.25\text{ A}} = 36\text{ }\Omega$.  
   Series resistor required: $R_{\text{extra}} = 36\text{ }\Omega - 20\text{ }\Omega = \mathbf{16\text{ }\Omega}$.  
   $V_{\text{lamp}} = 0.25\text{ A} \times 20\text{ }\Omega = \mathbf{5\text{ V}}$, $V_{\text{resistor}} = 0.25\text{ A} \times 16\text{ }\Omega = \mathbf{4\text{ V}}$.  
   *Check:* $5\text{ V} + 4\text{ V} = 9\text{ V}$ ✅

8. To reduce resistance, connect in **parallel**.  
   $\frac{1}{R_x} = \frac{1}{4} - \frac{1}{12} = \frac{3}{12} - \frac{1}{12} = \frac{2}{12} = \frac{1}{6} \implies \mathbf{R_x = 6\text{ }\Omega\text{ in parallel}}$.  
   *Check:* $\frac{12 \times 6}{12 + 6} = \frac{72}{18} = 4\text{ }\Omega$ ✅

9. $R_{\text{total}} = \frac{12\text{ V}}{0.5\text{ A}} = 24\text{ }\Omega$.  
   Second resistor: $R_2 = 24\text{ }\Omega - 10\text{ }\Omega = \mathbf{14\text{ }\Omega}$.  
   $V_1 = 0.5\text{ A} \times 10\text{ }\Omega = \mathbf{5\text{ V}}$, $V_2 = 0.5\text{ A} \times 14\text{ }\Omega = \mathbf{7\text{ V}}$.  
   *Check:* $5\text{ V} + 7\text{ V} = 12\text{ V}$ ✅

10. Current ratio: $\frac{I_1}{I_2} = \frac{R_2}{R_1} = \frac{4}{2} = 2 \implies I_1 = 2 I_2$.  
    $I_1 + I_2 = 12\text{ A} \implies 3 I_2 = 12\text{ A} \implies I_2 = \mathbf{4\text{ A}}$ (through $4\text{ }\Omega$), $I_1 = \mathbf{8\text{ A}}$ (through $2\text{ }\Omega$).  
    Voltage: $V = 8\text{ A} \times 2\text{ }\Omega = \mathbf{16\text{ V}}$ ($R_{\text{eq}} = \frac{8}{6} = \frac{4}{3}\text{ }\Omega \implies 12\text{ A} \times \frac{4}{3}\text{ }\Omega = 16\text{ V}$).  
    *Check:* $16\text{ V} / 4\text{ }\Omega = 4\text{ A}$ ✅

11. Series resistance: $R = 5 + 10 = 15\text{ }\Omega$.  
    **Ammeter reading:** $I = \frac{6\text{ V}}{15\text{ }\Omega} = \mathbf{0.4\text{ A}}$.  
    **Voltmeter reading (across $10\text{ }\Omega$):** $V = 0.4\text{ A} \times 10\text{ }\Omega = \mathbf{4.0\text{ V}}$.  
    *Check:* Voltage across $5\text{ }\Omega$ is $0.4 \times 5 = 2\text{ V}$; $2\text{ V} + 4\text{ V} = 6\text{ V}$ ✅

12. (a) **False** ❌. Current is identical through every resistor in a series circuit.  
    (b) **True** ✅. Parallel branching creates more pathways, lowering total resistance below the smallest branch.  
    (c) **True** ✅. All parallel branches connect directly across the common supply nodes.  
    (d) **False** ❌. Removing a bulb from a series circuit opens the loop, turning off all bulbs.

13. Series voltage adds: $1.5\text{ V} + 1.5\text{ V} + 1.5\text{ V} = \mathbf{4.5\text{ V}}$.  
    Current: $I = \frac{4.5\text{ V}}{9\text{ }\Omega} = \mathbf{0.5\text{ A}}$.  
    If connected in parallel, the terminal voltage would remain **$1.5\text{ V}$** (providing longer operating runtime).  
    *Check:* $0.5\text{ A} \times 9\text{ }\Omega = 4.5\text{ V}$ ✅

14. The formula $R = \frac{R_1 R_2}{R_1 + R_2}$ is the algebraic simplification of $\frac{1}{R} = \frac{1}{R_1} + \frac{1}{R_2}$ which applies strictly to two fractions. For three resistors, one must use the general reciprocal formula:  
    $\frac{1}{R} = \frac{1}{2} + \frac{1}{3} + \frac{1}{6} = \frac{3 + 2 + 1}{6} = \frac{6}{6} = 1\text{ }\Omega^{-1} \implies \mathbf{R = 1.0\text{ }\Omega}$.  
    (Alternatively, simplify in pairs: $2\text{ }\Omega$ and $3\text{ }\Omega$ give $1.2\text{ }\Omega$; then $1.2\text{ }\Omega$ and $6\text{ }\Omega$ give $\frac{1.2 \times 6}{7.2} = 1.0\text{ }\Omega$).

15. First, in parallel, every appliance receives the full rated mains voltage ($230\text{ V}$), ensuring normal power and performance. Second, each appliance operates independently on its own switch; turning off or blowing a fuse in one appliance does not cut power to the others.

---

Maya now clearly understands why a single loose holiday light can darken an entire series string, while parallel home wiring keeps household appliances running independently.

**What lies ahead?** When electric current flows through a resistance, mobile electrons collide with vibrating lattice atoms, converting electrical energy into thermal energy. In Topic 6, we examine this transformation in depth: **The Heating Effect of Electric Current and Electric Power**.
