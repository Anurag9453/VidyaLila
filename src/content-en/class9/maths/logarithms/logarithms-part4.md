# Chapter: Logarithms (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [logarithms-part3.md](logarithms-part3.md)** (which covers the three laws — product, quotient, and power — their proofs, expanding and condensing, and the warning that $\log(m + n) \neq \log m + \log n$). The chapter begins in [logarithms.md](logarithms.md).
> **Topics covered in this file:**
> 4. Applying the Laws: Simplifying, Finding Values, and Solving Equations

---

# Topic 4: Applying the Laws: Simplifying, Finding Values, and Solving Equations

In Topic 3, Dr. Bennett told Leo the story of John Napier, and we learned and proved the three laws of logarithms (product, quotient, and power). Knowing a law on paper is one thing, yet **putting it to work on real problems** is where mastery happens. In this topic, we practice breaking numbers down into factors to find new logarithms, simplifying long logarithmic expressions into clean numbers, and solving logarithmic equations.

There are no new laws in this topic — just the same three laws, applied with skill.

---

## The Quiz Contest Question

The school's inter-house quiz contest is underway, and it is time for the mathematics lightning round. The auditorium is packed. The quizmaster, maths teacher Dr. Bennett, steps up to the microphone and announces:

"Without a calculator, find **$\log 12$**, given that **$\log 2 = 0.3010$** and **$\log 3 = 0.4771$**."

Contestant Sophia thinks for just one second. The value of $\log 12$ was not given! Then Topic 3's product law clicks in her mind: *"Break the unknown number into a product of numbers whose logarithms you already know."*

Sophia speaks into her mic: "$12 = 2 \times 2 \times 3$."

She turns the multiplication into addition:

$$\log 12 = \log 2 + \log 2 + \log 3 = 0.3010 + 0.3010 + 0.4771 = \mathbf{1.0791}$$

Dr. Bennett beams: "Spot on, Sophia! That is the exact sum from the given values. *(The true value of $\log 12$ is $1.07918\dots$, which rounds to $1.0792$ to $4$ decimal places, though in problems like this we always use the exact sum of the given values.)*"

That single strategy is the heart of this topic: **factorise the number, apply the laws, and add or subtract the given logarithms.**

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Factorise** | Break a number into a product of smaller factors | $12 = 2 \times 2 \times 3$ |
| **Simplify** | Use the laws to combine several logarithms into a single logarithm | $\log 50 + \log 2 = \log 100$ |
| **Evaluate** | Find the exact numerical value of a logarithmic expression | $\log 100 = 2$ |
| **Logarithmic equation** | An equation where the unknown appears inside a logarithm (or as its value) | $\log x = 2$ |
| **Defined** | Valid because the argument inside every logarithm is strictly **positive** | $\log(x - 1)$ requires $x > 1$ |
| **Reject** | Discard an algebraic root that makes an original logarithm undefined | Rejecting $x = -3$ |

---

## Part A: Finding New Logarithms from Given Values (Base $10$)

Throughout this section, assume the same standard given values as in Sophia's quiz (plus one more):

> **$\log 2 = 0.3010$, $\quad \log 3 = 0.4771$, $\quad \log 7 = 0.8451$**

Remember that $\log$ with no base written means base $10$, and keep **$\log 10 = 1$** ready at hand. Follow three steps every time:
1. Write the number using products or quotients of $2, 3, 7,$ and $10$.
2. Apply the product law (multiply $\rightarrow$ add), quotient law (divide $\rightarrow$ subtract), or power law (exponent $\rightarrow$ multiply).
3. Add or subtract the decimals carefully.

### Example 1: $\log 6$ and $\log 12$

Since $6 = 2 \times 3$:
$$\log 6 = \log 2 + \log 3 = 0.3010 + 0.4771 = \mathbf{0.7781}$$

Since $12 = 2 \times 2 \times 3$ (or $2^2 \times 3$):
$$\log 12 = 2 \times 0.3010 + 0.4771 = 0.6020 + 0.4771 = \mathbf{1.0791}$$

