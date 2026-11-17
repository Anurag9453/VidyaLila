# Chapter: Number Systems (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [number-systems-part3.md](number-systems-part3.md).** (Topic 1 is in [number-systems.md](number-systems.md).)
> **Topics covered in this file:**
> 4. Operations on Real Numbers, $n$th Roots, and Surds

---

# Topic 4: Operations on Real Numbers, $n$th Roots, and Surds

In Topic 3, we explored a fascinating new family of numbers: **irrational numbers**—numbers whose decimal expansions neither terminate nor repeat, such as $\sqrt{2}$, $\sqrt{3}$, and $\pi$. We also saw that rational and irrational numbers together form the **real numbers**, and every point on the number line corresponds to a unique real number.

Now comes the natural next question: how do we **calculate** with these numbers? If you add a rational number and an irrational number, what kind of number do you get? How do you simplify an expression like $\sqrt{50}$? And how can you pinpoint a number like $\sqrt{5}$ or $\sqrt{9.3}$ on the number line? That is exactly what we will learn in this topic.

---

## Leo's Photo Frame

Leo was crafting a **square wooden photo frame** for his grandmother's portrait, with each side measuring exactly **$1\text{ foot}$**. To give the frame an artistic border, he stretched a **diagonal gold ribbon** from one corner to the opposite corner. Finally, to hang the frame on the wall, he tied a straight cord **$2\text{ feet}$** long across the top.

Leo wondered, "What is the total length of ribbon and cord I used?"

- The hanging cord is **$2\text{ feet}$**—a crisp, exact rational number.
- The diagonal ribbon is the diagonal of a $1\text{-foot}$ square, which (as we saw in Topic 3) is **$\sqrt{2}\text{ feet}$**. Its decimal expansion **never ends and never repeats**: $1.41421356\dots$

So the total length is **$2 + \sqrt{2}\text{ feet}$**.

Leo tried to measure the combined length with a tape measure. It came out a little more than $3.4$, a little more than $3.41$, a little more than $3.414\dots$ The tape measure could never give a "completely exact" terminating decimal.

His older sister Maya smiled and said, "If you add a never-ending decimal to an exact whole number, the total never ends either!"

That observation captures the first big idea of this topic. Let us examine systematically what happens when we add, subtract, multiply, and divide rational and irrational numbers.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Operation** | A mathematical action performed on numbers: addition, subtraction, multiplication, or division | $2 + \sqrt{3}$, $5 \times \sqrt{2}$ |
| **$n$th root** | A number that produces a given number $a$ when multiplied by itself $n$ times | $\sqrt[3]{8} = 2$, because $2 \times 2 \times 2 = 8$ |
| **Radical sign** | The root symbol: $\sqrt{\phantom{x}}$ | $\sqrt{9}$, $\sqrt[3]{27}$ |
| **Index** | The small number placed at the top-left of the radical sign indicating which root to take | In $\sqrt[3]{27}$, the index is $3$ |
| **Radicand** | The number or expression inside the radical sign | In $\sqrt{50}$, the radicand is $50$ |
| **Surd** | An irrational root of a positive rational number | $\sqrt{2}$, $\sqrt[3]{5}$, $\sqrt{50}$ |
| **Order of a surd** | The index of the surd | $\sqrt{2}$ has order $2$; $\sqrt[3]{5}$ has order $3$ |
| **Like surds** | Surds that have the same order and the same radicand after being fully simplified | $2\sqrt{3}$ and $5\sqrt{3}$ |

---

## Part A: Combining Rational and Irrational Numbers

### Rule 1: Rational + Irrational = Irrational

**Why?** Suppose $2 + \sqrt{3}$ were rational—say it equalled some rational number $r$. Rearranging gives $\sqrt{3} = r - 2$. Since the difference of two rational numbers is always rational, that would force $\sqrt{3}$ to be rational. But we already know $\sqrt{3}$ is irrational! Therefore, $2 + \sqrt{3}$ cannot be rational—it must be **irrational**.

By the exact same reasoning:
- **Rational $-$ Irrational = Irrational** (e.g., $5 - \sqrt{2}$)
- **Irrational $-$ Rational = Irrational** (e.g., $\sqrt{7} - 1$)

### Rule 2: Non-Zero Rational × Irrational = Irrational

