# Chapter: Pressure and Fluids (Part 2)

> **Class:** 9 | **Subject:** Physics  
> **This file continues from [pressure-and-fluids.md](pressure-and-fluids.md)** (which covered thrust, pressure, and $P = \frac{F}{A}$).  
> **Topics covered in this file:**  
> 2. Pressure in Liquids  

---

# Topic 2: Pressure in Liquids

In the previous topic, we established that **thrust** is the net force acting perpendicular to a surface, and **pressure = thrust ÷ area** ($P = \frac{F}{A}$), with the SI unit being the **pascal ($\text{Pa}$)**. There, the force originated from a solid object (such as a resting brick). Now, a fascinating new question arises: **liquids such as water and oil also possess substantial weight**, and unlike solids, they can flow freely. Do liquids exert force on the bottom and sidewalls of their containers? If they do, how much pressure do they produce, and what physical factors govern it? In this topic, we dive deep into the physics of **liquid pressure**.

---

## Liam's Question at the Hydroelectric Dam

During a school science excursion, Liam and his classmates visited a massive hydroelectric dam. The lead civil engineer, **Engineer Elena**, guided the students along the observation deck near the downstream base of the concrete barrier. Looking up, Liam noticed something striking about the dam’s architecture: the concrete wall was **extraordinarily thick at the base**, but tapered to become noticeably **slender near the top**.

Liam raised his hand and asked, "Engineer Elena, why is the dam wall constructed so much thicker at the bottom than at the crest? Wouldn't keeping a uniform thickness throughout save construction time and concrete?"

Engineer Elena smiled warmly. From her demonstration kit, she produced a tall plastic bottle with **three small pinholes punctured at different heights**: one near the rim, one in the middle, and one right near the bottom. With waterproof tape covering the holes, she filled the bottle to the brim with water and then peeled off the tape in a single motion.

Water spouted out from all three holes simultaneously. But the streams were dramatically different: **the jet from the bottom hole shot out with tremendous speed, landing far across the tray**, while the jet from the top hole barely trickled out, falling weakly right against the base of the bottle.

Liam watched wide-eyed: "The water came from the very same bottle! Why does the bottom jet squirt out with so much more force and reach?"

Elena replied, "That lively jet holds the exact secret to our dam design, Liam. Let us investigate the physics of fluids with numbers and equations, and by the end of this lesson, you will calculate the answer yourself!"

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Fluid** | Any substance capable of flowing, adopting the shape of its container: liquids and gases | Water, mineral oil, atmospheric air |
| **Depth ($h$)** | The **vertical straight-line distance** measured downward from the free surface of a liquid | The vertical distance from water level down to a puncture hole |
| **Density ($\rho$)** | Mass per unit volume of a substance, expressed in $\text{kg/m}^3$ | Pure water has a density of $1000\text{ kg/m}^3$ |
| **Liquid pressure** | The pressure exerted by a liquid on the base and walls of its container due to its own weight | The immense pressure pressing against a dam's concrete face |
| **$P = h \rho g$** | The formula for hydrostatic liquid pressure at vertical depth $h$ | At a depth of $5\text{ m}$ in water, gauge pressure is $50,000\text{ Pa}$ |
| **Communicating vessels** | A series of interconnected containers through which liquid flows freely | A garden watering can or teapot and its spout |
| **Free surface** | The top horizontal boundary surface of a liquid open to the atmosphere | The undisturbed horizontal surface of water in a glass |

---

## Part A: Liquids Exert Pressure on Container Walls and Base

A rigid solid object (like a concrete block) exerts its weight purely **downward** on the surface directly beneath it. A **liquid**, however, flows and continuously seeks to expand sideways. Consequently, liquid contained in a bottle pushes not only downward onto the **bottom base**, but also outward against the **sidewalls**. This was visibly proven by Elena’s bottle: if the water did not push outward against the plastic walls, water would never shoot out of the side puncture holes!

### The Three-Hole Bottle Experiment

```
        Free surface (open water surface)
      ~~~~~~~~~~~~~~~~~~~~~~~~
      │                      │
      │                      o--> (1) Top hole: weak stream, lands nearest
      │                      │
      │                      │
      │                      o----> (2) Middle hole: moderate stream
      │                      │
      │                      │
      │                      │
      │                      o--------> (3) Bottom hole: powerful jet, lands farthest
      │______________________│
```

