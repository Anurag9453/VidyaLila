# Chapter: Simultaneous Linear Equations (Part 5)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [simultaneous-linear-equations-part4.md](simultaneous-linear-equations-part4.md)** (which covered graphical solutions and the number of solutions). Start from [simultaneous-linear-equations.md](simultaneous-linear-equations.md) for the earlier topics.
> **Topics covered in this file:**
> 5. Equations Reducible to Linear Form

---

# Topic 5: Equations Reducible to Linear Form

So far, you have mastered four ways to solve simultaneous linear equations: substitution, elimination, cross-multiplication, and graphing. In Topic 4, Maya's and Leo's routes crossed at $(3, 2)$, and we saw that two linear equations can have $0$, $1$, or infinitely many solutions. Every equation we handled shared one feature: $x$ and $y$ appeared cleanly in the numerator with power $1$, like $2x + 3y = 13$.

Today brings a twist: what if an equation does **not** look linear at first glance? Do we have to throw away all our methods? Not at all! In this topic, we will learn how a few sneaky equations wear a **disguise**—and how one quick change of variables strips away the disguise to reveal an ordinary linear system underneath.

---

## Maya, Elena, and the Mystery Box Clues

At the school autumn carnival, Dr. Bennett ran a "Mystery Lockbox" booth. He handed Maya and Elena two clue cards and announced, *"The padlock opens with two numbers $x$ and $y$. Solve both clues to unlock the prize!"*

The cards read:

> **Card 1:** $\dfrac{2}{x} + \dfrac{3}{y} = 13$
> **Card 2:** $\dfrac{5}{x} - \dfrac{4}{y} = -2$

Maya frowned. *"These don't have $x$ and $y$ on top—they have **$\frac{1}{x}$** and **$\frac{1}{y}$**! Neither substitution nor elimination works directly because these aren't even linear equations!"*

Maya was right: in a linear equation, variables sit directly in the numerator, like $3x$ or $2y$. Here $x$ and $y$ are tucked away in the denominators.

Elena studied the two cards closely. *"Wait—look at both cards. The exact same chunks **$\frac{1}{x}$** and **$\frac{1}{y}$** show up over and over. Let's give each chunk a temporary nickname: let **$\frac{1}{x} = u$** and **$\frac{1}{y} = v$**."*

Suddenly, the cards transformed into:

> **Card 1:** $2u + 3v = 13$
> **Card 2:** $5u - 4v = -2$

Maya's eyes lit up. *"Oh! Now they are just ordinary linear equations—only with $u$ and $v$ instead of $x$ and $y$!"*

Elena solved them by elimination. She multiplied Card 1 by $4$ and Card 2 by $3$:
- $8u + 12v = 52$
- $15u - 12v = -6$

Adding gave $23u = 46$, so **$u = 2$**. Plugging into $2(2) + 3v = 13$ gave $3v = 9$, so **$v = 3$**.

Maya reached for the padlock excitedly: *"Done! The code is $2$ and $3$!"*

Elena stopped her just in time. *"Hold on—$2$ and $3$ are $u$ and $v$, the nicknames we invented! The lock asks for $x$ and $y$."*

- Since $u = \dfrac{1}{x} = 2$, **$x = \dfrac{1}{2}$**
- Since $v = \dfrac{1}{y} = 3$, **$y = \dfrac{1}{3}$**

The true code was $\frac{1}{2}$ and $\frac{1}{3}$. Dr. Bennett grinned as the box clicked open: *"Double-step thinking—that's the secret!"*

**Check (in the original clue cards):**
- Card 1: $\dfrac{2}{1/2} + \dfrac{3}{1/3} = 4 + 9 = 13$ ✅
- Card 2: $\dfrac{5}{1/2} - \dfrac{4}{1/3} = 10 - 12 = -2$ ✅

