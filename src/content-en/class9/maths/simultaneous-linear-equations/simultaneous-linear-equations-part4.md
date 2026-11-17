# Chapter: Simultaneous Linear Equations (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [simultaneous-linear-equations-part3.md](simultaneous-linear-equations-part3.md)** (and the chapter starts in [simultaneous-linear-equations.md](simultaneous-linear-equations.md)). In the previous topics, we solved systems algebraically using substitution, elimination, and cross-multiplication.
> **Helpful background (optional):** [Graph of a Linear Equation](../linear-equations-in-two-variables/linear-equations-in-two-variables-part2.md) (3-point tables and straight lines) and [Coordinate Geometry](../coordinate-geometry/coordinate-geometry.md) (plotting points).
> **Topics covered in this file:**
> 4. Graphical Solution and Number of Solutions

---

# Topic 4: Graphical Solution and Number of Solutions

In the first three topics, we solved simultaneous equations purely through **algebra**: substitution, elimination, and cross-multiplication. Each time, the answer was a single ordered pair $(x, y)$. Yet in Topic 3, we ran into a curious puzzle: for pairs like $2x + 3y = 5$ and $4x + 6y = 10$, we got $a_1 b_2 - a_2 b_1 = 0$, making the denominator zero so the formula could not run. We called that a **special case**.

Now let us answer two big questions: what *is* that special case? And is there a way to **tell before solving** whether a system has a solution—and if so, how many? In this topic, we will learn to **see** systems of equations on a graph, and that visual picture will immediately explain what a zero denominator truly means.

---

## Maya and Leo's Delivery Routes

Imagine a city whose streets form a neat square grid. From the central warehouse at the origin $(0, 0)$, the first coordinate $x$ tells you how many kilometres **east** you have travelled, and the second coordinate $y$ tells you how many kilometres **north**.

Two bike couriers, **Maya** and **Leo**, each ride along one straight avenue:

- Every intersection along Maya's avenue follows the rule **$x + y = 5$** (such as $(1, 4)$ or $(5, 0)$).
- Every intersection along Leo's avenue follows the rule **$x - y = 1$** (such as $(1, 0)$ or $(4, 3)$).

A customer sends a message: *"Meet at the one intersection where **both** of your routes pass, so Maya can hand off my sandwich and Leo can hand off my iced coffee together."* That means finding a point that lies on **both avenues**. On the city map, those two straight streets cross at a single intersection—and that intersection is the customer's location!

This is the exact same simultaneous-equations problem: finding a pair $(x, y)$ that makes **both equations true at once**. Earlier we found it by algebra; today we will **see it directly on a map**.

This raises an even deeper question: do two straight avenues *always* cross somewhere? What if Maya's and Leo's streets ran **side by side without ever meeting**? Or what if they rode along the **exact same street**? Those questions lie at the heart of this topic.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Graphical method** | Plotting both equations as straight lines and reading their point of intersection | The lines $x + y = 5$ and $x - y = 1$ meet at $(3, 2)$ |
| **Intersecting lines** | Two lines that cross at exactly one point | Maya's and Leo's avenues |
| **Parallel lines** | Two lines that stay the same distance apart and never meet | $x + y = 3$ and $x + y = 5$ |
| **Coincident lines** | Two lines that lie completely on top of each other (the exact same line) | $2x + y = 6$ and $4x + 2y = 12$ |
| **Consistent** | A system that has at least one solution (the equations agree) | Intersecting or coincident lines |
| **Inconsistent** | A system with no solution at all (the equations contradict each other) | Parallel lines |
| **Dependent** | A system where one equation is simply a multiple of the other (both say the same thing) | $2x + y = 6$ and $4x + 2y = 12$ |
| **Ratio test** | Comparing coefficient ratios to predict the number of solutions without solving | Comparing $\frac{a_1}{a_2}$ and $\frac{b_1}{b_2}$ |

---

## Part A: The Graphical Method

The graphical method follows four clear steps:

1. Build a **3-point table** for the **first equation**.
2. Build a **3-point table** for the **second equation**.
3. Plot all points on the coordinate plane and draw the straight line for each equation.
4. Read the coordinates of the **intersection point**, then **substitute it into both equations to verify**.

**Why three points instead of two?** Two points are enough to draw a straight line, yet if you make an arithmetic slip in one point, you will draw a tilted wrong line without noticing. When all **three points line up straight**, you know your arithmetic is right; if the third point sits off the line, you catch the error immediately.

### Graph 1: $x + y = 5$ and $x - y = 1$

**Maya's route: $x + y = 5$**, so $y = 5 - x$:

| $x$ | $1$ | $3$ | $5$ |
|---|---|---|---|
| $y = 5 - x$ | $4$ | $2$ | $0$ |

