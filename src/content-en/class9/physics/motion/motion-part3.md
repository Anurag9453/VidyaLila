# Chapter: Motion (Part 3)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [motion-part2.md](motion-part2.md)** (covering distance vs. displacement, scalars, and vectors). The chapter introduction begins in [motion.md](motion.md). For unit conversion techniques, refer back to [measurement-and-units.md](../measurement-and-units/measurement-and-units.md).
> **Topics covered in this file:**
> 3. Speed and Velocity

---

# Topic 3: Speed and Velocity

In the previous topic, we established the distinction between how much ground is covered (distance, a scalar) and the straight-line change in position with direction (displacement, a vector). Now, an essential question arises: **how fast did that motion occur?** A 100-meter sprint can be completed by an Olympic athlete in 10 seconds, or by a casual stroller in 100 seconds. The distance is identical, but the rate of motion is vastly different. In this topic, we assign exact numbers and physical meaning to this rate: **speed** and **velocity**.

---

## Coach Davies's Radar Gun Reading: 108 km/h

During morning athletic practice at the sports academy, Liam, a promising young pitcher and fast bowler, delivered a fiery ball toward the target stumps. Standing near the batting crease, **Coach Davies** raised a digital radar speed gun. The illuminated display read: **108 km/h**.

Liam trotted over, caught his breath, and looked at the reading. "Coach, 108 km/h sounds impressive on paper, but I cannot intuitively picture it. How fast is that in meters per second? The pitch is only 20 meters long—how many fractions of a second did the ball take to cross it? And is 108 km/h the same as the ball's average speed across the whole pitch?"

Coach Davies smiled. "Three insightful questions in one breath! We will address every one of them as we progress through this lesson. First, let us build a rigorous understanding of what speed truly represents."

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Speed** | The rate at which distance is covered: $\text{distance} \div \text{time}$. Scalar quantity | $30\text{ m/s}$ |
| **Velocity** | The rate of change of position: $\text{displacement} \div \text{time}$. Vector quantity | $30\text{ m/s directed toward the stumps}$ |
| **Uniform speed** | Motion in which equal distances are covered in equal intervals of time | Covering $5\text{ m}$ every single second |
| **Variable speed** | Motion in which the distance covered per unit time changes continuously | A car driving through stop-and-go city traffic |
| **Average speed** | The total distance covered divided by the total elapsed time | $40\text{ km/h}$ |
| **Average velocity** | The total displacement divided by the total elapsed time | $0\text{ m/s}$ for a closed round trip |
| **Speedometer** | An instrument on a vehicle's dashboard that indicates instantaneous speed | $60\text{ km/h}$ |
| **Odometer** | An instrument on a vehicle's dashboard that records cumulative distance traveled | $23,450\text{ km}$ |

---

## Part A: Speed: Distance Covered Per Unit Time

In physics, **speed** is defined as the distance traveled per unit of time:

$$\text{Speed} = \frac{\text{Distance}}{\text{Time}}$$

- Because distance is a scalar, **speed is also a scalar quantity**: it possesses magnitude but no direction.
- **SI unit:** meters per second, written as **$\text{m/s}$** (or $\text{m}\cdot\text{s}^{-1}$).
- In everyday transportation, **$\text{km/h}$** (kilometers per hour) is standard; highway signs and automobile dashboards use this unit.

When we say an object has a speed of $5\text{ m/s}$, it means: **in every second of time, the object covers 5 meters of ground**.

### Converting Between km/h and m/s

Converting between $\text{km/h}$ and $\text{m/s}$ relies on standard conversion factors:
- $1\text{ km} = 1,000\text{ m}$ and $1\text{ h} = 3,600\text{ s}$.
- Therefore:
  $$1\text{ km/h} = \frac{1,000\text{ m}}{3,600\text{ s}} = \frac{5}{18}\text{ m/s} \approx 0.278\text{ m/s}$$

This yields two indispensable conversion rules:

> **To convert $\text{km/h}$ to $\text{m/s}$:** Multiply by $\frac{5}{18}$ (or divide by $3.6$)
> **To convert $\text{m/s}$ to $\text{km/h}$:** Multiply by $\frac{18}{5}$ (or multiply by $3.6$)

**Example 1: Converting Coach Davies's Radar Reading**

The radar gun clocked Liam's delivery at $108\text{ km/h}$. What is this speed in $\text{m/s}$?

