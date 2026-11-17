# Chapter: Distance Formula (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [distance-formula-part3.md](distance-formula-part3.md).** (The chapter begins in [distance-formula.md](distance-formula.md). Useful background: [quadrilaterals.md](../quadrilaterals/quadrilaterals.md), [quadrilaterals-part2.md](../quadrilaterals/quadrilaterals-part2.md), and [circles.md](../circles/circles.md).)
> **Topics covered in this file:**
> 4. Mid-Point Formula (Extra)

---

# Topic 4: Mid-Point Formula (Extra)

Throughout this chapter, we have learned how to calculate the **distance** between any two points, classify triangles and quadrilaterals from coordinates, check whether three points are collinear, locate equidistant points (including the circumcentre of Mayor Elena's three settlements at $(3, 4)$), and solve for unknown coordinates. Every one of those questions revolved around measuring *"how far apart?"*

Now let us ask one final, super-handy question: how do you find the point **exactly halfway** between two given points? This is marked as an **extra** topic—the heart of the chapter was distance—yet the mid-point formula is so short and useful for circles, parallelograms, and medians that it is well worth mastering. Since this is the last file in the chapter, you will also find a complete **Chapter Wrap-Up** and formula table at the end.

---

## Maya, Leo, and the Halfway Café

Maya and Leo are college friends who now work in different cities. One weekend they pull up a regional GPS grid map ($1\text{ grid unit} = 10\text{ km}$) and pin their locations: Maya is at $(2, 9)$ and Leo is at $(10, 3)$.

Maya texts Leo: "Let's meet at a café for coffee—somewhere so **neither of us has to drive farther than the other**."

Leo replies, "Deal! That means finding the spot right at the halfway mark on the straight line between $(2, 9)$ and $(10, 3)$. How do we compute its exact coordinates?"

Maya suggests, "Let's test the idea on a single number line first, and then apply it to both $x$ and $y$."

Let us work it out with them.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Mid-point** | The point on a line segment that sits at equal distance from both endpoints, dividing the segment into two equal halves | The mid-point of $(2, 3)$ and $(8, 7)$ is $(5, 5)$ |
| **Average (mean)** | Adding two numbers together and dividing by $2$ | The average of $2$ and $10$ is $6$ |
| **Bisect** | To cut a line segment or angle into two equal halves | The diagonals of a parallelogram bisect each other |
| **Diameter** | A chord passing through the centre of a circle from one edge to the opposite edge | The longest chord of a circle |
| **Median** | A line segment joining a vertex of a triangle to the mid-point of the opposite side | Segment $AD$ from vertex $A$ to mid-point $D$ of $BC$ |

---

## Part A: Where Does the Mid-Point Formula Come From?

### First, on a Single Number Line

Pick two numbers on a number line: $2$ and $10$. Which number sits dead in the middle?

The total gap is $10 - 2 = 8$, so half the gap is $4$. Stepping $4$ units forward from $2$ lands on $2 + 4 = \mathbf{6}$.

Notice you get the exact same $6$ by taking their **average**: $\dfrac{2 + 10}{2} = \dfrac{12}{2} = \mathbf{6}$. The mid-point of two numbers is simply their average!

**Check:** $6 - 2 = 4$ and $10 - 6 = 4$ — equal distances on both sides ✅

### Now Across Both Axes

Every point on a coordinate grid has two numbers: $x$ (left–right) and $y$ (up–down). To land halfway between two points, take the **average of the $x$-coordinates** and the **average of the $y$-coordinates** separately:

> **Mid-Point Formula:** The mid-point $M$ of $A(x_1, y_1)$ and $B(x_2, y_2)$ is
> $$M = \left(\frac{x_1 + x_2}{2},\; \frac{y_1 + y_2}{2}\right)$$

Easy memory phrase: **"average the $x$'s, average the $y$'s."**

### Does It Really Work? Let's Verify with the Distance Formula

For $M$ to truly be the mid-point of segment $AB$, two things must hold: (1) $AM = MB$, and (2) $AM + MB = AB$ (so $M$ lies right on the straight line $AB$).

Test $A(2, 3)$ and $B(8, 7)$. The formula gives $M = \left(\dfrac{2 + 8}{2}, \dfrac{3 + 7}{2}\right) = (5, 5)$.

- $AM = \sqrt{(5 - 2)^2 + (5 - 3)^2} = \sqrt{9 + 4} = \sqrt{13}$
- $MB = \sqrt{(8 - 5)^2 + (7 - 5)^2} = \sqrt{9 + 4} = \sqrt{13}$
- $AB = \sqrt{(8 - 2)^2 + (7 - 3)^2} = \sqrt{36 + 16} = \sqrt{52} = 2\sqrt{13}$

**Check:** $AM = MB$ ✅ and $AM + MB = \sqrt{13} + \sqrt{13} = 2\sqrt{13} = AB$ ✅. So $M$ is genuinely halfway between $A$ and $B$ and collinear with them!

---

## Part B: Solved Examples

### Example 1: Using the Formula Directly

Find the mid-point of $A(2, 3)$ and $B(8, 7)$.

$$x = \frac{2 + 8}{2} = 5, \qquad y = \frac{3 + 7}{2} = 5$$
$$\mathbf{M = (5, 5)}$$

**Check:** Verified in Part A above that $AM = MB = \sqrt{13}$ ✅

### Example 2: With Negative Coordinates

Find the mid-point of $A(-4, 6)$ and $B(2, -10)$.

$$x = \frac{-4 + 2}{2} = \frac{-2}{2} = -1, \qquad y = \frac{6 + (-10)}{2} = \frac{-4}{2} = -2$$
$$\mathbf{M = (-1, -2)}$$

**Check:** $AM = \sqrt{(-1 + 4)^2 + (-2 - 6)^2} = \sqrt{9 + 64} = \sqrt{73}$, and $MB = \sqrt{(2 + 1)^2 + (-10 + 2)^2} = \sqrt{9 + 64} = \sqrt{73}$ ✅

Watch the negative signs when adding: $-4 + 2 = -2$ and $6 + (-10) = -4$.

### Example 3: Decimal and Fractional Answers

(a) Find the mid-point of $A(1, 2)$ and $B(4, 5)$:
$$x = \frac{1 + 4}{2} = \frac{5}{2} = 2.5, \qquad y = \frac{2 + 5}{2} = \frac{7}{2} = 3.5$$
$$\mathbf{M = (2.5, 3.5)}$$

Mid-point coordinates do not have to be whole numbers—whenever the sum is odd, dividing by $2$ produces a $.5$ (or fraction).

(b) Find the mid-point of $A(-1.5, 2)$ and $B(3.5, 5)$:
$$x = \frac{-1.5 + 3.5}{2} = \frac{2}{2} = 1, \qquad y = \frac{2 + 5}{2} = 3.5$$
$$\mathbf{M = (1, 3.5)}$$

**Check (a):** $AM = \sqrt{1.5^2 + 1.5^2} = \sqrt{4.5}$, $MB = \sqrt{1.5^2 + 1.5^2} = \sqrt{4.5}$ ✅
**Check (b):** $AM = \sqrt{2.5^2 + 1.5^2} = \sqrt{8.5}$, $MB = \sqrt{2.5^2 + 1.5^2} = \sqrt{8.5}$ ✅

### Example 4: Maya and Leo's Halfway Café

Maya is at $(2, 9)$ and Leo is at $(10, 3)$ ($1\text{ unit} = 10\text{ km}$).

$$x = \frac{2 + 10}{2} = 6, \qquad y = \frac{9 + 3}{2} = 6$$

**The café should be at $(6, 6)$.**

**Check:** Distance from Maya to café $= \sqrt{(6 - 2)^2 + (6 - 9)^2} = \sqrt{16 + 9} = 5\text{ units} = 50\text{ km}$. Distance from Leo to café $= \sqrt{(10 - 6)^2 + (3 - 6)^2} = \sqrt{16 + 9} = 5\text{ units} = 50\text{ km}$ ✅. And total distance between Maya and Leo $= \sqrt{8^2 + (-6)^2} = \sqrt{64 + 36} = 10\text{ units} = 100\text{ km} = 50 + 50$ ✅

### Example 5: Finding a Missing Endpoint

$M(2, 1)$ is the mid-point of segment $AB$, and $A = (-2, 3)$. Find $B$.

Let $B = (x, y)$. Apply the mid-point formula in reverse:
$$\frac{-2 + x}{2} = 2 \implies -2 + x = 4 \implies \mathbf{x = 6}$$
$$\frac{3 + y}{2} = 1 \implies 3 + y = 2 \implies \mathbf{y = -1}$$

$$\mathbf{B = (6, -1)}$$

**Check:** $\left(\dfrac{-2 + 6}{2}, \dfrac{3 + (-1)}{2}\right) = (2, 1) = M$ ✅

**Shortcut:** $B = (2x_M - x_A,\; 2y_M - y_A) = (2(2) - (-2),\; 2(1) - 3) = (6, -1)$. Think of it as jumping across $M$ by the same step you took to reach $M$.

### Example 6: Centre and Radius of a Circle

The endpoints of a diameter of a circle are $P(-2, 1)$ and $Q(6, 7)$. Find the centre and radius.

Every diameter passes through the centre and is bisected by it ([circles.md](../circles/circles.md)), so **centre $=$ mid-point of the diameter**:

$$\text{Centre} = \left(\frac{-2 + 6}{2},\; \frac{1 + 7}{2}\right) = \mathbf{(2, 4)}$$

$$\text{Diameter } PQ = \sqrt{(6 + 2)^2 + (7 - 1)^2} = \sqrt{64 + 36} = \sqrt{100} = 10 \implies \mathbf{\text{radius} = \frac{10}{2} = 5}$$

**Check:** Centre to $P$: $\sqrt{(2 + 2)^2 + (4 - 1)^2} = \sqrt{16 + 9} = 5$. Centre to $Q$: $\sqrt{(6 - 2)^2 + (7 - 4)^2} = \sqrt{16 + 9} = 5$ ✅. Both endpoints sit $5$ units from the centre!

### Example 7: Fourth Vertex of a Parallelogram

Three vertices of parallelogram $ABCD$ (in order) are $A(1, 1), B(5, 2), C(6, 5)$. Find $D$.

The diagonals of a parallelogram bisect each other ([quadrilaterals.md](../quadrilaterals/quadrilaterals.md)), meaning **mid-point of $AC =$ mid-point of $BD$**.

$$\text{Mid-point of } AC = \left(\frac{1 + 6}{2},\; \frac{1 + 5}{2}\right) = (3.5, 3)$$

Let $D = (x, y)$. Set the mid-point of $BD$ equal to $(3.5, 3)$:
$$\frac{5 + x}{2} = 3.5 \implies 5 + x = 7 \implies \mathbf{x = 2}$$
$$\frac{2 + y}{2} = 3 \implies 2 + y = 6 \implies \mathbf{y = 4}$$

$$\mathbf{D = (2, 4)}$$

**Check (bisecting diagonals):** Mid-point of $BD = \left(\dfrac{5 + 2}{2}, \dfrac{2 + 4}{2}\right) = (3.5, 3) =$ mid-point of $AC$ ✅
**Extra check (opposite sides):** $AB = \sqrt{16 + 1} = \sqrt{17}$ and $DC = \sqrt{(6 - 2)^2 + (5 - 4)^2} = \sqrt{17}$ ✅; $BC = \sqrt{1 + 9} = \sqrt{10}$ and $AD = \sqrt{(2 - 1)^2 + (4 - 1)^2} = \sqrt{10}$ ✅.

### Example 8: Proving Whether Four Points Form a Parallelogram

Are $A(1, 0), B(5, 1), C(6, 4), D(2, 3)$ (in that order) the vertices of a parallelogram?

**Step 1: Compare the mid-points of both diagonals**
- Mid-point of $AC = \left(\dfrac{1 + 6}{2}, \dfrac{0 + 4}{2}\right) = (3.5, 2)$
- Mid-point of $BD = \left(\dfrac{5 + 2}{2}, \dfrac{1 + 3}{2}\right) = (3.5, 2)$

Since both diagonals share the exact same mid-point, they bisect each other—proving $ABCD$ is a **parallelogram**! *(This flips the property from Example 7 into a super-fast test.)*

**Step 2: Cross-check with side lengths**
- $AB = \sqrt{16 + 1} = \sqrt{17}$, $DC = \sqrt{(6 - 2)^2 + (4 - 3)^2} = \sqrt{17}$ ✅
- $BC = \sqrt{1 + 9} = \sqrt{10}$, $AD = \sqrt{(2 - 1)^2 + (3 - 0)^2} = \sqrt{10}$ ✅

Opposite sides are equal!

*(Note: to check if it is also a rectangle, compare the diagonal lengths as in Topic 2: $AC = \sqrt{25 + 16} = \sqrt{41}$ and $BD = \sqrt{9 + 4} = \sqrt{13}$. Since they are unequal, it is a parallelogram, not a rectangle.)*

### Example 9: Length of a Median of a Triangle

The vertices of $\triangle ABC$ are $A(-1, 6), B(-2, 1), C(6, 3)$. Find the length of the median $AD$ drawn from $A$.

A median joins vertex $A$ to the **mid-point $D$ of the opposite side $BC$**:

$$D = \left(\frac{-2 + 6}{2},\; \frac{1 + 3}{2}\right) = \mathbf{(2, 2)}$$

$$AD = \sqrt{(2 - (-1))^2 + (2 - 6)^2} = \sqrt{3^2 + (-4)^2} = \sqrt{9 + 16} = \sqrt{25} = \mathbf{5}$$

**Check:** Verify $D$ is halfway between $B$ and $C$: $BD = \sqrt{(2 + 2)^2 + (2 - 1)^2} = \sqrt{17}$ and $DC = \sqrt{(6 - 2)^2 + (3 - 2)^2} = \sqrt{17}$ ✅.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Adding the coordinates without dividing by $2$.**
   For $A(2, 3)$ and $B(8, 7)$, writing $(2 + 8, 3 + 7) = (10, 10)$ is **not** the mid-point—that point lies far past $B$! Always **divide by $2$** to get the average: $(5, 5)$.

2. **Mistake 2: Dividing only one coordinate by $2$.**
   Computing $\frac{2 + 8}{2} = 5$ for $x$ but forgetting to divide $3 + 7 = 10$ by $2$ gives $(5, 10)$ instead of $(5, 5)$. Divide **both** coordinates by $2$.

3. **Mistake 3: Plugging the mid-point $M$ in as an endpoint when finding a missing endpoint.**
   In Example 5, $M(2, 1)$ is the *mid-point*, and we need $B$, not the midpoint of $A$ and $M$. Computing $\frac{-2 + 2}{2}$ is wrong! Set $\frac{-2 + x}{2} = 2$ to get $x = 6$, or use **missing endpoint $= 2M - \text{given endpoint}$**.

4. **Mistake 4: Worrying about point order—while forgetting not to mix $x$ and $y$.**
   Point order does **not** matter in the mid-point formula because addition commutes: $\frac{x_1 + x_2}{2} = \frac{x_2 + x_1}{2}$. Just be sure to add $x$ to $x$ and $y$ to $y$—never $x$ to $y$!

---

## Quick Recap

- **Mid-point formula:** $M = \left(\dfrac{x_1 + x_2}{2}, \dfrac{y_1 + y_2}{2}\right)$ — the average of $x$'s and the average of $y$'s.
- **Verification:** $AM = MB$ and $AM + MB = AB$.
- **Missing endpoint:** $B = (2x_M - x_A,\; 2y_M - y_A)$.
- **Circle:** $\text{Centre} = \text{mid-point of diameter}$, and $\text{radius} = \frac{1}{2} \times \text{diameter}$.
- **Parallelogram:** Diagonals share the same mid-point—use this both to find a missing fourth vertex and to test whether four points form a parallelogram.
- **Median of a triangle:** Find the mid-point of the opposite side first, then use the distance formula from the opposite vertex.
- *(Note: This extra topic prepares you for the **Section Formula** in higher grades, which divides a segment in any ratio $m : n$, with the mid-point as the special $1 : 1$ case.)*

---

## Practice Questions

1. Find the mid-point of the segment joining $(4, -3)$ and $(-2, 9)$.

2. The mid-point of $AB$ is $M(3, -2)$ and $A = (7, 1)$. Find $B$.

3. The endpoints of a diameter of a circle are $(-3, -1)$ and $(5, 5)$. Find the centre and the radius of the circle.

4. Three vertices of a parallelogram $PQRS$ are $P(0, 0), Q(4, 1), R(7, 5)$ (taken in order). Find $S$, and show that the diagonals bisect each other.

5. Are $A(-1, 3), B(2, 2), C(6, 5), D(3, 6)$ the vertices of a parallelogram (in this order)? Justify using mid-points and then check using distances.

6. In triangle $PQR$, $P = (1, 1), Q = (7, 1), R = (4, 9)$. Find the length of the median from $R$ to side $PQ$.

7. State whether each statement is true or false, giving a reason:
   (a) The mid-point of $(3, 5)$ and $(3, 11)$ is $(3, 8)$.
   (b) The mid-point of $A$ and $B$ always lies on segment $AB$.
   (c) The mid-point of the origin and the point $(a, b)$ is $(a, b)$.

8. Let $A(-3, 2)$ and $B(5, -4)$. Find the mid-point $M$ and verify that $MA = MB$ and $MA + MB = AB$.

9. The mid-point of the segment joining $(k, 3)$ and $(5, 7)$ is $(4, 5)$. Find $k$.

### Answers

1. $x = \dfrac{4 + (-2)}{2} = 1$, $y = \dfrac{-3 + 9}{2} = 3$. **$\mathbf{M = (1, 3)}$**
   Check: Distance from $M$ to $(4, -3) = \sqrt{(4 - 1)^2 + (-3 - 3)^2} = \sqrt{9 + 36} = \sqrt{45}$; to $(-2, 9) = \sqrt{(-2 - 1)^2 + (9 - 3)^2} = \sqrt{9 + 36} = \sqrt{45}$ ✅

2. Let $B = (x, y)$. $\dfrac{7 + x}{2} = 3 \implies x = -1$; $\dfrac{1 + y}{2} = -2 \implies y = -5$. **$\mathbf{B = (-1, -5)}$**
   Check: $\left(\dfrac{7 - 1}{2}, \dfrac{1 - 5}{2}\right) = (3, -2)$ ✅

3. $\text{Centre} = \text{mid-point} = \left(\dfrac{-3 + 5}{2}, \dfrac{-1 + 5}{2}\right) = \mathbf{(1, 2)}$.
   $\text{Diameter} = \sqrt{(5 + 3)^2 + (5 + 1)^2} = \sqrt{64 + 36} = 10 \implies \mathbf{\text{radius} = 5}$.
   Check: From $(1, 2)$ to $(-3, -1)$ is $\sqrt{16 + 9} = 5$; to $(5, 5)$ is $\sqrt{16 + 9} = 5$ ✅

4. Mid-point of $PR = \left(\dfrac{0 + 7}{2}, \dfrac{0 + 5}{2}\right) = (3.5, 2.5)$.
   For $S = (x, y)$, the mid-point of $QS$ must match: $\dfrac{4 + x}{2} = 3.5 \implies x = 3$; $\dfrac{1 + y}{2} = 2.5 \implies y = 4$. **$\mathbf{S = (3, 4)}$**
   Check: Mid-point of $QS = \left(\dfrac{4 + 3}{2}, \dfrac{1 + 4}{2}\right) = (3.5, 2.5) =$ mid-point of $PR$ ✅

5. Mid-point of $AC = \left(\dfrac{-1 + 6}{2}, \dfrac{3 + 5}{2}\right) = (2.5, 4)$.
   Mid-point of $BD = \left(\dfrac{2 + 3}{2}, \dfrac{2 + 6}{2}\right) = (2.5, 4)$.
   Since the diagonals have the exact same mid-point, **yes, it is a parallelogram**.
   Distance check: $AB = \sqrt{(2 + 1)^2 + (2 - 3)^2} = \sqrt{10}$ and $DC = \sqrt{(6 - 3)^2 + (5 - 6)^2} = \sqrt{10}$ ✅; $BC = \sqrt{(6 - 2)^2 + (5 - 2)^2} = \sqrt{16 + 9} = 5$ and $AD = \sqrt{(3 + 1)^2 + (6 - 3)^2} = 5$ ✅

6. Mid-point of $PQ = \left(\dfrac{1 + 7}{2}, \dfrac{1 + 1}{2}\right) = (4, 1)$.
   Median from $R(4, 9)$ to $(4, 1) = \sqrt{(4 - 4)^2 + (9 - 1)^2} = \sqrt{0 + 64} = \mathbf{8}$.
   Check: $(4, 1)$ is $3$ units from $P$ and $3$ units from $Q$, confirming it is the mid-point of $PQ$ ✅

7. (a) **True** ✅. $\dfrac{3 + 3}{2} = 3$ and $\dfrac{5 + 11}{2} = 8$.
   (b) **True** ✅. $M$ lies on segment $AB$ at equal distance from both endpoints ($AM + MB = AB$).
   (c) **False** ❌. The mid-point is $\left(\dfrac{0 + a}{2}, \dfrac{0 + b}{2}\right) = \left(\dfrac{a}{2}, \dfrac{b}{2}\right)$, which equals $(a, b)$ only when $(a, b) = (0, 0)$.

8. $M = \left(\dfrac{-3 + 5}{2}, \dfrac{2 + (-4)}{2}\right) = \mathbf{(1, -1)}$.
   $MA = \sqrt{(1 + 3)^2 + (-1 - 2)^2} = \sqrt{16 + 9} = 5$, $MB = \sqrt{(5 - 1)^2 + (-4 + 1)^2} = \sqrt{16 + 9} = 5$, $AB = \sqrt{(5 + 3)^2 + (-4 - 2)^2} = \sqrt{64 + 36} = 10$.
   $MA = MB$ ✅ and $MA + MB = 5 + 5 = 10 = AB$ ✅

9. $\dfrac{k + 5}{2} = 4 \implies k + 5 = 8 \implies \mathbf{k = 3}$.
   Check: for $y$, $\dfrac{3 + 7}{2} = 5$ ✅; for $x$, $\dfrac{3 + 5}{2} = 4$ ✅

---

Now you can find not only distances between points, but also the exact halfway mark between them! Maya and Leo have their café spot at $(6, 6)$, and you can locate the exact midpoint of any segment on a grid just as easily.

---

# Chapter Wrap-Up: Distance Formula

| Topic | What You Learned | Key Takeaway |
|---|---|---|
| **1. Distance Formula** | Straight-line distance between two points from the Pythagoras theorem, plus distance from the origin (Leo & Elena's $5\text{-unit}$ chest) | Square the $x$-difference and $y$-difference, add them, and take the square root |
| **2. Identifying Shapes from Coordinates** | Classifying triangles and quadrilaterals purely from distances (Sophia's tilted plaza proved to be a square) | For a triangle, find $3$ sides and run the converse check; for a quadrilateral, compute $4$ sides $+ 2$ diagonals $= 6$ distances |
| **3. Collinear Points, Equidistant Points, and Unknowns** | Testing collinearity; finding equidistant points on an axis or anywhere in the plane; circumcentre (Mayor Elena's water tower); solving for a missing coordinate | Collinear: longest distance $=$ sum of other two. Equidistant: set $PA^2 = PB^2$. Unknown coordinate: expect $\pm\sqrt{\phantom{x}}$ to give two answers |
| **4. Mid-Point Formula (Extra)** | Halfway point between two points, missing endpoint, circle centre, fourth vertex of a parallelogram, and triangle medians | Average the $x$'s and average the $y$'s; diagonals of a parallelogram share the same mid-point |

### All Formulas

| Concept / Shape | Formula or Condition |
|---|---|
| **Distance formula** | $d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ |
| **Distance from origin** | $OP = \sqrt{x^2 + y^2}$ |
| **Mid-point formula** | $M = \left(\dfrac{x_1 + x_2}{2},\; \dfrac{y_1 + y_2}{2}\right)$ |
| **Collinearity condition** | $AB + BC = AC$ (longest distance $=$ sum of the other two) |
| **Equidistant condition** | $PA = PB \iff PA^2 = PB^2$ (for three points: circumcentre) |
| **Isosceles triangle** | Two sides equal |
| **Equilateral triangle** | All three sides equal |
| **Scalene triangle** | All three sides different |
| **Right-angled triangle** | $(\text{longest side})^2 = \text{sum of squares of other two sides}$ (converse of Pythagoras) |
| **Right isosceles triangle** | Right-angled and two sides equal |
| **Parallelogram** | Opposite sides equal, or diagonals share the same mid-point |
| **Rectangle** | Opposite sides equal $+$ diagonals equal |
| **Rhombus** | All four sides equal |
| **Square** | All four sides equal $+$ diagonals equal (rhombus $+$ equal diagonals) |

In higher grades, you will learn the **Section Formula**—finding a point that divides a line segment in any ratio $m : n$, with the mid-point formula as its $1 : 1$ special case.

---

Distances, shapes, straight lines, and mid-points: whatever coordinate grid problem comes your way, you now have the complete toolkit to solve it!
