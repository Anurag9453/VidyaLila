# Chapter: Distance Formula (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [distance-formula-part2.md](distance-formula-part2.md)** (and the chapter begins in [distance-formula.md](distance-formula.md)). Earlier files covered the distance formula, distance from the origin, and classifying triangles and quadrilaterals from coordinates.
> **Helpful prior knowledge:** [Simultaneous linear equations (elimination)](../simultaneous-linear-equations/simultaneous-linear-equations-part2.md) and [Circumcentre of a triangle](../triangles/triangles-part2.md).
> **Topics covered in this file:**
> 3. Collinear Points, Equidistant Points, and Unknown Values

---

# Topic 3: Collinear Points, Equidistant Points, and Unknown Values

In the previous topic, we used the distance formula like a detective: given coordinates, we identified whether a shape was isosceles, right-angled, or a square. Sophia's tilted lamp-posts $(1, 0), (3, 1), (2, 3), (0, 2)$ looked skewed at first glance, yet all four sides came out to $\sqrt{5}$ and both diagonals to $\sqrt{10}$—convincing contractor Liam that the plaza was a true square. In every case there, **all vertices were given** and we tested the shape they formed.

Now we flip the perspective. What if the questions become: "Do these three points lie on a single straight line?", "Find a point that is **equidistant** (equally far) from two or three given locations", or "One coordinate of a point is missing—find it from the distance"? All three questions stand on the exact same foundation: the **distance formula**, and often **squaring both sides**.

---

## The Water-Tower Agreement

Mayor Elena oversees three neighboring rural settlements that all share the same need for a reliable clean-water supply. To make the project fair for everyone, Elena announces: "We will build one central water tower, placed so that **no settlement is farther from the tower than any other**."

She calls in civil engineer **Dr. Bennett**. Dr. Bennett pulls up the regional GPS grid, where $1\text{ grid unit} = 1\text{ km}$, and marks the three settlements:

- Settlement $A$: $(0, 0)$
- Settlement $B$: $(6, 0)$
- Settlement $C$: $(0, 8)$

Mayor Elena says, "Dr. Bennett, I need the exact coordinates of the point that is equidistant from $A$, $B$, and $C$. No guesswork—give me the exact math."

*(In the Triangles chapter, we mentioned that a tank equidistant from three villages sits at the **circumcentre** of the triangle. There, it was just a geometric idea; here, we will compute its exact coordinates!)*

Dr. Bennett smiles. "Certainly, Mayor. Let's build up to it step by step: first finding a point equidistant from two locations, and then extending to three." Let us follow along with Dr. Bennett.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Collinear points** | Three or more points that all lie on the same straight line | $(1, 1), (2, 3), (3, 5)$ |
| **Equidistant** | At the exact same distance from two or more given points | A water tower equidistant from $A, B,$ and $C$ |
| **Perpendicular bisector** | A line passing through the midpoint of a segment at $90^\circ$; every point on it is equidistant from both endpoints | The perpendicular bisector of $AB$ |
| **Circumcentre** | The point equidistant from all three vertices of a triangle | The water tower location for three settlements |
| **Circumradius** | The common distance from the circumcentre to each vertex of the triangle | $5\text{ km}$ from the tower to $A, B,$ and $C$ |
| **Unknown value** | A missing coordinate (such as $y$ or $k$) that we solve for using a given condition | Finding $y$ in $(10, y)$ |

---

## Part A: Collinear Points (Do Three Points Lie on One Line?)

### The Idea

If three points $A, B,$ and $C$ lie on a single straight line with $B$ sitting between $A$ and $C$, then going straight from $A$ to $C$ has the **exact same length** as going from $A$ to $B$ and then $B$ to $C$:

> **$$AB + BC = AC$$**

In other words: **the longest distance equals the sum of the two shorter distances**. If that does not hold in any order, the points are not on a single line—instead, $A, B, C$ form a **triangle**.

