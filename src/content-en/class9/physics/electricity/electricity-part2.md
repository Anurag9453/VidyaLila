# Chapter: Electricity (Part 2)

> **Class:** 9 | **Subject:** Physics
> **Preceded by:** [electricity.md](electricity.md) (covered electric charge, the coulomb, $e = 1.6 \times 10^{-19}\text{ C}$, conductors and insulators, and static electricity). For least count concepts, see: [measurement-and-units-part3.md](../measurement-and-units/measurement-and-units-part3.md).
> **Topics covered in this file:**
> 2. Electric Current and Circuits

---

# Topic 2: Electric Current and Circuits

In Topic 1, we learned that electric charge comes in two varieties, positive and negative, and that static electricity involves charges that **remain stationary** on the surface of an object—whether on a rubbed party balloon, a plastic comb, or the leaves of an electroscope. However, practical modern electricity operates very differently. Fluorescent fixtures, cooling fans, flashlights, and mobile phone chargers do not rely on static charge trapped in one place. Instead, they depend on charge **flowing continuously through conducting wires**. In this topic, we examine electric charge in motion: **electric current**. We will also study the closed pathway required for current to flow: **the electric circuit**.

Remember from Topic 1: the coulomb ($\text{C}$) is a massive quantity of charge, and a single electron carries an elementary charge of $1.6 \times 10^{-19}\text{ C}$. Throughout this topic: **$e = 1.6 \times 10^{-19}\text{ C}$**.

---

## The Flashlight That Refused to Light Up

It was seven o'clock on a stormy autumn evening when a power outage plunged the house into darkness. Liam grabbed a heavy metal flashlight from the utility shelf, clicked the sliding switch, and frowned. Nothing happened. He turned to his father, Mr. Miller: "Dad, the flashlight won't turn on! I just installed brand-new alkaline cells this afternoon."

Mr. Miller tapped the flashlight against his palm and inspected the lens. "The bulb filament looks intact, and the cells are fresh. Let's open the cylinder and investigate."

He unscrewed the base cap and tipped the two cylindrical cells into his palm. Examining their orientation, Mr. Miller pointed out: "Look closely, Liam. The upper cell was inserted upside down. Its positive terminal ($+$) was facing backward toward the spring rather than toward the bulb."

Liam quickly aligned both cells head-to-tail, slid them back inside, and tightened the base cap. He flicked the switch again—yet the bulb remained completely dark!

Mr. Miller unscrewed the switch assembly and examined the internal brass contact strip. "Aha! Look here. The copper leaf spring inside the switch is slightly bent downward. Even when you slide the button forward, the metal strip fails to touch the base contact." With a small screwdriver, Mr. Miller gently bent the spring upward, reassembled the casing, and pressed the switch. Instantly, a brilliant beam of light cut across the room!

Liam was fascinated: "Dad, all we needed was to link the bulb to the cells. Why did we have to fix three different mechanical details just to make it shine?" 

Mr. Miller smiled. "Because for an electric current to flow, the pathway must be **complete and uninterrupted** from start to finish. Let us explore what that continuous loop requires."

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Electric current ($I$)** | The rate of flow of electric charge across a cross-section of a conductor; the quantity of charge passing per second | A typical handheld flashlight draws about $0.3\text{ A}$ |
| **Ampere ($\text{A}$)** | The SI unit of electric current. Defined as one coulomb of charge passing per second ($1\text{ A} = 1\text{ C/s}$) | A $1\text{ A}$ current transfers $1\text{ C}$ of charge every second |
| **Milliampere ($\text{mA}$), Microampere ($\mu\text{A}$)** | Metric sub-multiples of current: $1\text{ mA} = 10^{-3}\text{ A}$, $1\text{ }\mu\text{A} = 10^{-6}\text{ A}$ | An indicator LED operates at approximately $20\text{ mA}$ |
| **Conventional current** | The historic, standard direction assigned to electric current: flowing from the positive terminal to the negative terminal of a source | Indicated by arrows on all standard circuit schematics |
| **Electric circuit** | A closed, continuous conducting path through which an electric current can flow | A connected loop of battery, wires, switch, and lamp |
| **Source** | The electrical energy provider that creates an electric potential to propel charges | An electrochemical cell or battery |
| **Load** | Any component that consumes electrical energy to perform work | An incandescent lamp, buzzer, or electric motor |
| **Switch** | A control device used to deliberately close (make) or open (break) an electric circuit | The push-button or slider on a flashlight |
| **Open circuit** | An incomplete electrical path containing a break or gap; no current flows | A circuit with its switch turned OFF |
| **Closed circuit** | A complete, unbroken electrical loop through which current flows continuously | A circuit with its switch turned ON |
| **Short circuit** | An accidental low-resistance pathway that bypasses the load, causing dangerously excessive current | Bare wires touching directly across battery terminals |
| **Ammeter** | A low-resistance instrument used to measure electric current; always connected in series | Connected inline with a load to measure amperes |
| **DC / AC** | **DC (Direct Current):** charges flow unidirectionally. **AC (Alternating Current):** direction of flow reverses periodically | Flashlight battery: DC; household mains: AC |

---

