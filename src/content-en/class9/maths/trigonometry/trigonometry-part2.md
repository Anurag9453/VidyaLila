# Chapter: Trigonometry (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **Continues from [trigonometry.md](trigonometry.md)** (which covers Topic 1: why we need trigonometry, naming the hypotenuse, opposite, and adjacent sides in a right triangle, and how opposite and adjacent swap when the reference angle changes).
> **Helpful background:** [Pythagoras Theorem](../pythagoras-theorem/pythagoras-theorem.md) for finding a missing third side.
> **Topics covered in this file:**
> 2. Sine, Cosine, and Tangent ($\sin$, $\cos$, and $\tan$)

---

# Topic 2: Sine, Cosine, and Tangent ($\sin$, $\cos$, and $\tan$)

In Topic 1, we learned to name the three sides of a right-angled triangle relative to an acute angle $\theta$: the **hypotenuse** (longest side, opposite $90^\circ$), the **opposite** side (across from $\theta$), and the **adjacent** side (next to $\theta$). We also saw that switching to the other acute angle swaps the opposite and adjacent sides.

Now the real magic begins. Naming the sides is just the vocabulary; next, we form **ratios** by dividing one side by another. There are three core trigonometric ratios, called **$\sin$**, **$\cos$**, and **$\tan$**. Along the way, we will discover something remarkable: these ratios do **not** depend on the size of the triangle—they depend **only on the angle**.

---

## How Steep Is the Ramp?

A new wheelchair ramp is being built at Sophia's school. The designer, Dr. Bennett, is measuring the entryway with a tape measure while Sophia watches curiously.

**Sophia:** Dr. Bennett, how long are you going to make the ramp?

**Dr. Bennett:** That depends on how high we need to climb. Every ramp is shaped by two distances: how much it goes **up** (the *rise*) and how far forward it runs along flat ground (the *run*). Imagine two ramps. Ramp 1 climbs $1\text{ m}$ over a $12\text{ m}$ run. Ramp 2 climbs $1\text{ m}$ over just a $4\text{ m}$ run.

**Sophia:** Ramp 2 would be way steeper, because it climbs the same height in a much shorter distance!

**Dr. Bennett:** Exactly. Ramp 1 is gentle and easy for a wheelchair; Ramp 2 is steep and hard work to push up. Now, how can we capture "steepness" as a single number?

Sophia thinks for a moment. "Divide the rise by the run? For Ramp 1 that's $1 \div 12$, and for Ramp 2 it's $1 \div 4$."

**Dr. Bennett:** Brilliant! Look at the numbers: $\frac{1}{12}$ is small, and $\frac{1}{4}$ is three times larger. **The bigger the ratio, the steeper the ramp.** And here is an even better trick: suppose I build a tiny **scale model** of Ramp 1 that rises $5\text{ cm}$ over a $60\text{ cm}$ run. What is its ratio? $5 \div 60 = \frac{1}{12}$—the exact same number, the exact same steepness! Small model or full-size ramp, if the slope is the same, $\text{rise} \div \text{run}$ stays the same.

**Sophia:** So the ratio doesn't measure the *size* of the ramp—it measures its **steepness**!

**Dr. Bennett:** And what determines the steepness? Simply the **angle** between the ramp and the flat ground. That is the core idea of this entire topic.

