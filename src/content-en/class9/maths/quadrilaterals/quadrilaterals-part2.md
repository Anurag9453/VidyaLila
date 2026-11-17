# Chapter: Quadrilaterals (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [quadrilaterals.md](quadrilaterals.md).** In our proofs, we will use the congruence criteria (ASA, AAS) from [Congruence of Triangles](../congruence-of-triangles/congruence-of-triangles-part2.md) and parallel-line angle properties from [Lines and Angles](../lines-and-angles/lines-and-angles-part3.md).
> **Topics covered in this file:**
> 2. The Mid-point Theorem

---

# Topic 2: The Mid-point Theorem

In Topic 1, starting from Maya and Leo's weekend game board and window frame, we toured the entire quadrilateral family—trapezium, parallelogram, rectangle, rhombus, square, and kite—and proved the fundamental theorems on parallelograms and their converses. One of those theorems will play a starring role throughout this topic:

> **"One Pair of Opposite Sides Equal and Parallel" Theorem: If one pair of opposite sides of a quadrilateral is both equal and parallel, then the quadrilateral is a parallelogram.**

Now we step back inside a triangle to examine one very special line segment: the segment joining the **midpoints** of two sides. It possesses an extraordinary property, and its proof relies directly on the parallelogram theorem above!

---

## The Story of Leo's Garden Plot

At the community garden, Leo and Maya manage a **triangular flower bed** with corners $A$, $B$, and $C$. The bottom edge $BC$ runs along the main stone walkway and measures **$40\text{ metres}$** long.

They want to run a straight wooden border across the middle of the bed to separate the herb section at the top from the wildflowers below:

- Drive a stake $E$ at the **exact midpoint** of edge $AB$.
- Drive a stake $F$ at the **exact midpoint** of edge $AC$.
- Stretch a straight wooden edging strip between $E$ and $F$.

Leo had two practical questions before buying the timber:

1. How long will the edging strip $EF$ need to be?
2. Will the edging strip sit **perfectly parallel** to the stone walkway $BC$?

Maya, who had already studied Class 9 geometry, answered right away: "The strip will be **parallel** to the walkway, and its length will be **half** the walkway—exactly **$20\text{ metres}$**." When they stretched a tape measure across $EF$, it read $20\text{ m}$ on the dot!

How could Maya be so certain without even measuring? She used the **Mid-point Theorem**, which we will learn and prove in this topic.

### A Quick Hands-On Activity (Paper Folding)

Cut any triangle out of a sheet of paper. Fold the top vertex $A$ straight down so it touches the bottom edge $BC$, and press a sharp **crease** across the paper:

- The crease hits $AB$ and $AC$ right at their **midpoints**.
- The crease runs **parallel** to $BC$.
- Measure the crease with a ruler: its length is **half** of $BC$.

This is no paper-folding coincidence—it is a theorem. Let us prove it!

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Mid-point** | The point on a line segment that divides it into two equal halves | If $AB = 10\text{ cm}$, its midpoint is $5\text{ cm}$ from $A$ |
| **Bisect** | To cut or divide into two equal parts | "$F$ bisects $AC$" means $AF = FC$ |
| **Mid-segment** | The line segment joining the midpoints of two sides of a triangle | Segment $EF$ joining midpoints $E$ of $AB$ and $F$ of $AC$ |
| **Converse** | Reversing the given and conclusion of a theorem | Converse of "join midpoints $\to$ parallel" is "parallel through one midpoint $\to$ hits the other midpoint" |
| **Intercept** | The segment cut off on a transversal between two lines | *(Introduced as a bonus note in Part F)* |

---

## Part A: What the Mid-point Theorem Says

> **Mid-point Theorem:** The line segment joining the **midpoints of two sides** of a triangle is **parallel to the third side** and **equal to half of the third side**.

In symbols: in $\triangle ABC$, if $E$ is the midpoint of $AB$ and $F$ is the midpoint of $AC$, then:

1. **$EF \parallel BC$**
2. **$EF = \frac{1}{2} BC$**

```
            A
           / \
          /   \
       E •-----• F        EF ∥ BC
        /       \         EF = ½ BC
       /         \
      B-----------C
```

In Leo's garden bed, $BC = 40\text{ m}$, so $EF = \frac{1}{2} \times 40 = \mathbf{20\text{ m}}$.

