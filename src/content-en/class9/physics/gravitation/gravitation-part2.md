# Chapter: Gravitation (Part 2)

> **Class:** 9 | **Subject:** Physics
> **This file builds upon [gravitation.md](gravitation.md)** (where we learned what gravity is, why the Earth pulls objects towards its centre, and the story of Newton's apple).
> **Prerequisites and connected topics:** [Scientific notation and powers of ten](../measurement-and-units/measurement-and-units-part2.md), [F = ma](../force-and-laws-of-motion/force-and-laws-of-motion-part6.md), [Action-reaction pairs](../force-and-laws-of-motion/force-and-laws-of-motion-part7.md)
> **Topics covered in this file:**
> 2. Universal Law of Gravitation

---

# Topic 2: Universal Law of Gravitation

In the previous topic, we learned that gravity is an **attractive force** acting between **any two objects with mass**, pulling them towards each other's centres. We also noted that between everyday objects, this force is extraordinarily **tiny**. But the natural question arises: **how** tiny is it? And what determines its strength: mass, separation distance, or both? Isaac Newton answered this precisely with a universal mathematical relation known as the **Universal Law of Gravitation**. Today, we will understand this law and compute the numbers ourselves.

---

## Two Heavy Spheres at the Science Fair

At the school annual science fair, physics teacher Ms. Vance and her student Leo were presenting a demonstration. Two dense lead spheres, each weighing **$10\text{ kg}$**, were suspended side by side from slender cords. The distance between their **centres** was exactly **$0.2\text{ m}$**.

Leo announced to visiting students: "According to Sir Isaac Newton, these two lead spheres are constantly exerting an attractive **gravitational pull** on each other."

A student leaned in, squinted closely, and remarked: "Yet they aren't moving towards each other at all!"

Ms. Vance smiled and explained: "Indeed, because this attractive force is so microscopic that only ultra-sensitive laboratory instruments can detect it. It is far too subtle to observe with the naked eye."

Leo then raised the crucial question: "Ms. Vance, if two heavy $10\text{ kg}$ spheres can barely pull each other, **why does the Earth pull us with such massive force** that we remain firmly planted on the ground?"

"An excellent question, Leo," replied Ms. Vance. "The answer lies directly inside Newton's formula. Let us examine the mathematics and solve the mystery quantitatively."

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Universal Law of Gravitation** | Every particle attracts every other particle with a force proportional to the product of their masses and inversely proportional to the square of the distance between their centres | Earth–Moon, apple–Earth |
| **F** | Gravitational force: the mutual attractive force between two masses (unit: newton, $\text{N}$) | $6.67 \times 10^{-11}\text{ N}$ |
| **$m_1$, $m_2$** | The masses of the two interacting bodies (unit: $\text{kg}$) | $10\text{ kg}$ and $20\text{ kg}$ |
| **r** | Separation distance measured between the **centres** of the two bodies (unit: $\text{m}$) | $0.5\text{ m}$ |
| **G** | Universal gravitational constant: a fundamental physical constant setting the scale of gravity | $6.67 \times 10^{-11}\text{ N m}^2/\text{kg}^2$ |
| **Inverse square** | When distance increases by factor $n$, force decreases by factor $n^2$ | Distance doubled $\rightarrow$ force becomes $1/4$ |
| **Proportional ($\propto$)** | As one quantity scales up, the other scales up in identical proportion | Mass doubled $\rightarrow$ force doubled |

---

## Part A: Newton's Law in Words and Formula

Newton determined that the gravitational force depends on three parameters: the two **masses**, and the **distance** separating them. The law states:

> **Every object in the universe attracts every other object with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centres.**

Mathematically:

> **$F = G \frac{m_1 m_2}{r^2}$**

Where each symbol represents:

| Symbol | Meaning | SI Unit |
|---|---|---|
| **F** | Gravitational force (experienced equally by both bodies) | newton ($\text{N}$) |
| **G** | Universal gravitational constant | $\text{N m}^2/\text{kg}^2$ |
| **$m_1$** | Mass of the first object | $\text{kg}$ |
| **$m_2$** | Mass of the second object | $\text{kg}$ |
| **r** | Distance between the **centres** of the two objects | $\text{m}$ |

Notice why the formula takes this structure:
- Larger masses produce a stronger pull: hence $m_1 m_2$ is in the **numerator**.
- Greater distance weakens the pull rapidly: hence $r^2$ is in the **denominator**.
- $G$ is the constant of proportionality that converts these mass-and-distance values into actual newtons of force.

### The Meaning and Units of G

The experimental value of **G** is:

> **$G = 6.67 \times 10^{-11}\text{ N m}^2/\text{kg}^2$**

In scientific notation, $10^{-11}$ equals $0.00000000001$—an extraordinarily small fraction.

**Where does the unit come from?** Rearranging the formula for $G$:
$$G = \frac{F \cdot r^2}{m_1 m_2}$$
Substituting the respective SI units:
$$\text{Unit of } G = \frac{\text{N} \cdot \text{m}^2}{\text{kg} \cdot \text{kg}} = \text{N m}^2/\text{kg}^2$$
Always include this unit when citing or using $G$.

**Why is it called "Universal"?** Because $G$ possesses the **exact same numerical value everywhere throughout the cosmos**: between two tennis balls, between Earth and the Moon, or between distant binary stars. It does not depend on the chemical composition of the bodies, the medium between them, temperature, or location.

### Why G is So Small: Understanding Through a Table

Because $G$ is so tiny, everyday objects experience imperceptible gravitational attraction. Consider the force between various pairs separated by a distance of $r = 1\text{ m}$ ($F = G \frac{m_1 m_2}{r^2}$, with $G = 6.67 \times 10^{-11}\text{ N m}^2/\text{kg}^2$):

| Two Objects | $m_1 \times m_2$ | Force at $r = 1\text{ m}$ |
|---|---|---|
| $1\text{ kg}$ and $1\text{ kg}$ | $1\text{ kg}^2$ | $6.67 \times 10^{-11}\text{ N}$ |
| $60\text{ kg}$ and $70\text{ kg}$ (two students) | $4200\text{ kg}^2$ | $2.8 \times 10^{-7}\text{ N}$ |
| $1000\text{ kg}$ and $1000\text{ kg}$ (two cars) | $10^6\text{ kg}^2$ | $6.67 \times 10^{-5}\text{ N}$ |

All these forces are **vanishingly small**. For gravity to become substantial enough to influence motion visibly, at least **one of the participating bodies must possess colossal mass**, such as the Earth ($6 \times 10^{24}\text{ kg}$). This directly answers Leo's question: Earth's immense mass scales the force up into hundreds of newtons.

---

## Part B: The Inverse-Square Rule: How Distance and Mass Change the Force

Let our baseline force be $F = G \frac{m_1 m_2}{r^2}$. Let us observe how altering individual parameters affects the resulting force:

| What Changes | Substitution into Formula | New Force |
|---|---|---|
| Baseline (no change) | $F = G \frac{m_1 m_2}{r^2}$ | **$F$** |
| Distance doubled ($2r$) | Denominator becomes $(2r)^2 = 4r^2$ | **$F / 4$** |
| Distance tripled ($3r$) | Denominator becomes $(3r)^2 = 9r^2$ | **$F / 9$** |
| Distance halved ($r / 2$) | Denominator becomes $(r/2)^2 = r^2 / 4$ | **$4F$** |
| One mass doubled ($2m_1$) | Numerator doubled | **$2F$** |
| Both masses doubled ($2m_1, 2m_2$) | Numerator multiplied by $2 \times 2 = 4$ | **$4F$** |
| $m_1$ doubled and $m_2$ tripled | Numerator multiplied by $2 \times 3 = 6$ | **$6F$** |
| Both masses doubled and distance doubled | Numerator $\times 4$, denominator $\times 4$ | **$F$** (unchanged) |

This demonstrates the core of the **inverse-square law**: doubling the distance does **not** simply halve the force; it quarters it ($1/2^2 = 1/4$). Tripling distance cuts the force by a factor of nine ($1/3^2 = 1/9$).

```
 Distance     Force (relative to baseline)

    r         ################################  1
   2r         ########                          1/4
   3r         ###                               1/9
   4r         ##                                1/16
```

> **Figure 2.1** – As distance grows as $r, 2r, 3r, 4r$, the gravitational force falls off sharply as $1, 1/4, 1/9, 1/16$. The bar length illustrates the relative magnitude of force.

---

## Part C: Newton's Third Law in Gravitation: Equal and Opposite Forces

When the Earth pulls an apple downward, **the apple pulls the Earth upward with the exact same magnitude of force**. Forces in nature always occur in matched action-reaction pairs:

> Force on Object 1 (directed toward Object 2) = Force on Object 2 (directed toward Object 1). **Identical magnitude, opposite directions.**

Examine the formula: $F = G \frac{m_1 m_2}{r^2}$. Swapping the roles of $m_1$ and $m_2$ yields the exact same product. Thus, **both bodies experience the exact same force $F$**. A massive body does **not** exert a larger force on a light body than the light body exerts back upon it!

**Why then does the apple fall while the Earth appears stationary?** Because while the forces are equal, their **accelerations** are governed by $a = F/m$. The same force acting on a minuscule mass produces an easily visible acceleration, whereas acting on Earth's colossal mass it produces a practically undetectable acceleration.

```
   Force on apple F (downward, toward Earth)

                 o  apple
                 |
                 v
        ---------------------
       (        Earth        )
        ---------------------
                 ^
                 |
   Force on Earth F (upward, toward apple)
```

> **Figure 2.2** – The apple and the Earth pull each other with forces of identical magnitude $F$ in opposite directions. The apple (tiny mass) accelerates noticeably; the Earth (colossal mass) experiences negligible acceleration.

We will calculate these exact accelerations in Example 9.

---

## Part D: Distance r is Always Measured from Centre to Centre

In Newton's formula, $r$ represents the separation between the **centres of mass** of the two objects, never the distance between their surfaces.

- For two small spheres: $r = \text{centre-to-centre distance} = (\text{radius}_1 + \text{surface gap} + \text{radius}_2)$.
- For **Earth and an object on its surface**: $r$ is measured from the **centre of the Earth**. Earth's mean radius is $R = 6.4 \times 10^6\text{ m}$. If an object is right on the surface, $r = R = 6.4 \times 10^6\text{ m}$. If it is located at an altitude of one Earth radius above the surface, $r = R + R = 2R$.

```
   B  *   apple at an altitude R above surface  (r = 2R)
      |
      |  R
      |
   A  *   apple right on Earth's surface        (r = R)
      |
      |  R
      |
      +   Centre of the Earth
```

> **Figure 2.3** – For object A on the surface, $r = R$ (centre to surface). For object B at height $R$ above the surface, $r = R + R = 2R$, because $r$ must always be referenced to Earth's centre.

---

## Part E: Solved Examples

We take $G = 6.67 \times 10^{-11}\text{ N m}^2/\text{kg}^2$ throughout.

### Example 1: Two 1 kg Masses Separated by 1 m

**Given:** $m_1 = 1\text{ kg}$, $m_2 = 1\text{ kg}$, $r = 1\text{ m}$.

- $F = G \frac{m_1 m_2}{r^2}$
- $F = (6.67 \times 10^{-11}\text{ N m}^2/\text{kg}^2) \times \frac{(1\text{ kg})(1\text{ kg})}{(1\text{ m})^2}$
- $F = 6.67 \times 10^{-11}\text{ N}$

Notice: when $m_1 = m_2 = 1\text{ kg}$ and $r = 1\text{ m}$, $F$ numerically equals $G$. This provides the physical definition of $G$: **$G$ is numerically equal to the gravitational force between two unit masses placed one metre apart.**

**Check:** $F = G \times 1 \times 1 / 1 = 6.67 \times 10^{-11}\text{ N}$ ✅  
Unit check: $\text{N m}^2/\text{kg}^2 \times \text{kg}^2 / \text{m}^2 = \text{N}$ ✅

### Example 2: 10 kg and 20 kg Masses Separated by 0.5 m

**Given:** $m_1 = 10\text{ kg}$, $m_2 = 20\text{ kg}$, $r = 0.5\text{ m}$.

- $m_1 m_2 = 10 \times 20 = 200\text{ kg}^2$
- $r^2 = (0.5\text{ m})^2 = 0.25\text{ m}^2$
- $F = (6.67 \times 10^{-11}) \times \frac{200}{0.25} = (6.67 \times 10^{-11}) \times 800$
- $6.67 \times 800 = 5336$, so $F = 5336 \times 10^{-11}\text{ N} = 5.336 \times 10^{-8}\text{ N} \approx \mathbf{5.3 \times 10^{-8}\text{ N}}$

**Check:** $6.67 \times 10^{-11} \times 200 / 0.25 = 5.336 \times 10^{-8}\text{ N}$ ✅. The mass product increased by $200\times$ and halving distance multiplied force by $4\times$, giving an overall factor of $800\times$ compared to Example 1: $6.67 \times 10^{-11} \times 800 = 5.336 \times 10^{-8}\text{ N}$ ✅.

### Example 3: Two People of 60 kg and 70 kg Separated by 1 m

**Given:** $m_1 = 60\text{ kg}$, $m_2 = 70\text{ kg}$, $r = 1\text{ m}$.

- $m_1 m_2 = 60 \times 70 = 4200\text{ kg}^2$
- $r^2 = (1\text{ m})^2 = 1\text{ m}^2$
- $F = (6.67 \times 10^{-11}) \times 4200 = 28014 \times 10^{-11}\text{ N} = 2.8014 \times 10^{-7}\text{ N} \approx \mathbf{2.8 \times 10^{-7}\text{ N}}$

**Check:** $6.67 \times 10^{-11} \times 4200 = 2.8014 \times 10^{-7}\text{ N}$ ✅. At less than $0.0000003\text{ N}$, this tiny pull is completely unnoticeable.

### Example 4: The Earth and the Moon

**Given:** $M_E = 6 \times 10^{24}\text{ kg}$, $M_M = 7.4 \times 10^{22}\text{ kg}$, $r = 3.84 \times 10^8\text{ m}$.

First, evaluate the mass product and $r^2$:
- $M_E \times M_M = (6 \times 10^{24}) \times (7.4 \times 10^{22}) = (6 \times 7.4) \times 10^{46} = 44.4 \times 10^{46} = 4.44 \times 10^{47}\text{ kg}^2$
- $r^2 = (3.84 \times 10^8\text{ m})^2 = 14.7456 \times 10^{16}\text{ m}^2 = 1.47456 \times 10^{17}\text{ m}^2$

Now calculate force:
- Numerator: $(6.67 \times 10^{-11}) \times (4.44 \times 10^{47}) = (6.67 \times 4.44) \times 10^{36} = 29.615 \times 10^{36} = 2.9615 \times 10^{37}$
- $F = \frac{2.9615 \times 10^{37}}{1.47456 \times 10^{17}} = 2.008 \times 10^{20}\text{ N} \approx \mathbf{2 \times 10^{20}\text{ N}}$

**Check:** Powers of ten: $10^{-11} \times 10^{47} / 10^{17} = 10^{19}$. Pre-factor: $6.67 \times 4.44 / 1.47456 \approx 20.08$. Thus $20.08 \times 10^{19} = 2.008 \times 10^{20}\text{ N}$ ✅. This colossal force keeps the Moon tethered in orbit.

### Example 5: Solving the Science Fair Mystery: Two Lead Spheres

The two spheres from the demonstration: $m_1 = 10\text{ kg}$, $m_2 = 10\text{ kg}$, $r = 0.2\text{ m}$.

- $m_1 m_2 = 10 \times 10 = 100\text{ kg}^2$
- $r^2 = (0.2\text{ m})^2 = 0.04\text{ m}^2$
- $F = (6.67 \times 10^{-11}) \times \frac{100}{0.04} = (6.67 \times 10^{-11}) \times 2500$
- $F = 16675 \times 10^{-11}\text{ N} = \mathbf{1.67 \times 10^{-7}\text{ N}}$

**Check:** $6.67 \times 10^{-11} \times 100 / 0.04 = 1.6675 \times 10^{-7}\text{ N}$ ✅.  
A force of $0.000000167\text{ N}$ cannot move $10\text{ kg}$ spheres!

Now calculate the pull of the **Earth on one of those $10\text{ kg}$ spheres**: $M_E = 6 \times 10^{24}\text{ kg}$, $r = R = 6.4 \times 10^6\text{ m}$.
- $M_E m = (6 \times 10^{24}) \times 10 = 6 \times 10^{25}\text{ kg}^2$
- $R^2 = (6.4 \times 10^6)^2 = 40.96 \times 10^{12}\text{ m}^2 = 4.096 \times 10^{13}\text{ m}^2$
- $F = (6.67 \times 10^{-11}) \times \frac{6 \times 10^{25}}{4.096 \times 10^{13}} = \frac{4.002 \times 10^{15}}{4.096 \times 10^{13}} = 0.977 \times 10^2\text{ N} = \mathbf{97.7\text{ N}}$ (approximately $98\text{ N}$)

**Check:** $6.67 \times 10^{-11} \times 6 \times 10^{24} \times 10 / (6.4 \times 10^6)^2 = 97.7\text{ N}$ ✅.  
Comparing the two forces:
$$\frac{97.7\text{ N}}{1.67 \times 10^{-7}\text{ N}} \approx 5.9 \times 10^8 \text{ (nearly 600 million times stronger!)}$$
Earth's gargantuan mass makes its gravitational pull hundreds of millions of times stronger than the pull of the neighbouring sphere.

### Example 6: Effect of Changing Distance (Ratio Method)

The force between the science fair spheres was $1.67 \times 10^{-7}\text{ N}$ at $r = 0.2\text{ m}$. If the distance is doubled to $r = 0.4\text{ m}$, what is the new force?

Since distance is multiplied by $2$, the force scales by $1/2^2 = 1/4$:
$$F_{\text{new}} = \frac{1.6675 \times 10^{-7}\text{ N}}{4} = \mathbf{4.17 \times 10^{-8}\text{ N}}$$

**Check via direct formula:**
$$F = \frac{(6.67 \times 10^{-11})(100)}{0.16} = 4.169 \times 10^{-8}\text{ N} \approx 4.17 \times 10^{-8}\text{ N} \text{ ✅}$$
If distance were halved to $0.1\text{ m}$, force would quadruple to $4 \times (1.67 \times 10^{-7}) = 6.67 \times 10^{-7}\text{ N}$ ✅.

### Example 7: Ratio Method: Changing Both Masses and Distance

The force between two objects is $F$. If $m_1$ is doubled, $m_2$ is tripled, and the separation distance $r$ is doubled, determine the new force.

- Numerator scaling: $2 \times 3 = 6$
- Denominator scaling: $2^2 = 4$
- New force:
$$F_{\text{new}} = F \times \frac{6}{4} = \mathbf{1.5 F}$$

**Check:** Let baseline $F = 4\text{ N}$. New force $= 4 \times 6 / 4 = 6\text{ N} = 1.5 \times 4\text{ N}$ ✅.

### Example 8: Comparing Force at Distances 2R and 3R from Earth's Centre

An object is situated at a distance of $2R$ from Earth's centre, and an identical object is located at $3R$. How many times greater is the force on the first object compared to the second?

Since $F \propto 1/r^2$:
$$\frac{F_{2R}}{F_{3R}} = \frac{1/(2R)^2}{1/(3R)^2} = \frac{(3R)^2}{(2R)^2} = \frac{9R^2}{4R^2} = \frac{9}{4} = \mathbf{2.25}$$

The force at $2R$ is **$2.25$ times stronger** than at $3R$.

**Check:** For a $1\text{ kg}$ object ($G M_E = 4.002 \times 10^{14}\text{ N m}^2/\text{kg}$):  
$F_{2R} = 4.002 \times 10^{14} / (1.28 \times 10^7)^2 = 2.44\text{ N}$  
$F_{3R} = 4.002 \times 10^{14} / (1.92 \times 10^7)^2 = 1.09\text{ N}$  
Ratio: $2.44 / 1.09 = 2.24 \approx 2.25$ ✅.

### Example 9: Acceleration of an Apple versus the Earth

An apple of mass $m = 0.2\text{ kg}$ rests near Earth's surface ($M_E = 6 \times 10^{24}\text{ kg}$, $R = 6.4 \times 10^6\text{ m}$).

**Step 1: Compute gravitational force on both bodies**
- $F = \frac{(6.67 \times 10^{-11})(6 \times 10^{24})(0.2)}{(6.4 \times 10^6)^2} = \frac{8.004 \times 10^{13}}{4.096 \times 10^{13}} = \mathbf{1.95\text{ N}}$

By Newton's Third Law, this exact $1.95\text{ N}$ force pulls the apple downward towards Earth, and pulls Earth upward towards the apple.

**Step 2: Acceleration of the apple**
$$a_{\text{apple}} = \frac{F}{m} = \frac{1.95\text{ N}}{0.2\text{ kg}} = \mathbf{9.77\text{ m/s}^2 \approx 9.8\text{ m/s}^2}$$

**Step 3: Acceleration of the Earth**
$$a_{\text{Earth}} = \frac{F}{M_E} = \frac{1.95\text{ N}}{6 \times 10^{24}\text{ kg}} = \mathbf{3.3 \times 10^{-25}\text{ m/s}^2}$$

**Check:** $1.95 / 0.2 = 9.75 \approx 9.8\text{ m/s}^2$ ✅.  
Ratio of accelerations: $9.8 / (3.3 \times 10^{-25}) \approx 3 \times 10^{25}$ ✅.  
The apple's acceleration is roughly $30$ trillion trillion times larger than Earth's, which is why only the apple visibly moves!

### Example 10: Gravitational Force on a 1 kg Mass on Earth's Surface (Bridge to Topic 3)

For an object of mass $m = 1\text{ kg}$ at Earth's surface:
- $F = \frac{G M_E m}{R^2} = \frac{(6.67 \times 10^{-11})(6 \times 10^{24})(1)}{(6.4 \times 10^6)^2} = \frac{4.002 \times 10^{14}}{4.096 \times 10^{13}} = \mathbf{9.77\text{ N} \approx 9.8\text{ N}}$

**Check:** $6.67 \times 10^{-11} \times 6 \times 10^{24} \times 1 / (6.4 \times 10^6)^2 = 9.77\text{ N}$ ✅.  
Notice: a $1\text{ kg}$ mass experiences $\approx 9.8\text{ N}$, a $0.2\text{ kg}$ apple experiences $\approx 1.95\text{ N}$, and a $10\text{ kg}$ sphere experiences $\approx 97.7\text{ N}$. In every case, $\frac{F}{m} \approx 9.8\text{ N/kg} = 9.8\text{ m/s}^2$. This constant acceleration is the famous acceleration due to gravity, $g$, which we study in Topic 3!

---

## Common Pitfalls to Avoid

1. **Mistake 1: Using the surface-to-surface gap as distance $r$.**  
   *Correction:* Distance $r$ is always measured between the centres of mass. If two spheres each of radius $0.1\text{ m}$ have surfaces $0.1\text{ m}$ apart, then $r = 0.1 + 0.1 + 0.1 = 0.3\text{ m}$, not $0.1\text{ m}$.

2. **Mistake 2: Forgetting to square the separation distance $r$.**  
   *Correction:* In the denominator, it is always $r^2$. Dividing by $r$ instead of $r^2$ will produce answers that are wildly incorrect.

3. **Mistake 3: Mishandling exponents and powers of ten.**  
   *Correction:* Add exponents during multiplication ($10^{-11} \times 10^{24} = 10^{13}$), subtract them during division, and remember that squaring doubles the exponent ($(10^8)^2 = 10^{16}$).

4. **Mistake 4: Confusing $G$ and $g$.**  
   *Correction:* $G$ is the universal gravitational constant ($6.67 \times 10^{-11}\text{ N m}^2/\text{kg}^2$), invariant throughout the universe. In contrast, $g$ is the local acceleration due to gravity ($\approx 9.8\text{ m/s}^2$ on Earth), which varies by planet and altitude.

5. **Mistake 5: Assuming the more massive body experiences a greater gravitational force.**  
   *Correction:* By Newton's Third Law, both bodies experience the exact same magnitude of force $F$. Only their resulting accelerations differ.

6. **Mistake 6: Omitting units or stating the wrong unit for $G$.**  
   *Correction:* The SI unit of $G$ is $\text{N m}^2/\text{kg}^2$. Writing simply "N" is incorrect.

---

## Quick Recap

- **Newton's Universal Law of Gravitation:** Every particle attracts every other particle with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between their centres.
- **Formula:** $F = G \frac{m_1 m_2}{r^2}$, with $F$ in newtons ($\text{N}$), $m$ in kilograms ($\text{kg}$), and $r$ in metres ($\text{m}$).
- **Universal Constant:** $G = 6.67 \times 10^{-11}\text{ N m}^2/\text{kg}^2$, identical everywhere in the cosmos. Because $G$ is tiny, gravitational attraction between ordinary laboratory objects is negligible.
- **Inverse-Square Law:** Doubling distance reduces force to $1/4$; tripling distance reduces it to $1/9$; halving distance quadruples the force.
- **Mutual Attraction:** Earth and an apple pull each other with equal force (Newton's Third Law). The apple accelerates visibly ($\approx 9.8\text{ m/s}^2$) because its mass is small, while Earth's acceleration ($\approx 3.3 \times 10^{-25}\text{ m/s}^2$) is imperceptible.
- **Measurement from Centre:** Distance $r$ is always measured centre-to-centre. At Earth's surface, $r = R \approx 6.4 \times 10^6\text{ m}$.
- Gravitational force on $1\text{ kg}$ near Earth's surface is $\approx 9.8\text{ N}$, yielding an acceleration of $\approx 9.8\text{ m/s}^2$.

---

## Practice Questions

1. State Newton's law of universal gravitation in words and write its formula, naming every symbol with its SI unit.

2. Two lead balls of mass $5\text{ kg}$ and $8\text{ kg}$ have their centres $0.5\text{ m}$ apart. Find the gravitational force between them. ($G = 6.67 \times 10^{-11}\text{ N m}^2/\text{kg}^2$)

3. The gravitational force between two bodies is $36\text{ N}$. What will the force become if (a) the distance is doubled, (b) the distance is tripled, (c) the distance is halved, (d) both masses are doubled and the distance is kept the same?

4. If one mass is doubled and the other is tripled, and the distance is also doubled, by what factor does the gravitational force change?

5. Two spherical balls of mass $20\text{ kg}$ each have a radius of $0.2\text{ m}$. Their surfaces are $0.6\text{ m}$ apart. Find the gravitational force between them. Why must you use the distance between centres?

6. The mass of the Earth is $6 \times 10^{24}\text{ kg}$ and the mass of the Sun is $2 \times 10^{30}\text{ kg}$. The distance between them is $1.5 \times 10^{11}\text{ m}$. Find the gravitational force between the Sun and the Earth.

7. An object is at a distance of $4R$ from the centre of the Earth, where $R$ is the radius of the Earth. Another identical object is on the surface of the Earth. How many times is the force on the second object compared to the first?

8. Find the gravitational force on a $5\text{ kg}$ object at the Earth's surface. ($M_E = 6 \times 10^{24}\text{ kg}$, $R = 6.4 \times 10^6\text{ m}$)

9. A $0.5\text{ kg}$ ball and the Earth attract each other. Find the force and the acceleration of the ball. Is the acceleration of the Earth the same as that of the ball? Explain, without calculating.

10. State True or False:  
    (a) The gravitational force is stronger on the lighter body than on the heavier one.  
    (b) $G$ has the same value everywhere in the universe.  
    (c) If the distance between two bodies doubles, the force becomes half.  
    (d) The unit of $G$ is $\text{N m}^2/\text{kg}^2$.  
    (e) $G$ and $g$ are two names for the same quantity.

### Answers

1. **Statement:** Every particle attracts every other particle with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between their centres.  
   **Formula:** $F = G \frac{m_1 m_2}{r^2}$, where $F$ is gravitational force ($\text{N}$), $G$ is the universal gravitational constant ($\text{N m}^2/\text{kg}^2$), $m_1, m_2$ are masses ($\text{kg}$), and $r$ is the separation between their centres ($\text{m}$).

2. $m_1 m_2 = 5 \times 8 = 40\text{ kg}^2$; $r^2 = (0.5\text{ m})^2 = 0.25\text{ m}^2$.  
   $F = (6.67 \times 10^{-11})(40) / 0.25 = 6.67 \times 10^{-11} \times 160 = \mathbf{1.07 \times 10^{-8}\text{ N}}$.  
   *Check:* $6.67 \times 10^{-11} \times 40 / 0.25 = 1.0672 \times 10^{-8}\text{ N}$ ✅

3. (a) Distance doubled: $F / 4 = 36 / 4 = \mathbf{9\text{ N}}$.  
   (b) Distance tripled: $F / 9 = 36 / 9 = \mathbf{4\text{ N}}$.  
   (c) Distance halved: $4F = 4 \times 36 = \mathbf{144\text{ N}}$.  
   (d) Both masses doubled: $2 \times 2 \times 36 = \mathbf{144\text{ N}}$.  
   *Check:* (a) $36 / 2^2 = 9$ ✅; (b) $36 / 3^2 = 4$ ✅; (c) $36 / (1/2)^2 = 144$ ✅; (d) $36 \times 4 = 144$ ✅

4. Numerator scales by $2 \times 3 = 6$. Denominator scales by $2^2 = 4$.  
   New force $= 6/4 \times F = \mathbf{1.5\text{ times the original force}}$ (or factor of $3/2$).  
   *Check:* If original $F = 4\text{ N}$, new force is $4 \times 6 / 4 = 6\text{ N} = 1.5 \times 4$ ✅.

5. Distance between centres $r = 0.2\text{ m} + 0.6\text{ m} + 0.2\text{ m} = \mathbf{1.0\text{ m}}$.  
   $m_1 m_2 = 20 \times 20 = 400\text{ kg}^2$; $r^2 = (1.0)^2 = 1\text{ m}^2$.  
   $F = (6.67 \times 10^{-11})(400) / 1 = \mathbf{2.67 \times 10^{-8}\text{ N}}$.  
   *Reason:* Gravitational attraction between spherically symmetric masses acts as if all mass is concentrated at their geometric centres. Using the surface gap ($0.6\text{ m}$) would be physically invalid.  
   *Check:* $6.67 \times 10^{-11} \times 400 = 2.668 \times 10^{-8}\text{ N}$ ✅

6. $m_1 m_2 = (6 \times 10^{24})(2 \times 10^{30}) = 1.2 \times 10^{55}\text{ kg}^2$.  
   $r^2 = (1.5 \times 10^{11})^2 = 2.25 \times 10^{22}\text{ m}^2$.  
   $F = \frac{(6.67 \times 10^{-11})(1.2 \times 10^{55})}{2.25 \times 10^{22}} = \frac{8.004 \times 10^{44}}{2.25 \times 10^{22}} \approx \mathbf{3.6 \times 10^{22}\text{ N}}$.  
   *Check:* $6.67 \times 10^{-11} \times 1.2 \times 10^{55} / 2.25 \times 10^{22} = 3.557 \times 10^{22}\text{ N}$ ✅

7. $F \propto 1/r^2$. At the surface $r = R$, at the distant point $r = 4R$.  
   Ratio $\frac{F_{\text{surface}}}{F_{4R}} = \frac{(4R)^2}{R^2} = \mathbf{16}$.  
   The force on the surface object is **$16$ times greater**.  
   *Check:* For $1\text{ kg}$, $F_{\text{surface}} \approx 9.77\text{ N}$, $F_{4R} \approx 9.77 / 16 = 0.61\text{ N}$; $9.77 / 0.61 = 16$ ✅.

8. $F = \frac{G M_E m}{R^2} = \frac{(6.67 \times 10^{-11})(6 \times 10^{24})(5)}{(6.4 \times 10^6)^2} = \frac{2.001 \times 10^{15}}{4.096 \times 10^{13}} = \mathbf{48.9\text{ N}}$ (approximately $49\text{ N}$).  
   *Check:* $5\text{ kg} \times 9.77\text{ N/kg} = 48.85\text{ N} \approx 48.9\text{ N}$ ✅

9. $F = \frac{(6.67 \times 10^{-11})(6 \times 10^{24})(0.5)}{(6.4 \times 10^6)^2} = \frac{2.001 \times 10^{14}}{4.096 \times 10^{13}} = \mathbf{4.89\text{ N}}$.  
   Acceleration of the ball: $a = \frac{F}{m} = \frac{4.89\text{ N}}{0.5\text{ kg}} = \mathbf{9.78\text{ m/s}^2 \approx 9.8\text{ m/s}^2}$.  
   The acceleration of the Earth is **not** the same. While both experience the identical $4.89\text{ N}$ force, Earth's mass is enormously larger ($6 \times 10^{24}\text{ kg}$), making its resulting acceleration ($a = F/M_E$) practically zero.  
   *Check:* $4.89 / 0.5 = 9.78\text{ m/s}^2$ ✅

10. (a) **False** ❌. Forces are equal in magnitude by Newton's Third Law.  
    (b) **True** ✅. $G$ is a universal physical constant.  
    (c) **False** ❌. Doubling distance reduces force to **one-fourth** ($1/4$).  
    (d) **True** ✅.  
    (e) **False** ❌. $G$ is the universal constant ($6.67 \times 10^{-11}\text{ N m}^2/\text{kg}^2$), whereas $g$ is the acceleration due to gravity ($\approx 9.8\text{ m/s}^2$ on Earth).

---

Now you understand why two massive spheres at a science fair do not visibly drift towards one another, and why Earth's gravity dominates our daily life. Whenever you drop an object, remember: both bodies exert equal forces on each other!

**What comes next?** We observed that on Earth's surface, $1\text{ kg}$ experiences $\approx 9.8\text{ N}$ and $0.2\text{ kg}$ experiences $\approx 1.95\text{ N}$—the ratio of force to mass is always constant. In **Topic 3**, we will derive and explore this universal downward acceleration: **$g$**.