The ramp, the flat ground, and the vertical step form a **right-angled triangle**. Relative to the ground angle, the *rise* is the **opposite** side and the *run* is the **adjacent** side. So Dr. Bennett's $\text{rise} \div \text{run}$ is actually **$\text{opposite} \div \text{adjacent}$**—one of the three fundamental trigonometric ratios, called **$\tan$** (tangent). The other two ratios work in the exact same way.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Trigonometric ratio** | A fraction comparing two sides of a right triangle for a given acute angle | $\frac{\text{opp}}{\text{hyp}}$ |
| **$\sin \theta$ (sine)** | Opposite side divided by hypotenuse: $\frac{\text{opp}}{\text{hyp}}$ | In a $3\text{-}4\text{-}5$ triangle for angle $A$, $\frac{3}{5}$ |
| **$\cos \theta$ (cosine)** | Adjacent side divided by hypotenuse: $\frac{\text{adj}}{\text{hyp}}$ | In a $3\text{-}4\text{-}5$ triangle for angle $A$, $\frac{4}{5}$ |
| **$\tan \theta$ (tangent)** | Opposite side divided by adjacent side: $\frac{\text{opp}}{\text{adj}}$ | In a $3\text{-}4\text{-}5$ triangle for angle $A$, $\frac{3}{4}$ |
| **$\theta$ (theta)** | A Greek letter commonly used to represent an unknown angle, just as $x$ represents a number | $\angle A = \theta$ |
| **SOH-CAH-TOA** | A memory phrase for the three primary ratios | See Part A below |

---

## Part A: The Three Ratios and How to Remember Them

Take a right triangle with an acute angle $\theta$. Using the side names from Topic 1—**hypotenuse** ($\text{hyp}$), **opposite** ($\text{opp}$), and **adjacent** ($\text{adj}$)—we define the three basic trigonometric ratios:

> $$\sin \theta = \frac{\text{opp}}{\text{hyp}}, \qquad \cos \theta = \frac{\text{adj}}{\text{hyp}}, \qquad \tan \theta = \frac{\text{opp}}{\text{adj}}$$

### Memory Aid: SOH-CAH-TOA

Almost every student around the world remembers these three definitions with one catchy phrase broken into three chunks:

- **SOH:** **S**ine $= \frac{\mathbf{O}\text{pposite}}{\mathbf{H}\text{ypotenuse}}$
- **CAH:** **C**osine $= \frac{\mathbf{A}\text{djacent}}{\mathbf{H}\text{ypotenuse}}$
- **TOA:** **T**angent $= \frac{\mathbf{O}\text{pposite}}{\mathbf{A}\text{djacent}}$

In each three-letter chunk, the first letter names the ratio, the second letter is the numerator, and the third letter is the denominator. Say it aloud a couple of times—"SOH-CAH-TOA"—and you will never mix them up.

### Crucial Rule: A Ratio Always Belongs to a Specific Angle

Because "opposite" and "adjacent" change depending on which corner you look from, **$\sin$, $\cos$, and $\tan$ must always be written with an angle**: $\sin A$, $\cos B$, $\tan \theta$. Writing just "$\sin$" without an angle has no meaning.

---

## Part B: First Calculations with a $3\text{-}4\text{-}5$ Triangle

Consider $\triangle ABC$ with $\angle C = 90^\circ$, $AC = 4$, $BC = 3$, and $AB = 5$. (Check: $3^2 + 4^2 = 9 + 16 = 25 = 5^2$ ✅.)

The hypotenuse is $AB = 5$ (the longest side, opposite $90^\circ$).

### Example 1: All Three Ratios for Angle $A$

Relative to $\angle A$, the opposite side is $BC = 3$ and the adjacent side is $AC = 4$:

- $\sin A = \frac{\text{opp}}{\text{hyp}} = \mathbf{\frac{3}{5}}$
- $\cos A = \frac{\text{adj}}{\text{hyp}} = \mathbf{\frac{4}{5}}$
- $\tan A = \frac{\text{opp}}{\text{adj}} = \mathbf{\frac{3}{4}}$

### Example 2: All Three Ratios for the Other Acute Angle $B$

Now look from $\angle B$. The opposite and adjacent sides **swap**:

Relative to $\angle B$, the opposite side is $AC = 4$ and the adjacent side is $BC = 3$:

- $\sin B = \mathbf{\frac{4}{5}}$
- $\cos B = \mathbf{\frac{3}{5}}$
- $\tan B = \mathbf{\frac{4}{3}}$

Notice something interesting: $\sin A = \frac{3}{5}$ and $\cos B = \frac{3}{5}$, while $\cos A = \frac{4}{5}$ and $\sin B = \frac{4}{5}$. We will see the full reason behind this neat swap in Topic 6. For now, just notice that **changing the angle changes the ratios**, because opposite and adjacent swap places.

