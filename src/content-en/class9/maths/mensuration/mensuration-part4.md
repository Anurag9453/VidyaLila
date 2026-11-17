# Chapter: Mensuration (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [mensuration-part3.md](mensuration-part3.md).** (The chapter begins in [mensuration.md](mensuration.md).) For circle terms (radius, diameter, circumference), see the [Circles chapter](../circles/circles.md).
> **Topics covered in this file:**
> 4. Surface Area and Volume of Right Circular Cylinders

---

# Topic 4: Surface Area and Volume of Right Circular Cylinders

In Topic 3, we calculated the surface area and volume of box-shaped solids — **cubes and cuboids** — like Sophia's $20\text{ cm} \times 10\text{ cm} \times 5\text{ cm}$ gift box ($700\text{ cm}^2$ of paper, $500$ chocolates). We learned to separate the four walls (lateral surface area) from the total surface area, and remembered that **$1\text{ litre} = 1{,}000\text{ cm}^3$** and **$1\text{ m}^3 = 1{,}000\text{ litres}$**.

Not everything in everyday life is box-shaped, though. A drinking glass, a tin can, a water pipe, and a cylindrical water storage tank are all **round**. In this topic, we study the **cylinder**. Best of all, one key idea from Topic 3 carries straight over: **$\text{volume} = \text{base area} \times \text{height}$.**

---

## The Story of the Tin Can Label

Liam's family runs a neighbourhood grocery shop that sells canned soups and vegetables, and also collects empty **tin cans** for a local tin can recycling project. One day, a printer arrived to quote for new paper labels and asked, "How much paper does one label need?"

Liam picked up a tin can and thought carefully. The label wraps completely **around the curved side** of the can, leaving the flat circular top and bottom lids uncovered.

He carefully peeled the label off an empty can, slit it straight down the seam, and laid it flat on the counter. To his surprise, the curved wrapper unfolded into a plain **rectangle**!

- The **width** of the rectangle $=$ the **height** of the tin can.
- The **length** of the rectangle $=$ one full wrap around the can, which is the **circumference** of the circular lid.

Finding the area of the label was now trivial: $\text{length} \times \text{width}$.

That single insight unlocks this whole topic: **unroll the curved wall of a cylinder, and you get a rectangle.**

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Right circular cylinder** | A solid (or hollow tube) with two equal, parallel circular bases and a curved side perpendicular to them | A glass, tin can, or pipe |
| **Base** | The flat circular bottom (or top) of the cylinder | The lid of a tin can |
| **Radius ($r$)** | Distance from the centre of a circular base to its edge | $7\text{ cm}$ |
| **Height ($h$)** | Perpendicular distance between the two circular bases | $10\text{ cm}$ |
| **Axis** | The straight line joining the centres of the two bases | A skewer running straight down the middle of the can |
| **Curved Surface Area (CSA)** | Area of the curved side wall only (the label part) | $2\pi r h$ |
| **Total Surface Area (TSA)** | Curved wall plus both circular ends (top and bottom) | $2\pi r(r + h)$ |
| **Volume** | The space enclosed inside the cylinder | $\pi r^2 h$ |
| **Hollow cylinder** | A cylinder that is empty down the middle, like a tube | A water pipe |

---

## Part A: Two Essential Circle Formulas

Both ends of a cylinder are **circles**. We covered circle terminology in the [Circles chapter](../circles/circles.md); here are the two formulas we need right now:

| Quantity | Formula | Meaning |
|---|---|---|
| **Circumference** (distance around the edge) | **$2\pi r$** | One complete loop around the circle |
| **Area** (surface inside) | **$\pi r^2$** | Space enclosed inside the circle |

### Why Do We Often Take $\pi = \frac{22}{7}$?

$\pi$ is an irrational number ($3.14159\dots$) whose decimal expansion never ends. In school problems we usually use the convenient approximation **$\pi = \frac{22}{7}$**, which has a lovely arithmetic perk:

> Whenever the radius is a **multiple of $7$** (such as $7, 14, 3.5, 0.7, 21\dots$), the **$7$ in $\frac{22}{7}$ cancels out cleanly**, giving exact, tidy numbers.

