# Chapter: Number Systems (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [number-systems.md](number-systems.md).**
> **Topics covered in this file:**
> 2. Rational Numbers and Decimal Expansions: Terminating and Recurring

---

# Topic 2: Rational Numbers and Decimal Expansions: Terminating and Recurring

In Topic 1, we met the whole family of numbers: natural numbers, whole numbers, integers, and rational numbers. We learned that a rational number is any number that can be written in the form $p/q$ (with $p, q \in \mathbb{Z}$ and $q \neq 0$), how to plot rational numbers on the number line, and that **infinitely many** rational numbers lie between any two rational numbers.

Now comes a fresh question. We use **decimals** every day in prices, distances, and temperatures: \$12.50 at a bakery, $1.75\text{ metres}$, $36.6^\circ\text{C}$. Can *every* rational number be written as a decimal? And by looking at a decimal, how can we tell whether it is rational? Let us find out.

---

## The Story of the Quiz Prize

**Sophia**, **Leo**, and **Liam** won first place in their school mathematics quiz. Their prize was a **\$10** gift card to Mr. Thorne's bakery, and the three friends decided to split it equally.

Leo immediately pulled out his phone calculator and typed **$10 \div 3$**. The screen displayed:

**3.333333333**

Liam squinted at the screen. "When do the 3s stop?" Leo shrugged. "The screen ran out of space, so it stopped displaying them. Maybe they keep going forever."

Sophia pulled out a notebook and worked out the long division by hand:

- $10 \div 3 = 3$, remainder **$1$**
- Bring down a $0$: $10 \div 3 = 3$, remainder **$1$**
- Bring down a $0$: $10 \div 3 = 3$, remainder **$1$**
- ...

"Look at that!" Sophia exclaimed. "Every single step leaves the **exact same remainder, $1$**. That means the division will never finish, and the digit $3$ will appear forever. This decimal **goes on infinitely, yet repeats the exact same pattern**."

Afterward, Liam calculated how much each person owed for a **\$7** box of pastries shared among $8$ friends: $7 \div 8 = \mathbf{0.875}$. That decimal **ended cleanly** after just three decimal places.

So some fractions turn into decimals that stop, while others produce decimals that repeat in a pattern forever. Why does that happen, and how can we predict which kind a fraction will produce? That is the heart of this topic.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Terminating decimal** | A decimal expansion that ends after a finite number of digits | $7/8 = 0.875$ |
| **Non-terminating recurring decimal** | A decimal that **never ends**, yet a block of digits **repeats endlessly** | $1/3 = 0.3333\dots$ |
| **Repeating block (period)** | The group of digits that repeats over and over | $142857$ in $1/7$ |
| **Bar notation** | Writing a horizontal **bar** above the repeating digits as shorthand | $0.3333\dots = 0.\bar{3}$ |
| **Pure recurring decimal** | A recurring decimal where repetition starts **immediately after** the decimal point | $0.\overline{47} = 0.474747\dots$ |
| **Mixed recurring decimal** | A recurring decimal with one or more **non-repeating** digits right after the decimal point before repetition begins | $0.4\bar{7} = 0.47777\dots$ |
| **Lowest form** | A fraction whose numerator and denominator share no common factor other than $1$ | Lowest form of $9/15$ is $3/5$ |
| **Successive magnification** | Repeatedly "zooming in" on a tiny interval of the number line to locate a decimal | Locating $3.765$ |

---

## Part A: Converting $p/q$ into a Decimal (By Long Division)

Any fraction $p/q$ simply means **$p \div q$**. Carry out long division, and only two outcomes are possible.

### Case 1: The Remainder Becomes 0 (Terminating Decimal)

**Example 1:** $7/8$

```
        0.875
      -------
  8 ) 7.000
      6 4
      ---
        60
        56
        --
         40
         40
         --
          0      <- remainder 0, division stops
```

- $70 \div 8 = 8$, remainder $6$
- $60 \div 8 = 7$, remainder $4$
- $40 \div 8 = 5$, remainder **$0$**

**$7/8 = 0.875$** (terminating)

Check: $0.875 \times 8 = 7$ ✅

**Example 2:** $13/20$

- $130 \div 20 = 6$, remainder $10$
- $100 \div 20 = 5$, remainder **$0$**

