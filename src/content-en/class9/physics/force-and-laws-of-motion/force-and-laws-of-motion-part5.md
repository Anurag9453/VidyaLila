# Chapter: Force and Laws of Motion (Part 5)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [force-and-laws-of-motion-part4.md](force-and-laws-of-motion-part4.md)** (covering friction: static, sliding, and rolling). The chapter begins at [force-and-laws-of-motion.md](force-and-laws-of-motion.md).
> **Topics covered in this file:**
> 5. Momentum: Quantity of Motion

---

# Topic 5: Momentum: Quantity of Motion

In the previous topic, we saw that friction decelerates moving bodies and eventually brings them to a halt. In other words, **a moving body changes its velocity only when acted upon by an external force**. However, everyday experience reveals an important nuance: not all moving objects are equally difficult to stop. You can halt a rolling bicycle with a single outstretched hand, but attempting to stop a rolling 5-ton truck would be catastrophic. A fast-moving tennis ball can be caught cleanly in bare hands, but a slowly rolling steel safe cannot be stopped without heavy equipment. How difficult an object is to stop depends simultaneously on **two properties**: its **mass** and its **velocity**. The physical quantity that combines both is called **momentum**.

---

## Rugby Drills with Coach Davies and Liam

During after-school sports training, **Coach Davies** called over high school fullback **Liam** for a defensive tackling drill. "Liam, let us run a mechanics experiment on the field. Three different ball carriers will charge toward your goal line one at a time. Your job is to tackle and stop each one."

**Carrier 1:** A lightweight, nimble freshman of mass $50\text{ kg}$, sprinting fast at $3\text{ m/s}$. Liam planted his cleats, absorbed the impact, and brought the runner to an immediate halt with ease.

**Carrier 2:** A massive senior forward of mass $120\text{ kg}$, jogging forward casually at just $1.5\text{ m/s}$. The forward moved so slowly that Liam thought, "This will be effortless." But when Liam lunged to tackle him, the sheer momentum bowled Liam backward into the grass! The forward kept advancing right through the tackle.

**Carrier 3:** The exact same $120\text{ kg}$ forward, but this time charging at a full sprint of $3\text{ m/s}$. Looking at the thundering freight train of a runner, Liam wisely stepped aside and let him cross into the end zone untouched.

Coach Davies blew his whistle and chuckled. "You see, Liam? The lightweight sprinter was easy to stop. The slow heavyweight was surprisingly difficult. And the fast heavyweight was unstoppable! The stopping difficulty of a body is not determined by mass alone, nor by speed alone. It is governed by both together. In physics, we quantify this combination with a fundamental quantity called **momentum**."

---

## Key Vocabulary

| Term | Meaning (Plain English) | Example |
|---|---|---|
| **Momentum ($p$)** | The product of an object's mass and its velocity; a quantitative measure of its "quantity of motion" | $50\text{ kg} \times 3\text{ m/s} = 150\text{ kg}\cdot\text{m/s}$ |
| **Mass ($m$)** | The quantity of matter contained in an object (SI unit: kg) | $50\text{ kg}$ |
| **Velocity ($v$)** | Speed accompanied by a specified direction of travel (SI unit: m/s) | $+3\text{ m/s}$ (forward) |
| **$\text{kg}\cdot\text{m/s}$** | The standard SI unit of momentum | $150\text{ kg}\cdot\text{m/s}$ |
| **Change in Momentum** | Final momentum minus initial momentum: $\Delta p = m(v - u)$ | A $1000\text{ kg}$ car speeding up from $10$ to $20\text{ m/s}$: $10{,}000\text{ kg}\cdot\text{m/s}$ |
| **Positive / Negative Momentum** | Momentum directed along a chosen forward axis is $+$; along the reverse axis is $-$ | A ball rebounding to the left: $-2\text{ kg}\cdot\text{m/s}$ |

---

## Part A: What is Momentum and How Do We Calculate It?

