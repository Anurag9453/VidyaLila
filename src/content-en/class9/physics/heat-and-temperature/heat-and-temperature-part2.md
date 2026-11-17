# Chapter: Heat and Temperature (Part 2)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [heat-and-temperature.md](heat-and-temperature.md)** (covering the distinction between heat and temperature, Celsius, Fahrenheit, and Kelvin scales, and thermometry). For fluid upthrust and ice flotation principles, refer to [pressure-and-fluids-part7.md](../pressure-and-fluids/pressure-and-fluids-part7.md).
> **Topics covered in this file:**
> 2. Thermal Expansion: Why Substances Expand Upon Heating

---

# Topic 2: Thermal Expansion: Why Substances Expand Upon Heating

In the previous topic, we saw how a **liquid-in-glass thermometer** operates: when the bulb contacts a warm substance, the internal **mercury expands** and rises along the narrow capillary tube. At that stage, we simply accepted that "liquids expand when heated." Now we must ask fundamental physical questions: **why do substances expand when heated?** Does thermal expansion occur only in liquids, or do solid steel beams, water, and gases all expand? If everything expands upon heating, how do engineers exploit this property, and what hazards does it pose in structural engineering?

In this topic, all temperatures are expressed in degrees Celsius ($^\circ\text{C}$). A change (or rise) in temperature is written as $\Delta T$, where $\Delta T = T_{\text{final}} - T_{\text{initial}}$.

---

## The Mystery of the Bridge Joints

On a long steel highway bridge, structural engineer **Mr. Davies** was conducting his routine safety inspection. Accompanying him was Class 9 student **Sophia**, who was gathering real-world data for her physics project on applied mechanics.

As they walked along the pedestrian walkway, Sophia stopped abruptly. "Mr. Davies, look down here! Right across the roadway, there is a narrow transverse gap fitted with interlocking metal **comb-like teeth**. A few hundred meters ahead, there is another one. Has the bridge cracked or suffered structural damage?"

Mr. Davies chuckled reassuringly. "Not at all, Sophia. That gap is designed into the structure with absolute precision. Those are **expansion joints**. Notice how narrow the gap is this afternoon under the blazing summer sun. When I surveyed this exact joint early on a freezing winter morning, the gap was more than twice as wide."

Sophia's eyes widened. "Do you mean the width of the bridge joints **changes with the seasons**? Steel seems completely rigid and unyielding—how can an entire bridge expand? And what would happen if engineers built the bridge as a single solid span without any gaps?"

"Those are brilliant questions," Mr. Davies replied. "Let us first examine the microscopic mechanism of thermal expansion. Then we will calculate exactly how much a $100\text{-meter}$ steel bridge segment elongates during a hot summer." We will resolve Sophia's bridge problem in Part D.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Thermal expansion** | The increase in the dimensions (length, area, or volume) of a body when its temperature rises | Elongation of railway tracks on hot summer afternoons |
| **Thermal contraction** | The decrease in the dimensions of a body when its temperature drops | Narrowing of overhead power lines during winter nights |
| **Linear expansion** | Expansion predominantly in one dimension (length) | Elongation of long metal rods, rails, or cables |
| **Superficial (area) expansion** | Expansion across two dimensions (surface area) | Increase in surface area of a heated metal plate |
| **Cubical (volume) expansion** | Expansion across three dimensions (volume) | Swelling of heated metal spheres, liquids, and gases |
| **$\Delta L$ (Change in length)** | The elongation of an object: $\Delta L = L_{\text{final}} - L_{\text{initial}}$ | A $20\text{-m}$ rail expanding by $9.6\text{ mm}$ |
| **$\Delta T$ (Temperature change)** | The difference between final and initial temperatures: $\Delta T = T_{\text{f}} - T_{\text{i}}$ | Warming from $20\text{ }^\circ\text{C}$ to $50\text{ }^\circ\text{C}$ yields $\Delta T = 30\text{ }^\circ\text{C}$ |
| **Coefficient of linear expansion ($\alpha$)** | Fractional increase in length of a substance per degree Celsius rise in temperature | For steel, $\alpha \approx 1.2 \times 10^{-5}\text{ /}^\circ\text{C}$ |
| **Expansion joint** | An engineered gap left in bridges, buildings, and pavements to accommodate thermal expansion safely | Interlocking toothed bridge joints |
| **Bimetallic strip** | A welded strip composed of two dissimilar metals having different thermal expansion coefficients | Thermostats, electric irons, fire alarms |
| **Anomalous expansion** | Unusual thermal behavior where a substance contracts instead of expanding upon heating | Pure water contracting when warmed from $0\text{ }^\circ\text{C}$ to $4\text{ }^\circ\text{C}$ |

---

## Part A: Why Do Substances Expand?

All matter is composed of tiny constituent particles—atoms and molecules. In a solid, these particles are arranged in a structured lattice, held in equilibrium positions by strong interatomic forces. Even at room temperature, these particles are not motionless; they continuously **vibrate** back and forth about their mean equilibrium positions, much like weights connected by microscopic springs.

When a substance is **heated**, it absorbs thermal energy, increasing the kinetic energy of its constituent particles. As a result, the particles **vibrate with greater amplitude and intensity**. Because the interatomic potential energy curve is asymmetric (particles repel each other more strongly when pushed together than when pulled apart), the particles require more spatial clearance as their vibrational amplitude swells. Consequently, the **average separation between neighboring particles increases**.

When this microscopic separation increases across billions of trillions of atoms simultaneously throughout the bulk material, the overall dimensions of the object increase. This phenomenon is known as **thermal expansion**.

Conversely, when a substance is **cooled**, particle vibrational energy diminishes. The particles settle closer together, and the macroscopic body undergoes **thermal contraction**.

> **Crucial Note:** The particles themselves do not swell in size. Rather, the **average inter-particle distance** between them increases due to heightened vibrational amplitude.

Thus, the foundational physical rule states: **almost all substances expand when heated and contract when cooled.** (Pure water exhibits an anomalous exception between $0\text{ }^\circ\text{C}$ and $4\text{ }^\circ\text{C}$, explored in Part G).

---

## Part B: Thermal Expansion in Solids: Three Forms

