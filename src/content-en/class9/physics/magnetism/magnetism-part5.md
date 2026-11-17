# Chapter: Magnetism (Part 5)

> **Class:** 9 | **Subject:** Physics
> **Preceded by:** [magnetism-part4.md](magnetism-part4.md) (covered magnetic effect of current, solenoids, and their poles). The chapter began in [magnetism.md](magnetism.md). For soft iron vs steel, see [magnetism-part3.md](magnetism-part3.md). For Joule heating, see [electricity-part6.md](../electricity/electricity-part6.md). For weight ($W = mg$), see [gravitation-part5.md](../gravitation/gravitation-part5.md). For sound and vibrating diaphragms, see [sound.md](../sound/sound.md).
> **Topics covered in this file:**
> 5. Electromagnets and Their Applications

---

# Topic 5: Electromagnets and Their Applications

In the previous topic, we discovered that when an electric current passes through a cylindrical coil of wire (a solenoid), the coil generates a magnetic field virtually identical to that of a permanent bar magnet: one end acts as a North pole, the opposite end acts as a South pole, and the polarity can be identified using the Right-Hand Grip Rule. At the close of that topic, we raised an exciting possibility: **what happens if we place a solid iron bar inside the hollow core of that energized solenoid?**

In this topic, we investigate the answer to that question. By combining a conducting coil with a soft iron core, we create an **electromagnet**—a controllable, powerhouse magnet that can be switched on, adjusted in strength, and switched off in a fraction of a second. We will examine how electromagnets are constructed, what governs their lifting capacity, why soft iron is essential, and how this brilliant invention drives modern technology: from industrial scrapyard cranes and electric doorbells to audio speakers and hospital MRI scanners.

---

## The Scrapyard Crane

On a brisk Saturday morning, Liam accompanied his uncle, Mr. Henderson, to an industrial metal recycling depot where Mr. Henderson operated a heavy electric gantry crane. Suspended from the crane's steel cables hung a massive, flat, circular steel disc. Liam stood at a safe observation barrier, watching the machinery with eager eyes.

Mr. Henderson gripped the control levers inside the elevated cabin and pressed a red button on his console. The heavy circular disc lowered until it rested squarely on a chaotic mountain of crushed car bodies and rusted steel girders. A moment later, Mr. Henderson engaged the hoist. 

Liam's eyes opened wide in disbelief: **as the disc rose into the air, five entire crushed car frames—tons of twisted steel—clung securely to its underside, hoisted high above the ground!**

The crane swung smoothly across the yard until the magnetic disc was suspended over an empty haulage truck. Mr. Henderson released the button. **CLANG!** With a deafening crash, the entire load released instantly, dropping cleanly into the bed of the truck.

Liam ran up to the cabin as his uncle stepped down for a tea break. "Uncle Henderson, that disc looked like a magnet, but how did it do that? A real magnet stays sticky forever. If you stick a refrigerator magnet to metal, it never lets go on its own. How did your crane pick up five cars one second, and then completely drop them the next?"

Mr. Henderson chuckled warmly. "That disc is no ordinary permanent magnet, Liam. It is an **electromagnet**—a magnet powered purely by electric current. When electricity flows, it grips tighter than anything on Earth; the moment I cut the current, its magnetism vanishes completely. Come along, let us explore the physics behind it, and by the end of the day, you will be able to explain the entire operation yourself!"

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Electromagnet** | A temporary magnet consisting of an insulated wire coil wound around a soft iron core, which becomes magnetized only while an electric current flows through the coil | The lifting disc of a scrap metal crane |
| **Core** | The piece of magnetic material (typically soft iron) placed inside the hollow interior of a coil to intensify the magnetic field | An iron bolt inserted inside a wire helix |
| **Soft iron** | An easily magnetized iron alloy that attains high magnetic induction but loses virtually all residual magnetism the instant the magnetizing field ceases | The core material used in transformers and electromagnets |
| **Turns** | The individual circular loops or convolutions of conducting wire making up a coil | A 200-turn coil of copper wire |
| **Insulated (enamelled) wire** | Conducting metal wire coated with a thin, non-conductive layer of lacquer or enamel to prevent short-circuits between adjacent turns | Magnet wire used for winding motors and solenoids |
| **Armature** | A movable piece of soft iron positioned near an electromagnet that is physically displaced by magnetic attraction when the coil is energized | The vibrating iron striker arm inside an electric bell |
| **Relay** | An electrically operated switch that uses a low-power control current to open or close contacts in a separate high-power circuit | An automotive starter relay switch |
| **Contact screw** | An adjustable conducting screw that completes or breaks an electric circuit through physical contact with a moving armature | The interrupter screw in a classic trembler bell |

---

## Part A: What is an Electromagnet?

### Coil + Soft Iron Core

In Topic 4, we observed that an electric current flowing through an air-core solenoid generates a magnetic field. While that field is real and detectable with a compass, it is relatively weak: an air-core solenoid wound on a cardboard tube can barely lift a tiny paperclip.

Now, imagine inserting a rod of **soft iron** (such as an iron nail, cylinder, or laminated iron bar) into the centre of the coil. Structurally, this is a minor addition; physically, the effect is monumental:

- When an electric current flows through the coil, the coil's magnetic field penetrates the soft iron core. 
- As established in [magnetism-part3.md](magnetism-part3.md), ferromagnetic materials like iron contain countless microscopic regions called **magnetic domains**, each acting like an atomic magnet. In unmagnetized iron, these domains point in random directions, cancelling each other out.
- The external magnetic field of the coil exerts magnetic torques on these domains, **forcing them to align parallel to the coil's field**. 
- The aligned domains generate an immense internal magnetic field of their own that superimposes onto the coil's field. Consequently, the combined magnetic field of an iron-core electromagnet is **hundreds to thousands of times stronger** than that of the empty coil alone!
- When the electric current is switched off, the coil's field collapses. Because **soft iron has very low magnetic retentivity (coercivity)**, its domains instantly drop out of alignment due to thermal agitation, and the iron loses virtually all of its magnetism. Any steel objects adhering to it immediately fall away.

> An **electromagnet** consists of a coil of insulated wire wound around a soft iron core, connected to an electric current source (cell, battery, or DC power supply) and a switch.  
> **Current ON:** It becomes an extraordinarily powerful magnet.  
> **Current OFF:** Its magnetism ceases almost instantaneously.

### Construction

```
                        soft iron core (nail or rod)
          ┌────────────────────────────────────────────────────────┐
    ┌─────┤ (((((((((((((((((((((((((((((((((((((((((((((((((((((( ├─────┐
    │     └────────────────────────────────────────────────────────┘     │
    │                    closely wound insulated wire turns              │
    │                                                                    │
    o                                                                   ─┴─
     \  knife switch                                                    ─┬─  DC power source
    o                                                                    │
    │                                                                    │
    └────────────────────── insulated copper wire ───────────────────────┘
          (switch closed: current flows, core becomes strongly magnetic)
```

> **Figure 5.1** – A straight-bar electromagnet: insulated wire wound in tight convolutions around a soft iron rod, connected through a switch to a DC power supply.

Another widely used geometry is the **horseshoe (or C-shaped) electromagnet**. In this design, the soft iron core is bent into a U-shape, and separate coils are wound around its two limbs. The coils are connected such that current circulates in opposite senses around the two limbs, producing a **North pole on one limb and a South pole on the other**:

```
        coil 1                                 coil 2
       @@@@@@@@                               @@@@@@@@
     ┌═══════════╗                         ╔═══════════┐
     ║                                                 ║
     ║               soft iron core                    ║
     ║               (horseshoe / U)                   ║
     ║                                                 ║
     ╚═══╗                                         ╔═══╝
         ║                                         ║
         N                                         S
      (pole)                                    (pole)
         └────── narrow air gap: both poles pull together ─────┘
```

> **Figure 5.2** – A horseshoe electromagnet: two limbs wound in opposite senses, bringing the North and South poles close together to provide a powerful, concentrated magnetic grip on iron objects bridging the gap.

*Advantage of the horseshoe design:* In a straight bar electromagnet, the North and South poles are far apart at opposite ends, so an iron object usually contacts only one pole. In a horseshoe electromagnet, **both magnetic poles are adjacent**, allowing both poles to exert simultaneous attractive forces on the same piece of iron, multiplying the effective lifting capacity.

### Determining the Magnetic Poles

The polarity of an electromagnet follows the exact same rules established for solenoids in Topic 4:
1. **Right-Hand Grip Rule:** Wrap the fingers of your right hand around the coil in the direction of conventional current; your outstretched thumb points toward the **North pole**.
2. **Clock Rule:** Look directly into one pole face:
   - If current flows in a **counter-clockwise (anticlockwise)** circle, that end face is a **North pole ($N$)**.
   - If current flows in a **clockwise** circle, that end face is a **South pole ($S$)**.

---

## Part B: Activity: Lifting Steel Pins with an Iron Nail

To demonstrate the physics of an electromagnet experimentally, we can build a simple laboratory prototype:

**Apparatus Required:**
- One large, unrusted soft iron nail or bolt (approx. $8\text{ cm}$ to $10\text{ cm}$ long).
- A spool of thin insulated (enamelled) copper wire (28 to 32 AWG).
- One or two $1.5\text{ V}$ dry cells in a battery holder.
- A small dish of steel dressmaker pins or small paperclips.

**Essential Safety Instructions:**
- Connect the circuit for **only 5 to 10 seconds at a time**. Because the wire offers low resistance, current is high, causing the wire and battery to grow warm. Count the lifted pins and disconnect the battery lead immediately.
- **NEVER connect any homemade coil to household wall sockets or mains power!** Mains voltage ($110\text{--}240\text{ V}$) will cause instantaneous short-circuits, severe electrical burns, electrocution, or fire.
- Do not use high-capacity automotive lead-acid car batteries.

**Procedure:**
1. Wind 10 neat, tightly packed turns of insulated wire around the centre of the iron nail, winding in a single continuous direction. Strip $1\text{ cm}$ of enamel insulation off both wire ends using sandpaper.
2. Connect the wire ends across a single $1.5\text{ V}$ cell. Lower the tip of the nail into the pile of steel pins. Lift the nail and record the number of pins clinging to its tip.
3. Disconnect one wire from the battery: observe how the pins drop immediately.
4. Add 10 more turns along the nail (total: 20 turns) and repeat the trial with 1 cell.
5. Finally, connect two $1.5\text{ V}$ cells in series ($3.0\text{ V}$ total) to the 20-turn coil and repeat the test.

**Representative Experimental Data:**

| Coil Turns ($N$) | Cells Connected ($V$) | Steel Pins Lifted |
|---|---|---|
| 10 turns | 1 cell ($1.5\text{ V}$) | 4 pins |
| 20 turns | 1 cell ($1.5\text{ V}$) | 9 pins |
| 20 turns | 2 cells in series ($3.0\text{ V}$) | 18 pins |

