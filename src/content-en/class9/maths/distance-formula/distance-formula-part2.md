# Chapter: Distance Formula (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [distance-formula.md](distance-formula.md)** (which covered Topic 1: horizontal/vertical distances, deriving the distance formula from the Pythagoras theorem, and distance from the origin).
> **Helpful prior knowledge:** [Triangles](../triangles/triangles.md), [Converse of the Pythagoras Theorem](../pythagoras-theorem/pythagoras-theorem-part3.md), and [Quadrilaterals](../quadrilaterals/quadrilaterals.md).
> **Topics covered in this file:**
> 2. Identifying Shapes Using the Distance Formula

---

# Topic 2: Identifying Shapes Using the Distance Formula

In Topic 1, Leo and Elena discovered that the distance between explorer $(1, 2)$ and chest $(4, 6)$ was $5$ units (a $3\text{-}4\text{-}5$ right triangle), and we built the general formula **$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$** for any two points on a coordinate grid. Now let us ask a bigger question: if you are given **three or four points**, can you tell **which exact geometric shape** they form using nothing but their distances?

Absolutely! We already studied the types of triangles ([triangles.md](../triangles/triangles.md)) and quadrilaterals ([quadrilaterals.md](../quadrilaterals/quadrilaterals.md)) visually with rulers and protractors. Here, we need neither ruler nor protractor—**numbers alone will tell the whole story**.

---

## Sophia and Contractor Liam's Town Plaza

Sophia is a young urban planner designing a new **square-shaped public plaza**. On her GPS coordinate map, she marks the positions of four corner lamp-posts:

$$A(1, 0), \quad B(3, 1), \quad C(2, 3), \quad D(0, 2)$$

When contractor Liam inspects the site blueprint, he shakes his head. "Sophia, this doesn't look like a square to me—it's tilted sideways! Are you sure these four posts form a true square? I'll need solid proof before we pour concrete."

Sophia smiles. "Fair enough, Liam. I'll prove it to you using pure numbers."

By the end of this topic, you will be able to give Liam that exact proof yourself. First, let us build our toolkit with triangles, then move on to quadrilaterals.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Side length** | The distance between two adjacent vertices of a shape | $AB = \sqrt{5}$ |
| **Diagonal** | A line segment connecting two opposite (non-adjacent) vertices of a quadrilateral | $AC$ and $BD$ |
| **Order of vertices** | Listing points sequentially as you walk around the perimeter of a shape | $A \to B \to C \to D \to A$ |
| **Converse check** | Testing whether the sum of the squares of the two shorter sides equals the square of the longest side (proving a $90^\circ$ angle) | $5 + 20 = 25$ |
| **Right isosceles** | A triangle that has both one $90^\circ$ angle and two equal sides | Sides $\sqrt{20}, \sqrt{20}, \sqrt{40}$ |

---

## Part A: Type of Triangle from Coordinates Only

Suppose you are given three vertices $A$, $B$, and $C$. Here is how to classify $\triangle ABC$:

> **Step 1:** Compute all three side lengths $AB$, $BC$, and $CA$ using the distance formula.
> **Step 2:** Compare the lengths to check if any sides are equal.
> **Step 3:** Run the Pythagoras converse check to test for a $90^\circ$ angle.

Use this guide to classify the triangle:

| Observation | Type of Triangle |
|---|---|
| Two sides equal | **Isosceles** |
| All three sides equal | **Equilateral** |
| All three sides different | **Scalene** |
| $(\text{longest side})^2 = \text{sum of squares of other two sides}$ | **Right-angled** |
| Right-angled **and** two sides equal | **Right isosceles** |

Remember that these categories can overlap! A triangle can be both isosceles and right-angled (right isosceles), or scalene and right-angled. That is why you should always check **both** side equality and the converse condition.

**Handy shortcut:** Instead of writing square roots repeatedly, compute **$d^2$** (the squared distance) first! Two distances are equal if and only if their squares are equal, and the converse check already uses squares. Take square roots only when stating the final side lengths.

### Example 1: Isosceles Triangle

Vertices: **$A(0, 4), B(3, 0), C(6, 4)$**. Identify the type of triangle.