> **Figure 2.1** – A water bottle with three holes at varying heights: as depth increases, water spurts out with greater speed and projects significantly farther.

This simple experiment reveals three fundamental truths:

1. Liquids exert pressure on the **base** of their container.
2. Liquids exert lateral pressure on the **sidewalls** of their container (propelling the jets outward).
3. **Pressure increases with depth** (explaining why the bottom jet travels farthest and fastest).

### Why Does Liquid Pressure Increase with Depth?

Consider any chosen horizontal slice within a liquid. The liquid resting **above** that slice has weight, and gravity pulls that entire overhead mass downward. Near the free surface, very little liquid exists overhead, so the downward gravitational force is tiny, producing small pressure. At greater depths, a massive column of overhead liquid presses down, generating immense pressure.

It is precisely like a human pyramid or a stack of heavy bricks: the brick at the very bottom bears the cumulative weight of every brick stacked above it!

### At a Given Depth, Liquid Pressure is Equal in All Directions

Inside a static liquid at any specific point, pressure is **isotropic**—it acts with **equal magnitude in all directions**: upward, downward, and sideways. That is why a submerged diver at a fixed depth feels identical water pressure on their face, shoulders, hands, and back. Direction does not alter liquid pressure; **only vertical depth alters it**.

```
          At a single point P at depth h:

                    ^
                    │
              <---- P ---->        (arrows of identical length in all directions)
                   /│\
                    │
                    v
```

> **Figure 2.2** – At any point P inside a liquid, hydrostatic pressure acts equally in all directions: upward, downward, and sideways.

---

## Part B: Deriving the Formula $P = h \rho g$

Let us derive the mathematical expression for the pressure exerted by a liquid at depth $h$. Consider an imaginary vertical cylinder of liquid extending from the free surface down to depth $h$:

- **Cross-sectional base area** = $A$
- **Height of column** = $h$ (vertical depth from free surface)
- **Density of liquid** = $\rho$ (Greek letter *rho*)

```
        Free surface
      ~~~~~~~~~~~~~~~~~~~~~
      │                   │
      │   Imaginary       │  ^
      │   liquid column   │  │
      │   (area A)        │  h
      │                   │  │
      │...................│  v
      │   Target depth h  │
      │___________________│
```

> **Figure 2.3** – An imaginary column of liquid of cross-sectional area $A$ and vertical height $h$. The weight of this liquid column creates the pressure acting across its base area $A$.

**Step 1: Volume of the liquid column**  
$$\text{Volume } V = \text{base area} \times \text{height} = A \times h$$

**Step 2: Mass of the liquid column**  
$$\text{Mass } m = \text{density} \times \text{volume} = \rho \times (A \times h) = A h \rho$$

**Step 3: Weight of the liquid column (downward thrust on base)**  
$$\text{Weight } W = m \times g = (A h \rho) \times g = A h \rho g$$

This downward weight is the thrust acting across area $A$:
$$F = A h \rho g$$

**Step 4: Pressure at depth $h$**  
$$\text{Pressure } P = \frac{F}{A} = \frac{A h \rho g}{A}$$

Notice that area $A$ in the numerator and denominator **cancels out completely**:

> **$P = h \rho g$**

### Dimensional Verification of Units

- $h$ has SI unit metres ($\text{m}$)
- $\rho$ has SI unit kilograms per cubic metre ($\text{kg/m}^3$)
- $g$ has SI unit metres per second squared ($\text{m/s}^2$)

$$[P] = \text{m} \times \frac{\text{kg}}{\text{m}^3} \times \frac{\text{m}}{\text{s}^2} = \frac{\text{kg} \cdot \text{m/s}^2}{\text{m}^2} = \frac{\text{N}}{\text{m}^2} = \mathbf{\text{Pa}} \quad \text{✅}$$

Unless explicitly stated otherwise, we will use $g = 10\text{ m/s}^2$ and pure water density $\rho = 1000\text{ kg/m}^3$ to keep numerical calculations straightforward. Where $g = 9.8\text{ m/s}^2$ is required for high precision, we will state it clearly.

### Important Distinction: Gauge Pressure vs. Absolute Pressure

