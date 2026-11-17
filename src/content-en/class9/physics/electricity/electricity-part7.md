# Chapter: Electricity (Part 7)

> **Class:** 9 | **Subject:** Physics
> **Preceded by:** [electricity-part6.md](electricity-part6.md) (covered Joule heating, electric power, fuses, and MCBs). The chapter began with electric charge in [electricity.md](electricity.md). For foundational energy and power concepts, see [work-energy-and-power-part7.md](../work-energy-and-power/work-energy-and-power-part7.md).
> **Topics covered in this file:**
> 7. Chemical Effect, Household Wiring, Electrical Safety, and the Electric Bill

---

# Topic 7: Chemical Effect, Household Wiring, Electrical Safety, and the Electric Bill

In the previous topic, we explored the thermal consequences of electric current ($H = I^2 R t$), calculated electric power ($P = V I$), and analyzed how fuses and circuit breakers prevent fires resulting from overloads and short circuits. We also established that the kilowatt-hour ($\text{kWh}$) is the commercial trade unit of energy ($1\text{ kWh} = 3.6 \times 10^6\text{ J}$).

In this concluding topic of the Electricity chapter, we investigate three vital areas:
1. The **chemical effect of electric current**, which enables industrial electroplating, water decomposition, and chemical storage batteries.
2. The architectural layout of **domestic household electrical wiring**, explaining live, neutral, and earth wires, three-pin sockets, and earthing protection.
3. How to read a domestic electric utility meter, compute **household electricity bills**, and implement energy conservation.

At the conclusion of this file, an exhaustive **Chapter Wrap-up** summarizes all major laws, equations, and principles developed across the seven topics.

---

## An Electricity Bill and a Tarnished Brass Faucet

On the first day of the month, the utility post delivered the household electric bill. Mrs. Miller placed the statement on the kitchen table alongside her morning tea. Her son Leo leaned over her shoulder to inspect the document.

"Mom," Leo asked, pointing at the printed summary, "it says **Units consumed: 240**, with a total amount due of **$\$1{,}440$** (calculated at an illustrative rate of $\$6\text{ per unit}$). What exactly is a 'unit'? In physics class, we measure mass in kilograms and length in meters. What physical quantity is this 'unit' measuring?"

Mrs. Miller smiled. "A wonderful observation, Leo. What other questions do you have?"

Leo continued: "Yesterday when the licensed electrician was repairing the patio fixture, I saw three insulated wires emerging from the wall conduit: red, black, and green. Why are there three separate wires? And finally, you mentioned that our antique bathroom brass faucet is dull and pitted, so you are sending it to a workshop for 'electroplating.' How can electricity restore the shine to a metal faucet?"

Mrs. Miller set down her teacup. "Three excellent questions: the nature of the utility billing unit, the roles of the three domestic supply wires, and the science of electroplating. Let us explore each of them step by step, beginning with the chemical effect of electric current."

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Chemical effect of current** | The chemical reactions and transformations induced by passing an electric current through a conducting liquid | Decomposing water into hydrogen and oxygen gases |
| **Electrolyte** | A liquid or molten solution containing mobile ions that conducts electricity | Aqueous solutions of mineral salts, acids, or alkalis |
| **Ion** | An atom or molecule that carries a net electrical charge due to gaining or losing electrons | $\text{Na}^+$ cation, $\text{Cl}^-$ anion |
| **Electrode** | A solid conducting rod or plate immersed in an electrolyte through which current enters or leaves | Carbon rods or copper plates connected to a battery |
| **Anode** | The positive ($+$) electrode connected to the positive terminal of the power supply | The pure copper plate in a copper electroplating bath |
| **Cathode** | The negative ($−$) electrode connected to the negative terminal of the power supply | The metal faucet being electroplated |
| **Electrolysis** | The chemical decomposition of an electrolyte driven by the passage of direct electric current | Industrial production of aluminium and chlorine |
| **Electroplating** | The deposition of a thin protective or decorative layer of a metal onto another conducting surface via electrolysis | Chromium plating on automotive bumpers and faucets |
| **Live (Phase) wire** | The high-potential supply conductor ($230\text{ V}$ AC) delivering electrical energy from the substation | Insulated in red (or brown) |
| **Neutral wire** | The return conducting path maintained near Earth potential ($0\text{ V}$) | Insulated in black (or blue) |
| **Earth (Ground) wire** | A dedicated protective safety conductor wired to a metal plate buried in the ground | Insulated in green (or green-with-yellow-stripes) |
| **Electric utility meter** | An instrument installed at the building entrance to integrate and record electrical energy consumption in $\text{kWh}$ | The rotating-disc or digital meter outside a house |
| **Billing "Unit"** | The commercial trade unit representing exactly one kilowatt-hour ($1\text{ kWh} = 3.6 \times 10^6\text{ J}$) | 240 units consumed on a monthly utility bill |

---

## Part A: The Chemical Effect of Electric Current

### Does Water Conduct Electricity?

In earlier topics, we established that solid metals conduct electricity via mobile free electrons. But can liquids conduct electric current?

Consider a simple tester circuit: a dry battery, a sensitive LED indicator, and two conducting copper leads immersed in a beaker of liquid:
- When the leads are dipped into **pure distilled water**, the LED **fails to illuminate**. Ultra-pure water contains virtually no free ions and is an electrical insulator.
- When a pinch of **table salt ($\text{NaCl}$)** or a few drops of **lemon juice (acid)** are dissolved into the water, the LED **glows brightly**!

Pure water is a poor conductor, but dissolving salts, acids, or bases introduces mobile charged particles called **ions**. A conducting ionic solution is called an **electrolyte**.

**The Conduction Mechanism in Liquids:**  
When an ionic compound dissolves, it dissociates into positive ions (**cations**, such as $\text{Na}^+$ or $\text{H}^+$) and negative ions (**anions**, such as $\text{Cl}^-$ or $\text{SO}_4^{2-}$). Under an applied electric potential:
- **Cations drift toward the negative cathode ($−$)**
- **Anions drift toward the positive anode ($+$)**

*Safety Implication:* Ordinary tap water, rainwater, and bodily perspiration contain dissolved minerals, making them electrical conductors. **This is why touching an electrical switch with wet hands or standing barefoot on a damp floor drastically lowers electrical resistance, allowing dangerous currents to pass through the body.**

### Electrolysis of Water

