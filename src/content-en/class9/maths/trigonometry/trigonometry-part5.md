# Chapter: Trigonometry (Part 5)

> **Class:** 9 | **Subject:** Mathematics
> **Continues from [trigonometry-part4.md](trigonometry-part4.md)** (which covers the exact values for $0^\circ, 30^\circ, 45^\circ, 60^\circ$, and $90^\circ$). The chapter starts in [trigonometry.md](trigonometry.md).
> **Helpful background:** [Pythagoras Theorem](../pythagoras-theorem/pythagoras-theorem.md) and surds in [Number Systems Part 4](../number-systems/number-systems-part4.md).
> **Topics covered in this file:**
> 5. Finding All Ratios from One Ratio and Solving Right Triangles

---

# Topic 5: Finding All Ratios from One Ratio and Solving Right Triangles

In Topic 4, we built a table of exact ratios for special angles like $30^\circ, 45^\circ$, and $60^\circ$. That table worked in one direction: *given an angle, find its ratios*. Now let us flip the problem around: **given just one ratio, find all the remaining ratios**, and **given one side and one standard angle, find the remaining sides** of a right triangle. We do not need any new table for this—just a quick sketch of a right triangle and the Pythagoras theorem.

---

## The Puzzle Club Clue Board

Every Friday, the school's maths puzzle club posts a challenge on the clue board. This Friday's board reads:

> **"For an acute angle $A$, $\sin A = \frac{3}{5}$. Find all the other five trigonometric ratios of $A$."**

Leo scratched his head. "Wait—they didn't give us the angle at all! Not $30^\circ$, not $60^\circ$. How are we supposed to find $\cos A$?"

Sophia smiled. "We don't need to know the angle in degrees! Remember what we proved in Topic 2? A trigonometric ratio depends **only on the angle**, never on the size of the triangle. So knowing $\sin A = \frac{3}{5}$ locks in the **exact shape** of the triangle. Once the shape is locked, every other ratio is locked too!"

"So one ratio tells us the whole triangle?" Leo asked.

"It tells us the whole *shape* of the triangle," Sophia replied. "Come on, let's draw it and see."

At the end of this topic, we will check Leo and Sophia's solution on the clue board.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Building a triangle from a ratio** | Choosing convenient side lengths matching a given ratio to draw a right triangle | If $\sin A = \frac{3}{5}$, set $\text{opp} = 3$ and $\text{hyp} = 5$ |
| **Missing third side** | Finding the remaining side of that triangle using the Pythagoras theorem | $\text{adj} = \sqrt{5^2 - 3^2} = 4$ |
| **Solving a right triangle** | Finding unknown side lengths using a known side and a known acute angle | Hypotenuse $12$ and angle $30^\circ$ |
| **Standard angle** | An angle whose exact trigonometric ratios we already know ($30^\circ, 45^\circ, 60^\circ$) | $\tan 60^\circ = \sqrt{3}$ |

---

## Part A: The Method

### Why Does This Work?

You can draw infinitely many right triangles that all share the same acute angle $A$—tiny ones or huge ones. Their side lengths change, yet **their side ratios stay identical**. So if $\sin A = \frac{3}{5}$, we are free to pick *any* right triangle with $\frac{\text{opp}}{\text{hyp}} = \frac{3}{5}$. The simplest choice is $\text{opp} = 3$ and $\text{hyp} = 5$. Whatever values the other ratios have in that triangle are the exact values for angle $A$ in *every* right triangle!

### Step-by-Step Layout

| Step | What to do | For $\sin A = \frac{3}{5}$ |
|---|---|---|
| 1 | Sketch a right triangle and mark angle $A$ | $\triangle ABC$ with $\angle B = 90^\circ$, acute angle $A$ |
| 2 | Read the given ratio as a fraction of sides | $\sin A = \frac{\text{opp}}{\text{hyp}} \implies \text{opp} = 3, \ \text{hyp} = 5$ |
| 3 | Find the third side with Pythagoras | $\text{adj}^2 = 5^2 - 3^2 = 25 - 9 = 16 \implies \text{adj} = 4$ |
| 4 | List all three sides clearly | $\text{opp} = 3, \ \text{adj} = 4, \ \text{hyp} = 5$ |
| 5 | Read off all six ratios | $\sin \frac{3}{5}, \cos \frac{4}{5}, \tan \frac{3}{4}, \csc \frac{5}{3}, \sec \frac{5}{4}, \cot \frac{4}{3}$ |