**Check:** The hypotenuse stayed $5$ in both cases; only opposite and adjacent traded places, so the same fractions $\frac{3}{5}$ and $\frac{4}{5}$ swapped between $\sin$ and $\cos$ ✅.

---

## Part C: Ratios Depend Only on the Angle, Never on Triangle Size

Now let us test the big discovery from Dr. Bennett's ramp.

Take a $3\text{-}4\text{-}5$ right triangle and zoom in so every side doubles in length, giving a **$6\text{-}8\text{-}10$ triangle**. Both triangles have the exact same shape—just a small print and a large print of the same picture—so angle $A$ is identical in both.

Let us compute the ratios for angle $A$ in each triangle:

**Small triangle ($3\text{-}4\text{-}5$):**
- $\sin A = \frac{3}{5}$
- $\cos A = \frac{4}{5}$
- $\tan A = \frac{3}{4}$

**Enlarged triangle ($6\text{-}8\text{-}10$):**
- $\sin A = \frac{6}{10} = \mathbf{\frac{3}{5}}$
- $\cos A = \frac{8}{10} = \mathbf{\frac{4}{5}}$
- $\tan A = \frac{6}{8} = \mathbf{\frac{3}{4}}$

Both triangles give the **exact same ratios** ✅. When every side is multiplied by $2$, the factor of $2$ appears in both the numerator and the denominator and cancels out!

Triple the sides to $9\text{-}12\text{-}15$: $\tan A = \frac{9}{12} = \frac{3}{4}$. Scale by $1.5$ to $4.5\text{-}6\text{-}7.5$: $\tan A = \frac{4.5}{6} = 0.75 = \frac{3}{4}$. Still identical!

### Why Does This Happen? (Simple Explanation)

Two right triangles with the **same acute angle** have the **same shape**—one is simply a scaled-up or scaled-down version of the other. Scaling multiplies every side by the same factor, so dividing one side by another cancels that scale factor completely. (The formal proof uses *similar triangles*, which you will study in more detail later.) For now, remember: **same angle $\implies$ same shape $\implies$ same ratio**.

### Solving the Ramp Question

Returning to Sophia and Dr. Bennett's ramp:
- Dr. Bennett's scale model: $\text{rise} = 5\text{ cm}$, $\text{run} = 60\text{ cm}$, so $\tan(\text{angle}) = \frac{5}{60} = \mathbf{\frac{1}{12}}$.
- Full-size ramp: $\text{rise} = 0.5\text{ m}$, $\text{run} = 6\text{ m}$, so $\tan(\text{angle}) = \frac{0.5}{6} = \mathbf{\frac{1}{12}}$.

The model is tiny and the real ramp is large, yet their ratios match because their **angle is the same**. That is why Dr. Bennett can test the steepness on a small desktop model and know the full-size ramp will have the exact same slope.

**Sophia's follow-up:** "What if a ramp climbs $1\text{ m}$ over a $1\text{ m}$ run?" Then $\tan = \frac{1}{1} = 1$—far too steep for a wheelchair! And $2\text{ m}$ of rise over $1\text{ m}$ of run gives $\tan = 2$: useless as a wheelchair ramp, yet completely valid as a value of $\tan \theta$. So $\tan \theta$ can easily be greater than $1$.

---

## Part D: More Worked Examples with Different Triangles

### Example 3: A $5\text{-}12\text{-}13$ Triangle

In $\triangle PQR$, $\angle Q = 90^\circ$, $PQ = 5$, $QR = 12$, and $PR = 13$. (Check: $25 + 144 = 169 = 13^2$ ✅.)

**For angle $P$:** $\text{opp} = QR = 12$, $\text{adj} = PQ = 5$, $\text{hyp} = PR = 13$.
- $\sin P = \mathbf{\frac{12}{13}}$
- $\cos P = \mathbf{\frac{5}{13}}$
- $\tan P = \mathbf{\frac{12}{5}}$

