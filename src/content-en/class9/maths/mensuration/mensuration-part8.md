# Chapter: Mensuration (Part 8)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [mensuration-part7.md](mensuration-part7.md).** (The chapter begins in [mensuration.md](mensuration.md).)
> **Topics covered in this file:**
> 8. Solids with Uniform Cross-Section (Prisms) and Chapter Wrap-up

---

# Topic 8: Solids with Uniform Cross-Section (Prisms)

In Topic 7, we measured flat circular shapes: Maya's paved walkway around the courtyard well ($192.5\text{ m}^2$ of tiles and $66\text{ m}$ of railing), bicycle wheel revolutions, and lawn sprinklers (sectors). Earlier, in Topics 3 and 4, we found the volumes of two different solids using suspiciously similar formulas: **$l \times b \times h$** for a [cuboid](mensuration-part3.md) and **$\pi r^2 \times h$** for a [cylinder](mensuration-part4.md). Was that just a coincidence? Not at all! In this final topic, we uncover the single big idea uniting both formulas — an idea that works for *any* solid whose slices stay identical from end to end.

---

## Maya's Triangular Chocolate Bar

Back from Switzerland, Maya's uncle brought her a long, iconic **triangular chocolate bar**. Viewed from above, it looked like a long box; viewed straight from the end, its face was a neat **triangle**.

Maya began slicing it across with a knife. First slice: a small triangle. Second slice: the **exact same** triangle. Third, fourth, fifth — every single slice had the identical shape and size.

Maya asked her dad, "How much chocolate is inside this whole bar?"

Her dad smiled: "Measure the area of one triangular slice, then multiply by the length of the bar. That's it!"

Maya measured carefully:
- Each slice was a $3\text{ cm}, 4\text{ cm}, 5\text{ cm}$ right-angled triangle. $\text{Area} = \frac{1}{2} \times 3 \times 4 = \mathbf{6\text{ cm}^2}$.
- Length of the chocolate bar $= \mathbf{20\text{ cm}}$.

$$\text{Volume} = 6 \times 20 = \mathbf{120\text{ cm}^3}$$

Suddenly it clicked for Maya: "Wait — that's just like the cuboid! Base area ($l \times b$) times height ($h$)!" Spot on. Whenever slicing a solid perpendicularly along its length produces **identical slices every time**, one unified formula gives its volume.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Cross-section** | The flat 2D shape revealed when you slice a solid straight across ($90^\circ$) to its length | Each triangular slice of Maya's chocolate bar |
| **Uniform cross-section** | A cross-section whose shape and size stay **identical** anywhere along the solid's length | A brick, unsharpened hexagonal pencil, pipe, or chocolate bar |
| **Prism** | A solid with two identical, parallel polygonal ends and a uniform cross-section between them | A triangular prism or rectangular prism (cuboid) |
| **Length ($L$)** | The distance between the two ends along which the solid extends | The $20\text{ cm}$ length of the chocolate bar |
| **Lateral Surface Area (LSA)** | The total outer surface excluding the two end faces | The main wrapper sleeve around the chocolate bar |
| **Trapezium** | A quadrilateral with exactly one pair of parallel sides | Cross-section of a canal or a sloped swimming pool |

---

## Part A: What Is a Uniform Cross-Section?

Imagine slicing a solid into thin wafers, always cutting straight across ($90^\circ$ to its length):

- If **every wafer has the exact same shape and size**, the solid has a **uniform cross-section**.
- If the wafers **shrink or grow** as you slice along, the cross-section is *not* uniform.

### Solids with a Uniform Cross-Section

| Solid | Shape of every slice |
|---|---|
| Brick (cuboid) | Rectangle |
| Unsharpened hexagonal pencil | Hexagon |
| Steel pipe or [cylinder](mensuration-part4.md) | Circle (or circular ring) |
| Maya's chocolate bar | Triangle |
| Sliced loaf of bread (sandwich loaf) | Roughly identical rectangular slices |
| Open drainage channel | Rectangle or trapezium |

### Solids WITHOUT a Uniform Cross-Section

