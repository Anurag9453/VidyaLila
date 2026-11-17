# Chapter: Trigonometry (Part 6)

> **Class:** 9 | **Subject:** Mathematics
> **Continues from [trigonometry-part5.md](trigonometry-part5.md).** (The chapter starts in [trigonometry.md](trigonometry.md). For angle sums in triangles, see [Triangles Part 2](../triangles/triangles-part2.md); for Pythagoras, see [Pythagoras Theorem](../pythagoras-theorem/pythagoras-theorem.md); and for $(a \pm b)^2$, see [Expansions](../expansions/expansions.md).)
> **Topics covered in this file:**
> 6. Complementary Angles and Fundamental Trigonometric Identities

---

# Topic 6: Complementary Angles and Fundamental Trigonometric Identities

In Topic 5, we learned how to unlock all six trigonometric ratios from a single ratio and solve right triangles. Throughout all of that work, we kept our eyes fixed on one chosen acute angle.

Now let us step back and ask a new question: what happens when we compare the **two different acute angles** of the same right triangle? That comparison reveals a neat pairing—**complementary angles**—and leads directly to three rock-solid **trigonometric identities**: equations that hold true for **every** acute angle. With these identities, we can transform ratios and simplify complicated expressions without drawing a single triangle.

One quick scope note: throughout this topic, all angles are **acute** (strictly between $0^\circ$ and $90^\circ$). Negative ratios and angles beyond $90^\circ$ belong to higher grades.

---

## Maya and Liam's Leaning Plank

Maya and Liam are twins. Behind their house, a long wooden plank leans slantwise from the flat patio up against a vertical garden wall. Since the patio and vertical wall meet at a **$90^\circ$ right angle**, the plank, patio, and wall form a right-angled triangle $\triangle ABC$, with the right angle at $B$.

Maya stands at the bottom end of the plank at corner $A$. Liam climbs up onto a low ledge to stand near the top end of the plank at corner $C$. Each twin stands at one of the **acute angles**, and the plank is the shared **hypotenuse**.

Maya looks across the patio and labels her sides for $\angle A$: "For me, the **opposite side** is the wall $BC$ across from me."

Liam looks down from $\angle C$ and stops in surprise. "Hey, $BC$ is right next to me—for me, $BC$ is the **adjacent side**! My opposite side is the patio $AB$!"

The twins look at each other and grin. "So your opposite is my adjacent, and my opposite is your adjacent!" Liam laughs. "Does that mean your $\sin$ is literally my $\cos$?"

Let us put their ratios side by side and check!

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Complementary angles** | Two angles whose sum is $90^\circ$ | $25^\circ$ and $65^\circ$; $30^\circ$ and $60^\circ$ |
| **Complement** | What remains when an angle is subtracted from $90^\circ$ | The complement of $A$ is $90^\circ - A$ |
| **Identity** | An equation that is true for *every* valid angle | $\sin^2 A + \cos^2 A = 1$ |
| **$\sin^2 A$** | Shorthand for $(\sin A)^2$: compute $\sin A$ first, then square the result | $\sin^2 30^\circ = \left(\frac{1}{2}\right)^2 = \frac{1}{4}$ |
| **Equation** | A statement true only for specific angles, not all angles | $\sin A = \frac{1}{2}$ holds only for $A = 30^\circ$ (among acute angles) |

**Notation reminder:** **$\sin^2 A$** always means **$(\sin A)^2$**—take $\sin A$ first, then square it. (The same goes for $\cos^2 A$, $\tan^2 A$, $\sec^2 A$, $\cot^2 A$, and $\csc^2 A$.)

---

## Part A: Complementary Angles and Swapping Ratios

### First, Look at the Sum of the Two Acute Angles

The three angles of any triangle add up to $180^\circ$ ([Triangles Part 2](../triangles/triangles-part2.md)). In right triangle $\triangle ABC$ with $\angle B = 90^\circ$, the remaining two angles must add up to:

$$\angle A + \angle C = 180^\circ - 90^\circ = \mathbf{90^\circ}$$

So $\angle C = 90^\circ - \angle A$. The two acute angles of a right triangle are always **complementary**. If Maya's angle is $A$, then Liam's angle is automatically $90^\circ - A$.

### Maya and Liam's Ratios, Side by Side

Label the sides $AB$ (patio), $BC$ (wall), and $AC$ (the plank, hypotenuse).

**For Maya (angle $A$):**
- $\text{opp} = BC$
- $\text{adj} = AB$
- $\text{hyp} = AC$

**For Liam (angle $C = 90^\circ - A$):**
- $\text{opp} = AB$
- $\text{adj} = BC$
- $\text{hyp} = AC$ (the same plank!)

Now compare their ratios:
- Maya's $\sin A = \frac{\text{opp}}{\text{hyp}} = \frac{BC}{AC}$
- Liam's $\cos C = \frac{\text{adj}}{\text{hyp}} = \frac{BC}{AC}$

**Identical!** So $\sin A = \cos C = \cos(90^\circ - A)$.

Likewise, Maya's $\cos A = \frac{AB}{AC}$ matches Liam's $\sin C = \frac{AB}{AC}$, giving $\cos A = \sin(90^\circ - A)$.

