# Chapter: Number Systems (Part 5)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [number-systems-part4.md](number-systems-part4.md).** (Topic 1 is in [number-systems.md](number-systems.md).)
> **Topics covered in this file:**
> 5. Rationalisation of Denominators

---

# Topic 5: Rationalisation of Denominators

In Topic 4, we learned how to add, subtract, and multiply real numbers, simplify surds (such as $\sqrt{50} = 5\sqrt{2}$), and apply square root identities. One of those identities holds the **key** to this entire topic:

> $$(\sqrt{a} + \sqrt{b})(\sqrt{a} - \sqrt{b}) = a - b \quad \text{and} \quad (a + \sqrt{b})(a - \sqrt{b}) = a^2 - b$$

Notice something remarkable: the left-hand side contains square roots, yet on the right-hand side **every root vanishes**. Using that exact property, we can remove roots from the bottom (denominator) of any fraction. This process is called **rationalisation**.

---

## Mr. Thorne's Long Division Story

When Maya's grandfather, Mr. Thorne, was in school, pocket calculators did not exist. Engineers and students working on architectural designs or geometry problems did all their arithmetic by hand. One morning, his mathematics teacher wrote a single problem on the chalkboard:

**Evaluate $\dfrac{1}{\sqrt{2}}$.**

Everyone in the class knew that $\sqrt{2} \approx 1.41421$. So the problem became:

$$1 \div 1.41421 = \text{?}$$

Imagine dividing $1$ by $1.41421$ by hand! First you shift the decimal point to divide $100{,}000$ by $141{,}421$, then carry out step after step of tedious long division with six-digit divisors. The entire class struggled with it for ten minutes.

Then Mr. Thorne's classmate spotted a clever trick. He multiplied both the top and bottom of the fraction by $\sqrt{2}$:

$$\frac{1}{\sqrt{2}} = \frac{1 \times \sqrt{2}}{\sqrt{2} \times \sqrt{2}} = \frac{\sqrt{2}}{2}$$

Suddenly, the division became **$1.41421 \div 2$**. You can do that in your head in seconds: **$0.707105$**.

The numerical value did not change at all, yet a ten-minute calculation turned into a ten-second mental division—all because **there was no longer a root in the denominator**, just the clean whole number $2$.

Even in an age of calculators, rationalising denominators remains essential because:
- It leaves answers in a clean, standard form ($\frac{\sqrt{2}}{2}$ rather than $\frac{1}{\sqrt{2}}$).
- It makes comparing or combining different expressions much easier.
- It is a core algebraic step used repeatedly in higher mathematics, trigonometry, and architectural geometry.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Rationalise** | To rewrite a fraction so its denominator is a rational number (free of roots), without changing its value | $\dfrac{1}{\sqrt{2}} \to \dfrac{\sqrt{2}}{2}$ |
| **Rationalising factor** | An expression used to multiply both numerator and denominator so that the root in the denominator disappears | For $\dfrac{1}{\sqrt{2}}$, the rationalising factor is $\sqrt{2}$ |
| **Conjugate** | For $a + \sqrt{b}$, its conjugate is $a - \sqrt{b}$ (obtained by reversing only the sign between the two terms) | The conjugate of $2 + \sqrt{3}$ is $2 - \sqrt{3}$ |
| **Conjugate pair** | Two binomial surds whose product eliminates all square roots | $(2 + \sqrt{3})(2 - \sqrt{3}) = 4 - 3 = 1$ |

---

## Part A: What Is Rationalisation, and Why Does the Value Stay Unchanged?

Whenever you multiply both the numerator and the denominator of a fraction by the **same non-zero number**, its value remains unchanged—because you are really just multiplying the fraction by **$1$**.

For example: $\dfrac{3}{4} = \dfrac{3 \times 5}{4 \times 5} = \dfrac{15}{20}$. Both represent the exact same number.

Rationalisation works the exact same way. We choose an expression—the **rationalising factor**—such that multiplying the denominator by it removes every root:

$$\frac{1}{\sqrt{2}} = \frac{1}{\sqrt{2}} \times \frac{\sqrt{2}}{\sqrt{2}} = \frac{\sqrt{2}}{2}$$