The chemical decomposition of water into its constituent elements by an electric current is called **electrolysis**.

**Apparatus:** A glass beaker containing water acidified with dilute sulfuric acid (to increase electrical conductivity), fitted with two platinum or carbon electrodes covered by inverted, water-filled graduated test tubes.

```
      Inverted Test Tube                     Inverted Test Tube
         (Cathode)                              (Anode)
          ┌───┐                                  ┌───┐
          │   │ Hydrogen gas (H₂)                │   │ Oxygen gas (O₂)
          │ H₂│ (2 volumes)                      │ O₂│ (1 volume)
          │   │                                  │   │
          └─┬─┘                                  └─┬─┘
            │                                      │
      ┌─────┼──────────────────────────────────────┼─────┐
      │     │         Acidulated Water             │     │
      │   ──┴──         (Electrolyte)            ──┴──   │
      │  Cathode (−)                           Anode (+) │
      └─────┬──────────────────────────────────────┬─────┘
            │                                      │
            └──────────────[ Battery ]─────────────┘
                           (−)     (+)
```

> **Figure 7.1** – Electrolysis of acidulated water: hydrogen gas collects at the negative cathode; oxygen gas collects at the positive anode. The volume of hydrogen produced is exactly twice the volume of oxygen ($2:1$).

When direct current is applied:
- Rapid bubbling occurs at both electrodes.
- **Hydrogen gas ($\text{H}_2$)** collects in the test tube above the **negative cathode ($−$)**.
- **Oxygen gas ($\text{O}_2$)** collects in the test tube above the **positive anode ($+$)**.
- The volume ratio of collected gases is precisely **$2:1$** ($\text{H}_2 : \text{O}_2 = 2 : 1$), reflecting the chemical stoichiometry of water ($\text{H}_2\text{O}$).

Because electricity chemically dissociates a chemical compound into new elementary substances, this phenomenon represents a **chemical effect of electric current**.

### Electroplating

**Electroplating** is the electrolytic process of depositing a thin, uniform, adherent coating of a superior or decorative metal onto the surface of another conducting object.

Consider electroplating a metal brass faucet or spoon with a brilliant layer of pure copper:
- **The Cathode ($−$):** Connected to the **object to be coated** (the brass faucet or spoon).
- **The Anode ($+$):** A solid slab of the **coating metal** (a pure copper plate).
- **The Electrolyte:** An aqueous salt solution of the coating metal (acidified copper sulfate solution, $\text{CuSO}_4$).

```
             ┌──────────[ DC Battery ]──────────┐
             │  (+)                         (−) │
             │                                  │
       ┌─────┼──────────────────────────────────┼─────┐
       │    ┌┴┐                                ┌┴┐    │
       │    │█│                                │░│    │
       │    │█│   Copper Sulfate Solution      │░│    │
       │    │█│        (CuSO₄)                 │░│    │
       │    └─┘                                └─┘    │
       └──────────────────────────────────────────────┘
         Anode (+):                          Cathode (−):
         Pure copper plate                   Brass faucet / spoon
                                             (to be electroplated)

    Copper atoms dissolve from anode (Cu → Cu²⁺ + 2e⁻)
    Copper ions deposit onto cathode (Cu²⁺ + 2e⁻ → Cu)
```

> **Figure 7.2** – Copper electroplating bath: copper dissolves from the positive anode and deposits as an even metallic layer onto the negative cathode.

**Electrochemical Reactions:**
1. At the anode ($+$), copper atoms lose two electrons, dissolving into solution as copper ions:  
   $$\text{Cu} \rightarrow \text{Cu}^{2+} + 2e^-$$
2. The blue $\text{Cu}^{2+}$ ions migrate through the electrolyte toward the negative cathode.
3. At the cathode ($−$), copper ions gain electrons, depositing as solid, metallic copper:  
   $$\text{Cu}^{2+} + 2e^- \rightarrow \text{Cu}$$

As copper atoms dissolve from the anode at the exact same rate they deposit onto the cathode, the concentration of the copper sulfate electrolyte remains virtually constant.

**Everyday Applications of Electroplating:**
1. **Chromium Plating:** Applied to automotive bumpers, bicycle handlebars, and bathroom faucets. Chromium provides a mirror-like decorative luster, resists surface scratches, and prevents corrosion.
2. **Gold and Silver Electroplating:** Used extensively in the jewelry and tableware industries to deposit thin precious-metal films onto inexpensive base metals (such as brass or nickel alloys).
3. **Tin Plating:** Steel cans used for food storage are electroplated with tin. Tin is non-toxic and unreactive, preventing acidic foodstuffs from contacting the underlying iron.
4. **Galvanization:** Coating steel and iron with a sacrificial layer of **zinc** to prevent structural rust (applied via electroplating or hot-dip immersion) on roofing sheets, utility poles, and water pipes.

### Electro-refining of Copper and Chemical Cells

- **Electro-refining:** Crude, impure blister copper is cast into heavy slabs used as anodes in an electrolytic cell. Pure thin copper sheets serve as cathodes. Under controlled current, pure copper selectively plates onto the cathodes, while impurities settle to the bottom as "anode slime" (containing gold and silver). This produces $99.99\%$ pure copper required for high-conductivity electrical cables.
- **Electrochemical Cells:** Just as electricity can drive chemical reactions, spontaneous chemical reactions can generate electricity:
  - **Primary Cells (e.g., zinc-carbon dry cells, alkaline batteries):** Chemical reactants convert into electrical energy irreversibly. Once reactants are exhausted, the cell is discarded.
  - **Secondary Cells (e.g., lead-acid automotive batteries, smartphone lithium-ion packs):** Reversible chemical reactions. Applying an external DC charging voltage reverses the chemical reaction, restoring active reactants for repeated use.

---

## Part B: Household Domestic Wiring (Conceptual Overview)

> [!CAUTION]
> **Essential Safety Notice:** Mains AC electricity ($230\text{ V}$) is lethal. The following descriptions explain structural principles for theoretical understanding only. **All domestic electrical installations, modifications, and repairs must be executed exclusively by licensed, certified electricians.**

### The Three-Wire Mains Service Line

Municipal electricity is distributed to homes as **$230\text{ V}, 50\text{ Hz}$ Single-Phase Alternating Current (AC)** via an underground or overhead three-wire service cable:

| Wire Name | Common Insulation Color | Electrical Function |
|---|---|---|
| **Live (Phase) Wire** | Red (or Brown) | Carries alternating high potential ($230\text{ V}$). **All switches, fuses, and circuit breakers must be inserted in this wire.** |
| **Neutral Wire** | Black (or Blue) | Completes the circuit loop back to the substation transformer; grounded at the substation ($0\text{ V}$ potential). |
| **Earth (Ground) Wire** | Green (or Green/Yellow striped) | Dedicated safety line connected directly to a copper earthing electrode buried deep in damp soil outside the building. |

The potential difference between Live and Neutral is $230\text{ V}$. Because the neutral wire is grounded at the distribution transformer, the potential difference between Neutral and Earth is virtually $0\text{ V}$. Touching the live wire while standing on the ground completes a circuit directly through your body to Earth, causing a severe or fatal electric shock.

### The Pathway of Electricity into a Home

Electrical energy enters a building through an organized hierarchy:
1. **Utility Service Fuse:** A high-capacity sealed utility fuse protecting the incoming service cable.
2. **Electric Utility Energy Meter:** A revenue meter recording cumulative energy consumed in kilowatt-hours ($\text{kWh}$).
3. **Main Distribution Switch / Main Breaker:** A double-pole master switch that isolates both live and neutral lines simultaneously.
4. **Consumer Distribution Board:** Splits incoming power into individual branch circuits:
   - **Lighting Circuits ($5\text{ A}$ rating):** Thin wiring powering ceiling lamps, fans, and low-power devices.
   - **Power Circuits ($15\text{ A}$ rating):** Thick, heavy-gauge copper wiring feeding high-current appliances (geysers, air conditioners, kitchen ovens).

```
   Live    (Red)   ──[Main Fuse]──[Energy Meter]──[Main Switch]──┬─────────┬──────────┐
                                                                 │         │          │
                                                               [Fuse]    [Fuse]    [Switch]
                                                                 │         │          │
                                                              [Switch]   [Switch]   [Fuse]
                                                                 │         │          │
                                                               (Lamp)     (Fan)    (Socket)──┐
                                                                 │         │          │     │
   Neutral (Black) ──────────────────────────────────────────────┴─────────┴──────────┘     │
                                                                                            │
   Earth   (Green) ────────────────────────────────────────── (Socket Earth Terminal) ───────┘
                            Bonded to buried copper grounding plate
```

> **Figure 7.3** – Schematic block diagram of domestic parallel wiring. Live line contains the main fuse, meter, and branch switches. Appliances connect in parallel across Live and Neutral. The Earth wire attaches to socket grounding pins.

### Why All Appliances Are Connected in Parallel

Every household lamp, fan, and wall socket is wired in **parallel** across the live and neutral supply rails. This topology ensures two non-negotiable benefits:
1. **Full Mains Potential for Every Device:** Every parallel branch receives the full rated $230\text{ V}$ supply, allowing appliances to operate at their rated power.
2. **Independent Control:** Every appliance operates on its own dedicated switch. Turning off or unplugging a toaster does not interrupt the circuit supplying the refrigerator or lighting.

### The Three-Pin Plug and Wall Socket

Portable electrical appliances with metallic enclosures connect to wall receptacles using a **three-prong (three-pin) plug**:

```
        ┌──────────────────────┐
        │          ██          │   <── Earth Pin (Longest, thickest, top-center)
        │          ██          │
        │                      │
        │    ●            ●    │   <── Live and Neutral Pins (Shorter, lower pair)
        └──────────────────────┘
          (Pin-facing view of a standard three-pin plug)
```

> **Figure 7.4** – Standard three-pin plug configuration: top grounding pin is intentionally longer and thicker than the live and neutral pins.

**Why the Earth Pin is Longer and Thicker:**
1. **First-to-Make, Last-to-Break Safety:** Because the earth pin is physically longer, when the plug is inserted into a wall socket, **the earth safety connection is established before the live and neutral pins make contact**. When unplugged, the earth connection breaks last. The appliance is never electrically energized without grounding protection.
2. **Thicker Diameter Prevents Misinsertion:** The larger diameter prevents the user from accidentally forcing the earth pin into a live socket aperture.

**How Earthing Protects Human Life:**  
Appliances like clothes irons, washing machines, and refrigerators have metal outer casings. Suppose an internal live wire suffers insulation chafing and contacts the metal chassis:
- **Without Earthing:** The entire metallic casing becomes energized at $230\text{ V}$. An individual touching the handle provides a path to ground, suffering a lethal shock.
- **With Earthing:** The metal casing is bonded directly to the low-resistance earth wire. When the live wire touches the casing, a massive surge of current flows directly through the earth wire into the ground ($I = V / R_{\text{earth}}$). This heavy current immediately **melts the circuit fuse or trips the circuit breaker**, instantly cutting power to the appliance and saving the user from injury.

> [!IMPORTANT]
> During normal operation, **zero current flows through the earth wire**. The live and neutral wires carry the entire operating current; the earth wire acts strictly as a dormant emergency safety bypass.

### Why Switches and Fuses Must Be Placed on the Live Wire

Switches, fuses, and circuit breakers must **always be installed on the live conductor**:
- When a switch on the live wire is turned **OFF**, the appliance is completely isolated from high potential ($230\text{ V}$). A homeowner can safely replace a lamp bulb without fear of electrocution.
- If a switch were erroneously installed on the **neutral wire**, turning the switch off would halt current flow, but **the internal components of the appliance would remain energized at $230\text{ V}$**. Touching the internal socket or heating element while grounded would cause a severe electric shock!

---

## Part C: Electrical Safety and First Aid

### Essential Safety Rules

1. **Avoid Overloading Sockets:** Never operate multiple heavy appliances (e.g., an iron, space heater, and toaster) simultaneously on a single power strip.
2. **Never Touch Electrical Fixtures with Wet Hands:** Moisture dramatically lowers the contact resistance of skin, enabling lethal currents to traverse the chest cavity.
3. **Never Replace a Blown Fuse with Thick Wire or Nails:** Using unrated wire bypasses circuit protection, allowing cables to overheat and ignite house fires.
4. **Isolate Mains Power Before Cleaning or Repairs:** Switch off the wall socket and unplug the appliance cord before inspecting or cleaning.
5. **Inspect Cords Regularly:** Discard extension cables with cracked insulation, exposed strands, or charred plug prongs.
6. **Protect Children with Safety Receptacle Plugs:** Install spring-loaded safety caps over unused floor-level outlets.
7. **Never Extinguish an Electrical Fire with Water:** Water conducts electricity and will electrocute the responder. Disconnect the main supply switch immediately and deploy a **Class C dry-chemical powder or carbon dioxide ($\text{CO}_2$) fire extinguisher**.
8. **Downed Power Line Safety:** Stay at least 10 meters away from fallen outdoor utility lines and contact emergency services immediately.