Liam's tackling drill illustrates a fundamental rule of nature: increasing mass makes a body harder to stop, and increasing velocity also makes it harder to stop. Physicists therefore define momentum as the direct **product of mass and velocity**:

> $$\text{Momentum} = \text{mass} \times \text{velocity}$$  
> $$p = m \times v$$

Where:
- $p$ = momentum
- $m$ = mass (in kilograms, $\text{kg}$)
- $v$ = velocity (in meters per second, $\text{m/s}$)

**SI Unit:** Because mass is measured in $\text{kg}$ and velocity in $\text{m/s}$, the SI unit of momentum is:
> $$\text{kg} \times \text{m/s} = \mathbf{kg\cdot m/s}$$  
> *(Note: This can also be expressed as newton-seconds, $\text{N}\cdot\text{s}$, as we will establish in Topic 6).*

### Momentum is a Vector Quantity

Because velocity is a vector possessing both magnitude and direction, **momentum is also a vector quantity**. 

> **The direction of an object's momentum is identical to the direction of its velocity.**

Along a straight horizontal line, we choose one direction as **positive ($+$)** (e.g., right or forward) and the opposing direction as **negative ($-$)** (e.g., left or backward).

### Momentum of a Stationary Object is Zero

If an object is at rest, its velocity is zero ($v = 0$). Consequently:
$$p = m \times 0 = \mathbf{0\text{ kg}\cdot m/s}$$

No matter how colossal an object's mass—whether a 10,000-ton cargo vessel or a 50-story skyscraper—if it is stationary, its momentum is **identically zero**. Momentum exists only when mass is in motion.

### Is Mass Alone or Speed Alone Enough?

Let us tabulate all four combinations of mass and speed, including our three rugby carriers plus a fourth baseline (light and slow):

| Ball Carrier | Mass ($m$) | Speed ($v$) | Momentum ($p = m \times v$) |
|---|---|---|---|
| Light & Slow | $50\text{ kg}$ | $1.5\text{ m/s}$ | $50 \times 1.5 = \mathbf{75\text{ kg}\cdot m/s}$ |
| Light & Fast (Carrier 1) | $50\text{ kg}$ | $3\text{ m/s}$ | $50 \times 3 = \mathbf{150\text{ kg}\cdot m/s}$ |
| Heavy & Slow (Carrier 2) | $120\text{ kg}$ | $1.5\text{ m/s}$ | $120 \times 1.5 = \mathbf{180\text{ kg}\cdot m/s}$ |
| Heavy & Fast (Carrier 3) | $120\text{ kg}$ | $3\text{ m/s}$ | $120 \times 3 = \mathbf{360\text{ kg}\cdot m/s}$ |

**Verification:**  
$50 \times 1.5 = 75$ ✅; $50 \times 3 = 150$ ✅; $120 \times 1.5 = 180$ ✅; $120 \times 3 = 360$ ✅

The quantitative reason for Liam's experience is now crystal clear:
- Liam stopped Carrier 1 because his momentum was a manageable **150 kg·m/s**.
- Carrier 2 possessed a momentum of **180 kg·m/s**. Even though he ran at only half the speed, his massive mass gave him greater momentum than Carrier 1 ($180 > 150$), bowling Liam over.
- Carrier 3 possessed an enormous momentum of **360 kg·m/s**—exactly double Carrier 2 and $2.4\text{ times}$ Carrier 1 ($360 \div 150 = 2.4$).

```
  Light, fast:     [ 50 kg ] =======>      p = 150 kg·m/s

  Heavy, slow:     [   120 kg   ] ==>      p = 180 kg·m/s

  Heavy, fast:     [   120 kg   ] =======> p = 360 kg·m/s
```

> **Figure 5.1** – The three rugby runners: box width represents mass; arrow length represents velocity. Carrier 3 combines both high mass and high speed to yield the greatest momentum.

### Example 1 (Calculating Momentum)

