# Chapter: Machines (Part 4)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [machines-part3.md](machines-part3.md)** (which established levers, the moment of force, and the principle of moments). Foundational definitions of machines are in [machines.md](machines.md), and the complete mathematical framework for MA, VR, and efficiency is in [machines-part2.md](machines-part2.md).
> **Topics covered in this file:**
> 4. Pulley

---

# Topic 4: Pulley

In the preceding topic, we studied the lever: a rigid beam pivoting on a fixed fulcrum, utilizing moments to multiply force or displacement. Now, we explore a completely different mechanical architecture: replacing the rigid bar and pivot with a rotating **grooved wheel** supporting a flexible **rope or cable**.

This machine is the **pulley**. Pulleys are ubiquitous in the modern world, found in everything from water wells and flagpoles to theatrical stage rigging and massive construction cranes. The fundamental metrics from Topic 2—**Mechanical Advantage (MA)**, **Velocity Ratio (VR)**, and **Efficiency ($\eta$)**—apply directly here.

**Throughout this topic, $g = 10\text{ m/s}^2$**, meaning a mass of $1\text{ kg}$ has a gravitational weight of $10\text{ N}$.

---

## The School Flag Ceremony

On an autumn morning, students gathered on the central courtyard for the annual sports assembly. The athletics coach, Mr. Sterling, called over Liam, a Class 9 student. "Liam, could you assist me in raising the school banner to the top of the flagpole?"

At the base of the tall pole hung a continuous braided nylon halyard. Mr. Sterling secured the banner grommets to the cord and handed the free loop to Liam. "Now, pull **downward** on this line," he instructed. Liam pulled downward hand over hand, and the banner glided smoothly **upward** toward the top of the pole, where a small brass wheel was mounted on a bracket.

Watching the banner reach the top, Liam paused thoughtfully. "Mr. Sterling, if the banner needed to travel upward, why did I have to pull downward? And why is that small wheel mounted at the top? Did it reduce the force needed to lift the cloth?"

Mr. Sterling smiled. "That small grooved wheel is a pulley, Liam. On this flagpole, it did not reduce the effort required at all. In fact, due to axle friction, you pulled with slightly more force than the banner's actual weight! Yet pulling downward was vastly more convenient than climbing up or pulling upward from above. Later this afternoon, when we hoist the heavy $300\text{-newton}$ sound-system speaker onto the stage lighting truss, we will configure pulleys in a completely different way—and then you will see how pulleys can cut the required lifting effort in half."

Let us analyze the mechanics of pulleys to understand both systems.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Pulley** | A metallic or wooden wheel with a grooved rim that rotates freely on an axle mounted in a fixed or movable frame | Flagpole crown wheel, crane sheave |
| **Fixed Pulley** | A pulley whose axle housing (block) is anchored to an immovable support | Pulley fixed to the top of a flagpole |
| **Movable Pulley** | A pulley whose axle housing moves along with the load | Pulley hooked directly to a heavy speaker |
| **Block** | A rigid structural frame housing one or more pulley wheels (sheaves) | Overhead fixed block, lower traveling block |
| **Tackle** | The continuous line or rope reeved through a combination of pulley blocks | Steel wire rope on a maritime crane |
| **Block and Tackle** | A system combining fixed and movable pulley blocks threaded with a single continuous rope | Industrial hoists, sailboat halyard winches |
| **Supporting Rope Segment** | A straight segment of rope that directly carries or shares the weight of the movable block and load | The twin upward cords supporting a movable pulley |
| **Load ($L$ or $W$)** | The gravitational weight or resistance to be hoisted | The banner, the stage speaker |
| **Effort ($E$ or $F$)** | The muscular pulling force applied to the free end of the rope | Liam's hands pulling the haul line |

---

## Part A: What is a Pulley?

A **pulley** consists of a disc-shaped wheel (termed a *sheave*) possessing a recessed **groove along its outer circumference** to prevent the rope, cable, or chain from slipping off. The wheel rotates freely about a central shaft called an **axle**, supported within a protective framework called a **block**.

When a flexible rope passes smoothly over the grooved rim, it transmits mechanical **tension ($T$)**. In an ideal (frictionless and weightless) rope, tension remains uniform throughout its entire length: every segment experiences the identical tensile force.

Pulleys are deployed in four primary configurations:
1. Single fixed pulley
2. Single movable pulley
3. Combination of fixed and movable pulleys
4. Block-and-tackle system

Let us examine each configuration systematically.

---

## Part B: Single Fixed Pulley

A **single fixed pulley** has its axle framework securely anchored to a permanent, stationary structure, such as a flagpole crown, ceiling girder, or scaffolding beam. The load is suspended from one end of the rope, while the input effort is applied at the opposite end.

```
      ══════════════════════  Rigid Support (ceiling or pole crown)
               ║
            ╭──┴──╮
      ┌─────┤  ○  ├─────┐
      ║     ╰─────╯     ║
      ║                 ║
      ║                 ║
   Effort F ↓        [ LOAD W ] ↑
```