Similarly, multiplying or dividing an irrational number by any **non-zero** rational number always produces an irrational number. That is why $5\sqrt{2}$, $\frac{1}{3}\sqrt{7}$, and $-4\pi$ are all irrational.

The same holds for division: **Irrational $\div$ Non-zero Rational = Irrational**, such as $\frac{\sqrt{3}}{2}$.

**Why do we specify "non-zero"?** Because $0 \times \sqrt{2} = 0$, and $0$ is rational! Multiplying by zero turns everything into zero, so zero is the one exception we must exclude.

### Rule 3: Irrational and Irrational: Anything Can Happen

When you combine two irrational numbers, there is no single fixed rule—the result can be **either rational or irrational**. Look at these examples:

| Operation | Result | Rational or Irrational? |
|---|---|---|
| $\sqrt{2} + (-\sqrt{2})$ | $0$ | Rational |
| $(2 + \sqrt{3}) + (2 - \sqrt{3})$ | $4$ | Rational |
| $\sqrt{3} + \sqrt{3}$ | $2\sqrt{3}$ | Irrational |
| $\sqrt{2} \times \sqrt{2}$ | $2$ | Rational |
| $\sqrt{2} \times \sqrt{8}$ | $\sqrt{16} = 4$ | Rational |
| $\sqrt{2} \times \sqrt{3}$ | $\sqrt{6}$ | Irrational |
| $\sqrt{12} \div \sqrt{3}$ | $\sqrt{4} = 2$ | Rational |
| $\pi - \pi$ | $0$ | Rational |

So whenever two irrational numbers interact, **always simplify first, then decide.**

### Solved Examples: Rational or Irrational?

**Example 1:** $3 + \sqrt{5}$
Rational ($3$) $+$ Irrational ($\sqrt{5}$) = **Irrational**.

**Example 2:** $(4 + \sqrt{7}) - \sqrt{7}$
Simplify first: $4 + \sqrt{7} - \sqrt{7} = 4$. This is **Rational**.
*(Calling it "irrational" just because you see a $\sqrt{7}$ without simplifying first is a very common trap.)*

**Example 3:** $6\sqrt{2} \div 3\sqrt{2}$
$\dfrac{6\sqrt{2}}{3\sqrt{2}} = \dfrac{6}{3} \times \dfrac{\sqrt{2}}{\sqrt{2}} = 2 \times 1 = 2$. **Rational.**

**Example 4:** $2\pi$
Non-zero rational ($2$) $\times$ Irrational ($\pi$) = **Irrational**.

**Example 5:** $\sqrt{5} \times \sqrt{20}$
$= \sqrt{5 \times 20} = \sqrt{100} = 10$. **Rational.**

**Example 6:** $\dfrac{1}{\sqrt{2}}$
This is $1 \div \sqrt{2}$. If $\frac{1}{\sqrt{2}}$ were rational, then its reciprocal $\sqrt{2}$ would also have to be rational. Since $\sqrt{2}$ is irrational, $\frac{1}{\sqrt{2}}$ is also **Irrational**.

---

## Part B: Locating Any $\sqrt{x}$ on the Number Line

In Topic 3, we located $\sqrt{2}$ and $\sqrt{3}$ on the number line using right triangles and Pythagoras' theorem, and even built a square root spiral. However, for numbers like $\sqrt{9.3}$ or $\sqrt{5.7}$, chaining triangles one after another would be far too tedious. Fortunately, there is an elegant geometric shortcut used in classical architectural drafting and construction: **the semicircle method**.

### Steps (To Locate $\sqrt{x}$, where $x > 0$)

1. On a straight line, mark a point $A$ and measure a segment $AB$ of length **$x$ units**. So $AB = x$.
2. Extend the line past $B$ by **$1$ unit** to point $C$. So $BC = 1$, and the total length $AC = x + 1$.
3. Find the **midpoint $O$** of $AC$. With $O$ as the centre and $OA$ as the radius, draw a **semicircle** from $A$ to $C$.
4. At point $B$, draw a line **perpendicular** to $AC$. Mark the point where it meets the semicircle as **$D$**.
5. Then the length **$BD = \sqrt{x}$**!
6. To place this on a number line: treat $B$ as **$0$** and the ray $BC$ as the positive number line. With $B$ as the centre and radius $BD$, draw an arc that cuts the number line at **$E$**. **Point $E$ represents $\sqrt{x}$.**

