# Chapter: Quadrilaterals

> **Class:** 9 | **Subject:** Mathematics
> **This is a brand-new chapter.** Three ideas from earlier chapters will be our constant companions here: the angle sum of a triangle ([Triangles, Topic 2](../triangles/triangles-part2.md)), angles formed by parallel lines ([Lines and Angles, Topic 3](../lines-and-angles/lines-and-angles-part3.md)), and the congruence criteria with CPCTC ([Congruence, Topic 1](../congruence-of-triangles/congruence-of-triangles.md) and [Topic 2](../congruence-of-triangles/congruence-of-triangles-part2.md)).
> **Topics covered in this file:**
> 1. Quadrilaterals: Types, and Theorems on Parallelograms and their Converses

---

# Topic 1: Quadrilaterals, Their Types, and Theorems on Parallelograms

In the last two chapters, we spent plenty of time inside triangles: summing their angles to $180^\circ$, proving them congruent with SAS, ASA, and SSS, and extracting equal parts through CPCTC. Now we step up from **three corners to four corners**. Best of all, to unlock the secrets of four-sided shapes, we will simply **slice them into two triangles** and put all those familiar tools right back to work.

---

## Weekend Games and Everyday Shapes

Over the holiday weekend, Maya and her cousin Leo were playing a board game in the sunroom.

Leo tapped the wooden game board. "This board is a **square**, right? Four equal sides, and all four corners are $90^\circ$."

Maya pointed at the tall window beside them. "And that window frame? Its corners are $90^\circ$ too, but the vertical sides are longer than the top and bottom. That makes it a **rectangle**."

Out on the lawn lay Leo's **kite**, with two shorter equal edges at the top and two longer equal edges meeting at the tail. "This is neither a square nor a rectangle," Leo said. "What is its geometry name?"

Just then, Dr. Bennett walked past holding a slightly **warped wooden picture frame** from the workshop. Its opposite edges were still equal and parallel, yet its corners had leaned away from $90^\circ$. "And this," he laughed, "has become a **parallelogram**!"

Game board, window, kite, tilted frame—every one of them has **four sides**, yet each belongs to its own category. In this topic, we will classify all four-sided figures and **prove** the remarkable properties of parallelograms.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Quadrilateral** | A closed four-sided plane figure (*quad* $=$ four, *lateral* $=$ side) | Game board, window, kite |
| **Diagonal** | A line segment joining two opposite (non-adjacent) vertices | $AC$ and $BD$ in $ABCD$ |
| **Adjacent sides** | Two sides that meet at a common vertex | $AB$ and $BC$ |
| **Opposite sides** | Two sides across from each other that do not meet | $AB$ and $DC$ |
| **Adjacent (consecutive) angles** | Two angles that share a side | $\angle A$ and $\angle B$ |
| **Opposite angles** | Two angles directly across from each other | $\angle A$ and $\angle C$ |
| **Parallelogram** | A quadrilateral with both pairs of opposite sides parallel | A tilted wooden frame |
| **Converse** | Reversing a theorem: turning "if $P$, then $Q$" into "if $Q$, then $P$" | Converses in Part C (for sides, angles, and diagonals) |

---

## Part A: What Is a Quadrilateral?

Take four points $A, B, C, D$ in a plane such that **no three of them lie on a single straight line** (no three are collinear). Join them **in order**: $A$ to $B$, $B$ to $C$, $C$ to $D$, and $D$ back to $A$. The closed shape formed is **quadrilateral $ABCD$**.

```
        D _____________ C
         /             \
        /               \
       /                 \
      /___________________\
     A                     B
```

The parts of quadrilateral $ABCD$:

| Part | In $ABCD$ |
|---|---|
| $4$ vertices (corners) | $A, B, C, D$ |
| $4$ sides | $AB, BC, CD, DA$ |
| $4$ angles | $\angle A, \angle B, \angle C, \angle D$ |
| $2$ diagonals | $AC, BD$ |
| Pairs of opposite sides | $AB$ and $DC$; $AD$ and $BC$ |
| Pairs of adjacent sides | $AB\text{–}BC$, $BC\text{–}CD$, $CD\text{–}DA$, $DA\text{–}AB$ |
| Pairs of opposite angles | $\angle A$ and $\angle C$; $\angle B$ and $\angle D$ |
| Pairs of adjacent angles | $\angle A\text{–}\angle B$, $\angle B\text{–}\angle C$, $\angle C\text{–}\angle D$, $\angle D\text{–}\angle A$ |

### Names Must Follow Sequential Order

