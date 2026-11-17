# Chapter: Coordinate Geometry (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [coordinate-geometry-part2.md](coordinate-geometry-part2.md).** (Topic 1 is in [coordinate-geometry.md](coordinate-geometry.md).)
> **Topics covered in this file:**
> 3. Points on the Coordinate Axes

---

# Topic 3: Points on the Coordinate Axes

In Topic 2, we learned that every point has two coordinates: the **abscissa** ($x$, how far left or right) and the **ordinate** ($y$, how far up or down). Using the fountain at the city plaza as the origin, we tracked down Leo at $(3, 2)$ and Sophia at $(-2, -1)$, plotted points with integers, decimals, and fractions, and saw how the two axes divide the plane into **four quadrants**, each with its own sign pattern.

One mystery remained: **if a point sits directly on an axis, which quadrant does it belong to?** In this final topic, we will answer that question and explore every key application of points lying on the coordinate axes. It is a concise topic, yet one of the most frequently tested in exams.

---

## Two Main Avenues on a City Grid

Imagine a well-planned city built around two major straight avenues:

- **Oak Avenue**, running straight **east to west** (left–right).
- **Harbor Street**, running straight **north to south** (up–down).

Right in the heart of the city, the two avenues cross at **Central Square**.

Let us lay a digital map grid directly over this city:
- Oak Avenue $=$ **$x$-axis**
- Harbor Street $=$ **$y$-axis**
- Central Square $=$ **origin $(0, 0)$**

Together, the two avenues split the city into four **districts** — our four quadrants.

Now suppose **Elena** runs a coffee kiosk right on **Oak Avenue**, $4\text{ km}$ east of Central Square. To reach Elena's kiosk from Central Square, you walk **$4\text{ km}$ straight east**. You never turn north or south. So:
- East–west movement ($x$): **$4$**
- North–south movement ($y$): **$0$**

Her kiosk's coordinates are **$(4, 0)$**.

Notice something subtle: Elena's kiosk does **not** sit inside any of the four districts, because it sits right on the avenue itself! A dividing road forms the **border** between districts; it does not belong to just one district.

That single observation captures the entire topic:
- A point on an axis always has **at least one coordinate equal to $0$**.
- A point on an axis **does not lie in any quadrant**.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Point on the $x$-axis** | A point sitting directly on the horizontal axis, with no vertical shift ($y = 0$) | $(4, 0)$, $(-3, 0)$ |
| **Point on the $y$-axis** | A point sitting directly on the vertical axis, with no horizontal shift ($x = 0$) | $(0, 5)$, $(0, -2)$ |
| **Origin** | The intersection of both axes, where all measurements begin | $(0, 0)$ |
| **Positive $x$-axis** | The half of the $x$-axis extending to the right of the origin | $(6, 0)$ |
| **Negative $x$-axis** | The half of the $x$-axis extending to the left of the origin | $(-6, 0)$ |
| **Positive $y$-axis** | The half of the $y$-axis extending above the origin | $(0, 6)$ |
| **Negative $y$-axis** | The half of the $y$-axis extending below the origin | $(0, -6)$ |
| **Distance from an axis** | How far a point is from an axis (always positive or $0$) | $(3, -4)$ is $4$ units from the $x$-axis |

---

## Part A: Points on the $x$-Axis

A point lies on the **$x$-axis** whenever it has **moved neither up nor down**. That means its **$y$-coordinate (ordinate) is $0$**.

> **General form of any point on the $x$-axis: $(a, 0)$**

Here, $a$ can be any real number — positive, negative, a fraction, or a decimal.

**Examples:**

| Point | Location | Reason |
|---|---|---|
| $(5, 0)$ | On the $x$-axis, $5$ units right of the origin | $y = 0$ |
| $(-3, 0)$ | On the $x$-axis, $3$ units left of the origin | $y = 0$ |
| $(2.5, 0)$ | On the $x$-axis, $2.5$ units right of the origin | $y = 0$ |
| $(-1/2, 0)$ | On the $x$-axis, half a unit left of the origin | $y = 0$ |

### Quick Memory Trick

**A point on the $x$-axis only needs to tell you its $x$-position.** Because there is no up-or-down movement, $y$ drops to $0$.

