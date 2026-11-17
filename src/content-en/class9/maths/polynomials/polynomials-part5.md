# Chapter: Polynomials (Part 5)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [polynomials-part4.md](polynomials-part4.md).** (Topics 1 and 2 are in [polynomials.md](polynomials.md), Topic 3 is in [polynomials-part2.md](polynomials-part2.md), Topic 4 is in [polynomials-part3.md](polynomials-part3.md), and Topic 5 is in [polynomials-part4.md](polynomials-part4.md).)
> **Topics covered in this file:**
> 6. Constant Polynomial, Zero Polynomial, Value of a Polynomial, Zero of a Polynomial

---

# Topic 6: Constant Polynomial, Zero Polynomial, Value and Zero of a Polynomial

So far, we have learned how to recognise a polynomial, count its terms, and classify it by degree. In this topic, we put polynomials **to work**: substituting numbers to find a polynomial's **value**, and discovering **which inputs make its value equal to $0$** (known as a **zero** of the polynomial). Along the way, we examine two special cases—the constant polynomial and the zero polynomial—in complete detail.

We first saw the names *constant polynomial* and *zero polynomial* in Topics 3 and 4; here we explore their full behaviour.

---

## Leo's Neighbourhood Pastry Stall

Leo runs a small weekend pastry stall at the community market.

- On each pastry he sells, he makes **$\$10$ in profit**.
- However, he must pay a fixed daily stall fee of **$\$500$**, whether he sells any pastries or not.

If Leo sells **$x$ pastries** in a day, his net profit in dollars is given by:

$$P(x) = 10x - 500$$

This is a linear binomial. Look at what happens for different sales counts:

| Pastries sold ($x$) | Net profit $P(x) = 10x - 500$ | Meaning |
|---|---|---|
| $30$ | $10(30) - 500 = \mathbf{-200}$ | A **loss** of $\$200$ |
| $50$ | $10(50) - 500 = \mathbf{0}$ | Break-even (no profit, no loss) |
| $80$ | $10(80) - 500 = \mathbf{300}$ | A **profit** of $\$300$ |

Notice two key ideas:
- When we replace $x$ with a number and compute the result, that result is the **value** of the polynomial (for instance, at $x = 30$, the value is $-200$).
- **$x = 50$** is the special input where the value becomes **$0$**. In algebra, $50$ is called a **zero** of the polynomial. In business, it is called the **break-even point**—the exact threshold where profit begins.

Also notice: the daily stall fee of **$\$500$** stays the same no matter how many pastries Leo sells—just like a **constant polynomial**. And on a closed holiday when the stall is shut and there are neither sales nor fees, the entire ledger reads **$0$**—just like the **zero polynomial**.

In this topic, we will study all four of these concepts one by one.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Constant polynomial** | A polynomial that consists of a single (non-zero) number | $7$, $-3$, $\frac{1}{2}$ |
| **Zero polynomial** | The polynomial that is simply **$0$** | $0$ |
| **Value of a polynomial** | The output obtained when $x$ is replaced by a specific number | $p(2)$ |
| **Zero of a polynomial** | A number that makes the polynomial's value equal to **$0$** when substituted for $x$ | The zero of $p(x) = x - 5$ is **$5$** |

---

## Part A: Constant Polynomial

A **constant polynomial** is a polynomial containing **only a single non-zero number**, with no variable appearing explicitly.

Examples: **$7$**, **$-3$**, **$\frac{1}{2}$**, **$\sqrt{5}$**

In Topic 3, we saw that $7 = 7x^0$, which is why any number qualifies as a polynomial. Now let us look at its key properties.

### Key Properties of a Constant Polynomial

**1. Its degree is $0$.** (Because $7 = 7x^0$.)

**2. Its value never changes, regardless of $x$.**
Suppose $p(x) = 7$. Then:
- $p(1) = 7$
- $p(100) = 7$
- $p(-5) = 7$
- $p(0) = 7$

No matter what input you feed into the expression, the output is always $7$—just as Leo's stall fee remained $\$500$ whether he sold $1$ pastry or $1{,}000$.

**3. It has no zero** (when the constant is non-zero). Since the value is always $7$, it can never equal $0$. We will revisit this in Part D.

---

## Part B: Zero Polynomial

