# Chapter: Machines (Part 2)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [machines.md](machines.md)** (which established the definition of a machine, effort and load, force multipliers, speed multipliers, and direction-changing devices). For foundational work and joule concepts, refer to [work-energy-and-power.md](../work-energy-and-power/work-energy-and-power.md); for thermal energy dissipation via friction, see [work-energy-and-power-part6.md](../work-energy-and-power/work-energy-and-power-part6.md).
> **Topics covered in this file:**
> 2. Mechanical Advantage, Velocity Ratio, and Efficiency

---

# Topic 2: Mechanical Advantage, Velocity Ratio, and Efficiency

In Topic 1, we learned that a **machine** is a mechanical device that transforms the magnitude or direction of an applied force, or alters the speed of motion. We introduced **effort** (the input force we apply) and **load** (the opposing resistance overcome), and categorized tools into force multipliers, speed multipliers, and direction changers.

However, an essential scientific question remains: **how do we quantify the exact assistance a machine provides?** How can we objectively evaluate whether one machine outperforms another? In this topic, we will define three fundamental numerical indicators that describe every machine's performance: **Mechanical Advantage (MA)**, **Velocity Ratio (VR)**, and **Efficiency ($\eta$)**.

**Throughout this topic, the acceleration due to gravity is taken as $g = 10\text{ m/s}^2$.** All forces are expressed strictly in standard SI units of newtons ($\text{N}$). (Note: While commercial trades occasionally refer to loads in kilogram-force, where $1\text{ kgf} \approx 10\text{ N}$, we adhere rigorously to newtons throughout.)

---

## At the Highway Tire Shop with Mr. Sterling and Leo

On a weekend road trip, Leo and his father experienced a sudden tire puncture along the highway and pulled into a repair station where Mr. Sterling was assisting as the master technician. The vehicle was a fully laden utility van with a total weight exceeding twenty thousand newtons. Leo wondered how a single person could possibly hoist such an immense weight without a commercial hydraulic crane.

Mr. Sterling slid a compact steel **screw jack** beneath the chassis reinforced lifting point. He inserted a long steel crank handle and began turning it smoothly in a circle: one full rotation, two rotations, ten rotations, and more. Watching closely, Leo noticed that Mr. Sterling's hands met only modest resistance as they traced wide circular loops, yet the massive van lifted upward only a tiny fraction of a millimeter per revolution. After dozens of steady turns, the flat tire finally cleared the pavement by a few centimeters.

Leo asked curiously, "Mr. Sterling, you turned that crank through meters of circular distance, yet the van barely rose a few centimeters! Why must your hands travel so far for such a small vertical rise?"

Mr. Sterling smiled. "That extensive travel is the very secret of the machine, Leo. My bare arms cannot generate twenty thousand newtons of direct vertical thrust. But by extending the circular path traveled by my hands, the required **effort drops dramatically**. Whatever force we save in muscular exertion, we repay by moving through a proportionately longer distance. That is the fundamental compromise of physics: **a massive load overcome by a modest effort, compensated by a long effort travel distance.**"

"Can we calculate the exact force we save and the exact distance we trade?" Leo asked.

"Certainly," replied Mr. Sterling. "Every machine is governed by three precise numbers: one for force, one for distance, and a third that reveals how much energy is conserved versus lost to friction."

Let us derive these governing numbers and apply them to Mr. Sterling's screw jack.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Mechanical Advantage (MA)** | The ratio of the load overcome to the effort applied ($\text{Load} \div \text{Effort}$). Indicates the factor by which force is multiplied | Lifting a $2000\text{ N}$ load with $100\text{ N}$ effort yields $\text{MA} = 20$ |
| **Velocity Ratio (VR)** | The ratio of the displacement of effort to the displacement of load ($\text{Distance traveled by effort} \div \text{Distance moved by load}$) | Effort moves $12\text{ m}$ while load rises $0.5\text{ m}$: $\text{VR} = 24$ |
| **Efficiency ($\eta$)** | The ratio of useful work output delivered to the total work input supplied, expressed as a percentage | Supplying $1200\text{ J}$ to deliver $1000\text{ J}$: $\eta = 83.3\%$ |
| **Work Input** | The mechanical work performed on the machine by the effort ($\text{Effort} \times \text{Distance moved by effort}$) | $100\text{ N} \times 12\text{ m} = 1200\text{ J}$ |
| **Work Output** | The useful mechanical work performed by the machine on the load ($\text{Load} \times \text{Distance moved by load}$) | $2000\text{ N} \times 0.5\text{ m} = 1000\text{ J}$ |
| **Ideal Machine** | A theoretical, frictionless machine with weightless operational parts where no energy is dissipated | $\text{MA} = \text{VR}$ and $\eta = 100\%$ |
| **Real Machine** | A practical physical machine subject to internal friction and structural weight | $\text{MA} < \text{VR}$ and $\eta < 100\%$ |

