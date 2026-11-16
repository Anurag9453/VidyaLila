# Chapter: Gas Laws (Part 3)

> **Class:** 9 | **Subject:** Chemistry
> **Previous link in this series:** [gas-laws-part2.md](gas-laws-part2.md) (which covered Boyle's Law: syringe experiment, $P-V$ hyperbola, and $P$ vs $1/V$ straight line under constant temperature and fixed gas amount). Chapter introduction: [gas-laws.md](gas-laws.md). Kelvin absolute temperature: [matter-in-our-surroundings-part3.md](../matter-in-our-surroundings/matter-in-our-surroundings-part3.md). Physics of thermal expansion: [heat-and-temperature-part2.md](../../physics/heat-and-temperature/heat-and-temperature-part2.md).
> **Topics covered in this file:**
> 3. Charles's Law: Temperature and Volume

---

# Topic 3: Charles's Law: Temperature and Volume

In Topic 2, we examined Boyle's Law: **holding temperature and gas quantity constant**, increasing pressure causes volume to shrink, with $P \times V = \text{constant}$. We changed one property while locking down the others. Today, we choose our second pair: **hold pressure constant (along with gas quantity), and vary the temperature.** The central question: by how much does a gas expand when warmed? Is there an exact, quantifiable mathematical law governing thermal expansion in gases? Let us head out to an open festival ground to find out.

---

## A Giant Hot-Air Balloon at the Festival Grounds

It was 7:00 PM on a crisp autumn evening. At the city festival grounds, a ten-storey-tall, vibrant **hot-air balloon** lay draped across the grass. Suspended beneath its envelope was a wicker basket fitted with an enormous propane burner. Dr. Charles and his niece Elena stood among the crowd of onlookers.

The pilot twisted a brass valve, sparking an immense *whoosh* of roaring flame that shot upward into the open throat of the balloon. Within minutes, the loose, wrinkled nylon fabric began to breathe, billowed outward, stood completely upright, and gently lifted its wicker basket off the grass.

Elena's eyes went wide. "Uncle, that balloon is filled with ordinary air, right? The same air surrounding us right now! Why does turning on the burner make it float into the sky? What does heat do to air?"

Dr. Charles smiled warmly. "A brilliant question, Elena. That balloon does not rely on exotic light gases like helium or hydrogen. It contains standard atmospheric air. But that air is **hot**. And whenever you heat a gas, something remarkably reliable occurs: **it expands**. This expansion is so predictable that in 1787, French scientist and aviation pioneer **Jacques Charles** measured it and formulated a fundamental physical law. Today, we will explore that exact relationship: how temperature governs gas volume."

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Charles's Law** | At constant pressure, the volume of a fixed mass of gas is directly proportional to its Kelvin temperature | $V / T = \text{constant}$ |
| **Constant pressure** | A condition where external pressure on the gas remains unchanged, allowing the gas to expand or contract freely | An open-throated balloon, a freely moving piston |
| **Directly proportional** | A relationship where multiplying one variable by a factor multiplies the other variable by the exact same factor | Doubling $T$ from $300\text{ K}$ to $600\text{ K}$ doubles $V$ |
| **Absolute zero** | The theoretical lowest possible temperature ($0\text{ K} \approx -273\ ^\circ\text{C}$), where molecular kinetic energy reaches its minimum | Starting point of the Kelvin scale |
| **Extrapolation** | Extending an experimental trend line beyond measured data to predict unmeasured values | Projecting the $V-T$ line backward to $-273\ ^\circ\text{C}$ |
| **Liquefaction (Liquefy)** | The phase transition of a gas into a liquid | Nitrogen liquefying at $-196\ ^\circ\text{C}$ |
| **Burner** | A propane combustion nozzle that produces a controlled flame to heat air inside a balloon | Hot-air balloon heating assembly |

---

## Part A: Charles's Law: Heat a Gas, It Expands

Recall from physics that all states of matter experience thermal expansion when heated. However, **gases expand far more dramatically than solids or liquids** for the same rise in temperature because their particles are not locked into rigid lattices or held tightly by cohesive intermolecular attractions.

> **Charles's Law:** At constant pressure, the volume of a given mass of dry gas is directly proportional to its absolute (Kelvin) temperature.
> Mathematically:
> $$V \propto T \quad \text{or} \quad \frac{V}{T} = \text{constant} \quad (\text{with } T \text{ in Kelvin})$$
> For a gas transitioning from State 1 to State 2 at constant pressure:
> $$\frac{V_1}{T_1} = \frac{V_2}{T_2}$$

Read this relationship as: *"Initially, the gas occupies volume $V_1$ at temperature $T_1$. When heated or cooled to temperature $T_2$, its volume adjusts to $V_2$, provided external pressure and total gas mass remain strictly constant."* If the Kelvin temperature doubles, volume doubles. If the Kelvin temperature is halved, volume is cut in half.

### Jacques Charles's Original Fractional Formulation

Careful laboratory experiments demonstrated that for every $1\ ^\circ\text{C}$ rise in temperature above $0\ ^\circ\text{C}$, a gas expands by approximately **$\frac{1}{273}$ of its volume at $0\ ^\circ\text{C}$** (at constant pressure).
$$V_t = V_0 \left(1 + \frac{t}{273}\right) = V_0 \left(\frac{273 + t}{273}\right) = V_0 \left(\frac{T}{273}\right)$$
This number $273$ is precisely the offset connecting the Celsius and Kelvin scales: $T\ (\text{K}) = t\ (^\circ\text{C}) + 273$. If a gas occupies $273\text{ mL}$ at $0\ ^\circ\text{C}$, it will expand to $274\text{ mL}$ at $1\ ^\circ\text{C}$, $300\text{ mL}$ at $27\ ^\circ\text{C}$, and $373\text{ mL}$ at $100\ ^\circ\text{C}$.

### An Unbreakable Rule: Temperatures Must Be in Kelvin

In every Charles's Law calculation, **$T$ must always be converted to Kelvin**. Why? Because proportional concepts like "doubling" or "halving" are mathematically valid only when zero represents the **true absolute absence of thermal motion**. Zero degrees Celsius ($0\ ^\circ\text{C}$) is merely the freezing point of water—an arbitrary benchmark; at $0\ ^\circ\text{C}$, gas particles still possess substantial thermal kinetic energy. Plugging Celsius values directly into $V_1/T_1 = V_2/T_2$ yields absurd, incorrect numbers (as demonstrated in Example 2). Always remember:
$$T\ (\text{K}) = t\ (^\circ\text{C}) + 273$$

For instance, suppose $V_1 = 2.0\text{ L}$ at $T_1 = 300\text{ K}$ ($27\ ^\circ\text{C}$). If warmed to $T_2 = 360\text{ K}$ ($87\ ^\circ\text{C}$):
$$V_2 = V_1 \times \frac{T_2}{T_1} = 2.0\text{ L} \times \frac{360\text{ K}}{300\text{ K}} = \mathbf{2.4\text{ L}}$$
The Kelvin temperature increased by a factor of $1.2$ ($360/300$), so the volume expanded by the exact same factor of $1.2$ ($2.4/2.0$).

---

## Part B: Why Does a Hot-Air Balloon Rise?

Let us return to Elena's question. A hot-air balloon features a large opening at its base, known as the **throat**. Because the base is wide open to the atmosphere, the internal air pressure automatically equalises with the outside atmospheric pressure: the **constant pressure condition** is naturally satisfied!

When the propane burner roars, the air inside the envelope heats up rapidly. According to Charles's Law, this air expands. But the nylon envelope has a fixed physical volume. Where does the expanding air go? **A significant fraction of the expanding air spills out through the open bottom throat.**

```
              _.-"""""""-._
            .'   o   o   o  '.
           /  o   o   o   o   \
          (   o   o   o   o    )     o = heated air molecules
           \  o   o   o   o   /            (fast-moving, spaced far apart)
            '.   o   o   o  .'
              '-._       _.-'
                 /\     /\
                /  \   /  \          suspension rigging
               /    \ /    \
              +-------------+
              [    ^^^^^    ]        wicker basket; ^^^ = propane flame
              [_____________]        (balloon throat at base remains open)
```

> **Figure 3.1** – Hot-air balloon mechanics. The base throat remains open, maintaining constant internal pressure equal to ambient air. The burner heats the trapped air, causing it to expand; excess air spills out of the bottom. The remaining air inside has fewer particles in the same space, making it significantly less dense than the surrounding cold air.

Now consider the result:
1. The envelope still encloses the same volume of space ($V$ is constant).
2. However, because air spilled out, **fewer air molecules remain inside** ($n$ has decreased).
3. Therefore, the **density** ($\text{mass}/\text{volume}$) of the hot air inside becomes significantly lower than the density of the cool ambient air outside.

By Archimedes' principle of buoyancy, when the combined weight of the envelope, basket, passengers, and less-dense hot air is less than the weight of the cooler outside air displaced, a net **upward buoyant force** lifts the balloon effortlessly into the sky! To descend, the pilot simply throttles back the burner; the trapped air cools, contracts, ambient air flows back in, density climbs, and the balloon settles gently downward.

> **Safety Reminder:** Hot-air ballooning relies on specialised equipment and licensed aeronauts. **Never attempt to heat containers with open flames at home or school.** Sealed containers like aerosol spray cans, butane canisters, and vehicle tyres must never be heated or exposed to blazing sunlight; without an open throat to relieve expansion, heating produces explosive pressure spikes (Topic 4).

---

## Part C: The Graph: Volume and Temperature in a Straight Line

Suppose we take a gas sample occupying $273\text{ mL}$ at $0\ ^\circ\text{C}$ and heat it under constant pressure. By Charles's Law, at any temperature $t\ ^\circ\text{C}$, its volume is $(273 + t)\text{ mL}$—expanding by exactly $1\text{ mL}$ for every $1\ ^\circ\text{C}$ rise.

If we plot temperature ($^\circ\text{C}$) on the horizontal axis and volume ($\text{mL}$) on the vertical axis, we obtain a remarkably clean straight line:

```
 500 +                                                   
     :                                                 ##
     :                                               ##  
     :                                            ###    
 400 +                                          ##       
     :                                       ###         
     :                                     ##            
     :                                  ###              
 300 +                                ##                 
     :                             .##                   
     :                           ..                      
     :                        ...                        
 200 +                      ..                           
     :                   ...                             
     :                 ..                                
     :              ...                                  
 100 +            ..                                     
     :         ...                                       
     :       ..                                          
     :    ...                                            
   0 +   O                                               
     ++---------+---------+---------+---------+---------+
      -300      -200      -100      0         100       200  Temperature (°C)

   # = measured experimental data (0 °C to 200 °C)
   . = backward extrapolation line
   O = theoretical intercept where volume reaches zero (-273 °C)
```

> **Figure 3.2** – Plot of gas volume vs temperature in degrees Celsius ($^\circ\text{C}$). The measured points from $0\ ^\circ\text{C}$ to $200\ ^\circ\text{C}$ form a straight line. When projected backward (**extrapolated**), the line intercepts the temperature axis at **$-273\ ^\circ\text{C}$** ($0\text{ K}$), where theoretical gas volume would reach zero. (If plotted against Kelvin temperature $T$, the line passes directly through the origin $(0, 0)$.)

### Absolute Zero: Where the Line Meets the Axis

The most extraordinary feature of this graph is universal across all gases: whether you test helium, oxygen, nitrogen, or air—at high pressure or low pressure—extrapolating the straight line backward points to the exact same temperature where the volume theoretically drops to zero: **$-273\ ^\circ\text{C}$** (more precisely, $-273.15\ ^\circ\text{C}$).

This unique point is designated **Absolute Zero** ($0\text{ K}$). It represents the absolute minimum temperature in the universe—a state where all classical molecular kinetic motion ceases. Because temperature cannot fall below zero molecular motion, **temperatures below $0\text{ K}$ cannot exist**. Consequently, the Kelvin scale contains no negative numbers!

Two essential scientific qualifications to keep in mind:
1. **The line is an extrapolation:** Scientists measured real gas volumes across accessible laboratory temperatures ($0\ ^\circ\text{C}$ to $200\ ^\circ\text{C}$) and mathematically extended the ruler line backward to find where it crossed the axis.
2. **Real gases never reach zero volume:** Long before reaching $-273\ ^\circ\text{C}$, attractive intermolecular forces pull gas particles together, causing them to **condense into liquids** (nitrogen liquefies at $-196\ ^\circ\text{C}$, oxygen at $-183\ ^\circ\text{C}$, and helium at $-269\ ^\circ\text{C}$). Once a substance liquefies, gas laws cease to apply. The concept of "zero volume" is a mathematical consequence of an ideal gas model, not a physical reality. Absolute zero serves as the ultimate physical floor of temperature.

---

## Part D: The Molecular Picture: Why Does a Gas Expand?

Let us connect this macroscopic behaviour to our microscopic particle model:

1. When a gas is heated, thermal energy transfers into kinetic energy; the gas particles **move faster**.
2. Faster particles collide with container walls **more forcefully and more frequently**. If the container volume were clamped shut, pressure would immediately surge.
3. However, under **constant pressure**, the walls are movable (such as a light friction-free piston or flexible balloon fabric). The intensified bombardment pushes the movable boundary **outward**.
4. As the volume expands, particles must travel greater distances between wall impacts. The collision rate per unit area drops until the outward push once again precisely balances the external atmospheric pressure.

In short: cold gas particles move slowly and need only a small volume to maintain atmospheric pressure; hot gas particles move rapidly and require a much larger volume to sustain that same atmospheric pressure. Notice that heating **does not alter the number of particles** ($n$ is constant); it merely increases their speed and the space they occupy.

---

## Part E: Charles's Law in Daily Life

- **Hot-air balloons:** Heating trapped air forces expansion and expulsion of excess air, reducing overall density and creating buoyant lift.
- **Balloons in summer vs winter:** A party balloon inflated indoors at $25\ ^\circ\text{C}$ visibly shrinks when carried outside into freezing winter air at $-5\ ^\circ\text{C}$. When brought back into a warm room, the trapped air re-expands to its original size.
- **Natural convection currents:** Sunlight warms the Earth's surface, which in turn warms the air directly above it. That warm air expands, decreases in density, and rises, generating thermal updrafts used by soaring eagles, gliders, and weather circulation systems.
- **Why rigid containers do not follow Charles's Law:** A rigid steel cylinder cannot expand. Heating a sealed can cannot increase volume; instead, the collisions mount inside a fixed space, causing **pressure to spike dangerously**—the subject of Topic 4.

**Classroom / Home Investigation (with adult supervision): Balloon on a Warm Water Bath**

*Materials:* An empty, flexible plastic water bottle ($500\text{ mL}$), a standard party balloon, two bowls (one with lukewarm water at $\approx 45\ ^\circ\text{C}$, one with ice water at $\approx 5\ ^\circ\text{C}$), a piece of string, and a ruler.

1. Stretch the uninflated balloon over the open mouth of the empty plastic bottle to seal the air inside. The flexible rubber membrane allows the trapped air to expand or contract freely under roughly constant room pressure.
2. An adult prepares a bowl of warm tap water ($\approx 45\ ^\circ\text{C}$—comfortably warm to the touch, **never boiling**). Stand the bottle upright in the warm water.
3. Within two minutes, observe the balloon: it gradually **inflates and stands upright** as the warmed air inside the bottle expands. Measure its circumference with string.
4. Transfer the bottle into the bowl of ice water. Within minutes, the balloon **deflates and puckers inward** as the chilled air contracts.

```
   WARM WATER BATH (~45 °C)              ICE WATER BATH (~5 °C)

          .---.                                  .-.
         /     \   balloon inflates             (   )   balloon deflates
         \     /                                 '-'
          )   (                                   ) (
         (     )                                 (   )
         [     ]  plastic bottle                 [   ]  plastic bottle
         [_____]                                 [___]
   ~~~~~~~~~~~~~~~~~~~~~~~~~            ~~~~~~~~~~~~~~~~~~~~~~~~~
      warm water bath                      chilled ice water
```

> **Figure 3.3** – Observing Charles's Law: air trapped in a plastic bottle expands when placed in warm water, inflating the balloon. In ice water, the air contracts, deflating the balloon.

---

## Part F: Solved Examples

*(In all problems, pressure and quantity of gas are constant. Temperature must always be converted to Kelvin: $T\ (\text{K}) = t\ (^\circ\text{C}) + 273$.)*

**Example 1: Thermal expansion at constant pressure.** A $2.0\text{ L}$ sample of gas is at $27\ ^\circ\text{C}$. If it is heated at constant pressure to $87\ ^\circ\text{C}$, calculate its new volume.
- Convert temperatures to Kelvin:
  $$T_1 = 27 + 273 = 300\text{ K}, \quad T_2 = 87 + 273 = 360\text{ K}$$
- Using Charles's Law:
  $$V_2 = V_1 \times \frac{T_2}{T_1} = 2.0\text{ L} \times \frac{360\text{ K}}{300\text{ K}} = \mathbf{2.4\text{ L}}$$
- *Check:* $V_1 / T_1 = 2.0 / 300 = 0.00667\text{ L/K}$ and $V_2 / T_2 = 2.4 / 360 = 0.00667\text{ L/K}$ ✅. The Kelvin temperature climbed by $20\%$ ($360/300 = 1.2$), so volume climbed by $20\%$ ($2.0 \times 1.2 = 2.4$).

**Example 2: The disaster of using Celsius directly.** What error occurs if one mistakenly uses Celsius in Example 1?
$$\text{Incorrect calculation: } V_2 = 2.0 \times \frac{87}{27} \approx \mathbf{6.44\text{ L}} \quad (\text{Completely wrong!})$$
The temperature only rose by $60\ ^\circ\text{C}$, which represents a modest $20\%$ increase in absolute kinetic energy. A volume of $6.44\text{ L}$ would imply more than a three-fold expansion! This demonstrates why Celsius must never be plugged directly into ratio formulas.

**Example 3: Volume contraction upon cooling.** A gas sample occupies $600\text{ mL}$ at $47\ ^\circ\text{C}$. It is cooled at constant pressure to $-33\ ^\circ\text{C}$. Find the new volume.
- Convert to Kelvin:
  $$T_1 = 47 + 273 = 320\text{ K}, \quad T_2 = -33 + 273 = 240\text{ K}$$
- Solve for $V_2$:
  $$V_2 = 600\text{ mL} \times \frac{240\text{ K}}{320\text{ K}} = \mathbf{450\text{ mL}}$$
- *Check:* Ratio $T_2 / T_1 = 240 / 320 = 3/4$. Thus, $V_2 = 600 \times (3/4) = 450\text{ mL}$ ✅.

**Example 4: Calculating required temperature.** A sample of gas has a volume of $300\text{ mL}$ at $27\ ^\circ\text{C}$. To what temperature in $^\circ\text{C}$ must it be heated at constant pressure so that its volume expands to $450\text{ mL}$?
- $T_1 = 27 + 273 = 300\text{ K}$.
- $V_2 / V_1 = 450 / 300 = 1.5$.
  $$T_2 = T_1 \times \frac{V_2}{V_1} = 300\text{ K} \times 1.5 = 450\text{ K}$$
- Convert back to Celsius:
  $$t_2 = 450 - 273 = \mathbf{177\ ^\circ\text{C}}$$
- *Check:* $450 / 450 = 1.0$ and $300 / 300 = 1.0$ ✅. Note that while volume increased by $1.5\times$, the Celsius temperature rose from $27\ ^\circ\text{C}$ to $177\ ^\circ\text{C}$ ($6.56\times$), proving once again that Celsius does not track proportionality.

**Example 5: Verifying experimental data.** A student records gas volumes at various temperatures under constant pressure:

| Temperature $T$ (K) | 250 | 300 | 350 | 400 |
|---|---|---|---|---|
| Volume $V$ (L) | 5.0 | 6.0 | 7.0 | 8.0 |

- Calculate the quotient $V / T$:
  $$5.0 / 250 = 0.020\text{ L/K}, \quad 6.0 / 300 = 0.020\text{ L/K}, \quad 7.0 / 350 = 0.020\text{ L/K}, \quad 8.0 / 400 = 0.020\text{ L/K}$$
- The constant ratio $0.020\text{ L/K}$ confirms excellent agreement with Charles's Law. Each $1\text{ K}$ increase expands the gas by $0.020\text{ L}$ ($20\text{ mL}$).

**Example 6: Fractional expansion from 0 °C.** A gas sample occupies $273\text{ mL}$ at $0\ ^\circ\text{C}$. Find its volume at $1\ ^\circ\text{C}$, $27\ ^\circ\text{C}$, and $100\ ^\circ\text{C}$ under constant pressure.
- At $1\ ^\circ\text{C}$ ($274\text{ K}$): $V = 273 \times (274 / 273) = \mathbf{274\text{ mL}}$
- At $27\ ^\circ\text{C}$ ($300\text{ K}$): $V = 273 \times (300 / 273) = \mathbf{300\text{ mL}}$
- At $100\ ^\circ\text{C}$ ($373\text{ K}$): $V = 273 \times (373 / 273) = \mathbf{373\text{ mL}}$
- *Check:* Every $1\ ^\circ\text{C}$ increase adds exactly $1\text{ mL}$ (which is $1/273$ of $V_0$), tracing Figure 3.2 perfectly ✅.

**Example 7: Hot-air balloon volume and air loss.** A hot-air balloon envelope holds $1000\text{ m}^3$ of air initially at $27\ ^\circ\text{C}$. The burner heats the trapped air to $127\ ^\circ\text{C}$ at constant atmospheric pressure.
(a) If the envelope could expand without limit, what volume would the heated air occupy?
(b) Since the envelope has a fixed capacity of $1000\text{ m}^3$ and an open throat, what fraction and percentage of the original air mass escapes?
- $T_1 = 27 + 273 = 300\text{ K}, \quad T_2 = 127 + 273 = 400\text{ K}$.
- (a) Unconstrained volume:
  $$V_2 = 1000\text{ m}^3 \times \frac{400\text{ K}}{300\text{ K}} = \mathbf{1333.3\text{ m}^3}$$
- (b) Fraction of air remaining inside:
  $$\text{Fraction remaining} = \frac{1000}{1333.3} = \frac{300}{400} = \mathbf{0.75} \quad (75\%)$$
  $$\text{Fraction escaped} = 1 - 0.75 = \mathbf{0.25} \quad (\mathbf{25\%})$$
- *Check:* Heating to $400\text{ K}$ reduces internal air mass by $25\%$, creating the buoyant lift.

**Example 8: Approximate buoyant lift.** At $0\ ^\circ\text{C}$ ($273\text{ K}$), air density is roughly $1.29\text{ kg/m}^3$. At constant pressure, gas density is inversely proportional to Kelvin temperature ($\rho \propto 1/T$). Estimate the density of air at $27\ ^\circ\text{C}$ ($300\text{ K}$) and at $127\ ^\circ\text{C}$ ($400\text{ K}$), and find the buoyant lift generated by a $1000\text{ m}^3$ balloon envelope.
- At $27\ ^\circ\text{C}$: $\rho_1 = 1.29 \times (273 / 300) \approx \mathbf{1.174\text{ kg/m}^3}$
- At $127\ ^\circ\text{C}$: $\rho_2 = 1.29 \times (273 / 400) \approx \mathbf{0.880\text{ kg/m}^3}$
- Lift for $1000\text{ m}^3$:
  $$\Delta m = (1.174 - 0.880) \times 1000 \approx \mathbf{294\text{ kg}}$$
- Heating $1000\text{ m}^3$ of air to $127\ ^\circ\text{C}$ generates approximately $294\text{ kg}$ of buoyant lift!

**Example 9: Determining Absolute Zero from experimental slope.** A sealed capillary apparatus records gas volumes of $300\text{ mL}$ at $27\ ^\circ\text{C}$ and $400\text{ mL}$ at $127\ ^\circ\text{C}$ under constant pressure. Find the temperature in $^\circ\text{C}$ at which the straight line crosses $V = 0$.
- Rate of expansion:
  $$\text{Slope} = \frac{400 - 300}{127 - 27} = \frac{100\text{ mL}}{100\ ^\circ\text{C}} = 1.0\text{ mL/}^\circ\text{C}$$
- To reduce volume from $300\text{ mL}$ down to $0\text{ mL}$, volume must decrease by $300\text{ mL}$, requiring a temperature drop of $300\ ^\circ\text{C}$:
  $$t_{\text{zero}} = 27\ ^\circ\text{C} - 300\ ^\circ\text{C} = \mathbf{-273\ ^\circ\text{C}}$$
- *Check:* In Kelvin, $V/T = 300/300 = 1.0$; $V = 0$ corresponds to $T = 0\text{ K} = -273\ ^\circ\text{C}$ ✅.

**Example 10: The fallacy of "doubling" Celsius.** A $5.0\text{ L}$ sample of air is at $20\ ^\circ\text{C}$. Its temperature is raised to $40\ ^\circ\text{C}$ ("doubling" the Celsius reading). Does the volume double?
- $T_1 = 20 + 273 = 293\text{ K}, \quad T_2 = 40 + 273 = 313\text{ K}$.
  $$V_2 = 5.0\text{ L} \times \frac{313\text{ K}}{293\text{ K}} \approx \mathbf{5.34\text{ L}}$$
- *Check:* The volume increases by only $6.8\%$ ($5.34\text{ L}$), nowhere near double ($10\text{ L}$). For volume to double, the Kelvin temperature would have to double: $293\text{ K} \times 2 = 586\text{ K}$ ($313\ ^\circ\text{C}$).

**Example 11: Cold temperature calculation.** A $1.0\text{ L}$ gas sample is at $27\ ^\circ\text{C}$. It is cooled at constant pressure in a deep freezer to $-23\ ^\circ\text{C}$. Calculate the correct final volume, and show the absurdity of attempting the calculation in Celsius.
- Correct method:
  $$T_1 = 300\text{ K}, \quad T_2 = -23 + 273 = 250\text{ K}$$
  $$V_2 = 1.0\text{ L} \times \frac{250}{300} = \mathbf{0.83\text{ L}}$$
- If attempted in Celsius:
  $$V_2 = 1.0 \times \frac{-23}{27} \approx \mathbf{-0.85\text{ L}} \quad (\text{A negative volume is physically impossible!})$$

---

## Common Pitfalls to Avoid

1. **Mistake 1: Substituting Celsius temperatures directly into $V_1/T_1 = V_2/T_2$**
   Always convert temperatures to Kelvin ($T = t + 273$). Calculating in Celsius produces grossly erroneous answers (Example 2) or physically impossible negative volumes (Example 11).

2. **Mistake 2: Believing that doubling the Celsius temperature doubles gas volume**
   Doubling Celsius from $20\ ^\circ\text{C}$ to $40\ ^\circ\text{C}$ is merely a tiny shift from $293\text{ K}$ to $313\text{ K}$ ($+6.8\%$), yielding only a $6.8\%$ volume expansion, not $100\%$ (Example 10).

3. **Mistake 3: Applying Charles's Law to rigid containers**
   Charles's Law strictly requires **constant pressure**. Inside a rigid steel tank, volume cannot change ($V = \text{constant}$); heating will instead cause pressure to soar (Topic 4).

4. **Mistake 4: Claiming that real gases reach zero volume at absolute zero**
   Absolute zero is determined by **extrapolating** ideal gas behaviour. All real gases condense into liquids and freeze into solids long before reaching $0\text{ K}$.

5. **Mistake 5: Thinking heating creates additional gas particles**
   Heating increases particle velocity, not particle count. The number of moles ($n$) remains strictly unchanged in a closed system.

6. **Mistake 6: Confusing Boyle's Law and Charles's Law mathematical forms**
   Boyle's Law is an **inverse** relationship ($P_1V_1 = P_2V_2$ at constant $T$). Charles's Law is a **direct** relationship ($V_1/T_1 = V_2/T_2$ at constant $P$). As temperature increases, volume increases; as pressure increases, volume decreases.

---

## Quick Recap

- **Charles's Law:** At constant pressure and constant gas mass, volume is directly proportional to absolute Kelvin temperature: $\frac{V}{T} = \text{constant}$ or $\frac{V_1}{T_1} = \frac{V_2}{T_2}$ (Jacques Charles, 1787).
- **Kelvin conversion:** $T\ (\text{K}) = t\ (^\circ\text{C}) + 273$. Using Celsius ruins the proportionality.
- **Absolute Zero:** Extrapolating the linear $V-T$ graph backward intercepts the temperature axis at **$-273\ ^\circ\text{C}$ ($0\text{ K}$)**, the theoretical lower limit of temperature where molecular motion ceases.
- **Microscopic mechanism:** Heating speeds up particles; to maintain constant pressure, the container boundaries must expand so that collision frequency per unit area stays balanced.
- **Hot-air balloons:** Expanding air spills out of the open throat, reducing internal air density below ambient air density and generating buoyant lift.
- **Safety caution:** Never heat sealed, rigid containers (aerosol cans, gas cylinders, tyres).

---

## Practice Questions

1. A cylinder fitted with a frictionless movable piston contains $800\text{ mL}$ of air at $17\ ^\circ\text{C}$. The air is warmed to $77\ ^\circ\text{C}$ at constant pressure. Determine the new volume (round to the nearest $\text{mL}$).

2. A weather balloon contains $3.0\text{ L}$ of gas at $37\ ^\circ\text{C}$. If it is cooled to $2\ ^\circ\text{C}$ at constant pressure, calculate its new volume (round to two decimal places) and state the percentage volume reduction (one decimal place).

3. A sample of gas occupies $250\text{ cm}^3$ at $20\ ^\circ\text{C}$. It is heated to $100\ ^\circ\text{C}$ at constant pressure. Calculate its new volume. Is $100\ ^\circ\text{C}$ five times $20\ ^\circ\text{C}$, and did the volume increase five-fold? Explain.

4. A $5.0\text{ L}$ gas sample at $7\ ^\circ\text{C}$ expands at constant pressure until its volume reaches $7.0\text{ L}$. What is its final temperature in $^\circ\text{C}$?

5. A gas volume of $120\text{ mL}$ at $127\ ^\circ\text{C}$ is cooled to $27\ ^\circ\text{C}$ at constant pressure. Calculate the final volume, and state what fraction of the original volume remains.

6. A student records the following data at constant pressure: $27\ ^\circ\text{C}$ ($15.0\text{ mL}$), $77\ ^\circ\text{C}$ ($17.5\text{ mL}$), $127\ ^\circ\text{C}$ ($20.0\text{ mL}$), and $177\ ^\circ\text{C}$ ($24.0\text{ mL}$). Convert each temperature to Kelvin and compute the ratio $V/T$. Which reading does not follow Charles's Law?

7. An empty plastic bottle has a balloon fitted over its neck, trapping $1.5\text{ L}$ of air at $25\ ^\circ\text{C}$. Placed in a warm water bath at $45\ ^\circ\text{C}$, estimate the new volume and the percentage increase. Why does the visual change appear modest?

8. A hot-air balloon envelope holds $2000\text{ m}^3$ of air. The air is heated from $27\ ^\circ\text{C}$ to $77\ ^\circ\text{C}$ at constant atmospheric pressure, and the open throat allows air to escape so that envelope volume stays at $2000\text{ m}^3$. What fraction of the original air mass remains inside, and what percentage escaped? (Round to one decimal place.)

9. A student asserts: *"Because $100\ ^\circ\text{C}$ is double $50\ ^\circ\text{C}$, a gas at $100\ ^\circ\text{C}$ must have double the volume of the same gas at $50\ ^\circ\text{C}$ under constant pressure."* Prove by calculation why this statement is false, and find the true volume expansion ratio.

10. A gas sample occupies $232\text{ mL}$ at $17\ ^\circ\text{C}$ and $272\text{ mL}$ at $67\ ^\circ\text{C}$ under constant pressure. Use these two data points to determine the temperature in $^\circ\text{C}$ at which the straight line extrapolates to zero volume. What is this temperature called, and why can real gases never reach zero volume?

11. An LPG cylinder must never be exposed to open flames or direct summer sun. A friend remarks: *"Charles's Law says the gas will simply expand, so the cylinder is safe."* Explain in 3 to 4 sentences why this reasoning is fatally flawed.

12. State whether each statement is True or False, and correct any false statements:
    (a) Charles's Law calculations can be performed directly using temperatures in degrees Celsius ($^\circ\text{C}$).
    (b) At constant pressure, doubling the Kelvin temperature doubles the gas volume.
    (c) Heating a gas at constant pressure increases the total number of particles inside the sample.
    (d) A real gas can be chilled down to $0\text{ K}$ while maintaining its gaseous state.

### Answers

1. $T_1 = 17 + 273 = 290\text{ K}, \quad T_2 = 77 + 273 = 350\text{ K}$.
   $$V_2 = 800 \times \frac{350}{290} \approx \mathbf{966\text{ mL}}$$
   *Check:* $800 / 290 \approx 2.759$ and $966 / 350 \approx 2.760$ ✅.

2. $T_1 = 37 + 273 = 310\text{ K}, \quad T_2 = 2 + 273 = 275\text{ K}$.
   $$V_2 = 3.0 \times \frac{275}{310} \approx \mathbf{2.66\text{ L}}$$
   Contraction $= 3.0 - 2.661 = 0.339\text{ L}$.
   Percentage contraction $= \frac{0.339}{3.0} \times 100 \approx \mathbf{11.3\%}$ ✅.

3. $T_1 = 293\text{ K}, \quad T_2 = 373\text{ K}$.
   $$V_2 = 250 \times \frac{373}{293} \approx \mathbf{318.3\text{ cm}^3}$$
   While $100$ is numerically five times $20$ in Celsius, the volume expanded by only a factor of $318.3 / 250 = \mathbf{1.27}$ ($27\%$), because thermal kinetic energy depends on Kelvin ($373 / 293 = 1.27$). Celsius ratios are scientifically meaningless.

4. $T_1 = 7 + 273 = 280\text{ K}$.
   $$T_2 = 280 \times \frac{7.0}{5.0} = 392\text{ K}$$
   $$t_2 = 392 - 273 = \mathbf{119\ ^\circ\text{C}}$$
   *Check:* $5.0 / 280 = 0.0179$ and $7.0 / 392 = 0.0179$ ✅.

5. $T_1 = 127 + 273 = 400\text{ K}, \quad T_2 = 27 + 273 = 300\text{ K}$.
   $$V_2 = 120 \times \frac{300}{400} = \mathbf{90\text{ mL}}$$
   Remaining fraction $= 90 / 120 = \mathbf{3/4}$ ($75\%$).
   *Check:* $90 / 300 = 0.30$ and $120 / 400 = 0.30$ ✅.

6. Temperatures in Kelvin: $300\text{ K}, 350\text{ K}, 400\text{ K}, 450\text{ K}$.
   Ratios $V/T$:
   - $15.0 / 300 = 0.0500$
   - $17.5 / 350 = 0.0500$
   - $20.0 / 400 = 0.0500$
   - $24.0 / 450 \approx 0.0533$
   **The fourth measurement ($177\ ^\circ\text{C}, 24.0\text{ mL}$) is erroneous.** At $450\text{ K}$, the expected volume should be $0.0500 \times 450 = \mathbf{22.5\text{ mL}}$ ✅.

7. $T_1 = 298\text{ K}, \quad T_2 = 318\text{ K}$.
   $$V_2 = 1.5 \times \frac{318}{298} \approx \mathbf{1.60\text{ L}}$$
   Increase $= 1.60 - 1.50 = 0.10\text{ L}$ ($\mathbf{6.7\%}$). The visual inflation looks modest because a $20\ ^\circ\text{C}$ rise represents only a $6.7\%$ increase in absolute temperature ($318 / 298$).

8. $T_1 = 300\text{ K}, \quad T_2 = 350\text{ K}$.
   Unconstrained volume $= 2000 \times (350 / 300) = 2333.3\text{ m}^3$.
   Fraction remaining $= \frac{2000}{2333.3} = \frac{300}{350} = \mathbf{0.857} \quad (\mathbf{6/7})$.
   Percentage escaped $= (1 - 0.857) \times 100 = \mathbf{14.3\%}$ ✅.

9. $100\ ^\circ\text{C} = 373\text{ K}$ and $50\ ^\circ\text{C} = 323\text{ K}$.
   $$\text{Volume ratio} = \frac{373}{323} \approx \mathbf{1.15}$$
   The volume increases by only $15\%$, not $100\%$ (double). For volume to double, temperature would have to reach $323 \times 2 = 646\text{ K}$ ($373\ ^\circ\text{C}$).

10. $\text{Slope} = \frac{272 - 232}{67 - 17} = \frac{40\text{ mL}}{50\ ^\circ\text{C}} = 0.8\text{ mL/}^\circ\text{C}$.
    To drop $232\text{ mL}$ to zero: $\Delta t = 232 / 0.8 = 290\ ^\circ\text{C}$.
    $$t = 17\ ^\circ\text{C} - 290\ ^\circ\text{C} = \mathbf{-273\ ^\circ\text{C}}$$
    This temperature is **Absolute Zero ($0\text{ K}$)**. Real gases cannot reach zero volume because intermolecular attractions cause them to condense into liquids and freeze into solids well before reaching $-273\ ^\circ\text{C}$.

11. Charles's Law requires **constant pressure**, which can only occur if the container boundaries can expand freely (like a balloon or piston). An LPG cylinder is made of rigid steel and has a **fixed volume**. Because the gas cannot expand, the energetic particle collisions drive **pressure dangerously upward**, risking catastrophic tank rupture.

12. (a) **False** ❌. Temperatures must always be converted to Kelvin ($T = t + 273$).
    (b) **True** ✅. At constant pressure, $V \propto T$.
    (c) **False** ❌. Heating increases particle speed, but the total number of particles ($n$) remains constant in a sealed system.
    (d) **False** ❌. Real gases liquefy or solidify long before reaching $0\text{ K}$.

---

Elena looked up at the floating balloon with newfound admiration. "So the propane flame doesn't add magic buoyancy—it heats the air, expands it according to Charles's Law, forces extra air out of the throat, and leaves lighter, less-dense air inside!" Dr. Charles beamed: "Precisely. But remember the key prerequisite: that only happens because the balloon's throat is open and free to expand."

**What's next?** What happens if a gas is heated inside a container that **cannot** expand—such as an aerosol spray can or a rigid pressure vessel? If volume is clamped shut, where does all that kinetic energy go? In **Topic 4: Pressure and Temperature: Gay-Lussac's Law and the Combined Gas Equation**, we will investigate how pressure surges with temperature, and combine Boyle's Law and Charles's Law into one master equation: $\frac{P_1V_1}{T_1} = \frac{P_2V_2}{T_2}$.