That is the whole idea of this topic: **rename the repeating piece, solve the linear system, and then convert back to the original variables.**

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Reciprocal** | One divided by a number ("flipping" a fraction) | The reciprocal of $2$ is $\frac{1}{2}$; of $x$ is $\frac{1}{x}$ |
| **Change of variable (substitution)** | Giving a short new letter to a repeating algebraic chunk | Setting $u = \frac{1}{x}$ |
| **Reducible to linear form** | Rewriting a non-linear equation using new variables so it becomes linear | $\frac{2}{x} + \frac{3}{y} = 13 \to 2u + 3v = 13$ |
| **Converting back** | Using $u$ and $v$ at the end to recover the original $x$ and $y$ | $u = 2 \implies x = \frac{1}{u} = \frac{1}{2}$ |
| **Non-zero condition** | Stating that variables in denominators cannot equal $0$ | $x \neq 0, y \neq 0$ |

---

## Part A: Equations with $\frac{1}{x}$ and $\frac{1}{y}$

### How to Spot Them

Whenever $x$ and $y$ appear solely in the form **$\dfrac{1}{x}$** and **$\dfrac{1}{y}$** (multiplied by numbers in the numerator), use a change of variables.

The 4-step routine:
1. **Rename:** Set $u = \dfrac{1}{x}$ and $v = \dfrac{1}{y}$ (noting $x \neq 0, y \neq 0$).
2. **Rewrite:** Express both equations in terms of $u$ and $v$—they are now linear.
3. **Solve:** Use elimination, substitution, or cross-multiplication to find $u$ and $v$.
4. **Convert back and check:** Recover $x = \dfrac{1}{u}$ and $y = \dfrac{1}{v}$, then verify in the **original** equations.

### Example 1: $\dfrac{6}{x} + \dfrac{4}{y} = 4$ and $\dfrac{9}{x} - \dfrac{2}{y} = 2$

**Steps 1 and 2:** Let $u = \dfrac{1}{x}$ and $v = \dfrac{1}{y}$ ($x \neq 0, y \neq 0$):
- $6u + 4v = 4$ ...(i)
- $9u - 2v = 2$ ...(ii)

**Step 3:** Multiply (ii) by $2$: $18u - 4v = 4$ ...(iii). Add (i) and (iii):

$$6u + 18u = 24u, \quad 4v - 4v = 0, \quad 4 + 4 = 8 \implies 24u = 8 \implies \mathbf{u = \frac{1}{3}}$$

Substitute into (i): $6\left(\dfrac{1}{3}\right) + 4v = 4 \implies 2 + 4v = 4 \implies 4v = 2 \implies \mathbf{v = \frac{1}{2}}$.

**Step 4:** Convert back: $x = \dfrac{1}{u} = \mathbf{3}$, $y = \dfrac{1}{v} = \mathbf{2}$.

**Check (in the original equations):**
- $\dfrac{6}{3} + \dfrac{4}{2} = 2 + 2 = 4$ ✅
- $\dfrac{9}{3} - \dfrac{2}{2} = 3 - 1 = 2$ ✅

Notice how $u = \frac{1}{3}$ and $v = \frac{1}{2}$, whereas $x = 3$ and $y = 2$. Stopping at $u$ and $v$ would give the exact reciprocals of the right answers!

---

## Part B: When $xy$ Is in the Denominator

Sometimes an equation arrives looking like one big fraction over $xy$:

$$\frac{x + y}{xy} = 7$$

Split the single fraction into **two separate fractions** using $\dfrac{a + b}{c} = \dfrac{a}{c} + \dfrac{b}{c}$:

$$\frac{x + y}{xy} = \frac{x}{xy} + \frac{y}{xy} = \frac{1}{y} + \frac{1}{x}$$

In $\frac{x}{xy}$, $x$ cancels out leaving $\frac{1}{y}$; in $\frac{y}{xy}$, $y$ cancels out leaving $\frac{1}{x}$. Therefore:

$$\frac{x + y}{xy} = \mathbf{\frac{1}{x} + \frac{1}{y}}$$

Similarly, for subtraction:

$$\frac{x - y}{xy} = \frac{x}{xy} - \frac{y}{xy} = \mathbf{\frac{1}{y} - \frac{1}{x}}$$

Look very carefully at the order in that second identity: $\dfrac{x - y}{xy}$ equals **$\dfrac{1}{y} - \dfrac{1}{x}$** (*not* $\dfrac{1}{x} - \dfrac{1}{y}$!). Mixing up that order is a very common slip.

