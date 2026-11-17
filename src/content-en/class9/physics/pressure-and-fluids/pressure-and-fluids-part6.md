# Chapter: Pressure and Fluids (Part 6)

> **Class:** 9 | **Subject:** Physics  
> **This file continues from [pressure-and-fluids-part5.md](pressure-and-fluids-part5.md)** (which covered upthrust and apparent weight).  
> **Topics covered in this file:**  
> 6. Archimedes' Principle and Relative Density  

---

# Topic 6: Archimedes' Principle and Relative Density

In the previous topic, we discovered that whenever an object is submerged in a fluid, the fluid pushes upward on it with a buoyant force known as **upthrust**. By analysing the hydrostatic pressure differences acting on a submerged cube, we arrived at the formula:

$$\text{Upthrust } U = V_{\text{immersed}} \times \rho_{\text{fluid}} \times g$$

We also learned that a spring balance reflects an **apparent weight loss** equal to the upthrust ($W_{\text{app}} = W - U$). But what if an object has an intricate, irregular shape—such as a piece of jewellery, a crown, or a rough mineral nugget? How can we determine its upthrust and density without complex geometric measurements? A legendary ancient philosopher discovered a remarkably simple and universal method. That discovery is the focus of today's lesson: **Archimedes' Principle** and **Relative Density**.

In this topic, we use **$g = 10\text{ m/s}^2$** and water density **$\rho_{\text{water}} = 1000\text{ kg/m}^3 = 1\text{ g/cm}^3$** unless specified otherwise.

---

## The Jeweller's Scale and Sophia's Gold Chain

Sophia accompanied her mother to a master jewellery boutique run by **Mr. Harrison**. Her mother had brought in a heavy gold chain to be professionally cleaned and polished. While the jeweller worked, Sophia admired the gleaming necklace.

"Mr. Harrison," Sophia asked curiously, "how can a customer know with certainty whether a chain is made of pure solid gold? What if a dishonest manufacturer secretly mixed in cheaper metals like silver or copper?"

Mr. Harrison looked up with an approving nod. "A brilliant question, Sophia. Modern jewellers have electronic spectrometers, but the most elegant and foolproof test relies on an ancient scientific principle dating back over two thousand years."

"According to legend," Mr. Harrison explained, "the King of Syracuse commissioned a goldsmith to craft a royal crown from pure gold. Suspecting the smith had pocketed some gold and substituted cheaper silver, the king challenged the great scholar **Archimedes** to prove whether the crown was pure—without damaging or melting it!"

"How did he solve it?" Sophia asked, intrigued.

"As the story goes, Archimedes was stepping into a full public bath when he noticed water spilling over the brim. In a flash of genius, he realized that the volume of water overflowing had to equal the volume of his submerged body. He was so overjoyed that he allegedly dashed down the street shouting *'Eureka! Eureka!'*—Greek for *'I have found it!'* While the bathtub dash is a celebrated historical legend, the physical principle he formulated is immortal and scientifically rock-solid. Let me show you right now."

Mr. Harrison clipped the gold chain to a sensitive balance, measuring its weight in air. Then, he immersed the chain into a small beaker of water and recorded its submerged weight. "Notice that the reading dropped," he pointed out. "In this exact difference in weight lies the secret of whether this gold is authentic!"

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Archimedes' Principle** | When a body is wholly or partially immersed in a fluid, it experiences an upthrust equal to the weight of the fluid displaced by it | Upthrust equals the weight of displaced water |
| **Displaced fluid** | The volume of fluid pushed aside or forced to overflow by an immersed object | Water splashing over the rim when stepping into a full tub |
| **Eureka can (overflow can)** | A container equipped with a downward-sloping spout at a fixed height to catch and measure displaced fluid | Used in laboratory buoyancy demonstrations |
| **Loss of weight** | The difference between an object's weight in air and its apparent weight in a fluid: $\Delta W = W_{\text{air}} - W_{\text{fluid}}$ | $3.0\text{ N} - 2.0\text{ N} = 1.0\text{ N}$ |
| **Relative Density (RD)** | The ratio of the density of a substance to the density of pure water at $4^\circ\text{C}$ (a dimensionless pure number) | The RD of iron is $7.8$ |
| **Specific gravity** | An alternative, identical term for relative density | $\text{Specific gravity of lead} = 11.3$ |

---

## Part A: Archimedes' Principle

In Topic 5, we calculated upthrust mathematically from the pressure differential across a submerged cube. Archimedes stated this fundamental law in terms of the displaced fluid:

> **Archimedes' Principle:** When a body is completely or partially immersed in a fluid (liquid or gas), it experiences an upward buoyant force (upthrust) that is **exactly equal to the weight of the fluid displaced by the body**.
>
> $$\text{Upthrust } U = \text{Weight of displaced fluid} = V_{\text{displaced}} \times \rho_{\text{fluid}} \times g$$

