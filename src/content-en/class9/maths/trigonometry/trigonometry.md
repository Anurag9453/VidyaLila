# Chapter: Trigonometry

> **Class:** 9 | **Subject:** Mathematics
> **Helpful from earlier chapters:** [Triangles](../triangles/triangles.md) for right-angled triangles and the hypotenuse, and [Pythagoras Theorem](../pythagoras-theorem/pythagoras-theorem.md) for finding a missing third side.
> **Topics covered in this file:**
> 1. Naming the Three Sides of a Right Triangle

---

# Topic 1: Naming the Three Sides of a Right Triangle

In earlier chapters, we got to know the right-angled triangle well: one angle is $90^\circ$, the longest side opposite that angle is the hypotenuse, and the Pythagoras theorem tells us that the sum of the squares of the two shorter sides equals the square of the hypotenuse. Back then, we looked at triangles purely through **the lengths of their sides**.

Now we ask a new question: what about the **angles** of the triangle? This entire chapter rests on one simple idea: pick one acute angle ($\theta$) in a right triangle, and notice what the three sides are **named** relative to that angle. In this first topic, we will master those names. Once they are second nature, everything that follows in trigonometry becomes straightforward.

---

## The Mountain Cable Car

High up in a mountain town, a cable car carries passengers from a base station in the valley to a hilltop station on the ridge. Between the two stations stretches a long, heavy steel cable along which the cabin glides.

The chief engineer, Dr. Bennett, is showing a new trainee, Maya, around the control room on her first morning. He leads her out onto the roof of the base station and points up toward the ridge.

"Maya, see that cable?" Dr. Bennett asks. "We cannot stretch a measuring tape along the mountain cliff, nor can we easily tape-measure the cable itself. Yet I know the exact **vertical height** of the hilltop station and the exact **length** of the cable. How?"

Maya thinks for a moment. "Dr. Bennett, does it have something to do with a triangle?"

"Spot on. Look closely—there are three straight lines forming a triangle:
- **The cable:** running straight from the base station up to the hilltop station.
- **The vertical rise:** how high the hilltop station sits straight above the valley floor.
- **The horizontal ground distance:** the distance along flat ground from the base station to the point directly beneath the hilltop station.

Together, these three form a **right-angled triangle**, because straight up and flat along the ground meet at a $90^\circ$ angle."

Dr. Bennett sketches a quick diagram in his notebook. He labels the base station $A$, the hilltop station $C$, and the point on the ground directly below the hilltop $B$.

```
                 C  (hilltop station)
                /|
               / |
     cable    /  |   vertical rise
    (130 m)  /   |   (50 m)
            /    |
           /θ    |
          A------B
   (base station)
     ground distance 120 m
```

Dr. Bennett asks: "Now, quick question. When you stand at the **bottom at $A$** and look up, which side of this triangle is the cable?"

Maya answers right away: "Side $AC$—the slanted one."

"Good. Now imagine you ride up and stand at the **top at $C$**, looking down. Which side is the cable now?"

Maya pauses for a second. "Still $AC$. That hasn't moved."

"Exactly! The cable's role never changes—it is always the **hypotenuse**. Now for the real twist: when you stand at $A$, the vertical rise $BC$ is **across from** (opposite) your angle $\theta$. What happens to that same vertical rise $BC$ when you stand at $C$?"

Maya thinks carefully. "From $C$, the vertical rise $BC$ touches my corner—it's right **next to** me."

"Well done! That is the whole secret of this topic: **which corner you stand at changes the names of the two shorter sides.** Only the hypotenuse stays the same."

In this topic, we will work through this idea with Maya and Dr. Bennett: what the three names are, how to spot them in any triangle, and when they swap. At the end, we will return to solve the cable car measurements.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Trigonometry** | "Triangle measurement," from the Greek words *tri* (three), *gon* (angle), and *metron* (measure) | Studying how the angles and sides of a right triangle relate |
| **Acute angle ($\theta$)** | An angle measuring less than $90^\circ$, often labelled $\theta$ (theta), $A$, or $B$ | The angle at the base station $A$ |
| **Hypotenuse** | The side opposite the $90^\circ$ angle; always the longest side of the right triangle | The cable $AC$ |
| **Opposite side** | The side directly across from the chosen acute angle (does not touch that angle); also called the perpendicular | From $A$, the vertical rise $BC$ |
| **Adjacent side** | The side next to the chosen acute angle that is *not* the hypotenuse; also called the base | From $A$, the ground distance $AB$ |
| **Reference angle** | The chosen acute angle from which we name the sides | First $A$, then $C$ |

