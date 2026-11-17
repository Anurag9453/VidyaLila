# Chapter: Circles (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [circles.md](circles.md).** For angle types and reflex angles, see [Lines and Angles Topic 1](../lines-and-angles/lines-and-angles.md).
> **Topics covered in this file:**
> 2. Degree Measure of an Arc, Minor and Major Arcs, and Alternate Segments

---

# Topic 2: Degree Measure of an Arc, Minor and Major Arcs, and Alternate Segments

In Topic 1, Elena's goat Daisy introduced us to the basics of circles: centre, radius, diameter, chord, arc, segment, sector, and how to tell whether a point lies inside, on, or outside a circle.

Now let us zoom in on **arcs**. How do we measure how "big" an arc is? Which arc is **minor** and which is **major**? And when a chord slices a circle into two segments, what is the relationship between those two pieces?

---

## The Ferris Wheel at the Fair

Maya went to the summer fair with her dad, Dr. Bennett. Right at the entrance stood a towering **Ferris wheel** with **$12$ cabins** spaced evenly around its rim.

Maya climbed into cabin $1$. As the wheel began to turn, she asked her dad:

"Dad, when my seat reaches cabin $4$'s position, how much of a turn around the wheel will I have travelled?"

Dr. Bennett explained:

"One complete turn around the wheel is **$360^\circ$**. With $12$ evenly spaced cabins, the angle between any two neighbouring cabins is $360^\circ \div 12 = \mathbf{30^\circ}$. Moving from cabin $1$ to cabin $4$ spans $3$ gaps, so you turn through **$3 \times 30^\circ = 90^\circ$** — exactly one-quarter of the wheel."

Maya asked, "And up to cabin $7$?"

"That is $6$ gaps, or $6 \times 30^\circ = \mathbf{180^\circ}$ — exactly half a turn, right at the very top opposite where you boarded."

The curved path Maya traced along the rim is an **arc**, and her dad measured that arc in **degrees**. That is exactly what we will learn in this topic.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Arc** | A curved portion of the circumference of a circle | The path from cabin $1$ to cabin $4$ on a Ferris wheel |
| **Central angle** | The angle formed at the centre by joining both endpoints of an arc to the centre | $\angle AOB$ |
| **Degree measure of an arc** | The angular size of an arc, equal to its central angle | If central angle $= 90^\circ$, the arc measures $90^\circ$ |
| **Minor arc** | The shorter arc connecting two points, measuring less than $180^\circ$ | A $90^\circ$ arc |
| **Major arc** | The longer arc connecting two points, measuring more than $180^\circ$ | A $270^\circ$ arc |
| **Semicircle** *(from Topic 1)* | Exactly half of a circle, with degree measure $180^\circ$ | Either arc formed by a diameter |
| **Segment** *(from Topic 1)* | The region bounded by a chord and an arc | A piece cut straight across a round pie |
| **Alternate segment** | The opposite segment lying on the other side of the chord | The alternate segment of a minor segment is the major segment |

---

## Part A: Understanding an Arc in Detail

In Topic 1, we saw that an **arc** is any curved piece of a circle's boundary. Now notice something important:

Choosing any two points **$A$** and **$B$** on a circle divides the circle into **two distinct arcs**:

```
            A
         .  *  .
       .    |    .
      .     |     .
     .      O------* B
      .           .
       .         .
         .  *  .
            C
```

- A shorter path directly from $A$ to $B$ (top-right).
- A longer path going the long way around from $A$ through $C$ to $B$.

Both paths connect $A$ and $B$, yet one is much shorter than the other.

### How Do We Name Them?

- **Shorter arc (minor arc):** Named with just two letters: **$\text{arc } AB$** (or $\widehat{AB}$).
- **Longer arc (major arc):** Using two letters would be ambiguous, so we include a **third point** sitting along the longer path: **$\text{arc } ACB$** (or $\widehat{ACB}$).

That middle letter tells the reader, "Go the long way around through $C$."

> Remember: **$2$ letters = minor arc, $3$ letters = major arc.**

---

## Part B: Central Angle

Join the two endpoints ($A$ and $B$) of an arc to the circle's centre **$O$**, forming two radii **$OA$** and **$OB$**. The angle formed between them at the centre is the **central angle $\angle AOB$**.

