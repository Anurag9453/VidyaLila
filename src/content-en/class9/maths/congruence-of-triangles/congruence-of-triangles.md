# Chapter: Congruence of Triangles

> **Class:** 9 | **Subject:** Mathematics
> **This chapter builds directly on [Triangles](../triangles/triangles.md).** The parts of a triangle (sides, vertices, angles) and the idea of "opposite side / opposite angle" were introduced there in [Topic 1](../triangles/triangles.md).
> **Topics covered in this file:**
> 1. Congruent Figures, Congruent Triangles, and CPCTC

---

# Topic 1: Congruent Figures, Congruent Triangles, and CPCTC

In the [Triangles chapter](../triangles/triangles.md), we studied the $6$ parts of a triangle ($3$ sides and $3$ angles) and learned which side lies **opposite** which angle. We also left two promises unproved: why the base angles of an isosceles triangle are equal, and why all three angles of an equilateral triangle are equal. Both proofs appear later in this chapter.

Before we reach those proofs, however, we need one central idea: **congruence**. In this topic, we will explore what makes two figures "exact twins," how to write congruence statements accurately for triangles, and how that unlocks equal parts through CPCTC.

---

## The Story of the Duplicate Key

Liam had only one front-door key for his apartment. Worried he might misplace it, his roommate Maya suggested, "Let us get a duplicate cut at the hardware shop."

At the shop, the locksmith clamped Liam's original key into one side of a key-cutting machine and a blank metal key into the other. The machine traced every groove and tooth of the original onto the blank.

Back home, Liam slid the new key into the lock—and the door clicked open smoothly.

Now pause and think: when does a duplicate key actually work?
- If the **shape** of the teeth matches, but the key is slightly **larger or smaller**, it will not even fit into the keyhole.
- If the **size** matches, but even one groove has a different **shape**, the lock will not turn.

The duplicate key works if and only if it has **both the exact same shape and the exact same size**. If you place one key directly on top of the other, they **cover each other completely**, with nothing sticking out.

In geometry, two figures like that are called **congruent**.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Congruent** | Having the exact same shape and the exact same size; one covers the other completely when placed on top | Two keys cut from the same template |
| **$\cong$** | The symbol meaning "is congruent to" | $\triangle ABC \cong \triangle PQR$ |
| **Superposition** | Placing one figure directly over another to test whether they coincide completely | Tracing a figure on tracing paper and placing it over another |
| **Corresponding parts** | The matching sides or angles that align when two congruent figures are superimposed | $A$ and $P$ in $\triangle ABC \cong \triangle PQR$ |
| **Correspondence** | The exact vertex-to-vertex pairing between two figures | $A \leftrightarrow P$, $B \leftrightarrow Q$, $C \leftrightarrow R$ |
| **CPCTC** | Corresponding Parts of Congruent Triangles are Congruent (or equal; also written CPCT) | Since $\triangle ABC \cong \triangle PQR$, $AB = PQ$ |

---

## Part A: Congruent Figures

### What Does Congruent Mean?

> Two figures are **congruent** if they have the **same shape** and the **same size**.

The basic test is **superposition**: copy one figure onto tracing paper and place the copy over the second figure. If the two figures **coincide completely** (cover each other with no overhang or gap), they are congruent.

