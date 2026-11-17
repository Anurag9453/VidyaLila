# Chapter: Lines and Angles (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [lines-and-angles-part2.md](lines-and-angles-part2.md).** (Topic 1 is in [lines-and-angles.md](lines-and-angles.md).)
> **Topics covered in this file:**
> 3. Results on Parallel Lines: Parallel Lines, Transversal, Vertically Opposite Angles

---

# Topic 3: Results on Parallel Lines

In Topic 2, we used Sophia's pizza to explore how angles team up: complementary and supplementary angles, adjacent angles, and the all-important **linear pair** — when a ray stands on a straight line, the two adjacent angles sum to **$180^\circ$** (the Linear Pair Axiom and its converse), along with $180^\circ$ along a line and $360^\circ$ around a point.

In this topic, we put those tools to work. First, we see what happens when two straight lines cross each other. Next, we discover which angles become equal (or add up to $180^\circ$) when a straight line cuts across two **parallel** lines. Our $180^\circ$ linear pair rule will drive almost every proof along the way.

---

## The Railway Crossing Story

Near **Liam**'s town sits a busy railway crossing. Two steel rails run straight and true, staying the exact same distance apart — never meeting. A diagonal highway cuts straight across both tracks.

One afternoon, waiting at the barrier, Liam noticed something striking:
- Where the highway crosses the first rail, it forms a crisp corner angle.
- Where the highway crosses the second rail, it forms **the exact same corner angle**!

Liam wondered: *"Is that just a coincidence, or is it a mathematical rule?"*

It is a rock-solid rule, and in this topic we will uncover every piece of it:
- The parallel rails $=$ **parallel lines**
- The diagonal highway $=$ **transversal**
- The matching corners $=$ **corresponding angles**, **alternate angles**, and more

And first, picture a pair of **scissors** (which we saw back in Topic 1). Open the blades wide: the two metal blades cross at the pivot screw, and the top gap and bottom gap always match perfectly. That everyday symmetry comes from a theorem about **vertically opposite angles**.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Intersecting lines** | Two lines that cross each other at a single point | Blades of open scissors, the letter "X" |
| **Non-intersecting lines** | Lines in the same plane that never meet | Two straight railway rails |
| **Vertically opposite angles** | The pair of angles **directly across from each other** when two lines intersect | Top and bottom angles in an "X" |
| **Parallel lines** | Lines in the same plane that never intersect, no matter how far extended | Ruled lines on notebook paper |
| **Transversal** | A straight line that intersects two (or more) lines at **distinct points** | A diagonal road crossing two parallel rails |
| **Corresponding angles** | Angles sitting in the **same relative position** at each intersection along a transversal | Top-left angle at both crossings |
| **Alternate interior angles** | Interior angles lying **between** the two lines on **opposite sides** of the transversal | Corners inside a **"Z"** shape |
| **Co-interior angles** | Interior angles lying **between** the two lines on the **same side** of the transversal | Corners inside a **"C"** or **"U"** shape |

---

## Part A: Intersecting and Non-Intersecting Lines

For any two straight lines lying in the same flat plane (such as a drafting sheet), only two arrangements are possible:

1. **They intersect at one point** (intersecting lines), like an "X" or a "$+$".
2. **They never meet** (non-intersecting lines), which are called **parallel lines**.

```
   Intersecting                Non-intersecting (parallel)

      \     /                  ------------------------
        \ /                    
         X                     ------------------------
        / \
      /     \
```

In *Euclid's Geometry*, we proved that two distinct lines can share **at most one** common point ([Euclid's Geometry, Topic 4](../euclids-geometry/euclids-geometry-part4.md), the *"At Most One Common Point for Two Distinct Lines"* theorem). Therefore, two intersecting straight lines always meet at **exactly one** point.

---

## Part B: Vertically Opposite Angles

### What Are They?

When two straight lines cross at a point, they form **four angles**. Two angles that sit **directly across the intersection from each other** (sharing only the vertex, not a side) are called **vertically opposite angles**.

Below, line $AB$ and line $CD$ intersect at point $O$:

```
   A           D
     \       /
       \   /
         O
       /   \
     /       \
   C           B
```

Four angles are formed:
- Top: **$\angle AOD$**
- Bottom: **$\angle BOC$**
- Left: **$\angle AOC$**
- Right: **$\angle BOD$**