---

## Part B: Points on the $y$-Axis

A point lies on the **$y$-axis** whenever it has **moved neither left nor right**. That means its **$x$-coordinate (abscissa) is $0$**.

> **General form of any point on the $y$-axis: $(0, b)$**

**Examples:**

| Point | Location | Reason |
|---|---|---|
| $(0, 4)$ | On the $y$-axis, $4$ units above the origin | $x = 0$ |
| $(0, -6)$ | On the $y$-axis, $6$ units below the origin | $x = 0$ |
| $(0, 1/2)$ | On the $y$-axis, half a unit above the origin | $x = 0$ |

Back on our city grid, **Dr. Bennett** works at the science observatory on **Harbor Street**, $3\text{ km}$ north of Central Square. To get there, you travel straight north with zero east–west movement, so the observatory's coordinates are **$(0, 3)$**.

### One-Line Rule (for Both Axes)

> **Whichever axis the point sits on, only that coordinate survives — the other coordinate is $0$.**

- On the $x$-axis $\implies x$ survives, $y = 0 \implies$ **$(a, 0)$**
- On the $y$-axis $\implies y$ survives, $x = 0 \implies$ **$(0, b)$**

---

## Part C: The Origin — Lying on Both Axes

Central Square lies on *both* Oak Avenue and Harbor Street at the same time. In the same way, the **origin $(0, 0)$**:
- lies on the $x$-axis (because $y = 0$), **and**
- lies on the $y$-axis (because $x = 0$).

> **The origin $(0, 0)$ is the only point that lies on both axes.**

---

## Part D: Positive and Negative Halves of the Axes

The origin splits each axis into two opposite rays (halves):

```
                    positive y-axis
                        (0, +)
                          ↑
                          |
negative x-axis  ←--------O--------→  positive x-axis
    (-, 0)                |               (+, 0)
                          ↓
                    negative y-axis
                        (0, -)
```

| Half-Axis | Form of Point | Example |
|---|---|---|
| Positive $x$-axis | $(a, 0)$, with $a > 0$ | $(7, 0)$ |
| Negative $x$-axis | $(a, 0)$, with $a < 0$ | $(-4, 0)$ |
| Positive $y$-axis | $(0, b)$, with $b > 0$ | $(0, 2)$ |
| Negative $y$-axis | $(0, b)$, with $b < 0$ | $(0, -9)$ |

**Note:** Saying "$(-4, 0)$ lies on the negative $x$-axis" simply means it lies on the **left half** of the $x$-axis — not that there is a separate line. The $x$-axis is one continuous straight line with two sides separated by the origin.

### Plotting Points on the Axes

Plot these five points on a grid: $A(-3, 0)$, $B(4, 0)$, $D(0, 2)$, $E(0, -2)$, and $O(0, 0)$.

```
                    ↑ y
                  3 +
                  2 •  D(0, 2)
                  1 +
     ←--+--•--+--+--O--+--+--+--•--→ x
       -4 -3 -2 -1  0  1  2  3  4
                 -1 +
                 -2 •  E(0, -2)
                 -3 +
```

- $A(-3, 0)$: on the $x$-axis, $3$ units left of the origin
- $B(4, 0)$: on the $x$-axis, $4$ units right of the origin
- $D(0, 2)$: on the $y$-axis, $2$ units above the origin
- $E(0, -2)$: on the $y$-axis, $2$ units below the origin
- $O(0, 0)$: at the origin

Every single one of these points sits **directly on one of the axis lines**, never inside the open regions of a quadrant.

**Plotting tip:** For a point on the $x$-axis, just walk along the $x$-axis and stop right there (do not move up or down). For a point on the $y$-axis, just climb up or down along the $y$-axis.

---

## Part E: Points on the Axes Do Not Lie in Any Quadrant

In Topic 2, we saw that quadrants are the four **open regions** bounded by the axes. The axes themselves are the **boundaries** between those regions.

Just as a border fence between two neighborhoods does not belong to either neighborhood, **any point lying on an axis does not lie in any quadrant.**

