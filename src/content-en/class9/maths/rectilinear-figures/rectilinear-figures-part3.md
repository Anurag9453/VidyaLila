# Chapter: Rectilinear Figures (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [rectilinear-figures-part2.md](rectilinear-figures-part2.md)** (where we derived the sum of interior angles and each interior angle of a regular polygon). For fundamentals of polygons, see [rectilinear-figures.md](rectilinear-figures.md).
> **Helpful background:** Exterior angles of a triangle and their $360^\circ$ sum appear in [Triangles, Topic 2](../triangles/triangles-part2.md), and linear pairs appear in [Lines and Angles, Topic 2](../lines-and-angles/lines-and-angles-part2.md).
> **Topics covered in this file:**
> 3. Exterior Angles of a Polygon

---

# Topic 3: Exterior Angles of a Polygon

In the previous topic, we looked **inside** polygons: the interior angles of an $n$-gon sum to $(n - 2) \times 180^\circ$ (or $(2n - 4) \times 90^\circ$), and each interior angle of a regular $n$-gon equals $(n - 2) \times 180^\circ \div n$. Using that, Liam's hexagonal oak table had $120^\circ$ corners. That formula works wonderfully, yet the total keeps growing with $n$: $180^\circ$ for a triangle, $360^\circ$ for a quadrilateral, $540^\circ$ for a pentagon, and onward without limit.

Now let us step **outside** the polygon. An astonishing surprise awaits us: the sum of the **exterior angles** **never changes**, whether the polygon has $3$ sides or $300$! Better yet, that single constant turns "how many sides does it have?" questions into a one-line division.

---

## Maya and Leo's Programmable Robot

Maya and Leo are programming a small wheeled robot for their STEM club challenge. Their task is to make the robot trace the perimeter of a shape using just two commands: *"drive straight"* and *"turn by this angle."*

They choose a **regular pentagon** ($5$ equal sides). The robot drives straight along one side, pauses at a corner, turns, and drives down the next side. Leo asks, "How many degrees should it turn at each corner?" Maya first enters $108^\circ$, remembering that a regular pentagon's interior angle is $108^\circ$. When she hits Run, the robot swings too far and heads **backwards** inside the shape!

Leo draws a huge pentagon on the studio floor with chalk and walks the path himself. When you walk along an edge and turn onto the next edge, you do not swing through the interior angle—you turn away from your straight-ahead direction through the **remaining angle** that completes a straight line ($180^\circ$)! Maya updates the code to $72^\circ$ ($108^\circ + 72^\circ = 180^\circ$), and the robot follows the pentagon smoothly.

After turning $72^\circ$ at all five corners, the robot returns to the starting line facing the **exact same direction** it started in. Leo exclaims, "Wait a minute! How much did the robot turn in total? $72^\circ \times 5 = \mathbf{360^\circ}$—one full spin!"

Maya nods: "Of course! If the robot ends up facing the exact same heading it began with, its total turning *must* be one full $360^\circ$ circle." They test a triangle path and a hexagon path next—and every single time, the turns add up to **$360^\circ$**! In this topic, we will see why that always holds.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Exterior angle** | At any corner, the outside angle formed between one **extended side** and the **adjacent side** | Exterior angle of a regular pentagon is $72^\circ$ |
| **Interior angle** | The angle inside the polygon at a corner | $108^\circ$ in a regular pentagon |
| **One exterior angle per vertex** | Taking exactly one exterior angle at each corner while walking consistently around the perimeter in one direction | A pentagon has $5$ exterior angles |
| **Sum of exterior angles** | Adding one exterior angle from each corner of the polygon | Always $360^\circ$ for any convex polygon |
| **Full turn** | Rotating completely around to face the original direction | $360^\circ$ |

---

## Part A: What Is an Exterior Angle?

At any vertex of a polygon, **extend one side straight forward** along its line of travel. The angle formed outside between that extended ray and the next side of the polygon is an **exterior angle**.