$$\text{Speed} = 108 \times \frac{5}{18} = \frac{108}{18} \times 5 = 6 \times 5 = \mathbf{30\text{ m/s}}$$

**Check:** $30\text{ m/s} \times 3.6 = 108\text{ km/h}$ ✅. Liam's ball travels an astonishing **30 meters every single second**.

Coach Davies noted: *"108 km/h may sound abstract, but 30 meters per second makes it vivid. A standard classroom is about 10 meters long—the ball covers three entire classrooms in just one second!"*

### Uniform Speed vs. Variable Speed

- **Uniform Speed:** An object covers equal distances in equal intervals of time, regardless of how small those intervals are. For example, a cyclist traveling at a steady $5\text{ m}$ every second on an open path.
- **Variable Speed:** An object covers unequal distances in equal intervals of time. A city bus speeding up, braking for traffic signals, and stopping for passengers moves with variable speed.

Nearly all everyday journeys involve variable speeds. This makes the concept of **average speed** essential.

### The Three Fundamental Speed Calculations

The relation $\text{Speed} = \frac{\text{Distance}}{\text{Time}}$ forms an algebraic triangle:

```
        Distance
       -----------
       Speed x Time

   Speed    = Distance / Time
   Time     = Distance / Speed
   Distance = Speed x Time
```

> **Figure 3.1** – The speed-distance-time relationship: knowing any two quantities allows calculation of the third.

**Example 2: Calculating Speed**

A cyclist covers a $900\text{ m}$ straight road in $3\text{ minutes}$. Calculate her speed in $\text{m/s}$.
- $\text{Time} = 3\text{ min} = 3 \times 60 = 180\text{ s}$.
- $\text{Speed} = \frac{900\text{ m}}{180\text{ s}} = \mathbf{5\text{ m/s}}$.
- In $\text{km/h}$: $5 \times 3.6 = \mathbf{18\text{ km/h}}$.
- **Check:** $5\text{ m/s} \times 180\text{ s} = 900\text{ m}$ ✅.

**Example 3: Calculating Time**

A car travels along an expressway at a constant speed of $25\text{ m/s}$. How long will it take to travel $2\text{ km}$?
- $\text{Distance} = 2\text{ km} = 2,000\text{ m}$.
- $\text{Time} = \frac{\text{Distance}}{\text{Speed}} = \frac{2,000\text{ m}}{25\text{ m/s}} = \mathbf{80\text{ s}}$ ($1\text{ min } 20\text{ s}$).
- **Check:** $25\text{ m/s} \times 80\text{ s} = 2,000\text{ m}$ ✅.

**Example 4: Calculating Distance**

A pedestrian walks at $1.4\text{ m/s}$ for $15\text{ minutes}$. What total distance did he cover?
- $\text{Time} = 15\text{ min} = 15 \times 60 = 900\text{ s}$.
- $\text{Distance} = \text{Speed} \times \text{Time} = 1.4\text{ m/s} \times 900\text{ s} = \mathbf{1,260\text{ m}}$ ($1.26\text{ km}$).
- **Check:** $\frac{1,260\text{ m}}{900\text{ s}} = 1.4\text{ m/s}$ ✅.

**Example 5: Additional Unit Conversions**

(a) Convert $72\text{ km/h}$ into $\text{m/s}$.
(b) Convert $15\text{ m/s}$ into $\text{km/h}$.
- (a) $72 \times \frac{5}{18} = 4 \times 5 = \mathbf{20\text{ m/s}}$ (Check: $20 \times 3.6 = 72\text{ km/h}$ ✅).
- (b) $15 \times \frac{18}{5} = 3 \times 18 = \mathbf{54\text{ km/h}}$ (Check: $54 \div 3.6 = 15\text{ m/s}$ ✅).

### Benchmark Speeds for Physical Intuition

To develop an intuitive feel for the metric scale of speeds, consider these approximate benchmarks:

| Entity / Phenomenon | Approximate Speed ($\text{m/s}$) | Approximate Speed ($\text{km/h}$) |
|---|---|---|
| Brisk walking human | 1.4 | 5 |
| Commuter bicycle | 5 | 18 |
| Passenger car on open highway | 25 | 90 |
| Liam's fastball delivery | 30 | 108 |
| Sound wave traveling in air ($20\text{ }^\circ\text{C}$) | 340 | 1,224 |
| Speed of light in vacuum ($c$) | $3 \times 10^8$ | $1.08 \times 10^9$ |