| Point | Quadrant? |
|---|---|
| $(3, 2)$ | Quadrant I |
| $(3, 0)$ | **No quadrant** — lies on the positive $x$-axis |
| $(0, -5)$ | **No quadrant** — lies on the negative $y$-axis |
| $(0, 0)$ | **No quadrant** — lies at the origin |

So if an exam asks, *"Which quadrant does $(5, 0)$ lie in?"*, the accurate answer is: **"It does not lie in any quadrant; it lies on the positive $x$-axis."**

---

## Part F: Where Does a Point Lie? (Step-by-Step Guide)

Given any point $(x, y)$, check these steps in order:

1. **Are both $x = 0$ and $y = 0$?** $\implies$ **Origin** $(0, 0)$
2. **Is only $y = 0$?** $\implies$ **$x$-axis** (positive $x$-axis if $x > 0$; negative $x$-axis if $x < 0$)
3. **Is only $x = 0$?** $\implies$ **$y$-axis** (positive $y$-axis if $y > 0$; negative $y$-axis if $y < 0$)
4. **Are both non-zero?** $\implies$ Check the signs to identify the **quadrant** (from Topic 2):

| Signs | Quadrant |
|---|---|
| $(+, +)$ | I |
| $(-, +)$ | II |
| $(-, -)$ | III |
| $(+, -)$ | IV |

### Solved Examples

| Point | Which Check Applies | Location |
|---|---|---|
| $(3, 0)$ | $y = 0$, $x$ is positive | Positive $x$-axis |
| $(0, -7)$ | $x = 0$, $y$ is negative | Negative $y$-axis |
| $(-2, 5)$ | Both non-zero, $(-, +)$ | Quadrant II |
| $(0, 0)$ | Both are $0$ | Origin |
| $(4, -1)$ | Both non-zero, $(+, -)$ | Quadrant IV |
| $(-6, 0)$ | $y = 0$, $x$ is negative | Negative $x$-axis |
| $(-3, -3)$ | Both non-zero, $(-, -)$ | Quadrant III |
| $(0, 9)$ | $x = 0$, $y$ is positive | Positive $y$-axis |
| $(1/2, 0)$ | $y = 0$, $x$ is positive | Positive $x$-axis |
| $(7, 7)$ | Both non-zero, $(+, +)$ | Quadrant I |

---

## Part G: Equations of the Coordinate Axes

Here is a neat connection to algebra that comes up often in exams.

On the $x$-axis, **every single point** has $y = 0$: $(1, 0)$, $(-5, 0)$, $(100, 0)$, and so on. Conversely, any point whose $y$-coordinate is $0$ lies on the $x$-axis. Therefore:

> **Equation of the $x$-axis: $y = 0$**
> **Equation of the $y$-axis: $x = 0$**

That feels reversed at first, yet the logic is crystal clear: **the one value that stays fixed everywhere along the $x$-axis is $y$ ($y = 0$)**, so $y = 0$ is the equation of the $x$-axis.

*(If you have already seen lines like $x = a$ and $y = b$ in [Linear Equations in Two Variables](../linear-equations-in-two-variables/linear-equations-in-two-variables-part2.md), $x = 0$ and $y = 0$ are simply special cases of those lines.)*

---

## Part H: Distance of a Point from the Coordinate Axes

In Topic 2, we saw that the abscissa ($x$) tells you how far a point is from the $y$-axis and the ordinate ($y$) tells you how far it is from the $x$-axis, including direction ($+$ or $-$). Here, we drop the sign to find the **actual distance**.

Imagine standing at a point on the grid. How far are you from the **$x$-axis**? Simply look at **how many units up or down** you are.

> **Distance from the $x$-axis $= |y|$** (the $y$-coordinate without its sign)
> **Distance from the $y$-axis $= |x|$** (the $x$-coordinate without its sign)

A physical distance is never negative. Whether you are $4$ units below the $x$-axis or $4$ units above it, your distance from the $x$-axis is **$4$ units** either way. (In mathematical notation, $|y|$ stands for the absolute value of $y$ — its size with any minus sign removed.)

### Back to the City Grid

