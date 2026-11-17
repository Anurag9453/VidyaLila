# Chapter: Machines (Part 3)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [machines-part2.md](machines-part2.md)** (which established mechanical advantage, velocity ratio, and efficiency). The chapter began in [machines.md](machines.md). For prerequisite force and gravitational weight principles, refer to [force-and-laws-of-motion-part6.md](../force-and-laws-of-motion/force-and-laws-of-motion-part6.md) and [gravitation-part5.md](../gravitation/gravitation-part5.md).
> **Topics covered in this file:**
> 3. Lever: Moment of Force and Principle of Moments

---

# Topic 3: Lever: Moment of Force and Principle of Moments

In Topic 2, we established three quantitative metrics for evaluating any machine: **Mechanical Advantage** ($\text{MA} = L / E$), **Velocity Ratio** ($\text{VR} = d_E / d_L$), and **Efficiency** ($\eta = (\text{MA} / \text{VR}) \times 100\%$), proving that in an ideal, frictionless machine, $\text{MA} = \text{VR}$.

Now, we investigate how physical machines generate these mechanical advantages. We begin with humanity's oldest, simplest, and most versatile machine: the **lever**. A lever is nothing more than a rigid bar free to rotate about a fixed pivot. In this topic, we will explore the rotational physics governing levers: the **moment of a force**, the **principle of moments**, and the **three distinct classes of levers**.

**Throughout this topic, $g = 10\text{ m/s}^2$** (so a mass of $1\text{ kg}$ has a gravitational weight of $10\text{ N}$). Unless explicitly stated otherwise, the structural deadweight of the lever beam itself is treated as negligible.

---

## The Park Seesaw

One late afternoon, Maya was sitting on a park bench working on her physics notes while Mr. Sterling was taking a brief rest nearby. Suddenly, Maya looked up toward the playground and laughed in astonishment.

On the park's large steel seesaw, an **adult father** and his **young child** were seated on opposite sides. The father sat **very close to the central pivot**, whereas his small daughter sat at the **extreme far end of the plank**. Remarkably, the seesaw was resting in **perfect, horizontal equilibrium**: neither side touched the ground, hovering completely level!

Maya turned to Mr. Sterling in disbelief. "Mr. Sterling, how is that physically possible? The father must weigh four times as much as his daughter. How can a small child balance a grown adult without touching the ground?"

Mr. Sterling smiled. "That is an insightful observation, Maya. The balance does not depend on **weight alone**; it depends on **where that weight is applied relative to the pivot**. The rotational turning effect produced by the child matches the turning effect produced by her father. In physics, we call this turning effect the **moment of force**. Let us examine the mechanics of rotation, and then we will calculate the exact positions on that seesaw."

The secret lay in the distances from the pivot.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Lever** | A rigid bar capable of rotating freely about a fixed point or axis | Seesaw, crowbar, scissors |
| **Fulcrum ($F$)** | The fixed pivot point about which a lever turns | The central hinge pin of a seesaw |
| **Effort ($E$)** | The external force applied to the lever to perform work | Hand pushing down on a crowbar |
| **Load ($L$)** | The resistive force or weight overcome by the lever | The boulder being pried upwards |
| **Effort arm** | The perpendicular distance from the fulcrum to the line of action of the effort | Distance from pivot to operator's hand |
| **Load arm** | The perpendicular distance from the fulcrum to the line of action of the load | Distance from pivot to the load |
| **Moment of force** | The rotational turning effect of a force = $\text{Force} \times \text{Perpendicular distance from pivot}$ | $20\text{ N} \times 0.5\text{ m} = 10\text{ N m}$ |
| **Clockwise moment** | A turning effect that tends to rotate the lever in the direction of clock hands | Downward force on the right side of pivot |
| **Anticlockwise moment** | A turning effect that tends to rotate the lever opposite to clock hands | Downward force on the left side of pivot |
| **Equilibrium (balance)** | The state where the resultant turning moment on a body is zero | A level, motionless seesaw |

---

## Part A: What is a Lever and its Components?

A **lever** is a rigid body (typically a straight or curved metal or wooden bar) capable of rotating around a fixed point called the **fulcrum** ($F$). Two primary forces act upon it:

- **Effort ($E$):** The input force applied to the bar.
- **Load ($L$):** The opposing force or gravitational weight overcome by the bar.

The perpendicular distances from the fulcrum to the lines of action of these forces are termed the **lever arms**:
- **Effort Arm ($e$):** Perpendicular distance from fulcrum to the line of effort.
- **Load Arm ($l$):** Perpendicular distance from fulcrum to the line of load.

A simple horizontal lever with the fulcrum situated between the effort and the load is illustrated below:

```
    effort arm            load arm
  <─────────────>   <──────────>
  ↓ E                           ↓ L
  ═══════════════════════════════
                  ^
                  F (fulcrum)
```

> **Figure 3.1** – Basic components of a lever: the rigid beam ("="), the fulcrum ("^"), and the perpendicular distances defining the effort arm and load arm.

Depending on the relative positions of the fulcrum, the load, and the effort, levers are categorized into three distinct functional classes.

---

## Part B: Moment of Force (Turning Effect)

Have you ever tried opening a heavy wooden door by pushing right next to its **hinge**? It requires enormous effort. Yet, if you push near the **handle** at the far edge, the door swings open effortlessly. The force required is dramatically different, even though the door's mass is unchanged. Why?

Because the rotational effect of a force depends not only on the **magnitude of the force**, but also on **how far from the pivot the force is applied**.

