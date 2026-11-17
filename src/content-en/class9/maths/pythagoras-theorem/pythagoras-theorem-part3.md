# Chapter: Pythagoras Theorem (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [pythagoras-theorem-part2.md](pythagoras-theorem-part2.md).** (The chapter begins in [pythagoras-theorem.md](pythagoras-theorem.md).)
> **Topics covered in this file:**
> 3. The Converse and Classifying Triangles

---

# Topic 3: The Converse and Classifying Triangles

Until now, our reasoning has moved in one direction: *if* a triangle has a $90^\circ$ angle, *then* its sides satisfy $a^2 + b^2 = c^2$. In Topic 1, Maya proved this using a large $(a + b)^2$ square (and previewed the similar-triangles proof), and in Topic 2, she helped Firefighter Liam position his $10\text{ m}$ ladder $6\text{ m}$ from the wall while mastering missing sides, Pythagorean triples ($3\text{-}4\text{-}5$, $5\text{-}12\text{-}13$, $8\text{-}15\text{-}17\dots$), and everyday applications. In every single problem, we already knew a **$90^\circ$ angle was present**.

Now let us reverse the question: suppose you are only given the **three side lengths** of a triangle and know nothing about its angles. Can you check the squares of the sides to decide whether a $90^\circ$ angle exists? Yes—and that is the core idea of this final topic, followed by a complete chapter wrap-up and triples cheat-sheet at the end.

---

## Builder Liam and Apprentice Leo's Corner

Master builder Liam and his apprentice Leo are framing the timber foundation and roof trusses for a new garden studio. Before nailing down the first corner beams, Liam pauses to verify one critical detail: **is the corner an exact $90^\circ$ right angle?**

Leo asks, "Liam, why take extra time measuring? It looks pretty square to my eye."

Liam chuckles and hands Leo a tape measure. "Trusting your eyes on a corner means crooked walls and misaligned roof trusses down the line. Let's check it properly."

Here is what Liam does:
- Starting from the corner, he measures **$3\text{ feet}$** along one beam and makes a pencil mark.
- Along the other beam from the same corner, he measures **$4\text{ feet}$** and makes a second mark.
- Next, he measures the **straight diagonal distance** between the two marks. If it measures **exactly $5\text{ feet}$**, the corner is guaranteed to be $90^\circ$.

Leo checks the tape: $5\text{ feet}$ on the dot. "Locked in!" Liam says. "Now the roof trusses will sit true."

Leo thinks for a moment. "Wait—how does $3\text{-}4\text{-}5$ guarantee the corner is $90^\circ$? And what if that diagonal had come out shorter or longer than $5\text{ feet}$?"

That is exactly what we are about to explain.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Converse** | A statement formed by swapping the "if" part and the "then" part of an original statement | Original: right triangle $\implies a^2 + b^2 = c^2$. Converse: $a^2 + b^2 = c^2 \implies$ right triangle |
| **Longest side** | The side of a triangle with the greatest length | In $6, 8, 10$, the longest side is $10$ |
| **Acute triangle** | A triangle in which all three angles are strictly less than $90^\circ$ | Sides $5, 6, 7$ |
| **Right triangle** | *(From Topic 1)* A triangle with one angle equal to $90^\circ$ | Sides $3, 4, 5$ |
| **Obtuse triangle** | A triangle with one angle strictly greater than $90^\circ$ | Sides $4, 5, 7$ |
| **Given** | The facts provided at the start of a geometric proof | $AD \perp BC$ |
| **To prove** | The statement we need to deduce logically | $AB^2 - AC^2 = BD^2 - CD^2$ |

---

## Part A: What the Converse States

### Statement

In Topics 1 and 2, the theorem stated: **if** a triangle is right-angled, **then** $(\text{hypotenuse})^2 = \text{sum of the squares of the other two sides}$.

Its converse flips the direction:

> Suppose a triangle has longest side $c$ and remaining sides $a$ and $b$. If **$c^2 = a^2 + b^2$**, then the angle opposite side $c$ is **$90^\circ$**.

