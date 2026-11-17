# Chapter: Linear Equations in Two Variables

> **Class:** 9 | **Subject:** Mathematics
> **This marks the start of a new chapter.** Several ideas from the [Polynomials](../polynomials/polynomials.md) chapter will come in handy here — especially variables, constants, and degree ([Polynomials Topic 4](../polynomials/polynomials-part3.md)).
> **Topics covered in this file:**
> 1. Introduction, Linear Equations in Two Variables, and Their Solutions

---

# Topic 1: Introduction, Linear Equations in Two Variables, and Their Solutions

In the Polynomials chapter, we learned about **variables** (letters that can change value), **constants**, and **degree** (the highest power of the variable). Back then, we worked with expressions such as $3x + 5$. Now we take the next step forward and work with **equations** — mathematical statements that contain an **equals sign ($=$)**. And this time, instead of just one variable, we will have **two variables**.

---

## A School Café Story

**Day 1.** Maya walks into the school café. She buys **$2$ notebooks** and a **pencil for \$3**. Her total bill comes to **\$11**. What was the price of one notebook?

Let the price of one notebook be **$x$ dollars**. Then:

$$2x + 3 = 11$$

This is an equation with only **one variable ($x$)**. Let us solve it:

- $2x = 11 - 3 = 8$
- $x = \mathbf{4}$

Each notebook cost **\$4**. Notice something important: **there is only one solution for $x$: $4$.** If you substitute any other number, the total bill will not be \$11.

**Day 2.** The next day, Leo visits the café. He buys **$2$ sandwiches** and **$1$ smoothie**, paying **\$30** in total. However, he does not remember the individual price of a sandwich or a smoothie.

Let one sandwich cost **$x$ dollars** and one smoothie cost **$y$ dollars**. Then:

$$2x + y = 30$$

Now this equation has **two variables ($x$ and $y$)**. Does it have only one answer? Take a look:

| Sandwich ($x$) | Smoothie ($y$) | Total Bill $= 2x + y$ |
|---|---|---|
| \$10 | \$10 | $20 + 10 = \$30$ |
| \$12 | \$6 | $24 + 6 = \$30$ |
| \$5 | \$20 | $10 + 20 = \$30$ |
| \$14 | \$2 | $28 + 2 = \$30$ |

Every single pair gives a bill of **\$30**! That means **there can be many solutions.** From this one piece of information alone, we cannot tell for certain what a sandwich cost. (To pin down one exact price for each item, we would need a second piece of information — a topic you will explore in later chapters on simultaneous linear equations.)

In this topic, we will understand the equation from Day 2: a **linear equation in two variables**, and how to find and check its **solutions**.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Equation** | A mathematical statement containing an equals sign ($=$) | $2x + 3 = 11$ |
| **Linear equation in one variable** | An equation with just one variable raised to the power $1$ | $2x + 3 = 11$ |
| **Linear equation in two variables** | An equation with two variables, each raised to the power $1$, and not multiplied together | $2x + y = 30$ |
| **Standard form** | Writing a linear equation in two variables in the form $ax + by + c = 0$ | $2x + y - 30 = 0$ |
| **Solution** | A pair of values for the variables that makes the equation true | $x = 10, y = 10$ |
| **Ordered pair** | A pair of numbers $(x, y)$ written in a specific order where position matters | $(10, 10)$, $(12, 6)$ |
| **Infinitely many** | More than you could ever finish counting; endless | The solutions of $2x + y = 30$ |

---

## Part A: Linear Equations in One Variable (A Quick Refresher)

You already studied this in earlier grades, so let us do a quick review.

A **linear equation in one variable** is an equation that contains **only one variable**, and the highest power of that variable is **$1$**.

Examples:
- $2x + 3 = 11$
- $5y - 7 = 8$
- $\frac{x}{2} = 6$

Think of an equation like a **balance scale**. Both pans hold equal weight. Whatever operation you perform on one side, you must also perform on the other side so the scale stays balanced.