**Check:** Step 5 gives back $\sin A = \frac{3}{5}$ ✅, and $\tan A = \frac{\sin A}{\cos A} = \frac{3/5}{4/5} = \frac{3}{4}$ ✅.

**Important note:** Always pay attention to **which side is the hypotenuse**. In $\sin A = \frac{3}{5}$, the denominator $5$ **must** be the hypotenuse—never put $5$ on one of the legs!

### Example 1: The Puzzle Club Clue ($\sin A = \frac{3}{5}$)

The table above gives the complete answer:

| Ratio | Definition | Value |
|---|---|---|
| $\sin A$ | $\frac{\text{opp}}{\text{hyp}}$ | $\frac{3}{5}$ |
| $\cos A$ | $\frac{\text{adj}}{\text{hyp}}$ | $\frac{4}{5}$ |
| $\tan A$ | $\frac{\text{opp}}{\text{adj}}$ | $\frac{3}{4}$ |
| $\csc A$ | $\frac{\text{hyp}}{\text{opp}}$ | $\frac{5}{3}$ |
| $\sec A$ | $\frac{\text{hyp}}{\text{adj}}$ | $\frac{5}{4}$ |
| $\cot A$ | $\frac{\text{adj}}{\text{opp}}$ | $\frac{4}{3}$ |

**Check:** All three reciprocal pairs multiply to $1$: $\frac{3}{5} \cdot \frac{5}{3} = 1$, $\frac{4}{5} \cdot \frac{5}{4} = 1$, $\frac{3}{4} \cdot \frac{4}{3} = 1$ ✅.

### Example 2: $\tan \theta = \frac{5}{12}$

Since $\tan \theta = \frac{\text{opp}}{\text{adj}}$, take $\text{opp} = 5$ and $\text{adj} = 12$.

Then $\text{hyp}^2 = 5^2 + 12^2 = 25 + 144 = 169 \implies \text{hyp} = \mathbf{13}$.

| $\sin \theta$ | $\cos \theta$ | $\tan \theta$ | $\csc \theta$ | $\sec \theta$ | $\cot \theta$ |
|---|---|---|---|---|---|
| $\frac{5}{13}$ | $\frac{12}{13}$ | $\frac{5}{12}$ | $\frac{13}{5}$ | $\frac{13}{12}$ | $\frac{12}{5}$ |

**Check:** $\frac{5/13}{12/13} = \frac{5}{12}$ ✅, and $13^2 = 169 = 25 + 144$ ✅.

### Example 3: $\cos A = \frac{8}{17}$

Since $\cos A = \frac{\text{adj}}{\text{hyp}}$, take $\text{adj} = 8$ and $\text{hyp} = 17$.

Then $\text{opp}^2 = 17^2 - 8^2 = 289 - 64 = 225 \implies \text{opp} = \mathbf{15}$.

| $\sin A$ | $\cos A$ | $\tan A$ | $\csc A$ | $\sec A$ | $\cot A$ |
|---|---|---|---|---|---|
| $\frac{15}{17}$ | $\frac{8}{17}$ | $\frac{15}{8}$ | $\frac{17}{15}$ | $\frac{17}{8}$ | $\frac{8}{15}$ |

**Check:** $8^2 + 15^2 = 64 + 225 = 289 = 17^2$ ✅.

### Example 4: $\sec \theta = \frac{25}{7}$

Since $\sec \theta = \frac{\text{hyp}}{\text{adj}}$, take $\text{hyp} = 25$ and $\text{adj} = 7$.

Then $\text{opp}^2 = 25^2 - 7^2 = 625 - 49 = 576 \implies \text{opp} = \mathbf{24}$.

