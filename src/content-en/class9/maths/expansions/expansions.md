# Chapter: Expansions

> **Class:** 9 | **Subject:** Mathematics
> **This marks the start of a new chapter.** In the [Polynomials](../polynomials/polynomials.md) chapter, we learned how to identify terms, combine like terms, and work with algebraic expressions. Now we will learn how to **multiply out** (expand) expressions with brackets, along with four rock-solid formulas (identities) that do this work in seconds.
> **Topics covered in this file:**
> 1. What Is Expansion and Basic Identities

---

# Topic 1: What Is Expansion and Basic Identities

In the Polynomials chapter, we saw what **terms** are and how to add **like terms** (for example, $3x + 5x = 8x$). We also did a small version of multiplying out brackets: multiplying a single term by a bracket, such as $2x(x + 3) = 2x^2 + 6x$.

Now let us take one step further. What happens when **two brackets** are multiplied together? For instance, $(x + 3)(x + 5)$, or $(a + b)^2$. Multiplying them out to remove the brackets is called **expansion**. In this topic, we will learn four identities that rank among the most useful formulas in all of mathematics.

---

## Maya and the "Brain Spark" Quiz Show

Every weekend, the local television channel airs a rapid-fire quiz show called **"Brain Spark."** This season's defending champion is Grade 9 student **Maya**.

In the lightning round, the host asked: "Maya, tell us **$102^2$**. No calculators allowed!"

Maya paused for two seconds and answered: "**$10,404$**."

The host blinked in surprise. "How did you work that out so fast?"

Maya smiled: "It's simple: $102$ is $100 + 2$. I square $100$ to get $10,000$, square $2$ to get $4$, and add **$2 \times 100 \times 2 = 400$** in the middle. Put them together: $10,000 + 400 + 4 = \mathbf{10,404}$."

Next, the host tried to trip her up: "**$103 \times 97$**?"

Maya answered right away: "**$9,991$**. Because that's $(100 + 3)(100 - 3)$, which is just $100^2 - 3^2 = 10,000 - 9$."

The studio audience burst into applause. Yet Maya wasn't using magic — she was simply using **four algebraic identities** that we are about to explore in this topic. Better still, these formulas don't just speed up mental arithmetic; they are the backbone of algebra.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Expand** | To multiply out brackets and write the expression as a sum or difference of individual terms | $(x + 2)(x + 3) = x^2 + 5x + 6$ |
| **Expansion** | The full expression obtained after multiplying out the brackets | $x^2 + 5x + 6$ |
| **Binomial** | An algebraic expression containing two terms | $x + 3$, $2a - b$ |
| **Identity** | An equality that holds true for **every** possible value of the variables | $(a + b)^2 = a^2 + 2ab + b^2$ |
| **Equation** | An equality that holds true only for **specific** values of the variables | $x + 2 = 5$ (true only when $x = 3$) |
| **Distributive law** | A term outside a bracket multiplies every term inside the bracket | $a(b + c) = ab + ac$ |

---

## Part A: What Does "Expanding" Mean?

### A Single Term × a Bracket (Quick Review)

We already covered this in the Polynomials chapter:

$$3x(2x + 5) = 3x \times 2x + 3x \times 5 = \mathbf{6x^2 + 15x}$$

Behind this sits one simple rule called the **distributive law**: the term outside the bracket must greet and multiply *every* term inside the bracket — just like a guest arriving at a dinner party and shaking hands with everyone in the room.

### Bracket × Bracket

Now consider two brackets multiplied together: $(x + 3)(x + 5)$.

Imagine **both** terms in the first bracket ($x$ and $3$) shaking hands with **both** terms in the second bracket ($x$ and $5$). In total, there are $2 \times 2 = 4$ handshakes:

- $x \times x = x^2$
- $x \times 5 = 5x$
- $3 \times x = 3x$
- $3 \times 5 = 15$

Add all four results together: $x^2 + 5x + 3x + 15$. Combine the like terms ($5x + 3x$):

$$(x + 3)(x + 5) = x^2 + 8x + 15$$