The pressure calculated by $P = h \rho g$ represents the pressure caused **solely by the weight of the liquid column** itself, commonly referred to as **gauge pressure**. In the real world, the atmosphere presses down upon the open free surface with its own atmospheric pressure ($P_0 \approx 10^5\text{ Pa}$), which adds to the liquid's internal pressure. We will explore atmospheric pressure thoroughly in **Topic 4**. Throughout this topic, unless stated otherwise, "liquid pressure" refers strictly to the hydrostatic pressure generated by the fluid column: $P = h \rho g$.

---

## Part C: Factors Determining Liquid Pressure (and What Does Not Matter)

Examining our derived formula $P = h \rho g$, we find only three variables:

| Factor | Effect on Pressure |
|---|---|
| **Depth ($h$)** | Pressure is directly proportional to depth: doubling $h$ doubles $P$ |
| **Density of liquid ($\rho$)** | Denser liquids (e.g., mercury) exert vastly greater pressure at the same depth |
| **Acceleration due to gravity ($g$)** | Constant at a given planetary location |

Notice what is **completely absent** from the formula: container **shape**, **width**, and the **total volume of liquid** present!

### The Hydrostatic Paradox

```
   Vessel 1             Vessel 2               Vessel 3
   (Straight cylinder)  (Flared wide at top)   (Narrow neck at top)

   │       │           │             │             │   │
   │       │           │             │            /     \
   │       │            \           /            /       \
   │       │             \         /            │         │
   │_______│              \_______/             │_________│

   (All three filled with the same liquid to the exact same vertical depth h)
```

> **Figure 2.4** – Three vessels of drastically different shapes filled to the same vertical depth $h$ with identical liquid. The pressure at the bottom of all three vessels is identical.

Even though Vessel 2 contains much more total liquid than Vessel 3, **the pressure at the base of all three containers is exactly identical**, because $h$, $\rho$, and $g$ are identical! This surprising result is known historically as the **hydrostatic paradox**. 

Why does this happen? In the wide-flared vessel, the sloping sidewalls support a portion of the liquid's weight through upward normal forces. In the narrow-necked vessel, the sloping inward walls push downward on the liquid. When all wall forces are resolved, the pressure at the flat bottom depends **strictly on the vertical depth $h$**, not on the container geometry or total liquid mass.

### Liquid Finds Its Own Level: Communicating Vessels

In any connected body of static fluid, points at the **same horizontal level** (identical depth $h$) experience **identical pressure**. If two points at the same level experienced differing pressures, liquid would immediately surge from the high-pressure zone toward the low-pressure zone until equilibrium was restored.

Consequently, when a liquid is poured into **communicating vessels** (containers connected at the base), the liquid rises to the **exact same horizontal height** in every section, regardless of each tube's width or orientation:

```
   ~~~                 ~~~~~~~~~~~~~~~~                 ~~~
   │ │                   │          │                   │ │
   │ │                   │          │                   │ │
   │ │___________________│          │___________________│ │
   │______________________________________________________│
            Liquid level is identical in all interconnected arms
```

> **Figure 2.5** – Communicating vessels: liquid reaches the exact same horizontal level across all interconnected chambers, regardless of their shapes or widths.

Everyday examples of this principle include:
- A **teapot or electric kettle**: The water level in the pouring spout is always perfectly level with the water level inside the main chamber.
- **Municipal water towers**: Water is stored in an elevated tower so that gravity feeds water through interconnected subterranean pipes, rising up naturally into the taps of multi-storey buildings.

---

## Part D: Solved Examples

In all examples below, we take $g = 10\text{ m/s}^2$ and water density $\rho = 1000\text{ kg/m}^3$ unless specified otherwise. All pressures refer to liquid hydrostatic pressure.

### Example 1: Water Pressure at a Depth of $5\text{ m}$

Calculate the water pressure at a depth of $5\text{ m}$ beneath the surface of a calm lake.

- $P = h \rho g = (5\text{ m}) \times (1000\text{ kg/m}^3) \times (10\text{ m/s}^2)$
- $P = 5 \times 1000 \times 10 = \mathbf{50,000\text{ Pa}} = 5 \times 10^4\text{ Pa} = 50\text{ kPa}$

**Verification:**  
$\text{Thrust per unit area} = 5\text{ m} \times 1000\text{ kg/m}^3 = 5000\text{ kg/m}^2$;  
$5000\text{ kg/m}^2 \times 10\text{ m/s}^2 = 50,000\text{ N/m}^2 = 50,000\text{ Pa}$ ✅

### Example 2: Water Pressure at a Depth of $20\text{ m}$

