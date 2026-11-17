# Chapter: Congruence of Triangles (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [congruence-of-triangles-part2.md](congruence-of-triangles-part2.md).** (Topic 1 is in [congruence-of-triangles.md](congruence-of-triangles.md).) Two promises left open in [Triangles, Topic 1](../triangles/triangles.md) and [Topic 2](../triangles/triangles-part2.md) are fulfilled right here.
> **Topics covered in this file:**
> 3. Some Properties of a Triangle: Isosceles Triangle Theorems

---

# Topic 3: Some Properties of a Triangle (Isosceles Triangle Theorems)

In Topic 2, through Elena's festival bunting flags, we learned the five congruence criteria—SAS, ASA, AAS, SSS, and RHS—and saw why AAA and SSA fail. We also practiced formal Statement–Reason proofs. Until now, however, we only used those criteria to prove that two triangles are congruent.

In this topic, we take the next big step: **we use triangle congruence to prove fundamental properties of triangles.** Congruence becomes an engine for proving facts we previously accepted on faith.

---

## Two Promises Finally Fulfilled

Back in [Triangles, Topic 1](../triangles/triangles.md), we accepted two facts **without proof**:

1. The **base angles** of an isosceles triangle are equal.
2. All **three angles** of an equilateral triangle are equal (which, combined with the angle sum in [Topic 2](../triangles/triangles-part2.md), gave $60^\circ$ each).

We noted then that their proofs would arrive in *Congruence of Triangles*. That moment is now—both proofs appear in this file.

---

## The Story of the Garden Swing

In the backyard beneath a sturdy oak tree, Leo and Dr. Bennett built a wooden swing. They attached two sturdy ropes from a single hook $A$ on a high branch down to the ends $B$ and $C$ of a wooden seat.

```
             A  (hook on branch)
            / \
           /   \
    rope  /     \  rope
         /       \
        /         \
       B-----------C
         wooden seat
```

Dr. Bennett carefully measured both ropes so they were **the exact same length**: $AB = AC$.

Leo stepped back and noticed that the wooden seat hung **perfectly level**—tilted neither left nor right. He asked, "Why does it hang so evenly?"

Dr. Bennett smiled. "Because both ropes have the same length. If one rope were shorter, the seat would tilt toward that side. Equal ropes force the angles where the ropes meet the seat to be **equal as well**: $\angle B = \angle C$."

Leo wondered, "I can see it visually, but can we actually **prove** it?"

Yes! With the congruence criteria from Topic 2, we can prove it in just a few lines. That is our very first theorem.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Isosceles triangle** | A triangle with at least two equal sides (introduced in the Triangles chapter) | $AB = AC$ |
| **Vertex angle** | The angle between the two equal sides of an isosceles triangle | $\angle A$ when $AB = AC$ |
| **Base** | The third side, opposite the vertex angle | Side $BC$ |
| **Base angles** | The two angles at either end of the base | $\angle B$ and $\angle C$ |
| **Converse** | Reversing the "if" and "then" parts of a statement | Converse of "equal sides $\to$ equal angles" is "equal angles $\to$ equal sides" |
| **Angle bisector** | A ray that divides an angle into two equal angles (introduced in [Lines and Angles, Topic 1](../lines-and-angles/lines-and-angles.md)) | Ray $AD$ bisecting $\angle A$ |

---

## Part A: Isosceles Triangle Theorem (Angles Opposite Equal Sides Are Equal)

> **Isosceles Triangle Theorem:** In an isosceles triangle, the angles opposite the equal sides are equal.

### First, Understand What "Opposite" Means

```
            A
           / \
          /   \
         /     \
        B-------C
```

- The angle **opposite** side $AB$ is **$\angle C$** (the vertex whose letter does not appear in $AB$).
- The angle **opposite** side $AC$ is **$\angle B$**.

So if $AB = AC$, the theorem states that **$\angle C = \angle B$**—the base angles are equal.

### Proof

**Given:** In $\triangle ABC$, $AB = AC$.

**To prove:** $\angle B = \angle C$.

**Construction:** Draw the angle bisector $AD$ of $\angle A$, meeting $BC$ at point $D$.

```
              A
             /|\
            / | \
           /  |  \
          /   |   \
         /    |    \
        B-----D-----C

   ∠BAD = ∠CAD  (AD bisects ∠A)
```

