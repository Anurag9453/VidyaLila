# Chapter: Polynomials (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [polynomials-part2.md](polynomials-part2.md).** (Topics 1 and 2 are in [polynomials.md](polynomials.md).)
> **Topics covered in this file:**
> 4. Polynomials of Various Degrees: Linear, Quadratic, Cubic, Biquadratic

---

# Topic 4: Polynomials of Various Degrees

In the previous topic, we learned what a polynomial is and how to write it in standard form. Now comes a natural question: do all polynomials behave the same way? Not at all. Both $5x + 1$ and $x^4 - 3x + 2$ are polynomials, yet they grow and curve very differently. In this topic, we will learn how to classify polynomials by their **degree**.

---

## A Toy Cube Story

Suppose Leo is examining a 3D-printed cube on Dr. Bennett's lab table, with every side measuring **$x\text{ cm}$**.

- If he measures the length of **one edge**, it is **$x$** — a straight one-dimensional line.
- If he calculates the area of **one flat face** ($x \times x$), it is **$x^2$** — a two-dimensional surface.
- If he calculates the **total volume** ($x \times x \times x$), it is **$x^3$** — a three-dimensional solid.

Notice how each step up in dimension (line, surface, solid) increases the **power** of $x$: $1, 2, 3$. Polynomials are named directly after these highest powers.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Degree** | The highest power of the variable in a polynomial | In $4x^3 + x$, the degree is **$3$** |
| **Linear polynomial** | A polynomial of degree $1$ | $2x + 5$ |
| **Quadratic polynomial** | A polynomial of degree $2$ | $x^2 - 3x + 2$ |
| **Cubic polynomial** | A polynomial of degree $3$ | $x^3 + 1$ |
| **Biquadratic polynomial** | A polynomial of degree $4$ (also called a **quartic** polynomial) | $x^4 - 5x^2 + 4$ |

---

## Part A: What Is the Degree of a Polynomial?

In a polynomial in one variable, **the highest power of the variable is called the degree of the polynomial**.

Remember this one-line rule:

> **Highest power = Degree**

Since you already learned standard form in Topic 3, finding the degree is effortless: once the polynomial is written in descending order, **the exponent of the very first term is the degree**.

### Examples

| Polynomial | Powers present | Highest power | Degree |
|---|---|---|---|
| $3x + 7$ | $1, 0$ | $1$ | **$1$** |
| $5x^2 - x + 2$ | $2, 1, 0$ | $2$ | **$2$** |
| $x^3 - 4x$ | $3, 1$ | $3$ | **$3$** |
| $2x^4 + x^2 - 9$ | $4, 2, 0$ | $4$ | **$4$** |
| $9$ | $0$ | $0$ | **$0$** |

### Three Important Rules

**1. When finding the degree, ignore the number of terms and the coefficients — look only at the exponents.**
- $100x^2$ has degree **$2$** (the coefficient $100$ does not affect the degree).
- $x^5 + 1$ has degree **$5$**.

**2. Always simplify (combine like terms) before stating the degree.**
At first glance, **$x^3 + 2x - x^3$** looks cubic, but $x^3 - x^3 = 0$, leaving just **$2x$**. Its degree is **$1$**.

**3. Every nonzero constant polynomial has degree $0$.**
Since $5 = 5x^0$, its degree is $0$. However, the degree of the **zero polynomial** ($0$ by itself) is **not defined** — we do not assign it a degree.

---

## Part B: Linear Polynomial (Degree 1)

The word **linear** comes from *line*, because when you plot a degree-$1$ polynomial on a graph, it forms a **straight line**.

**General form:** **$ax + b$**, where $a$ and $b$ are constants and **$a \neq 0$**.

Examples:

- $5x + 3$
- $x - 7$
- $-2y + 1$
- $4x$ (here $b = 0$, and it is still linear)
- $\frac{x}{3} + 2$

### Linear Polynomials in Real Life

Remember Maya's ride-share fare from Topic 1? **$\text{Fare} = 30 + 12x$**. That is a linear polynomial because the highest power of $x$ is $1$.

Watch what happens as $x$ increases — it grows by a **constant step** every single time:

| Kilometres ($x$) | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|
| Fare ($30 + 12x$) | \$42 | \$54 | \$66 | \$78 | \$90 |

Every extra kilometre adds exactly **\$12**. That steady, equal-step change is the hallmark of a linear polynomial.

More examples:
- A car cruising at $60\text{ km/h}$ covers distance $= \mathbf{60t}$ in $t$ hours. Linear!
- Pens cost \$10 each, so $n$ pens cost **$\mathbf{10n}$**. Linear!

### Why $a \neq 0$?

