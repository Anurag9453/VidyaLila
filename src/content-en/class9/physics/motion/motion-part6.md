# Chapter: Motion (Part 6)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [motion-part5.md](motion-part5.md)** (covering distance-time and velocity-time graphs, slope as acceleration, and area under the curve as displacement). The chapter introduction begins in [motion.md](motion.md).
> **Topics covered in this file:**
> 6. The Equations of Motion

---

# Topic 6: The Equations of Motion

In the previous topic, we extracted two fundamental principles from velocity-time graphs: the **slope** of the line represents acceleration, and the **geometric area** bounded beneath the line represents displacement. These geometric insights reveal that we can derive powerful algebraic formulas directly from the graphs. In this topic, we derive the **Three Equations of Motion**, enabling us to solve any problem involving straight-line motion under uniform acceleration without ever needing to sketch a graph by hand.

---

## Officer Miller, Liam, and the School Zone Speed Limit

Outside the main gates of Liam's high school stands a prominent illuminated traffic sign: **"School Zone: Speed Limit 36 km/h"**. Just ahead lies a pedestrian zebra crossing accompanied by a paved speed table. Traffic officer Officer Miller stands at the crossing every morning, ensuring student pedestrian safety. Today, Liam stopped by the crossing with his backpack slung over his shoulder.

Liam asked, "Officer Miller, why is the speed limit set strictly to $36\text{ km/h}$? If the limit were $72\text{ km/h}$, wouldn't traffic clear out twice as fast?"

Officer Miller smiled: "Imagine a student suddenly steps onto the crosswalk. Even if an alert driver slams on the brakes the instant they see the student, the car cannot freeze in place instantly. Brakes require physical room to bring the car to a halt. **The vehicle must come to a complete standstill before reaching the crosswalk.** So here is the critical question: how far will the vehicle skid, and how many seconds will it take to stop?"

"I suppose you would have to test it empirically with tire marks," Liam guessed.

"Not at all—we compute it with exact mathematical certainty! Stopping distance and braking time are determined by an algebraic formula connecting speed and braking deceleration. And here is the most astonishing reality: if a driver doubles their speed, the required stopping distance does not merely double—**it quadruples**!"

Liam's eyes widened. "Quadruples? Why does doubling the speed quadruple the distance?" We will prove this exact physical principle mathematically in this topic. First, let us derive the three fundamental equations of kinematics.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **$u$ (Initial velocity)** | Velocity at the start of the observation interval ($t = 0$) | Speed when brakes are first applied: $10\text{ m/s}$ |
| **$v$ (Final velocity)** | Velocity at the conclusion of the observation interval | Coming to a complete stop: $v = 0\text{ m/s}$ |
| **$a$ (Acceleration)** | The constant rate of change of velocity; negative for deceleration | $a = -2.5\text{ m/s}^2$ |
| **$t$ (Elapsed time)** | The duration of the motion interval | $t = 4\text{ s}$ |
| **$s$ (Displacement)** | The straight-line net shift in position during time $t$ | $s = 20\text{ m}$ |
| **Equations of motion** | Three algebraic equations interlinking the five kinematic variables ($u, v, a, t, s$) | $v = u + at$ |
| **Uniform acceleration** | An acceleration that remains strictly constant in magnitude and direction throughout | Velocity increases by $2\text{ m/s}$ every second |

---

## Part A: Physical Assumptions and Kinematic Variables

The three equations of motion apply strictly under two non-negotiable physical conditions:

1. The motion occurs along a **straight line** (one-dimensional rectilinear motion).
2. The acceleration ($a$) is **strictly constant (uniform)** throughout the entire time interval.

We track five fundamental kinematic variables: **$u, v, a, t, s$**.
- The initial direction of motion is chosen as the **positive coordinate direction** ($+$).
- If the vehicle accelerates forward, $a$ is **positive**. If the brakes are applied (retardation), $a$ is **negative**.
- The variable $s$ represents **displacement**. As long as motion continues forward without reversing direction, distance and displacement magnitudes are identical.

---

## Part B: The First Equation of Motion: v = u + at

Recall our definition of acceleration from Topic 4:

$$a = \frac{v - u}{t}$$

Multiplying both sides by $t$:

$$at = v - u$$

