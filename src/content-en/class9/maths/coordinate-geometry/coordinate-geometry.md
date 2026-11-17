# Chapter: Coordinate Geometry

> **Class:** 9 | **Subject:** Mathematics
> **This is a brand-new chapter.** All you need to begin is a basic familiarity with the number line ($0, 1, 2, \dots$ and $-1, -2, \dots$).
> **Topics covered in this file:**
> 1. Introduction: Coordinate Geometry, Cartesian Coordinates, Coordinate System, Coordinate Axes, Ordered Pair, Convention of Signs

---

# Topic 1: Introduction to Coordinate Geometry

So far in mathematics, you have explored two separate worlds:
- **Algebra**, filled with $x$, $y$, equations, and numbers.
- **Geometry**, filled with points, lines, triangles, and shapes.

In this chapter, we will learn how to **connect** these two worlds. The very first step is learning how to describe **any exact location using numbers**. Let us begin right there.

---

## The Story of the Fly on the Ceiling

Centuries ago, in France, lived a brilliant mathematician named **René Descartes**. Legend has it that one day, while he was ill and resting in bed, he stared up at the ceiling and watched a **fly** crawling across it.

A question popped into his mind:

> "How can I tell someone **exactly where** that fly is sitting right now?"

Simply saying "on the ceiling" was not good enough — the ceiling was large. Even saying "near the corner" was vague — which corner, and how close?

Then a clever idea struck him. Pick one corner of the room as a starting point. From that corner:
- Measure how far the fly is **along one wall**.
- Measure how far the fly is **along the other wall**.

For example: "From the corner, go **$3\text{ feet}$** along this wall, and **$2\text{ feet}$** along that wall."

That was all it took! With just **two numbers ($3$ and $2$)**, the fly's position was pinned down completely. Anyone hearing those two numbers could point to the exact same spot.

```
   Wall 2
     |
   2 ft  . . . . . *  <- fly
     |             .
     |             .
     +-------------+------- Wall 1
   Corner        3 ft
```

From this simple insight of Descartes, an entire branch of mathematics was born: **Coordinate Geometry**.

### The Same Idea in Everyday Life

You already use this idea in daily life, even if you never called it by its mathematical name:

- **City street grid:** Maya texts Leo directions to her apartment: "From Main Avenue, turn onto **4th Street**, then stop at the **6th house**." Two numbers, one exact address.
- **Chessboard:** Every square has a unique name, such as **e4**. The letter tells you the column, and the number tells you the row. Two pieces of information, one exact square.
- **Spreadsheet:** Cell **B7** means column B and row 7.
- **Digital map plotting & GPS:** Latitude and longitude are two numbers that pinpoint any location anywhere on Earth.
- **Radar flight navigation:** Air-traffic controllers track an aircraft's exact spot on a radar screen using two directional readings from the control tower.

Everywhere you look, the rule is the same: **to locate a point on a flat surface, you need two numbers.**

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Coordinate Geometry** | The branch of mathematics that links geometry (shapes, points) with algebra (numbers, equations) | Describing a point's position as $(3, 2)$ |
| **Coordinates** | A pair of numbers that specify the exact location of a point | $3$ and $2$ for the fly on the ceiling |
| **Cartesian** | Named after René Descartes (whose Latinized name was Cartesius) | Cartesian plane, Cartesian coordinates |
| **Plane** | A completely flat surface that extends infinitely in every direction | A sheet of graph paper, or an endless flat ceiling |
| **Coordinate axes** | Two straight number lines intersecting at $90^\circ$, used as reference lines to measure position | The $x$-axis and the $y$-axis |
| **Origin** | The point where the two axes intersect, where all measurements start | Point $O(0, 0)$ |
| **Ordered pair** | A pair of two numbers written in a fixed order where the sequence matters | $(3, 2)$ |
| **Perpendicular** | Meeting or crossing at a right angle ($90^\circ$) | A wall and the floor |

---

## Part A: What Is Coordinate Geometry?

**Coordinate geometry** is the branch of mathematics in which we describe **points, lines, and shapes using numbers and algebraic equations**.

