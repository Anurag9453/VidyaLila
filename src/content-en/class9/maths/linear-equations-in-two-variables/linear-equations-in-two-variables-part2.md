# Chapter: Linear Equations in Two Variables (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [linear-equations-in-two-variables.md](linear-equations-in-two-variables.md)** (which covers Topic 1).
> **Topics covered in this file:**
> 2. Graph of a Linear Equation in Two Variables

---

# Topic 2: Graph of a Linear Equation in Two Variables

In Topic 1, we saw that a linear equation in two variables is written in standard form as $ax + by + c = 0$, and that each solution is an **ordered pair $(x, y)$**. We found solutions by building a table, and discovered that such an equation has **infinitely many solutions**.

Now a natural question arises: if there are infinitely many solutions, how can we show all of them at once? Listing every single one is impossible.

The answer is a **graph**. In this topic, we will plot each solution $(x, y)$ as a **point** on graph paper. Then something remarkable happens: every single one of those points falls on the exact same **straight line**. That single line captures the entire story of the equation.

---

## A Cinema Hall Story

In Topic 1, we used a cinema ticket ("Row $5$, Seat $3$") to see why order matters in $(x, y)$. Now look at that same ticket in a new light: it guides you to **one exact spot** inside the hall. One number tells you how far **across** to walk, and the other tells you how far **up** to climb. Two numbers, one exact position.

A sheet of graph paper works just like that cinema hall. Every point has its own "ticket": **$(x, y)$**. The ordered pair from Topic 1 is that very ticket.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Cartesian plane** | Graph paper with two number lines intersecting at $90^\circ$ | The grid shown below |
| **$x$-axis** | The horizontal number line | Runs left to right |
| **$y$-axis** | The vertical number line | Runs bottom to top |
| **Origin** | The point where the two axes intersect | Point $(0, 0)$, labelled $O$ |
| **Coordinates** | The two numbers $(x, y)$ giving a point's exact position | $(3, 2)$ |
| **Quadrant** | One of the four regions created by the intersecting axes | Quadrants I, II, III, IV |
| **Plotting** | Marking a point at its exact spot on the graph | Placing a dot at $(3, 2)$ |
| **Graph of an equation** | The shape formed by plotting all solutions of the equation as points | The straight line of $x + y = 5$ |

---

## Part A: The Cartesian Plane (Just What You Need)

### Axes and the Origin

Take two perpendicular number lines:
- One **horizontal** line, called the **$x$-axis**. Numbers to the right of the center are positive; numbers to the left are negative.
- One **vertical** line, called the **$y$-axis**. Numbers above the center are positive; numbers below are negative.

The point where the two lines meet is called the **origin ($O$)**, and its coordinates are **$(0, 0)$**.

### The Four Quadrants

The two axes divide the flat plane into four regions called **quadrants**:

```
                 y
                 |
      II         |         I
    (-, +)       |       (+, +)
                 |
  ---------------O---------------> x
                 |
      III        |         IV
    (-, -)       |       (+, -)
                 |
```

| Quadrant | Sign of $x$ | Sign of $y$ | Example |
|---|---|---|---|
| I | $+$ | $+$ | $(3, 2)$ |
| II | $-$ | $+$ | $(-2, 4)$ |
| III | $-$ | $-$ | $(-3, -1)$ |
| IV | $+$ | $-$ | $(4, -2)$ |

The quadrants are numbered starting from **I** in the top-right and moving **anticlockwise** (counterclockwise): top-right, top-left, bottom-left, bottom-right.

### How to Plot a Point: "Walk Across, Then Climb"

To plot the point **$(x, y)$**:
1. **Start at the origin $(0, 0)$.**
2. **Walk across** along the $x$-direction by $x$: move right if positive, left if negative.
3. Then **climb** along the $y$-direction by $y$: move up if positive, down if negative.
4. Mark a dot there and label it.

**Examples:**
- **$(3, 2)$:** $3$ units right, $2$ units up $\implies$ Quadrant I.
- **$(-2, 4)$:** $2$ units left, $4$ units up $\implies$ Quadrant II.
- **$(-3, -1)$:** $3$ units left, $1$ unit down $\implies$ Quadrant III.
- **$(4, -2)$:** $4$ units right, $2$ units down $\implies$ Quadrant IV.

