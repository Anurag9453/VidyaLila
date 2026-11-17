# Chapter: Pythagoras Theorem

> **Class:** 9 | **Subject:** Mathematics
> **Helpful from earlier chapters:** [Triangles](../triangles/triangles.md) (right triangles and the hypotenuse) and [Expansions](../expansions/expansions.md) (the $(a + b)^2$ identity).
> **Topics covered in this file:**
> 1. The Pythagoras Theorem and Its Proof

---

# Topic 1: The Pythagoras Theorem and Its Proof

So far, we have studied triangles by looking at their sides and angles. In [Triangles](../triangles/triangles.md), we met the right-angled triangle: a triangle with one $90^\circ$ angle, and its longest side opposite that angle, called the hypotenuse. And in [Expansions](../expansions/expansions.md), we learned the algebraic identity $(a + b)^2 = a^2 + 2ab + b^2$.

Today, those two ideas come together to give us one of the most famous results in all of geometry.

In earlier chapters—such as Number Systems, Mensuration, and Circles—we borrowed the Pythagoras theorem simply as a handy tool. This chapter is its real home: here, we will understand **what the theorem says** and **why it is true**.

---

## Leo's "43-Inch" TV

Leo's family just bought a brand-new television. Printed in bold letters on the box was: **43-Inch Screen**. Leo immediately grabbed a measuring tape to check.

- He measured the **width** of the screen: just over $37\text{ inches}$.
- He measured the **height** of the screen: about $21\text{ inches}$.

"Maya, how is this a 43-inch TV?" Leo asked his older sister. "It isn't $43\text{ inches}$ wide, and it isn't $43\text{ inches}$ tall! Did the store trick us?"

Maya, who was in Grade 9, laughed. "No, they didn't trick you. The $43\text{ inches}$ is the **diagonal** of the screen—the straight-line distance from one corner to the opposite corner."

Leo stretched the measuring tape diagonally from the bottom-left corner of the screen to the top-right corner. Sure enough, it read right around $43\text{ inches}$!

"Oh! Wait—why is the diagonal longer than both the width and the height?" Leo wondered. "And is there a rule connecting all three measurements?"

Maya smiled. "Great question. Yes, there is—and that connection is so remarkable that people have studied and proved it for thousands of years. Let's look at how it works."

A TV screen is a **rectangle**. Its diagonal splits it into two right-angled triangles: the width and height form the two shorter sides, and the diagonal is the third, longest side. So the real question is: **how are the three sides of any right triangle related?**

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Right triangle** | A triangle in which one angle measures $90^\circ$ | Cutting a TV screen along its diagonal creates two right triangles |
| **Hypotenuse** | The side **opposite** the $90^\circ$ angle, and always the **longest** side of the triangle | The diagonal of the TV screen |
| **Legs (base and perpendicular)** | The two sides that meet to form the $90^\circ$ corner | The width and height of the TV |
| **Base** | One leg of a right triangle, usually drawn horizontally at the bottom | The screen's width |
| **Perpendicular** | The other leg, standing upright at $90^\circ$ to the base | The screen's height |
| **Square on a side** | A square whose side length equals that side of the triangle | A square built on a side of length $3$: area $= 3 \times 3$ |
| **Pythagoras theorem** | The relationship between the three sides of a right triangle | $c^2 = a^2 + b^2$ |

---

## Part A: What the Pythagoras Theorem Says

Let us label the three sides of a right triangle as follows:

- **$a$** = base (one leg)
- **$b$** = perpendicular (the other leg)
- **$c$** = hypotenuse (opposite the $90^\circ$ angle, the longest side)

> **Pythagoras Theorem:** In any right-angled triangle,
> $$\text{hypotenuse}^2 = \text{base}^2 + \text{perpendicular}^2$$
> that is,
> $$c^2 = a^2 + b^2$$

In words: **"The area of the square built on the hypotenuse equals the sum of the areas of the squares built on the other two sides."**

