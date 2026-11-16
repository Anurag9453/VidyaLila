# Chapter: Gas Laws (Part 6)

> **Class:** 9 | **Subject:** Chemistry
> **Previous link in this series:** [gas-laws-part5.md](gas-laws-part5.md) (which covered STP, Avogadro's Law, molar volume of $22.4\text{ L}$, gas density, and the $2 : 1$ electrolysis volume ratio). Chapter introduction: [gas-laws.md](gas-laws.md). Boyle's Law: [gas-laws-part2.md](gas-laws-part2.md). Charles's Law: [gas-laws-part3.md](gas-laws-part3.md). Pressure-temperature law and Combined Equation: [gas-laws-part4.md](gas-laws-part4.md). Kelvin absolute scale: [matter-in-our-surroundings-part3.md](../matter-in-our-surroundings/matter-in-our-surroundings-part3.md). Mole concept: [atoms-and-molecules-part5.md](../atoms-and-molecules/atoms-and-molecules-part5.md). Physics of fluid pressure: [pressure-and-fluids-part4.md](../../physics/pressure-and-fluids/pressure-and-fluids-part4.md).
> **Topics covered in this file:**
> 6. Gas Laws in Daily Life + Chapter Summary

---

# Topic 6: Gas Laws in Daily Life + Chapter Summary

Across the previous topics, we dissected the four fundamental variables of a gas ($P, V, T, n$), formulated the three classical gas laws, and explored molar volume at STP. Now comes the most important skill in practical chemistry: **recognising which law governs any given real-world situation**. In this culminating topic, we begin with a bus winding down a mountain road, explore ear-popping, lung mechanics, scuba diving physiology, and weather balloons, establish a comprehensive decision flowchart, tackle over ten mixed numerical problems, reinforce vital safety protocols, and conclude with an executive chapter summary.

---

## Crushed Water Bottle on the Mountain Descent

On a high school field trip, Elena and her classmates were riding a tour bus back from a scenic mountain peak with their science teacher, Mr. Spencer. As the bus descended the steep switchback roads toward the coastal plains, Elena winced and pressed both hands to her ears.

"Mr. Spencer, my ears feel completely blocked and muffled!"

Mr. Spencer smiled reassuringly. "Try swallowing or yawning gently." Elena swallowed, and immediately felt a soft, satisfying **pop** inside her ears, restoring normal hearing. "That worked!"

Then Elena reached into the side pocket of her backpack for her plastic water bottle. At the mountain lodge, she had drunk the water and screwed the cap on tightly. Now, pulling it out, she gasped. **The bottle was deeply dented and crumpled**, looking as though someone had squeezed it in a vice! Yet nobody had touched her backpack.

"Mr. Spencer, look at my bottle! What crushed it?"

"That crushed bottle connects every single concept we have studied in this chapter," Mr. Spencer explained. "At the mountain summit, you sealed low-pressure mountain air inside. Down here in the valley, ambient atmospheric pressure is significantly higher. **The outside pressure is greater than the trapped pressure inside**, so atmospheric air crushed the flexible walls inward until the internal air compressed to match. And that exact same pressure imbalance is what made your eardrums pop!"

Elena jotted a note in her journal: *"How do we determine which gas law applies to any given situation?"*

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Constant** | A physical variable deliberately held fixed throughout a process | In Boyle's Law, $T$ and $n$ are constant |
| **Decision flow** | A systematic logical sequence used to identify the correct physical equation | Figure 6.1 flowchart |
| **Sealed container** | An airtight vessel from which no gas molecules can enter or escape ($n = \text{constant}$) | A capped plastic bottle |
| **Rigid container** | A solid vessel whose internal volume cannot expand or contract | Steel diving tank |
| **Flexible container** | A vessel whose boundary can deform or expand to match external pressure | A latex balloon, a thin plastic bottle |
| **Diaphragm** | The dome-shaped muscle beneath the lungs that drives thoracic volume changes during breathing | Human respiration |
| **Absolute pressure** | Total actual pressure measured relative to a perfect vacuum ($0\text{ atm}$), required in all gas law formulas | Tyre gauge pressure $+ 1\text{ atm}$ |

---

## Part A: Which Law Do I Use? (Decision Flow)

Before writing down any equation, ask two diagnostic questions:
1. *Did the quantity of gas change?* (Did gas leak out or get pumped in?)
2. *Which property ($T, P,$ or $V$) is held constant?*

```
                 Did the amount of gas (n) change?
                 (Leaking valve, reaction producing gas, etc.)
                                 |
                     +-----------+-----------+
                     |                       |
                    YES                      NO
                     |                       |
                     v                       v
            Cannot use simple       Which property is constant?
            Class 9 gas laws;                |
            requires stoichiometry           +---> T constant : Boyle's Law (P₁V₁ = P₂V₂)
            or advanced equations            +---> P constant : Charles's Law (V₁/T₁ = V₂/T₂)
            (PV = nRT in Class 10+)          +---> V constant : Gay-Lussac's Law (P₁/T₁ = P₂/T₂)
                                             +---> All three change : Combined Equation
                                                   (P₁V₁/T₁ = P₂V₂/T₂)

            REMINDER: All temperatures must be in Kelvin: T (K) = t (°C) + 273
```

> **Figure 6.1** – Decision flowchart for selecting the correct gas law. First verify that the system is closed ($n = \text{constant}$). Then determine which state variable is held fixed.

| What is Constant? | What is Changing? | Applicable Law | Mathematical Form |
|---|---|---|---|
| Temperature ($T$) & mass ($n$) | Pressure ($P$) & Volume ($V$) | **Boyle's Law** | $P_1V_1 = P_2V_2$ |
| Pressure ($P$) & mass ($n$) | Volume ($V$) & Temperature ($T$) | **Charles's Law** | $\frac{V_1}{T_1} = \frac{V_2}{T_2}$ |
| Volume ($V$) & mass ($n$) | Pressure ($P$) & Temperature ($T$) | **Gay-Lussac's Law** | $\frac{P_1}{T_1} = \frac{P_2}{T_2}$ |
| Only mass ($n$) is constant | $P, V,$ and $T$ all shift | **Combined Gas Equation** | $\frac{P_1V_1}{T_1} = \frac{P_2V_2}{T_2}$ |

---

## Part B: The Mountain Descent Bottle (Boyle's Law in Action)

```
   MOUNTAIN SUMMIT (1000 m)             VALLEY FLOOR (Sea Level)
   Air is thin: P = 0.90 atm            Air is dense: P = 1.00 atm

   Outside: 0.90 atm                    Outside: 1.00 atm
   Inside:  0.90 atm                    Inside:  0.90 atm (sealed)

     +----------+                          +--------+
     |          |  Cap sealed tightly      | Dent-  |  Greater ambient pressure
     | Trapped  |       ======>            | ed     |  pushes the flexible plastic
     |   Air    |   Bus descends hill      | Bottle |  walls inward!
     +----------+                          +--------+
```

> **Figure 6.2** – A sealed flexible bottle descending a mountain. At the summit, interior and exterior pressures are balanced at $0.90\text{ atm}$. Down in the valley, ambient pressure rises to $1.00\text{ atm}$, forcing the flexible plastic inward until internal pressure compresses to match.

At the particle level: down in the valley, atmospheric air is denser. Trillions of external gas particles strike the bottle's exterior walls far more frequently than the thinner air trapped inside can strike the interior. The net inward force crushes the flexible plastic walls inward until the trapped volume compresses sufficiently to elevate the internal collision rate to match the outside atmosphere.

**Example 1: Calculating the volume reduction.**
Suppose Elena sealed $1.00\text{ L}$ of air inside her bottle at an altitude of $1000\text{ m}$ where atmospheric pressure was $0.90\text{ atm}$. Down at sea level, the ambient pressure is $1.00\text{ atm}$. Assuming constant temperature, determine the new volume of the trapped air.
- Applying Boyle's Law ($P_1V_1 = P_2V_2$):
  $$V_2 = \frac{P_1V_1}{P_2} = \frac{0.90\text{ atm} \times 1.00\text{ L}}{1.00\text{ atm}} = \mathbf{0.90\text{ L}}$$
- The bottle volume contracts by **$10\%$** ($0.10\text{ L}$).
- *Check:* $0.90 \times 1.00 = 1.00 \times 0.90 = 0.90\text{ atm}\cdot\text{L}$ ✅.

**Example 2: How much crushing force acted on the bottle?**
The net pressure difference acting inward is $\Delta P = 1.00 - 0.90 = 0.10\text{ atm}$.
Converting to Pascals:
$$\Delta P = 0.10 \times 101325\text{ Pa} \approx 10130\text{ Pa}$$
If one side face of the bottle has an area of $400\text{ cm}^2 = 0.04\text{ m}^2$, calculate the total inward crushing force:
$$\text{Force } F = \Delta P \times A = 10130\text{ N/m}^2 \times 0.04\text{ m}^2 = \mathbf{405.2\text{ N}}$$
A force of $405\text{ N}$ is roughly equivalent to the downward weight of a **$41\text{ kg}$ object**! It is no wonder the thin plastic crumpled under such tremendous atmospheric force.

**The Reverse Scenario (Safety Warning):**
If a sealed bottle or jar is capped at sea level and transported *up* a mountain, external pressure drops while the interior remains at high pressure. The bottle will bulge outward, and snack bags of potato chips will puff up like pillows. **When opening a container at high altitude, open the cap slowly pointed away from faces**, as trapped air may burst out.

**Example 3: Physiological ear-popping.**
The middle ear is an air-filled chamber separated from the outside atmosphere by the thin, sensitive tympanic membrane (eardrum). It connects to the throat via the narrow **Eustachian tube**. At the mountain summit, middle-ear pressure was $0.90\text{ atm}$ in equilibrium with ambient air. As the bus descended into $1.00\text{ atm}$ air, the higher outside pressure pushed the eardrum inward, creating a muffled, uncomfortable sensation. Swallowing or yawning momentarily opens the Eustachian tube, allowing air to rush into the middle ear and equalise pressure: **pop!**

---

## Part C: The Mechanics of Respiration (Boyle's Law in the Human Body)

```
           INHALATION                            EXHALATION

           Air rushes IN                        Air forced OUT
                 |                                     ^
                 v                                     |
             +-------+                             +-------+
             | Lungs |  Thoracic cavity            | Lungs |  Thoracic cavity
             |       |  expands:                   |       |  contracts:
             |       |  V climbs, P drops          +-------+  V drops, P climbs
             |       |                        ====== Diaphragm relaxes UP ======
             +-------+
       ====== Diaphragm contracts DOWN ======
```

> **Figure 6.3** – Respiratory mechanics governed by Boyle's Law. Inhalation: the diaphragm contracts downward, expanding thoracic cavity volume; internal alveolar pressure falls below atmospheric pressure, drawing air in. Exhalation: the diaphragm relaxes upward, reducing volume and driving air out.

Breathing does not involve "sucking" air inward. Rather, muscular contraction enlarges thoracic volume, creating a pressure deficit according to Boyle's Law.

**Example 4: Pressure differential during normal breathing.**
Prior to inhalation, a resting student's lungs hold $2.40\text{ L}$ of air at atmospheric pressure ($1.000\text{ atm}$). As the diaphragm contracts downward, lung volume expands to $2.60\text{ L}$ at constant body temperature ($37\ ^\circ\text{C}$). Determine the alveolar pressure inside the lungs.
$$P_2 = \frac{P_1V_1}{V_2} = \frac{1.000\text{ atm} \times 2.40\text{ L}}{2.60\text{ L}} \approx \mathbf{0.923\text{ atm}}$$
- Internal pressure drops by $0.077\text{ atm}$ ($\approx 59\text{ mm Hg}$).
- This slight pressure deficit causes outside air at $1.000\text{ atm}$ to flow smoothly down the trachea into the lungs.
- *Check:* $1.000 \times 2.40 = 2.40$ and $0.923 \times 2.60 \approx 2.40$ ✅.

---

## Part D: Rising Bubbles and Scuba Diving

Hydrostatic water pressure increases by approximately **$1.0\text{ atm}$ for every $10\text{ metres}$ of water depth**.
Total ambient pressure at depth $d$ is:
$$P_{\text{total}} = P_{\text{surface}} + \frac{d}{10\text{ m}} = 1.0\text{ atm} + \frac{d}{10\text{ m}}$$
At $30\text{ m}$ depth: $P = 1.0 + 3.0 = \mathbf{4.0\text{ atm}}$.

**Example 5: An ascending diver bubble.**
A scuba diver at a depth of $30\text{ m}$ ($4.0\text{ atm}$) exhales a bubble of volume $2.0\text{ mL}$. What will its volume be when it reaches the ocean surface ($1.0\text{ atm}$)?
$$V_2 = \frac{P_1V_1}{P_2} = \frac{4.0\text{ atm} \times 2.0\text{ mL}}{1.0\text{ atm}} = \mathbf{8.0\text{ mL}}$$
- The bubble quadruples in size as it ascends!
- *Check:* $4.0 \times 2.0 = 1.0 \times 8.0 = 8.0\text{ atm}\cdot\text{mL}$ ✅.

> **Crucial Diver Safety Rule:** This dramatic expansion explains why **scuba divers must continuously breathe normally and never hold their breath while ascending**. If a diver took a full breath at $30\text{ m}$ ($4.0\text{ atm}$) and ascended to the surface while holding their breath, their lung air would expand four-fold, causing catastrophic pulmonary barotrauma.

**Example 6: Air supply from a scuba cylinder.**
A scuba cylinder has a rigid volume of $10\text{ L}$ and is filled with compressed air at $150\text{ atm}$.
(a) What volume of air would this provide at sea-level surface pressure ($1.0\text{ atm}$)?
$$V_{\text{surface}} = \frac{150\text{ atm} \times 10\text{ L}}{1.0\text{ atm}} = \mathbf{1500\text{ L}}$$
(b) At a depth of $20\text{ m}$ ($3.0\text{ atm}$), a diver's lungs require air delivered at the ambient water pressure ($3.0\text{ atm}$). If the diver consumes $15\text{ L/min}$ of air measured at $3.0\text{ atm}$, how many surface-equivalent litres are consumed per minute, and how long does the cylinder last?
- Consumption rate at $1.0\text{ atm}$ equivalent: $15\text{ L/min} \times 3.0 = \mathbf{45\text{ L/min}}$.
- Duration: $\text{Time} = \frac{1500\text{ L}}{45\text{ L/min}} \approx \mathbf{33.3\text{ minutes}}$ (practical diving reserves require surfacing with $50\text{ atm}$ remaining).

---

## Part E: Tyres and Balloons (Mixed Problems)

**Example 7: Highway car tyre heating.**
A rigid car tyre holds air at an absolute pressure of $2.00\text{ atm}$ on a cool morning at $17\ ^\circ\text{C}$ ($290\text{ K}$). After driving along hot summer highways, the internal air reaches $47\ ^\circ\text{C}$ ($320\text{ K}$). Assuming constant tyre volume, determine the new internal pressure.
- Using Gay-Lussac's Law:
  $$P_2 = P_1 \times \frac{T_2}{T_1} = 2.00\text{ atm} \times \frac{320\text{ K}}{290\text{ K}} \approx \mathbf{2.21\text{ atm}}$$
- Internal tyre pressure rises by $0.21\text{ atm}$ ($\approx 3.1\text{ psi}$). Always measure tyre pressure when tyres are cold!

**Example 8: High-altitude weather balloon expansion.**
A weather balloon is released at sea level with a volume of $5.0\text{ L}$ at $27\ ^\circ\text{C}$ ($300\text{ K}$) and $1.00\text{ atm}$. It ascends to the upper troposphere, where ambient pressure drops to $0.50\text{ atm}$ and temperature plunges to $-3\ ^\circ\text{C}$ ($270\text{ K}$). Calculate its expanded volume.
- Deploying the Combined Gas Equation:
  $$V_2 = \frac{P_1 V_1 T_2}{T_1 P_2} = \frac{1.00\text{ atm} \times 5.0\text{ L} \times 270\text{ K}}{300\text{ K} \times 0.50\text{ atm}} = \frac{1350}{150} = \mathbf{9.0\text{ L}}$$
- The pressure-halving effect (tending to double volume to $10\text{ L}$) outweighs the modest thermal cooling (reducing volume to $9\text{ L}$). As weather balloons continue climbing into extreme low-pressure regions, they eventually expand beyond the elastic limit of their latex skin and burst, returning sensor payloads via parachute.

---

## Part F: Combining Combined Gas Equation and Molar Calculations

**Example 9: Normalising lab gas to STP and finding moles.**
A chemist collects a $1.50\text{ L}$ sample of dry gas at $27\ ^\circ\text{C}$ ($300\text{ K}$) under a pressure of $2.00\text{ atm}$.
(a) Determine the volume this sample would occupy at standard temperature and pressure (STP: $273\text{ K}, 1.00\text{ atm}$).
$$V_{\text{STP}} = \frac{P_1 V_1 T_{\text{STP}}}{T_1 P_{\text{STP}}} = \frac{2.00\text{ atm} \times 1.50\text{ L} \times 273\text{ K}}{300\text{ K} \times 1.00\text{ atm}} = \frac{819}{300} = \mathbf{2.73\text{ L}}$$
(b) How many moles of gas are present in this sample?
$$n = \frac{V_{\text{STP}}}{22.4\text{ L/mol}} = \frac{2.73\text{ L}}{22.4\text{ L/mol}} \approx \mathbf{0.122\text{ mol}}$$
- *Check:* $P_1V_1/T_1 = (2.00 \times 1.50) / 300 = 0.0100$ and $P_{\text{STP}}V_{\text{STP}}/T_{\text{STP}} = (1.00 \times 2.73) / 273 = 0.0100$ ✅.

---

## Part G: Quick Classification Scenarios

**Example 10: Classifying everyday gas phenomena.**
1. *A basketball left in the sun becomes rock-hard:* Rigid volume ($V$ const), temperature increases, pressure rises $\rightarrow$ **Gay-Lussac's Law**.
2. *Compressing air in a sealed bicycle pump:* Temperature roughly constant, volume decreases, pressure rises $\rightarrow$ **Boyle's Law**.
3. *A hot-air balloon inflating when heated over an open burner:* Atmospheric pressure constant ($P$ const), temperature increases, volume expands $\rightarrow$ **Charles's Law**.
4. *A sealed bottle crumpling upon descending a mountain:* Temperature roughly constant, external pressure increases, flexible volume shrinks $\rightarrow$ **Boyle's Law**.
5. *Exhaled scuba bubbles expanding as they rise:* Ambient pressure drops, bubble volume expands $\rightarrow$ **Boyle's Law**.
6. *An ascending weather balloon experiencing changing pressure, volume, and temperature simultaneously:* $\rightarrow$ **Combined Gas Equation**.

**Example 11: A scenario where simple gas laws fail.**
*A punctured party balloon slowly deflating on the floor.*
Because gas molecules are actively escaping through the puncture, **the amount of gas ($n$) is not constant**. The three historical gas laws cannot be directly applied to open or leaking systems.

---

## Real Gases vs Ideal Gases (Looking Ahead)

Throughout this chapter, our mathematical models assumed **ideal gas behaviour**—treating gas particles as dimensionless points with zero intermolecular attraction.
In the real world:
- At **moderate temperatures and normal pressures**, real gases (nitrogen, oxygen, helium) obey these laws with remarkable accuracy.
- However, at **extremely high pressures** (where molecules crowd tightly together) and **near condensation temperatures** (where attractive forces pull molecules together), real gases deviate from ideal predictions.
In senior chemistry, you will unite all these principles into the universal **Ideal Gas Equation**:
$$PV = nRT$$
and study the Van der Waals corrections for real gases.

---

## Comprehensive Gas Safety Guidelines

| Equipment / System | Prohibited Action | Scientific Reason |
|---|---|---|
| **Gas cylinders (LPG, scuba, helium)** | Never heat, expose to open sun, drop, or place near furnaces | Gay-Lussac's Law: $P \propto T$. Trapped gas pressure surges inside rigid walls, risking explosive tank rupture. |
| **Aerosol spray cans** | Never puncture, incinerate, or store above $50\ ^\circ\text{C}$ | Sealed pressurized propellant will surge in pressure upon heating, blowing the seam apart. |
| **Vehicle tyres** | Never over-inflate cold tyres before hot highway driving | Friction and asphalt heat raise internal pressure significantly. Always check pressure cold. |
| **Pressure cookers** | Never force open a steaming cooker; always allow venting | High internal steam pressure must depressurise before opening to avoid boiling liquid ejections. |
| **Sealed glass bottles** | Never seal carbonated fermentations or dry ice in rigid glass jars | Mounting gas pressure ($n$ climbing in a fixed volume) will shatter glass violently. |
| **Altitude containers** | Open caps cautiously when arriving at mountain peaks | Trapped sea-level air at higher pressure can spit contents outward. |
| **Balloons** | Never inhale gas directly from high-pressure cylinders | High cylinder velocity and displacement of oxygen pose severe suffocation risks. |
| **Hot water investigations** | Must always be supervised and handled by adults | Scalding prevention. |

**Safe Supervised Observation (Fridge Bottle Contraction):**
Take an empty flexible plastic water bottle at room temperature and cap it securely. Have an adult place it inside a refrigerator (**not the freezer**) for 30 minutes. When retrieved, notice the bottle is visibly indented: as temperature dropped, internal air pressure fell ($P/T = \text{constant}$), allowing external atmospheric pressure to crush the walls inward!

---

## Common Pitfalls to Avoid

1. **Mistake 1: Forgetting to convert temperatures to Kelvin**
   Celsius values ruin every ratio calculation in Charles's Law, Gay-Lussac's Law, and the Combined Gas Equation. Always compute $T\ (\text{K}) = t\ (^\circ\text{C}) + 273$.

2. **Mistake 2: Confusing gauge pressure with absolute pressure**
   Tyre pressure gauges read **gauge pressure** (pressure above ambient atmosphere). Gas laws require **absolute pressure**: $P_{\text{absolute}} = P_{\text{gauge}} + 1\text{ atm}$.

3. **Mistake 3: Assuming rigid tanks expand**
   Steel cylinders and aerosol cans have **fixed interior volume** ($V = \text{constant}$). They obey Gay-Lussac's Law, not Charles's Law.

4. **Mistake 4: Applying gas laws to leaking systems**
   If gas is escaping, $n$ is not constant, violating the fundamental premise of Boyle's, Charles's, and Gay-Lussac's laws.

5. **Mistake 5: Breath-holding while ascending during diving**
   Ascending divers must breathe continuously; expanding lung volume (Boyle's Law) can rupture lung tissue if breath is held.

6. **Mistake 6: Trying to "pop out" a crushed plastic bottle by heating it over a flame**
   Never heat sealed containers. Opening the cap allows ambient air to flow in, equalising pressure safely.

7. **Mistake 7: Misunderstanding why the mountain descent bottle crushed**
   The bottle crushed not because inside pressure dropped, but because **outside atmospheric pressure increased** upon descending into denser low-altitude air.

---

## Quick Recap

- **Diagnostic decision step:** First verify the system is sealed ($n = \text{constant}$). Then determine which property is fixed: $T$ constant $\rightarrow$ Boyle; $P$ constant $\rightarrow$ Charles; $V$ constant $\rightarrow$ Gay-Lussac; all three change $\rightarrow$ Combined Equation.
- **Mountain bottle crush:** Descending from thin mountain air into dense valley air raises external atmospheric pressure, crushing flexible containers inward until internal air compresses to match.
- **Breathing mechanics:** Diaphragmatic contraction expands thoracic volume, dropping alveolar pressure below $1\text{ atm}$, drawing air in smoothly (Boyle's Law).
- **Scuba diving physics:** Pressure increases by $\approx 1\text{ atm}$ per $10\text{ m}$ of depth. Ascending bubbles expand. Divers must never hold their breath while ascending.
- **Thermal pressure spikes:** Heating rigid containers (tyres, cylinders, aerosol cans) drives internal pressure upward ($P \propto T$).
- **Safety core rule:** Never expose sealed containers or compressed gas cylinders to heat or open flames.

---

## Practice Questions

1. A bicycle hand pump contains $600\text{ mL}$ of air at $1.0\text{ atm}$. With the nozzle securely sealed, the piston is slowly pushed until the volume inside is $150\text{ mL}$ at constant temperature. What pressure is reached?

2. An aerosol can holds gas at $4.0\text{ atm}$ at $27\ ^\circ\text{C}$.
   (a) What pressure would be reached if it were left on a car parcel shelf at $87\ ^\circ\text{C}$?
   (b) If the can is rated to withstand a maximum internal pressure of $7.0\text{ atm}$, at what temperature (in $\text{K}$ and in $^\circ\text{C}$) would it reach this burst limit?
   (c) Why must aerosol cans never be thrown into an incinerator or fire?

3. A flexible balloon occupying $3.0\text{ L}$ at $27\ ^\circ\text{C}$ is placed inside a walk-in freezer at $-23\ ^\circ\text{C}$. Assuming external atmospheric pressure remains constant, determine its new volume. Why is temperature converted to Kelvin first?

4. A scuba diver exhales a bubble of volume $1.5\text{ mL}$ at a depth of $40\text{ m}$ in seawater (where pressure increases by $1.0\text{ atm}$ per $10\text{ m}$, and surface pressure is $1.0\text{ atm}$). What will the bubble's volume be when it breaks the surface? Why must ascending divers never hold their breath?

5. During deep inhalation, a student's lung volume increases from $3.0\text{ L}$ to $3.3\text{ L}$ at constant body temperature. If the initial lung pressure was $1.0\text{ atm}$, what is the pressure inside the lungs immediately after expansion? Will air move into or out of the lungs?

6. A $4.0\text{ L}$ gas sample at $2.0\text{ atm}$ and $300\text{ K}$ is adjusted until its pressure is $1.0\text{ atm}$ and its temperature reaches $450\text{ K}$. What is its new volume?

7. A gas sample of volume $6.0\text{ L}$ is measured at $127\ ^\circ\text{C}$ and $1.5\text{ atm}$. Find its volume at standard temperature and pressure (STP: $273\text{ K}, 1.0\text{ atm}$), and calculate the number of moles present (using $22.4\text{ L/mol}$).

8. A scuba diving cylinder has a capacity of $15\text{ L}$ and is charged to $200\text{ atm}$.
   (a) What volume of air would this cylinder yield if expanded to atmospheric pressure ($1.0\text{ atm}$) at the same temperature?
   (b) If a diver consumes $20\text{ L/min}$ of air at surface pressure, how many surface-equivalent litres per minute does the diver consume at a depth of $30\text{ m}$ ($4.0\text{ atm}$)? For how many minutes will the full cylinder supply air (ignoring emergency reserves)?

9. A sealed packet of potato chips has an interior volume of $200\text{ mL}$ at sea level ($1.00\text{ atm}$). When transported to a mountain observation deck where pressure is $0.80\text{ atm}$ at the same temperature, why does the bag puff up, and what is its expanded volume?

10. Identify the governing gas law (Boyle, Charles, Gay-Lussac, or Combined Gas Equation) and state the constant property for each:
    (a) A rigid steel cylinder left in hot summer sun.
    (b) Air compressed slowly inside a blocked bicycle pump.
    (c) An inflated balloon carried from an air-conditioned room into warm afternoon sunlight.
    (d) A sealed, thin plastic bottle carried down a mountain on a day when the valley plain is also significantly warmer than the peak.

11. A sealed plastic water bottle is capped at a mountain summit where air pressure is $0.85\text{ atm}$ and carried down to a coastal city at $1.00\text{ atm}$.
    (a) Calculate the net pressure differential in Pascals ($1\text{ atm} = 101325\text{ Pa}$).
    (b) If one side wall of the bottle has a surface area of $300\text{ cm}^2$, what total crushing force acts on it?
    (c) Why is it dangerous to heat the crushed bottle over a flame to pop the dent out?

12. A weather balloon containing $2.0\text{ L}$ of helium at $27\ ^\circ\text{C}$ and $1.0\text{ atm}$ ascends to an altitude where ambient pressure is $0.40\text{ atm}$ and temperature drops to $-33\ ^\circ\text{C}$. Determine the balloon's new volume.

### Answers

1. Temperature is constant $\rightarrow$ Boyle's Law:
   $$P_2 = \frac{P_1V_1}{V_2} = \frac{1.0\text{ atm} \times 600\text{ mL}}{150\text{ mL}} = \mathbf{4.0\text{ atm}}$$
   *Check:* $1.0 \times 600 = 4.0 \times 150 = 600\text{ atm}\cdot\text{mL}$ ✅.

2. (a) $T_1 = 300\text{ K}, \quad T_2 = 87 + 273 = 360\text{ K}$.
   $$P_2 = 4.0\text{ atm} \times \frac{360\text{ K}}{300\text{ K}} = \mathbf{4.8\text{ atm}}$$
   (b) $T_2 = 300\text{ K} \times \frac{7.0}{4.0} = \mathbf{525\text{ K}}$, and $t_2 = 525 - 273 = \mathbf{252\ ^\circ\text{C}}$.
   (c) Heat causes trapped propellant molecules to move with violent speed, causing internal pressure to surge past structural seams, risking an explosion.
   *Check:* $4.0 / 300 = 0.0133$ and $4.8 / 360 = 0.0133$ ✅.

3. $T_1 = 27 + 273 = 300\text{ K}, \quad T_2 = -23 + 273 = 250\text{ K}$.
   $$V_2 = 3.0\text{ L} \times \frac{250\text{ K}}{300\text{ K}} = \mathbf{2.5\text{ L}}$$
   Temperature must be in Kelvin because thermal kinetic energy and gas volume are proportional to absolute zero, not the arbitrary Celsius freezing point.
   *Check:* $3.0 / 300 = 2.5 / 250 = 0.010\text{ L/K}$ ✅.

4. Total pressure at $40\text{ m} = 1.0 + 4.0 = 5.0\text{ atm}$.
   $$V_2 = \frac{5.0\text{ atm} \times 1.5\text{ mL}}{1.0\text{ atm}} = \mathbf{7.5\text{ mL}}$$
   Ascending divers must breathe continuously because expanding trapped air in ascending lungs (Boyle's Law) would otherwise rupture delicate lung alveoli.
   *Check:* $5.0 \times 1.5 = 1.0 \times 7.5 = 7.5\text{ atm}\cdot\text{mL}$ ✅.

5. $P_2 = \frac{1.0\text{ atm} \times 3.0\text{ L}}{3.3\text{ L}} \approx \mathbf{0.909\text{ atm}}$.
   Because $0.909\text{ atm}$ is less than the external atmospheric pressure ($1.0\text{ atm}$), higher ambient pressure pushes air **inward into the lungs** ✅.

6. Using the Combined Gas Equation:
   $$V_2 = \frac{P_1 V_1 T_2}{T_1 P_2} = \frac{2.0 \times 4.0 \times 450}{300 \times 1.0} = \frac{3600}{300} = \mathbf{12.0\text{ L}}$$
   *Check:* $P_1V_1/T_1 = 8.0 / 300 = 0.0267$ and $P_2V_2/T_2 = 12.0 / 450 = 0.0267$ ✅.

7. $T_1 = 127 + 273 = 400\text{ K}$.
   $$V_{\text{STP}} = \frac{1.5\text{ atm} \times 6.0\text{ L} \times 273\text{ K}}{400\text{ K} \times 1.0\text{ atm}} = \frac{2457}{400} \approx \mathbf{6.14\text{ L}}$$
   $$n = \frac{6.1425\text{ L}}{22.4\text{ L/mol}} \approx \mathbf{0.274\text{ mol}}$$
   *Check:* $(1.5 \times 6.0) / 400 = 0.0225$ and $(1.0 \times 6.1425) / 273 = 0.0225$ ✅.

8. (a) $V_{\text{surface}} = \frac{200\text{ atm} \times 15\text{ L}}{1.0\text{ atm}} = \mathbf{3000\text{ L}}$.
   (b) At $30\text{ m}$ ($4.0\text{ atm}$), breathing rate equivalent $= 20\text{ L/min} \times 4.0 = \mathbf{80\text{ L/min}}$.
   $$\text{Supply duration} = \frac{3000\text{ L}}{80\text{ L/min}} = \mathbf{37.5\text{ minutes}}$$
   *Check:* $80 \times 37.5 = 3000\text{ L}$ ✅.

9. At high altitude, ambient external pressure drops to $0.80\text{ atm}$, so the higher internal pressure ($1.00\text{ atm}$) pushes the flexible packaging outward.
   $$V_2 = \frac{1.00\text{ atm} \times 200\text{ mL}}{0.80\text{ atm}} = \mathbf{250\text{ mL}}$$
   *Check:* $1.00 \times 200 = 0.80 \times 250 = 200\text{ atm}\cdot\text{mL}$ ✅.

10. (a) **Gay-Lussac's Law**: Volume ($V$) and mass ($n$) are constant.
    (b) **Boyle's Law**: Temperature ($T$) and mass ($n$) are constant.
    (c) **Charles's Law**: Pressure ($P$) and mass ($n$) are constant.
    (d) **Combined Gas Equation**: Only mass ($n$) is constant; $P, V,$ and $T$ all change simultaneously.

11. (a) $\Delta P = 1.00 - 0.85 = 0.15\text{ atm}$.
    $$\Delta P = 0.15 \times 101325\text{ Pa} \approx \mathbf{15199\text{ Pa}} \quad (\approx 1.52 \times 10^4\text{ Pa})$$
    (b) $A = 300\text{ cm}^2 = 0.03\text{ m}^2$.
    $$\text{Force } F = 15199\text{ N/m}^2 \times 0.03\text{ m}^2 \approx \mathbf{456\text{ N}}$$
    (c) Heating a sealed container risks melting the plastic or generating an internal pressure surge that can cause violent explosive failure. Simply opening the cap allows ambient air to enter and safely pops the dent out.

12. $T_1 = 27 + 273 = 300\text{ K}, \quad T_2 = -33 + 273 = 240\text{ K}$.
    $$V_2 = \frac{1.0\text{ atm} \times 2.0\text{ L} \times 240\text{ K}}{300\text{ K} \times 0.40\text{ atm}} = \frac{480}{120} = \mathbf{4.0\text{ L}}$$
    *Check:* $P_1V_1/T_1 = (1.0 \times 2.0) / 300 = 0.00667$ and $P_2V_2/T_2 = (0.40 \times 4.0) / 240 = 0.00667$ ✅.

---

Elena carefully loosened the cap of her crushed water bottle. With a soft *whoosh*, ambient air flowed inside, and the plastic walls popped smoothly back to their original cylindrical shape. "Pressure equalised!" she beamed. Mr. Spencer nodded approvingly: "You have now mastered how microscopic molecular collisions govern the macroscopic world of gases."

Congratulations! You have completed all six topics of **Gas Laws**, connecting kinetic molecular theory to rigorous equations and everyday life.

---

## Chapter Summary: Gas Laws

| Topic | Core Concepts | Key Takeaway |
|---|---|---|
| **Topic 1: Behaviour of Gases** | Pressure ($P$), Volume ($V$), Temperature ($T$), and Amount ($n$); kinetic collisions on walls | Pressure is force per unit area generated by particle impacts; standard conversion factors: $1\text{ atm} = 760\text{ mm Hg} \approx 1.013 \times 10^5\text{ Pa}$; Kelvin scale $T = t + 273$. |
| **Topic 2: Boyle's Law** | Inverse relationship between pressure and volume at constant temperature | $P_1V_1 = P_2V_2$; halving volume doubles wall collision frequency, doubling pressure; $P-V$ graph is a hyperbola; $P$ vs $1/V$ is a straight line through the origin. |
| **Topic 3: Charles's Law** | Direct relationship between volume and absolute temperature at constant pressure | $\frac{V_1}{T_1} = \frac{V_2}{T_2}$; heating increases particle velocity; boundaries expand to maintain pressure; extrapolation reveals Absolute Zero ($-273\ ^\circ\text{C} = 0\text{ K}$). |
| **Topic 4: Pressure-Temperature & Combined Equation** | Gay-Lussac's Law inside rigid containers; unifying master formula | $\frac{P_1}{T_1} = \frac{P_2}{T_2}$ at constant volume; Combined Gas Equation: $\frac{P_1V_1}{T_1} = \frac{P_2V_2}{T_2}$; never heat sealed cans or cylinders. |
| **Topic 5: STP, Avogadro's Law & Molar Volume** | Standard conditions ($273\text{ K}, 1\text{ atm}$); equal volumes equal molecules; $22.4\text{ L}$ molar volume | $1\text{ mole of any gas at STP} = 22.4\text{ L}$; gas density $\rho = M / 22.4\text{ g/L}$; water electrolysis yields $\text{H}_2 : \text{O}_2 = 2 : 1$ by volume. |
| **Topic 6: Gas Laws in Daily Life & Summary** | Decision framework; mountain bottles; breathing; scuba diving; comprehensive safety | Check what is constant; apply the appropriate law; keep temperatures in Kelvin; always observe gas safety around pressurized containers. |

**What's next?** In our next chapter, **"Hydrogen"**, we will explore the simplest, lightest, and most abundant element in the universe—the very gas whose extraordinary buoyancy and chemical reactivity sparked the birth of modern chemistry.