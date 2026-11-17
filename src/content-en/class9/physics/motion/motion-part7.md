# Chapter: Motion (Part 7)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [motion-part6.md](motion-part6.md)** (covering the three equations of motion for uniform acceleration). The chapter introduction begins in [motion.md](motion.md).
> **Topics covered in this file:**
> 7. Uniform Circular Motion

---

# Topic 7: Uniform Circular Motion

Up to this point, our study of kinematics has focused on straight-line (rectilinear) motion: a train cruising on straight rails, a stone falling vertically under gravity, or a braking car. In Topic 6, we derived the three equations of motion ($v = u + at$, $s = ut + \frac{1}{2}at^2$, $v^2 = u^2 + 2as$), all of which assume motion along a straight path. Yet our world is rich with curved motion: ceiling fans spin, watch hands sweep across dials, amusement park merry-go-rounds revolve, and satellites orbit planets.

In this concluding topic, we investigate what happens when an object moves along a **circular path**. We will uncover one of the most fascinating paradoxes in physics: how an object can move at an unvarying, perfectly constant speed, yet continuously undergo acceleration!

---

## The Potter's Wheel and the Red Clay Speck

Mr. Davis is a master ceramicist. In his pottery studio, the motorized potter's wheel spins steadily as he shapes wet clay into a smooth vase. Sophia, a visiting high school science student, watched with keen fascination.

Curious, Sophia placed a small dab of bright red modeling clay near the outer rim of the spinning disc. As the wheel revolved at an unvarying pace, the red clay speck whirled around in a steady circle: round and round, smooth and rhythmic.

"Mr. Davis, look!" Sophia observed. "The speck is spinning at a completely constant speed. Yet it never travels in a straight line for even a fraction of a second. Every microsecond, its direction of travel shifts: forward, left, backward, right!"

Mr. Davis nodded approvingly. "Outstanding physical observation, Sophia. And if that clay speck suddenly loses its grip and slips off the wet wheel, where do you think it will fly? It will not spiral in circles through the air, nor will it shoot straight outward away from the center. It will fly off in a straight line tangentially, along the exact direction it was heading at that precise microsecond."

"Along the tangent? In which exact direction?" We will resolve Sophia's questions and calculate the exact kinematics of the potter's wheel in this lesson.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Circular motion** | Motion of an object along the circumference of a circle | A red clay speck on a rotating potter's wheel |
| **Uniform circular motion** | Motion along a circular trajectory where speed remains strictly constant | A wheel rotating at an unvarying rate |
| **Time period ($T$)** | The time required for an object to complete one full revolution around the circle | $2\text{ s}$ per revolution $\implies T = 2\text{ s}$ |
| **Frequency ($f$)** | The number of full revolutions completed per second | $5\text{ revolutions/s} \implies f = 5\text{ Hz}$ |
| **Hertz (Hz)** | The SI unit of frequency: $1\text{ Hz} = 1\text{ revolution per second} = 1\text{ s}^{-1}$ | $50\text{ Hz}$ |
| **rpm** | Revolutions (or rounds) per minute: an everyday engineering unit of rotational frequency | $60\text{ rpm} = 1\text{ Hz}$ |
| **Tangent** | A straight line that touches the perimeter of a curve at exactly one point without crossing it | The path of an object released from circular motion |
| **Radius ($r$)** | The straight-line distance from the center of the circle to the circular perimeter | $0.15\text{ m}$ from wheel axle to the clay speck |

---

## Part A: Understanding Circular Motion

When an object travels along a path that forms a geometric **circle**, it executes **circular motion**. Common examples include:
- A speck of clay on a spinning potter's wheel
- A stone tied to a string and whirled overhead in a horizontal circle
- The tip of a spinning ceiling fan blade
- A passenger car navigating a circular traffic roundabout
- The tip of the second hand on an analog wristwatch
- The Moon revolving in its orbit around the Earth

### Uniform Circular Motion

When an object moves along a circular path such that its **speed remains constant at every single instant**, its motion is termed **uniform circular motion**. Here, "uniform" refers strictly to an unchanging scalar speed, matching our earlier definition of uniform speed.

### Constant Speed, Yet Changing Velocity!

Now comes a profound kinematic insight. Recall from Topic 3 that **velocity is a vector quantity consisting of both magnitude (speed) and spatial direction**:

$$\text{Velocity} = \text{Speed} + \text{Direction}$$

On the rotating wheel, the speed of the clay speck is constant (e.g., $1.0\text{ m/s}$). However, its **spatial direction of motion is changing at every single instant**!
Because direction changes continuously, **velocity changes continuously**, even though speed remains perfectly constant.

Furthermore, recall from Topic 4 that whenever velocity changes—whether in magnitude or in direction—the object undergoes **acceleration**:

$$\mathbf{\text{Uniform Circular Motion is an Accelerated Motion}}$$

Even with an unvarying speedometer reading, circular motion is intrinsically accelerated! This acceleration is directed perpendicularly toward the **center of the circular path** (known as *centripetal acceleration*). Because acceleration is present, an inward force must pull on the object to keep it from flying off in a straight line. For a whirled stone, this inward force is provided by the tension in the string; for a car on a roundabout, it is provided by road tire friction. We explore these centripetal forces in the Forces and Laws of Motion chapter.

### Velocity is Always Directed Tangentially

At any given point on a circular track, the object's instantaneous velocity is directed along the **tangent** to the circle at that point. A tangent is the straight line that skims the circle at a single point perpendicular to the radius line:

```
                 B
        <--------*
               .   .
           .           .
   C      .       O       .      A
      v  *                 *  ^
           .           .
               .   .
                 *-------->
                 D
```

> **Figure 7.1** – Counter-clockwise circular motion: at point A velocity points upward, at B it points leftward, at C downward, and at D rightward. At every point, the velocity vector lies along the local tangent. The speed is identical at all points, but the direction rotates continuously.

Notice that while the magnitude of velocity is identical at points A, B, C, and D, the arrows point in completely different directions. This continuous rotation of the velocity vector constitutes acceleration.

---

## Part B: Time Period and Frequency

When observing rotational systems, two natural questions arise: *How long does one complete revolution take?* and *How many revolutions occur each second?*

### Time Period (T)

**The time taken by an object to complete one full revolution around the circular path is called the time period ($T$).**
- SI Unit: **seconds ($\text{s}$)**.

### Frequency (f)

**The number of complete revolutions executed per second is called the frequency ($f$).**
- SI Unit: **hertz ($\text{Hz}$)**, where $1\text{ Hz} = 1\text{ revolution per second} = 1\text{ s}^{-1}$.

### Mathematical Relationship Between T and f

If one revolution takes $T$ seconds, then in 1 second the object completes $\frac{1}{T}$ revolutions:

$$\mathbf{f = \frac{1}{T}} \quad \text{and} \quad \mathbf{T = \frac{1}{f}}$$

For example, if one turn takes $0.5\text{ s}$, then the frequency is $f = \frac{1}{0.5\text{ s}} = 2\text{ Hz}$ ($2\text{ turns per second}$).

### Converting Between rpm and Hertz (Hz)

Rotational machinery (motors, car engines, drills) is conventionally measured in **rpm (revolutions per minute)**. Since $1\text{ minute} = 60\text{ seconds}$:

$$\mathbf{f\text{ (Hz)} = \frac{\text{rpm}}{60}} \quad \text{and} \quad \mathbf{\text{rpm} = f\text{ (Hz)} \times 60}$$

$$\mathbf{60\text{ rpm} = 1\text{ Hz}}$$

### Example 1: Finding Period and Frequency

A bicycle wheel completes 120 full rotations in 1 minute. Find its frequency ($f$) and time period ($T$):
- $\text{Time} = 1\text{ min} = 60\text{ s}$.
- $f = \frac{120\text{ revolutions}}{60\text{ s}} = \mathbf{2\text{ Hz}}$.
- $T = \frac{1}{f} = \frac{1}{2\text{ Hz}} = \mathbf{0.5\text{ s}}$.
- **Check:** $0.5\text{ s/rev} \times 120\text{ rev} = 60\text{ s} = 1\text{ minute} ✅$.

### Example 2: Conversions Between rpm and Hz