### Visualizing "Squares on the Sides"

The smallest whole-number right triangle Maya knew has sides **$3$, $4$, and $5$**. Let us imagine building a square outward on each of the three sides:

```
                |\
                | \
        3       |  \       5
   [ 3 x 3 ]    |   \   [ 5 x 5 ]
   area = 9     |    \  area = 25
                |_____\
                   4
              [ 4 x 4 ]
              area = 16
```

- Area of the square on side $3$ $= 3 \times 3 = \mathbf{9}$
- Area of the square on side $4$ $= 4 \times 4 = \mathbf{16}$
- Area of the square on side $5$ (hypotenuse) $= 5 \times 5 = \mathbf{25}$

Now add the two smaller squares: **$9 + 16 = 25$** ✅

The two smaller squares fit together to match the area of the largest square. That is the Pythagoras theorem in action: **$3^2 + 4^2 = 5^2$**.

Notice carefully: this is a relationship about the **areas of squares**, not the side lengths themselves. Adding the sides gives $3 + 4 = 7$, which is not $5$. Only the **squares** of the two legs add up to the **square** of the hypotenuse.

### A Brief History

This theorem was not discovered by just one person in one place. In ancient India, **Baudhayana** wrote in his *Sulbasutra* (around $800\text{ BCE}$, though historians estimate slightly different dates) that the square on the diagonal of a rectangle equals the sum of the squares on its length and breadth. Builders used this fact with knotted ropes and stakes to lay out exact $90^\circ$ corners for rectangular ceremonial altars.

In ancient Greece, the result became famous through **Pythagoras** (c. $570\text{–}495\text{ BCE}$), which is why it bears his name around the world today. Earlier civilizations in Mesopotamia and Egypt also knew and used specific right-triangle triples such as $3\text{-}4\text{-}5$.

Still, one crucial question remains. Seeing that $3^2 + 4^2 = 5^2$ works for one triangle is not enough. **Does $a^2 + b^2 = c^2$ work for *every* right triangle?** For that, we need a proof.

---

## Part B: Proof 1 — By Rearrangement

Maya sketched an idea on a sheet of paper: calculate the area of the **same large square in two different ways**, and then set the two expressions equal to each other.

### Setup

Take any right triangle with legs **$a$** and **$b$**, and hypotenuse **$c$**. Make **$4$ identical (congruent) copies** of this triangle.

Now draw a large square whose **side length is $(a + b)$**. Place one copy of the triangle in each of the four corners so that:

- Each side of the large square is split into two segments of length **$a$** and **$b$** (giving a total side of $a + b$).
- In the middle, the four hypotenuses frame a **tilted square** of side **$c$**.

```
          a          b
     +---------*-------------+
     |        / \            |
     |      /     \          |
     |    /    c     \       |
     |  /               \    |
     *                       *
     |  \               /    |
     |    \           /      |
     |      \       /        |
     |        \   /          |
     +---------*-------------+
```

Each corner holds one right triangle (legs $a$ and $b$), leaving the tilted shape of side $c$ in the centre. *(In the ASCII sketch, $a$ and $b$ look nearly equal, but the arrangement works for any positive lengths $a$ and $b$.)*

How do we know the middle shape is genuinely a square? In every right triangle, the two acute angles add up to $90^\circ$ (since all three angles sum to $180^\circ$ and one angle is $90^\circ$). Along each straight side of the outer square, two acute angles meet on either side of the inner shape's corner, so the remaining angle inside the inner shape is $180^\circ - 90^\circ = \mathbf{90^\circ}$. All four sides have length $c$ and all four angles are $90^\circ$, so it is indeed a square!

### Finding the Area Two Ways

**Method 1: Area of the large square directly**

Since each side has length $(a + b)$:
$$\text{Area} = (a + b)^2$$

**Method 2: Adding up the $5$ pieces inside**