**Check:** $3010 + 4771 = 7781$ ✅. $6020 + 4771 = 10791 \implies 1.0791$ ✅. Another route: $\log 12 = \log 6 + \log 2 = 0.7781 + 0.3010 = 1.0791$ ✅.

### Example 2: $\log 18$

$$18 = 2 \times 3 \times 3 = 2 \times 3^2$$

$$\log 18 = \log 2 + 2\log 3 = 0.3010 + 2 \times 0.4771 = 0.3010 + 0.9542 = \mathbf{1.2552}$$

**Check:** $3010 + 9542 = 12552$ ✅. Another route: $18 = 6 \times 3$, so $\log 18 = 0.7781 + 0.4771 = 1.2552$ ✅.

### Example 3: $\log 5$ (A Clever Trick)

Notice that $\log 5$ is not given, and you cannot make $5$ by multiplying $2$, $3$, and $7$. Yet **$5 = 10 \div 2$**!

$$\log 5 = \log(10 \div 2) = \log 10 - \log 2 = 1 - 0.3010 = \mathbf{0.6990}$$

**Check:** $\log 5 + \log 2 = \log 10 = 1$, and $0.6990 + 0.3010 = 1.0000$ ✅.

That "write it as $10 \div 2$" trick is hugely useful, because $\log 10 = 1$ is a clean integer that makes calculations effortless.

### Example 4: Finding Several Values Together

Now we can find all of these in one sweep. Each row shows the factorisation and the decimal calculation, followed by a check.

| Expression | Factorisation | Calculation | Answer |
|---|---|---|---|
| $\log 15$ | $3 \times 5$ | $0.4771 + 0.6990$ | **$1.1761$** |
| $\log 1.5$ | $3 \div 2$ | $0.4771 - 0.3010$ | **$0.1761$** |
| $\log 0.2$ | $2 \div 10$ | $0.3010 - 1$ | **$-0.6990$** |
| $\log 14$ | $2 \times 7$ | $0.3010 + 0.8451$ | **$1.1461$** |
| $\log 8$ | $2^3$ | $3 \times 0.3010$ | **$0.9030$** |
| $\log \sqrt{3}$ | $3^{1/2}$ | $\frac{1}{2} \times 0.4771$ | **$0.23855$** |

**Check:**
- $\log 15$: $4771 + 6990 = 11761$ ✅. Another route: $15 = 10 \times 1.5 \implies \log 15 = 1 + 0.1761 = 1.1761$ ✅
- $\log 1.5$: $4771 - 3010 = 1761$ ✅ (and $1.5 > 1$, so the log must be positive ✅)
- $\log 0.2$: $0.2 < 1$, so the log must be negative ✅. Also $\log 0.2 + \log 5 = -0.6990 + 0.6990 = 0 = \log 1$ ✅
- $\log 14$: $3010 + 8451 = 11461$ ✅
- $\log 8$: $3 \times 3010 = 9030$ ✅. Another route: $\log 8 = \log 2 + \log 4 = 0.3010 + 0.6020 = 0.9030$ ✅
- $\log \sqrt{3}$: $\sqrt{3} = 3^{1/2}$, so by the power law $\frac{1}{2}\log 3 = 0.4771 \div 2 = 0.23855$ ✅ (double-check: $2 \times 0.23855 = 0.4771$ ✅)

**Notice:** $\log 0.2$ asks "$10$ to what power gives $0.2$?" Since $0.2 < 1$, the exponent is negative — a small yet essential detail to keep in mind.

---

## Part B: Simplifying and Evaluating Without Tables

Often a problem gives you no decimal log values at all, yet the expression simplifies to a clean integer. The strategy is to **combine the logs so the argument inside becomes a recognizable power of the base** (like $100, 1000, 16,$ or $27$).

### Example 5: Combining Terms Using the Laws

