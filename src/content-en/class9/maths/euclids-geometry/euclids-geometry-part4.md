# Chapter: Introduction to Euclid's Geometry (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [euclids-geometry-part3.md](euclids-geometry-part3.md).** (Topic 1 is in [euclids-geometry.md](euclids-geometry.md); Topic 2 is in [euclids-geometry-part2.md](euclids-geometry-part2.md).)
> **Topics covered in this file:**
> 4. Theorems

---

# Topic 4: Theorems

In Topic 3, we counted how many lines can pass through $1$, $2$, or $n$ points, and we noted that two distinct lines can share **at most one point**. Back then, we accepted that statement simply by visualizing it and checking it intuitively.

In mathematics, however, *"it looks true"* is never enough. Every new geometric claim must be **proved** logically — relying strictly on the foundational rules we learned in Topic 1 (Euclid's **axioms and postulates**) and Topic 2 (the **incidence axioms**). A statement established by such a proof is called a **theorem**. In this final topic, we learn what a theorem is, how to format a formal proof, and how to prove Euclid's foundational theorems ourselves.

---

## A Detective Story

A box of rare drafting compasses disappears from **Dr. Bennett**'s studio. Detective **Sophia** takes the case.

She works with three tools:

1. **Clues:** The box was on the desk at $5{:}00\text{ PM}$. Between $5{:}00$ and $6{:}00\text{ PM}$, only **Liam** entered the studio. A smudge of brass polish was found on Liam's sleeve.
2. **Established rules everyone agrees on:** *"Objects cannot vanish into thin air."* *"One person cannot be in two places at the same moment."*
3. **Chain of reasoning:** At every step, Sophia states *which* clue or rule supports her deduction.

Reasoning step by step, she reaches an airtight conclusion: **"Liam took the box."** Because every single step is backed by a clear **reason**, nobody can dispute her conclusion.

Geometry works the exact same way:

| Detective's World | Geometry's World |
|---|---|
| Clues | **Given** (what the problem states) |
| Established rules accepted by all | **Axioms and postulates** (Topic 1) |
| Step-by-step reasoning with justification | **Proof** |
| Final proven conclusion | **Theorem** (proven mathematical statement) |

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Theorem** | A statement proved to be true using axioms, postulates, and previously proved theorems | Two distinct lines have at most one common point |
| **Proposition** | Euclid's word for a theorem; both mean the exact same thing | Euclid's Proposition 1 |
| **Proof** | A step-by-step logical argument where every step is backed by a valid reason | All worked examples below |
| **Given** | The facts explicitly supplied in the problem statement | "$C$ is the midpoint of $AB$" |
| **To prove** | The statement we need to demonstrate as true | "$AC = \frac{1}{2}AB$" |
| **Statement and Reason** | Each step in a proof (Statement) paired with why it holds (Reason) | "$AC = BC$" ... "Given" |
| **Proof by contradiction** | Assuming the opposite of what we want to prove and showing it breaks a known rule | Proving two distinct lines have at most one common point |
| **Hence proved** | Standard closing phrase marking the end of a proof (also written *Q.E.D.*) | Placed at the end of a proof |

---

## Part A: Difference Between a Theorem and an Axiom

In Topic 1, we studied Euclid's axioms and postulates — foundational statements **accepted without proof** because they are self-evident.

A theorem is the exact opposite: a theorem is **never assumed** — it **must be proved**.

| | Axiom / Postulate | Theorem |
|---|---|---|
| Needs a proof? | **No.** Accepted directly | **Yes.** Must be logically proved |
| Where does it come from? | Direct intuition and experience | Derived from axioms, postulates, and earlier theorems |
| Example | "Through two distinct points, exactly one line passes" | "Two distinct lines have at most one common point" |

Picture our building analogy again:
- **Axioms and postulates** are the **foundation**.
- **Theorems** are the **upper floors** resting firmly on that foundation.

Once a theorem is proved, it becomes a trusted building block itself and can be cited as a **reason** in future proofs.

### Handy Reference Rules for Proofs (Quick Reminder)

We saw all of these in Topics 1 and 2. Here they are in one compact table because formal proofs cite them by **number**:

| Number | Euclid's Axiom |
|---|---|
| Axiom 1 | Things which are equal to the same thing are equal to one another |
| Axiom 2 | If equals are added to equals, the wholes are equal |
| Axiom 3 | If equals are subtracted from equals, the remainders are equal |
| Axiom 4 | Things which coincide with one another are equal to one another |
| Axiom 5 | The whole is greater than the part |
| Axiom 6 | Things which are double of the same things are equal to one another |
| Axiom 7 | Things which are halves of the same things are equal to one another |

| Number | Euclid's Postulate |
|---|---|
| Postulate 1 | A straight line may be drawn from any one point to any other point |
| Postulate 2 | A terminated line can be produced indefinitely |
| Postulate 3 | A circle can be drawn with any centre and any radius |
| Postulate 4 | All right angles are equal to one another |
| Postulate 5 | Parallel postulate: if interior angles on one side sum to $< 180^\circ$, the lines meet on that side (Topic 1, Part D) |

Plus the incidence rule we called **Incidence Axiom 3** in Topic 2:

> **Through two distinct points, there passes one and only one straight line.**

*(Note: in formal proofs, "Axioms 1–7" always refer to Euclid's seven common notions, not the incidence axioms. Notice also that Topic 2's Incidence Axiom 4 — "two distinct lines can intersect in at most one point" — is actually a theorem, which we will prove right below!)*

---

## Part B: How to Write a Proof

Every geometric proof follows a standard, clean blueprint — much like a formal report has a title, summary, and evidence:

1. **Figure:** Draw a neat, labelled diagram.
2. **Given:** Write down what information is provided.
3. **To prove:** State clearly what you must establish.
4. **Proof:** Proceed step by step, writing a valid **reason** beside every single statement (citing *Given*, an *Axiom*, a *Postulate*, or a previously proved *Theorem*).
5. **Hence proved.**

A two-column **Statement–Reason** table makes every step crystal clear:

| Statement | Reason |
|---|---|
| (First step) | (Why it is true) |
| (Second step) | (Why it is true) |
| ... | ... |

Keep one golden rule in mind:

> **Give a reason for every statement. A step without a reason is a guess, not a proof.**

---

## Part C: Proof by Contradiction (Assuming the Opposite)

Sometimes proving a statement directly is awkward. In those cases, mathematicians use a clever indirect method.

### An Everyday Example

Your friend **Elena** says: *"I was at home studying at $9{:}00\text{ PM}$ last night."*

Suppose you test the opposite: *"All right, let us assume you were at the **cinema** at $9{:}00\text{ PM}$."*
Yet you know a rock-solid fact: during your $9{:}00\text{ PM}$ video call, Elena was sitting in her bedroom in front of her bookshelf. A person cannot be in two different places at the exact same time.

Your temporary assumption (*"at the cinema"*) clashed with an undeniable fact! Therefore, **that opposite assumption must be false**, which forces Elena's original statement to be **true**.

### Steps for a Proof by Contradiction

1. **Assume the opposite** of what you want to prove.
2. Follow the logical consequences of that assumption.
3. Show that it collides with an **accepted axiom, postulate, theorem, or Given fact** — producing a **contradiction**.
4. Conclude that the opposite assumption is impossible, so the **original statement must be true**.

Let us put this method to work on our very first theorem!

---

## Part D: The "At Most One Common Point for Two Distinct Lines" Theorem

> **Theorem:** Two distinct lines **cannot have more than one point in common**.

We stated this fact in Topic 2 (Incidence Axiom 4) and Topic 3. Now let us prove it rigorously.

```
              l
               \     m
                \   /
                 \ /
                  P          <- two lines meet at one point P
                 / \
                /   \
```

**Given:** $l$ and $m$ are two distinct lines.

**To prove:** $l$ and $m$ have at most one point in common.

**Proof (by contradiction):**

| Statement | Reason |
|---|---|
| $1.$ Suppose $l$ and $m$ intersect at **two distinct points $P$ and $Q$**. | Assumption (opposite of what we want to prove) |
| $2.$ Then both $P$ and $Q$ lie on line $l$, and both $P$ and $Q$ also lie on line $m$. | From Step $1$ |
| $3.$ That means **two distinct lines** ($l$ and $m$) pass through the same two distinct points $P$ and $Q$. | From Step $2$ and Given ($l$ and $m$ are distinct) |
| $4.$ However, **one and only one** line passes through two distinct points. | Incidence Axiom 3 |
| $5.$ Steps $3$ and $4$ clash with each other. | Contradiction |
| $6.$ Therefore, our assumption in Step $1$ is false; $l$ and $m$ cannot share two points. | From Step $5$ |

**Hence, two distinct lines can have at most one point in common. Hence proved.**

Notice how the key lock in this proof was **Incidence Axiom 3** (uniqueness of a line through two points). Every theorem stands directly on the shoulders of the axioms beneath it!

---

## Part E: Euclid's Proposition 1 (Constructing an Equilateral Triangle)

This is the **very first proposition** in Book 1 of Euclid's *Elements*.

> **Proposition 1:** On any given finite straight line (line segment), an **equilateral triangle** (all three sides equal) can be constructed.

### Steps of Construction

```
            C
           / \
          /   \
         /     \
        A-------B

   (Circle centred at A with radius AB,
    circle centred at B with radius BA;
    the two circles intersect above at C)
```

1. Start with a given line segment **$AB$**.
2. With centre **$A$** and radius **$AB$**, draw a circle.
3. With centre **$B$** and radius **$BA$**, draw a second circle.
4. Let **$C$** be a point where the two circles intersect.
5. Join **$CA$** and **$CB$**.

Then $\triangle ABC$ is the required equilateral triangle. Let us prove why!

### Proof

**Given:** Line segment $AB$.

**To prove:** $\triangle ABC$ is equilateral, i.e. $AB = BC = CA$.

| Statement | Reason |
|---|---|
| $1.$ A circle can be drawn with centre $A$ and radius $AB$, and another with centre $B$ and radius $BA$. | Postulate 3 |
| $2.$ Point $C$ can be joined to $A$ and to $B$ (segments $CA$ and $CB$). | Postulate 1 |
| $3.$ $AC = AB$ | Both are radii of the first circle (centre $A$) |
| $4.$ $BC = AB$ | Both are radii of the second circle (centre $B$) |
| $5.$ $AC = BC$ | From Steps $3$ and $4$: things equal to the same thing ($AB$) are equal to one another (**Axiom 1**) |
| $6.$ $AB = BC = CA$ | From Steps $3, 4,$ and $5$ |

**Hence, $\triangle ABC$ is an equilateral triangle. Hence proved.**

### One Fascinating Detail

Look closely at Step 4 of the construction: Euclid assumed without stating a postulate that the two circles **must intersect** at some point $C$! None of his five postulates explicitly guaranteed that circles cross each other. Later mathematicians spotted this tiny hidden gap and added continuity axioms to plug it. That does not make Euclid's proof wrong — rather, it reminds us that a sharp mathematical detective watches out for even the tiniest hidden assumptions!

---

## Part F: Step-by-Step Proofs (Naming the Axiom at Every Step)

### Example 1: $AB + BC = AC$

> $A, B, C$ lie on a straight line, and $B$ lies between $A$ and $C$. Prove that $AB + BC = AC$.

```
    A-----------B--------------C
```

**Given:** $A, B, C$ are collinear, with $B$ lying between $A$ and $C$.
**To prove:** $AB + BC = AC$

| Statement | Reason |
|---|---|
| $1.$ Joining $AB$ and $BC$ end-to-end coincides completely with segment $AC$. | $B$ lies between $A$ and $C$ |
| $2.$ $AB + BC = AC$ | Things which coincide with one another are equal to one another (**Axiom 4**) |

**Hence proved.**

*(Note: this proof also relies on $A$ and $C$ determining a single straight line, which is Incidence Axiom 3.)*

### Example 2: Subtracting Equals from Equals

> $A, B, C, D$ lie on a straight line in that order, and $AC = BD$. Prove that $AB = CD$.

We saw this problem briefly in Topic 1 (Part E, Example 3) as an illustration of Axiom 3. Now let us write it out as a complete formal proof.

```
    A--------B--------C--------D
```

**Given:** $AC = BD$, and points $A, B, C, D$ lie on a line in that order.
**To prove:** $AB = CD$

| Statement | Reason |
|---|---|
| $1.$ $AC = AB + BC$ | $B$ lies between $A$ and $C$ (Axiom 4, as in Example 1) |
| $2.$ $BD = BC + CD$ | $C$ lies between $B$ and $D$ (Axiom 4) |
| $3.$ $AB + BC = BC + CD$ | Since $AC = BD$ (Given), Steps $1$ and $2$ are equal (**Axiom 1**) |
| $4.$ $AB = CD$ | Subtract **$BC$** from both sides; if equals are subtracted from equals, the remainders are equal (**Axiom 3**) |

**Hence proved.**

**Check with numbers:** Suppose $AB = 3$, $BC = 4$, and $CD = 3$. Then $AC = 7$ and $BD = 7$ (equal ✅), and $AB = CD = 3$ ✅

### Example 3: Half of a Segment at the Midpoint

> $C$ is the midpoint of line segment $AB$. Prove that $AC = \frac{1}{2}AB$.

```
    A--------------C--------------B
```

**Given:** $C$ is the midpoint of $AB$, so $AC = BC$.
**To prove:** $AC = \frac{1}{2}AB$

| Statement | Reason |
|---|---|
| $1.$ $AC = BC$ | Given (definition of midpoint) |
| $2.$ $AC + AC = BC + AC$ | Add $AC$ to both sides; equals added to equals give equal wholes (**Axiom 2**) |
| $3.$ $BC + AC = AB$ | $AC$ and $CB$ together coincide with $AB$ (**Axiom 4**) |
| $4.$ $2AC = AB$ | From Steps $2$ and $3$ (**Axiom 1**) |
| $5.$ $AC = \frac{1}{2}AB$ | Divide both sides by $2$ |

**Hence proved.**

### Example 4: Every Line Segment Has One and Only One Midpoint

> Prove that every line segment has **one and only one** midpoint.

Let us prove this by contradiction!

```
    A----------C-D---------------B      <- suppose both C and D are midpoints
```

**Given:** Line segment $AB$.
**To prove:** $AB$ has a unique midpoint.

| Statement | Reason |
|---|---|
| $1.$ Suppose $AB$ has **two distinct midpoints $C$ and $D$**. | Assumption (opposite of what we want to prove) |
| $2.$ $AC = CB$, so $2AC = AB$ | As in Example 3 (Axioms 2 and 4) |
| $3.$ $AD = DB$, so $2AD = AB$ | By the same reasoning |
| $4.$ $2AC = 2AD$ | Both equal $AB$ (**Axiom 1**) |
| $5.$ $AC = AD$ | Things which are halves of the same thing ($AB$) are equal (**Axiom 7**) |
| $6.$ Both $C$ and $D$ lie on segment $AB$ at the exact same distance from $A$, so $C$ and $D$ must coincide as the same point. | From Step $5$ |
| $7.$ This clashes with Step $1$ ("two distinct midpoints"). | Contradiction |

**Therefore, every line segment has one and only one midpoint. Hence proved.**

### Example 5: Equal to the Same Thing (with Angles)

> Given $\angle ABC = \angle PQR$ and $\angle PQR = \angle XYZ$, prove that $\angle ABC = \angle XYZ$.

| Statement | Reason |
|---|---|
| $1.$ $\angle ABC = \angle PQR$ | Given |
| $2.$ $\angle XYZ = \angle PQR$ | Given |
| $3.$ $\angle ABC = \angle XYZ$ | Things equal to the same thing ($\angle PQR$) are equal to one another (**Axiom 1**) |

**Hence proved.**

In everyday life, it is just like heights: if Maya is the same height as Liam, and Liam is the same height as Sophia, then Maya and Sophia are the same height. That is Axiom 1 at work.

### Example 6: Doubles Are Equal (Axiom 6)

> $C$ is the midpoint of $AB$ and $D$ is the midpoint of $XY$. If $AC = XD$, prove that $AB = XY$.

```
    A-------C-------B

    X-------D-------Y
```

| Statement | Reason |
|---|---|
| $1.$ $AB = 2AC$ | $C$ is the midpoint of $AB$ (from Example 3) |
| $2.$ $XY = 2XD$ | $D$ is the midpoint of $XY$ (same reason) |
| $3.$ $AC = XD$ | Given |
| $4.$ $AB = XY$ | $AB$ and $XY$ are doubles of equal quantities ($AC$ and $XD$) (**Axiom 6**) |

**Hence proved.**

---

## Common Pitfalls to Avoid

1. **Mistake 1: Using what you need to prove as a reason inside the proof.**
   In *"To prove: $AB = CD$,"* writing *"because $AB = CD$"* inside a step is invalid. That is called **circular reasoning** — like a detective saying *"Liam is guilty because Liam is guilty."*

2. **Mistake 2: Omitting reasons.**
   Writing "$AC = BC$" and moving on is incomplete. Always state *why*: *"radii of the same circle,"* *"Given,"* or *"Axiom 1."*

3. **Mistake 3: Guessing from the appearance of a diagram.**
   *"They look equal in the drawing"* is never a valid reason. Diagrams can be misleading or not drawn to scale. Every reason must be an axiom, postulate, definition, Given fact, or previously proved theorem.

4. **Mistake 4: Testing a few numerical examples and claiming "proved."**
   Measuring three or four line segments with a ruler to check that each has one midpoint is **not a proof**. A proof must hold for *every* possible segment, without exception. (Numerical checks are great for verifying your algebra, never as a substitute for proof.)

5. **Mistake 5: Mixing up axiom numbers.**
   Adding equals uses **Axiom 2**; subtracting equals uses **Axiom 3**. Do not confuse them! If you ever forget an axiom's number, write out its full wording (*"if equals are added to equals, the wholes are equal"*).

6. **Mistake 6: Writing a vague opposite in a proof by contradiction.**
   State the opposite assumption **explicitly and precisely** (*"Suppose $l$ and $m$ intersect at two distinct points $P$ and $Q$"*), and pinpoint **which exact rule** it violates. Saying *"that seems wrong"* is not enough.

7. **Mistake 7: Confusing theorems with axioms.**
   *"Two distinct lines have at most one common point"* is a **theorem** (it requires proof). *"Through two distinct points, one and only one line passes"* is an **axiom** (accepted directly).

---

## Quick Recap

- A **theorem (proposition)** is a statement established by a **proof**; an **axiom/postulate** is accepted without proof.
- Axioms form the foundation; theorems are the upper floors built on top. Once proved, a theorem can serve as a reason in later proofs.
- **Standard proof format:** Figure, Given, To prove, Proof (Statement $+$ Reason), Hence proved.
- **Proof by contradiction:** assume the opposite, follow the logic until a known rule breaks, and conclude the original statement must hold.
- **Two-lines theorem:** two distinct lines have at most one common point (proved by contradiction from Incidence Axiom 3).
- **Proposition 1:** an equilateral triangle can be constructed on any segment (uses Postulate 3, Postulate 1, and Axiom 1).
- Most-used axioms in proofs: **Axiom 1** (equal to same), **Axiom 2** (add equals), **Axiom 3** (subtract equals), **Axiom 4** (coincide), **Axiom 6** (doubles), **Axiom 7** (halves).
- Every step needs a **valid reason** — intuition from a diagram or a handful of test numbers is not a proof.

---

## Practice Questions

1. What is a theorem? How is it different from an axiom? Give one example of each.

2. Name the axiom or postulate used in each statement:
   (a) If $a = b$ and $b = c$, then $a = c$.
   (b) If $x + 5 = y + 5$, then $x = y$.
   (c) A circle can be drawn with centre $O$ and radius $3\text{ cm}$.
   (d) If $B$ lies between $A$ and $C$ on a line, then $AC > AB$.

3. Points $A, B, C, D$ lie on a line in this order, and $AB = CD$. Prove that $AC = BD$.

4. Leo's weight is equal to Liam's weight, and Liam's weight is equal to Elena's weight. What can you say about Leo's and Elena's weights? Which axiom of Euclid did you use?

5. Point $B$ lies between $A$ and $C$ on a line. Prove that $AC > AB$.

6. $C$ is the midpoint of $AB$ and $D$ is the midpoint of $XY$. If $AB = XY$, prove that $AC = XD$.

7. In Euclid's Proposition 1, which postulate allows us to draw the two circles, and which axiom shows that $AC = BC$?

8. Two distinct lines $l$ and $m$ both pass through points $P$ and $Q$. Using the theorem that two distinct lines can have at most one common point, prove that $P$ and $Q$ must be the same point.

### Answers

1. A **theorem** is a statement that is **proved** true using axioms, postulates, and previously proved theorems. An **axiom** is a general statement **accepted as true without proof**.
   Example: Axiom — *"Through two distinct points, exactly one straight line passes."* Theorem — *"Two distinct lines have at most one point in common."*

2. (a) **Axiom 1** (things equal to the same thing are equal to one another)
   (b) **Axiom 3** (if equals are subtracted from equals, the remainders are equal; $5$ is subtracted from both sides)
   (c) **Postulate 3** (a circle can be drawn with any centre and any radius)
   (d) **Axiom 5** (the whole is greater than the part; $AC$ is the whole and $AB$ is its part)

3. **Given:** $AB = CD$, and $A, B, C, D$ lie on a line in that order.
   **To prove:** $AC = BD$

   | Statement | Reason |
   |---|---|
   | $1.$ $AB = CD$ | Given |
   | $2.$ $AB + BC = CD + BC$ | Add $BC$ to both sides (**Axiom 2**) |
   | $3.$ $AB + BC = AC$ | $AB$ and $BC$ together coincide with $AC$ (**Axiom 4**) |
   | $4.$ $BC + CD = BD$ | Same reason (**Axiom 4**) |
   | $5.$ $AC = BD$ | From Steps $2, 3,$ and $4$ (**Axiom 1**) |

   **Hence proved.**
   Check: let $AB = CD = 2$ and $BC = 5$. Then $AC = 7$ and $BD = 7$ ✅

4. Leo and Elena have the **exact same weight**, since both weights equal Liam's weight. **Axiom 1** (things equal to the same thing are equal to one another).

5. **Given:** $B$ lies between $A$ and $C$ on a line.
   **To prove:** $AC > AB$

   | Statement | Reason |
   |---|---|
   | $1.$ $AC = AB + BC$ | $AB$ and $BC$ together coincide with $AC$ (**Axiom 4**) |
   | $2.$ $AB$ is a part of $AC$ | From Step $1$ |
   | $3.$ $AC > AB$ | The whole is greater than the part (**Axiom 5**) |

   **Hence proved.**

6. **Given:** $C$ is the midpoint of $AB$; $D$ is the midpoint of $XY$; $AB = XY$.
   **To prove:** $AC = XD$

   | Statement | Reason |
   |---|---|
   | $1.$ $AC = \frac{1}{2}AB$ | $C$ is the midpoint of $AB$ (Part F, Example 3) |
   | $2.$ $XD = \frac{1}{2}XY$ | $D$ is the midpoint of $XY$ (same reason) |
   | $3.$ $AB = XY$ | Given |
   | $4.$ $AC = XD$ | $AC$ and $XD$ are halves of equal quantities ($AB$ and $XY$) (**Axiom 7**) |

   **Hence proved.**

7. **Postulate 3** allows us to draw circles with any centre and any radius. **Axiom 1** shows $AC = BC$: since $AC = AB$ and $BC = AB$ (radii of equal circles), both equal $AB$ and therefore equal each other.

8. **Given:** $l$ and $m$ are distinct lines, and both pass through $P$ and $Q$.
   **To prove:** $P$ and $Q$ are the same point.

   | Statement | Reason |
   |---|---|
   | $1.$ Suppose $P$ and $Q$ are **distinct** points. | Assumption (opposite of what we want to prove) |
   | $2.$ Then the distinct lines $l$ and $m$ have **two distinct common points** ($P$ and $Q$). | From Step $1$ and Given |
   | $3.$ However, two distinct lines can have at most one common point. | **"At most one common point for two distinct lines" theorem** |
   | $4.$ Steps $2$ and $3$ clash. | Contradiction |
   | $5.$ Therefore, $P$ and $Q$ cannot be distinct; $P$ and $Q$ are the same point. | From Step $4$ |

   **Hence proved.** *(Notice how our earlier theorem has now become a valid reason in a brand-new proof — another floor built on top of our foundation!)*

---

## Chapter Wrap-Up: Introduction to Euclid's Geometry

| Topic | What You Learned | Key Takeaway |
|---|---|---|
| **1. History, Axioms, and Postulates** | Origins of geometry, Euclid and the *Elements*, axioms vs. postulates, Euclid's $7$ axioms and $5$ postulates (including the parallel postulate and Playfair's axiom) | Axioms and postulates are accepted without proof and form the foundation of geometry |
| **2. Geometric Terms and Incidence Axioms** | Euclid's definitions, undefined terms (point, line, plane), line, segment, ray, collinear points, intersecting, parallel and concurrent lines, coplanar figures, $4$ incidence axioms | Exactly one straight line passes through two distinct points |
| **3. Lines Through Given Points** | Number of lines through $1, 2, 3,$ and $n$ points ($\frac{n(n-1)}{2}$), cases with collinear points, maximum intersection points of lines | Infinitely many lines through $1$ point; exactly $1$ line through $2$ points |
| **4. Theorems** | Theorem vs. axiom, formal proof format, proof by contradiction, two distinct lines theorem, Proposition 1, step-by-step axiom proofs | Every new result must be proved logically from axioms and earlier theorems, with a reason for every step |

---

Writing formal proofs can feel unusual at first because you are proving facts that already look obvious to the eye. Yet this exact discipline powers every geometry chapter ahead — *Lines and Angles*, *Triangles*, and *Quadrilaterals*. Just think like Detective Sophia: **every step earns a reason.** You have got this!
