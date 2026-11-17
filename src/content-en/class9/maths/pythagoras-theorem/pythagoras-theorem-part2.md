# Chapter: Pythagoras Theorem (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [pythagoras-theorem.md](pythagoras-theorem.md)** (which covered Topic 1: right-triangle vocabulary, the statement $c^2 = a^2 + b^2$, the squares-on-sides picture, history, the $(a + b)^2$ rearrangement proof, and Leo's TV story). Simplifying surds was covered in [../number-systems/number-systems-part4.md](../number-systems/number-systems-part4.md), and the height of an equilateral triangle appeared in [../mensuration/mensuration.md](../mensuration/mensuration.md).
> **Topics covered in this file:**
> 2. Applications of the Pythagoras Theorem

---

# Topic 2: Applications of the Pythagoras Theorem

In Topic 1, Leo's $43\text{-inch}$ TV introduced the Pythagoras theorem, we visualized $3\text{-}4\text{-}5$ through the areas of squares ($9 + 16 = 25$), and Maya proved $a^2 + b^2 = c^2$ using a large $(a + b)^2$ square. Up to now, that equation was a neat geometric fact. In this topic, it becomes an **everyday problem-solving tool**. Whenever you know any two sides of a right triangle and need the third, this formula gives you the answer—and right triangles show up everywhere: walls and floors, screens, sports fields, roof trusses, aviation paths, and ladders.

---

## Firefighter Liam's Ladder

A fire-safety drill is underway at school. Firefighter Liam has brought a long extension ladder to reach a **second-floor window** that sits **$8\text{ m}$** above the ground. The ladder itself is **$10\text{ m}$** long.

Maya, watching from the courtyard, asks, "Liam, how far from the base of the wall should you place the foot of the ladder?"

Liam smiles. "That's something we check on every call. Put the foot too close, and the ladder stands too steep and can tip backward. Put it too far out, and it won't reach the window—or its base can slip."

Maya sketches the setup on the ground: the vertical wall, the flat ground, and the slanted ladder. It forms a **right triangle**!
- The wall ($8\text{ m}$) and the ground ($x\text{ m}$) are the two **legs** meeting at a $90^\circ$ corner.
- The ladder ($10\text{ m}$) is the **hypotenuse**, sitting opposite the right angle.

Maya applies the formula from Topic 1:

$$x^2 + 8^2 = 10^2$$
$$x^2 + 64 = 100$$
$$x^2 = 100 - 64 = 36$$
$$x = \sqrt{36} = \mathbf{6\text{ m}}$$

"You need to place the foot of the ladder $6\text{ m}$ away from the wall," Maya says. Liam nods. "Spot on. That gives a safe climbing angle too."

**Check:** $6^2 + 8^2 = 36 + 64 = 100 = 10^2$ ✅

In this topic, we will practise Maya's habit on every problem: **spot the right triangle, identify the hypotenuse, and apply the formula**. Later, we will even solve a sliding-ladder problem!

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Hypotenuse ($c$)** | *(From Topic 1)* The side opposite the $90^\circ$ angle, always the longest side | The $10\text{ m}$ ladder |
| **Legs ($a, b$)** | *(From Topic 1)* The two shorter sides that form the $90^\circ$ angle | Wall $8\text{ m}$, ground $6\text{ m}$ |
| **Square root ($\sqrt{\phantom{x}}$)** | A number whose square equals the given value | $\sqrt{36} = 6$ |
| **Surd** | A root that is not a whole number, such as $\sqrt{2}$, written in simplified form like $5\sqrt{2}$ | $\sqrt{50} = 5\sqrt{2}$ |
| **Pythagorean triple** | Three whole numbers $a, b, c$ that satisfy $a^2 + b^2 = c^2$ (also called a Pythagorean triplet) | $3, 4, 5$ |
| **Diagonal** | *(From Topic 1)* A straight line joining one corner of a rectangle to the opposite corner | A $40\text{ m} \times 30\text{ m}$ field has a $50\text{ m}$ diagonal |

---

## Part A: Finding the Hypotenuse

When **both legs are known** and you need the hypotenuse:

> **$c^2 = a^2 + b^2$**, so **$c = \sqrt{a^2 + b^2}$**

Steps:
1. Square both legs.
2. Add the squares.
3. Take the **square root**. *(Forgetting this final step is one of the most common errors!)*

