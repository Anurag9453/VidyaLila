# Chapter: Expansions (Part 5)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [expansions-part4.md](expansions-part4.md).** (The chapter begins in [expansions.md](expansions.md).)
> **Topics covered in this file:**
> 5. Special Products

---

# Topic 5: Special Products

In Topic 4, we explored the cube identities $(a + b)^3$ and $(a - b)^3$, tackled reciprocal cubes $x^3 \pm 1/x^3$, and saw how to compute $a^3 + b^3$ from $a + b$ and $ab$ without knowing $a$ or $b$ individually. Remember how Liam thought $11^3$ was $1001$ at Leo's dice workshop, when the real answer was $1331$?

Now ask yourself an intriguing question: can you multiply **two long brackets** together and end up with **only two terms** left standing? Yes, you can! In this topic, we will meet several "special products" where the middle terms automatically cancel one another out.

---

## Liam's "Mathemagician" Trick

At the school talent show, **Liam** took the stage dressed as a "mathemagician" and invited a friend up from the audience.

"Pick any two small numbers," Liam announced.

His friend chose **$4$ and $3$**.

Liam said: "On this notepad, work out $(4 + 3) \times (4^2 - 4 \times 3 + 3^2)$."

His friend started calculating step by step:
- $4 + 3 = 7$
- $4^2 - 12 + 3^2 = 16 - 12 + 9 = 13$
- $7 \times 13 = \mathbf{91}$

Before his friend could even write down $13$, Liam shouted out: "**$91$!**"

The crowd gasped. Afterward, Liam revealed his secret: "All I did was calculate **$4^3 + 3^3$**. $64 + 27 = 91$. That long product always simplifies to the sum of two cubes!"

It wasn't magic at all — it was a **special product**. In this final topic of the chapter, we will see why it works and meet three more special products just like it.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Special product** | A multiplication whose result follows a clean, predictable pattern so you can write the answer directly | $(a + b)(a - b) = a^2 - b^2$ |
| **Cancellation** | Two identical terms with opposite signs ($+$ and $-$) adding up to $0$ | $+ab$ and $-ab$ |
| **Sum of cubes** | Two cubes added together | $a^3 + b^3$ |
| **Difference of cubes** | One cube subtracted from another | $a^3 - b^3$ |
| **Organised table** | Laying out a long multiplication in rows and columns so no term is missed | The $3 \times 6$ table in Part C |

---

## Part A: $(a + b)(a^2 - ab + b^2) = a^3 + b^3$

This is Liam's stage trick! Let us multiply it out term by term to see the cancellation in action.

Every term in the first bracket multiplies every term in the second bracket:

**Multiply by $a$:**
- $a \times a^2 = a^3$
- $a \times (-ab) = -a^2b$
- $a \times b^2 = ab^2$

**Multiply by $b$:**
- $b \times a^2 = a^2b$
- $b \times (-ab) = -ab^2$
- $b \times b^2 = b^3$

Now add all six terms together:

$$a^3 - a^2b + ab^2 + a^2b - ab^2 + b^3$$

Watch what happens:
- $-a^2b$ and $+a^2b$ $\rightarrow$ **cancel**
- $+ab^2$ and $-ab^2$ $\rightarrow$ **cancel**

All that remains is: **$a^3 + b^3$**

> **$(a + b)(a^2 - ab + b^2) = a^3 + b^3$**

