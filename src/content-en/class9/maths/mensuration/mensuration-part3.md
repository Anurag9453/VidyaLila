# Chapter: Mensuration (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [mensuration-part2.md](mensuration-part2.md).** (Topic 1 is in [mensuration.md](mensuration.md).)
> **Topics covered in this file:**
> 3. Surface Area and Volume of Cubes and Cuboids

---

# Topic 3: Surface Area and Volume of Cubes and Cuboids

In Topics 1 and 2, we calculated the areas of **flat (2D) shapes**: first triangles without knowing the height using Heron's formula (Leo's $13$-$14$-$15$ traffic island), and then quadrilaterals by splitting them along a diagonal into two triangles (Maya's kitchen garden and Dr. Bennett's hinged frame). All of those shapes lay flat on paper — they had only length and width.

Now we step off the page into **real-world objects** that also have a third dimension: **height**. A cardboard box, a brick, a room, a water storage tank — these are all **3D (three-dimensional) solids**. We begin with the two simplest solids: the **cuboid** and the **cube**.

---

## Sophia's Gift Box

Sophia bought a sturdy cardboard box for her younger brother's birthday present. The box measures **$20\text{ cm}$ long, $10\text{ cm}$ wide, and $5\text{ cm}$ high**. She has two questions:

1. **How much colourful wrapping paper will cover the entire outside of the box?**
2. **How many mini chocolate bars will fit inside the box?**

Both questions are about the exact same box, yet they measure two completely different things:

- The first question asks about the **outside surface** of the box. Wrapping paper sticks strictly to the outside; it does not go inside. That is **surface area**.
- The second question asks about the **space inside** the box. The chocolates fill up the interior. That is **volume**.

By the end of this topic, you will be able to answer both questions effortlessly. *(Spoiler: she needs **$700\text{ cm}^2$** of wrapping paper, and if each mini chocolate measures $2\text{ cm} \times 1\text{ cm} \times 1\text{ cm}$, exactly **$500$** fit inside.)*

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Solid (3D shape)** | An object with three dimensions: length, width, and height | A box, brick, or ball |
| **Cuboid** | A box-shaped solid whose $6$ faces are all rectangles | A matchbox, brick, or wardrobe |
| **Cube** | A special cuboid whose length, width, and height are all equal | A playing die or an ice cube |
| **Face** | One flat surface of a solid | The lid of a box |
| **Edge** | A straight line segment where two faces meet | The crease along a box's corner |
| **Vertex** | A sharp corner point where three edges meet | Any of the $8$ corners of a box |
| **Surface Area** | The combined area of all outer faces of a solid | Wrapping paper covering a box |
| **Lateral Surface Area (LSA)** | The area of the side "walls" only — excluding the top and bottom | The four walls of a room |
| **Total Surface Area (TSA)** | The area of every face, including both top and bottom | Wrapping every face of a closed box |
| **Volume** | The amount of 3D space enclosed inside a solid | Water inside a storage tank |
| **Capacity** | How much liquid a container can hold (often in litres) | A tank with a capacity of $3{,}000\text{ litres}$ |

---

## Part A: Surface Area vs. Volume

Keep Sophia's box in mind: **wrapping paper vs. chocolates**.

| | Surface Area | Volume |
|---|---|---|
| What it measures | The outer surface | The space inside |
| Think of it as | Wrapping paper or paint | Stuffing, chocolates, or water |
| Units | **$\text{cm}^2, \text{m}^2$** (square units) | **$\text{cm}^3, \text{m}^3$** (cubic units) |
| Building block | A $1\text{ cm} \times 1\text{ cm}$ flat square tile | A $1\text{ cm} \times 1\text{ cm} \times 1\text{ cm}$ tiny cube |

**Why the different exponents?** Area multiplies two lengths ($\text{cm} \times \text{cm} = \text{cm}^2$). Volume multiplies three lengths ($\text{cm} \times \text{cm} \times \text{cm} = \text{cm}^3$). That little "$2$" or "$3$" tells you straight away whether you are measuring surface or space.

### Connecting Cubic Units and Litres

Liquids like water, milk, and fuel are measured in **litres**. Memorize these two conversions:

- **$1\text{ litre} = 1{,}000\text{ cm}^3$.** Picture a cube measuring $10\text{ cm} \times 10\text{ cm} \times 10\text{ cm}$: its volume is $1{,}000\text{ cm}^3$, and it holds exactly $1\text{ litre}$ of water.
- **$1\text{ m}^3 = 1{,}000\text{ litres}$.** Since $1\text{ m} = 100\text{ cm}$, we have $1\text{ m}^3 = 100 \times 100 \times 100 = 1{,}000{,}000\text{ cm}^3$. Divide by $1{,}000\text{ cm}^3$ per litre to get $1{,}000\text{ litres}$.

Also keep handy: **$1\text{ m}^2 = 100 \times 100 = 10{,}000\text{ cm}^2$**.

---

## Part B: Faces, Edges, and Vertices

Pick up any box or matchbox and count them:

| Solid | Faces | Edges | Vertices |
|---|---|---|---|
| Cuboid | $6$ | $12$ | $8$ |
| Cube | $6$ | $12$ | $8$ |

The counts are identical for both! The only difference is that every face of a cube is an **identical square**, whereas the faces of a cuboid are rectangles.

> A neat bonus check: $\text{Faces} + \text{Vertices} - \text{Edges} = 6 + 8 - 12 = \mathbf{2}$. This number $2$ holds for many solids and is known as **Euler's formula**.

### The "Net" of a Cuboid (An Unfolded Box)

If you slit the edges of a cardboard box and lay it completely flat on the floor, you get its **net**:

```
               +---------+
               |   Top   |
               |  (l×b)  |
     +---------+---------+---------+---------+
     |  Left   |  Front  |  Right  |  Back   |
     |  (b×h)  |  (l×h)  |  (b×h)  |  (l×h)  |
     +---------+---------+---------+---------+
               | Bottom  |
               |  (l×b)  |
               +---------+
```

Look at the **$6$ rectangles** — they come in **three matching pairs**:
- Top and Bottom: each $l \times b$
- Front and Back: each $l \times h$
- Left and Right: each $b \times h$

This layout directly explains the surface area formulas.

---

## Part C: Cuboid

Let a cuboid have **length $= l$, width (breadth) $= b$, and height $= h$**.

### Total Surface Area (TSA)

From the net above, there are three pairs of identical rectangular faces:

$$\mathbf{\text{TSA} = 2(lb + bh + hl)}$$

### Lateral Surface Area (LSA): Just the Four Walls

Imagine standing inside a rectangular room. Four walls surround you, the ceiling is overhead, and the floor is beneath your feet. If you only want to paint the **four walls**, you leave out the floor and ceiling.

Four walls: two of size $l \times h$ and two of size $b \times h$:
$$\text{LSA} = 2lh + 2bh = \mathbf{2h(l + b)}$$

An easy way to remember this: **$2(l + b)$** is the perimeter of the floor (one trip around the room). Multiply that by the height $h$, and you get the area of the four walls — just like wrapping one long strip of height $h$ around the perimeter of the room.

### Volume

How many $1\text{ cm} \times 1\text{ cm} \times 1\text{ cm}$ unit cubes fit inside the cuboid?
- One layer on the floor holds $l \times b$ cubes.
- Stacking $h$ identical layers up to the top gives:

$$\mathbf{\text{Volume} = l \times b \times h}$$

### Example 1: A Basic Cuboid

A cuboid measures $8\text{ cm} \times 6\text{ cm} \times 4\text{ cm}$. Find its TSA, LSA, and volume.

- $lb = 8 \times 6 = 48$, $bh = 6 \times 4 = 24$, $hl = 4 \times 8 = 32$
- **$\text{TSA}$** $= 2(48 + 24 + 32) = 2 \times 104 = \mathbf{208\text{ cm}^2}$
- **$\text{LSA}$** $= 2 \times 4 \times (8 + 6) = 8 \times 14 = \mathbf{112\text{ cm}^2}$
- **$\text{Volume}$** $= 8 \times 6 \times 4 = \mathbf{192\text{ cm}^3}$

**Check:** $\text{LSA} = \text{TSA} - (\text{top} + \text{bottom}) = 208 - 2 \times 48 = 208 - 96 = 112$ ✅

### Example 2: Sophia's Gift Box (Answering the Story)

Box dimensions: $20\text{ cm} \times 10\text{ cm} \times 5\text{ cm}$.

- **Wrapping paper ($\text{TSA}$)** $= 2(20 \times 10 + 10 \times 5 + 5 \times 20) = 2(200 + 50 + 100) = 2 \times 350 = \mathbf{700\text{ cm}^2}$
- **Volume** $= 20 \times 10 \times 5 = \mathbf{1{,}000\text{ cm}^3}$
- Each mini chocolate $= 2 \times 1 \times 1 = 2\text{ cm}^3$. Number of chocolates $= 1{,}000 \div 2 = \mathbf{500}$