> **Figure 4.1** – A single fixed pulley: Pulling downward on the effort line causes the load to rise. The pulley wheel rotates in place on its fixed overhead axle.

### What a Fixed Pulley Does (and Does Not Do)

- The downward gravitational load $W$ is held directly by the tension $T$ in the load segment ($W = T$).
- The operator applies effort $F$ to maintain that same tension ($F = T$). In an ideal, frictionless scenario:
  $$F = W$$
- Therefore, the **ideal Mechanical Advantage** is:
  $$\text{MA} = \frac{W}{F} = \frac{W}{W} = \mathbf{1}$$
- When the load ascends by a vertical displacement $d_L$, exactly the same length of rope must be drawn down at the effort end ($d_E = d_L$). Therefore, the **Velocity Ratio** is:
  $$\text{VR} = \frac{d_E}{d_L} = \mathbf{1}$$

A single fixed pulley does **not multiply force**. Its sole function is to **change the direction of the applied force**.

This directional change offers immense ergonomic and mechanical benefits:
- Pulling **downward** allows a person to utilize their own body weight against gravity, leaning into the pull rather than fighting it.
- Pulling downward eliminates the physical hazards and awkwardness of lifting a heavy mass directly overhead while standing on a ladder.

This answers Liam's first question: the flagpole pulley allowed him to stand securely on the ground and pull downward comfortably, rather than attempting to hoist the banner while climbing the pole.

### The Effect of Friction in a Real Fixed Pulley

In a real physical pulley, axle friction and rope stiffness resist rotation. To raise a load $W$, the applied effort must overcome both the load and internal resistance, meaning $F > W$. Consequently:

$$\text{Real MA} = \frac{W}{F} < 1$$

The real mechanical advantage of a single fixed pulley is always **strictly less than 1**. Its operational efficiency is:
$$\eta = \frac{\text{MA}}{\text{VR}} \times 100\% = \frac{\text{MA}}{1} \times 100\% < 100\%$$

---

## Part C: Single Movable Pulley

In a **single movable pulley**, the pulley block is not anchored to a stationary ceiling; instead, it is hooked directly to the load and moves vertically alongside it. One end of the rope is anchored to a stationary overhead beam, the rope loops beneath the movable pulley, and the free end is pulled upward by the operator.

```
     ═════════╗               Effort F ↑
    (Support) ║ ①                      ║ ②
              ║                        ║
              ║                        ║
              ╰─────────( ○ )──────────╯  <- Movable pulley
                          ║
                      [ LOAD W ]
```

> **Figure 4.2** – Single movable pulley: The load $W$ is supported by **two vertical rope segments** (labeled ① and ②).

### Two Supporting Segments Halve the Required Force

Observe that two distinct strands of rope pull upward on the movable pulley: the fixed anchor strand (①) and the operator's haul strand (②).

Because a continuous rope maintains uniform tension $T$ throughout, both strands pull upward with force $T$. For vertical equilibrium:
$$2 \times T = W \quad \Longrightarrow \quad T = \frac{W}{2}$$

The operator grips strand ②, exerting an effort $F = T$. In an ideal (frictionless, weightless pulley) scenario:
$$F = \frac{W}{2}$$

Therefore, the **ideal Mechanical Advantage** is:
$$\text{MA} = \frac{W}{F} = \frac{W}{W/2} = \mathbf{2}$$

> **Core Principle:** Two vertical rope segments share the load equally, so each segment supports exactly $\frac{\text{Load}}{2}$.

### The Distance Penalty (VR = 2)

If the load rises by $1\text{ meter}$, the movable pulley ascends by $1\text{ meter}$. To shorten the supportive loop by $1\text{ meter}$ on both sides, $1\text{ meter}$ of slack must be removed from strand ① and $1\text{ meter}$ from strand ②.

However, strand ① is rigidly anchored to the ceiling and cannot feed any slack. Consequently, **the entire $2\text{ meters}$ of rope must be pulled through the operator's end (strand ②)**!
$$d_E = 2 \times d_L$$

Therefore, the **Velocity Ratio** is:
$$\text{VR} = \frac{d_E}{d_L} = \frac{2\text{ m}}{1\text{ m}} = \mathbf{2}$$

In an ideal movable pulley, $\text{MA} = \text{VR} = 2$. The machine cuts the required muscular effort in half, but demands that the effort pull through **twice the distance**—embodying our universal conservation principle: we save force, not work.

### Real Movable Pulley Behavior

In practice, two non-ideal factors reduce performance:
1. **The physical weight of the movable pulley block ($w$):** The twin rope segments must lift the load *plus* the pulley housing itself ($2T = W + w$).
2. **Axle friction and rope stiffness.**

Both factors demand an effort larger than $W/2$, ensuring that for any real movable pulley:
$$\text{Real MA} < 2 \quad \text{and} \quad \eta < 100\%$$

---

