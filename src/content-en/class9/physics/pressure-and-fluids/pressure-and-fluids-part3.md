# Chapter: Pressure and Fluids (Part 3)

> **Class:** 9 | **Subject:** Physics  
> **This file continues from [pressure-and-fluids-part2.md](pressure-and-fluids-part2.md)** (which covered how liquid pressure increases with depth via $P = h \rho g$).  
> **Topics covered in this file:**  
> 3. Pascal's Law and Hydraulic Machines  

---

# Topic 3: Pascal's Law and Hydraulic Machines

In the previous topic, we saw that liquid pressure increases linearly with depth due to the liquid's own downward gravitational weight ($P = h \rho g$), and at any horizontal level, pressure is identical throughout. Now, consider a compelling new question: what happens if we apply an **external force** to an enclosed liquid? Does that applied pressure remain localized where we press, or does it transmit across the entire fluid? The answer to this question is **Pascal's Law**, the foundational principle behind **hydraulic machines** that allow a person to effortlessly hoist a multi-tonne car using just a gentle hand pump!

In all numerical calculations in this topic requiring $g$, we use $g = 10\text{ m/s}^2$ unless specified otherwise.

---

## The Hydraulic Car Lift at the Service Station

On a bright Saturday morning, Leo accompanied his father to an automotive service station to have their family car inspected. The head mechanic, **Mr. Harrison**, welcomed them and guided Leo safely behind the yellow safety line: "Watch from right here, Leo—you will see some remarkable engineering today."

The family sedan had a mass of approximately **one tonne ($1000\text{ kg}$)**. A junior technician guided the vehicle onto the heavy steel platform of a hydraulic lift. Then, the technician stepped over to a small hand lever and began pumping it smoothly up and down with gentle, effortless strokes.

Leo watched in sheer amazement: **the entire $1000\text{ kg}$ automobile began gliding steadily upward into the air**, rising smoothly toward the ceiling as if lifted by an invisible giant!

Leo turned to Mr. Harrison with wide eyes: "Mr. Harrison, that car weighs a thousand kilograms! The technician barely pushed the lever with one arm, using almost no visible effort. How can such a modest push hoist a heavy steel car?"

Mr. Harrison chuckled warmly, "There is no magic trick here, Leo. It is all thanks to a **fundamental law of fluid mechanics discovered by Blaise Pascal**. Let us master the principle first, and then we will calculate the exact numbers behind our car lift together!"

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Fluid** | Any substance capable of flowing: both liquids and gases | Water, hydraulic brake oil, air |
| **Enclosed (confined) fluid** | Fluid sealed completely within a closed container with no exit pathways | Water trapped inside a sealed syringe |
| **Pascal's Law** | Pressure applied to an enclosed fluid is transmitted equally and undiminished in all directions throughout the fluid and to the walls of its container | Squeezing a tube of toothpaste |
| **Piston** | A tightly fitted sliding disc or cylinder that moves within a chamber to exert or receive fluid force | The movable plunger of a medical syringe |
| **Hydraulic machine** | A fluid-based mechanical device utilizing connected pistons of differing areas to multiply force | Hydraulic service lifts, hydraulic car jacks |
| **Incompressible** | Incapable of being significantly compressed; volume remains virtually constant under applied pressure | Liquids (e.g., water, oil) |
| **Compressible** | Easily compressed; volume decreases dramatically under applied pressure | Gases (e.g., atmospheric air) |
| **Force multiplier** | A mechanical device that amplifies an input force by a factor equal to the area ratio ($A \div a$) | A hydraulic lift with a mechanical advantage of $100$ |

---

## Part A: Pascal's Law

In Topic 1, we defined pressure as force per unit area:

$$P = \frac{F}{A}$$

measured in pascals ($\text{Pa}$), where $1\text{ Pa} = 1\text{ N/m}^2$.

Now suppose a liquid is sealed inside an airtight, rigid vessel, and we exert an external force upon it. **Pascal's Law** states:

> **Pressure exerted anywhere upon a confined, incompressible fluid is transmitted equally and undiminished in all directions throughout the entire fluid, and acts at right angles to the container walls.**

In simple words: when you push on an enclosed liquid at one point, that exact same increase in pressure spreads instantly **everywhere**, to every single droplet of the liquid and against every square centimetre of the container boundary. It does not dissipate, nor does it act only downwards.

*(Note: Pascal's Law describes the transmission of externally applied pressure. The liquid's native hydrostatic pressure due to gravity, $P = h \rho g$, continues to exist alongside it.)*

### Three Simple Demonstrations of Pascal's Law