**For angle $R$:** $\text{opp} = PQ = 5$, $\text{adj} = QR = 12$, $\text{hyp} = 13$.
- $\sin R = \mathbf{\frac{5}{13}}$
- $\cos R = \mathbf{\frac{12}{13}}$
- $\tan R = \mathbf{\frac{5}{12}}$

**Check:** Both angles use the exact same lengths $5$, $12$, and $13$, with opposite and adjacent swapping roles ✅.

### Example 4: An $8\text{-}15\text{-}17$ Triangle

In $\triangle XYZ$, $\angle Y = 90^\circ$, $XY = 15$, $YZ = 8$, and $XZ = 17$. (Check: $64 + 225 = 289 = 17^2$ ✅.)

For angle $X$: $\text{opp} = YZ = 8$, $\text{adj} = XY = 15$, $\text{hyp} = XZ = 17$.
- $\sin X = \mathbf{\frac{8}{17}}$
- $\cos X = \mathbf{\frac{15}{17}}$
- $\tan X = \mathbf{\frac{8}{15}}$

None of these fractions simplify further because $8$, $15$, and $17$ share no common factors.

### Example 5: One Side Missing (Pythagoras First, Then Ratios)

In a right triangle, the hypotenuse is $26$ and the side opposite angle $\theta$ is $10$. Find the adjacent side, then calculate $\sin \theta$, $\cos \theta$, and $\tan \theta$.

**Step 1: Find the adjacent side.** Using Pythagoras ($26^2 = 10^2 + \text{adj}^2$):
$$\text{adj}^2 = 676 - 100 = 576 \implies \text{adj} = \mathbf{24}$$

**Step 2: Write the ratios in simplest form.**
- $\sin \theta = \frac{10}{26} = \mathbf{\frac{5}{13}}$
- $\cos \theta = \frac{24}{26} = \mathbf{\frac{12}{13}}$
- $\tan \theta = \frac{10}{24} = \mathbf{\frac{5}{12}}$

Notice these match angle $R$ in Example 3—because $10\text{-}24\text{-}26$ is simply double $5\text{-}12\text{-}13$ ✅.

**Check:** $10^2 + 24^2 = 100 + 576 = 676 = 26^2$ ✅.

### Example 6: Equal Legs (Involving a Surd)

In a right triangle, $\text{opp} = 1$ and $\text{adj} = 1$. Find the hypotenuse and the three ratios for $\theta$.

By Pythagoras:
$$\text{hyp}^2 = 1^2 + 1^2 = 2 \implies \text{hyp} = \mathbf{\sqrt{2}}$$

Now write the ratios:
- $\sin \theta = \mathbf{\frac{1}{\sqrt{2}}}$
- $\cos \theta = \mathbf{\frac{1}{\sqrt{2}}}$
- $\tan \theta = \frac{1}{1} = \mathbf{1}$

Do not worry about seeing $\sqrt{2}$ in the denominator—$\frac{1}{\sqrt{2}}$ (about $0.707$) is a perfectly valid exact number. (We will look at rationalising it when we study standard angles in Topic 4.)

**Check:** $1^2 + 1^2 = 2 = (\sqrt{2})^2$ ✅.

### Example 7: A Different Orientation

In $\triangle ABC$, $\angle B = 90^\circ$, $AB = 7$, $BC = 24$, and $AC = 25$. (Check: $49 + 576 = 625 = 25^2$ ✅.) Find the three ratios for angle $C$.

Relative to angle $C$: $\text{opp} = AB = 7$, $\text{adj} = BC = 24$, and $\text{hyp} = AC = 25$.
- $\sin C = \mathbf{\frac{7}{25}}$
- $\cos C = \mathbf{\frac{24}{25}}$
- $\tan C = \mathbf{\frac{7}{24}}$

Remember: always locate the hypotenuse opposite the **$90^\circ$ angle**, no matter how the triangle is turned or labelled.

### Example 8: Which Ramp Is Steeper?