| $\sin \theta$ | $\cos \theta$ | $\tan \theta$ | $\csc \theta$ | $\sec \theta$ | $\cot \theta$ |
|---|---|---|---|---|---|
| $\frac{24}{25}$ | $\frac{7}{25}$ | $\frac{24}{7}$ | $\frac{25}{24}$ | $\frac{25}{7}$ | $\frac{7}{24}$ |

**Check:** $7^2 + 24^2 = 49 + 576 = 625 = 25^2$ ✅.

*(Tip: When given $\sec \theta$, you can also flip it first to $\cos \theta = \frac{7}{25}$ and proceed as in Example 3.)*

### Example 5: When a Surd Appears ($\sin \theta = \frac{1}{2}$)

Since $\sin \theta = \frac{\text{opp}}{\text{hyp}}$, take $\text{opp} = 1$ and $\text{hyp} = 2$.

Then $\text{adj}^2 = 2^2 - 1^2 = 4 - 1 = 3 \implies \text{adj} = \mathbf{\sqrt{3}}$. (The missing side does not always come out as a whole number—surds work just as smoothly.)

| $\sin \theta$ | $\cos \theta$ | $\tan \theta$ | $\csc \theta$ | $\sec \theta$ | $\cot \theta$ |
|---|---|---|---|---|---|
| $\frac{1}{2}$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{\sqrt{3}}$ | $2$ | $\frac{2}{\sqrt{3}}$ | $\sqrt{3}$ |

**Check:** $1^2 + (\sqrt{3})^2 = 1 + 3 = 4 = 2^2$ ✅. Notice these are the exact Topic 4 values for $30^\circ$, which tells us $\theta = 30^\circ$! We will look at spotting angles like this in Part C.

### Example 6: Given $\tan A = \frac{4}{3}$, Find $\frac{\sin A + \cos A}{\sin A - \cos A}$

Since $\tan A = \frac{\text{opp}}{\text{adj}} = \frac{4}{3}$, take $\text{opp} = 4$ and $\text{adj} = 3$.

Then $\text{hyp}^2 = 4^2 + 3^2 = 16 + 9 = 25 \implies \text{hyp} = 5$. So $\sin A = \frac{4}{5}$ and $\cos A = \frac{3}{5}$.

Substitute into the expression:
- $\sin A + \cos A = \frac{4}{5} + \frac{3}{5} = \frac{7}{5}$
- $\sin A - \cos A = \frac{4}{5} - \frac{3}{5} = \frac{1}{5}$
- $\frac{\sin A + \cos A}{\sin A - \cos A} = \frac{7/5}{1/5} = \frac{7}{5} \times 5 = \mathbf{7}$

**Check:** Using $\tan A = \frac{\sin A}{\cos A}$ from Topic 3, divide numerator and denominator by $\cos A$:
$$\frac{\tan A + 1}{\tan A - 1} = \frac{4/3 + 1}{4/3 - 1} = \frac{7/3}{1/3} = 7 \quad ✅$$
Both methods give $7$.

---

## Part B: Solving a Right Triangle (With a Standard Angle)

Now let us go the other way: you are given **one side** and **one standard acute angle**, and asked to find the other two sides. Use the exact values from Topic 4: $\sin 30^\circ = \frac{1}{2}$, $\cos 30^\circ = \frac{\sqrt{3}}{2}$, $\tan 30^\circ = \frac{1}{\sqrt{3}}$, $\sin 45^\circ = \cos 45^\circ = \frac{1}{\sqrt{2}}$, $\tan 45^\circ = 1$, $\sin 60^\circ = \frac{\sqrt{3}}{2}$, $\cos 60^\circ = \frac{1}{2}$, $\tan 60^\circ = \sqrt{3}$.

**Method:** Pick the trigonometric ratio that connects the **known side** and the **side you want to find**, plug in the exact value for the angle, and solve the short equation.

### Example 7: Hypotenuse $12$, Angle $30^\circ$

In $\triangle ABC$, $\angle B = 90^\circ$, $\angle A = 30^\circ$, and hypotenuse $AC = 12$.

- **Find opposite ($BC$):** use $\sin$ (connects $\text{opp}$ and $\text{hyp}$):
  $$\sin 30^\circ = \frac{BC}{12} \implies \frac{1}{2} = \frac{BC}{12} \implies \mathbf{BC = 6}$$
