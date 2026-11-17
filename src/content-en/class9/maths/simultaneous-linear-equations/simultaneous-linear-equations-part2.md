# Chapter: Simultaneous Linear Equations (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [simultaneous-linear-equations.md](simultaneous-linear-equations.md)** (which introduced Topic 1: why one equation is not enough, what "simultaneous" means, checking an ordered pair, and the substitution method step by step).
> **Topics covered in this file:**
> 2. Elimination Method (Eliminating a Variable)

---

# Topic 2: Elimination Method (Eliminating a Variable)

In Topic 1, we learned the substitution method: from the two stationery shop receipts ($2x + y = 40$ and $x + 3y = 70$), we expressed one variable in terms of the other and substituted it into the second equation. That method always works, yet in Example 9 ($2x + 3y = 13$ and $5x - 2y = 4$), isolating $x$ produced the fraction $x = \dfrac{13 - 3y}{2}$, making the algebra heavier.

In this topic, we learn a **second, often cleaner method**: **elimination**. The idea is simple: add or subtract the two equations so that one variable **vanishes completely**. The remaining variable is then found directly.

---

## The Smoothie Stand Story

Right outside the neighbourhood sports complex sits a popular drink stand serving just two items: **fresh lemonade** and **mango smoothies**. Unfortunately, the price board was damaged in a storm, so the attendant simply gives the total at the register.

Sophia's soccer team stopped by after practice on two consecutive days:

- **Saturday's receipt:** $3$ lemonades $+ 2$ mango smoothies $= \$86$
- **Sunday's receipt:** $3$ lemonades $+ 5$ mango smoothies $= \$161$

Sophia noticed immediately: *"We bought the exact same number of lemonades on both days—three each time! The only difference is the smoothies. On Sunday we bought **$3$ more** mango smoothies, and the bill was **\$75 higher**."*

That means $3$ mango smoothies cost $\$161 - \$86 = \$75$, so **one mango smoothie costs \$25**.

See what happened? Subtracting the two receipts eliminated the lemonades completely! Once we know a mango smoothie costs $\$25$, Saturday's receipt gives: $3\text{ lemonades} + 2(25) = 86 \implies 3\text{ lemonades} = 36$, so **one lemonade costs \$12**.

Check Sunday's receipt: $3(12) + 5(25) = 36 + 125 = 161$ ✅.

Written algebraically (letting lemonade $= x$ and mango smoothie $= y$):

$$\begin{aligned}
3x + 2y &= 86 \\
3x + 5y &= 161
\end{aligned}$$

Subtracting the first from the second eliminates $3x - 3x = 0$, leaving $3y = 75$. That is **elimination**.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Elimination** | Removing one variable by adding or subtracting the equations | Subtracting $3x$ and $3x$ eliminates $x$ |
| **Coefficient** | The numerical factor multiplying a variable | In $3x$, the coefficient is $3$ |
| **Equal coefficients** | The same number with the same sign in front of a variable in both equations | $5x$ and $5x$ |
| **Opposite coefficients** | The same number with opposite signs ($+$ and $-$) in front of a variable | $+3y$ and $-3y$ |
| **LCM** | Least Common Multiple of two numbers, used to make coefficients match | $\text{LCM}(3, 4) = 12$ |
| **Back-substitution** | Plugging a solved variable back into an equation to find the other variable | Using $y = 2$ to find $x = 3$ |

---

## Part A: The Idea and Two Easy Cases

**Why elimination works:** Adding or subtracting equal quantities on both sides of a true equation always produces another true equation. Since any solution $(x, y)$ satisfies both original equations, it must also satisfy their sum or difference.

Our strategy is to pick **which variable to eliminate**, then add or subtract the equations so that its net coefficient becomes $0$.

### Case 1: Same Coefficients — SUBTRACT

When a variable has the **same number and same sign** in both equations, subtract one equation from the other to eliminate it.

### Example 1: $5x + 3y = 21$ and $5x + y = 17$

Both equations contain $5x$, so subtract:

$$\begin{aligned}
(5x + 3y) - (5x + y) &= 21 - 17 \\
5x - 5x + 3y - y &= 4 \\
2y &= 4 \\
\mathbf{y} &= \mathbf{2}
\end{aligned}$$

Substitute $y = 2$ into the second equation: $5x + 2 = 17 \implies 5x = 15 \implies \mathbf{x = 3}$.

**Check:**
- First equation: $5(3) + 3(2) = 15 + 6 = 21$ ✅
- Second equation: $5(3) + 2 = 17$ ✅

**Answer: $x = 3, y = 2$.**