Be careful: a converse is not automatically true just because the original statement is true—it must be proved separately! *(For example, "If it rains, the street gets wet" is true, yet "If the street is wet, it rained" is not always true—someone may have washed a car.)* Fortunately, the converse of the Pythagoras theorem **is** always true.

### Why Is It True? (Proof Idea)

Suppose in $\triangle ABC$ we have $BC = a$, $CA = b$, $AB = c$, and **$c^2 = a^2 + b^2$**. We want to prove that $\angle C = 90^\circ$.

1. Construct a **separate** triangle $\triangle PQR$ with $PQ = a$, $QR = b$, and **$\angle Q = 90^\circ$** (we build it with a $90^\circ$ angle on purpose).
2. Because $\triangle PQR$ is right-angled at $Q$, the Pythagoras theorem applies: $PR^2 = a^2 + b^2$.
3. We are given that $c^2 = a^2 + b^2$. Therefore $PR^2 = c^2$, which means **$PR = c$**.
4. Now compare $\triangle ABC$ and $\triangle PQR$: all three pairs of sides are equal ($BC = PQ = a$, $CA = QR = b$, $AB = PR = c$).
5. By the **SSS congruence rule** (see [congruence-of-triangles-part2.md](../congruence-of-triangles/congruence-of-triangles-part2.md)), $\triangle ABC \cong \triangle PQR$.
6. Corresponding angles of congruent triangles are equal, so $\angle C = \angle Q = \mathbf{90^\circ}$.

**Big idea:** *"Any triangle whose three side lengths match a right triangle's sides must have the exact same shape and angles—including the $90^\circ$ angle—because three fixed side lengths lock a triangle completely."*

### Back to Liam's Corner

Liam marked $3\text{ ft}$ and $4\text{ ft}$ along the beams and measured a $5\text{ ft}$ diagonal. Check: $3^2 + 4^2 = 9 + 16 = 25 = 5^2$. By the converse, the angle opposite the $5\text{ ft}$ diagonal—the corner angle—must be **$90^\circ$**.

And what if the diagonal had measured **less** than $5\text{ ft}$? Then the corner would be pinched tighter than $90^\circ$ (acute). If it had measured **more** than $5\text{ ft}$, the corner would be stretched wider than $90^\circ$ (obtuse). Let us make that exact in Part C.

---

## Part B: Checking Whether a Triangle Is Right-Angled

**Steps:**
1. Identify the **longest** of the three sides and call it $c$.
2. Compute $c^2$ and $a^2 + b^2$ separately.
3. If they are equal, the triangle is right-angled (with $90^\circ$ opposite $c$); otherwise, it is not.

### Example 1: $9, 40, 41$

Longest side is $41$.
- $c^2 = 41^2 = 1681$
- $a^2 + b^2 = 9^2 + 40^2 = 81 + 1600 = 1681$

Since they are equal, the triangle **is right-angled**, with the $90^\circ$ angle opposite side $41$.

**Check:** $81 + 1600 = 1681$ and $41 \times 41 = 1681$ ✅

### Example 2: $16, 63, 65$

- $c^2 = 65^2 = 4225$
- $a^2 + b^2 = 16^2 + 63^2 = 256 + 3969 = 4225$

Equal, so it **is right-angled**.

**Check:** $63 \times 63 = 3969$, and $3969 + 256 = 4225 = 65 \times 65$ ✅

### Example 3: $15, 36, 39$

- $c^2 = 39^2 = 1521$
- $a^2 + b^2 = 15^2 + 36^2 = 225 + 1296 = 1521$

Equal, so it **is right-angled**.

**Check:** $39 \times 39 = 1521$ ✅ *(Notice this is $3 \times (5, 12, 13)$: $5 \times 3 = 15$, $12 \times 3 = 36$, $13 \times 3 = 39$.)*

### Example 4: $6, 8, 11$ (Not Right-Angled)

Longest side is $11$.
- $c^2 = 11^2 = 121$
- $a^2 + b^2 = 6^2 + 8^2 = 36 + 64 = 100$