**Observations and Deductions:**
- Doubling the number of turns from 10 to 20 roughly doubled the lifting capacity (from 4 to 9 pins).
- Doubling the voltage (which doubles the current) for the 20-turn coil doubled the lifting capacity again (from 9 to 18 pins).
- The moment the circuit was disconnected, the pins fell off immediately, demonstrating that soft iron acts as a temporary magnet that releases its magnetic grip the instant current ceases.

---

## Part C: Factors Affecting the Strength of an Electromagnet (Class 10 Overlap)

The magnetic strength (and lifting capacity) of an electromagnet depends systematically on four primary factors:

1. **Number of wire turns ($N$):** Increasing the number of turns wrapped around the core strengthens the field. Each additional turn adds its own magnetic contribution to the total magnetizing field.
2. **Magnitude of the electric current ($I$):** Increasing the current—either by increasing the driving voltage or by using thicker wire with lower resistance—proportionally intensifies the magnetic field ($B \propto I$). *(Precaution: greater current generates more Joule heat, $H = I^2Rt$, which must be managed).*
3. **Quality and cross-sectional area of the soft iron core:** Soft iron possesses high magnetic permeability ($\mu_r \gg 1$), channelling and concentrating the magnetic flux lines. A thicker, well-fitted iron core supports a substantially stronger magnetic saturation limit.
4. **Distance between pole faces:** Decreasing the air gap between poles (as in a horseshoe electromagnet) concentrates the magnetic field lines into a compact volume, dramatically increasing the holding force on ferromagnetic loads.

```
 Number of steel pins lifted in laboratory demonstration:

 10 turns, 1 cell : ####                 (4 pins)
 20 turns, 1 cell : #########            (9 pins)
 20 turns, 2 cells: ##################   (18 pins)
```

> **Figure 5.3** – Graphic comparison showing how increasing turns and electric current substantially increases the magnetic lifting capacity of an electromagnet (each `#` represents 1 steel pin).

---

## Part D: Why is an Electromagnet Superior to a Permanent Magnet?

In modern industrial engineering, electromagnets offer decisive operational advantages over permanent magnets:

| Operational Parameter | Permanent Magnet | Electromagnet |
|---|---|---|
| **Controllability of Strength** | Field strength is fixed and unchangeable | Field strength can be continuously adjusted by varying the electric current or turns |
| **Instant ON / OFF Control** | Always permanently "ON"; cannot be switched off | Can be switched ON and OFF instantaneously with an electrical switch |
| **Reversibility of Poles** | Fixed North and South poles | Polarity can be reversed instantly by reversing the current direction |
| **Maximum Achievable Strength** | Limited by natural material properties; bulky for high strengths | Can be engineered to be extraordinarily powerful, lifting tens of metric tons |
| **Operating Energy Cost** | Zero continuous electrical power required | Requires continuous electrical power while energized |

**Engineering Limitations of Electromagnets:**
- **Continuous Power Consumption:** An electromagnet requires a constant supply of electrical energy to maintain its field. If power fails, the magnetic hold is lost instantly (a safety hazard requiring backup mechanical clamps).
- **Joule Heating:** The electrical resistance of the copper winding generates heat ($H = I^2Rt$, as covered in [electricity-part6.md](../electricity/electricity-part6.md)). Heavy industrial electromagnets require active oil or water cooling to prevent thermal damage to the wire insulation.

---

## Part E: Solved Examples

**Example 1 (Determining Core Polarity from Current Direction):**  
An insulated coil is wound around an iron nail lying horizontally. An observer looks directly into the specified end face. Determine the magnetic polarity of both ends:

| Case | End Observed | Current Circulation Seen | Observed End Polarity | Opposite End Polarity |
|---|---|---|---|---|
| (a) | Right end | Counter-clockwise | **North (N)** | **South (S)** |
| (b) | Right end | Clockwise | **South (S)** | **North (N)** |
| (c) | Left end | Counter-clockwise | **North (N)** | **South (S)** |
| (d) | Left end | Clockwise | **South (S)** | **North (N)** |

*Step-by-step reasoning:* By the Clock Rule, counter-clockwise current circulation always indicates a North pole, while clockwise circulation always indicates a South pole. Because magnetic flux lines are continuous closed loops, every electromagnet must possess one North pole and one South pole; they can never have both ends as North poles.  
*Consistency check:* Applying the Right-Hand Grip Rule confirms that curled fingers matching the current yield an outstretched thumb pointing toward the North pole identified above $\checkmark$.

---

**Example 2 (Effect of Reversing Battery Polarity):**  
The connections to the battery powering an electromagnet are reversed. What happens to (a) the magnetic polarity of the poles, and (b) the lifting strength of the magnet?

*Solution:*
- (a) Reversing the battery terminals reverses the direction of current flowing through every turn of the coil. By the Clock Rule and Right-Hand Grip Rule, the end that was previously a North pole becomes a **South pole**, and the previous South pole becomes a **North pole**.
- (b) Because the battery voltage and coil resistance remain unchanged, the numerical magnitude of the current ($I = V/R$) is identical. Therefore, the magnetic field strength and the **lifting capacity remain completely unchanged**. It will lift the exact same number of steel pins.

*Consistency check:* Magnetic force on unmagnetized steel pins depends on $B^2$ (or $|B|$), which is unaffected by reversing field orientation $\checkmark$.

---

**Example 3 (Analyzing Experimental Pin-Lifting Ratios):**  
Using the data recorded in Part B:
1. Calculate the ratio of pins lifted when turns are doubled from 10 to 20 (with 1 cell).
2. Calculate the ratio of pins lifted when voltage is doubled from 1 cell to 2 cells (with 20 turns).
3. Calculate the overall ratio when both turns and voltage are doubled simultaneously.

