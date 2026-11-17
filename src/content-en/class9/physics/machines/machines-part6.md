# Chapter: Machines (Part 6)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [machines-part5.md](machines-part5.md).** (The chapter began in [machines.md](machines.md). For foundational energy and frictional dissipation concepts, refer to [work-energy-and-power-part6.md](../work-energy-and-power/work-energy-and-power-part6.md).)
> **Topics covered in this file:**
> 6. Principle of Machines and Real-World Applications

---

# Topic 6: Principle of Machines and Real-World Applications

Throughout the preceding topics, we systematically analyzed all six classical simple machines: the lever, the pulley, the inclined plane, the wedge, the screw, and the wheel-and-axle. Each machine serves a distinct mechanical role: magnifying applied effort to overcome heavy loads, altering the direction of an applied force, or increasing the speed and displacement of motion. For each, we calculated Mechanical Advantage, Velocity Ratio, and Efficiency.

Now, we pose a fundamental scientific question: **is there a single, overarching physical principle that unites all machines?**

The answer is an emphatic **yes!** That unifying principle is the **law of conservation of energy**. In this concluding topic, we will synthesize all machines under this universal law, explore where energy is dissipated in real macroscopic mechanisms, and examine how multiple simple machines combine in series (as in multi-gear bicycles, automotive drivetrains, and industrial cranes) to produce compound mechanical advantages. At the end of this file, you will find a comprehensive summary of the entire chapter.

**Throughout this topic, $g = 10\text{ m/s}^2$** (standard high-school convention).

---

## At the Bicycle Workshop with Mr. Sterling and Leo

Leo brought his multi-speed touring bicycle to Mr. Sterling's community workshop because the chain had slipped off the rear cogs during an uphill ride. Mr. Sterling inspected the drivetrain, cleaned the chain links, realigned the derailleur cage, and applied fresh synthetic lubricant to the rear gear cluster.

Leo examined the gears closely: attached to the pedals was a large front chainring, while the rear wheel hub featured a stepped cluster of sprockets ranging from very small to quite large.

Leo asked, "Mr. Sterling, how do I know which gear to select when riding?"

Mr. Sterling replied, "When climbing a **steep uphill grade**, shift your chain onto the **largest rear sprocket** (the lowest gear). When cruising along a **flat, straight highway**, shift onto the **smallest rear sprocket** (the highest gear)."

Leo pondered this for a moment and grinned. "If shifting to the largest rear sprocket makes pedaling so much lighter on a hill, what if engineers designed an extra-large sprocket? Could a gear combination be created that allows me to pedal uphill with **zero effort**—carrying me to the top for free?"

Mr. Sterling laughed warmly. "That is a brilliant question, Leo! A low gear can certainly reduce the muscular force demanded from your legs, but it can **never eliminate the work**. In fact, no machine in the universe can perform work for free. Let me show you why—this is the universal law governing every machine on Earth."

Let us analyze the physics behind Leo's question.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Principle of Machines** | In an ideal machine, work output equals work input. A machine cannot create energy; it merely trades force for displacement | $\text{Load} \times d_L = \text{Effort} \times d_E$ |
| **Ideal Machine** | A theoretical machine completely free from friction and component weight; operates at $100\%$ efficiency | $\text{MA} = \text{VR}$ |
| **Real Machine** | A physical machine with internal friction and mass; some input energy is dissipated as heat and sound | Bicycle, automobile, hoist |
| **Energy Dissipation (Loss)** | The portion of work input converted into non-useful thermal or acoustic energy | Heating of bicycle chain and bearings |
| **Compound Machine** | An interconnected assembly of two or more simple machines operating in series | Bicycle, crane, wheelbarrow |
| **Perpetual Motion Machine** | A hypothetical machine that runs indefinitely or outputs more energy than it consumes (physically impossible) | A machine with $\eta > 100\%$ |
| **Sprocket / Gear** | A toothed wheel engaging with a chain or another gear to transmit rotational mechanical power | Bicycle rear cassette cogs |
| **Ball Bearing** | Precision hardened steel balls rolling between inner and outer rings to minimize rotational friction | Bicycle wheel hub bearings |

---

## Part A: Principle of Machines (Derived from Conservation of Energy)

### Work Is Never Free

In our study of [Work, Energy, and Power](../work-energy-and-power/work-energy-and-power-part6.md), we established the foundational law of the universe: **energy cannot be created or destroyed; it can only be transformed from one form to another.** When mechanical work is performed against friction, kinetic energy transforms into thermal energy (heat).

This conservation law applies directly to every machine:

$$\mathbf{\text{Work Output} = \text{Work Input} - \text{Energy Dissipated by Friction}}$$

When an operator applies effort, they deliver **Work Input**:
$$\text{Work Input} = \text{Effort} \times \text{Distance moved by Effort} = E \times d_E$$

The machine delivers useful mechanical energy against the load as **Work Output**:
$$\text{Work Output} = \text{Load} \times \text{Distance moved by Load} = L \times d_L$$

### The Ideal Machine: Zero Friction

In a frictionless, ideal machine, no energy is converted into thermal dissipation:
$$\text{Work Output} = \text{Work Input}$$

> $$\mathbf{\text{Load} \times d_L = \text{Effort} \times d_E}$$

This fundamental equality is known as the **Principle of Machines**.

```
   Effort E ───►  [   MACHINE   ]  ───►  Useful Work on Load
   (Work Input)     Frictional heat        (Work Output)
   E × d_E          dissipated             L × d_L
                        │
                        ▼
                 (Dissipated Energy)

   Real Machine:   Output = Input - Energy Dissipated
   Ideal Machine:  Output = Input
```

> **Figure 6.1** – Energy accounting in a machine. Work input is delivered by the effort. In a real machine, friction dissipates a portion of this energy as heat, leaving the useful work output strictly less than input. In an ideal machine, output perfectly equals input.