### The Six Complementary Relations

Applying the same swap (opposite $\leftrightarrow$ adjacent, hypotenuse unchanged) to all six ratios gives:

| Maya's ratio (angle $A$) | Liam's ratio (angle $90^\circ - A$) |
|---|---|
| $\sin A = \frac{BC}{AC}$ | $\cos(90^\circ - A) = \frac{BC}{AC}$ |
| $\cos A = \frac{AB}{AC}$ | $\sin(90^\circ - A) = \frac{AB}{AC}$ |
| $\tan A = \frac{BC}{AB}$ | $\cot(90^\circ - A) = \frac{BC}{AB}$ |
| $\cot A = \frac{AB}{BC}$ | $\tan(90^\circ - A) = \frac{AB}{BC}$ |
| $\sec A = \frac{AC}{AB}$ | $\csc(90^\circ - A) = \frac{AC}{AB}$ |
| $\csc A = \frac{AC}{BC}$ | $\sec(90^\circ - A) = \frac{AC}{BC}$ |

*(For instance, Liam's $\tan C = \frac{\text{opp}}{\text{adj}} = \frac{AB}{BC}$ equals Maya's $\cot A$, and Liam's $\cot C = \frac{BC}{AB}$ equals Maya's $\tan A$.)*

This gives the **six complementary-angle identities**:

> - **$\sin(90^\circ - \theta) = \cos \theta$** $\qquad$ **$\cos(90^\circ - \theta) = \sin \theta$**
> - **$\tan(90^\circ - \theta) = \cot \theta$** $\qquad$ **$\cot(90^\circ - \theta) = \tan \theta$**
> - **$\sec(90^\circ - \theta) = \csc \theta$** $\qquad$ **$\csc(90^\circ - \theta) = \sec \theta$**

*(Remember $\csc$ is also written $\operatorname{cosec}$.)*

**Memory tip:** The prefix **"co-"** literally stands for **"complement"**! **Co**sine is the sine of the complement, **co**tangent is the tangent of the complement, and **co**secant is the secant of the complement. Switching to $90^\circ - \theta$ adds "co-" if it was missing, or drops "co-" if it was already there.

### Check 1: Using Standard Angles

From Topic 4 ($30^\circ$ and $60^\circ$ are complementary since $30^\circ + 60^\circ = 90^\circ$):
- $\sin 60^\circ = \frac{\sqrt{3}}{2}$ and $\cos 30^\circ = \frac{\sqrt{3}}{2} \implies \sin(90^\circ - 30^\circ) = \cos 30^\circ$ ✅
- $\cos 60^\circ = \frac{1}{2}$ and $\sin 30^\circ = \frac{1}{2} \implies \cos(90^\circ - 30^\circ) = \sin 30^\circ$ ✅
- $\tan 30^\circ = \frac{1}{\sqrt{3}}$ and $\cot 60^\circ = \frac{1}{\sqrt{3}} \implies \tan 30^\circ = \cot(90^\circ - 30^\circ)$ ✅
- $\sec 60^\circ = 2$ and $\csc 30^\circ = 2 \implies \sec(90^\circ - 30^\circ) = \csc 30^\circ$ ✅

And $45^\circ$ is its own complement ($45^\circ + 45^\circ = 90^\circ$), which is why $\sin 45^\circ = \cos 45^\circ = \frac{1}{\sqrt{2}}$ and $\tan 45^\circ = \cot 45^\circ = 1$!

### Check 2: Using a $3\text{-}4\text{-}5$ Triangle

In Maya and Liam's triangle, let $BC = 3$, $AB = 4$, and $AC = 5$ ($3^2 + 4^2 = 25 = 5^2$).
- Maya: $\sin A = \frac{3}{5}$, $\cos A = \frac{4}{5}$, $\tan A = \frac{3}{4}$
- Liam (angle $C$): $\text{opp} = AB = 4$, $\text{adj} = BC = 3 \implies \sin C = \frac{4}{5}$, $\cos C = \frac{3}{5}$, $\tan C = \frac{4}{3}$

Compare them:
- $\sin A = \frac{3}{5} = \cos C$ ✅
- $\cos A = \frac{4}{5} = \sin C$ ✅
- $\tan A = \frac{3}{4} = \cot C$ ✅

Nothing to memorize by brute force—it is simply viewing the same triangle from the opposite corner!

---

## Part B: Evaluating Expressions Using Complementary Angles

Whenever two angles add up to $90^\circ$, we can rewrite one angle as $90^\circ - (\text{the other})$ and simplify without needing any table or calculator.

### Example 1: $\frac{\sin 65^\circ}{\cos 25^\circ}$

Since $65^\circ + 25^\circ = 90^\circ$, we have $\sin 65^\circ = \sin(90^\circ - 25^\circ) = \cos 25^\circ$.

$$\frac{\sin 65^\circ}{\cos 25^\circ} = \frac{\cos 25^\circ}{\cos 25^\circ} = \mathbf{1}$$

**Check:** $\sin 65^\circ \approx 0.9063$ and $\cos 25^\circ \approx 0.9063$, so their ratio is $1$ ✅.

### Example 2: $\tan 10^\circ \cdot \tan 80^\circ$