---

## Part A: Why Do We Measure Heights and Distances?

Imagine Maya is asked to measure a few everyday things:
- How tall is that pine tree?
- How high is that radio tower?
- How tall is a mountain ridge?
- How wide is a river when nobody can swim across with a tape measure?

You cannot safely climb to the top of a tall tree or a cliff with a tape measure. Yet surveyors, architects, sailors, and astronomers have measured all of these for thousands of years. How?

**The big idea:** measure one **angle** from the ground (easy to do with a sighting tool) and one **distance** you can actually walk along. Then use the geometry of right triangles to calculate the rest. That entire branch of mathematics is called **trigonometry**.

> **tri** = three, **gon** = angle, **metron** = measure. Trigonometry literally means "the measurement of triangles."

Over the course of this chapter, we will calculate the heights of towers, lengths of kite strings, slopes of wheelchair ramps, and distances to ships at sea—all without climbing anything. But the essential first step is **naming the sides of a right triangle accurately**. Every formula ahead speaks in those three names.

---

## Part B: Three Names for the Three Sides

Take any right-angled triangle. One angle is $90^\circ$, and the other two angles are acute (less than $90^\circ$). Choose **one of those acute angles** and call it $\theta$ (pronounced *theta*).

```
        C
       /|
      / |
     /  |
    /   |
   /θ   |
  A-----B
```

Now let us name all three sides with respect to $\theta$:

**1. Hypotenuse ($AC$):** The side opposite the right angle ($B$). It is always the longest side of the triangle, and it does **not** depend on which acute angle $\theta$ you choose.

**2. Opposite side ($BC$):** The side directly **across from** angle $\theta$ (here $\angle A$). It does not touch vertex $A$ at all.

**3. Adjacent side ($AB$):** The side **next to** angle $\theta$ that is not the hypotenuse. Notice that it connects vertex $A$ ($\theta$) to the right-angle vertex $B$.

A quick way to picture this: **stand right at angle $\theta$.**
- The side across the triangle facing you is the **opposite**.
- The side right beside you running to the $90^\circ$ corner is the **adjacent**.
- The side across from the $90^\circ$ corner is the **hypotenuse**.

| Side name | How to identify it | In $\triangle ABC$ above ($\theta = \angle A$) |
|---|---|---|
| **Hypotenuse** | Opposite the $90^\circ$ angle; longest side | $AC$ |
| **Opposite** | Across from $\theta$ (does not touch $\theta$) | $BC$ |
| **Adjacent** | Touches $\theta$, and is not the hypotenuse | $AB$ |

**Another quick check:** Spot the **hypotenuse** first (opposite the $90^\circ$ angle). Of the two remaining sides, the one touching $\theta$ is the **adjacent**, and the one not touching $\theta$ is the **opposite**.

---

## Part C: Switch the Angle, Swap the Names (The Hypotenuse Never Changes)

Let us return to Dr. Bennett's cable car triangle $\triangle ABC$, right-angled at $B$:
- $\angle A = \theta$ (at the base station)
- $\angle C$ is the other acute angle (at the hilltop station)
- $\angle B = 90^\circ$

**Looking from $A$ ($\theta = \angle A$):**

```
                 C
                /|
               / |
              /  |  <- opposite (BC)
  hypotenuse /   |
     (AC)   /    |
           /θ    |
          A------B
        adjacent (AB)
```

| Side | Viewed from $A$ |
|---|---|
| $AC$ (cable) | **Hypotenuse** |
| $BC$ (vertical rise) | **Opposite** |
| $AB$ (ground distance) | **Adjacent** |