Since $\dfrac{\sqrt{2}}{\sqrt{2}} = 1$, the value does not change at all; only its form becomes cleaner.

> **Golden Rule:** Whatever you multiply the denominator by, you **must multiply the numerator by the exact same expression.**

### How Do We Choose a Rationalising Factor?

| Form of Denominator | Rationalising Factor | Reason |
|---|---|---|
| $\sqrt{a}$ | $\sqrt{a}$ | $\sqrt{a} \times \sqrt{a} = a$ |
| $a + \sqrt{b}$ | $a - \sqrt{b}$ | $(a + \sqrt{b})(a - \sqrt{b}) = a^2 - b$ |
| $a - \sqrt{b}$ | $a + \sqrt{b}$ | $(a - \sqrt{b})(a + \sqrt{b}) = a^2 - b$ |
| $\sqrt{a} + \sqrt{b}$ | $\sqrt{a} - \sqrt{b}$ | $(\sqrt{a} + \sqrt{b})(\sqrt{a} - \sqrt{b}) = a - b$ |
| $\sqrt{a} - \sqrt{b}$ | $\sqrt{a} + \sqrt{b}$ | $(\sqrt{a} - \sqrt{b})(\sqrt{a} + \sqrt{b}) = a - b$ |

The rule is simple: **when the denominator has two terms, flip the sign between them.** That gives the conjugate—and the rationalising factor.

---

## Part B: Type 1 — A Single Root in the Denominator ($\frac{1}{\sqrt{a}}$ and $\frac{k}{\sqrt{a}}$)

When the denominator contains only a single square root $\sqrt{a}$, multiply both top and bottom by **$\sqrt{a}$**.

**Example 1:** Rationalise the denominator of $\dfrac{1}{\sqrt{2}}$.

$$\frac{1}{\sqrt{2}} = \frac{1 \times \sqrt{2}}{\sqrt{2} \times \sqrt{2}} = \mathbf{\frac{\sqrt{2}}{2}}$$

Check: $\dfrac{1}{\sqrt{2}} \approx \dfrac{1}{1.41421} \approx 0.7071$, and $\dfrac{\sqrt{2}}{2} \approx \dfrac{1.41421}{2} \approx 0.7071$ ✅

**Example 2:** Rationalise the denominator of $\dfrac{6}{\sqrt{3}}$.

$$\frac{6}{\sqrt{3}} = \frac{6 \times \sqrt{3}}{\sqrt{3} \times \sqrt{3}} = \frac{6\sqrt{3}}{3} = \mathbf{2\sqrt{3}}$$

Check: $\dfrac{6}{\sqrt{3}} \approx \dfrac{6}{1.732} \approx 3.464$, and $2\sqrt{3} \approx 2 \times 1.732 = 3.464$ ✅

**Example 3:** Rationalise the denominator of $\dfrac{3}{2\sqrt{5}}$.

Here the denominator is $2\sqrt{5}$. Multiplying by $\sqrt{5}$ alone is enough (since $2$ is already rational):

$$\frac{3}{2\sqrt{5}} = \frac{3 \times \sqrt{5}}{2\sqrt{5} \times \sqrt{5}} = \frac{3\sqrt{5}}{2 \times 5} = \mathbf{\frac{3\sqrt{5}}{10}}$$

Check: $\dfrac{3}{2 \times 2.236} = \dfrac{3}{4.472} \approx 0.6708$, and $\dfrac{3 \times 2.236}{10} = 0.6708$ ✅

---

## Part C: Type 2 — "Number $\pm$ Root" in the Denominator ($\frac{1}{a \pm \sqrt{b}}$)

Now suppose the denominator has two terms, such as $2 + \sqrt{3}$. If we multiply top and bottom only by $\sqrt{3}$, the root does not disappear:

$$(2 + \sqrt{3}) \times \sqrt{3} = 2\sqrt{3} + 3 \quad \text{(still has a root!)}$$

Instead, we multiply by the **conjugate**, using Identity 4 from Topic 4: $(a + \sqrt{b})(a - \sqrt{b}) = a^2 - b$.

**Example 4:** Rationalise the denominator of $\dfrac{1}{2 + \sqrt{3}}$.