### Case 2: Opposite Coefficients — ADD

When a variable has the same number with **opposite signs** ($+$ in one equation, $-$ in the other), **add** the two equations together.

### Example 2: $4x + 3y = 17$ and $5x - 3y = 1$

The coefficients of $y$ are $+3$ and $-3$ (opposites), so add:

$$\begin{aligned}
(4x + 3y) + (5x - 3y) &= 17 + 1 \\
9x + 0 &= 18 \\
\mathbf{x} &= \mathbf{2}
\end{aligned}$$

Substitute $x = 2$ into the first equation: $4(2) + 3y = 17 \implies 8 + 3y = 17 \implies 3y = 9 \implies \mathbf{y = 3}$.

**Check:**
- First equation: $4(2) + 3(3) = 8 + 9 = 17$ ✅
- Second equation: $5(2) - 3(3) = 10 - 9 = 1$ ✅

**Answer: $x = 2, y = 3$.**

**Memory rule:** *Same sign, same number $\to$ subtract. Opposite signs, same number $\to$ add.*

---

## Part B: When Coefficients Are Not Equal (Using the LCM)

Most systems do not start with equal or opposite coefficients. In that case, **multiply one or both equations by carefully chosen numbers** so that one variable's coefficients match in size. Then proceed just as in Part A.

**How do you choose the multipliers?** Look at the two coefficients of the variable you want to eliminate and find their **LCM**. Multiply each equation so that this variable's coefficient reaches the LCM.

For example, if the coefficients of $x$ are $3$ and $4$, their LCM is $12$. Multiply the first equation by $4$ and the second by $3$ so both have $12x$.

**Crucial rule:** When multiplying an equation, multiply **every single term on both sides**—never leave the right-hand side unchanged!

### Example 3: $3x + 2y = 16$ and $5x - 4y = 12$ (Multiply One Equation)

The coefficients of $y$ are $2$ and $-4$. Multiplying the first equation by $2$ turns $+2y$ into $+4y$, the exact opposite of $-4y$.

Multiply the first equation by $2$:

$$2(3x + 2y) = 2(16) \implies \mathbf{6x + 4y = 32} \quad \text{...(i)}$$

Keep the second equation as it is:

$$\mathbf{5x - 4y = 12} \quad \text{...(ii)}$$

Add (i) and (ii) because $y$ has opposite signs:

$$11x = 44 \implies \mathbf{x = 4}$$

Substitute $x = 4$ into the first original equation: $3(4) + 2y = 16 \implies 12 + 2y = 16 \implies 2y = 4 \implies \mathbf{y = 2}$.

**Check:**
- First equation: $3(4) + 2(2) = 12 + 4 = 16$ ✅
- Second equation: $5(4) - 4(2) = 20 - 8 = 12$ ✅

**Answer: $x = 4, y = 2$.**

### Example 4: $2x + 3y = 12$ and $3x + 4y = 17$ (Multiply Both Equations)

Let us eliminate $x$. Its coefficients are $2$ and $3$, with $\text{LCM}(2, 3) = 6$.
- Multiply the first equation by $3$: $6x + 9y = 36$ ...(i)
- Multiply the second equation by $2$: $6x + 8y = 34$ ...(ii)

Now $x$ has equal coefficients ($6$ and $6$), so subtract (i) $-$ (ii):

$$(6x + 9y) - (6x + 8y) = 36 - 34 \implies \mathbf{y = 2}$$

Substitute $y = 2$ into the first original equation: $2x + 3(2) = 12 \implies 2x = 6 \implies \mathbf{x = 3}$.

**Check:**
- First equation: $2(3) + 3(2) = 6 + 6 = 12$ ✅
- Second equation: $3(3) + 4(2) = 9 + 8 = 17$ ✅

**Answer: $x = 3, y = 2$.**

You could equally eliminate $y$ instead (coefficients $3$ and $4$, LCM $12$), and you would get the exact same solution. Always pick whichever variable feels simpler.

---

## Part C: Equations with Decimals and Fractions

When equations contain decimals or fractions, **clear them first** by multiplying the entire equation by a suitable integer ($10$, $100$, or the LCM of denominators). Then carry out standard elimination with clean whole numbers.

### Example 5 (Decimals): $0.2x + 0.3y = 1.3$ and $0.3x + 0.2y = 1.7$

Every decimal has one decimal place, so multiply both equations by **$10$**:
- $2x + 3y = 13$ ...(i)
- $3x + 2y = 17$ ...(ii)

