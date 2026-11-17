# Chapter: Electricity (Part 6)

> **Class:** 9 | **Subject:** Physics
> **Preceded by:** [electricity-part5.md](electricity-part5.md) (covered resistor combinations in series and parallel). The entire chapter begins with [electricity.md](electricity.md). Pre-requisite formulas: $W = V I t$ in [electricity-part3.md](electricity-part3.md), Ohm's Law in [electricity-part4.md](electricity-part4.md). For mechanical power and the kilowatt-hour, see: [work-energy-and-power-part7.md](../work-energy-and-power/work-energy-and-power-part7.md). For thermal heat capacity ($Q = m c \Delta T$), see: [heat-and-temperature-part3.md](../heat-and-temperature/heat-and-temperature-part3.md).
> **Topics covered in this file:**
> 6. Heating Effect of Current and Electric Power

---

# Topic 6: Heating Effect of Current and Electric Power

In the previous topic, we explored how electrical components are combined in series and parallel, discovering why household appliances are strictly wired in parallel circuits. One critical physical observation was noted: **whenever electric current passes through a resistive conductor, heat is generated.**

In this topic, we quantify this phenomenon: exactly how much thermal energy is produced, what factors control it, and how engineers harness this transformation for practical heating appliances while mitigating dangerous fire risks. We will also master the concepts of **electric power** (measured in watts), commercial energy consumption, and the essential safety devices that protect our homes: **fuses and circuit breakers**.

Throughout this topic: **household mains supply voltage is assumed to be $230\text{ V}$, and the specific heat capacity of water is $c = 4200\text{ J/(kg}\cdot^\circ\text{C)}$.**

---

## An Overheated Power Strip in the Kitchen

It was a busy Sunday morning. Liam was in the kitchen helping his aunt, Mrs. Clark, prepare breakfast. To speed up their chores, they plugged three appliances into a single multi-outlet extension power strip: a **toaster**, an electric **food mixer**, and a heavy **steam iron** to press Liam's school blazer.

All three appliances ran simultaneously. After a few minutes, Liam reached behind the toaster to grab a plate and brushed his hand against the extension cord. "Aunt Sarah," Liam exclaimed, "this power cord feels noticeably hot!"

A few seconds later—**snap!**—a sharp click echoed from the hallway utility cupboard, and the kitchen fell completely silent. The lights went out, and all three appliances shut down. The main household fuse had blown.

Mrs. Clark immediately switched off all three appliances and unplugged the extension strip from the wall. Liam was puzzled: "Aunt Sarah, wires are supposed to conduct electricity. Why did the cord get hot in the first place? And why did the fuse blow? What does a fuse actually do?"

Mrs. Clark smiled reassuringly. "Both events are governed by the exact same physical principle: **the heating effect of electric current**. Let us examine the physics behind Joule heating, and then we will calculate the exact numbers from our breakfast setup."

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Heating effect of current** | The conversion of electrical energy into thermal energy as electric charges pass through electrical resistance | An electric clothes iron heating up |
| **Joule's Law of Heating** | The physical law stating that heat generated is directly proportional to the square of current, resistance, and time ($H = I^2 R t$) | A $2\text{ A}$ current through $10\text{ }\Omega$ for $30\text{ s}$ generates $1200\text{ J}$ |
| **Electric power ($P$)** | The rate at which electrical energy is transferred or consumed in a circuit ($P = W / t = V I$); unit: watt ($\text{W}$) | A $60\text{ W}$ lightbulb consumes $60\text{ J}$ per second |
| **Watt ($\text{W}$)** | The SI unit of electric power ($1\text{ W} = 1\text{ J/s} = 1\text{ V} \times 1\text{ A}$) | $1000\text{ W} = 1\text{ kW}$ |
| **Power rating** | The manufacturer's label specifying nominal power consumption at a specified operating voltage | "1000 W, 230 V" stamped on an electric kettle |
| **Kilowatt-hour ($\text{kWh}$)** | The commercial trade unit of electrical energy ($1\text{ kWh} = 3.6 \times 10^6\text{ J}$) | Operating a $1\text{ kW}$ room heater for 1 hour consumes $1\text{ kWh}$ |
| **Heating element** | A high-resistance, high-melting-point metallic coil engineered specifically to convert electricity into heat | The coiled nichrome ribbon inside a toaster |
| **Filament** | An ultra-thin refractory wire heated to white incandescence to emit visible light | The tungsten wire inside an incandescent bulb |
| **Electric fuse** | A sacrificial safety device containing a low-melting-point wire that melts to open an overloaded circuit | A $10\text{ A}$ ceramic cartridge fuse |
| **Overloading** | Connecting too many appliances across a single circuit, drawing excessive total current | Running three high-power kitchen appliances on one strip |
| **Miniature Circuit Breaker (MCB)** | An electromechanical safety switch that trips automatically during overcurrent and can be manually reset | Modern consumer distribution boards |

---

## Part A: Why Does a Conductor Heat Up?

### The Microscopic Picture: Free Electron Collisions

Metallic wires contain a dense sea of mobile **free electrons**. When a potential difference is applied across the conductor, an electric field accelerates these electrons toward the positive terminal (Topic 2 and 3).

However, their motion is not unimpeded. As electrons drift through the metallic crystal, they continually **collide with vibrating lattice ions (atoms)**. During each impact, the electron transfers a portion of its directed kinetic energy to the lattice ion. The lattice ions absorb this energy, causing them to vibrate with greater amplitude. 

On a microscopic scale, temperature is simply the average kinetic energy of atomic vibrations. **The intensified atomic vibrations manifest macroscopically as an increase in the conductor's temperature.** Electrical work performed by the power source has transformed into internal thermal energy.

