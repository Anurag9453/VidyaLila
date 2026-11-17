# Chapter: Factorisation (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [factorisation-part3.md](factorisation-part3.md) (Topic 3: Grouping).** Topic 1 (overview of formulae and methods) is in [factorisation.md](factorisation.md).
> **Topics covered in this file:**
> 4. Factorisation of Difference of Two Squares

---

# Topic 4: Difference of Two Squares

Let us briefly review our journey so far. In **Topic 2**, we learned to always pull out any **common factor** first. In **Topic 3**, we learned that when no single factor is shared across all terms, we split the terms into **groups**, factor each group, and **rearrange** the order if the brackets do not match on the first attempt. Both skills will keep appearing throughout this topic.

In Topic 1, we met the identity **$a^2 - b^2 = (a + b)(a - b)$** and worked through straightforward examples such as $x^2 - 49$, $9a^2 - 16b^2$, $2x^2 - 18$, $x^4 - 81$, $(x + y)^2 - z^2$, and mental shortcuts like $101 \times 99$. Now we will explore this identity **in full depth**: why it is true, how to spot perfect squares (including fractions and decimals), and how to apply it to multi-step and disguised expressions.

---

## A Workshop Tiling Story

Dr. Bennett is helping Elena trim architectural ceramic tiles in the design workshop. She has a **square ceramic tile** measuring **$10\text{ cm}$** on each side.

To fit around a corner pipe, Elena needs to cut away a **smaller square** of side **$4\text{ cm}$** from one corner.

What remains is an L-shaped tile. Its area is:
$$10^2 - 4^2 = 100 - 16 = 84\text{ cm}^2$$

Now Elena wants to reuse that leftover area as a single **rectangular border strip** rather than an L-shape. She slices the L-shape along one straight line into two pieces and slides one piece neatly alongside the other. Together they form a clean rectangle whose dimensions are:
- $\text{length} = 10 + 4 = \mathbf{14\text{ cm}}$
- $\text{width} = 10 - 4 = \mathbf{6\text{ cm}}$

Area $= 14 \times 6 = \mathbf{84\text{ cm}^2}$ — the exact same area!

Therefore:
$$10^2 - 4^2 = (10 + 4)(10 - 4)$$

Without even writing a variable, Elena's tile cut just proved the **difference of two squares** identity. Let us now prove it in general using letters.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Perfect square** | An expression obtained by squaring another expression | $49 = 7^2$, $x^4 = (x^2)^2$, $\frac{4}{9} = \left(\frac{2}{3}\right)^2$ |
| **Difference** | The result of subtracting one quantity from another | In $a^2 - b^2$, the difference between $a^2$ and $b^2$ |
| **Difference of two squares** | One perfect square subtracted from another perfect square | $x^2 - 25$, $4a^2 - 9b^2$ |
| **Sum of two squares** | Two perfect squares added together | $x^2 + 25$ (does not factorise over reals — see below) |
| **Factorise completely** | Keep breaking factors down until no factor can split any further | $x^4 - 1 = (x^2 + 1)(x + 1)(x - 1)$ |

---

## Part A: Why the Formula Works

### Visual Proof (Geometric Proof)

Let us translate Elena's tile cut into algebra:

1. Start with a large square of side **$a$**. Its area is **$a^2$**.
2. Cut a smaller square of side **$b$** from one corner. Its area is **$b^2$**.
3. The remaining L-shaped region has area **$a^2 - b^2$**.
4. Slice the L-shape into two rectangles:
   - First rectangle: length $a$, width $(a - b)$
   - Second rectangle: length $b$, width $(a - b)$
5. Move the second rectangle beside the first. Because both share the exact same width $(a - b)$, they join seamlessly into one large rectangle:
   - $\text{length} = a + b$
   - $\text{width} = a - b$
6. Area $= \mathbf{(a + b)(a - b)}$

Cutting and rearranging pieces never changes total area, so:
$$a^2 - b^2 = (a + b)(a - b) \text{ ✅}$$

### Proof by Multiplication (Algebraic Proof)

$$(a + b)(a - b) = a \times a - a \times b + b \times a - b \times b = a^2 - ab + ab - b^2 = \mathbf{a^2 - b^2} \text{ ✅}$$

The two middle terms ($-ab$ and $+ab$) **cancel each other out completely**. That is why only two terms remain.

---

## Part B: Recognising Perfect Squares

To apply the formula, you must first recognise whether both terms are perfect squares. Here is how to spot them quickly:

### Numbers

$1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, \dots$

Keeping these squares at your fingertips saves a lot of time.

### Powers of Variables

Variables with **even exponents** ($2, 4, 6, 8, \dots$) are always perfect squares:

| Term | Square of what? |
|---|---|
| $x^2$ | $x$ |
| $x^4$ | $x^2$ |
| $x^6$ | $x^3$ |
| $a^2b^4$ | $ab^2$ |
| $25x^4$ | $5x^2$ |
| $36y^6$ | $6y^3$ |

Rule of thumb: **take the square root of the number, and divide each variable's exponent by $2$.**

### Fractions

If both numerator and denominator are perfect squares, the fraction is a perfect square too:
- $\frac{4}{9} = \left(\frac{2}{3}\right)^2$
- $\frac{x^2}{4} = \left(\frac{x}{2}\right)^2$
- $\frac{1}{16} = \left(\frac{1}{4}\right)^2$

### Decimals

- $0.49 = (0.7)^2$
- $0.16 = (0.4)^2$
- $0.01 = (0.1)^2$
- $0.25 = (0.5)^2$

Trick: ignore the decimal point to take the square root of the whole number, then **halve** the number of decimal places. For example, $0.49$ has $2$ decimal places and $49 = 7^2$, so its square root has $1$ decimal place: $0.7$.

### Examples

**Example 1:** $\frac{x^2}{4} - \frac{1}{9}$
$$= \left(\frac{x}{2}\right)^2 - \left(\frac{1}{3}\right)^2 = \mathbf{\left(\frac{x}{2} + \frac{1}{3}\right)\left(\frac{x}{2} - \frac{1}{3}\right)}$$

Check: $\left(\frac{x}{2}\right)^2 - \left(\frac{1}{3}\right)^2 = \frac{x^2}{4} - \frac{1}{9}$ ✅

**Example 2:** $0.49a^2 - 0.16$
$$= (0.7a)^2 - (0.4)^2 = \mathbf{(0.7a + 0.4)(0.7a - 0.4)}$$

**Example 3:** $25x^4 - 36y^6$
$$= (5x^2)^2 - (6y^3)^2 = \mathbf{(5x^2 + 6y^3)(5x^2 - 6y^3)}$$

Check: $(5x^2)^2 = 25x^4$ and $(6y^3)^2 = 36y^6$ ✅

---

## Part C: Common Factor First, Then the Formula

As we learned in Topics 1 and 2, **always pull out any common factor first.** Often, terms do not look like perfect squares at all until the common factor is removed.

**Example 1:** $3x^2 - 75$
Neither $3x^2$ nor $75$ is a perfect square. Yet both are divisible by $3$:
$$= 3(x^2 - 25) = 3(x^2 - 5^2) = \mathbf{3(x + 5)(x - 5)}$$

**Example 2:** $50a^3 - 2a$
Common factor is $2a$:
$$= 2a(25a^2 - 1) = 2a((5a)^2 - 1^2) = \mathbf{2a(5a + 1)(5a - 1)}$$

Check: $2a(25a^2 - 1) = 50a^3 - 2a$ ✅

**Example 3:** $12x^2y - 27y^3$
Common factor is $3y$:
$$= 3y(4x^2 - 9y^2) = 3y((2x)^2 - (3y)^2) = \mathbf{3y(2x + 3y)(2x - 3y)}$$

---

## Part D: Applying the Formula Repeatedly

Sometimes, after applying the formula once, one of the resulting brackets is **still** a difference of two squares. When that happens, apply the formula again. In Topic 1, we did this for $x^4 - 81$; let us try a few higher-power examples.

**Example 1:** $a^4 - b^4$
$$= (a^2)^2 - (b^2)^2 = (a^2 + b^2)(a^2 - b^2) = \mathbf{(a^2 + b^2)(a + b)(a - b)}$$

($a^2 + b^2$ cannot be factorised further — we will explain why in Part H.)

**Example 2:** $x^8 - 1$
$$= (x^4)^2 - 1^2 = (x^4 + 1)(x^4 - 1)$$
Split $x^4 - 1$ again:
$$= (x^4 + 1)(x^2 + 1)(x^2 - 1)$$
Split $x^2 - 1$ once more:
$$= \mathbf{(x^4 + 1)(x^2 + 1)(x + 1)(x - 1)}$$

We applied the formula three times! Notice that at every stage only the **minus** bracket split, never the plus brackets.