## Part D: Combination of Fixed and Movable Pulleys

A single movable pulley provides an ideal $\text{MA} = 2$, but suffers from a significant practical drawback: the effort must be pulled **upward**. Pulling upward is awkward, unstable, and prevents the operator from using their body weight.

The engineering solution is straightforward: pass the rope around an overhead **fixed pulley**, allowing the operator to pull **downward** while preserving the force-halving advantage of the movable pulley!

```
     ═════╦═══════════════╦════════   Overhead Support
          ║               ║
          ║             ( A )           A = Fixed Pulley (redirects line)
          ║             ║   ║
          ║ ①         ② ║   ║ ③
          ║             ║   ▼ Effort F (pulled downward)
          ║             ║
          ╰─────( B )───╯
                  ║
             [ LOAD W ]                 B = Movable Pulley (carries load)
```

> **Figure 4.3** – Combination of a fixed pulley (A) and a movable pulley (B). The load is suspended from movable pulley B, supported by two rope segments (① and ②). Strand ③ passes over fixed pulley A and is pulled downward. Strand ③ does not support pulley B and is not counted among the load-supporting segments.

In this unified system:
- Strands ① and ② directly support movable pulley B: **Number of supporting segments $n = 2$**.
- Strand ③ merely leads to the operator's hands from a fixed pulley; it does not pull directly on the load. Therefore, **strand ③ is not counted as a supporting segment**.
- **Ideal $\text{MA} = 2$** and **$\text{VR} = 2$**.

This system delivers the best of both worlds: **double the lifting force ($\text{MA} = 2$)** combined with a **convenient downward pulling direction**.

---

## Part E: Block and Tackle System

When loads are exceptionally heavy—such as industrial engines, construction materials, or structural steel—two pulleys are insufficient. Engineers assemble multiple pulleys into an integrated **block and tackle** system.

A block and tackle consists of:
- A **fixed upper block** housing one or more pulley sheaves anchored to a stationary support.
- A **movable lower block** housing one or more sheaves carrying the load hook.
- A **single continuous rope (tackle)** reeved back and forth between the fixed and movable sheaves.

```
   ═══════════════╦═══════════════   Overhead Support
            ╔═════╩═════════╗
            ║   ○     ○     ║   Upper Fixed Block: 2 sheaves
            ╚═╤══╤══╤══╤══╤═╝
              ║  ║  ║  ║  ║
              ①  ②  ③  ④  ║     <- 4 load-supporting rope segments
              ║  ║  ║  ║  ▼ Effort F (pulled downward from fixed block)
            ╔═╧══╧══╧══╧═╗
            ║  ○     ○   ║      Lower Movable Block: 2 sheaves
            ╚═════╦══════╝
                  ║
              [ LOAD W ]
```

> **Figure 4.4** – A block and tackle with four load-supporting strands ($n = 4$). The four vertical rope strands (① to ④) pull upward on the lower movable block. The haul strand pulled downward by effort $F$ exits the upper fixed block and is not added to $n$.

### Principle

> **"If $n$ rope segments directly support the movable block and load, the total load is shared equally among them, so each segment carries only $\frac{\text{Load}}{n}$."**

For an ideal block-and-tackle system:
$$F = \frac{W}{n}$$
$$\mathbf{\text{Ideal MA} = n} \quad \text{and} \quad \mathbf{\text{VR} = n}$$

where **$n$ is the total number of rope segments directly supporting the movable block**.

- To raise the load by $1\text{ meter}$, every one of the $n$ supporting strands must be shortened by $1\text{ meter}$. Therefore, the effort end must take in a cumulative rope length of $n \times 1\text{ m}$:
  $$d_E = n \times d_L \quad \Longrightarrow \quad \text{VR} = n$$
- For $n = 3$, ideal $\text{MA} = 3$ and $\text{VR} = 3$.
- For $n = 4$, ideal $\text{MA} = 4$ and $\text{VR} = 4$.
- For $n = 5$, ideal $\text{MA} = 5$ and $\text{VR} = 5$.

**How to Count Supporting Strands ($n$) Without Error:**
Apply this strict rule: **Count only the rope segments that pull directly on the movable block.**
1. If the effort strand leaves the **upper fixed block** pulling **downward** (as in Figures 4.3 and 4.4), do **not** count it. It does not exert an upward lift on the load.
2. If the effort strand leaves the **lower movable block** pulling **upward** (as in Figure 4.2), you **must** count it, because your upward pull directly assists in lifting the movable block.

---

## Part F: Four Pulley Configurations Compared

| Configuration | Pulling Direction | Ideal MA | Velocity Ratio (VR) | Mechanical Function |
|---|---|---|---|---|
| **Single Fixed Pulley** | Downward | $1$ | $1$ | Changes direction of force |
| **Single Movable Pulley** | Upward | $2$ | $2$ | Force multiplier |
| **Fixed + Movable Combination** | Downward | $2$ | $2$ | Force multiplier with convenient downward pull |
| **Block and Tackle ($n$ strands)** | Usually downward | $n$ | $n$ | Powerful force multiplier |

