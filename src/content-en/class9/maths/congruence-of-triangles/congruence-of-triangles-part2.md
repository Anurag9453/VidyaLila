# Chapter: Congruence of Triangles (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [congruence-of-triangles.md](congruence-of-triangles.md).** We covered the Statement–Reason proof format in [Euclid's Geometry, Topic 4](../euclids-geometry/euclids-geometry-part4.md), and the angle sum of a triangle in [Triangles, Topic 2](../triangles/triangles-part2.md).
> **Topics covered in this file:**
> 2. Congruence Relation, and Criteria for Congruence: SAS, ASA, AAS, SSS, RHS

---

# Topic 2: Congruence Relation and Criteria for Congruence (SAS, ASA, AAS, SSS, RHS)

In Topic 1, through Liam's duplicate key, we saw that two figures are **congruent** when placing one over the other (**superposition**) covers it completely. For triangles, we learned that **order matters** in $\triangle ABC \cong \triangle PQR$, because it pins down which vertex pairs with which, giving **$6$ equal parts** ($3$ sides and $3$ angles) via **CPCTC**.

One big question remained: **how do we establish congruence in the first place?** Must we physically cut out every triangle and lay it on top of another, or measure all $6$ parts? In this topic, we will learn how measuring **just $3$ well-chosen parts** guarantees that two triangles are congruent.

---

## The Story of Elena's Bunting Workshop

Elena runs a busy event-design studio. One morning, a town festival committee placed an urgent order: "We need **$50$ identical triangular bunting flags** for the main bridge. Here is our master template."

Her apprentice Leo picked up a ruler and protractor. "Elena, I will measure all three sides and all three angles of the template, and then check all six measurements on every single flag we cut."

Elena chuckled. "Leo, $300$ measurements for $50$ flags? We will be here past midnight! Let me share a geometry shortcut. If you measure the **right three parts**, the flag is locked into the exact same shape and size automatically. You never need to check the other three."

Leo asked, "Which three parts?"

"That is the real secret," Elena smiled. "Certain combinations lock a triangle completely, while others will trick you."

Those "right three parts" are the five **criteria** of this topic: **SAS, ASA, AAS, SSS, and RHS**. And the two combinations that trick you are **AAA** and **SSA**.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Criterion** *(plural: criteria)* | A rule or test used to verify that a property holds | SAS is a congruence criterion |
| **Included angle** | The angle **between** two sides, where those two sides meet | $\angle B$ between $AB$ and $BC$ |
| **Included side** | The side **between** two angles, joining their vertices | Side $AB$ between $\angle A$ and $\angle B$ |
| **Hypotenuse** | The side opposite the right angle in a right-angled triangle (the longest side) | $AC$ in $\triangle ABC$ when $\angle B = 90^\circ$ |
| **Relation** | A mathematical connection between two objects | "$\cong$" is a relation |
| **Reflexive / Symmetric / Transitive** | Three fundamental properties of a relation (explored in Part A) | $\triangle ABC \cong \triangle ABC$ |

---

## Part A: The Congruence Relation

"Being congruent to" is a mathematical **relation** between triangles, and it satisfies three key properties.

### 1. Reflexive: Every Triangle Is Congruent to Itself

$$\triangle ABC \cong \triangle ABC$$

This is completely natural: stand in front of a mirror and your **measurements match your own**. Place any triangle onto an exact copy of itself and it covers itself completely.

### 2. Symmetric: It Works in Both Directions

$$\text{If } \triangle ABC \cong \triangle PQR, \text{ then } \triangle PQR \cong \triangle ABC$$

If Sophia's left-foot climbing shoe is identical in size and shape to Maya's, then Maya's shoe is identical to Sophia's. The relation holds both ways.

### 3. Transitive: It Chains Together

$$\text{If } \triangle ABC \cong \triangle PQR \text{ and } \triangle PQR \cong \triangle XYZ, \text{ then } \triangle ABC \cong \triangle XYZ$$

Think back to Elena's festival bunting. Every new flag is cut to match the master template. Therefore, Flag #1 and Flag #2 are congruent to each other, even without comparing them side by side.

This mirrors Euclid's [Axiom 1](../euclids-geometry/euclids-geometry.md): *"Things which are equal to the same thing are equal to one another."*

> A relation that satisfies all three properties—reflexive, symmetric, and transitive—is called an **equivalence relation** in higher mathematics. For now, simply remember that congruence satisfies all three.

---

## Part B: Why Don't We Need All $6$ Parts?

A triangle has $6$ parts ($3$ sides and $3$ angles), but they are **interconnected**:

- The three angles always add up to **$180^\circ$** ([Triangles, Topic 2](../triangles/triangles-part2.md)). Once you know two angles, the third is automatically determined.
- Once you fix all three side lengths, the triangle's angles are locked in place (as we will see with SSS).

