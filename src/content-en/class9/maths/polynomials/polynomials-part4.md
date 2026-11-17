# Chapter: Polynomials (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [polynomials-part3.md](polynomials-part3.md).** (Topics 1 and 2 are in [polynomials.md](polynomials.md), Topic 3 is in [polynomials-part2.md](polynomials-part2.md), and Topic 4 is in [polynomials-part3.md](polynomials-part3.md).)
> **Topics covered in this file:**
> 5. Number of Terms in a Polynomial: Monomial, Binomial, Trinomial

---

# Topic 5: Number of Terms in a Polynomial

In the previous topic, we classified polynomials by their **degree** (linear, quadratic, cubic, and biquadratic). Now we will classify polynomials in a **second way**: by counting **how many terms** they contain. We briefly encountered the names monomial, binomial, and trinomial in Topic 1; here, we examine them thoroughly along with all the subtle details.

---

## The Ice-Cream Scoop Story

Imagine Maya, Leo, and Sophia walking up to an ice-cream counter after school:

- Maya orders **1 scoop** (just vanilla). That is a **single-scoop cone**.
- Leo orders **2 scoops** (vanilla and chocolate). That is a **two-scoop cone**.
- Sophia orders **3 scoops** (vanilla, chocolate, and strawberry). That is a **three-scoop cone**.

In algebra, **each distinct flavour scoop is like a term** (separated by $+$ or $-$ signs, just as we saw in earlier topics).

Now consider a clever question: if Leo asks for **2 scoops of vanilla**, does he have two different flavours? No—he still has **one flavour**, just a larger portion of it! Algebra works the exact same way: $3x$ and $5x$ are **like terms**, so once you combine them, only a single term ($8x$) remains.

Keep that idea in mind, because we will soon see why you must always **combine like terms before counting the number of terms**.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Monomial** | A polynomial with exactly **1 term** | $5x$, $7$, $3x^2y$ |
| **Binomial** | A polynomial with exactly **2 terms** | $x + 3$, $2a - 5b$ |
| **Trinomial** | A polynomial with exactly **3 terms** | $x^2 + 2x + 1$ |

An easy way to remember the prefixes:
- **Mono** = one (*monorail*: a train running on a single rail)
- **Bi** = two (*binoculars*: a viewing instrument for two eyes)
- **Tri** = three (*tripod*: a three-legged camera stand)

---

## Part A: Monomial (1 Term)

A **monomial** is a polynomial that consists of **only one term**—meaning it contains no $+$ or $-$ signs separating distinct terms.

### Examples

| Polynomial | Why It Is a Monomial |
|---|---|
| $5x$ | Only one term |
| $-7y^2$ | Only one term (the minus sign belongs to the coefficient) |
| $3x^2yz$ | Contains several letters, but all are joined by multiplication ($\times$), forming one term |
| $9$ | A non-zero constant is also a single term |
| $\frac{x}{4}$ | Equivalent to $\frac{1}{4} \times x$, which is one term |
| $\pi r^2$ | $\pi \times r \times r$, one term |

### Key Points

- A monomial **does not have to contain only one variable letter**. For instance, $3x^2yz$ is a monomial.
- A monomial **can be a plain constant**. For instance, $9$ is a monomial.
- A monomial can have **any whole-number degree**: $5x$ (degree $1$), $5x^2$ (degree $2$), and $5x^9$ (degree $9$) are all monomials.

### Monomials in Real Life

- Perimeter of a square tile: **$4s$** (monomial)
- Area of a square tile: **$s^2$** (monomial)
- Area of a rectangular floor panel: **$lb$** (monomial)
- Area of a circular fountain: **$\pi r^2$** (monomial)
- Cost of $n$ notebooks at $\$10$ each: **$10n$** (monomial)

---

## Part B: Binomial (2 Terms)

A **binomial** is a polynomial with **exactly two unlike terms**.

### Examples