**$5y - 7 = 8$**
- Add $7$ to both sides: $5y = 15$
- Divide both sides by $5$: $y = \mathbf{3}$

Check: $5(3) - 7 = 15 - 7 = 8$ ✅

### Why Does It Have Only One Solution?

Because there is only **one unknown** ($y$), and we are given **one complete piece of information** (one equation) about it. One unknown with one equation gives **one unique answer**.

In the Day 2 café story, there were **two unknowns** (the price of a sandwich and the price of a smoothie), yet only **one** piece of information. That is why we did not get a single unique answer — we got many possible pairs instead.

---

## Part B: Linear Equation in Two Variables

### Definition

> A **linear equation in two variables** is an equation that has **two variables** (such as $x$ and $y$), where **both variables have power $1$**, and the two variables are **not multiplied together**.

Its **standard form** is:

> $$ax + by + c = 0$$
>
> where $a$, $b$, and $c$ are real numbers, and **$a$ and $b$ are not both zero** at the same time.

- **$a$** $=$ coefficient of $x$
- **$b$** $=$ coefficient of $y$
- **$c$** $=$ constant term

*(We saw what coefficients and constant terms mean at the start of the Polynomials chapter.)*

### Why the Name "Linear"?

In Topic 4 of the Polynomials chapter, we learned that a polynomial of **degree $1$** is called **linear**. The same rule applies here: both $x$ and $y$ are raised to the power $1$, so the equation is called **linear**.

There is also a second, visual reason behind the word "linear" — and we will uncover it in the next topic!

### Identifying $a$, $b$, and $c$

First, rearrange the equation into the form **$ax + by + c = 0$** — meaning move **all terms to the left-hand side** so that only **$0$** remains on the right-hand side. Then read off $a$, $b$, and $c$.

**Example 1:** $2x + 3y = 12$
Move all terms to the left: $2x + 3y - 12 = 0$
**$a = 2$, $b = 3$, $c = -12$**

Notice that $c = \mathbf{-12}$, not $12$. Moving a term from the right side to the left side changes its sign.

**Example 2:** $x - 5y = 0$
This is already in standard form ($1x - 5y + 0 = 0$).
**$a = 1$, $b = -5$, $c = 0$**

**Example 3:** $y = 3x + 2$
Move all terms to the left: $y - 3x - 2 = 0$. Writing the $x$-term first gives $-3x + y - 2 = 0$.
**$a = -3$, $b = 1$, $c = -2$**

Alternatively, you could move all terms to the **right-hand side**: $0 = 3x - y + 2$, or $3x - y + 2 = 0$, giving $a = 3, b = -1, c = 2$. **Both forms are completely valid**, because multiplying an entire equation by $-1$ turns one form into the other. Just be consistent: whichever form you write down, read $a$, $b$, and $c$ from that same form.

**Example 4:** $4x = 7$
Here, there is no $y$-term visible. We can write it using a $0$ placeholder: $4x + \mathbf{0 \cdot y} - 7 = 0$
**$a = 4$, $b = 0$, $c = -7$**

**Example 5:** $y = -2$
Here, $x$ is missing, so write: $\mathbf{0 \cdot x} + y + 2 = 0$
**$a = 0$, $b = 1$, $c = 2$**

**Example 6 (with fractions):** $\frac{x}{2} + \frac{y}{3} = 1$
To clear the fractions, multiply both sides by **$6$** (the LCM of $2$ and $3$):
$3x + 2y = 6$
$3x + 2y - 6 = 0$
**$a = 3$, $b = 2$, $c = -6$**

**Example 7 (with brackets):** $3(x - y) = 2x + 1$
Expand the bracket: $3x - 3y = 2x + 1$
Move everything to the left: $3x - 3y - 2x - 1 = 0$
Combine like terms: **$x - 3y - 1 = 0$**
**$a = 1$, $b = -3$, $c = -1$**

Check (by substituting a test pair): pick $x = 4, y = 1$. Original equation: $3(4 - 1) = 9$, and $2(4) + 1 = 9$. Equal ✅. Standard form: $4 - 3(1) - 1 = 0$ ✅

