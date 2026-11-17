# Chapter: Trigonometry (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **Continues from [trigonometry-part3.md](trigonometry-part3.md)** (and see [trigonometry.md](trigonometry.md) for the start of the chapter).
> **Helpful background:** [Pythagoras Theorem](../pythagoras-theorem/pythagoras-theorem.md) and surds in [Number Systems Part 4](../number-systems/number-systems-part4.md) (simplifying) and [Number Systems Part 5](../number-systems/number-systems-part5.md) (rationalising denominators).
> **Topics covered in this file:**
> 4. Trigonometric Ratios of Standard Angles: $0^\circ$, $30^\circ$, $45^\circ$, $60^\circ$, and $90^\circ$

---

# Topic 4: Trigonometric Ratios of Standard Angles: 0°, 30°, 45°, 60°, and 90°

So far, we have named the three sides of a right triangle, defined $\sin$, $\cos$, and $\tan$, and added their reciprocals $\csc$, $\sec$, and $\cot$—giving us **all six ratios**. For most angles, finding the numerical value of a ratio requires a reference table or a scientific calculator. Are there any special angles whose trigonometric ratios we can compute **exactly, by hand**, without any table or calculator?

Yes! Five angles stand out: **$0^\circ, 30^\circ, 45^\circ, 60^\circ$, and $90^\circ$**. These are called the **standard angles**, and we can derive their exact ratios using nothing more than the Pythagoras theorem and two simple triangles.

---

## The Secret of the Set-Squares

In a stationery workshop, sheets of clear plastic glide off a cutting press. Supervisor Dr. Bennett stands beside a workbench where Maya is trimming sheets into the two classic triangles found in every geometry set: one has angles **$30^\circ, 60^\circ, 90^\circ$**, and the other has angles **$45^\circ, 45^\circ, 90^\circ$**.

Maya pauses and asks, "Dr. Bennett, why does every geometry box in the world come with these exact two set-squares? Why not a $37^\circ$ or $52^\circ$ set-square?"

Dr. Bennett smiles. "Because the sides of these two triangles fit together in **remarkably clean exact ratios**. We can work out every trigonometric ratio for $30^\circ$, $45^\circ$, and $60^\circ$ **exactly**, without a calculator or lookup table. An angle like $37^\circ$ doesn't produce clean exact fractions like these."

Maya leans in. "We can calculate them *exactly*? How?"

"Easy," Dr. Bennett says, picking up a square plastic tile. "Let's cut this square in half first."

In this topic, we will follow Dr. Bennett and Maya step by step: using one square and one equilateral triangle to unlock the exact values of all six trigonometric ratios for all five standard angles.

> **Note:** Remember $\sqrt{2} \approx 1.414$ and $\sqrt{3} \approx 1.732$ for quick decimal checks. Our final answers will be **exact**—written with $\sqrt{2}$ and $\sqrt{3}$ rather than rounded decimals.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Standard angles** | The five special angles whose trigonometric ratios have clean exact values | $0^\circ, 30^\circ, 45^\circ, 60^\circ, 90^\circ$ |
| **Exact value** | A value kept in fraction/surd form rather than rounded to a decimal | $\sin 60^\circ = \frac{\sqrt{3}}{2}$ |
| **Set-square** | A triangular drawing tool from a geometry kit ($30^\circ\text{-}60^\circ\text{-}90^\circ$ or $45^\circ\text{-}45^\circ\text{-}90^\circ$) | Maya's two plastic triangles |
| **Limiting idea** | Watching what happens to the sides as an angle shrinks toward $0^\circ$ or grows toward $90^\circ$ | Letting $\theta$ approach $0^\circ$ |
| **Not defined** | An expression with no valid numerical value because it requires dividing by $0$ | $\tan 90^\circ$ |

---

## Part A: The $45^\circ\text{-}45^\circ\text{-}90^\circ$ Triangle

Dr. Bennett takes a square of side **$1\text{ cm}$** and cuts it cleanly along a **diagonal**. That produces an isosceles right-angled triangle:

- Both legs (sides of the original square) have length $1$ and $1$.
- The diagonal bisects the $90^\circ$ corners of the square, so the triangle's angles are **$45^\circ, 45^\circ, 90^\circ$**.
- By Pythagoras, the hypotenuse (the diagonal) is:

> $$\text{hyp}^2 = 1^2 + 1^2 = 1 + 1 = 2 \implies \text{hyp} = \mathbf{\sqrt{2}}$$

So the side ratio of every $45^\circ\text{-}45^\circ\text{-}90^\circ$ triangle is **$1 : 1 : \sqrt{2}$**.

Stand at either $45^\circ$ angle: since both legs equal $1$, we have $\text{opp} = 1$, $\text{adj} = 1$, and $\text{hyp} = \sqrt{2}$:

- $\sin 45^\circ = \frac{\text{opp}}{\text{hyp}} = \mathbf{\frac{1}{\sqrt{2}}}$
- $\cos 45^\circ = \frac{\text{adj}}{\text{hyp}} = \mathbf{\frac{1}{\sqrt{2}}}$
- $\tan 45^\circ = \frac{\text{opp}}{\text{adj}} = \frac{1}{1} = \mathbf{1}$

Now take their reciprocals (from Topic 3):

- $\csc 45^\circ = \frac{\sqrt{2}}{1} = \mathbf{\sqrt{2}}$
- $\sec 45^\circ = \frac{\sqrt{2}}{1} = \mathbf{\sqrt{2}}$
- $\cot 45^\circ = \frac{1}{1} = \mathbf{1}$

**Rationalising $\frac{1}{\sqrt{2}}$:** Using the rationalising method from [Number Systems Part 5](../number-systems/number-systems-part5.md), multiply top and bottom by $\sqrt{2}$:

$$\frac{1}{\sqrt{2}} = \frac{1 \times \sqrt{2}}{\sqrt{2} \times \sqrt{2}} = \mathbf{\frac{\sqrt{2}}{2}}$$

So **$\sin 45^\circ = \cos 45^\circ = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$**. Both forms are completely equivalent; writing $\frac{\sqrt{2}}{2}$ in our main table makes a neat pattern jump right off the page!

**Check:** $\frac{\sqrt{2}}{2} \approx \frac{1.414}{2} = 0.707$, and $\frac{1}{\sqrt{2}} \approx \frac{1}{1.414} = 0.707$ ✅. And $\sin 45^\circ = \cos 45^\circ$ makes total sense because both legs are equal.

---

## Part B: The $30^\circ\text{-}60^\circ\text{-}90^\circ$ Triangle

Now for the second set-square. Dr. Bennett takes an **equilateral triangle** (all three sides equal, all three angles $60^\circ$) with **side length $2\text{ cm}$**, and drops a **perpendicular** straight down from the top vertex to the opposite base.

That perpendicular altitude does three things at once:
- Splits the base into two equal halves of length $1$ and $1$
- Splits the top $60^\circ$ angle into two equal angles of $30^\circ$ and $30^\circ$
- Divides the equilateral triangle into two identical right triangles

Look at one of those right triangles:
- Hypotenuse $= 2$ (a side of the equilateral triangle)
- Shorter leg (half the base) $= 1$
- Height (perpendicular) by Pythagoras:

> $$\text{height}^2 + 1^2 = 2^2 \implies \text{height}^2 = 4 - 1 = 3 \implies \text{height} = \mathbf{\sqrt{3}}$$

This triangle has angles **$30^\circ, 60^\circ, 90^\circ$**, and sides in the ratio **$1 : \sqrt{3} : 2$**.

Memory tip: the **smallest angle ($30^\circ$) sits opposite the shortest side ($1$)**, and the **largest angle ($90^\circ$) sits opposite the longest side ($2$)**.

### Ratios for $30^\circ$

Looking from $30^\circ$: $\text{opp} = 1$, $\text{adj} = \sqrt{3}$, $\text{hyp} = 2$.

- $\sin 30^\circ = \mathbf{\frac{1}{2}}$
- $\cos 30^\circ = \mathbf{\frac{\sqrt{3}}{2}}$
- $\tan 30^\circ = \frac{1}{\sqrt{3}} = \frac{1 \times \sqrt{3}}{\sqrt{3} \times \sqrt{3}} = \mathbf{\frac{\sqrt{3}}{3}}$

