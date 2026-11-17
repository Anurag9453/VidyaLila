# Chapter: Expansions (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [expansions-part2.md](expansions-part2.md).** (Topic 1 is in [expansions.md](expansions.md).)
> **Topics covered in this file:**
> 3. Square of a Trinomial: $(a + b + c)^2$

---

# Topic 3: Square of a Trinomial: $(a + b + c)^2$

In Topic 2, we saw how rearranging $(a + b)^2$ produces useful new formulas: $a^2 + b^2 = (a + b)^2 - 2ab$, the $4ab$ results, and finding missing expressions when only sums and products are given (like Sophia solving Dr. Bennett's riddle with sum $10$ and product $21$ to get $a^2 + b^2 = 58$). One lesson stood out clearly: **the square of two terms equals the sum of their squares plus twice their product.**

Now comes the next question: what happens when there are **three** terms inside the bracket, like $(a + b + c)^2$? Can we simply add the three squares together? No! Today we will see why not, and uncover the full, exact formula.

---

## Elena's Garden Patio Tiling Story

Before the summer garden party, **Elena** was designing a **square stone patio** for her backyard. She divided each side into three colored sections of stone:

- first section: **$4\text{ m}$** (terracotta tiles),
- second section: **$2\text{ m}$** (sandstone tiles),
- third section: **$1\text{ m}$** (slate tiles).

So the full side length is $4 + 2 + 1 = \mathbf{7\text{ m}}$, and the total patio area is $7 \times 7 = \mathbf{49\text{ m}^2}$.

When Elena laid out the guidelines along all three sections in both directions, the square patio split into **$9$ rectangular and square zones**:

```
          4         2        1
      +---------+-------+-----+
    4 |  4 × 4  | 4 × 2 |4 × 1|
      |   = 16  |  = 8  | = 4 |
      +---------+-------+-----+
    2 |  2 × 4  | 2 × 2 |2 × 1|
      |   = 8   |  = 4  | = 2 |
      +---------+-------+-----+
    1 |  1 × 4  | 1 × 2 |1 × 1|
      |   = 4   |  = 2  | = 1 |
      +---------+-------+-----+
```

Elena totaled up each type of tile zone:
- Three **square zones** (running diagonally from corner to corner): $16 + 4 + 1 = \mathbf{21\text{ m}^2}$
- The remaining **$6$ rectangular zones**, which appear in matching pairs: $(8 + 8) + (2 + 2) + (4 + 4) = \mathbf{28\text{ m}^2}$

Total area: $21 + 28 = \mathbf{49\text{ m}^2}$ ✅

If Elena had only ordered $16 + 4 + 1 = 21\text{ m}^2$ of stone, **$28\text{ m}^2$ of her patio would be missing**! That missing $28\text{ m}^2$ is the heart of this entire topic.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Trinomial** | An algebraic expression with three terms | $a + b + c$, $2x - y + 3$ |
| **Square terms** | The square of each individual term | $a^2, b^2, c^2$ |
| **Pair terms (cross terms)** | Twice the product of each pair of distinct terms | $2ab, 2bc, 2ca$ |
| **Expansion** | Multiplying out the brackets completely | Writing $(a + b + c)^2$ as $6$ separate terms |

---

## Part A: The Formula and Why It Works

> **$(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca$**

### Method 1: Group Two Terms into One Block

In Topic 1, we proved $(A + B)^2 = A^2 + 2AB + B^2$. Now treat $(a + b)$ as a single block **$A$**, and let $c$ be **$B$**.

| Step | What We Did |
|---|---|
| $(a + b + c)^2 = (A + c)^2$, where $A = a + b$ | Grouped the first two terms as one block |
| $= A^2 + 2Ac + c^2$ | Applied the Topic 1 square identity |
| $= (a + b)^2 + 2(a + b)c + c^2$ | Substituted $a + b$ back for $A$ |
| $= a^2 + 2ab + b^2 + 2ac + 2bc + c^2$ | Expanded both parts |
| $= a^2 + b^2 + c^2 + 2ab + 2bc + 2ca$ | Arranged neatly (since $ac = ca$) |

### Method 2: The Patio Tiling Grid

Elena's patio side was split into $a$, $b$, and $c$. Look at the $3 \times 3$ grid written with letters:

```
          a         b         c
      +---------+---------+---------+
    a |   a²    |   ab    |   ac    |
      +---------+---------+---------+
    b |   ba    |   b²    |   bc    |
      +---------+---------+---------+
    c |   ca    |   cb    |   c²    |
      +---------+---------+---------+
```

- Along the main diagonal: **$a^2, b^2, c^2$** (each appears once)
- In the other $6$ cells, in matching pairs: $ab$ twice, $bc$ twice, and $ca$ twice

Therefore: $a^2 + b^2 + c^2 + \mathbf{2ab + 2bc + 2ca}$.

### Pattern to Remember

> **Square of each term + twice the product of every pair.**

How many pairs can you form from three terms? $(a, b)$, $(b, c)$, and $(c, a)$ — **$3$ pairs**. So the full expansion always has **$3$ square terms + $3$ pair terms = $6$ terms**.

**Check (with numbers):** Let $a = 4, b = 2, c = 1$.
- LHS: $(4 + 2 + 1)^2 = 49$
- RHS: $16 + 4 + 1 + 2(8) + 2(2) + 2(4) = 21 + 16 + 4 + 8 = 49$ ✅

---

## Part B: Terms with Minus Signs

When any term carries a minus sign, the **squares stay positive** (because $(-b)^2 = b^2$). Only the **pair terms** change sign.

> **Rule:** The sign of each pair term $=$ **the product of the two terms' signs**.
> $(+) \times (+) = +$, $(-)\times(-) = +$, and $(+) \times (-) = -$.

### $(a - b + c)^2$

Think of this as $(a + (-b) + c)^2$:

- Squares: $a^2, b^2, c^2$
- $2 \times a \times (-b) = \mathbf{-2ab}$
- $2 \times (-b) \times c = \mathbf{-2bc}$
- $2 \times c \times a = \mathbf{+2ca}$

> $(a - b + c)^2 = a^2 + b^2 + c^2 - 2ab - 2bc + 2ca$

### $(a - b - c)^2$

- $2 \times a \times (-b) = \mathbf{-2ab}$
- $2 \times (-b) \times (-c) = \mathbf{+2bc}$ (negative $\times$ negative $=$ positive)
- $2 \times (-c) \times a = \mathbf{-2ca}$

> $(a - b - c)^2 = a^2 + b^2 + c^2 - 2ab + 2bc - 2ca$

**Check:** Let $a = 5, b = 2, c = 1$.
- $(5 - 2 - 1)^2 = 2^2 = 4$
- $25 + 4 + 1 - 20 + 4 - 10 = 4$ ✅

### Sign Table at a Glance

| Expression | $2ab$ | $2bc$ | $2ca$ |
|---|---|---|---|
| $(a + b + c)^2$ | $+$ | $+$ | $+$ |
| $(a - b + c)^2$ | $-$ | $-$ | $+$ |
| $(a + b - c)^2$ | $+$ | $-$ | $-$ |
| $(a - b - c)^2$ | $-$ | $+$ | $-$ |
| $(-a + b + c)^2$ | $-$ | $+$ | $-$ |

---

## Part C: Worked Expansions

### Example 1: $(2x + 3y + 4z)^2$

Here $a = 2x$, $b = 3y$, $c = 4z$.

- Squares: $(2x)^2 = 4x^2$, $(3y)^2 = 9y^2$, $(4z)^2 = 16z^2$
- $2(2x)(3y) = 12xy$
- $2(3y)(4z) = 24yz$
- $2(4z)(2x) = 16zx$

> **$= 4x^2 + 9y^2 + 16z^2 + 12xy + 24yz + 16zx$**

**Check:** Set $x = y = z = 1$. LHS $= (2 + 3 + 4)^2 = 81$. RHS $= 4 + 9 + 16 + 12 + 24 + 16 = 81$ ✅

### Example 2: $(x - 2y + 3z)^2$

Here $a = x$, $b = -2y$, $c = 3z$.

- Squares: $x^2$, $4y^2$, $9z^2$
- $2(x)(-2y) = -4xy$
- $2(-2y)(3z) = -12yz$
- $2(3z)(x) = 6zx$

> **$= x^2 + 4y^2 + 9z^2 - 4xy - 12yz + 6zx$**

**Check:** Set $x = y = z = 1$. LHS $= (1 - 2 + 3)^2 = 4$. RHS $= 1 + 4 + 9 - 4 - 12 + 6 = 4$ ✅

### Example 3: $\left(\frac{a}{2} - \frac{b}{3} + 1\right)^2$

- Squares: $\frac{a^2}{4}$, $\frac{b^2}{9}$, $1$
- $2\left(\frac{a}{2}\right)\left(-\frac{b}{3}\right) = -\frac{ab}{3}$
- $2\left(-\frac{b}{3}\right)(1) = -\frac{2b}{3}$
- $2(1)\left(\frac{a}{2}\right) = a$

> **$= \frac{a^2}{4} + \frac{b^2}{9} + 1 - \frac{ab}{3} - \frac{2b}{3} + a$**

**Check:** Set $a = 2, b = 3$. LHS $= (1 - 1 + 1)^2 = 1$. RHS $= 1 + 1 + 1 - 2 - 2 + 2 = 1$ ✅

### Example 4: $\left(x + \frac{1}{x} + 1\right)^2$

- Squares: $x^2$, $\frac{1}{x^2}$, $1$
- $2(x)\left(\frac{1}{x}\right) = 2$
- $2\left(\frac{1}{x}\right)(1) = \frac{2}{x}$
- $2(1)(x) = 2x$

Combine the constants $1$ and $2$:

> **$= x^2 + \frac{1}{x^2} + 2x + \frac{2}{x} + 3$**

**Check:** Set $x = 1$. LHS $= (1 + 1 + 1)^2 = 9$. RHS $= 1 + 1 + 2 + 2 + 3 = 9$ ✅

### Example 5: Mental Maths: $111^2$

Write $111 = 100 + 10 + 1$.

- Squares: $10{,}000 + 100 + 1 = 10{,}101$
- Pair terms: $2(100)(10) + 2(10)(1) + 2(1)(100) = 2000 + 20 + 200 = 2220$

> $111^2 = 10{,}101 + 2{,}220 = \mathbf{12,321}$

---

## Part D: Value-Finding Problems

Read the trinomial square formula grouped into three pieces:

> $(a + b + c)^2 = (a^2 + b^2 + c^2) + 2(ab + bc + ca)$

There are three "boxes" here: **the sum**, **the sum of squares**, and **the sum of pairwise products**. Whenever you know any two of them, you can solve for the third! It is the exact same game we played in Topic 2, simply with one extra term.

### Example 6: Find $a^2 + b^2 + c^2$

Given: $a + b + c = 9$ and $ab + bc + ca = 26$.

- $9^2 = (a^2 + b^2 + c^2) + 2(26)$
- $81 = (a^2 + b^2 + c^2) + 52$
- **$\mathbf{a^2 + b^2 + c^2 = 29}$**

**Check:** Try $a = 2, b = 3, c = 4$. Sum $= 9$, pairs $= 6 + 12 + 8 = 26$, squares $= 4 + 9 + 16 = 29$ ✅

### Example 7: Find $a + b + c$

Given: $a^2 + b^2 + c^2 = 50$ and $ab + bc + ca = 47$.

- $(a + b + c)^2 = 50 + 2(47) = 144$
- **$\mathbf{a + b + c = \pm 12}$**

Remember: taking a square root brings **both plus and minus** (just as in Topic 2).

**Check:** Try $3, 4, 5$. Squares $= 9 + 16 + 25 = 50$, pairs $= 12 + 20 + 15 = 47$, sum $= 12$ ✅. Using $-3, -4, -5$ gives sum $-12$, while the squares and pairwise products stay identical.

### Example 8: Find $ab + bc + ca$

Given: $a + b + c = 12$ and $a^2 + b^2 + c^2 = 64$.

- $144 = 64 + 2(ab + bc + ca)$
- $2(ab + bc + ca) = 80$
- **$\mathbf{ab + bc + ca = 40}$**

### Example 9: When $a + b + c = 0$

Then $0 = (a^2 + b^2 + c^2) + 2(ab + bc + ca)$, which means:

> **$\mathbf{a^2 + b^2 + c^2 = -2(ab + bc + ca)}$**

**Check:** Try $1, 2, -3$. Squares $= 1 + 4 + 9 = 14$. Pairs $= 2 - 6 - 3 = -7$. And $-2 \times (-7) = 14$ ✅

---

## Part E: Simplification

### Example 10: $(a + b + c)^2 - (a - b - c)^2$

Using the sign table from Part B:
- $(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca$
- $(a - b - c)^2 = a^2 + b^2 + c^2 - 2ab + 2bc - 2ca$

Subtract: all three squares cancel out, and $2bc$ cancels out too:

> $= 2ab - (-2ab) + 2ca - (-2ca) = \mathbf{4ab + 4ca}$

**Check:** Let $a = 3, b = 2, c = 1$. LHS $= 36 - 0 = 36$. RHS $= 24 + 12 = 36$ ✅

### Example 11: $(x + y + z)^2 + (x - y + z)^2$

- First: $x^2 + y^2 + z^2 + 2xy + 2yz + 2zx$
- Second: $x^2 + y^2 + z^2 - 2xy - 2yz + 2zx$

Add them: $2xy$ and $2yz$ cancel out:

> $= \mathbf{2x^2 + 2y^2 + 2z^2 + 4zx}$

**Check:** Let $x = y = z = 1$. LHS $= 9 + 1 = 10$. RHS $= 2 + 2 + 2 + 4 = 10$ ✅

---

## Common Pitfalls to Avoid

1. **Mistake 1: Adding only the squares.**
   $(a + b + c)^2 \neq a^2 + b^2 + c^2$. In Elena's patio project, making that mistake would leave $28\text{ m}^2$ of the courtyard unpaved! You must include the cross terms.

2. **Mistake 2: Forgetting the factor of $2$.**
   $(a + b + c)^2 = a^2 + b^2 + c^2 + \mathbf{2}ab + \mathbf{2}bc + \mathbf{2}ca$. In the $3 \times 3$ grid, each pair appears **twice**.

3. **Mistake 3: Leaving out one of the pair terms.**
   There are three pairs: $ab$, $bc$, and $ca$. The third one ($ca$) is the most commonly forgotten. Count your terms after expanding: there should be **$6$ terms** (before combining constants).

4. **Mistake 4: Getting the sign of a pair term wrong.**
   In $(a - b - c)^2$, the term $2bc$ is **positive**, because $(-b)(-c) = +bc$. Always multiply the signs of the two terms in the pair.

5. **Mistake 5: Forgetting to square the coefficient.**
   In $(2x + 3y + 4z)^2$, the first term is $4x^2$, not $2x^2$. Square the entire term: $(2x)^2 = 4x^2$.

6. **Mistake 6: Dropping $\pm$ when taking a square root.**
   If $(a + b + c)^2 = 144$, then $a + b + c = \mathbf{\pm 12}$, not just $12$.

---

## Quick Recap

- **$(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca$**
- Pattern: **square of each term + twice the product of every pair** ($6$ terms in total).
- Two ways to see why: group $(a + b)$ into one block, or use a $3 \times 3$ tiling grid.
- **Squares are always positive.** Each pair term's sign equals the product of its two terms' signs.
- Three linked quantities: sum, sum of squares, and sum of pairs. Knowing any two gives the third.
- Never forget **$\pm$** when taking square roots.
- When $a + b + c = 0$, $a^2 + b^2 + c^2 = -2(ab + bc + ca)$.
- Always **check** your expansion by plugging in simple test values such as $x = y = z = 1$.

---

## Practice Questions

1. Expand:
   (a) $(x + y + 2)^2$
   (b) $(3a - b + 2c)^2$
   (c) $\left(\frac{p}{2} + \frac{q}{3} - 1\right)^2$
   (d) $(-x + 2y - 3z)^2$

2. If $a + b + c = 10$ and $ab + bc + ca = 31$, find $a^2 + b^2 + c^2$.

3. If $a + b + c = 11$ and $a^2 + b^2 + c^2 = 45$, find $ab + bc + ca$.

4. If $a^2 + b^2 + c^2 = 29$ and $ab + bc + ca = 26$, find $a + b + c$.

5. Simplify: $(x + y + z)^2 - (x - y + z)^2$.

6. Using the identity, find the value of $1011^2$.

7. If $a + b + c = 0$ and $a^2 + b^2 + c^2 = 40$, find $ab + bc + ca$.

8. Expand $\left(x + \frac{1}{x} - 1\right)^2$.

9. How many terms are there in the expansion of $(a + b + c)^2$ after simplification? Name the square terms and the pair terms.

### Answers

1. (a) Squares: $x^2, y^2, 4$. Pairs: $2xy$, $2(y)(2) = 4y$, $2(2)(x) = 4x$.
   **$\mathbf{x^2 + y^2 + 4 + 2xy + 4y + 4x}$**
   (b) Squares: $9a^2, b^2, 4c^2$. Pairs: $2(3a)(-b) = -6ab$, $2(-b)(2c) = -4bc$, $2(2c)(3a) = 12ca$.
   **$\mathbf{9a^2 + b^2 + 4c^2 - 6ab - 4bc + 12ca}$**
   Check: $a = b = c = 1$. LHS $= (3 - 1 + 2)^2 = 16$. RHS $= 9 + 1 + 4 - 6 - 4 + 12 = 16$ ✅
   (c) Squares: $\frac{p^2}{4}, \frac{q^2}{9}, 1$. Pairs: $2\left(\frac{p}{2}\right)\left(\frac{q}{3}\right) = \frac{pq}{3}$, $2\left(\frac{q}{3}\right)(-1) = -\frac{2q}{3}$, $2(-1)\left(\frac{p}{2}\right) = -p$.
   **$\mathbf{\frac{p^2}{4} + \frac{q^2}{9} + 1 + \frac{pq}{3} - \frac{2q}{3} - p}$**
   (d) Squares: $x^2, 4y^2, 9z^2$. Pairs: $2(-x)(2y) = -4xy$, $2(2y)(-3z) = -12yz$, $2(-3z)(-x) = 6zx$.
   **$\mathbf{x^2 + 4y^2 + 9z^2 - 4xy - 12yz + 6zx}$**
2. $10^2 = (a^2 + b^2 + c^2) + 2(31)$, so $100 = (a^2 + b^2 + c^2) + 62$. **$\mathbf{a^2 + b^2 + c^2 = 38}$**
3. $121 = 45 + 2(ab + bc + ca)$, so $2(ab + bc + ca) = 76$. **$\mathbf{ab + bc + ca = 38}$**
   Check: try $2, 4, 5$. Sum $= 11$, squares $= 4 + 16 + 25 = 45$, pairs $= 8 + 20 + 10 = 38$ ✅
4. $(a + b + c)^2 = 29 + 52 = 81$, so **$\mathbf{a + b + c = \pm 9}$**
5. First: $x^2 + y^2 + z^2 + 2xy + 2yz + 2zx$. Second: $x^2 + y^2 + z^2 - 2xy - 2yz + 2zx$.
   Subtracting gives: **$\mathbf{4xy + 4yz}$**
   Check: $x = y = z = 1$. LHS $= 9 - 1 = 8$. RHS $= 4 + 4 = 8$ ✅
6. Write $1011 = 1000 + 10 + 1$.
   Squares: $1{,}000{,}000 + 100 + 1 = 1{,}000{,}101$. Pairs: $2(1000)(10) + 2(10)(1) + 2(1)(1000) = 20{,}000 + 20 + 2{,}000 = 22{,}020$.
   **$\mathbf{1011^2 = 1,022,121}$**
7. $0 = 40 + 2(ab + bc + ca)$, so **$\mathbf{ab + bc + ca = -20}$**
8. Squares: $x^2, \frac{1}{x^2}, 1$. Pairs: $2(x)\left(\frac{1}{x}\right) = 2$, $2\left(\frac{1}{x}\right)(-1) = -\frac{2}{x}$, $2(-1)(x) = -2x$.
   **$\mathbf{x^2 + \frac{1}{x^2} - 2x - \frac{2}{x} + 3}$**
   Check: $x = 1$. LHS $= (1 + 1 - 1)^2 = 1$. RHS $= 1 + 1 - 2 - 2 + 3 = 1$ ✅
9. **$6$ terms.** Square terms: $a^2, b^2, c^2$. Pair terms: $2ab, 2bc, 2ca$.

---

Next time you need to square a bracket with three terms, picture Elena's patio tiles: three square zones down the diagonal, and six rectangular zones in matching pairs. You've got this!

**What's next?** Up to now we have only squared brackets. In Topic 4, we move into 3D with **cubes** — $(a + b)^3$ and $(a - b)^3$ — where flat tiles give way to a solid block!