Conjugate of $2 + \sqrt{3}$ is $2 - \sqrt{3}$:

$$\frac{1}{2 + \sqrt{3}} = \frac{1 \times (2 - \sqrt{3})}{(2 + \sqrt{3})(2 - \sqrt{3})}$$

Denominator: $2^2 - (\sqrt{3})^2 = 4 - 3 = 1$.

$$= \frac{2 - \sqrt{3}}{1} = \mathbf{2 - \sqrt{3}}$$

Check: $\dfrac{1}{2 + 1.732} = \dfrac{1}{3.732} \approx 0.268$, and $2 - 1.732 = 0.268$ ✅

**Example 5:** Rationalise the denominator of $\dfrac{1}{5 - \sqrt{3}}$.

Conjugate: $5 + \sqrt{3}$.

Denominator: $5^2 - (\sqrt{3})^2 = 25 - 3 = 22$.

$$\frac{1}{5 - \sqrt{3}} = \mathbf{\frac{5 + \sqrt{3}}{22}}$$

Check: $\dfrac{1}{5 - 1.732} = \dfrac{1}{3.268} \approx 0.306$, and $\dfrac{5 + 1.732}{22} = \dfrac{6.732}{22} \approx 0.306$ ✅

**Example 6:** Rationalise the denominator of $\dfrac{1}{3 + 2\sqrt{2}}$.

Conjugate: $3 - 2\sqrt{2}$.

Denominator: $3^2 - (2\sqrt{2})^2 = 9 - 4 \times 2 = 9 - 8 = 1$.

$$\frac{1}{3 + 2\sqrt{2}} = \mathbf{3 - 2\sqrt{2}}$$

Be careful here: $(2\sqrt{2})^2 = 2^2 \times (\sqrt{2})^2 = 4 \times 2 = 8$, **not** $2 \times 2 = 4$. Square both the coefficient and the root!

Check: $\dfrac{1}{3 + 2.828} = \dfrac{1}{5.828} \approx 0.1716$, and $3 - 2.828 = 0.172$ ✅

---

## Part D: Type 3 — "Root $\pm$ Root" in the Denominator ($\frac{1}{\sqrt{a} \pm \sqrt{b}}$)

When both terms in the denominator contain roots, the method stays the same: **multiply top and bottom by the conjugate**, using $(\sqrt{a} + \sqrt{b})(\sqrt{a} - \sqrt{b}) = a - b$.

**Example 7:** Rationalise the denominator of $\dfrac{1}{\sqrt{7} - \sqrt{6}}$.

Conjugate: $\sqrt{7} + \sqrt{6}$.

Denominator: $(\sqrt{7})^2 - (\sqrt{6})^2 = 7 - 6 = 1$.

$$\frac{1}{\sqrt{7} - \sqrt{6}} = \mathbf{\sqrt{7} + \sqrt{6}}$$

Check: $\sqrt{7} \approx 2.6458$, $\sqrt{6} \approx 2.4495$. $\dfrac{1}{2.6458 - 2.4495} = \dfrac{1}{0.1963} \approx 5.094$, and $2.6458 + 2.4495 = 5.095$ ✅

**Example 8:** Rationalise the denominator of $\dfrac{1}{\sqrt{5} + \sqrt{2}}$.

Conjugate: $\sqrt{5} - \sqrt{2}$.

Denominator: $5 - 2 = 3$.

$$\frac{1}{\sqrt{5} + \sqrt{2}} = \mathbf{\frac{\sqrt{5} - \sqrt{2}}{3}}$$

Check: $\dfrac{1}{2.236 + 1.414} = \dfrac{1}{3.650} \approx 0.274$, and $\dfrac{2.236 - 1.414}{3} = \dfrac{0.822}{3} \approx 0.274$ ✅

**Example 9:** Rationalise the denominator of $\dfrac{1}{\sqrt{3} - 1}$.

Think of $1$ as $\sqrt{1}$ if it helps. Conjugate: $\sqrt{3} + 1$.

Denominator: $3 - 1 = 2$.

$$\frac{1}{\sqrt{3} - 1} = \mathbf{\frac{\sqrt{3} + 1}{2}}$$