**1) A Perforated Flask Fitted with a Plunger (Pascal's Vane / Syringe)**  
Take a spherical glass or plastic bulb with small pinholes punctured across its surface. Fit a tight movable plunger at the neck, fill the bulb completely with water, and push the plunger inward.

```
          Push plunger downward (applied force F)
                      │
                      v
                 +---------+
                 │  [___]  │   <- Plunger / piston
              ---+         +---
         <== o   │  WATER  │   o ==>
         <== o   │         │   o ==>
              ---+         +---
                 │    o    │
                 +----v----+
                      v  (Water jets burst out in all directions)
```

> **Figure 3.1** – Pushing the plunger drives identical water jets outward from every hole with equal speed, whether the hole is on the top, side, or bottom, proving that pressure transmits undiminished in all directions.

**2) Squeezing a Tube of Toothpaste**  
When you squeeze a tube of toothpaste near the bottom or in the middle, paste squirts out of the open nozzle at the front. If there were a tiny puncture anywhere on the side or rear of the tube, paste would squirt out of that hole as well. The applied squeezing pressure propagates throughout the entire viscous fluid.

**3) A Water-Filled Balloon with Needle Pricks**  
Fill a rubber balloon with water, tie the neck firmly, and gently prick multiple microscopic holes across its surface with a fine needle. When you squeeze the balloon with your palms, uniform jets of water spray outward in every direction simultaneously. Because the needle holes are microscopic, the balloon acts effectively as an enclosed hydraulic system.

```
               .-"""""""-.
              /  o   o   o\      <- Microscopic pinholes
         ==> │  o  WATER  o│ <==
              \  o   o   o/
               '-._____.-'
                  ^ ^ ^
           Squeeze with hands
```

> **Figure 3.2** – Compressing a water-filled balloon forces identical water streams from every hole, demonstrating uniform, multidirectional pressure transmission.

### Why Do Hydraulic Machines Use Liquids Rather Than Gases?

Every practical hydraulic machine uses **liquid** (typically specially formulated, high-viscosity mineral oil) rather than gas (air). Here is why:

- **Liquids are virtually incompressible:** Squeezing a liquid causes negligible change in its volume. Therefore, every bit of external thrust applied at the input piston is transferred directly and immediately into transmitted pressure.
- **Gases are highly compressible:** When you push down on a gas, its molecules are pushed closer together and its volume shrinks substantially. Most of the input mechanical work is wasted merely compressing the gas rather than transmitting forceful pressure to lift a load.

This explains why automotive hydraulic brakes become dangerously **"spongy"** if air bubbles leak into the brake lines. When the driver presses the brake pedal, the spongy air bubble simply compresses and squashes down, preventing the full hydraulic pressure from reaching the brake pads at the wheels!

---

## Part B: How a Hydraulic Lift Works

Let us return to the service station lift that fascinated Leo. A hydraulic lift consists of two interconnected cylinders filled with hydraulic oil, joined at the bottom by a connecting pipe:

- One cylinder is **narrow**, fitted with a small input piston of cross-sectional area $a$.
- The second cylinder is **broad**, fitted with a large load piston of cross-sectional area $A$.

```
       F1 (gentle input push)             F2 (massive upward force)
                │                                    ^
                v                                    │
           +---------+                     +--------------------+
           │  Small  │                     │    Large Piston    │
           │ Piston  │                     │      (Area A)      │
           │ (Area a)│                     +---+            +---+
           +---+ +---+                         │            │
               │ │       Hydraulic Oil         │            │
               │ +-----------------------------+            │
               +--------------------------------------------+
```

> **Figure 3.3** – A hydraulic lift: two oil-filled cylinders interconnected by a base pipe. A modest downward force $F_1$ applied to the small piston (area $a$) yields an amplified upward force $F_2$ on the large piston (area $A$).

**The Step-by-Step Physics:**

1. A technician applies a modest downward force $F_1$ to the small piston of area $a$. This generates an increase in pressure in the hydraulic fluid:
   $$P = \frac{F_1}{a}$$

2. By **Pascal's Law**, this pressure $P$ transmits undiminished through the connecting fluid to the underside of the large piston.

3. The fluid now presses upward against the broad underside of the large piston (area $A$), producing an upward force $F_2$:
   $$F_2 = P \times A$$

4. Because the transmitted pressure $P$ is identical on both sides:
   $$\frac{F_1}{a} = \frac{F_2}{A}$$

5. Rearranging this equality gives the celebrated hydraulic equation:
   > **$F_2 = F_1 \times \left(\frac{A}{a}\right)$**

Because the large piston's area $A$ is many times greater than the small piston's area $a$, the output force $F_2$ is multiplied by the ratio $\frac{A}{a}$. If the broad piston has $100$ times the surface area of the narrow piston, the resulting lifting force is **$100$ times greater** than the applied input force! This is why a hydraulic lift is classified as a **force multiplier**.

