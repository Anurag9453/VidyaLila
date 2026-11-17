# Chapter: Circles

> **Class:** 9 | **Subject:** Mathematics
> **This is a brand-new chapter.** A few ideas from earlier chapters will come in handy here: [Congruence of Triangles Topic 4](../congruence-of-triangles/congruence-of-triangles-part4.md) (triangle inequality) and [Coordinate Geometry](../coordinate-geometry/coordinate-geometry.md) (coordinates of points).
> **Topics covered in this file:**
> 1. Circle, Terms Related to a Circle, and Position of a Point with respect to a Circle

---

# Topic 1: Circle, Terms Related to a Circle, and Position of a Point

So far, we have studied straight lines, angles, triangles, and quadrilaterals — shapes built entirely out of **straight edges**. In this chapter, we meet a shape with not a single corner and not a single straight edge, yet one of the most perfectly balanced shapes in the universe (from bicycle wheels to planetary orbits): the **circle**.

---

## Daisy the Goat's Grazing Patch

On a quiet farm, Elena has a playful goat named **Daisy**. Every morning, Elena takes Daisy out to a grassy meadow, drives a wooden **peg** into the ground, and ties Daisy to the peg with a **$7\text{-metre}$ rope**.

Daisy grazes happily all day. By evening, Elena looks at the meadow and notices a **perfectly round patch** in the grass:

- Every blade of grass near the peg has been eaten.
- Up to one sharp boundary, the grass is grazed short; just beyond that boundary, the grass is completely untouched.
- That boundary is a **perfect circle**.

Why? Because Daisy can **never walk farther than $7\text{ metres}$** from the peg. When she pulls the rope completely taut and walks all the way around, she stays **exactly $7\text{ metres}$** from the peg at every single point. All those points together trace out a **circle**.

In this picture:
- **The peg** = the **centre** of the circle
- **The length of the rope ($7\text{ m}$)** = the **radius** of the circle
- **The round outer boundary** = the **circle** itself
- **The grazed grass inside** = the **interior** of the circle
- **The tall grass outside** that Daisy cannot reach = the **exterior** of the circle

In this topic, we will explore all of these terms clearly and precisely.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Circle** | The set of all points in a plane at a fixed distance from a fixed point | Daisy's outer boundary, or the rim of a bicycle wheel |
| **Centre** | The fixed point from which every point on the circle is equidistant | The wooden peg |
| **Radius** | The fixed distance from the centre to any point on the circle (or the segment joining them) | The $7\text{ m}$ rope, or a bicycle spoke |
| **Chord** | A line segment joining any two points on a circle | A straight cut across a round pizza |
| **Diameter** | A chord that passes through the centre; its length is $2 \times \text{radius}$ | Cutting a round pizza straight through the middle |
| **Arc** | A curved piece of a circle | A curved section of a tunnel arch or wheel rim |
| **Circumference** | The total distance around the entire circle | One full walk around Daisy's boundary |
| **Interior / Exterior** | The region inside / outside the circle | Grazed grass / untouched grass |
| **Segment** | The region enclosed between a chord and an arc | A crust slice cut off by a straight chord |
| **Sector** | The region enclosed between two radii and an arc | A classic wedge-shaped slice of pizza or pie |
| **Semicircle** | Half of a circle, formed by a diameter | Half of a round pie |
| **Secant** | A line that cuts across a circle at two distinct points | A straight skewer passing through a round ring |
| **Tangent** | A line that touches a circle at exactly one point | Flat ground touching a bicycle tyre at one spot |
| **Concentric circles** | Circles sharing the same centre but having different radii | Ripples spreading out from a pebble dropped in a pond |

---

## Part A: What Is a Circle?

### Definition

> A **circle** is the collection of **all points in a plane** that lie at a **fixed distance** from a **fixed point**.
> - The fixed point is called the **centre**.
> - The fixed distance is called the **radius**.