**$13/20 = 0.65$** (terminating)

### Case 2: The Remainder Never Reaches 0, But Repeats (Recurring Decimal)

**Example 3:** $1/3$

- $10 \div 3 = 3$, remainder $1$
- $10 \div 3 = 3$, remainder $1$ (the same remainder returns!)

**$1/3 = 0.3333\dots$** (non-terminating recurring)

**Example 4:** $3/11$

- $30 \div 11 = 2$, remainder $8$
- $80 \div 11 = 7$, remainder $3$
- $30 \div 11 = 2$, remainder $8$ (the remainder $3$ returned, so every step after this repeats)

**$3/11 = 0.272727\dots$** Here the two-digit block **$27$** repeats forever.

**Example 5:** $1/7$ (the most fascinating one)

| Step | Division | Digit | Remainder |
|---|---|---|---|
| $1$ | $10 \div 7$ | $1$ | $3$ |
| $2$ | $30 \div 7$ | $4$ | $2$ |
| $3$ | $20 \div 7$ | $2$ | $6$ |
| $4$ | $60 \div 7$ | $8$ | $4$ |
| $5$ | $40 \div 7$ | $5$ | $5$ |
| $6$ | $50 \div 7$ | $7$ | **$1$** |
| $7$ | $10 \div 7$ | $1$ | $3$ (back to Step 1!) |

**$1/7 = 0.142857\ 142857\ 142857\dots$** Here a **$6$-digit block ($142857$)** repeats endlessly.

Check: $7 \times 0.142857 = 0.999999$, which is extraordinarily close to $1$. When the block continues forever, it equals $1$ exactly (you will see why in Part E) ✅

### Bar Notation: A Shorthand Way to Write Repeating Decimals

Writing "$\dots$" over and over gets tedious. Instead, we draw a **horizontal bar (vinculum) above the digits that repeat**.

| Expanded form | Bar notation | Repeating block |
|---|---|---|
| $0.3333\dots$ | $0.\bar{3}$ | $3$ |
| $0.272727\dots$ | $0.\overline{27}$ | $27$ |
| $0.142857142857\dots$ | $0.\overline{142857}$ | $142857$ |
| $0.58333\dots$ | $0.58\bar{3}$ | $3$ only |
| $2.1666\dots$ | $2.1\bar{6}$ | $6$ only |

> Note: Place the bar **only over the digits that actually repeat**. In $0.58333\dots$, the digits $5$ and $8$ appear just once, so the bar covers only the $3$: $0.58\bar{3}$.

---

## Part B: Why Must the Remainder Repeat?

This is one of the neatest "why" questions in arithmetic.

When you divide any number by **$7$**, what remainders are possible? Only **$0, 1, 2, 3, 4, 5$, or $6$**. (A remainder can never be $7$ or larger, or else $7$ would have gone in at least one more time.)

- If the remainder ever hits **$0$**, the division ends: you get a **terminating decimal**.
- If it never hits $0$, there are only **$6$ possible non-zero remainders ($1$ through $6$)**. At every step, the remainder must be one of those $6$ numbers. Therefore, **within at most $6$ steps**, some remainder **must appear a second time**.

The instant a remainder repeats, every calculation that follows is **identical** to what happened the first time that remainder appeared — so the quotient digits start repeating in an endless loop!

Think of it like this: suppose you own $6$ differently colored running jerseys for marathon training. If you wear a different jersey each day, by the $7\text{th}$ day you are **forced to repeat** one of them.

**General rule:** In $p/q$, the non-zero remainders can only be **$1$ through $(q - 1)$**. Consequently, the decimal expansion of $p/q$ either:
- **terminates** (if a remainder of $0$ is reached), or
- **repeats in a block of at most $(q - 1)$ digits**.

For $1/7$, the repeating block has length $6 = 7 - 1$ (the full maximum). For $1/3$, the length is just $1$. The block can be shorter than $q - 1$, never longer.

---

## Part C: How to Tell Without Dividing Whether a Decimal Terminates

There is a remarkably fast shortcut.

> First write the fraction in its **lowest form**. If the prime factorization of the **denominator contains only $2$s and $5$s** (and no other primes), the decimal **terminates**. Otherwise, it is **non-terminating recurring**.

### Why Does This Work? (Brief Reasoning)

