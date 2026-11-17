# Chapter: Constructions (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [constructions-part3.md](constructions-part3.md).** (The chapter begins in [constructions.md](constructions.md).) For the proofs behind triangle congruence criteria, see [Congruence of Triangles Topic 2](../congruence-of-triangles/congruence-of-triangles-part2.md).
> **Topics covered in this file:**
> 4. Constructing Triangles (I): SSS, SAS, ASA, and RHS

---

# Topic 4: Constructing Triangles (I): SSS, SAS, ASA, and RHS

So far in this chapter, you have mastered the tools in your geometry box: drawing and copying segments, constructing perpendicular bisectors, building angles, and constructing perpendicular and parallel lines (just like Dr. Bennett and Liam laying out car park bays). Now we put all of these skills together to build our **first complete polygon**: a **triangle**.

Here is the central question: how many measurements are needed to fix a triangle, and which combinations of three measurements guarantee a unique triangle? We already proved the mathematical "why" in the Congruence chapter — now we will experience it hands-on with compass, ruler, and protractor.

---

## Dr. Bennett and Sophia's Roof Truss

Dr. Bennett, a structural engineer, was designing a triangular **roof truss** (a rigid steel or timber triangular frame) for a small community hall. She handed a sheet of measurements to her intern, **Sophia**: "Sophia, please draft this truss to scale at **$1\text{ cm} = 1\text{ m}$**. Each design gives three measurements — see what you get."

Sophia started with the first set: **$3\text{ m}, 4\text{ m}, 5\text{ m}$.** She picked up her compass, swung two arcs, and within moments had a crisp, clean triangle.

Then she tried the second set: **$3\text{ m}, 4\text{ m}, 8\text{ m}$.** She drew an $8\text{ cm}$ base, swung a $3\text{ cm}$ arc from one end and a $4\text{ cm}$ arc from the other — **and the arcs never met**. She checked her ruler and tried again. Still nothing.

Sophia frowned. "Dr. Bennett, is my compass faulty?"

Dr. Bennett chuckled. "Your compass is fine! Those three lengths simply cannot form a triangle. Let us look at why that happens — and which combinations of three measurements always work."

At the end of this topic, we will revisit both of Sophia's truss drawings.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Construction** | Drawing a geometric figure accurately with compass, ruler (and protractor where specified) | Constructing a triangle with sides $5, 6, 7\text{ cm}$ |
| **Arc** | A small curved portion of a circle drawn with a compass | A $6\text{ cm}$ arc centred at $B$ |
| **Included angle** | The angle trapped directly between two given sides | $\angle B$ between sides $AB$ and $BC$ |
| **Hypotenuse** | The longest side of a right-angled triangle, opposite the $90^\circ$ angle | The $5\text{ cm}$ side in a $3$-$4$-$5$ triangle |
| **Scale** | The ratio used to represent large real-world dimensions on paper | $1\text{ cm} = 1\text{ m}$ |
| **Check (Verification)** | Measuring the finished construction to confirm accuracy | Checking angles with a protractor |

---

## Part A: When Can a Triangle Be Constructed?

Before you even pick up a compass, ask yourself: **can these three lengths actually form a triangle?**

Consider Sophia's second set: $3\text{ cm}$, $4\text{ cm}$, and $8\text{ cm}$. Draw the $8\text{ cm}$ segment $AB$. Swing a $3\text{ cm}$ arc from $A$ and a $4\text{ cm}$ arc from $B$. For vertex $C$ to exist, those two arcs must cross. Yet $3 + 4 = 7 < 8$. The two shorter sides together cannot even span the $8\text{ cm}$ gap, so the arcs stop short of each other.

> **Figure 4.1** – An $8\text{ cm}$ segment $AB$ with a $3\text{ cm}$ arc from $A$ and a $4\text{ cm}$ arc from $B$; they fail to intersect, so no point $C$ exists.

This gives the fundamental **triangle inequality** (proved in [Congruence Topic 4](../congruence-of-triangles/congruence-of-triangles-part4.md)):

> **The sum of any two sides of a triangle must be strictly greater than the third side.**

This must hold for all three pairs. In practice, checking whether **the sum of the two shorter sides exceeds the longest side** is enough, since that is the tightest test.

### Example 1: Which set of lengths works?

