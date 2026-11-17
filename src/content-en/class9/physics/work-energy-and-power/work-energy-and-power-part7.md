# Chapter: Work, Energy and Power (Part 7)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [work-energy-and-power-part6.md](work-energy-and-power-part6.md).** (The chapter began in [work-energy-and-power.md](work-energy-and-power.md).)
> **Topics covered in this file:**
> 7. Power: The Rate of Doing Work

---

# Topic 7: Power: The Rate of Doing Work

In the previous topic, we established the universal **Law of Conservation of Energy**: energy cannot be created from scratch nor destroyed, only transformed between forms. During free fall, gravitational potential energy transforms into kinetic energy, while the total mechanical energy ($KE + PE$) remains rock-solid constant. When friction acts, mechanical energy transforms into thermal energy and acoustic sound, yet the total energy ledger balances perfectly.

However, one fundamental practical question remains: **how quickly does this energy transfer occur?**

Lifting a heavy stone smoothly over an hour or hoisting it within a fraction of a second requires the exact same total work ($W = mgh$). A compact travel heater might take forty-five minutes to boil a litre of water, whereas an industrial induction kettle boils it in thirty seconds: both transfer the same amount of thermal energy, but at dramatically different **rates**.

In this concluding topic, we will define and measure the **rate of doing work—power**. We will also demystify domestic electricity bills and commercial billing units ($\text{kWh}$). Finally, we will review the entire chapter with an executive wrap-up summary.

Throughout this topic, we take **$g = 10\text{ m/s}^2$** for straightforward calculations.

---

## The Athletics Day Staircase Challenge

It was annual sports day at high school. Adjacent to the athletic track stood a concrete grandstand consisting of **$20$ stairs**, each with a vertical riser of **$0.2\text{ m}$**.

The athletics coach, **Coach Davies**, organized an experiment with two student volunteers of identical mass: **Leo** and **Liam**, both weighing **$50\text{ kg}$**.

1. First, **Leo** climbed the grandstand stairs at a steady, relaxed walking pace, reaching the top platform in **$20\text{ seconds}$**. At the top, his breathing was barely elevated.
2. Next, **Liam** sprinted up the identical staircase with maximum effort, reaching the top in just **$8\text{ seconds}$**. At the top, Liam doubled over, gasping for air, heart pounding rapidly.

Maya had been timing both runs with a stopwatch. She approached Coach Davies: "Coach, both boys have the exact same mass ($50\text{ kg}$), climbed the exact same $20$ stairs, and reached the exact same vertical elevation. Why was Liam so completely exhausted while Leo was relaxed? What is the physical difference between their performances?"

Coach Davies smiled. "Both boys performed the **exact same mechanical work**, Maya. But Liam delivered that work much **faster**. In physics, the rate at which work is done is called **power**."

Let us analyze the numbers behind this race.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Power ($P$)** | The rate of doing work, or the rate at which energy is transferred per unit time | The sprinter expended power at a much higher rate |
| **Watt ($\text{W}$)** | The standard SI unit of power: $1\text{ W} = 1\text{ J/s}$ | A standard $100\text{ W}$ household lightbulb |
| **Kilowatt ($\text{kW}$)** | One thousand watts ($1\text{ kW} = 1000\text{ W} = 10^3\text{ W}$) | A $1.5\text{ kW}$ split-system air conditioner |
| **Megawatt ($\text{MW}$)** | One million watts ($1\text{ MW} = 10^6\text{ W}$); used for industrial generators | Commercial electric power stations |
| **Horsepower ($\text{hp}$)** | Traditional imperial unit of mechanical power: $1\text{ hp} \approx 746\text{ W}$ | A $2\text{ hp}$ submersible water borehole pump |
| **Average power** | Total work done divided by the total time elapsed: $P_{\text{avg}} = \frac{W_{\text{total}}}{t_{\text{total}}}$ | Intermittent climbing and resting on stairs |
| **Kilowatt-hour ($\text{kWh}$)** | Commercial unit of electrical energy: energy consumed by a $1\text{ kW}$ load running for $1\text{ hour}$ | Domestic utility billing meters |
| **Commercial unit** | $1\text{ unit} = 1\text{ kWh} = 3.6 \times 10^6\text{ J}$ | An electricity bill showing $115.5\text{ units}$ |
| **Mechanical efficiency** | Ratio of useful work output to total energy input: $\eta = \frac{W_{\text{out}}}{E_{\text{in}}} \times 100\%$ | An electric motor operating at $80\%$ efficiency |

---

## Part A: What is Power?

### Two Students, Identical Mechanical Work

First, let us verify whether Leo and Liam truly did the identical amount of work. From Topic 1 and Topic 5, lifting a body vertically against gravity at steady speed requires an upward force equal to weight ($mg$). The work done equals the gravitational potential energy gained:

```
                               ________  <── Top Platform (4 m)
                          ____│
                     ____│          Each stair: 0.2 m high
                ____│               20 stairs in total
           ____│                    Total vertical height h = 20 × 0.2 m = 4 m
      ____│
  ___│
  :  Ground Level (0 m)
```

> **Figure 7.1** – A grandstand staircase of $20$ steps, each $0.2\text{ m}$ high. Both the walking student and the sprinting student lift their $50\text{ kg}$ body through a vertical elevation of $4\text{ m}$, performing identical work against gravity.

- Total vertical elevation:
  $$h = 20 \times 0.2\text{ m} = \mathbf{4\text{ m}}$$