| Polynomial | Terms |
|---|---|
| $x + 3$ | $x$, $3$ |
| $2a - 5b$ | $2a$, $-5b$ |
| $x^2 - 1$ | $x^2$, $-1$ |
| $4x^3 + 7x$ | $4x^3$, $7x$ |
| $3xy - 2$ | $3xy$, $-2$ |
| $\frac{y}{2} + 6$ | $\frac{y}{2}$, $6$ |

### An Important Point: Subtraction Still Makes a Binomial

Students often assume "binomial" requires adding two quantities with a plus sign. However, **$x - y$ is also a binomial**, because as we saw in Topic 2, every term carries the sign in front of it. In $x - y$, the two terms are **$x$** and **$-y$**.

### Binomials in Real Life

- Perimeter of a rectangular room: **$2l + 2b$** (binomial)
- City shuttle fare (a $\$30$ base fee plus $\$12$ per kilometre): **$30 + 12x$** (binomial, from Topic 1)
- Cost of $4$ pens at $\$p$ each and $3$ notebooks at $\$b$ each: **$4p + 3b$** (binomial)

---

## Part C: Trinomial (3 Terms)

A **trinomial** is a polynomial with **exactly three unlike terms**.

### Examples

| Polynomial | Terms |
|---|---|
| $x^2 + 2x + 1$ | $x^2$, $2x$, $1$ |
| $a + b + c$ | $a$, $b$, $c$ |
| $3y^3 - y + 5$ | $3y^3$, $-y$, $5$ |
| $x^2 - 3xy + 2y^2$ | $x^2$, $-3xy$, $2y^2$ |
| $2p - 5q + 8$ | $2p$, $-5q$, $8$ |

### Trinomials in Real Life

- Perimeter of a triangular garden bed with sides $a$, $b$, and $c$: **$a + b + c$** (trinomial)
- Supply order for $4$ binders, $3$ markers, and a $\$250$ equipment kit: **$4n + 3p + 250$** (trinomial)
- Area of Elena's expanded square courtyard layout (from Topic 3): **$x^2 + 5x + 6$** (trinomial)

### A Special Note

The general **quadratic polynomial** $ax^2 + bx + c$ from Topic 4 looks like a trinomial. That is why quadratic polynomials are often trinomials—though not always (for example, $x^2 - 4$ is a quadratic binomial, and $7x^2$ is a quadratic monomial). We will compare both classifications shortly.

---

## Part D: More Than 3 Terms

When a polynomial has **more than 3 terms**, we do not use a special prefix name like mono-, bi-, or tri-. Instead, we simply call it a "**polynomial with 4 terms**," a "**polynomial with 5 terms**," or more generally a **multinomial**.

**Example:** $x^3 + x^2 + x + 1$ has **4 terms**. It is neither a monomial, nor a binomial, nor a trinomial.

---

## Part E: Four Rules for Counting Terms

Counting terms is where most careless errors happen, so study these four rules carefully (building on what we saw with brackets and fractions in Topic 2).

### Rule 1: Combine Like Terms First, Then Count

Remember the ice-cream rule: 2 scoops of vanilla are still just 1 flavour.

**Example:** $3x + 5x + 2$
At first glance it looks like 3 terms (a trinomial). However, $3x + 5x = 8x$, so:
$$3x + 5x + 2 = 8x + 2 \implies \textbf{2 terms (binomial)}$$

**Example:** $2x^2 + 3x - 2x^2 + 5$
Notice that $2x^2 - 2x^2 = 0$, leaving:
$$3x + 5 \implies \textbf{2 terms (binomial)}$$

### Rule 2: Expand Brackets First

**Example:** $x(x + 1)$
Expand the bracket: $x^2 + x \implies$ **2 terms (binomial)**.

**Example:** $3(a + b) - 3a$
Expand the bracket: $3a + 3b - 3a$. Since $3a - 3a = 0$, only $3b$ remains $\implies$ **1 term (monomial)**.

### Rule 3: Look at the Terms in the Numerator of a Fraction