- **$3, 4, 8$:** $3 + 4 = 7 < 8$. ❌ No triangle is possible.
- **$5, 6, 10$:** $5 + 6 = 11 > 10$. ✅ A triangle can be constructed.
- **$3, 4, 7$:** $3 + 4 = 7$ (equal to $7$, not strictly greater). The three points collapse onto one straight line, giving a "flat" line rather than a triangle. ❌ Not a triangle.
- **$3, 4, 5$:** $3 + 4 = 7 > 5$, $3 + 5 = 8 > 4$, $4 + 5 = 9 > 3$. ✅ A triangle can be constructed.

**Check:** In $5, 6, 10$, the two shorter sides sum to $11 > 10$ ✅. If the longest side were $11$ instead of $10$, $5 + 6 = 11$ would fail.

---

## Part B: SSS (All Three Sides Given)

### Example 2: Construct $\triangle ABC$ with $AB = 5\text{ cm}$, $BC = 6\text{ cm}$, $CA = 7\text{ cm}$

**First check:** Sum of the two shorter sides is $5 + 6 = 11 > 7$ ✅. A triangle exists.

**Step 1:** Draw a straight line and mark a $5\text{ cm}$ segment **$AB$** ($A$ on the left, $B$ on the right).

**Step 2:** Set the compass to **$6\text{ cm}$** against a ruler. With centre **$B$**, draw an arc above $AB$ (since $BC = 6\text{ cm}$).

**Step 3:** Set the compass to **$7\text{ cm}$**. With centre **$A$**, draw an arc above $AB$ to cut the arc from Step 2 (since $CA = 7\text{ cm}$).

**Step 4:** Label the intersection of the two arcs **$C$**.

**Step 5:** Use a ruler to join **$AC$** and **$BC$**. $\triangle ABC$ is complete.

> **Figure 4.2** – $\triangle ABC$ with base $AB = 5\text{ cm}$, arc $BC = 6\text{ cm}$ centred at $B$, arc $CA = 7\text{ cm}$ centred at $A$, meeting at vertex $C$.

**Why is the triangle unique?** Point $C$ must lie simultaneously $6\text{ cm}$ from $B$ and $7\text{ cm}$ from $A$. Only two spots satisfy that: one above $AB$ and its mirror image below $AB$. Both yield identical (congruent) triangles, just flipped over. That is the **SSS** criterion from [Congruence Topic 2](../congruence-of-triangles/congruence-of-triangles-part2.md).

**Check:** Measure the three angles with a protractor. You should get roughly:
- $\angle A$ (opposite $BC$) $\approx \mathbf{57.1^\circ}$
- $\angle B$ (opposite $CA$) $\approx \mathbf{78.5^\circ}$
- $\angle C$ (opposite $AB$) $\approx \mathbf{44.4^\circ}$

Sum: $57.1 + 78.5 + 44.4 = 180.0$ ✅. (Allow $\pm 1^\circ$ for protractor reading precision.)

> Notice: the largest angle lies opposite the longest side. Here $\angle B$ ($78.5^\circ$) sits opposite $CA = 7\text{ cm}$.

---

## Part C: SAS (Two Sides and the Included Angle)

### Example 3: Construct $\triangle PQR$ with $PQ = 5\text{ cm}$, $\angle Q = 60^\circ$, $QR = 4\text{ cm}$

Notice that $\angle Q$ sits directly **between** sides $PQ$ and $QR$, so this is SAS.

**Step 1:** Draw a $4\text{ cm}$ line segment **$QR$** ($Q$ on the left, $R$ on the right).

**Step 2:** Set the compass to **$3\text{ cm}$**. With centre **$Q$**, draw an arc cutting $QR$ at **$S$** and sweeping above $QR$.

**Step 3:** Keep the compass at **$3\text{ cm}$**. With centre **$S$**, cut the previous arc at **$T$**.

**Step 4:** Draw a long ray **$QT$**. By Topic 2's compass method, $\angle TQR = 60^\circ$.

**Step 5:** Set the compass to **$5\text{ cm}$**. With centre **$Q$**, cut ray $QT$ at point **$P$** ($PQ = 5\text{ cm}$).

**Step 6:** Join $P$ and $R$. $\triangle PQR$ is complete.

> **Figure 4.3** – $\triangle PQR$ with base $QR = 4\text{ cm}$, $\angle Q = 60^\circ$ (constructed via arcs $S$ and $T$), $PQ = 5\text{ cm}$ marked along ray $QT$, and side $PR$ joining $P$ to $R$.