```text
           . . . . .
        .             D
      .               | .
     .                |  .
    A----------O------B---C
    |<------ x ------>|<1>|
                   (B = 0)
```

*(Sketch is for illustration only and is not drawn to scale.)*

### Why Does This Method Work? (A Quick Proof)

This construction relies on Pythagoras' theorem from earlier grades: in any right-angled triangle, $(\text{hypotenuse})^2 = (\text{side}_1)^2 + (\text{side}_2)^2$.

- Since $O$ is the midpoint of diameter $AC = x + 1$, the radius is $OD = OA = \dfrac{x + 1}{2}$.
- The distance from $O$ to $B$ is $OB = AB - AO = x - \dfrac{x + 1}{2} = \dfrac{2x - x - 1}{2} = \dfrac{x - 1}{2}$.
- In right-angled triangle $\triangle OBD$ (right-angled at $B$):

$$BD^2 = OD^2 - OB^2 = \left(\frac{x + 1}{2}\right)^2 - \left(\frac{x - 1}{2}\right)^2$$

$$= \frac{(x + 1)^2 - (x - 1)^2}{4} = \frac{(x^2 + 2x + 1) - (x^2 - 2x + 1)}{4} = \frac{4x}{4} = x$$

Therefore, $BD = \sqrt{x}$. No magic—just clean algebra and geometry!

### Example 1: Locate $\sqrt{5}$ on the Number Line

- Draw $AB = 5$ and $BC = 1$, so $AC = 6$.
- Midpoint $O$ gives radius $OA = OD = \frac{6}{2} = 3$.
- $OB = 5 - 3 = 2$.
- $BD^2 = 3^2 - 2^2 = 9 - 4 = 5$, so **$BD = \sqrt{5}$** ✅
- Treating $B$ as $0$, an arc of radius $BD$ marks $\sqrt{5}$ on the number line (at approximately $2.236$).

### Example 2: Locate $\sqrt{9.3}$ on the Number Line

- Draw $AB = 9.3$ and $BC = 1$, so $AC = 10.3$.
- Radius $= \frac{10.3}{2} = 5.15$.
- $OB = 9.3 - 5.15 = 4.15$.
- $BD^2 = 5.15^2 - 4.15^2 = (5.15 + 4.15)(5.15 - 4.15) = 9.3 \times 1 = 9.3$ ✅
- So $BD = \sqrt{9.3}$ (approximately $3.05$, since $3.05^2 = 9.3025$).

Notice how effortlessly this method constructs the square root of *any* positive real number—even messy decimals. This reinforces the key takeaway from Topic 3: **every real number has an exact position on the number line.**

---

## Part C: The $n$th Root

### Recalling Square Roots and Cube Roots

- $\sqrt{9} = 3$, because $3 \times 3 = 9$ ($3$ multiplied by itself **$2$ times**)
- $\sqrt[3]{8} = 2$, because $2 \times 2 \times 2 = 8$ ($2$ multiplied by itself **$3$ times**)

Now let us extend this idea to any positive integer $n$.

### Definition

Let $a$ be a positive real number and $n$ be a positive integer. If

$$b^n = a \quad (b > 0), \quad \text{then} \quad b = \sqrt[n]{a}$$

In words, **the $n$th root of $a$ is the positive number that gives $a$ when multiplied by itself $n$ times.**

### Three Key Names to Remember

```text
   index
     ↓
     ⁴√81     ← read as: "the fourth root of 81"
      ↑ ↑
radical sign  radicand
```

- **Radical sign:** the $\sqrt{\phantom{x}}$ symbol
- **Index:** the small number at the upper left (here, $4$). For a square root, the index is $2$, though by convention we omit writing the $2$.
- **Radicand:** the number inside the radical sign (here, $81$)

### Examples

| $n$th root | Why? | Value |
|---|---|---|
| $\sqrt[3]{8}$ | $2 \times 2 \times 2 = 8$ | **$2$** |
| $\sqrt[3]{27}$ | $3 \times 3 \times 3 = 27$ | **$3$** |
| $\sqrt[4]{81}$ | $3 \times 3 \times 3 \times 3 = 81$ | **$3$** |
| $\sqrt[4]{16}$ | $2 \times 2 \times 2 \times 2 = 16$ | **$2$** |
| $\sqrt[5]{32}$ | $2^5 = 32$ | **$2$** |
| $\sqrt[6]{64}$ | $2^6 = 64$ | **$2$** |