(a) A ceiling fan spins at $300\text{ rpm}$. Calculate its frequency and time period.
$$f = \frac{300}{60} = \mathbf{5\text{ Hz}}, \quad T = \frac{1}{5} = \mathbf{0.2\text{ s}}$$
(b) An electric motor runs at $2\text{ Hz}$. What is its rotational speed in $\text{rpm}$?
$$\text{rpm} = 2\text{ Hz} \times 60 = \mathbf{120\text{ rpm}}$$
- **Check:** $120 \div 60 = 2\text{ Hz} ✅$; $5\text{ Hz} \times 0.2\text{ s} = 1 ✅$.

---

## Part C: Calculating Linear Speed in Circular Motion

### Distance Covered in One Complete Revolution

In completing one full loop around a circle of radius $r$, an object traverses a distance equal to the circle's **circumference**:

$$\text{Circumference} = 2\pi r$$

```
         . - - - .
      .'           '.
     /               \
    (        O--------*   r (center to outer edge)
     \               /
      '.           .'
         ' - - - '

   Distance per revolution = circumference = 2 * pi * r
```

> **Figure 7.2** – A circle of radius $r$ has a perimeter of $2\pi r$. The object covers this distance during one time period $T$.

Because this distance is covered in elapsed time $T$:

$$\mathbf{v = \frac{2\pi r}{T}}$$

Using $f = \frac{1}{T}$, this is equivalently written as:

$$\mathbf{v = 2\pi r f}$$

Where:
- $r$ is the radius in meters ($\text{m}$),
- $T$ is the time period in seconds ($\text{s}$),
- $f$ is the frequency in hertz ($\text{Hz}$),
- $\pi \approx \frac{22}{7} \approx 3.1416$,
- $v$ is the linear speed in meters per second ($\text{m/s}$).

### Example 3: Whirling a Stone on a String

A stone tied to the end of a string travels in a horizontal circle of radius $r = 0.5\text{ m}$. It takes $T = 2\text{ s}$ to complete one full revolution. Calculate its speed. (Use $\pi = 3.14$).

$$v = \frac{2\pi r}{T} = \frac{2 \times 3.14 \times 0.5\text{ m}}{2\text{ s}} = \frac{3.14\text{ m}}{2\text{ s}} = \mathbf{1.57\text{ m/s}}$$

- **Check:** $1.57\text{ m/s} \times 2\text{ s} = 3.14\text{ m} = 2\pi(0.5\text{ m}) ✅$.

### Example 4: Linear Speed of a Fan Blade Tip

A ceiling fan rotates at $300\text{ rpm}$. The tip of each blade is located $r = 0.6\text{ m}$ from the central motor axis. Find the linear speed of the blade tip. (Use $\pi = 3.14$).
- Frequency: $f = \frac{300}{60} = 5\text{ Hz}$.
- Speed:
  $$v = 2\pi r f = 2 \times 3.14 \times 0.6\text{ m} \times 5\text{ s}^{-1} = 3.768 \times 5 = \mathbf{18.84\text{ m/s}}$$
- In $\text{km/h}$: $18.84 \times 3.6 \approx \mathbf{67.8\text{ km/h}}$.
- **Check:** $T = \frac{1}{5} = 0.2\text{ s} \implies v = \frac{3.768}{0.2} = 18.84\text{ m/s} ✅$. Moving at nearly $68\text{ km/h}$, a fan blade tip carries substantial kinetic energy!

### Example 5: Speed of a Clock's Second Hand Tip

The second hand of a wall clock is $7\text{ cm}$ long. Calculate the linear speed of its tip in $\text{m/s}$. (Use $\pi = \frac{22}{7}$).
- The second hand completes one full circle in $60\text{ seconds} \implies T = 60\text{ s}$.
- Radius: $r = 7\text{ cm} = 0.07\text{ m}$.
  $$v = \frac{2\pi r}{T} = \frac{2 \times \frac{22}{7} \times 0.07\text{ m}}{60\text{ s}} = \frac{0.44\text{ m}}{60\text{ s}} \approx \mathbf{0.00733\text{ m/s}} \quad (0.73\text{ cm/s})$$
- **Check:** $0.00733\text{ m/s} \times 60\text{ s} \approx 0.44\text{ m} = 2\pi(0.07\text{ m}) ✅$.

### Example 6: An Automobile on a Circular Test Track

A test car drives around a circular track of radius $r = 100\text{ m}$. It completes one full lap in $100\text{ s}$. Determine its speed. (Use $\pi = 3.14$).