- $AB^2 = (3 - 0)^2 + (0 - 4)^2 = 9 + 16 = 25 \implies \mathbf{AB = 5}$
- $BC^2 = (6 - 3)^2 + (4 - 0)^2 = 9 + 16 = 25 \implies \mathbf{BC = 5}$
- $CA^2 = (6 - 0)^2 + (4 - 4)^2 = 36 + 0 = 36 \implies \mathbf{CA = 6}$

Since $AB = BC = 5$ while $CA = 6$ is different, **two sides are equal, so the triangle is isosceles**.

Is it also right-angled? The longest side is $CA = 6$. Run the converse check:
$$AB^2 + BC^2 = 25 + 25 = 50, \quad \text{while } CA^2 = 36 \quad (50 \neq 36)$$

**Check:** $50 \neq 36$, so there is no right angle ✅. The triangle is **isosceles** (and not right-angled).

### Example 2: A Triangle That *Looks* Equilateral

Vertices: **$A(0, 0), B(4, 0), C(2, 3)$**. At a glance on a grid, this looks nearly equilateral. Is it?

- $AB^2 = (4 - 0)^2 + (0 - 0)^2 = 16 \implies \mathbf{AB = 4}$
- $BC^2 = (2 - 4)^2 + (3 - 0)^2 = 4 + 9 = 13 \implies \mathbf{BC = \sqrt{13}}$
- $CA^2 = (2 - 0)^2 + (3 - 0)^2 = 4 + 9 = 13 \implies \mathbf{CA = \sqrt{13}}$

Since $\sqrt{13} \approx 3.61$, which is slightly less than $4$, we have $BC = CA$ while $AB$ is different. Therefore it is **only isosceles**, not equilateral!

**Check:** $13 \neq 16$, so the three sides are not all equal ✅. Your eyes might miss the difference between $3.61$ and $4$, but the numbers catch it immediately.

**What does a true equilateral triangle look like in coordinates?** Consider $P(0, 0), Q(2, 0), R(1, \sqrt{3})$:
- $PQ^2 = 4 \implies PQ = 2$
- $QR^2 = (1 - 2)^2 + (\sqrt{3} - 0)^2 = 1 + 3 = 4 \implies QR = 2$
- $RP^2 = (1 - 0)^2 + (\sqrt{3} - 0)^2 = 1 + 3 = 4 \implies RP = 2$

All three sides equal $2$, so $\triangle PQR$ is **genuinely equilateral**. *(Remember: $(\sqrt{3})^2 = 3$.)*

### Example 3: Right-Angled Triangle

Vertices: **$A(5, 2), B(3, 1), C(1, 5)$**. Classify the triangle.

- $AB^2 = (3 - 5)^2 + (1 - 2)^2 = 4 + 1 = 5 \implies \mathbf{AB = \sqrt{5}}$
- $BC^2 = (1 - 3)^2 + (5 - 1)^2 = 4 + 16 = 20 \implies \mathbf{BC = \sqrt{20} = 2\sqrt{5}}$
- $CA^2 = (1 - 5)^2 + (5 - 2)^2 = 16 + 9 = 25 \implies \mathbf{CA = 5}$

All three sides have different lengths, so it is **scalene**. The longest side is **$CA = 5$** (since $25$ is the largest $d^2$). Run the converse check:

$$AB^2 + BC^2 = 5 + 20 = 25 = CA^2$$

By the converse of the Pythagoras theorem, the angle opposite the longest side $CA$ is $90^\circ$. Since vertex $B$ sits opposite side $CA$, **$\angle B = 90^\circ$**. The triangle is **right-angled scalene**.

**Check:** $5 + 20 = 25$ ✅

**A quick right-isosceles example:** $P(2, 1), Q(6, 3), R(4, 7)$.
- $PQ^2 = (6 - 2)^2 + (3 - 1)^2 = 16 + 4 = 20$
- $QR^2 = (4 - 6)^2 + (7 - 3)^2 = 4 + 16 = 20$
- $RP^2 = (4 - 2)^2 + (7 - 1)^2 = 4 + 36 = 40$

Here $PQ = QR = \sqrt{20}$ (isosceles) and $PQ^2 + QR^2 = 20 + 20 = 40 = RP^2$ (right angle at $Q$). Both properties hold, so $\triangle PQR$ is **right isosceles**.

---

## Part B: Type of Quadrilateral from Four Vertices

When given four points $A, B, C, D$, you need to calculate **6 distances** to identify the quadrilateral with certainty:
- **4 sides**: $AB, BC, CD, DA$
- **2 diagonals**: $AC$ and $BD$

