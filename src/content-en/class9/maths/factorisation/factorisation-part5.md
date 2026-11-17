# Chapter: Factorisation (Part 5)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [factorisation-part4.md](factorisation-part4.md)** (which covers Topic 4: Difference of Two Squares). Topic 1 (the full overview of all methods) is in [factorisation.md](factorisation.md).
> **Topics covered in this file:**
> 5. Factorisation of Quadratic Trinomials

---

# Topic 5: Factorisation of Quadratic Trinomials

In Topic 4, we broke apart expressions with **2 terms**, such as $3x^2 - 75 = 3(x + 5)(x - 5)$ (the difference of two squares). Now we step forward to expressions with **3 terms** containing $x^2$, $x$, and a constant. These are called **quadratic trinomials**.

The great news is that this topic does not require a brand-new weapon. We simply combine our previous two tools:
- **Topic 2 (common factor):** whenever you see a trinomial, **always** take out any common factor first.
- **Topic 3 (grouping):** once we split the middle term into two pieces, we end up with **4 terms**, which we solve directly by **grouping**. In other words, splitting the middle term turns a trinomial into a "grouping problem."

In Topic 1, we briefly saw the basic idea of **middle-term splitting** with examples like $x^2 + 5x + 6$, $x^2 - 7x + 12$, $x^2 + 2x - 15$, $x^2 - x - 6$, $2x^2 + 7x + 3$, and $6x^2 - x - 2$, along with a sign chart. We also saw the perfect-square examples $4x^2 + 12x + 9$ and $25y^2 - 30y + 9$.

In this topic, we will understand the method **in depth**:
- **Why** middle-term splitting works.
- How to find the right pair **systematically without guessing**, even when the numbers are large.
- Trinomials with a negative leading coefficient, two variables, substitution, and fractions or decimals.
- Most importantly: **how to tell for sure when a trinomial cannot be factorised at all.**

---

## Maya's Tile Floor Puzzle

Maya is helping design a new tiled floor for a studio. The tiler has three kinds of ceramic tiles on hand:

- **Large square tile:** side length $x$, area **$x^2$**
- **Long rectangular strip:** length $x$ and width $1$, area **$x$**
- **Small square tile:** side length $1$, area **$1$**

The tiler pulls out **$1$ large tile, $4$ strips, and $3$ small tiles**. Total area = **$x^2 + 4x + 3$**.

Maya asks: "Can we use every single tile to build one **complete rectangle**? No leftover tiles, and no empty corner gaps."

The tiler arranges the pieces:
- Places the large square tile in the top-left corner.
- Lines up **$3$ vertical strips** to its right, and **$1$ horizontal strip** underneath it.
- In the remaining bottom-right corner, the **$3$ small tiles** fit neatly into a $3 \times 1$ space.

A seamless rectangle is formed! Its length is **$x + 3$** and its width is **$x + 1$**.

$$x^2 + 4x + 3 = (x + 1)(x + 3)$$

Next, Maya hands over a different set: **$1$ large tile, $1$ strip, and $1$ small tile** ($x^2 + x + 1$). The tiler tries for an hour, rotating and shifting pieces, yet **no complete rectangle can be formed**. Some corner is always left empty or sticking out.

That single story holds the essence of this entire topic:
- **Factorising a trinomial = arranging the tiles into a single rectangle.** The rectangle's length and width are its factors.
- **Some trinomials simply cannot form a rectangle.** They cannot be factorised (over the integers). Soon we will learn how to spot those immediately, without wasting an hour guessing.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Quadratic trinomial** | A polynomial of degree $2$ with $3$ terms | $6x^2 + 5x - 6$ |
| **Leading coefficient** | The coefficient of the highest-power term (here, $x^2$) | In $6x^2 + 5x - 6$, it is **$6$** |
| **Middle term** | The middle term (the $x$ term) | In $6x^2 + 5x - 6$, it is **$5x$** |
| **Constant term** | The term with no variable | In $6x^2 + 5x - 6$, it is **$-6$** |
| **Factor pair** | Two integers whose product equals a given number | Factor pairs of $12$: $(1, 12)$, $(2, 6)$, $(3, 4)$ |
| **Substitution** | Temporarily replacing a complicated expression with a single letter | Letting $t = (a + b)$ |
| **Irreducible (over integers)** | An expression that cannot be broken into factors with integer coefficients | $x^2 + x + 1$ |