**Why is the triangle unique?** Once the $60^\circ$ angle at $Q$ and both lengths $5\text{ cm}$ and $4\text{ cm}$ along its arms are fixed, vertices $P$ and $R$ are locked in place. There is only one straight segment $PR$ joining them — the **SAS** criterion from [Congruence Topic 2](../congruence-of-triangles/congruence-of-triangles-part2.md).

**Check:** Measure $PR$ with a ruler: about **$4.6\text{ cm}$**. Measure $\angle P \approx \mathbf{49.1^\circ}$ and $\angle R \approx \mathbf{70.9^\circ}$. Sum: $60 + 49.1 + 70.9 = 180$ ✅.

---

## Part D: ASA (Two Angles and the Included Side)

### Example 4: Construct $\triangle XYZ$ with $XY = 6\text{ cm}$, $\angle X = 45^\circ$, $\angle Y = 75^\circ$

**Find the third angle first:** $\angle Z = 180^\circ - 45^\circ - 75^\circ = \mathbf{60^\circ}$. Since $45 + 75 = 120 < 180$, a valid triangle exists ✅.

**Step 1:** Draw a $6\text{ cm}$ segment **$XY$** ($X$ on the left, $Y$ on the right).

**Step 2 ($45^\circ$ at $X$):** Set the compass to **$3\text{ cm}$**. With centre **$X$**, draw a sweeping arc above $XY$ cutting $XY$ at **$A$**.

**Step 3:** Keep **$3\text{ cm}$**. With centre **$A$**, cut the arc at **$B$** ($\angle AXB = 60^\circ$).

**Step 4:** Keep **$3\text{ cm}$**. With centre **$B$**, cut the arc at **$C$** ($\angle AXC = 120^\circ$).

**Step 5:** Keep **$3\text{ cm}$**. With centres **$B$** and **$C$**, draw arcs meeting at **$D$** (away from $X$). Draw ray **$XD$**, cutting the arc from $X$ at **$E$** ($\angle AXE = 90^\circ$).

**Step 6:** Keep **$3\text{ cm}$**. With centres **$A$** and **$E$**, draw arcs meeting at **$F$** (away from $X$). Draw ray **$XF$**, giving $\angle YXF = 45^\circ$.

**Step 7 ($75^\circ$ at $Y$):** Set the compass to **$3\text{ cm}$**. With centre **$Y$**, draw a sweeping arc above $XY$ cutting $YX$ at **$G$**.

**Step 8:** Keep **$3\text{ cm}$**. With centre **$G$**, cut the arc at **$H$** ($\angle GYH = 60^\circ$).

**Step 9:** Keep **$3\text{ cm}$**. With centre **$H$**, cut the arc at **$J$** ($\angle GYJ = 120^\circ$).

**Step 10:** Keep **$3\text{ cm}$**. With centres **$H$** and **$J$**, draw arcs meeting at **$K$** (away from $Y$). Draw ray **$YK$**, cutting the arc from $Y$ at **$L$** ($\angle GYL = 90^\circ$).

**Step 11:** Set the compass to **$2\text{ cm}$**. With centres **$H$** and **$L$**, draw arcs meeting at **$M$**. Draw ray **$YM$**, giving $\angle XYM = 75^\circ$ (halfway between $60^\circ$ and $90^\circ$).

**Step 12:** Label the intersection of ray $XF$ and ray $YM$ as **$Z$**.

*(If a protractor is permitted, simply measure $45^\circ$ at $X$ and $75^\circ$ at $Y$ on the **same side** of $XY$ and draw the two rays to meet at $Z$.)*

> **Figure 4.4** – $\triangle XYZ$ with base $XY = 6\text{ cm}$, $\angle X = 45^\circ$ (ray $XF$), $\angle Y = 75^\circ$ (ray $YM$), meeting at $Z$ with $\angle Z = 60^\circ$.

**Why is the triangle unique?** Fixing the two angles at the endpoints of $XY$ fixes the exact directions of both rays, which can intersect at only one point $Z$ — the **ASA** criterion ([Congruence Topic 2](../congruence-of-triangles/congruence-of-triangles-part2.md)).

