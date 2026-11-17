# Chapter: Polynomials (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [polynomials.md](polynomials.md)** (which covers Topic 1 and Topic 2).
> **Topics covered in this file:**
> 3. Polynomial in One Variable and Standard Form

---

# Topic 3: Polynomial in One Variable and Standard Form

In the previous two topics, we learned about constants, variables, terms, and coefficients. Now we meet a special family of algebraic expressions called **polynomials**. First, we will see what makes an expression a polynomial, and then we will learn how to write any polynomial in a neat, organized order called **standard form**.

---

## A Garden Plot Story

Liam is helping design a **square community garden plot** whose side length is **$x\text{ metres}$**.

He plans to build three sections:

1. The main square garden, with area $x \times x = \mathbf{x^2}\text{ m}^2$.
2. A straight stone walkway along one side, **$5\text{ metres}$ wide** and **$x\text{ metres}$ long**, with area $5 \times x = \mathbf{5x}\text{ m}^2$.
3. A small tool shed with a fixed area of **$\mathbf{6}\text{ m}^2$**.

$$\text{Total area} = x^2 + 5x + 6$$

Look closely at the exponents of $x$ in this expression:
- In the $x^2$ term, the power of $x$ is **$2$**.
- In the $5x$ term, the power of $x$ is **$1$**.
- In $6$, there is no $x$ written (we will see below why its power is treated as **$0$**).

The powers are $2, 1, 0$ — all **whole numbers** — and there is only a single variable, **$x$**. An expression like this is called a **polynomial in one variable**.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Polynomial** | An algebraic expression in which every variable has only whole-number exponents ($0, 1, 2, 3, \dots$) | $3x^2 - 5x + 7$ |
| **Polynomial in one variable** | A polynomial that contains only a single variable | $4y^3 - y + 2$ |
| **Whole number** | The counting numbers together with zero: $0, 1, 2, 3, 4, \dots$ (never negative, never a fraction) | $0, 5, 12$ |
| **Constant polynomial** | A polynomial consisting of just a number, with no variable | $7, -3$ |
| **Standard form** | Writing the terms of a polynomial in order of powers of the variable | $2x^3 + x^2 - 5x + 1$ |

*Poly* means **many**, and *nomial* means **terms** — so a polynomial literally means an expression with many terms. However, expressions with just one or two terms (such as $5x$ or $x + 3$) are also polynomials.

---

## Part A: Polynomial in One Variable

### Two Rules for Being a Polynomial

An algebraic expression is a polynomial if and only if:

1. **Every exponent of the variable is a whole number** ($0, 1, 2, 3, \dots$).
2. The variable **never appears in the denominator** and **never appears inside a square root** (or any radical).

And as the name suggests, a **polynomial in one variable** uses **only one letter** (for example, only $x$, or only $y$).

### Why Must Exponents Be Whole Numbers?

Think of it using modular building blocks (like LEGO bricks). Suppose $x$ is one block:

- $x^2$ means **2 blocks** multiplied together ($x \times x$).
- $x^3$ means **3 blocks** multiplied together.
- $x$ means **1 block**.
- $x^0$ means **0 blocks**, which equals $1$ (and that is why a constant term secretly carries $x^0$).

Now ask yourself:
- What would "joining **half** a block" mean? That makes no sense here — so $x^{1/2}$ is not allowed.
- What would "joining **$-2$** blocks" mean? That does not work either — so $x^{-2}$ is not allowed.

Blocks can only be counted in whole numbers: **$0, 1, 2, 3, \dots$**. That is why exponents in a polynomial must be whole numbers.

### Expressions That Are Polynomials (Yes Examples)

| Expression | Why it is a polynomial |
|---|---|
| $3x^2 - 5x + 7$ | Powers are $2, 1, 0$ (all whole numbers), single variable $x$ |
| $y^3 + 1$ | Powers are $3$ and $0$ |
| $5x$ | Power is $1$ |
| $\frac{x}{2} + 3$ | This is $\frac{1}{2}x + 3$, so the power of $x$ is $1$; the fraction is in the **coefficient**, not the exponent |
| $7$ | Constant polynomial ($7 = 7x^0$) |
| $\sqrt{3}\,x^2 + 2x$ | $\sqrt{3}$ is just a constant coefficient; the powers of $x$ are $2$ and $1$ |

### Expressions That Are Not Polynomials (No Examples)

