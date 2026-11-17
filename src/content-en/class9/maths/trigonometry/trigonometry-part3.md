# Chapter: Trigonometry (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **Continues from [trigonometry-part2.md](trigonometry-part2.md)** (and the chapter begins in [trigonometry.md](trigonometry.md)).
> **Topics covered in this file:**
> 3. Reciprocal Ratios: cosec, sec, and cot

---

# Topic 3: Reciprocal Ratios: cosec, sec, and cot

In Topic 2, we learned the three primary trigonometric ratios: $\sin \theta$, $\cos \theta$, and $\tan \theta$. Each ratio divides one side of a right triangle by another, and its value depends solely on the angle—never on the size of the triangle. One natural question remains: if we **flip** each ratio upside down (take its reciprocal), do we get useful ratios too? Yes! And to see why, let us step into a bakery.

---

## Leo's Flipped Recipe

Chef Elena runs a busy neighbourhood bakery. Today she is making a special glaze, and the recipe card reads:

> **$\text{sugar} : \text{flour} = 1 : 3$**

That means $1$ part sugar to $3$ parts flour. Elena asks her assistant, Leo, "Please measure $100\text{ g}$ of sugar and $300\text{ g}$ of flour."

Leo was in a rush. He read the card backwards as "$\text{flour} : \text{sugar} = 1 : 3$" and measured **$100\text{ g}$ of flour and $300\text{ g}$ of sugar**. When the glaze came out, it was so overwhelmingly sweet that nobody could swallow a single bite!

Elena tasted a tiny drop and laughed. "Leo, you flipped the ratio! Still, flipping a ratio isn't wrong by itself—it just creates a **new ratio**. The recipe compares sugar to flour: $1$ to $3$. The flipped ratio compares flour to sugar: $3$ to $1$. It describes the exact same mixture, just told from the other side."

Leo asked, "Chef, when would we actually want the flipped ratio?"

"Whenever the question is flipped," Elena replied. "Suppose I ask: 'If we have $600\text{ g}$ of flour, how much sugar do we need?' Thinking in terms of flour first makes the calculation instant."

The exact same idea applies to our three triangle ratios ($\sin$, $\cos$, and $\tan$). Flipping each fraction gives **three new ratios**, called **cosecant** (written **$\operatorname{cosec} \theta$** or internationally **$\csc \theta$**), **secant** (**$\sec \theta$**), and **cotangent** (**$\cot \theta$**). In this topic, we will master all three—and then check back on Leo's flipped recipe.

> **Notation note:** In many textbooks and regions, cosecant is written **$\operatorname{cosec} \theta$**, while international notation and scientific calculators commonly shorten it to **$\csc \theta$**. Both mean the exact same ratio; we will use **$\csc \theta$** (and occasionally remind you of $\operatorname{cosec} \theta$) throughout this chapter.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Reciprocal** | Flipping a fraction upside down: numerator goes to the bottom, denominator goes to the top | The reciprocal of $\frac{3}{5}$ is $\frac{5}{3}$ |
| **$\csc \theta$ ($\operatorname{cosec} \theta$)** | $\frac{\text{hyp}}{\text{opp}}$; the reciprocal of $\sin \theta$ | If $\sin \theta = \frac{3}{5}$, then $\csc \theta = \frac{5}{3}$ |
| **$\sec \theta$** | $\frac{\text{hyp}}{\text{adj}}$; the reciprocal of $\cos \theta$ | If $\cos \theta = \frac{4}{5}$, then $\sec \theta = \frac{5}{4}$ |
| **$\cot \theta$** | $\frac{\text{adj}}{\text{opp}}$; the reciprocal of $\tan \theta$ | If $\tan \theta = \frac{3}{4}$, then $\cot \theta = \frac{4}{3}$ |
| **Reciprocal pair** | A ratio and its flip, whose product is always $1$ | $\sin \theta$ and $\csc \theta$ |

---

## Part A: Three New Ratios

Just as in Topics 1 and 2, take an acute angle $\theta$ in a right-angled triangle, with sides **opposite** ($\text{opp}$), **adjacent** ($\text{adj}$), and **hypotenuse** ($\text{hyp}$). Here are the three reciprocal ratios:

> $$\csc \theta = \frac{\text{hyp}}{\text{opp}}, \qquad \sec \theta = \frac{\text{hyp}}{\text{adj}}, \qquad \cot \theta = \frac{\text{adj}}{\text{opp}}$$

Compare them side by side with our first three ratios:

> $$\sin \theta = \frac{\text{opp}}{\text{hyp}}, \qquad \cos \theta = \frac{\text{adj}}{\text{hyp}}, \qquad \tan \theta = \frac{\text{opp}}{\text{adj}}$$

Look closely—each new ratio is simply the **reciprocal** ($1$ divided by) one of the original three:

> $$\csc \theta = \frac{1}{\sin \theta}, \qquad \sec \theta = \frac{1}{\cos \theta}, \qquad \cot \theta = \frac{1}{\tan \theta}$$

**Check:** Flipping $\sin \theta = \frac{\text{opp}}{\text{hyp}}$ gives $\frac{\text{hyp}}{\text{opp}}$, which is $\csc \theta$ ✅.

### Which Goes with Which? (How to Remember the Pairs)

This is where students most often slip up, so look carefully: **"co-" names do not pair with each other!** The reciprocal of $\cos$ is $\sec$, *not* $\csc$.

Use this simple rule: **"Each pair has one name starting with 'c' and one name NOT starting with 'c'."**

| Starts with s or t (no 'c') | Starts with 'c' | Reciprocal pair |
|---|---|---|
| **$\mathbf{s}$**in | **$\mathbf{c}$**osec ($\csc$) | $\sin \leftrightarrow \csc$ |
| **$\mathbf{s}$**ec | **$\mathbf{c}$**os | $\cos \leftrightarrow \sec$ |
| **$\mathbf{t}$**an | **$\mathbf{c}$**ot | $\tan \leftrightarrow \cot$ |

Look at the pattern: three names start with **c** ($\cos$, $\operatorname{cosec}$/$\csc$, $\cot$) and three do not ($\sin$, $\sec$, $\tan$). Every reciprocal pair matches one of each:
- $\sin$ (no c) $\leftrightarrow$ $\csc$ (starts with c) ✅
- $\cos$ (starts with c) $\leftrightarrow$ $\sec$ (no c) ✅
- $\tan$ (no c) $\leftrightarrow$ $\cot$ (starts with c) ✅

So **$\cos$ pairs with $\sec$, never with $\csc$**. Whenever you are unsure, check the sides: $\cos$ has $\text{adj}$ on top ($\frac{\text{adj}}{\text{hyp}}$), so its flip must have $\text{hyp}$ on top and $\text{adj}$ on the bottom—that is $\sec$.

### Each Reciprocal Pair Multiplies to $1$

Multiplying any fraction by its reciprocal gives $1$ (for instance, $\frac{3}{5} \times \frac{5}{3} = \frac{15}{15} = 1$). The same is true for every trigonometric reciprocal pair:

> $$\sin \theta \cdot \csc \theta = 1, \qquad \cos \theta \cdot \sec \theta = 1, \qquad \tan \theta \cdot \cot \theta = 1$$

---

## Part B: All Six Ratios of One Triangle

Let us use a triangle different from Topic 2's $3\text{-}4\text{-}5$: the **$5\text{-}12\text{-}13$** right triangle. First verify it is right-angled:

$$5^2 + 12^2 = 25 + 144 = 169 = 13^2 \quad ✅$$

In $\triangle ABC$, $\angle B = 90^\circ$, $AB = 12$, $BC = 5$, and $AC = 13$. Looking from $\angle A$:
- $\text{opp} = BC = 5$
- $\text{adj} = AB = 12$
- $\text{hyp} = AC = 13$

| Ratio | From the sides | Value (for $\angle A$) |
|---|---|---|
| $\sin A$ | $5 \div 13$ | $\frac{5}{13}$ |
| $\cos A$ | $12 \div 13$ | $\frac{12}{13}$ |
| $\tan A$ | $5 \div 12$ | $\frac{5}{12}$ |
| $\csc A$ | $13 \div 5$ | $\frac{13}{5}$ |
| $\sec A$ | $13 \div 12$ | $\frac{13}{12}$ |
| $\cot A$ | $12 \div 5$ | $\frac{12}{5}$ |

