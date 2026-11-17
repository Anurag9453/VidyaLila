# Chapter: Motion (Part 4)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [motion-part3.md](motion-part3.md)** (covering speed, velocity, average speed, and average velocity). The chapter introduction begins in [motion.md](motion.md).
> **Topics covered in this file:**
> 4. Acceleration

---

# Topic 4: Acceleration

In the previous topic, we established that speed measures **how fast** an object moves, while velocity measures **how fast and in what direction** it travels. Yet in everyday reality, vehicles rarely travel at an unvarying velocity: they speed up from stoplights, slow down around corners, and brake for pedestrians. This raises a fundamental physical question: **how quickly is velocity itself changing?** The physical quantity that answers this question is **acceleration**.

---

## Leo's First Laps on the Go-Kart Track

Leo was visiting an electric go-kart track for the very first time. His track instructor, Ms. Evans, adjusted his racing helmet, buckled his four-point safety harness, and explained: "Leo, along the straightaway, your controls are very straightforward: the right pedal accelerates, and the left pedal brakes. Everything else is pure focus."

As the green flag dropped, Leo pressed down smoothly on the accelerator. The kart surged forward, and its digital speedometer climbed from **$0$ to $18\text{ m/s}$** in just **$6\text{ seconds}$**. Leo felt himself pressed firmly backward into the padded seat.

At the end of the straightaway, Ms. Evans flagged him: "Now brake hard!" Leo stepped firmly onto the brake pedal. The kart's speed dropped from **$18\text{ m/s}$ down to a complete stop ($0\text{ m/s}$)** in just **$3\text{ seconds}$**. This time, Leo felt himself thrown forcefully forward against his safety harness. He gripped the steering wheel and grinned.

Ms. Evans walked over with a telemetry clipboard: "In both maneuvers, your speed changed by $18\text{ m/s}$. But one took 6 seconds, while the other took only 3 seconds. In which maneuver did your velocity change more rapidly, and how do we quantify that difference as an exact physical number?" We will analyze Leo's telemetry numerically in this lesson.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Acceleration** | The rate of change of velocity with respect to time: change in velocity per second | $3\text{ m/s}^2$ |
| **Initial velocity ($u$)** | The velocity of an object at the beginning of the observation interval ($t = 0$) | $u = 0\text{ m/s}$ at the starting line |
| **Final velocity ($v$)** | The velocity of an object at the conclusion of the observation interval | $v = 18\text{ m/s}$ at $t = 6\text{ s}$ |
| **Positive acceleration** | An acceleration vector directed in the chosen positive coordinate direction | $+3\text{ m/s}^2$ |
| **Negative acceleration / Retardation** | An acceleration vector directed in the negative direction, causing a forward-moving object to slow down | $-6\text{ m/s}^2$ (retardation $= 6\text{ m/s}^2$) |
| **Uniform acceleration** | Motion where velocity changes by equal amounts in equal intervals of time | Velocity increases by $2\text{ m/s}$ every second |
| **Non-uniform acceleration** | Motion where velocity changes by unequal amounts in equal intervals of time | Velocity increases by $1\text{ m/s}$, then $4\text{ m/s}$, then $2\text{ m/s}$ |

---

## Part A: What Acceleration Is and How to Calculate It

Whenever an object's velocity changes, the object undergoes **acceleration**. To quantify it, we divide the change in velocity by the time interval required for that change:

$$\text{Acceleration} = \frac{\text{Change in Velocity}}{\text{Time Taken}}$$

$$a = \frac{v - u}{t}$$

Where:
- $u$ = initial velocity (at the start of the time interval),
- $v$ = final velocity (at the end of the time interval),
- $t$ = elapsed time,
- $(v - u)$ = net change in velocity (always **final minus initial**).

**SI Unit of Acceleration:**
Because velocity is measured in $\text{m/s}$ and time in seconds ($\text{s}$), the unit is:

$$\frac{\text{m/s}}{\text{s}} = \mathbf{\text{m/s}^2} \quad (\text{read as "meters per second squared" or "meters per second per second"})$$

**Physical Meaning:** Acceleration tells us **by how many meters per second the velocity changes during every single second of elapsed time**.

### Physical Meaning of a = 2 m/s²

Suppose an object starts from rest ($u = 0$) and accelerates uniformly at $a = 2\text{ m/s}^2$. Its velocity increases by **$2\text{ m/s}$ every second**:

| Elapsed Time ($t$) | Velocity ($v$) | Change During This Second |
|---|---|---|
| 0 s | 0 m/s | Starting baseline |
| 1 s | 2 m/s | $+2\text{ m/s}$ |
| 2 s | 4 m/s | $+2\text{ m/s}$ |
| 3 s | 6 m/s | $+2\text{ m/s}$ |
| 4 s | 8 m/s | $+2\text{ m/s}$ |
| 5 s | 10 m/s | $+2\text{ m/s}$ |

Reading "$\text{m/s}^2$" as *"meters per second, every second"* makes its intuitive meaning completely clear.

### Leo's Go-Kart: Accelerating from 0 to 18 m/s

Let us track Leo's speed each second along the straightaway under steady acceleration:

```
 t = 0 s    1 s     2 s     3 s     4 s     5 s     6 s
   0   -->   3  -->  6  -->  9  --> 12  --> 15  --> 18     (m/s)
     +3      +3      +3      +3      +3      +3
```

> **Figure 4.1** – Leo's go-kart speed at consecutive 1-second intervals: $0, 3, 6, 9, 12, 15, 18\text{ m/s}$. Speed increases by exactly $3\text{ m/s}$ during each second.

Now we apply the formal algebraic formula:

**Example 1 (Accelerating Out of the Pits):**
Given: $u = 0$, $v = 18\text{ m/s}$, $t = 6\text{ s}$.

$$a = \frac{v - u}{t} = \frac{18\text{ m/s} - 0\text{ m/s}}{6\text{ s}} = \frac{18\text{ m/s}}{6\text{ s}} = \mathbf{+3\text{ m/s}^2}$$

**Check:** $3\text{ m/s}^2 \times 6\text{ s} = 18\text{ m/s}$, and $0 + 18 = 18\text{ m/s}$ ✅. Leo's speed increased by $3\text{ m/s}$ during each elapsed second.

---

## Part B: Positive and Negative Acceleration (Retardation / Deceleration)

For straight-line motion, we establish a coordinate direction as **positive** ($+$) (e.g., forward or rightward) and the opposing direction as **negative** ($-$). Both velocity and acceleration are signed vector quantities.

### Deceleration: Bringing the Kart to a Halt

**Example 2 (Hard Braking):**
Given: $u = 18\text{ m/s}$, $v = 0\text{ m/s}$, $t = 3\text{ s}$. Forward motion is defined as positive.

$$a = \frac{v - u}{t} = \frac{0\text{ m/s} - 18\text{ m/s}}{3\text{ s}} = \frac{-18\text{ m/s}}{3\text{ s}} = \mathbf{-6\text{ m/s}^2}$$

**Check:** $(-6\text{ m/s}^2) \times 3\text{ s} = -18\text{ m/s}$, and $18 + (-18) = 0\text{ m/s}$ ✅.

The negative sign indicates that the acceleration vector opposes the forward velocity. Each second, the kart loses $6\text{ m/s}$ of speed:

```
 t = 0 s    1 s     2 s     3 s
  18   -->  12  -->  6  -->  0         (m/s)
     -6      -6      -6
```

> **Figure 4.2** – Leo's go-kart speed under braking: $18, 12, 6, 0\text{ m/s}$. Speed decreases by $6\text{ m/s}$ every second.

This reduction in speed is called **negative acceleration**, **retardation**, or **deceleration**:
- **Acceleration** $= -6\text{ m/s}^2$
- **Retardation (magnitude)** $= 6\text{ m/s}^2$

### A Crucial Distinction: Speed is Never Negative

Retardation does **not** mean that speed becomes negative. Speed is a scalar magnitude and remains strictly $\ge 0$: Leo's speed was $18, 12, 6, 0\text{ m/s}$. The negative sign belongs exclusively to **acceleration**, indicating the direction in which velocity is shifting.

When specifying retardation, the word itself denotes a decrease, so we state the magnitude as positive: *"The kart's retardation is $6\text{ m/s}^2$."*

### Determining Signs: The Four Kinematic Scenarios

The algebraic sign of acceleration depends on both the **direction of motion** and whether the object is **speeding up or slowing down**:

| Direction of Motion | Speeding Up or Slowing Down? | Sign of Acceleration ($a$) |
|---|---|---|
| Positive Direction ($+$) | Speeding up | **Positive ($+$)** |
| Positive Direction ($+$) | Slowing down | **Negative ($-$)** |
| Negative Direction ($-$) | Speeding up | **Negative ($-$)** |
| Negative Direction ($-$) | Slowing down | **Positive ($+$)** |

