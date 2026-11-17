# Chapter: Constructions (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [constructions.md](constructions.md)** (which covers Topic 1: geometry box tools, drawing and copying line segments, constructing a perpendicular bisector with a compass, and dividing a segment into $2$ or $4$ equal parts).
> **Prior knowledge:** For types of angles (acute, right, obtuse, straight), see [lines-and-angles.md](../lines-and-angles/lines-and-angles.md). For triangle congruence (SSS), see [congruence-of-triangles-part2.md](../congruence-of-triangles/congruence-of-triangles-part2.md).
> **Topics covered in this file:**
> 2. Constructing Angles

---

# Topic 2: Constructing Angles

In Topic 1, we saw how much a compass and ruler can accomplish: drawing segments, copying them, constructing perpendicular bisectors, and splitting segments into equal parts. Everything there was about **lengths**, just like Leo finding the exact midpoint of the camp rope. Now we turn to **angles**: how to build an angle without a protractor, how to cut any angle in half, and how to copy an angle exactly — all with the same two tools, a compass and a ruler.

---

## Maya and Liam's Paper Decorations

Ahead of the winter arts festival, Maya and Liam were crafting geometric paper stars, garlands, and folded lanterns from colourful cardstock. Maya held up a template and said, "I need this corner angle to be **exactly $60^\circ$**, or the star's points will come out crooked."

Liam opened his geometry box. Inside were a ruler and a compass — **but his protractor was missing**.

"What do we do now?" Maya asked.

Liam thought for a second. "We need a shape whose three angles are automatically equal. That is an **equilateral triangle**! All three sides are equal, so all three angles are equal, and since they add up to $180^\circ$, each angle is $60^\circ$."

Maya's eyes lit up. "So if I construct an equilateral triangle with my compass, one of its corners gives me $60^\circ$!"

Then she asked, "And what if I need **$30^\circ$**?" Liam replied immediately, "Just **bisect** the $60^\circ$ angle." Later, when Liam needed a **$45^\circ$** corner, he first built $90^\circ$ and cut it in half.

In this topic, we will master every technique Maya and Liam used: constructing $60^\circ$, bisecting angles, and combining these ideas to build $15^\circ, 75^\circ, 105^\circ, 135^\circ$, and more.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Vertex** | The point where the two arms of an angle meet | Vertex $B$ in $\angle ABC$ |
| **Arm** | Either of the two straight rays forming an angle | Rays $BA$ and $BC$ |
| **Arc** | A curved portion of a circle drawn with a compass | A $4\text{ cm}$ arc centred at $B$ |
| **Radius (compass opening)** | The fixed distance between the compass needle and the pencil tip | $4\text{ cm}$ |
| **Angle bisector** | A ray that divides an angle into two equal angles | Ray $BX$ bisecting $\angle ABC$ |
| **Protractor** | A semicircular instrument marked from $0^\circ$ to $180^\circ$ for measuring angles | Standard tool in a geometry box |
| **Chord** | A straight line segment joining two points on an arc or circle | Segment $PQ$ joining $P$ and $Q$ on an arc |

---

## Part A: Drawing an Angle with a Protractor (A Quick Refresher)

Using a protractor is straightforward as long as you read it carefully. Suppose we want to draw $\angle ABC = 70^\circ$.

**Step 1:** Use a ruler to draw a ray $BC$ ($B$ as the endpoint, $C$ along the ray).

**Step 2:** Place the **centre mark** of the protractor directly on point $B$, and align the protractor's **baseline** neatly along ray $BC$.

**Step 3:** Notice which direction ray $BC$ points. A protractor has two scales: an **outer scale** and an **inner scale**. Always read the scale whose **$0^\circ$ mark lies on ray $BC$**. If ray $BC$ points to the right, use the scale starting at $0^\circ$ on the right, and count up from $0^\circ$ to **$70^\circ$**.

**Step 4:** Make a tiny, crisp dot at the $70^\circ$ mark and label it $A$.

**Step 5:** Use a ruler to join $B$ and $A$, forming ray $BA$.

> **Figure 2.1** – Ray $BC$ is horizontal and $70^\circ$ is measured at $B$ using a protractor to mark point $A$; ray $BA$ forms $\angle ABC = 70^\circ$.

**Check:** Place the protractor back on $B$ with $0^\circ$ along $BC$, and verify that $BA$ passes cleanly through $70^\circ$ ✅. If you read the wrong scale by mistake, you will see $110^\circ$ instead of $70^\circ$ ($70 + 110 = 180$). Always check where $0^\circ$ sits first!

A protractor has one drawback: its tick marks are fairly thick, so small inaccuracies easily sneak in. Compass constructions are far more **exact**. From here on, we will use the protractor only to **verify** our compass work.

---

## Part B: Bisecting an Angle (Angle Bisector)

Suppose we are given an angle $\angle ABC$ (of any measure, say $80^\circ$) and want to divide it into two equal halves.

**Step 1:** With centre $B$ and any convenient radius (say $4\text{ cm}$), draw an arc cutting ray $BA$ at $P$ and ray $BC$ at $Q$.

**Step 2:** With centre $P$ and a radius **greater than half of $PQ$** (say $3\text{ cm}$), draw an arc inside the angle.

**Step 3:** With centre $Q$ and the **exact same radius ($3\text{ cm}$)**, draw another arc inside the angle to intersect the previous arc at point $X$.