- **Find adjacent ($AB$):** use $\cos$ (connects $\text{adj}$ and $\text{hyp}$):
  $$\cos 30^\circ = \frac{AB}{12} \implies \frac{\sqrt{3}}{2} = \frac{AB}{12} \implies \mathbf{AB = 12 \times \frac{\sqrt{3}}{2} = 6\sqrt{3}}$$

**Check (Pythagoras):** $BC^2 + AB^2 = 6^2 + (6\sqrt{3})^2 = 36 + 108 = 144 = 12^2$ ✅.

### Example 8: Angle $45^\circ$, Adjacent Side $5$

In $\triangle PQR$, $\angle Q = 90^\circ$, $\angle P = 45^\circ$, and adjacent side $PQ = 5$.

- **Find opposite ($QR$):** use $\tan$:
  $$\tan 45^\circ = \frac{QR}{5} \implies 1 = \frac{QR}{5} \implies \mathbf{QR = 5}$$
- **Find hypotenuse ($PR$):** use $\cos$:
  $$\cos 45^\circ = \frac{5}{PR} \implies \frac{1}{\sqrt{2}} = \frac{5}{PR} \implies \mathbf{PR = 5\sqrt{2}}$$

**Check:** $5^2 + 5^2 = 25 + 25 = 50 = (5\sqrt{2})^2 = 25 \times 2$ ✅.

This makes total geometric sense: in a $45^\circ\text{-}45^\circ\text{-}90^\circ$ triangle, the two acute angles are equal, so the two legs must be equal ($5$ and $5$), and the hypotenuse is $\sqrt{2}$ times a leg.

### Example 9: Angle $60^\circ$, Opposite Side $9\sqrt{3}$

In $\triangle XYZ$, $\angle Y = 90^\circ$, $\angle X = 60^\circ$, and opposite side $YZ = 9\sqrt{3}$.

- **Find adjacent ($XY$):** use $\tan$:
  $$\tan 60^\circ = \frac{9\sqrt{3}}{XY} \implies \sqrt{3} = \frac{9\sqrt{3}}{XY} \implies \mathbf{XY = 9}$$
- **Find hypotenuse ($XZ$):** use $\sin$:
  $$\sin 60^\circ = \frac{9\sqrt{3}}{XZ} \implies \frac{\sqrt{3}}{2} = \frac{9\sqrt{3}}{XZ} \implies \mathbf{XZ = \frac{9\sqrt{3} \times 2}{\sqrt{3}} = 18}$$

**Check:** $9^2 + (9\sqrt{3})^2 = 81 + 243 = 324 = 18^2$ ✅.

All three examples follow the exact same rhythm: **choose the right ratio, write the equation, solve, and verify with Pythagoras.**

---

## Part C: Finding the Angle from a Ratio

Whenever a ratio equals one of our **standard values**, we can read the Topic 4 table backwards to find the exact angle!

| Given ratio | Match in standard table | Angle |
|---|---|---|
| $\sin \theta = \frac{1}{2}$ | $\sin 30^\circ = \frac{1}{2}$ | $\theta = 30^\circ$ |
| $\tan \theta = \sqrt{3}$ | $\tan 60^\circ = \sqrt{3}$ | $\theta = 60^\circ$ |
| $\cos \theta = \frac{1}{\sqrt{2}}$ | $\cos 45^\circ = \frac{1}{\sqrt{2}}$ | $\theta = 45^\circ$ |
| $\tan \theta = 1$ | $\tan 45^\circ = 1$ | $\theta = 45^\circ$ |

In Example 5, starting from $\sin \theta = \frac{1}{2}$ gave $\cos \theta = \frac{\sqrt{3}}{2}$ and $\tan \theta = \frac{1}{\sqrt{3}}$—all matching $30^\circ$ in our table, confirming $\theta = 30^\circ$.

**Quick try:** In a right triangle, $\text{opp} = 5$ and $\text{hyp} = 10$. What is $\theta$?
$$\sin \theta = \frac{5}{10} = \frac{1}{2} \implies \mathbf{\theta = 30^\circ} \quad ✅$$