**Check:** Measure $\angle Z$ with a protractor: it should read **$60^\circ$** ($45 + 75 + 60 = 180$ ✅). Measure the sides: $XZ \approx \mathbf{6.7\text{ cm}}$ (opposite $75^\circ$) and $YZ \approx \mathbf{4.9\text{ cm}}$ (opposite $45^\circ$).

---

## Part E: AAS (Two Angles and a Non-Included Side)

In AAS, the given side is **not** between the two given angles. The trick is effortless: **calculate the third angle first**, turning the problem into ASA!

### Example 5: Construct $\triangle ABC$ with $\angle A = 60^\circ$, $\angle B = 50^\circ$, $BC = 6\text{ cm}$

Here $BC$ lies opposite $\angle A$, not between $\angle A$ and $\angle B$, so this is AAS.

**Find the third angle first:** $\angle C = 180^\circ - 60^\circ - 50^\circ = \mathbf{70^\circ}$.

Now we have base $BC = 6\text{ cm}$ with $\angle B = 50^\circ$ and $\angle C = 70^\circ$ at its ends — pure ASA!

**Step 1:** Draw a $6\text{ cm}$ segment **$BC$**.

**Step 2:** Place the protractor centre on **$B$**, align $0^\circ$ along $BC$, mark **$50^\circ$** above $BC$, and draw a long ray from $B$ through that mark.

**Step 3:** Place the protractor centre on **$C$**, align $0^\circ$ along $CB$ (reading from the opposite scale), mark **$70^\circ$** above $BC$, and draw a long ray from $C$ through that mark.

**Step 4:** Label the intersection of the two rays **$A$**.

> **Figure 4.5** – $\triangle ABC$ with base $BC = 6\text{ cm}$, $\angle B = 50^\circ$, and $\angle C = 70^\circ$; the two rays meet at $A$, automatically forming $\angle A = 60^\circ$.

**Why is the triangle unique?** Two angles fix the third via the $180^\circ$ angle sum, reducing AAS directly to ASA ([Congruence Topic 2](../congruence-of-triangles/congruence-of-triangles-part2.md)).

**Check:** Measure $\angle A$ with a protractor: **$60^\circ$** ✅. Measure sides: $AC \approx \mathbf{5.3\text{ cm}}$ (opposite $\angle B$) and $AB \approx \mathbf{6.5\text{ cm}}$ (opposite $\angle C$).

**Protractor reminder (from Topic 2, Part A):** Always read the scale whose **$0^\circ$ rests directly on your baseline ray**.

---

## Part F: RHS (Right Triangle: Hypotenuse and One Side)

### Example 6: Construct right $\triangle DEF$ with $\angle E = 90^\circ$, hypotenuse $DF = 5\text{ cm}$, $EF = 3\text{ cm}$

What will the third side $DE$ be? By Pythagoras' theorem: $DE^2 = DF^2 - EF^2 = 25 - 9 = 16$, so **$DE = 4\text{ cm}$** (the classic $3$-$4$-$5$ triple from [Pythagoras' Theorem](../pythagoras-theorem/pythagoras-theorem.md)).

**Step 1:** Draw a $3\text{ cm}$ segment **$EF$** ($E$ on the left, $F$ on the right), extending the line lightly to the left of $E$.

**Step 2 (perpendicular at $E$, Topic 3):** Set the compass to **$2\text{ cm}$**. With centre **$E$**, draw arcs cutting $EF$ at **$S$** and the leftward extension at **$G$**.

**Step 3:** Set the compass to **$3\text{ cm}$**. With centre **$S$** and then centre **$G$**, draw arcs above $EF$ intersecting at **$T$**.

**Step 4:** Draw ray **$ET$**. Then $ET \perp EF$, so $\angle TEF = 90^\circ$.

**Step 5:** Set the compass to **$5\text{ cm}$**. With centre **$F$**, draw an arc cutting ray $ET$ at point **$D$** ($DF = 5\text{ cm}$).

**Step 6:** Join $D$ and $F$. $\triangle DEF$ is complete.

> **Figure 4.6** – Right triangle $\triangle DEF$ with base $EF = 3\text{ cm}$, $\angle E = 90^\circ$ (perpendicular ray $ET$ built via $S, G, T$), and hypotenuse $DF = 5\text{ cm}$ locating $D$ on ray $ET$.