A delivery truck of mass $1200\text{ kg}$ travels along a straight road at $15\text{ m/s}$. Calculate its momentum.
$$p = m \times v = 1200\text{ kg} \times 15\text{ m/s} = \mathbf{18{,}000\text{ kg}\cdot m/s}$$
- **Check:** $18{,}000\text{ kg}\cdot\text{m/s} \div 15\text{ m/s} = 1200\text{ kg}$ ✅

### Example 2 (Comparing Two Moving Objects)

A cyclist and bicycle have a combined mass of $60\text{ kg}$ cruising at $5\text{ m/s}$. A motor scooter and rider have a combined mass of $120\text{ kg}$ cruising at $3\text{ m/s}$. Which has greater momentum?
- Cyclist: $p_1 = 60\text{ kg} \times 5\text{ m/s} = \mathbf{300\text{ kg}\cdot m/s}$
- Motor scooter: $p_2 = 120\text{ kg} \times 3\text{ m/s} = \mathbf{360\text{ kg}\cdot m/s}$
- The **motor scooter** has greater momentum ($360 > 300$), making it more difficult to stop, even though the cyclist traveled faster.
- **Check:** $60 \times 5 = 300$ ✅; $120 \times 3 = 360$ ✅

### Example 3 (Finding Velocity from Momentum and Mass)

An automobile of mass $1500\text{ kg}$ possesses a linear momentum of $3000\text{ kg}\cdot\text{m/s}$. What is its velocity?
$$v = \frac{p}{m} = \frac{3000\text{ kg}\cdot\text{m/s}}{1500\text{ kg}} = \mathbf{2\text{ m/s}}$$
- **Check:** $1500\text{ kg} \times 2\text{ m/s} = 3000\text{ kg}\cdot\text{m/s}$ ✅

### Example 4 (A Lightweight Bullet vs. a Massive Freight Truck)

A rifle bullet has a tiny mass of $0.01\text{ kg}$ (10 g) fired at a muzzle velocity of $400\text{ m/s}$. A loaded commercial truck has a mass of $5000\text{ kg}$ crawling at a parking speed of $5\text{ m/s}$ (approx $18\text{ km/h}$). Which possesses greater momentum?
- Bullet: $p_{\text{bullet}} = 0.01\text{ kg} \times 400\text{ m/s} = \mathbf{4\text{ kg}\cdot m/s}$
- Truck: $p_{\text{truck}} = 5000\text{ kg} \times 5\text{ m/s} = \mathbf{25{,}000\text{ kg}\cdot m/s}$
- The truck's momentum is larger by a factor of:
  $$\frac{25{,}000\text{ kg}\cdot\text{m/s}}{4\text{ kg}\cdot\text{m/s}} = \mathbf{6250\text{ times}}$$
- **Check:** $0.01 \times 400 = 4$ ✅; $5000 \times 5 = 25{,}000$ ✅; $4 \times 6250 = 25{,}000$ ✅
- **Takeaway:** Even though the bullet traveled 80 times faster ($400 \div 5 = 80$), the truck was 500,000 times more massive ($5000 \div 0.01 = 500{,}000$). The enormous mass difference overwhelmingly dominates the momentum comparison.

---

## Part B: Direction and Sign Conventions (+ and −)

Let the horizontal direction to the right be designated as **positive ($+$)**:

| Scenario | Mass ($m$) | Velocity ($v$) | Momentum ($p = mv$) |
|---|---|---|---|
| Ball moving to the right | $0.2\text{ kg}$ | $+10\text{ m/s}$ | $0.2 \times (+10) = \mathbf{+2\text{ kg}\cdot m/s}$ |
| Ball moving to the left | $0.2\text{ kg}$ | $-10\text{ m/s}$ | $0.2 \times (-10) = \mathbf{-2\text{ kg}\cdot m/s}$ |
| Stationary ball | $0.2\text{ kg}$ | $0\text{ m/s}$ | $0.2 \times 0 = \mathbf{0\text{ kg}\cdot m/s}$ |

