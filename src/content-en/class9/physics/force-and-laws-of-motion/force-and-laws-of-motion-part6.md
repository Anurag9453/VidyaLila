# Chapter: Force and Laws of Motion (Part 6)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [force-and-laws-of-motion-part5.md](force-and-laws-of-motion-part5.md)** (covering momentum $p = mv$, unit $\text{kg}\cdot\text{m/s}$, and change in momentum $m(v - u)$). The chapter begins at [force-and-laws-of-motion.md](force-and-laws-of-motion.md). For acceleration and kinematic equations, see [motion-part4.md](../motion/motion-part4.md) and [motion-part6.md](../motion/motion-part6.md).
> **Topics covered in this file:**
> 6. Newton's Second Law of Motion: F = ma

---

# Topic 6: Newton's Second Law of Motion: F = ma

In the previous topic, we introduced momentum ($p = mv$) and observed an important qualitative principle: halting an object with large momentum requires **either a large force or an extended time**. In this topic, we transform that intuitive observation into one of the most powerful quantitative formulas in all of physics: **Newton's Second Law of Motion ($F = ma$)**. This law allows us to calculate precisely how much an object's velocity will change when subjected to a given force.

---

## Ms. Gable, Leo, and the Supermarket Shopping Carts

On a busy Saturday afternoon, **Leo** accompanied his mother to the local supermarket. While his mother stood at the customer service desk, Leo waited near the entrance where the store manager, **Ms. Gable**, was organizing the lines of metal shopping carts.

"Excuse me, Ms. Gable, may I test-drive one of these carts?" Leo asked politely.

Ms. Gable smiled. "Take this empty one first, Leo. Give it a gentle push."

Leo applied a light shove to the handles. To his surprise, the empty cart **shot forward rapidly**, accelerating so swiftly that he had to jog to catch up. He laughed in delight.

Next, Ms. Gable pointed to a cart parked nearby, heavily laden with sacks of flour, jugs of cooking oil, water bottles, and canned goods. "Now, give this loaded cart the exact same gentle push."

Leo pushed with the identical effort. The heavy cart barely gave a slow, sluggish shudder, creeping forward only a few centimeters. "Wow, this one is stubborn!" Leo grunted, leaning into the cart with extra muscle to get it rolling.

"Now try one more experiment," Ms. Gable suggested. "Take the empty cart again, but this time, **shove it with all your strength**."

Leo planted his feet and shoved hard. The empty cart surged forward with such explosive acceleration that Ms. Gable had to reach out and catch the front frame before it struck a display rack.

Leo rubbed his chin. "So when I push harder, the cart accelerates much faster. But when the cart is loaded down with groceries, that same push produces barely any acceleration at all!"

"Exactly," Ms. Gable replied. "Isaac Newton captured that exact relationship in one clean mathematical equation. By knowing the applied force and the mass of the cart, you can predict its acceleration down to the exact decimal." Let us derive that equation and analyze the shopping cart with numerical precision.

---

## Key Vocabulary

| Term | Meaning (Plain English) | Example |
|---|---|---|
| **Net Force ($F_{\text{net}}$)** | The vector sum of all forces acting on an object; this unbalanced resultant produces acceleration | $50\text{ N}$ forward minus $30\text{ N}$ friction: $20\text{ N}$ forward |
| **Newton (N)** | The SI unit of force: $1\text{ N} = 1\text{ kg}\cdot\text{m/s}^2$ | A $10\text{ N}$ force accelerates a $5\text{ kg}$ body at $2\text{ m/s}^2$ |
| **Acceleration ($a$)** | The rate of change of velocity with respect to time: $a = \frac{v - u}{t}$ | $2\text{ m/s}^2$ |
| **Mass ($m$)** | The quantity of matter contained in an object (measured in kilograms, $\text{kg}$) | Empty cart: $10\text{ kg}$ |
| **Deceleration / Retardation** | Acceleration acting opposite to the direction of motion, decreasing speed | $-5\text{ m/s}^2$ |
| **Rate of Change of Momentum** | The change in momentum per unit time: $\frac{m(v - u)}{t}$ | $0.16 \times \frac{0 - 25}{0.01} = -400\text{ N}$ |