Since $121 \neq 100$, the triangle is **not right-angled**. *(Notice $6, 8, 10$ would be right-angled; stretching the third side to $11$ forces the opposite angle wider than $90^\circ$, as we will classify in Part C.)*

**Check:** $6^2 = 36$, $8^2 = 64$, $11^2 = 121$, and $36 + 64 = 100 \neq 121$ ✅

---

## Part C: Acute or Obtuse? Comparing Squares (A Useful Extension)

*This neat extension of the converse lets you tell not just whether a triangle is right-angled, but also whether it is acute or obtuse.*

Let $c$ be the longest side and $a, b$ be the other two sides (assuming the three lengths actually form a triangle). There are only three possibilities:

| Comparison | Type of Triangle |
|---|---|
| $c^2 < a^2 + b^2$ | **Acute** (all three angles $< 90^\circ$) |
| $c^2 = a^2 + b^2$ | **Right** (the angle opposite $c$ is $90^\circ$) |
| $c^2 > a^2 + b^2$ | **Obtuse** (the angle opposite $c$ is $> 90^\circ$) |

**Intuition:** Imagine hinging legs $a$ and $b$ at $90^\circ$: the third side squared is $a^2 + b^2$. Open the hinge **wider** than $90^\circ$, and the opposite side $c$ grows longer ($c^2 > a^2 + b^2$). Pinch the hinge **narrower** than $90^\circ$, and the opposite side $c$ shrinks ($c^2 < a^2 + b^2$). That is why Liam knew a diagonal under $5\text{ ft}$ meant an acute corner and over $5\text{ ft}$ meant an obtuse corner!

### Example 5: $5, 6, 7$

$c = 7$, so $c^2 = 49$. Meanwhile $a^2 + b^2 = 25 + 36 = 61$. Since $49 < 61$, the triangle is **acute**.

### Example 6: $4, 5, 7$

$c = 7$, so $c^2 = 49$. Meanwhile $a^2 + b^2 = 16 + 25 = 41$. Since $49 > 41$, the triangle is **obtuse**.

### Example 7: $6, 8, 11$ (From Example 4)

$c^2 = 121 > 100 = 36 + 64$, so the triangle is **obtuse**.

### Example 8: $8, 15, 16$

$c = 16$, so $c^2 = 256$. Meanwhile $a^2 + b^2 = 64 + 225 = 289$. Since $256 < 289$, the triangle is **acute**.

**Check:** $15 \times 15 = 225$, $8 \times 8 = 64$, $225 + 64 = 289$; $16 \times 16 = 256$ ✅

**Important reminder:** Three lengths can only form a triangle in the first place if the sum of the two shorter sides is strictly greater than the longest side. All of our examples above—$(5, 6, 7)$, $(4, 5, 7)$ since $4 + 5 = 9 > 7$, $(6, 8, 11)$ since $14 > 11$, and $(8, 15, 16)$—pass that triangle inequality check.

---

## Part D: Proof-Style Problems

In Euclid's Geometry ([euclids-geometry-part4.md](../euclids-geometry/euclids-geometry-part4.md)), we saw the standard two-column proof layout: **Given**, **To prove**, and a **Statement / Reason** table. Here, our main tool in the Reason column is the **Pythagoras theorem**.

### Problem 1: A Relation from a Perpendicular

**Given:** In $\triangle ABC$, $AD \perp BC$ (with $D$ on $BC$).

**To prove:** $AB^2 - AC^2 = BD^2 - CD^2$

| Statement | Reason |
|---|---|
| 1. $\triangle ADB$ is right-angled ($\angle ADB = 90^\circ$), so $AB^2 = AD^2 + BD^2$ | Pythagoras theorem, since $AD \perp BC$ |
| 2. $\triangle ADC$ is right-angled ($\angle ADC = 90^\circ$), so $AC^2 = AD^2 + CD^2$ | Pythagoras theorem, since $AD \perp BC$ |
| 3. $AB^2 - AC^2 = (AD^2 + BD^2) - (AD^2 + CD^2)$ | Subtracting Statement 2 from Statement 1 |
| 4. $AB^2 - AC^2 = BD^2 - CD^2$ | $AD^2$ cancels out |