**Check (multiplying reciprocal pairs):**
- $\sin A \cdot \csc A = \frac{5}{13} \times \frac{13}{5} = \frac{65}{65} = 1$ ✅
- $\cos A \cdot \sec A = \frac{12}{13} \times \frac{13}{12} = \frac{156}{156} = 1$ ✅
- $\tan A \cdot \cot A = \frac{5}{12} \times \frac{12}{5} = \frac{60}{60} = 1$ ✅

---

## Part C: Writing $\tan$ and $\cot$ in Terms of $\sin$ and $\cos$

Here is a very handy connection: you can build $\tan \theta$ and $\cot \theta$ directly out of $\sin \theta$ and $\cos \theta$. Let $\text{opp} = p$, $\text{adj} = b$, and $\text{hyp} = h$. Then:

$$\frac{\sin \theta}{\cos \theta} = \frac{p / h}{b / h}$$

Both fractions share the same denominator $h$. When we divide, the hypotenuse **$h$ cancels out**:

$$\frac{p}{h} \div \frac{b}{h} = \frac{p}{h} \times \frac{h}{b} = \frac{p}{b}$$

And $\frac{p}{b}$ is simply $\frac{\text{opp}}{\text{adj}} = \tan \theta$! Flipping it gives $\cot \theta$:

> $$\tan \theta = \frac{\sin \theta}{\cos \theta}, \qquad \cot \theta = \frac{\cos \theta}{\sin \theta}$$

**Check on the $5\text{-}12\text{-}13$ triangle:**
- $\frac{\sin A}{\cos A} = \frac{5/13}{12/13} = \frac{5}{13} \times \frac{13}{12} = \frac{5}{12} = \tan A$ ✅
- $\frac{\cos A}{\sin A} = \frac{12/13}{5/13} = \frac{12}{13} \times \frac{13}{5} = \frac{12}{5} = \cot A$ ✅

---

## Part D: Worked Examples

### Example 1: Given All Sides, Write All Six Ratios

In $\triangle ABC$, $\angle B = 90^\circ$, $AB = 8$, $BC = 15$, and $AC = 17$. Write all six trigonometric ratios of $\angle A$.

First check Pythagoras: $8^2 + 15^2 = 64 + 225 = 289 = 17^2$ ✅.

Relative to $\angle A$: $\text{opp} = BC = 15$, $\text{adj} = AB = 8$, $\text{hyp} = AC = 17$.
- $\sin A = \mathbf{\frac{15}{17}}$
- $\cos A = \mathbf{\frac{8}{17}}$
- $\tan A = \mathbf{\frac{15}{8}}$
- $\csc A = \mathbf{\frac{17}{15}}$
- $\sec A = \mathbf{\frac{17}{8}}$
- $\cot A = \mathbf{\frac{8}{15}}$

All fractions are already in lowest terms since $8$, $15$, and $17$ share no common factors.

**Check:** $\sin A \cdot \csc A = \frac{15}{17} \times \frac{17}{15} = 1$ ✅, $\cos A \cdot \sec A = \frac{8}{17} \times \frac{17}{8} = 1$ ✅, $\tan A \cdot \cot A = \frac{15}{8} \times \frac{8}{15} = 1$ ✅.

### Example 2: One Side Missing—Pythagoras First

In a right triangle, the side opposite $\theta$ is $20$ and the hypotenuse is $29$. Write all six ratios of $\theta$.

**Step 1:** Find the adjacent side:
$$\text{adj}^2 = 29^2 - 20^2 = 841 - 400 = 441 \implies \text{adj} = \mathbf{21}$$

**Check:** $20^2 + 21^2 = 400 + 441 = 841 = 29^2$ ✅.

**Step 2:** Write all six ratios:
- $\sin \theta = \mathbf{\frac{20}{29}}$
- $\cos \theta = \mathbf{\frac{21}{29}}$
- $\tan \theta = \mathbf{\frac{20}{21}}$
- $\csc \theta = \mathbf{\frac{29}{20}}$
- $\sec \theta = \mathbf{\frac{29}{21}}$
- $\cot \theta = \mathbf{\frac{21}{20}}$