Check each point: $1 + 4 = 5$ ✅, $3 + 2 = 5$ ✅, $5 + 0 = 5$ ✅.

**Leo's route: $x - y = 1$**, so $y = x - 1$:

| $x$ | $1$ | $3$ | $5$ |
|---|---|---|---|
| $y = x - 1$ | $0$ | $2$ | $4$ |

Check each point: $1 - 0 = 1$ ✅, $3 - 2 = 1$ ✅, $5 - 4 = 1$ ✅.

Now let us plot both lines. **A** = Maya's line, **B** = Leo's line, **X** = where they cross. Each column represents an $x$-value ($0, 1, 2, \dots$), and each row represents a $y$-value.

```
  y
  6  |  .  .  .  .  .  . 
  5  A  .  .  .  .  .  B 
  4  |  A  .  .  .  B  . 
  3  |  .  A  .  B  .  . 
  2  |  .  .  X  .  .  . 
  1  |  .  B  .  A  .  . 
  0  O  B  -  -  -  A  - 
     0  1  2  3  4  5  6   x
```

Both lines cross at $(3, 2)$. Notice that $(3, 2)$ even appears in both tables!

**Solution: $x = 3, y = 2$**

**Check:**
- $x + y = 3 + 2 = 5$ ✅
- $x - y = 3 - 2 = 1$ ✅

Both equations hold true, so the customer's intersection is **$(3, 2)$**.

### Graph 2: $2x + y = 7$ and $x - y = -1$

**First line: $2x + y = 7$**, so $y = 7 - 2x$:

| $x$ | $1$ | $2$ | $3$ |
|---|---|---|---|
| $y = 7 - 2x$ | $5$ | $3$ | $1$ |

Check: $2(1) + 5 = 7$ ✅, $2(2) + 3 = 7$ ✅, $2(3) + 1 = 7$ ✅.

**Second line: $x - y = -1$**, so $y = x + 1$:

| $x$ | $0$ | $2$ | $4$ |
|---|---|---|---|
| $y = x + 1$ | $1$ | $3$ | $5$ |

Check: $0 - 1 = -1$ ✅, $2 - 3 = -1$ ✅, $4 - 5 = -1$ ✅.

```
  y
  7  A  .  .  .  .  .  B 
  6  |  .  .  .  .  B  . 
  5  |  A  .  .  B  .  . 
  4  |  .  .  B  .  .  . 
  3  |  .  X  .  .  .  . 
  2  |  B  .  .  .  .  . 
  1  B  .  .  A  .  .  . 
  0  O  -  -  -  -  -  - 
     0  1  2  3  4  5  6   x
```

The point **X** sits in the column $x = 2$ and row $y = 3$, which is $(2, 3)$—common to both tables.

**Solution: $x = 2, y = 3$**

**Check:**
- $2x + y = 2(2) + 3 = 4 + 3 = 7$ ✅
- $x - y = 2 - 3 = -1$ ✅

### Graph 3: $x + y = 1$ and $2x - y = -4$ (With Negative Numbers)

Sometimes the intersection lies in another quadrant involving negative coordinates. Let us see an example.

**First line: $x + y = 1$**, so $y = 1 - x$:

| $x$ | $-1$ | $0$ | $2$ |
|---|---|---|---|
| $y = 1 - x$ | $2$ | $1$ | $-1$ |

Check: $-1 + 2 = 1$ ✅, $0 + 1 = 1$ ✅, $2 + (-1) = 1$ ✅.

**Second line: $2x - y = -4$**, so $y = 2x + 4$:

| $x$ | $-2$ | $-1$ | $0$ |
|---|---|---|---|
| $y = 2x + 4$ | $0$ | $2$ | $4$ |

Check: $2(-2) - 0 = -4$ ✅, $2(-1) - 2 = -4$ ✅, $2(0) - 4 = -4$ ✅.

```
  y
  5  .  .  .  |  .  .  . 
  4  A  .  .  B  .  .  . 
  3  .  A  .  |  .  .  . 
  2  .  .  X  |  .  .  . 
  1  .  .  .  A  .  .  . 
  0  -  B  -  O  A  -  - 
 -1  .  .  .  |  .  A  . 
 -2  B  .  .  |  .  .  A 
    -3 -2 -1  0  1  2  3   x
```

The two lines cross at $(-1, 2)$ (in the second quadrant, where $x$ is negative and $y$ is positive).

**Solution: $x = -1, y = 2$**

**Check:**
- $x + y = -1 + 2 = 1$ ✅
- $2x - y = 2(-1) - 2 = -2 - 2 = -4$ ✅

**Important habit:** A point read off a graph counts as the solution only after it **satisfies both equations**. Always verify by substitution, no matter how crisp the drawing looks.