**Recall the Triangle Inequality:** In any triangle, the sum of any two sides is **strictly greater** than the third side (proved in [Congruence of Triangles](../congruence-of-triangles/congruence-of-triangles-part4.md)). So whenever three points form a triangle, $AB + BC > AC$ strictly. Equality happens only when the triangle flattens completely into a straight line—meaning the points are **collinear**.

**Steps:**
1. Compute all three distances ($AB$, $BC$, and $AC$).
2. Identify the **longest** distance.
3. Check whether the sum of the two shorter distances equals the longest distance.

### Example 1: Are $(1, 1), (2, 3), (3, 5)$ Collinear?

Let $A(1, 1), B(2, 3), C(3, 5)$.

- $AB = \sqrt{(2 - 1)^2 + (3 - 1)^2} = \sqrt{1 + 4} = \mathbf{\sqrt{5}}$
- $BC = \sqrt{(3 - 2)^2 + (5 - 3)^2} = \sqrt{1 + 4} = \mathbf{\sqrt{5}}$
- $AC = \sqrt{(3 - 1)^2 + (5 - 1)^2} = \sqrt{4 + 16} = \sqrt{20} = \sqrt{4 \times 5} = \mathbf{2\sqrt{5}}$

The longest distance is $AC = 2\sqrt{5}$. Add the two shorter ones: $AB + BC = \sqrt{5} + \sqrt{5} = 2\sqrt{5}$.

**Check:** $AB + BC = 2\sqrt{5} = AC$ ✅. All three points are **collinear**.

*(Adding like surds works just like adding like objects: $1\text{ apple} + 1\text{ apple} = 2\text{ apples}$, so $\sqrt{5} + \sqrt{5} = 2\sqrt{5}$.)*

### Example 2: Are $(0, 0), (1, 2), (3, 3)$ Collinear? (Non-Example)

Let $A(0, 0), B(1, 2), C(3, 3)$.

- $AB = \sqrt{1^2 + 2^2} = \mathbf{\sqrt{5}} \approx 2.236$
- $BC = \sqrt{(3 - 1)^2 + (3 - 2)^2} = \sqrt{4 + 1} = \mathbf{\sqrt{5}} \approx 2.236$
- $AC = \sqrt{3^2 + 3^2} = \sqrt{18} = \mathbf{3\sqrt{2}} \approx 4.243$

The longest distance is $AC \approx 4.243$. The sum of the other two is $\sqrt{5} + \sqrt{5} = 2\sqrt{5} \approx 4.472$.

**Check:** $4.472 \neq 4.243$ — the sum is strictly greater (just as the triangle inequality predicts!) ❌. Therefore, these points are **not collinear**; they form an isosceles triangle (since $AB = BC$).

Notice an important trap: having $AB = BC$ does **not** prove collinearity! Example 1 also had $AB = BC$, yet it was collinear only because **$AC = AB + BC$**. You must always verify that the longest distance equals the sum of the other two.

---

## Part B: A Point on an Axis Equidistant from Two Points

Now let us follow Dr. Bennett's warm-up problem: find a point **on the $x$-axis** that is equidistant from two given points.

**The trick:**
- Every point on the $x$-axis has $y = 0$, so write the unknown point as **$P(x, 0)$**. *(If the point lies on the $y$-axis, write **$P(0, y)$**.)*
- Set the two distances equal. To avoid square roots, **square both sides** ($PA = PB \implies PA^2 = PB^2$).
- The $x^2$ terms appear on both sides and **cancel out**, leaving a simple linear equation!

### Example 3: Point on the $x$-Axis Equidistant from $(2, -5)$ and $(-2, 9)$

Let the point be $P(x, 0)$, with $A(2, -5)$ and $B(-2, 9)$. We need $PA = PB$.

$$PA^2 = (x - 2)^2 + (0 - (-5))^2 = (x - 2)^2 + 25$$
$$PB^2 = (x - (-2))^2 + (0 - 9)^2 = (x + 2)^2 + 81$$

Set $PA^2 = PB^2$:
$$(x - 2)^2 + 25 = (x + 2)^2 + 81$$
$$x^2 - 4x + 4 + 25 = x^2 + 4x + 4 + 81$$

