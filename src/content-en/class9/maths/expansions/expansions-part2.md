# Chapter: Expansions (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [expansions.md](expansions.md)** (which covers Topic 1: what expansion means, and the identities $(a + b)^2$, $(a - b)^2$, $(a + b)(a - b)$, and $(x + a)(x + b)$).
> **Topics covered in this file:**
> 2. Finding Values Using Square Identities and $(x \pm 1/x)^2$

---

# Topic 2: Finding Values Using Square Identities and $(x \pm 1/x)^2$

In Topic 1, we learned how to open brackets using $(a + b)^2$, $(a - b)^2$, $(a + b)(a - b)$, and $(x + a)(x + b)$. We saw them geometrically as tiled areas and used them to solve mental maths problems like $102^2$ and $103 \times 97$ in seconds.

Now we will put those very same identities to a clever new use. Sometimes we **do not know $a$ and $b$ individually** — we are only given certain facts about them, such as their sum and their product. Even without ever discovering $a$ and $b$, we can still find $a^2 + b^2$ or $(a - b)^2$ directly through identities. That is the real magic of this topic.

---

## Sophia and Dr. Bennett's Number Riddle

After math club on Friday afternoon, **Dr. Bennett** challenged **Sophia** with a riddle before she packed up her notebook:

"I'm thinking of two numbers. Their **sum is $10$**, and their **product is $21$**. Tell me the **sum of their squares** — and here's the catch: you are not allowed to guess or solve for the two numbers first."

Sophia frowned for a moment. "How can I find the sum of their squares without knowing the numbers?"

Dr. Bennett smiled. "You already know $(a + b)^2$, don't you? Just read the formula backwards."

Sophia wrote down:

$$(a + b)^2 = a^2 + 2ab + b^2$$

She knew the sum: $a + b = 10$, so $(a + b)^2 = 100$.
She knew the product: $ab = 21$, so $2ab = 42$.

Therefore, $a^2 + b^2 = 100 - 42 = \mathbf{58}$.

Dr. Bennett nodded appreciatively. "Now check it. My secret numbers were $3$ and $7$." Sophia checked: $3^2 + 7^2 = 9 + 49 = 58$. Spot on!

In this topic, we will master that exact skill: **using what you are given to find what is asked, riding the bridge built by algebraic identities.**

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Derived result** | A new formula obtained by rearranging an existing identity | $a^2 + b^2 = (a + b)^2 - 2ab$ |
| **Rearrange** | Moving terms from one side of an equality to the other | Turning $x + 5 = 9$ into $x = 9 - 5$ |
| **Square root** | A number whose square equals the given value | $\sqrt{25} = 5$ (and $(-5)^2 = 25$) |
| **$\pm$ (plus-minus)** | Indicates that a value can be either positive or negative | If $x^2 = 9$, then $x = \pm 3$ |
| **Reciprocal** | One divided by a number (its multiplicative inverse) | The reciprocal of $x$ is $1/x$ |

---

## Part A: New Results from Old Identities

Recall the two square identities from Topic 1:

- $(a + b)^2 = a^2 + 2ab + b^2$
- $(a - b)^2 = a^2 - 2ab + b^2$

We don't need to prove these again. Instead, by simply **rearranging** them, we get four powerful new tools.

### Result 1: Two Forms for $a^2 + b^2$

Move $2ab$ to the other side in the first identity:

$$\mathbf{a^2 + b^2 = (a + b)^2 - 2ab}$$

Move $-2ab$ to the other side in the second identity:

$$\mathbf{a^2 + b^2 = (a - b)^2 + 2ab}$$

That means we have two routes to $a^2 + b^2$: if you know the sum $(a + b)$, use the first; if you know the difference $(a - b)$, use the second.

### Result 2: Difference of the Two Squares

Subtract the second identity from the first:

$$(a + b)^2 - (a - b)^2$$
$$= (a^2 + 2ab + b^2) - (a^2 - 2ab + b^2)$$
$$= a^2 + 2ab + b^2 - a^2 + 2ab - b^2$$
$$= \mathbf{4ab}$$

$$\mathbf{(a + b)^2 - (a - b)^2 = 4ab}$$

**Check:** Let $a = 5, b = 2$. Then $7^2 - 3^2 = 49 - 9 = 40$, and $4 \times 5 \times 2 = 40$ ✅

### Result 3: Sum of the Two Squares

Add both identities together:

$$(a + b)^2 + (a - b)^2$$
$$= (a^2 + 2ab + b^2) + (a^2 - 2ab + b^2)$$
$$= \mathbf{2a^2 + 2b^2}$$

$$\mathbf{(a + b)^2 + (a - b)^2 = 2(a^2 + b^2)}$$

**Check:** Let $a = 5, b = 2$. Then $49 + 9 = 58$, and $2(25 + 4) = 58$ ✅

### Result 4: The Bridge Between Sum and Difference

Rearrange Result 2:

$$\mathbf{(a - b)^2 = (a + b)^2 - 4ab}$$

And in the other direction:

$$\mathbf{(a + b)^2 = (a - b)^2 + 4ab}$$

These two formulas are extraordinarily handy: if you know the sum and product, you can find the difference; if you know the difference and product, you can find the sum.

### At a Glance

| Given | To Find | Formula |
|---|---|---|
| $a + b$ and $ab$ | $a^2 + b^2$ | $(a + b)^2 - 2ab$ |
| $a - b$ and $ab$ | $a^2 + b^2$ | $(a - b)^2 + 2ab$ |
| $a + b$ and $ab$ | $(a - b)^2$ | $(a + b)^2 - 4ab$ |
| $a - b$ and $ab$ | $(a + b)^2$ | $(a - b)^2 + 4ab$ |
| $a^2 + b^2$ and $ab$ | $(a + b)^2$ | $a^2 + b^2 + 2ab$ |
| $a^2 + b^2$ and $ab$ | $(a - b)^2$ | $a^2 + b^2 - 2ab$ |

You do not need to memorize this table line by line. Keep the two Topic 1 identities in mind, and every formula here follows immediately.

---

## Part B: Value-Finding Problems

### Example 1: Given $a + b = 7$ and $ab = 12$, find $a^2 + b^2$, $(a - b)^2$, and $a - b$.

**Finding $a^2 + b^2$:**
$$a^2 + b^2 = (a + b)^2 - 2ab = 49 - 24 = \mathbf{25}$$

**Finding $(a - b)^2$:**
$$(a - b)^2 = (a + b)^2 - 4ab = 49 - 48 = \mathbf{1}$$

**Finding $a - b$:**
Since $(a - b)^2 = 1$, taking the square root gives $a - b = \mathbf{\pm 1}$.

**Check:** The numbers are $3$ and $4$ ($3 + 4 = 7$, $3 \times 4 = 12$). Then $3^2 + 4^2 = 9 + 16 = 25$ ✅. If $a = 4, b = 3$, then $a - b = 1$. If $a = 3, b = 4$, then $a - b = -1$. Both cases fit the given facts, which is why the answer is $\pm 1$ ✅

### Why Does $\pm$ Appear?

This is a crucial point, so look closely:

- $3^2 = 9$
- $(-3)^2 = 9$ as well!

That means if an unknown number squares to $9$, it could be **$3$ or $-3$**. Whenever you take a square root and do not know whether the result is positive or negative, you must include **$\pm$**.

In Example 1, we were only given the sum and product — nobody told us whether $a$ was larger than $b$ or smaller. So the sign of $a - b$ cannot be pinned down, and the complete answer is $\pm 1$.

### Example 2: Given $a - b = 3$ and $ab = 10$, find $a^2 + b^2$ and $a + b$.

**Finding $a^2 + b^2$:**
$$a^2 + b^2 = (a - b)^2 + 2ab = 9 + 20 = \mathbf{29}$$

