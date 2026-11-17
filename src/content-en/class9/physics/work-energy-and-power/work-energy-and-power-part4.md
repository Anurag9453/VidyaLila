# Chapter: Work, Energy and Power (Part 4)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [work-energy-and-power-part3.md](work-energy-and-power-part3.md)** (where we defined energy as the capacity to do work, established its unit as the joule, and surveyed its various forms). The foundation began in [work-energy-and-power.md](work-energy-and-power.md).
> **Topics covered in this file:**
> 4. Kinetic Energy

---

# Topic 4: Kinetic Energy

In Topic 3, we discovered that **energy is the capacity to do work**, and that objects in motion possess inherent energy: falling water drives hydroelectric turbines, a swung hammer drives a nail into timber, and a bowling ball knocks down heavy pins.

At the close of that discussion, we asked an essential quantitative question: **exactly how much energy does a moving body possess?** In this topic, we will derive the fundamental mathematical formula for kinetic energy from first principles and discover why vehicle speed has such a dramatic, squared impact on physical collisions.

*Prior knowledge applied in this topic:* Equations of uniformly accelerated motion ([motion-part6.md](../motion/motion-part6.md)) and Newton's second law, $F = ma$ ([force-and-laws-of-motion-part6.md](../force-and-laws-of-motion/force-and-laws-of-motion-part6.md)).

---

## Dr. Vance, Leo, and the Automotive Crash-Test Facility

Leo, a high school physics intern, was spending his first morning at an automotive safety research facility. Senior safety engineer **Dr. Vance** escorted him to the observation gallery overlooking the collision test track. A remote-controlled test vehicle with a mass of $1000\text{ kg}$ was lined up facing a massive, reinforced concrete barrier.

**Test 1:** The car was accelerated to **$36\text{ km/h}$** ($10\text{ m/s}$) and crashed head-on into the barrier. The front bumper crumpled inward by a modest, measurable depth. Dr. Vance logged the structural deformation.

**Test 2:** An identical $1000\text{ kg}$ test car was accelerated down the track, but this time at **$72\text{ km/h}$** ($20\text{ m/s}$). The car slammed into the barrier with an explosive boom. The front bumper, crumple zone, and hood folded up completely, producing severe structural crush damage that was **not merely twice as deep, but four times as severe!**

Leo stared in surprise: "Dr. Vance, the impact speed was only doubled—from $36$ to $72\text{ km/h}$. Why wasn't the crash damage simply doubled? Why did doubling the speed quadruple the deformation?"

Dr. Vance smiled. "That is the fundamental question of vehicle safety, Leo. Before impact, the car possessed **kinetic energy**, and that energy had to do mechanical work crushing the car's steel frame against the barrier. As we derive the equation for kinetic energy, you will see why the speed of an object enters the equation with an exponent of two—as a square!"

By the end of this topic, Leo's question will be completely answered.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Kinetic energy ($KE$)** | The energy possessed by an object on account of its **motion** | A $1000\text{ kg}$ car cruising at $10\text{ m/s}$ has $50\,000\text{ J}$ of $KE$ |
| **Scalar quantity** | A physical quantity having magnitude only, without spatial direction | Kinetic energy is always a pure number with units ($\text{J}$) |
| **Net force ($F_{\text{net}}$)** | The vector sum of all external forces acting on a body | Unbalanced braking force slowing a vehicle |
| **Work-energy theorem** | The net work done by all external forces equals the change in kinetic energy | $W_{\text{net}} = \frac{1}{2}mv^2 - \frac{1}{2}mu^2 = \Delta KE$ |
| **Stopping distance ($s$)** | The distance a vehicle travels between brake application and coming to a complete rest | A car at $10\text{ m/s}$ stopping in $10\text{ m}$ under $5000\text{ N}$ braking force |
| **Joule ($\text{J}$)** | The SI unit of work and energy: $1\text{ J} = 1\text{ kg}\cdot\text{m}^2/\text{s}^2 = 1\text{ N}\cdot\text{m}$ | $1\text{ N}$ force acting through $1\text{ m}$ |

---

## Part A: Deriving the Formula for Kinetic Energy

**Kinetic energy** is the energy possessed by an object due to its motion. An object at rest has zero kinetic energy; the faster it travels and the more massive it is, the greater its kinetic energy.

To derive an exact mathematical formula for $KE$, recall the core concept from Topic 3: *work done on an object equals the energy transferred to it*. Therefore, the kinetic energy of an object moving at speed $v$ is equal to the **work that had to be done on it to accelerate it from rest up to speed $v$**.