Light is so fast that it could encircle the entire Earth more than 7 times in a single second. While Liam's $30\text{ m/s}$ delivery is fast for human athletics, it is minuscule compared to sound and light.

---

## Part B: Average Speed: A Single Representative Speed

Because real-world motion rarely occurs at an unvarying pace, we define a single steady speed that would cover the entire journey in the exact same elapsed time:

$$\text{Average Speed} = \frac{\text{Total Distance}}{\text{Total Time}}$$

> **Crucial Warning:** Average speed is **never** a simple arithmetic mean of two speeds ($\frac{v_1 + v_2}{2}$) unless equal time was spent at each speed! Total time must also include **all intermediate rest stops and halts**.

**Example 6: Equal Distances at Different Speeds (The Classic Trap)**

A car travels $60\text{ km}$ outbound at $30\text{ km/h}$, and returns $60\text{ km}$ along the same route at $60\text{ km/h}$. What is the average speed for the entire round trip?

- Outbound time: $t_1 = \frac{60\text{ km}}{30\text{ km/h}} = 2\text{ h}$.
- Return time: $t_2 = \frac{60\text{ km}}{60\text{ km/h}} = 1\text{ h}$.
- Total distance: $d_{\text{total}} = 60 + 60 = 120\text{ km}$.
- Total elapsed time: $t_{\text{total}} = 2 + 1 = 3\text{ h}$.
- Average speed:
  $$\text{Average Speed} = \frac{120\text{ km}}{3\text{ h}} = \mathbf{40\text{ km/h}}$$

Why is the answer not $\frac{30 + 60}{2} = 45\text{ km/h}$? Because the vehicle spent twice as much time driving at the slower speed ($2\text{ h}$) as it did at the faster speed ($1\text{ h}$). Time acts as a weighting factor, pulling the overall average closer to the slower speed!

**Check:** $40\text{ km/h} \times 3\text{ h} = 120\text{ km}$ ✅.

**Example 7: Walking Followed by Sprinting**

During warm-up, Liam walks $600\text{ m}$ at $1\text{ m/s}$, and then sprints $400\text{ m}$ at $4\text{ m/s}$. Find his average speed.
- Walking time: $t_{\text{walk}} = \frac{600\text{ m}}{1\text{ m/s}} = 600\text{ s}$.
- Sprinting time: $t_{\text{sprint}} = \frac{400\text{ m}}{4\text{ m/s}} = 100\text{ s}$.
- Total distance: $600 + 400 = 1,000\text{ m}$.
- Total time: $600 + 100 = 700\text{ s}$.
- Average speed:
  $$\text{Average Speed} = \frac{1,000\text{ m}}{700\text{ s}} \approx \mathbf{1.43\text{ m/s}}$$

Notice again: taking the unweighted average $\frac{1 + 4}{2} = 2.5\text{ m/s}$ is completely wrong. Because Liam spent 600 seconds walking and only 100 seconds sprinting, the average speed of $1.43\text{ m/s}$ is heavily weighted toward his walking pace.

**Example 8: Factoring in Rest Stops (Halts)**

An intercity bus drives $90\text{ km}$ in $1.5\text{ h}$, stops at a roadside depot for $30\text{ minutes}$ ($0.5\text{ h}$), and completes the final $60\text{ km}$ in $1.0\text{ h}$. Determine the average speed for the entire journey.
- Total distance: $90 + 60 = 150\text{ km}$.
- Total elapsed time: $1.5\text{ h} + 0.5\text{ h (rest)} + 1.0\text{ h} = \mathbf{3.0\text{ h}}$.
- Average speed:
  $$\text{Average Speed} = \frac{150\text{ km}}{3.0\text{ h}} = \mathbf{50\text{ km/h}}$$

If one neglected the 30-minute halt, the calculation would yield $\frac{150}{2.5} = 60\text{ km/h}$, which is incorrect. The clock does not stop while passengers rest!

---

## Part C: Velocity: Speed with Direction

Applying displacement from Topic 2 introduces **velocity**:

$$\text{Velocity} = \frac{\text{Displacement}}{\text{Time}}$$

- Because displacement is a vector (magnitude and direction), **velocity is a vector quantity**.
- **SI unit:** meters per second ($\text{m/s}$). The numerical unit matches speed, but velocity requires a directional declaration (e.g., "$30\text{ m/s East}$").
- In one-dimensional straight-line motion, we specify direction algebraically using **positive ($+$) and negative ($-$) signs**. A negative velocity signifies motion in the reverse coordinate direction.