```
   Inside conducting wire (electron: e⁻, lattice ion: O)

   ──►  e⁻ ────► O      e⁻ ────► O      e⁻ ────► O
              impact          impact          impact
   Each collision transfers electron kinetic energy to the lattice ion
   Lattice ions vibrate more vigorously: wire temperature increases
```

> **Figure 6.1** – Free electrons accelerate under voltage and collide with lattice atoms, transferring kinetic energy that becomes thermal heat.

### How Much Heat is Generated? Joule's Law

In Topic 3, we derived the electrical work done when current $I$ flows under potential difference $V$ for time $t$:
$$W = V \times I \times t$$

In a purely resistive conductor, all electrical work is converted into thermal heat energy ($H = W$). Substituting Ohm's Law ($V = I R$) into this expression:
$$H = (I R) \times I \times t = I^2 R t$$

This is **Joule's Law of Heating**, formulated experimentally by English physicist James Prescott Joule:

> **Joule's Law of Heating:** The heat ($H$) generated in a conductor of resistance $R$ carrying a steady current $I$ for time $t$ is directly proportional to:  
> 1. The **square of the electric current** ($H \propto I^2$)  
> 2. The **electrical resistance** of the conductor ($H \propto R$)  
> 3. The **time duration** for which current flows ($H \propto t$)  
> 
> **$H = I^2 R t$**  
> Where $H$ is in joules ($\text{J}$), $I$ is in amperes ($\text{A}$), $R$ is in ohms ($\Omega$), and $t$ is in seconds ($\text{s}$).

**Crucial Consequence:** Because heat scales with the **square of current ($I^2$)**, doubling the current through a conductor increases the rate of heat generation by a factor of $2^2 = \mathbf{4}$. Tripling the current increases heat generation by $3^2 = \mathbf{9}$ times!

### Three Algebraic Forms of Joule's Law

Using Ohm's Law ($V = I R$ and $I = V / R$), Joule's Law can be expressed in three mathematically equivalent equations:

| Formula | Best Used When... | Practical Example |
|---|---|---|
| **$H = I^2 R t$** | Current $I$ is constant | Components wired in **series** |
| **$H = V I t$** | Voltage $V$ and current $I$ are known | General power supply calculations |
| **$H = \frac{V^2}{R} t$** | Voltage $V$ is constant | Appliances wired in **parallel** across mains supply |

---

## Part B: Electric Power

Power is defined as the rate at which work is performed or energy is converted: $\text{Power} = \frac{\text{Work}}{\text{Time}}$. For electrical systems where $W = V I t$:

> **$P = \frac{W}{t} = \frac{V I t}{t} = \mathbf{V \times I}$**

Using Ohm's Law substitutions, electric power can be written in three working forms:

> **$P = V \times I = I^2 R = \frac{V^2}{R}$**

**SI Unit:** The SI unit of power is the **watt ($\text{W}$)**, named after Scottish engineer James Watt:  
$$1\text{ watt (W)} = 1\text{ J/s} = 1\text{ V} \times 1\text{ A}$$

Larger metric multiples:
- **$1\text{ kilowatt (kW)} = 10^3\text{ W} = 1000\text{ W}$**
- **$1\text{ megawatt (MW)} = 10^6\text{ W} = 1{,}000{,}000\text{ W}$**

### Appliance Power Ratings

Every consumer electrical appliance carries a manufacturer's nameplate stamped with its rated operating voltage and power—for example, **"1000 W, 230 V"**. This specification indicates: *when supplied with the rated mains potential of $230\text{ V}$, the appliance consumes electrical energy at the rate of $1000\text{ joules per second}$*.

From this rating, two crucial parameters can be derived:
- **Normal Operating Current:** $I = \frac{P}{V}$
- **Hot Electrical Resistance:** $R = \frac{V^2}{P}$

Typical power ratings of household appliances ($230\text{ V}$ AC mains):

| Household Appliance | Approximate Power Rating | Typical Operating Current |
|---|---|---|
| LED Lighting Lamp | $7\text{ W} - 12\text{ W}$ | $\sim 0.05\text{ A}$ |
| Fluorescent Tube Light | $40\text{ W}$ | $\sim 0.17\text{ A}$ |
| Ceiling Circulation Fan | $60\text{ W} - 75\text{ W}$ | $\sim 0.3\text{ A}$ |
| Kitchen Food Mixer | $500\text{ W} - 750\text{ W}$ | $\sim 2.5\text{ A} - 3.2\text{ A}$ |
| Two-Slice Pop-Up Toaster | $800\text{ W} - 900\text{ W}$ | $\sim 3.5\text{ A} - 4.0\text{ A}$ |
| Electric Clothes Steam Iron | $1000\text{ W} - 1200\text{ W}$ | $\sim 4.3\text{ A} - 5.2\text{ A}$ |
| Storage Water Geyser | $1500\text{ W} - 2500\text{ W}$ | $\sim 6.5\text{ A} - 10.8\text{ A}$ |

### Distinguishing Power from Energy

Students frequently confuse power and energy:
- **Power ($P$, in watts or kilowatts):** The instantaneous **rate** of energy conversion ($1\text{ W} = 1\text{ J/s}$).
- **Energy ($E$, in joules or kilowatt-hours):** The total cumulative quantity of work performed over an elapsed time ($E = P \times t$).

Because the joule is an inconveniently tiny unit for billing millions of joules of monthly domestic electricity, electrical utilities measure electrical energy in **kilowatt-hours ($\text{kWh}$)**, commonly termed the commercial "unit" of electricity:

> **$1\text{ kilowatt-hour (kWh)} = 1\text{ kW} \times 1\text{ hour} = (1000\text{ W}) \times (3600\text{ s}) = \mathbf{3.6 \times 10^6\text{ J}}$**  
> ($1\text{ kWh} = 3.6\text{ megajoules}$)