In solid bodies, thermal expansion manifests in three distinct geometric forms:
1. **Linear expansion:** Expansion in length along a single dominant dimension (rods, wires, railway tracks).
2. **Superficial (area) expansion:** Expansion across two dimensions over a surface (metal plates, sheets).
3. **Cubical (volume) expansion:** Expansion throughout three dimensions across total volume (solid metal cubes, spheres).

In reality, isotropic solids expand uniformly in all spatial directions simultaneously. We categorize them geometrically based on which dimensions are practically significant for the engineering problem at hand.

### Demonstration 1: Ball and Ring (Gravesande's Ring)

A classic physics apparatus consists of a brass sphere and a matching circular brass ring. At room temperature, the sphere has just enough clearance to pass smoothly through the ring.

When the brass sphere is heated over a Bunsen burner for several minutes, its volume expands in all directions. When an attempt is made to drop it through the ring, **the hot sphere fails to pass through and rests on top of the ring**. After the sphere is allowed to cool down to room temperature (or quenched in cold water), it contracts back to its original dimensions and drops effortlessly through the ring once again.

```
   Cold Sphere (Room Temperature):         Heated Sphere:

          │  <- Suspension chain                 │  <- Suspension chain
         (●)  Normal sphere                     ( ● )  Thermally expanded sphere
      ═══   ═══  <- Ring aperture            ═══   ═══  <- Ring aperture
          ↓
   Sphere passes freely through ring.     Sphere too large: lodges on ring!
```

> **Figure 2.1** – The ball and ring demonstration: thermal expansion increases the diameter of the heated sphere, preventing it from passing through the unheated ring.

### Demonstration 2: Rod and Pointer

A metal rod is clamped rigidly at one end, while its free end rests against a light, pivoted pointer geared to an indexed angular scale. When a line of gas flames heats the rod along its length, the rod undergoes linear expansion. Because one end is immovably fixed, the expanding rod drives the free end outward, forcing the pointer to sweep across the dial. The magnified movement of the pointer provides undeniable visual proof of linear expansion.

```
     Clamp           Metal rod (elongates upon heating)          Pointer
     ┌──┐                                                           /
     │  ├═══════════════════════════════════════════════════╗      /
     │  │                                                   ╟────>/   Scale: 0 ... 5
     └──┘                                                   ╜    /
   (Fixed)                 ^  ^  ^  ^  ^
                        Bunsen burner flames
```

> **Figure 2.2** – The rod and pointer apparatus: heating elongates the rod, causing its free end to rotate a pivoted pointer against an angular scale.

### Demonstration 3: Bimetallic Strip

When two strips of dissimilar metals possessing different expansion characteristics are welded or riveted together side-by-side, heating causes the composite strip to curve predictably. We analyze this remarkable device in detail in Part E.

---

## Part C: How Much Does It Expand? Three Determining Factors

Mr. Davies posed a thought question to Sophia: "If you heat several different metal rods in a laboratory, what physical factors govern how much their lengths will increase?"

Careful experimental investigations establish that the linear expansion ($\Delta L$) of a solid depends on three factors:
1. **Original Length ($L$):** Longer rods possess more atomic layers along their length, so the cumulative increase in atomic separation produces a proportionately larger total elongation.
2. **Rise in Temperature ($\Delta T$):** Greater temperature increments impart greater vibrational energy, resulting in larger increases in interatomic spacing.
3. **Nature of the Material:** Different metals have different lattice bonding strengths; copper atoms separate more readily than steel atoms under identical thermal conditions.

For a given material, linear expansion obeys a direct proportional relationship:

$$\Delta L \propto L \times \Delta T$$

This fundamental proportionality implies:
- Doubling the original length doubles the elongation ($2 \times \Delta L$).
- Tripling the temperature rise triples the elongation ($3 \times \Delta L$).
- If both original length and temperature rise are scaled, their scale factors multiply (e.g., doubling length and tripling temperature rise yields $2 \times 3 = 6$ times the elongation).

### An Essential Note: Temperature Change ($\Delta T$) Matters, Not Absolute Temperature

Whether a rod warms from $10\text{ }^\circ\text{C}$ to $40\text{ }^\circ\text{C}$ or from $60\text{ }^\circ\text{C}$ to $90\text{ }^\circ\text{C}$, the temperature change is identical: $\Delta T = 30\text{ }^\circ\text{C}$. Consequently, the thermal elongation is exactly the same in both cases. Expansion is driven exclusively by the **temperature increment ($\Delta T$)**, never by the absolute final temperature alone.

---

### Example 1 (Proportional Ratio Method: Length and $\Delta T$)

A $1\text{-m}$ steel rod expands by $0.6\text{ mm}$ when heated through a temperature rise of $50\text{ }^\circ\text{C}$. For the same type of steel, determine the expansion of:
(a) A $5\text{-m}$ rod heated through the same $\Delta T = 50\text{ }^\circ\text{C}$.
(b) A $1\text{-m}$ rod heated through $\Delta T = 150\text{ }^\circ\text{C}$ (triple the temperature rise).
(c) A $5\text{-m}$ rod heated through $\Delta T = 150\text{ }^\circ\text{C}$.

*Given reference:* $L_0 = 1\text{ m}$, $\Delta T_0 = 50\text{ }^\circ\text{C} \implies \Delta L_0 = 0.6\text{ mm}$.

- **(a)** Length scaled by $5$, $\Delta T$ unchanged:
  $$\Delta L = 0.6\text{ mm} \times 5 = \mathbf{3\text{ mm}}$$
- **(b)** Length unchanged, $\Delta T$ scaled by $3$ ($150 \div 50 = 3$):
  $$\Delta L = 0.6\text{ mm} \times 3 = \mathbf{1.8\text{ mm}}$$
- **(c)** Length scaled by $5$ and $\Delta T$ scaled by $3$:
  $$\Delta L = 0.6\text{ mm} \times 5 \times 3 = \mathbf{9\text{ mm}}$$

*Verification:* Stepwise calculation: A $5\text{-m}$ rod at $\Delta T = 50\text{ }^\circ\text{C}$ yields $3\text{ mm}$. Tripling $\Delta T$ to $150\text{ }^\circ\text{C}$ gives $3\text{ mm} \times 3 = 9\text{ mm}$, confirming consistency.

