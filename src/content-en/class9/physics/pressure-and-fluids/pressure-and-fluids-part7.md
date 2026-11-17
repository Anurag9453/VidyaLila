# Chapter: Pressure and Fluids (Part 7)

> **Class:** 9 | **Subject:** Physics  
> **This file continues from [pressure-and-fluids-part6.md](pressure-and-fluids-part6.md).**  
> **Topics covered in this file:**  
> 7. Floatation: Who Floats, Who Sinks?  
> **Chapter Wrap-up: Pressure and Fluids**  

---

# Topic 7: Floatation: Who Floats, Who Sinks?

In the previous topic, we explored Archimedes' Principle: any body immersed (wholly or partially) in a fluid experiences an upward buoyant force equal to the **weight of the fluid it displaces**. We also saw how this enables us to measure relative density with great precision. Now, an essential question presents itself: how does Archimedes' Principle dictate whether an object will **sink to the bottom, remain suspended mid-fluid, or float serenely at the surface**?

This is the concluding topic of the chapter, followed by a comprehensive Chapter Wrap-up. Throughout this topic, we take **$g = 10\text{ m/s}^2$** and pure water density **$\rho_{\text{water}} = 1000\text{ kg/m}^3$**.

---

## Leo's Question at the Shipyard

During a weekend tour of a naval marine shipyard, Leo accompanied his aunt, **Engineer Elena**, to a vast testing basin where scale models of ocean vessels were tested in simulated wave conditions.

In his pocket, Leo had a small solid iron nail and a heavy toy model boat stamped out of sheet iron. He tossed the iron nail into the basin: *plink!* The dense nail plummeted straight to the bottom and lay motionless in the sand. Next, he carefully lowered the iron model boat onto the water. The boat bobbed gently and floated gracefully across the surface—even though it contained over eighty times as much iron as the nail!

Leo rubbed his chin in utter confusion: "Engineer Elena, this seems completely contradictory! Both are made of iron. The tiny nail sinks like a stone, but the heavy iron ship floats with ease. How can a heavy iron ship float when a lightweight iron nail sinks?"

Elena smiled warmly. "There is no contradiction here, Leo. The secret lies in looking not just at the iron itself, but at the **overall shape of the vessel** and how much water its hollow hull displaces. Let us calculate the physics of floatation together using Archimedes' Principle!"

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Floatation** | The state in which an object rests in equilibrium at the surface of a fluid, with a portion of its volume submerged | A wooden log floating on a river |
| **Law of Floatation** | A floating body displaces a volume of fluid whose weight exactly equals the total weight of the floating body ($W = U$) | A $50\text{ kg}$ wooden beam displaces $50\text{ kg}$ of water |
| **Equilibrium** | A state of balance where opposing forces are equal, producing zero net acceleration | A ship floating calmly without rising or sinking |
| **Average (bulk) density** | The total mass of an object divided by its total external volume, including all internal hollow chambers and air pockets | The low average density of a hollow steel container ship |
| **Immersed volume ($V_{\text{im}}$)** | The volume of the portion of an object that lies submerged beneath the fluid's free surface | The underwater hull of a boat |
| **Fraction immersed** | The ratio of submerged volume to total volume ($\frac{V_{\text{im}}}{V}$), equal to $\frac{\rho_{\text{body}}}{\rho_{\text{fluid}}}$ | Roughly $0.90$ for an iceberg in seawater |
| **Ballast tank** | Compartments inside a submarine or ship that can be flooded with water or blown dry with compressed air to alter average density | Used to submerge or surface a submarine |
| **Plimsoll line (load line)** | A mandatory reference mark painted on a ship's hull indicating the maximum safe immersion depth in varying water densities | Marks for freshwater, seawater, and tropical seas |
| **Hydrometer** | A floating calibrated glass instrument used to measure the density or relative density of liquids directly | Lactometers (milk purity) and battery acid testers |

---

## Part A: The Conditions for Floatation

### Weight Downward, Upthrust Upward

Any object placed into a fluid experiences two opposing vertical forces:

1. Its downward **gravitational weight ($W$)**: $W = m \times g$
2. The upward **buoyant force (upthrust, $U$)**: $U = \rho_{\text{fluid}} \times V_{\text{im}} \times g$

```
          ^  Upthrust U (acts upward on submerged part)
          │
     _____│______
    │            │   <- Wooden block
  ~~│~~~~~~~~~~~~│~~~~~~~~~~~~  Water free surface
    │____________│
          │
          v  Weight W (acts downward through centre of gravity)
```

> **Figure 7.1** – A floating block in vertical equilibrium: downward gravitational weight ($W$) is exactly balanced by the upward buoyant force ($U$). Because net force is zero, the block remains stationary.

### Three Physical Possibilities

When an object is completely placed into a fluid:

- If **$U < W$** (when fully submerged): The downward force wins; the body **sinks** to the bottom.
- If **$U > W$** (when fully submerged): The upward buoyant force wins; the body **accelerates upward** until it breaks through the surface and settles into floatation.
- If **$U = W$** (when fully submerged): The forces are balanced throughout the fluid; the body remains **suspended at rest** at whatever depth it is placed.

**Critical Insight:** When an object is **floating peacefully at rest at the surface**, the upward buoyant force **exactly equals** its total downward weight:

> **$U = W$ (At floatation equilibrium)**

As an object rises toward the surface, the submerged volume decreases, which reduces $U$ until $U$ matches $W$ perfectly, halting any further vertical motion.

### The Law of Floatation