Daisy's meadow makes this crystal clear: the peg is fixed, the rope length is fixed, and every spot where Daisy stands with the rope pulled completely tight lies on the circle.

### How Do You Draw a Circle?

Take a piece of thread, a pin, and a pencil:
1. Push the pin into a sheet of paper (that is the centre).
2. Tie one end of the thread to the pin and the other end to the pencil.
3. Pull the thread tight and sweep the pencil all the way around.

The curve you trace is a circle. A **compass** works in the exact same way: the needle sits at the centre, the pencil tip traces the circle, and the fixed opening between them is the radius.

### An Important Detail: "In a Plane"

If you gather all points at a fixed distance from a fixed point **in 3D space** instead of on a flat sheet, you get a **sphere** (like a basketball or a planet), not a circle. A circle always lies in a **flat plane**.

```
            * * *
         *         *
       *             *
      *       O-------*      O = centre
       *     (r)     *       Distance from O to every * = r
         *         *
            * * *
```

---

## Part B: Terms Related to a Circle

### 1. Radius

The line segment **$OP$** joining the centre $O$ to any point $P$ on the circle is a **radius** (plural: *radii*). Its length is also called the radius and is usually denoted by **$r$**.

- **All radii of the same circle are equal** (directly by definition).
- A circle has **infinitely many radii**, because there are infinitely many points on the circle and each can be joined to the centre (just like spokes on a wheel, only infinitely many!).

### 2. Chord

A line segment joining **any two points** on a circle is called a **chord**.

```
            * * *
         *         *
       A-------------B      AB = chord
      *                *
       *      O       *
         *         *
            * * *
```

Imagine making a straight cut across a round flatbread or pizza from one edge to another — that straight line is a chord.

### 3. Diameter

A chord that **passes through the centre** of the circle is called a **diameter**.

```
            * * *
         *         *
       *             *
      P-------O-------Q      PQ = diameter (passes through centre O)
       *             *       OP = OQ = r
         *         *
            * * *
```

Notice that $PQ = PO + OQ = r + r = \mathbf{2r}$.

> **$\text{Diameter} = 2 \times \text{radius}$**, or **$\text{radius} = \text{diameter} \div 2$**.

- Every diameter is a chord.
- However, **not** every chord is a diameter (only those passing through the centre).
- A circle also has **infinitely many diameters**, and all of them have the **same length** ($2r$).

### Why Is the Diameter the Longest Chord?

Take any chord $AB$ that does **not** pass through the centre $O$, and join $O$ to $A$ and $B$ to form $\triangle OAB$.

```
            * * *
         *         *
       A-------------B
      *  \         /   *
       *   \     /     *
         *   \ /     *
            * O *
```

In [Congruence of Triangles Topic 4](../congruence-of-triangles/congruence-of-triangles-part4.md), we proved the triangle inequality: in any triangle, the sum of two sides is strictly greater than the third side. Therefore:

$$AB < OA + OB = r + r = 2r = \text{diameter}$$

Every chord that misses the centre is strictly shorter than $2r$, whereas a chord through the centre measures exactly $2r$. Hence:

> **The diameter is the longest chord of a circle.**

### 4. Arc

Any **curved piece** of a circle's boundary is called an **arc**. Choosing two points $A$ and $B$ on a circle splits it into **two arcs**. We write arc $AB$ as $\widehat{AB}$.

Think of a curved railway tunnel arch or a broken hoop — each curved section is an arc. How to distinguish the shorter arc from the longer arc, and how to measure arcs in degrees, is the focus of **Topic 2**.

### 5. Circumference

The total **distance around one complete lap** of a circle is its **circumference**.

> **$\text{Circumference} = 2\pi r$** (or **$\pi d$**, where $d = \text{diameter}$)
> Here $\pi$ is approximately **$\frac{22}{7}$** or **$3.14$**.