$$v = \frac{2\pi r}{T} = \frac{2 \times 3.14 \times 100\text{ m}}{100\text{ s}} = \frac{628\text{ m}}{100\text{ s}} = \mathbf{6.28\text{ m/s}}$$

- **Check:** $6.28\text{ m/s} \times 100\text{ s} = 628\text{ m} = 2\pi(100) ✅$.

### Example 7: Handling Diameter vs. Radius on a Merry-Go-Round

A fairground carousel (merry-go-round) has a **diameter of 6 m** and completes one rotation in $12\text{ s}$. Find the speed of a child sitting on the outer edge. (Use $\pi = 3.14$).
- *Watch out:* The problem specifies diameter, not radius!
- $\text{Radius } r = \frac{\text{Diameter}}{2} = \frac{6\text{ m}}{2} = 3\text{ m}$.
  $$v = \frac{2\pi r}{T} = \frac{2 \times 3.14 \times 3\text{ m}}{12\text{ s}} = \frac{18.84\text{ m}}{12\text{ s}} = \mathbf{1.57\text{ m/s}}$$
- **Check:** $1.57\text{ m/s} \times 12\text{ s} = 18.84\text{ m} = 2\pi(3\text{ m}) ✅$.

### Example 8: Determining Frequency from Speed

A stone whirled on a string of radius $0.5\text{ m}$ moves with a linear speed of $3.14\text{ m/s}$. Find its frequency ($f$) and period ($T$). (Use $\pi = 3.14$).
$$v = 2\pi r f \implies f = \frac{v}{2\pi r} = \frac{3.14\text{ m/s}}{2 \times 3.14 \times 0.5\text{ m}} = \frac{3.14}{3.14} = \mathbf{1\text{ Hz}}$$
$$T = \frac{1}{f} = \mathbf{1\text{ s}}$$
- **Check:** $v = 2(3.14)(0.5)(1) = 3.14\text{ m/s} ✅$.

---

## Part D: Distance vs. Displacement in Circular Motion

Circular motion vividly illustrates the foundational distinction between scalar distance and vector displacement introduced in Topic 2.

### Example 9: Half-Lap vs. Full-Lap Analysis

A runner circles a track with radius $r = 100\text{ m}$ and period $T = 100\text{ s}$ ($\pi = 3.14$):

**After Half a Lap ($50\text{ s}$):**
- $\text{Distance} = \text{Half-Circumference} = \pi r = 3.14 \times 100\text{ m} = \mathbf{314\text{ m}}$.
- $\text{Displacement} = \text{Straight-line chord across diameter} = 2r = 2 \times 100 = \mathbf{200\text{ m}}$.
- $\text{Average Speed} = \frac{314\text{ m}}{50\text{ s}} = \mathbf{6.28\text{ m/s}}$.
- $\text{Average Velocity} = \frac{200\text{ m}}{50\text{ s}} = \mathbf{4\text{ m/s directed toward opposite point}}$.

**After One Full Lap ($100\text{ s}$):**
- $\text{Distance} = 2\pi r = 2 \times 3.14 \times 100\text{ m} = \mathbf{628\text{ m}}$.
- $\text{Displacement} = \mathbf{0\text{ m}}$ (runner returns to starting coordinates).
- $\text{Average Speed} = \frac{628\text{ m}}{100\text{ s}} = \mathbf{6.28\text{ m/s}}$.
- $\text{Average Velocity} = \frac{0\text{ m}}{100\text{ s}} = \mathbf{0\text{ m/s}}$.

Notice that although the runner maintains a constant speed of $6.28\text{ m/s}$ at every millisecond, her average velocity over the full lap is strictly zero because net displacement vanishes!

---

## Part E: Where Does an Object Fly When Released?

Consider a stone whirled on a taut string. The tension in the string exerts an inward pull, continually bending the stone's path into a circle.
What happens if the string **breaks or is released suddenly**?

The instant the string breaks, the inward constraint ceases to exist. With no inward force acting on it, the stone immediately continues in the exact direction it was traveling at that precise microsecond: **straight along the local tangent to the circle**:

```
              P (stone released here)
              *------------------------>  straight line path (tangent)
        . - '   ' - .
      .'             '.
     /                 \
    (         O         )
     \                 /
      '.             .'
        ' - . _ . - '
```