**Check:** Substitute $x = 2$. Left-hand side: $(5)(7) = 35$. Right-hand side: $4 + 16 + 15 = 35$ ✅

### The FOIL Shortcut

When multiplying two binomials, you can remember the order using the acronym **FOIL**:

| Letter | Meaning | In $(x + 3)(x + 5)$ |
|---|---|---|
| **F** (First) | The first terms of each bracket | $x \times x = x^2$ |
| **O** (Outer) | The two outer terms | $x \times 5 = 5x$ |
| **I** (Inner) | The two inner terms | $3 \times x = 3x$ |
| **L** (Last) | The last terms of each bracket | $3 \times 5 = 15$ |

FOIL is simply a handy memory aid. The underlying rule never changes: **multiply every term in the first bracket by every term in the second bracket.**

### Watching the Signs

Consider $(2x - 3)(x + 4)$:
- $2x \times x = 2x^2$
- $2x \times 4 = 8x$
- $(-3) \times x = -3x$
- $(-3) \times 4 = -12$

Combine them: $2x^2 + 8x - 3x - 12 = \mathbf{2x^2 + 5x - 12}$.

Notice that a minus sign stays attached to the term right after it, just as we saw in the Polynomials chapter.

### The Difference Between an Identity and an Equation

Understanding this distinction is essential, because every formula in this chapter is an **identity**.

- **Equation:** $x + 2 = 5$. This is true **only** when $x = 3$. Put in $x = 4$ and you get $6 = 5$, which is false.
- **Identity:** $(x + 3)(x + 5) = x^2 + 8x + 15$. This is true for **every** value of $x$.

Let us test this identity with several different values of $x$:

| $x$ | $(x + 3)(x + 5)$ | $x^2 + 8x + 15$ | Equal? |
|---|---|---|---|
| $0$ | $3 \times 5 = 15$ | $0 + 0 + 15 = 15$ | ✅ |
| $1$ | $4 \times 6 = 24$ | $1 + 8 + 15 = 24$ | ✅ |
| $-2$ | $1 \times 3 = 3$ | $4 - 16 + 15 = 3$ | ✅ |
| $10$ | $13 \times 15 = 195$ | $100 + 80 + 15 = 195$ | ✅ |

Both sides match every single time. That is why it is called an identity — a permanent truth you can rely on in any algebraic problem.

---

## Part B: Identity 1: $(a + b)^2 = a^2 + 2ab + b^2$

### Seeing It Geometrically

Imagine an architectural floorplan for a square studio apartment whose side length is $(a + b)$. Its total area is $(a + b)^2$. Now draw two straight lines to split the square into $4$ regions:

```
        a           b
   +-----------+-------+
   |           |       |
 a |    a²     |  ab   |
   |           |       |
   +-----------+-------+
 b |    ab     |  b²   |
   +-----------+-------+
```

- One large square: $a \times a = \mathbf{a^2}$
- One small square: $b \times b = \mathbf{b^2}$
- Two identical rectangles: each has area $a \times b = \mathbf{ab}$, giving **$\mathbf{2ab}$** together

Total area $= a^2 + ab + ab + b^2 = \mathbf{a^2 + 2ab + b^2}$.

### Proof Using Algebra

$$(a + b)^2 = (a + b)(a + b)$$
$$= a \times a + a \times b + b \times a + b \times b$$
$$= a^2 + ab + ab + b^2$$
$$= \mathbf{a^2 + 2ab + b^2}$$

### How to Remember It

**"Square the first, add twice their product, add the square of the second."**

That is exactly how Maya calculated $102^2$: $100^2 + 2(100)(2) + 2^2$.

---

## Part C: Identity 2: $(a - b)^2 = a^2 - 2ab + b^2$

### Seeing It Geometrically

Start with a large square patio of side $a$. Trim a strip of width $b$ along the right edge and another strip of width $b$ along the bottom edge. The remaining square has side length $(a - b)$.

```
          a − b         b
   +---------------+-------+
   |               |       |
   |               |       |
a−b|   (a − b)²    |       |
   |               |       |
   +---------------+-------+
 b |               |  b²   |
   +---------------+-------+
   <--------- a --------->
```