### Example 2: $\dfrac{x + y}{xy} = 7$ and $\dfrac{x - y}{xy} = -1$

Assuming $x \neq 0, y \neq 0$, split both fractions: $\dfrac{x + y}{xy} = \dfrac{1}{x} + \dfrac{1}{y}$ and $\dfrac{x - y}{xy} = \dfrac{1}{y} - \dfrac{1}{x}$.

Set $u = \dfrac{1}{x}$ and $v = \dfrac{1}{y}$:
- $u + v = 7$ ...(i)
- $v - u = -1$ ...(ii)

Add (i) and (ii): $2v = 6 \implies \mathbf{v = 3}$. From (i), $u = 7 - 3 = \mathbf{4}$.

Convert back: **$x = \dfrac{1}{4}$**, **$y = \dfrac{1}{3}$**.

**Check (in the original equations):**
- $x + y = \frac{1}{4} + \frac{1}{3} = \frac{7}{12}$ and $xy = \frac{1}{12}$, so $\dfrac{x + y}{xy} = \dfrac{7/12}{1/12} = 7$ ✅
- $x - y = \frac{1}{4} - \frac{1}{3} = -\frac{1}{12}$, so $\dfrac{x - y}{xy} = \dfrac{-1/12}{1/12} = -1$ ✅

---

## Part C: Equations with $\frac{1}{x + y}$ and $\frac{1}{x - y}$

Here an **entire bracketed expression** sits in the denominator, such as $\dfrac{1}{x + y}$ and $\dfrac{1}{x - y}$. The trick stays the same—give each full reciprocal chunk its own letter:

$$u = \frac{1}{x + y}, \qquad v = \frac{1}{x - y}$$

Once you solve the linear system for $u$ and $v$, converting back happens in **two stages**:
1. Find $x + y = \dfrac{1}{u}$ and $x - y = \dfrac{1}{v}$.
2. Solve that new, simple linear system in $x$ and $y$ by elimination!

### Example 3: $\dfrac{12}{x + y} + \dfrac{8}{x - y} = 6$ and $\dfrac{6}{x + y} - \dfrac{4}{x - y} = -1$

Condition: $x + y \neq 0$ and $x - y \neq 0$ (since division by zero is undefined).

Set $u = \dfrac{1}{x + y}$ and $v = \dfrac{1}{x - y}$:
- $12u + 8v = 6$ ...(i)
- $6u - 4v = -1$ ...(ii)

Multiply (ii) by $2$: $12u - 8v = -2$ ...(iii). Add (i) and (iii): $24u = 4 \implies \mathbf{u = \frac{1}{6}}$.

Substitute into (i): $12\left(\dfrac{1}{6}\right) + 8v = 6 \implies 2 + 8v = 6 \implies 8v = 4 \implies \mathbf{v = \frac{1}{2}}$.

**Stage 1 of converting back:**
- $x + y = \dfrac{1}{u} = \mathbf{6}$
- $x - y = \dfrac{1}{v} = \mathbf{2}$

**Stage 2 (solve the mini-system):** Add both equations: $2x = 8 \implies \mathbf{x = 4}$. Then $y = 6 - 4 = \mathbf{2}$.

**Check (in the original equations):** Since $x + y = 6$ and $x - y = 2$:
- $\dfrac{12}{6} + \dfrac{8}{2} = 2 + 4 = 6$ ✅
- $\dfrac{6}{6} - \dfrac{4}{2} = 1 - 2 = -1$ ✅

Notice the two conversion stages here: first $u, v \to (x + y), (x - y)$, and then $(x + y), (x - y) \to x, y$. Both stages are essential!

---

## Part D: Equations Containing $xy$ — Dividing by $xy$

Sometimes an equation contains a product term **$xy$** directly:

$$\begin{aligned}
6x + 3y &= 6xy \\
2x + 4y &= 5xy
\end{aligned}$$

This is not linear because $xy$ multiplies two variables together. The trick: **divide both sides of every equation by $xy$**. That turns $\frac{x}{xy}$ into $\frac{1}{y}$ and $\frac{y}{xy}$ into $\frac{1}{x}$!

**Mandatory condition:** You may divide by $xy$ *only* when $xy \neq 0$, which means **$x \neq 0$ and $y \neq 0$**. Division by zero is never allowed, so state this condition upfront.