### The Inescapable Trade-Off: Force vs. Distance

Examine the governing equation $\text{Load} \times d_L = \text{Effort} \times d_E$. The product of force and distance must balance on both sides:
- To achieve a **small effort** ($E \ll L$), the effort must move through a proportionately **large distance** ($d_E \gg d_L$). This defines a **force multiplier**: **gain in force, penalty in distance**.
- To achieve a **large load displacement** with small effort displacement ($d_L \gg d_E$), the operator must exert a proportionately **larger effort** ($E \gg L$). This defines a **speed multiplier**: **gain in speed and distance, penalty in force**.

This fundamental balance directly explains why $\text{MA} = \text{VR}$ in an ideal machine:
$$\frac{L}{E} = \frac{d_E}{d_L} \quad \Longrightarrow \quad \text{MA} = \text{VR}$$

### "No Free Lunch": The Impossibility of Perpetual Motion

No machine can ever output more mechanical work than the energy supplied to it. A machine does not create energy; it merely **reshapes and transmits** it.

Consequently, a machine that operates continuously without an external energy supply, or one that produces net energy out of nothing (a **perpetual motion machine** of the first kind), is **physically impossible**. Any claim of a machine operating with an efficiency exceeding $100\%$ ($\eta > 100\%$, or $\text{MA} > \text{VR}$) violates the first law of thermodynamics.

### All Six Simple Machines Under the Same Principle

| Machine | Governing Dimension | Principle of Machines Formulation (Ideal) |
|---|---|---|
| **Lever** | Arms $e$ and $l$ | $\text{Effort} \times \text{Effort Arm} = \text{Load} \times \text{Load Arm}$ |
| **Pulley ($n$ strands)** | Strands $n$ | $d_E = n \times d_L \Longrightarrow \text{Effort} \times n = \text{Load}$ |
| **Inclined Plane** | Length $l$, height $h$ | $\text{Effort} \times l = \text{Load} \times h$ |
| **Wedge** | Length $l$, thickness $t$ | $\text{Effort} \times l = \text{Load} \times t$ |
| **Screw Jack** | Handle $r$, pitch $p$ | $\text{Effort} \times (2\pi r) = \text{Load} \times p$ |
| **Wheel-and-Axle** | Radii $R$ and $r$ | $\text{Effort} \times R = \text{Load} \times r$ |

*Verification via Lever:* A load of $60\text{ N}$ sits at load arm $0.2\text{ m}$. With an effort arm of $0.6\text{ m}$, the required effort is $E = (60\text{ N} \times 0.2\text{ m}) / 0.6\text{ m} = \mathbf{20\text{ N}}$. Check: $20\text{ N} \times 0.6\text{ m} = 12\text{ N m}$ balances $60\text{ N} \times 0.2\text{ m} = 12\text{ N m}$ ✅.

---

## Part B: Real Machines: Friction and Energy Dissipation

### Thermal and Acoustic Dissipation

Ideal machines exist only in textbooks. In every real physical mechanism, internal friction is present:
- Metal chain links rub against sprocket teeth.
- Shafts and axles rub against their supporting journal bushings.
- Cables bend and flex over pulley sheaves.

The physical consequences:
1. Some input energy is continuously converted into **thermal energy (heat)**, warming the bearings, gears, and frames.
2. Some energy is converted into **acoustic vibrations (sound)**—the whirring of chains, the whine of gears, or the rattling of linkages.
3. Therefore, **$\text{Work Output} < \text{Work Input}$**, and mechanical efficiency is strictly less than $100\%$.

Furthermore, the structural components of the machine (the weight of the lower pulley block, the mass of the lever arm, the inertia of the gears) possess deadweight that must be lifted and accelerated, consuming additional input energy.

### Engineering Methods to Mitigate Friction

| Technique | Physical Mechanism | Engineering Application |
|---|---|---|
| **Lubrication (Oiling / Greasing)** | Introduces a microscopic fluid film between sliding surfaces to prevent metal-to-metal contact | Bicycle chain lube, engine motor oil |
| **Ball and Roller Bearings** | Replaces high sliding friction with drastically lower rolling friction | Wheel hubs, electric motor rotors |
| **Surface Polishing** | Eliminates microscopic surface asperities and roughness | Precision gear teeth, pulley grooves |
| **Aerodynamic Streamlining** | Reduces fluid drag and air resistance at high speeds | Teardrop cycling helmets, streamlined velomobiles |
| **Lightweight Alloys** | Minimizes parasitic deadweight of moving parts | Aluminum or carbon-fiber bicycle frames |

These engineering techniques bring real machines closer to ideal behavior, but macroscopic friction can never be reduced to absolute zero.

### Typical Real-World Efficiencies (Approximations)

The following values represent typical operational efficiencies in engineering:

| Machine / Mechanism | Approximate Efficiency ($\eta$) | Primary Sources of Loss |
|---|---|---|
| **Well-Lubricated Bicycle Chain Drive** | $90\% \text{ to } 98\%$ | Minor link friction, slight chain deflection |
| **Industrial Electric Motor** | $80\% \text{ to } 95\%$ | Electrical resistance (Joule heating), bearing friction |
| **Automotive Gasoline Engine** | $25\% \text{ to } 30\%$ | Massive thermal losses through radiator and exhaust |
| **Human Musculoskeletal System** | $20\% \text{ to } 25\%$ | Metabolic biochemical heat generation |
| **Incandescent Filament Bulb** | $\approx 5\%$ | $95\%$ of electrical input emitted as heat rather than light |

Observe that a clean, well-greased bicycle chain drive is one of the most efficient mechanical power transmission systems ever invented!

---

## Part C: Bicycle Gears and Leo's Question

### How Bicycle Gears Operate

A bicycle drivetrain features a front chainring attached to the pedals and a cluster of sprockets on the rear wheel hub, coupled by a continuous steel roller chain.

