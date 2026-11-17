# Chapter: Polynomials (Part 6)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [polynomials-part5.md](polynomials-part5.md).** (Topics 1 and 2 are in [polynomials.md](polynomials.md), Topic 3 is in [polynomials-part2.md](polynomials-part2.md), Topic 4 is in [polynomials-part3.md](polynomials-part3.md), Topic 5 is in [polynomials-part4.md](polynomials-part4.md), and Topic 6 is in [polynomials-part5.md](polynomials-part5.md).)
> **Topics covered in this file:**
> 7. Division Algorithm for Polynomials, Remainder Theorem, Factor Theorem

---

# Topic 7: Division Algorithm for Polynomials, Remainder Theorem, and Factor Theorem

In this concluding topic, three closely linked ideas build on one another step by step:

1. **Division algorithm:** How to divide one polynomial by another.
2. **Remainder theorem:** A remarkable shortcut for finding the remainder without performing long division.
3. **Factor theorem:** A quick test to decide whether one polynomial is a factor of another.

In Topic 6, we learned what a **zero** of a polynomial is. That idea becomes essential here, because zeros and factors are two sides of the same coin.

---

## Logistics Packing: Distributing Supply Kits

Imagine Liam and Elena working at a warehouse dispatch station. They have **$17$ identical sensor kits** to pack into shipping cartons, and each carton holds exactly **$5$ kits**.

- They pack **$3$ full cartons** ($5 \times 3 = 15$ kits).
- **$2$ kits** remain unpacked because there are not enough to fill a fourth carton.

We write this packing result as:

$$17 = 5 \times 3 + 2$$

Here:
- $17 =$ the total being divided (**dividend**)
- $5 =$ the group size we divide by (**divisor**)
- $3 =$ the number of full cartons (**quotient**)
- $2 =$ what is left over (**remainder**)

Notice one crucial rule: **the remainder ($2$) is always smaller than the divisor ($5$).** If $5$ or more kits remained, Liam and Elena could pack at least one more full carton.

Division with polynomials follows the exact same structure—except instead of sensor kits, we divide expressions in $x$, and "smaller than the divisor" means **having a lower degree than the divisor**.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Dividend** | The number or polynomial being divided | $17$ (packing) / $x^2 + 5x + 6$ |
| **Divisor** | The number or polynomial you divide by | $5$ (packing) / $x + 2$ |
| **Quotient** | The main result obtained from the division | $3$ (packing) / $x + 3$ |
| **Remainder** | What is left over after division | $2$ (packing) / $0$ |
| **Division algorithm** | $\text{Dividend} = \text{Divisor} \times \text{Quotient} + \text{Remainder}$ | $17 = 5 \times 3 + 2$ / $x^2 + 5x + 6 = (x + 2)(x + 3) + 0$ |

---

## Part A: The Division Algorithm for Polynomials

### Rule

If $p(x)$ and $g(x)$ are two polynomials with $g(x) \neq 0$, then we can always find polynomials $q(x)$ and $r(x)$ such that:

> $$p(x) = g(x) \times q(x) + r(x)$$
>
> where either **$r(x) = 0$**, or **$\text{degree of } r(x) < \text{degree of } g(x)$**.

In words:
$$\text{Dividend} = \text{Divisor} \times \text{Quotient} + \text{Remainder}$$

And remember the stopping condition: **the degree of the remainder must be strictly less than the degree of the divisor** (just like the $2$ leftover kits had to be fewer than $5$).

This gives an immediate consequence: whenever the **divisor is linear** (degree $1$), the remainder must have degree less than $1$—meaning the remainder is always a **constant (a single number)**, or $0$.

### Steps for Long Division

The method mirrors numerical long division. We repeat four actions in a loop: **Divide, Multiply, Subtract, Bring down.**