### Example 4: $6x + 3y = 6xy$ and $2x + 4y = 5xy$

Assume $x \neq 0$ and $y \neq 0$. Divide both sides of each equation by $xy$:
- $\dfrac{6x}{xy} + \dfrac{3y}{xy} = \dfrac{6xy}{xy} \implies \dfrac{6}{y} + \dfrac{3}{x} = 6$
- $\dfrac{2x}{xy} + \dfrac{4y}{xy} = \dfrac{5xy}{xy} \implies \dfrac{2}{y} + \dfrac{4}{x} = 5$

Set $u = \dfrac{1}{x}$ and $v = \dfrac{1}{y}$:
- $3u + 6v = 6$ — divide through by $3$: **$u + 2v = 2$** ...(i)
- $4u + 2v = 5$ ...(ii)

Subtract (ii) $-$ (i): $3u = 3 \implies \mathbf{u = 1}$. From (i), $2v = 2 - 1 = 1 \implies \mathbf{v = \frac{1}{2}}$.

Convert back: $x = \dfrac{1}{u} = \mathbf{1}$, $y = \dfrac{1}{v} = \mathbf{2}$.

**Check (in the original equations):**
- $6(1) + 3(2) = 6 + 6 = 12$, and $6xy = 6(1)(2) = 12$ ✅
- $2(1) + 4(2) = 2 + 8 = 10$, and $5xy = 5(1)(2) = 10$ ✅

*(One small note: $(0, 0)$ also technically satisfies $6(0) + 3(0) = 6(0)(0)$, i.e., $0 = 0$. That is the trivial zero solution; by stating $x \neq 0, y \neq 0$, we are specifically finding the non-zero solution.)*

---

## Part E: When Denominators Are $x - a$ or $y - b$

The renaming trick works for **any** repeating fractional piece: $\frac{1}{x}$, $\frac{1}{x + y}$, $\frac{1}{x - 1}$, $\frac{1}{y + 2}$, and so on.

### Example 5: $\dfrac{5}{x - 1} + \dfrac{1}{y - 2} = 2$ and $\dfrac{6}{x - 1} - \dfrac{3}{y - 2} = 1$

Condition: $x \neq 1, y \neq 2$.

Set $u = \dfrac{1}{x - 1}$ and $v = \dfrac{1}{y - 2}$:
- $5u + v = 2$ ...(i)
- $6u - 3v = 1$ ...(ii)

Multiply (i) by $3$: $15u + 3v = 6$ ...(iii). Add (ii) and (iii): $21u = 7 \implies \mathbf{u = \frac{1}{3}}$.

From (i): $v = 2 - 5\left(\dfrac{1}{3}\right) = 2 - \dfrac{5}{3} = \mathbf{\frac{1}{3}}$.

Convert back:
- $x - 1 = \dfrac{1}{u} = 3 \implies \mathbf{x = 4}$
- $y - 2 = \dfrac{1}{v} = 3 \implies \mathbf{y = 5}$

**Check (in the original equations):**
- $\dfrac{5}{4 - 1} + \dfrac{1}{5 - 2} = \dfrac{5}{3} + \dfrac{1}{3} = \dfrac{6}{3} = 2$ ✅
- $\dfrac{6}{4 - 1} - \dfrac{3}{5 - 2} = \dfrac{6}{3} - \dfrac{3}{3} = 2 - 1 = 1$ ✅

---

## Part F: Putting It All Together

### Example 6: $\dfrac{10}{x + y} + \dfrac{2}{x - y} = 4$ and $\dfrac{15}{x + y} - \dfrac{5}{x - y} = -2$

Condition: $x + y \neq 0, x - y \neq 0$.

Set $u = \dfrac{1}{x + y}$ and $v = \dfrac{1}{x - y}$:
- $10u + 2v = 4$ ...(i)
- $15u - 5v = -2$ ...(ii)

Multiply (i) by $5$: $50u + 10v = 20$. Multiply (ii) by $2$: $30u - 10v = -4$. Add them: $80u = 16 \implies \mathbf{u = \frac{1}{5}}$.

