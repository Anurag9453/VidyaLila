# Chapter: Mensuration

> **Class:** 9 | **Subject:** Mathematics
> **This is a brand-new chapter.** Here we learn how to **measure** real-world objects: how much ground a plot covers, how much paint a wall needs, and how much a box can hold. We explored triangle properties in the [Triangles chapter](../triangles/triangles.md) and took our first look at area in [Quadrilaterals Topic 3](../quadrilaterals/quadrilaterals-part3.md). Now we put those ideas to work.
> **Topics covered in this file:**
> 1. Area of Triangles and Heron's Formula

---

# Topic 1: Area of Triangles and Heron's Formula

In Topic 3 of the Quadrilaterals chapter, we saw that area measures a **flat surface**, and that the area of a triangle is **$\frac{1}{2} \times \text{base} \times \text{height}$**. There is just one catch: this formula requires the **height**. In real life, measuring the height directly is not always easy. In this topic, we learn a remarkable formula that finds the area of any triangle using **only its three side lengths** — no height needed. It is called **Heron's Formula**.

---

## Leo and the Triangular Traffic Island

At a busy junction near Leo's neighbourhood, three roads meet and leave a **triangular traffic island** in the middle. The town council hired Leo's uncle, a landscaper, for a quick job: "Lay turf across this triangle. The budget is $\$20$ per square metre."

First, Leo's uncle needed the **area** of the plot. He thought, "Easy — I'll just use $\frac{1}{2} \times \text{base} \times \text{height}$."

There was one problem. Standing right in the centre of the triangle was a **massive old oak tree**. To measure the **perpendicular height** from one corner straight across to the opposite side, he would have had to run his tape measure straight through the solid tree trunk. That was impossible.

Leo said, "Uncle, we can easily walk along the kerbs on the outside. Let's just measure all three edges!"

They measured the three sides:
- First side: **$13\text{ m}$**
- Second side: **$14\text{ m}$**
- Third side: **$15\text{ m}$**

"What now?" his uncle asked. "We still don't have the height."

Leo smiled: "We don't need the height at all. Using **Heron's formula**, the three sides alone give us the area."

A few moments later, they had the answer: **$84\text{ square metres}$**. The turf cost $= 84 \times \$20 = \mathbf{\$1,680}$.

How did Leo get $84$ from $13, 14,$ and $15$? That is exactly what we will learn in this topic.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Perimeter** | The total length of a shape's **boundary** — one complete walk around it | A triangle with sides $3, 4, 5\text{ cm}$ has perimeter $= 12\text{ cm}$ |
| **Area** | The amount of flat **surface** enclosed inside the boundary | That same $3$-$4$-$5$ triangle has area $= 6\text{ cm}^2$ |
| **Square unit** | The unit of area: a $1\text{ unit} \times 1\text{ unit}$ square | $\text{cm}^2$, $\text{m}^2$ |
| **Semi-perimeter ($s$)** | **Half** of the perimeter | For the $3, 4, 5$ triangle, $s = 6$ |
| **Heron's Formula** | A formula that computes a triangle's area from its three sides alone | $\Delta = \sqrt{s(s - a)(s - b)(s - c)}$ |
| **Altitude (height)** | A perpendicular ($90^\circ$) line segment from a vertex to the opposite side | The "height" in $\frac{1}{2} \times \text{base} \times \text{height}$ |

---

## Part A: Perimeter vs. Area (A Quick Recall)

Perimeter and area are easy to mix up, so let us keep the distinction sharp:

- **Perimeter** = **walking along** the boundary. If you walk all the way around the edge of a park, the distance you cover is the perimeter. Units: **$\text{cm}, \text{m}$** (length).
- **Area** = **covering the surface** inside. If you lay turf across the park, the surface covered is the area. Units: **$\text{cm}^2, \text{m}^2$** (square units).

| Shape | Perimeter | Area |
|---|---|---|
| Rectangle ($l, b$) | $2(l + b)$ | $l \times b$ |
| Square (side $a$) | $4a$ | $a^2$ |
| Triangle (sides $a, b, c$) | $a + b + c$ | $\frac{1}{2} \times \text{base} \times \text{height}$ |

