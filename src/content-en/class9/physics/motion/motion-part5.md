# Chapter: Motion (Part 5)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [motion-part4.md](motion-part4.md)** (covering acceleration, deceleration, and uniform vs. non-uniform acceleration). The chapter introduction begins in [motion.md](motion.md).
> **Topics covered in this file:**
> 5. Graphical Representation of Motion: Distance-Time and Velocity-Time Graphs

---

# Topic 5: Graphical Representation of Motion: Distance-Time and Velocity-Time Graphs

So far, we have analyzed motion through **algebraic words and formulas**: distance, displacement, speed, velocity, and acceleration. Each concept has its equation and numerical value. However, during real-world journeys, vehicles constantly speed up, cruise at variable speeds, and halt at traffic signals. Tracking dozens of isolated numbers becomes unwieldy. In this topic, we master the universal language of motion: **kinematic graphs**, allowing us to interpret an entire journey's story at a single glance.

---

## Maya's Rideshare App Telemetry

Maya and her mother were riding home from the airport in an electric rideshare vehicle. Upon arriving, Maya opened the ride-hailing app on her smartphone to inspect the trip summary. Using high-precision GPS telemetry, the app displayed a detailed graph tracing their motion over a 40-second slice of the commute:

```
s (m)
300 :                                        O
    :                                       *
    :                                      *
    :                                     *
    :                                    *
200 :                                   *
    :                                  *
    :                                 *
    :                                *
    :                               *
100 :                   *O*********O
    :              ***** .         .
    :           ***      .         .
    :      *****         .         .
    :   ***              .         .
  0 +***-----------------.---------.------------>  t (s)
     0         10        20        30        40
```

> **Figure 5.1** – Distance-time graph of the rideshare vehicle over a 40-second interval: a gentle upward slant from 0 to 20 s, a perfectly flat segment from 20 to 30 s, and a steep upward line from 30 to 40 s.

Maya looked closely at the screen: "Mom, look at this trace. Here it slants upward gently, in the middle it goes completely flat, and at the end it shoots up steeply. What does the steepness tell us?"

Her mother smiled: "Notice the middle segment: the line is completely **horizontal**. That corresponds to when our driver **waited at the red traffic light**. The initial portion has a **gentle slope**: we were crawling through **heavy airport terminal congestion**. The final portion becomes **very steep**: we broke out onto the **open expressway**."

Maya realized: "So the slope of the line directly reveals how fast the car was moving!"

"Precisely. And we can calculate the exact numerical speed directly from that slope. Let us learn how to read kinematic graphs thoroughly." We will calculate the exact speeds from Maya's app at the end of this topic.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Graph** | A visual plot displaying the mathematical relationship between two changing physical quantities | How distance changes over time |
| **Coordinate axis** | A reference line on a grid: horizontal $x$-axis and vertical $y$-axis | Time on the $x$-axis, distance on the $y$-axis |
| **Scale** | The physical quantity represented by one grid unit or centimeter on the graph | $1\text{ cm} = 10\text{ m}$ |
| **Distance-time graph ($s-t$)** | A graph plotting elapsed time on the horizontal axis and distance traveled on the vertical axis | The rideshare app's trip graph |
| **Velocity-time graph ($v-t$)** | A graph plotting elapsed time on the horizontal axis and velocity on the vertical axis | An express train's telemetry graph |
| **Slope (Gradient)** | The measure of steepness of a straight line: $\text{rise} \div \text{run}$ | $20\text{ m} \div 5\text{ s} = 4\text{ m/s}$ |
| **Rise and Run** | Rise is the vertical change ($\Delta y$); run is the horizontal change ($\Delta x$) | $\text{Rise} = 20\text{ m}$, $\text{run} = 5\text{ s}$ |
| **Uniform speed** | Motion where distance increases linearly with time | Covering $4\text{ m}$ every single second |
| **Area under graph** | The geometric area bounded between the graph line and the horizontal time axis | The area under a $v-t$ graph equals displacement |

---

## Part A: Why Use Graphs and How to Plot Them

### Why Graphs?

A numerical table of positions and timestamps provides raw data, but trends are hard to visualize instantly. A graph translates numbers into an intuitive visual shape: you can spot where an object accelerated, where it cruised at steady speed, and where it halted—in a split second.

### Choosing the Coordinate Axes

In kinematics, we follow strict conventions:
- **Horizontal $x$-axis: Elapsed Time ($t$).** Time is the independent variable; it flows continuously forward without interruption.
- **Vertical $y$-axis: Dependent Quantity.** We plot **Distance ($s$)** or **Velocity ($v$)**.

### Establishing Scale and Units

