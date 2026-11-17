# Chapter: Gravitation (Part 4)

> **Class:** 9 | **Subject:** Physics
> **This file builds upon [gravitation-part3.md](gravitation-part3.md)** (which established free fall and acceleration due to gravity, $g$: all objects accelerate identically in a vacuum regardless of mass). The chapter begins at [gravitation.md](gravitation.md). For kinematic equations and sign conventions, refer back to [motion-part6.md](../motion/motion-part6.md), and for acceleration sign rules, see [motion-part4.md](../motion/motion-part4.md).
> **Topics covered in this file:**
> 4. Equations of Free Fall: Moving Upward and Downward

---

# Topic 4: Equations of Free Fall: Moving Upward and Downward

In the previous topic, we saw that in the absence of air resistance, every falling object accelerates at the exact same constant rate **$g$** ($g \approx 9.8\text{ m/s}^2$, often taken as $10\text{ m/s}^2$ for simplicity). Because this acceleration is uniform, we can apply the **three kinematic equations of motion** directly, substituting $a = \pm g$. In this topic, we will learn how to analyze vertical motion under gravity for objects dropped downwards as well as objects projected upwards.

---

## Mr. Miller, Sophia, and the Rooftop Ball

On a calm afternoon on the school rooftop terrace, the physics teacher Mr. Miller sat holding a stopwatch. His student Sophia arrived carrying a bouncy rubber ball.

"Mr. Miller, watch this! I am going to throw this ball straight up into the air and catch it right here at the same height. Please time the flight with your stopwatch!"

Sophia threw the ball straight up with all her strength. The ball rose rapidly, slowed down, seemed to **pause motionless for a split second** at its peak, and then plunged back downward into Sophia's awaiting hands. Mr. Miller clicked the stopwatch: **$4\text{ seconds}$**.

Sophia tilted her head thoughtfully. "Mr. Miller, why did the ball momentarily stop at the very top? While it was stopped, did Earth's gravity stop pulling on it? And how high did it actually climb?"

Mr. Miller smiled. "Those questions can be answered with absolute precision using kinematics. Let us connect our equations of motion to $g$ and compute the exact numbers."

We will solve this exact problem in Example 1.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Free fall** | Vertical motion occurring under the influence of gravity alone (Topic 3) | A ball dropped from a rooftop |
| **Maximum height (H)** | The highest vertical displacement reached by an upward-moving object | Sophia's ball: $H = 20\text{ m}$ |
| **Time of ascent** | The time taken to travel from the point of projection up to maximum height | $2\text{ s}$ |
| **Time of flight** | Total elapsed time from projection until the object returns to its release level | $4\text{ s}$ |
| **Sign convention** | The chosen coordinate direction assigned as positive ($+$) | Choosing upward as $+$ means $a = -g$ |
| **Symmetry of flight** | The property that ascent and descent take equal time and match in speeds at each height | Projection speed equals return speed |

---

## Part A: Establishing Sign Conventions: a = ±g

Our foundational kinematic equations remain:
1. $v = u + at$
2. $s = ut + \frac{1}{2}at^2$
3. $v^2 = u^2 + 2as$

In free fall, the magnitude of acceleration is known: $|a| = g$. Because Earth's gravitational pull **always acts downward** towards the planetary centre, we must define a clear sign convention at the beginning of every problem:

| Convention | Positive Direction ($+$) | Value of Acceleration $a$ | When It Is Most Convenient |
|---|---|---|---|
| **1. Upward Positive** | Upward | $a = -g$ | When an object is thrown upward, or moves both up and down |
| **2. Downward Positive** | Downward | $a = +g$ | When an object moves strictly downward (dropped or thrown down) |

Both conventions yield mathematically identical, correct results. **Never mix conventions within the same problem.** Once you choose a convention, follow it consistently for initial velocity ($u$), final velocity ($v$), and displacement ($s$).

**In this topic, we frequently take $g = 10\text{ m/s}^2$** to keep arithmetic clean and transparent. Whenever $g = 9.8\text{ m/s}^2$ is used, it is explicitly indicated.