**Example 3:** $16x^4 - 81$
$$= (4x^2)^2 - 9^2 = (4x^2 + 9)(4x^2 - 9) = \mathbf{(4x^2 + 9)(2x + 3)(2x - 3)}$$

> Remember: as long as any factor still looks like **"something$^2 -$ something$^2$"**, keep splitting it!

---

## Part E: When Both Terms Are Brackets

In $a^2 - b^2$, **$a$ and $b$ can represent any expression** — including entire brackets. In Topic 1 we saw $(x + y)^2 - z^2$, where one term was a bracket. Now let us factorise expressions where *both* terms are brackets.

**Method:**
- First factor: **$(\text{first bracket}) + (\text{second bracket})$**
- Second factor: **$(\text{first bracket}) - (\text{second bracket})$**
- In the second factor, remember to **flip every sign inside the second bracket** because of the minus sign in front of it.

**Example 1:** $(a + b)^2 - (a - b)^2$
$$= [(a + b) + (a - b)] [(a + b) - (a - b)]$$
$$= [a + b + a - b] [a + b - a + b]$$
$$= (2a)(2b) = \mathbf{4ab}$$

Check: $(a + b)^2 - (a - b)^2 = (a^2 + 2ab + b^2) - (a^2 - 2ab + b^2) = 4ab$ ✅

**Example 2:** $(2x + 3)^2 - (x - 1)^2$
$$= [(2x + 3) + (x - 1)] [(2x + 3) - (x - 1)]$$
$$= [2x + 3 + x - 1] [2x + 3 - x + 1]$$
$$= \mathbf{(3x + 2)(x + 4)}$$

Check:
- Left-hand side: $(4x^2 + 12x + 9) - (x^2 - 2x + 1) = 3x^2 + 14x + 8$
- Right-hand side: $(3x + 2)(x + 4) = 3x^2 + 12x + 2x + 8 = 3x^2 + 14x + 8$ ✅

**Example 3:** $9(x + y)^2 - 4(x - y)^2$
First rewrite each term as a single square:
$$= [3(x + y)]^2 - [2(x - y)]^2$$
$$= [3x + 3y + 2x - 2y] [3x + 3y - 2x + 2y]$$
$$= \mathbf{(5x + y)(x + 5y)}$$

Check: Left-hand side $= 9x^2 + 18xy + 9y^2 - 4x^2 + 8xy - 4y^2 = 5x^2 + 26xy + 5y^2$. Right-hand side $= 5x^2 + 25xy + xy + 5y^2 = 5x^2 + 26xy + 5y^2$ ✅

---

## Part F: Combining Grouping with the Formula

Here we bring back **Topic 3's grouping method**: split terms into groups and pull out a common factor. The only twist is that one of the groups will factor via **difference of two squares**.

### Type 1: Two Square Terms and Two Common-Factor Terms

**Example 1:** $a^2 - b^2 + a - b$
$a^2 - b^2 = (a + b)(a - b)$, and $a - b = 1 \times (a - b)$.
$$= (a + b)(a - b) + 1(a - b)$$
$(a - b)$ is common to both parts:
$$= \mathbf{(a - b)(a + b + 1)}$$

Check: $(a - b)(a + b + 1) = a^2 + ab + a - ab - b^2 - b = a^2 - b^2 + a - b$ ✅

**Example 2:** $x^2 - 4 + 3x - 6$
$x^2 - 4 = (x + 2)(x - 2)$, and $3x - 6 = 3(x - 2)$.
$$= (x + 2)(x - 2) + 3(x - 2)$$
$$= (x - 2)(x + 2 + 3) = \mathbf{(x - 2)(x + 5)}$$

Check: $(x - 2)(x + 5) = x^2 + 3x - 10$, and $x^2 - 4 + 3x - 6 = x^2 + 3x - 10$ ✅

### Type 2: Three Terms Combining into a Perfect Square

In Topic 1 we saw $a^2 - 2ab + b^2 - c^2$. Now let us tackle a trickier case where **a minus sign sits in front of the three-term group.**

**Example 3:** $x^2 - y^2 - 2y - 1$
This is still Topic 3's grouping, just with a three-term group. Look closely at the last three terms: $-y^2 - 2y - 1 = -(y^2 + 2y + 1) = -(y + 1)^2$.
$$= x^2 - (y + 1)^2$$
$$= [x + (y + 1)] [x - (y + 1)]$$
$$= \mathbf{(x + y + 1)(x - y - 1)}$$

