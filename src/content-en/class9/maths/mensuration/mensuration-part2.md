# Chapter: Mensuration (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [mensuration.md](mensuration.md)** (which covers Topic 1: perimeter vs. area, triangle area, and Heron's formula).
> **Topics covered in this file:**
> 2. Area of Quadrilaterals and Special Parallelograms Using Heron's Formula

---

# Topic 2: Area of Quadrilaterals and Special Parallelograms Using Heron's Formula

In Topic 1, we saw that you do not always need a triangle's height to find its area. Even though an old oak tree blocked Leo's uncle from measuring the height of the traffic island, the three side lengths ($13, 14,$ and $15\text{ m}$) alone gave the exact area of **$84\text{ m}^2$** via **Heron's formula**: find the semi-perimeter $s = \frac{a + b + c}{2}$, then compute $\Delta = \sqrt{s(s - a)(s - b)(s - c)}$.

Now comes a natural next question: what if a plot of land has **four edges** — a quadrilateral? In this topic, we will see how Heron's formula lets us find the area of any quadrilateral. The trick could not be simpler: **split the quadrilateral into two triangles.**

---

## The Story of the School Kitchen Garden

Behind Maya's school sits an unused patch of ground. The headteacher decided that students would turn it into a **kitchen garden** for growing herbs, spinach, and tomatoes. Before ordering compost and seeds, they needed to know its exact area.

The plot was neither a rectangle nor a square — it had four corners and four edges of different lengths. Maya and her classmates brought out a measuring tape and measured all four sides.

Maya thought, "We have all four side lengths. That's enough to calculate the area, right?"

Her science teacher, **Dr. Bennett**, smiled and brought out four wooden strips joined at their corners by loose hinges. She arranged them into a four-sided frame on the floor, then gently nudged one corner sideways. The frame **squashed flat**. All four side lengths stayed identical, yet the space inside kept shrinking.

"See that?" Dr. Bennett asked. "The four sides did not change, yet the area changed completely. That is why knowing only four sides is never enough."

Next, she fastened a **fifth wooden strip** connecting two opposite corners of the frame. Instantly, the frame locked solid — it could not budge. That fifth strip was a **diagonal**.

That is the core idea of this topic: **four sides + one diagonal = a locked, exact area for any quadrilateral.**

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Quadrilateral** | A closed plane figure with four sides and four vertices | A field, kite, or doorframe |
| **Diagonal** | A line segment joining two opposite vertices of a polygon | $AC$ or $BD$ in quadrilateral $ABCD$ |
| **Semi-perimeter ($s$)** | Half of a triangle's perimeter (from Topic 1) | For sides $3, 4, 5$, $s = 6$ |
| **Rigid** | A structure that cannot change shape when pushed or pressed | A triangle is always rigid |
| **Rhombus** | A quadrilateral with all four sides equal in length | A classic diamond shape |
| **Parallelogram** | A quadrilateral whose opposite sides are equal and parallel | A tilted rectangle |

---

## Part A: Why Are Four Sides Alone Not Enough?

Think back to Dr. Bennett's hinged frame. Even with the exact same four side lengths, the frame can settle into many different shapes:

```
   At first (upright):         After pushing sideways (squashed):

   D ___________ C                D ___________ C
    |           |                   \           \
    |           |                    \           \
    |           |                     \___________\
   A|___________|B                    A            B

   Larger area                    Smaller area
```

The four edge lengths stayed the same, yet the enclosed space shrank. That proves **four sides alone do not fix the area of a quadrilateral.**

Now try the same test with a triangle. Join three wooden strips at their corners. Push as hard as you like — a triangle **will not deform**. Fix the three side lengths of a triangle, and both its shape and its area are locked in place. That is why Heron's formula needs only three sides.

For a quadrilateral, we also measure one **diagonal**. That diagonal splits the quadrilateral into **two triangles**, locking both triangles — and therefore the entire quadrilateral — into a single, fixed shape.

> Remember: **A quadrilateral needs four sides + one diagonal** (or an angle) to determine its area.

This is also why engineers build bridges, roof trusses, and bicycle frames out of triangles: triangles stay rigid under pressure.

---

## Part B: The Three-Step Method

Suppose we have quadrilateral $ABCD$ and know the four sides plus diagonal $AC$.