**Why is the triangle unique?** With the $90^\circ$ angle at $E$ and leg $EF = 3\text{ cm}$ fixed, there is only one point $D$ on ray $ET$ that lies $5\text{ cm}$ from $F$ (forcing $DE = 4\text{ cm}$). That is the **RHS** criterion ([Congruence Topic 2](../congruence-of-triangles/congruence-of-triangles-part2.md), Part G).

**Check:** Measure $DE$ with a ruler: **$4\text{ cm}$**, matching $3^2 + 4^2 = 9 + 16 = 25 = 5^2$ ✅. Angles: $\angle D \approx \mathbf{36.9^\circ}$, $\angle F \approx \mathbf{53.1^\circ}$; $90 + 36.9 + 53.1 = 180$ ✅.

---

## Part G: Special Triangles

### Example 7: Equilateral triangle of side $5\text{ cm}$

Since all three sides are equal, this is simply SSS with three $5\text{ cm}$ sides.

**Step 1:** Draw a $5\text{ cm}$ segment **$LM$**.

**Step 2:** Set the compass to **$5\text{ cm}$**. With centre **$L$**, draw an arc above $LM$.

**Step 3:** Keep the compass at **$5\text{ cm}$**. With centre **$M$**, draw an arc cutting the first arc at **$N$**.

**Step 4:** Join $N$ to $L$ and $M$.

> **Figure 4.7** – Equilateral $\triangle LMN$ with $LM = MN = NL = 5\text{ cm}$ and every angle equal to $60^\circ$, where $N$ is the intersection of the two $5\text{ cm}$ arcs.

**Why?** $N$ is $5\text{ cm}$ from $L$ and $5\text{ cm}$ from $M$, and $LM = 5\text{ cm}$, so all three sides are equal.

**Check:** Every angle measures **$60^\circ$** ($60 + 60 + 60 = 180$ ✅).

### Example 8: Isosceles triangle with base $6\text{ cm}$ and equal sides $5\text{ cm}$

First check: $5 + 5 = 10 > 6$ ✅.

**Step 1:** Draw a $6\text{ cm}$ segment **$JK$**.

**Step 2 (perpendicular bisector, Topic 1):** Set the compass to **$4\text{ cm}$** (more than half of $6\text{ cm}$, which is $3\text{ cm}$). Draw arcs above and below $JK$ from centre **$J$** and from centre **$K$**, intersecting at **$U$** (above) and **$V$** (below).

**Step 3:** Join $U$ and $V$. Line $UV$ cuts $JK$ at its midpoint **$M$** ($JM = MK = 3\text{ cm}$).

**Step 4:** Set the compass to **$5\text{ cm}$**. With centre **$J$**, cut line $UV$ above $JK$ at point **$H$** ($HJ = 5\text{ cm}$).

**Step 5:** Join $H$ to $J$ and $K$.

> **Figure 4.8** – Isosceles $\triangle HJK$ with base $JK = 6\text{ cm}$, $HJ = HK = 5\text{ cm}$, apex $H$ lying on the perpendicular bisector $UV$, and $M$ as the midpoint of $JK$.

**Why?** Because $H$ lies on the perpendicular bisector of $JK$, $H$ is equidistant from $J$ and $K$ ([Congruence Topic 2 SAS proof](../congruence-of-triangles/congruence-of-triangles-part2.md)), so $HK = HJ = 5\text{ cm}$.

**Check:** Measure $HK = \mathbf{5\text{ cm}}$, height $HM = \mathbf{4\text{ cm}}$ ($3^2 + 4^2 = 25 = 5^2$ ✅). Base angles $\angle J = \angle K \approx \mathbf{53.1^\circ}$ and apex $\angle H \approx \mathbf{73.7^\circ}$ ($53.1 + 53.1 + 73.7 = 179.9 \approx 180$ due to rounding ✅).

---

## Part H: Why Does SSA Fail?

Now for a classic trap: **given two sides and a non-included angle** (SSA), is the triangle uniquely determined? In [Congruence Topic 2 (Part H: AAA and SSA)](../congruence-of-triangles/congruence-of-triangles-part2.md), we learned the answer is **no**. Let us see why right on paper!

### Example 9: $AB = 5\text{ cm}$, $\angle B = 40^\circ$, $AC = 4\text{ cm}$

Notice that $\angle B$ is **not** between $AB$ and $AC$ ($AC$ is opposite $\angle B$). This is SSA.