**Setup:** Consider a body of mass $m$ initially at rest ($u = 0$). A constant net force $F$ acts on it along a straight line over a displacement $s$, accelerating it uniformly to a final speed $v$.

**Step 1:** By the definition of work (Topic 1):
$$W = F \times s$$

**Step 2:** From Newton's second law of motion ($F = ma$):
$$W = (ma) \times s = m(as)$$

**Step 3:** From the third equation of uniformly accelerated motion:
$$v^2 = u^2 + 2as$$

Since the object started from rest ($u = 0$):
$$v^2 = 2as \implies as = \frac{v^2}{2}$$

**Step 4:** Substitute this expression for $(as)$ back into Step 2:
$$W = m \left(\frac{v^2}{2}\right) = \frac{1}{2}mv^2$$

Because all of this mechanical work went into setting the object into motion without friction, the work done appears entirely as the object's **kinetic energy ($KE$)**:

> $$KE = \frac{1}{2}mv^2$$

Where:
- $m$ = mass of the body in kilograms ($\text{kg}$)
- $v$ = speed of the body in metres per second ($\text{m/s}$)
- $KE$ = kinetic energy in joules ($\text{J}$)

### Dimensional Check of the Units

Mass is in $\text{kg}$ and speed is in $\text{m/s}$:
$$\text{Unit of } KE = \text{kg} \times (\text{m/s})^2 = \text{kg}\cdot\frac{\text{m}^2}{\text{s}^2} = \left(\text{kg}\cdot\frac{\text{m}}{\text{s}^2}\right) \times \text{m} = \text{N} \times \text{m} = \text{Joule (J)}$$

Thus, **$1\text{ kg}\cdot\text{m}^2/\text{s}^2 = 1\text{ N}\cdot\text{m} = 1\text{ J}$**. The units match perfectly!

```
 At rest (u = 0)                       Final speed v
    [ m ] ─── F ───►   . . . . . . . .   [ m ] ───►
    :◄─────────── displacement s ────────────►:
      Work done W = F × s  ════►  KE = ½ m v²
```

> **Figure 4.1** – A constant force $F$ accelerates a mass $m$ from rest through distance $s$. The work performed by the force ($W = Fs$) is stored entirely as the kinetic energy of the body: $KE = \frac{1}{2}mv^2$.

Notice the crucial term: the formula contains **$v^2$ (speed squared)**. This squared dependence is why increasing speed creates an enormous surge in energy.

---

## Part B: The Work-Energy Theorem (When Initial Speed $u \neq 0$)

What if the body was already cruising at an initial speed $u$, and an external net force $F$ acted over displacement $s$ to accelerate it to a higher speed $v$?

Using the general third equation of motion:
$$v^2 - u^2 = 2as \implies as = \frac{v^2 - u^2}{2}$$

Multiplying both sides by mass $m$:
$$m(as) = \frac{1}{2}m(v^2 - u^2)$$

Since $ma = F_{\text{net}}$ and $F_{\text{net}} \times s = W_{\text{net}}$:
$$W_{\text{net}} = \frac{1}{2}mv^2 - \frac{1}{2}mu^2$$

> **The Work-Energy Theorem:**
>
> $$W_{\text{net}} = KE_{\text{final}} - KE_{\text{initial}} = \Delta KE$$

Where $\Delta KE$ represents the change in kinetic energy:
- When net work is **positive** ($W > 0$), kinetic energy increases: the object **speeds up**.
- When net work is **negative** ($W < 0$, such as braking forces; Topic 2), kinetic energy decreases: the object **slows down**.
- If starting from rest ($u = 0$), $W_{\text{net}} = \frac{1}{2}mv^2$, matching Part A.

---

## Part C: Factors on Which Kinetic Energy Depends

The expression $KE = \frac{1}{2}mv^2$ reveals that kinetic energy depends on exactly two variables: **mass ($m$)** and **speed ($v$)**.

1. **Directly proportional to mass ($m$):**
   Holding speed constant, if mass is doubled, $KE$ doubles; if mass is tripled, $KE$ triples.
2. **Proportional to the square of speed ($v^2$):**
   Holding mass constant:
   - Doubling the speed ($2v$) increases $KE$ by $2^2 = \mathbf{4\text{ times}}$.
   - Tripling the speed ($3v$) increases $KE$ by $3^2 = \mathbf{9\text{ times}}$.
   - Halving the speed ($\frac{v}{2}$) reduces $KE$ to $\left(\frac{1}{2}\right)^2 = \mathbf{\frac{1}{4}\text{ (one quarter)}}$.