- Area of $1$ right triangle $= \frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2}ab$
- Total area of all $4$ triangles $= 4 \times \frac{1}{2}ab = \mathbf{2ab}$
- Area of the inner tilted square $= \mathbf{c^2}$

So the total area of the large square is:
$$\text{Area} = 2ab + c^2$$

### Setting Both Equal

Since both expressions measure the exact same large square:
$$(a + b)^2 = 2ab + c^2$$

Expand the left-hand side using the identity from [Expansions](../expansions/expansions.md): **$(a + b)^2 = a^2 + 2ab + b^2$**:
$$a^2 + 2ab + b^2 = 2ab + c^2$$

Subtract **$2ab$** from both sides:

> $$a^2 + b^2 = c^2$$

Because we did not pick any special numbers for $a$ and $b$, this proof holds for **every** right-angled triangle!

**Check with $3\text{-}4\text{-}5$:** Let $a = 3, b = 4, c = 5$.
- Large square: $(3 + 4)^2 = 7^2 = 49$
- $4$ triangles: $4 \times \frac{1}{2} \times 3 \times 4 = 24$
- Inner tilted square: $5^2 = 25$
- Sum of pieces: $24 + 25 = 49$ ✅

They match completely.

### Proof 2 (A Quick Preview): Using Similar Triangles

There is another famous way to prove the theorem. Drop a perpendicular from the $90^\circ$ corner onto the hypotenuse. This divides the original right triangle into two smaller right triangles, and all three triangles turn out to be **similar** (they have the exact same angles, just scaled to different sizes). Because the side ratios of similar triangles are equal, algebraic proportions also lead directly to $a^2 + b^2 = c^2$.

You will see the full details of this proof in **Grade 10** when you study similarity. For now, Proof 1 is completely rigorous—and visually crystal clear.

---

## Part C: Testing with Numbers

Let us test the theorem on several triangles. Every time, start by identifying the **longest side** (which must be the hypotenuse if the triangle is right-angled), and then compare $a^2 + b^2$ with $c^2$.

### Example 1: Right Triangle $3, 4, 5$

The longest side is $5$, so $c = 5$.
- $a^2 + b^2 = 3^2 + 4^2 = 9 + 16 = \mathbf{25}$
- $c^2 = 5^2 = \mathbf{25}$

Both are equal ✅

### Example 2: Right Triangle $5, 12, 13$

The longest side is $13$, so $c = 13$.
- $a^2 + b^2 = 5^2 + 12^2 = 25 + 144 = \mathbf{169}$
- $c^2 = 13^2 = \mathbf{169}$

Both are equal ✅

### Example 3: Right Triangle $6, 8, 10$

The longest side is $10$, so $c = 10$.
- $a^2 + b^2 = 6^2 + 8^2 = 36 + 64 = \mathbf{100}$
- $c^2 = 10^2 = \mathbf{100}$

Both are equal ✅

Notice that $6\text{-}8\text{-}10$ is simply $3\text{-}4\text{-}5$ with every side multiplied by $2$.

### Example 4: A Triangle That Is Not Right-Angled: $4, 5, 6$

The longest side is $6$, so take $c = 6$.
- $a^2 + b^2 = 4^2 + 5^2 = 16 + 25 = \mathbf{41}$
- $c^2 = 6^2 = \mathbf{36}$

$$41 \neq 36 \quad \text{❌}$$

The equation does **not** hold here. That tells us this triangle cannot be right-angled—because if it were, the Pythagoras theorem would have to hold. This shows that $a^2 + b^2 = c^2$ is a special property of **right triangles**, not of every triangle.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Treating the longest side as a leg.**
   In a triangle with sides $5, 12, 13$, someone might carelessly treat $13$ as a leg:
   - Wrong: $5^2 + 13^2 = 25 + 169 = 194$, while $12^2 = 144$. These do not match ($194 \neq 144$).
   - Right: The hypotenuse is always the **longest** side, so $c = 13$. Then $5^2 + 12^2 = 169 = 13^2$ ✅
   Always identify the hypotenuse first: it sits opposite the $90^\circ$ angle and is the longest side.