Every terminating decimal is simply a fraction with a denominator like **$10, 100, 1000, \dots$** And **$10 = 2 \times 5$**. So if a denominator is built purely from $2$s and $5$s, you can always multiply top and bottom by enough $2$s or $5$s to turn the denominator into $10$, $100$, or $1000$.

- $3/8$: $8 = 2 \times 2 \times 2$. Multiply top and bottom by **$125$** ($= 5^3$): $3/8 = 375/1000 = \mathbf{0.375}$.
- $7/20$: $20 = 2 \times 2 \times 5$. Multiply top and bottom by **$5$**: $7/20 = 35/100 = \mathbf{0.35}$.

On the other hand, if the denominator (in lowest form) contains any other prime such as **$3, 7,$ or $11$**, it can never divide evenly into any power of $10$ (because powers of $10$ contain only $2$s and $5$s). Therefore, the division can never end.

### Summary Table of Examples

| Fraction | Lowest form | Factors of denominator | Decimal type | Decimal |
|---|---|---|---|---|
| $3/20$ | $3/20$ | $2 \times 2 \times 5$ | Terminating | $0.15$ |
| $13/125$ | $13/125$ | $5 \times 5 \times 5$ | Terminating | $0.104$ |
| $11/40$ | $11/40$ | $2 \times 2 \times 2 \times 5$ | Terminating | $0.275$ |
| $7/12$ | $7/12$ | $2 \times 2 \times \mathbf{3}$ | Recurring | $0.58\bar{3}$ |
| $5/6$ | $5/6$ | $2 \times \mathbf{3}$ | Recurring | $0.8\bar{3}$ |
| $2/7$ | $2/7$ | $\mathbf{7}$ | Recurring | $0.\overline{285714}$ |
| $9/15$ | **$3/5$** | $5$ | Terminating | $0.6$ |

Look closely at the last row. In $9/15$, the denominator $15 = 3 \times 5$ appears to have a $3$, which might trick you into predicting "recurring." Yet once you reduce it to lowest form, $9/15 = \mathbf{3/5}$, whose denominator is just $5$. Thus it **terminates**: $0.6$. **Always reduce to lowest form first!**

Check: $9 \div 15 = 0.6$ ✅

---

## Part D: Converting a Terminating Decimal to $p/q$

This direction is straightforward: count the digits after the decimal point and place that many zeros after $1$ in the denominator, then simplify.

**Example 1:** $0.375$

$$0.375 = \frac{375}{1000}$$
Divide numerator and denominator by $125$:
$$= \frac{3}{8}$$

Check: $3 \div 8 = 0.375$ ✅

**Example 2:** $2.45$

$$2.45 = \frac{245}{100} = \frac{49}{20}$$

Check: $49 \div 20 = 2.45$ ✅

**Example 3:** $0.04$

$$0.04 = \frac{4}{100} = \frac{1}{25}$$

Check: $1 \div 25 = 0.04$ ✅

---

## Part E: Converting a Pure Recurring Decimal to $p/q$

Here is a clever algebraic trick: **call the number $x$, multiply by $10$ or $100$, and subtract. The infinite repeating tail cancels itself out completely!**

### Example 1: $0.\bar{3} = 0.3333\dots$

Let **$x = 0.3333\dots$** $\quad \dots (1)$

One digit repeats, so **multiply both sides by $10$**:

**$10x = 3.3333\dots$** $\quad \dots (2)$

Now subtract equation $(1)$ from equation $(2)$:

```
  10x = 3.3333...
-   x = 0.3333...
  ---------------
   9x = 3
```

Every trailing $3$ cancels! That leaves $9x = 3$, so $x = 3/9 = \mathbf{1/3}$.

Check: $1 \div 3 = 0.3333\dots$ ✅

### Example 2: $0.\overline{47} = 0.474747\dots$

Let $x = 0.474747\dots \quad \dots (1)$

Two digits ($47$) repeat, so **multiply both sides by $100$**:

$100x = 47.474747\dots \quad \dots (2)$

Subtract $(1)$ from $(2)$: $99x = 47$

$$x = \frac{47}{99}$$

Check: $47 \div 99 = 0.4747\dots$ ✅

### How to Remember the Rule