Ramp A climbs $2\text{ m}$ over a $10\text{ m}$ horizontal run. Ramp B climbs $3\text{ m}$ over an $18\text{ m}$ horizontal run. Which ramp is steeper?

- For Ramp A: $\tan(\text{angle}) = \frac{2}{10} = \frac{1}{5}$
- For Ramp B: $\tan(\text{angle}) = \frac{3}{18} = \frac{1}{6}$

Since $\frac{1}{5} > \frac{1}{6}$, **Ramp A is steeper**.

**Check:** $\frac{1}{5} = 0.2$ and $\frac{1}{6} \approx 0.167$, and $0.2 > 0.167$ ✅.

---

## Part E: Four Useful Observations

These are simple observations you can see directly from the definitions (we are not proving them formally yet).

**1. Trigonometric ratios have no units.**
A ratio divides one length by another, such as $3\text{ cm} \div 5\text{ cm}$. The centimetres cancel out, so we write $\sin \theta = \frac{3}{5}$, never "$\frac{3}{5}\text{ cm}$."

**2. For an acute angle, $\sin \theta$ and $\cos \theta$ always lie between $0$ and $1$.**
Because the hypotenuse is always the longest side of a right triangle, both $\frac{\text{opp}}{\text{hyp}}$ and $\frac{\text{adj}}{\text{hyp}}$ divide a shorter side by the longest side—so the result must be less than $1$. If a calculation ever gives you $\sin \theta = \frac{5}{4}$, you know right away something went wrong.

**3. $\tan \theta$ can be greater than $1$.**
Tangent does not use the hypotenuse: $\tan \theta = \frac{\text{opp}}{\text{adj}}$. Whenever the opposite side is longer than the adjacent side, $\tan \theta > 1$ (like $\tan B = \frac{4}{3}$ in Example 2, or $\tan P = \frac{12}{5}$ in Example 3).

**4. Does the triangle's size affect any ratio?**
No—as we saw in Part C, $\sin$, $\cos$, and $\tan$ depend solely on the angle. Enlarge or shrink the triangle while keeping the angles fixed, and every ratio stays identical.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Writing $\sin \theta = \frac{\text{adj}}{\text{hyp}}$.**
   In a $3\text{-}4\text{-}5$ triangle for angle $A$:
   - Wrong: $\sin A = \frac{4}{5}$ (that is $\frac{\text{adj}}{\text{hyp}}$, which is $\cos A$).
   - Right: $\sin A = \frac{\text{opp}}{\text{hyp}} = \mathbf{\frac{3}{5}}$.
   Remember **SOH**: Sine = Opposite $\div$ Hypotenuse.

2. **Mistake 2: Using the opposite and adjacent sides of the wrong angle.**
   Looking at $\angle A$ in the $3\text{-}4\text{-}5$ triangle (where opposite is $3$), writing $\tan A = \frac{4}{3}$ uses angle $B$'s sides by mistake.
   - Always ask first: **which angle am I looking from?** Then label opposite and adjacent for that angle: $\tan A = \frac{3}{4}$, while $\tan B = \frac{4}{3}$.

3. **Mistake 3: Forgetting to simplify fractions.**
   In a $6\text{-}8\text{-}10$ triangle, $\sin A = \frac{6}{10}$ should be simplified to **$\frac{3}{5}$**, which also reveals right away that it is the same angle as in a $3\text{-}4\text{-}5$ triangle. Always divide out common factors.

4. **Mistake 4: Treating the hypotenuse as one of the legs in $\tan \theta$.**
   In a $5\text{-}12\text{-}13$ triangle, writing $\tan = \frac{12}{13}$ wrongly uses the hypotenuse ($13$) as the adjacent side. The hypotenuse **never appears in $\tan$**—$\tan \theta = \frac{\text{opp}}{\text{adj}}$ uses only the two legs.

5. **Mistake 5: Thinking a larger triangle changes the trigonometric ratios.**
   Someone might think $\tan A$ is bigger in a $6\text{-}8\text{-}10$ triangle than in a $3\text{-}4\text{-}5$ triangle because the sides are longer. False: $\frac{6}{8} = \frac{3}{4}$. **Same angle, same ratio.**