### Example 3: Writing Ratios in Lowest Terms

In a right triangle, the side opposite $\theta$ is $6$ and the hypotenuse is $10$. Write all six ratios in lowest terms.

**Step 1:** $\text{adj}^2 = 10^2 - 6^2 = 100 - 36 = 64 \implies \text{adj} = 8$. Check: $6^2 + 8^2 = 36 + 64 = 100$ ✅.

**Step 2:** Write each ratio and simplify to lowest terms:
- $\sin \theta = \frac{6}{10} = \mathbf{\frac{3}{5}}$
- $\cos \theta = \frac{8}{10} = \mathbf{\frac{4}{5}}$
- $\tan \theta = \frac{6}{8} = \mathbf{\frac{3}{4}}$
- $\csc \theta = \frac{10}{6} = \mathbf{\frac{5}{3}}$
- $\sec \theta = \frac{10}{8} = \mathbf{\frac{5}{4}}$
- $\cot \theta = \frac{8}{6} = \mathbf{\frac{4}{3}}$

**Check:** $\frac{3}{5} \times \frac{5}{3} = 1$ ✅, $\frac{4}{5} \times \frac{5}{4} = 1$ ✅, $\frac{3}{4} \times \frac{4}{3} = 1$ ✅.

Notice these are the exact ratios of the $3\text{-}4\text{-}5$ triangle (since $6\text{-}8\text{-}10$ is simply double $3\text{-}4\text{-}5$). Larger triangle, identical ratios—because ratios depend only on the angle.

### Example 4: Given $\sin$, Write $\csc$ ($\operatorname{cosec}$) Immediately

If $\sin \theta = \frac{4}{5}$, what is $\csc \theta$?

$$\csc \theta = \frac{1}{\sin \theta} = \frac{1}{4/5} = \mathbf{\frac{5}{4}}$$

Simply flip the fraction: **$\csc \theta = \frac{5}{4}$**.

**Check:** $\frac{4}{5} \times \frac{5}{4} = 1$ ✅.

In the exact same way:
- If $\cos \theta = \frac{12}{13}$, then $\sec \theta = \mathbf{\frac{13}{12}}$
- If $\tan \theta = \frac{7}{24}$, then $\cot \theta = \mathbf{\frac{24}{7}}$
- If $\cot \theta = \frac{3}{8}$, then $\tan \theta = \mathbf{\frac{8}{3}}$ (reciprocals work both ways!)

Notice that here we only flipped the given ratio; finding the *other* five ratios from a single ratio is covered in Topic 5.

### Example 5: Surds Case—Sides $1$, $1$, $\sqrt{2}$

The two shorter sides of a right triangle are $1$ and $1$. Then $\text{hyp} = \sqrt{1^2 + 1^2} = \sqrt{2}$.

**Check:** $1^2 + 1^2 = 2 = (\sqrt{2})^2$ ✅.

For either acute angle $\theta$: $\text{opp} = 1$, $\text{adj} = 1$, $\text{hyp} = \sqrt{2}$.
- $\sin \theta = \mathbf{\frac{1}{\sqrt{2}}}$
- $\cos \theta = \mathbf{\frac{1}{\sqrt{2}}}$
- $\tan \theta = \frac{1}{1} = \mathbf{1}$
- $\csc \theta = \frac{\sqrt{2}}{1} = \mathbf{\sqrt{2}}$
- $\sec \theta = \frac{\sqrt{2}}{1} = \mathbf{\sqrt{2}}$
- $\cot \theta = \frac{1}{1} = \mathbf{1}$

Flipping makes surds even cleaner here: flipping $\frac{1}{\sqrt{2}}$ gives $\sqrt{2}$ directly!

**Check:** $\sin \theta \cdot \csc \theta = \frac{1}{\sqrt{2}} \times \sqrt{2} = \frac{\sqrt{2}}{\sqrt{2}} = 1$ ✅, $\tan \theta \cdot \cot \theta = 1 \times 1 = 1$ ✅.

We will discover the exact angle of this triangle in Topic 4.