---

## Part A: Statement of the Law

> **Newton's Second Law of Motion:** The **rate of change of momentum** of an object is **directly proportional** to the applied **unbalanced force**, and this change occurs in the **direction in which the force acts**.

In plain terms:
- A **larger unbalanced force** produces a **faster change in momentum**.
- The change in motion occurs in the **exact direction** of the applied force.
- "Directly proportional" means that doubling the net force doubles the rate of momentum change; halving the force halves the rate.

---

## Part B: Derivation of the Formula

Consider a body of mass $m$ traveling along a straight line with an initial velocity $u$. A constant unbalanced force $F$ acts on it for a time interval $t$, changing its velocity to $v$.

From our study of momentum in Topic 5:
- Initial linear momentum: $p_i = mu$
- Final linear momentum: $p_f = mv$
- Total change in momentum: $\Delta p = mv - mu = m(v - u)$
- Rate of change of momentum:  
  $$\text{Rate} = \frac{\Delta p}{t} = \frac{m(v - u)}{t}$$

According to Newton's Second Law:  
$$F \propto \frac{m(v - u)}{t}$$

From kinematics (Chapter 8), recall the definition of acceleration:  
$$a = \frac{v - u}{t}$$

Substituting $a$ into our proportionality gives:  
$$F \propto m \times a$$

To convert this proportionality into an equality, we introduce a constant of proportionality, $k$:  
$$F = k \cdot m \cdot a$$

### **F = ma**

To establish a coherent metric system, physicists **defined the unit of force** such that the constant $k$ equals $1$. Specifically:
> **One unit of force (1 newton) is defined as the force that produces an acceleration of $1\text{ m/s}^2$ in an object of mass $1\text{ kg}$.**

Substituting $F = 1\text{ N}$, $m = 1\text{ kg}$, and $a = 1\text{ m/s}^2$ into $F = kma$:  
$$1 = k \cdot (1) \cdot (1) \implies k = 1$$

With $k = 1$, the fundamental equation of Newtonian dynamics becomes:

> $$F = ma$$

Where:
- $F$ = Net unbalanced external force (in newtons, $\text{N}$)
- $m$ = Mass of the object (in kilograms, $\text{kg}$)
- $a$ = Acceleration of the object (in meters per second squared, $\text{m/s}^2$)

### The Definition of the Newton (N)

> **One newton (1 N) is that force which, when acting upon a mass of 1 kg, produces an acceleration of $1\text{ m/s}^2$ in the direction of the force.**

$$1\text{ N} = 1\text{ kg} \times 1\text{ m/s}^2 = 1\text{ kg}\cdot\text{m/s}^2$$

**Everyday Intuition:** As introduced in Topic 1, 1 N is approximately the downward gravitational pull experienced by a small apple of mass roughly **100 g** (0.1 kg) resting in your hand.

---

## Part C: Three Forms of One Master Equation

The equation $F = ma$ can be rearranged algebraically into three equivalent working forms:

| Quantity to Find | Algebraic Form | When to Use |
|---|---|---|
| **Force** | $$F = ma$$ | Mass ($m$) and acceleration ($a$) are known |
| **Acceleration** | $$a = \frac{F}{m}$$ | Net force ($F$) and mass ($m$) are known |
| **Mass** | $$m = \frac{F}{a}$$ | Net force ($F$) and acceleration ($a$) are known |

```
         F = m x a
        /    |    \
       /     |     \
    F = ma  a = F/m  m = F/a
```

> **Figure 6.1** – The dynamic triangle for $F = ma$: cover the unknown quantity to reveal the governing relationship among the remaining two.

### Physical Meaning of a = F / m (The Shopping Cart Insight)

