# Chapter: Electricity (Part 3)

> **Class:** 9 | **Subject:** Physics
> **Preceded by:** [electricity-part2.md](electricity-part2.md) (covered electric current, $I = Q/t$, the ampere, ammeters, and circuit symbols). Charge and static electricity were introduced in [electricity.md](electricity.md). For pressure concepts, see: [pressure-and-fluids.md](../pressure-and-fluids/pressure-and-fluids.md).
> **Topics covered in this file:**
> 3. Potential Difference and Voltage

---

# Topic 3: Potential Difference and Voltage

In Topic 2, we discovered that when an electric circuit forms a **closed conducting loop**, electric current circulates through it, measured in amperes using a series ammeter. But this raises an essential question: **what actually drives charges through the wire?** Water in a horizontal pipe does not flow on its own; it requires a pump to create a difference in pressure. What is the electrical equivalent of pressure that propels charges through conductors, where does it originate, and how do we measure it? In this topic, we investigate this driving force: **electric potential difference**, commonly known as **voltage**.

---

## The Mystery of the Letter "V" at the Electronics Shop

One Saturday afternoon, Sophia visited an electronics repair shop with her mother to purchase a replacement smartphone charger. The shopkeeper, Mr. Evans, placed a compact white charging block on the glass counter. Sophia noticed tiny specifications engraved on the casing: **"Input: 100–240 V ~ 50/60 Hz, Output: 5.0 V"**.

Turning the charger over, Sophia glanced around the shop. On a display rack hung standard AA flashlight cells marked **"1.5 V"**. On a lower shelf sat a heavy lead-acid car battery labeled **"12 V"**. Outside the window, a metal sign on an electrical substation fence read: **"DANGER: High Voltage – 11,000 V"**.

Sophia was intrigued: "Mr. Evans, what does this letter 'V' stand for? And why does this small phone charger show two completely different numbers—230 V on the input and only 5 V on the output?"

Mr. Evans smiled warmly. "That 'V' stands for volts—the measure of electric potential difference, the invisible push that forces charges through a circuit. Let's compare it to water pressure in a plumbing system, and the charger's dual numbers will make perfect sense." Let us explore this together.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Potential difference ($V$)** | The work done in transferring one coulomb of positive electric charge between two points in an electric field ($V = W / Q$) | A flashlight cell maintains $1.5\text{ V}$ across its terminals |
| **Volt ($\text{V}$)** | The SI unit of electric potential difference. Defined as one joule of energy per coulomb of charge ($1\text{ V} = 1\text{ J/C}$) | An automotive battery delivers $12\text{ V}$ |
| **Voltage** | The informal, practical term for electric potential difference | "The mains supply voltage is $230\text{ V}$" |
| **Voltmeter** | A high-resistance measuring instrument connected in parallel across two points to determine potential difference | Connected across a lamp to measure its voltage drop |
| **Electrochemical cell** | A device that converts stored chemical energy into electrical energy, maintaining a steady potential difference | A cylindrical $1.5\text{ V}$ alkaline cell |
| **Battery** | Two or more electrochemical cells connected together in series or parallel | A $9\text{ V}$ rectangular transistor battery (six $1.5\text{ V}$ cells in series) |
| **Terminal** | An electrical contact point on a power source: positive ($+$) at high potential, negative ($−$) at low potential | The raised pip ($+$) and flat base ($−$) of a cell |
| **Electromotive Force (EMF)** | The maximum potential difference maintained between the terminals of a cell when no current is being drawn | A fresh cell's open-circuit rating ($1.5\text{ V}$) |
| **Transformer** | An electromagnetic device that steps up (increases) or steps down (decreases) alternating current (AC) voltages | The step-down circuitry inside a phone charger |

---

## Part A: The Water Analogy: Difference in Pressure

Imagine two water tanks connected by a horizontal pipe fitted with a valve. One tank is mounted high on a rooftop platform, while the other sits at ground level. When you open the valve, water flows vigorously from the **elevated tank down into the lower tank**.

Why does the water flow? Because the water column in the upper tank exerts greater hydrostatic pressure than the lower tank. This **difference in water pressure** drives the fluid through the pipe. If both tanks were positioned at the exact same ground level and filled to identical heights, the pressure difference would be zero, and water would not move.

```
   Elevated tank (High potential)
   ┌────────┐
   │ ~~~~~~ │
   └───┬────┘
       │  Water flows downward
       ▼
   ┌───┴────┐
   │ ~~     │
   └────────┘
   Lower tank (Low potential)
```

> **Figure 3.1** – Water flows from a region of high gravitational pressure to low pressure. A pump is needed to lift water back to the top tank.

