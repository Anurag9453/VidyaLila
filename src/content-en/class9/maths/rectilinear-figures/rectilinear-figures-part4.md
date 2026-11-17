# Chapter: Rectilinear Figures (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [rectilinear-figures-part3.md](rectilinear-figures-part3.md).** (The chapter begins in [rectilinear-figures.md](rectilinear-figures.md). For circles, see [circles.md](../circles/circles.md); for squares and rhombuses, see [quadrilaterals.md](../quadrilaterals/quadrilaterals.md).)
> **Topics covered in this file:**
> 4. Regular Polygons, Tiling, and Mixed Problems

---

# Topic 4: Regular Polygons, Tiling, and Mixed Problems

In Topic 3, we explored the **exterior angles** of a polygon: their sum is always $360^\circ$, and each exterior angle of a regular $n$-gon is $360^\circ \div n$. Maya and Leo's robot turned $72^\circ$ at each of the $5$ corners of a regular pentagon for a full $360^\circ$ spin—giving us a lightning-fast way to find the number of sides. Earlier, we covered polygon names, diagonals, and interior angle sums (like the $120^\circ$ corners of Liam's hexagonal oak table).

Now we have every tool in hand. In this final topic, we put them to work in a real architectural setting: **tiling a floor**. Then we examine the triangles radiating from the centre of a regular polygon, and finish with mixed problems combining all of the chapter's formulas—followed by the complete chapter wrap-up.

---

## Sophia's Question at the Tile Showroom

Sophia was helping her family pick ceramic floor tiles for their new sunroom at an architectural tile showroom. The shop owner, Elena, showed them rows of sample boards: square tiles, equilateral triangle tiles, and hexagon tiles.

Sophia scanned the shelves and asked, "Elena, I see squares, triangles, and hexagons everywhere—but why do we never see **regular pentagon** floor tiles? Five equal sides would look so cool!"

Elena smiled, pulled three regular pentagon sample tiles from a display drawer, and set them edge-to-edge on the counter around a single corner point. "Try fitting them together, Sophia."

When three pentagons met at a point, a narrow **wedge-shaped gap** remained. When Sophia tried sliding a fourth pentagon into that gap, it **overlapped** right on top of the first tile!

"Floor tiles cannot leave gaps, and they cannot climb on top of each other," Elena explained. "A regular pentagon always does one or the other."

Sophia asked, "Why?" The secret lies hidden in the angles. Let us uncover it!

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Tiling (tessellation)** | Covering a flat surface completely with tiles leaving no gaps and no overlaps | Square tiles on a kitchen floor |
| **Vertex** *(of a tiling)* | A point on the floor where the corners of multiple tiles meet | Where $4$ square tiles meet |
| **Gap** | Uncovered space left between tiles when the angles around a vertex sum to less than $360^\circ$ | $3$ pentagons give $324^\circ$, leaving a $36^\circ$ gap |
| **Overlap** | Tiles riding on top of one another when the angles around a vertex exceed $360^\circ$ | $4$ pentagons give $432^\circ$ |
| **Central angle** | The angle at the centre of a regular polygon subtended by one side | $60^\circ$ in a regular hexagon |
| **Circumcircle** | The circle passing through all vertices of a regular polygon | Circle passing through all $6$ corners of a hexagon |
| **Circumradius** | The radius of the circumcircle—distance from the centre to any vertex | Equals the side length in a regular hexagon |

---

## Part A: Quick Recap of Regular Polygons

In a regular polygon, all sides are equal and all angles are equal. Recall the formulas from earlier topics:

- Sum of interior angles $= (n - 2) \times 180^\circ$, so each interior angle $= (n - 2) \times 180^\circ \div n$
- Each exterior angle $= 360^\circ \div n$
- At every vertex: $\text{interior angle} + \text{exterior angle} = 180^\circ$

Keep this reference table handy:

| $n$ (sides) | Name | Each Exterior Angle ($360^\circ \div n$) | Each Interior Angle ($180^\circ - \text{exterior}$) |
|---|---|---|---|
| $3$ | Triangle | $120^\circ$ | $60^\circ$ |
| $4$ | Square | $90^\circ$ | $90^\circ$ |
| $5$ | Pentagon | $72^\circ$ | $108^\circ$ |
| $6$ | Hexagon | $60^\circ$ | $120^\circ$ |
| $7$ | Heptagon | $51.43^\circ$ ($360/7$) | $128.57^\circ$ ($900/7$) |
| $8$ | Octagon | $45^\circ$ | $135^\circ$ |
| $9$ | Nonagon | $40^\circ$ | $140^\circ$ |
| $10$ | Decagon | $36^\circ$ | $144^\circ$ |
| $12$ | Dodecagon | $30^\circ$ | $150^\circ$ |