### Which Equations Are Linear in Two Variables, and Which Are Not?

| Equation | Linear in two variables? | Why |
|---|---|---|
| $2x + 3y = 7$ | **Yes** | Two variables, both with power $1$ |
| $4x = 3y$ | **Yes** | Rewrites as $4x - 3y = 0$, both powers are $1$ |
| $\frac{x}{2} + \frac{y}{3} = 1$ | **Yes** | Fractions are only in the coefficients; powers of $x$ and $y$ are $1$ |
| $x^2 + y = 5$ | **No** | Power of $x$ is $2$ |
| $xy = 6$ | **No** | $x$ and $y$ are multiplied together; the term $xy$ has degree $1 + 1 = 2$ |
| $\frac{1}{x} + y = 2$ | **No** | $\frac{1}{x} = x^{-1}$, so the power of $x$ is $-1$ (not $1$) |
| $\sqrt{x} + y = 3$ | **No** | $\sqrt{x} = x^{1/2}$, so the power of $x$ is $\frac{1}{2}$ |
| $0x + 0y + 5 = 0$ | **No** | Both $a$ and $b$ are zero — this reduces to "$5 = 0$", which is false |
| $x = 3$ | **Yes, in a sense** | Can be written as $1 \cdot x + 0 \cdot y - 3 = 0$ (see the end of Part C) |

### Translating Word Statements into Equations

Turning a word problem into an algebraic equation is one of the most useful skills in this chapter. First decide clearly what **$x$** represents and what **$y$** represents, then write the equation.

**Example 1:** The sum of two numbers is $25$.
Let the first number be $x$ and the second number be $y$.
$$x + y = 25$$

**Example 2:** In a basketball game, Maya and Leo scored $176$ points together.
Let Maya's points be $x$ and Leo's points be $y$.
$$x + y = 176$$

**Example 3:** The cost of a pen is \$5 more than twice the cost of a pencil.
Let the pen cost $\$x$ and the pencil cost $\$y$.
$x = 2y + 5$, or **$x - 2y - 5 = 0$**

**Example 4:** Elena's age is $3$ times her brother's age.
Let Elena's age be $x$ years and her brother's age be $y$ years.
$x = 3y$, or **$x - 3y = 0$**

**Example 5:** A rectangle has length $x\text{ cm}$, breadth $y\text{ cm}$, and a perimeter of $40\text{ cm}$.
Perimeter $= 2(\text{length} + \text{breadth})$
**$2x + 2y = 40$**, or dividing both sides by $2$, **$x + y = 20$**

**Example 6:** Three times a number is $7$ more than twice another number.
$3x = 2y + 7$, or **$3x - 2y - 7 = 0$**

---

## Part C: Solution of a Linear Equation

### What Is a Solution?

In our café story, setting a sandwich to \$10 and a smoothie to \$10 made $2x + y = 30$ true. So **$x = 10, y = 10$** is a **solution** of that equation.

> A **solution** of a linear equation in two variables is a **pair of values** for $x$ and $y$ that makes the **left-hand side (LHS) equal to the right-hand side (RHS)** of the equation.

### Ordered Pairs: How We Write a Solution

Instead of writing "$x = 10, y = 10$" every time, we use a compact shorthand:

$$(10, 10)$$

This is called an **ordered pair**. The rule is fixed:

> **$(x, y)$**: the **$x$-value** always comes first, followed by the **$y$-value**. Always in that order.

### Why Does Order Matter?

Imagine holding a cinema ticket that says: "**Row $5$, Seat $3$**". If you accidentally walk to "Row $3$, Seat $5$", you are sitting in someone else's seat! The numbers are the same, yet swapping their order changes the location completely.

Equations work the exact same way. Look at **$2x + y = 7$**:

- **$(2, 3)$:** $x = 2, y = 3 \implies 2(2) + 3 = 4 + 3 = 7$ ✅ **Is a solution**
- **$(3, 2)$:** $x = 3, y = 2 \implies 2(3) + 2 = 6 + 2 = 8$ ❌ **Is NOT a solution**