**Example 9: Understanding Negative Velocity**

Let East be defined as positive ($+$). A student jogs $10\text{ m}$ toward the West in $5\text{ s}$. Find her velocity and speed.
- Displacement $= -10\text{ m}$ (pointing West).
- Velocity $= \frac{-10\text{ m}}{5\text{ s}} = \mathbf{-2\text{ m/s}}$ (meaning **$2\text{ m/s West}$**).
- Speed $= \frac{10\text{ m}}{5\text{ s}} = \mathbf{2\text{ m/s}}$ (speed is strictly non-negative).

### Uniform Velocity vs. Variable Velocity

- **Uniform Velocity:** An object covers equal displacements in equal intervals of time along a strictly unvarying straight line. Both speed and direction of travel must remain constant.
- **Variable Velocity:** Occurs if the object's speed changes, if its direction of travel changes, or if both change simultaneously.

*Key Takeaway:* A car driving around a circular roundabout at a steady speedometer reading of $40\text{ km/h}$ has **uniform speed**, but **variable velocity**, because its direction of travel is continuously turning!

### Average Velocity

$$\text{Average Velocity} = \frac{\text{Total Displacement}}{\text{Total Time}}$$

**Example 10: Closed Round Trip on a Straight Path**

Liam jogs $40\text{ m}$ East along a straight track in $50\text{ s}$, stops, turns around, and jogs the same $40\text{ m}$ West back to the starting line in $30\text{ s}$.

```
   Start              40 m East
   O----------------------------->  (50 s)
   O<-----------------------------  (30 s, return)
```

> **Figure 3.2** – Outbound and return motion along a straight track: Liam returns to his initial coordinate.

- Total distance: $40 + 40 = 80\text{ m}$.
- Total elapsed time: $50 + 30 = 80\text{ s}$.
- **Average speed:** $\frac{80\text{ m}}{80\text{ s}} = \mathbf{1\text{ m/s}}$.
- Total displacement: starts and ends at origin $\implies \mathbf{0\text{ m}}$.
- **Average velocity:** $\frac{0\text{ m}}{80\text{ s}} = \mathbf{0\text{ m/s}}$.

Liam clearly moved with an average speed of $1\text{ m/s}$, yet his average velocity for the round trip was strictly zero. This directly parallels our postal courier in Topic 2: **for any completed round trip, average speed is positive, but average velocity is identically zero.**

**Example 11: Straight-Line Motion with Incomplete Return**

A student walks $60\text{ m}$ East in $40\text{ s}$, then turns and walks $20\text{ m}$ West in $20\text{ s}$. Determine the average speed and average velocity.
- Total distance: $60 + 20 = 80\text{ m}$.
- Displacement: $+60\text{ m} - 20\text{ m} = \mathbf{+40\text{ m East}}$.
- Total elapsed time: $40 + 20 = 60\text{ s}$.
- Average speed: $\frac{80\text{ m}}{60\text{ s}} \approx \mathbf{1.33\text{ m/s}}$.
- Average velocity: $\frac{+40\text{ m}}{60\text{ s}} \approx \mathbf{+0.67\text{ m/s East}}$.

**Check:** Average speed ($1.33\text{ m/s}$) exceeds the magnitude of average velocity ($0.67\text{ m/s}$) because distance ($80\text{ m}$) exceeds displacement magnitude ($40\text{ m}$) ✅.

### Speed vs. Velocity: A Side-by-Side Comparison

| Feature | Speed | Velocity |
|---|---|---|
| Formula | $\frac{\text{Distance}}{\text{Time}}$ | $\frac{\text{Displacement}}{\text{Time}}$ |
| Type of Quantity | Scalar (magnitude only) | Vector (magnitude and direction) |
| Can it be negative? | No (always $\ge 0$) | Yes (indicates direction along coordinate axis) |
| Over a completed round trip | Non-zero ($> 0$) | Exactly zero ($= 0$) |
| SI Unit | $\text{m/s}$ | $\text{m/s}$ |

### When Do Speed and Velocity Have the Same Magnitude?

The magnitude of average velocity equals average speed **only when an object moves along a straight line in a fixed direction without reversing**. Whenever an object turns, loops, or reverses, total distance exceeds displacement magnitude, making average speed strictly greater than average velocity magnitude ($v_{\text{avg}} \ge |\vec{v}_{\text{avg}}|$).