**Finding $a + b$:**
$$(a + b)^2 = (a - b)^2 + 4ab = 9 + 40 = 49$$
$$a + b = \mathbf{\pm 7}$$

**Check:** With $a = 5, b = 2$: $a - b = 3$, $ab = 10$, and $a + b = 7$. With $a = -2, b = -5$: $a - b = -2 - (-5) = 3$, $ab = 10$, and $a + b = -7$. Both pairs satisfy the conditions, confirming $\pm 7$ ✅. Also $5^2 + 2^2 = 29$ ✅

### Example 3: Given $a^2 + b^2 = 34$ and $ab = 15$, find $a + b$.

$$(a + b)^2 = a^2 + b^2 + 2ab = 34 + 30 = 64$$
$$a + b = \mathbf{\pm 8}$$

**Check:** Using $3$ and $5$: $9 + 25 = 34$, $3 \times 5 = 15$, and $3 + 5 = 8$ ✅. Using $-3$ and $-5$: their sum is $-8$ ✅

From the exact same data, we can also find $a - b$: $(a - b)^2 = 34 - 30 = 4$, so $a - b = \pm 2$.

### Example 4: Revisiting Sophia's Riddle

Given $a + b = 10$ and $ab = 21$, find $(a - b)$.

$$(a - b)^2 = (a + b)^2 - 4ab = 100 - 84 = 16$$
$$a - b = \mathbf{\pm 4}$$

**Check:** $7 - 3 = 4$ ✅

### Example 5: Problems with Coefficients

Given $2a + 3b = 13$ and $ab = 6$, find $4a^2 + 9b^2$.

Treat $2a$ as your "$A$" and $3b$ as your "$B$":

$$(2a + 3b)^2 = (2a)^2 + 2(2a)(3b) + (3b)^2$$
$$169 = 4a^2 + 12ab + 9b^2$$
$$169 = 4a^2 + 9b^2 + 12 \times 6$$
$$4a^2 + 9b^2 = 169 - 72 = \mathbf{97}$$

**Check:** With $a = 2, b = 3$: $2(2) + 3(3) = 13$ and $ab = 6$ ✅. Then $4(4) + 9(9) = 16 + 81 = 97$ ✅

Notice that the middle term here is $2 \times (2a) \times (3b) = \mathbf{12ab}$, not simply $2ab$.

---

## Part C: The $(x + 1/x)$ and $(x - 1/x)$ Family

Now let us look at a very special pair of terms: a number $x$ and its reciprocal $1/x$.

### Applying the Identity

Set $a = x$ and $b = 1/x$:

$$\left(x + \frac{1}{x}\right)^2 = x^2 + 2 \cdot x \cdot \left(\frac{1}{x}\right) + \left(\frac{1}{x}\right)^2$$

Watch what happens in the middle: **$x \cdot \frac{1}{x} = 1$**. The variable $x$ vanishes from the middle term, leaving just **$2$**!

$$\mathbf{\left(x + \frac{1}{x}\right)^2 = x^2 + \frac{1}{x^2} + 2}$$

Similarly:

$$\mathbf{\left(x - \frac{1}{x}\right)^2 = x^2 + \frac{1}{x^2} - 2}$$

That cancellation is why reciprocal problems work out so cleanly — there is no mixed $xy$ term left in the middle, only a plain number.

### Example 6: Given $x + \frac{1}{x} = 3$, find $x^2 + \frac{1}{x^2}$ and $x^4 + \frac{1}{x^4}$.

**Finding $x^2 + \frac{1}{x^2}$:**
$$\left(x + \frac{1}{x}\right)^2 = x^2 + \frac{1}{x^2} + 2$$
$$9 = x^2 + \frac{1}{x^2} + 2$$
$$x^2 + \frac{1}{x^2} = \mathbf{7}$$