```
            D
           /\
          /  \
         /    \
        /      \  C
       /     .´|
      /   .´   |
     / .´      |
   A/__________|B
```

**Step 1: Split into two triangles along the diagonal.**
Diagonal $AC$ divides the quadrilateral into **$\triangle ABC$** and **$\triangle ACD$**.

**Step 2: Find each triangle's area using Heron's formula.**
All three sides of each triangle are known, so apply the formula from Topic 1. **Careful: calculate $s$ separately for each triangle.**

**Step 3: Add the two areas together.**
$$\text{ar}(ABCD) = \text{ar}(\triangle ABC) + \text{ar}(\triangle ACD)$$

That is all there is to it. Let us put it to work on solved examples.

---

## Part C: Solved Examples

### Example 1: Maya's Kitchen Garden

In garden $ABCD$, $AB = 3\text{ m}$, $BC = 4\text{ m}$, $CD = 4\text{ m}$, $DA = 5\text{ m}$, and diagonal $AC = 5\text{ m}$. Find the area of the garden.

**$\triangle ABC$** (sides $3, 4, 5$):
- $s = \dfrac{3 + 4 + 5}{2} = \mathbf{6\text{ m}}$
- $\text{Area} = \sqrt{6 \times 3 \times 2 \times 1} = \sqrt{36} = \mathbf{6\text{ m}^2}$

*(Notice this is the familiar $3$-$4$-$5$ right triangle from Topic 1.)*

**$\triangle ACD$** (sides $AC = 5$, $CD = 4$, $DA = 5$):
- $s = \dfrac{5 + 4 + 5}{2} = \mathbf{7\text{ m}}$
- $\text{Area} = \sqrt{7 \times (7 - 5) \times (7 - 4) \times (7 - 5)} = \sqrt{7 \times 2 \times 3 \times 2} = \sqrt{84} = \mathbf{2\sqrt{21}\text{ m}^2}$
- Since $\sqrt{21} \approx 4.583$, $2\sqrt{21} \approx \mathbf{9.17\text{ m}^2}$

**Total area** $= 6 + 2\sqrt{21} \approx 6 + 9.17 = \mathbf{15.17\text{ m}^2}$, or about **$15.2\text{ m}^2$**.

**Check:** $\sqrt{84} \approx 9.165$, and $6 + 9.165 = 15.165$ ✅

### Example 2: A Park with One $90^\circ$ Corner

In park $ABCD$, $\angle C = 90^\circ$, $AB = 9\text{ m}$, $BC = 12\text{ m}$, $CD = 5\text{ m}$, and $AD = 8\text{ m}$. Find its area.

```
   A __________ D
    \          |
     \         | 5 m
      \        |
       \_______|
       B  12 m  C   (∠C = 90°)
```

No diagonal is given here! However, because $\angle C = 90^\circ$, we can calculate diagonal **$BD$** ourselves.

**Diagonal $BD$:** Since $\triangle BCD$ is right-angled at $C$, Pythagoras' theorem gives:
$$BD^2 = 12^2 + 5^2 = 144 + 25 = 169 \implies \mathbf{BD = 13\text{ m}}$$

**$\triangle BCD$** (right triangle):
- $\text{Area} = \frac{1}{2} \times 12 \times 5 = \mathbf{30\text{ m}^2}$

**$\triangle ABD$** (sides $AB = 9$, $AD = 8$, $BD = 13$):
- $s = \dfrac{9 + 8 + 13}{2} = \mathbf{15\text{ m}}$
- $\text{Area} = \sqrt{15 \times 6 \times 7 \times 2} = \sqrt{1{,}260} = \mathbf{6\sqrt{35}\text{ m}^2}$
- Since $\sqrt{35} \approx 5.916$, $6\sqrt{35} \approx \mathbf{35.5\text{ m}^2}$

**Total area** $= 30 + 35.5 = \mathbf{65.5\text{ m}^2}$ (approx.).

**Check:** Let us check $\triangle BCD$ with Heron's formula too: $s = \frac{12 + 5 + 13}{2} = 15$, $\sqrt{15 \times 3 \times 10 \times 2} = \sqrt{900} = 30$ ✅. The right-angle shortcut and Heron's formula agree completely.

### Example 3: A Rhombus-Shaped Field

A field is shaped like a rhombus. Each side is $30\text{ m}$, and one diagonal is $48\text{ m}$. Find its area.