For instance, when $r = 7\text{ cm}$:
- $\text{Circumference} = 2 \times \frac{22}{7} \times 7 = \mathbf{44\text{ cm}}$
- $\text{Area} = \frac{22}{7} \times 7 \times 7 = \mathbf{154\text{ cm}^2}$

That is why textbooks so often pick radii like $7, 14,$ or $3.5$. Whenever a problem explicitly states $\pi = 3.14$, use $3.14$ instead.

---

## Part B: What Is a Cylinder?

A **right circular cylinder** is a 3D shape with:
1. **Two bases** that are congruent (identical) circles, one directly above the other.
2. **One base directly aligned over the other**.
3. An **axis** (joining the two centres) that stands **perpendicular ($90^\circ$)** to the bases — that is what the word *"right"* means.

```
          _________
        /           \
       |      •------|---- r (radius)
        \___________/
       |             |
       |             |
       |      |      |   h (height)
       |      | axis |
       |      |      |
        \___________/
```

If the axis leans sideways (like a slanted stack of coins), it is no longer a *right* cylinder. In this topic, every cylinder we study is a right circular cylinder, which we will simply call a "cylinder".

### Cylinders in Everyday Life

- A drinking glass or stainless-steel tumbler
- A tin can of soup or paint
- A cylindrical water storage tank or gas canister
- The drum of a road roller
- A water pipe, an unsharpened round pencil, or a pillar candle

---

## Part C: Curved Surface Area (CSA)

Recall Liam's tin can label. Slice the curved wall straight down its height and unroll it flat:

```
   Wrapped label              Unrolled label (rectangle)

      _______                 +---------------------------+
     /       \                |                           |
    |  LABEL  |      ===>     |          LABEL            |  h
    |         |               |                           |
     \_______/                +---------------------------+
                                     2πr (one full circle)
```

- Length of the rectangle $=$ circumference of the base $= \mathbf{2\pi r}$
- Width of the rectangle $=$ height of the cylinder $= \mathbf{h}$

Since the area of a rectangle is $\text{length} \times \text{width}$:

$$\mathbf{\text{CSA} = 2\pi r h}$$

This is also called the **lateral surface area** — the exact same idea as the four walls of a cuboid in Topic 3, except here the wall curves smoothly around.

### Example 1: Tin Can Label

A tin can has radius **$3.5\text{ cm}$** and height **$10\text{ cm}$**. How much paper is needed for its label?

The label covers only the curved side wall, so we need the CSA:

$$\text{CSA} = 2\pi r h = 2 \times \frac{22}{7} \times 3.5 \times 10$$

- $\frac{22}{7} \times 3.5 = 11$
- $2 \times 11 \times 10 = \mathbf{220\text{ cm}^2}$

**Check:** $\text{Circumference} = 2 \times \frac{22}{7} \times 3.5 = 22\text{ cm}$. The label is a $22\text{ cm} \times 10\text{ cm}$ rectangle $= 220\text{ cm}^2$ ✅

---

## Part D: Total Surface Area (TSA)

If you want to paint the **entire outside** of a closed tin can, you must paint the curved wall **plus both the top and bottom circular lids**.

$$\text{TSA} = \text{CSA} + 2 \times (\text{area of one circle}) = 2\pi r h + 2\pi r^2$$

Notice **$2\pi r$** is a common factor (just like in our Factorisation chapter!):

$$\mathbf{\text{TSA} = 2\pi r(r + h)}$$

### Example 2: Cylinder with $r = 7\text{ cm}, h = 10\text{ cm}$

- **$\text{CSA}$** $= 2 \times \frac{22}{7} \times 7 \times 10 = 2 \times 22 \times 10 = \mathbf{440\text{ cm}^2}$
- **Area of one circle** $= \frac{22}{7} \times 7 \times 7 = \mathbf{154\text{ cm}^2}$
- **$\text{TSA}$** $= 440 + 2 \times 154 = 440 + 308 = \mathbf{748\text{ cm}^2}$