Both moving balls possess identical **magnitude** ($2\text{ kg}\cdot\text{m/s}$), but opposite directions. The negative sign signifies orientation, not a deficit. A momentum of $-5\text{ kg}\cdot\text{m/s}$ has a larger physical magnitude ($5 > 3$) than $+3\text{ kg}\cdot\text{m/s}$, acting in the reverse direction.

### Change in Momentum: m(v − u)

When an object accelerates or decelerates, its velocity changes from initial velocity $u$ to final velocity $v$. Its momentum changes accordingly:

> $$\text{Change in Momentum } (\Delta p) = \text{Final Momentum} - \text{Initial Momentum}$$  
> $$\Delta p = mv - mu = m(v - u)$$

### Example 5 (A Vehicle Accelerating)

A sedan of mass $1000\text{ kg}$ accelerates forward along a straight road from $10\text{ m/s}$ to $20\text{ m/s}$. Find the change in momentum.
- Initial momentum: $p_i = 1000\text{ kg} \times 10\text{ m/s} = +10{,}000\text{ kg}\cdot\text{m/s}$
- Final momentum: $p_f = 1000\text{ kg} \times 20\text{ m/s} = +20{,}000\text{ kg}\cdot\text{m/s}$
- $\Delta p = p_f - p_i = 20{,}000 - 10{,}000 = \mathbf{+10{,}000\text{ kg}\cdot m/s}$
- Or via formula: $\Delta p = m(v - u) = 1000\text{ kg} \times (20 - 10)\text{ m/s} = \mathbf{10{,}000\text{ kg}\cdot m/s}$
- **Check:** $10{,}000 + 10{,}000 = 20{,}000$ ✅

### Example 6 (A Vehicle Braking to Rest)

A compact car of mass $800\text{ kg}$ travels at $15\text{ m/s}$ forward ($+$). The driver applies brakes, bringing the car to a complete stop. Find the change in momentum.
- Initial momentum: $p_i = 800\text{ kg} \times (+15\text{ m/s}) = +12{,}000\text{ kg}\cdot\text{m/s}$
- Final momentum: $p_f = 800\text{ kg} \times 0\text{ m/s} = 0\text{ kg}\cdot\text{m/s}$
- $\Delta p = p_f - p_i = 0 - 12{,}000 = \mathbf{-12{,}000\text{ kg}\cdot m/s}$
- The negative sign indicates a loss of forward momentum.
- **Check:** $+12{,}000 + (-12{,}000) = 0$ ✅

### A Ball Rebounding from a Wall

Consider a tennis ball moving to the right ($+$) striking a solid concrete wall and rebounding directly to the left ($-$) at the exact same speed. While speed is unchanged, **velocity has reversed sign**, meaning the change in momentum is non-zero—in fact, it **doubles**!

```
         Rightward direction (+) ---->

   [ Ball ] --------> | Wall
   Before collision:    u = +4 m/s    p_i = +2 kg·m/s

   [ Ball ] <-------- | Wall
   After collision:     v = -4 m/s    p_f = -2 kg·m/s
```

> **Figure 5.2** – A ball rebounding from a wall: speed remains 4 m/s, but direction reverses from $+4\text{ m/s}$ to $-4\text{ m/s}$, producing a total momentum change of magnitude $2mv$.

### Example 7 (Ball Rebounding from a Wall)

