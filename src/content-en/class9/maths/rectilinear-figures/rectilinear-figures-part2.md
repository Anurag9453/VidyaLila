# Chapter: Rectilinear Figures (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [rectilinear-figures.md](rectilinear-figures.md)** (where Topic 1 introduced polygons, sides, vertices, diagonals, polygon names up to decagon, convex vs. concave, regular vs. irregular, and the diagonal formula).
> **Helpful background:** The angle sum of a triangle is $180^\circ$ ([Triangles, Topic 2](../triangles/triangles-part2.md)), and the angle sum of a quadrilateral is $360^\circ$ ([Quadrilaterals, Topic 1](../quadrilaterals/quadrilaterals.md)).
> **Topics covered in this file:**
> 2. Sum of Interior Angles of a Polygon

---

# Topic 2: Sum of Interior Angles of a Polygon

In Topic 1, we learned how to classify polygons—counting their sides, vertices, and diagonals ($n(n - 3)/2$), distinguishing convex from concave, and spotting regular polygons. Back in the museum gallery, Sophia named the hexagon, octagon, and $7$-sided heptagon tiles just by counting edges. So far, we have looked at polygons from the **outside**—counting edges and shapes. Now we step **inside** to measure their **interior corners (angles)**. The question is simple: what do all the interior angles of an $n$-sided polygon add up to? And if the polygon is regular, how big is each angle?

The answer builds directly on one fact you already know by heart: the three angles of a triangle always sum to $180^\circ$.

---

## Liam's Hexagonal Dining Table

Liam works as a master carpenter in a furniture workshop. Today, a client ordered a custom **regular hexagonal ($6$-sided) oak dining table**. The tabletop border is built from six identical wooden rim strips that must meet cleanly at every corner with zero gaps.

His apprentice Leo is learning the craft. Leo asks, "Liam, at what angle do I need to mitre the ends of each strip? If I am off by even a degree, the joints will leave a gap!"

Liam pauses and grins. "You know, I don't keep every angle memorized—but we don't need to memorize it! Let us derive it right on this notepad."

He sketches a quick hexagon on scrap paper. "Look, Leo: pick one corner and draw straight diagonals to the other corners to slice the hexagon into triangles. We already know every triangle's angles add up to $180^\circ$!"

By the end of this topic, we will solve Liam and Leo's carpentry angle—and unlock a general formula that works for **any** polygon, no matter how many sides it has.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Interior angle** | An angle inside a polygon formed by two adjacent sides at a vertex | Each corner of Liam's hexagon table |
| **Angle sum** | The total obtained by adding all interior angles of a polygon | Triangle angle sum $= 180^\circ$ |
| **Triangulation** | Splitting a polygon into triangles by drawing diagonals from one vertex | A hexagon splits into $4$ triangles |
| **Regular polygon** | A polygon with all sides equal and all interior angles equal | Square, regular hexagon |
| **Reflex angle** | An angle strictly greater than $180^\circ$ (can occur inside a concave polygon) | $210^\circ$ |

---

## Part A: Splitting a Polygon into Triangles

We know a triangle's angles sum to $180^\circ$. So the clever strategy is: **slice any polygon into triangles**, and add up their $180^\circ$ sums!

**Method:** Choose **any one vertex** of a convex polygon, and draw diagonals from that vertex to all non-adjacent vertices. The polygon divides neatly into non-overlapping triangles.

### Pentagon ($5$ sides)

In pentagon $ABCDE$, pick vertex $A$. Two diagonals leave $A$: $AC$ and $AD$ ($AB$ and $AE$ are already sides).

```
              A
            / | \
          /  / \  \
        E   /   \   B
         \ /     \ /
          D-------C
```

The two diagonals $AC$ and $AD$ create **$3$ triangles**: **$\triangle ABC, \triangle ACD, \triangle ADE$**.

Each triangle contributes $180^\circ$ to the interior angles of the pentagon, so:

> **Angle sum of a pentagon $= 3 \times 180^\circ = \mathbf{540^\circ}$**

### Hexagon ($6$ sides)

In hexagon $ABCDEF$, draw the three diagonals from $A$: $AC, AD, AE$ ($AB$ and $AF$ are sides).

```
             A
           / | \
         /  /|\  \
       F   / | \   B
       |  /  |  \  |
       | /   |   \ |
       E     |     C
         \   |   /
           \ | /
             D
```