---

## Part C: Solved Examples (Formula Practice)

**Example 1 (Direct Joule's Law: $H = I^2 R t$):** A steady current of $2\text{ A}$ passes through a $10\text{ }\Omega$ resistor for $30\text{ s}$. How much heat energy is released?

- $H = I^2 R t = (2\text{ A})^2 \times (10\text{ }\Omega) \times (30\text{ s}) = 4 \times 10 \times 30 = \mathbf{1200\text{ J}}$

**Check:** Voltage drop $V = I R = 2\text{ A} \times 10\text{ }\Omega = 20\text{ V}$. Using $H = V I t = 20\text{ V} \times 2\text{ A} \times 30\text{ s} = 1200\text{ J}$ ✅

---

**Example 2 (Using $H = V I t$):** An electric space heater draws $4\text{ A}$ from a $230\text{ V}$ mains outlet. How much heat is delivered in $10\text{ s}$?

- $H = V \times I \times t = 230\text{ V} \times 4\text{ A} \times 10\text{ s} = 920\text{ W} \times 10\text{ s} = \mathbf{9200\text{ J}}$

**Check:** Power $P = 230 \times 4 = 920\text{ J/s}$; in $10\text{ s}$, $920 \times 10 = 9200\text{ J}$ ✅

---

**Example 3 (Using $H = \frac{V^2}{R} t$):** A heating coil of resistance $52.9\text{ }\Omega$ is connected across $230\text{ V}$ for $60\text{ s}$. Calculate the thermal energy released.

- $V^2 = 230 \times 230 = 52{,}900\text{ V}^2$
- $P = \frac{V^2}{R} = \frac{52{,}900}{52.9} = 1000\text{ W}$
- $H = P \times t = 1000\text{ W} \times 60\text{ s} = \mathbf{60{,}000\text{ J}}$

**Check:** Current $I = V / R = 230 / 52.9 = 4.348\text{ A}$. $H = I^2 R t = (4.348)^2 \times 52.9 \times 60 \approx 60{,}000\text{ J}$ ✅

---

**Example 4 (Calculating Power from $V$ and $I$):** A lightbulb draws $0.26\text{ A}$ when connected across $230\text{ V}$. Determine its power rating.

- $P = V \times I = 230\text{ V} \times 0.26\text{ A} = 59.8\text{ W} \approx \mathbf{60\text{ W}}$

**Check:** $I = P / V = 60 / 230 \approx 0.261\text{ A}$ ✅

---

**Example 5 (Current from Appliance Nameplates):** Find the normal operating current of:  
(a) A $60\text{ W}, 230\text{ V}$ reading lamp.  
(b) A $1000\text{ W}, 230\text{ V}$ electric kettle.

- (a) $I = \frac{P}{V} = \frac{60\text{ W}}{230\text{ V}} = \mathbf{0.26\text{ A}}$
- (b) $I = \frac{P}{V} = \frac{1000\text{ W}}{230\text{ V}} = \mathbf{4.35\text{ A}}$

**Check:** The kettle draws over 16 times more current than the lamp ($4.35 / 0.26 \approx 16.7$), exactly matching their power ratio ($1000 / 60 \approx 16.7$) ✅

---

**Example 6 (Operating Resistance from Nameplate):** Determine the hot resistance of:  
(a) A $100\text{ W}, 230\text{ V}$ incandescent lamp.  
(b) A $1000\text{ W}, 230\text{ V}$ heating element.

- (a) $R = \frac{V^2}{P} = \frac{(230)^2}{100} = \frac{52{,}900}{100} = \mathbf{529\text{ }\Omega}$
- (b) $R = \frac{V^2}{P} = \frac{(230)^2}{1000} = \frac{52{,}900}{1000} = \mathbf{52.9\text{ }\Omega}$

**Check:** Higher power corresponds to smaller electrical resistance at constant voltage ($R \propto 1/P$) ✅

---

**Example 7 (Energy Consumed by a Water Heater):** A $1500\text{ W}$ geyser runs for $20\text{ minutes}$. Calculate the electrical energy consumed: (a) in joules, (b) in kilowatt-hours.

- Time: $t = 20\text{ min} = 20 \times 60 = 1200\text{ s}$
- (a) In joules: $E = P \times t = 1500\text{ W} \times 1200\text{ s} = \mathbf{1{,}800{,}000\text{ J} = 1.8 \times 10^6\text{ J}}$
- (b) In kilowatt-hours: $P = 1.5\text{ kW}$, $t = \frac{20}{60} = \frac{1}{3}\text{ h}$.  
  $$E = 1.5\text{ kW} \times \frac{1}{3}\text{ h} = \mathbf{0.5\text{ kWh}}$$

**Check:** $0.5\text{ kWh} \times (3.6 \times 10^6\text{ J/kWh}) = 1.8 \times 10^6\text{ J}$ ✅

---

**Example 8 (Heating Water with an Immersion Heater):** A $500\text{ W}$ electric immersion heater is immersed in $1\text{ kg}$ of water initially at $20\text{ }^\circ\text{C}$. Assuming zero heat loss, how long will it take to raise the water temperature to $70\text{ }^\circ\text{C}$?

- Temperature rise: $\Delta T = 70\text{ }^\circ\text{C} - 20\text{ }^\circ\text{C} = 50\text{ }^\circ\text{C}$
- Thermal heat required: $Q = m c \Delta T = 1\text{ kg} \times 4200\text{ J/(kg}\cdot^\circ\text{C)} \times 50\text{ }^\circ\text{C} = 210{,}000\text{ J}$
- Time required: $t = \frac{Q}{P} = \frac{210{,}000\text{ J}}{500\text{ J/s}} = \mathbf{420\text{ s} = 7\text{ minutes}}$

**Check:** $P \times t = 500\text{ W} \times 420\text{ s} = 210{,}000\text{ J}$ ✅

---

**Example 9 (The $I^2$ Scaling Law):** A $10\text{ }\Omega$ resistor carries: (a) $1\text{ A}$, (b) $2\text{ A}$ for $10\text{ s}$. Find the heat produced in each case and their ratio.

- (a) $H_1 = (1\text{ A})^2 \times 10\text{ }\Omega \times 10\text{ s} = 1 \times 10 \times 10 = \mathbf{100\text{ J}}$
- (b) $H_2 = (2\text{ A})^2 \times 10\text{ }\Omega \times 10\text{ s} = 4 \times 10 \times 10 = \mathbf{400\text{ J}}$
- Ratio: $\frac{H_2}{H_1} = \frac{400\text{ J}}{100\text{ J}} = \mathbf{4:1}$

**Check:** Current ratio is $2$, so heat ratio is $2^2 = 4$ ✅

---

**Example 10 (Selecting a Household Fuse):** A domestic circuit operates a $1000\text{ W}$ microwave oven and a $500\text{ W}$ refrigerator simultaneously on a $230\text{ V}$ supply. Select the appropriate standard fuse rating from $5\text{ A}$, $10\text{ A}$, and $15\text{ A}$.

- Total power: $P = 1000\text{ W} + 500\text{ W} = 1500\text{ W}$
- Total current: $I = \frac{1500\text{ W}}{230\text{ V}} = \mathbf{6.52\text{ A}}$
- Analysis: A $5\text{ A}$ fuse will blow under normal load ($6.52\text{ A} > 5\text{ A}$). The next standard rating above normal operating current is **$10\text{ A}$**.

**Check:** A $10\text{ A}$ fuse allows $6.52\text{ A}$ continuous operation without nuisance tripping while providing reliable protection against overcurrent surges ✅

---

**Example 11 (Dedicated Circuit for a 2000 W Geyser):** What standard fuse rating should protect a $2000\text{ W}$ water geyser operating at $230\text{ V}$?

- Normal current: $I = \frac{P}{V} = \frac{2000\text{ W}}{230\text{ V}} \approx \mathbf{8.7\text{ A}}$
- Selection: Choose a **$10\text{ A}$ fuse** (or a dedicated $15\text{ A}$ heavy appliance branch).

**Check:** $8.7\text{ A} < 10\text{ A}$ ✅

---

**Example 12 (Comparing 60 W and 100 W Lamps in Series):** A $60\text{ W}, 230\text{ V}$ lamp and a $100\text{ W}, 230\text{ V}$ lamp are connected in series across $230\text{ V}$. Which bulb glows brighter?

- Operating resistances:  
  $R_{60} = \frac{(230)^2}{60} \approx \mathbf{881.7\text{ }\Omega}$  
  $R_{100} = \frac{(230)^2}{100} = \mathbf{529.0\text{ }\Omega}$
- In a series circuit, current $I$ is identical through both bulbs.
- Power dissipated in series: $P = I^2 R$.
- Because $R_{60} > R_{100}$, the **$60\text{ W}$ lamp dissipates more power and glows brighter** when wired in series!  
  *(In parallel, $P = V^2 / R$, so the $100\text{ W}$ lamp with lower resistance glows brighter).*

**Check:** In series, higher resistance develops a greater voltage drop and consumes more power ✅

---

**Example 13 (Why Does the Heating Element Glow While the Cord Stays Cool?):** A $1000\text{ W}$ space heater has a nichrome heating element of resistance $52.9\text{ }\Omega$. It is connected to the wall outlet via a copper supply cord of total resistance $0.05\text{ }\Omega$. If the heater draws $4.35\text{ A}$, calculate the heat generated per second in each part.

- Because the cord and element are in series, both carry the identical current: $I = 4.35\text{ A}$.
- Heat generated per second ($P = I^2 R$):
  - In nichrome element: $P_{\text{element}} = (4.35\text{ A})^2 \times 52.9\text{ }\Omega \approx \mathbf{1000\text{ W}}$
  - In copper cord: $P_{\text{cord}} = (4.35\text{ A})^2 \times 0.05\text{ }\Omega = 18.9 \times 0.05 \approx \mathbf{0.95\text{ W}}$
- Ratio: $\frac{P_{\text{element}}}{P_{\text{cord}}} = \frac{1000}{0.95} \approx \mathbf{1050\text{ times greater}}$

**Check:** The heating element produces over 1000 times more heat per second than the connecting cord, explaining why the nichrome coils glow cherry-red while the copper cord remains cool to the touch ✅

---

**Example 14 (Energy of a 100 W Lamp):** A $100\text{ W}$ lamp operates for $5\text{ hours}$. Calculate the energy consumed: (a) in kilowatt-hours, (b) in joules.

- (a) In $\text{kWh}$: $E = P \times t = 0.1\text{ kW} \times 5\text{ h} = \mathbf{0.5\text{ kWh}}$
- (b) In joules: $E = 100\text{ W} \times (5 \times 3600\text{ s}) = 100 \times 18{,}000 = \mathbf{1.8 \times 10^6\text{ J}}$

**Check:** Identical to the energy consumed by the $1500\text{ W}$ geyser in just 20 minutes (Example 7) ✅

---

## Part D: Practical Applications of Joule Heating

Joule heating is intentionally utilized in appliances engineered to produce heat:

| Appliance | Heating Component | Purpose |
|---|---|---|
| Toaster, electric iron, hair dryer, kettle, space heater | Coiled nichrome element | Converts electricity into thermal convective/radiant heat |
| Incandescent lamp | Fine tungsten filament | Heats to white incandescence ($\sim 2500\text{ }^\circ\text{C}$) to emit light |
| Soldering iron | High-resistance heating tip | Melts solder alloy for electronic repairs |
| Electric fuse | Low-melting-point alloy wire | Sacrificial thermal disconnect to protect wiring |

### Heating Elements: Why Nichrome?

The heating element of an electric iron, toaster, or space heater is made of **nichrome** (an alloy of $80\%$ nickel and $20\%$ chromium). Nichrome is chosen for three fundamental reasons:
1. **High Resistivity ($\rho \approx 1.1 \times 10^{-6}\text{ }\Omega\cdot\text{m}$):** Produces substantial electrical resistance in a relatively compact length, generating intense heat according to $H = I^2 R t$.
2. **High Melting Point ($\sim 1400\text{ }^\circ\text{C}$):** It can remain glowing cherry-red without softening or melting.
3. **Resistance to High-Temperature Oxidation:** Unlike pure iron, nichrome forms a protective passivating chromium oxide surface layer that prevents the wire from burning or corroding when exposed to air at red-hot temperatures.

### Incandescent Lamp Filaments: Why Tungsten?

Inside an incandescent lightbulb, a thin, coiled wire of pure **tungsten** is heated to approximately $2500\text{ }^\circ\text{C}$ to emit visible yellowish-white light. Tungsten is utilized because:
- It possesses the **highest melting point of all metals ($\sim 3422\text{ }^\circ\text{C}$)**, remaining solid at dazzling incandescent temperatures.
- It is ductile and can be drawn into microscopic filaments of high resistance.

**Inert Gas Filling:** The glass bulb is evacuated and backfilled with chemically inert gases (such as **argon mixed with nitrogen**). If air containing oxygen were present, the white-hot tungsten filament would instantly oxidize, vaporize, and burn out within milliseconds. The inert gas prevents oxidation and reduces filament evaporation.

*Efficiency Note:* In incandescent bulbs, **less than $5\%$ of consumed electrical energy is converted into visible light**; over $95\%$ is dissipated as wasted heat. Modern LED lamps are far more efficient because they emit light via direct solid-state electroluminescence, generating negligible waste heat.

---

## Part E: Fuses and Circuit Breakers: Household Protectors

### Overloading and Short Circuits

Excessive electric current can be triggered by two distinct failure modes:

1. **Overloading:** Occurs when too many appliances are plugged into the same electrical branch simultaneously. Because household appliances are connected in parallel, **total current drawn is the direct sum of all individual branch currents** ($I_{\text{total}} = I_1 + I_2 + I_3 + \dots$). If this combined current exceeds the safe carrying capacity of the supply wires, dangerous overheating occurs.
2. **Short Circuit:** Occurs when the insulation between the live and neutral conductors deteriorates or is punctured, allowing the bare wires to touch directly. Because the bypass path has near-zero resistance ($R \approx 0\text{ }\Omega$), Ohm's Law ($I = V / R$) dictates an **instantaneous current surge of hundreds or thousands of amperes**.

In both scenarios, Joule heating ($H = I^2 R t$) escalates violently with the square of current, melting PVC insulation and triggering devastating electrical structure fires.

### How an Electric Fuse Operates

An **electric fuse** is a deliberate weak link inserted into the circuit to prevent fire. It consists of a short length of thin alloy wire (traditionally made of tin and lead) possessing a **low melting point** and calibrated resistance.

**Placement:** A fuse must **always be connected in series with the live wire**:
- Under normal operating currents, the heat generated is safely radiated away, and the fuse wire remains solid.
- When an overcurrent or short circuit occurs, excessive Joule heating causes the temperature of the fuse wire to rapidly reach its melting point. The wire **melts and severs**, instantly opening the circuit. Current drops to zero, protecting the internal building wiring and appliances.

```
        Live wire
   ─────────[ FUSE ]────────────┐
                                │
                              ┌─┴─┐
                              │ A │  Appliance
                              └─┬─┘
   ─────────────────────────────┘
        Neutral wire

   FUSE in series with live wire: excessive current melts the fuse wire,
   breaking the circuit before the building wiring can ignite.
```

> **Figure 6.2** – An electric fuse connected in series on the live conductor. When current exceeds safe ratings, the sacrificial wire melts and isolates the circuit.

### Fuse Ratings

Fuses are calibrated and marked with standard current ratings: **$5\text{ A}, 10\text{ A}, 15\text{ A}, 30\text{ A}$**. The rating designates the maximum continuous current the fuse can carry without melting. A fuse rating must always be selected **slightly above the normal operating current** of the circuit.

### Miniature Circuit Breakers (MCBs)

In modern residential installations, traditional rewireable cartridge fuses have been widely superseded by **Miniature Circuit Breakers (MCBs)**:
- MCBs employ an internal bimetallic strip (for thermal overload) and an electromagnetic solenoid (for instantaneous short-circuit protection) to automatically "trip" an internal toggle switch open during fault conditions.
- Unlike sacrificial fuse wires that must be replaced after blowing, an MCB can be simply **reset by flipping its toggle lever back ON** once the electrical fault is cleared.

---

## Part F: Solving the Kitchen Power Strip Mystery (With Numbers)

We can now calculate the exact electrical conditions in Mrs. Clark's kitchen:

| Appliance | Rated Power ($P$) | Current at $230\text{ V}$ ($I = P / V$) |
|---|---|---|
| Toaster | $800\text{ W}$ | $\frac{800}{230} = \mathbf{3.48\text{ A}}$ |
| Food Mixer | $600\text{ W}$ | $\frac{600}{230} = \mathbf{2.61\text{ A}}$ |
| Steam Clothes Iron | $1000\text{ W}$ | $\frac{1000}{230} = \mathbf{4.35\text{ A}}$ |

Because all three appliances were plugged into the extension strip in parallel, the total current drawn through the power strip cord was the direct sum:
$$I_{\text{total}} = 3.48\text{ A} + 2.61\text{ A} + 4.35\text{ A} = \mathbf{10.44\text{ A}} \approx \mathbf{10.43\text{ A}}$$

*(Check via total power: $P_{\text{total}} = 800 + 600 + 1000 = 2400\text{ W} \implies I = \frac{2400\text{ W}}{230\text{ V}} = \mathbf{10.43\text{ A}}$).*

Now examine the physical ratings:
1. **The Extension Cord:** A standard light-duty multi-outlet strip is rated for a maximum continuous current of **$5\text{ A}$**. The actual current drawn ($10.43\text{ A}$) was more than double its rated capacity ($10.43 / 5 \approx 2.09$). By Joule's Law ($H \propto I^2$), the rate of heat generated in the cord jumped by $(2.09)^2 \approx \mathbf{4.4\text{ times}}$ its design limit! This caused the flexible copper cord to become dangerously hot to the touch.
2. **The Household Fuse:** The kitchen circuit was protected by a standard **$10\text{ A}$ fuse**. Because the drawn current ($10.43\text{ A}$) exceeded this $10\text{ A}$ threshold, the fuse wire steadily heated up until it reached its melting point, melting open with a snap and cutting power to protect the home from fire.

```
   Combined current of three kitchen appliances (each # represents ~0.5 A):

   Toaster  : ####### 3.48 A
   Mixer    : ##### 2.61 A
   Iron     : ######### 4.35 A
   ----------------------------------------
   Total    : ##################### 10.43 A

   Power strip cord limit (5 A) : ##########
   Kitchen circuit fuse (10 A)  : ####################
```

> **Figure 6.3** – Current accumulation in the kitchen circuit. The $10.43\text{ A}$ total current exceeded both the $5\text{ A}$ power strip cord limit and the $10\text{ A}$ household fuse threshold.

Mrs. Clark pointed out: "You see, Liam? Each appliance was completely safe on its own. But by clustering them together on one extension board, their combined parallel current overloaded both the power cord and the circuit fuse. The fuse performed its protective duty perfectly."

---

## Part G: Electrical Safety Rules

1. **Avoid Overloading Outlets:** Never daisy-chain multiple extension strips or run several high-power appliances (heaters, irons, kettles) from a single wall socket.
2. **Always Use Correctly Rated Fuses/MCBs:** Never replace a blown fuse with a higher-rated fuse or a piece of bare copper wire. A copper wire will not melt during a fault, causing the in-wall building wiring to overheat and ignite.
3. **Purchase Certified Appliances:** Use only appliances bearing recognized national safety certification marks (e.g., CE, UL, ISI).
4. **Never Operate Electrical Switches with Wet Hands:** Water contains dissolved mineral ions that dramatically reduce the electrical resistance of human skin, facilitating dangerous electric shocks.
5. **Always Disconnect Mains Power Before Repairs:** Isolate the circuit breaker and unplug the cord before servicing any electrical equipment.
6. **Ensure Effective Grounding (Earthing):** All appliances with exposed metallic chassis (refrigerators, washing machines, irons) must be connected to a three-prong plug with a reliable earth conductor to safely divert fault currents into the ground.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Confusing power with energy.**  
   *Correction:* Power (in watts or kilowatts) is the rate of energy consumption ($1\text{ W} = 1\text{ J/s}$). Energy (in joules or kilowatt-hours) is the total quantity of work done ($E = P \times t$). A $1000\text{ W}$ appliance has a power of $1\text{ kW}$; if operated for 2 hours, it consumes $2\text{ kWh}$ of energy.

2. **Mistake 2: Assuming heat is directly proportional to current.**  
   *Correction:* Joule's Law dictates that heat is proportional to the **square of current** ($H \propto I^2$). Doubling current increases heat output fourfold ($2^2 = 4$), not twofold.

3. **Mistake 3: Neglecting voltage dependence in appliance power ratings.**  
   *Correction:* A "60 W, 230 V" rating specifies $60\text{ W}$ strictly when operated at $230\text{ V}$. If connected across half the voltage ($115\text{ V}$), power dissipation drops to one-fourth ($P = V^2 / R \implies (1/2)^2 = 1/4 = 15\text{ W}$).

4. **Mistake 4: Replacing a blown fuse with copper wire.**  
   *Correction:* Copper has a high melting point ($1085\text{ }^\circ\text{C}$) and low resistance; it will not melt during an overcurrent event, destroying the safety protection and creating severe fire hazards.

5. **Mistake 5: Forgetting unit conversions during energy calculations.**  
   *Correction:* In $E = P \times t$, if $P$ is in watts, $t$ must be in **seconds** to yield joules ($1\text{ W} \times 1\text{ s} = 1\text{ J}$). If calculating kilowatt-hours, $P$ must be in **kilowatts** and $t$ in **hours**.

6. **Mistake 6: Believing higher-power appliances have higher resistance.**  
   *Correction:* At constant mains voltage ($230\text{ V}$), $R = V^2 / P$. Therefore, **higher power corresponds to smaller electrical resistance**. A $1000\text{ W}$ heater has $R = 52.9\text{ }\Omega$, whereas a $100\text{ W}$ lamp has $R = 529\text{ }\Omega$.

7. **Mistake 7: Thinking a heater cord carries less current than the heating coil.**  
   *Correction:* The cord and the element are in series; they carry the **identical current**. The element gets hot because its nichrome alloy has over 1000 times greater resistance than the copper cord ($H = I^2 R t$).

---

## Quick Recap

- When current flows through a resistance, drifting electrons collide with lattice ions, converting electrical energy into thermal heat.
- **Joule's Law of Heating:** $H = I^2 R t = V I t = \frac{V^2}{R} t$, measured in joules.
- Heat scales with the **square of current**: doubling current produces four times more heat.
- **Electric Power:** Rate of energy dissipation: $P = V I = I^2 R = \frac{V^2}{R}$, measured in **watts ($\text{W}$)** ($1\text{ W} = 1\text{ J/s} = 1\text{ V}\cdot\text{A}$).
- Commercial electrical energy is measured in **kilowatt-hours ($\text{kWh}$)**: $1\text{ kWh} = 3.6 \times 10^6\text{ J}$.
- **Heating elements** use **nichrome** due to its high resistivity, high melting point ($\sim 1400\text{ }^\circ\text{C}$), and resistance to oxidation.
- **Incandescent lamp filaments** use **tungsten** (melting point $\sim 3422\text{ }^\circ\text{C}$) surrounded by inert argon/nitrogen gas.
- **Connecting cords stay cool** because their copper conductors have very low resistance compared to the heating element.
- **Electric fuses** contain a low-melting-point wire connected in series on the live conductor. They melt to isolate circuits during overloads and short circuits.
- **MCBs** replace traditional fuses with resettable automatic trip switches.
- In Mrs. Clark's kitchen, running three appliances simultaneously drew $10.43\text{ A}$, exceeding both the $5\text{ A}$ power strip rating and the $10\text{ A}$ household fuse limit.

---

## Practice Questions

1. A steady electric current of $3\text{ A}$ passes through a $5\text{ }\Omega$ resistor for $20\text{ s}$. Calculate the total heat energy generated.

2. An electric iron is rated at $575\text{ W}, 230\text{ V}$. Calculate:  
   (a) The electric current it draws.  
   (b) Its operating resistance.  
   (c) The energy consumed in $10\text{ minutes}$ in joules.

3. A $40\text{ W}, 230\text{ V}$ fluorescent tube light is switched on. Find the current it draws and its operating resistance.

4. A $2.5\text{ kW}$ electric room heater is operated continuously for $2\text{ hours}$. Calculate the energy consumed: (a) in kilowatt-hours, (b) in joules.

5. If the current flowing through a fixed resistor is tripled while its resistance and operating time remain unchanged, by what factor does the generated heat increase?

6. A $1000\text{ W}$ electric immersion heater is used to heat $2\text{ kg}$ of water from $20\text{ }^\circ\text{C}$ to $60\text{ }^\circ\text{C}$. Assuming zero heat loss, find the thermal heat required and the time taken. (Take $c_{\text{water}} = 4200\text{ J/(kg}\cdot^\circ\text{C)}$).

7. Three appliances rated at $750\text{ W}$, $250\text{ W}$, and $1500\text{ W}$ operate simultaneously on a $230\text{ V}$ household circuit. Calculate the total current drawn and select an appropriate fuse rating from $5\text{ A}$, $10\text{ A}$, and $15\text{ A}$.

8. Explain in two to three sentences why a blown fuse must never be bridged with a thick copper wire.

9. A $40\text{ W}$ and a $100\text{ W}$ lightbulb, both rated for $230\text{ V}$, are connected in parallel across a $230\text{ V}$ line. Calculate the current drawn by each lamp. Which lamp glows brighter?

10. A portable electric heater rated at $1.5\text{ kW}$ operates on $230\text{ V}$. Calculate its normal operating current and its internal resistance.

11. State whether each statement is True or False, correcting any false statements:  
    (a) Doubling the current through a resistor doubles the heat produced in a given time.  
    (b) One kilowatt-hour is equivalent to $3.6 \times 10^6\text{ J}$.  
    (c) An electric fuse must always be connected in series with the live wire.  
    (d) A $100\text{ W}$ incandescent bulb has a higher electrical resistance than a $60\text{ W}$ bulb of the same voltage rating.

12. A $2000\text{ W}$ water geyser is connected to a branch protected by a $5\text{ A}$ fuse on a $230\text{ V}$ supply. What will happen when the geyser is switched on? Support your answer with a calculation.

13. The nichrome element of an electric heater glows cherry-red, whereas the copper power cord connecting it to the wall outlet remains only faintly warm, despite carrying the identical electric current. Explain this phenomenon using Joule's Law.

14. Convert $0.25\text{ kWh}$ of electrical energy into joules.

---

### Answers

1. $H = I^2 R t = (3\text{ A})^2 \times (5\text{ }\Omega) \times (20\text{ s}) = 9 \times 5 \times 20 = \mathbf{900\text{ J}}$.  
   *Check:* $V = I R = 3 \times 5 = 15\text{ V}$; $H = V I t = 15 \times 3 \times 20 = 900\text{ J}$ ✅

2. (a) $I = \frac{P}{V} = \frac{575\text{ W}}{230\text{ V}} = \mathbf{2.5\text{ A}}$.  
   (b) $R = \frac{V}{I} = \frac{230\text{ V}}{2.5\text{ A}} = \mathbf{92\text{ }\Omega}$ (or $R = \frac{V^2}{P} = \frac{52{,}900}{575} = 92\text{ }\Omega$).  
   (c) $t = 10\text{ min} = 600\text{ s}$. $E = P \times t = 575\text{ W} \times 600\text{ s} = \mathbf{345{,}000\text{ J}}$.  
   *Check:* $P = I^2 R = (2.5)^2 \times 92 = 6.25 \times 92 = 575\text{ W}$ ✅

3. $I = \frac{P}{V} = \frac{40\text{ W}}{230\text{ V}} \approx \mathbf{0.174\text{ A}}$.  
   $R = \frac{V^2}{P} = \frac{(230)^2}{40} = \frac{52{,}900}{40} = \mathbf{1322.5\text{ }\Omega}$.  
   *Check:* $V / I = 230 / 0.1739 \approx 1322.5\text{ }\Omega$ ✅

4. (a) $E = P \times t = 2.5\text{ kW} \times 2\text{ h} = \mathbf{5.0\text{ kWh}}$.  
   (b) In joules: $5.0 \times (3.6 \times 10^6\text{ J}) = \mathbf{1.8 \times 10^7\text{ J}}$ ($18{,}000{,}000\text{ J}$).  
   *Check:* $2500\text{ W} \times (2 \times 3600\text{ s}) = 2500 \times 7200 = 18{,}000{,}000\text{ J}$ ✅

5. Since $H \propto I^2$, tripling the current increases the heat generated by a factor of $3^2 = \mathbf{9\text{ times}}$.  
   *Check:* If $I = 1\text{ A} \implies H \propto 1$; if $I = 3\text{ A} \implies H \propto 9$ ✅

6. $\Delta T = 60\text{ }^\circ\text{C} - 20\text{ }^\circ\text{C} = 40\text{ }^\circ\text{C}$.  
   $Q = m c \Delta T = 2\text{ kg} \times 4200\text{ J/(kg}\cdot^\circ\text{C)} \times 40\text{ }^\circ\text{C} = \mathbf{336{,}000\text{ J}}$.  
   Time: $t = \frac{Q}{P} = \frac{336{,}000\text{ J}}{1000\text{ J/s}} = \mathbf{336\text{ s}}$ ($5\text{ minutes and } 36\text{ seconds}$).  
   *Check:* $1000\text{ W} \times 336\text{ s} = 336{,}000\text{ J}$ ✅

7. Total power $P = 750 + 250 + 1500 = 2500\text{ W}$.  
   Total current: $I = \frac{2500\text{ W}}{230\text{ V}} = \mathbf{10.87\text{ A}}$.  
   Since $10.87\text{ A} > 10\text{ A}$, a $10\text{ A}$ fuse will blow under normal load. Select a **$15\text{ A}$ fuse**.

8. A fuse wire protects electrical installations by possessing a low melting point so that it safely melts and severs the circuit during overcurrent. A thick copper wire has very low resistance and a very high melting point ($1085\text{ }^\circ\text{C}$); it will not melt during a fault, causing the building wiring to overheat and ignite a structure fire.

9. For $40\text{ W}$: $I_1 = \frac{40\text{ W}}{230\text{ V}} \approx \mathbf{0.174\text{ A}}$.  
   For $100\text{ W}$: $I_2 = \frac{100\text{ W}}{230\text{ V}} \approx \mathbf{0.435\text{ A}}$.  
   In parallel, both bulbs receive the full $230\text{ V}$; the **$100\text{ W}$ bulb dissipates more energy per second and glows brighter**.

10. $P = 1.5\text{ kW} = 1500\text{ W}$.  
    Current: $I = \frac{1500\text{ W}}{230\text{ V}} = \mathbf{6.52\text{ A}}$.  
    Resistance: $R = \frac{V^2}{P} = \frac{52{,}900}{1500} \approx \mathbf{35.3\text{ }\Omega}$.  
    *Check:* $230\text{ V} / 6.52\text{ A} \approx 35.3\text{ }\Omega$ ✅

11. (a) **False** ❌. Heat is proportional to $I^2$; doubling current quadruples heat.  
    (b) **True** ✅. $1\text{ kW} \times 3600\text{ s} = 3.6 \times 10^6\text{ J}$.  
    (c) **True** ✅. Placing the fuse in the live wire ensures the appliance is disconnected from high potential when the fuse blows.  
    (d) **False** ❌. At constant voltage, $R = V^2 / P$; higher power corresponds to lower resistance ($R_{100} = 529\text{ }\Omega < R_{60} = 881.7\text{ }\Omega$).

12. Normal current drawn: $I = \frac{2000\text{ W}}{230\text{ V}} \approx \mathbf{8.7\text{ A}}$. Because $8.7\text{ A}$ substantially exceeds the $5\text{ A}$ fuse threshold, the **$5\text{ A}$ fuse will overheat, melt, and sever the circuit immediately**. A $10\text{ A}$ or $15\text{ A}$ circuit rating is required.

13. The heater element and the copper cord are wired in **series**, meaning both carry the exact same electric current ($I$). According to Joule's Law ($H = I^2 R t$), the rate of heat generation is directly proportional to electrical resistance ($R$). The nichrome element has an intentionally high resistance (e.g., $52.9\text{ }\Omega$), whereas the thick copper cord has a near-zero resistance (e.g., $0.05\text{ }\Omega$). Consequently, the element generates over 1000 times more heat than the cord, glowing red-hot while the cord remains cool.

14. $E = 0.25\text{ kWh} \times (3.6 \times 10^6\text{ J/kWh}) = \mathbf{9.0 \times 10^5\text{ J} = 900{,}000\text{ J}}$.  
    *Check:* $0.25 \times 3600 \times 1000 = 900{,}000\text{ J}$ ✅

---

Liam now understands why the kitchen power cord grew warm under an excessive load, and how the fuse melted to prevent a dangerous electrical fire.

**What lies ahead?** In our final electricity topic, we will examine how electricity is safely distributed throughout modern buildings, how electric utility meters record household energy in kilowatt-hours, and investigate the final major consequence of electric current: **Household Wiring and the Chemical Effect of Electric Current**.