From the full area $a^2$, subtract the two strips. Each full strip has area $a \times b = ab$. However, look at the corner square of area $b^2$: it was **counted inside both strips**, meaning we subtracted it twice! To make the area exact, we must add $b^2$ back once:

$$(a - b)^2 = a^2 - ab - ab + b^2 = \mathbf{a^2 - 2ab + b^2}$$

### Proof Using Algebra

$$(a - b)^2 = (a - b)(a - b)$$
$$= a^2 - ab - ab + b^2$$
$$= \mathbf{a^2 - 2ab + b^2}$$

Notice carefully: $(-b) \times (-b) = \mathbf{+b^2}$. A negative times a negative is positive, so the last term is always **plus**.

### Just One Sign Difference

| Identity | Middle term | Last term |
|---|---|---|
| $(a + b)^2$ | **$+2ab$** | $+b^2$ |
| $(a - b)^2$ | **$-2ab$** | $+b^2$ |

Using this, Maya computes $98^2$: $(100 - 2)^2 = 10{,}000 - 400 + 4 = \mathbf{9,604}$.

---

## Part D: Identity 3: $(a + b)(a - b) = a^2 - b^2$

### Proof Using Algebra

$$(a + b)(a - b)$$
$$= a \times a - a \times b + b \times a - b \times b$$
$$= a^2 - ab + ab - b^2$$
$$= \mathbf{a^2 - b^2}$$

The two middle terms ($-ab$ and $+ab$) **cancel out completely**, leaving the shortest and cleanest identity of all.

### Seeing It Geometrically

Take a square tile of size $a \times a$, and cut a smaller $b \times b$ square from one corner. The remaining L-shaped region has area **$a^2 - b^2$**. Slice this L-shape horizontally into two rectangles:

```
          a − b         b
   +---------------+-------+
   |               |       |
a−b|       P       |   Q   |      top strip = P + Q = a × (a − b)
   |               |       |
   +---------------+-------+
 b |       R       | (cut)        bottom strip = R = (a − b) × b
   +---------------+
```

- Top strip ($P + Q$): length **$a$**, width **$(a - b)$**
- Bottom strip ($R$): length **$(a - b)$**, width **$b$**. Rotate it so its height is $(a - b)$ and its width is $b$.

Now place the rotated strip $R$ right **next to** the top strip so both have height $(a - b)$:

```
   +-----------------------+-----------+
   |           a           |     b     |   width (a − b)
   +-----------------------+-----------+
   <------------- a + b -------------->
```

You get a single rectangle with length **$(a + b)$** and width **$(a - b)$**. Its area is unchanged from the L-shape, which proves visually that $(a + b)(a - b) = a^2 - b^2$.

*(Cutting this out of paper and rearranging the pieces yourself makes it unforgettable!)*

### Mental Maths

For Maya's second question, $103 \times 97$: both numbers sit $3$ units away from $100$ — one above, one below. So $(100 + 3)(100 - 3) = 100^2 - 3^2 = 10{,}000 - 9 = \mathbf{9,991}$.

**Trick:** Whenever two numbers are **equally spaced** around a convenient round number (one above, one below), apply this identity.

---

## Part E: Identity 4: $(x + a)(x + b) = x^2 + (a + b)x + ab$

### Proof Using Algebra

$$(x + a)(x + b)$$
$$= x \times x + x \times b + a \times x + a \times b$$
$$= x^2 + bx + ax + ab$$
$$= \mathbf{x^2 + (a + b)x + ab}$$

### How to Remember It

When both brackets share the **same first term** ($x$):
- First term: **$x^2$**
- Middle term: (**sum** of the two numbers) $\times\ x$
- Last term: (**product** of the two numbers)

### Seeing It Geometrically

```
          x          b
   +-----------+-------+
   |           |       |
 x |    x²     |  bx   |
   |           |       |
   +-----------+-------+
 a |    ax     |  ab   |
   +-----------+-------+
```

### Working with Negative Numbers

This identity works just as smoothly when $a$ or $b$ is negative — simply keep each number attached to its sign.