**Keep in mind:** This table-lookup works only when the ratio matches one of our standard angles ($0^\circ, 30^\circ, 45^\circ, 60^\circ, 90^\circ$). For an angle whose sine is $\frac{3}{5}$, finding the degree measure requires trigonometric tables or a scientific calculator (which you will use in later grades). Even without knowing the angle in degrees, Part A lets us find **every single trigonometric ratio** of that angle!

---

## Part D: Comparing $\sin$ and $\cos$ Using Side Lengths

We already know two basic facts about triangles: the hypotenuse is the longest side, and **a larger angle always lies opposite a longer side** (seen in [Congruence of Triangles Part 4](../congruence-of-triangles/congruence-of-triangles-part4.md)). From these two facts alone, we can read off two neat properties of $\sin$ and $\cos$ (just observations—no extra rules to memorize).

**1. $\sin$ and $\cos$ can never exceed $1$ (for an acute angle).**
Since $\sin A = \frac{\text{opp}}{\text{hyp}}$ and $\cos A = \frac{\text{adj}}{\text{hyp}}$, and the hypotenuse is longer than either leg, both fractions have a smaller numerator than denominator—so both are strictly less than $1$. By the same logic, $\csc$ and $\sec$ are always greater than $1$. (Meanwhile, $\tan$ and $\cot$ compare the two legs, so either can be greater than $1$.)

**2. Which is larger: $\sin A$ or $\cos A$?**
Both $\sin A = \frac{\text{opp}}{\text{hyp}}$ and $\cos A = \frac{\text{adj}}{\text{hyp}}$ share the **same denominator** ($\text{hyp}$). Therefore, whichever has the **longer numerator** is the larger ratio!
- If $A > 45^\circ$, then the other acute angle ($90^\circ - A$) is smaller than $45^\circ$, so $\text{opp} > \text{adj}$, which means **$\sin A > \cos A$**.
- If $A < 45^\circ$, then $\text{opp} < \text{adj}$, which means **$\sin A < \cos A$**.
- At $A = 45^\circ$, both legs are equal, so **$\sin 45^\circ = \cos 45^\circ$**.

**Check with the standard table:**
- At $30^\circ$ ($< 45^\circ$): $\sin 30^\circ = 0.5$ and $\cos 30^\circ \approx 0.87$, so $\sin 30^\circ < \cos 30^\circ$ ✅.
- At $60^\circ$ ($> 45^\circ$): $\sin 60^\circ \approx 0.87$ and $\cos 60^\circ = 0.5$, so $\sin 60^\circ > \cos 60^\circ$ ✅.

Now answer without calculating: **which is larger, $\sin 50^\circ$ or $\cos 50^\circ$?** Since $50^\circ > 45^\circ$, **$\sin 50^\circ > \cos 50^\circ$**. And between $\sin 20^\circ$ and $\cos 20^\circ$? ($\cos 20^\circ$ is larger.)

---

## Story Solved: The Puzzle Club Answer

Leo and Sophia sketched $\triangle ABC$ in their notebook. Sophia read $\sin A = \frac{3}{5}$ as $\text{opp} = 3$ and $\text{hyp} = 5$. Leo ran Pythagoras: $\text{adj}^2 = 25 - 9 = 16$, so $\text{adj} = 4$.

Together they wrote the full solution on the clue board:

> **$\sin A = \frac{3}{5}, \quad \cos A = \frac{4}{5}, \quad \tan A = \frac{3}{4}, \quad \csc A = \frac{5}{3}, \quad \sec A = \frac{5}{4}, \quad \cot A = \frac{4}{3}$**

Leo still had one nagging question: "Wait—why were we allowed to pick $3$ and $5$? What if the real triangle had sides $6$ and $10$?"

Sophia smiled and tested it right there: with $\text{opp} = 6$ and $\text{hyp} = 10$, $\text{adj}^2 = 100 - 36 = 64$, so $\text{adj} = 8$. Then $\sin A = \frac{6}{10} = \frac{3}{5}$, $\cos A = \frac{8}{10} = \frac{4}{5}$, and $\tan A = \frac{6}{8} = \frac{3}{4}$—**identical values!** "See?" Sophia said. "Doubling the triangle changes the lengths, never the ratios, because angle $A$ didn't change."