Analyzing $a = \frac{F}{m}$ reveals two fundamental truths:
1. **$a \propto F$ (at constant mass):** Acceleration is directly proportional to applied force. Doubling the force doubles the acceleration (Leo shoving the empty cart with double force).
2. **$a \propto \frac{1}{m}$ (at constant force):** Acceleration is inversely proportional to mass. Increasing mass fourfold cuts acceleration to one-fourth (Leo pushing the grocery-loaded cart).

**Direction:** Acceleration always occurs in the **exact direction of the net force**. If you push a cart forward, it accelerates forward. If you apply reverse brakes, the acceleration points backward (producing deceleration).

---

## Part D: Analyzing the Shopping Cart with Numbers

Let the empty shopping cart have a mass of **10 kg**, and the cart laden with groceries have a mass of **40 kg**. Initially, let Leo apply a moderate horizontal push of **20 N** to each (neglecting wheel friction for now):

- **Empty Cart:**  
  $$a = \frac{F}{m} = \frac{20\text{ N}}{10\text{ kg}} = \mathbf{2\text{ m/s}^2}$$
- **Loaded Cart:**  
  $$a = \frac{F}{m} = \frac{20\text{ N}}{40\text{ kg}} = \mathbf{0.5\text{ m/s}^2}$$

Now compare what happens when Leo applies a forceful shove of **40 N**:

| Cart Status | Mass ($m$) | Applied Push ($F$) | Resulting Acceleration ($a = F/m$) |
|---|---|---|---|
| Empty | $10\text{ kg}$ | $20\text{ N}$ | $\mathbf{2\text{ m/s}^2}$ |
| Empty | $10\text{ kg}$ | $40\text{ N}$ | $\mathbf{4\text{ m/s}^2}$ |
| Loaded | $40\text{ kg}$ | $20\text{ N}$ | $\mathbf{0.5\text{ m/s}^2}$ |
| Loaded | $40\text{ kg}$ | $40\text{ N}$ | $\mathbf{1\text{ m/s}^2}$ |

**Key Insights:**
- Rows 1 & 2 ($m = 10\text{ kg}$): Doubling force from $20\text{ N}$ to $40\text{ N}$ doubles acceleration from $2\text{ m/s}^2$ to $4\text{ m/s}^2$.
- Rows 3 & 4 ($m = 40\text{ kg}$): Doubling force doubles acceleration from $0.5\text{ m/s}^2$ to $1\text{ m/s}^2$.
- Rows 1 & 3 ($F = 20\text{ N}$): Increasing mass by a factor of 4 ($10\text{ kg} \rightarrow 40\text{ kg}$) reduces acceleration to one-fourth ($2\text{ m/s}^2 \rightarrow 0.5\text{ m/s}^2$).

---

## Part E: F Represents the Net Force: Incorporating Friction

In $F = ma$, the symbol $F$ strictly denotes the **net unbalanced force** acting on the body after accounting for all opposing forces:

$$F_{\text{net}} = F_{\text{applied}} - F_{\text{friction}}$$

Once the net force is determined, acceleration is calculated via:  
$$a = \frac{F_{\text{net}}}{m}$$

```
   Friction (30 N)               Applied Force (50 N)
   <------------------  [ Box: 20 kg ]  ------------------>

   Net force = 50 N - 30 N = 20 N (forward)
```

> **Figure 6.2** – A 20 kg box pushed forward with 50 N against a 30 N friction resistance experiences a net driving force of 20 N forward, yielding an acceleration of $1\text{ m/s}^2$.

### The First Law as a Special Case of the Second Law

If the net external force acting on an object is zero ($F_{\text{net}} = 0$):  
$$F = ma \implies 0 = ma \implies a = 0$$

An acceleration of zero ($a = 0$) means that the object's velocity is strictly constant:
- If the object was initially at rest ($u = 0$), it remains at rest ($v = 0$).
- If the object was in motion with velocity $u$, it continues moving at that exact velocity ($v = u$) along a straight line.

This is the exact statement of **Newton's First Law of Motion**! Thus, Newton's First Law is mathematically contained as a special zero-force case within the Second Law.

---

## Part F: Solved Examples

### Example 1: Finding Force (from Mass and Acceleration)