Think of it as a bridge:

```
   ALGEBRA                                GEOMETRY
 (numbers, x, y,     <=== bridge ===>    (points, lines,
  equations)        Coordinate Geometry    shapes)
```

Because of this bridge:
- A **point** can be written as a pair of numbers.
- A **line** can be written as an equation.
- Lengths, areas, and geometric properties of shapes can be calculated using numbers alone — without needing a ruler or a protractor.

For this reason, it is also called **Analytical Geometry**.

Today it powers modern technology everywhere: digital map plotting, positioning characters in video games, detecting exactly where your finger taps a smartphone screen, radar flight navigation, and guiding robotic arms.

---

## Part B: Cartesian Coordinates and Descartes

**René Descartes** (1596–1650) was a French mathematician and philosopher. He was the first to lay out a clear, systematic way to represent geometric points using numbers.

In Latin, his name was written **Cartesius**. In his honor:
- This system is called the **Cartesian system**.
- The numbers that locate a point are called **Cartesian coordinates**.
- The flat surface on which points are plotted is called the **Cartesian plane**.

> **Cartesian coordinates** = the pair of numbers that describe a point's exact position using Descartes' system.

---

## Part C: The Coordinate System

### Start with One Number Line

You already know the number line:

```
  <---+----+----+----+----+----+----+---->
     -3   -2   -1    0    1    2    3
```

On a single number line, any position can be described with **one number**. For example, $2$ means $2$ steps to the right of $0$.

However, a single number line is just **one straight path**. A fly can sit anywhere across the entire ceiling, not just along one straight line. One number is not enough.

### Two Number Lines, Perpendicular to Each Other

Descartes' breakthrough was simple: **take two number lines and place them perpendicular ($90^\circ$) to each other**, so that **both lines meet at $0$**.

```
                 y
                 ^
                 |  3
                 |  2
                 |  1
   <---+----+----+----+----+----+---> x
      -3   -2   -1  O  1    2    3
                 | -1
                 | -2
                 | -3
                 v
```

Together, these two perpendicular lines and their intersection point form a **coordinate system**. Now every single point on the flat plane can be measured using these two lines.

> **Coordinate system** = two perpendicular number lines meeting at a shared zero point ($0$), used as a reference framework to locate any point on a plane.

---

## Part D: Coordinate Axes and the Origin

The two reference lines have special names:

| Name | Orientation | Direction |
|---|---|---|
| **$x$-axis** | Horizontal (flat, like the floor) | Left to right |
| **$y$-axis** | Vertical (upright, like a wall) | Bottom to top |
| **Origin ($O$)** | The point where the $x$-axis and $y$-axis cross | Both lines have $0$ here |

Together, these two lines are called the **coordinate axes** (*axes* is the plural of *axis*).

```
                 y-axis (vertical)
                 ^
                 |
                 |
   <-------------O-------------> x-axis (horizontal)
                 |
                 |
                 v
```

### Quick Memory Tricks

- **The $x$-axis is horizontal:** picture the $x$-axis lying flat along the horizon.
- **The $y$-axis is vertical:** the letter **$y$** reaches straight up toward the sky.
- **Origin** literally means "beginning" or "starting point." Every measurement begins here, which is why we label it **$O$** (and its coordinates are $(0, 0)$).

### Important Facts to Keep in Mind

- The two axes intersect at **$90^\circ$**. That is why this is also known as the **rectangular coordinate system**.
- Both axes extend **forever in both directions**, which is why we draw arrowheads at their ends.
- Equal distances along the axes represent equal units (just like the evenly spaced grid squares on graph paper).
- Together, these two axes divide the entire plane into **four regions**. We will explore what those regions are called and how they work in Topic 2.

---

## Part E: Ordered Pairs

### Back to the Story: The Fly on the Ceiling

For the fly, we said: "$3$ along this wall, and $2$ along that wall."

Now imagine someone misheard and swapped the numbers: "$2$ along this wall, and $3$ along that wall." Would they point to the fly? **No!** They would end up at a completely different spot.

So two numbers by themselves are not enough — **their order must be fixed** so everyone agrees which number belongs to which direction.