**Multiply by a power of $10$ with as many zeros as there are repeating digits ($10$, $100$, $1000$, etc.).**

Notice the neat shortcut this reveals for pure recurring decimals: write **the repeating block over that many $9$s**:
- $0.\bar{3} = 3/9 = 1/3$
- $0.\overline{47} = 47/99$
- $0.\overline{123} = 123/999 = 41/333$

### An Intriguing Question: Does $0.\bar{9} = 1$?

Many students suspect $0.9999\dots$ is *tiny bit* smaller than $1$. Let us test it with the exact same algebra.

$x = 0.9999\dots \quad \dots (1)$

$10x = 9.9999\dots \quad \dots (2)$

$(2) - (1)$: $9x = 9$

$$x = \mathbf{1}$$

Yes! **$0.\bar{9}$ is strictly equal to $1$.** Here is a second way to see why:
- We know $1/3 = 0.3333\dots$
- Multiply both sides by $3$: $3 \times 1/3 = 0.9999\dots$
- Yet $3 \times 1/3 = 1$.

So $0.9999\dots = 1$. They are not two distinct numbers; they are simply **two different ways of writing the exact same number**, just like "$1/2$" and "$0.5$".

If it still feels surprising, recall Topic 1: between any two *different* numbers, you can always find a number in between. Try finding a number strictly between $0.9999\dots$ and $1$ — there is no room for one!

---

## Part F: Converting a Mixed Recurring Decimal to $p/q$

In a mixed recurring decimal, a few digits appear **once** after the decimal point before the repeating pattern begins. Here we **multiply twice** so that both equations share the **exact same repeating decimal tail**.

### Example 1: $0.4\bar{7} = 0.47777\dots$

Here $4$ appears once, and $7$ repeats.

$x = 0.47777\dots$

**Step 1:** Multiply so the repeating block starts **immediately after** the decimal point. Shift $4$ past the decimal point by multiplying by $10$:

$10x = 4.7777\dots \quad \dots (1)$

**Step 2:** Shift one full repeating block past the decimal point by multiplying by $10$ again (which is $100x$ overall):

$100x = 47.7777\dots \quad \dots (2)$

**Step 3:** Subtract $(1)$ from $(2)$:

```
  100x = 47.7777...
-  10x =  4.7777...
  -----------------
   90x = 43
```

$$x = \mathbf{\frac{43}{90}}$$

Check: $43 \div 90 = 0.47777\dots$ ✅

### Example 2: $1.\overline{27} = 1.272727\dots$

This is pure recurring after the decimal point, with $1$ in front. Two digits ($27$) repeat.

$x = 1.272727\dots \quad \dots (1)$

$100x = 127.272727\dots \quad \dots (2)$

$(2) - (1)$: $99x = 126$

$$x = \frac{126}{99} = \mathbf{\frac{14}{11}}$$ (dividing top and bottom by $9$)

Check: $14 \div 11 = 1.2727\dots$ ✅

### Example 3: $2.1\bar{6} = 2.1666\dots$

$x = 2.1666\dots$

$10x = 21.666\dots \quad \dots (1)$

$100x = 216.666\dots \quad \dots (2)$

$(2) - (1)$: $90x = 195$

$$x = \frac{195}{90} = \mathbf{\frac{13}{6}}$$

Check: $13 \div 6 = 2.1666\dots$ ✅

### The Golden Rule

Build two equations whose **fractional parts after the decimal point match digit for digit**. When you subtract, the entire infinite tail vanishes cleanly.

---

## Part G: The Big Rule: How Rational Numbers and Decimals Connect

Let us tie everything we have discovered into one clear principle.

> **The decimal expansion of every rational number is either terminating or non-terminating recurring.**
>
> **And the converse is also true:** every terminating or recurring decimal can be written in the form $p/q$, meaning it is **rational**.

| Direction | Why it holds |
|---|---|
| Rational $\rightarrow$ terminating or recurring | Part B: there are finitely many remainders, so either $0$ appears or a remainder repeats |
| Terminating $\rightarrow$ rational | Part D: denominators are powers of $10$ ($10, 100, 1000, \dots$) |
| Recurring $\rightarrow$ rational | Parts E and F: the multiply-and-subtract method always yields $p/q$ |

You now have a second reliable test for spotting a rational number: **examine its decimal expansion**. Does it end, or repeat in a steady block? Then it is rational.

