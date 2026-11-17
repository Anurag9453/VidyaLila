# Chapter: Mensuration (Part 6)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [mensuration-part5.md](mensuration-part5.md).** (The chapter begins in [mensuration.md](mensuration.md).)
> **Topics covered in this file:**
> 6. Surface Area and Volume of Spheres and Hemispheres

---

# Topic 6: Surface Area and Volume of Spheres and Hemispheres

In Topic 5, Elena's birthday party introduced us to the cone: party hats with slant height $l$ and curved surface area $\pi r l$, plus the vendor's demonstration showing that three cones fill one matching cylinder, giving volume $\frac{1}{3}\pi r^2 h$. Before that, we explored cylinders, cubes, and cuboids. Now only one classic 3D shape remains — perhaps the most symmetrical of all: **completely round from every direction**, the **sphere**. Slice it cleanly in half through its centre, and you get a **hemisphere**.

---

## The Story of the Burst Football and the Repair Shop

Remember Elena from Topic 5? A week after her birthday, her leather football split open during a match in the park. She carried it down the street to the local **sports repair shop**.

The repairman turned the ball over in his hands and said, "We will need to replace the entire outer leather casing. First, let's measure **how much leather** that takes."

Elena asked, "And how much air goes inside once it's stitched?"

He chuckled. "That is a completely different calculation! The leather is all about the **outer surface** (surface area), while the air is about the **space inside** (volume)."

Back home at dinner, Elena noticed her dad serving hot soup in a deep **round bowl**. The bowl was perfectly round too — except it was only half a ball. "That's half a football!" she thought.

Elena's three questions give us the roadmap for this entire topic:
1. How much leather covers a **sphere**? *(Surface area)*
2. How much space fits inside a **sphere**? *(Volume)*
3. What changes when you cut it in half into a **hemisphere** (like a bowl)?

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Sphere** | A 3D solid whose every surface point lies at the same fixed distance from its centre | A football, marble, or globe |
| **Centre** | The exact middle point inside the sphere | The dead-centre point inside a football |
| **Radius ($r$)** | Distance from the centre to any point on the sphere's surface | A football with radius $10.5\text{ cm}$ |
| **Diameter ($d$)** | Distance straight through the centre from one side to the other ($d = 2r$) | A $21\text{ cm}$ football |
| **Hemisphere** | Exactly half of a sphere, sliced straight through its centre | A soup bowl or a building dome |
| **Curved Surface Area (CSA)** | Area of the curved rounded surface only | The curved inside or outside of an open bowl |
| **Total Surface Area (TSA)** | Curved surface plus the flat circular base | The entire outside of a solid half-ball |

---

## Part A: What Is a Sphere?

In the [Circles chapter](../circles/circles.md), we defined a circle as all points **in a flat plane** at a fixed distance from a fixed centre.

Now let that rule break free from flat paper into **all directions in 3D space** — up, down, left, right, forward, and back. Every point at distance $r$ from the centre forms the skin of a **perfectly round ball**: a **sphere**.

```
   Circle (2D, on flat paper)       Sphere (3D, in space)

          * * *                            .-"""-.
       *         *                       /         \
      *     O-----*  r                  |     O-----|  r
       *         *                       \         /
          * * *                            '-...-'
     just a flat boundary            a completely round 3D ball
```

Keep the distinction crisp:
- A **circle** is a flat 2D figure. It has **area**, not volume.
- A **sphere** is a 3D solid. It has both **surface area** and **volume**.

Notice too: a sphere has **no edges** and **no flat faces**, which is why a football rolls smoothly in any direction.

---

## Part B: Surface Area of a Sphere $= 4\pi r^2$

### The Orange Peel Experiment

Here is a fun experiment you can try in your kitchen:

1. Pick a round orange, slice it straight through the middle, and trace its circular rim **$4$ times** on a sheet of paper (each circle has the exact same radius $r$ as the orange).
2. Peel the orange carefully and tear the peel into small pieces.
3. Arrange the peel pieces neatly inside the $4$ traced circles without overlapping.
4. You will see that the orange peel **fills almost exactly $4$ full circles**!

```
   ( O )  ( O )  ( O )  ( O )      <- 4 circles, each of radius r
     |      |      |      |
    filled by the peel of 1 orange
```

One circle has area $\pi r^2$, so four circles have area $4 \times \pi r^2$:

$$\mathbf{\text{Surface Area of a Sphere} = 4\pi r^2}$$

*(A formal proof belongs to calculus in higher grades; for Class 9, the orange peel experiment gives a remarkably clear picture of why the factor of $4$ appears.)*

### Example 1: Surface Area of a Sphere with $r = 7\text{ cm}$

$$\text{SA} = 4\pi r^2 = 4 \times \frac{22}{7} \times 7 \times 7 = 4 \times 22 \times 7 = \mathbf{616\text{ cm}^2}$$

### Example 2: Leather Needed for Elena's Football

The football has **diameter $21\text{ cm}$**. First find the radius:
$$r = \frac{21}{2} = 10.5\text{ cm}$$

$$\begin{aligned}
\text{SA} &= 4 \times \frac{22}{7} \times \frac{21}{2} \times \frac{21}{2} \\
&= 4 \times \frac{22}{7} \times \frac{441}{4} \\
&= \frac{22}{7} \times 441 = 22 \times 63 = \mathbf{1{,}386\text{ cm}^2}
\end{aligned}$$

So the repair shop needs at least **$1{,}386\text{ cm}^2$** of leather (plus a little extra for stitching seams).

**Check:** $4 \times 3.14 \times 10.5 \times 10.5 = 4 \times 3.14 \times 110.25 \approx 1{,}384.7\text{ cm}^2$. Using $\pi = \frac{22}{7}$ gave $1{,}386$ — both agree closely ✅

### Example 3: Finding Radius from Surface Area

A sphere has surface area **$154\text{ cm}^2$**. Find its radius.

$$4 \times \frac{22}{7} \times r^2 = 154 \implies \frac{88}{7} r^2 = 154$$
$$r^2 = \frac{154 \times 7}{88} = \frac{1{,}078}{88} = 12.25 \implies \mathbf{r = 3.5\text{ cm}}$$

**Check:** $4 \times \frac{22}{7} \times 3.5 \times 3.5 = 4 \times 22 \times 0.5 \times 3.5 = 154$ ✅

---

## Part C: Volume of a Sphere $= \frac{4}{3}\pi r^3$

### Archimedes' Favourite Discovery

More than two thousand years ago, the great Greek mathematician **Archimedes** made a discovery he loved so much that he asked for a diagram of it to be carved onto his tombstone.

Take a sphere of radius $r$ and place it inside the tightest possible cylinder that just encloses it:
- Cylinder radius $= r$
- Cylinder height $= 2r$ (matching the full height/diameter of the sphere)

```
     ___________
    |  .-"""-.  |
    | /       \ |
    ||    O    ||   height = 2r
    | \       / |
    |  '-...-'  |
    |___________|
       radius r
```

From Topic 4, the cylinder's volume is $\pi r^2 \times h = \pi r^2 \times 2r = \mathbf{2\pi r^3}$.

Archimedes proved that the sphere fills **exactly $\frac{2}{3}$** of this enclosing cylinder:

$$\text{Volume of sphere} = \frac{2}{3} \times 2\pi r^3 = \mathbf{\frac{4}{3}\pi r^3}$$

$$\mathbf{\text{Volume of a Sphere} = \frac{4}{3}\pi r^3}$$

*(Again, the rigorous proof comes later; you can verify it experimentally by submerging a sphere in a cylinder filled to the brim with water and measuring the overflow.)*

### Another Neat Pattern: $1 : 2 : 3$

From Topic 5, a cone of radius $r$ and height $2r$ has volume $\frac{1}{3}\pi r^2 (2r) = \frac{2}{3}\pi r^3$. Compare all three shapes fitting inside the same $r$-by-$2r$ space:

| Shape (radius $r$, height $2r$) | Volume |
|---|---|
| Cone | $\frac{1}{3}\pi r^2 \times 2r = \frac{2}{3}\pi r^3$ |
| Sphere | $\frac{4}{3}\pi r^3$ |
| Cylinder | $2\pi r^3 = \frac{6}{3}\pi r^3$ |

So **$\text{Cone} : \text{Sphere} : \text{Cylinder} = 2 : 4 : 6 = 1 : 2 : 3$**. One cone plus one sphere together fill the cylinder completely!

And another surprise: the curved surface area of that cylinder is $2\pi r \times 2r = \mathbf{4\pi r^2}$ — **identical** to the surface area of the sphere inside it! Archimedes proved that too.