---

## Part D: Speedometer vs. Odometer

Every modern automobile instrument panel features two distinct gauges:

- **Speedometer:** Displays the vehicle's **instantaneous speed** at that exact microsecond (e.g., $60\text{ km/h}$). It reads magnitude only, providing no indication of heading.
- **Odometer:** Records the **total cumulative distance** traversed by the vehicle over its lifetime (e.g., $23,450\text{ km}$). It acts as a distance integrator, continuing to count upwards even when returning home.

Neither gauge measures displacement or velocity.

---

## Part E: Resolving Liam's Radar Gun Questions

Now we revisit Liam's three questions on the training pitch:

1. **How fast is $108\text{ km/h}$ in $\text{m/s}$?**
   As shown in Example 1: $108 \times \frac{5}{18} = \mathbf{30\text{ m/s}}$.

2. **How long does the ball take to cross the 20-meter pitch?**
   Assuming a constant speed of $30\text{ m/s}$:
   $$\text{Time} = \frac{\text{Distance}}{\text{Speed}} = \frac{20\text{ m}}{30\text{ m/s}} \approx \mathbf{0.67\text{ s}}$$
   The batsman has barely two-thirds of a second from release to impact—demanding razor-sharp reflexes.

3. **Is $108\text{ km/h}$ identical to the ball's average speed over the whole pitch?**
   Coach Davies explained: *"The radar speed gun registers the instantaneous speed of the ball right as it leaves my hand. In reality, aerodynamic drag and the friction of the bounce decelerate the ball slightly."*

   Suppose high-speed camera sensors reveal that the ball actually took $0.72\text{ s}$ to cover the $20\text{ m}$ pitch:
   - Average speed $= \frac{20\text{ m}}{0.72\text{ s}} \approx \mathbf{27.8\text{ m/s}}$.
   - In $\text{km/h}$: $27.78 \times 3.6 \approx \mathbf{100\text{ km/h}}$.

The initial release speed was $108\text{ km/h}$, but the **average speed** across the entire flight was approximately $100\text{ km/h}$. Instantaneous speed captures an exact moment; average speed evaluates the entire journey. Furthermore, the radar gun measured **speed**, not velocity, because it reported magnitude without recording the spatial vector angle.

---

## Part F: A Classic Challenge: Train Crossing a Platform

**Example 12: Train Crossing a Platform Completely**

A passenger train $200\text{ m}$ long travels at a steady speed of $90\text{ km/h}$. How long will it take to completely cross a station platform $300\text{ m}$ long?

A train is considered to have "completely crossed" the platform only when its very last carriage exits the far end of the platform. Therefore, the front engine must cover the length of the platform **plus** the entire length of the train itself:

```
   Start:    [=== Train 200 m ===]|---- Platform 300 m ----|

   End:                            |---- Platform 300 m ----|[=== Train 200 m ===]
```

> **Figure 3.3** – Train clearing a platform: total distance traversed by the front of the train equals train length plus platform length.

- Total distance to clear: $d = 200\text{ m} + 300\text{ m} = \mathbf{500\text{ m}}$.
- Speed conversion: $v = 90\text{ km/h} \times \frac{5}{18} = 5 \times 5 = \mathbf{25\text{ m/s}}$.
- Time required:
  $$\text{Time} = \frac{\text{Distance}}{\text{Speed}} = \frac{500\text{ m}}{25\text{ m/s}} = \mathbf{20\text{ s}}$$

**Check:** $25\text{ m/s} \times 20\text{ s} = 500\text{ m}$ ✅.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Taking a simple arithmetic average of speeds.**
   If a car covers two equal distances at $30\text{ km/h}$ and $60\text{ km/h}$, calculating $\frac{30 + 60}{2} = 45\text{ km/h}$ is incorrect. Always compute $\frac{\text{Total Distance}}{\text{Total Time}}$, which yields $40\text{ km/h}$.

2. **Mistake 2: Mixing km/h and m/s in calculations.**
   If distance is given in meters ($500\text{ m}$) and speed in $\text{km/h}$ ($90\text{ km/h}$), dividing $500 \div 90$ produces nonsense. Convert speed to $\text{m/s}$ first ($90\text{ km/h} = 25\text{ m/s}$), then divide: $\frac{500}{25} = 20\text{ s}$.

