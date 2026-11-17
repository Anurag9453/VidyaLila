# Chapter: Factorisation (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [factorisation-part2.md](factorisation-part2.md)** (Topic 2: Common Factor). Topic 1 (overview, formulae, and methods) is in [factorisation.md](factorisation.md).
> **Topics covered in this file:**
> 3. Factorisation by Grouping

---

# Topic 3: Factorisation by Grouping

## Building on Topic 2

In Topic 2, we mastered taking out a common factor:
- Finding the **HCF** of monomials (HCF of numbers $\times$ lowest power of each shared variable)
- Pulling out a **negative common factor**, which flips every sign inside the bracket
- Factoring out an entire **bracket as a common factor**, such as $5x(a + b) - 3y(a + b) = (a + b)(5x - 3y)$
- Using the **sign-flip** trick: $(b - a) = -(a - b)$

Yet one question remained open. What if **no single factor is shared by every term at once**? Consider $ax + ay + bx + by$. Here $a$ appears only in the first two terms, while $b$ appears only in the last two.

The solution is **grouping**. Best of all, there is nothing brand new to learn. **Grouping = Topic 2's common factor method applied separately to smaller groups.** First form small groups, apply Topic 2 to each group, and then pull out the matching bracket using Topic 2's "bracket as a common factor" trick.

In Topic 1, we briefly met grouping ($ax + ay + bx + by$, $x^3 + x^2 + x + 1$, and the tip to rearrange terms if a pairing fails). Now we will examine it in depth: **why it works, which terms belong together, how to recover when a first pairing fails, and how to handle $6$-term or trickier expressions.**

---

## A Market Stall Story

At a local farmers' market, apples cost **$\$x$ per kg** and pears cost **$\$y$ per kg**.

- Leo buys **$a\text{ kg}$ of apples** and **$a\text{ kg}$ of pears**.
- Maya buys **$b\text{ kg}$ of apples** and **$b\text{ kg}$ of pears**.

What is the combined bill when we add every item separately?

$$ax + ay + bx + by$$

Now the stall owner looks at the order a smarter way. She says: "Think of $1\text{ kg}$ of apples plus $1\text{ kg}$ of pears as one **produce bundle**. Each bundle costs **$(x + y)$**."

- Leo bought **$a$ bundles**: $a(x + y)$
- Maya bought **$b$ bundles**: $b(x + y)$

Together they bought **$(a + b)$ bundles**, each costing $(x + y)$. So the total bill is:

$$(a + b)(x + y)$$

Both ways of counting must give the exact same total:

$$ax + ay + bx + by = (a + b)(x + y)$$

That is grouping in action. First **group by customer** (Leo's order, Maya's order), factor out what each customer shares, and notice that both groups leave the **same "bundle" $(x + y)$**. Then factor out that shared bundle.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Grouping** | Splitting terms into smaller groups (usually pairs) to find shared factors | $(ax + ay) + (bx + by)$ |
| **Group common factor** | The common factor pulled out from within a single group | In $ax + ay$, the group common factor is **$a$** |
| **Common bracket** | The identical bracket left behind by every group after factoring | In $a(x + y) + b(x + y)$, it is **$(x + y)$** |
| **Rearrange** | Changing the order of terms so that useful groups can form | $x^2 + y - xy - x \rightarrow x^2 - x - xy + y$ |
| **Reversed bracket** | A subtraction bracket whose terms are in the opposite order of another | $(y - x) = -(x - y)$ |

---

## Part A: Why Grouping Works

In Topic 2, we used the rule:

$$ab + ac = a(b + c)$$

This is the **distributive law** read backwards. Grouping simply applies this same rule **twice in a row**.

Start with:

$$ax + ay + bx + by$$

**First pass** (inside each group):
- $ax + ay = a(x + y)$
- $bx + by = b(x + y)$

Now the expression becomes: $a(x + y) + b(x + y)$

**Second pass** (across the whole expression):
Here $(x + y)$ appears in both parts — exactly Topic 2's "bracket as a common factor." Give the bracket a temporary nickname, say **$(x + y) = S$**. Then the expression reads:

$$a \cdot S + b \cdot S = S(a + b)$$

Replace $S$ with $(x + y)$:

$$= \mathbf{(x + y)(a + b)}$$