Adding $u$ to both sides yields the **First Equation of Motion**:

$$\mathbf{v = u + at}$$

### Graphical Derivation from a v-t Graph

Consider an object starting with initial velocity $u$ and accelerating at a constant rate $a$ over time $t$:

```
 v
 ^
 v :                 /:
   :             /    :
   :         /        :
   :     /            :
 u :/                 :
   :                  :
   :                  :
   +------------------+---> t
   0                  t
   (slope = (v - u) / t = a)
```

> **Figure 6.1** – Velocity-time graph under uniform acceleration: a straight line rising from $(0, u)$ to $(t, v)$. The slope is $\text{rise} \div \text{run} = (v - u) \div t = a$.

The slope of the line equals the constant acceleration:

$$\text{Slope} = \frac{\text{Rise}}{\text{Run}} = \frac{v - u}{t} = a \implies v - u = at \implies \mathbf{v = u + at}$$

**Physical Meaning:** $\text{Final Velocity} = \text{Initial Velocity} + (\text{Velocity Change per Second} \times \text{Elapsed Seconds})$.

---

## Part C: The Second Equation of Motion: s = ut + ½ at²

From Topic 5, we know that the **area bounded beneath a $v-t$ graph equals displacement ($s$)**.
In Figure 6.1, the region under the line between $0$ and $t$ forms a **trapezoid**:

```
 v
 ^
 v :                 /:
   :             /    :   Upper Triangle
   :         /        :   (base t, height v - u)
   :     /            :
 u :/-----------------:
   :                  :
   :  Lower Rectangle :
   :     (u x t)      :
   +------------------+---> t
   0                  t
```

> **Figure 6.2** – Partitioning the trapezoidal area into a lower rectangle (height $u$, width $t$) and an upper triangle (base $t$, height $v - u$).

### Method 1: Sum of Rectangle and Triangle

$$\text{Total Area } s = \text{Area of Rectangle} + \text{Area of Triangle}$$

$$\text{Area of Rectangle} = u \times t = ut$$

$$\text{Area of Triangle} = \frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times t \times (v - u)$$

From our first equation, we know that $v - u = at$. Substituting $at$ in place of $(v - u)$:

$$\text{Area of Triangle} = \frac{1}{2} \times t \times (at) = \frac{1}{2} at^2$$

Adding both geometric regions yields the **Second Equation of Motion**:

$$\mathbf{s = ut + \frac{1}{2} at^2}$$

### Method 2: Area of a Trapezoid Directly

$$\text{Area} = \frac{u + v}{2} \times t \implies s = \frac{u + v}{2} t \quad \text{... (Equation i)}$$

Notice that $\frac{u + v}{2}$ represents the **average velocity** under uniform acceleration.
Substituting $v = u + at$ into Equation (i):

$$s = \frac{u + (u + at)}{2} \times t = \frac{2u + at}{2} \times t = \left(u + \frac{1}{2} at\right) \times t = \mathbf{ut + \frac{1}{2} at^2}$$

**Physical Meaning:** The term $ut$ represents the displacement the object would have covered if it had simply continued cruising at steady speed $u$. The term $\frac{1}{2}at^2$ represents the additional displacement gained (or lost, if $a$ is negative) purely due to acceleration.

---

## Part D: The Third Equation of Motion: v² = u² + 2as

In many real-world braking and collision scenarios, elapsed time $t$ is neither recorded nor required. We seek an equation that links $u, v, a,$ and $s$ directly, completely eliminating $t$.

We combine our two fundamental relations:
1. $s = \frac{u + v}{2} \times t$ (from trapezoidal area)
2. Rearranging $v = u + at \implies t = \frac{v - u}{a}$

Substitute $t = \frac{v - u}{a}$ into the displacement equation:

$$s = \left(\frac{v + u}{2}\right) \times \left(\frac{v - u}{a}\right)$$

$$s = \frac{(v + u)(v - u)}{2a}$$

Recall the difference of squares algebraic identity: $(v + u)(v - u) = v^2 - u^2$. Substituting this in:

$$s = \frac{v^2 - u^2}{2a}$$

Multiplying both sides by $2a$:

$$2as = v^2 - u^2$$

Rearranging to isolate $v^2$ gives the **Third Equation of Motion**:

$$\mathbf{v^2 = u^2 + 2as}$$

---

## Part E: Sign Conventions and Practical Rules

- The initial direction of travel is designated as **positive ($+$)**.
- If brakes are applied to retard motion, **$a$ is negative ($-$)**.
- If a vehicle comes to a complete halt, its **final velocity is zero ($v = 0$)**.
- If a vehicle starts from a standstill, its **initial velocity is zero ($u = 0$)**.
- The variable $s$ is **displacement**. If an object reverses direction, $s$ is the net coordinate shift from the origin, not the cumulative odometer distance.
- These equations hold **only for uniform acceleration**. If acceleration shifts between phases, divide the problem into distinct stages.

---

## Part F: Selecting the Right Kinematic Equation (Decision Guide)

There are five kinematic variables: $u, v, a, t, s$. Every standard problem provides **three known variables** and asks for a **fourth unknown variable**. The easiest way to choose the correct equation is to identify which single variable is **neither given nor required**:

| Equation | Omitted Variable | When to Use |
|---|---|---|
| **$v = u + at$** | Displacement ($s$) | Use when $s$ is neither given nor asked |
| **$s = ut + \frac{1}{2} at^2$** | Final Velocity ($v$) | Use when $v$ is neither given nor asked |
| **$v^2 = u^2 + 2as$** | Elapsed Time ($t$) | Use when $t$ is neither given nor asked |
| **$s = \frac{u + v}{2} t$** | Acceleration ($a$) | Use when $a$ is neither given nor asked |

**Strategy:** Always begin by writing: *"Given: $u = ..., a = ..., t = ...$; To find: ..."*, then match against the decision guide.

---

## Part G: Worked Numerical Examples

### Example 1: Accelerating from Rest

A sports car starts from rest ($u = 0$) and accelerates uniformly at $2\text{ m/s}^2$ for $5\text{ s}$. Find its final velocity and displacement:
- Given: $u = 0$, $a = 2\text{ m/s}^2$, $t = 5\text{ s}$. Find: $v, s$.
- Final velocity:
  $$v = u + at = 0 + (2\text{ m/s}^2)(5\text{ s}) = \mathbf{10\text{ m/s}}$$
- Displacement:
  $$s = ut + \frac{1}{2} at^2 = 0 + \frac{1}{2}(2)(5^2) = \frac{1}{2}(2)(25) = \mathbf{25\text{ m}}$$
- **Cross-check using 3rd equation:**
  $$v^2 = u^2 + 2as = 0 + 2(2)(25) = 100 \implies v = \sqrt{100} = 10\text{ m/s} ✅$$

### Example 2: Braking Vehicle (Cross-Verification Across All Three Equations)

A sedan drives at $20\text{ m/s}$. The driver applies brakes, providing a constant retardation of $5\text{ m/s}^2$. How many seconds does it take to stop, and what distance does it cover while braking?
- Given: $u = 20\text{ m/s}$, $v = 0$ (stopped), $a = -5\text{ m/s}^2$. Find: $t, s$.
- **Stopping Time ($t$):**
  $$v = u + at \implies 0 = 20 + (-5)t \implies 5t = 20 \implies \mathbf{t = 4\text{ s}}$$
- **Stopping Distance ($s$):**
  $$v^2 = u^2 + 2as \implies 0^2 = 20^2 + 2(-5)s \implies 0 = 400 - 10s \implies 10s = 400 \implies \mathbf{s = 40\text{ m}}$$
- **Check 1 (Second Equation):**
  $$s = ut + \frac{1}{2} at^2 = (20)(4) + \frac{1}{2}(-5)(4^2) = 80 - \frac{1}{2}(5)(16) = 80 - 40 = 40\text{ m} ✅$$
- **Check 2 (Average Velocity Method):**
  $$s = \frac{u + v}{2} t = \frac{20 + 0}{2} \times 4 = 10 \times 4 = 40\text{ m} ✅$$

All methods confirm: **stopping time is $4\text{ s}$ and stopping distance is $40\text{ m}$**.

### Example 3: Resolving Officer Miller's School Zone Puzzle

Why is the school zone speed limit set to $36\text{ km/h}$ instead of $72\text{ km/h}$? Let us compute stopping distances under realistic automobile braking ($a = -2.5\text{ m/s}^2$):