**Looking from $C$ (taking $\angle C$ as the reference angle):**

```
                 C  <- standing here now
                /|
               / |
              /  |  adjacent (BC)
  hypotenuse /   |
     (AC)   /    |
           /     |
          A------B
        opposite (AB)
```

| Side | Viewed from $C$ |
|---|---|
| $AC$ (cable) | **Hypotenuse** (unchanged) |
| $BC$ (vertical rise) | **Adjacent** (now touches $C$) |
| $AB$ (ground distance) | **Opposite** (now across from $C$) |

Compare both viewpoints side by side:

| Side | From $A$ | From $C$ |
|---|---|---|
| $AC$ | Hypotenuse | Hypotenuse |
| $BC$ | Opposite | Adjacent |
| $AB$ | Adjacent | Opposite |

> **Key takeaway:** When you switch from one acute angle to the other, the **opposite and adjacent sides swap roles**. The **hypotenuse never changes**, because the $90^\circ$ angle stays in the same place.

---

## Part D: Identifying Sides in Different Triangles

Triangles can have any vertex letters and can be rotated in any direction on the page. Every time, ask the same three questions:
1. Where is the $90^\circ$ angle? Opposite it is the **hypotenuse**.
2. Which acute angle is the **reference angle**?
3. Of the two remaining sides, the one touching the reference angle is **adjacent**; the other is **opposite**.

### Example 1: $\triangle ABC$, $\angle B = 90^\circ$

```
  C
  |\
  | \
  |  \
  B---A
```

The right angle is at $B$, so the hypotenuse is **$AC$**.
- **From $A$:** opposite $= BC$, adjacent $= AB$, hypotenuse $= AC$.
- **From $C$:** opposite $= AB$, adjacent $= BC$, hypotenuse $= AC$.

**Check:** From $A$, the adjacent side is $AB$; from $C$, $AB$ becomes the opposite side, and $BC$ swaps the other way. The names swapped cleanly ✅.

### Example 2: $\triangle PQR$, $\angle Q = 90^\circ$ (Rotated Triangle, Right Angle at the Top)

```
  P-------Q
   \      |
    \     |
     \    |
      \   |
       \  |
        \ |
         R
```

The right angle is at $Q$, so the hypotenuse is **$PR$** (the slanted side opposite $Q$).
- **From $P$:** opposite $= QR$, adjacent $= PQ$, hypotenuse $= PR$.
- **From $R$:** opposite $= PQ$, adjacent $= QR$, hypotenuse $= PR$.

Notice that $PQ$ is drawn horizontally **at the top** of the page, yet from $P$ it is the **adjacent** side (and from $R$ it is the **opposite** side). Position on the page does not decide the names—the reference angle does.

### Example 3: $\triangle XYZ$, $\angle X = 90^\circ$

```
  Y
  |\
  | \
  |  \
  X---Z
```

The right angle is at $X$, so the hypotenuse is **$YZ$**.
- **From $Y$:** opposite $= XZ$, adjacent $= XY$, hypotenuse $= YZ$.
- **From $Z$:** opposite $= XY$, adjacent $= XZ$, hypotenuse $= YZ$.

Here the right angle is labelled $X$, not $B$. Memorizing "the hypotenuse is always $AC$" would fail here—always look opposite the **$90^\circ$ angle**.

### Example 4: $\triangle LMN$, $\angle N = 90^\circ$ (Hypotenuse at the Top, Right Angle at the Bottom)

```
  L------------M
    \        /
      \    /
        N
```

The right angle is at $N$, so the hypotenuse is **$LM$** (drawn horizontally across the top!).
- **From $L$:** opposite $= MN$, adjacent $= LN$, hypotenuse $= LM$.
- **From $M$:** opposite $= LN$, adjacent $= MN$, hypotenuse $= LM$.

Here the hypotenuse is **horizontal** and both shorter sides are slanted. Even so, the exact same rules work. The myth that "the hypotenuse is always slanted" disappears right here.

### Example 5: $\triangle DEF$, $\angle D = 90^\circ$

```
       E
      /|
     / |
    /  |
   F---D
```