### First Aid in Case of Electric Shock

If you encounter an individual experiencing an electric shock:
- **DO NOT TOUCH THE VICTIM DIRECTLY.** If the victim remains in contact with a live conductor, your body will complete another path to ground, electrocuting you as well.
- **IMMEDIATELY SHUT OFF THE MAIN SWITCH.** Switch off the breaker on the distribution panel or pull the appliance plug.
- If the switch cannot be reached swiftly, stand on a dry, non-conducting insulator (a thick rubber mat, dry wooden board, or dry phonebook) and use a **dry wooden broom handle or plastic rod** to safely pry the victim or wire away.
- Call emergency medical services immediately. If the victim is unresponsive and not breathing, begin cardiopulmonary resuscitation (CPR) if trained.

### Additional Modern Safety Devices: MCBs and RCDs

- **Miniature Circuit Breaker (MCB):** Replaces rewireable fuses. Trips open electromechanically during overcurrent and can be easily reset with a toggle switch.
- **Residual Current Device (RCD) / Earth Leakage Circuit Breaker (ELCB):** Continuously compares the outgoing current in the live wire with the returning current in the neutral wire ($I_{\text{live}} \text{ vs. } I_{\text{neutral}}$). Under normal conditions, they are identical. If current leaks to ground through a person's body or faulty insulation, a tiny discrepancy (as small as $30\text{ mA}$) causes the RCD to trip open within **$30\text{ milliseconds}$**, preventing fatal cardiac electrocution.

---

## Part D: Understanding the Electricity Bill

### What is an Electrical "Unit"?

When electric utility companies issue a monthly electricity invoice, energy consumption is measured in commercial **"units"**:

> **$1\text{ Commercial Unit of Electricity} = 1\text{ kilowatt-hour (kWh)}$**  
> **$1\text{ kWh} = 1\text{ kW} \times 1\text{ hour} = 1000\text{ W} \times 3600\text{ s} = \mathbf{3.6 \times 10^6\text{ J}}$**

Energy consumption is calculated as:
$$\text{Energy (in kWh)} = \frac{\text{Power (in Watts)} \times \text{Time (in Hours)}}{1000}$$
$$\text{Total Cost} = \text{Units Consumed (kWh)} \times \text{Tariff Rate per Unit}$$

Throughout the following examples, we adopt an illustrative standard tariff of **$\$6\text{ per unit (kWh)}$**.

### Example 1: Energy Consumed by a Geyser
A $2000\text{ W}$ storage water heater runs for $30\text{ minutes}$. Calculate the electrical energy consumed in units.

- Power: $P = 2000\text{ W} = \frac{2000}{1000} = 2.0\text{ kW}$
- Time: $t = 30\text{ min} = 0.5\text{ h}$
- $E = P \times t = 2.0\text{ kW} \times 0.5\text{ h} = \mathbf{1.0\text{ kWh} = 1\text{ Unit}}$

**Check:** $2000\text{ W} \times 1800\text{ s} = 3{,}600{,}000\text{ J} = 3.6 \times 10^6\text{ J} = 1\text{ kWh}$ ✅

### Example 2: Calculating Operating Cost
Find the running cost of the $2000\text{ W}$ geyser in Example 1 at an illustrative rate of $\$6\text{ per unit}$.

- $\text{Cost} = 1\text{ Unit} \times \$6/\text{Unit} = \mathbf{\$6.00}$

**Check:** $1 \times 6 = 6$ ✅

### Example 3: Monthly Cost of an Incandescent Lamp
A $60\text{ W}$ incandescent bulb runs for $5\text{ hours daily}$. Determine the energy consumed over a 30-day billing month and the monthly operating cost at $\$6\text{ per unit}$.

- Power: $P = 60\text{ W} = 0.06\text{ kW}$
- Daily energy: $E_{\text{day}} = 0.06\text{ kW} \times 5\text{ h} = 0.3\text{ kWh}$
- Monthly energy (30 days): $E_{\text{month}} = 0.3\text{ kWh/day} \times 30\text{ days} = \mathbf{9\text{ kWh (9 Units)}}$
- Monthly cost: $9\text{ Units} \times \$6/\text{Unit} = \mathbf{\$54.00}$

**Check:** Total hours $= 150\text{ h}$; $E = 60\text{ W} \times 150\text{ h} = 9000\text{ Wh} = 9\text{ kWh}$ ✅

### Example 4: Full Monthly Energy Audit of a Household
Calculate the monthly electricity bill (30 days) at $\$6\text{ per unit}$ for a residence operating the following appliances:

| Appliance | Quantity & Power Rating | Daily Usage | Daily Energy ($\text{kWh}$) |
|---|---|---|---|
| Fluorescent Tube Lights | 4 units $\times 40\text{ W} = 160\text{ W}$ ($0.16\text{ kW}$) | $6\text{ h}$ | $0.16 \times 6 = \mathbf{0.96\text{ kWh}}$ |
| Ceiling Fans | 3 units $\times 75\text{ W} = 225\text{ W}$ ($0.225\text{ kW}$) | $10\text{ h}$ | $0.225 \times 10 = \mathbf{2.25\text{ kWh}}$ |
| Refrigerator | 1 unit $\times 150\text{ W}$ ($0.15\text{ kW}$) | $12\text{ h}$ (effective run time) | $0.15 \times 12 = \mathbf{1.80\text{ kWh}}$ |
| Television | 1 unit $\times 100\text{ W}$ ($0.10\text{ kW}$) | $5\text{ h}$ | $0.10 \times 5 = \mathbf{0.50\text{ kWh}}$ |
| Water Geyser | 1 unit $\times 2000\text{ W}$ ($2.00\text{ kW}$) | $1\text{ h}$ | $2.00 \times 1 = \mathbf{2.00\text{ kWh}}$ |
| Washing Machine | 1 unit $\times 500\text{ W}$ ($0.50\text{ kW}$) | $1\text{ h}$ | $0.50 \times 1 = \mathbf{0.50\text{ kWh}}$ |
| **Total Daily Energy** | | | **$8.01\text{ kWh/day}$** |

