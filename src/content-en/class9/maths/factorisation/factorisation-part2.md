# Chapter: Factorisation (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [factorisation.md](factorisation.md)** (where Topic 1 introduces factorisation, the key formulae, and an overview of all methods).
> **Topics covered in this file:**
> 2. Factorisation by Taking Out the Common Factor

---

# Topic 2: Factorisation by Taking Out the Common Factor

In Topic 1 (Factorisation of Polynomials), we learned that factorisation is the reverse of expansion, explored the standard identities, and previewed five factorisation methods. In the Part D decision guide, we also saw the golden rule: **"look for a common factor first."** Now we will study each method in full detail, beginning with that essential first step.

In Topic 1, we saw the basic idea of taking out a common factor: find the HCF of the coefficients, take the lowest power of each shared variable, and place what remains inside brackets — as in $6x + 9 = 3(2x + 3)$ and $x^2 + x = x(x + 1)$.

In this topic, we go much deeper: finding the HCF of multi-variable terms, pulling out negative common factors, factoring out entire brackets, using the sign-flip trick, and handling fractional coefficients. Because this technique is **the opening move of almost every factorisation problem**, mastering it pays off everywhere.

---

## Sophia's Gift-Box Packing Story

Sophia is helping prepare catering gift boxes for a school fundraiser. She has **12 lemon tarts** and **18 brownies**, and she wants to pack them into **identical gift boxes** with **as many boxes as possible** and nothing left over.

How many boxes can she make?

- The largest number that divides both $12$ and $18$ evenly is **$6$** (their HCF).
- So she can pack **$6$ gift boxes**.
- Each box will hold $12 \div 6 = \mathbf{2\text{ lemon tarts}}$ and $18 \div 6 = \mathbf{3\text{ brownies}}$.

Now write this algebraically, using $L$ for a lemon tart and $B$ for a brownie:

$$12L + 18B = 6(2L + 3B)$$

In words: "$6$ boxes, with $2$ lemon tarts and $3$ brownies inside each box." The **$6$** outside the bracket is the **common factor**, and what sits inside the bracket is the **contents of one box**.

Taking out a common factor works the exact same way: **find what every term shares, pull it outside, and leave the rest inside the bracket.**

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **HCF of monomials** | The largest factor shared by two or more single-term expressions | The HCF of $12x^3y^2$ and $18x^2y^4$ is $6x^2y^2$ |
| **Common monomial factor** | A single-term factor present in every term of the expression | In $6ab(2a - 3b)$, the common monomial factor is **$6ab$** |
| **Common binomial factor** | A two-term bracket shared by every term of the expression | In $5x(a + b) - 3y(a + b)$, the common binomial factor is **$(a + b)$** |
| **Negative common factor** | A common factor pulled out with a minus sign attached | In $-3x(2x + 3)$, the negative common factor is **$-3x$** |
| **Sign flip** | Reversing the order inside a subtraction bracket introduces a minus sign | $(y - x) = -(x - y)$ |

---

## Part A: HCF of Monomials, Step by Step

Topic 1 used short examples. Now let us establish a rock-solid routine for longer terms with multiple variables.

### The Method (3 Steps)

1. **Numbers:** Find the HCF of all numerical coefficients (ignore minus signs for a moment).
2. **Each variable separately:** Check whether the variable appears in **every** term:
   - If yes, take its **lowest power**.
   - If it is missing from even a single term, that variable does **not** enter the HCF.
3. **Multiply all parts together.** That product is the HCF.

### Why Always the Lowest Power?

Imagine three friends pooling money equally to buy a shared gift. One has **\$50**, the second has **\$30**, and the third has **\$20**. If all three must contribute the **exact same amount**, what is the most each can put in? At most **\$20** — because the third friend simply does not have more than \$20.

In the exact same way, among $x^3$, $x^2$, and $x^5$, every term has at least **$x^2$**, whereas not every term has $x^3$. That is why the lowest power ($x^2$) is the largest shared factor.

### Example 1: HCF of $12x^3y^2$ and $18x^2y^4$

| Part | Term 1 | Term 2 | Common (HCF) |
|---|---|---|---|
| Number | $12$ | $18$ | **$6$** |
| $x$ | $x^3$ | $x^2$ | **$x^2$** (lowest power) |
| $y$ | $y^2$ | $y^4$ | **$y^2$** (lowest power) |