## Part A: What is Electric Current?

### The Flow of Electric Charge

Consider water flowing through an irrigation pipe. We often say, "The pump delivers 10 liters of water per minute." This measurement specifies the **volume of water passing a given cross-section per unit time**—the flow rate.

In an identical manner, **electric current** measures the rate at which electric charge flows through a cross-section of a conducting wire:

> **$\text{Electric Current} = \frac{\text{Net Charge Transferred}}{\text{Time Elapsed}}$**  
> **$I = \frac{Q}{t}$**

Where:
- $Q$ is the net quantity of charge in **coulombs ($\text{C}$)**
- $t$ is the time duration in **seconds ($\text{s}$)**
- $I$ is the resulting electric current in **amperes ($\text{A}$)**

This gives the formal definition of the SI unit of current:

> **$1\text{ ampere} = \frac{1\text{ coulomb}}{1\text{ second}}$**, or **$1\text{ A} = 1\text{ C/s}$**

If a steady current of $1\text{ A}$ flows through a copper wire, exactly one coulomb of charge traverses any cross-section of that wire each second.

### Rearranging the Formula

The relationship $I = Q / t$ can be rearranged into three handy working forms:

| Desired Quantity | Formula | Units |
|---|---|---|
| **Current ($I$)** | $I = \frac{Q}{t}$ | Amperes ($\text{A}$) |
| **Charge ($Q$)** | $Q = I \times t$ | Coulombs ($\text{C}$) |
| **Time ($t$)** | $t = \frac{Q}{I}$ | Seconds ($\text{s}$) |

### Sub-multiples of the Ampere

In many electronic applications, currents are much smaller than a full ampere:

- **$1\text{ milliampere (mA)} = 10^{-3}\text{ A} = 0.001\text{ A}$** ($1000\text{ mA} = 1\text{ A}$)
- **$1\text{ microampere (}\mu\text{A)} = 10^{-6}\text{ A} = 0.000001\text{ A}$** ($1{,}000{,}000\text{ }\mu\text{A} = 1\text{ A}$)

For instance, $250\text{ mA} = 250 \times 10^{-3}\text{ A} = 0.25\text{ A}$, while $0.03\text{ A} = 0.03 \times 1000\text{ mA} = 30\text{ mA}$.

### What Carries Charge in an Electric Current?

**In metallic solid conductors (e.g., copper, silver, aluminium):**  
Metals possess a crystalline lattice bathed in a "sea" of mobile **free electrons**. When a voltage source (such as a battery) is connected, these free electrons are repelled by the negative terminal and attracted toward the positive terminal. Therefore, **in solid metallic wires, electrons flow from negative to positive**.

However, circuit diagrams worldwide use an arrow running in the exact opposite direction—from the **positive terminal to the negative terminal**. This is known as **conventional current**. 

This historical convention was established by early pioneers like Benjamin Franklin decades before the discovery of the electron. Early physicists assumed that positive charges flowed through conductors. When J.J. Thomson discovered the electron in 1897, scientists realized that negative electrons move in the opposite direction. Rather than redraw every circuit schematic in existence, the scientific community retained conventional current for circuit analysis, because treating positive charges moving in one direction produces mathematically identical circuit equations to negative charges moving in the reverse direction.

```
        Cell:   +  ─────────────────────────  −

   Conventional current :  + ───────────────►  −
   (indicated on circuit schematics)

   Actual electron drift:  + ◄───────────── −
   (inside metallic conductors)
```

> **Figure 2.1** – Inside metal wires, negative electrons drift toward the positive terminal, but conventional current is defined from positive to negative.

**In liquids and ionized gases:**  
In liquid electrolytes (such as saltwater or copper sulfate solution), electric current is carried by both **positive ions (cations)** moving toward the negative cathode and **negative ions (anions)** moving toward the positive anode (explored further in Topic 7).

---

## Part B: Electric Circuits and Their Components

Returning to Liam's question: what must be complete for a bulb to illuminate? The answer is: **the electric circuit**.

> **An electric circuit is a continuous, unbroken conducting pathway through which electric current can flow.**

If the pathway is interrupted at any single point, current immediately ceases to circulate throughout the entire circuit—just as a severed railway track halts train traffic.

### Components of a Circuit

Every practical circuit consists of five standard elements:
1. **Source (Cell or Battery):** Provides the electrical push (potential difference) that drives charges through the circuit. Note the distinction: a single chemical unit is a **cell**, whereas a group of two or more cells connected together forms a **battery**.
2. **Connecting Wires:** Low-resistance metallic conductors (typically insulated copper) that provide the pathway for circulating charges.
3. **Switch (Key):** A mechanical device used to deliberately complete or break the circuit loop.
   - Switch **Open:** Gap in pathway; **no current flows**.
   - Switch **Closed:** Pathway intact; **current flows continuously**.
4. **Load:** Any electrical appliance that converts electrical energy into useful work—such as an incandescent **lamp** (light), a **buzzer** (sound), or a **motor** (mechanical motion).
5. **Measuring Instruments:** Devices inserted to monitor circuit parameters, such as an **ammeter** for current. (The voltmeter is introduced in Topic 3).

### Circuit Symbols