Here is one lingering question to carry into Topic 3: could there exist a decimal that **neither terminates nor ever repeats**? And if so, what kind of number would it be?

---

## Part H: Visualizing Decimals on the Number Line (Successive Magnification)

Marking $3$ or $3.5$ on a number line is easy. What about **$3.765$** — say, marking $3.765\text{ km}$ on a digital marathon course map? To see such fine detail, we use **successive magnification**, just like zooming in with a digital magnifying glass: pick an interval, zoom in and split it into $10$ parts, then zoom in on the next smaller interval.

### Example 1: Locating $3.765$

**Step 1:** Where is $3.765$? Between $3$ and $4$. Divide that segment into $10$ equal parts.

```
3   3.1  3.2  3.3  3.4  3.5  3.6  3.7  3.8  3.9  4
|----|----|----|----|----|----|----|----|----|----|
                                   [=====]
                                   between 3.7 and 3.8
```

**Step 2:** Zoom in on the interval between $3.7$ and $3.8$, and split it into $10$ equal parts.

```
3.7  3.71 3.72 3.73 3.74 3.75 3.76 3.77 3.78 3.79 3.8
|----|----|----|----|----|----|----|----|----|----|
                              [====]
                              between 3.76 and 3.77
```

**Step 3:** Zoom in on the interval between $3.76$ and $3.77$, and split it into $10$ equal parts.

```
3.76 3.761 3.762 3.763 3.764 3.765 3.766 3.767 3.768 3.769 3.77
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
                              ^
                            3.765
```

Found it! $3.765$ sits right on the **$5\text{th}$ tick** past $3.76$.

**At each step:** one more decimal digit comes into focus. Three decimal digits required three zooms.

### Example 2: Locating $4.2\bar{6}$ to $4$ Decimal Places

$4.2\bar{6} = 4.26666\dots$ Because it never ends, we locate it **to $4$ decimal places**, namely **$4.2666$**.

| Zoom | Interval inspected | Split into $10$ parts | Where our number lies |
|---|---|---|---|
| $1$ | $4$ to $5$ | $4.1, 4.2, \dots$ | Between $4.2$ and $4.3$ |
| $2$ | $4.2$ to $4.3$ | $4.21, 4.22, \dots$ | Between $4.26$ and $4.27$ |
| $3$ | $4.26$ to $4.27$ | $4.261, 4.262, \dots$ | Between $4.266$ and $4.267$ |
| $4$ | $4.266$ to $4.267$ | $4.2661, 4.2662, \dots$ | Right on **$4.2666$** ($6\text{th}$ tick) |

```
4.266  4.2661 4.2662 4.2663 4.2664 4.2665 4.2666 4.2667 4.2668 4.2669 4.267
|------|------|------|------|------|------|------|------|------|------|
                                          ^
                                        4.2666
```

Notice something cool: in Zooms $2$, $3$, and $4$, the number kept landing near the **$6\text{th}$ tick** because the digit $6$ repeats endlessly. If you zoomed in forever, you would see the exact same pattern every time. A recurring decimal still occupies one exact fixed point on the number line — we simply stop at a chosen number of decimal places to pin it down visually.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Placing the bar over the wrong digits.**
   - $0.47777\dots = 0.4\bar{7}$ (bar over $7$ only)
   - $0.474747\dots = 0.\overline{47}$ (bar over both $4$ and $7$)

   These are two completely different numbers: $43/90$ versus $47/99$.

2. **Mistake 2: Applying the $2$-and-$5$ denominator test before simplifying.**
   Looking at $9/15$ and saying "$15$ contains a factor of $3$, so it is recurring" is wrong. Always simplify first: $9/15 = 3/5$, which terminates ($0.6$).

3. **Mistake 3: Multiplying only once for a mixed recurring decimal.**
   For $x = 0.47777\dots$, subtracting $x$ from $10x = 4.7777\dots$ gives $9x = 4.3$, leaving a decimal behind. You need two equations with identical decimal tails: $100x$ and $10x$.

4. **Mistake 4: Multiplying by the wrong power of $10$ for a pure recurring decimal.**
   In $0.\overline{47}$, two digits repeat, so multiply by $100$, not $10$. Comparing $10x = 4.747\dots$ and $x = 0.474\dots$ does not align the tails, so the infinite part fails to cancel.