Because the parts depend on one another, specifying **$3$ properly chosen parts** fixes a triangle completely—there is no freedom left to bend or stretch it into a different shape. Whenever two triangles share those $3$ matching parts, they must be congruent.

Let us inspect which combinations of $3$ parts work.

---

## Part C: SAS Criterion (Side–Angle–Side)

> **SAS Rule (Axiom):** Two triangles are congruent if **two sides and the included angle** of one triangle are equal to two sides and the included angle of the other triangle.

```
        A                         P
       /\                        /\
      /  \                      /  \
   5 /    \                  5 /    \
    /      \                  /      \
   /  60°   \                /  60°   \
  B----------C              Q----------R
       7                         7

 AB = PQ = 5,  ∠B = ∠Q = 60°,  BC = QR = 7
 ∠B lies BETWEEN AB and BC. ∠Q lies BETWEEN PQ and QR.
 Therefore, ΔABC ≅ ΔPQR (SAS)
```

### Why Is SAS an Axiom Rather Than a Theorem?

We accept SAS without proof—as an **axiom**—and use it to prove the remaining criteria. Try constructing it yourself: draw a $5\text{ cm}$ segment, set a $60^\circ$ angle at one end, and draw a $7\text{ cm}$ segment along the other ray. There is **only one way** to connect the two free endpoints to close the triangle. Every time you follow those three steps, you get the exact same triangle.

### Crucial Detail: The Angle MUST Be Included (Between the Two Sides)

In Elena's workshop terms: "Measure two edges, and measure the corner **where those two edges meet**."

| Given Parts | Is It SAS? | Why? |
|---|---|---|
| $AB$, $BC$, $\angle B$ | ✅ Yes | $\angle B$ is the common vertex where $AB$ and $BC$ meet |
| $AB$, $AC$, $\angle A$ | ✅ Yes | $\angle A$ is included between $AB$ and $AC$ |
| $AB$, $BC$, $\angle A$ | ❌ No | $\angle A$ does not touch $BC$ at all. This is SSA (which fails, as we will see in Part H) |

**Quick trick:** The vertex letter of the angle must appear in **both** side names. For $\angle \mathbf{B}$, the two sides are $A\mathbf{B}$ and $\mathbf{B}C$—both contain $B$, so $\angle B$ is included!

---

## Part D: ASA Criterion (Angle–Side–Angle)

> **ASA Rule (Theorem):** Two triangles are congruent if **two angles and the included side** of one triangle are equal to two angles and the included side of the other triangle.

```
        A                         D
       /\                        /\
      /  \                      /  \
     /    \                    /    \
    / 50°  \ 70°              / 50°  \ 70°
   B--------C                E--------F
       6                         6

 ∠B = ∠E = 50°,  BC = EF = 6,  ∠C = ∠F = 70°
 BC joins the vertices of ∠B and ∠C, so BC is the "included side".
 Therefore, ΔABC ≅ ΔDEF (ASA)
```

### The Proof Idea (In Plain Terms)

Because ASA is a theorem, we prove it from the SAS axiom. Here is the clean logic behind it.

**Given:** $\angle B = \angle E$, $BC = EF$, and $\angle C = \angle F$.
**To prove:** $\triangle ABC \cong \triangle DEF$.

Compare the lengths of $AB$ and $DE$. There are only three possibilities: $AB = DE$, $AB > DE$, or $AB < DE$.

**Case 1: $AB = DE$.** Then $AB = DE$, $\angle B = \angle E$, and $BC = EF$. By **SAS**, $\triangle ABC \cong \triangle DEF$ immediately.

**Case 2: $AB > DE$.** Mark a point $P$ on side $AB$ such that $PB = DE$.

```
          A
          |\
          | \
          P  \        P lies on AB with PB = DE
          |\  \
          | \  \
          B--------C
```

In $\triangle PBC$ and $\triangle DEF$: $PB = DE$, $\angle B = \angle E$, and $BC = EF$. Thus by **SAS**, $\triangle PBC \cong \triangle DEF$.
By CPCTC, $\angle PCB = \angle DFE$.
However, we are given $\angle ACB = \angle DFE$, so $\angle PCB = \angle ACB$.
That is impossible unless **$P$ coincides with $A$**, because $P$ lies below $A$ on $AB$, making $\angle PCB$ strictly smaller than $\angle ACB$.
Hence Case 2 ($AB > DE$) cannot happen.

**Case 3: $AB < DE$.** Apply the exact same construction on side $DE$; this leads to the same contradiction and is also impossible.

Only Case 1 survives, where SAS guarantees **$\triangle ABC \cong \triangle DEF$**. Thus ASA holds universally.

