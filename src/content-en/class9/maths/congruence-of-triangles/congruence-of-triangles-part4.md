# Chapter: Congruence of Triangles (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [congruence-of-triangles-part3.md](congruence-of-triangles-part3.md).** (Topic 1 is in [congruence-of-triangles.md](congruence-of-triangles.md), and Topic 2 is in [congruence-of-triangles-part2.md](congruence-of-triangles-part2.md).)
> **Topics covered in this file:**
> 4. Inequalities in a Triangle, and Distance Between a Point and a Line

---

# Topic 4: Inequalities in a Triangle, and Distance Between a Point and a Line

In Topic 3, through Leo's garden swing, we saw that when **two sides** of a triangle are equal, the **angles opposite** them are equal (Isosceles Triangle Theorem), and vice versa (its converse). Now a natural question arises:

> What if the sides are **not equal**? Does the longer side face a larger angle or a smaller one?

In this final topic of the chapter, we step beyond "equals" into the world of **"greater than and less than."** We will also prove a very practical engineering fact: what is the **shortest possible path** from a point to a straight line?

---

## The Story of the Park Footpath

Across the street from Maya's apartment lies a large rectangular city park. Paved walkways run neatly along its outer edges from one corner to the next.

Yet Maya noticed something curious: cutting straight diagonally across the lawn was a **well-worn dirt footpath**. Pedestrians routinely left the paved corner path to walk diagonally straight across the grass.

```
   Maya's Building (A)
        *----------------------* B (Park Corner)
          `-.                  |
             `-.   dirt path   |  paved walkway
                `-. (shortcut) |
                   `-.         |
                      `-.      |
                         `-.   |
                            `-*
                              C (Library Gate)
```

Why? Everyone instinctively knows that walking from $A$ to $B$ and then from $B$ to $C$ is **longer** than walking straight from $A$ to $C$:

$$AB + BC > AC$$

This is a **triangle inequality**. We first saw it experimentally with sticks back in [Triangles, Topic 1](../triangles/triangles.md); today, we will **prove** it rigorously.

And here is a second problem. At a construction site, engineer Dr. Bennett needs to run a water pipe from a pump station ($P$) to a straight main trench ($l$). Because heavy-duty piping is expensive, she wants the **shortest possible pipe**. In which direction should she lay it? We will prove the exact answer at the end of this topic.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Inequality** | A comparison showing that two quantities are not equal—one is greater than or less than the other | $AC > AB$ |
| **Longest side** | The side of greatest length in a triangle | The hypotenuse in a right-angled triangle |
| **Perpendicular distance** | The length of the segment drawn from a point to a line at $90^\circ$ | Straight pipe from pump $P$ to trench $l$ |
| **Range of the third side** | The interval of possible lengths for the third side given two sides | If two sides are $5$ and $8$, then $3 < x < 13$ |

Quick reminder: `>` means "greater than" and `<` means "less than"—the wide mouth always opens toward the larger value.

---

## Part A: Larger Angle Opposite the Longer Side

### Activity First

Sketch a triangle with noticeably different side lengths—say $3\text{ cm}$, $5\text{ cm}$, and $7\text{ cm}$—and measure all three angles with a protractor.

You will observe:
- The **largest** angle sits opposite the $7\text{ cm}$ (**longest**) side.
- The **smallest** angle sits opposite the $3\text{ cm}$ (**shortest**) side.

This is no coincidence—it is a universal theorem.

### The "Longer Side Opposite Larger Angle" Theorem

> **If two sides of a triangle are unequal, the angle opposite the longer side is larger (greater).**

### Proof

**Given:** In $\triangle ABC$, $AC > AB$.
**To prove:** $\angle ABC > \angle ACB$ (that is, $\angle B > \angle C$).

Note: $\angle B$ is opposite $AC$, and $\angle C$ is opposite $AB$.

**Construction:** Mark a point $D$ on side $AC$ such that **$AD = AB$**. Join $B$ to $D$.

```
                A
               / \
              /   \
             /     \  D  (AD = AB)
            /    .--*
           /  .-'    \
          / .'        \
         /.'           \
        B---------------C