1. **Equal Intervals:** Both axes must feature evenly spaced tick marks representing consistent increments ($1\text{ grid unit} = 10\text{ m}$, $1\text{ grid unit} = 5\text{ s}$).
2. **Axis Labels and Units:** Every axis must be clearly labeled with its symbol and SI unit: $t\text{ (s)}$, $s\text{ (m)}$, $v\text{ (m/s)}$. A bare number like "20" is ambiguous—it could mean 20 meters, 20 kilometers, or 20 seconds.

---

## Part B: Distance-Time Graphs (s-t Graphs)

### 1. Object at Rest: A Horizontal (Flat) Line

If an object is stationary, time continues to tick forward along the $x$-axis, but its distance coordinate remains frozen. The resulting plot is a **horizontal line parallel to the time axis** (seen from $20\text{ s}$ to $30\text{ s}$ in Figure 5.1).

### 2. Uniform Speed: A Straight Inclined Line

When an object covers **equal distances in equal intervals of time**, the $s-t$ graph is a **straight line sloping upward from the origin**:

```
s (m)
20 :...................*P
   :                  * .
16 :               ***  .
   :              *     .
12 :           ***      .
   :          *         .
 8 :       ***          .
   :      *             .
 4 :   ***              .
   :  *                 .
 0 +**------------------.-->  t (s)
    0   1   2   3   4   5
```

> **Figure 5.2** – Distance-time graph for uniform motion: covering 20 m in 5 s. The slope of the line represents the object's speed.

Recall the mathematical definition of slope:

$$\text{Slope} = \frac{\text{Rise}}{\text{Run}} = \frac{\Delta y}{\Delta x}$$

On an $s-t$ graph, the vertical rise is distance ($\Delta s$) and the horizontal run is time ($\Delta t$). Therefore:

$$\mathbf{\text{Slope of an } s-t \text{ Graph} = \frac{\text{Distance}}{\text{Time}} = \text{Speed}}$$

In Figure 5.2:
$$\text{Slope} = \frac{20\text{ m} - 0\text{ m}}{5\text{ s} - 0\text{ s}} = \frac{20\text{ m}}{5\text{ s}} = \mathbf{4\text{ m/s}}$$

The object moves at a uniform speed of $4\text{ m/s}$. Choosing any two points on a straight line yields the exact same slope.

### 3. A Steeper Line Signifies Greater Speed

When two objects are plotted on the same coordinate axes, the **steeper line corresponds to the higher speed**, because it covers more distance in the same time interval:

```
s (m)
30 :                    B
   :                  bb.
   :                 b  .
   :                b   .
   :               b    .
20 :             bb    aA
   :            b     a .
   :          bb   aaa  .
   :         b    a     .
   :        b  aaa      .
10 :       b  a         .
   :     bbaaa          .
   :    b a             .
   :  bbaa              .
   : ba                 .
 0 +ba------------------.-->  t (s)
    0   1   2   3   4   5
```

> **Figure 5.3** – Comparison of two objects A and B on the same scale: in 5 s, A travels 20 m while B travels 30 m. Line B is noticeably steeper than line A.

### 4. Changing Speed: A Curved Line

If speed varies continuously, the $s-t$ graph forms a **smooth curve**. Where the curve steepens, speed is increasing; where the curve flattens, speed is decreasing:

```
s (m)
16 :                    O
   :                    *
   :                   *
   :                  *
12 :                 *
   :                 *
   :                *
   :               O
 8 :              *
   :             *
   :            *
   :           *
 4 :          O
   :        **
   :       *
   :    *O*
 0 +****------------------->  t (s)
    0    1    2    3    4
```

> **Figure 5.4** – Distance-time graph of an accelerating vehicle: distance covered is 1 m at 1 s, 4 m at 2 s, 9 m at 3 s, and 16 m at 4 s. The slope grows steeper with time.

### 5. Why a Distance-Time Graph Never Slopes Downward

Total distance traveled is a cumulative scalar quantity (Topic 2). It either increases (as an object moves) or remains constant (if stationary). It **can never decrease over time**. Consequently, the $s-t$ graph of a real-world object can **never slope downward**.

*(Note: A displacement-time graph can slope downward when an object returns toward the reference origin, because displacement can decrease toward zero.)*

---

## Part C: Worked Numerical Examples (Distance-Time Graphs)

### Example 1: Reading Speed from a Linear Graph (Figure 5.2)

Using Figure 5.2, an object moves from $(0\text{ s}, 0\text{ m})$ to $(5\text{ s}, 20\text{ m})$:
- $\text{Rise} = 20\text{ m}$, $\text{Run} = 5\text{ s}$.
- $\text{Speed} = \frac{\text{Rise}}{\text{Run}} = \frac{20\text{ m}}{5\text{ s}} = \mathbf{4\text{ m/s}}$.
- **Check:** $4\text{ m/s} \times 5\text{ s} = 20\text{ m}$ ✅.

