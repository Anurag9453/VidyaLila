# Chapter: Pressure and Fluids (Part 5)

> **Class:** 9 | **Subject:** Physics  
> **This file continues from [pressure-and-fluids-part4.md](pressure-and-fluids-part4.md)** (which covered atmospheric pressure and barometers).  
> **Topics covered in this file:**  
> 5. Upthrust (Buoyancy)  

---

# Topic 5: Upthrust (Buoyancy)

In the previous topic, we saw that fluids (both liquids and gases) exert hydrostatic pressure across all surfaces, and that we live beneath an invisible ocean of air that presses upon us continuously. Now, let us investigate an intriguing physical phenomenon: what happens when we **immerse a solid object into a fluid**? Does the surrounding fluid simply push inward against its surfaces, or does it produce a net directional force on the body? In this topic, we will uncover the origin and properties of the remarkable upward buoyant force exerted by all fluids: **upthrust**.

Throughout this topic, we use **$g = 10\text{ m/s}^2$** and pure water density **$\rho = 1000\text{ kg/m}^3$** for clean, transparent numerical calculations.

---

## Maya's Question at the Lakeside Pebble

During an outdoor science retreat, Maya and her classmates were exploring the shallows of a calm, clear mountain lake. Their field guide, **Mr. Harrison**, led the students to the water's edge, where a large, rounded granite boulder rested on the sandy lakebed under roughly half a metre of crystal-clear water.

Maya rolled up her sleeves and said, "Mr. Harrison, watch me lift this rock!" Reaching into the water, she grasped the submerged boulder with both hands and lifted it smoothly. To her surprise, the boulder felt remarkably **light**! She smiled broadly, "This is surprisingly easy!"

However, the moment she hauled the boulder entirely **out of the lake surface into the open air**, her wrists buckled and her arms strained under the sudden, crushing load: "Whoa! As soon as it broke the water's surface, it suddenly became immensely heavy!"

Mr. Harrison chuckled warmly. "Tell me, Maya: did the granite rock magically change its **true gravitational weight** the instant it left the water? Did the lake make the rock lighter, or is another unseen force lending a hand?"

Maya paused, deep in thought. Let us solve the physics behind this mystery together!

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Fluid** | Any substance capable of continuous flow: liquids and gases | Water, mineral oil, atmospheric air |
| **Upthrust (buoyant force, $F_B$ or $U$)** | The net upward force exerted by a fluid upon any object placed (partially or fully) within it | The upward buoyant push making a stone feel lighter underwater |
| **Immersed (submerged)** | Placed into a fluid, either partially or completely | A rock resting under water, or a floating wooden block |
| **True weight ($W$)** | The actual downward gravitational pull exerted on an object by the Earth: $W = m \times g$ (measured in a vacuum or in air) | A $5\text{ kg}$ boulder weighs $50\text{ N}$ |
| **Apparent weight ($W_{\text{app}}$)** | The effective downward weight measured when immersed in a fluid: $W_{\text{app}} = W - U$ | A $50\text{ N}$ stone feels like only $30\text{ N}$ in water |
| **Spring balance** | An instrument measuring force by the extension of an internal spring | Reads gravitational weight in newtons ($\text{N}$) |
| **Volume immersed ($V$)** | The volume of the portion of the body that lies beneath the fluid surface | For a fully submerged object, $V$ equals its entire volume |

---

## Part A: Why Objects Feel Lighter in Water

You have almost certainly experienced this everyday phenomenon yourself:

- **A Bucket in a Well:** While hauling water from a traditional well, the water-filled bucket feels feather-light as long as it remains submerged beneath the water. The moment the bucket breaks through the water's surface, the rope suddenly pulls taut and heavy.
- **Swimmers in a Pool:** You can easily lift a friend or tread water effortlessly in a swimming pool because the water supports much of your body weight.
- **Submerging an Empty Bottle:** When you push an empty, capped plastic bottle down into a bucket of water, you can feel the water **pushing forcefully upward** against your palm. Release your hand, and the bottle immediately **shoots up** and pops out onto the surface.

In every case, the surrounding fluid exerts an active upward thrust on the object:

> **Upthrust (Buoyant Force) = The net upward force exerted by a fluid on any object placed (partially or fully) inside it.**

Three essential characteristics define upthrust:

1. **Direction:** Upthrust acts strictly **vertically upward** (directly opposite to the downward direction of gravity).
2. **SI Unit:** Because upthrust is a true physical force, its unit is the **newton ($\text{N}$)**.
3. **Universality:** Upthrust is exerted by **all fluids**—both liquids and gases.

**Crucial distinction:** Upthrust does **not** erase or cancel the Earth's gravity. The Earth continues to pull the stone downward with its full gravitational weight ($W = m \times g$), while the fluid pushes upward with upthrust ($U$). Both forces act simultaneously!

```
        Upthrust U (Upward push by fluid)
                      ^
                      │
              +-------+-------+
              │               │
              │  SOLID OBJECT │
              │               │
              +-------+-------+
                      │
                      v
        Weight W = m x g (Downward pull by Earth)
```