### Example 6: Checking $\tan = \frac{\sin}{\cos}$ on the $8\text{-}15\text{-}17$ Triangle

From Example 1, for $\angle A$: $\sin A = \frac{15}{17}$ and $\cos A = \frac{8}{17}$.
- $\frac{\sin A}{\cos A} = \frac{15/17}{8/17} = \frac{15}{17} \times \frac{17}{8} = \frac{15}{8} = \tan A$ ✅
- $\frac{\cos A}{\sin A} = \frac{8/17}{15/17} = \frac{8}{17} \times \frac{17}{15} = \frac{8}{15} = \cot A$ ✅

### Example 7: Switching the Angle Changes the Ratios

In Example 1's triangle ($AB = 8$, $BC = 15$, $AC = 17$, $\angle B = 90^\circ$), now look from **$\angle C$**. Opposite and adjacent swap:
- $\text{opp} = AB = 8$
- $\text{adj} = BC = 15$
- $\text{hyp} = AC = 17$

So:
- $\sin C = \mathbf{\frac{8}{17}}$
- $\cos C = \mathbf{\frac{15}{17}}$
- $\tan C = \mathbf{\frac{8}{15}}$
- $\csc C = \mathbf{\frac{17}{8}}$
- $\sec C = \mathbf{\frac{17}{15}}$
- $\cot C = \mathbf{\frac{15}{8}}$

Notice that $\csc A = \frac{17}{15}$, whereas $\csc C = \frac{17}{8}$. Different angle, different ratio—always ask first: **which angle am I looking from?**

---

## Part E: Two Observations (Just Notice These)

### Observation 1: $\sec$ and $\csc$ Are Never Less Than $1$

Because the hypotenuse is always the longest side of a right triangle, both $\sec \theta = \frac{\text{hyp}}{\text{adj}}$ and $\csc \theta = \frac{\text{hyp}}{\text{opp}}$ put the **longest side in the numerator**. Dividing a larger positive length by a smaller one always gives a result **greater than $1$** (or equal to $1$ in the extreme cases of Topic 4).

Look back at every $\sec$ and $\csc$ value we found so far: $\frac{13}{5}$, $\frac{13}{12}$, $\frac{17}{15}$, $\frac{17}{8}$, $\frac{29}{20}$, $\frac{29}{21}$, $\frac{5}{3}$, $\frac{5}{4}$, $\sqrt{2}$. Every single one is greater than $1$ ✅.

So if someone claims $\sec \theta = \frac{3}{4}$ for an acute angle, you know immediately it is impossible because $\frac{3}{4} < 1$.

### Observation 2: As the Angle Gets Smaller, $\cot$ Gets Larger

Take a right triangle whose adjacent side stays fixed at $10$, and shrink the opposite side step by step:

| Opposite | Adjacent | $\cot \theta = \frac{\text{adj}}{\text{opp}}$ |
|---|---|---|
| $5$ | $10$ | $2$ |
| $2$ | $10$ | $5$ |
| $1$ | $10$ | $10$ |
| $0.5$ | $10$ | $20$ |

As the opposite side gets smaller, the triangle gets thinner—meaning angle $\theta$ shrinks toward $0^\circ$—and $\cot \theta$ grows larger and larger! Keep this in mind as a preview for Topic 4.

---

## Back to Leo's Recipe

The bakery recipe said **$\text{sugar} : \text{flour} = 1 : 3$**, or as a fraction, $\frac{\text{sugar}}{\text{flour}} = \frac{1}{3}$.

Its reciprocal is $\frac{\text{flour}}{\text{sugar}} = \frac{3}{1}$, or **$3 : 1$**. That flipped ratio is also completely true for the recipe, except it tells the story from **flour's perspective**: "there is $3$ times as much flour as sugar."

What was Leo's mistake? He confused the flipped ratio with the original one, reading $1 : 3$ as $\text{flour} : \text{sugar}$ instead of $\text{sugar} : \text{flour}$. Both ratios describe the same glaze, so you must keep track of **which quantity sits on top and which sits on the bottom**.

Triangles work the exact same way:
- $\sin \theta = \frac{\text{opp}}{\text{hyp}}$ (opposite on top)
- $\csc \theta = \frac{\text{hyp}}{\text{opp}}$ (hypotenuse on top)