The **zero polynomial** is the polynomial that is **identically $0$**:

$$p(x) = 0$$

### Key Properties of the Zero Polynomial

**1. Its degree is not defined.** (We touched on this in Topic 4.) Why? Look closely:
- $0 = 0x^0 = 0x^1 = 0x^2 = 0x^5 = \dots$
- Multiplying any power of $x$ by $0$ still produces $0$.
- Therefore, there is no way to decide what the "highest power" of $x$ is.

For this reason, we say: **the degree of the zero polynomial is not defined.**

**2. Its value is always $0$.** $p(5) = 0$, $p(-100) = 0$, and $p(\text{anything}) = 0$.

**3. Every real number is a zero of the zero polynomial** (we will explore this in Part E).

### Watch Out: Zero Polynomial vs. Constant Polynomial

| | Constant polynomial | Zero polynomial |
|---|---|---|
| **Example** | $7$, $-3$, $\frac{1}{2}$ | $0$ |
| **Degree** | **$0$** | **Not defined** |
| **Value** | Always that same non-zero number | Always $0$ |

Students frequently lump $0$ in with constant polynomials and claim its degree is $0$. That is incorrect—$0$ is a **special case** with an undefined degree.

### When Does the Zero Polynomial Appear?

Whenever all terms in an expression cancel out completely:

- $x - x = \mathbf{0}$
- $3x^2 - 3x^2 + 5 - 5 = \mathbf{0}$
- $2(x + 1) - 2x - 2 = 2x + 2 - 2x - 2 = \mathbf{0}$

---

## Part C: Value of a Polynomial

Think of a polynomial as a **number machine**:

- You feed a number (**input**) into the machine.
- The machine follows the algebraic rule.
- Out comes a single number (**output**).

That output is the **value** of the polynomial for that input.

### Notation

If a polynomial is named **$p(x)$**, then:
- **$p(2)$** is read "**$p$ of $2$**." It means: replace $x$ with **$2$** and evaluate.
- **$p(-3)$** means replace $x$ with **$-3$**.
- **$p(a)$** means replace $x$ with **$a$**.

Be careful: **$p(2)$ does not mean "multiply $p$ by $2$."** It is simply a compact notation meaning "the value of $p(x)$ when $x = 2$."

### Steps to Find the Value of a Polynomial

1. Replace every $x$ with **empty parentheses**: $p(2) = (\ )^2 \dots$
2. Write the substituted number inside each pair of parentheses.
3. Evaluate powers first, then multiplication, and finally addition and subtraction.

*(Always use parentheses when substituting negative numbers, as we noted in Topic 1.)*

### Solved Examples

**Example 1:** For $p(x) = 3x^2 - 2x + 5$, find $p(0)$, $p(1)$, $p(-1)$, and $p(2)$.

- **$p(0)$** $= 3(0)^2 - 2(0) + 5 = 0 - 0 + 5 = \mathbf{5}$
- **$p(1)$** $= 3(1)^2 - 2(1) + 5 = 3 - 2 + 5 = \mathbf{6}$
- **$p(-1)$** $= 3(-1)^2 - 2(-1) + 5 = 3 + 2 + 5 = \mathbf{10}$
- **$p(2)$** $= 3(2)^2 - 2(2) + 5 = 12 - 4 + 5 = \mathbf{13}$

**Example 2:** For $p(x) = 3x^2 - 2x + 5$, find **$p\!\left(\frac{1}{2}\right)$**.

$$p\!\left(\frac{1}{2}\right) = 3\left(\frac{1}{2}\right)^2 - 2\left(\frac{1}{2}\right) + 5 = 3\left(\frac{1}{4}\right) - 1 + 5 = \frac{3}{4} + 4 = \mathbf{\frac{19}{4}}$$

**Example 3:** For $p(x) = x^3 - 4x^2 + x + 6$, find $p(2)$.

$$p(2) = (2)^3 - 4(2)^2 + 2 + 6 = 8 - 16 + 2 + 6 = \mathbf{0}$$

*(That is a noteworthy result—we will return to it in the next section.)*

### Two Handy Shortcuts

**Shortcut 1: $p(0) =$ the constant term**
When you set $x = 0$, every term containing $x$ becomes $0$, leaving only the constant term.