Notice how this aligns seamlessly with our earlier formula:
1. The **volume of displaced fluid** ($V_{\text{displaced}}$) equals the **submerged volume** of the object ($V_{\text{immersed}}$).
2. The **mass of displaced fluid** equals $\rho_{\text{fluid}} \times V_{\text{displaced}}$.
3. The **gravitational weight of displaced fluid** equals $\text{mass} \times g = V_{\text{displaced}} \rho_{\text{fluid}} g$.

Whether an object is a perfect cube, an irregular pebble, or an intricate gold necklace, **upthrust always equals the weight of the displaced fluid**!

### Two Golden Rules of Archimedes' Principle

1. **Volume:** Always use the volume of the **submerged portion** of the object. For a fully immersed body, this is its full volume; for a floating body, it is only the submerged fraction.
2. **Density:** Always use the density of the **surrounding fluid** ($\rho_{\text{fluid}}$), not the density of the object!

### Laboratory Verification with a Eureka Can

Archimedes' Principle can be verified experimentally using standard laboratory apparatus:

**Apparatus:** A Eureka can (overflow vessel with spout), a solid stone suspended by thread, a sensitive spring balance, an empty clean beaker, and a graduated measuring cylinder.

**Procedure:**
1. Fill the Eureka can with water until water freely overflows from the spout. Allow all dripping to cease so the water level sits exactly flush with the spout rim.
2. Suspend the stone from the spring balance and record its true weight in air:  
   **$\text{Weight in air } W_1 = 3.0\text{ N}$**.
3. Place an empty, dry collecting beaker beneath the spout.
4. Slowly lower the suspended stone into the Eureka can until it is completely submerged (without touching the bottom or walls). Displaced water overflows through the spout into the collecting beaker.
5. Record the new apparent weight reading on the spring balance:  
   **$\text{Weight in water } W_2 = 2.0\text{ N}$**.
6. Pour the overflow water collected in the beaker into a graduated cylinder to measure its exact volume.

```
            Spring balance
                +---+
                │   │   <- Reading: 2.0 N
                +---+
                  │
                  │  Supporting thread
            │     │     │
            │~~~~~│~~~~~│===\      <- Water level flush with spout
            │     │     │    \
            │     O     │     \
            │   Stone   │    +-v-+
            │  (Fully   │    │~~~│  <- Collecting beaker:
            │ Submerged)│    +---+     displaced water
            +-----------+
              Eureka can
```

> **Figure 6.1** – The Eureka can experiment: the fully submerged stone displaces an equal volume of water out through the spout. The loss of weight recorded by the balance ($1.0\text{ N}$) equals the weight of the displaced overflow water ($1.0\text{ N}$).

**Experimental Data:**

| Measured Quantity | Experimental Value |
|---|---|
| Weight of stone in air ($W_1$) | $3.0\text{ N}$ |
| Apparent weight of stone in water ($W_2$) | $2.0\text{ N}$ |
| Observed loss of weight ($W_1 - W_2$) | **$1.0\text{ N}$** |
| Volume of water collected in cylinder | $100\text{ mL} = 100\text{ cm}^3$ |

**Calculating the Weight of Displaced Water:**
- $V = 100\text{ cm}^3 = 100 \times 10^{-6}\text{ m}^3 = 1 \times 10^{-4}\text{ m}^3$
- $\text{Mass of displaced water } m = \rho_{\text{water}} \times V = 1000\text{ kg/m}^3 \times 1 \times 10^{-4}\text{ m}^3 = 0.1\text{ kg}$
- $\text{Weight of displaced water } W_{\text{water}} = m \times g = 0.1\text{ kg} \times 10\text{ m/s}^2 = \mathbf{1.0\text{ N}}$

**Conclusion:**  
$$\text{Loss of weight in water } (1.0\text{ N}) = \text{Weight of displaced water } (1.0\text{ N}) \quad \text{✅}$$  
Archimedes' Principle is confirmed experimentally!

---

### Solved Examples: Archimedes' Principle and Upthrust

### Example 1: Upthrust in Different Fluids

A small solid component of volume $5 \times 10^{-5}\text{ m}^3$ is completely submerged in three different liquids: (a) fresh water ($\rho = 1000\text{ kg/m}^3$), (b) kerosene ($\rho = 800\text{ kg/m}^3$), and (c) mercury ($\rho = 13,600\text{ kg/m}^3$). Calculate the upthrust in each liquid ($g = 10\text{ m/s}^2$).

- (a) Water:  
  $$U_{\text{water}} = (5 \times 10^{-5}\text{ m}^3) \times (1000\text{ kg/m}^3) \times (10\text{ m/s}^2) = \mathbf{0.5\text{ N}}$$