$$\text{HCF} = \mathbf{6x^2y^2}$$

### Example 2: HCF of $8a^3b^2c$, $12a^2b^3c^2$, and $20a^4bc^3$

| Part | Term 1 | Term 2 | Term 3 | Common |
|---|---|---|---|---|
| Number | $8$ | $12$ | $20$ | **$4$** |
| $a$ | $a^3$ | $a^2$ | $a^4$ | **$a^2$** |
| $b$ | $b^2$ | $b^3$ | $b$ | **$b$** |
| $c$ | $c$ | $c^2$ | $c^3$ | **$c$** |

$$\text{HCF} = \mathbf{4a^2bc}$$

### Example 3: HCF of $6x^2y$ and $9xz$

- Numbers: $\text{HCF}(6, 9) = \mathbf{3}$
- $x$: between $x^2$ and $x$, take **$x$**
- $y$: appears in the first term only — **excluded**
- $z$: appears in the second term only — **excluded**

$$\text{HCF} = \mathbf{3x}$$

---

## Part B: Factorising Longer Expressions

**Steps:**
1. Find the **HCF** of all terms (using Part A).
2. **Divide** every term by the HCF.
3. Write the result as **$\text{HCF} \times (\text{remaining quotients with their signs})$**.
4. **Check:** Multiply the HCF back into every term inside the bracket.

**Example 1:** $12x^3y^2 + 18x^2y^4$

$\text{HCF} = 6x^2y^2$ (from Part A, Example 1)
- $12x^3y^2 \div 6x^2y^2 = 2x$
- $18x^2y^4 \div 6x^2y^2 = 3y^2$

$$= \mathbf{6x^2y^2(2x + 3y^2)}$$

Check: $6x^2y^2 \times 2x = 12x^3y^2$ ✅, $6x^2y^2 \times 3y^2 = 18x^2y^4$ ✅

**Example 2:** $8a^3b^2c - 12a^2b^3c^2 + 20a^4bc^3$

$\text{HCF} = 4a^2bc$ (from Part A, Example 2)
- $8a^3b^2c \div 4a^2bc = 2ab$
- $12a^2b^3c^2 \div 4a^2bc = 3b^2c$
- $20a^4bc^3 \div 4a^2bc = 5a^2c^2$

$$= \mathbf{4a^2bc(2ab - 3b^2c + 5a^2c^2)}$$

Check: $4a^2bc \times 2ab = 8a^3b^2c$ ✅, $4a^2bc \times 3b^2c = 12a^2b^3c^2$ ✅, $4a^2bc \times 5a^2c^2 = 20a^4bc^3$ ✅

**Example 3 (when an entire term equals the HCF):** $14p^2q^3 - 21p^3q^2 + 7p^2q^2$

$\text{HCF} = 7p^2q^2$
- $14p^2q^3 \div 7p^2q^2 = 2q$
- $21p^3q^2 \div 7p^2q^2 = 3p$
- $7p^2q^2 \div 7p^2q^2 = \mathbf{1}$

$$= \mathbf{7p^2q^2(2q - 3p + 1)}$$

Notice that because the third term was equal to the entire HCF, dividing it leaves **$1$**. Never drop that $1$, or a term will vanish when you multiply back to check.

---

## Part C: Taking Out a Negative Common Factor

Sometimes the leading term is negative. In those cases, it is cleaner to factor out a **minus sign along with the HCF** so that the first term inside the bracket becomes positive.

### Rule

> Whenever you take out a **negative** common factor, **the sign of every term inside the bracket reverses.**

Why? Because $(-) \times (-) = (+)$ and $(-) \times (+) = (-)$. When you multiply the negative factor back in, every sign flips back to its original state.

**Example 1:** $-6x^2 - 9x$

$\text{HCF} = 3x$. Because the first term is negative, factor out **$-3x$**:
- $-6x^2 \div (-3x) = 2x$
- $-9x \div (-3x) = 3$

$$= \mathbf{-3x(2x + 3)}$$

Check: $-3x \times 2x = -6x^2$ ✅, $-3x \times 3 = -9x$ ✅

**Example 2:** $-4a^3 + 8a^2 - 12a$

Factor out $-4a$:
- $-4a^3 \div (-4a) = a^2$
- $8a^2 \div (-4a) = -2a$
- $-12a \div (-4a) = 3$

