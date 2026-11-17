# Chapter: Factorisation (Part 7)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [factorisation-part6.md](factorisation-part6.md)** (which covers Topic 6: Cube of a Binomial). The initial introduction to all formulas is in Topic 1 ([factorisation.md](factorisation.md)).
> **Topics covered in this file:**
> 7. Factorisation of Sum and Difference of Cubes

---

# Topic 7: Factorisation of Sum and Difference of Cubes

In Topic 6, we expanded the cube of a binomial and wrote it in a special compact form:

$$(a + b)^3 = a^3 + b^3 + 3ab(a + b)$$

Now read that line backward. Tucked inside it is **$a^3 + b^3$**:

$$a^3 + b^3 = (a + b)^3 - 3ab(a + b)$$

Notice that both pieces on the right-hand side share a common factor of **$(a + b)$**. That means $a^3 + b^3$ can be split with $(a + b)$ pulled out! This single observation launches the entire topic.

In Topic 1, we met the final formulas:

- **$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$**
- **$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$**

Along with them, we learned the **SOAP** sign trick (*Same, Opposite, Always Positive*) and solved starter examples like $x^3 + 27$ and $8a^3 - 125$. We will not repeat those basics here.

Instead, this topic takes these formulas **one level deeper**:

- **Where the formulas come from** (so you never have to rely on blind memorisation).
- How to spot a **perfect cube**, whether it is a number, a higher power, or a fraction.
- Challenging cases: common factors, expressions inside brackets, $x^6 - y^6$, and cubes combined with grouping.

---

## Sophia's 3D Block Cutout

In Dr. Bennett's design workshop, Sophia builds a solid **large cube** out of modelling foam with edge length **$a\text{ cm}$**. Its total volume is **$a^3$**.

To create a recessed corner shelf for a modular 3D display, Sophia cuts out and removes a **small cube** of edge length **$b\text{ cm}$** from one corner. That removed corner has volume **$b^3$**.

The remaining block has volume **$a^3 - b^3$**.

To measure and pack the remaining piece cleanly, Sophia slices it straight into **three rectangular cuboids (blocks)**:

| Piece | Length $\times$ Width $\times$ Height | Volume |
|---|---|---|
| Full top layer | $a \times a \times (a - b)$ | $a^2(a - b)$ |
| First lower side block | $a \times b \times (a - b)$ | $ab(a - b)$ |
| Second lower corner block | $b \times b \times (a - b)$ | $b^2(a - b)$ |

Add all three volumes together:
$$a^2(a - b) + ab(a - b) + b^2(a - b)$$

All three terms share **$(a - b)$** as a common factor:
$$= \mathbf{(a - b)(a^2 + ab + b^2)}$$

And that total is the exact remaining foam block, $a^3 - b^3$! Therefore:

> **$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$**

Without any memorised formula — just by slicing a 3D block — Sophia proved the identity. Better yet, now you can immediately see **why** the second bracket has **three terms**: because the leftover block splits into **three cuboids**.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Perfect cube** | A number or term equal to something cubed | $27 = 3^3$, $8x^3 = (2x)^3$ |
| **Cube root** | The base expression whose cube gives the original term | Cube root of $27$ is $3$; of $8x^3$ is $2x$ |
| **Sum of cubes** | Two cubes added together | $a^3 + b^3$ |
| **Difference of cubes** | One cube subtracted from another | $a^3 - b^3$ |
| **Quadratic factor** | The second bracket, which has degree $2$ | $a^2 - ab + b^2$ |

---

## Part A: Where the Formulas Come From (Two Ways)

### Method 1: Multiplying Out Directly

Let us expand **$(a + b)(a^2 - ab + b^2)$**:

- $a \times a^2 = a^3$
- $a \times (-ab) = -a^2b$
- $a \times b^2 = ab^2$
- $b \times a^2 = a^2b$
- $b \times (-ab) = -ab^2$
- $b \times b^2 = b^3$

Add them all: $a^3 - a^2b + ab^2 + a^2b - ab^2 + b^3$