---

## Part B: Three Possibilities (One Solution, No Solution, Infinitely Many Solutions)

In how many different ways can two straight lines sit on a flat plane? Only **three**:

1. They can **cross** at one single point.
2. They can **never meet** (staying parallel at a constant gap).
3. They can **lie completely on top of one another** (coincide).

These three geometric possibilities match the exact three possibilities for the number of solutions. Let us inspect one example of each.

### 1. Intersecting Lines: Exactly One Solution (Consistent)

Example: **$x + y = 4$** and **$x - y = 2$**.

| $x$ | $0$ | $2$ | $4$ |
|---|---|---|---|
| $y = 4 - x$ | $4$ | $2$ | $0$ |

| $x$ | $2$ | $3$ | $4$ |
|---|---|---|---|
| $y = x - 2$ | $0$ | $1$ | $2$ |

```
  y
  5  |  .  .  .  .  . 
  4  A  .  .  .  .  . 
  3  |  A  .  .  .  B 
  2  |  .  A  .  B  . 
  1  |  .  .  X  .  . 
  0  O  -  B  -  A  - 
     0  1  2  3  4  5   x
```

Read the plot carefully. Line A passes through $(0, 4), (1, 3), (2, 2), (3, 1), (4, 0)$, and line B passes through $(2, 0), (3, 1), (4, 2), (5, 3)$. Their only shared point is **$(3, 1)$**, marked **X**.

**Solution: $x = 3, y = 1$.** Check: $3 + 1 = 4$ ✅ and $3 - 1 = 2$ ✅.

Two distinct straight lines can intersect at **at most one point** (never two!). Therefore, intersecting lines always give **one unique solution**.

### 2. Parallel Lines: No Solution (Inconsistent)

Example: **$x + y = 3$** and **$x + y = 5$**.

| $x$ | $0$ | $1$ | $3$ |
|---|---|---|---|
| $y = 3 - x$ | $3$ | $2$ | $0$ |

| $x$ | $0$ | $2$ | $5$ |
|---|---|---|---|
| $y = 5 - x$ | $5$ | $3$ | $0$ |

```
  y
  5  B  .  .  .  .  . 
  4  |  B  .  .  .  . 
  3  A  .  B  .  .  . 
  2  |  A  .  B  .  . 
  1  |  .  A  .  B  . 
  0  O  -  -  A  -  B 
     0  1  2  3  4  5   x
```

Both lines tilt at the exact same angle and stay the same distance apart—they **never meet**. With no common point, there is **no solution**.

Algebra confirms this instantly: no pair $(x, y)$ can ever have a sum $x + y$ equal to **both $3$ and $5$** at the same time! The two statements contradict each other.

That is why such a system is called **inconsistent**.

### 3. Coincident Lines: Infinitely Many Solutions (Consistent and Dependent)

Example: **$2x + y = 6$** and **$4x + 2y = 12$**.

| $x$ | $0$ | $1$ | $3$ |
|---|---|---|---|
| $y = 6 - 2x$ | $6$ | $4$ | $0$ |

Now build a table for the second equation:

| $x$ | $0$ | $1$ | $3$ |
|---|---|---|---|
| $y = \dfrac{12 - 4x}{2}$ | $6$ | $4$ | $0$ |

The exact same table! Look closely: the second equation is just **twice** the first equation—dividing $4x + 2y = 12$ by $2$ gives $2x + y = 6$.

```
  y
  6  C  .  .  .  . 
  5  |  .  .  .  . 
  4  |  C  .  .  . 
  3  |  .  .  .  . 
  2  |  .  C  .  . 
  1  |  .  .  .  . 
  0  O  -  -  C  - 
     0  1  2  3  4   x
```

Here **C** shows that both lines occupy the exact same points: there are not really two different lines, just **one line written in two ways**. Every single point along that line satisfies both equations, giving **infinitely many solutions**.

**Check** using other points on the line:
- $(2, 2)$: $2(2) + 2 = 6$ ✅ and $4(2) + 2(2) = 12$ ✅
- $(1.5, 3)$: $2(1.5) + 3 = 6$ ✅ and $4(1.5) + 2(3) = 6 + 6 = 12$ ✅

Completely different points, yet every one satisfies both equations.

### What "Consistent," "Inconsistent," and "Dependent" Really Mean

These terms sound formal, yet they correspond directly to everyday English:

| Term | Everyday meaning | Meaning for equations |
|---|---|---|
| **Consistent** | Agreeing without contradiction; both statements can hold together | Has at least one solution (one or infinitely many) |
| **Inconsistent** | Contradictory; cannot both be true at the same time | Has no solution |
| **Dependent** | Relying on the other; not independent | One equation is just a scaled copy of the other |