| Problem | Steps | Answer |
|---|---|---|
| $\log 50 + \log 2$ | $\log(50 \times 2) = \log 100 = 2$ | **$2$** |
| $\log 200 + \log 5$ | $\log(200 \times 5) = \log 1000 = 3$ | **$3$** |
| $2\log 20 - \log 4$ | $\log(20^2) - \log 4 = \log 400 - \log 4 = \log 100$ | **$2$** |
| $\log 5 + \log 20$ | $\log(5 \times 20) = \log 100$ | **$2$** |
| $\log_2 48 - \log_2 3$ | $\log_2(48 \div 3) = \log_2 16$ | **$4$** |
| $\log_3 54 - \log_3 2$ | $\log_3(54 \div 2) = \log_3 27$ | **$3$** |
| $\log 16 + \log 125 - \log 20$ | $\log(16 \times 125) - \log 20 = \log 2000 - \log 20 = \log 100$ | **$2$** |

**Check (each one separately):**
- $10^2 = 100 \implies \log 100 = 2$ ✅
- $10^3 = 1000 \implies \log 1000 = 3$ ✅
- $10^2 = 100$ ✅ (checking $2\log 20 - \log 4$ using our given values: $\log 20 = 1 + 0.3010 = 1.3010$, so $2(1.3010) - 0.6020 = 2.6020 - 0.6020 = 2.0000$ ✅)
- $2^4 = 16 \implies \log_2 16 = 4$ ✅
- $3^3 = 27 \implies \log_3 27 = 3$ ✅
- In the last row, $16 \times 125 = 2000$ and $2000 \div 20 = 100$, so $\log 100 = 2$ ✅

Notice that the base never changes: if the problem starts with $\log_2$, every step stays in $\log_2$. And remember, the laws only apply when **all logarithms share the same base**.

---

## Part C: Simple Logarithmic Equations

There is one clear four-step plan for solving logarithmic equations:
1. Use the laws to condense each side into **a single logarithm** (or one logarithm equal to a number).
2. Drop the logarithms by setting their arguments equal (or convert to exponential form).
3. Solve for $x$ using regular algebra.
4. **Check that the argument inside every logarithm in the original equation stays positive.** Reject any value of $x$ that fails this check.

Step $4$ is the step students forget most often — yet it is vital, because logarithms only exist for positive arguments (Topic 1).

### Example 6: $\log x = 2$ and $\log_2 x = 5$

This is the "argument is missing" method from Topic 2 (convert to exponential form), shown here with base $10$ and base $2$:

- $\log x = 2$ means base $10$: $x = 10^2 = \mathbf{100}$. Check: $\log 100 = 2$ ✅
- $\log_2 x = 5$ means: $x = 2^5 = \mathbf{32}$. Check: $\log_2 32 = 5$ ✅

### Example 7: $\log(x + 1) + \log(x - 1) = \log 8$

**Step 1:** Product law on the left-hand side: $\log\big((x + 1)(x - 1)\big) = \log 8$.

**Step 2:** Both sides have a single base-$10$ log, so equate the arguments: $(x + 1)(x - 1) = 8 \implies x^2 - 1 = 8 \implies x^2 = 9 \implies x = 3$ or $x = -3$.

**Step 3 (domain check):** The original equation contains $\log(x + 1)$ and $\log(x - 1)$, so we need both $x + 1 > 0$ and $x - 1 > 0$, meaning $x > 1$.
- $x = 3$: $3 > 1$ ✅ Valid.
- $x = -3$: $x + 1 = -2$ and $x - 1 = -4$, both negative. $\log(-2)$ is undefined. **Reject.**

**Answer: $x = 3$**

**Check:** $\log(3 + 1) + \log(3 - 1) = \log 4 + \log 2 = \log 8$ ✅

Notice that pure algebra handed us $x = -3$ as well, yet $-3$ does not work in the original logarithmic equation!

### Example 8: $\log_2 x + \log_2(x - 2) = 3$

**Step 1:** Product law: $\log_2\big(x(x - 2)\big) = 3$.

**Step 2:** Convert to exponential form: $x(x - 2) = 2^3 = 8 \implies x^2 - 2x - 8 = 0$.

Factorise: $(x - 4)(x + 2) = 0 \implies x = 4$ or $x = -2$.