*(For detailed physics of fluid pressure, see [pressure-and-fluids.md](../pressure-and-fluids/pressure-and-fluids.md).)*

**The exact same principle governs electric circuits.** Electric charges will only drift through a conducting wire if there is a difference in "electrical pressure" between its two ends. This electrical pressure difference is called **potential difference**:

- The **positive terminal ($+$)** of a battery acts like the elevated water tank: it is at a **higher electric potential**.
- The **negative terminal ($−$)** acts like the lower ground tank: it is at a **lower electric potential**.
- The **battery acts like a mechanical water pump**: internal chemical reactions continuously pump charges "uphill" from the low-potential negative terminal to the high-potential positive terminal, maintaining the potential difference.

In the external circuit (wires, lightbulbs), conventional current flows spontaneously from the **high-potential positive terminal to the low-potential negative terminal**. Inside the battery, chemical energy works continuously to restore that potential difference.

### Table: Water System vs. Electric Circuit

| Water Plumbing System | Electrical Circuit |
|---|---|
| Rate of water flow (liters per second) | Electric current ($I$, amperes = coulombs per second) |
| Difference in water pressure ($\text{N/m}^2$ or $\text{Pa}$) | Potential difference ($V$, volts = joules per coulomb) |
| Mechanical pump lifting water uphill | Electrochemical cell or battery |
| Narrow, constricting pipe restricting water flow | Electrical resistance ($R$, ohms—covered in Topic 4) |

*Remember: This is a helpful conceptual analogy. A conducting wire does not carry liquid; it guides circulating electric charges.*

---

## Part B: Defining Potential Difference: V = W/Q

To quantify electrical "pressure," physicists define it in terms of mechanical work and energy. Suppose a quantity of charge $Q$ is moved between two points $A$ and $B$ in an electric circuit, and an amount of work $W$ is performed by the electrical force:

> **The electric potential difference ($V$) between two points is the work done in moving a unit positive charge from one point to the other:**  
> 
> **$V = \frac{W}{Q}$**

Where:
- $W$ is the work done (or energy transferred) in **joules ($\text{J}$)**
- $Q$ is the quantity of charge in **coulombs ($\text{C}$)**
- $V$ is the resulting potential difference in **volts ($\text{V}$)**

### The SI Unit: The Volt

If $1\text{ joule}$ of work is performed to transfer $1\text{ coulomb}$ of charge between two points, the potential difference between those points is defined as **$1\text{ volt}$**:

> **$1\text{ volt (V)} = \frac{1\text{ joule}}{1\text{ coulomb}} = 1\text{ J/C}$**

Thus, saying a flashlight cell has a potential difference of **$1.5\text{ V}$** means that **each coulomb of charge gains $1.5\text{ joules}$ of electrical energy** as it passes through the cell!

### Sub-multiples and Multiples of the Volt

Depending on the scale of the application, metric prefixes are applied to the volt:

| Unit | Symbol | Definition | Equivalent in Volts |
|---|---|---|---|
| **Millivolt** | $\text{mV}$ | One-thousandth of a volt ($10^{-3}\text{ V}$) | $1\text{ mV} = 0.001\text{ V}$ |
| **Volt** | $\text{V}$ | Base SI unit | $1\text{ V}$ |
| **Kilovolt** | $\text{kV}$ | One thousand volts ($10^{3}\text{ V}$) | $1\text{ kV} = 1000\text{ V}$ |
| **Megavolt** | $\text{MV}$ | One million volts ($10^{6}\text{ V}$) | $1\text{ MV} = 1{,}000{,}000\text{ V}$ |

### Rearranging the Formula

The fundamental definition $V = W / Q$ can be expressed in three algebraic forms:

| Desired Quantity | Formula | Working Units |
|---|---|---|
| **Potential Difference ($V$)** | $V = \frac{W}{Q}$ | $\text{Volts (V)} = \text{Joules / Coulombs}$ |
| **Work Done / Energy ($W$)** | $W = Q \times V$ | $\text{Joules (J)} = \text{Coulombs} \times \text{Volts}$ |
| **Electric Charge ($Q$)** | $Q = \frac{W}{V}$ | $\text{Coulombs (C)} = \text{Joules / Volts}$ |

### Solved Examples

**Example 1 (Calculating Potential Difference):** Moving a charge of $6\text{ C}$ between two points in a circuit requires $24\text{ J}$ of electrical work. What is the potential difference between the points?

- Given: $W = 24\text{ J}$, $Q = 6\text{ C}$
- $V = \frac{W}{Q} = \frac{24\text{ J}}{6\text{ C}} = \mathbf{4\text{ V}}$