Why is a triangle's area $\frac{1}{2} \times \text{base} \times \text{height}$? As we saw in [Quadrilaterals Topic 3](../quadrilaterals/quadrilaterals-part3.md), every triangle is half of a parallelogram on the same base and between the same parallels. And we explored altitudes in [Triangles Topic 2](../triangles/triangles-part2.md).

**Example:** A triangle has base $8\text{ cm}$ and height $5\text{ cm}$.
$$\text{Area} = \frac{1}{2} \times 8 \times 5 = \mathbf{20\text{ cm}^2}$$

---

## Part B: Areas of Some Special Triangles

In certain special triangles, the height is **easy** to find. Let us review those first.

### 1. Right-Angled Triangle

In a right triangle, the two legs meet at **$90^\circ$**. Take one leg as the base, and the other leg automatically acts as the height.

$$\mathbf{\text{Area} = \frac{1}{2} \times \text{leg}_1 \times \text{leg}_2}$$

**Example:** Legs $6\text{ cm}$ and $8\text{ cm}$.
$$\text{Area} = \frac{1}{2} \times 6 \times 8 = \mathbf{24\text{ cm}^2}$$

### 2. Equilateral Triangle (All Three Sides Equal to $a$)

Here the height is not given directly, but we can derive it.

```
            A
           /|\
          / | \
       a /  |h \ a
        /   |   \
       /    |    \
      B-----D-----C
        a/2   a/2
```

Drop the altitude $AD$ from the top vertex. In an equilateral triangle, this altitude bisects the base into **two equal halves**: $BD = \frac{a}{2}$.

Now $\triangle ABD$ is a right triangle. By **Pythagoras' theorem**:

$$h^2 = a^2 - \left(\frac{a}{2}\right)^2 = a^2 - \frac{a^2}{4} = \frac{3a^2}{4}$$

$$h = \frac{\sqrt{3}}{2}a$$

Now compute the area:
$$\text{Area} = \frac{1}{2} \times a \times \frac{\sqrt{3}}{2}a$$

$$\mathbf{\text{Area} = \frac{\sqrt{3}}{4} a^2}$$

**Example:** Side $4\text{ cm}$.
$$\text{Area} = \frac{\sqrt{3}}{4} \times 16 = \mathbf{4\sqrt{3}\text{ cm}^2} \approx 4 \times 1.732 = \mathbf{6.93\text{ cm}^2}$$

### 3. Isosceles Triangle (Two Equal Sides)

In an isosceles triangle as well, the altitude drawn from the vertex between the two equal sides **bisects the base** into two equal halves (a property we proved in the Congruence of Triangles chapter).

**Example:** Equal sides $5\text{ cm}$, base $6\text{ cm}$.

```
            A
           /|\
        5 / | \ 5
         /  |h \
        B---D---C
          3   3
```

Here $BD = 3\text{ cm}$. In right triangle $ABD$:
$$h^2 = 5^2 - 3^2 = 25 - 9 = 16 \implies \mathbf{h = 4\text{ cm}}$$
$$\text{Area} = \frac{1}{2} \times 6 \times 4 = \mathbf{12\text{ cm}^2}$$

However, when a triangle is **scalene** (all three sides different), like Leo's $13$-$14$-$15\text{ m}$ island, finding the height is awkward. That is where Heron's formula shines.

---

## Part C: Heron's Formula

### A Bit of History

About **$2{,}000$ years ago**, in the city of **Alexandria** in Egypt, lived a mathematician and engineer named **Heron** (also known as Hero of Alexandria). He recorded this formula in his book *Metrica*. It was hugely practical for land surveyors, because walking around the edges of a field is simple, whereas measuring a perpendicular altitude across crops, ditches, or trees is difficult.

### The Formula

If a triangle has side lengths **$a, b, c$**, then:

**Step 1: Find the semi-perimeter ($s$).**

$$s = \frac{a + b + c}{2}$$

**Step 2: Find the area ($\Delta$).**

$$\Delta = \sqrt{s(s - a)(s - b)(s - c)}$$

That is all. No height is required.

### Why Can We Trust This Formula?

A full algebraic derivation of Heron's formula involves lengthy algebra slightly beyond Class 9, so for now let us **verify** it on triangles whose area we already know.