What net force is required to impart an acceleration of $3\text{ m/s}^2$ to a metal block of mass $5\text{ kg}$?
- Given: $m = 5\text{ kg}$, $a = 3\text{ m/s}^2$.
- Formula: $F = ma = 5\text{ kg} \times 3\text{ m/s}^2 = \mathbf{15\text{ N}}$
- **Check:** $a = \frac{F}{m} = \frac{15\text{ N}}{5\text{ kg}} = 3\text{ m/s}^2$ ✅

### Example 2: Finding Acceleration (from Force and Mass)

A net horizontal force of $60\text{ N}$ acts on a body of mass $12\text{ kg}$. Calculate the resulting acceleration.
- Formula: $a = \frac{F}{m} = \frac{60\text{ N}}{12\text{ kg}} = \mathbf{5\text{ m/s}^2}$
- **Check:** $F = ma = 12\text{ kg} \times 5\text{ m/s}^2 = 60\text{ N}$ ✅

### Example 3: Finding Mass (from Force and Acceleration)

A net force of $45\text{ N}$ accelerates an object at $1.5\text{ m/s}^2$. Determine the mass of the object.
- Formula: $m = \frac{F}{a} = \frac{45\text{ N}}{1.5\text{ m/s}^2} = \mathbf{30\text{ kg}}$
- **Check:** $F = ma = 30\text{ kg} \times 1.5\text{ m/s}^2 = 45\text{ N}$ ✅

### Example 4: Mind the Units (Converting Grams to Kilograms)

A toy projectile of mass $500\text{ g}$ experiences a net force of $10\text{ N}$. Find its acceleration.
- **Convert units first:** $m = 500\text{ g} = \frac{500}{1000}\text{ kg} = 0.5\text{ kg}$.
- Formula: $a = \frac{F}{m} = \frac{10\text{ N}}{0.5\text{ kg}} = \mathbf{20\text{ m/s}^2}$
- **Check:** $F = ma = 0.5\text{ kg} \times 20\text{ m/s}^2 = 10\text{ N}$ ✅  
  *(Pitfall check: Substituting 500 bare grams yields $10/500 = 0.02\text{ m/s}^2$, which is off by a factor of 1000!)*

### Example 5: Net Force Involving Friction

A crate of mass $20\text{ kg}$ is pushed along a horizontal warehouse floor by a forward force of $50\text{ N}$. The kinetic friction between crate and floor is $30\text{ N}$. Calculate the acceleration.
- Given: $m = 20\text{ kg}$, $F_{\text{applied}} = 50\text{ N}$, $F_{\text{friction}} = 30\text{ N}$.
- Find net force: $F_{\text{net}} = 50\text{ N} - 30\text{ N} = \mathbf{20\text{ N}}$ (forward).
- Compute acceleration: $a = \frac{F_{\text{net}}}{m} = \frac{20\text{ N}}{20\text{ kg}} = \mathbf{1\text{ m/s}^2}$ (forward).
- **Check:** $F_{\text{net}} = ma = 20\text{ kg} \times 1\text{ m/s}^2 = 20\text{ N}$ ✅

### Example 6: Combining F = ma with Equations of Motion

An automobile of mass $1000\text{ kg}$ accelerates from rest ($u = 0$) under a constant net engine thrust of $3000\text{ N}$ for a duration of $4\text{ s}$. Calculate: (a) acceleration, (b) final velocity, and (c) total distance traveled.
- Acceleration:  
  $$a = \frac{F}{m} = \frac{3000\text{ N}}{1000\text{ kg}} = \mathbf{3\text{ m/s}^2}$$
- Final velocity:  
  $$v = u + at = 0 + (3\text{ m/s}^2 \times 4\text{ s}) = \mathbf{12\text{ m/s}}$$
- Distance covered:  
  $$s = ut + \frac{1}{2}at^2 = 0 + \frac{1}{2}(3\text{ m/s}^2)(4\text{ s})^2 = \frac{1}{2} \times 3 \times 16 = \mathbf{24\text{ m}}$$