**Check:** $W = Q \times V = 6\text{ C} \times 4\text{ V} = 24\text{ J}$ ✅

---

**Example 2 (Work Done by a 12 V Battery):** A charge of $3\text{ C}$ passes through a $12\text{ V}$ automotive battery. How much chemical energy is converted into electrical work?

- Given: $Q = 3\text{ C}$, $V = 12\text{ V} = 12\text{ J/C}$
- $W = Q \times V = 3\text{ C} \times 12\text{ J/C} = \mathbf{36\text{ J}}$

**Check:** $V = \frac{W}{Q} = \frac{36\text{ J}}{3\text{ C}} = 12\text{ V}$ ✅

---

**Example 3 (Finding Charge from Work and Voltage):** A $9\text{ V}$ transistor battery performs $90\text{ J}$ of work in driving charge through a radio circuit. What total charge was circulated?

- Given: $W = 90\text{ J}$, $V = 9\text{ V}$
- $Q = \frac{W}{V} = \frac{90\text{ J}}{9\text{ J/C}} = \mathbf{10\text{ C}}$

**Check:** $W = Q \times V = 10\text{ C} \times 9\text{ V} = 90\text{ J}$ ✅

---

**Example 4 (Energy per Coulomb from a 1.5 V Cell):** How much energy does a $1.5\text{ V}$ alkaline cell impart to: (a) $1\text{ C}$ of charge, (b) $2\text{ C}$ of charge?

- (a) For $1\text{ C}$: $W = Q \times V = 1\text{ C} \times 1.5\text{ J/C} = \mathbf{1.5\text{ J}}$
- (b) For $2\text{ C}$: $W = Q \times V = 2\text{ C} \times 1.5\text{ J/C} = \mathbf{3.0\text{ J}}$

**Check:** $\frac{3.0\text{ J}}{2\text{ C}} = 1.5\text{ V}$ ✅

---

**Example 5 (Small Battery Energy Transfer):** A $9\text{ V}$ battery pushes $0.5\text{ C}$ of charge through an indicator lamp. Calculate the work done.

- $W = Q \times V = 0.5\text{ C} \times 9\text{ J/C} = \mathbf{4.5\text{ J}}$

**Check:** $\frac{4.5\text{ J}}{0.5\text{ C}} = 9\text{ V}$ ✅

---

**Example 6 (Metric Conversions):** A biological nerve impulse produces a potential difference of approximately $70\text{ mV}$. Convert this into volts. An overland transmission grid operates at $11\text{ kV}$. Convert this into volts.

- $70\text{ mV} = 70 \times 10^{-3}\text{ V} = \mathbf{0.07\text{ V}}$
- $11\text{ kV} = 11 \times 10^3\text{ V} = \mathbf{11{,}000\text{ V}}$

**Check:** $0.07 / 0.001 = 70\text{ mV}$; $11{,}000 / 1000 = 11\text{ kV}$ ✅

---

## Part C: Cells and Batteries: Where Does Potential Difference Come From?

Inside an **electrochemical cell**, two dissimilar metal electrodes are immersed in a chemical electrolyte. Spontaneous chemical reactions transfer electrons between the electrodes, forcing excess electrons onto the negative terminal and leaving a deficit of electrons on the positive terminal. This chemical action establishes and maintains a steady **potential difference** across the terminals. As long as active chemicals remain, the cell sustains this electrical push. When the reactants are fully consumed, the cell is "dead"—it can no longer maintain a potential difference.

A **battery** is formed by connecting two or more cells together. When identical cells are connected in **series** (the negative terminal of one cell connected to the positive terminal of the next), their individual voltages **add together directly**:

```
        1.5 V      1.5 V
   ┌────┤├────────┤├────┐
   │    +  −      +  −   │
   │                     │
   └────────⊗────────────┘
      Total Voltage = 1.5 V + 1.5 V = 3.0 V
```

> **Figure 3.2** – Two 1.5 V cells in series. Connected head-to-tail, their potential differences sum to 3.0 V across the lamp.

**Example 7 (Cells in Series):** Two $1.5\text{ V}$ cells are connected in series. Find the total potential difference and the energy imparted to $1\text{ C}$ of charge. What would be the total voltage if four such cells are connected in series?

- For two cells: $V_{\text{total}} = 1.5\text{ V} + 1.5\text{ V} = \mathbf{3.0\text{ V}}$. Energy delivered to $1\text{ C}$: $W = 1\text{ C} \times 3.0\text{ J/C} = \mathbf{3.0\text{ J}}$.
- For four cells: $V_{\text{total}} = 4 \times 1.5\text{ V} = \mathbf{6.0\text{ V}}$.