Here is the qualitative mechanics:
- **Small Rear Sprocket (Few Teeth):** For one revolution of the pedals, the rear wheel completes multiple full rotations. The bicycle traverses a **large distance**, but the rider's legs must exert a **large pedal force**. This configuration behaves as a **speed multiplier**—ideal for sprinting across level roads.
- **Large Rear Sprocket (Many Teeth):** For one revolution of the pedals, the rear wheel rotates fewer times. The bicycle advances a **short distance**, but the rider's legs experience a **substantially reduced pedal force**. This configuration behaves as a **force multiplier**—essential for climbing steep gradients.

```
       Small Rear Sprocket              Large Rear Sprocket
       (High Gear: Flat Roads)          (Low Gear: Steep Hills)
              ___                              _____
             / o \                            /     \
             \___/                           (   o   )
                                              \_____/

      1 Pedal Revolution:              1 Pedal Revolution:
      Bicycle travels far              Bicycle travels short distance
      Demands high leg force           Requires light leg force
      (Speed Multiplier)               (Force Multiplier)
```

> **Figure 6.2** – Rear sprockets of a bicycle. The small sprocket delivers high forward speed at the cost of high pedal effort. The large sprocket minimizes pedal effort at the cost of reduced forward travel per stroke.

*(Note on Nomenclature: In cycling terminology, shifting onto the large rear sprocket is called shifting into "low gear" because it produces the lowest speed for a given cadence. Mr. Sterling called it a "low gear" to emphasize that it reduces the required pedaling force.)*

### Answering Leo's Question

Leo asked: "Could a gear combination allow me to climb a hill with zero effort—carrying me up for free?"

Mr. Sterling's answer is grounded in physics:

To climb a hill of height $h$, Leo and his bicycle (total mass $m$) must gain gravitational potential energy equal to:
$$\text{Work against Gravity} = m \cdot g \cdot h$$

This quantity of mechanical work is **demanded by nature and cannot be reduced by any gear ratio**. Whether Leo climbs the hill in one minute or twenty minutes, on a high gear or an ultra-low gear, his muscles must deliver at least $m \cdot g \cdot h$ joules of mechanical energy.

Selecting an ultra-low gear (a very large rear sprocket) achieves the following:
- It reduces the muscular force required on each downstroke.
- However, the bicycle advances only a few centimeters per pedal rotation, compelling Leo to **spin the pedals through vastly more revolutions**.

**Force is reduced, but pedal revolutions increase proportionately.** The total mechanical work ($E \times d_E$) remains unchanged (plus additional frictional losses). Leo saves his leg muscles from acute strain, but he can never climb the hill for free.

---

## Part D: Combinations of Machines (Compound Machines)

Most practical mechanisms integrate multiple simple machines working together in series:

| Compound Machine | Integrated Simple Machines |
|---|---|
| **Wheelbarrow** | Class 2 lever (chassis and handles) + Wheel-and-axle (front wheel) |
| **Bicycle** | Wheel-and-axle (pedals and wheels) + Levers (brakes, handlebars) + Chain sprockets |
| **Construction Crane** | Block and tackle (cable hoist) + Class 1 lever (pivoting boom) |
| **Pair of Scissors** | Two Class 1 levers pivoting on a central rivet + Two cutting wedges |
| **Screw Jack** | Threaded lead screw + Class 1 rotating lever (crank handle) |

### Overall Mechanical Advantage is the Product of Individual MAs

When machines are connected in series—where the output force of the first machine acts as the input effort for the second—their mechanical advantages **multiply**:

> $$\mathbf{\text{Overall MA} = \text{MA}_1 \times \text{MA}_2 \times \text{MA}_3 \dots}$$

*(Never add them! Adding mechanical advantages is a fundamental error.)*

**Why do they multiply?**
Suppose a lever provides $\text{MA}_1 = 4$: an input effort of $1\text{ N}$ produces an output force of $4\text{ N}$.
Now feed that $4\text{ N}$ directly into a pulley system with $\text{MA}_2 = 3$. The pulley multiplies that $4\text{ N}$ threefold: $4\text{ N} \times 3 = 12\text{ N}$.
Thus, an initial input of $1\text{ N}$ overcomes a load of $12\text{ N}$:
$$\text{Total MA} = 4 \times 3 = \mathbf{12} \quad (\text{not } 4 + 3 = 7)$$

```
   Effort                      Lever                      Pulley
   E = 1 N  ───────►  [   MA₁ = 4   ]  ───────►  [   MA₂ = 3   ]  ───────►  Load L = 12 N
                      Output = 4 N               Output = 12 N

   Total MA = 4 × 3 = 12   (Multiplicative product, never additive)
```

> **Figure 6.3** – Machines in series. The output force of the lever becomes the input effort of the pulley system. The overall mechanical advantage is the product of the individual advantages.

### Efficiency of Compound Machines

Every added machine introduces new frictional contact surfaces. The overall efficiency is the product of their individual efficiencies:
$$\eta_{\text{overall}} = \eta_1 \times \eta_2$$
As more simple machines are linked together, overall efficiency decreases, widening the gap between actual mechanical advantage and ideal velocity ratio.

### The Human Body as a Machine System

The human musculoskeletal system is an interconnected assembly of anatomical levers:
- **Forearm (Class 3):** The elbow joint is the fulcrum, the biceps provides the effort, and the hand carries the load (magnifying speed and reach).
- **Head and Neck (Class 1):** The atlanto-occipital joint serves as the central fulcrum, neck extensor muscles provide effort, and the facial mass is the load.
- **Foot and Ankle (Class 2):** Standing on tiptoes uses the balls of the feet as a fulcrum, the calf muscle (Achilles tendon) pulls upward at the heel, and the body's entire weight acts downward through the ankle joint in the middle.

---

## Part E: Solved Examples

