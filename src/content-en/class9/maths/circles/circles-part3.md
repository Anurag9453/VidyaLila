# Chapter: Circles (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [circles-part2.md](circles-part2.md).** (Topic 1 is in [circles.md](circles.md).) Our proofs will make direct use of triangle congruence criteria ([Congruence of Triangles](../congruence-of-triangles/congruence-of-triangles-part2.md)) and [CPCT](../congruence-of-triangles/congruence-of-triangles.md).
> **Topics covered in this file:**
> 3. Congruency of Circles and Properties of Chords

---

# Topic 3: Congruency of Circles and Properties of Chords

In Topic 2, Maya rode the fairground Ferris wheel to learn how arcs are measured in degrees: an arc's degree measure equals its central angle, and minor and major arcs always sum to $360^\circ$. We also explored minor and major segments.

Now two fresh questions arise:
1. When are two circles (or two arcs) **exactly congruent**?
2. What hidden rules govern **chords** inside a circle — how far is a chord from the centre, and why?

In this topic, we will **prove** every one of these properties, using our trusty triangle congruence criteria (SSS, SAS, RHS) as our tools.

---

## Grandma Elena's Kitchen

During the holidays, Maya visited her Grandma Elena. In the kitchen, Grandma Elena was baking round flatbreads and setting the table.

**First observation:** Two round steel dinner plates sat on the counter. Maya placed one plate directly on top of the other — the top plate **covered the bottom plate completely**, with not a sliver sticking out anywhere. Grandma smiled, "They are the exact same size, Maya."

**Second observation:** Grandma sliced a large round flatbread into strips using straight knife cuts from edge to edge. (Remember Topic 1? Each straight cut across the flatbread is a **chord**!) Maya noticed three things right away:
- The cut passing right through the **middle** was the longest.
- Cuts near the **outer rim** were much shorter.
- Any two cuts of **equal length** sat at the **exact same distance** from the centre.

Maya asked, "Grandma, is that always true for every circle?"

Grandma chuckled. "Why don't you prove it with your geometry rules?"

The matching plates illustrate **congruent circles**, and the cuts across the flatbread are **chords**. In this topic, we will answer Maya's question with complete, watertight proofs.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Congruent circles** | Circles that fit completely over one another — meaning they have **equal radii** | Two identical dinner plates |
| **Congruent arcs** | Arcs that match identically when placed one over the other | Two $60^\circ$ arcs in the same circle |
| **Subtend** | To form an angle at a given point by joining the endpoints of a chord or arc to that point | Chord $AB$ subtends $\angle AOB$ at centre $O$ |
| **Perpendicular bisector** | A line that cuts a segment at its midpoint at $90^\circ$ | Perpendicular bisector of a chord |
| **Equidistant** | At the exact same distance from a reference point | Two chords both $5\text{ cm}$ from the centre |
| **Distance of a chord from the centre** | The length of the **perpendicular** dropped from the centre onto the chord | $OM$, where $OM \perp AB$ |

---

## Part A: Congruent Circles

In Congruence of Triangles (Topic 1), we learned that two figures are congruent if one can cover the other **completely** (by superposition). Circles follow the exact same rule.

Since the size of a circle depends solely on its **radius**:

> **Two circles are congruent if and only if their radii are equal.**

| Circle 1 | Circle 2 | Congruent? |
|---|---|---|
| radius $4\text{ cm}$ | radius $4\text{ cm}$ | Yes |
| radius $4\text{ cm}$ | diameter $8\text{ cm}$ | Yes (diameter $8\text{ cm} \implies$ radius $4\text{ cm}$) |
| radius $4\text{ cm}$ | radius $5\text{ cm}$ | No |

Notice that the *location* of the centre does not matter: one plate on the table and an identical plate in the cupboard are still congruent!

---

## Part B: Congruent Arcs

Two arcs are congruent if one fits completely over the other.

> **In the same circle (or in congruent circles), two arcs are congruent if and only if their degree measures are equal.**

In Topic 2, we saw that an arc's degree measure equals its central angle. So in the same circle, any two $60^\circ$ arcs are congruent.

### One Crucial Condition

That phrase *"in the same circle or congruent circles"* is essential!

