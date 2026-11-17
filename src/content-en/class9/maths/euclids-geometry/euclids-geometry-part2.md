# Chapter: Introduction to Euclid's Geometry (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [euclids-geometry.md](euclids-geometry.md).**
> **Topics covered in this file:**
> 2. Some Terms Related to Geometry, and Incidence Axioms on Lines

---

# Topic 2: Some Terms Related to Geometry, and Incidence Axioms on Lines

In Topic 1, we traced the history of geometry — from Egyptian rope-stretchers surveying Nile farmland to Euclid organizing mathematics into his *Elements*. We learned that **axioms and postulates** are statements accepted without proof, and we studied Euclid's $7$ axioms and $5$ postulates.

Those postulates repeatedly used words like **point**, **line**, **straight line**, and **surface**. What exactly *are* those objects? How did Euclid try to define them, and do his definitions actually work? In this topic, we answer that question, clarify essential geometric terms, and learn the **incidence axioms** that govern points and lines.

---

## Little Brother's Endless "Why?" Game

Imagine **Leo**'s younger brother **Toby** peering over Leo's geometry notebook.

**Toby:** Leo, what is a "point"?
**Leo:** A point is something that has no **part**.
**Toby:** What does "part" mean?
**Leo:** A part means... a **piece** of something.
**Toby:** What is a "piece"?
**Leo:** A piece is... a small **portion** of a whole.
**Toby:** And what is a "portion"?
**Leo:** ...

Notice what just happened? Every time you define one word, you have to use **other words** — and if someone asks what *those* words mean, you need **still more words**. The chain never ends!

Hidden inside Toby's questions is the key secret of this topic: **a few basic terms in geometry must be accepted without formal definitions.** Let us see why.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Definition** | Explaining the exact meaning of a term using simpler known words | "A triangle is a closed figure with three straight sides" |
| **Undefined term** | A basic concept accepted intuitively without a formal definition | Point, line, plane |
| **Line segment** | A piece of a line with **two endpoints** | A pencil, the edge of a ruler |
| **Ray** | A part of a line that **starts at one point** and extends **forever in one direction** | A laser beam, a ray of sunlight |
| **Line** | A straight path extending **without end in both directions** | An infinitely long straight railway track |
| **Collinear points** | Three or more points that all lie on the **same straight line** | Survey stakes placed in a straight row |
| **Concurrent lines** | Three or more lines that all pass through **one single point** | Spokes meeting at the hub of a bicycle wheel |
| **Incidence axiom** | A basic rule describing which points lie on which lines | Exactly one line passes through two distinct points |

---

## Part A: Euclid's Definitions

Euclid opened the *Elements* with a list of **definitions**. Here are his famous first seven:

1. A **point** is that which has no part.
2. A **line** is breadthless length.
3. The **ends** of a line are points.
4. A **straight line** is a line which lies evenly with the points on itself.
5. A **surface** is that which has length and breadth only (no thickness).
6. The **edges** of a surface are lines.
7. A **plane surface** is a surface which lies evenly with the straight lines on itself.

### What Is the Problem with These Definitions?

Remember Toby's "Why?" game. Look closely at the words inside Euclid's own definitions:

| Euclid's Definition | Words That Still Need Explaining |
|---|---|
| Point: that which has no **part** | What is a "part"? |
| Line: **breadthless length** | What are "breadth" and "length"? |
| Straight line: lies **evenly** with its points | What does "evenly" mean? |
| Surface: **length and breadth** only | Again, what are length and breadth? |

If we define "part," new undefined words pop up inside that definition, and defining *those* brings even more words. It creates an **infinite loop** with no starting point.

### How Mathematicians Solved This

Modern mathematicians resolved the dilemma cleanly: **accept a small core of basic terms as undefined terms.** In geometry, the three primary undefined terms are:

> **Point, Line, and Plane**

We do not try to trap them inside circular dictionary definitions; instead, everyone shares a clear mental picture of them — just as you cannot formally define the colour "blue" in words to someone, yet you recognize blue instantly when you see it.

---

## Part B: Picturing the Three Undefined Terms

Even without formal definitions, we can build sharp mental models for all three.

### Point