- **$\frac{x}{2}$** $\implies$ 1 term (**monomial**).
- **$\frac{x + y}{2}$** $= \frac{x}{2} + \frac{y}{2} \implies$ **2 terms (binomial)**.

### Rule 4: A Minus Sign Stays Attached to Its Term

- **$a - b$** $\implies$ terms are $a$ and $-b \implies$ **2 terms (binomial)**.
- **$x^2 - 5x + 6$** $\implies$ terms are $x^2$, $-5x$, and $6 \implies$ **3 terms (trinomial)**.

---

## Part F: Naming a Polynomial Two Ways (Both Terms and Degree)

In Topic 4, we named polynomials by **degree** (linear, quadratic, cubic, biquadratic). In this topic, we named them by **number of terms** (monomial, binomial, trinomial). Because degree and term count describe **two independent properties**, a single polynomial can carry **both names at once**.

Think of describing a building by both its **height** ("tall") and its **material** ("brick")—both descriptions are true simultaneously and tell you different things.

**Example:** $x^2 + 2x + 1$
- Number of terms: $3 \implies$ **trinomial**
- Degree: $2 \implies$ **quadratic**
- Combined name: **quadratic trinomial**

### Table: Degree × Terms

| | Monomial (1 term) | Binomial (2 terms) | Trinomial (3 terms) |
|---|---|---|---|
| **Linear (degree 1)** | $5x$ | $3x + 2$ | *(Impossible in one variable\*)* |
| **Quadratic (degree 2)** | $7x^2$ | $x^2 - 4$ | $x^2 - 4x + 3$ |
| **Cubic (degree 3)** | $2x^3$ | $x^3 + 1$ | $x^3 - x + 5$ |
| **Biquadratic (degree 4)** | $x^4$ | $x^4 - 16$ | $x^4 - 5x^2 + 4$ |

*\*In a single variable $x$, a linear polynomial $ax + b$ can have at most 2 terms (the $x$-term and the constant term), so it can never be a trinomial.*

### How Many Terms Can a Polynomial Have?

In one variable, a polynomial of **degree $n$** can have at most **$n + 1$ terms** (corresponding to powers $n, n - 1, \dots, 1, 0$).

| Degree | Maximum Possible Terms |
|---|---|
| $1$ (linear) | $2$ |
| $2$ (quadratic) | $3$ |
| $3$ (cubic) | $4$ |
| $4$ (biquadratic) | $5$ |

From this pattern:
- A **linear** polynomial (in one variable) can have $1$ or $2$ terms (monomial or binomial).
- A **quadratic** polynomial can have $1$, $2$, or $3$ terms.
- A **cubic** polynomial can have $1$, $2$, $3$, or $4$ terms.

---

## Part G: Polynomials with Two or More Variables

The method for counting terms is identical whether a polynomial has one variable or several.

| Polynomial | Number of Terms | Classification |
|---|---|---|
| $3ab$ | $1$ | Monomial |
| $x^2 - y^2$ | $2$ | Binomial |
| $x^2 + xy + y^2$ | $3$ | Trinomial |
| $2p^2q - 3pq^2 + 5$ | $3$ | Trinomial |
| $a + b + c + d$ | $4$ | Polynomial with 4 terms |

---

## Part H: Solved Examples

In each example below, classify the polynomial by both its number of terms and its degree.

**Example 1:** $7x$
- $1$ term $\implies$ **monomial**
- Degree $1$ $\implies$ **linear**
- **Linear monomial**

**Example 2:** $3x^2 + 5$
- $2$ terms $\implies$ **binomial**
- Degree $2$ $\implies$ **quadratic**
- **Quadratic binomial**

**Example 3:** $y^3 - y^2 + 4$
- $3$ terms $\implies$ **trinomial**
- Degree $3$ $\implies$ **cubic**
- **Cubic trinomial**

