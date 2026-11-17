# Chapter: Simultaneous Linear Equations (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [simultaneous-linear-equations-part2.md](simultaneous-linear-equations-part2.md)** (which covered elimination, clearing decimals/fractions, and choosing between substitution and elimination). The chapter begins in [simultaneous-linear-equations.md](simultaneous-linear-equations.md).
> **Topics covered in this file:**
> 3. Cross-Multiplication Method

---

# Topic 3: Cross-Multiplication Method

In the first two topics, we learned two methods: substitution and elimination. In Topic 2, subtracting the two smoothie receipts eliminated the lemonades right away, yet not every system is that cooperative. In Example 4 ($2x + 3y = 12$ and $3x + 4y = 17$), we first had to decide whether to eliminate $x$ or $y$, and then multiply the first equation by $3$ and the second by $2$. Now a natural question arises: is there a method where you do not have to decide which variable to cancel—just **plug in the coefficients and read out the answer**? Yes! That is the **cross-multiplication method**.

---

## Liam's "Formula Machine"

Liam is in Grade 9. In his weekly study group, Dr. Bennett gives out fresh pairs of linear equations every session. Liam already knows elimination well, yet he gets tired of asking himself the same questions every time: *"Should I eliminate $x$ or $y$? Multiply the first equation by $3$ or the second by $2$?"* One afternoon he joked, *"Dr. Bennett, I want something like a vending machine: press one button, get the drink. Drop in the coefficients, pop out $x$ and $y$—zero guesswork!"*

Dr. Bennett smiled. *"I cannot build a physical machine, but I can give you a **formula** that behaves just like one. Let us derive it once together using elimination—because a formula you build yourself is one you actually remember. After that, you can feed any pair of equations straight into it."*

Today, let us build that formula machine alongside Liam.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Standard form** | Writing an equation with all terms on one side and $0$ on the other | $2x + 3y - 13 = 0$ |
| **Coefficient** | The number multiplying $x$ or $y$ (including its sign) | In $2x - 5y - 7 = 0$, $a = 2, b = -5$ |
| **Constant term ($c$)** | The standalone number without a variable in standard form, with its sign | In $2x - 5y - 7 = 0$, $c = -7$ |
| **$a_1, b_1, c_1$** | The values of $a, b, c$ from the first equation | In $2x + 3y - 13 = 0$: $2, 3, -13$ |
| **$a_2, b_2, c_2$** | The values of $a, b, c$ from the second equation | In $3x + 2y - 12 = 0$: $3, 2, -12$ |
| **Cross-multiplication** | Multiplying pairs of coefficients diagonally and subtracting | $b_1 c_2 - b_2 c_1$ |

---

## Part A: Standard Form First, Then the Formula

### Standard Form: Everything Set to $= 0$

Any system of two linear equations can be written in **standard form**:

$$\begin{aligned}
\mathbf{a_1 x + b_1 y + c_1} &= \mathbf{0} \\
\mathbf{a_2 x + b_2 y + c_2} &= \mathbf{0}
\end{aligned}$$

Here $a_1, b_1, c_1, a_2, b_2, c_2$ are simply **numbers** (carrying their signs). Liam's very first step is always to bring both equations into this exact form.

Watch closely: if an equation is $2x + 3y = 13$, then $c_1$ is **$-13$, not $13$**, because moving $13$ to the left-hand side changes its sign: $2x + 3y - 13 = 0$.

| Given equation | Standard form | $a$ | $b$ | $c$ |
|---|---|---|---|---|
| $2x + 3y = 13$ | $2x + 3y - 13 = 0$ | $2$ | $3$ | $-13$ |
| $3x - 5y = 7$ | $3x - 5y - 7 = 0$ | $3$ | $-5$ | $-7$ |
| $x + 5 = 2y$ | $x - 2y + 5 = 0$ | $1$ | $-2$ | $5$ |
| $y = 4x - 3$ | $4x - y - 3 = 0$ | $4$ | $-1$ | $-3$ |
| $3x = -2y$ | $3x + 2y + 0 = 0$ | $3$ | $2$ | $0$ |

