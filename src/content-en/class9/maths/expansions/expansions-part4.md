# Chapter: Expansions (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [expansions-part3.md](expansions-part3.md).** (The chapter begins in [expansions.md](expansions.md).)
> **Topics covered in this file:**
> 4. Cubes of Binomials: $(a \pm b)^3$ and $(x \pm 1/x)^3$

---

# Topic 4: Cubes of Binomials: $(a \pm b)^3$ and $(x \pm 1/x)^3$

In Topic 3, we learned how to expand the square of a three-term expression, $(a + b + c)^2$, getting the square of every term plus twice the product of every pair. Remember Elena's $7\text{ m} \times 7\text{ m}$ garden patio? It divided into $9$ tiled zones: $3$ square zones and $6$ rectangular zones. Earlier, in Topics 1 and 2, we explored $(a + b)^2$ and used it to find unknown values.

Now we return to **two terms**, yet raise the power from **$2$ to $3$**. That means multiplying a binomial bracket by itself three times. Do not worry — there is a crisp pattern here too, and the square formula from Topic 1 serves as our first stepping stone.

---

## Leo and Liam's Dice Workshop Story

**Leo** runs a small craft workshop that produces solid wooden and resin **board-game dice**. Every die is a solid cube, filled all the way through.

One morning, a game designer called with an order: "Leo, your standard dice have a **$10\text{ mm}$** edge. I need slightly larger ones with an **$11\text{ mm}$** edge. How much more resin will each die take?"

Leo's apprentice, **Liam**, did a quick mental calculation:
"The side only increased by $1\text{ mm}$, so we only need $1\text{ mm}^3$ more resin! $10^3 + 1^3 = 1000 + 1 = 1001\text{ mm}^3$."

Leo chuckled. "Go ahead and check that on a calculator."

$$11 \times 11 \times 11 = \mathbf{1331\text{ mm}^3}$$

Liam's jaw dropped. "$1331$, not $1001$?! Where on earth did the extra **$330$** come from?"

Leo explained: "When you increase the edge of a cube, it grows in **all three dimensions** — length, width, and height. That's why $(10 + 1)^3$ isn't just $10^3 + 1^3$. Extra pieces are tucked along the faces and edges!"

Those hidden pieces are the exact secret of this topic:
$$1331 = 1000 + \mathbf{300} + \mathbf{30} + 1$$

Where did $300$ and $30$ come from? Let's find out!

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Cube** | Multiplying an expression or number by itself three times | $4^3 = 4 \times 4 \times 4 = 64$ |
| **Binomial** | An algebraic expression with two terms | $a + b$, $2x - 3$ |
| **Cube of a binomial** | Raising a two-term bracket to the power of $3$ | $(a + b)^3$ |
| **Expansion** | Multiplying out brackets to display every term separately | $(x + 1)^2 = x^2 + 2x + 1$ |
| **Coefficient** | The numerical factor multiplying a variable part in a term | In $3a^2b$, the coefficient is $3$ |

---

## Part A: Where the $(a + b)^3$ Formula Comes From

Cubing means multiplying three copies together:

$$(a + b)^3 = (a + b) \times (a + b) \times (a + b)$$

We already know the product of the first two brackets from Topic 1:
$$(a + b)^2 = a^2 + 2ab + b^2$$

So we only need to multiply by one more $(a + b)$:

$$(a + b)^3 = (a + b)(a^2 + 2ab + b^2)$$

Multiply $a$ by every term in the second bracket, and $b$ by every term in the second bracket:

| Multiply by $a$ | Multiply by $b$ |
|---|---|
| $a \times a^2 = a^3$ | $b \times a^2 = a^2b$ |
| $a \times 2ab = 2a^2b$ | $b \times 2ab = 2ab^2$ |
| $a \times b^2 = ab^2$ | $b \times b^2 = b^3$ |

Add them all and combine like terms:
$$a^3 + 2a^2b + a^2b + ab^2 + 2ab^2 + b^3$$

