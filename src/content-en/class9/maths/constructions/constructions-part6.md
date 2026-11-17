# Chapter: Constructions (Part 6)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [constructions-part5.md](constructions-part5.md).** (The chapter begins in [constructions.md](constructions.md).)
> **Topics covered in this file:**
> 6. Constructing Quadrilaterals

---

# Topic 6: Constructing Quadrilaterals

In the previous topics, we discovered that triangles are wonderfully **rigid**: given three valid measurements (such as SSS, SAS, or ASA), only one unique triangle can be formed — even when given a sum or perimeter (like Elena's $15\text{ cm}$ pennant). Now it is time for four-sided shapes. Are three measurements enough for a quadrilateral? No — and today we will see why. Best of all, we will construct every quadrilateral by **splitting it into triangles**, which we already know how to build! Since this is the final topic of the chapter, a full chapter wrap-up and construction checklist await at the end.

---

## Maya, Leo, and the Diamond Stage Panel

Maya was the lead set designer for her school's winter theatre production. She needed a large **rhombus (diamond-shaped) panel** for the backdrop and a **rectangular door frame** for the centrepiece. Her assistant, Leo, brought four wooden strips — all $5\text{ cm}$ long on their scale drawing — and said, "Maya, all four sides are equal, so we just nail the corners together and our diamond is done!"

Maya pinned the four strips together at the corners. When Leo gave the frame a light nudge, it flopped smoothly from a tall, skinny diamond into a wide, squat one — and even flat onto itself! Maya smiled, "See, Leo? Four sides alone do not lock in the shape. The frame **wobbles**. We need one more measurement — either a diagonal or an angle."

Leo thought for a second. "So a triangle needs $3$ measurements, and a quadrilateral needs $5$?" "Spot on," Maya replied. "Let us see why."

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Quadrilateral** | A closed four-sided polygon with $4$ sides and $4$ angles | Diamond panel, door frame |
| **Diagonal** | A straight segment joining two opposite vertices | $AC$ and $BD$ in quadrilateral $ABCD$ |
| **Independent measurement** | A measurement that cannot be deduced from the others already given | $4$ sides and $1$ diagonal |
| **Rhombus** | A quadrilateral with all four sides equal in length | Leo's diamond frame |
| **Parallelogram** | A quadrilateral with opposite sides parallel and equal | Built from two adjacent sides and the included angle |
| **Trapezium** | A quadrilateral with one pair of opposite sides parallel | $AB \parallel DC$ |
| **Kite** | A quadrilateral with two pairs of adjacent sides equal | $AB = AD$ and $CB = CD$ |
| **Reflect** | To construct the mirror image of a point across a line | Mirroring $\triangle ABC$ across $AC$ |

---

## Part A: How Many Measurements Does a Quadrilateral Need?

A quadrilateral has $4$ sides and $4$ angles — $8$ parts in all. Fortunately, we do not need all $8$: **constructing a general quadrilateral requires $5$ independent measurements**, such as $4$ sides and $1$ diagonal.

### Why Are 4 Sides Not Enough?

Think of the hinged frame from Mensuration ([mensuration-part2.md](../mensuration/mensuration-part2.md)), which pivots freely at its joints. Leo's frame works the same way: all four sides stay $5\text{ cm}$, yet flexing the corners changes the shape completely. A triangle cannot flex because three sides lock it rigid. Therefore:

- Adding one diagonal $AC$ splits the quadrilateral into **two triangles**, $\triangle ABC$ and $\triangle ACD$, each locked rigid by SSS!
- That gives $4\text{ sides} + 1\text{ diagonal} = 5\text{ measurements}$, completely fixing the shape.

Special quadrilaterals come with built-in "free" facts (for example, all four sides of a rhombus are equal), so we need fewer measurements to specify them, as we will see below.

For any construction using a diagonal, both resulting triangles must obey the triangle inequality (the sum of any two sides must exceed the third).

---

## Part B: General Quadrilateral — 4 Sides and 1 Diagonal

**Question:** Construct quadrilateral $ABCD$ with $AB = 4\text{ cm}$, $BC = 5\text{ cm}$, $CD = 4.5\text{ cm}$, $DA = 3.5\text{ cm}$, and diagonal $AC = 6\text{ cm}$.

**First check that both triangles exist:**
- $\triangle ABC$: sides $4, 5, 6$. $4 + 5 = 9 > 6$, $4 + 6 > 5$, $5 + 6 > 4$ ✅.
- $\triangle ACD$: sides $4.5, 3.5, 6$. $4.5 + 3.5 = 8 > 6$, $4.5 + 6 > 3.5$, $3.5 + 6 > 4.5$ ✅.

**Steps:**

- **Step 1:** Draw diagonal $AC = 6\text{ cm}$ with a ruler. Label $A$ and $C$.
- **Step 2:** With centre $A$ and radius $4\text{ cm}$, draw an arc **above** $AC$.
- **Step 3:** With centre $C$ and radius $5\text{ cm}$, draw an arc above $AC$ cutting the Step 2 arc at $B$.
- **Step 4:** Join $AB$ and $BC$. That completes $\triangle ABC$ (SSS).
- **Step 5:** With centre $A$ and radius $3.5\text{ cm}$, draw an arc **below** $AC$ (on the opposite side).
- **Step 6:** With centre $C$ and radius $4.5\text{ cm}$, draw an arc below $AC$ cutting the Step 5 arc at $D$.
- **Step 7:** Join $AD$ and $CD$. Quadrilateral $ABCD$ is complete.

> **Figure 6.1** – Quadrilateral $ABCD$ with diagonal $AC = 6\text{ cm}$, $B$ above $AC$ ($AB = 4$, $BC = 5$) and $D$ below $AC$ ($AD = 3.5$, $CD = 4.5$); diagonal $BD$ is shown dashed.

**Why Does It Work?** Diagonal $AC$ acts as the shared base for two rigid SSS triangles attached on opposite sides, locking all four vertices in place. (For quadrilateral angle sums and diagonal properties, see [quadrilaterals.md](../quadrilaterals/quadrilaterals.md).)

**Check:** Using coordinates $A = (0, 0)$ and $C = (6, 0)$, we get $B \approx (2.25, 3.31)$ and $D \approx (2.33, -2.61)$, giving diagonal $BD \approx \mathbf{5.92\text{ cm}}$. Measure $BD$ on your diagram: it should read about $5.9\text{ cm}$ ✅. You can also check $\angle ABC \approx 82.8^\circ$ and $\angle ADC \approx 96.4^\circ$ with a protractor ✅.

---

## Part C: Parallelogram — 2 Adjacent Sides and the Included Angle

**Question:** Construct parallelogram $ABCD$ with $AB = 5\text{ cm}$, $AD = 3\text{ cm}$, and $\angle A = 60^\circ$.

**Steps:**

- **Step 1:** Draw $AB = 5\text{ cm}$ with a ruler.
- **Step 2:** Place the protractor centre on $A$ with $0^\circ$ along $AB$, mark $60^\circ$, and draw a long ray from $A$.
- **Step 3:** With centre $A$ and radius $3\text{ cm}$, cut the ray at $D$ ($AD = 3\text{ cm}$).
- **Step 4:** With centre $D$ and radius $5\text{ cm}$, draw an arc to the right (since opposite side $DC = AB$).
- **Step 5:** With centre $B$ and radius $3\text{ cm}$, draw an arc above $AB$ cutting the Step 4 arc at $C$ (since opposite side $BC = AD$).
- **Step 6:** Join $DC$ and $BC$. $ABCD$ is the required parallelogram.

> **Figure 6.2** – Parallelogram $ABCD$ with $AB = 5\text{ cm}$, $AD = 3\text{ cm}$, $\angle DAB = 60^\circ$; $C$ is located by $5\text{ cm}$ arc from $D$ and $3\text{ cm}$ arc from $B$; diagonal $AC$ is dashed.

**Why Does It Work?** Opposite sides of a parallelogram are equal ($DC = AB$ and $BC = AD$). By swinging arcs of those exact lengths, we place $C$ so both pairs of opposite sides are equal, which guarantees a parallelogram ([quadrilaterals.md](../quadrilaterals/quadrilaterals.md)).

**Check:** With coordinates $A = (0, 0)$, $B = (5, 0)$, $D = (1.5, 2.598)$, we get $C = (6.5, 2.598)$. Diagonal $AC^2 = 6.5^2 + 2.598^2 = 42.25 + 6.75 = 49 \implies \mathbf{AC = 7\text{ cm}}$ ✅. The other diagonal is $BD = \sqrt{19} \approx \mathbf{4.36\text{ cm}}$ ✅. Also check $\angle B = 120^\circ$, since $\angle A + \angle B = 180^\circ$.

---

## Part D: Rhombus

### Method 1: Given One Side and One Diagonal

**Question:** Construct rhombus $ABCD$ with side $4\text{ cm}$ and diagonal $AC = 6\text{ cm}$.

All four sides of a rhombus are equal, so $\triangle ABC$ has sides $AB = BC = 4\text{ cm}$ and $AC = 6\text{ cm}$. Triangle check: $4 + 4 = 8 > 6$ ✅.

**Steps:**

- **Step 1:** Draw $AC = 6\text{ cm}$.
- **Step 2:** With centre $A$ and radius $4\text{ cm}$, draw an arc **above** $AC$.
- **Step 3:** With centre $C$ and radius $4\text{ cm}$, draw an arc above $AC$ cutting the first arc at $B$.
- **Step 4:** Keeping the radius at $4\text{ cm}$, draw arcs **below** $AC$ from centre $A$ and from centre $C$ to intersect at $D$ ($D$ is the mirror reflection of $B$ across $AC$).
- **Step 5:** Join $AB, BC, CD, DA$. $ABCD$ is the required rhombus.

> **Figure 6.3** – Rhombus $ABCD$ with every side $4\text{ cm}$ and diagonal $AC = 6\text{ cm}$, $B$ above $AC$ and $D$ below it (mirror image of $B$ across $AC$); dashed diagonal $BD$ meets $AC$ at $O$.

**Why Does It Work?** A rhombus has four equal sides and each diagonal splits it into two congruent isosceles triangles, making $D$ the reflection of $B$ across $AC$ ([quadrilaterals.md](../quadrilaterals/quadrilaterals.md)).

**Check:** If $O$ is the midpoint of $AC$, $AO = 3\text{ cm}$. In right $\triangle ABO$, $BO = \sqrt{4^2 - 3^2} = \sqrt{7}$, so **$\mathbf{BD = 2\sqrt{7} \approx 5.29\text{ cm}}$**. Measure $BD \approx 5.3\text{ cm}$ ✅ and verify $BD \perp AC$ ($90^\circ$) ✅. Angles should read $\angle ABC \approx 97.2^\circ$ and $\angle BAD \approx 82.8^\circ$.

### Method 2: Given Both Diagonals (Perpendicular Bisector Method)

**Question:** Construct rhombus $ABCD$ with diagonals $AC = 8\text{ cm}$ and $BD = 6\text{ cm}$.

**Steps:**

- **Step 1:** Draw $AC = 8\text{ cm}$.
- **Step 2:** With centre $A$ and radius $5\text{ cm}$ (more than half of $AC$), draw arcs above and below $AC$.
- **Step 3:** With centre $C$ and the same radius $5\text{ cm}$, draw arcs above and below $AC$ cutting the previous arcs at $X$ (above) and $Y$ (below).
- **Step 4:** Join $X$ and $Y$. This is the perpendicular bisector of $AC$ (Topic 1), cutting $AC$ at $O$ with $AO = OC = 4\text{ cm}$.
- **Step 5:** With centre $O$ and radius $3\text{ cm}$, cut line $XY$ above and below $O$. Label the upper point $B$ and the lower point $D$ ($OB = OD = 3\text{ cm}$, so $BD = 6\text{ cm}$).
- **Step 6:** Join $AB, BC, CD, DA$. $ABCD$ is the required rhombus.

> **Figure 6.4** – Rhombus $ABCD$ with diagonals $AC = 8\text{ cm}$ (horizontal) and $BD = 6\text{ cm}$ (vertical) crossing at $O$, where $OA = OC = 4\text{ cm}$ and $OB = OD = 3\text{ cm}$.

**Why Does It Work?** The diagonals of a rhombus bisect each other at $90^\circ$, which is precisely what the perpendicular bisector produces ([quadrilaterals.md](../quadrilaterals/quadrilaterals.md)).

**Check:** In right $\triangle AOB$, $OA = 4$ and $OB = 3$. By [Pythagoras' theorem](../pythagoras-theorem/pythagoras-theorem.md), $AB = \sqrt{4^2 + 3^2} = \sqrt{25} = \mathbf{5\text{ cm}}$. Measure all four sides: each should be $5\text{ cm}$ ✅ (a $3$-$4$-$5$ triple).

---

## Part E: Rectangle — Given Length and Breadth

**Question:** Construct rectangle $ABCD$ with $AB = 5\text{ cm}$ and $BC = AD = 3\text{ cm}$.

**Steps:**

- **Step 1:** Draw $AB = 5\text{ cm}$.
- **Step 2:** Construct $90^\circ$ at $A$ (Topic 3): with centre $A$ and radius $2\text{ cm}$, cut $AB$ at $P$ and extend $BA$ backward to cut at $Q$; with centres $P$ and $Q$ and radius $3\text{ cm}$, draw arcs above $A$ meeting at $R$. Draw ray $AR$, so $\angle BAR = 90^\circ$.
- **Step 3:** With centre $A$ and radius $3\text{ cm}$, cut ray $AR$ at $D$.
- **Step 4:** With centre $D$ and radius $5\text{ cm}$, draw an arc to the right.
- **Step 5:** With centre $B$ and radius $3\text{ cm}$, draw an arc above $AB$ cutting the Step 4 arc at $C$.
- **Step 6:** Join $DC$ and $BC$. $ABCD$ is the required rectangle.

> **Figure 6.5** – Rectangle $ABCD$ with $AB = DC = 5\text{ cm}$ and $AD = BC = 3\text{ cm}$, right angle at $A$, and dashed diagonal $AC$.

**Why Does It Work?** A rectangle is a parallelogram with one $90^\circ$ angle (forcing all four angles to be $90^\circ$). We combined our $90^\circ$ construction at $A$ with the parallelogram arc trick ([quadrilaterals.md](../quadrilaterals/quadrilaterals.md)).

**Check:** Diagonal $AC = \sqrt{5^2 + 3^2} = \sqrt{34} \approx \mathbf{5.83\text{ cm}}$. Measure both diagonals $AC$ and $BD$: they should be equal and near $5.83\text{ cm}$ ✅, and all four angles should read $90^\circ$ ✅.

---

## Part F: Square — Given One Side

**Question:** Construct square $ABCD$ with side $4\text{ cm}$.

**Steps:**

- **Step 1:** Draw $AB = 4\text{ cm}$.
- **Step 2:** Construct $90^\circ$ at $A$: cut $AB$ at $P$ and backward at $Q$ with radius $2\text{ cm}$ from $A$; draw $3\text{ cm}$ arcs from $P$ and $Q$ meeting at $R$, and draw ray $AR$.
- **Step 3:** With centre $A$ and radius $4\text{ cm}$, cut ray $AR$ at $D$.
- **Step 4:** With centre $B$ and radius $4\text{ cm}$, draw an arc; with centre $D$ and radius $4\text{ cm}$, draw an arc cutting it at $C$.
- **Step 5:** Join $BC$ and $DC$. $ABCD$ is the required square.

> **Figure 6.6** – Square $ABCD$ with every side $4\text{ cm}$ and $\angle A = 90^\circ$; both diagonals $AC$ and $BD$ are shown dashed, intersecting at $90^\circ$.

**Why Does It Work?** A square has all four sides equal and all four angles $90^\circ$ — acting as both a special rectangle and a special rhombus ([quadrilaterals.md](../quadrilaterals/quadrilaterals.md)).

**Check:** Diagonal $AC = \sqrt{4^2 + 4^2} = \sqrt{32} = 4\sqrt{2} \approx \mathbf{5.66\text{ cm}}$. Both diagonals should measure $5.66\text{ cm}$ ✅ and intersect at $90^\circ$ ✅.

---

## Part G: Trapezium

**Question:** Construct trapezium $ABCD$ with $AB \parallel DC$, $AB = 6\text{ cm}$, $DC = 3\text{ cm}$, $AD = 2.5\text{ cm}$, and $BC = 3\text{ cm}$.

**Trick (sliding one leg):** Imagine drawing a line from $C$ parallel to $AD$ meeting $AB$ at $E$. Then $AECD$ is a parallelogram ($AE \parallel DC$ and $EC \parallel AD$), so $AE = DC = 3\text{ cm}$ and $EC = AD = 2.5\text{ cm}$. That leaves $EB = AB - AE = 6 - 3 = 3\text{ cm}$. Now we know all three sides of $\triangle EBC$: $EB = 3$, $BC = 3$, $CE = 2.5$!

**First check:** In $\triangle EBC$, $3 + 3 = 6 > 2.5$ and $3 + 2.5 = 5.5 > 3$ ✅. The triangle exists.

**Steps:**

- **Step 1:** Draw $AB = 6\text{ cm}$.
- **Step 2:** On $AB$, mark $E$ at $3\text{ cm}$ from $A$ ($AE = 3\text{ cm}$, $EB = 3\text{ cm}$).
- **Step 3:** With centre $B$ and radius $3\text{ cm}$, draw an arc above $AB$.
- **Step 4:** With centre $E$ and radius $2.5\text{ cm}$, draw an arc above $AB$ cutting the Step 3 arc at $C$. That forms $\triangle EBC$ (SSS).
- **Step 5:** With centre $C$ and radius $3\text{ cm}$ ($DC = 3$), draw an arc to the left (toward $A$).
- **Step 6:** With centre $A$ and radius $2.5\text{ cm}$ ($AD = 2.5$), draw an arc cutting the Step 5 arc at $D$ (above $AB$, to the left of $C$).
- **Step 7:** Join $AD$ and $DC$ (erase or lighten the helper mark $E$). $ABCD$ is the required trapezium.

> **Figure 6.7** – Trapezium $ABCD$ with $AB = 6\text{ cm}$ parallel to $DC = 3\text{ cm}$, legs $AD = 2.5\text{ cm}$ and $BC = 3\text{ cm}$; $E$ lies on $AB$ with $AE = 3\text{ cm}$, and dashed $EC$ is parallel to $AD$.

**Why Does It Work?** Sliding leg $AD$ across to $EC$ splits the trapezium into parallelogram $AECD$ and triangle $\triangle EBC$. Opposite sides of a parallelogram are equal ([quadrilaterals.md](../quadrilaterals/quadrilaterals.md)), locating $C$ and $D$ cleanly.

**Check (using coordinates):** $A = (0, 0)$, $B = (6, 0)$, $E = (3, 0)$ give $C = (4.042, 2.273)$ and $D = (1.042, 2.273)$. Check: $AD = \sqrt{1.042^2 + 2.273^2} = 2.5$ ✅, $DC = 3$ ✅, $BC = 3$ ✅. Height $= \mathbf{2.27\text{ cm}}$, $\angle A = \angle CEB \approx 65.4^\circ$, $\angle B \approx 49.2^\circ$. Measure $DC \parallel AB$ (both $D$ and $C$ sit $2.27\text{ cm}$ above $AB$) ✅. Area $= \frac{6 + 3}{2} \times 2.27 \approx 10.23\text{ cm}^2$.

---

## Part H: Kite

**Question:** Construct kite $ABCD$ with $AB = AD = 3\text{ cm}$, $CB = CD = 5\text{ cm}$, and $BD = 4\text{ cm}$.

**First check:** In $\triangle ABD$, $3 + 3 = 6 > 4$ ✅. In $\triangle CBD$, $5 + 5 = 10 > 4$ ✅.

**Steps:**

- **Step 1:** Draw $BD = 4\text{ cm}$.
- **Step 2:** With radius $3\text{ cm}$ from centre $B$ and centre $D$, draw arcs **above** $BD$ meeting at $A$.
- **Step 3:** With radius $5\text{ cm}$ from centre $B$ and centre $D$, draw arcs **below** $BD$ meeting at $C$.
- **Step 4:** Join $AB, AD, CB, CD$. $ABCD$ is the required kite.

> **Figure 6.8** – Kite $ABCD$ with $AB = AD = 3\text{ cm}$ and $CB = CD = 5\text{ cm}$, horizontal diagonal $BD = 4\text{ cm}$, $A$ above $BD$ and $C$ below it; dashed diagonal $AC$ is perpendicular to $BD$.

**Why Does It Work?** Both $A$ and $C$ are equidistant from $B$ and $D$, so both lie on the perpendicular bisector of $BD$. Thus $AC \perp BD$, the defining symmetry of a kite ([quadrilaterals.md](../quadrilaterals/quadrilaterals.md)).

**Check:** From the midpoint of $BD$, the distance to $A$ is $\sqrt{3^2 - 2^2} = \sqrt{5} \approx 2.24$ and to $C$ is $\sqrt{5^2 - 2^2} = \sqrt{21} \approx 4.58$. Thus **$\mathbf{AC = \sqrt{5} + \sqrt{21} \approx 6.82\text{ cm}}$** ✅, and $AC$ meets $BD$ at $90^\circ$ ✅.

---

## Story Solved: Maya's Diamond Panel and Door Frame

Maya chose a scale of **$1\text{ cm drawing} = 25\text{ cm actual}$** and put Leo to work:

**Diamond panel (rhombus):** diagonals $6\text{ cm}$ and $8\text{ cm}$. That is Part D, Method 2 (Figure 6.4): $AC = 8$, perpendicular bisector, $OB = OD = 3\text{ cm}$, giving side $= 5\text{ cm}$.

**Door frame (rectangle):** $5\text{ cm} \times 3\text{ cm}$. That is Part E (Figure 6.5).

| Component | On paper | Actual size ($\times 25$) |
|---|---|---|
| Longer diagonal of panel | $8\text{ cm}$ | $200\text{ cm}$ |
| Shorter diagonal of panel | $6\text{ cm}$ | $150\text{ cm}$ |
| Each side of panel | $5\text{ cm}$ | $125\text{ cm}$ |
| Height of door frame | $5\text{ cm}$ | $125\text{ cm}$ |
| Width of door frame | $3\text{ cm}$ | $75\text{ cm}$ |
| Diagonal of door frame | $\sqrt{34} \approx 5.83\text{ cm}$ | $\approx 145.8\text{ cm}$ |

Leo measured the door frame's diagonals: "Maya, this frame is only a true rectangle if both diagonals measure $145.8\text{ cm}$!" Maya nodded, "Brilliant — now it will never rack out of square." For the diamond panel, they cut four $125\text{ cm}$ timber strips and braced the middle with a $200\text{ cm}$ diagonal strut so the panel stayed completely rigid.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Assuming four side lengths fix a quadrilateral.**
   Four $5\text{ cm}$ strips can form a wide diamond or a flat squashed parallelogram (a hinged frame). You always need an extra measurement, such as a diagonal or an angle.

2. **Mistake 2: Building both triangles on the same side of the diagonal.**
   In Part B, if you mark $D$ on the same side of $AC$ as $B$, the two triangles overlap and fail to enclose a four-sided figure. Always place $D$ on the **opposite side** of $AC$.

3. **Mistake 3: Using full diagonals instead of half-diagonals to find a rhombus's side.**
   With diagonals $6$ and $8$, right $\triangle AOB$ uses **half-diagonals** ($3$ and $4$). Computing $\sqrt{6^2 + 8^2} = 10$ is wrong; the true side is $\sqrt{3^2 + 4^2} = \mathbf{5}$. Also make sure both triangles sit on the same base diagonal you drew.

4. **Mistake 4: Skipping the final angle check.**
   In a parallelogram, $\angle A = 60^\circ$ must force $\angle B = 120^\circ$; in a rectangle, all four angles must measure $90^\circ$. Skipping checks lets small ruler errors go unnoticed.

5. **Mistake 5: Ignoring the triangle inequality.**
   If $AC = 9\text{ cm}$, $AB = 4\text{ cm}$, and $BC = 5\text{ cm}$, then $4 + 5 = 9$ collapses into a straight line instead of a triangle. Always check first!

---

## Quick Recap

- Constructing a general quadrilateral requires **$5$ independent measurements** (such as $4$ sides and $1$ diagonal); $4$ sides alone can wobble.
- Split every quadrilateral along a diagonal into **triangles**, and build each triangle by SSS or SAS.
- **General quadrilateral:** draw $AC$, construct $B$ on one side and $D$ on the opposite side.
- **Parallelogram:** draw two adjacent sides and the included angle, then swing two arcs to locate $C$.
- **Rhombus:** side + diagonal (SSS and reflect), or two diagonals (perpendicular bisector), with $\text{side} = \sqrt{(d_1/2)^2 + (d_2/2)^2}$.
- **Rectangle:** $90^\circ$ angle and arcs, diagonal $= \sqrt{l^2 + b^2}$. **Square:** diagonal $= \text{side} \times \sqrt{2}$.
- **Trapezium:** slide one leg across to form $\triangle EBC$ with $EB = AB - DC$.
- **Kite:** build two SSS triangles on opposite sides of diagonal $BD$.

---

## Practice Questions

1. Why are four sides alone not enough to fix the shape of a quadrilateral? Give an example with a rhombus of side $5\text{ cm}$.

2. Construct quadrilateral $PQRS$ with $PQ = 3\text{ cm}$, $QR = 4\text{ cm}$, $RS = 5\text{ cm}$, $SP = 4\text{ cm}$ and diagonal $PR = 5\text{ cm}$. First check that both triangles exist.

3. Construct a parallelogram with adjacent sides $4\text{ cm}$ and $3\text{ cm}$ and the angle between them $90^\circ$. What shape do you get? What is its diagonal?

4. Construct a rhombus with diagonals $6\text{ cm}$ and $4.5\text{ cm}$ and find its side by Pythagoras. Then find the area of the rhombus using the diagonals.

5. Construct a rectangle $6\text{ cm}$ by $4\text{ cm}$. Find the length of each diagonal to two decimal places.

6. Construct a square of side $5\text{ cm}$. Find its diagonal to two decimal places.

7. Construct a trapezium $ABCD$ with $AB \parallel DC$, $AB = 7\text{ cm}$, $DC = 4\text{ cm}$, $AD = 3\text{ cm}$ and $BC = 3.5\text{ cm}$. Which triangle do you build first? What are its sides? Does it exist?

8. Construct a kite with $AB = AD = 4\text{ cm}$, $CB = CD = 6\text{ cm}$ and $BD = 5\text{ cm}$. Find the length of $AC$.

9. Say whether each statement is true or false, giving a reason.
   (a) A quadrilateral can always be built from its four sides alone.
   (b) A quadrilateral with all four sides $5\text{ cm}$ and one diagonal $5\text{ cm}$ is a rhombus made of two equilateral triangles.
   (c) A quadrilateral cannot be built with sides $2, 2, 2, 2\text{ cm}$ and diagonal $5\text{ cm}$.

10. In the story, Maya's scale is $1\text{ cm} = 25\text{ cm}$. If the panel's longer diagonal were $3\text{ m}$, what would it be in the drawing?

### Answers

1. Even with all four sides fixed, the corner hinges can pivot freely. Four $5\text{ cm}$ sides can form a wide square or a narrow, slanted diamond with different angles. Adding one diagonal splits the frame into two rigid triangles.

2. $\triangle PQR$: $3, 4, 5$, and $3 + 4 = 7 > 5$ ✅. $\triangle PRS$: $5, 5, 4$, and $5 + 4 = 9 > 5$ ✅. Draw $PR = 5\text{ cm}$. Locate $Q$ on one side with $3\text{ cm}$ arc from $P$ and $4\text{ cm}$ arc from $R$; locate $S$ on the opposite side with $4\text{ cm}$ arc from $P$ and $5\text{ cm}$ arc from $R$. Join the edges. Check: $\angle Q = 90^\circ$ ($3$-$4$-$5$) with a protractor ✅.

3. This forms a **$4\text{ cm} \times 3\text{ cm}$ rectangle**, because the angle is $90^\circ$. Diagonal $= \sqrt{16 + 9} = \mathbf{5\text{ cm}}$ ✅.

4. Half-diagonals are $3\text{ cm}$ and $2.25\text{ cm}$. Side $= \sqrt{3^2 + 2.25^2} = \sqrt{9 + 5.0625} = \sqrt{14.0625} = \mathbf{3.75\text{ cm}}$. Area $= \frac{1}{2} \times 6 \times 4.5 = \mathbf{13.5\text{ cm}^2}$. Check: $4$ right triangles, each of area $\frac{1}{2} \times 3 \times 2.25 = 3.375$, and $4 \times 3.375 = \mathbf{13.5}$ ✅; also $3.75^2 = 14.0625$ ✅.

5. Diagonal $= \sqrt{36 + 16} = \sqrt{52} \approx \mathbf{7.21\text{ cm}}$. Check: $7.21^2 = 51.98 \approx 52$ ✅.

6. Diagonal $= 5\sqrt{2} = \sqrt{50} \approx \mathbf{7.07\text{ cm}}$. Check: $7.07^2 \approx 49.98 \approx 50$ ✅.

7. Mark $E$ on $AB$ at $4\text{ cm}$ from $A$, leaving $EB = 7 - 4 = 3\text{ cm}$. Build **$\triangle EBC$** first, with sides $EB = 3$, $BC = 3.5$, $CE = AD = 3$. Check: $3 + 3 = 6 > 3.5$ and $3 + 3.5 > 3$ ✅, so it exists. After constructing $\triangle EBC$, swing a $4\text{ cm}$ arc from $C$ and a $3\text{ cm}$ arc from $A$ to locate $D$.

8. From the midpoint of $BD$, distance to $A$ is $\sqrt{4^2 - 2.5^2} = \sqrt{9.75} \approx 3.12$ and to $C$ is $\sqrt{6^2 - 2.5^2} = \sqrt{29.75} \approx 5.45$. Thus **$\mathbf{AC = \sqrt{9.75} + \sqrt{29.75} \approx 8.58\text{ cm}}$**. Check: triangles $4, 4, 5$ and $6, 6, 5$ both exist ($4 + 4 > 5$ and $6 + 6 > 5$) ✅.

9. (a) **False** ❌. A four-sided frame pivots freely unless a diagonal or angle is given.
   (b) **True** ✅. A $5\text{ cm}$ diagonal splits it into two $5$-$5$-$5$ equilateral triangles, and all four outer sides are $5\text{ cm}$, making it a rhombus.
   (c) **True** ✅. A triangle with sides $2, 2, 5$ violates the triangle inequality ($2 + 2 = 4 < 5$), so it cannot exist.

10. $3\text{ m} = 300\text{ cm}$, so on paper it measures $300 \div 25 = \mathbf{12\text{ cm}}$. Check: $12 \times 25 = 300$ ✅.

---

Now you can construct any quadrilateral using just a compass, ruler, and protractor by breaking it into triangles. Well done!

---

# Chapter Wrap-up: Constructions

| Topic | What you learned | Key takeaway |
|---|---|---|
| 1. Geometry box, segments, perpendicular bisector | Proper compass and ruler technique, drawing and copying segments, perpendicular bisector, dividing a segment into $2$ or $4$ equal parts | Radius must exceed half the segment and stay identical from both ends; every point on the bisector is equidistant from both endpoints |
| 2. Angle constructions | Drawing, copying, and bisecting angles; building $60^\circ, 30^\circ, 90^\circ, 45^\circ, 15^\circ, 75^\circ, 105^\circ, 135^\circ, 150^\circ, 22\frac{1}{2}^\circ$ | $60^\circ$ comes straight from an equilateral triangle; bisecting and combining unlocks the rest |
| 3. Perpendiculars and parallels | Perpendicular at a point on a line or from an outside point, parallel lines, distance between parallels | Both perpendiculars and parallels are built with compass arcs and congruence |
| 4. Triangles (SSS, SAS, ASA, AAS, RHS) | Constructing triangles from standard criteria, plus equilateral and isosceles triangles | Three valid measurements fix a unique triangle; always check the triangle inequality first; SSA does not fix a triangle |
| 5. Triangles (sum, difference, perimeter) | Base, base angle, and sum or difference of sides; perimeter and two base angles | Mark auxiliary point $D$ (or perimeter $PQ$) and use perpendicular bisectors to force equal lengths ($AD = AC$, $YX = YP$); $\text{sum} > \text{base}$, $\text{difference} < \text{base}$ |
| 6. Quadrilaterals | $4$ sides + $1$ diagonal, parallelogram, rhombus, rectangle, square, trapezium, kite | Requires $5$ independent measurements; break every quadrilateral into triangles |

### Construction Checklist (Method from Given Data)

| Given data | Method |
|---|---|
| Length of a line segment | Measure with a ruler, or copy with a compass |
| Halving a segment | Equal arcs ($> \frac{1}{2}$ length) from both ends to draw the perpendicular bisector |
| Angle in degrees | Protractor, or $60^\circ$ with compass followed by bisecting/combining |
| Halving an angle | Angle bisector (equal arcs from points on both arms) |
| Perpendicular from a point | Equal arcs to create a symmetric segment, then its perpendicular bisector |
| Line parallel to a given line | Copy a corresponding angle, or use the rhombus method (one fixed radius) |
| Parallel line at distance $d$ | Erect two perpendiculars of length $d$ on $l$ and join their endpoints |
| Triangle: SSS | Base segment, then two intersecting arcs |
| Triangle: SAS | Two sides with the included angle between them |
| Triangle: ASA or AAS | One side and two angles (find the third angle using $180^\circ$ if AAS) |
| Triangle: RHS | Construct $90^\circ$, mark one leg, cut the ray with a hypotenuse arc |
| Triangle: sum or difference of sides | Mark $BD = \text{sum}$ or $\text{difference}$ along ray $BX$ (or opposite ray if $AB < AC$), then bisect $DC$ to locate $A$ |
| Triangle: perimeter and two base angles | Draw $PQ = \text{perimeter}$, construct half-angles at $P$ and $Q$ meeting at $X$, bisect $XP$ and $XQ$ to find $Y$ and $Z$ |
| Quadrilateral: $4$ sides + $1$ diagonal | Two SSS triangles on opposite sides of the diagonal |
| Parallelogram: $2$ sides + included angle | Construct the angle, swing two arcs for the 4th vertex |
| Rhombus: side + diagonal | Build one SSS triangle and reflect across the diagonal |
| Rhombus: $2$ diagonals | Draw $AC$, construct its perpendicular bisector, mark half of $BD$ on each side |
| Rectangle or square | Construct $90^\circ$ at one corner, then locate the 4th vertex with arcs |
| Trapezium | Slide one leg to build $\triangle EBC$ first, where $EB = AB - DC$ |
| Kite | Two SSS triangles on opposite sides of the symmetry diagonal $BD$ |

---

From single line segments all the way to full quadrilaterals, every geometric figure is now at your fingertips with a compass and straightedge!