The club mentor stamped a gold star on their sheet: *"Clue solved!"*

---

## Common Pitfalls to Avoid

1. **Mistake 1: Assigning the denominator of $\sin$ or $\cos$ to a leg instead of the hypotenuse.**
   For $\sin A = \frac{3}{5}$, setting $\text{opp} = 3$ and $\text{adj} = 5$ gives $\text{hyp}^2 = 3^2 + 5^2 = 34$, which is wrong because the denominator of $\sin$ is always the **hypotenuse**.
   - **Right:** $\text{opp} = 3$, **$\text{hyp} = 5$**, so $\text{adj} = 4$.

2. **Mistake 2: Forgetting to simplify fractions.**
   With $\text{opp} = 6$ and $\text{hyp} = 10$, $\sin = \frac{6}{10}$ should be simplified to **$\frac{3}{5}$** (and $\frac{5}{5}$ should be simplified to **$1$**).

3. **Mistake 3: Mixing up reciprocals when flipping.**
   If $\sin A = \frac{3}{5}$, then $\csc A = \mathbf{\frac{5}{3}}$ (not $\frac{3}{5}$ and not $\frac{5}{4}$). And remember $\sec A$ is the reciprocal of $\cos A$, not $\sin A$. Always verify that each reciprocal pair multiplies to $1$.

4. **Mistake 4: Getting a value greater than $1$ for $\sin$ or $\cos$.**
   If someone writes "$\sin A = \frac{4}{3}$," that is impossible for any right triangle, because the opposite leg can never be longer than the hypotenuse. If your working ever produces $\sin A > 1$ or $\cos A > 1$, stop and check where you swapped two sides. (By contrast, $\tan A > 1$ is completely fine, such as $\tan 60^\circ = \sqrt{3}$.)

5. **Mistake 5: Adding when you should subtract in Pythagoras (or vice versa).**
   To find the **hypotenuse**, **add** the squares of the two legs. To find a **leg**, **subtract** the known leg's square from $\text{hyp}^2$. In Example 3, we computed $17^2 - 8^2 = 225$. Adding $17^2 + 8^2 = 353$ (not even a square!) is an instant warning sign that you put the hypotenuse in the wrong place.

---

## Quick Recap

- **Finding all ratios from one:** Label two sides of a right triangle using the given ratio, find the third side via Pythagoras, and read off all six ratios.
- This works because **ratios depend only on the angle**, not on the size of the triangle.
- Some ratios lead to a surd for the third side (for example, $\sin \theta = \frac{1}{2} \implies \text{adj} = \sqrt{3}$).
- **Solving a right triangle:** Given a side and a standard angle ($30^\circ, 45^\circ, 60^\circ$), choose the ratio linking the known and unknown sides, solve the equation, and verify with Pythagoras.
- **Finding the angle:** If a ratio matches a value in the standard table, read off the angle directly (e.g., $\sin \theta = \frac{1}{2} \implies 30^\circ$; $\tan \theta = \sqrt{3} \implies 60^\circ$). Non-standard angles require tables or a calculator.
- For an acute angle, $\sin$ and $\cos$ never exceed $1$. For $A > 45^\circ$, $\sin A > \cos A$; for $A < 45^\circ$, $\cos A > \sin A$.

---

## Practice Questions

1. If $\cos \theta = \frac{5}{13}$, find the other five trigonometric ratios of $\theta$.

2. If $\sin A = \frac{9}{41}$, find $\cos A$ and $\tan A$.

3. If $\cot A = \frac{20}{21}$, find $\sin A$, $\cos A$, and $\tan A$.

4. If $\csc \theta = 2$, draw a suitable right triangle, find the remaining five ratios, and state the angle $\theta$.

5. If $\tan A = \frac{3}{4}$, find the value of $\frac{2\sin A + 3\cos A}{4\sin A - \cos A}$.

6. In a right triangle, one acute angle is $60^\circ$ and the hypotenuse is $14$. Find the other two sides, and verify your answer using the Pythagoras theorem.

7. In a right triangle, one acute angle is $45^\circ$ and the side opposite to it is $7\sqrt{2}$. Find the other two sides.