Suppose Maya's house is at $(3, 4)$ on our city grid — $3\text{ km}$ east and $4\text{ km}$ north of Central Square:
- **Distance from Oak Avenue ($x$-axis):** how far north of Oak Avenue is her house? **$4\text{ km}$**
- **Distance from Harbor Street ($y$-axis):** how far east of Harbor Street is her house? **$3\text{ km}$**

Always remember: **to find the distance from the $x$-axis, look at $y$**, not $x$ — because moving away from the horizontal $x$-axis means moving vertically ($y$).

### Examples

| Point | Distance from $x$-axis | Distance from $y$-axis |
|---|---|---|
| $(3, 4)$ | $4$ | $3$ |
| $(-5, -2)$ | $2$ | $5$ |
| $(6, -8)$ | $8$ | $6$ |
| $(-3, 0)$ | **$0$** (already on the $x$-axis) | $3$ |
| $(0, 7)$ | $7$ | **$0$** (already on the $y$-axis) |
| $(0, 0)$ | $0$ | $0$ |

Any point sitting directly on an axis has a **distance of $0$ from that axis** — just as standing right on Oak Avenue puts you $0\text{ km}$ away from Oak Avenue!

---

## Part I: Finding an Unknown Coordinate

This is a classic exam problem type, and it relies on just one rule:
- If a point lies **on the $x$-axis** $\implies$ set **$y$-coordinate $= 0$**.
- If a point lies **on the $y$-axis** $\implies$ set **$x$-coordinate $= 0$**.

Then solve the resulting linear equation.

**Example 1:** The point $(k - 2, 5)$ lies on the $y$-axis. Find $k$.

Since it lies on the $y$-axis, its $x$-coordinate must be $0$:
$$k - 2 = 0 \implies \mathbf{k = 2}$$

Check: the point becomes $(0, 5)$, which lies on the $y$-axis ✅

**Example 2:** The point $(3, 2m + 4)$ lies on the $x$-axis. Find $m$.

Since it lies on the $x$-axis, its $y$-coordinate must be $0$:
$$2m + 4 = 0 \implies 2m = -4 \implies \mathbf{m = -2}$$

Check: $2(-2) + 4 = 0$, giving $(3, 0)$, which lies on the $x$-axis ✅

**Example 3:** The point $(a + 3, a - 1)$ lies on the $x$-axis. Find $a$ and the coordinates of the point.

Set $y = 0$: $a - 1 = 0 \implies \mathbf{a = 1}$.
Point: $(1 + 3, 0) = \mathbf{(4, 0)}$, which lies on the positive $x$-axis.

**Example 4:** The point $(2p - 6, p + 1)$ lies on the $y$-axis. Find $p$ and the coordinates of the point.

Set $x = 0$: $2p - 6 = 0 \implies 2p = 6 \implies \mathbf{p = 3}$.
Point: $(0, 3 + 1) = \mathbf{(0, 4)}$, which lies on the positive $y$-axis.

**Example 5:** The point $(k - 4, 2k - 8)$ lies on both axes. Find $k$.

The only point on both axes is the origin $(0, 0)$, so both coordinates must equal $0$:
$$k - 4 = 0 \implies k = 4$$
$$2k - 8 = 0 \implies k = 4$$
Both give the same value: **$\mathbf{k = 4}$**, and the point is the origin $(0, 0)$.

**Example 6:** Write the coordinates of a point on the $x$-axis that is $5$ units away from the $y$-axis.

On the $x$-axis $\implies (a, 0)$. Distance from the $y$-axis $= 5$, so $a = 5$ or $a = -5$.
Answer: **$(5, 0)$ or $(-5, 0)$**. Both are correct.

**Example 7:** Write the coordinates of a point on the $y$-axis that is $3$ units below the origin.

**$(0, -3)$**

---

## Common Pitfalls to Avoid

1. **Mistake 1: Swapping $(a, 0)$ and $(0, a)$.**
   A point on the $x$-axis has **$y = 0$**, such as $(5, 0)$. Writing $(0, 5)$ puts the point on the $y$-axis instead! Remember: **the axis the point sits on keeps its coordinate; the other becomes $0$.**

2. **Mistake 2: Placing a point on an axis inside a quadrant.**
   $(5, 0)$ is **not** in Quadrant I — it lies on the positive $x$-axis. Points on the axes do not belong to any quadrant.

