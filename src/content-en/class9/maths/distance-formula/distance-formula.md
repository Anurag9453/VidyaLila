# Chapter: Distance Formula

> **Class:** 9 | **Subject:** Mathematics
> **Connected from earlier chapters:** [Coordinate Geometry](../coordinate-geometry/coordinate-geometry.md) and [Part 2](../coordinate-geometry/coordinate-geometry-part2.md) (plotting points, axes, quadrants), [Pythagoras Theorem](../pythagoras-theorem/pythagoras-theorem.md), and [Number Systems Part 4](../number-systems/number-systems-part4.md) (surds).
> **Topics covered in this file:**
> 1. Distance Between Two Points

---

# Topic 1: Distance Between Two Points

In Coordinate Geometry, we learned that every location on a grid has a numerical **address**, such as $(3, 4)$, and we learned how to plot points and identify axes and quadrants. Now comes the next natural question: if you know the coordinates of two points—say two GPS pins on a map—**what is the exact straight-line distance between them?** The Pythagoras theorem gives us the answer immediately. In fact, the distance formula is no mysterious new rule—it is simply the **Pythagoras theorem placed on a coordinate grid**.

---

## The Treasure-Hunt Puzzle

Leo and Elena are playing a treasure-hunt video game. On the screen is a square coordinate grid. Their explorer stands at one grid point, and a treasure chest sits at another. On foot, the explorer can only walk along the grid lines.

Leo counted the steps: "First $3$ steps east, then $4$ steps north. That's **$7$ steps** total to reach the chest."

Yet the game's radar hint flashed: *"Chest is $5$ units away as the crow flies."*

Elena raised an eyebrow. "$7$ and $5$? Where did $5$ come from? Is the game glitching?"

Leo thought for a second. "A crow flies in a straight diagonal line instead of following streets or grid lines. So $5$ must be the **direct straight-line distance**. Wait—how did the game compute $5$?"

Elena traced a little triangle on the screen: $3$ steps across, $4$ steps up, and the straight line to the chest as the third side. "Hey! $3$ and $4$, with a diagonal of $5$... that's the $3\text{-}4\text{-}5$ triangle from the Pythagoras theorem!"

Exactly right! Behind the scenes, the game—just like modern GPS coordinate distancing—used the **Pythagoras theorem**. In this topic, we will turn that trick into a single formula that works for *any* two points on the plane.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Distance** | The length of the straight line segment connecting two points | $5$ units between the explorer and the chest |
| **Unit** | One grid step used to measure length on the coordinate plane | $1\text{ unit} = 1\text{ grid square}$ |
| **Horizontal distance** | The distance between two points sharing the same $y$-coordinate (left–right) | $(-3, 2)$ and $(4, 2)$ |
| **Vertical distance** | The distance between two points sharing the same $x$-coordinate (up–down) | $(5, -4)$ and $(5, 3)$ |
| **Origin** | The point where the $x$-axis and $y$-axis intersect, $(0, 0)$ | The centre of the coordinate grid |
| **Absolute value** | The non-negative size of a number regardless of its sign, written $\lvert a\rvert$; distance is never negative | $\lvert -7\rvert = 7$ |

---

## Part A: Two Points on the Same Horizontal or Vertical Line

Let us start with the easiest case. When two points lie on the **same horizontal line** (meaning both have the exact same $y$-coordinate), the distance between them is simply the difference in their $x$-coordinates. Just like on a number line, subtract the smaller number from the larger one—or take the absolute value of their difference.

> **Same $y$-coordinate:** $\text{distance} = \lvert x_2 - x_1\rvert$
> **Same $x$-coordinate:** $\text{distance} = \lvert y_2 - y_1\rvert$

### Example 1: $(3, 5)$ and $(9, 5)$

Both points have $y = 5$, so they lie on a horizontal line.
$$\text{Distance} = \lvert 9 - 3\rvert = \mathbf{6\text{ units}}$$

### Example 2: Crossing Zero, $(-3, 2)$ and $(4, 2)$

Both points have $y = 2$.
$$\text{Distance} = \lvert 4 - (-3)\rvert = \lvert 4 + 3\rvert = \mathbf{7\text{ units}}$$

