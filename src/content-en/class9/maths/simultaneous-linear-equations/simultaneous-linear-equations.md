# Chapter: Simultaneous Linear Equations

> **Class:** 9 | **Subject:** Mathematics
> **This is a new chapter.** It builds directly on ideas from [Linear Equations in Two Variables](../linear-equations-in-two-variables/linear-equations-in-two-variables.md): the standard form $ax + by + c = 0$, an ordered pair $(x, y)$ as a solution, and the fact that a single linear equation in two variables has infinitely many solutions forming a straight line ([Topic 2 there](../linear-equations-in-two-variables/linear-equations-in-two-variables-part2.md)).
> **Topics covered in this file:**
> 1. What Are Simultaneous Equations and the Substitution Method

---

# Topic 1: What Are Simultaneous Equations and the Substitution Method

In the previous chapter, we saw that a single equation such as **$2x + y = 30$** has **infinitely many solutions**: $(10, 10)$, $(12, 6)$, $(5, 20)$, and countless more. On a graph, all of those solutions lie along one straight line. Back then, you might have thought: *"To pin down one definite answer, we need one more piece of information."*

That "extra piece of information" arrives now. In this chapter, we take **two equations together** and see how they lock in **one definite solution**. In this first topic, we will also learn our first algebraic method for finding that solution: the **substitution method** (replacing one expression with an equivalent one).

---

## The Stationery Shop Story

Maya and Leo live in the same neighbourhood and both buy supplies from Cornerstone Stationery. One week, the shop's price board fell down, so neither of them knows the exact price of a pen pack or a hardcover notebook. However, both of them kept their receipts.

- **On Monday, Maya** bought $2$ pen packs and $1$ notebook for **\$40**.
- **On Tuesday, Leo** bought $1$ pen pack and $3$ notebooks for **\$70**.

The prices were the same on both days. Maya wonders, *"Can I figure out the price of a pen pack just from my receipt?"* Let us check.

Let one pen pack cost **$x$ dollars** and one notebook cost **$y$ dollars**. Maya's receipt gives:

$$2x + y = 40$$

Does this single equation pin down $x$ and $y$? Let us build a table of possibilities:

| Pen Pack ($x$) | Notebook ($y$) | $2x + y$ |
|---|---|---|
| \$10 | \$20 | $20 + 20 = \$40$ |
| \$15 | \$10 | $30 + 10 = \$40$ |
| \$5 | \$30 | $10 + 30 = \$40$ |
| \$20 | \$0 | $40 + 0 = \$40$ |

Every single row works! (The last pair is unrealistic in real life because a notebook is not free, yet mathematically it still satisfies the equation.) So Maya's receipt alone cannot give one definite answer.

Now look at Leo's receipt: **$x + 3y = 70$**. On its own, it also has infinitely many solutions, such as $(10, 20)$, $(40, 10)$, or $(70, 0)$. Here is the crucial twist: **the exact same $(x, y)$ must satisfy both receipts**, because the shop's prices did not change. Let us test the pairs from Maya's table in Leo's equation:

- $(10, 20)$: $10 + 3(20) = 10 + 60 = 70$ ✅ *(works!)*
- $(15, 10)$: $15 + 3(10) = 15 + 30 = 45 \neq 70$ ❌
- $(5, 30)$: $5 + 3(30) = 5 + 90 = 95 \neq 70$ ❌
- $(20, 0)$: $20 + 3(0) = 20 + 0 = 20 \neq 70$ ❌

Only one pair, **$(10, 20)$**, satisfies both receipts at the same time. That means **a pen pack costs \$10 and a notebook costs \$20**. Two receipts working together revealed the exact answer that neither receipt could reveal alone.