**Step 4:** Use a ruler to join $B$ and $X$, forming ray $BX$. Ray $BX$ is the angle bisector of $\angle ABC$.

> **Figure 2.2** – An arc centred at $B$ cuts arms $BA$ and $BC$ of $\angle ABC$ at $P$ and $Q$; equal-radius arcs from $P$ and $Q$ meet at $X$, and ray $BX$ bisects $\angle ABC$ into $\angle ABX$ and $\angle XBC$.

### Why Does It Work?

Look at $\triangle BPX$ and $\triangle BQX$:
- $BP = BQ$ (radii of the same arc centred at $B$)
- $PX = QX$ (arcs drawn with the exact same radius)
- $BX = BX$ (common side)

Since all three pairs of sides are equal, $\triangle BPX \cong \triangle BQX$ by **SSS**. Corresponding angles of congruent triangles are equal, so $\angle PBX = \angle QBX$. Thus, ray $BX$ bisects $\angle ABC$. (The SSS criterion was proved in [congruence-of-triangles-part2.md](../congruence-of-triangles/congruence-of-triangles-part2.md).)

**Check:** Measure $\angle ABC$ with a protractor (e.g., $80^\circ$), then measure $\angle ABX$ and $\angle XBC$. Each should read $40^\circ$, and $40^\circ + 40^\circ = 80^\circ$ ✅.

---

## Part C: Constructing $60^\circ$ (Maya's Star)

Draw a ray $BC$. We will construct $\angle QBC = 60^\circ$.

**Step 1:** Use a ruler to draw ray $BC$.

**Step 2:** With centre $B$ and radius **$4\text{ cm}$**, draw an arc cutting ray $BC$ at point $P$, sweeping well up above the ray.

**Step 3:** Keep the compass opening at **$4\text{ cm}$**. With centre $P$ and radius **$4\text{ cm}$**, draw an arc cutting the first arc at point $Q$.

**Step 4:** Use a ruler to join $B$ and $Q$, forming ray $BQ$.

> **Figure 2.3** – An arc of radius $4\text{ cm}$ centred at $B$ cuts ray $BC$ at $P$, and a $4\text{ cm}$ arc centred at $P$ cuts the first arc at $Q$; ray $BQ$ makes $\angle QBC = 60^\circ$ and $\triangle BPQ$ is equilateral.

### Why Is It Always $60^\circ$?

- $BP = BQ = 4\text{ cm}$ (both are radii of the arc centred at $B$)
- $PQ = 4\text{ cm}$ (radius of the arc centred at $P$)

All three sides of $\triangle BPQ$ are equal, so it is an **equilateral triangle**. All three angles of an equilateral triangle are equal, and the angle sum of any triangle is $180^\circ$ (see [triangles-part2.md](../triangles/triangles-part2.md)). Therefore, each angle is $180^\circ \div 3 = \mathbf{60^\circ}$. Hence $\angle PBQ = 60^\circ$, and since $P$ lies on ray $BC$, $\angle QBC = 60^\circ$.

**Check:** Measure $\angle QBC$ with a protractor: it should read $60^\circ$. Measure $BQ$ and $PQ$ with a ruler: both should be $4\text{ cm}$ ✅.

---

## Part D: $30^\circ$, $120^\circ$, $90^\circ$, and $45^\circ$

Now for the fun part: building new angles from the ones we already know.

### $30^\circ$ (Bisect $60^\circ$)

**Step 1:** Repeat Figure 2.3: draw ray $BC$, swing a $4\text{ cm}$ arc from $B$ to cut $BC$ at $P$, and swing a $4\text{ cm}$ arc from $P$ to cut the first arc at $Q$.

**Step 2:** With centre $P$ and radius **$3\text{ cm}$**, draw an arc inside the angle.

**Step 3:** With centre $Q$ and the **same radius $3\text{ cm}$**, draw an arc cutting the previous arc at point $X$. (Since $PQ = 4\text{ cm}$, half is $2\text{ cm}$, and $3\text{ cm} > 2\text{ cm}$, the arcs will intersect.)

**Step 4:** Join $B$ and $X$ to form ray $BX$.

> **Figure 2.4** – From points $P$ and $Q$ of $\angle QBC = 60^\circ$, equal $3\text{ cm}$ arcs intersect at $X$; ray $BX$ bisects $60^\circ$ to give $\angle XBC = 30^\circ$.

**Check:** By Part B, ray $BX$ bisects $\angle QBC$, so $\angle XBC = 60^\circ \div 2 = 30^\circ$ ✅. A protractor confirms $30^\circ$.

### $120^\circ$ (Two $60^\circ$ Angles Side by Side)

**Step 1:** Draw ray $BC$.

**Step 2:** With centre $B$ and radius **$4\text{ cm}$**, draw a long arc (nearly a semicircle) cutting $BC$ at $P$.

**Step 3:** With centre $P$ and radius **$4\text{ cm}$**, draw an arc cutting the first arc at $Q$.

**Step 4:** With centre $Q$ and radius **$4\text{ cm}$**, draw an arc cutting the first arc further along at $R$.

**Step 5:** Join $B$ and $R$ to form ray $BR$.

> **Figure 2.5** – Along a $4\text{ cm}$ arc centred at $B$, $P$ is marked on $BC$, then $Q$ from $P$, and $R$ from $Q$ (all with radius $4\text{ cm}$); ray $BR$ gives $\angle RBC = 120^\circ$.