---

## Part E: Type 4 — Roots in the Numerator Too, and Combinations

What if there are roots in the numerator as well? Nothing changes in the strategy: find the conjugate of the **denominator**, and multiply both top and bottom by it. You just have to expand the numerator carefully.

**Example 10:** Simplify $\dfrac{\sqrt{3} + \sqrt{2}}{\sqrt{3} - \sqrt{2}}$.

Conjugate of the denominator: $\sqrt{3} + \sqrt{2}$.

Numerator: $(\sqrt{3} + \sqrt{2})(\sqrt{3} + \sqrt{2}) = (\sqrt{3} + \sqrt{2})^2 = 3 + 2 + 2\sqrt{6} = 5 + 2\sqrt{6}$.
Denominator: $3 - 2 = 1$.

$$= \mathbf{5 + 2\sqrt{6}}$$

*(Here we used $(\sqrt{a} + \sqrt{b})^2 = a + b + 2\sqrt{ab}$ from Topic 4's identities.)*

Check: $\dfrac{1.732 + 1.414}{1.732 - 1.414} = \dfrac{3.146}{0.318} \approx 9.89$, and $5 + 2(2.449) = 9.898$ ✅

**Example 11:** Simplify $\dfrac{3 - \sqrt{5}}{3 + \sqrt{5}}$.

Conjugate of the denominator: $3 - \sqrt{5}$.

Numerator: $(3 - \sqrt{5})^2 = 9 + 5 - 6\sqrt{5} = 14 - 6\sqrt{5}$.
Denominator: $9 - 5 = 4$.

$$= \frac{14 - 6\sqrt{5}}{4} = \mathbf{\frac{7 - 3\sqrt{5}}{2}}$$

Check: $\dfrac{3 - 2.236}{3 + 2.236} = \dfrac{0.764}{5.236} \approx 0.146$, and $\dfrac{7 - 6.708}{2} = 0.146$ ✅

**Example 12 (Combining two fractions):** Simplify $\dfrac{1}{\sqrt{3} + \sqrt{2}} - \dfrac{1}{\sqrt{3} - \sqrt{2}}$.

Rationalise each fraction separately:
- $\dfrac{1}{\sqrt{3} + \sqrt{2}} = \dfrac{\sqrt{3} - \sqrt{2}}{3 - 2} = \sqrt{3} - \sqrt{2}$
- $\dfrac{1}{\sqrt{3} - \sqrt{2}} = \dfrac{\sqrt{3} + \sqrt{2}}{3 - 2} = \sqrt{3} + \sqrt{2}$

Now subtract:
$$(\sqrt{3} - \sqrt{2}) - (\sqrt{3} + \sqrt{2}) = \sqrt{3} - \sqrt{2} - \sqrt{3} - \sqrt{2} = \mathbf{-2\sqrt{2}}$$

Check: $\dfrac{1}{3.146} - \dfrac{1}{0.318} \approx 0.318 - 3.146 = -2.828$, and $-2 \times 1.414 = -2.828$ ✅

---

## Part F: "Find $a$ and $b$" Problems

A classic exam question gives a fraction and asks you to express it in the form **$a + b\sqrt{c}$** (where $a$ and $b$ are rational numbers).

**Method:** Rationalise the denominator first, simplify the expression into rational and irrational parts, and compare both sides. The rational part gives **$a$**, and the coefficient of $\sqrt{c}$ gives **$b$**.

**Example 13:** If $\dfrac{5 + 2\sqrt{3}}{7 + 4\sqrt{3}} = a + b\sqrt{3}$, find $a$ and $b$.

Conjugate of the denominator: $7 - 4\sqrt{3}$.

Denominator: $7^2 - (4\sqrt{3})^2 = 49 - 16 \times 3 = 49 - 48 = 1$.

Numerator:
$$(5 + 2\sqrt{3})(7 - 4\sqrt{3}) = 5 \times 7 - 5 \times 4\sqrt{3} + 2\sqrt{3} \times 7 - 2\sqrt{3} \times 4\sqrt{3}$$
$$= 35 - 20\sqrt{3} + 14\sqrt{3} - 8 \times 3$$
$$= 35 - 24 - 6\sqrt{3} = 11 - 6\sqrt{3}$$

So:
$$11 - 6\sqrt{3} = a + b\sqrt{3}$$

Comparing the rational part and the coefficient of $\sqrt{3}$: **$a = 11$ and $b = -6$**.

Check: $\dfrac{5 + 3.464}{7 + 6.928} = \dfrac{8.464}{13.928} \approx 0.6077$, and $11 - 6 \times 1.732 = 11 - 10.392 = 0.608$ ✅

**Example 14:** If $\dfrac{\sqrt{2} + 1}{\sqrt{2} - 1} = a + b\sqrt{2}$, find $a$ and $b$.

Conjugate of the denominator: $\sqrt{2} + 1$.

Numerator: $(\sqrt{2} + 1)^2 = 2 + 1 + 2\sqrt{2} = 3 + 2\sqrt{2}$.
Denominator: $2 - 1 = 1$.

$$3 + 2\sqrt{2} = a + b\sqrt{2} \implies \mathbf{a = 3, \; b = 2}$$

Notice that **$b$ carries its sign**! In Example 13, $b = -6$, not $+6$.

---

## Part G: Evaluating Numerical Expressions

### When the Approximate Value of a Root Is Given

**Example 15:** Given $\sqrt{2} \approx 1.414$, find the value of $\dfrac{1}{\sqrt{2}}$.

Dividing $1 \div 1.414$ directly is slow. Rationalise first:

$$\frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2} = \frac{1.414}{2} = \mathbf{0.707}$$