Drawing realistic pictorial diagrams of batteries, lamps, and switches is tedious and ambiguous. Electrical engineers therefore utilize standardized schematic symbols:

| Component | Schematic Symbol | Description |
|---|---|---|
| Connecting wire | `─────` | A single straight line representing low resistance |
| Single cell | `─┤├─` | Two parallel plates: **longer thin line is $(+)$**, shorter thick line is $(−)$ |
| Battery (multiple cells) | `─┤├─┤├─` | Two or more cells connected in series |
| Open switch | `─o  o─` | Visible gap between contacts (circuit broken) |
| Closed switch | `─o──o─` | Contacts touching (circuit continuous) |
| Electric lamp (bulb) | `─⊗─` | A circle containing a cross or filament loop |
| Fixed resistor | `─/\/\/─` | A zigzag line representing electrical resistance |
| Rheostat (variable resistor) | `─/\/\/─↑` | A zigzag line with an arrow indicating a sliding contact |
| Ammeter | `─(A)─` | A circle enclosing the letter A |
| Voltmeter | `─(V)─` | A circle enclosing the letter V |

For wire crossings and ground connections:

```
  Connected wire junction (node)        Unconnected crossing wires

           :                                     :
           :                                     :
    ───────●───────                       ───────:───────
           :                                     :
           :                                     :
```

> **Figure 2.2** – A solid dot (●) indicates an electrical junction where wires are physically soldered or clamped together. An crossing without a dot indicates insulated wires passing over one another without electrical contact.

```
        Earth (ground) symbol

             :
             :
          ───┴───
           ─────
             ───
```

> **Figure 2.3** – Schematic symbol for Earth (ground): three progressively shorter horizontal lines indicating connection to the Earth's potential.

### Sketching a Simple Circuit

Here is a standard single-loop circuit featuring a cell, an open switch, a lamp, and an inline ammeter:

```
        +─────────(A)─────────+
        :                      :
        :                      :
      ──┬──  (longer line: +) ─⊗─  (lamp)
      ──┴─   (shorter line: −) :
        :                      :
        +───────o    o─────────+
              (open switch)
```

> **Figure 2.4** – A simple series circuit diagram. The longer vertical line of the cell represents the positive terminal. When the switch is closed (`o──o`), current circulates out of the positive terminal, passes through the ammeter and lamp, and returns to the negative terminal.

Notice that **charges flow in a continuous closed loop through the source itself**. This circular journey is precisely why it is termed a *circuit*.

---

## Part C: Open, Closed, and Short Circuits

### Open Circuit
An electric circuit that contains an intentional or accidental break in its pathway (such as an open switch, broken wire, loose screw, or burned-out filament). The electrical resistance across the air gap is infinite; **no electric current flows**, and the load remains inoperative.

### Closed Circuit
An electric circuit with a complete, unbroken conducting pathway from the positive terminal of the power source through the load and back to the negative terminal. **Current flows steadily**, operating the connected loads.

### Short Circuit
A hazardous condition occurring when electric current finds an unintended, near-zero-resistance bypass path directly between the power supply terminals, bypassing the intended load. Common causes include:
- Degraded insulation allowing bare live and neutral wires to touch.
- Accidentally bridging a battery's terminals directly with a metal tool or jumper wire.

Because the resistance of a short circuit is virtually zero, the drawn current surges to **dangerously high levels**. According to Joule's heating effect (Topic 6), this massive current generates intense heat, melting wire insulation and posing severe **fire hazards**. Household electrical systems prevent this by incorporating **fuses** and circuit breakers that trip and isolate the circuit during overcurrent events. **Never connect the two terminals of a battery directly together with a bare wire.**

```
   Open Circuit           Closed Circuit         Short Circuit

   +────⊗────+            +────⊗────+          ●────●────⊗────+
   :         :            :         :          :    :         :
 ──┬──       o          ──┬──       :          :  ──┬──       :
 ──┴─         o         ──┴─        :          :  ──┴─        :
   :         :            :         :          :    :         :
   +─────────+            +─────────+          ●────●─────────+
                                                ↑
                                           bypass wire
   switch open            switch closed        zero-resistance bypass:
   lamp is OFF            lamp is ON           excessive current, lamp dark
```

> **Figure 2.5** – Comparison of open, closed, and short circuits. In a short circuit, an accidental wire bypasses the lamp, drawing dangerous current through the battery loop.

---

## Part D: Solving the Flashlight Mystery

We can now fully explain why Liam's flashlight initially failed to illuminate:

1. **Reversed Cell Orientation:** The two dry cells must be arranged in series (head-to-tail), with the protruding positive pip of the bottom cell contacting the flat negative base of the top cell. When one cell was reversed, its potential opposed the other cell's potential, canceling the driving push and preventing current from circulating (detailed further in Topic 3).
2. **Open Switch Contact:** The bent copper leaf spring created an unintentional physical gap inside the switch mechanism. Even though the slider was pushed ON, the metal contact remained open, resulting in an **open circuit**. Straightening the spring closed the physical contact.
3. **Clean Metal Interfaces:** The base spring, cylinder casing, switch contacts, and bulb casing must form unbroken metallic junctions.