5. **Mistake 5: Confusing $0.3$ and $0.\bar{3}$.**
   $0.3 = 3/10$, whereas $0.\bar{3} = 1/3$. They are not equal — the bar means the $3$s continue forever.

6. **Mistake 6: Mistaking a calculator's rounded display for an exact decimal.**
   A calculator displays $2/3$ as $0.666666667$ because it rounds the last digit to fit the screen. The true value is $0.\bar{6}$. The screen is finite, not the decimal.

7. **Mistake 7: Believing $0.\bar{9}$ is slightly less than $1$.**
   $0.9999\dots$ is **exactly** equal to $1$. Use the algebraic check in Part E whenever you need a reminder.

---

## Quick Recap

- To convert $p/q$ into a decimal, use **long division**.
- If the remainder reaches **$0$**, the decimal **terminates** ($7/8 = 0.875$).
- If the remainder never reaches $0$, a remainder must eventually **repeat**, producing a **non-terminating recurring** decimal ($1/7 = 0.\overline{142857}$).
- Non-zero remainders can only be **$1$ through $(q - 1)$**, guaranteeing repetition with a repeating block of at most **$(q - 1)$** digits.
- Place the **bar** strictly over the repeating digits.
- In **lowest form**, if the denominator has only prime factors of **$2$ and $5$**, the decimal terminates; otherwise, it recurs.
- Terminating $\rightarrow p/q$: use a denominator of **$10, 100, 1000, \dots$**, then simplify.
- Recurring $\rightarrow p/q$: **set $x$, multiply by powers of $10$, and subtract**. For pure recurring decimals, put the repeating block over $9, 99, 999, \dots$
- For mixed recurring decimals, multiply twice so both equations have the **exact same decimal tail**.
- **$0.\bar{9} = 1$.**
- **Every rational number has a terminating or recurring decimal expansion, and every terminating or recurring decimal is a rational number.**
- To plot a decimal on the number line, use **successive magnification**: each zoom reveals one more decimal place.

---

## Practice Questions

1. Convert each fraction into decimal form using long division:
   (a) $5/16$
   (b) $2/9$
   (c) $4/11$
   (d) $1/12$

2. Without performing long division, state whether each fraction has a terminating or a non-terminating recurring decimal expansion. Give a reason.
   (a) $17/8$
   (b) $13/30$
   (c) $21/35$
   (d) $7/80$
   (e) $11/24$

3. Express each decimal in the form $p/q$:
   (a) $0.65$
   (b) $0.\bar{6}$
   (c) $0.\overline{18}$
   (d) $0.3\bar{6}$ (only the $6$ repeats)
   (e) $2.\bar{3}$

4. Using the facts that $1/9 = 0.\bar{1}$ and $8/9 = 0.\bar{8}$, show that $0.\bar{9} = 1$.

5. What is the maximum possible number of digits in the repeating block of the decimal expansion of $1/13$? Then find the actual decimal expansion of $1/13$ and its repeating block.

6. Describe, step by step, how you would locate $2.665$ on the number line using successive magnification.

7. State whether each statement is true or false. Give a reason.
   (a) The decimal expansion of $1/7$ has a repeating block of $6$ digits.
   (b) Every non-terminating recurring decimal is a rational number.
   (c) $9/15$ has a non-terminating recurring decimal expansion.
   (d) Every fraction with denominator $12$ has a non-terminating decimal expansion.

### Answers

1. (a) $5/16$: $16 = 2^4$, so it terminates. $50 \div 16 = 3\text{ r }2$, $20 \div 16 = 1\text{ r }4$, $40 \div 16 = 2\text{ r }8$, $80 \div 16 = 5\text{ r }0$. **$\mathbf{0.3125}$**
   Check: $0.3125 \times 16 = 5$ ✅
   (b) $2/9$: $20 \div 9 = 2\text{ r }2$, so remainder $2$ repeats immediately. **$\mathbf{0.\bar{2}}$**
   (c) $4/11$: $40 \div 11 = 3\text{ r }7$, $70 \div 11 = 6\text{ r }4$, and remainder $4$ repeats. **$\mathbf{0.\overline{36}}$**
   (d) $1/12$: $10 \div 12 = 0\text{ r }10$, $100 \div 12 = 8\text{ r }4$, $40 \div 12 = 3\text{ r }4$, and remainder $4$ repeats. **$\mathbf{0.08\bar{3}}$** (bar over $3$ only)
   Check: $0.08333\dots \times 12 = 0.99999\dots = 1$ ✅