Watch what happens: **$-a^2b$ and $+a^2b$ cancel**, and **$+ab^2$ and $-ab^2$ cancel**. What remains is:
**$a^3 + b^3$** ✅

In the same way, expanding **$(a - b)(a^2 + ab + b^2)$** gives:
$$a^3 + a^2b + ab^2 - a^2b - ab^2 - b^3 = \mathbf{a^3 - b^3} \quad ✅$$

This shows **why the middle sign in the second bracket is opposite**: it forces every cross-term in the middle to cancel out cleanly.

### Method 2: From the Topic 6 Cube Formula

In Topic 6, we proved:
$$(a + b)^3 = a^3 + b^3 + 3ab(a + b)$$

Isolate $a^3 + b^3$:
$$a^3 + b^3 = (a + b)^3 - 3ab(a + b)$$

Factor out the common **$(a + b)$**:
$$= (a + b)\left[(a + b)^2 - 3ab\right]$$
$$= (a + b)\left[a^2 + 2ab + b^2 - 3ab\right]$$
$$= \mathbf{(a + b)(a^2 - ab + b^2)} \quad ✅$$

And from **$(a - b)^3 = a^3 - b^3 - 3ab(a - b)$**:
$$a^3 - b^3 = (a - b)^3 + 3ab(a - b)$$
$$= (a - b)\left[(a - b)^2 + 3ab\right]$$
$$= (a - b)\left[a^2 - 2ab + b^2 + 3ab\right]$$
$$= \mathbf{(a - b)(a^2 + ab + b^2)} \quad ✅$$

So even if you forget these formulas during an exam, you can derive them in 30 seconds from Topic 6's binomial cube identity.

---

## Part B: Recognising a Perfect Cube

The very first step in applying either formula is **rewriting both terms as cubes**. Once you spot the cube roots, half the problem is already solved.

### Numbers (Memorise the Cubes from $1$ to $10$)

| Number | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ |
|---|---|---|---|---|---|---|---|---|---|---|
| **Cube** | $1$ | $8$ | $27$ | $64$ | $125$ | $216$ | $343$ | $512$ | $729$ | $1000$ |

Learn this table by heart — roughly $80\%$ of problems in this topic rely on these ten numbers.

### Letters and Powers

Divide the exponent by **$3$**. If it divides evenly, the term is a perfect cube.

| Term | Written as a cube | Cube root |
|---|---|---|
| $x^3$ | $(x)^3$ | $x$ |
| $x^6$ | $(x^2)^3$ | $x^2$ |
| $x^9$ | $(x^3)^3$ | $x^3$ |
| $8x^3$ | $(2x)^3$ | $2x$ |
| $125a^6$ | $(5a^2)^3$ | $5a^2$ |
| $27x^3y^6$ | $(3xy^2)^3$ | $3xy^2$ |

Careful: the cube root of $x^6$ is **$x^2$**, not $x^3$. Because $(x^2)^3 = x^6$, whereas $(x^3)^3 = x^9$.

### Fractions and Decimals

Take the cube root of the numerator and denominator separately.

| Term | Written as a cube |
|---|---|
| $\frac{1}{27}$ | $\left(\frac{1}{3}\right)^3$ |
| $\frac{8}{125}$ | $\left(\frac{2}{5}\right)^3$ |
| $\frac{x^3}{8}$ | $\left(\frac{x}{2}\right)^3$ |
| $0.001$ | $(0.1)^3$ |

---

## Part C: Direct Formula Examples

Now let us tackle examples a step harder than Topic 1.

**Example 1:** $64x^3 + 125$

$64x^3 = (4x)^3$ and $125 = 5^3$. Here $a = 4x$, $b = 5$.
$$= (4x + 5)\left((4x)^2 - (4x)(5) + 5^2\right)$$
$$= \mathbf{(4x + 5)(16x^2 - 20x + 25)}$$

**Check:** $(4x + 5)(16x^2 - 20x + 25) = 64x^3 - 80x^2 + 100x + 80x^2 - 100x + 125 = 64x^3 + 125$ ✅

**Example 2:** $27a^3 - 343b^3$