> **Figure 5.1** – A body immersed in fluid experiences two simultaneous vertical forces: downward gravitational weight ($W = mg$) and upward buoyant upthrust ($U$).

---

## Part B: Where Does Upthrust Come From? (A Tale of Two Pressures)

This is one of the most elegant deductions in physics! In Topic 2, we proved that hydrostatic pressure increases linearly with vertical depth:

$$P = h \rho g$$

Now consider what happens across the surfaces of an immersed object.

Imagine a solid cube of side length $a$ fully submerged in a liquid of density $\rho$. Let the top horizontal face of the cube be at a vertical depth $h$ below the liquid's free surface. Because the cube has height $a$, its bottom horizontal face lies at a deeper level: $(h + a)$.

```
   Liquid free surface  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                        ^         :                 ^
                        :         :  P_top          :
                      h :         v  (downward push):
                        v  +-----------+  --        :
                           │           │   ^        :  h + a
                           │   CUBE    │   a        :
                           │  (side a) │   v        :
                           +-----------+  --        v
                                  ^
                                  :  P_bottom (upward push, greater!)
```

> **Figure 5.2** – A submerged cube: the top face is at depth $h$, while the bottom face is at depth $(h + a)$. Because hydrostatic pressure increases with depth, the upward pressure pushing on the bottom face is strictly greater than the downward pressure on the top face!

Let us evaluate the forces acting on the cube's faces:

- **Pressure on top face:** $P_{\text{top}} = h \rho g$ (acts **downward** on the top face).
- **Pressure on bottom face:** $P_{\text{bottom}} = (h + a) \rho g$ (acts **upward** on the bottom face).

Notice that $P_{\text{bottom}} > P_{\text{top}}$ because the bottom face is deeper in the fluid! The pressure difference between bottom and top is:

$$\Delta P = P_{\text{bottom}} - P_{\text{top}} = (h + a) \rho g - h \rho g = a \rho g$$

Since $\text{Force} = \text{Pressure} \times \text{Area}$, and the area of the cube's face is $a \times a = a^2$:

$$\text{Net Upward Force (Upthrust } U) = \Delta P \times a^2 = (a \rho g) \times a^2 = a^3 \rho g$$

Notice that $a^3$ is precisely the **geometric volume ($V$)** of the cube! Therefore:

> **$U = V \rho g$**

Where:
- $V$ = volume of the immersed portion of the object (in $\text{m}^3$)
- $\rho$ = density of the **surrounding fluid** (in $\text{kg/m}^3$)
- $g$ = acceleration due to gravity ($10\text{ m/s}^2$)

**What about the lateral sidewalls?**  
At any given depth, horizontal pressures on opposing side faces are exactly equal in magnitude and point in opposite directions. Thus, all horizontal lateral forces **cancel out completely**. The net resultant force on the object is purely vertical and points upward!

*(Note: Although we derived this using a simple cube, the exact same result $U = V \rho g$ holds true mathematically for an immersed body of **any arbitrary shape**!)*

### Numerical Demonstration of the Pressure Difference

Let a cube of side $a = 10\text{ cm} = 0.1\text{ m}$ be submerged in water ($\rho = 1000\text{ kg/m}^3$, $g = 10\text{ m/s}^2$) with its top face at depth $h = 0.5\text{ m}$.

- Top face depth: $h = 0.5\text{ m} \implies P_{\text{top}} = 0.5 \times 1000 \times 10 = \mathbf{5000\text{ Pa}}$
- Bottom face depth: $h + a = 0.5 + 0.1 = 0.6\text{ m} \implies P_{\text{bottom}} = 0.6 \times 1000 \times 10 = \mathbf{6000\text{ Pa}}$
- Pressure differential: $\Delta P = 6000\text{ Pa} - 5000\text{ Pa} = \mathbf{1000\text{ Pa}}$
- Face area: $A = 0.1\text{ m} \times 0.1\text{ m} = 0.01\text{ m}^2$
- Upthrust from pressures: $U = \Delta P \times A = 1000\text{ Pa} \times 0.01\text{ m}^2 = \mathbf{10\text{ N}}$

**Verification using $U = V \rho g$:**  
$$V = (0.1\text{ m})^3 = 0.001\text{ m}^3$$  
$$U = (0.001\text{ m}^3) \times (1000\text{ kg/m}^3) \times (10\text{ m/s}^2) = \mathbf{10\text{ N}} \quad \text{✅}$$  
Both methods yield the exact same $10\text{ N}$! Upthrust is nothing other than the natural geometric consequence of hydrostatic pressure increasing with depth.

---

## Part C: Upthrust in Gases and Atmospheric Air

Because upthrust is a fundamental property of all fluids, **gases also exert upthrust**! However, because air has a relatively low density ($\rho_{\text{air}} \approx 1.2\text{ kg/m}^3$ at sea level compared to $\rho_{\text{water}} = 1000\text{ kg/m}^3$), buoyant forces in air are much smaller than in water.

Nonetheless, for large volumes, atmospheric upthrust is substantial:

- **Helium Party Balloons:** Helium has a density of only $\sim 0.18\text{ kg/m}^3$. The upward buoyant force exerted by the displaced atmospheric air exceeds the total downward gravitational weight of the rubber envelope and helium gas combined. Hence, the balloon accelerates upward into the sky!
- **Hot-Air Balloons:** Heating the air inside a massive envelope causes it to expand and become significantly less dense than the cooler surrounding atmosphere. The colossal volume generates thousands of newtons of atmospheric upthrust, hoisting the basket, fuel burners, and passengers into the clouds!
- **Human Beings in Air:** The surrounding air exerts an upward buoyant force of roughly $0.8\text{ N}$ on an average student's body—far too subtle to be felt without sensitive laboratory scales.

---

## Part D: Apparent Weight

Let us return to Maya's boulder at the lake. A submerged object experiences two opposing forces: downward true weight ($W$) and upward buoyant force ($U$). When you support the object inside the fluid, you only need to exert enough upward force to balance the **difference** between these two forces:

> **$\text{Apparent Weight} = \text{True Weight} - \text{Upthrust}$**  
>  
> **$W_{\text{app}} = W - U$**

This can be directly confirmed using a **spring balance**:
1. Suspend a heavy metal object from a spring balance in air: the balance records its **true gravitational weight** ($W$).
2. Lower the suspended object into a beaker of water: as it submerges, the spring relaxes and the reading **decreases**. The observed loss in weight equals the upward buoyant force!

```
     Suspended in Air                     Immersed in Water

         +-------+                            +-------+
         |Spring |                            |Spring |
         |Balance|                            |Balance|
         +---+---+                            +---+---+
             │ Reading: 50 N                      │ Reading: 30 N
             │                                    │
           (STONE)                       ~~~~~~~~~│~~~~~~~~~ Free surface
                                                  │
                                               (STONE)
```

> **Figure 5.3** – Measuring apparent weight with a spring balance: the balance reads $50\text{ N}$ in air (true weight) and $30\text{ N}$ when immersed in water. The reduction of $20\text{ N}$ corresponds exactly to the upward buoyant force ($U = 20\text{ N}$).

When the stone is held stationary underwater, the vertical forces are balanced:
$$\text{Upward forces} = \text{Downward forces}$$
$$U + W_{\text{app}} = W \implies W_{\text{app}} = W - U$$

### Solving Maya's Lakeside Question