**Check: The $3, 4, 5$ Triangle**

This is a right triangle ($3^2 + 4^2 = 9 + 16 = 25 = 5^2$). Using the direct formula:
$$\text{Area} = \frac{1}{2} \times 3 \times 4 = \mathbf{6}$$

Now using Heron's formula:
- $s = \dfrac{3 + 4 + 5}{2} = \dfrac{12}{2} = \mathbf{6}$
- $s - a = 6 - 3 = 3$
- $s - b = 6 - 4 = 2$
- $s - c = 6 - 5 = 1$
- $\Delta = \sqrt{6 \times 3 \times 2 \times 1} = \sqrt{36} = \mathbf{6}$ ✅

Both methods give **$6$**. The formula works!

### A Handy Tip: Simplify Inside the Square Root First

When the numbers inside the square root get large, do **not** multiply them all together first! Instead, break each number into **prime factors**, group identical factors into **pairs**, and pull one number out of the square root from each pair.

For example, $\sqrt{21 \times 8 \times 7 \times 6}$:
- $21 = 3 \times 7$
- $8 = 2 \times 2 \times 2$
- $7 = 7$
- $6 = 2 \times 3$

Combine them: $2 \times 2 \times 2 \times 2 \times 3 \times 3 \times 7 \times 7 = 2^4 \times 3^2 \times 7^2$.
$$\sqrt{2^4 \times 3^2 \times 7^2} = 2^2 \times 3 \times 7 = 4 \times 3 \times 7 = \mathbf{84}$$

You get the exact answer without ever multiplying big numbers!

---

## Part D: Solved Examples

### Example 1: Leo's Traffic Island ($13, 14, 15\text{ m}$)

- $s = \dfrac{13 + 14 + 15}{2} = \dfrac{42}{2} = \mathbf{21\text{ m}}$
- $s - a = 21 - 13 = 8$
- $s - b = 21 - 14 = 7$
- $s - c = 21 - 15 = 6$
- $\Delta = \sqrt{21 \times 8 \times 7 \times 6}$

Using the prime-factor tip above: $\sqrt{2^4 \times 3^2 \times 7^2} = \mathbf{84\text{ m}^2}$.

Cost of laying turf $= 84 \times \$20 = \mathbf{\$1,680}$.

**Check:** $21 \times 8 \times 7 \times 6 = 7{,}056$, and $84 \times 84 = 7{,}056$ ✅

### Example 2: Isosceles Triangle ($5, 5, 6\text{ cm}$)

In Part B, we found its area using the height ($12\text{ cm}^2$). Now using Heron's formula:
- $s = \dfrac{5 + 5 + 6}{2} = \mathbf{8\text{ cm}}$
- $s - a = 3$, $s - b = 3$, $s - c = 2$
- $\Delta = \sqrt{8 \times 3 \times 3 \times 2} = \sqrt{144} = \mathbf{12\text{ cm}^2}$ ✅

Exact same answer!

### Example 3: Equilateral Triangle (Side $10\text{ cm}$)

- $s = \dfrac{10 + 10 + 10}{2} = \mathbf{15\text{ cm}}$
- $s - a = s - b = s - c = 5$
- $\Delta = \sqrt{15 \times 5 \times 5 \times 5} = \sqrt{1{,}875}$

Since $1{,}875 = 3 \times 5 \times 5 \times 5 \times 5 = 3 \times 5^4$:
$$\sqrt{1{,}875} = 5^2 \times \sqrt{3} = \mathbf{25\sqrt{3}\text{ cm}^2} \approx 25 \times 1.732 = \mathbf{43.3\text{ cm}^2}$$

**Check:** $\dfrac{\sqrt{3}}{4} \times 10^2 = \dfrac{\sqrt{3}}{4} \times 100 = 25\sqrt{3}$ ✅

### Example 4: Given Perimeter and Side Ratio

The perimeter of a triangular plot is **$120\text{ m}$**, and its sides are in the ratio **$3 : 4 : 5$**. Find its area.

Let the sides be $3x, 4x,$ and $5x$.
$$3x + 4x + 5x = 120 \implies 12x = 120 \implies \mathbf{x = 10}$$
Sides: **$30\text{ m}, 40\text{ m}, 50\text{ m}$**.