Throughout this topic, we write a general quadratic trinomial as **$ax^2 + bx + c$**, where:
- **$a$** = coefficient of $x^2$
- **$b$** = coefficient of $x$
- **$c$** = constant term

---

## Part A: Why Does Middle-Term Splitting Work?

In Topic 1, the rule was: "find two numbers whose **product $= a \times c$** and **sum $= b$**." Where does that rule come from? Let us run multiplication backwards to see.

### Multiplying Two Brackets in Reverse

Suppose the factors are **$(2x + 3)$** and **$(3x - 2)$**. Multiply them out:

$$(2x + 3)(3x - 2)$$
$$= 2x \cdot 3x + 2x \cdot (-2) + 3 \cdot 3x + 3 \cdot (-2)$$
$$= 6x^2 \mathbf{- 4x + 9x} - 6$$
$$= 6x^2 + 5x - 6$$

Look closely at what happened in the middle. During multiplication, the middle term appeared in **two pieces: $-4x$ and $+9x$**. Afterward, we combined them into $5x$.

**Splitting means reversing that addition.** We break $5x$ back into $-4x$ and $+9x$ so that grouping can recover the original two brackets.

### Why Must the Product Equal $a \times c$?

Now multiply those two middle coefficients ($-4$ and $9$) together:
$$(-4) \times 9 = \mathbf{-36}$$

And compute $a \times c = 6 \times (-6) = \mathbf{-36}$.

They match! That is no coincidence — it happens every single time. Why? Look at the general product **$(px + q)(rx + s)$**:

$$(px + q)(rx + s) = pr\,x^2 + \mathbf{ps\,x + qr\,x} + qs$$

- $a = pr$ (coefficient of $x^2$)
- $c = qs$ (constant term)
- The two pieces of the middle term: **$ps$** and **$qr$**

Now look at the product of those two pieces:
$$ps \times qr = (pr) \times (qs) = \mathbf{a \times c}$$

And look at their sum:
$$ps + qr = \mathbf{b}$$

That is why we always look for two numbers with **product $= a \times c$** and **sum $= b$**. It is not a trick to memorise blindly — it is simply multiplication run in reverse.

### Seeing It with the Tiles Too

In Maya's rectangle for $x^2 + 4x + 3$, the $4$ strips were split into two groups: **$3$ vertical strips and $1$ horizontal strip**. Those numbers $3$ and $1$ are the exact pair whose sum is $4$ and whose product is $3$ ($= a \times c = 1 \times 3$).

---

## Part B: A System for Finding the Right Pair (Factor Pair Table)

With small numbers, you can spot the pair in your head. When the numbers grow larger, guessing becomes slow and error-prone. Use this structured table instead.

### Steps

1. Calculate **$a \times c$**.
2. List **all positive factor pairs** of $|a \times c|$ in a table, from smallest to largest first factor.
3. Check the signs:
   - If **$a \times c$ is positive**, both numbers have the **same sign** (matching the sign of $b$). Look at the **sum** column in your table.
   - If **$a \times c$ is negative**, one number is positive and one is negative. Look at the **difference** column in your table.
4. The pair whose sum (or difference) **equals $|b|$** gives you the exact split.

### Example 1: $x^2 - 21x + 108$

Here $a \times c = 1 \times 108 = \mathbf{108}$ (positive). Since $b = -21$, both numbers must be **negative**. Look for a pair whose sum is $21$.

| Factor pair of $108$ | Sum |
|---|---|
| $1, 108$ | $109$ |
| $2, 54$ | $56$ |
| $3, 36$ | $39$ |
| $4, 27$ | $31$ |
| $6, 18$ | $24$ |
| **$9, 12$** | **$21$** ✅ |

The pair is **$-9$ and $-12$**.

$$x^2 - 21x + 108 = \mathbf{(x - 9)(x - 12)}$$

**Check:** $(x - 9)(x - 12) = x^2 - 12x - 9x + 108 = x^2 - 21x + 108$ ✅

### Example 2: $6x^2 + 5x - 6$

Here $a \times c = 6 \times (-6) = \mathbf{-36}$ (negative). So one number is positive and one is negative. We want a difference of $5$. Since $b = +5$ is positive, the **larger number is positive**.

| Factor pair of $36$ | Difference |
|---|---|
| $1, 36$ | $35$ |
| $2, 18$ | $16$ |
| $3, 12$ | $9$ |
| **$4, 9$** | **$5$** ✅ |
| $6, 6$ | $0$ |