| Expression | Why it is not a polynomial |
|---|---|
| $x + \frac{1}{x}$ | $\frac{1}{x} = x^{-1}$, so the exponent is **negative** |
| $\sqrt{x} + 3$ | $\sqrt{x} = x^{1/2}$, so the exponent is a **fraction** |
| $3x^{-2} + 1$ | The exponent **$-2$** is negative |
| $\frac{5}{y^2}$ | $y^2$ is in the denominator, which means $5y^{-2}$ |
| $x^2 + xy + y^2$ | Contains **two variables** ($x$ and $y$); it is a polynomial, just not in *one* variable |
| $2^x$ | Here the variable is in the **exponent**, unlike $x^2$ |

### An Important Distinction: Coefficient vs. Exponent

Students often mix these two up:

- **$\frac{x}{2}$** **is** a polynomial, because it equals $\frac{1}{2} \times x$. The fraction is the **coefficient**, and the exponent of $x$ is $1$.
- **$\frac{2}{x}$** is **not** a polynomial, because $x$ is in the denominator. It equals $2x^{-1}$, which has exponent $-1$.

They look similar at a glance, so always check **where the variable sits**.

### Polynomial Notation: $p(x)$

To give a polynomial a short name, we often write **$p(x)$**, **$q(x)$**, or **$f(x)$**. We read "$p(x)$" as "**$p$ of $x$**". The letter inside the brackets tells us which variable the polynomial uses.

**Example:** $p(x) = 4x^2 - 3x + 5$

In this polynomial:
- Variable: **$x$**
- Terms: $4x^2, -3x, 5$
- Coefficients of $x^2$ and $x$: **$4$ and $-3$**
- Constant term: **$5$**

If the polynomial uses the variable $y$, we write $q(y) = y^3 - 2y + 1$.

**Quick evaluation check (just like Topic 1):** For $p(x) = 4x^2 - 3x + 5$:
- $p(1)$ means substitute $x = 1$: $4(1)^2 - 3(1) + 5 = 4 - 3 + 5 = \mathbf{6}$
- $p(0) = 4(0)^2 - 3(0) + 5 = \mathbf{5}$
- $p(-1) = 4(-1)^2 - 3(-1) + 5 = 4 + 3 + 5 = \mathbf{12}$

(The method is identical to Topic 1: replace the variable with the given number, and wrap negative numbers in brackets.)

### Constant Polynomial and Zero Polynomial

- **Constant polynomial:** A single number with no variable, such as **$7$**, **$-4$**, or **$\frac{1}{2}$**. You can think of $7$ as $7x^0$.
- **Zero polynomial:** The number **$0$** by itself. Every coefficient is $0$.

### Expressions with One or Few Terms Are Also Polynomials

In Topic 1, we learned the names monomial, binomial, and trinomial. Every one of them is a polynomial — those names simply tell you how many terms it has:

- $6x^3$ (monomial) is a polynomial.
- $x + 4$ (binomial) is a polynomial.
- $x^2 - 3x + 2$ (trinomial) is a polynomial.

---

## Part B: Standard Form of a Polynomial

### Story: The Bookshelf

Imagine Sophia looking at a messy bookshelf where tall hardcovers, pocket paperbacks, and thick encyclopedias are mixed together at random. Finding any specific book takes forever.

So Sophia arranges all the books **by height, from tallest to shortest**. Instantly, the shelf looks neat and every book is easy to spot.

Polynomials work the same way. When terms are scattered out of order, reading the expression — and performing operations like addition, subtraction, or division later — gets messy. Arranging the terms in a fixed order gives us **standard form**.

### What Is Standard Form?

> Writing a polynomial's terms **in order of the powers of its variable** is called **standard form**.

There are two ways to order the powers:

- **Descending order:** highest power of $x$ first, stepping down to the constant term last. **This is the most widely used order** and is what "standard form" usually means.
- **Ascending order:** lowest power (the constant term) first, stepping up to the highest power.

**Example:** Polynomial **$5 + 2x^3 - x + 4x^2$**

Descending order (standard form):
$$2x^3 + 4x^2 - x + 5$$
(powers: $3, 2, 1, 0$)

Ascending order:
$$5 - x + 4x^2 + 2x^3$$
(powers: $0, 1, 2, 3$)

Notice that both expressions contain the exact same terms — only their **order** changed, and every term carried its sign along with it (as we learned in Topic 2).

### Steps to Write a Polynomial in Standard Form

1. **Combine any like terms first** (from Topic 1) to simplify the expression.
2. **Check the exponent** of the variable in each term.
3. **Arrange the terms from highest power to lowest power** (descending order).
4. **Keep each term's sign attached** when you move it.