The third and fourth scenarios frequently surprise students, so let us examine them carefully:

- **Row 3 (Speeding up in the negative direction):** A car drives West (negative axis). Its velocity changes from $-5\text{ m/s}$ to $-15\text{ m/s}$ (speed increases from $5$ to $15\text{ m/s}$).
  $$\Delta v = -15 - (-5) = -10\text{ m/s}$$
  The change is negative, so **acceleration is negative**, even though the car is speeding up! The negative sign indicates that velocity is becoming increasingly negative.
- **Row 4 (Slowing down in the negative direction):** A car traveling West slows down from $-12\text{ m/s}$ to $-4\text{ m/s}$.
  $$\Delta v = -4 - (-12) = +8\text{ m/s}$$
  Here, **acceleration is positive**, even though the car's speed dropped from $12\text{ m/s}$ to $4\text{ m/s}$.

**Rule of Thumb:**
- When velocity and acceleration share the **same sign**, the object **speeds up**.
- When velocity and acceleration have **opposite signs**, the object **slows down**.

**Example 3 (Speeding up in the negative direction):**
$u = -5\text{ m/s}$, $v = -15\text{ m/s}$, $t = 5\text{ s}$.
$$a = \frac{-15 - (-5)}{5} = \frac{-10}{5} = \mathbf{-2\text{ m/s}^2}$$
**Check:** $u + at = -5 + (-2)(5) = -5 - 10 = -15\text{ m/s}$ ✅. The car accelerates in the negative direction.

**Example 4 (Slowing down in the negative direction):**
$u = -12\text{ m/s}$, $v = -4\text{ m/s}$, $t = 4\text{ s}$.
$$a = \frac{-4 - (-12)}{4} = \frac{+8}{4} = \mathbf{+2\text{ m/s}^2}$$
**Check:** $-12 + (2)(4) = -12 + 8 = -4\text{ m/s}$ ✅.

---

## Part C: Uniform and Non-Uniform Acceleration

### Uniform Acceleration

When an object's velocity changes by **equal amounts in equal intervals of time**, the acceleration is **uniform (constant)**.
- In our $2\text{ m/s}^2$ table, velocity increased by exactly $+2\text{ m/s}$ every second.
- In Leo's braking maneuver, velocity decreased by exactly $-6\text{ m/s}$ every second.
- An object in **free fall** near the Earth's surface accelerates downward under gravity at a uniform rate ($g \approx 9.8\text{ m/s}^2$), a topic we explore in the Gravitation chapter.

### Non-Uniform Acceleration

When an object's velocity changes by **unequal amounts in equal intervals of time**, its acceleration is **non-uniform (variable)**.
- A city bus accelerating away from a stop: speed changes by $1\text{ m/s}$ in the 1st second, $4\text{ m/s}$ in the 2nd second, and $2\text{ m/s}$ in the 3rd second. The acceleration varies ($1\text{ m/s}^2$, $4\text{ m/s}^2$, $2\text{ m/s}^2$).

### Constant Velocity Means Zero Acceleration

If an object travels at a perfectly constant velocity (neither changing speed nor direction), then $v = u$, which yields:

$$a = \frac{v - u}{t} = \frac{0}{t} = \mathbf{0\text{ m/s}^2}$$

**Uniform Velocity implies Zero Acceleration.** While cruising smoothly at $100\text{ km/h}$ along a straight highway, you feel no forward or backward forces because your acceleration is zero.

---

## Part D: Two Ways Velocity Can Change

Recall that velocity consists of both **magnitude (speed)** and **spatial direction**. Consequently, acceleration occurs if:

1. **Speed changes while direction remains fixed:** A dragster accelerating in a straight lane.
2. **Direction changes while speed remains fixed:** A vehicle navigating a circular curve at an unwavering $40\text{ km/h}$.

Because the car's heading changes from moment to moment, its velocity changes, meaning **it is accelerating even though its speed is constant!** This circular acceleration is known as centripetal acceleration, which we study in Topic 7.

---

## Part E: Resolving Leo's Go-Kart Puzzle and Solved Examples

### Which Maneuver Had the Greater Acceleration?

We can now resolve Ms. Evans's question:

- **Throttle Acceleration:** $a = \mathbf{+3\text{ m/s}^2}$
- **Braking Deceleration:** $a = \mathbf{-6\text{ m/s}^2}$ ($\text{Retardation} = 6\text{ m/s}^2$)