```
                          next side
                         /
       interior angle   /
       (inside)        /   exterior angle
                      /    (outside)
   ------------------A- - - - - - - ->  extended side
   previous side

   Exterior angle = angle between the extended side and the next side
```

At every corner, the interior angle and exterior angle sit side by side on a **straight line**, forming a **linear pair** ([Lines and Angles, Topic 2](../lines-and-angles/lines-and-angles-part2.md)). Because a linear pair always sums to $180^\circ$:

$$\text{Exterior angle} + \text{interior angle} = 180^\circ$$
$$\text{Exterior angle} = 180^\circ - \text{interior angle}$$

### Example 1: Exterior Angle at One Corner

At one vertex of a polygon, the interior angle is $110^\circ$. What is the exterior angle?

$$180^\circ - 110^\circ = \mathbf{70^\circ}$$

**Check:** $110^\circ + 70^\circ = 180^\circ$ ✅

### Example 2: Working Backwards from Exterior to Interior

At one vertex of a polygon, the exterior angle is $65^\circ$. What is the interior angle?

$$180^\circ - 65^\circ = \mathbf{115^\circ}$$

**Check:** $115^\circ + 65^\circ = 180^\circ$ ✅

For a triangle, we already saw in [Triangles, Topic 2](../triangles/triangles-part2.md) that the three exterior angles sum to $360^\circ$. Now let us prove this holds for **every** convex polygon!

---

## Part B: The Key Discovery: Exterior Angles Always Sum to $360^\circ$

> **The sum of the exterior angles (taken one at each vertex, in order) of ANY convex polygon is always $360^\circ$.**

Notice that this sum does **not** depend on $n$. Whether the polygon has $3$ sides or $50$ sides, the exterior angles add up to $360^\circ$.

### Method 1: Walking Around with the Robot

Imagine walking completely around the perimeter of any convex polygon. At each corner, your body pivots by the **exterior angle** to line up with the next side. When you return to the starting edge facing your original direction, you have spun around **one full revolution**—exactly $360^\circ$. No matter how many corners there are, one closed loop equals one full turn!

That gives the intuition; now let us prove it algebraically so there is zero doubt.

### Method 2: Proof from the Sum of Interior Angles

Suppose a convex polygon has $n$ sides (and $n$ vertices). At each vertex, $\text{exterior angle} = 180^\circ - \text{interior angle}$. Add this across all $n$ vertices:

$$\text{Sum of exterior angles} = n \times 180^\circ - (\text{sum of interior angles})$$

From Topic 2, the sum of interior angles is $(n - 2) \times 180^\circ$. Substituting that in:

$$\begin{aligned}
\text{Sum of exterior angles} &= 180n - (n - 2) \times 180 \\
&= 180n - 180n + 360 \\
&= \mathbf{360^\circ}
\end{aligned}$$

The $n$ terms cancel completely, leaving **$360^\circ$**! That is why the sum never depends on the number of sides.

### Check 1: An Irregular Pentagon

Consider an irregular pentagon ($n = 5$) with interior angles $95^\circ, 115^\circ, 105^\circ, 130^\circ, 95^\circ$.

- Interior sum: $95 + 115 + 105 + 130 + 95 = 540^\circ$, matching $(5 - 2) \times 180^\circ = 540^\circ$ ✅
- Exterior angles: $180 - 95 = 85^\circ$, $180 - 115 = 65^\circ$, $180 - 105 = 75^\circ$, $180 - 130 = 50^\circ$, $180 - 95 = 85^\circ$
- Exterior sum: $85 + 65 + 75 + 50 + 85 = \mathbf{360^\circ}$ ✅

### Check 2: An Irregular Hexagon

Consider an irregular hexagon ($n = 6$) with interior angles $150^\circ, 100^\circ, 125^\circ, 115^\circ, 140^\circ, 90^\circ$.