---

## Part B: Dropping from Rest (u = 0)

When an object is gently **released or dropped** from rest, its initial velocity is $u = 0$. Choosing **downward as positive** ($a = +g$), the three equations simplify directly:

| General Equation | Free Fall from Rest ($u = 0$, $a = +g$) | Physical Meaning |
|---|---|---|
| $v = u + at$ | **$v = gt$** | Speed after falling for time $t$ |
| $s = ut + \frac{1}{2}at^2$ | **$h = \frac{1}{2}gt^2$** | Distance fallen in time $t$ |
| $v^2 = u^2 + 2as$ | **$v^2 = 2gh$** | Speed after falling through vertical height $h$ |

Here, $h$ denotes vertical distance fallen. Notice that distance scales quadratically with time ($h \propto t^2$): doubling the falling time quadruples the distance fallen!

---

## Part C: Throwing Vertically Upward (Gravity Decelerates the Ascent)

Sophia threw her ball vertically upward. Let us adopt the standard convention: **upward is positive**.  
Because gravity pulls downward, the acceleration is negative: $a = -g = -10\text{ m/s}^2$. This means that during the ascent, the ball's upward velocity **decreases by $10\text{ m/s}$ every second**.

Consider a ball projected upward at $u = 30\text{ m/s}$ ($g = 10\text{ m/s}^2$):  
Using $v = u + at = 30 - 10t$ and $s = ut + \frac{1}{2}at^2 = 30t - 5t^2$:

| Time $t$ ($\text{s}$) | Velocity $v$ ($\text{m/s}$) | Height $s$ ($\text{m}$) | Motion Description |
|---|---|---|---|
| $0$ | $+30$ | $0$ | Released upward from hand |
| $1$ | $+20$ | $25$ | Ascending, slowing down |
| $2$ | $+10$ | $40$ | Ascending, slowing further |
| $3$ | **$0$** | **$45$** | **Highest point (instantaneous rest)** |
| $4$ | $-10$ | $40$ | Descending, speeding up |
| $5$ | $-20$ | $25$ | Descending, speeding further |
| $6$ | $-30$ | $0$ | Caught back at release level |

Notice two profound features:
1. **Kinematic Symmetry:** The ball returns to its launch height with a speed of $30\text{ m/s}$, exactly equal to its launch speed (though opposite in direction, $v = -30\text{ m/s}$). At any given height (such as $25\text{ m}$), the ascending speed ($+20\text{ m/s}$) matches the descending speed ($-20\text{ m/s}$). The time taken to ascend ($3\text{ s}$) equals the time taken to descend ($3\text{ s}$).
2. **Continuous Constant Acceleration:** The velocity transitions smoothly from positive through zero to negative, decreasing by $10\text{ m/s}$ every single second. Therefore, **acceleration remains constant at $-10\text{ m/s}^2$ throughout the entire flight**, even at the very peak!

```
 Height (m)
    ^
 45 :            . . .           <- Peak: v = 0
    :         .         .
 40 :       .             .
    :
 25 :     .                 .
    :
  0 +--+--+--+--+--+--+--+--> Time (s)
    0  1  2  3  4  5  6
    v: +30 +20 +10  0 -10 -20 -30 (m/s)
```

> **Figure 4.1** – Height versus time curve for a projectile thrown vertically upward at $u = 30\text{ m/s}$ ($g = 10\text{ m/s}^2$). The ball reaches its apex of $45\text{ m}$ at $t = 3\text{ s}$. The trajectory is purely vertical; the curve displays height over time.

### Useful Formulas for Vertical Projectiles

At the maximum height, $v = 0$. With upward positive ($a = -g$):

- **Time to reach maximum height ($t_{\text{ascent}}$):**  
  From $v = u - gt \implies 0 = u - gt \implies \mathbf{t = \frac{u}{g}}$
- **Maximum height reached ($H$):**  
  From $v^2 = u^2 - 2gH \implies 0 = u^2 - 2gH \implies \mathbf{H = \frac{u^2}{2g}}$