In physics, this rotational turning effect is quantified as the **moment of force** (or **torque**):

> $$\text{Moment of Force} = \text{Force} \times \text{Perpendicular distance from fulcrum to line of action of force}$$
> $$M = F \times d$$

- **SI Unit:** $\mathbf{\text{N m}}$ (newton meter). Although dimensionally equivalent to the joule ($\text{N} \times \text{m}$), moments represent rotational torque, never mechanical energy or work.
- **Direction / Sense:** A moment always has a rotational sense: either **clockwise** (tending to rotate in the direction of clock hands) or **anticlockwise** (counterclockwise).

The turning effect depends directly on two parameters: the magnitude of the applied force and the length of the lever arm. This explains why an extended mechanical spanner loosens a seized bolt with far less muscular strain than a short wrench.

### The Distance Must Be Strictly Perpendicular

If a force acts at an angle to the beam rather than perpendicular to it, the lever arm is **not** the distance measured along the beam. It is strictly the **perpendicular line dropped from the pivot to the line of action of the force**.

```
 O ═════════════════════ P
  ╲                   ╱     F (slanted force applied at P)
   ╲ d             ╱
    ╲           ·
     ╲       ·        (Extended line of action of F)
      ╲   ·
       N  (90° right angle here)
```

> **Figure 3.2** – When force $F$ acts at an angle at point $P$, extend the line of action of $F$ and drop a perpendicular $ON$ from pivot $O$. The true lever arm is distance $d = ON$. Because $d < OP$, taking the length along the beam would overestimate the turning moment.

In introductory Class 9 physics, forces generally act at right angles ($90^\circ$) to the lever beam, so the perpendicular distance simply equals the physical distance along the bar.

### Clockwise vs. Anticlockwise Moments

A downward force acting to the **right** of a central fulcrum tends to rotate the beam clockwise. A downward force acting to the **left** of the fulcrum tends to rotate the beam anticlockwise. These opposing moments counteract one another.

---

## Part C: Principle of Moments

When a rigid body pivoted at a fixed point is in **rotational equilibrium** (balanced and not rotating):

> $$\text{Sum of Clockwise Moments} = \text{Sum of Anticlockwise Moments}$$

This fundamental law is known as the **Principle of Moments**.

For a standard lever with a single load on one side and a single effort on the other:

$$\text{Load} \times \text{Load Arm} = \text{Effort} \times \text{Effort Arm}$$
$$L \times l = E \times e$$

Rearranging this equilibrium equation reveals the mechanical advantage directly:

$$\frac{L}{E} = \frac{e}{l}$$

> $$\text{Mechanical Advantage (MA)} = \frac{\text{Effort Arm}}{\text{Load Arm}}$$

Now recall the geometric definition of Velocity Ratio from Topic 2: $\text{VR} = d_E / d_L$. When a straight lever pivots through an angle $\theta$, the arcs traced by the two ends are proportional to their respective radial arms ($d_E = e \cdot \theta$ and $d_L = l \cdot \theta$). Therefore:

$$\text{VR} = \frac{e \cdot \theta}{l \cdot \theta} = \frac{e}{l}$$

For an **ideal lever** (neglecting pivot friction and beam weight):

> $$\text{VR} = \frac{\text{Effort Arm}}{\text{Load Arm}} = \text{MA}$$

This proves the assertion from Topic 2: in an ideal machine, $\text{MA} = \text{VR}$.

### Longer Effort Arm Equals Greater Mechanical Advantage

Because $\text{MA} = \text{effort arm} / \text{load arm}$:
- Increasing the **effort arm** relative to the load arm directly multiplies the **mechanical advantage**.
- This is why workers grip a **crowbar** at its furthest tip.
- This is why heavy mechanics use long-handled **breaker bars** to free rusted lug nuts.

The trade-off? The longer effort arm forces the operator's hands to travel through a proportionately larger circular arc, matching our velocity ratio principles.

### Neglecting the Weight of the Lever Beam

Unless explicitly stated otherwise in a problem, the structural weight of the lever bar itself is treated as negligible. In real-world engineering, if a massive beam's center of gravity does not coincide with the fulcrum, the beam's own weight exerts an additional turning moment that must be included in the moment balance equation.

---

## Part D: The Three Classes of Levers

Levers are divided into **three classes** based on the relative positions of the **Fulcrum ($F$)**, **Load ($L$)**, and **Effort ($E$)**.

### Class 1 Lever: Fulcrum in the Middle

Relative order: **$E \dots F \dots L$** (The fulcrum lies between effort and load).

```
   E ↓                       ↓ L
 ═══════════════════════════════
                ^
                F
```

> **Figure 3.3** – Class 1 lever: The fulcrum is positioned between the effort and the load.

- **Mechanical Advantage:** $\text{MA}$ can be **greater than 1, equal to 1, or less than 1**, depending entirely on the placement of the fulcrum. Shifting the fulcrum closer to the load makes the effort arm longer ($\text{MA} > 1$). Placing it in the dead center makes both arms equal ($\text{MA} = 1$).
- **Examples:** Seesaw, crowbar, pair of scissors, pliers, beam balance, claw hammer prying a nail, manual water hand pump.

### Class 2 Lever: Load in the Middle

Relative order: **$F \dots L \dots E$** (The load lies between fulcrum and effort).

```
                 ↑ E
 ═══════════════════════════════
 ^         ↓ L
 F
```

> **Figure 3.4** – Class 2 lever: The load lies between the fulcrum and the effort. Both forces act in opposite directions, and the effort arm is always longer than the load arm.