**Why?** Both $\angle PBQ = 60^\circ$ and $\angle QBR = 60^\circ$ (corners of equilateral triangles). Placing them side by side gives $\angle RBC = 60^\circ + 60^\circ = \mathbf{120^\circ}$.

### $90^\circ$ (Bisecting Between $60^\circ$ and $120^\circ$)

This is the standard compass construction for $90^\circ$. We mark $60^\circ$ and $120^\circ$ on the same arc, then bisect the $60^\circ$ angle between them.

**Step 1:** Draw ray $BC$. With centre $B$ and radius **$4\text{ cm}$**, draw an arc cutting $BC$ at $P$.

**Step 2:** With centre $P$ and radius **$4\text{ cm}$**, cut the arc at $Q$ ($\angle QBC = 60^\circ$).

**Step 3:** With centre $Q$ and radius **$4\text{ cm}$**, cut the arc at $R$ ($\angle RBC = 120^\circ$).

**Step 4:** With centre $Q$ and radius **$3\text{ cm}$**, draw an arc. Then with centre $R$ and the **same radius $3\text{ cm}$**, draw another arc cutting it at point $S$.

**Step 5:** Join $B$ and $S$ to form ray $BS$.

> **Figure 2.6** – On a $4\text{ cm}$ arc centred at $B$, points $P, Q, R$ mark $0^\circ, 60^\circ, 120^\circ$ from ray $BC$; $3\text{ cm}$ arcs from $Q$ and $R$ meet at $S$, so ray $BS$ bisects $\angle QBR$ to give $\angle SBC = 90^\circ$.

**Why is it $90^\circ$?** $\angle QBR = 120^\circ - 60^\circ = 60^\circ$. Ray $BS$ bisects it, so $\angle QBS = 30^\circ$. Therefore, $\angle SBC = \angle QBC + \angle QBS = 60^\circ + 30^\circ = \mathbf{90^\circ}$.

**Check:** A protractor reads $\angle SBC = 90^\circ$, and the square corner of a set square fits cleanly along $BC$ and $BS$ ✅.

### $45^\circ$ (Bisect $90^\circ$)

**Step 1:** Construct $90^\circ$ as above (Steps 1–5). Let ray $BS$ cut the $4\text{ cm}$ arc at point $T$ ($BT = 4\text{ cm}$).

**Step 2:** With centre $P$ and radius **$4\text{ cm}$**, draw an arc inside the angle.

**Step 3:** With centre $T$ and the **same radius $4\text{ cm}$**, draw an arc cutting the previous arc at point $U$. (These two arcs also meet at $B$; $U$ is the other intersection away from $B$, inside the angle. Note that $PT \approx 5.7\text{ cm}$, so half is about $2.9\text{ cm}$, and $4\text{ cm}$ is plenty.)

**Step 4:** Join $B$ and $U$ to form ray $BU$.

> **Figure 2.7** – The $90^\circ$ ray $BS$ cuts the $4\text{ cm}$ arc centred at $B$ at $T$; $4\text{ cm}$ arcs from $P$ and $T$ intersect at $U$, and ray $BU$ bisects $\angle TBC$ to produce $\angle UBC = 45^\circ$.

**Why?** Ray $BU$ bisects $\angle SBC = 90^\circ$, so $\angle UBC = 90^\circ \div 2 = \mathbf{45^\circ}$.

**Check:** Measure $\angle UBC$ with a protractor: $45^\circ$. ✅

---

## Part E: Composite Angles

So far, we can build rays at $0^\circ, 60^\circ, 90^\circ, 120^\circ$, and $180^\circ$ (a straight line). By bisecting the gaps **between** these rays, we unlock a whole family of new angles. Let us construct them all on the same $4\text{ cm}$ arc centred at $B$.

### $15^\circ$ (Bisect $30^\circ$)

**Step 1:** Draw ray $BC$. With centre $B$ and radius **$4\text{ cm}$**, draw an arc cutting $BC$ at $P$.

**Step 2:** With centre $P$ and radius **$4\text{ cm}$**, cut the arc at $Q$.

**Step 3:** With centres $P$ and $Q$ and radius **$3\text{ cm}$**, draw arcs intersecting at $X$. Draw ray $BX$ ($30^\circ$), and let it cut the first arc at point $Y$.

**Step 4:** With centre $P$ and radius **$3\text{ cm}$**, draw an arc. With centre $Y$ and the **same radius $3\text{ cm}$**, draw an arc cutting it at point $Z$. ($PY \approx 2.1\text{ cm}$, half is $\approx 1.05\text{ cm}$, so $3\text{ cm}$ is well above half.)

**Step 5:** Join $B$ and $Z$ to form ray $BZ$.

> **Figure 2.8** – The $30^\circ$ ray $BX$ cuts the $4\text{ cm}$ arc at $Y$; $3\text{ cm}$ arcs from $P$ and $Y$ meet at $Z$, and ray $BZ$ gives $\angle ZBC = 15^\circ$.

**Why?** $\angle XBC = 30^\circ$, and $BZ$ bisects it, so $\angle ZBC = 30^\circ \div 2 = \mathbf{15^\circ}$.

### $75^\circ$ ($60^\circ + 15^\circ$)

Idea: The gap between the $60^\circ$ ray and the $90^\circ$ ray is $90^\circ - 60^\circ = 30^\circ$. Bisecting that gap gives $15^\circ$, and $60^\circ + 15^\circ = 75^\circ$.