- **Total time of flight ($T$):**  
  By symmetry, $T = 2 \times t_{\text{ascent}} \implies \mathbf{T = \frac{2u}{g}}$

Verifying for $u = 30\text{ m/s}$:  
$t = 30 / 10 = 3\text{ s}$ ✅  
$H = 30^2 / (2 \times 10) = 900 / 20 = 45\text{ m}$ ✅  
$T = 2 \times 30 / 10 = 6\text{ s}$ ✅

---

## Part D: At the Peak: v = 0, but a = g

In our study of kinematics, we encountered a classic conceptual question: when a ball reaches its apex, what are its velocity and acceleration?

At the highest point, **$v = 0$**, but **$a = -g \neq 0$**.

Acceleration measures the **rate of change of velocity**, not velocity itself. At the apex, the velocity is actively changing from positive (upward) to negative (downward). For our projectile ($v = 30 - 10t$):
- At $t = 2.9\text{ s}$: $v = +1\text{ m/s}$
- At $t = 3.0\text{ s}$: $v = 0\text{ m/s}$
- At $t = 3.1\text{ s}$: $v = -1\text{ m/s}$

The velocity continues to decrease at the constant rate of $10\text{ m/s}^2$. If acceleration were zero at the peak, Newton's First Law guarantees the ball would hang suspended in mid-air forever! Gravity never pauses; $v = 0$ is merely an instantaneous turnaround point.

---

## Part E: Solved Examples

### Example 1: Sophia's Ball (u = 20 m/s Upward)

Sophia threw a ball vertically upward at **$20\text{ m/s}$**, and caught it $4\text{ seconds}$ later. Verify Mr. Miller's timing and calculate how high the ball ascended ($g = 10\text{ m/s}^2$).

**Convention:** Upward is positive $\implies u = +20\text{ m/s}$, $a = -10\text{ m/s}^2$.

- **Time to reach maximum height:**  
  $v = u + at \implies 0 = 20 - 10t \implies t = \frac{20}{10} = \mathbf{2\text{ s}}$
- **Maximum height:**  
  $v^2 = u^2 + 2as \implies 0 = (20)^2 - 2(10)H \implies 20H = 400 \implies \mathbf{H = 20\text{ m}}$
- **Total time of flight:**  
  $T = 2 \times t = 2 \times 2 = \mathbf{4\text{ s}}$

**Check:** Total displacement $s = ut + \frac{1}{2}at^2 = (20)(4) + \frac{1}{2}(-10)(4)^2 = 80 - 80 = 0\text{ m}$ ✅. At $t = 2\text{ s}$, $s = (20)(2) - 5(4) = 40 - 20 = 20\text{ m}$ ✅.  
Mr. Miller's stopwatch of $4\text{ s}$ was exactly accurate, and the ball reached a peak height of **$20\text{ m}$** (approximately a six-story building).

### Example 2: Stone Dropped from an 80 m Tower

A stone is released from rest from the top of an $80\text{ m}$ tall tower. Determine the time taken to strike the ground and its impact speed ($g = 10\text{ m/s}^2$).

**Convention:** Downward is positive $\implies u = 0$, $a = +10\text{ m/s}^2$, $h = 80\text{ m}$.

- $h = \frac{1}{2}gt^2 \implies 80 = \frac{1}{2}(10)t^2 = 5t^2 \implies t^2 = 16 \implies \mathbf{t = 4\text{ s}}$
- Impact velocity: $v = gt = (10\text{ m/s}^2)(4\text{ s}) = \mathbf{40\text{ m/s}}$ (downward)

**Check:** $v^2 = 2gh = 2(10)(80) = 1600 \implies v = \sqrt{1600} = 40\text{ m/s}$ ✅.

### Example 3: A 45 m Building

A pebble is dropped from rest from the roof of a $45\text{ m}$ building. Find the falling time and strike velocity ($g = 10\text{ m/s}^2$).

**Convention:** Downward is positive $\implies u = 0$, $a = +10\text{ m/s}^2$, $h = 45\text{ m}$.