**Check using the factored formula:** $2\pi r(r + h) = 2 \times \frac{22}{7} \times 7 \times (7 + 10) = 44 \times 17 = \mathbf{748\text{ cm}^2}$ ✅

---

## Part E: Volume

In Topic 3, we understood a cuboid's volume as one flat layer of cubes ($l \times b$) stacked $h$ layers high — that is, **$\text{base area} \times \text{height}$.**

A cylinder works the exact same way. Imagine a **tall stack of identical circular coins**. Each thin coin is a circular disc:
- Area of each layer (coin) $=$ area of the circular base $= \mathbf{\pi r^2}$
- Total height of the stack $= \mathbf{h}$

$$\mathbf{\text{Volume} = \text{base area} \times \text{height} = \pi r^2 h}$$

### Example 3: Same Cylinder ($r = 7\text{ cm}, h = 10\text{ cm}$)

$$\text{Volume} = \frac{22}{7} \times 7 \times 7 \times 10 = 154 \times 10 = \mathbf{1{,}540\text{ cm}^3}$$

In litres: $1{,}540 \div 1{,}000 = \mathbf{1.54\text{ litres}}$ (since $1\text{ L} = 1{,}000\text{ cm}^3$, from Topic 3).

---

## Part F: Solved Examples

### Example 4: How Much Ground Does a Road Roller Flatten?

The cylindrical drum of a road roller has **diameter $1.4\text{ m}$** and **length $2\text{ m}$**. How much ground area does it level in **$500$ complete revolutions**?

**Think:** In one full revolution, the **entire curved surface** of the drum presses the ground once. So $1\text{ revolution} = 1\text{ CSA}$.

- $r = 1.4 \div 2 = \mathbf{0.7\text{ m}}$, $h$ (the length of the drum) $= \mathbf{2\text{ m}}$
- $1\text{ revolution} = \text{CSA} = 2 \times \frac{22}{7} \times 0.7 \times 2 = 2 \times 2.2 \times 2 = \mathbf{8.8\text{ m}^2}$
- $500\text{ revolutions} = 8.8 \times 500 = \mathbf{4{,}400\text{ m}^2}$

Notice the cylinder here is lying on its side, so its **length** plays the role of $h$.

### Example 5: Water in a Drinking Glass

A stainless-steel tumbler has an inner radius of **$3.5\text{ cm}$** and height **$14\text{ cm}$**. How much water can it hold?

$$\text{Volume} = \frac{22}{7} \times 3.5 \times 3.5 \times 14$$
- $\frac{22}{7} \times 14 = 44$
- $44 \times 3.5 \times 3.5 = 44 \times 12.25 = \mathbf{539\text{ cm}^3}$

In litres: $539 \div 1{,}000 = \mathbf{0.539\text{ litres}}$ (just over half a litre).

### Example 6: Capacity of a Cylindrical Water Tank

A cylindrical water storage tank has **diameter $2.8\text{ m}$** and **height $5\text{ m}$**. How many litres of water can it store?

- $r = 1.4\text{ m}$
- $\text{Volume} = \frac{22}{7} \times 1.4 \times 1.4 \times 5 = 22 \times 0.2 \times 1.4 \times 5 = \mathbf{30.8\text{ m}^3}$
- In litres: $30.8 \times 1{,}000 = \mathbf{30{,}800\text{ litres}}$

**Check:** $\frac{22}{7} \times 1.4 = 4.4$, then $4.4 \times 1.4 = 6.16$, then $6.16 \times 5 = 30.8$ ✅

### Example 7: Cost of Painting a Pillar

A cylindrical pillar has **diameter $70\text{ cm}$** and **height $4\text{ m}$**. Find the cost of painting its curved surface at **$\$25$ per $\text{m}^2$**.

**Think:** Neither the bottom (resting on the floor) nor the top (supporting the ceiling) is painted — only the **CSA**.