- Weight of each student:
  $$F = mg = 50\text{ kg} \times 10\text{ m/s}^2 = \mathbf{500\text{ N}}$$
- Work done against gravity:
  $$W = F \times h = 500\text{ N} \times 4\text{ m} = \mathbf{2000\text{ J}}$$

**Check:** $W = mgh = 50 \times 10 \times 4 = 2000\text{ J}$ ✅.
Both students performed exactly **$2000\text{ J}$ of work**. The only difference was the **time taken**.

### The Definition of Power

> **Power is defined as the rate of doing work, or the rate of energy transfer per unit time.**
>
> $$P = \frac{W}{t} = \frac{E}{t}$$

Where:
- $W$ = work done, measured in joules ($\text{J}$)
- $E$ = energy transferred, measured in joules ($\text{J}$)
- $t$ = time taken, measured in seconds ($\text{s}$)
- $P$ = power, measured in watts ($\text{W}$)

### The Watt (W): The SI Unit of Power

Because work is measured in joules ($\text{J}$) and time in seconds ($\text{s}$), the SI unit of power is **joule per second ($\text{J/s}$)**. This unit is officially named the **watt ($\text{W}$)** in honor of the Scottish engineer James Watt:

> **$1\text{ W} = 1\text{ J/s}$**
>
> **One watt is the power of an appliance or agent that performs work at the rate of $1\text{ joule per second}$.**

For example, a **$100\text{ W}$ lightbulb** consumes **$100\text{ joules}$ of electrical energy every single second**, converting it into radiant light and thermal heat.

For larger systems, we use standard metric multiples:
- **$1\text{ kilowatt (kW)} = 1000\text{ W} = 10^3\text{ W}$**
- **$1\text{ megawatt (MW)} = 1\,000\,000\text{ W} = 10^6\text{ W}$** (used for commercial power plants)

**Power is a scalar quantity:** it possesses magnitude only, without direction.

### Resolving the Grandstand Race

Now let us calculate the power developed by each student:

- **Leo (Walking):**
  $$W = 2000\text{ J}, \quad t = 20\text{ s}$$
  $$P_{\text{Leo}} = \frac{W}{t} = \frac{2000\text{ J}}{20\text{ s}} = \mathbf{100\text{ W}}$$

- **Liam (Sprinting):**
  $$W = 2000\text{ J}, \quad t = 8\text{ s}$$
  $$P_{\text{Liam}} = \frac{W}{t} = \frac{2000\text{ J}}{8\text{ s}} = \mathbf{250\text{ W}}$$

**Check:** $100\text{ W} \times 20\text{ s} = 2000\text{ J}$ ✅ and $250\text{ W} \times 8\text{ s} = 2000\text{ J}$ ✅

```
 Work Done: 2000 J (identical for both)

 Leo (Walking)   : #################### 20 s  ──►  Power = 100 W
 Liam (Sprinting): ######## 8 s               ──►  Power = 250 W

 Identical work performed in less time  ════►  Higher power output
```

> **Figure 7.2** – Both students perform $2000\text{ J}$ of work. Leo takes $20\text{ s}$ ($100\text{ W}$), while Liam takes only $8\text{ s}$ ($250\text{ W}$). Delivering energy $2.5\text{ times}$ faster required Liam's muscles and heart to work at high cardiovascular power.

Coach Davies explained to Maya: "Liam's cardiovascular system had to burn glucose and deliver energy at $2.5\text{ times}$ the rate of Leo's ($250\text{ W}$ vs $100\text{ W}$). That rapid energy drain is why Liam was gasping for air. Having high power does not mean you do more total work; it means you perform work **faster**!"

---

## Part B: Average Power

In real life, people and machines rarely operate at a perfectly constant power output. A runner might sprint, slow down, and sprint again. In such cases, we compute the **average power**:

> $$\text{Average Power } (P_{\text{avg}}) = \frac{\text{Total Work Done}}{\text{Total Time Taken}} = \frac{\text{Total Energy Transferred}}{\text{Total Time Taken}}$$

Suppose another student sprints up the stairs in $8\text{ s}$ ($2000\text{ J}$ of work), and then rests motionless at the top for $12\text{ s}$ ($0\text{ J}$ of work).
- Total work done = $2000\text{ J} + 0\text{ J} = 2000\text{ J}$
- Total elapsed time = $8\text{ s} + 12\text{ s} = 20\text{ s}$
- Average power:
  $$P_{\text{avg}} = \frac{2000\text{ J}}{20\text{ s}} = \mathbf{100\text{ W}}$$

Even though his instantaneous power was $250\text{ W}$ during the sprint, his average power over the entire $20\text{ s}$ window was $100\text{ W}$.

---

## Part C: Typical Power Ratings of Everyday Machines and Appliances

To build practical intuition, examine these typical power ratings:

| Machine / Electrical Appliance | Typical Power Rating |
|---|---|
| Resting human adult (basal metabolic rate) | $\approx 100\text{ W}$ |
| LED / Fluorescent tube light | $15\text{ W} - 40\text{ W}$ |
| Ceiling circulation fan | $60\text{ W} - 75\text{ W}$ |
| Incandescent light bulb | $60\text{ W} - 100\text{ W}$ |
| Domestic refrigerator compressor | $150\text{ W} - 200\text{ W}$ |
| Washing machine motor | $500\text{ W}$ |
| Split-system air conditioner | $1500\text{ W} = 1.5\text{ kW}$ |
| Passenger car combustion engine | $60\text{ kW} - 150\text{ kW}$ ($80\text{ hp} - 200\text{ hp}$) |