> **Figure 7.3** – A stone released at point P during clockwise rotation: it flies off along the tangent line perpendicular to the radius. It does not fly radially outward like a spoke, nor does it continue curving.

*(Note: In three dimensions, gravity pulls the released projectile downward into a parabolic trajectory, but its initial horizontal velocity remains purely tangential.)*

Everyday occurrences of tangential release:
- Sparks flying off a high-speed abrasive grinding wheel
- Water droplets spun off the perforated drum of a washing machine during the spin cycle
- Mud flung off the spinning tires of a bicycle
- A hammer thrower releasing an athletic hammer on the sports field

---

## Part F: Quantitative Resolution of the Potter's Wheel Scenario

Let us return to Mr. Davis's pottery wheel. The wheel rotates at $60\text{ rpm}$, and Sophia's red clay speck sits $0.15\text{ m}$ from the central axle ($\pi = 3.14$):

**1. Frequency and Time Period:**
$$f = \frac{60\text{ rpm}}{60} = \mathbf{1\text{ Hz}}$$
$$T = \frac{1}{f} = \frac{1}{1\text{ Hz}} = \mathbf{1\text{ s}}$$

**2. Linear Speed of the Clay Speck:**
$$v = \frac{2\pi r}{T} = \frac{2 \times 3.14 \times 0.15\text{ m}}{1\text{ s}} = 0.942\text{ m/s} \approx \mathbf{0.94\text{ m/s}}$$
- **Check:** $0.942\text{ m/s} \times 1\text{ s} = 0.942\text{ m} = 2\pi(0.15\text{ m}) ✅$.

Mr. Davis explained: *"The clay speck completes one full circuit every second, covering $0.94\text{ meters}$ at a steady speed of $0.94\text{ m/s}$. Yet because its heading changes continuously, its velocity changes continuously, requiring inward surface tension from the clay to hold it in place. If it breaks loose, it flies straight along the tangent line at $0.94\text{ m/s}$."*

Sophia smiled in understanding: having a constant speed does not mean velocity is constant.

---

## Part G: Side-by-Side Comparison: Linear Motion vs. Uniform Circular Motion

| Property | Straight-Line (Linear) Motion | Uniform Circular Motion |
|---|---|---|
| **Path Geometry** | Straight line | Closed circle |
| **Speed** | Constant or variable | Strictly constant |
| **Direction of Velocity** | Fixed along the line | Continuously rotating (tangential) |
| **Acceleration at Constant Speed** | Strictly zero ($a = 0$) | Non-zero (directed toward center) |
| **Full Round-Trip Displacement** | Non-zero if ends at different point | Strictly zero ($0\text{ m}$) |
| **Speed Formula** | $v = \frac{s}{t}$ | $v = \frac{2\pi r}{T} = 2\pi r f$ |
| **Release Behavior** | Continues along the straight line | Flies straight along the tangent line |

---

## Common Pitfalls to Avoid

1. **Mistake 1: Believing constant speed means zero acceleration.**
   In linear motion, constant speed guarantees zero acceleration. In circular motion, velocity changes direction at every microsecond; hence, uniform circular motion is **always accelerated** toward the center.

2. **Mistake 2: Using diameter in place of radius in 2πr.**
   If a merry-go-round has a diameter of $6\text{ m}$, the radius is $r = 3\text{ m}$. Using $6\text{ m}$ directly erroneously doubles the computed circumference and speed!

3. **Mistake 3: Treating rpm directly as frequency in Hertz.**
   $1\text{ Hz} = 60\text{ rpm}$. If a fan spins at $300\text{ rpm}$, its frequency is $f = \frac{300}{60} = 5\text{ Hz}$, not $300\text{ Hz}$.

4. **Mistake 4: Claiming an object flies radially outward when released.**
   When a whirling string breaks, the object does **not** shoot directly away from the center along a radial line. It flies along the **tangent line**, perpendicular to the radius at the point of release (Figure 7.3).

5. **Mistake 5: Stating displacement as 2πr for a full revolution.**
   The distance covered in one revolution is $2\pi r$. The net displacement after one full revolution is **identically zero ($0\text{ m}$)**.

---

## Quick Recap