In every practical system, internal axle friction and the weight of the movable block ensure that **$\text{Real MA} < \text{VR}$**, governed by $\eta = (\text{MA} / \text{VR}) \times 100\%$.

---

## Part G: Solved Examples

**Example 1 (Ideal Single Fixed Pulley):** An ideal single fixed pulley is used to hoist a bucket of mortar weighing $200\text{ N}$. Calculate the effort required and the mechanical advantage.

- For an ideal fixed pulley, $F = W$:
  $$F = \mathbf{200\text{ N}}$$
- $\text{MA} = \frac{W}{F} = \frac{200\text{ N}}{200\text{ N}} = \mathbf{1}$

*Check:* For an ideal fixed pulley, $\text{MA} = \text{VR} = 1$ ✅.

**Example 2 (Real Fixed Pulley with Friction):** Due to axle friction, raising a $200\text{ N}$ load with a real fixed pulley requires an effort of $250\text{ N}$. Determine the mechanical advantage and efficiency.

- $\text{MA} = \frac{W}{F} = \frac{200\text{ N}}{250\text{ N}} = \mathbf{0.8}$
- $\text{VR} = 1$ (fixed pulley)
- $\eta = \frac{\text{MA}}{\text{VR}} \times 100\% = \frac{0.8}{1} \times 100\% = \mathbf{80\%}$

*Check:* $\text{MA} = 0.8 < 1$, consistent with real fixed pulley mechanics ✅.

**Example 3 (Ideal Single Movable Pulley):** An ideal single movable pulley is used to lift a $400\text{ N}$ engine component. What effort must be applied?

- Ideal $\text{MA} = 2 \Longrightarrow F = \frac{W}{2}$:
  $$F = \frac{400\text{ N}}{2} = \mathbf{200\text{ N}}$$

*Check:* $\text{MA} = \frac{400}{200} = 2 = \text{VR}$ ✅.

**Example 4 (Effort Travel in a Movable Pulley):** Using a single movable pulley, a crate must be hoisted through a vertical height of $1.5\text{ m}$. What length of rope must the operator pull?

- $\text{VR} = 2 \Longrightarrow d_E = \text{VR} \times d_L$:
  $$d_E = 2 \times 1.5\text{ m} = \mathbf{3\text{ m}}$$

*Check:* $\text{VR} = \frac{3\text{ m}}{1.5\text{ m}} = 2$ ✅.