**Step 1:** Draw ray $BC$. With centre $B$ and radius **$4\text{ cm}$**, cut $BC$ at $P$.

**Step 2:** With centre $P$ and radius **$4\text{ cm}$**, cut the arc at $Q$ ($60^\circ$).

**Step 3:** With centre $Q$ and radius **$4\text{ cm}$**, cut the arc at $R$ ($120^\circ$).

**Step 4:** With centres $Q$ and $R$ and radius **$3\text{ cm}$**, draw arcs meeting at $S$. Draw ray $BS$ ($90^\circ$), cutting the first arc at $T$.

**Step 5:** With centres $Q$ and $T$ and radius **$3\text{ cm}$**, draw arcs meeting at point $V$.

**Step 6:** Join $B$ and $V$ to form ray $BV$.

> **Figure 2.9** – On the $4\text{ cm}$ arc centred at $B$, $Q$ ($60^\circ$) and $T$ ($90^\circ$) are marked; $3\text{ cm}$ arcs from $Q$ and $T$ meet at $V$, and ray $BV$ forms $\angle VBC = 75^\circ$.

**Why?** $\angle QBT = 90^\circ - 60^\circ = 30^\circ$. Ray $BV$ bisects it, so $\angle QBV = 15^\circ$. Hence $\angle VBC = \angle QBC + \angle QBV = 60^\circ + 15^\circ = \mathbf{75^\circ}$. (Equivalently, $90^\circ - 15^\circ = 75^\circ$.)

### $105^\circ$ ($90^\circ + 15^\circ$)

Idea: The gap between the $90^\circ$ ray and the $120^\circ$ ray is $120^\circ - 90^\circ = 30^\circ$. Bisecting it gives $15^\circ$, and $90^\circ + 15^\circ = 105^\circ$.

**Steps 1–4:** Follow Steps 1–4 of the $75^\circ$ construction to mark $P, Q, R, S$, and $T$ (where $T$ is where the $90^\circ$ ray $BS$ crosses the $4\text{ cm}$ arc).

**Step 5:** With centres $T$ and $R$ and radius **$3\text{ cm}$**, draw arcs meeting at point $U$.

**Step 6:** Join $B$ and $U$ to form ray $BU$.

> **Figure 2.10** – On the $4\text{ cm}$ arc centred at $B$, $T$ ($90^\circ$) and $R$ ($120^\circ$) are marked; $3\text{ cm}$ arcs from $T$ and $R$ meet at $U$, and ray $BU$ forms $\angle UBC = 105^\circ$.

**Why?** $\angle TBR = 120^\circ - 90^\circ = 30^\circ$. Ray $BU$ bisects it, so $\angle TBU = 15^\circ$. Thus $\angle UBC = \angle TBC + \angle TBU = 90^\circ + 15^\circ = \mathbf{105^\circ}$.

### $135^\circ$ ($90^\circ + 45^\circ$)

Idea: The gap between the $90^\circ$ ray and the straight line ($180^\circ$) is also $90^\circ$. Bisecting it gives $45^\circ$, and $90^\circ + 45^\circ = 135^\circ$.

**Step 1:** Draw a straight line $DC$ and mark a point $B$ near its middle ($C$ on the right, $D$ on the left).

**Step 2:** With centre $B$ and radius **$4\text{ cm}$**, draw a semicircle above $DC$ cutting $BC$ at $P$ and $BD$ at $N$.

**Step 3:** With centre $P$ and radius **$4\text{ cm}$**, cut the semicircle at $Q$; then with centre $Q$ and radius **$4\text{ cm}$**, cut it at $R$.

**Step 4:** With centres $Q$ and $R$ and radius **$3\text{ cm}$**, find $S$ and draw ray $BS$ ($90^\circ$), cutting the semicircle at $T$.

**Step 5:** With centres $T$ and $N$ and radius **$4\text{ cm}$**, draw arcs meeting at point $W$ (choose the intersection away from $B$; since $TN \approx 5.7\text{ cm}$, half is $\approx 2.9\text{ cm}$, so $4\text{ cm}$ works cleanly).

**Step 6:** Join $B$ and $W$ to form ray $BW$.

> **Figure 2.11** – Straight line $DC$ with point $B$ in the middle; a $4\text{ cm}$ semicircle centred at $B$ marks $P, N$ on the line and $T$ on the $90^\circ$ ray $BS$; $4\text{ cm}$ arcs from $T$ and $N$ meet at $W$, giving $\angle WBC = 135^\circ$.

**Why?** $\angle TBN = 180^\circ - 90^\circ = 90^\circ$. Ray $BW$ bisects it, so $\angle TBW = 45^\circ$. Hence $\angle WBC = \angle TBC + \angle TBW = 90^\circ + 45^\circ = \mathbf{135^\circ}$.

### Which Angle Is Built How (At a Glance)