From Archimedes' Principle, upthrust equals the weight of displaced fluid. Since $U = W$ during stable floatation:

> **The Law of Floatation:** A floating body displaces a volume of fluid whose weight is **strictly equal to the total weight of the floating body**.

For example, if a wooden raft weighs $500\text{ N}$ (mass $50\text{ kg}$), it will sink into the water just far enough to displace exactly $50\text{ kg}$ ($500\text{ N}$) of water!

---

## Part B: Deciding by Density

Consider a solid object of total volume $V$ completely submerged in a fluid of density $\rho_{\text{fluid}}$:

- Its downward weight is: $W = \rho_{\text{body}} \times V \times g$
- Its maximum potential upthrust (when fully immersed) is: $U_{\text{max}} = \rho_{\text{fluid}} \times V \times g$

Notice that total volume $V$ and gravity $g$ are common to both expressions. Therefore, the outcome depends **strictly on the relative densities**:

| Density Comparison | Force Comparison | Outcome |
|---|---|---|
| $\rho_{\text{body}} > \rho_{\text{fluid}}$ | $W > U_{\text{max}}$ | **Sinks** to the bottom |
| $\rho_{\text{body}} = \rho_{\text{fluid}}$ | $W = U_{\text{max}}$ | **Stays suspended** anywhere within the fluid |
| $\rho_{\text{body}} < \rho_{\text{fluid}}$ | $W < U_{\text{max}}$ | **Rises and floats** partially submerged at the surface |

This is why we do not compare the raw masses or sizes of objects. A tiny iron pebble sinks while a gigantic wooden tree trunk floats, because **density—not total mass—dictates floatation**!

### Example 1: Predicting Floatation

A solid block has a mass of $4.5\text{ kg}$ and a volume of $0.005\text{ m}^3$. Predict whether it will float or sink in:  
(a) pure water ($\rho = 1000\text{ kg/m}^3$)  
(b) mineral oil ($\rho = 800\text{ kg/m}^3$).

First, compute the density of the block:
$$\rho_{\text{block}} = \frac{m}{V} = \frac{4.5\text{ kg}}{0.005\text{ m}^3} = \mathbf{900\text{ kg/m}^3}$$

- In water: $\rho_{\text{block}} (900\text{ kg/m}^3) < \rho_{\text{water}} (1000\text{ kg/m}^3) \implies$ **It floats!**
- In oil: $\rho_{\text{block}} (900\text{ kg/m}^3) > \rho_{\text{oil}} (800\text{ kg/m}^3) \implies$ **It sinks!**

**Verification from Forces:**  
- Weight of block: $W = 4.5\text{ kg} \times 10\text{ m/s}^2 = 45\text{ N}$.  
- Maximum upthrust in oil: $U = (800\text{ kg/m}^3) \times (0.005\text{ m}^3) \times (10\text{ m/s}^2) = 40\text{ N}$.  
  Since $U (40\text{ N}) < W (45\text{ N})$, it sinks in oil ✅  
- Maximum upthrust in water: $U = (1000\text{ kg/m}^3) \times (0.005\text{ m}^3) \times (10\text{ m/s}^2) = 50\text{ N}$.  
  Since $U_{\text{max}} (50\text{ N}) > W (45\text{ N})$, it floats in water ✅

---

## Part C: What Fraction of a Floating Body is Submerged?

A floating body is only **partially submerged**. How much of its total volume remains beneath the surface?

Let the body's total volume be $V$, and the submerged (immersed) volume be $V_{\text{im}}$:
$$W = \rho_{\text{body}} \times V \times g$$
$$U = \rho_{\text{fluid}} \times V_{\text{im}} \times g$$

Applying the condition for floatation ($W = U$):
$$\rho_{\text{body}} \times V \times g = \rho_{\text{fluid}} \times V_{\text{im}} \times g$$

Cancelling $g$ from both sides gives the celebrated **Submerged Fraction Formula**:

> **$\frac{V_{\text{im}}}{V} = \frac{\rho_{\text{body}}}{\rho_{\text{fluid}}}$**  
>  
> **$\text{Fraction Immersed} = \frac{\text{Density of Body}}{\text{Density of Fluid}}$**

Notice that the physical size, total mass, and surface area **cancel out entirely**! A tiny pine splinter and a gigantic pine log of the same wood density will float with the exact same percentage of their volume submerged.

### Example 2: Floating Wood, Ice, and Cork in Water

For water ($\rho = 1000\text{ kg/m}^3$):

- **Pine Wood ($\rho = 600\text{ kg/m}^3$):**  
  $\text{Fraction immersed} = \frac{600}{1000} = \mathbf{0.60}$ ($60\%$ underwater, $40\%$ above).
- **Glacial Ice ($\rho \approx 900\text{ kg/m}^3$):**  
  $\text{Fraction immersed} = \frac{900}{1000} = \mathbf{0.90}$ ($90\%$ underwater, only $10\%$ exposed).  
  This explains the sailor's adage about the **"tip of the iceberg"**—nine-tenths of an iceberg's colossal bulk lurks invisibly beneath the waves!
- **Cork ($\rho = 240\text{ kg/m}^3$):**  
  $\text{Fraction immersed} = \frac{240}{1000} = \mathbf{0.24}$ ($24\%$ underwater, $76\%$ riding high above).

**Verification for wood ($V = 1\text{ m}^3$):**  
$W = 600\text{ kg} \times 10\text{ m/s}^2 = 6000\text{ N}$.  
$V_{\text{im}} = 0.60\text{ m}^3 \implies U = 1000 \times 0.60 \times 10 = 6000\text{ N}$.  
$W = U$ ✅