### Points Lying on the Axes

- **$(5, 0)$:** $5$ units right, and $0$ units up or down. This lies on the **$x$-axis**.
- **$(0, 3)$:** $0$ units left or right, and $3$ units straight up. This lies on the **$y$-axis**.

Remember: **every point on the $x$-axis has $y = 0$**, and **every point on the $y$-axis has $x = 0$**. We will use this fact constantly.

---

## Part B: Why the Graph Is Always a Straight Line

### The Muffin Experiment

Suppose two brothers, Leo and Liam, share **$5$ muffins** in total. Leo has $x$ muffins and Liam has $y$ muffins:

$$x + y = 5$$

Just like in Topic 1, make a table of solutions:

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|---|
| $y$ | $5$ | $4$ | $3$ | $2$ | $1$ | $0$ |

Now plot these points: $(0, 5), (1, 4), (2, 3), (3, 2), (4, 1), (5, 0)$.

```
  y
  5 *
  4 |  *
  3 |     *
  2 |        *
  1 |           *
  0 +--------------*----> x
    0  1  2  3  4  5
```

Look at those dots — every single one lies in a **perfectly straight line**! Place a ruler along them and all six points touch the edge together.

Now free the equation from muffins so $x$ and $y$ can be any real numbers (decimals, fractions, negatives) whose sum is $5$:
- $(2.5, 2.5)$: $2.5 + 2.5 = 5$ ✅
- $(-1, 6)$: $-1 + 6 = 5$ ✅
- $(6, -1)$: $6 + (-1) = 5$ ✅

Every one of those points also sits on **the exact same line** once you extend it in both directions.

### Why a Straight Line? Equal Steps

Look closely at the table. **Whenever $x$ increases by $1$, $y$ always decreases by $1$.** Every step has the exact same size. When every step is equal, the path stays straight — it never bends.

Take another example: **$y = 2x + 1$**. Whenever $x$ increases by $1$, $y$ always increases by **$2$**. Once again, the steps are equal, so the graph is another straight line.

That is why these equations are called **linear** equations: their graph is always a **straight line**.

To see the contrast, look at a non-linear equation: **$y = x^2$**.

| $x$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|
| $y$ | $0$ | $1$ | $4$ | $9$ |

Here the steps in $y$ are $1$, $3$, and $5$ — they are not equal! Because the step size changes, the graph **bends** into a curve. It is not linear.

### The Most Important Fact (A Two-Way Relationship)

For any linear equation $ax + by + c = 0$:

> 1. **Every solution $(x, y)$ is a point on the line.**
> 2. **Every point on the line is a solution of the equation.**

In other words, the line and the set of solutions are **the same thing** — one is written in numbers, and the other is drawn as a picture. And because a line contains infinitely many points, the equation has infinitely many solutions. The fact from Topic 1 is now right before your eyes!

---

## Part C: How to Draw a Graph (The 3-Point Method)

Two distinct points are enough to fix a straight line. So why plot $3$ points? **The third point is your built-in check.** If you made a calculation slip in one of the points, the third point will fall off the line and catch your mistake immediately.

### Steps

1. **Express $y$ in terms of $x$** (whenever convenient). For example, $x + y = 5 \implies y = 5 - x$.
2. **Choose $3$ values of $x$.** Pick values that produce **whole-number** values for $y$ (fractions are harder to plot accurately).
3. **Build a table** and compute $y$ for each chosen $x$.
4. **Choose a scale.** Usually $1\text{ cm} = 1\text{ unit}$. If the numbers are large, use $1\text{ cm} = 5$ or $10\text{ units}$. Keep **one uniform scale** along each axis.
5. **Plot all three points.**
6. **Join them with a ruler** and **extend the line in both directions** (draw arrowheads at both ends).
7. **Write the equation** alongside the line.

If the three points do not line up along a single straight ruler edge, recheck your table — that is a clear signal of an arithmetic error.

---

## Part D: Solved Graphs

### Graph 1: $x + y = 5$

$y = 5 - x$

| $x$ | $0$ | $2$ | $5$ |
|---|---|---|---|
| $y$ | $5$ | $3$ | $0$ |

Check: $0 + 5 = 5$ ✅, $2 + 3 = 5$ ✅, $5 + 0 = 5$ ✅