Eliminate $x$ (coefficients $2$ and $3$, LCM $6$):
- (i) $\times 3$: $6x + 9y = 39$ ...(iii)
- (ii) $\times 2$: $6x + 4y = 34$ ...(iv)

Subtract (iii) $-$ (iv): $5y = 5 \implies \mathbf{y = 1}$.

Substitute $y = 1$ into (i): $2x + 3(1) = 13 \implies 2x = 10 \implies \mathbf{x = 5}$.

**Check (in the original decimal equations):**
- First: $0.2(5) + 0.3(1) = 1.0 + 0.3 = 1.3$ ✅
- Second: $0.3(5) + 0.2(1) = 1.5 + 0.2 = 1.7$ ✅

**Answer: $x = 5, y = 1$.**

### Example 6 (Fractions): $\dfrac{x}{2} + \dfrac{y}{3} = 3$ and $\dfrac{x}{4} - \dfrac{y}{3} = 0$

In the first equation, the denominators are $2$ and $3$, with $\text{LCM} = 6$. Multiply the entire equation by $6$:

$$6 \cdot \frac{x}{2} + 6 \cdot \frac{y}{3} = 6 \cdot 3 \implies \mathbf{3x + 2y = 18} \quad \text{...(i)}$$

In the second equation, the denominators are $4$ and $3$, with $\text{LCM} = 12$. Multiply the entire equation by $12$:

$$12 \cdot \frac{x}{4} - 12 \cdot \frac{y}{3} = 12 \cdot 0 \implies \mathbf{3x - 4y = 0} \quad \text{...(ii)}$$

Now $x$ has coefficient $3$ in both equations, so subtract (i) $-$ (ii):

$$\begin{aligned}
(3x + 2y) - (3x - 4y) &= 18 - 0 \\
2y + 4y &= 18 \\
6y &= 18 \implies \mathbf{y = 3}
\end{aligned}$$

Substitute $y = 3$ into (i): $3x + 2(3) = 18 \implies 3x = 12 \implies \mathbf{x = 4}$.

**Check (in the original fractional equations):**
- First: $\dfrac{4}{2} + \dfrac{3}{3} = 2 + 1 = 3$ ✅
- Second: $\dfrac{4}{4} - \dfrac{3}{3} = 1 - 1 = 0$ ✅

**Answer: $x = 4, y = 3$.**

---

## Part D: A Clever Shortcut (Symmetric Coefficient Pairs)

Occasionally a system looks intimidating with large numbers, yet hides a neat symmetric pattern. Look closely at this pair:

### Example 7: $37x + 43y = 123$ and $43x + 37y = 117$

Notice that the coefficients of $x$ and $y$ are **swapped** ($37, 43$ and $43, 37$). Finding $\text{LCM}(37, 43) = 1591$ would be tedious. Instead, use a two-step shortcut:

**Step 1: Add the two equations.**

$$(37x + 43x) + (43y + 37y) = 123 + 117 \implies 80x + 80y = 240$$

Divide both sides by $80$:

$$\mathbf{x + y = 3} \quad \text{...(i)}$$

**Step 2: Subtract the two equations** (second $-$ first).

$$(43x - 37x) + (37y - 43y) = 117 - 123 \implies 6x - 6y = -6$$

Divide both sides by $6$:

$$\mathbf{x - y = -1} \quad \text{...(ii)}$$

Now solve this tiny system by adding (i) and (ii):

$$(x + y) + (x - y) = 3 + (-1) \implies 2x = 2 \implies \mathbf{x = 1}$$

Substitute $x = 1$ into (i): $1 + y = 3 \implies \mathbf{y = 2}$.

**Check:**
- First: $37(1) + 43(2) = 37 + 86 = 123$ ✅
- Second: $43(1) + 37(2) = 43 + 74 = 117$ ✅

**Answer: $x = 1, y = 2$.**

This add-and-subtract trick works whenever the $x$ and $y$ coefficients are swapped across the two equations. If they are not swapped, standard LCM elimination always works.

---

## Part E: Substitution vs. Elimination — Which Should You Choose?

Both methods give the exact same answer; the only difference is **which one takes less effort** for a given system.

| Feature | Substitution | Elimination |
|---|---|---|
| Core idea | Express one variable in terms of the other and substitute | Add or subtract equations so one variable cancels out |
| Best when | At least one variable has a coefficient of $1$ or $-1$ (e.g., $x + 2y = 7$) | Coefficients match, are opposites, or have small common multiples |
| Risk of fractions | Often introduces fractions (e.g., $x = \frac{13 - 3y}{2}$) | Keeps all work in integers once cleared |
| Length of work | Very short in easy cases; messy when coefficients are large | Consistently clean, predictable routine |
| Common slip | Missing parentheses or flipping signs when rearranging | Sign errors during subtraction, or forgetting to multiply the right-hand side |
| Always works? | Yes | Yes |