If $a = 0$, then $ax + b$ becomes $0 \cdot x + b = b$, which is just a constant polynomial (degree $0$). Therefore, to remain linear, the coefficient of $x$ cannot be zero.

---

## Part C: Quadratic Polynomial (Degree 2)

**General form:** **$ax^2 + bx + c$**, where $a, b, c$ are constants and **$a \neq 0$**.

Examples:

- $x^2 - 3x + 2$
- $2y^2 + 5$
- $t^2 - 9$
- $4z^2 + z$
- $7x^2$ (here $b = 0$ and $c = 0$, yet it is still quadratic)

### A Very Common Misconception

Hearing "quad", many students assume it must mean degree $4$. **That is false.** The word *quadratic* comes from the Latin word ***quadratus***, meaning **square** — and $x^2$ is literally "$x$ squared". That is why a degree-**$2$** polynomial is called quadratic.

### Quadratic Polynomials in Real Life

- **Area of a square:** With side $x$, $\text{Area} = \mathbf{x^2}$, which is quadratic.
- **Area of a circle:** With radius $r$, $\text{Area} = \mathbf{\pi r^2}$, also quadratic because the highest power of $r$ is $2$.
- **Liam's garden plot from Topic 3:** $x^2 + 5x + 6$, built around a square plot.
- **Trajectory planning:** When Dr. Bennett's robotics team launches a drone or tosses a ball upward, its height over time follows a quadratic polynomial — curving smoothly up and back down.

### Difference Between Quadratic and Linear

Look at what happens as $x$ increases in the square's area $x^2$:

| Side ($x$) | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|
| Area ($x^2$) | $1$ | $4$ | $9$ | $16$ | $25$ |

Notice that the area **does not grow in equal steps**. First it jumps by $3$ ($1 \to 4$), then by $5$ ($4 \to 9$), then by $7$ ($9 \to 16$). A quadratic polynomial **accelerates** as $x$ grows — doubling the side length makes the area **four times** as large.

---

## Part D: Cubic Polynomial (Degree 3)

**General form:** **$ax^3 + bx^2 + cx + d$**, where $a \neq 0$.

Examples:

- $x^3 - 2x^2 + x - 5$
- $3y^3 + 4$
- $z^3 - z$
- $5x^3$ (a monomial, yet still a cubic polynomial)

The word **cubic** comes from **cube**, because a cube's volume is $x^3$.

### Cubic Polynomials in Real Life

- **Volume of a cube:** With edge $x$, $\text{Volume} = \mathbf{x^3}$.
- **Volume of a shipping crate:** If the length is $x$, width is $x + 1$, and height is $x + 2$, then $\text{Volume} = x(x + 1)(x + 2) = \mathbf{x^3 + 3x^2 + 2x}$, a cubic polynomial.
- **Water tank capacity:** A cubic tank of side $x$ holds $x^3$ units of volume.

### The Race Between $x$, $x^2$, and $x^3$

Watch how fast all three grow as $x$ increases:

| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|
| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ |
| $x^2$ | $1$ | $4$ | $9$ | $16$ | $25$ |
| $x^3$ | $1$ | $8$ | $27$ | $64$ | $125$ |

By $x = 5$, $x^3$ has already surged to $125$. Higher powers grow dramatically faster.

---

## Part E: Biquadratic Polynomial (Degree 4)

**General form:** **$ax^4 + bx^3 + cx^2 + dx + e$**, where $a \neq 0$.

Examples:

- $x^4 - 5x^2 + 4$
- $2y^4 + y$
- $z^4 - 1$
- $3x^4 + x^3 - x^2 + 7x - 2$

### Where Does the Name Come From?

- **Bi** $=$ two (twice)
- **Quadratic** $=$ square ($x^2$)

**Biquadratic** literally means "**a square of a square**":
$$(x^2)^2 = x^2 \times x^2 = \mathbf{x^4}$$

That is why a degree-$4$ polynomial is called **biquadratic**. Many textbooks also call it a **quartic** polynomial (*quart* = four). Both names refer to the exact same type of polynomial.

### Biquadratic Polynomials in Real Life

In everyday shopping or basic geometry, degree-$4$ polynomials show up less often than degrees $1, 2,$ and $3$. However, they appear regularly in physics and civil engineering — for instance, when Elena and Dr. Bennett model **bridge loading curves** to calculate how much a suspension beam bends under a uniform weight, the deflection equation is a degree-$4$ (biquadratic) polynomial! You can also picture a square whose side length is $x^2$: its area is $(x^2) \times (x^2) = \mathbf{x^4}$.

### Values of $x^4$

| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|
| $x^4$ | $1$ | $16$ | $81$ | $256$ | $625$ |

At $x = 5$, $x^4$ reaches $625$ — look how explosively it climbs!

### Higher-Degree Polynomials