### Example 3: Finding Mass of a Floating Object from Displaced Volume

A floating wooden log displaces $0.05\text{ m}^3$ of water. What is the mass of the log?

- Mass of displaced water $= \rho_{\text{water}} \times V_{\text{displaced}} = 1000\text{ kg/m}^3 \times 0.05\text{ m}^3 = \mathbf{50\text{ kg}}$
- By the Law of Floatation, $\text{Weight of log} = \text{Weight of displaced water}$.  
  Therefore, the mass of the log is strictly equal to the mass of displaced water:  
  $$\text{Mass of log} = \mathbf{50\text{ kg}}$$

**Verification:**  
$U = 1000 \times 0.05 \times 10 = 500\text{ N}$; $W = 50\text{ kg} \times 10 = 500\text{ N}$. $U = W$ ✅

### Example 4: Calculating Submerged Depth of a Cuboid Block

A rectangular wooden block measures $20\text{ cm} \times 10\text{ cm} \times 10\text{ cm}$ and has a density of $800\text{ kg/m}^3$. It floats in water with its $20\text{ cm} \times 10\text{ cm}$ face horizontal (so its vertical height is $10\text{ cm}$). How deep does it sit in the water?

- Fraction immersed: $\frac{\rho_{\text{body}}}{\rho_{\text{fluid}}} = \frac{800}{1000} = \mathbf{0.80}$
- Submerged depth: $h_{\text{sub}} = 0.80 \times \text{total height} = 0.80 \times 10\text{ cm} = \mathbf{8\text{ cm}}$

**Verification from Forces:**  
Total volume $V = 0.2\text{ m} \times 0.1\text{ m} \times 0.1\text{ m} = 0.002\text{ m}^3$.  
Mass $= 800\text{ kg/m}^3 \times 0.002\text{ m}^3 = 1.6\text{ kg} \implies W = 16\text{ N}$.  
Base area $A = 0.2\text{ m} \times 0.1\text{ m} = 0.02\text{ m}^2$.  
Submerged volume $V_{\text{im}} = 0.02\text{ m}^2 \times 0.08\text{ m} = 0.0016\text{ m}^3$.  
Upthrust $U = 1000 \times 0.0016 \times 10 = 16\text{ N}$.  
$U = W$ ✅

---

## Part D: Floating in Denser Fluids

From the formula:

$$\text{Fraction Immersed} = \frac{\rho_{\text{body}}}{\rho_{\text{fluid}}}$$

As fluid density ($\rho_{\text{fluid}}$) **increases**, the fraction immersed **decreases**. This means an object **rides higher and sinks less** in a denser fluid!

| Fluid | Typical Density | Ice ($900\text{ kg/m}^3$) Submerged Fraction |
|---|---|---|
| Fresh river water | $1000\text{ kg/m}^3$ | $\frac{900}{1000} = \mathbf{0.900}$ ($90.0\%$ underwater) |
| Ocean seawater | $1030\text{ kg/m}^3$ | $\frac{900}{1030} \approx \mathbf{0.874}$ ($87.4\%$ underwater) |
| Dead Sea hypersaline water | $\approx 1240\text{ kg/m}^3$ | $\frac{900}{1240} \approx \mathbf{0.726}$ ($72.6\%$ underwater) |

### Why Swimming in the Ocean is Easier

An average human body with lungs inflated has an average density of roughly $985\text{ kg/m}^3$:
- In fresh water ($1000\text{ kg/m}^3$): $\frac{985}{1000} = 0.985$ ($98.5\%$ submerged; only your nose and mouth remain above water).
- In seawater ($1030\text{ kg/m}^3$): $\frac{985}{1030} = 0.956$ ($95.6\%$ submerged; $4.4\%$ of your body rides above water).
- In the hypersaline Dead Sea ($1240\text{ kg/m}^3$): $\frac{985}{1240} = 0.794$ (over $20\%$ of your body rides above water!). In the Dead Sea, you can float effortlessly on your back while comfortably reading a book without treading water at all.

---

## Part E: The Math Behind the Story: The Nail vs. The Ship

Now we can resolve the puzzle Leo raised at the shipyard:

- **The Iron Nail:** Solid iron has a density of roughly $7800\text{ kg/m}^3$. A solid nail contains only iron, so its bulk density is $7800\text{ kg/m}^3$. Because $7800 > 1000$, its downward weight vastly exceeds the maximum possible buoyant force, and the nail sinks instantly.
- **The Ocean Ship:** A ship is **not a solid block of iron**. It is a hollow shell—a thin skin of structural steel enclosing a cavernous hull filled with air! To determine floatation, we must evaluate its **average (bulk) density**:

$$\text{Average Density} = \frac{\text{Total mass (steel hull + cargo + trapped air)}}{\text{Total external volume enclosed by hull}}$$

Because air has negligible mass but occupies huge volume, the ship's massive volume brings its average density well below $1000\text{ kg/m}^3$!

### Example 5: Leo's Model Ship

Leo's model ship contains $0.6\text{ kg}$ of sheet iron, but its hollow hull encloses a total volume of $0.002\text{ m}^3$ ($2000\text{ cm}^3$). His nail has a mass of $7.8\text{ g}$ and a solid volume of $1\text{ cm}^3$.