---

## Quick Recap

- For an acute angle $\theta$ in a right-angled triangle:
  - **$\sin \theta = \frac{\text{opp}}{\text{hyp}}$**
  - **$\cos \theta = \frac{\text{adj}}{\text{hyp}}$**
  - **$\tan \theta = \frac{\text{opp}}{\text{adj}}$**
- Memory aid: **SOH-CAH-TOA**.
- Every ratio is defined **relative to a specific angle**; changing the angle swaps opposite and adjacent and changes the ratios.
- **Ratios depend only on the angle, not on the size of the triangle.** Both $3\text{-}4\text{-}5$ and $6\text{-}8\text{-}10$ give $\tan = \frac{3}{4}$.
- Steepness of a ramp $= \frac{\text{rise}}{\text{run}} = \tan(\text{angle})$. A larger ratio means a steeper ramp.
- If one side is missing, find it with Pythagoras first, then write the ratios.
- For an acute angle, $\sin \theta$ and $\cos \theta$ lie between $0$ and $1$ (since the hypotenuse is the longest side), while $\tan \theta$ can be greater than $1$.
- Trigonometric ratios have **no units**.

---

## Practice Questions

1. In $\triangle ABC$, $\angle B = 90^\circ$, $AB = 5$, $BC = 12$, and $AC = 13$. Find $\sin A$, $\cos A$, and $\tan A$. Then find $\sin C$, $\cos C$, and $\tan C$.

2. In a right triangle, the hypotenuse is $25$ and the side opposite to angle $\theta$ is $7$. Find the adjacent side, and then find $\sin \theta$, $\cos \theta$, and $\tan \theta$.

3. The two legs of a right triangle are $9$ and $12$. Find the hypotenuse. For the angle opposite the side of length $9$, find $\sin$, $\cos$, and $\tan$, and write each in simplest form.

4. Two right triangles have sides $6, 8, 10$ and $9, 12, 15$. For the smallest angle in each triangle, find $\tan$. What do you notice, and why does it happen?

5. Ramp A rises $3\text{ m}$ over a horizontal run of $15\text{ m}$. Ramp B rises $2\text{ m}$ over a horizontal run of $8\text{ m}$. Which ramp is steeper? Show your working using the ratio $\frac{\text{rise}}{\text{run}}$.

6. A student claims that in some right triangle, for an acute angle $\theta$, $\sin \theta = \frac{5}{4}$. Is this possible? Explain using the idea of the hypotenuse.

7. In a right triangle, both legs are $2\text{ units}$ long. Find the hypotenuse, and then find $\sin \theta$, $\cos \theta$, and $\tan \theta$ for one of the acute angles. Leave any square root in surd form.

8. State True or False:
   (a) For an acute angle, $\tan \theta$ can be greater than $1$.
   (b) $\sin \theta = \frac{\text{adj}}{\text{hyp}}$.
   (c) If you enlarge a right triangle while keeping its angles the same, the value of $\tan \theta$ changes.
   (d) For an acute angle in a right triangle, $\cos \theta$ is always less than $1$.
   (e) The value $\sin \theta = \frac{3}{5}$ means the opposite side must be $3\text{ cm}$ and the hypotenuse must be $5\text{ cm}$.

### Answers

1. Since $\angle B = 90^\circ$, the hypotenuse is $AC = 13$ (check: $25 + 144 = 169$ ✅).
   - **Angle $A$:** $\text{opp} = BC = 12$, $\text{adj} = AB = 5$.
     $\sin A = \mathbf{\frac{12}{13}}$, $\cos A = \mathbf{\frac{5}{13}}$, $\tan A = \mathbf{\frac{12}{5}}$.
   - **Angle $C$:** $\text{opp} = AB = 5$, $\text{adj} = BC = 12$.
     $\sin C = \mathbf{\frac{5}{13}}$, $\cos C = \mathbf{\frac{12}{13}}$, $\tan C = \mathbf{\frac{5}{12}}$.