### Example 1: Work Input, Work Output, and Energy Dissipation

In a mechanical press, an effort of $40\text{ N}$ moves through $3\text{ m}$ while elevating a load of $90\text{ N}$ through $1\text{ m}$. Calculate the work input, the useful work output, and the energy dissipated by friction.

- $\text{Work Input} = E \times d_E = 40\text{ N} \times 3\text{ m} = \mathbf{120\text{ J}}$
- $\text{Work Output} = L \times d_L = 90\text{ N} \times 1\text{ m} = \mathbf{90\text{ J}}$
- $\text{Energy Dissipated} = 120\text{ J} - 90\text{ J} = \mathbf{30\text{ J}}$

*Check:* $90\text{ J} + 30\text{ J} = 120\text{ J}$ ✅ (energy is conserved).

### Example 2: Efficiency from Loads and Displacements

A lever mechanism requires an effort of $25\text{ N}$ moving through $0.8\text{ m}$ to lift a load of $60\text{ N}$ through $0.3\text{ m}$. Determine its operational efficiency.

- $\text{Work Input} = 25\text{ N} \times 0.8\text{ m} = \mathbf{20\text{ J}}$
- $\text{Work Output} = 60\text{ N} \times 0.3\text{ m} = \mathbf{18\text{ J}}$
- $\eta = \frac{\text{Work Output}}{\text{Work Input}} \times 100\% = \frac{18\text{ J}}{20\text{ J}} \times 100\% = \mathbf{90\%}$

*Cross-Check via MA and VR:* $\text{MA} = 60 / 25 = 2.4$; $\text{VR} = 0.8 / 0.3 = 2.667$; $\eta = (2.4 / 2.667) \times 100\% = 90\%$ ✅.

### Example 3: Energy Accounting with 75% Efficiency and 800 J Input

A lifting winch operating at $75\%$ efficiency receives an input of $800\text{ J}$. Calculate the useful work delivered to the load and the energy converted into heat.

- $\text{Work Output} = 75\% \times 800\text{ J} = 0.75 \times 800\text{ J} = \mathbf{600\text{ J}}$
- $\text{Energy Dissipated} = 800\text{ J} - 600\text{ J} = \mathbf{200\text{ J}}$

*Check:* $600\text{ J} / 800\text{ J} = 75\%$ ✅; $600\text{ J} + 200\text{ J} = 800\text{ J}$ ✅.

### Example 4: Compound Machine: Lever (MA 4) and Pulley (MA 3), Ideal

A heavy crate of $1000\text{ N}$ is hoisted using a compound machine consisting of a lever ($\text{MA}_1 = 4$) driving a pulley system ($\text{MA}_2 = 3$). What input effort is required under ideal conditions?

- $\text{Total Ideal MA} = \text{MA}_1 \times \text{MA}_2 = 4 \times 3 = \mathbf{12}$
- $\text{Effort} = \frac{\text{Load}}{\text{Total MA}} = \frac{1000\text{ N}}{12} \approx \mathbf{83.3\text{ N}}$

*Check:* $83.33\text{ N} \times 12 \approx 1000\text{ N}$ ✅.

### Example 5: Same Combination with Real Overall Efficiency of 90%

The compound machine from Example 4 operates with an overall real efficiency of $90\%$. Determine the actual mechanical advantage and the real effort required to hoist the $1000\text{-N}$ crate.

- $\text{Total Ideal VR} = 12$
- $\text{Real MA} = \frac{\eta}{100\%} \times \text{VR} = 0.90 \times 12 = \mathbf{10.8}$
- $\text{Real Effort} = \frac{\text{Load}}{\text{Real MA}} = \frac{1000\text{ N}}{10.8} \approx \mathbf{92.6\text{ N}}$

*Check:* $92.6\text{ N} \times 10.8 \approx 1000\text{ N}$ ✅. The real effort ($92.6\text{ N}$) exceeds the ideal effort ($83.3\text{ N}$) to overcome internal friction ✅.

### Example 6: Ramp and Pulley Connected in Series

In a freight warehouse, a $600\text{-N}$ crate is pulled up an inclined ramp ($l = 4\text{ m}, h = 1\text{ m}$) using a cable attached to a 3-strand pulley tackle ($\text{MA} = 3$). Calculate the ideal effort needed to haul the crate.

- $\text{MA}_{\text{ramp}} = \frac{l}{h} = \frac{4\text{ m}}{1\text{ m}} = 4$
- $\text{MA}_{\text{pulley}} = 3$
- $\text{Total MA} = 4 \times 3 = \mathbf{12}$
- $\text{Effort} = \frac{600\text{ N}}{12} = \mathbf{50\text{ N}}$

*Verification via Work:*
Vertical lift of load $= 1\text{ m} \Longrightarrow \text{Work Output} = 600\text{ N} \times 1\text{ m} = 600\text{ J}$.
The crate moves $4\text{ m}$ up the ramp, and the 3-strand tackle multiplies cable draw threefold: $d_E = 4\text{ m} \times 3 = 12\text{ m}$.
$\text{Work Input} = 50\text{ N} \times 12\text{ m} = 600\text{ J}$ ✅.

### Example 7: Bicycle Sprockets: Comparing Travel Distance and Tractive Force

On Leo's bicycle, engaging the large rear sprocket advances the bicycle by $3\text{ m}$ per pedal revolution. Engaging a smaller rear sprocket with half the number of teeth advances the bicycle by $6\text{ m}$ per revolution. Compare the tractive forces generated at the rear tire for the same pedal effort.

- **Large Sprocket:** Distance per stroke $= 3\text{ m}$.
- **Small Sprocket:** Distance per stroke $= 6\text{ m}$ (doubled).
- By the Principle of Machines ($E \times d_{\text{pedal}} = F_{\text{tire}} \times d_{\text{road}}$), doubling the travel distance per pedal stroke **halves the tractive thrust force exerted against the road**.
- Conversely, to generate the identical hill-climbing thrust on the small sprocket, Leo must exert **twice the muscular force on the pedals**. There is no free gain: distance is doubled, so force is halved.

