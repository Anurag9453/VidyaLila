# Chapter: Number Systems (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [number-systems-part2.md](number-systems-part2.md).** (Topic 1 is in [number-systems.md](number-systems.md).)
> **Topics covered in this file:**
> 3. Irrational Numbers, Proof of √2, and the Real Number Line

---

# Topic 3: Irrational Numbers, Proof of √2, and the Real Number Line

In Topic 2, we discovered that the decimal expansion of every rational number ($p/q$) always falls into one of two categories: either it **stops** (terminating, like $7/8 = 0.875$) or it **repeats a fixed pattern forever** (non-terminating recurring, like $1/7 = 0.\overline{142857}$). Better still, the reverse was also true: any decimal that stops or repeats can be rewritten as $p/q$.

This raises a natural question: **could there be a decimal that neither stops nor ever repeats?** If so, it cannot possibly be written as $p/q$. In this topic, we will meet those "rule-breaking" numbers, prove why $\sqrt{2}$ is one of them, and unite all numbers into one complete family: the **real numbers**.

---

## The Story of a Secret Club

One afternoon, **Elena** was helping **Dr. Bennett** measure a courtyard layout on a large architectural blueprint. Each stone paver on the blueprint was a perfect square measuring $1\text{ unit}$ on each side. When Elena used her digital compass to measure the **diagonal** across one square paver, the readout refused to settle on a tidy fraction.

Dr. Bennett smiled. "You just ran into the exact same puzzle that shook a secret club in ancient Greece more than two thousand years ago!"

Long ago, the Greek mathematician **Pythagoras** (famous for the right-triangle theorem) led a devoted circle of scholars. That brotherhood held one sacred belief:

> "Every length in the universe can be expressed as the ratio of two whole numbers ($p/q$)."

To them, this rule represented the **harmony and beauty of numbers**.

Then one member of the club, **Hippasus**, asked a simple question. Take a square whose sides each measure **$1\text{ unit}$**. How long is its **diagonal**?

```
   D ___________ C
    |         / |
    |       /   |
  1 |     /  ?  |
    |   /       |
    | /         |
   A ----------- B
          1
```

By Pythagoras's own theorem (which you studied in earlier classes):

$$\text{diagonal}^2 = 1^2 + 1^2 = 2 \quad \Longrightarrow \quad \text{diagonal} = \sqrt{2}$$

Hippasus tried fraction after fraction to capture $\sqrt{2}$ as $p/q$. He tested $7/5$ ($1.4$, whose square is $1.96$ — slightly too small) and $17/12$ (whose square is $2.0069\dots$ — slightly too large). Every fraction landed either a whisker below $2$ or a whisker above $2$. **None ever hit $2$ exactly.**

Then Hippasus **proved** that no fraction $p/q$ could *ever* equal $\sqrt{2}$. Legend says the brotherhood was deeply unsettled because their cherished belief had crumbled. While historians debate the dramatic tales around Hippasus's fate, the **mathematical discovery is completely true**: a real geometric length existed that could never be written as $p/q$.

Today, we will walk through that discovery step by step.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Non-terminating non-recurring decimal** | A decimal that neither ends nor repeats any fixed block of digits | $0.101001000100001\dots$ |
| **Irrational number** | Any number that cannot be written in the form $p/q$ ($p, q \in \mathbb{Z},\ q \neq 0$) | $\sqrt{2},\ \sqrt{3},\ \pi$ |
| **Real number ($\mathbb{R}$)** | All rational and irrational numbers combined into a single set | $5,\ -3/4,\ 0.333\dots,\ \sqrt{2},\ \pi$ |
| **Proof by contradiction** | Assume the opposite of what you want to prove, and show it leads to an impossible result | Assume $\sqrt{2}$ is rational and uncover a contradiction |
| **Square root spiral** | A spiraling diagram built by joining right triangles to construct lengths $\sqrt{2}, \sqrt{3}, \sqrt{4}, \dots$ | Shown in Part E below |
| **Perfect square** | The square of a whole number (integer) | $1, 4, 9, 16, 25$ |

---

## Part A: Decimals That Never End and Never Repeat