2. **Mistake 2: Writing $c = a + b$ instead of $c^2 = a^2 + b^2$.**
   In the $3\text{-}4\text{-}5$ triangle:
   - Wrong: $c = 3 + 4 = 7$. The hypotenuse is $5$, not $7$.
   - Right: $c^2 = a^2 + b^2$ (the sum of the **squares**), never $c = a + b$.
   In fact, in any triangle, one side is always shorter than the sum of the other two sides ($5 < 3 + 4$), so $c = a + b$ is never possible!

3. **Mistake 3: Forgetting to square the sides.**
   - Wrong: $3 + 4 = 5$ (false, $3 + 4 = 7$).
   - Right: $3^2 + 4^2 = 9 + 16 = 25 = 5^2$.
   Square all three sides first, then add the squares of the two legs.

4. **Mistake 4: Mixing different units of measurement.**
   Suppose a right triangle has legs $3\text{ m}$ and $400\text{ cm}$, and hypotenuse $5\text{ m}$. Writing $3^2 + 400^2$ directly is wrong because one leg is in metres and the other is in centimetres.
   - Right: Convert all sides to the **same unit** first. Since $400\text{ cm} = 4\text{ m}$, we get $3^2 + 4^2 = 9 + 16 = 25 = 5^2$ ✅
   Always **match the units before squaring**.

---

## Quick Recap

- In a right triangle, the longest side opposite the $90^\circ$ angle is the **hypotenuse** ($c$). The other two sides are the **legs** (base $a$ and perpendicular $b$).
- **Pythagoras Theorem:** $\text{hypotenuse}^2 = \text{base}^2 + \text{perpendicular}^2$, or **$c^2 = a^2 + b^2$**.
- **Geometric picture:** The area of the square on the hypotenuse equals the sum of the areas of the squares on the two legs (for $3\text{-}4\text{-}5$: $9 + 16 = 25$).
- **History:** Recorded in Baudhayana's *Sulbasutra* (c. $800\text{ BCE}$) in India and famously associated with Pythagoras in Greece.
- **Proof 1:** Place $4$ identical right triangles inside a large square of side $(a + b)$ to leave an inner tilted square of side $c$. Then $(a + b)^2 = 4 \times \frac{1}{2}ab + c^2 \implies a^2 + 2ab + b^2 = 2ab + c^2 \implies a^2 + b^2 = c^2$.
- **Testing numbers:** $3\text{-}4\text{-}5$, $5\text{-}12\text{-}13$, and $6\text{-}8\text{-}10$ satisfy $a^2 + b^2 = c^2$, whereas $4\text{-}5\text{-}6$ (not a right triangle) does not.
- **Watch out for:** Putting the longest side in as a leg, writing $c = a + b$, forgetting to square, and mixing units.

---

## Practice Questions

1. In a right triangle, the legs are $6\text{ cm}$ and $8\text{ cm}$ and the hypotenuse is $10\text{ cm}$. Verify that the Pythagoras relationship holds.

2. A triangle has sides $8$, $15$, and $17$. Which side must be the hypotenuse if it is a right triangle? Check whether $a^2 + b^2 = c^2$ holds.

3. Draw (or describe) the "squares on the sides" picture for a right triangle with legs $3$ and $4$. State the area of each square and show how the areas are related.

4. In Proof 1, take $a = 5$ and $b = 12$. Find the area of the large square of side $(a + b)$, the total area of the $4$ triangles, and the area of the tilted square. Show that the pieces add up to the area of the large square.

5. For a triangle with sides $7$, $8$, and $10$, compute $7^2 + 8^2$ and $10^2$. Does the Pythagoras relationship hold? What does this tell you about the triangle?

6. Sophia says, "In a right triangle with legs $5$ and $12$, the hypotenuse is $5 + 12 = 17$." Explain her mistake and check, using squares, that the hypotenuse is actually $13$.