**Check:** $\frac{3.0\text{ J}}{1\text{ C}} = 3.0\text{ V}$; $\frac{6.0\text{ V}}{1.5\text{ V/cell}} = 4\text{ cells}$ ✅

**Consequence of a Reversed Cell:**  
If one cell in a two-cell series configuration is inserted backward ($+$ to $+$), its potential opposes the other: $1.5\text{ V} - 1.5\text{ V} = \mathbf{0\text{ V}}$. With zero net potential difference, no current flows—the exact failure mode Liam encountered with his flashlight in Topic 2!

**Important Principle:** A battery does **not store electric charge**. The conducting wires and filaments are already filled with trillions of free electrons. The battery simply functions as an energy pump, converting chemical potential energy into electrical work to push those charges.

**Electromotive Force (EMF):**  
The potential difference across the terminals of a cell when it is on **open circuit** (delivering no current) is called its **Electromotive Force (EMF)**. When current is drawn, internal resistance causes the operating terminal voltage to drop slightly below the EMF (covered in detail in Class 10). For Class 9, we treat a cell's rated voltage (e.g., $1.5\text{ V}$) as its terminal potential difference.

---

## Part D: The Voltmeter: Measuring Potential Difference

While an ammeter measures current, a **voltmeter** measures the electric potential difference between two specific points. Its circuit symbol is `─(V)─`.

Three critical rules govern the use of a voltmeter:
1. **Always connect a voltmeter in PARALLEL across the component.** To measure the potential difference across a lightbulb, attach the two leads of the voltmeter directly to the two terminals of the lightbulb. Never cut the circuit wire to insert a voltmeter inline!
2. **Observe terminal polarity:** Connect the positive ($+$) terminal of the voltmeter to the point connected toward the positive terminal of the power source, and the negative ($−$) terminal toward the negative side.
3. **An ideal voltmeter has INFINITE electrical resistance.** In practice, voltmeters are engineered with extraordinarily high internal resistance (thousands or millions of ohms) so that they draw virtually zero current from the circuit, leaving the operating conditions unaffected.

Here is a complete circuit schematic featuring a cell, switch, lamp, series ammeter, and parallel voltmeter:

```
        ┌────────(A)────────┐
        │                   │
        │              ┌────┴────┐
       ─┴─ +           │         │
       ─┬─ −        ───⊗───    ─(V)─
        │              │         │
        │              └────┬────┘
        │                   │
        └───────/ switch ───┘

   Ammeter (A): in SERIES with lamp
   Voltmeter (V): in PARALLEL across lamp
```

> **Figure 3.3** – Standard measuring circuit: ammeter in series to gauge current; voltmeter in parallel across the lamp to gauge potential drop.

### Reading a Voltmeter Scale: Least Count

Analog voltmeters utilize a mechanical needle sweeping across calibrated divisions. Determining the reading requires calculating the **least count (LC)**:

> **$\text{Least Count (LC)} = \frac{\text{Total Range of Scale}}{\text{Total Number of Divisions}}$**  
> **$\text{Voltage Reading} = \text{Deflection (Divisions)} \times \text{LC}$**

**Example 8 (3 V Voltmeter Scale):** A voltmeter scale spans from $0$ to $3\text{ V}$ and features $30$ equal divisions. If the needle settles on the 14th division, find the measured potential difference.

- $\text{LC} = \frac{3\text{ V}}{30\text{ div}} = \mathbf{0.1\text{ V/div}}$
- $\text{Reading} = 14 \times 0.1\text{ V} = \mathbf{1.4\text{ V}}$

**Check:** $\frac{1.4\text{ V}}{0.1\text{ V/div}} = 14\text{ divisions}$ ✅

---

**Example 9 (5 V Voltmeter Scale):** A voltmeter scale spans from $0$ to $5\text{ V}$ with $50$ divisions. The needle indicates the 22nd division. What is the voltage?

- $\text{LC} = \frac{5\text{ V}}{50\text{ div}} = \mathbf{0.1\text{ V/div}}$
- $\text{Reading} = 22 \times 0.1\text{ V} = \mathbf{2.2\text{ V}}$

**Check:** $\frac{2.2\text{ V}}{0.1\text{ V/div}} = 22\text{ divisions}$ ✅

---

### Ammeter vs. Voltmeter: A Quick Comparison