1. Write both dividend and divisor in **standard form** (powers of $x$ in descending order, as learned in Topic 3).
2. If any power of $x$ is missing in the dividend, insert it with a **$0$ coefficient** as a placeholder (for example, write $x^3 + 8$ as $x^3 + 0x^2 + 0x + 8$).
3. **Divide:** Divide the **first term** of the current dividend by the **first term** of the divisor. This gives the next term of the quotient.
4. **Multiply:** Multiply that quotient term by the **entire divisor**.
5. **Subtract:** Subtract the product from the current dividend (flip the sign of every term being subtracted and add).
6. **Bring down:** Bring down the next term from the dividend.
7. Repeat Steps 3 to 6 until the **remaining expression has a lower degree than the divisor**. That final expression is the remainder.

### Solved Examples

**Example 1:** $(x^2 + 5x + 6) \div (x + 2)$

```
                x  +  3
            ______________
x + 2  )   x² + 5x + 6
           x² + 2x
           -------
                3x + 6
                3x + 6
                ------
                     0
```

Steps:
- $x^2 \div x = \mathbf{x}$ (first term of the quotient). Multiply: $x(x + 2) = x^2 + 2x$. Subtract: $(x^2 + 5x) - (x^2 + 2x) = 3x$. Bring down $6$: $3x + 6$.
- $3x \div x = \mathbf{3}$. Multiply: $3(x + 2) = 3x + 6$. Subtract: $0$.

**Quotient $= x + 3$, Remainder $= 0$**

Check: $(x + 2)(x + 3) + 0 = x^2 + 5x + 6$ ✅

**Example 2:** $(x^2 + 3x + 5) \div (x + 1)$

```
                x  +  2
            ______________
x + 1  )   x² + 3x + 5
           x² +  x
           -------
                2x + 5
                2x + 2
                ------
                     3
```

- $x^2 \div x = \mathbf{x}$. $x(x + 1) = x^2 + x$. Subtract: $2x$. Bring down $5$: $2x + 5$.
- $2x \div x = \mathbf{2}$. $2(x + 1) = 2x + 2$. Subtract: $5 - 2 = \mathbf{3}$.
- Now $3$ has degree $0$, which is less than the degree of $x + 1$ ($1$), so we stop.

**Quotient $= x + 2$, Remainder $= 3$**

Check: $(x + 1)(x + 2) + 3 = x^2 + 3x + 2 + 3 = x^2 + 3x + 5$ ✅

**Example 3:** $(x^3 - 6x^2 + 11x - 6) \div (x - 1)$

- $x^3 \div x = \mathbf{x^2}$. $x^2(x - 1) = x^3 - x^2$. Subtract: $-5x^2$. Bring down $11x$: $-5x^2 + 11x$.
- $-5x^2 \div x = \mathbf{-5x}$. $-5x(x - 1) = -5x^2 + 5x$. Subtract: $6x$. Bring down $-6$: $6x - 6$.
- $6x \div x = \mathbf{6}$. $6(x - 1) = 6x - 6$. Subtract: $0$.

**Quotient $= x^2 - 5x + 6$, Remainder $= 0$**

**Example 4 (with missing terms):** $(x^3 + 8) \div (x + 2)$

First insert $0$ placeholders for the missing terms: **$x^3 + 0x^2 + 0x + 8$**.

- $x^3 \div x = \mathbf{x^2}$. $x^2(x + 2) = x^3 + 2x^2$. Subtract: $-2x^2$. Bring down $0x$: $-2x^2 + 0x$.
- $-2x^2 \div x = \mathbf{-2x}$. $-2x(x + 2) = -2x^2 - 4x$. Subtract: $4x$. Bring down $8$: $4x + 8$.
- $4x \div x = \mathbf{4}$. $4(x + 2) = 4x + 8$. Subtract: $0$.

**Quotient $= x^2 - 2x + 4$, Remainder $= 0$**

If we had omitted $0x^2$ and $0x$, like terms would not have aligned properly during subtraction. Always include missing powers as $0$-coefficient placeholders.

**Example 5 (divisor of degree 2):** $(x^3 + 2x^2 - x + 3) \div (x^2 + 1)$

Since the divisor has no $x$-term, treat it as $x^2 + 0x + 1$.