First find the hypotenuse: opposite the right angle $D$ is **$EF$**.
- **From $E$:** opposite $= DF$, adjacent $= DE$, hypotenuse $= EF$.
- **From $F$:** opposite $= DE$, adjacent $= DF$, hypotenuse $= EF$.

**Check:** For each acute angle, the opposite and adjacent sides are always the two legs ($DE$ and $DF$), never the hypotenuse ✅.

---

## Part E: Coordinates and Real-World Objects: Ladder and Wall

### Example 6: A Triangle from Coordinates

Plot the points $O(0, 0)$, $P(4, 0)$, and $Q(4, 3)$ and join them to form $\triangle OPQ$. Segment $OP$ runs horizontally along the $x$-axis, and $PQ$ runs straight up vertically, so $\angle P = 90^\circ$.

```
          Q (4,3)
         /|
        / |
       /  |
      /θ  |
     O----P
   (0,0)  (4,0)
```

The right angle is at $P$, so the hypotenuse is **$OQ$**.

Taking $\theta = \angle O$:
- opposite $= PQ$ (vertical side across from $\theta$)
- adjacent $= OP$ (horizontal side touching $\theta$)
- hypotenuse $= OQ$

Side lengths: $OP = 4$, $PQ = 3$. By the Pythagoras theorem:
$$OQ^2 = 4^2 + 3^2 = 16 + 9 = 25 \implies OQ = \mathbf{5}$$

**Check:** $3^2 + 4^2 = 9 + 16 = 25 = 5^2$ ✅.

If we instead take $\angle Q$ as the reference angle: opposite $= OP$ ($4$), adjacent $= PQ$ ($3$), and the hypotenuse remains $OQ$ ($5$).

### Example 7: A Ladder Against a Wall

A $13\text{ m}$ ladder leans against a vertical wall with its foot $5\text{ m}$ from the base of the wall on level ground. Let $\theta$ be the angle the ladder makes with the ground.

```
   |  wall
   |\
   | \  ladder
   |  \  (13 m)
   |   \
   |    \
   |    θ\
   +------\
    5 m (ground)
```

Since the vertical wall and level ground meet at $90^\circ$, the ladder is the hypotenuse. With $\theta$ at the foot of the ladder on the ground:
- **Hypotenuse** $=$ the ladder ($13\text{ m}$)
- **Opposite** $=$ the height the ladder reaches up the wall (across from $\theta$)
- **Adjacent** $=$ the distance along the ground from the foot to the wall ($5\text{ m}$)

By the Pythagoras theorem, the height up the wall is:
$$\text{height}^2 = 13^2 - 5^2 = 169 - 25 = 144 \implies \text{height} = \mathbf{12\text{ m}}$$

**Check:** $5^2 + 12^2 = 25 + 144 = 169 = 13^2$ ✅.

Notice that if we looked from the **top angle** (between the ladder and the wall), the opposite side would be the $5\text{ m}$ ground distance and the adjacent side would be the $12\text{ m}$ wall height.

### Example 8: $\triangle ABC$, $\angle A = 90^\circ$ (Changing Which Vertex Has the Right Angle)

In $\triangle ABC$, suppose $\angle A = 90^\circ$. Then the hypotenuse is **$BC$**.
- **From $B$:** opposite $= AC$, adjacent $= AB$.
- **From $C$:** opposite $= AB$, adjacent $= AC$.

Look closely at why this example matters: in earlier examples $\angle B$ was $90^\circ$, making $AC$ the hypotenuse. Here $\angle A$ is $90^\circ$, so $BC$ is the hypotenuse instead. The hypotenuse depends on **which angle is $90^\circ$**, never on the letter names!

---

## Part F: Given Two Sides, Finding the Third (Pythagoras Review)

Once you know the side names, you will often be given two sides and asked to find the third. The Pythagoras theorem handles this cleanly, and now we can write it in our new vocabulary:

> $$(\text{hypotenuse})^2 = (\text{opposite})^2 + (\text{adjacent})^2$$

### Example 9: Given Both Shorter Sides ($3$ and $4$)