Plot $(0, 5)$, $(2, 3)$, and $(5, 0)$ and join them with a ruler. The line slopes downward from top-left to bottom-right (just like the sketch in Part B).

### Graph 2: $y = 2x + 1$

| $x$ | $-1$ | $0$ | $1$ |
|---|---|---|---|
| $y$ | $-1$ | $1$ | $3$ |

Check: $2(-1) + 1 = -1$ ✅, $2(0) + 1 = 1$ ✅, $2(1) + 1 = 3$ ✅

```
  5       |     *
  4       |
  3       |  *
  2       |
  1       *
  0 ------+------> x
 -1    *  |
 -2       |
 -3 *     |
   -2 -1  0  1  2
```

*(The sketch also shows $(-2, -3)$ and $(2, 5)$, which lie on the same line: $2(-2) + 1 = -3$ ✅ and $2(2) + 1 = 5$ ✅.)*

This line **climbs** from bottom-left to top-right and crosses the $y$-axis at **$(0, 1)$**.

### Graph 3: $2x - 3y = 6$

First solve for $y$: $-3y = 6 - 2x \implies \mathbf{y = \frac{2x - 6}{3}}$

Here, picking random values for $x$ can give fractions. To get whole numbers for $y$, choose $x$ to be **multiples of $3$** ($0, 3, 6$).

| $x$ | $0$ | $3$ | $6$ |
|---|---|---|---|
| $y$ | $-2$ | $0$ | $2$ |

Check:
- $x = 0$: $2(0) - 3(-2) = 0 + 6 = 6$ ✅
- $x = 3$: $2(3) - 3(0) = 6$ ✅
- $x = 6$: $2(6) - 3(2) = 12 - 6 = 6$ ✅

Plot $(0, -2)$, $(3, 0)$, and $(6, 2)$. The line crosses the $y$-axis below the origin at $(0, -2)$ and the $x$-axis at $(3, 0)$.

### Graph 4: $y = 3x$ (A Line Passing Through the Origin)

| $x$ | $-1$ | $0$ | $1$ |
|---|---|---|---|
| $y$ | $-3$ | $0$ | $3$ |

Check: $3(-1) = -3$ ✅, $3(0) = 0$ ✅, $3(1) = 3$ ✅

This line passes right through the **origin $(0, 0)$**, rising from Quadrant III into Quadrant I. We will look more closely at lines like this in Part G.

---

## Part E: Where the Line Cuts the Axes

Remember from Part A:
- Every point on the **$x$-axis** has **$y = 0$**.
- Every point on the **$y$-axis** has **$x = 0$**.

In Topic 1, we found two super quick solutions by setting $x = 0$ and $y = 0$. On the graph, those exact two solutions are the points where the line crosses the axes!

> **Point on the $x$-axis:** substitute **$y = 0$** into the equation and solve for $x$.
> **Point on the $y$-axis:** substitute **$x = 0$** into the equation and solve for $y$.

**Example: $3x + 4y = 12$**

- Set $y = 0$: $3x = 12 \implies x = 4$. Point **$(4, 0)$** on the $x$-axis.
- Set $x = 0$: $4y = 12 \implies y = 3$. Point **$(0, 3)$** on the $y$-axis.
- Third point as a check: set $x = -4$: $3(-4) + 4y = 12 \implies -12 + 4y = 12 \implies 4y = 24 \implies y = 6$. Point **$(-4, 6)$**.

Check: $3(-4) + 4(6) = -12 + 24 = 12$ ✅

This is the **fastest way to graph a linear equation**: find the two axis intercepts, plus one extra point to check.

**Example: $2x - 3y = 6$** (from Graph 3)
- $y = 0$: $x = 3 \implies (3, 0)$
- $x = 0$: $-3y = 6 \implies y = -2 \implies (0, -2)$

These are the exact same axis points we saw in our table!

---

## Part F: Lines Parallel to the Axes

### $x = a$ (A Vertical Line)

At the end of Topic 1, we saw that **$x = 3$** can be written in two variables as **$1 \cdot x + 0 \cdot y = 3$**: $y$ can be anything, as long as $x = 3$. A few solutions are $(3, -2), (3, 0), (3, 1), (3, 4)$.

All of these points lie on a **vertical line** that crosses the $x$-axis at $(3, 0)$ and runs **parallel to the $y$-axis**.