In Elena's words: "Measure one edge, and measure the angles at **both of its ends**. The flag is locked."

---

## Part E: AAS Criterion (Angle–Angle–Side)

> **AAS:** Two triangles are congruent if **any two pairs of angles and one pair of corresponding sides** (not necessarily included between those angles) are equal.

### How Does AAS Follow from ASA?

Here we use the **angle sum property** from [Triangles, Topic 2](../triangles/triangles-part2.md).

Suppose $\angle A = \angle P$, $\angle B = \angle Q$, and side $BC = QR$. Notice that $BC$ is **not** included between $\angle A$ and $\angle B$, so this is not directly ASA.

However:
- $\angle C = 180^\circ - \angle A - \angle B$
- $\angle R = 180^\circ - \angle P - \angle Q$
- Since $\angle A = \angle P$ and $\angle B = \angle Q$, it follows that **$\angle C = \angle R$**.

Now we have $\angle B = \angle Q$, $BC = QR$, and $\angle C = \angle R$, where $BC$ *is* included between $\angle B$ and $\angle C$. By **ASA**, the triangles are congruent!

So AAS is not a separate rule—it is simply **ASA in disguise**. Once two pairs of angles are equal, the third pair is forced to be equal too, so any corresponding side locks the triangles together.

```
        A                         P
       /\ 40°                    /\ 40°
      /  \                      /  \
     /    \ 8                  /    \ 8
    / 75°  \                  / 75°  \
   B--------C                Q--------R

 ∠A = ∠P = 40°,  ∠B = ∠Q = 75°,  AC = PR = 8
 AC is not between ∠A and ∠B, so this is AAS.
 (Since ∠C = ∠R = 180° − 40° − 75° = 65°, it also becomes ASA.)
```

### Watch Out: The Side Must Be "Corresponding"

Under AAS, the equal side must occupy the **same position** in both triangles—for example, opposite the $40^\circ$ angle in both triangles. If $AC$ equals $QR$ instead of $PR$, the triangles need not be congruent.

---

## Part F: SSS Criterion (Side–Side–Side)

> **SSS Rule (Theorem):** Two triangles are congruent if **all three sides** of one triangle are equal to the corresponding three sides of the other triangle.

```
        A                         X
       /\                        /\
      /  \                      /  \
   4 /    \ 6                4 /    \ 6
    /      \                  /      \
   B--------C                Y--------Z
       7                         7

 AB = XY = 4,  BC = YZ = 7,  CA = ZX = 6
 Therefore, ΔABC ≅ ΔXYZ (SSS)
```

### Why? The Compass Idea

Suppose Elena has only three lengths: $7\text{ cm}$, $4\text{ cm}$, and $6\text{ cm}$. To build the flag:

1. Draw a straight segment $BC$ of length $7\text{ cm}$.
2. Set a compass to $4\text{ cm}$, place the point at $B$, and swing an arc above $BC$.
3. Set the compass to $6\text{ cm}$, place the point at $C$, and swing an arc above $BC$.
4. The two arcs cross at **one unique point** above the line—that must be $A$.

Once the three side lengths are fixed, the third corner has nowhere else to go. That is why triangle trusses are used in bridges and cranes: **three fixed side lengths create a completely rigid frame**, without ever needing to lock the angles.

(The arcs also intersect at one point below $BC$, which is just a flipped copy of the exact same triangle.)

---

## Part G: RHS Criterion (Right Angle–Hypotenuse–Side)

> **RHS Rule (Theorem):** Two **right-angled triangles** are congruent if the **hypotenuse and one side** of one triangle are equal to the hypotenuse and the corresponding side of the other triangle.

```
   A                          P
   |\                         |\
   | \                        | \
 5 |  \ 13                  5 |  \ 13
   |   \                      |   \
   |90° \                     |90° \
   B-----C                    Q-----R

 ∠B = ∠Q = 90°,  hypotenuse AC = PR = 13,  AB = PQ = 5
 Therefore, ΔABC ≅ ΔPQR (RHS)
```

### Three Conditions—All Three Required

1. **R (Right angle):** Both triangles contain a **$90^\circ$ angle**.
2. **H (Hypotenuse):** Their **hypotenuses** (the sides opposite $90^\circ$) are equal.
3. **S (Side):** One other pair of corresponding **sides (legs)** is equal.

### Why Does This Look Like SSA?

Notice that RHS uses two sides (the hypotenuse and one leg) plus an angle ($90^\circ$) that is **not** between those two sides—which looks just like SSA! As we are about to see in Part H, SSA fails in general. However, **a right angle is a special exception** where only one triangle can be formed. That is why RHS works exclusively for right-angled triangles.

---

## Part H: What Does NOT Work? (The Combinations That Trick You)

