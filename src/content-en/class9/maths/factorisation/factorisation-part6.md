# Chapter: Factorisation (Part 6)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [factorisation-part5.md](factorisation-part5.md)** (Topic 5: Factorisation of Quadratic Trinomials). An overview of all formulas is in Topic 1 ([factorisation.md](factorisation.md)).
> **Topics covered in this file:**
> 6. Cube of a Binomial

---

# Topic 6: Cube of a Binomial

In Topic 5, we factorised quadratic trinomials and saw that some of them are actually **perfect squares**, like $4x^2 + 12x + 9 = (2x + 3)^2$. Everything there revolved around **squares** (power $2$). Now we climb **one power higher**: from squares to **cubes** (power $3$), namely $(a + b)^3$ and $(a - b)^3$.

In Topic 1's formula summary, both identities appeared on a single line. Now we will understand them thoroughly: **where the formulas come from**, **how to remember them effortlessly**, how to use them to cube large numbers mentally, and most importantly, **how to factorise perfect cube expressions back into $(a \pm b)^3$.**

---

## Leo's Modular 3D Block Design

Leo is designing a modular 3D wooden block for a tabletop puzzle. The full solid cube has edge length **$(a + b)$**, so its total volume is **$(a + b)^3$**.

To make the puzzle interlocking, Leo slices the cube with a fine saw: along each edge, he makes one straight cut at distance $a$. Once he cuts across all three dimensions (length, width, and height), the large cube splits into **$8$ smaller blocks**. Let us list every piece he gets:

| Piece | Dimensions | Volume | Count |
|---|---|---|---|
| One large cube | $a \times a \times a$ | $a^3$ | **$1$** |
| One small cube | $b \times b \times b$ | $b^3$ | **$1$** |
| Thick square slabs | $a \times a \times b$ | $a^2b$ | **$3$** |
| Slender rectangular rods | $a \times b \times b$ | $ab^2$ | **$3$** |

Count the blocks: $1 + 1 + 3 + 3 = 8$ pieces ✅

Add up the volumes of all $8$ pieces, and you get the exact volume of the original cube:

$$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$

That is the entire identity: one large cube, one small cube, three slabs, and three rods. Whenever you forget the formula, simply picture that $8$-piece modular cube!

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Binomial** | An expression with two terms (seen in Polynomials) | $a + b$, $2x - 3y$ |
| **Cube** | Multiplying an expression by itself three times | $a^3 = a \times a \times a$ |
| **Cube of a binomial** | Raising a two-term expression to the power $3$ | $(a + b)^3$, $(x - 2)^3$ |
| **Perfect cube expression** | An expression equal to the cube of a binomial | $x^3 + 6x^2 + 12x + 8 = (x + 2)^3$ |
| **Expand** | Multiplying out brackets to write a full sum of terms | $(x + 1)^3 \rightarrow x^3 + 3x^2 + 3x + 1$ |

---

## Part A: Where the Formula Comes From

The sliced cube gave us a visual proof. Now let us confirm the exact same result algebraically by multiplying.

$(a + b)^3$ means $(a + b) \times (a + b) \times (a + b)$.

In Topic 5 (and Topic 1), we used the perfect square result $(a + b)^2 = a^2 + 2ab + b^2$. All we need to do is multiply that by one more $(a + b)$:

$$(a + b)^3 = (a + b)^2 \times (a + b)$$
$$= (a^2 + 2ab + b^2)(a + b)$$

Multiply every term in the first bracket by $a$ and then by $b$:

$$= a^2 \cdot a + a^2 \cdot b + 2ab \cdot a + 2ab \cdot b + b^2 \cdot a + b^2 \cdot b$$
$$= a^3 + a^2b + 2a^2b + 2ab^2 + ab^2 + b^3$$

Combine like terms ($a^2b$ terms together, $ab^2$ terms together):

$$= a^3 + \mathbf{3a^2b} + \mathbf{3ab^2} + b^3 \quad ✅$$

The exact same formula we got from the $8$ modular blocks!

### How Do We Get $(a - b)^3$?