$27a^3 = (3a)^3$ and $343b^3 = (7b)^3$. Replace $a \rightarrow 3a$, $b \rightarrow 7b$.
$$= (3a - 7b)\left((3a)^2 + (3a)(7b) + (7b)^2\right)$$
$$= \mathbf{(3a - 7b)(9a^2 + 21ab + 49b^2)}$$

**Check:** $27a^3 + 63a^2b + 147ab^2 - 63a^2b - 147ab^2 - 343b^3 = 27a^3 - 343b^3$ ✅

**Example 3 (fractions):** $\frac{x^3}{8} + \frac{1}{27}$

$\frac{x^3}{8} = \left(\frac{x}{2}\right)^3$ and $\frac{1}{27} = \left(\frac{1}{3}\right)^3$.
$$= \left(\frac{x}{2} + \frac{1}{3}\right)\left(\left(\frac{x}{2}\right)^2 - \left(\frac{x}{2}\right)\left(\frac{1}{3}\right) + \left(\frac{1}{3}\right)^2\right)$$
$$= \mathbf{\left(\frac{x}{2} + \frac{1}{3}\right)\left(\frac{x^2}{4} - \frac{x}{6} + \frac{1}{9}\right)}$$

**Example 4 (higher power):** $8 - y^6$

$8 = 2^3$ and $y^6 = (y^2)^3$.
$$= (2 - y^2)\left(2^2 + 2 \cdot y^2 + (y^2)^2\right)$$
$$= \mathbf{(2 - y^2)(4 + 2y^2 + y^4)}$$

**Check:** $8 + 4y^2 + 2y^4 - 4y^2 - 2y^4 - y^6 = 8 - y^6$ ✅

### A Quick Tip: Square the Entire Term

$(4x)^2 = \mathbf{16x^2}$, not $4x^2$. Both the number and the variable get squared. This is one of the most frequent slips in the whole chapter.

---

## Part D: Take Out the Common Factor First

Sometimes an expression does not look like a sum or difference of cubes at first glance — until you factor out a common factor and the cubes pop right out.

**Example 5:** $2x^3 + 54$

$54$ is not a perfect cube. Yet $2$ is common to both terms:
$$= 2(x^3 + 27) = 2(x^3 + 3^3)$$
$$= \mathbf{2(x + 3)(x^2 - 3x + 9)}$$

**Example 6:** $3a^3 - 81b^3$

$81$ is not a perfect cube. Factor out $3$:
$$= 3(a^3 - 27b^3) = 3\left(a^3 - (3b)^3\right)$$
$$= \mathbf{3(a - 3b)(a^2 + 3ab + 9b^2)}$$

**Check:** $(a - 3b)(a^2 + 3ab + 9b^2) = a^3 + 3a^2b + 9ab^2 - 3a^2b - 9ab^2 - 27b^3 = a^3 - 27b^3$ ✅. Multiplying by $3$ gives $3a^3 - 81b^3$ ✅

**Example 7:** $5x^4 - 40x$

Common factor $5x$:
$$= 5x(x^3 - 8)$$
$$= \mathbf{5x(x - 2)(x^2 + 2x + 4)}$$

---

## Part E: Cubes Involving Brackets

Sometimes $a$ or $b$ is an entire bracketed expression. Do not worry — treat the bracket like a single box or a single letter.

**Example 8:** $(x + 1)^3 + 8$

Here $a = (x + 1)$ and $b = 2$ (since $8 = 2^3$).
$$= \left[(x + 1) + 2\right]\left[(x + 1)^2 - 2(x + 1) + 2^2\right]$$

Simplify both brackets:
- First bracket: $x + 1 + 2 =$ **$x + 3$**
- Second bracket: $x^2 + 2x + 1 - 2x - 2 + 4 =$ **$x^2 + 3$**

$$= \mathbf{(x + 3)(x^2 + 3)}$$

**Check:** $(x + 3)(x^2 + 3) = x^3 + 3x^2 + 3x + 9$.
And $(x + 1)^3 + 8 = x^3 + 3x^2 + 3x + 1 + 8 = x^3 + 3x^2 + 3x + 9$ ✅