### Can a Negative Number Have a Root? (A Brief Glimpse)

- **Odd roots** ($3$rd, $5$th, etc.) of negative numbers do exist as real numbers: $\sqrt[3]{-8} = -2$, because $(-2)^3 = -8$.
- **Even roots** ($2$nd, $4$th, etc.) of negative numbers **are not real numbers**. For instance, $\sqrt{-4}$ would require a real number whose square is $-4$, yet squaring any real number never gives a negative result. You will study such numbers (called *complex numbers*) in higher classes.

Throughout this chapter, we focus only on roots of **positive** numbers.

---

## Part D: Surds

### What Is a Surd?

A **surd** is an **irrational** root of a positive rational number.

| Number | Is it a surd? | Why? |
|---|---|---|
| $\sqrt{2}$ | Yes | $2$ is rational, and $\sqrt{2}$ is irrational |
| $\sqrt[3]{5}$ | Yes | $5$ is rational, and $\sqrt[3]{5}$ is irrational |
| $\sqrt{50}$ | Yes | It is irrational (we will simplify it to $5\sqrt{2}$ next) |
| $\sqrt{9}$ | **No** | $\sqrt{9} = 3$, which is rational |
| $\sqrt[3]{27}$ | **No** | $\sqrt[3]{27} = 3$, which is rational |
| $\sqrt{\pi}$ | **No** | $\pi$ itself is not rational, so it does not fit the definition of a surd |

The **order of a surd** is simply its index:
- $\sqrt{2}$ has order **$2$** (a quadratic surd)
- $\sqrt[3]{5}$ has order **$3$** (a cubic surd)
- $\sqrt[4]{7}$ has order **$4$**

### Simplifying a Surd

The strategy is simple: look inside the radicand for the **largest perfect square** factor (or **perfect cube** factor for a cube root), and pull it outside the radical. This uses Identity 1 from Part E: $\sqrt{ab} = \sqrt{a} \times \sqrt{b}$.

**Example 1:** $\sqrt{50}$
$50 = 25 \times 2$, and $25 = 5^2$ is a perfect square.
$$\sqrt{50} = \sqrt{25} \times \sqrt{2} = \mathbf{5\sqrt{2}}$$
Check: $(5\sqrt{2})^2 = 25 \times 2 = 50$ ✅

**Example 2:** $\sqrt{72}$
$72 = 36 \times 2$ ($36$ is the largest perfect square factor).
$$\sqrt{72} = \sqrt{36} \times \sqrt{2} = \mathbf{6\sqrt{2}}$$
Check: $(6\sqrt{2})^2 = 36 \times 2 = 72$ ✅

**Example 3:** $\sqrt[3]{54}$
$54 = 27 \times 2$, and $27 = 3^3$ is a perfect cube.
$$\sqrt[3]{54} = \sqrt[3]{27} \times \sqrt[3]{2} = \mathbf{3\sqrt[3]{2}}$$
Check: $(3\sqrt[3]{2})^3 = 27 \times 2 = 54$ ✅

**Example 4:** $\sqrt{48}$
$48 = 16 \times 3$.
$$\sqrt{48} = \sqrt{16} \times \sqrt{3} = \mathbf{4\sqrt{3}}$$

**Tip:** Always extract the **largest** perfect square factor. If you write $\sqrt{72} = \sqrt{4} \times \sqrt{18} = 2\sqrt{18}$, do not stop there—you can simplify $\sqrt{18}$ further: $2\sqrt{18} = 2 \times 3\sqrt{2} = 6\sqrt{2}$.

### Like and Unlike Surds

Remember "like terms" from algebra? Just as $3x + 5x = 8x$ while $3x + 5y$ cannot be combined, surds follow the exact same rule.

- **Like surds:** surds with the same order and the same radicand after simplification, such as $2\sqrt{3}$ and $5\sqrt{3}$.
- **Unlike surds:** surds with different radicands or different orders, such as $\sqrt{2}$ and $\sqrt{3}$.

**Like surds can be added and subtracted:**
- $2\sqrt{3} + 5\sqrt{3} = \mathbf{7\sqrt{3}}$
- $9\sqrt{5} - 4\sqrt{5} = \mathbf{5\sqrt{5}}$

**Unlike surds cannot be combined:**
- $\sqrt{2} + \sqrt{3}$ stays as $\sqrt{2} + \sqrt{3}$. It is **not** $\sqrt{5}$.