In the third row, bringing $2y$ to the left of $x + 5 = 2y$ gives $x + 5 - 2y = 0$, which we reorder cleanly as $x - 2y + 5 = 0$. In the last row, $c = 0$—zero is still a valid constant term, so do not leave it blank!

### Where Does the Formula Come From? (A Quick Derivation by Elimination)

Liam started right from elimination on the general system.

**First, solve for $x$ by eliminating $y$.** Multiply the first equation by $b_2$ and the second by $b_1$ so that $y$ has coefficient $b_1 b_2$ in both:

- $b_2(a_1 x + b_1 y + c_1) = 0 \implies a_1 b_2 x + b_1 b_2 y + b_2 c_1 = 0$
- $b_1(a_2 x + b_2 y + c_2) = 0 \implies a_2 b_1 x + b_1 b_2 y + b_1 c_2 = 0$

Subtract the second equation from the first ($b_1 b_2 y$ cancels):

$$(a_1 b_2 - a_2 b_1)x + (b_2 c_1 - b_1 c_2) = 0$$

Move the constant group to the right-hand side:

$$(a_1 b_2 - a_2 b_1)x = b_1 c_2 - b_2 c_1$$

**Next, solve for $y$ by eliminating $x$.** Multiply the first equation by $a_2$ and the second by $a_1$:

- $a_2(a_1 x + b_1 y + c_1) = 0 \implies a_1 a_2 x + a_2 b_1 y + a_2 c_1 = 0$
- $a_1(a_2 x + b_2 y + c_2) = 0 \implies a_1 a_2 x + a_1 b_2 y + a_1 c_2 = 0$

Subtract the first equation from the second ($a_1 a_2 x$ cancels):

$$(a_1 b_2 - a_2 b_1)y + (a_1 c_2 - a_2 c_1) = 0$$

Move the constant group to the right-hand side:

$$(a_1 b_2 - a_2 b_1)y = c_1 a_2 - c_2 a_1$$

**Put both together.** Both equations share the exact same factor $(a_1 b_2 - a_2 b_1)$! Dividing by it (assuming $a_1 b_2 - a_2 b_1 \neq 0$) yields:

$$x = \frac{b_1 c_2 - b_2 c_1}{a_1 b_2 - a_2 b_1}, \qquad y = \frac{c_1 a_2 - c_2 a_1}{a_1 b_2 - a_2 b_1}$$

Often this is written in one compact triple-fraction form:

$$\mathbf{\frac{x}{b_1 c_2 - b_2 c_1} = \frac{y}{c_1 a_2 - c_2 a_1} = \frac{1}{a_1 b_2 - a_2 b_1}}$$

This says the exact same thing: pairing the first and third fractions gives $x$, while pairing the second and third fractions gives $y$.

### The Arrow-Diagram Trick (To Remember the Formula)

Memorising six subscripted letters in three differences is error-prone, so Liam uses a neat visual trick. Write the coefficients in two rows in the cyclic order **$b, c, a, b$**:

```
        x          y          1
     --------   --------   --------
     b1   c1     c1   a1     a1   b1
       \ /         \ /         \ /
        X           X           X
       / \         / \         / \
     b2   c2     c2   a2     a2   b2
```

In each block, multiply **top-left to bottom-right** ($\searrow$) with a **plus**, and subtract **bottom-left to top-right** ($\nearrow$):

- Under $x$: $b_1 c_2 - b_2 c_1$
- Under $y$: $c_1 a_2 - c_2 a_1$
- Under $1$: $a_1 b_2 - a_2 b_1$

In other words, each denominator is simply: $(\text{top-left} \times \text{bottom-right}) - (\text{bottom-left} \times \text{top-right})$. Once you spot that pattern, you never need to memorise the formula—just draw the diagram! And because the arrows cross each other, the method is called **cross-multiplication**.

