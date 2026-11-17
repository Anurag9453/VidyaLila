# Chapter: Mensuration (Part 7)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [mensuration-part6.md](mensuration-part6.md).** (The chapter begins in [mensuration.md](mensuration.md).)
> **Topics covered in this file:**
> 7. Area and Perimeter of Circles, Rings, and Sectors

---

# Topic 7: Area and Perimeter of Circles, Rings, and Sectors

In Topic 6, Elena's burst football and soup bowl gave us the sphere and hemisphere: outer leather ($4\pi r^2$) and air inside ($\frac{4}{3}\pi r^3$). Before that, circles appeared again and again as the flat bases of cylinders (Liam's tin cans) and cones (Elena's party hats). Until now, though, we only treated a circle as part of a 3D solid.

In this topic, we zoom in on **flat circles** themselves — and not just complete circles, but their pieces too: **semicircles (half circles), quadrants (quarter circles), circular rings (annuli), and fan-shaped sectors**. Then we tackle composite figures where circles combine with squares and rectangles.

---

## Maya and the Community Circular Well

In the community courtyard near Maya's home stands a historic **circular stone well** with an opening of **radius $7\text{ m}$**. Whenever it rained, the ground around the well turned muddy, so the town council decided to build a **$3.5\text{ m}$ wide paved stone walkway** all the way around it — forming a flat circular ring.

The head mason asked Maya two questions:

1. "We need paving tiles for this walkway. **How many square metres** of tiles should we order?"
2. "We will install a safety iron railing along the outer edge of the walkway. **How long** will that railing be?"

Maya saw right away: the first question measures the **surface inside** (area), and the second measures the **outer boundary length** (perimeter). Yet the walkway is a **ring**, not a full solid circle. How do we measure a ring?

By the end of this topic, Maya will have both answers. *(Spoiler: $192.5\text{ m}^2$ of tiles and $66\text{ m}$ of railing!)*

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Circumference** | The full distance around a circle's edge (its perimeter) | $2\pi r$ |
| **Semicircle** | Half of a circle cut along a diameter | Shape of a standard protractor |
| **Quadrant** | One-quarter of a circle ($90^\circ$ wedge) | Region between two perpendicular radii |
| **Ring (annulus)** | The flat region between two concentric circles | The paved walkway around the well |
| **Sector** | A wedge enclosed by two radii and the arc between them | Lawn watered by a rotating sprinkler |
| **Revolution** | One complete turn of a wheel | One full spin of a bicycle wheel |
| **Shaded region** | The specific portion of a figure whose area is asked | A square sheet with a circle cut out |

---

## Part A: Two Core Circle Formulas (Quick Recall)

Circle terms (centre, radius, diameter) appear in the [Circles chapter](../circles/circles.md), and these two formulas appeared in Topic 4 (cylinder):

| Quantity | Formula |
|---|---|
| **Circumference** (boundary length) | **$2\pi r = \pi d$** |
| **Area** (enclosed surface) | **$\pi r^2$** |

Throughout this topic, use **$\pi = \frac{22}{7}$** unless told otherwise.

**Example 1:** $r = 7\text{ cm}$
- $\text{Circumference} = 2 \times \frac{22}{7} \times 7 = \mathbf{44\text{ cm}}$
- $\text{Area} = \frac{22}{7} \times 7 \times 7 = \mathbf{154\text{ cm}^2}$

**Example 2:** A circle has circumference $88\text{ cm}$. Find its area.
- $2\pi r = 88 \implies 2 \times \frac{22}{7} \times r = 88 \implies \mathbf{r = 14\text{ cm}}$
- $\text{Area} = \frac{22}{7} \times 14 \times 14 = \mathbf{616\text{ cm}^2}$

**Check:** $2 \times \frac{22}{7} \times 14 = 88$ ✅

### Where Does $\pi r^2$ Come From? (A Paper-Cutting Experiment)

Cut out a paper circle and slice it from the centre into **$16$ narrow wedges**, like slender slices of pizza. Now arrange those wedges side by side, alternating points up and points down:

```
   /\/\/\/\/\/\/\/\
  /\/\/\/\/\/\/\/\/       <- half facing up, half facing down
  |<----- πr ----->|
      height = r
```

- Top and bottom combined edge length $=$ circumference $= 2\pi r$, so the **top edge alone** $= \frac{1}{2} \times 2\pi r = \mathbf{\pi r}$.
- Height of the strip $=$ length of each wedge $= \mathbf{r}$.
- The thinner you slice the wedges, the closer this shape gets to an exact **rectangle**!

$$\text{Area of rectangle} = \text{length} \times \text{width} = \pi r \times r = \mathbf{\pi r^2}$$

*(This is a visual intuition; the full rigorous proof comes in calculus.)*

---

## Part B: Semicircle and Quadrant

### Semicircle (Half Circle)

- **Area** $= \frac{1}{2}\pi r^2$
- **Perimeter** $= \text{curved arc} + \text{straight diameter} = \mathbf{\pi r + 2r}$

Here lies the single most common trap: people write only $\pi r$ and **forget to add the straight diameter edge!** If you wrap string completely around a semicircular protractor, the string runs along the curved rim *and* back across the flat base.

**Example 3:** A semicircle of radius $r = 7\text{ cm}$ (like a protractor)
- $\text{Area} = \frac{1}{2} \times 154 = \mathbf{77\text{ cm}^2}$
- $\text{Perimeter} = \left(\frac{22}{7} \times 7\right) + 2 \times 7 = 22 + 14 = \mathbf{36\text{ cm}}$

### Quadrant (Quarter Circle)

- **Area** $= \frac{1}{4}\pi r^2$
- **Perimeter** $= \frac{1}{4} \times 2\pi r + 2r = \frac{1}{2}\pi r + 2r$ (curved quarter-arc $+$ two radii)

**Example 4:** A quadrant of radius $r = 14\text{ cm}$
- $\text{Area} = \frac{1}{4} \times 616 = \mathbf{154\text{ cm}^2}$
- $\text{Perimeter} = \frac{1}{4} \times 88 + 2 \times 14 = 22 + 28 = \mathbf{50\text{ cm}}$

---

## Part C: Circular Ring (Annulus)

Now let us solve Maya's paved walkway. A ring is the flat band trapped between two concentric circles:

```
         _______
      .'  _____  '.
     /  .'     '.  \
    |  |  well   |  |    <- inner circle: r
    |  |   (r)   |  |
     \  '._____.'  /     <- outer circle: R
      '._________.'
        walkway = ring
```

**$\text{Area of ring} = \text{area of larger circle} - \text{area of smaller circle}$**

$$\mathbf{\text{Area} = \pi R^2 - \pi r^2 = \pi(R^2 - r^2)}$$

Using the difference of two squares from [Factorisation Topic 4](../factorisation/factorisation-part4.md), we can factor $R^2 - r^2$:

$$\mathbf{\text{Area} = \pi(R + r)(R - r)}$$

This factored form makes the arithmetic dramatically easier!

### Example 5: Maya's Stone Walkway

- Radius of the well $r = 7\text{ m}$
- Walkway is $3.5\text{ m}$ wide, so outer radius $R = 7 + 3.5 = 10.5\text{ m}$

$$\text{Area} = \frac{22}{7} \times (10.5 + 7)(10.5 - 7) = \frac{22}{7} \times 17.5 \times 3.5 = \frac{22}{7} \times 61.25 = \mathbf{192.5\text{ m}^2}$$

Railing along the outer edge $= 2\pi R = 2 \times \frac{22}{7} \times 10.5 = \mathbf{66\text{ m}}$.

If tiles cost $\$40$ per $\text{m}^2$, the tiling cost $= 192.5 \times \$40 = \mathbf{\$7{,}700}$.

**Check (direct subtraction):** $\pi R^2 = \frac{22}{7} \times 110.25 = 346.5$, $\pi r^2 = 154$, difference $= 346.5 - 154 = 192.5$ ✅

### Example 6: Path Around a Circular Park

A circular park has radius $21\text{ m}$. A path $3.5\text{ m}$ wide runs around the **outside** of it. Find the area of the path.

- $r = 21\text{ m}$, $R = 21 + 3.5 = 24.5\text{ m}$
- $\text{Area} = \frac{22}{7} \times (24.5 + 21)(24.5 - 21) = \frac{22}{7} \times 45.5 \times 3.5 = \mathbf{500.5\text{ m}^2}$

### Example 7: Ring from Inner and Outer Circumferences

A circular running track has an inner circumference of $88\text{ m}$ and an outer circumference of $132\text{ m}$. Find the area of the track.

- $2\pi r = 88 \implies r = 14\text{ m}$
- $2\pi R = 132 \implies R = 21\text{ m}$
- $\text{Area} = \frac{22}{7} \times (21 + 14)(21 - 14) = \frac{22}{7} \times 35 \times 7 = \mathbf{770\text{ m}^2}$

Notice: the width of the track is $R - r = \mathbf{7\text{ m}}$. Mistakenly using $\pi(R - r)^2$ would give $\pi \times 49 = 154$, which is completely wrong!

---

## Part D: Distance Travelled by a Wheel

When a wheel completes one full turn (**revolution**), it rolls forward across the ground by a distance **equal to its circumference**. Imagine dipping the tyre edge in wet paint: after one full spin, the paint line left on the road measures $2\pi r$.

$$\mathbf{\text{1 revolution} = \text{circumference} = 2\pi r}$$
$$\mathbf{\text{Total distance} = \text{number of revolutions} \times 2\pi r}$$
$$\mathbf{\text{Number of revolutions} = \text{total distance} \div 2\pi r}$$

### Example 8: How Many Revolutions?

A bicycle wheel has diameter $70\text{ cm}$. How many revolutions does it make to travel $1.1\text{ km}$?

- $\text{Circumference} = \pi d = \frac{22}{7} \times 70 = 220\text{ cm}$
- $1.1\text{ km} = 1{,}100\text{ m} = 110{,}000\text{ cm}$
- $\text{Revolutions} = 110{,}000 \div 220 = \mathbf{500}$

### Example 9: How Far Does It Travel?

A car wheel has radius $21\text{ cm}$. How far does the car travel in $1{,}000$ revolutions?

- $\text{Circumference} = 2 \times \frac{22}{7} \times 21 = 132\text{ cm}$
- $\text{Distance} = 1{,}000 \times 132 = 132{,}000\text{ cm} = \mathbf{1.32\text{ km}}$

Always match units ($\text{cm}$ vs. $\text{km}$) before dividing, or your answer will be off by powers of $10$!

---

## Part E: Sector and Arc Length

In [Circles Topic 2](../circles/circles-part2.md), we measured arcs in degrees and glimpsed arc length. Now we complete the picture.

If a central angle measures **$\theta$**, that wedge represents the fraction **$\frac{\theta}{360}$** of a full $360^\circ$ circle. Therefore:

$$\mathbf{\text{Arc length} = \frac{\theta}{360} \times 2\pi r}$$
$$\mathbf{\text{Area of sector} = \frac{\theta}{360} \times \pi r^2}$$
$$\mathbf{\text{Perimeter of sector} = \text{arc length} + 2r}$$

| $\theta$ | Fraction of full circle | Special name |
|---|---|---|
| $360^\circ$ | Whole | Circle |
| $180^\circ$ | $\frac{1}{2}$ | Semicircle |
| $90^\circ$ | $\frac{1}{4}$ | Quadrant |
| $60^\circ$ | $\frac{1}{6}$ | |
| $30^\circ$ | $\frac{1}{12}$ | |

### Example 10: A $90^\circ$ Sector with $r = 14\text{ cm}$

- $\text{Arc} = \frac{1}{4} \times 88 = \mathbf{22\text{ cm}}$
- $\text{Area} = \frac{1}{4} \times 616 = \mathbf{154\text{ cm}^2}$
- $\text{Perimeter} = 22 + 28 = \mathbf{50\text{ cm}}$ *(This is the exact same quadrant as Example 4!)*

### Example 11: Lawn Sprinkler

A garden sprinkler sprays water up to $21\text{ m}$ away and sweeps back and forth through an angle of **$60^\circ$**. How much lawn does it water?

- $\text{Area} = \frac{60}{360} \times \frac{22}{7} \times 21 \times 21 = \frac{1}{6} \times 1{,}386 = \mathbf{231\text{ m}^2}$
- Curved outer edge of the watered patch $= \frac{1}{6} \times 132 = \mathbf{22\text{ m}}$

### Example 12: Car Windscreen Wiper

A car's windscreen wiper sweeps a radius of $21\text{ cm}$ through an angle of **$120^\circ$**. How much glass does it clear? *(For simplicity, assume the blade cleans all the way from the pivot.)*

- $\text{Area} = \frac{120}{360} \times 1{,}386 = \frac{1}{3} \times 1{,}386 = \mathbf{462\text{ cm}^2}$

### Example 13: Finding the Angle from Arc Length

In a circle of radius $r = 21\text{ cm}$, an arc has length $11\text{ cm}$. Find the angle at the centre.

- Full circumference $= 132\text{ cm}$
- $\dfrac{\theta}{360} = \dfrac{11}{132} = \dfrac{1}{12}$
- $\theta = \dfrac{360^\circ}{12} = \mathbf{30^\circ}$

---

## Part F: Combined Shapes (Shaded Regions)

Real-world designs rarely use just one shape alone. The rule is straightforward:

$$\mathbf{\text{Shaded area} = \text{larger area} - \text{cut-out area}} \quad (\text{or add separate pieces together})$$

### Example 14: Circle Cut from a Square

The largest possible circle ($r = 7\text{ cm}$) is drawn inside a square of side $14\text{ cm}$. Find the remaining (shaded) area.

- $\text{Square} = 14 \times 14 = 196\text{ cm}^2$
- $\text{Circle} = 154\text{ cm}^2$
- $\text{Shaded} = 196 - 154 = \mathbf{42\text{ cm}^2}$

### Example 15: A Running Track Field

A sports field has a central rectangular section measuring $50\text{ m} \times 28\text{ m}$, with a **semicircle** attached to each of the two shorter ends (diameter $28\text{ m}$, so $r = 14\text{ m}$).

```
       ___________________
     /|                   |\
    ( |   50 m × 28 m     | )
     \|___________________|/
   semicircle         semicircle
```

- $\text{Area} = \text{rectangle} + \text{two semicircles} = 50 \times 28 + \frac{22}{7} \times 14 \times 14 = 1{,}400 + 616 = \mathbf{2{,}016\text{ m}^2}$
- $\text{Perimeter}$ (outer boundary only) $= 2 \times 50 + 2\pi r = 100 + 88 = \mathbf{188\text{ m}}$

Notice: the **$28\text{ m}$ widths are inside** the field, so they do *not* belong to the outer perimeter! Meanwhile, the two semicircular ends join to form one full circle's circumference ($2\pi r$).

### Example 16: Quadrants at the Corners of a Square

Four quadrants of radius $7\text{ cm}$ are cut out from the four corners of a square of side $28\text{ cm}$. Find the remaining area.

- Four quadrants $=$ one full circle $= \frac{22}{7} \times 7 \times 7 = 154\text{ cm}^2$
- $\text{Square} = 28 \times 28 = 784\text{ cm}^2$
- $\text{Remaining area} = 784 - 154 = \mathbf{630\text{ cm}^2}$

---

## Common Pitfalls to Avoid

1. **Mistake 1: Using diameter instead of radius.**
   If diameter is $14\text{ cm}$, then $r = 7\text{ cm}$. Computing $\frac{22}{7} \times 14 \times 14 = 616$ makes the area $4$ times too large. Always halve diameter to get $r$ first.

2. **Mistake 2: Forgetting the diameter in a semicircle's perimeter.**
   For $r = 7\text{ cm}$, the perimeter of a semicircle is not $22\text{ cm}$ — it is **$22 + 14 = 36\text{ cm}$**. Likewise, a quadrant's perimeter must include $+ 2r$.

3. **Mistake 3: Writing $\pi(R - r)^2$ for the area of a ring.**
   A ring's area is $\pi(R^2 - r^2) = \pi(R + r)(R - r)$, **never $\pi(R - r)^2$**. In Example 7, $\pi(R - r)^2$ gives $154$, whereas the true answer is $770$.

4. **Mistake 4: Dividing $\theta$ by $180$ or $100$ instead of $360$.**
   A full circle is $360^\circ$, so the fraction is always **$\frac{\theta}{360}$**.

5. **Mistake 5: Mixing up arc length and sector area.**
   Arc length uses **$2\pi r$** (length in $\text{cm}$); sector area uses **$\pi r^2$** (area in $\text{cm}^2$). Check the units to stay on track.

6. **Mistake 6: Adding interior lines into the perimeter of a combined figure.**
   In Example 15, the two $28\text{ m}$ internal edges are not part of the outer boundary. Perimeter measures **only the outside edge**.

7. **Mistake 7: Mixing units.**
   Watch out for $\text{cm}$ vs. $\text{km}$ in wheel problems, or $\text{m}^2$ vs. $\text{cm}^2$ in area problems. Convert all quantities to the same unit first.

---

## Quick Recap

- **$\text{Circumference} = 2\pi r = \pi d$**, **$\text{Area} = \pi r^2$** (with $\pi = \frac{22}{7}$).
- Visual check for $\pi r^2$: slicing a circle into thin wedges and alternating them forms a rectangle of size $\pi r \times r$.
- **Semicircle:** area $\frac{1}{2}\pi r^2$, perimeter **$\pi r + 2r$**.
- **Quadrant:** area $\frac{1}{4}\pi r^2$, perimeter $\frac{1}{2}\pi r + 2r$.
- **Ring (annulus):** area **$\pi(R^2 - r^2) = \pi(R + r)(R - r)$**.
- **Wheel:** $1\text{ revolution} = 2\pi r$; $\text{revolutions} = \text{distance} \div 2\pi r$.
- **Sector:** $\text{arc} = \frac{\theta}{360} \times 2\pi r$, $\text{area} = \frac{\theta}{360} \times \pi r^2$, $\text{perimeter} = \text{arc} + 2r$.
- **Shaded region:** $\text{larger area} - \text{cut-out area}$; perimeter counts only the outer boundary.

---

## Practice Questions

1. Find the circumference and the area of a circle of radius $21\text{ cm}$.

2. The circumference of a circle is $44\text{ cm}$. Find its area.

3. Find the area and the perimeter of a semicircle of diameter $28\text{ cm}$.

4. A circular garden of radius $35\text{ m}$ has a path $7\text{ m}$ wide running around it on the outside. Find the area of the path.

5. The diameter of a wheel is $56\text{ cm}$. How many revolutions will it make to cover $352\text{ m}$?

6. Find the length of the arc and the area of the sector of a circle of radius $21\text{ cm}$, if the angle at the centre is $60^\circ$.

7. The largest possible circle is cut out from a square sheet of side $21\text{ cm}$. Find the area of the remaining sheet.

8. State true or false:
   (a) The perimeter of a semicircle of radius $r$ is $\pi r$.
   (b) The area of a ring with outer radius $R$ and inner radius $r$ is $\pi(R - r)^2$.
   (c) If the radius of a circle is doubled, its area becomes $4$ times larger.
   (d) A sector with a central angle of $90^\circ$ is a quadrant.

9. The inner boundary of a running track has two straight parts of $80\text{ m}$ each, joined by two semicircles of diameter $42\text{ m}$. Find the length of the inner boundary.

### Answers

1. $C = 2 \times \frac{22}{7} \times 21 = \mathbf{132\text{ cm}}$.
   $A = \frac{22}{7} \times 21 \times 21 = \mathbf{1{,}386\text{ cm}^2}$.

2. $2\pi r = 44 \implies r = 7\text{ cm}$.
   $\text{Area} = \frac{22}{7} \times 7 \times 7 = \mathbf{154\text{ cm}^2}$.

3. $r = 14\text{ cm}$.
   $\text{Area} = \frac{1}{2} \times \frac{22}{7} \times 14 \times 14 = \frac{1}{2} \times 616 = \mathbf{308\text{ cm}^2}$.
   $\text{Perimeter} = \pi r + 2r = 44 + 28 = \mathbf{72\text{ cm}}$.

4. $r = 35\text{ m}$, $R = 35 + 7 = 42\text{ m}$.
   $\text{Area} = \frac{22}{7} \times (42 + 35)(42 - 35) = \frac{22}{7} \times 77 \times 7 = \mathbf{1{,}694\text{ m}^2}$.

5. $\text{Circumference} = \frac{22}{7} \times 56 = 176\text{ cm}$.
   $352\text{ m} = 35{,}200\text{ cm}$.
   $\text{Revolutions} = 35{,}200 \div 176 = \mathbf{200}$.

6. $60^\circ = \frac{1}{6}$ of a full circle.
   $\text{Arc} = \frac{1}{6} \times 132 = \mathbf{22\text{ cm}}$.
   $\text{Area} = \frac{1}{6} \times 1{,}386 = \mathbf{231\text{ cm}^2}$.

7. Radius of circle $r = \frac{21}{2} = 10.5\text{ cm}$.
   $\text{Circle} = \frac{22}{7} \times 10.5 \times 10.5 = 346.5\text{ cm}^2$.
   $\text{Square} = 21 \times 21 = 441\text{ cm}^2$.
   $\text{Remaining} = 441 - 346.5 = \mathbf{94.5\text{ cm}^2}$.

8. (a) **False** ❌. $\text{Perimeter} = \pi r + 2r$ (you must add the diameter).
   (b) **False** ❌. $\text{Area} = \pi(R^2 - r^2) = \pi(R + r)(R - r)$.
   (c) **True** ✅. $\pi(2r)^2 = 4\pi r^2$.
   (d) **True** ✅. $\frac{90}{360} = \frac{1}{4}$.

9. Two semicircles form one full circle's boundary: $2 \times \frac{22}{7} \times 21 = 132\text{ m}$.
   Two straight stretches: $2 \times 80 = 160\text{ m}$.
   $\text{Total} = 160 + 132 = \mathbf{292\text{ m}}$.

---

If all these circle pieces ever feel tangled up, remember one unifying rule: **every piece is just a fraction of a full circle.** A semicircle is $\frac{1}{2}$, a quadrant is $\frac{1}{4}$, and a sector is $\frac{\theta}{360}$. Take that fraction of $\pi r^2$ for area, that fraction of $2\pi r$ for the curved arc, and never forget to add any straight edges to the perimeter. You have got this!

**What comes next?** In the final topic of the chapter, we look at 3D solids whose **cross-section stays completely uniform** all along their length — like a prism, a sloped swimming pool, or a canal — and see how one simple formula ties cuboids, cylinders, and prisms together!