Same numbers, different order, different outcome. That is why we call it an **ordered** pair.

### How to Check Whether a Pair Is a Solution

1. Substitute the **first number for $x$** and the **second number for $y$**.
2. Compute the left-hand side (LHS).
3. Compare it with the right-hand side (RHS). If they match, it is a solution; if not, it is not.

**Example:** Which of these pairs are solutions of **$x + 2y = 8$**?

| Pair | $x + 2y$ | Equal to $8$? |
|---|---|---|
| $(2, 3)$ | $2 + 6 = 8$ | ✅ Yes |
| $(4, 2)$ | $4 + 4 = 8$ | ✅ Yes |
| $(1, 3)$ | $1 + 6 = 7$ | ❌ No |
| $(0, 4)$ | $0 + 8 = 8$ | ✅ Yes |
| $(8, 0)$ | $8 + 0 = 8$ | ✅ Yes |
| $(-2, 5)$ | $-2 + 10 = 8$ | ✅ Yes |

Notice that negative numbers can also be part of valid solutions.

### How to Find Solutions Yourself

Here is the easiest method:

1. Rearrange the equation to express **$y$ in terms of $x$** (get $y$ alone on one side).
2. **Choose any value for $x$.**
3. Calculate the matching value of $y$.
4. Organize your pairs in a **table**.

**Example 1:** The café equation **$2x + y = 30$**

Step 1: $y = 30 - 2x$

| $x$ (chosen) | $y = 30 - 2x$ | Solution |
|---|---|---|
| $5$ | $30 - 10 = 20$ | $(5, 20)$ |
| $10$ | $30 - 20 = 10$ | $(10, 10)$ |
| $12$ | $30 - 24 = 6$ | $(12, 6)$ |
| $15$ | $30 - 30 = 0$ | $(15, 0)$ |
| $20$ | $30 - 40 = -10$ | $(20, -10)$ |

Look closely at the last row: $(20, -10)$. Mathematically, it is a completely valid solution because $2(20) + (-10) = 40 - 10 = 30$ ✅. However, in real life, a smoothie cannot cost $-\$10$! Whenever an equation comes from a real-world story, always check whether a solution **makes sense in that situation**.

**Example 2:** **$3x + 2y = 12$**

Step 1: $2y = 12 - 3x$, so **$y = \frac{12 - 3x}{2}$**

| $x$ | $y = \frac{12 - 3x}{2}$ | Solution |
|---|---|---|
| $0$ | $\frac{12}{2} = 6$ | $(0, 6)$ |
| $2$ | $\frac{6}{2} = 3$ | $(2, 3)$ |
| $4$ | $\frac{0}{2} = 0$ | $(4, 0)$ |
| $-2$ | $\frac{18}{2} = 9$ | $(-2, 9)$ |
| $1$ | $\frac{9}{2} = 4.5$ | $\left(1, \frac{9}{2}\right)$ |

Check $\left(1, \frac{9}{2}\right)$: $3(1) + 2\left(\frac{9}{2}\right) = 3 + 9 = 12$ ✅

**Tip:** Try to pick values of $x$ that give whole-number values for $y$. Here, choosing even values of $x$ ($0, 2, 4, -2$) gave integer values for $y$. That said, fractional solutions like $\left(1, \frac{9}{2}\right)$ are just as mathematically valid.

### How Many Solutions Are There?

In our table, you can plug **any number** into $x$: $1$, $2$, $100$, $-7$, $\frac{1}{2}$, $0.35$, and so on. For every $x$ you choose, you get a matching $y$. Since numbers never run out:

> **A linear equation in two variables has infinitely many solutions.**

Keep the contrast with Part A clear in your mind:

| Type | Equation | Number of solutions |
|---|---|---|
| One variable | $2x + 3 = 11$ | **Only one** ($x = 4$) |
| Two variables | $2x + y = 30$ | **Infinitely many** |

### The Two Easiest Solutions: Setting $x = 0$ and $y = 0$