| Solid | Why not? |
|---|---|
| [Cone](mensuration-part5.md) | Circular slices shrink steadily until they vanish at the tip |
| [Sphere](mensuration-part6.md) | Largest circle in the middle, smaller circles near the poles |
| Pyramid | Square slices shrink steadily toward the apex |

```
 Uniform (every slice identical)     Not uniform (slices change size)

   ______________                         /\
  /|            /|                       /  \
 / |           / |                      /    \
/__|__________/  |                     /      \
|  |          |  |                    /________\
|  |__________|__|                     cone / pyramid
| /           | /
|/____________|/
   cuboid / prism
```

---

## Part B: Volume $=$ Cross-Section Area $\times$ Length

$$\mathbf{\text{Volume} = (\text{Area of cross-section}) \times (\text{Length})}$$

Think of it like this: one slice has area $A$. Line up thin slices one behind another for a total length $L$. The space they fill is simply $A \times L$.

### You Already Knew This Formula!

| Solid | Cross-section | Area ($A$) | Length | Volume $= A \times L$ |
|---|---|---|---|---|
| Cuboid ([Topic 3](mensuration-part3.md)) | Rectangle $l \times b$ | $lb$ | $h$ | **$lbh$** |
| Cube | Square $a \times a$ | $a^2$ | $a$ | **$a^3$** |
| Cylinder ([Topic 4](mensuration-part4.md)) | Circle of radius $r$ | $\pi r^2$ | $h$ | **$\pi r^2 h$** |

In Topic 3, we filled a cuboid with layers of $1\text{ cm}$ unit cubes: $l \times b$ cubes in one layer, stacked $h$ layers high. That is the exact same idea: **area of one layer $\times$ stack length**.

And that also explains why cones ($\frac{1}{3}$) and spheres ($\frac{4}{3}$) needed different formulas: their slices are *not* uniform!

---

## Part C: Surface Area

### Lateral Surface Area (Excluding Both Ends)

Picture the foil sleeve wrapping the **long sides** of Maya's chocolate bar (excluding the two triangular ends). It consists of three long rectangles:
- $3\text{ cm} \times 20\text{ cm}$
- $4\text{ cm} \times 20\text{ cm}$
- $5\text{ cm} \times 20\text{ cm}$

Add them: $(3 + 4 + 5) \times 20 = 12 \times 20 = \mathbf{240\text{ cm}^2}$.

Notice that $3 + 4 + 5 = 12$ is simply the **perimeter** of the triangular cross-section! So:

$$\mathbf{\text{Lateral Surface Area} = (\text{Perimeter of cross-section}) \times (\text{Length})}$$

### Total Surface Area (Including Both Ends)

Add the two triangular end faces, each of area $6\text{ cm}^2$:

$$\mathbf{\text{Total Surface Area} = \text{LSA} + 2 \times (\text{Area of cross-section})}$$

For Maya's chocolate bar: $\text{TSA} = 240 + 2 \times 6 = \mathbf{252\text{ cm}^2}$.

### Checking Against Earlier Formulas

| Solid | Perimeter $\times$ Length | Our earlier LSA |
|---|---|---|
| Cuboid | $2(l + b) \times h$ | $2h(l + b)$ |
| Cylinder | $2\pi r \times h$ | $2\pi r h$ |

**Check:** $\text{TSA of cuboid} = 2h(l + b) + 2lb = 2(lb + bh + hl)$ ✅ — identical to Topic 3!

---

## Part D: Triangular Prism