- Monthly energy consumption:  
  $$\text{Units Consumed} = 8.01\text{ kWh/day} \times 30\text{ days} = 240.3\text{ kWh} \approx \mathbf{240\text{ Units}}$$
- Total monthly bill:  
  $$\text{Bill} = 240\text{ Units} \times \$6/\text{Unit} = \mathbf{\$1{,}440.00}$$

**Check:** Matches the exact $240\text{ units}$ and $\$1{,}440$ bill received by Mrs. Miller in our opening story ✅

### Example 5: Energy and Cost Savings with LED Lamps
A home replaces a $60\text{ W}$ incandescent bulb with a $9\text{ W}$ LED lamp providing identical illumination. If used $5\text{ hours daily}$ for $30\text{ days}$, calculate the units and money saved at $\$6\text{ per unit}$.

- Incandescent bulb energy: $E_1 = 0.06\text{ kW} \times 5\text{ h} \times 30 = \mathbf{9.00\text{ kWh}}$
- LED lamp energy: $E_2 = 0.009\text{ kW} \times 5\text{ h} \times 30 = \mathbf{1.35\text{ kWh}}$
- Units saved: $9.00\text{ kWh} - 1.35\text{ kWh} = \mathbf{7.65\text{ Units (kWh)}}$
- Monthly financial savings: $7.65\text{ Units} \times \$6/\text{Unit} = \mathbf{\$45.90}$

**Check:** Power saved $= 60\text{ W} - 9\text{ W} = 51\text{ W} = 0.051\text{ kW}$; $0.051 \times 150\text{ h} = 7.65\text{ kWh}$ ✅

### Example 6: Reading an Electric Utility Meter
At the start of the month, a residential energy meter displayed $4580.5\text{ kWh}$. At the end of the month, it read $4820.5\text{ kWh}$. How many units were consumed?

```
   Final Month-End Reading   :   4 8 2 0 . 5   kWh
   Initial Month-Start Reading :   4 5 8 0 . 5   kWh
                                 ───────────
   Net Energy Consumed        :       2 4 0     kWh = 240 Units
```

> **Figure 7.5** – Meter reading subtraction: final index minus initial index equals net monthly energy consumed.

- $\text{Units Consumed} = 4820.5\text{ kWh} - 4580.5\text{ kWh} = \mathbf{240\text{ kWh (240 Units)}}$

**Check:** $4580.5 + 240 = 4820.5$ ✅

### Example 7: How Many 60 W Lamps on a 10 A Fuse?
A domestic $230\text{ V}$ lighting circuit is protected by a $10\text{ A}$ fuse. How many $60\text{ W}$ lamps can be operated in parallel without blowing the fuse?

- Maximum circuit power capacity: $P_{\text{max}} = V \times I_{\text{fuse}} = 230\text{ V} \times 10\text{ A} = 2300\text{ W}$
- Number of lamps: $N = \frac{2300\text{ W}}{60\text{ W/lamp}} = 38.33$
- Whole number of lamps: **38 lamps**

**Check:** $38 \times 60\text{ W} = 2280\text{ W} \le 2300\text{ W}$ ✅; adding a 39th lamp ($2340\text{ W}$) would draw $10.17\text{ A}$, blowing the fuse ✅

### Example 8: Current and Fuse Selection for a 1500 W Air Conditioner
A $1500\text{ W}$ room air conditioner operates on $230\text{ V}$. Find its operating current and choose an appropriate fuse rating.

- Operating current: $I = \frac{P}{V} = \frac{1500\text{ W}}{230\text{ V}} = \mathbf{6.52\text{ A}}$
- Fuse selection: Choose a standard **$10\text{ A}$ fuse** (a $5\text{ A}$ fuse would melt immediately).

**Check:** $230\text{ V} \times 6.52\text{ A} \approx 1500\text{ W}$ ✅

### Example 9: Gas Volumes in the Electrolysis of Water
During the electrolysis of acidulated water, $20\text{ mL}$ of hydrogen gas is collected in the cathode tube. What volume of oxygen gas collects at the anode?

- Stoichiometric ratio: $\text{Volume of } \text{H}_2 : \text{Volume of } \text{O}_2 = 2 : 1$
- $\text{Volume of } \text{O}_2 = \frac{20\text{ mL}}{2} = \mathbf{10\text{ mL}}$

**Check:** $20\text{ mL} / 10\text{ mL} = 2$ ✅

### Example 10: Peak Simultaneous Load Across All Appliances
If all appliances in Example 4 are switched on simultaneously, calculate the total power, total drawn current, and the required main service breaker rating.

- Total peak power: $P = 160\text{ W} + 225\text{ W} + 150\text{ W} + 100\text{ W} + 2000\text{ W} + 500\text{ W} = \mathbf{3135\text{ W}}$
- Peak current: $I = \frac{3135\text{ W}}{230\text{ V}} = \mathbf{13.63\text{ A}}$
- Breaker selection: The main service breaker should be rated at **$20\text{ A}$** (the next standard industrial size above $13.63\text{ A}$).

**Check:** $230\text{ V} \times 13.63\text{ A} \approx 3135\text{ W}$ ✅

### Example 11: Converting 240 Units into Joules
Express a monthly consumption of $240\text{ units}$ in joules.

- $E = 240 \times (3.6 \times 10^6\text{ J}) = 864 \times 10^6\text{ J} = \mathbf{8.64 \times 10^8\text{ J}}$ (864 megajoules)

**Check:** $\frac{8.64 \times 10^8}{3.6 \times 10^6} = 240\text{ kWh}$ ✅

### Example 12: Monthly Running Cost of a Refrigerator
A $150\text{ W}$ domestic refrigerator compressor runs for an average of $12\text{ hours daily}$. Find its monthly operating cost at $\$6\text{ per unit}$.

- Daily energy: $E_{\text{day}} = 0.15\text{ kW} \times 12\text{ h} = 1.8\text{ kWh}$
- Monthly energy (30 days): $1.8 \times 30 = \mathbf{54\text{ kWh (54 Units)}}$
- Monthly cost: $54\text{ Units} \times \$6/\text{Unit} = \mathbf{\$324.00}$

**Check:** $150\text{ W} \times 360\text{ h} = 54{,}000\text{ Wh} = 54\text{ kWh}$ ✅