Both tell the same story from opposite ends. As Chef Elena reminded Leo: "Always check which ingredient goes on top!"

---

## Common Pitfalls to Avoid

1. **Mistake 1: Pairing $\cos$ with $\csc$ ($\operatorname{cosec}$).**
   Because both names begin with "co," students often assume $\cos$ and $\csc$ are reciprocals. In fact, **$\cos$ pairs with $\sec$**, while **$\sin$ pairs with $\csc$**. In the $5\text{-}12\text{-}13$ triangle:
   - $\cos A = \frac{12}{13} \implies \sec A = \frac{13}{12}$ ✅
   - $\csc A = \frac{13}{5}$ (the reciprocal of $\sin A = \frac{5}{13}$).
   Remember: one "c" name pairs with one non-"c" name.

2. **Mistake 2: Forgetting to flip when finding the reciprocal.**
   Question: if $\sin \theta = \frac{3}{5}$, find $\csc \theta$.
   - Wrong: $\csc \theta = \frac{3}{5}$.
   - Right: $\csc \theta = \frac{5}{3}$ (flipped upside down).

3. **Mistake 3: Flipping only the numerator or only the denominator.**
   The entire fraction flips at once. The reciprocal of $\frac{4}{5}$ is $\frac{5}{4}$, never $\frac{1/4}{5}$ or $\frac{4}{1/5}$. Always swap the full numerator and denominator, and check by multiplying: $\frac{4}{5} \times \frac{5}{4} = 1$.

4. **Mistake 4: Looking from the wrong angle.**
   As seen in Example 7, $\angle A$ and $\angle C$ have different ratios. Using $\angle A$'s opposite side when asked for $\sec C$ gives the wrong answer. Mark your reference angle first.

5. **Mistake 5: Writing $\frac{1}{\sin \theta}$ as $\sin^{-1} \theta$.**
   Never write $\csc \theta$ as $\sin^{-1} \theta$! On calculators and in higher mathematics, $\sin^{-1} \theta$ means something completely different (the *inverse sine* angle, not the reciprocal). Always write the reciprocal as **$\csc \theta$** (or $\operatorname{cosec} \theta$, or $(\sin \theta)^{-1}$, or $\frac{1}{\sin \theta}$).

---

## Quick Recap

- **$\csc \theta$ ($\operatorname{cosec} \theta$) $= \frac{\text{hyp}}{\text{opp}} = \frac{1}{\sin \theta}$**
- **$\sec \theta = \frac{\text{hyp}}{\text{adj}} = \frac{1}{\cos \theta}$**
- **$\cot \theta = \frac{\text{adj}}{\text{opp}} = \frac{1}{\tan \theta}$**
- **Reciprocal pairs:** $\sin \leftrightarrow \csc$, $\cos \leftrightarrow \sec$, $\tan \leftrightarrow \cot$. Each pair has one "c" name and one non-"c" name ($\cos$ goes with $\sec$, not $\csc$).
- Every reciprocal pair multiplies to $1$: $\sin \theta \cdot \csc \theta = 1$, $\cos \theta \cdot \sec \theta = 1$, $\tan \theta \cdot \cot \theta = 1$.
- **$\tan \theta = \frac{\sin \theta}{\cos \theta}$** and **$\cot \theta = \frac{\cos \theta}{\sin \theta}$** (the hypotenuse cancels out).
- For an acute angle, **$\sec \theta$ and $\csc \theta$ are never less than $1$**.
- As an acute angle gets smaller, $\cot \theta$ gets larger.
- Never write $\frac{1}{\sin \theta}$ as $\sin^{-1} \theta$.

---

## Practice Questions

1. In $\triangle ABC$, $\angle B = 90^\circ$, $AB = 9$, $BC = 12$, and $AC = 15$. Write all six trigonometric ratios of $\angle A$ in lowest terms. Then write all six ratios of $\angle C$.

2. In a right triangle, the side opposite angle $\theta$ is $8$ and the hypotenuse is $17$. Find the third side and write all six ratios of $\theta$.