- **Nail:**  
  $\rho_{\text{nail}} = \frac{7.8\text{ g}}{1\text{ cm}^3} = 7.8\text{ g/cm}^3 = \mathbf{7800\text{ kg/m}^3} > 1000\text{ kg/m}^3 \implies$ **Sinks!**
- **Model Ship:**  
  $\rho_{\text{ship}} = \frac{0.6\text{ kg}}{0.002\text{ m}^3} = \mathbf{300\text{ kg/m}^3} < 1000\text{ kg/m}^3 \implies$ **Floats!**

**Submerged fraction of the ship:**  
$$\text{Fraction immersed} = \frac{300}{1000} = \mathbf{0.30}$$  
$$V_{\text{im}} = 0.30 \times 0.002\text{ m}^3 = 0.0006\text{ m}^3 = 600\text{ cm}^3$$

**Verification:**  
$U = 1000 \times 0.0006 \times 10 = 6\text{ N}$; $W = 0.6\text{ kg} \times 10 = 6\text{ N}$. $U = W$ ✅  
A solid chunk of $0.6\text{ kg}$ iron would have a volume of only $77\text{ cm}^3$ and would sink immediately. Fashioning that same iron into a hollow boat allows it to displace $600\text{ cm}^3$ of water. **A ship floats because of its geometry, not its material!**

### Example 6: Load Capacity of an Iron Boat

A hollow iron workboat has an empty mass of $800\text{ kg}$ and an enclosed hull volume of $2\text{ m}^3$.  
(a) Find its empty average density and submerged fraction.  
(b) Find the maximum additional cargo mass it can safely carry before sinking flush with the water surface.

- (a) Empty state:  
  $$\rho_{\text{avg}} = \frac{800\text{ kg}}{2\text{ m}^3} = \mathbf{400\text{ kg/m}^3}$$  
  $\text{Fraction immersed} = \frac{400}{1000} = \mathbf{0.40}$ ($40\%$ submerged; $V_{\text{im}} = 0.8\text{ m}^3$).
- (b) At maximum load, the boat is submerged flush to its deck ($V_{\text{im}} = 2\text{ m}^3$, $\rho_{\text{avg}} = 1000\text{ kg/m}^3$):  
  $$\text{Maximum total allowable mass} = 1000\text{ kg/m}^3 \times 2\text{ m}^3 = 2000\text{ kg}$$  
  $$\text{Maximum extra cargo} = 2000\text{ kg} - 800\text{ kg} = \mathbf{1200\text{ kg}}$$

**Verification:**  
Total weight $= 2000\text{ kg} \times 10 = 20,000\text{ N}$.  
Maximum upthrust $= 1000 \times 2 \times 10 = 20,000\text{ N}$. $U = W$ ✅

### Example 7: Operating with a Safe Cargo Load

If the workboat from Example 6 carries a safe cargo of $600\text{ kg}$, calculate its new draft:

- Total mass $= 800\text{ kg} + 600\text{ kg} = 1400\text{ kg}$
- New average density $= \frac{1400\text{ kg}}{2\text{ m}^3} = \mathbf{700\text{ kg/m}^3}$
- New fraction immersed $= \frac{700}{1000} = \mathbf{0.70}$ ($70\%$ submerged; $V_{\text{im}} = 1.4\text{ m}^3$).

**Verification:** $U = 1000 \times 1.4 \times 10 = 14,000\text{ N}$; $W = 1400 \times 10 = 14,000\text{ N}$ ✅

### Example 8: Physics of a Submarine

A research submarine has a total hull displacement volume of $100\text{ m}^3$ and an empty structural mass of $90,000\text{ kg}$.  
(a) Show that it floats when its ballast tanks are empty.  
(b) How much seawater must be admitted into its ballast tanks to make it sink?

- (a) With empty ballast tanks:  
  $$\rho_{\text{avg}} = \frac{90,000\text{ kg}}{100\text{ m}^3} = \mathbf{900\text{ kg/m}^3}$$  
  Because $900 < 1000$, the submarine floats with $90\%$ of its hull submerged.
- (b) To sink, its average density must exceed $1000\text{ kg/m}^3$, requiring a total mass $> 100,000\text{ kg}$:  
  $$\text{Water needed for neutral buoyancy} = 100,000\text{ kg} - 90,000\text{ kg} = \mathbf{10,000\text{ kg}}$$  
  Admitting $15,000\text{ kg}$ gives a total mass of $105,000\text{ kg}$ ($\rho = 1050\text{ kg/m}^3 > 1000$), causing it to dive downward into the depths!

---

## Part F: Everyday Applications of Floatation

### Ships and Cargo Vessels

Ships are designed with broad, hollow hulls to maximize displaced water volume. As cargo is loaded, the vessel rides lower in the water, displacing more liquid until the increased buoyant force balances the additional weight.

### Submarines and Ballast Control

A submarine controls its buoyancy through specialized **ballast tanks**:
- **Diving:** Flood vents open, allowing seawater to rush into the ballast tanks while air is vented out. The submarine's weight increases until $\rho_{\text{avg}} > \rho_{\text{water}}$, and it dives.
- **Surfacing:** High-pressure compressed air is blown into the ballast tanks, expelling the seawater through bottom flood gates. The submarine's mass drops, reducing its average density below that of seawater, and it rises to the surface.

### The Plimsoll Line (International Load Line)

Painted amidships on the hull of every commercial cargo vessel is the **Plimsoll line**, established by British reformer Samuel Plimsoll in 1876 to prevent greedy shipowners from dangerously overloading vessels. 