> **$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$**

### Solving the Dice Puzzle

Set $a = 10$ and $b = 1$:
- $a^3 = 1000$
- $3a^2b = 3 \times 100 \times 1 = \mathbf{300}$
- $3ab^2 = 3 \times 10 \times 1 = \mathbf{30}$
- $b^3 = 1$

Total: $1000 + 300 + 30 + 1 = \mathbf{1331}$ ✅

Liam had only counted $a^3$ and $b^3$, leaving out the middle terms **$3a^2b$** and **$3ab^2$** — which accounted for the missing $330$!

---

## Part B: The Compact Form of the Formula

Look at the two middle terms: both share a common factor of $3ab$:
$$3a^2b + 3ab^2 = 3ab(a + b)$$

This gives a compact, alternative version of the identity:

> **$(a + b)^3 = a^3 + b^3 + 3ab(a + b)$**

This compact form works like magic in Part F when finding values. Whenever $a + b$ and $ab$ are given, $a^3 + b^3$ drops right out.

---

## Part C: $(a - b)^3$

To get $(a - b)^3$, replace $b$ with $(-b)$ in the $(a + b)^3$ formula:

- $a^3$ stays unchanged.
- $3a^2(-b) = -3a^2b$
- $3a(-b)^2 = +3ab^2$ (the square of a negative is positive)
- $(-b)^3 = -b^3$ (the cube of a negative stays negative)