Once all three conditions were satisfied, an unbroken conducting loop was established:  
**Cell $(+)$ terminal $\rightarrow$ switch contact $\rightarrow$ bulb filament $\rightarrow$ metal casing $\rightarrow$ bottom spring $\rightarrow$ Cell $(−)$ terminal**.  
Current flowed immediately, heating the filament to incandescence.

---

## Part E: The Ammeter: Measuring Electric Current

### What is an Ammeter and How is it Connected?

An **ammeter** (short for ampere-meter) is an instrument designed to measure the rate of electric current flowing through a circuit.

Three non-negotiable rules govern the use of an ammeter:
1. **Always connect an ammeter in SERIES with the component being monitored.** To measure current, the circuit path must be physically broken and the ammeter inserted directly inline, ensuring that the entire stream of charges flows through the instrument.
2. **An ideal ammeter has near-zero internal resistance.** A practical ammeter is designed with an extremely small internal resistance so that inserting it into the circuit does not appreciably alter or restrict the current it is trying to measure.
3. **Observe terminal polarity:** Connect the positive ($+$) terminal of the ammeter toward the positive terminal of the power supply, and the negative ($−$) terminal toward the negative terminal. Reversing polarity will drive analog needle pointers backward against their zero-stop peg.

```
        +─────(A)─────+     Ammeter $(+)$ terminal faces cell $(+)$ terminal
        :  (+)    (−)  :
        :              :
      ──┬──           ─⊗─   lamp
      ──┴─             :
        :              :
        +──o──────o────+     closed switch
```

> **Figure 2.6** – Proper series connection of an ammeter. The ammeter forms a single continuous loop with the lamp, cell, and switch.

> [!CAUTION]
> **Never connect an ammeter in parallel directly across a battery or lamp.** Because an ammeter has near-zero internal resistance, connecting it in parallel creates an immediate short circuit, drawing destructive current that can incinerate the ammeter's internal coils.

### Reading an Ammeter Scale (Least Count)

Analog ammeters feature a calibrated needle sweeping over a graduated dial. Determining the measured current requires finding the instrument's **least count (LC)**:

> **$\text{Least Count (LC)} = \frac{\text{Value of Major Scale Division}}{\text{Number of Subdivisions}}$**

For example, on a dial calibrated from $0$ to $1\text{ A}$ with $10$ equal divisions between $0$ and $1$:
$$\text{LC} = \frac{1\text{ A}}{10} = \mathbf{0.1\text{ A}}$$
If the pointer settles on the 6th division mark:
$$\text{Reading} = 6 \times 0.1\text{ A} = \mathbf{0.6\text{ A}}$$

---

## Part F: Effects of Electric Current

Electric current cannot be directly seen; we observe it through its physical consequences. The four primary effects of an electric current are:

| Physical Effect | Mechanism | Practical Application | Detailed Chapter |
|---|---|---|---|
| **Heating effect** | Mobile electrons collide with vibrating lattice atoms, converting electrical energy into thermal kinetic energy | Electric heaters, electric irons, toasters | Topic 6 |
| **Light effect** | Heating a refractory filament to extreme temperatures causes incandescence; electron transitions produce photons | Incandescent bulbs, LEDs | Topic 6 |
| **Magnetic effect** | Moving electric charges generate a concentric magnetic field around the conductor | Electromagnets, electric bells, relays, galvanometers | Magnetism Chapter |
| **Chemical effect** | Passage of current through an electrolyte drives oxidation-reduction chemical reactions | Electroplating, refining metals, recharging batteries | Topic 7 |

These effects often occur simultaneously. For instance, an incandescent bulb emits light as a direct consequence of intense filament heating.

### Direct Current (DC) and Alternating Current (AC)

- **Direct Current (DC):** Electric charges drift continuously in a **single, constant direction** through the circuit. Chemical cells, solar panels, and storage batteries supply DC.
- **Alternating Current (AC):** Electric charges oscillate rapidly **back and forth**, reversing direction at regular periodic intervals. Commercial power plants distribute AC to homes and businesses because it can be stepped up to high voltages for long-distance transmission with minimal power loss. In most of the world, residential AC supply is standard at **$230\text{ V}, 50\text{ Hz}$** (in North America, $120\text{ V}, 60\text{ Hz}$). A frequency of $50\text{ Hz}$ means the current completes 50 full forward-and-backward cycles per second, reversing its direction **100 times every second**.

### Speed of the Signal vs. Drift Speed of Electrons

When you flip a wall switch, the ceiling light illuminates **virtually instantaneously**. Yet in solid copper wires, individual electrons drift at a surprisingly sluggish pace—often less than **one millimeter per second** ($\sim 0.1\text{ mm/s}$)!

How can the light turn on instantly if the electrons move so slowly?

Consider a long garden hose already filled completely with water. The moment you open the outdoor valve, water immediately pours out of the nozzle at the opposite end. You do not have to wait for a specific drop of water to travel the full length of the hose; the pressure wave propagates through the water at the speed of sound. 