### Ratios for $60^\circ$

Looking from $60^\circ$: $\text{opp} = \sqrt{3}$, $\text{adj} = 1$, $\text{hyp} = 2$.

- $\sin 60^\circ = \mathbf{\frac{\sqrt{3}}{2}}$
- $\cos 60^\circ = \mathbf{\frac{1}{2}}$
- $\tan 60^\circ = \frac{\sqrt{3}}{1} = \mathbf{\sqrt{3}}$

### Reciprocal Ratios

- $\csc 30^\circ = \mathbf{2}$, $\sec 30^\circ = \frac{2}{\sqrt{3}} = \mathbf{\frac{2\sqrt{3}}{3}}$, $\cot 30^\circ = \mathbf{\sqrt{3}}$
- $\csc 60^\circ = \frac{2}{\sqrt{3}} = \mathbf{\frac{2\sqrt{3}}{3}}$, $\sec 60^\circ = \mathbf{2}$, $\cot 60^\circ = \frac{1}{\sqrt{3}} = \mathbf{\frac{\sqrt{3}}{3}}$

**Check:** $\sin 30^\circ \cdot \csc 30^\circ = \frac{1}{2} \times 2 = 1$ ✅. $\tan 60^\circ \cdot \cot 60^\circ = \sqrt{3} \times \frac{1}{\sqrt{3}} = 1$ ✅. Also $\frac{\sqrt{3}}{2} \approx \frac{1.732}{2} = 0.866 < 1$ ✅.

Notice that $\sin 30^\circ = \cos 60^\circ$ and $\sin 60^\circ = \cos 30^\circ$—because they come from the exact same triangle viewed from its two acute corners (we will explore this fully in Topic 6).

---

## Part C: $0^\circ$ and $90^\circ$ (Thinking with Limits)

What about $0^\circ$ and $90^\circ$? You cannot actually draw a real triangle with a $0^\circ$ angle (it flattens into a single straight segment!). Instead, we use **an intuitive limiting idea**.

> **Note:** Formal limits are a topic for higher classes. Here, we simply watch what happens to the side lengths as the angle approaches $0^\circ$ or $90^\circ$.

Keep the hypotenuse fixed at **$10$** and shrink angle $\theta$ closer and closer to $0^\circ$:

| $\theta$ | Opposite (approx.) | Adjacent (approx.) | $\sin \theta$ | $\cos \theta$ |
|---|---|---|---|---|
| $30^\circ$ | $5$ | $8.66$ | $0.5$ | $0.866$ |
| $10^\circ$ | $1.74$ | $9.85$ | $0.174$ | $0.985$ |
| $1^\circ$ | $0.17$ | $10.0$ | $0.017$ | $1.000$ |

Watch what happens as $\theta$ gets smaller and the triangle flattens out:
- The **opposite side** shrinks toward **$0$**.
- The **adjacent side** grows until it matches the **hypotenuse**.

So at $\theta \to 0^\circ$:
- **$\sin 0^\circ = \frac{0}{\text{hyp}} = 0$**
- **$\cos 0^\circ = \frac{\text{hyp}}{\text{hyp}} = 1$**
- **$\tan 0^\circ = \frac{0}{\text{adj}} = 0$**

Now reverse the experiment and let $\theta$ grow toward $90^\circ$. Again the triangle becomes razor-thin, except this time the **adjacent side shrinks toward $0$** while the **opposite side grows to match the hypotenuse**. So at $\theta \to 90^\circ$:
- **$\sin 90^\circ = \frac{\text{hyp}}{\text{hyp}} = 1$**
- **$\cos 90^\circ = \frac{0}{\text{hyp}} = 0$**
- **$\tan 90^\circ = \frac{\text{opp}}{0}$**, which is **not defined**, because division by $0$ is impossible!

### Which Ratios Are Not Defined?

Check every reciprocal ratio at $0^\circ$ and $90^\circ$ for division by $0$:

| Ratio | How it is formed | Value |
|---|---|---|
| $\csc 0^\circ$ | $\frac{1}{\sin 0^\circ} = \frac{1}{0}$ | **not defined** |
| $\sec 0^\circ$ | $\frac{1}{\cos 0^\circ} = \frac{1}{1}$ | **$1$** |
| $\cot 0^\circ$ | $\frac{\cos 0^\circ}{\sin 0^\circ} = \frac{1}{0}$ | **not defined** |
| $\csc 90^\circ$ | $\frac{1}{\sin 90^\circ} = \frac{1}{1}$ | **$1$** |
| $\sec 90^\circ$ | $\frac{1}{\cos 90^\circ} = \frac{1}{0}$ | **not defined** |
| $\cot 90^\circ$ | $\frac{\cos 90^\circ}{\sin 90^\circ} = \frac{0}{1}$ | **$0$** |

Together with $\tan 90^\circ$, there are exactly **four** undefined standard values: **$\csc 0^\circ$, $\cot 0^\circ$, $\sec 90^\circ$, and $\tan 90^\circ$**. Every other entry in the table is a definite number.

---

## Part D: The Complete Standard-Angle Table

| $\theta$ | $\sin \theta$ | $\cos \theta$ | $\tan \theta$ | $\csc \theta$ | $\sec \theta$ | $\cot \theta$ |
|---|---|---|---|---|---|---|
| **$0^\circ$** | $0$ | $1$ | $0$ | not defined | $1$ | not defined |
| **$30^\circ$** | $\frac{1}{2}$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{\sqrt{3}}$ ($= \frac{\sqrt{3}}{3}$) | $2$ | $\frac{2}{\sqrt{3}}$ ($= \frac{2\sqrt{3}}{3}$) | $\sqrt{3}$ |
| **$45^\circ$** | $\frac{\sqrt{2}}{2}$ ($= \frac{1}{\sqrt{2}}$) | $\frac{\sqrt{2}}{2}$ ($= \frac{1}{\sqrt{2}}$) | $1$ | $\sqrt{2}$ | $\sqrt{2}$ | $1$ |
| **$60^\circ$** | $\frac{\sqrt{3}}{2}$ | $\frac{1}{2}$ | $\sqrt{3}$ | $\frac{2}{\sqrt{3}}$ ($= \frac{2\sqrt{3}}{3}$) | $2$ | $\frac{1}{\sqrt{3}}$ ($= \frac{\sqrt{3}}{3}$) |
| **$90^\circ$** | $1$ | $0$ | not defined | $1$ | not defined | $0$ |

### Memory Pattern (The $\sin$ Row)

To rebuild the entire table from scratch in seconds, write the $\sin$ column for $0^\circ, 30^\circ, 45^\circ, 60^\circ, 90^\circ$ as:

> $$\frac{\sqrt{0}}{2}, \quad \frac{\sqrt{1}}{2}, \quad \frac{\sqrt{2}}{2}, \quad \frac{\sqrt{3}}{2}, \quad \frac{\sqrt{4}}{2}$$

Simplify each one:
- $\frac{\sqrt{0}}{2} = 0$
- $\frac{\sqrt{1}}{2} = \frac{1}{2}$
- $\frac{\sqrt{2}}{2}$ (equals $\frac{1}{\sqrt{2}}$)
- $\frac{\sqrt{3}}{2}$
- $\frac{\sqrt{4}}{2} = \frac{2}{2} = 1$

That gives the $\sin$ values in order: **$0, \frac{1}{2}, \frac{\sqrt{2}}{2}, \frac{\sqrt{3}}{2}, 1$** ✅.

**The $\cos$ values are the exact same sequence in reverse:** $1, \frac{\sqrt{3}}{2}, \frac{\sqrt{2}}{2}, \frac{1}{2}, 0$.

**The $\tan$ values come from $\frac{\sin \theta}{\cos \theta}$:** divide each $\sin$ entry by its matching $\cos$ entry. For instance, $\tan 30^\circ = \frac{1/2}{\sqrt{3}/2} = \frac{1}{\sqrt{3}}$ ✅, and $\tan 60^\circ = \frac{\sqrt{3}/2}{1/2} = \sqrt{3}$ ✅. Flip $\sin$, $\cos$, and $\tan$ to get $\csc$, $\sec$, and $\cot$!

---

## Part E: Worked Examples (Exact Values)