- **Mechanical Advantage:** Because the effort is applied at the outer end, the **effort arm is always longer than the load arm**. Therefore, **$\text{MA}$ is always strictly greater than 1**. A Class 2 lever is invariably a **force multiplier**.
- **Examples:** Wheelbarrow, nutcracker, bottle opener, heavy door (hinge is fulcrum, door resistance acts through center of gravity, hand pulls handle), lemon squeezer, nail clippers.

### Class 3 Lever: Effort in the Middle

Relative order: **$F \dots E \dots L$** (The effort lies between fulcrum and load).

```
                 ↑ E            ↓ L
 ═══════════════════════════════
 ^
 F
```

> **Figure 3.5** – Class 3 lever: The effort lies between the fulcrum and the load. The effort arm is always shorter than the load arm.

- **Mechanical Advantage:** Because the effort is situated closer to the pivot than the load, the **effort arm is always shorter than the load arm**. Consequently, **$\text{MA}$ is always strictly less than 1**. The effort applied must be **larger than the load**.
- **Why use it?** While force is sacrificed, the load end sweeps through a much larger distance and moves with greater speed than the effort point. A Class 3 lever operates as a **speed and reach multiplier**.
- **Examples:** Cooking tongs, tweezers, fishing rod, floor broom, human forearm lifting a weight, swinging a baseball bat or cricket bat.

### Summary Comparison of the Three Classes

| Class | Central Component | Condition for MA | Mechanical Function | Typical Examples |
|---|---|---|---|---|
| **Class 1** | **Fulcrum ($F$)** in middle | $\text{MA} > 1$, $\text{MA} = 1$, or $\text{MA} < 1$ | Force multiplier, direction changer, or speed multiplier | Seesaw, crowbar, scissors, pliers, beam balance |
| **Class 2** | **Load ($L$)** in middle | Always **$\text{MA} > 1$** | Force multiplier | Wheelbarrow, nutcracker, bottle opener, lemon squeezer |
| **Class 3** | **Effort ($E$)** in middle | Always **$\text{MA} < 1$** | Speed multiplier (magnifies displacement and reach) | Tongs, tweezers, fishing rod, human forearm, broom |

> [!TIP]
> **Universal Memory Rule:** Remember the sequence **F – L – E** corresponding to classes **1 – 2 – 3**:
> - If **F** is in the middle $\rightarrow$ **Class 1**
> - If **L** is in the middle $\rightarrow$ **Class 2**
> - If **E** is in the middle $\rightarrow$ **Class 3**

---

## Part E: Solved Examples

**Example 1 (Calculating Moment of Force):** A mechanic exerts a perpendicular force of $40\text{ N}$ on a spanner at a distance of $25\text{ cm}$ from the center of a bolt. Calculate the turning moment exerted on the bolt.

- Convert distance to SI units: $25\text{ cm} = 0.25\text{ m}$.
- $M = F \times d = 40\text{ N} \times 0.25\text{ m} = \mathbf{10\text{ N m}}$

*Check:* $40 \times 0.25 = 10\text{ N m}$ ✅. If the force were applied at $50\text{ cm}$ ($0.5\text{ m}$), $M = 40 \times 0.5 = 20\text{ N m}$—doubling the arm doubles the moment ✅.

**Example 2 (Finding Effort Using Principle of Moments):** A Class 1 lever supports a load of $600\text{ N}$ positioned $0.2\text{ m}$ from the fulcrum. The effort is applied at a distance of $1.2\text{ m}$ on the opposite side. Determine the required effort and the mechanical advantage.

- Principle of moments: $L \times l = E \times e$
  $$600\text{ N} \times 0.2\text{ m} = E \times 1.2\text{ m}$$
  $$120\text{ N m} = E \times 1.2\text{ m} \quad \Longrightarrow \quad E = \frac{120\text{ N m}}{1.2\text{ m}} = \mathbf{100\text{ N}}$$
- $\text{MA} = \frac{L}{E} = \frac{600\text{ N}}{100\text{ N}} = \mathbf{6}$

*Check:* $\text{MA} = \frac{\text{effort arm}}{\text{load arm}} = \frac{1.2\text{ m}}{0.2\text{ m}} = 6$ ✅. Both approaches agree.

**Example 3 (Determining Necessary Effort Arm Length):** A worker must pry up a slab weighing $900\text{ N}$ using a crowbar with a load arm of $0.1\text{ m}$. If the worker can exert a maximum downward effort of $150\text{ N}$, what minimum length of effort arm is required?

- $L \times l = E \times e$
  $$900\text{ N} \times 0.1\text{ m} = 150\text{ N} \times e$$
  $$90\text{ N m} = 150\text{ N} \times e \quad \Longrightarrow \quad e = \frac{90\text{ N m}}{150\text{ N}} = \mathbf{0.6\text{ m}}$$
- $\text{MA} = \frac{900\text{ N}}{150\text{ N}} = 6$

*Check:* $150\text{ N} \times 0.6\text{ m} = 90\text{ N m}$, balancing $900\text{ N} \times 0.1\text{ m} = 90\text{ N m}$ ✅. $\text{MA} = 0.6 / 0.1 = 6$ ✅.

**Example 4 (Balancing Masses on a Meter Rule):** A uniform $100\text{-cm}$ meter stick is pivoted at its center ($50\text{-cm}$ mark). A mass of $50\text{ g}$ is suspended at the $35\text{-cm}$ mark. At what graduation mark must a mass of $20\text{ g}$ be suspended to balance the rule horizontally? (Ignore the mass of the ruler.)