Calculate the water pressure at a depth of $20\text{ m}$.

- $P = (20\text{ m}) \times (1000\text{ kg/m}^3) \times (10\text{ m/s}^2) = \mathbf{200,000\text{ Pa}} = 2 \times 10^5\text{ Pa} = 200\text{ kPa}$

**Verification:**  
Depth increased fourfold from Example 1 ($5\text{ m} \to 20\text{ m}$); pressure increases proportionally by $4$:  
$50,000\text{ Pa} \times 4 = 200,000\text{ Pa}$ ✅

### Example 3: Pressure Difference Between Two Depths

A water reservoir has observation sensors at depths of $3\text{ m}$ and $8\text{ m}$. What is the pressure difference between them?

- $P_3 = (3\text{ m}) \times (1000\text{ kg/m}^3) \times (10\text{ m/s}^2) = 30,000\text{ Pa}$
- $P_8 = (8\text{ m}) \times (1000\text{ kg/m}^3) \times (10\text{ m/s}^2) = 80,000\text{ Pa}$
- $\Delta P = P_8 - P_3 = 80,000\text{ Pa} - 30,000\text{ Pa} = \mathbf{50,000\text{ Pa}}$

**Direct Verification:**  
Difference in depth $\Delta h = 8\text{ m} - 3\text{ m} = 5\text{ m}$;  
$\Delta P = \Delta h \cdot \rho g = (5\text{ m}) \times 1000 \times 10 = 50,000\text{ Pa}$ ✅  
The pressure difference depends strictly on the vertical separation $\Delta h$.

### Example 4: Pressure Exerted by a Mercury Column

Calculate the pressure at the base of a $0.76\text{ m}$ ($76\text{ cm}$) column of mercury ($\rho_{\text{mercury}} = 13,600\text{ kg/m}^3$).

**Using $g = 10\text{ m/s}^2$:**
- $P = h \rho g = (0.76\text{ m}) \times (13,600\text{ kg/m}^3) \times (10\text{ m/s}^2)$
- $P = 0.76 \times 136,000 = \mathbf{103,360\text{ Pa}} \approx 1.03 \times 10^5\text{ Pa}$

**Using standard $g = 9.8\text{ m/s}^2$ (for high precision):**
- $P = (0.76\text{ m}) \times (13,600\text{ kg/m}^3) \times (9.8\text{ m/s}^2) = \mathbf{101,293\text{ Pa}} \approx 1.013 \times 10^5\text{ Pa}$

**Verification:**  
$13,600 \times 9.8 = 133,280\text{ N/m}^3$; $133,280 \times 0.76 = 101,292.8\text{ Pa} \approx 1.013 \times 10^5\text{ Pa}$ ✅  
This famous value is approximately $1\text{ atmosphere}$ of pressure. Just $76\text{ cm}$ of liquid mercury exerts as much pressure as the entire atmospheric blanket of Earth! We will study this in depth in Topic 4.

### Example 5: Force Exerted on the Floor of a Water Tank

A flat-bottomed rectangular water storage tank has a floor area of $2\text{ m}^2$ and is filled with water to a depth of $3\text{ m}$. Find (a) the pressure on the tank base, and (b) the total force acting on the base.

- Pressure: $P = h \rho g = (3\text{ m}) \times (1000\text{ kg/m}^3) \times (10\text{ m/s}^2) = \mathbf{30,000\text{ Pa}}$
- Total force: $F = P \times A = (30,000\text{ Pa}) \times (2\text{ m}^2) = \mathbf{60,000\text{ N}}$

**Verification:**  
For a straight-sided tank, volume $V = A \times h = 2\text{ m}^2 \times 3\text{ m} = 6\text{ m}^3$.  
Total water mass $m = 6\text{ m}^3 \times 1000\text{ kg/m}^3 = 6000\text{ kg}$.  
Total weight $W = m \times g = 6000\text{ kg} \times 10\text{ m/s}^2 = 60,000\text{ N}$ ✅  
*Remember:* Pressure ($30,000\text{ Pa}$) is force per square metre; total force ($60,000\text{ N}$) is the thrust integrated over the entire $2\text{ m}^2$ area.

### Example 6: Finding Depth Corresponding to a Known Pressure

At what depth beneath the surface of fresh water is the liquid pressure equal to $150,000\text{ Pa}$?