8. Find the acute angle $\theta$ if:
   (a) $\sin \theta = \frac{\sqrt{3}}{2}$
   (b) $\cos \theta = \frac{1}{2}$
   (c) $\tan \theta = \frac{1}{\sqrt{3}}$

9. Without calculating, state which is larger and explain why:
   (a) $\sin 70^\circ$ or $\cos 70^\circ$
   (b) $\sin 15^\circ$ or $\cos 15^\circ$

10. Leo says, "In my triangle, $\sin A = \frac{7}{5}$ and $\cos A = \frac{24}{25}$." Sophia says this cannot be right. Who is correct and why? Also explain what likely went wrong if Leo was actually told $\sin A = \frac{7}{25}$.

11. State True or False:
    (a) If $\sin A = \frac{3}{5}$, then the hypotenuse of every right triangle with angle $A$ must be $5$.
    (b) $\cos A$ can never be greater than $1$.
    (c) In a right triangle, if angle $A$ is less than $45^\circ$, then $\cos A > \sin A$.
    (d) If $\tan A = 1$ (for an acute angle $A$), then $A = 45^\circ$.

### Answers

1. $\cos \theta = \frac{\text{adj}}{\text{hyp}} = \frac{5}{13} \implies \text{adj} = 5, \ \text{hyp} = 13$.
   $\text{opp}^2 = 13^2 - 5^2 = 169 - 25 = 144 \implies \text{opp} = 12$.
   **$\sin \theta = \frac{12}{13}$, $\tan \theta = \frac{12}{5}$, $\csc \theta = \frac{13}{12}$, $\sec \theta = \frac{13}{5}$, $\cot \theta = \frac{5}{12}$** (with $\cos \theta = \frac{5}{13}$).
   Check: $5^2 + 12^2 = 25 + 144 = 169 = 13^2$ ✅.

2. $\text{opp} = 9, \ \text{hyp} = 41$.
   $\text{adj}^2 = 41^2 - 9^2 = 1681 - 81 = 1600 \implies \text{adj} = 40$.
   **$\cos A = \frac{40}{41}$, $\tan A = \frac{9}{40}$.**
   Check: $9^2 + 40^2 = 81 + 1600 = 1681 = 41^2$ ✅.

3. $\cot A = \frac{\text{adj}}{\text{opp}} = \frac{20}{21} \implies \text{adj} = 20, \ \text{opp} = 21$.
   $\text{hyp}^2 = 20^2 + 21^2 = 400 + 441 = 841 \implies \text{hyp} = 29$.
   **$\sin A = \frac{21}{29}$, $\cos A = \frac{20}{29}$, $\tan A = \frac{21}{20}$.**
   Check: $20^2 + 21^2 = 841 = 29^2$ ✅.

4. $\csc \theta = \frac{\text{hyp}}{\text{opp}} = \frac{2}{1} \implies \text{hyp} = 2, \ \text{opp} = 1$.
   $\text{adj}^2 = 2^2 - 1^2 = 4 - 1 = 3 \implies \text{adj} = \sqrt{3}$.
   **$\sin \theta = \frac{1}{2}$, $\cos \theta = \frac{\sqrt{3}}{2}$, $\tan \theta = \frac{1}{\sqrt{3}}$, $\sec \theta = \frac{2}{\sqrt{3}}$, $\cot \theta = \sqrt{3}$.**
   Since $\sin \theta = \frac{1}{2}$, **$\theta = 30^\circ$**.
   Check: $1^2 + (\sqrt{3})^2 = 1 + 3 = 4 = 2^2$ ✅.

5. $\tan A = \frac{3}{4} \implies \text{opp} = 3, \ \text{adj} = 4, \ \text{hyp} = 5$, so $\sin A = \frac{3}{5}$ and $\cos A = \frac{4}{5}$.
   - Numerator: $2\left(\frac{3}{5}\right) + 3\left(\frac{4}{5}\right) = \frac{6}{5} + \frac{12}{5} = \frac{18}{5}$.
   - Denominator: $4\left(\frac{3}{5}\right) - \frac{4}{5} = \frac{12}{5} - \frac{4}{5} = \frac{8}{5}$.
   - Ratio: $\frac{18/5}{8/5} = \frac{18}{8} = \mathbf{\frac{9}{4}}$.
   Check (dividing top and bottom by $\cos A$): $\frac{2\tan A + 3}{4\tan A - 1} = \frac{3/2 + 3}{3 - 1} = \frac{9/2}{2} = \frac{9}{4}$ ✅.