- $x^3 \div x^2 = \mathbf{x}$. $x(x^2 + 1) = x^3 + x$. Subtract: $(x^3 + 2x^2 - x) - (x^3 + x) = 2x^2 - 2x$. Bring down $3$: $2x^2 - 2x + 3$.
- $2x^2 \div x^2 = \mathbf{2}$. $2(x^2 + 1) = 2x^2 + 2$. Subtract: $(2x^2 - 2x + 3) - (2x^2 + 2) = \mathbf{-2x + 1}$.
- The remaining expression $-2x + 1$ has degree $1$, which is less than the divisor's degree ($2$). We stop.

**Quotient $= x + 2$, Remainder $= -2x + 1$**

Check: $(x^2 + 1)(x + 2) + (-2x + 1) = x^3 + 2x^2 + x + 2 - 2x + 1 = x^3 + 2x^2 - x + 3$ ✅

**Example 6 (leading coefficient of divisor is not 1):** $(6x^2 + 7x + 2) \div (2x + 1)$

- $6x^2 \div 2x = \mathbf{3x}$. $3x(2x + 1) = 6x^2 + 3x$. Subtract: $4x$. Bring down $2$: $4x + 2$.
- $4x \div 2x = \mathbf{2}$. $2(2x + 1) = 4x + 2$. Subtract: $0$.

**Quotient $= 3x + 2$, Remainder $= 0$**

### Finding an Unknown Divisor When Dividend, Quotient, and Remainder Are Known

**Example 7:** When a polynomial is divided by $g(x)$, the quotient is $x + 2$ and the remainder is $2$. If the dividend is $x^2 + 5x + 8$, find $g(x)$.

By the division algorithm: $\text{Dividend} = g(x) \times \text{Quotient} + \text{Remainder}$
$$x^2 + 5x + 8 = g(x)(x + 2) + 2$$
$$g(x)(x + 2) = x^2 + 5x + 6$$
$$g(x) = (x^2 + 5x + 6) \div (x + 2) = \mathbf{x + 3} \quad \text{(from Example 1)}$$

Check: $(x + 3)(x + 2) + 2 = x^2 + 5x + 6 + 2 = x^2 + 5x + 8$ ✅

---

## Part B: Remainder Theorem

### A Quick Question

In Example 2 above, we divided $x^2 + 3x + 5$ by $x + 1$ and found that the remainder was **$3$**—after working through every step of long division.

If we only care about the **remainder**, do we really have to carry out the entire long division? **No!** The Remainder Theorem gives us a direct shortcut.

### Theorem

> **If a polynomial $p(x)$ is divided by $(x - a)$, then the remainder is $p(a)$.**

In other words, to find the remainder:
1. Set the divisor equal to $0$ ($x - a = 0$) and solve for $x = a$.
2. Substitute $x = a$ into $p(x)$.
3. The resulting value $p(a)$ is the remainder.

### Why Does This Work? (Understanding the Proof)

By the division algorithm:
$$p(x) = (x - a) \times q(x) + r$$

*(Because the divisor $x - a$ has degree $1$, the remainder $r$ must be a constant number.)*

Now substitute **$x = a$** on both sides:
$$p(a) = (a - a) \times q(a) + r$$
$$p(a) = \mathbf{0} \times q(a) + r$$
$$p(a) = r$$

Look at what happened: the entire term containing $(x - a)$ multiplied by $q(x)$ **collapsed to $0$** and vanished, leaving only $r$. Therefore, **$r = p(a)$**.

### Checking Example 2 Using the Shortcut

Let $p(x) = x^2 + 3x + 5$ and the divisor be $x + 1$.
Set $x + 1 = 0 \implies x = \mathbf{-1}$.
$$p(-1) = (-1)^2 + 3(-1) + 5 = 1 - 3 + 5 = \mathbf{3}$$

Long division gave $3$ as well—an exact match! ✅

### Solved Examples

**Example 1:** Find the remainder when $p(x) = x^3 - 2x^2 + 3x - 4$ is divided by $(x - 2)$.

Set $x - 2 = 0 \implies x = 2$.
$$p(2) = (2)^3 - 2(2)^2 + 3(2) - 4 = 8 - 8 + 6 - 4 = \mathbf{2}$$

**Example 2:** Find the remainder when the same polynomial is divided by $(x + 1)$.