Remember: the column order is always **$b, c, a, b$**. In "Common Pitfalls to Avoid," we will see what happens if that order slips.

### One Consistent Routine for Every Problem

Liam's formula machine runs in five fixed steps:

> **Step 1:** Rewrite both equations in standard form ($= 0$). Clear any fractions or decimals first.
> **Step 2:** List $a_1, b_1, c_1$ and $a_2, b_2, c_2$ carefully with their signs.
> **Step 3:** Compute the three cross-products: $X = b_1 c_2 - b_2 c_1$, $Y = c_1 a_2 - c_2 a_1$, and $D = a_1 b_2 - a_2 b_1$.
> **Step 4:** Calculate $x = \dfrac{X}{D}$ and $y = \dfrac{Y}{D}$.
> **Step 5:** Check $(x, y)$ in both original equations.

---

## Part B: Solved Examples

### Example 1: Clean Positive Numbers

Solve: $2x + 3y = 13$ and $3x + 2y = 12$.

**Step 1 (Standard form):**
- $2x + 3y - 13 = 0 \implies a_1 = 2,\; b_1 = 3,\; c_1 = -13$
- $3x + 2y - 12 = 0 \implies a_2 = 3,\; b_2 = 2,\; c_2 = -12$

**Step 2 (Cross-products):**
- $X = b_1 c_2 - b_2 c_1 = 3(-12) - 2(-13) = -36 + 26 = \mathbf{-10}$
- $Y = c_1 a_2 - c_2 a_1 = (-13)(3) - (-12)(2) = -39 + 24 = \mathbf{-15}$
- $D = a_1 b_2 - a_2 b_1 = (2)(2) - (3)(3) = 4 - 9 = \mathbf{-5}$

**Step 3 (Divide):**
- $x = \dfrac{X}{D} = \dfrac{-10}{-5} = \mathbf{2}$
- $y = \dfrac{Y}{D} = \dfrac{-15}{-5} = \mathbf{3}$

**Check:**
- $2(2) + 3(3) = 4 + 9 = 13$ ✅
- $3(2) + 2(3) = 6 + 6 = 12$ ✅

Notice that all three cross-products turned out negative, yet dividing negative by negative gave positive answers. Getting negative values for $X$, $Y$, or $D$ is completely normal.

### Example 2: A Negative Coefficient

Solve: $3x - 5y = 7$ and $2x + y = 9$.

**Standard form:**
- $3x - 5y - 7 = 0 \implies a_1 = 3,\; b_1 = -5,\; c_1 = -7$
- $2x + y - 9 = 0 \implies a_2 = 2,\; b_2 = 1,\; c_2 = -9$

**Cross-products:**
- $X = b_1 c_2 - b_2 c_1 = (-5)(-9) - (1)(-7) = 45 + 7 = \mathbf{52}$
- $Y = c_1 a_2 - c_2 a_1 = (-7)(2) - (-9)(3) = -14 + 27 = \mathbf{13}$
- $D = a_1 b_2 - a_2 b_1 = (3)(1) - (2)(-5) = 3 + 10 = \mathbf{13}$

**Answer:**
- $x = \dfrac{52}{13} = \mathbf{4}$
- $y = \dfrac{13}{13} = \mathbf{1}$

**Check:**
- $3(4) - 5(1) = 12 - 5 = 7$ ✅
- $2(4) + 1 = 8 + 1 = 9$ ✅

Look closely at $-(1)(-7) = +7$: subtracting a negative adds a positive. Signs like that are the easiest place to slip.

### Example 3: Rearranging an Equation First

Solve: $4x + 3y = 2$ and $x + 5 = 2y$.

Move every term in the second equation to the left-hand side: $x + 5 - 2y = 0$, or $x - 2y + 5 = 0$.

**Standard form:**
- $4x + 3y - 2 = 0 \implies a_1 = 4,\; b_1 = 3,\; c_1 = -2$
- $x - 2y + 5 = 0 \implies a_2 = 1,\; b_2 = -2,\; c_2 = 5$