**Example 4:** $x^4 - 16$
- $2$ terms $\implies$ **binomial**
- Degree $4$ $\implies$ **biquadratic**
- **Biquadratic binomial**

**Example 5:** $9$
- $1$ term $\implies$ **monomial**
- Degree $0$ $\implies$ **constant**
- **Constant monomial**

**Example 6:** $5x + 2x - 3$
First combine like terms: $5x + 2x = 7x$, giving $7x - 3$.
- $2$ terms $\implies$ **binomial**; degree $1$ $\implies$ **linear**.
- **Linear binomial**

**Example 7:** $x^2 + 3x - x^2 + 5x$
Here $x^2 - x^2 = 0$ and $3x + 5x = 8x$, leaving **$8x$**.
- $1$ term $\implies$ **monomial**; degree $1$ $\implies$ **linear**.
- **Linear monomial** (even though it appeared to have 4 terms before simplifying!)

**Example 8:** $3(a + b) - 3a$
Expand: $3a + 3b - 3a = \mathbf{3b}$.
- **Monomial** (linear).

**Example 9:** $2x^2y - 3xy^2 + 5$
- $3$ unlike terms $\implies$ **trinomial** (in two variables, $x$ and $y$).

**Example 10:** Write an example of a **cubic trinomial**.
$x^3 + 2x - 1$ (powers $3$, $1$, and $0$ give $3$ unlike terms, and the highest power is $3$).

**Example 11:** Write an example of a **biquadratic binomial**.
$x^4 + 1$ (or $2z^4 - 7z$).

---

## Common Pitfalls to Avoid

1. **Mistake 1: Assuming a monomial can contain only one variable letter.**
   $3x^2yz$ is a monomial because it consists of **one single term**. A single term may multiply together as many variables as needed—we count terms, not letters.

2. **Mistake 2: Counting terms before combining like terms.**
   $3x + 5x + 2$ is **not** a trinomial. Combining like terms gives $8x + 2$, which is a **binomial**.

3. **Mistake 3: Confusing "trinomial" with "cubic."**
   Both words relate to the number $3$, but they measure completely different things:
   - **Trinomial** = **3 terms**
   - **Cubic** = **degree 3**
   For example, $x^3 + 1$ is **cubic** (degree 3) yet a **binomial** (2 terms), whereas $x^2 + 2x + 1$ is a **trinomial** (3 terms) yet **quadratic** (degree 2).

4. **Mistake 4: Thinking a subtraction expression is not a binomial.**
   $x - 5$ is a binomial—its two terms are $x$ and $-5$.

5. **Mistake 5: Counting terms inside unexpanded brackets.**
   Do not look at $3(a + b)$ and immediately count terms inside parentheses, especially when another term sits outside. Always expand brackets first (for instance, $3(a + b) - 3a$ simplifies to $3b$, a monomial, as in Example 8).

6. **Mistake 6: Assuming every monomial has degree 1.**
   A monomial can have any whole-number degree. For example, $5x^4$ is a monomial of degree $4$.

7. **Mistake 7: Assuming every cubic polynomial has 3 terms.**
   A cubic polynomial in one variable can have $1$, $2$, $3$, or $4$ terms. The number of terms is not fixed by the degree.

---

## Quick Recap

- **Monomial** $= 1$ term, **Binomial** $= 2$ terms, **Trinomial** $= 3$ terms. Polynomials with more than 3 terms have no special prefix name (e.g., "4-term polynomial" or multinomial).
- **Mono, bi, tri** mean one, two, and three (*monorail*, *binoculars*, *tripod*).
- **Four rules for counting terms:**
  1. Combine like terms first.
  2. Expand brackets first.
  3. Check separate terms in the numerator of a fraction.
  4. Keep each minus sign attached to the term that follows it.
- A single polynomial can be named by **both** its number of terms and its degree (e.g., *quadratic trinomial*, *cubic binomial*).
- A polynomial of degree $n$ in one variable can have **at most $n + 1$ terms**.
- The same term-counting rules apply to polynomials with two or more variables.
- Never confuse **trinomial (3 terms)** with **cubic (degree 3)**.