6. Angle $= 60^\circ$, $\text{hyp} = 14$.
   - Opposite $60^\circ$: $\sin 60^\circ = \frac{\text{opp}}{14} \implies \text{opp} = 14 \times \frac{\sqrt{3}}{2} = \mathbf{7\sqrt{3}}$.
   - Adjacent: $\cos 60^\circ = \frac{\text{adj}}{14} \implies \text{adj} = 14 \times \frac{1}{2} = \mathbf{7}$.
   Check: $7^2 + (7\sqrt{3})^2 = 49 + 147 = 196 = 14^2$ ✅.

7. At $45^\circ$, both legs are equal, so $\text{opp} = \text{adj} = \mathbf{7\sqrt{2}}$.
   For the hypotenuse: $\sin 45^\circ = \frac{1}{\sqrt{2}} = \frac{7\sqrt{2}}{\text{hyp}} \implies \text{hyp} = 7\sqrt{2} \times \sqrt{2} = 7 \times 2 = \mathbf{14}$.
   Check: $(7\sqrt{2})^2 + (7\sqrt{2})^2 = 98 + 98 = 196 = 14^2$ ✅.

8. (a) $\sin 60^\circ = \frac{\sqrt{3}}{2} \implies \mathbf{\theta = 60^\circ}$.
   (b) $\cos 60^\circ = \frac{1}{2} \implies \mathbf{\theta = 60^\circ}$.
   (c) $\tan 30^\circ = \frac{1}{\sqrt{3}} \implies \mathbf{\theta = 30^\circ}$.

9. (a) Since $70^\circ > 45^\circ$, the opposite side is longer than the adjacent side, so **$\sin 70^\circ > \cos 70^\circ$**.
   (b) Since $15^\circ < 45^\circ$, the adjacent side is longer than the opposite side, so **$\cos 15^\circ > \sin 15^\circ$**.
   Reason: both share the same denominator (hypotenuse), so the side with the greater numerator produces the larger ratio.

10. **Sophia is correct.** $\sin A = \frac{7}{5} > 1$ is impossible because it would make the opposite side ($7$) longer than the hypotenuse ($5$), whereas the hypotenuse is always the longest side.
    If $\sin A = \frac{7}{25}$, then $\text{opp} = 7$ and $\text{hyp} = 25$, giving $\text{adj}^2 = 625 - 49 = 576 \implies \text{adj} = 24$, so **$\cos A = \frac{24}{25}$** matches! Leo simply misread or miscopied $\frac{7}{25}$ as $\frac{7}{5}$.
    Check: $7^2 + 24^2 = 49 + 576 = 625 = 25^2$ ✅.

11. (a) **False** ❌. That is only one possible triangle; the hypotenuse could be $10, 15$, or any multiple, while the ratio $\frac{\text{opp}}{\text{hyp}}$ stays $\frac{3}{5}$.
    (b) **True** ✅. $\cos A = \frac{\text{adj}}{\text{hyp}}$, and the adjacent leg is never longer than the hypotenuse.
    (c) **True** ✅. An angle under $45^\circ$ lies opposite the shorter leg, so $\text{opp} < \text{adj}$ and $\sin A < \cos A$.
    (d) **True** ✅. In our acute-angle table, $\tan 45^\circ = 1$ uniquely.

---

Once you know a single ratio, the entire triangle opens up: choose matching sides, apply Pythagoras, and read off every ratio.

**What's next?** In Topic 4's table, we noticed a curious coincidence: $\sin 30^\circ$ and $\cos 60^\circ$ are both $\frac{1}{2}$. In Topic 6, we will prove why that is no coincidence at all, and uncover three powerful **identities**—including $\sin^2 \theta + \cos^2 \theta = 1$—that hold true for *every* acute angle!