The mark features multiple horizontal lines corresponding to different operating waters:
- **Freshwater (F):** Because river water is less dense ($1000\text{ kg/m}^3$), the ship sits deeper.
- **Seawater / Saltwater (S):** Denser ocean water ($1030\text{ kg/m}^3$) provides more buoyancy, so the ship rides higher.
- **Tropical Seawater (T):** Warm water expands and is slightly less dense, causing the ship to sink slightly lower.

A ship loaded to its legal limit in cold ocean seawater will sink deeper into the water when entering a freshwater river port!

### Hydrometers and Lactometers

A **hydrometer** is a slender, sealed glass instrument with a weighted bulb (filled with lead shot) at the bottom and a graduated stem at the top:
- Because its weight is fixed, it must always displace a fixed weight of liquid ($W = U$).
- In a **low-density liquid**, it must displace a larger volume to equal its weight, so it **sinks deeper**.
- In a **high-density liquid**, it requires a smaller volume, so it **rides higher**.

A **lactometer** is a specialized hydrometer used to detect watered-down milk. Pure whole milk has a density of roughly $1030\text{ kg/m}^3$. If water ($\rho = 1000\text{ kg/m}^3$) is added, the density of the mixture drops, causing the lactometer to sink noticeably deeper into the sample!

### Example 9: Hydrometer Stem Calibration

A uniform cylindrical hydrometer stem sinks $8\text{ cm}$ in pure water ($\rho = 1000\text{ kg/m}^3$). How deep will it sink in a liquid of density $800\text{ kg/m}^3$?

Since the hydrometer has a constant cross-sectional area, submerged volume is directly proportional to submerged length $L$:
$$\rho_1 \times L_1 = \rho_2 \times L_2$$
$$1000\text{ kg/m}^3 \times 8\text{ cm} = 800\text{ kg/m}^3 \times L_2$$
$$L_2 = \frac{8000}{800} = \mathbf{10\text{ cm}}$$

**Verification:** In a lighter liquid ($800 < 1000$), the hydrometer sinks deeper ($10\text{ cm} > 8\text{ cm}$) ✅

### Floatation in Atmospheric Air: Balloons

Air is a fluid with an ambient density of roughly **$1.2\text{ kg/m}^3$**. A balloon will rise into the sky whenever its overall average density is less than $1.2\text{ kg/m}^3$.

### Example 10: Lift of a Helium Balloon

A helium balloon has an inflated envelope volume of $10\text{ m}^3$ and a total structural mass (helium gas + rubber envelope + basket) of $5\text{ kg}$. Calculate the upthrust, weight, and net upward lifting force.

- Upthrust from air:  
  $$U = \rho_{\text{air}} \times V \times g = (1.2\text{ kg/m}^3) \times (10\text{ m}^3) \times (10\text{ m/s}^2) = \mathbf{120\text{ N}}$$
- Downward weight:  
  $$W = m \times g = 5\text{ kg} \times 10\text{ m/s}^2 = \mathbf{50\text{ N}}$$
- Net upward force:  
  $$F_{\text{net}} = U - W = 120\text{ N} - 50\text{ N} = \mathbf{70\text{ N}} \quad \text{(vertically upward)}$$

**Verification:** Average density $= \frac{5\text{ kg}}{10\text{ m}^3} = 0.5\text{ kg/m}^3 < 1.2\text{ kg/m}^3 \implies$ The balloon rises vigorously ✅

### Marine Biology and Safety Equipment

- **Fish Swim Bladder:** Most bony fish possess an internal gas-filled organ called a swim bladder. By diffusing gas into or out of the bladder, the fish adjusts its body volume to match the density of the surrounding water depth, achieving neutral buoyancy and hovering effortlessly without swimming.
- **Life Jackets:** Life vests are filled with ultralight buoyant closed-cell foam or trapped air. Wearing a vest dramatically increases a person's total volume while adding negligible mass, reducing the overall average density well below $1000\text{ kg/m}^3$ to keep the wearer's head safely above water.

### Example 11: Steel Drum: Empty vs. Flooded

A hollow steel drum has a mass of $20\text{ kg}$ and an external volume of $0.1\text{ m}^3$ ($100\text{ litres}$).

- **When empty (filled with air):**  
  $\rho_{\text{avg}} = \frac{20\text{ kg}}{0.1\text{ m}^3} = \mathbf{200\text{ kg/m}^3} < 1000 \implies$ **Floats high** ($20\%$ submerged).
- **When completely flooded with water:**  
  Mass of water inside $= 1000 \times 0.1 = 100\text{ kg}$.  
  Total mass $= 20\text{ kg} + 100\text{ kg} = 120\text{ kg}$.  
  $\rho_{\text{avg}} = \frac{120\text{ kg}}{0.1\text{ m}^3} = \mathbf{1200\text{ kg/m}^3} > 1000 \implies$ **Sinks to the bottom!**

**Verification:** Fully submerged $U = 1000 \times 0.1 \times 10 = 1000\text{ N}$. Flooded weight $= 120 \times 10 = 1200\text{ N}$. Since $W (1200\text{ N}) > U (1000\text{ N})$, the flooded drum sinks ✅

---

## Part G: Sinking, Floating, and Suspending: At a Glance