**Step 1:** Draw a $5\text{ cm}$ segment **$AB$**.

**Step 2:** At $B$, use a protractor to draw $\angle ABX = 40^\circ$ and draw a long ray **$BX$**.

**Step 3:** Set the compass to **$4\text{ cm}$**. With centre **$A$**, draw an arc crossing ray $BX$.

**Step 4:** Look closely — the arc cuts ray $BX$ at **two distinct points**! Label the nearer point **$C_1$** and the farther point **$C_2$**.

**Step 5:** Join $AC_1$ and $AC_2$.

> **Figure 4.9** – Base $AB = 5\text{ cm}$ and ray $BX$ at $\angle ABX = 40^\circ$; the $4\text{ cm}$ arc centred at $A$ cuts ray $BX$ at two points $C_1$ and $C_2$, producing two distinct triangles $\triangle ABC_1$ and $\triangle ABC_2$ that both satisfy $AB = 5\text{ cm}$, $\angle B = 40^\circ$, $AC = 4\text{ cm}$.

Both triangles satisfy every single given measurement ($AB = 5$, $\angle B = 40^\circ$, $AC = 4$), yet they have **completely different shapes**:
- In $\triangle ABC_1$: $BC_1 \approx \mathbf{1.4\text{ cm}}$, and $\angle C_1 \approx 126.5^\circ$ (obtuse, wide).
- In $\triangle ABC_2$: $BC_2 \approx \mathbf{6.2\text{ cm}}$, and $\angle C_2 \approx 53.5^\circ$ (acute, narrow).

**Why two triangles?** Drop a perpendicular from $A$ to ray $BX$ (Topic 3): that shortest distance from $A$ to the ray is about $3.2\text{ cm}$. Because our arc radius ($4\text{ cm}$) is longer than $3.2\text{ cm}$ yet shorter than $AB$ ($5\text{ cm}$), the arc swings past the perpendicular and cuts ray $BX$ on both sides! That is why **SSA** does not fix a triangle and is never a valid congruence or construction criterion. Always rely on SAS (angle **included**) or RHS (where the angle is $90^\circ$).

**Check:** Measure both $AC_1$ and $AC_2$ with a ruler: both equal **$4\text{ cm}$** ✅.

---

## Part I: Solving Sophia's Story

Let us return to Dr. Bennett and Sophia.

**Roof truss $3\text{ m}, 4\text{ m}, 5\text{ m}$ at scale $1\text{ cm} = 1\text{ m}$:** On paper, the sides are $3\text{ cm}, 4\text{ cm}, 5\text{ cm}$.

First check: $3 + 4 = 7 > 5$ ✅. Since $3^2 + 4^2 = 25 = 5^2$, this is also a right-angled triangle! Sophia constructed it by SSS:

**Step 1:** Draw segment **$AB = 4\text{ cm}$** (the $4\text{ m}$ beam).

**Step 2:** Set the compass to **$3\text{ cm}$**. With centre **$B$**, draw an arc above $AB$.

**Step 3:** Set the compass to **$5\text{ cm}$**. With centre **$A$**, draw an arc above $AB$ to cut the first arc at **$C$**.

**Step 4:** Join $AC$ and $BC$.

> **Figure 4.10** – Roof truss $\triangle ABC$ at scale $1\text{ cm} = 1\text{ m}$: $AB = 4\text{ cm}$, $BC = 3\text{ cm}$, $CA = 5\text{ cm}$, with $\angle B = 90^\circ$ since $3^2 + 4^2 = 5^2$.

**Check:** Measure $\angle B$ with a protractor: **$90^\circ$** ✅. The other angles are $\angle A \approx \mathbf{36.9^\circ}$ and $\angle C \approx \mathbf{53.1^\circ}$.

Dr. Bennett smiled, "Look at that, Sophia — our roof frame is a clean right triangle, which makes fitting the vertical post effortless."

**And what about $3\text{ m}, 4\text{ m}, 8\text{ m}$?** Since $3 + 4 = 7 < 8$, the two shorter beams combined cannot bridge the $8\text{ m}$ span. No truss can exist. Sophia's compass was never the problem — **the numbers failed the triangle inequality**. As Dr. Bennett advised: "Always do that quick sum check before touching your compass; it saves a lot of drafting time!"

---

## Common Pitfalls to Avoid