All of the examples below use exact values from the table—no calculator needed.

### Example 1: $\sin 30^\circ + \cos 60^\circ$

$\sin 30^\circ = \frac{1}{2}$ and $\cos 60^\circ = \frac{1}{2}$.

$$\frac{1}{2} + \frac{1}{2} = \mathbf{1}$$

**Check:** $0.5 + 0.5 = 1.0$ ✅.

### Example 2: $2\tan 45^\circ + \cos 60^\circ - \sin 30^\circ$

$\tan 45^\circ = 1$, $\cos 60^\circ = \frac{1}{2}$, $\sin 30^\circ = \frac{1}{2}$.

$$2(1) + \frac{1}{2} - \frac{1}{2} = 2 + 0 = \mathbf{2}$$

**Check:** $2(1) + 0.5 - 0.5 = 2.0$ ✅.

### Example 3: $\sin 60^\circ \cos 30^\circ + \cos 60^\circ \sin 30^\circ$

$\sin 60^\circ = \frac{\sqrt{3}}{2}$, $\cos 30^\circ = \frac{\sqrt{3}}{2}$, $\cos 60^\circ = \frac{1}{2}$, $\sin 30^\circ = \frac{1}{2}$.

- First term: $\left(\frac{\sqrt{3}}{2}\right) \times \left(\frac{\sqrt{3}}{2}\right) = \frac{3}{4}$
- Second term: $\left(\frac{1}{2}\right) \times \left(\frac{1}{2}\right) = \frac{1}{4}$

$$\frac{3}{4} + \frac{1}{4} = \frac{4}{4} = \mathbf{1}$$

**Check:** $0.75 + 0.25 = 1.0$ ✅.

### Example 4: $4\sin 60^\circ - 3\tan 30^\circ$

$\sin 60^\circ = \frac{\sqrt{3}}{2}$ and $\tan 30^\circ = \frac{1}{\sqrt{3}}$.

- $4 \times \frac{\sqrt{3}}{2} = 2\sqrt{3}$
- $3 \times \frac{1}{\sqrt{3}} = \frac{3}{\sqrt{3}} = \frac{3\sqrt{3}}{\sqrt{3}\cdot\sqrt{3}} = \frac{3\sqrt{3}}{3} = \sqrt{3}$

$$2\sqrt{3} - \sqrt{3} = \mathbf{\sqrt{3}} \quad (\approx 1.732)$$

**Check:** $4(0.8660) - 3(0.5774) \approx 3.464 - 1.732 = 1.732 \approx \sqrt{3}$ ✅.

Notice how keeping exact surds revealed the clean answer $\sqrt{3}$, whereas rounding early to decimals hides the exact result.

### Example 5: $\csc 30^\circ + \sec 60^\circ - \cot 45^\circ$

$\csc 30^\circ = 2$, $\sec 60^\circ = 2$, $\cot 45^\circ = 1$.

$$2 + 2 - 1 = \mathbf{3}$$

**Check:** $\frac{1}{\sin 30^\circ} + \frac{1}{\cos 60^\circ} - \frac{1}{\tan 45^\circ} = 2 + 2 - 1 = 3$ ✅.

### Example 6: $\sin 45^\circ \cos 45^\circ + \tan 30^\circ \tan 60^\circ$

$\sin 45^\circ = \cos 45^\circ = \frac{\sqrt{2}}{2}$, $\tan 30^\circ = \frac{1}{\sqrt{3}}$, $\tan 60^\circ = \sqrt{3}$.

- First term: $\left(\frac{\sqrt{2}}{2}\right) \times \left(\frac{\sqrt{2}}{2}\right) = \frac{2}{4} = \frac{1}{2}$
- Second term: $\left(\frac{1}{\sqrt{3}}\right) \times \sqrt{3} = 1$

$$\frac{1}{2} + 1 = \mathbf{\frac{3}{2}}$$

**Check:** $0.5 + 1.0 = 1.5$ ✅.

### Example 7: Maya's Set-Square (The Workshop Problem)

Maya needs to cut a **$30^\circ\text{-}60^\circ\text{-}90^\circ$ set-square** with a **hypotenuse of $20\text{ cm}$**. How long should she cut the two legs?