Similarly, conducting wires are already packed with trillions of mobile free electrons. The moment the switch closes, an **electromagnetic wave propagates down the wire near the speed of light** ($\sim 3 \times 10^8\text{ m/s}$). This field exerts an immediate electric force on all free electrons simultaneously, setting electrons throughout the circuit—including those inside the lamp filament—into coordinated motion at once.

---

## Part G: Solved Examples

**Example 1 (Direct application of $I = Q / t$):** A steady charge of $12\text{ C}$ flows through the cross-section of a conductor in $4\text{ s}$. Calculate the electric current.

- Given: $Q = 12\text{ C}$, $t = 4\text{ s}$
- $I = \frac{Q}{t} = \frac{12\text{ C}}{4\text{ s}} = \mathbf{3\text{ A}}$

**Check:** $Q = I \times t = 3\text{ A} \times 4\text{ s} = 12\text{ C}$ ✅

---

**Example 2 (Finding charge with time conversion):** A current of $0.5\text{ A}$ flows through an electric lamp for $2\text{ minutes}$. Determine the total electric charge that passes through the lamp.

- Given: $I = 0.5\text{ A}$
- Time must be in SI units (seconds): $t = 2\text{ minutes} = 2 \times 60 = 120\text{ s}$
- $Q = I \times t = 0.5\text{ A} \times 120\text{ s} = \mathbf{60\text{ C}}$

**Check:** $I = \frac{Q}{t} = \frac{60\text{ C}}{120\text{ s}} = 0.5\text{ A}$ ✅ *(Note: Leaving $t = 2$ would yield $1\text{ C}$, which is 60 times too small!)*

---

**Example 3 (Calculating elapsed time):** How long does it take for a current of $1.5\text{ A}$ to transfer $90\text{ C}$ of charge across a circuit?

- Given: $Q = 90\text{ C}$, $I = 1.5\text{ A}$
- $t = \frac{Q}{I} = \frac{90\text{ C}}{1.5\text{ A}} = \mathbf{60\text{ s}} = \mathbf{1\text{ minute}}$

**Check:** $Q = I \times t = 1.5\text{ A} \times 60\text{ s} = 90\text{ C}$ ✅

---

**Example 4 (Number of electrons in a $1\text{ A}$ current):** How many electrons pass through a point in a conductor each second when the current is $1\text{ A}$? ($e = 1.6 \times 10^{-19}\text{ C}$)

- By definition, a current of $1\text{ A}$ for $1\text{ s}$ transfers: $Q = I \times t = 1\text{ A} \times 1\text{ s} = 1\text{ C}$
- Number of electrons: $n = \frac{Q}{e} = \frac{1\text{ C}}{1.6 \times 10^{-19}\text{ C/electron}} = \mathbf{6.25 \times 10^{18}\text{ electrons}}$

**Check:** $(6.25 \times 10^{18}) \times (1.6 \times 10^{-19}\text{ C}) = 1.0\text{ C}$ ✅

---

**Example 5 (Unit conversions for current):** Express:  
(a) $250\text{ mA}$ in amperes ($\text{A}$)  
(b) $500\text{ }\mu\text{A}$ in amperes ($\text{A}$)  
(c) $0.03\text{ A}$ in milliamperes ($\text{mA}$)

- (a) $250\text{ mA} = 250 \times 10^{-3}\text{ A} = \mathbf{0.25\text{ A}}$
- (b) $500\text{ }\mu\text{A} = 500 \times 10^{-6}\text{ A} = \mathbf{0.0005\text{ A}} = \mathbf{5 \times 10^{-4}\text{ A}}$
- (c) $0.03\text{ A} = 0.03 \times 1000\text{ mA} = \mathbf{30\text{ mA}}$

**Check:** (a) $0.25 \times 1000 = 250\text{ mA}$; (b) $0.0005 \times 10^6 = 500\text{ }\mu\text{A}$; (c) $30 / 1000 = 0.03\text{ A}$ ✅

---

**Example 6 (Charge transferred over an extended period):** An electric motor draws $2\text{ A}$ of current continuously for $1\text{ hour}$. How many coulombs of charge pass through the motor?

- Given: $I = 2\text{ A}$, $t = 1\text{ hour} = 3600\text{ s}$
- $Q = I \times t = 2\text{ A} \times 3600\text{ s} = \mathbf{7200\text{ C}}$

**Check:** $I = \frac{7200\text{ C}}{3600\text{ s}} = 2\text{ A}$ ✅

---

**Example 7 (Total electrons transferred):** A current of $0.8\text{ A}$ is maintained in a wire for $5\text{ s}$. How many electrons cross the conductor's cross-section during this time? ($e = 1.6 \times 10^{-19}\text{ C}$)

- Total charge: $Q = I \times t = 0.8\text{ A} \times 5\text{ s} = 4\text{ C}$
- Number of electrons: $n = \frac{Q}{e} = \frac{4\text{ C}}{1.6 \times 10^{-19}\text{ C/electron}} = \mathbf{2.5 \times 10^{19}\text{ electrons}}$

**Check:** $(2.5 \times 10^{19}) \times (1.6 \times 10^{-19}\text{ C}) = 4.0\text{ C}$ ✅

---