| Feature | Ammeter | Voltmeter |
|---|---|---|
| **Property measured** | Electric current ($I$) | Potential difference ($V$) |
| **Measurement unit** | Amperes ($\text{A}$) | Volts ($\text{V}$) |
| **Circuit connection** | **Series** (inline with component) | **Parallel** (across component) |
| **Internal resistance** | **Extremely low** (approaching $0\text{ }\Omega$) | **Extremely high** (approaching $\infty\text{ }\Omega$) |
| **Circuit symbol** | `─(A)─` | `─(V)─` |

---

## Part E: Everyday Voltages in the Real World

To build physical intuition, consider these approximate potential differences encountered across nature and technology:

| System / Phenomenon | Approximate Voltage |
|---|---|
| Human biological nerve impulse | $\sim 70\text{ mV} = 0.07\text{ V}$ |
| Single alkaline AA/AAA torch cell | $1.5\text{ V}$ |
| Smartphone lithium-ion battery | $3.7\text{ V} - 4.2\text{ V}$ |
| USB charging port standard | $5.0\text{ V}$ |
| Automobile lead-acid battery | $12\text{ V}$ |
| Household residential wall socket (India, UK, Europe) | $230\text{ V}$ (AC) |
| Household residential wall socket (North America, Japan) | $120\text{ V}$ / $100\text{ V}$ (AC) |
| High-voltage electric railway catenary lines | $25\text{ kV} = 25{,}000\text{ V}$ |
| Overland long-distance grid transmission lines | $11\text{ kV}$ to $765\text{ kV}$ |
| Atmospheric lightning stroke | $100\text{ MV}$ to $1\text{ GV}$ ($10^8 - 10^9\text{ V}$) |

Voltages exceeding $50\text{ V}$ can overcome the electrical resistance of dry human skin and deliver dangerous or fatal electric currents. Utility power lines carrying thousands of volts must never be approached.

---

## Part F: Solving the Mystery at the Shop

We can now resolve Sophia's questions for Mr. Evans:

**1. "What does the letter 'V' mean?"**  
The letter **V** represents the **volt**, the SI unit of potential difference ($1\text{ V} = 1\text{ J/C}$). A $1.5\text{ V}$ flashlight cell supplies $1.5\text{ J}$ of energy to every coulomb of charge that flows through it. A $12\text{ V}$ car battery supplies $12\text{ J}$ per coulomb—eight times more energetic push ($12 / 1.5 = 8$).

**2. "Why does the phone charger show two different voltage numbers?"**  
The residential wall socket delivers high-voltage Alternating Current (**$230\text{ V}\text{ AC}$** in India/Europe), which would instantly fry the delicate microcircuits of a smartphone. A phone battery requires low-voltage Direct Current (**$5.0\text{ V}\text{ DC}$**). Inside the charger casing, a solid-state electronic **transformer** steps the voltage down from $230\text{ V}$ to $5\text{ V}$, while rectifier diodes convert AC into stable DC:
- **Input $230\text{ V}$:** The high potential difference drawn from the mains wall outlet.
- **Output $5\text{ V}$:** The safe, regulated low potential difference supplied to the smartphone.

**Example 10 (Energy at Input vs. Output):** Calculate the energy transferred when:  
(a) $2\text{ C}$ of charge enters a phone battery at the charger's $5\text{ V}$ output.  
(b) $1\text{ C}$ of charge passes through a $230\text{ V}$ mains appliance.

- (a) At $5\text{ V}$ output: $W = Q \times V = 2\text{ C} \times 5\text{ V} = \mathbf{10\text{ J}}$
- (b) At $230\text{ V}$ mains: $W = Q \times V = 1\text{ C} \times 230\text{ V} = \mathbf{230\text{ J}}$

**Check:** $\frac{10\text{ J}}{2\text{ C}} = 5\text{ V}$; $\frac{230\text{ J}}{1\text{ C}} = 230\text{ V}$ ✅

This highlights why mains wall outlets are dangerous: each coulomb carries $230\text{ joules}$ of energy—twenty-three times more energy per coulomb than the charger's $10\text{ J}$ output.

---

## Part G: Energy Transfer: W = Q V and W = V I t

We established that **$W = Q \times V$**. From Topic 2, we know that electric charge is related to current and time by **$Q = I \times t$**. Substituting this expression into our work formula yields:

> **$W = V \times I \times t$**

Where:
- $W$ is the total electrical energy transferred in **joules ($\text{J}$)**
- $V$ is the potential difference in **volts ($\text{V}$)**
- $I$ is the electric current in **amperes ($\text{A}$)**
- $t$ is the elapsed time in **seconds ($\text{s}$)**