- For the shorter leg (opposite $30^\circ$):
  $$\sin 30^\circ = \frac{\text{opp}}{\text{hyp}} \implies \text{opp} = 20 \times \sin 30^\circ = 20 \times \frac{1}{2} = \mathbf{10\text{ cm}}$$
- For the longer leg (opposite $60^\circ$):
  $$\sin 60^\circ = \frac{\text{opp}}{\text{hyp}} \implies \text{opp} = 20 \times \sin 60^\circ = 20 \times \frac{\sqrt{3}}{2} = \mathbf{10\sqrt{3}\text{ cm}} \approx 10 \times 1.732 = \mathbf{17.32\text{ cm}}$$

Notice that $10 : 10\sqrt{3} : 20$ is simply $1 : \sqrt{3} : 2$ scaled up by $10$!

**Check (Pythagoras):** $10^2 + (10\sqrt{3})^2 = 100 + 300 = 400 = 20^2$ ✅.

**Bonus:** If Maya also cuts a $45^\circ\text{-}45^\circ\text{-}90^\circ$ set-square with a $20\text{ cm}$ hypotenuse, each equal leg has length $20 \times \sin 45^\circ = 20 \times \frac{\sqrt{2}}{2} = 10\sqrt{2}\text{ cm} \approx 14.14\text{ cm}$. Check: $(10\sqrt{2})^2 + (10\sqrt{2})^2 = 200 + 200 = 400 = 20^2$ ✅.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Swapping $\sin 30^\circ$ and $\sin 60^\circ$.**
   $\sin 30^\circ = \mathbf{\frac{1}{2}}$ (smaller angle, smaller value) and $\sin 60^\circ = \mathbf{\frac{\sqrt{3}}{2}}$ (larger angle, larger value). As the angle increases from $0^\circ$ to $90^\circ$, $\sin \theta$ grows steadily from $0$ to $1$. Since $0.5 < 0.866$, $\frac{1}{2}$ belongs to $30^\circ$ and $\frac{\sqrt{3}}{2}$ belongs to $60^\circ$.

2. **Mistake 2: Writing $\tan 30^\circ = \sqrt{3}$.**
   Correct: $\tan 30^\circ = \mathbf{\frac{1}{\sqrt{3}}} \approx 0.577$, while $\mathbf{\sqrt{3}} \approx 1.732$ is $\tan 60^\circ$. At $30^\circ$, the shorter side ($1$) is opposite the angle, making $\frac{\text{opp}}{\text{adj}} = \frac{1}{\sqrt{3}} < 1$.

3. **Mistake 3: Treating $\tan 90^\circ$ as a number (or writing "$\infty$").**
   $\tan 90^\circ$ involves dividing by $0$, which has no value in arithmetic. Always write **not defined** (never write $1$, $0$, or treat $\infty$ as an ordinary number in equations). The same applies to $\sec 90^\circ$, $\csc 0^\circ$, and $\cot 0^\circ$.

4. **Mistake 4: Thinking $\sin 0^\circ = 1$.**
   At $\theta = 0^\circ$, the opposite side shrinks to $0$, so $\sin 0^\circ = \mathbf{0}$. It is $\cos 0^\circ$ (and $\sin 90^\circ$) that equals $1$. Remember: "$\sin$ starts at $0$ and climbs to $1$; $\cos$ starts at $1$ and drops to $0$."

5. **Mistake 5: Mixing up the $\sin$ and $\cos$ sequences.**
   $\sin$ runs **$0, \frac{1}{2}, \frac{\sqrt{2}}{2}, \frac{\sqrt{3}}{2}, 1$**, while $\cos$ runs in reverse: **$1, \frac{\sqrt{3}}{2}, \frac{\sqrt{2}}{2}, \frac{1}{2}, 0$**. Writing $\sin 60^\circ = \frac{1}{2}$ means you read the $\cos$ line by mistake!

6. **Mistake 6: Replacing exact surds with rounded decimals too early.**
   In Example 4, replacing $\sin 60^\circ$ with $0.866$ and $\tan 30^\circ$ with $0.577$ gives $1.733$, hiding the exact answer $\sqrt{3}$ and introducing rounding error. Keep exact surds whenever a question asks for an exact value; use decimals only for real-world measurements or sense-checks.