```
              A
             *
            /
           /
          /  ) ∠AOB
         O----------* B
```

We say that "**arc $AB$ subtends $\angle AOB$ at the centre**." The word *subtend* simply means that the endpoints of the arc (or chord) form that angle at the specified vertex.

On the Ferris wheel, the hub was the centre $O$, and travelling from cabin $1$ to cabin $4$ swept out a central angle of $90^\circ$.

---

## Part C: Degree Measure of an Arc

Here is the core rule:

> **The degree measure of an arc equals the measure of its central angle.**

If $\angle AOB = 60^\circ$, then **$\text{minor arc } AB = 60^\circ$**.

Notice carefully: the degree measure of an arc is **not** its physical length in centimetres. Instead, it tells us what **fraction** of the full $360^\circ$ circle the arc spans.

| Central angle | Degree measure of arc | Fraction of full circle |
|---|---|---|
| $90^\circ$ | $90^\circ$ | $\frac{1}{4}$ |
| $180^\circ$ | $180^\circ$ | $\frac{1}{2}$ |
| $120^\circ$ | $120^\circ$ | $\frac{1}{3}$ |
| $60^\circ$ | $60^\circ$ | $\frac{1}{6}$ |
| $360^\circ$ | $360^\circ$ | Full circle |

Think of a small bicycle wheel and a giant Ferris wheel. A $90^\circ$ arc on both wheels is **one-quarter** of a full circle — even though the physical arc on the Ferris wheel is metres longer! Degree measure captures the *fraction of the turn*, not the physical length.

---

## Part D: Minor Arc, Semicircle, and Major Arc

Arcs fall into three categories according to their degree measure:

| Type of arc | Degree measure | Examples |
|---|---|---|
| **Minor arc** | **Less than $180^\circ$** | $40^\circ, 90^\circ, 150^\circ$ |
| **Semicircle** | **Exactly $180^\circ$** | Either half formed by a diameter |
| **Major arc** | **More than $180^\circ$** (less than $360^\circ$) | $200^\circ, 270^\circ, 330^\circ$ |

### Major Arc $= 360^\circ - \text{Minor Arc}$

Together, the minor arc and major arc between $A$ and $B$ complete the **entire circle**. Therefore:

$$\text{Minor arc} + \text{Major arc} = 360^\circ$$

$$\text{Major arc } ACB = 360^\circ - \text{minor arc } AB$$

This matches the **reflex angle** formula from [Lines and Angles Topic 1](../lines-and-angles/lines-and-angles.md): the central angle of the major arc is literally the **reflex angle $\angle AOB$**!

```
            A
         .  *  .
       .   /     .            Minor arc AB  -> ∠AOB (smaller angle)
      .   /       .           Major arc ACB -> reflex ∠AOB (larger angle)
     .   O---------* B
      .           .
       .         .
         .  *  .
            C
```

### When Does a Semicircle Form?

When $A$ and $B$ are the **two endpoints of a diameter**, $\angle AOB = 180^\circ$ (a straight line). Both arcs measure **$180^\circ$**, and both are **semicircles**. That is why a diameter divides a circle into two equal semicircles.

---

## Part E: Solved Examples

**Example 1:** Minor arc $AB = 70^\circ$. Find major arc $ACB$.

$$\text{Major arc} = 360^\circ - 70^\circ = \mathbf{290^\circ}$$

Check: $70^\circ + 290^\circ = 360^\circ$ ✅.

**Example 2:** $\angle AOB = 120^\circ$. Find the degree measures of both arcs.

- Minor arc $AB = \mathbf{120^\circ}$
- Major arc $ACB = 360^\circ - 120^\circ = \mathbf{240^\circ}$

**Example 3 (Ferris wheel):** $12$ cabins are spaced equally around the rim.