Set $x + 1 = 0 \implies x = -1$.
$$p(-1) = (-1)^3 - 2(-1)^2 + 3(-1) - 4 = -1 - 2 - 3 - 4 = \mathbf{-10}$$

**Example 3 (divisor of the form $(ax + b)$):** Find the remainder when the same polynomial is divided by $(2x - 1)$.

Set $2x - 1 = 0 \implies 2x = 1 \implies x = \mathbf{\frac{1}{2}}$.
$$p\!\left(\frac{1}{2}\right) = \left(\frac{1}{2}\right)^3 - 2\left(\frac{1}{2}\right)^2 + 3\left(\frac{1}{2}\right) - 4 = \frac{1}{8} - 2\left(\frac{1}{4}\right) + \frac{3}{2} - 4$$
$$= \frac{1}{8} - \frac{1}{2} + \frac{3}{2} - 4 = \frac{1}{8} + 1 - 4 = \frac{1}{8} - 3 = \mathbf{-\frac{23}{8}}$$

**Rule:** When the divisor is **$(ax + b)$** ($a \neq 0$), the remainder is **$p\!\left(-\frac{b}{a}\right)$**.

**Example 4:** When $x^3 + kx^2 + 2x + 1$ is divided by $(x - 1)$, the remainder is $5$. Find $k$.

Set $x - 1 = 0 \implies x = 1$.
$$p(1) = 1 + k + 2 + 1 = k + 4$$
Since the remainder is $5$, we have $k + 4 = 5 \implies \mathbf{k = 1}$.

Check: For $k = 1$, $p(x) = x^3 + x^2 + 2x + 1$, and $p(1) = 1 + 1 + 2 + 1 = 5$ ✅

---

## Part C: Factor Theorem

### What Is a Factor? (A Quick Refresher)

With whole numbers:
- $12 \div 3 = 4$, **remainder $0$** $\implies$ **$3$ is a factor of $12$**.
- $12 \div 5 = 2$, remainder $2$ $\implies$ $5$ is not a factor of $12$.

With polynomials, the idea is identical: when dividing one polynomial by another leaves a **remainder of $0$**, the divisor is a **factor** of the dividend.

### Theorem

> **$(x - a)$ is a factor of $p(x)$ if and only if $p(a) = 0$.**

"If and only if" means the statement works in both directions:
- If $p(a) = 0$, then $(x - a)$ is a factor of $p(x)$.
- If $(x - a)$ is a factor of $p(x)$, then $p(a) = 0$.

### How It Follows from the Remainder Theorem

By the Remainder Theorem, dividing $p(x)$ by $(x - a)$ gives a remainder of $p(a)$.

- If **$p(a) = 0$**, the remainder is $0$, so **$(x - a)$ divides $p(x)$ evenly and is a factor.**
- If **$p(a) \neq 0$**, the remainder is non-zero, so **$(x - a)$ is not a factor.**

Thus, the Factor Theorem is simply a **special case of the Remainder Theorem** (the case where the remainder equals $0$).

### Connecting to Zeros from Topic 6

In Topic 6, we defined: **$a$ is a zero of $p(x)$ when $p(a) = 0$.**

And now the Factor Theorem states: **$(x - a)$ is a factor of $p(x)$ when $p(a) = 0$.**

Putting both together:
> **$a$ is a zero of $p(x)$ $\iff$ $(x - a)$ is a factor of $p(x)$.**

They are two ways of expressing the exact same fact! This gives us a powerful bridge: **the zeros we found in Topic 6 immediately tell us the factors of a polynomial.**

For example, in Topic 6 we found that the zeros of $x^2 - 3x + 2$ are $1$ and $2$. Therefore, its factors are $(x - 1)$ and $(x - 2)$. Check: $(x - 1)(x - 2) = x^2 - 3x + 2$ ✅

### Solved Examples

**Example 1:** Is $(x - 2)$ a factor of $p(x) = x^2 - 5x + 6$?

Set $x - 2 = 0 \implies x = 2$.
$p(2) = 4 - 10 + 6 = 0$.
Since $p(2) = 0$, **yes, $(x - 2)$ is a factor** ✅