- **Circular motion** occurs along a circular path; **uniform circular motion** maintains an unvarying scalar speed.
- Velocity is directed along the **tangent** to the circle. Because its direction rotates continuously, uniform circular motion is **accelerated motion** directed toward the center.
- **Time period ($T$):** time for one complete revolution (SI unit: $\text{s}$).
- **Frequency ($f$):** number of revolutions completed per second (SI unit: $\text{Hz} = \text{s}^{-1}$).
- Relationship: **$f = \frac{1}{T}$** and **$T = \frac{1}{f}$**; **$60\text{ rpm} = 1\text{ Hz}$** ($f = \frac{\text{rpm}}{60}$).
- **Linear Speed:** **$v = \frac{2\pi r}{T} = 2\pi r f$**. (Be sure $r$ is radius, not diameter!).
- Over a full revolution: **Distance $= 2\pi r$**, but **Displacement $= 0\text{ m}$** and **Average Velocity $= 0\text{ m/s}$**.
- When released from circular motion, an object travels in a **straight line along the tangent**.

---

## Practice Questions

1. A flywheel makes 180 complete rotations in one minute. Find its frequency in $\text{Hz}$ and its time period in seconds (state $T$ to two decimal places).
2. A small toy on a revolving turntable takes $0.25\text{ s}$ to complete one full turn. Calculate its frequency in $\text{Hz}$ and its rotational speed in $\text{rpm}$.
3. A stone tied to a string is whirled in a horizontal circle of radius $0.4\text{ m}$ at a frequency of $2\text{ Hz}$. Calculate the linear speed of the stone. (Take $\pi = 3.14$).
4. The tip of an industrial ventilation fan blade is located $0.5\text{ m}$ from its central axis. The fan runs at $600\text{ rpm}$. Calculate the linear speed of the blade tip. (Take $\pi = 3.14$).
5. The minute hand of a classroom wall clock is $14\text{ cm}$ long. Calculate the linear speed of its tip in $\text{cm/s}$. (Take $\pi = \frac{22}{7}$; provide the answer to 4 decimal places).
6. A circular running track has a radius of $50\text{ m}$. An athlete begins at a starting line, runs half a lap, and then continues to complete a full lap. Calculate the total distance covered and the net displacement in both instances. (Take $\pi = 3.14$).
7. A fairground carousel has a diameter of $4\text{ m}$ and takes $5\text{ s}$ to complete one revolution. Find the linear speed of a passenger seated on its outer rim. (Take $\pi = 3.14$).
8. An automobile navigates a circular roundabout of radius $10\text{ m}$ at a steady speed of $6.28\text{ m/s}$. Find the time required to complete one full circuit. (Take $\pi = 3.14$).
9. State whether each statement is True or False, providing a physical reason:
   (a) An object moving along a circular path at constant speed possesses zero acceleration.
   (b) A stone released from a whirled string flies directly outward along the radius away from the center.
   (c) After completing one full revolution on a track, an athlete's displacement is zero while her distance is non-zero.
10. Explain in your own words why the velocity of a clay speck on a rotating wheel changes continuously even though its speed is constant. If the speck detaches from the wheel, in which exact direction will it travel?

### Answers

1. $f = \frac{180\text{ rev}}{60\text{ s}} = \mathbf{3\text{ Hz}}$.
   - $T = \frac{1}{f} = \frac{1}{3} \approx \mathbf{0.33\text{ s}}$.
   - Check: $0.333\text{ s} \times 180 \approx 60\text{ s} ✅$.
2. $f = \frac{1}{T} = \frac{1}{0.25\text{ s}} = \mathbf{4\text{ Hz}}$.
   - $\text{rpm} = 4\text{ Hz} \times 60 = \mathbf{240\text{ rpm}}$.
   - Check: $\frac{240}{60} = 4\text{ Hz} ✅$.
3. $v = 2\pi r f = 2(3.14)(0.4\text{ m})(2\text{ s}^{-1}) = 2.512 \times 2 = \mathbf{5.024\text{ m/s}}$ ($\approx 5.02\text{ m/s}$).
   - Check: $T = 0.5\text{ s} \implies v = \frac{2.512}{0.5} = 5.024\text{ m/s} ✅$.