### Example 4: Volume of a Sphere with $r = 7\text{ cm}$

$$\begin{aligned}
V &= \frac{4}{3} \times \frac{22}{7} \times 7 \times 7 \times 7 \\
&= \frac{4}{3} \times 22 \times 49 \\
&= \frac{4 \times 1{,}078}{3} = \frac{4{,}312}{3} = \mathbf{1{,}437\frac{1}{3}\text{ cm}^3} \quad (\approx 1{,}437.33\text{ cm}^3)
\end{aligned}$$

### Example 5: Air Inside Elena's Football

Here $r = \frac{21}{2}\text{ cm}$.

$$V = \frac{4}{3} \times \frac{22}{7} \times \left(\frac{21}{2}\right)^3 = \frac{4}{3} \times \frac{22}{7} \times \frac{9{,}261}{8}$$

Simplify step by step: $9{,}261 \div 7 = 1{,}323$, and $1{,}323 \div 3 = 441$.
$$V = \frac{4 \times 22 \times 441}{8} = \frac{22 \times 441}{2} = 11 \times 441 = \mathbf{4{,}851\text{ cm}^3}$$

Since $1{,}000\text{ cm}^3 = 1\text{ litre}$, the football holds about **$4.85\text{ litres}$** of air.

### Example 6: Finding Radius from Volume

A solid sphere has volume **$38{,}808\text{ cm}^3$**. Find its radius.

$$\frac{4}{3} \times \frac{22}{7} \times r^3 = 38{,}808 \implies \frac{88}{21}r^3 = 38{,}808$$
$$r^3 = \frac{38{,}808 \times 21}{88}$$
Since $38{,}808 \div 88 = 441$, we get $r^3 = 441 \times 21 = 9{,}261$.
$$r = \sqrt[3]{9{,}261} = \mathbf{21\text{ cm}} \qquad (\text{since } 21 \times 21 \times 21 = 9{,}261)$$

**Check:** $\frac{4}{3} \times \frac{22}{7} \times 9{,}261 = 4 \times 22 \times 441 = 38{,}808$ ✅

---

## Part D: What Happens When the Radius Changes?

In Topic 3, doubling a cube's side multiplied its area by $4$ and its volume by $8$. The exact same scaling happens for spheres:

- Surface area contains $r$ **twice** ($r^2$).
- Volume contains $r$ **three times** ($r^3$).

So if the radius is **doubled ($2\times$)**:
- Surface area becomes **$2 \times 2 = 4$ times** larger.
- Volume becomes **$2 \times 2 \times 2 = 8$ times** larger.

### Example 7: Comparing $r = 7\text{ cm}$ and $r = 14\text{ cm}$

| | $r = 7\text{ cm}$ | $r = 14\text{ cm}$ | Factor |
|---|---|---|---|
| Surface area | $616\text{ cm}^2$ | $4 \times \frac{22}{7} \times 196 = 2{,}464\text{ cm}^2$ | $2{,}464 \div 616 = \mathbf{4}$ |
| Volume | $\frac{4{,}312}{3}\text{ cm}^3$ | $\frac{4}{3} \times \frac{22}{7} \times 2{,}744 = \frac{34{,}496}{3}\text{ cm}^3$ | $34{,}496 \div 4{,}312 = \mathbf{8}$ |

### Example 8: Inflating a Balloon

A spherical balloon is inflated so its radius grows from **$7\text{ cm}$** to **$14\text{ cm}$**. Find the ratio of its initial surface area to its final surface area.

$$\text{Ratio} = 4\pi(7)^2 : 4\pi(14)^2 = 49 : 196 = \mathbf{1 : 4}$$

Notice how $4\pi$ cancels on both sides, leaving just the ratio of the squared radii: $(7/14)^2 = 1/4$.

---

## Part E: Hemisphere (Half a Sphere)

Remember the soup bowl? Slice a sphere straight **through its centre** into two equal halves; each half is a **hemisphere**.

```
        .-"""-.
      /         \       <- curved surface
     |___________|      <- flat circular face, radius r
```

Look closely — a solid hemisphere has **two distinct surfaces**:
1. **Curved surface:** half of the sphere's outer skin $= \frac{1}{2} \times 4\pi r^2 = \mathbf{2\pi r^2}$.
2. **Flat circular base:** one circle of area $= \mathbf{\pi r^2}$.