**Example 2:** Is $(x + 1)$ a factor of $p(x) = x^3 + 1$?

Set $x + 1 = 0 \implies x = -1$.
$p(-1) = (-1)^3 + 1 = -1 + 1 = 0$.
**Yes, $(x + 1)$ is a factor** ✅

**Example 3:** Is $(x + 1)$ a factor of $p(x) = x^3 + 3x^2 + 3x + 2$?

Set $x = -1$.
$p(-1) = -1 + 3 - 3 + 2 = 1$.
Since $p(-1) \neq 0$, **no, $(x + 1)$ is not a factor** ❌ (the remainder is $1$).

**Example 4 (divisor of the form $(ax + b)$):** Is $(2x - 1)$ a factor of $p(x) = 2x^2 + x - 1$?

Set $2x - 1 = 0 \implies x = \frac{1}{2}$.
$p\!\left(\frac{1}{2}\right) = 2\left(\frac{1}{4}\right) + \frac{1}{2} - 1 = \frac{1}{2} + \frac{1}{2} - 1 = 0$.
**Yes, $(2x - 1)$ is a factor** ✅

We can also write the second factor: $2x^2 + x - 1 = (2x - 1)(x + 1)$. Check: $(2x - 1)(x + 1) = 2x^2 + 2x - x - 1 = 2x^2 + x - 1$ ✅

**Example 5 (finding $k$):** Find the value of $k$ such that $(x - 2)$ is a factor of $p(x) = x^3 + kx^2 - 5x + 6$.

Since $(x - 2)$ is a factor, $p(2) = 0$:
$$p(2) = 8 + 4k - 10 + 6 = 4k + 4$$
$$4k + 4 = 0 \implies 4k = -4 \implies \mathbf{k = -1}$$

Check: Putting $k = -1$ gives $p(x) = x^3 - x^2 - 5x + 6$, and $p(2) = 8 - 4 - 10 + 6 = 0$ ✅

### Factorising a Polynomial Completely Using the Factor Theorem

This is the most practical application of the Factor Theorem, especially for cubic polynomials. It takes three steps:

1. **Find one zero** by trial substitution. *Tip: test positive and negative factors of the constant term.*
2. By the Factor Theorem, that zero $a$ gives a linear factor $(x - a)$.
3. **Divide the polynomial by that factor**, and then factorise the resulting quadratic quotient.

**Example 6:** Factorise $x^3 - 4x^2 + x + 6$ completely.

**Step 1:** The constant term is $6$, whose integer factors are $\pm 1, \pm 2, \pm 3, \pm 6$. Test them:
- $p(1) = 1 - 4 + 1 + 6 = 4$ (not a zero)
- $p(-1) = -1 - 4 - 1 + 6 = \mathbf{0}$ ✅

**Step 2:** Since $p(-1) = 0$, **$(x + 1)$ is a factor.**

**Step 3:** Divide $(x^3 - 4x^2 + x + 6)$ by $(x + 1)$:
- $x^3 \div x = \mathbf{x^2}$. $x^2(x + 1) = x^3 + x^2$. Subtract: $-5x^2$. Bring down $x$: $-5x^2 + x$.
- $-5x^2 \div x = \mathbf{-5x}$. $-5x(x + 1) = -5x^2 - 5x$. Subtract: $6x$. Bring down $6$: $6x + 6$.
- $6x \div x = \mathbf{6}$. $6(x + 1) = 6x + 6$. Subtract: $0$.

Quotient $= x^2 - 5x + 6$.

Now factorise the quadratic quotient: $x^2 - 5x + 6 = (x - 2)(x - 3)$ (since $(-2)(-3) = 6$ and $-2 + (-3) = -5$).

**Complete factorisation:**
$$x^3 - 4x^2 + x + 6 = (x + 1)(x - 2)(x - 3)$$

Notice these correspond to the exact three zeros we found in Topic 6: $-1$, $2$, and $3$.

**Example 7:** Factorise $x^3 - 6x^2 + 11x - 6$ completely.

The constant term is $-6$, so try $\pm 1, \pm 2, \pm 3, \pm 6$:
$p(1) = 1 - 6 + 11 - 6 = \mathbf{0}$ ✅, so $(x - 1)$ is a factor.