This creates **$4$ triangles**: **$\triangle ABC, \triangle ACD, \triangle ADE, \triangle AEF$**.

> **Angle sum of a hexagon $= 4 \times 180^\circ = \mathbf{720^\circ}$**

### What Is the Pattern?

| Polygon | Sides ($n$) | Triangles | Sum of Angles |
|---|---|---|---|
| Triangle | $3$ | $1$ | $1 \times 180^\circ$ |
| Quadrilateral | $4$ | $2$ | $2 \times 180^\circ$ |
| Pentagon | $5$ | $3$ | $3 \times 180^\circ$ |
| Hexagon | $6$ | $4$ | $4 \times 180^\circ$ |

Notice that the number of triangles is always **$2$ less than the number of sides**. Why? Because from vertex $A$, you cannot draw a diagonal to **itself** ($1$ vertex) or to its **$2$ neighbours** ($2$ vertices), leaving $(n - 3)$ diagonals. And $(n - 3)$ cuts slice the polygon into $(n - 3) + 1 = \mathbf{n - 2}$ triangles!

> **Any convex $n$-gon can be divided from one vertex into $(n - 2)$ triangles.**

---

## Part B: Formula for the Sum of Interior Angles

Each triangle contributes $180^\circ$, and together the angles of all $(n - 2)$ triangles make up the exact interior angles of the polygon (with nothing left over and nothing counted twice). Thus:

$$\text{Sum of interior angles of an } n\text{-gon} = (n - 2) \times 180^\circ$$

Equivalently, since $180^\circ = 2 \times 90^\circ$ (two right angles), many geometry textbooks write this formula in terms of right angles:

$$\text{Sum of interior angles of an } n\text{-gon} = (2n - 4) \times 90^\circ \quad \text{[(2n − 4) right angles]}$$

Notice they are the exact same expression: $(n - 2) \times 180^\circ = (n - 2) \times 2 \times 90^\circ = (2n - 4) \times 90^\circ$.

### Table: Angle Sums of Different Polygons

| Polygon | $n$ | $(n - 2)$ | Angle Sum $= (n - 2) \times 180^\circ = (2n - 4) \times 90^\circ$ |
|---|---|---|---|
| Triangle | $3$ | $1$ | $1 \times 180^\circ = \mathbf{180^\circ}$ ($2$ right angles) |
| Quadrilateral | $4$ | $2$ | $2 \times 180^\circ = \mathbf{360^\circ}$ ($4$ right angles) |
| Pentagon | $5$ | $3$ | $3 \times 180^\circ = \mathbf{540^\circ}$ ($6$ right angles) |
| Hexagon | $6$ | $4$ | $4 \times 180^\circ = \mathbf{720^\circ}$ ($8$ right angles) |
| Heptagon | $7$ | $5$ | $5 \times 180^\circ = \mathbf{900^\circ}$ ($10$ right angles) |
| Octagon | $8$ | $6$ | $6 \times 180^\circ = \mathbf{1080^\circ}$ ($12$ right angles) |
| Nonagon | $9$ | $7$ | $7 \times 180^\circ = \mathbf{1260^\circ}$ ($14$ right angles) |
| Decagon | $10$ | $8$ | $8 \times 180^\circ = \mathbf{1440^\circ}$ ($16$ right angles) |

You already saw $360^\circ$ for a quadrilateral in [Quadrilaterals, Topic 1](../quadrilaterals/quadrilaterals.md)—now you see why: one diagonal splits it into $2$ triangles ($2 \times 180^\circ = 360^\circ$).

Notice the steady step: every time you add **one side**, the angle sum increases by **$180^\circ$** ($2$ right angles), because you add one more triangle!

---

## Part C: Each Interior Angle of a Regular Polygon

In a **regular** polygon, **all $n$ interior angles are equal**. So simply divide the total angle sum by $n$:

$$\text{Each interior angle of a regular } n\text{-gon} = \frac{(n - 2) \times 180^\circ}{n} = \frac{(2n - 4) \times 90^\circ}{n}$$

### Table