**Car 1: Driving at the School Zone Limit ($36\text{ km/h}$)**
- $u = 36\text{ km/h} \times \frac{5}{18} = \mathbf{10\text{ m/s}}$, $v = 0$, $a = -2.5\text{ m/s}^2$.
- Stopping time: $t = \frac{v - u}{a} = \frac{0 - 10}{-2.5} = \mathbf{4\text{ s}}$.
- Stopping distance:
  $$v^2 = u^2 + 2as \implies 0 = 10^2 + 2(-2.5)s \implies 0 = 100 - 5s \implies \mathbf{s = 20\text{ m}}$$

**Car 2: Driving at Double Speed ($72\text{ km/h}$)**
- $u = 72\text{ km/h} \times \frac{5}{18} = \mathbf{20\text{ m/s}}$, $v = 0$, $a = -2.5\text{ m/s}^2$.
- Stopping time: $t = \frac{0 - 20}{-2.5} = \mathbf{8\text{ s}}$.
- Stopping distance:
  $$v^2 = u^2 + 2as \implies 0 = 20^2 + 2(-2.5)s \implies 0 = 400 - 5s \implies \mathbf{s = 80\text{ m}}$$

**The Mathematical Revelation:**
- Speed doubled: $10\text{ m/s} \to 20\text{ m/s}$ ($2\times$)
- Stopping time doubled: $4\text{ s} \to 8\text{ s}$ ($2\times$)
- **Stopping distance quadrupled: $20\text{ m} \to 80\text{ m}$ ($4\times$)!**

Because $v^2 = u^2 + 2as \implies s = \frac{u^2}{2|a|}$, **stopping distance is proportional to the square of velocity ($s \propto u^2$)**. A car traveling at $72\text{ km/h}$ takes an enormous $80\text{ meters}$ to stop—plowing right through the pedestrian zebra crossing!

### Example 4: A High-Speed Train Accelerating on Open Rails

A passenger train cruises at $54\text{ km/h}$. It accelerates uniformly at $0.5\text{ m/s}^2$ for $20\text{ s}$. Find its final speed and the distance traversed during acceleration:
- $u = 54 \times \frac{5}{18} = 15\text{ m/s}$, $a = 0.5\text{ m/s}^2$, $t = 20\text{ s}$.
- $v = u + at = 15 + (0.5)(20) = 15 + 10 = \mathbf{25\text{ m/s}}$ ($25 \times 3.6 = \mathbf{90\text{ km/h}}$).
- $s = ut + \frac{1}{2} at^2 = (15)(20) + \frac{1}{2}(0.5)(20^2) = 300 + \frac{1}{2}(0.5)(400) = 300 + 100 = \mathbf{400\text{ m}}$.
- **Check:** $s = \frac{u + v}{2} t = \frac{15 + 25}{2} \times 20 = 20 \times 20 = 400\text{ m} ✅$.

### Example 5: Finding Acceleration from Speeds and Distance

A delivery truck accelerates uniformly from $10\text{ m/s}$ to $20\text{ m/s}$ over a distance of $150\text{ m}$. Find its acceleration and elapsed time:
- Given: $u = 10\text{ m/s}$, $v = 20\text{ m/s}$, $s = 150\text{ m}$. Variable $t$ is missing $\implies$ 3rd Equation.
  $$v^2 = u^2 + 2as \implies 20^2 = 10^2 + 2a(150) \implies 400 = 100 + 300a \implies 300a = 300 \implies \mathbf{a = 1\text{ m/s}^2}$$
- Elapsed time:
  $$v = u + at \implies 20 = 10 + (1)t \implies \mathbf{t = 10\text{ s}}$$
- **Check:** $s = ut + \frac{1}{2}at^2 = (10)(10) + \frac{1}{2}(1)(100) = 100 + 50 = 150\text{ m} ✅$.

### Example 6: A Motorcycle Launching from Rest

A motorcycle starting from rest reaches $72\text{ km/h}$ over a distance of $100\text{ m}$. Determine its acceleration and time taken:
- $u = 0$, $v = 72 \times \frac{5}{18} = 20\text{ m/s}$, $s = 100\text{ m}$.
  $$v^2 = u^2 + 2as \implies 20^2 = 0 + 2a(100) \implies 400 = 200a \implies \mathbf{a = 2\text{ m/s}^2}$$