### Solved Examples

**Example 1:** Write in standard form: **$3x - 7 + x^2 - 2x + 4x^3$**

Step 1: Combine like terms.
- $x$ terms: $3x$ and $-2x \rightarrow 3x - 2x = \mathbf{x}$
- Remaining terms: $-7, x^2, 4x^3$ stay as they are.
- After combining, we have $x + x^2 - 7 + 4x^3$ (still out of order).

Step 2: Check the powers.
- $4x^3$ (power $3$), $x^2$ (power $2$), $x$ (power $1$), $-7$ (power $0$).

Step 3: Write in descending order.
$$\mathbf{4x^3 + x^2 + x - 7} \;\checkmark$$

**Example 2:** Write in standard form: **$5 - 3y^2 + y - 2y^2 + y^3$**

Step 1: Combine like terms.
- $y^2$ terms: $-3y^2$ and $-2y^2 \rightarrow -3y^2 - 2y^2 = \mathbf{-5y^2}$

Step 2: Remaining terms are $y^3, -5y^2, y, 5$.

Step 3: Write in descending order.
$$\mathbf{y^3 - 5y^2 + y + 5} \;\checkmark$$

**Example 3:** Write in standard form: **$\frac{x}{2} + 3x^2 - 1$**

Terms are $3x^2, \frac{x}{2}, -1$ (powers $2, 1, 0$).
$$\mathbf{3x^2 + \frac{x}{2} - 1} \;\checkmark$$
(Here $\frac{x}{2} = \frac{1}{2}x$, which is a valid polynomial term.)

**Example 4:** Write in standard form (descending order): **$8 - 6t + 2t^4 - t^2$**

Powers: $8$ ($0$), $-6t$ ($1$), $2t^4$ ($4$), $-t^2$ ($2$).
$$\mathbf{2t^4 - t^2 - 6t + 8} \;\checkmark$$

### When a Power Is Missing

If a polynomial skips a power, you can write that missing term with a **coefficient of $0$**. This trick becomes very useful in later topics (such as long division of polynomials).

**Example:** $x^3 + 5$

The $x^2$ and $x$ terms are missing, so we can insert them with **$0$ coefficients**:
$$x^3 + \mathbf{0x^2} + \mathbf{0x} + 5$$

This does not change the value at all because $0$ times anything is $0$, yet it shows every power cleanly ($3, 2, 1, 0$).

**Example:** $2y^4 - 7y + 1$
$$= 2y^4 + \mathbf{0y^3} + \mathbf{0y^2} - 7y + 1$$

### Listing the Coefficients

Once a polynomial is in standard form, reading off the coefficient of every power is effortless.

**$p(x) = 2x^3 - 5x^2 + x - 9$**

| Power | $x^3$ | $x^2$ | $x$ | $x^0$ (constant) |
|---|---|---|---|---|
| Coefficient | $2$ | $-5$ | $1$ | $-9$ |

Notice that the coefficient of $x$ is **$1$** (since $x = 1 \times x$), and the constant term is **$-9$**.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Thinking $\sqrt{x}$ or $\frac{1}{x}$ is a polynomial.**
   Neither is a polynomial because their exponents are a fraction ($\frac{1}{2}$) and negative ($-1$). Only whole-number exponents ($0, 1, 2, 3, \dots$) are allowed.

2. **Mistake 2: Confusing $\frac{x}{2}$ with $\frac{2}{x}$.**
   $\frac{x}{2}$ is a polynomial (the fraction is in the coefficient). $\frac{2}{x}$ is not a polynomial (the variable $x$ is in the denominator).

3. **Mistake 3: Forgetting to combine like terms.**
   Always **combine like terms** before writing standard form. Write $8x$ instead of leaving $3x + 5x$ split apart.

4. **Mistake 4: Dropping a negative sign when reordering.**
   When rearranging $x^2 - 5x + 6$, never turn $-5x$ into $5x$. Each term moves together with its sign.

5. **Mistake 5: Putting the constant term first in descending order.**
   In descending order, the constant term always goes **last**. It goes first only in ascending order.

6. **Mistake 6: Treating an expression with a variable in the exponent as a polynomial.**
   $2^x$ is not a polynomial, whereas $x^2$ is. In $x^2$, the variable is the base; in $2^x$, the variable is the **exponent**.

7. **Mistake 7: Calling a two-variable polynomial a polynomial in one variable.**
   $x^2 + xy + y^2$ uses both $x$ and $y$, so it is not a polynomial in one variable.

---

## Quick Recap