Think of two friends making plans: saying *"Let's meet at 3 p.m."* and *"Let's meet at 5 p.m."* for the same appointment is a contradiction (**inconsistent**). Saying *"Let's meet at 3 p.m."* and *"Let's meet at three in the afternoon"* is the exact same statement phrased twice (**dependent**).

### Summary of the Three Cases

| Lines | Number of solutions | Classification |
|---|---|---|
| Intersecting | Exactly **one** | Consistent |
| Parallel | **None** | Inconsistent |
| Coincident | **Infinitely many** | Consistent and dependent |

**Take note:** A system of two linear equations can *never* have exactly two or three solutions. Two straight lines either cross once, never cross, or overlap completely.

---

## Part C: The Ratio Test (A Quick Shortcut)

> **This is a handy shortcut.** Graphing and algebra are the main tools; the ratio test simply lets you predict what kind of solution to expect *before* solving.

First, write both equations in **standard form** (all terms on the left, $0$ on the right):

$$\begin{aligned}
a_1 x + b_1 y + c_1 &= 0 \\
a_2 x + b_2 y + c_2 &= 0
\end{aligned}$$

Then compare the three ratios: **$\dfrac{a_1}{a_2}$**, **$\dfrac{b_1}{b_2}$**, and **$\dfrac{c_1}{c_2}$** *(assuming non-zero denominators)*.

| Ratio condition | Lines | Number of solutions |
|---|---|---|
| $\dfrac{a_1}{a_2} \neq \dfrac{b_1}{b_2}$ | Intersecting | **Exactly one** (consistent) |
| $\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2} \neq \dfrac{c_1}{c_2}$ | Parallel | **None** (inconsistent) |
| $\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2} = \dfrac{c_1}{c_2}$ | Coincident | **Infinitely many** (dependent) |

**Memory trick:** Check the $x$ and $y$ ratios first. If they differ, stop immediately—there is one unique solution. If they are equal, check whether the constant ratio matches them or breaks away.

### Why Does It Work?

The $x$ and $y$ coefficients determine each line's **slope (tilt)**. When $\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2}$, both lines have the exact same tilt—so they are either parallel or identical. The constant ratio $\dfrac{c_1}{c_2}$ then tells us whether they lie in the same position (all three ratios equal, coincident) or are shifted apart (constant ratio differs, parallel).

### Link Back to Topic 3: What a Zero Denominator Means

In Topic 3, the special case occurred when $a_1 b_2 - a_2 b_1 = 0$. Rewriting that condition gives $a_1 b_2 = a_2 b_1$, or (dividing by $a_2 b_2$):

$$\mathbf{\frac{a_1}{a_2} = \frac{b_1}{b_2}}$$

That is the *exact* boundary where the unique-solution condition fails! In plain terms:
- Whenever $a_1 b_2 - a_2 b_1 \neq 0$, the lines intersect at **one point**, so Topic 3's formula works.
- Whenever $a_1 b_2 - a_2 b_1 = 0$, the lines are **parallel or coincident** (either no solution or infinitely many), which is why trying to compute a single $(x, y)$ with the formula could never work.

That solves the zero-denominator mystery from Topic 3 completely!

### Example 1: Applying the Ratio Test

(a) **$x + y = 5$** and **$x - y = 1$** (Maya and Leo).

Standard form: $x + y - 5 = 0$ and $x - y - 1 = 0$.
Here $a_1 = 1, b_1 = 1, c_1 = -5$ and $a_2 = 1, b_2 = -1, c_2 = -1$.
- $\dfrac{a_1}{a_2} = \dfrac{1}{1} = 1$
- $\dfrac{b_1}{b_2} = \dfrac{1}{-1} = -1$

Since $1 \neq -1$, there is **exactly one solution**—matching Graph 1 at $(3, 2)$.

(b) **$x + y = 3$** and **$2x + 2y = 10$**, i.e., $x + y - 3 = 0$ and $2x + 2y - 10 = 0$.
- $\dfrac{a_1}{a_2} = \dfrac{1}{2}$
- $\dfrac{b_1}{b_2} = \dfrac{1}{2}$
- $\dfrac{c_1}{c_2} = \dfrac{-3}{-10} = \dfrac{3}{10}$

The first two ratios match ($\frac{1}{2}$), while the third differs ($\frac{3}{10} \neq \frac{1}{2}$). Therefore, **no solution**. Check: dividing $2x + 2y = 10$ by $2$ gives $x + y = 5$, which cannot simultaneously equal $x + y = 3$ ✅.