---

### Example 2 (Temperature Change Governs Expansion, Not Final Temperature)

Two identical brass rods, Rod A and Rod B, are heated independently. Rod A is heated from $10\text{ }^\circ\text{C}$ to $40\text{ }^\circ\text{C}$. Rod B is heated from $60\text{ }^\circ\text{C}$ to $90\text{ }^\circ\text{C}$. Which rod undergoes a greater elongation?

- Rod A: $\Delta T_A = 40\text{ }^\circ\text{C} - 10\text{ }^\circ\text{C} = 30\text{ }^\circ\text{C}$.
- Rod B: $\Delta T_B = 90\text{ }^\circ\text{C} - 60\text{ }^\circ\text{C} = 30\text{ }^\circ\text{C}$.

Because both rods share identical original lengths, identical materials, and identical temperature increments ($\Delta T = 30\text{ }^\circ\text{C}$), **both rods expand by the exact same amount**.

*Caution:* It is a common misconception to assume Rod B expands more because its final temperature ($90\text{ }^\circ\text{C}$) is higher. Thermal expansion depends strictly on the temperature change $\Delta T$.

---

### Material Dependence: Coefficient of Linear Expansion ($\alpha$)

To quantify the thermal behavior of different substances without needing custom reference measurements each time, physicists define a material-specific constant: the **coefficient of linear expansion ($\alpha$)**.

> The **coefficient of linear expansion ($\alpha$)** of a substance is defined as the fractional increase in length per unit original length per degree Celsius (or per kelvin) rise in temperature:
> $$\alpha = \frac{\Delta L}{L \times \Delta T}$$

The SI unit of $\alpha$ is $\text{K}^{-1}$ or $^\circ\text{C}^{-1}$ (read as "per degree Celsius").

| Material | Approximate $\alpha$ ($\text{/}^\circ\text{C}$) |
|---|---|
| Invar (nickel-iron alloy) | $0.09 \times 10^{-5}$ |
| Steel | $1.2 \times 10^{-5}$ |
| Copper | $1.7 \times 10^{-5}$ |
| Brass | $1.9 \times 10^{-5}$ |
| Aluminium | $2.4 \times 10^{-5}$ |

Rearranging the definition yields our central computational formula:

$$\Delta L = \alpha \times L \times \Delta T$$

Where:
- $L$ = original length (in meters, $\text{m}$)
- $\Delta T$ = temperature rise (in $^\circ\text{C}$)
- $\alpha$ = coefficient of linear expansion (in $\text{/}^\circ\text{C}$)
- $\Delta L$ = elongation (in meters, $\text{m}$)

*Notice how small $\alpha$ is:* For steel, $\alpha = 0.000012\text{ /}^\circ\text{C}$. This means a $1\text{-m}$ steel rod warms by $1\text{ }^\circ\text{C}$, its length increases by just $0.000012\text{ m} = 0.012\text{ mm}$—a tiny amount, yet across large structures, the cumulative effect produces immense mechanical forces!

---

### Example 3 (Thermal Expansion of a Steel Railway Track)

A steel railway rail has an original length of $20\text{ m}$ on a cold morning. During the peak heat of the day, its temperature rises by $40\text{ }^\circ\text{C}$. Calculate the elongation of the rail. ($\alpha_{\text{steel}} = 1.2 \times 10^{-5}\text{ /}^\circ\text{C}$)

- $L = 20\text{ m}$, $\Delta T = 40\text{ }^\circ\text{C}$, $\alpha = 1.2 \times 10^{-5}\text{ /}^\circ\text{C}$
- $\Delta L = \alpha \times L \times \Delta T$
- $\Delta L = (1.2 \times 10^{-5}\text{ /}^\circ\text{C}) \times (20\text{ m}) \times (40\text{ }^\circ\text{C})$
- $\Delta L = 1.2 \times 10^{-5} \times 800\text{ m} = 960 \times 10^{-5}\text{ m} = 0.0096\text{ m}$
- In millimeters: $0.0096\text{ m} \times 1000\text{ mm/m} = \mathbf{9.6\text{ mm}}$

*Physical Meaning:* The $20\text{-meter}$ rail expands by almost one full centimeter ($9.6\text{ mm}$). If track layers fail to leave an expansion gap between consecutive rails, the expanding rails press against each other with tons of thermal stress, causing catastrophic track buckling!

---

## Part D: Solving the Bridge Problem

Sophia and Mr. Davies returned to the expansion joint on the highway bridge. "Mr. Davies, what is the length of this bridge span, and what seasonal temperature swing does it experience?"

"Each continuous steel span of this bridge measures exactly **$100\text{ m}$**," Mr. Davies explained. "Between a freezing winter night at $-5\text{ }^\circ\text{C}$ and an intense summer heatwave at $40\text{ }^\circ\text{C}$, the steel experiences a temperature variation of **$45\text{ }^\circ\text{C}$**. Let us calculate how much this span expands!"

---

### Example 4 (Expansion of a Bridge Section)

Calculate the thermal elongation of a $100\text{-m}$ steel bridge span when subjected to a temperature rise of $30\text{ }^\circ\text{C}$. ($\alpha_{\text{steel}} = 1.2 \times 10^{-5}\text{ /}^\circ\text{C}$)

- $L = 100\text{ m}$, $\Delta T = 30\text{ }^\circ\text{C}$, $\alpha = 1.2 \times 10^{-5}\text{ /}^\circ\text{C}$
- $\Delta L = \alpha \times L \times \Delta T$
- $\Delta L = (1.2 \times 10^{-5}\text{ /}^\circ\text{C}) \times (100\text{ m}) \times (30\text{ }^\circ\text{C})$
- $\Delta L = 1.2 \times 10^{-5} \times 3000\text{ m} = 3600 \times 10^{-5}\text{ m} = 0.036\text{ m}$
- $\Delta L = \mathbf{3.6\text{ cm}}$

Sophia looked surprised. "Is $3.6\text{ cm}$ really enough to warrant all this complex engineering?"