**The Fundamental Principle:** The **pressure** acting on both pistons is **identical**. The **force** differs because the surface areas differ ($F = P \times \text{Area}$).

### Is This "Free Energy"? No! The Conservation of Work

At first glance, multiplying an input force by a factor of $100$ might seem to defy the laws of nature. Does a hydraulic lift generate free energy? **Absolutely not!** Nature demands a strict trade-off:

- The small piston must be pushed downward through a **long distance** ($d_1$).
- The large piston rises through only a **very small distance** ($d_2$).

Because liquids are incompressible, the volume of fluid displaced downward from the small cylinder must exactly equal the volume of fluid entering the large cylinder:

$$\text{Volume displaced} = a \times d_1 = A \times d_2$$

Rearranging:
$$d_2 = d_1 \times \left(\frac{a}{A}\right)$$

Notice what happens: **the force increases by the factor $\frac{A}{a}$, but the travel distance decreases by the exact same factor $\frac{a}{A}$!**

Multiplying force by distance on each side reveals:
$$F_1 \times d_1 = F_2 \times d_2$$

The mechanical work done on the small piston equals the mechanical work performed by the large piston! A hydraulic machine cannot multiply energy or work; it simply trades **a smaller force applied over a longer stroke for a huge force exerted over a tiny stroke**.

---

## Part C: The Math Behind the Story: Lifting a Car

Let us calculate the exact numbers from Leo's visit to Mr. Harrison's service station.

**Example 1 (The Service Station Lift):**  
A car has a mass of $1000\text{ kg}$. The small piston has a cross-sectional area $a = 10\text{ cm}^2$, and the large platform piston has an area $A = 1000\text{ cm}^2$. What downward force $F_1$ must the mechanic apply to lift the car? ($g = 10\text{ m/s}^2$).

**Step 1: Calculate the car's weight (load force $F_2$ on the large piston)**
$$F_2 = m \times g = 1000\text{ kg} \times 10\text{ m/s}^2 = \mathbf{10,000\text{ N}}$$

**Step 2: Calculate the area ratio (mechanical advantage)**
$$\frac{A}{a} = \frac{1000\text{ cm}^2}{10\text{ cm}^2} = \mathbf{100}$$
*(Since both areas are in the same units of $\text{cm}^2$, the units cancel cleanly.)*

**Step 3: Calculate the required input force $F_1$**
$$F_1 = \frac{F_2}{\left(\frac{A}{a}\right)} = \frac{10,000\text{ N}}{100} = \mathbf{100\text{ N}}$$

A gentle push of just **$100\text{ N}$** (the gravitational weight of a light $10\text{ kg}$ object) is sufficient to hoist a $1000\text{ kg}$ car!

**Verification (Equality of Pressure):**
- Pressure at small piston: $P_1 = \frac{100\text{ N}}{10\text{ cm}^2} = \frac{100\text{ N}}{0.001\text{ m}^2} = 100,000\text{ Pa} = 10^5\text{ Pa}$
- Pressure at large piston: $P_2 = \frac{10,000\text{ N}}{1000\text{ cm}^2} = \frac{10,000\text{ N}}{0.1\text{ m}^2} = 100,000\text{ Pa} = 10^5\text{ Pa}$  
Both pressures match perfectly: $P_1 = P_2 = 1 \times 10^5\text{ Pa}$ ✅

**Stroke Distance Analysis:**  
If the mechanic wants to elevate the car by $1\text{ cm}$ ($d_2 = 1\text{ cm}$), how far must the small piston travel downward?
$$d_1 = d_2 \times \left(\frac{A}{a}\right) = 1\text{ cm} \times 100 = \mathbf{100\text{ cm}} = \mathbf{1\text{ m}}$$

**Verification of Work:**
- Work input on small piston: $W_1 = F_1 \times d_1 = 100\text{ N} \times 1\text{ m} = \mathbf{100\text{ J (or N}\cdot\text{m)}}$
- Work output on large piston: $W_2 = F_2 \times d_2 = 10,000\text{ N} \times 0.01\text{ m} = \mathbf{100\text{ J (or N}\cdot\text{m)}}$ ✅

This completely demystified the process for Leo: the technician applied a gentle $100\text{ N}$ force, but had to pump the lever through a total travel distance of $1\text{ metre}$ to raise the car by just $1\text{ centimetre}$. **Small force $\times$ large distance = Huge force $\times$ small distance!**

---

## Part D: Practical Applications of Hydraulic Machines

Pascal's principle is harnessed across modern industry, transportation, and medicine:

| Machine | Everyday Function |
|---|---|
| **Hydraulic car lift** | Elevates vehicles in automotive service bays for underbody repairs |
| **Hydraulic brakes** | Transmits foot pedal force through brake lines to clamp heavy brake callipers on all four wheels |
| **Hydraulic bottle jack** | Portable device used by drivers to hoist heavy trucks and cars for roadside tyre changes |
| **Dentist / barber chair** | A foot pedal gently pumps fluid to adjust chair height and recline heavy patients |
| **Hydraulic press (Bramah press)** | Compresses scrap metal, crushes automotive bodies, stamps metal panels, and bales raw cotton |
| **Excavator hydraulic arms** | Heavy construction machinery using high-pressure hydraulic cylinders to dig through solid rock |

### Schematic of an Automotive Hydraulic Braking System

```
   Foot pushes brake pedal (Input force F1)
             │
             v
        +----------+                            +------------------+
        |  Master  |========= Hydraulic Oil ====|   Wheel Slave    |--> Brake pads clamp
        | Cylinder |      (brake fluid lines)   |     Cylinder     |    firmly against 
        +----------+                            +------------------+    spinning brake disc
```

> **Figure 3.4** – Automotive hydraulic braking system: a driver’s modest foot push on the master cylinder generates hydraulic pressure that propagates instantly to the larger wheel cylinders, clamping the brake pads tightly against the spinning wheels.

---

## Part E: Solved Examples

*(Recall: $1\text{ cm}^2 = 10^{-4}\text{ m}^2 = 0.0001\text{ m}^2$ and $1\text{ cm} = 0.01\text{ m}$. In ratio calculations, ensure both piston areas use the same units.)*

### Example 2: Finding Output Force

In a hydraulic press, the small piston has an area of $5\text{ cm}^2$ and the large piston has an area of $500\text{ cm}^2$. If a force of $50\text{ N}$ is applied to the small piston, calculate the output force generated at the large piston.

- Area ratio: $\frac{A}{a} = \frac{500\text{ cm}^2}{5\text{ cm}^2} = 100$
- Output force: $F_2 = F_1 \times \left(\frac{A}{a}\right) = 50\text{ N} \times 100 = \mathbf{5000\text{ N}}$

**Verification:**  
$\frac{F_1}{a} = \frac{50\text{ N}}{5\text{ cm}^2} = 10\text{ N/cm}^2$; $\frac{F_2}{A} = \frac{5000\text{ N}}{500\text{ cm}^2} = 10\text{ N/cm}^2$ ✅ (Pressure is identical).

### Example 3: Finding Required Input Force

A hydraulic jack is designed to raise a heavy load of $8000\text{ N}$. The small piston has a cross-sectional area of $20\text{ cm}^2$ and the large piston has an area of $800\text{ cm}^2$. What input force must be applied to the small piston?

- Area ratio: $\frac{A}{a} = \frac{800\text{ cm}^2}{20\text{ cm}^2} = 40$
- Input force: $F_1 = \frac{F_2}{\left(\frac{A}{a}\right)} = \frac{8000\text{ N}}{40} = \mathbf{200\text{ N}}$

**Verification:** $F_1 \times 40 = 200\text{ N} \times 40 = 8000\text{ N} = F_2$ ✅

### Example 4: Finding Required Piston Area

An industrial actuator must exert an output force of $20,000\text{ N}$ when driven by an input force of $200\text{ N}$. If the small input piston has an area of $4\text{ cm}^2$, what must the surface area of the large piston be?

- Force multiplication factor: $\frac{F_2}{F_1} = \frac{20,000\text{ N}}{200\text{ N}} = 100$
- Required area: $A = a \times \left(\frac{F_2}{F_1}\right) = 4\text{ cm}^2 \times 100 = \mathbf{400\text{ cm}^2}$

**Verification:** $F_2 = 200\text{ N} \times \frac{400\text{ cm}^2}{4\text{ cm}^2} = 200 \times 100 = 20,000\text{ N}$ ✅

### Example 5: Circular Pistons with Known Radii

A hydraulic press has circular pistons. The small piston has a radius of $1\text{ cm}$, and the large piston has a radius of $10\text{ cm}$. A force of $30\text{ N}$ is applied to the small piston. Calculate the force exerted on the large piston.

The area of a circle is $A = \pi r^2$. Since $\pi$ appears in both areas, it cancels when taking the ratio:
$$\frac{A}{a} = \frac{\pi R^2}{\pi r^2} = \left(\frac{R}{r}\right)^2 = \left(\frac{10\text{ cm}}{1\text{ cm}}\right)^2 = (10)^2 = \mathbf{100}$$