| Regular Polygon | $n$ | Angle Sum | Each Interior Angle |
|---|---|---|---|
| Equilateral triangle | $3$ | $180^\circ$ | $180^\circ \div 3 = \mathbf{60^\circ}$ |
| Square | $4$ | $360^\circ$ | $360^\circ \div 4 = \mathbf{90^\circ}$ |
| Regular pentagon | $5$ | $540^\circ$ | $540^\circ \div 5 = \mathbf{108^\circ}$ |
| Regular hexagon | $6$ | $720^\circ$ | $720^\circ \div 6 = \mathbf{120^\circ}$ |
| Regular octagon | $8$ | $1080^\circ$ | $1080^\circ \div 8 = \mathbf{135^\circ}$ |
| Regular decagon | $10$ | $1440^\circ$ | $1440^\circ \div 10 = \mathbf{144^\circ}$ |

**Check:** We already knew $60^\circ$ for an equilateral triangle and $90^\circ$ for a square ✅. Check the rest: $108 \times 5 = 540$ ✅, $120 \times 6 = 720$ ✅, $135 \times 8 = 1080$ ✅, $144 \times 10 = 1440$ ✅.

Notice how each interior angle grows larger as $n$ increases ($60^\circ, 90^\circ, 108^\circ, 120^\circ, 135^\circ, 144^\circ, \dots$): the polygon gets rounder and rounder, approaching $180^\circ$ without ever reaching it!

---

## Part D: Solved Examples

### Example 1: Corners of Liam's Table

Liam and Leo's hexagonal table is regular (all six wooden strips equal, all corners equal).

- For a hexagon, $n = 6$.
- Angle sum $= (6 - 2) \times 180^\circ = 4 \times 180^\circ = 720^\circ$.
- Each interior angle $= 720^\circ \div 6 = \mathbf{120^\circ}$.

Leo asked, "So should I set the saw to $120^\circ$?" Liam laughed: "Wait—$120^\circ$ is the **full inside corner** where two strips meet! Each strip provides half of that corner: $120^\circ \div 2 = \mathbf{60^\circ}$. Cut each strip end at **$60^\circ$** to its edge, and two strips meeting will give $60^\circ + 60^\circ = 120^\circ$ with a razor-tight joint."

**Check:** $6 \text{ corners} \times 120^\circ = 720^\circ$ ✅, and $60^\circ + 60^\circ = 120^\circ$ ✅.

A handy takeaway: **each corner of a regular hexagon is $120^\circ$** (and each mitred strip end is $60^\circ$).

### Example 2: Finding a Missing Angle

Four interior angles of a pentagon are $100^\circ, 110^\circ, 120^\circ$, and $90^\circ$. What is the fifth angle?

- Angle sum of a pentagon $= (5 - 2) \times 180^\circ = 540^\circ$.
- Sum of the four given angles $= 100^\circ + 110^\circ + 120^\circ + 90^\circ = 420^\circ$.
- Fifth angle $= 540^\circ - 420^\circ = \mathbf{120^\circ}$.

**Check:** $100 + 110 + 120 + 90 + 120 = 540$ ✅.

### Example 3: Angles with Algebra

The interior angles of a quadrilateral are $x, 2x, 3x,$ and $4x$. Find each angle.

- Angle sum of a quadrilateral $= 360^\circ$.
- $x + 2x + 3x + 4x = 10x = 360^\circ \implies x = \mathbf{36^\circ}$.
- Angles: **$36^\circ, 72^\circ, 108^\circ, 144^\circ$**.

**Check:** $36 + 72 + 108 + 144 = 360$ ✅.

### Example 4: Finding the Number of Sides from the Angle Sum

The interior angles of a polygon add up to $1620^\circ$. How many sides does it have?

- $(n - 2) \times 180 = 1620$
- $n - 2 = 1620 \div 180 = 9$
- $n = \mathbf{11}$

**Check:** $(11 - 2) \times 180 = 9 \times 180 = 1620$ ✅. It is an $11$-sided polygon (hendecagon).

### Example 5: Given Each Angle of a Regular Polygon, Find the Sides

Each interior angle of a regular polygon is $150^\circ$. How many sides does it have?

The angle sum of an $n$-gon is $(n - 2) \times 180$. Because it is regular with $n$ angles of $150^\circ$ each, the sum is also $150n$:

- $(n - 2) \times 180 = 150n$
- $180n - 360 = 150n$
- $180n - 150n = 360$
- $30n = 360 \implies n = \mathbf{12}$

**Check:** For $n = 12$, each interior angle $= (12 - 2) \times 180 \div 12 = 1800 \div 12 = 150^\circ$ ✅.

### Example 6: The Formula Works for Concave Polygons Too