### $y = b$ (A Horizontal Line)

Look at **$y = -2$**, or **$0 \cdot x + 1 \cdot y = -2$**. Here $x$ can be anything, while $y$ is always $-2$. Solutions include $(-1, -2), (0, -2), (2, -2), (3, -2)$.

This forms a **horizontal line** that crosses the $y$-axis at $(0, -2)$ and runs **parallel to the $x$-axis**.

```
  3    |        #
  2    |        #
  1    |        #
  0 ---+--------#--> x
 -1    |        #
 -2 ===|========X===      <- y = -2
 -3    |        #
   -1  0  1  2  3  4
                ^
              x = 3
```

The two lines intersect at **$(3, -2)$** (marked with `X`).

### An Easy Way to Remember

- **$x = a$** $\rightarrow$ **vertical** line (parallel to the $y$-axis). "Since $x$ is fixed, you can only move up and down."
- **$y = b$** $\rightarrow$ **horizontal** line (parallel to the $x$-axis). "Since $y$ is fixed, you can only move left and right."

### The Axes Themselves Are Lines

- The graph of **$y = 0$** is the **$x$-axis** (every point on the $x$-axis has $y = 0$).
- The graph of **$x = 0$** is the **$y$-axis** (every point on the $y$-axis has $x = 0$).

### An Interesting Question

What is the graph of **$x = 3$**?
- If the context is **one variable** (a number line), it is **a single point**: the number $3$ on the number line.
- If the context is **two variables** (the Cartesian plane), it is **an entire vertical straight line**.

That is why you should always read exam questions carefully to see whether they ask for the graph in one variable or two variables!

---

## Part G: Lines Passing Through the Origin

When an equation has **no constant term** ($c = 0$) — that is, it has the form **$ax + by = 0$** or **$y = mx$** — its graph **always passes through the origin**.

Why? Substitute $x = 0$ and $y = 0$: $a(0) + b(0) = 0$ ✅. So $(0, 0)$ is always a solution!

| Equation | Passes through the origin? | Why |
|---|---|---|
| $y = 3x$ | Yes | $0 = 3(0)$ ✅ |
| $y = -x$ | Yes | $0 = -(0)$ ✅ |
| $3x - 2y = 0$ | Yes | $0 - 0 = 0$ ✅ |
| $x + y = 1$ | No | $0 + 0 = 0 \neq 1$ |
| $y = x + 1$ | No | $0 \neq 0 + 1$ |

### A Quick Observation

Draw $y = x$, $y = 2x$, and $y = 3x$ on the same set of axes. All three pass through the origin, yet **$y = 3x$ climbs the steepest**, followed by $y = 2x$, and then $y = x$. The larger the number multiplying $x$, the steeper the climb. (In higher classes, this steepness is called the **slope** or gradient, $m$, in the form $y = mx + c$.)

Meanwhile, **$y = -x$** tilts in the opposite direction: it slopes downward from top-left to bottom-right.

---

## Part H: Reading Solutions from a Graph

A graph is not just a drawing — it is a **ready-made lookup table**.

### Reading $y$ for a Given $x$

From the graph of **$x + y = 5$**, what is $y$ when **$x = 1$**?

Find $1$ on the $x$-axis, move **straight up** until you hit the line, then move **straight left** to read the value on the $y$-axis. You land on **$y = 4$**.

Check: $1 + 4 = 5$ ✅

### Reading $x$ for a Given $y$

From the same graph, what is $x$ when **$y = -1$**?

Find $-1$ on the $y$-axis, move **straight right** until you meet the line, then move **straight up** to read the $x$-axis. You land on **$x = 6$**.

Check: $6 + (-1) = 5$ ✅

### Does a Point Lie on the Line?

There are two ways to tell:
1. **From the graph:** plot the point and check whether it sits directly on the line.
2. **By calculation (exact):** substitute the point's $x$ and $y$ into the equation. If $\text{LHS} = \text{RHS}$, the point lies on the line.

For **$y = 2x + 1$**:
- **$(2, 5)$:** $2(2) + 1 = 5$ ✅ $\implies$ lies on the line.
- **$(3, 6)$:** $2(3) + 1 = 7 \neq 6 \implies$ does **not** lie on the line.

### How Many Lines Can Pass Through One Point?