**Proof:** In $\triangle BAD$ and $\triangle CAD$:

| Statement | Reason |
|---|---|
| $AB = AC$ | Given |
| $\angle BAD = \angle CAD$ | $AD$ is the bisector of $\angle A$ (construction) |
| $AD = AD$ | Common side |
| $\therefore \triangle BAD \cong \triangle CAD$ | **SAS** criterion |
| $\therefore \angle ABD = \angle ACD$ | CPCTC |
| That is, $\angle B = \angle C$ | $\angle ABD$ is $\angle B$ and $\angle ACD$ is $\angle C$ |

**Hence proved.**

Notice why SAS applies: $\angle BAD$ is **included** between $AB$ and $AD$, and $\angle CAD$ is included between $AC$ and $AD$. As we saw in Topic 2, SAS always requires the included angle.

Leo's swing puzzle is solved: equal ropes ($AB = AC$) force equal angles at the seat ($\angle B = \angle C$).

---

## Part B: Converse of the Isosceles Triangle Theorem (Sides Opposite Equal Angles Are Equal)

Now let us reverse the question. If we know two **angles** of a triangle are equal, must the **sides** opposite them also be equal?

> **Converse of the Isosceles Triangle Theorem:** In any triangle, the sides opposite equal angles are equal.

### Proof

**Given:** In $\triangle ABC$, $\angle B = \angle C$.

**To prove:** $AB = AC$.

**Construction:** Draw the angle bisector $AD$ of $\angle A$, meeting $BC$ at $D$. (Same figure as above.)

**Proof:** In $\triangle ABD$ and $\triangle ACD$:

| Statement | Reason |
|---|---|
| $\angle ABD = \angle ACD$ | Given ($\angle B = \angle C$) |
| $\angle BAD = \angle CAD$ | $AD$ is the bisector of $\angle A$ (construction) |
| $AD = AD$ | Common side |
| $\therefore \triangle ABD \cong \triangle ACD$ | **AAS** criterion |
| $\therefore AB = AC$ | CPCTC |

**Hence proved.**

Why AAS here? We have two angles ($\angle B$ and $\angle BAD$) and one side $AD$. Side $AD$ is *not* the side included between $\angle B$ and $\angle BAD$ (the included side would be $AB$). Therefore, the criterion is **AAS**, not ASA.

### Both Theorems Together

| If You Know This | Then This Follows | Theorem |
|---|---|---|
| Two sides are equal | The angles opposite them are equal | Isosceles Triangle Theorem |
| Two angles are equal | The sides opposite them are equal | Converse of Isosceles Triangle Theorem |

Quick memory rule: **"Equal sides $\leftrightarrow$ equal opposite angles."** It works in both directions!

---

## Part C: Promise Fulfilled: Angles of an Equilateral Triangle

### All Three Angles of an Equilateral Triangle Are Equal

**Given:** In $\triangle ABC$, $AB = BC = CA$.

**To prove:** $\angle A = \angle B = \angle C = 60^\circ$.

**Proof:**

