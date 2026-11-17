# Chapter: Triangles (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [triangles.md](triangles.md).** Results from *Lines and Angles* ([linear pair](../lines-and-angles/lines-and-angles-part2.md) and [parallel lines](../lines-and-angles/lines-and-angles-part3.md)) will be put to work here.
> **Topics covered in this file:**
> 2. Some Terms Related to a Triangle (Median, Altitude, Incentre, Circumcentre), Angle Sum, and Exterior and Interior Opposite Angles

---

# Topic 2: Special Terms Related to a Triangle, Angle Sum Property, and Exterior Angle

In Topic 1, we got to know the triangle: its sides, vertices, and angles, notation like $\triangle ABC$, and how to identify opposite sides and angles. We classified triangles by **sides** (scalene, isosceles, equilateral) and by **angles** (acute-angled, right-angled, obtuse-angled), and calculated their perimeters.

Topic 1 also made two promises:
1. Why can a triangle have **at most one right or obtuse angle**?
2. Why is every angle of an equilateral triangle **exactly $60^\circ$**?

In this topic, we deliver on both promises! Along the way, we will uncover four special lines and four special centres hidden inside every triangle, and explore the **exterior angle** formed outside a triangle.

---

## The Cardboard Triangle Story

**Elena** cuts a large triangle out of stiff poster board for an architecture model. For fun, she tries to balance the flat triangle on the sharp tip of a pencil, like a circus performer spinning a plate.

First she places the pencil near a corner — the triangle tips right off. Next she tries guessing somewhere near the middle — it tilts and slides off again.

Her older sister **Maya**, an engineering student, steps over with a ruler: *"Hold on — geometry has a trick for this."*

- Maya marks the **midpoint** of all three edges.
- From each corner, she draws a straight line to the midpoint of the opposite edge.
- Amazingly, all three lines **cross at one exact point**!

Elena sets the pencil tip directly under that intersection point — and the cardboard triangle **balances horizontally, completely steady**!