**Cross-products:**
- $X = b_1 c_2 - b_2 c_1 = (3)(5) - (-2)(-2) = 15 - 4 = \mathbf{11}$
- $Y = c_1 a_2 - c_2 a_1 = (-2)(1) - (5)(4) = -2 - 20 = \mathbf{-22}$
- $D = a_1 b_2 - a_2 b_1 = (4)(-2) - (1)(3) = -8 - 3 = \mathbf{-11}$

**Answer:**
- $x = \dfrac{11}{-11} = \mathbf{-1}$
- $y = \dfrac{-22}{-11} = \mathbf{2}$

**Check:**
- $4(-1) + 3(2) = -4 + 6 = 2$ ✅
- $(-1) + 5 = 4$ and $2y = 2(2) = 4$ ✅

### Example 4: Equations with Fractions

Solve: $\dfrac{x}{3} + \dfrac{y}{2} = 1$ and $\dfrac{x}{6} - \dfrac{y}{4} = \dfrac{3}{2}$.

Clear the fractions first, just as in Topic 2:
- Multiply the first equation by $6$ ($\text{LCM}$ of $3$ and $2$): $2x + 3y = 6$
- Multiply the second equation by $12$ ($\text{LCM}$ of $6, 4, 2$): $2x - 3y = 18$

**Standard form:**
- $2x + 3y - 6 = 0 \implies a_1 = 2,\; b_1 = 3,\; c_1 = -6$
- $2x - 3y - 18 = 0 \implies a_2 = 2,\; b_2 = -3,\; c_2 = -18$

**Cross-products:**
- $X = b_1 c_2 - b_2 c_1 = (3)(-18) - (-3)(-6) = -54 - 18 = \mathbf{-72}$
- $Y = c_1 a_2 - c_2 a_1 = (-6)(2) - (-18)(2) = -12 + 36 = \mathbf{24}$
- $D = a_1 b_2 - a_2 b_1 = (2)(-3) - (2)(3) = -6 - 6 = \mathbf{-12}$

**Answer:**
- $x = \dfrac{-72}{-12} = \mathbf{6}$
- $y = \dfrac{24}{-12} = \mathbf{-2}$

**Check (in the original fractional equations):**
- $\dfrac{6}{3} + \dfrac{-2}{2} = 2 - 1 = 1$ ✅
- $\dfrac{6}{6} - \dfrac{-2}{4} = 1 + 0.5 = 1.5 = \dfrac{3}{2}$ ✅

### Example 5: Mixed Coefficients

Solve: $7x - 2y = 3$ and $3x + 5y = 13$.

**Standard form:**
- $7x - 2y - 3 = 0 \implies a_1 = 7,\; b_1 = -2,\; c_1 = -3$
- $3x + 5y - 13 = 0 \implies a_2 = 3,\; b_2 = 5,\; c_2 = -13$

**Cross-products:**
- $X = b_1 c_2 - b_2 c_1 = (-2)(-13) - (5)(-3) = 26 + 15 = \mathbf{41}$
- $Y = c_1 a_2 - c_2 a_1 = (-3)(3) - (-13)(7) = -9 + 91 = \mathbf{82}$
- $D = a_1 b_2 - a_2 b_1 = (7)(5) - (3)(-2) = 35 + 6 = \mathbf{41}$

**Answer:**
- $x = \dfrac{41}{41} = \mathbf{1}$
- $y = \dfrac{82}{41} = \mathbf{2}$

**Check:**
- $7(1) - 2(2) = 7 - 4 = 3$ ✅
- $3(1) + 5(2) = 3 + 10 = 13$ ✅

Liam computed those three cross-products without ever pausing to decide which variable to eliminate—his formula machine worked smoothly.

---

## Part C: When the Denominator Becomes $0$

In our formula, we divide by $D = a_1 b_2 - a_2 b_1$. Because division by zero is undefined, what happens when a system produces $D = 0$?