| Statement | Reason |
|---|---|
| $AB = AC$ | Given |
| $\therefore \angle C = \angle B$ | Isosceles Triangle Theorem ($\angle C$ opposite $AB$, $\angle B$ opposite $AC$) |
| $AB = BC$ | Given |
| $\therefore \angle C = \angle A$ | Isosceles Triangle Theorem ($\angle C$ opposite $AB$, $\angle A$ opposite $BC$) |
| $\therefore \angle A = \angle B = \angle C$ | From both results (Euclid's Axiom 1: things equal to the same thing are equal to one another) |
| $\angle A + \angle B + \angle C = 180^\circ$ | Angle sum property ([Triangles, Topic 2](../triangles/triangles-part2.md)) |
| $3\angle A = 180^\circ \implies \angle A = 60^\circ$ | All three angles are equal |

**Hence proved.** Each angle measures **$60^\circ$**.

The fact we only assumed earlier ("all three angles are equal") is now **rigorously proved** from the Isosceles Triangle Theorem. Both promises are kept!

### The Converse Also Holds: All Three Angles Equal $\to$ Equilateral

**Given:** In $\triangle ABC$, $\angle A = \angle B = \angle C$.

| Statement | Reason |
|---|---|
| $\angle A = \angle B$ | Given |
| $\therefore BC = AC$ | Converse of Isosceles Triangle Theorem ($BC$ opposite $\angle A$, $AC$ opposite $\angle B$) |
| $\angle B = \angle C$ | Given |
| $\therefore AC = AB$ | Converse of Isosceles Triangle Theorem ($AC$ opposite $\angle B$, $AB$ opposite $\angle C$) |
| $\therefore AB = BC = CA$ | Combining both results |

Therefore, any triangle whose three angles are equal (each $60^\circ$) is **equilateral**.

---

## Part D: One Remarkable Line in an Isosceles Triangle

In the proof in Part A, we established $\triangle BAD \cong \triangle CAD$. Back there, we only extracted $\angle B = \angle C$ by CPCTC—but CPCTC actually gives us **even more**!

```
              A
             /|\
            / | \
           /  |  \
          /   |   \
         /    |    \
        B-----D-----C
```

From $\triangle BAD \cong \triangle CAD$, CPCTC also tells us:

1. **$BD = CD$.** Thus $D$ is the midpoint of $BC$, making $AD$ a **median**.
2. **$\angle ADB = \angle ADC$.** Since $BC$ is a straight line, these two angles also form a linear pair adding up to $180^\circ$ ([Lines and Angles, Topic 2](../lines-and-angles/lines-and-angles-part2.md)). Two equal angles summing to $180^\circ$ must each be **$90^\circ$**. Hence $AD \perp BC$, meaning $AD$ is also an **altitude**.
3. Combining $BD = CD$ and $AD \perp BC$, $AD$ is also the **perpendicular bisector** of $BC$.

> **In an isosceles triangle, the bisector of the vertex angle is simultaneously the median, the altitude, and the perpendicular bisector of the base.** All four lines are one and the same!

(We introduced medians, altitudes, and perpendicular bisectors in [Triangles, Topic 2](../triangles/triangles-part2.md), where we noted that all four triangle centres coincide in an equilateral triangle. Now we see why: an equilateral triangle is isosceles from *every* vertex!)

In Leo's garden swing, a plumb line dropped straight down from hook $A$ hits the **exact midpoint** of the wooden seat and makes a **$90^\circ$ angle** with it.

---

## Part E: Solved Examples on Finding Angles

**Example 1:** The vertex angle of an isosceles triangle is $40^\circ$. Find the base angles.

The base angles are equal (Isosceles Triangle Theorem). Let each be $x$.
$$x + x + 40^\circ = 180^\circ$$
$$2x = 140^\circ \implies x = \mathbf{70^\circ}$$

Check: $70^\circ + 70^\circ + 40^\circ = 180^\circ$ ✅

**Example 2:** One base angle of an isosceles triangle is $65^\circ$. Find the vertex angle.

The other base angle is also $65^\circ$.
$$\text{Vertex angle} = 180^\circ - 65^\circ - 65^\circ = \mathbf{50^\circ}$$

Check: $65^\circ + 65^\circ + 50^\circ = 180^\circ$ ✅

**Example 3 (Right Isosceles Triangle):** In $\triangle ABC$, $\angle A = 90^\circ$ and $AB = AC$. Find $\angle B$ and $\angle C$.

Since $AB = AC$, $\angle C = \angle B$ (Isosceles Triangle Theorem). Let each be $x$.
$$90^\circ + x + x = 180^\circ$$
$$2x = 90^\circ \implies x = \mathbf{45^\circ}$$

So the angles are **$90^\circ, 45^\circ, 45^\circ$**—just like the $45^\circ\text{–}45^\circ\text{–}90^\circ$ drafting set-square in a geometry kit.

**Example 4 (Algebraic):** In $\triangle ABC$, $AB = AC$, $\angle B = (3x - 10)^\circ$, and $\angle C = (2x + 20)^\circ$. Find $x$ and all three angles.

Since $AB = AC$, $\angle B = \angle C$ (Isosceles Triangle Theorem):
$$3x - 10 = 2x + 20 \implies \mathbf{x = 30}$$

$$\angle B = 3(30) - 10 = \mathbf{80^\circ}, \quad \angle C = 2(30) + 20 = \mathbf{80^\circ}$$
$$\angle A = 180^\circ - 80^\circ - 80^\circ = \mathbf{20^\circ}$$

Check: $80^\circ + 80^\circ + 20^\circ = 180^\circ$ ✅

**Example 5 (Using the Converse):** In $\triangle ABC$, $\angle B = \angle C = 50^\circ$ and $AB = 6\text{ cm}$. Find $AC$ and $\angle A$.

Since $\angle B = \angle C$, the sides opposite them are equal (Converse of Isosceles Triangle Theorem): $AB$ is opposite $\angle C$ and $AC$ is opposite $\angle B$.
Therefore, **$AC = AB = 6\text{ cm}$**.
$$\angle A = 180^\circ - 50^\circ - 50^\circ = \mathbf{80^\circ}$$

**Example 6 (Using an Exterior Angle):** In $\triangle ABC$, $AB = AC$. Side $BC$ is extended to $D$, forming exterior angle $\angle ACD = 110^\circ$. Find all three angles of $\triangle ABC$.

```
            A
           / \
          /   \
         /     \
        B-------C-------D
                 110°
```

$\angle ACB$ and $\angle ACD$ form a linear pair, so $\angle ACB = 180^\circ - 110^\circ = \mathbf{70^\circ}$.
Since $AB = AC$, $\angle B = \angle C = \mathbf{70^\circ}$.
$\angle A = 180^\circ - 70^\circ - 70^\circ = \mathbf{40^\circ}$.

Check using the Exterior Angle Theorem ([Triangles, Topic 2](../triangles/triangles-part2.md)): exterior angle $=$ sum of the two interior opposite angles: $\angle A + \angle B = 40^\circ + 70^\circ = 110^\circ$ ✅

---

## Part F: Solved Examples on Proofs

**Example 7:** $\triangle ABC$ is isosceles with $AB = AC$. $BE$ and $CF$ are altitudes ($BE \perp AC$ and $CF \perp AB$). Prove that $BE = CF$.

```
              A
             / \
            /   \
         F *     * E
          /       \
         /         \
        B-----------C

   E lies on AC with BE ⊥ AC
   F lies on AB with CF ⊥ AB
   (Join B to E and C to F: these are the two altitudes)
```

**Proof:** In $\triangle ABE$ and $\triangle ACF$:

| Statement | Reason |
|---|---|
| $\angle AEB = \angle AFC = 90^\circ$ | $BE \perp AC$ and $CF \perp AB$ (given) |
| $\angle A = \angle A$ | Common angle |
| $AB = AC$ | Given |
| $\therefore \triangle ABE \cong \triangle ACF$ | **AAS** criterion |
| $\therefore BE = CF$ | CPCTC |

**Hence proved.**

(Why AAS? The two equal angles are $\angle E$ and $\angle A$. Side $AB$ is not included between $\angle E$ and $\angle A$—that would be $AE$. Hence AAS.)

**Example 8:** $\triangle ABC$ and $\triangle DBC$ are two isosceles triangles on the same base $BC$, such that $AB = AC$ and $DB = DC$. Prove that $\angle ABD = \angle ACD$.

```
              A
             / \
            /   \
           /     \
          B-------C
           \     /
            \   /
             \ /
              D
```

**Proof:** Join $AD$. In $\triangle ABD$ and $\triangle ACD$:

| Statement | Reason |
|---|---|
| $AB = AC$ | Given |
| $DB = DC$ | Given |
| $AD = AD$ | Common side |
| $\therefore \triangle ABD \cong \triangle ACD$ | **SSS** criterion |
| $\therefore \angle ABD = \angle ACD$ | CPCTC |

**Hence proved.**

**An alternative method** (using the Isosceles Triangle Theorem):
- $AB = AC \implies \angle ABC = \angle ACB$ (Isosceles Triangle Theorem).
- $DB = DC \implies \angle DBC = \angle DCB$ (Isosceles Triangle Theorem).
- Adding both equations: $\angle ABC + \angle DBC = \angle ACB + \angle DCB$, so $\angle ABD = \angle ACD$ (Euclid's Axiom 2: equals added to equals give equals).

Note that this second method assumes $A$ and $D$ lie on opposite sides of $BC$ as drawn above. If $D$ lies on the same side of $BC$ as $A$ (inside $\triangle ABC$), you would subtract instead of add (Axiom 3). The SSS method works seamlessly in both layouts!

**Example 9:** In $\triangle ABC$, $AB = AC$ and $AD$ is the altitude from $A$ to $BC$ ($AD \perp BC$). Prove that $AD$ bisects $BC$ and also bisects $\angle A$.

**Proof:** In $\triangle ABD$ and $\triangle ACD$:

| Statement | Reason |
|---|---|
| $\angle ADB = \angle ADC = 90^\circ$ | $AD \perp BC$ (given) |
| $AB = AC$ (hypotenuses) | Given |
| $AD = AD$ | Common side |
| $\therefore \triangle ABD \cong \triangle ACD$ | **RHS** criterion |
| $\therefore BD = CD$ | CPCTC ($AD$ bisects $BC$) |
| $\therefore \angle BAD = \angle CAD$ | CPCTC ($AD$ bisects $\angle A$) |

**Hence proved.** (Notice how this flips Part D around: there we started with the angle bisector and deduced the altitude; here we start with the altitude and deduce the bisector.)

**Example 10:** In $\triangle ABC$, $AB = AC$. Side $BA$ is extended to $D$ such that $AD = AB$. Prove that $\angle BCD = 90^\circ$.

```
        D
         \
          \
           A
          / \
         /   \
        /     \
       B-------C

   B, A, D are collinear;  AD = AB = AC
```

**Proof:**

| Statement | Reason |
|---|---|
| $AB = AC \implies \angle ABC = \angle ACB$. Let both equal $x$. | Isosceles Triangle Theorem (in $\triangle ABC$) |
| $AD = AB = AC \implies AC = AD$ | Given and $AB = AC$ |
| $\therefore \angle ACD = \angle ADC$. Let both equal $y$. | Isosceles Triangle Theorem (in $\triangle ACD$) |
| In $\triangle BCD$: $\angle DBC + \angle BCD + \angle BDC = 180^\circ$ | Angle sum property |
| $x + (x + y) + y = 180^\circ$ | $\angle DBC = x$, $\angle BCD = \angle ACB + \angle ACD = x + y$, $\angle BDC = y$ |
| $2x + 2y = 180^\circ \implies x + y = 90^\circ$ | Simplify |
| $\therefore \angle BCD = x + y = 90^\circ$ | |

**Hence proved.**

Check with numbers: suppose $\angle B = x = 50^\circ$. Then in $\triangle ABC$, $\angle BAC = 80^\circ$. Its linear pair $\angle DAC = 100^\circ$. Since $\triangle ACD$ is isosceles ($AC = AD$), $y = (180^\circ - 100^\circ)/2 = 40^\circ$. Then $\angle BCD = 50^\circ + 40^\circ = 90^\circ$ ✅

---

## Common Pitfalls to Avoid

1. **Mistake 1: Pairing an equal side with the wrong angle.**
   If $AB = AC$, then $\angle C = \angle B$—**not** $\angle A = \angle B$. The opposite angle is the vertex whose letter is *missing* from the side's name ($AB \to \angle C$).

2. **Mistake 2: Confusing the vertex angle with a base angle.**
   If a problem says "one angle of an isosceles triangle is $40^\circ$," check whether it is the vertex angle or a base angle. If it is the vertex angle, the angles are $40^\circ, 70^\circ, 70^\circ$. If it is a base angle, the angles are $40^\circ, 40^\circ, 100^\circ$—completely different answers!

3. **Mistake 3: Mixing up the Isosceles Triangle Theorem and its converse.**
   - Given equal sides, proving equal angles: cite the **Isosceles Triangle Theorem**.
   - Given equal angles, proving equal sides: cite the **Converse of the Isosceles Triangle Theorem**.

4. **Mistake 4: Writing ASA instead of AAS in the converse proof.**
   In Part B, side $AD$ is not included between $\angle B$ and $\angle BAD$. Therefore, the congruence criterion is **AAS**, not ASA.

5. **Mistake 5: Omitting the construction line in a proof.**
   In both Part A and Part B, we draw the bisector $AD$ ourselves. Always state *"Construction: Draw the bisector $AD$ of $\angle A$ meeting $BC$ at $D$"* so the reader knows where $D$ came from.

6. **Mistake 6: Assuming a base angle can be $90^\circ$ or greater.**
   The two base angles of an isosceles triangle are equal. If each were $90^\circ$ or more, their sum alone would be at least $180^\circ$, leaving nothing for the third angle. Hence **base angles are always acute**.

7. **Mistake 7: Thinking every isosceles triangle is equilateral.**
   Every equilateral triangle is isosceles (at least two sides are equal), but an isosceles triangle with angles $70^\circ, 70^\circ, 40^\circ$ is certainly not equilateral.

---

## Quick Recap

- **Isosceles Triangle Theorem:** Angles opposite equal sides are equal. (Proved using the vertex angle bisector, **SAS**, and **CPCTC**.)
- **Converse of Isosceles Triangle Theorem:** Sides opposite equal angles are equal. (Proved using the vertex angle bisector, **AAS**, and **CPCTC**.)
- **Opposite angle trick:** Side $AB$ is opposite $\angle C$ (the missing vertex letter).
- **Equilateral triangle:** All three angles are equal (by applying the Isosceles Triangle Theorem twice), so each is **$60^\circ$**. Conversely, if all three angles are equal, the triangle is equilateral.
- **In an isosceles triangle:** The vertex angle bisector $=$ base median $=$ base altitude $=$ perpendicular bisector of the base.
- **Base angles are always acute** ($< 90^\circ$).
- Both promises from the Triangles chapter (equal base angles; $60^\circ$ angles in an equilateral triangle) are now **fully proved**.

---

## Practice Questions

1. In $\triangle PQR$, $PQ = PR$ and $\angle P = 50^\circ$. Find $\angle Q$ and $\angle R$.

2. One base angle of an isosceles triangle is $72^\circ$. Find the other two angles.

3. In $\triangle ABC$, $\angle B = \angle C = 55^\circ$ and $AB = 7.5\text{ cm}$. Find $AC$ and $\angle A$.

4. In $\triangle ABC$, $AB = AC$, $\angle B = (2x + 15)^\circ$, and $\angle C = (3x - 5)^\circ$. Find $x$ and all three angles of the triangle.

5. In $\triangle ABC$, $\angle A = 90^\circ$ and $AB = AC$. Find $\angle B$ and $\angle C$.

6. In $\triangle ABC$, $AB = AC$ and $D$ is the midpoint of $BC$. Prove that $AD \perp BC$ and that $AD$ bisects $\angle A$.

7. $BE$ and $CF$ are two equal altitudes of $\triangle ABC$. Using the RHS congruence rule, prove that $\triangle ABC$ is isosceles.

8. In $\triangle ABC$, $AB = AC$. $E$ and $F$ are the midpoints of $AC$ and $AB$ respectively. Prove that $BE = CF$.

9. State whether each statement is true or false. Give a reason.
   (a) If two sides of a triangle are equal, the angles opposite them are equal.
   (b) Every isosceles triangle is equilateral.
   (c) Every equilateral triangle is isosceles.
   (d) An isosceles triangle can have a vertex angle of $100^\circ$.
   (e) An isosceles triangle can have base angles of $95^\circ$ each.

### Answers

1. Since $PQ = PR$, $\angle R = \angle Q$ (Isosceles Triangle Theorem). Then $2\angle Q = 180^\circ - 50^\circ = 130^\circ$, so **$\angle Q = \angle R = 65^\circ$**.
   Check: $50^\circ + 65^\circ + 65^\circ = 180^\circ$ ✅

2. The second base angle is also **$72^\circ$**. The vertex angle is $180^\circ - 72^\circ - 72^\circ = \mathbf{36^\circ}$.
   Check: $72^\circ + 72^\circ + 36^\circ = 180^\circ$ ✅

3. Since $\angle B = \angle C$, the opposite sides are equal (Converse of Isosceles Triangle Theorem): $AB$ is opposite $\angle C$ and $AC$ is opposite $\angle B$. Hence **$AC = 7.5\text{ cm}$**.
   $\angle A = 180^\circ - 55^\circ - 55^\circ = \mathbf{70^\circ}$.

4. Since $AB = AC$, $\angle B = \angle C$ (Isosceles Triangle Theorem).
   $2x + 15 = 3x - 5 \implies \mathbf{x = 20}$.
   $\angle B = 2(20) + 15 = \mathbf{55^\circ}$, $\angle C = 3(20) - 5 = \mathbf{55^\circ}$, and $\angle A = 180^\circ - 110^\circ = \mathbf{70^\circ}$.
   Check: $55^\circ + 55^\circ + 70^\circ = 180^\circ$ ✅

5. Since $AB = AC$, $\angle B = \angle C$. Then $90^\circ + 2\angle B = 180^\circ \implies \mathbf{\angle B = \angle C = 45^\circ}$.

6. In $\triangle ABD$ and $\triangle ACD$:

   | Statement | Reason |
   |---|---|
   | $AB = AC$ | Given |
   | $BD = CD$ | $D$ is the midpoint of $BC$ |
   | $AD = AD$ | Common side |
   | $\therefore \triangle ABD \cong \triangle ACD$ | **SSS** rule |
   | $\therefore \angle ADB = \angle ADC$ | CPCTC |
   | $\angle ADB + \angle ADC = 180^\circ$ | Linear Pair Axiom |
   | $\therefore \angle ADB = \angle ADC = 90^\circ$, so $AD \perp BC$ | Two equal angles summing to $180^\circ$ |
   | $\therefore \angle BAD = \angle CAD$, so $AD$ bisects $\angle A$ | CPCTC |

   **Hence proved.**

7. We are given $BE \perp AC$, $CF \perp AB$, and $BE = CF$. In $\triangle BEC$ and $\triangle CFB$:

   | Statement | Reason |
   |---|---|
   | $\angle BEC = \angle CFB = 90^\circ$ | Altitudes |
   | $BC = CB$ (hypotenuse) | Common side |
   | $BE = CF$ | Given |
   | $\therefore \triangle BEC \cong \triangle CFB$ | **RHS** rule |
   | $\therefore \angle BCE = \angle CBF$, i.e., $\angle C = \angle B$ | CPCTC |
   | $\therefore AB = AC$ | Converse of Isosceles Triangle Theorem ($AB$ opposite $\angle C$, $AC$ opposite $\angle B$) |

   Hence $\triangle ABC$ is **isosceles**. **Hence proved.**

8. Since $AB = AC$, halves of equals are equal: $BF = \frac{1}{2}AB = \frac{1}{2}AC = CE$. In $\triangle BCF$ and $\triangle CBE$:

   | Statement | Reason |
   |---|---|
   | $BF = CE$ | Halves of equal sides (Euclid's Axiom 7) |
   | $\angle FBC = \angle ECB$ | Isosceles Triangle Theorem ($AB = AC \implies \angle B = \angle C$) |
   | $BC = CB$ | Common side |
   | $\therefore \triangle BCF \cong \triangle CBE$ | **SAS** rule |
   | $\therefore CF = BE$ | CPCTC |

   **Hence proved.** (Why SAS? In $\triangle BCF$, $\angle FBC$ lies between $BF$ and $BC$; in $\triangle CBE$, $\angle ECB$ lies between $CE$ and $CB$.)

9. (a) **True.** This is the Isosceles Triangle Theorem. ✅
   (b) **False.** A triangle with angles $70^\circ, 70^\circ, 40^\circ$ is isosceles, not equilateral. ❌
   (c) **True.** Every equilateral triangle has three equal sides, so it certainly has at least two equal sides. ✅
   (d) **True.** Its base angles are $(180^\circ - 100^\circ)/2 = 40^\circ$ each, and $100^\circ + 40^\circ + 40^\circ = 180^\circ$. ✅
   (e) **False.** $95^\circ + 95^\circ = 190^\circ$, which already exceeds $180^\circ$. Base angles are always acute. ❌

---

Well done! You can now use triangle congruence not merely to show two triangles match, but to **prove new geometric theorems**. Just like Leo's garden swing, whenever you spot two equal sides in a triangle, immediately think: *"the angles opposite them must be equal too."*

**In the next topic (Topic 4: Inequalities in a Triangle):** Here we saw that equal sides produce equal opposite angles. What if the sides are **unequal**? Does a longer side always face a larger angle? And what is the shortest possible path from a point to a line? Let us find out in Topic 4.