In Topic 2, we saw two kinds of decimals:
- **Terminating:** $0.25,\ 3.875$
- **Recurring:** $0.333\dots,\ 0.142857142857\dots$

Now examine this decimal carefully:

$$0.101001000100001\dots$$

Spot the pattern: first $1$, then one $0$, then $1$, then **two** $0$s, then $1$, then **three** $0$s, then $1$, then **four** $0$s...

| Chunk | $1$ | $0$ | $1$ | $00$ | $1$ | $000$ | $1$ | $0000$ | $1$ | $\dots$ |
|---|---|---|---|---|---|---|---|---|---|---|

Each time, the string of zeros grows by **one more zero**. Consequently:
- It **never ends** (after every $1$ come more zeros, followed by another $1$).
- It **never repeats**. Repeating means the *same fixed block* (such as $142857$) loops identically over and over. Here every block is longer than the last, so no fixed block ever repeats.

Here is another example:

$$0.12345678910111213\dots$$

After the decimal point, we simply write the counting numbers $1, 2, 3, 4, \dots$ one after another. The list never stops, and the numbers keep growing ($10, 11, \dots, 100, \dots$), so no fixed block can ever repeat.

### An Important Distinction

Having a **pattern** is not the same as **repeating**.
- $0.101001000100001\dots$ clearly has a **pattern** (one extra zero each time), which lets us predict the next digits.
- Yet it is **not recurring**, because no fixed group of digits repeats identically forever.

Remember from Topic 2: every rational number has a decimal that either terminates or recurs. Therefore, decimals like these **cannot be rational**. They belong to a brand-new family.

---

## Part B: Irrational Numbers

> An **irrational number** is a number that **cannot** be written in the form **$p/q$**, where $p$ and $q$ are integers and $q \neq 0$.

In terms of decimals:

> The decimal expansion of an irrational number is always **non-terminating and non-recurring**.

The prefix "ir-" means "not": *ir-rational* literally means "not rational."

### Famous Irrational Numbers

