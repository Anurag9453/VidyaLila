# Chapter: Circles (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [circles-part3.md](circles-part3.md).** (The chapter begins in [circles.md](circles.md).) Proofs draw on the isosceles triangle theorem ([Congruence of Triangles Topic 3](../congruence-of-triangles/congruence-of-triangles-part3.md)), exterior angles and angle sum ([Triangles Topic 2](../triangles/triangles-part2.md)), and [Quadrilaterals Topic 1](../quadrilaterals/quadrilaterals.md).
> **Topics covered in this file:**
> 4. Angle Subtended by an Arc, and Cyclic Quadrilaterals

---

# Topic 4: Angles Subtended by an Arc, and Cyclic Quadrilaterals

In Topic 3, Grandma Elena's plates and flatbread cuts helped us master congruent circles and chord theorems: equal chords subtend equal angles at the centre, a perpendicular from the centre bisects a chord, and three non-collinear points determine a unique circle. Throughout Topic 3, our attention stayed fixed on the **centre**.

Now let us step away from the centre and stand right **on the circle's boundary**. What angle does an arc subtend from a point on the circumference, and how does it compare to the angle at the centre? That single question leads to two famous circle theorems — and to the defining property of a **cyclic quadrilateral**.

---

## Sophia and the Circular Park Gate

Sophia loves photography. Near her home lies a **circular botanical park** ringed by a smooth perimeter footpath. Along the boundary stands a wide **entrance gate** framed by two stone pillars, $A$ and $B$.

Trying to frame the perfect shot of the gate, Sophia walked along the footpath and stopped at three different viewpoints — $P$, $Q$, and $R$ — measuring the viewing angle between pillars $A$ and $B$ at each spot.

```
                 P     Q
              .   *   *   .
           .                 .  R
         .                     *
        .           O           .
        .                       .
         .                     .
           A *-------------* B
                  (gate)
```

To her amazement, **the angle measured at $P$, $Q$, and $R$ was the exact same number every single time!** Whether she stood close to one pillar or far across the park, as long as she stayed anywhere along the **same large arc** facing the gate, pillars $A$ and $B$ always spanned the exact same angle!

Then her dad, Dr. Bennett, stood at the fountain right at the centre $O$ and measured the angle between $A$ and $B$ from there. His angle turned out to be **exactly double** Sophia's angle!

