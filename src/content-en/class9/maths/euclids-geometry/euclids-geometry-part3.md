# Chapter: Introduction to Euclid's Geometry (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [euclids-geometry-part2.md](euclids-geometry-part2.md).** (Topic 1 is in [euclids-geometry.md](euclids-geometry.md).)
> **Topics covered in this file:**
> 3. Number of Lines Passing Through Given Points

---

# Topic 3: How Many Lines Pass Through Given Points?

In Topic 2, we built our core vocabulary — point, line, line segment, ray, collinear points, and intersecting, parallel, and concurrent lines — along with the **incidence axioms** linking points and lines: infinitely many lines pass through one point, and exactly one line passes through two distinct points.

In this topic, we turn those axioms into a **counting puzzle**. The question is simple: **given a certain number of points, how many distinct straight lines can be drawn through them?** We will start with $1$ point, move to $2$ and $3$, and uncover a neat pattern that works for any number of points.

---

## The Handshake Story at a Party

At **Maya**'s birthday gathering, **$4$ friends** — Leo, Maya, Liam, and Elena — agree that **every person will shake hands with every other person exactly once**.

Maya counts the handshakes one by one:
- Leo shakes hands with Maya, Liam, and Elena: **$3$**
- Maya shakes hands with Liam and Elena (she already shook Leo's hand): **$2$**
- Liam shakes hands with Elena: **$1$**
- Elena has no one left to shake hands with: **$0$**

Total handshakes $= 3 + 2 + 1 = \mathbf{6}$.

Now translate this straight into geometry. Four friends $=$ four **points**. Every handshake $=$ one **straight line** connecting two points. Therefore, $4$ points (with no three in a straight line) determine **$6$ lines**.

That is the entire secret of this topic: **every pair of points gives one line.** Let us explore every case carefully.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Collinear points** | Points that lie on the exact same straight line (covered in Topic 2) | $A, B, C$ on one straight line |
| **Non-collinear points** | Points that do not all lie on one straight line | The three vertices of a triangle |
| **"No three collinear"** | No group of three points among the given set lies on one straight line | The four corners of a square |
| **Pair** | A group of two points | The pair $A$ and $B$ |
| **Concurrent lines** | Three or more lines that all pass through one single point (covered in Topic 2) | Spokes meeting at a wheel hub |
| **Point of intersection** | The single point where two lines cross | A crossroads of two streets |

---

## Part A: How Many Lines Through One Point?

Imagine standing in a dark field holding a powerful searchlight. You keep your feet planted in one spot and pivot the beam left, right, up, and down. Every aim traces a new straight beam, and every beam passes through **your position (one single point)**.

Or picture the hub of a bicycle wheel, with dozens of steel spokes radiating outward in different directions.

```
        \   |   /
         \  |  /
          \ | /
    -------- P --------
          / | \
         /  |  \
        /   |   \
```

Through a single point $P$, we can draw as many straight lines as we wish — without end.

> **Infinitely many lines can pass through a given point.**

This is simply Topic 2's Incidence Axiom 2, brought to life visually.

---

## Part B: How Many Lines Through Two Points?

Now pick two distinct points $A$ and $B$. How many straight lines can pass through both of them?

```
    A ●━━━━━━━━━━━━━━━━━━● B
```

Try drawing a second straight line through $A$ and $B$: it lands directly on top of the first line! There is **only one** such straight line.

> **Exactly one line passes through two distinct points.**

You have seen this from two angles already:
- **Euclid's Postulate 1** (Topic 1): a straight line may be drawn from any one point to any other point.
- **Incidence Axiom 3** (Topic 2): through two distinct points, one and only one line passes. (The word *"only one"* comes from here.)

In civil engineering, a taut surveying wire stretched between two fixed fence posts can follow only one unique straight path.

---

## Part C: How Many Lines Through Three Points?

With three points, there are two very different questions we can ask — and their answers are different too. Read carefully!

### Question 1: Can one single line pass through all three points?

**Case 1: The three points are collinear**

```
    A ●━━━━━━━━● B ━━━━━━━━● C
```

Yes — **one line** passes through all three.

**Case 2: The three points are non-collinear**

```
            A
            ●
          /   \
         /     \
        ●-------●
        B       C
```

**No single straight line** can pass through all three. Any line joining $A$ and $B$ misses $C$.

### Question 2: How many total lines are formed by pairs of three points?

Three points form three pairs: $AB$, $BC$, and $CA$ — that is, **$3$ pairs**.

- If they are **non-collinear**, each pair gives a distinct line: **$3$ lines** in total (forming the three sides of a triangle).
- If they are **collinear**, all three pairs lie along the exact same line: **$1$ line** in total.

| Three Points | Can one line pass through all three? | Total lines from pairs |
|---|---|---|
| Collinear | Yes, one | **$1$** |
| Non-collinear | No | **$3$** |

---

## Part D: Four or More Points (No Three Collinear)

### Four Points

Take the four corners $A, B, C, D$ of a square. No three of them lie on a straight line.

```
    A ●───────────● B
      │ \       / │
      │   \   /   │
      │     X     │
      │   /   \   │
      │ /       \ │
    D ●───────────● C
```

Count every pair:
- Sides: $AB, BC, CD, DA =$ **$4$**
- Diagonals: $AC, BD =$ **$2$**
- Total $=$ **$6$ lines**

Just like the birthday party: $4$ friends, $6$ handshakes!

### Five Points

Take the five vertices of a regular pentagon (no three collinear).
- Sides $= 5$
- Diagonals $= 5$
- Total $=$ **$10$ lines**

By the handshake method: the $1$st point connects to $4$ others, the $2$nd to $3$ new ones, the $3$rd to $2$, and the $4$th to $1$.
$$4 + 3 + 2 + 1 = \mathbf{10}$$ ✅

### Finding the Pattern

| Points ($n$) | Sum of New Connections | Lines |
|---|---|---|
| $2$ | $1$ | $1$ |
| $3$ | $2 + 1$ | $3$ |
| $4$ | $3 + 2 + 1$ | $6$ |
| $5$ | $4 + 3 + 2 + 1$ | $10$ |
| $6$ | $5 + 4 + 3 + 2 + 1$ | $15$ |

### The Shortcut Formula

Each of the $n$ points can join with **$(n - 1)$** other points, giving $n(n - 1)$ directed pairs. However, every line has been counted **twice** (both $AB$ and $BA$ describe the exact same line!). Divide by $2$:

> **Number of lines through $n$ points (no three collinear) $= \dfrac{n(n - 1)}{2}$**

Check:
- $n = 4$: $\dfrac{4 \times 3}{2} = \mathbf{6}$ ✅
- $n = 5$: $\dfrac{5 \times 4}{2} = \mathbf{10}$ ✅
- $n = 6$: $\dfrac{6 \times 5}{2} = \mathbf{15}$ ✅
- $n = 10$: $\dfrac{10 \times 9}{2} = \mathbf{45}$ ✅

This formula works **only when no three points are collinear.** What happens when some points *do* line up? Let us see next.

---

## Part E: When Some Points Are Collinear

Whenever several points lie on the same straight line, all the pairs formed among them collapse into **one single line**. That reduces the total count.

### Example 1: 4 points, exactly 3 collinear

Suppose $A, B, C$ lie on one line, and $D$ lies off that line.

```
                D
                ●
             /  |  \
            /   |   \
    A ●━━━━━━━━━● B ━━━━━━━━● C
```

Count the lines directly:
- The single line through $A, B, C$: **$1$**
- Lines from $D$ to $A$, $D$ to $B$, and $D$ to $C$: **$3$**
- Total $=$ **$4$ lines**

**Check using the formula:** Total pairs among $4$ points $= 6$. The $3$ pairs formed by $A, B, C$ ($AB, BC, CA$) all merge into just $1$ line: $6 - 3 + 1 = \mathbf{4}$ ✅

### Example 2: 5 points, exactly 3 collinear

$A, B, C$ lie on one line; $D$ and $E$ are off the line (with no other three collinear).

- Total pairs $= \dfrac{5 \times 4}{2} = 10$
- The $3$ pairs from $A, B, C$ collapse into $1$ line: $10 - 3 + 1 = \mathbf{8\text{ lines}}$ ✅

Verify by hand: $ABC$ ($1$), $DA, DB, DC$ ($3$), $EA, EB, EC$ ($3$), $DE$ ($1$). Total $= 1 + 3 + 3 + 1 = \mathbf{8}$ ✅

### Example 3: 5 points, 4 collinear

$A, B, C, D$ lie on one line; $E$ is off the line.

- One line through $A, B, C, D$: $1$
- Four lines from $E$ to $A, B, C, D$: $4$
- Total $=$ **$5$ lines**

Check by formula: $10 - 6 + 1 = \mathbf{5}$ ✅ *(The $4$ collinear points form $\frac{4 \times 3}{2} = 6$ pairs that collapse into $1$ line.)*

### The General Method

> **Lines $=$ (total pairs) $-$ (pairs among the collinear points) $+ 1$**

If $m$ out of $n$ points are collinear (and no other three are collinear):

$$\text{Lines} = \frac{n(n - 1)}{2} - \frac{m(m - 1)}{2} + 1$$

### Example 4: All points collinear

If all $n$ points lie on a single straight line, then whether $n = 5$ or $n = 50$, **only $1$ line** passes through them.

Formula check ($n = m$): $\dfrac{n(n - 1)}{2} - \dfrac{n(n - 1)}{2} + 1 = \mathbf{1}$ ✅

---

## Part F: Common Points of Lines

Now flip the question around: **given several distinct lines, how many intersection points can they share?**

### Two Distinct Lines

From Topic 2 (Incidence Axiom 4), two distinct lines either cross at **$1$** point or are parallel with **$0$** common points — so **at most $1$** common point. *(We will prove this theorem in Topic 4.)*

### Three Distinct Lines

How many intersection points can three distinct lines create? There are four possibilities:

| Case | Real-World Picture | Intersection Points |
|---|---|---|
| All three parallel | Three lanes on a straight highway | **$0$** |
| Two parallel, third crosses both | Two parallel rails crossed by one road | **$2$** |
| All three pass through one point (concurrent) | Three spokes meeting at a hub | **$1$** |
| No two parallel, and not concurrent | Extending the three sides of a triangle | **$3$** |

```
  Concurrent (1 point)        Triangle-style (3 points)

      \  |  /                       \     /
       \ | /                         \   /
   ---- \|/ ----                      \ /
        /|\                        ----X----
       / | \                          / \
      /  |  \                        /   \
                                  ──/─────\──
```

Thus, three distinct lines can have **$0, 1, 2,$ or $3$** points of intersection — **at most $3$**.

### Concurrent Lines

As seen in Topic 2, when three or more lines pass through the **exact same point**, they are called **concurrent lines**. The searchlight sketch in Part A — many lines radiating out from a single point $P$ — is a classic picture of concurrent lines.

---

## Part G: Parallel Lines Through a Point

Take a straight line $l$ and a point $P$ not lying on $l$. How many lines can you draw through $P$ that are parallel to $l$?

```
        P
   ─────●─────────────   (through P, parallel to l: only one)

   ───────────────────   l
```

Answer: **exactly one.** This is **Playfair's Axiom** from Topic 1 (Part D), the simpler equivalent of Euclid's fifth postulate. Here, simply remember it as a counting rule: through an outside point $P$, there is **one unique line** parallel to $l$.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Assuming one line always passes through any three points.**
   A single straight line passes through three points *only* if they are **collinear**. Three non-collinear points cannot lie on the same straight line.

2. **Mistake 2: Applying $\frac{n(n - 1)}{2}$ blindly.**
   That formula only works when **no three points are collinear**. With $4$ points where $3$ are collinear, the answer is **$4$**, not $6$.

3. **Mistake 3: Forgetting to divide by $2$.**
   Writing $4 \times 3 = 12$ lines for $4$ points counts every line twice ($AB$ and $BA$ are the same line). Always divide by $2$: $\frac{12}{2} = 6$.

4. **Mistake 4: Thinking only one line passes through a single point.**
   **Infinitely many** lines pass through a single point. The "exactly one line" rule applies to **two** distinct points.

5. **Mistake 5: Thinking two lines can cross at two points.**
   Two distinct straight lines meet at **at most one** point. If two lines share two points, they are actually the same line.

6. **Mistake 6: Assuming three lines must have $3$ intersection points.**
   $3$ is only the **maximum**. If some lines are parallel or concurrent, there can be $0, 1,$ or $2$ intersection points instead.

7. **Mistake 7: Counting pairs of collinear points as separate lines.**
   If $A, B, C$ are collinear, then $AB$, $BC$, and $CA$ are not three different lines — together they form **one single line**.

---

## Quick Recap

- Through **$1$ point**: **infinitely many** lines.
- Through **$2$ distinct points**: **exactly $1$** line (Incidence Axiom 3; Euclid's Postulate 1 guarantees a line can be drawn).
- Through **$3$ points**: if collinear, $1$ line passes through all three ($1$ line total from pairs); if non-collinear, no single line passes through all three ($3$ lines total from pairs).
- Through **$n$ points (no three collinear)**: **$\dfrac{n(n - 1)}{2}$** lines — just like handshakes at a party.
- **When $m$ points are collinear:** $\text{Lines} = \text{total pairs} - \text{collinear pairs} + 1$.
- **All points collinear:** just **$1$** line.
- **Two distinct lines:** $0$ or $1$ common point.
- **Three distinct lines:** $0, 1, 2,$ or $3$ intersection points (at most $3$).
- Through a point outside a line: **exactly $1$** line parallel to the given line.

---

## Practice Questions

1. How many lines can pass through:
   (a) one given point?
   (b) two distinct given points?

2. Three points $A, B,$ and $C$ are given. How many lines can be drawn through all three points if:
   (a) they are collinear?
   (b) they are non-collinear?

3. How many lines can be drawn through $6$ points, no three of which are collinear?

4. Find the number of lines that can be drawn through $10$ points, no three of which are collinear.

5. Four points $A, B, C,$ and $D$ are given such that $A, B,$ and $C$ are collinear and $D$ does not lie on the line through them. How many distinct lines can be drawn through pairs of these points? Name them.

6. Seven points are given, out of which exactly $4$ are collinear and no other three are collinear. How many distinct lines can be drawn through pairs of these points?

7. If $21$ lines can be drawn through $n$ points, no three of which are collinear, find $n$.

8. What is the maximum number of points of intersection of:
   (a) two distinct lines?
   (b) three distinct lines?

9. State whether each statement is true or false. Give a reason.
   (a) Two distinct lines can have two points in common.
   (b) Infinitely many lines can pass through a single point.
   (c) Through three non-collinear points, exactly one line can be drawn.
   (d) Through a point not on a given line, exactly one line can be drawn parallel to the given line.

### Answers

1. (a) **Infinitely many** lines.
   (b) **Exactly one** line.

2. (a) **One** line passes through all three.
   (b) **None.** No single straight line can pass through all three non-collinear points.

3. $n = 6$: $\dfrac{6 \times 5}{2} = \mathbf{15\text{ lines}}$

4. $n = 10$: $\dfrac{10 \times 9}{2} = \mathbf{45\text{ lines}}$

5. One line through $A, B, C$, plus three lines joining $D$ to $A, B,$ and $C$.
   **$4$ lines:** line $ABC$, $DA$, $DB$, $DC$.
   Check: total pairs $= 6$, collinear pairs $= 3$. $6 - 3 + 1 = 4$ ✅

6. Total pairs $= \dfrac{7 \times 6}{2} = 21$. Pairs among the $4$ collinear points $= \dfrac{4 \times 3}{2} = 6$, which collapse into $1$ line.
   Lines $= 21 - 6 + 1 = \mathbf{16\text{ lines}}$

7. $\dfrac{n(n - 1)}{2} = 21 \implies n(n - 1) = 42$. Two consecutive integers whose product is $42$ are $7 \times 6 = 42$.
   **$n = 7$**
   Check: $\dfrac{7 \times 6}{2} = 21$ ✅

8. (a) **$1$** (when the lines intersect; $0$ if parallel).
   (b) **$3$** (when no two are parallel and no three are concurrent).

9. (a) **False.** Two distinct lines can share at most one point. Sharing two points would make them the exact same line.
   (b) **True.** Infinitely many lines can pass through a single point.
   (c) **False.** No single line passes through three non-collinear points; taking them in pairs produces $3$ distinct lines.
   (d) **True.** This is Playfair's axiom, equivalent to Euclid's fifth postulate.

---

If counting lines ever feels tricky, just picture Maya's party: **every two friends shake hands once, and every two points determine one line.** Just keep an eye out for collinear points, since all of their pairs merge into a single line.

**In the next topic (Topic 4: Theorems):** Up to now, we accepted facts like *"two distinct lines share at most one point"* by intuition. Next, we will learn how to **prove** geometric theorems rigorously using Euclid's axioms and postulates.