- A tiny **dot** marked with a razor-sharp drafting pencil.
- A distant **star** in the night sky.
- A **pinpoint marker** for a city on a digital map.

Keep in mind: an ideal geometric point has **zero size** — no length, no width, and no thickness. Even the smallest ink dot takes up a tiny bit of paper, so the dot is only a visual stand-in. Points are labelled with capital letters such as $A, B, P$.

### Line

- A **taut surveying string** imagined stretching forever in both directions.
- A perfectly straight **railway track** continuing infinitely past both horizons.

A geometric line has **zero width** and extends **endlessly in both directions**. Because we cannot fit an infinite line onto a sheet of paper, we draw a portion of it with **arrows at both ends**.

### Plane

- A perfectly **flat tabletop** imagined extending outward forever in every direction.
- The **calm, mirror-still surface** of a pond.
- A flat sheet of **drafting paper**.

A geometric plane has **zero thickness** and stretches **endlessly in all directions** along its flat surface.

---

## Part C: Line, Line Segment, and Ray

These three terms look similar, yet one simple detail separates them: **how many endpoints they have.**

### Line Segment

A part of a line bounded by **two endpoints**.

```
   A                    B
   •--------------------•
```

- Name: **line segment $AB$** (or $BA$ — order does not matter).
- Symbol: **$\overline{AB}$** (a flat bar above the letters).
- **Measurable length:** You can measure it with a ruler, e.g. $AB = 5\text{ cm}$.
- Examples: a pencil, the edge of a ruler, the width of a doorframe.

### Ray

A part of a line that **starts at one endpoint** and extends **forever in one direction**.

```
   A                    B
   •--------------------•------------------->
```

- Name: **ray $AB$**. The first letter ($A$) must be the **starting point (initial point)**.
- Symbol: **$\overrightarrow{AB}$** (a one-way arrow above the letters).
- **No fixed length:** It goes on forever in one direction, so you cannot measure its total length.
- Examples: a flashlight beam, a laser pointer beam, a ray of sunlight.

**Careful:** Ray $AB$ and ray $BA$ are **different rays**!

```
 Ray AB:     A •----------• B ---------->     (starts at A, goes through B)

 Ray BA:  <---------- A •----------• B         (starts at B, goes through A)
```

### Line

A straight path extending **forever in both directions**, with **no endpoints**.

```
  <-------------•--------------------•------------->
                A                    B
```

- Name: **line $AB$** (or $BA$). Often named with a single lowercase letter, such as line $l$.
- Symbol: **$\overleftrightarrow{AB}$** (a two-way arrow above the letters).
- **No fixed length:** It continues infinitely in both directions.

### Comparing All Three at a Glance

| | Endpoints | Can Measure Length? | Does Letter Order Matter? | Symbol |
|---|---|---|---|---|
| **Line segment $AB$** | $2$ ($A$ and $B$) | **Yes** | No ($AB = BA$) | $\overline{AB}$ |
| **Ray $AB$** | $1$ ($A$ only) | No | **Yes** ($A$ is the start) | $\overrightarrow{AB}$ |
| **Line $AB$** | $0$ | No | No | $\overleftrightarrow{AB}$ |

### Length of a Line Segment

The length of line segment $\overline{AB}$ is written simply as **$AB$** (without any bar above), such as **$AB = 6\text{ cm}$**.

If three points $P, Q, R$ lie on a line with $Q$ between $P$ and $R$:

```
   P          Q                R
   •----------•----------------•
     3 cm           4 cm
```