### Formulas for a Hemisphere

| Quantity | Formula | Why |
|---|---|---|
| Curved Surface Area (CSA) | **$2\pi r^2$** | Half of the sphere's surface area |
| Total Surface Area (TSA) | **$3\pi r^2$** | $2\pi r^2$ (curved) $+$ $\pi r^2$ (flat circle) |
| Volume | **$\frac{2}{3}\pi r^3$** | Half of the sphere's volume |

### Open Bowl vs. Solid Half-Ball

- **Open hemispherical bowl or dome:** The circular top is open, so there is no flat face. Use only **$\text{CSA} = 2\pi r^2$**.
- **Solid hemisphere:** Like half of a solid rubber ball cut cleanly through the middle. It has both the curved dome and the flat circular cut face, so **$\text{TSA} = 3\pi r^2$**.

### Example 9: Solid Hemisphere, $r = 7\text{ cm}$

- $\text{CSA} = 2 \times \frac{22}{7} \times 49 = 2 \times 154 = \mathbf{308\text{ cm}^2}$
- $\text{TSA} = 3 \times \frac{22}{7} \times 49 = 3 \times 154 = \mathbf{462\text{ cm}^2}$
- $\text{Volume} = \frac{2}{3} \times \frac{22}{7} \times 343 = \frac{2}{3} \times 1{,}078 = \frac{2{,}156}{3} = \mathbf{718\frac{2}{3}\text{ cm}^3}$

**Check:** The volume must be half of Example 4's sphere ($\frac{4{,}312}{3}$): $\frac{4{,}312}{3} \div 2 = \frac{2{,}156}{3}$ ✅

### Example 10: Soup Bowl Capacity

A hemispherical soup bowl has radius **$10.5\text{ cm}$**. How many litres of soup can it hold?

$$V = \frac{2}{3} \times \frac{22}{7} \times \left(\frac{21}{2}\right)^3 = \frac{2}{3} \times \frac{22}{7} \times \frac{9{,}261}{8}$$
Since $9{,}261 \div 21 = 441$:
$$V = \frac{2 \times 22 \times 441}{8} = \frac{19{,}404}{8} = \mathbf{2{,}425.5\text{ cm}^3}$$

Since $1{,}000\text{ cm}^3 = 1\text{ litre}$, the bowl holds **$2.4255\text{ litres}$** (about $2.43\text{ litres}$).

**Check:** Example 5's football ($r = 10.5\text{ cm}$) had volume $4{,}851\text{ cm}^3$, and half of that is $2{,}425.5$ ✅

### Example 11: Cost of Tin-Plating a Bowl

A brass hemispherical bowl has an **inner diameter of $10.5\text{ cm}$**. Find the cost of tin-plating its inside surface at **$\$16$ per $100\text{ cm}^2$**.

Radius $= \frac{10.5}{2} = 5.25\text{ cm} = \frac{21}{4}\text{ cm}$.

Because the bowl is open, we need only its CSA:
$$\begin{aligned}
\text{CSA} &= 2 \times \frac{22}{7} \times \frac{21}{4} \times \frac{21}{4} \\
&= 2 \times \frac{22}{7} \times \frac{441}{16} \\
&= \frac{44 \times 63}{16} = \frac{2{,}772}{16} = \mathbf{173.25\text{ cm}^2}
\end{aligned}$$

$$\text{Cost} = 173.25 \times \frac{\$16}{100} = \mathbf{\$27.72}$$

---

## Part F: Melting and Recasting (Volume Stays Constant)

When a solid metal object is melted down and recast into a different shape, the **amount of metal stays the same**. That means **volume does not change** — only the shape changes!

### Example 12: Sphere Melted into a Cylinder

A solid metal sphere of radius **$3\text{ cm}$** is melted and recast into a cylinder of radius **$2\text{ cm}$**. Find the height of the cylinder.

Volume of sphere $= \frac{4}{3}\pi \times 3^3 = \frac{4}{3}\pi \times 27 = \mathbf{36\pi\text{ cm}^3}$.

Volume of cylinder $= \pi \times 2^2 \times h = \mathbf{4\pi h}$.

Set them equal:
$$4\pi h = 36\pi \implies \mathbf{h = 9\text{ cm}}$$