Check: $(x + y + 1)(x - y - 1) = x^2 - (y + 1)^2 = x^2 - y^2 - 2y - 1$ ✅

Notice: when factoring out that minus sign, **every sign inside the bracket flipped.**

---

## Part G: The Add-and-Subtract Trick

Occasionally, an expression does not look like a difference of squares at all — yet a clever move reveals one: **add and subtract the exact same term.** Since $+k - k = 0$, the expression's value does not change, while its shape transforms completely.

**Example 1:** $x^4 + 4$

Notice that $x^4 = (x^2)^2$ and $4 = 2^2$. If only **$4x^2$** sat in the middle, we would have $(x^2 + 2)^2$. So add and subtract $4x^2$:
$$x^4 + 4 = x^4 + 4x^2 + 4 - 4x^2$$
$$= (x^2 + 2)^2 - (2x)^2$$
$$= \mathbf{(x^2 + 2x + 2)(x^2 - 2x + 2)}$$

Check: $(x^2 + 2 + 2x)(x^2 + 2 - 2x) = (x^2 + 2)^2 - (2x)^2 = x^4 + 4x^2 + 4 - 4x^2 = x^4 + 4$ ✅

**Example 2:** $x^4 + x^2 + 1$

If the middle term were **$2x^2$** instead of $x^2$, we would have $(x^2 + 1)^2$. So add and subtract one extra $x^2$:
$$x^4 + x^2 + 1 = x^4 + 2x^2 + 1 - x^2$$
$$= (x^2 + 1)^2 - x^2$$
$$= \mathbf{(x^2 + x + 1)(x^2 - x + 1)}$$

Check: $(x^2 + 1 + x)(x^2 + 1 - x) = (x^2 + 1)^2 - x^2 = x^4 + 2x^2 + 1 - x^2 = x^4 + x^2 + 1$ ✅

This trick works wonders on challenge problems. How to spot it: **the $x^4$ term and the constant term are both perfect squares**, while the middle term is missing or "off."

---

## Part H: Why $a^2 + b^2$ Cannot Be Factorised

This is one of the most common questions in algebra: **"$a^2 - b^2$ factors so easily — why doesn't $a^2 + b^2$?"**

**Reason 1 (test by multiplying):** Try multiplying any pair of simple binomials:
- $(a + b)(a + b) = a^2 + \mathbf{2ab} + b^2$ (produces a $+2ab$ middle term)
- $(a - b)(a - b) = a^2 - \mathbf{2ab} + b^2$ (produces a $-2ab$ middle term)
- $(a + b)(a - b) = a^2 - b^2$ (cancels the middle term, but forces a minus sign)

No combination of signs produces **just $a^2 + b^2$**.

**Reason 2 (using the Factor Theorem from Polynomials):** If $x^2 + 9$ had a real linear factor $(x - k)$, then setting $x = k$ would have to make $x^2 + 9 = 0$. Yet $x^2$ is always $0$ or positive, so $x^2 + 9$ is always **$9$ or greater** — it can never equal $0$. Therefore, it has no real linear factors.

Keep this firm rule in mind:
> **A sum of two squares ($a^2 + b^2$) cannot be factorised over the real numbers.**

*(Note: Higher-power sums like $x^4 + 4$ in Part G *can* split, because adding and subtracting $4x^2$ turns them into a difference of squares. A plain $a^2 + b^2$, however, never splits.)*

---

## Part I: Working with Numbers (Mental Maths)

In Topic 1, we multiplied $101 \times 99$ in our heads. Now let us use the formula in reverse: **computing the difference of two squares** in seconds.

**Example 1:** $57^2 - 43^2$
$$= (57 + 43)(57 - 43) = 100 \times 14 = \mathbf{1,400}$$

*(Doing it the long way gives $3{,}249 - 1{,}849 = 1{,}400$ — same answer, far more effort.)*

**Example 2:** $(0.75)^2 - (0.25)^2$
$$= (0.75 + 0.25)(0.75 - 0.25) = 1 \times 0.5 = \mathbf{0.5}$$

**Example 3:** $999^2 - 1$
$$= (999 + 1)(999 - 1) = 1{,}000 \times 998 = \mathbf{998,000}$$

**Example 4:** $89^2 - 11^2$
$$= (89 + 11)(89 - 11) = 100 \times 78 = \mathbf{7,800}$$