A polynomial of degree $5$ is called a **quintic** polynomial. Beyond degree $5$, we rarely use special names; we simply say "**a polynomial of degree $n$**" (such as degree $6$ or degree $10$).

---

## Putting It All Together: Summary Table

| Degree | Name | General form ($a \neq 0$) | Example | Maximum number of terms |
|---|---|---|---|---|
| $0$ | Constant | $k$ | $7$ | $1$ |
| $1$ | Linear | $ax + b$ | $3x - 5$ | $2$ |
| $2$ | Quadratic | $ax^2 + bx + c$ | $x^2 - 4x + 3$ | $3$ |
| $3$ | Cubic | $ax^3 + bx^2 + cx + d$ | $2x^3 - x + 1$ | $4$ |
| $4$ | Biquadratic | $ax^4 + bx^3 + cx^2 + dx + e$ | $x^4 - 16$ | $5$ |

There is no fixed *minimum* number of terms (except at least $1$), because intermediate terms can have zero coefficients and disappear — for example, $x^4 - 16$ has only $2$ terms yet still has degree $4$.

---

## Part F: Solved Examples on Identifying Polynomials by Degree

**Example 1:** $5x - 3$
The highest power is $1$. **Linear polynomial** (degree $1$).

**Example 2:** $2x^2 + 7$
There is no $x$ term, yet the highest power is $2$. **Quadratic polynomial** (degree $2$).

**Example 3:** $y^3 - y^2 + 4y - 1$
The highest power is $3$. **Cubic polynomial** (degree $3$).

**Example 4:** $3t^4 + t^2 - 9$
The highest power is $4$. **Biquadratic polynomial** (degree $4$).

**Example 5:** $9$
No variable appears, so this is a **constant polynomial** (degree $0$).

**Example 6:** $4x - x^2$ (terms out of standard order)
Term order does not change the degree. The highest power is $2$. **Quadratic polynomial.**

**Example 7:** $2x(x^2 - 3)$
First expand the brackets: $2x \cdot x^2 - 2x \cdot 3 = 2x^3 - 6x$.
The highest power is $3$. **Cubic polynomial.**

**Example 8:** $2x^3 - 2x^3 + 5x$
First simplify: $2x^3 - 2x^3 = 0$, leaving **$5x$**.
The degree is $1$. **Linear polynomial.** (It looked cubic before simplifying, but turned out to be linear!)

**Example 9:** Write a quadratic polynomial whose coefficients are $2, -3,$ and $5$.
Substitute $a = 2$, $b = -3$, $c = 5$ into $ax^2 + bx + c$:
$$\mathbf{2x^2 - 3x + 5}$$

**Example 10:** Write a cubic polynomial that has only $2$ terms.
$x^3 + 1$ (or $5x^3 - 2x$). Both are cubic because the highest power is $3$; the number of terms does not determine the degree.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Thinking "quadratic" means degree $4$.**
   Quadratic comes from *square*, so it means degree **$2$**. Degree $4$ is **biquadratic** (or quartic).

2. **Mistake 2: Confusing the number of terms with the degree.**
   - $x^4 + 1$ has only **$2$ terms** (a binomial), yet its degree is **$4$** (biquadratic).
   - $7x^3$ has only **$1$ term** (a monomial), yet its degree is **$3$** (cubic).
   Term count and degree are two completely separate properties.

3. **Mistake 3: Naming the degree before simplifying.**
   Do not call $x^3 - x^3 + 2x$ cubic. Combine like terms first: it simplifies to $2x$, so its degree is $1$ (linear).

4. **Mistake 4: Picking the power of the first written term when not in standard form.**
   In $4x - x^2 + 7x^3$, the first term written is $4x$, but the degree is $3$ (from $7x^3$). Put it in standard form first: $7x^3 - x^2 + 4x$.

5. **Mistake 5: Thinking missing middle terms lower the degree.**
   $x^2 + 3$ is missing the $x$ term, yet it is still quadratic because $x^2$ is present. Missing lower-power terms do not change the degree.

6. **Mistake 6: Forgetting the condition $a \neq 0$.**
   $(k - 2)x^2 + 5x + 1$ is quadratic only when $k \neq 2$. If $k = 2$, the $x^2$ term vanishes and the polynomial becomes linear.

7. **Mistake 7: Treating a nonzero constant polynomial and the zero polynomial the same way.**
   The constant polynomial $5$ has degree $0$. By contrast, the degree of $0$ (the zero polynomial) is not defined.

---

## Quick Recap