**Finding $x^4 + \frac{1}{x^4}$:** Here is a neat trick: treat $x^2$ as your new "$x$." Then $x^4 = (x^2)^2$ and $\frac{1}{x^4} = \left(\frac{1}{x^2}\right)^2$.

$$\left(x^2 + \frac{1}{x^2}\right)^2 = x^4 + \frac{1}{x^4} + 2$$
$$49 = x^4 + \frac{1}{x^4} + 2$$
$$x^4 + \frac{1}{x^4} = \mathbf{47}$$

You can repeat this ladder as far as you like: each time, square the current result and subtract $2$.

### Example 7: Given $x - \frac{1}{x} = 4$, find $x^2 + \frac{1}{x^2}$.

$$\left(x - \frac{1}{x}\right)^2 = x^2 + \frac{1}{x^2} - 2$$
$$16 = x^2 + \frac{1}{x^2} - 2$$
$$x^2 + \frac{1}{x^2} = \mathbf{18}$$

### Example 8: Given $x^2 + \frac{1}{x^2} = 27$, find $x - \frac{1}{x}$ and $x + \frac{1}{x}$.

**Finding $x - \frac{1}{x}$:**
$$\left(x - \frac{1}{x}\right)^2 = x^2 + \frac{1}{x^2} - 2 = 27 - 2 = 25$$
$$x - \frac{1}{x} = \mathbf{\pm 5}$$

**Finding $x + \frac{1}{x}$:**
$$\left(x + \frac{1}{x}\right)^2 = x^2 + \frac{1}{x^2} + 2 = 27 + 2 = 29$$
$$x + \frac{1}{x} = \mathbf{\pm \sqrt{29}}$$

Since $29$ is not a perfect square, leave the answer in exact radical form as $\pm \sqrt{29}$. There is no need to convert it to a decimal.

### Example 9: Given $x + \frac{1}{x} = 3$, find $x - \frac{1}{x}$.

From Example 6, we already know $x^2 + \frac{1}{x^2} = 7$.
$$\left(x - \frac{1}{x}\right)^2 = 7 - 2 = 5$$
$$x - \frac{1}{x} = \mathbf{\pm \sqrt{5}}$$

There is also a direct shortcut: $\left(x - \frac{1}{x}\right)^2 = \left(x + \frac{1}{x}\right)^2 - 4 = 9 - 4 = 5$. This is simply Result 4 again, because $ab = x \cdot \frac{1}{x} = 1$, making $4ab = 4$.

### Example 10: Given $x + \frac{1}{x} = 5$, find $x^2 + \frac{1}{x^2}$ and $x^4 + \frac{1}{x^4}$.

$$x^2 + \frac{1}{x^2} = 25 - 2 = \mathbf{23}$$
$$x^4 + \frac{1}{x^4} = 23^2 - 2 = 529 - 2 = \mathbf{527}$$

---

## Part D: Simplifying Expressions Using Identities

### Example 11: Simplify $(2x + 3)^2 - (2x - 3)^2$.

The slow way: expand both brackets and subtract. The smart way: use Result 2 with $a = 2x$ and $b = 3$.

$$(a + b)^2 - (a - b)^2 = 4ab = 4 \times 2x \times 3 = \mathbf{24x}$$

**Check:** Substitute $x = 1$. $(5)^2 - (-1)^2 = 25 - 1 = 24$, and $24 \times 1 = 24$ ✅

### Example 12: Simplify $(a + b)^2 + (a - b)^2$.

Directly from Result 3: **$\mathbf{2(a^2 + b^2)}$**, or $2a^2 + 2b^2$.

### Example 13: Evaluate without multiplying each decimal: $7.8^2 + 2.2^2 + 2(7.8)(2.2)$.

Recognize the pattern $a^2 + b^2 + 2ab$ with $a = 7.8$ and $b = 2.2$:

$$= (7.8 + 2.2)^2 = 10^2 = \mathbf{100}$$

Look how cleanly that avoids tedious decimal multiplication!

### Example 14: Evaluate without multiplying each decimal: $5.6^2 - 2(5.6)(1.6) + 1.6^2$.