"Absolutely!" answered Mr. Davies. "Steel has an extraordinarily high elastic modulus. If you rigidly anchor both ends of a $100\text{-meter}$ bridge span and prevent it from expanding by that $3.6\text{ cm}$, the resulting thermal stress would exceed thousands of tons of compressive force! The steel girders would buckle, shear their foundation bolts, and shatter the concrete abutments. That is why one end of the bridge span rests on fixed bearings while the other rests on **expansion rollers and toothed comb joints** that allow the bridge to glide back and forth freely as the temperature oscillates."

---

### Example 5 (Required Clearance Gap Across Seasonal Temperature Range)

A steel bridge truss has an effective length of $50\text{ m}$. In that region, the minimum winter temperature is $5\text{ }^\circ\text{C}$ and the maximum summer temperature reaches $45\text{ }^\circ\text{C}$. Determine the minimum clearance gap that must be provided in the expansion joint. ($\alpha = 1.2 \times 10^{-5}\text{ /}^\circ\text{C}$)

- Temperature range: $\Delta T = 45\text{ }^\circ\text{C} - 5\text{ }^\circ\text{C} = 40\text{ }^\circ\text{C}$
- $L = 50\text{ m}$, $\alpha = 1.2 \times 10^{-5}\text{ /}^\circ\text{C}$
- $\Delta L = \alpha \times L \times \Delta T = (1.2 \times 10^{-5}) \times 50 \times 40 = 1.2 \times 10^{-5} \times 2000$
- $\Delta L = 2400 \times 10^{-5}\text{ m} = 0.024\text{ m} = \mathbf{2.4\text{ cm}}$

*Conclusion:* The expansion joint must provide at least $2.4\text{ cm}$ of free travel to prevent structural binding during extreme summer heat.

---

### Example 6 (Aluminium Rod: $\Delta L$ and Final Length)

A $2\text{-m}$ aluminium rod is heated from an ambient temperature of $20\text{ }^\circ\text{C}$ up to $70\text{ }^\circ\text{C}$. Determine its increase in length and its new total length. ($\alpha_{\text{aluminium}} = 2.4 \times 10^{-5}\text{ /}^\circ\text{C}$)

- $\Delta T = 70\text{ }^\circ\text{C} - 20\text{ }^\circ\text{C} = 50\text{ }^\circ\text{C}$
- $L = 2\text{ m}$, $\alpha = 2.4 \times 10^{-5}\text{ /}^\circ\text{C}$
- $\Delta L = \alpha \times L \times \Delta T = (2.4 \times 10^{-5}) \times 2 \times 50 = 2.4 \times 10^{-5} \times 100$
- $\Delta L = 240 \times 10^{-5}\text{ m} = 0.0024\text{ m} = \mathbf{2.4\text{ mm}}$
- $L_{\text{final}} = L + \Delta L = 2\text{ m} + 0.0024\text{ m} = \mathbf{2.0024\text{ m}}$

---

### Example 7 (Steel vs. Aluminium: Same Initial Length, Same $\Delta T$)

Two rods—one made of steel and the other of aluminium—have identical initial lengths and undergo identical temperature increases. Compare their thermal expansions by finding the ratio $\Delta L_{\text{steel}} : \Delta L_{\text{aluminium}}$.

- Since $L$ and $\Delta T$ are identical for both rods: $\Delta L \propto \alpha$.
- $\alpha_{\text{steel}} = 1.2 \times 10^{-5}\text{ /}^\circ\text{C}$
- $\alpha_{\text{aluminium}} = 2.4 \times 10^{-5}\text{ /}^\circ\text{C}$
- Ratio: $\frac{\Delta L_{\text{steel}}}{\Delta L_{\text{aluminium}}} = \frac{1.2 \times 10^{-5}}{2.4 \times 10^{-5}} = \frac{1}{2} = \mathbf{1 : 2}$

*Conclusion:* Aluminium expands **twice as much** as steel under identical physical conditions.

---

### Area and Volume Expansion: A Brief Survey

When a flat two-dimensional plate is heated, both its length and width expand simultaneously. If each linear dimension expands by a fractional amount $x$ (for instance, $0.1\%$ or a multiplier of $1.001$), the area expands by $(1 + x)^2 \approx 1 + 2x$ (or approximately $0.2\%$).

Similarly, for three-dimensional cubical expansion, the volume expands by $(1 + x)^3 \approx 1 + 3x$ (or approximately $0.3\%$).
Thus, for modest temperature changes:
- Superficial expansion coefficient $\beta \approx 2\alpha$
- Cubical expansion coefficient $\gamma \approx 3\alpha$

---

### Example 8 (Superficial Expansion of a Metal Plate: Ratio Concept)

When a square metal sheet is heated, each side expands to $1.001$ times its original length. By what factor does its surface area increase?

- New side length $= 1.001 \times L_0$
- New surface area $= (1.001 \times L_0)^2 = (1.001)^2 \times L_0^2 = 1.002001 \times A_0 \approx \mathbf{1.002 \times A_0}$
- The surface area increases by approximately $0.2\%$, which is neatly double the linear fractional increase of $0.1\%$.

---

## Part E: The Bimetallic Strip: Two Metals, One Composite

Mr. Davies retrieved a compact metallic strip from his tool pouch. "Sophia, look closely at this component. This is a **bimetallic strip**—one of the most ingenious electro-mechanical inventions ever designed."

A **bimetallic strip** consists of two equal strips of dissimilar metals—such as **brass** and **iron**—firmly riveted or welded face-to-face along their entire length. Brass has a higher coefficient of linear expansion than iron ($\alpha_{\text{brass}} > \alpha_{\text{iron}}$).

When heated, both metals attempt to expand. However, because they are rigidly bonded at their interface:
- The brass strip attempts to elongate much more than the iron strip.
- To accommodate this unequal expansion without peeling apart, the composite strip is forced to **bend into a curve**.
- The metal that expands more (brass) forms the longer outer convex arc of the curve, while the metal that expands less (iron) forms the shorter inner concave arc.
- Therefore, **upon heating, the bimetallic strip bends toward the metal with the smaller expansion coefficient (iron)**.