7. A right triangle has legs $1.2\text{ m}$ and $50\text{ cm}$, and hypotenuse $1.3\text{ m}$. Explain why $1.2^2 + 50^2 = 1.3^2$ is wrong. Fix the units and verify the relationship.

8. State True or False:
   (a) The hypotenuse is the side opposite the right angle.
   (b) In a right triangle, the hypotenuse is always the longest side.
   (c) In a right triangle with legs $a$ and $b$ and hypotenuse $c$, $c = a + b$.
   (d) The relationship $a^2 + b^2 = c^2$ holds for $5, 12, 13$ with $c = 13$.

### Answers

1. The hypotenuse is $c = 10\text{ cm}$ (longest side).
   $a^2 + b^2 = 6^2 + 8^2 = 36 + 64 = 100$, and $c^2 = 10^2 = 100$.
   Both are equal ✅

2. The longest side is $17$, so if it is a right triangle, the hypotenuse must be $17$.
   $8^2 + 15^2 = 64 + 225 = 289$, and $17^2 = 289$.
   Both are equal ✅

3. Squares on the legs: $3 \times 3 = \mathbf{9}$ and $4 \times 4 = \mathbf{16}$. Square on the hypotenuse ($5$): $5 \times 5 = \mathbf{25}$.
   Relationship: $9 + 16 = 25$ ✅ (the areas of the two smaller squares add up to the area of the largest square).

4. - Large square: $(5 + 12)^2 = 17^2 = \mathbf{289}$
   - $4$ triangles: $4 \times \frac{1}{2} \times 5 \times 12 = \mathbf{120}$
   - Inner tilted square: $c = 13$ (since $5^2 + 12^2 = 169 = 13^2$), so $13^2 = \mathbf{169}$
   - Sum of pieces: $120 + 169 = 289$ ✅ (matches the large square)

5. $7^2 + 8^2 = 49 + 64 = \mathbf{113}$, and $10^2 = \mathbf{100}$. Since $113 \neq 100$ ❌, the Pythagoras relationship does not hold. Therefore, this triangle is **not** right-angled (if it were, the two values would have to be equal).

6. Sophia added the side lengths ($5 + 12 = 17$), whereas the Pythagoras theorem requires adding the **squares** of the legs.
   Correct calculation: $c^2 = 5^2 + 12^2 = 25 + 144 = 169$, so $c = 13$ (since $13^2 = 169$). Check: $13 < 17$ ✅ (the hypotenuse is always shorter than the sum of the two legs).

7. $1.2\text{ m}$ and $50\text{ cm}$ are in different units, so you cannot square and add them directly.
   Convert everything to centimetres: $1.2\text{ m} = 120\text{ cm}$ and $1.3\text{ m} = 130\text{ cm}$. Now $120^2 + 50^2 = 14{,}400 + 2{,}500 = 16{,}900 = 130^2$ ✅ (or in metres: $1.2^2 + 0.5^2 = 1.44 + 0.25 = 1.69 = 1.3^2$).

8. (a) **True** ✅. By definition, the hypotenuse is opposite the $90^\circ$ angle.
   (b) **True** ✅. The hypotenuse is always the longest side of a right triangle.
   (c) **False** ❌. The correct relation is $c^2 = a^2 + b^2$, never $c = a + b$.
   (d) **True** ✅. $5^2 + 12^2 = 25 + 144 = 169 = 13^2$.

---

Understanding the Pythagoras theorem puts a remarkably versatile tool in your hands. Today, we saw **what it states** and **why it is always true**.

**What's next?** Leo's $43\text{-inch}$ TV still leaves a practical puzzle: if you know the width and height, how do you calculate the exact diagonal? Or if you know the diagonal and height, how do you find the width? In Topic 2, we will use $a^2 + b^2 = c^2$ to **solve for an unknown side**, explore special whole-number families like $3\text{-}4\text{-}5$ (Pythagorean triples), and solve real-world problems from ladder safety to aviation paths.