- $45 = 5t^2 \implies t^2 = 9 \implies \mathbf{t = 3\text{ s}}$
- $v = gt = (10)(3) = \mathbf{30\text{ m/s}}$

**Check:** $v^2 = 2gh = 2(10)(45) = 900 \implies v = 30\text{ m/s}$ ✅.

### Example 4: State after 2 Seconds

An object is dropped from rest. Determine its velocity and vertical displacement after $2\text{ seconds}$ ($g = 10\text{ m/s}^2$).

**Convention:** Downward is positive $\implies u = 0$, $a = +10\text{ m/s}^2$, $t = 2\text{ s}$.

- $v = gt = (10)(2) = \mathbf{20\text{ m/s}}$
- $h = \frac{1}{2}gt^2 = \frac{1}{2}(10)(2)^2 = 5 \times 4 = \mathbf{20\text{ m}}$

**Check:** $s = \frac{u + v}{2} \cdot t = \frac{0 + 20}{2} \times 2 = 20\text{ m}$ ✅.

### Example 5: Finding Initial Velocity and Maximum Height from Time to Peak

A projectile thrown vertically upward reaches its highest point in $3\text{ seconds}$. Find its initial velocity and maximum height ($g = 10\text{ m/s}^2$).

**Convention:** Upward is positive $\implies a = -10\text{ m/s}^2$, $v = 0$ at $t = 3\text{ s}$.

- $v = u + at \implies 0 = u - (10)(3) \implies \mathbf{u = 30\text{ m/s}}$
- $H = \frac{u^2}{2g} = \frac{30^2}{2(10)} = \frac{900}{20} = \mathbf{45\text{ m}}$

**Check:** $s = \frac{u + v}{2} \cdot t = \frac{30 + 0}{2} \times 3 = 45\text{ m}$ ✅.

### Example 6: Ball Thrown at 15 m/s Upward (g = 9.8 m/s²)

A ball is thrown upward with a speed of $15\text{ m/s}$. **Use $g = 9.8\text{ m/s}^2$ for this problem.** Calculate the maximum height and the time to reach the apex.

**Convention:** Upward is positive $\implies u = +15\text{ m/s}$, $a = -9.8\text{ m/s}^2$.

- $H = \frac{u^2}{2g} = \frac{15^2}{2 \times 9.8} = \frac{225}{19.6} \approx \mathbf{11.48\text{ m}}$
- $t = \frac{u}{g} = \frac{15}{9.8} \approx \mathbf{1.53\text{ s}}$

**Check:** $s = ut + \frac{1}{2}at^2 = (15)(1.53) - 4.9(1.53)^2 = 22.95 - 11.47 = 11.48\text{ m}$ ✅.

### Example 7: Thrown Downward from a Rooftop

A student standing on a $75\text{ m}$ tall roof throws a tennis ball **downward** with an initial speed of **$10\text{ m/s}$**. At what speed and after what time does it strike the ground? ($g = 10\text{ m/s}^2$)

**Convention:** Downward is positive $\implies u = +10\text{ m/s}$, $a = +10\text{ m/s}^2$, $s = 75\text{ m}$.

- $v^2 = u^2 + 2as = (10)^2 + 2(10)(75) = 100 + 1500 = 1600 \implies \mathbf{v = 40\text{ m/s}}$
- $t = \frac{v - u}{a} = \frac{40 - 10}{10} = \mathbf{3\text{ s}}$

**Check:** $s = ut + \frac{1}{2}at^2 = (10)(3) + 5(3)^2 = 30 + 45 = 75\text{ m}$ ✅.

### Example 8: Thrown Upward from a Rooftop, Landing on the Ground Below

From the same $75\text{ m}$ tall roof, a ball is thrown vertically **upward** at **$10\text{ m/s}$**. It misses the roof edge on its descent and falls all the way down to the ground. Find the total time of flight and the velocity upon striking the ground ($g = 10\text{ m/s}^2$).

**Convention:** Upward is positive $\implies u = +10\text{ m/s}$, $a = -10\text{ m/s}^2$.  
Because the ground lies $75\text{ m}$ below the launch point: **$s = -75\text{ m}$**.