```
   Before Heating (Straight at Room Temperature):

   ┌──────────────────────────────────────────┐  Brass (higher α)
   └──────────────────────────────────────────┘
   ┌──────────────────────────────────────────┐  Iron (lower α)
   └──────────────────────────────────────────┘

   Upon Heating (Brass expands more, forcing strip to bend downward toward Iron):

          Brass forms longer outer convex curve
        ╭────────────────────────────────────╮
      ╭─╯  ╭───────────────────────────────╮ ╰─╮
    ╭─╯  ╭─╯  Iron forms shorter inner arc ╰─╮ ╰─╮
    │    │                                   │   │
```

> **Figure 2.3** – Action of a bimetallic strip: upon heating, the strip curves toward the metal of lower thermal expansion (iron).

When cooled below room temperature, the reverse occurs: brass contracts more rapidly than iron, forcing the strip to bend backward toward the brass side!

**Practical Applications:**
1. **Thermostat:** In heating systems, as the room reaches the desired temperature, the bending strip deflects away from an electrical contact, breaking the circuit and shutting off the furnace. When the room cools, the strip straightens, re-establishing contact to turn the furnace back on.
2. **Electric Iron:** Prevents the heating element from overheating by breaking the circuit when a preset temperature is reached.
3. **Fire Alarm:** Ambient heat from a blaze causes the bimetallic strip to bend until it touches an adjustable contact screw, completing an electrical circuit that triggers an alarm bell.

---

### Example 9 (Which Direction Will the Bimetallic Strip Bend?)

A bimetallic strip is fabricated from an aluminium strip ($\alpha = 2.4 \times 10^{-5}\text{ /}^\circ\text{C}$) bonded to a steel strip ($\alpha = 1.2 \times 10^{-5}\text{ /}^\circ\text{C}$). 
(a) In which direction does the strip bend when heated?
(b) In which direction does it bend when chilled in a freezer?

- **(a) Upon heating:** Aluminium expands twice as much as steel. To occupy the longer outer arc, aluminium pushes outward, causing the strip to **bend toward the steel**.
- **(b) Upon cooling:** Aluminium contracts twice as much as steel. It becomes the shorter layer, forcing the strip to **bend toward the aluminium**.

---

## Part F: Practical Applications and Engineering Precautions

Thermal expansion plays a decisive role in engineering design, requiring either protective precautions or providing clever manufacturing solutions:

**Engineering Precautions to Prevent Structural Failure:**
1. **Expansion Gaps in Railway Tracks:** Steel rails are laid with small expansion gaps between consecutive rail segments, connected by slotted fishplates. Without these gaps, summer thermal expansion produces immense longitudinal compressive forces that buckle the rails sideways.
2. **Expansion Joints in Concrete Roadways and Bridges:** Pavements are cast in discrete slabs separated by flexible bituminous expansion joints to prevent buckling and pavement blowups.
3. **Sagging Overhead Power Lines:** Electrical transmission cables are strung between utility poles with deliberate sag during summer installation. If strung taut, winter thermal contraction would generate extreme tensile tension, snapping the cables or toppling the pylons.
4. **Cracking of Thick Glassware:** Thick glass tumblers frequently crack when boiling water is poured into them. Glass is a poor thermal conductor; the inner surface heats and expands instantly, while the cold outer surface remains unexpanded. This severe internal thermal shear stress shatters the glass. In contrast, **borosilicate glass (Pyrex)** has an exceptionally low coefficient of expansion, making laboratory beakers and kitchen bakeware highly thermal-shock resistant.

**Beneficial Engineering Applications:**
1. **Shrink-Fitting Steel Rims onto Wheels:** To mount a steel rim tightly onto a railway wheel or cart wheel, the rim is machined slightly smaller than the wheel diameter. The rim is then heated red-hot, expanding sufficiently to slide over the wheel hub. Upon cooling, it contracts with immense grip, locking firmly without fasteners.
2. **Hot Riveting:** Structural steel girders in bridges and ships are joined using red-hot steel rivets. Once inserted through matching holes, the rivet tail is hammered into a head. As the rivet cools, longitudinal contraction draws the heavy steel plates together with massive clamping force.
3. **Loosening Jammed Metal Jar Lids:** Running hot water over a stuck metal jar lid causes the metal lid to expand more rapidly than the underlying glass threads, loosening its grip effortlessly.
4. **Thermostats and Bimetallic Controls:** Detailed in Part E.

---

### The Common Misconception About Expanding Holes

Consider a solid metal washer or plate containing a circular central hole. When the plate is heated, **does the hole get smaller, larger, or remain unchanged?**

Many students intuitively—and incorrectly—assume that because the metal expands outward from its center of mass, it must expand inward into the hole, causing the hole to shrink.

**The reality:** **The hole expands exactly as if it were a solid plug of the same metal!**

```
   Before Heating:                           After Heating:

   ┌───────────────────────┐                 ┌─────────────────────────────┐
   │                       │                 │                             │
   │       ┌───────┐       │                 │         ┌─────────┐         │
   │       │ Hole  │       │                 │         │  Hole   │         │
   │       │       │       │                 │         │         │         │
   │       └───────┘       │                 │         └─────────┘         │
   │                       │                 │                             │
   └───────────────────────┘                 └─────────────────────────────┘
   Original plate, original hole.            Expanded plate, expanded hole!
```

> **Figure 2.4** – Thermal expansion of a plate with a hole. Every dimension expands proportionally outward, exactly like a photograph enlarged under a photocopier.

An intuitive way to visualize this is the **photocopier analogy**: imagine the plate with the hole is a digital photograph. If you enlarge the image by $105\%$, every single feature expands proportionally—the outer perimeter grows, and the hole grows with it. 

This is why heating the metal ring in the Gravesande ball-and-ring demonstration causes the ring's aperture to expand, allowing an oversized sphere to slip through easily!

---

## Part G: Thermal Expansion in Liquids and Gases

### Liquids

**Liquids expand significantly more than solids for the same temperature rise.** This is why mercury or colored alcohol rises visibly up a thermometer capillary, even though the glass bulb surrounding it is also expanding.