Often, the fastest way to find two clean solutions is to set **$x = 0$** once, and then set **$y = 0$** once.

**Example:** **$3x + 2y = 12$**
- Set $x = 0$: $2y = 12 \implies y = 6 \implies \mathbf{(0, 6)}$
- Set $y = 0$: $3x = 12 \implies x = 4 \implies \mathbf{(4, 0)}$

**Example:** **$4x - 3y = 12$**
- Set $x = 0$: $-3y = 12 \implies y = -4 \implies \mathbf{(0, -4)}$
- Set $y = 0$: $4x = 12 \implies x = 3 \implies \mathbf{(3, 0)}$

Check $(0, -4)$: $4(0) - 3(-4) = 0 + 12 = 12$ ✅

These two particular solutions will become super useful when we draw graphs in Topic 2.

### Finding $k$ When a Solution Is Given

If a problem tells you that a certain ordered pair is a solution, substitute those values into the equation. Since the equation must hold true, you can solve for the unknown constant $k$.

**Example 1:** If **$(2, 1)$** is a solution of **$3x + ky = 10$**, find $k$.

Substitute $x = 2$ and $y = 1$:
$3(2) + k(1) = 10$
$6 + k = 10$
**$k = 4$**

Check: $3(2) + 4(1) = 6 + 4 = 10$ ✅

**Example 2:** If **$(-1, 3)$** is a solution of **$kx + 2y = 8$**, find $k$.

Substitute $x = -1$ and $y = 3$:
$k(-1) + 2(3) = 8$
$-k + 6 = 8$
$-k = 2$
**$k = -2$**

Check: $(-2)(-1) + 2(3) = 2 + 6 = 8$ ✅

**Example 3:** If **$(k, 2k)$** is a solution of **$x + y = 12$**, find $k$.

$k + 2k = 12$
$3k = 12$
**$k = 4$**

So the solution is $(4, 8)$. Check: $4 + 8 = 12$ ✅

### Viewing a One-Variable Equation in Two Variables

Look at the equation **$x = 3$**. Viewed as a one-variable equation, it has just one solution: $x = 3$.

However, if we view it in the **two-variable** world, we can rewrite it as:

$$1 \cdot x + 0 \cdot y = 3$$

Now substitute anything you like for $y$ — the term $0 \cdot y$ is always $0$. So $x$ must stay $3$, while **$y$ can be any real number**.

Solutions: **$(3, 0), (3, 5), (3, -2), (3, 100), \dots$** infinitely many!

Similarly, **$y = -2$** can be written as $0 \cdot x + 1 \cdot y = -2$. Its solutions are **$(0, -2), (7, -2), (-1, -2), \dots$** ($x$ can be anything, while $y$ is always $-2$).

This means the number of solutions of an equation like $x = 3$ depends on **which setting you are viewing it in** (one variable or two variables).

---

## Common Pitfalls to Avoid

1. **Mistake 1: Reversing the order in an ordered pair.**
   In $(x, y)$, **$x$ always comes first**. For $2x + y = 7$, $(2, 3)$ is a solution, whereas $(3, 2)$ is not.

2. **Mistake 2: Thinking there is only one solution.**
   Do not stop after finding $(10, 10)$ for $2x + y = 30$. A linear equation in two variables has **infinitely many** solutions.

3. **Mistake 3: Getting signs wrong when converting to standard form.**
   When rewriting $2x + 3y = 12$ in standard form, **$c = -12$**, not $12$. Moving a term across the $=$ sign flips its sign.

4. **Mistake 4: Writing $b = 1$ for $y = 3x + 2$ after rearranging to $3x - y + 2 = 0$.**
   If you write the standard form as $3x - y + 2 = 0$, then **$b = -1$** (not $1$). Always read $a, b, c$ from the exact form you wrote.

5. **Mistake 5: Thinking $xy = 6$ is linear.**
   Even though no exponent $2$ is visible, the term $xy$ has degree **$2$** ($1$ from $x$ plus $1$ from $y$). Therefore, $xy = 6$ is not linear.