**Rule of thumb:** First scan the equations to see if any variable has a coefficient of $1$ or $-1$. If yes, substitution is quick. If not, elimination is usually cleaner. Either way, verify in both equations—both methods must agree!

---

## Common Pitfalls to Avoid

1. **Mistake 1: Multiplying only one side of an equation.**
   Suppose you want to multiply $3x + 2y = 16$ by $2$.
   - Wrong: $6x + 4y = 16$ *(the right-hand side $16$ was left unmultiplied!)*
   - Right: $6x + 4y = \mathbf{32}$ *(both sides multiplied)*
   Forgetting the right-hand side completely changes the equation. Always multiply **every term on both sides**.

2. **Mistake 2: Sign errors when subtracting equations.**
   In $(5x + 3y) - (5x - 2y)$, **every** sign inside the second set of parentheses flips:
   - Wrong: $5x + 3y - 5x - 2y = y$ *(treating $+3y - (-2y)$ as $3y - 2y$)*
   - Right: $5x + 3y - 5x + 2y = \mathbf{5y}$
   Whenever you subtract, write out the parentheses explicitly or flip the sign of every term in the second equation before combining.

3. **Mistake 3: Stopping after finding the first variable.**
   In Example 1, finding $y = 2$ is only halfway done. You must back-substitute $y = 2$ into an equation to find $x = 3$. The solution is the **ordered pair $(x, y)$**, not a single number.

4. **Mistake 4: Assuming a variable was eliminated when its coefficients did not match.**
   If you subtract two equations before making a variable's coefficients equal (or add before making them opposite), neither variable cancels out. Always verify that the target variable's coefficients are **identical** (for subtraction) or **exact opposites** (for addition).

5. **Mistake 5: Checking in only one equation.**
   If you found $x$ by plugging $y$ into equation (1), then checking $(x, y)$ in equation (1) alone proves very little—it will look right even if your $y$ was wrong! Always check in **both** original equations.

---

## Quick Recap

- **Elimination:** Add or subtract the two equations to make one variable disappear.
- **Equal coefficients (same sign)** $\to$ **subtract**. **Opposite coefficients** $\to$ **add**.
- Otherwise, use the **LCM** of the coefficients and multiply **every term on both sides** of one or both equations until the coefficients match in size.
- Clear **decimals** (multiply by $10, 100, \dots$) and **fractions** (multiply by the LCM of denominators) before eliminating.
- Once one variable is found, **back-substitute** into either equation to find the other.
- For **symmetric swapped coefficients** ($ax + by = c$ and $bx + ay = d$), add and subtract the equations first to get simple $x + y$ and $x - y$ equations.
- **Always check your answer in both original equations.**

---

## Practice Questions

1. Solve by elimination: $2x + 5y = 16$ and $2x - 3y = 0$. Verify in both equations.

2. Solve by elimination: $3x - 2y = 5$ and $4x + 2y = 30$.

3. Solve: $3x + 4y = 10$ and $5x - 2y = 8$. *(Hint: multiply one equation so the coefficients of $y$ become opposites.)*

4. Solve by multiplying both equations: $3x + 5y = 21$ and $4x + 3y = 17$.

5. Solve: $0.5x + 0.2y = 2.1$ and $0.4x - 0.1y = 0.9$. Clear the decimals first.

6. Solve: $\dfrac{x}{2} + \dfrac{y}{4} = 4$ and $\dfrac{x}{3} + \dfrac{y}{2} = 4$. Clear the fractions first.

7. Solve using the "add and subtract" shortcut: $47x + 53y = 247$ and $53x + 47y = 253$.

8. A student solving $x + 2y = 7$ and $x - y = 1$ wrote: *"Subtract: $x - x = 0$, $2y - y = y$, $7 - 1 = 6$, so $y = 6$."* Identify the mistake and find the correct solution.

9. State whether each statement is True or False:
   (a) Adding two equations of a system produces a new equation that the system's solution still satisfies.
   (b) To clear a fraction, it is enough to multiply only the left-hand side of the equation by the LCM.
   (c) Once you have found the value of one variable, the system is solved.
   (d) For $3x + 2y = 7$ and $3x - 2y = 1$, adding the two equations eliminates $x$.

### Answers