(c) **$2x + y = 6$** and **$4x + 2y = 12$**, i.e., $2x + y - 6 = 0$ and $4x + 2y - 12 = 0$.
- $\dfrac{a_1}{a_2} = \dfrac{2}{4} = \dfrac{1}{2}$
- $\dfrac{b_1}{b_2} = \dfrac{1}{2}$
- $\dfrac{c_1}{c_2} = \dfrac{-6}{-12} = \dfrac{1}{2}$

All three ratios equal $\frac{1}{2}$, so there are **infinitely many solutions**. Check: $4x + 2y = 12$ is exactly double $2x + y = 6$ ✅.

### Example 2: Finding $k$ for No Solution

Find the value of $k$ for which **$3x + 2y = 5$** and **$6x + ky = 12$** have no solution.

Standard form: $3x + 2y - 5 = 0$ and $6x + ky - 12 = 0$.

For no solution, we need $\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2} \neq \dfrac{c_1}{c_2}$:
- $\dfrac{a_1}{a_2} = \dfrac{3}{6} = \dfrac{1}{2}$
- $\dfrac{b_1}{b_2} = \dfrac{2}{k}$

Set the first two equal: $\dfrac{2}{k} = \dfrac{1}{2} \implies \mathbf{k = 4}$.

Now check the $c$ ratio: $\dfrac{c_1}{c_2} = \dfrac{-5}{-12} = \dfrac{5}{12} \neq \dfrac{1}{2}$ ✅. So the condition holds.

**$k = 4$**

**Check:** At $k = 4$, the equations are $3x + 2y = 5$ and $6x + 4y = 12$. Dividing the second by $2$ gives $3x + 2y = 6$. The expression $3x + 2y$ cannot equal both $5$ and $6$ at once, so there is indeed no solution ✅.

### Example 3: Finding $k$ for Infinitely Many Solutions

Find $k$ so that **$2x + 3y = 7$** and **$(k - 1)x + (k + 2)y = 3k$** have infinitely many solutions.

Standard form: $2x + 3y - 7 = 0$ and $(k - 1)x + (k + 2)y - 3k = 0$.

For infinitely many solutions, all three ratios must be equal:

$$\frac{2}{k - 1} = \frac{3}{k + 2} = \frac{7}{3k}$$

**Equate the first two ratios:**
$$\frac{2}{k - 1} = \frac{3}{k + 2} \implies 2(k + 2) = 3(k - 1) \implies 2k + 4 = 3k - 3 \implies k = 7$$

**Equate the first and third ratios** (to confirm consistency):
$$\frac{2}{k - 1} = \frac{7}{3k} \implies 6k = 7(k - 1) \implies 6k = 7k - 7 \implies k = 7$$

Both pairs agree on **$k = 7$**.

**Check:** At $k = 7$, the second equation becomes $(7 - 1)x + (7 + 2)y = 3(7)$, i.e., **$6x + 9y = 21$**, which is precisely **$3$ times** $2x + 3y = 7$ ($2 \times 3 = 6$, $3 \times 3 = 9$, $7 \times 3 = 21$) ✅. Every ratio equals $\frac{1}{3}$, giving infinitely many solutions.

### Example 4: A Subtle Trap (Always Check the $c$ Ratio)

Consider **$kx + 2y = 5$** and **$6x + 4y = 8$**. Is there any value of $k$ that produces infinitely many solutions? And when does it have no solution?

Standard form: $kx + 2y - 5 = 0$ and $6x + 4y - 8 = 0$.

Matching the first two ratios gives $\dfrac{k}{6} = \dfrac{2}{4} = \dfrac{1}{2}$, so $k = 3$.

Now check the $c$ ratio: $\dfrac{-5}{-8} = \dfrac{5}{8} \neq \dfrac{1}{2}$ (since $\frac{5}{8} \neq \frac{4}{8}$).

So at $k = 3$, the ratios satisfy $\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2} \neq \dfrac{c_1}{c_2}$—meaning **no solution**! No value of $k$ can ever produce infinitely many solutions for this pair.

**Check:** At $k = 3$, we have $3x + 2y = 5$ and $6x + 4y = 8$ (or $3x + 2y = 4$), which contradict each other ✅.

**Lesson:** Equal $a$ and $b$ ratios only narrow things down to "parallel or coincident." The **$c$ ratio** decides which one it actually is, so never skip checking it!

**What about other values of $k$?** For any $k \neq 3$, the $a$ and $b$ ratios differ, so the lines intersect and the system has **exactly one solution**.

---

## Part D: The Limitation of Graphs

Graphs are wonderful for building intuition, yet they have one clear weakness: when the true solution involves **fractions or decimals**, a hand-drawn graph only gives an **approximation**, not an exact answer.

### Example 5: $2x + y = 4$ and $x + 3y = 5$

**First line: $2x + y = 4$**