Notice that an air conditioner ($1500\text{ W}$) consumes electrical energy fifteen times faster than a $100\text{ W}$ bulb ($\frac{1500}{100} = 15$).

### Horsepower (hp)

In mechanical engineering and automotive contexts, engine output is frequently cited in **horsepower ($\text{hp}$)**, an imperial unit introduced by James Watt:

> **$1\text{ hp} \approx 746\text{ W}$**

To convert from $\text{hp}$ to watts, **multiply by $746$**. To convert from watts to $\text{hp}$, **divide by $746$**.

---

## Part D: The Kilowatt-Hour: The Commercial Unit of Electrical Energy

### Why the Joule is Too Small for Utility Billing

A standard $100\text{ W}$ lightbulb running for just one hour consumes:
$$\text{Energy} = P \times t = 100\text{ W} \times 3600\text{ s} = 360\,000\text{ J}$$

If an electric utility company billed monthly household consumption in joules, monthly invoices would display cumbersome eight- and nine-digit numbers (e.g., $415\,800\,000\text{ J}$). To keep billing practical and readable, electrical power providers use a much larger commercial unit: the **kilowatt-hour ($\text{kWh}$)**.

### Definition of the Kilowatt-Hour

> **One kilowatt-hour ($1\text{ kWh}$) is the commercial unit of energy consumed by an electrical appliance of power rating $1\text{ kilowatt (1 kW)}$ operating continuously for a duration of $1\text{ hour}$.**

Let us derive the exact equivalence between kilowatt-hours and joules:
$$1\text{ kWh} = 1\text{ kW} \times 1\text{ hour} = 1000\text{ W} \times 3600\text{ s}$$
$$1\text{ kWh} = 3\,600\,000\text{ J} = \mathbf{3.6 \times 10^6\text{ J}}$$

**Verification:** $1000 \times 3600 = 3\,600\,000$ ✅

On domestic electricity meters and invoices:

> **$1\text{ Board of Trade Unit (or 1 "unit")} = 1\text{ kWh} = 3.6 \times 10^6\text{ J}$**

### Crucial Distinction: kWh is Energy, NOT Power!

Never confuse the kilowatt ($\text{kW}$) with the kilowatt-hour ($\text{kWh}$):
- **Kilowatt ($\text{kW}$):** A unit of **power** (rate of energy consumption).
- **Kilowatt-hour ($\text{kWh}$):** A unit of **total energy** ($\text{power} \times \text{time}$).

### The Energy Consumption Formula

Rearranging $P = \frac{E}{t}$:

> $$E = P \times t$$

- If $P$ is in **kilowatts ($\text{kW}$)** and $t$ is in **hours ($\text{h}$)**, energy $E$ is obtained directly in **$\text{kWh}$**.
- If $P$ is in **watts ($\text{W}$)** and $t$ is in **seconds ($\text{s}$)**, energy $E$ is obtained in **joules ($\text{J}$)**.

---

## Part E: Solved Examples

In all calculations below, take **$g = 10\text{ m/s}^2$**.

### Example 1: Calculating Power (W and t Given)

An electric motor performs $4800\text{ J}$ of mechanical work in $12\text{ seconds}$. Calculate its power output.

$$P = \frac{W}{t} = \frac{4800\text{ J}}{12\text{ s}} = \mathbf{400\text{ W}}$$

**Check:** $400\text{ W} \times 12\text{ s} = 4800\text{ J}$ ✅

### Example 2: Calculating Work (P and t Given)

A fluorescent tube rated at $40\text{ W}$ operates for $45\text{ seconds}$. How much electrical energy does it consume?

$$W = P \times t = 40\text{ W} \times 45\text{ s} = \mathbf{1800\text{ J} = 1.8\text{ kJ}}$$

**Check:** $\frac{1800\text{ J}}{45\text{ s}} = 40\text{ W}$ ✅

### Example 3: Calculating Time (W and P Given)

How long will it take a $250\text{ W}$ water pump to perform $6000\text{ J}$ of work?

$$t = \frac{W}{P} = \frac{6000\text{ J}}{250\text{ W}} = \mathbf{24\text{ s}}$$

**Check:** $250\text{ W} \times 24\text{ s} = 6000\text{ J}$ ✅

### Example 4: Power of a Water Borehole Pump

A pump lifts $600\text{ kg}$ of water to an overhead reservoir $10\text{ m}$ high in $60\text{ seconds}$. Calculate the minimum power rating of the pump.

- Work done against gravity:
  $$W = mgh = 600\text{ kg} \times 10\text{ m/s}^2 \times 10\text{ m} = 60\,000\text{ J}$$
- Power:
  $$P = \frac{W}{t} = \frac{60\,000\text{ J}}{60\text{ s}} = \mathbf{1000\text{ W} = 1\text{ kW}}$$

**Check:** $1000\text{ W} \times 60\text{ s} = 60\,000\text{ J}$ ✅

### Example 5: Power of a Construction Crane

A crane lifts an equipment crate of mass $1000\text{ kg}$ to a construction deck $10\text{ m}$ high in $20\text{ seconds}$. Find its power output.

- Work done:
  $$W = mgh = 1000\text{ kg} \times 10\text{ m/s}^2 \times 10\text{ m} = 100\,000\text{ J}$$