| Angle | How to construct it | Reference |
|---|---|---|
| $60^\circ$ | Equilateral triangle with two $4\text{ cm}$ arcs | Figure 2.3 |
| $120^\circ$ | Two $60^\circ$ steps in a row | Figure 2.5 |
| $30^\circ$ | Bisect $60^\circ$ | Figure 2.4 |
| $90^\circ$ | Bisect between $60^\circ$ and $120^\circ$ | Figure 2.6 |
| $45^\circ$ | Bisect $90^\circ$ | Figure 2.7 |
| $15^\circ$ | Bisect $30^\circ$ | Figure 2.8 |
| $22\frac{1}{2}^\circ$ | Bisect $45^\circ$ | Figure 2.14 |
| $75^\circ$ | $60^\circ + 15^\circ$: bisect between $60^\circ$ and $90^\circ$ | Figure 2.9 |
| $105^\circ$ | $90^\circ + 15^\circ$: bisect between $90^\circ$ and $120^\circ$ | Figure 2.10 |
| $135^\circ$ | $90^\circ + 45^\circ$: bisect between $90^\circ$ and $180^\circ$ | Figure 2.11 |
| $150^\circ$ | $180^\circ - 30^\circ$: bisect between $120^\circ$ and $180^\circ$ | Figure 2.13 |

---

## Part F: Copying a Given Angle

Suppose you are given an arbitrary angle $\angle ABC$ and need to draw an **exact copy** of it at point $E$ on a new ray $EF$ — without a protractor.

**Step 1:** In the given $\angle ABC$, with centre $B$ and radius **$3\text{ cm}$**, draw an arc cutting ray $BA$ at $P$ and ray $BC$ at $Q$.

**Step 2:** Elsewhere on your page, draw a new ray $EF$.

**Step 3:** With centre $E$ and the **same radius $3\text{ cm}$**, draw a sweeping arc cutting ray $EF$ at $R$ and continuing well above $EF$.

**Step 4:** Place the compass needle at $Q$ and adjust the opening until the pencil tip touches $P$. This captures the **chord length $PQ$**. Lift the compass carefully without changing this opening.

**Step 5:** With centre $R$ and radius **equal to $PQ$**, draw an arc cutting the arc from Step 3 at point $S$.

**Step 6:** Join $E$ and $S$ to form ray $ES$.

> **Figure 2.12** – In the given $\angle ABC$, a $3\text{ cm}$ arc centred at $B$ marks $P$ on $BA$ and $Q$ on $BC$; on ray $EF$, a $3\text{ cm}$ arc centred at $E$ marks $R$, and an arc of radius $PQ$ centred at $R$ locates $S$; ray $ES$ forms $\angle SEF = \angle ABC$.

### Why Does It Work?

Compare $\triangle BPQ$ and $\triangle ESR$:
- $BP = ES$ (both $3\text{ cm}$)
- $BQ = ER$ (both $3\text{ cm}$)
- $PQ = SR$ (compass was set directly to $PQ$)

By **SSS**, $\triangle BPQ \cong \triangle ESR$. Therefore $\angle PBQ = \angle SER$, meaning $\angle ABC = \angle SEF$.

**Check:** Measure both $\angle ABC$ and $\angle SEF$ with a protractor. They should match exactly ✅.

---

## Part G: Solving Maya and Liam's Problem

Back to the paper stars!

- **Maya's $60^\circ$:** Maya drew a ray $BC$ on her cardstock, swung a $4\text{ cm}$ arc from $B$ to mark $P$, swung a $4\text{ cm}$ arc from $P$ to mark $Q$, and joined $BQ$. Since $\triangle BPQ$ was equilateral, $\angle QBC = 60^\circ$ (as in Figure 2.3).
- **Maya's $30^\circ$:** Using $3\text{ cm}$ arcs from $P$ and $Q$ meeting at $X$, she drew ray $BX$, cutting $60^\circ$ in half to get $\angle XBC = 30^\circ$ (Figure 2.4).
- **Liam's $45^\circ$:** Liam marked $P, Q, R$ ($0^\circ, 60^\circ, 120^\circ$) along a $4\text{ cm}$ arc, bisected between $Q$ and $R$ to obtain the $90^\circ$ ray $BS$, and then bisected $\angle SBC$ using arcs from $P$ and $T$ to get $\angle UBC = 45^\circ$ (Figure 2.7).

They cut their folded cardstock along these crisp rays, and every paper star came out perfectly symmetrical — using only a compass and a ruler.

---

## Part H: More Solved Constructions

### Construction 1: Construct $150^\circ$

Notice that $150^\circ = 180^\circ - 30^\circ$. Bisecting the $60^\circ$ gap between $120^\circ$ and $180^\circ$ gives $30^\circ$, and $120^\circ + 30^\circ = 150^\circ$.

**Step 1:** Draw a straight line $DC$ and mark point $B$ in the middle ($C$ to the right, $D$ to the left).

**Step 2:** With centre $B$ and radius **$4\text{ cm}$**, draw a semicircle above $DC$ cutting $BC$ at $P$ and $BD$ at $N$.

**Step 3:** With centre $P$ and radius **$4\text{ cm}$**, mark $Q$ on the semicircle; with centre $Q$ and radius **$4\text{ cm}$**, mark $R$ ($120^\circ$).

**Step 4:** With centres $R$ and $N$ and radius **$3\text{ cm}$**, draw arcs intersecting at point $M$. ($RN = 4\text{ cm}$, half is $2\text{ cm}$, so $3\text{ cm} > 2\text{ cm}$.)

**Step 5:** Join $B$ and $M$ to form ray $BM$.

> **Figure 2.13** – On straight line $DC$, a $4\text{ cm}$ semicircle centred at $B$ gives $P, N$, and $4\text{ cm}$ steps locate $Q$ and $R$; $3\text{ cm}$ arcs from $R$ and $N$ meet at $M$, so ray $BM$ makes $\angle MBC = 150^\circ$.