A rubber ball of mass $0.5\text{ kg}$ strikes a wall horizontally at $+4\text{ m/s}$ and rebounds with an equal speed of $4\text{ m/s}$ in the opposite direction ($-4\text{ m/s}$). Find the change in momentum.
- $u = +4\text{ m/s}$; $v = -4\text{ m/s}$
- $p_i = 0.5\text{ kg} \times (+4\text{ m/s}) = +2\text{ kg}\cdot\text{m/s}$
- $p_f = 0.5\text{ kg} \times (-4\text{ m/s}) = -2\text{ kg}\cdot\text{m/s}$
- $\Delta p = p_f - p_i = -2 - (+2) = \mathbf{-4\text{ kg}\cdot m/s}$
- Magnitude of change = $\mathbf{4\text{ kg}\cdot m/s}$ (equal to $2mv = 2 \times 0.5 \times 4$).
- **Check:** $+2\text{ kg}\cdot\text{m/s} + (-4\text{ kg}\cdot\text{m/s}) = -2\text{ kg}\cdot\text{m/s}$ ✅
- Notice: If the ball had struck the wall and stuck dead ($v = 0$), the momentum change would be only $2\text{ kg}\cdot\text{m/s}$. Rebounding creates twice the momentum change!

### Example 8 (Bat Striking a Ball in the Opposite Direction)

A baseball of mass $0.2\text{ kg}$ approaches the plate toward the left at $10\text{ m/s}$ ($-10\text{ m/s}$). The batter drives it back toward the right at $15\text{ m/s}$ ($+15\text{ m/s}$). Find the change in momentum.
- $u = -10\text{ m/s}$; $v = +15\text{ m/s}$
- $p_i = 0.2\text{ kg} \times (-10\text{ m/s}) = -2\text{ kg}\cdot\text{m/s}$
- $p_f = 0.2\text{ kg} \times (+15\text{ m/s}) = +3\text{ kg}\cdot\text{m/s}$
- $\Delta p = p_f - p_i = +3 - (-2) = \mathbf{+5\text{ kg}\cdot m/s}$
- **Check:** $-2 + 5 = +3$ ✅. Because the direction reversed, the magnitude of the change is the sum of magnitudes ($2 + 3 = 5$).

---

## Part C: Greater Momentum Requires Greater Stopping Effort

To bring a moving body to rest, its momentum must be reduced to zero. Reducing momentum requires applying an external force over time. The larger the momentum, the **greater the force required** or the **longer the time interval needed** to halt the body safely.

This core intuition underpins many everyday engineering and athletic techniques:

### 1. Catching a Fast Cricket or Baseball: Pulling Hands Back

A leather cricket or baseball of mass $0.16\text{ kg}$ flies toward a fielder at $25\text{ m/s}$.  
$$\text{Momentum} = 0.16\text{ kg} \times 25\text{ m/s} = 4\text{ kg}\cdot\text{m/s}$$  
To complete the catch, this $4\text{ kg}\cdot\text{m/s}$ of momentum must drop to zero.

If the fielder holds his hands rigid and motionless, the ball stops abruptly in an extremely brief contact time (say, $0.01\text{ s}$). The resulting impact force is severe and painful, often bruising fingers or popping out of the grasp. 

If the fielder **draws his hands backward** in the line of the ball's motion while catching, the contact time increases substantially (say, to $0.2\text{ s}$—a twenty-fold increase). While the total change in momentum remains identical ($4\text{ kg}\cdot\text{m/s}$), stretching the deceleration time dramatically reduces the stinging impact force.

```
 Rigid hands:      Ball ===> [Hands]            Tiny time -> Massive impact force

 Pulling back:     Ball ===> [Hands] --> -->    Extended time -> Gentle cushioned force
```

> **Figure 5.3** – Pulling hands backward increases stopping time, significantly reducing the impact force delivered by the ball's momentum change.

### 2. High Jumpers Landing on a Sand or Foam Pit

When a high jumper drops from a height of over two meters, downward gravitational acceleration imparts high momentum. Halting this momentum against hard concrete in a fraction of a millisecond would shatter bones. Thick foam mats or soft sand beds compress under the athlete, prolonging the deceleration time and reducing the impact force to a safe level.

### 3. Automobile Airbags and Crumple Zones

