# Chapter: Quadrilaterals (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [quadrilaterals-part2.md](quadrilaterals-part2.md).** (Topic 1 is in [quadrilaterals.md](quadrilaterals.md).) For triangle congruence, see [Congruence of Triangles](../congruence-of-triangles/congruence-of-triangles.md).
> **Topics covered in this file:**
> 3. Areas of Parallelograms and Triangles, and Euclidean Area Axioms

---

# Topic 3: Areas of Parallelograms and Triangles, and Euclidean Area Axioms

In Topic 1, we classified quadrilaterals and proved the key properties of parallelograms: opposite sides and angles are equal, diagonals bisect each other, and **a diagonal divides a parallelogram into two congruent triangles** ("Diagonal Splits into Two Congruent Triangles" theorem). In Topic 2, we used the Mid-point Theorem to relate lengths—finding that the wooden border across Leo's triangular flower bed ran parallel to the walkway and measured half its length ($20\text{ m}$).

Up to now, we have focused on **lengths and angles**. In this final topic of the chapter, we measure something new: **area**—how much flat surface lies inside a figure. And that result from Topic 1—that a diagonal cuts a parallelogram into two congruent triangles—will be our bridge between parallelograms and triangles!

---

## The Story of Two Neighbouring Plots

In Leo's flower bed, the question was *"How long is the border?"* Today, Sophia and Liam are comparing two neighbouring community orchard plots situated between the same two **parallel paved paths**, and the question is *"How much land do we have?"*

- **Sophia's plot** is a neat **rectangle**: $20\text{ m}$ along the south path, and $10\text{ m}$ straight across to the north path.
- **Liam's plot** is a **tilted parallelogram**: also $20\text{ m}$ along the south path, stretching between the very same two parallel paths. Because its side fences slant sideways, each slanted edge measures $14\text{ m}$.

Liam grinned proudly: "My plot must be larger! My side fence is $14\text{ m}$ long, while Sophia's is only $10\text{ m}$."

Dr. Bennett, the landscape architect, smiled. She sketched Liam's plot on cardboard, snipped a **right-angled triangle** off the left end, and slid it smoothly over to the right end. Instantly, Liam's tilted parallelogram transformed into a **$20\text{ m} \times 10\text{ m}$ rectangle**!

```
  Liam's plot (parallelogram)             After shifting the triangle

      ______________                     ______________
     /|            /                    |              |
    / |           /         ---->       |              |
   /  |          /                      |              |
  /___|_________/                       |______________|
   piece                                   rectangle, 20 x 10
```

"Look closely," Dr. Bennett explained. "**A longer slanted edge does not create extra land.** Because both plots sit on the same base ($20\text{ m}$) and lie between the same two parallel paths ($10\text{ m}$ apart), both cover the exact same area: $200\text{ square metres}$!"

In this topic, we will formalize this insight with Euclidean area axioms and prove the area theorems for parallelograms and triangles.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Area** | The amount of two-dimensional surface enclosed inside a closed figure | Area of Sophia's plot is $200\text{ m}^2$ |
| **Square unit** | A unit square measuring $1\text{ unit} \times 1\text{ unit}$ used to measure area | $\text{cm}^2$, $\text{m}^2$ |
| **$\text{ar}(ABCD)$** | Shorthand notation for "area of figure $ABCD$" | $\text{ar}(\triangle ABC) = 12\text{ cm}^2$ |
| **Euclidean area axioms** | Fundamental rules about area accepted as starting truths | Congruent figures have equal areas |
| **Base** | The chosen reference side (often at the bottom) of a triangle or parallelogram | The $20\text{ m}$ edge along the path |
| **Height (altitude)** | The **perpendicular** distance from the base to the opposite side or opposite vertex | The $10\text{ m}$ gap between the two paths |
| **Same base, same parallels** | Two figures sharing a common base whose opposite vertices/sides lie on a single line parallel to that base | Sophia's and Liam's plots |
| **$\parallel\text{gm}$** | Shorthand symbol for "parallelogram" | $\parallel\text{gm } ABCD$ |

---

## Part A: What Is Area?

The **area** of a closed plane figure is the size of the **planar region** enclosed inside its boundary.

To measure area, we tile the inside of a shape with unit squares ($1\text{ unit} \times 1\text{ unit}$) and count how many fit:

```
  +---+---+---+---+
  |   |   |   |   |
  +---+---+---+---+
  |   |   |   |   |
  +---+---+---+---+
  |   |   |   |   |
  +---+---+---+---+
```

This rectangle is $4$ units long and $3$ units wide. It holds **$12$** unit squares, so its area is **$12\text{ square units}$**.