| $x$ | $0$ | $1$ | $2$ |
|---|---|---|---|
| $y = 4 - 2x$ | $4$ | $2$ | $0$ |

Check: $0 + 4 = 4$ ✅, $2 + 2 = 4$ ✅, $4 + 0 = 4$ ✅.

**Second line: $x + 3y = 5$**

| $x$ | $-1$ | $2$ | $5$ |
|---|---|---|---|
| $y = \dfrac{5 - x}{3}$ | $2$ | $1$ | $0$ |

Check: $-1 + 6 = 5$ ✅, $2 + 3 = 5$ ✅, $5 + 0 = 5$ ✅.

On graph paper, these two lines cross somewhere between $x = 1$ and $x = 2$, roughly around $x \approx 1.4$ and $y \approx 1.2$. However, you can never be certain from a pencil sketch alone that the crossing is *exactly* $1.4$ rather than $1.38$ or $1.42$: pencil thickness and small ruler shifts limit precision.

Algebraically (using Topic 1 or 2), we find the exact values: **$x = \dfrac{7}{5} = 1.4$ and $y = \dfrac{6}{5} = 1.2$**.

**Check:**
- $2x + y = 2(1.4) + 1.2 = 2.8 + 1.2 = 4$ ✅
- $x + 3y = 1.4 + 3(1.2) = 1.4 + 3.6 = 5$ ✅

This shows the true role of graphs: **visualising and estimating** (how many solutions exist and roughly where they sit). For exact answers—especially fractional ones—algebraic methods are superior, while graphs shine when solutions are clean integers like $(3, 2)$.

**Best workflow:** Use the ratio test first to see if a unique solution exists, optionally sketch to estimate where it lies, then compute the exact answer algebraically and verify in both equations.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Plotting $x$ and $y$ in reverse order.**
   The point $(3, 2)$ means $x = 3$ ($3$ units right) and $y = 2$ ($2$ units up). Plotting $(2, 3)$ lands at a completely different intersection—notice Graph 1 had solution $(3, 2)$ while Graph 2 had $(2, 3)$. Always keep the order **$(x, y)$**.

2. **Mistake 2: Plotting only two points per line.**
   If both points are correct, the line is correct; if one point has an arithmetic slip, your line is wrong and you will never spot it. For $x - y = 1$, mistakenly plotting $(1, 0)$ and $(3, 3)$ still draws a straight line—just the wrong one! Plotting a **third point** $(5, 4)$ immediately reveals that the three points do not line up, catching the error.

3. **Mistake 3: Confusing parallel and coincident lines.**
   Both cases have $\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2}$; the **$c$ ratio** separates them:
   - $x + y = 3$ and $2x + 2y = 6$: all three ratios equal $\frac{1}{2}$ $\implies$ **coincident** (infinitely many solutions).
   - $x + y = 3$ and $2x + 2y = 10$: $c$ ratio is $\frac{3}{10} \neq \frac{1}{2}$ $\implies$ **parallel** (no solution).
   Changing a single constant flips the outcome completely.

4. **Mistake 4: Sign errors in the ratio test.**
   Move all terms to one side *before* reading $a, b, c$ with their signs.
   Take $3x - 2y = 4$ and $6x - 4y = 8$. Standard form: $3x - 2y - 4 = 0$ and $6x - 4y - 8 = 0$.
   - Right: $\dfrac{b_1}{b_2} = \dfrac{-2}{-4} = \dfrac{1}{2}$ and $\dfrac{c_1}{c_2} = \dfrac{-4}{-8} = \dfrac{1}{2}$. All three equal $\frac{1}{2}$ $\implies$ **infinitely many solutions**.
   - Wrong (dropping a sign): taking $b_1 = 2$ and $b_2 = -4$ gives $-\frac{1}{2} \neq \frac{1}{2}$, falsely predicting "one solution." Or taking $c_1 = -4$ and $c_2 = +8$ gives $-\frac{1}{2}$, falsely predicting "no solution."
   Also remember that in $x - y = 1$, **$b = -1$** (not $1$) and **$c = -1$**.

5. **Mistake 5: Forgetting to check the $c$ ratio in "$k$" problems.**
   As Example 4 showed, setting $\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2}$ gave $k = 3$, yet the $c$ ratio did not match—so $k = 3$ gave **no solution**, not infinitely many. Always check all three ratios.

6. **Mistake 6: Accepting a point read from a graph without checking it.**
   A point read visually from a graph could easily be off slightly. Always substitute it into **both** original equations to be sure.

---

## Quick Recap