Cancel $x^2$ from both sides:
$$-4x + 29 = 4x + 85$$
$$-56 = 8x \implies \mathbf{x = -7}$$

So the point is **$P(-7, 0)$**.

**Check:**
- $PA^2 = (-7 - 2)^2 + 25 = 81 + 25 = 106$
- $PB^2 = (-7 + 2)^2 + 81 = 25 + 81 = 106$ ✅

Both distances equal $\sqrt{106}$, so $PA = PB$.

*What this means for Dr. Bennett:* if the water tower had to be built along a straight east–west highway (the $x$-axis) serving just two settlements, there would be a single unique spot on that highway. With the entire coordinate grid open, however, what happens? Let us check!

---

## Part C: Any Point $(x, y)$ Equidistant from Two Points

Now do not restrict $P$ to an axis. Let $P(x, y)$ be *any* point on the grid equidistant from $A(1, 2)$ and $B(5, 4)$ ($PA = PB$).

### Example 4: Condition for $PA = PB$

$$PA^2 = (x - 1)^2 + (y - 2)^2 = x^2 - 2x + 1 + y^2 - 4y + 4$$
$$PB^2 = (x - 5)^2 + (y - 4)^2 = x^2 - 10x + 25 + y^2 - 8y + 16$$

Set $PA^2 = PB^2$. Both $x^2$ and $y^2$ cancel out cleanly:
$$-2x - 4y + 5 = -10x - 8y + 41$$
$$8x + 4y = 36$$
$$\mathbf{2x + y = 9}$$

That is the equation of a **straight line**! Rather than a single point, there are **infinitely many points** equidistant from $A$ and $B$, and together they trace this exact line.

**Check (pick two points on the line $2x + y = 9$):**
- $(3, 3)$: $2(3) + 3 = 9$ ✓. $PA^2 = (3 - 1)^2 + (3 - 2)^2 = 4 + 1 = 5$, and $PB^2 = (3 - 5)^2 + (3 - 4)^2 = 4 + 1 = 5$ ✅
- $(4, 1)$: $2(4) + 1 = 9$ ✓. $PA^2 = (4 - 1)^2 + (1 - 2)^2 = 9 + 1 = 10$, and $PB^2 = (4 - 5)^2 + (1 - 4)^2 = 1 + 9 = 10$ ✅

### What Line Is This?

It is the **perpendicular bisector of segment $AB$**—the line that cuts $AB$ exactly in half at a $90^\circ$ angle. Every single point on it is equidistant from $A$ and $B$. We defined the [perpendicular bisector](../triangles/triangles-part2.md) visually in the Triangles chapter; here, algebra handed us its exact equation!

*(In Topic 4, we will see how to find the midpoint $(3, 3)$ of $AB$ directly.)*

**Key takeaway:** Being equidistant from two points gives **one straight line** (the perpendicular bisector). Therefore, to be equidistant from **three points**, we simply find **two such lines** and locate where they intersect!

---

## Part D: A Point Equidistant from Three Points (Circumcentre)

In [triangles-part2.md](../triangles/triangles-part2.md), we saw that the point equidistant from all three vertices of a triangle is its **circumcentre**, where the three perpendicular bisectors meet. Now we can calculate its exact coordinates!

**Method:**
1. Let the circumcentre be $P(x, y)$.
2. Set **$PA^2 = PB^2$** to get the first linear equation (just like Part C).
3. Set **$PA^2 = PC^2$** (or $PB^2 = PC^2$) to get the second linear equation.
4. Solve the two simultaneous linear equations using [elimination or substitution](../simultaneous-linear-equations/simultaneous-linear-equations-part2.md).
5. The circumradius is the distance from $P$ to any of the three vertices.

### Example 5: Mayor Elena's Water Tower ($A(0, 0), B(6, 0), C(0, 8)$)

Let the tower's coordinates be $P(x, y)$.

**Equation 1 ($PA^2 = PB^2$):**
$$x^2 + y^2 = (x - 6)^2 + y^2$$
$$x^2 + y^2 = x^2 - 12x + 36 + y^2$$
$$0 = -12x + 36 \implies \mathbf{x = 3}$$