The pair is **$+9$ and $-4$**.

$$6x^2 + 5x - 6$$
$$= 6x^2 + 9x - 4x - 6 \quad \text{(now } 4 \text{ terms — a Topic 3 grouping problem)}$$
$$= 3x(2x + 3) - 2(2x + 3) \quad \text{(common factor from each group, Topic 2)}$$
$$= \mathbf{(2x + 3)(3x - 2)}$$

**Check:** $(2x + 3)(3x - 2) = 6x^2 - 4x + 9x - 6 = 6x^2 + 5x - 6$ ✅

*(These are the exact factors we multiplied out in Part A!)*

**Try swapping the order:** Even if you write $-4x$ first, you get the exact same answer:
$$6x^2 - 4x + 9x - 6 = 2x(3x - 2) + 3(3x - 2) = (3x - 2)(2x + 3) \quad ✅$$
The order of the two middle pieces never changes the final result.

### Example 3: $12x^2 - 7x - 12$

Here $a \times c = 12 \times (-12) = \mathbf{-144}$ (negative). We need a difference of $7$. Since $b = -7$ is negative, the **larger number is negative**.

| Factor pair of $144$ | Difference |
|---|---|
| $1, 144$ | $143$ |
| $2, 72$ | $70$ |
| $3, 48$ | $45$ |
| $4, 36$ | $32$ |
| $6, 24$ | $18$ |
| $8, 18$ | $10$ |
| **$9, 16$** | **$7$** ✅ |
| $12, 12$ | $0$ |

The pair is **$-16$ and $+9$**.

$$12x^2 - 7x - 12$$
$$= 12x^2 - 16x + 9x - 12$$
$$= 4x(3x - 4) + 3(3x - 4)$$
$$= \mathbf{(3x - 4)(4x + 3)}$$

**Check:** $(3x - 4)(4x + 3) = 12x^2 + 9x - 16x - 12 = 12x^2 - 7x - 12$ ✅

### A Quick Tip

As you move down a factor pair table, the sum or difference **gets smaller**. So if you need a small sum or difference, start searching from the **bottom** of the table (near the square root) to save time!

---

## Part C: When the Leading Coefficient Is Negative

If the coefficient of $x^2$ is negative (such as $-x^2 + x + 6$), sign mistakes become much more likely during splitting. The cleanest fix is simple: **factor out $-1$ first.**

### Example 4: $-x^2 + x + 6$

Factor out $-1$ (every sign inside the bracket flips):
$$= -(x^2 - x - 6)$$

We already solved the expression inside the bracket in Topic 1: $x^2 - x - 6 = (x - 3)(x + 2)$.

$$= \mathbf{-(x - 3)(x + 2)}$$

You can also distribute the minus sign into one of the brackets, since $-(x - 3) = (3 - x)$:
$$= \mathbf{(3 - x)(x + 2)}$$

Both forms are completely correct.

**Check:** $(3 - x)(x + 2) = 3x + 6 - x^2 - 2x = -x^2 + x + 6$ ✅

### Example 5: $-2x^2 + 5x + 3$

$$= -(2x^2 - 5x - 3)$$

Inside the bracket: $a \times c = -6$, sum $-5$. The pair is **$-6$ and $+1$**.
$$2x^2 - 6x + x - 3 = 2x(x - 3) + 1(x - 3) = (x - 3)(2x + 1)$$

$$= \mathbf{-(x - 3)(2x + 1)} \quad \text{or} \quad \mathbf{(3 - x)(2x + 1)}$$

**Check:** $(3 - x)(2x + 1) = 6x + 3 - 2x^2 - x = -2x^2 + 5x + 3$ ✅

---

## Part D: Common Factor First (Always!)

Topic 2's golden rule remains step one here: **if there is a common factor, take it out before doing anything else.** It shrinks the numbers and makes splitting effortless.

### Example 6: $3x^2 - 15x + 18$

All three coefficients ($3, 15, 18$) share a factor of $3$.
$$= 3(x^2 - 5x + 6)$$
$$= \mathbf{3(x - 2)(x - 3)}$$

If you skipped taking out $3$, you would have had to search factor pairs of $a \times c = 54$ — twice the work for no reason.

**Check:** $3(x - 2)(x - 3) = 3(x^2 - 5x + 6) = 3x^2 - 15x + 18$ ✅

### Example 7: $2x^3 - 8x^2 - 24x$

