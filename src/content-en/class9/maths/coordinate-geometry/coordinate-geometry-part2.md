# Chapter: Coordinate Geometry (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [coordinate-geometry.md](coordinate-geometry.md).** (Topic 1 is covered there.)
> **Topics covered in this file:**
> 2. Coordinates of a Point in a Plane, and Quadrants

---

# Topic 2: Coordinates of a Point in a Plane and Quadrants

In Topic 1, we built the foundation of coordinate geometry. We saw how placing two number lines **perpendicular** ($90^\circ$) to each other creates a **coordinate system**: the horizontal line is the **$x$-axis**, the vertical line is the **$y$-axis**, and their intersection is the **origin** $(0, 0)$. We also learned about the **ordered pair $(x, y)$**, where order is critical, and the **sign convention**: **right and up are positive ($+$)**, while **left and down are negative ($-$)**.

So far, we learned how to set up this "map." In this topic, we will learn how to **use** it:

- How to read any point's **address** from a grid, and how to plot a point when given its address.
- How the two axes divide the plane into **four regions**, called **quadrants** (I, II, III, and IV), each with its own signature sign pattern.

---

## Meeting Friends at the City Plaza

Imagine a weekend street festival in the middle of a large city plaza. Right at the center stands a grand **fountain**, and everyone uses that fountain as the reference point to share their location.

Your friend **Leo** texts you:

> "From the fountain, walk **$3$ steps right**, then **$2$ steps forward (up)**. I'm right by the food truck!"

Standing at the fountain, you walk $3$ steps right and $2$ steps forward — and there is Leo.

Next, a message arrives from **Sophia**:

> "I'm **$2$ steps left** and **$1$ step back (down)** from the fountain, near the book stall."

Notice that Sophia's spot is also described with just two numbers — only this time the directions are reversed (left and down).

Coordinate geometry works in the exact same way:
- **The fountain = the origin $(0, 0)$**
- **How far right or left = the $x$-coordinate**
- **How far up or down = the $y$-coordinate**

Leo's address is **$(3, 2)$**, and Sophia's address is **$(-2, -1)$** (using the sign convention from Topic 1: left and down are negative).

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Coordinates** | The "address" of a point — an ordered pair $(x, y)$ | $P(3, 2)$ |
| **Abscissa** | The **$x$-coordinate** of a point (the first number) | The abscissa of $(3, 2)$ is **$3$** |
| **Ordinate** | The **$y$-coordinate** of a point (the second number) | The ordinate of $(3, 2)$ is **$2$** |
| **Plotting** | Marking a point on a graph grid using its given coordinates $(x, y)$ | Plotting $(3, 2)$ on the Cartesian plane |
| **Quadrant** | One of the four regions created by the two intersecting axes | Quadrants I, II, III, IV |
| **Perpendicular distance** | The shortest, straight-line ($90^\circ$) distance from a point to a line | Distance from $P$ to the $y$-axis |

**Quick trick to remember abscissa and ordinate:** Alphabetically, **a**bscissa comes before **o**rdinate — just as **$x$** comes before **$y$**. So **abscissa $= x$**, and **ordinate $= y$**.

---

## Part A: What the Coordinates of a Point Really Mean

Suppose a point **$P$** sits somewhere on a coordinate grid. Its two coordinates answer two specific questions:

1. **How far is $P$ from the $y$-axis** (to the left or right)? That gives the **$x$-coordinate**.
2. **How far is $P$ from the $x$-axis** (up or down)? That gives the **$y$-coordinate**.

Pause and look closely at what at first feels backwards:

> **$x$-coordinate = directed distance from the $y$-axis**
> **$y$-coordinate = directed distance from the $x$-axis**

Why does it swap like that? Think about how you measure movement: to measure how far **right or left** you moved, you measure away from the **vertical line ($y$-axis)**. To measure how far **up or down** you moved, you measure away from the **horizontal line ($x$-axis)**.

And every distance is always measured **perpendicularly** (straight across at $90^\circ$), never diagonally.

```
              y
              |
              |         P(3, 2)
              |         *
              |         :
              | <--3--> :  2 (above the x-axis)
              |         :
  ------------O-------------------- x
```

Point $P$ is **$3$** units to the right of the $y$-axis, so $x = 3$. It is **$2$** units above the $x$-axis, so $y = 2$. Therefore, **$P = (3, 2)$**.