**Example 5:** $\sqrt{12} + \sqrt{27}$
Simplify first: $\sqrt{12} = 2\sqrt{3}$ and $\sqrt{27} = 3\sqrt{3}$.
Now both are like surds: $2\sqrt{3} + 3\sqrt{3} = \mathbf{5\sqrt{3}}$.

**Example 6:** $\sqrt{50} - \sqrt{18}$
$\sqrt{50} = 5\sqrt{2}$ and $\sqrt{18} = 3\sqrt{2}$.
$5\sqrt{2} - 3\sqrt{2} = \mathbf{2\sqrt{2}}$.

**Example 7:** $\sqrt{8} + \sqrt{18} + \sqrt{32}$
$= 2\sqrt{2} + 3\sqrt{2} + 4\sqrt{2} = \mathbf{9\sqrt{2}}$.

Notice how surds that appear unlike at first glance often turn out to be like surds once simplified. Always **simplify first, then add or subtract.**

### Comparing Surds

Which is greater: $3\sqrt{2}$ or $2\sqrt{3}$? It is hard to tell just by looking. The trick is simple: **square both numbers**. For positive numbers, the one with the larger square is the larger number.

**Example 8:** Compare $3\sqrt{2}$ and $2\sqrt{3}$
- $(3\sqrt{2})^2 = 9 \times 2 = 18$
- $(2\sqrt{3})^2 = 4 \times 3 = 12$
- Since $18 > 12$, **$3\sqrt{2} > 2\sqrt{3}$**.

**Example 9:** Compare $2\sqrt{5}$ and $3\sqrt{2}$
- $(2\sqrt{5})^2 = 4 \times 5 = 20$
- $(3\sqrt{2})^2 = 9 \times 2 = 18$
- Since $20 > 18$, **$2\sqrt{5} > 3\sqrt{2}$**.

*(Bonus trick: If two surds have different orders, such as $\sqrt{5}$ and $\sqrt[3]{11}$, raise both to a power that clears both roots—here, the $6$th power: $(\sqrt{5})^6 = 5^3 = 125$ and $(\sqrt[3]{11})^6 = 11^2 = 121$, so $\sqrt{5} > \sqrt[3]{11}$.)*

---

## Part E: Identities Involving Square Roots

The identities below will be essential throughout algebra—especially in Topic 5. Here, $a, b, c,$ and $d$ are all positive real numbers.

| # | Identity | Example |
|---|---|---|
| 1 | $\sqrt{ab} = \sqrt{a}\sqrt{b}$ | $\sqrt{36} = \sqrt{4} \times \sqrt{9} = 2 \times 3 = 6$ |
| 2 | $\sqrt{\dfrac{a}{b}} = \dfrac{\sqrt{a}}{\sqrt{b}}$ | $\sqrt{\dfrac{9}{16}} = \dfrac{3}{4}$ |
| 3 | $(\sqrt{a} + \sqrt{b})(\sqrt{a} - \sqrt{b}) = a - b$ | $(\sqrt{5} + \sqrt{2})(\sqrt{5} - \sqrt{2}) = 3$ |
| 4 | $(a + \sqrt{b})(a - \sqrt{b}) = a^2 - b$ | $(5 + \sqrt{7})(5 - \sqrt{7}) = 18$ |
| 5 | $(\sqrt{a} + \sqrt{b})^2 = a + 2\sqrt{ab} + b$ | $(\sqrt{3} + \sqrt{2})^2 = 5 + 2\sqrt{6}$ |
| 6 | $(\sqrt{a} + \sqrt{b})(\sqrt{c} + \sqrt{d}) = \sqrt{ac} + \sqrt{ad} + \sqrt{bc} + \sqrt{bd}$ | See Example 1 below |

Look closely at Identities 3 and 4: **the square roots vanish completely!** This is simply the algebraic difference-of-squares identity $(x + y)(x - y) = x^2 - y^2$ applied to roots. In Topic 5, this property will work wonders.

### Solved Examples

**Example 1:** $(3 + \sqrt{3})(2 + \sqrt{2})$
Multiply each term in the first bracket by each term in the second:
$= 3 \times 2 + 3 \times \sqrt{2} + \sqrt{3} \times 2 + \sqrt{3} \times \sqrt{2}$
$= \mathbf{6 + 3\sqrt{2} + 2\sqrt{3} + \sqrt{6}}$