$$= \mathbf{-4a(a^2 - 2a + 3)}$$

Check: $-4a \times a^2 = -4a^3$ ✅, $-4a \times (-2a) = 8a^2$ ✅, $-4a \times 3 = -12a$ ✅

### Both Forms Are Technically Correct

You could also write $-6x^2 - 9x$ as $3x(-2x - 3)$, which is algebraically valid. However, **$-3x(2x + 3)$** is tidier and makes the remaining topics (especially grouping) much easier.

---

## Part D: When an Entire Bracket Is the Common Factor

In Topic 1, we saw briefly that an entire bracket can act as a common factor. Now let us handle trickier versions of this idea.

Treat the bracket as a **sealed crate**. It does not matter what is packed inside the crate — if both terms contain the exact same crate, you can pull the crate out in front.

**Example 1:** $5x(a + b) - 3y(a + b)$

The crate $(a + b)$ appears in both terms:
$$= \mathbf{(a + b)(5x - 3y)}$$

Check: $(a + b)(5x - 3y) = 5x(a + b) - 3y(a + b)$ ✅

**Example 2 (the hidden $1$):** $5a(a - 3) - (a - 3)$

The second term $-(a - 3)$ is actually **$-1 \times (a - 3)$**:
$$= \mathbf{(a - 3)(5a - 1)}$$

Check: $(a - 3)(5a - 1) = 5a(a - 3) - 1(a - 3)$ ✅

**Example 3 (powers of a bracket):** $3(x - y)^2 + 6(x - y)$

Since $(x - y)^2 = (x - y)(x - y)$, both terms contain at least one $(x - y)$, and both coefficients share $3$.
$\text{HCF} = 3(x - y)$
- $3(x - y)^2 \div 3(x - y) = (x - y)$
- $6(x - y) \div 3(x - y) = 2$

$$= 3(x - y)[(x - y) + 2] = \mathbf{3(x - y)(x - y + 2)}$$

Check: $3(x - y) \times (x - y) = 3(x - y)^2$ ✅, $3(x - y) \times 2 = 6(x - y)$ ✅

**Example 4 (a cubed bracket):** $4(a + b)^3 - 2(a + b)^2$

HCF of the numbers is $2$; lowest power of the bracket is $(a + b)^2$.
$\text{HCF} = 2(a + b)^2$
- $4(a + b)^3 \div 2(a + b)^2 = 2(a + b)$
- $2(a + b)^2 \div 2(a + b)^2 = 1$

$$= 2(a + b)^2[2(a + b) - 1] = \mathbf{2(a + b)^2(2a + 2b - 1)}$$

**Example 5:** $xy(x + y) - 2x(x + y)$

Both $x$ and $(x + y)$ are shared, so $\text{HCF} = x(x + y)$:
- $xy(x + y) \div x(x + y) = y$
- $2x(x + y) \div x(x + y) = 2$

$$= \mathbf{x(x + y)(y - 2)}$$

Check: $x(x + y) \times y = xy(x + y)$ ✅, $x(x + y) \times 2 = 2x(x + y)$ ✅

**Example 6:** $6(2x - 3)^2 - 9(2x - 3)$

$\text{HCF} = 3(2x - 3)$
- $6(2x - 3)^2 \div 3(2x - 3) = 2(2x - 3)$
- $9(2x - 3) \div 3(2x - 3) = 3$

$$= 3(2x - 3)[2(2x - 3) - 3] = 3(2x - 3)(4x - 6 - 3) = \mathbf{3(2x - 3)(4x - 9)}$$

---

## Part E: The Sign-Flip Trick ($b - a = -(a - b)$)

### Story: The Return Journey

It is $2\text{ km}$ from home to school, and $2\text{ km}$ from school back to home. The distance is identical, only the **direction is reversed**.

The exact same thing happens with subtraction inside brackets:
- $(x - y)$ and $(y - x)$ involve the **same two numbers**,
- but they point in **opposite directions** (one is the negative of the other).

> **$(y - x) = -(x - y)$**

Test it with numbers: let $x = 5$ and $y = 2$. Then $x - y = 3$, whereas $y - x = -3$ — exact opposites!

This trick is invaluable whenever two brackets look **almost identical**, except the subtraction is written backwards.

**Example 1:** $a(x - y) - b(y - x)$