### Example 1: Legs $9$ and $12$

$$c^2 = 9^2 + 12^2 = 81 + 144 = 225$$
$$c = \sqrt{225} = \mathbf{15}$$

**Check:** $9^2 + 12^2 = 225 = 15^2$ ✅

### Example 2: Legs $5$ and $5$ (Answer as a Surd)

$$c^2 = 5^2 + 5^2 = 25 + 25 = 50$$
$$c = \sqrt{50}$$

$50$ is not a perfect square, but $50 = 25 \times 2$, and $25$ is a perfect square. Using the surd simplification rules from [Number Systems Part 4](../number-systems/number-systems-part4.md):

$$\sqrt{50} = \sqrt{25} \times \sqrt{2} = \mathbf{5\sqrt{2}}$$

As a decimal: $5\sqrt{2} \approx 5 \times 1.414 = \mathbf{7.07}$ (approximately).

**Check:** $(5\sqrt{2})^2 = 25 \times 2 = 50 = 25 + 25$ ✅

### Example 3: Legs $1$ and $2$

$$c^2 = 1^2 + 2^2 = 1 + 4 = 5$$
$$c = \mathbf{\sqrt{5}} \approx 2.236$$

Since $5$ has no perfect-square factor other than $1$, $\sqrt{5}$ cannot be simplified further—leave it in exact form as $\sqrt{5}$.

**Check:** $(\sqrt{5})^2 = 5 = 1 + 4$ ✅

---

## Part B: Finding a Leg

Now suppose the **hypotenuse and one leg are known**, and you need the other leg—just like Firefighter Liam's ladder problem.

> From **$a^2 + b^2 = c^2$**, we rearrange to **$a^2 = c^2 - b^2$**, so **$a = \sqrt{c^2 - b^2}$**

**Important:** Always subtract from the **hypotenuse squared** ($c^2 - b^2$), never the other way around.

### Example 4: Hypotenuse $17$, One Leg $8$

$$a^2 = 17^2 - 8^2 = 289 - 64 = 225$$
$$a = \sqrt{225} = \mathbf{15}$$

**Check:** $15^2 + 8^2 = 225 + 64 = 289 = 17^2$ ✅

### Example 5: Hypotenuse $9$, One Leg $7$ (Answer as a Surd)

$$a^2 = 9^2 - 7^2 = 81 - 49 = 32$$
$$a = \sqrt{32} = \sqrt{16} \times \sqrt{2} = \mathbf{4\sqrt{2}} \approx 4 \times 1.414 = \mathbf{5.66}$$

**Check:** $(4\sqrt{2})^2 = 16 \times 2 = 32$, and $32 + 49 = 81 = 9^2$ ✅

### Example 6: Hypotenuse $13$, One Leg $7$

$$a^2 = 13^2 - 7^2 = 169 - 49 = 120$$
$$a = \sqrt{120} = \sqrt{4} \times \sqrt{30} = \mathbf{2\sqrt{30}} \approx 2 \times 5.477 = \mathbf{10.95}$$

**Check:** $(2\sqrt{30})^2 = 4 \times 30 = 120$, and $120 + 49 = 169 = 13^2$ ✅

---

## Part C: Pythagorean Triples

In Liam's ladder problem the sides came out to $6, 8, 10$, and in Topic 1 we saw $3, 4, 5$. All three sides were exact whole numbers—no surds at all. Three positive whole numbers $(a, b, c)$ satisfying $a^2 + b^2 = c^2$ are called a **Pythagorean triple** (or Pythagorean triplet).

### Common Triples

| $a$ | $b$ | $c$ | Check |
|---|---|---|---|
| $3$ | $4$ | $5$ | $9 + 16 = 25$ ✅ |
| $5$ | $12$ | $13$ | $25 + 144 = 169$ ✅ |
| $8$ | $15$ | $17$ | $64 + 225 = 289$ ✅ |
| $7$ | $24$ | $25$ | $49 + 576 = 625$ ✅ |
| $20$ | $21$ | $29$ | $400 + 441 = 841$ ✅ |

Knowing these by heart saves huge amounts of time: as soon as you spot two of the numbers in a problem, you recognize the third immediately.

### Multiples Are Also Triples

Multiply all three numbers of any Pythagorean triple by the **same whole number**, and you get another Pythagorean triple:

- Multiply $3\text{-}4\text{-}5$ by $2$: **$6\text{-}8\text{-}10$** ($36 + 64 = 100$ ✅) — Firefighter Liam's ladder!
- Multiply $3\text{-}4\text{-}5$ by $3$: **$9\text{-}12\text{-}15$** ($81 + 144 = 225$ ✅) — Example 1!
- Multiply $5\text{-}12\text{-}13$ by $2$: **$10\text{-}24\text{-}26$** ($100 + 576 = 676 = 26^2$ ✅)

**Why does this work?** If $a^2 + b^2 = c^2$, then $(ka)^2 + (kb)^2 = k^2(a^2 + b^2) = k^2c^2 = (kc)^2$. Geometrically, you are simply scaling the triangle up without changing its $90^\circ$ angle.

### Formula for Generating Triples

Pick any whole number $m > 1$. Then:

> **$(2m,\; m^2 - 1,\; m^2 + 1)$** is always a Pythagorean triple.

Let us test it:

| $m$ | $2m$ | $m^2 - 1$ | $m^2 + 1$ | Check |
|---|---|---|---|---|
| $2$ | $4$ | $3$ | $5$ | $16 + 9 = 25$ ✅ |
| $3$ | $6$ | $8$ | $10$ | $36 + 64 = 100$ ✅ |
| $4$ | $8$ | $15$ | $17$ | $64 + 225 = 289$ ✅ |

**Why does this always work?** Expand the squares:
$$(2m)^2 + (m^2 - 1)^2 = 4m^2 + m^4 - 2m^2 + 1 = m^4 + 2m^2 + 1 = (m^2 + 1)^2 \quad \text{✅}$$

Try two more: $m = 5$ gives $(10, 24, 26)$, and $m = 6$ gives $(12, 35, 37)$. Check: $144 + 1225 = 1369 = 37^2$ ✅.

**Note:** This formula does **not** produce *every* possible triple (for instance, $20\text{-}21\text{-}29$ does not come directly from it), yet it lets you generate infinitely many triples whenever you want.

---

## Part D: Everyday Applications

In every word problem below, start with a quick sketch, mark the $90^\circ$ angle, confirm which side is the hypotenuse, and then solve.

### Ladder and Wall

**Example 7:** A $13\text{ m}$ ladder leans against a vertical wall with its foot $5\text{ m}$ from the wall. How high up the wall does the ladder reach?

The ladder is the hypotenuse ($13$), the ground leg is $5$, and the wall height is $h$:
$$h^2 = 13^2 - 5^2 = 169 - 25 = 144$$
$$h = \mathbf{12\text{ m}}$$

**Check:** $5^2 + 12^2 = 25 + 144 = 169 = 13^2$ ✅

**Example 8 (Sliding ladder):** A $25\text{ m}$ ladder rests against a wall with its foot $7\text{ m}$ from the base. If the **top of the ladder slides $4\text{ m}$ down** the wall, how far does the **foot slide outward**?

*Before slipping:* original height $= \sqrt{25^2 - 7^2} = \sqrt{625 - 49} = \sqrt{576} = \mathbf{24\text{ m}}$.
*After slipping:* new height $= 24 - 4 = \mathbf{20\text{ m}}$.
New distance of the foot from the wall $= \sqrt{25^2 - 20^2} = \sqrt{625 - 400} = \sqrt{225} = \mathbf{15\text{ m}}$.
Distance the foot slid outward $= 15 - 7 = \mathbf{8\text{ m}}$.

Notice that even though the top slid down $4\text{ m}$, the foot slid out $8\text{ m}$—not $4\text{ m}$! They belong to two different right triangles ($7\text{-}24\text{-}25$ and $15\text{-}20\text{-}25$), so each position must be solved separately.

**Check:** $15^2 + 20^2 = 225 + 400 = 625 = 25^2$ ✅ and $7^2 + 24^2 = 49 + 576 = 625$ ✅

### TV or Phone Screen

The advertised size of a TV or smartphone screen is its **diagonal** (in inches), just like Leo's $43\text{-inch}$ TV in Topic 1. Since the screen is a rectangle, the diagonal is the hypotenuse.

**Example 9:** A $40\text{-inch}$ TV screen has a height of $24\text{ inches}$. What is its width?
$$w^2 = 40^2 - 24^2 = 1600 - 576 = 1024$$
$$w = \sqrt{1024} = \mathbf{32\text{ inches}}$$