Keep the distinction sharp:
- A **circle** is a **curve (a geometric shape)**.
- Its **circumference** is the **length** of that curve (a number with units, such as $44\text{ m}$).

Daisy's rope is $7\text{ m}$ long, so the length of her grazing boundary is:

$$C = 2 \times \frac{22}{7} \times 7 = \mathbf{44\text{ m}}$$

If Elena wanted to put a fence around that exact boundary, she would need $44\text{ m}$ of fencing.

### 6. Interior, Exterior, and Circular Region

A circle divides the plane in which it lies into **three regions**:

| Part | What it contains | In Daisy's story |
|---|---|---|
| **Interior** | All points inside the circle | The grazed grass |
| **The circle itself** | All points on the boundary | The circular edge |
| **Exterior** | All points outside the circle | The untouched grass |

Together, the **circle and its interior** form the **circular region** (like a full disc or coin, whereas a hula hoop is just the circle itself).

### 7. Segment and Sector

- **Segment:** A chord divides the circular region into two pieces. Each piece (bounded by a **chord and an arc**) is a **segment**.
- **Sector:** The region bounded by **two radii and an arc** is a **sector**.

```
   SEGMENT                          SECTOR
       * * *                           * * *
    *  ////// *                     *    |    *
   A----------B   <- chord         *     |     *
  *              *                *      O      *
   *            *                  *   /////   *
     *        *                      * ///// *
        * *                             * *
  //// = segment                   //// = between two radii from O and an arc
```

Think of slicing a round pie:
- A **straight slice across** from edge to edge cuts off a **segment**.
- **Two cuts meeting at the centre** carve out a wedge-shaped **sector**.

Minor vs. major segments and sectors will be explored further in **Topic 2**.

### 8. Semicircle

A diameter divides a circle into **two equal halves**. Each half is called a **semicircle** (think of the curved entrance of a tunnel arch).

### 9. Secant and Tangent

A straight line and a circle in the same plane can interact in one of three ways:

```
  (a) No common point         (b) Secant: 2 points        (c) Tangent: 1 point

  ------------------                                           * * *
                                   * * *                    *         *
       * * *                    *         *                *     O     *
    *         *            ----P-----------Q----            *         *
   *     O     *              *     O     *                    * * *
    *         *                *         *               ---------T---------
       * * *                      * * *
```

- **(a)** The line misses the circle completely.
- **(b) Secant:** The line intersects the circle at **two points** ($P$ and $Q$), passing straight through it.
- **(c) Tangent:** The line touches the circle at **exactly one point** ($T$). A flat road touching a bicycle tyre at a single contact point is a real-world tangent.

For now, simply learn these names and meanings; tangent theorems arrive in Class 10.

### 10. Concentric Circles

Drop a pebble into still water and watch the **rings of ripples** spread outward — all sharing the **exact same centre** where the pebble landed. Circles with the **same centre and different radii** are called **concentric circles** (like an archery target or slices through an onion).

```
           * * * * *
        *    * * *    *
      *    *   O   *    *       O = common centre
        *    * * *    *
           * * * * *
```

---

## Part C: Position of a Point (With Respect to a Circle)

In Daisy's meadow, Elena placed three bundles of hay:
- Bundle **$X$** is **$5\text{ m}$** from the peg.
- Bundle **$Y$** is **$7\text{ m}$** from the peg.
- Bundle **$Z$** is **$9\text{ m}$** from the peg.

With a $7\text{ m}$ rope, which bundles can Daisy reach?
- **$X$ ($5\text{ m}$):** $5 < 7$, so Daisy reaches it easily. $X$ lies **inside** the circle.
- **$Y$ ($7\text{ m}$):** $7 = 7$, so Daisy reaches it right at full stretch. $Y$ lies **on** the circle.
- **$Z$ ($9\text{ m}$):** $9 > 7$, so the rope comes up short. $Z$ lies **outside** the circle.

### Rule