1. **Mistake 1: Letting the compass radius slip mid-construction.**
   When constructing an angle such as $60^\circ$, if Step 2 uses $3\text{ cm}$ and the compass slips to $2.8\text{ cm}$ in Step 3, the angle will no longer be $60^\circ$. Keep the hinge screw tight and do not touch the opening when the same radius is required.

2. **Mistake 2: Reading the wrong scale on the protractor.**
   A protractor has inner and outer scales. If zero is on the inner scale and you read the outer scale, a $50^\circ$ angle becomes $130^\circ$. Always check which side has **$0^\circ$ on your ray**, and do a quick visual sanity check: $50^\circ$ should look acute (narrow), while $130^\circ$ looks obtuse (wide).

3. **Mistake 3: Forgetting to check the triangle inequality first.**
   Starting a construction for $3, 4, 8$ wastes time looking for arcs that will never cross. Take $5$ seconds first to verify that the two shorter sides sum to strictly more than the longest side.

4. **Mistake 4: Putting the given side at the wrong end in SAS.**
   In "$PQ = 5\text{ cm}$, $\angle Q = 60^\circ$, $QR = 4\text{ cm}$", the $5\text{ cm}$ and $4\text{ cm}$ sides must meet at vertex $Q$. Drawing the $5\text{ cm}$ side from $R$ instead builds the wrong triangle. Always verify which two sides trap the given angle.

5. **Mistake 5: Drawing arcs too short.**
   In SSS, tiny stubby arcs may miss each other or hide the exact crossing point. Sweep generous arcs so their intersection is sharp and unmistakable.

---

## Quick Recap

- A triangle exists only if **the sum of the two shorter sides is strictly greater than the longest side** ($3, 4, 8$ fails; $5, 6, 10$ works).
- **SSS:** draw one side, swing arcs of the other two lengths from its endpoints; their intersection is the third vertex.
- **SAS:** draw one side, construct the included angle at one end, and cut the second side's length along that ray.
- **ASA:** draw the included side and construct the two angles at its ends; the rays intersect at the third vertex.
- **AAS:** find the third angle using $180^\circ$ minus the other two, then proceed as ASA.
- **RHS:** draw the given leg, construct $90^\circ$ at one end, and cut the perpendicular ray with an arc of the hypotenuse length from the other end.
- **Equilateral** (special case of SSS) and **isosceles** triangles (using the perpendicular bisector) follow directly.
- **SSA** does not fix a unique triangle: the arc can cut the ray at two points.
- Always perform a **Check** after drawing: verify side lengths with a ruler, angles with a protractor, and check that the angles sum to $180^\circ$.

---

## Practice Questions

1. Which of these sets of lengths (in cm) can be the sides of a triangle? Give a reason for each. (a) $7, 10, 18$ (b) $6, 8, 10$ (c) $4, 4, 8$ (d) $5, 7, 11$

2. Construct $\triangle ABC$ with $AB = 4\text{ cm}$, $BC = 5\text{ cm}$ and $CA = 6\text{ cm}$. Measure the three angles with a protractor and write what you should expect to get, approximately.

3. Construct $\triangle PQR$ with $PQ = 4\text{ cm}$, $\angle Q = 90^\circ$ and $QR = 3\text{ cm}$. Find the length of $PR$ without measuring, and then check by measuring.

4. Construct $\triangle ABC$ with $AB = 7\text{ cm}$, $\angle A = 30^\circ$ and $\angle B = 80^\circ$. What is $\angle C$?

5. Construct $\triangle ABC$ with $\angle B = 40^\circ$, $\angle C = 65^\circ$ and $BC = 5\text{ cm}$. Which criterion is this, and what is $\angle A$?

6. Construct a right triangle with hypotenuse $13\text{ cm}$ and one side $5\text{ cm}$. Find the third side by Pythagoras before you draw it.

7. Construct an isosceles triangle with base $8\text{ cm}$ and equal sides $5\text{ cm}$. Find its height and its base angles (approximately).

8. Can you draw two different triangles with $AB = 6\text{ cm}$, $\angle B = 30^\circ$ and $AC = 4\text{ cm}$? Explain using the arc from $A$.

9. State True or False:
   (a) A triangle with sides $5\text{ cm}$, $5\text{ cm}$ and $10\text{ cm}$ can be drawn.
   (b) In SAS, the angle must lie between the two given sides.
   (c) SSA is a criterion for fixing a triangle.
   (d) Two arcs drawn with changing compass radius can still give an exact $60^\circ$ angle.