Notice that the segment crosses the $y$-axis ($x = 0$): $(-3, 2)$ sits $3$ units to the left of the $y$-axis, and $(4, 2)$ sits $4$ units to the right, for a total of $3 + 4 = 7$.

**Check:** Count along the number line from $-3$ to $4$: $3$ steps from $-3$ to $0$, plus $4$ steps from $0$ to $4$, making $7$ steps in all ✅

### Example 3: Vertical Line, $(5, -4)$ and $(5, 3)$

Both points have $x = 5$, so they lie on a vertical line.
$$\text{Distance} = \lvert 3 - (-4)\rvert = \lvert 3 + 4\rvert = \mathbf{7\text{ units}}$$

**Check:** From $-4$ to $0$ is $4$ steps, and from $0$ to $3$ is $3$ steps: $4 + 3 = 7$ ✅

### Example 4: Both Coordinates Negative, $(-2, -6)$ and $(-2, -1)$

Both points have $x = -2$.
$$\text{Distance} = \lvert -1 - (-6)\rvert = \lvert -1 + 6\rvert = \mathbf{5\text{ units}}$$

**Check:** Counting from $-6$ up to $-1$ gives $-6, -5, -4, -3, -2, -1$ — exactly $5$ steps ✅

---

## Part B: Diagonal Points and the Pythagoras Theorem

Now back to Leo and Elena's puzzle. Suppose the explorer stands at $P(1, 2)$ and the chest sits at $C(4, 6)$. Neither their $x$-coordinates nor their $y$-coordinates match, so the straight line between them is slanted.

**The trick:** build a **right triangle**. Move horizontally from the explorer to match the chest's $x$-coordinate, then move vertically up to the chest. Those two grid paths meet at a right-angled corner, making the slanted line the **hypotenuse**!

```
 y
 6 |                 C (4, 6)  <- chest
   |               / |
   |             /   |
   |    d = ?  /     |  y-difference
   |         /       |  = 6 - 2 = 4
 2 |       P ------- Q (4, 2)
   |    (1, 2)  x-difference
   |            = 4 - 1 = 3
   +-----------------------------> x
```

- **$P(1, 2)$**: explorer
- **$C(4, 6)$**: chest
- **$Q(4, 2)$**: the "corner" point, sharing the chest's $x$-coordinate ($4$) and the explorer's $y$-coordinate ($2$).

From $P$ to $Q$ is horizontal (same $y = 2$), so by Part A, $PQ = \lvert 4 - 1\rvert = \mathbf{3}$.
From $Q$ to $C$ is vertical (same $x = 4$), so $QC = \lvert 6 - 2\rvert = \mathbf{4}$.

At corner $Q$, a horizontal line meets a vertical line, creating a **$90^\circ$ angle**. We now have right triangle $\triangle PQC$. Applying the Pythagoras theorem:

$$PC^2 = PQ^2 + QC^2 = 3^2 + 4^2 = 9 + 16 = 25$$
$$PC = \sqrt{25} = \mathbf{5}$$

There is the game's "$5$ units"! Walking along grid lines took $3 + 4 = 7$ steps, whereas the straight-line distance is only $5$.

### Now for Any Two Points

Call the first point $(x_1, y_1)$ and the second point $(x_2, y_2)$. The small subscripts $1$ and $2$ simply label "first point" and "second point."

```
 y
y2 |                 B (x2, y2)
   |               / |
   |             /   |
   |    d      /     |  |y2 - y1|
   |         /       |
y1 | A ------------- Q (x2, y1)
   | (x1, y1)  |x2 - x1|
   +-----------------------------> x
```

- Horizontal leg: $\lvert x_2 - x_1\rvert$
- Vertical leg: $\lvert y_2 - y_1\rvert$
- Pythagoras theorem: $d^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$

Taking the positive square root of both sides:

> **Distance Formula:**
> $$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

Notice we do not need the absolute value bars $\lvert \ \rvert$ inside the formula, because squaring any negative number turns it positive anyway. Let us see another useful consequence of that next.

### Run the Formula in 3 Steps

1. Find the **$x$-difference**: $x_2 - x_1$.
2. Find the **$y$-difference**: $y_2 - y_1$.
3. **Square** both differences, **add** them, and take the **square root**.

---

## Part C: Order Does Not Matter

Does it matter whether you label the explorer as $(x_1, y_1)$ or the chest as $(x_1, y_1)$? Let us check with $(1, 2)$ and $(4, 6)$.