Always watch your units:
- If lengths are in **$\text{cm}$**, area is in **$\text{cm}^2$** (square centimetres).
- If lengths are in **$\text{m}$**, area is in **$\text{m}^2$** (square metres).

---

## Part B: Euclidean Area Axioms

To reason rigorously about area, we adopt three foundational rules without proof—our **Euclidean area axioms** (recall from [Euclid's Geometry, Topic 1](../euclids-geometry/euclids-geometry.md) that axioms are statements accepted as true without proof).

### Area Axiom 1: Congruent Figures Have Equal Areas

If two figures are **congruent** (meaning one covers the other completely), they enclose the **exact same area**. (See [Congruence of Triangles, Topic 1](../congruence-of-triangles/congruence-of-triangles.md).)

If $\triangle ABC \cong \triangle PQR$, then **$\text{ar}(\triangle ABC) = \text{ar}(\triangle PQR)$**.

**Warning: the converse is FALSE!** Two figures with equal areas do *not* have to be congruent.

**Example:**
- A rectangle of $8\text{ cm} \times 2\text{ cm}$: area $= 16\text{ cm}^2$
- A square of $4\text{ cm} \times 4\text{ cm}$: area $= 16\text{ cm}^2$

Their areas are equal, yet one is long and narrow while the other is square—they cannot coincide. **They are not congruent.** (We saw this exact counterexample under Euclid's Axiom 4.)

### Area Axiom 2: Area Addition Property (Additivity)

If a region is split into **non-overlapping pieces** (pieces that meet only along edges or points), then:

$$\text{Area of the whole region} = \text{sum of the areas of all pieces}$$

**Example:** An L-shaped studio floor plan:

```
  +-----------+
  |           |
  |   6 x 4   |
  |           |
  +-----+-----+
  |3 x 2|
  +-----+
```

- Upper section: $6 \times 4 = 24\text{ m}^2$
- Lower section: $3 \times 2 = 6\text{ m}^2$
- Total floor area $= 24 + 6 = \mathbf{30\text{ m}^2}$

### Area Axiom 3: Area of a Rectangle $=$ Length $\times$ Breadth

We take the area of a rectangle as $l \times b$ (matching our square-counting grid in Part A). For a square of side $a$, area $= a \times a = a^2$.

Every other area formula in this topic (parallelograms and triangles) is derived from these three axioms!

---

## Part C: Figures on the Same Base and Between the Same Parallels

This phrase appears in every theorem below, so let us make sure its meaning is crystal clear.

Two figures are said to be **on the same base and between the same parallels** if:
1. They share a **common side**, which serves as the **base**.
2. The **vertices (or sides) opposite that base** in both figures all lie on **one straight line parallel to the base**.

### Example 1: Two Parallelograms

```
D     F   C     E
+-----+---+-----+      <- line m (D, F, C, E all lie on this line)
|    /    |    /
|   /     |   /
|  /      |  /
| /       | /
|/        |/
+---------+            <- line l
A         B
```

- $\parallel\text{gm } ABCD$ and $\parallel\text{gm } ABEF$ share the same base **$AB$**.
- All top vertices $D, C, F, E$ lie on **line $m$**, where $m \parallel l$.
- Therefore, both parallelograms lie **on the same base $AB$ and between the same parallels $l$ and $m$**.

(Sophia's and Liam's orchard plots looked just like this: $ABCD$ was Sophia's rectangle, and $ABEF$ was Liam's tilted parallelogram.)

### Example 2: A Parallelogram and a Triangle

```
D      P        C
+------*--------+     <- line m
|     / \       |
|    /   \      |
|   /     \     |
|  /       \    |
| /         \   |
|/           \  |
+---------------+     <- line l
A               B
```

- $\parallel\text{gm } ABCD$ and $\triangle PAB$ share the same base **$AB$**.
- Vertex $P$ lies on line $DC$, which is parallel to $AB$.
- Therefore, they also lie **on the same base and between the same parallels**.

*(Note: in a true geometric drawing, $PB$ is a straight line segment from $P$ directly to $B$.)*

### Non-Examples (Not on the Same Base and Between the Same Parallels)

**(a) Different bases:** $\parallel\text{gm } ABCD$ and $\parallel\text{gm } PQRS$ lie between the same two parallel lines, yet one sits on base $AB$ and the other on $PQ$. No common base!

**(b) Opposite vertex not on the parallel line:** $\triangle PAB$ and $\parallel\text{gm } ABCD$ share base $AB$, but $P$ floats above line $DC$ rather than lying on it.

**(c) Two triangles whose top vertices sit at different heights:** $\triangle ABC$ and $\triangle ABD$ share base $AB$, but the line joining $C$ and $D$ is *not* parallel to $AB$.

> **Key insight:** Being on the same base and between the same parallels simply means **"identical base and identical perpendicular height"**—because the perpendicular distance between two parallel lines is constant everywhere.

---

## Part D: Area of Parallelograms

### Theorem: Parallelograms on the Same Base and Between the Same Parallels Are Equal in Area

This proves Dr. Bennett's orchard demonstration rigorously.

**Given:** $\parallel\text{gm } ABCD$ and $\parallel\text{gm } ABEF$ lie on the same base $AB$ and between the same parallels $AB$ and $DE$ (line $m$). *(Refer to the figure in Part C, Example 1.)*

**To prove:** $\text{ar}(ABCD) = \text{ar}(ABEF)$

**Proof:**

First compare the two side triangles $\triangle ADF$ and $\triangle BCE$:

| Statement | Reason |
|---|---|
| $AD = BC$ | Opposite sides of $\parallel\text{gm } ABCD$ (Topic 1) |
| $\angle ADF = \angle BCE$ | Corresponding angles ($AD \parallel BC$, transversal $m$) |
| $\angle AFD = \angle BEC$ | Corresponding angles ($AF \parallel BE$, transversal $m$) |
| $\triangle ADF \cong \triangle BCE$ | **AAS** criterion |
| $\text{ar}(\triangle ADF) = \text{ar}(\triangle BCE)$ | Congruent figures have equal areas (Area Axiom 1) |

(Corresponding angles were covered in [Lines and Angles, Topic 3](../lines-and-angles/lines-and-angles-part3.md), and AAS in [Congruence of Triangles, Topic 2](../congruence-of-triangles/congruence-of-triangles-part2.md).)

Now decompose the entire trapezium $ABED$ in two different ways:

| Statement | Reason |
|---|---|
| $\text{ar}(ABED) = \text{ar}(ABCD) + \text{ar}(\triangle BCE)$ | Area addition property (Area Axiom 2) |
| $\text{ar}(ABED) = \text{ar}(ABEF) + \text{ar}(\triangle ADF)$ | Area addition property (Area Axiom 2) |
| $\text{ar}(ABCD) + \text{ar}(\triangle BCE) = \text{ar}(ABEF) + \text{ar}(\triangle ADF)$ | Both equal $\text{ar}(ABED)$ |
| $\text{ar}(ABCD) = \text{ar}(ABEF)$ | Subtracting equal areas $\text{ar}(\triangle BCE) = \text{ar}(\triangle ADF)$ from both sides |

**Hence proved.**

**Numeric check:** Suppose $AB = 10$, height $= 4$, and $DF = CE = 6$.
- $\text{ar}(ABCD) = 10 \times 4 = 40$
- $\text{ar}(\triangle BCE) = \frac{1}{2} \times 6 \times 4 = 12$
- $\text{ar}(ABED) = \text{trapezium area} = \frac{1}{2} \times (10 + 16) \times 4 = 52$
- $40 + 12 = 52$ ✅, and $\text{ar}(ABEF) + 12 = 52 \implies \text{ar}(ABEF) = 40$ ✅

Notice that this trapezium-subtraction proof still works even if $F$ lies past $C$ on line $m$—so it covers every possible layout!

### Area of a Parallelogram $=$ Base $\times$ Height

The theorem immediately yields the area formula.

For any parallelogram $ABEF$, construct a **rectangle** $ABCD$ on the same base $AB$ between the same two parallel lines.

- By the theorem above: $\text{ar}(ABEF) = \text{ar}(ABCD)$
- Area of rectangle (Area Axiom 3): $\text{ar}(ABCD) = AB \times AD$
- Here $AD$ is the **perpendicular distance** between the two parallel lines—the **height**!

Therefore:

$$\text{Area of a parallelogram} = \text{base} \times \text{height}$$

**Caution:** The height is always the **perpendicular** distance, never the slanted edge. Liam's slanted edge was $14\text{ m}$, yet the height remained $10\text{ m}$. (Remember from [Congruence of Triangles, Topic 4](../congruence-of-triangles/congruence-of-triangles-part4.md) that the perpendicular is the shortest distance between a point and a line.)

### Any Side Can Be the Base

You may choose *any* side of a parallelogram as the base, provided you pair it with the **height perpendicular to that chosen side**.

```
        D _______________ C
         /|              /
        / |h1           /
       /  |            /
      /___|___________/
     A                 B
```

- Take base $AB \implies$ use height $h_1$ (perpendicular to $AB$).
- Take base $AD \implies$ use height $h_2$ (perpendicular to $AD$).
- **$\text{Area} = AB \times h_1 = AD \times h_2$**

**Example:** A parallelogram has sides $AB = 12\text{ cm}$ and $AD = 8\text{ cm}$. The altitude to $AB$ is $6\text{ cm}$. Find the altitude to $AD$.

- $\text{Area} = AB \times h_1 = 12 \times 6 = \mathbf{72\text{ cm}^2}$
- $\text{Area} = AD \times h_2 \implies 8 \times h_2 = 72 \implies \mathbf{h_2 = 9\text{ cm}}$

Check: a perpendicular altitude can never exceed the adjacent slanted side: $h_1 = 6 \le AD = 8$ ✅, and $h_2 = 9 \le AB = 12$ ✅.

---

## Part E: Area of Triangles

### Triangle and Parallelogram on the Same Base and Between the Same Parallels

> If a triangle and a parallelogram lie **on the same base and between the same parallels**, then **the area of the triangle equals half the area of the parallelogram**.

**Given:** $\parallel\text{gm } ABCD$ and $\triangle PAB$ on the same base $AB$ and between the same parallels $AB$ and $DC$. *(Refer to Part C, Example 2.)*

**To prove:** $\text{ar}(\triangle PAB) = \frac{1}{2}\,\text{ar}(ABCD)$

**Construction:** Through $B$, draw a line parallel to $AP$, intersecting line $DC$ at $Q$.

```
D      P              Q   C
+------*--------------*---+      <- line m
|     /              /
|    /              /
|   /              /
|  /              /
| /              /
|/              /
+--------------+                 <- line l
A              B
```

*(Depending on the triangle's shape, $Q$ may fall either inside segment $DC$ or beyond $C$; the proof works identically in both cases.)*

**Proof:**

| Statement | Reason |
|---|---|
| $ABQP$ is a parallelogram | $AB \parallel PQ$ (line $m \parallel l$) and $AP \parallel BQ$ (by construction) |
| $\text{ar}(\triangle PAB) = \frac{1}{2}\,\text{ar}(ABQP)$ | Diagonal $PB$ divides $\parallel\text{gm } ABQP$ into two congruent triangles (Topic 1), and congruent triangles have equal areas (Area Axiom 1) |
| $\text{ar}(ABQP) = \text{ar}(ABCD)$ | Parallelograms on the same base $AB$ and between the same parallels have equal areas (Part D) |
| $\text{ar}(\triangle PAB) = \frac{1}{2}\,\text{ar}(ABCD)$ | Combining the two lines above |

**Hence proved.**

### Area of a Triangle $= \frac{1}{2} \times \text{Base} \times \text{Height}$

From the result just proved:
$$\text{ar}(\triangle) = \frac{1}{2} \times \text{ar}(\parallel\text{gm}) = \frac{1}{2} \times (\text{base} \times \text{height})$$

$$\text{Area of a triangle} = \frac{1}{2} \times \text{base} \times \text{height}$$

Here **height** means the **perpendicular** distance from the opposite vertex to the base (or to the line containing the base extended).

### Theorem: Triangles on the Same Base and Between the Same Parallels Are Equal in Area

If $\triangle ABC$ and $\triangle ABD$ share base $AB$, and vertices $C$ and $D$ lie on a line parallel to $AB$:
- Both triangles share base $AB$.
- Both have the exact same perpendicular height $h$ (the gap between the two parallel lines).
- Therefore, $\text{ar}(\triangle ABC) = \frac{1}{2} \times AB \times h = \text{ar}(\triangle ABD)$.

```
     C            D
     *------------*        <- line m (parallel to AB)
    / \          / \
   /   \        /   \
  /     \      /     \
 /       \    /       \
*---------\--/---------*   <- line l
A          \/          B
```

*(Rough sketch: both triangles sit on the full base $AB$, while their top vertices $C$ and $D$ lie on parallel line $m$.)*

### Converse Theorem: Equal Area and Same Base $\implies$ Between the Same Parallels

> Two triangles having the **same base** (or equal bases) and **equal areas**, lying on the **same side of the base**, lie **between the same parallels**.

**Why?**
- $\text{Area} = \frac{1}{2} \times \text{base} \times \text{height}$.
- Since the bases are equal and the areas are equal, their **heights must also be equal**.
- Both opposite vertices sit at the **exact same perpendicular height** above the same side of $AB$.
- A line connecting two points at equal perpendicular distance on the same side of $AB$ is **parallel** to $AB$.

Thus, if $\text{ar}(\triangle ABC) = \text{ar}(\triangle ABD)$ and $C, D$ lie on the same side of $AB$, then **$CD \parallel AB$**.

### A Median Divides a Triangle into Two Triangles of Equal Area

Recall from [Triangles, Topic 2](../triangles/triangles-part2.md) that a **median** connects a vertex to the midpoint of the opposite side.

**Given:** In $\triangle ABC$, $AD$ is a median, so $BD = DC$.

**To prove:** $\text{ar}(\triangle ABD) = \text{ar}(\triangle ACD)$

**Proof:** Drop a perpendicular $AL$ from $A$ to $BC$. Then $AL$ is the altitude (height) for both triangles.

| Statement | Reason |
|---|---|
| $\text{ar}(\triangle ABD) = \frac{1}{2} \times BD \times AL$ | Area of a triangle |
| $\text{ar}(\triangle ACD) = \frac{1}{2} \times DC \times AL$ | Area of a triangle |
| $BD = DC$ | $D$ is the midpoint of $BC$ ($AD$ is a median) |
| $\text{ar}(\triangle ABD) = \text{ar}(\triangle ACD)$ | From the three lines above |

**Hence proved.**

**Numeric check:** Let $BC = 10\text{ cm}$ and $AL = 6\text{ cm}$. Then $\text{ar}(\triangle ABC) = \frac{1}{2} \times 10 \times 6 = 30\text{ cm}^2$. Since $BD = DC = 5\text{ cm}$, each half has area $\frac{1}{2} \times 5 \times 6 = 15\text{ cm}^2$, and $15 + 15 = 30$ ✅.

---

## Part F: Solved Examples

**Example 1:** A parallelogram has base $15\text{ cm}$ and height $8\text{ cm}$. Find its area.

$$\text{Area} = \text{base} \times \text{height} = 15 \times 8 = \mathbf{120\text{ cm}^2}$$

**Example 2:** A parallelogram has area $96\text{ cm}^2$ and base $12\text{ cm}$. Find its height.

$$96 = 12 \times h \implies \mathbf{h = 8\text{ cm}}$$

Check: $12 \times 8 = 96$ ✅

**Example 3:** $ABCD$ is a parallelogram. $AE \perp DC$ and $CF \perp AD$. If $AB = 16\text{ cm}$, $AE = 8\text{ cm}$, and $CF = 10\text{ cm}$, find $AD$.

- $DC = AB = 16\text{ cm}$ (opposite sides of a parallelogram)
- Using base $DC$ and height $AE$: $\text{area} = 16 \times 8 = \mathbf{128\text{ cm}^2}$
- Using base $AD$ and height $CF$: $\text{area} = AD \times 10$
- $AD \times 10 = 128 \implies \mathbf{AD = 12.8\text{ cm}}$

Check: $AE = 8 \le AD = 12.8$ ✅ and $CF = 10 \le CD = 16$ ✅

**Example 4:** A triangle has base $12\text{ cm}$ and height $7\text{ cm}$. Find its area.

$$\text{Area} = \frac{1}{2} \times 12 \times 7 = \mathbf{42\text{ cm}^2}$$

**Example 5:** $ABCD$ is a parallelogram and $P$ is any point on side $CD$. Show that $\text{ar}(\triangle APB) = \frac{1}{2}\,\text{ar}(ABCD)$.

$\triangle APB$ and $\parallel\text{gm } ABCD$ share the same base $AB$, and $P$ lies on line $DC$, which is parallel to $AB$. Thus they lie **on the same base and between the same parallels**. By Part E:

**$\text{ar}(\triangle APB) = \frac{1}{2}\,\text{ar}(ABCD)$**. **Hence proved.**

Numeric check: let $AB = 10$ and height $= 4$. Then $\text{ar}(ABCD) = 40$, and $\text{ar}(\triangle APB) = \frac{1}{2} \times 10 \times 4 = 20 = \frac{1}{2} \times 40$ ✅. No matter where $P$ slides along $CD$, the height stays $4$, so the area never changes!

**Example 6:** Show that the diagonals of a parallelogram divide it into **four triangles of equal area**.

**Given:** Diagonals $AC$ and $BD$ of $\parallel\text{gm } ABCD$ intersect at $O$.

**To prove:** $\text{ar}(\triangle AOB) = \text{ar}(\triangle BOC) = \text{ar}(\triangle COD) = \text{ar}(\triangle DOA)$

```
   D _____________ C
    \ \         / /
     \  \     /  /
      \   \ /   /
       \  / O \ /
        \/     \
   A _____________ B
```

*(Rough sketch: $A\text{–}C$ and $B\text{–}D$ are diagonals meeting at $O$.)*

**Proof:**

| Statement | Reason |
|---|---|
| $AO = OC$ and $BO = OD$ | Diagonals of a parallelogram bisect each other (Topic 1) |
| In $\triangle ABD$, $AO$ is a median | $O$ is the midpoint of $BD$ |
| $\text{ar}(\triangle AOB) = \text{ar}(\triangle AOD)$ | A median divides a triangle into two equal areas |
| In $\triangle ABC$, $BO$ is a median | $O$ is the midpoint of $AC$ |
| $\text{ar}(\triangle AOB) = \text{ar}(\triangle BOC)$ | A median divides a triangle into two equal areas |
| In $\triangle BCD$, $CO$ is a median | $O$ is the midpoint of $BD$ |
| $\text{ar}(\triangle BOC) = \text{ar}(\triangle COD)$ | A median divides a triangle into two equal areas |
| $\text{ar}(\triangle AOB) = \text{ar}(\triangle BOC) = \text{ar}(\triangle COD) = \text{ar}(\triangle DOA)$ | Combining all equalities above |

**Hence proved.** Each of the four triangles has area $\frac{1}{4}\,\text{ar}(ABCD)$.

**Example 7:** In $\triangle ABC$, $AD$ is a median and $E$ is the midpoint of $AD$. Show that $\text{ar}(\triangle BED) = \frac{1}{4}\,\text{ar}(\triangle ABC)$.

| Statement | Reason |
|---|---|
| $\text{ar}(\triangle ABD) = \frac{1}{2}\,\text{ar}(\triangle ABC)$ | $AD$ is a median, splitting the area equally |
| In $\triangle ABD$, $BE$ is a median | $E$ is the midpoint of $AD$ |
| $\text{ar}(\triangle BED) = \frac{1}{2}\,\text{ar}(\triangle ABD)$ | Median divides area equally |
| $\text{ar}(\triangle BED) = \frac{1}{2} \times \frac{1}{2}\,\text{ar}(\triangle ABC) = \frac{1}{4}\,\text{ar}(\triangle ABC)$ | Combining both lines |

**Hence proved.**

Check: if $\text{ar}(\triangle ABC) = 40\text{ cm}^2$, then $\text{ar}(\triangle ABD) = 20\text{ cm}^2$, and $\text{ar}(\triangle BED) = 10\text{ cm}^2 = \frac{1}{4} \times 40$ ✅

**Example 8:** $\triangle ABC$ and $\triangle DBC$ lie on the same base $BC$, on the same side of $BC$, and have equal areas. Show that $AD \parallel BC$.

Same base $BC$, same side of the base, and equal areas. By the converse theorem in Part E, both triangles lie **between the same parallels**—so the line joining $A$ and $D$ is parallel to $BC$.

**$AD \parallel BC$**. **Hence proved.**

**Example 9:** One triangle has base $6\text{ cm}$ and height $4\text{ cm}$. Another has base $8\text{ cm}$ and height $3\text{ cm}$. Having equal areas, are they necessarily congruent?

- First triangle: $\frac{1}{2} \times 6 \times 4 = 12\text{ cm}^2$
- Second triangle: $\frac{1}{2} \times 8 \times 3 = 12\text{ cm}^2$

Their areas are equal, yet that alone does not make them congruent. Take both to be right triangles: the first has legs $6\text{ cm}$ and $4\text{ cm}$, and the second has legs $8\text{ cm}$ and $3\text{ cm}$. The second triangle has a $3\text{ cm}$ side, whereas the shortest side of the first is $4\text{ cm}$ (since its hypotenuse is longer than $6\text{ cm}$). Therefore, they are **not congruent**—confirming again that the converse of Area Axiom 1 is false.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Using the slanted side as the height.**
   In Liam's orchard plot, the slanted fence was $14\text{ m}$, while the perpendicular height was $10\text{ m}$. The area is **$20 \times 10 = 200\text{ m}^2$**, not $20 \times 14 = 280\text{ m}^2$. Height is always the **perpendicular** distance.

2. **Mistake 2: Pairing a base with the wrong altitude.**
   In Example 3, base $DC$ pairs with height $AE$, and base $AD$ pairs with height $CF$. Multiplying $AB \times CF$ is wrong because $CF$ is perpendicular to $AD$, not $AB$.

3. **Mistake 3: Thinking parallelogram area equals the product of two adjacent sides.**
   A parallelogram with sides $12\text{ cm}$ and $8\text{ cm}$ does *not* have area $96\text{ cm}^2$ unless it is a rectangle. Always use $\text{base} \times \text{height}$.

4. **Mistake 4: Assuming equal area implies congruence.**
   An $8 \times 2$ rectangle and a $4 \times 4$ square both have area $16\text{ cm}^2$, yet they are not congruent. Congruent $\implies$ equal area, but equal area $\not\implies$ congruent.

5. **Mistake 5: Forgetting the $\frac{1}{2}$ factor for a triangle.**
   $\text{Area of a triangle} = \mathbf{\frac{1}{2}} \times \text{base} \times \text{height}$. Between the same parallels on the same base, a triangle has **half** the area of the parallelogram, not the full area.

6. **Mistake 6: Applying the theorem without checking "between the same parallels."**
   Sharing a base is not enough! Both opposite vertices (or the opposite side) must lie on a line **parallel** to the base—otherwise their heights differ, and so do their areas.

7. **Mistake 7: Writing length units instead of square units for area.**
   If lengths are in $\text{cm}$, area must be written in **$\text{cm}^2$**, never just $\text{cm}$.

8. **Mistake 8: Confusing a median with an altitude.**
   A median connects a vertex to the midpoint of the opposite side and bisects the triangle's area. An altitude drops at $90^\circ$ to the opposite side. Most medians are not altitudes!

---

## Quick Recap

- **Area** measures the flat region enclosed by a figure, expressed in square units ($\text{cm}^2, \text{m}^2$).
- **Euclidean area axioms:**
  1. Congruent figures have equal areas *(the converse is false)*.
  2. The area of a whole figure equals the sum of the areas of its non-overlapping parts.
  3. Area of a rectangle $= l \times b$.
- **Same base and same parallels** means sharing a base with opposite vertices/sides on a line parallel to the base—i.e., **equal base and equal height**.
- **Parallelograms** on the same base and between the same parallels have **equal areas**.
- **Area of a parallelogram $= \text{base} \times \text{height}$.** Any side may act as the base if paired with its own perpendicular height.
- A **triangle** on the same base and between the same parallels as a parallelogram has **half its area**.
- **Area of a triangle $= \frac{1}{2} \times \text{base} \times \text{height}$.**
- **Triangles** on the same base and between the same parallels have **equal areas**; conversely, equal-area triangles on the same base (and same side) lie between the same parallels.
- A **median** splits a triangle into two triangles of equal area.
- The **diagonals of a parallelogram** divide it into four triangles of equal area.

---

## Practice Questions

1. Find the area of a parallelogram whose base is $14\text{ cm}$ and height is $9\text{ cm}$.

2. The adjacent sides of a parallelogram are $25\text{ cm}$ and $15\text{ cm}$, and its area is $150\text{ cm}^2$. Find the heights corresponding to both sides.

3. $ABCD$ is a parallelogram. $AE \perp DC$ and $CF \perp AD$. If $AB = 20\text{ cm}$, $AE = 9\text{ cm}$, and $CF = 12\text{ cm}$, find $AD$.

4. A triangle and a parallelogram lie on the same base of $10\text{ cm}$ and between the same parallels. The area of the parallelogram is $60\text{ cm}^2$. Find the area of the triangle and the distance between the parallels.

5. State whether each pair of figures lies on the same base and between the same parallels:
   (a) Parallelogram $ABCD$ and $\triangle PAB$, where $P$ lies on $DC$.
   (b) $\triangle ABC$ and $\triangle ABD$, where $C$ and $D$ lie on a line parallel to $AB$.
   (c) $\triangle ABC$ and $\triangle DEF$, where $BC$ and $EF$ are different segments on the same line.
   (d) Parallelogram $ABCD$ and $\triangle QAB$, where $Q$ lies above the line $DC$.

6. Prove that a median of a triangle divides it into two triangles of equal area.

7. In $\triangle ABC$, $AD$ is a median and $E$ is the midpoint of $AD$. Prove that $\text{ar}(\triangle BED) = \frac{1}{4}\,\text{ar}(\triangle ABC)$.

8. Show that the diagonals of a parallelogram divide it into four triangles of equal area.

9. $\triangle ABC$ and $\triangle DBC$ lie on the same base $BC$, on the same side of $BC$, and have equal areas. Prove that $AD \parallel BC$.

10. State whether each statement is true or false. Give a reason.
    (a) Two figures with equal areas are always congruent.
    (b) A triangle and a parallelogram on the same base and between the same parallels have equal areas.
    (c) The area of a parallelogram is the product of its two adjacent sides.
    (d) Congruent figures have equal areas.

### Answers

1. $\text{Area} = 14 \times 9 = \mathbf{126\text{ cm}^2}$

2. - Height to the $25\text{ cm}$ side: $150 \div 25 = \mathbf{6\text{ cm}}$
   - Height to the $15\text{ cm}$ side: $150 \div 15 = \mathbf{10\text{ cm}}$
   - Check: $6 \le 15$ ✅ and $10 \le 25$ ✅ (an altitude never exceeds its adjacent slanted side)

3. - $DC = AB = 20\text{ cm}$. $\text{Area} = DC \times AE = 20 \times 9 = 180\text{ cm}^2$.
   - Also $\text{Area} = AD \times CF \implies AD \times 12 = 180 \implies \mathbf{AD = 15\text{ cm}}$.
   - Check: $AE = 9 \le AD = 15$ ✅, $CF = 12 \le CD = 20$ ✅

4. - Area of the triangle $= \frac{1}{2} \times 60 = \mathbf{30\text{ cm}^2}$
   - Area of $\parallel\text{gm} = \text{base} \times \text{height} \implies 60 = 10 \times h \implies \mathbf{h = 6\text{ cm}}$ (distance between the parallels)
   - Check: $\frac{1}{2} \times 10 \times 6 = 30$ ✅

5. (a) **Yes.** Base $AB$ is common, and $P$ lies on line $DC$, which is parallel to $AB$.
   (b) **Yes.** Base $AB$ is common, and $C, D$ lie on a line parallel to $AB$.
   (c) **No.** They do not share a common base ($BC$ and $EF$ are distinct segments).
   (d) **No.** $Q$ does not lie on line $DC$, so its height differs.

6. See the proof in Part E. In brief:
   | Statement | Reason |
   |---|---|
   | $BD = DC$ | $AD$ is a median |
   | $AL$ is the altitude of both triangles | Perpendicular dropped from $A$ to $BC$ |
   | $\text{ar}(\triangle ABD) = \frac{1}{2} \times BD \times AL = \frac{1}{2} \times DC \times AL = \text{ar}(\triangle ACD)$ | Area of a triangle, and $BD = DC$ |

7. | Statement | Reason |
   |---|---|
   | $\text{ar}(\triangle ABD) = \frac{1}{2}\,\text{ar}(\triangle ABC)$ | $AD$ is a median |
   | $BE$ is a median of $\triangle ABD$ | $E$ is the midpoint of $AD$ |
   | $\text{ar}(\triangle BED) = \frac{1}{2}\,\text{ar}(\triangle ABD)$ | Median divides area equally |
   | $\text{ar}(\triangle BED) = \frac{1}{4}\,\text{ar}(\triangle ABC)$ | Combining the lines above |

8. See Part F, Example 6. The diagonals bisect each other at $O$, so $AO$, $BO$, and $CO$ serve as medians in $\triangle ABD$, $\triangle ABC$, and $\triangle BCD$ respectively. Because every median splits a triangle into equal areas, $\text{ar}(\triangle AOB) = \text{ar}(\triangle AOD)$, $\text{ar}(\triangle AOB) = \text{ar}(\triangle BOC)$, and $\text{ar}(\triangle BOC) = \text{ar}(\triangle COD)$. Hence all four triangles have equal area.

9. | Statement | Reason |
   |---|---|
   | $\text{ar}(\triangle ABC) = \frac{1}{2} \times BC \times h_1$, $\text{ar}(\triangle DBC) = \frac{1}{2} \times BC \times h_2$ | Area of a triangle ($h_1, h_2$ are perpendicular distances from $A$ and $D$ to $BC$) |
   | $\frac{1}{2} \times BC \times h_1 = \frac{1}{2} \times BC \times h_2 \implies h_1 = h_2$ | Given equal areas |
   | $A$ and $D$ are equidistant from $BC$ on the same side of $BC$ | $h_1 = h_2$ and same side |
   | $AD \parallel BC$ | Two points equidistant from a line on the same side define a line parallel to it (converse theorem) |

10. (a) **False** ❌. An $8 \times 2$ rectangle and a $4 \times 4$ square both have area $16\text{ cm}^2$, yet are not congruent.
    (b) **False** ❌. The triangle's area is **half** that of the parallelogram.
    (c) **False** ❌. $\text{Area} = \text{base} \times \mathbf{\text{height}}$. Multiplying two adjacent sides works only for a rectangle.
    (d) **True** ✅. This is Area Axiom 1.

---

Great job! You can now compute areas of parallelograms and triangles with confidence—and remember Dr. Bennett's golden rule: **a longer slanted fence never adds extra land; only the base and perpendicular height determine the area.**

---

## Chapter Wrap-up: Quadrilaterals

| Topic | What We Learned | Key Takeaway |
|---|---|---|
| **1. Quadrilaterals and Parallelogram Theorems** | Types of quadrilaterals (trapezium, parallelogram, rectangle, rhombus, square, kite), parallelogram theorems and their converses | In a $\parallel\text{gm}$, opposite sides and opposite angles are equal, diagonals bisect each other, and a diagonal forms two congruent triangles |
| **2. The Mid-point Theorem** | Mid-point Theorem, its converse, and applications to triangles, quadrilaterals, and trapeziums | The segment joining the midpoints of two sides is parallel to and half the length of the third side |
| **3. Areas of Parallelograms and Triangles** | Euclidean area axioms, same base and same parallels, parallelogram and triangle areas, medians and diagonals | $\parallel\text{gm} = \text{base} \times \text{height}$, $\triangle = \frac{1}{2} \times \text{base} \times \text{height}$, and same base $+$ same parallels $\implies$ same height |