- Angle between two adjacent cabins: $360^\circ \div 12 = \mathbf{30^\circ}$
- Cabin $1$ to cabin $4$: $3\text{ gaps} \times 30^\circ = \mathbf{90^\circ}$ (minor arc)
- Cabin $1$ to cabin $7$: $6\text{ gaps} \times 30^\circ = \mathbf{180^\circ}$ (semicircle)
- Cabin $1$ to cabin $9$:
  - Going forward: $8\text{ gaps} \times 30^\circ = \mathbf{240^\circ}$ (major arc)
  - Going backward: $4\text{ gaps} \times 30^\circ = \mathbf{120^\circ}$ (minor arc)
  - Check: $240^\circ + 120^\circ = 360^\circ$ ✅.

**Example 4 (clock dial):** A circular clock face has $12$ evenly spaced hour marks ($30^\circ$ per hour step). What is the degree measure of the clockwise arc from mark $12$ to mark $5$?

$5\text{ gaps} \times 30^\circ = \mathbf{150^\circ}$ (minor arc). The anticlockwise arc is $360^\circ - 150^\circ = \mathbf{210^\circ}$ (major arc).

**Example 5:** The minor arc and major arc of a circle are in the ratio $1 : 5$. Find both arcs.

Total parts $= 1 + 5 = 6$. Each part $= 360^\circ \div 6 = 60^\circ$.
- Minor arc $= \mathbf{60^\circ}$
- Major arc $= 5 \times 60^\circ = \mathbf{300^\circ}$

Check: $60^\circ + 300^\circ = 360^\circ$ ✅.

**Example 6:** A major arc is $3$ times its corresponding minor arc. Find both arcs.

Let minor arc $= x$, so major arc $= 3x$.
$$x + 3x = 360^\circ \implies 4x = 360^\circ \implies x = 90^\circ$$
- Minor arc $= \mathbf{90^\circ}$
- Major arc $= \mathbf{270^\circ}$

**Example 7:** Minor arc $= x$ and major arc $= 2x + 30^\circ$. Find $x$.

$$x + 2x + 30^\circ = 360^\circ \implies 3x = 330^\circ \implies \mathbf{x = 110^\circ}$$

Minor arc $= 110^\circ$, major arc $= 2(110^\circ) + 30^\circ = 250^\circ$.
Check: $110^\circ + 250^\circ = 360^\circ$ ✅.

**Example 8:** Points $A, B, C$ lie on a circle such that minor arcs $AB, BC, CA$ together form the full circle. Given $\angle AOB = 100^\circ$ and $\angle BOC = 120^\circ$, find arc $CA$.

$$\text{Arc } CA = 360^\circ - 100^\circ - 120^\circ = \mathbf{140^\circ}$$

---

## Part F: Length of an Arc (Extra / Preview)

*This section looks slightly ahead of the main Class 9 syllabus and will be used heavily in Class 10.*

The degree measure tells us what fraction of the circle an arc represents. To find its **actual length in cm**, multiply that fraction by the full circumference:

> **$\text{Length of an arc} = \dfrac{\theta}{360^\circ} \times 2\pi r$**

where $\theta$ is the arc's degree measure and $r$ is the radius.

**Example 1:** $r = 7\text{ cm}$, $\theta = 90^\circ$ ($\pi = \frac{22}{7}$).
$\text{Circumference} = 2 \times \frac{22}{7} \times 7 = 44\text{ cm}$.
$\text{Arc length} = \frac{90}{360} \times 44 = \frac{1}{4} \times 44 = \mathbf{11\text{ cm}}$.

**Example 2:** $r = 21\text{ cm}$, $\theta = 60^\circ$.
$\text{Circumference} = 2 \times \frac{22}{7} \times 21 = 132\text{ cm}$.
$\text{Arc length} = \frac{60}{360} \times 132 = \frac{1}{6} \times 132 = \mathbf{22\text{ cm}}$.

**Example 3:** $r = 14\text{ cm}$, semicircle ($\theta = 180^\circ$).
$\text{Circumference} = 2 \times \frac{22}{7} \times 14 = 88\text{ cm}$.
$\text{Semicircle arc length} = \frac{1}{2} \times 88 = \mathbf{44\text{ cm}}$.

---

## Part G: Segment and Alternate Segment

In Topic 1, we sliced a round flatbread with a straight cut to meet the word *segment*. Now let us look closely at both pieces.