Compare a small teacup saucer with a large dinner plate. Mark a $60^\circ$ arc on both rims. Their degree measures are both $60^\circ$, yet the arc on the dinner plate is **physically much longer** — they cannot possibly overlap!

> **Arcs of equal degree measure in circles of *different* sizes are NOT congruent.**

---

## Part C: Chords and Angles at the Centre

Now let us prove Maya's flatbread observations one by one.

### Theorem: Equal chords subtend equal angles at the centre

```
              A         C
               \       /
                \     /
                 \   /
                   O
                 /   \
                /     \
               B       D
   (AB and CD are equal chords, O is centre.
    OA, OB, OC, OD are all radii.)
```

**Given:** A circle with centre $O$ and two equal chords $AB = CD$.
**To prove:** $\angle AOB = \angle COD$.

**Proof:** In $\triangle AOB$ and $\triangle COD$:

| Statement | Reason |
|---|---|
| $OA = OC$ | Radii of the same circle |
| $OB = OD$ | Radii of the same circle |
| $AB = CD$ | Given |
| $\triangle AOB \cong \triangle COD$ | SSS criterion |
| $\angle AOB = \angle COD$ | CPCT |

**Hence proved.**

### Converse: Chords subtending equal angles at the centre are equal

**Given:** $\angle AOB = \angle COD$.
**To prove:** $AB = CD$.

**Proof:** In $\triangle AOB$ and $\triangle COD$:

| Statement | Reason |
|---|---|
| $OA = OC$ | Radii of the same circle |
| $\angle AOB = \angle COD$ | Given |
| $OB = OD$ | Radii of the same circle |
| $\triangle AOB \cong \triangle COD$ | SAS criterion (the angle is **included** between the two radii) |
| $AB = CD$ | CPCT |

**Hence proved.**

Notice the neat symmetry: the theorem uses **SSS**, while its converse uses **SAS** — and in both proofs, equal radii give you two pairs of sides for free!

### Relating Chords and Arcs

From Topic 2, an arc's degree measure equals its central angle. Combining this with the two theorems above:
- Equal chords $\implies$ equal central angles $\implies$ congruent (minor) arcs.
- Congruent arcs $\implies$ equal central angles $\implies$ equal chords.

> **In the same circle (or congruent circles): chords are equal $\iff$ their corresponding (minor) arcs are congruent.**

**Example:** In a circle, chords $AB = CD$ and $\angle AOB = 70^\circ$. Then $\angle COD = \mathbf{70^\circ}$ (equal chords subtend equal angles at the centre), and the degree measure of arc $CD$ is also **$70^\circ$**.

---

## Part D: Perpendicular from the Centre to a Chord

Picture a straight cut across a round flatbread again. If you drop a perpendicular ($90^\circ$) from the exact centre of the flatbread onto that cut, where does it land? Right at the **midpoint**!

### Theorem: The perpendicular from the centre of a circle to a chord bisects the chord

```
              O
              |
              |
     A--------M--------B
   (OM ⊥ AB. Show that AM = MB.
    OA and OB are radii.)
```

**Given:** A circle with centre $O$, chord $AB$, and $OM \perp AB$.
**To prove:** $AM = MB$.

**Proof:** Join $OA$ and $OB$. In right triangles $\triangle OMA$ and $\triangle OMB$:

| Statement | Reason |
|---|---|
| $\angle OMA = \angle OMB = 90^\circ$ | Given ($OM \perp AB$) |
| $OA = OB$ | Radii (hypotenuses) |
| $OM = OM$ | Common side |
| $\triangle OMA \cong \triangle OMB$ | RHS criterion |
| $AM = MB$ | CPCT |

**Hence proved.**

### Converse: The line joining the centre of a circle to the midpoint of a chord is perpendicular to the chord

**Given:** $M$ is the midpoint of chord $AB$ ($AM = MB$).
**To prove:** $OM \perp AB$.

**Proof:** Join $OA$ and $OB$. In $\triangle OMA$ and $\triangle OMB$:

| Statement | Reason |
|---|---|
| $OA = OB$ | Radii |
| $AM = MB$ | Given |
| $OM = OM$ | Common side |
| $\triangle OMA \cong \triangle OMB$ | SSS criterion |
| $\angle OMA = \angle OMB$ | CPCT |
| $\angle OMA + \angle OMB = 180^\circ$ | Linear pair ([Lines and Angles Topic 2](../lines-and-angles/lines-and-angles-part2.md)) |
| $2\angle OMA = 180^\circ \implies \angle OMA = 90^\circ$ | From the two lines above |
| $OM \perp AB$ | Since $\angle OMA = 90^\circ$ |