> **$(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$**

Compact form:

> **$(a - b)^3 = a^3 - b^3 - 3ab(a - b)$**

### The Sign Pattern

| | 1st term | 2nd term | 3rd term | 4th term |
|---|---|---|---|---|
| $(a + b)^3$ | $+$ | $+$ | $+$ | $+$ |
| $(a - b)^3$ | $+$ | $-$ | $+$ | $-$ |

In $(a - b)^3$, the signs **alternate**: $+, -, +, -$. Wherever $b$ has an odd power ($b^1$ or $b^3$), the term carries a minus sign.

---

## Part D: The 1-3-3-1 Pattern

Compare the coefficients across powers:

| Expansion | Coefficients |
|---|---|
| $(a + b)^1 = a + b$ | $1, 1$ |
| $(a + b)^2 = a^2 + 2ab + b^2$ | $1, 2, 1$ |
| $(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$ | $1, 3, 3, 1$ |

And watch how the exponents move:
- The power of $a$ counts **down**: $3, 2, 1, 0$.
- The power of $b$ counts **up**: $0, 1, 2, 3$.
- In every single term, the sum of the exponents of $a$ and $b$ is always **$3$**.

Remember the chant: **"1-3-3-1, $a$ steps down, $b$ steps up."**

---

## Part E: Expanding Cubes (Worked Examples)

The method is identical for every example: first identify **what $a$ is and what $b$ is**, then plug them into the identity. Remember that any numerical coefficient belongs inside $a$ or $b$, so it gets cubed too!

**Example 1: $(2x + 3)^3$**

Here $a = 2x$ and $b = 3$:

- $a^3 = (2x)^3 = 8x^3$
- $3a^2b = 3 \times 4x^2 \times 3 = 36x^2$
- $3ab^2 = 3 \times 2x \times 9 = 54x$
- $b^3 = 27$

**$(2x + 3)^3 = 8x^3 + 36x^2 + 54x + 27$**

**Check:** Put $x = 1$. Left: $5^3 = 125$. Right: $8 + 36 + 54 + 27 = 125$ ✅

**Example 2: $(x - 2y)^3$**

Here $a = x$, $b = 2y$, with a minus sign:

- $a^3 = x^3$
- $3a^2b = 3 \times x^2 \times 2y = 6x^2y$ (sign $-$)
- $3ab^2 = 3 \times x \times 4y^2 = 12xy^2$ (sign $+$)
- $b^3 = 8y^3$ (sign $-$)

**$(x - 2y)^3 = x^3 - 6x^2y + 12xy^2 - 8y^3$**

**Check:** Put $x = 3, y = 1$. Left: $(3 - 2)^3 = 1$. Right: $27 - 54 + 36 - 8 = 1$ ✅

**Example 3: $\left(3a + \frac{1}{3}\right)^3$**

Here the first term is $3a$ and the second term is $\frac{1}{3}$:

- $(3a)^3 = 27a^3$
- $3 \times (3a)^2 \times \left(\frac{1}{3}\right) = 3 \times 9a^2 \times \frac{1}{3} = 9a^2$
- $3 \times 3a \times \left(\frac{1}{3}\right)^2 = 9a \times \frac{1}{9} = a$
- $\left(\frac{1}{3}\right)^3 = \frac{1}{27}$

**$\left(3a + \frac{1}{3}\right)^3 = 27a^3 + 9a^2 + a + \frac{1}{27}$**

**Check:** Put $a = 1$. Left: $(10/3)^3 = 1000/27$. Right: $27 + 9 + 1 + 1/27 = 37 + 1/27 = 1000/27$ ✅

**Example 4: $\left(x + \frac{1}{x}\right)^3$**

Here $a = x$ and $b = \frac{1}{x}$. Notice the neat simplification: $ab = x \times \frac{1}{x} = \mathbf{1}$.

Using the compact form:
$$\left(x + \frac{1}{x}\right)^3 = x^3 + \frac{1}{x^3} + 3 \times 1 \times \left(x + \frac{1}{x}\right)$$

**$\left(x + \frac{1}{x}\right)^3 = x^3 + \frac{1}{x^3} + 3\left(x + \frac{1}{x}\right)$**, or $x^3 + 3x + \frac{3}{x} + \frac{1}{x^3}$.

**Check:** Put $x = 2$. Left: $(2.5)^3 = 15.625$. Right: $8 + 6 + 1.5 + 0.125 = 15.625$ ✅

**Example 5: $\left(x - \frac{1}{x}\right)^3$**

Again $ab = 1$:

**$\left(x - \frac{1}{x}\right)^3 = x^3 - \frac{1}{x^3} - 3\left(x - \frac{1}{x}\right)$**, or $x^3 - 3x + \frac{3}{x} - \frac{1}{x^3}$.

**Check:** Put $x = 2$. Left: $(1.5)^3 = 3.375$. Right: $8 - 6 + 1.5 - 0.125 = 3.375$ ✅

---

## Part F: Finding Values (Without Knowing $a$ and $b$)

This is the most versatile part of the topic. Simply rearrange the compact cube formulas:

> **$\mathbf{a^3 + b^3 = (a + b)^3 - 3ab(a + b)}$**
>
> **$\mathbf{a^3 - b^3 = (a - b)^3 + 3ab(a - b)}$**

You never need to know $a$ and $b$ separately — just their sum (or difference) and their product!

**Example 6: Given $a + b = 8$ and $ab = 15$, find $a^3 + b^3$.**

$$a^3 + b^3 = 8^3 - 3 \times 15 \times 8 = 512 - 360 = \mathbf{152}$$

**Check:** With $a = 3, b = 5$: $a + b = 8$ and $ab = 15$. Then $3^3 + 5^3 = 27 + 125 = 152$ ✅

**Example 7: Given $a - b = 2$ and $ab = 15$, find $a^3 - b^3$.**

$$a^3 - b^3 = 2^3 + 3 \times 15 \times 2 = 8 + 90 = \mathbf{98}$$

**Check:** With $a = 5, b = 3$: $a - b = 2$ and $ab = 15$. Then $125 - 27 = 98$ ✅

**Example 8: Given $a + b = 4$ and $a^3 + b^3 = 28$, find $ab$.**

$$28 = 4^3 - 3ab \times 4$$
$$28 = 64 - 12ab$$
$$12ab = 36$$
$$\mathbf{ab = 3}$$

**Check:** Try $a = 1, b = 3$. Sum $= 4$, and $1 + 27 = 28$ ✅

### Problems with $x \pm 1/x$

As we saw in Part E, $ab = 1$ here, which makes the value-finding formulas even shorter:

> **$\mathbf{x^3 + \frac{1}{x^3} = \left(x + \frac{1}{x}\right)^3 - 3\left(x + \frac{1}{x}\right)}$**
>
> **$\mathbf{x^3 - \frac{1}{x^3} = \left(x - \frac{1}{x}\right)^3 + 3\left(x - \frac{1}{x}\right)}$**

**Example 9: Given $x + \frac{1}{x} = 4$, find $x^3 + \frac{1}{x^3}$.**

$$= 4^3 - 3 \times 4 = 64 - 12 = \mathbf{52}$$

**Example 10: Given $x - \frac{1}{x} = 3$, find $x^3 - \frac{1}{x^3}$.**

$$= 3^3 + 3 \times 3 = 27 + 9 = \mathbf{36}$$

### Multi-Step Chain Problems (Connecting with Topic 2)

**Example 11: Given $x + \frac{1}{x} = 3$, find $x^2 + \frac{1}{x^2}$ first, and then $x^3 + \frac{1}{x^3}$.**

Step 1 (square identity from Topic 2, Example 6):
$$x^2 + \frac{1}{x^2} = \left(x + \frac{1}{x}\right)^2 - 2 = 9 - 2 = \mathbf{7}$$

Step 2 (cube identity from this topic):
$$x^3 + \frac{1}{x^3} = 3^3 - 3 \times 3 = 27 - 9 = \mathbf{18}$$

**Check using another route:** $x^3 + \frac{1}{x^3} = \left(x + \frac{1}{x}\right)\left(x^2 + \frac{1}{x^2} - 1\right) = 3 \times (7 - 1) = 18$ ✅
*(We will explore that second route fully in Topic 5!)*

---

## Part G: Cubing Large Numbers Without a Calculator

Break the number near a convenient round value like $100$, $50$, or $1$.

**$104^3$** $= (100 + 4)^3$
$= 100^3 + 3 \times 100^2 \times 4 + 3 \times 100 \times 4^2 + 4^3$
$= 1{,}000{,}000 + 120{,}000 + 4{,}800 + 64$
$= \mathbf{1,124,864}$

**$97^3$** $= (100 - 3)^3$
$= 1{,}000{,}000 - 3 \times 10{,}000 \times 3 + 3 \times 100 \times 9 - 27$
$= 1{,}000{,}000 - 90{,}000 + 2{,}700 - 27$
$= \mathbf{912,673}$

**$1.3^3$** $= (1 + 0.3)^3$
$= 1 + 3 \times 0.3 + 3 \times 0.09 + 0.027$
$= 1 + 0.9 + 0.27 + 0.027$
$= \mathbf{2.197}$

**$49^3$** $= (50 - 1)^3$
$= 125{,}000 - 3 \times 2{,}500 + 3 \times 50 - 1$
$= 125{,}000 - 7{,}500 + 150 - 1$
$= \mathbf{117,649}$

### Simplification Problem

**Example 12: Evaluate $7.5^3 - 2.5^3 - 3 \times 7.5 \times 2.5 \times 5$.**

Spot the pattern: $a = 7.5$, $b = 2.5$, and notice that $a - b = \mathbf{5}$. This matches the compact form of $(a - b)^3$:
$$a^3 - b^3 - 3ab(a - b) = (a - b)^3$$

So the answer is simply $5^3 = \mathbf{125}$!

No messy decimal cubing required — recognizing the pattern does all the heavy lifting.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Writing $(a + b)^3 = a^3 + b^3$.**
   This is Liam's dice mistake! $(10 + 1)^3 = 1331$, not $1001$. Never leave out the middle terms **$3a^2b + 3ab^2$**.

2. **Mistake 2: Making every sign negative in $(a - b)^3$.**
   $(a - b)^3 = a^3 - 3a^2b \mathbf{+} 3ab^2 - b^3$. The third term is **positive** because $(-b)^2 = +b^2$.

3. **Mistake 3: Forgetting to cube the coefficient.**
   $(2x)^3 = 8x^3$, not $2x^3$. Everything inside the bracket must be raised to the power of $3$.

4. **Mistake 4: Writing $3ab$ instead of $3ab(a + b)$.**
   $(a + b)^3 = a^3 + b^3 + 3ab\mathbf{(a + b)}$. Dropping the $(a + b)$ factor ruins the answer: in Example 6, $512 - 45$ gives $467$, whereas the true answer is $152$.

5. **Mistake 5: Using the wrong sign in the $a^3 - b^3$ formula.**
   $a^3 - b^3 = (a - b)^3 \mathbf{+} 3ab(a - b)$. There is a **plus** sign before $3ab(a - b)$. Using minus in Example 7 would give $8 - 90 = -82$, which is wrong.

6. **Mistake 6: Forgetting that $ab = 1$ in $x \pm 1/x$ problems.**
   Since $x \times \frac{1}{x} = 1$, the term $3ab(x + 1/x)$ simplifies cleanly to $3(x + 1/x)$.

---

## Quick Recap

- **$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3 = a^3 + b^3 + 3ab(a + b)$**
- **$(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3 = a^3 - b^3 - 3ab(a - b)$**
- Coefficient pattern: **$1, 3, 3, 1$**. Powers of $a$ count down; powers of $b$ count up.
- Signs in $(a - b)^3$ alternate: **$+, -, +, -$**.
- For finding values: **$a^3 + b^3 = (a + b)^3 - 3ab(a + b)$** and **$a^3 - b^3 = (a - b)^3 + 3ab(a - b)$**.
- For reciprocals, $ab = 1$, so **$x^3 + 1/x^3 = (x + 1/x)^3 - 3(x + 1/x)$**.
- For large numbers like $104^3$, $97^3$, or $49^3$, split near a round number.
- Always **check** your expansion with small test numbers.

---

## Practice Questions

1. Expand:
   (a) $(x + 4)^3$
   (b) $(2a - 3b)^3$
   (c) $\left(y + \frac{2}{y}\right)^3$
   (d) $\left(\frac{x}{2} - 1\right)^3$

2. Using a suitable identity, find the value of:
   (a) $103^3$
   (b) $98^3$
   (c) $0.9^3$

3. If $a + b = 7$ and $ab = 10$, find $a^3 + b^3$.

4. If $a - b = 3$ and $ab = 10$, find $a^3 - b^3$.

5. If $x + \frac{1}{x} = 5$, find $x^3 + \frac{1}{x^3}$.

6. If $x - \frac{1}{x} = 4$, find $x^3 - \frac{1}{x^3}$.

7. If $x + \frac{1}{x} = 2$, find (a) $x^2 + \frac{1}{x^2}$ and (b) $x^3 + \frac{1}{x^3}$.

8. Without multiplying directly, find the value of $8.6^3 + 1.4^3 + 3 \times 8.6 \times 1.4 \times 10$.

9. State whether each statement is true or false. Give a reason.
   (a) $(x + y)^3 = x^3 + y^3$
   (b) $(a - b)^3 = -(b - a)^3$
   (c) The coefficient of $x^2$ in $(x + 2)^3$ is $6$.
   (d) $(2x)^3 = 6x^3$

### Answers

1. (a) $a = x, b = 4$: **$\mathbf{x^3 + 12x^2 + 48x + 64}$**
   Check ($x = 1$): $5^3 = 125$, and $1 + 12 + 48 + 64 = 125$ ✅
   (b) First term $2a$, second term $3b$: $(2a)^3 - 3(2a)^2(3b) + 3(2a)(3b)^2 - (3b)^3 = \mathbf{8a^3 - 36a^2b + 54ab^2 - 27b^3}$
   Check ($a = 2, b = 1$): $(4 - 3)^3 = 1$, and $64 - 144 + 108 - 27 = 1$ ✅
   (c) First term $y$, second term $\frac{2}{y}$: $y^3 + 3y^2\left(\frac{2}{y}\right) + 3y\left(\frac{4}{y^2}\right) + \frac{8}{y^3} = \mathbf{y^3 + 6y + \frac{12}{y} + \frac{8}{y^3}}$
   Check ($y = 1$): $3^3 = 27$, and $1 + 6 + 12 + 8 = 27$ ✅
   (d) First term $\frac{x}{2}$, second term $1$: $\frac{x^3}{8} - 3\left(\frac{x^2}{4}\right)(1) + 3\left(\frac{x}{2}\right)(1) - 1 = \mathbf{\frac{x^3}{8} - \frac{3x^2}{4} + \frac{3x}{2} - 1}$
   Check ($x = 2$): $(1 - 1)^3 = 0$, and $1 - 3 + 3 - 1 = 0$ ✅
2. (a) $(100 + 3)^3 = 1{,}000{,}000 + 90{,}000 + 2{,}700 + 27 = \mathbf{1,092,727}$
   (b) $(100 - 2)^3 = 1{,}000{,}000 - 60{,}000 + 1{,}200 - 8 = \mathbf{941,192}$
   (c) $(1 - 0.1)^3 = 1 - 0.3 + 0.03 - 0.001 = \mathbf{0.729}$
3. $a^3 + b^3 = 7^3 - 3 \times 10 \times 7 = 343 - 210 = \mathbf{133}$
   Check: $a = 2, b = 5$ gives $8 + 125 = 133$ ✅
4. $a^3 - b^3 = 3^3 + 3 \times 10 \times 3 = 27 + 90 = \mathbf{117}$
   Check: $a = 5, b = 2$ gives $125 - 8 = 117$ ✅
5. $5^3 - 3 \times 5 = 125 - 15 = \mathbf{110}$
6. $4^3 + 3 \times 4 = 64 + 12 = \mathbf{76}$
7. (a) $x^2 + \frac{1}{x^2} = 2^2 - 2 = \mathbf{2}$
   (b) $x^3 + \frac{1}{x^3} = 2^3 - 3 \times 2 = \mathbf{2}$
   Check: $x + \frac{1}{x} = 2$ happens only when $x = 1$, and $1^2 + 1 = 2$, $1^3 + 1 = 2$ ✅
8. Here $a = 8.6, b = 1.4$, and $a + b = 10$. This matches $a^3 + b^3 + 3ab(a + b) = (a + b)^3 = 10^3 = \mathbf{1000}$.
9. (a) **False.** The middle terms $3x^2y + 3xy^2$ are missing. With $x = y = 1$, $(1 + 1)^3 = 8$, whereas $1 + 1 = 2$.
   (b) **True.** Since $b - a = -(a - b)$, and cubing a negative keeps the minus sign, $(b - a)^3 = -(a - b)^3$. Multiplying both sides by $-1$ gives $(a - b)^3 = -(b - a)^3$ ✅
   (c) **True.** $(x + 2)^3 = x^3 + 6x^2 + 12x + 8$. The coefficient of $x^2$ is $3 \times 2 = 6$ ✅
   (d) **False.** $(2x)^3 = 2^3 x^3 = \mathbf{8x^3}$ ❌

---

Well done! As long as you remember that **expanding a cube hides two extra terms in the middle**, you will never fall into Liam's trap. Later, in the Factorisation chapter, we will run these exact same formulas in reverse.

**What's next?** In Topic 5, we discover a remarkable surprise: certain pairs of brackets multiply together so that all the middle terms wipe each other out, leaving only **$a^3 + b^3$** or **$a^3 - b^3$** — along with a famous three-term product leading to **$a^3 + b^3 + c^3 - 3abc$**.