- Convert units first: $r = 70 \div 2 = 35\text{ cm} = \mathbf{0.35\text{ m}}$
- $\text{CSA} = 2 \times \frac{22}{7} \times 0.35 \times 4 = 2 \times 1.1 \times 4 = \mathbf{8.8\text{ m}^2}$
- $\text{Cost} = 8.8 \times \$25 = \mathbf{\$220}$

### Example 8: Open Container vs. Closed Container

A cylindrical container has radius **$7\text{ cm}$** and height **$20\text{ cm}$**. How much metal sheet is needed to build it if:
(a) the container is **open at the top**
(b) the container is **closed at both ends**

- $\text{CSA} = 2 \times \frac{22}{7} \times 7 \times 20 = \mathbf{880\text{ cm}^2}$
- One circular base $= \frac{22}{7} \times 7 \times 7 = \mathbf{154\text{ cm}^2}$

(a) Open container: curved wall $+$ **bottom circle only**:
$$\text{Sheet} = 880 + 154 = \mathbf{1{,}034\text{ cm}^2}$$

(b) Closed container: curved wall $+$ **both circles**:
$$\text{Sheet} = 880 + 2 \times 154 = \mathbf{1{,}188\text{ cm}^2}$$

**Check for (b):** $2\pi r(r + h) = 44 \times 27 = 1{,}188$ ✅

### Example 9: Finding Height from Volume

A cylinder has volume **$3{,}080\text{ cm}^3$** and radius **$7\text{ cm}$**. Find its height.

- $\text{Base area} = \frac{22}{7} \times 7 \times 7 = \mathbf{154\text{ cm}^2}$
- $\text{Volume} = \text{base area} \times h \implies 3{,}080 = 154 \times h$
- $h = 3{,}080 \div 154 = \mathbf{20\text{ cm}}$

**Check:** $154 \times 20 = 3{,}080$ ✅

---

## Part G: A Quick Look at Hollow Cylinders (Pipes)

A water pipe is **hollow** down the centre, so it has two radii:
- **Outer radius $R$**
- **Inner radius $r$**

```
         outer circle (R)
          _________
        /  _______  \
       |  /       \  |
       | |  hollow | |   <- metal wall = space between the two circles
       |  \_______/  |
        \___________/
         inner circle (r)
```

To find the **volume of metal** used in the pipe, subtract the hollow inner cylinder from the full outer cylinder:

$$\mathbf{\text{Volume of metal} = \pi R^2 h - \pi r^2 h = \pi(R^2 - r^2)h}$$

### Example 10

A metal pipe is **$1\text{ m}$ ($100\text{ cm}$)** long. Its outer radius is **$3.5\text{ cm}$** and its inner radius is **$2.8\text{ cm}$**. Find the volume of metal in the pipe.

- $R^2 - r^2 = 12.25 - 7.84 = \mathbf{4.41}$
- $\pi(R^2 - r^2) = \frac{22}{7} \times 4.41 = \mathbf{13.86}$
- $\text{Volume} = 13.86 \times 100 = \mathbf{1{,}386\text{ cm}^3}$

We will leave the inner and outer surface areas of hollow cylinders for later — for now, remember the simple rule: **outer minus inner**.

---

## All Formulas in One Place

| Quantity | Formula | When to use |
|---|---|---|
| Curved Surface Area (CSA) | **$2\pi r h$** | Labels, painting pillars, one turn of a road roller |
| Total Surface Area (closed) | **$2\pi r(r + h)$** | Closed cans, painting the entire outside |
| Open container (one base) | **$2\pi r h + \pi r^2$** | Glasses, buckets, open-top cylindrical tanks |
| Volume | **$\pi r^2 h$** | Water, oil, or grain capacity |
| Metal in a hollow pipe | **$\pi(R^2 - r^2)h$** | Volume of material in a cylindrical pipe |

---

## Common Pitfalls to Avoid

1. **Mistake 1: Using diameter instead of radius.**
   If a problem says "diameter $14\text{ cm}$", then **$r = 7\text{ cm}$**, not $14$. Make halving the diameter your automatic first step.

2. **Mistake 2: Mixing up CSA and TSA.**
   Paper labels, pillar painting, and road roller tracks use **CSA**. Wrapping a fully closed can uses **TSA**. Always picture which surfaces are actually touched before choosing a formula.