In coordinate geometry, we always write the two numbers in one **agreed order**:

> **$(x, y)$**: the first number **always** gives the position along the **$x$-axis**, and the second number **always** gives the position along the **$y$-axis**.

A pair of numbers written in a fixed order like this is called an **ordered pair**.

### Why Does Order Matter?

Think of our earlier examples:
- On a city street grid, "4th Street, 6th house" and "6th Street, 4th house" are two completely different homes.
- In chess, `e4` means column `e`, row `4`. Swapping them to `4e` breaks the system.

In the exact same way:

$$(3, 2) \neq (2, 3)$$

These represent two different points.

When can swapping the order give the same point? Only when both numbers are identical. For instance, flipping $(5, 5)$ still gives $(5, 5)$.

> **$(a, b) = (b, a)$** if and only if **$a = b$**.

### How to Write an Ordered Pair

- Always enclose it in **round parentheses $( \ )$**.
- Separate the two numbers with a **comma**.
- Always write **$x$ first, then $y$**.

| Correct | Incorrect |
|---|---|
| $(3, 2)$ | $3, 2$ (missing parentheses) |
| $(-4, 7)$ | $\{-4, 7\}$ (wrong brackets — curly braces denote a set, not an ordered pair) |
| $(0, 5)$ | $(5\ 0)$ (missing comma) |

### When Are Two Ordered Pairs Equal?

Two ordered pairs are **equal if and only if**:
- the **first numbers are equal**, **and**
- the **second numbers are equal**.

> **$(a, b) = (c, d)$** means **$a = c$ and $b = d$**.

This property allows us to solve for unknown values.

**Example 1:** If $(x + 1, 3) = (5, y - 2)$, find $x$ and $y$.

Match the first numbers: $x + 1 = 5$, so **$x = 4$**.
Match the second numbers: $3 = y - 2$, so **$y = 5$**.

Check: $(4 + 1, 3) = (5, 3)$ and $(5, 5 - 2) = (5, 3)$. Both pairs match ✅

**Example 2:** If $(2a, b + 3) = (8, -1)$, find $a$ and $b$.

$2a = 8$, so **$a = 4$**.
$b + 3 = -1$, so **$b = -4$**.

Check: $(2 \times 4, -4 + 3) = (8, -1)$ ✅

**Example 3:** If $(x - y, x + y) = (2, 8)$, find $x$ and $y$.

$$x - y = 2 \quad \text{...(1)}$$
$$x + y = 8 \quad \text{...(2)}$$

Add equations (1) and (2): $2x = 10$, so **$x = 5$**.
Substitute into (2): $5 + y = 8$, so **$y = 3$**.

Check: $(5 - 3, 5 + 3) = (2, 8)$ ✅

---

## Part F: Convention of Signs

### Story: A Building Elevator

Imagine Liam stepping into the elevator of a tall office building. Think of the ground floor as **$0$**:
- Floors above ground are $1, 2, 3, \dots$ (**positive**)
- Underground parking levels B1, B2, $\dots$ can be written as **$-1, -2, \dots$** (**negative**)

Here is another familiar example: **temperature**. Temperatures above $0^\circ\text{C}$ are **$+$**, and temperatures below freezing ($0^\circ\text{C}$) are **$-$**. A winter reading of $-3^\circ\text{C}$ means $3$ degrees below zero.

Notice the pattern: **$0$ is the central dividing point**, with **plus** on one side and **minus** on the opposite side. The exact same rule governs the coordinate axes, with the **origin $O(0, 0)$** acting as the dividing point.

### The Sign Rules

| Direction (from the origin) | Axis | Sign |
|---|---|---|
| **Right** | $x$-axis | **Positive ($+$)** |
| **Left** | $x$-axis | **Negative ($-$)** |
| **Up** | $y$-axis | **Positive ($+$)** |
| **Down** | $y$-axis | **Negative ($-$)** |

```
                    y
                    ^
                    |  + (up)
                    |
    (left) -  <-----O----->  + (right)   x
                    |
                    |  - (down)
                    v
```