- **Check with $v^2 = u^2 + 2as$:**  
  $$v^2 = 0 + 2(3)(24) = 144\text{ m}^2/\text{s}^2 \implies v = \sqrt{144} = 12\text{ m/s}$$ ✅

### Example 7: Deceleration of a Braking Car

A sedan of mass $1200\text{ kg}$ traveling at $16\text{ m/s}$ is brought to a complete stop ($v = 0$) in $4\text{ s}$ by its brakes. Find the braking force.
- Let forward motion be positive ($+$).
- Acceleration:  
  $$a = \frac{v - u}{t} = \frac{0 - 16\text{ m/s}}{4\text{ s}} = \mathbf{-4\text{ m/s}^2}$$
- Braking force:  
  $$F = ma = 1200\text{ kg} \times (-4\text{ m/s}^2) = \mathbf{-4800\text{ N}}$$
- The negative sign indicates that a retarding force of **4800 N** acts in the direction opposite to motion.
- **Check:** $a = \frac{-4800\text{ N}}{1200\text{ kg}} = -4\text{ m/s}^2$ ✅

### Example 8: Same Force Applied to Two Different Masses

A constant net force of $12\text{ N}$ is applied first to an object of mass $2\text{ kg}$, and then to an object of mass $6\text{ kg}$. Compare their accelerations.
- Mass 1 ($2\text{ kg}$): $a_1 = \frac{12\text{ N}}{2\text{ kg}} = \mathbf{6\text{ m/s}^2}$
- Mass 2 ($6\text{ kg}$): $a_2 = \frac{12\text{ N}}{6\text{ kg}} = \mathbf{2\text{ m/s}^2}$
- Mass increased by a factor of 3 ($6/2 = 3$); acceleration decreased by a factor of 3 ($6/2 = 3$).
- **Check:** $\frac{a_1}{a_2} = \frac{m_2}{m_1} = 3$ ✅

### Example 9: Leo's Supermarket Carts

Recall Leo's carts: empty cart ($10\text{ kg}$) and loaded cart ($40\text{ kg}$), each pushed with $20\text{ N}$ (ignoring friction).
- Empty: $a = \frac{20\text{ N}}{10\text{ kg}} = \mathbf{2\text{ m/s}^2}$. Velocity after $3\text{ s}$: $v = 0 + 2(3) = \mathbf{6\text{ m/s}}$.
- Loaded: $a = \frac{20\text{ N}}{40\text{ kg}} = \mathbf{0.5\text{ m/s}^2}$. Velocity after $3\text{ s}$: $v = 0 + 0.5(3) = \mathbf{1.5\text{ m/s}}$.
- When Leo pushes with $40\text{ N}$:  
  Empty accelerates at $\frac{40}{10} = \mathbf{4\text{ m/s}^2}$; loaded accelerates at $\frac{40}{40} = \mathbf{1\text{ m/s}^2}$.  
  Matches our Part D analysis perfectly ✅

### Example 10: Force Required to Stop a Cricket Ball (Linking with Momentum)

A leather ball of mass $0.16\text{ kg}$ moving at $25\text{ m/s}$ is caught and stopped ($v = 0$) by a fielder with rigid hands in $0.01\text{ s}$. Find the impact force on the hands.
- Acceleration:  
  $$a = \frac{v - u}{t} = \frac{0 - 25\text{ m/s}}{0.01\text{ s}} = -2500\text{ m/s}^2$$
- Force on hands:  
  $$F = ma = 0.16\text{ kg} \times (-2500\text{ m/s}^2) = \mathbf{-400\text{ N}}$$
- **Alternative calculation via rate of change of momentum:**  
  $$\Delta p = m(v - u) = 0.16\text{ kg} \times (0 - 25\text{ m/s}) = -4\text{ kg}\cdot\text{m/s}$$  
  $$F = \frac{\Delta p}{t} = \frac{-4\text{ kg}\cdot\text{m/s}}{0.01\text{ s}} = \mathbf{-400\text{ N}}$$ ✅