Check using the interior angle sum formula: pentagon $(5 - 2) \times 180 \div 5 = 540 \div 5 = 108^\circ$ ✅; octagon $6 \times 180 \div 8 = 1080 \div 8 = 135^\circ$ ✅; dodecagon $10 \times 180 \div 12 = 1800 \div 12 = 150^\circ$ ✅; heptagon $5 \times 180 \div 7 = 900 \div 7 \approx 128.57^\circ$ ✅.

Notice again: as $n$ increases, each interior angle approaches $180^\circ$ (the polygon looks more and more circular) while the exterior angle shrinks.

---

## Part B: Tiling a Floor (Tessellations)

### What Does a Good Tiling Require?

At every point (**vertex**) on the floor where tile corners meet, the angles of the meeting tiles must fill the complete circle around that point. A full circle is **exactly $360^\circ$**:
- **Less than $360^\circ$** leaves a **gap**.
- **More than $360^\circ$** causes an **overlap**.

Therefore: **the angles meeting at every vertex must add up to exactly $360^\circ$.**

### Tiling with a Single Regular Polygon

If all tiles are identical regular polygons and $k$ tiles meet at each vertex, then $k \times (\text{interior angle}) = 360^\circ$. That means **$360^\circ \div (\text{interior angle})$ must be a whole number!**

**Equilateral triangle:** interior angle $= 60^\circ$. $360 \div 60 = 6 \implies 6$ triangles around each vertex ($60^\circ \times 6 = 360^\circ$ ✅). **Tiles cleanly!**

**Square:** interior angle $= 90^\circ$. $360 \div 90 = 4 \implies 4$ squares ($90^\circ \times 4 = 360^\circ$ ✅). **Tiles cleanly!**

**Regular hexagon:** interior angle $= 120^\circ$. $360 \div 120 = 3 \implies 3$ hexagons ($120^\circ \times 3 = 360^\circ$ ✅). **Tiles cleanly!** (That is why Elena stocked hexagon tiles.)

**Regular pentagon:** interior angle $= 108^\circ$. $360 \div 108 = 3.33\dots$—not a whole number!
- $3$ pentagons: $108^\circ \times 3 = 324^\circ \implies 360^\circ - 324^\circ = \mathbf{36^\circ\text{ gap}}$.
- $4$ pentagons: $108^\circ \times 4 = 432^\circ \implies 432^\circ - 360^\circ = \mathbf{72^\circ\text{ overlap}}$.

That is exactly what happened on Elena's counter: a $36^\circ$ gap with three tiles, and a $72^\circ$ overlap with four! You cannot lay $3.33$ tiles!

**Regular octagon:** interior angle $= 135^\circ$. $360 \div 135 \approx 2.67$. $2$ octagons $= 270^\circ$ ($90^\circ$ gap); $3$ octagons $= 405^\circ$ ($45^\circ$ overlap). Cannot tile alone.

**Regular heptagon:** interior angle $\approx 128.57^\circ$. $2$ heptagons $\approx 257.14^\circ$ (gap); $3$ heptagons $\approx 385.71^\circ$ (overlap). Cannot tile alone.

**Nonagon, decagon, dodecagon:** interior angles $140^\circ, 144^\circ, 150^\circ$. Two tiles fall short of $360^\circ$ ($280^\circ, 288^\circ, 300^\circ$), and three tiles overshoot $360^\circ$ ($420^\circ, 432^\circ, 450^\circ$). None of them can tile alone!

### The Rule

**A single regular $n$-gon can tile the plane by itself if and only if $360^\circ \div (\text{interior angle})$ is a whole number.**

Because every interior angle is under $180^\circ$, at least $3$ tiles must meet at a vertex. Yet for $n \ge 7$, the interior angle exceeds $120^\circ$, so $3$ tiles already exceed $360^\circ$, while $2$ tiles fall short! With no integer between $2$ and $3$, no regular polygon with $7$ or more sides can ever tile alone. Only **equilateral triangles, squares, and regular hexagons** can tile a floor by themselves!