Make a straight cut across a circular pie (not through the centre, slightly off to one side). The cut is a **chord**, dividing the pie into a **smaller piece** and a **larger piece**:

```
            .  *  .
         .           .
       .     LARGE     .
      .  (major segment) .
     A *-----------------* B      <- chord AB
       .     small     .
          (minor seg.)
            .  *  .
```

- **Minor segment:** the smaller region bounded by the chord and the **minor arc**.
- **Major segment:** the larger region bounded by the chord and the **major arc**.

### Alternate Segment

Now let us give this pair a handy name:

> **The "alternate segment" of one segment is simply the other segment on the opposite side of the chord.**

- Alternate segment of the minor segment = **major segment**
- Alternate segment of the major segment = **minor segment**

Here *alternate* simply means "the one on the other side."

### What If the Chord Is a Diameter?

Then both pieces are **equal** — each is a **semicircular region**, and each is the alternate segment of the other.

### Where Will This Be Used Later?

**In Class 10:** When you study tangents to circles, a famous theorem called the **alternate segment theorem** links a tangent angle to the angle inscribed in the opposite segment. Knowing the phrase *alternate segment* now makes that theorem effortless later!

---

## Part H: Sector vs. Segment (A Quick Reminder)

Both words appeared in Topic 1; here is a quick side-by-side comparison so you never mix them up:

| | Sector | Segment |
|---|---|---|
| Bounded by | **Two radii** and an arc | **One chord** and an arc |
| Includes the centre? | Yes — one vertex sits at the centre | Not necessarily |
| Everyday picture | A wedge-shaped slice of cake cut from the centre | A slice cut straight across a round loaf |
| Minor / major | Minor sector, major sector | Minor segment, major segment |

---

## Common Pitfalls to Avoid

1. **Mistake 1: Confusing degree measure with arc length.**
   A $90^\circ$ arc on a small watch dial and a $90^\circ$ arc on a giant Ferris wheel both have a degree measure of $90^\circ$, even though the Ferris wheel arc is metres longer. Degrees tell you the *fraction* of the circle, not centimetres.

2. **Mistake 2: Naming a major arc with only two letters.**
   Writing "arc $AB$" always refers to the minor arc. For a major arc, always include a third point along the long path: **$\text{arc } ACB$**.

3. **Mistake 3: Subtracting from $180^\circ$ instead of $360^\circ$ to find the major arc.**
   $\text{Major arc} = \mathbf{360^\circ} - \text{minor arc}$, never $180^\circ - \text{minor arc}$. The major arc for $70^\circ$ is $290^\circ$, not $110^\circ$.

4. **Mistake 4: Calling a $180^\circ$ arc minor or major.**
   An arc of exactly $180^\circ$ is a **semicircle**. Minor is strictly under $180^\circ$; major is strictly over $180^\circ$.

5. **Mistake 5: Mixing up segment and sector.**
   Bounded by two radii = **sector**. Bounded by a chord = **segment**.

6. **Mistake 6: Thinking "alternate segments" must be equal.**
   *Alternate* means "on the opposite side of the chord." One can be tiny and the other huge; they are equal only when the chord is a diameter.

7. **Mistake 7: Counting cabins instead of gaps on a Ferris wheel or clock.**
   From cabin $1$ to cabin $4$, there are **$3$ gaps**, not $4$. Always count the spaces between points!

---

## Quick Recap

- Two points $A$ and $B$ divide a circle into a **minor arc** ($2$ letters: $\text{arc } AB$) and a **major arc** ($3$ letters: $\text{arc } ACB$).
- **Central angle:** the angle formed at the centre by joining the arc's endpoints to the centre.
- **Degree measure of an arc $=$ central angle.**
- **Minor arc $< 180^\circ$**, **semicircle $= 180^\circ$**, **major arc $> 180^\circ$**.
- **Major arc $= 360^\circ - \text{minor arc}$** (just like a reflex angle).
- A diameter splits a circle into two **semicircles**.
- *(Preview)* Arc length $= \dfrac{\theta}{360^\circ} \times 2\pi r$.
- A chord splits a circular region into a **minor segment** and a **major segment**, which are each other's **alternate segment**.
- $\text{Sector} = \text{two radii} + \text{arc}$. $\text{Segment} = \text{chord} + \text{arc}$.