That magic balance point is called the **centroid**, and the three lines Maya drew are called **medians**. In this topic, we will learn four special lines like that — and the four remarkable centres they create.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Median** | Line segment from a vertex to the **midpoint** of the opposite side | $AD$ from $A$ to midpoint $D$ of $BC$ |
| **Centroid ($G$)** | Point where the three medians intersect; the triangle's balance point | The exact balance spot under Elena's triangle |
| **Altitude** | Line segment from a vertex **perpendicular ($90^\circ$)** to the opposite side (or its extension) | Straight vertical height $AL \perp BC$ |
| **Orthocentre ($H$)** | Point where the three altitudes intersect | Vertex of the $90^\circ$ angle in a right triangle |
| **Perpendicular bisector** | Line passing through a side's midpoint at **$90^\circ$** to that side | Upright perpendicular line at midpoint of $BC$ |
| **Circumcentre ($O$)** | Point where the three perpendicular bisectors meet; equidistant from all **three vertices** | Centre of a circle passing through $A, B, C$ |
| **Angle bisector** | Line/segment that divides an interior angle into **two equal halves** | Ray splitting $\angle A$ into two equal parts |
| **Incentre ($I$)** | Point where the three angle bisectors meet; equidistant from all **three sides** | Centre of the largest circle fitting inside $\triangle ABC$ |
| **Concurrent** | Three or more lines passing through **one single point** ([Euclid's Geometry, Topic 2](../euclids-geometry/euclids-geometry-part2.md)) | The three medians of a triangle are concurrent |
| **Exterior angle** | Angle formed **outside** a triangle when one side is extended | $\angle PRS$ when side $QR$ is extended to $S$ |
| **Interior opposite angles** | The two interior angles **away from** the exterior angle | $\angle P$ and $\angle Q$ for exterior angle $\angle PRS$ |

---

## Part A: Median and Centroid

### What Is a Median?

A line segment joining a vertex of a triangle to the **midpoint of the opposite side** is called a **median**.

```
            A
           /|\
          / | \
         /  |  \
        /   |   \
       /    |    \
      B-----D-----C
         BD = DC
```

Here $D$ is the midpoint of $BC$ ($BD = DC$), so **$AD$ is a median**.

Every triangle has **three vertices**, so every triangle has **three medians** — one from $A$, one from $B$, and one from $C$.

### Centroid: Where the Three Medians Meet

All three medians of any triangle are always concurrent — they meet at **one single point** called the **centroid**, usually denoted **$G$**.

Three key properties of the centroid:

1. **Centre of balance:** A flat cutout of the triangle balances perfectly at $G$ (just like Elena's poster-board triangle).
2. **Always inside:** Whether the triangle is acute, right, or obtuse, its centroid **always lies inside** the triangle.
3. **The $2 : 1$ split:** The centroid divides every median in the ratio **$2 : 1$** — the portion toward the vertex is $2$ parts long, and the portion toward the side is $1$ part long.

```
      A
      |
      |   AG = 2 parts
      |
      G
      |   GD = 1 part
      D
```

**Example:** Median $AD = 9\text{ cm}$ and $G$ is the centroid. Find $AG$ and $GD$.

Split $AD$ into $2 + 1 = 3$ equal parts. One part $= 9 \div 3 = 3\text{ cm}$.
- **$AG$** $= 2 \times 3 = \mathbf{6\text{ cm}}$
- **$GD$** $= 1 \times 3 = \mathbf{3\text{ cm}}$

Check: $6 + 3 = 9$ ✅, and $6 : 3 = 2 : 1$ ✅

*(The proof of this $2 : 1$ property comes in higher classes; for Class 9, remember it as a key geometric fact.)*

---

## Part B: Altitude and Orthocentre

### What Is an Altitude?

A line segment drawn from a vertex **perpendicular ($90^\circ$)** to the opposite side (or the line containing the opposite side) is called an **altitude** (height).

```
            A
           /|\
          / | \
         /  |  \
        /   |   \
       /    |90°  \
      B-----L------C
          AL ⊥ BC
```

Here $AL$ stands upright at $90^\circ$ to $BC$, so **$AL$ is an altitude**.

In architecture, if you stand beneath a pitched roof gable, a weighted plumb line dropped **straight down ($90^\circ$)** from the peak to the floor measures the true **altitude (height)** — never a slanted rafter!

**Difference between a median and an altitude:**
- A **median** connects a vertex to the **midpoint** of the opposite side.
- An **altitude** drops from a vertex at **$90^\circ$** to the opposite side.

In an ordinary triangle, they are two different lines! Only in special symmetric triangles (such as equilateral triangles) do they line up along the exact same segment.

### Orthocentre: Where the Three Altitudes Meet

The three altitudes (extended if needed) always intersect at **one single point** called the **orthocentre**, denoted **$H$**.

Where the orthocentre lands depends on the angles of the triangle:

| Type of Triangle | Location of Orthocentre ($H$) |
|---|---|
| **Acute-angled** triangle | **Inside** the triangle |
| **Right-angled** triangle | **At the right-angle vertex** |
| **Obtuse-angled** triangle | **Outside** the triangle |

**Why at the vertex in a right triangle?** In a right triangle, the two legs already meet at $90^\circ$! That means each leg serves as the altitude to the other leg, so all three altitudes meet right at the $90^\circ$ corner.

**Why outside in an obtuse triangle?** To drop a $90^\circ$ line from either of the two acute corners, you have to **extend the opposite side outward** past the triangle, causing the extended altitudes to meet outside the triangle.

---

## Part C: Perpendicular Bisector and Circumcentre

### What Is a Perpendicular Bisector?

A line that passes through the **midpoint of a side** and is **perpendicular ($90^\circ$)** to that side is called the **perpendicular bisector** of that side.

- *"Bisector"* $=$ cuts the side into two equal halves
- *"Perpendicular"* $=$ meets the side at $90^\circ$

```
            |
            |
     B------M------C
            |
            |
   BM = MC, and the line meets BC at 90°
```

**Important:** A perpendicular bisector **does not necessarily pass through the opposite vertex** — it simply rises straight out of the side's midpoint at $90^\circ$.

### Circumcentre: Where the Three Perpendicular Bisectors Meet

The perpendicular bisectors of all three sides are concurrent at **one single point** called the **circumcentre**, denoted **$O$**.

**Key property:** The circumcentre is **equidistant from all three vertices** of the triangle:

$$OA = OB = OC$$

Therefore, placing your compass at $O$ with radius $OA$ draws a circle that passes cleanly through all three corners $A, B,$ and $C$! That circle is called the **circumcircle**, and $OA = OB = OC$ is the **circumradius**.

**Civil engineering application:** Suppose three towns $A, B,$ and $C$ want to build a single regional water tower or ambulance depot **at the exact same distance from all three towns**. The engineers locate it at the **circumcentre** of $\triangle ABC$!

Where does the circumcentre lie?

| Type of Triangle | Location of Circumcentre ($O$) |
|---|---|
| **Acute-angled** triangle | **Inside** the triangle |
| **Right-angled** triangle | **At the midpoint of the hypotenuse** |
| **Obtuse-angled** triangle | **Outside** the triangle |

**Example:** The hypotenuse of a right triangle measures $10\text{ cm}$. What is its circumradius?

In a right triangle, the circumcentre sits at the midpoint of the hypotenuse. Hence, circumradius $= \frac{1}{2} \times 10 = \mathbf{5\text{ cm}}$.

---

## Part D: Angle Bisector and Incentre

### What Is an Angle Bisector?

A line segment or ray that divides an interior angle into **two equal halves** is an **angle bisector** (introduced in *Lines and Angles, Topic 1*).

For instance, if $\angle A = 70^\circ$, its angle bisector splits it into $35^\circ$ and $35^\circ$.

### Incentre: Where the Three Angle Bisectors Meet

The internal angle bisectors of all three angles meet at **one single point** called the **incentre**, denoted **$I$**.

**Key property:** The incentre is **equidistant from all three sides** of the triangle.

Therefore, placing your compass at $I$ lets you draw the largest possible circle completely inside the triangle that **just touches all three sides** without crossing them. This circle is called the **incircle**.

**Landscape design application:** A landscape architect wants to install the largest circular fountain inside a triangular plaza so its stone rim touches all three walkways. The centre of that fountain sits at the **incentre**!

The incentre **always lies inside** the triangle — regardless of whether the triangle is acute, right, or obtuse.

```
            A
           / \
          /   \
         /  I  \      I is equidistant from all three sides
        /       \
       B---------C
```

---

## Part E: All Four Centres at a Glance

Keeping all four centres straight takes practice, so bookmark this comparison table:

| Centre | Meeting Point Of | Key Property | Acute | Right | Obtuse |
|---|---|---|---|---|---|
| **Centroid ($G$)** | Medians | Balance point; splits each median $2 : 1$ | Inside | Inside | Inside |
| **Orthocentre ($H$)** | Altitudes | Intersection of $90^\circ$ heights | Inside | At right-angle vertex | Outside |
| **Circumcentre ($O$)** | Perpendicular bisectors | Equidistant from **vertices**; centre of circumcircle | Inside | Midpoint of hypotenuse | Outside |
| **Incentre ($I$)** | Angle bisectors | Equidistant from **sides**; centre of incircle | Inside | Inside | Inside |

**Memory hooks:**
- **M**edian $\implies$ centroi**d** (balance point; "**M**iddle of the side")
- **A**ltitude $\implies$ **O**rthocentre (*ortho-* means upright/perpendicular, $90^\circ$)
- **C**ircumcentre $\implies$ outer **C**ircle touching the **vertices**
- **I**ncentre $\implies$ **I**nside circle touching the **sides**

### Equilateral Triangle: Everything at One Point

In an **equilateral triangle**, all three sides and all three angles are completely identical. Because of this perfect symmetry, from every vertex:
- the median (to the midpoint),
- the altitude ($90^\circ$ to the opposite side),
- the angle bisector (halving the angle), and
- the perpendicular bisector of the opposite side

all lie along **the exact same line**! Consequently, all four centres (**$G, H, O,$ and $I$**) merge into **one single point**.

---

## Part F: Angle Sum Property ($180^\circ$)

Now it is time to fulfil the two promises we made back in Topic 1!

### First, a Paper-Tearing Activity

1. Cut any triangle out of a sheet of paper.
2. Label its three corners $1, 2,$ and $3$.
3. Carefully **tear off** all three corners.
4. Draw a straight line on your desk and place all three torn corners **side by side**, with their tips touching at a single point.

```
        \  2  /
       1 \   / 3
   -------\-/-------
           *
```

All three corners fit together seamlessly to form **one flat straight line** — **$180^\circ$**! Try this with tall skinny triangles, wide flat triangles, or right triangles: every single time, the three corners form a straight line.

### Theorem: The Sum of the Angles of a Triangle Is $180^\circ$

Let us prove this universal rule using the parallel-line results we proved earlier!

**Given:** $\triangle PQR$ with interior angles $\angle P, \angle Q,$ and $\angle R$.

**To prove:** $\angle P + \angle Q + \angle R = 180^\circ$

**Construction:** Through vertex $P$, draw a line $XPY$ **parallel to $QR$**.

```
   X --------- P --------- Y
              / \
             /   \
            /     \
           /       \
          Q---------R
```

**Proof:**

| Statement | Reason |
|---|---|
| $\angle XPQ = \angle PQR$ ($\angle Q$) | $XY \parallel QR$ with transversal $PQ$ $\implies$ **alternate interior angles** are equal |
| $\angle YPR = \angle PRQ$ ($\angle R$) | $XY \parallel QR$ with transversal $PR$ $\implies$ **alternate interior angles** are equal |
| $\angle XPQ + \angle QPR + \angle YPR = 180^\circ$ | Angles forming a straight line along $XY$ sum to $180^\circ$ |
| $\angle Q + \angle P + \angle R = 180^\circ$ | Substituting the first two equations into the third |

**Hence proved.**

Look how smoothly our earlier chapters connect: alternate interior angles from [Lines and Angles, Topic 3](../lines-and-angles/lines-and-angles-part3.md) plus straight-line angles from [Topic 2](../lines-and-angles/lines-and-angles-part2.md) lock together to prove one of geometry's greatest theorems!

### Promise 1: Why Can a Triangle Have at Most One Right or Obtuse Angle?

Suppose a triangle tried to have two right angles: $90^\circ + 90^\circ = 180^\circ$. Since all three angles must total $180^\circ$, the third angle would be forced down to **$0^\circ$** — collapsing the triangle flat!

And if one angle were obtuse (say $100^\circ$) and another right ($90^\circ$), their sum $100^\circ + 90^\circ = 190^\circ$ would already exceed $180^\circ$ before adding the third angle. **Impossible!**

Therefore, a triangle can have **at most one** right angle or obtuse angle; the other two angles are **always acute**.

### Promise 2: Why Is Every Angle of an Equilateral Triangle $60^\circ$?

All three angles of an equilateral triangle are equal (noted in Topic 1; proved in [Congruence of Triangles, Topic 3](../congruence-of-triangles/congruence-of-triangles-part3.md)). Let each angle equal $x$.

$$x + x + x = 180^\circ \implies 3x = 180^\circ \implies \mathbf{x = 60^\circ}$$

Hence, every angle of an equilateral triangle is **always $60^\circ$**.

### Another Immediate Result: The Two Acute Angles of a Right Triangle

In a right triangle, one angle uses up $90^\circ$. The remaining two angles must share $180^\circ - 90^\circ = \mathbf{90^\circ}$.

Thus, the two acute angles of a right triangle are always **complementary** ([Lines and Angles, Topic 2](../lines-and-angles/lines-and-angles-part2.md)).

**Example:** One acute angle of a right triangle is $35^\circ$. Find the other.
$90^\circ - 35^\circ = \mathbf{55^\circ}$
Check: $90 + 35 + 55 = 180$ ✅

---

## Part G: Exterior Angle and Interior Opposite Angles

### What Is an Exterior Angle?

Extend any one side of a triangle outward. The angle formed **outside** the triangle between the extended side and the neighbouring side is called an **exterior angle**.

```
            P
           / \
          /   \
         /     \
        /       \
       Q---------R------S
                  ∠PRS = exterior angle
```

Here, side $QR$ is extended to $S$, forming exterior angle $\angle PRS$.

**Interior opposite angles:** Inside the triangle, $\angle PRQ$ sits right next to $\angle PRS$. The other two interior angles — **$\angle P$ and $\angle Q$** — sit away from $\angle PRS$ and are called its **interior opposite angles**.

Picture walking along straight road $QRS$ past $R$: vertex $R$ is right beside you, while corners $P$ and $Q$ are **behind you and across the triangle** — those two are the interior opposite angles.

### Theorem: Exterior Angle $=$ Sum of the Two Interior Opposite Angles

$$\angle PRS = \angle P + \angle Q$$

**Proof:**

| Statement | Reason |
|---|---|
| $\angle PRQ + \angle PRS = 180^\circ$ | $QS$ is a straight line $\implies$ **linear pair** |
| $\angle P + \angle Q + \angle PRQ = 180^\circ$ | **Angle sum property** of $\triangle PQR$ (Part F) |
| $\angle PRQ + \angle PRS = \angle P + \angle Q + \angle PRQ$ | Both expressions equal $180^\circ$ |
| $\angle PRS = \angle P + \angle Q$ | Subtract $\angle PRQ$ from both sides |

**Hence proved.**

**Example:** $\angle P = 50^\circ$ and $\angle Q = 60^\circ$. Find the exterior angle $\angle PRS$.
$\angle PRS = 50^\circ + 60^\circ = \mathbf{110^\circ}$
Check: $\angle PRQ = 180 - 50 - 60 = 70^\circ$, and $70^\circ + 110^\circ = 180^\circ$ (linear pair) ✅

### Direct Consequence: An Exterior Angle Is Greater Than Either Interior Opposite Angle

Since $\angle PRS = \angle P + \angle Q$ and both $\angle P$ and $\angle Q$ are positive angles:
- $\angle PRS > \angle P$
- $\angle PRS > \angle Q$

For instance, $110^\circ > 50^\circ$ and $110^\circ > 60^\circ$.

### Sum of All Three Exterior Angles (A Quick Peek)

Extend all three sides in order (going around the triangle in one direction) to form one exterior angle at each vertex. Each exterior angle equals $180^\circ$ minus its adjacent interior angle.

Sum of all three exterior angles $= (180^\circ - \angle P) + (180^\circ - \angle Q) + (180^\circ - \angle R)$
$$= 540^\circ - (\angle P + \angle Q + \angle R) = 540^\circ - 180^\circ = \mathbf{360^\circ}$$

**Example:** Suppose the interior angles are $50^\circ, 60^\circ, 70^\circ$. Their exterior angles are $130^\circ, 120^\circ, 110^\circ$.
$130 + 120 + 110 = \mathbf{360^\circ}$ ✅

Think of walking all the way around a triangular city block: turning once past each corner brings you facing your starting direction — one full **$360^\circ$** turn!

---

## Part H: Solved "Find $x$" Examples

**Example 1: The angles of a triangle are in the ratio $2 : 3 : 4$. Find the angles.**
Let the angles be $2k, 3k, 4k$.
$2k + 3k + 4k = 180^\circ \implies 9k = 180^\circ \implies k = 20^\circ$.
Angles: **$40^\circ, 60^\circ, 80^\circ$**.
Check: $40 + 60 + 80 = 180$ ✅ (All three are acute, so this is an acute-angled triangle.)

**Example 2: The angles are $(2x + 10)^\circ$, $(3x + 5)^\circ,$ and $(x + 15)^\circ$. Find $x$ and all angles.**
$(2x + 10) + (3x + 5) + (x + 15) = 180$
$6x + 30 = 180 \implies 6x = 150 \implies \mathbf{x = 25}$
Angles: $2(25) + 10 = \mathbf{60^\circ}$, $3(25) + 5 = \mathbf{80^\circ}$, $25 + 15 = \mathbf{40^\circ}$.
Check: $60 + 80 + 40 = 180$ ✅

**Example 3: One angle is $3$ times the smallest angle, and the third angle is $20^\circ$ more than the smallest angle.**
Let the smallest angle $= x$. Then the angles are $x, 3x,$ and $x + 20$.
$x + 3x + x + 20 = 180 \implies 5x = 160 \implies \mathbf{x = 32}$.
Angles: **$32^\circ, 96^\circ, 52^\circ$**.
Check: $32 + 96 + 52 = 180$ ✅ (Since $96^\circ$ is obtuse, this is an obtuse-angled triangle.)

**Example 4: Two angles of a triangle are equal, and the third angle is $40^\circ$. Find the equal angles.**
$x + x + 40 = 180 \implies 2x = 140 \implies \mathbf{x = 70^\circ}$.
Angles: **$70^\circ, 70^\circ, 40^\circ$**.

**Example 5: An exterior angle is $110^\circ$ and one interior opposite angle is $45^\circ$. Find the remaining angles.**
By the exterior angle theorem: $110^\circ = 45^\circ + (\text{other interior opposite angle})$.
Other interior opposite angle $= 110^\circ - 45^\circ = \mathbf{65^\circ}$.
Adjacent interior angle $= 180^\circ - 110^\circ = \mathbf{70^\circ}$ (linear pair).
Angles of the triangle: **$45^\circ, 65^\circ, 70^\circ$**.
Check: $45 + 65 + 70 = 180$ ✅

**Example 6: An exterior angle is $105^\circ$, and its two interior opposite angles are $x$ and $2x$.**
$x + 2x = 105 \implies 3x = 105 \implies \mathbf{x = 35}$.
Interior opposite angles: **$35^\circ$** and **$70^\circ$**.
Third angle $= 180^\circ - 105^\circ = \mathbf{75^\circ}$.
Check: $35 + 70 + 75 = 180$ ✅

**Example 7: An exterior angle is $120^\circ$, and its interior opposite angles are in the ratio $1 : 2$.**
$k + 2k = 120 \implies 3k = 120 \implies k = 40$.
Interior opposite angles: **$40^\circ$** and **$80^\circ$**. Third angle $= 180^\circ - 120^\circ = \mathbf{60^\circ}$.
Check: $40 + 80 + 60 = 180$ ✅

**Example 8: Can $90^\circ, 60^\circ, 40^\circ$ be the angles of a triangle?**
$90 + 60 + 40 = 190 \neq 180$. **No**, they cannot form a triangle.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Confusing median with altitude.**
   A median lands on the **midpoint** of the opposite side; an altitude meets the opposite side at **$90^\circ$**. In a general triangle, they are different segments.

2. **Mistake 2: Starting a perpendicular bisector from a vertex.**
   A perpendicular bisector rises at $90^\circ$ from a side's **midpoint** — it usually does *not* pass through the opposite vertex.

3. **Mistake 3: Mixing up circumcentre and incentre.**
   - **Circumcentre ($O$):** equidistant from the **vertices** (draws the outer circle passing through the corners).
   - **Incentre ($I$):** equidistant from the **sides** (draws the inner circle touching the edges).

4. **Mistake 4: Writing the centroid's $2 : 1$ ratio backwards.**
   The longer segment ($2$ parts) runs from the **vertex to the centroid**. If $AD = 9$, then $AG = 6$ and $GD = 3$ — never $AG = 3$.

5. **Mistake 5: Including the adjacent interior angle in the exterior angle sum.**
   An exterior angle equals the sum of the **two far (interior opposite)** angles. The interior angle *right beside* it forms a $180^\circ$ linear pair with it — do not add it!

6. **Mistake 6: Assuming the orthocentre and circumcentre are always inside the triangle.**
   In an **obtuse-angled triangle**, both the orthocentre and the circumcentre lie **outside** the triangle! In a **right triangle**, the orthocentre sits on the right-angle vertex and the circumcentre sits on the midpoint of the hypotenuse.

7. **Mistake 7: Stopping right after solving for $x$.**
   If the problem asks for *"each angle,"* plug $x$ back in, list all three angles, and verify their sum is $180^\circ$.

---

## Quick Recap

- **Median:** vertex to opposite side's midpoint. Meet at **centroid ($G$)**, the balance point; $G$ splits each median **$2 : 1$** from the vertex.
- **Altitude:** vertex at $90^\circ$ to opposite side. Meet at **orthocentre ($H$)**.
- **Perpendicular bisector:** $90^\circ$ at a side's midpoint. Meet at **circumcentre ($O$)**, equidistant from vertices (**circumcircle**).
- **Angle bisector:** halves an interior angle. Meet at **incentre ($I$)**, equidistant from sides (**incircle**).
- Centroid and incentre are **always inside**. Orthocentre and circumcentre are inside for acute triangles, at the right-angle vertex / hypotenuse midpoint for right triangles, and **outside** for obtuse triangles.
- In an equilateral triangle, **all four centres coincide at one point**.
- **Angle sum property:** $\angle A + \angle B + \angle C = \mathbf{180^\circ}$.
- Consequences: at most **one** right or obtuse angle; each angle of an equilateral triangle is **$60^\circ$**; the two acute angles of a right triangle are **complementary**.
- **Exterior angle theorem:** exterior angle $=$ sum of the two **interior opposite angles**, and is strictly greater than either of them.
- Sum of the three exterior angles (one at each vertex) $= \mathbf{360^\circ}$.

---

## Practice Questions

1. Fill in the blanks:
   (a) The point where the three medians of a triangle meet is called the ________.
   (b) The point where the three altitudes meet is called the ________.
   (c) The point where the perpendicular bisectors of the sides meet is called the ________.
   (d) The point where the angle bisectors meet is called the ________.

2. Where does each point lie?
   (a) The orthocentre of a right triangle.
   (b) The circumcentre of an obtuse triangle.
   (c) The incentre of an obtuse triangle.

3. In $\triangle ABC$, $AD$ is a median and $G$ is the centroid. If $AD = 12\text{ cm}$, find $AG$ and $GD$.

4. The hypotenuse of a right triangle is $13\text{ cm}$. Find the radius of its circumcircle.

5. The angles of a triangle are in the ratio $3 : 4 : 5$. Find the angles.

6. The angles of a triangle are $(x + 20)^\circ$, $(2x - 10)^\circ,$ and $(x + 30)^\circ$. Find $x$ and each angle.

7. An exterior angle of a triangle is $130^\circ$ and one of its interior opposite angles is $60^\circ$. Find the other two angles of the triangle.

8. An exterior angle of a triangle is $100^\circ$ and the two interior opposite angles are equal. Find all the angles of the triangle.

9. Can a triangle have:
   (a) two right angles?
   (b) all three angles equal to $60^\circ$?
   (c) all three angles acute?
   (d) two obtuse angles?
   Give a reason for each.

10. One acute angle of a right triangle is $28^\circ$. Find the other acute angle.

### Answers

1. (a) **Centroid**  (b) **Orthocentre**  (c) **Circumcentre**  (d) **Incentre**

2. (a) **At the right-angle vertex.** The two perpendicular legs are altitudes themselves and meet at that corner.
   (b) **Outside the triangle.**
   (c) **Inside the triangle.** The incentre is always inside every triangle.

3. The centroid splits the median in the ratio $2 : 1$. One part $= 12 \div 3 = 4\text{ cm}$.
   **$AG = 8\text{ cm}$, $GD = 4\text{ cm}$**
   Check: $8 + 4 = 12$ ✅

4. In a right triangle, the circumcentre lies at the midpoint of the hypotenuse, so circumradius $= 13 \div 2 = \mathbf{6.5\text{ cm}}$.

5. $3k + 4k + 5k = 180 \implies 12k = 180 \implies k = 15$.
   Angles: **$45^\circ, 60^\circ, 75^\circ$**
   Check: $45 + 60 + 75 = 180$ ✅

6. $(x + 20) + (2x - 10) + (x + 30) = 180$
   $4x + 40 = 180 \implies 4x = 140 \implies \mathbf{x = 35}$
   Angles: **$55^\circ, 60^\circ, 65^\circ$**
   Check: $55 + 60 + 65 = 180$ ✅

7. Other interior opposite angle $= 130^\circ - 60^\circ = \mathbf{70^\circ}$
   Interior angle adjacent to the exterior angle $= 180^\circ - 130^\circ = \mathbf{50^\circ}$
   Angles: **$60^\circ, 70^\circ, 50^\circ$**
   Check: $60 + 70 + 50 = 180$ ✅

8. Since the two interior opposite angles are equal: $x + x = 100^\circ \implies x = 50^\circ$.
   Third angle $= 180^\circ - 100^\circ = 80^\circ$.
   Angles: **$50^\circ, 50^\circ, 80^\circ$**
   Check: $50 + 50 + 80 = 180$ ✅

9. (a) **No.** $90^\circ + 90^\circ = 180^\circ$, leaving $0^\circ$ for the third angle. ❌
   (b) **Yes.** $60^\circ + 60^\circ + 60^\circ = 180^\circ$ — that is an equilateral triangle. ✅
   (c) **Yes.** For example, $50^\circ, 60^\circ, 70^\circ$ — that is an acute-angled triangle. ✅
   (d) **No.** Two obtuse angles alone would already add up to more than $180^\circ$. ❌

10. The two acute angles of a right triangle are complementary: $90^\circ - 28^\circ = \mathbf{62^\circ}$.
    Check: $90 + 28 + 62 = 180$ ✅

---

## Chapter Wrap-Up: Triangles

| Topic | What You Learned | Key Takeaway |
|---|---|---|
| **1. Triangles, Their Types, and Perimeter** | Triangle definition ($3$ non-collinear points, $6$ parts); opposite sides and angles; triangle inequality; classification by sides (scalene, isosceles, equilateral) and by angles (acute, right, obtuse); perimeter formulas ($a+b+c$, $2a+b$, $3a$) | Sum of the two shorter sides must exceed the longest side; every equilateral triangle is acute-angled |
| **2. Special Terms, Angle Sum, and Exterior Angle** | Medians & centroid ($G$, $2:1$ ratio); altitudes & orthocentre ($H$); perpendicular bisectors & circumcentre ($O$); angle bisectors & incentre ($I$); angle sum property ($180^\circ$); exterior angle theorem | **Interior angle sum $= 180^\circ$**; **exterior angle $=$ sum of two interior opposite angles** |

---

This topic introduced quite a few new names — centroid, orthocentre, circumcentre, and incentre. Whenever they start to blur together, review the quick comparison table in Part E. And keep the **$180^\circ$ rule** close at hand: nearly every triangle angle problem begins right there. You have got this!