A diagonal splits a rhombus into **two identical (congruent) triangles**, each with sides $30, 30, 48$.

**One triangle** ($30, 30, 48$):
- $s = \dfrac{30 + 30 + 48}{2} = \mathbf{54\text{ m}}$
- $\text{Area} = \sqrt{54 \times 24 \times 24 \times 6} = \sqrt{186{,}624} = \mathbf{432\text{ m}^2}$

**Total area** $= 2 \times 432 = \mathbf{864\text{ m}^2}$.

**Check (rhombus diagonal shortcut):** The diagonals of a rhombus bisect each other at $90^\circ$. Half of the second diagonal $= \sqrt{30^2 - 24^2} = \sqrt{900 - 576} = \sqrt{324} = 18\text{ m}$, so the full second diagonal $= 36\text{ m}$.
$$\text{Area of rhombus} = \frac{1}{2} \times d_1 \times d_2 = \frac{1}{2} \times 48 \times 36 = \mathbf{864\text{ m}^2} \text{ ✅}$$

### Example 4: A Parallelogram from Sides and a Diagonal

Two adjacent sides of a parallelogram are $26\text{ cm}$ and $28\text{ cm}$, and one diagonal is $30\text{ cm}$. Find its area.

As we proved in the Quadrilaterals chapter, a diagonal divides a parallelogram into two **congruent** triangles. Both triangles have sides $26, 28, 30$. *(This is the exact same triangle as the wall in Practice Question 7 of Topic 1.)*

**One triangle** ($26, 28, 30$):
- $s = \dfrac{26 + 28 + 30}{2} = \mathbf{42\text{ cm}}$
- $\text{Area} = \sqrt{42 \times 16 \times 14 \times 12} = \sqrt{112{,}896} = \mathbf{336\text{ cm}^2}$

**Area of parallelogram** $= 2 \times 336 = \mathbf{672\text{ cm}^2}$.

**Check:** $42 \times 16 = 672$, and $14 \times 12 = 168$. $672 \times 168 = 112{,}896$, and $336^2 = 112{,}896$ ✅

### Example 5: Costing Problem

Grass is to be planted across the rhombus-shaped field from Example 3 at $\$4$ per $\text{m}^2$. Find the total cost.

$\text{Area} = 864\text{ m}^2$ (from Example 3).
$\text{Cost} = 864 \times \$4 = \mathbf{\$3,456}$.

Notice: grass covers the **inside surface**, so we use **area**. If we needed a **fence** around the outside of the field, we would use the **perimeter** ($4 \times 30 = 120\text{ m}$). Keeping area and perimeter distinct (from Topic 1) matters everywhere here.

### Example 6: Umbrella Fabric Panels

An umbrella is stitched from **$10$ triangular fabric panels**, each with sides $50\text{ cm}, 50\text{ cm},$ and $20\text{ cm}$. The panels alternate in two colours: $5$ red and $5$ blue. How much fabric of each colour is used?

**One panel** ($50, 50, 20$):
- $s = \dfrac{50 + 50 + 20}{2} = \mathbf{60\text{ cm}}$
- $\text{Area} = \sqrt{60 \times 10 \times 10 \times 40} = \sqrt{240{,}000} = \mathbf{200\sqrt{6}\text{ cm}^2} \approx 489.9\text{ cm}^2$

**Each colour** $= 5\text{ panels} = 5 \times 200\sqrt{6} = \mathbf{1{,}000\sqrt{6}\text{ cm}^2} \approx \mathbf{2{,}449.5\text{ cm}^2}$.

**Check:** $\sqrt{6} \approx 2.449$, so $1{,}000 \times 2.449 \approx 2{,}449$ ✅

### Example 7: Paper for a Kite

A kite is shaped like a square with a diagonal of $24\text{ cm}$. Each side of the diagonal uses a different colour of paper. Attached to the bottom is a small triangular tail with sides $5\text{ cm}, 5\text{ cm},$ and $6\text{ cm}$. How much paper of each colour is used?

**Square body:** A square's diagonals are equal, so both are $24\text{ cm}$.
$$\text{Area of square} = \frac{1}{2} \times 24 \times 24 = \mathbf{288\text{ cm}^2}$$
The diagonal splits it into two equal triangles, so **each colour $= 144\text{ cm}^2$**.