- Power:
  $$P = \frac{W}{t} = \frac{100\,000\text{ J}}{20\text{ s}} = \mathbf{5000\text{ W} = 5\text{ kW}}$$

**Check:** $5000\text{ W} \times 20\text{ s} = 100\,000\text{ J}$ ✅

### Example 6: Conversions Between Horsepower and Watts

(a) A workshop air compressor is rated at $2\text{ hp}$. Express its power in watts.
$$P = 2 \times 746\text{ W} = \mathbf{1492\text{ W} \approx 1.49\text{ kW}}$$

(b) A diesel pump delivers $3730\text{ W}$ of mechanical power. Express this rating in horsepower.
$$P = \frac{3730\text{ W}}{746\text{ W/hp}} = \mathbf{5\text{ hp}}$$

**Check:** $5 \times 746 = 3730\text{ W}$ ✅ and $\frac{1492}{746} = 2\text{ hp}$ ✅

### Example 7: Sprinting Up a Staircase

A high school student of mass $35\text{ kg}$ sprints up a flight of stairs of vertical height $4\text{ m}$ in $5\text{ seconds}$. Calculate the power developed.

- Work done against gravity:
  $$W = mgh = 35\text{ kg} \times 10\text{ m/s}^2 \times 4\text{ m} = 1400\text{ J}$$
- Power output:
  $$P = \frac{W}{t} = \frac{1400\text{ J}}{5\text{ s}} = \mathbf{280\text{ W}}$$

**Check:** $280\text{ W} \times 5\text{ s} = 1400\text{ J}$ ✅

### Example 8: Adult Climbing an Office Tower

An adult of mass $60\text{ kg}$ climbs a vertical elevation of $6\text{ m}$ in an office building in $30\text{ seconds}$. Calculate the power developed.

- Work done:
  $$W = mgh = 60\text{ kg} \times 10\text{ m/s}^2 \times 6\text{ m} = 3600\text{ J}$$
- Power:
  $$P = \frac{W}{t} = \frac{3600\text{ J}}{30\text{ s}} = \mathbf{120\text{ W}}$$

**Check:** $120\text{ W} \times 30\text{ s} = 3600\text{ J}$ ✅

### Example 9: Electrical Appliance Consumption in Kilowatt-Hours

Compute the energy consumed in $\text{kWh}$ for each appliance:
*(Rule: Convert $P$ to $\text{kW}$ by dividing by $1000$; keep $t$ in hours.)*

| Appliance | Power Rating ($P$) | Operating Time ($t$) | Energy Consumption ($E = P \times t$) |
|---|---|---|---|
| **Ceiling Fan** | $60\text{ W} = 0.06\text{ kW}$ | $10\text{ h}$ | $0.06\text{ kW} \times 10\text{ h} = \mathbf{0.6\text{ kWh}}$ |
| **Air Conditioner** | $1500\text{ W} = 1.5\text{ kW}$ | $8\text{ h}$ | $1.5\text{ kW} \times 8\text{ h} = \mathbf{12\text{ kWh}}$ |
| **Tube Light** | $40\text{ W} = 0.04\text{ kW}$ | $5\text{ h}$ | $0.04\text{ kW} \times 5\text{ h} = \mathbf{0.2\text{ kWh}}$ |

**Check:** $60 \times 10 = 600\text{ Wh} = 0.6\text{ kWh}$ ✅, $1500 \times 8 = 12\,000\text{ Wh} = 12\text{ kWh}$ ✅, $40 \times 5 = 200\text{ Wh} = 0.2\text{ kWh}$ ✅

### Example 10: Computing Electricity Costs

Assume an illustrative electricity tariff of **$\$6$ per unit (kWh)**. Find the daily operating cost for each appliance from Example 9:

| Appliance | Energy Consumed | Daily Cost (at $\$6\text{ per unit}$) |
|---|---|---|
| **Ceiling Fan** | $0.6\text{ kWh}$ | $0.6 \times \$6 = \mathbf{\$3.60}$ |
| **Air Conditioner** | $12\text{ kWh}$ | $12 \times \$6 = \mathbf{\$72.00}$ |
| **Tube Light** | $0.2\text{ kWh}$ | $0.2 \times \$6 = \mathbf{\$1.20}$ |

Total cost = $\$3.60 + \$72.00 + \$1.20 = \mathbf{\$76.80}$.
Total energy = $0.6 + 12 + 0.2 = 12.8\text{ kWh} \implies 12.8 \times \$6 = \$76.80$ ✅

Notice the striking contrast: running an air conditioner for eight hours costs twenty times more than running a fan for ten hours!

### Example 11: Household Monthly Electricity Bill

A household operates the following appliances during a $30\text{-day}$ billing month. Taking a tariff rate of **$\$6\text{ per unit (kWh)}$**, compute the total monthly electricity bill.

*(Note: The refrigerator compressor cycles on and off automatically; assume an effective active runtime of $8\text{ hours per day}$.)*