**Check (do they pack cleanly?):** Along the length $20 \div 2 = 10$, along the width $10 \div 1 = 10$, and along the height $5 \div 1 = 5$. Total $= 10 \times 10 \times 5 = 500$ ✅ (Every chocolate fits snugly with zero wasted space.)

### Example 3: Painting a Room

A room is $5\text{ m}$ long, $4\text{ m}$ wide, and $3\text{ m}$ high. Its four walls and ceiling are to be painted. There is one door ($2\text{ m} \times 1\text{ m}$) and one window ($1.5\text{ m} \times 1\text{ m}$) that will not be painted. Painting costs $\$25$ per $\text{m}^2$. Find the total cost.

- Four walls ($\text{LSA}$) $= 2 \times 3 \times (5 + 4) = 6 \times 9 = 54\text{ m}^2$
- Ceiling $= 5 \times 4 = 20\text{ m}^2$
- Combined $= 54 + 20 = 74\text{ m}^2$
- Door $+$ window $= (2 \times 1) + (1.5 \times 1) = 2 + 1.5 = 3.5\text{ m}^2$
- Area to be painted $= 74 - 3.5 = \mathbf{70.5\text{ m}^2}$
- Cost $= 70.5 \times \$25 = \mathbf{\$1,762.50}$

**Check:** $70 \times 25 = 1{,}750$, and $0.5 \times 25 = 12.5$. Total $= 1{,}762.50$ ✅

Notice we did not include the floor, because floors are not painted!

### Example 4: An Open Box (Without a Lid)

An open cardboard box (no lid) measures $30\text{ cm} \times 20\text{ cm} \times 10\text{ cm}$. How much cardboard is needed to make it?

Out of the $6$ faces, omit the **top**:
- $\text{TSA} = 2(30 \times 20 + 20 \times 10 + 10 \times 30) = 2(600 + 200 + 300) = 2{,}200\text{ cm}^2$
- Top $= 30 \times 20 = 600\text{ cm}^2$
- Cardboard needed $= 2{,}200 - 600 = \mathbf{1{,}600\text{ cm}^2}$

**Check (second method):** $\text{Bottom} + \text{four walls} = 600 + 2 \times 10 \times (30 + 20) = 600 + 1{,}000 = 1{,}600$ ✅

### Example 5: A Rooftop Water Storage Tank

A rectangular rooftop water tank has inner dimensions $2\text{ m}$ long, $1.5\text{ m}$ wide, and $1\text{ m}$ high. How many litres of water can it hold? If a household uses $500\text{ litres}$ per day, how many days will a full tank last?

- $\text{Volume} = 2 \times 1.5 \times 1 = 3\text{ m}^3$
- Since $1\text{ m}^3 = 1{,}000\text{ litres}$, $\text{capacity} = 3 \times 1{,}000 = \mathbf{3{,}000\text{ litres}}$
- Days $= 3{,}000 \div 500 = \mathbf{6\text{ days}}$

### Example 6: Bricks Needed for a Wall

A garden wall is $10\text{ m}$ long, $30\text{ cm}$ thick, and $2\text{ m}$ high. Each brick measures $20\text{ cm} \times 10\text{ cm} \times 7.5\text{ cm}$. How many bricks are needed? *(Ignore the space taken by mortar.)*

**Convert everything to one unit first.** Using metres:
- Wall $= 10\text{ m} \times 0.3\text{ m} \times 2\text{ m} = \mathbf{6\text{ m}^3}$
- Brick $= 0.2\text{ m} \times 0.1\text{ m} \times 0.075\text{ m} = \mathbf{0.0015\text{ m}^3}$
- Number of bricks $= 6 \div 0.0015 = \mathbf{4{,}000}$

**Check (in $\text{cm}$):** Wall $= 1{,}000 \times 30 \times 200 = 6{,}000{,}000\text{ cm}^3$. Brick $= 20 \times 10 \times 7.5 = 1{,}500\text{ cm}^3$. $6{,}000{,}000 \div 1{,}500 = 4{,}000$ ✅

### Example 7: Finding a Missing Dimension

A cuboidal box has volume $360\text{ cm}^3$, length $10\text{ cm}$, and width $6\text{ cm}$. Find its height.

- $10 \times 6 \times h = 360$
- $60h = 360$
- $h = \mathbf{6\text{ cm}}$