### Example 2: Comparing Two Moving Objects on One Graph (Figure 5.3)

Find the speeds of objects A and B from Figure 5.3, and calculate their physical separation after $5\text{ s}$:
- Speed of A: $\frac{20\text{ m}}{5\text{ s}} = \mathbf{4\text{ m/s}}$.
- Speed of B: $\frac{30\text{ m}}{5\text{ s}} = \mathbf{6\text{ m/s}}$.
- Line B has a steeper slope, confirming that B moves faster ($6\text{ m/s} > 4\text{ m/s}$).
- Separation after $5\text{ s}$: $30\text{ m} - 20\text{ m} = \mathbf{10\text{ m}}$.
- **Check:** $(6\text{ m/s} - 4\text{ m/s}) \times 5\text{ s} = 2\text{ m/s} \times 5\text{ s} = 10\text{ m}$ ✅.

### Example 3: Multi-Stage Journey with a Stop (Figure 5.5)

A cyclist's journey is recorded on the following $s-t$ graph:

```
s (m)
60 :                         O
   :                      ***.
   :                     *   .
   :                  ***    .
   :                 *       .
40 :          O****O*        .
   :         *.    .         .
   :        * .    .         .
   :       *  .    .         .
   :      *   .    .         .
20 :     *    .    .         .
   :    *     .    .         .
   :   *      .    .         .
   :  *       .    .         .
   : *        .    .         .
 0 +*---------.----.---------.-->  t (s)
    0    5    10   15   20   25
```

> **Figure 5.5** – Cyclist's multi-stage journey: 0 to 40 m in 10 s; resting from 10 to 15 s; 40 to 60 m from 15 to 25 s.

Determine the speed during each segment and the average speed for the whole journey:
- **Stage 1 ($0\text{ s}$ to $10\text{ s}$):** $\Delta s = 40 - 0 = 40\text{ m}$, $\Delta t = 10\text{ s}$.
  $$\text{Speed} = \frac{40\text{ m}}{10\text{ s}} = \mathbf{4\text{ m/s}}$$
- **Stage 2 ($10\text{ s}$ to $15\text{ s}$):** $\Delta s = 40 - 40 = 0\text{ m}$, $\Delta t = 5\text{ s}$.
  $$\text{Speed} = \frac{0\text{ m}}{5\text{ s}} = \mathbf{0\text{ m/s}}\text{ (horizontal line = stationary)}$$
- **Stage 3 ($15\text{ s}$ to $25\text{ s}$):** $\Delta s = 60 - 40 = 20\text{ m}$, $\Delta t = 25 - 15 = 10\text{ s}$.
  $$\text{Speed} = \frac{20\text{ m}}{10\text{ s}} = \mathbf{2\text{ m/s}}$$
- **Overall Average Speed:**
  $$\text{Average Speed} = \frac{\text{Total Distance}}{\text{Total Time}} = \frac{60\text{ m}}{25\text{ s}} = \mathbf{2.4\text{ m/s}}$$

**Check:** Total distance $= 40 + 0 + 20 = 60\text{ m}$ ✅. Total time $= 10 + 5 + 10 = 25\text{ s}$ ✅. Notice that simply averaging speeds $\frac{4 + 0 + 2}{3} = 2\text{ m/s}$ is incorrect because unequal times were spent in the stages. The correct time-weighted average is $2.4\text{ m/s}$ ($2.4 \times 25 = 60\text{ m}$ ✅).

### Example 4: Evaluating Average Speed on a Curved Graph (Figure 5.4)

In Figure 5.4, an accelerating vehicle reaches the following distances: $0\text{ m}$ at $0\text{ s}$, $1\text{ m}$ at $1\text{ s}$, $4\text{ m}$ at $2\text{ s}$, $9\text{ m}$ at $3\text{ s}$, and $16\text{ m}$ at $4\text{ s}$. Calculate the average speed during the first $2\text{ s}$, the last $2\text{ s}$, and the full $4\text{ s}$:
- First $2\text{ s}$ ($0\text{ to } 2\text{ s}$): $\Delta s = 4 - 0 = 4\text{ m} \implies \text{Speed} = \frac{4\text{ m}}{2\text{ s}} = \mathbf{2\text{ m/s}}$.
- Last $2\text{ s}$ ($2\text{ to } 4\text{ s}$): $\Delta s = 16 - 4 = 12\text{ m} \implies \text{Speed} = \frac{12\text{ m}}{2\text{ s}} = \mathbf{6\text{ m/s}}$.
- Full $4\text{ s}$: $\text{Speed}_{\text{avg}} = \frac{16\text{ m}}{4\text{ s}} = \mathbf{4\text{ m/s}}$.