From (i): $10\left(\dfrac{1}{5}\right) + 2v = 4 \implies 2 + 2v = 4 \implies \mathbf{v = 1}$.

Convert back:
- $x + y = \dfrac{1}{u} = \mathbf{5}$
- $x - y = \dfrac{1}{v} = \mathbf{1}$

Add these two: $2x = 6 \implies \mathbf{x = 3}$. Then $y = 5 - 3 = \mathbf{2}$.

**Check (in the original equations):**
- $\dfrac{10}{3 + 2} + \dfrac{2}{3 - 2} = \dfrac{10}{5} + \dfrac{2}{1} = 2 + 2 = 4$ ✅
- $\dfrac{15}{3 + 2} - \dfrac{5}{3 - 2} = \dfrac{15}{5} - \dfrac{5}{1} = 3 - 5 = -2$ ✅

---

## Common Pitfalls to Avoid

1. **Mistake 1: Stopping at $u$ and $v$ without converting back to $x$ and $y$.**
   In the Mystery Box story, solving gave $u = 2, v = 3$. Writing $x = 2, y = 3$ fails immediately when checked: $\frac{2}{2} + \frac{3}{3} = 1 + 1 = 2 \neq 13$ ❌. The right answer is **$x = \frac{1}{2}, y = \frac{1}{3}$**. Always ask yourself at the end: *"Did the problem ask for $u, v$ or $x, y$?"*

2. **Mistake 2: Dividing by $xy$ without stating $x \neq 0, y \neq 0$.**
   Before dividing $6x + 3y = 6xy$ by $xy$, you must write **$x \neq 0, y \neq 0$**. Dividing by $xy$ when either variable could be zero would mean dividing by $0$, which is mathematically illegal. Make it a habit: **state the non-zero condition before you divide.**

3. **Mistake 3: Splitting $\dfrac{1}{x + y}$ into $\dfrac{1}{x} + \dfrac{1}{y}$.**
   This is one of the most dangerous algebra traps! Test it with $x = 1, y = 1$:
   - $\dfrac{1}{x + y} = \dfrac{1}{1 + 1} = \mathbf{\dfrac{1}{2}}$
   - $\dfrac{1}{x} + \dfrac{1}{y} = \dfrac{1}{1} + \dfrac{1}{1} = \mathbf{2}$
   Clearly $\frac{1}{2} \neq 2$, so $\dfrac{1}{x + y} \neq \dfrac{1}{x} + \dfrac{1}{y}$. That is exactly why in Part C we treated the whole denominator $(x + y)$ as one chunk $u = \dfrac{1}{x + y}$ rather than trying to break it apart.

4. **Mistake 4: Rewriting $\dfrac{x - y}{xy}$ as $\dfrac{1}{x} - \dfrac{1}{y}$.**
   The true simplification is $\dfrac{1}{y} - \dfrac{1}{x}$. Quick test with $x = 2, y = 4$:
   - $\dfrac{2 - 4}{2 \times 4} = \dfrac{-2}{8} = -\dfrac{1}{4}$
   - $\dfrac{1}{y} - \dfrac{1}{x} = \dfrac{1}{4} - \dfrac{1}{2} = -\dfrac{1}{4}$ ✅, whereas $\dfrac{1}{x} - \dfrac{1}{y} = \dfrac{1}{2} - \dfrac{1}{4} = +\dfrac{1}{4}$ ❌.

5. **Mistake 5: Checking your answer only in the $u, v$ equations.**
   Always verify $x$ and $y$ in the **original** equations. Checking only in the transformed $u, v$ equations will never catch a mistake made while substituting $u$ and $v$ or converting back!

---

## Quick Recap

