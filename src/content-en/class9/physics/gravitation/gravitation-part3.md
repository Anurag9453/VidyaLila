# Chapter: Gravitation (Part 3)

> **Class:** 9 | **Subject:** Physics
> **This file builds upon [gravitation-part2.md](gravitation-part2.md)** (which covered the Universal Law of Gravitation, $F = G \frac{m_1 m_2}{r^2}$). The chapter begins at [gravitation.md](gravitation.md).
> **Prior knowledge:** For acceleration and $a = \frac{v - u}{t}$, refer to [motion-part4.md](../motion/motion-part4.md); for $F = ma$, see [force-and-laws-of-motion-part6.md](../force-and-laws-of-motion/force-and-laws-of-motion-part6.md).
> **Topics covered in this file:**
> 3. Free Fall and Acceleration Due to Gravity ($g$)

---

# Topic 3: Free Fall and Acceleration Due to Gravity ($g$)

In the previous topic, we explored Newton's Universal Law of Gravitation: **$F = G \frac{m_1 m_2}{r^2}$**, which calculates the attractive gravitational force between any two masses. At the conclusion of that topic, we found that near Earth's surface, a $1\text{ kg}$ object experiences a downward pull of **$9.77\text{ N}$**, or roughly $9.8\text{ N}$. Now we must address two fundamental questions: when this gravitational force acts unopposed and an object drops, **how rapidly does its velocity increase**? And **does a heavier object genuinely fall faster than a lighter one**? In this topic, we will uncover the physics behind both phenomena.

---

## The Coin and the Feather in the Laboratory

Inside the school physics laboratory stood a tall, transparent glass vacuum tube. The science teacher, Mr. Davis, often demonstrated a classic experiment using this apparatus. Assisting him today was his curious student Maya.

Inside the sealed glass column rested two distinct items: a dense metal **coin** and a delicate bird **feather**. Mr. Davis addressed Maya: "Maya, invert the vertical tube and observe which object reaches the bottom first."

Maya turned the cylinder upside down. Predictably, the coin plunged **rapidly** straight to the base with a sharp clink, while the feather drifted, **fluttering lazily** and arriving several seconds later. Maya noted confidently: "Mr. Davis, that makes sense: the coin is far heavier, so it naturally falls faster."

Mr. Davis chuckled gently. "A very common everyday deduction! Now let us connect a vacuum pump to evacuate the air completely from inside the tube. Let us see what happens when nothing interferes."

The vacuum pump ran until the chamber was airless. Maya once again inverted the glass column... and gasped in amazement! **The heavy coin and the light feather fell in perfect synchrony side by side, striking the bottom at the exact same instant.** 

Maya looked astonished: "Mr. Davis, how could a fragile, lightweight feather possibly keep up with a dense coin?"

Let us examine the exact mathematics and physics behind this timeless demonstration.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Free fall** | The motion of an object falling solely under the influence of gravity, with all other forces (such as air resistance) neglected | A coin dropping inside an evacuated tube |
| **g (acceleration due to gravity)** | The acceleration experienced by an object in free fall near a celestial body's surface | $9.8\text{ m/s}^2$ on Earth |
| **G (gravitational constant)** | The universal constant of gravitation, identical throughout the universe | $6.67 \times 10^{-11}\text{ N m}^2/\text{kg}^2$ |
| **Air resistance** | The resistive drag force exerted by air molecules opposing an object's motion | Why a feather flutters slowly in normal air |
| **Vacuum** | A space entirely devoid of matter and air molecules | An evacuated glass tube |
| **Terminal velocity** | The steady maximum speed achieved when upward air drag equals downward gravity | A parachutist drifting at constant speed |

---

## Part A: What is Free Fall?

When you release an object from your hand, it falls downward towards the Earth under the influence of gravity. When an object moves **solely under the influence of gravitational force**, with air resistance being absent or negligible, it is said to be in **free fall**.

Take note of two important points:
- Free fall is not restricted to downward motion. When you throw a ball straight upward, the instant it leaves your hand, the only force acting on it is downward gravity. Thus, an object tossed vertically upward is also in free fall throughout its flight! We will analyze vertical motion quantitatively in Topic 4.
- Gravity is a **non-contact force** (Topic 1). Earth exerts its inward pull continuously across empty space without needing physical contact.

