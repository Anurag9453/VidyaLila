# Chapter: Factorisation

> **Class:** 9 | **Subject:** Mathematics
> **This chapter is an extension of the [Polynomials](../polynomials/polynomials.md) chapter.** All the topics from Polynomials ([part 2](../polynomials/polynomials-part2.md), [part 3](../polynomials/polynomials-part3.md), [part 4](../polynomials/polynomials-part4.md), [part 5](../polynomials/polynomials-part5.md), [part 6](../polynomials/polynomials-part6.md)) will be useful here, especially the Factor Theorem.
> **Topics covered in this file:**
> 1. Factorisation of Polynomials, Formulae of Factorisation, Methods of Factorisation

---

# Topic 1: Factorisation of Polynomials

## Return to Liam's Garden Plot

In Topic 3 (Polynomials), we saw Liam's community garden plot, whose total area was:

$$x^2 + 5x + 6$$

Back then, we only noted that this was a polynomial. Now let us ask a fresh question:

> What are the **length and width** of this plot?

Since $\text{Area} = \text{length} \times \text{width}$, we need to write this expression as **a product of two factors**. Look closely:

$$(x + 3) \times (x + 2) = x^2 + 2x + 3x + 6 = x^2 + 5x + 6 \text{ ✅}$$

So the plot's **length was $x + 3$** and its **width was $x + 2$**.

You have just broken a polynomial down into its factors:

$$x^2 + 5x + 6 = (x + 2)(x + 3)$$

This process is called **factorisation**. In this chapter, we will learn how to break expressions apart, when to apply each method, and which algebraic formulae make the job effortless.

---

## Starting with Number Factorisation

Recall an idea from earlier arithmetic. The number **$12$** can be broken apart in several ways:

- $12 = 3 \times 4$
- $12 = 2 \times 6$
- $12 = 2 \times 2 \times 3$ (these are the smallest building blocks — prime factors)

The exact same idea works for polynomials. The only difference is that here the building blocks are smaller polynomials rather than prime numbers.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Factor** | An expression that divides another expression evenly with zero remainder | $x + 2$ and $x + 3$ are factors of $x^2 + 5x + 6$ |
| **Factorisation** | Writing an expression as a **product** of its factors | $x^2 + 5x + 6 = (x + 2)(x + 3)$ |
| **Common factor** | A factor that appears in multiple terms of an expression | In $6x + 9$, the common factor is **$3$** |
| **HCF** | Highest Common Factor — the largest factor shared by all terms | The HCF of $12x$ and $18x^2$ is $6x$ |
| **Irreducible factor** | A factor that cannot be broken down any further | $x + 2$ (cannot be factorised further) |
| **Factorise completely** | Keep breaking an expression down until every factor is irreducible | $x^4 - 81 = (x^2 + 9)(x + 3)(x - 3)$ |

---

## Part A: What Is Factorisation?

### Factorisation Is the Reverse of Expansion

Compare the two processes side by side:

| | What happens | Example |
|---|---|---|
| **Expansion** (multiplying out) | Multiplying factors together to form a longer expression | $(x + 2)(x + 3) \rightarrow x^2 + 5x + 6$ |
| **Factorisation** (breaking apart) | Splitting a longer expression back into its factors | $x^2 + 5x + 6 \rightarrow (x + 2)(x + 3)$ |

It is just like building a brick wall (putting bricks together) versus taking the wall apart into individual bricks. The two operations are exact opposites.

### A Handy Trick: Checking Your Work

After factorising any expression, you can always **check** your answer: **multiply the factors back together.** You should recover the original expression. If you do, your answer is guaranteed to be right.

### What "Factorise Completely" Means

Keep breaking factors down as long as any factor can still be split further.

**Example:** $2x^2 - 18$
- First step: $2(x^2 - 9)$. However, $x^2 - 9$ can still be broken down further.
- Complete factorisation: $2(x + 3)(x - 3)$. Now every factor is irreducible.

---

## Part B: Factorisation Formulae (Identities)

Much of factorisation becomes quick and reliable using **a few standard identities**. These are simply the expansion identities read in reverse.

### Formula Table