---

## Part E: Practical Energy Conservation

Mrs. Miller shared effective household habits for reducing electricity bills:
- **Upgrade to High-Efficiency LED Lighting:** Replace all legacy incandescent and CFL fixtures with modern LEDs (reduces lighting energy by $> 80\%$).
- **Purchase High-Efficiency Energy-Star Appliances:** Choose refrigerators and air conditioners bearing top energy-efficiency ratings.
- **Eliminate Phantom "Vampire" Loads:** Switch off televisions, microwave displays, and chargers at the wall outlet rather than leaving them on standby.
- **Moderate Thermostat Setpoints:** Keep air conditioning set around $24\text{ }^\circ\text{C} - 25\text{ }^\circ\text{C}$ and insulate domestic water heaters.
- **Minimize Refrigerator Door Openings:** Avoid leaving refrigerator doors open during food preparation.

### How is Electricity Generated?
Bulk electricity supplied to cities originates in central power generation stations:
- **Thermal Power Plants:** Combustion of coal or natural gas boils water into high-pressure steam that spins turbine generators.
- **Hydroelectric Power Plants:** Falling water from high dams drives hydroelectric turbines.
- **Nuclear Power Plants:** Controlled nuclear fission generates steam to drive generators.
- **Renewable Energy:** Solar photovoltaic panels directly convert sunlight into electricity, while wind turbines harness kinetic air currents.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Placing the fuse or switch on the neutral wire.**  
   *Correction:* Switches and fuses must **always be installed on the live conductor**. Placing a switch on the neutral conductor leaves the appliance energized at $230\text{ V}$ even when switched off, posing a severe shock hazard.

2. **Mistake 2: Assuming the earth wire carries current during normal operation.**  
   *Correction:* In healthy operating circuits, current circulates exclusively between live and neutral. The earth wire carries current strictly during an electrical fault.

3. **Mistake 3: Confusing commercial "units" with power in watts.**  
   *Correction:* An electrical "unit" on a utility bill is an **energy unit** ($1\text{ Unit} = 1\text{ kWh} = 3.6 \times 10^6\text{ J}$), not power. Power is the rate of consumption in watts ($1\text{ W} = 1\text{ J/s}$).

4. **Mistake 4: Multiplying watts by hours directly to get units.**  
   *Correction:* Multiplying watts by hours yields watt-hours ($\text{Wh}$). You must divide by $1000$ to obtain kilowatt-hours ($\text{kWh}$). A $2000\text{ W}$ heater run for $0.5\text{ h}$ consumes $1\text{ kWh}$, not $1000\text{ kWh}$.

5. **Mistake 5: Believing household appliances are wired in series.**  
   *Correction:* Household loads are wired in parallel so that each appliance receives the full $230\text{ V}$ mains potential and functions independently.

6. **Mistake 6: Assuming pure distilled water is an electrical conductor.**  
   *Correction:* Pure water lacks mobile ions and behaves as an insulator. Water only conducts when dissolved minerals, acids, or salts create an electrolyte.

---

## Quick Recap

- **Chemical Effect:** Passing current through an electrolyte causes chemical decomposition driven by mobile ions (cations migrate to cathode, anions to anode).
- **Water Electrolysis:** Produces hydrogen at the negative cathode and oxygen at the positive anode in a $2:1$ volume ratio.
- **Electroplating:** Coats an object (cathode) with a protective metal (anode) using an electrolyte of that metal's salt. Widely used for chromium, tin, zinc (galvanization), and gold plating.
- **Mains Electrical Supply:** Delivered at $230\text{ V}, 50\text{ Hz}$ AC via three conductors: **Live (Red/Brown)**, **Neutral (Black/Blue)**, and **Earth (Green/Yellow)**.
- **Domestic Wiring:** Master service fuse $\rightarrow$ energy meter $\rightarrow$ main switch $\rightarrow$ consumer distribution board. Lighting circuits ($5\text{ A}$) and power circuits ($15\text{ A}$) are wired in **parallel**.
- **Three-Pin Plug:** The top earth pin is longer (makes contact first, breaks last) and thicker (prevents incorrect insertion).
- **Switches and Fuses:** Must always be inserted in the **live wire** for personal safety.
- **Electrical Safety:** Never use water on an electrical fire; do not overload sockets; never touch shock victims directly—shut off the main switch immediately.
- **Electricity Billing:** $1\text{ Unit} = 1\text{ kWh} = 3.6 \times 10^6\text{ J}$. $\text{Energy (kWh)} = \frac{P(\text{W}) \times t(\text{h})}{1000}$. $\text{Bill} = \text{Units} \times \text{Rate}$.

---

## Practice Questions

1. A $1000\text{ W}$ electric clothes iron is operated for $3\text{ hours}$. How many units of electrical energy are consumed, and what is the operating cost at an illustrative rate of $\$6\text{ per unit}$?

2. A $100\text{ W}$ television set operates for $5\text{ hours daily}$. Calculate the total units consumed over a 30-day billing month and the monthly cost at $\$6\text{ per unit}$.

3. An electric utility meter records an initial reading of $7250.0\text{ kWh}$ on the first day of the month and $7418.5\text{ kWh}$ on the final day. Calculate the net units consumed and the monthly bill at $\$6\text{ per unit}$.

4. A residential circuit protected by a $5\text{ A}$ fuse is connected to a $230\text{ V}$ supply. Can a $2000\text{ W}$ water geyser be safely operated on this circuit? Justify your answer with an explicit calculation.

5. A household replaces a $75\text{ W}$ incandescent bulb with a $12\text{ W}$ LED lamp. Both lamps run for $4\text{ hours daily}$ over a 30-day month. Determine the electrical units saved and the monthly cost savings at $\$6\text{ per unit}$.

6. In an experiment on the electrolysis of water, $25\text{ mL}$ of oxygen gas collects in the anode test tube. What volume of hydrogen gas collects in the cathode tube?

7. State whether each statement is True or False, providing a clear reason:  
   (a) Household switches must be connected on the neutral conductor.  
   (b) One commercial unit on an electricity bill corresponds to $1\text{ kWh}$.  
   (c) Ultra-pure distilled water is an excellent electrical conductor.  
   (d) In electroplating, the metal object to be coated must be made the cathode.

8. Explain why the earth pin of a three-pin plug is made longer and thicker than the live and neutral pins, and explain why metal-cased appliances require an earth wire.