First, make sure the vertices are listed **in order** around the perimeter: $A \to B \to C \to D \to \text{back to } A$. Otherwise, sides and diagonals will get mixed up (as we will see in Common Pitfalls).

### Decision Table

| Observation | Quadrilateral |
|---|---|
| Opposite sides equal | **Parallelogram** |
| All four sides equal | **Rhombus** |
| Opposite sides equal **and** diagonals equal | **Rectangle** |
| All four sides equal **and** diagonals equal | **Square** |

Notice two clean rules from this table:

1. **Parallelogram + equal diagonals = Rectangle.** In a general parallelogram, the two diagonals have different lengths; as soon as they become equal, all corners are $90^\circ$ and it is a rectangle.
2. **Rhombus + equal diagonals = Square.** A rhombus already has four equal sides; if its diagonals are also equal, it is a square.

**Why does this work?** In [quadrilaterals.md](../quadrilaterals/quadrilaterals.md), we proved that equal opposite sides guarantee a parallelogram, four equal sides guarantee a rhombus, and a parallelogram/rhombus with equal diagonals must be a rectangle/square. Here we are simply verifying those properties with coordinates!

### Example 4: Sophia's Plaza (The Proof for Liam)

Vertices in order $A \to B \to C \to D \to A$: **$A(1, 0), B(3, 1), C(2, 3), D(0, 2)$**.

**Sides:**
- $AB^2 = (3 - 1)^2 + (1 - 0)^2 = 4 + 1 = 5 \implies \mathbf{AB = \sqrt{5}}$
- $BC^2 = (2 - 3)^2 + (3 - 1)^2 = 1 + 4 = 5 \implies \mathbf{BC = \sqrt{5}}$
- $CD^2 = (0 - 2)^2 + (2 - 3)^2 = 4 + 1 = 5 \implies \mathbf{CD = \sqrt{5}}$
- $DA^2 = (1 - 0)^2 + (0 - 2)^2 = 1 + 4 = 5 \implies \mathbf{DA = \sqrt{5}}$

All four sides are equal, so it is definitely at least a **rhombus**.

**Diagonals:**
- $AC^2 = (2 - 1)^2 + (3 - 0)^2 = 1 + 9 = 10 \implies \mathbf{AC = \sqrt{10}}$
- $BD^2 = (0 - 3)^2 + (2 - 1)^2 = 9 + 1 = 10 \implies \mathbf{BD = \sqrt{10}}$

Both diagonals are equal as well! A rhombus with equal diagonals is a **square**.

Sophia shows Liam this summary table:

| Measurement | Value |
|---|---|
| $AB, BC, CD, DA$ | All $\sqrt{5}$ |
| $AC, BD$ | Both $\sqrt{10}$ |

Liam looks over the numbers and nods. "All four sides equal, and both diagonals equal. Even though it sits tilted on the grid, it's a genuine square!" Sophia replies, "Exactly—it is simply rotated relative to the street grid, not warped."

**Check:** For a square of side $\sqrt{5}$, the diagonal must be $\text{side} \times \sqrt{2} = \sqrt{5} \times \sqrt{2} = \sqrt{10}$ ✅—matching what the distance formula gave!

Liam signs off on the blueprint, and construction begins.

### Example 5: Rectangle

Vertices in order $A \to B \to C \to D \to A$: **$A(1, 0), B(5, 2), C(4, 4), D(0, 2)$**. What shape is it?

**Sides:**
- $AB^2 = (5 - 1)^2 + (2 - 0)^2 = 16 + 4 = 20 \implies \mathbf{AB = \sqrt{20}}$
- $BC^2 = (4 - 5)^2 + (4 - 2)^2 = 1 + 4 = 5 \implies \mathbf{BC = \sqrt{5}}$
- $CD^2 = (0 - 4)^2 + (2 - 4)^2 = 16 + 4 = 20 \implies \mathbf{CD = \sqrt{20}}$
- $DA^2 = (1 - 0)^2 + (0 - 2)^2 = 1 + 4 = 5 \implies \mathbf{DA = \sqrt{5}}$

Opposite sides are equal ($AB = CD$ and $BC = DA$), though not all four sides are equal. So it is at least a **parallelogram**. Now check the diagonals:

- $AC^2 = (4 - 1)^2 + (4 - 0)^2 = 9 + 16 = 25 \implies \mathbf{AC = 5}$
- $BD^2 = (0 - 5)^2 + (2 - 2)^2 = 25 + 0 = 25 \implies \mathbf{BD = 5}$

The diagonals are equal! A parallelogram with equal diagonals is a **rectangle**. Because adjacent sides are unequal ($\sqrt{20} \neq \sqrt{5}$), it is a rectangle and not a square.

**Check:** In a rectangle, $\text{diagonal}^2 = \text{length}^2 + \text{breadth}^2$: $20 + 5 = 25$ ✅

### Example 6: A Rhombus That Is Not a Square

Vertices in order $A \to B \to C \to D \to A$: **$A(0, 0), B(4, 3), C(8, 0), D(4, -3)$**.

**Sides:**
- $AB^2 = (4 - 0)^2 + (3 - 0)^2 = 16 + 9 = 25 \implies \mathbf{AB = 5}$
- $BC^2 = (8 - 4)^2 + (0 - 3)^2 = 16 + 9 = 25 \implies \mathbf{BC = 5}$
- $CD^2 = (4 - 8)^2 + (-3 - 0)^2 = 16 + 9 = 25 \implies \mathbf{CD = 5}$
- $DA^2 = (0 - 4)^2 + (0 - (-3))^2 = 16 + 9 = 25 \implies \mathbf{DA = 5}$

All four sides equal $5$, so it is a **rhombus**. Are the diagonals equal?

- $AC^2 = (8 - 0)^2 + (0 - 0)^2 = 64 \implies \mathbf{AC = 8}$
- $BD^2 = (4 - 4)^2 + (-3 - 3)^2 = 0 + 36 = 36 \implies \mathbf{BD = 6}$

Since $AC = 8$ and $BD = 6$, the diagonals are **not** equal. Thus it is a **rhombus, not a square**. If you had stopped after checking the four sides, you would have mislabelled it!

**Check:** In a rhombus, $\text{side}^2 = (AC \div 2)^2 + (BD \div 2)^2$ because the diagonals bisect each other at $90^\circ$: $4^2 + 3^2 = 16 + 9 = 25 = 5^2$ ✅

---

## Common Pitfalls to Avoid

1. **Mistake 1: Calling a quadrilateral a "square" after checking only the sides.**
   In Example 6, all four sides had length $5$, yet the diagonals were $8$ and $6$. Four equal sides only prove a **rhombus**; you must also check that the **diagonals are equal** to prove it is a square.

2. **Mistake 2: Forgetting to calculate the diagonals.**
   Identifying a quadrilateral requires **6 distances** ($4$ sides $+$ $2$ diagonals), not $4$. Without the diagonals, you cannot distinguish a rectangle from a non-rectangular parallelogram, or a square from a non-square rhombus.

3. **Mistake 3: Not listing the vertices in cyclic order.**
   If you mistakenly order Sophia's plaza points as $A, B, D, C$, the "sides" look like:
   $$AB^2 = 5, \quad BD^2 = 10, \quad DC^2 = 5, \quad CA^2 = 10$$
   That makes it look like opposite sides are $\sqrt{5}$ and $\sqrt{10}$ (a rectangle!), because $BD$ and $CA$ are actually **diagonals**, not sides. Always trace the vertices **around the boundary** in order. If you are unsure of the order, make a quick sketch on a grid! *(Tip: from any vertex, the farthest of the other three vertices is often—though not always, in a very flat parallelogram—the opposite vertex.)*

4. **Mistake 4: Picking the wrong "longest side" for the right-angle test.**
   In Example 3, the longest side is $CA = 5$ ($CA^2 = 25$). If someone mistakenly treats $BC = \sqrt{20}$ as longest and checks $AB^2 + CA^2 = 5 + 25 = 30 \neq 20$, they will wrongly claim it is not right-angled. Always pick the **largest $d^2$** as the candidate hypotenuse first.

5. **Mistake 5: Forgetting square roots in final side lengths (or taking them too early).**
   Using $d^2$ is ideal for comparing lengths and checking the Pythagoras converse—for example, comparing $13$ and $16$ in Example 2 is instant. Just remember to include the $\sqrt{\phantom{x}}$ when reporting an actual side or diagonal length!

---

## Quick Recap