| # | Expansion (multiplying out) | Factorisation (breaking apart) |
|---|---|---|
| 1 | $(a + b)^2 = a^2 + 2ab + b^2$ | **$a^2 + 2ab + b^2 = (a + b)^2$** |
| 2 | $(a - b)^2 = a^2 - 2ab + b^2$ | **$a^2 - 2ab + b^2 = (a - b)^2$** |
| 3 | $(a + b)(a - b) = a^2 - b^2$ | **$a^2 - b^2 = (a + b)(a - b)$** |
| 4 | $(x + a)(x + b) = x^2 + (a + b)x + ab$ | **$x^2 + (a + b)x + ab = (x + a)(x + b)$** |
| 5 | $(a + b)(a^2 - ab + b^2) = a^3 + b^3$ | **$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$** |
| 6 | $(a - b)(a^2 + ab + b^2) = a^3 - b^3$ | **$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$** |
| 7 | $(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$ | **$a^3 + 3a^2b + 3ab^2 + b^3 = (a + b)^3$** |
| 8 | $(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$ | **$a^3 - 3a^2b + 3ab^2 - b^3 = (a - b)^3$** |
| 9 | $(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca$ | **$a^2 + b^2 + c^2 + 2ab + 2bc + 2ca = (a + b + c)^2$** |

Do not worry — you do not need to memorise all of these at once. We will explore them one by one.

### Formulae 1 and 2: Perfect Square Trinomials

$$a^2 + 2ab + b^2 = (a + b)^2$$
$$a^2 - 2ab + b^2 = (a - b)^2$$

This works because expanding $(a + b)^2 = (a + b)(a + b)$ gives:

$$a \times a + a \times b + b \times a + b \times b = a^2 + ab + ab + b^2 = a^2 + 2ab + b^2 \text{ ✅}$$

**How to recognise it:** There are three terms; the first and third terms are **perfect squares** (squares of some quantities), and the middle term equals **twice the product of their square roots**.

Visualise it with a floor-plan sketch. Take a large square tile of side $(a + b)$:
- One corner is an $a \times a$ square ($a^2$)
- The opposite corner is a $b \times b$ square ($b^2$)
- In between sit two identical $a \times b$ rectangles ($ab + ab = 2ab$)

Total area: $(a + b)^2 = a^2 + 2ab + b^2$ ✅

### Formula 3: Difference of Two Squares

$$a^2 - b^2 = (a + b)(a - b)$$

This is the most frequently used formula in algebra. Notice the three clues:
- There are **two terms**.
- **Both terms are perfect squares**.
- There is a **minus sign** between them.

A neat bonus use is mental arithmetic:
- **$101 \times 99$** $= (100 + 1)(100 - 1) = 100^2 - 1^2 = 10{,}000 - 1 = \mathbf{9,999}$
- **$103 \times 97$** $= (100 + 3)(100 - 3) = 10{,}000 - 9 = \mathbf{9,991}$

### Formula 4: $x^2 + (a + b)x + ab$

$$x^2 + (a + b)x + ab = (x + a)(x + b)$$

We will use this in Part C under the name **"middle-term splitting."** In plain words: if you can find two numbers whose **sum equals the middle coefficient** and whose **product equals the constant term**, you immediately have the factors.

### Formulae 5 and 6: Sum and Difference of Cubes

$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$
$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$

Here is an easy way to remember the signs:
- In the **first bracket**, keep the **same** sign as the original expression ($a + b$ or $a - b$).
- In the **second bracket**, the first term $a^2$ is always positive, the **middle sign is opposite**, and the last term $b^2$ is always positive.

| Expression | First bracket | Second bracket |
|---|---|---|
| $a^3 \mathbf{+} b^3$ | $(a \mathbf{+} b)$ | $(a^2 \mathbf{-} ab + b^2)$ |
| $a^3 \mathbf{-} b^3$ | $(a \mathbf{-} b)$ | $(a^2 \mathbf{+} ab + b^2)$ |

You can remember this with the acronym **SOAP**: **S**ame, **O**pposite, **A**lways **P**ositive.

### Formulae 7 and 8: Cube of a Binomial

$$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$
$$(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$$

Here there are $4$ terms, and both the first and last terms are **perfect cubes**.

### Formula 9: Square of a Trinomial

$$(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca$$

It looks long at first glance, yet the pattern is clean: the sum of the squares of all three terms, plus twice the product of each pair.

---

## Part C: Methods of Factorisation

Now for the practical toolkit. When you look at an algebraic expression, which method should you choose? There are five main methods.

### Method 1: Taking Out the Common Factor

**When to use:** Whenever every term shares something in common (a number, a variable, or both).

**Steps:**
1. Find the **HCF** of all numerical coefficients.
2. For each variable that appears in **every** term, take its **lowest power**.
3. Pull the common factor outside a bracket, and write what remains from each term inside.

**Example 1:** $6x + 9$
HCF of $6$ and $9$ $= 3$
$= \mathbf{3(2x + 3)}$
Check: $3(2x + 3) = 6x + 9$ ✅

**Example 2:** $4x^2 - 8x$
HCF of $4$ and $8$ $= 4$, and $x$ is common (lowest power between $x^2$ and $x$ is $x^1$).
$= \mathbf{4x(x - 2)}$
Check: $4x \cdot x - 4x \cdot 2 = 4x^2 - 8x$ ✅

**Example 3:** $12a^2b - 18ab^2$
- HCF of $12$ and $18$ $= 6$
- $a$: lowest power of $a^2$ and $a$ is $a$
- $b$: lowest power of $b$ and $b^2$ is $b$
- Common factor $= 6ab$
$= \mathbf{6ab(2a - 3b)}$
Check: $6ab \cdot 2a - 6ab \cdot 3b = 12a^2b - 18ab^2$ ✅

**Example 4:** $5x^2 + 5x$
Common factor $= 5x$. Notice that dividing the second term $5x$ by $5x$ leaves **$1$** (not $0$).
$= \mathbf{5x(x + 1)}$

**Example 5 (when the common factor is a bracket):** $3x(a - b) + 5y(a - b)$
Both terms contain **$(a - b)$**.
$= \mathbf{(a - b)(3x + 5y)}$

### Method 2: Grouping (Splitting Terms into Pairs)

**When to use:** When there are **$4$ terms** and no single factor is common to all of them at once.

**Steps:**
1. Split the terms into **groups of two**.
2. Take out the common factor from each group.
3. If you grouped wisely, both groups will produce the **exact same bracket**. Pull that bracket out as a common factor.

**Example 1:** $ax + ay + bx + by$
Group 1: $ax + ay = a(x + y)$
Group 2: $bx + by = b(x + y)$
Both contain $(x + y)$:
$= a(x + y) + b(x + y)$
$= \mathbf{(x + y)(a + b)}$
Check: $(x + y)(a + b) = ax + bx + ay + by$ ✅

**Example 2:** $x^3 + x^2 + x + 1$
Group 1: $x^3 + x^2 = x^2(x + 1)$
Group 2: $x + 1 = 1(x + 1)$
$= x^2(x + 1) + 1(x + 1)$
$= \mathbf{(x + 1)(x^2 + 1)}$

**Example 3 (watching signs):** $6xy - 4y + 6 - 9x$
First rearrange the terms so pairs share factors neatly: $6xy - 4y - 9x + 6$.
Group 1: $6xy - 4y = 2y(3x - 2)$
Group 2: $-9x + 6 = -3(3x - 2)$ (pulling out $-3$ flips the signs inside the bracket)
$= 2y(3x - 2) - 3(3x - 2)$
$= \mathbf{(3x - 2)(2y - 3)}$
Check: $(3x - 2)(2y - 3) = 6xy - 9x - 4y + 6$ ✅

**Tip:** If your first pairing does not produce matching brackets, rearrange the order of the terms and try a different pairing.

### Method 3: Using Formulae (Identities)

**When to use:** When the expression matches the pattern of a standard identity.

**Recognition Table:**

| Shape of the expression | Formula to apply |
|---|---|
| $2$ terms, both perfect squares, minus sign between them | $a^2 - b^2$ |
| $3$ terms, first and last are perfect squares, middle is $2ab$ | $(a \pm b)^2$ |
| $2$ terms, both perfect cubes | $a^3 \pm b^3$ |
| $4$ terms, first and last are perfect cubes | $(a \pm b)^3$ |

**Example 1:** $x^2 - 49$
$x^2$ and $49 = 7^2$ are both squares with a minus sign between them.
$= x^2 - 7^2 = \mathbf{(x + 7)(x - 7)}$

**Example 2:** $9a^2 - 16b^2$
$= (3a)^2 - (4b)^2 = \mathbf{(3a + 4b)(3a - 4b)}$

**Example 3:** $4x^2 + 12x + 9$
- $4x^2 = (2x)^2$, $9 = 3^2$
- Middle term: $2 \times 2x \times 3 = 12x$ ✅ (matches!)
$= \mathbf{(2x + 3)^2}$

**Example 4:** $25y^2 - 30y + 9$
- $(5y)^2$ and $3^2$. Middle term: $2 \times 5y \times 3 = 30y$, with a minus sign.
$= \mathbf{(5y - 3)^2}$

**Example 5:** $2x^2 - 18$ (common factor first!)
$= 2(x^2 - 9)$
$= 2(x^2 - 3^2)$
$= \mathbf{2(x + 3)(x - 3)}$

**Example 6:** $x^4 - 81$ (factorise completely)
$x^4 = (x^2)^2$, $81 = 9^2$.
$= (x^2)^2 - 9^2$
$= (x^2 + 9)(x^2 - 9)$
Now $x^2 - 9$ splits further into $(x + 3)(x - 3)$:
$= \mathbf{(x^2 + 9)(x + 3)(x - 3)}$
($x^2 + 9$ cannot be factorised further over the real numbers.)

**Example 7:** $x^3 + 27$
$= x^3 + 3^3 = (x + 3)(x^2 - 3x + 3^2)$
$= \mathbf{(x + 3)(x^2 - 3x + 9)}$

**Example 8:** $8a^3 - 125$
$= (2a)^3 - 5^3 = (2a - 5)((2a)^2 + (2a)(5) + 5^2)$
$= \mathbf{(2a - 5)(4a^2 + 10a + 25)}$

**Example 9 (with a bracket):** $(x + y)^2 - z^2$
This has the form $a^2 - b^2$ with $a = (x + y)$ and $b = z$.
$= \mathbf{(x + y + z)(x + y - z)}$

**Example 10 ($4$ terms hiding a formula):** $a^2 - 2ab + b^2 - c^2$
The first three terms form $(a - b)^2$:
$= (a - b)^2 - c^2$
$= \mathbf{(a - b + c)(a - b - c)}$

### Method 4: Middle-Term Splitting (for $x^2 + bx + c$)

**When to use:** When you have a three-term quadratic expression ($ax^2 + bx + c$).

#### Case 1: Coefficient of $x^2$ Is $1$ ($x^2 + bx + c$)

**Steps:**
1. Find **two numbers** whose **product $= c$** and **sum $= b$**.
2. Place those two numbers into the brackets with $x$.

**Example 1:** $x^2 + 5x + 6$
Product $6$, sum $5$. The numbers are **$2$ and $3$** ($2 \times 3 = 6$, $2 + 3 = 5$).
$= \mathbf{(x + 2)(x + 3)}$

(This is the exact factorisation we used for Liam's garden plot!)

**Example 2:** $x^2 - 7x + 12$
Product $+12$, sum $-7$. The numbers are **$-3$ and $-4$** ($-3 \times (-4) = 12$, $-3 + (-4) = -7$).
$= \mathbf{(x - 3)(x - 4)}$

**Example 3:** $x^2 + 2x - 15$
Product $-15$, sum $+2$. The numbers are **$5$ and $-3$** ($5 \times (-3) = -15$, $5 + (-3) = 2$).
$= \mathbf{(x + 5)(x - 3)}$

**Example 4:** $x^2 - x - 6$
Product $-6$, sum $-1$. The numbers are **$-3$ and $2$** ($-3 \times 2 = -6$, $-3 + 2 = -1$).
$= \mathbf{(x - 3)(x + 2)}$

**Sign Rule (very handy):**

| $c$ (constant term) | $b$ (middle coefficient) | Signs of the two numbers |
|---|---|---|
| **Positive** | Positive | Both **positive** |
| **Positive** | Negative | Both **negative** |
| **Negative** | Either | One positive, one negative (the **larger number** takes the sign of $b$) |

#### Case 2: Coefficient of $x^2$ Is Not $1$ ($ax^2 + bx + c$)

**Steps:**
1. Compute $a \times c$.
2. Find two numbers whose **product $= a \times c$** and **sum $= b$**.
3. **Split the middle term** $bx$ into two parts using those two numbers.
4. Apply **grouping** (Method 2).

**Example 5:** $2x^2 + 7x + 3$
$a \times c = 2 \times 3 = 6$. Sum $= 7$. The numbers are **$1$ and $6$**.
Rewrite the middle term $7x$ as $x + 6x$:
$= 2x^2 + x + 6x + 3$
$= x(2x + 1) + 3(2x + 1)$
$= \mathbf{(2x + 1)(x + 3)}$
Check: $(2x + 1)(x + 3) = 2x^2 + 6x + x + 3 = 2x^2 + 7x + 3$ ✅

**Example 6:** $6x^2 - x - 2$
$a \times c = 6 \times (-2) = -12$. Sum $= -1$. The numbers are **$-4$ and $3$** ($-4 \times 3 = -12$, $-4 + 3 = -1$).
$= 6x^2 - 4x + 3x - 2$
$= 2x(3x - 2) + 1(3x - 2)$
$= \mathbf{(3x - 2)(2x + 1)}$
Check: $(3x - 2)(2x + 1) = 6x^2 + 3x - 4x - 2 = 6x^2 - x - 2$ ✅

### Method 5: Factor Theorem (for Cubic and Higher Polynomials)

**When to use:** When a polynomial is cubic (or higher degree) and the earlier methods do not work directly.

This method builds directly on **Topic 7 (Factor Theorem)** from the Polynomials chapter: **if $p(a) = 0$, then $(x - a)$ is a factor of $p(x)$.**

**Steps:**
1. Test factors ($\pm$) of the constant term until you find an $a$ where $p(a) = 0$.
2. Once found, $(x - a)$ is one factor.
3. Divide $p(x)$ by $(x - a)$.
4. Factorise the resulting quotient (usually a quadratic).

**Example:** Factorise $x^3 - 7x + 6$.

The constant term is $6$, so test $\pm 1, \pm 2, \pm 3, \pm 6$.
$p(1) = 1 - 7 + 6 = \mathbf{0}$ ✅ Therefore $(x - 1)$ is a factor.

Divide $(x^3 + 0x^2 - 7x + 6) \div (x - 1)$:
- $x^3 \div x = \mathbf{x^2}$. $x^2(x - 1) = x^3 - x^2$. Subtract: $x^2 - 7x$ (since $0x^2 - (-x^2) = x^2$, and bring down $-7x$).
- $x^2 \div x = \mathbf{x}$. $x(x - 1) = x^2 - x$. Subtract: $-6x + 6$.
- $-6x \div x = \mathbf{-6}$. $-6(x - 1) = -6x + 6$. Subtract: $0$.

Quotient $= x^2 + x - 6 = (x + 3)(x - 2)$ (product $-6$, sum $1$: $3$ and $-2$).

$$x^3 - 7x + 6 = \mathbf{(x - 1)(x - 2)(x + 3)}$$

Check: the zeros are $1, 2, -3$. $p(2) = 8 - 14 + 6 = 0$ ✅, $p(-3) = -27 + 21 + 6 = 0$ ✅

---

## Part D: Which Method When? (Decision Guide)

Whenever you face a new expression, follow these four steps in order:

**Step 1: Look for a common factor first.**
Always start here. Pulling out a common factor shrinks the expression and makes every step that follows easier.

**Step 2: Count the terms and choose your method.**

| Number of terms | What to try first |
|---|---|
| **$2$ terms** | $a^2 - b^2$ or $a^3 \pm b^3$ |
| **$3$ terms** | Perfect square $(a \pm b)^2$ or middle-term splitting |
| **$4$ terms** | Grouping, or $(a \pm b)^3$, or a $3$-term perfect square minus another square |
| **Cubic that resists all of the above** | Factor Theorem |

**Step 3: Check whether any factor can be broken down further.**
Keep going until every factor is irreducible (factorise completely).

**Step 4: Multiply the factors back together to check.**

---

## Common Pitfalls to Avoid

1. **Mistake 1: Skipping the common factor at the start.**
   Instead of trying to force $2x^2 - 18$ directly into brackets like $(2x + \dots)$, factor out $2$ first: $2(x^2 - 9)$. Everything becomes clear right away.

2. **Mistake 2: Stopping halfway (not factorising completely).**
   Stopping at $x^4 - 81 = (x^2 + 9)(x^2 - 9)$ is incomplete because $x^2 - 9$ splits further. Complete answer: $(x^2 + 9)(x + 3)(x - 3)$.

3. **Mistake 3: Confusing $a^2 + b^2$ with $(a + b)^2$.**
   $(a + b)^2 = a^2 + 2ab + b^2$ — never forget the $2ab$ in the middle. Also, **$a^2 + b^2$ (with a plus sign) cannot be factorised over the real numbers.** That is why $x^2 + 9$ does not break down further.

4. **Mistake 4: Getting the middle sign wrong in $a^3 \pm b^3$.**
   $a^3 + b^3 = (a + b)(a^2 \mathbf{-} ab + b^2)$. The middle sign in the second bracket is opposite. Remember **SOAP** (**S**ame, **O**pposite, **A**lways **P**ositive).

5. **Mistake 5: Leaving $0$ instead of $1$ when factoring out an entire term.**
   $x^2 + x = x(x + 1)$. Dividing the second term $x$ by $x$ leaves **$1$**, never $0$.

6. **Mistake 6: Forgetting to flip signs when taking out a negative common factor.**
   $-9x + 6 = -3(3x - 2)$. Dividing $+6$ by $-3$ gives $-2$, so the sign inside changes to minus. Check: $-3(3x - 2) = -9x + 6$ ✅

7. **Mistake 7: Mixing up the sum and product in middle-term splitting.**
   For $x^2 + 2x - 15$, the two numbers must have **product $-15$** and **sum $+2$**. $5$ and $3$ multiply to $+15$ (wrong), whereas $5$ and $-3$ multiply to $-15$ (right).

8. **Mistake 8: Skipping the check.**
   Multiplying your factors back takes 10 seconds and catches almost every sign or arithmetic slip.

---

## Quick Recap

- **Factorisation** = writing an expression as a **product** of its factors. It is the reverse of expansion.
- Always **check** your answer by multiplying the factors back to recover the original expression.
- **Factorise completely**: keep breaking factors down until every factor is irreducible.
- **Key formulae:**
  - $a^2 - b^2 = (a + b)(a - b)$
  - $a^2 \pm 2ab + b^2 = (a \pm b)^2$
  - $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$
  - $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$
  - $x^2 + (a + b)x + ab = (x + a)(x + b)$
- **5 methods:** Common factor, Grouping, Formulae, Middle-term splitting, Factor Theorem.
- **4-step workflow:** Common factor first $\rightarrow$ count terms and pick a method $\rightarrow$ factorise completely $\rightarrow$ multiply back to check.
- In middle-term splitting: **product $= a \times c$** and **sum $= b$**.
- $a^2 + b^2$ (sum of two squares) cannot be factorised over the real numbers.

---

## Practice Questions

1. Factorise using the common factor method:
   (a) $8x^2 - 12x$
   (b) $15a^2b + 25ab^2$
   (c) $3x(a - b) + 5y(a - b)$

2. Factorise by grouping:
   (a) $x^3 + 3x^2 + 2x + 6$
   (b) $xy - 3x + 4y - 12$

3. Factorise using identities:
   (a) $49x^2 - 25$
   (b) $9y^2 + 30y + 25$
   (c) $16a^2 - 24ab + 9b^2$
   (d) $2x^3 - 32x$
   (e) $27p^3 + 8$

4. Factorise by splitting the middle term:
   (a) $x^2 + 9x + 20$
   (b) $x^2 - 11x + 30$
   (c) $x^2 + x - 12$
   (d) $3x^2 + 10x + 8$

5. Use identities to evaluate:
   (a) $103 \times 97$
   (b) $52^2$
   (c) $98^2$

6. Using the Factor Theorem, factorise $x^3 + 2x^2 - 5x - 6$.

7. Factorise completely: $x^4 - 16$.

8. Factorise: $a^2 - 2ab + b^2 - 9$.

9. State whether each statement is true or false. Give a reason.
   (a) $a^2 + b^2 = (a + b)^2$
   (b) $x^2 - 1 = (x - 1)(x + 1)$
   (c) $2x^2 - 8$ is completely factorised as $2(x^2 - 4)$.
   (d) $x^2 + 4$ cannot be factorised into real linear factors.

### Answers

1. (a) $\text{HCF} = 4x$. **$\mathbf{4x(2x - 3)}$**
   (b) $\text{HCF} = 5ab$. **$\mathbf{5ab(3a + 5b)}$**
   (c) $(a - b)$ is common. **$\mathbf{(a - b)(3x + 5y)}$**
2. (a) $x^2(x + 3) + 2(x + 3) = \mathbf{(x + 3)(x^2 + 2)}$
   (b) $x(y - 3) + 4(y - 3) = \mathbf{(y - 3)(x + 4)}$
3. (a) $(7x)^2 - 5^2 = \mathbf{(7x + 5)(7x - 5)}$
   (b) $(3y)^2 + 2(3y)(5) + 5^2 = \mathbf{(3y + 5)^2}$
   (c) $(4a)^2 - 2(4a)(3b) + (3b)^2 = \mathbf{(4a - 3b)^2}$
   (d) Take out $2x$ first: $2x(x^2 - 16) = \mathbf{2x(x + 4)(x - 4)}$
   (e) $(3p)^3 + 2^3 = \mathbf{(3p + 2)(9p^2 - 6p + 4)}$
4. (a) Product $20$, sum $9$: $4$ and $5$. **$\mathbf{(x + 4)(x + 5)}$**
   (b) Product $30$, sum $-11$: $-5$ and $-6$. **$\mathbf{(x - 5)(x - 6)}$**
   (c) Product $-12$, sum $1$: $4$ and $-3$. **$\mathbf{(x + 4)(x - 3)}$**
   (d) $a \times c = 24$, sum $10$: $4$ and $6$. $3x^2 + 4x + 6x + 8 = x(3x + 4) + 2(3x + 4) = \mathbf{(3x + 4)(x + 2)}$
5. (a) $(100 + 3)(100 - 3) = 100^2 - 3^2 = 10{,}000 - 9 = \mathbf{9,991}$
   (b) $(50 + 2)^2 = 2{,}500 + 200 + 4 = \mathbf{2,704}$
   (c) $(100 - 2)^2 = 10{,}000 - 400 + 4 = \mathbf{9,604}$
6. $p(-1) = -1 + 2 + 5 - 6 = 0$, so $(x + 1)$ is a factor. Dividing gives quotient $x^2 + x - 6 = (x + 3)(x - 2)$.
   **$\mathbf{(x + 1)(x + 3)(x - 2)}$**
   Check: $p(2) = 8 + 8 - 10 - 6 = 0$ ✅, $p(-3) = -27 + 18 + 15 - 6 = 0$ ✅
7. $(x^2)^2 - 4^2 = (x^2 + 4)(x^2 - 4) = \mathbf{(x^2 + 4)(x + 2)(x - 2)}$
8. $(a - b)^2 - 3^2 = \mathbf{(a - b + 3)(a - b - 3)}$
9. (a) **False.** $(a + b)^2 = a^2 + 2ab + b^2$. The middle term $2ab$ is missing.
   (b) **True.** It is a difference of two squares.
   (c) **False.** $x^2 - 4$ can be factorised further. Complete factorisation: $2(x + 2)(x - 2)$.
   (d) **True.** $x^2 + 4$ is a sum of squares, which cannot be split into real linear factors.

---

If seeing all these methods at once feels overwhelming, just remember one core habit: **common factor first, then count the terms.** Two terms point to $a^2 - b^2$ (or cubes), three terms point to a perfect square or middle-term splitting, and four terms point to grouping. Everything else falls into place with practice.

---

**In the next topic (Topic 2: Factorisation by Taking Out the Common Factor):** In this topic we only glimpsed the five methods. Now we will examine each one in depth, starting with Method 1: **taking out the common factor** — including finding the HCF of multi-variable terms, negative common factors, bracketed common factors, and the sign-flip trick ($b - a = -(a - b)$).