### Example 8: Energy Loss Percentage in an Engine

An automobile engine consumes $50,000\text{ J}$ of chemical potential energy from fuel, converting $30\%$ into useful mechanical propulsion at the wheels. Calculate the useful work done, the energy dissipated as heat and sound, and the percentage loss.

- $\text{Useful Work Output} = 30\% \times 50,000\text{ J} = 0.30 \times 50,000\text{ J} = \mathbf{15,000\text{ J}}$
- $\text{Energy Dissipated} = 50,000\text{ J} - 15,000\text{ J} = \mathbf{35,000\text{ J}}$
- $\text{Percentage Loss} = \frac{35,000\text{ J}}{50,000\text{ J}} \times 100\% = \mathbf{70\%}$

*Check:* $15,000\text{ J} + 35,000\text{ J} = 50,000\text{ J}$ ✅; $30\% + 70\% = 100\%$ ✅.

### Example 9: Evaluating a Claimed Machine with MA = 5 and VR = 4

A manufacturer advertises: *"Our revolutionary heavy-duty hoist provides a Mechanical Advantage of 5 while maintaining a Velocity Ratio of 4!"* Prove scientifically whether this claim is possible.

- Compute the claimed efficiency:
  $$\eta = \frac{\text{MA}}{\text{VR}} \times 100\% = \frac{5}{4} \times 100\% = \mathbf{125\%}$$
- An efficiency of $125\%$ means that for every $80\text{ J}$ of work input supplied, the machine would deliver $100\text{ J}$ of useful output work—creating $20\text{ J}$ of energy out of nothing!
- This directly violates the fundamental **Law of Conservation of Energy**. In the physical universe, $\text{MA} \le \text{VR}$ always.
- Therefore, the manufacturer's claim is **physically impossible and fraudulent**.

### Example 10: Screw Jack: Ideal vs. Real Performance

A screw jack lifts a load of $3000\text{ N}$. Its handle length is $r = 0.5\text{ m}$ and the screw pitch is $p = 4\text{ mm} = 0.004\text{ m}$. (Take $\pi = 3.14$).
(a) Determine the ideal effort required.
(b) Due to heavy thread friction, the jack operates at an efficiency of only $20\%$. Calculate the actual effort required.

- (a) $\text{Ideal VR} = \frac{2\pi r}{p} = \frac{2 \times 3.14 \times 0.5\text{ m}}{0.004\text{ m}} = \frac{3.14\text{ m}}{0.004\text{ m}} = \mathbf{785}$
  $$\text{Ideal Effort} = \frac{\text{Load}}{\text{VR}} = \frac{3000\text{ N}}{785} \approx \mathbf{3.82\text{ N}}$$
- (b) $\text{Real MA} = \frac{\eta}{100\%} \times \text{VR} = 0.20 \times 785 = 157$
  $$\text{Real Effort} = \frac{\text{Load}}{\text{Real MA}} = \frac{3000\text{ N}}{157} \approx \mathbf{19.1\text{ N}}$$

*Check:* The real effort ($19.1\text{ N}$) is five times the ideal effort ($3.82\text{ N} / 0.20 = 19.1\text{ N}$) because $80\%$ of the input work is dissipated as frictional heat ✅. Even so, lifting $3000\text{ N}$ with only $19.1\text{ N}$ of manual effort demonstrates the extraordinary utility of the screw jack.

### Example 11: Leo Climbing a Hill: Proving Work Cannot Be Eliminated

Leo and his bicycle have a combined mass of $60\text{ kg}$. He climbs a vertical hill rise of $h = 5\text{ m}$.
(a) What minimum mechanical work must be performed against gravity?
(b) If the bicycle chain drive operates at an efficiency of $96\%$, what total mechanical work must Leo's legs deliver to the pedals?

- (a) $\text{Work against Gravity} = m \cdot g \cdot h = 60\text{ kg} \times 10\text{ m/s}^2 \times 5\text{ m} = \mathbf{3000\text{ J}}$
- (b) Total work input required from pedals:
  $$\text{Work Input} = \frac{\text{Useful Work}}{\eta} = \frac{3000\text{ J}}{0.96} = \mathbf{3125\text{ J}}$$
- Energy dissipated as heat in chain: $3125\text{ J} - 3000\text{ J} = \mathbf{125\text{ J}}$.

*Conclusion:* Regardless of whether Leo selects high gear, middle gear, or an ultra-low gear, his muscles must supply at least $3125\text{ J}$ of energy. The lowest gear simply spreads this $3125\text{ J}$ over more pedal strokes, keeping the force per stroke comfortable.

### Example 12: Mechanical Efficiency of the Human Musculoskeletal System

During a brisk cycling ascent, a cyclist expends $2000\text{ J}$ of metabolic food energy. Assuming the human musculoskeletal system operates at an efficiency of $20\%$ as a mechanical engine, calculate the useful mechanical work delivered to the pedals and the heat generated within the body.

- $\text{Useful Mechanical Work} = 20\% \times 2000\text{ J} = 0.20 \times 2000\text{ J} = \mathbf{400\text{ J}}$
- $\text{Thermal Heat Generated} = 2000\text{ J} - 400\text{ J} = \mathbf{1600\text{ J}}$

*Check:* $400\text{ J} + 1600\text{ J} = 2000\text{ J}$ ✅. This extensive thermal dissipation ($80\%$) explains why athletes heat up rapidly and perspire heavily during physical exertion.

---

## Part F: Step-by-Step Problem-Solving Strategy

When tackling any machine physics problem, follow this structured four-step protocol:

1. **Identify the Machine Type:** Determine whether the device is a lever, pulley, inclined plane, wedge, screw, wheel-and-axle, or compound system.
2. **List Given Data and Target Variables:** Write down explicitly the values of $L$, $E$, $d_L$, $d_E$, lengths, radii, pitch, or energy values.
3. **Select the Governing Relationships:**
   - When forces are known: $\text{MA} = \frac{L}{E}$.
   - When geometry or displacements are known: $\text{VR} = \frac{d_E}{d_L}$.
   - For work and energy: $\eta = \frac{\text{Work Output}}{\text{Work Input}} \times 100\% = \frac{\text{MA}}{\text{VR}} \times 100\%$.
   - For ideal machines: set $\text{MA} = \text{VR}$ and $\eta = 100\%$.
   - For compound machines: compute $\text{Total MA} = \text{MA}_1 \times \text{MA}_2$.
4. **Enforce Unit Consistency and Sanity-Check Results:** Ensure displacements share identical units (meters), forces are in newtons, and work is in joules. Always verify that efficiency does not exceed $100\%$ ($\text{MA} \le \text{VR}$).

---

## Common Pitfalls to Avoid

1. **Mistake 1: Believing a machine can deliver more work output than work input**
   This violates the conservation of energy. In Example 9, an $\text{MA}$ of 5 with a $\text{VR}$ of 4 implies an efficiency of $125\%$, which is physically impossible. In all physical systems: $\text{Work Output} \le \text{Work Input}$.

2. **Mistake 2: Assuming high gear reduces climbing effort on hills**
   The exact opposite is true. On steep hills, you must shift into a **low gear (large rear sprocket)**, which acts as a force multiplier to minimize pedal effort. High gear (small rear sprocket) is a speed multiplier suited only for flat, high-speed terrain.

3. **Mistake 3: Confusing mechanical efficiency with mechanical advantage**
   Efficiency is an energy ratio ($\frac{\text{Work Output}}{\text{Work Input}} \times 100\%$), whereas $\text{MA}$ is a force ratio ($\frac{\text{Load}}{\text{Effort}}$). A machine can have a massive mechanical advantage (e.g., $\text{MA} = 157$ in Example 10) while operating at a very low efficiency ($\eta = 20\%$).

4. **Mistake 4: Adding mechanical advantages in a compound machine**
   When two simple machines operate in series, their mechanical advantages **multiply**, never add! Linking a lever of $\text{MA} = 4$ with a pulley of $\text{MA} = 3$ produces an overall $\text{MA} = 4 \times 3 = \mathbf{12}$, not $4 + 3 = 7$.

5. **Mistake 5: Neglecting frictional losses in real machine calculations**
   Real effort is always significantly higher than ideal effort. In Example 10, the ideal effort was $3.82\text{ N}$, but real friction demanded $19.1\text{ N}$. Stating only the ideal answer without qualification is incomplete in practical engineering.

---

## Quick Recap

- **Principle of Machines:** In an ideal machine, $\text{Work Output} = \text{Work Input}$, meaning $\text{Load} \times d_L = \text{Effort} \times d_E$.
- In any real machine, $\text{Work Output} = \text{Work Input} - \text{Energy Dissipated}$ (as frictional heat and sound).
- **The Universal Trade-Off:** Gaining force requires a proportional increase in effort displacement; gaining speed requires an increase in applied effort. There is no free energy in the universe.
- Practical techniques to minimize friction: lubrication, ball bearings, surface polishing, aerodynamic streamlining, and lightweight alloys.
- Real machine efficiencies: bicycle chain drives ($90\text{--}98\%$), electric motors ($80\text{--}95\%$), gasoline engines ($25\text{--}30\%$), human body ($20\text{--}25\%$).
- Bicycle gears: large rear sprocket acts as a force multiplier for hill climbing; small rear sprocket acts as a speed multiplier for flat roads. Shifting gears redistributes work across strokes, but never eliminates the gravitational work required.
- In compound machines connected in series: **$\text{Overall MA} = \text{MA}_1 \times \text{MA}_2 \times \dots$**.
- In every real machine: **$\text{MA} < \text{VR}$** and $\eta < 100\%$.

---

## Practice Questions

1. In a machine, an effort of $50\text{ N}$ moves through $2\text{ m}$ to elevate an $80\text{-N}$ load through $1\text{ m}$. Calculate the work input, the useful work output, the energy dissipated, and the mechanical efficiency.

2. A mechanical hoist operating at $60\%$ efficiency receives an input of $500\text{ J}$ of mechanical work. Calculate the useful work output delivered and the energy converted into heat.

3. A lever of mechanical advantage $5$ drives a pulley tackle of mechanical advantage $2$ in series. Determine the combined ideal mechanical advantage. What ideal effort is required to raise a load of $600\text{ N}$?

4. The compound machine described in Question 3 operates with an overall real efficiency of $80\%$. Determine its real mechanical advantage and the actual effort needed to hoist the $600\text{-N}$ load.

5. An inventor claims that a novel lifting mechanism requires an effort of only $20\text{ N}$ moving through $3\text{ m}$ to elevate a load of $70\text{ N}$ through $1\text{ m}$. Prove whether this claim is physically possible by comparing work input and work output.

6. A screw jack features a crank handle of length $0.4\text{ m}$ and a thread pitch of $5\text{ mm}$. Calculate the ideal effort needed to raise a load of $2000\text{ N}$ (Take $\pi = 3.14$). If the operational efficiency is $25\%$, calculate the real effort required.

7. A cable pulley system ($\text{MA} = 4$) is coupled to an operating lever ($\text{MA} = 2$) to lift a $400\text{-N}$ engine block. Determine the ideal effort required.

8. A manual laborer expends $2400\text{ J}$ of metabolic energy while shoveling gravel. Assuming the human musculoskeletal system operates at an efficiency of $25\%$, calculate the useful work accomplished and the heat dissipated within the body.

