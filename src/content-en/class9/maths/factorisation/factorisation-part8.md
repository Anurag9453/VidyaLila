# Chapter: Factorisation (Part 8)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [factorisation-part7.md](factorisation-part7.md)** (which covers Topic 7: Factorisation of Sum and Difference of Cubes). All formulas and methods from Topic 1 are in [factorisation.md](factorisation.md).
> **Topics covered in this file:**
> 8. Factorisation of $x^3 + y^3 + z^3 - 3xyz$

---

# Topic 8: Factorisation of $x^3 + y^3 + z^3 - 3xyz$

In Topic 7, we studied the formula for **two cubes**:

$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$

That had only two variables, $a$ and $b$. Now suppose a **third variable $z$** joins the party. The expression grows a little longer and picks up one extra term, **$-3xyz$**:

$$x^3 + y^3 + z^3 - 3xyz$$

This is nothing completely foreign — it is simply the big sibling of Topic 7's formula. In Part A, we will see that **setting $z = 0$ turns it straight back into Topic 7's identity.**

This identity is hugely useful, especially because of a remarkable shortcut we will discover in Part C that collapses long cube calculations into a single line of multiplication.

---

## Elena, Liam, and Sophia's Warehouse Volume Allocation

Elena, Liam, and Sophia are managing **warehouse volume allocation** across three storage bays for a logistics project. At the end of the week, they record the net change in cubic storage space for each bay:

- Elena's Bay A **gains $25\text{ m}^3$** ($+25$)
- Liam's Bay B **releases $75\text{ m}^3$** ($-75$)
- Sophia's Bay C **gains $50\text{ m}^3$** ($+50$)

Total net volume change: $25 + (-75) + 50 = \mathbf{0}$. The warehouse allocation is completely **balanced**: every cubic metre freed in Bay B was reassigned to Bays A and C.

Just then, their supervisor Dr. Bennett poses a quick challenge: "Find the sum of the cubes of those three numbers: $25^3 + (-75)^3 + 50^3$."

Liam groans. "$75^3 = 421{,}875$! Do we really have to cube all three numbers by hand?"

Sophia smiles. "Not at all! Whenever three numbers add up to $0$, the sum of their cubes is simply **$3 \times$ the product of the three numbers**."

$$3 \times 25 \times (-75) \times 50 = \mathbf{-281{,}250}$$

Solved in two seconds! How does this magic work? That is exactly what we are about to uncover in this topic.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Identity** | An equation that holds true for **every value** of its variables | $(a + b)^2 = a^2 + 2ab + b^2$ |
| **Cube** | Multiplying a number or variable by itself three times | $5^3 = 5 \times 5 \times 5 = 125$ |
| **Product** | The result of multiplying quantities together | The product of $2, 3, 4$ is $24$ |
| **Cyclic order** | Moving in the loop $x \rightarrow y \rightarrow z \rightarrow x$; for pairs: $xy, yz, zx$ | $xy + yz + zx$ |
| **Converse** | Reversing an "if A, then B" statement to ask "if B, then A?" | Covered in Part D |

---

## Part A: The Identity

> **$x^3 + y^3 + z^3 - 3xyz = (x + y + z)(x^2 + y^2 + z^2 - xy - yz - zx)$**

Read the right-hand side in two parts:

- **First bracket:** the sum of all three terms, **$(x + y + z)$**
- **Second bracket:** the sum of their squares, **minus** all three pairwise products ($xy, yz, zx$)

### How to Remember It

Recall Identity 9 from Topic 1:
$$(x + y + z)^2 = x^2 + y^2 + z^2 \mathbf{+ 2xy + 2yz + 2zx}$$

The second bracket of today's identity has the exact same squares, except the pairwise products are **minus** and have **no $2$**:
$$x^2 + y^2 + z^2 \mathbf{- xy - yz - zx}$$

In short: *"squares positive, pairs negative, no $2$."*

### Checking It Ourselves (By Multiplying Out)

You do not have to take this formula on faith — let us multiply it out step by step.

Give the second bracket a temporary name: **$B = x^2 + y^2 + z^2 - xy - yz - zx$**.

Then $(x + y + z) \times B$ means **$x \cdot B + y \cdot B + z \cdot B$**:

**Step 1: $x \cdot B$**
$$= x^3 + xy^2 + xz^2 - x^2y - xyz - x^2z$$

**Step 2: $y \cdot B$**
$$= x^2y + y^3 + yz^2 - xy^2 - y^2z - xyz$$

**Step 3: $z \cdot B$**
$$= x^2z + y^2z + z^3 - xyz - yz^2 - xz^2$$

**Step 4: Add all three lines and pair up terms that cancel**

| Term | Where it appears ($+$) | Where it cancels ($-$) | Remaining |
|---|---|---|---|
| $xy^2$ | Step 1 ($+$) | Step 2 ($-$) | $0$ |
| $xz^2$ | Step 1 ($+$) | Step 3 ($-$) | $0$ |
| $x^2y$ | Step 2 ($+$) | Step 1 ($-$) | $0$ |
| $x^2z$ | Step 3 ($+$) | Step 1 ($-$) | $0$ |
| $yz^2$ | Step 2 ($+$) | Step 3 ($-$) | $0$ |
| $y^2z$ | Step 3 ($+$) | Step 2 ($-$) | $0$ |

Every single cross-term cancels! All that survives is:
- $x^3, y^3, z^3$ (one from each step)
- $-xyz$ three times $=$ **$-3xyz$**

$$= \mathbf{x^3 + y^3 + z^3 - 3xyz} \quad ✅$$

The identity is $100\%$ verified.

### Checking with Numbers Too

Substitute $x = 1, y = 2, z = 3$.

**Left-hand side:** $1 + 8 + 27 - 3(1)(2)(3) = 36 - 18 = \mathbf{18}$

**Right-hand side:**
- $x + y + z = 6$
- $x^2 + y^2 + z^2 = 1 + 4 + 9 = 14$
- $xy + yz + zx = 2 + 6 + 3 = 11$
- $(6)(14 - 11) = 6 \times 3 = \mathbf{18}$

Both sides match ✅

### Setting $z = 0$ Gives Back Topic 7

Plug **$z = 0$** into the identity:
- Left-hand side: $x^3 + y^3 + 0 - 0 = x^3 + y^3$
- Right-hand side: $(x + y + 0)(x^2 + y^2 + 0 - xy - 0 - 0) = (x + y)(x^2 - xy + y^2)$

So: **$x^3 + y^3 = (x + y)(x^2 - xy + y^2)$**

That is literally Topic 7's sum-of-cubes formula (with $x, y$ in place of $a, b$). In other words, Topic 7's formula is simply a **special case** of this three-variable identity!

---

## Part B: The Alternate Form

The second bracket can also be rewritten in another clever way:

> **$x^2 + y^2 + z^2 - xy - yz - zx = \frac{1}{2}\left[(x - y)^2 + (y - z)^2 + (z - x)^2\right]$**

**Why is this true?** Expand the three squares inside the right-hand side:

- $(x - y)^2 = x^2 - 2xy + y^2$
- $(y - z)^2 = y^2 - 2yz + z^2$
- $(z - x)^2 = z^2 - 2zx + x^2$

Add them up: $2x^2 + 2y^2 + 2z^2 - 2xy - 2yz - 2zx = \mathbf{2(x^2 + y^2 + z^2 - xy - yz - zx)}$

Taking half gives back the exact second bracket ✅

So the full identity can also be written as:

> **$x^3 + y^3 + z^3 - 3xyz = \frac{1}{2}(x + y + z)\left[(x - y)^2 + (y - z)^2 + (z - x)^2\right]$**

### Why This Form Is Useful

Squares of real numbers can never be negative. Therefore, **$x^2 + y^2 + z^2 - xy - yz - zx$ can never be negative.** It equals **$0$** only when all three squares equal $0$ — that is, when **$x = y = z$**. We will need this insight in Part D.

---

## Part C: The Most Useful Shortcut ($x + y + z = 0$)

Look again at the identity:
$$x^3 + y^3 + z^3 - 3xyz = \mathbf{(x + y + z)} \times (\text{second bracket})$$

If **$x + y + z = 0$**, then the right-hand side becomes $0 \times (\text{anything}) = \mathbf{0}$.

Hence:
$$x^3 + y^3 + z^3 - 3xyz = 0$$