- Starting from $P = h \rho g \implies h = \frac{P}{\rho g}$
- $h = \frac{150,000\text{ Pa}}{(1000\text{ kg/m}^3) \times (10\text{ m/s}^2)} = \frac{150,000}{10,000} = \mathbf{15\text{ m}}$

**Verification:** $P = (15\text{ m}) \times 1000 \times 10 = 150,000\text{ Pa}$ ✅

### Example 7: Comparing Water and Oil at Identical Depth

Two identical tanks are filled to a depth of $4\text{ m}$, one with water ($\rho = 1000\text{ kg/m}^3$) and the other with mineral oil ($\rho = 800\text{ kg/m}^3$). Compare the bottom pressures.

- Water: $P_{\text{water}} = (4\text{ m}) \times (1000\text{ kg/m}^3) \times (10\text{ m/s}^2) = \mathbf{40,000\text{ Pa}}$
- Oil: $P_{\text{oil}} = (4\text{ m}) \times (800\text{ kg/m}^3) \times (10\text{ m/s}^2) = \mathbf{32,000\text{ Pa}}$
- Difference: $40,000\text{ Pa} - 32,000\text{ Pa} = 8000\text{ Pa}$

**Verification:**  
$\frac{P_{\text{oil}}}{P_{\text{water}}} = \frac{32,000}{40,000} = 0.8 = \frac{800}{1000} = \frac{\rho_{\text{oil}}}{\rho_{\text{water}}}$ ✅  
Water exerts higher pressure because it is denser than oil.

### Example 8: Force on a Submarine Viewport Window

A research submarine cruising at a depth of $40\text{ m}$ below the sea surface has a small quartz observation viewport of area $0.02\text{ m}^2$. Calculate the water pressure and the total force bearing on the window (take sea water density $\approx 1000\text{ kg/m}^3$).

- Pressure: $P = h \rho g = (40\text{ m}) \times (1000\text{ kg/m}^3) \times (10\text{ m/s}^2) = \mathbf{400,000\text{ Pa}} = 4 \times 10^5\text{ Pa}$
- Total force: $F = P \times A = (400,000\text{ Pa}) \times (0.02\text{ m}^2) = \mathbf{8000\text{ N}}$

**Verification:**  
$(400,000\text{ N/m}^2) \times 0.02\text{ m}^2 = 8000\text{ N}$ ✅  
An applied force of $8000\text{ N}$ is equivalent to supporting the weight of an $800\text{ kg}$ car concentrated onto that single small glass window! That explains why submarine viewports must be engineered with exceptionally thick, high-strength tempered quartz.

### Example 9: Unit Conversions with Non-Standard Units ($\text{cm}$ and $\text{g/cm}^3$)

A laboratory liquid with density $1.2\text{ g/cm}^3$ fills a glass cylinder to a height of $50\text{ cm}$. Find the pressure at the bottom.

- First convert to standard SI units:
  - $\rho = 1.2\text{ g/cm}^3 = 1.2 \times 1000\text{ kg/m}^3 = \mathbf{1200\text{ kg/m}^3}$
  - $h = 50\text{ cm} = \mathbf{0.5\text{ m}}$
- $P = h \rho g = (0.5\text{ m}) \times (1200\text{ kg/m}^3) \times (10\text{ m/s}^2) = \mathbf{6000\text{ Pa}}$

**Verification:**  
If one incorrectly plugged in numbers without unit conversion ($50 \times 1.2 \times 10 = 600$), the answer would be in incorrect mixed units. In proper SI units, $0.5 \times 1200 \times 10 = 6000\text{ Pa}$ ✅

---

## Part E: Dams, Deep-Sea Divers, Submarines, and Marine Life

### Why Dam Walls Are Built Thick at the Base

Because $P = h \rho g$, hydrostatic pressure increases linearly with depth. At the deepest point of a reservoir behind a dam, the water pressure reaches its absolute maximum, exerting immense lateral force against the concrete structure. 

To withstand this gigantic bursting force and prevent structural shear failure or overturning, civil engineers make dam walls **substantially thicker at the base and progressively narrower towards the top**.

```
       Crest (Top): Slender wall, low water pressure
        │\
        │ \
        │  \       <--- Lateral water pressure
        │   \           (grows stronger with depth)
        │    \
        │     \
        │      \
        │_______\
       Base (Bottom): Very thick, reinforced concrete, high water pressure
```