### Speed vs. Kinetic Energy for a $1000\text{ kg}$ Car

| Speed ($v$) | Speed Factor | Kinetic Energy ($KE = \frac{1}{2}mv^2$) | Energy Factor |
|---|---|---|---|
| $10\text{ m/s}$ ($36\text{ km/h}$) | $1\times$ | $\frac{1}{2}(1000)(10)^2 = \mathbf{50\,000\text{ J}}$ ($50\text{ kJ}$) | $1\times$ |
| $20\text{ m/s}$ ($72\text{ km/h}$) | $2\times$ | $\frac{1}{2}(1000)(20)^2 = \mathbf{200\,000\text{ J}}$ ($200\text{ kJ}$) | $\mathbf{4\times}$ |
| $30\text{ m/s}$ ($108\text{ km/h}$) | $3\times$ | $\frac{1}{2}(1000)(30)^2 = \mathbf{450\,000\text{ J}}$ ($450\text{ kJ}$) | $\mathbf{9\times}$ |
| $40\text{ m/s}$ ($144\text{ km/h}$) | $4\times$ | $\frac{1}{2}(1000)(40)^2 = \mathbf{800\,000\text{ J}}$ ($800\text{ kJ}$) | $\mathbf{16\times}$ |

**Verification:** $\frac{1}{2} \times 1000 \times 40^2 = 500 \times 1600 = 800\,000\text{ J}$ ✅

3. **Kinetic energy is a scalar:** It has magnitude only, with no directional orientation. Whether a $1000\text{ kg}$ car travels north, south, or around a bend at $10\text{ m/s}$, its $KE$ is identical: $50\,000\text{ J}$.
4. **Kinetic energy can never be negative:** Mass $m$ is positive, and the square of any real velocity ($v^2$) is always positive or zero. Even if velocity is negative (e.g., $v = -10\text{ m/s}$), $(-10)^2 = +100$.
5. **At rest, $KE = 0$:** If $v = 0$, then $KE = \frac{1}{2}m(0)^2 = 0\text{ J}$.

### Resolving the Crash-Test Mystery

Now we can explain Dr. Vance and Leo's observation with exact numbers:
- At $36\text{ km/h} = \frac{36}{3.6} = 10\text{ m/s}$:
  $$KE = \frac{1}{2}(1000\text{ kg})(10\text{ m/s})^2 = \mathbf{50\,000\text{ J}}$$
- At $72\text{ km/h} = \frac{72}{3.6} = 20\text{ m/s}$:
  $$KE = \frac{1}{2}(1000\text{ kg})(20\text{ m/s})^2 = \mathbf{200\,000\text{ J}}$$

Notice the ratio: $\frac{200\,000\text{ J}}{50\,000\text{ J}} = \mathbf{4}$.
Although the vehicle's speed only doubled, its kinetic energy **quadrupled**! All $200\,000\text{ J}$ had to be absorbed by doing mechanical work folding, ripping, and crushing the structural steel of the vehicle.

Dr. Vance looked at Leo: "Do you see the power of $v^2$? Double the speed means four times the destructive energy."

---

## Part D: Comparing the Kinetic Energy of Different Moving Objects

| Object | Mass ($m$) | Speed ($v$) | Kinetic Energy ($KE = \frac{1}{2}mv^2$) |
|---|---|---|---|
| **Cricket / Baseball** | $0.16\text{ kg}$ | $30\text{ m/s}$ | $\frac{1}{2}(0.16)(900) = \mathbf{72\text{ J}}$ |
| **High-velocity Bullet** | $0.01\text{ kg}$ ($10\text{ g}$) | $400\text{ m/s}$ | $\frac{1}{2}(0.01)(160\,000) = \mathbf{800\text{ J}}$ |
| **Loaded Freight Truck** | $5000\text{ kg}$ | $10\text{ m/s}$ ($36\text{ km/h}$) | $\frac{1}{2}(5000)(100) = \mathbf{250\,000\text{ J}}$ |

Key insights:
- A bullet has a tiny mass ($10\text{ g}$), but its extreme speed ($400\text{ m/s}$) results in a kinetic energy ($800\text{ J}$) that is **$11$ times greater** than a fast cricket ball ($\frac{800}{72} \approx 11.1$).
- A freight truck moves at a modest pace ($10\text{ m/s}$), but its immense mass ($5000\text{ kg}$) gives it an enormous kinetic energy ($250\,000\text{ J}$), which is **$312.5$ times greater** than the speeding bullet.
- Neither mass nor speed alone tells the whole story: kinetic energy combines both.

---