Recognize $a^2 - 2ab + b^2$ with $a = 5.6$ and $b = 1.6$:

$$= (5.6 - 1.6)^2 = 4^2 = \mathbf{16}$$

### Example 15: Find $51^2 - 49^2$ using $4ab$.

Write $51 = 50 + 1$ and $49 = 50 - 1$, so $a = 50$ and $b = 1$:

$$(a + b)^2 - (a - b)^2 = 4ab = 4 \times 50 \times 1 = \mathbf{200}$$

**Check:** $2601 - 2401 = 200$ ✅

---

## Common Pitfalls to Avoid

1. **Mistake 1: Forgetting $\pm$ when taking a square root.**
   Writing $a - b = 1$ from $(a - b)^2 = 1$ is incomplete. The full answer is **$\pm 1$**, unless the problem specifically states that $a > b$ or that the quantities are positive.

2. **Mistake 2: Writing $(x + 1/x)^2 = x^2 + 1/x^2$.**
   You dropped the middle term! The correct expansion is $x^2 + 1/x^2 \mathbf{+ 2}$. Check with $x = 1$: $(1 + 1)^2 = 4$, whereas $1 + 1 = 2$.

3. **Mistake 3: Mixing up $2ab$ and $4ab$.**
   To find $a^2 + b^2$, subtract **$2ab$**: $(a + b)^2 - 2ab$.
   To find $(a - b)^2$, subtract **$4ab$**: $(a + b)^2 - 4ab$.
   If you ever feel unsure, write out the Topic 1 expansion and check.

4. **Mistake 4: Missing the coefficients in the middle term.**
   In $(2a + 3b)^2$, the middle term is $2 \times 2a \times 3b = \mathbf{12ab}$, not $2ab$ or $6ab$.

5. **Mistake 5: Getting the sign wrong in $(x - 1/x)^2$.**
   $(x - 1/x)^2 = x^2 + 1/x^2 \mathbf{- 2}$, not $+2$. Meanwhile, $x^2 + 1/x^2$ itself always keeps a plus sign between its two terms, because squares are never negative.

6. **Mistake 6: Never checking your answer with test numbers.**
   Whenever possible, test your formula or final result with small numbers (like $3$ and $4$). It takes $10$ seconds and catches sign errors immediately.

---

## Quick Recap

- Every new result in this topic comes straight from rearranging the two Topic 1 square identities — nothing extra to memorize blindly.
- **$a^2 + b^2 = (a + b)^2 - 2ab = (a - b)^2 + 2ab$**
- **$(a + b)^2 - (a - b)^2 = 4ab$**
- **$(a + b)^2 + (a - b)^2 = 2(a^2 + b^2)$**
- **$(a - b)^2 = (a + b)^2 - 4ab$**
- Always include **$\pm$** when taking square roots, since both $3^2$ and $(-3)^2$ equal $9$.
- **$(x + 1/x)^2 = x^2 + 1/x^2 + 2$** and **$(x - 1/x)^2 = x^2 + 1/x^2 - 2$**, because $x \cdot (1/x) = 1$.
- To reach $x^4 + 1/x^4$, square $x^2 + 1/x^2$ and subtract $2$.
- When you spot $a^2 \pm 2ab + b^2$, collapse it straight into $(a \pm b)^2$ to crush decimal arithmetic effortlessly.

---

## Practice Questions

1. If $a + b = 9$ and $ab = 20$, find:
   (a) $a^2 + b^2$
   (b) $(a - b)^2$

2. If $a - b = 4$ and $ab = 21$, find:
   (a) $a^2 + b^2$
   (b) $a + b$

3. If $a^2 + b^2 = 41$ and $ab = 20$, find $a + b$ and $a - b$.

4. If $x + \frac{1}{x} = 4$, find $x^2 + \frac{1}{x^2}$ and $x^4 + \frac{1}{x^4}$.