---

## Part A: Mechanical Advantage (MA): Multiplying Force

The primary function of many machines is force amplification. To express this magnification factor quantitatively, we compare the load to the effort:

> $$\text{Mechanical Advantage (MA)} = \frac{\text{Load}}{\text{Effort}} = \frac{L}{E}$$

Because Mechanical Advantage is a ratio of two identical physical quantities ($\text{newtons} \div \text{newtons}$), the units cancel out completely. Consequently, **$\text{MA}$ is a pure dimensionless number with no units.**

- If an applied effort of $100\text{ N}$ successfully lifts a load of $2000\text{ N}$:
  $$\text{MA} = \frac{2000\text{ N}}{100\text{ N}} = 20$$
  This indicates that the machine magnifies the operator's muscular force by a factor of $20$.

The numerical magnitude of $\text{MA}$ defines the operational nature of the machine:

| Value of $\text{MA}$ | Physical Consequence | Mechanical Classification (from Topic 1) |
|---|---|---|
| **$\text{MA} > 1$** | $\text{Load} > \text{Effort}$: A small force overcomes a heavy load | **Force Multiplier** |
| **$\text{MA} = 1$** | $\text{Load} = \text{Effort}$: No force amplification; changes direction | **Direction Changer** |
| **$\text{MA} < 1$** | $\text{Load} < \text{Effort}$: Effort exceeds load; magnifies speed/displacement | **Speed Multiplier** |

*Crucial Note:* Mechanical Advantage describes **force relationships only**. It contains no information regarding the distances moved.

---

## Part B: Velocity Ratio (VR): The Distance Trade-Off

To address Leo's observation regarding why the crank handle must travel so far, we introduce the geometric parameter known as the **Velocity Ratio**:

> $$\text{Velocity Ratio (VR)} = \frac{\text{Distance moved by Effort}}{\text{Distance moved by Load}} = \frac{d_E}{d_L}$$

*(Note on Nomenclature: Since both displacements occur during the identical time interval $t$, $\text{VR} = \frac{d_E / t}{d_L / t} = \frac{v_E}{v_L}$, which gives the ratio its historical name "velocity ratio".)*

Because $\text{VR}$ is a ratio of two distances ($\text{meters} \div \text{meters}$), **$\text{VR}$ is also a dimensionless ratio with no units.** Both displacements must be evaluated in the **same unit of measurement** (both in meters or both in centimeters).

- If the effort crank traverses a cumulative circular distance of $12\text{ m}$ while the vehicle chassis rises vertically by $0.5\text{ m}$:
  $$\text{VR} = \frac{12\text{ m}}{0.5\text{ m}} = 24$$

A velocity ratio of $\text{VR} = 24$ means that to elevate the load by $1\text{ meter}$, the operator's hands must traverse an input path of $24\text{ meters}$.

The geometric action of the screw jack is shown schematically below:

```
        ┌───────────────────────┐
        │     VAN  (load L)     │   ↑ Vertical lift of van: very small (dL)
        └───────────┬───────────┘
                    │
                  ┌─┴─┐
                  │ ~ │   Threaded lead screw
   Crank handle ══╡ ~ │
   (Effort E)     │ ~ │
                  └───┘
 ════════════════════════════════════ Ground
   Crank handle sweeps in wide circles: effort distance (dE) is very large
```

> **Figure 2.1** – In an automotive screw jack, the input effort applied to the crank traces wide circular loops, creating a massive cumulative effort distance ($d_E$). The van rises by a very small vertical displacement ($d_L$). Hence, the velocity ratio ($\text{VR} = d_E / d_L$) is exceptionally large.

---

## Part C: The Relationship Between MA, VR, and Work (Efficiency)

Now let us unite force and distance through the fundamental concept of **mechanical work**. From the chapter on [Work, Energy, and Power](../work-energy-and-power/work-energy-and-power.md), recall that $\text{Work} = \text{Force} \times \text{Displacement}$, measured in joules ($\text{J}$).

At the two terminals of any machine:
- **Work Input** = Mechanical energy supplied *to* the machine by the effort:
  $$\text{Work Input} = \text{Effort} \times \text{Distance moved by Effort} = E \times d_E$$
- **Work Output** = Useful mechanical energy delivered *by* the machine *to* the load:
  $$\text{Work Output} = \text{Load} \times \text{Distance moved by Load} = L \times d_L$$

**Efficiency ($\eta$)** is the fundamental ratio of useful work delivered to total work supplied:

> $$\eta = \frac{\text{Work Output}}{\text{Work Input}} \times 100\%$$