6. **Mistake 6: Allowing both $a$ and $b$ to be zero.**
   $0x + 0y + 5 = 0$ is not a linear equation in two variables. At least one of $a$ or $b$ must be non-zero.

7. **Mistake 7: Forgetting brackets when substituting negative numbers.**
   If $x = -2$, write $3x = 3(\mathbf{-2}) = -6$. Always use brackets around negative substitutions so you do not drop a sign or turn multiplication into subtraction.

8. **Mistake 8: Accepting unrealistic solutions in word problems.**
   $(20, -10)$ satisfies $2x + y = 30$ algebraically, yet a smoothie cannot have a negative price. In word problems, always check whether your numerical solution makes sense in context.

---

## Quick Recap

- A linear equation in **one variable** (like $2x + 3 = 11$) has **only one** solution.
- A **linear equation in two variables** has two variables, each with power $1$, and not multiplied together.
- **Standard form:** **$ax + by + c = 0$**, where $a$ and $b$ are not both zero.
- Before reading $a, b, c$, move **all terms to the left side** and watch your signs carefully.
- A **solution** is an **ordered pair $(x, y)$** that makes the equation true — and **order matters**.
- To check a pair: substitute $x$ and $y$, then verify whether $\text{LHS} = \text{RHS}$.
- To find solutions: express $y$ in terms of $x$, choose values for $x$, calculate $y$, and record them in a table.
- Setting **$x = 0$** and **$y = 0$** gives two quick solutions right away.
- A linear equation in two variables has **infinitely many** solutions.
- Equations like $x = 3$ can be written in two variables as **$1 \cdot x + 0 \cdot y = 3$**, meaning $x = 3$ and $y$ can be any number.

---

## Practice Questions

1. Write each equation in the form $ax + by + c = 0$ and state the values of $a$, $b$, and $c$:
   (a) $3x + 4y = 9$
   (b) $y = 5x - 1$
   (c) $\frac{x}{3} = \frac{y}{2}$
   (d) $2x = -7$
   (e) $y = 4$

2. Which of the following are linear equations in two variables? Give a reason.
   (a) $2x - 3y = 5$
   (b) $x^2 + y = 4$
   (c) $xy + x = 1$
   (d) $4x = 3y$
   (e) $\sqrt{x} + y = 2$
   (f) $0x + 0y = 3$

3. Write a linear equation in two variables for each statement:
   (a) The sum of two numbers is $50$.
   (b) The cost of a notebook is \$10 more than three times the cost of a pen. (Take the cost of a notebook as $\$x$ and that of a pen as $\$y$.)
   (c) The perimeter of a rectangle of length $l\text{ cm}$ and breadth $b\text{ cm}$ is $36\text{ cm}$.
   (d) In a class, the number of girls is $4$ less than twice the number of boys. (Take the number of boys as $x$ and the number of girls as $y$.)

4. Check whether each of the following is a solution of $2x + 3y = 12$:
   (a) $(3, 2)$
   (b) $(2, 3)$
   (c) $(6, 0)$
   (d) $(-3, 6)$
   (e) $\left(1, \frac{10}{3}\right)$

5. Find four different solutions of $x + 2y = 6$.

6. For the equation $4x - 3y = 12$, find the solution in which (a) $x = 0$ and (b) $y = 0$.

7. If $(2, -1)$ is a solution of the equation $3x + ky = 4$, find the value of $k$.

8. If $(k, 2k)$ is a solution of the equation $x + y = 12$, find $k$ and write the solution.

9. Write $x = -4$ as a linear equation in two variables and give three of its solutions.

10. The cost of $3$ pens and $2$ pencils is \$40. Take the cost of one pen as $\$x$ and the cost of one pencil as $\$y$.
    (a) Write a linear equation in two variables for this.
    (b) If a pencil costs \$5, find the cost of a pen.
    (c) Write two other possible pairs of prices (in whole dollars).

### Answers