> **Figure 2.6** – Cross-section of a dam wall: because water pressure increases linearly with depth, the dam structure is engineered with a wide, robust foundation tapering to a narrower crest.

### Deep-Sea Divers and Submarines

As scuba divers descend, water pressure builds steadily. At just $10\text{ m}$ of depth, water pressure is roughly $100\text{ kPa}$ (equal to atmospheric pressure). At $30\text{ m}$, it reaches $300\text{ kPa}$. Beyond certain depths, human lungs cannot expand against the external water pressure without specialized pressurised gas mixes, and deep commercial divers must wear rigid atmospheric diving suits. 

Military and research submarines are built with thick high-yield steel or titanium hulls. At ocean depths of $1000\text{ m}$ (taking seawater density $\rho \approx 1030\text{ kg/m}^3$):
$$P = (1000\text{ m}) \times (1030\text{ kg/m}^3) \times (10\text{ m/s}^2) = 1.03 \times 10^7\text{ Pa} \approx 103\text{ bar}$$
This crushing pressure is over $100$ times greater than surface atmospheric pressure!

### Deep-Sea Marine Creatures

Fishes living in the ocean trenches thrive under hundreds of atmospheres of pressure because their internal fluids, cells, and tissues are pressurized to the exact same level as the surrounding seawater. Because the pressure inside matches the pressure outside, they are not crushed. However, if a deep-sea fish is brought rapidly to the surface, the sudden drop in external pressure causes dissolved gases in its body to expand uncontrollably, which can be fatal.

---

## Part F: Answering the Story: Solving Liam's Dam Question

### The Math Behind the Dam Wall

Suppose the water reservoir behind Liam's dam is $30\text{ m}$ deep. Let us calculate the water pressure at the very base and compare it with the pressure at a depth of $10\text{ m}$:

At the base ($h = 30\text{ m}$):
$$P_{\text{base}} = (30\text{ m}) \times (1000\text{ kg/m}^3) \times (10\text{ m/s}^2) = \mathbf{300,000\text{ Pa}} = 3 \times 10^5\text{ Pa}$$

Near the top ($h = 10\text{ m}$):
$$P_{10\text{m}} = (10\text{ m}) \times (1000\text{ kg/m}^3) \times (10\text{ m/s}^2) = \mathbf{100,000\text{ Pa}} = 1 \times 10^5\text{ Pa}$$

**Comparison:** $\frac{P_{\text{base}}}{P_{10\text{m}}} = \frac{300,000}{100,000} = \mathbf{3}$.  
The water pressure at the bottom is **$3$ times greater** than at $10\text{ m}$! Across every square metre of dam face at the base, the water exerts an outward thrust of:
$$F = P \times A = (300,000\text{ Pa}) \times (1\text{ m}^2) = \mathbf{300,000\text{ N}}$$
This is equivalent to the weight of a $30,000\text{ kg}$ ($30\text{-tonne}$) truck pressing relentlessly against every single square metre of concrete! Now Liam understood completely: building the wall equally thick at the top would waste concrete, but thinning the wall at the bottom would lead to catastrophic failure.

### The Physics of Elena's Bottle Jets

The three pinholes in Elena's bottle were located at depths of $5\text{ cm}$, $10\text{ cm}$, and $15\text{ cm}$ below the water surface:

| Pinhole | Depth $h$ | Gauge Pressure $P = h \rho g$ | Jet Velocity & Distance |
|---|---|---|---|
| Top | $0.05\text{ m}$ | $0.05 \times 1000 \times 10 = \mathbf{500\text{ Pa}}$ | Weakest, lands closest |
| Middle | $0.10\text{ m}$ | $0.10 \times 1000 \times 10 = \mathbf{1000\text{ Pa}}$ | Intermediate velocity and distance |
| Bottom | $0.15\text{ m}$ | $0.15 \times 1000 \times 10 = \mathbf{1500\text{ Pa}}$ | Maximum velocity, projects farthest |

Because the bottom hole experiences the highest pressure ($1500\text{ Pa}$), water is ejected with the highest velocity, carrying the stream farthest across the tray. The dam wall and the plastic bottle follow the exact same law: **pressure scales directly with depth** ($h$).

---

## Common Pitfalls to Avoid