**Equation 2 ($PA^2 = PC^2$):**
$$x^2 + y^2 = x^2 + (y - 8)^2$$
$$x^2 + y^2 = x^2 + y^2 - 16y + 64$$
$$0 = -16y + 64 \implies \mathbf{y = 4}$$

Here each equation gave one variable immediately! The water tower goes at **$P(3, 4)$**.

**Circumradius:**
$$PA = \sqrt{3^2 + 4^2} = \sqrt{25} = \mathbf{5\text{ km}}$$

**Check all three distances:**
- $PA^2 = 3^2 + 4^2 = 9 + 16 = 25$ ✅
- $PB^2 = (3 - 6)^2 + (4 - 0)^2 = 9 + 16 = 25$ ✅
- $PC^2 = (3 - 0)^2 + (4 - 8)^2 = 9 + 16 = 25$ ✅

Every settlement is **exactly $5\text{ km}$** from the tower! Dr. Bennett reports to Mayor Elena: "The tower sits at $(3, 4)$, exactly $5\text{ km}$ from all three settlements." Elena beams: "Fair down to the last metre!"

### A Neat Bonus Observation

Notice that $\triangle ABC$ has a $90^\circ$ angle at $A$ (since $AB$ lies along the $x$-axis and $AC$ lies along the $y$-axis). Its hypotenuse is $BC$:
$$BC = \sqrt{(0 - 6)^2 + (8 - 0)^2} = \sqrt{36 + 64} = \sqrt{100} = 10\text{ km}$$