| Appliance | Total Power ($P$) | Daily Usage ($t$) | Daily Energy ($E_{\text{day}}$) | Monthly Energy ($30\text{ days}$) |
|---|---|---|---|---|
| **2 Tube Lights** ($40\text{ W}$ each) | $80\text{ W} = 0.08\text{ kW}$ | $5\text{ h}$ | $0.08 \times 5 = 0.4\text{ kWh}$ | $0.4 \times 30 = \mathbf{12\text{ kWh}}$ |
| **2 Ceiling Fans** ($60\text{ W}$ each) | $120\text{ W} = 0.12\text{ kW}$ | $10\text{ h}$ | $0.12 \times 10 = 1.2\text{ kWh}$ | $1.2 \times 30 = \mathbf{36\text{ kWh}}$ |
| **1 Refrigerator** | $200\text{ W} = 0.20\text{ kW}$ | $8\text{ h}$ | $0.20 \times 8 = 1.6\text{ kWh}$ | $1.6 \times 30 = \mathbf{48\text{ kWh}}$ |
| **1 Television** | $100\text{ W} = 0.10\text{ kW}$ | $4\text{ h}$ | $0.10 \times 4 = 0.4\text{ kWh}$ | $0.4 \times 30 = \mathbf{12\text{ kWh}}$ |
| **1 Washing Machine** | $500\text{ W} = 0.50\text{ kW}$ | $0.5\text{ h}$ | $0.50 \times 0.5 = 0.25\text{ kWh}$ | $0.25 \times 30 = \mathbf{7.5\text{ kWh}}$ |

- Total monthly energy:
  $$E_{\text{total}} = 12 + 36 + 48 + 12 + 7.5 = \mathbf{115.5\text{ kWh} = 115.5\text{ units}}$$
- Total monthly bill:
  $$\text{Cost} = 115.5\text{ units} \times \$6/\text{unit} = \mathbf{\$693.00}$$

**Check:** $12 + 36 = 48$; $48 + 48 = 96$; $96 + 12 = 108$; $108 + 7.5 = 115.5$ ✅. $115.5 \times 6 = \$693$ ✅

### Example 12: Cost Savings from Upgrading to LED Lighting

A homeowner replaces a traditional $100\text{ W}$ incandescent bulb with an energy-efficient $15\text{ W}$ LED bulb that produces the identical luminous output. Both operate for $5\text{ hours daily}$ over a $30\text{-day}$ month. At an assumed rate of **$\$6\text{ per unit}$**, calculate the monthly energy saved and financial savings.

- **$100\text{ W}$ Incandescent Bulb:**
  $$E_1 = 0.10\text{ kW} \times 5\text{ h} \times 30 = \mathbf{15\text{ kWh}}$$
- **$15\text{ W}$ LED Bulb:**
  $$E_2 = 0.015\text{ kW} \times 5\text{ h} \times 30 = \mathbf{2.25\text{ kWh}}$$
- **Energy Saved:**
  $$\Delta E = 15\text{ kWh} - 2.25\text{ kWh} = \mathbf{12.75\text{ kWh}}$$
- **Financial Savings:**
  $$\text{Savings} = 12.75\text{ units} \times \$6 = \mathbf{\$76.50}$$

**Check:** $0.10 \times 150 = 15$ ✅, $0.015 \times 150 = 2.25$ ✅, $15 - 2.25 = 12.75$ ✅, $12.75 \times 6 = \$76.50$ ✅

### Example 13: Converting Kilowatt-Hours to Joules

Convert $2\text{ kWh}$ into standard SI joules:

$$2\text{ kWh} = 2 \times (3\,600\,000\text{ J}) = \mathbf{7\,200\,000\text{ J} = 7.2 \times 10^6\text{ J}}$$

**Check:** $\frac{7\,200\,000}{3\,600\,000} = 2$ ✅

---

## Part F: Extension Topics: Power as $F \times v$ and Machine Efficiency

### Power as the Product of Force and Velocity ($P = Fv$)

When a mechanical force $F$ acts on an object moving at a constant speed $v$ in the direction of the force:
$$P = \frac{W}{t} = \frac{F \times s}{t} = F \times \left(\frac{s}{t}\right) = F \times v$$

> $$P = F \times v$$

*Example Application:* An elevator motor lifts a fully loaded cabin of mass $500\text{ kg}$ vertically upward at a constant speed of $2\text{ m/s}$. Find the required motor power.
- Upward force balancing weight: $F = mg = 500\text{ kg} \times 10\text{ m/s}^2 = 5000\text{ N}$.
- Power:
  $$P = F \times v = 5000\text{ N} \times 2\text{ m/s} = \mathbf{10\,000\text{ W} = 10\text{ kW}}$$

**Check via work:** In $1\text{ second}$, the elevator rises $2\text{ m}$. $W = 5000\text{ N} \times 2\text{ m} = 10\,000\text{ J}$. $P = \frac{10\,000\text{ J}}{1\text{ s}} = 10\,000\text{ W}$ ✅

### Mechanical Efficiency ($\eta$)

In real machines, internal friction, sound, and thermal dissipation prevent $100\%$ of input energy from becoming useful mechanical work:

$$\text{Efficiency } (\eta) = \frac{\text{Useful Work Output}}{\text{Total Energy Input}} \times 100\%$$

*Example:* An electric winch consumes $1000\text{ J}$ of electrical energy to deliver $800\text{ J}$ of useful lifting work.
$$\eta = \frac{800\text{ J}}{1000\text{ J}} \times 100\% = \mathbf{80\%}$$
The remaining $200\text{ J}$ ($20\%$) is dissipated as thermal heat and motor hum ($800\text{ J} + 200\text{ J} = 1000\text{ J}$, energy strictly conserved ✅).

---

## Common Pitfalls to Avoid