- Interior sum: $150 + 100 + 125 + 115 + 140 + 90 = 720^\circ$, matching $(6 - 2) \times 180^\circ = 720^\circ$ ✅
- Exterior angles: $30^\circ, 80^\circ, 55^\circ, 65^\circ, 40^\circ, 90^\circ$
- Exterior sum: $30 + 80 + 55 + 65 + 40 + 90 = \mathbf{360^\circ}$ ✅

Both irregular shapes give $360^\circ$, matching the robot's full turn!

**Note:** This $360^\circ$ rule applies to **convex** polygons (where every interior angle is under $180^\circ$). In a **concave** polygon (like the dart from Topic 2 with a $210^\circ$ reflex angle), $180^\circ - 210^\circ$ turns negative (a reverse turn). So in this topic we stick to convex polygons.

---

## Part C: Each Exterior Angle of a Regular Polygon

In a regular polygon, all sides and all interior angles are equal—so all $n$ exterior angles are equal too! Since they sum to $360^\circ$:

$$\text{Each exterior angle of a regular } n\text{-gon} = \frac{360^\circ}{n}$$

For Maya and Leo's regular pentagon: $360^\circ \div 5 = \mathbf{72^\circ}$ (and $5 \text{ turns} \times 72^\circ = 360^\circ$).

### Table: $n = 3$ to $10$ and $12$

| Sides ($n$) | Polygon | Each Exterior Angle $= 360^\circ \div n$ | Each Interior Angle $= 180^\circ - \text{exterior}$ |
|---|---|---|---|
| $3$ | Triangle | $120^\circ$ | $60^\circ$ |
| $4$ | Square | $90^\circ$ | $90^\circ$ |
| $5$ | Pentagon | $72^\circ$ | $108^\circ$ |
| $6$ | Hexagon | $60^\circ$ | $120^\circ$ |
| $7$ | Heptagon | $\approx 51.43^\circ$ ($360^\circ/7$, approximate) | $\approx 128.57^\circ$ (approximate) |
| $8$ | Octagon | $45^\circ$ | $135^\circ$ |
| $9$ | Nonagon | $40^\circ$ | $140^\circ$ |
| $10$ | Decagon | $36^\circ$ | $144^\circ$ |
| $12$ | Dodecagon | $30^\circ$ | $150^\circ$ |

Notice how as $n$ grows larger, each exterior angle gets **smaller** (the robot makes gentler turns at every corner), while $n \times (\text{each exterior angle})$ always stays $360^\circ$!

**Check:** $9 \times 40 = 360$ ✅, $10 \times 36 = 360$ ✅, $12 \times 30 = 360$ ✅, $8 \times 45 = 360$ ✅. And for $n = 10$, interior angle $= 144^\circ$, matching $(10 - 2) \times 180 \div 10 = 144^\circ$ from Topic 2 ✅.

*(For a heptagon, $360 \div 7 = 51.428571\dots$ is non-terminating, which is why we write "approximate.")*

---

## Part D: Finding the Number of Sides

Now reverse the formula! If you know each exterior angle of a regular polygon, then:

$$n = \frac{360^\circ}{\text{each exterior angle}}$$

### Example 3: Exterior Angle $24^\circ$

$n = 360 \div 24 = \mathbf{15\text{ sides}}$.

**Check:** $15 \times 24 = 360$ ✅

### Example 4: Exterior Angle $40^\circ$

$n = 360 \div 40 = \mathbf{9\text{ sides}}$ (nonagon).

**Check:** $9 \times 40 = 360$ ✅

### Example 5: Exterior Angle $20^\circ$

$n = 360 \div 20 = \mathbf{18\text{ sides}}$.

**Check:** $18 \times 20 = 360$ ✅

### Example 6: Given Interior Angle $156^\circ$

Each interior angle of a regular polygon is $156^\circ$. How many sides does it have?

- Exterior angle $= 180^\circ - 156^\circ = 24^\circ$
- $n = 360 \div 24 = \mathbf{15}$