During a vehicle crash, a passenger's body carries substantial forward momentum that must be halted. If an occupant strikes a rigid steering wheel or windshield, deceleration occurs almost instantaneously, inflicting fatal trauma. 
- **Airbags** inflate rapidly into a soft, yielding cushion, prolonging the stopping duration.
- **Crumple zones** in modern vehicle chassis intentionally collapse accordion-style on impact, absorbing energy and stretching the collision duration.

### 4. Braking a Heavy Freight Truck

Because a loaded freight truck has massive mass and colossal momentum, bringing it to a stop requires immense braking force applied over long distances. Sudden stops are physically impossible. Highway engineers build dedicated gravel "runaway truck ramps" on steep mountain declines so runaway trucks with failing brakes can coast into deep gravel beds to halt gradually without rolling over.

---

## Part D: Complete Solution to Liam's Rugby Puzzle

Now let us revisit Coach Davies's tackling drill with numerical rigor:

**Example 9 (The Three Drill Carriers):**
- Carrier 1: $p_1 = 50\text{ kg} \times 3\text{ m/s} = \mathbf{150\text{ kg}\cdot m/s}$
- Carrier 2: $p_2 = 120\text{ kg} \times 1.5\text{ m/s} = \mathbf{180\text{ kg}\cdot m/s}$
- Carrier 3: $p_3 = 120\text{ kg} \times 3\text{ m/s} = \mathbf{360\text{ kg}\cdot m/s}$

Liam's tackling capacity was sufficient to halt $150\text{ kg}\cdot\text{m/s}$, but when faced with $180\text{ kg}\cdot\text{m/s}$ or $360\text{ kg}\cdot\text{m/s}$, the momentum of the ball carrier exceeded his stopping capability. The ranking of momentum:
$$150\text{ kg}\cdot\text{m/s} < 180\text{ kg}\cdot\text{m/s} < 360\text{ kg}\cdot\text{m/s}$$

**Example 10 (Fast-Light vs. Slow-Heavy):**
Suppose an agile $40\text{ kg}$ winger sprints at $4\text{ m/s}$, while a $70\text{ kg}$ forward trots at $2\text{ m/s}$. Which has more momentum?
- $40\text{ kg}$ winger: $p = 40\text{ kg} \times 4\text{ m/s} = \mathbf{160\text{ kg}\cdot m/s}$
- $70\text{ kg}$ forward: $p = 70\text{ kg} \times 2\text{ m/s} = \mathbf{140\text{ kg}\cdot m/s}$
- In this matchup, the **lighter, faster runner** has greater momentum ($160 > 140$). Never assume that the heavier body automatically has more momentum—always calculate the product $m \times v$!
- **Check:** $40 \times 4 = 160$ ✅; $70 \times 2 = 140$ ✅

---

## Common Pitfalls to Avoid

1. **Mistake 1: Substituting weight in newtons instead of mass in kilograms.**  
   Momentum is $p = mv$, using **mass in kg**. If a problem states an object's weight is 500 N, you must first convert to mass (approx $50\text{ kg}$) before multiplying by velocity.

2. **Mistake 2: Ignoring vector signs in directional changes.**  
   If a $0.2\text{ kg}$ ball rebounds to the left at $10\text{ m/s}$, its momentum is **$-2\text{ kg}\cdot\text{m/s}$**, not $+2$. Omitting the negative sign ruins collision and rebound calculations.

3. **Mistake 3: Confusing the units of momentum ($\text{kg}\cdot\text{m/s}$) with force ($\text{N}$).**  
   Momentum is $\text{kg}\cdot\text{m/s}$. Force is $\text{N}$ (which equals $\text{kg}\cdot\text{m/s}^2$). Never write "momentum is 18,000 N."

4. **Mistake 4: Believing heavy objects always have more momentum than lighter ones.**  
   As demonstrated in Example 10, a light, high-speed sprinter can easily possess greater momentum than a heavy, slow-moving object.