> **If $x + y + z = 0$, then $x^3 + y^3 + z^3 = 3xyz$**

That is the exact shortcut Sophia used in the warehouse story: since the net volume allocation was balanced (sum $= 0$), the sum of the cubes equalled $3 \times$ the product.

### Numerical Examples

**Example 1:** Find the value of $25^3 + (-75)^3 + 50^3$.

Check the sum first: $25 + (-75) + 50 = \mathbf{0}$ ✅
So the value is $3 \times 25 \times (-75) \times 50 = 3 \times (-93{,}750) = \mathbf{-281{,}250}$.

**Check (by cubing directly):** $15{,}625 - 421{,}875 + 125{,}000 = -281{,}250$ ✅

**Example 2:** Find the value of $(-12)^3 + 7^3 + 5^3$.

Sum: $-12 + 7 + 5 = \mathbf{0}$ ✅
Value $= 3 \times (-12) \times 7 \times 5 = \mathbf{-1260}$.

**Check:** $-1728 + 343 + 125 = -1260$ ✅

**Example 3:** Find the value of $28^3 - 15^3 - 13^3$.

Read this as $28^3 + (-15)^3 + (-13)^3$.
Sum: $28 - 15 - 13 = \mathbf{0}$ ✅
Value $= 3 \times 28 \times (-15) \times (-13) = 3 \times 28 \times 195 = \mathbf{16{,}380}$.

**Check:** $21{,}952 - 3375 - 2197 = 16{,}380$ ✅

Notice that the product of two negative numbers is positive, which is why the final answer is positive.

### Algebraic Examples

**Example 4:** Simplify $(a - b)^3 + (b - c)^3 + (c - a)^3$.

Let $x = a - b$, $y = b - c$, $z = c - a$.

Sum: $(a - b) + (b - c) + (c - a) = a - b + b - c + c - a = \mathbf{0}$ ✅

Therefore:
$$\mathbf{(a - b)^3 + (b - c)^3 + (c - a)^3 = 3(a - b)(b - c)(c - a)}$$

**Example 5:** Simplify $(x - 2y)^3 + (2y - 3z)^3 + (3z - x)^3$.

Sum: $x - 2y + 2y - 3z + 3z - x = \mathbf{0}$ ✅

$$= \mathbf{3(x - 2y)(2y - 3z)(3z - x)}$$

**Tip:** Whenever you see a sum of three cubes, **check the sum of the three bases first.** If it is $0$, apply the shortcut immediately.

---

## Part D: The Converse

In Part C we saw: **if $x + y + z = 0$, then $x^3 + y^3 + z^3 = 3xyz$.**

Now ask the reverse question: if **$x^3 + y^3 + z^3 = 3xyz$**, must $x + y + z = 0$?

**Answer: Not always.** One of two things must be true.

From the alternate form in Part B:
$$x^3 + y^3 + z^3 - 3xyz = \frac{1}{2}(x + y + z)\left[(x - y)^2 + (y - z)^2 + (z - x)^2\right] = 0$$

When a product equals $0$, at least one factor must be $0$:
- Either **$x + y + z = 0$**,
- Or **$(x - y)^2 + (y - z)^2 + (z - x)^2 = 0$**, which happens only when **$x = y = z$**.

> **If $x^3 + y^3 + z^3 = 3xyz$, then either $x + y + z = 0$ or $x = y = z$.**

**Example:** Let $x = y = z = 2$.
- $x^3 + y^3 + z^3 = 8 + 8 + 8 = 24$
- $3xyz = 3 \times 2 \times 2 \times 2 = 24$

Both sides are equal, even though $x + y + z = 6 \neq 0$. The equation holds because all three variables are equal.

---

## Part E: Factorising Using the Identity

Now for the main factorisation skill: given an expression matching $x^3 + y^3 + z^3 - 3xyz$, write it in factored form.

To avoid confusion when the problem already uses $x, y, z$, write the identity in capital letters:

> **$A^3 + B^3 + C^3 - 3ABC = (A + B + C)(A^2 + B^2 + C^2 - AB - BC - CA)$**

### Steps

1. Identify the three cube terms and find **$A, B, C$** (**including their signs!**).
2. **Verify** that the fourth term really equals **$-3ABC$**.
3. Substitute $A, B, C$ into the formula.
4. Compute the signs of **$-AB, -BC, -CA$** carefully in the second bracket.