To decide the sign, use Topic 1's convention:
- To the **right** of the $y$-axis $\implies x$ is **positive**; to the **left** $\implies x$ is **negative**.
- **Above** the $x$-axis $\implies y$ is **positive**; **below** $\implies y$ is **negative**.

---

## Part B: Reading Coordinates from a Graph

Below is a coordinate grid where each dot represents a $1$-unit step. Four points — $A$, $B$, $C$, and $D$ — are marked on it.

```
                 y
 3   .  .  B  .  |  .  .  .  .
 2   .  .  .  .  |  .  .  A  .
 1   .  .  .  .  |  .  .  .  .
 0 --------------O------------ x
-1   .  .  .  .  |  .  D  .  .
-2   .  C  .  .  |  .  .  .  .
-3   .  .  .  .  |  .  .  .  .
    -4 -3 -2 -1  0  1  2  3  4
```

**How to read any point's coordinates:**
1. Move **straight up or down** from the point to the $x$-axis. The number you land on is **$x$**.
2. Move **straight left or right** from the point to the $y$-axis. The number you land on is **$y$**.
3. Write the ordered pair as **$(x, y)$** — always $x$ first, then $y$.

**Point $A$:**
- Straight down to the $x$-axis: **$3$**, so $x = 3$.
- Straight left to the $y$-axis: **$2$**, so $y = 2$.
- **$A = (3, 2)$**

**Point $B$:**
- Straight down to the $x$-axis: **$-2$**, so $x = -2$.
- Straight right to the $y$-axis: **$3$**, so $y = 3$.
- **$B = (-2, 3)$**

**Point $C$:**
- Straight up to the $x$-axis: **$-3$**, so $x = -3$.
- Straight right to the $y$-axis: **$-2$**, so $y = -2$.
- **$C = (-3, -2)$**

**Point $D$:**
- Straight up to the $x$-axis: **$2$**, so $x = 2$.
- Straight left to the $y$-axis: **$-1$**, so $y = -1$.
- **$D = (2, -1)$**

| Point | Abscissa ($x$) | Ordinate ($y$) | Coordinates |
|---|---|---|---|
| $A$ | $3$ | $2$ | $(3, 2)$ |
| $B$ | $-2$ | $3$ | $(-2, 3)$ |
| $C$ | $-3$ | $-2$ | $(-3, -2)$ |
| $D$ | $2$ | $-1$ | $(2, -1)$ |

---

## Part C: Plotting a Point from Given Coordinates

Now let us do the reverse: given the coordinates $(x, y)$, mark the point on the graph — just like following directions from the plaza fountain: **"first $x$, then $y$."**

**Steps to plot $(x, y)$:**
1. Start at the **origin $(0, 0)$**.
2. **Read $x$:** if positive, move that many units **right**; if negative, move that many units **left**. (Do not move up or down yet.)
3. **Read $y$:** from that spot, if positive, move that many units **up**; if negative, move that many units **down**.
4. Place a dot where you arrive and label it with the point's name.

*(If you studied graphing in [Linear Equations in Two Variables](../linear-equations-in-two-variables/linear-equations-in-two-variables-part2.md), this is the same "walk across, then climb" rule.)*

### Example 1: Plot $P(4, 3)$
- From the origin, move **$4$ units right**.
- From there, move **$3$ units up**.
- Mark and label the dot **$P$**.

### Example 2: Plot $Q(-3, 1)$
- From the origin, move **$3$ units left** ($x$ is negative).
- From there, move **$1$ unit up**.
- Mark and label the dot **$Q$**.

### Example 3: Plot $R(-2, -4)$
- From the origin, move **$2$ units left**.
- From there, move **$4$ units down** ($y$ is negative).
- Mark and label the dot **$R$**.

### Example 4: Plot $S(5, -2)$
- From the origin, move **$5$ units right**.
- From there, move **$2$ units down**.
- Mark and label the dot **$S$**.

### Example 5: Decimal Coordinates — Plot $T(2.5, -1.5)$
Do not let decimals worry you: $2.5$ simply sits **halfway between $2$ and $3$**.
- From the origin, move **$2.5$ units right** (halfway between $2$ and $3$).
- From there, move **$1.5$ units down** (halfway between $-1$ and $-2$).
- Mark and label the dot **$T$**.

Watch closely: $-1.5$ sits **between $-1$ and $-2$**, *not* between $0$ and $-1$.

### Example 6: Fractional Coordinates — Plot $U(-1/2, 7/2)$
- $-1/2 = -0.5$, halfway between $0$ and $-1$: move **half a unit left** from the origin.
- $7/2 = 3.5$, halfway between $3$ and $4$: move **$3.5$ units up**.
- Mark and label the dot **$U$**.