2. $\text{adj}^2 = 25^2 - 7^2 = 625 - 49 = 576 \implies \text{adj} = \mathbf{24}$.
   $\sin \theta = \mathbf{\frac{7}{25}}$, $\cos \theta = \mathbf{\frac{24}{25}}$, $\tan \theta = \mathbf{\frac{7}{24}}$.
   Check: $7^2 + 24^2 = 49 + 576 = 625 = 25^2$ ✅.

3. $\text{hyp}^2 = 9^2 + 12^2 = 81 + 144 = 225 \implies \text{hyp} = \mathbf{15}$.
   For the angle opposite $9$: $\text{opp} = 9$, $\text{adj} = 12$.
   $\sin = \frac{9}{15} = \mathbf{\frac{3}{5}}$, $\cos = \frac{12}{15} = \mathbf{\frac{4}{5}}$, $\tan = \frac{9}{12} = \mathbf{\frac{3}{4}}$.

4. The smallest angle sits opposite the shortest side ($6$ or $9$).
   - First triangle: $\tan = \frac{6}{8} = \mathbf{\frac{3}{4}}$.
   - Second triangle: $\tan = \frac{9}{12} = \mathbf{\frac{3}{4}}$.
   Both values are equal! The two triangles have the exact same shape (scaled copies of $3\text{-}4\text{-}5$), so their corresponding angles are equal, and trigonometric ratios depend only on the angle, not the size.

5. Ramp A: $\frac{3}{15} = \frac{1}{5} = 0.2$. Ramp B: $\frac{2}{8} = \frac{1}{4} = 0.25$.
   Since $0.25 > 0.2$, **Ramp B is steeper**.

6. **No, this is impossible.** Since $\sin \theta = \frac{\text{opp}}{\text{hyp}}$ and the hypotenuse is always the longest side of a right triangle, the opposite side (a leg) must be shorter than the hypotenuse. Therefore $\sin \theta$ must be less than $1$, whereas $\frac{5}{4} = 1.25 > 1$.

7. $\text{hyp}^2 = 2^2 + 2^2 = 4 + 4 = 8 \implies \text{hyp} = \sqrt{8} = \mathbf{2\sqrt{2}}$.
   For either acute angle, $\text{opp} = 2$ and $\text{adj} = 2$:
   $\sin \theta = \frac{2}{2\sqrt{2}} = \mathbf{\frac{1}{\sqrt{2}}}$, $\cos \theta = \frac{2}{2\sqrt{2}} = \mathbf{\frac{1}{\sqrt{2}}}$, $\tan \theta = \frac{2}{2} = \mathbf{1}$.
   (These match Example 6 because this triangle is simply double the $1\text{-}1\text{-}\sqrt{2}$ triangle!)

8. (a) **True** ✅. For example, $\tan = \frac{12}{5}$ or $\frac{4}{3}$.
   (b) **False** ❌. $\sin \theta = \frac{\text{opp}}{\text{hyp}}$; $\frac{\text{adj}}{\text{hyp}}$ is $\cos \theta$.
   (c) **False** ❌. Ratios depend only on the angle, not on the size of the triangle.
   (d) **True** ✅. $\cos \theta = \frac{\text{adj}}{\text{hyp}}$, and the adjacent leg is always shorter than the hypotenuse.
   (e) **False** ❌. $\sin \theta = \frac{3}{5}$ only tells us the **ratio** $\text{opp} : \text{hyp} = 3 : 5$; the actual sides could be $3\text{ cm}$ and $5\text{ cm}$, $6\text{ cm}$ and $10\text{ cm}$, or $30\text{ m}$ and $50\text{ m}$. Ratios have no units.

---

You now have $\sin$, $\cos$, and $\tan$ in your toolkit, and you know they depend solely on the angle rather than the size of the triangle. Whenever you set up a problem, chant SOH-CAH-TOA and identify your reference angle first.

**What's next?** These three ratios do not travel alone. What happens if we flip each fraction upside down? That gives us three more ratios—the subject of Topic 3.