Since $10^\circ + 80^\circ = 90^\circ$, $\tan 80^\circ = \tan(90^\circ - 10^\circ) = \cot 10^\circ$.

$$\tan 10^\circ \cdot \tan 80^\circ = \tan 10^\circ \cdot \cot 10^\circ = \tan 10^\circ \cdot \frac{1}{\tan 10^\circ} = \mathbf{1}$$

**Check:** $\tan 10^\circ \cdot \tan 80^\circ = 1.0000$ ✅.

### Example 3: $\cos 38^\circ - \sin 52^\circ$

Since $38^\circ + 52^\circ = 90^\circ$, $\sin 52^\circ = \sin(90^\circ - 38^\circ) = \cos 38^\circ$.

$$\cos 38^\circ - \sin 52^\circ = \cos 38^\circ - \cos 38^\circ = \mathbf{0}$$

**Check:** Both equal $\approx 0.7880$, so their difference is $0$ ✅.

### Example 4: $\sin 35^\circ \cdot \sec 55^\circ$

Since $35^\circ + 55^\circ = 90^\circ$, $\sec 55^\circ = \sec(90^\circ - 35^\circ) = \csc 35^\circ$.

$$\sin 35^\circ \cdot \sec 55^\circ = \sin 35^\circ \cdot \csc 35^\circ = \sin 35^\circ \cdot \frac{1}{\sin 35^\circ} = \mathbf{1}$$

**Check:** $\sin 35^\circ \approx 0.5736$ and $\sec 55^\circ = \frac{1}{\cos 55^\circ} \approx 1.7434$; their product is $1.000$ ✅.

### Example 5: $\tan 15^\circ \cdot \tan 25^\circ \cdot \tan 65^\circ \cdot \tan 75^\circ$

Group complementary pairs: $15^\circ + 75^\circ = 90^\circ$ and $25^\circ + 65^\circ = 90^\circ$.
- $\tan 75^\circ = \cot 15^\circ \implies \tan 15^\circ \cdot \tan 75^\circ = \tan 15^\circ \cdot \cot 15^\circ = 1$
- $\tan 65^\circ = \cot 25^\circ \implies \tan 25^\circ \cdot \tan 65^\circ = \tan 25^\circ \cdot \cot 25^\circ = 1$

$$\text{Product} = 1 \times 1 = \mathbf{1}$$

**Check:** Total product $= 1.0000$ ✅.

### Example 6: $\frac{\sin 20^\circ}{\cos 70^\circ} + \frac{\cos 20^\circ}{\sin 70^\circ}$

Since $20^\circ + 70^\circ = 90^\circ$, $\cos 70^\circ = \sin 20^\circ$ and $\sin 70^\circ = \cos 20^\circ$.

$$\frac{\sin 20^\circ}{\sin 20^\circ} + \frac{\cos 20^\circ}{\cos 20^\circ} = 1 + 1 = \mathbf{2}$$

**Check:** $1.0000 + 1.0000 = 2.0000$ ✅.

---

## Part C: The Most Important Identity: $\sin^2 A + \cos^2 A = 1$

### Proof Using the Pythagoras Theorem

In right triangle $\triangle ABC$ ($\angle B = 90^\circ$), the [Pythagoras Theorem](../pythagoras-theorem/pythagoras-theorem.md) states:

$$(\text{opp})^2 + (\text{adj})^2 = (\text{hyp})^2$$

For angle $A$:

$$BC^2 + AB^2 = AC^2$$

Divide every term by **$AC^2$**:

$$\frac{BC^2}{AC^2} + \frac{AB^2}{AC^2} = \frac{AC^2}{AC^2} = 1$$

Since $\frac{BC}{AC} = \sin A$ and $\frac{AB}{AC} = \cos A$:

$$\left(\frac{BC}{AC}\right)^2 + \left(\frac{AB}{AC}\right)^2 = 1 \implies \mathbf{\sin^2 A + \cos^2 A = 1}$$

Because we made no assumption about the particular triangle's size or angle $A$, this identity holds for **every acute angle $A$**!

### Check 1: $3\text{-}4\text{-}5$ Triangle

With $\sin A = \frac{3}{5}$ and $\cos A = \frac{4}{5}$:
$$\sin^2 A + \cos^2 A = \left(\frac{3}{5}\right)^2 + \left(\frac{4}{5}\right)^2 = \frac{9}{25} + \frac{16}{25} = \frac{25}{25} = \mathbf{1} \quad ✅$$

### Check 2: $30^\circ$

With $\sin 30^\circ = \frac{1}{2}$ and $\cos 30^\circ = \frac{\sqrt{3}}{2}$:
$$\sin^2 30^\circ + \cos^2 30^\circ = \left(\frac{1}{2}\right)^2 + \left(\frac{\sqrt{3}}{2}\right)^2 = \frac{1}{4} + \frac{3}{4} = \mathbf{1} \quad ✅$$

### Three Forms of the Same Identity

Rearranging gives three super-useful forms:
- **$\sin^2 A + \cos^2 A = 1$**
- **$\sin^2 A = 1 - \cos^2 A$**
- **$\cos^2 A = 1 - \sin^2 A$**

---

## Part D: Two More Identities