All our polygons so far were convex. Does $(n - 2) \times 180^\circ$ (or $(2n - 4) \times 90^\circ$) still work for a **concave** polygon? Yes! Just remember that the indented corner's interior angle is a **reflex angle ($> 180^\circ$)**.

Take an arrowhead (dart) quadrilateral whose three acute/obtuse angles are $40^\circ, 60^\circ$, and $50^\circ$. Its fourth interior angle is reflex.

- Angle sum $= (4 - 2) \times 180^\circ = 360^\circ$.
- Sum of the three angles $= 40^\circ + 60^\circ + 50^\circ = 150^\circ$.
- Fourth (reflex) angle $= 360^\circ - 150^\circ = \mathbf{210^\circ}$.

**Check:** $40 + 60 + 50 + 210 = 360$ ✅, and $210^\circ > 180^\circ$ (truly reflex) ✅.

Why does this hold? Drawing the diagonal from the indented reflex vertex still splits the dart cleanly into $2$ triangles, keeping the exact $(n - 2) \times 180^\circ$ count! *(Any simple concave polygon can be triangulated into $n - 2$ triangles, though not always from a single vertex.)*

**Note:** A concave polygon can never be regular, so the "divide by $n$" formula applies only to regular (convex) polygons.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Using $n \times 180^\circ$ instead of $(n - 2) \times 180^\circ$.**
   For a pentagon:
   - Wrong: $5 \times 180^\circ = 900^\circ$.
   - Right: $(5 - 2) \times 180^\circ = 3 \times 180^\circ = \mathbf{540^\circ}$.
   The number of triangles is $n - 2$, not $n$.

2. **Mistake 2: Forgetting to divide by $n$ for a regular polygon.**
   Saying each interior angle of a regular hexagon is $(6 - 2) \times 180^\circ = 720^\circ$ is impossible—one corner cannot be $720^\circ$! Divide by $6$: $720^\circ \div 6 = \mathbf{120^\circ}$.

3. **Mistake 3: Confusing "angle sum" with "each interior angle."**
   "Angle sum" is the total of all corners combined; "each interior angle" is a single corner of a regular polygon. For a regular octagon, the angle sum is **$1080^\circ$**, whereas each interior angle is **$135^\circ$**.

4. **Mistake 4: Writing $(n - 2) \times 360^\circ$ instead of $180^\circ$.**
   For a pentagon:
   - Wrong: $(5 - 2) \times 360^\circ = 1080^\circ$.
   - Right: $(5 - 2) \times \mathbf{180^\circ} = 540^\circ$.
   Remember: a triangle's angles sum to $180^\circ$ (two right angles), not $360^\circ$! (Or use $(2n - 4) \times 90^\circ$.)

---

## Quick Recap

- Drawing diagonals from one vertex divides a convex $n$-gon into **$(n - 2)$ triangles**.
- **Sum of interior angles $= (n - 2) \times 180^\circ = (2n - 4) \times 90^\circ$**.
- Angle sums: triangle $180^\circ$, quadrilateral $360^\circ$, pentagon $540^\circ$, hexagon $720^\circ$, heptagon $900^\circ$, octagon $1080^\circ$, nonagon $1260^\circ$, decagon $1440^\circ$.
- **Each interior angle of a regular $n$-gon** $= \dfrac{(n - 2) \times 180^\circ}{n}$: $60^\circ, 90^\circ, 108^\circ, 120^\circ, 135^\circ, 144^\circ$ for $n = 3, 4, 5, 6, 8, 10$.
- Missing angle $=$ angle sum $-$ sum of given angles.
- Finding $n$: solve $(n - 2) \times 180 = \text{given sum}$, or $(n - 2) \times 180 = \text{angle} \times n$ for regular polygons.
- The angle sum formula works for concave polygons too (include the reflex angle $> 180^\circ$).

---

## Practice Questions

1. Using a diagram, show how a heptagon can be split into triangles from one vertex. How many triangles do you get, and what is the sum of its interior angles?

2. Find the sum of the interior angles of a polygon with $12$ sides.

3. Find each interior angle of a regular nonagon ($9$ sides).

4. Five angles of a hexagon are $130^\circ, 110^\circ, 120^\circ, 140^\circ$, and $100^\circ$. Find the sixth angle.

5. The angles of a pentagon are $x, x + 10^\circ, x + 20^\circ, x + 30^\circ$, and $x + 40^\circ$. Find $x$ and write all five angles.