The common factor is **$2x$**.
$$= 2x(x^2 - 4x - 12)$$

Inside: product $-12$, sum $-4$. Pair: **$-6$ and $2$**.
$$= \mathbf{2x(x - 6)(x + 2)}$$

**Check:** $(x - 6)(x + 2) = x^2 - 4x - 12$, and multiplying by $2x$ gives $2x^3 - 8x^2 - 24x$ ✅

Notice that this expression looked cubic at first glance, yet after pulling out the common factor, a straightforward quadratic trinomial remained inside.

---

## Part E: Trinomials with Two Variables

Sometimes a trinomial has two letters, such as **$x^2 + 5xy + 6y^2$**. Do not panic. Just treat **$y$ as a companion constant** that rides along in every term.

### Example 8: $x^2 + 5xy + 6y^2$

View it in terms of $x$: $a = 1$, $b = 5y$, $c = 6y^2$. Looking at the numbers alone, product $= 6$ and sum $= 5$. Pair: **$2$ and $3$**. Simply attach $y$ to each number:
$$= \mathbf{(x + 2y)(x + 3y)}$$

**Check:** $(x + 2y)(x + 3y) = x^2 + 3xy + 2xy + 6y^2 = x^2 + 5xy + 6y^2$ ✅

### Example 9: $x^2 - xy - 12y^2$

Product $-12$, sum $-1$. Pair: **$-4$ and $3$**.
$$= \mathbf{(x - 4y)(x + 3y)}$$

**Check:** $x^2 + 3xy - 4xy - 12y^2 = x^2 - xy - 12y^2$ ✅

### Example 10: $2a^2 - 7ab + 6b^2$

Here $a \times c = 2 \times 6 = 12$ (positive), sum $-7$. Both negative. Pair: **$-3$ and $-4$**.

$$2a^2 - 3ab - 4ab + 6b^2$$
$$= a(2a - 3b) - 2b(2a - 3b)$$
$$= \mathbf{(2a - 3b)(a - 2b)}$$

**Check:** $(2a - 3b)(a - 2b) = 2a^2 - 4ab - 3ab + 6b^2 = 2a^2 - 7ab + 6b^2$ ✅

**Watch out:** In the second group, we factored out **$-2b$** (not just $-2$), because both $-4ab$ and $6b^2$ share a factor of $b$.

---

## Part F: Trinomials Using Substitution

Sometimes a quadratic trinomial is **in disguise**. It looks bulky or unfamiliar on the outside, yet underneath it has the exact $ax^2 + bx + c$ structure. The trick: **temporarily name the repeated expression with a single letter (say $t$)**, factorise, and then **substitute back**.

Think of it like putting a large box inside a small label "$t$" so you do not have to stare inside the box while working. Once the factorising is done, you open the box back up.

### Example 11: $(a + b)^2 - 5(a + b) + 6$

Notice that **$(a + b)$** appears twice. Let **$t = a + b$**.
$$= t^2 - 5t + 6$$
$$= (t - 2)(t - 3)$$

Now replace $t$ back with $(a + b)$:
$$= \mathbf{(a + b - 2)(a + b - 3)}$$

### Example 12: $x^4 - 5x^2 + 4$

Here $x^4 = (x^2)^2$. So let **$t = x^2$**.
$$= t^2 - 5t + 4$$
$$= (t - 1)(t - 4)$$

Substitute back:
$$= (x^2 - 1)(x^2 - 4)$$

Wait — do not stop there! Both brackets are **differences of two squares** (remember Topic 4). Factorise further:
$$= \mathbf{(x - 1)(x + 1)(x - 2)(x + 2)}$$

**Check:** $(x^2 - 1)(x^2 - 4) = x^4 - 4x^2 - x^2 + 4 = x^4 - 5x^2 + 4$ ✅

### Example 13: $(x^2 + x)^2 - 8(x^2 + x) + 12$

Let **$t = x^2 + x$**.
$$= t^2 - 8t + 12$$
$$= (t - 2)(t - 6)$$

Substitute back:
$$= (x^2 + x - 2)(x^2 + x - 6)$$

Both brackets are quadratic trinomials themselves, so factorise each one further:
- $x^2 + x - 2$: product $-2$, sum $1$, pair **$2$ and $-1$** $\rightarrow (x + 2)(x - 1)$
- $x^2 + x - 6$: product $-6$, sum $1$, pair **$3$ and $-2$** $\rightarrow (x + 3)(x - 2)$