5. If $x - \frac{1}{x} = 3$, find $x^2 + \frac{1}{x^2}$.

6. If $x^2 + \frac{1}{x^2} = 51$, find $x - \frac{1}{x}$ and $x + \frac{1}{x}$.

7. Simplify: $(3x + 4)^2 - (3x - 4)^2$

8. Evaluate without finding each square separately: $8.5^2 - 2(8.5)(1.5) + 1.5^2$

9. If $3x + 2y = 12$ and $xy = 6$, find $9x^2 + 4y^2$.

10. State whether true or false, with a reason: "If $a^2 = 9$, then $a = 3$."

### Answers

1. (a) $a^2 + b^2 = (a + b)^2 - 2ab = 81 - 40 = \mathbf{41}$
   (b) $(a - b)^2 = (a + b)^2 - 4ab = 81 - 80 = \mathbf{1}$
   Check: the numbers are $4$ and $5$. $16 + 25 = 41$ ✅, $(5 - 4)^2 = 1$ ✅

2. (a) $a^2 + b^2 = (a - b)^2 + 2ab = 16 + 42 = \mathbf{58}$
   (b) $(a + b)^2 = (a - b)^2 + 4ab = 16 + 84 = 100$, so $a + b = \mathbf{\pm 10}$
   Check: $a = 7, b = 3$ gives sum $10$, and $a = -3, b = -7$ gives sum $-10$ ✅

3. $(a + b)^2 = 41 + 40 = 81$, so $a + b = \mathbf{\pm 9}$
   $(a - b)^2 = 41 - 40 = 1$, so $a - b = \mathbf{\pm 1}$
   Check: $4$ and $5$ give $16 + 25 = 41$ and $4 \times 5 = 20$ ✅

4. $x^2 + \frac{1}{x^2} = 16 - 2 = \mathbf{14}$
   $x^4 + \frac{1}{x^4} = 14^2 - 2 = 196 - 2 = \mathbf{194}$

5. $\left(x - \frac{1}{x}\right)^2 = x^2 + \frac{1}{x^2} - 2$, so $9 = x^2 + \frac{1}{x^2} - 2$, giving $x^2 + \frac{1}{x^2} = \mathbf{11}$

6. $\left(x - \frac{1}{x}\right)^2 = 51 - 2 = 49$, so $x - \frac{1}{x} = \mathbf{\pm 7}$
   $\left(x + \frac{1}{x}\right)^2 = 51 + 2 = 53$, so $x + \frac{1}{x} = \mathbf{\pm \sqrt{53}}$

7. Using Result 2 with $a = 3x$ and $b = 4$: $4ab = 4 \times 3x \times 4 = \mathbf{48x}$
   Check at $x = 1$: $(7)^2 - (-1)^2 = 49 - 1 = 48$ ✅

8. This has the form $(a - b)^2$ with $a = 8.5$ and $b = 1.5$: $(8.5 - 1.5)^2 = 7^2 = \mathbf{49}$

9. $(3x + 2y)^2 = 9x^2 + 12xy + 4y^2$
   $144 = 9x^2 + 4y^2 + 12 \times 6$
   $9x^2 + 4y^2 = 144 - 72 = \mathbf{72}$
   Check: $x = 2, y = 3$ gives $6 + 6 = 12$ and $xy = 6$ ✅. Then $9(4) + 4(9) = 36 + 36 = 72$ ✅

10. **False** ❌. Since $(-3)^2 = 9$ as well, $a$ can be $3$ or $-3$, meaning $a = \pm 3$.

---

Keep Dr. Bennett's riddle in mind: **what you are given leads straight to what is asked, across the bridge of an identity, without ever needing to hunt for the individual numbers.** Just remember $\pm$ and verify with small test numbers!

**What's next?** So far we have only squared expressions with two terms. In the next topic, a third term steps onto the stage: how do we expand **$(a + b + c)^2$**, and how does it help us solve $a^2 + b^2 + c^2$ problems?