**Check:** $32^2 + 24^2 = 1024 + 576 = 1600 = 40^2$ ✅ *(Notice $32\text{-}24\text{-}40$ is $8 \times (4, 3, 5)$!)*

**Example 10:** A smartphone screen is $2.5\text{ inches}$ wide and $6\text{ inches}$ tall. What is its diagonal screen size?
$$d^2 = 2.5^2 + 6^2 = 6.25 + 36 = 42.25 \implies d = \mathbf{6.5\text{ inches}} \quad (\text{since } 6.5 \times 6.5 = 42.25)$$

### Diagonal of a Rectangle

**Example 11:** A rectangular sports field is $40\text{ m}$ long and $30\text{ m}$ wide. How far do you walk if you cut straight across from one corner to the opposite corner?
$$d^2 = 40^2 + 30^2 = 1600 + 900 = 2500 \implies d = \mathbf{50\text{ m}}$$
Walking along the edges takes $40 + 30 = 70\text{ m}$, so cutting across the diagonal saves **$20\text{ m}$**!

**Example 12:** The diagonal of a rectangle is $26\text{ cm}$ and one side is $24\text{ cm}$. Find the other side, perimeter, and area.
$$b^2 = 26^2 - 24^2 = 676 - 576 = 100 \implies b = \mathbf{10\text{ cm}}$$
$$\text{Perimeter} = 2(24 + 10) = \mathbf{68\text{ cm}}, \qquad \text{Area} = 24 \times 10 = \mathbf{240\text{ cm}^2}$$
**Check:** $24^2 + 10^2 = 576 + 100 = 676 = 26^2$ ✅

### North Then East: Direct Path Back

In aviation and navigation, flying directly between two airports ("as the crow flies") is much shorter than flying legs along perpendicular compass headings.

**Example 13:** A small plane flies **$9\text{ km}$ due north** from an airfield and then **$12\text{ km}$ due east**. What is the shortest direct flight distance back to the airfield?
North and east meet at a **$90^\circ$** angle, forming a right triangle:
$$d^2 = 9^2 + 12^2 = 81 + 144 = 225 \implies d = \mathbf{15\text{ km}}$$
(Retracing the two legs would take $9 + 12 = 21\text{ km}$; the direct flight is only $15\text{ km}$.)

**Example 14:** A hiker walks $20\text{ m}$ due west and then $21\text{ m}$ due south. What is her straight-line distance from the starting point?
$$d^2 = 20^2 + 21^2 = 400 + 441 = 841 \implies d = \mathbf{29\text{ m}} \quad (20\text{-}21\text{-}29\text{ triple})$$

### Support Wire for a Pole or Tree

**Example 15:** A guy-wire is stretched from the top of a vertical pole to a stake in the ground. The wire is $15\text{ m}$ long and anchored $9\text{ m}$ from the base of the pole. How tall is the pole?
$$h^2 = 15^2 - 9^2 = 225 - 81 = 144 \implies h = \mathbf{12\text{ m}}$$
**Check:** $9^2 + 12^2 = 81 + 144 = 225 = 15^2$ ✅

**Example 16:** A $24\text{ m}$ tall utility pole is stabilized by a $26\text{ m}$ cable attached to its top. How far from the base of the pole must the cable be anchored?
$$x^2 = 26^2 - 24^2 = 676 - 576 = 100 \implies x = \mathbf{10\text{ m}}$$

### Height of an Equilateral Triangle

In [../mensuration/mensuration.md](../mensuration/mensuration.md), we used the Pythagoras theorem to find the height of an equilateral triangle (a shape commonly used in symmetrical **roof trusses** and geometric tiles). Here is that same derivation:

In an equilateral triangle of side $a$, dropping a perpendicular height from the top vertex bisects the base into two halves of length $\frac{a}{2}$. This creates a right triangle with hypotenuse $a$ and one leg $\frac{a}{2}$:

$$h^2 = a^2 - \left(\frac{a}{2}\right)^2 = a^2 - \frac{a^2}{4} = \frac{3a^2}{4}, \quad \text{so} \quad \mathbf{h = \frac{\sqrt{3}}{2}a}$$