- $(x + 4)(x - 7)$: here $a = 4$, $b = -7$.
  Sum: $4 + (-7) = -3$. Product: $4 \times (-7) = -28$.
  $= \mathbf{x^2 - 3x - 28}$
- $(y - 3)(y - 5)$: $a = -3$, $b = -5$.
  Sum: $-8$. Product: $+15$.
  $= \mathbf{y^2 - 8y + 15}$
- $(x - 2)(x + 6)$: $a = -2$, $b = 6$.
  Sum: $+4$. Product: $-12$.
  $= \mathbf{x^2 + 4x - 12}$

### Notice One Neat Connection

Identities 1, 2, and 3 are actually special cases of Identity 4! For example, in $(x + 3)(x + 3)$, we have $a = b = 3$, giving $x^2 + 6x + 9$, which is identical to the $(x + 3)^2$ expansion.

---

## Part F: Worked Examples

**Example 1:** Expand $(2x + 3y)^2$.

In Identity 1, set $a = 2x$ and $b = 3y$:
$$= (2x)^2 + 2(2x)(3y) + (3y)^2$$
$$= \mathbf{4x^2 + 12xy + 9y^2}$$

Watch carefully: $(2x)^2 = 4x^2$, not $2x^2$. You must square the coefficient as well.

**Example 2:** Expand $(3a - 4b)^2$.

In Identity 2, replace $a \to 3a$ and $b \to 4b$:
$$= (3a)^2 - 2(3a)(4b) + (4b)^2$$
$$= \mathbf{9a^2 - 24ab + 16b^2}$$

**Example 3:** Expand $\left(\frac{x}{2} + \frac{2}{x}\right)^2$.

$$= \left(\frac{x}{2}\right)^2 + 2\left(\frac{x}{2}\right)\left(\frac{2}{x}\right) + \left(\frac{2}{x}\right)^2$$
$$= \frac{x^2}{4} + 2 + \frac{4}{x^2}$$

Look at the middle term: $2 \times \frac{x}{2} \times \frac{2}{x} = 2 \times 1 = \mathbf{2}$. Here $x$ cancels out completely!

$$= \mathbf{\frac{x^2}{4} + 2 + \frac{4}{x^2}}$$

**Example 4:** Expand $\left(5x - \frac{1}{2}\right)^2$.

$$= (5x)^2 - 2(5x)\left(\frac{1}{2}\right) + \left(\frac{1}{2}\right)^2$$
$$= \mathbf{25x^2 - 5x + \frac{1}{4}}$$

**Example 5:** Expand $(2a + 3)(2a - 3)$.

Using Identity 3:
$$= (2a)^2 - 3^2$$
$$= \mathbf{4a^2 - 9}$$

**Example 6:** Expand $(x + 4)(x - 7)$.

Using Identity 4 (as seen in Part E):
$$= \mathbf{x^2 - 3x - 28}$$

**Check:** Put $x = 1$: $(5)(-6) = -30$. Formula: $1 - 3 - 28 = -30$ ✅

**Example 7:** Expand $(y - 3)(y - 5)$.

$$= \mathbf{y^2 - 8y + 15}$$

**Check:** Put $y = 0$: $(-3)(-5) = 15$. Formula: $0 - 0 + 15 = 15$ ✅

**Example 8 (Simplify):** $(a + b)^2 + (a - b)^2$.

$$= (a^2 + 2ab + b^2) + (a^2 - 2ab + b^2)$$
$$= \mathbf{2a^2 + 2b^2}$$

The $+2ab$ and $-2ab$ terms cancel out.

---

## Part G: Mental Maths: Maya's Shortcuts

Now you can perform like a quiz show champion too. For every problem, ask yourself: which round number is nearby, and which identity fits?