Dividing by $(x - 1)$ (from Part A, Example 3) gives the quotient $x^2 - 5x + 6 = (x - 2)(x - 3)$.

$$x^3 - 6x^2 + 11x - 6 = (x - 1)(x - 2)(x - 3)$$

---

## How All Three Ideas Connect at a Glance

```
Division Algorithm:   p(x) = g(x) × q(x) + r(x)
        │
        │   when divisor is linear: (x - a)
        ▼
Remainder Theorem:    remainder = p(a)
        │
        │   when remainder = 0
        ▼
Factor Theorem:       p(a) = 0  ⟺  (x - a) is a factor
        │
        │   (from Topic 6)
        ▼
                      a is a ZERO of p(x)
```

All three results are simply consecutive chapters of one unified story.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Omitting missing powers of $x$ in long division.**
   When dividing $(x^3 + 8)$, never write it simply as $x^3 + 8$ in the long-division bracket. Write $x^3 + \mathbf{0x^2 + 0x} + 8$ so terms stay aligned by power.

2. **Mistake 2: Forgetting to flip all signs when subtracting.**
   During subtraction, **reverse the sign of every term in the bottom expression** before adding. For example, $(x^2 + 5x) - (x^2 + 2x) = x^2 + 5x - x^2 - 2x = 3x$. Flipping only the first sign and forgetting the second is one of the most common division errors.

3. **Mistake 3: Stopping long division too early.**
   As long as the remaining expression has a degree **greater than or equal to** the divisor's degree, **keep dividing**. You only stop when the remainder's degree is strictly less than the divisor's degree.

4. **Mistake 4: Using $a = 1$ when dividing by $(x + 1)$.**
   Since $(x + 1) = (x - (-1))$, the value to substitute is **$a = -1$**, so the remainder is $p(-1)$, not $p(1)$. Always set the divisor equal to $0$ and solve for $x$.

5. **Mistake 5: Using $x = 1$ or $x = 2$ when dividing by $(2x - 1)$.**
   Solving $2x - 1 = 0$ gives $x = \mathbf{\frac{1}{2}}$, so the remainder is $p\!\left(\frac{1}{2}\right)$.

6. **Mistake 6: Getting the sign backward in the Factor Theorem.**
   The correct statement is: $(x - a)$ is a factor $\iff p(a) = 0$. Do **not** evaluate $p(-a)$ for $(x - a)$.

7. **Mistake 7: Skipping the multiplication check after long division.**
   Always verify $\text{Divisor} \times \text{Quotient} + \text{Remainder} = \text{Dividend}$. It takes thirty seconds and immediately catches arithmetic slips.

8. **Mistake 8: Leaving dividend or divisor out of standard form.**
   Always arrange both polynomials in descending powers of $x$ before dividing; otherwise, terms fall out of order.

9. **Mistake 9: Thinking the Remainder Theorem only works for $(x - a)$.**
   It works for any linear divisor $(ax + b)$ ($a \neq 0$) as well—just set $ax + b = 0$ and substitute $x = -\frac{b}{a}$.

---

## Quick Recap

- **Division algorithm:** $\text{Dividend} = \text{Divisor} \times \text{Quotient} + \text{Remainder}$, where either the remainder is $0$ or **its degree is strictly less than the divisor's degree**.
- **Long division loop:** *Divide, Multiply, Subtract, Bring down*, inserting $0$ placeholders for any missing powers.
- **Remainder Theorem:** When $p(x)$ is divided by $(x - a)$, the remainder is **$p(a)$**. (For $(ax + b)$, the remainder is $p\!\left(-\frac{b}{a}\right)$.)
- **Factor Theorem:** **$(x - a)$ is a factor of $p(x) \iff p(a) = 0$.**
- The Factor Theorem is a special case of the Remainder Theorem (when the remainder is $0$).
- **$a$ is a zero $\iff (x - a)$ is a factor** (connecting Topic 6 and Topic 7).
- **To factorise a cubic polynomial:** find one zero by testing factors of the constant term, divide by $(x - a)$, and factorise the resulting quadratic quotient.
- Always **verify** long division using $\text{Divisor} \times \text{Quotient} + \text{Remainder} = \text{Dividend}$.