**Example 17:** Find the height of an equilateral triangle of side $10\text{ cm}$.
$$h = \frac{\sqrt{3}}{2} \times 10 = \mathbf{5\sqrt{3} \approx 8.66\text{ cm}}$$
**Check directly with Pythagoras:** $10^2 - 5^2 = 100 - 25 = 75$, and $\sqrt{75} = \sqrt{25} \times \sqrt{3} = 5\sqrt{3}$ ✅

**Example 18:** A decorative tile is an equilateral triangle of side $12\text{ cm}$. Find its height and area.
$$h = \frac{\sqrt{3}}{2} \times 12 = \mathbf{6\sqrt{3} \approx 10.39\text{ cm}}$$
$$\text{Area} = \frac{1}{2} \times 12 \times 6\sqrt{3} = \mathbf{36\sqrt{3}\text{ cm}^2}$$
**Check:** $\frac{\sqrt{3}}{4} \times 12^2 = \frac{\sqrt{3}}{4} \times 144 = 36\sqrt{3}$ ✅

### Rhombus and Its Diagonals

The diagonals of a rhombus **bisect each other at $90^\circ$**, splitting the rhombus into $4$ identical right triangles whose hypotenuse is the side of the rhombus.

**Example 19:** The diagonals of a rhombus are $16\text{ cm}$ and $30\text{ cm}$. Find its side length, perimeter, and area.
Half-diagonals are $8\text{ cm}$ and $15\text{ cm}$.
$$\text{side}^2 = 8^2 + 15^2 = 64 + 225 = 289 \implies \text{side} = \mathbf{17\text{ cm}}$$
$$\text{Perimeter} = 4 \times 17 = \mathbf{68\text{ cm}}, \qquad \text{Area} = \frac{1}{2} \times 16 \times 30 = \mathbf{240\text{ cm}^2}$$

**Example 20:** A rhombus has side $13\text{ cm}$ and one diagonal $24\text{ cm}$. Find the length of the other diagonal.
Half of the given diagonal $= 12\text{ cm}$. Let the other half-diagonal be $x$:
$$x^2 = 13^2 - 12^2 = 169 - 144 = 25 \implies x = 5\text{ cm}$$
So the full second diagonal $= 2 \times 5 = \mathbf{10\text{ cm}}$.
**Check:** $12^2 + 5^2 = 144 + 25 = 169 = 13^2$ ✅

---

## Common Pitfalls to Avoid

1. **Mistake 1: Subtracting in the wrong order when finding a leg.**
   When solving for a leg, always subtract the smaller square from the **hypotenuse's square**.
   - Wrong: Hypotenuse $13$, leg $5$: $5^2 - 13^2 = 25 - 169 = -144$. A negative square is impossible for a real length!
   - Right: $13^2 - 5^2 = 169 - 25 = 144$, so the missing leg is **$\mathbf{12}$**.

2. **Mistake 2: Forgetting to take the square root at the end.**
   - Wrong: Legs $6$ and $8$: $c^2 = 36 + 64 = 100$, "so $c = 100$."
   - Right: $c^2 = 100 \implies c = \sqrt{100} = \mathbf{10}$.
   Do a quick sanity check: a $100\text{ m}$ ladder for legs of $6\text{ m}$ and $8\text{ m}$ makes no sense! The hypotenuse is longer than each leg, not ten times as big.

3. **Mistake 3: Leaving surds unsimplified.**
   - Incomplete: Stopping at $c = \sqrt{72}$.
   - Complete: $\sqrt{72} = \sqrt{36} \times \sqrt{2} = \mathbf{6\sqrt{2}} \approx 6 \times 1.414 = \mathbf{8.49}$.
   Even though $\sqrt{72}$ is numerically equal, always pull out perfect-square factors so the answer is clean and simplified.

4. **Mistake 4: Treating the wrong side as the hypotenuse.**
   In a $7, 24, 25$ right triangle, suppose you are given $7$ and $25$ and asked for the third side ($24$).
   - Wrong: $7^2 + 25^2 = 49 + 625 = 674$. ($25$ is the hypotenuse, not a leg!)
   - Right: The hypotenuse is the longest side, opposite the right angle: **$25$**. So $24^2 = 25^2 - 7^2 = 625 - 49 = 576$, giving **$\mathbf{24}$**.