In $p(x) = 2x^3 - 5x^2 + x - 9$, we immediately get $p(0) = \mathbf{-9}$ without doing any calculation.

**Shortcut 2: $p(1) =$ the sum of all coefficients**
When you set $x = 1$, every power of $1$ equals $1$, so all the coefficients simply add together.

In $p(x) = 2x^3 - 5x^2 + x - 9$, we get $p(1) = 2 - 5 + 1 - 9 = \mathbf{-11}$.

---

## Part D: Zero of a Polynomial

### A Key Question

In Leo's pastry stall example, we found **$P(50) = 0$**—selling $50$ pastries gives a net profit of **$0$**. We call **$50$** a **zero** of $P(x)$.

> **Zero of a polynomial:** A number $a$ such that **$p(a) = 0$**.

In plain English: **a number you can substitute for $x$ to make the polynomial evaluate to $0$.**

It is also called a **root** of the polynomial—both terms mean the exact same thing.

### A Crucial Distinction

These two phrases sound nearly identical, yet they refer to completely different objects:

| | Meaning | Example |
|---|---|---|
| **Zero polynomial** | The entire polynomial is $0$ | $p(x) = 0$ |
| **Zero of a polynomial** | A specific **number for $x$** that makes the polynomial equal $0$ | The zero of $p(x) = x - 5$ is $5$ |

Memory tip: the **zero polynomial is a polynomial** (an expression), whereas a **zero of a polynomial is a number** (a value of $x$).

### How to Find a Zero (Linear Polynomials)

For a linear polynomial $ax + b$, **set $p(x) = 0$ and solve for $x$.**

**Example 1:** Find the zero of $p(x) = x - 5$.

$$x - 5 = 0 \implies x = \mathbf{5}$$

Check: $p(5) = 5 - 5 = 0$ ✅

**Example 2:** Find the zero of $p(x) = 2x + 6$.

$$2x + 6 = 0 \implies 2x = -6 \implies x = \mathbf{-3}$$

Check: $p(-3) = 2(-3) + 6 = -6 + 6 = 0$ ✅

Notice the zero is **$-3$**, not $3$. Watch your signs carefully!

**Example 3:** Find the zero of $p(x) = 3x - 1$.

$$3x - 1 = 0 \implies 3x = 1 \implies x = \mathbf{\frac{1}{3}}$$

Check: $p\!\left(\frac{1}{3}\right) = 3\left(\frac{1}{3}\right) - 1 = 1 - 1 = 0$ ✅

As you can see, a zero can also be a **fraction**.

**Example 4:** Find the zero of $p(x) = \frac{x}{3} - 2$.

$$\frac{x}{3} - 2 = 0 \implies \frac{x}{3} = 2 \implies x = \mathbf{6}$$

Check: $p(6) = \frac{6}{3} - 2 = 2 - 2 = 0$ ✅

### General Formula for a Linear Polynomial

For any linear polynomial **$ax + b$** ($a \neq 0$):

$$ax + b = 0 \implies x = -\frac{b}{a}$$

For instance, in $2x + 6$, $a = 2$ and $b = 6$, so the zero is $-\frac{6}{2} = -3$—matching Example 2 above.

**Every linear polynomial has exactly one zero.**

### How to Find Zeros (Quadratic and Cubic: Trial Method)

At this stage, we test candidate numbers to find zeros of quadratic and cubic polynomials by **trial and substitution**, checking which values make $p(x) = 0$. *(In Topic 7, we will learn how to use these zeros to factorise polynomials completely.)*

**Example 5:** Given $p(x) = x^2 - 3x + 2$, test which of $-1, 0, 1, 2$ are zeros.

- $p(-1) = (-1)^2 - 3(-1) + 2 = 1 + 3 + 2 = 6 \implies$ **not** a zero
- $p(0) = 0 - 0 + 2 = 2 \implies$ **not** a zero
- $p(1) = 1 - 3 + 2 = 0 \implies$ **is a zero** ✅
- $p(2) = 4 - 6 + 2 = 0 \implies$ **is a zero** ✅

Thus $x^2 - 3x + 2$ has **two zeros**: **$1$ and $2$**.

**Example 6:** Given $p(x) = x^3 - 4x^2 + x + 6$, test which of $-1, 1, 2, 3$ are zeros.