## Part E: Stopping Distance and Kinetic Energy

When a driver hits the brakes, the braking system applies a resistive frictional force $F$ opposing the vehicle's motion. To bring the car to a complete stop, the brakes must do enough negative work to eliminate all of the car's initial kinetic energy:

$$\text{Work done by brakes} = \text{Initial Kinetic Energy}$$
$$F \times s = \frac{1}{2}mv^2 \implies s = \frac{\frac{1}{2}mv^2}{F}$$

Consider a $1000\text{ kg}$ car with a maximum braking force of $F = 5000\text{ N}$:
- At $10\text{ m/s}$ ($KE = 50\,000\text{ J}$):
  $$s = \frac{50\,000\text{ J}}{5000\text{ N}} = \mathbf{10\text{ m}}$$
- At $20\text{ m/s}$ ($KE = 200\,000\text{ J}$):
  $$s = \frac{200\,000\text{ J}}{5000\text{ N}} = \mathbf{40\text{ m}}$$

Doubling the driving speed from $10\text{ m/s}$ to $20\text{ m/s}$ increases the stopping distance **from $10\text{ m}$ to $40\text{ m}$—a fourfold increase!**

Checking via equations of motion ([motion-part6.md](../motion/motion-part6.md)):
Deceleration $a = \frac{F}{m} = \frac{5000\text{ N}}{1000\text{ kg}} = 5\text{ m/s}^2$.
Using $v^2 = u^2 - 2as \implies s = \frac{u^2}{2a}$:
At $10\text{ m/s}$: $s = \frac{100}{2(5)} = 10\text{ m}$ ✅
At $20\text{ m/s}$: $s = \frac{400}{2(5)} = 40\text{ m}$ ✅

```
 At 10 m/s:  [Car] ════► stops in 10 m
             ├─────────┤
 At 20 m/s:  [Car] ════►                                  stops in 40 m (4× distance!)
             ├─────────────────────────────────────────┤
```

> **Figure 4.2** – When travel speed is doubled from $10\text{ m/s}$ to $20\text{ m/s}$, the stopping distance under identical braking force expands from $10\text{ m}$ to $40\text{ m}$.

---

## Part F: Why High Speed is So Dangerous on the Road

The physics of $KE = \frac{1}{2}mv^2$ has profound consequences for everyday life:
- **Crash severity:** Double the speed yields $4\times$ the destructive kinetic energy; triple the speed yields $9\times$ the energy.
- **Stopping distance:** Because stopping distance grows with the square of speed, a speeding driver cannot stop in time if an unexpected obstacle or pedestrian appears ahead.
- **Seatbelts and crumple zones:** In a crash, a seatbelt stretches slightly, and the front crumple zone collapses over a controlled distance, increasing the stopping displacement $s$. From $W = F \times s = \Delta KE$, increasing the stopping distance drastically reduces the impact force $F$ delivered to the human body.
- **Crash helmets:** Helmets contain crushable EPS foam designed to absorb head kinetic energy over a longer distance, preventing lethal skull fractures.
- **School zone speed limits:** Speed limits of $30\text{ km/h}$ or $20\text{ mph}$ are rooted directly in the physics of kinetic energy to ensure vehicles can stop almost instantly.

---

## Part G: Solved Examples

### Example 1: Finding KE Given Mass and Speed

A baseball of mass $0.16\text{ kg}$ is thrown at a velocity of $30\text{ m/s}$. Find its kinetic energy.

$$KE = \frac{1}{2}mv^2 = \frac{1}{2} \times 0.16\text{ kg} \times (30\text{ m/s})^2 = 0.08 \times 900 = \mathbf{72\text{ J}}$$

**Check:** $0.16 \times 900 = 144$, and $\frac{144}{2} = 72\text{ J}$ ✅

### Example 2: A Running Sprinter

A sprinter of mass $60\text{ kg}$ runs with a constant speed of $8\text{ m/s}$. Calculate his kinetic energy.

$$KE = \frac{1}{2}mv^2 = \frac{1}{2} \times 60\text{ kg} \times (8\text{ m/s})^2 = 30 \times 64 = \mathbf{1920\text{ J} = 1.92\text{ kJ}}$$

**Check:** $\frac{1920}{30} = 64 = 8^2$ ✅

### Example 3: Finding Speed Given KE and Mass

A drone of mass $2\text{ kg}$ has a kinetic energy of $900\text{ J}$. What is its speed?

$$KE = \frac{1}{2}mv^2 \implies v^2 = \frac{2 \times KE}{m} = \frac{2 \times 900\text{ J}}{2\text{ kg}} = 900\text{ m}^2/\text{s}^2$$
$$v = \sqrt{900} = \mathbf{30\text{ m/s}}$$