| Physical State | Density Comparison | Force Comparison (Fully Immersed) | Resulting Motion & Behavior |
|---|---|---|---|
| **Sinking** | $\rho_{\text{body}} > \rho_{\text{fluid}}$ | $W > U_{\text{max}}$ | Accelerates downward to the bottom |
| **Suspended** | $\rho_{\text{body}} = \rho_{\text{fluid}}$ | $W = U_{\text{max}}$ | Remains in neutral equilibrium at any depth |
| **Floating** | $\rho_{\text{body}} < \rho_{\text{fluid}}$ | $W < U_{\text{max}}$ (fully submerged); $W = U$ (in equilibrium) | Rises to surface; floats with submerged fraction $= \frac{\rho_{\text{body}}}{\rho_{\text{fluid}}}$ |

---

## Common Pitfalls to Avoid

1. **Mistake 1: Believing that heavy objects always sink.**  
   An aircraft carrier weighing $100,000\text{ tonnes}$ floats effortlessly, while a $1\text{-gram}$ pebble sinks. It is **average density**, not total weight, that determines floatation.

2. **Mistake 2: Believing a floating ship is held up purely by "air trapped inside."**  
   Air does not generate upward lifting thrust on its own. Rather, the hollow interior gives the ship a colossal **external volume**, enabling it to displace a huge volume of water with relatively modest overall mass.

3. **Mistake 3: Believing that upthrust exceeds weight on a peacefully floating body.**  
   While an object is accelerating upward through the water, $U > W$. But once it settles into calm floatation at the surface, **upthrust exactly equals weight ($U = W$)**!

4. **Mistake 4: Equating total volume with submerged volume in floatation calculations.**  
   In $U = V_{\text{im}} \rho_{\text{fluid}} g$, you must strictly use the **submerged volume** ($V_{\text{im}}$). For a floating object, $V_{\text{im}} < V_{\text{total}}$.

5. **Mistake 5: Assuming a larger object has a greater percentage of its volume submerged.**  
   The submerged fraction depends strictly on the density ratio: $\frac{V_{\text{im}}}{V} = \frac{\rho_{\text{body}}}{\rho_{\text{fluid}}}$. A tiny cedar pencil and a giant cedar log will both float with exactly $50\%$ of their volume submerged.

---

## Quick Recap

- **Condition for Floatation:** A body floats when its downward gravitational weight is balanced by the upward buoyant force: **$W = U$**.
- **Law of Floatation:** A floating body displaces a volume of fluid whose weight equals the total weight of the body.
- **Density Rule:**  
  - $\rho_{\text{body}} > \rho_{\text{fluid}} \implies$ Sinks  
  - $\rho_{\text{body}} = \rho_{\text{fluid}} \implies$ Suspends neutrally  
  - $\rho_{\text{body}} < \rho_{\text{fluid}} \implies$ Floats partially submerged
- **Submerged Fraction:** **$\frac{V_{\text{im}}}{V} = \frac{\rho_{\text{body}}}{\rho_{\text{fluid}}}$**. Independent of size or shape.
- Objects float higher in denser fluids (easier to float in ocean seawater than freshwater; exceptionally buoyant in the Dead Sea).
- **The Ship vs. Nail Paradox:** A solid nail has $\rho = 7800\text{ kg/m}^3 > 1000$ (sinks). A hollow ship encloses huge air volume, keeping average density $\rho_{\text{avg}} < 1000\text{ kg/m}^3$ (floats).
- Key applications: Cargo ships, submarine ballast tanks, Plimsoll lines, hydrometers, lactometers, helium airships, fish swim bladders, and life vests.

---

## Practice Questions

*(Take $g = 10\text{ m/s}^2$ and pure water density $= 1000\text{ kg/m}^3$ unless specified otherwise.)*

1. A solid block has a mass of $2.4\text{ kg}$ and a volume of $0.003\text{ m}^3$. State whether it floats, sinks, or stays suspended in:  
   (a) fresh water  
   (b) a liquid of density $800\text{ kg/m}^3$  
   (c) a liquid of density $1200\text{ kg/m}^3$.

2. Glacial ice has a density of approximately $900\text{ kg/m}^3$. What fraction of an iceberg remains submerged in ocean seawater of density $1030\text{ kg/m}^3$? Express your answer to two decimal places.

3. A wooden log floats in water and displaces $0.3\text{ m}^3$ of water. Find the mass and weight of the log.

4. A wooden block of density $500\text{ kg/m}^3$ and volume $0.02\text{ m}^3$ floats in water. Find its submerged volume, the upthrust acting on it, and its mass.

5. A hollow metal boat has an empty mass of $500\text{ kg}$ and a total enclosed hull volume of $1.5\text{ m}^3$. Find its average density when empty, and calculate the maximum additional cargo mass it can carry before sinking flush with the surface.

6. A helium balloon of volume $20\text{ m}^3$ has a total mass of $8\text{ kg}$. Taking the density of air as $1.2\text{ kg/m}^3$, find the upthrust, the downward weight, and the net upward lifting force.

7. A rectangular wooden block of density $600\text{ kg/m}^3$ has a vertical height of $15\text{ cm}$ and floats upright in water. Find the depth to which it is submerged.

8. A uniform cylindrical hydrometer stem floats with $6\text{ cm}$ of its length submerged in water. How much of its stem will be submerged in a liquid of density $1200\text{ kg/m}^3$? Is this liquid lighter or denser than water?

9. State whether each statement is True or False, providing a reason:  
   (a) A heavy object will always sink in water.  
   (b) A floating object experiences an upthrust greater than its weight.  
   (c) A floating object is submerged deeper in seawater than in river water.

10. A solid steel ball sinks in water, but a giant steel ship floats. Explain this using the concept of average density. Furthermore, why does a lactometer sink deeper in milk that has been adulterated with water?

### Answers