- (b) Kerosene:  
  $$U_{\text{kerosene}} = (5 \times 10^{-5}\text{ m}^3) \times (800\text{ kg/m}^3) \times (10\text{ m/s}^2) = \mathbf{0.4\text{ N}}$$
- (c) Mercury:  
  $$U_{\text{mercury}} = (5 \times 10^{-5}\text{ m}^3) \times (13,600\text{ kg/m}^3) \times (10\text{ m/s}^2) = \mathbf{6.8\text{ N}}$$

**Verification:**  
Upthrust scales directly with liquid density. Mercury is $13.6$ times denser than water:  
$0.5\text{ N} \times 13.6 = 6.8\text{ N}$ ✅  
Kerosene is lighter than water, so $0.4\text{ N} < 0.5\text{ N}$ ✅

### Example 2: Weight of a Submerged Stone

A stone has a mass of $0.6\text{ kg}$ and a volume of $2.5 \times 10^{-4}\text{ m}^3$. What will a spring balance read when the stone is suspended completely submerged in water?

- Weight in air: $W = m \times g = 0.6\text{ kg} \times 10\text{ m/s}^2 = \mathbf{6\text{ N}}$
- Upthrust: $U = V \rho g = (2.5 \times 10^{-4}\text{ m}^3) \times 1000 \times 10 = \mathbf{2.5\text{ N}}$
- Apparent weight: $W_{\text{app}} = W - U = 6\text{ N} - 2.5\text{ N} = \mathbf{3.5\text{ N}}$

**Verification:** $3.5\text{ N} + 2.5\text{ N} = 6.0\text{ N}$ ✅

### Example 3: Finding Displaced Water Volume from Weight Loss

An object weighs $4.5\text{ N}$ in air and $3.7\text{ N}$ when completely submerged in water. Calculate the weight, mass, and volume of the displaced water.

- Loss of weight $= 4.5\text{ N} - 3.7\text{ N} = \mathbf{0.8\text{ N}}$
- By Archimedes' Principle, weight of displaced water $= \mathbf{0.8\text{ N}}$
- Mass of displaced water $= \frac{W}{g} = \frac{0.8\text{ N}}{10\text{ m/s}^2} = \mathbf{0.08\text{ kg}} = 80\text{ g}$
- Volume of displaced water $= \frac{m}{\rho} = \frac{0.08\text{ kg}}{1000\text{ kg/m}^3} = \mathbf{8 \times 10^{-5}\text{ m}^3} = 80\text{ cm}^3$

**Verification:** $8 \times 10^{-5}\text{ m}^3 \times 1000 \times 10 = 0.8\text{ N}$ ✅

### Example 4: Measuring the Volume of an Irregular Object

An irregularly shaped piece of rock weighs $2.0\text{ N}$ in air and $1.5\text{ N}$ when immersed in water. What is the physical volume of the rock?

- Loss of weight (upthrust) $= 2.0\text{ N} - 1.5\text{ N} = 0.5\text{ N}$
- From $U = V \rho g \implies V = \frac{U}{\rho g}$:  
  $$V = \frac{0.5\text{ N}}{(1000\text{ kg/m}^3) \times (10\text{ m/s}^2)} = \frac{0.5}{10,000} = \mathbf{5 \times 10^{-5}\text{ m}^3} = 50\text{ cm}^3$$

**Verification:**  
$5 \times 10^{-5}\text{ m}^3 \times 1000 \times 10 = 0.5\text{ N}$ ✅  
This demonstrates one of the most powerful practical uses of Archimedes' Principle: **measuring the volume of any complex or irregular solid without complex geometry**!

### Example 5: Partially Submerged Iron Block

A solid cast-iron block has dimensions $10\text{ cm} \times 10\text{ cm} \times 5\text{ cm}$ and density $7800\text{ kg/m}^3$. It is suspended from a spring balance such that exactly **half of its volume** is submerged in water. What does the spring balance read?

- Total block volume: $V_{\text{total}} = 0.10\text{ m} \times 0.10\text{ m} \times 0.05\text{ m} = 5 \times 10^{-4}\text{ m}^3$
- Mass of block: $m = \rho_{\text{iron}} \times V_{\text{total}} = 7800\text{ kg/m}^3 \times 5 \times 10^{-4}\text{ m}^3 = 3.9\text{ kg}$
- Weight in air: $W = 3.9\text{ kg} \times 10\text{ m/s}^2 = \mathbf{39\text{ N}}$
- Submerged volume: $V_{\text{sub}} = \frac{5 \times 10^{-4}\text{ m}^3}{2} = 2.5 \times 10^{-4}\text{ m}^3$
- Upthrust: $U = (2.5 \times 10^{-4}\text{ m}^3) \times 1000 \times 10 = \mathbf{2.5\text{ N}}$
- Apparent weight reading: $W_{\text{app}} = 39\text{ N} - 2.5\text{ N} = \mathbf{36.5\text{ N}}$

