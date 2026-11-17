# Chapter: Constructions (Part 5)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [constructions-part4.md](constructions-part4.md).** (The chapter begins in [constructions.md](constructions.md).)
> **Topics covered in this file:**
> 5. Constructing Triangles (II): Sum, Difference of Sides, and Perimeter

---

# Topic 5: Constructing Triangles (II): Sum, Difference of Sides, and Perimeter

In Topic 4, we constructed triangles whenever their individual parts were handed to us directly: all three sides (SSS), two sides and the included angle (SAS), two angles and a side (ASA, AAS), or a right angle with hypotenuse and leg (RHS). We also saw why two sides must sum to more than the third side (why Sophia's $3\text{ m}, 4\text{ m}, 8\text{ m}$ truss failed) and why SSA cannot pin down a single triangle.

Now comes a fresh challenge: what if we are **not** told the individual side lengths, and instead are given their **sum**, their **difference**, or the triangle's entire **perimeter**? Can we still construct the triangle? Yes — and the secret is wonderfully elegant: we plot an **auxiliary point** and draw a **perpendicular bisector**. This topic covers three classic constructions.

---

## Elena's Pennants and Leo's Question

Elena was sewing triangular pennants for the school's annual Sports Day. For one pennant design, she had a piece of decorative border ribbon measuring **exactly $15\text{ cm}$** to trim all three edges — not a centimetre more, not a centimetre less.

Her son Leo watched from across the table and asked, "Mum, you do not know any of the triangle's individual side lengths yet. You only know the total ribbon length (the perimeter) and the two bottom angles. How can you possibly draw the pennant?"

Elena smiled. "There is a neat trick, Leo. Lay out the entire ribbon length as one straight segment, draw half-angles at its ends to locate the top vertex, and then use two perpendicular bisectors to fold that straight ribbon into the three sides of the triangle!"

Let us first master the simpler version of this trick — when only the **sum or difference of two sides** is given — and then we will build Elena's complete pennant.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Perimeter** | The total length around all three sides of a triangle | $AB + BC + CA = 15\text{ cm}$ |
| **Sum of sides** | The combined length of two sides | $AB + AC = 8\text{ cm}$ |
| **Difference of sides** | How much longer one side is than another | $AB - AC = 2\text{ cm}$ |
| **Perpendicular bisector** | A line crossing a segment at its midpoint at a $90^\circ$ angle | Perpendicular bisector of $DC$ |
| **Equidistant** | At equal distance from two points | Any point on the perpendicular bisector of $DC$ is equidistant from $D$ and $C$ |
| **Base angle** | Either of the two angles sitting at the endpoints of the base | $\angle B$ and $\angle C$ |
| **Opposite ray** | A ray extending in the exact reverse direction from the same endpoint | Extending ray $BX$ backward beyond $B$ |

---

## The Key Idea (Powering All Three Constructions)

Take any two points $D$ and $C$. Every single point on the perpendicular bisector of segment $DC$ is **equidistant** from $D$ and $C$. That means if vertex $A$ lies on that bisector, then **$AD = AC$**.

Throughout this topic, we use "$AD = AC$" again and again to fold one segment cleanly onto another!

---

## Part A: Base, One Base Angle, and the SUM of the Other Two Sides

**Question:** Construct $\triangle ABC$ given $BC = 5\text{ cm}$, $\angle B = 60^\circ$, and $AB + AC = 8\text{ cm}$.

### Construction

**Step 1:** Use a ruler to draw segment $BC = 5\text{ cm}$. Label $B$ and $C$.

**Step 2:** At $B$, use a protractor (or compass) to construct $\angle XBC = 60^\circ$ above $BC$, and draw a long ray $BX$.

**Step 3:** With centre $B$ and radius $8\text{ cm}$ (measured with a ruler), cut ray $BX$ at point $D$. Thus $BD = 8\text{ cm}$.

**Step 4:** Join $D$ and $C$ with a ruler to draw segment $DC$.

**Step 5:** Construct the perpendicular bisector of $DC$: with centre $D$ and radius $4\text{ cm}$, draw arcs on both sides of $DC$; with centre $C$ and the same radius $4\text{ cm}$, cut those arcs ($DC \approx 7\text{ cm}$, so half is $3.5\text{ cm}$, making $4\text{ cm}$ plenty). Join the two arc intersections to draw the bisector.

**Step 6:** Label the point where this perpendicular bisector cuts $BD$ (ray $BX$) as $A$. Join $A$ to $C$.

$\triangle ABC$ is complete.

> **Figure 5.1** – $\triangle ABC$ with base $BC = 5\text{ cm}$ and $\angle B = 60^\circ$; point $D$ on ray $BX$ satisfies $BD = 8\text{ cm}$; $A$ lies on $BD$ between $B$ and $D$, with $DC$ and its perpendicular bisector shown dashed, and $AC$ joined.

### Why Does It Work?

Since $A$ lies on the perpendicular bisector of $DC$, we have **$AD = AC$** (every point on the bisector is equidistant from $D$ and $C$).

Because $B, A, D$ lie in order along ray $BX$, $AB + AD = BD = 8\text{ cm}$.

Replacing $AD$ with $AC$ gives **$AB + AC = AB + AD = BD = 8\text{ cm}$**.

Since $\angle B = 60^\circ$ and $BC = 5\text{ cm}$ were constructed directly, $\triangle ABC$ satisfies every given condition.

*(Notice also that $\triangle ADC$ is isosceles because $AD = AC$; see [congruence-of-triangles-part3.md](../congruence-of-triangles/congruence-of-triangles-part3.md) for isosceles triangle properties.)*

### Check (Using Pythagoras' Theorem)

Let $AB = t$, and drop a perpendicular $AF$ from $A$ to $BC$. Since $\angle B = 60^\circ$, $\triangle ABF$ is half of an equilateral triangle of side $t$, so $BF = \frac{t}{2}$ and $AF^2 = t^2 - \frac{t^2}{4} = \frac{3t^2}{4}$. With $FC = 5 - \frac{t}{2}$, Pythagoras in $\triangle AFC$ gives:

$$AC^2 = \frac{3t^2}{4} + \left(5 - \frac{t}{2}\right)^2 = t^2 - 5t + 25$$

Since $AC = AD = 8 - t$, we also have $AC^2 = (8 - t)^2$:

$$t^2 - 5t + 25 = 64 - 16t + t^2 \implies 11t = 39$$

So **$AB = \frac{39}{11} \approx 3.55\text{ cm}$** and **$AC = 8 - \frac{39}{11} = \frac{49}{11} \approx 4.45\text{ cm}$**.

Check: $AB + AC = \frac{39}{11} + \frac{49}{11} = \frac{88}{11} = 8$ ✅.

Measure with a ruler: $AB \approx 3.5\text{ cm}$ and $AC \approx 4.5\text{ cm}$, summing to $8\text{ cm}$ ✅.

### When Is It Possible?

By the triangle inequality (Topic 4), a triangle exists only if **$AB + AC > BC$**. Here $8 > 5$, so vertex $A$ appears cleanly on $BD$. If the given sum were $5\text{ cm}$ or less (say $4\text{ cm}$), point $D$ would sit too close to $B$, and the bisector would miss ray $BX$ or cross it behind $B$ — no triangle could form.

**Rule: sum of the two sides $>$ base.**

---

## Part B: Base, One Base Angle, and the DIFFERENCE of the Other Two Sides

**Question:** Construct $\triangle ABC$ given $BC = 6\text{ cm}$, $\angle B = 45^\circ$, and a difference of $2\text{ cm}$ between $AB$ and $AC$.

### Case 1: $AB > AC$

Here $AB - AC = 2\text{ cm}$.

**Step 1:** Draw $BC = 6\text{ cm}$ with a ruler.

**Step 2:** At $B$, draw $\angle XBC = 45^\circ$ and extend ray $BX$.

**Step 3:** With centre $B$ and radius $2\text{ cm}$, cut ray $BX$ at point $D$, so $BD = 2\text{ cm}$.

**Step 4:** Join $D$ and $C$ ($DC \approx 4.8\text{ cm}$).

**Step 5:** Construct the perpendicular bisector of $DC$: draw $3\text{ cm}$ arcs from centres $D$ and $C$ (half of $DC$ is $\approx 2.4\text{ cm}$, so $3\text{ cm}$ works) and join their intersections.

**Step 6:** Label the point where the bisector meets ray $BX$ (extended beyond $D$) as $A$. Join $A$ to $C$.

> **Figure 5.2** – $\triangle ABC$ with $BC = 6\text{ cm}$ and $\angle B = 45^\circ$; $D$ lies on ray $BX$ with $BD = 2\text{ cm}$, $A$ lies beyond $D$ along ray $BX$ ($B, D, A$ in order), and the perpendicular bisector of $DC$ passes through $A$; $AC$ is joined.

**Why Does It Work?** Since $A$ lies on the perpendicular bisector of $DC$, $AD = AC$. Look at the order along ray $BX$: $D$ lies **between** $B$ and $A$ (because $BD = 2\text{ cm}$ is shorter than $BA$). Therefore $AB = BD + DA = 2 + AC$, which gives **$AB - AC = 2\text{ cm}$**.

**Check (Using Pythagoras' Theorem):** Let $AB = t$ and drop perpendicular $AF$ to $BC$. Since $\angle B = 45^\circ$, $\triangle ABF$ is an isosceles right triangle, so $BF = AF = \frac{t}{\sqrt{2}}$ and $FC = 6 - \frac{t}{\sqrt{2}}$. By Pythagoras in $\triangle AFC$:

$$AC^2 = \frac{t^2}{2} + \left(6 - \frac{t}{\sqrt{2}}\right)^2 = t^2 - 6\sqrt{2}\,t + 36$$

We need $AC = t - 2$, so $(t - 2)^2 = t^2 - 4t + 4$. Equating gives:

$$36 - 6\sqrt{2}\,t = 4 - 4t \implies t(6\sqrt{2} - 4) = 32$$

Thus $t = AB \approx 7.13\text{ cm}$ and $AC = t - 2 \approx 5.13\text{ cm}$.

Check: sides $7.13, 5.13, 6$ satisfy $5.13 + 6 > 7.13$ ✅, and $AB - AC = 2.00$ ✅. The triangle exists!

### Case 2: $AB < AC$

Now $AC$ is longer, so $AC - AB = 2\text{ cm}$. This time, we mark $D$ on the **opposite ray** extending backward from $B$.

**Steps 1 and 2:** Same as before: draw $BC = 6\text{ cm}$ and ray $BX$ with $\angle XBC = 45^\circ$.

**Step 3:** Extend ray $BX$ backward past $B$ (the opposite ray). With centre $B$ and radius $2\text{ cm}$, mark $D$ on this opposite ray so $BD = 2\text{ cm}$ ($D, B, A$ will lie in order on one line, with $B$ in the middle).

**Step 4:** Join $DC$ ($DC \approx 7.5\text{ cm}$).

**Step 5:** Construct the perpendicular bisector of $DC$ using $4.5\text{ cm}$ arcs (half of $DC$ is $\approx 3.8\text{ cm}$).

**Step 6:** The bisector cuts ray $BX$ at $A$. Join $AC$.

> **Figure 5.3** – $\triangle ABC$ with $BC = 6\text{ cm}$ and $\angle B = 45^\circ$; $D$ lies on the opposite ray with $BD = 2\text{ cm}$ ($D, B, A$ in order along one line), $AC$ is joined, and $A$ lies on the perpendicular bisector of $DC$.

**Why?** $AD = AC$ (by the bisector). Since $D$-$B$-$A$ lie in order on a line, $AD = DB + BA = 2 + AB$, giving **$AC - AB = 2\text{ cm}$**.

**Check:** Setting $AC = t + 2$ in the same Pythagorean equation gives $t(6\sqrt{2} + 4) = 32$, so $t = AB \approx 2.56\text{ cm}$ and $AC = t + 2 \approx 4.56\text{ cm}$. Check: $2.56 + 4.56 = 7.12 > 6$ ✅, and $2.56 + 6 > 4.56$ ✅.

**Rule: difference of the two sides $<$ base.** Here $2 < 6$ ✅.

---

## Part C: Perimeter and Two Base Angles

**Question:** Construct $\triangle XYZ$ given perimeter $XY + YZ + ZX = 12\text{ cm}$, $\angle Y = 60^\circ$, and $\angle Z = 45^\circ$.

### Idea

Lay out the entire $12\text{ cm}$ perimeter as one straight segment $PQ$. We will fold its outer pieces upward so that $PY = XY$, $YZ$ stays on the base, and $ZQ = XZ$. We construct **half** of each base angle ($30^\circ$ and $22\frac{1}{2}^\circ$) at $P$ and $Q$ because the resulting isosceles triangles double those angles back up into $60^\circ$ and $45^\circ$!

### Construction

**Step 1:** Use a ruler to draw segment $PQ = 12\text{ cm}$.

**Step 2:** At $P$, draw $60^\circ$ ($= \angle Y$) above $PQ$ and bisect it: with centre $P$ and radius $4\text{ cm}$, cut $PQ$ at $S$ and the $60^\circ$ ray at $T$; then draw $3\text{ cm}$ arcs from $S$ and $T$ meeting at $U$, and draw ray $PU$. Now $\angle UPQ = 30^\circ$.

**Step 3:** At $Q$, draw $45^\circ$ ($= \angle Z$) on the same upper side of $PQ$ and bisect it: with centre $Q$ and radius $4\text{ cm}$, cut $QP$ at $V$ and the $45^\circ$ ray at $W$; then draw $3\text{ cm}$ arcs from $V$ and $W$ meeting at $R$, and draw ray $QR$. Now $\angle RQP = 22\frac{1}{2}^\circ$.

**Step 4:** Label the intersection of ray $PU$ and ray $QR$ as $X$.

**Step 5:** Construct the perpendicular bisector of $XP$: draw $3.5\text{ cm}$ arcs from $X$ and $P$ ($XP \approx 5.8\text{ cm}$, half $\approx 2.9\text{ cm}$). Label the point where it crosses $PQ$ as $Y$.

**Step 6:** Construct the perpendicular bisector of $XQ$: draw $4.5\text{ cm}$ arcs from $X$ and $Q$ ($XQ \approx 7.6\text{ cm}$, half $\approx 3.8\text{ cm}$). Label the point where it crosses $PQ$ as $Z$.

**Step 7:** Join $X$ to $Y$ and $X$ to $Z$. $\triangle XYZ$ is complete.

> **Figure 5.4** – Segment $PQ = 12\text{ cm}$ with half-angle rays $PX$ (at $30^\circ$) and $QX$ (at $22\frac{1}{2}^\circ$) meeting at $X$; perpendicular bisectors of $XP$ and $XQ$ cut $PQ$ at $Y$ and $Z$ ($P, Y, Z, Q$ in order); $\triangle XYZ$ has $\angle Y = 60^\circ$ and $\angle Z = 45^\circ$.

### Why Does It Work?

**At $Y$:** Since $Y$ lies on the perpendicular bisector of $XP$, **$YX = YP$**. Thus $\triangle YPX$ is isosceles, so angles opposite equal sides are equal ([congruence-of-triangles-part3.md](../congruence-of-triangles/congruence-of-triangles-part3.md)): $\angle YXP = \angle YPX = 30^\circ$.

Now $\angle XYZ$ is an **exterior angle** of $\triangle YPX$ (since $P, Y, Z$ are collinear). By the exterior angle theorem:

$$\angle XYZ = \angle YPX + \angle YXP = 30^\circ + 30^\circ = \mathbf{60^\circ}$$

**At $Z$:** Similarly, $Z$ lies on the perpendicular bisector of $XQ$, so **$ZX = ZQ$** and $\angle ZXQ = \angle ZQX = 22\frac{1}{2}^\circ$. By the exterior angle theorem:

$$\angle XZY = \angle ZQX + \angle ZXQ = 22\frac{1}{2}^\circ + 22\frac{1}{2}^\circ = \mathbf{45^\circ}$$

**Perimeter:** Since $XY = PY$ and $XZ = QZ$, and $P, Y, Z, Q$ lie in order along $PQ$:

$$XY + YZ + ZX = PY + YZ + ZQ = \mathbf{PQ = 12\text{ cm}}$$

### Check

The third angle is $\angle X = 180^\circ - 60^\circ - 45^\circ = 75^\circ$. To calculate the exact side lengths, drop perpendicular $XF = h$ onto $YZ$. Since $\angle Z = 45^\circ$, $\triangle XFZ$ is an isosceles right triangle, so $FZ = h$ and $ZX = h\sqrt{2}$. Since $\angle Y = 60^\circ$, $\triangle XFY$ is half an equilateral triangle: $XY = 2\cdot YF$, and by Pythagoras $YF = \frac{h}{\sqrt{3}}$ and $XY = \frac{2h}{\sqrt{3}}$. Setting the perimeter to $12$:

$$\frac{2h}{\sqrt{3}} + \left(\frac{h}{\sqrt{3}} + h\right) + h\sqrt{2} = h\left(\sqrt{3} + 1 + \sqrt{2}\right) = 12 \implies h \approx 2.89\text{ cm}$$

This gives:
- $XY \approx 3.34\text{ cm}$, $YZ \approx 4.57\text{ cm}$, $ZX \approx 4.09\text{ cm}$
- Sum: $3.34 + 4.57 + 4.09 = 12.00$ ✅

Measure with a ruler ($XY \approx 3.3\text{ cm}$, $YZ \approx 4.6\text{ cm}$, $ZX \approx 4.1\text{ cm}$) and a protractor ($\angle Y \approx 60^\circ$, $\angle Z \approx 45^\circ$) ✅.

---

## Part D: Elena's $15\text{ cm}$ Pennant

Now let us answer Leo's question! Perimeter $= 15\text{ cm}$, with base angles $60^\circ$ and $60^\circ$.

**Step 1:** Draw $PQ = 15\text{ cm}$.

**Step 2:** Construct $60^\circ$ at both $P$ and $Q$, and bisect each to obtain $30^\circ$ rays meeting at $X$.

**Step 3:** Construct the perpendicular bisectors of $XP$ and $XQ$ using $5\text{ cm}$ arcs ($XP \approx 8.7\text{ cm}$, half $\approx 4.3\text{ cm}$). They cut $PQ$ at $Y$ and $Z$.

**Step 4:** Join $XY$ and $XZ$.

> **Figure 5.5** – Segment $PQ = 15\text{ cm}$ with $30^\circ$ bisectors meeting at $X$; perpendicular bisectors of $XP$ and $XQ$ cut $PQ$ at $Y$ and $Z$, producing equilateral $\triangle XYZ$ with every side equal to $5\text{ cm}$.

**Why equilateral?** From the proof above, $\angle Y = 60^\circ$ and $\angle Z = 60^\circ$, forcing $\angle X = 60^\circ$. With all three angles equal, $\triangle XYZ$ is equilateral, so all three sides are equal. Since the perimeter is $15\text{ cm}$, each side is $15 \div 3 = \mathbf{5\text{ cm}}$.

**Check:** Since $PY = XY$ and $ZQ = XZ$ and the triangle is equilateral, $PY = XY = YZ = XZ = ZQ = 5\text{ cm}$ — $PQ$ is split into three equal $5\text{ cm}$ pieces ($Y$ at $5\text{ cm}$ and $Z$ at $10\text{ cm}$ from $P$). Measuring gives $5 + 5 + 5 = 15$ ✅.

Leo clapped his hands. "Mum! You just had to cut the ribbon into three equal $5\text{ cm}$ pieces!" Elena laughed, "True — and now we know *for certain* from our construction instead of guessing!"

---

## Part E: More Solved Constructions

### Example 1: Sum of two sides

Construct $\triangle ABC$ with $BC = 6\text{ cm}$, $\angle B = 60^\circ$, and $AB + AC = 9\text{ cm}$.

**Step 1:** Draw $BC = 6\text{ cm}$.
**Step 2:** At $B$, construct $\angle XBC = 60^\circ$ and draw ray $BX$.
**Step 3:** With centre $B$ and radius $9\text{ cm}$, cut ray $BX$ at $D$, so $BD = 9\text{ cm}$.
**Step 4:** Join $DC$ ($DC \approx 7.9\text{ cm}$).
**Step 5:** Construct the perpendicular bisector of $DC$ using $4.5\text{ cm}$ arcs from $D$ and $C$ (half of $DC$ is $\approx 3.97\text{ cm}$).
**Step 6:** Let the bisector cut $BX$ at $A$. Join $AC$.

> **Figure 5.6** – $\triangle ABC$ with $BC = 6\text{ cm}$, $\angle B = 60^\circ$, $D$ on ray $BX$ with $BD = 9\text{ cm}$, and $A$ located on $BD$ by the perpendicular bisector of $DC$, giving $AB + AC = 9\text{ cm}$.

Why: $AC = AD$, so $AB + AC = AB + AD = BD = 9$. Condition check: $9 > 6$ ✅.

Check: Using Part A's Pythagorean setup, $t^2 - 6t + 36 = (9 - t)^2 \implies 12t = 45 \implies AB = 3.75\text{ cm}$ and $AC = 9 - 3.75 = 5.25\text{ cm}$. Sum: $3.75 + 5.25 = 9$ ✅, and $3.75 + 5.25 > 6$ ✅. Ruler measurements should give $AB \approx 3.75\text{ cm}$ and $AC \approx 5.25\text{ cm}$.

### Example 2: Perimeter with a right angle

Construct $\triangle XYZ$ with perimeter $10\text{ cm}$, $\angle Y = 90^\circ$, and $\angle Z = 45^\circ$.

**Step 1:** Draw $PQ = 10\text{ cm}$.
**Step 2:** At $P$, construct $90^\circ$ and bisect it ($4\text{ cm}$ arc at $P$, then $3\text{ cm}$ arcs) to draw ray $PU$ at $\angle UPQ = 45^\circ$.
**Step 3:** At $Q$, construct $45^\circ$ and bisect it ($4\text{ cm}$ arc at $Q$, then $3\text{ cm}$ arcs) to draw ray $QR$ at $\angle RQP = 22\frac{1}{2}^\circ$.
**Step 4:** $PU$ and $QR$ intersect at $X$.
**Step 5:** Construct the perpendicular bisector of $XP$ ($3\text{ cm}$ arcs from $X$ and $P$; $XP \approx 4.14\text{ cm}$, half $\approx 2.07\text{ cm}$), cutting $PQ$ at $Y$.
**Step 6:** Construct the perpendicular bisector of $XQ$ ($4.5\text{ cm}$ arcs from $X$ and $Q$; $XQ \approx 7.65\text{ cm}$, half $\approx 3.83\text{ cm}$), cutting $PQ$ at $Z$.
**Step 7:** Join $XY$ and $XZ$.

> **Figure 5.7** – Segment $PQ = 10\text{ cm}$ with $45^\circ$ and $22\frac{1}{2}^\circ$ bisectors meeting at $X$; perpendicular bisectors of $XP$ and $XQ$ cut $PQ$ at $Y$ and $Z$, giving $\triangle XYZ$ with $\angle Y = 90^\circ$ and $\angle Z = 45^\circ$.

Why: $YX = YP \implies \angle YXP = \angle YPX = 45^\circ$, so exterior $\angle XYZ = 45^\circ + 45^\circ = 90^\circ$. Likewise, $ZX = ZQ \implies \angle XZY = 22\frac{1}{2}^\circ + 22\frac{1}{2}^\circ = 45^\circ$.

Check: $\angle X = 45^\circ$, making $\triangle XYZ$ a right isosceles triangle with $XY = YZ = a$ and $ZX = a\sqrt{2}$. Perimeter: $a(2 + \sqrt{2}) = 10 \implies a = 10 \div 3.414 \approx 2.93\text{ cm}$ and $ZX \approx 4.14\text{ cm}$. Sum: $2.93 + 2.93 + 4.14 = 10.00$ ✅.

### Example 3: Difference of two sides ($AB < AC$)

Construct $\triangle ABC$ with $BC = 5\text{ cm}$, $\angle B = 60^\circ$, and $AC - AB = 1\text{ cm}$.

**Step 1:** Draw $BC = 5\text{ cm}$.
**Step 2:** At $B$, construct $\angle XBC = 60^\circ$ and draw ray $BX$.
**Step 3:** On the opposite ray extending backward from $B$, mark $D$ at radius $1\text{ cm}$ from $B$.
**Step 4:** Join $DC$ ($DC \approx 5.6\text{ cm}$).
**Step 5:** Construct the perpendicular bisector of $DC$ using $3\text{ cm}$ arcs from $D$ and $C$.
**Step 6:** Let the bisector cut ray $BX$ at $A$. Join $AC$.

> **Figure 5.8** – $\triangle ABC$ with $BC = 5\text{ cm}$, $\angle B = 60^\circ$, $D$ on the opposite ray with $BD = 1\text{ cm}$, and $A$ on ray $BX$ located by the perpendicular bisector of $DC$, giving $AC - AB = 1\text{ cm}$.

Why: $AD = AC$, and $D$-$B$-$A$ are collinear, so $AC = AD = DB + BA = 1 + AB$, hence $AC - AB = 1$.

Check: $t^2 - 5t + 25 = (t + 1)^2 \implies 24 = 7t \implies AB = \frac{24}{7} \approx 3.43\text{ cm}$ and $AC = \frac{31}{7} \approx 4.43\text{ cm}$. $AC - AB = 1$ ✅ and $3.43 + 4.43 > 5$ ✅.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Marking the wrong length for $BD$.**
   In the sum case, $BD = AB + AC$ (the full sum); in the difference case, $BD = |AB - AC|$ (just the difference). Using $5\text{ cm}$ or $3\text{ cm}$ in Part A instead of $8\text{ cm}$ still yields some triangle, but $AB + AC$ will not equal $8\text{ cm}$.

2. **Mistake 2: Skipping the perpendicular bisector of $DC$.**
   Joining $D$ to $C$ and guessing $A$ by eye gives no guarantee that $AD = AC$. Always construct the perpendicular bisector of $DC$ — that is what forces $A$ into the exact position.

3. **Mistake 3: Attempting an impossible sum or difference.**
   If $BC = 5\text{ cm}$ and $AB + AC = 4\text{ cm}$ ($4 < 5$), or if $BC = 6\text{ cm}$ and $AB - AC = 7\text{ cm}$ ($7 > 6$), no triangle can exist.
   **Rule: sum $>$ base, difference $<$ base.**

4. **Mistake 4: Forgetting to bisect the base angles in the perimeter construction.**
   Drawing $60^\circ$ at $P$ and $45^\circ$ at $Q$ directly will **not** give $\angle Y = 60^\circ$ and $\angle Z = 45^\circ$. Since those angles are formed as $30^\circ + 30^\circ$ and $22\frac{1}{2}^\circ + 22\frac{1}{2}^\circ$, you must draw **half** the given angles ($30^\circ$ and $22\frac{1}{2}^\circ$) at $P$ and $Q$.

5. **Mistake 5: Placing $D$ on the wrong ray in the difference case.**
   When $AB > AC$, $D$ lies forward along ray $BX$; when $AB < AC$, $D$ lies on the opposite ray behind $B$. Mixing up the sides reverses which side is longer!

---

## Quick Recap

- **Sum case ($AB + AC$):** draw base $BC$ and $\angle B$; mark $BD = AB + AC$ along ray $BX$; the perpendicular bisector of $DC$ cuts $BX$ at $A$. Condition: $\text{sum} > \text{base}$.
- **Difference case ($|AB - AC|$):** mark $BD = |AB - AC|$ forward along ray $BX$ if $AB > AC$, or on the opposite ray if $AB < AC$; the perpendicular bisector of $DC$ cuts $BX$ at $A$. Condition: $\text{difference} < \text{base}$.
- **Perimeter case:** draw $PQ = \text{perimeter}$; construct half of $\angle Y$ at $P$ and half of $\angle Z$ at $Q$ to meet at $X$; the perpendicular bisectors of $XP$ and $XQ$ cut $PQ$ at $Y$ and $Z$.
- **Core principle:** every point on a perpendicular bisector is equidistant from the segment's endpoints, giving $AD = AC$ or $YX = YP$.
- Elena's $15\text{ cm}$ pennant with $60^\circ$ base angles is equilateral with side $5\text{ cm}$.

---

## Practice Questions

1. Construct $\triangle ABC$ with $BC = 4\text{ cm}$, $\angle B = 60^\circ$ and $AB + AC = 7\text{ cm}$. Write the length of $BD$ you will use, and the lengths of $AB$ and $AC$ you expect.

2. Construct $\triangle ABC$ with $BC = 5\text{ cm}$, $\angle B = 60^\circ$ and $AB - AC = 1\text{ cm}$ (take $AB > AC$). Where does $D$ lie? State the expected $AB$ and $AC$.

3. Construct $\triangle ABC$ with $BC = 5\text{ cm}$, $\angle B = 60^\circ$ and $AC - AB = 2\text{ cm}$. On which ray do you mark $D$, and what are the expected $AB$ and $AC$?

4. Can a triangle $ABC$ be constructed with $BC = 6\text{ cm}$, $\angle B = 45^\circ$ and $AB + AC = 5\text{ cm}$? Explain.

5. Can a triangle $ABC$ be constructed with $BC = 4\text{ cm}$, $\angle B = 30^\circ$ and $AB - AC = 4.5\text{ cm}$? Explain.

6. In the construction of $\triangle XYZ$ from the perimeter $PQ$ and base angles $\angle Y$ and $\angle Z$, we take half the angles at $P$ and $Q$. Explain, using the isosceles triangle $YPX$, why $\angle XYZ$ comes out equal to the full angle.

7. Elena has $9\text{ cm}$ of tape for an equilateral pennant. Describe how to construct it using the perimeter method, and give the side length of the pennant.

8. State true or false, with a reason.
   (a) In the sum construction, $A$ lies on the perpendicular bisector of $DC$.
   (b) In the perimeter construction, $XY = PY$.
   (c) For $BC = 7\text{ cm}$ and $\angle B = 50^\circ$, a triangle with $AB + AC = 7\text{ cm}$ can be constructed.

9. Construct $\triangle XYZ$ with perimeter $12\text{ cm}$, $\angle Y = 90^\circ$ and $\angle Z = 30^\circ$. Which half-angles do you draw at $P$ and $Q$? After constructing, find $\angle X$, and state the expected values of $XY$, $YZ$ and $ZX$.

10. In Figure 5.1, why must $A$ lie between $B$ and $D$, and not beyond $D$, for $AB + AC$ to equal $BD$?

### Answers

1. Use $BD = 7\text{ cm}$. Solving $t^2 - 4t + 16 = (7 - t)^2$ gives $10t = 33$, so **$AB = 3.3\text{ cm}$** and **$AC = 3.7\text{ cm}$**. Check: $3.3 + 3.7 = 7$ ✅ and $7 > 4$ ✅.

2. $D$ lies on ray $BX$, $1\text{ cm}$ from $B$ (between $B$ and $A$). Solving $t^2 - 5t + 25 = (t - 1)^2$ gives $3t = 24$, so **$AB = 8\text{ cm}$, $AC = 7\text{ cm}$**. Check: $8 - 7 = 1$ ✅. Dropping perpendicular $AF$ onto $BC$ gives $BF = 8 \div 2 = 4$, $AF^2 = 64 - 16 = 48$, $FC = 5 - 4 = 1$, so $AC^2 = 48 + 1 = 49 \implies AC = 7$ ✅.

3. Mark $D$ on the **opposite ray** (backward from $B$ along $XB$), with $BD = 2\text{ cm}$. Solving $t^2 - 5t + 25 = (t + 2)^2$ gives $9t = 21$, so **$AB = \frac{7}{3} \approx 2.33\text{ cm}$** and **$AC = \frac{13}{3} \approx 4.33\text{ cm}$**. Check: $AC - AB = 2$ ✅ and $2 < 5$ (difference $<$ base) ✅.

4. **No.** The sum $5 < 6 = \text{base}$. By the triangle inequality, $AB + AC$ must be strictly greater than $BC$.

5. **No.** The difference $4.5 > 4 = \text{base}$. Since $AB < AC + BC$, we must have $AB - AC < BC$, which fails since $4.5 > 4$ ❌.

6. Since $Y$ lies on the perpendicular bisector of $XP$, $YX = YP$, making $\triangle YPX$ isosceles with $\angle YXP = \angle YPX = \frac{1}{2}\angle Y$. The exterior angle $\angle XYZ = \angle YPX + \angle YXP = \text{half} + \text{half} = \mathbf{\text{full angle}}$. That is why we start with half-angles.

7. Draw $PQ = 9\text{ cm}$. Construct $60^\circ$ at $P$ and $Q$ and bisect both to get $30^\circ$ rays meeting at $X$. Construct the perpendicular bisectors of $XP$ and $XQ$ to cut $PQ$ at $Y$ and $Z$, then join $XY$ and $XZ$. Since all three angles are $60^\circ$, $\triangle XYZ$ is equilateral with each side $9 \div 3 = \mathbf{3\text{ cm}}$. Check: $PY = 3$, $YZ = 3$, $ZQ = 3$, total $9$ ✅.

8. (a) **True** ✅. $A$ is located specifically on the perpendicular bisector of $DC$, ensuring $AD = AC$.
   (b) **True** ✅. $Y$ lies on the perpendicular bisector of $XP$, so $YX = YP$.
   (c) **False** ❌. We require $\text{sum} > \text{base}$, whereas here $7$ equals $7$, so no triangle can form.

9. Draw half of $90^\circ$, which is **$45^\circ$**, at $P$, and half of $30^\circ$, which is **$15^\circ$**, at $Q$. Then $\angle X = 180^\circ - 90^\circ - 30^\circ = \mathbf{60^\circ}$. This right triangle is half of an equilateral triangle, so $XY$ (opposite $30^\circ$) $= \frac{ZX}{2}$ and $YZ = \sqrt{ZX^2 - XY^2}$. From perimeter $12\text{ cm}$: $ZX \approx \mathbf{5.07\text{ cm}}$, $XY \approx \mathbf{2.54\text{ cm}}$, $YZ \approx \mathbf{4.39\text{ cm}}$. Check: $2.54 + 4.39 + 5.07 = 12.00$ ✅.

10. If $A$ lay beyond $D$, we would have $AB = BD + DA$, making $AB + AC = BD + 2\cdot AD > BD$. In our case $AB \approx 3.55\text{ cm} < BD = 8\text{ cm}$, so $A$ sits between $B$ and $D$, giving $AB + AD = BD$ and hence $AB + AC = BD$.

---

Now you can construct a triangle not just from its individual sides, but from their sum, difference, or total perimeter — all powered by one auxiliary point and a perpendicular bisector!

**Next up (Topic 6):** We have finished triangles. In the final topic of this chapter, we move on to four-sided figures — **quadrilaterals** — learning how to build parallelograms, rectangles, rhombuses, squares, trapeziums, and kites from given measurements.