- To classify a shape from coordinates, find the required **distances** using the distance formula. Comparing **$d^2$** is enough to test equality and right angles.
- **Triangles ($3$ distances):**
  - Two sides equal $\implies$ isosceles; three equal $\implies$ equilateral; all different $\implies$ scalene.
  - $(\text{longest side})^2 = \text{sum of squares of other two}$ $\implies$ right-angled (converse of Pythagoras).
  - Right-angled $+$ two equal sides $\implies$ right isosceles.
- **Quadrilaterals ($6$ distances: $4$ sides $+$ $2$ diagonals):**
  - Opposite sides equal $\implies$ parallelogram.
  - All four sides equal $\implies$ rhombus.
  - Parallelogram $+$ equal diagonals $\implies$ rectangle.
  - Rhombus $+$ equal diagonals $\implies$ square.
- Always trace vertices **in order around the shape** and include **both diagonals**.

---

## Practice Questions

1. Show that the points $P(-2, 0), Q(2, 0),$ and $R(0, 3)$ form an isosceles triangle. Is it also equilateral or right-angled?

2. Show that $A(1, 1), B(4, 2),$ and $C(2, 8)$ form a right-angled triangle. Name the vertex at the right angle, and say whether the triangle is scalene or isosceles.

3. Show that $A(0, 0), B(4, 0),$ and $C(2, 2\sqrt{3})$ form an equilateral triangle.

4. Find the type of quadrilateral with vertices $A(0, 0), B(4, 0), C(5, 2),$ and $D(1, 2)$ (taken in this order). Compute all four sides and both diagonals.

5. Show that $A(0, 0), B(3, 1), C(2, 4),$ and $D(-1, 3)$ are the vertices of a square.

6. Sophia writes the four corners of a small flower bed as $(0, 0), (2, 2), (2, 0), (0, 2)$ in that order. Liam says the "sides" come out as $\sqrt{8}, 2, \sqrt{8}, 2$, so it must be a rectangle and not a square. What mistake is he making? Find the correct type of the shape.

7. Show that $A(1, 1), B(4, 5), C(9, 5),$ and $D(6, 1)$ form a rhombus, but not a square.

8. State True or False:
   (a) A triangle with sides $5, 12,$ and $13$ is right-angled.
   (b) If all four sides of a quadrilateral are equal, it must be a square.
   (c) A parallelogram whose diagonals are equal is a rectangle.
   (d) A triangle with sides $3, 4,$ and $\sqrt{20}$ is right-angled.

### Answers

1. $PQ^2 = (2 - (-2))^2 + 0^2 = 16 \implies PQ = 4$.
   $QR^2 = (0 - 2)^2 + (3 - 0)^2 = 4 + 9 = 13 \implies QR = \sqrt{13}$.
   $RP^2 = (-2 - 0)^2 + (0 - 3)^2 = 4 + 9 = 13 \implies RP = \sqrt{13}$.
   Since $QR = RP$, it is **isosceles**.
   It is not equilateral ($4 \neq \sqrt{13}$ since $16 \neq 13$), and not right-angled (the longest side is $PQ$ with $PQ^2 = 16$, while $QR^2 + RP^2 = 13 + 13 = 26 \neq 16$).

2. $AB^2 = (4 - 1)^2 + (2 - 1)^2 = 9 + 1 = 10 \implies AB = \sqrt{10}$.
   $BC^2 = (2 - 4)^2 + (8 - 2)^2 = 4 + 36 = 40 \implies BC = \sqrt{40}$.
   $CA^2 = (1 - 2)^2 + (1 - 8)^2 = 1 + 49 = 50 \implies CA = \sqrt{50}$.
   Longest side is $CA$ ($CA^2 = 50$). Check: $AB^2 + BC^2 = 10 + 40 = 50 = CA^2$ ✅.
   The right angle is at vertex **$B$** (opposite the longest side $CA$). Since all three sides are different ($\sqrt{10}, \sqrt{40}, \sqrt{50}$), the triangle is **right-angled scalene**.

3. $AB^2 = (4 - 0)^2 + 0^2 = 16 \implies AB = 4$.
   $BC^2 = (2 - 4)^2 + (2\sqrt{3} - 0)^2 = 4 + 12 = 16 \implies BC = 4$. *(Remember $(2\sqrt{3})^2 = 4 \times 3 = 12$.)*
   $CA^2 = (2 - 0)^2 + (2\sqrt{3} - 0)^2 = 4 + 12 = 16 \implies CA = 4$.
   All three sides equal $4$, so $\triangle ABC$ is **equilateral**.