Of course, building a table and guessing every time would be slow. In this topic, we will learn how to find that answer systematically.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Simultaneous** | Happening at the same time: both conditions must hold true together | Maya's and Leo's two receipts |
| **System of equations** | A pair (or group) of equations sharing the same variables | $2x + y = 40$ and $x + 3y = 70$ |
| **Solution of a system** | An ordered pair $(x, y)$ that makes **every** equation in the system true | $(10, 20)$ |
| **Satisfy an equation** | When substituting values into an equation makes the left side equal the right side | $(10, 20)$ satisfies both $2x + y = 40$ and $x + 3y = 70$ |
| **Make a variable the subject** | Rewrite an equation so that one variable stands alone on one side | Rearranging $2x + y = 40$ to $y = 40 - 2x$ |
| **Substitution** | Replacing a variable with an equivalent expression | Replacing $y$ with $(40 - 2x)$ |
| **Back-substitute** | Plugging a newly found value back into an equation to find the second variable | Using $x = 10$ to find $y = 20$ |

---

## Part A: Why One Equation Is Not Enough, and What Two Equations Do

### One Equation: Infinitely Many Pairs

From the previous chapter, remember that **$x + y = 10$** has solutions $(1, 9)$, $(2, 8)$, $(3, 7)$, $(4, 6)$, $(5, 5)$, $(0, 10)$, $(-3, 13)$, and infinitely many more. One equation gives one condition, and one condition cannot pin down two unknown numbers.

### Two Equations: Two Conditions Together

Now let us add a second condition: **$x - y = 2$**. By itself, it also has infinitely many solutions: $(2, 0)$, $(3, 1)$, $(4, 2)$, $(5, 3)$, $(6, 4)$, and so on.

Is there a pair that appears in **both** lists? Let us check $(6, 4)$:
- In the first equation: $6 + 4 = 10$ ✅
- In the second equation: $6 - 4 = 2$ ✅

Yes! **$(6, 4)$** satisfies both equations at once.

When we require two such equations to be true **at the same time** (simultaneously), we call them **simultaneous linear equations**, or a **system of linear equations**. We write them together like this:

$$\begin{aligned}
x + y &= 10 \\
x - y &= 2
\end{aligned}$$

The **solution of the system** is the ordered pair $(x, y)$ that satisfies **both** equations. Here, the solution is **$x = 6, y = 4$** (or $(6, 4)$).

**Important rule:** A solution must satisfy *both* equations. If it fails even one equation, it is not a solution of the system.

Usually, two independent linear conditions lock in **exactly one pair**. (Occasionally, two equations yield no solution at all or infinitely many solutions—we will investigate why in Topic 4. For now, we will focus on systems that have a single unique solution.)

---

## Part B: Checking Whether a Given Pair Is a Solution

The check is direct: **substitute the given values of $x$ and $y$ into both equations.** Only if *both* equations turn out to be true is the pair a solution of the system.

### Example 1: Is $(4, 3)$ a solution of the system $x + y = 7$ and $x - y = 1$?

Substitute $x = 4$ and $y = 3$:
- Equation (1): $4 + 3 = 7$ ✅
- Equation (2): $4 - 3 = 1$ ✅

Both equations hold true, so **$(4, 3)$ is a solution**.

### Example 2: Is $(5, 2)$ a solution of the same system?

Substitute $x = 5$ and $y = 2$:
- Equation (1): $5 + 2 = 7$ ✅
- Equation (2): $5 - 2 = 3 \neq 1$ ❌

Because the second equation fails, **$(5, 2)$ is not a solution** of the system—even though it satisfies the first equation.

### Example 3: Is $x = 2, y = -1$ a solution of the system $3x + 2y = 4$ and $x - 3y = 5$?

Substitute $x = 2$ and $y = -1$:
- Equation (1): $3(2) + 2(-1) = 6 - 2 = 4$ ✅
- Equation (2): $2 - 3(-1) = 2 + 3 = 5$ ✅

Yes, **$(2, -1)$ is a solution**. Notice how placing negative values in parentheses, such as $3(-1)$, prevents sign errors.

---

## Part C: The Substitution Method, Step by Step

Now for the main question: how do we find the solution without guessing? The idea behind the **substitution method** is straightforward:

> Use one equation to express **$x$ in terms of $y$** (or $y$ in terms of $x$). Then replace that variable with its expression in the **other** equation. Now you have an equation with just **one variable**, which you already know how to solve.

Think of a shop clerk saying, *"One pen costs \$2 less than a notebook."* Anywhere you see "pen," you can write "notebook $- 2$." That is substitution.

### The Four Steps

1. **Choose and rearrange:** Pick the simpler equation and make one variable the **subject** (isolate it on one side). Whenever possible, pick a variable whose coefficient is $1$ or $-1$ so you avoid fractions.
2. **Substitute:** Replace that variable in the **other equation** with the expression you just found (always wrap it in parentheses).
3. **Solve:** You now have a linear equation in one variable. Solve it.
4. **Back-substitute and check:** Plug the value you found back into your rearranged equation to find the second variable. Then verify your pair $(x, y)$ in **both** original equations.

### Example 4: The Stationery Shop System

$$\begin{aligned}
2x + y &= 40 \quad &\text{...(1)} \\
x + 3y &= 70 \quad &\text{...(2)}
\end{aligned}$$

**Step 1 (Choose and rearrange):** In equation (2), $x$ has a coefficient of $1$. Isolate $x$:

$$x = 70 - 3y$$

**Step 2 (Substitute):** Replace $x$ with $(70 - 3y)$ in equation (1):

$$2(70 - 3y) + y = 40$$

**Step 3 (Solve):**
- $140 - 6y + y = 40$
- $140 - 5y = 40$
- $-5y = 40 - 140 = -100$
- $y = \mathbf{20}$

**Step 4 (Back-substitute):** Substitute $y = 20$ into $x = 70 - 3y$:

$$x = 70 - 3(20) = 70 - 60 = \mathbf{10}$$

**Answer:** **$x = 10, y = 20$** — meaning a pen pack costs **\$10** and a notebook costs **\$20**, matching our table!

**Check:**
- Equation (1): $2(10) + 20 = 20 + 20 = 40$ ✅
- Equation (2): $10 + 3(20) = 10 + 60 = 70$ ✅

### Example 5: Choosing the Easier Variable (When a Coefficient Is $1$)

$$\begin{aligned}
x + 2y &= 11 \quad &\text{...(1)} \\
3x - y &= 12 \quad &\text{...(2)}
\end{aligned}$$

Two variables have a coefficient of $1$ or $-1$: $x$ in (1) and $y$ in (2). Let us isolate **$y$ from (2)** (either choice avoids fractions):

$$3x - y = 12 \implies -y = 12 - 3x \implies \mathbf{y = 3x - 12}$$

Substitute this expression for $y$ into equation (1):

$$x + 2(3x - 12) = 11$$

- $x + 6x - 24 = 11$
- $7x = 11 + 24 = 35$
- $x = \mathbf{5}$

Back-substitute: $y = 3(5) - 12 = 15 - 12 = \mathbf{3}$.

**Check:**
- Equation (1): $5 + 2(3) = 5 + 6 = 11$ ✅
- Equation (2): $3(5) - 3 = 15 - 3 = 12$ ✅

**Answer: $x = 5, y = 3$.**

### Example 6: Rearranging First, with a Negative Answer

$$\begin{aligned}
4x &= y + 11 \quad &\text{...(1)} \\
3x + 2y &= 0 \quad &\text{...(2)}
\end{aligned}$$

In equation (1), $y$ has coefficient $1$, so it is easy to isolate. Subtract $11$ from both sides and swap the sides:

$$4x = y + 11 \implies y = \mathbf{4x - 11}$$

Substitute $y = 4x - 11$ into equation (2):

$$3x + 2(4x - 11) = 0$$

- $3x + 8x - 22 = 0$
- $11x = 22$
- $x = \mathbf{2}$

Back-substitute: $y = 4(2) - 11 = 8 - 11 = \mathbf{-3}$.

Here $y$ is negative, which is completely valid—solutions of a system can be negative numbers too.