---

## Practice Questions

1. Divide and state the quotient and remainder:
   (a) $(x^2 + 7x + 10) \div (x + 2)$
   (b) $(x^2 - 2x + 5) \div (x - 3)$
   (c) $(x^3 - 1) \div (x - 1)$
   (d) $(2x^3 + x^2 - 5x + 2) \div (2x - 1)$

2. Find the remainder (without performing long division) when $p(x) = x^3 - 3x^2 + 4x + 7$ is divided by:
   (a) $x - 1$
   (b) $x + 2$
   (c) $2x - 3$

3. The polynomial $x^3 + kx^2 + 2x + 1$ leaves remainder $5$ when divided by $(x - 1)$. Find $k$.

4. Use the Factor Theorem to decide whether the first expression is a factor of the second:
   (a) $(x - 1),\; x^3 + x^2 - x - 1$
   (b) $(x + 1),\; x^3 + 3x^2 + 3x + 2$
   (c) $(2x + 1),\; 2x^2 + 3x + 1$

5. Find the value of $k$ so that $(x - 2)$ is a factor of $x^3 + kx^2 - 5x + 6$.

6. Factorise completely: $x^3 - 6x^2 + 11x - 6$.

7. When a polynomial is divided by $g(x)$, the quotient is $x + 2$ and the remainder is $2$. If the dividend is $x^2 + 5x + 8$, find $g(x)$.

8. State whether each statement is true or false. Give a reason.
   (a) If the remainder is zero, the divisor is a factor of the dividend.
   (b) The remainder when $p(x)$ is divided by $(x + 3)$ is $p(3)$.
   (c) A polynomial of degree $3$ is divided by a polynomial of degree $2$. The remainder can have degree $2$.
   (d) If $p(a) = 0$, then $(x - a)$ is a factor of $p(x)$.

### Answers

1. (a) First quotient term is $x$: $x(x + 2) = x^2 + 2x$; subtract to get $5x + 10$. Next term is $5$: $5(x + 2) = 5x + 10$; subtract to get $0$.
   **Quotient $= x + 5$, Remainder $= 0$**
   (b) $x(x - 3) = x^2 - 3x$; subtract to get $x + 5$. Next term is $1$: $1(x - 3) = x - 3$; subtract to get $8$.
   **Quotient $= x + 1$, Remainder $= 8$**
   Check: $(x - 3)(x + 1) + 8 = x^2 - 2x - 3 + 8 = x^2 - 2x + 5$ ✅
   (c) Write as $x^3 + 0x^2 + 0x - 1$. $x^2(x - 1) = x^3 - x^2$; subtract to get $x^2 + 0x$. $x(x - 1) = x^2 - x$; subtract to get $x - 1$. $1(x - 1) = x - 1$; subtract to get $0$.
   **Quotient $= x^2 + x + 1$, Remainder $= 0$**
   (d) $x^2(2x - 1) = 2x^3 - x^2$; subtract to get $2x^2 - 5x$. $x(2x - 1) = 2x^2 - x$; subtract to get $-4x + 2$. $-2(2x - 1) = -4x + 2$; subtract to get $0$.
   **Quotient $= x^2 + x - 2$, Remainder $= 0$**
2. (a) $x = 1$: $p(1) = 1 - 3 + 4 + 7 = \mathbf{9}$
   (b) $x = -2$: $p(-2) = -8 - 12 - 8 + 7 = \mathbf{-21}$
   (c) $2x - 3 = 0 \implies x = \frac{3}{2}$. $p\!\left(\frac{3}{2}\right) = \frac{27}{8} - \frac{27}{4} + 6 + 7 = \frac{27}{8} - \frac{54}{8} + \frac{104}{8} = \mathbf{\frac{77}{8}}$