4. $f = \frac{600}{60} = 10\text{ Hz}$.
   - $v = 2\pi r f = 2(3.14)(0.5\text{ m})(10\text{ s}^{-1}) = 3.14 \times 10 = \mathbf{31.4\text{ m/s}}$.
   - Check: $T = 0.1\text{ s} \implies v = \frac{3.14}{0.1} = 31.4\text{ m/s} ✅$.
5. $T = 60\text{ min} = 3,600\text{ s}$, $r = 14\text{ cm}$.
   - $v = \frac{2\pi r}{T} = \frac{2 \times \frac{22}{7} \times 14\text{ cm}}{3,600\text{ s}} = \frac{88\text{ cm}}{3,600\text{ s}} \approx \mathbf{0.0244\text{ cm/s}}$.
   - Check: $0.02444 \times 3,600 \approx 88\text{ cm} ✅$.
6. Half lap:
   - $\text{Distance} = \pi r = 3.14 \times 50\text{ m} = \mathbf{157\text{ m}}$.
   - $\text{Displacement} = 2r = 2 \times 50\text{ m} = \mathbf{100\text{ m directed across diameter}}$.
   Full lap:
   - $\text{Distance} = 2\pi r = 2(3.14)(50\text{ m}) = \mathbf{314\text{ m}}$.
   - $\text{Displacement} = \mathbf{0\text{ m}}$.
   - Check: $157 \times 2 = 314\text{ m} ✅$.
7. $r = \frac{4\text{ m}}{2} = 2\text{ m}$.
   - $v = \frac{2\pi r}{T} = \frac{2(3.14)(2\text{ m})}{5\text{ s}} = \frac{12.56\text{ m}}{5\text{ s}} = \mathbf{2.512\text{ m/s}}$ ($\approx 2.51\text{ m/s}$).
   - Check: $2.512 \times 5 = 12.56\text{ m} = 2\pi(2) ✅$.
8. $T = \frac{2\pi r}{v} = \frac{2(3.14)(10\text{ m})}{6.28\text{ m/s}} = \frac{62.8\text{ m}}{6.28\text{ m/s}} = \mathbf{10\text{ s}}$.
   - Check: $6.28\text{ m/s} \times 10\text{ s} = 62.8\text{ m} ✅$.
9. (a) **False** ❌: Speed is constant, but velocity changes direction continuously; thus, acceleration is non-zero and directed toward the center.
   (b) **False** ❌: The stone flies along the tangent line perpendicular to the radius at the moment of release.
   (c) **True** ✅: The starting and ending points coincide ($\text{displacement} = 0$), while the path traversed is $\text{distance} = 2\pi r > 0$.
10. Velocity is a vector composed of magnitude (speed) and direction. Although the speed of the clay speck remains constant, its heading turns continuously at every instant along the curved boundary; hence, its velocity changes continuously. Upon release, the inward constraint vanishes, and the speck flies off in a straight line along the **tangent** to the circle at the point of release.

---

# Chapter Wrap-up: Motion

| Topic | What We Learned | Core Takeaway |
|---|---|---|
| **1. Rest, Motion, and Reference Frames** | Motion and rest depend on a chosen reference point; coordinates on a number line (origin, $+$, and $-$); linear, circular, rotational, oscillatory, and random motions; uniform vs. non-uniform motion. | Rest and motion are relative concepts. |
| **2. Distance and Displacement** | Distance is a scalar measuring actual path length; displacement is a vector measuring shortest straight-line separation with direction. | $|\text{Displacement}| \le \text{Distance}$; displacement is zero for closed loops. |
| **3. Speed and Velocity** | $\text{Speed} = \frac{d}{t}$ (scalar); $\text{Velocity} = \frac{s}{t}$ (vector); $\text{Average Speed} = \frac{d_{\text{total}}}{t_{\text{total}}}$ ($40\text{ km/h}$ time-weighted trap); $1\text{ km/h} = \frac{5}{18}\text{ m/s}$; speedometer vs. odometer. | Velocity includes direction; average velocity over a completed round trip is identically zero. |
| **4. Acceleration** | $a = \frac{v - u}{t}$, measured in $\text{m/s}^2$; acceleration occurs if speed or direction changes; deceleration / retardation; sign conventions. | Acceleration can exist even at constant speed (circular motion). |
| **5. Kinematic Graphs** | Distance-time ($s-t$) and velocity-time ($v-t$) plots; slope of $s-t \implies \text{speed}$; slope of $v-t \implies \text{acceleration}$; area under $v-t \implies \text{displacement}$. | Graph shapes visually represent physical motion states at a glance. |
| **6. The Equations of Motion** | Three equations for uniform acceleration along a straight line: $v = u + at$, $s = ut + \frac{1}{2}at^2$, $v^2 = u^2 + 2as$ (and $s = \frac{u+v}{2}t$); stopping distance scales quadratically with speed ($s \propto u^2$). | List known variables ($u, v, a, t, s$), then select the equation matching the omitted variable. |
| **7. Uniform Circular Motion** | Constant speed along a circular path; time period $T$, frequency $f$, $v = \frac{2\pi r}{T} = 2\pi rf$; tangential release behavior. | Constant speed with continuously rotating direction constitutes centripetal acceleration. |