As established in Topic 1, gravitational pull always points radially toward the **centre of the Earth**. Regardless of where an observer stands on the globe, "down" means toward the planetary centre:

```
          Northern Hemisphere
                   |
                   v
             .-----------.
            /             \
           |       *       |   * = Centre of the Earth
            \             /
             '-----------'
                   ^
                   |
          Southern Hemisphere
```

> **Figure 3.1** – Gravitational force always directs radially inward toward Earth's centre. Observers on opposite sides of the globe both define "down" as directed towards this central point.

---

## Part B: Deriving the Formula for g: GM / R²

How rapid is the downward acceleration during free fall? We can answer this by combining **two fundamental laws** we already know.

**Formula 1 (Universal Law of Gravitation, Topic 2):**  
Between the Earth (mass $M$) and a small object of mass $m$ located on or very near Earth's surface (distance $r \approx R$, where $R$ is Earth's mean radius):
$$F = G \frac{M m}{R^2}$$

**Formula 2 (Newton's Second Law of Motion, $F = ma$):**  
If the object undergoes downward acceleration $g$, the net downward force is:
$$F = mg$$

Because both expressions describe the exact same physical force—the gravitational pull of Earth acting on the object—we set them equal:
$$mg = G \frac{M m}{R^2}$$

**Step 1:** Notice that the object's mass $m$ appears on both sides of the equation. Dividing both sides by $m$:
$$g = \frac{GM}{R^2}$$

This is the famous **formula for the acceleration due to gravity, $g$**. Observe a monumental fact: the mass of the falling object, $m$, has completely vanished from the equation!

**Step 2:** Let us substitute standard astronomical values for the Earth:  
$G = 6.67 \times 10^{-11}\text{ N m}^2/\text{kg}^2$, $M = 6 \times 10^{24}\text{ kg}$, and $R = 6.4 \times 10^6\text{ m}$.

**Example 1 (Calculating Earth's surface value of g):**
- Numerator: $GM = (6.67 \times 10^{-11}) \times (6 \times 10^{24}) = 40.02 \times 10^{13} = 4.002 \times 10^{14}\text{ N m}^2/\text{kg}$
- Denominator: $R^2 = (6.4 \times 10^6\text{ m})^2 = 40.96 \times 10^{12}\text{ m}^2 = 4.096 \times 10^{13}\text{ m}^2$
- $g = \frac{4.002 \times 10^{14}}{4.096 \times 10^{13}} = \mathbf{9.77\text{ N/kg} = 9.77\text{ m/s}^2}$

Rounding slightly, we standardise this as **$g \approx 9.8\text{ m/s}^2$**.

**Check:** $9.77\text{ m/s}^2 \times (4.096 \times 10^{13}\text{ m}^2) = 4.002 \times 10^{14}\text{ N m}^2/\text{kg}$ ✅

**Understanding Units:** $g$ represents acceleration, so its primary SI unit is **$\text{m/s}^2$**. However, from the force ratio $F/m$, its unit can also be written as **$\text{N/kg}$**:
$$1\text{ N/kg} = 1\text{ (kg}\cdot\text{m/s}^2) / \text{kg} = 1\text{ m/s}^2$$
Both units express the identical physical property: $9.8\text{ m/s}^2$ means that velocity increases by $9.8\text{ m/s}$ every second, while $9.8\text{ N/kg}$ means that Earth pulls downward with $9.8\text{ newtons}$ on every single kilogram of mass.

**Choosing Between $9.8\text{ m/s}^2$ and $10\text{ m/s}^2$:** For convenience in introductory mental arithmetic, problem statements often instruct you to use **$g = 10\text{ m/s}^2$**. Always verify the instruction. If an exercise specifies $g = 10\text{ m/s}^2$, use it throughout that problem; otherwise, default to the standard value of **$g = 9.8\text{ m/s}^2$**. Never mix both values within the same calculation.

---

## Part C: Acceleration Due to Gravity Does Not Depend on the Object's Mass

Re-examine the formula: $g = \frac{GM}{R^2}$. The variables on the right are solely $G$, the planet's mass $M$, and the planetary radius $R$. The falling body's own mass $m$ is entirely absent:

> **In a vacuum (or when air resistance is negligible), all freely falling objects—whether heavy or light, large or small—accelerate downward at the exact same rate!**

Students often wonder: how can this be true when a heavier object experiences a much larger gravitational force? Consider two masses:

- On a $1\text{ kg}$ block: Force $= mg = (1\text{ kg})(9.8\text{ m/s}^2) = \mathbf{9.8\text{ N}}$
- On a $10\text{ kg}$ boulder: Force $= mg = (10\text{ kg})(9.8\text{ m/s}^2) = \mathbf{98\text{ N}}$

The downward pull on the boulder is indeed ten times larger. However, the boulder also possesses ten times more **inertia** (mass), making it ten times harder to accelerate! By Newton's Second Law ($a = F/m$):
- $1\text{ kg}$ object: $a = \frac{9.8\text{ N}}{1\text{ kg}} = \mathbf{9.8\text{ m/s}^2}$
- $10\text{ kg}$ object: $a = \frac{98\text{ N}}{10\text{ kg}} = \mathbf{9.8\text{ m/s}^2}$

The ten-fold greater force is precisely counterbalanced by the ten-fold greater inertia, resulting in the **exact same acceleration**.

```
    1 kg                    10 kg
   +---+                   +-------+
   | 1 |                   |  10   |
   +---+                   +-------+
     |                         |
     | F = 9.8 N               | F = 98 N
     v                         v
   a = 9.8 m/s²              a = 9.8 m/s²     (both accelerate identically)
```

> **Figure 3.2** – While the gravitational force on a $10\text{ kg}$ mass ($98\text{ N}$) is ten times that on a $1\text{ kg}$ mass ($9.8\text{ N}$), their downward accelerations in free fall are strictly identical ($9.8\text{ m/s}^2$).

---

## Part D: Solving the Laboratory Mystery: Coin and Feather

Now let us revisit Maya's experiment:

- **Inside the air-filled tube:** Both objects experience gravity downward, but both also encounter upward **air resistance**. A feather is broad and extremely light relative to its surface area, so the upward aerodynamic drag easily counters its tiny weight, causing it to flutter down gently. A compact metal coin has high density and a streamlined profile, slicing through the air with minimal drag and striking the bottom first.
- **Inside the evacuated vacuum tube:** Air molecules have been removed, completely eliminating drag. Now, **gravity is the sole acting force** on both items. Because $g$ is independent of mass, both objects accelerate at the identical rate of $9.8\text{ m/s}^2$ and land together.

```
   In Air (drag present)        In Vacuum (free fall)

    O    ~~                      O     ~~
    |   (feather)                |    (feather)
    |                            |
    v                            v
   Coin arrives first           Both land simultaneously
```

> **Figure 3.3** – In an atmosphere, aerodynamic drag retards the light feather. In a vacuum, devoid of air resistance, both accelerate together at rate $g$.

**Example 2 (Accelerations of coin and feather):**  
A coin has mass $m_c = 5\text{ g} = 0.005\text{ kg}$ and a feather has mass $m_f = 0.2\text{ g} = 0.0002\text{ kg}$. Find their respective gravitational forces and free-fall accelerations in a vacuum ($g = 9.8\text{ m/s}^2$).

- Force on coin: $F_c = m_c g = (0.005\text{ kg})(9.8\text{ m/s}^2) = \mathbf{0.049\text{ N}}$
- Force on feather: $F_f = m_f g = (0.0002\text{ kg})(9.8\text{ m/s}^2) = \mathbf{0.00196\text{ N}}$
- Acceleration of coin: $a_c = \frac{F_c}{m_c} = \frac{0.049\text{ N}}{0.005\text{ kg}} = \mathbf{9.8\text{ m/s}^2}$
- Acceleration of feather: $a_f = \frac{F_f}{m_f} = \frac{0.00196\text{ N}}{0.0002\text{ kg}} = \mathbf{9.8\text{ m/s}^2}$

**Check:** Accelerations are equal ($9.8 = 9.8$) ✅.

In everyday life, dropping a flat sheet of paper and a crumpled paper ball illustrates this clearly: both have the exact same mass, but the crumpled ball falls much faster because its compact shape minimizes air drag.

---

## Part E: How g Varies Across Different Celestial Bodies and Locations

In the equation $g = \frac{GM}{R^2}$, $M$ and $R$ represent the mass and radius of the specific celestial body. Consequently, $g$ varies from one planetary body to another.

**Example 3 (Calculating g on the Moon):**  
The Moon has mass $M_M = 7.4 \times 10^{22}\text{ kg}$ and radius $R_M = 1.74 \times 10^6\text{ m}$. Compute its surface acceleration due to gravity.

- Numerator: $GM_M = (6.67 \times 10^{-11}) \times (7.4 \times 10^{22}) = 4.936 \times 10^{12}\text{ N m}^2/\text{kg}$
- Denominator: $R_M^2 = (1.74 \times 10^6\text{ m})^2 = 3.0276 \times 10^{12}\text{ m}^2$
- $g_{\text{Moon}} = \frac{4.936 \times 10^{12}}{3.0276 \times 10^{12}} = \mathbf{1.63\text{ m/s}^2}$ (approximately $1.6\text{ m/s}^2$)

**Check:** $1.63 \times 3.0276 \times 10^{12} = 4.935 \times 10^{12}$ ✅  
Comparing with Earth:
$$\frac{g_{\text{Moon}}}{g_{\text{Earth}}} = \frac{1.63}{9.8} \approx \frac{1}{6}$$
Surface gravity on the Moon is roughly **one-sixth ($1/6$)** of Earth's gravity. That is why Apollo astronauts could effortlessly leap high above the lunar surface!

| Celestial Body | Approximate $g$ ($\text{m/s}^2$) |
|---|---|
| Earth | $9.8$ |
| Moon | $1.6$ |
| Mars | $3.7$ |
| Sun (surface) | $274$ |

**Subtle Variations on Earth Itself:**
- Earth is not a perfect sphere; it bulges slightly at the equator and is slightly flattened at the poles. The geographic poles are roughly $21\text{ km}$ closer to Earth's centre than points on the equator ($R_{\text{pole}} < R_{\text{equator}}$). Because $g \propto 1/R^2$, **$g$ is slightly larger at the poles ($\approx 9.83\text{ m/s}^2$) and slightly smaller at the equator ($\approx 9.78\text{ m/s}^2$)**.
- As one travels to extreme altitudes above sea level, distance from Earth's centre increases ($r = R + h$), causing $g$ to gradually decrease.

For standard Class 9 physics calculations near sea level, we treat **$g = 9.8\text{ m/s}^2$** as uniform.

---

## Part F: Further Solved Examples

### Example 4: Gravitational Force and Acceleration for a 5 kg Object

Near Earth's surface, determine the gravitational pull and downward acceleration acting on a $5\text{ kg}$ object ($g = 9.8\text{ m/s}^2$).

- Force: $F = mg = (5\text{ kg})(9.8\text{ m/s}^2) = \mathbf{49\text{ N}}$
- Acceleration: $a = \frac{F}{m} = \frac{49\text{ N}}{5\text{ kg}} = \mathbf{9.8\text{ m/s}^2}$

**Check:** $a = 9.8\text{ m/s}^2 = g$ ✅. $F = 5 \times 9.8 = 49\text{ N}$ ✅.

### Example 5: Different Masses, Identical Acceleration

Two stones of masses $2\text{ kg}$ and $8\text{ kg}$ are released simultaneously from the roof of a building (neglect air drag, $g = 9.8\text{ m/s}^2$). Find the gravitational force and acceleration for each.

- For $2\text{ kg}$: $F = (2)(9.8) = \mathbf{19.6\text{ N}}$, $a = \frac{19.6}{2} = \mathbf{9.8\text{ m/s}^2}$
- For $8\text{ kg}$: $F = (8)(9.8) = \mathbf{78.4\text{ N}}$, $a = \frac{78.4}{8} = \mathbf{9.8\text{ m/s}^2}$

**Check:** $\frac{78.4}{19.6} = 4 = \frac{8}{2}$ ✅. Both accelerate identically at $9.8\text{ m/s}^2$ and land at the exact same moment.

### Example 6: A Planet with Twice the Mass and Twice the Radius

A hypothetical planet has a mass twice that of Earth ($2M$) and a radius twice that of Earth ($2R$). If Earth's surface gravity is $g_E = 9.8\text{ m/s}^2$, find $g$ on this planet.

Using $g = \frac{GM}{R^2}$:
$$g_{\text{planet}} = \frac{G(2M)}{(2R)^2} = \frac{2GM}{4R^2} = \frac{1}{2} \left(\frac{GM}{R^2}\right) = \frac{1}{2} g_E$$
$$g_{\text{planet}} = \frac{9.8\text{ m/s}^2}{2} = \mathbf{4.9\text{ m/s}^2}$$

**Check:** $\frac{2}{2^2} = \frac{2}{4} = \frac{1}{2}$ ✅. The doubled mass doubles the pull, but the doubled radius quarters it, yielding half the net gravity.

### Example 7: A Planet with Four Times the Mass and Twice the Radius

A planet has four times Earth's mass ($4M$) and twice Earth's radius ($2R$). Find its surface gravity.

$$g_{\text{planet}} = \frac{G(4M)}{(2R)^2} = \frac{4GM}{4R^2} = \frac{GM}{R^2} = g_E = \mathbf{9.8\text{ m/s}^2}$$

**Check:** Scaling factor is $\frac{4}{2^2} = \frac{4}{4} = 1$ ✅.

### General Scaling Rule:
From $g = \frac{GM}{R^2}$:
- If mass scales by factor $x \rightarrow g$ scales by factor $x$.
- If radius scales by factor $y \rightarrow g$ scales by factor $\frac{1}{y^2}$.
- Net scaling factor $= \frac{x}{y^2}$.

### Example 8: Upward Acceleration of Earth from a Falling 5 kg Object

A $5\text{ kg}$ object is dropped. By Newton's Third Law, the object exerts an equal upward force of $49\text{ N}$ on the Earth ($M_E = 6 \times 10^{24}\text{ kg}$). What is Earth's upward acceleration?

$$a_{\text{Earth}} = \frac{F}{M_E} = \frac{49\text{ N}}{6 \times 10^{24}\text{ kg}} = \mathbf{8.17 \times 10^{-24}\text{ m/s}^2}$$

**Check:** $(8.17 \times 10^{-24})(6 \times 10^{24}) = 49.02\text{ N} \approx 49\text{ N}$ ✅.  
With 23 zeroes after the decimal point, this acceleration is entirely imperceptible.

### Example 9: Acceleration due to Gravity at an Altitude of One Earth Radius (R + h)

Determine $g$ at an altitude of $h = 6.4 \times 10^6\text{ m}$ (one Earth radius) above Earth's surface ($M = 6 \times 10^{24}\text{ kg}$, $R = 6.4 \times 10^6\text{ m}$, $G = 6.67 \times 10^{-11}\text{ N m}^2/\text{kg}^2$).

Distance from Earth's centre is $r = R + h$:
- $r = 6.4 \times 10^6 + 6.4 \times 10^6 = 1.28 \times 10^7\text{ m} = 2R$
- $r^2 = (1.28 \times 10^7\text{ m})^2 = 1.6384 \times 10^{14}\text{ m}^2$
- $g = \frac{GM}{r^2} = \frac{4.002 \times 10^{14}}{1.6384 \times 10^{14}} = \mathbf{2.44\text{ m/s}^2}$

**Check:** Since distance from the centre doubled ($2R$), $g$ must decrease by $2^2 = 4$: $\frac{9.77}{4} = 2.44\text{ m/s}^2$ ✅.

### Example 10: Calculations Using g = 10 m/s²

"Taking $g = 10\text{ m/s}^2$, find the gravitational force and acceleration acting on a $2\text{ kg}$ ball."

- $F = mg = (2\text{ kg})(10\text{ m/s}^2) = \mathbf{20\text{ N}}$
- $a = \frac{F}{m} = \frac{20\text{ N}}{2\text{ kg}} = \mathbf{10\text{ m/s}^2}$

**Check:** $20 / 2 = 10\text{ m/s}^2$ ✅. Notice we strictly adhered to $10\text{ m/s}^2$ throughout without mixing in $9.8$.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Confusing the universal constant G with local acceleration g.**  
   *Correction:* $G$ is invariant everywhere ($6.67 \times 10^{-11}\text{ N m}^2/\text{kg}^2$). $g$ is the local acceleration ($9.8\text{ m/s}^2$ on Earth, $1.6\text{ m/s}^2$ on the Moon) and changes with location.

2. **Mistake 2: Believing heavier objects fall faster in a vacuum.**  
   *Correction:* In a vacuum, all masses experience the exact same acceleration $g$. Differences in air arise solely from aerodynamic drag.

3. **Mistake 3: Writing the unit of g as newtons (N).**  
   *Correction:* The unit of $g$ is $\text{m/s}^2$ or $\text{N/kg}$. Newtons ($\text{N}$) measure force, not acceleration.

4. **Mistake 4: Using surface radius R when an object is high above the planet.**  
   *Correction:* Always use the total distance from the centre: $r = R + h$.

5. **Mistake 5: Assuming gravity is zero in space.**  
   *Correction:* Gravity reaches far out into space; at an altitude of $6400\text{ km}$, $g$ is still a notable $2.44\text{ m/s}^2$.

6. **Mistake 6: Mixing 9.8 and 10 within the same problem.**  
   *Correction:* Maintain consistency. Use $10\text{ m/s}^2$ only when explicitly requested; otherwise stick strictly to $9.8\text{ m/s}^2$.

---

## Quick Recap

- **Free Fall:** An object falling solely under the influence of gravity, with air resistance neglected.
- **Formula for g:** $g = \frac{GM}{R^2}$, derived by equating $F = mg$ and $F = G\frac{Mm}{R^2}$.
- **Earth's Surface Value:** $g \approx 9.8\text{ m/s}^2$ (or $9.8\text{ N/kg}$). When convenient, problem sets may approximate this as $10\text{ m/s}^2$.
- **Independence from Mass:** The falling body's mass cancels out ($g = GM/R^2$). A $1\text{ kg}$ mass and a $10\text{ kg}$ mass accelerate at the exact same rate.
- **Coin and Feather Experiment:** In air, drag retards the feather; in a vacuum, both fall simultaneously side by side.
- **Planetary Variations:** On the Moon, $g \approx 1.6\text{ m/s}^2$ (roughly $1/6$ of Earth's value).
- **Altitude and Latitude:** $g$ is slightly higher at Earth's poles than at the equator, and diminishes as distance from the centre increases ($r = R + h$).

---

## Practice Questions

1. More precise astronomical values for Earth are $M = 5.97 \times 10^{24}\text{ kg}$ and $R = 6.37 \times 10^6\text{ m}$. Using $G = 6.67 \times 10^{-11}\text{ N m}^2/\text{kg}^2$, calculate $g$ at Earth's surface. Express your answer in $\text{m/s}^2$ and in $\text{N/kg}$.

2. Mars has a mass of $6.4 \times 10^{23}\text{ kg}$ and a mean radius of $3.4 \times 10^6\text{ m}$. Find the acceleration due to gravity on the surface of Mars.

3. A $3\text{ kg}$ stone and a $15\text{ kg}$ stone are released together from the same height (ignore air resistance, $g = 9.8\text{ m/s}^2$). Find the gravitational force on each and the acceleration of each. Which one reaches the ground first?

4. A planet has a mass $3$ times that of Earth and a radius $3$ times that of Earth. If $g$ on Earth is $9.8\text{ m/s}^2$, find $g$ on this planet (rounded to two decimal places).

5. A satellite-like object orbits at an altitude of $3.6 \times 10^6\text{ m}$ above Earth's surface. Find the acceleration due to gravity at this altitude. ($M = 6 \times 10^{24}\text{ kg}$, $R = 6.4 \times 10^6\text{ m}$, $G = 6.67 \times 10^{-11}\text{ N m}^2/\text{kg}^2$.)

6. An astronaut of mass $60\text{ kg}$ is on the Moon where $g = 1.63\text{ m/s}^2$. Find the gravitational force on the astronaut and their acceleration if they slip and fall.

7. A $2\text{ kg}$ ball falls near Earth's surface. Find the force exerted on the Earth by the ball and the resulting acceleration of the Earth. (Earth's mass $= 6 \times 10^{24}\text{ kg}$, $g = 9.8\text{ m/s}^2$.)

8. State True or False:  
   (a) The value of $g$ depends on the mass of the falling object.  
   (b) In a vacuum, a feather and a coin fall with the exact same acceleration.  
   (c) $g$ is measured in newtons ($\text{N}$).  
   (d) $g$ is exactly zero in outer space.  
   (e) $g$ is slightly greater at the poles than at the equator.

9. Explain in your own words why a feather falls slower than a coin in air, but falls at the exact same rate in an evacuated vacuum tube.

### Answers

1. $GM = (6.67 \times 10^{-11})(5.97 \times 10^{24}) = 3.982 \times 10^{14}\text{ N m}^2/\text{kg}$.  
   $R^2 = (6.37 \times 10^6\text{ m})^2 = 4.058 \times 10^{13}\text{ m}^2$.  
   $g = \frac{3.982 \times 10^{14}}{4.058 \times 10^{13}} = \mathbf{9.81\text{ m/s}^2 = 9.81\text{ N/kg}}$.  
   *Check:* $9.81 \times 4.058 \times 10^{13} = 3.981 \times 10^{14}$ ✅

2. $GM = (6.67 \times 10^{-11})(6.4 \times 10^{23}) = 4.269 \times 10^{13}\text{ N m}^2/\text{kg}$.  
   $R^2 = (3.4 \times 10^6\text{ m})^2 = 1.156 \times 10^{13}\text{ m}^2$.  
   $g = \frac{4.269 \times 10^{13}}{1.156 \times 10^{13}} = \mathbf{3.69\text{ m/s}^2}$.  
   *Check:* $3.69 \times 1.156 \times 10^{13} = 4.266 \times 10^{13}$ ✅

3. For $3\text{ kg}$: $F = (3)(9.8) = \mathbf{29.4\text{ N}}$, $a = \frac{29.4}{3} = \mathbf{9.8\text{ m/s}^2}$.  
   For $15\text{ kg}$: $F = (15)(9.8) = \mathbf{147\text{ N}}$, $a = \frac{147}{15} = \mathbf{9.8\text{ m/s}^2}$.  
   Because both accelerations are identical, **both stones reach the ground at the exact same moment**.  
   *Check:* $147 / 29.4 = 5 = 15 / 3$ ✅

4. $g_{\text{new}} = g_E \times \frac{3}{3^2} = 9.8 \times \frac{3}{9} = \frac{9.8}{3} = \mathbf{3.27\text{ m/s}^2}$.  
   *Check:* $3.27 \times 3 = 9.81 \approx 9.8\text{ m/s}^2$ ✅

5. $r = R + h = 6.4 \times 10^6 + 3.6 \times 10^6 = 1.0 \times 10^7\text{ m}$.  
   $r^2 = 1.0 \times 10^{14}\text{ m}^2$.  
   $g = \frac{4.002 \times 10^{14}}{1.0 \times 10^{14}} = \mathbf{4.00\text{ m/s}^2}$.  
   *Check:* $4.00 \times 1.0 \times 10^{14} = 4.00 \times 10^{14} \approx GM$ ✅

6. Force: $F = mg = (60\text{ kg})(1.63\text{ m/s}^2) = \mathbf{97.8\text{ N}}$.  
   Acceleration: $a = \frac{97.8\text{ N}}{60\text{ kg}} = \mathbf{1.63\text{ m/s}^2}$.  
   *Check:* $1.63 \times 60 = 97.8\text{ N}$ ✅

7. Downward force on the ball: $F = (2\text{ kg})(9.8\text{ m/s}^2) = 19.6\text{ N}$.  
   By Newton's Third Law, the ball exerts an equal upward force of **$19.6\text{ N}$** on the Earth.  
   Earth's upward acceleration: $a_{\text{Earth}} = \frac{19.6\text{ N}}{6 \times 10^{24}\text{ kg}} = \mathbf{3.27 \times 10^{-24}\text{ m/s}^2}$.  
   *Check:* $(3.27 \times 10^{-24})(6 \times 10^{24}) = 19.62\text{ N}$ ✅

8. (a) **False** ❌. The mass of the falling body cancels out in $g = GM/R^2$.  
   (b) **True** ✅. With air resistance removed, gravity acts equally on all objects.  
   (c) **False** ❌. Acceleration $g$ is measured in $\text{m/s}^2$ (or $\text{N/kg}$).  
   (d) **False** ❌. Gravitational field extends into space and weakens gradually with distance.  
   (e) **True** ✅. The poles are slightly closer to Earth's centre than the equator.

9. In air, the feather experiences significant aerodynamic drag due to its broad surface area and low density, which slows its descent. In a vacuum, air resistance is eliminated entirely; gravity is the sole force, providing both objects with the identical acceleration $g$, causing them to fall side by side.

---

Now you can explain to Maya why the coin and feather landed together: removing air resistance leaves gravity as the sole acting force, and gravity accelerates all objects at the exact same rate!

**What comes next?** Armed with a clear understanding of $g$, we are ready to calculate how fast falling and upward-tossed objects travel, and how high they climb, using the **equations of motion under gravity in Topic 4**.