3. **Mistake 3: Using $x$ to find the distance from the $x$-axis.**
   The distance of $(3, 4)$ from the $x$-axis is **$4$** (the $y$-value), not $3$. Moving away from the $x$-axis means moving vertically ($y$).

4. **Mistake 4: Writing a negative distance.**
   The distance of $(6, -8)$ from the $x$-axis is **$8$**, not $-8$. Distance is always positive or $0$.

5. **Mistake 5: Writing $x = 0$ as the equation of the $x$-axis.**
   The equation of the $x$-axis is **$y = 0$**, while $x = 0$ is the equation of the $y$-axis. Ask yourself what stays constant along the $x$-axis: $y$ is always $0$.

6. **Mistake 6: Thinking the origin lies on only one axis.**
   The origin $(0, 0)$ lies on **both** axes simultaneously.

7. **Mistake 7: Thinking the "negative $x$-axis" is a separate line.**
   The $x$-axis is one single straight line; the "negative $x$-axis" is simply the **left half** starting from the origin.

8. **Mistake 8: Setting the wrong coordinate to $0$ when solving for an unknown.**
   If "$(k - 2, 5)$ lies on the $y$-axis," set **$x = 0$** ($k - 2 = 0$). If you mistakenly set $y = 0$, you get $5 = 0$, which is impossible — a helpful red flag that you picked the wrong coordinate!

---

## Quick Recap

- **Point on the $x$-axis:** $(a, 0)$ — $y = 0$ because there is no vertical movement.
- **Point on the $y$-axis:** $(0, b)$ — $x = 0$ because there is no horizontal movement.
- **Memory rule:** whichever axis the point lies on keeps its coordinate; the other coordinate is $0$.
- **The origin $(0, 0)$** lies on both axes.
- Points on the coordinate axes **do not lie in any quadrant**.
- **Positive/negative $x$-axis:** right/left of the origin. **Positive/negative $y$-axis:** above/below the origin.
- **Locating any point:** both $0 \implies$ origin; $y = 0 \implies x$-axis; $x = 0 \implies y$-axis; otherwise check the signs for the quadrant.
- **Equations of the axes:** $x$-axis $\implies \mathbf{y = 0}$, $y$-axis $\implies \mathbf{x = 0}$.
- **Distance from axes:** from the $x$-axis $= |y|$; from the $y$-axis $= |x|$ (always non-negative).
- **Finding unknowns:** on the $x$-axis $\implies$ set $y = 0$; on the $y$-axis $\implies$ set $x = 0$.

---

## Practice Questions

1. Write the coordinates of:
   (a) a point on the $x$-axis, $6$ units to the right of the origin
   (b) a point on the $y$-axis, $4$ units below the origin
   (c) the origin
   (d) a point on the negative $x$-axis at a distance of $2.5$ units from the origin

2. State where each point lies (origin, positive/negative $x$-axis, positive/negative $y$-axis, or which quadrant):
   $(-7, 0)$, $(0, 3)$, $(0, 0)$, $(5, -5)$, $(0, -1)$, $(-2, -8)$, $(9, 0)$, $(-4, 6)$

3. Find the distance of each point from the $x$-axis and from the $y$-axis:
   (a) $(6, -8)$
   (b) $(-3, 0)$
   (c) $(0, -5)$

4. If the point $(k + 5, 7)$ lies on the $y$-axis, find $k$.

5. If the point $(4, 3m - 9)$ lies on the $x$-axis, find $m$.

6. The point $(2a - 4, a + 2)$ lies on the $y$-axis. Find $a$ and the coordinates of the point.

7. Write the equations of the $x$-axis and the $y$-axis.

8. State whether each statement is true or false. Give a reason.
   (a) The point $(0, 5)$ lies on the $x$-axis.
   (b) The point $(-3, 0)$ lies in the second quadrant.
   (c) The origin lies on both the axes.
   (d) The abscissa of every point on the $y$-axis is $0$.
   (e) The distance of the point $(-4, 7)$ from the $y$-axis is $-4$.

9. Plot the points $A(-3, 0)$, $B(3, 0)$, and $C(0, 4)$ on a graph. Join them. What figure do you get? Find the length of $AB$ by counting units along the $x$-axis.