Let a circle have centre $O$ and radius $r$. If a point $P$ is at distance $d = OP$ from the centre, then:

| Condition | Position of point $P$ |
|---|---|
| **$d < r$** | **Inside** the circle (**interior**) |
| **$d = r$** | **On** the circle |
| **$d > r$** | **Outside** the circle (**exterior**) |

> Key habit: **Always compare the distance to the radius** — never to the diameter!

### Solved Examples

**Example 1:** A circle has centre $O$ and radius $5\text{ cm}$. Given $OP = 3\text{ cm}$, $OQ = 5\text{ cm}$, and $OR = 7.5\text{ cm}$, state the position of each point.

- $OP = 3 < 5 \implies$ **$P$ lies inside** the circle.
- $OQ = 5 = 5 \implies$ **$Q$ lies on** the circle.
- $OR = 7.5 > 5 \implies$ **$R$ lies outside** the circle.

**Example 2:** A circle has diameter $12\text{ cm}$. Point $A$ is $7\text{ cm}$ from the centre. Where does $A$ lie?

First find the radius: $r = 12 \div 2 = \mathbf{6\text{ cm}}$.
Since $OA = 7 > 6$, **$A$ lies outside** the circle.
*(Comparing $7$ to the diameter $12$ by mistake would wrongly claim $A$ is inside!)*

**Example 3 (with coordinates):** A circle is centred at the origin $O(0, 0)$ with radius $5$. Determine the position of $(3, 4)$, $(2, 1)$, $(6, 0)$, and $(0, -5)$.

The distance of $(x, y)$ from the origin is $\sqrt{x^2 + y^2}$ by Pythagoras' theorem (linking back to [Coordinate Geometry](../coordinate-geometry/coordinate-geometry.md)):

| Point | Distance $d$ | Comparing $d$ and $r = 5$ | Position |
|---|---|---|---|
| $(3, 4)$ | $\sqrt{9 + 16} = \sqrt{25} = 5$ | $d = r$ | **On** the circle |
| $(2, 1)$ | $\sqrt{4 + 1} = \sqrt{5} \approx 2.24$ | $d < r$ | **Inside** |
| $(6, 0)$ | $6$ (directly along the $x$-axis) | $d > r$ | **Outside** |
| $(0, -5)$ | $5$ (directly along the $y$-axis) | $d = r$ | **On** the circle |

**Example 4:** Does the centre itself lie on the circle?

The distance from the centre to itself is **$0$**. Since $0 < r$, the centre always lies in the **interior** of the circle, never on the circle.

---

## Part D: Problems on Circumference and Diameter

**Example 5:** A circle has radius $7\text{ cm}$. Find its diameter and circumference.

- $\text{Diameter} = 2 \times 7 = \mathbf{14\text{ cm}}$
- $\text{Circumference} = 2 \times \frac{22}{7} \times 7 = \mathbf{44\text{ cm}}$

**Example 6:** A circle has diameter $21\text{ cm}$. Find its radius and circumference.

- $\text{Radius} = 21 \div 2 = \mathbf{10.5\text{ cm}}$
- $\text{Circumference} = \pi d = \frac{22}{7} \times 21 = \mathbf{66\text{ cm}}$

**Example 7:** The circumference of a circle is $88\text{ cm}$. Find its radius.

$$2\pi r = 88 \implies 2 \times \frac{22}{7} \times r = 88 \implies \frac{44}{7}r = 88$$

$$r = 88 \times \frac{7}{44} = \mathbf{14\text{ cm}}$$

**Check:** $2 \times \frac{22}{7} \times 14 = 2 \times 22 \times 2 = 88$ ✅.

**Example 8:** A circle has radius $5\text{ cm}$. Can it have a chord of length $11\text{ cm}$?

The longest possible chord is a diameter $= 2 \times 5 = 10\text{ cm}$. Since $11 > 10$, **no**, such a chord cannot exist.