Take a quick look at $2x + 3y = 5$ and $4x + 6y = 10$. Here $a_1 = 2, b_1 = 3, a_2 = 4, b_2 = 6$, so $D = (2)(6) - (4)(3) = 12 - 12 = \mathbf{0}$.

Whenever $D = 0$, the system either has **no solution at all** or **infinitely many solutions**. The formula cannot produce a single pair $(x, y)$. In **Topic 4**, we will see exactly what these two cases look like on a graph and how to tell them apart instantly. For now, remember: **if $D = 0$, stop—never write $x = \dfrac{X}{0}$.**

---

## Common Pitfalls to Avoid

1. **Mistake 1: Reading $c$ before rewriting the equation in "$= 0$" standard form.**
   For $2x + 3y = 13$, taking $c_1 = 13$ instead of $-13$ ruins both $X$ and $Y$.
   - Wrong: plugging $c_1 = 13$ into $X = b_1 c_2 - b_2 c_1$.
   - Right: first rewrite as $2x + 3y - 13 = 0$, so $c_1 = -13$.
   Make it a strict habit: **never list $a, b, c$ until you see "$= 0$" on the right.**

2. **Mistake 2: Sign slips inside the cross-products.**
   In Example 2, $b_1 c_2 = (-5)(-9) = \mathbf{+45}$ (not $-45$), and $-b_2 c_1 = -(1)(-7) = \mathbf{+7}$. Skipping parentheses around negative numbers causes most errors here.
   **Good habit:** wrap every negative value in parentheses, like $(-5)(-9) - (1)(-7)$.

3. **Mistake 3: Reversing the subtraction order in one of the blocks.**
   The formula uses $b_1 c_2 - b_2 c_1$. Swapping it to $b_2 c_1 - b_1 c_2$ flips the sign of $X$. Even worse, if you reverse $D$ without reversing $X$, your answer for $x$ gets the wrong sign!
   For instance, in Example 1, taking $D = a_2 b_1 - a_1 b_2 = 9 - 4 = +5$ while keeping $X = -10$ gives $x = -10 \div 5 = -2$, which fails the check immediately. Always follow the **exact same arrow direction** in all three blocks of the $b, c, a, b$ diagram.

4. **Mistake 4: Getting the $c, a$ order backward for $y$.**
   Under $y$, the order is **$c_1 a_2 - c_2 a_1$**, *not* $a_1 c_2 - a_2 c_1$. That is why the diagram places $c$ on the left and $a$ on the right under $y$ ($b, c, a, b$). Reversing that block flips the sign of $y$.

5. **Mistake 5: Skipping the check.**
   Verification is not just busywork—it instantly catches any hidden sign slip. Plug your $(x, y)$ into both original equations before moving on.

---

## Quick Recap

- First rewrite both equations in standard form: **$a_1 x + b_1 y + c_1 = 0$** and **$a_2 x + b_2 y + c_2 = 0$**. Watch the sign of $c$: from $2x + 3y = 13$, we get $c = \mathbf{-13}$.
- **Cross-multiplication formula:**
  $$\frac{x}{b_1 c_2 - b_2 c_1} = \frac{y}{c_1 a_2 - c_2 a_1} = \frac{1}{a_1 b_2 - a_2 b_1}$$
- This formula is simply elimination condensed into one step: eliminating $y$ gives $x$, and eliminating $x$ gives $y$.
- **Arrow diagram:** write two rows in the order **$b, c, a, b$**; in each block compute $(\text{top-left} \times \text{bottom-right}) - (\text{bottom-left} \times \text{top-right})$.
- Compute $X = b_1 c_2 - b_2 c_1$, $Y = c_1 a_2 - c_2 a_1$, $D = a_1 b_2 - a_2 b_1$, then $x = \dfrac{X}{D}$ and $y = \dfrac{Y}{D}$.
- Clear fractions or decimals before converting to standard form.
- If **$D = 0$**, stop—the system has either no solution or infinitely many solutions (covered in Topic 4).
- Always check your answer in **both** original equations.