**Example 9:** $(a + b)^3 - (a - b)^3$

Let $A = (a + b)$ and $B = (a - b)$. Apply $A^3 - B^3 = (A - B)(A^2 + AB + B^2)$:

- $A - B = (a + b) - (a - b) =$ **$2b$**
- $A^2 = a^2 + 2ab + b^2$
- $AB = (a + b)(a - b) = a^2 - b^2$
- $B^2 = a^2 - 2ab + b^2$
- $A^2 + AB + B^2 = (a^2 + 2ab + b^2) + (a^2 - b^2) + (a^2 - 2ab + b^2) =$ **$3a^2 + b^2$**

$$= \mathbf{2b(3a^2 + b^2)}$$

**Check:** $(a + b)^3 - (a - b)^3 = (a^3 + 3a^2b + 3ab^2 + b^3) - (a^3 - 3a^2b + 3ab^2 - b^3) = 6a^2b + 2b^3 = 2b(3a^2 + b^2)$ ✅

---

## Part F: Cubes and Difference of Squares Together

Some expressions allow **both formulas** to be used. The classic example is **$x^6 - y^6$**.

### Example 10: $x^6 - y^6$ (Two Routes)

$x^6$ is both a square, $(x^3)^2$, and a cube, $(x^2)^3$. So there are two paths.

**Route 1: Difference of squares first ($a^2 - b^2$, from Topic 4)**

$$x^6 - y^6 = (x^3)^2 - (y^3)^2$$
$$= (x^3 + y^3)(x^3 - y^3)$$
$$= \mathbf{(x + y)(x^2 - xy + y^2)(x - y)(x^2 + xy + y^2)}$$

Four factors, and none of them breaks down any further. Done!

**Route 2: Difference of cubes first ($a^3 - b^3$)**

$$x^6 - y^6 = (x^2)^3 - (y^2)^3$$
$$= (x^2 - y^2)(x^4 + x^2y^2 + y^4)$$
$$= (x + y)(x - y)(x^4 + x^2y^2 + y^4)$$

Now we hit a snag: **$x^4 + x^2y^2 + y^4$** looks irreducible, yet it actually factors further using a clever hidden-square trick:

$$x^4 + x^2y^2 + y^4 = (x^4 + 2x^2y^2 + y^4) - x^2y^2$$
$$= (x^2 + y^2)^2 - (xy)^2$$
$$= (x^2 + y^2 + xy)(x^2 + y^2 - xy)$$

In the end, you reach the exact same answer as Route 1.

**Takeaway:** Whenever an expression is **both a square and a cube** (such as a $6$th power), **apply the difference of squares ($a^2 - b^2$) first.** That leads directly to the complete factorisation without needing any hidden trick.

### Example 11: $a^6 - 64$

Notice that $64 = 8^2$ and also $64 = 4^3$. Following the takeaway above, use squares first:

$$a^6 - 64 = (a^3)^2 - 8^2$$
$$= (a^3 + 8)(a^3 - 8)$$
$$= (a^3 + 2^3)(a^3 - 2^3)$$
$$= \mathbf{(a + 2)(a^2 - 2a + 4)(a - 2)(a^2 + 2a + 4)}$$

### Example 12 (Going a Step Further): $a^9 - b^9$

$a^9 = (a^3)^3$ and $b^9 = (b^3)^3$.
$$= (a^3 - b^3)(a^6 + a^3b^3 + b^6)$$
$$= \mathbf{(a - b)(a^2 + ab + b^2)(a^6 + a^3b^3 + b^6)}$$

*(At this level, the last factor $a^6 + a^3b^3 + b^6$ is not factorised further.)*

---

## Part G: Cubes Combined with Grouping

In Topic 3, we split four-term expressions into pairs of groups to factorise them. The same idea works here, except one pair uses a cube identity. Two terms form a sum or difference of cubes, and the remaining two terms yield a matching common bracket.

**Example 13:** $a^3 - b^3 + a - b$