3. Write the reciprocal ratio:
   (a) If $\sin \theta = \frac{7}{25}$, find $\csc \theta$.
   (b) If $\cos \theta = \frac{3}{5}$, find $\sec \theta$.
   (c) If $\tan \theta = \frac{2}{3}$, find $\cot \theta$.
   (d) If $\sec \theta = \frac{13}{12}$, find $\cos \theta$.

4. A right triangle has two shorter sides of length $1$ and $2$. Find the hypotenuse and write all six ratios for the angle opposite the side of length $1$.

5. A student looked at the $5\text{-}12\text{-}13$ right triangle (with angle $A$ opposite $5$) and wrote "$\sec A = \frac{13}{5}$." Find the mistake and give the correct value of $\sec A$. Which ratio is $\frac{13}{5}$ actually?

6. For the right triangle with sides $8, 15, 17$ (angle $A$ opposite $15$), verify that $\tan A = \frac{\sin A}{\cos A}$ and $\cot A = \frac{\cos A}{\sin A}$.

7. State True or False:
   (a) $\cos \theta$ and $\csc \theta$ are reciprocals of each other.
   (b) For an acute angle, $\sec \theta$ can be equal to $\frac{3}{4}$.
   (c) $\tan \theta \cdot \cot \theta = 1$.
   (d) If $\sin \theta = 0.5$, then $\csc \theta = 2$.
   (e) $\csc \theta$ can also be written as $\sin^{-1} \theta$.

8. In a right triangle, the side adjacent to angle $A$ is $12$. Find $\cot A$ when the opposite side is (a) $6$ and (b) $3$. Which triangle has the smaller angle $A$? What do you notice about $\cot A$?

### Answers

1. Since $\angle B = 90^\circ$, relative to $\angle A$: $\text{opp} = BC = 12$, $\text{adj} = AB = 9$, $\text{hyp} = AC = 15$.
   (Check: $9^2 + 12^2 = 81 + 144 = 225 = 15^2$ ✅.)
   - $\sin A = \frac{12}{15} = \mathbf{\frac{4}{5}}$
   - $\cos A = \frac{9}{15} = \mathbf{\frac{3}{5}}$
   - $\tan A = \frac{12}{9} = \mathbf{\frac{4}{3}}$
   - $\csc A = \frac{15}{12} = \mathbf{\frac{5}{4}}$
   - $\sec A = \frac{15}{9} = \mathbf{\frac{5}{3}}$
   - $\cot A = \frac{9}{12} = \mathbf{\frac{3}{4}}$

   Relative to $\angle C$: $\text{opp} = AB = 9$, $\text{adj} = BC = 12$, $\text{hyp} = 15$.
   - $\sin C = \frac{9}{15} = \mathbf{\frac{3}{5}}$
   - $\cos C = \frac{12}{15} = \mathbf{\frac{4}{5}}$
   - $\tan C = \frac{9}{12} = \mathbf{\frac{3}{4}}$
   - $\csc C = \frac{15}{9} = \mathbf{\frac{5}{3}}$
   - $\sec C = \frac{15}{12} = \mathbf{\frac{5}{4}}$
   - $\cot C = \frac{12}{9} = \mathbf{\frac{4}{3}}$

   Check: $\sin A \cdot \csc A = \frac{4}{5} \times \frac{5}{4} = 1$ ✅, $\cos C \cdot \sec C = \frac{4}{5} \times \frac{5}{4} = 1$ ✅.

2. $\text{adj}^2 = 17^2 - 8^2 = 289 - 64 = 225 \implies \text{adj} = \mathbf{15}$.
   (Check: $8^2 + 15^2 = 64 + 225 = 289 = 17^2$ ✅.)
   - $\sin \theta = \mathbf{\frac{8}{17}}$, $\cos \theta = \mathbf{\frac{15}{17}}$, $\tan \theta = \mathbf{\frac{8}{15}}$
   - $\csc \theta = \mathbf{\frac{17}{8}}$, $\sec \theta = \mathbf{\frac{17}{15}}$, $\cot \theta = \mathbf{\frac{15}{8}}$