That is Mr. Thorne's classroom trick in action!

**Example 16:** Given $\sqrt{3} \approx 1.732$, find the value of $\dfrac{1}{\sqrt{3} - 1}$.

From Example 9 in Part D: $\dfrac{1}{\sqrt{3} - 1} = \dfrac{\sqrt{3} + 1}{2}$.

$$= \frac{1.732 + 1}{2} = \frac{2.732}{2} = \mathbf{1.366}$$

### Problems Involving $x$ and $\frac{1}{x}$

**Example 17:** If $x = 2 + \sqrt{3}$, find $x + \dfrac{1}{x}$ and $x^2 + \dfrac{1}{x^2}$.

First find $\dfrac{1}{x}$ by rationalising:
$$\frac{1}{x} = \frac{1}{2 + \sqrt{3}} = 2 - \sqrt{3} \quad \text{(from Example 4 in Part C)}$$

Then:
$$x + \frac{1}{x} = (2 + \sqrt{3}) + (2 - \sqrt{3}) = \mathbf{4}$$

Now use a neat algebraic identity for $x^2 + \dfrac{1}{x^2}$:
$$\left(x + \frac{1}{x}\right)^2 = x^2 + 2 + \frac{1}{x^2}$$

Therefore:
$$x^2 + \frac{1}{x^2} = \left(x + \frac{1}{x}\right)^2 - 2 = 4^2 - 2 = 16 - 2 = \mathbf{14}$$

Check: $x \approx 3.732$, $x^2 \approx 13.928$; $\frac{1}{x} \approx 0.268$, $\frac{1}{x^2} \approx 0.0718$. Sum: $13.928 + 0.072 = 14.000$ ✅

---

## Part H: Telescoping Series Where Terms Cancel Automatically

Sometimes you are given a sum of several fractions. As soon as you rationalise each term, the middle terms **cancel one another out in pairs**, leaving only the first and last terms!

**Example 18:** Simplify $\dfrac{1}{\sqrt{2} + 1} + \dfrac{1}{\sqrt{3} + \sqrt{2}} + \dfrac{1}{2 + \sqrt{3}}$.