---

## Part B: Proof of the Mid-point Theorem

This proof has a few steps, yet each step rests squarely on tools you already know. Let us take it one step at a time.

**Given:** In $\triangle ABC$, $E$ is the midpoint of $AB$ ($AE = EB$) and $F$ is the midpoint of $AC$ ($AF = FC$).

**To prove:** (i) $EF \parallel BC$ and (ii) $EF = \frac{1}{2} BC$.

**Construction:** Extend $EF$ beyond $F$. Through $C$, draw a line parallel to $BA$, meeting the extended line $EF$ at **$D$**.

```
               A
              / \
             /   \
            /     \
         E •-------• F-------• D
          /         \       /
         /           \     /
        /             \   /
       B---------------• C

   CD ∥ BA (construction)      (not to scale)
```

**Strategy at a glance:** First we prove $\triangle AEF \cong \triangle CDF$, which gives $CD = AE$. Since $AE = BE$ and $BE \parallel CD$, quadrilateral $EBCD$ turns into a parallelogram—and a parallelogram's opposite sides are both parallel and equal, giving $EF \parallel BC$ and $EF = \frac{1}{2} BC$ right away!

**Step 1: Prove $\triangle AEF \cong \triangle CDF$.**

| Statement | Reason |
|---|---|
| $AF = CF$ | $F$ is the midpoint of $AC$ (given) |
| $\angle AFE = \angle CFD$ | Vertically opposite angles ([Lines and Angles, Topic 3](../lines-and-angles/lines-and-angles-part3.md)) |
| $\angle EAF = \angle DCF$ | Alternate interior angles ($AB \parallel CD$, transversal $AC$) |
| $\triangle AEF \cong \triangle CDF$ | **ASA** ($AF$ is included between the two angles) ([Congruence, Topic 2](../congruence-of-triangles/congruence-of-triangles-part2.md)) |

Notice the vertex correspondence: $A \leftrightarrow C$, $E \leftrightarrow D$, $F \leftrightarrow F$.

**Step 2: Extract two equalities by CPCTC.**

| Statement | Reason |
|---|---|
| $EF = DF$ | CPCTC |
| $AE = CD$ | CPCTC |

**Step 3: Show that $EBCD$ is a parallelogram.**