- $s = ut + \frac{1}{2}at^2 \implies -75 = 10t - 5t^2$  
  Rearranging: $5t^2 - 10t - 75 = 0 \implies t^2 - 2t - 15 = 0$
- Factoring: $(t - 5)(t + 3) = 0 \implies \mathbf{t = 5\text{ s}}$ (since time must be positive).
- Velocity at impact:  
  $v = u + at = 10 - 10(5) = 10 - 50 = \mathbf{-40\text{ m/s}}$ (i.e., **$40\text{ m/s}$ downward**).

**Check 1:** $s = (10)(5) - 5(25) = 50 - 125 = -75\text{ m}$ ✅.  
**Check 2:** $v^2 = u^2 + 2as = 100 + 2(-10)(-75) = 100 + 1500 = 1600 \implies |v| = 40\text{ m/s}$ ✅.  
**Check 3 (Two-stage analysis):**  
- Upward stage: Time to top $t_1 = 10/10 = 1\text{ s}$. Ascent height $h_1 = 10^2 / 20 = 5\text{ m}$.  
- Downward stage from apex: Total height above ground $= 75 + 5 = 80\text{ m}$. Time to fall $80\text{ m} = \sqrt{2(80)/10} = \sqrt{16} = 4\text{ s}$.  
- Total time $= 1 + 4 = 5\text{ s}$ ✅.

Remarkable comparison: In Example 7, throwing downward at $10\text{ m/s}$ produced an impact speed of $40\text{ m/s}$. In Example 8, throwing upward at $10\text{ m/s}$ yielded the exact same impact speed of $40\text{ m/s}$! By symmetry, the upward-thrown ball returns to roof level traveling downward at $10\text{ m/s}$, making the remaining descent identical. Only the elapsed flight time differs ($5\text{ s}$ vs $3\text{ s}$).

### Example 9: Depth of a Well

A pebble is dropped from rest into a deep water well. The splash is observed after $3\text{ seconds}$. Calculate the depth of the well. (**Take $g = 9.8\text{ m/s}^2$ and assume sound propagation time is negligible.**)

**Convention:** Downward is positive $\implies u = 0$, $a = +9.8\text{ m/s}^2$, $t = 3\text{ s}$.

- $h = \frac{1}{2}gt^2 = \frac{1}{2}(9.8)(3)^2 = 4.9 \times 9 = \mathbf{44.1\text{ m}}$

**Check:** $v = gt = (9.8)(3) = 29.4\text{ m/s}$. $v^2 = 2gh = 2(9.8)(44.1) = 864.36 = (29.4)^2$ ✅.

### Example 10: Two Stones: One Dropped, One Thrown Downward

From an $80\text{ m}$ high cliff, Stone A is dropped from rest, while Stone B is thrown downward simultaneously at **$30\text{ m/s}$**. Which stone lands first, and what are their respective impact velocities? ($g = 10\text{ m/s}^2$)

**Convention:** Downward is positive, $h = 80\text{ m}$.

- **Stone A (released from rest, $u = 0$):**  
  $80 = 5t^2 \implies \mathbf{t_A = 4\text{ s}}$, $v_A = 10 \times 4 = \mathbf{40\text{ m/s}}$.
- **Stone B (thrown downward, $u = 30\text{ m/s}$):**  
  $80 = 30t + 5t^2 \implies t^2 + 6t - 16 = 0 \implies (t + 8)(t - 2) = 0 \implies \mathbf{t_B = 2\text{ s}}$.  
  $v_B = 30 + 10(2) = \mathbf{50\text{ m/s}}$.

Stone B arrives first ($2\text{ s}$ vs $4\text{ s}$) with a higher impact speed ($50\text{ m/s}$ vs $40\text{ m/s}$).

**Check:** $v_B^2 = 30^2 + 2(10)(80) = 900 + 1600 = 2500 \implies v_B = 50\text{ m/s}$ ✅.

### Example 11: Speed upon Falling 20 m