This fundamental relationship demonstrates that the total energy delivered to a component depends directly on its voltage, current, and operation time. We will rely heavily on this formula in Topic 6 when calculating electrical power and Joule heating.

**Example 11 (Step-by-Step Energy Calculation):** A current of $0.3\text{ A}$ flows through a lamp connected across a $6\text{ V}$ battery for $2\text{ minutes}$.  
(a) What quantity of charge passes through the lamp?  
(b) How much electrical energy is transferred to the lamp?  
(c) Verify your answer using $W = V I t$.

- Convert time: $t = 2\text{ min} = 2 \times 60 = 120\text{ s}$
- (a) $Q = I \times t = 0.3\text{ A} \times 120\text{ s} = \mathbf{36\text{ C}}$
- (b) $W = Q \times V = 36\text{ C} \times 6\text{ V} = \mathbf{216\text{ J}}$
- (c) Direct verification: $W = V \times I \times t = 6\text{ V} \times 0.3\text{ A} \times 120\text{ s} = 1.8 \times 120 = \mathbf{216\text{ J}}$

**Check:** Both methods yield an identical result of $216\text{ J}$ ✅

---

**Example 12 (Electrons and Energy):** A $12\text{ V}$ car battery delivers $120\text{ J}$ of energy to a starter solenoid.  
(a) How much electric charge flowed?  
(b) How many electrons traversed the circuit? ($e = 1.6 \times 10^{-19}\text{ C}$)

- (a) $Q = \frac{W}{V} = \frac{120\text{ J}}{12\text{ V}} = \mathbf{10\text{ C}}$
- (b) $n = \frac{Q}{e} = \frac{10\text{ C}}{1.6 \times 10^{-19}\text{ C/electron}} = \mathbf{6.25 \times 10^{19}\text{ electrons}}$

**Check:** $(6.25 \times 10^{19}) \times (1.6 \times 10^{-19}) = 10\text{ C}$; $10\text{ C} \times 12\text{ V} = 120\text{ J}$ ✅

---

## Part H: Why Don't Birds Get Electrocuted on Power Lines?

You have likely observed birds perched calmly on high-voltage power lines carrying thousands of volts, completely uninjured. How can they survive contact with such immense electrical energy?

An electric shock occurs only when there is a **potential difference across an organism's body**, creating an electric field that drives current through biological tissue.

When a small bird perches on a bare power line:
- Both of its feet clasp the **exact same conducting wire**, separated by only a few centimeters.
- Because the copper or aluminium transmission wire has exceptionally low resistance, the voltage drop across the short distance between the bird's two feet is practically zero ($\Delta V \approx 0\text{ V}$).
- With virtually zero potential difference between its feet, **no measurable current flows through the bird's body**. The bird is simply elevated to the electrical potential of the wire.

However, if a large bird (such as an eagle or stork) spreads its wings and simultaneously touches a **second adjacent phase wire**, a grounded metal utility pole, or a crossarm, a massive potential difference (e.g., $11{,}000\text{ V}$) is instantly established across its body, resulting in electrocution.

> [!WARNING]
> **Essential Safety Precaution:** Never touch, approach, or handle utility power lines, fallen wires, or transmission towers. Unlike a bird perched on a single wire, a human standing on the Earth provides an immediate conducting path to ground ($0\text{ V}$), establishing a lethal potential difference across the body. If you see a downed power line, remain at least 10 meters away and notify emergency services immediately.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Connecting a voltmeter in series.**  
   *Correction:* A voltmeter has an extremely high internal resistance. Inserting it in series will virtually block the current flow through the circuit, dropping total current to near zero and leaving the load inoperative. A voltmeter must **always be connected in parallel** across the component.

2. **Mistake 2: Assuming electric current is "consumed" by a lightbulb.**  
   *Correction:* Charge is conserved ($I_{\text{in}} = I_{\text{out}}$). What is consumed is **energy per coulomb** (potential difference). As each coulomb passes through the filament, its potential drops as its electrical energy is converted into heat and light.

3. **Mistake 3: Confusing electric potential with potential difference.**  
   *Correction:* Potential at a single point is always relative to an arbitrary reference (typically Earth at $0\text{ V}$). Potential difference ($\Delta V$) is the absolute difference between two distinct points. We always measure voltage *across* two terminals.

4. **Mistake 4: Believing a battery creates or stores electric charges.**  
   *Correction:* Conducting wires are already packed with free electrons. A battery simply acts as an energy source that establishes an electric potential difference, providing the driving force to circulate existing charges.