**Tail** ($5, 5, 6$), the same triangle as Example 2 in Topic 1:
- $s = \dfrac{5 + 5 + 6}{2} = \mathbf{8\text{ cm}}$
- $\text{Area} = \sqrt{8 \times 3 \times 3 \times 2} = \sqrt{144} = \mathbf{12\text{ cm}^2}$

**Check:** Side of the square $= \frac{24}{\sqrt{2}} \approx 16.97\text{ cm}$. Using Heron's formula on sides $16.97, 16.97, 24$ also gives $\approx 144\text{ cm}^2$ ✅

---

## Part D: When to Use a Shortcut vs. Heron's Formula

Heron's formula works **every time**, yet in special shapes a direct formula is much faster. A smart habit is: **solve with the shortcut and verify with Heron** (or vice versa).

| Shape | Shortcut | Verification with Heron |
|---|---|---|
| Right-angled triangle | $\frac{1}{2} \times \text{base} \times \text{height}$ | Heron using all three sides |
| Rhombus | $\frac{1}{2} \times d_1 \times d_2$ | Two congruent triangles along one diagonal |
| Rectangle | $\text{length} \times \text{width}$ | Two right triangles along a diagonal |
| Any general quadrilateral (sides + diagonal) | No shortcut | Heron's formula, twice |

---

## Common Pitfalls to Avoid

1. **Mistake 1: Trying to find a quadrilateral's area from only four sides.**
   Four sides alone do not lock down a quadrilateral's area (remember Dr. Bennett's squashing frame). You always need a diagonal or an angle as well.

2. **Mistake 2: Grouping the diagonal with the wrong sides.**
   With diagonal $AC$, the two triangles are **$\triangle ABC$** (sides $AB, BC, AC$) and **$\triangle ACD$** (sides $AC, CD, DA$). Mixing $AB$ into the triangle with $CD$ breaks the figure. Always sketch and label the figure first.

3. **Mistake 3: Reusing the same $s$ for both triangles.**
   Each triangle has its **own** semi-perimeter $s$. In Example 1, the first triangle had $s = 6$ and the second had $s = 7$.

4. **Mistake 4: Applying Heron's formula directly to the quadrilateral's perimeter.**
   $s$ is the semi-perimeter of a *triangle*, never a quadrilateral. You cannot plug four sides into Heron's formula — split the shape into triangles first.

5. **Mistake 5: Confusing area with perimeter.**
   Turf, paint, fabric, and tiles require **area**. Fencing, borders, and rope require **perimeter**.

6. **Mistake 6: Leaving the diagonal out of one of the two triangles.**
   The diagonal is a shared side belonging to **both** triangles. Make sure it appears in both calculations.

7. **Mistake 7: Mixing units.**
   If one length is in $\text{m}$ and another is in $\text{cm}$, convert everything into the same unit before calculating. Area is always in **square units** ($\text{m}^2, \text{cm}^2$).

---

## Quick Recap

- **Four sides are not enough** to fix a quadrilateral's area, because a four-sided frame can flex and change shape. A triangle is rigid.
- A **diagonal** splits any quadrilateral into **two triangles**.
- **Three-step method:** split along the diagonal, find each triangle's area with Heron's formula (with a separate $s$ for each), and add the two areas.
- If no diagonal is given, look for a **$90^\circ$ corner** and find the diagonal using Pythagoras' theorem.
- In a **rhombus or parallelogram**, a diagonal forms two congruent triangles — find the area of one and double it.
- Use **area** for turf, paint, or fabric; use **perimeter** for fencing or borders.
- Whenever a shortcut applies, **cross-check** with Heron's formula.

---

## Practice Questions

1. In quadrilateral $ABCD$, $AB = 6\text{ cm}$, $BC = 8\text{ cm}$, $CD = 10\text{ cm}$, $DA = 12\text{ cm}$, and diagonal $AC = 10\text{ cm}$. Find the area of $ABCD$.

2. The perimeter of a rhombus is $80\text{ m}$ and one of its diagonals is $24\text{ m}$. Find the area of the rhombus using Heron's formula. Check your answer using the diagonals.

3. Two adjacent sides of a parallelogram are $17\text{ cm}$ and $10\text{ cm}$, and one diagonal is $21\text{ cm}$. Find the area of the parallelogram.

4. A field $ABCD$ has $\angle C = 90^\circ$, $BC = 8\text{ m}$, $CD = 15\text{ m}$, $AB = 10\text{ m}$, and $AD = 21\text{ m}$. Find the area of the field.