**Check:** $10 \times 6 \times 6 = 360$ ✅

### Extra: Space Diagonal of a Cuboid

The straight line running inside a cuboid from one corner to the completely opposite corner is its **space diagonal**. It is the longest straight object (such as a pencil or rod) that can fit inside the box.

$$\mathbf{\text{Diagonal} = \sqrt{l^2 + b^2 + h^2}}$$

**Example:** For a $12\text{ cm} \times 4\text{ cm} \times 3\text{ cm}$ box, $\text{diagonal} = \sqrt{144 + 16 + 9} = \sqrt{169} = \mathbf{13\text{ cm}}$. So a $13\text{ cm}$ pencil fits diagonally inside!

*(This comes from applying Pythagoras' theorem twice — a useful bonus result.)*

---

## Part D: Cube

A cube is a special cuboid where **$l = b = h = a$**. Replace $l, b,$ and $h$ with $a$ in the cuboid formulas:

| | Cuboid | Cube (side $a$) |
|---|---|---|
| TSA | $2(lb + bh + hl)$ | $2(a^2 + a^2 + a^2) = \mathbf{6a^2}$ |
| LSA | $2h(l + b)$ | $2a(a + a) = \mathbf{4a^2}$ |
| Volume | $lbh$ | $\mathbf{a^3}$ |
| Diagonal (extra) | $\sqrt{l^2 + b^2 + h^2}$ | $\sqrt{3a^2} = \mathbf{a\sqrt{3}}$ |

Easy mental picture: a cube has $6$ square faces each of area $a^2$, so $\text{TSA} = 6a^2$, and the $4$ side walls give $\text{LSA} = 4a^2$.

### Example 8: A Cube

For a cube of side $5\text{ cm}$:
- $\text{TSA} = 6 \times 25 = \mathbf{150\text{ cm}^2}$
- $\text{LSA} = 4 \times 25 = \mathbf{100\text{ cm}^2}$
- $\text{Volume} = 5^3 = \mathbf{125\text{ cm}^3}$

### Example 9: What Happens When You Double the Side?

Increase the side from $5\text{ cm}$ to $10\text{ cm}$:

| | Side $5\text{ cm}$ | Side $10\text{ cm}$ | Factor |
|---|---|---|---|
| TSA | $150\text{ cm}^2$ | $6 \times 100 = 600\text{ cm}^2$ | **$4$ times** |
| Volume | $125\text{ cm}^3$ | $1{,}000\text{ cm}^3$ | **$8$ times** |

Doubling the side ($2\times$) multiplies the surface area by **$2^2 = 4$** and the volume by **$2^3 = 8$**. Likewise, tripling the side multiplies the surface area by $9$ and the volume by $27$.

That is why a giant pumpkin needs only moderately more skin (surface area) than a small one, yet holds vastly more pulp inside (volume)!

### Example 10: From TSA to Volume

The TSA of a cube is $216\text{ cm}^2$. Find its volume.

- $6a^2 = 216 \implies a^2 = 36 \implies a = \mathbf{6\text{ cm}}$
- $\text{Volume} = 6^3 = \mathbf{216\text{ cm}^3}$

*(Fun coincidence: the numerical value is $216$ for both, though the units differ — $\text{cm}^2$ vs. $\text{cm}^3$!)*

### Example 11: Small Cubes Cut from a Big Cube

A wooden cube of side $12\text{ cm}$ is cut into smaller cubes of side $3\text{ cm}$. How many small cubes are formed?

- Along each edge: $12 \div 3 = 4$ small cubes
- Total $= 4 \times 4 \times 4 = \mathbf{64}$

**Check (using volume):** Large cube $= 12^3 = 1{,}728\text{ cm}^3$. Small cube $= 3^3 = 27\text{ cm}^3$. $1{,}728 \div 27 = 64$ ✅

### Example 12: Costing Problem

A cube of side $10\text{ cm}$ is to be covered with coloured paper costing $\$2$ per $100\text{ cm}^2$. Find the cost.

- $\text{TSA} = 6 \times 10^2 = 600\text{ cm}^2$
- Number of $100\text{ cm}^2$ sheets $= 600 \div 100 = 6$
- $\text{Cost} = 6 \times \$2 = \mathbf{\$12}$

---

## Common Pitfalls to Avoid

1. **Mistake 1: Mixing different units in one calculation.**
   For a box measuring $2\text{ m} \times 50\text{ cm} \times 40\text{ cm}$, writing $2 \times 50 \times 40 = 4{,}000$ is **wrong** because one length is in metres and two are in centimetres.
   Correct: all in $\text{cm}$ gives $200 \times 50 \times 40 = \mathbf{400{,}000\text{ cm}^3} = 400\text{ litres}$. Or all in $\text{m}$ gives $2 \times 0.5 \times 0.4 = 0.4\text{ m}^3 = 400\text{ litres}$. Both agree!

2. **Mistake 2: Including the lid on an open box.**
   An open-top box does not use the full TSA. Subtract the top face ($l \times b$). In Example 4, the answer is $1{,}600\text{ cm}^2$, not $2{,}200\text{ cm}^2$.

3. **Mistake 3: Confusing LSA and TSA.**
   "Paint the four walls" means **LSA**. "Wrap the entire closed box" means **TSA**. Read carefully to see which faces are actually covered — in a room, the floor is usually excluded while the ceiling may be included.

4. **Mistake 4: Thinking $1\text{ m}^3 = 100\text{ litres}$.**
   $1\text{ m}^3 = \mathbf{1{,}000\text{ litres}}$, not $100$. Remember: $1\text{ m}^3 = 100 \times 100 \times 100\text{ cm}^3 = 1{,}000{,}000\text{ cm}^3$, and $1{,}000\text{ cm}^3 = 1\text{ litre}$.

5. **Mistake 5: Thinking doubling the side doubles the volume.**
   Doubling the side makes the volume **$8$ times** larger ($2^3$), not twice as large. Surface area becomes **$4$ times** larger ($2^2$).

6. **Mistake 6: Swapping area and volume units.**
   Area always uses **square** units ($\text{cm}^2, \text{m}^2$), while volume uses **cubic** units ($\text{cm}^3, \text{m}^3$) or litres. Writing $208\text{ cm}^3$ for a surface area is wrong.

---

## Quick Recap

- **Surface area** $=$ outer covering (wrapping paper), units $\text{cm}^2 / \text{m}^2$. **Volume** $=$ interior space (contents), units $\text{cm}^3 / \text{m}^3$.
- **$1\text{ L} = 1{,}000\text{ cm}^3$**, **$1\text{ m}^3 = 1{,}000\text{ L}$**, **$1\text{ m}^2 = 10{,}000\text{ cm}^2$**.
- Both cuboid and cube have **$6$ faces, $12$ edges, and $8$ vertices**.
- **Cuboid ($l, b, h$):** $\text{TSA} = 2(lb + bh + hl)$, $\text{LSA}$ (four walls) $= 2h(l + b)$, $\text{Volume} = lbh$. Diagonal $= \sqrt{l^2 + b^2 + h^2}$ (extra).
- **Cube ($a$):** $\text{TSA} = 6a^2$, $\text{LSA} = 4a^2$, $\text{Volume} = a^3$. Diagonal $= a\sqrt{3}$ (extra).
- Scaling every side by **$k$** multiplies area by **$k^2$** and volume by **$k^3$**.
- Always convert **all measurements to the same unit** before multiplying.
- For an open box, subtract the top face; for a room, check carefully for floors, doors, and windows.

---

## Practice Questions

1. A cuboid measures $10\text{ cm} \times 8\text{ cm} \times 5\text{ cm}$. Find its total surface area, lateral surface area, and volume.

2. The total surface area of a cube is $294\text{ cm}^2$. Find the length of its side and its volume.

3. A room is $6\text{ m}$ long, $4\text{ m}$ wide, and $3\text{ m}$ high. Its four walls and ceiling are to be painted. There is one door of $2\text{ m} \times 1\text{ m}$ and two windows of $1.5\text{ m} \times 1\text{ m}$ each. Find the area to be painted and the cost at $\$20$ per $\text{m}^2$.

4. An open water tank (without a lid) is $3\text{ m}$ long, $2\text{ m}$ wide, and $1.5\text{ m}$ deep.
   (a) Find the area of metal sheet needed to make it.
   (b) How many litres of water can it hold?

5. How many bricks of size $25\text{ cm} \times 12.5\text{ cm} \times 7.5\text{ cm}$ are needed to build a wall $15\text{ m}$ long, $30\text{ cm}$ thick, and $2.5\text{ m}$ high? *(Ignore the space taken by mortar.)*

6. The side of a cube is tripled. How many times larger do its total surface area and its volume become?

7. How many cubes of side $2\text{ cm}$ can be cut from a cuboid of size $10\text{ cm} \times 8\text{ cm} \times 6\text{ cm}$?

8. A cuboidal container has a base of $15\text{ cm} \times 10\text{ cm}$. When $1.2\text{ litres}$ of water is poured into it, how high does the water rise?

9. State whether each statement is true or false. Give a reason.
   (a) Every cube is a cuboid.
   (b) $1\text{ m}^3 = 100\text{ litres}$.
   (c) If the length, width, and height of a cuboid are all doubled, its volume also doubles.

### Answers

1. $lb = 80$, $bh = 40$, $hl = 50$.
   $\text{TSA} = 2(80 + 40 + 50) = 2 \times 170 = \mathbf{340\text{ cm}^2}$.
   $\text{LSA} = 2 \times 5 \times (10 + 8) = 10 \times 18 = \mathbf{180\text{ cm}^2}$.
   $\text{Volume} = 10 \times 8 \times 5 = \mathbf{400\text{ cm}^3}$.
   Check: $\text{TSA} - 2lb = 340 - 160 = 180 = \text{LSA}$ ✅

2. $6a^2 = 294 \implies a^2 = 49 \implies \mathbf{a = 7\text{ cm}}$. $\text{Volume} = 7^3 = \mathbf{343\text{ cm}^3}$.

3. Four walls $= 2 \times 3 \times (6 + 4) = 60\text{ m}^2$. Ceiling $= 6 \times 4 = 24\text{ m}^2$. Total $= 84\text{ m}^2$.
   Door $= 2\text{ m}^2$, two windows $= 2 \times 1.5 = 3\text{ m}^2$. Subtract $5\text{ m}^2$.
   Area to paint $= 84 - 5 = \mathbf{79\text{ m}^2}$. Cost $= 79 \times \$20 = \mathbf{\$1,580}$.

4. (a) No lid, so $\text{bottom} + \text{four walls}$:
   $\text{Bottom} = 3 \times 2 = 6\text{ m}^2$. $\text{Walls} = 2 \times 1.5 \times (3 + 2) = 15\text{ m}^2$.
   Sheet needed $= 6 + 15 = \mathbf{21\text{ m}^2}$.
   (b) $\text{Volume} = 3 \times 2 \times 1.5 = 9\text{ m}^3 = 9 \times 1{,}000 = \mathbf{9{,}000\text{ litres}}$.

5. Convert to $\text{cm}$. Wall $= 1{,}500 \times 30 \times 250 = 11{,}250{,}000\text{ cm}^3$.
   Brick $= 25 \times 12.5 \times 7.5 = 2{,}343.75\text{ cm}^3$.
   Number of bricks $= 11{,}250{,}000 \div 2{,}343.75 = \mathbf{4{,}800}$.
   Check: $2{,}343.75 \times 4{,}800 = 2{,}343.75 \times 48 \times 100 = 112{,}500 \times 100 = 11{,}250{,}000$ ✅

6. Side $\times 3 \implies$ TSA becomes **$3^2 = 9$ times** larger, volume becomes **$3^3 = 27$ times** larger.

7. Along length: $10 \div 2 = 5$, width: $8 \div 2 = 4$, height: $6 \div 2 = 3$.
   Total $= 5 \times 4 \times 3 = \mathbf{60\text{ cubes}}$.
   Check: $480 \div 8 = 60$ ✅ (cuboid $= 480\text{ cm}^3$, each small cube $= 8\text{ cm}^3$).

8. $1.2\text{ L} = 1.2 \times 1{,}000 = 1{,}200\text{ cm}^3$.
   Base area $= 15 \times 10 = 150\text{ cm}^2$.
   Height $= 1{,}200 \div 150 = \mathbf{8\text{ cm}}$.
   Check: $15 \times 10 \times 8 = 1{,}200$ ✅

9. (a) **True** ✅. A cube is simply a cuboid with $l = b = h$.
   (b) **False** ❌. $1\text{ m}^3 = \mathbf{1{,}000}\text{ litres}$.
   (c) **False** ❌. Volume becomes $2 \times 2 \times 2 = \mathbf{8\text{ times}}$ as large.

---

Boxes, rooms, water tanks, bricks — you can now measure both the "outside covering" and the "inside capacity" of any rectangular solid. Keep your units consistent and let the formulas do the rest!

**In the next topic:** Every solid so far had flat faces. What about a tin can, a water pipe, or a cylindrical storage tank? In Topic 4, we explore the **cylinder**, where two faces are flat circles and the side wall wraps smoothly around!