---

## Practice Questions

1. Name each polynomial according to the number of terms (monomial, binomial, trinomial, or none of these):
   (a) $5x^3$
   (b) $x - 7$
   (c) $a^2 + ab + b^2$
   (d) $12$
   (e) $2p - 3q$
   (f) $4m^2n$
   (g) $x^3 + x^2 + x + 1$

2. Simplify first, and then classify according to the number of terms:
   (a) $4x + 3x$
   (b) $2y^2 + 5y - 2y^2$
   (c) $6a - 2a + b - b + 3$
   (d) $3(x + 2) - 3x$

3. Classify each polynomial according to both the number of terms and the degree (for example, "quadratic trinomial"):
   (a) $6x^2 - 1$
   (b) $y^3$
   (c) $z^4 + z^2 + 1$
   (d) $2t - 9$

4. Write one example of each:
   (a) a cubic trinomial in $x$
   (b) a quadratic monomial in $y$
   (c) a linear binomial in $t$
   (d) a biquadratic binomial in $z$

5. State whether each statement is true or false. Give a reason.
   (a) $x^2 - y^2$ is a binomial.
   (b) $5xyz$ is a monomial.
   (c) Every trinomial is a quadratic polynomial.
   (d) A cubic polynomial in one variable can have at most 4 terms.
   (e) $3x + 5x$ is a binomial.

6. A rectangular patio has length $l$ and breadth $b$. Write its perimeter as a polynomial and name it according to the number of terms.

7. For what value of $k$ is $(k - 4)x^3 + 2x^2 + 5$:
   (a) a binomial?
   (b) a trinomial?

### Answers

1. (a) **Monomial**
   (b) **Binomial**
   (c) **Trinomial**
   (d) **Monomial**
   (e) **Binomial**
   (f) **Monomial**
   (g) **None of these** (it has 4 terms)
2. (a) $4x + 3x = 7x \implies$ **monomial**
   (b) $2y^2 - 2y^2 = 0$, leaving $5y \implies$ **monomial**
   (c) $6a - 2a = 4a$, $b - b = 0$, leaving $4a + 3 \implies$ **binomial**
   (d) $3x + 6 - 3x = 6 \implies$ **monomial** (a constant)
3. (a) **Quadratic binomial**
   (b) **Cubic monomial**
   (c) **Biquadratic trinomial**
   (d) **Linear binomial**
4. Any valid example works. For instance:
   (a) **$x^3 + 2x - 1$**  (b) **$7y^2$**  (c) **$3t + 5$**  (d) **$z^4 - 1$**
5. (a) **True.** The two terms are $x^2$ and $-y^2$.
   (b) **True.** $5xyz$ is a single term, even though it contains three variables.
   (c) **False.** "Trinomial" means 3 terms, and its degree can be anything (for example, $x^3 + x + 1$ is a cubic trinomial).
   (d) **True.** A degree-3 polynomial in one variable can have powers $3, 2, 1$, and $0$—at most 4 terms.
   (e) **False.** $3x + 5x = 8x$, which is a **monomial**.
6. Perimeter $= \mathbf{2l + 2b}$. Since it has 2 terms, it is a **binomial** (and degree 1, so a linear binomial).
7. (a) It becomes a binomial when the $x^3$-term vanishes: $k - 4 = 0 \implies \mathbf{k = 4}$. The polynomial then becomes $2x^2 + 5$ (2 terms).
   (b) It remains a trinomial whenever $k - 4 \neq 0$, i.e., **$\mathbf{k \neq 4}$**, so all three terms ($x^3$, $x^2$, and the constant) are present.

---

If everything feels like a lot to remember at once, hold on to this single rule: **combine like terms before you count, then label them by count: $1 =$ mono, $2 =$ bi, $3 =$ tri.** And never mix up a polynomial's degree with its number of terms—they measure two different things.