Take the point **$(2, 3)$**. Does it lie on all of these lines?
- $x + y = 5$: $2 + 3 = 5$ ✅
- $y = 2x - 1$: $2(2) - 1 = 3$ ✅
- $3x - 2y = 0$: $6 - 6 = 0$ ✅
- $x = 2$ and $y = 3$ also pass through $(2, 3)$ ✅

Yes! **Infinitely many lines** can pass through a single point. (However, through **two distinct points**, **only one** unique straight line can pass — which is why two points determine a line, and the third serves as our check.)

---

## Part I: A Real-Life Graph: Ride-Share Fare

A ride-share service charges a **\$30** base fare as soon as the trip starts, plus **\$12** for every kilometre travelled.

If a trip covers $x\text{ km}$ and the total fare is $\$y$:

$$y = 12x + 30$$

| $x$ ($\text{km}$) | $0$ | $5$ | $10$ |
|---|---|---|---|
| $y$ (\$) | $30$ | $90$ | $150$ |

Check: $12(5) + 30 = 90$ ✅, $12(10) + 30 = 150$ ✅

### Choosing a Scale

Here the $y$-values reach $150$. If you used $1\text{ cm} = \$1$, your graph paper would need to be $150\text{ cm}$ tall! Instead, choose a practical scale:
- **$x$-axis:** $1\text{ cm} = 1\text{ km}$
- **$y$-axis:** $1\text{ cm} = \$20$

### One Important Detail

Here **$x$ cannot be negative** (you cannot travel $-3\text{ km}$). So the graph starts at **$x = 0$** — at the point **$(0, 30)$** — and extends upward to the right. Real-world graphs often live entirely in **Quadrant I**.

### Reading Answers from the Graph

**Question:** How far can you travel for **\$120**?

Find $120$ on the $y$-axis, move straight right to meet the line, then drop straight down to the $x$-axis. You read **$x = 7.5\text{ km}$**.

Check: $12(7.5) + 30 = 90 + 30 = 120$ ✅

### Another Real-Life Example: Celsius and Fahrenheit

The equation converting temperature from Celsius ($C$) to Fahrenheit ($F$) is: **$F = \frac{9}{5}C + 32$**

| $C$ | $0$ | $100$ | $-40$ |
|---|---|---|---|
| $F$ | $32$ | $212$ | $-40$ |

Check: $\frac{9}{5}(100) + 32 = 180 + 32 = 212$ ✅, $\frac{9}{5}(-40) + 32 = -72 + 32 = -40$ ✅

Because temperatures can easily be negative (in winter), this line extends in both directions. And notice a neat fact: at **$-40$**, both the Celsius and Fahrenheit scales read the exact same number!

---

## Common Pitfalls to Avoid

1. **Mistake 1: Reversing the order of $(x, y)$ when plotting.**
   $(2, 3)$ means $2$ units right and $3$ units up. Plotting it as $3$ right and $2$ up puts you in the wrong place — just like sitting in the wrong cinema seat.

2. **Mistake 2: Plotting only $2$ points.**
   Two points always make a straight line, even if one of them is wrong! Always plot a third point to catch calculation slips.

3. **Mistake 3: Drawing a short segment that stops at your plotted points.**
   A linear equation has infinitely many solutions, so its line extends forever in both directions — put arrowheads on both ends. *(Only stop at $x = 0$ in real-life problems where negative values make no sense, such as distance or time.)*

4. **Mistake 4: Using an uneven scale along an axis.**
   If one grid square equals $1$ unit in one place and $2$ units in another on the same axis, your straight line will look bent. Keep one consistent scale along each axis.

5. **Mistake 5: Drawing $x = 3$ as a horizontal line.**
   $x = 3$ is a **vertical** line (parallel to the $y$-axis), whereas $y = 3$ is a horizontal line. Think: "When $x$ is fixed, I can only move up and down."

6. **Mistake 6: Picking $x$-values that lead to messy fractions.**
   In $2x - 3y = 6$, choosing $x = 1$ gives $y = -\frac{4}{3}$, which is awkward to plot accurately. Choosing multiples of $3$ keeps every point a clean integer.

7. **Mistake 7: Placing negative points in the wrong quadrant.**
   $(-3, -1)$ lies in Quadrant III (left and down). Always check both signs carefully before moving from the origin.