*Solution:*
1. $\text{Ratio}_{\text{turns}} = \frac{9\text{ pins}}{4\text{ pins}} = 2.25$
2. $\text{Ratio}_{\text{voltage}} = \frac{18\text{ pins}}{9\text{ pins}} = 2.0$
3. $\text{Ratio}_{\text{both}} = \frac{18\text{ pins}}{4\text{ pins}} = 4.5$

*Analysis:* Doubling turns approximately doubles strength ($\approx 2\times$); doubling voltage (current) doubles strength ($\approx 2\times$); doubling both quadruples strength ($2.25 \times 2.0 = 4.5 \approx 4\times$). Minor deviations arise from small experimental variations and discrete pin masses.  
*Consistency check:* $4 \times 4.5 = 18\text{ pins} \checkmark$.

---

**Example 4 (Calculating Coil Turns and Wire Length):**  
An enamelled copper wire of diameter $0.5\text{ mm}$ ($0.05\text{ cm}$) is wound in a single, tight layer along a $6\text{ cm}$ length of an iron nail. 
1. How many turns will fit along this length?
2. If the nail has a diameter of $5\text{ mm}$ ($0.5\text{ cm}$), calculate the approximate total length of wire required.

*Solution:*
1. Number of turns per centimetre:
   $$n = \frac{1\text{ cm}}{0.05\text{ cm/turn}} = 20\text{ turns/cm}$$
   Total turns over $6\text{ cm}$:
   $$N = 6\text{ cm} \times 20\text{ turns/cm} = 120\text{ turns}$$
2. Circumference of one turn around the nail:
   $$C = \pi \times d = 3.1416 \times 0.5\text{ cm} = 1.5708\text{ cm} \quad (0.0157\text{ m})$$
   Total wire length for 120 turns:
   $$L_{\text{total}} = 120 \times 1.5708\text{ cm} = 188.5\text{ cm} \approx 1.89\text{ m} \quad (\approx 1.9\text{ m})$$

*Consistency check:* $120\text{ turns} \times 0.5\text{ mm} = 60\text{ mm} = 6\text{ cm} \checkmark$.

---

**Example 5 (Calculating Current in an Electromagnet Coil):**  
An electromagnet coil wound from insulated copper wire has an electrical resistance of $12\ \Omega$. It is connected across a $6\text{ V}$ battery pack.
1. Calculate the current drawn by the coil.
2. What would the current be if the power source were reduced to three $1.5\text{ V}$ cells ($4.5\text{ V}$)?

*Solution:*
1. By Ohm's Law ($I = V/R$):
   $$I_1 = \frac{6\text{ V}}{12\ \Omega} = 0.5\text{ A}$$
2. For $V_2 = 4.5\text{ V}$:
   $$I_2 = \frac{4.5\text{ V}}{12\ \Omega} = 0.375\text{ A}$$
   With reduced current, the magnetizing field and lifting power decrease proportionally.

*Consistency check:* $0.5\text{ A} \times 12\ \Omega = 6\text{ V} \checkmark$; $0.375\text{ A} \times 12\ \Omega = 4.5\text{ V} \checkmark$.

---

**Example 6 (Calculating Joule Heat Generated in a Coil):**  
Calculate the electrical thermal energy (heat) generated in the $12\ \Omega$ coil of Example 5 ($I = 0.5\text{ A}$) over operating intervals of:
1. $1\text{ minute}$ ($60\text{ s}$).
2. $10\text{ minutes}$ ($600\text{ s}$).

*Solution:*
Using Joule's Law of Heating ($H = I^2 R t$, from [electricity-part6.md](../electricity/electricity-part6.md)):
1. For $t_1 = 60\text{ s}$:
   $$H_1 = (0.5\text{ A})^2 \times 12\ \Omega \times 60\text{ s} = 0.25 \times 12 \times 60 = 3\text{ W} \times 60\text{ s} = 180\text{ J}$$
2. For $t_2 = 600\text{ s}$:
   $$H_2 = 3\text{ W} \times 600\text{ s} = 1800\text{ J}$$

*Physics Insight:* An electrical power of $3\text{ W}$ continuously warms the coil and iron core. In large industrial magnets operating at hundreds of amperes, heating becomes severe ($H \propto I^2$), requiring forced air or liquid cooling systems.  
*Consistency check:* $1800\text{ J} / 180\text{ J} = 10 \checkmark$.

---

**Example 7 (Lifting Force of a Scrapyard Crane Magnet):**  
A crushed car body has a mass of $800\text{ kg}$. (Take acceleration due to gravity $g = 10\text{ m/s}^2$).
1. What minimum upward magnetic force must the crane's electromagnet exert to lift one crushed car body?
2. What minimum magnetic force is required to hoist a load of 5 car bodies simultaneously?

*Solution:*
1. Weight of one car body:
   $$W = m \times g = 800\text{ kg} \times 10\text{ m/s}^2 = 8000\text{ N}$$
   To overcome gravity and achieve upward acceleration, the electromagnet must exert a magnetic attractive force of **at least $8000\text{ N}$** (practically, a safety factor of $2\times$ or $3\times$ is engineered to prevent dropping during swinging).
2. Weight of 5 car bodies:
   $$W_{\text{total}} = 5 \times 8000\text{ N} = 40,000\text{ N} \quad (40\text{ kN})$$
   The electromagnet must exert an upward force of **at least $40,000\text{ N}$**.

*Consistency check:* $40,000\text{ N} / (10\text{ m/s}^2) = 4000\text{ kg} = 5 \times 800\text{ kg} \checkmark$.

---