**Check:** $\angle RBN = 180^\circ - 120^\circ = 60^\circ$, half is $30^\circ$, so $\angle MBN = 30^\circ$ and $\angle MBC = 180^\circ - 30^\circ = 150^\circ$ ✅. Also $120^\circ + 30^\circ = 150^\circ$ ✅.

### Construction 2: Construct $22\frac{1}{2}^\circ$

Notice that $22\frac{1}{2}^\circ = 45^\circ \div 2$.

**Step 1:** Draw ray $BC$. With centre $B$ and radius **$4\text{ cm}$**, draw an arc cutting $BC$ at $P$.

**Step 2:** With radius **$4\text{ cm}$**, mark $Q$ from $P$ and $R$ from $Q$.

**Step 3:** With centres $Q$ and $R$ and radius **$3\text{ cm}$**, find $S$ and draw ray $BS$ ($90^\circ$), cutting the $4\text{ cm}$ arc at $T$.

**Step 4:** With centres $P$ and $T$ and radius **$4\text{ cm}$**, find $U$ (away from $B$) and draw ray $BU$ ($45^\circ$), cutting the $4\text{ cm}$ arc at $W$.

**Step 5:** With centres $P$ and $W$ and radius **$3\text{ cm}$**, draw arcs intersecting at point $Y$. ($PW \approx 3.1\text{ cm}$, half is $\approx 1.5\text{ cm}$, so $3\text{ cm}$ is plenty.)

**Step 6:** Join $B$ and $Y$ to form ray $BY$.

> **Figure 2.14** – On the $4\text{ cm}$ arc centred at $B$, $P$, $T$ ($90^\circ$), and $W$ ($45^\circ$ on ray $BU$) are marked; $3\text{ cm}$ arcs from $P$ and $W$ meet at $Y$, giving $\angle YBC = 22\frac{1}{2}^\circ$.

**Check:** $90^\circ \div 2 = 45^\circ$, $45^\circ \div 2 = 22.5^\circ$. Reversing: $22.5 + 22.5 = 45$ ✅.

### Construction 3: Construct $37\frac{1}{2}^\circ$

Notice that $37\frac{1}{2}^\circ = 75^\circ \div 2$.

**Step 1:** Draw ray $BC$. With centre $B$ and radius **$4\text{ cm}$**, cut $BC$ at $P$.

**Step 2:** With radius **$4\text{ cm}$**, mark $Q$ from $P$ and $R$ from $Q$.

**Step 3:** With centres $Q$ and $R$ and radius **$3\text{ cm}$**, find $S$ and draw ray $BS$ ($90^\circ$), cutting the $4\text{ cm}$ arc at $T$.

**Step 4:** With centres $Q$ and $T$ and radius **$3\text{ cm}$**, find $V$ and draw ray $BV$ ($75^\circ$), cutting the $4\text{ cm}$ arc at $W$.

**Step 5:** With centres $P$ and $W$ and radius **$3\text{ cm}$**, draw arcs intersecting at point $Z$. ($PW \approx 4.9\text{ cm}$, half is $\approx 2.4\text{ cm}$, so $3\text{ cm}$ works.)

**Step 6:** Join $B$ and $Z$ to form ray $BZ$.

> **Figure 2.15** – On the $4\text{ cm}$ arc centred at $B$, $P$, $Q$ ($60^\circ$), $T$ ($90^\circ$), and $W$ ($75^\circ$ on ray $BV$) are marked; $3\text{ cm}$ arcs from $P$ and $W$ meet at $Z$, giving $\angle ZBC = 37\frac{1}{2}^\circ$.

**Check:** $60^\circ + 15^\circ = 75^\circ$, and $75^\circ \div 2 = 37.5^\circ$ ✅.

### Construction 4: Construct $67\frac{1}{2}^\circ$

Notice that $67\frac{1}{2}^\circ = 45^\circ + 22\frac{1}{2}^\circ$, which means bisecting the $45^\circ$ gap between the $45^\circ$ ray and the $90^\circ$ ray.

**Step 1:** Draw ray $BC$. With centre $B$ and radius **$4\text{ cm}$**, cut $BC$ at $P$.

**Step 2:** With radius **$4\text{ cm}$**, mark $Q$ from $P$ and $R$ from $Q$.

**Step 3:** With centres $Q$ and $R$ and radius **$3\text{ cm}$**, find $S$ and draw ray $BS$ ($90^\circ$), cutting the $4\text{ cm}$ arc at $T$.

**Step 4:** With centres $P$ and $T$ and radius **$4\text{ cm}$**, find $U$ (away from $B$) and draw ray $BU$ ($45^\circ$), cutting the $4\text{ cm}$ arc at $W$.

**Step 5:** With centres $W$ and $T$ and radius **$3\text{ cm}$**, draw arcs intersecting at point $Y$. ($WT \approx 3.1\text{ cm}$, half is $\approx 1.5\text{ cm}$, so $3\text{ cm}$ works.)

**Step 6:** Join $B$ and $Y$ to form ray $BY$.

> **Figure 2.16** – On the $4\text{ cm}$ arc centred at $B$, $P$, $W$ ($45^\circ$ on ray $BU$), and $T$ ($90^\circ$ on ray $BS$) are marked; $3\text{ cm}$ arcs from $W$ and $T$ meet at $Y$, giving $\angle YBC = 67\frac{1}{2}^\circ$.