Notice $\pi$ cancelled out on both sides — we did not even need $\frac{22}{7}$!

### Example 13: Sphere Drawn into a Wire

That same sphere ($36\pi\text{ cm}^3$) is drawn out into a thin cylindrical wire of radius **$0.1\text{ cm}$**. How long is the wire?

A wire is simply a very long, thin cylinder:
$$\pi \times (0.1)^2 \times h = 36\pi$$
$$0.01 \times h = 36 \implies \mathbf{h = 3{,}600\text{ cm} = 36\text{ m}}$$

A single small sphere stretches into a $36\text{-metre}$ wire!

---

## Common Pitfalls to Avoid

1. **Mistake 1: Mixing up the surface area and volume formulas.**
   Surface area $= 4\pi r^2$ ($r$ **squared**, units $\text{cm}^2$). Volume $= \frac{4}{3}\pi r^3$ ($r$ **cubed**, units $\text{cm}^3$). Trick: **power $2$ for surface, power $3$ for space**.

2. **Mistake 2: Using diameter instead of radius.**
   In "football of diameter $21\text{ cm}$", $r = \mathbf{10.5\text{ cm}}$, not $21$. Using $r = 21$ makes the surface area $4$ times too big and the volume $8$ times too big.

3. **Mistake 3: Forgetting the flat circular base in a solid hemisphere's TSA.**
   A solid hemisphere has $\text{TSA} = 2\pi r^2 + \pi r^2 = \mathbf{3\pi r^2}$, not $2\pi r^2$. However, for an **open bowl**, use only $2\pi r^2$. Read carefully to check whether it is open or solid.

4. **Mistake 4: Thinking a hemisphere's CSA is $\pi r^2$.**
   The curved dome is half of a sphere: $\frac{1}{2} \times 4\pi r^2 = \mathbf{2\pi r^2}$. $\pi r^2$ is only the flat circular base.

5. **Mistake 5: Writing wrong units.**
   Surface area uses **$\text{cm}^2$** or **$\text{m}^2$**; volume uses **$\text{cm}^3$** or **$\text{m}^3$**. Convert to litres using **$1{,}000\text{ cm}^3 = 1\text{ litre}$**.

6. **Mistake 6: Thinking doubling the radius doubles the volume.**
   Doubling the radius makes the surface area **$4$ times** larger and the volume **$8$ times** larger, because volume contains $r^3$.

7. **Mistake 7: Equating surface areas when melting and recasting.**
   When metal is melted and reshaped, **volume** stays constant, not surface area!

---

## Quick Recap

- **Sphere:** every point on the surface is at distance $r$ from the centre; 3D solid with no edges and no flat faces.
- **Surface area of a sphere $= 4\pi r^2$** (peel of an orange fills $4$ circles of the same radius).
- **Volume of a sphere $= \frac{4}{3}\pi r^3$** (fills $\frac{2}{3}$ of its tightest enclosing cylinder).
- **$\text{Cone} : \text{Sphere} : \text{Cylinder} = 1 : 2 : 3$** (for radius $r$ and height $2r$).
- **Hemisphere:** $\text{CSA} = 2\pi r^2$, $\text{TSA (solid)} = 3\pi r^2$, $\text{Volume} = \frac{2}{3}\pi r^3$.
- Use **CSA** for an open bowl or dome, and **TSA** for a solid hemisphere.
- Doubling the radius multiplies surface area by $4$ and volume by $8$.
- Melting and recasting preserves **volume**.
- If given diameter, **halve it to find radius first**.

---

## Practice Questions

Use $\pi = \frac{22}{7}$ unless stated otherwise.

1. Find the surface area and the volume of a sphere of radius $3.5\text{ cm}$.

2. Find the surface area of a sphere of diameter $28\text{ cm}$.

3. A hemispherical bowl has radius $3.5\text{ cm}$. How much water (in $\text{mL}$) can it hold?

4. Find the total surface area of a solid hemisphere of radius $21\text{ cm}$.

5. The radius of a sphere is halved. What happens to (a) its surface area, and (b) its volume?

6. The surface area of a sphere is $616\text{ cm}^2$. Find its radius and its volume.

7. A solid metal sphere of radius $6\text{ cm}$ is melted and recast into a cylinder of radius $4\text{ cm}$. Find the height of the cylinder.