In $\triangle ABC$, $\angle B = 90^\circ$, $AB = 3$, and $BC = 4$. Find the hypotenuse $AC$.

$$AC^2 = 3^2 + 4^2 = 9 + 16 = 25 \implies AC = \mathbf{5}$$

**Check:** $5^2 = 25 = 9 + 16$ ✅.

### Example 10: Given the Hypotenuse and One Side ($13$ and $5$)

In $\triangle PQR$, $\angle Q = 90^\circ$, $PR = 13$, and $PQ = 5$. Find $QR$.

Here the hypotenuse is $PR$ (opposite the right angle $Q$), so:
$$QR^2 = PR^2 - PQ^2 = 13^2 - 5^2 = 169 - 25 = 144 \implies QR = \mathbf{12}$$

**Check:** $5^2 + 12^2 = 25 + 144 = 169 = 13^2$ ✅.

Taking $P$ as the reference angle: opposite $= QR = 12$, adjacent $= PQ = 5$, and hypotenuse $= PR = 13$.

> The $3\text{-}4\text{-}5$ and $5\text{-}12\text{-}13$ right triangles appear constantly throughout trigonometry—knowing them by sight will save you a lot of time.

---

## Back to the Cable Car Problem

Let us return to Dr. Bennett and Maya's mountain cable car. Dr. Bennett gave Maya two measurements: the cable $AC = 130\text{ m}$ and the vertical rise $BC = 50\text{ m}$. He challenged her: "Find the horizontal ground distance $AB$ yourself."

**Using Pythagoras:**
$$AB^2 = 130^2 - 50^2 = 16{,}900 - 2{,}500 = 14{,}400 \implies AB = \mathbf{120\text{ m}}$$

**Check:** $120^2 + 50^2 = 14{,}400 + 2{,}500 = 16{,}900 = 130^2$ ✅.

Now let us name all three sides from **both stations**:

**Standing at base station $A$ ($\theta = \angle A$):**
- Cable $AC = 130\text{ m}$: **hypotenuse**
- Vertical rise $BC = 50\text{ m}$: **opposite** (across from $\theta$)
- Ground distance $AB = 120\text{ m}$: **adjacent** (next to $\theta$)

**Standing at hilltop station $C$ (reference angle $\angle C$):**
- Cable $AC = 130\text{ m}$: **hypotenuse** (unchanged)
- Vertical rise $BC = 50\text{ m}$: **adjacent** (touches $C$)
- Ground distance $AB = 120\text{ m}$: **opposite** (across from $C$)

Maya fills in the complete summary table:

| Side | Length | From $A$ (base) | From $C$ (hilltop) |
|---|---|---|---|
| Cable $AC$ | $130\text{ m}$ | Hypotenuse | Hypotenuse |
| Vertical rise $BC$ | $50\text{ m}$ | Opposite | Adjacent |
| Ground distance $AB$ | $120\text{ m}$ | Adjacent | Opposite |

Dr. Bennett smiles. "Now you see why I said the cable's role never changes—and why saying 'the opposite side' means nothing until you tell someone **which angle** you are looking from."

---

## Common Pitfalls to Avoid

1. **Mistake 1: Giving the longest side any name other than hypotenuse.**
   Never label the hypotenuse as the "base" or "perpendicular" (adjacent or opposite). The hypotenuse is always opposite the $90^\circ$ angle and is always the longest side. In the cable car problem, the cable is $130\text{ m}$, longer than both $120\text{ m}$ and $50\text{ m}$.

2. **Mistake 2: Swapping the opposite and adjacent sides.**
   In $\triangle ABC$ with $\angle B = 90^\circ$, looking from $\angle A$, the opposite side is $BC$, not $AB$. Check by asking: does this side touch vertex $A$? $BC$ does not touch $A$, so $BC$ is opposite; $AB$ touches $A$, so $AB$ is adjacent.

3. **Mistake 3: Naming sides by how they sit on the page.**
   Thinking "the flat side at the bottom is always adjacent, and the upright side is always opposite" is false. In Example 2, $PQ$ sat horizontally at the top; in Example 4, both legs were slanted. Side names depend **only on the reference angle**, never on orientation.
   - **Correct habit:** Pick the reference angle first, then check which side touches it and which sits across from it.