**Example 1 (Maya's Lake Boulder):**  
Maya's boulder has a mass of $m = 5\text{ kg}$ and a total volume of $V = 2 \times 10^{-3}\text{ m}^3$ ($2\text{ litres}$). Water density is $1000\text{ kg/m}^3$, and $g = 10\text{ m/s}^2$. What was the apparent weight of the boulder underwater, and why did it feel so heavy in air?

**Step 1: Calculate true weight in air**  
$$W = m \times g = 5\text{ kg} \times 10\text{ m/s}^2 = \mathbf{50\text{ N}}$$

**Step 2: Calculate upthrust underwater**  
$$U = V \rho g = (2 \times 10^{-3}\text{ m}^3) \times (1000\text{ kg/m}^3) \times (10\text{ m/s}^2) = \mathbf{20\text{ N}}$$

**Step 3: Calculate apparent weight**  
$$W_{\text{app}} = W - U = 50\text{ N} - 20\text{ N} = \mathbf{30\text{ N}}$$

**Verification:**  
Supporting lifting force ($30\text{ N}$) + Upthrust ($20\text{ N}$) = True Weight ($50\text{ N}$) ✅

**The answer to Maya's mystery:**  
The rock's **true weight never changed**—the Earth pulled it with an unwavering $50\text{ N}$ both in and out of the lake. While submerged, the lake water provided an upward buoyant assist of $20\text{ N}$, meaning Maya only had to supply the remaining $30\text{ N}$ (the weight of a $3\text{ kg}$ mass). But the moment the rock emerged into air, the water's buoyant assist vanished, forcing Maya's arms to suddenly shoulder the full $50\text{ N}$! As Mr. Harrison explained: *"The water didn't make the rock lighter; it simply carried part of the load for you!"*

---

## Part E: What Factors Determine Upthrust?

Looking closely at the fundamental formula **$U = V \rho g$**, we see that upthrust depends strictly on:

| Factor | Effect on Upthrust |
|---|---|
| **Density of the fluid ($\rho$)** | Denser fluids exert greater upthrust (e.g., salt water or mercury exerts more upthrust than fresh water) |
| **Volume of the immersed body ($V$)** | The greater the volume submerged, the larger the upthrust |
| **Acceleration due to gravity ($g$)** | Constant at a given planetary location |

Notice what is **completely absent** from the equation:
- The **mass or true weight** of the object does **not** affect upthrust.
- The **material composition** (lead, iron, wood, plastic) does **not** affect upthrust (provided volumes are identical).
- The **geometric shape** of the object does **not** affect upthrust.
- The **depth of immersion** (once the object is fully submerged) does **not** affect upthrust!

### Why Doesn't Upthrust Change with Depth for a Fully Submerged Object?

Students often wonder: *"If pressure increases with depth, shouldn't upthrust increase as an object sinks deeper?"*  
Remember: upthrust is caused by the **difference in pressure** between the bottom and top faces:

$$\Delta P = a \rho g$$

Notice that vertical depth $h$ cancelled out entirely during our derivation in Part B! As a rigid object sinks deeper, the downward pressure on its top increases, but the upward pressure on its bottom increases by the **exact same amount**. The net upward difference remains perfectly constant!

**Example 2 (Testing Depth Independence):**  
A cube of side $10\text{ cm}$ ($V = 0.001\text{ m}^3$) is submerged in water at a top depth of $0.5\text{ m}$, and then lowered to a depth of $2.0\text{ m}$. Compare the upthrust at both depths.

- At $0.5\text{ m}$:  
  $P_{\text{top}} = 5000\text{ Pa}$, $P_{\text{bottom}} = 6000\text{ Pa} \implies \Delta P = 1000\text{ Pa}$.  
  $U = 1000\text{ Pa} \times 0.01\text{ m}^2 = \mathbf{10\text{ N}}$.
- At $2.0\text{ m}$:  
  $P_{\text{top}} = 2.0 \times 10,000 = 20,000\text{ Pa}$, $P_{\text{bottom}} = 2.1 \times 10,000 = 21,000\text{ Pa} \implies \Delta P = 1000\text{ Pa}$.  
  $U = 1000\text{ Pa} \times 0.01\text{ m}^2 = \mathbf{10\text{ N}}$.

**Verification:**  
$U = V \rho g = (0.001\text{ m}^3) \times 1000 \times 10 = \mathbf{10\text{ N}}$ at both depths ✅  
While ambient pressure quadrupled ($5000\text{ Pa} \to 20,000\text{ Pa}$), the net buoyant force remained an identical $10\text{ N}$.

---

## Part F: Weight vs. Upthrust: Will the Object Sink, Float, or Rise?

When a released object is placed into a fluid, its physical behavior is determined by the competition between its downward gravitational weight ($W$) and the upward buoyant force ($U$):

| Condition | Net Vertical Force | Physical Motion / Outcome |
|---|---|---|
| **$W > U$** | Directed downward | **Sinks:** The object accelerates downward to the bottom |
| **$W = U$** | Zero (balanced forces) | **Neutral Equilibrium:** The object remains suspended at rest wherever placed |
| **$W < U$** | Directed upward | **Rises:** The object accelerates upward toward the surface until it floats |

```
   Weight > Upthrust         Weight = Upthrust          Weight < Upthrust

       U (small)                 U (equal)                  U (large)
           ^                         ^                          ^
           │                         │                          │
         [   ]                     [   ]                      [   ]
           │                         │                          │
           v                         v                          v
       W (large)                 W (equal)                  W (small)

    SINKS TO BOTTOM           SUSPENDED IN FLUID           RISES TO SURFACE
```

> **Figure 5.4** – The three states of buoyancy: comparing downward weight ($W$) with upward buoyant force ($U$) determines whether an object sinks, suspends, or rises.

For Maya's boulder: $W = 50\text{ N}$, $U = 20\text{ N}$. Since $W > U$, the boulder sank straight to the bottom of the lake.  
For an empty plastic bottle: $W \approx 1\text{ N}$, but its potential fully submerged upthrust is $10\text{ N}$. Since $U > W$, the bottle shoots upward to the surface. (We will study the exact conditions of surface floatation in Topic 7.)

---

## Part G: Solved Examples

*(In all examples below, take $g = 10\text{ m/s}^2$ and fresh water density $\rho = 1000\text{ kg/m}^3$.)*

### Example 3: Upthrust on a Submerged Cube

A metallic cube of side length $10\text{ cm}$ is completely submerged in water. Calculate the upthrust acting upon it.

- Side length $a = 10\text{ cm} = 0.1\text{ m}$
- Immersed volume $V = a^3 = (0.1\text{ m})^3 = 0.001\text{ m}^3 = 1 \times 10^{-3}\text{ m}^3$
- $U = V \rho g = (1 \times 10^{-3}\text{ m}^3) \times (1000\text{ kg/m}^3) \times (10\text{ m/s}^2) = \mathbf{10\text{ N}}$

**Verification:** $1000 \times 10 \times 0.001 = 10\text{ N}$ ✅

### Example 4: Comparing Upthrust in Different Liquids

A solid object of volume $3 \times 10^{-3}\text{ m}^3$ is completely submerged in mineral oil of density $800\text{ kg/m}^3$.  
(a) Find the upthrust exerted by the oil.  
(b) Compare it with the upthrust when submerged in water.

- (a) In oil:  
  $$U_{\text{oil}} = V \rho_{\text{oil}} g = (3 \times 10^{-3}\text{ m}^3) \times (800\text{ kg/m}^3) \times (10\text{ m/s}^2) = \mathbf{24\text{ N}}$$
- (b) In water:  
  $$U_{\text{water}} = (3 \times 10^{-3}\text{ m}^3) \times (1000\text{ kg/m}^3) \times (10\text{ m/s}^2) = \mathbf{30\text{ N}}$$

**Verification:**  
$\frac{U_{\text{oil}}}{U_{\text{water}}} = \frac{24}{30} = 0.8 = \frac{800}{1000} = \frac{\rho_{\text{oil}}}{\rho_{\text{water}}}$ ✅  
The object experiences less upthrust in oil because oil is less dense than water.

### Example 5: Upthrust in Liquid Mercury

A small solid steel sphere of volume $2 \times 10^{-4}\text{ m}^3$ is pushed completely under liquid mercury ($\rho_{\text{Hg}} = 13,600\text{ kg/m}^3$). What upthrust acts on the sphere?

- $U = V \rho_{\text{Hg}} g = (2 \times 10^{-4}\text{ m}^3) \times (13,600\text{ kg/m}^3) \times (10\text{ m/s}^2)$
- $U = 136,000 \times 0.0002 = \mathbf{27.2\text{ N}}$

**Verification:** $13,600 \times 10 \times 0.0002 = 27.2\text{ N}$ ✅  
Because mercury is exceptionally dense, even a tiny volume experiences a powerful upward buoyant force!

### Example 6: Buoyancy in Salt Water

An underwater sensor casing of volume $5 \times 10^{-3}\text{ m}^3$ is submerged in ocean seawater ($\rho = 1030\text{ kg/m}^3$). Calculate the upthrust.

- $U = (5 \times 10^{-3}\text{ m}^3) \times (1030\text{ kg/m}^3) \times (10\text{ m/s}^2) = 10,300 \times 0.005 = \mathbf{51.5\text{ N}}$

**Verification:** In fresh water, upthrust would be $5 \times 10^{-3} \times 1000 \times 10 = 50\text{ N}$. Salt water produces an extra $1.5\text{ N}$ of buoyancy due to its higher density ($1030 > 1000$) ✅

### Example 7: Determining Volume from Spring Balance Readings

A piece of metal weighs $8\text{ N}$ when suspended in air from a spring balance. When completely immersed in water, the balance reads $5\text{ N}$. Calculate:  
(a) The upthrust acting on the metal piece.  
(b) The volume of the metal piece.

- (a) $\text{Upthrust } U = W_{\text{air}} - W_{\text{water}} = 8\text{ N} - 5\text{ N} = \mathbf{3\text{ N}}$
- (b) From $U = V \rho g \implies V = \frac{U}{\rho g}$:  
  $$V = \frac{3\text{ N}}{(1000\text{ kg/m}^3) \times (10\text{ m/s}^2)} = \frac{3}{10,000} = \mathbf{3 \times 10^{-4}\text{ m}^3} = 300\text{ cm}^3$$

**Verification:**  
$U = (3 \times 10^{-4}\text{ m}^3) \times 1000 \times 10 = 3\text{ N}$ ✅  
$W_{\text{app}} = 8\text{ N} - 3\text{ N} = 5\text{ N}$ ✅

### Example 8: Finding Volume from Known Upthrust

An object fully submerged in water experiences an upward buoyant force of $15\text{ N}$. What is the volume of the object?

- $V = \frac{U}{\rho g} = \frac{15\text{ N}}{(1000\text{ kg/m}^3) \times (10\text{ m/s}^2)} = \frac{15}{10,000} = \mathbf{1.5 \times 10^{-3}\text{ m}^3}$ ($1.5\text{ litres}$)

**Verification:** $U = (1.5 \times 10^{-3}) \times 1000 \times 10 = 15\text{ N}$ ✅

### Example 9: Equal Volumes, Unequal Masses

Two solid cubes of identical volume $V = 1 \times 10^{-3}\text{ m}^3$ are submerged in water. Cube A has a mass of $2\text{ kg}$, while Cube B has a mass of $8\text{ kg}$. Find the upthrust and apparent weight for both cubes.

- Because both cubes have identical volume, they experience the **exact same upthrust**:  
  $$U = (1 \times 10^{-3}\text{ m}^3) \times 1000 \times 10 = \mathbf{10\text{ N}}$$
- **Cube A ($2\text{ kg}$):**  
  True weight: $W_A = 2\text{ kg} \times 10\text{ m/s}^2 = 20\text{ N}$  
  Apparent weight: $W_{\text{app}, A} = 20\text{ N} - 10\text{ N} = \mathbf{10\text{ N}}$
- **Cube B ($8\text{ kg}$):**  
  True weight: $W_B = 8\text{ kg} \times 10\text{ m/s}^2 = 80\text{ N}$  
  Apparent weight: $W_{\text{app}, B} = 80\text{ N} - 10\text{ N} = \mathbf{70\text{ N}}$

**Verification:**  
Even though Cube B has $4$ times the mass of Cube A, their upthrusts are identical ($10\text{ N}$) because buoyant force depends strictly on volume, not mass ✅

### Example 10: Partially Immersed Body

A wooden block has a total volume of $4 \times 10^{-3}\text{ m}^3$. It floats in water such that exactly **half of its volume** is submerged beneath the surface. Calculate the upthrust acting on the block. What would the upthrust be if it were pushed fully underwater?

- Submerged volume: $V_{\text{immersed}} = \frac{4 \times 10^{-3}\text{ m}^3}{2} = \mathbf{2 \times 10^{-3}\text{ m}^3}$
- Upthrust while half-submerged:  
  $$U = (2 \times 10^{-3}\text{ m}^3) \times 1000 \times 10 = \mathbf{20\text{ N}}$$
- If pushed fully underwater ($V_{\text{full}} = 4 \times 10^{-3}\text{ m}^3$):  
  $$U_{\text{full}} = (4 \times 10^{-3}\text{ m}^3) \times 1000 \times 10 = \mathbf{40\text{ N}}$$

**Verification:**  
Half the submerged volume produces half the upthrust: $20\text{ N} = \frac{40\text{ N}}{2}$ ✅  
*Remember:* Always plug the **immersed volume** into $U = V \rho g$, never the total volume if the object is only partially submerged!

### Example 11: Submerged Ball Held and Released

A lightweight plastic ball has a volume of $4 \times 10^{-3}\text{ m}^3$ and a mass of $1\text{ kg}$. It is held completely submerged beneath the surface of a swimming pool.  
(a) Find the upthrust, weight, and net upward force acting on the ball while held.  
(b) Calculate its initial upward acceleration the instant it is released.

- (a) Forces:  
  - Upthrust: $U = (4 \times 10^{-3}\text{ m}^3) \times 1000 \times 10 = \mathbf{40\text{ N}}$ (vertically upward)  
  - Weight: $W = m \times g = 1\text{ kg} \times 10\text{ m/s}^2 = \mathbf{10\text{ N}}$ (downward)  
  - Net force: $F_{\text{net}} = U - W = 40\text{ N} - 10\text{ N} = \mathbf{30\text{ N}}$ (upward)  
  *(A person must push downward with $30\text{ N}$ to keep the ball stationary underwater!)*
- (b) Initial acceleration upon release:  
  From Newton's second law ($F = m a$):  
  $$a = \frac{F_{\text{net}}}{m} = \frac{30\text{ N}}{1\text{ kg}} = \mathbf{30\text{ m/s}^2} \quad \text{(vertically upward)}$$

**Verification:** $m \times a = 1\text{ kg} \times 30\text{ m/s}^2 = 30\text{ N} = F_{\text{net}}$ ✅  
This enormous upward acceleration explains why a light ball or empty bottle vigorously pops out of the water when released!

---

## Common Pitfalls to Avoid

1. **Mistake 1: Believing that an object's true weight decreases in water.**  
   An object's gravitational weight ($W = m \times g$) remains strictly constant. The Earth does not pull any less on Maya's boulder underwater. What decreases is only its **apparent weight** ($W_{\text{app}} = W - U$), because the water provides an upward assisting force.

2. **Mistake 2: Assuming heavier objects receive greater upthrust.**  
   As demonstrated in Example 9, a $2\text{ kg}$ cube and an $8\text{ kg}$ cube of identical size experience the exact same $10\text{ N}$ upthrust. Upthrust depends solely on **immersed volume** and **fluid density**, never on object mass.

3. **Mistake 3: Believing upthrust increases with depth for a fully submerged object.**  
   Ambient hydrostatic pressure increases with depth, but the **difference in pressure ($\Delta P = a \rho g$) between top and bottom faces remains strictly constant**. Therefore, upthrust on a fully submerged rigid object is identical at $1\text{ m}$ depth and $50\text{ m}$ depth.

4. **Mistake 4: Confusing mass (kg) with weight (N) in apparent weight calculations.**  
   Never subtract newtons from kilograms! For a $5\text{ kg}$ mass experiencing $20\text{ N}$ of upthrust, convert mass to weight first ($W = 5 \times 10 = 50\text{ N}$), then subtract: $W_{\text{app}} = 50\text{ N} - 20\text{ N} = 30\text{ N}$. Writing "$5 - 20$" is physically meaningless.

5. **Mistake 5: Using total volume instead of immersed volume for floating objects.**  
   If an object floats half-submerged, only the submerged half displaces fluid. Using the total volume overstates the upthrust by $100\%$ (Example 10).

6. **Mistake 6: Using the density of the object instead of the density of the fluid.**  
   In $U = V \rho g$, the symbol $\rho$ represents the **density of the surrounding fluid** (e.g., water $= 1000\text{ kg/m}^3$), not the density of the rock or metal!

---

## Quick Recap

- **Upthrust (buoyant force):** The resultant upward force exerted by a fluid on any object placed (fully or partially) within it.  
  Acts strictly **vertically upward**; SI unit is the **newton ($\text{N}$)**.
- Upthrust exists in **both liquids and gases** (e.g., rising helium balloons and hot-air balloons).
- **Physical origin:** Hydrostatic pressure is greater on the deeper bottom face than on the top face ($P_{\text{bottom}} > P_{\text{top}}$).  
  This vertical pressure difference creates a net upward thrust:  
  **$U = V \rho g$**, where $\rho$ is fluid density, $V$ is immersed volume, and $g = 10\text{ m/s}^2$. Opposing lateral forces cancel.
- **Apparent Weight:** $\mathbf{W_{\text{app}} = W - U}$. The apparent loss in weight measured by a spring balance equals the upthrust.
- Upthrust depends **only on immersed volume ($V$) and fluid density ($\rho$)**; it is entirely independent of object mass, material, shape, or immersion depth (when fully submerged).
- **Buoyancy outcomes:**  
  - $W > U \implies$ **Sinks**  
  - $W = U \implies$ **Neutral equilibrium (suspended)**  
  - $W < U \implies$ **Rises to surface**
- **Solving Maya's question:** The boulder's true weight remained $50\text{ N}$. In the lake, an upward buoyant force of $20\text{ N}$ assisted her lift ($W_{\text{app}} = 30\text{ N}$). In air, this assist disappeared, forcing her to lift the full $50\text{ N}$.

---

## Practice Questions

*(Take $g = 10\text{ m/s}^2$ and fresh water density $= 1000\text{ kg/m}^3$ unless specified otherwise.)*

1. A solid object of volume $5 \times 10^{-4}\text{ m}^3$ is completely submerged in:  
   (a) fresh water  
   (b) oil of density $800\text{ kg/m}^3$  
   (c) liquid mercury of density $13,600\text{ kg/m}^3$  
   Find the upthrust acting on the object in each fluid.

2. A spring balance reads $60\text{ N}$ when a rock is suspended in air, and $45\text{ N}$ when the rock is fully submerged in water. Calculate the upthrust and the volume of the rock.

3. A solid cube of side $20\text{ cm}$ is completely immersed in:  
   (a) fresh water  
   (b) salt water of density $1030\text{ kg/m}^3$  
   Find the upthrust in each case.

4. A wooden block of total volume $6 \times 10^{-3}\text{ m}^3$ floats in water with one-third ($1/3$) of its volume submerged beneath the surface. Calculate the upthrust acting on the block.

5. A metal casting weighs $12\text{ N}$ in air. Its volume is $4 \times 10^{-4}\text{ m}^3$. Find its apparent weight when completely immersed in water.

6. A plastic ball of mass $0.5\text{ kg}$ and volume $2 \times 10^{-3}\text{ m}^3$ is held completely submerged under water and then released. Find:  
   (a) the upthrust acting on the ball  
   (b) its downward gravitational weight  
   (c) the net accelerating force  
   (d) its initial upward acceleration immediately upon release.

7. A cube of side $20\text{ cm}$ is submerged in water such that its top horizontal face lies at a depth of $1\text{ m}$. Calculate the hydrostatic pressure on the top face, the pressure on the bottom face, and deduce the net upthrust. Verify your answer using $U = V \rho g$.

8. Two solid spheres have identical volumes. One is made of solid lead and the other of solid aluminium. Both are completely submerged in water. Which sphere experiences a greater upthrust? Explain your reasoning clearly.

9. State whether each statement is True or False, providing a reason:  
   (a) The gravitational weight of a stone decreases when placed in water.  
   (b) The upthrust acting on a fully submerged solid increases as it sinks deeper into a lake.  
   (c) The direction of upthrust is always directed vertically upward.  
   (d) A helium-filled balloon rises in air because the atmospheric upthrust acting on it exceeds its total weight.

10. Maya lifts a different stone, of mass $6\text{ kg}$ and volume $2.5 \times 10^{-3}\text{ m}^3$, from the bottom of the lake. Explain in your own words why it feels much heavier when lifted out of the water, and determine the lifting force she must exert while it is in the water and when it is in the air.

### Answers

1. $U = V \rho g$:  
   (a) Water: $(5 \times 10^{-4}\text{ m}^3) \times 1000 \times 10 = \mathbf{5\text{ N}}$.  
   (b) Oil: $(5 \times 10^{-4}\text{ m}^3) \times 800 \times 10 = \mathbf{4\text{ N}}$.  
   (c) Mercury: $(5 \times 10^{-4}\text{ m}^3) \times 13,600 \times 10 = \mathbf{68\text{ N}}$.  
   *Check:* $5 \div 4 = 1000 \div 800$ ✅; $68 \div 5 = 13.6 = 13,600 \div 1000$ ✅

2. $\text{Upthrust } U = 60\text{ N} - 45\text{ N} = \mathbf{15\text{ N}}$.  
   $V = \frac{U}{\rho g} = \frac{15\text{ N}}{(1000\text{ kg/m}^3) \times (10\text{ m/s}^2)} = \mathbf{1.5 \times 10^{-3}\text{ m}^3}$.  
   *Check:* $(1.5 \times 10^{-3}) \times 1000 \times 10 = 15\text{ N}$ ✅

3. Volume $V = (0.2\text{ m})^3 = 0.008\text{ m}^3 = 8 \times 10^{-3}\text{ m}^3$.  
   (a) Fresh water: $(8 \times 10^{-3}\text{ m}^3) \times 1000 \times 10 = \mathbf{80\text{ N}}$.  
   (b) Salt water: $(8 \times 10^{-3}\text{ m}^3) \times 1030 \times 10 = \mathbf{82.4\text{ N}}$.  
   *Check:* $82.4 \div 80 = 1.03$ ✅

4. Immersed volume: $V_{\text{immersed}} = \frac{6 \times 10^{-3}\text{ m}^3}{3} = 2 \times 10^{-3}\text{ m}^3$.  
   $U = (2 \times 10^{-3}\text{ m}^3) \times 1000 \times 10 = \mathbf{20\text{ N}}$.  
   *Check:* Using the full volume would mistakenly yield $60\text{ N}$ ✅

5. $U = (4 \times 10^{-4}\text{ m}^3) \times 1000 \times 10 = 4\text{ N}$.  
   $W_{\text{app}} = W - U = 12\text{ N} - 4\text{ N} = \mathbf{8\text{ N}}$.  
   *Check:* $8 + 4 = 12\text{ N}$ ✅

6. (a) $U = (2 \times 10^{-3}\text{ m}^3) \times 1000 \times 10 = \mathbf{20\text{ N}}$ (upward).  
   (b) $W = 0.5\text{ kg} \times 10\text{ m/s}^2 = \mathbf{5\text{ N}}$ (downward).  
   (c) $F_{\text{net}} = 20\text{ N} - 5\text{ N} = \mathbf{15\text{ N}}$ (vertically upward).  
   (d) $a = \frac{F_{\text{net}}}{m} = \frac{15\text{ N}}{0.5\text{ kg}} = \mathbf{30\text{ m/s}^2}$ (vertically upward).  
   *Check:* $0.5\text{ kg} \times 30\text{ m/s}^2 = 15\text{ N}$ ✅

7. Cube side $a = 0.2\text{ m}$; face area $A = (0.2\text{ m})^2 = 0.04\text{ m}^2$.  
   - $P_{\text{top}} = (1\text{ m}) \times 1000 \times 10 = \mathbf{10,000\text{ Pa}}$.  
   - $P_{\text{bottom}} = (1 + 0.2\text{ m}) \times 1000 \times 10 = (1.2\text{ m}) \times 1000 \times 10 = \mathbf{12,000\text{ Pa}}$.  
   - $\Delta P = 12,000\text{ Pa} - 10,000\text{ Pa} = 2000\text{ Pa}$.  
   - $U = \Delta P \times A = 2000\text{ Pa} \times 0.04\text{ m}^2 = \mathbf{80\text{ N}}$.  
   *Verification with formula:*  
   $V = (0.2\text{ m})^3 = 0.008\text{ m}^3 \implies U = 0.008 \times 1000 \times 10 = \mathbf{80\text{ N}}$ ✅

8. Both spheres experience **exactly the same upthrust**. Upthrust ($U = V \rho g$) depends solely on the volume of displaced liquid and the liquid's density. Because both spheres have identical volume and are submerged in the same fluid, upthrust is identical regardless of material or mass. (Lead is much heavier, so its apparent weight will be higher, but upthrust remains identical.)

9. (a) **False** ❌. Gravitational weight ($W = mg$) is unchanged; only apparent weight decreases due to buoyant assistance.  
   (b) **False** ❌. For a fully submerged rigid body, upthrust is independent of depth because the pressure differential between top and bottom remains constant.  
   (c) **True** ✅. Upthrust always acts vertically upward against gravity.  
   (d) **True** ✅. A net upward force accelerates the balloon upward.

10. Downward weight: $W = 6\text{ kg} \times 10\text{ m/s}^2 = \mathbf{60\text{ N}}$ (constant everywhere).  
    Underwater upthrust: $U = (2.5 \times 10^{-3}\text{ m}^3) \times 1000 \times 10 = \mathbf{25\text{ N}}$.  
    In water, Maya only exerts the apparent weight:  
    $$F_{\text{water}} = W - U = 60\text{ N} - 25\text{ N} = \mathbf{35\text{ N}}$$  
    In air, buoyant assistance is negligible, so she must support the full true weight:  
    $$F_{\text{air}} = \mathbf{60\text{ N}}$$  
    The rock feels heavy in air not because it gained weight, but because the water's $25\text{ N}$ upward assist was removed!  
    *Check:* $35\text{ N} + 25\text{ N} = 60\text{ N}$ ✅

---

Now you can explain to Maya why the submerged boulder felt so light underwater and so heavy in the air: **the rock's true weight never changed, but the water provided an upward buoyant lift equal to $V \rho g$.**

**What's next?** We calculated upthrust using the formula $U = V \rho g$. But is there an experimental method to measure upthrust directly by catching displaced fluid? In Part 6, we will discover **Archimedes' Principle**, hear the famous story of the bathtub and the gold crown, and explore **Relative Density**!