- **Degree** $=$ the **highest power** of the variable in a polynomial.
- Always **simplify** and combine like terms before finding the degree.
- **Degree $0$:** Constant polynomial (such as $7$).
- **Degree $1$:** **Linear** ($ax + b$). Straight line, equal-step growth (like Maya's ride-share fare).
- **Degree $2$:** **Quadratic** ($ax^2 + bx + c$). *Quadratic* $=$ square (like square area or trajectory curves).
- **Degree $3$:** **Cubic** ($ax^3 + bx^2 + cx + d$). Like the volume of a cube.
- **Degree $4$:** **Biquadratic** ($ax^4 + \dots$). "Square of a square", $(x^2)^2 = x^4$, also called *quartic* (like bridge loading curves).
- **Crucial condition:** The leading coefficient must satisfy **$a \neq 0$**.
- Degree and **number of terms are independent**.
- The **zero polynomial** has no defined degree.

---

## Practice Questions

1. Write the degree and classify each polynomial by degree (constant, linear, quadratic, cubic, or biquadratic):
   (a) $7x - 2$
   (b) $3y^2 + y$
   (c) $5$
   (d) $z^4 - 2z^2 + 1$
   (e) $2 - x^3$
   (f) $9x$
   (g) $3x^3 - 3x^3 + 5x^2$

2. Give one example of each:
   (a) a linear binomial
   (b) a quadratic trinomial
   (c) a cubic monomial
   (d) a biquadratic binomial

3. State whether each statement is True or False, and give a brief reason:
   (a) $x^4 + 1$ is a trinomial.
   (b) $5x^3$ is a cubic polynomial.
   (c) A quadratic polynomial must have exactly $3$ terms.
   (d) The degree of the constant polynomial $8$ is $0$.
   (e) "Quadratic" means a polynomial of degree $4$.

4. For what value(s) of $k$ is the polynomial $p(x) = (k - 2)x^2 + 5x + 1$:
   (a) linear?
   (b) quadratic?

5. Find the values of $x$, $x^2$, $x^3$, and $x^4$ when $x = -2$. What pattern do you notice in the signs?

6. The side of a cube is $a\text{ cm}$. Write its volume as a polynomial in $a$, and name the polynomial according to its degree. Find the volume when $a = 5$.

7. Write $5x^3 - 2x^2 + 7 - x^4$ in standard form and name it according to its degree.

### Answers

1. (a) Degree **$1$**, **linear**
   (b) Degree **$2$**, **quadratic**
   (c) Degree **$0$**, **constant**
   (d) Degree **$4$**, **biquadratic**
   (e) Degree **$3$**, **cubic** (standard form: $-x^3 + 2$)
   (f) Degree **$1$**, **linear**
   (g) Simplify first: $3x^3 - 3x^3 = 0$, leaving $5x^2$. Degree **$2$**, **quadratic**.
2. Any valid example is correct. For instance:
   (a) **$x + 4$**  (b) **$x^2 - 5x + 6$**  (c) **$7x^3$**  (d) **$x^4 - 1$**
3. (a) **False.** It has $2$ terms, so it is a binomial (of degree $4$).
   (b) **True.** Its highest power of $x$ is $3$.
   (c) **False.** A quadratic polynomial can have $1$, $2$, or $3$ terms (such as $7x^2$, $x^2 + 3$, or $x^2 - 3x + 2$); it only requires the $x^2$ term to be present with degree $2$.
   (d) **True.** $8 = 8x^0$, so its degree is $0$.
   (e) **False.** Quadratic means degree **$2$**; degree $4$ is biquadratic (quartic).
4. (a) It becomes linear when the coefficient of $x^2$ is $0$: $k - 2 = 0 \implies \mathbf{k = 2}$ (giving $p(x) = 5x + 1$).
   (b) It is quadratic whenever $k - 2 \neq 0$, meaning **$\mathbf{k \neq 2}$**.
5. At $x = -2$:
   $x = \mathbf{-2}$
   $x^2 = (-2)^2 = \mathbf{4}$
   $x^3 = (-2)^3 = \mathbf{-8}$
   $x^4 = (-2)^4 = \mathbf{16}$
   Sign pattern: odd powers ($1, 3$) produce negative results, while even powers ($2, 4$) produce positive results (just as we saw when studying exponents).
6. $\text{Volume} = a \times a \times a = \mathbf{a^3}$. This is a **cubic polynomial** (degree $3$). When $a = 5$, $\text{Volume} = 5^3 = \mathbf{125\text{ cm}^3}$.
7. Standard form (descending order): **$-x^4 + 5x^3 - 2x^2 + 7$**. The highest power is $4$, so it is a **biquadratic polynomial** (degree $4$).

---

If memorizing all the names at once feels like a lot, just lock in this single line: **degree $1 =$ linear, $2 =$ quadratic, $3 =$ cubic, $4 =$ biquadratic**, and remember that the highest power is always the degree. Everything else follows straight from there.