**The Flask and Tube Experiment:** Fill a glass flask completely with colored water and insert a narrow glass capillary stopper. When the flask is first plunged into hot water, the liquid level in the tube **initially drops slightly, and then rises rapidly**.
- *Why the initial drop?* Heat transfers first through the outer glass envelope. The glass flask expands immediately, increasing its internal capacity before heat conducts into the water.
- *Why the subsequent rise?* Once the liquid warms, the thermal expansion of water greatly exceeds that of glass, driving the liquid meniscus far up the tube.

### Anomalous Expansion of Water

Most liquids expand steadily as their temperature increases. **Pure water, however, displays a remarkable and vital anomaly between $0\text{ }^\circ\text{C}$ and $4\text{ }^\circ\text{C}$:**
> **When pure water at $0\text{ }^\circ\text{C}$ is heated, it contracts until it reaches $4\text{ }^\circ\text{C}$! Above $4\text{ }^\circ\text{C}$, it expands normally like other liquids.**

Consequently:
- Water possesses its **minimum volume at $4\text{ }^\circ\text{C}$**.
- Water attains its **maximum density at $4\text{ }^\circ\text{C}$** ($\approx 1000\text{ kg/m}^3$).

| Temperature ($^\circ\text{C}$) | Density of Water (approximate, $\text{kg/m}^3$) |
|---|---|
| $0\text{ }^\circ\text{C}$ | $999.84$ |
| $4\text{ }^\circ\text{C}$ | $999.97$ (Maximum density $\approx 1000$) |
| $10\text{ }^\circ\text{C}$ | $999.70$ |

---

### Example 10 (Volume of Water at Different Temperatures)

Calculate the volume occupied by $1000\text{ kg}$ of pure water at (a) $0\text{ }^\circ\text{C}$, (b) $4\text{ }^\circ\text{C}$, and (c) $10\text{ }^\circ\text{C}$ using the densities from the table above ($\text{Volume} = \text{Mass} \div \text{Density}$).

- **(a) At $0\text{ }^\circ\text{C}$:** $V = \frac{1000\text{ kg}}{999.84\text{ kg/m}^3} \approx \mathbf{1.00016\text{ m}^3}$
- **(b) At $4\text{ }^\circ\text{C}$:** $V = \frac{1000\text{ kg}}{999.97\text{ kg/m}^3} \approx \mathbf{1.00003\text{ m}^3}$
- **(c) At $10\text{ }^\circ\text{C}$:** $V = \frac{1000\text{ kg}}{999.70\text{ kg/m}^3} \approx \mathbf{1.00030\text{ m}^3}$

*Comparison:* The volume is at its absolute minimum at $4\text{ }^\circ\text{C}$ ($1.00003\text{ m}^3$). Chilling from $4\text{ }^\circ\text{C}$ down to $0\text{ }^\circ\text{C}$ actually increases volume by $130\text{ cm}^3$, while warming from $4\text{ }^\circ\text{C}$ to $10\text{ }^\circ\text{C}$ increases volume by $270\text{ cm}^3$.

---

### Ecological Consequence: How Aquatic Life Survives in Frozen Lakes

This anomalous behavior of water preserves aquatic ecosystems in temperate and polar regions during severe winters:

1. As autumn air chills the surface of a lake, surface water cools, becomes denser, and sinks to the lake bed, displacing warmer, less dense water upward.
2. This convective overturning continues until the entire depth of the lake attains a uniform temperature of **$4\text{ }^\circ\text{C}$**.
3. When the surface water chills further—below $4\text{ }^\circ\text{C}$ toward $0\text{ }^\circ\text{C}$—it **becomes lighter and less dense**! Instead of sinking, this freezing water remains floating at the surface.
4. At $0\text{ }^\circ\text{C}$, the surface water freezes into an insulating sheet of ice. Because ice is less dense than water ($917\text{ kg/m}^3$), it floats on top.
5. Ice is an effective thermal insulator. Beneath the solid ice sheet, a stable water column persists: near $0\text{ }^\circ\text{C}$ directly under the ice, grading down to a dense, liquid reservoir of **$4\text{ }^\circ\text{C}$ at the lake bottom**, where fish and aquatic organisms survive throughout the winter!

```
   Winter Lake (Cross-Section):

   Freezing atmospheric air (-10 °C)
   ──────────────────────────────────────────────────────  <- Surface
   ░░░░░░░░░░░░░░░░ Floating Ice Sheet (0 °C) ░░░░░░░░░░░
   ~ ~ ~ ~ ~ ~ ~ ~ ~ Liquid Water at ~ 1 °C ~ ~ ~ ~ ~ ~ ~ ~
   ~ ~ ~ ~ ~ ~ ~ ~ ~ Liquid Water at ~ 2 °C ~ ~ ~ ~ ~ ~ ~ ~
   ~ ~ ~ ~ ~ ~ ~ ~ ~ Liquid Water at ~ 3 °C ~ ~ ~ ~ ~ ~ ~ ~
   ~ ~ ~ ~ ~ ~ ~ ~ ~ Liquid Water at 4 °C (Densest) ~ ~ ~ ~  <- Aquatic Life Survives!
   ══════════════════════════════════════════════════════  <- Lake Bed
```

> **Figure 2.5** – Anomalous expansion preserves aquatic life: ice floats at the surface while dense liquid water at $4\text{ }^\circ\text{C}$ remains at the bottom.

If water behaved like ordinary liquids (continuing to increase in density all the way to freezing), lakes would freeze solid from the bottom upward, destroying all aquatic life.

### Gases

**Gases exhibit the highest thermal expansion of all three states of matter.**
- A gas balloon left in direct hot sunlight expands noticeably.
- If an uninflated rubber balloon is secured over the neck of an empty glass bottle and the bottle is immersed in hot water, the expanding air inside inflates the balloon promptly.

The precise quantitative relationships governing gas expansion (Boyle's and Charles's laws) are investigated in advanced chemistry and physics. For Class 9, remember the comparative order of expansion:
$$\mathbf{\text{Gases} \gg \text{Liquids} > \text{Solids}}$$

---

## Common Pitfalls to Avoid

1. **Mistake 1: Believing substances only expand and never contract**
   *Correction:* Heating causes expansion; cooling causes contraction. Power lines tighten in winter and bridge gaps widen because the structures contract.