Then **$PR = PQ + QR = 3 + 4 = 7\text{ cm}$**. The whole segment equals the sum of its parts. *(Notice also that $PR = 7\text{ cm}$ is greater than its part $PQ = 3\text{ cm}$ — Topic 1's Axiom 5 in action!)*

Check: $3 + 4 = 7$ ✅

---

## Part D: Collinear and Non-Collinear Points

### Collinear Points

When three or more points lie on the **exact same straight line**, they are called **collinear points**.

```
   A          B          C          D
   •----------•----------•----------•
```

Points $A, B, C, D$ are collinear.

In everyday settings:
- Survey stakes aligned along a straight property boundary.
- Streetlights lined up along a straight avenue.

### Non-Collinear Points

When points do **not** all lie on a single straight line, they are **non-collinear**.

```
          Q
          •

   P                R
   •                •
```

Points $P, Q, R$ are non-collinear. Joining them forms a **triangle**.

### An Important Fact

**Any two distinct points are always collinear**, because a straight line can always be drawn through two points (as stated in the incidence axioms in Part G). Therefore, checking for collinearity only becomes meaningful when you have **three or more** points.

---

## Part E: Intersecting, Parallel, and Concurrent Lines

### Intersecting Lines

Two lines in a plane that **cross (meet) at a single point**.

```
         \       /
          \     /
           \   /
            \ /
             • O
            / \
           /   \
          /     \
```

Point $O$ where they cross is called the **point of intersection**.

Everyday examples: the two blades of a pair of **scissors**, a **road crossroads**, the letter **X**.

### Parallel Lines

Two lines in the **same plane** that **never intersect**, no matter how far you extend them in either direction.

```
  <------------------------------------->   l

  <------------------------------------->   m
```

Line $l$ and line $m$ are parallel, written **$l \parallel m$**.

Everyday examples: straight **railway rails**, ruled lines on **lined paper**, the two side rails of a **ladder**.

### Concurrent Lines

**Three or more** lines that all pass through the **same single point**.

```
          \   |   /
           \  |  /
            \ | /
   ----------\|/----------
              • O
             /|\
            / | \
           /  |  \
```

These four lines all meet at $O$, so they are **concurrent lines**, and $O$ is the **point of concurrence**.

Everyday examples: the **spokes of a bicycle wheel** meeting at the central hub, the ribs of an **umbrella**, straight cut lines across the centre of a **pizza**.

**Watch out:** You need at least **three** lines to call them concurrent. Two lines crossing at a point are simply called *intersecting lines*.

---

## Part F: Coplanar Points and Lines (A Brief Look)

Points or lines that lie in the **same flat plane** are called **coplanar**.

- All points drawn on **one sheet of drafting paper** are coplanar.
- All points marked on the **flat floor** of a room are coplanar.

Now look at the **corner of a room**: pick two corners on the floor and one corner up on the ceiling. Are those three points all on the floor? No — yet you could still stretch a flat sheet of cardboard diagonally to touch all three points! In fact, **any three points** always share at least one plane. Thus, **non-coplanar** points only appear when you consider **four or more** points — for example, three corners of the floor plus one corner of the ceiling.

That brief idea is all you need for Class 9; you will explore 3D geometry in detail in higher classes.

---

## Part G: Incidence Axioms on Lines

The word **"incidence"** simply refers to **which points lie on which lines**. The **incidence axioms** are the fundamental rules linking points and lines — accepted without proof just like the axioms in Topic 1.

*(To avoid mixing them up with Euclid's Axioms 1–7 from Topic 1, we label these **Incidence Axioms 1–4**.)*

### Incidence Axiom 1: A line contains infinitely many points.

No matter how many points you mark on a line, you can always place another point **between any two of them** — and the line stretches endlessly in both directions.

```
  <----•----•----•----•----•----•----•----•---->
       A    B    C    D    E    F    G    H   ...
```

Imagine **zooming in** on a digital drafting line: between $A$ and $B$ there is a midpoint, between $A$ and that midpoint another point, and so on forever.

### Incidence Axiom 2: Infinitely many lines can pass through a given point.

Pick a single point $P$. How many straight lines can pass through $P$? One? Two? **Infinitely many!**

```
            \    |    /
         \   \   |   /   /
          \   \  |  /   /
     ------------•P-----------
          /   /  |  \   \
         /   /   |   \   \
            /    |    \
```

Picture a **surveyor's pin** fixed at $P$ with a taut string rotating around it: every tiny tilt produces a brand-new straight line through $P$.

### Incidence Axiom 3: Given two distinct points, there is one and only one line that passes through them.

Pick two distinct points $A$ and $B$. How many straight lines can pass through *both* $A$ and $B$? **Exactly one.**

```
   <---------•--------------------•--------->
             A                    B
```

Test it on paper: mark two dots and lay a ruler across them. You can draw many curved paths between $A$ and $B$, yet only **one unique straight line** passes through both. That is why a carpenter snapping a taut chalk line between two nails always gets one exact straight mark.

*(In Topic 1, Euclid's Postulate 1 stated that a straight line can be drawn from one point to another. This incidence axiom adds the key guarantee that the line is **unique**.)*

### Incidence Axiom 4 (Fact): Two distinct lines can intersect in at most one point.

For any two distinct straight lines in a plane, only two outcomes are possible:

| Situation | Number of Common Points |
|---|---|
| Lines **intersect** | **Exactly $1$** point |
| Lines are **parallel** | **$0$** points |

Two distinct straight lines can **never cross at two different points**. Why? If they crossed at two points $P$ and $Q$, then two different straight lines would both pass through $P$ and $Q$, violating Incidence Axiom 3!

Strictly speaking, this fact is a **theorem** rather than an axiom. We will write its complete step-by-step formal proof in **Topic 4 (Theorems)**. For now, keep it ready as a reliable rule.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Confusing a line with a line segment.**
   What you draw with a ruler between two endpoints is a **line segment**. A true line has arrows on both ends because it never stops.

2. **Mistake 2: Treating ray $AB$ and ray $BA$ as identical.**
   Ray $\overrightarrow{AB}$ starts at **$A$** and heads past $B$. Ray $\overrightarrow{BA}$ starts at **$B$** and heads past $A$. They are completely different rays (whereas segments $\overline{AB}$ and $\overline{BA}$ are the same).

3. **Mistake 3: Writing a length for a line or a ray.**
   Writing "line $AB = 5\text{ cm}$" is incorrect. Only a **line segment** has a finite, measurable length.

4. **Mistake 4: Thinking a geometric point has a size.**
   A pencil dot looks like a tiny circle, yet an ideal point has **zero size**. The dot is only a visual marker.

5. **Mistake 5: Calling two points "non-collinear."**
   Any two points are **always collinear**. Collinear vs. non-collinear only becomes a question with **three or more** points.

6. **Mistake 6: Calling two intersecting lines "concurrent."**
   Concurrent requires at least **three** lines passing through the same point.

7. **Mistake 7: Forgetting the "same plane" condition for parallel lines.**
   Parallel lines must lie in the **same plane** and never meet. A line painted along the floor and another running across the ceiling in a perpendicular direction never meet, yet they are *not* parallel (they are skew lines in 3D space).

8. **Mistake 8: Thinking two straight lines can pass through the same two points.**
   Through two distinct points, **exactly one** straight line passes (Incidence Axiom 3).

---

## Quick Recap

- Euclid's definitions (point, line, surface...) rely on terms like *part, breadth, length, evenly* that would require endless further definitions.
- Therefore, **point, line, and plane** are taken as **undefined terms**.
- **Line segment ($\overline{AB}$):** $2$ endpoints, finite measurable length, $AB = BA$.
- **Ray ($\overrightarrow{AB}$):** $1$ endpoint (starting point), infinite in one direction, $\overrightarrow{AB} \neq \overrightarrow{BA}$.
- **Line ($\overleftrightarrow{AB}$):** $0$ endpoints, infinite in both directions.
- **Collinear:** on the same straight line. Any two points are always collinear.
- **Intersecting:** meet at $1$ point. **Parallel:** in the same plane and never meet ($l \parallel m$). **Concurrent:** $3$ or more lines passing through $1$ point.
- **Coplanar:** lying in the same plane.
- **Incidence axioms:**
  1. A line contains infinitely many points.
  2. Infinitely many lines pass through one point.
  3. **Exactly one** line passes through two distinct points.
  4. Two distinct lines meet in **at most one** point (proved in Topic 4).

---

## Practice Questions

1. State whether each statement is true or false. Give a reason.
   (a) A line segment has a definite length.
   (b) Ray $AB$ and ray $BA$ are the same.
   (c) Through two distinct points, two different straight lines can be drawn.
   (d) A line has two endpoints.
   (e) Two distinct lines can intersect at two points.
   (f) Any three points are always collinear.
   (g) Any two points are always collinear.

2. In Euclid's definitions of a point and a line, which terms need to be defined further? Why are point, line, and plane taken as undefined terms?

3. Name three undefined terms in geometry and give one everyday example that helps us picture each.

4. Look at the figure and answer the questions.

   ```
      A          B          C
      •----------•----------•

                    • D
   ```

   (a) Name three collinear points.
   (b) Name three non-collinear points.
   (c) Name all the line segments that can be read along the line $ABC$.
   (d) Name the ray that starts at $B$ and passes through $C$.

5. Give one real-life example of each: (a) a line segment, (b) a ray, (c) parallel lines, (d) intersecting lines, (e) concurrent lines.

6. $P, Q,$ and $R$ are collinear points and $Q$ lies between $P$ and $R$. If $PQ = 3.5\text{ cm}$ and $QR = 4.5\text{ cm}$, find $PR$.

7. Write any two differences between a line and a line segment.

8. How many lines can pass through (a) one given point, and (b) two given distinct points? Name the axiom used in each case.

### Answers

1. (a) **True ✅.** A line segment has two endpoints, so its length is fixed and measurable.
   (b) **False ❌.** Ray $\overrightarrow{AB}$ starts at $A$ and goes toward $B$, whereas ray $\overrightarrow{BA}$ starts at $B$ and goes toward $A$. They have different starting points and directions.
   (c) **False ❌.** Only one unique straight line passes through two distinct points (Incidence Axiom 3).
   (d) **False ❌.** A line has no endpoints and extends endlessly in both directions; a line segment has two endpoints.
   (e) **False ❌.** Two distinct lines can intersect at most at one point.
   (f) **False ❌.** Three points may or may not lie on the same line (for example, the three vertices of a triangle are non-collinear).
   (g) **True ✅.** A straight line can always pass through any two points.

2. In Euclid's definitions, terms like **"part"** (in point) and **"breadth"** and **"length"** (in line) require further definitions. Defining them introduces even more new terms in an endless chain. Hence, **point, line, and plane** are accepted intuitively as **undefined terms**.

3. Three undefined terms: **point, line, plane.**
   - **Point:** a sharp pencil dot on paper, or a distant star in the night sky.
   - **Line:** a taut string imagined extending forever in both directions.
   - **Plane:** a flat tabletop imagined extending endlessly on all sides.
   *(Any clear real-world example is acceptable.)*

4. (a) **$A, B, C$** (all three lie on the same straight line).
   (b) For example, **$A, B, D$** (or $B, C, D$, or $A, C, D$). Since $D$ is off the line, any group of three points including $D$ is non-collinear.
   (c) **$\overline{AB}$, $\overline{BC}$, $\overline{AC}$**.
   (d) **Ray $\overrightarrow{BC}$** (starts at $B$ and passes through $C$).

5. Any accurate real-world examples work, such as:
   (a) Line segment: a pencil, the edge of a ruler.
   (b) Ray: a flashlight beam, a laser pointer beam.
   (c) Parallel lines: straight railway rails, ruled lines in a notebook.
   (d) Intersecting lines: blades of scissors, a street crossroads.
   (e) Concurrent lines: spokes of a bicycle wheel, ribs of an umbrella.

6. Since $Q$ lies between $P$ and $R$, $PR = PQ + QR = 3.5 + 4.5 = \mathbf{8\text{ cm}}$.
   Check: $3.5 + 4.5 = 8$ ✅

7. Any two of the following:
   - A line has **no endpoints**, whereas a line segment has **two endpoints**.
   - A line has **no fixed length** (cannot be measured), whereas a line segment has a **definite measurable length**.
   - A line extends **endlessly in both directions**, whereas a line segment **stops at its two endpoints**.

8. (a) **Infinitely many** lines. Incidence Axiom 2: infinitely many lines pass through a given point.
   (b) **Exactly one** line. Incidence Axiom 3: one and only one line passes through two distinct points.

---

If this feels like a lot of definitions at once, just remember Toby's "Why?" game: **a few core ideas (point, line, plane) must be accepted without definitions, and every other geometric concept is built cleanly on top of them.** You have got this!

**In the next topic (Topic 3):** We know $1$ point allows infinitely many lines and $2$ points determine exactly $1$ line. What happens with $3$, $4$, or $n$ points? We will explore that counting puzzle next.