| Problem | Split It Up | Identity | Calculation | Answer |
|---|---|---|---|---|
| $102^2$ | $(100 + 2)^2$ | $(a + b)^2$ | $10{,}000 + 400 + 4$ | **$10,404$** |
| $98^2$ | $(100 - 2)^2$ | $(a - b)^2$ | $10{,}000 - 400 + 4$ | **$9,604$** |
| $103 \times 97$ | $(100 + 3)(100 - 3)$ | $a^2 - b^2$ | $10{,}000 - 9$ | **$9,991$** |
| $1.02 \times 0.98$ | $(1 + 0.02)(1 - 0.02)$ | $a^2 - b^2$ | $1 - 0.0004$ | **$0.9996$** |
| $49^2$ | $(50 - 1)^2$ | $(a - b)^2$ | $2{,}500 - 100 + 1$ | **$2,401$** |
| $52 \times 48$ | $(50 + 2)(50 - 2)$ | $a^2 - b^2$ | $2{,}500 - 4$ | **$2,496$** |
| $997^2$ | $(1000 - 3)^2$ | $(a - b)^2$ | $1{,}000{,}000 - 6{,}000 + 9$ | **$994,009$** |

**Check ($49^2$):** $49 \times 49 = 49 \times 50 - 49 = 2450 - 49 = 2401$ ✅

---

## Common Pitfalls to Avoid

1. **Mistake 1: Writing $(a + b)^2 = a^2 + b^2$.**
   This is the single most common error. Test it with numbers: $a = 2, b = 3$.
   - $(2 + 3)^2 = 5^2 = \mathbf{25}$
   - $2^2 + 3^2 = 4 + 9 = \mathbf{13}$
   $25 \neq 13$. You left out the middle term **$2ab = 12$**. Picture the floorplan diagram: there are two rectangles in addition to the two squares!

2. **Mistake 2: Putting a minus sign before $b^2$ in $(a - b)^2$.**
   $(a - b)^2 = a^2 - 2ab \mathbf{+} b^2$. The last term is always positive because $(-b)^2 = +b^2$.

3. **Mistake 3: Forgetting to square the numerical coefficient.**
   $(3x)^2 = 3x \times 3x = \mathbf{9x^2}$, not $3x^2$.
   So $(2x + 5)^2 = 4x^2 + 20x + 25$. Writing $2x^2$ instead of $4x^2$ makes the entire answer wrong.

4. **Mistake 4: Forgetting the factor of $2$ in the middle term.**
   $(x + 4)^2 = x^2 + \mathbf{8}x + 16$, because $2 \times x \times 4 = 8x$. Writing $4x$ in the middle is incorrect.

5. **Mistake 5: Mishandling signs in $(x + a)(x + b)$.**
   In $(x + 4)(x - 7)$, the product is $4 \times (-7) = \mathbf{-28}$, not $+28$. Always carry each number together with its sign.

6. **Mistake 6: Confusing $a^2 - b^2$ with $(a - b)^2$.**
   - $a^2 - b^2 = (a + b)(a - b)$
   - $(a - b)^2 = a^2 - 2ab + b^2$
   They are completely different. With $a = 5, b = 3$: $a^2 - b^2 = 16$, whereas $(a - b)^2 = 4$.

---

## Quick Recap

- **Expanding** means multiplying out brackets to remove them, using the **distributive law** (every term multiplies every term).
- An **identity** holds for all values of the variables; an **equation** holds only for specific values.
- **Four foundational identities:**
  - $(a + b)^2 = a^2 + 2ab + b^2$
  - $(a - b)^2 = a^2 - 2ab + b^2$
  - $(a + b)(a - b) = a^2 - b^2$
  - $(x + a)(x + b) = x^2 + (a + b)x + ab$
- Each identity has a clear **geometric picture** built by splitting a square or rectangle into smaller regions.
- Always square the coefficient too: $(3x)^2 = 9x^2$.
- **Mental maths:** Break numbers near a round value ($50, 100, 1000$) to square or multiply them in seconds.
- Golden rule: **$(a + b)^2 \neq a^2 + b^2$**.

---

## Practice Questions

1. Expand using a suitable identity:
   (a) $(x + 5)^2$
   (b) $(2a - 7)^2$
   (c) $(3p + 2q)^2$
   (d) $\left(\frac{x}{3} - \frac{3}{x}\right)^2$

2. Expand:
   (a) $(4x + 5)(4x - 5)$
   (b) $(x + 6)(x + 2)$
   (c) $(y - 4)(y + 9)$
   (d) $(a - 8)(a - 3)$