- **Graphical method:** Make a 3-point table for each equation, plot both lines, read their intersection $(x, y)$, and verify in both equations.
- Plot **3 points** per line so the third point acts as a built-in error check.
- Two straight lines have only three possibilities: **intersecting** ($1$ solution), **parallel** ($0$ solutions), or **coincident** (infinitely many solutions).
- **Consistent** = has at least one solution ($1$ or $\infty$). **Inconsistent** = no solution. **Dependent** = one equation is a multiple of the other.
- **Ratio test (shortcut):** Rewrite in $ax + by + c = 0$ form first. $\frac{a_1}{a_2} \neq \frac{b_1}{b_2} \implies$ one solution; $\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2} \implies$ no solution; all three equal $\implies$ infinitely many solutions.
- Topic 3's zero denominator ($a_1 b_2 - a_2 b_1 = 0$) is the exact condition $\frac{a_1}{a_2} = \frac{b_1}{b_2}$ (parallel or coincident lines).
- **Limitation:** Graphs give only approximations when solutions are fractions or decimals; use algebra for exact answers.

---

## Practice Questions

1. Solve graphically: $x + y = 7$ and $x - y = 3$. Build a 3-point table for each line, sketch both lines, read off the intersection point, and verify it in both equations.

2. Solve graphically: $2x + y = 5$ and $x - y = 1$. Use three points for each line and verify your answer.

3. Without solving, determine whether each system has one solution, no solution, or infinitely many solutions. Show the ratios clearly.
   (a) $x + 2y = 4$ and $2x + 4y = 12$
   (b) $3x + 2y = 6$ and $6x + 4y = 12$
   (c) $x - 3y = 3$ and $2x + y = 7$

4. Find the value of $k$ for which the system $2x + 3y = 7$ and $4x + ky = 9$ has no solution. Verify your answer.

5. Find the value of $k$ for which the system $kx + 3y = 6$ and $4x + 6y = 12$ has infinitely many solutions. Verify your answer.

6. Is there any value of $k$ for which $2x - y = 3$ and $4x - 2y = k$ has exactly one solution? Explain.

7. A student examined the pair $3x - y = 2$ and $6x - 2y = 4$ and wrote: *"$\frac{a_1}{a_2} = \frac{3}{6} = \frac{1}{2}$, $\frac{b_1}{b_2} = \frac{1}{2}$, $\frac{c_1}{c_2} = \frac{2}{4} = \frac{1}{2}$, so infinitely many solutions."* Was the final answer correct? Was the working completely correct? Explain what the student needs to watch out for.

8. State whether each statement is True or False:
   (a) Two lines that intersect at exactly one point form a consistent system.
   (b) Parallel lines form a system with infinitely many solutions.
   (c) A system of two linear equations can have exactly two solutions.
   (d) If $\dfrac{a_1}{a_2} \neq \dfrac{b_1}{b_2}$, the system always has a unique solution.
   (e) A graph always gives the exact solution, even when the solution is a fraction.

### Answers

1. For $x + y = 7$, $y = 7 - x$:

   | $x$ | $3$ | $5$ | $7$ |
   |---|---|---|---|
   | $y$ | $4$ | $2$ | $0$ |

   Check: $3 + 4 = 7$, $5 + 2 = 7$, $7 + 0 = 7$ ✅

   For $x - y = 3$, $y = x - 3$:

   | $x$ | $3$ | $5$ | $7$ |
   |---|---|---|---|
   | $y$ | $0$ | $2$ | $4$ |

   Check: $3 - 0 = 3$, $5 - 2 = 3$, $7 - 4 = 3$ ✅

   Both tables share $(5, 2)$, so the lines cross at $(5, 2)$.
   **$x = 5, y = 2$.** Check: $5 + 2 = 7$ ✅ and $5 - 2 = 3$ ✅

2. For $2x + y = 5$, $y = 5 - 2x$:

   | $x$ | $1$ | $2$ | $3$ |
   |---|---|---|---|
   | $y$ | $3$ | $1$ | $-1$ |

   Check: $2 + 3 = 5$, $4 + 1 = 5$, $6 - 1 = 5$ ✅

   For $x - y = 1$, $y = x - 1$:

   | $x$ | $1$ | $2$ | $3$ |
   |---|---|---|---|
   | $y$ | $0$ | $1$ | $2$ |

   Check: $1 - 0 = 1$, $2 - 1 = 1$, $3 - 2 = 1$ ✅

   The shared point is **$(2, 1)$**. **$x = 2, y = 1$.**
   Check: $2(2) + 1 = 5$ ✅ and $2 - 1 = 1$ ✅