1. The coefficients of $x$ are equal ($2$ and $2$), so subtract: $(2x + 5y) - (2x - 3y) = 16 - 0 \implies 8y = 16 \implies \mathbf{y = 2}$. Substitute into the first equation: $2x + 10 = 16 \implies 2x = 6 \implies \mathbf{x = 3}$.
   Check: $2(3) + 5(2) = 6 + 10 = 16$ ✅; $2(3) - 3(2) = 6 - 6 = 0$ ✅

2. The coefficients of $y$ are $-2$ and $+2$ (opposites), so add: $7x = 35 \implies \mathbf{x = 5}$. Substitute into the first equation: $15 - 2y = 5 \implies 2y = 10 \implies \mathbf{y = 5}$.
   Check: $3(5) - 2(5) = 15 - 10 = 5$ ✅; $4(5) + 2(5) = 20 + 10 = 30$ ✅

3. Multiply the second equation by $2$: $10x - 4y = 16$. Add to the first equation ($+4y$ and $-4y$ cancel): $(3x + 4y) + (10x - 4y) = 10 + 16 \implies 13x = 26 \implies \mathbf{x = 2}$. Substitute into the first equation: $6 + 4y = 10 \implies 4y = 4 \implies \mathbf{y = 1}$.
   Check: $3(2) + 4(1) = 10$ ✅; $5(2) - 2(1) = 8$ ✅

4. Eliminate $x$ ($\text{LCM}(3, 4) = 12$). Multiply the first equation by $4$: $12x + 20y = 84$. Multiply the second by $3$: $12x + 9y = 51$. Subtract: $11y = 33 \implies \mathbf{y = 3}$. Substitute into the first equation: $3x + 15 = 21 \implies 3x = 6 \implies \mathbf{x = 2}$.
   Check: $3(2) + 5(3) = 6 + 15 = 21$ ✅; $4(2) + 3(3) = 8 + 9 = 17$ ✅

5. Multiply both equations by $10$: $5x + 2y = 21$ and $4x - y = 9$. Multiply the second by $2$: $8x - 2y = 18$. Add: $13x = 39 \implies \mathbf{x = 3}$. From $4(3) - y = 9$, we get $\mathbf{y = 3}$.
   Check: $0.5(3) + 0.2(3) = 1.5 + 0.6 = 2.1$ ✅; $0.4(3) - 0.1(3) = 1.2 - 0.3 = 0.9$ ✅

6. Multiply the first equation by $4$: $2x + y = 16$. Multiply the second by $6$: $2x + 3y = 24$. Subtract: $(2x + 3y) - (2x + y) = 24 - 16 \implies 2y = 8 \implies \mathbf{y = 4}$. Then $2x + 4 = 16 \implies 2x = 12 \implies \mathbf{x = 6}$.
   Check: $\dfrac{6}{2} + \dfrac{4}{4} = 3 + 1 = 4$ ✅; $\dfrac{6}{3} + \dfrac{4}{2} = 2 + 2 = 4$ ✅

7. Add the equations: $100x + 100y = 500 \implies x + y = 5$. Subtract (second $-$ first): $6x - 6y = 6 \implies x - y = 1$. Add these two: $2x = 6 \implies \mathbf{x = 3}$, and $\mathbf{y = 2}$.
   Check: $47(3) + 53(2) = 141 + 106 = 247$ ✅; $53(3) + 47(2) = 159 + 94 = 253$ ✅

8. The mistake is a subtraction sign error: $-(-y) = +y$, so $2y - (-y) = 3y$, not $y$. Correct working: $(x + 2y) - (x - y) = 7 - 1 \implies 3y = 6 \implies \mathbf{y = 2}$. Then $x + 4 = 7 \implies \mathbf{x = 3}$.
   Check: $3 + 2(2) = 7$ ✅; $3 - 2 = 1$ ✅

9. (a) **True** ✅. Since $(x, y)$ makes both equations true, it also makes their sum true.
   (b) **False** ❌. You must multiply **every term on both sides** of the equation by the LCM.
   (c) **False** ❌. A solution is an ordered pair $(x, y)$, so you must still find the second variable.
   (d) **False** ❌. The coefficients of $y$ are $+2$ and $-2$, so adding eliminates **$y$** (giving $6x = 8$), not $x$.

---

Once elimination becomes second nature, solving systems gets noticeably faster: decide which variable to cancel, match its coefficients, add or subtract, and check both original equations.

**What's next?** So far we have handled each pair of equations step by step. In Topic 3, we will discover an intriguing formula-based method—**cross-multiplication**—where multiplying coefficients in a fixed cross pattern gives $x$ and $y$ directly in one line.