- For equations like $\dfrac{2}{x} + \dfrac{3}{y} = 13$, set **$u = \dfrac{1}{x}, v = \dfrac{1}{y}$** ($x, y \neq 0$) to make the system **linear** in $u$ and $v$.
- Solve for $u$ and $v$ using any standard method, then **convert back**: **$x = \dfrac{1}{u}, y = \dfrac{1}{v}$**.
- Fraction splitting: $\dfrac{x + y}{xy} = \dfrac{1}{x} + \dfrac{1}{y}$ and $\dfrac{x - y}{xy} = \dfrac{1}{y} - \dfrac{1}{x}$.
- For $\dfrac{1}{x + y}$ and $\dfrac{1}{x - y}$, set **$u = \dfrac{1}{x + y}, v = \dfrac{1}{x - y}$**, solve for $u, v$, convert back to $x + y = \dfrac{1}{u}$ and $x - y = \dfrac{1}{v}$, and solve that second linear system for $x$ and $y$.
- For equations like $6x + 3y = 6xy$, state **$x \neq 0, y \neq 0$** first, then **divide both sides by $xy$**.
- Any repeating reciprocal chunk (like $\dfrac{1}{x - 1}$) can be renamed with $u$ or $v$.
- Always **check in the original equations**, never skip converting back, and never split $\dfrac{1}{x + y}$.

---

## Practice Questions

1. Solve: $\dfrac{4}{x} + \dfrac{8}{y} = 4$ and $\dfrac{6}{x} - \dfrac{4}{y} = 2$. Verify your answer in the original equations.

2. Solve: $\dfrac{x + y}{xy} = 3$ and $\dfrac{x - y}{xy} = 1$.

3. Solve: $\dfrac{4}{x + y} + \dfrac{6}{x - y} = 4$ and $\dfrac{8}{x + y} - \dfrac{6}{x - y} = -1$.

4. Solve ($x \neq 0$ and $y \neq 0$): $4x + 2y = 4xy$ and $2x + 3y = 4xy$.

5. Solve: $\dfrac{2}{x - 2} + \dfrac{4}{y + 1} = 2$ and $\dfrac{6}{x - 2} - \dfrac{8}{y + 1} = 1$.

6. A student solved $\dfrac{2}{x} + \dfrac{3}{y} = 13$ and $\dfrac{5}{x} - \dfrac{4}{y} = -2$, found $u = 2$ and $v = 3$, and wrote the final answer as $x = 2, y = 3$. Identify the mistake and give the correct solution.

7. A student says: *"To solve $2x + y = 3xy$, I will divide by $xy$. I don't need to state anything else."* What condition is the student missing? Explain why it is required.

8. State whether each statement is True or False:
   (a) $\dfrac{1}{x + y} = \dfrac{1}{x} + \dfrac{1}{y}$.
   (b) The equation $\dfrac{2}{x} + \dfrac{3}{y} = 13$ is a linear equation in $x$ and $y$.
   (c) The equation $\dfrac{2}{x} + \dfrac{3}{y} = 13$ becomes linear in $u$ and $v$ when $u = \dfrac{1}{x}$ and $v = \dfrac{1}{y}$.
   (d) If $u = \dfrac{1}{x + y} = \dfrac{1}{6}$, then $x + y = 6$.

### Answers

1. Set $u = \frac{1}{x}, v = \frac{1}{y}$: $4u + 8v = 4 \implies u + 2v = 1$ ...(i); $6u - 4v = 2 \implies 3u - 2v = 1$ ...(ii). Add: $4u = 2 \implies \mathbf{u = \frac{1}{2}}$. From (i), $2v = 1 - \frac{1}{2} = \frac{1}{2} \implies \mathbf{v = \frac{1}{4}}$. Convert back: **$x = 2, y = 4$**.
   Check: $\frac{4}{2} + \frac{8}{4} = 2 + 2 = 4$ ✅ and $\frac{6}{2} - \frac{4}{4} = 3 - 1 = 2$ ✅

2. $\frac{x + y}{xy} = \frac{1}{x} + \frac{1}{y}$ and $\frac{x - y}{xy} = \frac{1}{y} - \frac{1}{x}$. With $u = \frac{1}{x}, v = \frac{1}{y}$: $u + v = 3$ and $v - u = 1$. Add: $2v = 4 \implies \mathbf{v = 2}$, $u = 3 - 2 = \mathbf{1}$. Convert back: **$x = 1, y = \frac{1}{2}$**.
   Check: $x + y = \frac{3}{2}, xy = \frac{1}{2} \implies \frac{3/2}{1/2} = 3$ ✅; $x - y = \frac{1}{2} \implies \frac{1/2}{1/2} = 1$ ✅