1. **Mistake 1: Confusing power with work and energy.**
   Work and energy are measured in joules ($\text{J}$); power is measured in watts ($\text{W} = \text{J/s}$). Power measures how *fast* work is performed, not how much work was accomplished. $2000\text{ J}$ is work; $100\text{ W}$ is power.

2. **Mistake 2: Treating the kilowatt-hour ($\text{kWh}$) as a unit of power.**
   $\text{kW}$ is power; $\text{kWh} = \text{kW} \times \text{hours}$ is **energy**. The "units" recorded on an electric utility meter represent energy consumed, not power.

3. **Mistake 3: Plugging time in minutes directly into $P = \frac{W}{t}$.**
   To calculate power in watts, time must always be in **seconds**. If a $500\text{ W}$ motor runs for $2\text{ minutes}$, convert first: $t = 2 \times 60 = 120\text{ s}$. Then $E = 500 \times 120 = \mathbf{60\,000\text{ J}}$.

4. **Mistake 4: Mixing watts and kilowatts when calculating kWh.**
   For a $1500\text{ W}$ air conditioner running for $8\text{ hours}$, writing $1500 \times 8 = 12\,000\text{ kWh}$ is completely incorrect by a factor of $1000$. Convert watts to kilowatts first: $1.5\text{ kW} \times 8\text{ h} = \mathbf{12\text{ kWh}}$.

5. **Mistake 5: Assuming higher power implies more total work done.**
   A high-power machine works faster, but total work depends on duration ($W = P \times t$). A $100\text{ W}$ motor running for $10\text{ hours}$ performs $3.6\text{ MJ}$ of work, far more than a $1000\text{ W}$ motor running for $10\text{ seconds}$ ($10\text{ kJ}$).

6. **Mistake 6: Inverting horsepower conversion factors.**
   $1\text{ hp} \approx 746\text{ W}$. To convert from $\text{hp}$ to $\text{W}$, multiply: $2\text{ hp} = 2 \times 746 = 1492\text{ W}$. Dividing would yield $0.00268\text{ W}$, an absurdly tiny value for a $2\text{ hp}$ engine.

---

## Quick Recap

- **Power:** The rate of doing work or transferring energy: $P = \frac{W}{t} = \frac{E}{t}$.
- **SI Unit:** **Watt ($\text{W}$)**, where $1\text{ W} = 1\text{ J/s}$. Larger units: $1\text{ kW} = 1000\text{ W}$, $1\text{ MW} = 10^6\text{ W}$, $1\text{ hp} \approx 746\text{ W}$.
- Power is a **scalar quantity**. Delivering the same work in less time requires greater power.
- **Average Power:** $P_{\text{avg}} = \frac{W_{\text{total}}}{t_{\text{total}}}$.
- **Commercial Unit of Energy:** **Kilowatt-hour ($\text{kWh}$)**.
  $$1\text{ kWh} = 1\text{ kW} \times 1\text{ h} = 1000\text{ W} \times 3600\text{ s} = \mathbf{3.6 \times 10^6\text{ J} = 3.6\text{ MJ}}$$
- Energy consumed: $E = P \times t$ (with $P$ in $\text{kW}$ and $t$ in hours).
- **Extension relations:** $P = Fv$ for constant velocity; Efficiency $\eta = \frac{\text{Output}}{\text{Input}} \times 100\%$.

---

## Practice Questions

1. A student of mass $40\text{ kg}$ runs up a hill to a vertical elevation of $5\text{ m}$ in $10\text{ seconds}$. Calculate the work done against gravity and her power output (take $g = 10\text{ m/s}^2$).

2. An electric motor rated at $750\text{ W}$ runs continuously for $4\text{ minutes}$. How much energy does it consume, expressed in joules?

3. A laboratory heating element of power $300\text{ W}$ must deliver $1200\text{ J}$ of heat energy to a beaker. How many seconds will this take?

4. An agricultural irrigation pump is rated at $3\text{ hp}$. What is its equivalent power rating in watts? (Take $1\text{ hp} = 746\text{ W}$).

5. A $2\text{ kW}$ domestic immersion heater operates for $3\text{ hours daily}$.
   (a) Calculate the electrical energy consumed per day in $\text{kWh}$.
   (b) If electricity costs $\$6\text{ per unit}$ (assumed tariff), calculate the daily running cost.

6. A school science wing contains $10$ fluorescent fixtures rated at $40\text{ W}$ each. If all fixtures remain illuminated for $6\text{ hours}$, calculate the total energy consumed in $\text{kWh}$.

7. Machine A lifts a $100\text{ kg}$ cargo pallet through a vertical height of $5\text{ m}$ in $10\text{ seconds}$. Machine B lifts the identical load through the same vertical height in $5\text{ seconds}$. Calculate the mechanical power developed by each machine (take $g = 10\text{ m/s}^2$).

8. An electric hoist motor consumes $2000\text{ J}$ of electrical energy and delivers $1500\text{ J}$ of useful mechanical lifting work. Calculate its efficiency percentage and the energy dissipated as heat and sound.

9. State whether each statement is **True** or **False**, providing a brief reason:
   (a) A kilowatt-hour ($\text{kWh}$) is a unit of mechanical power.
   (b) A machine with higher power output always accomplishes more total work than a lower-power machine.
   (c) An electrical appliance rated at $2\text{ kW}$ running for $30\text{ minutes}$ consumes $1\text{ kWh}$ of energy.

10. Two athletes carry identical $15\text{ kg}$ backpacks up the same flight of stairs. Athlete A walks slowly while Athlete B sprints up rapidly. Explain in your own words who performs more work and who develops more power.