6. The interior angles of a polygon add up to $2340^\circ$. How many sides does it have?

7. Each interior angle of a regular polygon is $165^\circ$. Find the number of sides. Solve it using $(n - 2) \times 180 = 165n$.

8. A concave quadrilateral has three angles of $25^\circ, 35^\circ$, and $45^\circ$. Find its fourth (reflex) angle.

9. Leo says, "The angle sum of a hexagon is $6 \times 180^\circ = 1080^\circ$." Find his mistake and give the correct sum.

10. State True or False:
    (a) The interior angles of any pentagon add up to $540^\circ$.
    (b) A regular polygon can have an interior angle of $180^\circ$.
    (c) The interior angle sum of a decagon is $1440^\circ$.
    (d) The formula $(n - 2) \times 180^\circ$ works for concave polygons too.

### Answers

1. A heptagon has $7$ vertices. From one vertex, $7 - 3 = 4$ diagonals can be drawn, splitting it into **$5$ triangles** ($7 - 2 = 5$).
   Angle sum $= 5 \times 180^\circ = \mathbf{900^\circ}$.

2. $n = 12$: $(12 - 2) \times 180^\circ = 10 \times 180^\circ = \mathbf{1800^\circ}$.

3. $n = 9$: angle sum $= 7 \times 180^\circ = 1260^\circ$. Each angle $= 1260^\circ \div 9 = \mathbf{140^\circ}$.
   Check: $140 \times 9 = 1260$ ✅

4. Angle sum of a hexagon $= 720^\circ$. Sum of the five given angles $= 130 + 110 + 120 + 140 + 100 = 600^\circ$. Sixth angle $= 720^\circ - 600^\circ = \mathbf{120^\circ}$.
   Check: $600 + 120 = 720$ ✅

5. Angle sum of a pentagon $= 540^\circ$.
   $x + (x + 10) + (x + 20) + (x + 30) + (x + 40) = 5x + 100 = 540 \implies 5x = 440 \implies \mathbf{x = 88^\circ}$.
   Angles: **$88^\circ, 98^\circ, 108^\circ, 118^\circ, 128^\circ$**.
   Check: $88 + 98 + 108 + 118 + 128 = 540$ ✅

6. $(n - 2) \times 180 = 2340 \implies n - 2 = 2340 \div 180 = 13 \implies \mathbf{n = 15}$.
   Check: $13 \times 180 = 2340$ ✅

7. $(n - 2) \times 180 = 165n \implies 180n - 360 = 165n \implies 15n = 360 \implies \mathbf{n = 24}$.
   Check: $22 \times 180 \div 24 = 3960 \div 24 = 165^\circ$ ✅

8. Angle sum of a quadrilateral $= 360^\circ$. Sum of three angles $= 25 + 35 + 45 = 105^\circ$. Reflex angle $= 360^\circ - 105^\circ = \mathbf{255^\circ}$.
   Check: $255^\circ > 180^\circ$ ✅, and $105 + 255 = 360$ ✅

9. Leo used $n \times 180^\circ$ instead of $(n - 2) \times 180^\circ$. Correct sum: $(6 - 2) \times 180^\circ = 4 \times 180^\circ = \mathbf{720^\circ}$.
   Check: a hexagon splits into $4$ triangles from one vertex, and $4 \times 180 = 720$ ✅

10. (a) **True** ✅. Every pentagon ($3$ triangles) has interior angle sum $(5 - 2) \times 180^\circ = 540^\circ$.
    (b) **False** ❌. At $180^\circ$ the two edges flatten into a straight line, not a corner. Every interior angle of a regular polygon is strictly less than $180^\circ$.
    (c) **True** ✅. $(10 - 2) \times 180^\circ = 1440^\circ$.
    (d) **True** ✅. Including the reflex angle gives the exact same sum.

---

Liam finished building the hexagonal oak table with razor-sharp $60^\circ$ joints, and Leo jotted down the golden rule in his workshop notebook: *"To find the corner angles, slice the polygon into triangles!"* Whenever you face any polygon, remember $(n - 2) \times 180^\circ$ (or $(2n - 4) \times 90^\circ$).

**What comes next?** So far we have studied angles **inside** a polygon. In Topic 3, we step **outside** the polygon to examine **exterior angles**—where an astonishing constant awaits us!