**Example 8 (Determining current from an ammeter scale):** An analog ammeter dial has a range from $0$ to $5\text{ A}$ divided uniformly into $50$ subdivisions. When inserted in a circuit, the needle indicates the 27th mark. What is the circuit current?

- $\text{Least Count (LC)} = \frac{\text{Total Range}}{\text{Number of Divisions}} = \frac{5\text{ A}}{50} = \mathbf{0.1\text{ A/div}}$
- $\text{Current Reading} = 27 \times 0.1\text{ A} = \mathbf{2.7\text{ A}}$

**Check:** $27\text{ divisions} \times 0.1\text{ A/div} = 2.7\text{ A}$, which lies correctly between $2.0\text{ A}$ (20 div) and $3.0\text{ A}$ (30 div) ✅

---

**Example 9 (Classifying circuit components):** Categorize each device into its functional role: (a) electrochemical cell, (b) acoustic buzzer, (c) toggle switch, (d) digital ammeter, (e) DC motor, (f) 12 V car battery.

- (a) Cell: **Energy Source**
- (b) Buzzer: **Electrical Load** (converts electrical energy into sound)
- (c) Toggle switch: **Control Device** (opens or closes the conducting loop)
- (d) Digital ammeter: **Measuring Instrument**
- (e) DC motor: **Electrical Load** (converts electrical energy into rotational motion)
- (f) 12 V battery: **Energy Source**

**Check:** Energy sources provide electric potential; loads consume energy; switches control continuity ✅

---

**Example 10 (Schematic diagram description and sketch):** Describe in words and sketch a complete series circuit containing a single cell, an open switch, an ammeter, and an incandescent lamp.

*Verbal Description:* A conducting wire leaves the longer vertical positive line of the cell and connects to the positive terminal of an ammeter. The negative terminal of the ammeter connects to one terminal of the incandescent lamp. From the lamp, a wire leads to one terminal of the open switch. The remaining terminal of the switch connects back to the shorter negative plate of the cell.

```
        +───────(A)───────+
        :                 :
      ──┬──              ─⊗─
      ──┴─                :
        :                 :
        +────o      o─────+
```

> **Figure 2.7** – Series circuit schematic with cell, ammeter, lamp, and open switch.

**Check:** Single closed loop, ammeter inline (series), proper cell plate conventions ✅

---

**Example 11 (Charges and electrons in micro-electronics):** An indicator LED carries a forward current of $20\text{ mA}$ for $10\text{ s}$. Find the total charge delivered and the corresponding count of electrons. ($e = 1.6 \times 10^{-19}\text{ C}$)

- Convert current to amperes: $I = 20\text{ mA} = 20 \times 10^{-3}\text{ A} = 0.02\text{ A}$
- Charge: $Q = I \times t = 0.02\text{ A} \times 10\text{ s} = \mathbf{0.2\text{ C}}$
- Number of electrons: $n = \frac{0.2\text{ C}}{1.6 \times 10^{-19}\text{ C/electron}} = \mathbf{1.25 \times 10^{18}\text{ electrons}}$

**Check:** $(1.25 \times 10^{18}) \times (1.6 \times 10^{-19}\text{ C}) = 0.2\text{ C}$ ✅

---

## Common Pitfalls to Avoid

1. **Mistake 1: Believing that electric current is "used up" by a lamp or appliance.**  
   *Correction:* Electric current is the rate of flow of charge, and charge is strictly conserved. Every electron that enters a lamp filament also exits the filament and returns to the power supply. The current leaving a lightbulb is **exactly equal** to the current entering it. What is consumed is not the charge, but the **electrical energy** carried by the charges, which is converted into heat and light.

2. **Mistake 2: Connecting an ammeter in parallel across a load or voltage source.**  
   *Correction:* An ammeter has near-zero internal resistance. Connecting it in parallel acts as a short circuit across the source, which will draw a surge of current and destroy the meter. An ammeter must **always be connected in series**.

3. **Mistake 3: Asserting that electrons flow from positive to negative in metals.**  
   *Correction:* In solid metal wires, negative electrons are repelled by the negative terminal and attracted toward the positive terminal. However, **conventional current** is defined from positive to negative. Always distinguish between actual electron drift and conventional current.

4. **Mistake 4: Believing a switch must be placed strictly on the positive wire.**  
   *Correction:* A circuit is an unbroken series loop. An open switch halts current regardless of whether it is positioned on the positive or negative wire. (In household mains AC wiring, the switch is placed on the live wire for electrical shock safety, as discussed in Topic 7).

5. **Mistake 5: Failing to convert milliamperes ($\text{mA}$) into amperes ($\text{A}$).**  
   *Correction:* When calculating $Q = I \times t$, $I$ must be expressed in amperes ($\text{A}$). Treating $250\text{ mA}$ as $250\text{ A}$ will lead to answers that are off by a factor of 1000.

6. **Mistake 6: Thinking a chemical cell stores physical electric charge.**  
   *Correction:* A chemical cell stores **chemical energy**. It does not pump "stored charges" into a wire; the conducting wire is already packed with free electrons. The cell simply provides the electrical potential push that sets those existing electrons into motion.

---

## Quick Recap