**Example 8 (Tracing the Electric Bell Cycle):**  
In an electric trembler bell, identify the specific component that automatically breaks the circuit, and explain why the bell continues to ring as long as the button remains pressed.

*Solution:*
1. **Circuit Interrupter:** The **contact screw** touching the flexible armature spring breaks the circuit.
2. **Sequential Cycle:**
   - Pressing the push-button energizes the electromagnet.
   - The electromagnet pulls the soft iron armature forward, causing the hammer to strike the metal gong (**strike**).
   - This forward displacement pulls the armature away from the contact screw, opening the circuit (**interruption**).
   - The current stops, the soft iron core immediately demagnetizes, and the spring pulls the armature back (**rebound**).
   - The armature touches the contact screw again, re-establishing current, and the cycle repeats rapidly (typically 20 to 50 times per second), producing a continuous ringing sound.

*Consistency check:* Matches the mechanical description in Part F $\checkmark$.

---

**Example 9 (The Electric Relay: Controlling High-Power Circuits Safely):**  
An automotive electric starter motor draws $150\text{ A}$ from a $12\text{ V}$ battery. An engineer designs an electromagnetic relay using a $6\text{ V}$ control circuit drawing only $0.2\text{ A}$. Explain how the relay operates and state its primary safety and design advantages.

```
  Circuit 1 (Low-voltage, 6 V control)      Circuit 2 (High-current, 12 V power)

  ─┤├─ cell ── switch ── coil               motor ── relay switch contacts
                         @@@@                         (heavy copper contacts)
                         ═════ soft iron core            │
                           │ magnetic attraction         │
                           └──────── armature ───────────┘
```

> **Figure 5.4** – Schematic diagram of an electric relay: a low-current control circuit energizes an electromagnet, pulling an armature that closes the heavy-duty switch contacts of a separate, high-current circuit.

*Solution:*
1. **Working:** Turning the ignition key completes Circuit 1. A modest current ($0.2\text{ A}$) energizes the relay's electromagnet. The electromagnet attracts an iron armature, which mechanically snaps shut the heavy copper contacts of Circuit 2, powering the massive starter motor.
2. **Advantages:**
   - **Operator Safety:** The driver's hand operates only a low-power, safe control circuit.
   - **Efficiency and Weight Savings:** The thick, heavy cables carrying $150\text{ A}$ can be kept very short, running directly between the battery and the starter motor, rather than routing dangerous, high-current cabling into the vehicle dashboard.

*Consistency check:* The two electrical circuits are physically isolated, coupled purely by magnetic forces $\checkmark$.

---

**Example 10 (Why Soft Iron, Not Steel, for Crane Cores?):**  
Why are industrial crane electromagnets constructed with soft iron cores rather than hardened steel?

*Solution:*
- **Soft iron** is magnetically "soft": it magnetizes intensely when current flows, but loses virtually all of its magnetism the instant current is switched off. This allows the crane operator to release scrap metal cleanly and instantly.
- **Hardened steel** has high retentivity. Once magnetized by the coil, it becomes a permanent magnet. If steel were used, cutting the electric current would *not* release the scrap metal; the steel core would continue holding the crushed cars permanently, rendering the crane useless as an unloading tool!

*Consistency check:* Soft iron is essential for temporary magnets; steel is used exclusively for permanent magnets (Topic 3) $\checkmark$.

---

## Part F: Practical Applications of Electromagnets

### 1. Scrapyard Cranes and Heavy Steel Works
Industrial gantry and mobile cranes use massive circular or rectangular electromagnets to lift, transport, and deposit tons of ferromagnetic scrap metal, steel plates, rails, and raw pig iron. When energized, the magnet secures the cargo without chains, slings, or manual rigging; switching off the current drops the cargo precisely into railway wagons, furnaces, or cargo trucks.

### 2. The Electric Bell

```
   ┌──── push-button ────┐
   │                     │
  ─┴─  cell          ┌───┴───────────────┐
  ─┬─                │ COIL  @@@@@@@@    │  electromagnet
   │                 │ (soft iron core)  │
   │                 └───┬───────────────┘
   │                     │ wire   ↑ electromagnet attracts armature
   │   spring strip ═════╧══ ARMATURE (soft iron) ══ hammer ──► GONG
   │                              ●  contact point (on armature)
   │                              ●  CONTACT SCREW
   └──────────────────────────────┘
```

> **Figure 5.5** – The electric trembler bell: closing the push-button energizes the electromagnet, pulling the soft iron armature to strike the gong. This movement breaks the contact with the contact screw, opening the circuit and allowing the spring to reset the armature.

The step-by-step cycle operates as follows:
1. The visitor presses the push-button, closing the circuit and allowing current to flow from the battery through the coils.
2. The soft iron core becomes an **electromagnet** and attracts the soft iron **armature**.
3. The moving armature causes the attached **hammer to strike the gong** with a sharp *clack*.
4. As the armature moves forward, the contact point pulls away from the **contact screw**, breaking the electrical circuit.
5. With current cut off, the soft iron core loses its magnetism instantly.
6. The flexible **spring strip** pulls the armature back to its original position.
7. As the armature returns, it touches the contact screw again, re-establishing current flow and restarting the entire cycle from Step 2.

This rapid, automated make-and-break cycle repeats dozens of times per second as long as the button remains pressed.

### 3. The Electric Relay
As detailed in Example 9, relays function as magnetically actuated remote-control switches. They are indispensable in automotive starter systems, telecommunication routing, industrial automation, and household safety circuit breakers.

### 4. Telegraphs and Traditional Telephone Receivers
In historical Morse code telegraphy, an electromagnet attracted a small iron armature to produce audible "dots and dashes" (clicks). In traditional telephone earpieces, fluctuating speech currents passed through an electromagnet, which pulled on a flexible magnetic diaphragm to generate corresponding acoustic sound waves.