```

(Because $AC$ is longer than $AB$, point $D$ lies strictly inside segment $AC$.)

| Statement | Reason |
|---|---|
| 1. $AD = AB$ | Construction |
| 2. $\angle ABD = \angle ADB$ | $\triangle ABD$ is isosceles; angles opposite equal sides are equal (Topic 3) |
| 3. $\angle ADB > \angle DCB$ | $\angle ADB$ is an **exterior angle** of $\triangle BDC$, so it is greater than either interior opposite angle ([Triangles, Topic 2](../triangles/triangles-part2.md)) |
| 4. $\angle ADB > \angle ACB$ | $\angle DCB$ and $\angle ACB$ name the same angle ($D$ lies on $AC$) |
| 5. $\angle ABD > \angle ACB$ | From Steps 2 and 4 |
| 6. $\angle ABC > \angle ABD$ | $D$ lies on $AC$, so ray $BD$ lies inside $\angle ABC$; the whole is greater than its part ([Euclid's Axiom 5](../euclids-geometry/euclids-geometry.md)) |
| 7. $\angle ABC > \angle ACB$ | From Steps 5 and 6 |

**Hence proved.**

In plain words: sitting inside $\angle B$ is a smaller piece $\angle ABD$ that is *already* larger than $\angle C$—so the full angle $\angle B$ must be larger still!

---

## Part B: The Converse Theorem: Longer Side Opposite the Larger Angle

### The "Larger Angle Opposite Longer Side" Theorem

> **In any triangle, the side opposite the larger (greater) angle is longer.**

### Proof (Three Paths, Two Blocked)

**Given:** In $\triangle ABC$, $\angle B > \angle C$.
**To prove:** $AC > AB$.

There are only **three possible relationships** between the lengths $AC$ and $AB$:
1. $AC = AB$
2. $AC < AB$
3. $AC > AB$

Let us test the first two:

- **Suppose $AC = AB$:** Then by the Isosceles Triangle Theorem (Topic 3), $\angle B = \angle C$. That contradicts the given fact $\angle B > \angle C$. Path 1 is blocked. ❌
- **Suppose $AC < AB$:** Then $AB$ is longer than $AC$, so by Part A the angle opposite $AB$ would be greater than the angle opposite $AC$—meaning $\angle C > \angle B$. That also contradicts $\angle B > \angle C$. Path 2 is blocked. ❌

Only the third possibility remains: **$AC > AB$**. ✅

This technique is called **proof by contradiction** (introduced in [Euclid's Geometry, Topic 4](../euclids-geometry/euclids-geometry-part4.md)): eliminate every false alternative until only the true conclusion remains.

### Both Theorems in One Line

> **Longer side $\iff$ Larger opposite angle.**
> **Shorter side $\iff$ Smaller opposite angle.**

---

## Part C: Longest and Shortest Sides

Combining both theorems immediately gives:

- The **longest side** lies opposite the **largest angle**.
- The **shortest side** lies opposite the **smallest angle**.

**Missing-letter trick:** The side opposite an angle is named by the **other two letters** of the triangle. Opposite $\angle A$ is **$BC$**, opposite $\angle B$ is **$CA$**, and opposite $\angle C$ is **$AB$**.

### Example 1

In $\triangle ABC$, $\angle A = 50^\circ$ and $\angle B = 70^\circ$. Identify the longest and shortest sides.

- Angle sum ([Triangles, Topic 2](../triangles/triangles-part2.md)): $\angle C = 180^\circ - 50^\circ - 70^\circ = \mathbf{60^\circ}$
- Order of angles: $\angle A = 50^\circ$ (smallest) $< \angle C = 60^\circ < \angle B = 70^\circ$ (largest)
- Longest side $=$ opposite $\angle B = \mathbf{AC}$
- Shortest side $=$ opposite $\angle A = \mathbf{BC}$
- Full order: **$BC < AB < AC$**

Check: $50^\circ < 60^\circ < 70^\circ$, matching $BC < AB < AC$. ✅

### Example 2

In $\triangle PQR$, $PQ = 5\text{ cm}$, $QR = 7\text{ cm}$, and $PR = 6\text{ cm}$. Arrange the angles in ascending order.

| Side | Length | Opposite Angle |
|---|---|---|
| $PQ$ | $5\text{ cm}$ | $\angle R$ |
| $PR$ | $6\text{ cm}$ | $\angle Q$ |
| $QR$ | $7\text{ cm}$ | $\angle P$ |

Order: **$\angle R < \angle Q < \angle P$** ✅

### Example 3

The angles of $\triangle ABC$ are $2x$, $3x$, and $4x$ ($\angle A = 2x$, $\angle B = 3x$, $\angle C = 4x$). Which side is longest?

$$2x + 3x + 4x = 180^\circ \implies 9x = 180^\circ \implies x = 20^\circ$$
Angles: $\angle A = 40^\circ$, $\angle B = 60^\circ$, $\angle C = 80^\circ$.
The largest angle is $\angle C$, so the longest side is **$AB$**. The smallest angle is $\angle A$, so the shortest side is **$BC$**.

Check: $40^\circ + 60^\circ + 80^\circ = 180^\circ$ ✅

### Example 4: In a Right Triangle, the Hypotenuse Is the Longest Side

**Given:** In $\triangle ABC$, $\angle B = 90^\circ$.
**To prove:** $AC$ is the longest side.

- $\angle A + \angle C = 180^\circ - 90^\circ = 90^\circ$ (angle sum property).
- Since both $\angle A$ and $\angle C$ are positive, both are **strictly less than $90^\circ$**.
- Therefore, $\angle B$ is the largest angle in $\triangle ABC$.
- Because the longest side lies opposite the largest angle, **$AC$ (the hypotenuse) is the longest side.** ✅

### Example 5: Obtuse Triangle

By the exact same reasoning, an obtuse angle exceeds $90^\circ$, so the sum of the other two angles is less than $90^\circ$. Thus the obtuse angle is always the largest angle, and **the side opposite the obtuse angle is the longest side**.

### Example 6

In $\triangle PQR$, $PQ > PR$. $QS$ and $RS$ are the bisectors of $\angle Q$ and $\angle R$ respectively, meeting at $S$. Show that $SQ > SR$.

```
            P
           / \
          /   \
         /  S  \
        /  / \  \
       / /     \ \
      Q-----------R