### Identity 2: $1 + \tan^2 A = \sec^2 A$

Divide both sides of $\sin^2 A + \cos^2 A = 1$ by **$\cos^2 A$** (valid because $A$ is acute, so $\cos A > 0$):

$$\frac{\sin^2 A}{\cos^2 A} + \frac{\cos^2 A}{\cos^2 A} = \frac{1}{\cos^2 A}$$

From Topic 3, $\frac{\sin A}{\cos A} = \tan A$ and $\frac{1}{\cos A} = \sec A$, so:

$$\tan^2 A + 1 = \sec^2 A \quad \text{or} \quad \mathbf{1 + \tan^2 A = \sec^2 A}$$

**Check ($3\text{-}4\text{-}5$ triangle):** $\tan A = \frac{3}{4}$ and $\sec A = \frac{5}{4}$. Then $1 + \tan^2 A = 1 + \frac{9}{16} = \frac{25}{16}$ and $\sec^2 A = \left(\frac{5}{4}\right)^2 = \frac{25}{16}$ ✅.

### Identity 3: $1 + \cot^2 A = \csc^2 A$

Now divide both sides of $\sin^2 A + \cos^2 A = 1$ by **$\sin^2 A$** (again valid since $\sin A > 0$):

$$\frac{\sin^2 A}{\sin^2 A} + \frac{\cos^2 A}{\sin^2 A} = \frac{1}{\sin^2 A}$$

Since $\frac{\cos A}{\sin A} = \cot A$ and $\frac{1}{\sin A} = \csc A$:

$$\mathbf{1 + \cot^2 A = \csc^2 A}$$

**Check ($3\text{-}4\text{-}5$ triangle):** $\cot A = \frac{4}{3}$ and $\csc A = \frac{5}{3}$. Then $1 + \cot^2 A = 1 + \frac{16}{9} = \frac{25}{9}$ and $\csc^2 A = \left(\frac{5}{3}\right)^2 = \frac{25}{9}$ ✅.

### All Three Identities at a Glance

| Identity | How it is derived |
|---|---|
| $\sin^2 \theta + \cos^2 \theta = 1$ | Divide Pythagoras ($a^2 + b^2 = c^2$) by $\text{hyp}^2$ |
| $1 + \tan^2 \theta = \sec^2 \theta$ | Divide $\sin^2 \theta + \cos^2 \theta = 1$ by $\cos^2 \theta$ |
| $1 + \cot^2 \theta = \csc^2 \theta$ | Divide $\sin^2 \theta + \cos^2 \theta = 1$ by $\sin^2 \theta$ |

*(Note: $\csc^2 \theta$ is the same as $\operatorname{cosec}^2 \theta$.)*

---

## Part E: Using the Identities

### E1: Finding One Ratio from Another

**Example 7:** Given $\sin A = \frac{3}{5}$ ($A$ acute), find $\cos A$ using an identity.

From $\sin^2 A + \cos^2 A = 1$:
$$\cos^2 A = 1 - \sin^2 A = 1 - \frac{9}{25} = \frac{16}{25}$$

Since $A$ is acute, $\cos A > 0$:
$$\cos A = \mathbf{\frac{4}{5}}$$

**Check:** In Topic 5, building a triangle gave $\cos A = \frac{4}{5}$ too ✅.

**Example 8:** Given $\tan A = \frac{3}{4}$ ($A$ acute), find $\sec A$.

$$\sec^2 A = 1 + \tan^2 A = 1 + \frac{9}{16} = \frac{25}{16} \implies \sec A = \mathbf{\frac{5}{4}} \quad (\text{positive since } A \text{ is acute})$$

**Check:** $\cos A = \frac{4}{5} \implies \sec A = \frac{5}{4}$ ✅.

### E2: Simplifying Expressions

**Example 9:** Simplify $1 - \sin^2 A$.

From $\sin^2 A + \cos^2 A = 1$, $1 - \sin^2 A = \mathbf{\cos^2 A}$.

**Check ($A = 30^\circ$):** $1 - \frac{1}{4} = \frac{3}{4} = \cos^2 30^\circ$ ✅.

**Example 10:** Simplify $\sec^2 A - \tan^2 A$.

From $1 + \tan^2 A = \sec^2 A$, $\sec^2 A - \tan^2 A = \mathbf{1}$.

**Check ($A = 30^\circ$):** $\sec 30^\circ = \frac{2}{\sqrt{3}} \implies \sec^2 30^\circ = \frac{4}{3}$, and $\tan^2 30^\circ = \frac{1}{3}$. $\frac{4}{3} - \frac{1}{3} = 1$ ✅.

**Example 11:** Simplify $(\sin A + \cos A)^2 + (\sin A - \cos A)^2$.

Expand using $(a \pm b)^2 = a^2 \pm 2ab + b^2$ ([Expansions](../expansions/expansions.md)):
- $(\sin A + \cos A)^2 = \sin^2 A + 2\sin A \cos A + \cos^2 A$
- $(\sin A - \cos A)^2 = \sin^2 A - 2\sin A \cos A + \cos^2 A$

Add them together—the middle terms $+2\sin A \cos A$ and $-2\sin A \cos A$ cancel out!