**Step 3 (domain check):** $\log_2 x$ requires $x > 0$, and $\log_2(x - 2)$ requires $x > 2$. Both together require $x > 2$.
- $x = 4$: ✅ valid.
- $x = -2$: fails $x > 0$. **Reject.**

**Answer: $x = 4$**

**Check:** $\log_2 4 + \log_2 2 = 2 + 1 = 3$ ✅

### Example 9: $2\log x = \log 36$

**Step 1:** Power law in reverse: $2\log x = \log(x^2)$, so $\log(x^2) = \log 36$.

**Step 2:** $x^2 = 36 \implies x = 6$ or $x = -6$.

**Step 3 (domain check):** The original equation contains **$\log x$**, which requires $x > 0$. So $x = 6$ is valid, whereas $x = -6$ makes $\log(-6)$ undefined — **reject.**

**Answer: $x = 6$**

**Check:** $2\log 6 = \log 36$ ✅ ($6 \times 6 = 36$).

This example highlights an important rule: always check the domain against the **original equation** ($2\log x$ requires $x > 0$), even if $x^2$ in a later step makes $-6$ look harmless!

---

## Part D: Two Classic Identity Problems

Here, no numerical values are given. Instead, you are asked to prove that one logarithmic expression equals another. The plan is simple: use the given algebraic condition to build the target expression, then take the logarithm of both sides.

### Example 10: If $a^2 + b^2 = 7ab$, show that $\log\left(\frac{a + b}{3}\right) = \frac{1}{2}(\log a + \log b)$

*(Assume $a > 0$ and $b > 0$ so all logarithms are defined.)*

**Step 1:** Recall $(a + b)^2 = a^2 + b^2 + 2ab$. Since $a^2 + b^2 = 7ab$:
$$(a + b)^2 = 7ab + 2ab = 9ab$$

**Step 2:** Divide both sides by $9$: $\left(\frac{a + b}{3}\right)^2 = ab$ (because $\frac{(a + b)^2}{9} = \left(\frac{a + b}{3}\right)^2$).

**Step 3:** Take $\log$ of both sides: $\log\left(\frac{a + b}{3}\right)^2 = \log(ab)$.

**Step 4:** Apply the power law on the left and the product law on the right:
$$2\log\left(\frac{a + b}{3}\right) = \log a + \log b$$

**Step 5:** Divide both sides by $2$: **$\log\left(\frac{a + b}{3}\right) = \frac{1}{2}(\log a + \log b)$** $\blacksquare$

**Numerical check:** Choose numbers satisfying $a^2 + b^2 = 7ab$: set $b = 1$, so $a^2 + 1 = 7a \implies a^2 - 7a + 1 = 0$, giving $a = \frac{7 + \sqrt{45}}{2} \approx 6.854$.
- Check condition: $a^2 + 1 \approx 46.979 + 1 = 47.979$, and $7a \approx 47.979$ ✅
- Left-hand side: $\frac{a + b}{3} = \frac{7.854}{3} \approx 2.618$, and $\log 2.618 \approx 0.4180$.
- Right-hand side: $\frac{1}{2}(\log 6.854 + \log 1) = \frac{1}{2}(0.8360 + 0) \approx 0.4180$ ✅

*(The numbers are slightly messy only because of the condition $a^2 + b^2 = 7ab$; those approximate logs from a calculator confirm the identity works!)*

### Bonus: If $\log m + \log n = \log(m + n)$, show that $m = \frac{n}{n - 1}$

By the product law, $\log(mn) = \log(m + n)$, so **$mn = m + n$**.

Collect all $m$-terms on one side: $mn - m = n \implies m(n - 1) = n \implies \mathbf{m = \frac{n}{n - 1}}$ $\blacksquare$

**Numerical check:** Pick $n = 3$, giving $m = \frac{3}{2} = 1.5$. Then $\log 1.5 + \log 3 = \log(1.5 \times 3) = \log 4.5$, and $m + n = 1.5 + 3 = 4.5$, so $\log(m + n) = \log 4.5$ ✅