**Check:**
- Equation (1): $4(2) = 8$, and $y + 11 = -3 + 11 = 8$ ✅
- Equation (2): $3(2) + 2(-3) = 6 - 6 = 0$ ✅

**Answer: $x = 2, y = -3$.**

### Example 7: Equations with Fractions

$$\begin{aligned}
\frac{x}{2} + \frac{y}{3} &= 4 \quad &\text{...(1)} \\
x - y &= 3 \quad &\text{...(2)}
\end{aligned}$$

First, clear the fractions from equation (1). The least common multiple of denominators $2$ and $3$ is $6$, so multiply every term on both sides of (1) by $6$:

$$6 \cdot \frac{x}{2} + 6 \cdot \frac{y}{3} = 6 \cdot 4 \implies \mathbf{3x + 2y = 24} \quad \text{...(1')}$$

*(This is the exact same equation, just without fractions—multiplying both sides by $6$ preserves equality.)*

Now isolate $x$ from equation (2), where its coefficient is $1$:

$$x = y + 3$$

Substitute into $(1')$:

$$3(y + 3) + 2y = 24$$

- $3y + 9 + 2y = 24$
- $5y = 15$
- $y = \mathbf{3}$

Back-substitute: $x = 3 + 3 = \mathbf{6}$.

**Check (in the original equations, including the fractional one):**
- Equation (1): $\dfrac{6}{2} + \dfrac{3}{3} = 3 + 1 = 4$ ✅
- Equation (2): $6 - 3 = 3$ ✅

**Answer: $x = 6, y = 3$.**

### Example 8: Both Answers Negative

$$\begin{aligned}
x - 2y &= 0 \quad &\text{...(1)} \\
3x - 4y &= -2 \quad &\text{...(2)}
\end{aligned}$$

From (1): $x = 2y$.

Substitute into (2):

$$3(2y) - 4y = -2$$

- $6y - 4y = -2$
- $2y = -2$
- $y = \mathbf{-1}$

Back-substitute: $x = 2(-1) = \mathbf{-2}$.

**Check:**
- Equation (1): $-2 - 2(-1) = -2 + 2 = 0$ ✅
- Equation (2): $3(-2) - 4(-1) = -6 + 4 = -2$ ✅

**Answer: $x = -2, y = -1$.**

### Example 9: When No Variable Has a Coefficient of $1$

$$\begin{aligned}
2x + 3y &= 13 \quad &\text{...(1)} \\
5x - 2y &= 4 \quad &\text{...(2)}
\end{aligned}$$

Here no variable has a coefficient of $1$ or $-1$. We can still use substitution—let us isolate $x$ from (1):

$$2x = 13 - 3y \implies x = \frac{13 - 3y}{2}$$

Substitute into (2):

$$5 \cdot \frac{13 - 3y}{2} - 2y = 4$$

Multiply every term on both sides by $2$ to clear the fraction:

$$5(13 - 3y) - 4y = 8$$

- $65 - 15y - 4y = 8$
- $65 - 19y = 8$
- $-19y = 8 - 65 = -57$
- $y = \mathbf{3}$

Back-substitute: $x = \dfrac{13 - 3(3)}{2} = \dfrac{13 - 9}{2} = \dfrac{4}{2} = \mathbf{2}$.

**Check:**
- Equation (1): $2(2) + 3(3) = 4 + 9 = 13$ ✅
- Equation (2): $5(2) - 2(3) = 10 - 6 = 4$ ✅

**Answer: $x = 2, y = 3$.**

Notice how substitution starts to feel slightly clunky when no variable has a coefficient of $1$ or $-1$ because fractions appear right away. In the next topic, we will learn a cleaner method built especially for systems like Example 9.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Substituting an expression back into the same equation it came from.**
   Take $x + y = 10$ and $x - y = 2$. Suppose you rearrange equation (1) to get $x = 10 - y$. If you plug that **back into equation (1)**:
   - $(10 - y) + y = 10 \implies 10 = 10$.
   You get nothing useful—you just repeated the same fact! The expression must go into the **other** equation:
   - $(10 - y) - y = 2 \implies 10 - 2y = 2 \implies y = 4$, so $x = 6$.
   **Rule:** Never substitute back into the equation you used to isolate the variable. Always substitute into the other equation.

2. **Mistake 2: Dropping or flipping signs when rearranging an equation.**
   Suppose you want to isolate $y$ from $3x - y = 12$.
   - Wrong: $y = 12 - 3x$. *(The minus sign in front of $y$ disappeared.)*
   - Right: $-y = 12 - 3x$, then multiply both sides by $-1$: **$y = 3x - 12$**.
   Quick sanity check using $(5, 3)$: the right formula gives $y = 3(5) - 12 = 3$ ✅, whereas the wrong one gives $12 - 15 = -3$ ❌. Always test your rearranged formula with one quick pair if you feel unsure.

3. **Mistake 3: Forgetting parentheses during substitution.**
   Writing $2(3x - 12)$ as $6x - 12$ misses the second term. The factor $2$ multiplies **every** term inside the parentheses: $2(3x - 12) = 6x - 24$.

4. **Mistake 4: Stopping after finding just one variable.**
   Finding $x = 5$ and writing *"Answer: $x = 5$"* is only half an answer. A solution of a two-variable system is an **ordered pair $(x, y)$**—you must back-substitute to find $y$ as well.

5. **Mistake 5: Skipping the check, or checking in only one equation.**
   Always check your final values in **both** original equations. Checking only one equation will not catch the mistake we saw in Part B Example 2, where $(5, 2)$ satisfied the first equation yet failed the second.

---

## Quick Recap

- A single linear equation in two variables has **infinitely many solutions**, so it cannot pin down $x$ and $y$ uniquely.
- **Simultaneous linear equations (a system)** are two equations that must hold true **at the same time**. The **solution** is the pair $(x, y)$ that satisfies **both** equations.
- To test whether a pair is a solution, plug $x$ and $y$ into **both** equations. Both must be true.
- **Substitution method (4 steps):** (1) pick the easier equation and isolate one variable, (2) substitute it into the **other** equation using parentheses, (3) solve the one-variable equation, (4) back-substitute for the second variable and check in **both** original equations.
- Prefer isolating a variable with coefficient $1$ or $-1$; if fractions appear, multiply both sides by a common multiple of the denominators first.
- Watch out for substituting into the same equation, sign errors when rearranging, missing parentheses, and stopping after one variable.

---

## Practice Questions

1. Is $(3, 2)$ a solution of the system $x + y = 5$ and $2x - y = 4$? Is $(1, 4)$ a solution of the same system? Explain.

2. Solve by substitution: $x + y = 9$ and $2x - y = 3$. Verify your answer in both equations.

3. Solve by substitution: $3x + y = 11$ and $2x - 3y = 0$. Verify your answer.

4. Solve by substitution: $y = 3x + 7$ and $x + 2y = 7$. Verify your answer.

5. Solve by substitution: $\dfrac{x}{2} + \dfrac{y}{4} = 4$ and $x - y = -4$. Verify your answer.

6. Solve by substitution: $2x + 3y = -1$ and $x - y = -3$. Verify your answer.

7. A student solves $x + y = 6$ and $x - y = 2$ as follows. From the first equation, $x = 6 - y$. Substituting this into the first equation gives $(6 - y) + y = 6$, so $6 = 6$. *"So the system has no useful answer,"* says the student. Find the mistake and solve the system correctly.

8. State whether each statement is True or False:
   (a) A single linear equation in two variables has infinitely many solutions.
   (b) If a pair satisfies one equation of a system, it is definitely a solution of the system.
   (c) After making $x$ the subject of equation (1), we should substitute it into equation (2).
   (d) A solution of a system of equations can have a negative value for $x$ or $y$.

### Answers

1. For $(3, 2)$: $x + y = 3 + 2 = 5$ ✅, and $2x - y = 2(3) - 2 = 6 - 2 = 4$ ✅. Both hold true, so **$(3, 2)$ is a solution**.
   For $(1, 4)$: $x + y = 1 + 4 = 5$ ✅, but $2x - y = 2(1) - 4 = -2 \neq 4$ ❌. One equation fails, so **$(1, 4)$ is not a solution**.

2. From $x + y = 9$, we get $y = 9 - x$. Substitute into the second equation: $2x - (9 - x) = 3 \implies 2x - 9 + x = 3 \implies 3x = 12 \implies x = 4$. Then $y = 9 - 4 = 5$.
   **$x = 4, y = 5$.**
   Check: $4 + 5 = 9$ ✅, $2(4) - 5 = 8 - 5 = 3$ ✅

3. From $3x + y = 11$, we get $y = 11 - 3x$. Substitute into the second equation: $2x - 3(11 - 3x) = 0 \implies 2x - 33 + 9x = 0 \implies 11x = 33 \implies x = 3$. Then $y = 11 - 3(3) = 2$.
   **$x = 3, y = 2$.**
   Check: $3(3) + 2 = 11$ ✅, $2(3) - 3(2) = 6 - 6 = 0$ ✅

4. Here $y$ is already the subject: $y = 3x + 7$. Substitute into the second equation: $x + 2(3x + 7) = 7 \implies x + 6x + 14 = 7 \implies 7x = -7 \implies x = -1$. Then $y = 3(-1) + 7 = 4$.
   **$x = -1, y = 4$.**
   Check: first equation $y = 3(-1) + 7 = 4$ ✅; second equation $-1 + 2(4) = -1 + 8 = 7$ ✅

5. Multiply the first equation by $4$ to clear fractions: $2x + y = 16$. From the second equation, $x = y - 4$. Substitute: $2(y - 4) + y = 16 \implies 2y - 8 + y = 16 \implies 3y = 24 \implies y = 8$. Then $x = 8 - 4 = 4$.
   **$x = 4, y = 8$.**
   Check: $\dfrac{4}{2} + \dfrac{8}{4} = 2 + 2 = 4$ ✅, $4 - 8 = -4$ ✅

6. From $x - y = -3$, we get $x = y - 3$. Substitute into the first equation: $2(y - 3) + 3y = -1 \implies 2y - 6 + 3y = -1 \implies 5y = 5 \implies y = 1$. Then $x = 1 - 3 = -2$.
   **$x = -2, y = 1$.**
   Check: $2(-2) + 3(1) = -4 + 3 = -1$ ✅, $-2 - 1 = -3$ ✅

7. The student substituted $x = 6 - y$ back into the **same first equation** it came from, producing the identity $6 = 6$ (no new information). It must be substituted into the **second** equation ($x - y = 2$): $(6 - y) - y = 2 \implies 6 - 2y = 2 \implies 2y = 4 \implies y = 2$. Then $x = 6 - 2 = 4$.
   **$x = 4, y = 2$.**
   Check: $4 + 2 = 6$ ✅, $4 - 2 = 2$ ✅

8. (a) **True** ✅. As seen in the previous chapter, one linear equation in two variables has infinitely many solutions.
   (b) **False** ❌. It must satisfy **both** equations (for example, $(5, 2)$ in Part B satisfied the first equation but not the second).
   (c) **True** ✅. Substituting into the other equation is the core rule of the method.
   (d) **True** ✅. Both Example 6 ($y = -3$) and Example 8 ($x = -2, y = -1$) have negative solutions.

---

Great work! You now know how to test an ordered pair and how to solve a system of two linear equations simultaneously using substitution. Substitution feels effortless whenever one variable has a coefficient of $1$ or $-1$, but when all coefficients are larger, parentheses and fractions can slow things down.

**What's next?** In Example 9, we saw how fractions pop up when no variable has a coefficient of $1$. In Topic 2, we will learn a method where we directly **add or subtract** the two equations so that one variable **vanishes cleanly** without creating fractions at all: the **elimination method**.