- **If the fielder pulls hands backward, extending time to $0.2\text{ s}$:**  
  $$F = \frac{-4\text{ kg}\cdot\text{m/s}}{0.2\text{ s}} = \mathbf{-20\text{ N}}$$  
  Extending the stopping time by a factor of 20 ($0.2 / 0.01 = 20$) reduces the impact force by a factor of 20 ($400 / 20 = 20$), turning a bone-bruising sting into a soft, safe catch!

### Example 11: Using F = m(v − u) / t Directly

A particle of mass $2\text{ kg}$ changes its velocity from $3\text{ m/s}$ to $11\text{ m/s}$ in $4\text{ s}$. Calculate the net applied force.
- **Method 1 (Momentum Rate):**  
  $$F = \frac{m(v - u)}{t} = \frac{2\text{ kg} \times (11 - 3)\text{ m/s}}{4\text{ s}} = \frac{16}{4} = \mathbf{4\text{ N}}$$
- **Method 2 (Kinematics First):**  
  $$a = \frac{11 - 3}{4} = 2\text{ m/s}^2 \implies F = ma = 2\text{ kg} \times 2\text{ m/s}^2 = \mathbf{4\text{ N}}$$
- Both methods agree on $4\text{ N}$ ✅

### Example 12: A Sliding Box Brought to Rest by Friction

A wooden crate of mass $10\text{ kg}$ slides across a rough floor with an initial velocity of $6\text{ m/s}$. The only horizontal force acting on it is a frictional resistance of $20\text{ N}$ opposing its motion. How long does it take to halt, and how far does it slide?
- Given: $m = 10\text{ kg}$, $u = +6\text{ m/s}$, $v = 0$, $F_{\text{net}} = -20\text{ N}$.
- Compute deceleration:  
  $$a = \frac{F_{\text{net}}}{m} = \frac{-20\text{ N}}{10\text{ kg}} = \mathbf{-2\text{ m/s}^2}$$
- Time to halt:  
  $$t = \frac{v - u}{a} = \frac{0 - 6\text{ m/s}}{-2\text{ m/s}^2} = \mathbf{3\text{ s}}$$
- Stopping distance:  
  $$s = ut + \frac{1}{2}at^2 = (6\text{ m/s} \times 3\text{ s}) + \frac{1}{2}(-2\text{ m/s}^2)(3\text{ s})^2 = 18\text{ m} - 9\text{ m} = \mathbf{9\text{ m}}$$
- **Check with $v^2 = u^2 + 2as$:**  
  $$0 = (6)^2 + 2(-2)(9) = 36 - 36 = 0$$ ✅

---

## Common Pitfalls to Avoid

1. **Mistake 1: Forgetting to subtract friction before applying $F = ma$.**  
   In Example 5, substituting the applied push of $50\text{ N}$ directly yields $a = 50 / 20 = 2.5\text{ m/s}^2$, which is wrong. You must always use the **net force**: $F_{\text{net}} = 50 - 30 = 20\text{ N}$, yielding $a = 1\text{ m/s}^2$.

2. **Mistake 2: Confusing mass with weight.**  
   Mass is in kilograms ($\text{kg}$); weight is a gravitational force in newtons ($\text{N}$). In $F = ma$, $m$ is mass, never weight.

3. **Mistake 3: Overlooking standard SI unit conversions.**  
   Grams must be converted to kilograms ($\div 1000$), and kilometers per hour must be converted to meters per second ($\times \frac{5}{18}$).

4. **Mistake 4: Omitting the negative sign on retarding forces.**  
   When braking, acceleration is negative ($a = -4\text{ m/s}^2$), yielding a retarding force of $-4800\text{ N}$.

5. **Mistake 5: Believing heavier objects always accelerate faster under equal force.**  
   By $a = \frac{F}{m}$, a heavier object experiences a **smaller acceleration** under the same force.

6. **Mistake 6: Assuming an object at rest cannot experience a net force.**  
   An object momentarily at rest ($u = 0$) can experience a massive force (such as a rocket on a launchpad at ignition). Force determines **acceleration**, not instantaneous velocity.