Shortcut clue: whenever the two numbers **add up to a round number** like $100$ or $1{,}000$ (or have a round difference), this method is lightning-fast.

### Another Useful Type of Problem

**Example 5:** If $x^2 - y^2 = 45$ and $x + y = 9$, find $x$ and $y$.

$$x^2 - y^2 = (x + y)(x - y)$$
$$45 = 9 \times (x - y)$$
$$x - y = \mathbf{5}$$

Now add $x + y = 9$ and $x - y = 5$: $2x = 14$, so **$x = 7$**. Then $y = 9 - 7 = \mathbf{2}$.

Check: $7^2 - 2^2 = 49 - 4 = 45$ ✅

---

## Common Pitfalls to Avoid

1. **Mistake 1: Writing $a^2 + b^2 = (a + b)(a - b)$.**
   The identity works **only for subtraction**. $x^2 + 16 \neq (x + 4)(x - 4)$. Check: $(x + 4)(x - 4) = x^2 - 16$.

2. **Mistake 2: Misidentifying perfect squares.**
   - $8x^2$ is not a perfect square ($8$ is not a square). Check for a common factor first.
   - $x^3$ is not a perfect square (its exponent is odd).
   - $0.4$ is not a perfect square, whereas $0.04$ is ($(0.2)^2$).

3. **Mistake 3: Stopping halfway.**
   Do not stop at $a^4 - b^4 = (a^2 + b^2)(a^2 - b^2)$ — $a^2 - b^2$ splits once more.

4. **Mistake 4: Sign errors when subtracting a bracket.**
   In the second factor of $(2x + 3)^2 - (x - 1)^2$, $(2x + 3) - (x - 1) = 2x + 3 - x \mathbf{+ 1}$. The minus sign flips $-1$ into $+1$.

5. **Mistake 5: Forgetting to flip signs when factoring out a minus sign.**
   $-y^2 - 2y - 1 = -(y^2 + 2y + 1)$. Every term inside becomes positive.

6. **Mistake 6: Forgetting to take out a common factor first.**
   Do not look at $3x^2 - 75$, say "those aren't squares," and walk away! Pull out $3$ first to reveal $x^2 - 25$.

7. **Mistake 7: Forgetting to divide exponents by $2$ when taking square roots.**
   The square root of $x^6$ is $x^3$, not $x^4$ (exponent $6 \div 2 = 3$).

---

## Quick Recap

- **$a^2 - b^2 = (a + b)(a - b)$**. Visually: cut a smaller square from a larger square, and the leftover L-shape rearranges into a rectangle of size $(a + b) \times (a - b)$.
- **Spot perfect squares:** square numbers ($1, 4, 9, \dots$), variables with even powers ($x^2, x^4, \dots$), fractions ($\frac{4}{9}$), and decimals ($0.49$).
- **Common factor first**, then apply the formula.
- Keep applying the formula as long as any factor has the form **"something$^2 -$ something$^2$"**.
- $a$ and $b$ can be **entire brackets**; remember to flip every sign in the subtracted bracket.
- **With grouping:** one group uses difference of squares, the other uses a common factor (or three terms form a perfect square).
- **Add-and-subtract trick:** for expressions like $x^4 + 4$ and $x^4 + x^2 + 1$, add and subtract the missing middle term.
- **$a^2 + b^2$ cannot be factorised over the real numbers.**
- **Mental maths:** $57^2 - 43^2 = 100 \times 14 = 1{,}400$.

---

## Practice Questions

1. Factorise:
   (a) $\frac{x^2}{9} - \frac{1}{16}$
   (b) $0.36p^2 - 0.01$
   (c) $49a^6 - 64b^4$

2. Take out the common factor first and then factorise:
   (a) $5x^2 - 80$
   (b) $18a^3 - 8ab^2$

3. Factorise completely:
   (a) $81x^4 - 1$
   (b) $a^8 - b^8$

4. Factorise:
   (a) $(x + 5)^2 - 16$
   (b) $(3a + 2b)^2 - (a - b)^2$

5. Factorise:
   (a) $x^2 - y^2 + x + y$
   (b) $4a^2 - b^2 + 2a - b$
   (c) $a^2 - 2a + 1 - b^2$

6. Factorise $4x^4 + 1$ by adding and subtracting a suitable term.

7. Evaluate using the difference of two squares:
   (a) $68^2 - 32^2$
   (b) $(6.5)^2 - (3.5)^2$
   (c) $1001^2 - 999^2$