Simply replace $b$ with **$(-b)$**:

$$(a - b)^3 = a^3 + 3a^2(-b) + 3a(-b)^2 + (-b)^3$$
$$= a^3 - 3a^2b + 3ab^2 - b^3$$

*(Here $(-b)^2 = b^2$ is positive, while $(-b)^3 = -b^3$ is negative — an even power of a negative is positive, and an odd power is negative.)*

### Both Formulas Side by Side

> **$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$**
>
> **$(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$**

In $(a - b)^3$, the signs **alternate**: $+, -, +, -$.

---

## Part B: The Compact Form of the Formula

Notice that $3a^2b + 3ab^2$ has a common factor of **$3ab$**:

$$3a^2b + 3ab^2 = 3ab(a + b)$$

So we can also write the identities in a compact form:

> **$(a + b)^3 = a^3 + b^3 + 3ab(a + b)$**
>
> **$(a - b)^3 = a^3 - b^3 - 3ab(a - b)$**

This compact form is especially powerful for Part G problems, where $a + b$ and $ab$ are given.

---

## Part C: The $1\text{-}3\text{-}3\text{-}1$ Pattern

Look closely at the expanded form:

$$(a + b)^3 = \mathbf{1}a^3 + \mathbf{3}a^2b + \mathbf{3}ab^2 + \mathbf{1}b^3$$

Remember three simple features:

1. **Coefficients:** $1, 3, 3, 1$ (symmetric forward and backward).
2. **Power of $a$:** $3, 2, 1, 0$ (drops by $1$ in each term).
3. **Power of $b$:** $0, 1, 2, 3$ (rises by $1$ in each term).

In every term, the sum of the exponents of $a$ and $b$ is always **$3$**: $a^3$ ($3 + 0$), $a^2b$ ($2 + 1$), $ab^2$ ($1 + 2$), $b^3$ ($0 + 3$).

If you remember this pattern, you never need to rote-memorise the formula.

---

## Part D: Expanding Binomial Cubes (Solved Examples)

The method is always the same: identify **what $a$ is** and **what $b$ is**, then plug them into the $1\text{-}3\text{-}3\text{-}1$ pattern.

**Example 1:** $(x + 2)^3$

Here $a = x$, $b = 2$.
$$= x^3 + 3(x^2)(2) + 3(x)(2^2) + 2^3$$
$$= \mathbf{x^3 + 6x^2 + 12x + 8}$$

**Check (plug in $x = 1$):** $(1 + 2)^3 = 27$. And $1 + 6 + 12 + 8 = 27$ ✅

**Example 2:** $(2x + 3y)^3$

Here $a = 2x$, $b = 3y$.
- $a^3 = (2x)^3 = 8x^3$
- $3a^2b = 3(4x^2)(3y) = 36x^2y$
- $3ab^2 = 3(2x)(9y^2) = 54xy^2$
- $b^3 = (3y)^3 = 27y^3$

$$= \mathbf{8x^3 + 36x^2y + 54xy^2 + 27y^3}$$

**Example 3:** $(3a - 2b)^3$

Use first term $3a$, second term $2b$, and the minus-sign pattern:
- $(3a)^3 = 27a^3$
- $3(3a)^2(2b) = 3(9a^2)(2b) = 54a^2b$
- $3(3a)(2b)^2 = 3(3a)(4b^2) = 36ab^2$
- $(2b)^3 = 8b^3$

Alternating signs $+, -, +, -$:
$$= \mathbf{27a^3 - 54a^2b + 36ab^2 - 8b^3}$$

**Example 4:** $\left(x + \frac{1}{x}\right)^3$

Here $a = x$, $b = \frac{1}{x}$.
- $a^3 = x^3$
- $3a^2b = 3(x^2)\left(\frac{1}{x}\right) = 3x$
- $3ab^2 = 3(x)\left(\frac{1}{x^2}\right) = \frac{3}{x}$
- $b^3 = \frac{1}{x^3}$

$$= \mathbf{x^3 + 3x + \frac{3}{x} + \frac{1}{x^3}}$$

In compact form: $\left(x + \frac{1}{x}\right)^3 = x^3 + \frac{1}{x^3} + 3(x)\left(\frac{1}{x}\right)\left(x + \frac{1}{x}\right) =$ **$x^3 + \frac{1}{x^3} + 3\left(x + \frac{1}{x}\right)$**

Notice that $x \times \frac{1}{x} = 1$, so $3ab$ simplifies purely to **$3$**. We will use this constantly in Part G.

**Example 5:** $\left(x - \frac{1}{x}\right)^3$

$$= x^3 - 3(x^2)\left(\frac{1}{x}\right) + 3(x)\left(\frac{1}{x^2}\right) - \frac{1}{x^3}$$
$$= \mathbf{x^3 - 3x + \frac{3}{x} - \frac{1}{x^3}}$$

In compact form: **$x^3 - \frac{1}{x^3} - 3\left(x - \frac{1}{x}\right)$**

---

## Part E: Cubing Large Numbers (Mental Maths)

Split the number into a round number (like $10$ or $100$) plus or minus a small number, then apply the formula.

**Example 1:** $101^3$

Write $101 = 100 + 1$, so $a = 100$ and $b = 1$.
$$= 100^3 + 3(100^2)(1) + 3(100)(1^2) + 1^3$$
$$= 1{,}000{,}000 + 30{,}000 + 300 + 1$$
$$= \mathbf{1{,}030{,}301}$$

**Example 2:** $99^3$

Write $99 = 100 - 1$.
$$= 100^3 - 3(100^2)(1) + 3(100)(1) - 1$$
$$= 1{,}000{,}000 - 30{,}000 + 300 - 1$$
$$= \mathbf{970{,}299}$$

**Example 3:** $1.1^3$

Write $1.1 = 1 + 0.1$.
$$= 1 + 3(1)(0.1) + 3(1)(0.01) + 0.001$$
$$= 1 + 0.3 + 0.03 + 0.001$$
$$= \mathbf{1.331}$$

**Example 4:** $9.9^3$

Write $9.9 = 10 - 0.1$.
$$= 1000 - 3(100)(0.1) + 3(10)(0.01) - 0.001$$
$$= 1000 - 30 + 0.3 - 0.001$$
$$= \mathbf{970.299}$$

No calculator needed — solved in 30 seconds!

---

## Part F: Factorising Perfect Cube Expressions

Now let us work in reverse: given a four-term expression, write it back in the form **$(a + b)^3$ or $(a - b)^3$**.

### How to Spot a Perfect Cube (4 Checks)

1. Are there **$4$ terms**?
2. Are the **first and last terms perfect cubes**? (e.g., $8x^3 = (2x)^3$, $27 = 3^3$)
3. Take their cube roots: those give you **$a$ and $b$**.
4. Check the two middle terms: do they actually equal **$3a^2b$ and $3ab^2$**?

If all four checks pass, the expression is a perfect cube. Check the signs:
- All plus signs $\rightarrow$ **$(a + b)^3$**
- Alternating signs $+, -, +, -$ $\rightarrow$ **$(a - b)^3$**

### Solved Examples

**Example 1:** $8x^3 + 36x^2y + 54xy^2 + 27y^3$

- First term $8x^3 = (2x)^3$, so **$a = 2x$**.
- Last term $27y^3 = (3y)^3$, so **$b = 3y$**.
- Check $3a^2b = 3(4x^2)(3y) = 36x^2y$ ✅
- Check $3ab^2 = 3(2x)(9y^2) = 54xy^2$ ✅
- All terms are positive.

$$= \mathbf{(2x + 3y)^3}$$

**Example 2:** $x^3 - 6x^2 + 12x - 8$

- $x^3 = (x)^3$, so $a = x$.
- $8 = 2^3$, so $b = 2$.
- $3a^2b = 3(x^2)(2) = 6x^2$ ✅
- $3ab^2 = 3(x)(4) = 12x$ ✅
- Signs are $+, -, +, -$.

$$= \mathbf{(x - 2)^3}$$

**Example 3:** $27a^3 - 27a^2b + 9ab^2 - b^3$

- $27a^3 = (3a)^3$, and $b^3 = (b)^3$.
- $3(3a)^2(b) = 3(9a^2)(b) = 27a^2b$ ✅
- $3(3a)(b^2) = 9ab^2$ ✅
- Signs are $+, -, +, -$.

$$= \mathbf{(3a - b)^3}$$

**Example 4:** $x^3 + 3x^2 + 3x + 1$

- $a = x$, $b = 1$.
- $3a^2b = 3x^2$ ✅, $3ab^2 = 3x$ ✅

$$= \mathbf{(x + 1)^3}$$

**Example 5 (common factor first):** $2x^3 + 12x^2 + 24x + 16$

Every term shares a common factor of $2$ (Topic 2):
$$= 2(x^3 + 6x^2 + 12x + 8)$$

Inside the bracket is Example 1 from Part D:
$$= \mathbf{2(x + 2)^3}$$

**Example 6 (compact form):** $x^3 + 8 + 6x(x + 2)$

This matches $a^3 + b^3 + 3ab(a + b)$ with $a = x$ and $b = 2$:
- $3ab(a + b) = 3(x)(2)(x + 2) = 6x(x + 2)$ ✅

$$= \mathbf{(x + 2)^3}$$

### When the Check Fails

**Example 7:** $x^3 + 6x^2 + 9x + 8$

Try $a = x$, $b = 2$. Check $3ab^2 = 3(x)(4) = 12x$. Yet the expression has $9x$!
The check fails. This expression is **not a perfect cube**, so it cannot be factorised using this identity.

Always verify both middle terms! Never jump to an answer just from the first and last terms.

---

## Part G: Finding $a^3 + b^3$ When $a + b$ and $ab$ Are Given

These problems are remarkably neat — and they rely directly on the compact form from Part B:

$$(a + b)^3 = a^3 + b^3 + 3ab(a + b)$$

Rearranging for $a^3 + b^3$:

> **$a^3 + b^3 = (a + b)^3 - 3ab(a + b)$**

Similarly:

> **$a^3 - b^3 = (a - b)^3 + 3ab(a - b)$**

**Example 1:** If $a + b = 5$ and $ab = 6$, find $a^3 + b^3$.

$$a^3 + b^3 = (a + b)^3 - 3ab(a + b)$$
$$= 5^3 - 3(6)(5)$$
$$= 125 - 90 = \mathbf{35}$$

**Check:** Try $a = 2, b = 3$ ($2 + 3 = 5$, $2 \times 3 = 6$). Then $2^3 + 3^3 = 8 + 27 = 35$ ✅

**Example 2:** If $a - b = 2$ and $ab = 15$, find $a^3 - b^3$.

$$a^3 - b^3 = (a - b)^3 + 3ab(a - b)$$
$$= 2^3 + 3(15)(2)$$
$$= 8 + 90 = \mathbf{98}$$

**Check:** Try $a = 5, b = 3$. Then $125 - 27 = 98$ ✅

**Example 3:** If $x + \frac{1}{x} = 3$, find $x^3 + \frac{1}{x^3}$.

Here $a = x$ and $b = \frac{1}{x}$, so $ab = x \times \frac{1}{x} = \mathbf{1}$.

$$x^3 + \frac{1}{x^3} = \left(x + \frac{1}{x}\right)^3 - 3(1)\left(x + \frac{1}{x}\right)$$
$$= 3^3 - 3(3) = 27 - 9 = \mathbf{18}$$

**Example 4:** If $x - \frac{1}{x} = 4$, find $x^3 - \frac{1}{x^3}$.

$$x^3 - \frac{1}{x^3} = \left(x - \frac{1}{x}\right)^3 + 3(1)\left(x - \frac{1}{x}\right)$$
$$= 4^3 + 3(4) = 64 + 12 = \mathbf{76}$$

**Remember:** In reciprocal problems with $x$ and $\frac{1}{x}$, **$ab = 1$**, making the formula even shorter.

---

## Part H: $(a + b)^3$ and $a^3 + b^3$ Are Different

This is the single most common mistake students make. Test with numbers:

Let $a = 1$, $b = 2$:
- $(a + b)^3 = (1 + 2)^3 = 3^3 = \mathbf{27}$
- $a^3 + b^3 = 1 + 8 = \mathbf{9}$

Completely different! The gap is $27 - 9 = 18$, which is exactly $3ab(a + b) = 3(1)(2)(3) = 18$ ✅

So keep them distinct:
- **$(a + b)^3$** = "add first, then cube." It has $4$ terms (the cube of a binomial).
- **$a^3 + b^3$** = "cube first, then add." This is the sum of two cubes.

We will learn how to factorise $a^3 + b^3$ and $a^3 - b^3$ in the very next topic (Topic 7).

---

## Common Pitfalls to Avoid

1. **Mistake 1: Writing $(a + b)^3 = a^3 + b^3$.**
   That drops the two middle terms $3a^2b + 3ab^2$. Remember the numerical check from Part H: $27 \neq 9$.

2. **Mistake 2: Forgetting to cube the numerical coefficient.**
   $(2x)^3 = 8x^3$, not $2x^3$. Everything inside the bracket gets cubed.

3. **Mistake 3: Getting the signs wrong in $(a - b)^3$.**
   The signs alternate: **$+, -, +, -$**. The final term is $-b^3$, not $+b^3$.

4. **Mistake 4: Writing $a$ instead of $a^2$ inside $3a^2b$.**
   $3a^2b$ contains **$a$ squared**. In $(2x + 3y)^3$, $3a^2b = 3(2x)^2(3y) = 3(4x^2)(3y) = 36x^2y$. Forgetting to square $(2x)$ gives $18x^2y$, which is wrong.

5. **Mistake 5: Factorising after checking only the first and last terms.**
   Always verify both middle terms as well. $x^3 + 6x^2 + 9x + 8$ is not a perfect cube because the third term should be $12x$, not $9x$.

6. **Mistake 6: Forgetting that $ab = 1$ in $x + \frac{1}{x}$ problems.**
   $x \times \frac{1}{x} = 1$. Substituting $ab = x$ instead of $1$ ruins the entire calculation.

7. **Mistake 7: Forgetting to pull out a common factor first.**
   In $2x^3 + 12x^2 + 24x + 16$, the first term $2x^3$ does not look like a perfect cube. Pull out $2$ first, and the perfect cube appears right inside.

---

## Quick Recap

- **$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$** (one large cube, one small cube, three slabs, three rods).
- **$(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$** (signs $+, -, +, -$).
- **Compact form:** $(a + b)^3 = a^3 + b^3 + 3ab(a + b)$ and $(a - b)^3 = a^3 - b^3 - 3ab(a - b)$.
- **Pattern:** coefficients $1, 3, 3, 1$; powers of $a$ go down from $3$ to $0$; powers of $b$ go up from $0$ to $3$.
- **Cubing large numbers:** split near $10$ or $100$ ($101 = 100 + 1$, $99 = 100 - 1$).
- **4 checks to factorise a perfect cube:** $4$ terms, first and last are perfect cubes, cube roots give $a$ and $b$, middle terms match $3a^2b$ and $3ab^2$.
- **$a^3 + b^3 = (a + b)^3 - 3ab(a + b)$** and **$a^3 - b^3 = (a - b)^3 + 3ab(a - b)$**.
- In $x$ and $\frac{1}{x}$ problems, **$ab = 1$**.
- **$(a + b)^3 \neq a^3 + b^3$.**

---

## Practice Questions

1. Expand:
   (a) $(x + 2)^3$
   (b) $(3a - 2b)^3$
   (c) $\left(x + \frac{1}{x}\right)^3$

2. Use a suitable identity to evaluate:
   (a) $102^3$
   (b) $98^3$
   (c) $1.2^3$

3. Factorise:
   (a) $x^3 + 3x^2 + 3x + 1$
   (b) $64p^3 - 48p^2 + 12p - 1$
   (c) $2x^3 + 12x^2 + 24x + 16$
   (d) $8a^3 + 12a^2b + 6ab^2 + b^3$

4. If $a + b = 7$ and $ab = 10$, find the value of $a^3 + b^3$.

5. If $a - b = 3$ and $ab = 10$, find the value of $a^3 - b^3$.

6. If $x + \frac{1}{x} = 4$, find the value of $x^3 + \frac{1}{x^3}$.

7. If $x - \frac{1}{x} = 2$, find the value of $x^3 - \frac{1}{x^3}$.

8. State whether each statement is true or false. Give a reason.
   (a) $(a + b)^3 = a^3 + b^3$
   (b) $(a - b)^3 = a^3 - b^3 - 3ab(a - b)$
   (c) $x^3 + 6x^2 + 9x + 8$ is a perfect cube.

### Answers

1. (a) **$x^3 + 6x^2 + 12x + 8$**
   (b) $27a^3 - 3(9a^2)(2b) + 3(3a)(4b^2) - 8b^3 =$ **$27a^3 - 54a^2b + 36ab^2 - 8b^3$**
   (c) **$x^3 + 3x + \frac{3}{x} + \frac{1}{x^3}$**
2. (a) $(100 + 2)^3 = 1{,}000{,}000 + 3(10{,}000)(2) + 3(100)(4) + 8 = 1{,}000{,}000 + 60{,}000 + 1{,}200 + 8 =$ **$1{,}061{,}208$**
   (b) $(100 - 2)^3 = 1{,}000{,}000 - 60{,}000 + 1{,}200 - 8 =$ **$941{,}192$**
   (c) $(1 + 0.2)^3 = 1 + 3(0.2) + 3(0.04) + 0.008 = 1 + 0.6 + 0.12 + 0.008 =$ **$1.728$**
3. (a) $a = x$, $b = 1$. $3a^2b = 3x^2$, $3ab^2 = 3x$ ✅. **$(x + 1)^3$**
   (b) $64p^3 = (4p)^3$, $1 = 1^3$. $3(16p^2)(1) = 48p^2$ ✅, $3(4p)(1) = 12p$ ✅, signs $+, -, +, -$. **$(4p - 1)^3$**
   (c) Pull out $2$ first: $2(x^3 + 6x^2 + 12x + 8) =$ **$2(x + 2)^3$**
   (d) $8a^3 = (2a)^3$, $b^3$. $3(4a^2)(b) = 12a^2b$ ✅, $3(2a)(b^2) = 6ab^2$ ✅. **$(2a + b)^3$**
4. $a^3 + b^3 = 7^3 - 3(10)(7) = 343 - 210 =$ **$133$**
   Check: $a = 5, b = 2 \rightarrow 125 + 8 = 133$ ✅
5. $a^3 - b^3 = 3^3 + 3(10)(3) = 27 + 90 =$ **$117$**
   Check: $a = 5, b = 2 \rightarrow 125 - 8 = 117$ ✅
6. $x^3 + \frac{1}{x^3} = 4^3 - 3(4) = 64 - 12 =$ **$52$**
7. $x^3 - \frac{1}{x^3} = 2^3 + 3(2) = 8 + 6 =$ **$14$**
8. (a) **False.** $(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$. For instance, when $a = 1, b = 2$, $27 \neq 9$.
   (b) **True.** This is the compact form of $(a - b)^3$.
   (c) **False.** With $a = x$ and $b = 2$, $3ab^2$ should be $12x$, whereas the expression has $9x$.

---

If you ever forget the formula, simply picture Leo's wooden block sliced into $8$ pieces: **one large cube, one small cube, three slabs, and three rods.** Instantly, $(a + b)^3$ comes right back.

**In the next topic:** We saw that $(a + b)^3$ and $a^3 + b^3$ are not the same thing. In Topic 7, we will learn how to factorise **$a^3 + b^3$ and $a^3 - b^3$** (the sum and difference of two cubes).