9. State whether each of the following statements is True or False, providing a clear scientific justification:
   (a) A physical machine possessing a mechanical advantage greater than its velocity ratio can be constructed.
   (b) Engaging a low gear on a bicycle reduces the muscular effort needed on each pedal stroke while climbing a steep hill.
   (c) When a lever of $\text{MA} = 3$ is connected in series with a lever of $\text{MA} = 2$, the combined mechanical advantage is 5.

10. Leo states, "By installing an ultra-low gear on my bicycle, I will do zero work while climbing a mountain." Explain in your own words why Leo's assertion is scientifically flawed, and describe what the low gear actually accomplishes.

### Answers

1. $\text{Work Input} = 50\text{ N} \times 2\text{ m} = \mathbf{100\text{ J}}$.
   $\text{Work Output} = 80\text{ N} \times 1\text{ m} = \mathbf{80\text{ J}}$.
   $\text{Energy Dissipated} = 100\text{ J} - 80\text{ J} = \mathbf{20\text{ J}}$.
   $\eta = \frac{80\text{ J}}{100\text{ J}} \times 100\% = \mathbf{80\%}$.
   *Check:* $80\text{ J} + 20\text{ J} = 100\text{ J}$ ✅.

2. $\text{Work Output} = 60\% \times 500\text{ J} = 0.60 \times 500\text{ J} = \mathbf{300\text{ J}}$.
   $\text{Energy Dissipated} = 500\text{ J} - 300\text{ J} = \mathbf{200\text{ J}}$.
   *Check:* $\frac{300}{500} \times 100\% = 60\%$ ✅.

3. $\text{Combined Ideal MA} = 5 \times 2 = \mathbf{10}$.
   $\text{Ideal Effort} = \frac{600\text{ N}}{10} = \mathbf{60\text{ N}}$.
   *Check:* $60\text{ N} \times 10 = 600\text{ N}$ ✅.

4. $\text{Real MA} = \frac{\eta}{100\%} \times \text{VR} = 0.80 \times 10 = \mathbf{8}$.
   $\text{Real Effort} = \frac{600\text{ N}}{8} = \mathbf{75\text{ N}}$.
   *Check:* $75\text{ N} \times 8 = 600\text{ N}$ ✅. Real effort ($75\text{ N}$) is higher than ideal ($60\text{ N}$) due to friction ✅.

5. $\text{Work Input} = 20\text{ N} \times 3\text{ m} = 60\text{ J}$.
   $\text{Work Output} = 70\text{ N} \times 1\text{ m} = 70\text{ J}$.
   Because the useful work output ($70\text{ J}$) exceeds the supplied work input ($60\text{ J}$), the claim is **physically impossible**. It implies an efficiency of $\frac{70}{60} \times 100\% \approx 116.7\%$, directly violating the Law of Conservation of Energy.

6. $\text{Circumference} = 2 \times 3.14 \times 0.4\text{ m} = 2.512\text{ m}$.
   $\text{Pitch } p = 5\text{ mm} = 0.005\text{ m}$.
   $\text{Ideal VR} = \frac{2.512\text{ m}}{0.005\text{ m}} = 502.4$.
   $\text{Ideal Effort} = \frac{2000\text{ N}}{502.4} \approx \mathbf{3.98\text{ N}}$ (approximately $4\text{ N}$).
   $\text{Real Effort} = \frac{\text{Ideal Effort}}{\eta} = \frac{3.98\text{ N}}{0.25} \approx \mathbf{15.9\text{ N}}$.
   *Check:* $\text{Real MA} = 0.25 \times 502.4 = 125.6$; $\frac{2000\text{ N}}{125.6} = 15.9\text{ N}$ ✅.

7. $\text{Total MA} = 4 \times 2 = 8$.
   $\text{Ideal Effort} = \frac{400\text{ N}}{8} = \mathbf{50\text{ N}}$.
   *Check:* $50\text{ N} \times 8 = 400\text{ N}$ ✅.

8. $\text{Useful Work} = 25\% \times 2400\text{ J} = 0.25 \times 2400\text{ J} = \mathbf{600\text{ J}}$.
   $\text{Dissipated Heat} = 2400\text{ J} - 600\text{ J} = \mathbf{1800\text{ J}}$.
   *Check:* $600\text{ J} + 1800\text{ J} = 2400\text{ J}$ ✅.

9. (a) **False** ❌. $\text{MA} = \frac{\eta}{100\%} \times \text{VR}$, and because efficiency cannot exceed $100\%$ by the conservation of energy, $\text{MA}$ is strictly less than or equal to $\text{VR}$.
   (b) **True** ✅. A low gear (large rear sprocket) acts as a force multiplier, reducing the muscular force demanded on each pedal downstroke.
   (c) **False** ❌. Mechanical advantages in series multiply, producing a combined $\text{MA} = 3 \times 2 = 6$, never an additive sum of 5.

10. Leo is incorrect because lifting his mass and bicycle up a mountain requires performing a fixed quantity of gravitational work ($m \cdot g \cdot h$). No machine or gear ratio can alter or eliminate this energy requirement. A low gear merely reduces the instantaneous muscular force required on each stroke by requiring him to spin the pedals through proportionately more revolutions. Force is saved, but travel distance is expanded; total work remains invariant.

---

Leo now understands the profound beauty of machines: no device ever creates energy out of nothing; every machine simply redistributes effort, distance, and direction to make human labor effective.

---

# Chapter Wrap-up: Machines