5. **Mistake 5: Assuming momentum change is zero when speed is unchanged after a bounce.**  
   When a ball bounces back at identical speed, velocity flips sign ($+u$ to $-u$). The change in momentum is $\Delta p = -mu - (+mu) = \mathbf{-2mu}$, never zero!

6. **Mistake 6: Reversing the order of initial and final velocities in $\Delta p$.**  
   Always calculate $\Delta p = m(v - u)$ = **final minus initial**. When a car slows to a halt, $\Delta p = m(0 - u) = -mu$.

---

## Quick Recap

- **Momentum ($p = mv$)** is the product of an object's mass and its velocity. It measures the quantity of motion and how difficult an object is to stop.
- **SI unit:** $\mathbf{kg\cdot m/s}$.
- Momentum is a **vector** pointing in the direction of velocity. Collinear momentum is designated $+$ or $-$.
- A stationary body ($v = 0$) has **zero momentum**, regardless of its mass.
- Change in momentum: $\mathbf{\Delta p = m(v - u)} = p_{\text{final}} - p_{\text{initial}}$.
- When an object rebounds at the same speed in the opposite direction, the magnitude of momentum change is **$2mv$**, not zero.
- Halting a large momentum requires either a **large force** or an **extended time**. That is why fielders pull their hands back when catching balls, athletes land on cushioned pits, and vehicles feature airbags and crumple zones.

---

## Practice Questions

1. A delivery truck of mass 2000 kg moves at a steady velocity of 12 m/s. Calculate its momentum.

2. A cricket ball of mass 0.15 kg is bowled at 30 m/s. Calculate its momentum.

3. The momentum of a track athlete is recorded as 90 kg·m/s. If the runner's mass is 45 kg, determine their velocity.

4. A motorcycle of mass 200 kg increases its speed from 5 m/s to 15 m/s along a straight level road. Calculate the change in its momentum.

5. A rubber ball of mass 0.4 kg strikes a smooth vertical wall at 5 m/s and rebounds horizontally with the same speed. Taking the direction toward the wall as positive, determine: (a) initial momentum, (b) final momentum, and (c) the change in momentum.

6. A middle-distance runner of mass 60 kg runs at 8 m/s. An automobile of mass 1500 kg creeps forward in traffic at 0.5 m/s. Which has greater momentum? Show your complete calculation.

7. A passenger car of mass 900 kg traveling at 20 m/s is brought to a complete halt by its disc brakes. Find the change in its momentum. Explain whether this value is positive or negative.

8. State whether each statement is True or False:  
   (a) The linear momentum of an object at rest is zero.  
   (b) The standard SI unit of momentum is the newton (N).  
   (c) A heavier object always possesses greater momentum than a lighter object.  
   (d) An object moving toward the left has negative momentum if rightward motion is defined as positive.  

9. Explain using the physics of momentum why a baseball catcher wears a padded glove and draws their hand backward when receiving a fastball. Why do modern automobiles incorporate inflatable airbags?

10. During tackling practice, Liam must choose between halting Defender A (mass 80 kg, moving at 2.5 m/s) or Defender B (mass 55 kg, sprinting at 4 m/s). Which defender is harder to stop, and why?

### Answers

1. $p = m \times v = 2000\text{ kg} \times 12\text{ m/s} = \mathbf{24{,}000\text{ kg}\cdot m/s}$.  
   **Check:** $24{,}000 \div 12 = 2000$ ✅

2. $p = 0.15\text{ kg} \times 30\text{ m/s} = \mathbf{4.5\text{ kg}\cdot m/s}$.  
   **Check:** $4.5 \div 30 = 0.15$ ✅

3. $v = \frac{p}{m} = \frac{90\text{ kg}\cdot\text{m/s}}{45\text{ kg}} = \mathbf{2\text{ m/s}}$.  
   **Check:** $45 \times 2 = 90$ ✅