When naming a quadrilateral, trace around its perimeter **in order**—such as $ABCD$, $BCDA$, or $DCBA$ (going backwards around the loop is fine too). Writing **$ABDC$** is incorrect, because jumping from $B$ straight to $D$ crosses a diagonal rather than walking along an edge.

### Angle Sum Property: $360^\circ$

**The sum of the four interior angles of any quadrilateral is $360^\circ$.**

**Why?** Draw diagonal $AC$. It splits the quadrilateral into two triangles: $\triangle ABC$ and $\triangle ACD$.

```
        D _____________ C
         /         ..  \
        /      ..       \
       /   ..            \
      /.__________________\
     A                     B
```

| Statement | Reason |
|---|---|
| $\angle DAC + \angle ACD + \angle D = 180^\circ$ | Angle sum of $\triangle ACD$ ([Triangles, Topic 2](../triangles/triangles-part2.md)) |
| $\angle CAB + \angle B + \angle BCA = 180^\circ$ | Angle sum of $\triangle ABC$ |
| Adding both: $(\angle DAC + \angle CAB) + \angle B + (\angle ACD + \angle BCA) + \angle D = 360^\circ$ | Equals added to equals give equals (Euclid's Axiom 2) |
| $\angle DAC + \angle CAB = \angle A$, and $\angle ACD + \angle BCA = \angle C$ | Diagonal $AC$ splits $\angle A$ and $\angle C$ |
| **$\angle A + \angle B + \angle C + \angle D = 360^\circ$** | Hence proved. |

**Quick check:** Each corner of a square game board is $90^\circ$: $90^\circ \times 4 = 360^\circ$ ✅

---

## Part B: Types of Quadrilaterals

| Type | Definition | Everyday Example |
|---|---|---|
| **Trapezium** *(Trapezoid)* | Exactly **one pair** of opposite sides parallel | Side profile of a bridge support pier, tapered lamp shade |
| **Parallelogram** | **Both pairs** of opposite sides parallel | Tilted wooden frame, scissor-lift linkage |
| **Rectangle** | A parallelogram with **every angle equal to $90^\circ$** | Window pane, smartphone screen |
| **Rhombus** | A parallelogram with **all four sides equal** | Decorative diamond wall tile, car jack linkage |
| **Square** | A parallelogram with all four sides equal **and** every angle $90^\circ$ | Chessboard square, ceramic floor tile |
| **Kite** | Two distinct pairs of equal **adjacent** sides (not a parallelogram) | Flying kite |

```
 Trapezium        Parallelogram       Rectangle
  _______           ________          ________
 /       \         /       /         |        |
/_________\       /_______/          |________|

 Rhombus           Square             Kite
    /\            ______               /\
   /  \          |      |             /  \
   \  /          |      |             \  /
    \/           |______|              \/
                                   (shorter top pair, longer bottom pair)
```

### Family Tree: How They Relate

```
                 Quadrilateral
                /      |      \
         Trapezium  Parallelogram  Kite
                    /         \
             Rectangle       Rhombus
                    \         /
                      Square
```

From this family tree, several important facts follow immediately:

- **Every square is a rectangle** (all angles are $90^\circ$), though not every rectangle is a square (sides need not be equal).
- **Every square is a rhombus** (all four sides are equal), though not every rhombus is a square (angles need not be $90^\circ$).
- **Rectangles, rhombuses, and squares are all parallelograms**, so every property proved for a parallelogram automatically holds for all three!
- **A kite is not a parallelogram**, because its opposite sides are not parallel.

An easy way to remember: a square inherits all the special features of both a rectangle ($90^\circ$ angles) and a rhombus (equal sides).

### Properties Comparison Table

*(We will prove every one of these properties in Parts C and D.)*

| Property | Parallelogram | Rectangle | Rhombus | Square |
|---|---|---|---|---|
| Opposite sides parallel | Yes | Yes | Yes | Yes |
| Opposite sides equal | Yes | Yes | Yes | Yes |
| All four sides equal | No | No | **Yes** | **Yes** |
| Opposite angles equal | Yes | Yes | Yes | Yes |
| Every angle $90^\circ$ | No | **Yes** | No | **Yes** |
| Diagonals bisect each other | Yes | Yes | Yes | Yes |
| Diagonals equal in length | No | **Yes** | No | **Yes** |
| Diagonals perpendicular ($90^\circ$) | No | No | **Yes** | **Yes** |

For a **kite**: two pairs of adjacent sides are equal, and the diagonals intersect at $90^\circ$ (perpendicular). However, its diagonals do **not** bisect each other—only the axis of symmetry bisects the other diagonal.

---

## Part C: Theorems on Parallelograms

Now for the core of the chapter. The definition of a parallelogram states only one thing: **both pairs of opposite sides are parallel.** From that single definition, we will **prove** every other property—equal sides, equal angles, bisecting diagonals—plus their converses.

Three tools will appear in proof after proof:
- **Alternate interior angles are equal** for parallel lines ([Lines and Angles, Topic 3](../lines-and-angles/lines-and-angles-part3.md)).
- **Congruence criteria** (ASA, SAS, SSS) ([Congruence, Topic 2](../congruence-of-triangles/congruence-of-triangles-part2.md)).
- **CPCTC** ([Congruence, Topic 1](../congruence-of-triangles/congruence-of-triangles.md)).

### "Diagonal Splits into Two Congruent Triangles" Theorem: A Diagonal Divides a Parallelogram into Two Congruent Triangles

```
        D _____________ C
         /          . /
        /       .    /
       /    .       /
      /.___________/
     A              B
```

**Given:** $ABCD$ is a parallelogram ($AB \parallel DC$ and $AD \parallel BC$), with diagonal $AC$.
**To prove:** $\triangle ABC \cong \triangle CDA$

| Statement | Reason |
|---|---|
| $\angle BCA = \angle DAC$ | Alternate interior angles ($AD \parallel BC$, transversal $AC$) |
| $\angle BAC = \angle DCA$ | Alternate interior angles ($AB \parallel DC$, transversal $AC$) |
| $AC = CA$ | Common side |
| $\triangle ABC \cong \triangle CDA$ | **ASA** ($AC$ is included between the two angles) |

Hence proved.

Note the exact vertex correspondence: $A \leftrightarrow C$, $B \leftrightarrow D$, $C \leftrightarrow A$.

### "Opposite Sides Are Equal" Theorem: Opposite Sides of a Parallelogram Are Equal

**Given:** Parallelogram $ABCD$.
**To prove:** $AB = DC$ and $AD = BC$.

| Statement | Reason |
|---|---|
| $\triangle ABC \cong \triangle CDA$ | "Diagonal Splits into Two Congruent Triangles" theorem |
| $AB = CD$ | CPCTC ($A \leftrightarrow C, B \leftrightarrow D \implies AB \leftrightarrow CD$) |
| $BC = DA$ | CPCTC ($B \leftrightarrow D, C \leftrightarrow A \implies BC \leftrightarrow DA$) |

Hence proved.

### Converse of "Opposite Sides Are Equal" Theorem: If Both Pairs of Opposite Sides Are Equal, the Quadrilateral Is a Parallelogram

**Given:** In quadrilateral $ABCD$, $AB = CD$ and $AD = CB$.
**To prove:** $ABCD$ is a parallelogram.

Draw diagonal $AC$.

| Statement | Reason |
|---|---|
| $AB = CD$ | Given |
| $BC = DA$ | Given |
| $AC = CA$ | Common side |
| $\triangle ABC \cong \triangle CDA$ | **SSS** |
| $\angle BAC = \angle DCA$ | CPCTC |
| $AB \parallel DC$ | Equal alternate interior angles (transversal $AC$); Converse of Alternate Interior Angles Theorem |
| $\angle BCA = \angle DAC$ | CPCTC |
| $AD \parallel BC$ | Equal alternate interior angles; Converse of Alternate Interior Angles Theorem |
| $ABCD$ is a parallelogram | Both pairs of opposite sides are parallel |

Hence proved.

### "Opposite Angles Are Equal" Theorem: Opposite Angles of a Parallelogram Are Equal

**Given:** Parallelogram $ABCD$.
**To prove:** $\angle A = \angle C$ and $\angle B = \angle D$.

| Statement | Reason |
|---|---|
| $\triangle ABC \cong \triangle CDA$ (using diagonal $AC$) | "Diagonal Splits into Two Congruent Triangles" theorem |
| $\angle B = \angle D$ | CPCTC ($B \leftrightarrow D$) |
| Similarly, using diagonal $BD$: $\triangle ABD \cong \triangle CDB$ | "Diagonal Splits into Two Congruent Triangles" theorem |
| $\angle A = \angle C$ | CPCTC ($A \leftrightarrow C$) |

Hence proved.

### Converse of "Opposite Angles Are Equal" Theorem: If Both Pairs of Opposite Angles Are Equal, the Quadrilateral Is a Parallelogram

**Given:** In quadrilateral $ABCD$, $\angle A = \angle C$ and $\angle B = \angle D$.
**To prove:** $ABCD$ is a parallelogram.

| Statement | Reason |
|---|---|
| $\angle A + \angle B + \angle C + \angle D = 360^\circ$ | Angle sum of a quadrilateral (Part A) |
| $\angle A + \angle B + \angle A + \angle B = 360^\circ$ | Substituting $\angle C = \angle A$ and $\angle D = \angle B$ |
| $2(\angle A + \angle B) = 360^\circ \implies \angle A + \angle B = 180^\circ$ | Dividing both sides by $2$ |
| $AD \parallel BC$ | $\angle A$ and $\angle B$ are interior angles on the same side of transversal $AB$ summing to $180^\circ$; Converse of Co-interior Angles Theorem |
| Similarly, $\angle A + \angle D = 180^\circ \implies AB \parallel DC$ | Transversal $AD$; Converse of Co-interior Angles Theorem |
| $ABCD$ is a parallelogram | Both pairs of opposite sides are parallel |

Hence proved.

This also highlights a super useful fact: **adjacent (consecutive) angles of a parallelogram always add up to $180^\circ$** ($\angle A + \angle B = 180^\circ$), because they are co-interior angles between parallel sides!

### "Diagonals Bisect Each Other" Theorem: The Diagonals of a Parallelogram Bisect Each Other

To "bisect" means to **cut cleanly into two equal halves**. Diagonals $AC$ and $BD$ intersect at $O$.

```
        D _____________ C
         \ .         . /
          \   .   .   /
           \    O    /
          / .      .  \
      A /_____________\ B
```

*(Sketch for illustration: $AC$ and $BD$ cross at $O$.)*

**Given:** Parallelogram $ABCD$ with diagonals $AC$ and $BD$ intersecting at $O$.
**To prove:** $OA = OC$ and $OB = OD$.

| Statement | Reason |
|---|---|
| $AB = CD$ | "Opposite Sides Are Equal" theorem |
| $\angle OAB = \angle OCD$ | Alternate interior angles ($AB \parallel DC$, transversal $AC$) |
| $\angle OBA = \angle ODC$ | Alternate interior angles ($AB \parallel DC$, transversal $BD$) |
| $\triangle AOB \cong \triangle COD$ | **ASA** ($AB$ lies between the two angles) |
| $OA = OC$, $OB = OD$ | CPCTC |

Hence proved.

### Converse of "Diagonals Bisect Each Other" Theorem: If the Diagonals Bisect Each Other, the Quadrilateral Is a Parallelogram

**Given:** In quadrilateral $ABCD$, diagonals $AC$ and $BD$ intersect at $O$ such that $OA = OC$ and $OB = OD$.
**To prove:** $ABCD$ is a parallelogram.

| Statement | Reason |
|---|---|
| $OA = OC$, $OB = OD$ | Given |
| $\angle AOB = \angle COD$ | Vertically opposite angles |
| $\triangle AOB \cong \triangle COD$ | **SAS** |
| $\angle OAB = \angle OCD$ | CPCTC |
| $AB \parallel DC$ | Equal alternate interior angles (transversal $AC$); Converse of Alternate Interior Angles Theorem |
| Similarly, $\triangle AOD \cong \triangle COB$ (SAS) $\implies \angle OAD = \angle OCB \implies AD \parallel BC$ | Same reasoning |
| $ABCD$ is a parallelogram | Both pairs of opposite sides are parallel |

Hence proved.

### "One Pair of Opposite Sides Equal and Parallel" Theorem: If One Pair of Opposite Sides Is Both Equal and Parallel, the Quadrilateral Is a Parallelogram

Here is a huge timesaver: you do not need to test both pairs of opposite sides—**one single pair** suffices, provided those two sides are **both equal and parallel**.

**Given:** In quadrilateral $ABCD$, $AB = CD$ and $AB \parallel CD$.
**To prove:** $ABCD$ is a parallelogram.

Draw diagonal $AC$.

| Statement | Reason |
|---|---|
| $AB = CD$ | Given |
| $\angle BAC = \angle DCA$ | Alternate interior angles ($AB \parallel CD$, transversal $AC$) |
| $AC = CA$ | Common side |
| $\triangle ABC \cong \triangle CDA$ | **SAS** ($\angle BAC$ is included between $AB$ and $AC$) |
| $BC = DA$ | CPCTC |
| Now both pairs of opposite sides are equal: $AB = CD$ and $BC = DA$ | |
| $ABCD$ is a parallelogram | Converse of "Opposite Sides Are Equal" theorem |

Hence proved.

### At a Glance: How to Prove a Quadrilateral Is a Parallelogram

Showing **any one** of these five conditions is enough:

| What You Show | Criterion / Theorem |
|---|---|
| Both pairs of opposite sides are parallel | Definition of parallelogram |
| Both pairs of opposite sides are equal | Converse of "Opposite Sides Are Equal" theorem |
| Both pairs of opposite angles are equal | Converse of "Opposite Angles Are Equal" theorem |
| The diagonals bisect each other | Converse of "Diagonals Bisect Each Other" theorem |
| One pair of opposite sides is **both** equal and parallel | "One Pair of Opposite Sides Equal and Parallel" theorem |

---

## Part D: Results on Special Parallelograms

### Result 1: If One Angle of a Parallelogram Is $90^\circ$, Every Angle Is $90^\circ$ (It Is a Rectangle)

Suppose $\angle A = 90^\circ$ in parallelogram $ABCD$.
- $\angle A + \angle B = 180^\circ$ (adjacent angles of a parallelogram, Part C), so $\angle B = 90^\circ$.
- $\angle C = \angle A = 90^\circ$ and $\angle D = \angle B = 90^\circ$ ("Opposite Angles Are Equal" theorem).

Therefore, to prove a parallelogram is a rectangle, checking just **one $90^\circ$ corner** is enough!

### Result 2: The Diagonals of a Rectangle Are Equal

```
     D ______________ C
      |  .        .  |
      |     .  .     |
      |     .  .     |
      |  .        .  |
     A|______________|B
```

**Given:** Rectangle $ABCD$.
**To prove:** $AC = BD$.

Consider $\triangle ABC$ and $\triangle BAD$.

| Statement | Reason |
|---|---|
| $AB = BA$ | Common side |
| $\angle ABC = \angle BAD = 90^\circ$ | Angles of a rectangle |
| $BC = AD$ | Opposite sides of a parallelogram ("Opposite Sides Are Equal" theorem) |
| $\triangle ABC \cong \triangle BAD$ | **SAS** |
| $AC = BD$ | CPCTC |

Hence proved.

### Result 3: The Diagonals of a Rhombus Are Perpendicular to Each Other

**Given:** Rhombus $ABCD$ with diagonals intersecting at $O$.
**To prove:** $AC \perp BD$.

| Statement | Reason |
|---|---|
| $OA = OC$ | A rhombus is a parallelogram, so its diagonals bisect each other ("Diagonals Bisect Each Other" theorem) |
| $AB = CB$ | All sides of a rhombus are equal |
| $OB = OB$ | Common side |
| $\triangle AOB \cong \triangle COB$ | **SSS** |
| $\angle AOB = \angle COB$ | CPCTC |
| $\angle AOB + \angle COB = 180^\circ$ | Linear pair ($AC$ is a straight line) |
| $2\angle AOB = 180^\circ \implies \angle AOB = 90^\circ$ | |
| $AC \perp BD$ | |

Hence proved.

### Result 4: The Diagonals of a Square Are Both Equal and Perpendicular

Because a square is both a rectangle (diagonals equal by Result 2) and a rhombus (diagonals perpendicular by Result 3)—and also a parallelogram (diagonals bisect each other)—its diagonals are equal and bisect each other at $90^\circ$.

That is the power of the family tree: prove a property for the parent, and every child inherits it automatically.

---

## Part E: Solved Examples

**Example 1: The angles of a quadrilateral are in the ratio $3 : 5 : 7 : 9$. Find all four angles.**

Let the angles be $3x, 5x, 7x, 9x$.
$$3x + 5x + 7x + 9x = 360^\circ \implies 24x = 360^\circ \implies x = 15^\circ$$
Angles: **$45^\circ, 75^\circ, 105^\circ, 135^\circ$**

**Check:** $45 + 75 + 105 + 135 = 360$ ✅

Interesting observation: if these angles are $\angle A, \angle B, \angle C, \angle D$ in order, then $\angle A + \angle D = 45^\circ + 135^\circ = 180^\circ$ and $\angle B + \angle C = 75^\circ + 105^\circ = 180^\circ$, which implies $AB \parallel DC$ (co-interior angles sum to $180^\circ$). Yet $\angle A \neq \angle C$, so it is not a parallelogram—it is a **trapezium**!

**Example 2: In parallelogram $ABCD$, $\angle A = 70^\circ$. Find the remaining angles.**

- $\angle C = \angle A = \mathbf{70^\circ}$ (opposite angles)
- $\angle B = 180^\circ - 70^\circ = \mathbf{110^\circ}$ (adjacent angles)
- $\angle D = \angle B = \mathbf{110^\circ}$

**Check:** $70 + 110 + 70 + 110 = 360$ ✅

**Example 3: Two adjacent angles of a parallelogram are $(2x + 10)^\circ$ and $(3x - 20)^\circ$. Find all four angles.**

Adjacent angles sum to $180^\circ$:
$$(2x + 10) + (3x - 20) = 180 \implies 5x - 10 = 180 \implies x = 38$$
Angles: $2(38) + 10 = \mathbf{86^\circ}$ and $3(38) - 20 = \mathbf{94^\circ}$.
All four angles: $86^\circ, 94^\circ, 86^\circ, 94^\circ$.

**Check:** $86 + 94 = 180$ ✅

**Example 4: Two opposite angles of a parallelogram are $(3x - 2)^\circ$ and $(50 - x)^\circ$. Find all four angles.**

Opposite angles are equal:
$$3x - 2 = 50 - x \implies 4x = 52 \implies x = 13$$
One angle $= 3(13) - 2 = \mathbf{37^\circ}$. Its adjacent angle $= 180^\circ - 37^\circ = \mathbf{143^\circ}$.
All four angles: $37^\circ, 143^\circ, 37^\circ, 143^\circ$.

**Check:** $50 - 13 = 37$ ✅, and $37 + 143 + 37 + 143 = 360$ ✅

**Example 5: The adjacent sides of a parallelogram are in the ratio $3 : 2$ and its perimeter is $60\text{ cm}$. Find the side lengths.**

Let the sides be $3k$ and $2k$. Perimeter $= 2(3k + 2k) = 10k = 60 \implies k = 6$.
Sides: **$18\text{ cm}$ and $12\text{ cm}$** (all four sides: $18, 12, 18, 12\text{ cm}$).

**Check:** $18 + 12 + 18 + 12 = 60$ ✅

**Example 6: The diagonals of parallelogram $ABCD$ intersect at $O$. If $OA = (x + 3)\text{ cm}$ and $OC = (2x - 4)\text{ cm}$, find $x$ and $AC$.**

Since diagonals bisect each other, $OA = OC$:
$$x + 3 = 2x - 4 \implies x = 7$$
$OA = 10\text{ cm}$, so **$AC = 2 \times 10 = 20\text{ cm}$**.

**Example 7: In rectangle $ABCD$, $AC = (2x + 5)\text{ cm}$ and $BD = (3x - 1)\text{ cm}$. Find the length of each diagonal.**

Diagonals of a rectangle are equal:
$$2x + 5 = 3x - 1 \implies x = 6$$
**$AC = BD = 17\text{ cm}$**

**Example 8: The diagonals of a rhombus are $16\text{ cm}$ and $12\text{ cm}$. Find the length of its side.**

The diagonals bisect each other at $90^\circ$, forming four right-angled triangles with legs $8\text{ cm}$ and $6\text{ cm}$.
$$\text{Side}^2 = 8^2 + 6^2 = 64 + 36 = 100 \implies \mathbf{\text{side} = 10\text{ cm}}$$
*(Using the Pythagorean theorem from earlier classes.)*

**Example 9 (Proof): The bisectors of any two adjacent angles of a parallelogram intersect at $90^\circ$.**

```
        D ______________ C
         /             /
        /      P      /
       /    .    .   /
      /.___________./
     A               B
```

**Given:** Parallelogram $ABCD$. The bisectors of $\angle A$ and $\angle B$ meet at $P$.
**To prove:** $\angle APB = 90^\circ$.

| Statement | Reason |
|---|---|
| $\angle A + \angle B = 180^\circ$ | Adjacent angles of a parallelogram |
| $\frac{1}{2}\angle A + \frac{1}{2}\angle B = 90^\circ$ | Halving both sides (Euclid's Axiom 7) |
| $\angle PAB = \frac{1}{2}\angle A$, $\angle PBA = \frac{1}{2}\angle B$ | $AP$ and $BP$ are angle bisectors |
| $\angle PAB + \angle PBA = 90^\circ$ | |
| In $\triangle APB$: $\angle APB = 180^\circ - (\angle PAB + \angle PBA) = 180^\circ - 90^\circ$ | Angle sum of a triangle |
| **$\angle APB = 90^\circ$** | Hence proved. |

**Example 10 (Proof): In parallelogram $ABCD$, points $E$ on $AB$ and $F$ on $CD$ satisfy $AE = CF$. Show that $AECF$ is a parallelogram.**

```
        D ______F_______ C
         /       .      /
        /      .       /
       /     .        /
      /____E_________/
     A               B
```

| Statement | Reason |
|---|---|
| $AB \parallel DC$ | $ABCD$ is a parallelogram |
| $AE \parallel FC$ | $AE$ is part of $AB$ and $FC$ is part of $DC$ |
| $AE = CF$ | Given |
| In $AECF$, one pair of opposite sides ($AE$ and $CF$) is both equal and parallel | |
| **$AECF$ is a parallelogram** | "One Pair of Opposite Sides Equal and Parallel" theorem |

Hence proved.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Writing the vertices out of order.**
   Calling quadrilateral $ABCD$ by the name $ABDC$ is incorrect. Always trace the vertices sequentially around the boundary.

2. **Mistake 2: Assuming every quadrilateral's diagonals bisect each other.**
   That property belongs exclusively to parallelograms (and their subclasses: rectangles, rhombuses, squares). In a general trapezium or kite, the diagonals do not bisect each other.

3. **Mistake 3: Assuming a rectangle's diagonals are perpendicular.**
   A rectangle's diagonals are **equal**, not perpendicular. Perpendicular diagonals belong to a rhombus—and a square has both properties.

4. **Mistake 4: Assuming a rhombus's diagonals are equal.**
   A rhombus's diagonals are perpendicular, not equal (unless it happens to be a square). In Example 8, the diagonals were $16\text{ cm}$ and $12\text{ cm}$.

5. **Mistake 5: Mixing up opposite angles and adjacent angles.**
   In a parallelogram, **opposite angles are equal**, while **adjacent angles sum to $180^\circ$**. If $\angle A = 70^\circ$, then $\angle B = 110^\circ$, not $70^\circ$.

6. **Mistake 6: Checking only "equal" or only "parallel" in the shortcut theorem.**
   For the single-pair test, that one pair of opposite sides must be **both equal and parallel**. One pair merely parallel could be a trapezium!

7. **Mistake 7: Claiming every rectangle is a square.**
   Every square is a rectangle, not the reverse. A rectangular window need not have four equal sides.

8. **Mistake 8: Omitting reasons in proofs.**
   Writing $\angle BAC = \angle DCA$ without explaining why leaves a proof incomplete. Always state *"Alternate interior angles, $AB \parallel DC$, transversal $AC$."*

---

## Quick Recap

- **Quadrilateral:** $4$ sides, $4$ angles, $2$ diagonals; name vertices in sequential order.
- **Angle sum $= 360^\circ$** (one diagonal creates two triangles: $180^\circ + 180^\circ$).
- **Types:** trapezium (one parallel pair), parallelogram (two parallel pairs), rectangle, rhombus, square, kite.
- **Family hierarchy:** a square is both a rectangle and a rhombus; all three are parallelograms; a kite is not a parallelogram.
- **Parallelogram theorems and converses:**
  - A diagonal splits a parallelogram into two congruent triangles.
  - Opposite sides are equal (and converse).
  - Opposite angles are equal (and converse); adjacent angles sum to $180^\circ$.
  - Diagonals bisect each other (and converse).
  - One pair of opposite sides both equal **and** parallel $\implies$ parallelogram.
- **Special parallelograms:** one $90^\circ$ angle $\implies$ rectangle; rectangle diagonals are equal; rhombus diagonals are perpendicular; square diagonals are both equal and perpendicular.
- Core proof toolkit: **alternate angles, congruence criteria, CPCTC.**

---

## Practice Questions

1. The angles of a quadrilateral are in the ratio $2 : 3 : 5 : 8$. Find all the angles.

2. In a parallelogram $ABCD$, $\angle A = (3x + 10)^\circ$ and $\angle B = (2x + 20)^\circ$. Find all the angles of the parallelogram.

3. The perimeter of a parallelogram is $56\text{ cm}$. One side is $4\text{ cm}$ longer than the other. Find the lengths of the sides.

4. The diagonals of a parallelogram $ABCD$ meet at $O$. If $AO = (3y - 1)\text{ cm}$, $OC = (2y + 4)\text{ cm}$, and $BD = 18\text{ cm}$, find $y$, $AC$, and $OB$.

5. The diagonals of a rhombus are $24\text{ cm}$ and $10\text{ cm}$. Find the length of each side.

6. Show that if the diagonals of a parallelogram are equal, then it is a rectangle.

7. Show that the diagonals of a square are equal and bisect each other at right angles.

8. $ABCD$ is a parallelogram. $AP$ and $CQ$ are perpendiculars from $A$ and $C$ on the diagonal $BD$. Show that:
   (a) $\triangle APB \cong \triangle CQD$
   (b) $AP = CQ$

9. State whether each statement is true or false.
   (a) Every rectangle is a square.
   (b) Every square is a rhombus.
   (c) A parallelogram with one angle of $90^\circ$ is a rectangle.
   (d) The diagonals of every parallelogram are equal.
   (e) The diagonals of a kite are perpendicular to each other.

### Answers

1. Let the angles be $2x, 3x, 5x, 8x$. $18x = 360^\circ \implies x = 20^\circ$.
   Angles: **$40^\circ, 60^\circ, 100^\circ, 160^\circ$**
   Check: $40 + 60 + 100 + 160 = 360$ ✅

2. $\angle A$ and $\angle B$ are adjacent, so their sum is $180^\circ$:
   $(3x + 10) + (2x + 20) = 180 \implies 5x + 30 = 180 \implies x = 30$
   $\angle A = \mathbf{100^\circ}$, $\angle B = \mathbf{80^\circ}$, $\angle C = \angle A = \mathbf{100^\circ}$, $\angle D = \angle B = \mathbf{80^\circ}$.
   Check: $100 + 80 + 100 + 80 = 360$ ✅

3. Let the sides be $a$ and $a + 4$. Perimeter $= 2(a + a + 4) = 56 \implies 2a + 4 = 28 \implies a = 12$.
   Sides: **$12\text{ cm}$ and $16\text{ cm}$**
   Check: $2(12 + 16) = 56$ ✅

4. Diagonals bisect each other, so $AO = OC$:
   $3y - 1 = 2y + 4 \implies \mathbf{y = 5}$
   $AO = 14\text{ cm}$, so **$AC = 28\text{ cm}$**
   $OB = \frac{1}{2}BD = \mathbf{9\text{ cm}}$

5. Half-diagonals are $12\text{ cm}$ and $5\text{ cm}$, meeting at $90^\circ$.
   $\text{Side}^2 = 12^2 + 5^2 = 144 + 25 = 169 \implies \mathbf{\text{side} = 13\text{ cm}}$ (by the Pythagorean theorem).

6. **Given:** Parallelogram $ABCD$ with $AC = BD$. **To prove:** $ABCD$ is a rectangle.

   | Statement | Reason |
   |---|---|
   | $AB = DC$ | Opposite sides of a parallelogram ("Opposite Sides Are Equal" theorem) |
   | $BC = CB$ | Common side |
   | $AC = DB$ | Given |
   | $\triangle ABC \cong \triangle DCB$ | **SSS** |
   | $\angle ABC = \angle DCB$ | CPCTC |
   | $\angle ABC + \angle DCB = 180^\circ$ | Adjacent angles of a parallelogram |
   | $2\angle ABC = 180^\circ \implies \angle ABC = 90^\circ$ | |
   | $ABCD$ is a rectangle | A parallelogram with one $90^\circ$ angle (Part D, Result 1) |

   Hence proved.

7. A square is a rectangle, so its diagonals are **equal** (Result 2). A square is also a rhombus, so its diagonals are **perpendicular** (Result 3). And a square is a parallelogram, so its diagonals **bisect** each other ("Diagonals Bisect Each Other" theorem). Combining all three: the diagonals are equal and bisect each other at $90^\circ$. Hence proved.

8. (a)

   | Statement | Reason |
   |---|---|
   | $\angle APB = \angle CQD = 90^\circ$ | $AP \perp BD$, $CQ \perp BD$ (given) |
   | $\angle ABP = \angle CDQ$ | Alternate interior angles ($AB \parallel DC$, transversal $BD$) |
   | $AB = CD$ | Opposite sides of a parallelogram ("Opposite Sides Are Equal" theorem) |
   | $\triangle APB \cong \triangle CQD$ | **AAS** |

   (b) Since $\triangle APB \cong \triangle CQD$, **$AP = CQ$** (CPCTC). Hence proved.

9. (a) **False** ❌. A rectangle need not have all four sides equal.
   (b) **True** ✅. All four sides of a square are equal.
   (c) **True** ✅. Once one angle is $90^\circ$, the remaining three are forced to be $90^\circ$.
   (d) **False** ❌. Only rectangles (including squares) have equal diagonals in general.
   (e) **True** ✅. The diagonals of a kite always intersect at $90^\circ$.

---

That may have seemed like a long list of theorems, yet every single one follows the exact same four-step story: **draw a diagonal, form two triangles, prove congruence, apply CPCTC.** Master those four steps, and any parallelogram proof is within your reach.

**In the next topic (Topic 2: The Mid-point Theorem):** Connect the midpoints of any two sides of a triangle, and the resulting segment obeys a striking geometric rule—whose proof comes directly from the parallelogram theorems you just learned!