This also serves as a helpful reminder: $\log m + \log n = \log(m + n)$ is **not** a general rule — it only happens for special pairs like $m = 1.5$ and $n = 3$. In general, $\log m + \log n = \log(mn)$.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Accepting every algebraic root without checking the original logarithms.**
   In $\log(x + 1) + \log(x - 1) = \log 8$, solving the quadratic gives $x = 3$ and $x = -3$. Writing "$x = 3$ or $x = -3$" is wrong because $x = -3$ makes $\log(x + 1)$ and $\log(x - 1)$ negative inside! Always verify every root in the original equation.

2. **Mistake 2: Forgetting that $\log 10 = 1$ in $\log 5 = \log 10 - \log 2$.**
   $\log 10$ equals $1$, not $0$. Writing $\log 5 = 0 - 0.3010 = -0.3010$ cannot be right because $5 > 1$, so $\log 5$ must be positive! Correct value: $1 - 0.3010 = \mathbf{0.6990}$.
   Likewise, never write $\log(10 \div 2)$ as $\frac{\log 10}{\log 2}$ — the quotient law uses subtraction, not division.

3. **Mistake 3: Making decimal addition slips.**
   In $\log 12 = 0.3010 + 0.3010 + 0.4771$, it is easy to rush $0.6020 + 0.4771$ and write $1.0781$ or $1.0792$. Add digit by digit carefully: $6020 + 4771 = 10791$, giving $1.0791$. Then double-check using another factorisation ($12 = 6 \times 2 \implies 0.7781 + 0.3010 = 1.0791$).

4. **Mistake 4: Combining logarithms that have different bases.**
   You cannot turn $\log_2 4 + \log_5 25$ into $\log(4 \times 25)$. The laws require the exact same base. Instead, evaluate each term separately and add: $2 + 2 = 4$.

5. **Mistake 5: Trying to split $\log(x + 1)$ into $\log x + \log 1$.**
   The warning from Topic 3 applies everywhere: there is no rule for splitting addition inside a logarithm. *(Check at $x = 9$: $\log 10 = 1$, whereas $\log 9 + \log 1 = 0.9542 + 0 = 0.9542$.)*

---

## Quick Recap

- To find a new logarithm from given values, **factorise the number** into products/quotients of the given numbers (and $10$), then apply the laws.
- **$\log 5 = \log(10 \div 2) = 1 - \log 2$**, and $\log 0.2 = \log 2 - 1$ is negative.
- To simplify without tables: combine logs so the argument inside becomes a clean power of the base ($100, 1000, 16, 27$), always keeping the same base.
- To solve a log equation: **condense to one log, equate arguments (or convert to exponential form), solve for $x$, then check that every original log argument is positive** and reject invalid roots.
- For identity proofs: use the given algebraic relation to form a square or product, take $\log$ of both sides, and apply the power/product laws.
- Watch out for pitfalls: skipping the domain check, forgetting $\log 10 = 1$, and decimal addition errors.

---

## Practice Questions

1. Given $\log 2 = 0.3010$, $\log 3 = 0.4771$, and $\log 7 = 0.8451$, find: (a) $\log 21$, (b) $\log 36$, (c) $\log 28$, (d) $\log 0.3$. Show the factorisation each time.

2. Evaluate without tables: (a) $\log_5 50 - \log_5 2$, (b) $\log 25 + \log 40$, (c) $\log_2 12 + \log_2\left(\frac{8}{3}\right)$.

3. Solve: $\log(x + 3) + \log(x - 3) = \log 16$. Explain why one root is rejected.

4. Solve: $\log_2 x + \log_2(x + 2) = 3$. Check your answer.

5. If $a^2 + b^2 = 14ab$, show that $\log\left(\frac{a + b}{4}\right) = \frac{1}{2}(\log a + \log b)$.

6. A student says: "$\log 15 = \log 3 \times \log 5 = 0.4771 \times 0.6990$." Find his mistake and give the correct value of $\log 15$.

7. State True or False:
   (a) $\log 8 = 3\log 2$.
   (b) $x = -3$ is a valid solution of $\log(x + 1) + \log(x - 1) = \log 8$.
   (c) $\log 0.2$ is negative.
   (d) $\log 12 = \log 3 \times \log 4$.