- $p(-1) = (-1)^3 - 4(-1)^2 + (-1) + 6 = -1 - 4 - 1 + 6 = 0 \implies$ **is a zero** ✅
- $p(1) = 1 - 4 + 1 + 6 = 4 \implies$ **not** a zero
- $p(2) = 8 - 16 + 2 + 6 = 0 \implies$ **is a zero** ✅
- $p(3) = 27 - 36 + 3 + 6 = 0 \implies$ **is a zero** ✅

Thus this cubic polynomial has **three zeros**: **$-1, 2, 3$**.

**Example 7:** $p(x) = x^2 - 9$

$$x^2 - 9 = 0 \implies x^2 = 9 \implies x = 3 \text{ or } x = -3$$

Check: $p(3) = 9 - 9 = 0$ ✅ and $p(-3) = 9 - 9 = 0$ ✅

The zeros are **$3$ and $-3$**.

**Example 8:** $p(x) = x^2$

For $x^2 = 0$, we must have $x = \mathbf{0}$.

So the zero of this polynomial is **$0$**. Notice that the number **$0$ itself** can be a zero of a polynomial!

**Example 9:** $p(x) = x^2 + 1$

For every real number $x$, $x^2 \ge 0$, so $x^2 + 1 \ge 1$—it can never equal $0$.

Therefore, **$x^2 + 1$ has no (real) zero.**

### Zeros of Constant and Zero Polynomials

- **Non-zero constant polynomial (such as $7$):** has **no zero**, because $p(x) = 7$ is always $7$ and never $0$.
- **Zero polynomial ($p(x) = 0$):** **every real number is a zero**, because $p(x) = 0$ evaluates to $0$ no matter what number you substitute for $x$.

### How Many Zeros Can a Polynomial Have?

> A non-zero polynomial of degree $n$ can have **at most $n$ zeros**.

| Polynomial | Degree | Possible Number of Zeros |
|---|---|---|
| Non-zero constant ($7$) | $0$ | **$0$ zeros** |
| Linear ($ax + b$) | $1$ | **Exactly $1$ zero** |
| Quadratic | $2$ | **$0$, $1$, or $2$ zeros** (at most $2$) |
| Cubic | $3$ | **At most $3$ zeros** |
| Biquadratic | $4$ | **At most $4$ zeros** |

Look back at our examples: the quadratic in Example 5 had $2$ zeros, the cubic in Example 6 had $3$ zeros, and the quadratic $x^2 + 1$ in Example 9 had $0$ real zeros.

### How Value and Zero Relate

| | Value | Zero |
|---|---|---|
| **What is it?** | The **output** $p(a)$ when $x = a$ | An **input $x$** that produces an output of **$0$** |
| **How many exist?** | Every input $x$ has a value | Only specific special values of $x$ yield $0$ |
| **Example** | For $p(x) = x - 5$, $p(8) = \mathbf{3}$ | For $p(x) = x - 5$, the zero is $\mathbf{5}$ |

---

## Part E: Zeros of the Zero Polynomial (and Answering the Riddle)

In Leo's stall analogy, when the market is closed and no business takes place, the daily ledger is identically **$0$**. Regardless of what number of pastries you plug in, the output stays $0$. In the exact same way, the zero polynomial $p(x) = 0$ outputs $0$ for every $x$, which means **every real number is a zero of the zero polynomial.**

That is why the zero polynomial is uniquely special—and why mathematicians leave its degree undefined.

---

## Part F: More Solved Examples

**Example 10:** If **$x = 2$** is a zero of the polynomial **$p(x) = x^2 - kx + 6$**, find the value of $k$.

Since $x = 2$ is a zero, $p(2) = 0$:
$$p(2) = (2)^2 - k(2) + 6 = 0$$
$$4 - 2k + 6 = 0 \implies 10 - 2k = 0 \implies 2k = 10 \implies \mathbf{k = 5}$$

Check: Setting $k = 5$ gives $p(x) = x^2 - 5x + 6$, and $p(2) = 4 - 10 + 6 = 0$ ✅

**Example 11:** Leo's stall profit (in dollars) is $P(x) = 10x - 500$.
(a) What is his profit when he sells $70$ pastries?
(b) How many pastries must he sell to break even (neither profit nor loss)?