- A **polynomial** is an algebraic expression whose variable exponents are **only whole numbers ($0, 1, 2, 3, \dots$)**.
- The variable must **not be in a denominator** or **inside a square root**.
- A **polynomial in one variable** contains only one variable letter (such as $x$).
- Polynomials are named using notation like $p(x)$ or $q(y)$, where $p(x)$ is read "$p$ of $x$".
- A nonzero number alone is a **constant polynomial**, and $0$ alone is the **zero polynomial**.
- $\frac{x}{2}$ is a polynomial, whereas $\frac{2}{x}$ and $\sqrt{x}$ are not.
- **Standard form** means arranging terms by powers of the variable — normally in **descending order** (highest power to lowest power).
- Always **combine like terms first**, **order the powers**, and **keep each sign with its term**.
- Missing powers can be shown with a **$0$ coefficient** ($x^3 + 5 = x^3 + 0x^2 + 0x + 5$).

---

## Practice Questions

1. Which of the following are polynomials in one variable? Give a reason for each.
   (a) $4x^3 - 2x + 1$
   (b) $x + \frac{1}{x}$
   (c) $\sqrt{x} + 3$
   (d) $y^2 - 5y$
   (e) $7$
   (f) $x^2 + xy + y^2$
   (g) $3x^{-2} + 1$
   (h) $\frac{x}{2} + 5$

2. For the polynomial $p(x) = 2x^3 - 5x^2 + x - 9$, write:
   (a) the coefficient of $x^3$
   (b) the coefficient of $x^2$
   (c) the coefficient of $x$
   (d) the constant term

3. Write each polynomial in standard form (descending order):
   (a) $5 - 2x + 3x^2$
   (b) $7y + y^3 - 2 + 4y^2$
   (c) $3x^2 + 5x - x^2 + 2 - 4x$

4. Write $x^3 - 3x^2 + 2x - 5$ in ascending order.

5. Rewrite each polynomial showing the missing terms with zero coefficients:
   (a) $x^4 + 3x - 7$
   (b) $2y^3 - 5$

6. If $p(x) = 4x^2 - 3x + 5$, find $p(2)$, $p(0)$, and $p(-2)$.

7. Explain in your own words why $\frac{3}{x^2} + 1$ is not a polynomial.

### Answers

1. (a) **Yes.** The powers $3, 1, 0$ are all whole numbers, and there is only one variable ($x$).
   (b) **No.** $\frac{1}{x} = x^{-1}$, which has a negative exponent.
   (c) **No.** $\sqrt{x} = x^{1/2}$, which has a fractional exponent.
   (d) **Yes.** The powers $2$ and $1$ are whole numbers, and there is only one variable ($y$).
   (e) **Yes.** It is a constant polynomial ($7 = 7x^0$).
   (f) **No.** It has two variables ($x$ and $y$), not one.
   (g) **No.** The exponent $-2$ is negative.
   (h) **Yes.** $\frac{1}{2}x + 5$ has power $1$ (the fraction is only in the coefficient).
2. (a) **$2$**  (b) **$-5$**  (c) **$1$**  (d) **$-9$**
3. (a) **$3x^2 - 2x + 5$**
   (b) **$y^3 + 4y^2 + 7y - 2$**
   (c) Combine like terms: $3x^2 - x^2 = 2x^2$, and $5x - 4x = x$. Answer: **$2x^2 + x + 2$**
4. **$-5 + 2x - 3x^2 + x^3$**
5. (a) **$x^4 + 0x^3 + 0x^2 + 3x - 7$**
   (b) **$2y^3 + 0y^2 + 0y - 5$**
6. $p(2) = 4(2)^2 - 3(2) + 5 = 16 - 6 + 5 = \mathbf{15}$
   $p(0) = 4(0)^2 - 3(0) + 5 = \mathbf{5}$
   $p(-2) = 4(-2)^2 - 3(-2) + 5 = 16 + 6 + 5 = \mathbf{27}$
7. $\frac{3}{x^2} + 1 = 3x^{-2} + 1$. Here the exponent of $x$ is **$-2$**, which is negative. Because a polynomial can only have whole-number exponents ($0, 1, 2, 3, \dots$), this expression is not a polynomial.

---

If the "why must exponents be whole numbers" rule still feels a bit abstract, just picture the modular building blocks: you can stack $0, 1, 2, 3$ full blocks together, not half a block or $-2$ blocks. Everything else works just like Topics 1 and 2 — we have simply given these well-behaved expressions a name (**polynomials**) and a tidy order (**standard form**).