$$= \mathbf{(x + 2)(x - 1)(x + 3)(x - 2)}$$

In substitution problems, the two biggest traps are **forgetting to substitute back for $t$**, or **forgetting to factorise further after substituting back**.

---

## Part G: Fraction and Decimal Coefficients

When a trinomial has fraction or decimal coefficients, splitting directly feels awkward. The clean approach: **factor out the LCM's reciprocal first to clear all fractions.**

### Example 14: $x^2 + \frac{5}{6}x + \frac{1}{6}$

The denominators are $6$ and $6$. Factor out $\frac{1}{6}$ (which multiplies every term inside by $6$):
$$= \frac{1}{6}(6x^2 + 5x + 1)$$

Inside: $a \times c = 6$, sum $5$. Pair: **$2$ and $3$**.
$$6x^2 + 2x + 3x + 1 = 2x(3x + 1) + 1(3x + 1) = (3x + 1)(2x + 1)$$

$$= \mathbf{\frac{1}{6}(2x + 1)(3x + 1)}$$

You can also write this in another equivalent form: $\frac{1}{6}(2x + 1)(3x + 1) = \left(x + \frac{1}{2}\right)\left(x + \frac{1}{3}\right)$.

**Check:** $\left(x + \frac{1}{2}\right)\left(x + \frac{1}{3}\right) = x^2 + \frac{1}{3}x + \frac{1}{2}x + \frac{1}{6} = x^2 + \frac{5}{6}x + \frac{1}{6}$ ✅

### Example 15: $x^2 - 0.5x - 0.5$

To clear the decimals, factor out $\frac{1}{2}$ (which doubles each term inside):
$$= \frac{1}{2}(2x^2 - x - 1)$$

Inside: $a \times c = -2$, sum $-1$. Pair: **$-2$ and $1$**.
$$2x^2 - 2x + x - 1 = 2x(x - 1) + 1(x - 1) = (x - 1)(2x + 1)$$

$$= \mathbf{\frac{1}{2}(2x + 1)(x - 1)} = \mathbf{(x + 0.5)(x - 1)}$$

**Check:** $(x + 0.5)(x - 1) = x^2 - x + 0.5x - 0.5 = x^2 - 0.5x - 0.5$ ✅

---

## Part H: Spotting Perfect Square Trinomials with Certainty

In Topic 1, we saw $4x^2 + 12x + 9 = (2x + 3)^2$. Now let us learn a **foolproof test** to confirm immediately whether a trinomial is a perfect square.

### Test 1: Three Quick Questions

1. Is the **first term** a perfect square? (e.g., $9x^2 = (3x)^2$)
2. Is the **last term** a perfect square, and **positive**? (e.g., $16y^2 = (4y)^2$)
3. Does the **middle term equal $2 \times (\text{square root of first}) \times (\text{square root of last})$** (ignoring sign)?

If all three answers are yes, the expression is a perfect square.

### Test 2: $b^2 = 4ac$ (The Numerical Shortcut)

A trinomial $ax^2 + bx + c$ is a perfect square whenever **$b^2 = 4ac$** (with $a$ and $c$ having the same sign).

Test $4x^2 + 12x + 9$:
- $b^2 = 12^2 = 144$
- $4ac = 4 \times 4 \times 9 = 144$
- Equal ✅. So it is a perfect square: $(2x + 3)^2$.

Now test $4x^2 + 10x + 9$:
- $b^2 = 100$
- $4ac = 144$
- Not equal. **Not a perfect square.**

### Example 16: $9x^2 - 24xy + 16y^2$

- $9x^2 = (3x)^2$, $16y^2 = (4y)^2$
- $2 \times 3x \times 4y = 24xy$ ✅ (and the middle term has a minus sign)

$$= \mathbf{(3x - 4y)^2}$$

**Check:** $(3x - 4y)^2 = 9x^2 - 24xy + 16y^2$ ✅

### Example 17: $x^2 + x + \frac{1}{4}$

- $x^2 = (x)^2$, $\frac{1}{4} = \left(\frac{1}{2}\right)^2$
- $2 \times x \times \frac{1}{2} = x$ ✅

$$= \mathbf{\left(x + \frac{1}{2}\right)^2}$$

**Check:** $\left(x + \frac{1}{2}\right)^2 = x^2 + x + \frac{1}{4}$ ✅