- Time: $t = \frac{v - u}{a} = \frac{20 - 0}{2} = \mathbf{10\text{ s}}$.
- **Check:** $s = \frac{u + v}{2} t = \frac{0 + 20}{2} \times 10 = 10 \times 10 = 100\text{ m} ✅$.

### Example 7: Braking to a Halt: Calculating Retardation

A car moving at $54\text{ km/h}$ is brought to rest in $45\text{ m}$. Find its retardation and the braking time:
- $u = 54 \times \frac{5}{18} = 15\text{ m/s}$, $v = 0$, $s = 45\text{ m}$.
  $$v^2 = u^2 + 2as \implies 0 = 15^2 + 2a(45) \implies 0 = 225 + 90a \implies a = \frac{-225}{90} = \mathbf{-2.5\text{ m/s}^2}$$
  $$\text{Retardation} = \mathbf{2.5\text{ m/s}^2}$$
- Braking time: $t = \frac{v - u}{a} = \frac{0 - 15}{-2.5} = \mathbf{6\text{ s}}$.
- **Check:** $s = ut + \frac{1}{2}at^2 = (15)(6) + \frac{1}{2}(-2.5)(36) = 90 - 45 = 45\text{ m} ✅$.

### Example 8: Determining Elapsed Time via Quadratic Factoring

A cyclist rides at $5\text{ m/s}$ and accelerates at $2\text{ m/s}^2$. How much time will he require to cover $24\text{ m}$, and what will his speed be at that moment?
- $u = 5\text{ m/s}$, $a = 2\text{ m/s}^2$, $s = 24\text{ m}$.
  $$s = ut + \frac{1}{2} at^2 \implies 24 = 5t + \frac{1}{2}(2)t^2 \implies t^2 + 5t - 24 = 0$$
- Factoring the quadratic equation:
  $$(t + 8)(t - 3) = 0 \implies t = -8\text{ or } t = 3$$
  Because time cannot be negative, we discard $-8\text{ s}$: **$\mathbf{t = 3\text{ s}}$**.
- Speed after $3\text{ s}$:
  $$v = u + at = 5 + (2)(3) = \mathbf{11\text{ m/s}}$$
- **Check:** $v^2 = u^2 + 2as = 5^2 + 2(2)(24) = 25 + 96 = 121 \implies v = \sqrt{121} = 11\text{ m/s} ✅$.

### Example 9 (Enrichment): Distance Covered in the n-th Second

To find the distance covered exclusively during the $n\text{-th}$ second (between $t = n - 1$ and $t = n$):
- Distance in first $n$ seconds: $s_n = un + \frac{1}{2} an^2$.
- Distance in first $(n - 1)$ seconds: $s_{n-1} = u(n - 1) + \frac{1}{2} a(n - 1)^2$.
- Subtracting yields the formula for the $n\text{-th}$ second:
  $$\mathbf{s_{\text{nth}} = u + \frac{a}{2}(2n - 1)}$$

**Numerical Demonstration:**
Let $u = 5\text{ m/s}$, $a = 2\text{ m/s}^2$, and find the distance covered in the 4th second ($n = 4$):
- $s(4) = 5(4) + \frac{1}{2}(2)(16) = 20 + 16 = 36\text{ m}$.
- $s(3) = 5(3) + \frac{1}{2}(2)(9) = 15 + 9 = 24\text{ m}$.
- $\text{Difference} = 36 - 24 = \mathbf{12\text{ m}}$.
- Using formula: $s_{\text{4th}} = 5 + \frac{2}{2}(2 \times 4 - 1) = 5 + 1(7) = \mathbf{12\text{ m}} ✅$.

### Example 10: Multi-Stage Journey (Acceleration, Cruise, Braking)

A bus accelerates from rest at $1\text{ m/s}^2$ for $10\text{ s}$, cruises at steady speed for $20\text{ s}$, and decelerates uniformly at $2\text{ m/s}^2$ to a complete stop. Find the total distance and total elapsed time:

- **Stage 1 (Accelerating):** $u_1 = 0$, $a_1 = 1\text{ m/s}^2$, $t_1 = 10\text{ s}$.
  $$v_1 = 0 + (1)(10) = 10\text{ m/s}, \quad s_1 = \frac{1}{2}(1)(10^2) = \mathbf{50\text{ m}}$$
- **Stage 2 (Cruising):** $u_2 = 10\text{ m/s}$, $a_2 = 0$, $t_2 = 20\text{ s}$.
  $$s_2 = 10 \times 20 = \mathbf{200\text{ m}}$$
- **Stage 3 (Braking):** $u_3 = 10\text{ m/s}$, $v_3 = 0$, $a_3 = -2\text{ m/s}^2$.
  $$t_3 = \frac{0 - 10}{-2} = \mathbf{5\text{ s}}, \quad s_3 = \frac{0^2 - 10^2}{2(-2)} = \frac{-100}{-4} = \mathbf{25\text{ m}}$$
- **Totals:**
  $$\text{Total Distance} = 50 + 200 + 25 = \mathbf{275\text{ m}}$$
  $$\text{Total Time} = 10 + 20 + 5 = \mathbf{35\text{ s}}$$
  $$\text{Average Speed} = \frac{275\text{ m}}{35\text{ s}} \approx \mathbf{7.86\text{ m/s}}$$
- **Trapezoidal Check:**
  $$\text{Area} = \frac{35 + 20}{2} \times 10 = \frac{55}{2} \times 10 = 275\text{ m} ✅$$

### Example 11: The Physics of Stopping Distances

Assuming a constant braking retardation of $a = -2.5\text{ m/s}^2$, we tabulate stopping metrics across various speeds using $s = \frac{u^2}{2|a|} = \frac{u^2}{5}$:

| Speed ($\text{km/h}$) | Speed ($\text{m/s}$) | Stopping Time ($t = u / 2.5$) | Stopping Distance ($s = u^2 / 5$) | Scaling vs. 18 km/h |
|---|---|---|---|---|
| 18 | 5 | 2 s | 5 m | Baseline ($1\times$) |
| 36 | 10 | 4 s | 20 m | $4\times$ ($2^2$) |
| 54 | 15 | 6 s | 45 m | $9\times$ ($3^2$) |
| 72 | 20 | 8 s | 80 m | $16\times$ ($4^2$) |

Every doubling of vehicular speed quadruples the required stopping distance!

---

## Kinematic Equations at a Glance

| Equation | Name / Mathematical Form | Missing Variable | Primary Application |
|---|---|---|---|
| **First Equation** | $v = u + at$ | $s$ | Finding speed or time when displacement is unknown |
| **Second Equation** | $s = ut + \frac{1}{2} at^2$ | $v$ | Finding distance or time from initial launch |
| **Third Equation** | $v^2 = u^2 + 2as$ | $t$ | Linking speeds directly to distance without a clock |
| **Average Form** | $s = \frac{u + v}{2} t$ | $a$ | Finding distance directly when both velocities are known |

---

## Common Pitfalls to Avoid

1. **Mistake 1: Applying kinematic equations when acceleration is variable.**
   These equations apply **strictly to uniform (constant) acceleration**. If acceleration changes between phases, divide the trip into discrete stages (as in Example 10).

2. **Mistake 2: Forgetting to convert km/h to m/s before calculation.**
   Inserting $u = 36\text{ km/h}$ directly into $s = \frac{u^2}{2a}$ with $a = 2.5\text{ m/s}^2$ yields an absurd stopping distance of $259\text{ m}$! Always convert to $\text{m/s}$ ($36\text{ km/h} = 10\text{ m/s}$) to obtain the correct $20\text{ m}$.

3. **Mistake 3: Omitting the negative sign for retardation.**
   When a vehicle slows down, write $a = -2.5\text{ m/s}^2$. Forgetting the minus sign produces negative distances or unphysical imaginary speeds.

4. **Mistake 4: Confusing initial velocity u with final velocity v for a stopping vehicle.**
   When a problem says *"a vehicle comes to a stop"*, it implies **$v = 0$**, while $u$ is its cruising speed before braking.

5. **Mistake 5: Using total distance instead of net displacement.**
   The variable $s$ is displacement. If an object rolls forward $30\text{ m}$ and rolls back $10\text{ m}$, use $s = +20\text{ m}$, not $40\text{ m}$.