8. The inside of a hemispherical dome of radius $7\text{ m}$ is to be painted at $\$20$ per $\text{m}^2$. Find the cost.

9. State whether each statement is true or false.
   (a) The volume of a hemisphere is half the volume of a sphere of the same radius.
   (b) The total surface area of a solid hemisphere is $2\pi r^2$.
   (c) If the radius of a sphere is doubled, its volume is doubled.
   (d) A sphere has no edges and no flat faces.

### Answers

1. $r = 3.5 = \frac{7}{2}\text{ cm}$.
   $\text{SA} = 4 \times \frac{22}{7} \times \left(\frac{7}{2}\right)^2 = 4 \times \frac{22}{7} \times \frac{49}{4} = 22 \times 7 = \mathbf{154\text{ cm}^2}$.
   $V = \frac{4}{3} \times \frac{22}{7} \times \frac{343}{8} = \frac{4 \times 22 \times 49}{24} = \frac{4{,}312}{24} = \mathbf{\frac{539}{3}\text{ cm}^3 \approx 179.67\text{ cm}^3}$.

2. $d = 28 \implies r = 14\text{ cm}$.
   $\text{SA} = 4 \times \frac{22}{7} \times 196 = 4 \times 22 \times 28 = \mathbf{2{,}464\text{ cm}^2}$.

3. $V = \frac{2}{3} \times \frac{22}{7} \times \frac{343}{8} = \frac{2 \times 22 \times 49}{24} = \frac{2{,}156}{24} = \mathbf{\frac{539}{6}\text{ cm}^3 \approx 89.83\text{ cm}^3}$.
   Since $1\text{ cm}^3 = 1\text{ mL}$, the bowl holds about **$89.83\text{ mL}$** of water.

4. Solid hemisphere $\implies \text{TSA} = 3\pi r^2 = 3 \times \frac{22}{7} \times 441 = 3 \times 1{,}386 = \mathbf{4{,}158\text{ cm}^2}$.

5. Halving the radius replaces $r$ with $\frac{r}{2}$.
   (a) Surface area has $r^2$, so $\left(\frac{1}{2}\right)^2 = \frac{1}{4}$. The surface area becomes **one-quarter ($\frac{1}{4}$)** of the original.
   (b) Volume has $r^3$, so $\left(\frac{1}{2}\right)^3 = \frac{1}{8}$. The volume becomes **one-eighth ($\frac{1}{8}$)** of the original.

6. $4 \times \frac{22}{7} \times r^2 = 616 \implies r^2 = \frac{616 \times 7}{88} = 49 \implies \mathbf{r = 7\text{ cm}}$.
   $V = \frac{4}{3} \times \frac{22}{7} \times 343 = \mathbf{\frac{4{,}312}{3}\text{ cm}^3 = 1{,}437\frac{1}{3}\text{ cm}^3}$.

7. Volume of sphere $= \frac{4}{3}\pi \times 6^3 = \frac{4}{3}\pi \times 216 = 288\pi\text{ cm}^3$.
   Cylinder: $\pi \times 4^2 \times h = 16\pi h$.
   $16\pi h = 288\pi \implies \mathbf{h = 18\text{ cm}}$.

8. The inside of the dome is open, so use CSA only:
   $\text{CSA} = 2 \times \frac{22}{7} \times 49 = 308\text{ m}^2$.
   $\text{Cost} = 308 \times \$20 = \mathbf{\$6{,}160}$.

9. (a) **True** ✅. $\frac{2}{3}\pi r^3 = \frac{1}{2} \times \frac{4}{3}\pi r^3$.
   (b) **False** ❌. TSA of a solid hemisphere $= 2\pi r^2 + \pi r^2 = 3\pi r^2$.
   (c) **False** ❌. Volume becomes $2 \times 2 \times 2 = \mathbf{8\text{ times}}$ larger.
   (d) **True** ✅. A sphere is smoothly curved everywhere.

---

Whenever the sphere and hemisphere formulas feel heavy to carry around, just keep Elena's two questions in mind: **"how much leather on the outside?"** means surface area (power $2$), and **"how much air inside?"** means volume (power $3$). You have got this!

**What comes next?** So far, circles have only shown up as the bases of 3D solids. In the next topic, we examine **flat circles up close**: the circular paved walkway around a village well (a ring), half and quarter circles, fan-shaped sectors, and combined shaded shapes!