Leo wondered, "Can I just measure *any* three parts and call it a day?" Elena sketched two counterexamples to warn him.

### 1. AAA (All Three Angles Equal): Does NOT Work

```
        A
       /\
      /  \                      P
     /    \                    /\
    / 60°  \                  /  \
   /        \                / 60°\
  B----------C              Q------R
       6                       3

 Both triangles are equilateral: all angles are 60°, 60°, 60°.
 Yet one has side 6 cm and the other has side 3 cm.
```

All three pairs of angles are equal, yet the triangles are **not congruent**. They share the same **shape** (they are **similar**, one a scaled-down copy of the other), but not the same **size**.

**Why it fails:** Without at least one side length, there is nothing to fix the scale of the triangle.

### 2. SSA (Two Sides and a Non-Included Angle): Does NOT Work

Suppose you are told $AB = 5$, $\angle B = 40^\circ$, and $AC = 4$. Notice that $\angle B$ is **not** between $AB$ and $AC$.

```
                A
               /|\ \
            5 / | \  \  4
             /  |  \4  \
            /40°|   \    \
           B----+---C₂-----C₁------->
                (not to scale)

 Draw an arc of radius 4 centred at A.
 It cuts the ray from B at TWO points: C₂ and C₁.
```

Both $\triangle ABC_2$ and $\triangle ABC_1$ have $AB = 5$, $\angle B = 40^\circ$, and $AC = 4$. One is compact and the other is stretched out—**two completely different triangles** satisfy the exact same SSA measurements! Thus SSA cannot guarantee congruence.

**Memory aid:** In SSA, the angle sits out at the edge rather than locked between the two given sides, leaving the third side free to swing into two positions. (Only when that angle is $90^\circ$ and the opposite side is the hypotenuse—RHS—does the swing collapse to a single triangle.)

---

## Part I: All Criteria at a Glance

| Criterion | What Must Be Equal | Crucial Condition |
|---|---|---|
| **SAS** | $2$ sides $+$ $1$ angle | The angle must be **between** the two sides |
| **ASA** | $2$ angles $+$ $1$ side | The side must be **between** the two angles |
| **AAS** | $2$ angles $+$ $1$ side | Side is **not** between the angles, but must be corresponding |
| **SSS** | $3$ sides | None |
| **RHS** | Right angle $+$ hypotenuse $+$ $1$ side | Valid **only for right-angled triangles** |
| ~~AAA~~ | $3$ angles | **Does not work** (does not fix size) |
| ~~SSA~~ | $2$ sides $+$ non-included angle | **Does not work** (two different triangles may be formed) |

### Which Criterion Applies? (Identification Practice)

In $\triangle ABC$ and $\triangle PQR$:

**1.** $AB = PQ$, $\angle B = \angle Q$, $BC = QR$
$\angle B$ is between $AB$ and $BC$. **SAS** ✅

**2.** $\angle A = \angle P$, $AB = PQ$, $\angle B = \angle Q$
$AB$ is between $\angle A$ and $\angle B$. **ASA** ✅

**3.** $\angle A = \angle P$, $\angle C = \angle R$, $AB = PQ$
$AB$ is not between $\angle A$ and $\angle C$ (side $AC$ is). **AAS** ✅

**4.** $AB = PQ$, $BC = QR$, $CA = RP$
All three sides. **SSS** ✅

**5.** $\angle C = \angle R = 90^\circ$, $AB = PQ$, $AC = PR$
The right angle is at $C$, so the hypotenuse is $AB$. We have hypotenuse $AB = PQ$ and leg $AC = PR$. **RHS** ✅

**6.** $\angle A = \angle P$, $\angle B = \angle Q$, $\angle C = \angle R$
Only angles. **AAA**—not a congruence criterion ❌

**7.** $AB = PQ$, $AC = PR$, $\angle C = \angle R$
$\angle C$ does not touch $AB$. This is **SSA**—not a congruence criterion ❌

---

## Part J: Proofs (Given, To Prove, Statement–Reason)