Let us derive the direct relationship connecting $\eta$, $\text{MA}$, and $\text{VR}$ step by step:

1. Express efficiency in terms of forces and displacements:
   $$\eta = \frac{L \times d_L}{E \times d_E} \times 100\%$$

2. Algebraically regroup the terms into force and distance ratios:
   $$\eta = \left( \frac{L}{E} \right) \times \left( \frac{d_L}{d_E} \right) \times 100\%$$

3. Substitute $\frac{L}{E} = \text{MA}$, and observe that $\frac{d_L}{d_E} = \frac{1}{\text{VR}}$:
   $$\eta = \text{MA} \times \frac{1}{\text{VR}} \times 100\%$$

4. Arrive at the golden formula of machine mechanics:
   > $$\eta = \frac{\text{MA}}{\text{VR}} \times 100\% \quad \Longleftrightarrow \quad \text{MA} = \eta \times \text{VR}$$

This mathematical identity demonstrates that a machine's mechanical advantage is equal to its velocity ratio scaled by its mechanical efficiency.

### Ideal Machine vs. Real Machine

- **Ideal Machine:** A theoretical idealization where internal friction between moving parts is completely absent and all structural components are weightless. Here, no energy is converted into non-useful forms:
  $$\text{Work Output} = \text{Work Input} \quad \Longrightarrow \quad \eta = 100\% \quad \text{and} \quad \mathbf{\text{MA} = \text{VR}}$$
- **Real Machine:** Every practical machine encountered in engineering contains internal friction at pivots, bearings, and contact surfaces, and its moving parts possess physical mass. Some input energy is inevitably dissipated in overcoming friction:
  $$\text{Work Output} < \text{Work Input} \quad \Longrightarrow \quad \eta < 100\% \quad \text{and} \quad \mathbf{\text{MA} < \text{VR}}$$

Where does this dissipated energy go? It transforms into **thermal energy (heat)** and acoustic energy (sound). If you touch the threaded screw of a heavy jack after hoisting a vehicle, the metal feels noticeably warm. As established in [work-energy-and-power-part6.md](../work-energy-and-power/work-energy-and-power-part6.md), this thermal dissipation does not violate energy conservation; energy is not destroyed, but merely converted into non-mechanical heat.

### What a Machine Cannot Do: Multiply Work

A machine is strictly governed by the law of conservation of energy: **no machine can produce more work output than the work input provided to it.**

This directly resolves Leo's question at the tire shop. If work output equals work input (in an ideal scenario):
$$\text{Load} \times d_L = \text{Effort} \times d_E$$
When the load is substantially larger than the effort ($\text{Load} \gg \text{Effort}$), the effort displacement must be proportionately greater than the load displacement ($d_E \gg d_L$):

$$\text{Small Effort} \times \text{Large Distance} \approx \text{Large Load} \times \text{Small Distance}$$

As Mr. Sterling emphasized: **we save force, not work.** A force-multiplying machine reduces the instantaneous effort demanded from our muscles, but compels us to sustain that modest effort over an extended path.

The work energy balance is represented visually below (each block represents $100\text{ J}$):

```
 Work input  (supplied by effort) : ■■■■■■■■■■■■   1200 J
 Work output (delivered to load) : ■■■■■■■■■■     1000 J
 Dissipated  (frictional heat)    : ■■               200 J
```