---

## Quick Recap

- **$45^\circ\text{-}45^\circ\text{-}90^\circ$ triangle:** sides $1 : 1 : \sqrt{2}$. $\sin 45^\circ = \cos 45^\circ = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$, $\tan 45^\circ = \cot 45^\circ = 1$, $\csc 45^\circ = \sec 45^\circ = \sqrt{2}$.
- **$30^\circ\text{-}60^\circ\text{-}90^\circ$ triangle:** sides $1 : \sqrt{3} : 2$.
  - $30^\circ$: $\sin 30^\circ = \frac{1}{2}$, $\cos 30^\circ = \frac{\sqrt{3}}{2}$, $\tan 30^\circ = \frac{1}{\sqrt{3}}$, $\csc 30^\circ = 2$, $\sec 30^\circ = \frac{2}{\sqrt{3}}$, $\cot 30^\circ = \sqrt{3}$.
  - $60^\circ$: $\sin 60^\circ = \frac{\sqrt{3}}{2}$, $\cos 60^\circ = \frac{1}{2}$, $\tan 60^\circ = \sqrt{3}$, $\csc 60^\circ = \frac{2}{\sqrt{3}}$, $\sec 60^\circ = 2$, $\cot 60^\circ = \frac{1}{\sqrt{3}}$.
- **$0^\circ$ and $90^\circ$:** $\sin 0^\circ = 0, \cos 0^\circ = 1, \tan 0^\circ = 0$; $\sin 90^\circ = 1, \cos 90^\circ = 0$, $\tan 90^\circ$ is not defined.
- **Not defined values:** $\csc 0^\circ, \cot 0^\circ, \sec 90^\circ, \tan 90^\circ$ (all divide by $0$).
- **Memory pattern:** $\sin$ values for $0^\circ, 30^\circ, 45^\circ, 60^\circ, 90^\circ$ are $\frac{\sqrt{0}}{2}, \frac{\sqrt{1}}{2}, \frac{\sqrt{2}}{2}, \frac{\sqrt{3}}{2}, \frac{\sqrt{4}}{2}$; $\cos$ runs in reverse; $\tan = \frac{\sin}{\cos}$.
- Keep answers **exact** with $\sqrt{2}$ and $\sqrt{3}$ unless asked for a decimal approximation.

---

## Practice Questions

1. An equilateral triangle has side $4\text{ cm}$. Drop a perpendicular from one vertex to the opposite side. Find the length of this perpendicular, and use it to find $\sin 60^\circ$ and $\cos 60^\circ$.

2. Find the exact value of $2\sin 30^\circ + 3\cos 60^\circ$.

3. Find the exact value of $\tan 60^\circ \cdot \tan 30^\circ + \sin 90^\circ - \cos 0^\circ$.

4. Find the exact value of $\csc 45^\circ \cdot \sec 45^\circ - \cot 45^\circ$.

5. Find the exact value of $\sin 60^\circ + \cos 30^\circ - \tan 60^\circ$.

6. A $45^\circ\text{-}45^\circ\text{-}90^\circ$ set-square has a hypotenuse of $30\text{ cm}$. Find the length of each leg in exact form and also as a decimal (use $\sqrt{2} \approx 1.414$).

7. One student writes "$\tan 30^\circ = \sqrt{3}$" and another writes "$\sin 0^\circ = 1$." Explain what is wrong in each statement and give the correct values.

8. State True or False:
   (a) $\sin 90^\circ = 1$
   (b) $\tan 90^\circ = 1$
   (c) $\sin 45^\circ = \cos 45^\circ$
   (d) $\sec 90^\circ = 0$
   (e) $\csc 0^\circ$ is not defined

### Answers