**Example 9:** How many radii and how many diameters can a circle have?

**Infinitely many** of each. A circle contains infinitely many points: each point defines a radius to the centre, and extending each through the centre gives a diameter.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Confusing radius and diameter.**
   $\text{Diameter} = 2 \times \text{radius}$. When a problem gives the diameter and a formula needs $r$, halve it first! If diameter $= 14$, then $r = 7$, not $14$.

2. **Mistake 2: Comparing a point's distance to the diameter instead of the radius.**
   Position is always determined against the **radius**. With diameter $12$ and distance $7$, $r = 6$, so the point is **outside**, not inside.

3. **Mistake 3: Thinking every chord is a diameter.**
   Only a chord passing **through the centre** is a diameter. Every diameter is a chord, but most chords are not diameters.

4. **Mistake 4: Treating "circle" and "circular region" as the same.**
   A circle is only the **outer boundary curve** (like a metal ring). The boundary plus the interior makes a circular region (like a coin or disc).

5. **Mistake 5: Mixing up "circle" and "circumference".**
   A circle is a **geometric shape**; its circumference is a **length** (a numerical measurement).

6. **Mistake 6: Thinking a tangent cuts a circle at two points.**
   A line crossing at two points is a **secant**. A **tangent** touches the circle at **just one point**.

7. **Mistake 7: Thinking the centre lies on the circle.**
   The centre lies in the **interior** of the circle. Points on the circle are at distance $r$ from the centre, whereas the centre is at distance $0$.

8. **Mistake 8: Confusing an arc with a chord.**
   A chord is a **straight** line segment; an arc is a **curved** portion of the circle. Think of a bow: the curved wood is the arc, and the taut bowstring is the chord!

---

## Quick Recap

- **Circle:** all points in a plane at a fixed distance (**radius**) from a fixed point (**centre**).
- **Chord:** a segment joining two points on the circle. **Diameter:** a chord through the centre, length **$2r$**, and the **longest chord**.
- A circle has **infinitely many** equal radii and equal diameters.
- **Arc:** a curved section of the circle (studied in detail in Topic 2).
- **Circumference $= 2\pi r = \pi d$.**
- A circle splits its plane into **interior, the circle, and exterior**. Circle + interior = **circular region**.
- **Segment:** enclosed by a chord and an arc. **Sector:** enclosed by two radii and an arc. **Semicircle:** half a circle bounded by a diameter.
- **Secant:** cuts the circle at two points. **Tangent:** touches the circle at one point.
- **Concentric circles:** share the same centre with different radii.
- **Position of a point:** $d < r$ inside, $d = r$ on, $d > r$ outside — always compare to the **radius**.

---

## Practice Questions

1. Fill in the blanks:
   (a) The diameter of a circle is ______ times its radius.
   (b) The longest chord of a circle is its ______.
   (c) A point whose distance from the centre equals the radius lies ______ the circle.
   (d) Circles having the same centre but different radii are called ______ circles.
   (e) A line that touches a circle at exactly one point is called a ______.

2. The radius of a circle is $4.2\text{ cm}$. Find its diameter and circumference. (Take $\pi = \frac{22}{7}$.)

3. The circumference of a circle is $154\text{ cm}$. Find its radius. (Take $\pi = \frac{22}{7}$.)

4. A circle has centre $O$ and radius $6\text{ cm}$. Points $A, B$ and $C$ are such that $OA = 4\text{ cm}$, $OB = 6\text{ cm}$ and $OC = 8.5\text{ cm}$. State the position of each point with respect to the circle.

5. A circle has its centre at the origin and radius $10\text{ units}$. State whether each point lies inside, on or outside the circle:
   (a) $(6, 8)$  (b) $(5, 5)$  (c) $(0, -10)$  (d) $(11, 0)$