---

## Quick Recap

- **Newton's Second Law:** The rate of change of momentum of an object is directly proportional to the applied net force and occurs in the direction of that force.
- **Mathematical Form:** $F = ma$, where $F$ is net force in newtons ($\text{N}$), $m$ is mass in kilograms ($\text{kg}$), and $a$ is acceleration in $\text{m/s}^2$.
- **Definition of 1 Newton:** $1\text{ N} = 1\text{ kg}\cdot\text{m/s}^2$. It is the force that imparts an acceleration of $1\text{ m/s}^2$ to a mass of $1\text{ kg}$.
- **Three working forms:** $F = ma$, $a = \frac{F}{m}$, and $m = \frac{F}{a}$.
- For a given mass, acceleration is proportional to net force ($a \propto F$). For a given force, acceleration is inversely proportional to mass ($a \propto \frac{1}{m}$).
- Newton's First Law is a special case: when $F_{\text{net}} = 0$, $a = 0$, meaning velocity remains constant.
- For a constant momentum change $\Delta p$, extending the interaction time $t$ proportionally reduces the impact force ($F = \Delta p / t$).

---

## Practice Questions

1. A net force of 30 N acts on a mass of 6 kg. Calculate the acceleration produced.

2. What net force is required to impart an acceleration of $4\text{ m/s}^2$ to an object of mass $2.5\text{ kg}$?

3. A net force of 18 N accelerates an object at $3\text{ m/s}^2$. Determine the mass of the object.

4. A $25\text{ kg}$ crate is pushed across a warehouse floor with a horizontal force of 80 N against a kinetic friction force of 30 N. Calculate the resulting acceleration.

5. An automobile of mass $800\text{ kg}$ starts from rest. A constant net engine force of $1600\text{ N}$ acts on it for $6\text{ s}$. Find its final velocity and the distance traveled.

6. A $1500\text{ kg}$ vehicle traveling at $30\text{ m/s}$ is brought to a complete halt by its brakes in $6\text{ s}$. Calculate the braking force and specify its direction.

7. A tennis ball of mass $0.2\text{ kg}$ traveling at $20\text{ m/s}$ is stopped in $0.05\text{ s}$. Find the stopping force. Then determine the required force if the stopping time is extended to $0.2\text{ s}$, and compare the two forces.

8. A loaded warehouse cart of mass $50\text{ kg}$ and an empty cart of mass $10\text{ kg}$ are each pushed with an identical net force of $25\text{ N}$. Calculate the acceleration of each cart, state which is larger, and by what factor.

9. A particle of mass $400\text{ g}$ experiences a net force of $2\text{ N}$. Find its acceleration in $\text{m/s}^2$. (Pay close attention to units.)

10. State whether each statement is True or False:  
    (a) An object momentarily at rest can have a large net force acting on it.  
    (b) A force of 1 N is the force required to impart an acceleration of $1\text{ m/s}^2$ to a mass of 1 gram.  
    (c) If the net force on a moving object is zero, its acceleration is necessarily zero.  
    (d) Under identical applied force, a heavier object always experiences greater acceleration.  

### Answers

1. $a = \frac{F}{m} = \frac{30\text{ N}}{6\text{ kg}} = \mathbf{5\text{ m/s}^2}$.  
   **Check:** $6\text{ kg} \times 5\text{ m/s}^2 = 30\text{ N}$ ✅

2. $F = ma = 2.5\text{ kg} \times 4\text{ m/s}^2 = \mathbf{10\text{ N}}$.  
   **Check:** $a = \frac{10\text{ N}}{2.5\text{ kg}} = 4\text{ m/s}^2$ ✅

3. $m = \frac{F}{a} = \frac{18\text{ N}}{3\text{ m/s}^2} = \mathbf{6\text{ kg}}$.  
   **Check:** $6\text{ kg} \times 3\text{ m/s}^2 = 18\text{ N}$ ✅