### Answers

1. $W = mgh = 40\text{ kg} \times 10\text{ m/s}^2 \times 5\text{ m} = \mathbf{2000\text{ J}}$.
   $P = \frac{W}{t} = \frac{2000\text{ J}}{10\text{ s}} = \mathbf{200\text{ W}}$.
   Check: $200\text{ W} \times 10\text{ s} = 2000\text{ J}$ ✅

2. Time in seconds: $t = 4 \times 60 = 240\text{ s}$.
   $E = P \times t = 750\text{ W} \times 240\text{ s} = \mathbf{180\,000\text{ J} = 1.8 \times 10^5\text{ J} = 180\text{ kJ}}$.
   Check: $\frac{180\,000\text{ J}}{240\text{ s}} = 750\text{ W}$ ✅

3. $t = \frac{W}{P} = \frac{1200\text{ J}}{300\text{ W}} = \mathbf{4\text{ s}}$.
   Check: $300\text{ W} \times 4\text{ s} = 1200\text{ J}$ ✅

4. $P = 3 \times 746\text{ W} = \mathbf{2238\text{ W} \approx 2.24\text{ kW}}$.
   Check: $\frac{2238}{746} = 3\text{ hp}$ ✅

5. (a) $E = P \times t = 2\text{ kW} \times 3\text{ h} = \mathbf{6\text{ kWh}}$.
   (b) $\text{Cost} = 6\text{ units} \times \$6 = \mathbf{\$36.00\text{ per day}}$.
   Check: $\frac{6\text{ kWh}}{3\text{ h}} = 2\text{ kW}$ ✅, $\frac{\$36}{\$6} = 6\text{ units}$ ✅

6. Total power = $10 \times 40\text{ W} = 400\text{ W} = 0.4\text{ kW}$.
   $E = P \times t = 0.4\text{ kW} \times 6\text{ h} = \mathbf{2.4\text{ kWh}}$.
   Check: $400\text{ W} \times 6\text{ h} = 2400\text{ Wh} = 2.4\text{ kWh}$ ✅

7. Work done by each machine: $W = mgh = 100\text{ kg} \times 10\text{ m/s}^2 \times 5\text{ m} = 5000\text{ J}$.
   - Machine A: $P_A = \frac{5000\text{ J}}{10\text{ s}} = \mathbf{500\text{ W}}$.
   - Machine B: $P_B = \frac{5000\text{ J}}{5\text{ s}} = \mathbf{1000\text{ W} = 1\text{ kW}}$.
   Machine B develops twice the power because it accomplishes the identical work in half the time.
   Check: $500 \times 10 = 5000\text{ J}$ ✅, $1000 \times 5 = 5000\text{ J}$ ✅

8. $\text{Efficiency} = \frac{1500\text{ J}}{2000\text{ J}} \times 100\% = \mathbf{75\%}$.
   Dissipated energy = $2000\text{ J} - 1500\text{ J} = \mathbf{500\text{ J}}$.
   Check: $75\% \text{ of } 2000\text{ J} = 1500\text{ J}$ ✅; $1500 + 500 = 2000\text{ J}$ ✅

9. (a) **False** ❌: The kilowatt-hour ($\text{kWh}$) is a commercial unit of energy ($\text{power} \times \text{time}$), not power. The unit of power is the watt ($\text{W}$) or kilowatt ($\text{kW}$).
   (b) **False** ❌: Higher power means work is performed faster, but total work depends on operating duration ($W = P \times t$). A lower-power machine operating over a long duration can do vastly more work.
   (c) **True** ✅: $E = P \times t = 2\text{ kW} \times 0.5\text{ h} = 1\text{ kWh}$ ($30\text{ minutes} = 0.5\text{ h}$).

10. Both athletes lift the identical mass through the identical vertical elevation, so $W = mgh$ is equal for both—they do **identical mechanical work**.
    Athlete B sprints and completes the climb in a shorter time interval ($t$), so Athlete B develops **greater power** ($P = \frac{W}{t}$). The higher power demand requires a faster metabolic rate, which is why Athlete B experiences rapid cardiovascular fatigue.

---

Today on the stadium grandstand, Maya and Coach Davies illustrated an essential scientific distinction: how much work is done versus how rapidly that work is delivered. Now, whenever an electricity bill arrives, you can analyze its kilowatt-hour units and calculate exactly how much energy each appliance consumes.

---

# Chapter Wrap-up: Work, Energy and Power