1. (a) $3x + 4y - 9 = 0$. **$a = 3, b = 4, c = -9$**
   (b) $y = 5x - 1$, moving everything to one side: $5x - y - 1 = 0$. **$a = 5, b = -1, c = -1$**
   (c) Multiply both sides by $6$: $2x = 3y$, so $2x - 3y = 0$. **$a = 2, b = -3, c = 0$**
   (d) $2x + 0 \cdot y + 7 = 0$. **$a = 2, b = 0, c = 7$**
   (e) $0 \cdot x + y - 4 = 0$. **$a = 0, b = 1, c = -4$**
   *(If you multiplied the entire equation by $-1$, such as $-5x + y + 1 = 0$ in (b), that is equally correct.)*

2. (a) **Yes.** Two variables, both with power $1$.
   (b) **No.** Power of $x$ is $2$.
   (c) **No.** The term $xy$ has degree $2$.
   (d) **Yes.** Rewrites as $4x - 3y = 0$.
   (e) **No.** $\sqrt{x}$ has power $\frac{1}{2}$.
   (f) **No.** Both $a$ and $b$ are zero.

3. (a) **$x + y = 50$**
   (b) $x = 3y + 10$, or **$x - 3y - 10 = 0$**
   (c) $2(l + b) = 36$, or **$2l + 2b = 36$** (or $l + b = 18$)
   (d) $y = 2x - 4$, or **$2x - y - 4 = 0$**

4. (a) $2(3) + 3(2) = 6 + 6 = 12$. **Yes**
   (b) $2(2) + 3(3) = 4 + 9 = 13 \neq 12$. **No**
   (c) $2(6) + 3(0) = 12$. **Yes**
   (d) $2(-3) + 3(6) = -6 + 18 = 12$. **Yes**
   (e) $2(1) + 3\left(\frac{10}{3}\right) = 2 + 10 = 12$. **Yes**

5. $y = \frac{6 - x}{2}$. Any four valid pairs work, for instance:
   $x = 0 \implies y = 3$: **$(0, 3)$**
   $x = 2 \implies y = 2$: **$(2, 2)$**
   $x = 4 \implies y = 1$: **$(4, 1)$**
   $x = 6 \implies y = 0$: **$(6, 0)$**
   *(Other valid pairs include $(-2, 4)$, $\left(1, \frac{5}{2}\right)$, etc.)*

6. (a) $x = 0$: $-3y = 12 \implies y = -4$. **$(0, -4)$**
   (b) $y = 0$: $4x = 12 \implies x = 3$. **$(3, 0)$**

7. $3(2) + k(-1) = 4 \implies 6 - k = 4 \implies \mathbf{k = 2}$
   Check: $3(2) + 2(-1) = 6 - 2 = 4$ ✅

8. $k + 2k = 12 \implies 3k = 12 \implies \mathbf{k = 4}$. Solution: **$(4, 8)$**.
   Check: $4 + 8 = 12$ ✅

9. **$x + 0 \cdot y + 4 = 0$** (or $1 \cdot x + 0 \cdot y = -4$). $x$ is always $-4$, and $y$ can be anything.
   Three solutions: **$(-4, 0), (-4, 1), (-4, -3)$**

10. (a) **$3x + 2y = 40$**
    (b) $y = 5$: $3x + 10 = 40 \implies 3x = 30 \implies \mathbf{x = 10}$. A pen costs **\$10**.
    (c) Some possible pairs: $x = 12, y = 2$ ($36 + 4 = 40$ ✅); $x = 8, y = 8$ ($24 + 16 = 40$ ✅); $x = 6, y = 11$ ($18 + 22 = 40$ ✅). Any two of these work.

---

If it still feels surprising that one equation can have so many answers, think back to the café story: if you only know the total bill, there are many pairs of prices for a sandwich and a smoothie that add up to the same total. That simple insight is the heart of this topic — and you have got it!

**In the next topic (Topic 2: Graph of a Linear Equation in Two Variables):** we saw that every solution $(x, y)$ is a pair of numbers. Next, we will see that each pair can be plotted as a **point** on graph paper — and when you plot all the solutions together, they line up to form a **straight line**. That is where the true secret behind the name "linear" reveals itself!