1. Since the equilateral triangle has side $4\text{ cm}$, the perpendicular bisects the base into $2\text{ cm}$ and $2\text{ cm}$. In one half (a right triangle with hypotenuse $4$ and base $2$):
   $$\text{height}^2 = 4^2 - 2^2 = 16 - 4 = 12 \implies \text{height} = \sqrt{12} = \mathbf{2\sqrt{3}\text{ cm}} \quad (\approx 3.46\text{ cm})$$
   At the $60^\circ$ angle: $\text{opp} = 2\sqrt{3}$, $\text{adj} = 2$, $\text{hyp} = 4$.
   $$\sin 60^\circ = \frac{2\sqrt{3}}{4} = \mathbf{\frac{\sqrt{3}}{2}}, \qquad \cos 60^\circ = \frac{2}{4} = \mathbf{\frac{1}{2}} \quad ✅$$

2. $\sin 30^\circ = \frac{1}{2}$, $\cos 60^\circ = \frac{1}{2}$.
   $$2 \times \frac{1}{2} + 3 \times \frac{1}{2} = 1 + \frac{3}{2} = \mathbf{\frac{5}{2}}$$
   Check: $2(0.5) + 3(0.5) = 1 + 1.5 = 2.5$ ✅.

3. $\tan 60^\circ \cdot \tan 30^\circ = \sqrt{3} \times \frac{1}{\sqrt{3}} = 1$. Also $\sin 90^\circ = 1$ and $\cos 0^\circ = 1$.
   $$1 + 1 - 1 = \mathbf{1}$$
   Check: $1.0 + 1 - 1 = 1.0$ ✅.

4. $\csc 45^\circ = \sqrt{2}$, $\sec 45^\circ = \sqrt{2}$, $\cot 45^\circ = 1$.
   $$\sqrt{2} \times \sqrt{2} - 1 = 2 - 1 = \mathbf{1}$$
   Check: $1.414 \times 1.414 \approx 2.0$, and $2.0 - 1 = 1$ ✅.

5. $\sin 60^\circ = \frac{\sqrt{3}}{2}$, $\cos 30^\circ = \frac{\sqrt{3}}{2}$, $\tan 60^\circ = \sqrt{3}$.
   $$\frac{\sqrt{3}}{2} + \frac{\sqrt{3}}{2} - \sqrt{3} = \sqrt{3} - \sqrt{3} = \mathbf{0}$$
   Check: $0.866 + 0.866 - 1.732 = 0$ ✅.

6. $\text{leg} = \text{hyp} \times \sin 45^\circ = 30 \times \frac{\sqrt{2}}{2} = \mathbf{15\sqrt{2}\text{ cm}} \approx 15 \times 1.414 = \mathbf{21.21\text{ cm}}$.
   Check: $(15\sqrt{2})^2 + (15\sqrt{2})^2 = 450 + 450 = 900 = 30^2$ ✅.

7. - "$\tan 30^\circ = \sqrt{3}$" is wrong: $\tan 30^\circ = \mathbf{\frac{1}{\sqrt{3}}}$ ($\approx 0.577$). $\sqrt{3}$ is $\tan 60^\circ$.
   - "$\sin 0^\circ = 1$" is wrong: at $0^\circ$ the opposite side shrinks to $0$, so $\sin 0^\circ = \mathbf{0}$. $1$ is $\cos 0^\circ$ (and $\sin 90^\circ$).

8. (a) **True** ✅. As $\theta \to 90^\circ$, the opposite side approaches the hypotenuse, so $\sin 90^\circ = 1$.
   (b) **False** ❌. $\tan 90^\circ$ is not defined because it requires dividing by $0$.
   (c) **True** ✅. Both equal $\frac{\sqrt{2}}{2}$ ($\frac{1}{\sqrt{2}}$).
   (d) **False** ❌. $\sec 90^\circ = \frac{1}{\cos 90^\circ} = \frac{1}{0}$, which is **not defined** (not $0$).
   (e) **True** ✅. $\csc 0^\circ = \frac{1}{\sin 0^\circ} = \frac{1}{0}$, which is not defined.

---

Dr. Bennett stacked the finished set-squares neatly in the crate and smiled at Maya. "See? Just two simple triangles gave us the exact trigonometric ratios of all five standard angles—no calculator needed." Keep this table close by, because we will use it constantly from here on.

**What's next?** Suppose someone tells you just *one* trigonometric ratio—say, $\sin A = \frac{3}{5}$—without telling you angle $A$. Can you still find all the other ratios? In Topic 5, we will learn how!