5. An umbrella is made by stitching $8$ triangular pieces of cloth of two colours, $4$ pieces of each colour. Each piece has sides $25\text{ cm}, 25\text{ cm},$ and $14\text{ cm}$. How much cloth of each colour is required?

6. The quadrilateral in Question 1 is a garden with all measurements in metres. Find the cost of levelling it at $\$12$ per $\text{m}^2$.

7. Explain why knowing only the four sides of a quadrilateral is not enough to find its area.

8. A kite is in the shape of a square with a diagonal of $30\text{ cm}$. It is made of two colours of paper, one on each side of a diagonal. Its tail is a triangle with sides $17\text{ cm}, 17\text{ cm},$ and $16\text{ cm}$, made of a third colour. Find the area of paper of each colour used.

### Answers

1. **$\triangle ABC$** ($6, 8, 10$): $s = 12$, $\text{area} = \sqrt{12 \times 6 \times 4 \times 2} = \sqrt{576} = 24\text{ cm}^2$.
   **$\triangle ACD$** ($10, 10, 12$): $s = 16$, $\text{area} = \sqrt{16 \times 6 \times 6 \times 4} = \sqrt{2{,}304} = 48\text{ cm}^2$.
   **Total area $= 24 + 48 = 72\text{ cm}^2$**.

2. Side $= \frac{80}{4} = 20\text{ m}$. Diagonal $24\text{ m}$ splits it into two triangles ($20, 20, 24$).
   $s = 32$, $\text{area} = \sqrt{32 \times 12 \times 12 \times 8} = \sqrt{36{,}864} = 192\text{ m}^2$.
   **Area of rhombus $= 2 \times 192 = 384\text{ m}^2$**.
   Check: half the other diagonal $= \sqrt{20^2 - 12^2} = \sqrt{256} = 16$, so the other diagonal $= 32\text{ m}$. $\frac{1}{2} \times 24 \times 32 = 384$ ✅

3. Triangle ($17, 10, 21$): $s = 24$, $\text{area} = \sqrt{24 \times 7 \times 14 \times 3} = \sqrt{7{,}056} = 84\text{ cm}^2$.
   **Area of parallelogram $= 2 \times 84 = 168\text{ cm}^2$**.

4. **Diagonal $BD$** $= \sqrt{8^2 + 15^2} = \sqrt{289} = 17\text{ m}$ (by Pythagoras' theorem).
   **$\triangle BCD$** $= \frac{1}{2} \times 8 \times 15 = 60\text{ m}^2$.
   **$\triangle ABD$** ($10, 21, 17$): $s = 24$, $\text{area} = \sqrt{24 \times 14 \times 3 \times 7} = \sqrt{7{,}056} = 84\text{ m}^2$.
   **Total area $= 60 + 84 = 144\text{ m}^2$**.

5. One piece ($25, 25, 14$): $s = 32$, $\text{area} = \sqrt{32 \times 7 \times 7 \times 18} = \sqrt{28{,}224} = 168\text{ cm}^2$.
   **Each colour $= 4 \times 168 = 672\text{ cm}^2$**.

6. Area $= 72\text{ m}^2$ (from Q1). Cost $= 72 \times \$12 = \mathbf{\$864}$.

7. A quadrilateral is not rigid. Without changing the lengths of its four sides, you can push its corners and flatten it, which changes the area enclosed inside. You therefore need a diagonal (or an angle) as well: the diagonal splits the quadrilateral into two triangles, and each triangle is rigidly fixed by its three side lengths.

8. Area of square $= \frac{1}{2} \times 30 \times 30 = 450\text{ cm}^2$. Each side of the diagonal uses **$225\text{ cm}^2$ of paper**.
   Tail ($17, 17, 16$): $s = 25$, $\text{area} = \sqrt{25 \times 8 \times 8 \times 9} = \sqrt{14{,}400} = \mathbf{120\text{ cm}^2}$ (third colour).

---

Now, whenever you see a four-sided plot, an umbrella, or a kite, you can find its area just by measuring one diagonal. Well done!

**In the next topic:** So far we have worked only with **flat** two-dimensional shapes. Next, we step into the **3D world**: how much wrapping paper covers a cardboard box (cuboid) or a die (cube), and how much fits inside!