3. **Mistake 3: Counting two lids for an open container.**
   A glass or bucket is open at the top — it has only **one** circular base. Using $2\pi r(r + h)$ mistakenly adds a nonexistent lid.

4. **Mistake 4: Mixing units.**
   If radius is in $\text{cm}$ and height is in $\text{m}$, convert **both to the same unit** first (as in Example 7, where $70\text{ cm}$ became $r = 0.35\text{ m}$).

5. **Mistake 5: Treating $\text{cm}^3$ as litres directly.**
   $1{,}540\text{ cm}^3$ is **$1.54\text{ litres}$**, not $1{,}540\text{ litres}$. Remember: $1{,}000\text{ cm}^3 = 1\text{ litre}$, and $1\text{ m}^3 = 1{,}000\text{ litres}$.

6. **Mistake 6: Writing $\text{cm}^3$ for area or $\text{cm}^2$ for volume.**
   Areas (CSA, TSA) are always in **$\text{cm}^2$** or **$\text{m}^2$**; volume is always in **$\text{cm}^3$** or **$\text{m}^3$**. Checking the unit catches formula mix-ups immediately.

7. **Mistake 7: Confusing the length of a lying cylinder with its radius.**
   When a road roller or pipe lies horizontally, its **length is $h$**. Its radius is measured across the circular end.

---

## Quick Recap

- A **right circular cylinder** has two congruent circular bases with its axis perpendicular to them.
- Unrolling the curved wall creates a **rectangle** of length $2\pi r$ and width $h$.
- **$\text{CSA} = 2\pi r h$** (curved wall only).
- **$\text{TSA} = 2\pi r(r + h)$** (curved wall $+$ both circular ends).
- **Open cylinder** $= 2\pi r h + \pi r^2$ (one circular base only).
- **$\text{Volume} = \pi r^2 h$** ($\text{base area} \times \text{height}$, matching the cuboid idea).
- **Hollow cylinder metal volume** $= \pi(R^2 - r^2)h$.
- Using **$\pi = \frac{22}{7}$** gives clean numbers whenever $r$ is a multiple of $7$.
- Key conversions: $1{,}000\text{ cm}^3 = 1\text{ L}$, $1\text{ m}^3 = 1{,}000\text{ L}$.

---

## Practice Questions

1. A cylinder has radius $14\text{ cm}$ and height $20\text{ cm}$. Find its (a) curved surface area, (b) total surface area, and (c) volume. *(Take $\pi = \frac{22}{7}$.)*

2. A cylindrical pillar has a diameter of $56\text{ cm}$ and a height of $3.5\text{ m}$. Find the cost of painting its curved surface at $\$12.50$ per $\text{m}^2$.

3. The drum of a road roller has a diameter of $84\text{ cm}$ and a length of $120\text{ cm}$. Find the area of ground it levels in $500$ complete revolutions. Give your answer in $\text{m}^2$.

4. A closed cylindrical tank of radius $7\text{ m}$ and height $3\text{ m}$ is made from a metal sheet. How much sheet is required?

5. A cylindrical tank has a diameter of $1.4\text{ m}$ and a height of $2\text{ m}$. How many litres of water can it hold?

6. The volume of a cylindrical jar is $2.31\text{ litres}$ and its radius is $7\text{ cm}$. Find its height.

7. A metal pipe is $70\text{ cm}$ long. Its outer radius is $4\text{ cm}$ and its inner radius is $3\text{ cm}$. Find the volume of metal used.

8. The curved surface area of a cylinder is $4{,}400\text{ cm}^2$ and its height is $50\text{ cm}$. Find its radius.

9. State whether each statement is true or false. Give a reason.
   (a) If the radius of a cylinder is doubled (height unchanged), its volume also doubles.
   (b) The volume of a cylinder is equal to the area of its base multiplied by its height.
   (c) To find the sheet needed for an open glass, we use $2\pi r(r + h)$.

### Answers