8. **Mistake 8: Forcing a bent line through three points that do not line up.**
   If your three points do not lie on one straight ruler edge, **at least one calculation is wrong**. Never bend the line — go back and check your arithmetic!

---

## Quick Recap

- **Cartesian plane:** horizontal $x$-axis, vertical $y$-axis, origin $(0, 0)$, and four quadrants: I $(+, +)$, II $(-, +)$, III $(-, -)$, IV $(+, -)$.
- **Plotting $(x, y)$:** walk across by $x$ (right/left), then climb by $y$ (up/down).
- On the **$x$-axis, $y = 0$**; on the **$y$-axis, $x = 0$**.
- The graph of a linear equation is always a **straight line**. **Every solution is a point on the line, and every point on the line is a solution.**
- **3-point method:** compute $3$ points (the third as a check), plot them, join them with a ruler, and extend the line with arrows at both ends.
- **Axis intercepts:** set $y = 0$ to find where the line cuts the $x$-axis; set $x = 0$ to find where it cuts the $y$-axis.
- **$x = a$** is a vertical line (parallel to the $y$-axis); **$y = b$** is a horizontal line (parallel to the $x$-axis). **$x = 0$** is the $y$-axis; **$y = 0$** is the $x$-axis.
- When **$c = 0$** ($ax + by = 0$ or $y = mx$), the line **passes through the origin**.
- You can **read** $y$ for any $x$ (or $x$ for any $y$) directly from the graph, and check whether a point lies on the line by substituting into the equation.
- Infinitely many lines pass through one point, while only one unique line passes through two distinct points.

---

## Practice Questions

1. State the quadrant or the axis in which each point lies:
   (a) $(4, -3)$
   (b) $(-2, -5)$
   (c) $(0, 6)$
   (d) $(-7, 0)$
   (e) $(-1, 8)$

2. Draw the graph of each equation. Use a table of at least three points.
   (a) $x + y = 4$
   (b) $y = x - 2$
   (c) $2x + y = 6$
   (d) $x - 2y = 4$

3. Find the points where the graph of $3x + 2y = 12$ cuts the $x$-axis and the $y$-axis. Find one more point on the line as a check.

4. Draw the graphs of $x = -2$ and $y = 3$ on the same axes. Write the coordinates of the point where they meet.

5. Which of the following lines pass through the origin? Give a reason.
   (a) $y = 4x$
   (b) $x + y = 1$
   (c) $3x - 2y = 0$
   (d) $y = x + 1$

6. Draw the graph of $y = 2x + 1$. From the graph, find:
   (a) the value of $y$ when $x = 2$
   (b) the value of $x$ when $y = -3$

7. Check whether each point lies on the line $2x - 3y = 6$:
   (a) $(6, 2)$
   (b) $(1, -1)$
   (c) $(0, -2)$

8. Write the equations of any three lines that pass through the point $(2, 3)$. How many such lines are there?

9. A tank already has $10\text{ litres}$ of water. A pipe adds $5\text{ litres}$ of water every minute.
   (a) Write a linear equation for the total water $y$ (in litres) after $x$ minutes.
   (b) Draw its graph.
   (c) From the graph, find the water in the tank after $4$ minutes.
   (d) After how many minutes will the tank have $35\text{ litres}$?

### Answers

1. (a) $x$ positive, $y$ negative $\implies$ **Quadrant IV**
   (b) Both negative $\implies$ **Quadrant III**
   (c) $x = 0 \implies$ on the **$y$-axis**
   (d) $y = 0 \implies$ on the **$x$-axis**
   (e) $x$ negative, $y$ positive $\implies$ **Quadrant II**

2. *(Any three valid points work; here are clean examples:)*
   (a) $y = 4 - x$. Points **$(0, 4), (2, 2), (4, 0)$**. Check: $2 + 2 = 4$ ✅
   (b) Points **$(0, -2), (2, 0), (4, 2)$**. Check: $4 - 2 = 2$ ✅
   (c) $y = 6 - 2x$. Points **$(0, 6), (1, 4), (3, 0)$**. Check: $2(1) + 4 = 6$ ✅
   (d) $y = \frac{x - 4}{2}$. Pick even values of $x$. Points **$(0, -2), (2, -1), (4, 0)$**. Check: $2 - 2(-1) = 2 + 2 = 4$ ✅