- **Electric current ($I$)** is the rate of flow of electric charge: **$I = \frac{Q}{t}$**.
- The SI unit of electric current is the **ampere ($\text{A}$)**; $1\text{ A} = 1\text{ C/s}$. Common sub-multiples: $1\text{ mA} = 10^{-3}\text{ A}$ and $1\text{ }\mu\text{A} = 10^{-6}\text{ A}$.
- In metal conductors, free electrons drift from the **negative terminal to the positive terminal**. By historical convention, **conventional current** is indicated in the opposite direction, from **positive to negative**.
- In liquid electrolytes, electric current is carried by both positive and negative ions.
- An **electric circuit** is a closed, continuous conducting loop. Core components: source (cell/battery), conductors (wires), switch, and load (lamp, motor, buzzer).
- An **open circuit** contains a break (switch OFF); no current flows. A **closed circuit** provides an unbroken path (switch ON).
- A **short circuit** is an accidental zero-resistance pathway bypassing the load, causing dangerous current surges that can ignite fires.
- An **ammeter** measures electric current, has near-zero resistance, and must **always be connected in series** with correct polarity.
- Scale reading on an analog meter relies on its **least count**: $\text{LC} = \frac{\text{Range}}{\text{Divisions}}$.
- The four primary effects of an electric current: **heating**, **chemical**, **magnetic**, and **lighting**.
- **DC (Direct Current)** flows unidirectionally (supplied by cells/batteries). **AC (Alternating Current)** alternates direction periodically ($230\text{ V}, 50\text{ Hz}$ in India/Europe; reverses 100 times per second).
- Flipping a switch lights a bulb instantly because the electric field signal travels through the wire near the speed of light, even though individual electrons have a tiny drift speed ($\sim 0.1\text{ mm/s}$).

---

## Practice Questions

1. A net electric charge of $20\text{ C}$ passes through a cross-section of a wire in $5\text{ s}$. Calculate the electric current.

2. An electric lamp draws a steady current of $0.25\text{ A}$ for $4\text{ minutes}$. Calculate the total quantity of charge that passes through the lamp filament.

3. How long will it take for a current of $2\text{ A}$ to transfer $600\text{ C}$ of charge past a reference point in a conductor? State your answer in seconds and in minutes.

4. Perform the following conversions:  
   (a) $450\text{ mA}$ to $\text{A}$  
   (b) $0.002\text{ A}$ to $\text{mA}$  
   (c) $75\text{ }\mu\text{A}$ to $\text{A}$

5. An electric heater draws a current of $1.5\text{ A}$ continuously for $2\text{ hours}$. Calculate the total electric charge supplied to the heater in coulombs.

6. How many electrons pass through a given point in a conductor each second when the current is $2\text{ A}$? ($e = 1.6 \times 10^{-19}\text{ C}$)

7. A current of $0.4\text{ A}$ flows through an appliance for $20\text{ s}$. Determine:  
   (a) The total charge transferred.  
   (b) The total number of electrons involved in this transfer.

8. An analog ammeter dial reads from $0$ to $2\text{ A}$ with $40$ uniform divisions across its scale.  
   (a) Calculate its least count.  
   (b) If the needle points to the 33rd division, what is the measured current?

9. Classify each of the following components as an energy source, an electrical load, a control device, or a measuring device: (a) automotive battery, (b) electric chime bell, (c) knife switch, (d) digital ammeter, (e) miniature flashlight bulb.

10. Draw a schematic circuit diagram showing a single cell, an ammeter, a closed switch, and an incandescent lamp connected in series. Clearly indicate with labeled arrows the direction of conventional current and the direction of actual electron drift.

11. State whether each statement is True or False:  
    (a) A short circuit draws a negligibly small current from the source.  
    (b) Free electrons in a copper wire drift from the positive terminal toward the negative terminal.  
    (c) An ammeter must always be connected in series with the component whose current is being measured.  
    (d) A lightbulb consumes electric current, so less current returns to the cell than leaves it.  
    (e) One ampere is equivalent to one coulomb per second ($1\text{ A} = 1\text{ C/s}$).

12. Identify the primary physical effect of electric current at work in each situation:  
    (a) An electric clothes iron heating up.  
    (b) Electroplating a brass spoon with pure silver.  
    (c) A magnetic compass needle deflecting when placed near a live electrical wire.  
    (d) A glowing incandescent lamp filament.

13. A student constructs a circuit with a fresh cell and an undamaged bulb, yet the bulb fails to light up. List three distinct possible causes and explain how to diagnose each one.

14. The residential mains power supply in many countries is rated at $230\text{ V}, 50\text{ Hz}$. Is this direct current (DC) or alternating current (AC)? How many times per second does the direction of current reverse?

---

### Answers

1. $I = \frac{Q}{t} = \frac{20\text{ C}}{5\text{ s}} = \mathbf{4\text{ A}}$.  
   *Check:* $4\text{ A} \times 5\text{ s} = 20\text{ C}$ ✅

2. Convert time to seconds: $t = 4\text{ min} = 4 \times 60 = 240\text{ s}$.  
   $Q = I \times t = 0.25\text{ A} \times 240\text{ s} = \mathbf{60\text{ C}}$.  
   *Check:* $60\text{ C} / 240\text{ s} = 0.25\text{ A}$ ✅