*(Notice: The radius is $10$ times larger, but the area is $(10)^2 = \mathbf{100}$ times larger!)*

- Output force: $F_2 = F_1 \times \left(\frac{A}{a}\right) = 30\text{ N} \times 100 = \mathbf{3000\text{ N}}$

**Verification with explicit $\pi \approx 3.14$:**  
$a = 3.14 \times 1^2 = 3.14\text{ cm}^2$; $A = 3.14 \times 10^2 = 314\text{ cm}^2$.  
$\frac{A}{a} = \frac{314}{3.14} = 100$ ✅

### Example 6: Calculating Travel Distances for Both Pistons

In a hydraulic press, the small piston has an area of $10\text{ cm}^2$ and the large piston has an area of $500\text{ cm}^2$. The small piston is depressed by $25\text{ cm}$. How high does the large piston lift?

The volume of displaced fluid remains strictly constant:
$$a \times d_1 = A \times d_2$$
- Volume displaced from small cylinder $= 10\text{ cm}^2 \times 25\text{ cm} = 250\text{ cm}^3$
- Distance moved by large piston:
  $$d_2 = \frac{a \times d_1}{A} = \frac{250\text{ cm}^3}{500\text{ cm}^2} = \mathbf{0.5\text{ cm}}$$

**Verification:** $A \times d_2 = 500\text{ cm}^2 \times 0.5\text{ cm} = 250\text{ cm}^3 = a \times d_1$ ✅

### Example 7: Determining Internal Fluid Pressure

A force of $200\text{ N}$ is applied to a small hydraulic piston of area $20\text{ cm}^2$. Calculate the resulting pressure established in the hydraulic fluid in pascals.

First, convert the area into SI units ($\text{m}^2$):
$$a = 20\text{ cm}^2 = 20 \times 10^{-4}\text{ m}^2 = 0.002\text{ m}^2$$

Now compute pressure:
$$P = \frac{F}{a} = \frac{200\text{ N}}{0.002\text{ m}^2} = \mathbf{100,000\text{ Pa}} = 1 \times 10^5\text{ Pa} = 100\text{ kPa}$$

**Verification:** $P \times a = (100,000\text{ Pa}) \times 0.002\text{ m}^2 = 200\text{ N}$ ✅  
*(Note: Leaving area in $\text{cm}^2$ would yield $\frac{200\text{ N}}{20\text{ cm}^2} = 10\text{ N/cm}^2$, which is valid in non-standard units, but not in pascals!)*

### Example 8: Force and Pressure in a Hydraulic Brake

A driver depresses the brake pedal, delivering a force of $60\text{ N}$ to the master cylinder piston of area $2\text{ cm}^2$. The wheel brake cylinder has a piston area of $8\text{ cm}^2$.  
(a) Find the pressure generated in the brake fluid.  
(b) Find the clamping force exerted on the wheel piston.

- Master cylinder area: $a = 2\text{ cm}^2 = 2 \times 10^{-4}\text{ m}^2 = 0.0002\text{ m}^2$
- Wheel cylinder area: $A = 8\text{ cm}^2 = 8 \times 10^{-4}\text{ m}^2 = 0.0008\text{ m}^2$

(a) Fluid pressure:
$$P = \frac{F_1}{a} = \frac{60\text{ N}}{0.0002\text{ m}^2} = \mathbf{300,000\text{ Pa}} = 3 \times 10^5\text{ Pa} = 300\text{ kPa}$$