4. **Mistake 4: Forgetting to update the names when switching angles.**
   From $A$ in the cable car triangle, $BC$ is opposite. If you switch to $C$ and still call $BC$ opposite, that is wrong—from $C$, $BC$ is adjacent. Always pause and ask: "Which angle am I looking from now?"

5. **Mistake 5: Using the $90^\circ$ angle as the reference angle.**
   Opposite and adjacent are defined only for the two **acute angles**. The side opposite the $90^\circ$ angle is simply the hypotenuse.

---

## Quick Recap

- **Trigonometry** means "triangle measurement" (*tri* = three, *gon* = angle, *metron* = measure). It lets us find heights and distances we cannot reach with a measuring tape.
- In a right triangle, choose one acute angle ($\theta$, $A$, or $C$) as your reference angle and name the sides relative to it:
  - **Hypotenuse:** opposite the $90^\circ$ angle (always the longest side).
  - **Opposite (perpendicular):** directly across from the reference angle.
  - **Adjacent (base):** touches the reference angle and is not the hypotenuse.
- Switching between the two acute angles **swaps the opposite and adjacent sides**, while the **hypotenuse never changes**.
- Side names depend on the **reference angle**, not on how the triangle is rotated on the page.
- Given two sides, find the third using Pythagoras: $(\text{hypotenuse})^2 = (\text{opposite})^2 + (\text{adjacent})^2$. Remember the handy triples $3\text{-}4\text{-}5$ and $5\text{-}12\text{-}13$.

---

## Practice Questions

1. In $\triangle ABC$, $\angle B = 90^\circ$. For $\angle A$, name the hypotenuse, the opposite side, and the adjacent side. Then do the same for $\angle C$.

2. In $\triangle PQR$, $\angle R = 90^\circ$. Name the hypotenuse. Then, taking $P$ as the reference angle, name the opposite and adjacent sides.

3. In $\triangle LMN$, $\angle M = 90^\circ$. Taking $\angle N$ as the reference angle, name the opposite side, the adjacent side, and the hypotenuse.

4. The points $A(0, 0)$, $B(12, 0)$, and $C(12, 5)$ are joined to form $\triangle ABC$.
   (a) Which angle is the right angle?
   (b) Name the hypotenuse and find its length.
   (c) Taking $\angle A$ as $\theta$, name the opposite and adjacent sides and give their lengths.

5. A $25\text{ m}$ ladder stands against a vertical wall with its foot $7\text{ m}$ from the wall on level ground. Taking the angle at the ground as $\theta$:
   (a) Which side is the hypotenuse?
   (b) Name the opposite and adjacent sides.
   (c) How high up the wall does the ladder reach?

6. In a right triangle, the two sides meeting at the right angle are $6\text{ cm}$ and $8\text{ cm}$. Find the hypotenuse. If the angle opposite the $6\text{ cm}$ side is $\theta$, name the $6\text{ cm}$ side and the $8\text{ cm}$ side with respect to $\theta$.

7. Sophia says: "In every right triangle, the horizontal side is the adjacent side and the vertical side is the opposite side." Point out her mistake using an example.

8. State True or False:
   (a) The hypotenuse is always the longest side of a right triangle.
   (b) If a side is "opposite" for $\angle A$, it is also "opposite" for $\angle C$.
   (c) The hypotenuse is the same whether we look from $\angle A$ or from $\angle C$.
   (d) In a right triangle, we define opposite and adjacent sides only for the two acute angles.

### Answers

1. Opposite the right angle $B$ is $AC$, so the hypotenuse is **$AC$** (for both angles).
   - **From $\angle A$:** opposite $= \mathbf{BC}$, adjacent $= \mathbf{AB}$.
   - **From $\angle C$:** opposite $= \mathbf{AB}$, adjacent $= \mathbf{BC}$.
   Check: The names for $A$ and $C$ swapped, and the hypotenuse stayed $AC$ ✅.