4. Sides:
   - $AB^2 = 4^2 + 0^2 = 16 \implies AB = 4$
   - $BC^2 = (5 - 4)^2 + (2 - 0)^2 = 1 + 4 = 5 \implies BC = \sqrt{5}$
   - $CD^2 = (1 - 5)^2 + (2 - 2)^2 = 16 \implies CD = 4$
   - $DA^2 = (0 - 1)^2 + (0 - 2)^2 = 1 + 4 = 5 \implies DA = \sqrt{5}$
   Diagonals:
   - $AC^2 = 5^2 + 2^2 = 25 + 4 = 29 \implies AC = \sqrt{29}$
   - $BD^2 = (1 - 4)^2 + (2 - 0)^2 = 9 + 4 = 13 \implies BD = \sqrt{13}$
   Opposite sides are equal, not all four sides are equal, and the diagonals are unequal ($29 \neq 13$). Therefore it is a **parallelogram** (not a rectangle).

5. $AB^2 = 3^2 + 1^2 = 10$, $BC^2 = (2 - 3)^2 + (4 - 1)^2 = 1 + 9 = 10$, $CD^2 = (-1 - 2)^2 + (3 - 4)^2 = 9 + 1 = 10$, $DA^2 = (0 - (-1))^2 + (0 - 3)^2 = 1 + 9 = 10$. All four sides equal $\sqrt{10}$ (rhombus).
   Diagonals: $AC^2 = 2^2 + 4^2 = 20$ and $BD^2 = (-1 - 3)^2 + (3 - 1)^2 = 16 + 4 = 20$. Both diagonals equal $\sqrt{20}$, so it is a **square**.
   Check: $\sqrt{10} \times \sqrt{2} = \sqrt{20}$ ✅

6. Liam did not check whether the points were listed in order around the boundary. Tracing $(0, 0) \to (2, 2)$ crosses diagonally across the flower bed—it is a diagonal, not a side!
   The proper perimeter order is $(0, 0) \to (2, 0) \to (2, 2) \to (0, 2)$.
   In that order, all four sides are $2, 2, 2, 2$, and both diagonals $(0, 0)\text{–}(2, 2)$ and $(2, 0)\text{–}(0, 2)$ equal $\sqrt{8}$. Equal sides and equal diagonals make it a **square**.

7. $AB^2 = (4 - 1)^2 + (5 - 1)^2 = 9 + 16 = 25 \implies AB = 5$.
   $BC^2 = (9 - 4)^2 + 0^2 = 25 \implies BC = 5$.
   $CD^2 = (6 - 9)^2 + (1 - 5)^2 = 9 + 16 = 25 \implies CD = 5$.
   $DA^2 = (1 - 6)^2 + 0^2 = 25 \implies DA = 5$.
   All four sides equal $5$, so it is a **rhombus**.
   Diagonals: $AC^2 = (9 - 1)^2 + (5 - 1)^2 = 64 + 16 = 80 \implies AC = \sqrt{80}$; $BD^2 = (6 - 4)^2 + (1 - 5)^2 = 4 + 16 = 20 \implies BD = \sqrt{20}$.
   Since $80 \neq 20$, the diagonals are not equal, so it is **not a square**.
   Check: $\text{side}^2 = (AC \div 2)^2 + (BD \div 2)^2 = \frac{80}{4} + \frac{20}{4} = 20 + 5 = 25$ ✅

8. (a) **True** ✅. $5^2 + 12^2 = 25 + 144 = 169 = 13^2$.
   (b) **False** ❌. A rhombus also has four equal sides; its diagonals must be equal as well for it to be a square.
   (c) **True** ✅. Parallelogram $+$ equal diagonals $=$ rectangle.
   (d) **False** ❌. The longest side is $\sqrt{20}$ (since $3 = \sqrt{9}, 4 = \sqrt{16}$), yet $3^2 + 4^2 = 9 + 16 = 25 \neq 20$.

---

Now you can classify triangles and quadrilaterals purely from coordinate numbers. Always order the vertices around the perimeter first, then compute every side and diagonal distance needed.

**What's next?** In Topic 3, we will discover how distances alone can tell whether three points lie on a single straight line (**collinearity**), how to locate points that are **equidistant** from two or three landmarks, and how to solve for a **missing coordinate** when the distance is known.