| Statement | Reason |
|---|---|
| $AE = BE$ | $E$ is the midpoint of $AB$ (given) |
| $BE = CD$ | Both equal $AE$ (Euclid's Axiom 1) |
| $BE \parallel CD$ | $BA \parallel CD$ (construction), and $BE$ lies on line $BA$ |
| $EBCD$ is a parallelogram | One pair of opposite sides ($BE$ and $CD$) is **both equal and parallel** (Topic 1 theorem) |

**Step 4: Deduce both results.**

| Statement | Reason |
|---|---|
| $ED \parallel BC$ | Opposite sides of a parallelogram are parallel (Topic 1) |
| $EF \parallel BC$ | $EF$ is part of $ED$ |
| $ED = BC$ | Opposite sides of a parallelogram are equal (Topic 1) |
| $EF = \frac{1}{2} ED$ | $EF = DF$ (Step 2), so $F$ is the midpoint of $ED$ |
| **$EF = \frac{1}{2} BC$** | Substituting $ED = BC$ |

**Hence proved.**

---

## Part C: Converse of the Mid-point Theorem

Now flip the situation around. Suppose Leo drives only **one** stake $E$ at the midpoint of edge $AB$, and then lays the wooden strip straight **parallel** to the stone walkway $BC$ until it hits edge $AC$. Will it land at the **exact midpoint** of $AC$?

Yes! That is the converse.

> **Converse of the Mid-point Theorem:** The line drawn through the **midpoint of one side** of a triangle, **parallel to another side**, **bisects the third side**.

### Proof

**Given:** In $\triangle ABC$, $E$ is the midpoint of $AB$. A line $l$ through $E$ is drawn parallel to $BC$, intersecting $AC$ at $F$.

**To prove:** $F$ is the midpoint of $AC$, i.e., $AF = FC$.

**Construction:** Use the exact same construction: draw a line through $C$ parallel to $BA$ to meet extended $EF$ at $D$ (same diagram as above).

| Statement | Reason |
|---|---|
| $ED \parallel BC$ | Line $l$ is parallel to $BC$ (given) |
| $BE \parallel CD$ | Construction |
| $EBCD$ is a parallelogram | Both pairs of opposite sides are parallel (definition of parallelogram, Topic 1) |
| $BE = CD$ | Opposite sides of a parallelogram are equal (Topic 1) |
| $AE = BE$ | $E$ is the midpoint of $AB$ (given) |
| $AE = CD$ | Both equal $BE$ (Euclid's Axiom 1) |
| $\angle EAF = \angle DCF$ | Alternate interior angles ($AB \parallel CD$, transversal $AC$) |
| $\angle AFE = \angle CFD$ | Vertically opposite angles |
| $\triangle AEF \cong \triangle CDF$ | **AAS** ($AE$ and $CD$ lie opposite equal angles, not between them) |
| **$AF = CF$** | CPCTC |

**Hence proved.** $F$ is the midpoint of $AC$.

### Theorem and Converse Side by Side

| | What Is Given | What Follows |
|---|---|---|
| **Mid-point Theorem** | **Midpoints** of two sides | Segment joining them is **parallel** to and **half** of the third side |
| **Converse** | **Midpoint** of one side $+$ line **parallel** to a second side | That line **bisects** the third side |

---

## Part D: Direct Problems (Finding Lengths)

**Example 1:** In $\triangle ABC$, $D$ and $E$ are the midpoints of $AB$ and $AC$. If $BC = 14\text{ cm}$, find $DE$.

$$DE = \frac{1}{2} BC = \frac{1}{2} \times 14 = \mathbf{7\text{ cm}}$$

**Example 2:** Similarly, if $DE = 4.5\text{ cm}$, what is $BC$?

$$BC = 2 \times DE = 2 \times 4.5 = \mathbf{9\text{ cm}}$$

**Example 3 (Algebraic):** In $\triangle ABC$, $D$ and $E$ are the midpoints of $AB$ and $AC$. If $DE = (2x + 1)\text{ cm}$ and $BC = (5x - 4)\text{ cm}$, find $x$ and $BC$.

By the Mid-point Theorem, $BC = 2 \times DE$:
$$5x - 4 = 2(2x + 1)$$
$$5x - 4 = 4x + 2 \implies \mathbf{x = 6}$$

$$DE = 2(6) + 1 = 13\text{ cm}, \quad BC = 5(6) - 4 = \mathbf{26\text{ cm}}$$

**Check:** $26 = 2 \times 13$ ✅

**Example 4 (Using the Converse):** In $\triangle PQR$, $X$ is the midpoint of $PQ$. A line through $X$ parallel to $QR$ meets $PR$ at $Y$. If $PR = 11\text{ cm}$, find $PY$.

By the converse, $Y$ is the midpoint of $PR$. Thus $PY = \frac{1}{2} \times 11 = \mathbf{5.5\text{ cm}}$.

---

## Part E: Major Applications

### Application 1: Joining All Three Midpoints of a Triangle

In $\triangle ABC$, let $D, E, F$ be the midpoints of $BC, CA, AB$ respectively. Join $D, E, F$.

```
              A
             / \
            /   \
         F •-----• E
          / \   / \
         /   \ /   \
        B-----•-----C
              D
```

Apply the Mid-point Theorem three times:

- $F$ and $E$ (midpoints of $AB, AC$) $\implies$ **$FE = \frac{1}{2} BC$**
- $D$ and $E$ (midpoints of $BC, CA$) $\implies$ **$DE = \frac{1}{2} AB$**
- $D$ and $F$ (midpoints of $BC, AB$) $\implies$ **$DF = \frac{1}{2} CA$**

**Result 1: Half the perimeter.**
$$\text{Perimeter of } \triangle DEF = \frac{1}{2}BC + \frac{1}{2}AB + \frac{1}{2}CA = \mathbf{\frac{1}{2} \times (\text{perimeter of } \triangle ABC)}$$

**Result 2: Four congruent triangles.**
Let $BC = a$, $CA = b$, and $AB = c$. Look at the side lengths of all four small triangles:

| Triangle | Three Sides |
|---|---|
| $\triangle AFE$ | $AF = \frac{1}{2}c$, $AE = \frac{1}{2}b$, $FE = \frac{1}{2}a$ |
| $\triangle FBD$ | $FB = \frac{1}{2}c$, $BD = \frac{1}{2}a$, $FD = \frac{1}{2}b$ |
| $\triangle EDC$ | $EC = \frac{1}{2}b$, $DC = \frac{1}{2}a$, $ED = \frac{1}{2}c$ |
| $\triangle DEF$ | $DE = \frac{1}{2}c$, $EF = \frac{1}{2}a$, $FD = \frac{1}{2}b$ |

All four triangles have sides $\frac{1}{2}a, \frac{1}{2}b, \frac{1}{2}c$. By **SSS**, all four triangles are **congruent**! Joining the midpoints splits any triangle into **$4$ identical triangular pieces**.

**Numeric check:** Suppose $\triangle ABC$ has sides $8\text{ cm}, 10\text{ cm}, 12\text{ cm}$ (perimeter $30\text{ cm}$). Then $\triangle DEF$ has sides $4, 5, 6\text{ cm}$ and perimeter **$15\text{ cm}$**—exactly half of $30\text{ cm}$. ✅

### Application 2: Joining the Midpoints of Any Quadrilateral

Here is a surprising theorem: take **any** quadrilateral $ABCD$, no matter how skewed or irregular, and join the midpoints $P, Q, R, S$ of sides $AB, BC, CD, DA$ in order.

> **$PQRS$ is ALWAYS a parallelogram!**

```
          A•-----P-----•B
          /             \
         S               Q
        /                 \
      D•---------R---------•C

   (also draw diagonal AC)
```

**Proof:** Draw diagonal $AC$.

| Statement | Reason |
|---|---|
| $PQ \parallel AC$ and $PQ = \frac{1}{2} AC$ | In $\triangle ABC$, $P, Q$ are midpoints (Mid-point Theorem) |
| $SR \parallel AC$ and $SR = \frac{1}{2} AC$ | In $\triangle ADC$, $S, R$ are midpoints (Mid-point Theorem) |
| $PQ \parallel SR$ and $PQ = SR$ | Both are parallel to $AC$ and equal to $\frac{1}{2} AC$ |
| **$PQRS$ is a parallelogram** | One pair of opposite sides is equal and parallel (Topic 1 theorem) |

Similarly, drawing diagonal $BD$ gives $PS \parallel BD$, $QR \parallel BD$, and $PS = QR = \frac{1}{2} BD$—which is the key to the special cases below!

### Application 3: Midpoints of Special Quadrilaterals

Bring back the diagonal properties from Topic 1 and combine them with Application 2:

| Original $ABCD$ | Special Diagonal Property (Topic 1) | Midpoint Shape $PQRS$ | Why? |
|---|---|---|---|
| Any quadrilateral | None required | **Parallelogram** | Proof above |
| **Rhombus** | Diagonals are perpendicular ($AC \perp BD$) | **Rectangle** | $PQ \parallel AC$ and $PS \parallel BD \implies PQ \perp PS$; a parallelogram with one $90^\circ$ angle is a rectangle |
| **Rectangle** | Diagonals are equal ($AC = BD$) | **Rhombus** | $PQ = \frac{1}{2}AC$ and $PS = \frac{1}{2}BD \implies PQ = PS$; a parallelogram with equal adjacent sides is a rhombus |
| **Square** | Diagonals are both equal and perpendicular | **Square** | Both properties hold together |

Notice the neat swap: the midpoints of a **rhombus** form a **rectangle**, while the midpoints of a **rectangle** form a **rhombus**!

### Application 4: The Midline of a Trapezium

$ABCD$ is a trapezium with $AB \parallel DC$. $E$ is the midpoint of non-parallel side $AD$, and a line through $E$ parallel to $AB$ meets $BC$ at $F$. Show that $F$ is the midpoint of $BC$.

```
        A•-------------•B
        /               \
      E•-------G---------•F
      /                   \
    D•---------------------•C

   (diagonal AC cuts EF at G)
```

**Proof:** Draw diagonal $AC$, intersecting $EF$ at $G$.

| Statement | Reason |
|---|---|
| $EG \parallel DC$ | $EF \parallel AB$ and $AB \parallel DC$, so $EF \parallel DC$ ([Lines and Angles, Topic 3](../lines-and-angles/lines-and-angles-part3.md): lines parallel to the same line are parallel) |
| $G$ is the midpoint of $AC$ | In $\triangle ADC$, $E$ is the midpoint of $AD$ and $EG \parallel DC$ (**Converse**) |
| $GF \parallel AB$ | $EF \parallel AB$ (given) |
| **$F$ is the midpoint of $BC$** | In $\triangle CAB$, $G$ is the midpoint of $AC$ and $GF \parallel AB$ (**Converse**) |

**Bonus (length formula):** By the Mid-point Theorem, $EG = \frac{1}{2} DC$ (in $\triangle ADC$) and $GF = \frac{1}{2} AB$ (in $\triangle CAB$). Therefore:

$$EF = EG + GF = \frac{1}{2}(AB + DC)$$

That is, the segment joining the midpoints of the non-parallel sides of a trapezium equals **half the sum** of the two parallel sides.

**Example:** If $AB = 10\text{ cm}$ and $DC = 6\text{ cm}$, then $EF = \frac{1}{2}(10 + 6) = \mathbf{8\text{ cm}}$.

### Application 5: Midpoint of the Hypotenuse of a Right Triangle (A Classic Proof)

In $\triangle ABC$, $\angle C = 90^\circ$. $M$ is the midpoint of hypotenuse $AB$. A line through $M$ parallel to $BC$ intersects $AC$ at $D$. Show that:
(i) $D$ is the midpoint of $AC$
(ii) $MD \perp AC$
(iii) $CM = MA = \frac{1}{2} AB$

```
       A
       |\
       | \
     D •--• M
       |   \
       |    \
       C-----B

   ∠C = 90°, M midpoint of AB, MD ∥ BC
```

**(i)** In $\triangle ABC$, $M$ is the midpoint of $AB$ and $MD \parallel BC$. By the **Converse**, $D$ is the midpoint of $AC$.

**(ii)** Since $MD \parallel BC$ with transversal $AC$, $\angle ADM = \angle ACB = 90^\circ$ (corresponding angles). Hence **$MD \perp AC$**.

**(iii)**

| Statement | Reason |
|---|---|
| $AD = CD$ | Part (i) |
| $\angle ADM = \angle CDM = 90^\circ$ | Part (ii), and $\angle CDM$ forms a linear pair with $\angle ADM$ |
| $MD = MD$ | Common side |
| $\triangle ADM \cong \triangle CDM$ | **SAS** |
| $CM = AM$ | CPCTC |
| $AM = \frac{1}{2} AB$ | $M$ is the midpoint of $AB$ |
| **$CM = MA = \frac{1}{2} AB$** | Combining the two lines above |

**Sound familiar?** Back in [Triangles, Topic 2](../triangles/triangles-part2.md), we noted that the **circumcentre of a right triangle lies at the midpoint of its hypotenuse**. Back then we simply stated it as a fact; here **$CM = MA = MB$** proves that $M$ is equidistant from all three vertices!

**Numeric check:** If $AB = 10\text{ cm}$, then $CM = \mathbf{5\text{ cm}}$.

---

## Part F: One Extra Result (The Intercept Theorem)

*(Optional enrichment for deeper insight.)*

Look at the ruled lines on a sheet of notebook paper—they are all parallel and evenly spaced. Lay a pencil across them at any slant. The segments of the pencil cut off between consecutive lines are **all equal in length**, no matter how steep the slant.

> **Intercept Theorem:** If three or more parallel lines make **equal intercepts** on one transversal, they make equal intercepts on **every** other transversal as well.

The Converse of the Mid-point Theorem is simply a compact version of this theorem!

---

## Common Pitfalls to Avoid

1. **Mistake 1: Writing $EF = BC$ instead of $EF = \frac{1}{2}BC$.**
   The mid-segment is **half** the length of the third side, not equal to it. If $BC = 14\text{ cm}$, then $EF = 7\text{ cm}$.

2. **Mistake 2: Applying the theorem to arbitrary points on the sides.**
   Both endpoints must be the **exact midpoints**. If $E$ is the midpoint of $AB$ while $F$ sits elsewhere on $AC$, $EF$ need not be parallel to $BC$.

3. **Mistake 3: Forgetting one of the two conditions in the converse.**
   The converse requires **both**: the line must pass through the **midpoint** of one side **and** be **parallel** to a second side. Just being parallel, or just passing through one midpoint, is not enough.

4. **Mistake 4: Picking the wrong "third side."**
   The third side is the side whose midpoint you did *not* use. If you join the midpoints of $AB$ and $AC$, the third side is $BC$, not $AB$.

5. **Mistake 5: Thinking a quadrilateral's midpoints always form a rectangle.**
   Joining the midpoints of *any* quadrilateral gives a **parallelogram**. You get a rectangle only when the original quadrilateral's diagonals are perpendicular (such as in a rhombus).

6. **Mistake 6: Mixing up the rhombus and rectangle results.**
   Midpoints of a **rhombus** form a **rectangle**; midpoints of a **rectangle** form a **rhombus**. Remember it through the diagonals table!

7. **Mistake 7: Subtracting instead of adding in the trapezium midline formula.**
   The midline of a trapezium equals $\frac{1}{2}(AB \mathbf{+} DC)$—half the **sum** of the parallel bases, never the difference.

8. **Mistake 8: Leaving out the reason when proving $EBCD$ is a parallelogram.**
   In the proof of the Mid-point Theorem, always state why $EBCD$ is a parallelogram: *"one pair of opposite sides is equal and parallel."* Leaving out the reason makes the proof incomplete.

---

## Quick Recap

- **Mid-point Theorem:** The segment joining the midpoints of two sides of a triangle is **parallel** to the third side and **half** its length.
- **Proof path:** Extend $EF$ to meet a parallel through $C$, prove $\triangle AEF \cong \triangle CDF$ (ASA), deduce $EBCD$ is a parallelogram (one pair of opposite sides equal and parallel), and conclude $EF \parallel BC$ and $EF = \frac{1}{2}BC$.
- **Converse:** A line through the midpoint of one side parallel to a second side **bisects** the third side (proved using AAS).
- **Joining all three midpoints** splits a triangle into **$4$ congruent triangles**, and the inner triangle has **half the perimeter** of the original.
- **Midpoints of any quadrilateral** form a **parallelogram** (rhombus $\to$ rectangle; rectangle $\to$ rhombus; square $\to$ square).
- **Trapezium midline:** Parallel to the bases and equal to $\frac{1}{2}(\text{sum of parallel sides})$.
- **Right triangle:** The midpoint of the hypotenuse is equidistant from all three vertices ($CM = MA = MB = \frac{1}{2}AB$).

---

## Practice Questions

1. In $\triangle PQR$, $X$ and $Y$ are the midpoints of $PQ$ and $PR$ respectively. If $QR = 18\text{ cm}$, find $XY$.

2. $D, E,$ and $F$ are the midpoints of sides $BC, CA,$ and $AB$ of $\triangle ABC$. If $AB = 6\text{ cm}$, $BC = 8\text{ cm}$, and $CA = 7\text{ cm}$, find the perimeter of $\triangle DEF$.

3. In $\triangle ABC$, $D$ is the midpoint of $AB$. A line through $D$ parallel to $BC$ meets $AC$ at $E$. If $AC = 11\text{ cm}$, find $AE$.

4. In $\triangle ABC$, $D$ and $E$ are the midpoints of $AB$ and $AC$. If $DE = (3x - 2)\text{ cm}$ and $BC = (5x + 2)\text{ cm}$, find $x$ and the length of $BC$.

5. Show that the quadrilateral formed by joining the midpoints of the sides of a rectangle, in order, is a rhombus.

6. $ABCD$ is a trapezium in which $AB \parallel DC$, $AB = 12\text{ cm}$, and $DC = 8\text{ cm}$. $E$ and $F$ are the midpoints of $AD$ and $BC$. Find $EF$.

7. $ABC$ is a triangle right-angled at $C$, and $M$ is the midpoint of hypotenuse $AB$. If $AB = 13\text{ cm}$, find $CM$.

8. Prove that the line segments joining the midpoints of the sides of a triangle divide it into four congruent triangles.

9. State whether each statement is true or false. Give a reason.
   (a) The line segment joining the midpoints of two sides of a triangle is parallel to the third side.
   (b) The line segment joining the midpoints of two sides of a triangle is equal to the third side.
   (c) The figure formed by joining the midpoints of the sides of any quadrilateral, in order, is a parallelogram.
   (d) The figure formed by joining the midpoints of the sides of a rhombus, in order, is always a square.

### Answers

1. By the Mid-point Theorem, $XY = \frac{1}{2}QR = \frac{1}{2} \times 18 = \mathbf{9\text{ cm}}$.

2. $EF = \frac{1}{2}BC = 4\text{ cm}$, $DF = \frac{1}{2}CA = 3.5\text{ cm}$, $DE = \frac{1}{2}AB = 3\text{ cm}$.
   Perimeter $= 4 + 3.5 + 3 = \mathbf{10.5\text{ cm}}$.
   Check: perimeter of $\triangle ABC$ is $21\text{ cm}$, and $10.5$ is half of $21$ ✅

3. $D$ is the midpoint of $AB$ and $DE \parallel BC$. By the Converse of the Mid-point Theorem, $E$ is the midpoint of $AC$. Hence $AE = \frac{1}{2} \times 11 = \mathbf{5.5\text{ cm}}$.

4. $BC = 2 \times DE$:
   $5x + 2 = 2(3x - 2) = 6x - 4$
   **$x = 6$**
   $BC = 5(6) + 2 = \mathbf{32\text{ cm}}$ (and $DE = 16\text{ cm}$).
   Check: $32 = 2 \times 16$ ✅

5. Let $ABCD$ be a rectangle, with $P, Q, R, S$ the midpoints of $AB, BC, CD, DA$ respectively.

   | Statement | Reason |
   |---|---|
   | $PQ \parallel AC, PQ = \frac{1}{2}AC$ and $SR \parallel AC, SR = \frac{1}{2}AC$ | Mid-point Theorem in $\triangle ABC$ and $\triangle ADC$ |
   | $PQRS$ is a parallelogram | $PQ$ and $SR$ are equal and parallel (Topic 1 theorem) |
   | $PS = \frac{1}{2}BD$ | Mid-point Theorem in $\triangle ABD$ |
   | $AC = BD$ | Diagonals of a rectangle are equal (Topic 1, Part D, Result 2) |
   | $PQ = PS$ | Halves of equal diagonals |
   | **$PQRS$ is a rhombus** | A parallelogram with equal adjacent sides |

6. Using the trapezium midline formula:
   $EF = \frac{1}{2}(AB + DC) = \frac{1}{2}(12 + 8) = \mathbf{10\text{ cm}}$.

7. By Application 5, $CM = \frac{1}{2}AB = \frac{1}{2} \times 13 = \mathbf{6.5\text{ cm}}$.

8. In $\triangle ABC$, let $D, E, F$ be the midpoints of $BC, CA, AB$ respectively.

   | Statement | Reason |
   |---|---|
   | $FE = \frac{1}{2}BC$, $DE = \frac{1}{2}AB$, $DF = \frac{1}{2}CA$ | Mid-point Theorem applied three times |
   | $AF = FB = \frac{1}{2}AB$, $BD = DC = \frac{1}{2}BC$, $CE = EA = \frac{1}{2}CA$ | $D, E, F$ are midpoints |
   | $\triangle AFE, \triangle FBD, \triangle EDC, \triangle DEF$ all have sides $\frac{1}{2}AB, \frac{1}{2}BC, \frac{1}{2}CA$ | Combining the two lines above (see Application 1 table) |
   | **All four triangles are congruent** | **SSS** |

9. (a) **True.** This is directly stated by the Mid-point Theorem.
   (b) **False.** It equals **half** of the third side, not the full length.
   (c) **True.** Drawing one diagonal and applying the Mid-point Theorem twice proves one pair of opposite sides is equal and parallel (Application 2).
   (d) **False.** The midpoints of a rhombus form a **rectangle**; it is a square only if the rhombus itself is a square.

---

One short segment joining two midpoints unlocks an astonishing chain of results! Just picture Leo's wooden garden edging: **connect two midpoints, and the segment runs parallel to the base and half its length.** Everything else flows from there.

**In the next topic (Topic 3):** So far we have measured lengths and angles. Now we ask: how much **space** lies *inside* a parallelogram or triangle? In Topic 3, we will explore **area** through Euclidean area axioms and uncover the relationship between figures sharing the same base and lying between the same parallels.