2. (a) $17/8$: $8 = 2^3$ (only $2$s). **Terminating** ($2.125$).
   (b) $13/30$: $30 = 2 \times 3 \times 5$, and $13/30$ is already in lowest form. Because of the prime factor $3$, it is **non-terminating recurring** ($0.4\bar{3}$).
   (c) $21/35 = 3/5$ (lowest form). Denominator is $5$ only. **Terminating** ($0.6$).
   (d) $7/80$: $80 = 2^4 \times 5$ (only $2$s and $5$s). **Terminating** ($0.0875$).
   (e) $11/24$: $24 = 2^3 \times 3$, and $11/24$ is in lowest form. Because of the prime factor $3$, it is **non-terminating recurring** ($0.458\bar{3}$).

3. (a) $0.65 = 65/100 = \mathbf{13/20}$
   (b) $x = 0.666\dots$, $10x = 6.666\dots$, subtracting gives $9x = 6$, so $x = 6/9 = \mathbf{2/3}$
   (c) $x = 0.1818\dots$, $100x = 18.1818\dots$, subtracting gives $99x = 18$, so $x = 18/99 = \mathbf{2/11}$
   (d) $x = 0.3666\dots$, $10x = 3.666\dots$, $100x = 36.666\dots$, subtracting gives $90x = 33$, so $x = 33/90 = \mathbf{11/30}$
   Check: $11 \div 30 = 0.3666\dots$ ✅
   (e) $2.\bar{3} = 2 + 0.\bar{3} = 2 + 1/3 = \mathbf{7/3}$
   Check: $7 \div 3 = 2.333\dots$ ✅

4. Adding the fractions: $1/9 + 8/9 = 9/9 = 1$.
   Adding the decimals: $0.1111\dots + 0.8888\dots = 0.9999\dots = 0.\bar{9}$.
   Since both sums represent the same quantity, **$0.\bar{9} = 1$** ✅

5. For $1/13$, non-zero remainders can only be $1$ through $12$, so the repeating block can have **at most $12$ digits**.
   Performing long division: $10 \div 13 = 0\text{ r }10$, $100 \div 13 = 7\text{ r }9$, $90 \div 13 = 6\text{ r }12$, $120 \div 13 = 9\text{ r }3$, $30 \div 13 = 2\text{ r }4$, $40 \div 13 = 3\text{ r }1$, which returns to remainder $1$ (just like the start!).
   **$1/13 = 0.\overline{076923}$**, with repeating block **$076923$** ($6$ digits — well within the $12$-digit limit).

6. - **Zoom 1:** Divide the interval between $2$ and $3$ into $10$ equal parts. $2.665$ lies between $2.6$ and $2.7$.
   - **Zoom 2:** Divide the interval between $2.6$ and $2.7$ into $10$ equal parts. $2.665$ lies between $2.66$ and $2.67$.
   - **Zoom 3:** Divide the interval between $2.66$ and $2.67$ into $10$ equal parts. $2.665$ sits exactly on the **$5\text{th}$ tick** past $2.66$.

7. (a) **True** ✅. $1/7 = 0.\overline{142857}$, whose repeating block $142857$ has $6$ digits.
   (b) **True** ✅. Using the multiply-and-subtract method, every non-terminating recurring decimal can be expressed as $p/q$.
   (c) **False** ❌. In lowest form, $9/15 = 3/5 = 0.6$, which terminates.
   (d) **False** ❌. For example, $3/12 = 1/4 = 0.25$, which terminates. Always reduce to lowest form before checking the denominator.

---

Great work! You can now convert any rational fraction into a decimal, convert any terminating or recurring decimal back into a fraction, and explain why every rational number behaves that way.

In the next topic, we will answer the question left hanging at the end of Part G: **there are decimals that neither terminate nor ever repeat.** Because they cannot be written as $p/q$, they form a brand-new group — **irrational numbers** — and together with the rationals, they complete the family of **real numbers**.