**Hence proved.**

> **One-line summary:** The **perpendicular** from the centre to a chord **bisects** it, and the line from the centre to a chord's **midpoint** is **perpendicular** to it.

### Distance of a Chord from the Centre

From this theorem comes our number-one numerical tool. For chord $AB$, centre $O$, and $OM \perp AB$, $\triangle OMA$ is a **right-angled triangle** with:
- Hypotenuse $= OA =$ **radius ($r$)**
- One leg $= AM =$ **half-chord**
- Other leg $= OM =$ **distance of the chord from the centre ($d$)**

By Pythagoras' theorem:

> **$r^2 = (\text{half-chord})^2 + d^2$**

This single equation solves nearly every numerical problem on chords!

---

## Part E: One Unique Circle Through Three Non-Collinear Points

### Question

- How many circles can pass through **one point**? **Infinitely many** (any radius, centred anywhere around it).
- Through **two points** $A$ and $B$? Still **infinitely many** — any point on the perpendicular bisector of $AB$ can serve as the centre (we saw this in [Constructions Part 3](../constructions/constructions-part3.md)).
- Through **three non-collinear points** (not lying on a straight line)? Here the answer is: **exactly one!**

### Theorem: There is one and only one circle passing through three given non-collinear points

**Given:** Three non-collinear points $A, B, C$.
**To prove:** There is one and only one circle passing through $A, B,$ and $C$.

**Construction:**
1. Construct the perpendicular bisector of $AB$ (line $PQ$).
2. Construct the perpendicular bisector of $BC$ (line $RS$).
3. Label their point of intersection as $O$.

```
            A
           / \
          /   \
         /  O  \
        /       \
       B---------C
   (O = intersection of perpendicular bisectors of AB and BC)
```

**Proof:**

**Step 1: Every point on a perpendicular bisector is equidistant from both endpoints.**
Let $M$ be the midpoint of $AB$. Since $O$ lies on the perpendicular bisector of $AB$, in $\triangle OMA$ and $\triangle OMB$: $AM = MB$, $\angle OMA = \angle OMB = 90^\circ$, and $OM$ is common, so $\triangle OMA \cong \triangle OMB$ (SAS), giving **$OA = OB$** (CPCT).

**Step 2:** Similarly, because $O$ lies on the perpendicular bisector of $BC$, **$OB = OC$**.

**Step 3:** Thus $OA = OB = OC$. Drawing a circle with centre $O$ and radius $OA$ passes cleanly through **$A, B,$ and $C$**. So at least one such circle exists.