An object falls freely from rest through a vertical distance of $20\text{ m}$. Determine its speed upon impact and elapsed time ($g = 10\text{ m/s}^2$).

- $v^2 = 2gh = 2(10)(20) = 400 \implies \mathbf{v = 20\text{ m/s}}$ (equivalent to $72\text{ km/h}$).
- $t = \frac{v}{g} = \frac{20}{10} = \mathbf{2\text{ s}}$.

**Check:** $h = \frac{1}{2}gt^2 = 5(4) = 20\text{ m}$ ✅.

### Example 12 (Extra Insight): Distances in Consecutive Seconds: The 1 : 3 : 5 Ratio

For an object falling freely from rest ($h = \frac{1}{2}gt^2 = 5t^2$ with $g = 10\text{ m/s}^2$):

| Time $t$ ($\text{s}$) | Total Distance Fallen ($h = 5t^2$) | Distance in That Specific Second ($\Delta h$) |
|---|---|---|
| $1$ | $5\text{ m}$ | $5 - 0 = \mathbf{5\text{ m}}$ |
| $2$ | $20\text{ m}$ | $20 - 5 = \mathbf{15\text{ m}}$ |
| $3$ | $45\text{ m}$ | $45 - 20 = \mathbf{25\text{ m}}$ |

The ratio of distances fallen in successive equal time intervals is:
$$5 : 15 : 25 = \mathbf{1 : 3 : 5}$$
This famous odd-integer proportion ($1 : 3 : 5 : 7 \dots$) was originally discovered by Galileo Galilei and holds true for all motion starting from rest under uniform acceleration.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Forgetting the negative sign for g during ascent.**  
   *Correction:* When choosing upward as positive, downward gravity dictates $a = -g = -10\text{ m/s}^2$. Using $+10\text{ m/s}^2$ implies the ball accelerates upward faster and faster, which violates reality.

2. **Mistake 2: Stating that acceleration is zero at the highest point.**  
   *Correction:* At the apex, $v = 0$, but downward acceleration remains continuously active at $a = -g = -10\text{ m/s}^2$ (or $-9.8\text{ m/s}^2$).

3. **Mistake 3: Confusing time of ascent with total time of flight.**  
   *Correction:* The formula $t = u/g$ computes the time to reach the apex. If a question asks when the object returns to your hand, the answer is the full flight time $T = 2u/g$.

4. **Mistake 4: Mixing g = 9.8 and g = 10 within the same calculation.**  
   *Correction:* Pick the specified value and maintain it consistently throughout all steps of the solution.

5. **Mistake 5: Setting displacement s incorrectly when landing below the launch point.**  
   *Correction:* In Example 8, the ground is $75\text{ m}$ below the roof, so with upward as positive, $s = -75\text{ m}$. Setting $s = 0$ or $s = +75\text{ m}$ will give incorrect answers.

6. **Mistake 6: Assuming return speed always equals launch speed.**  
   *Correction:* Return speed equals launch speed *only* when the object returns to the exact same vertical elevation. If it falls further down to the street, it gains additional speed.

7. **Mistake 7: Accepting negative roots for time.**  
   *Correction:* Elapsed time cannot be negative in classical physics. Discard negative solutions from quadratic equations.

---

## Quick Recap

- Free fall is motion with constant downward acceleration $a = \pm g$ ($g \approx 9.8\text{ m/s}^2$ or $10\text{ m/s}^2$). Always declare your sign convention upfront: upward positive ($a = -g$) or downward positive ($a = +g$).
- **Dropped from rest ($u = 0$):** $v = gt$, $h = \frac{1}{2}gt^2$, $v^2 = 2gh$.
- **Projected upward:** Velocity decreases by $g$ each second until $v = 0$ at the apex.  
  $t_{\text{ascent}} = \frac{u}{g}$, $H = \frac{u^2}{2g}$, $T_{\text{flight}} = \frac{2u}{g}$.