Apply the difference of cubes to the first two terms, and group the last two together:
$$= (a - b)(a^2 + ab + b^2) + (a - b)$$

Now both parts share **$(a - b)$**:
$$= (a - b)(a^2 + ab + b^2) + (a - b) \cdot 1$$
$$= \mathbf{(a - b)(a^2 + ab + b^2 + 1)}$$

**Example 14:** $a^3 + b^3 + a + b$

$$= (a + b)(a^2 - ab + b^2) + (a + b)$$
$$= \mathbf{(a + b)(a^2 - ab + b^2 + 1)}$$

**Example 15:** $a^3 - 8 + 3a^2 - 6a$

First two terms: $a^3 - 8 = (a - 2)(a^2 + 2a + 4)$
Last two terms: $3a^2 - 6a = 3a(a - 2)$

$$= (a - 2)(a^2 + 2a + 4) + 3a(a - 2)$$
$$= (a - 2)(a^2 + 2a + 4 + 3a)$$
$$= (a - 2)(a^2 + 5a + 4)$$

Now factorise $a^2 + 5a + 4$ by middle-term splitting (Topic 5; product $4$, sum $5$: $1$ and $4$):
$$= \mathbf{(a - 2)(a + 1)(a + 4)}$$

**Check:** $(a + 1)(a + 4) = a^2 + 5a + 4$, and $(a - 2)(a^2 + 5a + 4) = a^3 + 5a^2 + 4a - 2a^2 - 10a - 8 = a^3 + 3a^2 - 6a - 8$ ✅

---

## Part H: Problems Involving $x^3 + \frac{1}{x^3}$

This is a very handy pattern. Just set $a = x$ and $b = \frac{1}{x}$.

A nice simplification happens automatically: **$ab = x \times \frac{1}{x} = 1$**, making the middle term in the second bracket super clean.

**Example 16:** $x^3 + \frac{1}{x^3}$

$$= \left(x + \frac{1}{x}\right)\left(x^2 - x \cdot \frac{1}{x} + \frac{1}{x^2}\right)$$
$$= \mathbf{\left(x + \frac{1}{x}\right)\left(x^2 - 1 + \frac{1}{x^2}\right)}$$

**Check:** $\left(x + \frac{1}{x}\right)\left(x^2 - 1 + \frac{1}{x^2}\right) = x^3 - x + \frac{1}{x} + x - \frac{1}{x} + \frac{1}{x^3} = x^3 + \frac{1}{x^3}$ ✅

**Example 17:** $x^3 - \frac{1}{x^3}$

$$= \mathbf{\left(x - \frac{1}{x}\right)\left(x^2 + 1 + \frac{1}{x^2}\right)}$$

---

## Part I: Applications to Numbers

These identities can turn heavy arithmetic into quick mental steps.

**Example 18:** Factorise $1001$.

$$1001 = 1000 + 1 = 10^3 + 1^3$$
$$= (10 + 1)(10^2 - 10 + 1) = 11 \times 91$$
Since $91 = 7 \times 13$, we get **$1001 = 7 \times 11 \times 13$**.

**Example 19:** Evaluate $\dfrac{38^3 + 12^3}{38^2 - 38 \times 12 + 12^2}$.

Look at the denominator: it has the exact form **$a^2 - ab + b^2$**, with $a = 38$ and $b = 12$.
Since $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, dividing by $(a^2 - ab + b^2)$ leaves:
$$\frac{a^3 + b^3}{a^2 - ab + b^2} = a + b = 38 + 12 = \mathbf{50}$$

The answer drops out immediately without computing a single large cube!

---

## Part J: Why Does the Second Bracket ($a^2 \pm ab + b^2$) Usually Not Factorise Further?

Students often try to break down $a^2 - ab + b^2$ even more. Usually, it **cannot be factorised further**. Why?

**Try a concrete example:** $x^3 + 27 = (x + 3)(x^2 - 3x + 9)$. Can $x^2 - 3x + 9$ be split?

Middle-term splitting requires two integers with **product $9$** and **sum $-3$**:
- $-1$ and $-9$: sum is $-10$ (no)
- $-3$ and $-3$: sum is $-6$ (no)