- $s = \dfrac{120}{2} = \mathbf{60\text{ m}}$
- $s - a = 30$, $s - b = 20$, $s - c = 10$
- $\Delta = \sqrt{60 \times 30 \times 20 \times 10}$

Prime factors: $60 = 2^2 \times 3 \times 5$, $30 = 2 \times 3 \times 5$, $20 = 2^2 \times 5$, $10 = 2 \times 5$.
Product $= 2^6 \times 3^2 \times 5^4$.
$$\Delta = 2^3 \times 3 \times 5^2 = 8 \times 3 \times 25 = \mathbf{600\text{ m}^2}$$

**Check:** $30, 40, 50$ forms a right triangle ($900 + 1{,}600 = 2{,}500$), so $\frac{1}{2} \times 30 \times 40 = 600$ ✅

### Example 5: Isosceles Triangle Given Base and Perimeter

An isosceles triangle has a base of **$10\text{ cm}$** and a perimeter of **$36\text{ cm}$**. Find its area.

Each equal side $= \dfrac{36 - 10}{2} = \dfrac{26}{2} = \mathbf{13\text{ cm}}$.
Sides: $13, 13, 10$.

- $s = \dfrac{36}{2} = \mathbf{18\text{ cm}}$
- $s - a = 5$, $s - b = 5$, $s - c = 8$
- $\Delta = \sqrt{18 \times 5 \times 5 \times 8} = \sqrt{3{,}600} = \mathbf{60\text{ cm}^2}$

**Check (using height):** Half the base $= 5$, so $h^2 = 13^2 - 5^2 = 169 - 25 = 144 \implies h = 12$.
$\text{Area} = \frac{1}{2} \times 10 \times 12 = 60$ ✅

### Example 6: Mixing Different Units

A triangle has sides **$50\text{ cm}, 1.2\text{ m},$ and $1.3\text{ m}$**. Find its area in $\text{cm}^2$.

First convert all sides into **one unit**: $50\text{ cm}, 120\text{ cm}, 130\text{ cm}$.

- $s = \dfrac{50 + 120 + 130}{2} = \dfrac{300}{2} = \mathbf{150\text{ cm}}$
- $s - a = 100$, $s - b = 30$, $s - c = 20$
- $\Delta = \sqrt{150 \times 100 \times 30 \times 20} = \sqrt{9{,}000{,}000} = \mathbf{3{,}000\text{ cm}^2}$

**Check:** $50^2 + 120^2 = 2{,}500 + 14{,}400 = 16{,}900 = 130^2$. It is a right triangle, so $\frac{1}{2} \times 50 \times 120 = 3{,}000$ ✅

---

## Common Pitfalls to Avoid

1. **Mistake 1: Using the full perimeter instead of $s$.**
   In the $3, 4, 5$ triangle, using $s = 12$ (the full perimeter) gives $\sqrt{12 \times 9 \times 8 \times 7} = \sqrt{6{,}048} \approx 77.8$, which is completely wrong. The correct semi-perimeter is $s = 6$, giving area $6$. Always remember: **$s$ is half the perimeter**.

2. **Mistake 2: Forgetting to take the square root at the end.**
   Stopping at $s(s - a)(s - b)(s - c) = 36$ and writing $36$ as the area leaves out the final step. The actual area is $\sqrt{36} = \mathbf{6}$.

3. **Mistake 3: Mixing different units without converting.**
   Plugging $50\text{ cm}, 1.2\text{ m}, 1.3\text{ m}$ directly into the formula as $50, 1.2, 1.3$ produces nonsense. Always convert **every length to the same unit** first.

4. **Mistake 4: Failing to check whether the three sides can form a triangle.**
   Try sides $4, 5, 10$. Since $4 + 5 = 9 < 10$, **no such triangle exists**. Applying Heron's formula gives $s = 9.5$ and $s - c = -0.5$, producing a negative number under the square root. Always verify the [triangle inequality](../congruence-of-triangles/congruence-of-triangles-part4.md) first: the sum of any two sides must be strictly **greater** than the third side.