6. **Mistake 6: Making algebraic errors between v² − u² and (v − u)².**
   Note that $v^2 - u^2 \ne (v - u)^2$. If $v = 5$ and $u = 3$, $v^2 - u^2 = 25 - 9 = 16$, whereas $(v - u)^2 = 2^2 = 4$. The third equation requires $v^2 - u^2$.

7. **Mistake 7: Assuming stopping distance doubles when speed doubles.**
   Stopping distance grows with the **square of speed** ($s \propto u^2$). Doubling speed quadruples the required stopping distance.

---

## Quick Recap

- The three equations of motion for uniform acceleration along a straight line:
  1. **$v = u + at$** (derived from acceleration definition / $v-t$ slope).
  2. **$s = ut + \frac{1}{2} at^2$** (derived from $v-t$ graph area: rectangle + triangle).
  3. **$v^2 = u^2 + 2as$** (derived by eliminating time $t$).
  - Supplementary: **$s = \frac{u + v}{2} t$**.
- Set the initial travel direction as positive; deceleration yields negative $a$; stopped vehicle yields $v = 0$.
- Always convert speeds to $\text{m/s}$ ($1\text{ km/h} = \frac{5}{18}\text{ m/s}$) before evaluating equations.
- Select your equation based on the omitted variable using the Decision Guide.
- Stopping distance grows quadratically with launch speed: $s = \frac{u^2}{2|a|}$.

---

## Practice Questions

1. An automobile starting from rest accelerates uniformly at $4\text{ m/s}^2$ for $6\text{ s}$. Find its final velocity and the distance traversed.
2. A motorcycle traveling at $15\text{ m/s}$ applies brakes and stops uniformly in $3\text{ s}$. Determine its retardation and the stopping distance.
3. A car cruising at $90\text{ km/h}$ decelerates with a constant retardation of $5\text{ m/s}^2$. Find the time required to stop and the total stopping distance.
4. A scooter moves with an initial velocity of $4\text{ m/s}$ and accelerates at $3\text{ m/s}^2$ over a distance of $14\text{ m}$. Determine its final velocity and the time taken.
5. In a school zone, Car A travels at $36\text{ km/h}$, while reckless Car B travels at $108\text{ km/h}$ (three times faster). Assuming both drivers achieve identical braking retardation, by what factor is Car B's stopping distance larger than Car A's?
6. A transit bus starts from rest, accelerates at $2\text{ m/s}^2$ for $5\text{ s}$, cruises at constant speed for $10\text{ s}$, and brakes uniformly to rest at $5\text{ m/s}^2$. Calculate the total distance covered.
7. (Enrichment) An object accelerates from rest with $a = 4\text{ m/s}^2$. Calculate the distance traversed during the 5th second, and verify your answer using $s(5) - s(4)$.
8. A car stops in a distance of $50\text{ m}$ under a uniform retardation of $4\text{ m/s}^2$. Find its initial speed in both $\text{m/s}$ and $\text{km/h}$, as well as the braking duration.
9. State whether each statement is True or False:
   (a) The equation $s = ut + \frac{1}{2}at^2$ can be directly applied to a journey where acceleration fluctuates continuously.
   (b) For a decelerating vehicle traveling in the positive direction, acceleration $a$ must be assigned a negative value.
   (c) If a vehicle moves forward $30\text{ m}$ and then reverses $10\text{ m}$, we substitute $s = 40\text{ m}$ into the kinematic equations.

### Answers

1. $u = 0$, $a = 4\text{ m/s}^2$, $t = 6\text{ s}$.
   - $v = 0 + (4)(6) = \mathbf{24\text{ m/s}}$.
   - $s = \frac{1}{2}(4)(6^2) = \frac{1}{2}(4)(36) = \mathbf{72\text{ m}}$.
   - Check: $v^2 = 2as = 2(4)(72) = 576 = 24^2 ✅$.
2. $u = 15\text{ m/s}$, $v = 0$, $t = 3\text{ s}$.
   - $a = \frac{0 - 15}{3} = \mathbf{-5\text{ m/s}^2} \implies \text{Retardation} = \mathbf{5\text{ m/s}^2}$.
   - $s = \frac{15 + 0}{2} \times 3 = \mathbf{22.5\text{ m}}$.
   - Check: $0 = 15^2 + 2(-5)(22.5) = 225 - 225 = 0 ✅$.