- **Symmetry of flight:** Speed upon returning to launch height equals projection speed; ascent time equals descent time.
- **At the apex:** Instantaneous velocity is zero ($v = 0$), but acceleration is nonzero ($a = -g$).
- **Projectiles from rooftops:** If the ground lies below the release level, the landing displacement is negative ($s < 0$) in an upward-positive coordinate system.
- **Galileo's Odd-Number Rule:** Distances fallen during consecutive unit seconds from rest follow the ratio $1 : 3 : 5 : 7$.

---

## Practice Questions

1. A stone is dropped from a height of $125\text{ m}$. How long does it take to reach the ground and with what speed does it strike? (Take $g = 10\text{ m/s}^2$.)

2. A ball is thrown vertically upward at $40\text{ m/s}$. Find the maximum height, the time to reach the apex, and the total time of flight. ($g = 10\text{ m/s}^2$)

3. A ball thrown straight up reaches its highest point after $1.5\text{ s}$. With what speed was it thrown and how high did it go? ($g = 10\text{ m/s}^2$)

4. A stone dropped into a well hits the water after $4\text{ s}$. Find the depth of the well, ignoring the time taken by sound. ($g = 10\text{ m/s}^2$)

5. A ball is thrown vertically upward at $20\text{ m/s}$ from a $60\text{ m}$ high roof and finally lands on the ground below. Taking upward as positive, state the value of displacement $s$, and find the total time of flight and impact speed. ($g = 10\text{ m/s}^2$)

6. A stone is thrown vertically downward at $5\text{ m/s}$ from a $30\text{ m}$ high bridge. Find its landing speed and elapsed time. Is it faster or slower than a stone simply dropped from rest from the same bridge? ($g = 10\text{ m/s}^2$)

7. A stone is dropped from a height of $19.6\text{ m}$. Find the time taken and the speed on reaching the ground. (Use $g = 9.8\text{ m/s}^2$.)

8. (Extra) For a freely falling body starting from rest, find the distance covered in the 1st, 2nd, and 3rd seconds using $g = 9.8\text{ m/s}^2$, and demonstrate that they remain in the ratio $1 : 3 : 5$.

9. State True or False:  
   (a) At the highest point of a ball thrown vertically upward, its acceleration is zero.  
   (b) A ball thrown upward at $20\text{ m/s}$ and caught at the same level has a speed of $20\text{ m/s}$ when caught.  
   (c) A ball thrown upward from a roof lands on the ground below with the exact same speed with which it was thrown.

### Answers

1. Downward positive, $u = 0$, $a = +10\text{ m/s}^2$, $h = 125\text{ m}$.  
   $125 = \frac{1}{2}(10)t^2 = 5t^2 \implies t^2 = 25 \implies \mathbf{t = 5\text{ s}}$.  
   $v = gt = (10)(5) = \mathbf{50\text{ m/s}}$.  
   *Check:* $v^2 = 2gh = 2(10)(125) = 2500 \implies v = 50\text{ m/s}$ ✅

2. Upward positive, $u = 40\text{ m/s}$, $a = -10\text{ m/s}^2$.  
   $t = \frac{u}{g} = \frac{40}{10} = \mathbf{4\text{ s}}$.  
   $H = \frac{u^2}{2g} = \frac{1600}{20} = \mathbf{80\text{ m}}$.  
   Total flight time $T = 2 \times 4 = \mathbf{8\text{ s}}$.  
   *Check:* $s = (40)(8) - 5(64) = 320 - 320 = 0\text{ m}$ ✅

3. Upward positive, $v = 0$ at peak, $t = 1.5\text{ s}$.  
   $0 = u - (10)(1.5) \implies \mathbf{u = 15\text{ m/s}}$.  
   $H = \frac{u^2}{2g} = \frac{225}{20} = \mathbf{11.25\text{ m}}$.  
   *Check:* $s = \frac{15 + 0}{2} \times 1.5 = 11.25\text{ m}$ ✅

4. Downward positive, $u = 0$, $t = 4\text{ s}$.  
   $h = \frac{1}{2}gt^2 = 5(4)^2 = 5 \times 16 = \mathbf{80\text{ m}}$.  
   *Check:* $v = 10 \times 4 = 40\text{ m/s}$; $v^2 = 1600 = 2(10)(80)$ ✅