**Example 2:** $(\sqrt{5} + \sqrt{2})^2$
Using Identity 5:
$= 5 + 2\sqrt{5 \times 2} + 2$
$= \mathbf{7 + 2\sqrt{10}}$
Check: $(\sqrt{5} + \sqrt{2})(\sqrt{5} + \sqrt{2}) = 5 + \sqrt{10} + \sqrt{10} + 2 = 7 + 2\sqrt{10}$ ✅

**Example 3:** $(\sqrt{11} - \sqrt{7})(\sqrt{11} + \sqrt{7})$
Using Identity 3:
$= 11 - 7 = \mathbf{4}$
*(Two irrational numbers multiplied together, giving a clean rational number!)*

**Example 4:** $(5 + \sqrt{7})(5 - \sqrt{7})$
Using Identity 4:
$= 5^2 - 7 = 25 - 7 = \mathbf{18}$

**Example 5:** $(3 - \sqrt{5})^2$
$= 3^2 - 2 \times 3 \times \sqrt{5} + (\sqrt{5})^2$
$= 9 - 6\sqrt{5} + 5$
$= \mathbf{14 - 6\sqrt{5}}$

**Example 6:** $(2\sqrt{3} + \sqrt{5})(2\sqrt{3} - \sqrt{5})$
Applying the difference-of-squares pattern:
$= (2\sqrt{3})^2 - (\sqrt{5})^2$
$= 12 - 5 = \mathbf{7}$

**Example 7:** $(\sqrt{2} + \sqrt{3})(\sqrt{5} + \sqrt{7})$
Using Identity 6:
$= \mathbf{\sqrt{10} + \sqrt{14} + \sqrt{15} + \sqrt{21}}$
*(There are no like surds here, so the expression cannot be simplified further.)*

---

## Common Pitfalls to Avoid

1. **Mistake 1: Assuming $\sqrt{a + b} = \sqrt{a} + \sqrt{b}$.**
   $\sqrt{9 + 16} = \sqrt{25} = \mathbf{5}$, whereas $\sqrt{9} + \sqrt{16} = 3 + 4 = \mathbf{7}$. Roots distribute over multiplication and division, **never over addition or subtraction.**

2. **Mistake 2: Adding unlike surds.**
   $\sqrt{2} + \sqrt{3} \neq \sqrt{5}$. Check with decimals: $\sqrt{2} + \sqrt{3} \approx 1.414 + 1.732 = 3.146$, while $\sqrt{5} \approx 2.236$.

3. **Mistake 3: Calling surds "unlike" before simplifying.**
   $\sqrt{12} + \sqrt{27}$ looks like a sum of unlike surds at first, but simplifying turns it into $2\sqrt{3} + 3\sqrt{3} = 5\sqrt{3}$.

4. **Mistake 4: Assuming operations between two irrational numbers always yield an irrational result.**
   $\sqrt{2} \times \sqrt{8} = \sqrt{16} = 4$, which is rational. Always compute first before classifying.

5. **Mistake 5: Writing $(\sqrt{a} + \sqrt{b})^2 = a + b$.**
   This drops the middle term **$2\sqrt{ab}$**. $(\sqrt{3} + \sqrt{2})^2 = 5 + 2\sqrt{6}$, not $5$.

6. **Mistake 6: Treating every radical as a surd.**
   $\sqrt{9} = 3$ is rational, so it is not a surd. A root is a surd only when it is irrational.

7. **Mistake 7: Stopping before factoring out the largest perfect square.**
   Do not stop at $\sqrt{72} = 2\sqrt{18}$; continue simplifying to $2\sqrt{18} = 2 \times 3\sqrt{2} = 6\sqrt{2}$.

8. **Mistake 8: Forgetting to set $BC = 1$ in the semicircle construction.**
   To construct $\sqrt{x}$, you must mark $AB = x$ and **$BC = 1$**. If $BC$ has any other length, $BD$ will not equal $\sqrt{x}$.

---

## Quick Recap