When the cross-section is a triangle, you can find its area either by $\frac{1}{2} \times \text{base} \times \text{height}$ or, if all three sides are known, by [Heron's formula from Topic 1](mensuration.md).

### Example 1: Maya's Chocolate Bar (Complete Analysis)

Cross-section: $3, 4, 5\text{ cm}$ right triangle. Length: $20\text{ cm}$.

- Cross-section area $= \frac{1}{2} \times 3 \times 4 = 6\text{ cm}^2$
- $\text{Volume} = 6 \times 20 = \mathbf{120\text{ cm}^3}$
- $\text{Perimeter} = 3 + 4 + 5 = 12\text{ cm}$, so $\text{LSA} = 12 \times 20 = \mathbf{240\text{ cm}^2}$
- $\text{TSA} = 240 + 2 \times 6 = \mathbf{252\text{ cm}^2}$

**Check:** Using Heron's formula, $s = 6$, $\sqrt{6 \times 3 \times 2 \times 1} = \sqrt{36} = 6$ ✅

### Example 2: A Prism Using Heron's Formula

A wooden block has a triangular cross-section with sides $13\text{ cm}, 14\text{ cm},$ and $15\text{ cm}$. The block is $10\text{ cm}$ long.

*(This is the exact $13$-$14$-$15$ triangle from Leo's traffic island in Topic 1!)*

- $s = \dfrac{13 + 14 + 15}{2} = 21$
- $\text{Area} = \sqrt{21 \times 8 \times 7 \times 6} = \sqrt{7{,}056} = \mathbf{84\text{ cm}^2}$
- $\text{Volume} = 84 \times 10 = \mathbf{840\text{ cm}^3}$
- $\text{Perimeter} = 42\text{ cm}$, $\text{LSA} = 42 \times 10 = \mathbf{420\text{ cm}^2}$
- $\text{TSA} = 420 + 2 \times 84 = \mathbf{588\text{ cm}^2}$

**Check:** $21 \times 8 \times 7 \times 6 = 7{,}056$, and $84 \times 84 = 7{,}056$ ✅

### Example 3: Tarpaulin Cover for a Woodpile

To protect stacked firewood from rain, a tarpaulin shelter is built in the shape of a **triangular prism**: viewed from the front, it is an isosceles triangle ($6\text{ m}$ wide at the base, two sloping sides of $5\text{ m}$ each), extending $10\text{ m}$ back. **No tarpaulin is placed on the ground.**

**Height of triangle:** Using half the base ($3\text{ m}$) and the sloping side ($5\text{ m}$), $\text{height} = \sqrt{5^2 - 3^2} = \sqrt{16} = \mathbf{4\text{ m}}$ (by Pythagoras' theorem).

**How much tarpaulin is needed?**
- Two sloping roof panels: $2 \times (5 \times 10) = 100\text{ m}^2$
- Two triangular ends: $2 \times \left(\frac{1}{2} \times 6 \times 4\right) = 2 \times 12 = 24\text{ m}^2$
- Ground floor: **none** (omit the $6 \times 10$ base)
- Total tarpaulin $= 100 + 24 = \mathbf{124\text{ m}^2}$

**Space inside:** $\text{Volume} = 12 \times 10 = \mathbf{120\text{ m}^3}$.

**Cost:** At $\$50$ per $\text{m}^2$, $\text{cost} = 124 \times \$50 = \mathbf{\$6{,}200}$.

Notice we did *not* blindly apply $\text{LSA} = \text{perimeter} \times \text{length}$, because the perimeter includes the $6\text{ m}$ floor edge which needs no tarpaulin. **Always check which faces are actually covered!**

---

## Part E: Trapezium Cross-Section (Canals and Swimming Pools)

**Recall the area of a trapezium:**

$$\text{Area} = \frac{1}{2} \times (\text{sum of parallel sides}) \times (\text{perpendicular distance between them}) = \frac{1}{2}(a + b) \times h$$

```
        a (top)
   ______________
   \            /
    \           /   h (depth)
     \_________/
       b (bottom)
```

### Example 4: A Sloped Swimming Pool

A swimming pool is **$20\text{ m}$ long** and **$10\text{ m}$ wide**. Its depth slopes uniformly from **$1\text{ m}$** at the shallow end to **$3\text{ m}$** at the deep end. How much water can the pool hold?

**Choose the right cross-section.** Look at the pool from the side ($20\text{ m}$ wall). That side profile is a trapezium:
- Parallel sides: $1\text{ m}$ and $3\text{ m}$ (the depths at each end)
- Perpendicular distance between them: $20\text{ m}$

$$\text{Area} = \frac{1}{2} \times (1 + 3) \times 20 = \mathbf{40\text{ m}^2}$$

This exact trapezium profile runs uniformly across the entire **$10\text{ m}$ width**:

$$\text{Volume} = 40 \times 10 = \mathbf{400\text{ m}^3}$$

In litres: $400 \times 1{,}000 = \mathbf{400{,}000\text{ litres}}$.

**Check:** If the pool had a flat average depth of $\frac{1 + 3}{2} = 2\text{ m}$ everywhere, its volume would be $20 \times 10 \times 2 = 400\text{ m}^3$ ✅

### Example 5: Water Flowing Through a Canal

An irrigation canal has a trapezoidal cross-section: $8\text{ m}$ wide at the top, $4\text{ m}$ wide at the bottom, and $2\text{ m}$ deep. Water flows through it at **$3\text{ km/h}$**.

**(a) How much water flows in one hour?**
- Cross-section area $= \frac{1}{2} \times (8 + 4) \times 2 = \mathbf{12\text{ m}^2}$
- In $1\text{ hour}$, the water advances $3\text{ km} = \mathbf{3{,}000\text{ m}}$ *(convert units first!)*
- Volume in $1\text{ hour} = 12 \times 3{,}000 = \mathbf{36{,}000\text{ m}^3}$

Picture all the water that passes a point in one hour as a giant $3{,}000\text{ m}$ long prism with a $12\text{ m}^2$ cross-section!

**(b) In half an hour?** $36{,}000 \div 2 = \mathbf{18{,}000\text{ m}^3}$.

**(c) Irrigating a field:** If that half-hour's water floods a field to a depth of $10\text{ cm}$ ($= 0.1\text{ m}$), how much area does it irrigate?

$$\text{Area} = \text{Volume} \div \text{Depth} = 18{,}000 \div 0.1 = \mathbf{180{,}000\text{ m}^2}$$

*(Since $1\text{ hectare} = 10{,}000\text{ m}^2$, that equals $18\text{ hectares}$.)*

**Check:** $180{,}000 \times 0.1 = 18{,}000$ ✅

### Example 6: Flow Through a Rectangular Drain

A concrete storm drain has a rectangular cross-section $50\text{ cm}$ wide and $30\text{ cm}$ deep, running completely full. Water flows at $2\text{ km/h}$. How many litres flow out per minute?

- Convert to metres first: $0.5\text{ m} \times 0.3\text{ m} = \mathbf{0.15\text{ m}^2}$
- In $1\text{ hour}$: $0.15 \times 2{,}000 = \mathbf{300\text{ m}^3}$
- In $1\text{ minute}$: $300 \div 60 = \mathbf{5\text{ m}^3} = 5 \times 1{,}000 = \mathbf{5{,}000\text{ litres}}$

**Check:** $5{,}000\text{ L} \times 60 = 300{,}000\text{ L} = 300\text{ m}^3$ ✅

---

## Part F: A Quick Look at Hollow Rectangular Pipes

Just as we found the metal in a round pipe in Topic 4 using outer area minus inner area, we do the exact same thing for a square or rectangular tube.

### Example 7

A hollow steel square-section pipe has outer dimensions $10\text{ cm} \times 8\text{ cm}$ and a hollow interior of $8\text{ cm} \times 6\text{ cm}$. The pipe is $2\text{ m}$ long.

- Cross-section area of steel $= 10 \times 8 - 8 \times 6 = 80 - 48 = \mathbf{32\text{ cm}^2}$
- Length $= 2\text{ m} = \mathbf{200\text{ cm}}$ *(match units!)*
- Volume of steel $= 32 \times 200 = \mathbf{6{,}400\text{ cm}^3}$

If $1\text{ cm}^3$ of steel has a mass of $7.8\text{ g}$, the pipe's mass $= 6{,}400 \times 7.8 = 49{,}920\text{ g} = \mathbf{49.92\text{ kg}}$.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Using perimeter instead of area for volume.**
   Volume $= \mathbf{\text{area}} \times \text{length}$. $\text{Perimeter} \times \text{length}$ gives LSA, not volume. In Maya's chocolate bar, $12 \times 20 = 240\text{ cm}^2$ is LSA, while $6 \times 20 = 120\text{ cm}^3$ is volume.

2. **Mistake 2: Forgetting the two end faces in TSA.**
   $\text{TSA} = \text{LSA} \mathbf{+ 2 \times} \text{cross-section area}$. Stopping at LSA leaves out both triangular or trapezoidal ends.

3. **Mistake 3: Picking the wrong face as the uniform cross-section.**
   In the sloped swimming pool, the uniform cross-section is the **side wall trapezium** (parallel sides $1\text{ m}$ and $3\text{ m}$, $20\text{ m}$ apart), multiplied by the $10\text{ m}$ width — not multiplied by $20\text{ m}$ again. Always ask: *which direction gives identical slices?*

4. **Mistake 4: Mixing speed units and dimension units.**
   When canal width is in $\text{m}$ and flow speed is in $\text{km/h}$, convert $3\text{ km/h}$ to $3{,}000\text{ m/h}$ first — otherwise your answer will be off by $1{,}000\times$.

5. **Mistake 5: Applying $\text{area} \times \text{length}$ to a cone or sphere.**
   $\text{Area} \times \text{length}$ only works for **uniform** cross-sections. Cones ($\frac{1}{3}$) and spheres ($\frac{4}{3}$) taper, so they require their own formulas from Topics 5 and 6.

6. **Mistake 6: Not checking which walls are actually covered.**
   In the firewood shelter, there was no tarpaulin on the ground. Always verify which faces belong in the surface area before using $\text{perimeter} \times \text{length}$.

---

## Quick Recap

- **Uniform cross-section:** slicing perpendicular to the length produces identical cross-sections everywhere.
- **$\text{Volume} = \text{cross-section area} \times \text{length}$.** Cuboids ($lbh$) and cylinders ($\pi r^2 h$) are just special cases of this rule.
- **$\text{LSA} = \text{cross-section perimeter} \times \text{length}$.**
- **$\text{TSA} = \text{LSA} + 2 \times \text{cross-section area}$.**
- For a triangular cross-section, find its area via $\frac{1}{2}bh$ or Heron's formula.
- For a trapezoidal cross-section (canals, sloped pools): $\text{area} = \frac{1}{2}(a + b)h$.
- **Flowing water:** volume in $1\text{ hour} = \text{cross-section area} \times (\text{distance flowed in } 1\text{ hour})$. Match units first!
- Cones, spheres, and pyramids do **not** have uniform cross-sections.

---

## Practice Questions

1. Which of the following solids have a uniform cross-section?
   (a) a brick
   (b) a cone
   (c) an unsharpened hexagonal pencil
   (d) a football
   (e) a long triangular chocolate bar
   (f) a steel pipe

2. A prism has a cross-section of area $15\text{ cm}^2$ and a length of $12\text{ cm}$. Find its volume.

3. A triangular prism has a right-triangle cross-section with legs $6\text{ cm}$ and $8\text{ cm}$. Its length is $25\text{ cm}$. Find its volume, lateral surface area, and total surface area.

4. The cross-section of a prism is a triangle with sides $5\text{ cm}, 5\text{ cm},$ and $6\text{ cm}$. The prism is $15\text{ cm}$ long. Using Heron's formula, find its volume and total surface area.

5. A swimming pool is $25\text{ m}$ long and $12\text{ m}$ wide. Its depth increases uniformly from $1.2\text{ m}$ at one end to $2.8\text{ m}$ at the other. How many litres of water can it hold?

6. A canal is $6\text{ m}$ wide at the top, $3\text{ m}$ wide at the bottom, and $1.5\text{ m}$ deep. Water flows through it at $4\text{ km/h}$. How much water flows through it in $20\text{ minutes}$?

7. A tarpaulin cover is shaped like a triangular prism. Its cross-section is an isosceles triangle with base $8\text{ m}$ and equal sides $5\text{ m}$, and it is $15\text{ m}$ long. There is no tarpaulin on the floor. Find the area of tarpaulin needed and the volume of space inside.

8. State true or false:
   (a) $\text{Volume of a prism} = \text{perimeter of cross-section} \times \text{length}$.
   (b) A cylinder is a solid with a uniform cross-section.
   (c) A cone is a solid with a uniform cross-section.
   (d) $\text{Total surface area of a prism} = \text{lateral surface area} + 2 \times \text{area of cross-section}$.

### Answers

1. **(a), (c), (e), (f).** In a cone and a football, slices vary in size.

2. $\text{Volume} = 15 \times 12 = \mathbf{180\text{ cm}^3}$.

3. $\text{Hypotenuse} = \sqrt{36 + 64} = 10\text{ cm}$.
   - $\text{Area} = \frac{1}{2} \times 6 \times 8 = 24\text{ cm}^2$, $\text{Volume} = 24 \times 25 = \mathbf{600\text{ cm}^3}$.
   - $\text{Perimeter} = 6 + 8 + 10 = 24\text{ cm}$, $\text{LSA} = 24 \times 25 = \mathbf{600\text{ cm}^2}$.
   - $\text{TSA} = 600 + 2 \times 24 = \mathbf{648\text{ cm}^2}$.

4. $s = \frac{5 + 5 + 6}{2} = 8$. $\text{Area} = \sqrt{8 \times 3 \times 3 \times 2} = \sqrt{144} = 12\text{ cm}^2$.
   - $\text{Volume} = 12 \times 15 = \mathbf{180\text{ cm}^3}$.
   - $\text{Perimeter} = 16\text{ cm}$, $\text{LSA} = 16 \times 15 = 240\text{ cm}^2$.
   - $\text{TSA} = 240 + 2 \times 12 = \mathbf{264\text{ cm}^2}$.

5. Side trapezium: $\frac{1}{2} \times (1.2 + 2.8) \times 25 = \frac{1}{2} \times 4 \times 25 = 50\text{ m}^2$.
   $\text{Volume} = 50 \times 12 = 600\text{ m}^3 = \mathbf{600{,}000\text{ litres}}$.
   Check: average depth $= 2\text{ m}$, $25 \times 12 \times 2 = 600$ ✅

6. $\text{Cross-section} = \frac{1}{2} \times (6 + 3) \times 1.5 = 6.75\text{ m}^2$.
   In $20\text{ minutes}$, water travels $4{,}000 \times \frac{20}{60} = \frac{4{,}000}{3}\text{ m}$.
   $\text{Volume} = 6.75 \times \frac{4{,}000}{3} = \frac{27{,}000}{3} = \mathbf{9{,}000\text{ m}^3}$.

7. Height of triangle $= \sqrt{5^2 - 4^2} = \sqrt{9} = 3\text{ m}$. Area of triangle $= \frac{1}{2} \times 8 \times 3 = 12\text{ m}^2$.
   - $\text{Tarpaulin} = \text{two sloping walls} + \text{two ends} = 2 \times (5 \times 15) + 2 \times 12 = 150 + 24 = \mathbf{174\text{ m}^2}$.
   - $\text{Space inside} = 12 \times 15 = \mathbf{180\text{ m}^3}$.

8. (a) **False** ❌. $\text{Perimeter} \times \text{length}$ gives LSA; volume uses cross-section area.
   (b) **True** ✅. Every slice is an identical circle.
   (c) **False** ❌. Circular slices shrink toward the vertex.
   (d) **True** ✅.

---

# Chapter Wrap-up: Mensuration

| Topic | What We Learned | Key Takeaway |
|---|---|---|
| 1. Heron's Formula | Leo's traffic island ($13, 14, 15\text{ m}$): finding a triangle's area from its three sides without height | $s = \frac{a + b + c}{2}$, $\Delta = \sqrt{s(s - a)(s - b)(s - c)}$ |
| 2. Area of Quadrilaterals | Maya's kitchen garden and Dr. Bennett's hinged frame: splitting along a diagonal into two triangles | Four sides $+$ one diagonal, then Heron twice |
| 3. Cube and Cuboid | Sophia's gift box: wrapping paper (surface area) vs. chocolates (volume) | $\text{TSA} = 2(lb + bh + hl)$, $\text{Volume} = lbh$ |
| 4. Cylinder | Liam's tin can label: unroll the curved wall into a rectangle | $\text{CSA} = 2\pi r h$, $\text{Volume} = \pi r^2 h$ |
| 5. Cone | Elena's party hats and ice-cream cones: three cones $=$ one cylinder | $l = \sqrt{r^2 + h^2}$, $\text{CSA} = \pi r l$, $\text{Volume} = \frac{1}{3}\pi r^2 h$ |
| 6. Sphere and Hemisphere | Elena's football and the soup bowl | $\text{SA} = 4\pi r^2$, $\text{Volume} = \frac{4}{3}\pi r^3$ |
| 7. Area and Perimeter of Circles | Maya's courtyard well walkway (ring), wheel revolutions, sprinkler sector, shaded regions | $\text{Area} = \pi r^2$, $C = 2\pi r$, $\text{Ring} = \pi(R^2 - r^2) = \pi(R + r)(R - r)$, $\text{Sector} = \frac{\theta}{360}\pi r^2$ |
| 8. Uniform Cross-section (Prism) | Maya's triangular chocolate bar, sloped pool, flowing canal | $\text{Volume} = \text{cross-section area} \times \text{length}$ |

### All Formulas at a Glance

**Flat shapes (area and perimeter)**

| Shape | Area | Perimeter / Length |
|---|---|---|
| Triangle (base $b$, height $h$) | $\frac{1}{2}bh$ | $a + b + c$ |
| Triangle (three sides) | $\sqrt{s(s - a)(s - b)(s - c)}$ | $2s$ |
| Equilateral triangle ($a$) | $\frac{\sqrt{3}}{4}a^2$ | $3a$ |
| Circle ($r$) | $\pi r^2$ | $2\pi r$ |
| Semicircle ($r$) | $\frac{1}{2}\pi r^2$ | $\pi r + 2r$ |
| Quadrant ($r$) | $\frac{1}{4}\pi r^2$ | $\frac{1}{2}\pi r + 2r$ |
| Ring ($R$ outer, $r$ inner) | $\pi(R^2 - r^2) = \pi(R + r)(R - r)$ | — |
| Sector (angle $\theta$) | $\frac{\theta}{360} \times \pi r^2$ | $\text{Arc} = \frac{\theta}{360} \times 2\pi r$; $\text{perimeter} = \text{arc} + 2r$ |
| Trapezium | $\frac{1}{2}(a + b)h$ | — |

**Solids**

| Shape | CSA / LSA | TSA | Volume |
|---|---|---|---|
| Cuboid ($l, b, h$) | $2h(l + b)$ | $2(lb + bh + hl)$ | $lbh$ |
| Cube ($a$) | $4a^2$ | $6a^2$ | $a^3$ |
| Cylinder ($r, h$) | $2\pi r h$ | $2\pi r(r + h)$ | $\pi r^2 h$ |
| Cone ($r, h, l$) | $\pi r l$ | $\pi r(l + r)$ | $\frac{1}{3}\pi r^2 h$ |
| Sphere ($r$) | $4\pi r^2$ | $4\pi r^2$ | $\frac{4}{3}\pi r^3$ |
| Hemisphere ($r$) | $2\pi r^2$ | $3\pi r^2$ | $\frac{2}{3}\pi r^3$ |
| Prism (cross-section $A$, perimeter $P$, length $L$) | $P \times L$ | $P \times L + 2A$ | $A \times L$ |

---

The entire chapter in one sentence: **for flat shapes, "how much surface it covers" is area; for 3D solids, "how much paper wraps the outside" is surface area and "how much fits inside" is volume.** And whenever a solid has identical slices from end to end, just remember: area of one slice times length. You have mastered Mensuration!