**Check:** $\angle WBT = 90^\circ - 45^\circ = 45^\circ$, half is $22.5^\circ$. So $\angle YBC = 45^\circ + 22.5^\circ = 67.5^\circ$ ✅.

### Construction 5: Draw $110^\circ$ with a Protractor and Bisect It

**Step 1:** Using a protractor as in Part A, draw $\angle ABC = 110^\circ$ (place the centre at $B$, align $0^\circ$ along ray $BC$, and mark $A$ at $110^\circ$).

**Step 2:** With centre $B$ and radius **$4\text{ cm}$**, draw an arc cutting $BA$ at $P$ and $BC$ at $Q$.

**Step 3:** With centre $P$ and radius **$4\text{ cm}$**, draw an arc inside the angle.

**Step 4:** With centre $Q$ and the **same radius $4\text{ cm}$**, draw an arc cutting the previous arc at point $X$ (choose the point away from $B$). (Here $PQ \approx 6.5\text{ cm}$, so half is $\approx 3.3\text{ cm}$ — $3\text{ cm}$ would be too short, whereas $4\text{ cm}$ intersects cleanly.)

**Step 5:** Join $B$ and $X$ to form ray $BX$.

> **Figure 2.17** – In the protractor-drawn $\angle ABC = 110^\circ$, a $4\text{ cm}$ arc centred at $B$ marks $P$ on $BA$ and $Q$ on $BC$; $4\text{ cm}$ arcs from $P$ and $Q$ intersect at $X$, and ray $BX$ forms $\angle ABX = \angle XBC = 55^\circ$.

**Check:** Measure $\angle XBC$ and $\angle ABX$ with a protractor: both read $55^\circ$, and $55 + 55 = 110$ ✅.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Changing the compass opening mid-construction.**
   When building $60^\circ$, if you draw a $4\text{ cm}$ arc from $B$ and then a $5\text{ cm}$ arc from $P$, you get $BP = BQ = 4\text{ cm}$ while $PQ = 5\text{ cm}$. $\triangle BPQ$ is no longer equilateral, so the angle will not be $60^\circ$. **Whenever a step says "same radius", do not touch the compass opening.** Avoid closing and reopening the compass.

2. **Mistake 2: Drawing arcs too short to intersect.**
   In Step 2 of bisecting an angle, if your radius is **smaller** than half of $PQ$, the two arcs will miss each other completely. For example, if $PQ = 4\text{ cm}$ (half is $2\text{ cm}$) and you use $1.5\text{ cm}$, the arcs never cross. Always choose a radius **greater than half** (such as $3\text{ cm}$) and sweep each arc generously.

3. **Mistake 3: Using different radii from $P$ and $Q$ when bisecting.**
   If you draw a $3\text{ cm}$ arc from $P$ and a $4\text{ cm}$ arc from $Q$, they will intersect, but $X$ will not be equidistant from $P$ and $Q$ ($PX \neq QX$). Then SSS congruence fails and $BX$ will not bisect the angle. **Keep both arcs the exact same radius.**

4. **Mistake 4: Reading the wrong protractor scale.**
   If your ray points right and you read the scale whose $0^\circ$ is on the left, a $70^\circ$ angle gets read or marked as $110^\circ$ ($70 + 110 = 180$). Always confirm which scale has **$0^\circ$ resting on your ray** before counting.

5. **Mistake 5: Sweeping the initial base arc too briefly.**
   If you draw only a tiny stub from $B$, it will not reach $120^\circ$ or $90^\circ$, leaving you nowhere to mark $R$ or $T$. Sweep the first arc into a generous semicircle when constructing larger angles.

---

## Quick Recap

- When using a protractor, always read the scale whose **$0^\circ$ lies on the starting ray**.
- **Angle bisector:** draw an arc from $B$ (marking $P$ and $Q$), draw equal-radius arcs from $P$ and $Q$ (meeting at $X$), and join $BX$. Proved by **SSS** ($\triangle BPX \cong \triangle BQX$).
- **$60^\circ$:** two arcs of the same radius ($4\text{ cm}$) form an equilateral triangle, so each angle is $60^\circ$.
- **$120^\circ$:** two $60^\circ$ arcs in succession. **$30^\circ$:** bisect $60^\circ$. **$90^\circ$:** bisect between $60^\circ$ and $120^\circ$. **$45^\circ$:** bisect $90^\circ$.
- **$15^\circ$:** bisect $30^\circ$. **$22\frac{1}{2}^\circ$:** bisect $45^\circ$.
- **$75^\circ = 60^\circ + 15^\circ$**, **$105^\circ = 90^\circ + 15^\circ$**, **$135^\circ = 90^\circ + 45^\circ$**, **$150^\circ = 180^\circ - 30^\circ$**.
- **Copying an angle:** copy the arc radius and the chord length $PQ$; **SSS** guarantees equal angles.
- Avoid pitfalls: never alter the compass opening when equal radii are required, draw long arcs, use matching radii when bisecting, and double-check the protractor's $0^\circ$ scale.

---

## Practice Questions

1. Construct an angle of $60^\circ$ at point $B$ on ray $BC$ using only a compass and a ruler. Then bisect it. What do you expect a protractor to read for each part?

2. Construct an angle of $90^\circ$ without using a protractor or set square. Say in one line why your method gives $90^\circ$.

3. Construct an angle of $135^\circ$ and verify using the sum $90^\circ + 45^\circ$.