3. $p(1) = 1 + k + 2 + 1 = k + 4 = 5 \implies \mathbf{k = 1}$.
4. (a) $x = 1$: $p(1) = 1 + 1 - 1 - 1 = 0$. **Yes**, it is a factor.
   (b) $x = -1$: $p(-1) = -1 + 3 - 3 + 2 = 1 \neq 0$. **No**, it is not a factor.
   (c) $2x + 1 = 0 \implies x = -\frac{1}{2}$. $p\!\left(-\frac{1}{2}\right) = 2\left(\frac{1}{4}\right) + 3\left(-\frac{1}{2}\right) + 1 = \frac{1}{2} - \frac{3}{2} + 1 = 0$. **Yes**, it is a factor.
5. $p(2) = 8 + 4k - 10 + 6 = 4k + 4 = 0 \implies \mathbf{k = -1}$.
6. $p(1) = 1 - 6 + 11 - 6 = 0$, so $(x - 1)$ is a factor. Dividing by $(x - 1)$ yields quotient $x^2 - 5x + 6 = (x - 2)(x - 3)$.
   **$x^3 - 6x^2 + 11x - 6 = (x - 1)(x - 2)(x - 3)$**
7. $g(x)(x + 2) + 2 = x^2 + 5x + 8 \implies g(x)(x + 2) = x^2 + 5x + 6 = (x + 2)(x + 3)$.
   **$g(x) = x + 3$**
8. (a) **True.** A remainder of $0$ means the divisor divides the dividend evenly, so it is a factor.
   (b) **False.** Setting $x + 3 = 0$ gives $x = \mathbf{-3}$, so the remainder is $p(\mathbf{-3})$.
   (c) **False.** The remainder must have degree **strictly less** than the divisor's degree ($2$), so its degree can be at most $1$.
   (d) **True.** This is directly the Factor Theorem.

---

If keeping all three ideas in your head at once feels tricky, hold on to this single chain: **to find the remainder when dividing by $(x - a)$, plug in $x = a$. If the remainder is $0$, $(x - a)$ is a factor.** Everything else flows directly from that rule.

---

## Chapter Wrap-up: Polynomials

Across all seven topics of this chapter, we built the foundations of polynomial algebra from individual numbers and letters up to division and factorisation:

| Topic | What We Covered | Core Takeaway |
|---|---|---|
| **1. Constants, Variables, and Algebraic Expressions** | Constants, variables, expressions vs. equations, like/unlike terms, translating word statements, evaluating expressions | Constants stay fixed while variables change; only like terms can be combined. |
| **2. Terms of an Algebraic Expression** | Factors within a term, numerical vs. literal coefficients, counting terms with brackets/fractions, signed terms | Every term carries the sign in front of it, and brackets must be handled before counting terms. |
| **3. Polynomial in One Variable and Standard Form** | Whole-number exponent rule, $p(x)$ notation, arranging terms in descending powers, missing-power $0$ placeholders | All variable exponents in a polynomial must be whole numbers ($0, 1, 2, \dots$). |
| **4. Polynomials of Various Degrees** | Degree of a polynomial, linear ($1$), quadratic ($2$), cubic ($3$), biquadratic ($4$) | The highest power of the variable determines the polynomial's degree and family name. |
| **5. Number of Terms in a Polynomial** | Monomial ($1$), binomial ($2$), trinomial ($3$), multinomials, combining degree and term count | Always simplify like terms and expand brackets before counting terms; degree and term count are independent. |
| **6. Constant Polynomial, Zero Polynomial, Value and Zero** | Degree $0$ vs. undefined degree, evaluating $p(a)$, $p(0)$ and $p(1)$ shortcuts, finding zeros | A non-zero constant has degree $0$ and no zero; the zero polynomial ($0$) has undefined degree and every number as a zero; a degree-$n$ polynomial has at most $n$ zeros. |
| **7. Division Algorithm, Remainder Theorem, Factor Theorem** | Long division of polynomials, $p(x) = g(x)q(x) + r(x)$, remainder $p(a)$, factor test $p(a) = 0$, cubic factorisation | $a$ is a zero of $p(x)$ $\iff p(a) = 0 \iff (x - a)$ is a factor of $p(x)$. |

With these polynomial tools in hand, you are ready to apply them to algebraic **expansions** (identities) and **factorisation** techniques in the chapters ahead.
