# Chapter: Mensuration (Part 5)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [mensuration-part4.md](mensuration-part4.md).** (The chapter begins in [mensuration.md](mensuration.md).)
> **Topics covered in this file:**
> 5. Surface Area and Volume of Right Circular Cones

---

# Topic 5: Surface Area and Volume of Right Circular Cones

In Topic 4, Liam unrolled a tin can label to discover that a cylinder's curved wall flattens into a rectangle. We mastered the cylinder's formulas: curved surface area $2\pi r h$, total surface area $2\pi r(r + h)$, and volume $\pi r^2 h$. Now meet the cylinder's "pointed cousin." It also sits on a circular base, yet as it rises it tapers smoothly to a single sharp point at the top. This solid is a **cone**, and much of what we learned about cylinders — especially volume — connects directly to it.

---

## Elena's Birthday Party

It is Elena's 10th birthday, and her parents ordered three things for the celebration:

1. **Party hats:** shiny paper hats pointed at the top for every guest.
2. **Ice-cream cones:** crisp waffle cones ready to be filled with scoops of ice cream.
3. A **kitchen funnel** to pour fresh lemonade cleanly into bottles.

Elena lined them up and noticed something right away: all three share the exact same shape — round at one end and tapering to a point at the other.

Then two questions popped into her head:

- "How much **cardboard** does it take to make one party hat?" *(A surface area question.)*
- "How much **ice cream** fits inside one waffle cone?" *(A volume question.)*

In this topic, we answer both questions!

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Cone** | A 3D solid with a circular base tapering smoothly to a single point | An ice-cream cone, party hat, or funnel |
| **Right circular cone** | A cone whose tip lies directly above the centre of its circular base | An upright party hat |
| **Vertex (apex)** | The sharp pointed tip at the top of the cone | The peak of a party hat |
| **Radius ($r$)** | Radius of the circular base | Half the diameter across the hat's brim |
| **Height ($h$)** | Straight vertical distance from the vertex down to the centre of the base | Vertical height inside the cone |
| **Slant height ($l$)** | Slanted distance along the cone's curved wall from the vertex to the rim of the base | Length of the side of a party hat |
| **CSA** | Curved surface area: the area of the slanted wall only | Paper used for a party hat |
| **TSA** | Total surface area: curved wall $+$ circular base | A solid closed cone |

---

## Part A: Parts of a Cone and Slant Height

Slice a right circular cone straight down the middle through its vertex and look at the cross-section — a right-angled triangle hides right inside:

```
              A  (vertex / apex)
             /|\
            / | \
         l /  |  \ l
          /   | h \
         /    |    \
        /     |     \
       B------O------C
           r      r
```

- **$O$** is the centre of the circular base.
- **$AO = h$** (vertical height, straight up).
- **$OB = r$** (base radius).
- **$AB = l$** (slant height, along the sloping side).

In $\triangle AOB$, $\angle AOB = 90^\circ$. By **Pythagoras' theorem**:

$$\mathbf{l^2 = r^2 + h^2 \quad \text{so} \quad l = \sqrt{r^2 + h^2}}$$

Notice that the slant height $l$ is always **greater than** the vertical height $h$, because $l$ is the hypotenuse of the right triangle.

### Example 1

A cone has radius $7\text{ cm}$ and vertical height $24\text{ cm}$. Find its slant height.

$$l = \sqrt{7^2 + 24^2} = \sqrt{49 + 576} = \sqrt{625} = \mathbf{25\text{ cm}}$$

**Check:** $7^2 + 24^2 = 625 = 25^2$ ✅

---

## Part B: Curved Surface Area (CSA) $= \pi r l$

### Unrolling the Party Hat

Elena snipped a spare paper party hat straight along its seam from rim to tip and spread it flat on the table. What shape appeared? A **handheld fan** shape — a **sector** of a circle!

```
   Party hat (cone)           Unrolled flat (fan / sector)

       /\                         .-~~~~~~-.
      /  \                      .'  \      `.
     /    \          --->      /     \  l    \
    /      \                  |       \      |
   /________\                  \       *     /
    rim = 2πr                   `.  l  ↗   .'
                                  `-.....-'
                                arc length = 2πr