(a) $P(70) = 10(70) - 500 = 700 - 500 = \mathbf{\$200\text{ profit}}$
(b) Set $P(x) = 0$: $10x - 500 = 0 \implies 10x = 500 \implies \mathbf{x = 50}$

So $50$ pastries is the break-even point (meaning $50$ is the zero of $P(x)$).

**Example 12:** Find the zero of **$5x + 2$**.

$$5x + 2 = 0 \implies 5x = -2 \implies x = \mathbf{-\frac{2}{5}}$$

---

## Common Pitfalls to Avoid

1. **Mistake 1: Treating "zero polynomial" and "zero of a polynomial" as the same thing.**
   - Zero polynomial = the entire polynomial is $0$ (i.e., $p(x) = 0$).
   - Zero of a polynomial = a number substituted for $x$ that makes the polynomial equal $0$ (e.g., $5$ is the zero of $x - 5$).

2. **Mistake 2: Confusing the value of a polynomial with a zero of a polynomial.**
   In $p(x) = x - 5$, $p(8) = 3$ is a **value**, whereas $x = 5$ is the **zero** because $p(5) = 0$.

3. **Mistake 3: Getting the sign wrong when solving for a zero.**
   The zero of $2x + 6$ is **$-3$**, not $3$. Always check by substituting back: $p(-3) = 2(-3) + 6 = 0$ ✅, whereas $p(3) = 2(3) + 6 = 12 \neq 0$.

4. **Mistake 4: Forgetting parentheses when substituting a negative number.**
   In $p(-2)$, write $x^2$ as $(-2)^2 = 4$, not $-2^2 = -4$.

5. **Mistake 5: Saying the degree of the zero polynomial is $0$.**
   A non-zero constant polynomial (like $7$) has degree $0$. The zero polynomial ($0$) has **no defined degree**.

6. **Mistake 6: Assuming every polynomial has at least one zero.**
   Not every polynomial has a real zero. Neither $7$ nor $x^2 + 1$ has any real zero.

7. **Mistake 7: Thinking the zero of a polynomial must be the number $0$.**
   A zero of a polynomial can be any number ($5$, $-3$, $\frac{1}{3}$, etc.). Sometimes it happens to be $0$ (as in $p(x) = x^2$), but not always.

8. **Mistake 8: Assuming $p(0)$ is always $0$.**
   $p(0)$ equals the **constant term** of the polynomial. If the constant term is not $0$, then $p(0) \neq 0$ (for example, in $p(x) = x^2 + 5$, $p(0) = 5$).

9. **Mistake 9: Skipping the substitution check.**
   After finding a zero, always **plug it back into $p(x)$ to confirm you get $0$**. It takes ten seconds and catches sign errors immediately.

---

## Quick Recap

- **Constant polynomial** = a single non-zero number (e.g., $7$). Degree is $0$; value is always that number; **has no zero**.
- **Zero polynomial** = simply $0$. **Degree is not defined**; value is always $0$; **every real number is its zero**.
- **Value of a polynomial:** $p(a)$ is the result obtained by replacing $x$ with $a$ (always use parentheses around negative numbers).
- **Shortcuts:** $p(0) =$ constant term; $p(1) =$ sum of all coefficients.
- **Zero of a polynomial:** a number $a$ such that **$p(a) = 0$** (also called a *root*).
- **Linear polynomial $ax + b$** ($a \neq 0$) has **exactly $1$ zero**: $x = -\frac{b}{a}$.
- A non-zero polynomial of **degree $n$** has **at most $n$ zeros**.
- Keep **zero polynomial** (a polynomial) distinct from **zero of a polynomial** (a number).
- Always **check** your zero by verifying $p(\text{zero}) = 0$.

---

## Practice Questions

1. Which of the following is a constant polynomial and which is the zero polynomial? Write the degree wherever it is defined.
   (a) $9$
   (b) $0$
   (c) $-\frac{3}{4}$
   (d) $x - x$

2. If $p(x) = 2x^2 - 3x + 4$, find $p(0)$, $p(1)$, $p(-2)$, and $p\!\left(\frac{1}{2}\right)$.

3. For $p(x) = 5x^3 - 2x^2 + x - 7$, find $p(0)$ and $p(1)$ using the shortcuts (and verify by direct substitution).