**Verification:**  
If fully submerged, upthrust would be $5 \times 10^{-4} \times 1000 \times 10 = 5\text{ N}$. For half immersion, $U = \frac{5\text{ N}}{2} = 2.5\text{ N}$ ✅

### Example 6: Fresh Water vs. Seawater

A scientific probe of volume $2 \times 10^{-4}\text{ m}^3$ weighs $5.0\text{ N}$ in air. Find the upthrust and apparent weight when completely submerged in:  
(a) Fresh water ($\rho = 1000\text{ kg/m}^3$)  
(b) Ocean seawater ($\rho = 1030\text{ kg/m}^3$)

- (a) Fresh water:  
  $U_{\text{fresh}} = (2 \times 10^{-4}\text{ m}^3) \times 1000 \times 10 = \mathbf{2.0\text{ N}}$  
  $W_{\text{app}} = 5.0\text{ N} - 2.0\text{ N} = \mathbf{3.0\text{ N}}$
- (b) Ocean seawater:  
  $U_{\text{sea}} = (2 \times 10^{-4}\text{ m}^3) \times 1030 \times 10 = \mathbf{2.06\text{ N}}$  
  $W_{\text{app}} = 5.0\text{ N} - 2.06\text{ N} = \mathbf{2.94\text{ N}}$

**Verification:**  
$\frac{U_{\text{sea}}}{U_{\text{fresh}}} = \frac{2.06}{2.00} = 1.03 = \frac{1030}{1000}$ ✅  
Seawater provides slightly more upthrust because of its dissolved salts. This explains why swimmers float noticeably more easily in the ocean than in a freshwater swimming pool!

---

## Part B: Relative Density (RD)

In scientific work, instead of stating densities in bulky units of $\text{kg/m}^3$, it is often far more convenient to compare the density of a substance directly against the density of pure water:

> **Relative Density (RD) = $\frac{\text{Density of the substance}}{\text{Density of water at } 4^\circ\text{C}}$**

Because relative density is a direct ratio between two quantities with identical units ($\text{kg/m}^3 \div \text{kg/m}^3$), the units cancel out completely:

> **Relative Density is a pure, dimensionless number with NO units!**

**Physical Meaning:** An RD of $7.8$ means that the substance is **$7.8$ times as dense as an equal volume of pure water**.

| Substance | Density ($\text{kg/m}^3$) | Relative Density ($\text{RD}$) |
|---|---|---|
| Pure water | $1000$ | $1.0$ |
| Common pine wood | $\approx 600$ | $\approx 0.6$ |
| Aluminium | $2700$ | $2.7$ |
| Cast iron | $7800$ | $7.8$ |
| Liquid mercury | $13,600$ | $13.6$ |
| Pure gold | $19,300$ | $19.3$ |

**Relationship between Density and RD:**

> **$\text{Density in kg/m}^3 = \text{RD} \times 1000\text{ kg/m}^3$**  
> **$\text{Density in g/cm}^3 = \text{RD} \times 1\text{ g/cm}^3$**

### Example 7: Calculating Density and Mass from RD

The relative density of aluminium is $2.7$. What is its density in $\text{kg/m}^3$? What is the mass of a solid aluminium bar of volume $2 \times 10^{-3}\text{ m}^3$?

- Density: $\rho = \text{RD} \times 1000\text{ kg/m}^3 = 2.7 \times 1000 = \mathbf{2700\text{ kg/m}^3}$
- Mass: $m = \rho \times V = (2700\text{ kg/m}^3) \times (2 \times 10^{-3}\text{ m}^3) = \mathbf{5.4\text{ kg}}$

**Verification:** $\frac{5.4\text{ kg}}{2 \times 10^{-3}\text{ m}^3} = 2700\text{ kg/m}^3$; $\frac{2700}{1000} = 2.7$ ✅

*(Notice a profound pattern: substances with $\text{RD} < 1$, like wood at $0.6$, float on water; substances with $\text{RD} > 1$, like iron at $7.8$, sink in water. We will investigate this fully in Topic 7!)*

---

## Part C: Finding the Relative Density of a Sinking Solid

Now we arrive at the practical masterpiece of Archimedes' Principle: **determining the exact relative density of any dense, sinking solid (such as a coin, pebble, or piece of jewellery) using just two spring balance weighings!**

### Derivation

Let a solid body have physical volume $V$ and density $\rho$. Let the density of water be $\rho_w$.
1. Weigh the solid in air:
   $$\text{Weight in air } W_{\text{air}} = V \times \rho \times g$$
2. Weigh the solid completely immersed in water:
   $$\text{Upthrust (loss of weight)} = W_{\text{air}} - W_{\text{water}} = V \times \rho_w \times g$$