6. State whether each statement is true or false. Give a reason.
   (a) Every chord of a circle is a diameter.
   (b) A circle has infinitely many radii.
   (c) A tangent cuts a circle at two points.
   (d) The centre of a circle lies in its interior.
   (e) The line segment joining any two points on a circle is a chord.

7. The radius of a circle is $5\text{ cm}$. Can it have a chord of length $12\text{ cm}$? Give a reason.

8. A goat is tied to a peg with a rope $14\text{ m}$ long.
   (a) Find the length of the boundary of the region it can graze. (Take $\pi = \frac{22}{7}$.)
   (b) Can it reach grass placed $10\text{ m}$ from the peg? What about grass placed $15\text{ m}$ from the peg?

9. The diameter of a cycle wheel is $70\text{ cm}$. How far does the cycle move in one complete revolution of the wheel? How far in $100$ revolutions? (Take $\pi = \frac{22}{7}$.)

### Answers

1. (a) **$2$**  (b) **diameter**  (c) **on**  (d) **concentric**  (e) **tangent**

2. $\text{Diameter} = 2 \times 4.2 = \mathbf{8.4\text{ cm}}$.
   $\text{Circumference} = 2 \times \frac{22}{7} \times 4.2 = \frac{22}{7} \times 8.4 = 22 \times 1.2 = \mathbf{26.4\text{ cm}}$.

3. $2 \times \frac{22}{7} \times r = 154 \implies \frac{44}{7} r = 154 \implies r = 154 \times \frac{7}{44} = \mathbf{24.5\text{ cm}}$.
   Check: $\frac{44}{7} \times 24.5 = 44 \times 3.5 = 154$ ✅.

4. $OA = 4 < 6 \implies$ **$A$ lies inside**.
   $OB = 6 = 6 \implies$ **$B$ lies on** the circle.
   $OC = 8.5 > 6 \implies$ **$C$ lies outside**.

5. (a) $\sqrt{36 + 64} = \sqrt{100} = 10 = r \implies$ **on** the circle.
   (b) $\sqrt{25 + 25} = \sqrt{50} \approx 7.07 < 10 \implies$ **inside**.
   (c) Distance $10 = r$ (along the $y$-axis) $\implies$ **on** the circle.
   (d) Distance $11 > 10$ (along the $x$-axis) $\implies$ **outside**.

6. (a) **False** ❌. Only a chord passing through the centre is a diameter.
   (b) **True** ✅. There are infinitely many points on a circle, each giving a radius.
   (c) **False** ❌. A tangent touches a circle at just one point; a line cutting at two points is a secant.
   (d) **True** ✅. The centre is at distance $0 < r$ from itself.
   (e) **True** ✅. That is the definition of a chord (for any two distinct points on the circle).

7. **No.** The longest chord is a diameter $= 2 \times 5 = 10\text{ cm}$. Since $12\text{ cm} > 10\text{ cm}$, no such chord can exist.

8. (a) Boundary length $= \text{circumference} = 2 \times \frac{22}{7} \times 14 = \mathbf{88\text{ m}}$.
   (b) $10\text{ m} < 14\text{ m}$, so **yes**, it can reach it (inside). $15\text{ m} > 14\text{ m}$, so **no**, it is outside the circle.

9. In one full revolution, the bicycle travels a distance equal to the wheel's circumference:
   $\text{Circumference} = \pi d = \frac{22}{7} \times 70 = \mathbf{220\text{ cm}}$.
   In $100$ revolutions: $220 \times 100 = 22{,}000\text{ cm} = \mathbf{220\text{ m}}$.

---

Well done! You now have all the foundational vocabulary of circles at your command. Whenever you want a quick mental picture, just think of Daisy in her meadow: the peg is the centre, the rope is the radius, and her circular path is the circle!

**In the next topic (Topic 2):** How do we measure a curved piece of a circle — an arc — in degrees? What separates a **minor arc** from a **major arc**, and what does "alternate segment" mean? Let us find out!