Comparing magnitudes: $6\text{ m/s}^2 \div 3\text{ m/s}^2 = 2$.
The braking maneuver produced **twice the rate of velocity change** as the throttle maneuver! This explains why Leo felt a much stronger force pulling against his harness during braking than pushing him back during acceleration. (We will explore the exact relationship between acceleration and force, $F = ma$, in the Forces and Laws of Motion chapter.)

### Further Solved Numerical Examples

**Example 5: Finding Acceleration**

A sedan speeds up from $10\text{ m/s}$ to $30\text{ m/s}$ in $5\text{ s}$. Calculate its acceleration.
$$a = \frac{30 - 10}{5} = \frac{20}{5} = \mathbf{4\text{ m/s}^2}$$
**Check:** $10 + 4 \times 5 = 10 + 20 = 30\text{ m/s}$ ✅.

**Example 6: Determining Final Velocity**

A bicycle rolls down a gentle slope with an initial velocity of $5\text{ m/s}$ and an acceleration of $2\text{ m/s}^2$. What is its velocity after $4\text{ s}$?
Rearranging $a = \frac{v - u}{t}$ gives the first kinematic equation:
$$\mathbf{v = u + at}$$
$$v = 5\text{ m/s} + (2\text{ m/s}^2)(4\text{ s}) = 5 + 8 = \mathbf{13\text{ m/s}}$$
**Check:** $\frac{13 - 5}{4} = \frac{8}{4} = 2\text{ m/s}^2$ ✅.

**Example 7: Calculating Elapsed Time**

A stationary scooter ($u = 0$) accelerates at $3\text{ m/s}^2$. How long will it take to reach a velocity of $24\text{ m/s}$?
$$t = \frac{v - u}{a} = \frac{24 - 0}{3} = \mathbf{8\text{ s}}$$
**Check:** $3\text{ m/s}^2 \times 8\text{ s} = 24\text{ m/s}$ ✅.

**Example 8: Braking to a Standstill**

A passenger bus moves at $20\text{ m/s}$. The driver applies the brakes, bringing the bus to a complete stop in $5\text{ s}$. Find the acceleration and retardation.
$$a = \frac{0 - 20}{5} = \frac{-20}{5} = \mathbf{-4\text{ m/s}^2}$$
$$\text{Retardation} = \mathbf{4\text{ m/s}^2}$$
**Check:** $20 + (-4)(5) = 20 - 20 = 0\text{ m/s}$ ✅.

**Example 9: Converting km/h to m/s First**

A high-speed train accelerates from $36\text{ km/h}$ to $72\text{ km/h}$ in $20\text{ s}$. Calculate its acceleration in $\text{m/s}^2$.
- $u = 36\text{ km/h} \times \frac{5}{18} = 2 \times 5 = \mathbf{10\text{ m/s}}$
- $v = 72\text{ km/h} \times \frac{5}{18} = 4 \times 5 = \mathbf{20\text{ m/s}}$
$$a = \frac{20 - 10}{20} = \frac{10}{20} = \mathbf{0.5\text{ m/s}^2}$$
**Check:** $10 + (0.5)(20) = 10 + 10 = 20\text{ m/s}$ ✅.

**Example 10: Comparing Two Vehicles**

Car A accelerates from rest ($u = 0$) to $20\text{ m/s}$ in $5\text{ s}$. Car B accelerates from rest ($u = 0$) to $30\text{ m/s}$ in $10\text{ s}$. Which car exhibits greater acceleration?
- Car A: $a_{\text{A}} = \frac{20 - 0}{5} = \mathbf{4\text{ m/s}^2}$
- Car B: $a_{\text{B}} = \frac{30 - 0}{10} = \mathbf{3\text{ m/s}^2}$
Although Car B reaches a higher final speed, **Car A has the greater acceleration** ($4 > 3\text{ m/s}^2$). Acceleration measures the rate of change per second, not the final top speed achieved.

**Example 11: Deceleration and Time to Stop**

A sports car travels at $25\text{ m/s}$. The driver applies brakes producing a constant acceleration of $-5\text{ m/s}^2$. Find its velocity after $3\text{ s}$, and find the total time required to come to a complete stop.
- Velocity after $3\text{ s}$:
  $$v = u + at = 25 + (-5)(3) = 25 - 15 = \mathbf{10\text{ m/s}}$$