### Example 18: $x^2 + 2\sqrt{3}x + 3$

- $3 = (\sqrt{3})^2$
- $2 \times x \times \sqrt{3} = 2\sqrt{3}x$ ✅

$$= \mathbf{(x + \sqrt{3})^2}$$

*(Here, integer splitting cannot find a pair, yet the perfect-square check solves it in seconds! That is why this test is so valuable.)*

---

## Part I: When Can a Trinomial Not Be Factorised?

In Maya's puzzle, the tiler could not build a rectangle for $x^2 + x + 1$. Could we have known that upfront? Yes — by checking the factor pair table.

### Check the Complete Factor Pair Table

For $x^2 + x + 1$, we have $a \times c = 1$ and need a sum of $1$.

| Factor pair of $1$ | Sum |
|---|---|
| $1, 1$ | $2$ |
| $-1, -1$ | $-2$ |

No pair adds up to $1$. Once you have checked **every possible factor pair** and none works, the trinomial **cannot be factorised over the integers**.

That is why writing the complete table matters: giving up after trying two or three pairs is a mistake. Always check **all** pairs.

Another example: in $x^2 + 3x + 1$, $a \times c = 1$ and we need sum $3$. The pairs $(1, 1)$ and $(-1, -1)$ give sums $2$ and $-2$. Neither gives $3$, so this trinomial **cannot be factorised over the integers** either.

---

## The Complete Method at a Glance

Whenever you are given a quadratic trinomial, follow this order:

1. Take out any **common factor** first.
2. If the **leading coefficient is negative**, factor out **$-1$**.
3. If there are **fractions or decimals**, factor out the reciprocal of the LCM to clear them.
4. If it is a **trinomial in disguise** (repeated bracket, or $x^4$ and $x^2$), use **substitution** ($t = \dots$).
5. Run the **perfect-square test** ($b^2 = 4ac$). If it passes, write $(\sqrt{a}\,x \pm \sqrt{c})^2$ directly.
6. Otherwise, build the **factor pair table** for $a \times c$, find the matching pair, split the middle term, and **group**.
7. If no pair in the **complete** table matches $b$, state that it **cannot be factorised over the integers**.
8. If you used substitution, **substitute back**, and check whether any resulting factors **can be factorised further**.
9. **Check:** multiply your factors back together to confirm you recover the original expression.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Swapping product and sum.**
   The product must equal **$a \times c$**, and the sum must equal **$b$**. Some students look for product $= b$ and sum $= ac$. Remember the reason from Part A so you never mix them up.

2. **Mistake 2: Looking at the sum when $a \times c$ is negative.**
   When $a \times c$ is negative, one number is positive and one is negative, so look at their **difference** in the table. In $12x^2 - 7x - 12$, the difference between $9$ and $16$ is $7$, not the sum.

3. **Mistake 3: Forgetting to flip the sign when factoring out a negative in grouping.**
   Factoring $-2$ out of $-4x - 6$ gives **$-2(2x + 3)$**, not $-2(2x - 3)$. Always verify: $-2 \times 3 = -6$ ✅

4. **Mistake 4: Failing to flip all signs after factoring out $-1$.**
   $-x^2 + x + 6 = -(x^2 \mathbf{-} x \mathbf{-} 6)$. All three signs inside the bracket change, not just the first one.

5. **Mistake 5: Forgetting to pull out a common factor first.**
   Trying to split $3x^2 - 15x + 18$ directly makes the numbers needlessly large. Factor out $3$ first.

6. **Mistake 6: Stopping before substituting back for $t$.**
   $(t - 2)(t - 3)$ is not the final answer. Replace $t$ to get $(a + b - 2)(a + b - 3)$.

7. **Mistake 7: Stopping too early after substituting back.**
   Do not stop at $x^4 - 5x^2 + 4 = (x^2 - 1)(x^2 - 4)$. Both brackets are differences of two squares and must be factorised further.

8. **Mistake 8: Dropping the constant factor when clearing fractions.**
   $x^2 + \frac{5}{6}x + \frac{1}{6} = \mathbf{\frac{1}{6}}(2x + 1)(3x + 1)$. Dropping $\frac{1}{6}$ makes your answer $6$ times too big!

9. **Mistake 9: Dropping the second variable in two-variable trinomials.**
   $x^2 + 5xy + 6y^2 = (x + 2y)(x + 3y)$. Writing $(x + 2)(x + 3)$ loses the $y$'s completely — a quick multiplication check catches this immediately.