4. Find the zero of each polynomial:
   (a) $x - 8$
   (b) $3x + 9$
   (c) $2x - 5$
   (d) $\frac{x}{4} + 1$

5. For $p(x) = x^2 - 5x + 6$, check whether $1$, $2$, and $3$ are zeros of the polynomial.

6. If $x = -1$ is a zero of $p(x) = x^2 + kx - 6$, find the value of $k$.

7. A workshop's net profit (in dollars) on selling $x$ handcrafted lamps is $P(x) = 8x - 400$.
   (a) Find the profit (or loss) when $30$ lamps are sold.
   (b) Find the number of lamps that must be sold for neither profit nor loss.

8. State whether each statement is true or false. Give a reason.
   (a) Every polynomial has at least one zero.
   (b) A zero of a polynomial can be the number $0$.
   (c) The degree of the zero polynomial is $0$.
   (d) The polynomial $x^2 + 1$ has no real zero.
   (e) A quadratic polynomial can have at most $2$ zeros.

### Answers

1. (a) **Constant polynomial**, degree **$0$**
   (b) **Zero polynomial**, degree **not defined**
   (c) **Constant polynomial**, degree **$0$**
   (d) $x - x = 0$, so it is the **zero polynomial**, degree **not defined**
2. $p(0) = \mathbf{4}$
   $p(1) = 2 - 3 + 4 = \mathbf{3}$
   $p(-2) = 2(4) - 3(-2) + 4 = 8 + 6 + 4 = \mathbf{18}$
   $p\!\left(\frac{1}{2}\right) = 2\left(\frac{1}{4}\right) - 3\left(\frac{1}{2}\right) + 4 = \frac{1}{2} - \frac{3}{2} + 4 = \mathbf{3}$
3. Using shortcuts: $p(0) =$ constant term $= \mathbf{-7}$. $p(1) = 5 - 2 + 1 - 7 = \mathbf{-3}$.
   Direct check: $p(0) = 0 - 0 + 0 - 7 = -7$ ✅; $p(1) = 5(1)^3 - 2(1)^2 + 1 - 7 = -3$ ✅
4. (a) $x - 8 = 0 \implies \mathbf{x = 8}$
   (b) $3x + 9 = 0 \implies 3x = -9 \implies \mathbf{x = -3}$
   (c) $2x - 5 = 0 \implies 2x = 5 \implies \mathbf{x = \frac{5}{2}}$
   (d) $\frac{x}{4} + 1 = 0 \implies \frac{x}{4} = -1 \implies \mathbf{x = -4}$
5. $p(1) = 1 - 5 + 6 = \mathbf{2}$ (not a zero)
   $p(2) = 4 - 10 + 6 = \mathbf{0}$ (is a zero)
   $p(3) = 9 - 15 + 6 = \mathbf{0}$ (is a zero)
6. $p(-1) = (-1)^2 + k(-1) - 6 = 1 - k - 6 = -5 - k$. Since $-1$ is a zero, $-5 - k = 0 \implies \mathbf{k = -5}$.
   Check: $p(x) = x^2 - 5x - 6$, and $p(-1) = 1 + 5 - 6 = 0$ ✅
7. (a) $P(30) = 8(30) - 400 = 240 - 400 = \mathbf{-160}$, which means a **loss of $\$160$**.
   (b) $8x - 400 = 0 \implies 8x = 400 \implies \mathbf{x = 50}$ lamps.
8. (a) **False.** A non-zero constant polynomial (like $5$) and $x^2 + 1$ have no real zeros.
   (b) **True.** For example, the zero of $p(x) = x$ is $0$ (since $p(0) = 0$).
   (c) **False.** The degree of the zero polynomial is **not defined**; degree $0$ applies to non-zero constant polynomials.
   (d) **True.** Since $x^2 \ge 0$ for all real $x$, $x^2 + 1 \ge 1$, so it can never equal $0$.
   (e) **True.** A polynomial of degree $n$ has at most $n$ zeros, so a degree-$2$ polynomial has at most $2$.

---

If you ever feel confused between a value and a zero, think back to Leo's pastry stall: **value** answers *"if I sell this many pastries, what is my profit?"*, while **zero** answers *"how many pastries must I sell to make my profit equal exactly $0$?"* Both come from the very same polynomial—only the question changes.