An easy way to remember this: **it works just like the standard number line.** On a horizontal number line, positive numbers sit to the right and negative numbers sit to the left. The $y$-axis is simply a vertical number line, with positives going up and negatives going down.

### What the Sign Actually Means

The **sign** tells you the **direction**, and the **number** tells you the **distance**.

- **$+4$** along the $x$-axis means **$4$ units to the right** of the origin.
- **$-4$** along the $x$-axis means **$4$ units to the left** of the origin.
- **$+2$** along the $y$-axis means **$2$ units up** from the origin.
- **$-2$** along the $y$-axis means **$2$ units down** from the origin.

Notice something important: **both $+4$ and $-4$ represent a distance of $4$ units**, just in opposite directions — just as the 2nd floor above ground and basement level 2 are both $2$ floors away from the lobby.

### Signs Inside an Ordered Pair

Now look again at an ordered pair $(x, y)$. Each sign tells you which way to move:
- **Sign of $x$:** right ($+$) or left ($-$)
- **Sign of $y$:** up ($+$) or down ($-$)

For example, in the ordered pair $(-3, 5)$:
- $-3$ means move **$3$ units left** along the $x$-direction.
- $5$ means move **$5$ units up** along the $y$-direction.

How to read and plot points on a full coordinate grid is what we will master in Topic 2. For now, lock in this core idea: **sign = direction, number = distance.**

---

## Common Pitfalls to Avoid

1. **Mistake 1: Mixing up the directions of the $x$-axis and $y$-axis.**
   The $x$-axis is **horizontal** (left–right) and the $y$-axis is **vertical** (up–down). Remember: "$y$ reaches straight up to the sky."

2. **Mistake 2: Reversing the order in an ordered pair.**
   $(3, 2)$ and $(2, 3)$ are completely different points. The first number is always $x$, and the second is always $y$.

3. **Mistake 3: Assuming $(a, b) = (b, a)$ is always true.**
   This is only true when $a = b$. For example, reversing $(4, 4)$ gives $(4, 4)$, whereas reversing $(4, 1)$ gives $(1, 4)$, which is a different location.

4. **Mistake 4: Thinking a negative coordinate means "smaller" or "incorrect."**
   $-4$ simply means "$4$ units to the left" — it is a direction, not an error. Both $-4$ and $+4$ are $4$ units away from the origin.

5. **Mistake 5: Confusing the signs for down and left.**
   Left is $-$ and down is $-$. Right is $+$ and up is $+$. Keep the horizontal and vertical number lines in mind.

6. **Mistake 6: Using the wrong brackets for an ordered pair.**
   Always write ordered pairs in **round parentheses $( \ )$** with a comma between the values. Curly braces $\{ \ \}$ denote a set, not a point.

7. **Mistake 7: Matching only one coordinate when two ordered pairs are equal.**
   In $(x + 1, 3) = (5, y - 2)$, you must set **both** components equal: $x + 1 = 5$ **and** $3 = y - 2$. Checking only one is incomplete.

---

## Quick Recap

- **Coordinate geometry** bridges algebra and geometry: points are described by numbers, and lines by equations.
- It was pioneered by **René Descartes**, whose Latinized name *Cartesius* gives us the terms **Cartesian** system, coordinates, and plane.
- Describing a point on a flat plane requires **two numbers**.
- A **coordinate system** consists of two **perpendicular number lines** intersecting at **$0$**.
- The horizontal line is the **$x$-axis**, the vertical line is the **$y$-axis**, and their intersection is the **origin $O(0, 0)$**.
- **Ordered pair $(x, y)$:** the first number gives the $x$-direction and the second gives the $y$-direction. **Order matters:** $(a, b) \neq (b, a)$ unless $a = b$.
- **$(a, b) = (c, d)$** if and only if **$a = c$ and $b = d$**.
- **Convention of signs:** from the origin, **right is $+$, left is $-$, up is $+$, and down is $-$**.
- **Sign = direction, number = distance.**

---

## Practice Questions