**Check:** $\frac{1}{2} \times 2 \times 30^2 = 900\text{ J}$ ✅

### Example 4: Finding Mass Given KE and Speed

An electric scooter travelling at $15\text{ m/s}$ has a kinetic energy of $2250\text{ J}$. Calculate the mass of the scooter.

$$m = \frac{2 \times KE}{v^2} = \frac{2 \times 2250\text{ J}}{(15\text{ m/s})^2} = \frac{4500}{225} = \mathbf{20\text{ kg}}$$

**Check:** $\frac{1}{2} \times 20 \times 15^2 = 10 \times 225 = 2250\text{ J}$ ✅

### Example 5: Converting Speed Units First (km/h to m/s)

A motor scooter and its rider have a combined mass of $150\text{ kg}$ and are travelling at $54\text{ km/h}$. Calculate the kinetic energy.

- **Convert speed to SI units:**
  $$v = \frac{54}{3.6} = 15\text{ m/s}$$
- Calculate $KE$:
  $$KE = \frac{1}{2} \times 150\text{ kg} \times (15\text{ m/s})^2 = 75 \times 225 = \mathbf{16\,875\text{ J} \approx 16.88\text{ kJ}}$$

**Check:** $75 \times 225 = 75(200) + 75(25) = 15\,000 + 1875 = 16\,875\text{ J}$ ✅
*(Caution: Plugging in $54$ directly would give $\frac{1}{2} \times 150 \times 54^2 = 218\,700\text{ J}$, which is completely incorrect!)*

### Example 6: Ratio When Speed Triples

A $1000\text{ kg}$ vehicle accelerates from $10\text{ m/s}$ to $30\text{ m/s}$ (tripling its speed). Find the ratio of its final kinetic energy to its initial kinetic energy.

- $KE_i = \frac{1}{2}(1000)(10)^2 = 50\,000\text{ J}$
- $KE_f = \frac{1}{2}(1000)(30)^2 = 450\,000\text{ J}$
- $\text{Ratio} = \frac{450\,000}{50\,000} = \mathbf{9} = 3^2$ ✅

### Example 7: Work Required to Accelerate from Rest to 20 m/s

How much mechanical work must an engine perform to accelerate a $1000\text{ kg}$ car from rest to $20\text{ m/s}$?

$$W = \Delta KE = \frac{1}{2}mv^2 - 0 = \frac{1}{2}(1000\text{ kg})(20\text{ m/s})^2 = \mathbf{200\,000\text{ J} = 200\text{ kJ}}$$

**Check:** Matches the energy found in the crash test at $72\text{ km/h}$ ✅

### Example 8: Work Required to Accelerate from 10 m/s to 20 m/s (The Classic Trap!)

How much work is required to accelerate the same $1000\text{ kg}$ car from $10\text{ m/s}$ to $20\text{ m/s}$?

$$W = \Delta KE = \frac{1}{2}mv^2 - \frac{1}{2}mu^2 = \frac{1}{2}(1000)(20)^2 - \frac{1}{2}(1000)(10)^2$$
$$W = 200\,000\text{ J} - 50\,000\text{ J} = \mathbf{150\,000\text{ J} = 150\text{ kJ}}$$

Notice:
- Accelerating from $0$ to $10\text{ m/s}$ ($\Delta v = 10\text{ m/s}$) requires $50\,000\text{ J}$.
- Accelerating from $10$ to $20\text{ m/s}$ ($\Delta v = 10\text{ m/s}$) requires **$150\,000\text{ J}$**—three times as much work for the same speed increment!
- **Reason:** Work depends on the difference of squares $(v^2 - u^2)$, not on $(\Delta v)^2$. As speed climbs, each extra $\text{m/s}$ demands vastly more energy.

**Check:** $50\,000\text{ J} + 150\,000\text{ J} = 200\,000\text{ J}$ (total work from rest to $20\text{ m/s}$) ✅

### Example 9: Comparing Stopping Distances

A $1000\text{ kg}$ car travels at $10\text{ m/s}$ and then at $20\text{ m/s}$. The maximum braking force available is $5000\text{ N}$. Find the stopping distance in each case.

Using $Fs = KE \implies s = \frac{KE}{F}$:
- At $10\text{ m/s}$: $s_1 = \frac{50\,000\text{ J}}{5000\text{ N}} = \mathbf{10\text{ m}}$
- At $20\text{ m/s}$: $s_2 = \frac{200\,000\text{ J}}{5000\text{ N}} = \mathbf{40\text{ m}}$