3. $u = 90 \times \frac{5}{18} = 25\text{ m/s}$, $v = 0$, $a = -5\text{ m/s}^2$.
   - $t = \frac{0 - 25}{-5} = \mathbf{5\text{ s}}$.
   - $s = \frac{0^2 - 25^2}{2(-5)} = \frac{-625}{-10} = \mathbf{62.5\text{ m}}$.
   - Check: $s = (25)(5) + \frac{1}{2}(-5)(25) = 125 - 62.5 = 62.5\text{ m} ✅$.
4. $u = 4\text{ m/s}$, $a = 3\text{ m/s}^2$, $s = 14\text{ m}$.
   - $v^2 = u^2 + 2as = 4^2 + 2(3)(14) = 16 + 84 = 100 \implies \mathbf{v = 10\text{ m/s}}$.
   - $t = \frac{v - u}{a} = \frac{10 - 4}{3} = \mathbf{2\text{ s}}$.
   - Check: $s = (4)(2) + \frac{1}{2}(3)(4) = 8 + 6 = 14\text{ m} ✅$.
5. $u_{\text{A}} = 36\text{ km/h} = 10\text{ m/s}$; $u_{\text{B}} = 108\text{ km/h} = 30\text{ m/s}$.
   - Because $s \propto u^2$, the ratio of stopping distances is $\left(\frac{30}{10}\right)^2 = 3^2 = \mathbf{9\text{ times longer}}$.
   - Check (using $a = -2.5\text{ m/s}^2$): $s_{\text{A}} = \frac{100}{5} = 20\text{ m}$; $s_{\text{B}} = \frac{900}{5} = 180\text{ m}$; $\frac{180}{20} = 9 ✅$.
6. Stage 1: $v_1 = (2)(5) = 10\text{ m/s}$, $s_1 = \frac{1}{2}(2)(25) = 25\text{ m}$.
   - Stage 2: $s_2 = 10 \times 10 = 100\text{ m}$.
   - Stage 3: $s_3 = \frac{0^2 - 10^2}{2(-5)} = \frac{-100}{-10} = 10\text{ m}$ (with $t_3 = \frac{10}{5} = 2\text{ s}$).
   - $\text{Total Distance} = 25 + 100 + 10 = \mathbf{135\text{ m}}$ (over total time $5 + 10 + 2 = 17\text{ s}$).
   - Check (Trapezoid): $\frac{17 + 10}{2} \times 10 = \frac{27}{2} \times 10 = 135\text{ m} ✅$.
7. $s_{\text{5th}} = u + \frac{a}{2}(2n - 1) = 0 + \frac{4}{2}(2 \times 5 - 1) = 2(9) = \mathbf{18\text{ m}}$.
   - Verification: $s(5) = \frac{1}{2}(4)(25) = 50\text{ m}$; $s(4) = \frac{1}{2}(4)(16) = 32\text{ m}$; $s(5) - s(4) = 50 - 32 = 18\text{ m} ✅$.
8. $v^2 = u^2 + 2as \implies 0 = u^2 + 2(-4)(50) \implies u^2 = 400 \implies \mathbf{u = 20\text{ m/s}}$.
   - In $\text{km/h}$: $20 \times 3.6 = \mathbf{72\text{ km/h}}$.
   - Stopping time: $t = \frac{20}{4} = \mathbf{5\text{ s}}$.
   - Check: $s = \frac{20 + 0}{2} \times 5 = 10 \times 5 = 50\text{ m} ✅$.
9. (a) **False** ❌: Kinematic equations require strictly constant acceleration.
   (b) **True** ✅: Deceleration opposes positive forward velocity, requiring a negative sign.
   (c) **False** ❌: The variable $s$ is displacement: $s = 30 - 10 = 20\text{ m}$ (distance is $40\text{ m}$).

---

With these three equations mastered, you can calculate the trajectories, braking profiles, and speeds of any vehicle moving with uniform acceleration! In Topic 7, we conclude the chapter by exploring motion along a curved trajectory: **Uniform Circular Motion**.