### Tiling by Combining Different Polygons

Many tile showrooms also sell **semi-regular tilings** that mix two or more shapes of equal side length. The exact same $360^\circ$ vertex rule applies:

**1. Regular octagon $+$ square**
At each vertex, $2$ octagons and $1$ square meet: $135^\circ + 135^\circ + 90^\circ = \mathbf{360^\circ}$ ✅. You have probably seen this classic pattern on entryway or bathroom floors: large octagons framed by small tilted squares!

**2. Equilateral triangle $+$ regular hexagon**
At each vertex, $2$ triangles and $2$ hexagons meet: $60^\circ + 60^\circ + 120^\circ + 120^\circ = \mathbf{360^\circ}$ ✅.
Another option: $4$ triangles and $1$ hexagon: $60^\circ \times 4 + 120^\circ = 240^\circ + 120^\circ = \mathbf{360^\circ}$ ✅.

**3. Square $+$ equilateral triangle**
At each vertex, $2$ squares and $3$ triangles meet: $90^\circ + 90^\circ + 60^\circ + 60^\circ + 60^\circ = 180^\circ + 180^\circ = \mathbf{360^\circ}$ ✅.

*(Of course, the tiles must also share the same edge length so their sides align cleanly. Here we are checking the angle condition.)*

### The Complete Answer to Sophia's Question

Why are there no regular pentagon tiles? Because **a regular pentagon's interior angle is $108^\circ$, which does not divide evenly into $360^\circ$.** Three give $324^\circ$ ($36^\circ$ gap) and four give $432^\circ$ ($72^\circ$ overlap). Without gaps or overlaps, regular pentagons simply cannot tessellate on their own. That leaves just three solo regular tilers: triangles ($60^\circ$), squares ($90^\circ$), and hexagons ($120^\circ$).

Sophia grinned: "So looking pretty isn't enough—the corners have to add up to $360^\circ$!" Elena laughed, "Exactly—you can't tile a floor without geometry!"

### Fun Fact: Honeybees and Hexagons

Honeybee honeycombs are tiled entirely with regular hexagons. Among the three regular tilers (triangle, square, hexagon), **the hexagon encloses a given area using the smallest total wall perimeter**—meaning bees store the maximum honey using the minimum amount of beeswax! *(A famous theorem of geometry, though we save its proof for higher mathematics.)*

---

## Part C: Central Angle and the Regular Hexagon

### Central Angle

Draw segments from the centre of a regular $n$-gon to all $n$ vertices. This slices the polygon into **$n$ congruent isosceles triangles** (the two equal legs of each triangle run from the centre to two adjacent vertices, all equal to the circumradius). Around the centre, the $n$ equal angles make a full $360^\circ$ turn, so:

$$\text{Central angle} = \frac{360^\circ}{n}$$

Notice that this equals the **exterior angle** of the regular polygon!

Keep these three distinct angles straight:
- **Central angle** $= 360^\circ \div n$ (at the **centre**)
- **Exterior angle** $= 360^\circ \div n$ (at a **corner, outside**)
- **Interior angle** $= 180^\circ - 360^\circ \div n$ (at a **corner, inside**)

Central and exterior angles have the same numerical measure, even though they sit in different locations.

### Angles of the Isosceles Triangle

For a regular pentagon: central angle $= 360^\circ \div 5 = 72^\circ$. The two equal base angles of each isosceles triangle are $(180^\circ - 72^\circ) \div 2 = 54^\circ$ each. Two adjacent triangles meet at each vertex to form the interior angle: $54^\circ + 54^\circ = \mathbf{108^\circ}$ ✅. In general: **$\text{interior angle} = 2 \times (\text{base angle of the central isosceles triangle})$**.

### The Regular Hexagon: Most Special of All

For a regular hexagon ($n = 6$), central angle $= 360^\circ \div 6 = \mathbf{60^\circ}$. Each base angle is $(180^\circ - 60^\circ) \div 2 = 60^\circ$. All three angles are $60^\circ$, so every one of the $6$ triangles is **equilateral**! That means the distance from the centre to any corner (the circumradius) equals the side length:

$$\text{In a regular hexagon: } \text{side length} = \text{circumradius}$$