8. If $x^2 - y^2 = 45$ and $x - y = 5$, find $x + y$, $x$, and $y$.

9. State whether each statement is true or false. Give a reason.
   (a) $x^2 + 16 = (x + 4)(x - 4)$
   (b) $a^4 - b^4 = (a^2 + b^2)(a^2 - b^2)$ is the complete factorisation.
   (c) $0.04$ is a perfect square.

### Answers

1. (a) $\left(\frac{x}{3}\right)^2 - \left(\frac{1}{4}\right)^2 = \mathbf{\left(\frac{x}{3} + \frac{1}{4}\right)\left(\frac{x}{3} - \frac{1}{4}\right)}$
   (b) $(0.6p)^2 - (0.1)^2 = \mathbf{(0.6p + 0.1)(0.6p - 0.1)}$
   (c) $(7a^3)^2 - (8b^2)^2 = \mathbf{(7a^3 + 8b^2)(7a^3 - 8b^2)}$
2. (a) $5(x^2 - 16) = \mathbf{5(x + 4)(x - 4)}$
   (b) $2a(9a^2 - 4b^2) = \mathbf{2a(3a + 2b)(3a - 2b)}$
3. (a) $(9x^2)^2 - 1^2 = (9x^2 + 1)(9x^2 - 1) = \mathbf{(9x^2 + 1)(3x + 1)(3x - 1)}$
   (b) $(a^4 + b^4)(a^4 - b^4) = (a^4 + b^4)(a^2 + b^2)(a^2 - b^2) = \mathbf{(a^4 + b^4)(a^2 + b^2)(a + b)(a - b)}$
4. (a) $(x + 5)^2 - 4^2 = (x + 5 + 4)(x + 5 - 4) = \mathbf{(x + 9)(x + 1)}$
   Check: $x^2 + 10x + 25 - 16 = x^2 + 10x + 9$, and $(x + 9)(x + 1) = x^2 + 10x + 9$ ✅
   (b) $[3a + 2b + a - b][3a + 2b - a + b] = \mathbf{(4a + b)(2a + 3b)}$
   Check: both sides expand to $8a^2 + 14ab + 3b^2$ ✅
5. (a) $(x + y)(x - y) + (x + y) = \mathbf{(x + y)(x - y + 1)}$
   (b) $(2a + b)(2a - b) + (2a - b) = \mathbf{(2a - b)(2a + b + 1)}$
   (c) $(a - 1)^2 - b^2 = \mathbf{(a - 1 + b)(a - 1 - b)}$
6. $4x^4 + 1 = 4x^4 + 4x^2 + 1 - 4x^2 = (2x^2 + 1)^2 - (2x)^2 = \mathbf{(2x^2 + 2x + 1)(2x^2 - 2x + 1)}$
   Check: $(2x^2 + 1)^2 - 4x^2 = 4x^4 + 4x^2 + 1 - 4x^2 = 4x^4 + 1$ ✅
7. (a) $(68 + 32)(68 - 32) = 100 \times 36 = \mathbf{3,600}$
   (b) $(6.5 + 3.5)(6.5 - 3.5) = 10 \times 3 = \mathbf{30}$
   (c) $(1001 + 999)(1001 - 999) = 2{,}000 \times 2 = \mathbf{4,000}$
8. $45 = (x + y)(x - y) = (x + y) \times 5$, so **$\mathbf{x + y = 9}$**. Adding $x + y = 9$ and $x - y = 5$ gives $2x = 14$, **$\mathbf{x = 7}$**, and **$\mathbf{y = 2}$**.
9. (a) **False.** $(x + 4)(x - 4) = x^2 - 16$. $x^2 + 16$ is a sum of squares, which cannot be factorised over the real numbers.
   (b) **False.** $a^2 - b^2$ factors further: $(a^2 + b^2)(a + b)(a - b)$.
   (c) **True.** $0.04 = (0.2)^2$.

---

If this topic ever feels packed with variations, hold on to one simple anchor: **whenever you see "one square minus another square," write $(\text{sum})(\text{difference})$.** Whether it involves fractions, brackets, or grouping, every problem here is simply spotting those two squares.

**What's next?** So far we have mainly factorised two-term expressions. In Topic 5, we will tackle **three-term quadratic trinomials** (such as $x^2 + 4x + 3$ and $6x^2 + 5x - 6$), where splitting the middle term into two parts brings Topic 3's grouping method right back into play.