Rationalise each fraction individually (notice that each denominator's conjugate product equals **$1$**, because consecutive integers differ by $1$):

- $\dfrac{1}{\sqrt{2} + 1} = \dfrac{\sqrt{2} - 1}{2 - 1} = \sqrt{2} - 1$
- $\dfrac{1}{\sqrt{3} + \sqrt{2}} = \dfrac{\sqrt{3} - \sqrt{2}}{3 - 2} = \sqrt{3} - \sqrt{2}$
- $\dfrac{1}{2 + \sqrt{3}} = \dfrac{2 - \sqrt{3}}{4 - 3} = 2 - \sqrt{3}$

Now add them together:

$$(\sqrt{2} - 1) + (\sqrt{3} - \sqrt{2}) + (2 - \sqrt{3})$$

$\sqrt{2}$ and $-\sqrt{2}$ cancel; $\sqrt{3}$ and $-\sqrt{3}$ cancel. What remains is:

$$= 2 - 1 = \mathbf{1}$$

Check: $\dfrac{1}{2.414} + \dfrac{1}{3.146} + \dfrac{1}{3.732} \approx 0.414 + 0.318 + 0.268 = 1.000$ ✅

Think of it like folding up a collapsible telescope: each intermediate step cancels the previous one, leaving only the two ends standing.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Multiplying only the denominator and forgetting the numerator.**
   Writing $\frac{1}{\sqrt{2}} = \frac{1}{2}$ is wrong—you multiplied the bottom by $\sqrt{2}$ to get $2$, but forgot to multiply the top by $\sqrt{2}$. The correct result is $\frac{\sqrt{2}}{2}$.

2. **Mistake 2: Multiplying a two-term denominator by only the root.**
   Multiplying $\frac{1}{2 + \sqrt{3}}$ by $\frac{\sqrt{3}}{\sqrt{3}}$ gives $2\sqrt{3} + 3$ in the denominator—the root is still there! With two terms, you must multiply by the **conjugate** ($2 - \sqrt{3}$).

3. **Mistake 3: Flipping the wrong sign in the conjugate.**
   The conjugate of $2 + \sqrt{3}$ is **$2 - \sqrt{3}$**, not $-2 + \sqrt{3}$. Only the **middle sign** changes, never the sign of the first term.

4. **Mistake 4: Writing $(a + \sqrt{b})(a - \sqrt{b}) = a - b$.**
   $(5 - \sqrt{3})(5 + \sqrt{3}) = 25 - 3 = 22$, not $5 - 3 = 2$. Always remember to **square** the rational term $a$.

5. **Mistake 5: Computing $(2\sqrt{2})^2 = 4$.**
   $(2\sqrt{2})^2 = 2^2 \times (\sqrt{2})^2 = 4 \times 2 = \mathbf{8}$. You must square both the coefficient and the square root.

6. **Mistake 6: Writing $(\sqrt{a} + \sqrt{b})^2 = a + b$.**
   $(\sqrt{3} + \sqrt{2})^2 = 3 + 2 + \mathbf{2\sqrt{6}} = 5 + 2\sqrt{6}$. Dropping the middle $2\sqrt{ab}$ term when expanding the numerator is a classic error.

7. **Mistake 7: Thinking rationalisation changes the value of the number.**
   $\frac{1}{\sqrt{2}}$ and $\frac{\sqrt{2}}{2}$ are the **exact same number** (both $\approx 0.707$). Only the appearance changes, never the value.

8. **Mistake 8: Dropping the negative sign when reading off $a$ and $b$.**
   In $11 - 6\sqrt{3} = a + b\sqrt{3}$, **$b = -6$**. The minus sign belongs to $b$.

---

## Quick Recap

- **Rationalising the denominator** means rewriting a fraction so the denominator has no roots, without changing its value.
- Always multiply both **numerator and denominator** by the same **rationalising factor** (which is equivalent to multiplying by $1$).
- **Single root $\sqrt{a}$ in the denominator:** multiply top and bottom by $\sqrt{a}$, giving $\frac{1}{\sqrt{a}} = \frac{\sqrt{a}}{a}$.
- **Two terms ($a \pm \sqrt{b}$ or $\sqrt{a} \pm \sqrt{b}$) in the denominator:** multiply top and bottom by the **conjugate** (flip the sign between the two terms).
- **Key identities:** $(a + \sqrt{b})(a - \sqrt{b}) = a^2 - b$ and $(\sqrt{a} + \sqrt{b})(\sqrt{a} - \sqrt{b}) = a - b$.
- **Finding $a$ and $b$:** rationalise first, then match the rational part to $a$ and the root's coefficient (including its sign) to $b$.
- **For $x$ and $\frac{1}{x}$ problems:** rationalise $\frac{1}{x}$ first, then use $x^2 + \frac{1}{x^2} = \left(x + \frac{1}{x}\right)^2 - 2$.
- **Telescoping series:** rationalising each term causes intermediate roots to cancel in pairs.
- You can always **double-check** your simplified form using decimal approximations.

---

## Practice Questions

1. Rationalise the denominator:
   (a) $\dfrac{1}{\sqrt{7}}$
   (b) $\dfrac{5}{2\sqrt{3}}$
   (c) $\dfrac{1}{3 + \sqrt{2}}$
   (d) $\dfrac{1}{\sqrt{6} - \sqrt{5}}$

2. Write the rationalising factor of:
   (a) $\sqrt{11}$
   (b) $4 - \sqrt{7}$
   (c) $\sqrt{3} + \sqrt{10}$

3. Simplify: $\dfrac{\sqrt{5} + \sqrt{3}}{\sqrt{5} - \sqrt{3}}$

4. If $\dfrac{3 + \sqrt{2}}{3 - \sqrt{2}} = a + b\sqrt{2}$, find the values of $a$ and $b$.

5. Given $\sqrt{5} \approx 2.236$, find the value of $\dfrac{1}{\sqrt{5} - 2}$ correct to three decimal places.

6. If $x = 3 + 2\sqrt{2}$, find:
   (a) $x + \dfrac{1}{x}$
   (b) $x^2 + \dfrac{1}{x^2}$

7. Simplify: $\dfrac{1}{\sqrt{5} + \sqrt{2}} + \dfrac{1}{\sqrt{5} - \sqrt{2}}$

8. Show that: $\dfrac{1}{1 + \sqrt{2}} + \dfrac{1}{\sqrt{2} + \sqrt{3}} + \dfrac{1}{\sqrt{3} + \sqrt{4}} + \dots + \dfrac{1}{\sqrt{8} + \sqrt{9}} = 2$

9. State whether each statement is true or false. Give a reason.
   (a) Rationalising the denominator changes the value of the number.
   (b) The rationalising factor of $2 + \sqrt{3}$ is $2 - \sqrt{3}$.
   (c) $(5 + \sqrt{3})(5 - \sqrt{3}) = 2$

### Answers

1. (a) Multiply top and bottom by $\sqrt{7}$: $\mathbf{\dfrac{\sqrt{7}}{7}}$
   (b) Multiplying top and bottom by $\sqrt{3}$ is enough: $\dfrac{5\sqrt{3}}{2 \times 3} = \mathbf{\dfrac{5\sqrt{3}}{6}}$
   (c) Conjugate is $3 - \sqrt{2}$. Denominator: $9 - 2 = 7$. Result: $\mathbf{\dfrac{3 - \sqrt{2}}{7}}$
   Check: $\dfrac{1}{3 + 1.414} = \dfrac{1}{4.414} \approx 0.2266$, and $\dfrac{3 - 1.414}{7} = \dfrac{1.586}{7} \approx 0.2266$ ✅
   (d) Conjugate is $\sqrt{6} + \sqrt{5}$. Denominator: $6 - 5 = 1$. Result: $\mathbf{\sqrt{6} + \sqrt{5}}$

2. (a) **$\sqrt{11}$** (because $\sqrt{11} \times \sqrt{11} = 11$)
   (b) **$4 + \sqrt{7}$** (because $(4 - \sqrt{7})(4 + \sqrt{7}) = 16 - 7 = 9$)
   (c) **$\sqrt{3} - \sqrt{10}$** (or $\sqrt{10} - \sqrt{3}$; either clears the roots, since multiplying gives $3 - 10 = -7$)

3. Conjugate is $\sqrt{5} + \sqrt{3}$.
   Numerator: $(\sqrt{5} + \sqrt{3})^2 = 5 + 3 + 2\sqrt{15} = 8 + 2\sqrt{15}$.
   Denominator: $5 - 3 = 2$.
   $$\frac{8 + 2\sqrt{15}}{2} = \mathbf{4 + \sqrt{15}}$$
   Check: $\dfrac{2.236 + 1.732}{2.236 - 1.732} = \dfrac{3.968}{0.504} \approx 7.87$, and $4 + 3.873 = 7.873$ ✅

4. Conjugate is $3 + \sqrt{2}$.
   Numerator: $(3 + \sqrt{2})^2 = 9 + 2 + 6\sqrt{2} = 11 + 6\sqrt{2}$.
   Denominator: $9 - 2 = 7$.
   $$\frac{11 + 6\sqrt{2}}{7} = \frac{11}{7} + \frac{6}{7}\sqrt{2}$$
   Therefore, **$a = \dfrac{11}{7}$ and $b = \dfrac{6}{7}$**.

5. Conjugate is $\sqrt{5} + 2$. Denominator: $5 - 4 = 1$.
   So $\dfrac{1}{\sqrt{5} - 2} = \sqrt{5} + 2 \approx 2.236 + 2 = \mathbf{4.236}$.
   *(Think how tedious $1 \div 0.236$ would have been by hand—just like Mr. Thorne's story!)*

6. First find $\dfrac{1}{x}$: $\dfrac{1}{3 + 2\sqrt{2}} = \dfrac{3 - 2\sqrt{2}}{9 - 8} = 3 - 2\sqrt{2}$.
   (a) $x + \dfrac{1}{x} = (3 + 2\sqrt{2}) + (3 - 2\sqrt{2}) = \mathbf{6}$
   (b) $x^2 + \dfrac{1}{x^2} = \left(x + \dfrac{1}{x}\right)^2 - 2 = 6^2 - 2 = 36 - 2 = \mathbf{34}$

7. $\dfrac{1}{\sqrt{5} + \sqrt{2}} = \dfrac{\sqrt{5} - \sqrt{2}}{3}$, and $\dfrac{1}{\sqrt{5} - \sqrt{2}} = \dfrac{\sqrt{5} + \sqrt{2}}{3}$.
   Adding them: $\dfrac{(\sqrt{5} - \sqrt{2}) + (\sqrt{5} + \sqrt{2})}{3} = \mathbf{\dfrac{2\sqrt{5}}{3}}$.
   Check: $\dfrac{1}{3.650} + \dfrac{1}{0.822} \approx 0.274 + 1.217 = 1.491$, and $\dfrac{2 \times 2.236}{3} \approx 1.491$ ✅

8. Rationalise each term (rewrite $1 = \sqrt{1}$, and note that $(\sqrt{n+1} + \sqrt{n})(\sqrt{n+1} - \sqrt{n}) = (n + 1) - n = 1$):
   $$\frac{1}{1 + \sqrt{2}} = \sqrt{2} - 1$$
   $$\frac{1}{\sqrt{2} + \sqrt{3}} = \sqrt{3} - \sqrt{2}$$
   $$\frac{1}{\sqrt{3} + \sqrt{4}} = \sqrt{4} - \sqrt{3}$$
   $$\vdots$$
   $$\frac{1}{\sqrt{8} + \sqrt{9}} = \sqrt{9} - \sqrt{8}$$
   When we add all terms, every middle term cancels out, leaving $\sqrt{9} - 1 = 3 - 1 = \mathbf{2}$ ✅

9. (a) **False** ❌. We multiply by $\frac{\sqrt{a}}{\sqrt{a}}$ (or $\frac{\text{conjugate}}{\text{conjugate}}$), which equals $1$, so the value stays identical—only the form changes.
   (b) **True** ✅. $(2 + \sqrt{3})(2 - \sqrt{3}) = 4 - 3 = 1$, which removes the root from the denominator.
   (c) **False** ❌. $(5 + \sqrt{3})(5 - \sqrt{3}) = 25 - 3 = \mathbf{22}$. You must square $5$.

---

Once you master rationalisation, it becomes one of the most satisfying tools in algebra: spot the root in the denominator, multiply by the conjugate, and watch the denominator simplify cleanly!

**In the next topic:** We will look at $\sqrt{a}$ in a brand-new guise: **$a^{1/2}$**. Can exponents be fractions? We will revisit the familiar laws of exponents and extend them to **rational exponents**.