**Step 4: Why only one?** Any circle passing through $A, B,$ and $C$ must have its centre equidistant from $A$ and $B$ (so it lies on the perpendicular bisector of $AB$) and equidistant from $B$ and $C$ (so it lies on the perpendicular bisector of $BC$). Two distinct lines intersect in at most **one point** ([Euclid's Geometry Part 4](../euclids-geometry/euclids-geometry-part4.md)). Hence $O$ is the only possible centre, and $OA$ is the only possible radius — **the circle is unique**.

**Hence proved.**

### We Have Met This Point $O$ Before!

In [Triangles Topic 2](../triangles/triangles-part2.md), the intersection of the perpendicular bisectors of the three sides of a triangle was called the **circumcentre**. Point $O$ is that exact circumcentre, and the unique circle through $A, B, C$ is the **circumcircle** of $\triangle ABC$!

### What About Three Collinear Points?

If $A, B, C$ lie on a single straight line, the perpendicular bisectors of $AB$ and $BC$ are both perpendicular to that same line — making them **parallel**. Parallel lines never intersect, so no centre exists and **no circle can pass through three collinear points**.

---

## Part F: Equal Chords and Their Distance from the Centre

Now for Maya's third observation: equal cuts across the flatbread sit at equal distances from the centre!

### Theorem: Equal chords of a circle are equidistant from the centre

```
          A------L------B
                 |
                 O
                 |
          C------M------D
   (AB = CD. OL ⊥ AB, OM ⊥ CD.
    Show that OL = OM.)
```

**Given:** A circle with centre $O$, chords $AB = CD$, $OL \perp AB$, and $OM \perp CD$.
**To prove:** $OL = OM$.

**Proof:** Join $OA$ and $OC$.

| Statement | Reason |
|---|---|
| $AL = \frac{1}{2}AB$ | Perpendicular from the centre bisects the chord |
| $CM = \frac{1}{2}CD$ | Perpendicular from the centre bisects the chord |
| $AL = CM$ | $AB = CD$ (given), halves of equals are equal (Euclid Axiom 7) |
| $\angle OLA = \angle OMC = 90^\circ$ | Given ($OL \perp AB$, $OM \perp CD$) |
| $OA = OC$ | Radii (hypotenuses) |
| $\triangle OLA \cong \triangle OMC$ | RHS criterion |
| $OL = OM$ | CPCT |

**Hence proved.**

### Converse: Chords equidistant from the centre of a circle are equal in length

**Given:** $OL \perp AB$, $OM \perp CD$, and $OL = OM$.
**To prove:** $AB = CD$.

**Proof:**

| Statement | Reason |
|---|---|
| $\angle OLA = \angle OMC = 90^\circ$ | Given |
| $OA = OC$ | Radii (hypotenuses) |
| $OL = OM$ | Given |
| $\triangle OLA \cong \triangle OMC$ | RHS criterion |
| $AL = CM$ | CPCT |
| $AB = 2AL$ and $CD = 2CM$ | Perpendicular from the centre bisects the chord |
| $AB = CD$ | Doubles of equals are equal (Euclid Axiom 6) |

**Hence proved.**

> Both theorems also hold across **congruent circles** (two identical plates of the same radius!).

### A Neat Bonus: Longer Chords Sit Closer to the Centre

Look at $r^2 = (\text{half-chord})^2 + d^2$ for a fixed radius $r$:
- **Larger** half-chord $\implies$ **smaller** $d$ (**closer** to the centre).
- **Smaller** half-chord $\implies$ **larger** $d$ (**farther** from the centre).

In a circle of radius $10\text{ cm}$:

| Chord length | Half-chord | $d = \sqrt{100 - (\text{half-chord})^2}$ |
|---|---|---|
| $20\text{ cm}$ (diameter) | $10\text{ cm}$ | $0\text{ cm}$ (passes right through the centre) |
| $16\text{ cm}$ | $8\text{ cm}$ | $6\text{ cm}$ |
| $12\text{ cm}$ | $6\text{ cm}$ | $8\text{ cm}$ |

That explains Maya's first and second observations completely — **the diameter is the longest chord ($d = 0$)**, and chords shorten as they move toward the rim!

---

## Part G: Solved Numerical Examples

**Example 1:** A chord of length $16\text{ cm}$ is drawn in a circle of radius $10\text{ cm}$. Find its distance from the centre.

Half-chord $= 8\text{ cm}$, $r = 10\text{ cm}$.
$$d^2 = r^2 - 8^2 = 100 - 64 = 36 \implies \mathbf{d = 6\text{ cm}}$$

Check: $6^2 + 8^2 = 36 + 64 = 100 = 10^2$ ✅.

**Example 2:** In a circle of radius $13\text{ cm}$, a chord lies $5\text{ cm}$ from the centre. Find the length of the chord.

$$(\text{half-chord})^2 = 13^2 - 5^2 = 169 - 25 = 144 \implies \text{half-chord} = 12\text{ cm}$$
$$\mathbf{\text{Chord} = 24\text{ cm}}$$

Check: $12^2 + 5^2 = 144 + 25 = 169 = 13^2$ ✅.

**Example 3:** A chord of length $8\text{ cm}$ is $3\text{ cm}$ from the centre of a circle. Find the radius.

Half-chord $= 4\text{ cm}$.
$$r^2 = 4^2 + 3^2 = 16 + 9 = 25 \implies \mathbf{r = 5\text{ cm}}$$

**Example 4:** A $30\text{ cm}$ chord sits in a circle of radius $17\text{ cm}$. How far is it from the centre?

Half-chord $= 15\text{ cm}$. $d^2 = 289 - 225 = 64 \implies \mathbf{d = 8\text{ cm}}$.

Check: $8^2 + 15^2 = 64 + 225 = 289 = 17^2$ ✅.

**Example 5 (parallel chords, both cases):** Two parallel chords $AB = 8\text{ cm}$ and $CD = 6\text{ cm}$ lie in a circle of radius $5\text{ cm}$. Find the distance between them.

First find each chord's distance from the centre:
- $AB$: half $= 4$, $d_1^2 = 25 - 16 = 9 \implies \mathbf{d_1 = 3\text{ cm}}$
- $CD$: half $= 3$, $d_2^2 = 25 - 9 = 16 \implies \mathbf{d_2 = 4\text{ cm}}$

Now consider both arrangements:

```
  Case 1: Same side             Case 2: Opposite sides

     ____C____D____                ____A____B____  (3 cm above)
     __A________B__                     O
          O                        ____C____D____  (4 cm below)
```

- **Case 1 (same side of the centre):** distance $= 4 - 3 = \mathbf{1\text{ cm}}$
- **Case 2 (opposite sides of the centre):** distance $= 4 + 3 = \mathbf{7\text{ cm}}$

Whenever a problem does not specify which sides of the centre the chords lie on, give **both answers**!

**Example 6 (common chord of two intersecting circles):** Two circles of radii $5\text{ cm}$ and $3\text{ cm}$ intersect at two points, and the distance between their centres is $4\text{ cm}$. Find the length of their common chord.

Let the common chord be $AB$, and let the centres be $O_1$ (radius $5$) and $O_2$ (radius $3$). The line of centres $O_1O_2$ is the perpendicular bisector of $AB$ at $M$ (we will prove this in Practice Question 7). Let $O_1M = x$, so $O_2M = 4 - x$, and let $AM = h$.

- From $\triangle O_1MA$: $h^2 = 25 - x^2$
- From $\triangle O_2MA$: $h^2 = 9 - (4 - x)^2$

Equate both expressions for $h^2$:
$$25 - x^2 = 9 - (16 - 8x + x^2)$$
$$25 - x^2 = -7 + 8x - x^2$$
$$25 = -7 + 8x \implies x = 4$$

Thus $M$ coincides with $O_2$, and $h^2 = 25 - 16 = 9 \implies h = 3$.
$$\mathbf{\text{Common chord} = 2h = 6\text{ cm}}$$

Check: in the smaller circle, $AM = 3$ equals its radius, so the common chord is actually the diameter of the smaller circle: $6 = 2 \times 3$ ✅!

---

## Part H: A Proof Problem

**Example 7:** If two intersecting chords of a circle make equal angles with the diameter passing through their point of intersection, prove that the chords are equal.

```
         C               A
            \         /
               \   /
     P-----------E-----O-----Q   (PQ is diameter)
               /   \
            /         \
         B               D
  (Chords AB and CD intersect at E.
   Given ∠AEQ = ∠DEQ: EA and ED incline
   equally to diameter EQ.)
```

**Given:** Chords $AB$ and $CD$ intersect at $E$; diameter $PQ$ passes through $E$; $\angle AEQ = \angle DEQ$.
**To prove:** $AB = CD$.

**Construction:** Drop $OL \perp AB$ and $OM \perp CD$ from centre $O$.

**Proof:** In $\triangle OLE$ and $\triangle OME$:

| Statement | Reason |
|---|---|
| $\angle OLE = \angle OME = 90^\circ$ | Construction |
| $\angle LEO = \angle MEO$ | Given ($\angle AEQ = \angle DEQ$) |
| $OE = OE$ | Common side |
| $\triangle OLE \cong \triangle OME$ | AAS criterion |
| $OL = OM$ | CPCT |
| $AB = CD$ | Converse of "equal chords are equidistant from the centre" |

**Hence proved.**

---

## Common Pitfalls to Avoid

1. **Mistake 1: Plugging the *full* chord into Pythagoras instead of the *half*-chord.**
   Remember $r^2 = (\mathbf{\text{half-chord}})^2 + d^2$. Using $16^2$ in Example 1 gives $100 - 256 < 0$! Always halve the chord first.

2. **Mistake 2: Measuring a chord's distance from the centre to its endpoint.**
   The distance of a chord from the centre is measured **perpendicularly** ($OM \perp AB$). Segment $OA$ is the radius, not the chord's distance.

3. **Mistake 3: Assuming a perpendicular from *any* point bisects a chord.**
   Only a perpendicular dropped **from the centre** is guaranteed to bisect the chord.

4. **Mistake 4: Calling arcs of equal degree measure congruent when the circles have different sizes.**
   A $60^\circ$ arc on a saucer and a $60^\circ$ arc on a dinner plate are **not** congruent. The condition "same circle or congruent circles" is mandatory.

5. **Mistake 5: Giving only one case for two parallel chords.**
   Unless the problem tells you whether the chords are on the same side or opposite sides of the centre, calculate **both** $|d_2 - d_1|$ (same side) and $d_1 + d_2$ (opposite sides).

6. **Mistake 6: Thinking a circle can pass through three collinear points.**
   For three collinear points, the perpendicular bisectors are parallel and never meet — no circle can pass through all three.

7. **Mistake 7: Mixing up SSS and SAS between the chord-angle theorem and its converse.**
   - Equal chords $\implies$ equal central angles uses **SSS**.
   - Equal central angles $\implies$ equal chords uses **SAS**.
   Always look at what is *given* to choose the right criterion.

---

## Quick Recap

- **Congruent circles:** equal radii (regardless of where their centres sit).
- **Congruent arcs:** equal degree measures **in the same circle or congruent circles**.
- **Equal chords $\iff$ equal central angles:** proved by **SSS** (forward) and **SAS** (converse).
- **In the same circle:** equal chords $\iff$ congruent (minor) arcs.
- **Perpendicular from centre to chord:** bisects the chord (proved by **RHS**).
- **Converse:** the line from the centre to a chord's midpoint is perpendicular to the chord (proved by **SSS** + linear pair).
- **Three non-collinear points:** determine **one and only one** circle, centred at the circumcentre.
- **Equal chords $\iff$ equidistant from the centre:** proved by **RHS**.
- **Key numerical formula:** $r^2 = (\text{half-chord})^2 + d^2$.
- **Longer chords sit closer to the centre**; the diameter is the longest chord ($d = 0$).

---

## Practice Questions

1. State whether each statement is true or false. Give a reason.
   (a) Two circles of radius $4\text{ cm}$ are congruent.
   (b) Any two arcs of $60^\circ$ are congruent.
   (c) The perpendicular from the centre of a circle to a chord bisects the chord.
   (d) A circle can be drawn through three collinear points.

2. A chord of length $24\text{ cm}$ is drawn in a circle of radius $13\text{ cm}$. Find the distance of the chord from the centre.

3. A chord of a circle of radius $10\text{ cm}$ is at a distance of $8\text{ cm}$ from the centre. Find the length of the chord.

4. A chord of length $8\text{ cm}$ is at a distance of $3\text{ cm}$ from the centre of a circle. Find the radius of the circle.

5. $AB$ and $CD$ are two parallel chords of a circle of radius $13\text{ cm}$, with $AB = 10\text{ cm}$ and $CD = 24\text{ cm}$. Find the distance between the chords if they lie (a) on the same side of the centre, (b) on opposite sides of the centre.

6. $AB$ and $CD$ are equal chords of a circle with centre $O$. If $\angle AOB = 75^\circ$, find $\angle COD$. Give a reason.

7. Two circles intersect at two points $A$ and $B$. Prove that the line joining their centres is the perpendicular bisector of the common chord $AB$.

8. Two circles of radii $10\text{ cm}$ and $17\text{ cm}$ intersect at two points, and their common chord is $16\text{ cm}$ long. Find the distance between their centres, if the centres lie on opposite sides of the common chord.

9. Prove that equal chords of congruent circles subtend equal angles at their centres.

### Answers

1. (a) **True** ✅. Their radii are equal, so the circles are congruent.
   (b) **False** ❌. This holds only in the same circle or congruent circles; in circles of different radii, $60^\circ$ arcs have different lengths.
   (c) **True** ✅. By the theorem on perpendiculars from the centre to a chord.
   (d) **False** ❌. For collinear points, the perpendicular bisectors are parallel and never intersect to give a centre.

2. Half-chord $= 12\text{ cm}$. $d^2 = 13^2 - 12^2 = 169 - 144 = 25 \implies \mathbf{d = 5\text{ cm}}$.
   Check: $5^2 + 12^2 = 25 + 144 = 169$ ✅.

3. $(\text{half-chord})^2 = 10^2 - 8^2 = 100 - 64 = 36 \implies \text{half-chord} = 6\text{ cm} \implies \mathbf{\text{Chord} = 12\text{ cm}}$.

4. Half-chord $= 4\text{ cm}$. $r^2 = 4^2 + 3^2 = 25 \implies \mathbf{r = 5\text{ cm}}$.

5. Distance of $AB$: half $= 5$, $d_1^2 = 169 - 25 = 144 \implies d_1 = 12\text{ cm}$.
   Distance of $CD$: half $= 12$, $d_2^2 = 169 - 144 = 25 \implies d_2 = 5\text{ cm}$.
   (a) Same side: $12 - 5 = \mathbf{7\text{ cm}}$.
   (b) Opposite sides: $12 + 5 = \mathbf{17\text{ cm}}$.

6. **$\angle COD = 75^\circ$.** Reason: equal chords of a circle subtend equal angles at the centre.

7. **Given:** Two circles with centres $O_1$ and $O_2$ intersecting at $A$ and $B$.
   **To prove:** Line $O_1O_2$ is the perpendicular bisector of $AB$.
   **Proof:** Join $O_1A, O_1B, O_2A, O_2B$.

   | Statement | Reason |
   |---|---|
   | $O_1A = O_1B$ | Radii of the first circle |
   | $O_2A = O_2B$ | Radii of the second circle |
   | $O_1O_2 = O_1O_2$ | Common side |
   | $\triangle O_1AO_2 \cong \triangle O_1BO_2$ | SSS criterion |
   | $\angle AO_1O_2 = \angle BO_1O_2$ | CPCT |

   Now let $O_1O_2$ meet $AB$ at $M$. In $\triangle AO_1M$ and $\triangle BO_1M$:

   | Statement | Reason |
   |---|---|
   | $O_1A = O_1B$ | Radii |
   | $\angle AO_1M = \angle BO_1M$ | Proved above |
   | $O_1M = O_1M$ | Common side |
   | $\triangle AO_1M \cong \triangle BO_1M$ | SAS criterion |
   | $AM = BM$ | CPCT |
   | $\angle AMO_1 = \angle BMO_1$ | CPCT |
   | $\angle AMO_1 + \angle BMO_1 = 180^\circ$ | Linear pair |
   | $\angle AMO_1 = 90^\circ$ | From the two lines above |

   Since $AM = BM$ and $\angle AMO_1 = 90^\circ$, $O_1O_2$ is the **perpendicular bisector** of $AB$. **Hence proved.**

8. Common chord $AB = 16\text{ cm}$, so half-chord $AM = 8\text{ cm}$ (by Question 7, $M$ is the midpoint of $AB$ and $O_1O_2 \perp AB$).
   - From circle of radius $10$: $O_1M^2 = 100 - 64 = 36 \implies O_1M = 6\text{ cm}$
   - From circle of radius $17$: $O_2M^2 = 289 - 64 = 225 \implies O_2M = 15\text{ cm}$
   Since the centres lie on opposite sides of $AB$: $O_1O_2 = 6 + 15 = \mathbf{21\text{ cm}}$.

9. **Given:** Two congruent circles with centres $O$ and $O'$, with equal chords $AB$ in the first circle and $CD$ in the second ($AB = CD$).
   **To prove:** $\angle AOB = \angle CO'D$.

   | Statement | Reason |
   |---|---|
   | $OA = O'C$ | Radii of congruent circles are equal |
   | $OB = O'D$ | Radii of congruent circles are equal |
   | $AB = CD$ | Given |
   | $\triangle AOB \cong \triangle CO'D$ | SSS criterion |
   | $\angle AOB = \angle CO'D$ | CPCT |

   **Hence proved.**

---

Well done! You now know *why* the longest slice across a flatbread passes through the centre and why equal chords sit equally far from the centre. Behind every theorem stood our familiar allies: SSS, SAS, RHS, and CPCT. Picture Grandma Elena's kitchen whenever you need a reminder!

**In the next topic (Topic 4):** How does the angle an arc subtends at the **centre** compare with the angle it subtends at a point on the **circumference**? And what special angle property appears when all four vertices of a quadrilateral sit right on a circle?