Recall Axiom 4 from [Euclid's Geometry, Topic 1](../euclids-geometry/euclids-geometry.md): *"Things which coincide with one another are equal to one another."* Superposition is that exact idea in action.

### Congruent Objects in Everyday Life

- Two newly minted **$1$-euro coins** from the same press
- Two **standard playing cards** from the same deck
- Two **sheets of A4 paper** from the same ream
- Two **modular floor tiles** cut from the same mould
- Two **$100\%$ scale photocopies** of the same blueprint

### When Are Standard Geometric Figures Congruent?

**Line segments:** Two line segments are congruent if they have the **same length**.

```
A ________ B        P ________ Q
    5 cm                5 cm
```

Here $AB = 5\text{ cm}$ and $PQ = 5\text{ cm}$, so $\overline{AB} \cong \overline{PQ}$. (Place one on top of the other and they match endpoint to endpoint.)

**Angles:** Two angles are congruent if they have the **same degree measure**. The lengths of their rays (arms) do not matter.

```
     /                        /
    /                        /
   / 40°                    / 40°
  /_______                 /_____________
```

Both angles measure $40^\circ$, so they are **congruent**. Even though one angle has longer arms drawn, the opening between the rays is identical.

**Circles:** Two circles are congruent if they have the **same radius**.

**Squares:** Two squares are congruent if they have the **same side length**.

| Figure | Condition for Congruence |
|---|---|
| Line segment | Equal length |
| Angle | Equal degree measure |
| Circle | Equal radius |
| Square | Equal side length |
| Rectangle | Equal length and equal breadth (width) |

### Flipping (Reflection) Is Allowed

If one figure is a **mirror image** of another, you are allowed to **flip the tracing paper over** before placing it on top. If they coincide completely after flipping, they are still **congruent**.

Think of a pair of left-hand and right-hand architectural templates or gloves: turning one over aligns it perfectly with the other.

### Same Shape, Different Size: Not Congruent

```
   /\              /\
  /  \            /  \
 /____\          /    \
                /      \
 small         /________\
                 large
```

Both triangles have the **same shape** (like an original photograph and an enlarged poster print), but **different sizes**. Such figures are called **similar**, not congruent. (We study similarity in detail in later classes.)

Keep the distinction crystal clear:
- **Congruent:** same shape $+$ same size
- **Similar:** same shape only

Every congruent figure is automatically similar, but not every similar figure is congruent.

---

## Part B: Congruent Triangles

### What Does It Mean?

Two triangles are **congruent** if one can be placed over the other so that it **covers it completely**. That means:
- All three **sides** align and are equal in length.
- All three **angles** align and are equal in measure.

In other words, two congruent triangles have all **$6$ pairs of corresponding parts** ($3$ sides and $3$ angles) equal.

### Example

```
          A                             P
         /\                            /\
        /  \                          /  \
  4.6  /    \ 5.6               4.6  /    \ 5.6
      /      \                      /      \
     /________\                    /________\
    B    5.2   C                  Q    5.2   R
```

(Side lengths in $\text{cm}$, approximate. Angles: $\angle A = 60^\circ$, $\angle B = 70^\circ$, $\angle C = 50^\circ$, and $\angle P = 60^\circ$, $\angle Q = 70^\circ$, $\angle R = 50^\circ$.)

If we lift $\triangle ABC$ and place it onto $\triangle PQR$:
- Vertex $A$ lands on vertex $P$
- Vertex $B$ lands on vertex $Q$
- Vertex $C$ lands on vertex $R$

This matching is called a **correspondence**, written as:

$$A \leftrightarrow P, \quad B \leftrightarrow Q, \quad C \leftrightarrow R$$

And we write the congruence statement as:

$$\triangle ABC \cong \triangle PQR$$

Read aloud: "triangle $ABC$ is congruent to triangle $PQR$."

### Why Order Matters So Much

This is the **single most important rule** in this topic.

Writing **$\triangle ABC \cong \triangle PQR$** tells you that **the first letter matches the first, the second matches the second, and the third matches the third**:

```
Δ  A  B  C
   ↕  ↕  ↕
Δ  P  Q  R
```

From that single line of notation, we can read off all $6$ equal parts immediately, even without looking at a diagram.

**Sides** (matching pairs of letters in the same positions):

| In $\triangle ABC$ | In $\triangle PQR$ | Why? |
|---|---|---|
| $AB$ | $PQ$ | 1st–2nd letters on both sides |
| $BC$ | $QR$ | 2nd–3rd letters on both sides |
| $CA$ | $RP$ | 3rd–1st letters on both sides |

**Angles** (single letters in the same positions):

| In $\triangle ABC$ | In $\triangle PQR$ |
|---|---|
| $\angle A$ | $\angle P$ |
| $\angle B$ | $\angle Q$ |
| $\angle C$ | $\angle R$ |

So $\triangle ABC \cong \triangle PQR$ gives these $6$ facts:

$$AB = PQ, \quad BC = QR, \quad CA = RP, \quad \angle A = \angle P, \quad \angle B = \angle Q, \quad \angle C = \angle R$$

### What Happens If You Write the Wrong Order?

Suppose for the diagram above someone mistakenly writes **$\triangle ABC \cong \triangle QPR$**.

According to that order:
- $A \leftrightarrow Q$, meaning $\angle A = \angle Q$. Yet $\angle A = 60^\circ$ and $\angle Q = 70^\circ$. **False!**
- $AB = QP$. That happens to be true ($4.6 = 4.6$), but
- $BC = PR$, meaning $5.2 = 5.6$. **False!**

A single swapped order turns a true congruence statement into a false one, and every conclusion drawn from it fails. Always **determine the exact vertex correspondence from the figure first**, then write the statement.

### Many Correct Ways to Write the Same Congruence

If $\triangle ABC \cong \triangle PQR$ is true, then all of these are equally true (because the pairings stay intact—both sides are reordered together):

- $\triangle BCA \cong \triangle QRP$
- $\triangle CAB \cong \triangle RPQ$
- $\triangle ACB \cong \triangle PRQ$
- $\triangle PQR \cong \triangle ABC$

Rule: **reorder the letters on both sides in the exact same way.** Never break the pairing ($A \leftrightarrow P$, $B \leftrightarrow Q$, $C \leftrightarrow R$).

By contrast, **$\triangle ABC \cong \triangle QPR$** is wrong because it pairs $A$ with $Q$.

---

## Part C: Writing a Congruence Statement from a Figure

### Method (3 Steps)

1. **Match equal angles** (or equal sides).
2. Write out the **vertex correspondence**: which vertex pairs with which.
3. Write the letters of the first triangle in any order, then write the letters of the second triangle in the **matching order**.

### Example 1

In $\triangle ABC$ and $\triangle XYZ$, we are given:
$\angle A = \angle Z$, $\angle B = \angle X$, $\angle C = \angle Y$, and $AB = ZX$, $BC = XY$, $CA = YZ$.

**Steps 1–2:** Vertex pairings: $A \leftrightarrow Z$, $B \leftrightarrow X$, $C \leftrightarrow Y$.

**Step 3:** Writing $\triangle ABC$ first, we follow the matching order $Z, X, Y$:

$$\triangle ABC \cong \triangle ZXY$$

**Check:** Verify the sides:
- $AB \leftrightarrow ZX$ ✅ (given $AB = ZX$)
- $BC \leftrightarrow XY$ ✅
- $CA \leftrightarrow YZ$ ✅

### Example 2 (Using Sides)

In $\triangle DEF$ and $\triangle LMN$: $DE = MN$, $EF = NL$, $FD = LM$.

Which vertex matches which?
- Both $DE$ and $EF$ share vertex **$E$**. Both $MN$ and $NL$ share vertex **$N$**. So **$E \leftrightarrow N$**.
- Both $DE$ and $FD$ share vertex **$D$**. Both $MN$ and $LM$ share vertex **$M$**. So **$D \leftrightarrow M$**.
- The remaining pair is **$F \leftrightarrow L$**.

$$\triangle DEF \cong \triangle MNL$$

**Check:** $DE \leftrightarrow MN$ ✅, $EF \leftrightarrow NL$ ✅, $FD \leftrightarrow LM$ ✅

Trick: **the common vertex of two equal sides in one triangle always corresponds to the common vertex of the two matching sides in the other triangle.**

### Example 3 (Two Triangles Sharing Part of a Figure)

```
        A
       /|\
      / | \
     /  |  \
    /   |   \
   B----D----C
```

Suppose we know $\triangle ABD \cong \triangle ACD$.

Pairings: $A \leftrightarrow A$, $B \leftrightarrow C$, $D \leftrightarrow D$.

From this we immediately get:
- $AB = AC$ (1st–2nd letters)
- $BD = CD$ (2nd–3rd letters)
- $AD = AD$ (3rd–1st letters; this is the shared/common side)
- $\angle BAD = \angle CAD$ (angles at $A$)
- $\angle ABD = \angle ACD$ ($B \leftrightarrow C$)
- $\angle ADB = \angle ADC$ (angles at $D$)

Notice that when two triangles share a vertex (such as $A$ or $D$), you must name the angles using **three letters** ($\angle BAD$, $\angle CAD$)—otherwise, writing just $\angle A$ creates ambiguity about which angle you mean.

---

## Part D: CPCTC

### What Is CPCTC?

**CPCTC** stands for **C**orresponding **P**arts of **C**ongruent **T**riangles are **C**ongruent (sometimes also written **CPCT** for *Corresponding Parts of Congruent Triangles are equal*).

In plain English: **once two triangles are known to be congruent, every pair of matching sides and matching angles is equal.**

In Part B, when we deduced $AB = PQ$ and $\angle A = \angle P$ from $\triangle ABC \cong \triangle PQR$, we were using this principle. When we cite it as a reason inside a geometric proof, we simply write **CPCTC**.

### Why Is It So Useful?

A huge number of geometry problems ask you to prove that two line segments are equal or that two angles are equal.

This gives us a reliable three-step strategy:
1. Locate **two triangles** that contain the sides (or angles) you want to compare.
2. Prove that those two triangles are **congruent**.
3. Conclude by **CPCTC** that the required sides (or angles) are equal.

We will learn how to carry out Step 2 (proving congruence) in Topic 2. In this topic, we treat the congruence as **already given** and practice applying CPCTC cleanly.

### Example 1: Direct CPCTC

Given $\triangle ABC \cong \triangle DEF$ with $AB = 4\text{ cm}$, $BC = 6\text{ cm}$, and $\angle E = 65^\circ$, find $DE$, $EF$, and $\angle B$.

Pairings: $A \leftrightarrow D$, $B \leftrightarrow E$, $C \leftrightarrow F$.

- $DE = AB = \mathbf{4\text{ cm}}$ (CPCTC)
- $EF = BC = \mathbf{6\text{ cm}}$ (CPCTC)
- $\angle B = \angle E = \mathbf{65^\circ}$ (CPCTC)

### Example 2: Using CPCTC in a Proof

**Given:** $\triangle PQR \cong \triangle STU$
**To prove:** $QR = TU$ and $\angle R = \angle U$

| Statement | Reason |
|---|---|
| $\triangle PQR \cong \triangle STU$ | Given |
| $P \leftrightarrow S$, $Q \leftrightarrow T$, $R \leftrightarrow U$ | Order of the congruence statement |
| $QR = TU$ | CPCTC (2nd–3rd letters) |
| $\angle R = \angle U$ | CPCTC (3rd letter) |

**Hence proved.**

(We covered the Given / To prove / Statement–Reason proof layout in [Euclid's Geometry, Topic 4](../euclids-geometry/euclids-geometry-part4.md).)

### Example 3: CPCTC in a Single Combined Figure

Two line segments $AC$ and $BD$ intersect at $O$, and it is given that $\triangle AOB \cong \triangle COD$.

```
  A                 B
   \               /
    \             /
     \           /
      \         /
         O
      /         \
     /           \
    /             \
   D               C
```

Given: $\triangle AOB \cong \triangle COD$. **Prove that $AB = CD$.**

| Statement | Reason |
|---|---|
| $\triangle AOB \cong \triangle COD$ | Given |
| $A \leftrightarrow C$, $O \leftrightarrow O$, $B \leftrightarrow D$ | Order of the congruence statement |
| $AB = CD$ | CPCTC (1st–3rd letters: $A\text{-}B$ and $C\text{-}D$) |

**Hence proved.**

From the same congruence, we also obtain $\angle OAB = \angle OCD$ by CPCTC ($A \leftrightarrow C$).

### Caution: When You Cannot Use CPCTC

You may apply CPCTC **only after triangle congruence has been established**. If you have not yet proved (or been given) that two triangles are congruent, citing CPCTC is invalid. **First congruence, then CPCTC.**

---

## Common Pitfalls to Avoid

1. **Mistake 1: Writing the vertices in the wrong order.**
   If the figure pairs $A \leftrightarrow P$, $B \leftrightarrow R$, and $C \leftrightarrow Q$, writing $\triangle ABC \cong \triangle PQR$ is wrong. The correct statement is **$\triangle ABC \cong \triangle PRQ$**. Always determine the pairings first, then write the triangles.

2. **Mistake 2: Using $=$ instead of $\cong$ for triangles.**
   Do not write $\triangle ABC = \triangle PQR$. Use $=$ for numbers and lengths (such as $AB = PQ$) and **$\cong$** for congruent figures.

3. **Mistake 3: Assuming same shape alone means congruent.**
   A small triangle and a large triangle with identical angles are **similar**, not congruent. Both shape and size must match.

4. **Mistake 4: Thinking equal area implies congruence.**
   A $2\text{ cm} \times 8\text{ cm}$ rectangle and a $4\text{ cm} \times 4\text{ cm}$ square both have an area of $16\text{ cm}^2$, yet they do not cover each other. **Equal area does not make two figures congruent.** (As seen in [Euclid's Geometry, Topic 1](../euclids-geometry/euclids-geometry.md), the converse of Axiom 4 is false.) The reverse, however, is always true: **congruent figures always have equal areas.**

5. **Mistake 5: Thinking equal perimeter implies congruence.**
   A triangle with sides $3\text{ cm}, 4\text{ cm}, 5\text{ cm}$ has perimeter $12\text{ cm}$, and an equilateral triangle with sides $4\text{ cm}, 4\text{ cm}, 4\text{ cm}$ also has perimeter $12\text{ cm}$. Their shapes differ, so they are not congruent.

6. **Mistake 6: Applying CPCTC before proving congruence.**
   CPCTC is a **conclusion**, never a starting point. Prove congruence first (Topic 2), then invoke CPCTC.

7. **Mistake 7: Naming a shared-vertex angle with a single letter.**
   In $\triangle ABD$ and $\triangle ACD$, writing $\angle A$ is ambiguous. Always write $\angle BAD$ and $\angle CAD$.

---

## Quick Recap

- **Congruent** means **same shape $+$ same size**. Test by **superposition** (place one on the other; they coincide completely).
- Line segments are congruent if lengths are equal; angles if measures are equal; circles if radii are equal; squares if sides are equal.
- Flipping (reflecting) a figure to make it coincide is allowed—mirror-image twins are still congruent.
- **Similar** means same shape only. Every congruent figure is similar, but not every similar figure is congruent.
- **$\triangle ABC \cong \triangle PQR$** means $A \leftrightarrow P$, $B \leftrightarrow Q$, $C \leftrightarrow R$. **Vertex order is essential.**
- This single statement yields $6$ equalities: $AB = PQ$, $BC = QR$, $CA = RP$, $\angle A = \angle P$, $\angle B = \angle Q$, $\angle C = \angle R$.
- You can permute both triangles simultaneously (e.g., $\triangle BCA \cong \triangle QRP$), provided the correspondence stays unchanged.
- **CPCTC:** Corresponding Parts of Congruent Triangles are Congruent. Used as a reason in proofs after congruence is established.
- Equal area or equal perimeter alone does not guarantee congruence.

---

## Practice Questions

1. State whether the figures in each pair are congruent. Give a reason.
   (a) Two circles, each of radius $3\text{ cm}$
   (b) Two squares of sides $4\text{ cm}$ and $5\text{ cm}$
   (c) Two line segments, each $7\text{ cm}$ long
   (d) Two angles, each measuring $45^\circ$
   (e) Two equilateral triangles, each of side $6\text{ cm}$

2. If $\triangle ABC \cong \triangle LMN$, write all six pairs of equal corresponding parts.

3. $\triangle PQR \cong \triangle XYZ$. If $PQ = 6\text{ cm}$, $QR = 8\text{ cm}$, and $\angle R = 40^\circ$, find $XY$, $YZ$, and $\angle Z$.

4. In $\triangle ABC$ and $\triangle DEF$, $AB = EF$, $BC = FD$, $CA = DE$, $\angle A = \angle E$, $\angle B = \angle F$, and $\angle C = \angle D$. Write the correct congruence statement.

5. If $\triangle ABC \cong \triangle PQR$, state whether each of the following is true or false:
   (a) $\triangle BAC \cong \triangle QPR$
   (b) $\triangle ABC \cong \triangle QPR$
   (c) $\triangle CBA \cong \triangle RQP$

6. State whether each statement is true or false. Give a reason.
   (a) Two congruent figures have equal areas.
   (b) Two figures with equal areas are always congruent.
   (c) Two triangles with equal perimeters are always congruent.
   (d) All equilateral triangles are congruent.

7. Line segments $AC$ and $BD$ intersect at $O$, and $\triangle AOB \cong \triangle COD$. If $AB = 5\text{ cm}$ and $\angle OAB = 50^\circ$, find $CD$ and $\angle OCD$.

8. In the figure, $D$ is a point on $BC$ such that $\triangle ABD \cong \triangle ACD$. Prove that $\angle BAD = \angle CAD$ (that is, $AD$ bisects $\angle BAC$), and $BD = CD$.

```
        A
       /|\
      / | \
     /  |  \
    B---D---C
```

### Answers

1. (a) **Congruent.** Both circles have the same radius ($3\text{ cm}$).
   (b) **Not congruent.** Their side lengths differ ($4\text{ cm} \neq 5\text{ cm}$); they have the same shape (similar) but different sizes.
   (c) **Congruent.** Both line segments have the same length ($7\text{ cm}$).
   (d) **Congruent.** Both angles have the same degree measure ($45^\circ$).
   (e) **Congruent.** All sides of both equilateral triangles are $6\text{ cm}$ (and all angles are $60^\circ$), so they have the same shape and size and coincide completely.

2. Pairings: $A \leftrightarrow L$, $B \leftrightarrow M$, $C \leftrightarrow N$.
   **$AB = LM$, $BC = MN$, $CA = NL$, $\angle A = \angle L$, $\angle B = \angle M$, $\angle C = \angle N$.**

3. Pairings: $P \leftrightarrow X$, $Q \leftrightarrow Y$, $R \leftrightarrow Z$.
   $XY = PQ = \mathbf{6\text{ cm}}$ (CPCTC)
   $YZ = QR = \mathbf{8\text{ cm}}$ (CPCTC)
   $\angle Z = \angle R = \mathbf{40^\circ}$ (CPCTC)

4. From the angles: $A \leftrightarrow E$, $B \leftrightarrow F$, $C \leftrightarrow D$.
   **$\triangle ABC \cong \triangle EFD$**
   Check: $AB \leftrightarrow EF$ ✅, $BC \leftrightarrow FD$ ✅, $CA \leftrightarrow DE$ ✅

5. Pairings: $A \leftrightarrow P$, $B \leftrightarrow Q$, $C \leftrightarrow R$.
   (a) **True.** $B \leftrightarrow Q$, $A \leftrightarrow P$, $C \leftrightarrow R$ preserves every pairing ✅
   (b) **False.** This pairs $A \leftrightarrow Q$, which breaks the given correspondence ❌
   (c) **True.** $C \leftrightarrow R$, $B \leftrightarrow Q$, $A \leftrightarrow P$ preserves every pairing ✅

6. (a) **True.** Congruent figures coincide completely, so they enclose the exact same area.
   (b) **False.** A $2\text{ cm} \times 8\text{ cm}$ rectangle and a $4\text{ cm} \times 4\text{ cm}$ square both have area $16\text{ cm}^2$, yet they are not congruent.
   (c) **False.** A $3\text{ cm}\text{–}4\text{ cm}\text{–}5\text{ cm}$ triangle and a $4\text{ cm}\text{–}4\text{ cm}\text{–}4\text{ cm}$ triangle both have perimeter $12\text{ cm}$, yet they are not congruent.
   (d) **False.** An equilateral triangle of side $3\text{ cm}$ and one of side $5\text{ cm}$ have the same shape (similar) but different sizes.

7. Pairings: $A \leftrightarrow C$, $O \leftrightarrow O$, $B \leftrightarrow D$.
   $CD = AB = \mathbf{5\text{ cm}}$ (CPCTC, $A\text{-}B \leftrightarrow C\text{-}D$)
   $\angle OCD = \angle OAB = \mathbf{50^\circ}$ (CPCTC, $A \leftrightarrow C$)

8. **Given:** $\triangle ABD \cong \triangle ACD$
   **To prove:** $\angle BAD = \angle CAD$ and $BD = CD$

   | Statement | Reason |
   |---|---|
   | $\triangle ABD \cong \triangle ACD$ | Given |
   | $A \leftrightarrow A$, $B \leftrightarrow C$, $D \leftrightarrow D$ | Order of the congruence statement |
   | $\angle BAD = \angle CAD$ | CPCTC (angles at $A$) |
   | $BD = CD$ | CPCTC (2nd–3rd letters: $B\text{-}D \leftrightarrow C\text{-}D$) |

   **Hence proved.** Because $\angle BAD = \angle CAD$, ray $AD$ divides $\angle BAC$ into two equal angles—meaning $AD$ is the **angle bisector** of $\angle BAC$.

---

If everything feels like a lot to hold in memory at once, just picture Liam's duplicate key: **same shape and same size, or the lock will not turn.** And for triangles, the **order of the letters** is what tells you which key fits which lock.

**In the next topic (Topic 2):** So far, we assumed congruence was "given." Checking all $6$ parts every time would be tedious. Next, we will discover how checking just **$3$ well-chosen parts** (SAS, ASA, AAS, SSS, or RHS) is enough to prove two triangles congruent with certainty.