| Topic | Core Physical Principle | Most Critical Takeaway |
|---|---|---|
| **1. What is Work?** | In physics, work requires both an applied force and displacement along the line of action of that force: $W = F \times s$. SI unit: joule ($1\text{ J} = 1\text{ N}\cdot\text{m}$). | If displacement is zero ($s = 0$), mechanical work is strictly zero, regardless of effort or fatigue. |
| **2. Positive, Negative and Zero Work** | The sign of work depends on the angle between force and motion: $0^\circ \rightarrow$ positive, $180^\circ \rightarrow$ negative, $90^\circ \rightarrow$ zero. | Negative work opposes displacement (removes energy); perpendicular forces do zero work. |
| **3. Energy and Its Forms** | Energy is the capacity to do work, measured in joules ($\text{J}$). Forms include mechanical, thermal, radiant, sound, electrical, chemical, and nuclear. | Energy flows and converts across transformation chains; work is the vehicle of energy transfer. |
| **4. Kinetic Energy** | Energy possessed due to motion: $KE = \frac{1}{2}mv^2$. Work-energy theorem: $W_{\text{net}} = \Delta KE$. | Kinetic energy grows with the square of speed ($v^2$): doubling speed quadruples $KE$ and quadruples stopping distance. |
| **5. Potential Energy** | Stored energy due to position or shape: gravitational $PE = mgh$. | Path-independent: depends strictly on vertical height $h$ above an arbitrary zero reference level. |
| **6. Conservation of Energy** | Energy cannot be created or destroyed, only transformed. In conservative systems: $KE + PE = \text{constant}$. | In free fall, $PE$ converts completely to $KE$ ($v = \sqrt{2gh}$); friction converts mechanical energy into heat and sound. |
| **7. Power and Commercial Energy** | Power is the rate of doing work: $P = \frac{W}{t} = \frac{E}{t}$. SI unit: watt ($1\text{ W} = 1\text{ J/s}$). Commercial unit: $1\text{ kWh} = 3.6 \times 10^6\text{ J}$. | Power measures speed of energy delivery, not total work; $1\text{ billing unit} = 1\text{ kWh}$. |

### Key Definitions and Units

| Physical Quantity | Scientific Definition | SI Unit and Symbol | Equivalent Dimensions |
|---|---|---|---|
| **Work ($W$)** | Product of force and displacement in the direction of force | Joule ($\text{J}$) | $1\text{ J} = 1\text{ N}\cdot\text{m} = 1\text{ kg}\cdot\text{m}^2/\text{s}^2$ |
| **Energy ($E$)** | Capacity or ability to perform mechanical work | Joule ($\text{J}$) | $1\text{ J} = 1\text{ N}\cdot\text{m}$ |
| **Kinetic Energy ($KE$)** | Energy possessed by an object due to its motion | Joule ($\text{J}$) | $\frac{1}{2}\text{kg}\cdot(\text{m/s})^2 = 1\text{ J}$ |
| **Potential Energy ($PE$)** | Energy stored due to position or configuration | Joule ($\text{J}$) | $\text{kg}\cdot(\text{m/s}^2)\cdot\text{m} = 1\text{ J}$ |
| **Power ($P$)** | Rate at which work is done or energy is transferred | Watt ($\text{W}$) | $1\text{ W} = 1\text{ J/s} = 1\text{ kg}\cdot\text{m}^2/\text{s}^3$ |
| **Kilowatt-hour ($\text{kWh}$)** | Commercial billing unit of electrical energy | $\text{kWh}$ | $1\text{ kWh} = 3.6 \times 10^6\text{ J} = 3.6\text{ MJ}$ |
| **Horsepower ($\text{hp}$)** | Traditional imperial unit of mechanical power | $\text{hp}$ | $1\text{ hp} \approx 746\text{ W}$ |

### Fundamental Formulae

| Physical Concept | Mathematical Formula | Key Variables and Conditions |
|---|---|---|
| **Mechanical Work** | $W = F \times s$ | $F$ in newtons ($\text{N}$), $s$ in metres ($\text{m}$) along force |
| **Kinetic Energy** | $KE = \frac{1}{2}mv^2$ | $m$ in $\text{kg}$, $v$ in $\text{m/s}$ |
| **Gravitational Potential Energy** | $PE = mgh$ | $h$ = vertical elevation above reference |
| **Work-Energy Theorem** | $W_{\text{net}} = \Delta KE = \frac{1}{2}mv^2 - \frac{1}{2}mu^2$ | Net external work equals change in $KE$ |
| **Conservation of Mechanical Energy** | $KE + PE = \text{constant}$ | Conservative systems (negligible friction) |
| **Free-Fall Velocity from Rest** | $v = \sqrt{2gh}$ | Mass cancels; independent of mass |
| **Power** | $P = \frac{W}{t} = \frac{E}{t}$ | $W$ in joules, $t$ in seconds |
| **Electrical Energy Consumed** | $E = P \times t$ | $P$ in $\text{kW}$, $t$ in hours $\implies \text{kWh}$ |
| **Commercial Unit Equivalence** | $1\text{ kWh} = 3.6 \times 10^6\text{ J}$ | $1000\text{ W} \times 3600\text{ s}$ |
| **Power at Constant Velocity** | $P = F \times v$ | Force along constant velocity vector |
| **Mechanical Efficiency** | $\eta = \frac{W_{\text{out}}}{E_{\text{in}}} \times 100\%$ | Ratio of useful output to total input |

### Three Cases of Work

| Case | Geometric Relationship | Angle ($\theta$) | Algebraic Sign of Work | Physical Consequence |
|---|---|---|---|---|
| **Positive Work** | Force and displacement in identical directions | $\theta = 0^\circ$ | $W > 0$ (Positive) | Energy transferred to object; speeds up |
| **Negative Work** | Force opposes displacement vector | $\theta = 180^\circ$ | $W < 0$ (Negative) | Energy removed from object; slows down |
| **Zero Work** | Force perpendicular to displacement ($90^\circ$) OR displacement is zero ($s = 0$) | $\theta = 90^\circ$ or $s = 0$ | $W = 0$ | No energy transferred along line of motion |

---

The subsequent chapter (*Machines*) examines mechanical devices (levers, pulleys, gears, and inclined planes) designed to make work easier by multiplying forces or changing directions: *"the identical work, accomplished with less applied force."*