That is why inscribing a regular hexagon inside a circle is effortless ([Circles](../circles/circles.md)): keep your compass set to the circle's radius and step it around the circumference $6$ times—you land right back where you started!

### Diagonals of a Regular Hexagon

From our diagonal formula: $n(n - 3) \div 2 = 6 \times 3 \div 2 = \mathbf{9\text{ diagonals}}$. In regular hexagon $ABCDEF$ of side $a$, they come in two lengths:

- **Long diagonals ($3$):** $AD, BE, CF$. Each passes straight through the centre, so each equals $\text{radius} + \text{radius} = 2a$. **$\text{Long diagonal} = 2a$.**
- **Short diagonals ($6$):** $AC, BD, CE, DF, EA, FB$. *(Finding their exact length uses the Pythagorean theorem—included here as enrichment.)* In $\triangle ABC$, $AB = BC = a$ and $\angle B = 120^\circ$. Drop perpendicular $BM$ from $B$ to $AC$; it bisects $\angle B$ into $60^\circ + 60^\circ$ and bisects $AC$. In right triangle $ABM$, $AB = a$ and $\angle ABM = 60^\circ$, so $\angle BAM = 30^\circ$ (half of an equilateral triangle), giving $BM = a/2$. By Pythagoras, $AM^2 = a^2 - a^2/4 = 3a^2/4$, so $AM = \frac{\sqrt{3}}{2}a$, and **$AC = 2 \times AM = a\sqrt{3}$**.

Count check: $3 + 6 = 9$ diagonals ✅.

Example: if $a = 6\text{ cm}$, long diagonal $= 12\text{ cm}$, and short diagonal $= 6\sqrt{3} \approx 6 \times 1.732 = 10.39\text{ cm}$. Check: $BM = 3$ and $AM^2 = 36 - 9 = 27 \implies AM = 3\sqrt{3} \implies AC = 6\sqrt{3}$ ✅.

---

## Part D: Mixed Problems

### Problem 1: Angle Sum from Number of Diagonals

A polygon has $77$ diagonals. Find the sum of its interior angles.

$\dfrac{n(n - 3)}{2} = 77 \implies n(n - 3) = 154$. Trying $n = 14$: $14 \times 11 = 154$ ✅. Thus it is a $14$-gon.

$$\text{Angle sum} = (14 - 2) \times 180^\circ = 12 \times 180^\circ = \mathbf{2160^\circ}$$

Check: $14 \times 11 \div 2 = 77$ ✅ and $12 \times 180 = 2160$ ✅.

### Problem 2: Interior Angles in a Ratio

The interior angles of an irregular pentagon are in the ratio $2 : 3 : 4 : 5 : 6$. Find every angle.

Angle sum of a pentagon $= (5 - 2) \times 180^\circ = 540^\circ$. Total ratio parts $= 2 + 3 + 4 + 5 + 6 = 20$. One part $= 540^\circ \div 20 = 27^\circ$.

Angles: $2 \times 27^\circ = \mathbf{54^\circ}$, $3 \times 27^\circ = \mathbf{81^\circ}$, $4 \times 27^\circ = \mathbf{108^\circ}$, $5 \times 27^\circ = \mathbf{135^\circ}$, $6 \times 27^\circ = \mathbf{162^\circ}$.

Check: $54 + 81 + 108 + 135 + 162 = 540^\circ$ ✅.

### Problem 3: Interior Exceeds Exterior by $100^\circ$

Each interior angle of a regular polygon exceeds its exterior angle by $100^\circ$. How many sides does it have?

Let exterior $= e$, so interior $= e + 100$. Together they make $180^\circ$:
$$e + (e + 100) = 180 \implies 2e = 80 \implies e = 40^\circ$$

$n = 360 \div 40 = \mathbf{9\text{ sides}}$ (nonagon). Interior angle $= 140^\circ$.

Check: $140 - 40 = 100$ ✅ and $140 + 40 = 180$ ✅.

*(If it had said "exceeds by $20^\circ$" instead of $100^\circ$, we would get $e = 80^\circ$ and $n = 4.5$, which is impossible! Always verify that $n$ is a whole number.)*

### Problem 4: Exterior Angle $18^\circ$ — How Many Diagonals?

Each exterior angle of a regular polygon is $18^\circ$. How many diagonals does it have?