### 5. Loudspeakers and Headphones
Modern dynamic loudspeakers and headphones utilize a lightweight wire coil (the **voice coil**) suspended in the annular gap of a permanent magnet. Audio electrical currents flowing through the voice coil generate a rapidly varying magnetic field, causing the coil to vibrate back and forth according to the sound waveform. The vibrating coil drives a paper, polymer, or composite cone, transmitting vibrations into the surrounding air to generate sound ([sound.md](../sound/sound.md)).

### 6. Electric Motors and Generators
Electric fans, vacuum cleaners, washing machines, and electric vehicles rely on electromagnets (both in the stationary stator and rotating rotor) to produce rotational mechanical power. Conversely, commercial power station generators rotate electromagnets to generate electricity (Topic 6).

### 7. Magnetic Separators
In mining operations, solid waste recycling plants, and grain processing facilities, powerful conveyor-belt electromagnets extract rogue ferromagnetic debris (tramp iron, screws, cans) from moving streams of non-magnetic minerals, glass, plastic, and wheat, protecting machinery and purifying materials.

### 8. Magnetic Resonance Imaging (MRI) Scanners
Hospital MRI scanners utilize extremely powerful **superconducting electromagnets** cooled to near absolute zero ($-269^\circ\text{C}$) with liquid helium. At these cryogenic temperatures, the niobium-titanium coils exhibit zero electrical resistance ($R = 0$), allowing enormous electric currents to circulate continuously without generating Joule heat, producing steady magnetic fields up to 1.5 to 3 Tesla to image internal human tissues in high resolution.

### 9. Magnetic Levitation (Maglev) Trains
High-speed Maglev trains (operating in Japan, China, and South Korea) utilize controlled electromagnets installed along the train undercarriage and track guideway. Magnetic repulsive and attractive forces lift the multi-ton train several centimetres above the track, eliminating wheel-rail friction and allowing quiet, energy-efficient cruising speeds exceeding $500\text{ km/h}$.

### 10. Additional Everyday and Industrial Applications
Electromagnets are found throughout modern infrastructure:
- **Electromagnetic Door Locks:** Heavy steel doors in commercial buildings are held locked by 500 kg-force electromagnets; releasing power during a fire alarm instantly unlocks emergency exit doors.
- **Fire-Door Retainers:** Electromagnets hold hospital corridor fire doors open during normal hours; when smoke alarms trigger, current cuts off, allowing door closers to seal off smoke compartments automatically.
- **Hard Disk Drives:** Voice coil electromagnets position read/write heads with nanometre precision over spinning magnetic data platters.
- **Circuit Breakers:** Excessive fault currents energize an internal solenoid that mechanically trips the safety switch, protecting homes from electrical fires.

---

## Part G: Resolving Liam's Question

Armed with the principles of electromagnetism, Liam and Mr. Henderson climbed back into the crane cab.

"Uncle Henderson," Liam said, a proud smile spreading across his face, "I understand how your crane dropped those cars now!"

Mr. Henderson leaned back. "Tell me, young physicist. How does my crane's magnet let go?"

"The crane's lifting disc is an **electromagnet** containing huge coils of wire wrapped around a **soft iron core**," Liam explained systematically. "When you pressed the button, high electric current rushed through the coils. That current aligned all the magnetic domains in the soft iron core, making it a super-powerful magnet that lifted $40,000\text{ N}$ of scrap cars!"

"And when I released the button?"

"You broke the electrical circuit, stopping the current! Because the core is made of **soft iron** and not hardened steel, its magnetic domains scrambled instantly. It lost virtually all of its magnetism in a split second, so gravity pulled the car bodies down into the truck bed! If you had used steel instead of soft iron, the cars would have stayed stuck forever!"

Mr. Henderson smiled and gave Liam a hearty high-five. "Spot on, Liam! You have grasped the true beauty of electromagnetism: it gives us absolute, instantaneous control over one of the fundamental forces of nature."

---

## Part H: Safety and Precautions

- **Never connect homemade coils to mains electrical sockets:** Domestic wall outlets deliver lethal voltages ($110\text{--}240\text{ V}$) capable of causing severe electric shock, arc flash explosions, and structure fires. Educational experiments must use low-voltage dry cells ($1.5\text{--}4.5\text{ V}$) only.
- **Thermal Hazards:** Coils can grow very hot rapidly ($H = I^2Rt$). Always disconnect batteries when not actively taking measurements, and handle warm wires with caution.
- **Medical Implants (Pacemakers):** Strong magnetic fields can disrupt cardiac pacemakers and implanted medical devices. Individuals with pacemakers must maintain safe distances from high-field industrial magnets and hospital MRI suites.
- **Magnetic Media and Sensitive Electronics:** Strong electromagnets can corrupt magnetic stripe cards (credit/debit cards), mechanical watches, and magnetic storage devices. Keep them at safe distances.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Believing an electromagnet retains its full magnetic strength after the current stops.**  
   An electromagnet with a soft iron core demagnetizes almost entirely the instant current ceases. Only permanent magnet materials (like hardened steel or alnico) retain strong residual magnetism.

2. **Mistake 2: Thinking hardened steel would make a better scrapyard crane core.**  
   Hardened steel retains its magnetism after current is switched off. If used in a scrap crane, the magnet would become permanently magnetized and could never release its load into the truck!

3. **Mistake 3: Winding an electromagnet with bare, uninsulated wire.**  
   Bare wire turns would make direct electrical contact with each other and the iron core, causing short-circuits. Current would bypass the coil turns, failing to produce the necessary circulating field. Wire must be insulated (enamelled).