1. **Mistake 1: Confusing slant length with vertical depth.**  
   Depth $h$ in $P = h \rho g$ must **always be the true vertical distance** measured straight down from the free surface to the point of interest. The slanted length along an inclined pipe or slope is irrelevant.  
   - Incorrect: A pipe is $10\text{ m}$ long tilted at an angle, so $h = 10\text{ m}$. ❌  
   - Correct: Measure the vertical drop from the liquid surface down to the pipe outlet (e.g., $6\text{ m}$), so $h = 6\text{ m}$. ✅

2. **Mistake 2: Using the total volume of liquid instead of vertical depth.**  
   Formula $P = h \rho g$ depends solely on depth $h$, not on the total volume of liquid. A narrow test tube and a massive swimming pool filled to the same vertical depth of $2\text{ m}$ produce identical bottom pressure.

3. **Mistake 3: Believing wider containers produce higher bottom pressure.**  
   As demonstrated by the hydrostatic paradox (Figure 2.4), container width and geometry do not affect pressure at a given depth. A wide-mouthed vase and a slender cylinder of identical height filled with water experience the exact same base pressure.

4. **Mistake 4: Failing to convert non-SI units ($\text{cm}$ and $\text{g/cm}^3$) to SI units.**  
   - Incorrect: Taking $h = 50\text{ cm}$, $\rho = 1\text{ g/cm}^3$, and writing $P = 50 \times 1 \times 10 = 500$. ❌  
   - Correct: $h = 0.5\text{ m}$, $\rho = 1000\text{ kg/m}^3$, yielding $P = 0.5 \times 1000 \times 10 = 5000\text{ Pa}$. ✅

5. **Mistake 5: Conflating pressure with force.**  
   $P = h \rho g$ computes **pressure** in pascals ($\text{N/m}^2$). To find the **total force** acting on a surface, you must multiply by area: $F = P \times A$ (measured in $\text{N}$). In Example 5, the base pressure was $30,000\text{ Pa}$, but the total force on the base was $60,000\text{ N}$.

---

## Quick Recap

- Liquids exert pressure both **downward on the container floor** and **laterally outward on container sidewalls**.
- Liquid pressure **increases linearly with vertical depth**: as $h$ increases, $P$ increases.
- At any specific point within a liquid, pressure acts **equally in all directions** (isotropic).
- Derivation: The weight of an overhead column of liquid is $W = A h \rho g$. Dividing by base area $A$ gives **$P = h \rho g$**.
- Hydrostatic pressure depends **only on depth ($h$), density ($\rho$), and gravity ($g$)**; it is entirely independent of container shape, cross-sectional area, or total liquid volume (hydrostatic paradox).
- In interconnected chambers (**communicating vessels**), a liquid always settles at the **same horizontal height** across all arms.
- Total perpendicular force on a surface is given by **$F = P \times A$**. Force and pressure are distinct physical quantities.
- Denser fluids produce proportionately higher pressure at the same depth (e.g., mercury exerts $13.6$ times more pressure than water at identical depth).
- Dam walls must be engineered significantly thicker at the base to withstand the immense hydrostatic pressures generated at depth.

---

## Practice Questions

1. Find the pressure due to water at a depth of $12\text{ m}$. (Take $g = 10\text{ m/s}^2$ and density of water $= 1000\text{ kg/m}^3$.)
2. Find the pressure exerted by oil of density $800\text{ kg/m}^3$ at a depth of $6\text{ m}$. ($g = 10\text{ m/s}^2$)
3. Find the pressure at the base of a mercury column $5\text{ cm}$ high. (Density of mercury $= 13,600\text{ kg/m}^3$, $g = 10\text{ m/s}^2$.)
4. At what depth in fresh water is the gauge pressure equal to $250,000\text{ Pa}$? ($g = 10\text{ m/s}^2$)
5. A rectangular storage tank has a base area of $4\text{ m}^2$ and holds water to a height of $2.5\text{ m}$. Find (a) the pressure on the base, and (b) the total force exerted on the base. ($g = 10\text{ m/s}^2$)
6. Two monitoring sensors in a reservoir are situated at depths of $0.2\text{ m}$ and $0.6\text{ m}$ below the water surface. What is the pressure difference between them? ($g = 10\text{ m/s}^2$)
7. A liquid with a density of $0.9\text{ g/cm}^3$ fills a beaker to a depth of $30\text{ cm}$. Calculate the pressure at the bottom of the beaker. ($g = 10\text{ m/s}^2$)
8. An underwater observation window on a submersible has an area of $0.01\text{ m}^2$ and is positioned $50\text{ m}$ below the water surface. Find the total water force pressing on the window. (Ignore atmospheric pressure; take $g = 10\text{ m/s}^2$.)
9. Three vessels of wildly different shapes are filled with the same liquid to the exact same vertical depth. Is the pressure at the bottom identical or different? Provide a clear scientific reason.
10. Why is a dam wall constructed to be much thicker at the base than at the crest?