3. **Mistake 3: Using distance instead of displacement when computing velocity.**
   Velocity requires **displacement**. For a completed circular lap, distance is $400\text{ m}$, but displacement is $0\text{ m}$; hence, average velocity is strictly $0\text{ m/s}$.

4. **Mistake 4: Omitting rest stops or halts from total elapsed time.**
   When calculating the average speed of an entire journey, idle time during rest stops counts toward total time. Omitting halts artificially inflates the computed average speed.

5. **Mistake 5: Believing velocity cannot be negative.**
   A velocity of $-2\text{ m/s}$ does not mean moving "less than zero"; it means traveling at $2\text{ m/s}$ in the defined negative coordinate direction. Speed, by contrast, is always non-negative.

---

## Quick Recap

- **Speed** $= \frac{\text{Distance}}{\text{Time}}$; scalar quantity; SI unit: **$\text{m/s}$**. Represents distance covered per second.
- **Conversion factor:** $1\text{ km/h} = \frac{5}{18}\text{ m/s}$. Multiply by $\frac{5}{18}$ to reach $\text{m/s}$; multiply by $3.6$ to reach $\text{km/h}$.
- **Uniform speed** involves equal distances in equal times; **variable speed** involves changing rates of motion.
- **Average speed** $= \frac{\text{Total Distance}}{\text{Total Time}}$. Halts are included in total time.
- **Velocity** $= \frac{\text{Displacement}}{\text{Time}}$; vector quantity; includes direction and can have positive or negative signs.
- **Average velocity** $= \frac{\text{Total Displacement}}{\text{Total Time}}$. For any closed loop or round trip, average velocity is identically $0\text{ m/s}$.
- Average speed equals the magnitude of average velocity only for unidirectional, straight-line motion.
- The **speedometer** indicates instantaneous speed; the **odometer** measures cumulative distance.

---

## Practice Questions

1. A cyclist covers $1.8\text{ km}$ in $6\text{ minutes}$. Calculate her speed in $\text{m/s}$ and in $\text{km/h}$.
2. Perform the following conversions:
   (a) Convert $54\text{ km/h}$ into $\text{m/s}$.
   (b) Convert $8\text{ m/s}$ into $\text{km/h}$.
3. A city bus travels at a constant speed of $20\text{ m/s}$. How much time will it require to travel $3\text{ km}$? Express your answer in both seconds and minutes.
4. Sound travels at approximately $340\text{ m/s}$ in ambient air. How far does a sound wave travel in $4\text{ seconds}$?
5. A car travels $100\text{ km}$ at $50\text{ km/h}$, and then covers the next $100\text{ km}$ at $100\text{ km/h}$. Determine the average speed for the entire $200\text{ km}$ journey. Why is the answer not $75\text{ km/h}$?
6. A student walks $1.2\text{ km}$ in $20\text{ min}$, stops to rest for $10\text{ min}$, and then walks another $0.6\text{ km}$ in $10\text{ min}$. Determine the average speed for the entire trip in $\text{km/h}$ and in $\text{m/s}$.
7. Along a straight track, a runner jogs $100\text{ m}$ East in $20\text{ s}$, turns around, and jogs $40\text{ m}$ West in $10\text{ s}$. Find:
   (a) the average speed, and
   (b) the average velocity for the entire $30\text{ s}$ duration.
8. A passenger train $150\text{ m}$ long crosses a steel bridge $450\text{ m}$ long at a constant speed of $72\text{ km/h}$. How many seconds does the train take to clear the bridge completely?
9. An athlete completes one full lap around a $400\text{ m}$ circular running track in $80\text{ s}$, finishing at the starting line. Find her average speed and average velocity.
10. State whether each statement is True or False:
    (a) Speed can take on a negative numerical value.
    (b) Velocity can take on a negative numerical value.
    (c) The average velocity of any completed round trip is always zero.
    (d) For two equal distances driven at $20\text{ km/h}$ and $30\text{ km/h}$, the average speed is $25\text{ km/h}$.
    (e) The speedometer of an automobile displays the total cumulative distance traveled.

### Answers

1. Distance $= 1.8\text{ km} = 1,800\text{ m}$; Time $= 6\text{ min} = 360\text{ s}$.
   - $\text{Speed} = \frac{1,800\text{ m}}{360\text{ s}} = \mathbf{5\text{ m/s}}$.
   - In $\text{km/h}$: $5 \times 3.6 = \mathbf{18\text{ km/h}}$.
   - Check: $5\text{ m/s} \times 360\text{ s} = 1,800\text{ m}$ ✅.