4. $F_{\text{net}} = 80\text{ N} - 30\text{ N} = 50\text{ N}$.  
   $a = \frac{F_{\text{net}}}{m} = \frac{50\text{ N}}{25\text{ kg}} = \mathbf{2\text{ m/s}^2}$.  
   **Check:** $25\text{ kg} \times 2\text{ m/s}^2 = 50\text{ N}$ ✅

5. $a = \frac{1600\text{ N}}{800\text{ kg}} = 2\text{ m/s}^2$.  
   $v = u + at = 0 + (2 \times 6) = \mathbf{12\text{ m/s}}$.  
   $s = \frac{1}{2}at^2 = \frac{1}{2} \times 2 \times (6)^2 = \mathbf{36\text{ m}}$.  
   **Check:** $v^2 = 2as = 2(2)(36) = 144 = (12)^2$ ✅

6. $a = \frac{0 - 30\text{ m/s}}{6\text{ s}} = -5\text{ m/s}^2$.  
   $F = ma = 1500\text{ kg} \times (-5\text{ m/s}^2) = \mathbf{-7500\text{ N}}$.  
   The braking force has a magnitude of **7500 N acting opposite to the vehicle's direction of motion**.  
   **Check:** $a = \frac{-7500}{1500} = -5\text{ m/s}^2$ ✅

7.  
   - First case ($t = 0.05\text{ s}$):  
     $a = \frac{0 - 20}{0.05} = -400\text{ m/s}^2 \implies F = 0.2\text{ kg} \times (-400\text{ m/s}^2) = \mathbf{-80\text{ N}}$ ($80\text{ N}$ retarding).  
   - Second case ($t = 0.2\text{ s}$):  
     $a = \frac{0 - 20}{0.2} = -100\text{ m/s}^2 \implies F = 0.2\text{ kg} \times (-100\text{ m/s}^2) = \mathbf{-20\text{ N}}$ ($20\text{ N}$ retarding).  
   - Extending time by 4 times ($0.2 / 0.05 = 4$) reduces the stopping force by 4 times ($80 / 20 = 4$).  
   **Check via $\Delta p$:** $\Delta p = 0.2 \times (-20) = -4\text{ kg}\cdot\text{m/s}$. $\frac{-4}{0.05} = -80\text{ N}$ ✅; $\frac{-4}{0.2} = -20\text{ N}$ ✅

8.  
   - Loaded cart: $a_1 = \frac{25\text{ N}}{50\text{ kg}} = \mathbf{0.5\text{ m/s}^2}$.  
   - Empty cart: $a_2 = \frac{25\text{ N}}{10\text{ kg}} = \mathbf{2.5\text{ m/s}^2}$.  
   - The empty cart's acceleration is larger by a factor of $\frac{2.5}{0.5} = \mathbf{5\text{ times}}$, matching the mass ratio ($50 / 10 = 5$) ✅

9. Convert mass to kg: $m = 400\text{ g} = 0.4\text{ kg}$.  
   $a = \frac{F}{m} = \frac{2\text{ N}}{0.4\text{ kg}} = \mathbf{5\text{ m/s}^2}$.  
   **Check:** $0.4\text{ kg} \times 5\text{ m/s}^2 = 2\text{ N}$ ✅

10.  
    (a) **True** ✅ (An object at rest can experience large net force, causing it to begin accelerating from rest).  
    (b) **False** ❌ ($1\text{ N}$ accelerates $1\text{ kg}$ at $1\text{ m/s}^2$, not 1 g).  
    (c) **True** ✅ ($F = 0 \implies a = 0$ by Newton's First and Second Laws).  
    (d) **False** ❌ (Under identical force, $a = F/m$, so a heavier object experiences *less* acceleration).

---

Leo now understands the physics governing shopping carts: $F = ma$ is the universal equation of motion!

**What's next?** When Leo pushes forward against the shopping cart, does the shopping cart push back against Leo's hands? In Topic 7, we explore the reciprocal nature of forces in **Newton's Third Law of Motion: Action and Reaction**!