5. Upward positive, $u = +20\text{ m/s}$, $a = -10\text{ m/s}^2$, **$s = -60\text{ m}$**.  
   $-60 = 20t - 5t^2 \implies t^2 - 4t - 12 = 0 \implies (t - 6)(t + 2) = 0 \implies \mathbf{t = 6\text{ s}}$.  
   Impact velocity: $v = u + at = 20 - 10(6) = \mathbf{-40\text{ m/s}}$ ($40\text{ m/s}$ downward).  
   *Check:* $v^2 = 20^2 + 2(-10)(-60) = 400 + 1200 = 1600 \implies |v| = 40\text{ m/s}$ ✅

6. Downward positive, $u = 5\text{ m/s}$, $a = +10\text{ m/s}^2$, $s = 30\text{ m}$.  
   $v^2 = 5^2 + 2(10)(30) = 25 + 600 = 625 \implies \mathbf{v = 25\text{ m/s}}$.  
   $t = \frac{25 - 5}{10} = \mathbf{2\text{ s}}$.  
   For a dropped stone ($u = 0$): $v = \sqrt{2(10)(30)} = \sqrt{600} \approx 24.5\text{ m/s}$, and $t = 24.5/10 = 2.45\text{ s}$.  
   Therefore, the thrown stone strikes **faster ($25\text{ m/s} > 24.5\text{ m/s}$)** and reaches the ground earlier ($2\text{ s} < 2.45\text{ s}$).  
   *Check:* $s = (5)(2) + 5(4) = 10 + 20 = 30\text{ m}$ ✅

7. Downward positive, $g = 9.8\text{ m/s}^2$, $u = 0$, $h = 19.6\text{ m}$.  
   $19.6 = \frac{1}{2}(9.8)t^2 = 4.9t^2 \implies t^2 = 4 \implies \mathbf{t = 2\text{ s}}$.  
   $v = gt = (9.8)(2) = \mathbf{19.6\text{ m/s}}$.  
   *Check:* $v^2 = 2(9.8)(19.6) = (19.6)^2 \implies v = 19.6\text{ m/s}$ ✅

8. Using $g = 9.8\text{ m/s}^2$, total distance fallen is $h(t) = 4.9t^2$.  
   At $t = 1\text{ s}$: $h = 4.9(1)^2 = 4.9\text{ m}$. Distance in 1st second $= 4.9\text{ m}$.  
   At $t = 2\text{ s}$: $h = 4.9(4) = 19.6\text{ m}$. Distance in 2nd second $= 19.6 - 4.9 = 14.7\text{ m}$.  
   At $t = 3\text{ s}$: $h = 4.9(9) = 44.1\text{ m}$. Distance in 3rd second $= 44.1 - 19.6 = 24.5\text{ m}$.  
   Ratio: $4.9 : 14.7 : 24.5 = \frac{4.9}{4.9} : \frac{14.7}{4.9} : \frac{24.5}{4.9} = \mathbf{1 : 3 : 5}$ ✅.

9. (a) **False** ❌. At the apex, $v = 0$, but downward acceleration remains $a = -g = -10\text{ m/s}^2$.  
   (b) **True** ✅. By kinematic symmetry, speed at the release height equals projection speed.  
   (c) **False** ❌. The ground is further down than the roof, allowing gravity to accelerate the ball to higher speed.

---

Mr. Miller looked at his stopwatch and smiled. "Sophia, your ball's trajectory is completely solved: $20\text{ m}$ straight up, a flight time of $4\text{ seconds}$." Sophia tossed the ball again, saying: "$2\text{ seconds}$ up, $2\text{ seconds}$ down, zero velocity at the top, but gravity pulling the entire time!"

**What comes next?** So far, we have examined how objects move under acceleration $g$. But when Sophia caught the ball, she felt its heft in her hand. Why would that exact same ball feel six times lighter on the Moon? In **Topic 5**, we resolve the essential distinction between **mass and weight**.