3. Evaluate using identities (without long multiplication):
   (a) $105^2$
   (b) $95^2$
   (c) $101 \times 99$
   (d) $299^2$

4. Is $(x + 3)^2 = x^2 + 9$ an identity? Check by substituting $x = 1$.

5. Fill in the blanks:
   (a) $(2x + \_\_\_)^2 = 4x^2 + 20x + 25$
   (b) $(x - \_\_\_)^2 = x^2 - 14x + 49$

6. Simplify: $(a + b)^2 - (a - b)^2$

7. Show that $(3x + 7)^2 - 84x = (3x - 7)^2$.

8. Find $(x + 2)(x + 3)$ using an identity, and verify your answer by substituting $x = 10$.

### Answers

1. (a) $x^2 + 2(x)(5) + 25 = \mathbf{x^2 + 10x + 25}$
   (b) $(2a)^2 - 2(2a)(7) + 7^2 = \mathbf{4a^2 - 28a + 49}$
   (c) $(3p)^2 + 2(3p)(2q) + (2q)^2 = \mathbf{9p^2 + 12pq + 4q^2}$
   (d) $\left(\frac{x}{3}\right)^2 - 2\left(\frac{x}{3}\right)\left(\frac{3}{x}\right) + \left(\frac{3}{x}\right)^2 = \mathbf{\frac{x^2}{9} - 2 + \frac{9}{x^2}}$ (the $x$ terms cancel in the middle, leaving $-2 \times 1 = -2$)

2. (a) $(4x)^2 - 5^2 = \mathbf{16x^2 - 25}$
   (b) Sum $= 8$, product $= 12$: **$\mathbf{x^2 + 8x + 12}$**
   (c) $a = -4, b = 9$. Sum $= 5$, product $= -36$: **$\mathbf{y^2 + 5y - 36}$**
   (d) $a = -8, b = -3$. Sum $= -11$, product $= +24$: **$\mathbf{a^2 - 11a + 24}$**

3. (a) $(100 + 5)^2 = 10{,}000 + 1{,}000 + 25 = \mathbf{11,025}$
   (b) $(100 - 5)^2 = 10{,}000 - 1{,}000 + 25 = \mathbf{9,025}$
   (c) $(100 + 1)(100 - 1) = 10{,}000 - 1 = \mathbf{9,999}$
   (d) $(300 - 1)^2 = 90{,}000 - 600 + 1 = \mathbf{89,401}$

4. Put $x = 1$: $(1 + 3)^2 = \mathbf{16}$, whereas $1^2 + 9 = \mathbf{10}$. Since $16 \neq 10$, this is **not an identity** ❌. The correct expansion is $x^2 + 6x + 9$.

5. (a) $4x^2 = (2x)^2$, and from $2(2x)(?) = 20x$ we get $? = \mathbf{5}$. Check: $5^2 = 25$ ✅
   (b) From $2(x)(?) = 14x$ we get $? = \mathbf{7}$. Check: $7^2 = 49$ ✅

6. $(a^2 + 2ab + b^2) - (a^2 - 2ab + b^2) = a^2 + 2ab + b^2 - a^2 + 2ab - b^2 = \mathbf{4ab}$

7. Left-hand side: $(3x + 7)^2 - 84x = 9x^2 + 42x + 49 - 84x = 9x^2 - 42x + 49$.
   Right-hand side: $(3x - 7)^2 = 9x^2 - 42x + 49$.
   Both sides are equal ✅

8. By Identity 4: sum $= 5$, product $= 6$, giving **$\mathbf{x^2 + 5x + 6}$**.
   Check at $x = 10$: $(12)(13) = 156$. Formula: $100 + 50 + 6 = 156$ ✅

---

Just four identities, and you can already calculate big squares in seconds like Maya! Try sketching the geometric diagram for each formula on paper once — once you see the areas, you will never forget them.

**What's next?** In the next topic, we tackle an exciting twist: if you only know **$a + b$** and **$ab$**, how can you find **$a^2 + b^2$** without ever finding $a$ and $b$ themselves? Plus, we will explore the famous **$x + 1/x$** family of problems.