| Topic | Core Concepts Explored | Primary Takeaway |
|---|---|---|
| **1. What is a Machine?** | Definition of a machine; effort and load; force multipliers, speed multipliers, and direction changers | A machine makes work easier or more convenient, but never reduces the total energy required. |
| **2. MA, VR, and Efficiency** | $\text{MA} = L / E$; $\text{VR} = d_E / d_L$; $\eta = (\text{Work Output} / \text{Work Input}) \times 100\% = (\text{MA} / \text{VR}) \times 100\%$ | In an ideal machine, $\text{MA} = \text{VR}$; in all real machines, friction ensures $\text{MA} < \text{VR}$. |
| **3. Levers** | Fulcrum, effort arm, and load arm; moment of force ($F \times d$); principle of moments; the three classes | Equilibrium occurs when clockwise moments balance anticlockwise moments ($L \cdot l = E \cdot e$). |
| **4. Pulleys** | Single fixed pulley ($\text{MA} = 1$, changes direction); single movable pulley ($\text{MA} = 2$); block and tackle ($\text{MA} = n$) | Sharing load across $n$ supporting rope segments reduces required effort to $W / n$. |
| **5. Other Simple Machines** | Inclined plane ($\text{MA} = l / h$); wedge ($\text{MA} = l / t$); screw jack ($\text{MA} = 2\pi r / p$); wheel-and-axle ($\text{MA} = R / r$) | A gentle incline, narrow wedge, fine pitch, or large wheel magnifies mechanical advantage. |
| **6. Principle of Machines** | Conservation of energy: $\text{Work Output} = \text{Work Input} - \text{Loss}$; compound machines ($\text{MA}_{\text{tot}} = \prod \text{MA}_i$); bicycle gears | Perpetual motion is impossible. Force reduction is invariably balanced by distance expansion. |

### Key Definitions and Units

| Physical Quantity | Scientific Meaning | Standard SI Unit |
|---|---|---|
| **Machine** | A device that transforms the magnitude, direction, or speed of an applied force | Dimensionless (no unit) |
| **Effort ($E$)** | External force applied to the machine | Newton ($\text{N}$) |
| **Load ($L$)** | Opposing resistance or gravitational weight overcome by the machine | Newton ($\text{N}$) |
| **Mechanical Advantage (MA)** | Ratio of load to effort ($L / E$) | Dimensionless ratio |
| **Velocity Ratio (VR)** | Ratio of displacement of effort to displacement of load ($d_E / d_L$) | Dimensionless ratio |
| **Efficiency ($\eta$)** | Ratio of useful work output to total work input, expressed as a percentage | Percentage ($\%$) |
| **Moment of Force** | Rotational turning effect about a pivot ($F \times d_{\perp}$) | Newton meter ($\text{N m}$) |
| **Fulcrum** | Fixed pivot point about which a lever rotates | Geometric point |
| **Pitch ($p$)** | Axial linear advance of a screw per complete $360^\circ$ rotation | Meter ($\text{m}$) or millimeter ($\text{mm}$) |

### Summary of Governing Formulae

| Concept / Quantity | Mathematical Formula |
|---|---|
| **Mechanical Advantage** | $\text{MA} = \frac{\text{Load}}{\text{Effort}} = \frac{L}{E}$ |
| **Velocity Ratio** | $\text{VR} = \frac{\text{Displacement of Effort}}{\text{Displacement of Load}} = \frac{d_E}{d_L}$ |
| **Efficiency** | $\eta = \frac{\text{Work Output}}{\text{Work Input}} \times 100\% = \frac{\text{MA}}{\text{VR}} \times 100\%$ |
| **Ideal Machine Condition** | $\text{MA} = \text{VR} \quad (\eta = 100\%)$ |
| **Principle of Machines (Ideal)** | $\text{Load} \times d_L = \text{Effort} \times d_E$ |
| **Moment of Force** | $M = F \times d_{\perp}$ |
| **Principle of Moments** | $\sum \text{Clockwise Moments} = \sum \text{Anticlockwise Moments}$ |
| **Balanced Lever** | $\text{MA} = \frac{\text{Effort Arm}}{\text{Load Arm}} = \frac{e}{l}$ |
| **Block and Tackle (Ideal)** | $\text{MA} = \text{VR} = n \quad (n = \text{number of supporting strands})$ |
| **Inclined Plane (Ideal)** | $\text{MA} = \text{VR} = \frac{l}{h}$ |
| **Wedge (Ideal)** | $\text{MA} = \text{VR} = \frac{l}{t}$ |
| **Screw Jack (Ideal)** | $\text{MA} = \text{VR} = \frac{2\pi r}{p}$ |
| **Wheel-and-Axle (Ideal)** | $\text{MA} = \text{VR} = \frac{R}{r}$ |
| **Compound Machines in Series** | $\text{Total MA} = \text{MA}_1 \times \text{MA}_2 \times \text{MA}_3 \dots$ |

### The Six Simple Machines at a Glance

| Machine | Primary Functional Nature | Typical Everyday Examples |
|---|---|---|
| **Lever** | Force multiplier (when $e > l$), speed multiplier (when $e < l$), or direction changer (when $e = l$) | Seesaw, crowbar, scissors, nutcracker, tweezers, pliers |
| **Pulley** | Fixed: Direction changer; Movable & Block and Tackle: Powerful force multiplier | Flagpole sheave, well windlass, construction crane tackle |
| **Inclined Plane** | Force multiplier (exchanges reduced effort for longer path) | Cargo loading ramp, wheelchair ramp, mountain switchback |
| **Wedge** | Force multiplier (penetrates and splits materials) | Woodchopping axe, chisel, knife blade, nail |
| **Screw** | Force multiplier (converts rotational torque into intense linear thrust) | Machine bolt, jar lid, bench vice, automotive screw jack |
| **Wheel-and-Axle** | Force multiplier (effort on wheel) or speed multiplier (effort on axle) | Doorknob, steering wheel, screwdriver, well windlass, bicycle pedal |

---

In the next chapter, **Heat and Temperature**, we transition from macroscopic mechanical forces to the microscopic kinetic domain of thermal energy, exploring heat transfer, calorimetry, and phase changes.