```

| Statement | Reason |
|---|---|
| 1. $PQ > PR$ | Given |
| 2. $\angle R > \angle Q$ | $\angle R$ is opposite longer side $PQ$ (Part A) |
| 3. $\frac{1}{2}\angle R > \frac{1}{2}\angle Q$ | Halving both sides |
| 4. $\angle SRQ > \angle SQR$ | $QS$ and $RS$ are bisectors, so $\angle SRQ = \frac{1}{2}\angle R$ and $\angle SQR = \frac{1}{2}\angle Q$ |
| 5. $SQ > SR$ | In $\triangle SQR$, $SQ$ is opposite larger angle $\angle SRQ$ (Part B) |

**Hence proved.**

---

## Part D: Proof of the Triangle Inequality

In [Triangles, Topic 1](../triangles/triangles.md), we tested sticks of lengths $3$, $4$, and $8$ and observed they could not close into a triangle because $3 + 4 < 8$. Back then we only tested it experimentally. Now, using Parts A and B, we can **prove** it—and explain Maya's park shortcut at the same time.

### Triangle Inequality Theorem

> **The sum of any two sides of a triangle is greater than the third side.**

### Proof

**Given:** $\triangle ABC$.
**To prove:** $BA + AC > BC$.

**Construction:** Extend side $BA$ past $A$ to point $D$ such that **$AD = AC$**. Join $D$ to $C$.

```
        D
        |\
        | \
        |  \
        A   \       (AD = AC)
        |\   \
        | \   \
        |  \   \
        B---\---C
             \__/