5. **Mistake 5: Writing the wrong unit for area.**
   Area is always measured in **square units**: $\text{cm}^2$, $\text{m}^2$. Writing "$84\text{ m}$" is incorrect; it must be "$84\text{ m}^2$".

6. **Mistake 6: Writing $a$ instead of $a^2$ in the equilateral triangle formula.**
   The area is $\frac{\sqrt{3}}{4}\mathbf{a^2}$, not $\frac{\sqrt{3}}{4}a$. For side $10$, the area is $25\sqrt{3}$, not $2.5\sqrt{3}$.

---

## Quick Recap

- **Perimeter** $=$ length of the boundary ($\text{cm}, \text{m}$). **Area** $=$ surface enclosed inside ($\text{cm}^2, \text{m}^2$).
- Area of a triangle $= \frac{1}{2} \times \text{base} \times \text{height}$.
- **Right triangle:** $\frac{1}{2} \times \text{leg}_1 \times \text{leg}_2$.
- **Equilateral triangle:** $\frac{\sqrt{3}}{4}a^2$.
- **Isosceles triangle:** the altitude from the apex bisects the base; find height using Pythagoras' theorem.
- **Heron's formula:** $s = \frac{a + b + c}{2}$ and $\Delta = \sqrt{s(s - a)(s - b)(s - c)}$. No height needed.
- Factor numbers inside the square root into **prime factors** and pull out pairs to keep calculations simple.
- Always **match units** first and confirm that the three sides satisfy the **triangle inequality**.

---

## Practice Questions

1. Find the area of a triangle with sides $9\text{ cm}, 12\text{ cm},$ and $15\text{ cm}$, using Heron's formula. Check your answer using $\frac{1}{2} \times \text{base} \times \text{height}$.

2. Find the area of a triangle with sides $7\text{ cm}, 8\text{ cm},$ and $9\text{ cm}$. Leave your answer in surd form, and also give it correct to two decimal places (take $\sqrt{5} = 2.236$).

3. Find the area of an equilateral triangle of side $6\text{ cm}$, using (a) the formula $\frac{\sqrt{3}}{4}a^2$, and (b) Heron's formula.

4. An isosceles triangle has equal sides of $10\text{ cm}$ each and a base of $16\text{ cm}$. Find its area.

5. The sides of a triangle are in the ratio $5 : 12 : 13$ and its perimeter is $60\text{ cm}$. Find its area.

6. Can a triangle have sides $4\text{ cm}, 5\text{ cm},$ and $10\text{ cm}$? What goes wrong if you try to apply Heron's formula to these lengths?

7. A triangular wall has sides $26\text{ m}, 28\text{ m},$ and $30\text{ m}$. Find the cost of painting it at $\$15$ per $\text{m}^2$.

8. State whether each statement is true or false.
   (a) In Heron's formula, $s$ stands for half the perimeter.
   (b) Heron's formula needs the height of the triangle.
   (c) The area of an equilateral triangle with side $a$ is $\frac{\sqrt{3}}{4}a$.
   (d) A triangle with sides $3\text{ cm}, 4\text{ cm},$ and $5\text{ cm}$ has an area of $6\text{ cm}^2$.

9. The area of an equilateral triangle is $16\sqrt{3}\text{ cm}^2$. Find the length of its side.

### Answers

1. $s = \dfrac{9 + 12 + 15}{2} = 18$. $s - a = 9$, $s - b = 6$, $s - c = 3$.
   $\Delta = \sqrt{18 \times 9 \times 6 \times 3} = \sqrt{2{,}916} = \mathbf{54\text{ cm}^2}$.
   Check: $9^2 + 12^2 = 81 + 144 = 225 = 15^2$, so it is a right triangle: $\frac{1}{2} \times 9 \times 12 = 54$ ✅

2. $s = \dfrac{7 + 8 + 9}{2} = 12$. $s - a = 5$, $s - b = 4$, $s - c = 3$.
   $\Delta = \sqrt{12 \times 5 \times 4 \times 3} = \sqrt{720}$.
   $720 = 2^4 \times 3^2 \times 5 \implies \sqrt{720} = 2^2 \times 3 \times \sqrt{5} = \mathbf{12\sqrt{5}\text{ cm}^2}$.
   $12 \times 2.236 \approx \mathbf{26.83\text{ cm}^2}$.