### Answers

1. (a) **$(6, 0)$**
   (b) **$(0, -4)$**
   (c) **$(0, 0)$**
   (d) **$(-2.5, 0)$**

2. $(-7, 0)$: **negative $x$-axis**
   $(0, 3)$: **positive $y$-axis**
   $(0, 0)$: **origin**
   $(5, -5)$: **Quadrant IV**
   $(0, -1)$: **negative $y$-axis**
   $(-2, -8)$: **Quadrant III**
   $(9, 0)$: **positive $x$-axis**
   $(-4, 6)$: **Quadrant II**

3. (a) Distance from $x$-axis $= \mathbf{8}$, distance from $y$-axis $= \mathbf{6}$
   (b) Distance from $x$-axis $= \mathbf{0}$ (on the $x$-axis), distance from $y$-axis $= \mathbf{3}$
   (c) Distance from $x$-axis $= \mathbf{5}$, distance from $y$-axis $= \mathbf{0}$ (on the $y$-axis)

4. Since it lies on the $y$-axis, $x = 0$: $k + 5 = 0 \implies \mathbf{k = -5}$. The point is $(0, 7)$.

5. Since it lies on the $x$-axis, $y = 0$: $3m - 9 = 0 \implies 3m = 9 \implies \mathbf{m = 3}$. The point is $(4, 0)$.

6. Since it lies on the $y$-axis, $x = 0$: $2a - 4 = 0 \implies \mathbf{a = 2}$. Point: $(0, 2 + 2) = \mathbf{(0, 4)}$.

7. $x$-axis: **$\mathbf{y = 0}$**. $y$-axis: **$\mathbf{x = 0}$**.

8. (a) **False.** Since $x = 0$, this point lies on the $y$-axis, not the $x$-axis.
   (b) **False.** Since $y = 0$, it lies on the negative $x$-axis. Points on an axis do not lie in any quadrant.
   (c) **True.** At $(0, 0)$, both $x = 0$ and $y = 0$ hold.
   (d) **True.** Every point on the $y$-axis has the form $(0, b)$, so its abscissa ($x$) is $0$.
   (e) **False.** Distance is never negative. The distance from the $y$-axis is $|-4| = \mathbf{4}$.

9. $A$ and $B$ lie on the $x$-axis ($3$ units on either side of the origin), and $C$ lies $4$ units above the origin on the $y$-axis. Joining $A$, $B$, and $C$ forms a **triangle**.
   Length of $AB$: count along the $x$-axis from $-3$ to $3$ — $3$ units from $-3$ to $0$, plus $3$ units from $0$ to $3$, giving **$AB = 6\text{ units}$**.

---

## Chapter Wrap-Up: Coordinate Geometry

| Topic | What You Learned |
|---|---|
| **Topic 1: Introduction** | What coordinate geometry is; Cartesian coordinates; ordered pairs (why order matters, finding unknowns from $(a, b) = (c, d)$); the coordinate system ($x$-axis, $y$-axis, origin $(0, 0)$); convention of signs (right/up positive, left/down negative) |
| **Topic 2: Coordinates of a Point and Quadrants** | Coordinates of a point — abscissa ($x$) and ordinate ($y$); reading and plotting points $(x, y)$; sign patterns of the four quadrants: I $(+, +)$, II $(-, +)$, III $(-, -)$, IV $(+, -)$; quadrant problems with letters $(a, b)$; finding the fourth vertex of a rectangle; mirror (reflected) points |
| **Topic 3: Points on the Axes** | Points on the $x$-axis $(a, 0)$ and $y$-axis $(0, b)$; origin $(0, 0)$ on both axes; axis points lie in no quadrant; equations of the axes ($y = 0$ and $x = 0$); distance from each axis; solving for unknown coordinates |

Congratulations! You have built a rock-solid foundation in Coordinate Geometry. Whenever you see a point on graph paper or a digital map grid, you can now pinpoint its exact location and properties right away.

*(In later classes, you will build directly on this foundation to learn the **distance formula** — for finding the distance between any two points — and the **section formula** — for finding a point dividing a line segment.)*