```

(Note: $B, A, D$ are collinear in that order, so $BD = BA + AD$.)

| Statement | Reason |
|---|---|
| 1. $AD = AC$ | Construction |
| 2. $\angle ADC = \angle ACD$ | $\triangle ADC$ is isosceles; angles opposite equal sides are equal (Topic 3) |
| 3. $\angle BCD > \angle ACD$ | $A$ lies between $B$ and $D$, so ray $CA$ lies inside $\angle BCD$; the whole is greater than its part (Euclid's Axiom 5) |
| 4. $\angle BCD > \angle ADC$ | From Steps 2 and 3 |
| 5. $\angle BCD > \angle BDC$ | $\angle ADC$ and $\angle BDC$ are the same angle |
| 6. $BD > BC$ | In $\triangle BCD$, $BD$ lies opposite larger angle $\angle BCD$ (Part B) |
| 7. $BA + AD > BC$ | $BD = BA + AD$ |
| 8. $BA + AC > BC$ | $AD = AC$ (Step 1) |

**Hence proved.**

By the same construction on the other vertices, $AB + BC > AC$ and $BC + CA > AB$ hold as well.

### Difference of Two Sides

Rearranging the Triangle Inequality gives a companion rule:

> **The difference of any two sides of a triangle is less than the third side.**

Why? Let the sides be $a, b, c$ with $b \ge c$. By the Triangle Inequality, $b < a + c$. Subtract $c$ from both sides: **$b - c < a$**. ✅

### Range of the Third Side

If two side lengths are known, what values are possible for the third side $x$?

> **$(\text{Larger} - \text{Smaller}) < \text{Third side} < (\text{Larger} + \text{Smaller})$**

**Example 7:** Two sides of a triangle are $5\text{ cm}$ and $8\text{ cm}$. What is the possible range for the third side $x$?
- $x < 8 + 5 = 13$
- $x > 8 - 5 = 3$
- **$3 < x < 13$** (in $\text{cm}$)

Check: if $x = 3$, then $5 + 3 = 8$, which is *not* greater than $8$, so no triangle forms. If $x = 13$, then $5 + 8 = 13$, which also fails. Any value strictly between $3$ and $13$, such as $7$, works: $5 + 7 > 8$, $5 + 8 > 7$, and $7 + 8 > 5$. ✅

**Example 8:** Can a triangle have sides $6\text{ cm}$, $6\text{ cm}$, and $13\text{ cm}$?
Sum of the two shorter sides: $6 + 6 = 12$, which is **less** than $13$. **No triangle can be formed.** ❌

Shortcut: simply add the **two shortest sides**. If their sum is strictly greater than the longest side, the other two inequalities hold automatically!

### Example 9: Diagonals of a Quadrilateral

$ABCD$ is a quadrilateral. Show that **$AB + BC + CD + DA > AC + BD$**.

```
        A---------B
        | \     / |
        |   \ /   |
        |   / \   |
        | /     \ |
        D---------C
```

Diagonals $AC$ and $BD$ split the quadrilateral into four triangles. Apply the Triangle Inequality to each:

| Triangle | Inequality |
|---|---|
| $\triangle ABC$ | $AB + BC > AC$ |
| $\triangle ADC$ | $AD + DC > AC$ |
| $\triangle ABD$ | $AB + AD > BD$ |
| $\triangle BCD$ | $BC + CD > BD$ |

Add all four inequalities:
$$2AB + 2BC + 2CD + 2DA > 2AC + 2BD$$

Divide both sides by $2$:
$$AB + BC + CD + DA > AC + BD \quad \text{✅}$$

(The perimeter of any quadrilateral is always greater than the sum of its two diagonals.)

### Example 10: A Point Inside a Triangle

$P$ is a point inside $\triangle ABC$. Show that **$AB + AC > PB + PC$**.

**Construction:** Extend $BP$ to meet side $AC$ at $Q$.

```
            A
           / \
          /   \
         /     Q
        /   P / \
       /   / /   \
      /  /  /     \
     B-------------C