Hence proved.

**Numeric check:** Suppose $AD = 12, BD = 5, CD = 9$. Then $AB^2 = 144 + 25 = 169$ and $AC^2 = 144 + 81 = 225$, giving $AB^2 - AC^2 = 169 - 225 = -56$. Meanwhile $BD^2 - CD^2 = 25 - 81 = -56$ ✅

### Problem 2: Sides and Diagonals of a Rhombus

**Given:** $ABCD$ is a rhombus whose diagonals $AC$ and $BD$ intersect at $O$.

**To prove:** $AB^2 + BC^2 + CD^2 + DA^2 = AC^2 + BD^2$

*(In words: the sum of the squares of the four sides equals the sum of the squares of the two diagonals.)*

From [quadrilaterals.md](../quadrilaterals/quadrilaterals.md), the diagonals of a rhombus **bisect each other at $90^\circ$**, so $\angle AOB = 90^\circ$, $AO = \frac{AC}{2}$, and $BO = \frac{BD}{2}$.

| Statement | Reason |
|---|---|
| 1. $\angle AOB = 90^\circ$, $AO = \frac{AC}{2}$, $BO = \frac{BD}{2}$ | Diagonals of a rhombus bisect each other at $90^\circ$ |
| 2. $AB^2 = AO^2 + BO^2$ | Pythagoras theorem in right $\triangle AOB$ (right angle at $O$) |
| 3. $AB^2 = \left(\frac{AC}{2}\right)^2 + \left(\frac{BD}{2}\right)^2 = \frac{AC^2}{4} + \frac{BD^2}{4}$ | Substituting from Statement 1 |
| 4. $AB = BC = CD = DA$ | All four sides of a rhombus are equal |
| 5. $AB^2 + BC^2 + CD^2 + DA^2 = 4 \times AB^2$ | From Statement 4 |
| 6. $4 \times AB^2 = 4 \times \left(\frac{AC^2}{4} + \frac{BD^2}{4}\right) = AC^2 + BD^2$ | Substituting from Statement 3 |

Hence proved.

**Numeric check:** Take diagonals $6$ and $8$. Half-diagonals are $3$ and $4$, so each side is $\sqrt{9 + 16} = 5$. Sum of squares of the four sides $= 4 \times 25 = 100$. Sum of squares of the diagonals $= 36 + 64 = 100$ ✅

### Problem 3 (Optional): A Point Inside a Rectangle

**Given:** $ABCD$ is a rectangle and $O$ is any point **inside** it.

**To prove:** $OA^2 + OC^2 = OB^2 + OD^2$

**Construction:** Through $O$, draw a line parallel to $AD$ meeting $AB$ at $P$ and $DC$ at $Q$. Since $AD \perp AB$, this line is perpendicular to both $AB$ and $DC$: $\angle OPA = \angle OPB = \angle OQC = \angle OQD = 90^\circ$. Moreover, $APQD$ and $PBCQ$ are rectangles, so **$AP = DQ$** and **$BP = CQ$**.

| Statement | Reason |
|---|---|
| 1. $OA^2 = AP^2 + OP^2$ | Pythagoras theorem in $\triangle OPA$ (right-angled at $P$) |
| 2. $OC^2 = CQ^2 + OQ^2$ | Pythagoras theorem in $\triangle OQC$ (right-angled at $Q$) |
| 3. $OB^2 = BP^2 + OP^2$ | Pythagoras theorem in $\triangle OPB$ (right-angled at $P$) |
| 4. $OD^2 = DQ^2 + OQ^2$ | Pythagoras theorem in $\triangle OQD$ (right-angled at $Q$) |
| 5. $OA^2 + OC^2 = AP^2 + OP^2 + CQ^2 + OQ^2$ | Adding Statements 1 and 2 |
| 6. $OB^2 + OD^2 = BP^2 + OP^2 + DQ^2 + OQ^2$ | Adding Statements 3 and 4 |
| 7. Since $AP = DQ$ and $CQ = BP$, the RHS of Statement 5 equals $DQ^2 + OP^2 + BP^2 + OQ^2$, matching the RHS of Statement 6 | Opposite sides of a rectangle are equal |
| 8. $OA^2 + OC^2 = OB^2 + OD^2$ | From Statements 5, 6, and 7 |