9. A residence operates three $75\text{ W}$ fans and four $40\text{ W}$ fluorescent tubes simultaneously on a $230\text{ V}$ supply. Calculate the total power consumed and the total current drawn.

10. A $250\text{ W}$ domestic water pump operates for $3\text{ hours daily}$. Find the units consumed in a 30-day month and calculate the monthly cost at $\$6\text{ per unit}$.

11. An individual suffers an electric shock and remains immobilized against a live wire. State clearly the immediate actions you should take, and state what you must never do.

12. Name three industrial applications of electroplating, specifying the protective metal deposited in each case.

---

### Answers

1. $P = 1000\text{ W} = 1\text{ kW}$, $t = 3\text{ h}$.  
   $E = 1\text{ kW} \times 3\text{ h} = \mathbf{3\text{ kWh} = 3\text{ Units}}$.  
   $\text{Cost} = 3\text{ Units} \times \$6/\text{Unit} = \mathbf{\$18.00}$.  
   *Check:* $1000\text{ W} \times 3\text{ h} = 3000\text{ Wh} = 3\text{ kWh}$ ✅

2. Daily consumption: $0.1\text{ kW} \times 5\text{ h} = 0.5\text{ kWh/day}$.  
   Monthly consumption: $0.5\text{ kWh/day} \times 30\text{ days} = \mathbf{15\text{ kWh (15 Units)}}$.  
   $\text{Cost} = 15\text{ Units} \times \$6/\text{Unit} = \mathbf{\$90.00}$.  
   *Check:* $100\text{ W} \times 150\text{ h} = 15{,}000\text{ Wh} = 15\text{ kWh}$ ✅

3. $\text{Units Consumed} = 7418.5\text{ kWh} - 7250.0\text{ kWh} = \mathbf{168.5\text{ Units}}$.  
   $\text{Bill} = 168.5\text{ Units} \times \$6/\text{Unit} = \mathbf{\$1{,}011.00}$.  
   *Check:* $7250.0 + 168.5 = 7418.5$ ✅

4. Maximum current permitted by fuse: $5\text{ A}$.  
   Operating current of geyser: $I = \frac{P}{V} = \frac{2000\text{ W}}{230\text{ V}} \approx \mathbf{8.70\text{ A}}$.  
   Because $8.70\text{ A} > 5\text{ A}$, the **fuse will melt immediately; the appliance cannot be safely run on this circuit**. It requires a dedicated $15\text{ A}$ power circuit.

5. Incandescent lamp: $E_1 = 0.075\text{ kW} \times 4\text{ h} \times 30 = 9.00\text{ kWh}$.  
   LED lamp: $E_2 = 0.012\text{ kW} \times 4\text{ h} \times 30 = 1.44\text{ kWh}$.  
   $\text{Units Saved} = 9.00 - 1.44 = \mathbf{7.56\text{ Units (kWh)}}$.  
   $\text{Financial Savings} = 7.56\text{ Units} \times \$6/\text{Unit} = \mathbf{\$45.36}$.  
   *Check:* Power saved $= 63\text{ W}$; $0.063\text{ kW} \times 120\text{ h} = 7.56\text{ kWh}$ ✅

6. The gas volume ratio is $\text{H}_2 : \text{O}_2 = 2 : 1$.  
   $\text{Volume of } \text{H}_2 = 2 \times 25\text{ mL} = \mathbf{50\text{ mL}}$, collected at the **negative cathode**.  
   *Check:* $50 / 25 = 2$ ✅

7. (a) **False** ❌. Switches must be connected in the live wire so that switching off isolates the fixture from high potential.  
   (b) **True** ✅. One commercial unit represents $1\text{ kWh} = 3.6 \times 10^6\text{ J}$.  
   (c) **False** ❌. Pure water lacks free ions and is an insulator; conduction requires dissolved ions.  
   (d) **True** ✅. Positive metal ions migrate to and deposit on the negative cathode.

8. The earth pin is made **longer** so that it establishes grounding contact before the live and neutral pins engage during insertion, and disengages last upon removal. It is made **thicker** to prevent incorrect insertion into live apertures. In metal-cased appliances, if an insulation failure energizes the chassis, the low-resistance earth wire carries the fault current safely into the ground, instantly blowing the fuse or tripping the breaker to prevent human electrocution.

9. Total power: $P = (3 \times 75\text{ W}) + (4 \times 40\text{ W}) = 225\text{ W} + 160\text{ W} = \mathbf{385\text{ W}}$.  
   Total current drawn: $I = \frac{P}{V} = \frac{385\text{ W}}{230\text{ V}} \approx \mathbf{1.67\text{ A}}$.  
   *Check:* $230\text{ V} \times 1.674\text{ A} = 385\text{ W}$ ✅

10. Daily energy: $E_{\text{day}} = 0.25\text{ kW} \times 3\text{ h} = 0.75\text{ kWh/day}$.  
    Monthly energy: $0.75 \times 30 = \mathbf{22.5\text{ Units (kWh)}}$.  
    Monthly cost: $22.5\text{ Units} \times \$6/\text{Unit} = \mathbf{\$135.00}$.  
    *Check:* $250\text{ W} \times 90\text{ h} = 22{,}500\text{ Wh} = 22.5\text{ kWh}$ ✅

11. **Immediate Actions:** Immediately turn off the main distribution switch or pull the appliance plug. If the switch cannot be reached, stand on dry wood, rubber, or paper and use a clean, dry wooden stick to push the victim or conductor away. Summon medical help immediately.  
    **What You Must NEVER Do:** Never touch the victim directly with bare hands or conductive tools while they remain in contact with the live wire.

12. (i) **Chromium Plating:** Deposited on automotive parts and bathroom plumbing fixtures to provide corrosion resistance and mirror shine.  
    (ii) **Tin Plating:** Deposited on steel food cans to prevent food contamination and corrosion.  
    (iii) **Zinc Galvanization:** Deposited on iron structural girders and fencing to prevent rusting.

---

# Chapter Wrap-up: Electricity