Now take the ratio:
$$\frac{\text{Weight in air}}{\text{Loss of weight in water}} = \frac{V \rho g}{V \rho_w g} = \frac{\rho}{\rho_w} = \mathbf{\text{RD}}$$

Notice that volume $V$ and gravity $g$ **cancel out completely**! You do not need to measure the object's dimensions or calculate its volume at all:

> **$\text{Relative Density (RD)} = \frac{\text{Weight in air}}{\text{Weight in air} - \text{Weight in water}} = \frac{\text{Weight in air}}{\text{Loss of weight in water}}$**

### Solving Sophia's Story: Verifying the Gold Chain

Let us evaluate the readings taken by Mr. Harrison on his jewellery balance:

```
     WEIGHED IN AIR                      WEIGHED IN WATER

         +---+                               +---+
         │   │  1.93 N                       │   │  1.83 N
         +---+                               +---+
           │                                   │
           │                              │    │    │
         Chain                            │~~~~│~~~~│
        (in air)                          │  Chain  │
                                          │(immersed│
                                          +---------+
                                             Beaker
```

> **Figure 6.2** – Determining the relative density of the gold chain: weighing in air gives $1.93\text{ N}$; weighing submerged in water gives $1.83\text{ N}$. The difference ($0.10\text{ N}$) is the weight of displaced water.