---

## Practice Questions

1. Solve using the cross-multiplication method: $3x + y = 10$ and $x + 2y = 5$. Verify your answer.

2. Solve: $5x - 3y = 1$ and $2x + y = 7$. List $a_1, b_1, c_1, a_2, b_2, c_2$ clearly before applying the formula.

3. Solve: $2x + y = -1$ and $3x = -2y$. *(Hint: what is the value of $c_2$ in standard form?)*

4. Solve: $\dfrac{x}{3} + \dfrac{y}{2} = 4$ and $\dfrac{x}{2} - \dfrac{y}{4} = 2$. Clear the fractions first, then use cross-multiplication.

5. Solve: $2x + 5y = 1$ and $3x + 2y = -4$.

6. A student solves $3x + 2y = 12$ and $x - y = 1$ by writing $c_1 = 12$ and $c_2 = 1$. What went wrong? Find the correct solution.

7. For the system $4x + 6y = 10$ and $2x + 3y = 5$, compute $a_1 b_2 - a_2 b_1$. Can you now find $x$ and $y$ directly from the formula? Why or why not?

8. State whether each statement is True or False:
   (a) Before using the formula, both equations must be written in the form $ax + by + c = 0$.
   (b) For the equation $2x + 3y = 5$, the value of $c$ in standard form is $5$.
   (c) The denominator $a_1 b_2 - a_2 b_1$ is the same for both $x$ and $y$.
   (d) The formula can be used directly even when $a_1 b_2 - a_2 b_1 = 0$.

### Answers

1. Standard form: $3x + y - 10 = 0$ and $x + 2y - 5 = 0$. So $a_1 = 3, b_1 = 1, c_1 = -10$ and $a_2 = 1, b_2 = 2, c_2 = -5$.
   - $X = b_1 c_2 - b_2 c_1 = (1)(-5) - (2)(-10) = -5 + 20 = 15$
   - $Y = c_1 a_2 - c_2 a_1 = (-10)(1) - (-5)(3) = -10 + 15 = 5$
   - $D = a_1 b_2 - a_2 b_1 = (3)(2) - (1)(1) = 5$
   - $x = 15 \div 5 = \mathbf{3}$, $y = 5 \div 5 = \mathbf{1}$
   Check: $3(3) + 1 = 10$ ✅, $3 + 2(1) = 5$ ✅

2. Standard form: $5x - 3y - 1 = 0$ and $2x + y - 7 = 0$. So $a_1 = 5, b_1 = -3, c_1 = -1$ and $a_2 = 2, b_2 = 1, c_2 = -7$.
   - $X = (-3)(-7) - (1)(-1) = 21 + 1 = 22$
   - $Y = (-1)(2) - (-7)(5) = -2 + 35 = 33$
   - $D = (5)(1) - (2)(-3) = 5 + 6 = 11$
   - $x = 22 \div 11 = \mathbf{2}$, $y = 33 \div 11 = \mathbf{3}$
   Check: $5(2) - 3(3) = 10 - 9 = 1$ ✅, $2(2) + 3 = 7$ ✅

3. Standard form: $2x + y + 1 = 0$ and $3x + 2y + 0 = 0$. So $a_1 = 2, b_1 = 1, c_1 = 1$ and $a_2 = 3, b_2 = 2, c_2 = \mathbf{0}$ (answering the hint: $c_2 = 0$).
   - $X = (1)(0) - (2)(1) = -2$
   - $Y = (1)(3) - (0)(2) = 3$
   - $D = (2)(2) - (3)(1) = 1$
   - $x = -2 \div 1 = \mathbf{-2}$, $y = 3 \div 1 = \mathbf{3}$
   Check: $2(-2) + 3 = -1$ ✅, $3(-2) = -6$ and $-2(3) = -6$ ✅