$$\text{Total} = 2\sin^2 A + 2\cos^2 A = 2(\sin^2 A + \cos^2 A) = 2(1) = \mathbf{2}$$

**Check ($3\text{-}4\text{-}5$ triangle, $\sin A = \frac{3}{5}, \cos A = \frac{4}{5}$):** $\left(\frac{7}{5}\right)^2 + \left(-\frac{1}{5}\right)^2 = \frac{49}{25} + \frac{1}{25} = \frac{50}{25} = 2$ ✅.

### E3: Proving Trigonometric Identities

To "prove" an identity means to show that the **left-hand side (LHS)** equals the **right-hand side (RHS)** for every valid angle. Work step by step on **one side only** (usually the LHS), transforming it using known identities until it matches the other side, and state the reason for each step.

**Proof 1:** Prove that $(1 - \cos^2 A)\cdot \csc A = \sin A$.

$$\begin{aligned}
\text{LHS} &= (1 - \cos^2 A)\cdot \csc A \\
&= \sin^2 A \cdot \csc A && (\text{since } 1 - \cos^2 A = \sin^2 A) \\
&= \sin^2 A \cdot \frac{1}{\sin A} && \left(\text{since } \csc A = \frac{1}{\sin A}\right) \\
&= \sin A = \text{RHS} \quad ✅
\end{aligned}$$

*Numerical check ($A = 30^\circ$):* $(1 - \frac{3}{4}) \times 2 = \frac{1}{4} \times 2 = \frac{1}{2} = \sin 30^\circ$ ✅.

**Proof 2:** Prove that $(1 + \tan^2 A)\cdot \cos^2 A = 1$.

$$\begin{aligned}
\text{LHS} &= (1 + \tan^2 A)\cdot \cos^2 A \\
&= \sec^2 A \cdot \cos^2 A && (\text{since } 1 + \tan^2 A = \sec^2 A) \\
&= \frac{1}{\cos^2 A} \cdot \cos^2 A && \left(\text{since } \sec A = \frac{1}{\cos A}\right) \\
&= 1 = \text{RHS} \quad ✅
\end{aligned}$$

*Numerical check ($A = 30^\circ$):* $\left(1 + \frac{1}{3}\right) \times \frac{3}{4} = \frac{4}{3} \times \frac{3}{4} = 1$ ✅.

**Proof 3:** Prove that $(\sec A - \tan A)(\sec A + \tan A) = 1$.

$$\begin{aligned}
\text{LHS} &= (\sec A - \tan A)(\sec A + \tan A) \\
&= \sec^2 A - \tan^2 A && \text{using } (a - b)(a + b) = a^2 - b^2 \\
&= 1 && (\text{since } 1 + \tan^2 A = \sec^2 A) \\
&= \text{RHS} \quad ✅
\end{aligned}$$

*Numerical check ($A = 30^\circ$):* $\left(\frac{2}{\sqrt{3}} - \frac{1}{\sqrt{3}}\right)\left(\frac{2}{\sqrt{3}} + \frac{1}{\sqrt{3}}\right) = \frac{1}{\sqrt{3}} \cdot \frac{3}{\sqrt{3}} = \frac{3}{3} = 1$ ✅.

**Proof 4 (a classic):** Prove that $\tan A + \cot A = \sec A \cdot \csc A$.

$$\begin{aligned}
\text{LHS} &= \tan A + \cot A \\
&= \frac{\sin A}{\cos A} + \frac{\cos A}{\sin A} && \left(\text{writing in terms of } \sin A \text{ and } \cos A\right) \\
&= \frac{\sin^2 A + \cos^2 A}{\sin A \cos A} && (\text{taking common denominator } \sin A \cos A) \\
&= \frac{1}{\sin A \cos A} && (\text{since } \sin^2 A + \cos^2 A = 1) \\
&= \frac{1}{\cos A} \cdot \frac{1}{\sin A} \\
&= \sec A \cdot \csc A = \text{RHS} \quad ✅
\end{aligned}$$

*Numerical check ($A = 30^\circ$):* $\text{LHS} = \frac{1}{\sqrt{3}} + \sqrt{3} = \frac{4}{\sqrt{3}}$; $\text{RHS} = \frac{2}{\sqrt{3}} \times 2 = \frac{4}{\sqrt{3}}$ ✅.

**Proof 5 (a multi-step proof):** Prove that $\frac{\sin A}{1 + \cos A} + \frac{1 + \cos A}{\sin A} = 2\csc A$.

$$\begin{aligned}
\text{LHS} &= \frac{\sin A}{1 + \cos A} + \frac{1 + \cos A}{\sin A} \\
&= \frac{\sin^2 A + (1 + \cos A)^2}{\sin A (1 + \cos A)} && (\text{taking a common denominator}) \\
&= \frac{\sin^2 A + 1 + 2\cos A + \cos^2 A}{\sin A (1 + \cos A)} && \text{expanding } (1 + \cos A)^2 \\
&= \frac{(\sin^2 A + \cos^2 A) + 1 + 2\cos A}{\sin A (1 + \cos A)} && (\text{regrouping terms}) \\
&= \frac{1 + 1 + 2\cos A}{\sin A (1 + \cos A)} && (\text{since } \sin^2 A + \cos^2 A = 1) \\
&= \frac{2(1 + \cos A)}{\sin A (1 + \cos A)} && (\text{factoring out } 2) \\
&= \frac{2}{\sin A} && \text{cancelling } (1 + \cos A) \neq 0 \text{ since } A \text{ is acute} \\
&= 2\csc A = \text{RHS} \quad ✅
\end{aligned}$$