1. $r = 14\text{ cm}$, $h = 20\text{ cm}$.
   (a) $\text{CSA} = 2 \times \frac{22}{7} \times 14 \times 20 = 88 \times 20 = \mathbf{1{,}760\text{ cm}^2}$.
   (b) $\text{TSA} = 2 \times \frac{22}{7} \times 14 \times (14 + 20) = 88 \times 34 = \mathbf{2{,}992\text{ cm}^2}$.
   (c) $\text{Volume} = \frac{22}{7} \times 14 \times 14 \times 20 = 616 \times 20 = \mathbf{12{,}320\text{ cm}^3}$.

2. $r = 56 \div 2 = 28\text{ cm} = 0.28\text{ m}$, $h = 3.5\text{ m}$.
   $\text{CSA} = 2 \times \frac{22}{7} \times 0.28 \times 3.5 = 2 \times 22 \times 0.04 \times 3.5 = \mathbf{6.16\text{ m}^2}$.
   Cost $= 6.16 \times \$12.50 = \mathbf{\$77}$.

3. $r = 42\text{ cm}$, $h = 120\text{ cm}$.
   $1\text{ revolution} = \text{CSA} = 2 \times \frac{22}{7} \times 42 \times 120 = 2 \times 22 \times 6 \times 120 = 31{,}680\text{ cm}^2 = \mathbf{3.168\text{ m}^2}$.
   $500\text{ revolutions} = 3.168 \times 500 = \mathbf{1{,}584\text{ m}^2}$.

4. Closed tank $\implies \text{TSA}$.
   $\text{TSA} = 2 \times \frac{22}{7} \times 7 \times (7 + 3) = 44 \times 10 = \mathbf{440\text{ m}^2}$.

5. $r = 0.7\text{ m}$, $h = 2\text{ m}$.
   $\text{Volume} = \frac{22}{7} \times 0.7 \times 0.7 \times 2 = 2.2 \times 0.7 \times 2 = \mathbf{3.08\text{ m}^3}$.
   Litres $= 3.08 \times 1{,}000 = \mathbf{3{,}080\text{ litres}}$.

6. $2.31\text{ litres} = 2{,}310\text{ cm}^3$. $\text{Base area} = \frac{22}{7} \times 7 \times 7 = 154\text{ cm}^2$.
   $h = 2{,}310 \div 154 = \mathbf{15\text{ cm}}$.
   Check: $154 \times 15 = 2{,}310$ ✅

7. $\text{Metal} = \pi(R^2 - r^2)h = \frac{22}{7} \times (16 - 9) \times 70 = \frac{22}{7} \times 7 \times 70 = 22 \times 70 = \mathbf{1{,}540\text{ cm}^3}$.

8. $2\pi r h = 4{,}400 \implies 2 \times \frac{22}{7} \times r \times 50 = 4{,}400$.
   $\frac{2{,}200}{7}r = 4{,}400 \implies r = 4{,}400 \times \frac{7}{2{,}200} = \mathbf{14\text{ cm}}$.
   Check: $2 \times \frac{22}{7} \times 14 \times 50 = 88 \times 50 = 4{,}400$ ✅

9. (a) **False** ❌. Volume $= \pi r^2 h$ contains $r^2$. Doubling $r$ makes the volume **$4$ times** larger.
   (b) **True** ✅. $\text{Volume} = \pi r^2 \times h = \text{base area} \times \text{height}$.
   (c) **False** ❌. An open glass has only one base, so the sheet needed is $2\pi r h + \pi r^2$. Using $2\pi r(r + h)$ counts two bases.

---

If the formulas ever feel hard to recall, just picture Liam unrolling his tin can label: **unroll the curved wall and you get a rectangle.** That gives the CSA right away, and the volume is still $\text{base area} \times \text{height}$. You have got this!

**In the next topic:** Next we meet the **cone** — like an ice-cream cone or a party hat. Here is a puzzle to ponder before we start: if a cone and a cylinder have the exact same base radius and height, **how many** full cones of water does it take to fill the cylinder to the brim? The answer is **$3$**, and we will uncover why in Topic 5!