### Solved Examples

**Example 1:** Factorise $a^3 + 8b^3 + 27c^3 - 18abc$.

**Step 1:** Identify $A, B, C$:
- $a^3 = (a)^3 \rightarrow \mathbf{A = a}$
- $8b^3 = (2b)^3 \rightarrow \mathbf{B = 2b}$
- $27c^3 = (3c)^3 \rightarrow \mathbf{C = 3c}$

**Step 2:** Check: $3ABC = 3 \times a \times 2b \times 3c = 18abc$. The expression has $-18abc$ ✅

**Step 3:** Compute the pieces of the brackets:
- $A + B + C = a + 2b + 3c$
- $A^2 = a^2$, $B^2 = 4b^2$, $C^2 = 9c^2$
- $AB = 2ab$, $BC = 6bc$, $CA = 3ca$

**Step 4:** Put everything into the formula:
$$= \mathbf{(a + 2b + 3c)(a^2 + 4b^2 + 9c^2 - 2ab - 6bc - 3ca)}$$

**Example 2 (with a negative cube):** Factorise $8x^3 - y^3 + 27z^3 + 18xyz$.

Pay close attention to the signs here.

**Step 1:**
- $8x^3 = (2x)^3 \rightarrow \mathbf{A = 2x}$
- $-y^3 = (-y)^3 \rightarrow \mathbf{B = -y}$ (the minus goes inside, since $(-y)^3 = -y^3$)
- $27z^3 = (3z)^3 \rightarrow \mathbf{C = 3z}$

**Step 2:** Check: $-3ABC = -3 \times 2x \times (-y) \times 3z = \mathbf{+18xyz}$. The expression has $+18xyz$ ✅

*(That explains why $+18xyz$ appears! If $B$ had been positive, we would have needed $-18xyz$.)*

**Step 3:**
- $A + B + C = 2x - y + 3z$
- $A^2 = 4x^2$, $B^2 = y^2$, $C^2 = 9z^2$
- $AB = (2x)(-y) = \mathbf{-2xy}$, so $-AB = \mathbf{+2xy}$
- $BC = (-y)(3z) = \mathbf{-3yz}$, so $-BC = \mathbf{+3yz}$
- $CA = (3z)(2x) = \mathbf{6zx}$, so $-CA = \mathbf{-6zx}$

**Step 4:**
$$= \mathbf{(2x - y + 3z)(4x^2 + y^2 + 9z^2 + 2xy + 3yz - 6zx)}$$

**Example 3 (two negative cubes):** Factorise $x^3 - 8y^3 - 27 - 18xy$.

**Step 1:**
- $x^3 \rightarrow \mathbf{A = x}$
- $-8y^3 = (-2y)^3 \rightarrow \mathbf{B = -2y}$
- $-27 = (-3)^3 \rightarrow \mathbf{C = -3}$

**Step 2:** Check: $-3ABC = -3 \times x \times (-2y) \times (-3) = -3 \times 6xy = \mathbf{-18xy}$ ✅

**Step 3:**
- $A + B + C = x - 2y - 3$
- $A^2 = x^2$, $B^2 = 4y^2$, $C^2 = 9$
- $AB = (x)(-2y) = -2xy$, so $-AB = \mathbf{+2xy}$
- $BC = (-2y)(-3) = 6y$, so $-BC = \mathbf{-6y}$
- $CA = (-3)(x) = -3x$, so $-CA = \mathbf{+3x}$

**Step 4:**
$$= \mathbf{(x - 2y - 3)(x^2 + 4y^2 + 9 + 2xy - 6y + 3x)}$$

---

## Part F: Finding the Value of $x^3 + y^3 + z^3$

Sometimes a problem does not tell you $x, y, z$ individually. Instead, you are only given:
- $x + y + z$
- $xy + yz + zx$
- $xyz$

And asked to find $x^3 + y^3 + z^3$.

### Two Formulas You Need

**Formula 1** (from Identity 9 in Topic 1):
$$(x + y + z)^2 = x^2 + y^2 + z^2 + 2(xy + yz + zx)$$
So: **$x^2 + y^2 + z^2 = (x + y + z)^2 - 2(xy + yz + zx)$**