| Topic | Key Principles Explored | Central Takeaway |
|---|---|---|
| **1. Electric Charge and Static Electricity** | Charging by friction, conduction, induction; conductors vs. insulators; gold-leaf electroscope; lightning conductors. | Electric charge is conserved ($Q = n e$). Like charges repel; unlike charges attract. |
| **2. Electric Current and Circuits** | Current $I = Q/t$; ampere ($1\text{ A} = 1\text{ C/s}$); conventional vs. electron current; open, closed, and short circuits; ammeters inline in series. | Current is the rate of flow of charge. Closed circuits are required for continuous flow. |
| **3. Potential Difference and Voltage** | Voltage $V = W/Q$; volt ($1\text{ V} = 1\text{ J/C}$); water pressure analogy; energy transfer $W = V I t$; voltmeters connected in parallel. | Potential difference is the electrical driving push per unit charge. |
| **4. Ohm's Law and Resistance** | $V \propto I \implies V = I R$; ohm ($1\text{ }\Omega = 1\text{ V/A}$); $V\text{--}I$ graph slope equals $R$; factors affecting resistance ($R = \rho l / A$). | In ohmic conductors at constant temperature, current scales directly with applied voltage. |
| **5. Combinations of Resistors** | Series: $I$ constant, $V$ divides, $R_s = R_1 + R_2$; Parallel: $V$ constant, $I$ divides, $\frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2}$; circuit reduction. | Series increases net resistance; parallel branching decreases net resistance below the smallest branch. |
| **6. Heating Effect and Electric Power** | Joule's Law: $H = I^2 R t$; electric power $P = V I = I^2 R = V^2 / R$; commercial unit $1\text{ kWh} = 3.6 \times 10^6\text{ J}$; fuses and MCBs. | Heating scales with the square of current ($I^2$). Fuses protect circuits by melting during overloads. |
| **7. Chemical Effect, Wiring, and Bills** | Water electrolysis ($2\text{ H}_2 : 1\text{ O}_2$); electroplating; Live, Neutral, and Earth wiring; safety grounding; billing units ($\text{kWh}$). | Domestic wiring is parallel; switches belong in live conductors; $1\text{ unit} = 1\text{ kWh}$. |

### Key Definitions and Units

| Physical Property | Definition | SI Unit |
|---|---|---|
| **Electric Charge ($Q$)** | Fundamental property causing electrostatic forces | Coulomb ($\text{C}$) |
| **Electric Current ($I$)** | Time rate of charge flow across a cross-section ($I = Q/t$) | Ampere ($\text{A} = \text{C/s}$) |
| **Potential Difference ($V$)** | Work done in moving unit charge between two points ($V = W/Q$) | Volt ($\text{V} = \text{J/C}$) |
| **Electrical Resistance ($R$)** | Opposition to the flow of electric charges ($R = V/I$) | Ohm ($\Omega = \text{V/A}$) |
| **Resistivity ($\rho$)** | Intrinsic material resistance of a unit cube ($R = \rho l / A$) | Ohm-meter ($\Omega\cdot\text{m}$) |
| **Electric Power ($P$)** | Rate of electrical energy consumption ($P = W/t = V I$) | Watt ($\text{W} = \text{J/s}$) |
| **Commercial Energy ($E$)** | Integrated energy over time ($E = P \times t$) | Kilowatt-hour ($\text{kWh} = 3.6 \times 10^6\text{ J}$) |
| **Electrolyte** | Ionic conducting solution | Dimensionless / Chemical solution |
| **Fuse Rating** | Maximum allowable continuous current before melting | Ampere ($\text{A}$) |

### Essential Formulas

| Physical Law / Relationship | Mathematical Expression | Notes |
|---|---|---|
| **Electric Current** | $I = \frac{Q}{t}$ | $Q$ in coulombs, $t$ in seconds |
| **Electric Potential** | $V = \frac{W}{Q}$ | $W$ in joules, $Q$ in coulombs |
| **Ohm's Law** | $V = I \times R$ | Ohmic conductors at constant temperature |
| **Resistance Geometry** | $R = \rho \frac{l}{A}$ | $\rho$ in $\Omega\cdot\text{m}$, $l$ in $\text{m}$, $A$ in $\text{m}^2$ |
| **Series Resistance** | $R_{\text{series}} = R_1 + R_2 + R_3 + \dots$ | Current $I$ is constant |
| **Parallel Resistance** | $\frac{1}{R_{\text{parallel}}} = \frac{1}{R_1} + \frac{1}{R_2} + \dots$ | For two resistors: $R_{\text{eq}} = \frac{R_1 R_2}{R_1 + R_2}$ |
| **Joule's Heating Law** | $H = I^2 R t = V I t = \frac{V^2}{R} t$ | Scales with $I^2$ |
| **Electric Power** | $P = V I = I^2 R = \frac{V^2}{R}$ | $1\text{ W} = 1\text{ J/s}$ |
| **Electrical Energy** | $E = P \times t$ | In joules ($P$ in W, $t$ in s) or kWh ($P$ in kW, $t$ in h) |
| **Commercial Energy** | $1\text{ kWh} = 3.6 \times 10^6\text{ J}$ | $1\text{ unit} = 1\text{ kWh}$ |

### Domestic Wiring Overview

| Conductor | Common Color | Potential | Role & Connection |
|---|---|---|---|
| **Live (Phase)** | Red / Brown | $230\text{ V}$ AC | Delivers energy; carries switches, fuses, and circuit breakers. |
| **Neutral** | Black / Blue | $\sim 0\text{ V}$ (Grounded at substation) | Completes circuit path back to supply. |
| **Earth (Ground)** | Green / Yellow-Green | $0\text{ V}$ (Buried plate) | Safety line bonded to metal chassis; drains fault currents to trip fuse. |

### Comparing Series and Parallel Circuits

| Feature | Series Circuit | Parallel Circuit |
|---|---|---|
| **Circuit Current** | Identical through all components | Divides across branches ($I_{\text{total}} = \sum I_n$) |
| **Potential Difference** | Divides across components ($V_{\text{total}} = \sum V_n$) | Identical across all branches |
| **Equivalent Resistance** | Increases: $R_{\text{eq}} = \sum R_n$ | Decreases: $\frac{1}{R_{\text{eq}}} = \sum \frac{1}{R_n}$ |
| **Component Removal** | Interrupts entire circuit | Other branches remain fully active |
| **Application** | Decorative strings, safety interlocks | Household domestic wiring, vehicles |

---

With this comprehensive foundation in electrostatics, dynamic currents, potential differences, resistor networks, thermal dissipation, domestic wiring architecture, and electrochemical transformations, you are thoroughly prepared for the final chapter of Class 9 Physics: **Magnetism and Electromagnetism**.