**Check:** $\frac{s_2}{s_1} = \frac{40}{10} = 4 = 2^2$ ✅

### Example 10: Kinetic Energy of a Free-Falling Stone

A $2\text{ kg}$ rock falls freely from rest under gravity for $2\text{ seconds}$ (take $g = 10\text{ m/s}^2$). Find its kinetic energy at $t = 2\text{ s}$.

- Final velocity after $2\text{ s}$:
  $$v = u + gt = 0 + (10\text{ m/s}^2)(2\text{ s}) = 20\text{ m/s}$$
- Kinetic energy:
  $$KE = \frac{1}{2}mv^2 = \frac{1}{2}(2\text{ kg})(20\text{ m/s})^2 = 1 \times 400 = \mathbf{400\text{ J}}$$

**Check:** Vertical distance fallen $h = \frac{1}{2}gt^2 = \frac{1}{2}(10)(4) = 20\text{ m}$. Work done by gravity $W = mgh = 2 \times 10 \times 20 = 400\text{ J}$. Work done equals $KE$ gained ✅

### Example 11: Work Done by Brakes (Negative Work)

A $1000\text{ kg}$ car travelling at $20\text{ m/s}$ comes to a complete halt when the driver hits the brakes. Calculate the work done by the braking force.

$$W_{\text{brake}} = KE_f - KE_i = 0 - \frac{1}{2}(1000\text{ kg})(20\text{ m/s})^2 = 0 - 200\,000\text{ J} = \mathbf{-200\,000\text{ J} = -200\text{ kJ}}$$

The work done is **negative** because the braking force acts opposite to the vehicle's displacement, removing kinetic energy from the car.

**Check:** In Example 9, $F_{\text{brake}} = 5000\text{ N}$ backward, $s = 40\text{ m}$ forward: $W = -5000\text{ N} \times 40\text{ m} = -200\,000\text{ J}$ ✅

### Example 12: Finding the Required Speed

A car of mass $1000\text{ kg}$ has a kinetic energy of $112\,500\text{ J}$. What is its speed in $\text{m/s}$ and $\text{km/h}$?

$$v^2 = \frac{2 \times KE}{m} = \frac{2 \times 112\,500\text{ J}}{1000\text{ kg}} = 225\text{ m}^2/\text{s}^2$$
$$v = \sqrt{225} = \mathbf{15\text{ m/s}}$$
$$\text{Speed in km/h} = 15 \times 3.6 = \mathbf{54\text{ km/h}}$$

**Check:** $\frac{1}{2}(1000)(15)^2 = 500 \times 225 = 112\,500\text{ J}$ ✅

---

## Common Pitfalls to Avoid

1. **Mistake 1: Forgetting to square the speed ($v$).**
   For a $1000\text{ kg}$ car at $10\text{ m/s}$, writing $\frac{1}{2} \times 1000 \times 10 = 5000\text{ J}$ is completely wrong. Always write $v^2$: $\frac{1}{2} \times 1000 \times 10^2 = \mathbf{50\,000\text{ J}}$.

2. **Mistake 2: Forgetting to convert $\text{km/h}$ to $\text{m/s}$.**
   Plugging $36\text{ km/h}$ directly into the formula yields $\frac{1}{2}(1000)(36)^2 = 648\,000\text{ J}$, which is incorrect by a factor of nearly $13$. Always divide $\text{km/h}$ by $3.6$ before calculating: $\frac{36}{3.6} = 10\text{ m/s}$.

3. **Mistake 3: Confusing kinetic energy ($\frac{1}{2}mv^2$) with momentum ($mv$).**
   $mv$ is momentum (measured in $\text{kg}\cdot\text{m/s}$); kinetic energy is $\frac{1}{2}mv^2$ (measured in joules $\text{J}$).

4. **Mistake 4: Assuming doubling speed merely doubles kinetic energy.**
   Because $KE \propto v^2$, doubling speed **quadruples ($4\times$)** kinetic energy.

5. **Mistake 5: Stating that kinetic energy can be negative.**
   $KE$ can never be negative; mass $m$ is positive and $v^2 \ge 0$. While work done by brakes can be negative ($-200\text{ kJ}$), the kinetic energy itself decreases toward zero, never below zero.

6. **Mistake 6: Assuming equal speed increases require equal amounts of work.**
   Accelerating from $0$ to $10\text{ m/s}$ requires $50\text{ kJ}$, but accelerating from $10$ to $20\text{ m/s}$ requires $150\text{ kJ}$. Work depends on the difference of the squares of velocities ($v^2 - u^2$).