Those two discoveries are the heart of this topic:
1. The angle subtended at the centre $=$ **twice** the angle subtended at the circumference.
2. All angles subtended in the **same segment** are **equal**.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Angle subtended at the centre** | The angle formed by joining both endpoints of an arc to the centre (Topic 2's central angle) | $\angle AOB$ |
| **Angle subtended on the circle** | The angle formed by joining both endpoints of an arc to a point on the **remaining part** of the circle | $\angle APB$ |
| **Inscribed angle** | An angle whose vertex lies on the circle and whose arms are two chords | $\angle APB$ |
| **Concyclic points** | Points that all lie on one single circle | $A, B, C, D$ lying on the same circle |
| **Cyclic quadrilateral** | A quadrilateral whose four vertices all lie on the same circle | Quadrilateral $ABCD$ inscribed in a circle |

---

## Part A: Angle Subtended by an Arc at the Centre and on the Circle

In Topic 2, we learned that an arc's **degree measure** equals its **central angle**. Now let us compare that central angle with the angle the same arc makes at a point on the circle.

Take a circle with centre $O$ and an arc $PQ$:
- Join $P$ and $Q$ to $O$ to form **$\angle POQ$**, the **angle at the centre**.
- Pick any point $A$ on the **remaining part of the circle** (not on arc $PQ$ itself, but on the opposite arc). Join $P$ and $Q$ to $A$ to form **$\angle PAQ$**, the **angle on the circle** (or *inscribed angle*).

```
                A
              .*.
           .  / \  .
         .   /   \   .
        .   /  O  \   .
        .  /  / \  \  .
         ./  /   \  \.
          P*---------*Q
             (arc PQ below)
```

Remember: point $A$ must **not** lie on arc $PQ$ itself — it lies on the remaining arc opposite $PQ$.

---

## Part B: Theorem — Angle at the Centre Is Double the Angle at the Circumference

> **Theorem:** The angle subtended by an arc at the **centre** is **double** the angle subtended by it at **any point on the remaining part of the circle**.
>
> $$\angle POQ = 2\angle PAQ$$

### Proof (Case Where Centre $O$ Lies Inside the Angle)

**Given:** A circle with centre $O$. Arc $PQ$ subtends $\angle POQ$ at the centre and $\angle PAQ$ at point $A$ on the remaining part of the circle.

**To prove:** $\angle POQ = 2\angle PAQ$.

**Construction:** Join $A$ to $O$ and extend $AO$ straight across to meet the circle at $B$.

```
                A
              .*.
           .  /|\  .
         .   / | \   .
        .   /  O  \   .
        .  /  /|\  \  .
         ./  / | \  \.
          P*   |   *Q
               B
```

| Statement | Reason |
|---|---|
| 1. $OA = OQ$ | Both are radii of the circle |
| 2. $\angle OAQ = \angle OQA$ | Angles opposite equal sides are equal ([Congruence Topic 3](../congruence-of-triangles/congruence-of-triangles-part3.md)) |
| 3. $\angle BOQ = \angle OAQ + \angle OQA$ | Exterior angle of $\triangle AOQ$ equals the sum of its two interior opposite angles ([Triangles Topic 2](../triangles/triangles-part2.md)) |
| 4. $\angle BOQ = 2\angle OAQ$ | Substituting from Step 2 into Step 3 |
| 5. Similarly, $\angle BOP = 2\angle OAP$ | Applying the same steps to $\triangle AOP$ with $OA = OP$ |
| 6. $\angle BOP + \angle BOQ = 2(\angle OAP + \angle OAQ)$ | Adding Steps 4 and 5 |
| 7. $\angle POQ = 2\angle PAQ$ | Since $\angle BOP + \angle BOQ = \angle POQ$ and $\angle OAP + \angle OAQ = \angle PAQ$ |

**Hence proved.**

### The Other Two Cases (A Quick Look)

This theorem holds in **every** case:
- **When arc $PQ$ is a major arc:** The central angle is a **reflex angle** (greater than $180^\circ$; see [Lines and Angles Topic 1](../lines-and-angles/lines-and-angles.md)). Still, $\text{reflex }\angle POQ = 2\angle PAQ$.
- **When centre $O$ lies outside $\angle PAQ$:** Instead of adding $\angle BOP$ and $\angle BOQ$, we **subtract** ($\angle BOQ - \angle BOP$), and the exact same result follows!

In all three cases, the strategy is identical: **extend $AO$, use isosceles triangles, and apply the exterior angle theorem.**

### Understanding with Numbers

**Example 1:** The central angle is $\angle POQ = 100^\circ$. What is $\angle PAQ$ on the circle?

$$\angle PAQ = \frac{1}{2} \times 100^\circ = \mathbf{50^\circ}$$

**Example 2:** The inscribed angle is $\angle PAQ = 35^\circ$. Find $\angle POQ$ at the centre.

$$\angle POQ = 2 \times 35^\circ = \mathbf{70^\circ}$$

**Example 3:** $\angle BOC = 130^\circ$. Point $A$ lies on the major arc $BC$, and point $D$ lies on the minor arc $BC$. Find $\angle BAC$ and $\angle BDC$.

- Since $A$ lies on the major arc, $\angle BAC$ faces **minor arc $BC$**: $\angle BAC = \frac{1}{2} \times 130^\circ = \mathbf{65^\circ}$.
- Since $D$ lies on the minor arc, $\angle BDC$ faces **major arc $BC$**, whose central angle is the reflex angle $360^\circ - 130^\circ = 230^\circ$. Therefore $\angle BDC = \frac{1}{2} \times 230^\circ = \mathbf{115^\circ}$.

**Check:** $65^\circ + 115^\circ = 180^\circ$ ✅. *(That is no coincidence — Part F explains why!)*

---

## Part C: Theorem — Angles in the Same Segment Are Equal

Now remember Sophia's surprise: anywhere she stood on the same side of the park gate, the viewing angle stayed identical!

> **Theorem:** Angles in the **same segment** of a circle are **equal**.

In Topic 2, we saw that a chord divides a circle into two **segments**. If points $A$ and $D$ lie in the same segment above chord $BC$, then:

$$\mathbf{\angle BAC = \angle BDC}$$

```
              A        D
           .  *        *  .
         .    |\      /|    .
        .     | \    / |     .
        .     |  \  /  |     .
        .     |   \/   |     .
        .     |   /\   |     .
        .     |  /  \  |     .
         .    | /    \ |    .
          .   |/      \|   .
            B *--------* C
   (Join A to B, C and D to B, C.
    ∠BAC and ∠BDC both lie in the upper segment of chord BC.)
```

### Why Is This True?

It follows in two lines from the previous theorem (angle at centre is double angle at circumference):
- $\angle BAC = \frac{1}{2}\angle BOC$
- $\angle BDC = \frac{1}{2}\angle BOC$

Halves of the same angle are equal (Euclid Axiom 7, [Euclid's Geometry Topic 1](../euclids-geometry/euclids-geometry.md)), so **$\angle BAC = \angle BDC$**!

**Example 4:** $A, B, C, D$ lie on a circle with $A$ and $D$ on the same side of chord $BC$. If $\angle BAC = 40^\circ$, what is $\angle BDC$?

Since both lie in the same segment, $\angle BDC = \mathbf{40^\circ}$.

---

## Part D: Angle in a Semicircle Is $90^\circ$

This is the most famous consequence of the central-angle theorem.

If $AB$ is a **diameter** of the circle, then arc $AB$ is a **semicircle**, whose degree measure is **$180^\circ$** — so at the centre, $\angle AOB = 180^\circ$ (a straight line).

Therefore, for **any** point $C$ on the circle:

$$\mathbf{\angle ACB = \frac{1}{2} \times 180^\circ = 90^\circ}$$

```
               C
             . * .
          .   / \   .
        .    /   \    .
       .    /     \    .
       A *-----O-----* B
         (diameter AB)
```

> **The angle in a semicircle is always a right angle ($90^\circ$).**

**Example 5:** $AB$ is a diameter and $C$ lies on the circle. If $\angle CAB = 35^\circ$, find $\angle CBA$.

- $\angle ACB = 90^\circ$ (angle in a semicircle)
- In $\triangle ABC$: $35^\circ + 90^\circ + \angle CBA = 180^\circ$
- **$\angle CBA = 55^\circ$**

**Check:** $35 + 90 + 55 = 180$ ✅.

---

## Part E: Converse (Quick Look) — When Do Four Points Lie on a Circle?

The converse of "angles in the same segment are equal" is also true:

> If a line segment joining two points $A$ and $B$ subtends **equal angles** at two other points $C$ and $D$ lying on the **same side** of line $AB$, then the four points **$A, B, C, D$ are concyclic** (they all lie on a single circle).

In other words, if $\angle ACB = \angle ADB$ with $C$ and $D$ on the same side of $AB$, a single circle passes through all four points. We will not prove this converse here, just keep it ready as a test!

---

## Part F: Cyclic Quadrilaterals

Now let us unlock the secret behind Example 3 in Part B!

A **cyclic quadrilateral** is a quadrilateral whose **all four vertices lie on the same circle**.

```
              A
           .  *----------* B
         .   /             \ .
        .   /               \ .
        .  /                 \.
         D*-------------------* C
           .                .
              .   .   .
```

*(For general quadrilateral properties and the $360^\circ$ angle sum, see [Quadrilaterals Topic 1](../quadrilaterals/quadrilaterals.md).)*

### Cyclic Quadrilateral Theorem — Opposite Angles Sum to $180^\circ$

> **Theorem:** The sum of either pair of **opposite angles** of a cyclic quadrilateral is **$180^\circ$**.
>
> $$\angle A + \angle C = 180^\circ \quad \text{and} \quad \angle B + \angle D = 180^\circ$$

**Given:** $ABCD$ is a cyclic quadrilateral.

**To prove:** $\angle ABC + \angle ADC = 180^\circ$ and $\angle BAD + \angle BCD = 180^\circ$.

**Construction:** Draw diagonals $AC$ and $BD$.

| Statement | Reason |
|---|---|
| 1. $\angle ACB = \angle ADB$ | Angles in the same segment (chord $AB$) |
| 2. $\angle BAC = \angle BDC$ | Angles in the same segment (chord $BC$) |
| 3. $\angle ACB + \angle BAC = \angle ADB + \angle BDC$ | Adding Steps 1 and 2 (Euclid Axiom 2) |
| 4. $\angle ADB + \angle BDC = \angle ADC$ | Adjacent angles forming $\angle ADC$ |
| 5. $\angle ACB + \angle BAC = \angle ADC$ | From Steps 3 and 4 |
| 6. $\angle ABC + \angle ACB + \angle BAC = \angle ABC + \angle ADC$ | Adding $\angle ABC$ to both sides |
| 7. $180^\circ = \angle ABC + \angle ADC$ | Left-hand side is the angle sum of $\triangle ABC$ ([Triangles Topic 2](../triangles/triangles-part2.md)) |
| 8. $\angle BAD + \angle BCD = 360^\circ - 180^\circ = 180^\circ$ | Angle sum of a quadrilateral is $360^\circ$ ([Quadrilaterals Topic 1](../quadrilaterals/quadrilaterals.md)) |

**Hence proved.**

Now Example 3 from Part B makes total sense! Points $A, B, D, C$ all lay on one circle, making $ABDC$ a cyclic quadrilateral — so $\angle BAC + \angle BDC = 65^\circ + 115^\circ = 180^\circ$!

### Converse of the Cyclic Quadrilateral Theorem — The Reverse Holds Too

> **Theorem:** If the sum of a pair of **opposite angles** of a quadrilateral is **$180^\circ$**, then the quadrilateral is **cyclic**.

This gives an instant test for whether a quadrilateral can fit inside a circle!

**Example:** Every rectangle is cyclic. Why? Every angle of a rectangle is $90^\circ$, so $\angle A + \angle C = 90^\circ + 90^\circ = 180^\circ$. By the converse, every rectangle is cyclic.

### The Exterior Angle Property

> If one side of a cyclic quadrilateral is produced (extended), the **exterior angle** formed equals the **interior opposite angle**.

```
              A          B
              *----------*-------- E
             /            \
            /              \
           *----------------*
           D                C
```

In cyclic quadrilateral $ABCD$, producing $AB$ to $E$ gives **$\angle CBE = \angle ADC$**.

**Why?**
- $\angle ABC + \angle CBE = 180^\circ$ (linear pair, [Lines and Angles Topic 2](../lines-and-angles/lines-and-angles-part2.md))
- $\angle ABC + \angle ADC = 180^\circ$ (cyclic quadrilateral theorem)
- Since both sum to $180^\circ$ with $\angle ABC$, **$\angle CBE = \angle ADC$**!

---

## Part G: Solved Examples

**Example 6:** $ABCD$ is a cyclic quadrilateral with $\angle A = 70^\circ$ and $\angle B = 95^\circ$. Find $\angle C$ and $\angle D$.

- $\angle C = 180^\circ - 70^\circ = \mathbf{110^\circ}$
- $\angle D = 180^\circ - 95^\circ = \mathbf{85^\circ}$

**Check:** $70 + 95 + 110 + 85 = 360$ ✅.

**Example 7:** Two opposite angles of a cyclic quadrilateral are $(2x + 10)^\circ$ and $(3x - 5)^\circ$. Find $x$ and both angles.

$$(2x + 10) + (3x - 5) = 180 \implies 5x + 5 = 180 \implies 5x = 175 \implies \mathbf{x = 35}$$

The angles are $2(35) + 10 = \mathbf{80^\circ}$ and $3(35) - 5 = \mathbf{100^\circ}$.
**Check:** $80 + 100 = 180$ ✅.

**Example 8:** $ABCD$ is cyclic, and side $AB$ is produced to $E$. Given $\angle ADC = 105^\circ$, find $\angle CBE$ and $\angle ABC$.

- $\angle CBE = \angle ADC = \mathbf{105^\circ}$ (exterior angle property)
- $\angle ABC = 180^\circ - 105^\circ = \mathbf{75^\circ}$

**Example 9:** $ABCD$ is a cyclic quadrilateral with $\angle DBC = 55^\circ$ and $\angle BAC = 45^\circ$. Find $\angle BCD$.

- $\angle CAD = \angle DBC = 55^\circ$ (angles in the same segment on chord $CD$)
- $\angle BAD = \angle BAC + \angle CAD = 45^\circ + 55^\circ = 100^\circ$
- $\angle BCD = 180^\circ - 100^\circ = \mathbf{80^\circ}$ (opposite angles of a cyclic quadrilateral)

**Example 10:** $A, B, C, D$ are points on a circle whose diagonals $AC$ and $BD$ intersect at $E$. If $\angle BEC = 130^\circ$ and $\angle ECD = 20^\circ$, find $\angle BAC$.

- In $\triangle CED$, $\angle BEC$ is an exterior angle, so $\angle BEC = \angle ECD + \angle EDC$.
- $130^\circ = 20^\circ + \angle EDC \implies \angle EDC = 110^\circ$.
- $\angle EDC$ is the same angle as $\angle BDC$ (since $E$ lies on $BD$).
- $\angle BAC = \angle BDC = \mathbf{110^\circ}$ (angles in the same segment on chord $BC$).

**Example 11 (proof):** If both diagonals of a cyclic quadrilateral are diameters of the circle, prove that it is a rectangle.

| Statement | Reason |
|---|---|
| 1. Since $AC$ is a diameter, $\angle ABC = 90^\circ$ and $\angle ADC = 90^\circ$ | Angle in a semicircle is $90^\circ$ |
| 2. Since $BD$ is a diameter, $\angle BAD = 90^\circ$ and $\angle BCD = 90^\circ$ | Angle in a semicircle is $90^\circ$ |
| 3. All four angles of $ABCD$ equal $90^\circ$ | From Steps 1 and 2 |
| 4. $ABCD$ is a rectangle | A quadrilateral with all four angles $90^\circ$ (also a parallelogram since opposite angles are equal, [Quadrilaterals Topic 1](../quadrilaterals/quadrilaterals.md)) |

**Hence proved.**

**Example 12 (proof):** Prove that a cyclic parallelogram is always a rectangle.

| Statement | Reason |
|---|---|
| 1. $\angle A = \angle C$ | Opposite angles of a parallelogram are equal ([Quadrilaterals Topic 1](../quadrilaterals/quadrilaterals.md)) |
| 2. $\angle A + \angle C = 180^\circ$ | Opposite angles of a cyclic quadrilateral sum to $180^\circ$ |
| 3. $2\angle A = 180^\circ \implies \angle A = 90^\circ$ | From Steps 1 and 2 |
| 4. A parallelogram with one $90^\circ$ angle is a rectangle | [Quadrilaterals Topic 1](../quadrilaterals/quadrilaterals.md) (Part D) |

**Hence proved.**

---

## Common Pitfalls to Avoid

1. **Mistake 1: Reversing the factor of $2$ — claiming the circumference angle is double.**
   The angle at the **centre** is double; the angle on the **circle** is half ($\angle POQ = 2\angle PAQ$). If $\angle PAQ = 40^\circ$, then $\angle POQ = 80^\circ$, not $20^\circ$.

2. **Mistake 2: Choosing the point $A$ on the arc itself.**
   In the central-angle theorem, $A$ must lie on the **remaining part** of the circle. If $A$ sits on arc $PQ$ itself, it faces the *major* arc instead (as in Example 3, where $D$ on the minor arc gave $115^\circ$ rather than $65^\circ$).

3. **Mistake 3: Setting angles in *different* segments equal.**
   "Angles in the same segment are equal" applies strictly to angles in the **same** segment. Angles on **opposite** sides of a chord are not equal — they add up to $180^\circ$!

4. **Mistake 4: Assuming opposite angles sum to $180^\circ$ in *every* quadrilateral.**
   That property holds **only for cyclic** quadrilaterals. A non-rectangular parallelogram has equal opposite angles that need not add to $180^\circ$ (for instance, $70^\circ + 70^\circ = 140^\circ$).

5. **Mistake 5: Adding adjacent angles to $180^\circ$ in a cyclic quadrilateral.**
   In a cyclic quadrilateral, **opposite** angles ($\angle A$ and $\angle C$) sum to $180^\circ$, not adjacent angles ($\angle A$ and $\angle B$).

6. **Mistake 6: Saying the angle in a semicircle is $180^\circ$.**
   The *arc* of a semicircle measures $180^\circ$ at the centre, whereas the **angle inscribed in a semicircle** (at the circumference) is always **$90^\circ$**.

7. **Mistake 7: Equating the exterior angle to the adjacent interior angle.**
   The exterior angle of a cyclic quadrilateral equals its **interior opposite** angle, not the angle right next to it: $\angle CBE = \angle ADC$, not $\angle ABC$.

---

## Quick Recap

- **Central-angle theorem:** The angle subtended by an arc at the centre is **double** the angle it subtends at any point on the remaining part of the circle ($\angle POQ = 2\angle PAQ$).
- **Same-segment theorem:** Angles in the same segment of a circle are **equal**.
- **Angle in a semicircle is $90^\circ$.**
- **Converse (concyclic test):** If a segment subtends equal angles at two points on the same side of it, all four points are **concyclic**.
- **Cyclic quadrilateral:** all four vertices lie on a circle.
- **Cyclic quadrilateral theorem:** Opposite angles of a cyclic quadrilateral sum to **$180^\circ$**.
- **Converse:** If a pair of opposite angles of a quadrilateral sums to $180^\circ$, the quadrilateral is **cyclic**.
- **Exterior angle** of a cyclic quadrilateral equals the **interior opposite angle**.

---

## Practice Questions

1. The angle subtended by an arc at the centre of a circle is $140^\circ$. Find the angle subtended by the same arc at a point on:
   (a) the major arc
   (b) the minor arc

2. $AB$ is a diameter of a circle and $C$ is a point on the circle. If $\angle CAB = 28^\circ$, find $\angle ABC$.

3. In a cyclic quadrilateral $ABCD$, $\angle A = 3x^\circ$ and $\angle C = (2x + 20)^\circ$. Find $x$ and the measures of $\angle A$ and $\angle C$.

4. $A, B, C, D$ are points on a circle such that $C$ and $D$ lie on the same side of chord $AB$. If $\angle ACB = 34^\circ$, find $\angle ADB$.

5. $ABCD$ is a cyclic quadrilateral and side $AB$ is produced to $E$. If $\angle ADC = 120^\circ$, find $\angle CBE$ and $\angle ABC$.

6. $ABCD$ is a cyclic quadrilateral in which $\angle DBC = 50^\circ$ and $\angle BAC = 35^\circ$. Find $\angle BCD$.

7. Prove that a cyclic rhombus is a square.

8. Prove that every rectangle is a cyclic quadrilateral.

9. State whether each statement is true or false. Give a reason.
   (a) The angle subtended by an arc at the centre is half the angle subtended at a point on the remaining part of the circle.
   (b) The angle in a semicircle is a right angle.
   (c) The opposite angles of every quadrilateral add up to $180^\circ$.
   (d) Angles in the same segment of a circle are equal.

### Answers

1. (a) A point on the major arc faces the minor arc: $\frac{1}{2} \times 140^\circ = \mathbf{70^\circ}$.
   (b) A point on the minor arc faces the major arc, whose reflex central angle is $360^\circ - 140^\circ = 220^\circ$: $\frac{1}{2} \times 220^\circ = \mathbf{110^\circ}$.
   Check: $70 + 110 = 180$ ✅ (cyclic quadrilateral!).

2. $\angle ACB = 90^\circ$ (angle in a semicircle). In $\triangle ABC$: $28^\circ + 90^\circ + \angle ABC = 180^\circ \implies \mathbf{\angle ABC = 62^\circ}$.

3. $3x + (2x + 20) = 180 \implies 5x = 160 \implies \mathbf{x = 32}$.
   $\angle A = 3(32) = \mathbf{96^\circ}$, $\angle C = 2(32) + 20 = \mathbf{84^\circ}$.
   Check: $96 + 84 = 180$ ✅.

4. $C$ and $D$ lie in the same segment of chord $AB$, so **$\angle ADB = \angle ACB = 34^\circ$** (angles in the same segment are equal).

5. $\angle CBE = \angle ADC = \mathbf{120^\circ}$ (exterior angle $=$ interior opposite angle).
   $\angle ABC = 180^\circ - 120^\circ = \mathbf{60^\circ}$ (linear pair, or cyclic quadrilateral theorem).

6. $\angle CAD = \angle DBC = 50^\circ$ (angles in the same segment on chord $CD$).
   $\angle BAD = \angle BAC + \angle CAD = 35^\circ + 50^\circ = 85^\circ$.
   $\angle BCD = 180^\circ - 85^\circ = \mathbf{95^\circ}$ (opposite angles of a cyclic quadrilateral).

7. **Given:** $ABCD$ is a cyclic rhombus. **To prove:** $ABCD$ is a square.

   | Statement | Reason |
   |---|---|
   | 1. $ABCD$ is a parallelogram | Every rhombus is a parallelogram |
   | 2. $\angle A = \angle C$ | Opposite angles of a parallelogram are equal |
   | 3. $\angle A + \angle C = 180^\circ$ | Opposite angles of a cyclic quadrilateral sum to $180^\circ$ |
   | 4. $\angle A = 90^\circ$ | From Steps 2 and 3: $2\angle A = 180^\circ$ |
   | 5. All four angles equal $90^\circ$ | A parallelogram with one $90^\circ$ angle has all four angles $90^\circ$ ([Quadrilaterals Topic 1](../quadrilaterals/quadrilaterals.md)) |
   | 6. $ABCD$ is a square | All sides equal (rhombus) and all angles $90^\circ$ |

   **Hence proved.**

8. **Given:** $ABCD$ is a rectangle. **To prove:** $ABCD$ is cyclic.

   | Statement | Reason |
   |---|---|
   | 1. $\angle A = 90^\circ$ and $\angle C = 90^\circ$ | All angles of a rectangle are $90^\circ$ |
   | 2. $\angle A + \angle C = 180^\circ$ | From Step 1 |
   | 3. $ABCD$ is cyclic | Converse of the cyclic quadrilateral theorem (a pair of opposite angles sums to $180^\circ$) |

   **Hence proved.**

9. (a) **False** ❌. The angle at the centre is **double** the angle at the circumference, not half.
   (b) **True** ✅. A semicircle has a $180^\circ$ central angle, so the inscribed angle is $\frac{1}{2} \times 180^\circ = 90^\circ$.
   (c) **False** ❌. This holds only for **cyclic** quadrilaterals; a general parallelogram can have opposite angles summing to $70^\circ + 70^\circ = 140^\circ$.
   (d) **True** ✅. By the same-segment theorem.

---

## Chapter Wrap-up: Circles

| Topic | What you learned | Most important takeaway |
|---|---|---|
| **1. Circle and its terms** | Definition of a circle, centre, radius, diameter, chord, arc, circumference, segment, sector, secant, tangent, concentric circles, position of a point | Point at distance $d$ from centre: $d < r$ inside, $d = r$ on, $d > r$ outside |
| **2. Degree measure of an arc** | Central angle, minor and major arcs, semicircle, segments and alternate segments | $\text{Major arc} = 360^\circ - \text{minor arc}$ |
| **3. Congruent circles and chord properties** | Congruent circles and arcs, all chord theorems (equal chords, perpendicular from centre, unique circle through three points, distance from centre) | Perpendicular from centre bisects the chord; equal chords are equidistant from the centre |
| **4. Arc angles and cyclic quadrilaterals** | Angle at centre is double angle on circle, same-segment angles equal, cyclic quadrilateral theorems, angle in a semicircle, exterior angle property | Central angle is double; opposite angles of a cyclic quadrilateral sum to $180^\circ$ |

---

Keep Sophia's circular park in mind: stand anywhere on the same arc facing the gate, and the viewing angle stays constant — while the fountain at the centre sees double that angle. Once those two facts click, almost every problem in this topic unlocks naturally. Fantastic work completing the entire Circles chapter!