5. **Mistake 5: Misreading multi-range voltmeter dials.**  
   *Correction:* Voltmeters often provide multiple input terminals (e.g., $0-3\text{ V}$ and $0-15\text{ V}$). Always calculate the **least count** corresponding strictly to the specific binding post terminal connected.

6. **Mistake 6: Conflating the physical quantity "potential difference" with its unit "volt".**  
   *Correction:* Potential difference (symbol $V$) is the physical property; the volt (symbol $\text{V}$) is the unit of measure. In the expression $V = 12\text{ V}$, the italicized $V$ represents the quantity and the upright $\text{V}$ represents the unit.

---

## Quick Recap

- Electric charges require an electrical "pressure difference" to circulate; this driving force is **electric potential difference ($V$)**, colloquially termed **voltage**.
- Analogy: Water flows from an elevated tank (high pressure) to a lower tank (low pressure); a battery acts like a pump, sustaining this difference.
- Definition: **$V = \frac{W}{Q}$**. The SI unit is the **volt ($\text{V}$)**; **$1\text{ V} = 1\text{ J/C}$**.
- Rearranged forms: $W = Q \times V$ and $Q = \frac{W}{V}$. Common units: $1\text{ mV} = 10^{-3}\text{ V}$, $1\text{ kV} = 10^3\text{ V}$.
- An **electrochemical cell** uses spontaneous chemical reactions to maintain a potential difference between its terminals. When identical cells are connected in series head-to-tail, their voltages add ($1.5\text{ V} + 1.5\text{ V} = 3.0\text{ V}$).
- Conventional current flows from **high potential ($+$) to low potential ($−$)** through the external circuit.
- A **voltmeter** measures potential difference, has **very high resistance**, and must **always be connected in parallel** across the component.
- Voltmeter scale reading relies on **least count**: $\text{LC} = \frac{\text{Range}}{\text{Divisions}}$.
- Total electrical energy transferred: **$W = V \times I \times t$**.
- Birds on single power lines avoid electrocution because there is no potential difference between their feet; humans touching a wire while grounded establish a lethal potential difference.
- A battery does not store charge; it stores chemical energy to pump charge.

---

## Practice Questions

1. Define electric potential difference between two points in a circuit. State its SI unit and define what $1\text{ volt}$ represents physically.

2. How much work is performed in moving a charge of $5\text{ C}$ across a potential difference of $12\text{ V}$?

3. Exactly $60\text{ J}$ of work is done in transferring an electric charge between two points maintained at a potential difference of $6\text{ V}$. Find the magnitude of the charge.

4. An electrical component performs $45\text{ J}$ of work to transfer $15\text{ C}$ of charge. Determine the potential difference across its terminals.

5. Perform the following conversions:  
   (a) $250\text{ mV}$ to $\text{V}$  
   (b) $33\text{ kV}$ to $\text{V}$  
   (c) $0.5\text{ V}$ to $\text{mV}$

6. A current of $0.2\text{ A}$ is maintained for $5\text{ minutes}$ through an incandescent lamp connected across a $3\text{ V}$ power supply. Determine:  
   (a) The total charge transferred.  
   (b) The total electrical work done.  
   (c) Verify your result using the formula $W = V I t$.

7. An analog voltmeter has a full-scale range from $0$ to $15\text{ V}$ divided into $30$ equal divisions. When connected across a resistor, the needle deflects to the 18th division mark. Determine the instrument's least count and the measured potential difference.

8. How many $1.5\text{ V}$ alkaline cells must be connected in series to construct a $9\text{ V}$ battery? How much energy does this battery impart to each coulomb of charge?

9. Draw a clean schematic circuit diagram showing a single cell, an open switch, a lamp, an inline ammeter, and a voltmeter connected to measure the voltage across the lamp.

10. State whether each statement is True or False, correcting any false statements:  
    (a) A voltmeter must always be connected in series with the load.  
    (b) An electrochemical battery stores billions of extra electric charges inside its casing.  
    (c) A bird perched on an overhead high-voltage power line remains unharmed because there is virtually zero potential difference between its feet.  
    (d) An incandescent lamp uses up electric current as it glows.

11. A smartphone charger block is inscribed with "Input: 230 V AC, Output: 5 V DC". Explain the physical meaning of both ratings and name the internal component responsible for changing the voltage.

12. Using the elevated water tank analogy, explain why electric current flows through a closed circuit. Furthermore, explain why a human standing on the ground must never touch a live overhead power line, even though birds sit upon it safely.

---

### Answers

1. Electric potential difference between two points is the work done in moving a unit positive charge ($1\text{ C}$) between those points: $V = W / Q$. The SI unit is the **volt ($\text{V}$)**. One volt is defined as one joule of work done per coulomb of charge transferred ($1\text{ V} = 1\text{ J/C}$).