---

## Quick Recap

- **Kinetic Energy Formula:** $KE = \frac{1}{2}mv^2$, where $m$ is mass in $\text{kg}$, $v$ is speed in $\text{m/s}$, and $KE$ is in joules ($\text{J}$).
- **Derivation:** $W = Fs = (ma)s$. Using $v^2 = 2as \implies as = \frac{v^2}{2}$, we get $W = \frac{1}{2}mv^2$.
- **Work-Energy Theorem:** The net work done by all external forces equals the change in kinetic energy: $W_{\text{net}} = \frac{1}{2}mv^2 - \frac{1}{2}mu^2 = \Delta KE$.
- **Proportionalities:** $KE$ is proportional to mass $m$ and to the **square of speed ($v^2$)**. Doubling speed quadruples $KE$; tripling speed multiplies $KE$ by nine.
- Kinetic energy is a **scalar quantity**, is never negative, and equals zero when the body is at rest ($v = 0$).
- **Stopping Distance:** Brakes must remove all $KE$: $Fs = \frac{1}{2}mv^2 \implies s \propto v^2$. Doubling vehicle speed quadruples the stopping distance!
- Seatbelts, crumple zones, and helmets lengthen stopping distance ($s$), drastically lowering the impact force ($F$).
- Always convert $\text{km/h}$ to $\text{m/s}$ by dividing by $3.6$.

---

## Practice Questions

1. Calculate the kinetic energy of a $50\text{ kg}$ cyclist riding a bicycle at a speed of $6\text{ m/s}$ (combined mass $= 50\text{ kg}$).

2. A tennis ball of mass $0.2\text{ kg}$ possesses $100\text{ J}$ of kinetic energy. What is its speed?

3. A moving object has a speed of $4\text{ m/s}$ and a kinetic energy of $160\text{ J}$. Find its mass.

4. A passenger car of mass $1200\text{ kg}$ is travelling along a motorway at $72\text{ km/h}$. Calculate its kinetic energy in joules ($\text{J}$) and kilojoules ($\text{kJ}$).

5. (a) If the speed of a vehicle is tripled, by what factor does its kinetic energy increase?
   (b) What happens to the kinetic energy of an object if its mass is doubled while its speed is halved?

6. How much mechanical work is required to accelerate a $500\text{ kg}$ sports car from $5\text{ m/s}$ to $15\text{ m/s}$? Is this the same as the work required to accelerate it from rest to $10\text{ m/s}$? Explain why or why not.

7. An $800\text{ kg}$ compact car moving at $15\text{ m/s}$ is brought to rest by a constant braking force of $4000\text{ N}$. Find its stopping distance. If the car had instead been travelling at $30\text{ m/s}$, what would its stopping distance be under the same braking force?

8. A stone of mass $3\text{ kg}$ falls freely from rest for $3\text{ seconds}$ (take $g = 10\text{ m/s}^2$). Calculate its speed and its kinetic energy after $3\text{ seconds}$.

9. The brakes of a $1500\text{ kg}$ vehicle travelling at $20\text{ m/s}$ are applied to bring it to a complete stop. Find the work done by the braking force. Why is this work mathematically negative?

10. State whether each statement is **True** or **False**:
    (a) The kinetic energy of an object can have a negative value.
    (b) An object with $KE = 0$ must be stationary ($v = 0$).
    (c) The formula $KE = \frac{1}{2}mv$ yields the correct SI unit of joules.
    (d) Between two objects travelling at identical speeds, the more massive object always possesses more kinetic energy.

### Answers

1. $KE = \frac{1}{2}mv^2 = \frac{1}{2} \times 50\text{ kg} \times (6\text{ m/s})^2 = 25 \times 36 = \mathbf{900\text{ J}}$.
   Check: $\frac{900}{25} = 36 = 6^2$ ✅

2. $v^2 = \frac{2 \times KE}{m} = \frac{2 \times 100\text{ J}}{0.2\text{ kg}} = 1000\text{ m}^2/\text{s}^2 \implies v = \sqrt{1000} \approx \mathbf{31.62\text{ m/s}}$.
   Check: $\frac{1}{2}(0.2)(31.62)^2 \approx 0.1 \times 1000 = 100\text{ J}$ ✅

3. $m = \frac{2 \times KE}{v^2} = \frac{2 \times 160\text{ J}}{(4\text{ m/s})^2} = \frac{320}{16} = \mathbf{20\text{ kg}}$.
   Check: $\frac{1}{2} \times 20 \times 16 = 160\text{ J}$ ✅