(b) Force on the wheel piston (applying Pascal's Law):
$$F_2 = P \times A = (300,000\text{ Pa}) \times 0.0008\text{ m}^2 = \mathbf{240\text{ N}}$$

**Verification:**  
Area ratio $= \frac{8\text{ cm}^2}{2\text{ cm}^2} = 4$.  
Output force $F_2 = 60\text{ N} \times 4 = 240\text{ N}$ ✅

### Example 9: Comparing Pressure at Both Pistons

In a hydraulic machine, a force of $20\text{ N}$ acts on a small piston of area $2\text{ cm}^2$, creating an output force of $2000\text{ N}$ on a large piston of area $200\text{ cm}^2$. Calculate the pressure at each piston and compare them.

- Small piston: $a = 2\text{ cm}^2 = 0.0002\text{ m}^2$  
  $$P_1 = \frac{20\text{ N}}{0.0002\text{ m}^2} = \mathbf{100,000\text{ Pa}}$$

- Large piston: $A = 200\text{ cm}^2 = 0.02\text{ m}^2$  
  $$P_2 = \frac{2000\text{ N}}{0.02\text{ m}^2} = \mathbf{100,000\text{ Pa}}$$

**Comparison:** $P_1 = P_2 = 100,000\text{ Pa}$ ✅  
The pressure is identical at both pistons. The output force is $100$ times larger solely because the large piston provides $100$ times more surface area ($200 \div 2 = 100$).

### Example 10: Verifying Work Done on Both Pistons

A hydraulic machine has $a = 5\text{ cm}^2$ and $A = 125\text{ cm}^2$. A force of $40\text{ N}$ pushes the small piston down by $50\text{ cm}$. Calculate the output force and distance moved by the large piston. Verify that work done ($F \times d$) is identical.

- Area ratio: $\frac{A}{a} = \frac{125\text{ cm}^2}{5\text{ cm}^2} = 25$
- Output force: $F_2 = F_1 \times 25 = 40\text{ N} \times 25 = \mathbf{1000\text{ N}}$
- Distance moved: $d_2 = \frac{d_1}{25} = \frac{50\text{ cm}}{25} = \mathbf{2\text{ cm}}$

Converting distances to metres ($d_1 = 0.5\text{ m}$, $d_2 = 0.02\text{ m}$):
- Work on small piston: $W_1 = F_1 \times d_1 = 40\text{ N} \times 0.5\text{ m} = \mathbf{20\text{ N}\cdot\text{m}}$
- Work by large piston: $W_2 = F_2 \times d_2 = 1000\text{ N} \times 0.02\text{ m} = \mathbf{20\text{ N}\cdot\text{m}}$ ✅

Both quantities are identical. The machine amplified force by $25$, but reduced displacement by $25$. Energy is conserved!

### Example 11: Finding Required Input Force from Piston Radii

In a hydraulic garage lift, the small piston has a radius of $2\text{ cm}$ and the large piston has a radius of $14\text{ cm}$. To lift a vehicle weighing $4900\text{ N}$, what force must be applied to the small piston?

- Ratio of areas:
  $$\frac{A}{a} = \left(\frac{R}{r}\right)^2 = \left(\frac{14\text{ cm}}{2\text{ cm}}\right)^2 = (7)^2 = \mathbf{49}$$
- Required input force:
  $$F_1 = \frac{F_2}{\left(\frac{A}{a}\right)} = \frac{4900\text{ N}}{49} = \mathbf{100\text{ N}}$$

**Verification:**  
$F_1 \times 49 = 100\text{ N} \times 49 = 4900\text{ N}$ ✅  
*(Warning: Mistakenly using the radius ratio of $7$ instead of squaring it would incorrectly predict an input force of $700\text{ N}$!)*

---

## Common Pitfalls to Avoid

1. **Mistake 1: Believing a hydraulic lift produces extra energy or work.**  
   A hydraulic lift multiplies **force**, never work or energy. Because $F_1 d_1 = F_2 d_2$, a hundredfold increase in force requires pushing the small piston through $100$ times the distance. Energy conservation is never violated.

2. **Mistake 2: Using diameter directly in the area formula instead of radius.**  
   The area of a piston is $\pi r^2$. If a problem specifies a diameter of $4\text{ cm}$, the radius is $r = 2\text{ cm}$, giving $a = \pi (2)^2 = 12.56\text{ cm}^2$. Using $4$ directly yields $50.24\text{ cm}^2$, which is off by a disastrous factor of $4$! Furthermore, mixing diameter for one piston and radius for the other in a ratio leads to invalid results.

3. **Mistake 3: Equating the area ratio with the radius ratio.**  
   If the radius of the large piston is $10$ times that of the small piston, the area ratio is **not $10$—it is $(10)^2 = 100$** (Example 5). Never forget to square the linear dimensions when computing area ratios!

4. **Mistake 4: Calculating pressure in pascals without converting $\text{cm}^2$ to $\text{m}^2$.**  
   $P = \frac{F}{A}$ yields pascals only when area is in $\text{m}^2$. Remember: $1\text{ cm}^2 = 10^{-4}\text{ m}^2 = 0.0001\text{ m}^2$. In Example 7, $20\text{ cm}^2 = 0.002\text{ m}^2$, giving $P = 100,000\text{ Pa}$. (When calculating pure ratios like $\frac{A}{a}$, keeping both in $\text{cm}^2$ is acceptable since units cancel.)

5. **Mistake 5: Assuming pressure is higher at the large piston.**  
   Pressure is **strictly identical** across both pistons by Pascal's Law ($P_1 = P_2$). The force at the large piston is greater only because that uniform pressure acts across a much larger surface area.

6. **Mistake 6: Applying Pascal's Law to open, leaking, or aerated systems.**  
   Pascal's Law applies strictly to **confined, leak-free, incompressible fluids**. If hydraulic lines leak, fluid escapes and pressure collapses. If air bubbles are trapped, they absorb the input effort by compressing, ruining the hydraulic response.

---

## Quick Recap

- **Pascal's Law:** Any pressure applied to an enclosed, incompressible fluid is transmitted **equally and undiminished in all directions** to every portion of the fluid and the vessel walls.
- Demonstrated visibly by a perforated flask, a squeezed toothpaste tube, and an inflated water balloon with pinholes.
- **Liquids are incompressible**, making them ideal hydraulic media. **Gases are compressible**, which wastes mechanical effort and leads to spongy brake failure.
- **Hydraulic Lift:** $\frac{F_1}{a} = \frac{F_2}{A} \implies \mathbf{F_2 = F_1 \times \left(\frac{A}{a}\right)}$. A small input force produces an enormous output force (force multiplier).
- **Pressure is identical on both pistons** ($P_1 = P_2$); force scales with surface area.
- Displacements scale inversely with area: **$a \times d_1 = A \times d_2$**.
- Mechanical work is strictly conserved: **$F_1 \times d_1 = F_2 \times d_2$** (neglecting friction).
- Area ratios scale with the **square of the radius or diameter ratio**: $\frac{A}{a} = \left(\frac{R}{r}\right)^2$.
- Key applications: Automotive service lifts, hydraulic brakes, heavy bottle jacks, dental chairs, and industrial hydraulic presses.
- **Solving Leo's story:** To lift a $10,000\text{ N}$ car with $\frac{A}{a} = 100$, the mechanic exerted just $100\text{ N}$, but moved the lever through $100\text{ cm}$ for every $1\text{ cm}$ the car rose.

---

## Practice Questions

1. In a hydraulic lift, the small piston has an area of $4\text{ cm}^2$ and the large piston has an area of $400\text{ cm}^2$. A force of $25\text{ N}$ is applied to the small piston. Find the output force exerted by the large piston.

2. A load of $6000\text{ N}$ is to be raised by a hydraulic jack. The small piston has an area of $10\text{ cm}^2$. What force must be applied to the small piston if the large piston has an area of $1000\text{ cm}^2$?

3. The radii of the two circular pistons of a hydraulic press are $2\text{ cm}$ and $6\text{ cm}$. A force of $50\text{ N}$ acts on the small piston. Find the ratio of the areas of the pistons and the output force on the large piston.

4. A force of $100\text{ N}$ acts on a small hydraulic piston of area $5\text{ cm}^2$.  
   (a) Find the pressure generated in the liquid in pascals.  
   (b) The large piston has an area of $250\text{ cm}^2$. Find the upward force exerted upon it.

5. The small piston of a hydraulic machine (area $2\text{ cm}^2$) is pushed down by $40\text{ cm}$. The large piston has an area of $80\text{ cm}^2$. How far does the large piston rise? If the force applied to the small piston is $10\text{ N}$, verify that $F \times d$ is identical for both pistons.

6. In a hydraulic braking system, depressing the pedal applies a force of $90\text{ N}$ to a master cylinder of area $3\text{ cm}^2$. Find the pressure transmitted through the brake oil. What resulting force acts upon a wheel cylinder piston of area $12\text{ cm}^2$?

7. State whether each statement is True or False, providing a reason:  
   (a) A hydraulic lift performs more work than the work done on the input piston.  
   (b) In a hydraulic lift, the pressure on the large piston is greater than on the small piston.  
   (c) Liquids are used in hydraulic machines because they are virtually incompressible.  
   (d) $1\text{ Pa} = 1\text{ N/m}^2$.

8. Why does an automotive brake pedal feel soft and "spongy" when an air bubble becomes trapped in the hydraulic brake line?

9. A commercial garage lift raises an automobile of mass $1500\text{ kg}$ ($g = 10\text{ m/s}^2$). The large piston has an area $100$ times that of the small piston. What input force must be applied to the small piston?

10. A student asserts: *"If the large piston has $50$ times the area of the small piston, then by pushing the small piston just a tiny distance, I can make the car shoot way up into the air."* Is the student correct? Explain using the relationship between piston travel distances.

### Answers

1. Area ratio: $\frac{A}{a} = \frac{400\text{ cm}^2}{4\text{ cm}^2} = 100$.  
   $F_2 = F_1 \times 100 = 25\text{ N} \times 100 = \mathbf{2500\text{ N}}$.  
   *Check:* $2500\text{ N} \div 100 = 25\text{ N}$ ✅

2. Area ratio: $\frac{A}{a} = \frac{1000\text{ cm}^2}{10\text{ cm}^2} = 100$.  
   $F_1 = \frac{F_2}{100} = \frac{6000\text{ N}}{100} = \mathbf{60\text{ N}}$.  
   *Check:* $60\text{ N} \times 100 = 6000\text{ N}$ ✅

3. Area ratio $= \left(\frac{6\text{ cm}}{2\text{ cm}}\right)^2 = (3)^2 = \mathbf{9}$.  
   Output force $F_2 = 50\text{ N} \times 9 = \mathbf{450\text{ N}}$.  
   *Check:* $450\text{ N} \div 9 = 50\text{ N}$ ✅

4. (a) $a = 5\text{ cm}^2 = 0.0005\text{ m}^2$.  
   $P = \frac{100\text{ N}}{0.0005\text{ m}^2} = \mathbf{200,000\text{ Pa}} = 2 \times 10^5\text{ Pa}$.  
   (b) $A = 250\text{ cm}^2 = 0.025\text{ m}^2$.  
   $F_2 = P \times A = (200,000\text{ Pa}) \times 0.025\text{ m}^2 = \mathbf{5000\text{ N}}$.  
   *Check:* $\frac{A}{a} = \frac{250}{5} = 50$; $F_2 = 100\text{ N} \times 50 = 5000\text{ N}$ ✅

5. $a \times d_1 = A \times d_2 \implies d_2 = \frac{2\text{ cm}^2 \times 40\text{ cm}}{80\text{ cm}^2} = \frac{80\text{ cm}^3}{80\text{ cm}^2} = \mathbf{1\text{ cm}}$.  
   Force ratio $= \frac{80}{2} = 40 \implies F_2 = 10\text{ N} \times 40 = 400\text{ N}$.  
   Work verification:  
   $W_1 = F_1 \times d_1 = 10\text{ N} \times 0.4\text{ m} = \mathbf{4\text{ N}\cdot\text{m}}$.  
   $W_2 = F_2 \times d_2 = 400\text{ N} \times 0.01\text{ m} = \mathbf{4\text{ N}\cdot\text{m}}$ ✅ (Work is identical).

6. Master piston area $a = 3\text{ cm}^2 = 0.0003\text{ m}^2$.  
   $P = \frac{90\text{ N}}{0.0003\text{ m}^2} = \mathbf{300,000\text{ Pa}}$.  
   Wheel piston area $A = 12\text{ cm}^2 = 0.0012\text{ m}^2$.  
   $F_2 = P \times A = (300,000\text{ Pa}) \times 0.0012\text{ m}^2 = \mathbf{360\text{ N}}$.  
   *Check:* $\frac{A}{a} = \frac{12}{3} = 4$; $F_2 = 90\text{ N} \times 4 = 360\text{ N}$ ✅

7. (a) **False** ❌. A machine can never multiply work or energy ($F_1 d_1 = F_2 d_2$). As force is amplified, stroke distance is reduced by the same proportion.  
   (b) **False** ❌. By Pascal's Law, fluid pressure is strictly equal at both pistons; only the force is greater on the large piston due to its larger surface area.  
   (c) **True** ✅. Because liquids do not compress noticeably, applied pressure transmits instantaneously and undiminished.  
   (d) **True** ✅. A pascal is defined as one newton of force distributed over one square metre.

8. Air is highly compressible. When the brake pedal is depressed, much of the input force is wasted merely squashing and compressing the trapped air bubble rather than transmitting hydrostatic pressure through the fluid. As a result, the pedal travels excessively far before resistance is felt, giving a spongy feel and dangerously weak braking.

9. Load force $F_2 = m \times g = 1500\text{ kg} \times 10\text{ m/s}^2 = 15,000\text{ N}$.  
   $F_1 = \frac{F_2}{100} = \frac{15,000\text{ N}}{100} = \mathbf{150\text{ N}}$.  
   *Check:* $150\text{ N} \times 100 = 15,000\text{ N}$ ✅

10. **Incorrect.** While the force is multiplied by $50$, the distance moved is divided by $50$: $d_2 = \frac{d_1}{50}$. To make the car rise by just $1\text{ cm}$, the small piston must be pushed downward by a full $50\text{ cm}$! Force increases, but displacement decreases proportionally.  
    *Check:* $50 \times 1 = 1 \times 50$ (Work input equals work output) ✅

---

Now you can clearly explain to Leo how a $1000\text{ kg}$ automobile is lifted with a mere $100\text{ N}$ push: **pressure remains uniform, a larger piston area multiplies force, and displacement scales inversely to conserve energy.**

**What's next?** So far, we have explored pressure in liquids. Now we turn our attention upward to the ocean of air surrounding us: **atmospheric pressure**! In Part 4, we will learn why suction cups stick to smooth bathroom tiles, how Torricelli measured atmospheric pressure using a column of mercury, and why our bodies aren't crushed by the immense weight of the air above us.