Hence proved.

**Numeric check:** Take an $8 \times 6$ rectangle with $A(0, 0), B(8, 0), C(8, 6), D(0, 6)$ and $O(3, 2)$. Then $OA^2 = 9 + 4 = 13$, $OC^2 = 25 + 16 = 41 \implies OA^2 + OC^2 = 54$. Meanwhile $OB^2 = 25 + 4 = 29$, $OD^2 = 9 + 16 = 25 \implies OB^2 + OD^2 = 54$ ✅

---

## Part E: Finding $x$ (Using the Converse)

### Example 9: $x, x + 7, x + 8$ Form a Right Triangle. Find $x$.

The longest side is $x + 8$, so the right angle lies opposite it:

$$x^2 + (x + 7)^2 = (x + 8)^2$$

Expand both sides:
- Left-hand side: $x^2 + x^2 + 14x + 49 = 2x^2 + 14x + 49$
- Right-hand side: $x^2 + 16x + 64$

Set them equal:
$$2x^2 + 14x + 49 = x^2 + 16x + 64$$
$$x^2 - 2x - 15 = 0$$

Factorise: $(x - 5)(x + 3) = 0$, giving $x = 5$ or $x = -3$. Since a side length cannot be negative, **$\mathbf{x = 5}$**.

The sides are $5, 12, 13$.

**Check:** $5^2 + 12^2 = 25 + 144 = 169 = 13^2$ ✅ (and $12 = 5 + 7$, $13 = 5 + 8$ ✅)

### Example 10: $x, x + 2, x + 4$

Longest side is $x + 4$: $x^2 + (x + 2)^2 = (x + 4)^2$.

$$2x^2 + 4x + 4 = x^2 + 8x + 16 \implies x^2 - 4x - 12 = 0 \implies (x - 6)(x + 2) = 0$$

Since length is positive, **$\mathbf{x = 6}$**. The sides are $6, 8, 10$.

**Check:** $36 + 64 = 100 = 10^2$ ✅

### Example 11: Sides $11, x,$ and $x + 1$