**Check:** $(2\text{ m/s} \times 2\text{ s}) + (6\text{ m/s} \times 2\text{ s}) = 4 + 12 = 16\text{ m}$ ✅. The steeper later segment has a higher average speed ($6\text{ m/s} > 2\text{ m/s}$).

---

## Part D: Velocity-Time Graphs (v-t Graphs)

On a **velocity-time graph ($v-t$)**, velocity ($v$) is plotted on the vertical axis while time ($t$) remains on the horizontal axis.

### 1. Uniform Velocity: A Horizontal Line

When an object travels at a constant velocity (e.g., cruising at $30\text{ m/s}$), its velocity does not change. The $v-t$ plot is a **horizontal line parallel to the time axis**. Because $\Delta v = 0$, the **acceleration is strictly zero**.

### 2. Uniform Acceleration: A Straight Inclined Line

When velocity increases by equal amounts every second, the graph is a **straight line sloping upward**:

```
v (m/s)
20 :                   *P
   :                  *..
16 :               ***...
   :              *......
12 :           ***.......
   :          *..........
 8 :       ***...........
   :      *..............
 4 :   ***...............
   :  *..................
 0 +**------------------.-->  t (s)
    0   1   2   3   4   5
```

> **Figure 5.6** – Velocity-time graph starting from rest ($u = 0$) and accelerating uniformly to 20 m/s in 5 s. The slope gives acceleration, and the shaded area under the line gives displacement.

$$\mathbf{\text{Slope of a } v-t \text{ Graph} = \frac{\text{Change in Velocity}}{\text{Time}} = \text{Acceleration}}$$

In Figure 5.6:
$$\text{Acceleration} = \frac{20\text{ m/s} - 0\text{ m/s}}{5\text{ s}} = \mathbf{4\text{ m/s}^2}$$

### 3. Retardation: A Downward-Sloping Line

When brakes are applied, velocity decreases over time. The $v-t$ graph slopes **downward**, producing a negative slope (**retardation**).

### 4. Variable Acceleration: A Curved Line

When acceleration changes from moment to moment, the $v-t$ graph forms a curve. The steepness at any point indicates instantaneous acceleration.

### 5. Area Under a v-t Graph Equals Displacement

This is one of the most powerful principles in classical physics:

$$\mathbf{\text{Area Bounded Under a } v-t \text{ Graph} = \text{Displacement}}$$

*Why does this hold?*
For steady velocity $v$ over time $t$, $\text{Displacement} = v \times t$. Geometrically, this is simply the **area of a rectangle** with base $t$ and height $v$. When velocity changes linearly, we use standard geometric formulas:

| Geometric Shape | Area Formula | Kinematic Meaning |
|---|---|---|
| **Rectangle** | $\text{base} \times \text{height} = t \times v$ | Steady cruising displacement |
| **Triangle** | $\frac{1}{2} \times \text{base} \times \text{height}$ | Displacement under uniform acceleration from rest |
| **Trapezoid** | $\frac{\text{sum of parallel sides}}{2} \times \text{width}$ | Displacement under uniform acceleration between two non-zero speeds |

**Dimensional Check:**
$$\text{Area} = \text{height} \times \text{base} = (\text{m/s}) \times (\text{s}) = \mathbf{\text{m}}$$
The units of the area naturally resolve to meters ($\text{m}$), which is the SI unit of displacement!

---

## Part E: Worked Numerical Examples (Velocity-Time Graphs)

### Example 5: Acceleration and Displacement (Triangular Area) (Figure 5.6)

From Figure 5.6, a vehicle accelerates from rest to $20\text{ m/s}$ in $5\text{ s}$. Find its acceleration and displacement:
- $\text{Acceleration} = \text{Slope} = \frac{20\text{ m/s} - 0\text{ m/s}}{5\text{ s}} = \mathbf{4\text{ m/s}^2}$.
- $\text{Displacement} = \text{Area of Triangle} = \frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times 5\text{ s} \times 20\text{ m/s} = \mathbf{50\text{ m}}$.
- **Check:** $\text{Average velocity} = \frac{0 + 20}{2} = 10\text{ m/s}$, and $10\text{ m/s} \times 5\text{ s} = 50\text{ m}$ ✅.

### Example 6: Finding Displacement Using a Trapezoid (Figure 5.7)

A car accelerates uniformly from $10\text{ m/s}$ to $30\text{ m/s}$ over an $8\text{ s}$ interval:

```
v (m/s)
30 :                       *Q
   :                    ***..
   :                 ***.....
   :              ***........
20 :           ***...........
   :        ***..............
   :     ***.................
   :  ***....................
10 :P*.......................
   :.........................
   :.........................
   :.........................
 0 +------------------------.-->  t (s)
    0  1  2  3  4  5  6  7  8
```

> **Figure 5.7** – Velocity increases uniformly from 10 m/s to 30 m/s in 8 s. The shaded area forms a trapezoid with parallel sides 10 m/s and 30 m/s and width 8 s.

- $\text{Acceleration} = \frac{30\text{ m/s} - 10\text{ m/s}}{8\text{ s}} = \frac{20\text{ m/s}}{8\text{ s}} = \mathbf{2.5\text{ m/s}^2}$.
- $\text{Displacement} = \text{Area of Trapezoid} = \frac{10 + 30}{2} \times 8\text{ s} = 20\text{ m/s} \times 8\text{ s} = \mathbf{160\text{ m}}$.
- **Check by splitting the shape:**
  - Lower rectangle: $10\text{ m/s} \times 8\text{ s} = 80\text{ m}$.
  - Upper triangle: $\frac{1}{2} \times 8\text{ s} \times (30 - 10)\text{ m/s} = \frac{1}{2} \times 8 \times 20 = 80\text{ m}$.
  - Total displacement $= 80 + 80 = 160\text{ m}$ ✅.

### Example 7: Complete Train Journey: Acceleration, Cruise, and Braking (Figure 5.8)

A passenger train leaves a station, accelerating from rest to $30\text{ m/s}$ in $20\text{ s}$. It cruises at $30\text{ m/s}$ for $40\text{ s}$, then brakes uniformly to a stop in $20\text{ s}$:

```
v (m/s)
30 :          A*******************B
   :         *.....................*
   :        *.......................*
   :        *........................*
20 :       *.........................*
   :      *...........................*
   :     *.............................*
   :    *...............................*
10 :   *.................................*
   :   *..................................*
   :  *...................................*
   : *.....................................*
 0 +*---------.-------------------.---------C-->  t (s)
    0         20        40        60        80
```

> **Figure 5.8** – Velocity-time graph of a complete train trip: accelerating to 30 m/s in 20 s (0 to A), cruising at 30 m/s for 40 s (A to B), and braking to a stop in 20 s (B to C).

Calculate the distance of each stage, total distance, and overall average speed:
- **Stage 1 (0 to 20 s): Triangle**
  - $\text{Distance} = \frac{1}{2} \times 20\text{ s} \times 30\text{ m/s} = \mathbf{300\text{ m}}$.
  - $\text{Acceleration} = \frac{30}{20} = 1.5\text{ m/s}^2$.
- **Stage 2 (20 to 60 s): Rectangle**
  - $\text{Duration} = 60 - 20 = 40\text{ s}$.
  - $\text{Distance} = 30\text{ m/s} \times 40\text{ s} = \mathbf{1,200\text{ m}}$.
  - $\text{Acceleration} = 0\text{ m/s}^2$ (horizontal line).
- **Stage 3 (60 to 80 s): Triangle**
  - $\text{Duration} = 80 - 60 = 20\text{ s}$.
  - $\text{Distance} = \frac{1}{2} \times 20\text{ s} \times 30\text{ m/s} = \mathbf{300\text{ m}}$.
  - $\text{Slope} = \frac{0 - 30}{20} = -1.5\text{ m/s}^2$ ($\text{Retardation} = 1.5\text{ m/s}^2$).
- **Total Distance:** $300 + 1,200 + 300 = \mathbf{1,800\text{ m}}$.
- **Total Elapsed Time:** $80\text{ s}$.
- **Average Speed:**
  $$\text{Average Speed} = \frac{1,800\text{ m}}{80\text{ s}} = \mathbf{22.5\text{ m/s}}$$

**Check (Single Trapezoid Method):**
Parallel sides are $80\text{ s}$ (bottom) and $40\text{ s}$ (top); height is $30\text{ m/s}$:
$$\text{Area} = \frac{80 + 40}{2} \times 30 = 60 \times 30 = \mathbf{1,800\text{ m}} ✅$$
$$\text{Average speed check:} \quad 22.5\text{ m/s} \times 80\text{ s} = 1,800\text{ m} ✅$$

---

## Part F: Quantitative Analysis of Maya's Rideshare Trip

Let us return to Maya's app screen (Figure 5.1). Maya tabulated coordinates from the display:

| Time $t$ (s) | 0 | 10 | 20 | 30 | 40 |
|---|---|---|---|---|---|
| Distance $s$ (m) | 0 | 50 | 100 | 100 | 300 |

**Example 8: Calculating Speeds and Averages**
- **$0\text{ s}$ to $20\text{ s}$:** $\Delta s = 100 - 0 = 100\text{ m}$, $\Delta t = 20\text{ s}$.
  $$\text{Speed} = \frac{100\text{ m}}{20\text{ s}} = \mathbf{5\text{ m/s}}\text{ (in heavy traffic)}$$
  In $\text{km/h}$: $5 \times 3.6 = \mathbf{18\text{ km/h}}$.
- **$20\text{ s}$ to $30\text{ s}$:** $\Delta s = 100 - 100 = 0\text{ m}$, $\Delta t = 10\text{ s}$.
  $$\text{Speed} = \mathbf{0\text{ m/s}}\text{ (halted at red signal)}$$
- **$30\text{ s}$ to $40\text{ s}$:** $\Delta s = 300 - 100 = 200\text{ m}$, $\Delta t = 10\text{ s}$.
  $$\text{Speed} = \frac{200\text{ m}}{10\text{ s}} = \mathbf{20\text{ m/s}}\text{ (cruising on open avenue)}$$
  In $\text{km/h}$: $20 \times 3.6 = \mathbf{72\text{ km/h}}$.
- **Entire 40-second journey:**
  $$\text{Average Speed} = \frac{300\text{ m}}{40\text{ s}} = \mathbf{7.5\text{ m/s}}\text{ (or } 27\text{ km/h)}$$

**Check:** $(5 \times 20) + (0 \times 10) + (20 \times 10) = 100 + 0 + 200 = 300\text{ m}$ ✅.

---

## Part G: Kinematic Graph Interpretation at a Glance

| Motion State | Distance-Time Graph ($s-t$) | Velocity-Time Graph ($v-t$) |
|---|---|---|
| **Object at Rest** | Horizontal line ($s = \text{constant}$) | Line lying directly on the time axis ($v = 0$) |
| **Uniform Velocity** | Straight inclined line (slope = speed) | Horizontal line ($a = 0$) |
| **Uniform Acceleration** | Upward curve getting steeper | Straight inclined line sloping up (slope = $a$) |
| **Uniform Deceleration** | Upward curve flattening out | Straight inclined line sloping down |
| **Non-Uniform Acceleration** | Irregularly curving line | Irregular curve |

**Two Fundamental Graph Rules to Memorize:**
- **Slope of $s-t$ graph $\implies$ Speed (Velocity)**
- **Slope of $v-t$ graph $\implies$ Acceleration**
- **Area under $v-t$ graph $\implies$ Displacement (Distance)**

---

## Common Pitfalls to Avoid

1. **Mistake 1: Mistaking a horizontal s-t line for constant speed.**
   A horizontal line on an $s-t$ graph indicates that distance is not changing: the object is completely **at rest** ($v = 0$). A horizontal line represents constant non-zero speed only on a **$v-t$** graph. Always check axis labels first!

2. **Mistake 2: Confusing the slope of an s-t graph with the slope of a v-t graph.**
   The slope of an $s-t$ graph gives speed in $\text{m/s}$. The slope of a $v-t$ graph gives acceleration in $\text{m/s}^2$. Look at the units to keep them distinct.

3. **Mistake 3: Omitting units from graph axes.**
   Writing bare numbers without declaring whether distance is in meters or kilometers and time in seconds or hours renders graphical calculations completely unreliable.

4. **Mistake 4: Calculating the area under a distance-time graph.**
   The area under a **$v-t$ graph** represents displacement ($(\text{m/s}) \times \text{s} = \text{m}$). The area under an $s-t$ graph yields $\text{m}\cdot\text{s}$, which corresponds to no recognized physical quantity. Never calculate the area under an $s-t$ graph!

5. **Mistake 5: Adding areas above and below the axis incorrectly.**
   In this introductory level, all our $v-t$ traces remain in the positive quadrant ($v \ge 0$). In higher physics, areas below the time axis represent negative displacement (moving in reverse).

6. **Mistake 6: Misreading graph grid scales.**
   Always inspect tick intervals before calculating slopes. If one grid square on the vertical axis represents $5\text{ m}$, treating it as $1\text{ m}$ introduces catastrophic arithmetic errors.

---

## Quick Recap

- Graphs provide a visual map of motion: **time is placed on the $x$-axis**; distance or velocity on the $y$-axis.
- **$s-t$ graph:**
  - Horizontal line $\implies$ Rest ($v = 0$).
  - Straight inclined line $\implies$ Uniform speed.
  - **$\text{Slope} = \frac{\Delta s}{\Delta t} = \text{Speed}$.**
  - Steeper slope $\implies$ Greater speed.
  - A real distance-time graph never slopes downward.