**Check (with Liam's numbers):** $a = 4, b = 3$: $(7)(16 - 12 + 9) = 7 \times 13 = 91$, and $4^3 + 3^3 = 64 + 27 = 91$ ✅

### Example 1: $(x + 2)(x^2 - 2x + 4)$

Here $a = x$ and $b = 2$. Verify the second bracket: $a^2 - ab + b^2 = x^2 - 2x + 4$ ✅ (exact match!).

$$= x^3 + 2^3 = \mathbf{x^3 + 8}$$

### Example 2: $(2x + 3y)(4x^2 - 6xy + 9y^2)$

Here $a = 2x$ and $b = 3y$.
- $a^2 = 4x^2$ ✅
- $ab = 6xy$ ✅
- $b^2 = 9y^2$ ✅

$$= (2x)^3 + (3y)^3 = \mathbf{8x^3 + 27y^3}$$

**Check:** Put $x = 1, y = 1$. Left: $(5)(4 - 6 + 9) = 5 \times 7 = 35$. Right: $8 + 27 = 35$ ✅

---

## Part B: $(a - b)(a^2 + ab + b^2) = a^3 - b^3$

Multiply out term by term in the exact same way:

**Multiply by $a$:**
- $a \times a^2 = a^3$
- $a \times ab = a^2b$
- $a \times b^2 = ab^2$

**Multiply by $-b$:**
- $-b \times a^2 = -a^2b$
- $-b \times ab = -ab^2$
- $-b \times b^2 = -b^3$

Add all six terms: $a^3 + a^2b + ab^2 - a^2b - ab^2 - b^3$

- $+a^2b$ and $-a^2b$ $\rightarrow$ cancel
- $+ab^2$ and $-ab^2$ $\rightarrow$ cancel

What remains is: **$a^3 - b^3$**

> **$(a - b)(a^2 + ab + b^2) = a^3 - b^3$**

### Comparing Both Formulas

| Product | Sign in first bracket | Middle sign in second bracket | Result |
|---|---|---|---|
| $(a + b)(a^2 \mathbf{-} ab + b^2)$ | $+$ | **$-$** (opposite) | $a^3 + b^3$ |
| $(a - b)(a^2 \mathbf{+} ab + b^2)$ | $-$ | **$+$** (opposite) | $a^3 - b^3$ |

Easy memory rule: **the middle sign in the second bracket is always opposite to the sign in the first bracket**, while $a^2$ and $b^2$ are always positive. *(Later in the Factorisation chapter, we will also remember this using the mnemonic "SOAP" — Same, Opposite, Always Positive — when running these identities in reverse.)*

### Example 3: $(3a - 2b)(9a^2 + 6ab + 4b^2)$

Replace $a$ with $3a$ and $b$ with $2b$:
- $(3a)^2 = 9a^2$ ✅
- $(3a)(2b) = 6ab$ ✅, with a $+$ sign (opposite to the $-$ in the first bracket)
- $(2b)^2 = 4b^2$ ✅

$$= (3a)^3 - (2b)^3 = \mathbf{27a^3 - 8b^3}$$

### Example 4: $\left(x - \frac{1}{x}\right)\left(x^2 + 1 + \frac{1}{x^2}\right)$

Here $a = x$ and $b = \frac{1}{x}$, so $ab = x \times \frac{1}{x} = \mathbf{1}$. That is why the middle term shows up simply as "$1$".

$$= x^3 - \left(\frac{1}{x}\right)^3 = \mathbf{x^3 - \frac{1}{x^3}}$$

### Example 5: Topic 4 Practice Q3 and Q4, Done a New Way

**If $a + b = 7$ and $ab = 10$, find $a^3 + b^3$.**

$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$

From Topic 2, $a^2 + b^2 = (a + b)^2 - 2ab = 49 - 20 = 29$.
So $a^2 - ab + b^2 = 29 - 10 = 19$.

$$a^3 + b^3 = 7 \times 19 = \mathbf{133}$$

**Check:** Let $a = 2, b = 5$: $a + b = 7$, $ab = 10$, and $2^3 + 5^3 = 8 + 125 = 133$ ✅

**If $a - b = 3$ and $ab = 10$, find $a^3 - b^3$.**

$$a^2 + b^2 = (a - b)^2 + 2ab = 9 + 20 = 29$$
$$a^2 + ab + b^2 = 29 + 10 = 39$$
$$a^3 - b^3 = 3 \times 39 = \mathbf{117}$$

**Check:** Let $a = 5, b = 2$: $125 - 8 = 117$ ✅

---

## Part C: The Three-Term Special Product

Now for the longest — yet most satisfying — special product in the chapter:

> **$(a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca) = a^3 + b^3 + c^3 - 3abc$**

With $3$ terms in the first bracket and $6$ terms in the second, there are $18$ individual products to track. Do not worry — put them in an **organised table** so nothing gets lost.

### Organised Multiplication Table

Place the $6$ terms of the second bracket across the top, and the $3$ terms of the first bracket down the left:

| $\times$ | $a^2$ | $b^2$ | $c^2$ | $-ab$ | $-bc$ | $-ca$ |
|---|---|---|---|---|---|---|
| **$a$** | $a^3$ | $ab^2$ | $ac^2$ | $-a^2b$ | $-abc$ | $-a^2c$ |
| **$b$** | $a^2b$ | $b^3$ | $bc^2$ | $-ab^2$ | $-b^2c$ | $-abc$ |
| **$c$** | $a^2c$ | $b^2c$ | $c^3$ | $-abc$ | $-bc^2$ | $-ac^2$ |

Now pair up opposites and watch them cancel:

| Term | Where $+$ appears | Where $-$ appears | Outcome |
|---|---|---|---|
| $ab^2$ | row $a$ | row $b$ | cancels |
| $ac^2$ | row $a$ | row $c$ | cancels |
| $a^2b$ | row $b$ | row $a$ | cancels |
| $a^2c$ | row $c$ | row $a$ | cancels |
| $bc^2$ | row $b$ | row $c$ | cancels |
| $b^2c$ | row $c$ | row $b$ | cancels |
| $abc$ | nowhere | three times (once in each row) | **$-3abc$** |
| $a^3, b^3, c^3$ | once each | nowhere | **$a^3 + b^3 + c^3$** |

What remains is: **$a^3 + b^3 + c^3 - 3abc$**

**Check:** Put $a = 1, b = 2, c = 3$.
- Left: $(1 + 2 + 3)(1 + 4 + 9 - 2 - 6 - 3) = 6 \times 3 = 18$
- Right: $1 + 8 + 27 - 3 \times 6 = 36 - 18 = 18$ ✅

### Example 6: $(x + y + 2)(x^2 + y^2 + 4 - xy - 2y - 2x)$

Here $c = 2$. Check the second bracket: $a^2 + b^2 + c^2 - ab - bc - ca = x^2 + y^2 + 4 - xy - 2y - 2x$ ✅

$$= x^3 + y^3 + 2^3 - 3 \times x \times y \times 2 = \mathbf{x^3 + y^3 + 8 - 6xy}$$

### Example 7: Finding $a^3 + b^3 + c^3$

**If $a + b + c = 9$, $ab + bc + ca = 23$, and $abc = 15$, find $a^3 + b^3 + c^3$.**

First we need $a^2 + b^2 + c^2$. Using the $(a + b + c)^2$ identity from Topic 3:
$$a^2 + b^2 + c^2 = (a + b + c)^2 - 2(ab + bc + ca) = 81 - 46 = 35$$

Now apply the special product:
$$a^3 + b^3 + c^3 - 3abc = (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca)$$
$$a^3 + b^3 + c^3 - 45 = 9 \times (35 - 23) = 9 \times 12 = 108$$
$$a^3 + b^3 + c^3 = 108 + 45 = \mathbf{153}$$

**Check:** $a = 1, b = 3, c = 5$ satisfies every condition (sum $= 9$, $ab + bc + ca = 3 + 15 + 5 = 23$, $abc = 15$). And $1 + 27 + 125 = 153$ ✅

---

## Part D: The Most Useful Consequence (When $a + b + c = 0$)

Look again at the Part C identity:

$$a^3 + b^3 + c^3 - 3abc = \mathbf{(a + b + c)} \times (\dots)$$

Whenever $a + b + c = \mathbf{0}$, the entire right-hand side becomes $0$, no matter what sits inside the second bracket! That means:

> **If $a + b + c = 0$, then $a^3 + b^3 + c^3 = 3abc$**

This turns big cube additions into effortless multiplication!

### Example 8: $14^3 - 9^3 - 5^3$

Read this as $14^3 + (-9)^3 + (-5)^3$.
Check the sum: $14 - 9 - 5 = 0$ ✅

Therefore, value $= 3 \times 14 \times (-9) \times (-5) = \mathbf{1890}$.

**Check:** $2744 - 729 - 125 = 1890$ ✅

### Example 9: $(-16)^3 + 10^3 + 6^3$

Sum: $-16 + 10 + 6 = 0$ ✅
Value $= 3 \times (-16) \times 10 \times 6 = \mathbf{-2880}$.

**Check:** $-4096 + 1000 + 216 = -2880$ ✅

### Example 10: $11^3 + (-4)^3 + (-7)^3$

Sum: $11 - 4 - 7 = 0$ ✅
Value $= 3 \times 11 \times (-4) \times (-7) = \mathbf{924}$.

**Check:** $1331 - 64 - 343 = 924$ ✅

### Example 11 (Algebraic): $(2a - b)^3 + (b - 3c)^3 + (3c - 2a)^3$

Sum of the three expressions inside the cubes: $(2a - b) + (b - 3c) + (3c - 2a) = 0$ ✅

So the entire expression equals **$\mathbf{3(2a - b)(b - 3c)(3c - 2a)}$** — without expanding a single cube!

> **Caution:** This shortcut works **only** when the sum is genuinely $0$. Always check the sum first!

---

## Part E: Product of Three Binomials (Extra)

*(This is a bonus identity. It comes in very handy for certain problems — understand the pattern rather than forcing yourself to memorize it.)*

In Topic 1, we learned $(x + a)(x + b) = x^2 + (a + b)x + ab$. Now tack on one more bracket:

> **$(x + a)(x + b)(x + c) = x^3 + (a + b + c)x^2 + (ab + bc + ca)x + abc$**

Notice the clean rhythm:
- Coefficient of $x^2$: **sum** of all three numbers
- Coefficient of $x$: **sum of products taken two at a time**
- Constant term: **product** of all three numbers

### Example 12: $(x + 1)(x + 2)(x + 3)$

$a = 1, b = 2, c = 3$
- $a + b + c = 6$
- $ab + bc + ca = 2 + 6 + 3 = 11$
- $abc = 6$

$$= \mathbf{x^3 + 6x^2 + 11x + 6}$$

**Check ($x = 1$):** Left $= 2 \times 3 \times 4 = 24$. Right $= 1 + 6 + 11 + 6 = 24$ ✅

### Example 13: $(x - 2)(x + 3)(x - 4)$

$a = -2, b = 3, c = -4$ (each sign travels with its number)
- $a + b + c = -2 + 3 - 4 = -3$
- $ab + bc + ca = (-6) + (-12) + 8 = -10$
- $abc = (-2)(3)(-4) = 24$

$$= \mathbf{x^3 - 3x^2 - 10x + 24}$$

**Check ($x = 1$):** Left $= (-1)(4)(-3) = 12$. Right $= 1 - 3 - 10 + 24 = 12$ ✅

---

## Part F: Special Products for Rapid Calculation

### Example 14: $1001 \times 1001 - 1$

Rewrite as $1001^2 - 1^2 = (1001 + 1)(1001 - 1) = 1002 \times 1000 = \mathbf{1,002,000}$.

*(Using Topic 1's $(a + b)(a - b) = a^2 - b^2$ in reverse!)*

### Example 15: $37^3 - 27^3$

Set $a = 37, b = 27$, and use $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$:

- $a - b = 10$
- $a^2 = 1369$, $ab = 999$, $b^2 = 729$
- $a^2 + ab + b^2 = 1369 + 999 + 729 = 3097$

$$= 10 \times 3097 = \mathbf{30,970}$$

**Check:** $37^3 = 50{,}653$ and $27^3 = 19{,}683$. Difference $= 30{,}970$ ✅

### Example 16: Simplify a Long Expression

$$(a + b)(a^2 - ab + b^2) + (a - b)(a^2 + ab + b^2)$$

First product $= a^3 + b^3$ (Part A)
Second product $= a^3 - b^3$ (Part B)
Sum $= a^3 + b^3 + a^3 - b^3 = \mathbf{2a^3}$

---

## Part G: Which Identity Applies? (Full Chapter Review)

Before diving into an expansion, pause and match the expression to its pattern:

| Expression | Pattern | Topic |
|---|---|---|
| $(x + 5)^2$ | $(a + b)^2$ | Topic 1 |
| $(2a - 3)(2a + 3)$ | $(a + b)(a - b)$ | Topic 1 |
| $(x + 4)(x - 7)$ | $(x + a)(x + b)$ | Topic 1 |
| $(p + q + r)^2$ | $(a + b + c)^2$ | Topic 3 |
| $(y - 2)^3$ | $(a - b)^3$ | Topic 4 |
| $(m + 1)(m^2 - m + 1)$ | sum-of-cubes product | Topic 5 |
| $(x + 1)(x + 2)(x + 3)$ | three binomials | Topic 5 |

**How to spot the right identity fast:**
- One bracket raised to power $2$ or $3$ $\rightarrow$ square or cube identity.
- Two matching brackets differing only by the middle sign $\rightarrow$ $(a + b)(a - b)$.
- A small bracket ($2$ terms) times a bigger bracket ($3$ terms: square, product, square) $\rightarrow$ Part A or B.
- A $3$-term bracket $\times$ a $6$-term bracket $\rightarrow$ Part C.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Choosing the wrong middle sign in the second bracket.**
   $(a + b)(a^2 \mathbf{+} ab + b^2) \neq a^3 + b^3$.
   The correct rule: when the first bracket has $+$, the middle term in the second bracket must be **$-$**. Test with $a = 1, b = 1$: $(2)(1 + 1 + 1) = 6$, whereas $a^3 + b^3 = 2$.

2. **Mistake 2: Treating $(a + b)^3$ and $a^3 + b^3$ as the same thing.**
   Let $a = 1, b = 2$: $(1 + 2)^3 = 27$, while $1^3 + 2^3 = 9$. They are completely different — $(a + b)^3$ contains middle terms (Topic 4).

3. **Mistake 3: Confusing $a^2 - ab + b^2$ with $(a - b)^2$.**
   $(a - b)^2 = a^2 \mathbf{- 2ab} + b^2$. Here the middle term is simply **$-ab$**, without a $2$. They are different expressions.

4. **Mistake 4: Using the $3abc$ shortcut without verifying $a + b + c = 0$.**
   $2^3 + 3^3 + 4^3 = 99$, whereas $3 \times 2 \times 3 \times 4 = 72$. Their sum is $9$, not $0$, so the shortcut does not apply!

5. **Mistake 5: Missing the $x$ coefficient when multiplying three binomials.**
   In $(x + 1)(x + 2)(x + 3)$, the coefficient of $x$ is $ab + bc + ca = 11$, not $abc = 6$.

6. **Mistake 6: Dropping negative signs from constants.**
   In $(x - 2)(x + 3)(x - 4)$, $a = \mathbf{-2}$ and $c = \mathbf{-4}$. Using $+2$ and $+4$ will throw off every coefficient.

---

## Quick Recap

- **$(a + b)(a^2 - ab + b^2) = a^3 + b^3$**
- **$(a - b)(a^2 + ab + b^2) = a^3 - b^3$**
- The middle sign in the second bracket is **opposite** to the first bracket's sign; $a^2$ and $b^2$ are always **positive**.
- **$(a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca) = a^3 + b^3 + c^3 - 3abc$.** Use an organised table for long multiplications.
- **If $a + b + c = 0$, then $a^3 + b^3 + c^3 = 3abc$.** Always verify the sum first.
- **$(x + a)(x + b)(x + c) = x^3 + (a + b + c)x^2 + (ab + bc + ca)x + abc$** (extra).
- Always **check** your answer by substituting a small number such as $x = 1$.

---

## Practice Questions

1. Find each product using a suitable identity:
   (a) $(x + 3)(x^2 - 3x + 9)$
   (b) $(2y - 1)(4y^2 + 2y + 1)$
   (c) $\left(\frac{a}{2} + b\right)\left(\frac{a^2}{4} - \frac{ab}{2} + b^2\right)$

2. Find the product $(x + y - z)(x^2 + y^2 + z^2 - xy + yz + zx)$.

3. Expand $(x + 2)(x + 5)(x - 3)$.

4. Without finding the cubes, find the value of:
   (a) $9^3 - 5^3 - 4^3$
   (b) $(-8)^3 + 3^3 + 5^3$

5. Using a suitable product, find the value of $43^3 - 33^3$.

6. If $a + b = 6$ and $ab = 8$, find $a^3 + b^3$ using the identity $(a + b)(a^2 - ab + b^2) = a^3 + b^3$.

7. If $x - \frac{1}{x} = 6$, find the value of $x^3 - \frac{1}{x^3}$.

8. If $a + b + c = 8$, $ab + bc + ca = 19$, and $abc = 12$, find $a^3 + b^3 + c^3$.

9. Name the identity you would use for each:
   (a) $(3p + 2)^2$
   (b) $(k - 6)(k + 6)$
   (c) $(n + 4)(n^2 - 4n + 16)$
   (d) $(a + 2b + c)^2$
   (e) $(x + 2)(x - 5)(x + 1)$

10. Simplify: $(x + 1)(x^2 - x + 1) - (x - 1)(x^2 + x + 1)$.

### Answers

1. (a) $a = x, b = 3$, and the second bracket matches $a^2 - ab + b^2$. Answer: **$\mathbf{x^3 + 27}$**
   (b) $a = 2y, b = 1$, and the second bracket matches $a^2 + ab + b^2$. Answer: $(2y)^3 - 1^3 = \mathbf{8y^3 - 1}$
   (c) First term $\frac{a}{2}$, second term $b$. Verify: $\left(\frac{a}{2}\right)^2 = \frac{a^2}{4}$ ✅, $\left(\frac{a}{2}\right)(b) = \frac{ab}{2}$ ✅. Answer: $\left(\frac{a}{2}\right)^3 + b^3 = \mathbf{\frac{a^3}{8} + b^3}$

2. Treat $c = -z$. Then $a^2 + b^2 + c^2 - ab - bc - ca = x^2 + y^2 + z^2 - xy - y(-z) - (-z)x = x^2 + y^2 + z^2 - xy + yz + zx$ ✅. Answer: $x^3 + y^3 + (-z)^3 - 3xy(-z) = \mathbf{x^3 + y^3 - z^3 + 3xyz}$

3. $a = 2, b = 5, c = -3$. Sum $= 4$, $ab + bc + ca = 10 - 15 - 6 = -11$, $abc = -30$.
   Answer: **$\mathbf{x^3 + 4x^2 - 11x - 30}$**
   Check ($x = 1$): Left $= 3 \times 6 \times (-2) = -36$, Right $= 1 + 4 - 11 - 30 = -36$ ✅

4. (a) $9 + (-5) + (-4) = 0$, so value $= 3 \times 9 \times (-5) \times (-4) = \mathbf{540}$. Check: $729 - 125 - 64 = 540$ ✅
   (b) $-8 + 3 + 5 = 0$, so value $= 3 \times (-8) \times 3 \times 5 = \mathbf{-360}$. Check: $-512 + 27 + 125 = -360$ ✅

5. Set $a = 43, b = 33$. Then $a - b = 10$, and $a^2 + ab + b^2 = 1849 + 1419 + 1089 = 4357$. Answer: $10 \times 4357 = \mathbf{43,570}$.
   Check: $79{,}507 - 35{,}937 = 43{,}570$ ✅

6. $a^2 + b^2 = 36 - 16 = 20$. Thus $a^2 - ab + b^2 = 20 - 8 = 12$. So $a^3 + b^3 = 6 \times 12 = \mathbf{72}$.
   Check: $a = 2, b = 4 \rightarrow 8 + 64 = 72$ ✅

7. $x^2 + \frac{1}{x^2} = \left(x - \frac{1}{x}\right)^2 + 2 = 36 + 2 = 38$. Hence $x^2 + 1 + \frac{1}{x^2} = 39$.
   $x^3 - \frac{1}{x^3} = \left(x - \frac{1}{x}\right)\left(x^2 + 1 + \frac{1}{x^2}\right) = 6 \times 39 = \mathbf{234}$.
   Check (using Topic 4 formula): $6^3 + 3 \times 6 = 216 + 18 = 234$ ✅

8. $a^2 + b^2 + c^2 = 64 - 38 = 26$.
   $a^3 + b^3 + c^3 - 3 \times 12 = 8 \times (26 - 19) = 56$.
   $a^3 + b^3 + c^3 = 56 + 36 = \mathbf{92}$.
   Check: $a = 1, b = 3, c = 4 \rightarrow 1 + 27 + 64 = 92$ ✅

9. (a) **$(a + b)^2$**
   (b) **$(a + b)(a - b) = a^2 - b^2$**
   (c) **$(a + b)(a^2 - ab + b^2) = a^3 + b^3$**
   (d) **$(a + b + c)^2$**
   (e) **$(x + a)(x + b)(x + c)$** (product of three binomials)

10. First $= x^3 + 1$, second $= x^3 - 1$. Difference $= (x^3 + 1) - (x^3 - 1) = \mathbf{2}$.

---

## Chapter Wrap-up: Expansions

| Topic | What We Learned | Key Takeaway |
|---|---|---|
| 1 | $(a \pm b)^2$, $(a + b)(a - b)$, $(x + a)(x + b)$ | Never drop the middle $2ab$ when squaring a binomial |
| 2 | Value-finding with square identities, $(x \pm 1/x)^2$ | Find $a^2 + b^2$ from $a + b$ and $ab$ without solving for $a$ and $b$ |
| 3 | $(a + b + c)^2$ | Three squares plus twice every pairwise product |
| 4 | $(a \pm b)^3$, $(x \pm 1/x)^3$ | $(a + b)^3 \neq a^3 + b^3$ |
| 5 | Special products: $a^3 \pm b^3$, three-term product, three binomials | If $a + b + c = 0$, then $a^3 + b^3 + c^3 = 3abc$ |

### All Identities in One Place

| # | Identity |
|---|---|
| 1 | $(a + b)^2 = a^2 + 2ab + b^2$ |
| 2 | $(a - b)^2 = a^2 - 2ab + b^2$ |
| 3 | $(a + b)(a - b) = a^2 - b^2$ |
| 4 | $(x + a)(x + b) = x^2 + (a + b)x + ab$ |
| 5 | $(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca$ |
| 6 | $(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3 = a^3 + b^3 + 3ab(a + b)$ |
| 7 | $(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3 = a^3 - b^3 - 3ab(a - b)$ |
| 8 | $(a + b)(a^2 - ab + b^2) = a^3 + b^3$ |
| 9 | $(a - b)(a^2 + ab + b^2) = a^3 - b^3$ |
| 10 | $(a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca) = a^3 + b^3 + c^3 - 3abc$ |
| 11 | $(x + a)(x + b)(x + c) = x^3 + (a + b + c)x^2 + (ab + bc + ca)x + abc$ (extra) |

Next, in the Factorisation chapter, we will run all of these identities **in reverse** — breaking long expressions back down into compact brackets.

---

Congratulations! Completing this chapter gives you a complete algebraic multiplication toolkit. Whenever you face a long product, spot the pattern first, write down the result directly, and test it with a quick value like $x = 1$. You've got this!
