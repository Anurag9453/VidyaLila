# Chapter: Triangles

> **Class:** 9 | **Subject:** Mathematics
> **This is a brand-new chapter.** Ideas from [Lines and Angles](../lines-and-angles/lines-and-angles.md) (types of angles) and [Euclid's Geometry](../euclids-geometry/euclids-geometry-part2.md) (collinear points) will come in handy here.
> **Topics covered in this file:**
> 1. Triangles: Types on the Basis of Sides, Perimeter, Types on the Basis of Angles

---

# Topic 1: Triangles, Their Types, and Perimeter

In *Lines and Angles*, we learned how to measure and classify angles as acute, right, or obtuse. Now we meet the simplest — and arguably the most useful — closed shape built out of straight lines and angles: the **triangle**. In this topic, we will define what makes a triangle, classify triangles by both their sides and their angles, and calculate their perimeters.

---

## The Camping Trip Story

**Liam** goes on his first weekend camping trip in the mountains with his friends. Along the way, he notices the same three-sided shape showing up again and again:

1. On the highway, a bright red-and-white **warning sign** shaped with three straight edges: *"Sharp Curve Ahead."*
2. At lunch, crisp triangular **wedges of toasted flatbread** cut diagonally.
3. At the campsite, the front opening of their **A-frame tent** — two slanted canvas panels meeting at the ridge pole and anchored along the ground.

While hammering in the tent pegs, **Leo** asks: *"Why are tents and bridge trusses always shaped like triangles instead of rectangles?"*

The park ranger smiles and answers: *"Because the triangle is the **most rigid shape** in engineering. Pin three wooden struts together into a triangle and the frame cannot wobble or collapse without breaking a strut. Pin four struts into a square, and a light push from the side squashes it flat into a diamond! That is why architects use triangles in bridges, roof trusses, and radio towers."*

Let us study this remarkably sturdy shape up close.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Triangle** | A closed geometric figure bounded by three straight line segments | A triangular road sign, a tent's front face |
| **Vertex** | A corner point where two sides of a triangle meet (plural: *vertices*) | Points $A, B, C$ in $\triangle ABC$ |
| **Side** | One of the three line segments joining two vertices | $AB, BC, CA$ |
| **Scalene** | A triangle whose three sides all have different lengths | $4\text{ cm}, 5\text{ cm}, 6\text{ cm}$ |
| **Isosceles** | A triangle with at least two sides equal in length | $5\text{ cm}, 5\text{ cm}, 8\text{ cm}$ |
| **Equilateral** | A triangle with all three sides equal in length | $6\text{ cm}, 6\text{ cm}, 6\text{ cm}$ |
| **Perimeter** | The total distance around the outer boundary of a shape | Sum of all three side lengths |
| **Acute-angled** | A triangle with all three angles less than $90^\circ$ | $50^\circ, 60^\circ, 70^\circ$ |
| **Right-angled** | A triangle with one angle equal to exactly $90^\circ$ | $90^\circ, 60^\circ, 30^\circ$ |
| **Obtuse-angled** | A triangle with one angle greater than $90^\circ$ | $120^\circ, 35^\circ, 25^\circ$ |
| **Hypotenuse** | The side opposite the $90^\circ$ angle in a right-angled triangle | Always the longest side of a right triangle |

---

## Part A: What Is a Triangle?

### Three Points, With One Condition

Mark any **three points** $A, B,$ and $C$ on a sheet of paper and join them with straight line segments. You get a closed three-sided shape — a **triangle**.

```
            A
           / \
          /   \
         /     \
        /       \
       B---------C
```

There is just **one condition**: if all three points lie on **one single straight line** — meaning they are **collinear** (as we learned in *Euclid's Geometry, Topic 2*) — joining them simply gives a straight segment, **not** a closed triangle:

```
   A-------B-------C        (collinear: does not form a triangle)
```

> **Triangle $=$ a closed plane figure formed by joining three non-collinear points with line segments.**

### Parts of a Triangle

Look at $\triangle ABC$ (read as *"triangle ABC"*). It has:

- **$3$ vertices:** $A, B, C$
- **$3$ sides:** $AB, BC, CA$
- **$3$ angles:** $\angle A$ ($\angle BAC$), $\angle B$ ($\angle ABC$), $\angle C$ ($\angle BCA$)

Together, the $3$ sides and $3$ angles make up the **$6$ parts (elements)** of a triangle.

You can list the vertices in any order: $\triangle ABC$, $\triangle BCA$, and $\triangle CAB$ all name the exact same triangle.

### Opposite Side, Opposite Angle

This pairing will be super useful later on: directly across from every angle sits one side that does not touch that angle's vertex.

```
            A
           / \
          /   \
         /     \
        B-------C
```

| Angle | Opposite Side |
|---|---|
| $\angle A$ | $BC$ |
| $\angle B$ | $CA$ |
| $\angle C$ | $AB$ |

Quick trick to spot it: **the vertex letter of the angle never appears in the name of its opposite side.** Opposite $\angle A$, drop the letter $A$ — leaving **$BC$**!

It works in reverse too: opposite side $AB$ sits the angle whose letter is missing from $AB$ — namely **$\angle C$**.

---

## Part B: Can Any Three Lengths Form a Triangle?

### The Three-Sticks Experiment

Suppose **Liam** has three wooden dowels measuring **$3\text{ cm}, 4\text{ cm},$ and $8\text{ cm}$**, and tries to build a triangular frame.

He lays the $8\text{ cm}$ dowel flat on the workbench, attaches the $3\text{ cm}$ dowel at one end and the $4\text{ cm}$ dowel at the other, and swings them upward to meet. Yet $3 + 4 = 7\text{ cm}$, which is shorter than $8\text{ cm}$. No matter how flat he lowers them, **the ends never reach each other**!

```
   3 cm        4 cm
   \              /
    \            /       (gap left in the middle)
     B----------C
        8 cm
```

Now suppose he swaps them for **$5\text{ cm}, 6\text{ cm},$ and $10\text{ cm}$**: since $5 + 6 = 11 > 10$, the two shorter dowels easily meet above the base and lock into a triangle.

### Rule (Triangle Inequality)

> **In any triangle, the sum of the lengths of any two sides is always greater than the length of the third side.**

Quick shortcut: you do not need to test all three pairs! Simply check that the **sum of the two shorter sides is strictly greater than the longest side**.

| Lengths | Sum of Two Shorter Sides | Longest Side | Forms a Triangle? |
|---|---|---|---|
| $3, 4, 8$ | $3 + 4 = 7$ | $8$ | No ($7 < 8$) ❌ |
| $5, 6, 10$ | $5 + 6 = 11$ | $10$ | Yes ($11 > 10$) ✅ |
| $2, 3, 5$ | $2 + 3 = 5$ | $5$ | No ($5 = 5$, equal, not greater) ❌ |
| $7, 7, 7$ | $7 + 7 = 14$ | $7$ | Yes ✅ |

**Look closely at $2, 3, 5$.** Because $2 + 3$ equals $5$ instead of exceeding it, the two shorter pieces lie **completely flat** on top of the $5\text{ cm}$ piece — forming a flat line, not a triangle!

---

## Part C: Types Based on Sides

Measure the three sides of a triangle and see how many match in length.

### 1. Scalene triangle (all three sides different)

```
            A
           / \
     5 cm /   \ 7 cm
         /     \
        B-------C
          6 cm
```

All three sides have different lengths: $5\text{ cm}, 6\text{ cm}, 7\text{ cm}$. Its three angles are all different too.

Example: an irregular triangular garden plot with three unequal fence lengths.

### 2. Isosceles triangle (at least two sides equal)

```
            A
           / \
     5 cm /   \ 5 cm
         /     \
        B-------C
          8 cm
```

Two sides are equal: $AB = AC = 5\text{ cm}$.

Special names for its parts:
- The two equal sides ($AB, AC$) are the **legs** (or equal sides).
- The third side ($BC$) is the **base**.
- The angles along the base ($\angle B$ and $\angle C$) are the **base angles**.

Useful fact: in any isosceles triangle, the **two base angles opposite the equal sides are equal**. *(For now, keep this fact in mind; we will prove it rigorously in the [Congruence of Triangles, Topic 3](../congruence-of-triangles/congruence-of-triangles-part3.md) chapter.)*

Example: the A-frame front of a camping tent — two equal slanted sides rising from a level ground base.

### 3. Equilateral triangle (all three sides equal)

```
            A
           / \
     6 cm /   \ 6 cm
         /     \
        B-------C
          6 cm
```

All three sides are equal: $AB = BC = CA = 6\text{ cm}$.

Its **three angles are also equal**, and every single angle measures **$60^\circ$**. *(We will see why it is $60^\circ$ in Topic 2!)*

Example: standard yield/give-way road signs, or a triangular billiard ball rack.

### One Subtle Detail: Every Equilateral Triangle Is Also Isosceles

By definition, an isosceles triangle has **at least two** equal sides. An equilateral triangle has all three sides equal — which certainly gives it two equal sides! Therefore, **every equilateral triangle is also an isosceles triangle**, though the reverse is false (not every isosceles triangle is equilateral).

### Summary Table

| Type | Equal Sides | Equal Angles | Example Sides |
|---|---|---|---|
| Scalene | None | None | $4, 5, 6$ |
| Isosceles | At least $2$ | $2$ (base angles) | $5, 5, 8$ |
| Equilateral | All $3$ | All $3$ (each $60^\circ$) | $6, 6, 6$ |

---

## Part D: Perimeter of a Triangle

### Story: A Rope Around the Tent

Back at the campsite, the ranger tells the group: *"Tie a reflective cord around the triangular footprint of the tent so nobody trips over the pegs in the dark."* How much cord do they need?

Simply trace **once all the way around the outer boundary** and add the three lengths together. That total boundary length is the **perimeter**.

> **Perimeter $=$ sum of all three sides**

### Formula for Each Type

| Type | Sides | Perimeter |
|---|---|---|
| Scalene | $a, b, c$ | **$a + b + c$** |
| Isosceles | $a, a, b$ ($a =$ equal leg, $b =$ base) | **$2a + b$** |
| Equilateral | $a, a, a$ | **$3a$** |

Because perimeter is a **length**, its units are $\text{cm}, \text{m},$ or $\text{km}$ (never $\text{cm}^2$).

### Solved Examples

**Example 1: Scalene.** Sides are $5\text{ cm}, 7\text{ cm}, 9\text{ cm}$. Find the perimeter.
$P = 5 + 7 + 9 = \mathbf{21\text{ cm}}$

**Example 2: Isosceles.** Equal legs are $8\text{ cm}$ each, and the base is $6\text{ cm}$. Find the perimeter.
$P = 2 \times 8 + 6 = 16 + 6 = \mathbf{22\text{ cm}}$

**Example 3: Equilateral.** Side is $7\text{ cm}$. Find the perimeter.
$P = 3 \times 7 = \mathbf{21\text{ cm}}$

Notice that Examples 1 and 3 share the exact same perimeter ($21\text{ cm}$), even though their shapes are completely different. Perimeter alone does not fix the shape of a triangle.

**Example 4: Mixed units.** Sides are $50\text{ cm}, 1.2\text{ m}, 80\text{ cm}$. Find the perimeter.
First convert all lengths to the same unit: $1.2\text{ m} = 120\text{ cm}$.
$P = 50 + 120 + 80 = 250\text{ cm} = \mathbf{2.5\text{ m}}$
*(Valid triangle? $50 + 80 = 130 > 120$ ✅)*

**Example 5: Fencing.** A triangular park has sides $30\text{ m}, 40\text{ m},$ and $50\text{ m}$. Fencing costs $\$25$ per metre. Find the total cost.
Perimeter $= 30 + 40 + 50 = 120\text{ m}$
Cost $= 120 \times 25 = \mathbf{\$3,000}$

**Example 6: Finding a missing side.** The perimeter of a triangle is $36\text{ cm}$. Two sides measure $10\text{ cm}$ and $12\text{ cm}$. Find the third side.
$10 + 12 + x = 36 \implies 22 + x = 36 \implies x = \mathbf{14\text{ cm}}$
Check: $10 + 12 + 14 = 36$ ✅. Valid triangle? $10 + 12 = 22 > 14$ ✅

**Example 7: Finding the legs of an isosceles triangle.** The perimeter of an isosceles triangle is $30\text{ cm}$ and its base is $8\text{ cm}$. Find each equal side.
$2a + 8 = 30 \implies 2a = 22 \implies a = \mathbf{11\text{ cm}}$
Check: $11 + 11 + 8 = 30$ ✅

**Example 8: Side of an equilateral triangle.** Perimeter is $45\text{ cm}$. Find the side length.
$3a = 45 \implies a = \mathbf{15\text{ cm}}$

**Example 9: Sides given as algebra expressions.** The sides of a triangle are $(x + 2)\text{ cm}$, $(2x - 1)\text{ cm}$, and $(x + 5)\text{ cm}$, and its perimeter is $30\text{ cm}$. Find the sides and classify the triangle.

$$(x + 2) + (2x - 1) + (x + 5) = 30$$
Combine like terms: $4x + 6 = 30 \implies 4x = 24 \implies x = 6$.

Sides:
- $x + 2 = 8\text{ cm}$
- $2x - 1 = 11\text{ cm}$
- $x + 5 = 11\text{ cm}$

Check: $8 + 11 + 11 = 30$ ✅. Since two sides are equal ($11\text{ cm}, 11\text{ cm}$), this is an **isosceles triangle**.

---

## Part E: Types Based on Angles

In *Lines and Angles, Topic 1*, we classified angles as acute ($< 90^\circ$), right ($= 90^\circ$), and obtuse ($> 90^\circ$). Triangles are classified by their angles using those exact same categories.

### 1. Acute-angled triangle (all three angles acute)

All three interior angles are strictly less than $90^\circ$.

Example: angles $50^\circ, 60^\circ, 70^\circ$. Every equilateral triangle ($60^\circ, 60^\circ, 60^\circ$) is also acute-angled.

### 2. Right-angled triangle (one angle equals $90^\circ$)

```
      A
      |\
      | \
      |  \    AC = hypotenuse
      |   \
      |_   \
      |_|___\
      B      C
```

Here $\angle B = 90^\circ$. In a right triangle:
- The side **$AC$ opposite the $90^\circ$ angle** is called the **hypotenuse**. It is always the **longest side** of the right triangle.
- The other two sides ($AB$ and $BC$), which meet at the right angle, are called the **legs**.

Examples:
- A standard $30^\circ$–$60^\circ$–$90^\circ$ drafting set square.
- A $45^\circ$–$45^\circ$–$90^\circ$ drafting set square.
- A ladder leaning against a vertical wall on level ground ($90^\circ$ corner between wall and ground).

### 3. Obtuse-angled triangle (one angle obtuse)

One interior angle is strictly greater than $90^\circ$ (and less than $180^\circ$).

```
                  A
             .-'    '-.
        .-'      120°    '-.
     B------------------------C
```

Here $\angle A = 120^\circ$ (wide opening), while $\angle B$ and $\angle C$ are small acute angles.

Example: angles $120^\circ, 35^\circ, 25^\circ$. Picture a **low, wide-pitched roof truss** — the peak angle at the ridge is wide and obtuse!

### A Question Answered in Topic 2

Can a single triangle have **two right angles**? Or **two obtuse angles**? Or one right angle and one obtuse angle together?

**No!** Any triangle can have **at most one** right angle or obtuse angle. Why? We will prove the exact reason in Topic 2 using the **angle sum property**. For now, hold onto that fact!

### Summary Table

| Type | Condition | Example Angles |
|---|---|---|
| Acute-angled | All three angles $< 90^\circ$ | $50^\circ, 60^\circ, 70^\circ$ |
| Right-angled | One angle $= 90^\circ$ | $90^\circ, 60^\circ, 30^\circ$ |
| Obtuse-angled | One angle $> 90^\circ$ | $120^\circ, 35^\circ, 25^\circ$ |

---

## Part F: Combining Both Names

Every triangle can be named **by its sides** and **by its angles** at the same time — giving a complete description such as *"right-angled isosceles triangle."*

| | Acute-angled | Right-angled | Obtuse-angled |
|---|---|---|---|
| **Scalene** | Possible ($50^\circ, 60^\circ, 70^\circ$) | Possible ($90^\circ, 60^\circ, 30^\circ$) | Possible ($120^\circ, 35^\circ, 25^\circ$) |
| **Isosceles** | Possible ($70^\circ, 70^\circ, 40^\circ$) | Possible ($90^\circ, 45^\circ, 45^\circ$) | Possible ($120^\circ, 30^\circ, 30^\circ$) |
| **Equilateral** | **Always** ($60^\circ, 60^\circ, 60^\circ$) | **Never** | **Never** |

**Why can an equilateral triangle never be right-angled or obtuse?** Because all three angles of an equilateral triangle are $60^\circ$. Since $60^\circ$ is neither $90^\circ$ nor greater than $90^\circ$, an equilateral triangle is **always acute-angled**.

Look at the isosceles row too: the two equal angles are always the **base angles** ($70^\circ$–$70^\circ$, $45^\circ$–$45^\circ$, $30^\circ$–$30^\circ$).

---

## Common Pitfalls to Avoid

1. **Mistake 1: Assuming any three lengths can build a triangle.**
   Lengths $3, 4, 8$ cannot form a triangle because $3 + 4 = 7 < 8$. Always check the triangle inequality first.

2. **Mistake 2: Treating "equal" as "greater than."**
   For $2, 3, 5$, we have $2 + 3 = 5$ — equal, *not* greater. Those lengths collapse into a flat line, not a triangle. The sum of the two shorter sides must be **strictly greater** than the longest side.

3. **Mistake 3: Mixing units when finding perimeter.**
   Never compute $50\text{ cm} + 1.2\text{ m} + 80\text{ cm}$ as $50 + 1.2 + 80 = 131.2$. Convert every side to the **same unit** first.

4. **Mistake 4: Picking the wrong opposite side.**
   The side opposite $\angle A$ is **$BC$**, not $AB$. Trick: leave out the vertex letter $A$.

5. **Mistake 5: Looking for a "hypotenuse" in non-right triangles.**
   Only a **right-angled triangle** has a hypotenuse — it is specifically the side opposite the $90^\circ$ right angle.

6. **Mistake 6: Saying an equilateral triangle is not isosceles.**
   Isosceles means **at least two** equal sides. Since an equilateral triangle has three equal sides, it automatically satisfies the condition for being isosceles too.

7. **Mistake 7: Swapping $a$ and $b$ in the isosceles perimeter formula $2a + b$.**
   Here **$a$ is the equal leg** and **$b$ is the base**. If the equal legs are $8\text{ cm}$ and the base is $6\text{ cm}$, the perimeter is $2(8) + 6 = 22\text{ cm}$, *not* $2(6) + 8 = 20\text{ cm}$.

8. **Mistake 8: Thinking a triangle can have two obtuse angles.**
   Impossible — a triangle can contain at most one angle $\ge 90^\circ$ (proved in Topic 2).

---

## Quick Recap

- **Triangle:** a closed figure joining three **non-collinear** points. It has $3$ vertices, $3$ sides, and $3$ angles ($6$ parts total).
- Every angle faces an **opposite side** (opposite $\angle A$ is $BC$).
- **Triangle inequality:** the sum of the two shorter sides must be **strictly greater** than the longest side.
- **By sides:** scalene (no sides equal), isosceles (at least $2$ sides equal; base angles equal), equilateral (all $3$ sides equal; every angle $60^\circ$).
- **Perimeter $=$ sum of all three sides:** $a + b + c$, $2a + b$, or $3a$. Match units before adding.
- **By angles:** acute-angled (all $< 90^\circ$), right-angled (one $= 90^\circ$, opposite side is the hypotenuse), obtuse-angled (one $> 90^\circ$).
- Every equilateral triangle is **always acute-angled**.
- A triangle can have **at most one** right or obtuse angle (explained in Topic 2).

---

## Practice Questions

1. Can the following lengths form a triangle? Give a reason.
   (a) $4\text{ cm}, 5\text{ cm}, 6\text{ cm}$
   (b) $2\text{ cm}, 3\text{ cm}, 6\text{ cm}$
   (c) $7\text{ cm}, 7\text{ cm}, 14\text{ cm}$
   (d) $6\text{ cm}, 8\text{ cm}, 10\text{ cm}$

2. Classify each triangle on the basis of its sides:
   (a) $6\text{ cm}, 6\text{ cm}, 6\text{ cm}$
   (b) $5\text{ cm}, 7\text{ cm}, 5\text{ cm}$
   (c) $4\text{ cm}, 6\text{ cm}, 8\text{ cm}$

3. Classify each triangle on the basis of its angles:
   (a) $50^\circ, 60^\circ, 70^\circ$
   (b) $90^\circ, 30^\circ, 60^\circ$
   (c) $110^\circ, 40^\circ, 30^\circ$
   (d) $45^\circ, 45^\circ, 90^\circ$

4. Find the perimeter of a triangle whose sides are $6.5\text{ cm}, 8\text{ cm},$ and $9.5\text{ cm}$.

5. The equal sides of an isosceles triangle are $9\text{ cm}$ each and its perimeter is $25\text{ cm}$. Find its base.

6. A triangular park has sides $40\text{ m}, 50\text{ m},$ and $60\text{ m}$. Find the cost of fencing it at $\$20$ per metre.

7. The sides of a triangle are $(2x + 1)\text{ cm}$, $(3x - 2)\text{ cm}$, and $(x + 4)\text{ cm}$, and its perimeter is $39\text{ cm}$. Find the sides and classify the triangle by its sides.

8. In $\triangle PQR$:
   (a) Name the side opposite $\angle Q$.
   (b) Name the angle opposite side $QR$.

9. State whether each statement is true or false. Give a reason.
   (a) An equilateral triangle can be obtuse-angled.
   (b) A right-angled triangle can be isosceles.
   (c) The hypotenuse is the longest side of a right-angled triangle.
   (d) Every isosceles triangle is equilateral.

### Answers

1. (a) $4 + 5 = 9 > 6$. **Yes, forms a triangle** ✅
   (b) $2 + 3 = 5 < 6$. **No, does not form a triangle** ❌
   (c) $7 + 7 = 14$, which is equal to $14$, not greater. **No, does not form a triangle** ❌
   (d) $6 + 8 = 14 > 10$. **Yes, forms a triangle** ✅

2. (a) All three equal: **equilateral**
   (b) Two sides equal ($5, 5$): **isosceles**
   (c) All three different: **scalene**

3. (a) All three less than $90^\circ$: **acute-angled**
   (b) One angle $90^\circ$: **right-angled**
   (c) One angle $110^\circ$ ($> 90^\circ$): **obtuse-angled**
   (d) One angle $90^\circ$: **right-angled** (and two equal angles, making it right-angled isosceles)

4. $P = 6.5 + 8 + 9.5 = \mathbf{24\text{ cm}}$

5. $2 \times 9 + b = 25 \implies 18 + b = 25 \implies b = \mathbf{7\text{ cm}}$
   Check: $9 + 9 + 7 = 25$ ✅

6. Perimeter $= 40 + 50 + 60 = 150\text{ m}$. Cost $= 150 \times 20 = \mathbf{\$3,000}$

7. $(2x + 1) + (3x - 2) + (x + 4) = 39 \implies 6x + 3 = 39 \implies 6x = 36 \implies x = 6$
   Sides: $2(6) + 1 = \mathbf{13\text{ cm}}$, $3(6) - 2 = \mathbf{16\text{ cm}}$, $6 + 4 = \mathbf{10\text{ cm}}$
   Check: $13 + 16 + 10 = 39$ ✅. Valid triangle? $10 + 13 = 23 > 16$ ✅
   All three sides are different, so it is a **scalene triangle**.

8. (a) Leave out $Q$: the side opposite $\angle Q$ is **$PR$**.
   (b) Leave out $Q$ and $R$: the angle opposite $QR$ is **$\angle P$**.

9. (a) **False.** Every angle of an equilateral triangle is $60^\circ$, so none can exceed $90^\circ$; it is always acute-angled.
   (b) **True.** For example, a $90^\circ$–$45^\circ$–$45^\circ$ triangle has both a right angle and two equal sides.
   (c) **True.** The hypotenuse sits opposite the $90^\circ$ angle and is always the longest side.
   (d) **False.** A triangle with sides $5, 5, 8$ is isosceles, yet not equilateral.

---

The triangle may be the simplest polygon in geometry, yet nearly everything in surveying, architecture, and higher geometry rests on it. Master its classifications and perimeter formulas now — you will use them constantly.

**In the next topic (Topic 2):** We uncover the special lines and centres hidden inside every triangle — **median, altitude, incentre, and circumcentre** — and prove why the three angles of any triangle always add up to **$180^\circ$** along with the **exterior angle theorem**.