So grouping is no mystery at all. It is simply **taking out the common factor twice**: once within each group, and once across the groups.

---

## Part B: Which Terms Should We Pair Together?

This is the single most important question in grouping. Keep one clear rule in mind:

> **Pair terms that share something in common. Whatever bracket comes out of the first group becomes the target bracket that the second group must also produce.**

Think of that second part as the **"target bracket" strategy**. The bracket left by Group 1 is your target. Factor out whatever you need from Group 2 (including its sign) so that the exact same bracket appears.

### Example 1: Works Directly in the Given Order

**$a^2 - ab + ac - bc$**

- Group 1: $a^2 - ab = \mathbf{a(a - b)}$. Target bracket: **$(a - b)$**.
- Group 2: $ac - bc = \mathbf{c(a - b)}$. Target achieved!

$$= a(a - b) + c(a - b) = \mathbf{(a - b)(a + c)}$$

Check: $(a - b)(a + c) = a^2 + ac - ab - bc$ ✅ (exact same terms, just reordered)

### Example 2: With Three Variables

**$x^2 + xy - 2xz - 2yz$**

- Group 1: $x^2 + xy = \mathbf{x(x + y)}$. Target: **$(x + y)$**.
- Group 2: $-2xz - 2yz$. If we pull out **$-2z$** (Topic 2's negative common factor), we are left with $(x + y)$. Target achieved!
  $-2xz - 2yz = \mathbf{-2z(x + y)}$

$$= x(x + y) - 2z(x + y) = \mathbf{(x + y)(x - 2z)}$$

Check: $(x + y)(x - 2z) = x^2 - 2xz + xy - 2yz$ ✅

Notice: if we had pulled out $+2z$ from Group 2, we would have got $(-x - y)$, which does not match the target $(x + y)$. That is why pulling out the **minus sign together with $2z$** was essential.

### Example 3: Choosing the Right Pairs

**$2ax + 3by + 3ay + 2bx$**

In the given order, the first two terms are $2ax$ and $3by$. They share **nothing** (no numerical factor and no variable). So that pairing will not work.

Look for terms that *do* share factors:
- $2ax$ and $2bx$: both share **$2x$**.
- $3ay$ and $3by$: both share **$3y$**.

Place those pairs side by side:
$$= (2ax + 2bx) + (3ay + 3by)$$
$$= 2x(a + b) + 3y(a + b)$$
$$= \mathbf{(a + b)(2x + 3y)}$$

Check: $(a + b)(2x + 3y) = 2ax + 3ay + 2bx + 3by$ ✅

---

## Part C: When the First Attempt Fails

Topic 1 gave the quick tip: "rearrange and try again." Now let us see what a failed pairing actually looks like and how to fix it smoothly.

### Example 4: $x^2 + y - xy - x$

**First attempt (in the given order):**
- Group 1: $x^2 + y$. Nothing in common. **Fails.**

No problem — try another pairing.

**Second attempt:** Both $x^2$ and $xy$ share $x$, so pair them together:
- $(x^2 - xy) + (y - x)$
- Group 1: $x(x - y)$. Target: $(x - y)$.
- Group 2: $y - x$. This is $(x - y)$ **reversed**! Use Topic 2's sign-flip trick: $y - x = -(x - y)$.
$= x(x - y) - 1(x - y)$
$= (x - y)(x - 1)$

That works nicely! Here is an even cleaner route:

**Third attempt:** Rearrange as $x^2 - x - xy + y$:
- Group 1: $x^2 - x = \mathbf{x(x - 1)}$. Target: $(x - 1)$.
- Group 2: $-xy + y$. Factor out **$-y$**: $-y(x - 1)$. Target achieved!
$= x(x - 1) - y(x - 1) = \mathbf{(x - 1)(x - y)}$

Check: $(x - 1)(x - y) = x^2 - xy - x + y$ ✅

Both the second and third attempts give the **exact same answer** (only the order of the brackets differs, which does not change a product). This shows that **there can be more than one valid grouping path.** Simply pair terms that share factors.

### Example 5: $x^2 + yz + xy + xz$

**First attempt:** $x^2 + yz$. Nothing in common. **Fails.**

**Rearrange:** Keep terms containing $x$ alongside $x^2$:
$$x^2 + xy + xz + yz$$
- Group 1: $x^2 + xy = x(x + y)$. Target: $(x + y)$.
- Group 2: $xz + yz = z(x + y)$. Match!
$$= \mathbf{(x + y)(x + z)}$$

Check: $(x + y)(x + z) = x^2 + xz + xy + yz$ ✅

### How Do You Know When Grouping Won't Work?

If you have tried every possible pairing and **none** of them produces matching brackets in the groups, the expression likely cannot be factorised by simple grouping. In that case, turn to other methods (such as identities, covered in upcoming topics).

---

## Part D: Groups with Minus Signs

Most errors in grouping come from **minus signs**. Let us focus squarely on handling them cleanly.

### The Rule (from Topic 2)

As we saw in Topic 2, whenever you factor out a **negative common factor**, **every term inside the bracket changes sign.** In grouping problems, this comes up in nearly every other question.

$$-ax + ay = \mathbf{-a(x - y)}$$
Check: $-a \times x = -ax$, $-a \times (-y) = +ay$ ✅

### Example 6: $3x - 3y - ax + ay$

- Group 1: $3x - 3y = \mathbf{3(x - y)}$. Target: $(x - y)$.
- Group 2: $-ax + ay$. Factor out **$-a$**: **$-a(x - y)$**.
$= 3(x - y) - a(x - y) = \mathbf{(x - y)(3 - a)}$

Check: $(x - y)(3 - a) = 3x - ax - 3y + ay$ ✅

### Example 7: $ab - a - b + 1$ (The Hidden $-1$)

- Group 1: $ab - a = \mathbf{a(b - 1)}$. Target: $(b - 1)$.
- Group 2: $-b + 1$. No letter appears in common, yet we can factor out **$-1$**: $-1(b - 1)$.
$= a(b - 1) - 1(b - 1) = \mathbf{(b - 1)(a - 1)}$

Check: $(b - 1)(a - 1) = ab - b - a + 1$ ✅

Pulling out **$1$ or $-1$** is an indispensable habit. Whenever a group seems to have nothing in common, check whether $1$ or $-1$ gives you the target bracket.

### Example 8: Reversed Brackets

**$a(x - y) + b(y - x)$**

The brackets $(x - y)$ and $(y - x)$ look different at first glance, yet they are exact **negatives** of each other (Topic 2's sign-flip trick):

$$(y - x) = -(x - y)$$

Verify with numbers: $5 - 3 = 2$, while $3 - 5 = -2$. Same size, opposite sign.

$$= a(x - y) + b \times (-(x - y))$$
$$= a(x - y) - b(x - y)$$
$$= \mathbf{(x - y)(a - b)}$$

Check: $(x - y)(a - b) = ax - bx - ay + by$. Original: $a(x - y) + b(y - x) = ax - ay + by - bx$ ✅

### Example 9: $p^2q - pr^2 - pq + r^2$

- Pair the 1st and 3rd terms (both share $pq$): $p^2q - pq = \mathbf{pq(p - 1)}$. Target: $(p - 1)$.
- Pair the 2nd and 4th terms: $-pr^2 + r^2$. Factor out **$-r^2$**: **$-r^2(p - 1)$**.
$= pq(p - 1) - r^2(p - 1) = \mathbf{(p - 1)(pq - r^2)}$

Check: $(p - 1)(pq - r^2) = p^2q - pr^2 - pq + r^2$ ✅

---

## Part E: Expressions with Higher Powers

Grouping is not limited to linear expressions in $x$ and $y$. It works just as smoothly on cubic (degree $3$) polynomials.

### Example 10: $x^3 - 2x^2 + x - 2$

- Group 1: $x^3 - 2x^2 = \mathbf{x^2(x - 2)}$. Target: $(x - 2)$.
- Group 2: $x - 2 = \mathbf{1(x - 2)}$.
$= x^2(x - 2) + 1(x - 2) = \mathbf{(x - 2)(x^2 + 1)}$

Check: $(x - 2)(x^2 + 1) = x^3 + x - 2x^2 - 2$ ✅

Notice that $x^2 + 1$ cannot be factorised further (as we saw in Topic 1, $a^2 + b^2$ does not split over the real numbers).

### Example 11: $2y^3 - y^2 + 4y - 2$

- Group 1: $2y^3 - y^2 = \mathbf{y^2(2y - 1)}$. Target: $(2y - 1)$.
- Group 2: $4y - 2 = \mathbf{2(2y - 1)}$.
$= y^2(2y - 1) + 2(2y - 1) = \mathbf{(2y - 1)(y^2 + 2)}$

Check: $(2y - 1)(y^2 + 2) = 2y^3 + 4y - y^2 - 2$ ✅

---

## Part F: Expressions with 6 Terms

When an expression has $6$ terms, you have two ways to group them:
- **$3 + 3$:** two groups of three terms each
- **$2 + 2 + 2$:** three groups of two terms each

Both routes lead to the exact same answer — pick whichever looks easier to spot.

### Example 12: $ax + bx + cx + ay + by + cy$

**Method 1 ($3 + 3$):**
- $(ax + bx + cx) = \mathbf{x(a + b + c)}$
- $(ay + by + cy) = \mathbf{y(a + b + c)}$
$= x(a + b + c) + y(a + b + c) = \mathbf{(a + b + c)(x + y)}$

**Method 2 ($2 + 2 + 2$):**
- $(ax + ay) = a(x + y)$
- $(bx + by) = b(x + y)$
- $(cx + cy) = c(x + y)$
$= a(x + y) + b(x + y) + c(x + y) = \mathbf{(x + y)(a + b + c)}$

Both give the same answer! Check: $(a + b + c)(x + y) = ax + ay + bx + by + cx + cy$ ✅

### Example 13: $x^2 + xy + xz + 2x + 2y + 2z$

**$3 + 3$ grouping:**
- $(x^2 + xy + xz) = \mathbf{x(x + y + z)}$
- $(2x + 2y + 2z) = \mathbf{2(x + y + z)}$
$= \mathbf{(x + y + z)(x + 2)}$

Check: $(x + y + z)(x + 2) = x^2 + 2x + xy + 2y + xz + 2z$ ✅

### Example 14: $ax + ay + az - bx - by - bz$

- $(ax + ay + az) = a(x + y + z)$
- $(-bx - by - bz) = \mathbf{-b(x + y + z)}$ (factor out the minus sign too)
$= \mathbf{(x + y + z)(a - b)}$

Check: $(x + y + z)(a - b) = ax - bx + ay - by + az - bz$ ✅

---

## Part G: When a Bracket Can Be Factorised Further After Grouping

Sometimes a factor produced by grouping can still be **broken down further**. Remember Topic 1's rule to "factorise completely" — apply it here.

### Example 15: $x^3 - x^2 - x + 1$

- Group 1: $x^3 - x^2 = \mathbf{x^2(x - 1)}$
- Group 2: $-x + 1 = \mathbf{-1(x - 1)}$
$= x^2(x - 1) - 1(x - 1)$
$= (x - 1)(x^2 - 1)$

Do not stop here! **$x^2 - 1$** is a **difference of two squares** ($x^2 - 1^2$), which splits into $(x + 1)(x - 1)$. (We saw this formula in Topic 1, and we will explore it fully in Topic 4.)

$$= (x - 1)(x + 1)(x - 1) = \mathbf{(x - 1)^2(x + 1)}$$

Check: $(x - 1)^2(x + 1) = (x^2 - 2x + 1)(x + 1) = x^3 + x^2 - 2x^2 - 2x + x + 1 = x^3 - x^2 - x + 1$ ✅

### Example 16: $x(x + z) - y(y + z)$ (Grouping + Identity)

Expand the brackets first: $x^2 + xz - y^2 - yz$

Now regroup creatively — squares together, $z$-terms together:
$$= (x^2 - y^2) + (xz - yz)$$
$$= (x^2 - y^2) + z(x - y)$$

Use $x^2 - y^2 = (x + y)(x - y)$ (difference of squares, covered in detail in Topic 4):
$$= (x + y)(x - y) + z(x - y)$$
$$= (x - y)[(x + y) + z] = \mathbf{(x - y)(x + y + z)}$$

Check: $(x - y)(x + y + z) = x^2 + xy + xz - xy - y^2 - yz = x^2 + xz - y^2 - yz$ ✅

This is a classic combination: **grouping and an identity working hand in hand.**

---

## Part H: Slightly Trickier Examples

### Example 17: $a(a - 2b - c) + 2bc$

Expand the bracket first: $a^2 - 2ab - ac + 2bc$

- Group 1: $a^2 - 2ab = \mathbf{a(a - 2b)}$. Target: $(a - 2b)$.
- Group 2: $-ac + 2bc$. Factor out **$-c$**: $-c(a - 2b)$.
$= a(a - 2b) - c(a - 2b) = \mathbf{(a - 2b)(a - c)}$

Check: $(a - 2b)(a - c) = a^2 - ac - 2ab + 2bc$ ✅

### Example 18: $1 + a + ac + a^2c$

- Group 1: $1 + a = \mathbf{1(1 + a)}$. Target: $(1 + a)$.
- Group 2: $ac + a^2c = \mathbf{ac(1 + a)}$.
$= \mathbf{(1 + a)(1 + ac)}$

Check: $(1 + a)(1 + ac) = 1 + ac + a + a^2c$ ✅

### Example 19: $m^2 - mn + 4m - 4n$

- Group 1: $m^2 - mn = \mathbf{m(m - n)}$
- Group 2: $4m - 4n = \mathbf{4(m - n)}$
$= \mathbf{(m - n)(m + 4)}$

Check: $(m - n)(m + 4) = m^2 + 4m - mn - 4n$ ✅

---

## Steps for Grouping (At a Glance)

1. **First**, check if there is a common factor across the *entire* expression (Topic 2). If so, factor it out first.
2. Split the terms into **pairs** (for $6$ terms, use $3 + 3$ or $2 + 2 + 2$).
3. Take out the common factor from each group. **The first bracket is your target.**
4. Factor out a term (with the appropriate **sign**) from the next group to match that target bracket. Use **$1$ or $-1$** when needed.
5. Brackets do not match? **Rearrange the terms** and try a new pairing.
6. Pull out the common bracket.
7. Check whether any resulting factor can be **factorised further**.
8. **Check:** multiply the factors back together to recover the original expression.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Moving forward when brackets do not actually match.**
   In $a(x + y) + b(x - y)$, the brackets are **different** (one plus, one minus). You cannot factor them out. Grouping only succeeds when the brackets are **100% identical**.

2. **Mistake 2: Forgetting to change the sign inside when pulling out a negative factor.**
   $-ax + ay = -a(x \mathbf{-} y)$, not $-a(x + y)$. Check: $-a(x + y) = -ax - ay$, which is wrong.

3. **Mistake 3: Forgetting you can factor out $1$ or $-1$.**
   In $ab - a - b + 1$, the second group is $-b + 1$. Students often stall because no variable is shared. **Factor out $-1$**: $-1(b - 1)$.

4. **Mistake 4: Treating reversed brackets as unrelated.**
   $(y - x)$ and $(x - y)$ are exact opposites: $(y - x) = -(x - y)$. Spot this and pull out a minus sign.

5. **Mistake 5: Giving up after the first pairing fails.**
   If the given order does not form matching brackets, reorder the terms. The second or third pairing almost always works.

6. **Mistake 6: Stopping too early after grouping.**
   Stopping at $(x - 1)(x^2 - 1)$ is incomplete because $x^2 - 1$ splits further. Complete answer: $(x - 1)^2(x + 1)$.

7. **Mistake 7: Splitting $4$ terms into $3 + 1$ by default.**
   A $3 + 1$ split rarely works unless an identity is hiding inside the $3$ terms. Always try **$2 + 2$** first.

8. **Mistake 8: Skipping the check.**
   Sign slips happen easily in grouping. Multiply your final factors back together every time.

---

## Quick Recap

- **Grouping** = splitting terms into groups, factoring out a common factor from each group, and then pulling out the **common bracket**.
- It is simply **applying the common factor method twice** (once inside each group, once across groups).
- **Target bracket trick:** the bracket produced by Group 1 is your target for Group 2 — pull out a minus sign if necessary to match it.
- If no variable or number looks common in a group, try factoring out **$1$ or $-1$**.
- **$(y - x) = -(x - y)$** — learn to spot reversed brackets.
- If pairs fail, **rearrange the terms.** Multiple valid paths may exist, and all lead to the same answer.
- **$6$ terms** can be grouped as $3 + 3$ or $2 + 2 + 2$.
- After grouping, check if any factor **splits further** (like $x^2 - 1$).
- Always **check** by multiplying back.

---

## Practice Questions

1. Factorise by grouping:
   (a) $mx + my + nx + ny$
   (b) $a^2 + ab + 3a + 3b$
   (c) $pq + 2p - 3q - 6$

2. Rearrange the terms suitably and factorise:
   (a) $a^2 + bc + ab + ac$
   (b) $xy - 6 + 2x - 3y$

3. Factorise:
   (a) $xy - x - y + 1$
   (b) $3ax - 6ay - 8by + 4bx$

4. Factorise:
   (a) $x^3 + 2x^2 + 3x + 6$
   (b) $2y^3 - y^2 + 4y - 2$

5. Factorise:
   (a) $ax + ay + az + bx + by + bz$
   (b) $2ax + 2ay + 2az - 3bx - 3by - 3bz$

6. Factorise: $p(q - r) + s(r - q)$

7. Factorise:
   (a) $x(x - 2y - z) + 2yz$
   (b) $a^2 + a - ab - b$

8. Factorise completely: $y^3 + y^2 - y - 1$

### Answers

1. (a) $m(x + y) + n(x + y) = \mathbf{(x + y)(m + n)}$
   (b) $a(a + b) + 3(a + b) = \mathbf{(a + b)(a + 3)}$
   (c) $p(q + 2) - 3(q + 2) = \mathbf{(q + 2)(p - 3)}$
   Check (c): $(q + 2)(p - 3) = pq - 3q + 2p - 6$ ✅
2. (a) Rearrange: $a^2 + ab + ac + bc = a(a + b) + c(a + b) = \mathbf{(a + b)(a + c)}$
   (b) Rearrange: $xy + 2x - 3y - 6 = x(y + 2) - 3(y + 2) = \mathbf{(y + 2)(x - 3)}$
   Check (b): $(y + 2)(x - 3) = xy - 3y + 2x - 6$ ✅
3. (a) $x(y - 1) - 1(y - 1) = \mathbf{(y - 1)(x - 1)}$
   (b) Rearrange: $3ax + 4bx - 6ay - 8by = x(3a + 4b) - 2y(3a + 4b) = \mathbf{(3a + 4b)(x - 2y)}$
   Check (b): $(3a + 4b)(x - 2y) = 3ax - 6ay + 4bx - 8by$ ✅
4. (a) $x^2(x + 2) + 3(x + 2) = \mathbf{(x + 2)(x^2 + 3)}$
   (b) $y^2(2y - 1) + 2(2y - 1) = \mathbf{(2y - 1)(y^2 + 2)}$
5. (a) $a(x + y + z) + b(x + y + z) = \mathbf{(x + y + z)(a + b)}$
   (b) $2a(x + y + z) - 3b(x + y + z) = \mathbf{(x + y + z)(2a - 3b)}$
6. $(r - q) = -(q - r)$, so $p(q - r) - s(q - r) = \mathbf{(q - r)(p - s)}$
   Check: $(q - r)(p - s) = pq - qs - pr + rs$. Original: $pq - pr + sr - sq$ ✅
7. (a) Expand: $x^2 - 2xy - xz + 2yz = x(x - 2y) - z(x - 2y) = \mathbf{(x - 2y)(x - z)}$
   Check: $(x - 2y)(x - z) = x^2 - xz - 2xy + 2yz$ ✅
   (b) $a(a + 1) - b(a + 1) = \mathbf{(a + 1)(a - b)}$
8. $y^2(y + 1) - 1(y + 1) = (y + 1)(y^2 - 1)$. Now $y^2 - 1 = (y + 1)(y - 1)$.
   $= (y + 1)(y + 1)(y - 1) = \mathbf{(y + 1)^2(y - 1)}$
   Check: $(y^2 + 2y + 1)(y - 1) = y^3 - y^2 + 2y^2 - 2y + y - 1 = y^3 + y^2 - y - 1$ ✅

---

If a pairing does not click on the first try, do not panic. Just stick to the rule: **group terms that share factors, and aim for the same bracket in both groups.** If they do not match, reorder the terms. With a little practice, your eyes will start spotting the natural pairs almost instantly.

---

**What's next (Topic 4):** Twice in this topic we ran into expressions like $x^2 - 1$ and $x^2 - y^2$, which we split using the "difference of squares." In the next topic, we will master $a^2 - b^2 = (a + b)(a - b)$ completely — why it works, how to recognise hidden squares, and how to wield it on challenging problems.