4. Initial momentum: $p_i = 200\text{ kg} \times 5\text{ m/s} = 1000\text{ kg}\cdot\text{m/s}$.  
   Final momentum: $p_f = 200\text{ kg} \times 15\text{ m/s} = 3000\text{ kg}\cdot\text{m/s}$.  
   $\Delta p = 3000 - 1000 = \mathbf{2000\text{ kg}\cdot m/s}$ (or $\Delta p = 200 \times (15 - 5) = 2000\text{ kg}\cdot\text{m/s}$).  
   **Check:** $1000 + 2000 = 3000$ ✅

5.  
   (a) Initial: $p_i = 0.4\text{ kg} \times (+5\text{ m/s}) = \mathbf{+2\text{ kg}\cdot m/s}$.  
   (b) Final: $p_f = 0.4\text{ kg} \times (-5\text{ m/s}) = \mathbf{-2\text{ kg}\cdot m/s}$.  
   (c) Change: $\Delta p = p_f - p_i = -2 - (+2) = \mathbf{-4\text{ kg}\cdot m/s}$ (Magnitude: $4\text{ kg}\cdot\text{m/s}$).  
   **Check:** $+2 + (-4) = -2$ ✅

6.  
   - Runner: $p_1 = 60\text{ kg} \times 8\text{ m/s} = 480\text{ kg}\cdot\text{m/s}$.  
   - Car: $p_2 = 1500\text{ kg} \times 0.5\text{ m/s} = 750\text{ kg}\cdot\text{m/s}$.  
   - The **car** has greater momentum ($750 > 480$) because its massive mass outweighs the runner's speed advantage.  
   **Check:** $60 \times 8 = 480$ ✅; $1500 \times 0.5 = 750$ ✅

7. Initial: $p_i = 900\text{ kg} \times (+20\text{ m/s}) = +18{,}000\text{ kg}\cdot\text{m/s}$.  
   Final: $p_f = 0\text{ kg}\cdot\text{m/s}$.  
   $\Delta p = 0 - 18{,}000 = \mathbf{-18{,}000\text{ kg}\cdot m/s}$.  
   The change is **negative** because the forward momentum of the car was reduced to zero by an opposing braking force.  
   **Check:** $18{,}000 + (-18{,}000) = 0$ ✅

8.  
   (a) **True** ✅ ($v = 0 \implies p = m \times 0 = 0$).  
   (b) **False** ❌ (The SI unit of momentum is $\text{kg}\cdot\text{m/s}$; the newton is the unit of force).  
   (c) **False** ❌ (A slow heavy object can have less momentum than a fast light object).  
   (d) **True** ✅ (Momentum inherits the direction and sign of velocity).  

9. To catch a ball, its momentum must be brought to zero. Pulling hands backward extends the deceleration time interval. By spreading momentum change over a longer duration, the impact force on the hands is significantly reduced. In automobile collisions, airbags cushion the occupant, increasing the stopping time and dramatically reducing injury-causing impact forces.

10.  
    - Defender A: $p_A = 80\text{ kg} \times 2.5\text{ m/s} = \mathbf{200\text{ kg}\cdot m/s}$.  
    - Defender B: $p_B = 55\text{ kg} \times 4\text{ m/s} = \mathbf{220\text{ kg}\cdot m/s}$.  
    - **Defender B is harder to stop** because he carries greater momentum ($220 > 200$). His high sprint velocity more than compensates for his lighter mass.  
    **Check:** $80 \times 2.5 = 200$ ✅; $55 \times 4 = 220$ ✅

---

You now appreciate why Liam found the slow heavyweight forward harder to halt than the fast lightweight runner: momentum combines both mass and speed!

**What's next?** We observed that changing an object's momentum requires applying a force over time. What is the precise mathematical formula connecting force and the rate of change of momentum? Isaac Newton formulated this cornerstone of mechanics in **Newton's Second Law of Motion: $F = ma$**, which we explore in Topic 6!