**Example 8 (Sophia's Gold Chain):**  
A gold chain weighs $1.93\text{ N}$ in air and $1.83\text{ N}$ when completely submerged in water. Calculate its relative density and determine whether it is crafted from pure gold ($\text{RD}_{\text{gold}} = 19.3$).

- Loss of weight in water: $\Delta W = 1.93\text{ N} - 1.83\text{ N} = \mathbf{0.10\text{ N}}$
- Relative density:  
  $$\text{RD} = \frac{W_{\text{air}}}{\Delta W} = \frac{1.93\text{ N}}{0.10\text{ N}} = \mathbf{19.3}$$
- Substance density: $\rho = 19.3 \times 1000\text{ kg/m}^3 = \mathbf{19,300\text{ kg/m}^3}$

**Verdict:** The calculated relative density matches the standard physical constant of pure gold ($19.3$) perfectly. Sophia's mother's chain is **authentic pure gold**!

**Verification:**  
Volume of chain: $V = \frac{\Delta W}{\rho_w g} = \frac{0.10\text{ N}}{10,000} = 1 \times 10^{-5}\text{ m}^3$.  
Mass of chain: $m = \frac{1.93\text{ N}}{10\text{ m/s}^2} = 0.193\text{ kg}$.  
Density: $\frac{0.193\text{ kg}}{1 \times 10^{-5}\text{ m}^3} = 19,300\text{ kg/m}^3$ ✅

### What if the Chain Were Counterfeit?

**Example 9 (A Suspect Alloy Chain):**  
Suppose another chain weighs $1.50\text{ N}$ in air and $1.40\text{ N}$ in water. Is it pure gold?

- Loss of weight: $\Delta W = 1.50\text{ N} - 1.40\text{ N} = 0.10\text{ N}$
- Relative density:  
  $$\text{RD} = \frac{W_{\text{air}}}{\Delta W} = \frac{1.50\text{ N}}{0.10\text{ N}} = \mathbf{15.0}$$
- Density: $\rho = 15.0 \times 1000\text{ kg/m}^3 = \mathbf{15,000\text{ kg/m}^3}$

**Verdict:** An RD of $15.0$ is substantially lower than $19.3$. The chain is an alloy adulterated with cheaper, less dense metals such as copper ($\text{RD} = 8.9$) or silver ($\text{RD} = 10.5$). It is **not pure gold**!

**Verification:**  
If this $1.50\text{ N}$ chain were pure gold, its expected weight loss would be only $\frac{1.50}{19.3} \approx 0.078\text{ N}$. The observed loss was $0.10\text{ N}$, indicating that it occupies a larger volume than pure gold would for that mass ✅

### Requirement for This Method

This specific experimental method applies to solid objects that:
1. Are **denser than water** (so they sink completely).
2. Are **insoluble in water** (they do not dissolve or absorb water).

---

## Part D: Determining the Relative Density of a Liquid (Optional Extension)

We can also apply Archimedes' Principle to find the relative density of an unknown liquid (such as an oil, alcohol, or acid solution) using a single solid sinker:

Weigh the solid in three environments:
1. In air: $W_{\text{air}}$
2. Completely submerged in water: $W_{\text{water}}$
3. Completely submerged in the unknown liquid: $W_{\text{liquid}}$

Since the solid's volume $V$ is identical in both liquids:
- Loss of weight in water $= \rho_{\text{water}} \times V \times g$
- Loss of weight in liquid $= \rho_{\text{liquid}} \times V \times g$

Dividing the two equations yields:

> **$\text{RD of liquid} = \frac{\text{Loss of weight in liquid}}{\text{Loss of weight in water}} = \frac{W_{\text{air}} - W_{\text{liquid}}}{W_{\text{air}} - W_{\text{water}}}$**

### Example 10: Finding the Relative Density of an Oil

A glass sinker weighs $5.0\text{ N}$ in air, $3.0\text{ N}$ in water, and $3.4\text{ N}$ in a sample of motor oil. Find the relative density and density of the oil.

- Loss of weight in water: $\Delta W_{\text{water}} = 5.0\text{ N} - 3.0\text{ N} = \mathbf{2.0\text{ N}}$
- Loss of weight in oil: $\Delta W_{\text{oil}} = 5.0\text{ N} - 3.4\text{ N} = \mathbf{1.6\text{ N}}$
- Relative density of oil:  
  $$\text{RD} = \frac{\Delta W_{\text{oil}}}{\Delta W_{\text{water}}} = \frac{1.6\text{ N}}{2.0\text{ N}} = \mathbf{0.8}$$
- Density of oil: $\rho = 0.8 \times 1000 = \mathbf{800\text{ kg/m}^3}$

**Verification:**  
Sinker volume: $V = \frac{2.0\text{ N}}{10,000} = 2 \times 10^{-4}\text{ m}^3$.  
Upthrust in oil: $(2 \times 10^{-4}\text{ m}^3) \times 800 \times 10 = 1.6\text{ N}$ ✅

---

## Part E: Additional Practical Applications

Beyond testing precious metals, Archimedes' Principle is essential in modern science and industry:

- **Assaying and Purity Testing:** Verifying the composition of alloys, gemstones, and metallurgical ingots without destroying the specimen.
- **Volume of Irregular Solids:** Rapidly measuring the volume of geological samples, fossils, and machined parts via fluid displacement.
- **Hydrometers and Lactometers:** Direct-reading floatation instruments that measure liquid density and test the purity of milk (lactometers) or battery electrolyte (hydrometers). We will explore how they work in **Topic 7**.
- **Naval Architecture:** Designing cargo ships, oil tankers, and submarines so that their displaced water volume provides safe, stable buoyancy.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Using total volume instead of submerged volume for partial immersion.**  
   In Example 5, the iron block was only half-submerged. Using the entire volume doubles the calculated upthrust ($5\text{ N}$ instead of the correct $2.5\text{ N}$). Only the **displaced fluid volume** creates upthrust.

2. **Mistake 2: Writing units next to Relative Density.**  
   Relative density is a pure dimensionless ratio. Stating that iron has an RD of "$7.8\text{ kg/m}^3$" or "$7.8\text{ g/cm}^3$" is incorrect. The RD is simply **$7.8$**; its density is $7800\text{ kg/m}^3$.

3. **Mistake 3: Confusing mass (kg) with weight (N).**  
   Spring balances record gravitational weight in newtons ($\text{N}$). If a problem states an object has a mass of $300\text{ g}$, you must convert to weight in newtons ($0.3\text{ kg} \times 10 = 3\text{ N}$) before using force formulas.

4. **Mistake 4: Inverting the Relative Density fraction.**  
   The formula is strictly:  
   $$\text{RD} = \frac{\text{Weight in air}}{\text{Loss of weight in water}}$$  
   Dividing weight in water by weight in air ($\frac{1.83}{1.93} \approx 0.95$) is completely incorrect!

5. **Mistake 5: Forgetting to multiply by water density ($\rho_w = 1000\text{ kg/m}^3$).**  
   When calculating volume from upthrust ($V = \frac{U}{\rho g}$), omitting $\rho_w$ throws your calculated volume off by a factor of $1000$.

6. **Mistake 6: Treating the "Eureka" bathtub story as rigorous historical fact.**  
   Historical anecdotes about shouting through Syracuse streets are entertaining folklore passed down centuries after Archimedes lived. The **physics of Archimedes' Principle**, however, is mathematically exact and verified daily in modern engineering!

---

## Quick Recap

- **Archimedes' Principle:** When an object is partially or wholly submerged in a fluid, it experiences an upthrust equal to the weight of the fluid it displaces:  
  **$U = V_{\text{displaced}} \times \rho_{\text{fluid}} \times g$**.
- This applies to all fluids and bodies of any shape.
- **Eureka Can Experiment:** Confirms that $\text{Loss of weight} = W_{\text{air}} - W_{\text{water}} = \text{Weight of overflow displaced water}$.
- **Relative Density (RD):** Ratio of a substance's density to pure water density at $4^\circ\text{C}$.  
  $$\text{RD} = \frac{\rho_{\text{substance}}}{\rho_{\text{water}}}$$  
  **Dimensionless (no units).** $\text{Density in kg/m}^3 = \text{RD} \times 1000\text{ kg/m}^3$.
- **RD of a Sinking Solid:**  
  $$\mathbf{\text{RD} = \frac{W_{\text{air}}}{W_{\text{air}} - W_{\text{water}}} = \frac{W_{\text{air}}}{\text{Loss of weight in water}}}$$
- **RD of a Liquid:**  
  $$\text{RD} = \frac{\text{Loss of weight in liquid}}{\text{Loss of weight in water}}$$
- **Solving Sophia's Story:** The gold chain gave $W_{\text{air}} = 1.93\text{ N}$, $\Delta W = 0.10\text{ N} \implies \text{RD} = 19.3$, verifying it as pure gold. A counterfeit chain had $\text{RD} = 15.0$.

---

## Practice Questions

*(Take $g = 10\text{ m/s}^2$ and pure water density $= 1000\text{ kg/m}^3$ unless specified otherwise.)*

1. A solid cube of side $5\text{ cm}$ is completely immersed in water. Find the volume of water it displaces and the upthrust acting on it.

2. A stone weighs $8.0\text{ N}$ in air and $5.5\text{ N}$ when completely submerged in water. Calculate:  
   (a) the loss of weight in water  
   (b) the volume of the stone  
   (c) the relative density of the stone.

3. A solid body of volume $3 \times 10^{-4}\text{ m}^3$ is completely submerged in kerosene of density $800\text{ kg/m}^3$. Find the upthrust. What would the upthrust be if it were submerged in fresh water?

4. A solid silver ornament weighs $1.05\text{ N}$ in air and $0.95\text{ N}$ when completely immersed in water. Calculate its relative density and its density in $\text{kg/m}^3$.

5. The relative density of aluminium is $2.7$. Find its density in $\text{kg/m}^3$ and determine the mass of an aluminium casting of volume $4 \times 10^{-3}\text{ m}^3$.

6. A solid sinker weighs $6.0\text{ N}$ in air, $4.0\text{ N}$ in water, and $4.6\text{ N}$ in an unknown liquid X. Find the relative density and density of liquid X.

7. A metal cylinder of total volume $6 \times 10^{-4}\text{ m}^3$ is held half-immersed in water. Calculate the upthrust acting on it. A student mistakenly used the entire volume and calculated $6\text{ N}$. Explain the student's error.

8. State whether each statement is True or False, providing a reason:  
   (a) The upthrust acting on an immersed body is equal to the weight of the fluid it displaces.  
   (b) Relative density is measured in units of $\text{kg/m}^3$.  
   (c) For a solid that sinks in water, $\text{RD} = \frac{W_{\text{water}}}{W_{\text{air}}}$.  
   (d) The story of Archimedes running through Syracuse shouting "Eureka!" is an irrefutably proven historical event.

9. A gold necklace weighs $0.965\text{ N}$ in air and $0.915\text{ N}$ in water. Is it made of pure gold ($\text{RD} = 19.3$)? Another necklace weighs $1.20\text{ N}$ in air and $1.12\text{ N}$ in water; is it pure gold?

10. In a Eureka can demonstration, an object completely submerged causes $250\text{ mL}$ of water to overflow into a graduated beaker.  
    (a) Find the weight of this displaced water.  
    (b) If the object weighs $6.0\text{ N}$ in air, what reading will the spring balance show while the object is submerged in water?

### Answers

1. Volume of cube: $V = (0.05\text{ m})^3 = 1.25 \times 10^{-4}\text{ m}^3 = 125\text{ cm}^3$.  
   Volume of displaced water $= \mathbf{1.25 \times 10^{-4}\text{ m}^3}$.  
   Upthrust: $U = V \rho g = (1.25 \times 10^{-4}\text{ m}^3) \times 1000 \times 10 = \mathbf{1.25\text{ N}}$.  
   *Check:* Displaced mass $= 1000 \times (1.25 \times 10^{-4}) = 0.125\text{ kg}$; weight $= 0.125 \times 10 = 1.25\text{ N}$ ✅

2. (a) $\text{Loss of weight} = 8.0\text{ N} - 5.5\text{ N} = \mathbf{2.5\text{ N}}$.  
   (b) $V = \frac{U}{\rho g} = \frac{2.5\text{ N}}{10,000} = \mathbf{2.5 \times 10^{-4}\text{ m}^3} = 250\text{ cm}^3$.  
   (c) $\text{RD} = \frac{W_{\text{air}}}{\text{Loss}} = \frac{8.0\text{ N}}{2.5\text{ N}} = \mathbf{3.2}$.  
   *Check:* Density $= 3.2 \times 1000 = 3200\text{ kg/m}^3$; mass $= 0.8\text{ kg}$; $\frac{0.8}{2.5 \times 10^{-4}} = 3200\text{ kg/m}^3$ ✅

3. In kerosene: $U = (3 \times 10^{-4}\text{ m}^3) \times 800 \times 10 = \mathbf{2.4\text{ N}}$.  
   In water: $U = (3 \times 10^{-4}\text{ m}^3) \times 1000 \times 10 = \mathbf{3.0\text{ N}}$.  
   *Check:* $\frac{2.4}{3.0} = 0.8 = \frac{800}{1000}$ ✅

4. Loss of weight $= 1.05\text{ N} - 0.95\text{ N} = 0.10\text{ N}$.  
   $\text{RD} = \frac{1.05\text{ N}}{0.10\text{ N}} = \mathbf{10.5}$.  
   Density $= 10.5 \times 1000 = \mathbf{10,500\text{ kg/m}^3}$.  
   *Check:* $0.10 \times 10.5 = 1.05\text{ N}$ ✅

5. Density $= 2.7 \times 1000 = \mathbf{2700\text{ kg/m}^3}$.  
   Mass $= \rho \times V = 2700\text{ kg/m}^3 \times (4 \times 10^{-3}\text{ m}^3) = \mathbf{10.8\text{ kg}}$.  
   *Check:* $\frac{10.8\text{ kg}}{4 \times 10^{-3}\text{ m}^3} = 2700\text{ kg/m}^3$ ✅

6. Loss in water: $\Delta W_{\text{water}} = 6.0\text{ N} - 4.0\text{ N} = 2.0\text{ N}$.  
   Loss in liquid X: $\Delta W_X = 6.0\text{ N} - 4.6\text{ N} = 1.4\text{ N}$.  
   $\text{RD of liquid X} = \frac{1.4\text{ N}}{2.0\text{ N}} = \mathbf{0.7}$.  
   Density of liquid X $= 0.7 \times 1000 = \mathbf{700\text{ kg/m}^3}$.  
   *Check:* Volume $= \frac{2.0}{10,000} = 2 \times 10^{-4}\text{ m}^3$; Upthrust in X $= 700 \times 10 \times (2 \times 10^{-4}) = 1.4\text{ N}$ ✅

7. Submerged volume: $V_{\text{sub}} = \frac{6 \times 10^{-4}\text{ m}^3}{2} = 3 \times 10^{-4}\text{ m}^3$.  
   $U = (3 \times 10^{-4}\text{ m}^3) \times 1000 \times 10 = \mathbf{3\text{ N}}$.  
   The student used the entire volume of the cylinder rather than the submerged portion. Since only half of the cylinder displaced water, the correct upthrust is half: $3\text{ N}$, not $6\text{ N}$.

8. (a) **True** ✅. This is the precise statement of Archimedes' Principle.  
   (b) **False** ❌. Relative density is a dimensionless ratio with no units.  
   (c) **False** ❌. $\text{RD} = \frac{W_{\text{air}}}{W_{\text{air}} - W_{\text{water}}}$.  
   (d) **False** ❌. The bathtub anecdote is historical folklore, although the physical principle is fully validated.

9. Necklace 1: Loss $= 0.965\text{ N} - 0.915\text{ N} = 0.050\text{ N}$.  
   $\text{RD} = \frac{0.965}{0.050} = \mathbf{19.3}$. **It is pure gold.**  
   Necklace 2: Loss $= 1.20\text{ N} - 1.12\text{ N} = 0.080\text{ N}$.  
   $\text{RD} = \frac{1.20}{0.080} = \mathbf{15.0}$. **It is not pure gold** (it is an alloy).  
   *Check:* $0.050 \times 19.3 = 0.965$ ✅; $0.080 \times 15.0 = 1.20$ ✅

10. (a) $250\text{ mL} = 250\text{ cm}^3 = 2.5 \times 10^{-4}\text{ m}^3$.  
    $\text{Mass} = 1000 \times (2.5 \times 10^{-4}) = 0.25\text{ kg}$.  
    $\text{Weight of displaced water} = 0.25\text{ kg} \times 10\text{ m/s}^2 = \mathbf{2.5\text{ N}}$.  
    (b) $\text{Upthrust} = 2.5\text{ N}$.  
    $\text{Balance reading in water} = 6.0\text{ N} - 2.5\text{ N} = \mathbf{3.5\text{ N}}$.  
    *Check:* $3.5\text{ N} + 2.5\text{ N} = 6.0\text{ N}$ ✅

---

Now you can explain to Sophia how the secret of her gold chain was revealed: **weighing the chain in air and in water reveals the weight of displaced water, giving its exact relative density through Archimedes' Principle!**

**What's next?** If iron has a relative density of $7.8$ (meaning it sinks like a stone), how can massive steel container ships weighing $100,000\text{ tonnes}$ float gracefully across oceans? In our final topic—**Topic 7: Floatation**—we will uncover the Law of Floatation, solve the paradox of the nail vs. the ocean liner, and wrap up the entire chapter!