Here $x + 1$ is the longest side (since $x + 1 > x$, and if $11$ were longest then $x < 11 \implies x^2 + (x+1)^2 = 121$ has no positive integer solution—wait: actually if $11$ were longest we'd get $x^2 + (x+1)^2 = 121 \implies 2x^2 + 2x - 120 = 0 \implies x^2 + x - 60 = 0$, which is not nice, and more simply in $11, x, x+1$ problems $x + 1$ is the longest side):

$$11^2 + x^2 = (x + 1)^2$$
$$121 + x^2 = x^2 + 2x + 1 \implies 2x = 120 \implies \mathbf{x = 60}$$

The sides are $11, 60, 61$.

**Check:** $121 + 3600 = 3721 = 61^2$ ✅

### Example 12: For What Values of $k$ Do $3k, 4k, 5k$ Form a Right Triangle?

$$(3k)^2 + (4k)^2 = 9k^2 + 16k^2 = 25k^2 = (5k)^2$$

This holds **for every $k > 0$**. That is why any multiple of $3\text{-}4\text{-}5$ (such as Liam measuring $6\text{ ft}$ and $8\text{ ft}$ with a $10\text{ ft}$ diagonal) always creates an exact right triangle!

---

## Common Pitfalls to Avoid

1. **Mistake 1: Failing to pick the longest side as $c$.**
   Given sides $8, 15, 17$, if someone sets $c = 15$ and compares $15^2 = 225$ with $8^2 + 17^2 = 64 + 289 = 353$, they will wrongly conclude the triangle is not right-angled. Always pick the longest side ($17$) as $c$ first: $17^2 = 289$ and $8^2 + 15^2 = 64 + 225 = 289$, so it **is** right-angled.

2. **Mistake 2: Applying the converse test to a shorter side.**
   For sides $6, 8, 11$, comparing $11^2 = 121$ with $6^2 + 8^2 = 100$ works properly. Comparing $8^2 = 64$ with $6^2 + 11^2 = 157$ is meaningless. In the converse test, $c$ must **always** be the longest side.

3. **Mistake 3: Arithmetic slips when squaring.**
   Writing $24^2 = 48$ or $484$ instead of $576$, or $41^2 = 1641$ instead of $1681$, ruins the comparison. When in doubt, break it down: $24 \times 24 = 20 \times 24 + 4 \times 24 = 480 + 96 = 576$.

4. **Mistake 4: Forgetting to check if the lengths can form a triangle at all.**
   Three lengths form a triangle only if the two shorter sides add up to more than the longest side. For example, $3, 4, 8$ cannot form *any* triangle ($3 + 4 = 7 < 8$), even though $8^2 = 64 > 9 + 16 = 25$ might tempt you to call it "obtuse."

5. **Mistake 5: Keeping a negative root when solving for $x$.**
   In Example 9, solving the quadratic gave $x = 5$ and $x = -3$. Since side lengths must be positive, reject $x = -3$.

---

## Quick Recap

- **Converse:** If the longest side $c$ satisfies $c^2 = a^2 + b^2$, then the angle opposite $c$ is **$90^\circ$**.
- **Why it is true:** Build a right triangle with legs $a$ and $b$; its hypotenuse must be $c$. By SSS congruence, your original triangle matches it, so its angle is also $90^\circ$.
- **Testing a triangle:** Pick the longest side $c$, then compare $c^2$ with $a^2 + b^2$.
- **Classification extension:** $c^2 < a^2 + b^2 \implies$ acute; $c^2 = a^2 + b^2 \implies$ right; $c^2 > a^2 + b^2 \implies$ obtuse.
- **Proof format:** State Given, To prove, and a Statement–Reason table, using the Pythagoras theorem in right triangles created by perpendiculars or diagonals.
- **Rhombus property:** The sum of the squares of the four sides equals the sum of the squares of the two diagonals.
- **Finding $x$:** Set up the converse equation with the longest side on the right, solve, keep only positive solutions that make valid side lengths, and check.
- **Builder's check:** A $3\text{-}4\text{-}5$ triangle (or any multiple) verifies an exact $90^\circ$ corner.

---

## Practice Questions

1. Which of the following sets of sides form a right-angled triangle? (a) $28, 45, 53$ (b) $11, 60, 61$ (c) $12, 16, 21$ (d) $36, 77, 85$

2. The sides of a triangle are $13$, $14$, and $15$. Decide whether it is acute, right-angled, or obtuse.

3. A triangle has sides $10$, $13$, and $17$. Is its largest angle acute, right, or obtuse? Justify.

4. Liam checks another corner by marking $6\text{ ft}$ on one beam and $8\text{ ft}$ on the other. What should the diagonal measure for the corner to be exactly $90^\circ$? If the diagonal comes out to $9.8\text{ ft}$, is the corner smaller or larger than $90^\circ$? Explain using squares.

5. The sides $13$, $x$, and $x + 1$ form a right triangle in which $x + 1$ is the longest side. Find $x$.

6. Find $x$ if the sides $x$, $x + 14$, and $x + 16$ form a right triangle.

7. In $\triangle PQR$, $PS \perp QR$ with $S$ on $QR$. Prove that $PQ^2 - PR^2 = QS^2 - RS^2$.

8. Prove that in a rhombus whose diagonals are $18\text{ cm}$ and $24\text{ cm}$, each side is $15\text{ cm}$, and then check that the sum of the squares of the four sides equals the sum of the squares of the diagonals.

9. $O$ is a point inside a rectangle $ABCD$ with $OA = 3$, $OB = 4$, and $OC = 5$. Find $OD$.

10. True or false, giving a reason. (a) A triangle with sides $2, 3, 4$ is right-angled. (b) If $a^2 + b^2 = c^2$, the angle opposite $c$ is $90^\circ$. (c) The sides $20, 48, 52$ and $24, 45, 51$ both form right-angled triangles. (d) Sides $3, 4, 8$ can form a triangle that is obtuse.

### Answers

1. Take the longest side as $c$ in each set:
   (a) $28, 45, 53$: $28^2 + 45^2 = 784 + 2025 = 2809 = 53^2$ ✅ **Right-angled.**
   (b) $11, 60, 61$: $11^2 + 60^2 = 121 + 3600 = 3721 = 61^2$ ✅ **Right-angled.**
   (c) $12, 16, 21$: $12^2 + 16^2 = 144 + 256 = 400$, while $21^2 = 441$ ($400 \neq 441$) ❌ **Not right-angled.**
   (d) $36, 77, 85$: $36^2 + 77^2 = 1296 + 5929 = 7225 = 85^2$ ✅ **Right-angled.**

2. $c = 15 \implies c^2 = 225$. Meanwhile $a^2 + b^2 = 13^2 + 14^2 = 169 + 196 = 365$. Since $225 < 365$, the triangle is **acute**.
   Check: $13^2 = 169$, $14^2 = 196$, $15^2 = 225$ ✅

3. $c = 17 \implies c^2 = 289$. Meanwhile $a^2 + b^2 = 10^2 + 13^2 = 100 + 169 = 269$. Since $289 > 269$, the largest angle (opposite $17$) is **obtuse**, so the triangle is obtuse.
   Check: $10^2 = 100$, $13^2 = 169$, $17^2 = 289$; also $10 + 13 = 23 > 17$, so it forms a valid triangle ✅

4. $6^2 + 8^2 = 36 + 64 = 100$, so the diagonal should measure $\sqrt{100} = \mathbf{10\text{ ft}}$.
   If the diagonal is $9.8\text{ ft}$: $9.8^2 = 96.04$, which is less than $100$ ($c^2 < a^2 + b^2$). Therefore the corner angle is **smaller than $90^\circ$ (acute)**—pinched slightly inward.
   Check: $9.8 \times 9.8 = 96.04$ ✅

5. Sides $13, x, x + 1$ ($x + 1$ is longest):
   $13^2 + x^2 = (x + 1)^2 \implies 169 + x^2 = x^2 + 2x + 1 \implies 2x = 168 \implies \mathbf{x = 84}$. The sides are $13, 84, 85$.
   Check: $169 + 7056 = 7225 = 85^2$ ✅

6. $x^2 + (x + 14)^2 = (x + 16)^2$
   $2x^2 + 28x + 196 = x^2 + 32x + 256 \implies x^2 - 4x - 60 = 0 \implies (x - 10)(x + 6) = 0$.
   Taking the positive root: **$\mathbf{x = 10}$**. The sides are $10, 24, 26$.
   Check: $100 + 576 = 676 = 26^2$ ✅

7. **Given:** In $\triangle PQR$, $PS \perp QR$.
   **To prove:** $PQ^2 - PR^2 = QS^2 - RS^2$.
   - In $\triangle PSQ$, $\angle PSQ = 90^\circ$, so $PQ^2 = PS^2 + QS^2$ (Pythagoras theorem).
   - In $\triangle PSR$, $\angle PSR = 90^\circ$, so $PR^2 = PS^2 + RS^2$ (Pythagoras theorem).
   - Subtracting the second equation from the first cancels $PS^2$: $PQ^2 - PR^2 = QS^2 - RS^2$. Hence proved.

8. The half-diagonals are $9\text{ cm}$ and $12\text{ cm}$, and they meet at $90^\circ$.
   $\text{Side}^2 = 9^2 + 12^2 = 81 + 144 = 225 \implies \text{side} = \mathbf{15\text{ cm}}$.
   Sum of squares of all four sides $= 4 \times 225 = 900$. Sum of squares of the diagonals $= 18^2 + 24^2 = 324 + 576 = 900$ ✅

9. For an interior point $O$ of rectangle $ABCD$, $OA^2 + OC^2 = OB^2 + OD^2$ (proved in Part D, Problem 3):
   $3^2 + 5^2 = 4^2 + OD^2 \implies 9 + 25 = 16 + OD^2 \implies OD^2 = 34 - 16 = 18$, so $OD = \sqrt{18} = \mathbf{3\sqrt{2} \approx 4.24}$.
   Check: $9 + 25 = 34$ and $16 + 18 = 34$ ✅ *(Note: $3\sqrt{2}$ is irrational; $4.24$ is an approximation.)*

10. (a) **False** ❌. $4$ is the longest side: $4^2 = 16$, while $2^2 + 3^2 = 4 + 9 = 13$. Since $16 > 13$, it is obtuse, not right-angled.
    (b) **True** ✅. This is the converse of the Pythagoras theorem proved via SSS congruence in Part A (where $c$ is the longest side).
    (c) **True** ✅. $20^2 + 48^2 = 400 + 2304 = 2704 = 52^2$ ($4 \times 5\text{-}12\text{-}13$) and $24^2 + 45^2 = 576 + 2025 = 2601 = 51^2$ ($3 \times 8\text{-}15\text{-}17$).
    (d) **False** ❌. Since $3 + 4 = 7 < 8$, those three lengths cannot form a triangle at all.

---

See how powerful that is? With just three side lengths and a few quick squares, you can tell whether a corner is dead-on $90^\circ$, pinched tight, or stretched wide. Just like Liam and Leo, you can check any right angle yourself.

---

# Chapter Wrap-Up: Pythagoras Theorem

| Topic | What You Learned | Key Takeaway |
|---|---|---|
| **1. Statement and Proof of the Pythagoras Theorem** | The relation $a^2 + b^2 = c^2$ in a right triangle, squares-on-sides picture, history (Baudhayana & Pythagoras), the $(a + b)^2$ rearrangement proof, and a preview of the similar-triangles proof | The square of the hypotenuse (opposite $90^\circ$) equals the sum of the squares of the two legs |
| **2. Applications, Triples, and Real-Life Problems** | Finding a missing hypotenuse or leg, recognizing Pythagorean triples, and solving problems with ladders, screens, rectangle diagonals, direct flight paths, guy-wires, equilateral triangles, and rhombuses | Identify the hypotenuse first; knowing common triples makes calculations instant |
| **3. The Converse and Classifying Triangles** | Recognizing a right angle from side lengths alone, classifying acute vs. obtuse triangles, two-column proof problems, and solving for $x$ | Pick the longest side $c$ first, then compare $c^2$ against $a^2 + b^2$ |

### Triples Cheat-Sheet

| Triple | Check ($a^2 + b^2 = c^2$) | Common Multiples |
|---|---|---|
| $3, 4, 5$ | $9 + 16 = 25$ | $6\text{-}8\text{-}10$, $9\text{-}12\text{-}15$, $12\text{-}16\text{-}20$ |
| $5, 12, 13$ | $25 + 144 = 169$ | $10\text{-}24\text{-}26$ |
| $8, 15, 17$ | $64 + 225 = 289$ | $16\text{-}30\text{-}34$ |
| $7, 24, 25$ | $49 + 576 = 625$ | $14\text{-}48\text{-}50$ |
| $20, 21, 29$ | $400 + 441 = 841$ | $40\text{-}42\text{-}58$ |
| $9, 40, 41$ | $81 + 1600 = 1681$ | $18\text{-}80\text{-}82$ |
| $11, 60, 61$ | $121 + 3600 = 3721$ | $22\text{-}120\text{-}122$ |

### Classifying a Triangle ($c$ is the Longest Side)

| Condition | Meaning |
|---|---|
| $c^2 < a^2 + b^2$ | Acute triangle |
| $c^2 = a^2 + b^2$ | Right triangle |
| $c^2 > a^2 + b^2$ | Obtuse triangle |

---

Whether you are checking a ladder's safety angle, framing a roof truss corner, finding a rectangle's diagonal, or calculating a direct flight path, you now command the Pythagoras theorem in both directions—forward and in reverse!