| Number | Beginning of decimal | Note |
|---|---|---|
| $\sqrt{2}$ | $1.41421356\dots$ | Diagonal of a unit square (Hippasus's discovery) |
| $\sqrt{3}$ | $1.73205080\dots$ | |
| $\sqrt{5}$ | $2.23606797\dots$ | |
| $\pi$ | $3.14159265\dots$ | Circumference $\div$ diameter of any circle |
| $0.101001000\dots$ | | Constructed in Part A |

### The Mystery of $\pi$ and $22/7$

Many students assume **$\pi = 22/7$**. That is not true!
- $22/7 = 3.142857142857\dots$ (it repeats forever, so it is **rational**)
- $\pi = 3.14159265358\dots$ (it never ends and never repeats, so it is **irrational**)

They match only in the first two decimal places ($3.14$), and diverge right at the third digit. Thus **$22/7$ is only a convenient approximation of $\pi$** used to make classroom calculations easier — and $3.14$ is an approximation too.

### Which Square Roots Are Irrational?

| $\sqrt{n}$ | Is $n$ a perfect square? | Result |
|---|---|---|
| $\sqrt{4}$ | Yes ($2^2$) | **$2$, rational** |
| $\sqrt{9}$ | Yes ($3^2$) | **$3$, rational** |
| $\sqrt{2}$ | No | **Irrational** |
| $\sqrt{3}$ | No | **Irrational** |
| $\sqrt{8}$ | No | **Irrational** |
| $\sqrt{49}$ | Yes ($7^2$) | **$7$, rational** |

> **Rule:** If $n$ is a positive integer that is **not a perfect square**, then **$\sqrt{n}$ is irrational**. If $n$ is a perfect square, then $\sqrt{n}$ is a whole number (and therefore rational).

So never label a number "irrational" just because you see a square root sign! $\sqrt{4}$ and $\sqrt{49}$ are ordinary rational numbers in disguise.

---

## Part C: Why Is $\sqrt{2}$ Irrational? (Proof)

Let us prove Hippasus's discovery ourselves using **proof by contradiction**: **assume the opposite of what we want to show, and watch it crash into an impossibility.**

### One Essential Fact First

**If the square of an integer is even, then the integer itself must be even.**

Why? Look at the squares of odd integers:
- $1^2 = 1,\ 3^2 = 9,\ 5^2 = 25,\ 7^2 = 49$

Every one is **odd**, because $\text{odd} \times \text{odd} = \text{odd}$. Therefore, if $p^2$ is even, $p$ cannot possibly be odd (or else $p^2$ would be odd). **So $p$ must be even.**

### Now, the Proof

**Suppose** for the sake of contradiction that $\sqrt{2}$ is rational. Then we can write it in lowest terms as:

$$\sqrt{2} = \frac{p}{q}$$

where $p$ and $q$ are integers, $q \neq 0$, and $p/q$ is **in its lowest form** — meaning $p$ and $q$ share **no common factor other than $1$** (like $3/4$, not $6/8$).

**Step 1:** Square both sides.
$$2 = \frac{p^2}{q^2} \quad \Longrightarrow \quad \mathbf{p^2 = 2q^2}$$

**Step 2:** Because $2q^2$ is a multiple of $2$, **$p^2$ is even**. By our essential fact above, **$p$ must also be even**. Thus we can write $p = 2k$ for some integer $k$.

**Step 3:** Substitute $p = 2k$ into $p^2 = 2q^2$:
$$(2k)^2 = 2q^2$$
$$4k^2 = 2q^2$$
$$\mathbf{q^2 = 2k^2}$$

**Step 4:** Now $q^2$ is a multiple of $2$, so $q^2$ is even — which means **$q$ must also be even**.

**Step 5:** Look at what we just found: $p$ is even **and** $q$ is even. That means **$p$ and $q$ share a common factor of $2$**!

**However**, at the very start we assumed that $p$ and $q$ had **no common factor other than $1$**. This is a direct **contradiction**.

**Conclusion:** Our opening assumption ("$\sqrt{2}$ is rational") must be false. Therefore, **$\sqrt{2}$ is irrational.** Q.E.D.!

> Summary of the proof: "If $\sqrt{2} = p/q$, then both $p$ and $q$ would have to be even. Yet in a fully simplified fraction, numerator and denominator cannot both be even. Hence $\sqrt{2}$ cannot equal $p/q$."

The same style of proof also works for $\sqrt{3}$, $\sqrt{5}$, and other non-square roots. For now, mastering the $\sqrt{2}$ proof gives you the whole idea.

---

## Part D: Locating $\sqrt{2}$ on the Number Line

Being irrational does **not** mean $\sqrt{2}$ is imaginary or missing! $\sqrt{2}$ is a **concrete physical length** (the diagonal of Elena's $1\text{ unit}$ square paver), so it occupies one exact, fixed point on the number line. Let us pinpoint it using a compass — just like a digital or drafting compass on a blueprint.

We will use the Pythagorean theorem: in a right-angled triangle, **$\text{hypotenuse}^2 = \text{base}^2 + \text{height}^2$**.

### Steps to Locate $\sqrt{2}$

1. Draw a number line. Label $0$ as **$O$** and $1$ as **$A$**, so **$OA = 1\text{ unit}$**.
2. At $A$, draw a line **perpendicular** ($90^\circ$) to $OA$, and mark point $B$ along it so **$AB = 1\text{ unit}$**.
3. Join $O$ to $B$. Since $\triangle OAB$ is a right triangle:
   $$OB^2 = OA^2 + AB^2 = 1^2 + 1^2 = 2 \quad \Longrightarrow \quad \mathbf{OB = \sqrt{2}}$$
4. Place the compass needle at **$O$** and open the compass to **$B$** (radius $= OB = \sqrt{2}$).
5. Swing an arc downward until it intersects the number line. Call that intersection point **$P$**. Then **$OP = \sqrt{2}$.**

```
            B
            |\
          1 | \  √2
            |  \
   ---------O---A---P----2------->
            0   1  √2
```

*(Diagram is a rough sketch: $B$ sits directly above $A$ at $90^\circ$, and the compass arc centred at $O$ sweeps $B$ down onto the number line at $P$.)*

$P$ lands at approximately $1.414$, between $1$ and $2$ and slightly before $1.5$.

### Steps to Locate $\sqrt{3}$

Now use $\sqrt{2}$ as your stepping stone.

1. Keep the segment $OB = \sqrt{2}$ from above.
2. At $B$, draw a line **perpendicular** to $OB$ and mark point $D$ so **$BD = 1\text{ unit}$**.
3. Join $O$ to $D$. Since $\triangle OBD$ is a right triangle:
   $$OD^2 = OB^2 + BD^2 = (\sqrt{2})^2 + 1^2 = 2 + 1 = 3 \quad \Longrightarrow \quad \mathbf{OD = \sqrt{3}}$$
4. With the compass centred at $O$ and radius $OD$, swing an arc down to cut the number line. That point marks **$\sqrt{3}$** (approximately $1.732$).

**Check:** $1.732 \times 1.732 \approx 2.9998$, which is very close to $3$ ✅

---

## Part E: The Square Root Spiral

Keep repeating the construction from Part D, and a striking spiral pattern emerges.

1. Start at $O$ with **$OP_1 = 1\text{ unit}$**.
2. At $P_1$, draw $P_1P_2 = 1\text{ unit}$ perpendicular to $OP_1$. Then **$OP_2 = \sqrt{2}$**.
3. At $P_2$, draw $P_2P_3 = 1\text{ unit}$ perpendicular to $OP_2$. Then **$OP_3 = \sqrt{2 + 1} = \sqrt{3}$**.
4. At $P_3$, draw $P_3P_4 = 1\text{ unit}$ perpendicular to $OP_3$. Then **$OP_4 = \sqrt{3 + 1} = \sqrt{4} = 2$**.
5. Continue indefinitely to construct $\sqrt{5}, \sqrt{6}, \sqrt{7}, \dots$

```
              P₃
             /  \
          1 /    \
           /  √3  \
       P₄ /        \ P₂
         \          |
       √4 \ /  \√2  | 1
           .____\___|
           O    1   P₁
```

*(Rough sketch showing the idea: every outer edge has length $1\text{ unit}$, and every hypotenuse radiates out from $O$.)*

**Pattern:** At each new right triangle:
$$\text{new hypotenuse}^2 = \text{previous hypotenuse}^2 + 1^2$$

This produces lengths $\sqrt{1}, \sqrt{2}, \sqrt{3}, \sqrt{4}, \sqrt{5}, \dots$ Notice that rational lengths pop up along the way ($\sqrt{4} = 2,\ \sqrt{9} = 3$), while all the others are irrational.

---

## Part F: Finding Irrational Numbers Between Two Numbers

In Topic 1, we learned that infinitely many rational numbers lie between any two rational numbers. The same is true for irrational numbers!

**Trick:** Write the decimal beginnings of the two numbers, and build a decimal strictly between them that **never ends and never repeats**.

### Example 1: An Irrational Number Between $1/7$ and $2/7$

Find their decimal expansions (using long division from Topic 2):
- $1/7 = 0.142857142857\dots$
- $2/7 = 0.285714285714\dots$

We just need a non-terminating, non-recurring decimal greater than $0.1428\dots$ and less than $0.2857\dots$, such as:

$$0.150150015000150000\dots$$

*(It begins with $0.15$, safely between $0.1428\dots$ and $0.2857\dots$, and then alternates $15$ with an ever-growing string of zeros so it never repeats.)*

**Check:** $0.142857\dots < 0.15015\dots < 0.285714\dots$ ✅

You can invent endlessly many others: $0.2010010001\dots$, $0.25252252225\dots$, and so on.

### Example 2: An Irrational Number Between $\sqrt{2}$ and $\sqrt{3}$

- $\sqrt{2} \approx 1.414$
- $\sqrt{3} \approx 1.732$

In between: **$1.5050050005\dots$** (increasing the number of zeros after each $5$).

**Check:** $1.414\dots < 1.505\dots < 1.732\dots$ ✅

### Example 3: An Irrational Number Between $2$ and $3$

Think with square roots: $2 = \sqrt{4}$ and $3 = \sqrt{9}$. Therefore $\sqrt{5}, \sqrt{6}, \sqrt{7}, \sqrt{8}$ all lie strictly between $2$ and $3$, and each one is irrational (since $5, 6, 7, 8$ are not perfect squares).

Answer: **$\sqrt{5}$** ($\approx 2.236$), or $\sqrt{6}$, $\sqrt{7}$, or $\sqrt{8}$.

### Example 4: One Rational and One Irrational Number Between $0.1$ and $0.12$

- Rational: **$0.11$** (it terminates)
- Irrational: **$0.1101001000100001\dots$**

**Check:** $0.1 < 0.11 < 0.12$ ✅ and $0.1 < 0.1101001\dots < 0.12$ ✅

---

## Part G: Real Numbers: The Complete Family

Now let us bring every number together into one grand family.

> **Real numbers ($\mathbb{R}$)** $=$ all **rational numbers** $+$ all **irrational numbers**

The number-family tree from Topic 1 is now complete:

```
R  (Real numbers)
├── Q  (Rational numbers: p/q)
│   └── Z  (Integers: ..., −2, −1, 0, 1, 2, ...)
│       └── W  (Whole numbers: 0, 1, 2, 3, ...)
│           └── N  (Natural numbers: 1, 2, 3, ...)
│   (Q also includes fractions: 1/2, −3/4, 0.333...)
│
└── Irrational numbers  (√2, √3, √5, π, 0.101001000...)
```

In standard notation:

**$N \subset W \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$**, and **all irrational numbers also belong inside $\mathbb{R}$**.

Keep two crucial facts in mind:
1. Every real number is **either rational or irrational** — never both at once, and never neither.
2. Rational and irrational numbers have **no overlap**. They are two completely separate groups that together form $\mathbb{R}$.

### No Gaps Left on the Number Line

Here is one of the most satisfying truths in all of mathematics:

> **Every real number corresponds to a unique point on the number line, and every point on the number line corresponds to a unique real number.**

Picture it this way: if the number line held only rational numbers, it would still be riddled with tiny **pinholes** — for example, the exact spot at $\sqrt{2}$ would be empty because no rational number sits there. Irrational numbers plug every single pinhole.

Because of this, the **real number line is completely continuous**: zero gaps, zero missing points. That is why the number line is officially called the **real number line**.

---

## Part H: Classifying Numbers

**Steps:**
1. If there is a square root, check whether the number inside is a **perfect square**.
2. If it is a decimal, check whether it **terminates, recurs, or does neither**.
3. If it is a fraction $p/q$ ($q \neq 0$, with integers $p$ and $q$), it is **rational**.

| Number | Simplification / observation | Rational / Irrational |
|---|---|---|
| $\sqrt{9}$ | $= 3$ | **Rational** |
| $\sqrt{7}$ | $7$ is not a perfect square | **Irrational** |
| $0.3333\dots$ | Repeats ($= 1/3$) | **Rational** |
| $2.010010001\dots$ | Neither ends nor repeats | **Irrational** |
| $\pi$ | Non-terminating, non-recurring | **Irrational** |
| $22/7$ | Written as $p/q$ | **Rational** |
| $-\sqrt{16}$ | $= -4$ | **Rational** |
| $\sqrt{16/25}$ | $= 4/5$ | **Rational** |
| $\sqrt{0.09}$ | $= 0.3$ (since $0.3 \times 0.3 = 0.09$) | **Rational** |
| $0$ | $= 0/1$ | **Rational** |
| $1.4142$ | Terminates (an approximation of $\sqrt{2}$, not $\sqrt{2}$ itself) | **Rational** |

Look carefully at the final row. **$1.4142$** stops after four decimal places, so it is **rational**. The true $\sqrt{2}$ goes on forever without repeating, so $1.4142$ is merely a rounded rational approximation.

### What Happens When You Add or Multiply Rational and Irrational Numbers?

For instance, are $2 + \sqrt{3}$ and $2\sqrt{3}$ rational or irrational? That question leads straight into **Topic 4**, where we explore operations on real numbers.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Assuming $\pi = 22/7$.**
   $22/7 = 3.142857\dots$ repeats and is rational, whereas $\pi = 3.14159\dots$ is irrational. $22/7$ is only a handy approximation.

2. **Mistake 2: Thinking every square root is irrational.**
   $\sqrt{4} = 2$, $\sqrt{25} = 5$, and $\sqrt{9/16} = 3/4$ are all rational. A square root $\sqrt{n}$ is irrational only when $n$ is *not* a perfect square.

3. **Mistake 3: Confusing "having a pattern" with "recurring."**
   $0.101001000\dots$ follows a clear pattern, yet no fixed block of digits repeats identically. Therefore it is irrational.

4. **Mistake 4: Calling $\sqrt{2}$ rational because a calculator screen stops.**
   A calculator displays $\sqrt{2} = 1.4142135$ only because its screen is finite. The true decimal expansion of $\sqrt{2}$ continues forever without repeating.

5. **Mistake 5: Forgetting the "lowest form" assumption in the $\sqrt{2}$ proof.**
   When writing $\sqrt{2} = p/q$, you *must* state that $p$ and $q$ have no common factor other than $1$. The contradiction ("both $p$ and $q$ are even") depends entirely on that assumption; without it, the proof falls apart.

6. **Mistake 6: Plotting $\sqrt{2}$ at $1.4$ on the number line.**
   Locating $\sqrt{2}$ accurately requires a compass construction (landing at $1.414\dots$). Marking $1.4$ plots $7/5$, not $\sqrt{2}$.

7. **Mistake 7: Saying a number can be both rational and irrational.**
   Every real number belongs to **strictly one** of the two sets: either rational or irrational, never both.

---

## Quick Recap

- **Non-terminating non-recurring decimal:** never ends and never repeats a fixed block (e.g., $0.101001000\dots$).
- **Irrational number:** a number that cannot be written as $p/q$ ($p, q \in \mathbb{Z},\ q \neq 0$). Its decimal expansion is non-terminating and non-recurring. Examples: $\sqrt{2},\ \sqrt{3},\ \sqrt{5},\ \pi$.
- **$\pi \neq 22/7$.** $22/7$ is only a rational approximation of $\pi$.
- **$\sqrt{n}$** is irrational whenever $n$ is a positive integer that is not a perfect square; $\sqrt{4}, \sqrt{9}$, etc., are rational.
- **$\sqrt{2}$ is irrational.** Proof by contradiction: assuming $\sqrt{2} = p/q$ in lowest form forces both $p$ and $q$ to be even, contradicting "no common factor."
- **$\sqrt{2}$ and $\sqrt{3}$ on the number line:** use Pythagoras and a compass — $OB = \sqrt{1^2 + 1^2} = \sqrt{2}$, then $OD = \sqrt{(\sqrt{2})^2 + 1^2} = \sqrt{3}$.
- **Square root spiral:** adding a $1\text{-unit}$ perpendicular at each step constructs $\sqrt{2}, \sqrt{3}, \sqrt{4}, \dots$
- Between any two numbers, there are **infinitely many irrationals** (construct a non-terminating, non-recurring decimal in between).
- **Real numbers ($\mathbb{R}$) $=$ rationals $+$ irrationals.** $N \subset W \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$.
- **Every real number corresponds to a unique point on the number line, and every point on the number line corresponds to a unique real number** — leaving zero gaps.

---

## Practice Questions

1. Classify each number as rational or irrational:
   (a) $\sqrt{25}$  (b) $\sqrt{12}$  (c) $0.676767\dots$  (d) $1.010010001\dots$  (e) $7/3$  (f) $\sqrt{4/9}$  (g) $\pi$  (h) $3.1416$

2. Is $22/7$ equal to $\pi$? Explain your answer using their decimal forms.

3. Write two irrational numbers between $1/7$ and $2/7$.

4. Write one rational number and one irrational number between $0.2$ and $0.21$.

5. Find three irrational numbers between $3$ and $4$.

6. Describe, step by step, how to locate $\sqrt{2}$ on the number line.

7. Starting with $OP_1 = 1\text{ unit}$ and adding a $1\text{-unit}$ perpendicular at each step, what are the lengths $OP_2, OP_3, OP_4$, and $OP_5$ in a square root spiral?

8. State whether each statement is true or false. Give a reason.
   (a) Every real number is either rational or irrational.
   (b) Every square root is irrational.
   (c) The decimal expansion of an irrational number never ends and never repeats.
   (d) There are points on the number line that do not represent any real number.

9. In the proof that $\sqrt{2}$ is irrational, why is it essential to assume that $p/q$ is in its lowest terms?

### Answers

1. (a) $\sqrt{25} = 5$, **rational**
   (b) $12$ is not a perfect square, so $\sqrt{12}$ is **irrational**
   (c) Repeats ($67$ recurs), **rational**
   (d) Neither terminates nor repeats, **irrational**
   (e) Already in $p/q$ form, **rational**
   (f) $\sqrt{4/9} = 2/3$, **rational**
   (g) **Irrational**
   (h) Terminating decimal, **rational** (this is an approximation of $\pi$, not $\pi$ itself)

2. **No.** $22/7 = 3.142857142857\dots$, which repeats and is therefore rational. $\pi = 3.14159265\dots$, which neither ends nor repeats and is therefore irrational. They match only up to $3.14$; $22/7$ is merely an approximation of $\pi$.

3. $1/7 = 0.142857\dots$ and $2/7 = 0.285714\dots$
   Two irrational numbers between them: **$0.150150015000\dots$** and **$0.2010010001\dots$**
   Check: $0.142857\dots < 0.15015\dots < 0.2010\dots < 0.285714\dots$ ✅

4. Rational: **$0.205$** (terminates).
   Irrational: **$0.2050050005\dots$** (increasing number of zeros after each $5$).
   Check: $0.2 < 0.205 < 0.21$ ✅ and $0.2 < 0.20500500\dots < 0.21$ ✅

5. Write $3 = \sqrt{9}$ and $4 = \sqrt{16}$. All of $\sqrt{10}, \sqrt{11}, \sqrt{12}, \sqrt{13}, \sqrt{14}, \sqrt{15}$ lie between them and are irrational.
   Three answers: **$\sqrt{10},\ \sqrt{11},\ \sqrt{12}$** (or decimal constructions such as $3.101001000\dots$).

6. Mark $O = 0$ and $A = 1$ on the number line so $OA = 1\text{ unit}$. At $A$, construct a perpendicular segment $AB = 1\text{ unit}$. Join $OB$; by the Pythagorean theorem, $OB^2 = 1^2 + 1^2 = 2$, so $OB = \sqrt{2}$. Place a compass at $O$ with radius $OB$ and draw an arc intersecting the number line. That intersection point marks **$\sqrt{2}$**.

7. $OP_2 = \mathbf{\sqrt{2}}$, $OP_3 = \mathbf{\sqrt{3}}$, $OP_4 = \mathbf{\sqrt{4} = 2}$, $OP_5 = \mathbf{\sqrt{5}}$.
   *(At each step, $\text{new}^2 = \text{previous}^2 + 1$.)*

8. (a) **True** ✅. Real numbers consist of all rationals and all irrationals combined, and every real number belongs to exactly one of the two.
   (b) **False** ❌. $\sqrt{4} = 2$ and $\sqrt{9} = 3$ are rational. Only square roots of non-perfect squares are irrational.
   (c) **True** ✅. That is the defining decimal property of an irrational number.
   (d) **False** ❌. Every single point on the number line represents a unique real number; irrational numbers fill all the gaps between rationals.

9. In the proof, we deduce that both $p$ and $q$ are **even**, meaning they share a common factor of $2$. That only produces a contradiction if we assumed at the start that $p/q$ is **in its lowest terms** (sharing no common factor other than $1$). Without that assumption, both being even would not contradict anything, and the proof would fail.

---

If the proof of $\sqrt{2}$ felt tricky on your first read, do not worry! Remember its core punchline: "Assuming $\sqrt{2} = p/q$ forces both $p$ and $q$ to be even, which is impossible for a fully simplified fraction." Even Hippasus needed time to wrap his head around it!

In the next topic (**Topic 4**), we will explore what happens when rational and irrational numbers are added or multiplied (such as $2 + \sqrt{3}$ or $\sqrt{2} \times \sqrt{8}$), how to locate $\sqrt{x}$ for any positive number $x$ on the number line, and what **$n\text{th}$ roots** are.