$n = 360 \div 18 = 20$. Diagonals $= \dfrac{20 \times (20 - 3)}{2} = \dfrac{20 \times 17}{2} = \mathbf{170}$.

Check: $20 \times 18 = 360$ ✅, and $20 \times 17 = 340$, half is $170$ ✅.

### Problem 5: Given the Central Angle

The central angle of a regular polygon is $6^\circ$. Find its interior angle sum and each interior angle.

$n = 360 \div 6 = 60$. Angle sum $= (60 - 2) \times 180^\circ = 58 \times 180^\circ = \mathbf{10440^\circ}$. Each interior angle $= 10440^\circ \div 60 = \mathbf{174^\circ}$.

Check: $180 - 6 = 174^\circ$ ✅ (since central angle $=$ exterior angle $= 6^\circ$).

### Problem 6: Three Different Polygons Meeting at One Vertex

A regular hexagon, a square, and one more regular polygon meet at a vertex with no gap and no overlap. What is the third polygon?

Hexagon $120^\circ + \text{square } 90^\circ = 210^\circ$. Remaining angle $= 360^\circ - 210^\circ = 150^\circ$. An interior angle of $150^\circ$ gives an exterior angle of $30^\circ$, so $n = 360 \div 30 = \mathbf{12}$. The third polygon is a **regular dodecagon**.

Check: $120 + 90 + 150 = 360$ ✅.

### Problem 7: From Diagonals to $n$, Then Tiling

A regular polygon has $20$ diagonals. Can it tile a floor by itself? What about alongside another regular polygon?

$n(n - 3) = 40$. Trying $n = 8$: $8 \times 5 = 40$ ✅, so it is a regular octagon. Its interior angle is $135^\circ$. Since $360 \div 135 \approx 2.67$ is not a whole number, it **cannot tile alone**. However, it tiles cleanly alongside squares: $135^\circ + 135^\circ + 90^\circ = 360^\circ$ ✅.

### Problem 8: Side of a Hexagon Inscribed in a Circle

A regular hexagon is inscribed in a circle of radius $7\text{ cm}$. Find the hexagon's perimeter and the length of a long diagonal.