2. **Mistake 2: Assuming a heavier rod expands more than a lighter rod**
   *Correction:* Linear expansion depends on original length $L$, temperature change $\Delta T$, and material constant $\alpha$. Mass is completely absent from the formula $\Delta L = \alpha L \Delta T$.

3. **Mistake 3: Stating that water always expands upon heating**
   *Correction:* Water contracts when heated from $0\text{ }^\circ\text{C}$ to $4\text{ }^\circ\text{C}$ due to its anomalous expansion. It expands only when heated above $4\text{ }^\circ\text{C}$.

4. **Mistake 4: Believing a hole in a metal plate shrinks when heated**
   *Correction:* The hole expands proportionally along with the metal, just as an image enlarged by a photocopier expands uniformly.

5. **Mistake 5: Conflating final temperature with temperature rise ($\Delta T$)**
   *Correction:* A rod heated from $10\text{ }^\circ\text{C}$ to $40\text{ }^\circ\text{C}$ experiences the exact same expansion as an identical rod heated from $60\text{ }^\circ\text{C}$ to $90\text{ }^\circ\text{C}$, because $\Delta T = 30\text{ }^\circ\text{C}$ in both cases.

---

## Quick Recap

- **Thermal expansion** is the increase in dimensions of a body upon heating; **thermal contraction** is the decrease upon cooling. Particles vibrate with larger amplitudes upon absorbing heat, increasing mean interatomic separation.
- In solids, thermal expansion occurs as **linear** ($\Delta L$), **superficial** ($\Delta A \approx 2\alpha A \Delta T$), or **cubical** ($\Delta V \approx 3\alpha V \Delta T$).
- Proportionality law for linear expansion: $\Delta L \propto L \times \Delta T$. Elongation is directly proportional to initial length and temperature change, independent of mass.
- Mathematical formula: $\Delta L = \alpha \times L \times \Delta T$, where $\alpha$ is the material-specific coefficient of linear expansion (in $\text{/}^\circ\text{C}$ or $\text{K}^{-1}$).
- Approximate values: $\alpha_{\text{steel}} \approx 1.2 \times 10^{-5}\text{ /}^\circ\text{C}$, $\alpha_{\text{copper}} \approx 1.7 \times 10^{-5}\text{ /}^\circ\text{C}$, $\alpha_{\text{aluminium}} \approx 2.4 \times 10^{-5}\text{ /}^\circ\text{C}$. Aluminium expands twice as much as steel.
- **Bimetallic strip:** Two dissimilar metals bonded together bend upon heating toward the metal with the lower expansion coefficient. Used in thermostats, fire alarms, and electric irons.
- Engineering applications: railway track gaps, bridge roller joints, loose power lines, shrink-fitting wheel rims, hot riveting.
- A **hole** in a metal plate expands upon heating, never shrinks.
- Liquids expand more than solids. **Water contracts anomalously between $0\text{ }^\circ\text{C}$ and $4\text{ }^\circ\text{C}$**, attaining maximum density at $4\text{ }^\circ\text{C}$, allowing lakes to freeze from the surface down while preserving aquatic life underneath.
- Gases expand substantially more than liquids and solids ($\text{Gases} \gg \text{Liquids} > \text{Solids}$).

---

## Practice Questions

1. A $2\text{-m}$ steel rod expands by $0.5\text{ mm}$ when its temperature rises by $20\text{ }^\circ\text{C}$. Using the proportional method, determine the elongation of:
   (a) A $6\text{-m}$ rod of the same steel subjected to the same temperature rise of $20\text{ }^\circ\text{C}$.
   (b) The $2\text{-m}$ rod subjected to a temperature rise of $60\text{ }^\circ\text{C}$.
   (c) The $6\text{-m}$ rod subjected to a temperature rise of $60\text{ }^\circ\text{C}$.

2. Two identical copper rods are heated. Rod P is heated from $15\text{ }^\circ\text{C}$ to $65\text{ }^\circ\text{C}$, while Rod Q is heated from $100\text{ }^\circ\text{C}$ to $150\text{ }^\circ\text{C}$. Which rod undergoes greater elongation? Justify your answer.

3. A steel railway rail has a length of $12\text{ m}$. Calculate its elongation when its temperature rises by $50\text{ }^\circ\text{C}$. ($\alpha_{\text{steel}} = 1.2 \times 10^{-5}\text{ /}^\circ\text{C}$)

4. A copper wire measures $10\text{ m}$ at $20\text{ }^\circ\text{C}$. Find its increase in length and its new total length when heated to $60\text{ }^\circ\text{C}$. ($\alpha_{\text{copper}} = 1.7 \times 10^{-5}\text{ /}^\circ\text{C}$)

5. A continuous steel bridge span is $80\text{ m}$ long. The regional temperature fluctuates between $10\text{ }^\circ\text{C}$ in winter and $40\text{ }^\circ\text{C}$ in summer. What minimum clearance gap must engineers provide in the expansion joint? ($\alpha = 1.2 \times 10^{-5}\text{ /}^\circ\text{C}$)

6. A copper rod and an aluminium rod each measure $3\text{ m}$ at room temperature. Both are heated through a temperature rise of $50\text{ }^\circ\text{C}$. Calculate the elongation of each rod, and determine the ratio of the elongation of aluminium to copper. ($\alpha_{\text{copper}} = 1.7 \times 10^{-5}\text{ /}^\circ\text{C}$, $\alpha_{\text{aluminium}} = 2.4 \times 10^{-5}\text{ /}^\circ\text{C}$)

7. A bimetallic strip is fabricated from brass (higher $\alpha$) and iron (lower $\alpha$).
   (a) Towards which metal does the strip bend when heated?
   (b) Towards which metal does it bend when chilled below room temperature?
   (c) State two common practical devices that utilize bimetallic strips.

8. A circular hole is drilled into a copper sheet. When the sheet is uniformly heated, does the diameter of the hole increase, decrease, or remain unchanged? Provide a one-sentence physical justification.

9. Using approximate densities ($0\text{ }^\circ\text{C}$: $999.84\text{ kg/m}^3$; $4\text{ }^\circ\text{C}$: $999.97\text{ kg/m}^3$), determine the volume occupied by $500\text{ kg}$ of pure water at $0\text{ }^\circ\text{C}$ and at $4\text{ }^\circ\text{C}$. At which temperature is the volume smaller?