*Numerical check ($A = 30^\circ$):* $\frac{0.5}{1 + 0.8660} + \frac{1 + 0.8660}{0.5} \approx 0.2679 + 3.7321 = 4.0000$, and $\text{RHS} = 2 \times 2 = 4$ ✅.

**Strategy for proving identities:**
1. Start with whichever side looks more complicated (usually the LHS).
2. Convert $\tan, \cot, \sec, \csc$ into $\sin$ and $\cos$ when no direct square identity jumps out.
3. Combine fractions over a common denominator.
4. Watch for $\sin^2 A + \cos^2 A = 1$, $1 - \sin^2 A = \cos^2 A$, and $1 - \cos^2 A = \sin^2 A$.

---

## Completing Maya and Liam's Discovery

Returning to the twins' leaning plank: Maya stood at $A$ with $\sin A = \frac{BC}{AC}$, while Liam stood at $C$ with $\cos C = \frac{BC}{AC}$. Both calculated the **exact same ratio**, just from opposite ends of the plank.

Because Liam's angle is $C = 90^\circ - A$, we have:

$$\mathbf{\sin A = \cos(90^\circ - A)}$$

Suppose Maya's angle is $30^\circ$, so Liam's is $60^\circ$. In a $3\text{-}4\text{-}5$ triangle:
- Maya: $\sin A = \frac{3}{5}$, and Liam: $\cos(90^\circ - A) = \frac{3}{5}$ (same!).
- Maya: $\cos A = \frac{4}{5}$, and Liam: $\sin(90^\circ - A) = \frac{4}{5}$ (same!).

And what about the Pythagorean identity? Both twins share the same plank! For Maya, $\sin^2 A + \cos^2 A = \frac{9}{25} + \frac{16}{25} = 1$; for Liam, $\sin^2 C + \cos^2 C = \frac{16}{25} + \frac{9}{25} = 1$. One right triangle powers the identity for both corners.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Confusing $\sin^2 A$ with $\sin(A^2)$.**
   $\sin^2 A$ means $(\sin A)^2$. For $A = 30^\circ$, $\sin^2 30^\circ = \left(\frac{1}{2}\right)^2 = \frac{1}{4}$. Writing $\sin(30^2) = \sin 900^\circ$ squares the *angle* instead of the ratio—completely different! Always put the exponent on $\sin$, not on $A$.

2. **Mistake 2: Assuming $\sin(A + B) = \sin A + \sin B$.**
   This is **false**. Quick test with $A = 30^\circ$ and $B = 60^\circ$:
   - $\sin(30^\circ + 60^\circ) = \sin 90^\circ = 1$
   - $\sin 30^\circ + \sin 60^\circ = \frac{1}{2} + \frac{\sqrt{3}}{2} \approx 0.5 + 0.866 = 1.366$
   Since $1 \neq 1.366$, $\sin$ does **not** distribute across addition!

3. **Mistake 3: Applying complementary-angle identities to angles that do not sum to $90^\circ$.**
   $\sin 40^\circ = \cos 50^\circ$ is true ($40^\circ + 50^\circ = 90^\circ$), whereas $\sin 40^\circ = \cos 40^\circ$ is **false** ($40^\circ + 40^\circ = 80^\circ \neq 90^\circ$). Always check that the sum is $90^\circ$ first.

4. **Mistake 4: Cancelling the word "$\sin$" as if it were a multiplier.**
   $\frac{\sin A}{\sin B} = \frac{A}{B}$ is **wrong**. For example, $\frac{\sin 30^\circ}{\sin 60^\circ} \approx \frac{0.5}{0.866} \approx 0.577$, whereas $\frac{30^\circ}{60^\circ} = 0.5$. You can only cancel identical whole trigonometric ratios (like $\frac{\sin A}{\sin A} = 1$).

5. **Mistake 5: Algebra mistakes when squaring or taking roots.**
   - $(\sin A + \cos A)^2 \neq \sin^2 A + \cos^2 A$. Do not forget the middle term $2\sin A \cos A$! For $\frac{3}{5}$ and $\frac{4}{5}$, $\left(\frac{3}{5} + \frac{4}{5}\right)^2 = \frac{49}{25}$, whereas $\sin^2 A + \cos^2 A = 1 = \frac{25}{25}$.
   - When taking a square root in $\cos^2 A = 1 - \sin^2 A$ for an acute angle $A$, always take the **positive** root.
   - $\sec^2 A - \tan^2 A = 1$ does **not** mean $\sec A - \tan A = 1$ (you cannot drop squares across subtraction).

---

## Quick Recap