4. **Mistake 4: Believing a large coil of wire acts as a magnet without electricity.**  
   Copper wire and soft iron are non-magnetic by themselves. An electromagnet only generates a magnetic field when electric charges are actively moving through the coil.

5. **Mistake 5: Assuming the hammer of an electric bell must be manually reset.**  
   The electric bell is a fully automatic trembler mechanism: the moving armature mechanically breaks its own circuit at the contact screw, allowing the spring to reset it automatically.

6. **Mistake 6: Believing the poles of an electromagnet cannot be reversed.**  
   Unlike permanent magnets, the polarity of an electromagnet can be swapped electronically at will simply by reversing the direction of electric current.

---

## Quick Recap

- An **electromagnet** consists of an insulated wire coil wound around a **soft iron core**. It behaves as a strong magnet only while electric current flows.
- The soft iron core amplifies the coil's magnetic field hundreds of times by aligning its internal ferromagnetic domains.
- Soft iron has low retentivity: it magnetizes quickly and loses virtually all magnetism the moment current is switched off.
- The strength of an electromagnet increases with: (1) more wire turns, (2) greater electric current, (3) a larger, high-permeability soft iron core, and (4) narrower pole gaps (horseshoe design).
- Advantages over permanent magnets: switchable ON/OFF control, adjustable field strength, reversible polarity, and immense maximum lifting force.
- Disadvantages: requires continuous electrical energy to remain energized, and produces waste Joule heat ($H = I^2Rt$).
- Key applications: industrial scrap cranes, electric bells, relays, loudspeakers, electric motors, magnetic separators, MRI machines, and Maglev trains.
- In an electric bell, an automatic make-and-break interrupter (contact screw) creates rapid, continuous ringing as long as the button is pressed.
- An electric relay allows a safe, low-power control circuit to switch a high-voltage or high-current industrial circuit remotely.

---

## Practice Questions

1. Define an electromagnet. State its four primary components and explain the role played by the soft iron core.

2. Explain why soft iron is selected for the core of an electromagnet instead of hardened steel. What operational failure would occur if steel were used in an industrial scrap crane?

3. A student looks directly into the right-hand end face of an energized electromagnet and observes conventional current circulating in a clockwise direction. Identify the magnetic polarity of both the right and left ends. What happens to the polarity and field strength if the battery connections are reversed?

4. In an experimental demonstration, a 10-turn coil connected to one cell lifts 5 steel pins. When the coil is rewound with 20 turns on the same nail and connected to the same cell, it lifts 11 pins. Calculate the ratio of pins lifted and interpret this result.

5. State four distinct methods by which the magnetic lifting force of an electromagnet can be increased.

6. An electromagnet coil of resistance $15\ \Omega$ is connected across a $6\text{ V}$ battery. Calculate the current drawn, and determine the thermal energy generated in the winding over a period of $2\text{ minutes}$.

7. An insulated wire with a diameter of $0.5\text{ mm}$ ($0.05\text{ cm}$) is wound in a single layer over a $4\text{ cm}$ span on an iron nail. How many turns are formed on the nail?

8. A scrap metal magnet must lift an industrial steel machine frame having a mass of $1200\text{ kg}$. Taking $g = 10\text{ m/s}^2$, calculate the minimum upward magnetic force the electromagnet must exert.

9. Describe step by step how an electric trembler bell rings continuously as long as its push-button is held down. Which specific component acts as the automatic circuit breaker?

10. A relay uses a $6\text{ V}$ circuit drawing $0.1\text{ A}$ to control an automotive starter motor operating at $12\text{ V}$ and drawing $200\text{ A}$. Explain the practical advantages of maintaining two isolated circuits.

11. State whether each of the following statements is True or False:  
    (a) An electromagnet with a soft iron core retains strong magnetism for hours after current is cut off.  
    (b) Reversing the direction of current in an electromagnet reverses its magnetic poles.  
    (c) An uninsulated bare wire is suitable for winding an electromagnet.  
    (d) A magnetic separator can extract iron cans from a mixture of plastic, paper, and glass waste.

12. State three distinct advantages and two practical disadvantages of an electromagnet compared with a permanent magnet.

13. Why should a classroom electromagnet activity using an iron nail be operated for only a few seconds at a time? Why must mains electricity never be used?

14. An electromagnet coil carries a current of $0.4\text{ A}$ through a winding resistance of $10\ \Omega$. Calculate the heat energy produced in $30\text{ seconds}$. If the current is doubled to $0.8\text{ A}$, by what factor does the heat production increase?

---

### Answers

1. An **electromagnet** is a temporary magnet formed by winding an insulated wire coil around a soft iron core, which becomes magnetized only while electric current passes through the coil. Its four primary components are: (1) insulated conducting coil, (2) soft iron core, (3) electric current source (cell/battery), and (4) electrical switch. The soft iron core aligns its microscopic ferromagnetic domains with the coil's field, multiplying the overall magnetic strength hundreds of times.

2. Soft iron possesses high magnetic permeability and very low retentivity; it magnetizes intensely when energized and loses virtually all magnetism the instant current stops, allowing on/off control. Hardened steel has high retentivity and retains strong permanent magnetism. If steel were used in a scrap crane, the core would remain permanently magnetized after switching off the current, making it impossible to release the scrap metal into the truck!

3. By the Clock Rule, clockwise current at the right end indicates a **South pole ($S$)**; therefore, the opposite (left) end is a **North pole ($N$)**. When the battery connections are reversed, the current direction reverses: the right end becomes a **North pole ($N$)** and the left end becomes a **South pole ($S$)**. The magnetic field strength remains **identical** because current magnitude is unchanged.  
   *Check:* Clockwise = South; Counter-clockwise = North $\checkmark$.