**Check (using Topic 2's method):** Interior angle $= (n - 2) \times 180 \div n = 13 \times 180 \div 15 = 2340 \div 15 = 156^\circ$ ✅

### Example 7: Given Interior Angle $171^\circ$

- Exterior angle $= 180^\circ - 171^\circ = 9^\circ$
- $n = 360 \div 9 = \mathbf{40}$

**Check:** $(40 - 2) \times 180 \div 40 = 38 \times 180 \div 40 = 6840 \div 40 = 171^\circ$ ✅

### How Much Faster Is This Method?

Compare solving Example 6 with Topic 2's formula:

$$\frac{(n - 2) \times 180}{n} = 156$$
$$(n - 2) \times 180 = 156n$$
$$180n - 360 = 156n$$
$$24n = 360 \implies n = 15$$

It gives the right answer in $4$ algebraic lines, whereas the exterior-angle shortcut takes just two quick steps: $180 - 156 = 24$, then $360 \div 24 = 15$! Look closely at line 4 above: $24n = 360$ popped up at the end anyway—because $24^\circ$ *is* the exterior angle!

---

## Part E: Mixed Problems

### Example 8: Exterior Angles $x, 2x, 3x, 4x, 5x$

The five exterior angles of a pentagon are $x, 2x, 3x, 4x,$ and $5x$. Find the value of each angle.

Since exterior angles sum to $360^\circ$:

$$x + 2x + 3x + 4x + 5x = 360^\circ \implies 15x = 360^\circ \implies x = 24^\circ$$

Exterior angles: **$24^\circ, 48^\circ, 72^\circ, 96^\circ, 120^\circ$**.

**Check:** $24 + 48 + 72 + 96 + 120 = 360$ ✅

Interior angles: $180 - 24 = 156^\circ$, $180 - 48 = 132^\circ$, $180 - 72 = 108^\circ$, $180 - 96 = 84^\circ$, $180 - 120 = 60^\circ$. Sum $= 156 + 132 + 108 + 84 + 60 = 540^\circ = (5 - 2) \times 180^\circ$ ✅. All interior angles are under $180^\circ$, so the pentagon is indeed convex.

### Example 9: Given Three Exterior Angles, Find the Fourth

Three exterior angles of a quadrilateral are $80^\circ, 95^\circ$, and $70^\circ$. What is the fourth exterior angle?

Sum of the three angles $= 80 + 95 + 70 = 245^\circ$.
Fourth exterior angle $= 360^\circ - 245^\circ = \mathbf{115^\circ}$.

**Check:** $80 + 95 + 70 + 115 = 360$ ✅

Interior angles: $100^\circ, 85^\circ, 110^\circ, 65^\circ$. Sum $= 360^\circ$, matching $(4 - 2) \times 180^\circ = 360^\circ$ ✅

### Example 10: Final Angle of a Pentagon

Four exterior angles of a pentagon are $70^\circ, 85^\circ, 60^\circ$, and $90^\circ$. Find the fifth exterior angle and its corresponding interior angle.

Sum of the four angles $= 70 + 85 + 60 + 90 = 305^\circ$.
Fifth exterior angle $= 360^\circ - 305^\circ = \mathbf{55^\circ}$.
Corresponding interior angle $= 180^\circ - 55^\circ = \mathbf{125^\circ}$.

**Check:** $305 + 55 = 360$ ✅, and $125 + 55 = 180$ ✅

### Example 11: Exterior Angle Equals Interior Angle

In a regular polygon, each exterior angle equals each interior angle. How many sides does it have?

Exterior $+$ interior $= 180^\circ$, and both are equal, so each is $90^\circ$.
$n = 360 \div 90 = \mathbf{4}$. It is a square.

**Check:** A square has interior angle $90^\circ$ and exterior angle $90^\circ$ ✅

### Example 12: Interior Angle Equals $3 \times$ Exterior Angle

In a regular polygon, each interior angle is $3$ times each exterior angle. How many sides does it have?

Let the exterior angle be $x$, so the interior angle is $3x$.
$$x + 3x = 180^\circ \implies 4x = 180^\circ \implies x = 45^\circ, \quad \text{interior} = 135^\circ$$
$n = 360 \div 45 = \mathbf{8}$. It is a regular octagon.

**Check:** $(8 - 2) \times 180 \div 8 = 1080 \div 8 = 135^\circ$, and $135 = 3 \times 45$ ✅

---

## The Robot Story, Solved

Along Maya and Leo's regular pentagon track:
- Turn at each corner $= 360^\circ \div 5 = \mathbf{72^\circ}$
- Across $5$ corners, total rotation $= 5 \times 72^\circ = \mathbf{360^\circ}$ (one complete turn)

If Maya programmed a regular hexagon track instead, the robot would turn $360^\circ \div 6 = 60^\circ$ at each corner. And if the robot turned $30^\circ$ at each corner until facing the same direction again, the track would have $360^\circ \div 30^\circ = 12$ corners—a regular dodecagon!

---

## Common Pitfalls to Avoid

1. **Mistake 1: Adding both exterior angles at the same vertex.**
   At any vertex, either side can be extended, creating two vertically opposite (equal) exterior angles. If you add *both* at every corner, you double-count and get $720^\circ$. The $360^\circ$ sum applies when you take **exactly one exterior angle per vertex**—$5$ angles for a pentagon, never $10$.

2. **Mistake 2: Dividing $360^\circ$ by the interior angle instead of the exterior angle.**
   If the exterior angle is $36^\circ$, then $n = 360 \div 36 = \mathbf{10}$. If you are given an interior angle (say $144^\circ$), find the exterior angle *first*: $180^\circ - 144^\circ = 36^\circ$, and *then* compute $360 \div 36 = 10$. Dividing $360 \div 144 = 2.5$ makes no sense ($2.5$ sides is impossible)!

3. **Mistake 3: Thinking the exterior angle sum grows with $n$.**
   The interior angle sum grows with $n$, but the exterior angle sum does **not**: it is $360^\circ$ for *every* convex polygon. A $20$-sided convex polygon's exterior angles still sum to $360^\circ$, not $3600^\circ$.

4. **Mistake 4: Failing to check whether $n$ is a whole number.**
   The number of sides must always be a **whole number** ($\ge 3$). If a question asks about a regular polygon with an exterior angle of $25^\circ$, $360 \div 25 = 14.4$, which is not a whole number—so no such regular polygon exists! Always verify $n$ is an integer.

---

## Quick Recap

- **Exterior angle $+$ interior angle $= 180^\circ$** (linear pair at each corner), so $\text{exterior} = 180^\circ - \text{interior}$.
- For **any convex polygon**, the sum of the exterior angles (one per vertex) is always **$360^\circ$**, regardless of $n$.
- Robot analogy: completing one closed loop means turning a total of $360^\circ$.
- Algebraically: $\sum(180^\circ - \text{interior}) = 180n - (n - 2)\times 180 = 360^\circ$.
- **Each exterior angle of a regular $n$-gon $= 360^\circ \div n$**.
- **$n = 360^\circ \div (\text{each exterior angle})$**. If given the interior angle, subtract from $180^\circ$ first.
- $n$ must always come out to a whole number ($\ge 3$).

---

## Practice Questions

1. Find each exterior angle and each interior angle of a regular polygon with $18$ sides.

2. Each exterior angle of a regular polygon is $12^\circ$. Find the number of sides.

3. Each interior angle of a regular polygon is $170^\circ$. Find the number of sides. Check your answer with the $(n - 2) \times 180^\circ \div n$ formula.

4. The exterior angles of a quadrilateral are $2x, 3x, 3x,$ and $4x$. Find each exterior angle and each interior angle. Verify that the interior angles add up to $360^\circ$.

5. Five exterior angles of a hexagon are $40^\circ, 55^\circ, 65^\circ, 70^\circ$, and $80^\circ$. Find the sixth exterior angle and the interior angle at that vertex.

6. Is there a regular polygon whose exterior angle is $25^\circ$? Give a reason.

7. Each interior angle of a regular polygon is $4$ times its exterior angle. Find the number of sides.

8. A toy robot walks around a regular polygon path and makes a turn of $5^\circ$ at each corner. How many corners does the path have? What is the total turning when it returns to the start facing the same way?

9. State True or False:
   (a) The exterior angles of a convex polygon with $20$ sides add up to $360^\circ$.
   (b) A regular polygon can have each exterior angle equal to $100^\circ$.
   (c) As the number of sides of a regular polygon increases, each exterior angle decreases.
   (d) The sum of the exterior angles of a hexagon is twice that of a triangle.

### Answers

1. Exterior angle $= 360^\circ \div 18 = \mathbf{20^\circ}$. Interior angle $= 180^\circ - 20^\circ = \mathbf{160^\circ}$.
   Check: $(18 - 2) \times 180 \div 18 = 16 \times 10 = 160^\circ$ ✅

2. $n = 360 \div 12 = \mathbf{30\text{ sides}}$.
   Check: $30 \times 12 = 360$ ✅

3. Exterior angle $= 180^\circ - 170^\circ = 10^\circ$, so $n = 360 \div 10 = \mathbf{36}$.
   Check: $(36 - 2) \times 180 \div 36 = 34 \times 5 = 170^\circ$ ✅

4. $2x + 3x + 3x + 4x = 360 \implies 12x = 360 \implies x = 30^\circ$.
   Exterior angles: **$60^\circ, 90^\circ, 90^\circ, 120^\circ$**.
   Interior angles: $180 - 60 = \mathbf{120^\circ}$, $180 - 90 = \mathbf{90^\circ}$, $180 - 90 = \mathbf{90^\circ}$, $180 - 120 = \mathbf{60^\circ}$.
   Check: $120 + 90 + 90 + 60 = 360^\circ$ ✅

5. Sum of five exterior angles $= 40 + 55 + 65 + 70 + 80 = 310^\circ$. Sixth exterior angle $= 360^\circ - 310^\circ = \mathbf{50^\circ}$. Interior angle $= 180^\circ - 50^\circ = \mathbf{130^\circ}$.
   Check: $310 + 50 = 360$ ✅, $130 + 50 = 180$ ✅

6. $360 \div 25 = 14.4$, which is not a whole number. Since the number of sides must be an integer, **no** such regular polygon exists.

7. Let exterior $= x$, so interior $= 4x$. $x + 4x = 180^\circ \implies 5x = 180^\circ \implies x = 36^\circ$. $n = 360 \div 36 = \mathbf{10\text{ sides}}$ (decagon).
   Check: interior $= 144^\circ = 4 \times 36^\circ$, and $(10 - 2) \times 180 \div 10 = 144^\circ$ ✅

8. Corners $= 360 \div 5 = \mathbf{72}$. Total turning $= 72 \times 5^\circ = \mathbf{360^\circ}$ (one full revolution).

9. (a) **True** ✅. Exterior angles of every convex polygon sum to $360^\circ$.
   (b) **False** ❌. $360 \div 100 = 3.6$, not a whole number.
   (c) **True** ✅. $360^\circ \div n$ shrinks as $n$ increases (triangle $120^\circ$, square $90^\circ$, pentagon $72^\circ$).
   (d) **False** ❌. Both sum to $360^\circ$, so they are equal, not double.

---

The greatest magic of exterior angles is turning any polygon into a single $360^\circ$ loop: walk the perimeter, sum the turns, and you always get $360^\circ$. Whenever a problem asks for the number of sides of a regular polygon, reach for the exterior angle first!

**What comes next?** There is still more to discover about regular polygons—for example, why can only certain regular polygons cover a floor completely without gaps or overlaps? In Topic 4, we explore regular polygons, floor **tiling**, central angles, and mixed problems to wrap up the chapter.