3. $y = 0$: $3x = 12 \implies x = 4$. Cuts the **$x$-axis at $(4, 0)$**.
   $x = 0$: $2y = 12 \implies y = 6$. Cuts the **$y$-axis at $(0, 6)$**.
   Check point: $x = 2 \implies 6 + 2y = 12 \implies y = 3$, giving **$(2, 3)$**. Check: $3(2) + 2(3) = 6 + 6 = 12$ ✅

4. $x = -2$ is a **vertical** line crossing the $x$-axis at $(-2, 0)$. $y = 3$ is a **horizontal** line crossing the $y$-axis at $(0, 3)$. They intersect at **$(-2, 3)$**.

5. (a) **Yes.** $0 = 4(0)$ ✅ ($c = 0$)
   (b) **No.** $0 + 0 = 0 \neq 1$
   (c) **Yes.** $3(0) - 2(0) = 0$ ✅
   (d) **No.** $0 \neq 0 + 1$
   So **(a) and (c)** pass through the origin.

6. Plot points $(-1, -1)$, $(0, 1)$, and $(1, 3)$ to draw the line.
   (a) At $x = 2$, **$y = 5$**. Check: $2(2) + 1 = 5$ ✅
   (b) At $y = -3$, **$x = -2$**. Check: $2(-2) + 1 = -3$ ✅

7. (a) $2(6) - 3(2) = 12 - 6 = 6$ ✅ **Lies on the line.**
   (b) $2(1) - 3(-1) = 2 + 3 = 5 \neq 6$. **Does not lie on the line.**
   (c) $2(0) - 3(-2) = 0 + 6 = 6$ ✅ **Lies on the line.**

8. Any three valid equations work, for example:
   **$x + y = 5$** ($2 + 3 = 5$ ✅), **$y = 2x - 1$** ($4 - 1 = 3$ ✅), **$3x - 2y = 0$** ($6 - 6 = 0$ ✅). ($x = 2$ and $y = 3$ are also valid.)
   There are **infinitely many** such lines.

9. (a) Starting with $10\text{ litres}$ and adding $5\text{ litres}$ per minute: **$y = 5x + 10$**
   (b) Points **$(0, 10), (2, 20), (4, 30)$**. Check: $5(2) + 10 = 20$ ✅. Since time $x$ cannot be negative, start the graph at $(0, 10)$. Scale: $x$-axis $1\text{ cm} = 1\text{ minute}$, $y$-axis $1\text{ cm} = 5\text{ litres}$.
   (c) At $x = 4$, **$y = 30\text{ litres}$**. Check: $5(4) + 10 = 30$ ✅
   (d) $y = 35$: $5x + 10 = 35 \implies 5x = 25 \implies \mathbf{x = 5\text{ minutes}}$. Check: $5(5) + 10 = 35$ ✅

---

Drawing graphs can feel a little tedious at first, yet once you get the hang of it, it quickly becomes one of the most satisfying parts of algebra. Just remember: **three points, one ruler, and a quick check.** You have got this!

---

## Chapter Wrap-up: Linear Equations in Two Variables

| Topic | What We Covered |
|---|---|
| **Topic 1:** Introduction, Linear Equations in Two Variables, and Solutions | Moving from one variable to two variables. Standard form **$ax + by + c = 0$** ($a$ and $b$ not both zero). Translating word problems into equations. Solutions as **ordered pairs $(x, y)$**. Checking whether a pair is a solution. Finding solutions using a table. **Infinitely many solutions**. Quick solutions with $x = 0$ and $y = 0$. Finding $k$ from a given solution. |
| **Topic 2:** Graph of a Linear Equation | The Cartesian plane, quadrants, and plotting points. Every graph is a **straight line**. Every solution is a point on the line, and every point on the line is a solution. **3-point method.** Finding where the line cuts the axes ($y = 0$, $x = 0$). Vertical lines **$x = a$** and horizontal lines **$y = b$**. Lines with **$c = 0$** passing through the origin. Reading values from a graph. Real-life linear graphs. |

**Looking ahead:** When you draw two different lines on the same graph, they usually cross at one single point. That intersection point is the **common solution to both equations** — which you will explore in depth in **Simultaneous Linear Equations**!