### Answers

1. (a) $21 = 3 \times 7 \implies \log 21 = 0.4771 + 0.8451 = \mathbf{1.3222}$. Check: $4771 + 8451 = 13222$ ✅
   (b) $36 = 2^2 \times 3^2 \implies \log 36 = 2(0.3010) + 2(0.4771) = 0.6020 + 0.9542 = \mathbf{1.5562}$. Check: $36 = 6^2$, and $2 \times 0.7781 = 1.5562$ ✅
   (c) $28 = 2^2 \times 7 \implies \log 28 = 0.6020 + 0.8451 = \mathbf{1.4471}$. Check: $28 = 2 \times 14$, and $0.3010 + 1.1461 = 1.4471$ ✅
   (d) $0.3 = 3 \div 10 \implies \log 0.3 = 0.4771 - 1 = \mathbf{-0.5229}$. Check: $\log 0.3 + \log 10 = -0.5229 + 1 = 0.4771 = \log 3$ ✅

2. (a) $\log_5(50 \div 2) = \log_5 25 = \mathbf{2}$ ($5^2 = 25$)
   (b) $\log(25 \times 40) = \log 1000 = \mathbf{3}$
   (c) $\log_2\left(12 \times \frac{8}{3}\right) = \log_2 32 = \mathbf{5}$ ($2^5 = 32$)

3. Product law: $\log\big((x + 3)(x - 3)\big) = \log 16 \implies x^2 - 9 = 16 \implies x^2 = 25 \implies x = 5$ or $-5$.
   Check: $x + 3 > 0$ and $x - 3 > 0$, requiring $x > 3$. $x = 5$ is valid. For $x = -5$, $x - 3 = -8$ is negative, so **reject** $x = -5$.
   **$x = 5$**. Check: $\log 8 + \log 2 = \log 16$ ✅

4. $\log_2\big(x(x + 2)\big) = 3 \implies x^2 + 2x = 8 \implies x^2 + 2x - 8 = 0 \implies (x + 4)(x - 2) = 0 \implies x = -4$ or $2$.
   Check: $x > 0$ is required. Reject $x = -4$. **$x = 2$**.
   Check: $\log_2 2 + \log_2 4 = 1 + 2 = 3$ ✅

5. $(a + b)^2 = a^2 + b^2 + 2ab = 14ab + 2ab = 16ab$. Divide both sides by $16$: $\left(\frac{a + b}{4}\right)^2 = ab$. Take $\log$ of both sides: $2\log\left(\frac{a + b}{4}\right) = \log a + \log b$. Divide by $2$: $\log\left(\frac{a + b}{4}\right) = \frac{1}{2}(\log a + \log b)$ $\blacksquare$

6. The student multiplied the logarithms instead of adding them. The product law states $\log(3 \times 5) = \log 3 + \log 5$ (**addition**). Correct value: $\log 15 = 0.4771 + 0.6990 = \mathbf{1.1761}$. *(The student's wrong product $0.4771 \times 0.6990 \approx 0.3335$ is nowhere near $1.1761$.)* Check: since $15 > 10$, $\log 15$ must be greater than $1$ ✅

7. (a) **True** ✅. Power law: $\log(2^3) = 3\log 2$, and $0.9030 = 3 \times 0.3010$.
   (b) **False** ❌. At $x = -3$, $\log(-2)$ and $\log(-4)$ are undefined.
   (c) **True** ✅. Since $0.2 < 1$, its log is negative ($-0.6990$).
   (d) **False** ❌. The product law gives $\log 12 = \log 3 + \log 4$, not multiplication.

---

Now you cannot just state the laws of logarithms — you can drive them: factorising numbers, simplifying expressions, proving identities, and checking every equation's domain.

**What comes next?** So far we have stayed inside pure numbers and equations. In Topic 5, we see **where logarithms show up in the real world**: finding out how many years it takes money to double at $10\%$ compound interest, counting the digits in $2^{64}$, and understanding how the earthquake Richter scale actually works!