> **Figure 2.2** – In any real machine, the useful work output is strictly less than the work input. The difference represents mechanical energy converted into thermal energy by friction. (These exact values reflect Mr. Sterling's screw jack in Example 9).

### Practical Methods to Improve Machine Efficiency

While 100% efficiency is physically impossible in the macroscopic world, engineers maximize real efficiency using two primary techniques:

1. **Minimizing Friction:** Applying high-grade **lubricants (grease or oil)** between sliding surfaces, or incorporating precision **ball bearings** to replace sliding friction with rolling friction. This is why Mr. Sterling periodically greases the threads of his screw jack.
2. **Minimizing Structural Weight:** Manufacturing moving components (such as pulleys, levers, and linkages) from lightweight, high-strength alloys (e.g., aluminum or carbon fiber composites), ensuring minimal input energy is wasted lifting the machine's own structural deadweight.

---

## Part D: Solved Examples

**Example 1 (Calculating MA):** A mechanical hoist lifts an engine block weighing $600\text{ N}$ when a technician applies an effort of $150\text{ N}$. Calculate the mechanical advantage of the hoist.

$$\text{MA} = \frac{\text{Load}}{\text{Effort}} = \frac{600\text{ N}}{150\text{ N}} = \mathbf{4}$$

*Check:* $150\text{ N} \times 4 = 600\text{ N}$ ✅. Since $\text{MA} > 1$, the hoist functions as a force multiplier.

**Example 2 (Finding Effort from Load and MA):** A lever system has a mechanical advantage of $5$. What effort is required to raise a boulder weighing $800\text{ N}$?

$$\text{MA} = \frac{\text{Load}}{\text{Effort}} \quad \Longrightarrow \quad \text{Effort} = \frac{\text{Load}}{\text{MA}} = \frac{800\text{ N}}{5} = \mathbf{160\text{ N}}$$

*Check:* $\frac{800\text{ N}}{160\text{ N}} = 5$ ✅.

**Example 3 (Finding Load from Effort and MA):** A heavy-duty clamp has a mechanical advantage of $6$. If an operator exerts an effort of $40\text{ N}$, what compressive load force does the clamp exert?

$$\text{Load} = \text{MA} \times \text{Effort} = 6 \times 40\text{ N} = \mathbf{240\text{ N}}$$

*Check:* $\frac{240\text{ N}}{40\text{ N}} = 6$ ✅.

**Example 4 (Calculating VR with Unit Conversion):** In a machine, the input effort handle moves through a distance of $2\text{ m}$ while the load platform rises by $25\text{ cm}$. Determine the velocity ratio of the machine.

- Convert both displacements to meters: $25\text{ cm} = 0.25\text{ m}$.
- Apply the velocity ratio formula:
  $$\text{VR} = \frac{d_E}{d_L} = \frac{2\text{ m}}{0.25\text{ m}} = \mathbf{8}$$

*Check:* $0.25\text{ m} \times 8 = 2\text{ m}$ ✅. (Caution: Dividing $2$ directly by $25$ would yield $0.08$, an error caused by inconsistent units!)

**Example 5 (Comprehensive MA, VR, and Efficiency Analysis):** A winch system enables an effort of $150\text{ N}$ to lift a crate weighing $900\text{ N}$. During the lift, the effort cable moves $12\text{ m}$ while the crate is raised $1.5\text{ m}$. Calculate (a) the mechanical advantage, (b) the velocity ratio, and (c) the efficiency of the winch.

- (a) $\text{MA} = \frac{\text{Load}}{\text{Effort}} = \frac{900\text{ N}}{150\text{ N}} = \mathbf{6}$
- (b) $\text{VR} = \frac{d_E}{d_L} = \frac{12\text{ m}}{1.5\text{ m}} = \mathbf{8}$
- (c) $\eta = \frac{\text{MA}}{\text{VR}} \times 100\% = \frac{6}{8} \times 100\% = \mathbf{75\%}$

*Cross-Check via Work:*
$\text{Work Input} = E \times d_E = 150\text{ N} \times 12\text{ m} = 1800\text{ J}$.
$\text{Work Output} = L \times d_L = 900\text{ N} \times 1.5\text{ m} = 1350\text{ J}$.
$\eta = \frac{1350\text{ J}}{1800\text{ J}} \times 100\% = 75\%$ ✅. Both methods yield identical results.

**Example 6 (Work Accounting and Thermal Dissipation):** An effort of $80\text{ N}$ acts through a distance of $5\text{ m}$ on a machine, raising a load of $300\text{ N}$ through a vertical height of $1\text{ m}$. Calculate the work input, the useful work output, the energy dissipated as heat, and the mechanical efficiency.

- $\text{Work Input} = E \times d_E = 80\text{ N} \times 5\text{ m} = \mathbf{400\text{ J}}$
- $\text{Work Output} = L \times d_L = 300\text{ N} \times 1\text{ m} = \mathbf{300\text{ J}}$
- $\text{Dissipated Energy} = \text{Work Input} - \text{Work Output} = 400\text{ J} - 300\text{ J} = \mathbf{100\text{ J}}$
- $\eta = \frac{300\text{ J}}{400\text{ J}} \times 100\% = \mathbf{75\%}$

*Check:* $\text{MA} = \frac{300}{80} = 3.75$; $\text{VR} = \frac{5}{1} = 5$; $\frac{3.75}{5} \times 100\% = 75\%$ ✅.

**Example 7 (Ideal Machine Analysis):** An ideal machine has a velocity ratio of $4$. If an effort of $50\text{ N}$ is applied, what load can it lift? If the effort advances by $2\text{ m}$, what vertical distance does the load ascend?

- For an ideal machine, $\eta = 100\%$, so $\text{MA} = \text{VR} = 4$.
- $\text{Load} = \text{MA} \times \text{Effort} = 4 \times 50\text{ N} = \mathbf{200\text{ N}}$
- $d_L = \frac{d_E}{\text{VR}} = \frac{2\text{ m}}{4} = \mathbf{0.5\text{ m}}$

*Check:* $\text{Work Input} = 50\text{ N} \times 2\text{ m} = 100\text{ J}$. $\text{Work Output} = 200\text{ N} \times 0.5\text{ m} = 100\text{ J}$. For an ideal machine, work input equals work output ✅.

**Example 8 (Real Machine with 80% Efficiency):** A lifting device has a velocity ratio of $5$ and operates at an efficiency of $80\%$. What load can be raised using an effort of $100\text{ N}$?

- Relate $\text{MA}$, $\text{VR}$, and efficiency:
  $$\text{MA} = \frac{\eta}{100\%} \times \text{VR} = 0.80 \times 5 = \mathbf{4}$$
- Calculate the load:
  $$\text{Load} = \text{MA} \times \text{Effort} = 4 \times 100\text{ N} = \mathbf{400\text{ N}}$$

*Check:* If the machine were ideal ($\eta = 100\%$), $\text{MA}$ would be $5$ and it would lift $500\text{ N}$. At $80\%$ efficiency, it lifts $80\%$ of $500\text{ N} = 400\text{ N}$ ✅.

**Example 9 (Mr. Sterling's Screw Jack — Resolving the Opening Story):** In Mr. Sterling's jack, his hands exert an effort of $100\text{ N}$ traversing a cumulative circular path of $12\text{ m}$. This lifts the corner of the van bearing a load of $2000\text{ N}$ by $0.5\text{ m}$ ($50\text{ cm}$). Determine the $\text{MA}$, $\text{VR}$, efficiency, work input, work output, and thermal energy dissipated.

- $\text{MA} = \frac{\text{Load}}{\text{Effort}} = \frac{2000\text{ N}}{100\text{ N}} = \mathbf{20}$
- $\text{VR} = \frac{d_E}{d_L} = \frac{12\text{ m}}{0.5\text{ m}} = \mathbf{24}$
- $\eta = \frac{\text{MA}}{\text{VR}} \times 100\% = \frac{20}{24} \times 100\% = \mathbf{83.3\%}$
- $\text{Work Input} = E \times d_E = 100\text{ N} \times 12\text{ m} = \mathbf{1200\text{ J}}$
- $\text{Work Output} = L \times d_L = 2000\text{ N} \times 0.5\text{ m} = \mathbf{1000\text{ J}}$
- $\text{Dissipated Energy} = 1200\text{ J} - 1000\text{ J} = \mathbf{200\text{ J}}$ (converted to heat)

*Check:* $\frac{1000}{1200} \times 100\% = 83.3\%$ ✅, and $\text{MA} (20) < \text{VR} (24)$ confirms real machine physics ✅.

Leo's questions are now fully answered with numbers: **$\text{MA} = 20$** indicates Mr. Sterling's muscular effort is magnified twenty-fold. In exchange, **$\text{VR} = 24$** dictates that his hands must travel $24\text{ times}$ farther than the van rises. Mr. Sterling saved substantial physical force, but did not save mechanical work: he supplied $1200\text{ J}$ of energy to deliver $1000\text{ J}$ of gravitational potential energy to the van, while $200\text{ J}$ warmed the steel threads of the jack.

**Example 10 (Comparing Two Machines):** Machine A lifts a $500\text{ N}$ load through $1.5\text{ m}$ with an effort of $100\text{ N}$ moving $10\text{ m}$. Machine B lifts a $400\text{ N}$ load through $1.2\text{ m}$ with an effort of $100\text{ N}$ moving $6\text{ m}$. Which machine offers a higher mechanical advantage? Which machine operates with higher efficiency?

- **Machine A:**
  - $\text{MA}_A = \frac{500\text{ N}}{100\text{ N}} = \mathbf{5}$
  - $\text{Work Input}_A = 100\text{ N} \times 10\text{ m} = 1000\text{ J}$; $\text{Work Output}_A = 500\text{ N} \times 1.5\text{ m} = 750\text{ J}$
  - $\eta_A = \frac{750\text{ J}}{1000\text{ J}} \times 100\% = \mathbf{75\%}$
- **Machine B:**
  - $\text{MA}_B = \frac{400\text{ N}}{100\text{ N}} = \mathbf{4}$
  - $\text{Work Input}_B = 100\text{ N} \times 6\text{ m} = 600\text{ J}$; $\text{Work Output}_B = 400\text{ N} \times 1.2\text{ m} = 480\text{ J}$
  - $\eta_B = \frac{480\text{ J}}{600\text{ J}} \times 100\% = \mathbf{80\%}$

*Conclusion:* **Machine A provides a larger mechanical advantage ($5 > 4$), but Machine B operates with superior efficiency ($80\% > 75\%$).** Having a higher force magnification does not imply higher efficiency!

**Example 11 (Determining Required Effort Travel):** A mechanism has $\text{MA} = 6$ and operates at an efficiency of $75\%$. If the load must be raised by $0.5\text{ m}$, what total distance must the effort move?

- First find $\text{VR}$:
  $$\text{VR} = \frac{\text{MA}}{\eta / 100\%} = \frac{6}{0.75} = \mathbf{8}$$
- Calculate effort displacement:
  $$d_E = \text{VR} \times d_L = 8 \times 0.5\text{ m} = \mathbf{4\text{ m}}$$

*Check:* $\text{VR} = \frac{4\text{ m}}{0.5\text{ m}} = 8$ ✅, and $\frac{6}{8} \times 100\% = 75\%$ ✅.

**Example 12 (Energy Dissipation in Joules):** A crane winch receives an input of $2500\text{ J}$ of mechanical work. Its operational efficiency is rated at $60\%$. Calculate the useful work output and the energy lost to friction. If the crane lifts a load of $300\text{ N}$, how high does the load rise?

- $\text{Work Output} = 60\% \times 2500\text{ J} = 0.60 \times 2500\text{ J} = \mathbf{1500\text{ J}}$
- $\text{Energy Lost} = 2500\text{ J} - 1500\text{ J} = \mathbf{1000\text{ J}}$ (dissipated as heat)
- $d_L = \frac{\text{Work Output}}{\text{Load}} = \frac{1500\text{ J}}{300\text{ N}} = \mathbf{5\text{ m}}$

*Check:* $300\text{ N} \times 5\text{ m} = 1500\text{ J}$ ✅; $\frac{1500}{2500} \times 100\% = 60\%$ ✅.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Treating MA and VR as interchangeable concepts**
   $\text{MA}$ is strictly a **force ratio** ($\text{Load} \div \text{Effort}$), which depends directly on friction. $\text{VR}$ is strictly a **geometric displacement ratio** ($d_E \div d_L$), which is fixed by the physical geometry of the machine regardless of friction. In Example 9, $\text{MA} = 20$ while $\text{VR} = 24$.

2. **Mistake 2: Believing that MA can ever exceed VR in a real machine**
   In an ideal machine, $\text{MA} = \text{VR}$. In any real machine, internal friction ensures $\text{MA} < \text{VR}$. An $\text{MA} > \text{VR}$ would imply an efficiency exceeding $100\%$ ($\eta > 100\%$), which violates the law of conservation of energy. If your calculations ever yield $\text{MA} > \text{VR}$, check your math for errors.

3. **Mistake 3: Claiming that efficiency can reach or exceed 100%**
   An efficiency above $100\%$ would mean the machine magically creates new energy from nothing. In the physical universe, real macroscopic machines always encounter friction and component weight, ensuring $\eta < 100\%$ at all times.

4. **Mistake 4: Inverting the ratio when calculating MA**
   Always remember: **$\text{MA} = \text{Load} \div \text{Effort}$**, never the reverse! Inverting this in Example 1 would yield $150 \div 600 = 0.25$, creating the false impression that a heavy-duty hoist behaves like a speed multiplier. A dependable memory aid: "Load on top, Effort below."

5. **Mistake 5: Failing to harmonize units when computing VR**
   In Example 4, the effort moves $2\text{ m}$ while the load rises $25\text{ cm}$. Calculating $2 \div 25 = 0.08$ produces a disastrous error. Both quantities must share the identical unit: $25\text{ cm} = 0.25\text{ m}$, giving the correct ratio $\text{VR} = 8$.

6. **Mistake 6: Assuming a large MA implies saved work**
   A large $\text{MA}$ saves **muscular force**, but **never saves mechanical work**. In Example 9, with an impressive $\text{MA} = 20$, the operator still had to supply $1200\text{ J}$ of input energy to accomplish $1000\text{ J}$ of output work. The reduction in force was entirely balanced by a corresponding increase in travel distance.

---

## Quick Recap

- **$\text{MA} = \text{Load} \div \text{Effort}$** ($L / E$). A pure dimensionless number. $\text{MA} > 1$ denotes a force multiplier; $\text{MA} = 1$ denotes a direction changer; $\text{MA} < 1$ denotes a speed multiplier.
- **$\text{VR} = \text{Displacement of Effort} \div \text{Displacement of Load}$** ($d_E / d_L$). A pure dimensionless number requiring consistent units for both displacements.
- **$\text{Work Input} = E \times d_E$**; **$\text{Work Output} = L \times d_L$**.
- **$\eta = (\text{Work Output} \div \text{Work Input}) \times 100\% = (\text{MA} \div \text{VR}) \times 100\%$**.
- **Ideal Machine** (frictionless, weightless components): $\text{MA} = \text{VR}$, $\eta = 100\%$, $\text{Work Output} = \text{Work Input}$.
- **Real Machine** (subject to friction): $\text{MA} < \text{VR}$, $\eta < 100\%$, $\text{Work Output} < \text{Work Input}$.
- Energy dissipated in overcoming friction is converted into non-recoverable **thermal energy (heat)**.
- Machines **never multiply work**: force amplification is always balanced by a proportional expansion in effort displacement ($\text{Small Effort} \times \text{Long Distance} \approx \text{Large Load} \times \text{Short Distance}$).
- Machine efficiency is improved through **lubrication** (reducing surface friction) and utilizing **lightweight alloys** (minimizing component mass).
- In Mr. Sterling's jack: $E = 100\text{ N}$, $d_E = 12\text{ m}$, $L = 2000\text{ N}$, $d_L = 0.5\text{ m}$. Hence, $\text{MA} = 20$, $\text{VR} = 24$, $\eta = 83.3\%$, and $200\text{ J}$ is dissipated as heat.

---

## Practice Questions

1. A mechanical machine elevates a load of $450\text{ N}$ when driven by an effort of $90\text{ N}$. Calculate its mechanical advantage. Does this machine function as a force multiplier?

2. A hydraulic press has a mechanical advantage of $8$. What input effort is required to compress a scrap bale under a load resistance of $200\text{ N}$?

3. In a mechanical drive, the effort point travels through $6\text{ m}$ while the output load moves through $1.5\text{ m}$. Determine the velocity ratio of the drive. If the effort were moved through $3\text{ m}$ instead, what distance would the load move?

4. An effort of $60\text{ N}$ moves through $5\text{ m}$ to elevate a load of $200\text{ N}$ through a vertical height of $1\text{ m}$. Calculate:
   (a) The work input supplied.
   (b) The useful work output delivered.
   (c) The efficiency of the machine.
   (d) The mechanical advantage and velocity ratio.

5. An ideal machine possesses a velocity ratio of $6$. What load can it raise when driven by an effort of $45\text{ N}$?

6. A commercial hoist operating at $90\%$ efficiency has a velocity ratio of $10$. What maximum load can be hoisted using an effort of $50\text{ N}$?

7. In a cable hoist, an effort of $125\text{ N}$ pulls through $2\text{ m}$ to lift a shipping crate weighing $1000\text{ N}$ through $0.2\text{ m}$. Determine the work input, the useful work output, the energy converted into frictional heat, and the operational efficiency.

8. State whether each of the following statements is True or False:
   (a) Both $\text{MA}$ and $\text{VR}$ are measured in newtons.
   (b) In a real physical machine, $\text{MA}$ is invariably greater than $\text{VR}$.
   (c) A machine exhibiting a very high $\text{MA}$ saves mechanical work.
   (d) The efficiency of a real physical machine can never reach $100\%$.

9. Machine A receives $400\text{ J}$ of input energy and delivers $300\text{ J}$ of useful output. Machine B receives $500\text{ J}$ of input energy and delivers $400\text{ J}$ of useful output. Compute the efficiency of each machine and state which machine is superior in performance. How much thermal energy is dissipated by each?

10. A planetary gear system features a velocity ratio of $12$ and operates with an efficiency of $75\%$.
    (a) If the output load ascends by $0.25\text{ m}$, what distance must the input effort traverse?
    (b) Determine the mechanical advantage of the system.
    (c) What load can the system lift when an input effort of $100\text{ N}$ is applied?

### Answers

1. $\text{MA} = \frac{\text{Load}}{\text{Effort}} = \frac{450\text{ N}}{90\text{ N}} = \mathbf{5}$.
   Since $\text{MA} > 1$, the machine operates as a **force multiplier**.
   *Check:* $90\text{ N} \times 5 = 450\text{ N}$ ✅.

2. $\text{Effort} = \frac{\text{Load}}{\text{MA}} = \frac{200\text{ N}}{8} = \mathbf{25\text{ N}}$.
   *Check:* $\frac{200\text{ N}}{25\text{ N}} = 8$ ✅.

3. $\text{VR} = \frac{d_E}{d_L} = \frac{6\text{ m}}{1.5\text{ m}} = \mathbf{4}$.
   If the effort advances by $3\text{ m}$, the load displacement is:
   $d_L = \frac{d_E}{\text{VR}} = \frac{3\text{ m}}{4} = \mathbf{0.75\text{ m}}$.
   *Check:* $1.5\text{ m} \times 4 = 6\text{ m}$ ✅; $0.75\text{ m} \times 4 = 3\text{ m}$ ✅.

4. (a) $\text{Work Input} = E \times d_E = 60\text{ N} \times 5\text{ m} = \mathbf{300\text{ J}}$.
   (b) $\text{Work Output} = L \times d_L = 200\text{ N} \times 1\text{ m} = \mathbf{200\text{ J}}$.
   (c) $\eta = \frac{200\text{ J}}{300\text{ J}} \times 100\% = \mathbf{66.7\%}$.
   (d) $\text{MA} = \frac{200\text{ N}}{60\text{ N}} = \mathbf{3.33}$; $\text{VR} = \frac{5\text{ m}}{1\text{ m}} = \mathbf{5}$.
   *Check:* $\frac{\text{MA}}{\text{VR}} \times 100\% = \frac{3.333}{5} \times 100\% = 66.7\%$ ✅.

5. For an ideal machine, $\eta = 100\% \Longrightarrow \text{MA} = \text{VR} = 6$.
   $\text{Load} = \text{MA} \times \text{Effort} = 6 \times 45\text{ N} = \mathbf{270\text{ N}}$.
   *Check:* If effort travels $6\text{ m}$, work input $= 45\text{ N} \times 6\text{ m} = 270\text{ J}$; load ascends $1\text{ m}$, work output $= 270\text{ N} \times 1\text{ m} = 270\text{ J}$ ✅.

6. $\text{MA} = \frac{\eta}{100\%} \times \text{VR} = 0.90 \times 10 = \mathbf{9}$.
   $\text{Load} = \text{MA} \times \text{Effort} = 9 \times 50\text{ N} = \mathbf{450\text{ N}}$.
   *Check:* $\frac{450\text{ N}}{50\text{ N}} = 9$; $\frac{9}{10} \times 100\% = 90\%$ ✅.

7. $\text{Work Input} = 125\text{ N} \times 2\text{ m} = \mathbf{250\text{ J}}$.
   $\text{Work Output} = 1000\text{ N} \times 0.2\text{ m} = \mathbf{200\text{ J}}$.
   $\text{Dissipated Heat Energy} = 250\text{ J} - 200\text{ J} = \mathbf{50\text{ J}}$.
   $\eta = \frac{200\text{ J}}{250\text{ J}} \times 100\% = \mathbf{80\%}$.
   *Check:* $\text{MA} = \frac{1000}{125} = 8$; $\text{VR} = \frac{2}{0.2} = 10$; $\frac{8}{10} \times 100\% = 80\%$ ✅.

8. (a) **False** ❌. Both $\text{MA}$ and $\text{VR}$ are ratios of identical physical quantities and are therefore dimensionless with no units.
   (b) **False** ❌. Due to friction, $\text{MA} < \text{VR}$ in all real physical machines.
   (c) **False** ❌. $\text{MA}$ amplifies force, but the total mechanical work input must always equal or exceed the useful work output.
   (d) **True** ✅. Unavoidable internal friction and component mass prevent real macroscopic systems from reaching $100\%$ efficiency.

9. For Machine A: $\eta_A = \frac{300\text{ J}}{400\text{ J}} \times 100\% = \mathbf{75\%}$.
   For Machine B: $\eta_B = \frac{400\text{ J}}{500\text{ J}} \times 100\% = \mathbf{80\%}$.
   **Machine B is superior in efficiency.**
   Heat energy dissipated:
   In Machine A: $400\text{ J} - 300\text{ J} = \mathbf{100\text{ J}}$.
   In Machine B: $500\text{ J} - 400\text{ J} = \mathbf{100\text{ J}}$.
   *(Note: While both machines dissipate the identical absolute quantity of heat, Machine B converts a larger fraction of its input energy into useful work, making it the more efficient machine.)*
   *Check:* $0.75 \times 400 = 300\text{ J}$ ✅; $0.80 \times 500 = 400\text{ J}$ ✅.

10. (a) $d_E = \text{VR} \times d_L = 12 \times 0.25\text{ m} = \mathbf{3\text{ m}}$.
    (b) $\text{MA} = \frac{\eta}{100\%} \times \text{VR} = 0.75 \times 12 = \mathbf{9}$.
    (c) $\text{Load} = \text{MA} \times \text{Effort} = 9 \times 100\text{ N} = \mathbf{900\text{ N}}$.
    *Check:* $\text{Work Input} = 100\text{ N} \times 3\text{ m} = 300\text{ J}$. $\text{Work Output} = 900\text{ N} \times 0.25\text{ m} = 225\text{ J}$. $\eta = \frac{225}{300} \times 100\% = 75\%$ ✅.

---

Equipped with these analytical tools, you can examine any lifting mechanism just as Leo did: $\text{MA}$ tells you the magnitude of force reduction, $\text{VR}$ reveals the distance penalty incurred, and efficiency measures how closely the device approaches ideal performance.

**What's next?** How do physical machines produce these mechanical advantages? In Topic 3, we investigate the oldest and most elegant simple machine: the **lever**, governed by the rotational physics of the **moment of force** and the universal **principle of moments**.