1. Block density: $\rho = \frac{2.4\text{ kg}}{0.003\text{ m}^3} = \mathbf{800\text{ kg/m}^3}$.  
   (a) In water: $800 < 1000 \implies$ **Floats**.  
   (b) In liquid of $800\text{ kg/m}^3$: $800 = 800 \implies$ **Stays neutrally suspended**.  
   (c) In liquid of $1200\text{ kg/m}^3$: $800 < 1200 \implies$ **Floats**.  
   *Check for (b):* $W = 24\text{ N}$; $U_{\text{max}} = 800 \times 0.003 \times 10 = 24\text{ N}$. $W = U$ ✅

2. $\text{Fraction immersed} = \frac{\rho_{\text{ice}}}{\rho_{\text{seawater}}} = \frac{900}{1030} \approx \mathbf{0.87}$ ($87\%$ submerged underwater).  
   *Check:* $0.87 \times 1030 = 896 \approx 900$ ✅

3. Mass of displaced water $= 1000 \times 0.3 = 300\text{ kg}$.  
   By the Law of Floatation, $\text{Mass of log} = \mathbf{300\text{ kg}}$, and $\text{Weight} = 300\text{ kg} \times 10\text{ m/s}^2 = \mathbf{3000\text{ N}}$.  
   *Check:* $U = 1000 \times 0.3 \times 10 = 3000\text{ N} = W$ ✅

4. Submerged fraction $= \frac{500}{1000} = 0.5$.  
   $V_{\text{im}} = 0.5 \times 0.02\text{ m}^3 = \mathbf{0.01\text{ m}^3}$.  
   $\text{Upthrust } U = 1000 \times 0.01 \times 10 = \mathbf{100\text{ N}}$.  
   $\text{Mass} = 500 \times 0.02 = \mathbf{10\text{ kg}}$ ($W = 10 \times 10 = 100\text{ N} = U$) ✅

5. Empty average density $= \frac{500\text{ kg}}{1.5\text{ m}^3} = \mathbf{333.3\text{ kg/m}^3}$.  
   Maximum total mass at flush immersion $= 1000\text{ kg/m}^3 \times 1.5\text{ m}^3 = 1500\text{ kg}$.  
   Maximum extra cargo mass $= 1500\text{ kg} - 500\text{ kg} = \mathbf{1000\text{ kg}}$.  
   *Check:* $W = 1500 \times 10 = 15,000\text{ N}$; $U = 1000 \times 1.5 \times 10 = 15,000\text{ N}$ ✅

6. Upthrust: $U = (1.2\text{ kg/m}^3) \times (20\text{ m}^3) \times 10 = \mathbf{240\text{ N}}$.  
   Weight: $W = 8\text{ kg} \times 10 = \mathbf{80\text{ N}}$.  
   Net upward force: $F_{\text{net}} = 240\text{ N} - 80\text{ N} = \mathbf{160\text{ N}}$ (vertically upward).  
   *Check:* Bulk density $= \frac{8}{20} = 0.4\text{ kg/m}^3 < 1.2$ ✅

7. Submerged fraction $= \frac{600}{1000} = 0.60$.  
   Submerged depth $= 0.60 \times 15\text{ cm} = \mathbf{9\text{ cm}}$.  
   *Check:* $600 \times 15 = 1000 \times 9 = 9000$ ✅

8. $\rho_1 L_1 = \rho_2 L_2 \implies 1000 \times 6 = 1200 \times L_2 \implies L_2 = \frac{6000}{1200} = \mathbf{5\text{ cm}}$.  
   Since it sinks less ($5\text{ cm} < 6\text{ cm}$), the liquid is **denser** than water.

9. (a) **False** ❌. Floatation depends on average density, not total mass. A $50,000\text{-tonne}$ ship floats because its average density is low.  
   (b) **False** ❌. A body floating in equilibrium experiences an upthrust strictly equal to its weight ($U = W$).  
   (c) **False** ❌. Seawater is denser than river water, so a ship rides higher (submerged less) in seawater.

10. A solid steel ball has a density of $7800\text{ kg/m}^3 > 1000\text{ kg/m}^3$, so its weight exceeds upthrust and it sinks. A steel ship is hollow; the steel hull encloses massive air space, lowering its overall average density well below $1000\text{ kg/m}^3$, enabling it to float.  
    A lactometer sinks deeper in watered-down milk because adding water ($\rho = 1000\text{ kg/m}^3$) dilutes whole milk ($\rho \approx 1030\text{ kg/m}^3$), lowering the mixture's density. In a less dense liquid, a floating hydrometer must sink deeper to displace sufficient fluid mass to support its weight.

---

Leo now understood completely: the nail and the ship may both be made of iron, but the ship's hollow architecture creates a massive volume, bringing its overall average density below that of water. From now on, whenever you look at an iceberg, a cargo vessel, or a swimming diver, you can explain their behavior through the principles of density and floatation!

---

# Chapter Wrap-up: Pressure and Fluids