---

## Practice Questions

1. If minor arc $AB$ measures $75^\circ$, find the measure of major arc $ACB$.

2. Classify each arc as a minor arc, a semicircle or a major arc:
   (a) $45^\circ$  (b) $180^\circ$  (c) $200^\circ$  (d) $359^\circ$

3. A Ferris wheel has $10$ cabins placed at equal distances.
   (a) Find the angle at the centre between two adjacent cabins.
   (b) Find the arc from cabin $1$ to cabin $4$ (moving forward).
   (c) Find the minor arc between cabin $2$ and cabin $9$.

4. The minor arc and the major arc of a circle are in the ratio $2 : 7$. Find both arcs.

5. Find the length of an arc of a circle of radius $21\text{ cm}$ whose degree measure is $60^\circ$. (Use $\pi = \frac{22}{7}$.)

6. What is the degree measure of each arc into which a diameter divides a circle? What are such arcs called?

7. If $\angle AOB = 140^\circ$, where $O$ is the centre, find the reflex angle $AOB$ and the measure of the major arc $ACB$.

8. State whether each statement is true or false. Give a reason.
   (a) A major arc always measures more than $180^\circ$.
   (b) "Arc $AB$" written with two letters usually means the major arc.
   (c) The alternate segment of the minor segment is the major segment.
   (d) A segment is the region bounded by two radii and an arc.

### Answers

1. $\text{Major arc} = 360^\circ - 75^\circ = \mathbf{285^\circ}$.
   Check: $75^\circ + 285^\circ = 360^\circ$ ✅.

2. (a) $45^\circ < 180^\circ \implies$ **minor arc**
   (b) Exactly $180^\circ \implies$ **semicircle**
   (c) $200^\circ > 180^\circ \implies$ **major arc**
   (d) $359^\circ > 180^\circ \implies$ **major arc**

3. (a) $360^\circ \div 10 = \mathbf{36^\circ}$
   (b) From cabin $1$ to cabin $4$ is $3$ gaps: $3 \times 36^\circ = \mathbf{108^\circ}$
   (c) From cabin $2$ to cabin $9$ going forward is $7$ gaps $= 7 \times 36^\circ = 252^\circ$; going backward is $3$ gaps $= 3 \times 36^\circ = 108^\circ$. The minor arc is the shorter one: **$\mathbf{108^\circ}$**.
   Check: $252^\circ + 108^\circ = 360^\circ$ ✅.

4. Total parts $= 2 + 7 = 9$. Each part $= 360^\circ \div 9 = 40^\circ$.
   Minor arc $= 2 \times 40^\circ = \mathbf{80^\circ}$, major arc $= 7 \times 40^\circ = \mathbf{280^\circ}$.
   Check: $80^\circ + 280^\circ = 360^\circ$ ✅.

5. $\text{Circumference} = 2 \times \frac{22}{7} \times 21 = 132\text{ cm}$.
   $\text{Arc length} = \frac{60}{360} \times 132 = \frac{1}{6} \times 132 = \mathbf{22\text{ cm}}$.

6. The endpoints of a diameter form a $180^\circ$ straight angle at the centre, so each arc measures **$180^\circ$** and is called a **semicircle**.

7. $\text{Reflex } \angle AOB = 360^\circ - 140^\circ = \mathbf{220^\circ}$. Therefore, $\text{major arc } ACB = \text{reflex } \angle AOB = \mathbf{220^\circ}$.

8. (a) **True** ✅. By definition, a major arc measures more than $180^\circ$.
   (b) **False** ❌. Two letters ($\text{arc } AB$) denote the **minor arc**; a major arc uses three letters.
   (c) **True** ✅. The alternate segment is the segment on the opposite side of the chord.
   (d) **False** ❌. A region bounded by two radii and an arc is a **sector**; a segment is bounded by a chord and an arc.

---

Lock in this one key idea: **the degree measure of an arc equals its central angle, and minor and major arcs always add up to $360^\circ$.** Everything else flows directly from there. Well done!

**In the next topic (Topic 3):** When are two circles or two arcs **congruent**, and what remarkable properties govern chords inside a circle?