**Formula 2** (from this topic's identity):
> **$x^3 + y^3 + z^3 = 3xyz + (x + y + z)\left[(x^2 + y^2 + z^2) - (xy + yz + zx)\right]$**

### Solved Examples

**Example 1:** If $x + y + z = 6$, $xy + yz + zx = 11$, and $xyz = 6$, find $x^3 + y^3 + z^3$.

**Step 1:** Find $x^2 + y^2 + z^2$:
$$= 6^2 - 2(11) = 36 - 22 = \mathbf{14}$$

**Step 2:** Apply Formula 2:
$$x^3 + y^3 + z^3 = 3(6) + 6(14 - 11)$$
$$= 18 + 6 \times 3 = 18 + 18 = \mathbf{36}$$

**Check:** Notice $x = 1, y = 2, z = 3$ satisfy all three conditions (sum $6$, pairs $2 + 6 + 3 = 11$, product $6$). And $1 + 8 + 27 = 36$ ✅

**Example 2:** If $x + y + z = 9$, $xy + yz + zx = 26$, and $xyz = 24$, find $x^3 + y^3 + z^3$.

$$x^2 + y^2 + z^2 = 81 - 52 = \mathbf{29}$$
$$x^3 + y^3 + z^3 = 3(24) + 9(29 - 26) = 72 + 27 = \mathbf{99}$$

**Check:** $2, 3, 4$ (sum $9$, pairs $6 + 12 + 8 = 26$, product $24$). $8 + 27 + 64 = 99$ ✅

**Example 3:** If $x + y + z = 12$ and $x^2 + y^2 + z^2 = 50$, find $x^3 + y^3 + z^3 - 3xyz$.

First find $xy + yz + zx$:
$$144 = 50 + 2(xy + yz + zx)$$
$$xy + yz + zx = \frac{94}{2} = \mathbf{47}$$

$$x^3 + y^3 + z^3 - 3xyz = (x + y + z)(x^2 + y^2 + z^2 - xy - yz - zx)$$
$$= 12 \times (50 - 47) = 12 \times 3 = \mathbf{36}$$

**Check:** $3, 4, 5$ (sum $12$, squares $9 + 16 + 25 = 50$). $27 + 64 + 125 - 3(60) = 216 - 180 = 36$ ✅

**Example 4:** If $x + y + z = 0$ and $xyz = 4$, find $x^3 + y^3 + z^3$.

The sum is $0$, so use the shortcut: $x^3 + y^3 + z^3 = 3xyz = 3 \times 4 = \mathbf{12}$.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Putting a $2$ in front of the pairs in the second bracket.**
   Correct: $x^2 + y^2 + z^2 \mathbf{- xy - yz - zx}$
   Wrong: $x^2 + y^2 + z^2 - \mathbf{2}xy - \mathbf{2}yz - \mathbf{2}zx$
   The $2$ belongs only in the $(x + y + z)^2$ identity, not here.

2. **Mistake 2: Using the $3xyz$ shortcut without checking the sum first.**
   $x^3 + y^3 + z^3 = 3xyz$ holds **only** when $x + y + z = 0$ (or $x = y = z$). Always check the sum! For example, $1^3 + 2^3 + 3^3 = 36$, while $3 \times 1 \times 2 \times 3 = 18$; here the sum is $6$, so the shortcut does not apply.

3. **Mistake 3: Leaving the minus sign outside when identifying a negative cube.**
   For $-y^3$, take $B = \mathbf{-y}$, since $(-y)^3 = -y^3$. Choosing $B = y$ ruins the entire factorisation.

4. **Mistake 4: Skipping the $-3ABC$ verification check.**
   Before factorising, always verify that the fourth term truly equals $-3ABC$. In $8x^3 - y^3 + 27z^3 + 18xyz$, the $+18xyz$ works specifically because $B = -y$.

5. **Mistake 5: Getting the signs of $-AB, -BC, -CA$ wrong.**
   When $B$ is negative, $AB$ and $BC$ become negative, so putting a minus sign in front turns them **positive** ($-AB$ and $-BC$ become $+$). Work out each pair's sign separately, just as in Example 2.

6. **Mistake 6: Assuming the converse always forces $x + y + z = 0$.**
   $x^3 + y^3 + z^3 = 3xyz$ does **not always** mean $x + y + z = 0$. It can also happen when **$x = y = z$** (such as $2, 2, 2$).

7. **Mistake 7: Confusing $x^2 + y^2 + z^2$ with $(x + y + z)^2$.**
   In Part F, $x^2 + y^2 + z^2 = (x + y + z)^2 \mathbf{- 2(xy + yz + zx)}$. Never forget to subtract that $2(xy + yz + zx)$ term.

---

## Quick Recap

- **Identity:** $x^3 + y^3 + z^3 - 3xyz = (x + y + z)(x^2 + y^2 + z^2 - xy - yz - zx)$
- Second bracket memory cue: *"squares positive, pairs negative, no $2$."*
- **Alternate form:** $x^2 + y^2 + z^2 - xy - yz - zx = \frac{1}{2}\left[(x - y)^2 + (y - z)^2 + (z - x)^2\right]$. This is never negative.
- **Conditional shortcut:** If **$x + y + z = 0$**, then **$x^3 + y^3 + z^3 = 3xyz$**.
- Whenever you see a sum of three cubes, **check the sum of the three bases first.**
- $(a - b)^3 + (b - c)^3 + (c - a)^3 = 3(a - b)(b - c)(c - a)$, because $(a - b) + (b - c) + (c - a) = 0$.
- **Converse:** If $x^3 + y^3 + z^3 = 3xyz$, then $x + y + z = 0$ **or** $x = y = z$.
- **To factorise:** identify $A, B, C$ with their signs, verify $-3ABC$, then plug into the identity.
- **To find values:** find $x^2 + y^2 + z^2 = (x + y + z)^2 - 2(xy + yz + zx)$, then apply the identity.

---

## Practice Questions

1. Factorise:
   (a) $x^3 + 8y^3 + z^3 - 6xyz$
   (b) $27a^3 + b^3 + 8c^3 - 18abc$
   (c) $1 + x^3 + y^3 - 3xy$
   (d) $x^3 - 8y^3 - 27 - 18xy$

2. Without finding the cubes, find the value of:
   (a) $(-15)^3 + 8^3 + 7^3$
   (b) $30^3 + 20^3 - 50^3$

3. Simplify: $(2a - b)^3 + (b - 3c)^3 + (3c - 2a)^3$

4. If $x + y + z = 10$, $xy + yz + zx = 31$, and $xyz = 30$, find $x^3 + y^3 + z^3$.

5. If $a + b + c = 0$ and $abc = 4$, find $a^3 + b^3 + c^3$.

6. If $x + y + z = 12$ and $x^2 + y^2 + z^2 = 50$, find $x^3 + y^3 + z^3 - 3xyz$.

7. Verify the identity $x^3 + y^3 + z^3 - 3xyz = (x + y + z)(x^2 + y^2 + z^2 - xy - yz - zx)$ for $x = 2$, $y = -1$, and $z = 3$.

8. State whether each statement is true or false. Give a reason.
   (a) If $x^3 + y^3 + z^3 = 3xyz$, then $x + y + z$ must be $0$.
   (b) $x^2 + y^2 + z^2 - xy - yz - zx$ is never negative.
   (c) $2^3 + 3^3 + (-5)^3 = 3 \times 2 \times 3 \times (-5)$

### Answers

1. (a) $A = x$, $B = 2y$, $C = z$. Check: $3ABC = 6xyz$ ✅
   **$(x + 2y + z)(x^2 + 4y^2 + z^2 - 2xy - 2yz - zx)$**
   (b) $A = 3a$, $B = b$, $C = 2c$. Check: $3ABC = 18abc$ ✅
   **$(3a + b + 2c)(9a^2 + b^2 + 4c^2 - 3ab - 2bc - 6ca)$**
   (c) $A = 1$, $B = x$, $C = y$. Check: $3ABC = 3xy$ ✅
   **$(1 + x + y)(1 + x^2 + y^2 - x - xy - y)$**
   (d) $A = x$, $B = -2y$, $C = -3$. Check: $-3ABC = -3 \times x \times (-2y) \times (-3) = -18xy$ ✅
   $AB = -2xy$, $BC = 6y$, $CA = -3x$.
   **$(x - 2y - 3)(x^2 + 4y^2 + 9 + 2xy - 6y + 3x)$**
2. (a) Sum: $-15 + 8 + 7 = 0$. Value $= 3 \times (-15) \times 8 \times 7 =$ **$-2520$**
   (Check: $-3375 + 512 + 343 = -2520$ ✅)
   (b) Read as $30^3 + 20^3 + (-50)^3$. Sum: $30 + 20 - 50 = 0$. Value $= 3 \times 30 \times 20 \times (-50) =$ **$-90{,}000$**
   (Check: $27{,}000 + 8000 - 125{,}000 = -90{,}000$ ✅)
3. Sum: $2a - b + b - 3c + 3c - 2a = 0$. So the answer is: **$3(2a - b)(b - 3c)(3c - 2a)$**
4. $x^2 + y^2 + z^2 = 100 - 62 = 38$.
   $x^3 + y^3 + z^3 = 3(30) + 10(38 - 31) = 90 + 70 =$ **$160$**
   (Check with $2, 3, 5$: $8 + 27 + 125 = 160$ ✅)
5. Sum is $0$, so $a^3 + b^3 + c^3 = 3abc = 3 \times 4 =$ **$12$**
6. $144 = 50 + 2(xy + yz + zx)$, so $xy + yz + zx = 47$.
   $x^3 + y^3 + z^3 - 3xyz = 12(50 - 47) =$ **$36$**
7. **Left-hand side:** $8 + (-1) + 27 - 3(2)(-1)(3) = 34 + 18 =$ **$52$**
   **Right-hand side:**
   - $x + y + z = 2 - 1 + 3 = 4$
   - $x^2 + y^2 + z^2 = 4 + 1 + 9 = 14$
   - $xy + yz + zx = -2 + (-3) + 6 = 1$
   - $4 \times (14 - 1) = 4 \times 13 =$ **$52$**
   Both sides are equal ✅
8. (a) **False.** It also holds whenever $x = y = z$, such as $2, 2, 2$ ($8 + 8 + 8 = 24 = 3 \times 8$), where the sum is $6$.
   (b) **True.** It equals $\frac{1}{2}\left[(x - y)^2 + (y - z)^2 + (z - x)^2\right]$, and squares are never negative.
   (c) **True.** $2 + 3 + (-5) = 0$, so the shortcut applies. Both sides equal $-90$ ($8 + 27 - 125 = -90$, and $3 \times 2 \times 3 \times (-5) = -90$).

---

If this topic ever feels dense, hold on to one golden habit: **whenever you see three cubes added together, check the sum of their bases first. If the sum is $0$, the sum of the cubes equals $3 \times$ their product.** That single move solves half the problems in this topic.

---

# Chapter Wrap-up: Factorisation

This was the final topic of the Factorisation chapter. Here is the entire chapter at a glance:

| Topic | What We Learned | Main Method / Formula |
|---|---|---|
| 1 | What factorisation is; overview of formulas and methods | Reverse of expansion; table of $9$ identities; decision guide |
| 2 | Factoring out the common factor | Pull out HCF and lowest powers: $12x^3y^2 + 18x^2y^4 = 6x^2y^2(2x + 3y^2)$ |
| 3 | Factorisation by grouping | Pair up $4$ terms: $ax + ay + bx + by = (x + y)(a + b)$ |
| 4 | Difference of two squares | $a^2 - b^2 = (a + b)(a - b)$ |
| 5 | Quadratic trinomials | Middle-term splitting: product $= ac$, sum $= b$ |
| 6 | Cube of a binomial | $(a \pm b)^3 = a^3 \pm 3a^2b + 3ab^2 \pm b^3$ |
| 7 | Sum and difference of cubes | $a^3 \pm b^3 = (a \pm b)(a^2 \mp ab + b^2)$ |
| 8 | $x^3 + y^3 + z^3 - 3xyz$ | $(x + y + z)(x^2 + y^2 + z^2 - xy - yz - zx)$; if sum $= 0$, $x^3 + y^3 + z^3 = 3xyz$ |

Whenever you face a new expression, follow the Topic 1 sequence: **pull out any common factor first, count the terms to choose the right method or identity, check whether any resulting factor breaks down further, and finally multiply back to verify your answer.**