3. (a) $x + 2y - 4 = 0$ and $2x + 4y - 12 = 0$. $\frac{a_1}{a_2} = \frac{1}{2}$, $\frac{b_1}{b_2} = \frac{2}{4} = \frac{1}{2}$, $\frac{c_1}{c_2} = \frac{-4}{-12} = \frac{1}{3}$. Since $\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}$, **no solution**.
   (b) $3x + 2y - 6 = 0$ and $6x + 4y - 12 = 0$. $\frac{a_1}{a_2} = \frac{1}{2}$, $\frac{b_1}{b_2} = \frac{1}{2}$, $\frac{c_1}{c_2} = \frac{-6}{-12} = \frac{1}{2}$. All three equal, so **infinitely many solutions**.
   (c) $x - 3y - 3 = 0$ and $2x + y - 7 = 0$. $\frac{a_1}{a_2} = \frac{1}{2}$, $\frac{b_1}{b_2} = \frac{-3}{1} = -3$. Since $\frac{1}{2} \neq -3$, **exactly one solution**.
   Check (c): substituting $x = 3 + 3y$ into $2x + y = 7$ gives $6 + 6y + y = 7 \implies y = \frac{1}{7}, x = \frac{24}{7}$. Both equations hold: $\frac{24}{7} - \frac{3}{7} = 3$ ✅ and $\frac{48}{7} + \frac{1}{7} = 7$ ✅.
   Check (a): dividing $2x + 4y = 12$ by $2$ gives $x + 2y = 6$, contradicting $x + 2y = 4$ ✅.
   Check (b): the second equation is double the first ✅.

4. $2x + 3y - 7 = 0$ and $4x + ky - 9 = 0$. For no solution: $\frac{2}{4} = \frac{3}{k} \neq \frac{-7}{-9}$. Since $\frac{2}{4} = \frac{1}{2}$, we get $\frac{3}{k} = \frac{1}{2} \implies \mathbf{k = 6}$. And $\frac{7}{9} \neq \frac{1}{2}$ ✅.
   Check: at $k = 6$, we have $4x + 6y = 9$, while doubling the first equation gives $4x + 6y = 14$—impossible for both to hold, so no solution ✅.

5. $kx + 3y - 6 = 0$ and $4x + 6y - 12 = 0$. For infinitely many solutions: $\frac{k}{4} = \frac{3}{6} = \frac{-6}{-12}$. Since $\frac{3}{6} = \frac{1}{2}$ and $\frac{6}{12} = \frac{1}{2}$ already match, $\frac{k}{4} = \frac{1}{2} \implies \mathbf{k = 2}$.
   Check: at $k = 2$, $2x + 3y = 6$, and $4x + 6y = 12$ is exactly double it ✅.

6. Equations: $2x - y - 3 = 0$ and $4x - 2y - k = 0$. Here $\frac{a_1}{a_2} = \frac{2}{4} = \frac{1}{2}$ and $\frac{b_1}{b_2} = \frac{-1}{-2} = \frac{1}{2}$. **These two ratios are always equal**, regardless of $k$. Thus $\frac{a_1}{a_2} \neq \frac{b_1}{b_2}$ can never happen, so **no value of $k$ gives exactly one solution**. (When $k = 6$, there are infinitely many solutions; when $k \neq 6$, there is no solution.)
   Check: at $k = 6$, $4x - 2y = 6$ simplifies to $2x - y = 3$ ✅; at $k = 8$, $2x - y = 4$ contradicts $2x - y = 3$ ✅.

7. **The final answer is correct** (infinitely many solutions, as dividing $6x - 2y = 4$ by $2$ gives $3x - y = 2$). However, **the working has a flaw**: $\frac{b_1}{b_2}$ should be $\frac{-1}{-2} = \frac{1}{2}$, and in standard form $c_1 = -2, c_2 = -4$, so $\frac{c_1}{c_2} = \frac{-2}{-4} = \frac{1}{2}$. The student dropped the minus signs and only got lucky because both equations had matching signs. Always keep signs attached after converting to standard form, or another problem will give the wrong answer.

8. (a) **True** ✅. Meeting at one point means a solution exists, so the system is consistent.
   (b) **False** ❌. Parallel lines never intersect, so there is no solution (inconsistent).
   (c) **False** ❌. Two distinct straight lines cannot cross at more than one point; the possibilities are $0$, $1$, or infinitely many solutions.
   (d) **True** ✅. The lines are neither parallel nor coincident, so they must intersect at a single point.
   (e) **False** ❌. When the solution involves fractions, a hand-drawn graph only provides an estimate.

---

You can now look at any pair of linear equations and tell right away whether it has one solution, no solution, or infinitely many solutions—and see why on a graph. Together, you now have four solving tools: substitution, elimination, cross-multiplication, and graphing.

**What's next?** Occasionally, equations show up looking *non-linear*—for example $\dfrac{2}{x} + \dfrac{3}{y} = 13$, with $x$ and $y$ sitting in the denominators. In Topic 5, we will use a clever change of variables to transform such equations into ordinary linear systems and solve them with ease.