2. $W = Q \times V = 5\text{ C} \times 12\text{ V} = 5\text{ C} \times 12\text{ J/C} = \mathbf{60\text{ J}}$.  
   *Check:* $60\text{ J} / 5\text{ C} = 12\text{ V}$ ✅

3. $Q = \frac{W}{V} = \frac{60\text{ J}}{6\text{ V}} = \mathbf{10\text{ C}}$.  
   *Check:* $10\text{ C} \times 6\text{ V} = 60\text{ J}$ ✅

4. $V = \frac{W}{Q} = \frac{45\text{ J}}{15\text{ C}} = \mathbf{3\text{ V}}$.  
   *Check:* $15\text{ C} \times 3\text{ V} = 45\text{ J}$ ✅

5. (a) $250\text{ mV} = 250 \times 10^{-3}\text{ V} = \mathbf{0.25\text{ V}}$  
   (b) $33\text{ kV} = 33 \times 10^3\text{ V} = \mathbf{33{,}000\text{ V}}$  
   (c) $0.5\text{ V} = 0.5 \times 1000 = \mathbf{500\text{ mV}}$  
   *Check:* $0.25 \times 1000 = 250\text{ mV}$; $33{,}000 / 1000 = 33\text{ kV}$; $500 \times 0.001 = 0.5\text{ V}$ ✅

6. Convert time: $t = 5\text{ min} = 5 \times 60 = 300\text{ s}$.  
   (a) $Q = I \times t = 0.2\text{ A} \times 300\text{ s} = \mathbf{60\text{ C}}$.  
   (b) $W = Q \times V = 60\text{ C} \times 3\text{ V} = \mathbf{180\text{ J}}$.  
   (c) Verification: $W = V \times I \times t = 3\text{ V} \times 0.2\text{ A} \times 300\text{ s} = 0.6 \times 300 = \mathbf{180\text{ J}}$ ✅

7. $\text{Least Count (LC)} = \frac{15\text{ V}}{30\text{ divisions}} = \mathbf{0.5\text{ V/division}}$.  
   $\text{Reading} = 18 \times 0.5\text{ V} = \mathbf{9.0\text{ V}}$.  
   *Check:* $9.0 / 0.5 = 18$ divisions ✅

8. $\text{Number of cells} = \frac{9\text{ V}}{1.5\text{ V/cell}} = \mathbf{6\text{ cells in series}}$.  
   Energy imparted to each coulomb: $W = 1\text{ C} \times 9\text{ J/C} = \mathbf{9\text{ J}}$.  
   *Check:* $6 \times 1.5\text{ V} = 9.0\text{ V}$ ✅

9. See Figure 3.3: A single loop contains the cell, switch, inline ammeter, and lamp in series. The voltmeter is connected in parallel across the two terminals of the lamp, with its positive terminal facing the positive side of the supply.

10. (a) **False** ❌. A voltmeter has very high internal resistance and must always be connected in parallel.  
    (b) **False** ❌. A battery stores chemical energy, not extra charges; it acts as a pump to circulate existing electrons.  
    (c) **True** ✅. Because both feet rest on the same wire, the potential difference between them is virtually zero.  
    (d) **False** ❌. Current is conserved; what is consumed is electrical energy per unit charge.

11. **Input 230 V AC:** The high-voltage alternating current drawn from residential wall outlets.  
    **Output 5 V DC:** The regulated, safe low-voltage direct current supplied to the smartphone battery.  
    A **transformer** (coupled with electronic rectification circuitry) steps the voltage down from $230\text{ V}$ to $5\text{ V}$.

12. Water flows from high gravitational potential (elevated tank) to low potential (ground tank); similarly, electric charges flow from high electric potential ($+$) to low electric potential ($−$) driven by a potential difference maintained by the battery (pump). A bird perching on a single wire touches only one electrical potential, resulting in $\Delta V \approx 0\text{ V}$ across its body. Conversely, a human standing on the Earth ($0\text{ V}$) who touches a high-voltage wire completes a circuit with an enormous potential difference across their body, causing a lethal current surge.

---

Sophia now understands that the letter "V" signifies volts—the measure of electrical push per unit charge—and why chargers step high mains voltage down to safe levels.

**What lies ahead?** We have seen that potential difference (voltage) provides the push that drives electric current. But if you double the voltage across a wire, does the current double as well? What property of a conductor resists the flow of charges? In Topic 4, we explore this fundamental relationship: **Ohm's Law and Electrical Resistance**.