Rewrite $(y - x)$ as $-(x - y)$:
$-b(y - x) = -b \times [-(x - y)] = \mathbf{+b(x - y)}$

Now:
$$= a(x - y) + b(x - y) = \mathbf{(x - y)(a + b)}$$

Check: Expanding the original gives $ax - ay - by + bx$. Expanding $(x - y)(a + b)$ gives $ax + bx - ay - by$. Identical ✅

**Example 2:** $3m(p - q) + 5n(q - p)$

Since $(q - p) = -(p - q)$, we get $+5n(q - p) = -5n(p - q)$:
$$= 3m(p - q) - 5n(p - q) = \mathbf{(p - q)(3m - 5n)}$$

Check: Original $= 3mp - 3mq + 5nq - 5np$. Answer $= 3mp - 5np - 3mq + 5nq$. Identical ✅

**Example 3:** $x^2(a - b) + y^2(b - a)$

Since $(b - a) = -(a - b)$, we get $+y^2(b - a) = -y^2(a - b)$:
$$= x^2(a - b) - y^2(a - b) = \mathbf{(a - b)(x^2 - y^2)}$$

(The bracket $x^2 - y^2$ can actually be split further — we will cover that in Topic 4, Difference of Two Squares.)

### The Sign-Flip Rule for Squares and Cubes

This distinction is crucial:

| Power | Effect of flipping signs | Why |
|---|---|---|
| **Even** ($2, 4, \dots$) | **No change:** $(y - x)^2 = (x - y)^2$ | $(-)^2 = (+)$ |
| **Odd** ($1, 3, \dots$) | **Minus sign appears:** $(y - x)^3 = -(x - y)^3$ | $(-)^3 = (-)$ |

This is the same rule from Exponents: raising a negative quantity to an even power gives a positive result, whereas raising it to an odd power keeps it negative.

**Example 4:** $2(a - b)^2 + 4(b - a)$

- $(b - a) = -(a - b)$, so $4(b - a) = -4(a - b)$.
- Leave $2(a - b)^2$ untouched.

$$= 2(a - b)^2 - 4(a - b) = 2(a - b)[(a - b) - 2] = \mathbf{2(a - b)(a - b - 2)}$$

Check: $2(a - b) \times (a - b) = 2(a - b)^2$ ✅, $2(a - b) \times (-2) = -4(a - b) = 4(b - a)$ ✅

---

## Part F: Fractional Coefficients

When the numerical coefficients are fractions, use this rule to find their HCF:

> **$\text{HCF of fractions} = \text{HCF of numerators} \div \text{LCM of denominators}$**

**Example 1:** $\frac{1}{2}x^2 + \frac{3}{2}x$

- HCF of numerators $1$ and $3$ $= 1$
- LCM of denominators $2$ and $2$ $= 2$
- Numerical common factor $= \frac{1}{2}$. Variable part: $x$.
- $\text{HCF} = \frac{1}{2}x$

$$= \mathbf{\frac{1}{2}x(x + 3)}$$

Check: $\frac{1}{2}x \times x = \frac{1}{2}x^2$ ✅, $\frac{1}{2}x \times 3 = \frac{3}{2}x$ ✅

**Example 2:** $\frac{2}{3}a^2b - \frac{4}{9}ab^2$

- HCF of numerators $2$ and $4$ $= 2$
- LCM of denominators $3$ and $9$ $= 9$
- Numerical part $= \frac{2}{9}$. Variables: $ab$.
- $\text{HCF} = \frac{2}{9}ab$

Now divide each term by $\frac{2}{9}ab$:
- $\frac{2}{3}a^2b \div \frac{2}{9}ab = \left(\frac{2}{3} \times \frac{9}{2}\right)a = 3a$
- $\frac{4}{9}ab^2 \div \frac{2}{9}ab = 2b$

$$= \mathbf{\frac{2}{9}ab(3a - 2b)}$$

Check: $\frac{2}{9}ab \times 3a = \frac{6}{9}a^2b = \frac{2}{3}a^2b$ ✅, $\frac{2}{9}ab \times 2b = \frac{4}{9}ab^2$ ✅

---

## Part G: What Comes After the Common Factor? (A Quick Preview)

Often, once you pull out the common factor, a **recognisable pattern** appears inside the bracket that can be factorised further. We will master those techniques in upcoming topics — for now, simply learn to spot them:

| Expression | After common factor | Next topic |
|---|---|---|
| $3x^2 - 27$ | $3(x^2 - 9)$ | Topic 4: Difference of squares |
| $2x^2 + 10x + 12$ | $2(x^2 + 5x + 6)$ | Topic 5: Quadratic trinomials |
| $5a^3 - 40$ | $5(a^3 - 8)$ | Topic 7: Difference of cubes |
| $(a - b)x^2 - (a - b)y^2$ | $(a - b)(x^2 - y^2)$ | Topic 4 |

Always remember: **taking out the common factor is the first step, rarely the final stop.**

---

## Common Pitfalls to Avoid

1. **Mistake 1: Dropping the hidden $1$.**
   In $7p^2q^2(2q - 3p + 1)$, forgetting the final $1$ and writing $7p^2q^2(2q - 3p)$ is wrong. Multiplying back immediately reveals a missing term.

2. **Mistake 2: Picking the highest power instead of the lowest.**
   The common factor of $x^3$ and $x^2$ is **$x^2$**, not $x^3$. Always take the **lowest power**.

3. **Mistake 3: Including a variable that is not in every term.**
   The HCF of $6x^2y$ and $9xz$ is $3x$, not $3xyz$, because neither $y$ nor $z$ appears in both terms.

4. **Mistake 4: Stopping before taking out the *full* HCF.**
   Writing $12x^3y^2 + 18x^2y^4 = 2x(6x^2y^2 + 9xy^4)$ is true but **incomplete** — the bracket still shares $3xy^2$. Always pull out the **largest** common factor.

5. **Mistake 5: Flipping only the first term's sign when factoring out a negative.**
   $-4a^3 + 8a^2 - 12a = -4a(a^2 - 2a + 3)$. **Every term** inside the bracket changes sign. Writing $-4a(a^2 + 2a - 3)$ is wrong.

6. **Mistake 6: Applying the sign flip incorrectly with powers.**
   $(y - x)^2 = (x - y)^2$ — there is **no** minus sign (even power). By contrast, $(y - x) = -(x - y)$ and $(y - x)^3 = -(x - y)^3$ **do** pick up a minus sign.

7. **Mistake 7: Skipping the check.**
   Sign flips and negative common factors are the #1 source of sign errors. Always multiply back to verify.

---

## Quick Recap

- **Taking out the common factor is the first step of every factorisation.**
- **HCF of monomials:** HCF of coefficients $\times$ the **lowest power** of each shared variable. Any variable missing from at least one term is left out.
- Divide each term by the HCF. When an entire term equals the HCF, **$1$** remains in its place.
- Taking out a **negative common factor** flips the sign of **every** term inside the bracket.
- **An entire bracket can be a common factor**; take its **lowest power** (e.g. $(x - y)$ from $(x - y)^2$ and $(x - y)$).
- **Sign flip:** $(y - x) = -(x - y)$. Even powers absorb the minus; odd powers keep it.
- **HCF of fractions** $= \text{HCF of numerators} \div \text{LCM of denominators}$.
- After taking out a common factor, inspect the bracket for further identities or splitting.
- Always **check** by multiplying back.

---

## Practice Questions

1. Find the HCF of:
   (a) $15x^2y^3$ and $25x^3y$
   (b) $6a^2bc$, $9ab^2c$, and $12abc^2$

2. Factorise:
   (a) $9x^3y^2 - 15x^2y^3$
   (b) $10p^3q^2 + 15p^2q - 5pq$
   (c) $16a^4b^3 - 24a^3b^4 + 8a^2b^2$

3. Factorise by taking out a negative common factor:
   (a) $-12x^3 - 18x^2$
   (b) $-5y^2 + 10y - 15$

4. Factorise:
   (a) $7a(m + n) - 4b(m + n)$
   (b) $4(x + y)^2 - 8(x + y)$

5. Factorise using the sign-flip idea:
   (a) $x(a - b) + y(b - a)$
   (b) $6p(q - r) - 9(r - q)$

6. Factorise: $\frac{3}{4}x^2y - \frac{1}{4}xy^2$

7. Factorise:
   (a) $2(3x - 1)^2 - 6(3x - 1)$
   (b) $(a - b)^3 + 2(b - a)^2$

8. Take out the common factor from $4x^2 - 36$. Which type of expression is left inside the bracket?