- **Rational $\pm$ Irrational = Irrational.** **Non-zero Rational $\times$ or $\div$ Irrational = Irrational.**
- **Irrational and Irrational:** the result can be rational or irrational—simplify first before deciding.
- **Locating $\sqrt{x}$ on the number line:** mark $AB = x$ and $BC = 1$, draw a semicircle on diameter $AC$, and erect a perpendicular at $B$ to meet the semicircle at $D$; then $BD = \sqrt{x}$.
- **$n$th root:** if $b^n = a$ (with $a, b > 0$), then $b = \sqrt[n]{a}$. Know the **index**, **radical sign**, and **radicand**.
- **Surd:** an irrational root of a positive rational number; its **order** equals its index.
- **Simplifying surds:** pull out the largest perfect square (or cube) factor, e.g., $\sqrt{50} = 5\sqrt{2}$.
- **Like surds** can be combined ($2\sqrt{3} + 5\sqrt{3} = 7\sqrt{3}$); unlike surds cannot.
- **Comparing surds:** square both positive surds—the larger square belongs to the larger surd.
- **Key identities:** $\sqrt{ab} = \sqrt{a}\sqrt{b}$, $(\sqrt{a} + \sqrt{b})(\sqrt{a} - \sqrt{b}) = a - b$, $(a + \sqrt{b})(a - \sqrt{b}) = a^2 - b$, and $(\sqrt{a} + \sqrt{b})^2 = a + 2\sqrt{ab} + b$.
- Always remember: $\sqrt{a + b} \neq \sqrt{a} + \sqrt{b}$.

---

## Practice Questions

1. State whether each number is rational or irrational. Give a reason.
   (a) $2 - \sqrt{5}$
   (b) $(3 + \sqrt{23}) - \sqrt{23}$
   (c) $\dfrac{2\sqrt{7}}{7\sqrt{7}}$
   (d) $\dfrac{1}{\sqrt{2}}$
   (e) $2\pi$
   (f) $\sqrt{2} \times \sqrt{18}$

2. Give an example of two irrational numbers whose:
   (a) sum is rational
   (b) product is rational
   (c) product is irrational

3. Simplify:
   (a) $\sqrt{98}$
   (b) $\sqrt[3]{250}$
   (c) $\sqrt{45} + \sqrt{20}$
   (d) $2\sqrt{12} - \sqrt{27}$

4. Which is greater?
   (a) $2\sqrt{7}$ or $3\sqrt{3}$
   (b) $4\sqrt{2}$ or $3\sqrt{3}$

5. Simplify:
   (a) $(\sqrt{7} + \sqrt{2})(\sqrt{7} - \sqrt{2})$
   (b) $(2 + \sqrt{3})^2$
   (c) $(\sqrt{5} + \sqrt{3})(\sqrt{2} + 1)$
   (d) $(3 + \sqrt{2})(3 - \sqrt{2})$

6. Find the value of:
   (a) $\sqrt[3]{125}$
   (b) $\sqrt[4]{16}$
   (c) $\sqrt[6]{64}$

7. Describe the steps to locate $\sqrt{6.5}$ on the number line, and prove why the length you obtain is $\sqrt{6.5}$.

8. State whether each statement is true or false. Give a reason.
   (a) $\sqrt{16 + 9} = \sqrt{16} + \sqrt{9}$
   (b) Every surd is an irrational number.
   (c) $\sqrt{9}$ is a surd.
   (d) The product of two irrational numbers is always irrational.

### Answers

1. (a) **Irrational.** Rational ($2$) $-$ Irrational ($\sqrt{5}$) = Irrational.
   (b) **Rational.** Simplifying gives $3 + \sqrt{23} - \sqrt{23} = 3$.
   (c) **Rational.** $\sqrt{7}$ cancels out, leaving $\dfrac{2}{7}$.
   (d) **Irrational.** If $\dfrac{1}{\sqrt{2}}$ were rational, its reciprocal $\sqrt{2}$ would also be rational, which is false.
   (e) **Irrational.** Non-zero rational ($2$) $\times$ Irrational ($\pi$) = Irrational.
   (f) **Rational.** $\sqrt{2} \times \sqrt{18} = \sqrt{36} = 6$.

2. Any valid pair works. For example:
   (a) $\sqrt{3}$ and $-\sqrt{3}$ (sum is $0$), or $2 + \sqrt{3}$ and $2 - \sqrt{3}$ (sum is $4$).
   (b) $\sqrt{2}$ and $\sqrt{8}$ (product is $\sqrt{16} = 4$).
   (c) $\sqrt{2}$ and $\sqrt{3}$ (product is $\sqrt{6}$).