2. (a) $54 \times \frac{5}{18} = 3 \times 5 = \mathbf{15\text{ m/s}}$.
   (b) $8 \times 3.6 = \mathbf{28.8\text{ km/h}}$.
   - Check: $15 \times 3.6 = 54$ ✅ and $28.8 \div 3.6 = 8$ ✅.
3. Distance $= 3\text{ km} = 3,000\text{ m}$.
   - $\text{Time} = \frac{3,000\text{ m}}{20\text{ m/s}} = \mathbf{150\text{ s}} = \mathbf{2.5\text{ min}}$.
   - Check: $20\text{ m/s} \times 150\text{ s} = 3,000\text{ m}$ ✅.
4. Distance $= 340\text{ m/s} \times 4\text{ s} = \mathbf{1,360\text{ m}}$ ($1.36\text{ km}$).
   - Check: $\frac{1,360}{4} = 340\text{ m/s}$ ✅.
5. Outbound time: $t_1 = \frac{100}{50} = 2\text{ h}$. Inbound time: $t_2 = \frac{100}{100} = 1\text{ h}$.
   - Total distance $= 200\text{ km}$; Total time $= 2 + 1 = 3\text{ h}$.
   - $\text{Average Speed} = \frac{200\text{ km}}{3\text{ h}} \approx \mathbf{66.7\text{ km/h}}$.
   - It is not $75\text{ km/h}$ because the car spent twice as much time ($2\text{ h}$) at the lower speed of $50\text{ km/h}$, dragging the time-weighted average down.
6. Total distance $= 1.2 + 0.6 = 1.8\text{ km}$.
   - Total time $= 20 + 10\text{ (rest)} + 10 = 40\text{ min} = \frac{2}{3}\text{ h} = 2,400\text{ s}$.
   - $\text{Average Speed} = \frac{1.8\text{ km}}{\frac{2}{3}\text{ h}} = \mathbf{2.7\text{ km/h}}$.
   - In $\text{m/s}$: $\frac{1,800\text{ m}}{2,400\text{ s}} = \mathbf{0.75\text{ m/s}}$ (Check: $0.75 \times 3.6 = 2.7\text{ km/h}$ ✅).
7. (a) Total distance $= 100 + 40 = 140\text{ m}$; Total time $= 20 + 10 = 30\text{ s}$.
   - $\text{Average Speed} = \frac{140\text{ m}}{30\text{ s}} \approx \mathbf{4.67\text{ m/s}}$.
   (b) Displacement $= +100\text{ m} - 40\text{ m} = +60\text{ m East}$.
   - $\text{Average Velocity} = \frac{+60\text{ m}}{30\text{ s}} = \mathbf{+2\text{ m/s East}}$.
8. Total distance to clear $= 150\text{ m} + 450\text{ m} = 600\text{ m}$.
   - Speed $= 72\text{ km/h} \times \frac{5}{18} = 20\text{ m/s}$.
   - $\text{Time} = \frac{600\text{ m}}{20\text{ m/s}} = \mathbf{30\text{ s}}$.
   - Check: $20\text{ m/s} \times 30\text{ s} = 600\text{ m}$ ✅.
9. Distance $= 400\text{ m}$, Time $= 80\text{ s} \implies \text{Average Speed} = \frac{400}{80} = \mathbf{5\text{ m/s}}$.
   - Starts and ends at the same line $\implies \text{Displacement} = 0\text{ m}$, so $\text{Average Velocity} = \frac{0}{80} = \mathbf{0\text{ m/s}}$.
10. (a) **False** ❌: Distance is non-negative, so speed is strictly non-negative.
    (b) **True** ✅: Negative sign signifies motion in the negative coordinate direction.
    (c) **True** ✅: Net displacement is zero for any closed circuit.
    (d) **False** ❌: For equal distances $d$, total time $= \frac{d}{20} + \frac{d}{30} = \frac{5d}{60} = \frac{d}{12}$. Average speed $= \frac{2d}{\frac{d}{12}} = \mathbf{24\text{ km/h}}$, not $25\text{ km/h}$.
    (e) **False** ❌: The speedometer indicates instantaneous speed; the odometer tracks distance.

---

You now possess a thorough understanding of speed, average speed, and velocity! In Topic 4, we examine what happens when speed itself changes: the physical concept of **acceleration**.