4. Construct an angle of $165^\circ$. (Hint: think of $150^\circ$ and what lies between $150^\circ$ and $180^\circ$.) Write the angle sum that proves it.

5. Using a protractor, draw $\angle ABC = 84^\circ$. Bisect it with compass and ruler. What should each half measure? Then copy one of the halves at point $E$ on a new ray $EF$.

6. Maya draws the $4\text{ cm}$ arc from $B$ to get $P$, but for the second arc she opens her compass to $5\text{ cm}$ and marks $Q$ from $P$. Will $\angle QBC$ be $60^\circ$? Give a reason.

7. State True or False:
   (a) To bisect an angle, the arcs from $P$ and $Q$ can have any radius, even smaller than half of $PQ$.
   (b) In an equilateral triangle each angle is $60^\circ$.
   (c) $75^\circ$ can be made by bisecting the angle between the $60^\circ$ ray and the $90^\circ$ ray, then adding it to $60^\circ$.
   (d) Bisecting $45^\circ$ gives $22\frac{1}{2}^\circ$.
   (e) A protractor reading of $70^\circ$ on the wrong scale can show $110^\circ$.

### Answers

1. Draw ray $BC$, swing a $4\text{ cm}$ arc from $B$ to mark $P$ on $BC$, swing a $4\text{ cm}$ arc from $P$ to mark $Q$ on the first arc, and draw ray $BQ$ ($\angle QBC = 60^\circ$). Next, draw $3\text{ cm}$ arcs from $P$ and $Q$ meeting at $X$, and draw ray $BX$. A protractor will read $60^\circ$ for the whole angle and $30^\circ$ for each half. Check: $30 + 30 = 60$ ✅.

2. Mark $P, Q, R$ ($0^\circ, 60^\circ, 120^\circ$) along a $4\text{ cm}$ arc centred at $B$ on ray $BC$. Draw $3\text{ cm}$ arcs from $Q$ and $R$ meeting at $S$, and draw ray $BS$. Since $\angle QBR = 120^\circ - 60^\circ = 60^\circ$ and $BS$ bisects it, $\angle QBS = 30^\circ$, giving $\angle SBC = 60^\circ + 30^\circ = 90^\circ$ ✅.

3. Follow Figure 2.11: draw straight line $DC$ with $B$ in the middle, swing a $4\text{ cm}$ semicircle from $B$ to mark $P$ on $BC$ and $N$ on $BD$, mark $Q$ ($60^\circ$) and $R$ ($120^\circ$), bisect between $Q$ and $R$ to get the $90^\circ$ ray $BS$ cutting the semicircle at $T$, and bisect $\angle TBN$ using $4\text{ cm}$ arcs from $T$ and $N$ meeting at $W$. Since $\angle TBN = 90^\circ$, half is $45^\circ$, so $\angle WBC = 90^\circ + 45^\circ = 135^\circ$ ✅.

4. First construct $150^\circ$ (Construction 1: ray $BM$). The gap between $150^\circ$ and $180^\circ$ is $180^\circ - 150^\circ = 30^\circ$. Bisect this $30^\circ$ gap using $3\text{ cm}$ arcs from $M$ and $N$ (where $N$ is on $BD$; $MN \approx 2.1\text{ cm}$, so half is $\approx 1\text{ cm}$) to draw ray $BK$. Half of $30^\circ$ is $15^\circ$, so $\angle KBC = 150^\circ + 15^\circ = \mathbf{165^\circ}$ (and $180^\circ - 15^\circ = 165^\circ$ ✅).

5. Each half measures $84^\circ \div 2 = \mathbf{42^\circ}$. Check: $42 + 42 = 84$ ✅. To copy one half: draw a $3\text{ cm}$ arc from $B$ cutting the arms of the $42^\circ$ angle at $P$ and $Q$; draw a $3\text{ cm}$ arc from $E$ cutting ray $EF$ at $R$; with centre $R$ and radius $PQ$, cut the arc at $S$; draw ray $ES$. By SSS, $\angle SEF = 42^\circ$.

6. **No.** Here $BP = BQ = 4\text{ cm}$ while $PQ = 5\text{ cm}$, so $\triangle BPQ$ is not equilateral and $\angle QBC$ will not be $60^\circ$. You only get $60^\circ$ when all three sides are equal, which requires keeping the same radius for both arcs.

7. (a) **False** ❌. The radius must be greater than half of $PQ$ (otherwise the arcs will not meet), and both arcs must use the same radius.
   (b) **True** ✅. All three angles are equal and sum to $180^\circ$, so each is $60^\circ$.
   (c) **True** ✅. $90^\circ - 60^\circ = 30^\circ$, half is $15^\circ$, and $60^\circ + 15^\circ = 75^\circ$.
   (d) **True** ✅. $45^\circ \div 2 = 22.5^\circ$.
   (e) **True** ✅. $70^\circ + 110^\circ = 180^\circ$; the two protractor scales are supplements of each other.

---

Maya and Liam discovered that an equilateral triangle and the power of halving an angle can replace a protractor almost completely. Whenever you need to construct an angle, ask yourself first: can I build it by bisecting or combining $60^\circ$ and $90^\circ$?

**What comes next?** Now we move from angles to lines. In Topic 3, we will learn how to drop a perpendicular from a point onto a line and how to construct a line parallel to a given line — all with our trusty compass and ruler.