10. State whether the following statements are True or False:
    (a) Substances expand on heating but never contract under any physical condition.
    (b) A thicker, heavier rod of the same material and initial length expands more than a thinner rod for the same rise in temperature.
    (c) Water contracts when heated continuously from $0\text{ }^\circ\text{C}$ to $4\text{ }^\circ\text{C}$.
    (d) Overhead electrical transmission lines are strung with deliberate sag to prevent winter tension breakage.
    (e) On heating, gases expand less than liquids.

---

### Answers

1. For $L_0 = 2\text{ m}$ and $\Delta T = 20\text{ }^\circ\text{C}$, $\Delta L_0 = 0.5\text{ mm}$.
   (a) Length scaled by $3$ ($6 \div 2 = 3$): $\Delta L = 0.5\text{ mm} \times 3 = \mathbf{1.5\text{ mm}}$.
   (b) $\Delta T$ scaled by $3$ ($60 \div 20 = 3$): $\Delta L = 0.5\text{ mm} \times 3 = \mathbf{1.5\text{ mm}}$.
   (c) Both length and $\Delta T$ scaled by $3$: $\Delta L = 0.5\text{ mm} \times 3 \times 3 = \mathbf{4.5\text{ mm}}$.

2. For Rod P: $\Delta T = 65\text{ }^\circ\text{C} - 15\text{ }^\circ\text{C} = 50\text{ }^\circ\text{C}$.
   For Rod Q: $\Delta T = 150\text{ }^\circ\text{C} - 100\text{ }^\circ\text{C} = 50\text{ }^\circ\text{C}$.
   Because both rods have identical lengths, materials, and temperature increments ($\Delta T = 50\text{ }^\circ\text{C}$), **both rods expand by the exact same amount**. Expansion depends on temperature change, not final absolute temperature.

3. $\Delta L = \alpha \times L \times \Delta T = (1.2 \times 10^{-5}\text{ /}^\circ\text{C}) \times 12\text{ m} \times 50\text{ }^\circ\text{C} = 1.2 \times 10^{-5} \times 600 = 720 \times 10^{-5}\text{ m} = \mathbf{7.2\text{ mm}}$.

4. $\Delta T = 60\text{ }^\circ\text{C} - 20\text{ }^\circ\text{C} = 40\text{ }^\circ\text{C}$.
   $\Delta L = (1.7 \times 10^{-5}\text{ /}^\circ\text{C}) \times 10\text{ m} \times 40\text{ }^\circ\text{C} = 1.7 \times 10^{-5} \times 400 = 680 \times 10^{-5}\text{ m} = \mathbf{6.8\text{ mm}}$ ($0.0068\text{ m}$).
   New total length $= 10\text{ m} + 0.0068\text{ m} = \mathbf{10.0068\text{ m}}$.

5. $\Delta T = 40\text{ }^\circ\text{C} - 10\text{ }^\circ\text{C} = 30\text{ }^\circ\text{C}$.
   $\Delta L = (1.2 \times 10^{-5}\text{ /}^\circ\text{C}) \times 80\text{ m} \times 30\text{ }^\circ\text{C} = 1.2 \times 10^{-5} \times 2400 = 2880 \times 10^{-5}\text{ m} = 0.0288\text{ m} = \mathbf{2.88\text{ cm}}$ (approx. $2.9\text{ cm}$).
   A minimum clearance gap of at least $2.88\text{ cm}$ must be maintained.

6. Copper elongation:
   $\Delta L_{\text{copper}} = (1.7 \times 10^{-5}) \times 3 \times 50 = 255 \times 10^{-5}\text{ m} = \mathbf{2.55\text{ mm}}$.
   Aluminium elongation:
   $\Delta L_{\text{aluminium}} = (2.4 \times 10^{-5}) \times 3 \times 50 = 360 \times 10^{-5}\text{ m} = \mathbf{3.60\text{ mm}}$.
   Ratio: $\frac{\Delta L_{\text{aluminium}}}{\Delta L_{\text{copper}}} = \frac{3.60\text{ mm}}{2.55\text{ mm}} = \frac{2.4}{1.7} \approx \mathbf{1.41}$.

7. (a) Towards the **iron** (iron has lower $\alpha$, forming the inner concave arc).
   (b) Towards the **brass** (brass contracts more upon cooling).
   (c) Thermostats, electric irons, fire alarms (any two).

8. The hole becomes **larger**, because all dimensions of the metal sheet expand outward proportionally like an enlarged photograph.

9. $V = \frac{m}{\rho}$.
   At $0\text{ }^\circ\text{C}$: $V = \frac{500\text{ kg}}{999.84\text{ kg/m}^3} = \mathbf{0.50008\text{ m}^3}$.
   At $4\text{ }^\circ\text{C}$: $V = \frac{500\text{ kg}}{999.97\text{ kg/m}^3} = \mathbf{0.50002\text{ m}^3}$.
   The volume is smaller at **$4\text{ }^\circ\text{C}$** where density reaches its maximum.

10. (a) **False**. Cooling causes thermal contraction.
    (b) **False**. Linear expansion is independent of cross-sectional area and mass.
    (c) **True**. Water contracts anomalously between $0\text{ }^\circ\text{C}$ and $4\text{ }^\circ\text{C}$.
    (d) **True**. Slack installation prevents winter tensile snapping.
    (e) **False**. Gases expand significantly more than liquids.

---

Sophia sketched the interlocking comb joint in her field notebook, annotating it with a smile: *"These joints allow the bridge to breathe."* Mr. Davies nodded approvingly: *"Whenever you observe an expansion gap on a bridge or railway track, remember that it is not an imperfection—it is brilliant physics in action."*

**What's Next?** We have established that substances expand upon heating, and that different materials expand at different rates. But how much heat energy is actually required to raise the temperature of a given object? Does $1\text{ kg}$ of water require the same energy as $1\text{ kg}$ of iron to warm by $1\text{ }^\circ\text{C}$? We will investigate this in Topic 3: **Specific Heat Capacity**!