4. Convert speed: $v = \frac{72}{3.6} = 20\text{ m/s}$.
   $KE = \frac{1}{2}(1200\text{ kg})(20\text{ m/s})^2 = 600 \times 400 = \mathbf{240\,000\text{ J} = 240\text{ kJ}}$.
   Check: $\frac{240\,000}{600} = 400 = 20^2$ ✅

5. (a) $KE \propto v^2$, so tripling speed ($3v$) increases $KE$ by $3^2 = \mathbf{9\text{ times}}$.
   (b) New $KE = \frac{1}{2}(2m)\left(\frac{v}{2}\right)^2 = \frac{1}{2}(2m)\frac{v^2}{4} = \frac{1}{2} \left(\frac{1}{2}mv^2\right) = \mathbf{\text{half of the original } KE}$.
   Check: Let $m=1\text{ kg}, v=2\text{ m/s} \implies KE_1 = 2\text{ J}$. New $m=2\text{ kg}, v=1\text{ m/s} \implies KE_2 = \frac{1}{2}(2)(1)^2 = 1\text{ J}$ (half) ✅

6. Accelerating from $5$ to $15\text{ m/s}$:
   $W = \frac{1}{2}(500)(15)^2 - \frac{1}{2}(500)(5)^2 = 250(225 - 25) = 250(200) = \mathbf{50\,000\text{ J}}$.
   Accelerating from $0$ to $10\text{ m/s}$:
   $W = \frac{1}{2}(500)(10)^2 - 0 = 250(100) = \mathbf{25\,000\text{ J}}$.
   They are **not equal** ($50\,000\text{ J} \neq 25\,000\text{ J}$). Even though $\Delta v = 10\text{ m/s}$ in both cases, work equals the difference in the squares of velocities ($v^2 - u^2$). Higher speeds require far more energy per unit speed gain.

7. At $15\text{ m/s}$: $KE = \frac{1}{2}(800)(15)^2 = 400 \times 225 = 90\,000\text{ J}$.
   $s_1 = \frac{90\,000\text{ J}}{4000\text{ N}} = \mathbf{22.5\text{ m}}$.
   At $30\text{ m/s}$: speed is doubled, so $KE$ quadruples to $360\,000\text{ J}$.
   $s_2 = \frac{360\,000\text{ J}}{4000\text{ N}} = \mathbf{90\text{ m}}$ ($4\times 22.5\text{ m}$).
   Check: $\frac{90}{22.5} = 4 = 2^2$ ✅

8. Velocity: $v = gt = 10\text{ m/s}^2 \times 3\text{ s} = \mathbf{30\text{ m/s}}$.
   $KE = \frac{1}{2}(3\text{ kg})(30\text{ m/s})^2 = 1.5 \times 900 = \mathbf{1350\text{ J} = 1.35\text{ kJ}}$.
   Check: Vertical distance $h = \frac{1}{2}gt^2 = \frac{1}{2}(10)(9) = 45\text{ m}$. $W = mgh = 3 \times 10 \times 45 = 1350\text{ J}$ ✅

9. $W = 0 - \frac{1}{2}(1500\text{ kg})(20\text{ m/s})^2 = -750 \times 400 = \mathbf{-300\,000\text{ J} = -300\text{ kJ}}$.
   The work is negative because the braking force opposes the displacement, actively removing kinetic energy from the vehicle.
   Check: $750 \times 400 = 300\,000$ ✅

10. (a) **False** ❌: Mass is positive and $v^2 \ge 0$, so $KE$ is never negative.
    (b) **True** ✅: Since $m > 0$, $KE = 0$ implies $v = 0$.
    (c) **False** ❌: The correct formula is $\frac{1}{2}mv^2$; the expression $\frac{1}{2}mv$ has units of $\text{kg}\cdot\text{m/s}$ (momentum).
    (d) **True** ✅: At identical speeds, $KE \propto m$, so the heavier object has proportionally more kinetic energy.

---

Leo noted down in his lab journal: *"At $36\text{ km/h}$, $KE = 50\text{ kJ}$. At $72\text{ km/h}$, $KE = 200\text{ kJ}$. Double the speed, quadruple the energy."* Dr. Vance nodded in approval: *"Remember this every time you sit in a car. Buckle your seatbelt and respect the speed limit—the laws of physics are non-negotiable."*

**What's next?** We have seen that motion grants energy to an object. But can an object that is **completely motionless** also possess energy simply because of where it is positioned or how it is stretched? Find out in **Topic 5: Potential Energy**.