No pair works. So **$x^2 - 3x + 9$ cannot be factorised further.**

**The real reason:** we can rewrite $a^2 - ab + b^2$ as:
$$a^2 - ab + b^2 = \left(a - \frac{b}{2}\right)^2 + \frac{3b^2}{4}$$

That is a **sum of two squares** (joined by a $+$ sign). As we saw in Topic 1, expressions of the form $a^2 + b^2$ do not factorise over the real numbers. That is why the quadratic bracket stops here.

**Important caveat:** We said "usually" because in Example 10 (Route 2), $x^4 + x^2y^2 + y^4$ *did* factorise further. That happened only because $a = x^2$ and $b = y^2$ were squares themselves, creating a hidden difference of squares. When $a$ and $b$ are ordinary linear terms or numbers (like $x$ and $3$), the second bracket never splits further.

### Connection to the Factor Theorem in Polynomials

In Topic 7 of Polynomials, we learned: if $p(a) = 0$, then $(x - a)$ is a factor of $p(x)$.

Take $p(x) = x^3 - 27$. Notice $p(3) = 27 - 27 = 0$. Therefore **$(x - 3)$ is a factor**. And our formula agrees completely: $x^3 - 27 = (x - 3)(x^2 + 3x + 9)$. Both approaches tell the exact same story.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Confusing $a^3 + b^3$ with $(a + b)^3$.**
   $(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$ (Topic 6). $a^3 + b^3$ is completely different. Test $a = 1, b = 1$: $a^3 + b^3 = 2$, whereas $(a + b)^3 = 8$.

2. **Mistake 2: Writing $2ab$ inside the second bracket.**
   $a^3 + b^3 = (a + b)(a^2 - \mathbf{ab} + b^2)$. The middle term is **$ab$**, NOT **$2ab$**. Do not mix it up with $(a - b)^2 = a^2 - 2ab + b^2$.

3. **Mistake 3: Flipping the middle sign in the second bracket.**
   For $a^3 + b^3$, the middle term is **minus**; for $a^3 - b^3$, the middle term is **plus**. Always check with SOAP (*Same, Opposite, Always Positive*).

4. **Mistake 4: Taking the wrong cube root.**
   - Cube root of $8x^3$ is **$2x$**, not $8x$ or $4x$.
   - Cube root of $x^6$ is **$x^2$**, not $x^3$.
   - Cube root of $27a^3$ is **$3a$**, not $9a$.

5. **Mistake 5: Forgetting to square the coefficient in $a^2$ or $b^2$.**
   $(4x)^2 = \mathbf{16x^2}$, not $4x^2$. $(3a)^2 = \mathbf{9a^2}$, not $3a^2$.

6. **Mistake 6: Forgetting to pull out a common factor first.**
   In $2x^3 + 54$, $54$ is not a cube, so the formula will not work directly. Pull out $2$ first: $2(x^3 + 27)$.

7. **Mistake 7: Wasting time trying to factorise $a^2 \pm ab + b^2$ further.**
   Factors like $x^2 - 3x + 9$ do not break down further over the integers (or reals). Do not waste exam time trying to split them.

8. **Mistake 8: Using cubes first on $x^6 - y^6$ and getting stuck.**
   If you start with cubes, you hit $x^4 + x^2y^2 + y^4$ and get stuck. Always apply **difference of squares ($a^2 - b^2$) first** to get the complete factorisation cleanly.

9. **Mistake 9: Leaving bracketed-cube factors unsimplified.**
   In $(x + 1)^3 + 8$, always simplify $(x + 1 + 2)$ to $(x + 3)$ and the second bracket to $x^2 + 3$. Leaving it unsimplified is incomplete.

---

## Quick Recap

- **$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$** and **$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$**.
- You can prove both either by multiplying out directly or from Topic 6's **$(a \pm b)^3 = a^3 \pm b^3 \pm 3ab(a \pm b)$**.
- Sophia's 3D block: $a^3 - b^3$ splits into three cuboids, which is why the second bracket has **three terms**.
- Memorise the **cubes from $1$ to $10$**: $1, 8, 27, 64, 125, 216, 343, 512, 729, 1000$.
- Divide exponents by $3$ to find cube roots ($x^6 \rightarrow x^2$). For fractions, take cube roots of top and bottom separately.
- **Always take out any common factor first** ($2x^3 + 54 = 2(x^3 + 27)$).
- Treat a bracketed term like a single variable, then simplify both resulting brackets.
- For **$6$th powers**, apply **$a^2 - b^2$ first**, then factorise the resulting cubes.
- With grouping: use a cube identity on two terms, pull a common factor from the other two, then factor out the shared bracket.
- For **$x^3 \pm \frac{1}{x^3}$**, $ab$ simplifies to $1$.
- The second bracket **$a^2 \pm ab + b^2$** generally does not factorise further.

---

## Practice Questions

1. Write each expression as a perfect cube:
   (a) $343$
   (b) $8x^3$
   (c) $125a^6$
   (d) $\frac{x^3}{64}$
   (e) $\frac{27}{1000}$

2. Factorise:
   (a) $125x^3 + 1$
   (b) $64a^3 - 27b^3$
   (c) $1 - 216y^3$
   (d) $\frac{a^3}{27} + 8$

3. Take out the common factor first, then factorise:
   (a) $16x^3 + 54$
   (b) $24a^3 - 3$
   (c) $x^4y - xy^4$

4. Factorise:
   (a) $(x - 2)^3 + 27$
   (b) $(2a + b)^3 - (a - b)^3$

5. Factorise completely:
   (a) $x^6 - 1$
   (b) $64a^6 - b^6$

6. Factorise:
   (a) $x^3 + y^3 - x - y$
   (b) $a^3 - 8 + 3a^2 - 6a$

7. Factorise:
   (a) $x^3 - \frac{1}{x^3}$
   (b) $8x^3 + \frac{1}{x^3}$

8. Using a suitable identity, find the value of:
   (a) $(38^3 + 12^3) \div (38^2 - 38 \times 12 + 12^2)$
   (b) Show that $1001 = 11 \times 91$.

9. State whether each statement is true or false. Give a reason.
   (a) $a^3 + b^3 = (a + b)^3$
   (b) $a^2 - ab + b^2$ can be written as $(a - b)^2$.
   (c) $(x - 3)$ is a factor of $x^3 - 27$.
   (d) To factorise $x^6 - y^6$ completely, it is easier to use the difference of squares first.

### Answers

1. (a) **$7^3$** &nbsp; (b) **$(2x)^3$** &nbsp; (c) **$(5a^2)^3$** &nbsp; (d) **$\left(\frac{x}{4}\right)^3$** &nbsp; (e) **$\left(\frac{3}{10}\right)^3$**

2. (a) $(5x)^3 + 1^3 =$ **$(5x + 1)(25x^2 - 5x + 1)$**
   (b) $(4a)^3 - (3b)^3 =$ **$(4a - 3b)(16a^2 + 12ab + 9b^2)$**
   Check: $64a^3 + 48a^2b + 36ab^2 - 48a^2b - 36ab^2 - 27b^3 = 64a^3 - 27b^3$ ✅
   (c) $1^3 - (6y)^3 =$ **$(1 - 6y)(1 + 6y + 36y^2)$**
   (d) $\left(\frac{a}{3}\right)^3 + 2^3 =$ **$\left(\frac{a}{3} + 2\right)\left(\frac{a^2}{9} - \frac{2a}{3} + 4\right)$**

3. (a) $2(8x^3 + 27) = 2\left((2x)^3 + 3^3\right) =$ **$2(2x + 3)(4x^2 - 6x + 9)$**
   (b) $3(8a^3 - 1) = 3\left((2a)^3 - 1^3\right) =$ **$3(2a - 1)(4a^2 + 2a + 1)$**
   (c) $xy(x^3 - y^3) =$ **$xy(x - y)(x^2 + xy + y^2)$**

4. (a) Let $A = x - 2$, $B = 3$.
   $A + B = x + 1$
   $A^2 - AB + B^2 = (x^2 - 4x + 4) - 3(x - 2) + 9 = x^2 - 4x + 4 - 3x + 6 + 9 = x^2 - 7x + 19$
   **$(x + 1)(x^2 - 7x + 19)$**
   Check: $(x + 1)(x^2 - 7x + 19) = x^3 - 6x^2 + 12x + 19$, and $(x - 2)^3 + 27 = x^3 - 6x^2 + 12x - 8 + 27 = x^3 - 6x^2 + 12x + 19$ ✅
   (b) Let $A = 2a + b$, $B = a - b$.
   $A - B = a + 2b$
   $A^2 = 4a^2 + 4ab + b^2$, $AB = 2a^2 - ab - b^2$, $B^2 = a^2 - 2ab + b^2$
   $A^2 + AB + B^2 = 7a^2 + ab + b^2$
   **$(a + 2b)(7a^2 + ab + b^2)$**
   Check: both sides expand to $7a^3 + 15a^2b + 3ab^2 + 2b^3$ ✅

5. (a) $(x^3)^2 - 1^2 = (x^3 + 1)(x^3 - 1) =$ **$(x + 1)(x^2 - x + 1)(x - 1)(x^2 + x + 1)$**
   (b) $(8a^3)^2 - (b^3)^2 = (8a^3 + b^3)(8a^3 - b^3) =$ **$(2a + b)(4a^2 - 2ab + b^2)(2a - b)(4a^2 + 2ab + b^2)$**

6. (a) $(x + y)(x^2 - xy + y^2) - (x + y) =$ **$(x + y)(x^2 - xy + y^2 - 1)$**
   (b) $(a - 2)(a^2 + 2a + 4) + 3a(a - 2) = (a - 2)(a^2 + 5a + 4) =$ **$(a - 2)(a + 1)(a + 4)$**

7. (a) **$\left(x - \frac{1}{x}\right)\left(x^2 + 1 + \frac{1}{x^2}\right)$**
   (b) $(2x)^3 + \left(\frac{1}{x}\right)^3$. Here $a = 2x$ and $b = \frac{1}{x}$, so $ab = 2x \times \frac{1}{x} = 2$.
   **$\left(2x + \frac{1}{x}\right)\left(4x^2 - 2 + \frac{1}{x^2}\right)$**
   Check: $\left(2x + \frac{1}{x}\right)\left(4x^2 - 2 + \frac{1}{x^2}\right) = 8x^3 - 4x + \frac{2}{x} + 4x - \frac{2}{x} + \frac{1}{x^3} = 8x^3 + \frac{1}{x^3}$ ✅

8. (a) The divisor is $a^2 - ab + b^2$ with $a = 38$, $b = 12$. So the quotient is $a + b =$ **$50$**.
   (b) $1001 = 10^3 + 1^3 = (10 + 1)(100 - 10 + 1) =$ **$11 \times 91$** ✅

9. (a) **False.** $(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$; the middle terms do not vanish. (For $a = b = 1$, $2 \neq 8$.)
   (b) **False.** $(a - b)^2 = a^2 - 2ab + b^2$, which has $2ab$ in the middle rather than $ab$.
   (c) **True.** $x^3 - 27 = (x - 3)(x^2 + 3x + 9)$. Also by the Factor Theorem: $p(3) = 27 - 27 = 0$.
   (d) **True.** Applying $a^2 - b^2$ first produces $(x^3 + y^3)(x^3 - y^3)$, which factors completely right away. Starting with cubes stalls at $x^4 + x^2y^2 + y^4$.

---

If this topic ever feels heavy, simply picture Sophia's foam block: **large cube minus small cube $=$ three cuboids**, which is why $(a - b)$ pairs with a three-term bracket. Then use SOAP for the signs, and everything else falls into place.

**What's next:** So far we have factorised two cubes ($a^3 + b^3$). In the next topic, a third cube joins the party: **$x^3 + y^3 + z^3 - 3xyz$**. We will see how it breaks into two clean factors and how Topic 7's $a^3 + b^3$ formula sits right inside it.