5. **Mistake 5: Applying $c^2 = a^2 + b^2$ to triangles that are not right-angled.**
   $c^2 = a^2 + b^2$ works **only** for right triangles. If a problem does not state or establish a $90^\circ$ angle, do not blindly apply this formula. *(In Topic 3, we will learn the reverse question: how to tell from three side lengths whether a triangle actually has a $90^\circ$ angle.)*

---

## Quick Recap

- **Finding the hypotenuse:** $c = \sqrt{a^2 + b^2}$ (**add** the squares, then take the square root).
- **Finding a leg:** $a = \sqrt{c^2 - b^2}$ (**subtract** from the hypotenuse squared, then take the square root).
- **Surd answers:** Simplify roots like $\sqrt{50} = 5\sqrt{2}$ and $\sqrt{32} = 4\sqrt{2}$ by factoring out perfect squares.
- **Pythagorean triples:** $3\text{-}4\text{-}5$, $5\text{-}12\text{-}13$, $8\text{-}15\text{-}17$, $7\text{-}24\text{-}25$, $20\text{-}21\text{-}29$, plus all of their positive whole-number multiples.
- **Triple generator:** For any integer $m > 1$, $(2m, m^2 - 1, m^2 + 1)$ gives a Pythagorean triple (for $m = 2, 3, 4$: $4\text{-}3\text{-}5$, $6\text{-}8\text{-}10$, $8\text{-}15\text{-}17$).
- **Everyday right triangles:** Ladders against walls, TV/phone screens, rectangle diagonals, north–east direct paths, support guy-wires, equilateral triangle height $\frac{\sqrt{3}}{2}a$, and rhombus half-diagonals.
- **Golden rule:** Always verify which side sits opposite the $90^\circ$ angle—that side is the hypotenuse.

---

## Practice Questions

1. The two legs of a right triangle are $24\text{ cm}$ and $7\text{ cm}$. Find the hypotenuse.
2. The hypotenuse of a right triangle is $29\text{ cm}$ and one leg is $20\text{ cm}$. Find the other leg.
3. Find the hypotenuse of a right triangle with legs $4\text{ cm}$ and $6\text{ cm}$. Give the answer as a simplified surd.
4. A right triangle has hypotenuse $12\text{ cm}$ and one leg $8\text{ cm}$. Find the other leg as a simplified surd.
5. A $17\text{ m}$ ladder reaches a window that is $15\text{ m}$ above the ground. How far is the foot of the ladder from the wall?
6. The foot of a $10\text{ m}$ ladder is $6\text{ m}$ from a wall. The foot is pulled $2\text{ m}$ further away from the wall. How far does the top of the ladder slide down?
7. The diagonal of a rectangle is $25\text{ cm}$ and one side is $7\text{ cm}$. Find the other side and the perimeter.
8. The diagonals of a rhombus are $10\text{ cm}$ and $24\text{ cm}$. Find its side length and perimeter.
9. Find the height of an equilateral triangle of side $14\text{ cm}$. Give the answer in surd form and approximately.
10. Use the formula $(2m, m^2 - 1, m^2 + 1)$ with $m = 7$ to make a triple, and check it.
11. Which of these are Pythagorean triples? (a) $33, 56, 65$ (b) $6, 9, 11$ (c) $12, 16, 20$ (d) $9, 12, 16$
12. A girl walks $15\text{ m}$ south and then $8\text{ m}$ east. What is the shortest distance back to her starting point?
13. True or false? (a) $c^2 = a^2 + b^2$ works for every triangle. (b) Doubling a Pythagorean triple gives another triple. (c) The hypotenuse is always the longest side of a right triangle. (d) $\sqrt{a^2 + b^2} = a + b$.

### Answers

1. $c^2 = 24^2 + 7^2 = 576 + 49 = 625 \implies c = \mathbf{25\text{ cm}}$.
   Check: $7^2 + 24^2 = 625 = 25^2$ ✅

2. $b^2 = 29^2 - 20^2 = 841 - 400 = 441 \implies b = \mathbf{21\text{ cm}}$.
   Check: $20^2 + 21^2 = 400 + 441 = 841 = 29^2$ ✅

3. $c^2 = 4^2 + 6^2 = 16 + 36 = 52 \implies c = \sqrt{52} = \sqrt{4} \times \sqrt{13} = \mathbf{2\sqrt{13}\text{ cm}} \approx 7.21\text{ cm}$.
   Check: $(2\sqrt{13})^2 = 4 \times 13 = 52$ ✅