1. Fill in the blanks:
   (a) The horizontal axis is called the __________.
   (b) The vertical axis is called the __________.
   (c) The point where the two axes meet is called the __________.
   (d) The Cartesian system is named after the mathematician __________.

2. Explain in your own words what coordinate geometry is.

3. State whether each statement is true or false. Give a reason.
   (a) The ordered pairs $(2, 7)$ and $(7, 2)$ are the same.
   (b) The ordered pairs $(6, 6)$ and $(6, 6)$ are the same.
   (c) The $x$-axis and the $y$-axis are perpendicular to each other.
   (d) A negative number on the $x$-axis lies to the right of the origin.

4. Find $x$ and $y$ if:
   (a) $(3x - 1, 2y + 4) = (8, 10)$
   (b) $(x/2 + 1, y - 3) = (3, -2)$
   (c) $(x + y, x - y) = (7, 1)$

5. Write the sign ($+$ or $-$) for each direction, measured from the origin:
   (a) $5$ units to the left along the $x$-axis
   (b) $3$ units upwards along the $y$-axis
   (c) $2$ units downwards along the $y$-axis
   (d) $6$ units to the right along the $x$-axis

6. In the ordered pair $(-4, 6)$, what does each number tell you about direction and distance from the origin?

7. Why do we need two numbers, and not just one, to describe the position of a point on a flat surface? Give one example from daily life.

### Answers

1. (a) **$x$-axis**  (b) **$y$-axis**  (c) **origin**  (d) **René Descartes**

2. Coordinate geometry is the branch of mathematics that **connects geometry with algebra**. In it, the locations of points are written using numbers (coordinates), and lines and curves are written using equations.

3. (a) **False.** In an ordered pair, order matters, and since $2 \neq 7$, $(2, 7)$ and $(7, 2)$ represent different locations.
   (b) **True.** Both numbers are identical, so the two ordered pairs are equal.
   (c) **True.** The two axes intersect at a right angle ($90^\circ$).
   (d) **False.** Negative numbers on the $x$-axis lie to the **left** of the origin.

4. (a) $3x - 1 = 8 \implies 3x = 9 \implies \mathbf{x = 3}$. And $2y + 4 = 10 \implies 2y = 6 \implies \mathbf{y = 3}$.
   Check: $(3(3) - 1, 2(3) + 4) = (8, 10)$ ✅
   (b) $x/2 + 1 = 3 \implies x/2 = 2 \implies \mathbf{x = 4}$. And $y - 3 = -2 \implies \mathbf{y = 1}$.
   Check: $(4/2 + 1, 1 - 3) = (3, -2)$ ✅
   (c) $x + y = 7$ and $x - y = 1$. Add both equations: $2x = 8 \implies \mathbf{x = 4}$. Then $4 + y = 7 \implies \mathbf{y = 3}$.
   Check: $(4 + 3, 4 - 3) = (7, 1)$ ✅

5. (a) **$-$** (left)  (b) **$+$** (up)  (c) **$-$** (down)  (d) **$+$** (right)

6. $-4$ tells you to move **$4$ units to the left** along the $x$-direction (minus = left). $6$ tells you to move **$6$ units up** along the $y$-direction (plus = up).

7. A flat surface extends in two independent directions (left–right and up–down), so you need one number for each direction. A single number can only locate a point along one straight line. Example: "4th Street, 6th house" on a city grid, square `e4` on a chessboard, or cell `B7` in a spreadsheet.

---

Well done! You have built the foundation of coordinate geometry: the two axes, the origin $(0, 0)$, ordered pairs, and the convention of signs. Once these ideas feel natural, the rest of the chapter will be smooth sailing.

If you have already studied graphing in [Linear Equations in Two Variables](../linear-equations-in-two-variables/linear-equations-in-two-variables-part2.md), you may remember seeing these axes briefly there. Here, we have built the entire system from the ground up.

**In the next topic (Topic 2: Coordinates of a Point in a Plane and Quadrants):** We will learn how to read and plot the coordinates $(x, y)$ of any point on the grid, discover the special names *abscissa* and *ordinate*, and explore the four regions — **quadrants I, II, III, and IV** — created by the two axes.