10. **Mistake 10: Saying "cannot be factorised" after trying only a couple of pairs.**
    Write out the **entire** factor pair table and check every pair before concluding that an expression is irreducible over the integers.

---

## Quick Recap

- **Why splitting works:** multiplying $(px + q)(rx + s)$ produces two middle terms ($ps\,x$ and $qr\,x$) whose coefficients have **product $= a \times c$** and **sum $= b$**. Splitting reverses that addition.
- **Tile picture:** factorising a trinomial is arranging the tiles into a full rectangle.
- **Factor pair table:** list all pairs of $|a \times c|$. If $a \times c > 0$, check the **sum**; if $a \times c < 0$, check the **difference**.
- **Negative leading coefficient:** factor out **$-1$** first.
- **Common factor:** always factor it out **before anything else**.
- **Two variables:** carry the second variable along like a constant ($x^2 + 5xy + 6y^2 = (x + 2y)(x + 3y)$).
- **Substitution:** let $t$ represent the repeated piece, factorise, substitute back, and factorise any remaining pieces.
- **Fractions/decimals:** factor out the LCM denominator's reciprocal, then split inside.
- **Perfect square test:** $b^2 = 4ac$.
- **Irreducible over integers:** no pair in the **complete** factor pair table works.
- Always **check** by multiplying back.

---

## Practice Questions

1. Factorise using a factor pair table:
   (a) $x^2 - 17x + 72$
   (b) $x^2 + 4x - 96$
   (c) $8x^2 - 10x - 3$
   (d) $15x^2 + x - 2$

2. Take out the common factor first, and then factorise:
   (a) $4x^2 - 20x + 24$
   (b) $5x^3 + 15x^2 - 50x$

3. Factorise: $-x^2 + 7x - 10$

4. Factorise:
   (a) $a^2 - 9ab + 20b^2$
   (b) $3x^2 + 7xy + 2y^2$

5. Factorise using substitution:
   (a) $(x - y)^2 - 7(x - y) + 12$
   (b) $x^4 - 13x^2 + 36$

6. Factorise: $x^2 + \frac{7}{12}x + \frac{1}{12}$

7. Check whether each trinomial is a perfect square. If it is, factorise it.
   (a) $16x^2 - 40x + 25$
   (b) $9x^2 + 12x + 5$

8. Which of the following cannot be factorised over the integers? Give a reason.
   (a) $x^2 + 2x + 3$
   (b) $x^2 + 5x + 4$
   (c) $x^2 + 3x + 1$
   (d) $2x^2 + 3x + 1$

9. Find all integer values of $k$ for which $x^2 + kx + 6$ can be factorised into two factors with integer coefficients.

### Answers

1. (a) $a \times c = 72$ (positive), $b = -17$, both negative. Among pairs of $72$, sum $17$ comes from **$8$ and $9$**.
   **$(x - 8)(x - 9)$**
   Check: $x^2 - 9x - 8x + 72 = x^2 - 17x + 72$ ✅
   (b) $a \times c = -96$ (negative), need difference $4$, larger number positive. Pair $(8, 12)$ has difference $4$. Split: **$12$ and $-8$**.
   **$(x + 12)(x - 8)$**
   Check: $x^2 - 8x + 12x - 96 = x^2 + 4x - 96$ ✅
   (c) $a \times c = 8 \times (-3) = -24$, difference $10$, larger number negative. Pair $(2, 12)$. Split: **$-12$ and $2$**.
   $8x^2 - 12x + 2x - 3 = 4x(2x - 3) + 1(2x - 3) =$ **$(2x - 3)(4x + 1)$**
   Check: $8x^2 + 2x - 12x - 3 = 8x^2 - 10x - 3$ ✅
   (d) $a \times c = 15 \times (-2) = -30$, difference $1$, larger number positive. Pair $(5, 6)$. Split: **$6$ and $-5$**.
   $15x^2 + 6x - 5x - 2 = 3x(5x + 2) - 1(5x + 2) =$ **$(5x + 2)(3x - 1)$**
   Check: $15x^2 - 5x + 6x - 2 = 15x^2 + x - 2$ ✅
2. (a) $4(x^2 - 5x + 6) =$ **$4(x - 2)(x - 3)$**
   (b) $5x(x^2 + 3x - 10)$. Inside: product $-10$, sum $3$ $\rightarrow 5$ and $-2$. **$5x(x + 5)(x - 2)$**
   Check: $(x + 5)(x - 2) = x^2 + 3x - 10$, and multiplying by $5x$ gives $5x^3 + 15x^2 - 50x$ ✅