**Example 5 (Accounting for the Movable Pulley's Own Weight):** A load of $400\text{ N}$ is hoisted using a single movable pulley whose own frame and wheel weigh $20\text{ N}$. Assuming axle friction is negligible, calculate the required effort, the actual mechanical advantage, and the efficiency.

- The two supporting rope strands must lift both the load and the pulley block:
  $$\text{Total Load} = W + w = 400\text{ N} + 20\text{ N} = 420\text{ N}$$
- Two strands share this total:
  $$F = \frac{420\text{ N}}{2} = \mathbf{210\text{ N}}$$
- This is $10\text{ N}$ higher than the ideal $200\text{ N}$ found in Example 3.
- $\text{Actual MA} = \frac{\text{Useful Load}}{F} = \frac{400\text{ N}}{210\text{ N}} \approx \mathbf{1.90}$
- $\eta = \frac{\text{MA}}{\text{VR}} \times 100\% = \frac{1.905}{2} \times 100\% = \mathbf{95.2\%}$

*Check:* $210\text{ N} \times 2 = 420\text{ N}$ total upward lift ✅. $\text{MA} < 2$ as expected for a real physical pulley ✅.

**Example 6 (Ideal Block and Tackle, n = 4):** An ideal block-and-tackle system has four rope segments supporting the movable block. It is used to raise an $800\text{ N}$ safe. Find the required effort and the mechanical advantage.

- Ideal $\text{MA} = n = 4$.
- $F = \frac{W}{n} = \frac{800\text{ N}}{4} = \mathbf{200\text{ N}}$
- $\text{MA} = \frac{800\text{ N}}{200\text{ N}} = \mathbf{4}$

*Check:* $200\text{ N} \times 4 = 800\text{ N}$ ✅.

**Example 7 (Deducing the Number of Supporting Strands):** An ideal block and tackle enables an operator to raise a $900\text{ N}$ steel beam with an effort of $300\text{ N}$. How many rope segments support the movable block?

- $n = \text{Ideal MA} = \frac{W}{F} = \frac{900\text{ N}}{300\text{ N}} = \mathbf{3\text{ segments}}$

*Check:* $900\text{ N} / 3 = 300\text{ N}$ ✅.

**Example 8 (Real Effort in a Block and Tackle at 80% Efficiency):** The block and tackle from Example 6 ($n = 4$, $\text{VR} = 4$) operates at an efficiency of $80\%$. What real effort is required to raise the $800\text{ N}$ safe?

- $\text{MA} = \frac{\eta}{100\%} \times \text{VR} = 0.80 \times 4 = \mathbf{3.2}$
- $F = \frac{W}{\text{MA}} = \frac{800\text{ N}}{3.2} = \mathbf{250\text{ N}}$

*Check:* $250\text{ N} \times 3.2 = 800\text{ N}$ ✅. The real effort of $250\text{ N}$ is $50\text{ N}$ higher than the ideal $200\text{ N}$ due to friction and pulley weight ✅.

**Example 9 (Work Analysis of an Ideal vs. Real Movable Pulley):** A movable pulley ($\text{VR} = 2$) lifts a $400\text{ N}$ load through $1\text{ m}$, requiring the effort cord to move through $2\text{ m}$. Analyze work and efficiency when: (a) the pulley is ideal ($F = 200\text{ N}$), and (b) the pulley is real ($F = 220\text{ N}$).

- $\text{Work Output} = W \times d_L = 400\text{ N} \times 1\text{ m} = \mathbf{400\text{ J}}$

**(a) Ideal Scenario:**
- $\text{Work Input} = F \times d_E = 200\text{ N} \times 2\text{ m} = \mathbf{400\text{ J}}$
- $\eta = \frac{400\text{ J}}{400\text{ J}} \times 100\% = \mathbf{100\%}$

**(b) Real Scenario:**
- $\text{Work Input} = F \times d_E = 220\text{ N} \times 2\text{ m} = \mathbf{440\text{ J}}$
- $\eta = \frac{400\text{ J}}{440\text{ J}} \times 100\% \approx \mathbf{90.9\%}$
- $\text{Energy Dissipated} = 440\text{ J} - 400\text{ J} = \mathbf{40\text{ J}}$ (converted to heat by friction and used to hoist pulley weight).

*Check:* $\text{MA} = \frac{400}{220} \approx 1.818$; $\eta = \frac{1.818}{2} \times 100\% = 90.9\%$ ✅. Both methods match.

**Example 10 (Calculating Efficiency from Empirical Test Data):** In a laboratory experiment, a block and tackle hoists a $600\text{ N}$ load through $0.5\text{ m}$. The applied effort is measured at $250\text{ N}$, and the effort cord travels through $1.5\text{ m}$. Calculate the mechanical advantage, velocity ratio, and efficiency.

- $\text{Work Output} = 600\text{ N} \times 0.5\text{ m} = \mathbf{300\text{ J}}$
- $\text{Work Input} = 250\text{ N} \times 1.5\text{ m} = \mathbf{375\text{ J}}$
- $\eta = \frac{300\text{ J}}{375\text{ J}} \times 100\% = \mathbf{80\%}$
- $\text{MA} = \frac{600\text{ N}}{250\text{ N}} = \mathbf{2.4}$
- $\text{VR} = \frac{d_E}{d_L} = \frac{1.5\text{ m}}{0.5\text{ m}} = \mathbf{3}$
- Cross-check: $\eta = \frac{2.4}{3} \times 100\% = 80\%$ ✅. The $\text{VR} = 3$ indicates this is an $n = 3$ block-and-tackle system.

**Example 11 (Reaction Force on the Overhead Support):** A load of $400\text{ N}$ hangs from an ideal single movable pulley (Figure 4.2), held in equilibrium by an effort of $200\text{ N}$. What vertical force does the anchored rope strand exert on the overhead ceiling hook?

- Uniform rope tension throughout $= 200\text{ N}$.
- The anchored strand pulls downward on the ceiling anchor with a tension of **$200\text{ N}$**.
- The ceiling directly supports **half the load ($200\text{ N}$)**, while the operator's hands support the other half ($200\text{ N}$).
- Total upward support $= 200\text{ N} + 200\text{ N} = 400\text{ N} = \text{Load}$.

*Check:* $200\text{ N} + 200\text{ N} = 400\text{ N}$ ✅.

---

## Part H: Resolving the Opening Story with Numbers

Now let us examine the two scenarios from the sports assembly:

### 1. The Flagpole (Single Fixed Pulley)

The banner and halyard have a combined weight of $20\text{ N}$ and must be raised $6\text{ m}$. Because of sheave friction, Liam must pull with an effort of $25\text{ N}$.
- Effort displacement $= d_L (\text{since } \text{VR} = 1) = \mathbf{6\text{ m}}$
- $\text{MA} = \frac{20\text{ N}}{25\text{ N}} = \mathbf{0.8}$
- $\text{Work Input} = 25\text{ N} \times 6\text{ m} = \mathbf{150\text{ J}}$
- $\text{Work Output} = 20\text{ N} \times 6\text{ m} = \mathbf{120\text{ J}}$
- $\eta = \frac{120\text{ J}}{150\text{ J}} \times 100\% = \mathbf{80\%}$

*Check:* $\frac{\text{MA}}{\text{VR}} = \frac{0.8}{1} = 0.8 = 80\%$ ✅.

Liam noticed that his effort ($25\text{ N}$) exceeded the banner's weight ($20\text{ N}$). Mr. Sterling explained: "A fixed pulley does not save force; it only redirected your pull so you could comfortably pull downward from the ground."

### 2. The Stage Speaker (Fixed + Movable Double Pulley)

Later that afternoon, a heavy stage speaker weighing $300\text{ N}$ ($30\text{ kg}$) had to be hoisted $1.2\text{ m}$ to the lighting truss. Mr. Sterling rigged a double-pulley combination: one fixed pulley on the truss, and one movable pulley attached to the speaker (Figure 4.3). Two rope segments support the movable block, so $\text{VR} = 2$.

**Ideal Performance:**
- $F = \frac{W}{2} = \frac{300\text{ N}}{2} = \mathbf{150\text{ N}}$

**Real Performance (Efficiency = 88%):**
- $\text{MA} = \frac{\eta}{100\%} \times \text{VR} = 0.88 \times 2 = \mathbf{1.76}$
- $\text{Real Effort } F = \frac{W}{\text{MA}} = \frac{300\text{ N}}{1.76} \approx \mathbf{170\text{ N}}$
- $d_E = \text{VR} \times d_L = 2 \times 1.2\text{ m} = \mathbf{2.4\text{ m}}$
- $\text{Work Input} = 170\text{ N} \times 2.4\text{ m} = \mathbf{408\text{ J}}$
- $\text{Work Output} = 300\text{ N} \times 1.2\text{ m} = \mathbf{360\text{ J}}$
- $\eta = \frac{360\text{ J}}{408\text{ J}} \times 100\% \approx \mathbf{88.2\%}$

*Check:* $170\text{ N} \times 1.76 \approx 300\text{ N}$ ✅. The real effort ($170\text{ N}$) is slightly above the ideal ($150\text{ N}$), as expected ✅.

Liam pulled the rope downward smoothly and the massive speaker rose into the air. "For the banner, I had to pull with $25\text{ N}$ for a $20\text{-N}$ cloth," Liam observed. "Now, this $300\text{-N}$ speaker rose with only $170\text{ N}$ of pull! The fixed sheave gave us direction, and the movable sheave halved the effort!"

---

## Part I: Practical Engineering Applications of Pulleys

- **Water Wells:** A single fixed pulley mounted above the wellhead redirects the haul rope, allowing a person to draw water upward by pulling downward.
- **Flagpoles:** An overhead fixed sheave permits raising flags from the ground.
- **Heavy Construction Cranes:** Utilize multi-sheave block-and-tackle systems with $n = 4, 6,$ or $8$, enabling hydraulic winches to hoist multi-ton steel girders with manageable cable tensions.
- **Theater Stage Rigging and Curtain Tracks:** Employ cords and small pulleys to open heavy velvet curtains and fly scenery backdrops silently from the wings.
- **Passenger Elevators (Lifts):** Heavy steel cables run from the passenger car, over a motorized overhead drive sheave, to a heavy counterweight, balancing the load and minimizing the motor power required.
- **Sailing Ships and Modern Yachts:** Multi-sheave block and tackle rigs (mainsheet and halyard tackles) allow sailors to hoist large sails and trim sails against gale-force winds by hand.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Believing a single fixed pulley reduces effort**
   A single fixed pulley has an ideal $\text{MA} = 1$, and in reality $\text{MA} < 1$. It **never reduces the force required**. It merely changes the direction of the applied force to make pulling convenient.

2. **Mistake 2: Counting the downward haul line when determining n**
   In Figure 4.3 and Figure 4.4, the haul line leaves the overhead fixed block and is pulled downward. This segment does **not** pull upward on the load or movable block. Do not count it! Count **only the strands that pull directly on the movable block**.

3. **Mistake 3: Expecting a real pulley system to deliver ideal MA**
   An $n = 4$ block and tackle has an ideal $\text{MA} = 4$. However, at $80\%$ efficiency, its real $\text{MA}$ is only $3.2$. For an $800\text{-N}$ load, the real effort required is $250\text{ N}$, not $200\text{ N}$ (Example 8). Real $\text{MA}$ is invariably lower than ideal $\text{MA}$.

4. **Mistake 4: Forgetting that effort must travel n times farther**
   A movable pulley halves the force, but to lift the load $1.5\text{ m}$, you must pull $3\text{ m}$ of rope (Example 4). If you only pull $1.5\text{ m}$ of rope, the load rises a mere $0.75\text{ m}$. Force reduction is always paid for in travel distance.

5. **Mistake 5: Overlooking the physical weight of the movable pulley**
   In Example 5, hoisting a $400\text{-N}$ load with a $20\text{-N}$ movable pulley required $210\text{ N}$ of effort rather than $200\text{ N}$. The supporting ropes must lift the deadweight of the movable pulley block in addition to the payload.

---

## Quick Recap

- A **pulley** is a grooved wheel rotating on an axle within a block, carrying a rope or cable under tension.
- **Single Fixed Pulley:** Changes the **direction of force only**. Ideal $\text{MA} = 1$, $\text{VR} = 1$, $F = W$. In real pulleys with friction, $\text{Real MA} < 1$.
- **Single Movable Pulley:** The load is carried by **two supporting rope strands**. Ideal $\text{MA} = 2$, $\text{VR} = 2$, $F = W / 2$. Effort travels twice as far as the load ($d_E = 2 d_L$). In real systems, $\text{Real MA} < 2$ due to friction and the weight of the movable block.
- **Fixed + Movable Combination:** Yields an ideal $\text{MA} = 2$, while allowing the effort to be applied in a convenient **downward** direction.
- **Block and Tackle:** A system of fixed and movable blocks with $n$ supporting strands. Ideal $\text{MA} = n$, $\text{VR} = n$, and $F = W / n$.
- **Counting Rule:** $n$ is strictly the number of rope segments directly supporting the movable block.
- **Real Performance:** $\text{MA} = \frac{\eta}{100\%} \times \text{VR}$. For example, with $\text{VR} = 4$ and $\eta = 80\%$, $\text{MA} = 3.2$, requiring $250\text{ N}$ to lift an $800\text{-N}$ load.
- **Applications:** Well windlasses, flagpoles, stage rigging, commercial elevators, maritime sailboat rigging, and heavy construction cranes.

---

## Practice Questions

1. An ideal single fixed pulley is used to hoist a load of $350\text{ N}$.
   (a) What input effort is required?
   (b) What are its mechanical advantage and velocity ratio?

2. An ideal single movable pulley is used to raise a $600\text{ N}$ load through a vertical height of $2\text{ m}$. Determine:
   (a) The required effort.
   (b) The distance through which the effort must be pulled.

3. An ideal block-and-tackle system has $5$ rope segments supporting its movable block.
   (a) What effort is required to raise a load of $1000\text{ N}$?
   (b) If the system operates at an efficiency of $80\%$, what is its real mechanical advantage and the real effort needed for the same load?

4. A student claims, "A single fixed pulley makes lifting a load easier because it cuts the required force in half." Is the student correct? Explain what a fixed pulley actually does and why it remains practically useful.

5. A block and tackle hoists a $500\text{ N}$ load through $2\text{ m}$ using an effort of $160\text{ N}$. The effort rope travels through a distance of $8\text{ m}$. Calculate:
   (a) The work input supplied.
   (b) The useful work output delivered.
   (c) The mechanical advantage.
   (d) The velocity ratio.
   (e) The operational efficiency (to one decimal place).

6. An ideal block and tackle raises a $1200\text{ N}$ load using an effort of $300\text{ N}$. How many rope segments support the movable block? If the real effort measured under friction is $375\text{ N}$, determine the operational efficiency of the system.

7. A movable pulley block has a weight of $30\text{ N}$ and is used to lift a payload of $570\text{ N}$. Assuming axle friction is negligible, determine the effort required. Compare this with the effort that would be needed if the pulley block were weightless.

8. State whether each of the following statements is True or False:
   (a) The ideal mechanical advantage of a single fixed pulley is 2.
   (b) In a single movable pulley, the effort moves twice as far as the load.
   (c) A real physical machine can exhibit a mechanical advantage greater than its velocity ratio.
   (d) In a block and tackle, you count every segment of rope, including the one pulled downward from the top fixed block.

9. A fixed pulley and a movable pulley are combined (as illustrated in Figure 4.3) to lift a $240\text{ N}$ load through $1.5\text{ m}$. Neglecting friction and component weights, determine:
   (a) The required effort.
   (b) The distance the effort rope is pulled.
   (c) The direction of the applied effort.

10. Identify three engineering or everyday systems that utilize pulleys. For each, state whether the pulley configuration primarily serves to redirect force or to multiply force.

### Answers

1. (a) For an ideal fixed pulley: $F = W = \mathbf{350\text{ N}}$.
   (b) $\text{MA} = \frac{W}{F} = \frac{350\text{ N}}{350\text{ N}} = \mathbf{1}$; $\text{VR} = \mathbf{1}$.
   *Check:* For an ideal machine, $\text{MA} = \text{VR} = 1$ ✅.

2. (a) Ideal $\text{MA} = 2 \Longrightarrow F = \frac{W}{2} = \frac{600\text{ N}}{2} = \mathbf{300\text{ N}}$.
   (b) $\text{VR} = 2 \Longrightarrow d_E = \text{VR} \times d_L = 2 \times 2\text{ m} = \mathbf{4\text{ m}}$.
   *Check:* $\text{Work Input} = 300\text{ N} \times 4\text{ m} = 1200\text{ J} = 600\text{ N} \times 2\text{ m} = \text{Work Output}$ ✅.

3. (a) $n = 5 \Longrightarrow F = \frac{W}{n} = \frac{1000\text{ N}}{5} = \mathbf{200\text{ N}}$.
   (b) $\text{Real MA} = \frac{\eta}{100\%} \times \text{VR} = 0.80 \times 5 = \mathbf{4}$.
   $\text{Real Effort} = \frac{W}{\text{Real MA}} = \frac{1000\text{ N}}{4} = \mathbf{250\text{ N}}$.
   *Check:* $250\text{ N} \times 4 = 1000\text{ N}$ ✅.

4. The student is **incorrect**. A single fixed pulley does **not reduce the required force** (its ideal $\text{MA} = 1$, so $F = W$, and due to friction, real $F > W$). It merely **redirects the applied force**, allowing the operator to pull downward rather than hoisting upward. This is practically advantageous because the operator can use their body weight to assist the pull and work from a safe position on the ground.

5. (a) $\text{Work Input} = E \times d_E = 160\text{ N} \times 8\text{ m} = \mathbf{1280\text{ J}}$.
   (b) $\text{Work Output} = L \times d_L = 500\text{ N} \times 2\text{ m} = \mathbf{1000\text{ J}}$.
   (c) $\text{MA} = \frac{L}{E} = \frac{500\text{ N}}{160\text{ N}} = \mathbf{3.125}$.
   (d) $\text{VR} = \frac{d_E}{d_L} = \frac{8\text{ m}}{2\text{ m}} = \mathbf{4}$.
   (e) $\eta = \frac{1000\text{ J}}{1280\text{ J}} \times 100\% \approx \mathbf{78.1\%}$.
   *Check:* $\frac{\text{MA}}{\text{VR}} = \frac{3.125}{4} = 0.78125 = 78.1\%$ ✅.

6. $n = \frac{W}{F_{\text{ideal}}} = \frac{1200\text{ N}}{300\text{ N}} = \mathbf{4\text{ supporting segments}}$.
   $\text{VR} = n = 4$.
   $\text{Real MA} = \frac{W}{F_{\text{real}}} = \frac{1200\text{ N}}{375\text{ N}} = 3.2$.
   $\eta = \frac{\text{MA}}{\text{VR}} \times 100\% = \frac{3.2}{4} \times 100\% = \mathbf{80\%}$.
   *Check:* $0.80 \times 4 = 3.2$, and $\frac{1200}{3.2} = 375\text{ N}$ ✅.

7. Accounting for the pulley's weight:
   $\text{Total Load} = 570\text{ N} + 30\text{ N} = 600\text{ N}$.
   $F = \frac{600\text{ N}}{2} = \mathbf{300\text{ N}}$.
   If the pulley were weightless:
   $F = \frac{570\text{ N}}{2} = \mathbf{285\text{ N}}$.
   Accounting for the pulley's weight requires **$15\text{ N}$ of additional effort**.
   *Check:* $300\text{ N} \times 2 = 600\text{ N}$ and $285\text{ N} \times 2 = 570\text{ N}$ ✅.

8. (a) **False** ❌. The ideal $\text{MA}$ of a single fixed pulley is 1.
   (b) **True** ✅. Because $\text{VR} = 2$, $d_E = 2 \times d_L$.
   (c) **False** ❌. In any real machine, $\text{MA} < \text{VR}$ because efficiency is strictly less than $100\%$.
   (d) **False** ❌. You count only the strands pulling directly on the movable block; a downward haul strand from an upper fixed sheave is excluded.

9. (a) $n = 2 \Longrightarrow F = \frac{240\text{ N}}{2} = \mathbf{120\text{ N}}$.
   (b) $d_E = 2 \times 1.5\text{ m} = \mathbf{3\text{ m}}$.
   (c) The effort is directed **downward** because the cord passes over the fixed upper pulley.
   *Check:* $\text{Work Input} = 120\text{ N} \times 3\text{ m} = 360\text{ J} = 240\text{ N} \times 1.5\text{ m} = \text{Work Output}$ ✅.

10. Representative examples:
    - **Flagpole:** Single fixed pulley $\rightarrow$ primarily **redirects force** (pull down to raise flag).
    - **Construction Crane:** Multi-sheave block and tackle $\rightarrow$ primarily **multiplies force** to lift heavy steel beams.
    - **Passenger Elevator:** Drive sheave with counterweight $\rightarrow$ primarily **redirects force and balances load**.
    - **Sailboat Rigging:** Block and tackle on mainsheet $\rightarrow$ primarily **multiplies force** to control sails against wind pressure.

---

Equipped with these insights, you can analyze any cable lifting system just as Liam did: count the supporting strands to determine velocity ratio, calculate the ideal force required, and account for friction and block deadweight to find real performance.

**What's next?** Levers and pulleys are only part of the simple machine family. How do workers load heavy barrels onto trucks without hoisting them vertically? How does an axe split hardwood, or a car jack raise a vehicle? In Topic 5, we explore the **inclined plane**, **wedge**, **screw**, and **wheel-and-axle**.