We use the formal Statement–Reason layout from [Euclid's Geometry, Topic 4](../euclids-geometry/euclids-geometry-part4.md). In every proof, we first establish congruence using the appropriate criterion, and then use **CPCTC** to prove the target equality.

### Proof 1 (SAS): Every Point on the Perpendicular Bisector Is Equidistant from the Endpoints

Line $l$ is the perpendicular bisector of segment $AB$, intersecting $AB$ at $O$. $P$ is any point on line $l$. Prove that $PA = PB$.

```
             P
            /|\
           / | \
          /  |  \
         /   |   \
        A----O----B
             |
             l
     AO = OB,  PO ⊥ AB
```

**Given:** $l$ is the perpendicular bisector of $AB$ at $O$; $P$ lies on $l$.
**To prove:** $PA = PB$.

| Statement | Reason |
|---|---|
| In $\triangle POA$ and $\triangle POB$: | |
| $AO = BO$ | $O$ is the midpoint of $AB$ (bisector) |
| $\angle POA = \angle POB = 90^\circ$ | $l \perp AB$ |
| $PO = PO$ | Common side |
| $\therefore \triangle POA \cong \triangle POB$ | **SAS** ($\angle O$ is included between $AO$ and $PO$) |
| $\therefore PA = PB$ | CPCTC |

Hence proved.

### Proof 2 (SAS): Equal Sides and Equal Angles in a Quadrilateral

$ABCD$ is a quadrilateral in which $AD = BC$ and $\angle DAB = \angle CBA$. Prove that $\triangle ABD \cong \triangle BAC$ and $BD = AC$.

```
     D             C
      \           /
       \         /
        \       /
         A-----B
   AD = BC,  ∠DAB = ∠CBA
```

**Given:** $AD = BC$, $\angle DAB = \angle CBA$.
**To prove:** $\triangle ABD \cong \triangle BAC$ and $BD = AC$.

| Statement | Reason |
|---|---|
| In $\triangle ABD$ and $\triangle BAC$: | |
| $AD = BC$ | Given |
| $\angle DAB = \angle CBA$ | Given |
| $AB = BA$ | Common side |
| $\therefore \triangle ABD \cong \triangle BAC$ | **SAS** ($\angle A$ is between $AD$ and $AB$; $\angle B$ is between $BC$ and $BA$) |
| $\therefore BD = AC$ | CPCTC |

Hence proved.

**Watch the vertex order carefully:** $A \leftrightarrow B$, $B \leftrightarrow A$, $D \leftrightarrow C$. That is why we write $\triangle ABD \cong \mathbf{\triangle BAC}$, not $\triangle ABC$.

### Proof 3 (ASA): Parallel Lines and a Midpoint

$AB \parallel CD$, and $O$ is the midpoint of segment $AD$. Segments $AD$ and $BC$ intersect at $O$. Prove that $\triangle AOB \cong \triangle DOC$, and $O$ is also the midpoint of $BC$.

```
     A--------B
      \      /
       \    /
        \  /
         O
        /  \
       /    \
      /      \
     C--------D
   AB ∥ CD,  AO = OD
```

**Given:** $AB \parallel CD$, $AO = OD$.
**To prove:** $\triangle AOB \cong \triangle DOC$ and $BO = CO$.

| Statement | Reason |
|---|---|
| In $\triangle AOB$ and $\triangle DOC$: | |
| $\angle OAB = \angle ODC$ | Alternate interior angles ($AB \parallel CD$, transversal $AD$) |
| $AO = DO$ | Given |
| $\angle AOB = \angle DOC$ | Vertically opposite angles |
| $\therefore \triangle AOB \cong \triangle DOC$ | **ASA** ($AO$ lies between $\angle A$ and $\angle O$) |
| $\therefore BO = CO$ | CPCTC |

Therefore, $O$ is also the midpoint of $BC$. Hence proved.

(We studied alternate interior angles and vertically opposite angles in [Lines and Angles, Topic 3](../lines-and-angles/lines-and-angles-part3.md).)

### Proof 4 (ASA): A Diagonal Bisecting Two Angles

In quadrilateral $ABCD$, diagonal $AC$ bisects both $\angle A$ and $\angle C$. Prove that $\triangle ABC \cong \triangle ADC$, $AB = AD$, and $CB = CD$.

```
            B
           / \
          /   \
         A-----C
          \   /
           \ /
            D
   ∠BAC = ∠DAC,  ∠BCA = ∠DCA
```

**Given:** $\angle BAC = \angle DAC$, $\angle BCA = \angle DCA$.
**To prove:** $\triangle ABC \cong \triangle ADC$, $AB = AD$, and $CB = CD$.

| Statement | Reason |
|---|---|
| In $\triangle ABC$ and $\triangle ADC$: | |
| $\angle BAC = \angle DAC$ | $AC$ bisects $\angle A$ |
| $AC = AC$ | Common side |
| $\angle BCA = \angle DCA$ | $AC$ bisects $\angle C$ |
| $\therefore \triangle ABC \cong \triangle ADC$ | **ASA** ($AC$ lies between $\angle A$ and $\angle C$) |
| $\therefore AB = AD$ and $CB = CD$ | CPCTC |

Hence proved.

### Proof 5 (AAS): Distance from a Point on an Angle Bisector to Both Arms

Line $l$ is the bisector of $\angle A$, and $B$ is any point on $l$. $BP$ and $BQ$ are perpendiculars from $B$ to the arms of $\angle A$. Prove that $\triangle APB \cong \triangle AQB$ and $BP = BQ$.

```
              P
             /|
            / |
           /  |
          A---+------B----- l
           \  |     /
            \ |   /
             \| /
              Q
   (not to scale)
   ∠PAB = ∠QAB,  BP ⊥ AP,  BQ ⊥ AQ
```

**Given:** $\angle PAB = \angle QAB$, $\angle APB = \angle AQB = 90^\circ$.
**To prove:** $\triangle APB \cong \triangle AQB$ and $BP = BQ$.

| Statement | Reason |
|---|---|
| In $\triangle APB$ and $\triangle AQB$: | |
| $\angle PAB = \angle QAB$ | $l$ bisects $\angle A$ |
| $\angle APB = \angle AQB$ | Both equal $90^\circ$ (perpendiculars) |
| $AB = AB$ | Common side |
| $\therefore \triangle APB \cong \triangle AQB$ | **AAS** ($AB$ is not between $\angle A$ and $\angle P$) |
| $\therefore BP = BQ$ | CPCTC |

Hence proved. Every point on the angle bisector is **equidistant** from the two arms of the angle.

### Proof 6 (SSS): Diagonal of a Kite Bisecting an Angle

In kite $ABCD$, $AB = AD$ and $CB = CD$. Prove that $\triangle ABC \cong \triangle ADC$, and that $AC$ bisects $\angle A$.

```
            B
           / \
          /   \
         A-----C
          \   /
           \ /
            D
   AB = AD,  CB = CD
```

**Given:** $AB = AD$, $CB = CD$.
**To prove:** $\triangle ABC \cong \triangle ADC$ and $\angle BAC = \angle DAC$.

| Statement | Reason |
|---|---|
| In $\triangle ABC$ and $\triangle ADC$: | |
| $AB = AD$ | Given |
| $CB = CD$ | Given |
| $AC = AC$ | Common side |
| $\therefore \triangle ABC \cong \triangle ADC$ | **SSS** |
| $\therefore \angle BAC = \angle DAC$ | CPCTC |

Thus $AC$ bisects $\angle A$. Hence proved.

Notice that Proof 4 and Proof 6 share the exact same figure, yet have **different given information**: Proof 4 gave angles (so ASA applied), whereas here we are given sides (so SSS applies). Always choose the criterion that matches the given data.

### Proof 7 (RHS): Two Right Triangles on a Common Base

$AB \perp BC$ and $DC \perp BC$, with $AC = DB$. Prove that $\triangle ABC \cong \triangle DCB$ and $AB = DC$.

```
   A           D
   |\         /|
   | \       / |
   |  \     /  |
   |   \   /   |
   |    \ /    |
   |     X     |
   |    / \    |
   |   /   \   |
   B-----------C
   AB ⊥ BC,  DC ⊥ BC,  AC = DB
```

**Given:** $\angle ABC = \angle DCB = 90^\circ$, $AC = DB$.
**To prove:** $\triangle ABC \cong \triangle DCB$ and $AB = DC$.

| Statement | Reason |
|---|---|
| In $\triangle ABC$ and $\triangle DCB$: | |
| $\angle ABC = \angle DCB = 90^\circ$ | Given (both are right angles) |
| $AC = DB$ | Given (both are hypotenuses opposite the right angles) |
| $BC = CB$ | Common side |
| $\therefore \triangle ABC \cong \triangle DCB$ | **RHS** |
| $\therefore AB = DC$ | CPCTC |

Hence proved.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Picking a non-included angle for SAS.**
   Being given $AB$, $BC$, and $\angle A$ is **not** SAS—that is SSA. For SAS, the angle must lie **between** the two given sides: for $AB$ and $BC$, the included angle is $\angle B$.

2. **Mistake 2: Confusing ASA and AAS.**
   $\angle A$, $\angle B$, and $AB \implies$ **ASA** ($AB$ is between $\angle A$ and $\angle B$).
   $\angle A$, $\angle B$, and $BC \implies$ **AAS** ($BC$ is not between $\angle A$ and $\angle B$).
   Both are valid congruence criteria, so make sure you cite the right name in your proof.

3. **Mistake 3: Treating AAA as a congruence criterion.**
   Equal angles guarantee the same **shape**, not the same **size**. Equilateral triangles of side $3\text{ cm}$ and $6\text{ cm}$ are not congruent.

4. **Mistake 4: Applying RHS to non-right triangles.**
   RHS works **only for right-angled triangles**. In a general triangle, two sides and a non-included angle (SSA) do not force congruence.

5. **Mistake 5: Using two legs with a right angle and calling it RHS.**
   RHS requires the **hypotenuse**. If two right triangles have equal pairs of **legs** and the $90^\circ$ angle between them, the criterion is **SAS** (not RHS), because the right angle is included between the two legs.

6. **Mistake 6: Writing the wrong vertex order in the congruence statement.**
   In Proof 2, $A \leftrightarrow B$, $B \leftrightarrow A$, and $D \leftrightarrow C$, so we must write $\triangle ABD \cong \triangle BAC$. Writing $\triangle ABD \cong \triangle ABC$ would lead to false CPCTC equalities.

7. **Mistake 7: Citing CPCTC as a congruence criterion.**
   CPCTC is only usable **after** congruence is established. Prove $\triangle ABC \cong \triangle PQR$ first via SAS/ASA/AAS/SSS/RHS, then use CPCTC—never the other way around.

8. **Mistake 8: Leaving out the reason for a shared side or angle.**
   When two triangles share a side (such as $AC = AC$), always write **"Common side"** in the Reason column. That shared part counts as one of the three required parts.

---

## Quick Recap

- Congruence is a relation that is **reflexive** ($\triangle ABC \cong \triangle ABC$), **symmetric** (works both ways), and **transitive** (chains together).
- You do not need to verify all $6$ parts; **$3$ properly chosen parts** suffice.
- **SAS** (axiom): $2$ sides $+$ the **included** angle.
- **ASA** (theorem): $2$ angles $+$ the **included** side (proved from SAS).
- **AAS:** $2$ angles $+$ a non-included corresponding side (third angle is equal by angle sum, reducing to ASA).
- **SSS** (theorem): all $3$ sides.
- **RHS** (theorem): right angle $+$ hypotenuse $+$ $1$ leg (**right triangles only**).
- **AAA and SSA do NOT guarantee congruence.** AAA leaves size unfixed; SSA can produce two distinct triangles.
- Proof workflow: prove congruence with a criterion first, then deduce remaining equalities by **CPCTC**.

---

## Practice Questions

1. In $\triangle ABC$ and $\triangle PQR$, state the congruence criterion (SAS, ASA, AAS, SSS, or RHS) that applies, or write "not possible":
   (a) $AB = PQ$, $BC = QR$, $\angle B = \angle Q$
   (b) $\angle A = \angle P$, $\angle B = \angle Q$, $AB = PQ$
   (c) $AB = PQ$, $BC = QR$, $CA = RP$
   (d) $\angle B = \angle Q = 90^\circ$, $AC = PR$, $BC = QR$
   (e) $\angle A = \angle P$, $\angle B = \angle Q$, $BC = QR$
   (f) $\angle A = \angle P$, $\angle B = \angle Q$, $\angle C = \angle R$
   (g) $AB = PQ$, $AC = PR$, $\angle B = \angle Q$

2. You want to prove $\triangle ABC \cong \triangle PQR$ by SAS, and you know $AB = PQ$ and $BC = QR$. Which pair of angles must be equal?

3. Two line segments $AB$ and $CD$ bisect each other at $O$. Prove that $\triangle AOC \cong \triangle BOD$. Hence show that $AC = BD$ and $AC \parallel BD$.

4. In quadrilateral $ACBD$, $AC = AD$ and $AB$ bisects $\angle A$. Show that $\triangle ABC \cong \triangle ABD$, and hence $BC = BD$.

5. Two lines $l$ and $m$ intersect at $A$. $P$ is a point such that its perpendicular distances from $l$ and $m$ are equal ($PB \perp l$, $PC \perp m$, $PB = PC$). Prove that $AP$ bisects the angle between $l$ and $m$.

6. $\triangle ABC$ and $\triangle DCB$ are drawn on the same base $BC$, with $AB = DC$ and $AC = DB$. Prove that $\angle ABC = \angle DCB$.

7. State whether each statement is true or false. Give a reason.
   (a) If all three angles of two triangles are equal, the triangles are congruent.
   (b) SSA is a valid criterion of congruence.
   (c) RHS can be used only for right triangles.
   (d) If $\triangle ABC \cong \triangle DEF$, then $\triangle DEF \cong \triangle ABC$.
   (e) In SAS, any angle of the triangle can be used.

8. Explain why the AAS criterion follows from the ASA criterion.

### Answers

1. (a) $\angle B$ is included between $AB$ and $BC$. **SAS**
   (b) $AB$ is included between $\angle A$ and $\angle B$. **ASA**
   (c) All three pairs of sides are equal. **SSS**
   (d) The right angle is at $B$, so $AC$ is the hypotenuse. $AC = PR$ (hypotenuse) and $BC = QR$ (leg). **RHS**
   (e) $BC$ is not included between $\angle A$ and $\angle B$. **AAS**
   (f) Only angles are given (AAA). **Not possible**
   (g) $\angle B$ does not touch $AC$ (the included angle between $AB$ and $AC$ is $\angle A$). This is SSA. **Not possible**

2. For SAS, the angle must lie between the two given sides. $AB$ and $BC$ meet at $B$, and $PQ$ and $QR$ meet at $Q$. Therefore, we need **$\angle B = \angle Q$**.

3. **Given:** $AO = OB$, $CO = OD$.
   **To prove:** $\triangle AOC \cong \triangle BOD$, $AC = BD$, $AC \parallel BD$.

   | Statement | Reason |
   |---|---|
   | In $\triangle AOC$ and $\triangle BOD$: | |
   | $AO = BO$ | $O$ is the midpoint of $AB$ |
   | $\angle AOC = \angle BOD$ | Vertically opposite angles |
   | $CO = DO$ | $O$ is the midpoint of $CD$ |
   | $\therefore \triangle AOC \cong \triangle BOD$ | **SAS** |
   | $\therefore AC = BD$ | CPCTC |
   | $\therefore \angle OAC = \angle OBD$ | CPCTC |

   Because $\angle OAC$ and $\angle OBD$ are equal **alternate interior angles** formed by transversal $AB$ cutting lines $AC$ and $BD$, we conclude **$AC \parallel BD$** (converse of the Alternate Interior Angles Theorem from [Lines and Angles, Topic 3](../lines-and-angles/lines-and-angles-part3.md)). Hence proved.

4. **Given:** $AC = AD$, $\angle CAB = \angle DAB$.
   **To prove:** $\triangle ABC \cong \triangle ABD$ and $BC = BD$.

   | Statement | Reason |
   |---|---|
   | In $\triangle ABC$ and $\triangle ABD$: | |
   | $AC = AD$ | Given |
   | $\angle CAB = \angle DAB$ | $AB$ bisects $\angle A$ |
   | $AB = AB$ | Common side |
   | $\therefore \triangle ABC \cong \triangle ABD$ | **SAS** ($\angle A$ is included between $AC$ and $AB$) |
   | $\therefore BC = BD$ | CPCTC |

5. **Given:** $PB \perp l$, $PC \perp m$, $PB = PC$.
   **To prove:** $\angle PAB = \angle PAC$.

   | Statement | Reason |
   |---|---|
   | In $\triangle ABP$ and $\triangle ACP$: | |
   | $\angle ABP = \angle ACP = 90^\circ$ | $PB \perp l$, $PC \perp m$ |
   | $AP = AP$ | Common side (hypotenuse of both right triangles) |
   | $PB = PC$ | Given |
   | $\therefore \triangle ABP \cong \triangle ACP$ | **RHS** |
   | $\therefore \angle PAB = \angle PAC$ | CPCTC |

   Thus $AP$ bisects the angle between $l$ and $m$. Hence proved.

6. **Given:** $AB = DC$, $AC = DB$.
   **To prove:** $\angle ABC = \angle DCB$.

   | Statement | Reason |
   |---|---|
   | In $\triangle ABC$ and $\triangle DCB$: | |
   | $AB = DC$ | Given |
   | $AC = DB$ | Given |
   | $BC = CB$ | Common side |
   | $\therefore \triangle ABC \cong \triangle DCB$ | **SSS** |
   | $\therefore \angle ABC = \angle DCB$ | CPCTC |

7. (a) **False.** ❌ AAA fixes only shape, not size (for example, equilateral triangles of side $3\text{ cm}$ and $6\text{ cm}$).
   (b) **False.** ❌ SSA can produce two distinct triangles (as shown in Part H).
   (c) **True.** ✅ RHS requires a right angle and a hypotenuse, which exist only in right-angled triangles.
   (d) **True.** ✅ Congruence is a symmetric relation.
   (e) **False.** ❌ In SAS, the angle must be **included** between the two equal sides.

8. Under AAS, two pairs of angles are equal—say $\angle A = \angle P$ and $\angle B = \angle Q$. By the angle sum property, $\angle C = 180^\circ - \angle A - \angle B$ and $\angle R = 180^\circ - \angle P - \angle Q$, which forces **$\angle C = \angle R$**. With all three pairs of angles equal, whichever corresponding side is given must lie **between** two pairs of equal angles (for example, $BC$ lies between $\angle B$ and $\angle C$), turning the case directly into **ASA**. Thus AAS follows immediately from ASA.

---

Do not worry if the five criteria feel like a lot at first. Just picture Elena's bunting rule: **measure the right three parts, and the triangle locks itself in place**—while steering clear of the two traps, AAA and SSA. After writing a handful of proofs, spotting the right criterion will become second nature.

**In the next topic:** Now we put these criteria to work as tools. In Topic 3, we will **prove** a famous property of triangles: why the angles opposite the equal sides of an isosceles triangle are equal—fulfilling the promises we made back in the Triangles chapter.