```

| Statement | Reason |
|---|---|
| 1. $AB + AQ > BQ$ | Triangle Inequality in $\triangle ABQ$ |
| 2. $AB + AQ > BP + PQ$ | $BQ = BP + PQ$ ($P$ lies on $BQ$) |
| 3. $PQ + QC > PC$ | Triangle Inequality in $\triangle PQC$ |
| 4. $AB + AQ + PQ + QC > BP + PQ + PC$ | Adding Steps 2 and 3 |
| 5. $AB + AQ + QC > BP + PC$ | Subtracting $PQ$ from both sides |
| 6. $AB + AC > PB + PC$ | $AQ + QC = AC$ ($Q$ lies on $AC$) |

**Hence proved.**

---

## Part E: Distance Between a Point and a Line

### The Engineer's Water Pipe

Let us return to Dr. Bennett's construction site. The pump station is at point $P$, and the straight main trench is line $l$. Which path uses the least pipe?

```
                 P  (pump station)
                /|\
               / | \
              /  |  \
             /   |   \
     -------N----M----K-------  l (main trench)
                 ⊥
```

Dr. Bennett can run pipe along slanted paths like $PN$ or $PK$, or along **$PM$**, which hits the trench at **$90^\circ$** (perpendicular).

> **Of all line segments that can be drawn to a given line from a point not lying on it, the perpendicular line segment is the shortest.**

We define the length of this perpendicular segment as the **distance from the point to the line**.

### Proof

**Given:** Point $P$ does not lie on line $l$. $PM \perp l$ (with $M$ on $l$), and $N$ is any other point on $l$ ($N \neq M$).
**To prove:** $PN > PM$.

| Statement | Reason |
|---|---|
| 1. $\angle PMN = 90^\circ$ | $PM \perp l$ |
| 2. $\angle PNM < 90^\circ$ | In $\triangle PMN$, $\angle M = 90^\circ$, so the other two angles sum to $90^\circ$ (angle sum); hence $\angle PNM < 90^\circ$ |
| 3. $\angle PMN > \angle PNM$ | From Steps 1 and 2 |
| 4. $PN > PM$ | $PN$ lies opposite the larger angle $\angle PMN$ (Part B) |

**Hence proved.**

(Just like Example 4: $\triangle PMN$ is a right triangle, and $PN$ is its hypotenuse, which is always longer than leg $PM$.)

### Key Takeaways

- Dr. Bennett should lay the pipe along **$PM$**, straight at $90^\circ$ to the trench.
- If the point **lies directly on the line**, its distance from the line is **$0$**.
- Whenever geometry refers to "the distance from a point to a line," it always means the **perpendicular** distance, never a slanted segment.

### In Everyday Life

- **Crossing a street:** To spend the least time on the road, cross **straight across at $90^\circ$**. Walking diagonally across increases both distance and exposure to traffic.
- **Connecting a house to a main cable or sewer line:** The shortest (and cheapest) trench runs perpendicular to the street line.
- **Measuring clearance from a wall:** "Stand $2\text{ metres}$ from the wall" always means $2\text{ metres}$ measured perpendicularly at $90^\circ$.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Pairing a side with the wrong opposite angle.**
   Opposite $\angle A$ is $BC$, not $AB$. Use the missing-letter trick: the side opposite $\angle A$ is the one whose name does not contain $A$.

2. **Mistake 2: Forgetting to compute the third angle before comparing sides.**
   In Example 1, only $\angle A$ and $\angle B$ were given. Without first finding $\angle C = 60^\circ$, you cannot be sure which side is longest or shortest.

3. **Mistake 3: Testing the wrong pair in the Triangle Inequality.**
   Seeing $6 + 13 > 6$ for sides $6, 6, 13$ and concluding a triangle exists is wrong. Always check the sum of the **two shortest sides** against the longest side.

4. **Mistake 4: Treating "equal to" as "greater than."**
   For lengths $2, 3, 5$, we have $2 + 3 = 5$, not $> 5$. **No triangle is formed**—the three points collapse onto a single straight line.

5. **Mistake 5: Including the endpoints ($\le$) in the third-side range.**
   For sides $5$ and $8$, the valid range is **$3 < x < 13$**, not $3 \le x \le 13$. At $x = 3$ or $x = 13$, the triangle collapses flat.

6. **Mistake 6: Measuring point-to-line distance along a slanted segment.**
   Distance from a point to a line is always measured along the **perpendicular**, because it is uniquely the shortest segment.

7. **Mistake 7: Leaving steps unjustified in inequality proofs.**
   Writing $\angle ABD > \angle ACB$ without stating *why* makes a proof incomplete. Cite each reason explicitly (Isosceles Triangle Theorem, Exterior Angle Theorem, or Euclid's Axiom 5: whole $>$ part).

---

## Quick Recap

- **Longer side $\implies$ larger opposite angle** (proved by cutting a segment equal to the shorter side, using the Isosceles Triangle Theorem and the Exterior Angle Theorem).
- **Larger angle $\implies$ longer opposite side** (proved by contradiction, ruling out $=$ and $<$).
- Largest angle $\iff$ longest side; smallest angle $\iff$ shortest side.
- In a **right triangle**, the **hypotenuse** is the longest side; in an **obtuse triangle**, the side opposite the **obtuse angle** is longest.
- **Triangle Inequality:** the sum of any two sides $>$ the third side (proved by extending one side to form an isosceles triangle).
- The **difference of any two sides $<$ the third side**. Range for the third side: **$(\text{Larger} - \text{Smaller}) < x < (\text{Larger} + \text{Smaller})$**.
- **Distance from a point to a line** $=$ length of the perpendicular segment (the shortest possible segment). If the point lies on the line, the distance is $0$.

---

## Practice Questions

1. In $\triangle ABC$, $\angle A = 65^\circ$ and $\angle B = 45^\circ$. Name the longest side and the shortest side of the triangle.

2. In $\triangle PQR$, $PQ = 6\text{ cm}$, $QR = 8\text{ cm}$, and $PR = 5\text{ cm}$. Arrange the angles of the triangle in ascending order.

3. Can a triangle be formed with sides of lengths $4\text{ cm}$, $9\text{ cm}$, and $4\text{ cm}$? Give a reason.

4. Two sides of a triangle are $6\text{ cm}$ and $10\text{ cm}$. Between which two values must the third side lie?

5. Prove that in an obtuse-angled triangle, the side opposite the obtuse angle is the longest.

6. $D$ is a point on side $BC$ of $\triangle ABC$ such that $AD = AC$. Show that $AB > AD$.

7. $AD$ is a median of $\triangle ABC$. Prove that $AB + BC + CA > 2AD$.

8. State whether each statement is true or false. Give a reason.
   (a) A triangle can have sides $3\text{ cm}$, $4\text{ cm}$, and $7\text{ cm}$.
   (b) In $\triangle ABC$, if $\angle A > \angle B$, then $BC > AC$.
   (c) The perpendicular is the longest line segment that can be drawn from a point to a line.
   (d) If a point lies on a line, its distance from the line is zero.

### Answers

1. $\angle C = 180^\circ - 65^\circ - 45^\circ = \mathbf{70^\circ}$.
   The largest angle is $\angle C$, so the longest side is **$AB$**.
   The smallest angle is $\angle B$, so the shortest side is **$AC$**.
   Check: $65^\circ + 45^\circ + 70^\circ = 180^\circ$ ✅

2. Shortest side $PR = 5\text{ cm}$ (opposite $\angle Q$); middle side $PQ = 6\text{ cm}$ (opposite $\angle R$); longest side $QR = 8\text{ cm}$ (opposite $\angle P$).
   **$\angle Q < \angle R < \angle P$**

3. Sum of the two shorter sides: $4 + 4 = 8$, which is less than $9$. **No triangle can be formed.** ❌

4. $10 - 6 < x < 10 + 6$, so **$4\text{ cm} < x < 16\text{ cm}$**.

5. **Given:** In $\triangle ABC$, $\angle B$ is obtuse ($\angle B > 90^\circ$). **To prove:** $AC$ is the longest side.
   | Statement | Reason |
   |---|---|
   | 1. $\angle A + \angle B + \angle C = 180^\circ$ | Angle sum property |
   | 2. $\angle A + \angle C = 180^\circ - \angle B < 90^\circ$ | $\angle B > 90^\circ$ |
   | 3. $\angle A < 90^\circ < \angle B$ and $\angle C < 90^\circ < \angle B$ | From Step 2, both $\angle A$ and $\angle C$ are under $90^\circ$ |
   | 4. $\angle B$ is the largest angle | From Step 3 |
   | 5. $AC$ is the longest side | Longer side lies opposite the larger angle (Part B) |

6. ```
           A
          /|\
         / | \
        /  |  \
       B---D---C      (AD = AC)
   ```
   | Statement | Reason |
   |---|---|
   | 1. $AD = AC$ | Given |
   | 2. $\angle ADC = \angle ACD$ | Angles opposite equal sides are equal (Topic 3) |
   | 3. $\angle ADC > \angle ABD$ | $\angle ADC$ is an exterior angle of $\triangle ABD$, hence greater than interior opposite angle $\angle ABD$ |
   | 4. $\angle ACB > \angle ABC$ | From Steps 2 and 3 ($\angle ACD = \angle ACB$, $\angle ABD = \angle ABC$) |
   | 5. $AB > AC$ | In $\triangle ABC$, $AB$ lies opposite larger angle $\angle ACB$ (Part B) |
   | 6. $AB > AD$ | $AC = AD$ (Step 1) |

7. $D$ is the midpoint of $BC$ (definition of median, [Triangles, Topic 2](../triangles/triangles-part2.md)).
   | Statement | Reason |
   |---|---|
   | 1. $AB + BD > AD$ | Triangle Inequality in $\triangle ABD$ |
   | 2. $AC + DC > AD$ | Triangle Inequality in $\triangle ADC$ |
   | 3. $AB + AC + BD + DC > 2AD$ | Adding Steps 1 and 2 |
   | 4. $AB + AC + BC > 2AD$ | $BD + DC = BC$ |

8. (a) **False.** $3 + 4 = 7$, which is not strictly greater than $7$. No triangle can be formed. ❌
   (b) **True.** $BC$ is opposite $\angle A$ and $AC$ is opposite $\angle B$; the longer side lies opposite the larger angle. ✅
   (c) **False.** The perpendicular is the **shortest** segment from a point to a line, not the longest. ❌
   (d) **True.** Because the point lies right on the line, its distance from the line is $0$. ✅

---

This topic can feel "proof-heavy" at first, yet every result flows from one clean idea: **a longer side faces a larger angle, and a larger angle faces a longer side.** Keep Maya's park shortcut and Dr. Bennett's water pipe in mind, and you will never forget these theorems. Well done on completing the entire chapter!

---

## Chapter Wrap-up: Congruence of Triangles

| Topic | What We Learned | Key Takeaway |
|---|---|---|
| 1. Congruent figures and congruent triangles | Meaning of congruence, vertex correspondence, CPCTC | Congruent $=$ exact same shape and size; matching vertex order is crucial |
| 2. Congruence criteria | Congruence relation, SAS, ASA, AAS, SSS, RHS, and formal proofs | Any one of the five criteria proves congruence; CPCTC then gives all remaining equal parts |
| 3. Isosceles triangle theorems | Equal sides $\iff$ equal opposite angles, equilateral angles ($60^\circ$), vertex angle bisector | Angles opposite equal sides are equal, and its converse holds too |
| 4. Inequalities and point-to-line distance | Longer side $\iff$ larger angle, Triangle Inequality proof, third-side range, shortest distance is perpendicular | Larger angle faces longer side; sum of two sides $>$ third side; distance $=$ perpendicular |