- Time to stop ($v = 0$):
  $$t = \frac{0 - 25}{-5} = \frac{-25}{-5} = \mathbf{5\text{ s}}$$
**Check:** $25 + (-5)(5) = 0\text{ m/s}$ ✅.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Equating retardation with "negative speed."**
   Speed is always non-negative. Retardation describes a decrease in speed over time; the negative sign attaches to **acceleration** (e.g., $-6\text{ m/s}^2$).

2. **Mistake 2: Assuming zero velocity guarantees zero acceleration.**
   An object momentarily at rest ($v = 0$) can still possess non-zero acceleration if its velocity is actively changing at that instant. For example, a tennis ball thrown straight up reaches $v = 0$ at its highest point, yet gravity accelerates it downward at $9.8\text{ m/s}^2$ at that exact microsecond.

3. **Mistake 3: Computing acceleration with speeds in km/h while expecting m/s² results.**
   In Example 9, calculating $\frac{72 - 36}{20} = 1.8$ produces an unstandardized hybrid unit ($\text{km/(h}\cdot\text{s)}$), not $\text{m/s}^2$. Always convert speeds to $\text{m/s}$ before computing acceleration.

4. **Mistake 4: Reversing initial and final velocities (u − v instead of v − u).**
   The numerator is strictly **final minus initial** ($v - u$). For Leo's braking, subtracting $18 - 0$ erroneously yields $+6\text{ m/s}^2$ instead of the correct $-6\text{ m/s}^2$.

5. **Mistake 5: Writing velocity units (m/s) instead of acceleration units (m/s²).**
   Velocity is measured in $\text{m/s}$; acceleration is measured in **$\text{m/s}^2$**. Always include the squared time exponent.

6. **Mistake 6: Believing constant speed always implies zero acceleration.**
   An object moving at constant speed along a curved track changes direction continuously, giving it non-zero acceleration. Zero acceleration requires **both constant speed and an unchanging straight-line direction**.

---

## Quick Recap

- **Acceleration** $= \frac{\text{Change in Velocity}}{\text{Time}} = \frac{v - u}{t}$. Measures the rate of change of velocity per second.
- **SI unit:** **$\text{m/s}^2$**. An acceleration of $2\text{ m/s}^2$ means velocity shifts by $2\text{ m/s}$ each second.
- **Positive Acceleration:** Velocity increases in the positive coordinate direction.
- **Retardation / Deceleration:** An object slows down in its direction of motion. When moving in the positive direction, slowing down corresponds to negative acceleration.
- **Uniform Acceleration:** Velocity changes by equal amounts in equal time intervals.
- **Uniform Velocity $\implies$ Zero Acceleration.**
- Velocity changes either by altering **magnitude (speed)** or **spatial direction**. A car turning at constant speed accelerates.
- Rearranged kinematic relation: **$v = u + at$** and **$t = \frac{v - u}{a}$**.
- **Leo's Telemetry:** Throttle $a = +3\text{ m/s}^2$; Braking $a = -6\text{ m/s}^2$ ($\text{Retardation} = 6\text{ m/s}^2$). Braking was twice as intense.

---

## Practice Questions

1. A car's velocity increases from $4\text{ m/s}$ to $16\text{ m/s}$ in $3\text{ s}$. Calculate its acceleration.
2. A motorcycle starting from rest reaches a velocity of $27\text{ m/s}$ in $9\text{ s}$. Find its acceleration. By how much does its velocity increase during each individual second?
3. A cyclist moves with an initial velocity of $2\text{ m/s}$ and accelerates at $3\text{ m/s}^2$. Determine his velocity after $5\text{ s}$.
4. A motorized scooter traveling at $15\text{ m/s}$ is brought to a complete stop by braking in $5\text{ s}$. Determine its acceleration and its retardation. Why is the acceleration negative?
5. A high-speed train changes its speed from $54\text{ km/h}$ to $90\text{ km/h}$ over a duration of $10\text{ s}$. Convert the speeds to $\text{m/s}$ first, then calculate the train's acceleration.
6. A motorboat starting from rest moves with a uniform acceleration of $2.5\text{ m/s}^2$. How long will it take to reach a speed of $20\text{ m/s}$?
7. Car A accelerates from $10\text{ m/s}$ to $20\text{ m/s}$ in $4\text{ s}$. Car B accelerates from $0$ to $18\text{ m/s}$ in $9\text{ s}$. Which car exhibits greater acceleration? Show your complete working.
8. A test vehicle moves in the negative coordinate direction. Its velocity changes from $-8\text{ m/s}$ to $-20\text{ m/s}$ in $6\text{ s}$. Calculate its acceleration. Is the vehicle speeding up or slowing down? Why is the calculated acceleration negative?
9. State whether each statement is True or False:
   (a) A negative acceleration always means that an object is slowing down.
   (b) If an object moves with uniform velocity, its acceleration is strictly zero.
   (c) The SI unit of acceleration is $\text{m/s}$.
   (d) A car navigating a circular bend at a constant speedometer reading of $50\text{ km/h}$ has zero acceleration.