3. Set $u = \frac{1}{x + y}, v = \frac{1}{x - y}$: $4u + 6v = 4$ ...(i); $8u - 6v = -1$ ...(ii). Add: $12u = 3 \implies \mathbf{u = \frac{1}{4}}$. From (i): $1 + 6v = 4 \implies 6v = 3 \implies \mathbf{v = \frac{1}{2}}$. Thus $x + y = 4$ and $x - y = 2$. Add: $2x = 6 \implies \mathbf{x = 3}$, $y = 4 - 3 = \mathbf{1}$.
   Check: $\frac{4}{4} + \frac{6}{2} = 1 + 3 = 4$ ✅ and $\frac{8}{4} - \frac{6}{2} = 2 - 3 = -1$ ✅

4. Since $x \neq 0, y \neq 0$, divide by $xy$: $\frac{4}{y} + \frac{2}{x} = 4$ and $\frac{2}{y} + \frac{3}{x} = 4$. With $u = \frac{1}{x}, v = \frac{1}{y}$: $2u + 4v = 4 \implies u + 2v = 2$ ...(i); $3u + 2v = 4$ ...(ii). Subtract (ii) $-$ (i): $2u = 2 \implies \mathbf{u = 1}$. From (i): $2v = 1 \implies \mathbf{v = \frac{1}{2}}$. Convert back: **$x = 1, y = 2$**.
   Check: $4(1) + 2(2) = 8$ and $4xy = 4(2) = 8$ ✅; $2(1) + 3(2) = 8$ and $4xy = 8$ ✅

5. Set $u = \frac{1}{x - 2}, v = \frac{1}{y + 1}$: $2u + 4v = 2 \implies u + 2v = 1$ ...(i); $6u - 8v = 1$ ...(ii). Multiply (i) by $4$: $4u + 8v = 4$. Add to (ii): $10u = 5 \implies \mathbf{u = \frac{1}{2}}$. From (i): $2v = \frac{1}{2} \implies \mathbf{v = \frac{1}{4}}$. Thus $x - 2 = 2 \implies \mathbf{x = 4}$, and $y + 1 = 4 \implies \mathbf{y = 3}$.
   Check: $\frac{2}{4 - 2} + \frac{4}{3 + 1} = 1 + 1 = 2$ ✅ and $\frac{6}{2} - \frac{8}{4} = 3 - 2 = 1$ ✅

6. Mistake: $u = 2$ means $\frac{1}{x} = 2$, so $x = \frac{1}{2}$ (not $x = 2$). Likewise $v = 3$ gives $y = \frac{1}{3}$. Correct answer: **$x = \frac{1}{2}, y = \frac{1}{3}$**.
   Check: the wrong answer $x = 2, y = 3$ gives $\frac{2}{2} + \frac{3}{3} = 2 \neq 13$ ❌, while the correct answer gives $\frac{2}{1/2} + \frac{3}{1/3} = 4 + 9 = 13$ ✅.

7. The student must state **$x \neq 0$ and $y \neq 0$**, because dividing by $xy$ is only valid when $xy \neq 0$ (division by zero is undefined). Notice that $(0, 0)$ satisfies $2x + y = 3xy$ ($0 = 0$), yet it is excluded from the division step—so stating the non-zero condition is essential.

8. (a) **False** ❌. Testing $x = y = 1$ gives $\frac{1}{x + y} = \frac{1}{2}$, whereas $\frac{1}{x} + \frac{1}{y} = 2$.
   (b) **False** ❌. Because $x$ and $y$ appear in denominators, it is not linear in $x$ and $y$.
   (c) **True** ✅. It becomes $2u + 3v = 13$, which is linear in $u$ and $v$.
   (d) **True** ✅. Taking reciprocals gives $x + y = \frac{1}{u} = \frac{1}{1/6} = 6$.

---

Look how neatly a simple change of variables turned intimidating non-linear equations into familiar linear ones! Whenever an equation looks strange, ask yourself: *is there a repeating chunk I can give a temporary nickname to?*

**What's next?** Up to now, every system was handed to us already written in algebra. In Topic 6, we step into **real-world word problems**—numbers, ages, fractions, and two-digit puzzles—where our first job is translating English sentences into two equations before solving them.