**First order:** $(x_1, y_1) = (1, 2)$ and $(x_2, y_2) = (4, 6)$
$$d = \sqrt{(4 - 1)^2 + (6 - 2)^2} = \sqrt{3^2 + 4^2} = \sqrt{25} = 5$$

**Reversed order:** $(x_1, y_1) = (4, 6)$ and $(x_2, y_2) = (1, 2)$
$$d = \sqrt{(1 - 4)^2 + (2 - 6)^2} = \sqrt{(-3)^2 + (-4)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$$

The differences flipped signs ($-3$ and $-4$), yet squaring immediately gave $(-3)^2 = 9$ and $(-4)^2 = 16$—the exact same positive numbers! So the answer is identical: **$5$**.

That makes total sense: the distance from Leo to Elena is the exact same as the distance from Elena to Leo. Still, to keep your work neat and error-free, **always put the same point first in both brackets**: whichever point you put first in the $x$-bracket, put that same point first in the $y$-bracket.

---

## Part D: Distance from the Origin

The origin $O(0, 0)$ is just another point on the grid. To find the distance of any point $(x, y)$ from the origin, substitute $(x_1, y_1) = (0, 0)$ into the distance formula:

$$d = \sqrt{(x - 0)^2 + (y - 0)^2} = \sqrt{x^2 + y^2}$$

> **Distance of $(x, y)$ from the origin $= \sqrt{x^2 + y^2}$**

### Example 5: Distance of $(6, 8)$ from the Origin

$$d = \sqrt{6^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = \mathbf{10}$$

### Example 6: Distance of $(-5, 12)$ from the Origin

$$d = \sqrt{(-5)^2 + 12^2} = \sqrt{25 + 144} = \sqrt{169} = \mathbf{13}$$

Notice carefully: $(-5)^2 = (-5) \times (-5) = +25$. Even though this point sits in Quadrant II, its distance from the origin is positive.

**Check:** $13^2 = 169$ and $25 + 144 = 169$ ✅

---

## Part E: More Solved Examples

### Example 7: $(1, 2)$ and $(4, 6)$

This is Leo and Elena's original puzzle: $d = \sqrt{3^2 + 4^2} = \mathbf{5}$.

### Example 8: Crossing Axes, $(-2, -3)$ and $(4, 5)$

- $x$-difference: $4 - (-2) = 4 + 2 = 6$
- $y$-difference: $5 - (-3) = 5 + 3 = 8$

$$d = \sqrt{6^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = \mathbf{10}$$

**Check:** $10^2 = 100 = 36 + 64$ ✅

### Example 9: Answer as a Surd, $(2, 3)$ and $(7, 8)$

- $x$-difference: $7 - 2 = 5$
- $y$-difference: $8 - 3 = 5$

$$d = \sqrt{5^2 + 5^2} = \sqrt{25 + 25} = \sqrt{50}$$

Since $50$ is not a perfect square, leave the exact answer as a simplified **surd**. Just as we practiced in [Number Systems Part 4](../number-systems/number-systems-part4.md), $50 = 25 \times 2$, so:

$$\sqrt{50} = \sqrt{25} \times \sqrt{2} = \mathbf{5\sqrt{2}}$$

For a quick estimate, since $\sqrt{2} \approx 1.414$, we have $5\sqrt{2} \approx 7.07\text{ units}$.

**Check:** $(5\sqrt{2})^2 = 25 \times 2 = 50$ ✅ And a quick sense check: if the two legs are both $5$, the hypotenuse must be longer than $5$ and shorter than $5 + 5 = 10$, so $7.07$ makes complete sense!

### Example 10: Both Points with Negative Coordinates, $(-4, -3)$ and $(-1, -2)$

- $x$-difference: $-1 - (-4) = -1 + 4 = 3$
- $y$-difference: $-2 - (-3) = -2 + 3 = 1$

$$d = \sqrt{3^2 + 1^2} = \sqrt{9 + 1} = \sqrt{10}$$

Since $10 = 2 \times 5$ has no perfect-square factor, $\sqrt{10}$ cannot be simplified further. Answer: **$\sqrt{10} \approx 3.16\text{ units}$**.

**Check:** $(\sqrt{10})^2 = 10 = 9 + 1$ ✅

### Example 11: Distance on a GPS Map (Scale: $1\text{ unit} = 100\text{ m}$)

A town's digital GPS map uses a coordinate grid where $1\text{ unit} = 100\text{ metres}$. The school is located at $(1, 1)$ and the central park is at $(13, 6)$. What is the straight-line distance from the school to the park?

- $x$-difference: $13 - 1 = 12$
- $y$-difference: $6 - 1 = 5$

$$d = \sqrt{12^2 + 5^2} = \sqrt{144 + 25} = \sqrt{169} = \mathbf{13\text{ units}}$$

Now apply the map scale: $13 \times 100 = \mathbf{1{,}300\text{ m}}$ ($1.3\text{ km}$).

**Check:** $13^2 = 169 = 144 + 25$ ✅

**Tip:** Always calculate the distance in grid units first, and multiply by the map scale **at the very end**.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Subtracting $x$ from $y$.**
   For $(1, 2)$ and $(4, 6)$, computing $4 - 2$ or $6 - 1$ mixes coordinates! Always subtract $x$ from $x$ and $y$ from $y$: $(4 - 1)$ and $(6 - 2)$.

2. **Mistake 2: Forgetting to square the differences.**
   - Wrong: $d = \sqrt{(4 - 1) + (6 - 2)} = \sqrt{3 + 4} = \sqrt{7}$
   - Right: $d = \sqrt{(4 - 1)^2 + (6 - 2)^2} = \sqrt{9 + 16} = \mathbf{5}$

3. **Mistake 3: Forgetting to take the square root at the end.**
   - Wrong: "$d = 9 + 16 = 25\text{ units}$." That is $d^2$, not $d$!
   - Right: $d = \sqrt{25} = \mathbf{5}$. Always ask yourself at the end: *"Did I take the square root?"*

4. **Mistake 4: Making sign errors with negative coordinates.**
   Between $(-2, -3)$ and $(4, 5)$, the $x$-difference is $4 - (-2)$.
   - Wrong: $4 - (-2) = 2$
   - Right: $4 - (-2) = 4 + 2 = \mathbf{6}$
   Subtracting a negative turns into adding! Likewise, $5 - (-3) = \mathbf{8}$, not $2$.

5. **Mistake 5: Using inconsistent point order inside the two brackets.**
   - Messy: $(4 - 1)^2 + (2 - 6)^2$. Here the first bracket subtracts point $1$ from point $2$, while the second subtracts point $2$ from point $1$. Although squaring happens to rescue the answer—$(2 - 6)^2 = (-4)^2 = 16 = (6 - 2)^2$—mixing the order makes it far easier to confuse $x$ and $y$ (Mistake 1) and harder to proofread your work.
   - Clean rule: **always place the same point first in both brackets**, e.g., $(4 - 1)^2 + (6 - 2)^2$. And never mix $x$ and $y$ inside the same bracket!

---

## Quick Recap

- The straight-line distance between two points on a grid is the **hypotenuse** of a right triangle found via the Pythagoras theorem.
- **Same $y$:** $\text{distance} = \lvert x_2 - x_1\rvert$. **Same $x$:** $\text{distance} = \lvert y_2 - y_1\rvert$. Distance is never negative.
- **Distance formula:** $d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.
- Point order does not change the final distance because squaring eliminates negative signs.
- **Distance from the origin:** $\sqrt{x^2 + y^2}$.
- If the value under the root is not a perfect square, keep it as a simplified **surd**, such as $\sqrt{50} = 5\sqrt{2}$.
- On a scaled map, find the distance in grid units first, then multiply by the scale.
- Avoid mixing $x$ and $y$, forgetting squares or the square root, dropping minus signs, or switching order between brackets.

---

## Practice Questions

1. Find the distance between the points $(2, 3)$ and $(10, 9)$.

2. Find the distance between $(-1, -1)$ and $(4, 11)$.

3. Find the distance of the point $(-7, -24)$ from the origin.

4. Find the distance between $(-3, 1)$ and $(3, -1)$. Give the answer in simplest surd form.

5. On a city map, $1\text{ unit} = 50\text{ m}$. Two shops are at $A(-2, 1)$ and $B(4, 9)$. How far apart are they in metres?

6. A student calculates the distance between $(2, -3)$ and $(5, 1)$ as $\sqrt{(5 - 2)^2 + (1 - 3)^2} = \sqrt{13}$. Spot the mistake and find the correct distance.

7. Find the distance between (a) $(-4, -7)$ and $(-4, 5)$, and (b) $(6, -2)$ and $(-9, -2)$, without using the full distance formula.

8. State True or False:
   (a) The distance between $(3, 4)$ and $(4, 3)$ is the same as the distance between $(4, 3)$ and $(3, 4)$.
   (b) The distance of $(-3, -4)$ from the origin is $-5$.
   (c) Walking along grid lines from one point to another always gives the same distance as the straight-line distance.
   (d) The distance between $(2, 5)$ and $(2, 9)$ is $4$.

### Answers

1. $x$-difference $= 10 - 2 = 8$, $y$-difference $= 9 - 3 = 6$.
   $d = \sqrt{8^2 + 6^2} = \sqrt{64 + 36} = \sqrt{100} = \mathbf{10}$
   Check: $10^2 = 100 = 64 + 36$ ✅

2. $x$-difference $= 4 - (-1) = 5$, $y$-difference $= 11 - (-1) = 12$.
   $d = \sqrt{5^2 + 12^2} = \sqrt{25 + 144} = \sqrt{169} = \mathbf{13}$
   Check: $13^2 = 169$ ✅

3. $d = \sqrt{(-7)^2 + (-24)^2} = \sqrt{49 + 576} = \sqrt{625} = \mathbf{25}$
   Check: $25^2 = 625$ ✅

4. $x$-difference $= 3 - (-3) = 6$, $y$-difference $= -1 - 1 = -2$.
   $d = \sqrt{6^2 + (-2)^2} = \sqrt{36 + 4} = \sqrt{40} = \sqrt{4 \times 10} = \mathbf{2\sqrt{10}}$
   Check: $(2\sqrt{10})^2 = 4 \times 10 = 40$ ✅

5. $x$-difference $= 4 - (-2) = 6$, $y$-difference $= 9 - 1 = 8$.
   $d = \sqrt{6^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10\text{ units}$.
   Multiply by scale: $10 \times 50 = \mathbf{500\text{ m}}$.
   Check: $36 + 64 = 100$ ✅

6. **Mistake:** The $y$-difference was written as $1 - 3$ instead of $1 - (-3)$ (the negative sign on $-3$ was dropped, treating it as $+3$).
   **Correct solution:** $d = \sqrt{(5 - 2)^2 + (1 - (-3))^2} = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = \mathbf{5}$.
   Check: $3\text{-}4\text{-}5$ right triangle ✅

7. (a) Both points share $x = -4$, and the $y$-coordinates are $-7$ and $5$, so $\text{distance} = \lvert 5 - (-7)\rvert = 5 + 7 = \mathbf{12}$.
   (b) Both points share $y = -2$, so $\text{distance} = \lvert 6 - (-9)\rvert = 6 + 9 = \mathbf{15}$.
   Check: (a) $7$ units from $-7$ to $0$ plus $5$ units from $0$ to $5$ $= 12$ ✅; (b) $6$ units from $6$ to $0$ plus $9$ units from $0$ to $-9$ $= 15$ ✅

8. (a) **True** ✅. Distance does not depend on the order of the two points.
   (b) **False** ❌. Distance is never negative: $\sqrt{(-3)^2 + (-4)^2} = \sqrt{25} = \mathbf{5}$.
   (c) **False** ❌. Walking along grid lines (such as $3 + 4 = 7$) is usually longer than the straight-line distance ($5$); they are equal only when the two points lie on the same horizontal or vertical line.
   (d) **True** ✅. Both points have $x = 2$, so $\text{distance} = \lvert 9 - 5\rvert = 4$.

---

Leo and Elena unlocked the treasure chest, and Elena grinned: "Now it makes complete sense—$7$ and $5$ were both right. One was the walking path, and the other was the straight flight!" That is the essence of the distance formula: take any two points, picture the little right triangle between them, and let the Pythagoras theorem do the rest.

**What's next?** Now that we have a tool that measures the distance between any pair of points, let us meet town planner Sophia in Topic 2. She has marked four lamp-posts for a new public plaza—and her contractor Liam insists they do not form a square. Can we use **distances alone** to prove exactly what shape a set of points makes?