3. (a) $\sqrt{98} = \sqrt{49 \times 2} = \mathbf{7\sqrt{2}}$
   (b) $\sqrt[3]{250} = \sqrt[3]{125 \times 2} = \mathbf{5\sqrt[3]{2}}$
   (c) $\sqrt{45} = 3\sqrt{5}$ and $\sqrt{20} = 2\sqrt{5}$, so $3\sqrt{5} + 2\sqrt{5} = \mathbf{5\sqrt{5}}$
   (d) $2\sqrt{12} = 2 \times 2\sqrt{3} = 4\sqrt{3}$ and $\sqrt{27} = 3\sqrt{3}$, so $4\sqrt{3} - 3\sqrt{3} = \mathbf{\sqrt{3}}$

4. (a) $(2\sqrt{7})^2 = 4 \times 7 = 28$ and $(3\sqrt{3})^2 = 9 \times 3 = 27$. Since $28 > 27$, **$2\sqrt{7}$ is greater.**
   (b) $(4\sqrt{2})^2 = 16 \times 2 = 32$ and $(3\sqrt{3})^2 = 9 \times 3 = 27$. Since $32 > 27$, **$4\sqrt{2}$ is greater.**

5. (a) $7 - 2 = \mathbf{5}$
   (b) $2^2 + 2(2)(\sqrt{3}) + (\sqrt{3})^2 = 4 + 4\sqrt{3} + 3 = \mathbf{7 + 4\sqrt{3}}$
   Check: $(2 + \sqrt{3})(2 + \sqrt{3}) = 4 + 2\sqrt{3} + 2\sqrt{3} + 3 = 7 + 4\sqrt{3}$ ✅
   (c) $\sqrt{5}\cdot\sqrt{2} + \sqrt{5}\cdot 1 + \sqrt{3}\cdot\sqrt{2} + \sqrt{3}\cdot 1 = \mathbf{\sqrt{10} + \sqrt{5} + \sqrt{6} + \sqrt{3}}$
   (d) $3^2 - (\sqrt{2})^2 = 9 - 2 = \mathbf{7}$

6. (a) $5 \times 5 \times 5 = 125$, so $\sqrt[3]{125} = \mathbf{5}$
   (b) $2^4 = 16$, so $\sqrt[4]{16} = \mathbf{2}$
   (c) $2^6 = 64$, so $\sqrt[6]{64} = \mathbf{2}$

7. Steps:
   - On a line, mark $AB = 6.5$ units, then extend it by $BC = 1$ unit so $AC = 7.5$.
   - Find the midpoint $O$ of $AC$ and draw a semicircle with radius $\frac{7.5}{2} = 3.75$.
   - Draw a perpendicular to $AC$ at $B$, meeting the semicircle at $D$.
   - Here $OB = 6.5 - 3.75 = 2.75$, and radius $OD = 3.75$.
   - By Pythagoras' theorem, $BD^2 = OD^2 - OB^2 = 3.75^2 - 2.75^2 = (3.75 + 2.75)(3.75 - 2.75) = 6.5 \times 1 = 6.5$, so **$BD = \sqrt{6.5}$** ✅
   - Treating $B$ as $0$ on the number line, an arc centred at $B$ with radius $BD$ cuts the line at $\sqrt{6.5}$.

8. (a) **False** ❌. $\sqrt{16 + 9} = \sqrt{25} = 5$, whereas $\sqrt{16} + \sqrt{9} = 4 + 3 = 7$.
   (b) **True** ✅. By definition, a surd is an irrational root of a positive rational number.
   (c) **False** ❌. $\sqrt{9} = 3$, which is rational, so it is not a surd.
   (d) **False** ❌. For example, $\sqrt{2} \times \sqrt{2} = 2$, which is rational.

---

Seeing so many new terms at once—*surd, index, radicand*—can feel overwhelming at first, but everything rests on one simple principle: **treat roots just like ordinary numbers, while respecting the rules for combining them.** With a little practice, working with surds will feel completely natural.

**In the next topic:** What happens when a root sits in the **denominator** of a fraction, like $\frac{1}{\sqrt{2}}$ or $\frac{1}{\sqrt{5} + \sqrt{2}}$? Dividing by an endless decimal is messy. In Topic 5, we will use Identity 3 from Part E—$(\sqrt{a} + \sqrt{b})(\sqrt{a} - \sqrt{b}) = a - b$—to clear roots out of the denominator. This technique is called **Rationalisation**.