| Topic | Core Concepts Learned | Key Takeaway |
|---|---|---|
| **1. Thrust and Pressure** | Thrust is perpendicular force ($F$). Pressure is thrust per unit area: $P = \frac{F}{A}$ (unit: $\text{Pa} = \text{N/m}^2$). | Smaller area $\implies$ higher pressure (cutting edge of a knife, point of a nail). |
| **2. Pressure in Liquids** | Liquid pressure increases linearly with depth: $P = h \rho g$. Acts equally in all directions at a given depth. | Pressure depends only on vertical depth ($h$) and fluid density ($\rho$), not container shape (hydrostatic paradox). |
| **3. Pascal's Law and Hydraulic Machines** | External pressure applied to a confined liquid is transmitted undiminished in all directions. | Force multiplier: $F_2 = F_1 \times \left(\frac{A}{a}\right)$. Distance scales inversely; work is conserved. |
| **4. Atmospheric Pressure** | Air has mass and gravitational weight. Sea-level atmospheric pressure is $1.013 \times 10^5\text{ Pa} = 76\text{ cm of Hg}$. | Ambient air pressure pushes fluids up drinking straws, holds suction cups to tiles, and supports mercury in barometers. |
| **5. Upthrust (Buoyancy)** | Immersed bodies experience an upward buoyant force: $U = V_{\text{im}} \rho_{\text{fluid}} g$. Apparent weight $= W - U$. | Upthrust arises from the pressure difference between the deeper bottom face and shallower top face. |
| **6. Archimedes' Principle and Relative Density** | Upthrust equals the weight of displaced fluid. $\text{RD} = \frac{\rho_{\text{substance}}}{\rho_{\text{water}}} = \frac{W_{\text{air}}}{W_{\text{air}} - W_{\text{water}}}$. | Provides a direct, non-destructive method to measure irregular volumes and test alloy purities. |
| **7. Floatation** | Equilibrium condition: $W = U$. Submerged fraction: $\frac{V_{\text{im}}}{V} = \frac{\rho_{\text{body}}}{\rho_{\text{fluid}}}$. | Density, not mass, determines floatation. Hollow ships float because their average density is less than water. |

### Key Definitions and Units

| Quantity | Physical Meaning | SI Unit |
|---|---|---|
| **Thrust** | Net force acting perpendicularly on a surface | newton ($\text{N}$) |
| **Pressure** | Perpendicular thrust distributed per unit area ($P = \frac{F}{A}$) | pascal ($\text{Pa} = \text{N/m}^2$) |
| **Pascal ($\text{Pa}$)** | Pressure produced by a force of $1\text{ N}$ distributed evenly over $1\text{ m}^2$ | $\text{Pa}$ |
| **Atmosphere ($\text{atm}$)** | Mean atmospheric pressure at sea level ($1\text{ atm} = 1.013 \times 10^5\text{ Pa} = 101.3\text{ kPa}$) | $\text{Pa}$ (practical non-SI unit) |
| **Upthrust (Buoyancy)** | Upward resultant force exerted by a fluid on an immersed body | newton ($\text{N}$) |
| **Apparent Weight** | Net downward force measured inside a fluid ($W_{\text{app}} = W - U$) | newton ($\text{N}$) |
| **Relative Density (RD)** | Ratio of a substance's density to the density of pure water at $4^\circ\text{C}$ | Dimensionless (no unit) |
| **Average Density** | Total mass of an object divided by its total exterior enclosed volume | $\text{kg/m}^3$ |

### Essential Formulas

| Physical Law / Principle | Mathematical Equation |
|---|---|
| **Definition of Pressure** | $P = \frac{F}{A}$ |
| **Hydrostatic Liquid Pressure** | $P = h \rho g$ |
| **Hydraulic Principle (Pascal's Law)** | $\frac{F_1}{a} = \frac{F_2}{A} \implies F_2 = F_1 \times \left(\frac{A}{a}\right)$ |
| **Hydraulic Displacement Conservation** | $a \times d_1 = A \times d_2 \implies F_1 d_1 = F_2 d_2$ |
| **Standard Atmospheric Pressure** | $1\text{ atm} = 1.013 \times 10^5\text{ Pa} = 760\text{ mm of Hg}$ |
| **Upthrust (Buoyant Force)** | $U = V_{\text{immersed}} \times \rho_{\text{fluid}} \times g$ |
| **Apparent Weight in Fluid** | $W_{\text{app}} = W - U$ |
| **Relative Density of a Solid** | $\text{RD} = \frac{\rho}{\rho_{\text{water}}} = \frac{W_{\text{air}}}{W_{\text{air}} - W_{\text{water}}}$ |
| **Relative Density of a Liquid** | $\text{RD}_{\text{liquid}} = \frac{W_{\text{air}} - W_{\text{liquid}}}{W_{\text{air}} - W_{\text{water}}}$ |
| **Condition for Floatation** | $\text{Upthrust } U = \text{True Weight } W$ |
| **Submerged Fraction of Floating Body** | $\frac{V_{\text{im}}}{V} = \frac{\rho_{\text{body}}}{\rho_{\text{fluid}}}$ |

### Sinking, Suspending, and Floating

| Physical State | Density Comparison | Force Comparison (Fully Immersed) | Motion & Equilibrium |
|---|---|---|---|
| **Sinks** | $\rho_{\text{body}} > \rho_{\text{fluid}}$ | $W > U_{\text{max}}$ | Accelerates to container bottom |
| **Suspends** | $\rho_{\text{body}} = \rho_{\text{fluid}}$ | $W = U_{\text{max}}$ | Stationary anywhere inside fluid |
| **Floats** | $\rho_{\text{body}} < \rho_{\text{fluid}}$ | $W = U$ (in equilibrium) | Rises to surface; submerged fraction $= \frac{\rho_{\text{body}}}{\rho_{\text{fluid}}}$ |

---

In the upcoming chapter—**Work, Energy, and Power**—we will explore the dynamic capabilities of forces: how forces perform mechanical work, transform between kinetic and potential forms of energy, and deliver power!