10. Leo's go-kart accelerates from $0$ to $18\text{ m/s}$ in $6\text{ s}$, and later decelerates from $18\text{ m/s}$ to rest in $3\text{ s}$. Without using a calculator, explain which phase has the greater acceleration magnitude, and by what factor.

### Answers

1. $a = \frac{16 - 4}{3} = \frac{12}{3} = \mathbf{4\text{ m/s}^2}$.
   - Check: $4 + 4 \times 3 = 16\text{ m/s}$ ✅.
2. $a = \frac{27 - 0}{9} = \mathbf{3\text{ m/s}^2}$. Velocity increases by **$3\text{ m/s}$ every second**.
   - Check: $3 \times 9 = 27\text{ m/s}$ ✅.
3. $v = u + at = 2 + (3)(5) = 2 + 15 = \mathbf{17\text{ m/s}}$.
   - Check: $\frac{17 - 2}{5} = 3\text{ m/s}^2$ ✅.
4. $a = \frac{0 - 15}{5} = \mathbf{-3\text{ m/s}^2}$. $\text{Retardation} = \mathbf{3\text{ m/s}^2}$.
   - Acceleration is negative because the scooter is traveling in the positive direction while slowing down (velocity vector and acceleration vector point in opposite directions).
   - Check: $15 + (-3)(5) = 0$ ✅.
5. $u = 54 \times \frac{5}{18} = 15\text{ m/s}$; $v = 90 \times \frac{5}{18} = 25\text{ m/s}$.
   - $a = \frac{25 - 15}{10} = \frac{10}{10} = \mathbf{1\text{ m/s}^2}$.
   - Check: $15 + 1 \times 10 = 25\text{ m/s}$ ✅.
6. $t = \frac{v - u}{a} = \frac{20 - 0}{2.5} = \mathbf{8\text{ s}}$.
   - Check: $2.5 \times 8 = 20\text{ m/s}$ ✅.
7. Car A: $a_{\text{A}} = \frac{20 - 10}{4} = \frac{10}{4} = \mathbf{2.5\text{ m/s}^2}$.
   - Car B: $a_{\text{B}} = \frac{18 - 0}{9} = \mathbf{2\text{ m/s}^2}$.
   - **Car A** has greater acceleration ($2.5 > 2.0\text{ m/s}^2$).
   - Check: $10 + 2.5 \times 4 = 20$ ✅; $2 \times 9 = 18$ ✅.
8. $a = \frac{-20 - (-8)}{6} = \frac{-12}{6} = \mathbf{-2\text{ m/s}^2}$.
   - The car is **speeding up** (its speed increases from $8\text{ m/s}$ to $20\text{ m/s}$).
   - The acceleration is negative because its velocity vector is becoming increasingly negative (pointing West).
   - Check: $-8 + (-2)(6) = -20\text{ m/s}$ ✅.
9. (a) **False** ❌: An object speeding up in the negative direction has negative acceleration.
   (b) **True** ✅: Constant velocity means $\Delta v = 0$, so $a = 0$.
   (c) **False** ❌: $\text{m/s}$ is velocity; the SI unit of acceleration is $\text{m/s}^2$.
   (d) **False** ❌: Its direction changes continuously, so velocity changes, meaning it experiences centripetal acceleration.
10. Accelerating: $a = \frac{18}{6} = 3\text{ m/s}^2$. Braking: $a = \frac{-18}{3} = -6\text{ m/s}^2$ ($|\text{magnitude}| = 6\text{ m/s}^2$).
    The braking phase has **$2\text{ times}$ greater acceleration** ($6 \div 3 = 2$) because the same $18\text{ m/s}$ change occurred in half the elapsed time.

---

Excellent! You now understand the physics of acceleration and deceleration. In Topic 5, we transition from numerical tables to **graphical representation of motion**, unlocking the power of distance-time and velocity-time graphs.