9. State whether each statement is true or false. Give a reason.
   (a) $6x^2 + 3x = 3x(2x)$
   (b) The HCF of $8x^3$ and $12x^5$ is $4x^3$.
   (c) $a - b = -(b - a)$
   (d) $(x - y)^2 = -(y - x)^2$

### Answers

1. (a) Numbers: $\text{HCF}(15, 25) = 5$. $x$: $x^2$ (lowest power). $y$: $y$ (lowest power). **$\text{HCF} = \mathbf{5x^2y}$**
   (b) Numbers: $\text{HCF}(6, 9, 12) = 3$. All three variables $a, b, c$ appear in every term with lowest power $1$. **$\text{HCF} = \mathbf{3abc}$**
2. (a) $\text{HCF} = 3x^2y^2$. **$\mathbf{3x^2y^2(3x - 5y)}$**
   Check: $3x^2y^2 \times 3x = 9x^3y^2$ ✅, $3x^2y^2 \times 5y = 15x^2y^3$ ✅
   (b) $\text{HCF} = 5pq$. The last term equals the HCF, leaving $1$. **$\mathbf{5pq(2p^2q + 3p - 1)}$**
   (c) $\text{HCF} = 8a^2b^2$. **$\mathbf{8a^2b^2(2a^2b - 3ab^2 + 1)}$**
3. (a) Factor out $-6x^2$. **$\mathbf{-6x^2(2x + 3)}$**
   (b) Factor out $-5$, flipping every sign inside. **$\mathbf{-5(y^2 - 2y + 3)}$**
   Check: $-5 \times y^2 = -5y^2$ ✅, $-5 \times (-2y) = 10y$ ✅, $-5 \times 3 = -15$ ✅
4. (a) **$\mathbf{(m + n)(7a - 4b)}$**
   (b) $\text{HCF} = 4(x + y)$. $4(x + y)[(x + y) - 2] = \mathbf{4(x + y)(x + y - 2)}$
5. (a) $y(b - a) = -y(a - b)$. So $x(a - b) - y(a - b) = \mathbf{(a - b)(x - y)}$
   Check: Original $= ax - bx + by - ay$. Answer $= ax - ay - bx + by$. Identical ✅
   (b) $-9(r - q) = +9(q - r)$. So $6p(q - r) + 9(q - r) = \mathbf{3(q - r)(2p + 3)}$
6. HCF of numerators $3, 1$ is $1$; LCM of denominators $4, 4$ is $4$. $\text{HCF} = \frac{1}{4}xy$. **$\mathbf{\frac{1}{4}xy(3x - y)}$**
   Check: $\frac{1}{4}xy \times 3x = \frac{3}{4}x^2y$ ✅, $\frac{1}{4}xy \times y = \frac{1}{4}xy^2$ ✅
7. (a) $\text{HCF} = 2(3x - 1)$. $2(3x - 1)[(3x - 1) - 3] = \mathbf{2(3x - 1)(3x - 4)}$
   (b) $(b - a)^2 = (a - b)^2$ (even power, no minus sign). So $(a - b)^3 + 2(a - b)^2$, with $\text{HCF} = (a - b)^2$: **$\mathbf{(a - b)^2(a - b + 2)}$**
8. **$\mathbf{4(x^2 - 9)}$**. Inside the bracket is a **difference of two squares** ($x^2 - 3^2$), which we will factorise further in Topic 4.
9. (a) **False.** $3x \div 3x = 1$. The correct answer is $3x(2x + 1)$.
   (b) **True.** $\text{HCF}(8, 12) = 4$, and the lower power between $x^3$ and $x^5$ is $x^3$.
   (c) **True.** $-(b - a) = -b + a = a - b$.
   (d) **False.** An even power cancels out the sign flip: $(x - y)^2 = (y - x)^2$, with no minus sign.

---

If all these variations feel like a lot at first, keep Sophia's gift boxes in mind: **outside sits what every term shares (the number of boxes); inside sits what belongs in each box.** Every variation — negative factors, brackets, sign flips, or fractions — is simply that same idea in disguise.

---

**In the next topic (Topic 3: Factorisation by Grouping):** What happens when there is no single factor common to the entire expression? We will split the terms into **groups** and **take out a common factor from each group** — using the exact same skills from this topic on smaller pieces. Part D's "bracket as a common factor" idea will be our star tool there.