### Answers

1. $P = h \rho g = (12\text{ m}) \times (1000\text{ kg/m}^3) \times (10\text{ m/s}^2) = \mathbf{120,000\text{ Pa}} = 120\text{ kPa}$.  
   *Check:* $12 \times 10,000 = 120,000\text{ Pa}$ ✅

2. $P = h \rho g = (6\text{ m}) \times (800\text{ kg/m}^3) \times (10\text{ m/s}^2) = 6 \times 8000 = \mathbf{48,000\text{ Pa}} = 48\text{ kPa}$ ✅

3. $5\text{ cm} = 0.05\text{ m}$.  
   $P = (0.05\text{ m}) \times (13,600\text{ kg/m}^3) \times (10\text{ m/s}^2) = \mathbf{6800\text{ Pa}}$.  
   *Check:* $13,600 \times 10 = 136,000$; $136,000 \times 0.05 = 6800\text{ Pa}$ ✅

4. $h = \frac{P}{\rho g} = \frac{250,000\text{ Pa}}{(1000\text{ kg/m}^3) \times (10\text{ m/s}^2)} = \frac{250,000}{10,000} = \mathbf{25\text{ m}}$.  
   *Check:* $25 \times 10,000 = 250,000\text{ Pa}$ ✅

5. (a) $P = h \rho g = (2.5\text{ m}) \times (1000\text{ kg/m}^3) \times (10\text{ m/s}^2) = \mathbf{25,000\text{ Pa}}$.  
   (b) $F = P \times A = (25,000\text{ Pa}) \times (4\text{ m}^2) = \mathbf{100,000\text{ N}}$.  
   *Check:* Volume $= 4 \times 2.5 = 10\text{ m}^3$; mass $= 10,000\text{ kg}$; weight $= 100,000\text{ N}$ ✅

6. Depth difference $\Delta h = 0.6\text{ m} - 0.2\text{ m} = 0.4\text{ m}$.  
   $\Delta P = \Delta h \cdot \rho g = (0.4\text{ m}) \times (1000\text{ kg/m}^3) \times (10\text{ m/s}^2) = \mathbf{4000\text{ Pa}}$.  
   *Check:* At $0.6\text{ m}$, $P = 6000\text{ Pa}$; at $0.2\text{ m}$, $P = 2000\text{ Pa}$; difference $= 4000\text{ Pa}$ ✅

7. First convert units: $\rho = 0.9\text{ g/cm}^3 = 900\text{ kg/m}^3$, and $h = 30\text{ cm} = 0.3\text{ m}$.  
   $P = (0.3\text{ m}) \times (900\text{ kg/m}^3) \times (10\text{ m/s}^2) = \mathbf{2700\text{ Pa}}$ ✅

8. $P = (50\text{ m}) \times (1000\text{ kg/m}^3) \times (10\text{ m/s}^2) = 500,000\text{ Pa}$.  
   $F = P \times A = (500,000\text{ Pa}) \times (0.01\text{ m}^2) = \mathbf{5000\text{ N}}$ ✅

9. The pressure is **identical** at the bottom of all three vessels. Hydrostatic pressure $P = h \rho g$ depends strictly on vertical depth $h$, liquid density $\rho$, and gravity $g$; it does not depend on container geometry, width, or total liquid volume.

10. Liquid pressure increases directly with vertical depth according to $P = h \rho g$. Because water depth is greatest at the base of the reservoir, the outward bursting force exerted on the dam wall is highest at the bottom. The wall must be constructed significantly thicker at the base to provide the mechanical strength needed to hold back this immense pressure without cracking.

---

Outstanding work! You now understand the physics governing dam design, deep-sea exploration, and bottle spurts through the elegant equation **$P = h \rho g$**.

**What's next?** In Part 3, we move from passive liquid weight to active pressure transmission: what happens when we apply an external force to a confined fluid? We will discover **Pascal's Law** and explore how hydraulic machines effortlessly lift multi-tonne cars with a single gentle push!