**Tip:** Converting fractions to decimals first makes plotting much quicker and cleaner.

---

## Part D: Quadrants

### Why Four Regions?

Picture a flat pizza or a sheet of paper. Make one **vertical** cut and one **horizontal** cut straight across it. How many pieces do you get? **Four.**

The same thing happens on the Cartesian plane. The $x$-axis (horizontal) and $y$-axis (vertical) divide the entire plane into **four regions**. Each region is called a **quadrant** (*quad* means four).

### Numbering the Quadrants

Numbering always begins in the **top-right** region and moves **anticlockwise** (counterclockwise — the opposite direction of a clock's hands), using Roman numerals **I, II, III, IV**:

```
                  y
                  |
    Quadrant II   |   Quadrant I
      (-, +)      |     (+, +)
                  |
  ----------------O---------------- x
                  |
    Quadrant III  |   Quadrant IV
      (-, -)      |     (+, -)
                  |
```

- **Quadrant I:** top-right
- **Quadrant II:** top-left
- **Quadrant III:** bottom-left
- **Quadrant IV:** bottom-right

**Memory trick:** Trace a capital letter **"C"** for **C**oordinate plane. Start at the top-right (I), curve to the top-left (II), drop to the bottom-left (III), and finish at the bottom-right (IV). That exact path gives I, II, III, IV!

### Signs in Each Quadrant

| Quadrant | Position | Sign of $x$ | Sign of $y$ | Sign Pattern | Example |
|---|---|---|---|---|---|
| **I** | Top-right | $+$ | $+$ | $(+, +)$ | $(4, 3)$ |
| **II** | Top-left | $-$ | $+$ | $(-, +)$ | $(-3, 1)$ |
| **III** | Bottom-left | $-$ | $-$ | $(-, -)$ | $(-2, -4)$ |
| **IV** | Bottom-right | $+$ | $-$ | $(+, -)$ | $(5, -2)$ |

**Easy way to recall the signs:**
- On the **left side** (Quadrants II and III), **$x$ is negative**.
- On the **bottom half** (Quadrants III and IV), **$y$ is negative**.
- Quadrant III is on *both* the left and the bottom, so **both coordinates are negative**.
- Quadrant I is on neither the left nor the bottom, so **both coordinates are positive**.

Remember just one phrase: **"Left makes $x$ minus; down makes $y$ minus."** Everything else follows automatically.

---

## Part E: Finding the Quadrant from the Signs

Just inspect the signs of $x$ and $y$ and match them to the pattern — there is no need to sketch a graph.

**Example 1:** $(6, 2)$
$x$ is $+$, $y$ is $+$ $\implies (+, +) \implies$ **Quadrant I**

**Example 2:** $(-4, 9)$
$x$ is $-$, $y$ is $+$ $\implies (-, +) \implies$ **Quadrant II**

**Example 3:** $(-2.5, -6)$
$x$ is $-$, $y$ is $-$ $\implies (-, -) \implies$ **Quadrant III**

**Example 4:** $(8, -1/2)$
$x$ is $+$, $y$ is $-$ $\implies (+, -) \implies$ **Quadrant IV**

**Example 5:** Identify the quadrant for each point from Part C.

| Point | Signs | Quadrant |
|---|---|---|
| $P(4, 3)$ | $(+, +)$ | I |
| $Q(-3, 1)$ | $(-, +)$ | II |
| $R(-2, -4)$ | $(-, -)$ | III |
| $S(5, -2)$ | $(+, -)$ | IV |
| $T(2.5, -1.5)$ | $(+, -)$ | IV |
| $U(-1/2, 7/2)$ | $(-, +)$ | II |

Notice that a point's quadrant depends **only on the signs**, never on how large or small the numbers are. Both $(100, 0.01)$ and $(0.5, 0.5)$ lie in Quadrant I.

---

## Part F: Quadrant Problems with Letters ($a$ and $b$)

You will often see questions such as: "If $a > 0$ and $b > 0$, in which quadrant does $(-a, b)$ lie?"

Here, **$a$ and $b$ are positive numbers** (think of $a = 3$ and $b = 5$). Therefore:
- **$a$** is positive
- **$-a$** is negative (placing a minus sign in front of a positive number makes it negative)
- **$b$** is positive

So $(-a, b)$ has the sign pattern **$(-, +)$**, which places it in **Quadrant II**.

**Helpful strategy:** Whenever letters feel confusing, plug in simple concrete numbers! Setting $a = 3$ and $b = 5$ gives $(-a, b) = (-3, 5)$, which clearly sits in Quadrant II ✅

### Sign Table when $a > 0$ and $b > 0$

| Point | With $a = 3, b = 5$ | Signs | Quadrant |
|---|---|---|---|
| $(a, b)$ | $(3, 5)$ | $(+, +)$ | I |
| $(-a, b)$ | $(-3, 5)$ | $(-, +)$ | II |
| $(-a, -b)$ | $(-3, -5)$ | $(-, -)$ | III |
| $(a, -b)$ | $(3, -5)$ | $(+, -)$ | IV |

### Watch Out: When $a$ Itself Is Negative

**Example:** If **$a < 0$** and **$b > 0$**, in which quadrant does $(-a, b)$ lie?

Here $a$ itself is negative — for example, let $a = -3$ and $b = 5$. Then $-a = -(-3) = \mathbf{3}$, which is **positive**!
- $-a$ is $+$, and $b$ is $+$
- $(-a, b) \implies (+, +) \implies$ **Quadrant I**

Never assume that seeing "$-a$" automatically means a negative number. Always check whether $a$ itself is positive or negative first.

---

## Part G: Forming Shapes and Finding the Fourth Vertex

Plotting coordinates also lets us construct geometric shapes on a digital map or graph grid.

### Example: Finding the Fourth Vertex of a Rectangle

Three vertices of a rectangle $ABCD$ are **$A(-3, 2)$**, **$B(2, 2)$**, and **$C(2, -1)$**. Find the coordinates of the fourth vertex **$D$**.

**Step 1: Plot the three given points.**

```
                 y
 3   .  .  .  .  |  .  .  .  .
 2   .  A  .  .  |  .  B  .  .
 1   .  .  .  .  |  .  .  .  .
 0 --------------O------------ x
-1   .  .  .  .  |  .  C  .  .
-2   .  .  .  .  |  .  .  .  .
    -4 -3 -2 -1  0  1  2  3  4
```

**Step 2: Spot the alignment pattern.**
- $A$ and $B$ both have $y = 2$, so they lie on the same **horizontal line** (the top edge).
- $B$ and $C$ both have $x = 2$, so they lie on the same **vertical line** (the right edge).
- In a rectangle, opposite sides are parallel and equal in length. Therefore, $D$ must sit **directly below $A$** (sharing $A$'s $x$-coordinate) and **directly across from $C$** (sharing $C$'s $y$-coordinate).

**Step 3: Read off the coordinates of $D$.**
- $x$-coordinate of $D = x$-coordinate of $A = \mathbf{-3}$
- $y$-coordinate of $D = y$-coordinate of $C = \mathbf{-1}$
- **$D = (-3, -1)$**

Place $D$ at $(-3, -1)$ on the grid. It lines up vertically under $A$ and horizontally beside $C$, completing the rectangle.

**Check:**
- Length of $AB$: from $x = -3$ to $2$ is **$5$ units**. Length of $DC$: from $x = -3$ to $2$ is **$5$ units**. Equal ✅
- Length of $BC$: from $y = 2$ to $-1$ is **$3$ units**. Length of $AD$: from $y = 2$ to $-1$ is **$3$ units**. Equal ✅

Notice a neat bonus: the four corners of this rectangle sit in **all four quadrants** — $A(-3, 2)$ in II, $B(2, 2)$ in I, $C(2, -1)$ in IV, and $D(-3, -1)$ in III!

---

## Part H: Mirror (Reflected) Points

Take the point **$P(3, 2)$** and see what happens when we flip one or both signs:

| Point | What Changed | New Position | Quadrant |
|---|---|---|---|
| $P(3, 2)$ | Nothing | Top-right | I |
| $Q(-3, 2)$ | Sign of $x$ | **Opposite side of the $y$-axis** (left) | II |
| $R(3, -2)$ | Sign of $y$ | **Opposite side of the $x$-axis** (below) | IV |
| $S(-3, -2)$ | Both signs | Across both axes | III |

**Think of the axes as mirrors:**
- **Flipping the sign of $x$** reflects the point across the **$y$-axis** (as if the $y$-axis were a vertical mirror). Left and right swap; up and down stay the same.
- **Flipping the sign of $y$** reflects the point across the **$x$-axis** (as if the $x$-axis were a horizontal mirror). Up and down swap; left and right stay the same.

```
                  y
                  |
      Q(-3, 2) *  |  * P(3, 2)
                  |
  ----------------O---------------- x
                  |
      S(-3, -2) * |  * R(3, -2)
                  |
```

All four points lie at the exact same distance from the origin, forming a perfectly symmetric pattern.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Swapping the order of $x$ and $y$.**
   As we learned in Topic 1, order matters. $(3, 2)$ means $3$ right and $2$ up, whereas $(2, 3)$ means $2$ right and $3$ up — two different points. Always write **$x$ first, then $y$**.

2. **Mistake 2: Thinking "abscissa = distance from the $x$-axis."**
   It is the other way around! **Abscissa ($x$) = directed distance from the $y$-axis.** **Ordinate ($y$) = directed distance from the $x$-axis.** For $P(3, 2)$, $P$ is $3$ units from the $y$-axis and $2$ units from the $x$-axis.

3. **Mistake 3: Numbering the quadrants clockwise.**
   Quadrants are numbered **anticlockwise** (counterclockwise): I is top-right, II is top-left, III is bottom-left, IV is bottom-right. Counting clockwise swaps Quadrants II and IV.

4. **Mistake 4: Moving diagonally when plotting a point.**
   Do not try to step diagonally from the origin. Move strictly **left or right ($x$)** first, and then strictly **up or down ($y$)**.

5. **Mistake 5: Placing negative decimals in the wrong interval.**
   $-1.5$ lies **between $-1$ and $-2$**, *not* between $0$ and $-1$ (that would be $-0.5$).

6. **Mistake 6: Assuming "$-a$" is always negative.**
   If $a$ itself is negative (for example, $a = -3$), then $-a = 3$, which is positive! Always check the sign of $a$ first.

7. **Mistake 7: Reading numbers off the wrong axis.**
   To read the $x$-coordinate, go **straight up or down to the $x$-axis**. To read the $y$-coordinate, go **straight left or right to the $y$-axis**. Never mix these up.

---

## Quick Recap

- The **coordinates $(x, y)$** give a point's exact address on the Cartesian plane.
- **Abscissa $= x$-coordinate** $=$ directed perpendicular distance from the $y$-axis.
- **Ordinate $= y$-coordinate** $=$ directed perpendicular distance from the $x$-axis.
- **Reading a point:** move straight from the point to the $x$-axis (to read $x$) and straight to the $y$-axis (to read $y$).
- **Plotting a point:** starting at the origin $(0, 0)$, move along $x$ (right/left) first, then along $y$ (up/down). Never move diagonally.
- The two axes divide the plane into **4 quadrants**, numbered **anticlockwise** starting from top-right: I, II, III, IV.
- **Quadrant signs:** I $(+, +)$, II $(-, +)$, III $(-, -)$, IV $(+, -)$. Trick: **left makes $x$ minus; down makes $y$ minus.**
- A point's quadrant depends **only on its signs**, not on the size of the numbers.
- For problems with letters (such as $-a$), test with concrete numbers to be sure of the signs.
- **Flipping the sign of $x$** reflects a point across the $y$-axis; **flipping the sign of $y$** reflects it across the $x$-axis.

---

## Practice Questions

1. Write the abscissa and the ordinate of each point:
   (a) $(5, -3)$
   (b) $(-7, 4)$
   (c) $(-1.5, -2.5)$

2. In which quadrant does each point lie?
   (a) $(6, 2)$
   (b) $(-4, 9)$
   (c) $(-3, -8)$
   (d) $(2.5, -7)$
   (e) $(-1/2, 3/4)$

3. Write the coordinates of the points $P$, $Q$, $R$, and $S$ shown below. Also state the quadrant of each point.

   ```
                    y
    3   .  .  .  .  |  P  .  .  .
    2   .  .  .  .  |  .  .  .  .
    1   Q  .  .  .  |  .  .  .  .
    0 --------------O------------ x
   -1   .  .  .  .  |  .  .  .  .
   -2   .  .  .  .  |  .  .  S  .
   -3   .  .  R  .  |  .  .  .  .
       -4 -3 -2 -1  0  1  2  3  4
   ```

4. If $a > 0$ and $b > 0$, state the quadrant in which each point lies:
   (a) $(a, -b)$
   (b) $(-a, -b)$
   (c) $(-a, b)$

5. If $a < 0$ and $b > 0$, state the quadrant in which each point lies:
   (a) $(a, b)$
   (b) $(-a, b)$
   (c) $(-a, -b)$

6. Three vertices of a rectangle $ABCD$ are $A(-2, -1)$, $B(3, -1)$, and $C(3, 2)$. Find the coordinates of the fourth vertex $D$. In which quadrant does $D$ lie?

7. For the point $(4, -3)$, write the coordinates of the point:
   (a) on the opposite side of the $y$-axis at the same distance,
   (b) on the opposite side of the $x$-axis at the same distance.
   State the quadrant of each.

8. State whether each statement is true or false. Give a reason.
   (a) $(3, 5)$ and $(5, 3)$ represent the same point.
   (b) The abscissa of a point is its distance from the $x$-axis.
   (c) A point with a negative abscissa and a positive ordinate lies in Quadrant II.
   (d) In Quadrant IV, both coordinates are negative.

### Answers

1. (a) Abscissa **$5$**, ordinate **$-3$**
   (b) Abscissa **$-7$**, ordinate **$4$**
   (c) Abscissa **$-1.5$**, ordinate **$-2.5$**

2. (a) $(+, +) \implies$ **Quadrant I**
   (b) $(-, +) \implies$ **Quadrant II**
   (c) $(-, -) \implies$ **Quadrant III**
   (d) $(+, -) \implies$ **Quadrant IV**
   (e) $-1/2$ is negative, $3/4$ is positive $\implies (-, +) \implies$ **Quadrant II**

3. From each point, go straight to the $x$-axis (for $x$) and straight to the $y$-axis (for $y$):
   - **$P = (1, 3)$**, $(+, +) \implies$ **Quadrant I**
   - **$Q = (-4, 1)$**, $(-, +) \implies$ **Quadrant II**
   - **$R = (-2, -3)$**, $(-, -) \implies$ **Quadrant III**
   - **$S = (3, -2)$**, $(+, -) \implies$ **Quadrant IV**

4. Test with $a = 3, b = 5$:
   (a) $(3, -5) \implies (+, -) \implies$ **Quadrant IV**
   (b) $(-3, -5) \implies (-, -) \implies$ **Quadrant III**
   (c) $(-3, 5) \implies (-, +) \implies$ **Quadrant II**

5. Test with $a = -3, b = 5$ (since $a$ is negative):
   (a) $(a, b) = (-3, 5) \implies (-, +) \implies$ **Quadrant II**
   (b) $-a = 3$, so $(-a, b) = (3, 5) \implies (+, +) \implies$ **Quadrant I**
   (c) $-a = 3$ and $-b = -5$, so $(-a, -b) = (3, -5) \implies (+, -) \implies$ **Quadrant IV**

6. $A$ and $B$ share $y = -1$; $B$ and $C$ share $x = 3$. Therefore, $D$ shares $A$'s $x$-coordinate ($-2$) and $C$'s $y$-coordinate ($2$).
   **$D = (-2, 2)$**, which has signs $(-, +)$ and lies in **Quadrant II**.
   Check: $AB = 3 - (-2) = 5$ and $DC = 3 - (-2) = 5$ ✅; $BC = 2 - (-1) = 3$ and $AD = 2 - (-1) = 3$ ✅

7. (a) Flip the sign of $x$: **$(-4, -3)$**, signs $(-, -) \implies$ **Quadrant III**
   (b) Flip the sign of $y$: **$(4, 3)$**, signs $(+, +) \implies$ **Quadrant I**
   *(Note: the original point $(4, -3)$ lies in Quadrant IV.)*

8. (a) **False.** ❌ Order matters. $(3, 5)$ means $3$ right and $5$ up, while $(5, 3)$ means $5$ right and $3$ up — two distinct points.
   (b) **False.** ❌ The abscissa ($x$-coordinate) is the directed distance from the **$y$-axis**, not the $x$-axis.
   (c) **True.** ✅ The sign pattern $(-, +)$ belongs to Quadrant II.
   (d) **False.** ❌ In Quadrant IV, the pattern is $(+, -)$: $x$ is positive and $y$ is negative. Both coordinates are negative only in Quadrant III.

---

At first, keeping track of the quadrant signs can feel tricky, so anchor yourself with one simple rule: **left makes $x$ minus, and down makes $y$ minus.** Sketch two or three grids on your own, and the patterns will stick for good.

**In the next topic (Topic 3: Points on the Coordinate Axes):** Every point we plotted in this topic sat inside one of the four quadrants. But what if a point sits **right on top of an axis**, such as $(3, 0)$ or $(0, -2)$? Which quadrant is it in? The answer may surprise you — we will uncover everything about points with a $0$ coordinate in Topic 3.