In a regular hexagon, $\text{side} = \text{circumradius} = 7\text{ cm}$. Perimeter $= 6 \times 7 = \mathbf{42\text{ cm}}$. Long diagonal $= 2 \times 7 = \mathbf{14\text{ cm}}$ (equal to the circle's diameter).

Check: the central angle is $60^\circ$ and both radial sides are $7\text{ cm}$, making the triangle equilateral, so the third side is also $7\text{ cm}$ ✅.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Assuming every regular polygon can tile a floor.**
   A regular pentagon is regular, yet $3 \times 108^\circ = 324^\circ$ (gap) and $4 \times 108^\circ = 432^\circ$ (overlap). Regularity is not enough—the angles around a vertex must hit $360^\circ$ exactly. Only triangles, squares, and hexagons tile solo.

2. **Mistake 2: Mixing up central, interior, and exterior angles.**
   In a regular hexagon, central $= 60^\circ$, exterior $= 60^\circ$, and interior $= 120^\circ$. Central and exterior share the same value, whereas interior does not: for the interior angle, always use $180^\circ - 360^\circ \div n$, never $360^\circ \div n$.

3. **Mistake 3: Adding the wrong angle combinations around $360^\circ$.**
   Two octagons $+$ one square $= 135 + 135 + 90 = 360^\circ$ ✅. Three octagons $+$ one square $= 135 \times 3 + 90 = 495^\circ$, which overlaps severely. Always sum the exact tiles meeting at a single vertex and check for $360^\circ$.

4. **Mistake 4: Counting a tile twice at a vertex.**
   At a triangle $+$ hexagon vertex with $2$ triangles and $2$ hexagons, the sum is $60 + 60 + 120 + 120 = 360^\circ$. Do not double-count shared tiles or count tiles sitting at neighbouring vertices—count only the tiles touching that one vertex, once each.

5. **Mistake 5: Confusing the long and short diagonals of a regular hexagon.**
   If the side is $6\text{ cm}$, the long diagonal is $12\text{ cm}$ while the short diagonal is $6\sqrt{3} \approx 10.39\text{ cm}$. They are not equal.

---

## Quick Recap

- Regular polygon: each exterior angle $= 360^\circ \div n$; each interior angle $= 180^\circ - 360^\circ \div n$.
- **Tiling:** the angles meeting at each vertex must sum to exactly $360^\circ$ (less leaves a gap; more causes overlap).
- The only regular polygons that tile alone are **equilateral triangles ($60^\circ \times 6$), squares ($90^\circ \times 4$), and regular hexagons ($120^\circ \times 3$)**.
- Solo tiling rule: $360^\circ \div (\text{interior angle})$ must be a whole number.
- Pentagons ($108^\circ$), octagons ($135^\circ$), and higher $n$-gons cannot tile alone, though combinations work (octagon $+$ square: $135 + 135 + 90$; triangle $+$ hexagon: $60 + 60 + 120 + 120$; square $+$ triangle: $90 + 90 + 60 + 60 + 60$).
- **Central angle $= 360^\circ \div n$**. Radii to all vertices split a regular $n$-gon into $n$ congruent isosceles triangles.
- In a regular hexagon of side $a$: $\text{circumradius} = a$, $\text{long diagonal} = 2a$, $\text{short diagonal} = a\sqrt{3}$, $9$ diagonals total.
- In mixed problems, solve for $n$ first (from diagonals, exterior angle, or central angle), then apply the remaining formulas.

---

## Practice Questions

1. Find the central angle, the exterior angle, and the interior angle of a regular polygon with $90$ sides.

2. Can a regular polygon with $45$ sides tile the floor by itself? Show your calculation.

3. Regular octagons and squares of the same side length are used together to tile a floor. How many octagons and how many squares meet at each vertex? Verify that the angles add up to $360^\circ$.

4. Three regular pentagons are placed around a point so that they share the vertex and touch each other. What is the angle of the gap that is left?

5. A polygon has $119$ diagonals. Find the sum of its interior angles.

6. The angles of a quadrilateral are in the ratio $4 : 5 : 6 : 9$. Find each angle.

7. A regular hexagon has side $8\text{ cm}$. Find its perimeter, its long diagonal, and its short diagonal (leave the short diagonal in terms of $\sqrt{3}$).

8. Say whether each statement is true or false, giving a reason.
   (a) A regular pentagon can tile a floor by itself.
   (b) In a regular hexagon, the distance from the centre to a corner equals the side.
   (c) In every regular polygon, the central angle equals the exterior angle.

9. Each interior angle of a regular polygon is $7$ times its exterior angle. Find the number of sides and the number of diagonals.

10. Explain with numbers why regular heptagons cannot tile a floor by themselves.

### Answers

1. $n = 90$. Central angle $= 360^\circ \div 90 = \mathbf{4^\circ}$. Exterior angle $= 360^\circ \div 90 = \mathbf{4^\circ}$. Interior angle $= 180^\circ - 4^\circ = \mathbf{176^\circ}$.
   Check: $(90 - 2) \times 180 \div 90 = 88 \times 2 = 176^\circ$ ✅

2. $n = 45$, exterior $= 360^\circ \div 45 = 8^\circ$, interior $= 180^\circ - 8^\circ = 172^\circ$. $360 \div 172 \approx 2.09$, not a whole number. $2$ tiles give $344^\circ$ ($16^\circ$ gap) and $3$ tiles give $516^\circ$ (overlap). So **no**, it cannot tile alone.

3. Interior angle of an octagon is $135^\circ$ and of a square is $90^\circ$. $135 + 135 + 90 = 360^\circ$, so **$2$ octagons and $1$ square** meet at each vertex.
   Check: $135 \times 2 = 270$, $270 + 90 = \mathbf{360^\circ}$ ✅

4. Interior angle of a regular pentagon is $108^\circ$. $3$ pentagons $= 3 \times 108^\circ = 324^\circ$. Gap $= 360^\circ - 324^\circ = \mathbf{36^\circ}$.
   Check: $324 + 36 = 360$ ✅

5. $\dfrac{n(n - 3)}{2} = 119 \implies n(n - 3) = 238$. At $n = 17$, $17 \times 14 = 238$ ✅. Angle sum $= (17 - 2) \times 180^\circ = 15 \times 180^\circ = \mathbf{2700^\circ}$.
   Check: $17 \times 14 \div 2 = 119$ ✅

6. Ratio parts $= 4 + 5 + 6 + 9 = 24$. Quadrilateral angle sum $= 360^\circ$, so $1$ part $= 360^\circ \div 24 = 15^\circ$. Angles: **$60^\circ, 75^\circ, 90^\circ, 135^\circ$**.
   Check: $60 + 75 + 90 + 135 = 360$ ✅

7. Side $a = 8\text{ cm}$. Perimeter $= 6 \times 8 = \mathbf{48\text{ cm}}$. Long diagonal $= 2 \times 8 = \mathbf{16\text{ cm}}$. Short diagonal $= \mathbf{8\sqrt{3}\text{ cm}}$ (approx. $8 \times 1.732 = 13.86\text{ cm}$).
   Check: in half-triangle $ABM$, $BM = 4$, $AM^2 = 64 - 16 = 48 \implies AM = 4\sqrt{3} \implies AC = 8\sqrt{3}$ ✅

8. (a) **False** ❌. A regular pentagon's interior angle is $108^\circ$, and $360 \div 108 \approx 3.33$, not a whole number.
   (b) **True** ✅. Joining the centre to adjacent vertices forms equilateral triangles, so circumradius $=$ side.
   (c) **True** ✅. Both equal $360^\circ \div n$ (located differently, yet equal in measure).

9. Let exterior $= e$, so interior $= 7e$. $e + 7e = 180^\circ \implies 8e = 180^\circ \implies e = 22.5^\circ$. $n = 360 \div 22.5 = \mathbf{16\text{ sides}}$. Diagonals $= 16 \times 13 \div 2 = \mathbf{104}$.
   Check: interior $= 180 - 22.5 = 157.5^\circ = 7 \times 22.5^\circ$ ✅, and $16 \times 22.5 = 360$ ✅

10. A regular heptagon has interior angle $900^\circ \div 7 \approx 128.57^\circ$. Two heptagons give $\approx 257.14^\circ$ (leaving a $102.86^\circ$ gap), while three give $\approx 385.71^\circ$ (causing a $25.71^\circ$ overlap). With no whole number yielding $360^\circ$, regular heptagons **cannot tile alone**.

---

Now you see that even a tiled floor is pure geometry in action! Every corner and every triangle inside a regular polygon is now under your command. Well done!

---

# Chapter Wrap-up: Rectilinear Figures

| Topic | What We Learned | Key Takeaway |
|---|---|---|
| 1. Language of polygons | Polygon names, regular vs. irregular, convex vs. concave, counting diagonals | Total diagonals $= n(n - 3) \div 2$ |
| 2. Interior angles | Triangulating a polygon to find the angle sum, each interior angle of a regular polygon | Angle sum $= (n - 2) \times 180^\circ = (2n - 4) \times 90^\circ$, depending only on $n$ |
| 3. Exterior angles | Exterior angles, their constant sum, regular exterior angles, finding $n$ | Exterior angles of any convex polygon always sum to $360^\circ$; regular exterior $= 360^\circ \div n$ |
| 4. Regular polygons, tiling, and mixed problems | Regular polygon table, floor tiling, central angle, hexagon diagonals, mixed problems | Vertex angles must sum to $360^\circ$ to tile; solo regular tilers are triangle, square, and hexagon only |

### All Polygon Formulas

| Quantity | Formula |
|---|---|
| Number of diagonals | $n(n - 3) \div 2$ |
| Sum of interior angles | $(n - 2) \times 180^\circ = (2n - 4) \times 90^\circ$ |
| Each interior angle (regular) | $(n - 2) \times 180^\circ \div n$, or $180^\circ - 360^\circ \div n$ |
| Each exterior angle (regular) | $360^\circ \div n$ |
| Sum of exterior angles (any convex polygon) | $360^\circ$ |
| Central angle (regular polygon) | $360^\circ \div n$ |
| Interior $+$ exterior (at one vertex) | $180^\circ$ |
| Solo tiling condition (regular $n$-gon) | $360^\circ \div (\text{interior angle})$ is a whole number; vertex sum $= 360^\circ$ |
| Regular hexagon (side $a$) | Circumradius $= a$, long diagonal $= 2a$, short diagonal $= a\sqrt{3}$ |

---

From naming any polygon to calculating its angles, diagonals, and tiling behaviour, you now hold the complete toolkit for rectilinear figures!