- The two acute angles of a right triangle are **complementary**: $A + C = 90^\circ$.
- Looking from the complementary angle swaps opposite and adjacent, giving:
  - **$\sin(90^\circ - \theta) = \cos \theta$**, **$\cos(90^\circ - \theta) = \sin \theta$**
  - **$\tan(90^\circ - \theta) = \cot \theta$**, **$\cot(90^\circ - \theta) = \tan \theta$**
  - **$\sec(90^\circ - \theta) = \csc \theta$**, **$\csc(90^\circ - \theta) = \sec \theta$**
- Complementary identities apply only when two angles sum to **$90^\circ$**.
- $\sin^2 \theta$ means $(\sin \theta)^2$.
- **Three fundamental identities:**
  - **$\sin^2 \theta + \cos^2 \theta = 1$** (dividing Pythagoras by $\text{hyp}^2$)
  - **$1 + \tan^2 \theta = \sec^2 \theta$** (dividing by $\cos^2 \theta$)
  - **$1 + \cot^2 \theta = \csc^2 \theta$** (dividing by $\sin^2 \theta$)
- To prove an identity, work on one side (usually LHS), convert to $\sin$ and $\cos$ when helpful, and state the identity used at each step.
- Never distribute $\sin$ over addition: $\sin(A + B) \neq \sin A + \sin B$.

---

## Practice Questions

1. Without a calculator, find the value of:
   (a) $\frac{\cos 49^\circ}{\sin 41^\circ}$
   (b) $\sin 48^\circ - \cos 42^\circ$

2. Evaluate $\tan 12^\circ \cdot \tan 36^\circ \cdot \tan 54^\circ \cdot \tan 78^\circ$.

3. Evaluate $\frac{\sin 20^\circ}{\cos 70^\circ} + \frac{\cos 40^\circ}{\sin 50^\circ} - 2$.

4. If $\cos A = \frac{12}{37}$ ($A$ is acute), find $\sin A$ and $\tan A$ using the identity $\sin^2 A + \cos^2 A = 1$. Verify your answer using a right triangle.

5. If $\tan A = 1$ ($A$ is acute), find $\sec A$ using the identity $1 + \tan^2 A = \sec^2 A$. What is the measure of angle $A$?

6. Simplify:
   (a) $\frac{(1 - \cos A)(1 + \cos A)}{\sin A}$
   (b) $\sin^2 A + \cos^2 A + \tan^2 A$

7. Prove that $(1 - \sin^2 A)\cdot \sec A = \cos A$.

8. Prove that $(1 + \cot^2 A)\cdot \sin^2 A = 1$.

9. Prove that $(\csc A - \cot A)(\csc A + \cot A) = 1$.

10. Prove that $\frac{\sin A}{\cos A} + \frac{\cos A}{\sin A} = \tan A + \cot A$. Then also prove that $(\sin A + \cos A)^2 = 1 + 2\sin A \cos A$.

11. State whether each statement is true or false, giving a reason:
    (a) $\sin 25^\circ = \cos 65^\circ$
    (b) $\sin 25^\circ = \cos 25^\circ$
    (c) $\sin(30^\circ + 30^\circ) = \sin 30^\circ + \sin 30^\circ$
    (d) For an acute angle $A$, $\sin^2 A + \cos^2 A = 1$

12. In right triangle $\triangle PQR$ ($\angle Q = 90^\circ$), $PQ = 5$ and $QR = 12$. Maya stands at $P$ and Liam stands at $R$. Write $\sin P$ and $\cos R$. What do you notice?

### Answers

1. (a) $49^\circ + 41^\circ = 90^\circ \implies \sin 41^\circ = \cos 49^\circ$, so $\frac{\cos 49^\circ}{\sin 41^\circ} = \mathbf{1}$.
   (b) $48^\circ + 42^\circ = 90^\circ \implies \cos 42^\circ = \sin 48^\circ$, so $\sin 48^\circ - \cos 42^\circ = \mathbf{0}$.
   Check: $1.0000$ and $0.0000$ ✅.

2. Group $12^\circ + 78^\circ = 90^\circ$ and $36^\circ + 54^\circ = 90^\circ$.
   $\tan 78^\circ = \cot 12^\circ \implies \tan 12^\circ \cdot \tan 78^\circ = 1$, and $\tan 54^\circ = \cot 36^\circ \implies \tan 36^\circ \cdot \tan 54^\circ = 1$.
   Product $= 1 \times 1 = \mathbf{1}$ ✅.

3. $20^\circ + 70^\circ = 90^\circ \implies \cos 70^\circ = \sin 20^\circ \implies \frac{\sin 20^\circ}{\cos 70^\circ} = 1$.
   $40^\circ + 50^\circ = 90^\circ \implies \sin 50^\circ = \cos 40^\circ \implies \frac{\cos 40^\circ}{\sin 50^\circ} = 1$.
   Total $= 1 + 1 - 2 = \mathbf{0}$ ✅.

4. $\sin^2 A = 1 - \cos^2 A = 1 - \frac{144}{1369} = \frac{1225}{1369} \implies \mathbf{\sin A = \frac{35}{37}}$ (positive since $A$ is acute).
   $\tan A = \frac{\sin A}{\cos A} = \frac{35/37}{12/37} = \mathbf{\frac{35}{12}}$.
   *Triangle check:* $\text{adj} = 12$, $\text{hyp} = 37 \implies \text{opp} = \sqrt{1369 - 144} = \sqrt{1225} = 35$, giving $\sin A = \frac{35}{37}$ and $\tan A = \frac{35}{12}$ ✅.