4. $b^2 = 12^2 - 8^2 = 144 - 64 = 80 \implies b = \sqrt{80} = \sqrt{16} \times \sqrt{5} = \mathbf{4\sqrt{5}\text{ cm}} \approx 8.94\text{ cm}$.
   Check: $80 + 64 = 144 = 12^2$ ✅

5. $x^2 = 17^2 - 15^2 = 289 - 225 = 64 \implies x = \mathbf{8\text{ m}}$.
   Check: $8^2 + 15^2 = 64 + 225 = 289 = 17^2$ ✅

6. Initial height $= \sqrt{10^2 - 6^2} = \sqrt{64} = 8\text{ m}$.
   When the foot moves to $6 + 2 = 8\text{ m}$ from the wall, new height $= \sqrt{10^2 - 8^2} = \sqrt{36} = 6\text{ m}$.
   The top slides down $8 - 6 = \mathbf{2\text{ m}}$.
   Check: $8^2 + 6^2 = 100 = 10^2$ ✅

7. Other side$^2 = 25^2 - 7^2 = 625 - 49 = 576 \implies \text{side} = \mathbf{24\text{ cm}}$.
   Perimeter $= 2(24 + 7) = \mathbf{62\text{ cm}}$.
   Check: $7^2 + 24^2 = 625$ ✅

8. Half-diagonals are $5\text{ cm}$ and $12\text{ cm}$.
   $\text{Side}^2 = 5^2 + 12^2 = 25 + 144 = 169 \implies \text{side} = \mathbf{13\text{ cm}}$.
   Perimeter $= 4 \times 13 = \mathbf{52\text{ cm}}$.
   Check: $5^2 + 12^2 = 13^2$ ✅

9. $h = \frac{\sqrt{3}}{2} \times 14 = \mathbf{7\sqrt{3}\text{ cm}} \approx 7 \times 1.732 = \mathbf{12.12\text{ cm}}$.
   Check: $14^2 - 7^2 = 196 - 49 = 147 = 49 \times 3 \implies \sqrt{147} = 7\sqrt{3}$ ✅

10. For $m = 7$: $2m = 14$, $m^2 - 1 = 48$, $m^2 + 1 = 50$. The triple is **$(14, 48, 50)$**.
    Check: $14^2 + 48^2 = 196 + 2304 = 2500 = 50^2$ ✅ *(this is double $7\text{-}24\text{-}25$).*

11. (a) $33^2 + 56^2 = 1089 + 3136 = 4225 = 65^2$ — **Yes** ✅.
    (b) $6^2 + 9^2 = 36 + 81 = 117$, while $11^2 = 121$ — **No** ❌.
    (c) $12^2 + 16^2 = 144 + 256 = 400 = 20^2$ — **Yes** ✅ ($4 \times 3\text{-}4\text{-}5$).
    (d) $9^2 + 12^2 = 81 + 144 = 225$, while $16^2 = 256$ — **No** ❌ *(the longest side is $16$, whereas $\sqrt{225} = 15$).*

12. $d^2 = 15^2 + 8^2 = 225 + 64 = 289 \implies d = \mathbf{17\text{ m}}$.
    Check: $8\text{-}15\text{-}17$ triple ✅

13. (a) **False** ❌. It holds only for right-angled triangles.
    (b) **True** ✅. Since $(2a)^2 + (2b)^2 = 4(a^2 + b^2) = 4c^2 = (2c)^2$.
    (c) **True** ✅. The hypotenuse is always the longest side of a right triangle.
    (d) **False** ❌. For example, with $a = 3, b = 4$: $\sqrt{3^2 + 4^2} = \sqrt{25} = 5$, whereas $3 + 4 = 7$.

---

Maya now spots right triangles in every ladder drill, rectangular field, and flight path. Next time you see a ladder leaning against a wall or a diagonal support beam in a roof truss, look for the hidden right triangle inside it.

**What's next?** So far, we always started knowing that a triangle had a $90^\circ$ angle and used that fact to find a missing side. Now flip the question around: suppose you are given **all three side lengths** of a triangle, with no angle marked at all—can you tell purely from the numbers whether it contains a $90^\circ$ angle? Topic 3 answers that reverse question.