```

- The **radius** of that flat fan $=$ the slant height **$l$** of the hat.
- The **curved edge (arc)** of the fan $=$ the circumference of the hat's rim $= \mathbf{2\pi r}$.

If this fan were a complete circle of radius $l$, its area would be $\pi l^2$ and its circumference would be $2\pi l$. Our fan is only the fraction of that full circle given by the ratio of its arc to the full circumference:

$$\text{Fraction} = \frac{2\pi r}{2\pi l} = \frac{r}{l}$$

Therefore, the area of the fan is $\left(\frac{r}{l}\right) \times \pi l^2 = \mathbf{\pi r l}$.

$$\mathbf{\text{CSA of a cone} = \pi r l}$$

*(This is an intuitive visual explanation; a formal calculus proof comes in higher grades. Thinking of the unrolled hat as a circular fan makes the formula easy to remember.)*

### Example 2

A cone has radius $7\text{ cm}$ and slant height $25\text{ cm}$. Find its CSA. *(Take $\pi = \frac{22}{7}$.)*

$$\text{CSA} = \pi r l = \frac{22}{7} \times 7 \times 25 = 22 \times 25 = \mathbf{550\text{ cm}^2}$$

### Example 3: Elena's Party Hats

Each party hat has base radius $7\text{ cm}$ and vertical height $24\text{ cm}$. How much cardboard is needed to make $10$ hats? *(Ignore overlap at the seam.)*

- First find slant height: from Example 1, $l = 25\text{ cm}$.
- Paper for $1$ hat $= \pi r l = 550\text{ cm}^2$ (from Example 2).
- Paper for $10$ hats $= 10 \times 550 = \mathbf{5{,}500\text{ cm}^2}$.

**Check:** $5{,}500 \div 10 = 550 = \frac{22}{7} \times 7 \times 25$ ✅

Notice that a party hat is **open at the bottom**, so we use only the CSA, not the TSA.

---

## Part C: Total Surface Area (TSA) $= \pi r(l + r)$

If the circular base of the cone is **closed** (for example, a solid wooden cone), we add the area of the circular base ($\pi r^2$) to the curved wall:

$$\text{TSA} = \text{CSA} + \text{base} = \pi r l + \pi r^2$$

$$\mathbf{\text{TSA of a cone} = \pi r(l + r)}$$

### Example 4

Find the TSA of a solid cone with $r = 7\text{ cm}$ and $h = 24\text{ cm}$.

From Example 1, $l = 25\text{ cm}$.

$$\text{TSA} = \pi r(l + r) = \frac{22}{7} \times 7 \times (25 + 7) = 22 \times 32 = \mathbf{704\text{ cm}^2}$$

**Check:** $\text{CSA } 550 + \text{base } \left(\frac{22}{7} \times 49 = 154\right) = 704$ ✅

### When to Use CSA vs. TSA

| Object | Formula needed | Why |
|---|---|---|
| Paper for a party hat | CSA | Open at the bottom |
| Biscuit of an ice-cream cone | CSA | Open at the wide top |
| Canvas for a conical circus marquee tent | CSA | Open at the ground |
| Painting a solid wooden cone | TSA | Closed on all sides |

---

## Part D: Volume $= \frac{1}{3}\pi r^2 h$

### Three Cones Fill One Cylinder

At Elena's party, the ice-cream vendor showed the kids a neat demonstration using two containers:

- A **cone** with base radius $r$ and height $h$.
- A **cylinder** with the **exact same radius $r$ and the exact same height $h$**.

He filled the cone to the brim with water and poured it into the cylinder. He filled the cone a second time and poured it in. On the **third** pour, the cylinder filled right up to the very top!

That means: **$3\text{ cones of water} = 1\text{ cylinder of water}$.**

In Topic 4, we proved that the volume of a cylinder is $\pi r^2 h$. Therefore:

$$\mathbf{\text{Volume of a cone} = \frac{1}{3}\pi r^2 h}$$

You can try this yourself at home: roll stiff card into a cone and a cylinder of the same base radius and height, then pour dry sand or rice from the cone into the cylinder — it takes exactly three pours!

### Example 5

Find the volume of a cone with $r = 7\text{ cm}$ and $h = 24\text{ cm}$.

$$\begin{aligned}
V &= \frac{1}{3} \times \frac{22}{7} \times 7^2 \times 24 \\
&= \frac{1}{3} \times \frac{22}{7} \times 49 \times 24 \\
&= \frac{1}{3} \times 22 \times 7 \times 24 \\
&= 22 \times 7 \times 8 = \mathbf{1{,}232\text{ cm}^3}
\end{aligned}$$

**Check (via cylinder):** A cylinder with the same $r$ and $h$ has volume $\frac{22}{7} \times 49 \times 24 = 3{,}696\text{ cm}^3$, and $3{,}696 \div 3 = 1{,}232$ ✅

### Example 6: Conical Grain Heap

On a farm, harvested grain sits in a conical heap of radius $2.1\text{ m}$ and height $2.8\text{ m}$. It must be covered with a waterproof tarpaulin before the rain arrives.

(a) What is the volume of the grain?
(b) How much tarpaulin is needed to cover the heap?

*(Take $\pi = \frac{22}{7}$.)*

**(a) Volume**

$$\begin{aligned}
V &= \frac{1}{3} \times \frac{22}{7} \times (2.1)^2 \times 2.8 \\
&= \frac{1}{3} \times \frac{22}{7} \times 4.41 \times 2.8 \\
&= \mathbf{12.936\text{ m}^3}
\end{aligned}$$

*(Step by step: $4.41 \times 2.8 = 12.348$; $12.348 \times 22 = 271.656$; $271.656 \div 21 = 12.936$.)*

**(b) Tarpaulin**

First find the slant height: $l = \sqrt{2.1^2 + 2.8^2} = \sqrt{4.41 + 7.84} = \sqrt{12.25} = 3.5\text{ m}$.

The tarpaulin covers only the sloping surface, not the ground underneath, so we need CSA:

$$\text{CSA} = \pi r l = \frac{22}{7} \times 2.1 \times 3.5 = 6.6 \times 3.5 = \mathbf{23.1\text{ m}^2}$$

**Check:** $2.1 : 2.8 : 3.5 = 3 : 4 : 5$, the familiar Pythagorean triple ✅

### Example 7: Finding Height from Volume

A cone has radius $7\text{ cm}$ and volume $616\text{ cm}^3$. Find its height.

$$\begin{aligned}
616 &= \frac{1}{3} \times \frac{22}{7} \times 49 \times h \\
616 &= \frac{1}{3} \times 154 \times h \\
616 \times 3 &= 154h \\
1{,}848 &= 154h \implies \mathbf{h = 12\text{ cm}}
\end{aligned}$$

**Check:** $\frac{1}{3} \times \frac{22}{7} \times 49 \times 12 = \frac{1}{3} \times 154 \times 12 = 616$ ✅

### Example 8: Finding Radius from Volume

A cone has height $21\text{ cm}$ and volume $1{,}078\text{ cm}^3$. Find its radius.

$$\begin{aligned}
1{,}078 &= \frac{1}{3} \times \frac{22}{7} \times r^2 \times 21 \\
1{,}078 &= 22r^2 \qquad \left(\text{since } \frac{1}{3} \times \frac{22}{7} \times 21 = 22\right) \\
r^2 &= 49 \implies \mathbf{r = 7\text{ cm}}
\end{aligned}$$

**Check:** $\frac{1}{3} \times \frac{22}{7} \times 49 \times 21 = 22 \times 49 = 1{,}078$ ✅

---

## Part E: Everyday Word Problems

### Example 9: Circus Marquee Tent

A conical marquee tent is set up for an outdoor fair. Its base radius is $7\text{ m}$ and its slant height is $10\text{ m}$. Heavy canvas costs $\$70$ per $\text{m}^2$. What is the cost of the canvas?

Canvas covers only the sloping wall (the ground inside is left open), so we compute CSA:

$$\text{CSA} = \pi r l = \frac{22}{7} \times 7 \times 10 = \mathbf{220\text{ m}^2}$$

$$\text{Cost} = 220 \times \$70 = \mathbf{\$15{,}400}$$

### Example 10: Cone vs. Cylinder

A cone and a cylinder both have radius $7\text{ cm}$ and height $24\text{ cm}$. Compare their volumes.

- Cylinder: $\pi r^2 h = \frac{22}{7} \times 49 \times 24 = \mathbf{3{,}696\text{ cm}^3}$
- Cone: $\frac{1}{3} \times 3{,}696 = \mathbf{1{,}232\text{ cm}^3}$

Even with the exact same base and height, the cone holds only **one-third** as much as the cylinder — which explains why a tall waffle cone holds less ice cream than a cylindrical tub of the same width and height!

---

## Common Pitfalls to Avoid

1. **Mistake 1: Using $h$ instead of $l$ in CSA.**
   CSA is $\pi r\mathbf{l}$, not $\pi r\mathbf{h}$. For $r = 7, h = 24$, using $\pi r h$ gives $528$, whereas the true CSA is $\pi r l = 550$. Always find $l$ first before computing CSA.

2. **Mistake 2: Forgetting the $\frac{1}{3}$ in the cone volume formula.**
   $\frac{22}{7} \times 49 \times 24 = 3{,}696$ is the volume of a *cylinder*. The cone's volume is one-third of that: $1{,}232$. **Never drop the $\frac{1}{3}$** for a cone.

3. **Mistake 3: Using diameter instead of radius.**
   If a problem states "diameter $14\text{ cm}$", then $r = \mathbf{7\text{ cm}}$, not $14$. Always check whether you are given radius or diameter.

4. **Mistake 4: Using $l$ instead of $h$ in the volume formula.**
   Volume $= \frac{1}{3}\pi r^2\mathbf{h}$ requires the **vertical height $h$**, not the slant height $l$. If $l$ is given, compute $h = \sqrt{l^2 - r^2}$ first.

5. **Mistake 5: Using TSA for an open cone.**
   Party hats, ice-cream cones, marquee tents, and tarpaulins over grain heaps are all open at the base, so use **CSA**. Use TSA only when the circular base is closed.

6. **Mistake 6: Mixing up units.**
   Area is always in **$\text{cm}^2$** or **$\text{m}^2$**, and volume is always in **$\text{cm}^3$** or **$\text{m}^3$**. Always write the matching unit alongside your answer.

---

## Quick Recap

- A cone has three key lengths: **$r$** (base radius), **$h$** (vertical height), and **$l$** (slant height).
- **$l = \sqrt{r^2 + h^2}$** (by Pythagoras' theorem); $l$ is always larger than $h$.
- **$\text{CSA} = \pi r l$**: unrolling the curved wall produces a circular sector (fan).
- **$\text{TSA} = \pi r(l + r)$** $= \text{CSA} + \text{circular base}$.
- **$\text{Volume} = \frac{1}{3}\pi r^2 h$**: one-third the volume of a cylinder with the same base and height.
- Use **CSA** for open cones (party hats, tents, grain covers) and **TSA** for closed solid cones.
- Volume uses **$h$**; surface area uses **$l$**.

---

## Practice Questions

1. A cone has radius $5\text{ cm}$ and vertical height $12\text{ cm}$. Find its slant height.

2. Find the curved surface area of a cone with radius $3.5\text{ cm}$ and slant height $10\text{ cm}$. *(Take $\pi = \frac{22}{7}$.)*

3. Find the total surface area of a solid cone with radius $14\text{ cm}$ and height $48\text{ cm}$. *(Take $\pi = \frac{22}{7}$.)*

4. Find the volume of a cone with radius $3.5\text{ cm}$ and height $12\text{ cm}$. *(Take $\pi = \frac{22}{7}$.)*

5. A party hat is a cone with base diameter $14\text{ cm}$ and slant height $25\text{ cm}$. How much cardboard is needed to make $8$ such hats? *(Take $\pi = \frac{22}{7}$.)*

6. A heap of wheat is in the shape of a cone with base diameter $6\text{ m}$ and height $4\text{ m}$. Find (a) the volume of the heap and (b) the area of canvas needed to just cover it. *(Take $\pi = 3.14$.)*

7. The volume of a cone is $462\text{ cm}^3$ and its radius is $7\text{ cm}$. Find its height. *(Take $\pi = \frac{22}{7}$.)*

8. A cylinder has volume $924\text{ cm}^3$. What is the volume of a cone with the same base radius and the same height?

9. State whether each statement is true or false. Give a reason.
   (a) The curved surface area of a cone is $\pi r h$.
   (b) The slant height of a cone is always greater than its height.
   (c) If the radius of a cone is doubled and the height stays the same, its volume also doubles.
   (d) A cone's volume is one-third of the volume of a cylinder with the same base and height.

### Answers

1. $l = \sqrt{5^2 + 12^2} = \sqrt{25 + 144} = \sqrt{169} = \mathbf{13\text{ cm}}$.

2. $\text{CSA} = \pi r l = \frac{22}{7} \times 3.5 \times 10 = 11 \times 10 = \mathbf{110\text{ cm}^2}$.

3. $l = \sqrt{14^2 + 48^2} = \sqrt{196 + 2{,}304} = \sqrt{2{,}500} = 50\text{ cm}$.
   $\text{TSA} = \pi r(l + r) = \frac{22}{7} \times 14 \times (50 + 14) = 44 \times 64 = \mathbf{2{,}816\text{ cm}^2}$.

4. $V = \frac{1}{3} \times \frac{22}{7} \times (3.5)^2 \times 12 = \frac{1}{3} \times \frac{22}{7} \times 12.25 \times 12 = \mathbf{154\text{ cm}^3}$.
   *($12.25 \times 12 = 147$; $147 \div 21 = 7$; $7 \times 22 = 154$.)*

5. Diameter $= 14 \implies r = 7\text{ cm}$. One hat $= \pi r l = \frac{22}{7} \times 7 \times 25 = 550\text{ cm}^2$.
   $8$ hats $= 8 \times 550 = \mathbf{4{,}400\text{ cm}^2}$.

6. $r = 3\text{ m}$, $h = 4\text{ m}$, so $l = \sqrt{9 + 16} = 5\text{ m}$.
   (a) $V = \frac{1}{3} \times 3.14 \times 9 \times 4 = 3.14 \times 12 = \mathbf{37.68\text{ m}^3}$.
   (b) $\text{Canvas} = \text{CSA} = 3.14 \times 3 \times 5 = \mathbf{47.1\text{ m}^2}$ (ground is not covered, so only CSA).

7. $462 = \frac{1}{3} \times \frac{22}{7} \times 49 \times h = \frac{1}{3} \times 154 \times h$.
   $1{,}386 = 154h \implies \mathbf{h = 9\text{ cm}}$.
   Check: $\frac{1}{3} \times 154 \times 9 = 462$ ✅

8. Cone $= \frac{1}{3}$ of cylinder, so $924 \div 3 = \mathbf{308\text{ cm}^3}$.

9. (a) **False** ❌. CSA is $\pi r\mathbf{l}$, using slant height, not vertical height.
   (b) **True** ✅. $l$ is the hypotenuse of the right triangle ($l^2 = r^2 + h^2$), so $l > h$.
   (c) **False** ❌. Volume contains $r^2$. Doubling $r$ makes $r^2$ four times larger, so the volume becomes **$4$ times** larger.
   (d) **True** ✅. Three cones of water fill one matching cylinder.

---

Next time you hold an ice-cream cone, you will know right away: the waffle cone's outer surface is $\pi r l$, and the space inside for ice cream is $\frac{1}{3}\pi r^2 h$. Well done!

**In the next topic:** Now we meet a solid with no corners, no edges, and no flat faces at all — pure smoothness from every angle: the **sphere** (like a football) and the **hemisphere** (half a sphere, like a soup bowl). Let us discover their surface area and volume formulas in Topic 6!