Remember the theorem from the Triangles chapter: **the circumcentre of a right triangle lies at the midpoint of its hypotenuse**, and its circumradius equals half the hypotenuse ($10 \div 2 = \mathbf{5\text{ km}}$) ✅. Our result matches! Notice also that $PB = PC = 5$ and $BC = 10 = 5 + 5$, meaning $P, B,$ and $C$ are **collinear** (Part A's rule!) with $P$ right in the middle of $BC$.

### Example 6: Circumcentre of a Non-Right Triangle: $A(1, -1), B(4, 2), C(0, 2)$

First check that it is not right-angled: $AB^2 = 9 + 9 = 18$, $BC^2 = 16$, $AC^2 = 1 + 9 = 10$. None of the squares add up to another ($16 + 10 \neq 18$, $18 + 10 \neq 16$, $18 + 16 \neq 10$), so there is no hypotenuse shortcut—let us solve the full system.

Let $P(x, y)$.

**$PA^2 = PB^2$:**
$$(x - 1)^2 + (y + 1)^2 = (x - 4)^2 + (y - 2)^2$$
$$x^2 - 2x + 1 + y^2 + 2y + 1 = x^2 - 8x + 16 + y^2 - 4y + 4$$
$$-2x + 2y + 2 = -8x - 4y + 20$$
$$6x + 6y = 18 \implies \mathbf{x + y = 3} \quad \text{...(i)}$$

**$PA^2 = PC^2$:**
$$(x - 1)^2 + (y + 1)^2 = x^2 + (y - 2)^2$$
$$x^2 - 2x + 1 + y^2 + 2y + 1 = x^2 + y^2 - 4y + 4$$
$$-2x + 6y + 2 = 4 \implies -2x + 6y = 2 \implies \mathbf{-x + 3y = 1} \quad \text{...(ii)}$$

**Elimination:** Add equations (i) and (ii) to eliminate $x$:
$$4y = 4 \implies \mathbf{y = 1}$$

Substitute into (i): $x + 1 = 3 \implies \mathbf{x = 2}$.

The circumcentre is **$P(2, 1)$**.

**Check:**
- $PA^2 = (2 - 1)^2 + (1 + 1)^2 = 1 + 4 = 5$
- $PB^2 = (2 - 4)^2 + (1 - 2)^2 = 4 + 1 = 5$
- $PC^2 = (2 - 0)^2 + (1 - 2)^2 = 4 + 1 = 5$ ✅

The circumradius is **$\sqrt{5}$**.

---

## Part E: Finding an Unknown Value (Given the Distance)

Now reverse the problem: two points are given, one coordinate is missing, and the **distance between them is known**.

On Dr. Bennett's GPS map, a new pumping station sits at $(10, y)$ and must be exactly $10\text{ km}$ away from a substation at $D(2, -3)$. Dr. Bennett needs to find $y$.

### Example 7: Distance Between $(2, -3)$ and $(10, y)$ is $10$. Find $y$.

Distance $= 10$, so $\text{distance}^2 = 100$.

$$(10 - 2)^2 + (y - (-3))^2 = 100$$
$$64 + (y + 3)^2 = 100$$
$$(y + 3)^2 = 36$$

Take the **square root of both sides**—and remember to include **both $+$ and $-$**!

$$y + 3 = \mathbf{\pm 6}$$

- $y + 3 = 6 \implies \mathbf{y = 3}$
- $y + 3 = -6 \implies \mathbf{y = -9}$

**Check:**
- $(10, 3)$: $64 + (3 + 3)^2 = 64 + 36 = 100$ ✅
- $(10, -9)$: $64 + (-9 + 3)^2 = 64 + (-6)^2 = 64 + 36 = 100$ ✅

Both answers are completely valid!

### Why Are There Two Answers?

Every point $(10, y)$ lies on the **vertical line $x = 10$**. From $D(2, -3)$, moving horizontally right to $x = 10$ covers $8\text{ km}$. To make the total straight-line distance $10\text{ km}$, the vertical leg must satisfy $8^2 + 6^2 = 10^2$—so you can go **either $6\text{ km}$ up or $6\text{ km}$ down**!

```
 y
 3 |                    * (10, 3)
   |                 /  |
   |        10    /     |  6 up
   |           /        |
-3 |  (2,-3) *----8-----+ (10, -3)
   |           \        |
   |        10    \     |  6 down
   |                 \  |
-9 |                    * (10, -9)
   |
           x = 2      x = 10
```

At the same height as $(2, -3)$ lies $(10, -3)$. Moving $6$ units up lands at $(10, 3)$; moving $6$ units down lands at $(10, -9)$. Both sit $10$ units from $(2, -3)$, which is why there are **two solutions**. *(You drop one solution only if the problem adds a condition such as "$y > 0$".)*

---

## Common Pitfalls to Avoid

1. **Mistake 1: Squaring only one side of $PA = PB$, or forgetting to square.**
   In $PA = PB$, removing the square root from one side without squaring the other ruins the equation. Always start by writing **$PA^2 = PB^2$** so both square roots disappear cleanly together (letting $x^2$ and $y^2$ cancel).

2. **Mistake 2: Losing the $\pm$ solution when taking a square root.**
   In Example 7, writing $(y + 3)^2 = 36 \implies y + 3 = 6$ gives only $y = 3$ and misses **$y = -9$**. Always remember: $u^2 = a$ ($a > 0$) gives **$u = \pm \sqrt{a}$**.

3. **Mistake 3: Mixing up $x$- and $y$-coordinates or dropping negative signs.**
   In $(2, -5)$, $2$ is $x$ and $-5$ is $y$. Never subtract $x$ from $y$—in Example 3, $(x - 2)^2 + (0 - 2)^2$ is wrong; it must be $(x - 2)^2 + (0 - (-5))^2 = (x - 2)^2 + 25$. Watch negative signs carefully: $0 - (-5) = +5$, not $-5$.

4. **Mistake 4: Failing to compare against the longest distance when checking collinearity.**
   In Example 2, $AB + BC = 2\sqrt{5} \approx 4.472$ while $AC \approx 4.243$. Do not test random pairs hoping two add up to a third; always find the **longest distance first** ($AC$), then check if the other two sum to it. Also never assume $AB = BC$ means collinearity—Example 2 had $AB = BC$ and was still a triangle!

5. **Mistake 5: Adding surds incorrectly.**
   $\sqrt{5} + \sqrt{5} = 2\sqrt{5}$, **never** $\sqrt{10}$! And always simplify surds like $\sqrt{20} = 2\sqrt{5}$ first so you can compare and combine like radicals.

---

## Quick Recap

- **Collinear points:** $A, B, C$ lie on one straight line if and only if **the longest distance equals the sum of the two shorter distances** (e.g., $AB + BC = AC$). Otherwise, they form a triangle where the sum of the two shorter sides is strictly greater.
- **Equidistant point on an axis:** Put $P(x, 0)$ for the $x$-axis or $P(0, y)$ for the $y$-axis. Write $PA^2 = PB^2$; the $x^2$ (or $y^2$) terms cancel, leaving a linear equation.
- **Any point $(x, y)$ equidistant from $A$ and $B$:** Setting $PA^2 = PB^2$ gives the linear equation of the **perpendicular bisector** of $AB$.
- **Equidistant from three points (circumcentre):** Solve the system formed by $PA^2 = PB^2$ and $PA^2 = PC^2$. The circumradius is $PA$.
- **Right triangle shortcut:** Its circumcentre is the midpoint of its hypotenuse, with $\text{circumradius} = \frac{1}{2} \times \text{hypotenuse}$.
- **Unknown coordinate:** Write $(\text{distance})^2$, simplify to $(\text{expression})^2 = a$, and take $\pm\sqrt{a}$—usually yielding **two** valid answers.
- Always check your final coordinates by plugging them back into the distance formula.

---

## Practice Questions

1. Show that the points $A(0, 0), B(1, 1), C(3, 3)$ are collinear by finding all three distances.

2. Are the points $A(1, 1), B(3, 2), C(5, 4)$ collinear? Find all three distances (leave surds where needed) and explain how you decide.

3. Find the point on the $x$-axis that is equidistant from $(1, 3)$ and $(5, -1)$.

4. Find the point on the $y$-axis that is equidistant from $(3, 2)$ and $(-1, 6)$.

5. A point $P(x, y)$ is equidistant from $O(0, 0)$ and $Q(4, 6)$. Find the relation between $x$ and $y$. What does this relation represent geometrically?

6. Find the circumcentre and circumradius of the triangle with vertices $A(1, 1), B(5, 1), C(3, 5)$.

7. Find $x$ such that the distance between $(x, 7)$ and $(1, 3)$ is $5$. Why do you get two values?

8. State True or False:
   (a) If $AB + BC = AC$ for three points, then they lie on one straight line.
   (b) When we equate $PA^2 = PB^2$ for $P(x, 0)$, the $x^2$ terms cancel and a linear equation remains.
   (c) Every triangle has a point equidistant from all three vertices.
   (d) A distance condition like "the distance is $5$" always gives exactly one value of the unknown coordinate.

### Answers

1. $AB = \sqrt{1^2 + 1^2} = \mathbf{\sqrt{2}}$, $BC = \sqrt{2^2 + 2^2} = \sqrt{8} = \mathbf{2\sqrt{2}}$, $AC = \sqrt{3^2 + 3^2} = \sqrt{18} = \mathbf{3\sqrt{2}}$.
   Longest distance is $AC = 3\sqrt{2}$, and $AB + BC = \sqrt{2} + 2\sqrt{2} = 3\sqrt{2}$.
   Check: $AB + BC = AC$ ✅. The points are **collinear**.

2. $AB = \sqrt{2^2 + 1^2} = \mathbf{\sqrt{5}} \approx 2.236$, $BC = \sqrt{2^2 + 2^2} = \sqrt{8} = \mathbf{2\sqrt{2}} \approx 2.828$, $AC = \sqrt{4^2 + 3^2} = \mathbf{5}$.
   Longest distance is $AC = 5$. Meanwhile $AB + BC \approx 2.236 + 2.828 = 5.064$, which is strictly **greater** than $5$, not equal to $5$.
   Check: $AB + BC \neq AC$ ❌. The points are **not collinear**. *(Since the difference is small, computing decimals carefully matters!)*

3. Let $P(x, 0)$: $(x - 1)^2 + 3^2 = (x - 5)^2 + (-1)^2$
   $x^2 - 2x + 1 + 9 = x^2 - 10x + 25 + 1 \implies -2x + 10 = -10x + 26 \implies 8x = 16 \implies \mathbf{x = 2}$.
   The point is **$(2, 0)$**.
   Check: $(2 - 1)^2 + 9 = 10$ and $(2 - 5)^2 + 1 = 10$ ✅

4. Let $P(0, y)$: $3^2 + (y - 2)^2 = (-1)^2 + (y - 6)^2$
   $9 + y^2 - 4y + 4 = 1 + y^2 - 12y + 36 \implies 13 - 4y = 37 - 12y \implies 8y = 24 \implies \mathbf{y = 3}$.
   The point is **$(0, 3)$**.
   Check: $9 + (3 - 2)^2 = 10$ and $1 + (3 - 6)^2 = 10$ ✅

5. $x^2 + y^2 = (x - 4)^2 + (y - 6)^2 \implies 0 = -8x + 16 - 12y + 36 \implies 8x + 12y = 52 \implies \mathbf{2x + 3y = 13}$.
   Geometrically, this represents a straight line: the **perpendicular bisector** of segment $OQ$.
   Check: $(2, 3)$ lies on the line ($4 + 9 = 13$). Distance squared to $O$: $4 + 9 = 13$; to $Q$: $(2 - 4)^2 + (3 - 6)^2 = 4 + 9 = 13$ ✅

6. Let $P(x, y)$.
   $PA^2 = PB^2$: $(x - 1)^2 + (y - 1)^2 = (x - 5)^2 + (y - 1)^2 \implies -2x + 1 = -10x + 25 \implies 8x = 24 \implies \mathbf{x = 3}$.
   $PA^2 = PC^2$: $(x - 1)^2 + (y - 1)^2 = (x - 3)^2 + (y - 5)^2 \implies -2x - 2y + 2 = -6x - 10y + 34 \implies 4x + 8y = 32 \implies x + 2y = 8$.
   Substitute $x = 3$: $3 + 2y = 8 \implies \mathbf{y = 2.5}$. Circumcentre: **$(3, 2.5)$**.
   Circumradius: $PA^2 = (3 - 1)^2 + (2.5 - 1)^2 = 4 + 2.25 = 6.25 \implies \text{radius} = \mathbf{2.5}$.
   Check: $PB^2 = (3 - 5)^2 + 1.5^2 = 6.25$ ✅, $PC^2 = 0 + (2.5 - 5)^2 = 6.25$ ✅

7. $(x - 1)^2 + (7 - 3)^2 = 5^2 \implies (x - 1)^2 + 16 = 25 \implies (x - 1)^2 = 9 \implies x - 1 = \pm 3 \implies \mathbf{x = 4\text{ or }x = -2}$.
   Check: $(4 - 1)^2 + 16 = 25$ ✅ and $(-2 - 1)^2 + 16 = 25$ ✅.
   There are two values because $(x, 7)$ lies on the horizontal line $y = 7$, and on that line there are two points at distance $5$ from $(1, 3)$—one $3$ units to the right and one $3$ units to the left (each forming a $3\text{-}4\text{-}5$ triangle with the vertical gap of $4$).

8. (a) **True** ✅. If the longest distance equals the sum of the other two, the points lie on a straight line.
   (b) **True** ✅. $x^2$ appears on both sides and cancels out.
   (c) **True** ✅. Every non-collinear triangle has a circumcentre where its three perpendicular bisectors meet.
   (d) **False** ❌. As in Example 7, squaring and taking $\pm\sqrt{\phantom{x}}$ typically produces two valid coordinates (such as $y = 3$ and $y = -9$).

---

Mayor Elena's water tower is now locked in at $(3, 4)$, and Dr. Bennett marks it cleanly on the grid. Whenever a problem asks for "equidistant," remember the signature move: write $PA^2 = PB^2$ and let the squares cancel!

**What's next?** One helpful question remains: how do you find the coordinates of the point **exactly halfway** between two given points? In Topic 4, we will unlock the **Mid-point Formula** and wrap up the entire Distance Formula chapter.