3. (a) $\dfrac{\sqrt{3}}{4} \times 6^2 = \dfrac{\sqrt{3}}{4} \times 36 = \mathbf{9\sqrt{3}\text{ cm}^2}$.
   (b) $s = 9$, $s - a = s - b = s - c = 3$. $\Delta = \sqrt{9 \times 3 \times 3 \times 3} = \sqrt{243} = \sqrt{81 \times 3} = \mathbf{9\sqrt{3}\text{ cm}^2}$ ✅
   Both match ($\approx 15.59\text{ cm}^2$).

4. Sides $10, 10, 16$. $s = 18$. $s - a = 8$, $s - b = 8$, $s - c = 2$.
   $\Delta = \sqrt{18 \times 8 \times 8 \times 2} = \sqrt{2{,}304} = \mathbf{48\text{ cm}^2}$.
   Check: half the base $= 8$, so $h^2 = 100 - 64 = 36 \implies h = 6$. $\frac{1}{2} \times 16 \times 6 = 48$ ✅

5. $5x + 12x + 13x = 60 \implies 30x = 60 \implies x = 2$. Sides: $10, 24, 26\text{ cm}$.
   $s = 30$. $s - a = 20$, $s - b = 6$, $s - c = 4$.
   $\Delta = \sqrt{30 \times 20 \times 6 \times 4} = \sqrt{14{,}400} = \mathbf{120\text{ cm}^2}$.
   Check: $10^2 + 24^2 = 100 + 576 = 676 = 26^2$. $\frac{1}{2} \times 10 \times 24 = 120$ ✅

6. **No.** Because $4 + 5 = 9 < 10$, these lengths cannot form a triangle (the triangle inequality fails).
   If you apply Heron's formula anyway, $s = \frac{19}{2} = 9.5$ and $s - c = 9.5 - 10 = -0.5$. The product under the root becomes **negative** ($9.5 \times 5.5 \times 4.5 \times (-0.5) \approx -117.6$), and a negative number has no real square root — a clear signal that no such triangle exists.

7. $s = \dfrac{26 + 28 + 30}{2} = 42$. $s - a = 16$, $s - b = 14$, $s - c = 12$.
   $\Delta = \sqrt{42 \times 16 \times 14 \times 12}$.
   $42 = 2 \times 3 \times 7$, $16 = 2^4$, $14 = 2 \times 7$, $12 = 2^2 \times 3$.
   Product $= 2^8 \times 3^2 \times 7^2 \implies \Delta = 2^4 \times 3 \times 7 = \mathbf{336\text{ m}^2}$.
   Cost $= 336 \times \$15 = \mathbf{\$5,040}$.
   *(Notice this is an exact $2\times$ scaled version of Leo's $13$-$14$-$15$ triangle: doubling every side multiplies the area by $2^2 = 4$, giving $84 \times 4 = 336$ ✅)*

8. (a) **True** ✅. $s = \frac{a + b + c}{2}$.
   (b) **False** ❌. The biggest advantage of Heron's formula is that it does not need the height.
   (c) **False** ❌. The correct formula is $\frac{\sqrt{3}}{4}a^2$.
   (d) **True** ✅. $s = 6$, and $\sqrt{6 \times 3 \times 2 \times 1} = 6$.

9. $\dfrac{\sqrt{3}}{4}a^2 = 16\sqrt{3}$.
   Divide both sides by $\sqrt{3}$: $\dfrac{a^2}{4} = 16 \implies a^2 = 64 \implies \mathbf{a = 8\text{ cm}}$.
   Check: $\frac{\sqrt{3}}{4} \times 64 = 16\sqrt{3}$ ✅

---

You now have two reliable tools for finding the area of any triangle: $\frac{1}{2} \times \text{base} \times \text{height}$ when the height is known, and Heron's formula when only the three sides are given. Just like Leo and his uncle, you can calculate the area of any three-sided plot with confidence.

**In the next topic:** What if a piece of land has **four** sides instead of three? There is a simple trick: split it into **two triangles** and apply Heron's formula twice!