The two pairs of vertically opposite angles are:
- **$\angle AOD$ and $\angle BOC$** (top and bottom)
- **$\angle AOC$ and $\angle BOD$** (left and right)

Notice that *"vertically"* here does **not** mean "up-and-down"! It comes from *vertex* — angles sitting directly opposite each other across the vertex $O$. So the left–right pair is just as vertically opposite as the top–bottom pair.

### Vertically Opposite Angles Theorem: Vertically Opposite Angles Are Equal

Let us prove our scissors observation formally using the Given / To prove / Proof table format we learned in [Euclid's Geometry, Topic 4](../euclids-geometry/euclids-geometry-part4.md).

**Given:** Lines $AB$ and $CD$ intersect at point $O$.

**To prove:** (i) $\angle AOC = \angle BOD$ $\quad$ (ii) $\angle AOD = \angle BOC$

**Proof:**

| Statement | Reason |
|---|---|
| $1.$ Ray $\overrightarrow{OA}$ stands on line $CD$, so $\angle AOC + \angle AOD = 180^\circ$ | Linear Pair Axiom (Topic 2) |
| $2.$ Ray $\overrightarrow{OD}$ stands on line $AB$, so $\angle AOD + \angle BOD = 180^\circ$ | Linear Pair Axiom |
| $3.$ $\angle AOC + \angle AOD = \angle AOD + \angle BOD$ | From Steps $1$ and $2$ (things equal to the same thing are equal) |
| $4.$ $\angle AOC = \angle BOD$ | Subtract $\angle AOD$ from both sides (equals subtracted from equals leave equals) |

By the exact same steps — taking ray $\overrightarrow{OA}$ on $CD$ and ray $\overrightarrow{OC}$ on $AB$ — we also prove **$\angle AOD = \angle BOC$**.

**Hence proved.**

Look how clean that is: all it took was Topic 2's Linear Pair Axiom and two of Euclid's axioms!

### Solved Examples

**Example 1:** Two straight lines intersect, and one of the angles formed is $40^\circ$. Find the other three angles.

- Opposite angle: **$40^\circ$** (vertically opposite)
- Adjacent angle: $180^\circ - 40^\circ = \mathbf{140^\circ}$ (linear pair)
- Opposite to that one: **$140^\circ$** (vertically opposite)

Check: $40^\circ + 140^\circ + 40^\circ + 140^\circ = 360^\circ$ ✅ (sum of angles around a point, Topic 2)

**Example 2:** Lines $AB$ and $CD$ intersect at $O$. $\angle AOC = (2x + 10)^\circ$ and $\angle BOD = (3x - 20)^\circ$. Find $x$ and all four angles.

$\angle AOC$ and $\angle BOD$ are vertically opposite, so they are equal:
$$2x + 10 = 3x - 20 \implies \mathbf{x = 30}$$

$\angle AOC = 2(30) + 10 = \mathbf{70^\circ}$, $\angle BOD = 3(30) - 20 = \mathbf{70^\circ}$.
$\angle AOD = \angle BOC = 180^\circ - 70^\circ = \mathbf{110^\circ}$.

**Example 3:** Two intersecting lines form adjacent angles $x$ and $3x$. Find all four angles.

Here, adjacent angles along a line form a linear pair:
$$x + 3x = 180^\circ \implies 4x = 180^\circ \implies \mathbf{x = 45^\circ}$$

The four angles are: **$45^\circ, 135^\circ, 45^\circ, 135^\circ$**.

---

## Part C: Parallel Lines (A Quick Recap)

We met parallel lines in [Euclid's Geometry, Topic 2](../euclids-geometry/euclids-geometry-part2.md): **two lines in the same plane that never intersect, no matter how far extended.**

Everyday examples:
- Straight railway rails
- Ruled lines on notebook paper
- The two long side rails of a ladder
- White stripes of a pedestrian crosswalk
- Opposite vertical edges of a doorframe

Notation: if line $l$ is parallel to line $m$, we write **$l \parallel m$**.

---

## Part D: A Transversal and Its 8 Angles

### What Is a Transversal?

A straight line that intersects two (or more) given lines at **distinct points** is called a **transversal**. The diagonal road crossing the two railway rails in Liam's town is a transversal.

### The 8 Angles

Below, transversal $t$ cuts lines $l$ and $m$ at points $P$ and $Q$. Each intersection creates $4$ angles, making **$8$ angles** in total:

```
           t
            \
        1    \    2
l  -----------P-----------
        4      \    3
                \
                 \
        5         \    6
m  ----------------Q-----------
        8           \    7
                     \
```

**Reading each angle by position:**

| Intersection | Top-Left | Top-Right | Bottom-Right | Bottom-Left |
|---|---|---|---|---|
| $P$ (on line $l$) | $\angle 1$ | $\angle 2$ | $\angle 3$ | $\angle 4$ |
| $Q$ (on line $m$) | $\angle 5$ | $\angle 6$ | $\angle 7$ | $\angle 8$ |

**Interior and Exterior angles:**
- **Interior angles** (trapped **between** the two lines): $\angle 3, \angle 4, \angle 5, \angle 6$
- **Exterior angles** (**outside** the two lines): $\angle 1, \angle 2, \angle 7, \angle 8$

### Names of Angle Pairs

| Pair Name | Meaning | Pairs in Diagram | Letter Trick |
|---|---|---|---|
| **Corresponding angles** | Sitting in the **same relative corner** at $P$ and $Q$ | $\angle 1$ & $\angle 5$, $\angle 2$ & $\angle 6$, $\angle 3$ & $\angle 7$, $\angle 4$ & $\angle 8$ | **F** shape |
| **Alternate interior angles** | Between the lines, on **opposite sides** of $t$ | $\angle 3$ & $\angle 5$, $\angle 4$ & $\angle 6$ | **Z** shape |
| **Alternate exterior angles** | Outside the lines, on **opposite sides** of $t$ | $\angle 1$ & $\angle 7$, $\angle 2$ & $\angle 8$ | (outer Z) |
| **Co-interior angles** *(interior angles on the same side)* | Between the lines, on the **same side** of $t$ | $\angle 4$ & $\angle 5$, $\angle 3$ & $\angle 6$ | **C** or **U** shape |

### Mastering the Shape Tricks

**F shape (Corresponding):** Trace a capital **"F"** where the vertical stem is transversal $t$ and the two horizontal bars lie on $l$ and $m$. The angles tucked under (or above) the two horizontal bars in matching corners are corresponding — like $\angle 1$ and $\angle 5$, both sitting **top-left**.

**Z shape (Alternate interior):** Trace a **"Z"** using $l$ and $m$ as the top and bottom bars and $t$ as the diagonal stroke. The two inner corners of the Z are alternate interior angles — like $\angle 3$ (bottom-right at $P$) and $\angle 5$ (top-left at $Q$).

**C / U shape (Co-interior):** Trace a **"C"** using $l$, $m$, and the segment of $t$ between them. The two angles trapped inside the C are co-interior — like $\angle 4$ and $\angle 5$, both **between** $l$ and $m$ and both on the **left** of $t$.

---

## Part E: Rules for Parallel Lines (Axioms and Theorems)

Now back to Liam's question: whenever **$l \parallel m$**, which angles become equal?

### Corresponding Angles Axiom

> **If a transversal intersects two parallel lines, then each pair of corresponding angles is equal.**

That is, when $l \parallel m$: $\angle 1 = \angle 5$, $\angle 2 = \angle 6$, $\angle 3 = \angle 7$, and $\angle 4 = \angle 8$.

We accept this as an **axiom** (without proof). Physically, because both rails point in the exact same direction, the diagonal road meets both rails at the exact same slant.

### Converse of the Corresponding Angles Axiom

> **If a transversal intersects two lines such that a pair of corresponding angles is equal, then the two lines are parallel to each other.**

This gives us a clean test to prove whether two lines are parallel.

### Alternate Interior Angles Theorem: Alternate Interior Angles Are Equal

> **If a transversal intersects two parallel lines, then each pair of alternate interior angles is equal.**

**Given:** $l \parallel m$, cut by transversal $t$ at $P$ and $Q$ (as in the Part D diagram).

**To prove:** $\angle 4 = \angle 6$ (and similarly $\angle 3 = \angle 5$)

**Proof:**

| Statement | Reason |
|---|---|
| $1.$ $\angle 4 = \angle 2$ | Vertically Opposite Angles theorem |
| $2.$ $\angle 2 = \angle 6$ | Corresponding Angles Axiom ($l \parallel m$) |
| $3.$ $\angle 4 = \angle 6$ | From Steps $1$ and $2$ (things equal to the same thing are equal) |

By the same logic, $\angle 3 = \angle 1$ (vertically opposite) and $\angle 1 = \angle 5$ (corresponding), so **$\angle 3 = \angle 5$**.

**Hence proved.**

### Converse of the Alternate Interior Angles Theorem

> **If a transversal intersects two lines such that a pair of alternate interior angles is equal, then the two lines are parallel.**

**Short proof:** Suppose $\angle 4 = \angle 6$. Since $\angle 4 = \angle 2$ (vertically opposite), we get $\angle 2 = \angle 6$. Those are equal corresponding angles, so by the Converse of the Corresponding Angles Axiom, **$l \parallel m$**.

### Co-interior Angles Theorem: Co-interior Angles Are Supplementary

> **If a transversal intersects two parallel lines, then each pair of interior angles on the same side of the transversal is supplementary (sum $= 180^\circ$).**

**Given:** $l \parallel m$, cut by transversal $t$.

**To prove:** $\angle 4 + \angle 5 = 180^\circ$ (and $\angle 3 + \angle 6 = 180^\circ$)

**Proof:**

| Statement | Reason |
|---|---|
| $1.$ $\angle 4 + \angle 1 = 180^\circ$ | Linear Pair Axiom (the left ray of line $l$ stands on line $t$) |
| $2.$ $\angle 1 = \angle 5$ | Corresponding Angles Axiom ($l \parallel m$) |
| $3.$ $\angle 4 + \angle 5 = 180^\circ$ | Substituting $\angle 5$ for $\angle 1$ in Step $1$ |

Similarly, $\angle 3 + \angle 2 = 180^\circ$ (linear pair) and $\angle 2 = \angle 6$ (corresponding), giving **$\angle 3 + \angle 6 = 180^\circ$**.

**Hence proved.**

### Converse of the Co-interior Angles Theorem

> **If a transversal intersects two lines such that a pair of interior angles on the same side of the transversal is supplementary, then the two lines are parallel.**

**Short proof:** Suppose $\angle 4 + \angle 5 = 180^\circ$. By linear pair, $\angle 4 + \angle 1 = 180^\circ$. Comparing both equations gives $\angle 1 = \angle 5$. Since these corresponding angles are equal, **$l \parallel m$** by the Converse of the Corresponding Angles Axiom.

### At a Glance

| If $l \parallel m$, then... | Reason |
|---|---|
| Corresponding angles are **equal** | Corresponding Angles Axiom |
| Alternate interior angles are **equal** | Alternate Interior Angles theorem |
| Co-interior angles sum to **$180^\circ$** | Co-interior Angles theorem |

| Lines are parallel if... | Reason |
|---|---|
| A pair of corresponding angles is equal | Converse of Corresponding Angles Axiom |
| A pair of alternate interior angles is equal | Converse of Alternate Interior Angles theorem |
| A pair of co-interior angles sums to $180^\circ$ | Converse of Co-interior Angles theorem |

Notice the clear division of roles: use the **first table to find unknown angles** when you already know the lines are parallel; use the **second table to prove lines are parallel** when you know the angles!

---

## Part F: "Lines Parallel to the Same Line Are Parallel to Each Other" Theorem

> **Lines which are parallel to the same line are parallel to each other.**

In symbols: if $l \parallel m$ and $n \parallel m$, then **$l \parallel n$**.

Everyday picture: on a page of lined drafting paper, if line $1$ is parallel to line $3$ and line $2$ is also parallel to line $3$, then line $1$ and line $2$ are parallel to each other.

**Short proof:** Draw a transversal $t$ cutting all three lines. Suppose $t$ makes a corresponding angle $\theta$ with line $m$.
- Since $l \parallel m$, the corresponding angle on $l$ is also **$\theta$** (Corresponding Angles Axiom).
- Since $n \parallel m$, the corresponding angle on $n$ is also **$\theta$** (Corresponding Angles Axiom).
- Thus lines $l$ and $n$ form equal corresponding angles ($\theta = \theta$) with $t$, so **$l \parallel n$** (Converse of Corresponding Angles Axiom).

```
   t
    \
-----\------------  l
      \ θ
-------\----------  m
        \ θ
---------\--------  n
          \ θ
```

---

## Part G: Solved "Find $x, y, z$" Examples

**Example 4: Finding all $8$ angles.**
In the Part D diagram, $l \parallel m$ and $\angle 1 = 65^\circ$. Find the other seven angles.

- $\angle 2 = 180^\circ - 65^\circ = \mathbf{115^\circ}$ ($\angle 1$ and $\angle 2$ form a linear pair)
- $\angle 3 = \angle 1 = \mathbf{65^\circ}$ (vertically opposite)
- $\angle 4 = \angle 2 = \mathbf{115^\circ}$ (vertically opposite)
- $\angle 5 = \angle 1 = \mathbf{65^\circ}$ (corresponding)
- $\angle 6 = \angle 2 = \mathbf{115^\circ}$ (corresponding)
- $\angle 7 = \angle 3 = \mathbf{65^\circ}$ (corresponding)
- $\angle 8 = \angle 4 = \mathbf{115^\circ}$ (corresponding)

Checks:
- Alternate interior: $\angle 3 = \angle 5 = 65^\circ$, $\angle 4 = \angle 6 = 115^\circ$ ✅
- Co-interior: $\angle 4 + \angle 5 = 115^\circ + 65^\circ = 180^\circ$ ✅
- Alternate exterior: $\angle 1 = \angle 7 = 65^\circ$, $\angle 2 = \angle 8 = 115^\circ$ ✅

Neat pattern: whenever $l \parallel m$, all $8$ angles take on **only two values** (here $65^\circ$ and $115^\circ$), and those two values always add up to $180^\circ$!

**Example 5: Finding $x$ using corresponding angles.**
Given $l \parallel m$, two corresponding angles measure $(3x + 10)^\circ$ and $(5x - 30)^\circ$. Find $x$.

Corresponding angles are equal:
$$3x + 10 = 5x - 30 \implies 40 = 2x \implies \mathbf{x = 20}$$

Angle $= 3(20) + 10 = \mathbf{70^\circ}$. Check: $5(20) - 30 = 70^\circ$ ✅

**Example 6: Finding $y$ using alternate interior angles.**
Given $l \parallel m$, two alternate interior angles measure $(3y + 15)^\circ$ and $(5y - 25)^\circ$. Find $y$.

$$3y + 15 = 5y - 25 \implies 40 = 2y \implies \mathbf{y = 20}$$

Angle $= 3(20) + 15 = \mathbf{75^\circ}$. Check: $5(20) - 25 = 75^\circ$ ✅

**Example 7: Finding $x$ using co-interior angles.**
Given $l \parallel m$, two co-interior angles measure $(2x + 20)^\circ$ and $(3x - 40)^\circ$. Find $x$.

Co-interior angles sum to $180^\circ$:
$$(2x + 20) + (3x - 40) = 180 \implies 5x - 20 = 180 \implies 5x = 200 \implies \mathbf{x = 40}$$

Angles: $2(40) + 20 = \mathbf{100^\circ}$ and $3(40) - 40 = \mathbf{80^\circ}$. Check: $100 + 80 = 180$ ✅

**Example 8: Alternate exterior angles.**
Given $l \parallel m$, $\angle 2 = (3x + 25)^\circ$ and $\angle 8 = (5x - 15)^\circ$. Find $x$ and $\angle 1$.

$\angle 2$ and $\angle 8$ are alternate exterior angles. When $l \parallel m$, they are equal too (since $\angle 2 = \angle 6$ corresponding and $\angle 6 = \angle 8$ vertically opposite).
$$3x + 25 = 5x - 15 \implies \mathbf{x = 20}$$
$\angle 2 = 3(20) + 25 = \mathbf{85^\circ}$
$\angle 1 = 180^\circ - 85^\circ = \mathbf{95^\circ}$ (linear pair)

**Example 9: Are the lines parallel?**

(a) $\angle 4 = 110^\circ$ and $\angle 5 = 70^\circ$.
Co-interior sum $= 110^\circ + 70^\circ = 180^\circ$. By the Converse of the Co-interior Angles theorem, **$l \parallel m$** ✅

(b) $\angle 4 = 110^\circ$ and $\angle 5 = 75^\circ$.
Sum $= 185^\circ \neq 180^\circ$. Therefore, **$l$ and $m$ are not parallel** ❌

(c) $\angle 3 = 62^\circ$ and $\angle 5 = 62^\circ$.
Alternate interior angles are equal. By the Converse of the Alternate Interior Angles theorem, **$l \parallel m$** ✅

**Example 10: A point between two parallel lines (the classic auxiliary-line problem).**

Given $AB \parallel CD$, point $E$ lies between the two lines with $\angle BAE = 50^\circ$ and $\angle DCE = 30^\circ$. Find $\angle AEC$.

```
   A ------------------------ B
     \
       \
         \
  G - - - - E
         /
       /
     /
   C ------------------------ D
```

**Trick:** Through $E$, draw an **auxiliary line** $GE$ **parallel to $AB$**. Splitting the tricky bend at $E$ turns one awkward angle into two friendly Z-angles!

**Step 1:** $GE \parallel AB$ (by construction) and $AB \parallel CD$ (given). By the *"lines parallel to the same line"* theorem, **$GE \parallel CD$** as well.

**Step 2:** Since $AB \parallel GE$ with transversal $AE$, $\angle BAE$ and $\angle AEG$ are alternate interior angles ("Z" shape):
$$\angle AEG = \angle BAE = \mathbf{50^\circ}$$

**Step 3:** Since $CD \parallel GE$ with transversal $CE$, $\angle DCE$ and $\angle CEG$ are alternate interior angles (inverted "Z" shape):
$$\angle CEG = \angle DCE = \mathbf{30^\circ}$$

**Step 4:** $\angle AEC = \angle AEG + \angle CEG = 50^\circ + 30^\circ = \mathbf{80^\circ}$.

Handy takeaway: in this zig-zag configuration (with $E$ pointing inward), **the middle angle equals the sum of the two corner angles**.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Confusing vertically opposite angles with adjacent angles.**
   In an "X", angles **across from each other** are vertically opposite (equal); angles **side by side** form a linear pair (sum $180^\circ$). In Example 1, across from $40^\circ$ is $40^\circ$, while next to it is $140^\circ$.

2. **Mistake 2: Mixing up corresponding and alternate interior angles.**
   - Corresponding: **same relative position** at both intersections ($\angle 1$ & $\angle 5$, both top-left) — **"F"** shape.
   - Alternate interior: **between** the lines on **opposite sides** of the transversal ($\angle 3$ & $\angle 5$) — **"Z"** shape.

3. **Mistake 3: Thinking co-interior angles are equal.**
   Co-interior angles are **not equal** in general — their **sum is $180^\circ$** (like $100^\circ$ and $80^\circ$ in Example 7). They are equal only in the special case when both are $90^\circ$.

4. **Mistake 4: Applying parallel-line angle rules when lines are NOT parallel.**
   Corresponding angles being equal, alternate angles being equal, and co-interior angles summing to $180^\circ$ hold **only when $l \parallel m$**. Never assume lines are parallel unless the problem states it or you prove it first.

5. **Mistake 5: Mixing up a theorem with its converse.**
   - Given **lines parallel**, finding **angles**: use Corresponding Angles Axiom / Alternate Interior Angles theorem / Co-interior Angles theorem.
   - Given **angles**, proving **lines parallel**: use the **Converse** of those three results.
   Citing the wrong direction costs marks in formal proofs.

6. **Mistake 6: Forgetting to write reasons.**
   Always justify every step: *"vertically opposite,"* *"corresponding angles, $l \parallel m$,"* or *"linear pair."* Even a numerically right answer loses credit without reasons.

7. **Mistake 7: Thinking "vertically" in vertically opposite means up-and-down only.**
   The left and right angles across the vertex are equally vertically opposite — *"vertical"* refers to sharing the **vertex**, not vertical orientation.

8. **Mistake 8: Drawing an auxiliary line at an arbitrary slant.**
   In problems like Example 10, the helper line must be drawn **parallel to the given parallel lines** — otherwise, the alternate interior angle rules will not apply.

---

## Quick Recap

- Two lines in a plane either **intersect** at one point or are **parallel** (never meet).
- **Vertically opposite angles are equal** (Vertically Opposite Angles theorem), proved using linear pairs.
- A **transversal** cutting two lines creates **$8$ angles**: $4$ interior (between) and $4$ exterior (outside).
- **Angle pairs:** corresponding (F), alternate interior (Z), alternate exterior, co-interior (C/U).
- **When $l \parallel m$:**
  - Corresponding angles are equal (Corresponding Angles Axiom)
  - Alternate interior angles are equal (Alternate Interior Angles theorem)
  - Co-interior angles sum to $180^\circ$ (Co-interior Angles theorem)
- **Converses:** if any one of those three conditions holds, then **$l \parallel m$**.
- **Lines parallel to the same line** are parallel to each other.
- For a bend between parallel lines, draw a **parallel auxiliary line** through the vertex.
- Always state a clear **reason** for every step.

---

## Practice Questions

All questions refer to the figure in Part D (lines $l$ and $m$, transversal $t$, angles $\angle 1$ to $\angle 8$) whenever numbered angles are mentioned.

1. Two lines intersect each other. One of the angles formed is $35^\circ$. Find the other three angles.

2. Lines $AB$ and $CD$ intersect at $O$. If $\angle AOC = (4x - 10)^\circ$ and $\angle BOD = (2x + 30)^\circ$, find $x$ and all four angles at $O$.

3. If $l \parallel m$ and $\angle 5 = 72^\circ$, find $\angle 1, \angle 3, \angle 4, \angle 6, \angle 7,$ and $\angle 8$. Give a reason for each.

4. Name the type of each pair of angles:
   (a) $\angle 2$ and $\angle 6$
   (b) $\angle 3$ and $\angle 5$
   (c) $\angle 4$ and $\angle 5$
   (d) $\angle 1$ and $\angle 7$
   (e) $\angle 2$ and $\angle 4$

5. Two co-interior angles formed by a transversal with two parallel lines are $(3x + 15)^\circ$ and $(2x + 15)^\circ$. Find $x$ and both angles.

6. In each case, state whether $l \parallel m$. Give a reason.
   (a) $\angle 3 = 62^\circ$ and $\angle 5 = 62^\circ$
   (b) $\angle 4 = 100^\circ$ and $\angle 5 = 70^\circ$
   (c) $\angle 2 = 120^\circ$ and $\angle 6 = 120^\circ$

7. $AB \parallel CD$ and a point $E$ lies between them, as in Example 10. If $\angle BAE = 40^\circ$ and $\angle DCE = 55^\circ$, find $\angle AEC$.

8. Prove that if two lines are each perpendicular to the same line, they are parallel to each other.

9. State whether each statement is true or false. Give a reason.
   (a) Vertically opposite angles are always supplementary.
   (b) If a transversal cuts two lines and a pair of alternate interior angles are equal, the lines are parallel.
   (c) Co-interior angles formed by a transversal with two parallel lines are equal.
   (d) If $l \parallel m$ and $n \parallel m$, then $l \parallel n$.

### Answers

1. Opposite angle $= \mathbf{35^\circ}$ (vertically opposite). Adjacent angles $= 180^\circ - 35^\circ = \mathbf{145^\circ}$ (linear pair), and the remaining opposite angle is also **$\mathbf{145^\circ}$**.
   Check: $35 + 145 + 35 + 145 = 360^\circ$ ✅

2. $\angle AOC$ and $\angle BOD$ are vertically opposite, so they are equal:
   $4x - 10 = 2x + 30 \implies 2x = 40 \implies \mathbf{x = 20}$
   $\angle AOC = \angle BOD = 4(20) - 10 = \mathbf{70^\circ}$
   $\angle AOD = \angle BOC = 180^\circ - 70^\circ = \mathbf{110^\circ}$ (linear pair)

3. - $\angle 1 = \angle 5 = \mathbf{72^\circ}$ (corresponding angles, $l \parallel m$)
   - $\angle 3 = \angle 1 = \mathbf{72^\circ}$ (vertically opposite)
   - $\angle 4 = 180^\circ - 72^\circ = \mathbf{108^\circ}$ ($\angle 3$ and $\angle 4$ form a linear pair)
   - $\angle 6 = 180^\circ - 72^\circ = \mathbf{108^\circ}$ ($\angle 5$ and $\angle 6$ form a linear pair)
   - $\angle 7 = \angle 5 = \mathbf{72^\circ}$ (vertically opposite)
   - $\angle 8 = \angle 6 = \mathbf{108^\circ}$ (vertically opposite)

   Check: co-interior $\angle 4 + \angle 5 = 108^\circ + 72^\circ = 180^\circ$ ✅

4. (a) **Corresponding angles** (both top-right)
   (b) **Alternate interior angles**
   (c) **Co-interior angles** (interior angles on the same side)
   (d) **Alternate exterior angles**
   (e) **Vertically opposite angles** (both at $P$, directly opposite each other)

5. Co-interior angles sum to $180^\circ$:
   $(3x + 15) + (2x + 15) = 180 \implies 5x + 30 = 180 \implies 5x = 150 \implies \mathbf{x = 30}$
   Angles: $3(30) + 15 = \mathbf{105^\circ}$ and $2(30) + 15 = \mathbf{75^\circ}$.
   Check: $105 + 75 = 180$ ✅

6. (a) **Yes, $l \parallel m$.** $\angle 3$ and $\angle 5$ are alternate interior angles and they are equal (Converse of Alternate Interior Angles theorem).
   (b) **No.** $\angle 4$ and $\angle 5$ are co-interior angles, yet their sum is $100^\circ + 70^\circ = 170^\circ \neq 180^\circ$. If $l \parallel m$, the Co-interior Angles theorem would force their sum to be $180^\circ$, so the lines are not parallel.
   (c) **Yes, $l \parallel m$.** $\angle 2$ and $\angle 6$ are corresponding angles and they are equal (Converse of Corresponding Angles Axiom).

7. Through $E$, draw auxiliary line $GE \parallel AB$. Since $AB \parallel CD$, we also get $GE \parallel CD$ (lines parallel to the same line).
   $\angle AEG = \angle BAE = 40^\circ$ (alternate interior angles, $AB \parallel GE$)
   $\angle CEG = \angle DCE = 55^\circ$ (alternate interior angles, $CD \parallel GE$)
   $\angle AEC = 40^\circ + 55^\circ = \mathbf{95^\circ}$

8. **Given:** Lines $l$ and $m$ are both perpendicular to line $t$.
   **To prove:** $l \parallel m$

   | Statement | Reason |
   |---|---|
   | $1.$ $t$ is a transversal intersecting lines $l$ and $m$. | Given ($t$ cuts both lines) |
   | $2.$ The angle between $l$ and $t$ is $90^\circ$. | $l \perp t$ (Given) |
   | $3.$ The angle between $m$ and $t$ in the matching position is $90^\circ$. | $m \perp t$ (Given) |
   | $4.$ A pair of corresponding angles is equal ($90^\circ = 90^\circ$). | From Steps $2$ and $3$ |
   | $5.$ $l \parallel m$ | Converse of Corresponding Angles Axiom |

   **Hence proved.**

9. (a) **False.** Vertically opposite angles are **equal**; they are supplementary ($180^\circ$ sum) only when both happen to be $90^\circ$.
   (b) **True.** This is the Converse of the Alternate Interior Angles theorem.
   (c) **False.** Co-interior angles **sum to $180^\circ$**; they are equal only when both measure $90^\circ$.
   (d) **True.** This is the *"Lines parallel to the same line are parallel to each other"* theorem.

---

## Chapter Wrap-Up: Lines and Angles

| Topic | What You Learned | Key Takeaway |
|---|---|---|
| **1. Basic Terms and Angles** | Line, segment, ray (from Euclid's Geometry); angles, naming (vertex in the middle), interior/exterior; degrees and protractor; angle types (acute, right, obtuse, straight, reflex, complete); reflex partner; angle bisector; clock angles | An angle's type is determined strictly by its degree measure |
| **2. Angle Relations** | Complementary (sum $90^\circ$), supplementary (sum $180^\circ$), adjacent angles, linear pair; Linear Pair Axiom and its converse; angles on a line ($180^\circ$) and around a point ($360^\circ$) | **Linear pair $= 180^\circ$** (the engine behind almost every proof ahead) |
| **3. Results on Parallel Lines** | Intersecting and parallel lines; vertically opposite angles theorem; $8$ angles of a transversal; Corresponding Angles Axiom, Alternate Interior Angles and Co-interior Angles theorems, and their converses; lines parallel to the same line; auxiliary-line trick | **When $l \parallel m$: corresponding equal, alternate equal, co-interior sum to $180^\circ$** |

---

If keeping all $8$ transversal angles straight feels overwhelming, just remember three capital letters: **F** (corresponding, equal), **Z** (alternate interior, equal), and **C** (co-interior, sum $180^\circ$). Like Liam at the railway crossing, once you spot those letters, you will see them everywhere!

In the upcoming **Triangles** chapter, we will use these exact parallel-line results to prove why **the three angles of any triangle always add up to $180^\circ$**.