5. $\sec^2 A = 1 + \tan^2 A = 1 + 1 = 2 \implies \mathbf{\sec A = \sqrt{2}}$ (positive).
   Since $\tan A = 1$ for acute $A$, **$A = 45^\circ$**, and indeed $\sec 45^\circ = \sqrt{2}$ ✅.

6. (a) $(1 - \cos A)(1 + \cos A) = 1 - \cos^2 A = \sin^2 A$. Dividing by $\sin A$ gives **$\sin A$**.
       Check ($A = 30^\circ$): $\frac{(1 - 0.8660)(1 + 0.8660)}{0.5} = \frac{0.25}{0.5} = 0.5 = \sin 30^\circ$ ✅.
   (b) Replace $\sin^2 A + \cos^2 A$ with $1$: $1 + \tan^2 A = \mathbf{\sec^2 A}$.
       Check ($A = 30^\circ$): $1 + \frac{1}{3} = \frac{4}{3} = \sec^2 30^\circ$ ✅.

7. $\text{LHS} = (1 - \sin^2 A)\cdot \sec A = \cos^2 A \cdot \sec A$ (since $1 - \sin^2 A = \cos^2 A$) $= \cos^2 A \cdot \frac{1}{\cos A} = \cos A = \text{RHS}$ ✅.
   Check ($A = 30^\circ$): $\left(1 - \frac{1}{4}\right)\left(\frac{2}{\sqrt{3}}\right) = \frac{3}{4} \cdot \frac{2}{\sqrt{3}} = \frac{\sqrt{3}}{2} = \cos 30^\circ$ ✅.

8. $\text{LHS} = (1 + \cot^2 A)\cdot \sin^2 A = \csc^2 A \cdot \sin^2 A$ (since $1 + \cot^2 A = \csc^2 A$) $= \frac{1}{\sin^2 A} \cdot \sin^2 A = 1 = \text{RHS}$ ✅.
   Check ($A = 30^\circ$): $\cot^2 30^\circ = 3$, so $(1 + 3)\left(\frac{1}{4}\right) = 1$ ✅.

9. $\text{LHS} = (\csc A - \cot A)(\csc A + \cot A) = \csc^2 A - \cot^2 A$ (using $(a - b)(a + b) = a^2 - b^2$) $= 1$ (since $1 + \cot^2 A = \csc^2 A \implies \csc^2 A - \cot^2 A = 1$) $= \text{RHS}$ ✅.
   Check ($A = 30^\circ$): $\csc 30^\circ = 2, \cot 30^\circ = \sqrt{3}$; $(2 - \sqrt{3})(2 + \sqrt{3}) = 4 - 3 = 1$ ✅.

10. - First proof: $\frac{\sin A}{\cos A} = \tan A$ and $\frac{\cos A}{\sin A} = \cot A$ by definition (Topic 3), so $\text{LHS} = \tan A + \cot A = \text{RHS}$ ✅.
    - Second proof: $\text{LHS} = (\sin A + \cos A)^2 = \sin^2 A + 2\sin A \cos A + \cos^2 A = (\sin^2 A + \cos^2 A) + 2\sin A \cos A = 1 + 2\sin A \cos A = \text{RHS}$ ✅.
    Check ($3\text{-}4\text{-}5$): $\left(\frac{3}{5} + \frac{4}{5}\right)^2 = \frac{49}{25}$, and $1 + 2\left(\frac{3}{5}\right)\left(\frac{4}{5}\right) = 1 + \frac{24}{25} = \frac{49}{25}$ ✅.

11. (a) **True** ✅. $25^\circ + 65^\circ = 90^\circ$, so $\sin 25^\circ = \cos(90^\circ - 25^\circ) = \cos 65^\circ$.
    (b) **False** ❌. $25^\circ + 25^\circ = 50^\circ \neq 90^\circ$; $\sin 25^\circ \approx 0.4226$ while $\cos 25^\circ \approx 0.9063$.
    (c) **False** ❌. $\sin 60^\circ = \frac{\sqrt{3}}{2} \approx 0.866$, whereas $\sin 30^\circ + \sin 30^\circ = \frac{1}{2} + \frac{1}{2} = 1$.
    (d) **True** ✅. Proven from the Pythagoras theorem for every acute angle $A$.

12. Hypotenuse $PR = \sqrt{5^2 + 12^2} = \sqrt{169} = 13$.
    For Maya at $P$: $\text{opp} = QR = 12$, so **$\sin P = \frac{12}{13}$**.
    For Liam at $R$: $\text{adj} = QR = 12$, so **$\cos R = \frac{12}{13}$**.
    They are equal! Because $P + R = 90^\circ$, $\sin P = \cos(90^\circ - P) = \cos R$ ✅.

---

Look how cleanly everything fits together: viewing a right triangle from its opposite acute corner swaps the ratio names, and a single application of Pythagoras produces the three fundamental identities of trigonometry. You've got this!

**What's next?** Now it is time to put our entire trigonometry toolkit to work in the real world—measuring the heights of towers, trees, cliffs, and lighthouses without ever leaving the ground!