4. Ratio of pins lifted:
   $$\text{Ratio} = \frac{11\text{ pins}}{5\text{ pins}} = 2.2$$
   Doubling the turns approximately doubles the lifting capacity ($\approx 2\times$), demonstrating that magnetic field strength is approximately directly proportional to the number of turns.  
   *Check:* $2.2 \times 5 = 11\text{ pins} \checkmark$.

5. (1) Increase the number of turns in the coil. (2) Increase the electric current (higher voltage or lower resistance). (3) Use a larger, high-permeability soft iron core. (4) Use a horseshoe (U-shaped) core to bring opposite poles close together.

6. Current by Ohm's Law:
   $$I = \frac{V}{R} = \frac{6\text{ V}}{15\ \Omega} = 0.4\text{ A}$$
   Time $t = 2\text{ min} = 120\text{ s}$. Joule heat generated:
   $$H = I^2 R t = (0.4\text{ A})^2 \times 15\ \Omega \times 120\text{ s} = 0.16 \times 15 \times 120 = 2.4\text{ W} \times 120\text{ s} = 288\text{ J}$$
   *Check:* $0.4\text{ A} \times 15\ \Omega = 6\text{ V} \checkmark$; $2.4\text{ W} \times 120\text{ s} = 288\text{ J} \checkmark$.

7. Turns per centimetre:
   $$n = \frac{1\text{ cm}}{0.05\text{ cm}} = 20\text{ turns/cm}$$
   Total turns over $4\text{ cm}$:
   $$N = 20\text{ turns/cm} \times 4\text{ cm} = 80\text{ turns}$$
   *Check:* $80 \times 0.5\text{ mm} = 40\text{ mm} = 4\text{ cm} \checkmark$.

8. Weight of machine frame:
   $$W = m \times g = 1200\text{ kg} \times 10\text{ m/s}^2 = 12,000\text{ N}$$
   The electromagnet must exert an upward attractive force of **at least $12,000\text{ N}$** to hoist the frame.  
   *Check:* $12,000\text{ N} / (10\text{ m/s}^2) = 1200\text{ kg} \checkmark$.

9. (1) Pressing the push-button closes the circuit, energizing the electromagnet. (2) The electromagnet attracts the soft iron armature. (3) The attached hammer strikes the gong. (4) The forward movement pulls the armature away from the **contact screw**, breaking the circuit. (5) Current stops, the soft iron core demagnetizes, and the spring pulls the armature back. (6) The armature re-establishes contact with the screw, repeating the cycle automatically. The **contact screw** acts as the automatic interrupter.

10. Keeping the circuits isolated provides two major benefits: (1) **Operator Safety:** The user handles only a low-voltage ($6\text{ V}$), low-current switch, eliminating shock and heavy electrical arc risks. (2) **Efficiency and Compactness:** High-current wiring ($200\text{ A}$) requires extremely thick, heavy copper cables; using a relay keeps these heavy cables short (between battery and starter), avoiding running bulky cables into the dashboard.

11. (a) **False** $\times$. Soft iron loses virtually all magnetism the moment current ceases.  
    (b) **True** $\checkmark$. Reversing current reverses magnetic domain alignment and swaps the poles.  
    (c) **False** $\times$. Uninsulated wire causes short-circuits between adjacent turns, bypassing the coil.  
    (d) **True** $\checkmark$. Iron is ferromagnetic and attracts to the magnet, whereas plastic, paper, and glass are non-magnetic.

12. **Advantages:** (1) Magnetic strength can be varied at will. (2) Can be switched ON and OFF instantaneously. (3) Polarity can be reversed electronically. (4) Can be engineered to be extraordinarily powerful. *(Any three)*  
    **Disadvantages:** (1) Requires continuous electrical energy consumption. (2) Generates waste Joule heat ($I^2Rt$) in its windings.

13. Low resistance in short copper wire draws high current, causing the wire and battery to overheat rapidly ($H = I^2Rt$), risking burns and chemical leakage. **Mains electricity ($110\text{--}240\text{ V}$) must never be used** because it presents lethal electrocution risks, explosive short-circuits, and severe fire hazards.

14. Heat generated in $30\text{ s}$ ($I = 0.4\text{ A}$, $R = 10\ \Omega$):
    $$H_1 = (0.4\text{ A})^2 \times 10\ \Omega \times 30\text{ s} = 0.16 \times 10 \times 30 = 48\text{ J}$$
    When current is doubled ($I = 0.8\text{ A}$):
    $$H_2 = (0.8\text{ A})^2 \times 10\ \Omega \times 30\text{ s} = 0.64 \times 10 \times 30 = 192\text{ J}$$
    Ratio:
    $$\frac{H_2}{H_1} = \frac{192\text{ J}}{48\text{ J}} = 4$$
    Heat production increases by a factor of **4 times** ($H \propto I^2$).  
    *Check:* $48 \times 4 = 192\text{ J} \checkmark$.

---

You can now explain to Liam exactly how the scrapyard crane operates: soft iron core, high current, and instant on/off control. The next time you hear a doorbell chime or watch a high-speed Maglev train glide soundlessly above its track, you will recognize the invisible power of electromagnets at work.

**What lies ahead?** We have seen that an electric current can generate powerful magnetism. Now we ask the inverse question: **can magnetism be used to generate electric current?** In Topic 6, we discover **electromagnetic induction**, and uncover the inner workings of electric motors and generators.