3. (a) $\csc \theta = \mathbf{\frac{25}{7}}$ ($\frac{7}{25} \times \frac{25}{7} = 1$ ✅)
   (b) $\sec \theta = \mathbf{\frac{5}{3}}$ ($\frac{3}{5} \times \frac{5}{3} = 1$ ✅)
   (c) $\cot \theta = \mathbf{\frac{3}{2}}$ ($\frac{2}{3} \times \frac{3}{2} = 1$ ✅)
   (d) $\cos \theta = \mathbf{\frac{12}{13}}$ (reciprocals work both ways; $\frac{13}{12} \times \frac{12}{13} = 1$ ✅)

4. $\text{hyp} = \sqrt{1^2 + 2^2} = \sqrt{1 + 4} = \mathbf{\sqrt{5}}$. (Check: $1 + 4 = 5 = (\sqrt{5})^2$ ✅.)
   For $\theta$ opposite the side of length $1$: $\text{opp} = 1$, $\text{adj} = 2$.
   - $\sin \theta = \mathbf{\frac{1}{\sqrt{5}}}$, $\cos \theta = \mathbf{\frac{2}{\sqrt{5}}}$, $\tan \theta = \mathbf{\frac{1}{2}}$
   - $\csc \theta = \mathbf{\sqrt{5}}$, $\sec \theta = \mathbf{\frac{\sqrt{5}}{2}}$, $\cot \theta = \mathbf{2}$
   Check: $\frac{1}{\sqrt{5}} \times \sqrt{5} = 1$ ✅, $\frac{2}{\sqrt{5}} \times \frac{\sqrt{5}}{2} = 1$ ✅, $\frac{1}{2} \times 2 = 1$ ✅.

5. **Mistake:** $\sec A = \frac{\text{hyp}}{\mathbf{\text{adj}}}$, and relative to angle $A$, the adjacent side is $12$ ($5$ is opposite). The student used the opposite side instead of the adjacent side.
   - **Correct value:** $\sec A = \mathbf{\frac{13}{12}}$.
   - $\frac{13}{5} = \frac{\text{hyp}}{\text{opp}}$ is actually **$\csc A$** ($\operatorname{cosec} A$).

6. Relative to $A$: $\text{opp} = 15$, $\text{adj} = 8$, $\text{hyp} = 17$, so $\sin A = \frac{15}{17}$ and $\cos A = \frac{8}{17}$.
   - $\frac{\sin A}{\cos A} = \frac{15/17}{8/17} = \frac{15}{17} \times \frac{17}{8} = \frac{15}{8} = \tan A$ ✅
   - $\frac{\cos A}{\sin A} = \frac{8/17}{15/17} = \frac{8}{17} \times \frac{17}{15} = \frac{8}{15} = \cot A$ ✅

7. (a) **False** ❌. The reciprocal of $\cos \theta$ is $\sec \theta$; $\csc \theta$ is the reciprocal of $\sin \theta$.
   (b) **False** ❌. $\sec \theta = \frac{\text{hyp}}{\text{adj}}$, and since the hypotenuse is the longest side, $\sec \theta \ge 1$ for an acute angle; $\frac{3}{4} < 1$.
   (c) **True** ✅. They are reciprocals of each other.
   (d) **True** ✅. $\csc \theta = \frac{1}{0.5} = 2$.
   (e) **False** ❌. $\frac{1}{\sin \theta}$ is written $\csc \theta$ (or $\operatorname{cosec} \theta$); $\sin^{-1} \theta$ means something different (inverse sine).

8. (a) Opposite $= 6$: $\cot A = \frac{12}{6} = \mathbf{2}$.
   (b) Opposite $= 3$: $\cot A = \frac{12}{3} = \mathbf{4}$.
   The triangle with opposite side $3$ has the **smaller angle $A$** (the triangle is flatter). Notice that as angle $A$ gets smaller, $\cot A$ gets **larger** (increasing from $2$ to $4$).

---

You now have all six trigonometric ratios at your fingertips. Always follow the same order: identify your angle, label opposite and adjacent, and then write the ratio.

**What's next?** So far, we have always been given the side lengths of a triangle first. In Topic 4, we will discover how to find the **exact trigonometric ratios** of five special angles—$0^\circ, 30^\circ, 45^\circ, 60^\circ$, and $90^\circ$—without a calculator or reference table!