- **$v-t$ graph:**
  - Horizontal line $\implies$ Uniform velocity ($a = 0$).
  - Straight upward line $\implies$ Uniform acceleration.
  - Straight downward line $\implies$ Deceleration / retardation.
  - **$\text{Slope} = \frac{\Delta v}{\Delta t} = \text{Acceleration}$.**
  - **$\text{Area Under the Graph} = \text{Displacement}$.**
  - Geometric formulas: Rectangle ($v \times t$), Triangle ($\frac{1}{2} b h$), Trapezoid ($\frac{a+b}{2} h$).
- **Maya's Rideshare Results:** $0-20\text{ s}$ at $5\text{ m/s}$ ($18\text{ km/h}$); $20-30\text{ s}$ stopped ($0\text{ m/s}$); $30-40\text{ s}$ at $20\text{ m/s}$ ($72\text{ km/h}$); average speed $= 7.5\text{ m/s}$ ($27\text{ km/h}$).

---

## Practice Questions

1. On graph paper, the scale on the vertical axis is $1\text{ cm} = 10\text{ m}$.
   (a) A point is plotted $3.5\text{ cm}$ above the time axis. What physical distance does it represent?
   (b) On this same graph, a straight line connects the origin $(0, 0)$ to the point $(8\text{ s}, 24\text{ m})$. Determine the speed of the object.
2. Two runners, P and Q, start together from the same line. In $6\text{ s}$, P runs $30\text{ m}$ and Q runs $48\text{ m}$, both at uniform speed.
   (a) Find the speed of each runner.
   (b) On a distance-time graph, whose line has the steeper slope?
   (c) What is their separation after $6\text{ s}$?
3. A distance-time graph contains the following coordinates: at $t = 0\text{ s}$, $s = 0\text{ m}$; at $t = 6\text{ s}$, $s = 18\text{ m}$; at $t = 10\text{ s}$, $s = 18\text{ m}$; at $t = 16\text{ s}$, $s = 36\text{ m}$.
   (a) Find the speed in each of the three stages.
   (b) Find the overall average speed for the full $16\text{ s}$.
   (c) Describe the motion during the middle stage in words.
4. On a velocity-time graph, a motorized scooter accelerates from rest to $12\text{ m/s}$ in $4\text{ s}$ along a straight line. Determine its acceleration and the distance covered over those $4\text{ s}$.
5. A velocity-time graph is a straight line increasing from $8\text{ m/s}$ at $t = 0\text{ s}$ to $20\text{ m/s}$ at $t = 6\text{ s}$. Calculate the acceleration and the total displacement using the area of a trapezoid.
6. A cyclist cruises at a constant velocity of $6\text{ m/s}$ for $10\text{ s}$.
   (a) Describe the visual shape of her $v-t$ graph.
   (b) Calculate the area under the graph and state what it represents.
   (c) What is her acceleration?
7. An automobile traveling at $24\text{ m/s}$ applies brakes and comes to a uniform stop in $8\text{ s}$ (forming a straight downward line on a $v-t$ graph). Determine its retardation and the stopping distance.
8. A subway train accelerates from rest to $16\text{ m/s}$ in $8\text{ s}$, cruises at $16\text{ m/s}$ for $20\text{ s}$, and decelerates uniformly to rest in $4\text{ s}$. Determine:
   (a) the distance covered in each phase,
   (b) the total distance between stations, and
   (c) the average speed for the trip.
9. State whether each statement is True or False, correcting any false statements:
   (a) A horizontal line on a distance-time graph indicates constant non-zero speed.
   (b) The slope of a velocity-time graph represents acceleration.
   (c) A steeper slope on a distance-time graph corresponds to a higher speed.
   (d) The area bounded under a distance-time graph represents displacement.
   (e) The distance-time graph of a moving object can slope downward.
10. Maya asserts: *"On a distance-time graph, the curve can never slope downward, but on a velocity-time graph, the line can slope downward."* Is she physically correct? Explain using everyday examples.

### Answers

1. (a) $\text{Distance} = 3.5\text{ cm} \times 10\text{ m/cm} = \mathbf{35\text{ m}}$.
   (b) $\text{Speed} = \frac{\text{Rise}}{\text{Run}} = \frac{24\text{ m}}{8\text{ s}} = \mathbf{3\text{ m/s}}$.
   - Check: $3\text{ m/s} \times 8\text{ s} = 24\text{ m}$ ✅.