4. Multiply the first equation by $6$: $2x + 3y = 24$. Multiply the second by $4$: $2x - y = 8$.
   Standard form: $2x + 3y - 24 = 0$ and $2x - y - 8 = 0$. So $a_1 = 2, b_1 = 3, c_1 = -24$ and $a_2 = 2, b_2 = -1, c_2 = -8$.
   - $X = (3)(-8) - (-1)(-24) = -24 - 24 = -48$
   - $Y = (-24)(2) - (-8)(2) = -48 + 16 = -32$
   - $D = (2)(-1) - (2)(3) = -2 - 6 = -8$
   - $x = -48 \div (-8) = \mathbf{6}$, $y = -32 \div (-8) = \mathbf{4}$
   Check: $\dfrac{6}{3} + \dfrac{4}{2} = 2 + 2 = 4$ ✅, $\dfrac{6}{2} - \dfrac{4}{4} = 3 - 1 = 2$ ✅

5. Standard form: $2x + 5y - 1 = 0$ and $3x + 2y + 4 = 0$. So $a_1 = 2, b_1 = 5, c_1 = -1$ and $a_2 = 3, b_2 = 2, c_2 = 4$.
   - $X = (5)(4) - (2)(-1) = 20 + 2 = 22$
   - $Y = (-1)(3) - (4)(2) = -3 - 8 = -11$
   - $D = (2)(2) - (3)(5) = 4 - 15 = -11$
   - $x = 22 \div (-11) = \mathbf{-2}$, $y = -11 \div (-11) = \mathbf{1}$
   Check: $2(-2) + 5(1) = -4 + 5 = 1$ ✅, $3(-2) + 2(1) = -6 + 2 = -4$ ✅

6. Mistake: the equations were not rewritten in "$= 0$" standard form. $3x + 2y = 12$ becomes $3x + 2y - 12 = 0$, so $c_1 = \mathbf{-12}$; similarly $x - y = 1$ becomes $x - y - 1 = 0$, so $c_2 = \mathbf{-1}$.
   Thus $a_1 = 3, b_1 = 2, c_1 = -12$ and $a_2 = 1, b_2 = -1, c_2 = -1$.
   - $X = (2)(-1) - (-1)(-12) = -2 - 12 = -14$
   - $Y = (-12)(1) - (-1)(3) = -12 + 3 = -9$
   - $D = (3)(-1) - (1)(2) = -3 - 2 = -5$
   - $x = -14 \div (-5) = \mathbf{\dfrac{14}{5}}$, $y = -9 \div (-5) = \mathbf{\dfrac{9}{5}}$
   Check: $3\left(\dfrac{14}{5}\right) + 2\left(\dfrac{9}{5}\right) = \dfrac{42}{5} + \dfrac{18}{5} = \dfrac{60}{5} = 12$ ✅, $\dfrac{14}{5} - \dfrac{9}{5} = \dfrac{5}{5} = 1$ ✅

7. $a_1 = 4, b_1 = 6, a_2 = 2, b_2 = 3$. Then $D = (4)(3) - (2)(6) = 12 - 12 = \mathbf{0}$. No, you cannot find $x$ and $y$ from the formula, because $x = \dfrac{X}{D}$ would require dividing by $0$, which is undefined. Such a system has either no solution or infinitely many solutions—we will examine this in Topic 4.

8. (a) **True** ✅. Rewriting in $ax + by + c = 0$ form first is essential.
   (b) **False** ❌. In standard form it is $2x + 3y - 5 = 0$, so $c = -5$.
   (c) **True** ✅. Both $x$ and $y$ share the same denominator $D = a_1 b_2 - a_2 b_1$.
   (d) **False** ❌. When $D = 0$, the formula would divide by zero, so it cannot be applied.

---

Liam's formula machine is now ready: standard form, three cross-products, two divisions, and a check. With a little practice, it becomes automatic and cuts out all the guesswork.

**What's next?** So far we have solved systems purely with numbers and algebra. In Topic 4, we will **plot the equations as straight lines on a graph**: we will see where two lines meet, and discover what happens visually when $D = 0$—giving us the real meaning behind "no solution" and "infinitely many solutions."