2. The right angle is at $R$, so the hypotenuse is **$PQ$** (opposite $R$).
   From $\angle P$: opposite $= \mathbf{QR}$ (does not touch $P$), adjacent $= \mathbf{PR}$ (touches $P$ and is not the hypotenuse).
   Check: Both $PQ$ and $PR$ touch $P$, and $PQ$ is the hypotenuse, so $PR$ must be the adjacent side ✅.

3. The right angle is at $M$, so the hypotenuse is **$LN$**.
   From $\angle N$: opposite $= \mathbf{LM}$ (does not touch $N$), adjacent $= \mathbf{MN}$ (touches $N$ and is not the hypotenuse).

4. (a) Segment $AB$ from $A(0,0)$ to $B(12,0)$ is horizontal, and $BC$ from $B(12,0)$ to $C(12,5)$ is vertical, so **$\angle B = 90^\circ$**.
   (b) The hypotenuse (opposite $\angle B$) is **$AC$**.
       $$AC^2 = 12^2 + 5^2 = 144 + 25 = 169 \implies AC = \mathbf{13}$$
       Check: $13^2 = 169$ ✅.
   (c) From $\angle A$: opposite $= \mathbf{BC = 5}$, adjacent $= \mathbf{AB = 12}$.

5. (a) The **ladder** is the hypotenuse (opposite the $90^\circ$ corner between the wall and the ground): **$25\text{ m}$**.
   (b) With $\theta$ at the foot of the ladder on the ground: opposite $=$ **the height the ladder reaches up the wall**; adjacent $=$ **the distance along the ground from the foot to the wall ($7\text{ m}$)**.
   (c) $\text{height}^2 = 25^2 - 7^2 = 625 - 49 = 576 \implies \text{height} = \mathbf{24\text{ m}}$.
       Check: $7^2 + 24^2 = 49 + 576 = 625 = 25^2$ ✅.

6. $\text{hypotenuse}^2 = 6^2 + 8^2 = 36 + 64 = 100 \implies \text{hypotenuse} = \mathbf{10\text{ cm}}$.
   Since $\theta$ is opposite the $6\text{ cm}$ side, the $6\text{ cm}$ side is the **opposite** side to $\theta$. The $8\text{ cm}$ side touches $\theta$ and is not the hypotenuse, so it is the **adjacent** side.
   Check: $6^2 + 8^2 = 100 = 10^2$ ✅.

7. Sophia named the sides by their position on the page (horizontal or vertical), whereas side names depend on the reference angle. For instance, in Example 2 ($\triangle PQR$, $\angle Q = 90^\circ$), $PQ$ is horizontal at the top: from $\angle P$ it is the **adjacent** side, but from $\angle R$ the very same horizontal side $PQ$ becomes the **opposite** side! Also, in a rotated triangle like Example 4, neither leg is horizontal or vertical.

8. (a) **True** ✅. The hypotenuse lies opposite the $90^\circ$ angle and is always the longest side.
   (b) **False** ❌. The side opposite $\angle A$ touches $\angle C$, so for $\angle C$ it is the **adjacent** side.
   (c) **True** ✅. The hypotenuse is determined by the $90^\circ$ angle, regardless of whether we look from $\angle A$ or $\angle C$.
   (d) **True** ✅. Opposite and adjacent are only defined for the two acute angles; the $90^\circ$ angle sits opposite the hypotenuse.

---

Maya has mastered the first skill of trigonometry: whenever you see a right triangle, first locate the $90^\circ$ angle (to find the hypotenuse), then pick your reference angle, and finally name the opposite and adjacent sides. Dr. Bennett nodded with approval: "Great start today. Tomorrow we will begin comparing these sides by dividing them."

**What's next?** In the cable car triangle, the cable is $130\text{ m}$, the vertical rise is $50\text{ m}$, and the ground distance is $120\text{ m}$. When we divide one side by another (for example, $\text{opposite} \div \text{hypotenuse}$), something remarkable happens. In Topic 2, we will name those side ratios: **$\sin$**, **$\cos$**, and **$\tan$**.