- Convert masses to gravitational weights ($g = 10\text{ m/s}^2$):
  $$W_1 = 0.05\text{ kg} \times 10\text{ m/s}^2 = 0.5\text{ N}; \quad W_2 = 0.02\text{ kg} \times 10\text{ m/s}^2 = 0.2\text{ N}$$
- Distance of $W_1$ from pivot: $50\text{ cm} - 35\text{ cm} = 15\text{ cm} = 0.15\text{ m}$.
- Anticlockwise moment $= 0.5\text{ N} \times 0.15\text{ m} = 0.075\text{ N m}$.
- Clockwise balance condition: $0.2\text{ N} \times d = 0.075\text{ N m} \Longrightarrow d = \frac{0.075}{0.2} = 0.375\text{ m} = 37.5\text{ cm}$.
- Position mark on ruler $= 50\text{ cm} + 37.5\text{ cm} = \mathbf{87.5\text{ cm}}$.

*Check:* $0.2\text{ N} \times 0.375\text{ m} = 0.075\text{ N m}$ ✅. Directly in grams: $50\text{ g} \times 15\text{ cm} = 750\text{ g cm}$; $20\text{ g} \times 37.5\text{ cm} = 750\text{ g cm}$ ✅.

**Example 5 (Resolving Maya's Seesaw Problem):** The park seesaw has a total length of $4\text{ m}$ with the fulcrum at its midpoint. The father has a mass of $80\text{ kg}$ and sits $0.5\text{ m}$ from the fulcrum. His daughter has a mass of $20\text{ kg}$. At what distance from the fulcrum must the daughter sit to achieve balance?

- Downward weight of father $= 80\text{ kg} \times 10\text{ m/s}^2 = 800\text{ N}$.
- Downward weight of daughter $= 20\text{ kg} \times 10\text{ m/s}^2 = 200\text{ N}$.
- Father's turning moment $= 800\text{ N} \times 0.5\text{ m} = 400\text{ N m}$.
- For equilibrium:
  $$200\text{ N} \times d = 400\text{ N m} \quad \Longrightarrow \quad d = \frac{400\text{ N m}}{200\text{ N}} = \mathbf{2\text{ m}}$$

```
 Daughter (200 N)                Father (800 N)
      ↓                               ↓
      ═════════════════════════════════════════════════
      :<───────── 2 m ───────>:<0.5m>:
                              ^
                           fulcrum
```

> **Figure 3.6** – The park seesaw: The daughter sits at the extreme outer tip ($2\text{ m}$ from the pivot), producing an anticlockwise moment of $400\text{ N m}$ that perfectly balances her father's clockwise moment of $400\text{ N m}$ seated at $0.5\text{ m}$.

*Check:* $800\text{ N} \times 0.5\text{ m} = 400\text{ N m}$ and $200\text{ N} \times 2\text{ m} = 400\text{ N m}$ ✅. On a $4\text{-meter}$ beam, the outer seat is exactly $2\text{ m}$ from center ✅.

Mr. Sterling explained: "The father is four times heavier, but the daughter sits four times farther from the pivot. The product of force and distance balances on both sides."

**Example 6 (Multiple Loads and Pivot Reaction Force):** A weightless horizontal beam is balanced on a pivot. A downward weight of $60\text{ N}$ hangs $0.4\text{ m}$ to the left of the pivot. What weight hung $0.8\text{ m}$ to the right will maintain horizontal equilibrium? What upward support reaction force must the pivot supply?

- Anticlockwise moment $= 60\text{ N} \times 0.4\text{ m} = 24\text{ N m}$.
- Clockwise moment $= W \times 0.8\text{ m} = 24\text{ N m} \Longrightarrow W = \frac{24\text{ N m}}{0.8\text{ m}} = \mathbf{30\text{ N}}$.
- For vertical translational equilibrium, total upward force must balance total downward force:
  $$\text{Upward Support Reaction} = 60\text{ N} + 30\text{ N} = \mathbf{90\text{ N}}$$

```
     60 N                               30 N
      ↓                                   ↓
 ═══════════════════════════════════════
  :<─ 0.4 m ─>:<──────── 0.8 m ───────>
              ^
         pivot (supplies 90 N upward)
```

> **Figure 3.7** – Balanced beam: Rotational moments balance ($24\text{ N m}$ each), and the upward support reaction equals the sum of downward loads ($90\text{ N}$).

*Check:* $60 \times 0.4 = 24\text{ N m}$; $30 \times 0.8 = 24\text{ N m}$ ✅. Total downward force is $90\text{ N}$, matched by the pivot support ✅.

**Example 7 (Resultant Net Moment on a Multi-Child Seesaw):** On a playground seesaw, two children sit to the left of the fulcrum: Liam ($30\text{ kg}$) at $2\text{ m}$, and Maya ($40\text{ kg}$) at $1\text{ m}$. On the right, Leo ($50\text{ kg}$) sits at $1.5\text{ m}$. Which side will tilt downward? Where must Leo reposition himself to balance the seesaw?

- Weights: Liam $= 300\text{ N}$, Maya $= 400\text{ N}$, Leo $= 500\text{ N}$.
- Anticlockwise moments (left side):
  $$(300\text{ N} \times 2\text{ m}) + (400\text{ N} \times 1\text{ m}) = 600\text{ N m} + 400\text{ N m} = \mathbf{1000\text{ N m}}$$
- Clockwise moment (right side):
  $$500\text{ N} \times 1.5\text{ m} = \mathbf{750\text{ N m}}$$
- Net moment $= 1000\text{ N m} - 750\text{ N m} = \mathbf{250\text{ N m}\text{ anticlockwise}}$.
- Because the anticlockwise moment dominates, **the left side tilts downward**.
- For equilibrium: $500\text{ N} \times d = 1000\text{ N m} \Longrightarrow d = \frac{1000}{500} = \mathbf{2\text{ m}}$ from the fulcrum.

*Check:* $500 \times 2 = 1000\text{ N m}$ balances the $1000\text{ N m}$ on the left ✅.

**Example 8 (Class 2 Lever — Wheelbarrow):** In a wheelbarrow, a load of $500\text{ N}$ is centered $0.5\text{ m}$ from the front wheel axle (the fulcrum). The handles are $1.5\text{ m}$ from the axle. Determine the upward lifting effort required and the mechanical advantage.

- $L \times l = E \times e$
  $$500\text{ N} \times 0.5\text{ m} = E \times 1.5\text{ m}$$
  $$250\text{ N m} = E \times 1.5\text{ m} \quad \Longrightarrow \quad E = \frac{250\text{ N m}}{1.5\text{ m}} \approx \mathbf{166.7\text{ N}}$$
- $\text{MA} = \frac{L}{E} = \frac{500\text{ N}}{166.7\text{ N}} = \mathbf{3}$

*Check:* $\text{MA} = \frac{\text{effort arm}}{\text{load arm}} = \frac{1.5\text{ m}}{0.5\text{ m}} = 3$ ✅. In a Class 2 lever, the effort arm is always longer than the load arm, ensuring $\text{MA} > 1$ ✅.

**Example 9 (Class 3 Lever — The Human Forearm):** In the human arm, the elbow joint serves as the fulcrum. The biceps muscle attaches and exerts upward effort $4\text{ cm}$ from the elbow. A person holds a $40\text{ N}$ dumbbell in their hand, $30\text{ cm}$ from the elbow. What upward muscular force must the biceps exert? What is the mechanical advantage?

- Convert to meters: $e = 0.04\text{ m}$, $l = 0.30\text{ m}$.
- $L \times l = E \times e$
  $$40\text{ N} \times 0.30\text{ m} = E \times 0.04\text{ m}$$
  $$12\text{ N m} = E \times 0.04\text{ m} \quad \Longrightarrow \quad E = \frac{12\text{ N m}}{0.04\text{ m}} = \mathbf{300\text{ N}}$$
- $\text{MA} = \frac{L}{E} = \frac{40\text{ N}}{300\text{ N}} \approx \mathbf{0.133}$

*Check:* $\text{MA} = \frac{0.04}{0.30} = 0.133$ ✅. Because $\text{MA} < 1$, the biceps must exert $300\text{ N}$ of muscular tension to hold a modest $40\text{ N}$ weight. The advantage is that a tiny $1\text{-cm}$ contraction of the muscle swings the hand through nearly $8\text{ cm}$ of rapid displacement—providing immense speed, reach, and agility.

**Example 10 (Mechanical Advantage of Shears):** A pair of metal shears has an effort arm (distance from handles to hinge screw) of $10\text{ cm}$ and a load arm (from hinge to sheet metal cut point) of $2\text{ cm}$. Determine the mechanical advantage. If the metal requires $20\text{ N}$ of shearing force, what effort must the hands apply?

- $\text{MA} = \frac{\text{effort arm}}{\text{load arm}} = \frac{10\text{ cm}}{2\text{ cm}} = \mathbf{5}$ (units cancel directly).
- $\text{Effort} = \frac{\text{Load}}{\text{MA}} = \frac{20\text{ N}}{5} = \mathbf{4\text{ N}}$

*Check:* $L \times l = 20\text{ N} \times 0.02\text{ m} = 0.4\text{ N m}$; $E \times e = 4\text{ N} \times 0.10\text{ m} = 0.4\text{ N m}$ ✅.

**Example 11 (Classifying Ten Everyday Tools):**

| Implement | Location of Fulcrum | Location of Load | Location of Effort | Lever Class | Typical MA |
|---|---|---|---|---|---|
| **Seesaw** | Center pivot | One rider | Opposite rider | **Class 1** | Depends on seating |
| **Scissors** | Central pivot screw | Blades cutting cloth | Finger loops | **Class 1** | Usually $> 1$ |
| **Crowbar** | Fulcrum block / heel | Short tip prying stone | Long handle end | **Class 1** | High ($> 1$) |
| **Pliers** | Pivot rivet | Gripping jaws | Squeezed handles | **Class 1** | $> 1$ |
| **Beam balance** | Knife-edge pivot | Load pan | Standard mass pan | **Class 1** | Exactly $1$ |
| **Claw hammer** (prying nail) | Curved head resting on wood | Nail claws | Extended handle | **Class 1** | High ($> 1$) |
| **Wheelbarrow** | Front wheel axle | Tray payload | Hand grips | **Class 2** | $> 1$ |
| **Nutcracker** | End hinge pin | Nut in central cradle | Squeezed handles | **Class 2** | $> 1$ |
| **Bottle opener** | Rim rest on cap top | Lip under cap edge | Hand lifting handle | **Class 2** | $> 1$ |
| **Cooking tongs** | Rear spring hinge | Food at forward tips | Hand squeezing midway | **Class 3** | $< 1$ |

For a nutcracker with $e = 12\text{ cm}$ and $l = 3\text{ cm}$: $\text{MA} = 12 / 3 = \mathbf{4}$.
For cooking tongs with $e = 8\text{ cm}$ and $l = 20\text{ cm}$: $\text{MA} = 8 / 20 = \mathbf{0.4}$.

*Check:* Nutcracker: $12 / 3 = 4 > 1$ ✅. Tongs: $8 / 20 = 0.4 < 1$ ✅. Beam balance: equal arms, so $\text{MA} = 1$ ✅.

**Example 12 (Ideal Lever: Direct Equivalence of MA and VR):** An ideal lever has an effort arm of $1.2\text{ m}$ and a load arm of $0.2\text{ m}$ (as in Example 2). When the effort end moves downward through $30\text{ cm}$, how far does the load ascend? Verify that $\text{VR} = \text{MA}$ and work input equals work output.

- $\text{VR} = \frac{\text{effort arm}}{\text{load arm}} = \frac{1.2\text{ m}}{0.2\text{ m}} = \mathbf{6}$
- $d_L = \frac{d_E}{\text{VR}} = \frac{30\text{ cm}}{6} = \mathbf{5\text{ cm}}$
- From Example 2, $\text{MA} = 6$. Hence, $\text{MA} = \text{VR} = 6$ ✅.
- $\text{Work Input} = 100\text{ N} \times 0.30\text{ m} = \mathbf{30\text{ J}}$
- $\text{Work Output} = 600\text{ N} \times 0.05\text{ m} = \mathbf{30\text{ J}}$

*Check:* $\text{Work Input} = \text{Work Output} = 30\text{ J}$ ✅. This proves that an ideal lever perfectly conserves mechanical work.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Measuring lever arm along the bar when force is inclined**
   The lever arm in $M = F \times d$ is strictly the **perpendicular distance** from the fulcrum to the line of action of the force. If the force acts at an angle, the perpendicular distance is less than the physical length along the bar (Figure 3.2).

2. **Mistake 2: Inverting the arm ratio when calculating MA**
   Remember: **$\text{MA} = \frac{\text{Effort Arm}}{\text{Load Arm}}$**. Never divide load arm by effort arm! For a crowbar, you expect a large $\text{MA} > 1$. If your division yields $0.167$, you accidentally inverted the arms.

3. **Mistake 3: Omitting unit conversions when computing moments**
   In Example 1, multiplying $40\text{ N} \times 25\text{ cm}$ yields $1000\text{ N cm}$. Writing this carelessly as "$1000\text{ N m}$" introduces a 100-fold error! Always convert centimeters to meters ($25\text{ cm} = 0.25\text{ m} \rightarrow 10\text{ N m}$) before stating moments in standard SI units. (Note: When taking a ratio of two lengths like $\text{MA} = e / l$, centimeters in both numerator and denominator cancel legitimately).

4. **Mistake 4: Dismissing Class 3 levers as "useless" because MA < 1**
   A mechanical advantage below $1$ does not make a machine inefficient or useless. Class 3 levers are deliberate **speed and displacement multipliers**. The human forearm, tweezers, and baseball bats sacrifice force to deliver high tip velocities and wide ranges of motion.

5. **Mistake 5: Confusing a force with a moment of force**
   A force is measured in newtons ($\text{N}$); a moment is measured in newton meters ($\text{N m}$). In Example 5, the father's force was $800\text{ N}$, but his moment was $400\text{ N m}$. Equilibrium is a balance of **rotational moments**, not a balance of forces.

6. **Mistake 6: Conflating grams directly with newtons**
   Never set $50\text{ g}$ equal to $50\text{ N}$. A mass of $50\text{ g} = 0.05\text{ kg}$, which corresponds to a gravitational weight of $0.05\text{ kg} \times 10\text{ m/s}^2 = 0.5\text{ N}$. When calculating absolute moments in $\text{N m}$, convert grams to kilograms, then multiply by $g$.

---

## Quick Recap

- A **lever** is a rigid bar capable of pivoting about a fixed point called the **fulcrum ($F$)**, acting under an **effort ($E$)** and overcoming a **load ($L$)**.
- The **effort arm** and **load arm** are the perpendicular distances from the fulcrum to the lines of action of effort and load, respectively.
- **$\text{Moment of Force} = \text{Force} \times \text{Perpendicular distance from pivot}$** ($M = F \times d$), measured in $\text{N m}$. Rotational sense is either clockwise or anticlockwise.
- **Principle of Moments:** At rotational equilibrium, **$\text{Sum of Clockwise Moments} = \text{Sum of Anticlockwise Moments}$**.
- For a balanced lever: $L \times l = E \times e \Longrightarrow \mathbf{\text{MA} = \frac{L}{E} = \frac{\text{Effort Arm}}{\text{Load Arm}}}$. In an ideal lever, **$\text{MA} = \text{VR}$**.
- Extending the effort arm increases mechanical advantage, but requires the effort to travel through a larger arc.
- **Three Classes of Levers:**
  - **Class 1 (F in middle):** $\text{MA}$ can be $> 1$, $= 1$, or $< 1$ (crowbar, scissors, seesaw).
  - **Class 2 (L in middle):** $\text{MA}$ is always $> 1$; pure force multiplier (wheelbarrow, nutcracker, bottle opener).
  - **Class 3 (E in middle):** $\text{MA}$ is always $< 1$; pure speed/reach multiplier (tongs, tweezers, human forearm).
- In Maya's park seesaw: an $80\text{-kg}$ father at $0.5\text{ m}$ ($800\text{ N} \times 0.5\text{ m} = 400\text{ N m}$) is perfectly balanced by a $20\text{-kg}$ daughter at $2\text{ m}$ ($200\text{ N} \times 2\text{ m} = 400\text{ N m}$).
- The net moment determines the direction of angular acceleration: an unbalanced moment causes the lever to tip toward the side of the larger moment.

---

## Practice Questions

1. A perpendicular force of $30\text{ N}$ acts on a door at a distance of $40\text{ cm}$ from the hinges. Calculate its moment about the hinge line in $\text{N m}$. If the same force is applied at a distance of $20\text{ cm}$ from the hinges, what is the resulting moment?

2. A balanced lever carries a load of $360\text{ N}$ at a distance of $0.25\text{ m}$ from the fulcrum. The effort acts at a distance of $1.5\text{ m}$ on the opposite side. Determine:
   (a) The effort required to maintain balance.
   (b) The mechanical advantage of the lever.

3. A crowbar is employed to hoist a slab weighing $1200\text{ N}$. The load arm measures $20\text{ cm}$ and the operator can provide an effort of $150\text{ N}$. Find:
   (a) The required length of the effort arm in meters.
   (b) The mechanical advantage of the crowbar.

4. A uniform meter stick is pivoted at the $50\text{-cm}$ mark. A mass of $60\text{ g}$ is suspended at the $20\text{-cm}$ mark. At what graduation mark must a mass of $40\text{ g}$ be suspended to balance the ruler horizontally? Take $g = 10\text{ m/s}^2$ and neglect ruler mass.

5. On a playground seesaw, a child of mass $25\text{ kg}$ sits at a distance of $2.4\text{ m}$ from the central fulcrum. At what distance on the opposite side must a child of mass $30\text{ kg}$ sit to achieve equilibrium? Take $g = 10\text{ m/s}^2$.

6. Classify each of the following implements as a Class 1, Class 2, or Class 3 lever:
   (a) A pair of scissors
   (b) Barbecue tongs
   (c) A gardener's wheelbarrow
   (d) A claw hammer pulling out a nail
   (e) A pair of cosmetic tweezers
   (f) A fly-fishing rod
   (g) A crown-cap bottle opener
   (h) An equal-arm laboratory beam balance

7. In a wheelbarrow, a payload of $600\text{ N}$ sits centered $0.6\text{ m}$ from the wheel axle. The handles are gripped at a distance of $1.8\text{ m}$ from the axle. Calculate the upward effort required and the mechanical advantage. Why is the mechanical advantage of a wheelbarrow always greater than 1?

8. In a Class 3 lever, a load resistance of $20\text{ N}$ is situated $0.8\text{ m}$ from the fulcrum, and the effort is applied $0.2\text{ m}$ from the fulcrum. Calculate the required effort and the mechanical advantage. Why is such a lever practically useful despite having an $\text{MA} < 1$?

9. A weightless rigid beam is pivoted at its center. On the left side, weights of $20\text{ N}$ at $0.5\text{ m}$ and $30\text{ N}$ at $0.2\text{ m}$ are suspended. On the right side, a single weight of $40\text{ N}$ is suspended at $0.5\text{ m}$. Calculate the net turning moment and state which side tilts downward.

10. State whether each of the following statements is True or False:
    (a) The moment of a force is expressed in newtons.
    (b) A Class 3 lever invariably has a mechanical advantage strictly less than 1.
    (c) For a lever to achieve rotational equilibrium, the applied effort must always equal the load.
    (d) Lengthening the effort arm increases the mechanical advantage of a lever.
    (e) When a force acts obliquely to a beam, the lever arm is measured directly along the beam.

11. A spanner is turned by applying a force of $50\text{ N}$ at a distance of $20\text{ cm}$ from a nut. What force would produce the identical turning moment if applied at a distance of $40\text{ cm}$? Explain in one sentence why using a longer spanner is mechanically advantageous.

### Answers

1. $40\text{ cm} = 0.4\text{ m}$. $\text{Moment} = 30\text{ N} \times 0.4\text{ m} = \mathbf{12\text{ N m}}$.
   At $20\text{ cm} = 0.2\text{ m}$: $\text{Moment} = 30\text{ N} \times 0.2\text{ m} = \mathbf{6\text{ N m}}$.
   *Check:* Halving the distance halves the resulting moment ($12\text{ N m} \rightarrow 6\text{ N m}$) ✅.

2. (a) $L \times l = E \times e \Longrightarrow 360\text{ N} \times 0.25\text{ m} = E \times 1.5\text{ m}$.
   $90\text{ N m} = E \times 1.5\text{ m} \Longrightarrow E = \frac{90\text{ N m}}{1.5\text{ m}} = \mathbf{60\text{ N}}$.
   (b) $\text{MA} = \frac{L}{E} = \frac{360\text{ N}}{60\text{ N}} = \mathbf{6}$ (or $\frac{1.5\text{ m}}{0.25\text{ m}} = 6$) ✅.

3. (a) Load arm $l = 20\text{ cm} = 0.2\text{ m}$.
   $L \times l = 1200\text{ N} \times 0.2\text{ m} = 240\text{ N m}$.
   $E \times e = 240\text{ N m} \Longrightarrow e = \frac{240\text{ N m}}{150\text{ N}} = \mathbf{1.6\text{ m}}$.
   (b) $\text{MA} = \frac{L}{E} = \frac{1200\text{ N}}{150\text{ N}} = \mathbf{8}$ (or $\frac{1.6\text{ m}}{0.2\text{ m}} = 8$) ✅.

4. $W_1 = 0.06\text{ kg} \times 10\text{ m/s}^2 = 0.6\text{ N}$; $W_2 = 0.04\text{ kg} \times 10\text{ m/s}^2 = 0.4\text{ N}$.
   Distance of $W_1$ from pivot $= 50\text{ cm} - 20\text{ cm} = 30\text{ cm} = 0.3\text{ m}$.
   Anticlockwise moment $= 0.6\text{ N} \times 0.3\text{ m} = 0.18\text{ N m}$.
   $0.4\text{ N} \times d = 0.18\text{ N m} \Longrightarrow d = \frac{0.18}{0.4} = 0.45\text{ m} = 45\text{ cm}$.
   Mark on ruler $= 50\text{ cm} + 45\text{ cm} = \mathbf{95\text{ cm}}$.
   *Check:* $60\text{ g} \times 30\text{ cm} = 1800\text{ g cm} = 40\text{ g} \times 45\text{ cm}$ ✅.

5. $W_1 = 25\text{ kg} \times 10 = 250\text{ N}$; $W_2 = 30\text{ kg} \times 10 = 300\text{ N}$.
   Moment of first child $= 250\text{ N} \times 2.4\text{ m} = 600\text{ N m}$.
   For balance: $300\text{ N} \times d = 600\text{ N m} \Longrightarrow d = \frac{600}{300} = \mathbf{2\text{ m}}$.
   *Check:* $300 \times 2 = 600\text{ N m}$ ✅. The heavier child sits closer to the pivot.

6. (a) Scissors: **Class 1** (pivot screw in middle)
   (b) Tongs: **Class 3** (effort applied between hinge and food)
   (c) Wheelbarrow: **Class 2** (load payload in middle)
   (d) Claw hammer (nail removal): **Class 1** (fulcrum heel in middle)
   (e) Tweezers: **Class 3** (effort applied between base hinge and tips)
   (f) Fishing rod: **Class 3** (effort applied between base pivot and rod tip)
   (g) Bottle opener: **Class 2** (load resistance of cap lip in middle)
   (h) Beam balance: **Class 1** (fulcrum pivot in center)

7. $L \times l = 600\text{ N} \times 0.6\text{ m} = 360\text{ N m}$.
   $E \times 1.8\text{ m} = 360\text{ N m} \Longrightarrow E = \frac{360\text{ N m}}{1.8\text{ m}} = \mathbf{200\text{ N}}$.
   $\text{MA} = \frac{600\text{ N}}{200\text{ N}} = \mathbf{3}$ (or $\frac{1.8\text{ m}}{0.6\text{ m}} = 3$) ✅.
   The $\text{MA}$ is always greater than 1 because the load lies between the fulcrum and the effort, making the effort arm ($1.8\text{ m}$) invariably longer than the load arm ($0.6\text{ m}$).

8. $L \times l = 20\text{ N} \times 0.8\text{ m} = 16\text{ N m}$.
   $E \times 0.2\text{ m} = 16\text{ N m} \Longrightarrow E = \frac{16\text{ N m}}{0.2\text{ m}} = \mathbf{80\text{ N}}$.
   $\text{MA} = \frac{20\text{ N}}{80\text{ N}} = \mathbf{0.25}$ (or $\frac{0.2\text{ m}}{0.8\text{ m}} = 0.25$) ✅.
   Such levers are valuable as **speed and displacement multipliers**: a small displacement at the effort produces a broad, rapid movement at the load, enabling quick, precise manual manipulation.

9. Left moments: $(20\text{ N} \times 0.5\text{ m}) + (30\text{ N} \times 0.2\text{ m}) = 10\text{ N m} + 6\text{ N m} = 16\text{ N m}$ (anticlockwise).
   Right moment: $40\text{ N} \times 0.5\text{ m} = 20\text{ N m}$ (clockwise).
   $\text{Net Moment} = 20\text{ N m} - 16\text{ N m} = \mathbf{4\text{ N m}\text{ clockwise}}$.
   Consequently, the **right side tilts downward**.

10. (a) **False** ❌. Moment is measured in newton meters ($\text{N m}$); newton is the unit of force.
    (b) **True** ✅. In a Class 3 lever, the effort arm is always shorter than the load arm, so $\text{MA} = e / l < 1$.
    (c) **False** ❌. Rotational equilibrium requires equality of opposing *moments* ($L \times l = E \times e$), not equality of forces.
    (d) **True** ✅. Because $\text{MA} = e / l$, increasing the effort arm $e$ directly increases $\text{MA}$.
    (e) **False** ❌. The lever arm is strictly the perpendicular distance from the pivot to the line of action of the force.

11. $\text{Moment} = 50\text{ N} \times 0.2\text{ m} = 10\text{ N m}$.
    At $40\text{ cm} = 0.4\text{ m}$: $F \times 0.4\text{ m} = 10\text{ N m} \Longrightarrow F = \frac{10\text{ N m}}{0.4\text{ m}} = \mathbf{25\text{ N}}$.
    A longer spanner increases the effort arm, allowing the user to generate the identical turning torque using significantly less muscular force.
    *Check:* $25 \times 0.4 = 10\text{ N m}$ ✅.

---

Whenever you observe balanced systems or use tools like pliers or crowbars, remember Maya's insight: rotational equilibrium is fundamentally determined by the product of force and distance.

**What's next?** A lever uses a rigid pivoted beam. What happens when we replace the rigid beam with a continuous flexible cable wrapped around a rotating grooved wheel? In Topic 4, we explore the **pulley**, from simple flagpole guides to multi-cable **block-and-tackle** systems.