2. (a) Speed of P $= \frac{30}{6} = \mathbf{5\text{ m/s}}$; Speed of Q $= \frac{48}{6} = \mathbf{8\text{ m/s}}$.
   (b) Runner **Q** has the steeper slope ($8 > 5\text{ m/s}$).
   (c) Separation $= 48 - 30 = \mathbf{18\text{ m}}$ (Check: $(8 - 5) \times 6 = 18\text{ m}$ ✅).
3. (a) Stage 1 ($0-6\text{ s}$): $\frac{18}{6} = \mathbf{3\text{ m/s}}$.
   Stage 2 ($6-10\text{ s}$): $\frac{18 - 18}{4} = \mathbf{0\text{ m/s}}$.
   Stage 3 ($10-16\text{ s}$): $\frac{36 - 18}{6} = \frac{18}{6} = \mathbf{3\text{ m/s}}$.
   (b) $\text{Average Speed} = \frac{36\text{ m}}{16\text{ s}} = \mathbf{2.25\text{ m/s}}$ (Check: $2.25 \times 16 = 36\text{ m}$ ✅).
   (c) During the middle stage, the object is completely **at rest** (stationary) at position $18\text{ m}$.
4. $\text{Acceleration} = \frac{12 - 0}{4} = \mathbf{3\text{ m/s}^2}$.
   - $\text{Distance} = \text{Area of Triangle} = \frac{1}{2} \times 4\text{ s} \times 12\text{ m/s} = \mathbf{24\text{ m}}$.
   - Check: Average velocity $6\text{ m/s} \times 4\text{ s} = 24\text{ m}$ ✅.
5. $\text{Acceleration} = \frac{20 - 8}{6} = \frac{12}{6} = \mathbf{2\text{ m/s}^2}$.
   - $\text{Displacement} = \frac{8 + 20}{2} \times 6\text{ s} = 14 \times 6 = \mathbf{84\text{ m}}$.
   - Check: Rectangle ($8 \times 6 = 48$) + Triangle ($\frac{1}{2} \times 6 \times 12 = 36$) $= 48 + 36 = 84\text{ m}$ ✅.
6. (a) The graph is a **horizontal line** located at height $6\text{ m/s}$ running from $t = 0$ to $t = 10\text{ s}$.
   (b) $\text{Area} = 6\text{ m/s} \times 10\text{ s} = \mathbf{60\text{ m}}$. It represents the total displacement (distance) traveled.
   (c) $\text{Acceleration} = \mathbf{0\text{ m/s}^2}$ (the slope of a horizontal line is zero).
7. $\text{Slope} = \frac{0 - 24}{8} = -3\text{ m/s}^2 \implies \text{Retardation} = \mathbf{3\text{ m/s}^2}$.
   - $\text{Stopping Distance} = \frac{1}{2} \times 8\text{ s} \times 24\text{ m/s} = \mathbf{96\text{ m}}$.
   - Check: Average velocity $12\text{ m/s} \times 8\text{ s} = 96\text{ m}$ ✅.
8. (a) Stage 1 (Acceleration): $\frac{1}{2} \times 8 \times 16 = \mathbf{64\text{ m}}$.
   Stage 2 (Cruising): $16 \times 20 = \mathbf{320\text{ m}}$.
   Stage 3 (Braking): $\frac{1}{2} \times 4 \times 16 = \mathbf{32\text{ m}}$.
   (b) $\text{Total Distance} = 64 + 320 + 32 = \mathbf{416\text{ m}}$.
   (c) Total time $= 8 + 20 + 4 = 32\text{ s}$.
   - $\text{Average Speed} = \frac{416\text{ m}}{32\text{ s}} = \mathbf{13\text{ m/s}}$ (Check: $13 \times 32 = 416\text{ m}$ ✅).
9. (a) **False** ❌: A horizontal $s-t$ line signifies rest ($v = 0$). Constant speed produces a straight inclined line.
   (b) **True** ✅.
   (c) **True** ✅.
   (d) **False** ❌: The area under a *velocity-time* graph gives displacement; area under an $s-t$ graph has no physical meaning.
   (e) **False** ❌: Distance cannot decrease over time, so an $s-t$ graph cannot slope downward.
10. Yes, Maya is entirely correct. Distance is cumulative and never decreases, so an $s-t$ graph can only rise or stay horizontal (e.g., stationary at a red light). In contrast, velocity can decrease when brakes are applied (e.g., slowing down from $20\text{ m/s}$ to rest), producing a downward-sloping $v-t$ graph. Even while decelerating, the car continues to move forward, so its $s-t$ graph continues rising.

---

You now command the tools of graphical kinematics! In Topic 6, we derive the **Three Equations of Motion** directly from these velocity-time graphs.
