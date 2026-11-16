# Chapter: Gas Laws (Part 4)

> **Class:** 9 | **Subject:** Chemistry
> **Previous link in this series:** [gas-laws-part3.md](gas-laws-part3.md) (which covered Charles's Law $V_1/T_1 = V_2/T_2$, the Kelvin absolute scale, the linear $V-T$ plot, and Absolute Zero). Chapter introduction: [gas-laws.md](gas-laws.md). Origins of the Kelvin scale: [matter-in-our-surroundings-part3.md](../matter-in-our-surroundings/matter-in-our-surroundings-part3.md). Physics of pressure and fluids: [pressure-and-fluids-part4.md](../../physics/pressure-and-fluids/pressure-and-fluids-part4.md).
> **Topics covered in this file:**
> 4. Pressure and Temperature: Gay-Lussac's Law and the Combined Gas Equation

---

# Topic 4: Pressure and Temperature: Gay-Lussac's Law and the Combined Gas Equation

In the preceding topics, we explored two distinct gas laws. Boyle's Law showed that when temperature is constant, pressure and volume are inversely related ($P_1V_1 = P_2V_2$). Charles's Law demonstrated that when pressure is constant, volume and absolute temperature expand hand-in-hand ($V_1/T_1 = V_2/T_2$). One pairing remains: what happens if **volume is clamped strictly fixed** (inside a rigid, sealed container) while **temperature rises**? The gas cannot expand outward, so that thermal energy must express itself in another form: **internal pressure surges**. Today's topic opens with a real-world warning label and culminates in uniting all three historical relationships into the **Combined Gas Equation**.

---

## The Warning Label on an Aerosol Can

Outside science class, Maya was pulling an aerosol can of sunscreen from her sports bag. Printed across the back in bold red letters was a cautionary label: **"Caution: Pressurised container. Protect from sunlight and do not expose to temperatures exceeding 50 °C. Do not pierce or burn, even after use. Keep away from flames."**

Maya turned to her teacher, Mr. Davies. "Sir, why do aerosol cans carry such dramatic warnings? It's just a spray nozzle with some propellent and lotion inside."

Mr. Davies paused. "That warning is universal: you will find it on sunscreen sprays, deodorants, insect repellents, and household propane cylinders. Think about what is happening physically: the can is made of rigid stamped metal with a fixed interior volume. The gas trapped inside has nowhere to expand. If someone leaves that sealed can on a car dashboard under scorching midday sun, the trapped gas particles **accelerate dramatically**. How will those high-speed particles interact with the metal walls?"

Maya considered the particle model. "They will crash into the metal walls much faster, with far greater force and much higher frequency. The pressure will skyrocket!"

"Exactly," Mr. Davies nodded. "The internal pressure climbs relentlessly until the metal crimps fail or the can ruptures explosively. Today, we will discover the exact mathematical law that governs this pressure spike—Gay-Lussac's Law—and unite it with our earlier discoveries."

> **Vital Safety Rule:** Sealed gas containers—including aerosol cans, propane cylinders, butane canisters, and vehicle tyres—**must never be heated, left inside hot vehicles in the sun, or placed near open flames**. No classroom experiment involves heating sealed vessels. The discussions below represent theoretical science and mathematical models only.

```
   Warning Label Visual Model (Conceptual Analysis Only)

   COOL AMBIENT CONDITIONS (27 °C)       HOT CAR INTERIOR IN SUNLIGHT (57 °C)
   _______________________________       ___________________________________
  |   o       o       o       o   |     |  o>   <o    o>    <o    o>   <o   |
  |       o       o       o       |     |  <o   o>    <o    o>    <o   o>   |
  |   o       o       o       o   |     |  o>   <o    o>    <o    o>   <o   |
  |_______________________________|     |___________________________________|
   Slower particles; gentle collisions   Fast particles; violent, frequent impacts
   Pressure: Moderate (e.g. 4.0 atm)     Pressure: Surging dangerously (4.4 atm)

   Volume is fixed (rigid walls); particle count is fixed. Only temperature climbed.
   Excessive heat drives pressure past structural limits: NEVER heat sealed cans!
```

> **Figure 4.1** – Microscopic model of Gay-Lussac's Law in a rigid container. Volume ($V$) and gas quantity ($n$) are fixed. As temperature climbs, particles gain kinetic energy, bombarding the walls with greater force and higher frequency, causing internal pressure to surge.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Constant volume** | The interior capacity of a container remains strictly unchanging | Aerosol cans, rigid gas tanks |
| **Pressure-Temperature Law** | At constant volume, the pressure of a fixed mass of gas is directly proportional to its Kelvin temperature | Pressure rising inside a hot tyre |
| **Gay-Lussac's Law** | The formal historical name for the pressure-temperature relationship (Joseph Louis Gay-Lussac, 1809) | $P_1/T_1 = P_2/T_2$ |
| **Combined gas equation** | The single master equation combining Boyle's, Charles's, and Gay-Lussac's laws: $P_1V_1/T_1 = P_2V_2/T_2$ | When $P, V,$ and $T$ all change |
| **Special case** | A simplified form of a general law obtained when one parameter is held constant | Combined equation reduces to Boyle's Law at constant $T$ |
| **Rigid container** | An unyielding, solid-walled vessel whose volume does not expand under internal pressure | Steel diving cylinder |

---

## Part A: The Pressure-Temperature Law (Gay-Lussac's Law)

Two conditions define this relationship:
1. **The quantity of gas ($n$) is constant** (sealed container with no leaks).
2. **The volume ($V$) is constant** (rigid, unyielding container walls).

When temperature increases, thermal energy converts directly into kinetic energy: gas particles travel faster. Because the volume is rigid, the particles cannot push the walls back to create extra space. Instead, they strike the existing surface area **more frequently and with greater momentum**. Force per unit area increases, meaning **pressure climbs**.

Just as in Charles's Law, this relationship is strictly proportional to the **absolute Kelvin temperature**:

> **Gay-Lussac's Law:** At constant volume, the pressure of a given mass of dry gas is directly proportional to its absolute (Kelvin) temperature.
> Mathematically:
> $$P \propto T \quad \text{or} \quad \frac{P}{T} = \text{constant} \quad (\text{with } T \text{ in Kelvin})$$
> For a gas transitioning between two states at constant volume:
> $$\frac{P_1}{T_1} = \frac{P_2}{T_2}$$

Where $T$ is in Kelvin ($T = t + 273$), and $P_1$ and $P_2$ share the same pressure units ($\text{atm}$, $\text{mm Hg}$, or $\text{Pa}$).

In simple terms: doubling the Kelvin temperature doubles the internal pressure; halving the Kelvin temperature halves the pressure. Gay-Lussac's Law is the rigid-container twin of Charles's Law: in Charles's Law, thermal energy expanded the volume; here, constrained volume turns that energy into mounting pressure.

### Everyday Examples of Gay-Lussac's Law:

- **Aerosol and gas cylinder safety warnings:** Direct heat or strong sunlight causes internal pressure to soar, leading to structural rupture or explosions.
- **Car tyres on hot asphalt:** As a car travels at highway speeds, friction with the road and warm summer ambient air heat the air trapped inside the tyres. Because tyre volume is nearly rigid, tyre pressure increases noticeably. For this reason, **manufacturers specify checking tyre pressure when the tyres are cold** (before driving).
- **Sports balls in freezing weather:** A basketball or football pumped to proper firmness indoors at $25\ ^\circ\text{C}$ feels soft and under-inflated after being left outside in freezing winter conditions (e.g. $-5\ ^\circ\text{C}$), because the drop in absolute temperature reduces internal pressure.
- **Pressure cookers:** A heavy sealed pot traps steam. As heating continues, trapped vapour pressure rises dramatically, elevating the boiling point of water above $100\ ^\circ\text{C}$ and cooking food significantly faster (equipped with precision pressure-relief valves for safety).

---

## Part B: The "Which Gas Law Do I Use?" Decision Guide

All three elementary gas laws share the same family tree. The only distinction lies in **which property is held constant**. Whenever you encounter a gas law problem, ask yourself: *"Which variable is locked?"*

```
   Law              What is Constant?   What Changes?         Governing Formula
   --------------   ------------------  --------------------  -------------------
   Boyle's Law      T and n             P and V (inversely)   P₁ V₁ = P₂ V₂
   Charles's Law    P and n             V and T (directly)    V₁ / T₁ = V₂ / T₂
   Gay-Lussac's     V and n             P and T (directly)    P₁ / T₁ = P₂ / T₂
   Combined Gas     Only n              P, V, and T all shift P₁V₁/T₁ = P₂V₂/T₂
```

> **Figure 4.2** – Quick decision guide for gas laws. Every law assumes a sealed sample of fixed mass ($n = \text{constant}$). Identify which secondary variable ($T, P,$ or $V$) is fixed to select the correct equation. If all three variables shift simultaneously, deploy the Combined Gas Equation.

---

## Part C: The Combined Gas Equation

In real-world conditions, nature rarely obliges us by holding one property completely fixed. When a weather balloon ascends through the atmosphere, ambient pressure drops (tending to expand volume), while high-altitude temperature plunges (tending to shrink volume). To handle situations where $P, V,$ and $T$ vary all at once, we merge the three laws into a single master relationship:

$$\frac{P_1V_1}{T_1} = \frac{P_2V_2}{T_2} \quad (n = \text{constant}, \text{with } T \text{ in Kelvin})$$

This is the **Combined Gas Equation**. It serves as the universal parent formula, with Boyle's, Charles's, and Gay-Lussac's laws emerging as **special cases**:

- If **$T$ is constant** ($T_1 = T_2$): Temperature cancels from both denominators, yielding **$P_1V_1 = P_2V_2$** (Boyle's Law).
- If **$P$ is constant** ($P_1 = P_2$): Pressure cancels from both numerators, yielding **$V_1/T_1 = V_2/T_2$** (Charles's Law).
- If **$V$ is constant** ($V_1 = V_2$): Volume cancels from both numerators, yielding **$P_1/T_1 = P_2/T_2$** (Gay-Lussac's Law).

```
                  P₁ V₁       P₂ V₂
                  -----   =   -----          (Combined Gas Equation, n fixed)
                   T₁          T₂

        T constant            P constant            V constant
        (T₁ = T₂)             (P₁ = P₂)             (V₁ = V₂)
            |                      |                     |
            v                      v                     v
      P₁ V₁ = P₂ V₂          V₁/T₁ = V₂/T₂        P₁/T₁ = P₂/T₂
        BOYLE'S LAW          CHARLES'S LAW       GAY-LUSSAC'S LAW
```

> **Figure 4.3** – The Combined Gas Equation and its special cases. Cancelling the constant parameter automatically reproduces the corresponding historical gas law.

> **Note on Ideal vs Real Gases:** These equations describe **ideal gas behaviour**, which real gases follow with remarkable precision under normal atmospheric pressures and moderate temperatures. At very high pressures (where molecules crowd tightly together) and near liquefaction temperatures, real gases deviate slightly due to intermolecular forces and particle volume. The full Ideal Gas Equation ($PV = nRT$) and real-gas corrections are studied in higher grades.

---

## Part D: Solved Examples

*(All calculations assume a sealed container with fixed gas mass $n$. Round to two decimal places where appropriate. Temperatures must strictly be in Kelvin: $T\ (\text{K}) = t\ (^\circ\text{C}) + 273$.)*

**Example 1: Aerosol can left in a hot car (theoretical calculation).** An aerosol can contains propellant at $4.0\text{ atm}$ at room temperature ($27\ ^\circ\text{C}$). If accidentally left on a car parcel shelf where the sun bakes the interior to $57\ ^\circ\text{C}$, what pressure is reached inside?
- $T_1 = 27 + 273 = 300\text{ K}, \quad T_2 = 57 + 273 = 330\text{ K}, \quad P_1 = 4.0\text{ atm}$.
- Using Gay-Lussac's Law ($V = \text{constant}$):
  $$P_2 = P_1 \times \frac{T_2}{T_1} = 4.0\text{ atm} \times \frac{330\text{ K}}{300\text{ K}} = \mathbf{4.4\text{ atm}}$$
- *Check:* $P_1 / T_1 = 4.0 / 300 = 0.0133\text{ atm/K}$ and $P_2 / T_2 = 4.4 / 330 = 0.0133\text{ atm/K}$ ✅. A $30\ ^\circ\text{C}$ temperature rise forces a $10\%$ surge in pressure.

**Example 2: Rigid cylinder warming.** Gas inside a rigid steel tank is stored at $2.0\text{ atm}$ at $300\text{ K}$. On a hot summer day, ambient heat warms the cylinder to $330\text{ K}$. Find the new internal pressure.
$$P_2 = 2.0 \times \frac{330}{300} = \mathbf{2.2\text{ atm}}$$
- *Check:* $330 / 300 = 1.1$ and $2.2 / 2.0 = 1.1$ ✅.

**Example 3: Determining required temperature.** A rigid gas tank holds gas at $1.6\text{ atm}$ at $280\text{ K}$. To what temperature must it be heated for its pressure to reach $2.0\text{ atm}$?
$$T_2 = T_1 \times \frac{P_2}{P_1} = 280\text{ K} \times \frac{2.0}{1.6} = \mathbf{350\text{ K}}$$
- Express in Celsius:
  $$t_2 = 350 - 273 = \mathbf{77\ ^\circ\text{C}}$$
- *Check:* $1.6 / 280 = 0.00571$ and $2.0 / 350 = 0.00571$ ✅.

**Example 4: Highway car tyre pressure.** On a cold morning, a car tyre reads an absolute pressure of $2.40\text{ atm}$ at an ambient temperature of $17\ ^\circ\text{C}$. After driving at high speeds, tyre friction and flex heat the trapped air to $47\ ^\circ\text{C}$. Assuming tyre volume remains virtually constant, calculate the operational tyre pressure.
- $T_1 = 17 + 273 = 290\text{ K}, \quad T_2 = 47 + 273 = 320\text{ K}$.
  $$P_2 = 2.40 \times \frac{320}{290} \approx \mathbf{2.65\text{ atm}}$$
- *Check:* Pressure rises from $2.40\text{ atm}$ to $2.65\text{ atm}$ (an increase of $\approx 0.25\text{ atm}$), explaining why cold tyre inflation specs must always be followed ✅.

**Example 5: Sports ball in winter.** A football is pumped to an absolute pressure of $1.50\text{ atm}$ indoors at $27\ ^\circ\text{C}$ ($300\text{ K}$). It is taken outside onto a snowy pitch at $-3\ ^\circ\text{C}$ ($270\text{ K}$). Assuming constant volume, find the pressure inside the ball outdoors.
$$P_2 = 1.50 \times \frac{270}{300} = \mathbf{1.35\text{ atm}}$$
- *Check:* A $10\%$ drop in absolute temperature ($270/300 = 0.90$) causes a $10\%$ drop in pressure ($1.50 \times 0.90 = 1.35\text{ atm}$), making the ball feel soft and under-inflated ✅.

**Example 6: The Celsius trap exposed.** Gas in a sealed rigid chamber is at $2.0\text{ atm}$ at $20\ ^\circ\text{C}$. The temperature is raised to $40\ ^\circ\text{C}$. A student claims: *"Temperature doubled from $20$ to $40$, so pressure must double to $4.0\text{ atm}$."* Evaluate this claim and calculate the true pressure.
- Flawed calculation: $P_2 = 2.0 \times (40/20) = 4.0\text{ atm}$ ❌.
- Correct calculation in Kelvin:
  $$T_1 = 20 + 273 = 293\text{ K}, \quad T_2 = 40 + 273 = 313\text{ K}$$
  $$P_2 = 2.0 \times \frac{313}{293} \approx \mathbf{2.14\text{ atm}}$$
- *Check:* Absolute temperature rose by merely $6.8\%$ ($313/293 = 1.068$), so pressure climbed by only $6.8\%$ to $2.14\text{ atm}$, not $4.0\text{ atm}$!

**Example 7: Verifying Gay-Lussac's Law from data.** A laboratory pressure gauge on a fixed-volume vessel yields the following data:

| Temperature $T$ (K) | 250 | 300 | 350 | 400 |
|---|---|---|---|---|
| Pressure $P$ (atm) | 1.0 | 1.2 | 1.4 | 1.6 |

- Check the ratios $P/T$:
  $$1.0 / 250 = 0.0040, \quad 1.2 / 300 = 0.0040, \quad 1.4 / 350 = 0.0040, \quad 1.6 / 400 = 0.0040\text{ atm/K}$$
- The ratio $P/T = 0.0040\text{ atm/K}$ is strictly constant, verifying Gay-Lussac's Law. At $500\text{ K}$, pressure would reach $0.0040 \times 500 = \mathbf{2.0\text{ atm}}$.

**Example 8: Why aerosol cans fail in fire.** An aerosol can is filled to $5.0\text{ atm}$ at $27\ ^\circ\text{C}$ ($300\text{ K}$). Its metal walls are rated to withstand a maximum internal pressure of $8.0\text{ atm}$. At what temperature would the pressure reach this burst limit?
$$T_2 = T_1 \times \frac{P_2}{P_1} = 300\text{ K} \times \frac{8.0}{5.0} = \mathbf{480\text{ K}}$$
$$t_2 = 480 - 273 = \mathbf{207\ ^\circ\text{C}}$$
- Temperatures of $200\ ^\circ\text{C}$ or higher are easily reached in a campfire, incinerator, or house fire. Real metal casings weaken and warp well below this theoretical threshold, explaining why safety labels impose a strict upper limit of $50\ ^\circ\text{C}$.

**Example 9: Combined gas equation—balancing effects.** A $1.0\text{ L}$ sample of gas is at $1.0\text{ atm}$ and $273\text{ K}$. It is compressed to $2.0\text{ atm}$ while simultaneously heated to $546\text{ K}$. Determine the new volume.
$$V_2 = \frac{P_1 V_1 T_2}{T_1 P_2} = \frac{1.0\text{ atm} \times 1.0\text{ L} \times 546\text{ K}}{273\text{ K} \times 2.0\text{ atm}} = \mathbf{1.0\text{ L}}$$
- *Check:* Doubling the pressure tends to halve the volume ($0.5\text{ L}$), while doubling the Kelvin temperature tends to double the volume ($2.0\text{ L}$). The two opposing effects precisely cancel, leaving the volume unchanged at $1.0\text{ L}$ ✅.

**Example 10: Weather balloon ascent.** A weather balloon released at ground level holds $5.0\text{ L}$ of gas at $1.0\text{ atm}$ and $300\text{ K}$. High in the troposphere, external pressure plunges to $0.5\text{ atm}$ while ambient temperature drops to $250\text{ K}$. Calculate the balloon's expanded volume at altitude.
$$V_2 = \frac{P_1 V_1 T_2}{T_1 P_2} = \frac{1.0 \times 5.0 \times 250}{300 \times 0.5} = \frac{1250}{150} \approx \mathbf{8.33\text{ L}}$$
- *Check:* $P_1V_1/T_1 = (1.0 \times 5.0) / 300 = 0.01667$ and $P_2V_2/T_2 = (0.5 \times 8.33) / 250 \approx 0.01667$ ✅. The pressure halving has a stronger expanding effect than the moderate thermal cooling, resulting in an overall volume increase to $8.33\text{ L}$.

**Example 11: Two-step calculation vs Combined Gas Equation.** A $3.0\text{ L}$ gas sample is at $1.0\text{ atm}$ and $300\text{ K}$.
- Step 1 (Boyle): Pressure is doubled to $2.0\text{ atm}$ at constant temperature ($300\text{ K}$):
  $$V_2 = \frac{1.0 \times 3.0}{2.0} = 1.5\text{ L}$$
- Step 2 (Charles): At this new pressure ($2.0\text{ atm}$), temperature is raised from $300\text{ K}$ to $360\text{ K}$:
  $$V_3 = 1.5\text{ L} \times \frac{360}{300} = \mathbf{1.8\text{ L}}$$
- In a single step via Combined Equation:
  $$V_3 = \frac{P_1 V_1 T_3}{T_1 P_3} = \frac{1.0 \times 3.0 \times 360}{300 \times 2.0} = \frac{1080}{600} = \mathbf{1.8\text{ L}}$$
- *Check:* Both pathways yield the exact same answer ($\mathbf{1.8\text{ L}}$) ✅.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Performing pressure-temperature calculations using Celsius**
   Always convert temperatures to Kelvin ($T = t + 273$). Calculating directly in Celsius produces wildly inaccurate results (Example 6).

2. **Mistake 2: Assuming volume changes during Gay-Lussac's Law**
   Gay-Lussac's Law strictly requires a **rigid container** where volume is locked ($V = \text{constant}$). If volume expands or contracts, deploy the Combined Gas Equation or Charles's Law.

3. **Mistake 3: Applying gas laws when gas is leaking**
   Every gas law covered so far requires a **fixed mass of gas** ($n = \text{constant}$). If gas escapes through an open valve or puncture, particle count drops and these equations do not apply directly.

4. **Mistake 4: Scrambling initial and final states in the Combined Equation**
   Group all State 1 variables on the left ($P_1, V_1, T_1$) and all State 2 variables on the right ($P_2, V_2, T_2$). Never cross-multiply $P_1$ with $V_2$ into the numerator of the same side.

5. **Mistake 5: Expecting pressure to double when Celsius temperature doubles**
   Pressure doubles only when the **absolute Kelvin temperature doubles** (e.g. from $300\text{ K}$ to $600\text{ K}$, which corresponds to $27\ ^\circ\text{C}$ to $327\ ^\circ\text{C}$).

6. **Mistake 6: Attempting to heat a sealed container to verify the law**
   **Never heat sealed aerosol cans, gas cylinders, or bottles.** These calculations are purely mathematical exercises; real-world heating risks explosive container rupture.

---

## Quick Recap

- **Gay-Lussac's Law:** At constant volume and constant mass, pressure is directly proportional to absolute Kelvin temperature: $\frac{P}{T} = \text{constant}$ or $\frac{P_1}{T_1} = \frac{P_2}{T_2}$ (Joseph Louis Gay-Lussac, 1809).
- Microscopic picture: In a rigid chamber, heating increases particle velocity, creating more frequent and violent wall impacts, driving internal pressure upward.
- **Combined Gas Equation:** Merges all three relationships into one master equation: $\frac{P_1V_1}{T_1} = \frac{P_2V_2}{T_2}$ for any fixed mass of gas.
- Special cases: Holding $T$ constant gives Boyle's Law; holding $P$ constant gives Charles's Law; holding $V$ constant gives Gay-Lussac's Law.
- Safety absolute: Always store aerosol cans, cylinders, and tyres away from direct sun and heat.

---

## Activity (Observational / Supervised)

**Activity 1: Inspecting aerosol container warnings (Safety observation only).**
Under adult supervision, locate a household aerosol container (such as shaving foam, hairspray, or sunscreen). Carefully read the warning labels. Look for phrases like "Protect from sunlight", "Do not expose to temperatures exceeding 50 °C", and "Do not puncture or incinerate". Note the manufacturer's maximum rated temperature. **Never attempt to heat, shake excessively, puncture, or alter the container.**

**Activity 2: Cold tyre pressure inspection (with an adult at a service station).**
Observe an adult checking vehicle tyre pressure before a trip in the morning when the tyres are cold. Ask why manufacturers specify cold tyre measurements (Example 4). Never over-inflate tyres and never expose tyres to external heating.

---

## Practice Questions

*(Round answers to two decimal places where appropriate. Temperatures in Kelvin.)*

1. A deodorant can holds propellant gas at $3.0\text{ atm}$ at $27\ ^\circ\text{C}$. If left inside a sun-baked car where interior temperature reaches $47\ ^\circ\text{C}$, what pressure is reached inside? Why is leaving it there hazardous?

2. A bicycle tyre has an absolute pressure of $1.80\text{ atm}$ on a winter morning at $7\ ^\circ\text{C}$. By afternoon, sunlight warms the tyre to $37\ ^\circ\text{C}$. Assuming negligible change in tyre volume, calculate the new internal pressure.

3. A rigid steel vessel contains gas at $5.00\text{ atm}$ at $300\text{ K}$. On a sub-zero winter night, the temperature drops to $250\text{ K}$. Determine the new internal pressure.

4. A gas enclosed in a rigid cylinder is at $1.50\text{ atm}$ and $290\text{ K}$. At what temperature (in $\text{K}$ and $^\circ\text{C}$) will the internal pressure reach $2.10\text{ atm}$?

5. A research apparatus records the following pressures for a fixed-volume gas chamber: $1.50\text{ atm}$ at $300\text{ K}$, $1.75\text{ atm}$ at $350\text{ K}$, and $2.00\text{ atm}$ at $400\text{ K}$. Does this gas obey Gay-Lussac's Law? Predict the pressure at $500\text{ K}$.

6. A sample of gas occupying $2.0\text{ L}$ at $2.0\text{ atm}$ and $400\text{ K}$ is adjusted to $1.0\text{ atm}$ and $300\text{ K}$. Find the new volume.

7. A $10.0\text{ L}$ gas volume at $1.0\text{ atm}$ and $27\ ^\circ\text{C}$ is simultaneously compressed and heated until its pressure is $4.0\text{ atm}$ and its temperature reaches $87\ ^\circ\text{C}$. Determine the final volume.

8. Identify which law (Boyle, Charles, Gay-Lussac, or Combined Gas Equation) applies to each scenario, and state which variable is held constant:
   (a) Air compressed slowly inside a needle-free syringe at room temperature.
   (b) Trapped air inside a rigid steel tank warmed on a hot day.
   (c) A balloon expanding freely over a warm water bath.
   (d) A weather balloon ascending into the upper atmosphere where $P, V,$ and $T$ all shift.

9. An aerosol can is charged to $4.0\text{ atm}$ at $27\ ^\circ\text{C}$. Its casing can withstand a maximum burst threshold of $6.0\text{ atm}$. At what temperature in $^\circ\text{C}$ would the pressure reach this burst limit? Explain how this relates to label warnings.

10. A student claims: *"A rigid gas tank is at $1.0\text{ atm}$ at $0\ ^\circ\text{C}$. Heating it to $100\ ^\circ\text{C}$ will increase the pressure a hundred-fold because $100 / 1 = 100$."* Identify the student's conceptual errors and calculate the correct pressure.

11. State whether each statement is True or False, and correct any false statements:
    (a) Gay-Lussac's Law requires the volume of the gas to remain constant.
    (b) If Kelvin temperature doubles at constant volume, internal gas pressure doubles.
    (c) The Combined Gas Equation simplifies to Boyle's Law when pressure is held constant.
    (d) A nearly empty aerosol can may be safely tossed into a fire.

### Answers

1. $T_1 = 27 + 273 = 300\text{ K}, \quad T_2 = 47 + 273 = 320\text{ K}$.
   $$P_2 = 3.0 \times \frac{320}{300} = \mathbf{3.20\text{ atm}}$$
   In a hot car, rising temperature drives pressure upward; sustained intense heat can weaken the metal seam, causing the can to rupture or explode.
   *Check:* $3.20 / 320 = 0.010$ and $3.0 / 300 = 0.010$ ✅.

2. $T_1 = 7 + 273 = 280\text{ K}, \quad T_2 = 37 + 273 = 310\text{ K}$.
   $$P_2 = 1.80 \times \frac{310}{280} \approx \mathbf{1.99\text{ atm}}$$
   *Check:* $1.99 \times (280 / 310) \approx 1.80$ ✅.

3. $T_1 = 300\text{ K}, \quad T_2 = 250\text{ K}$.
   $$P_2 = 5.00 \times \frac{250}{300} \approx \mathbf{4.17\text{ atm}}$$
   *Check:* As temperature drops, pressure decreases; $4.167 / 250 \approx 0.0167$ and $5.00 / 300 \approx 0.0167$ ✅.

4. $T_2 = 290\text{ K} \times \frac{2.10}{1.50} = \mathbf{406\text{ K}}$.
   $$t_2 = 406 - 273 = \mathbf{133\ ^\circ\text{C}}$$
   *Check:* $1.50 / 290 \approx 0.00517$ and $2.10 / 406 \approx 0.00517$ ✅.

5. Ratios $P/T$:
   - $1.50 / 300 = 0.0050\text{ atm/K}$
   - $1.75 / 350 = 0.0050\text{ atm/K}$
   - $2.00 / 400 = 0.0050\text{ atm/K}$
   **Yes, the data strictly follows Gay-Lussac's Law** ($P/T = 0.0050\text{ atm/K}$).
   At $500\text{ K}$, $P = 0.0050 \times 500 = \mathbf{2.50\text{ atm}}$ ✅.

6. $V_2 = \frac{P_1 V_1 T_2}{T_1 P_2} = \frac{2.0 \times 2.0 \times 300}{400 \times 1.0} = \frac{1200}{400} = \mathbf{3.0\text{ L}}$.
   *Check:* $P_1V_1/T_1 = (2.0 \times 2.0) / 400 = 0.010$ and $P_2V_2/T_2 = (1.0 \times 3.0) / 300 = 0.010$ ✅.

7. $T_1 = 27 + 273 = 300\text{ K}, \quad T_2 = 87 + 273 = 360\text{ K}$.
   $$V_2 = \frac{1.0 \times 10.0 \times 360}{300 \times 4.0} = \frac{3600}{1200} = \mathbf{3.0\text{ L}}$$
   *Check:* $P_1V_1/T_1 = 10.0 / 300 = 0.0333$ and $P_2V_2/T_2 = (4.0 \times 3.0) / 360 = 0.0333$ ✅.

8. (a) **Boyle's Law**: Temperature ($T$) and mass ($n$) are constant.
   (b) **Gay-Lussac's Law**: Volume ($V$, rigid tank) and mass ($n$) are constant.
   (c) **Charles's Law**: Pressure ($P$, open ambient) and mass ($n$) are constant.
   (d) **Combined Gas Equation**: Only mass ($n$) is constant; $P, V,$ and $T$ all vary.

9. $T_1 = 27 + 273 = 300\text{ K}$.
   $$T_2 = 300\text{ K} \times \frac{6.0}{4.0} = 450\text{ K}$$
   $$t_2 = 450 - 273 = \mathbf{177\ ^\circ\text{C}}$$
   Temperatures near $177\ ^\circ\text{C}$ occur around open flames or incinerators. Labels specify a much lower limit ($50\ ^\circ\text{C}$) as a safety margin to prevent structural fatigue and explosive failure.

10. The student treated $0\ ^\circ\text{C}$ as zero kinetic energy and calculated a meaningless Celsius ratio.
    Correct method in Kelvin: $T_1 = 273\text{ K}, \quad T_2 = 373\text{ K}$.
    $$P_2 = 1.0\text{ atm} \times \frac{373\text{ K}}{273\text{ K}} \approx \mathbf{1.37\text{ atm}}$$
    Pressure increases by only $37\%$, not a hundred-fold!

11. (a) **True** ✅.
    (b) **True** ✅.
    (c) **False** ❌. Holding pressure constant reduces the Combined Gas Equation to **Charles's Law** ($V_1/T_1 = V_2/T_2$). It reduces to Boyle's Law when **temperature** is constant.
    (d) **False** ❌. "Empty" aerosol cans still contain residual pressurized flammable propellant and air; incineration causes explosive casing rupture.

---

Maya reviewed the warning label once more: "Now I understand the physics behind the label: fixed container volume plus climbing temperature forces internal pressure to skyrocket!" Mr. Davies smiled: "Well observed. And remember, the Combined Gas Equation unites all these pieces into one coherent framework."

**What's next?** Up until now, we kept the **amount of gas ($n$)** strictly constant. But what if we change the quantity of gas? If two different gases occupy identical volumes at the same temperature and pressure, do they contain the same number of molecules? How much volume does **one mole** of any gas occupy? In **Topic 5: STP, Avogadro's Law, and Molar Volume**, we will unlock the famous value: **22.4 litres**.