### Answers

1. The sum of the two shorter sides must exceed the longest side:
   (a) $7 + 10 = 17 < 18$. **No** ❌.
   (b) $6 + 8 = 14 > 10$. **Yes** ✅.
   (c) $4 + 4 = 8$ (equal, not strictly greater — collapses into a flat line). **No** ❌.
   (d) $5 + 7 = 12 > 11$. **Yes** ✅.

2. Sides $4, 5, 6$: $4 + 5 = 9 > 6$ ✅. Construct by SSS as in Part B (taking $6\text{ cm}$ or $4\text{ cm}$ as the base). Expected angles: opposite $6\text{ cm}$ $\approx \mathbf{82.8^\circ}$, opposite $4\text{ cm}$ $\approx \mathbf{41.4^\circ}$, opposite $5\text{ cm}$ $\approx \mathbf{55.8^\circ}$. Sum: $82.8 + 41.4 + 55.8 = 180$ ✅.

3. By Pythagoras, $PR^2 = 4^2 + 3^2 = 16 + 9 = 25 \implies \mathbf{PR = 5\text{ cm}}$. Measuring with a ruler gives $5\text{ cm}$ ✅. (This is SAS with $90^\circ$ included.)

4. $\angle C = 180^\circ - 30^\circ - 80^\circ = \mathbf{70^\circ}$. Draw $AB = 7\text{ cm}$, construct rays at $30^\circ$ at $A$ and $80^\circ$ at $B$ (ASA). A protractor measures $\angle C = 70^\circ$ ✅.

5. $\angle A = 180^\circ - 40^\circ - 65^\circ = \mathbf{75^\circ}$. Since the given side $BC$ lies between $\angle B$ and $\angle C$, this is **ASA** (if the side were opposite one of the given angles, it would be AAS). Sum: $40 + 65 + 75 = 180$ ✅.

6. Third side$^2 = 13^2 - 5^2 = 169 - 25 = 144 \implies$ third side $= \mathbf{12\text{ cm}}$. Construction (RHS): draw $5\text{ cm}$ base, erect $90^\circ$ at one end, and cut the perpendicular ray with a $13\text{ cm}$ arc from the other end. Measuring gives $12\text{ cm}$ ✅ ($5^2 + 12^2 = 25 + 144 = 169 = 13^2$).

7. Half the base is $4\text{ cm}$, so height $= \sqrt{5^2 - 4^2} = \sqrt{9} = \mathbf{3\text{ cm}}$. Each base angle $\approx \mathbf{36.9^\circ}$ (by protractor), and the apex angle $\approx 180^\circ - 2(36.9^\circ) = \mathbf{106.3^\circ}$. Sum: $36.9 + 36.9 + 106.3 = 180.1 \approx 180$ due to rounding ✅.

8. **Yes, two distinct triangles are possible.** Drop a perpendicular from $A$ to ray $BX$ (Topic 3): this shortest distance is $3\text{ cm}$. Because the $4\text{ cm}$ arc radius from $A$ is greater than $3\text{ cm}$ and smaller than $AB = 6\text{ cm}$, the arc cuts ray $BX$ at two points, giving two triangles (one with $BC \approx 2.6\text{ cm}$ and one with $BC \approx 7.8\text{ cm}$). That is why SSA never locks in a unique triangle ([Congruence Topic 2](../congruence-of-triangles/congruence-of-triangles-part2.md)).

9. (a) **False** ❌. $5 + 5 = 10$, not strictly greater than $10$, so no triangle forms.
   (b) **True** ✅. The angle must be trapped between the two given sides for SAS.
   (c) **False** ❌. SSA can produce two different triangles (Part H).
   (d) **False** ❌. Constructing $60^\circ$ requires keeping the exact same compass radius throughout.

---

Triangle construction is now in your hands: given three valid measurements, your compass builds the exact shape every time. Check the triangle inequality first, construct carefully, and verify your final drawing!

**What comes next?** Until now, individual sides or angles were handed to us directly. In Topic 5, we tackle a clever puzzle: how do you construct a triangle when you are only given the **perimeter**, or the **sum or difference** of two sides, along with a base angle? A brilliant trick with an extra point and a perpendicular bisector will unlock all three cases.