3. $t = \frac{Q}{I} = \frac{600\text{ C}}{2\text{ A}} = \mathbf{300\text{ s}} = \frac{300}{60} = \mathbf{5\text{ minutes}}$.  
   *Check:* $2\text{ A} \times 300\text{ s} = 600\text{ C}$ ✅

4. (a) $450\text{ mA} = 450 \times 10^{-3}\text{ A} = \mathbf{0.45\text{ A}}$  
   (b) $0.002\text{ A} = 0.002 \times 1000\text{ mA} = \mathbf{2\text{ mA}}$  
   (c) $75\text{ }\mu\text{A} = 75 \times 10^{-6}\text{ A} = \mathbf{0.000075\text{ A}} = \mathbf{7.5 \times 10^{-5}\text{ A}}$  
   *Check:* $0.45 \times 1000 = 450$; $2 / 1000 = 0.002$; $7.5 \times 10^{-5} \times 10^6 = 75$ ✅

5. $t = 2\text{ h} = 2 \times 3600 = 7200\text{ s}$.  
   $Q = I \times t = 1.5\text{ A} \times 7200\text{ s} = \mathbf{10{,}800\text{ C}}$.  
   *Check:* $10{,}800 / 7200 = 1.5\text{ A}$ ✅

6. In $1\text{ s}$, $Q = 2\text{ A} \times 1\text{ s} = 2\text{ C}$.  
   $n = \frac{2\text{ C}}{1.6 \times 10^{-19}\text{ C/electron}} = \mathbf{1.25 \times 10^{19}\text{ electrons per second}}$.  
   *Check:* $(1.25 \times 10^{19}) \times (1.6 \times 10^{-19}) = 2.0\text{ C}$ ✅

7. (a) $Q = I \times t = 0.4\text{ A} \times 20\text{ s} = \mathbf{8\text{ C}}$.  
   (b) $n = \frac{8\text{ C}}{1.6 \times 10^{-19}\text{ C/electron}} = \mathbf{5 \times 10^{19}\text{ electrons}}$.  
   *Check:* $(5 \times 10^{19}) \times (1.6 \times 10^{-19}) = 8.0\text{ C}$ ✅

8. (a) $\text{Least Count} = \frac{2\text{ A}}{40\text{ divisions}} = \mathbf{0.05\text{ A/division}}$.  
   (b) $\text{Reading} = 33 \times 0.05\text{ A} = \mathbf{1.65\text{ A}}$.  
   *Check:* $1.65 / 0.05 = 33$ divisions ✅

9. (a) Automotive battery: **Energy Source**  
   (b) Electric chime bell: **Electrical Load**  
   (c) Knife switch: **Control Device**  
   (d) Digital ammeter: **Measuring Instrument**  
   (e) Miniature flashlight bulb: **Electrical Load**

10. *Description:* A single closed loop connects the cell's positive terminal to the ammeter, then through the lamp, through the closed switch, and back to the cell's negative terminal.  
    - **Conventional current arrow:** Points clockwise from the positive terminal toward the negative terminal.  
    - **Electron drift arrow:** Points counter-clockwise from the negative terminal toward the positive terminal.

```
        +───────(A)───────+    ──► Conventional Current
        :                 :
      ──┬──              ─⊗─
      ──┴─                :
        :                 :
        +────o─────o──────+    ◄── Actual Electron Drift
```

11. (a) **False** ❌. A short circuit provides near-zero resistance, resulting in an enormous current surge.  
    (b) **False** ❌. In metals, electrons drift from negative to positive.  
    (c) **True** ✅. An ammeter must be inserted in series so that all current passes through it.  
    (d) **False** ❌. Charge is conserved; the current entering a bulb exactly equals the current leaving it.  
    (e) **True** ✅. By definition, $1\text{ A} = 1\text{ C/s}$.

12. (a) **Heating effect**.  
    (b) **Chemical effect** (electrolysis/electrodeposition).  
    (c) **Magnetic effect** (electromagnetism).  
    (d) **Lighting effect** (incandescence produced by Joule heating).

13. Three potential causes:  
    (i) *Reversed cell orientation:* Check cell polarities to ensure positive connects to negative in series.  
    (ii) *Loose wire connection or open switch gap:* Inspect all terminal screws and mechanical switch contacts with a continuity tester.  
    (iii) *Broken bulb filament:* Visually inspect the filament under magnification or test the bulb in a known working circuit.

14. It is **Alternating Current (AC)**. At a frequency of $50\text{ Hz}$, the current completes 50 full cycles each second. Because direction reverses twice per complete cycle, the direction reverses **100 times per second**.

---

Now you can explain to Liam why his flashlight failed to illuminate: an upside-down cell opposed the circuit's electrical push, and a bent switch contact created an open circuit gap. In electricity, everything relies on maintaining a continuous conducting loop.

**What lies ahead?** We know that current flows through closed circuits. But what drives the charges through the wire in the first place? What property of a cell pushes electrons through the resistance of a lamp? In Topic 3, we investigate the driving "pressure" behind all electric current: **electric potential difference and voltage**.