3. $-(x^2 - 7x + 10) =$ **$-(x - 2)(x - 5)$**, or **$(x - 2)(5 - x)$**
   Check: $(x - 2)(5 - x) = 5x - x^2 - 10 + 2x = -x^2 + 7x - 10$ ✅
4. (a) Product $20$, sum $-9$: $-4$ and $-5$. **$(a - 4b)(a - 5b)$**
   Check: $a^2 - 5ab - 4ab + 20b^2 = a^2 - 9ab + 20b^2$ ✅
   (b) $a \times c = 6$, sum $7$: $6$ and $1$. $3x^2 + 6xy + xy + 2y^2 = 3x(x + 2y) + y(x + 2y) =$ **$(x + 2y)(3x + y)$**
   Check: $3x^2 + xy + 6xy + 2y^2 = 3x^2 + 7xy + 2y^2$ ✅
5. (a) Let $t = x - y$. Then $t^2 - 7t + 12 = (t - 3)(t - 4)$. Substitute back: **$(x - y - 3)(x - y - 4)$**
   (b) Let $t = x^2$. Then $t^2 - 13t + 36 = (t - 4)(t - 9)$. Substitute back: $(x^2 - 4)(x^2 - 9)$. Factorise further:
   **$(x - 2)(x + 2)(x - 3)(x + 3)$**
   Check: $(x^2 - 4)(x^2 - 9) = x^4 - 9x^2 - 4x^2 + 36 = x^4 - 13x^2 + 36$ ✅
6. $\frac{1}{12}(12x^2 + 7x + 1)$. Inside: $a \times c = 12$, sum $7$: $3$ and $4$.
   $12x^2 + 3x + 4x + 1 = 3x(4x + 1) + 1(4x + 1) = (4x + 1)(3x + 1)$
   **$\frac{1}{12}(3x + 1)(4x + 1)$**, or **$\left(x + \frac{1}{3}\right)\left(x + \frac{1}{4}\right)$**
   Check: $\left(x + \frac{1}{3}\right)\left(x + \frac{1}{4}\right) = x^2 + \frac{1}{4}x + \frac{1}{3}x + \frac{1}{12} = x^2 + \frac{7}{12}x + \frac{1}{12}$ ✅
7. (a) $b^2 = (-40)^2 = 1600$, $4ac = 4 \times 16 \times 25 = 1600$. Equal, so **it is a perfect square.** $16x^2 = (4x)^2$, $25 = 5^2$, $2 \times 4x \times 5 = 40x$.
   **$(4x - 5)^2$**
   (b) $b^2 = 12^2 = 144$, $4ac = 4 \times 9 \times 5 = 180$. Not equal, so **not a perfect square.**
8. (a) **Cannot be factorised over the integers.** $a \times c = 3$. Factor pairs of $3$: $(1, 3)$ gives sum $4$; $(-1, -3)$ gives sum $-4$. Neither gives sum $2$.
   (b) Factorises to **$(x + 1)(x + 4)$**.
   (c) **Cannot be factorised over the integers.** $a \times c = 1$. Factor pairs of $1$: $(1, 1)$ gives sum $2$; $(-1, -1)$ gives sum $-2$. Neither gives sum $3$.
   (d) Factorises: $a \times c = 2$, sum $3$: $1$ and $2$. **$(2x + 1)(x + 1)$**.
   So the answer is **(a) and (c)**.
9. All integer factor pairs with product $6$, and their corresponding sums ($= k$):

   | Pair | Sum ($= k$) |
   |---|---|
   | $1, 6$ | $7$ |
   | $2, 3$ | $5$ |
   | $-1, -6$ | $-7$ |
   | $-2, -3$ | $-5$ |

   **$k = 7, 5, -5, -7$**

---

Whenever large numbers look intimidating, picture Maya's tiler: he never places tiles by blind luck — he follows a system. Build your table, check every pair, and the right split will appear right in front of you. And if no pair works, you know for a fact that no rectangle exists — which is just as valid an answer.

**What's next:** So far we have stopped at squares ($x^2$). In Topic 6, we move one dimension higher, to **cubes**, and see what $(a + b)^3$ looks like when expanded and how to recognise a four-term expression as the cube of a binomial.