### Key Definitions and SI Units

| Physical Quantity | Definition | SI Unit | Quantity Type |
|---|---|---|---|
| **Distance ($d$)** | Total path length traversed | Meter ($\text{m}$) | Scalar |
| **Displacement ($s$)** | Shortest straight line from start to finish with direction | Meter ($\text{m}$) | Vector |
| **Speed ($v$)** | Rate of covering distance ($\text{distance} \div \text{time}$) | $\text{m/s}$ | Scalar |
| **Velocity ($v$)** | Rate of change of position ($\text{displacement} \div \text{time}$) | $\text{m/s}$ | Vector |
| **Acceleration ($a$)** | Rate of change of velocity ($\Delta v \div \Delta t$) | $\text{m/s}^2$ | Vector |
| **Time Period ($T$)** | Time required for one complete revolution | Second ($\text{s}$) | Scalar |
| **Frequency ($f$)** | Number of complete revolutions per second | Hertz ($\text{Hz} = \text{s}^{-1}$) | Scalar |

### Summary of Key Formulas

| Kinematic Concept | Formula |
|---|---|
| **Speed** | $v = \frac{\text{Distance}}{\text{Time}}$ |
| **Average Speed** | $\text{Average Speed} = \frac{\text{Total Distance}}{\text{Total Time}}$ |
| **Average Velocity** | $\text{Average Velocity} = \frac{\text{Total Displacement}}{\text{Total Time}}$ |
| **Unit Conversion** | $1\text{ km/h} = \frac{5}{18}\text{ m/s} \approx 0.278\text{ m/s} \quad (\text{Multiply by } 3.6 \text{ to go from m/s to km/h})$ |
| **Acceleration** | $a = \frac{v - u}{t}$ |
| **First Equation of Motion** | $v = u + at$ |
| **Second Equation of Motion** | $s = ut + \frac{1}{2}at^2$ |
| **Third Equation of Motion** | $v^2 = u^2 + 2as$ |
| **Average Velocity Form** | $s = \frac{u + v}{2} t$ |
| **Linear Speed in Circular Motion** | $v = \frac{2\pi r}{T} = 2\pi r f$ |
| **Frequency and Time Period** | $f = \frac{1}{T} \iff T = \frac{1}{f}$ |
| **Engineering Frequency Conversion** | $f\text{ (Hz)} = \frac{\text{rpm}}{60}$ |

### Graph Profiles at a Glance

| Graph Type | Visual Line Shape | Physical Meaning |
|---|---|---|
| **Distance-Time ($s-t$)** | Straight inclined line | Uniform (constant) speed ($\text{slope} = \text{speed}$) |
| **Distance-Time ($s-t$)** | Horizontal flat line | Object is at rest ($v = 0$) |
| **Distance-Time ($s-t$)** | Upward curve steepening | Increasing speed (acceleration) |
| **Velocity-Time ($v-t$)** | Horizontal flat line | Uniform velocity ($a = 0$) |
| **Velocity-Time ($v-t$)** | Straight inclined upward line | Uniform acceleration ($\text{slope} = a$) |
| **Velocity-Time ($v-t$)** | Straight downward line | Uniform deceleration / retardation |
| **Velocity-Time ($v-t$)** | Area under the line | Total displacement |

---

In the next chapter, **Forces and the Laws of Motion**, we investigate **why** objects change their state of motion: exploring the forces that initiate acceleration, deceleration, and circular motion.
