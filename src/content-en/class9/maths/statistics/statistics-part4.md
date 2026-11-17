# Chapter: Statistics (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [statistics-part3.md](statistics-part3.md).** (Topic 1 begins in [statistics.md](statistics.md).)
> **Topics covered in this file:**
> 4. Frequency Polygons

---

# Topic 4: Frequency Polygons

In Topic 3, we learned how to turn data into **pictures**: bar graphs (Elena's community rainfall chart), histograms (seedling heights with touching bars), and adjusted heights for unequal class widths (such as the $0\text{–}20$ interval scaling from height $8$ down to $4$). A histogram shows at a glance which interval holds the most observations.

There is one drawback, though. If you try to compare **two separate data sets on the same set of axes**, two histograms overlap and cover each other up, turning the graph into a jumble. In this topic, we will learn a graph that grows directly out of a histogram yet shows the **shape** of the data far more cleanly: the **frequency polygon**.

---

## Dr. Bennett's Clinic Story

In a quiet town, **Dr. Bennett** runs a neighbourhood medical clinic. Every month, he records the ages of all patients who visit.

Here were his figures for October:

| Age (years) | 10–20 | 20–30 | 30–40 | 40–50 | 50–60 | 60–70 |
|---|---|---|---|---|---|---|
| Patients | 6 | 10 | 14 | 12 | 8 | 4 |

Then November arrived, bringing cold weather and a wave of seasonal flu. The numbers shifted sharply:

| Age (years) | 10–20 | 20–30 | 30–40 | 40–50 | 50–60 | 60–70 |
|---|---|---|---|---|---|---|
| Patients | 12 | 9 | 7 | 8 | 11 | 13 |

Dr. Bennett wanted to know: **"During the flu season, who fell ill more often — children and seniors, or middle-aged adults?"**

He drew histograms for both months. When he tried placing both on the same sheet, the bars collided and obscured one another. Then his clinic nurse suggested: "Dr. Bennett, just mark the **midpoint of the top edge** of each bar and connect those dots with straight lines. Use two different colours for the two months, and the answer will jump right out."

That line graph is a **frequency polygon**. By the end of this topic, we will answer Dr. Bennett's question directly from the graph.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Frequency polygon** | A closed figure formed by joining plotted points with straight line segments to show how data is distributed | The connected line for Dr. Bennett's October patients |
| **Class mark** | The midpoint of a class interval (introduced in Topic 2): $\frac{\text{Lower limit} + \text{Upper limit}}{2}$ | Class mark of $20\text{–}30$ is $25$ |
| **Zero-frequency class** (imaginary class) | An extra class added just before the first class and just after the last class, each given frequency $0$ | $0\text{–}10$ and $70\text{–}80$ when the data runs from $10$ to $70$ |
| **Shape of a distribution** | The overall visual pattern of where data rises, peaks, and falls | A central "peak" in middle age during October |
| **Polygon** | A closed geometric figure bounded by straight line segments | Triangles, quadrilaterals, and a frequency polygon |

---

## Part A: What Is a Frequency Polygon, and Why Use It?

A frequency polygon is a **line graph** built with these rules:
- The **$x$-axis** marks the **class mark** of each interval.
- The **$y$-axis** marks the **frequency** of that interval.
- Consecutive points are joined by **straight line segments** (using a ruler).
- Both ends are brought **down to the $x$-axis** to close the shape.

**Why do we need this when we already have histograms?**

1. **The shape stands out immediately.** The rising and falling path shows where data forms a "peak" or a "valley."
2. **Multiple data sets fit on one graph.** Two histograms obscure one another, whereas two frequency polygons (in different colours or line styles) sit cleanly side by side.
3. **Easy to construct.** Even without drawing a histogram first, you can plot it straight from the frequency table (Part C).

---

## Part B: Method 1: Drawing a Frequency Polygon from a Histogram

First picture the histogram for Dr. Bennett's **October** data (drawn just like in Topic 3: class limits on the $x$-axis, touching bars).

**Steps:**
1. Mark the **midpoint of the top edge** of every bar. This point sits directly above the class mark, at height equal to the frequency.
2. Before the first class ($10\text{–}20$), imagine an extra **zero-frequency class $0\text{–}10$** with frequency $0$. Its midpoint lies on the $x$-axis at **$5$**.
3. After the last class ($60\text{–}70$), imagine an extra **zero-frequency class $70\text{–}80$** with frequency $0$. Its midpoint lies on the $x$-axis at **$75$**.
4. Connect all midpoints from **left to right with straight line segments**.

### Table of Points (October)

| Class | Class Mark ($x$) | Frequency ($y$) | Point |
|---|---|---|---|
| 0–10 (imaginary) | $(0 + 10)/2 = \mathbf{5}$ | 0 | $(5, 0)$ |
| 10–20 | $(10 + 20)/2 = \mathbf{15}$ | 6 | $(15, 6)$ |
| 20–30 | $(20 + 30)/2 = \mathbf{25}$ | 10 | $(25, 10)$ |
| 30–40 | $(30 + 40)/2 = \mathbf{35}$ | 14 | $(35, 14)$ |
| 40–50 | $(40 + 50)/2 = \mathbf{45}$ | 12 | $(45, 12)$ |
| 50–60 | $(50 + 60)/2 = \mathbf{55}$ | 8 | $(55, 8)$ |
| 60–70 | $(60 + 70)/2 = \mathbf{65}$ | 4 | $(65, 4)$ |
| 70–80 (imaginary) | $(70 + 80)/2 = \mathbf{75}$ | 0 | $(75, 0)$ |

**Check:** Sum of real frequencies $= 6 + 10 + 14 + 12 + 8 + 4 = \mathbf{54}$ patients. Adding the imaginary classes adds $0$, leaving the total unchanged ✅.

### Sketch of the Graph

Each `●` is a plotted point; connect them left to right with a ruler. (This sketch gives the layout; on graph paper, pick a clean scale such as $1\text{ cm} = 10\text{ years}$ and $1\text{ cm} = 2\text{ patients}$.)

```
 f
14 |                    ●
12 |                          ●
10 |              ●
 8 |                                ●
 6 |        ●
 4 |                                      ●
 2 |
 0 +--●-----+-----+-----+-----+-----+-----+-----●--> age (years)
      5    15    25    35    45    55    65    75
```

**What do we see?** The line climbs from $15$, **peaks at $35$** (ages $30\text{–}40$ had the most visits), and then slopes downward — forming a clear single "mountain."

### Why Add the Imaginary Zero-Frequency Classes?

If we started at $(15, 6)$ and stopped at $(65, 4)$, the path would **hang in mid-air** instead of forming a closed polygon. Dropping both ends down to the $x$-axis achieves two things:
- it **closes the figure** (making it a true polygon), and
- it ensures the **area under the frequency polygon equals the area of the histogram**.

### Why Are the Areas Equal? (The Intuition)

When a straight segment joins the top midpoints of two adjacent bars, that line:
- **slices a small triangle off** the corner of one bar (leaving it outside the polygon), and
- **adds an identical triangle** just outside the neighbouring bar (pulling it inside the polygon).

Those two triangles are **congruent** (half of the same class width as base, and the same height difference), so every bit of area cut out is replaced by an equal area gained. Therefore, whenever all classes have equal width, **the area under the frequency polygon equals the total area of the histogram**. (We explored congruent triangles in [Congruence of Triangles](../congruence-of-triangles/congruence-of-triangles.md).)

---

## Part C: Method 2: Drawing a Frequency Polygon Without a Histogram

You do not actually have to draw a histogram first. You can construct the frequency polygon directly from the frequency table.

**Steps:**
1. Calculate the **class mark** for each class.
2. Plot each point $(\text{class mark}, \text{frequency})$.
3. Add one imaginary class mark before the first class and one after the last class, each with frequency **$0$**.
4. Join all points from left to right using **straight lines**.

### Example 2: Household Water Usage

The daily water consumption (in litres) of $50$ homes in a neighbourhood is recorded below:

| Water (litres) | 200–300 | 300–400 | 400–500 | 500–600 | 600–700 |
|---|---|---|---|---|---|
| Households | 5 | 11 | 18 | 10 | 6 |

**Step 1: Find the class marks**

| Class | Class Mark | Frequency | Point |
|---|---|---|---|
| 100–200 (imaginary) | $(100 + 200)/2 = \mathbf{150}$ | 0 | $(150, 0)$ |
| 200–300 | $(200 + 300)/2 = \mathbf{250}$ | 5 | $(250, 5)$ |
| 300–400 | $(300 + 400)/2 = \mathbf{350}$ | 11 | $(350, 11)$ |
| 400–500 | $(400 + 500)/2 = \mathbf{450}$ | 18 | $(450, 18)$ |
| 500–600 | $(500 + 600)/2 = \mathbf{550}$ | 10 | $(550, 10)$ |
| 600–700 | $(600 + 700)/2 = \mathbf{650}$ | 6 | $(650, 6)$ |
| 700–800 (imaginary) | $(700 + 800)/2 = \mathbf{750}$ | 0 | $(750, 0)$ |

**Check:** $5 + 11 + 18 + 10 + 6 = \mathbf{50}$ households ✅.

**Step 2:** Plot these $7$ points and connect them with straight line segments. The polygon starts at $(150, 0)$, **reaches its peak at $(450, 18)$**, and closes at $(750, 0)$.

**Meaning:** Most households in this neighbourhood use around $400\text{–}500$ litres of water per day.

**Note:** Each imaginary class uses the same class width ($100$) as the real classes. That is why the first zero point sits at $250 - 100 = 150$, and the last sits at $650 + 100 = 750$.

### Example 3: Working Backwards: Building a Table from a Polygon

The vertices of a frequency polygon are $(15, 0), (25, 4), (35, 9), (45, 6), (55, 0)$. Construct the frequency table.

- Distance between consecutive class marks $= 25 - 15 = \mathbf{10}$, so each class has width $10$.
- The first and last points (with frequency $0$) belong to the imaginary classes.
- A class mark of $25$ with width $10$ corresponds to the class **$20\text{–}30$** (from $25 - 5$ to $25 + 5$).

| Class | 20–30 | 30–40 | 40–50 |
|---|---|---|---|
| Frequency | 4 | 9 | 6 |

**Check:** Recalculate the class marks: $(20 + 30)/2 = 25$ ✅, $(30 + 40)/2 = 35$ ✅, $(40 + 50)/2 = 45$ ✅.

---

## Part D: Comparing Two Data Sets on the Same Graph

Now let us answer Dr. Bennett's original question. Here are the plotted points for both October and November:

| Class Mark | 5 | 15 | 25 | 35 | 45 | 55 | 65 | 75 |
|---|---|---|---|---|---|---|---|---|
| October ($\text{●}$) | 0 | 6 | 10 | 14 | 12 | 8 | 4 | 0 |
| November ($\text{◆}$) | 0 | 12 | 9 | 7 | 8 | 11 | 13 | 0 |

Plot both sets on the **same axes** — October with `●` and November with `◆` (on graph paper, use two distinct colours).

```
 f
14 |                    ●
13 |                                      ◆
12 |        ◆                 ●
11 |                                ◆
10 |              ●
 9 |              ◆
 8 |                          ◆     ●
 7 |                    ◆
 6 |        ●
 5 |
 4 |                                      ●
 3 |
 2 |
 1 |
 0 +--●-----+-----+-----+-----+-----+-----+-----●--> age (years)
      5    15    25    35    45    55    65    75
```

*(Both polygons meet the $x$-axis at $5$ and $75$. The sketch shows the relative positions.)*

**Reading the comparison:**
- **October's curve** peaks in the middle (at $35$, height $14$): a central **hill**. During a typical month, middle-aged adults formed the largest share of patients.
- **November's curve** rises high at both ends ($12$ at age $15$, and $13$ at age $65$) and dips in the middle ($7$ at age $35$): a **valley** or "U" shape.
- **Answer:** During the flu outbreak, **young people ($10\text{–}20$) and seniors ($60\text{–}70$)** fell ill much more often.

**More insights straight from the graph:**
- October total $= 6 + 10 + 14 + 12 + 8 + 4 = \mathbf{54}$. November total $= 12 + 9 + 7 + 8 + 11 + 13 = \mathbf{60}$.
- Largest gap between the two months occurs in the $60\text{–}70$ group: $13 - 4 = \mathbf{9}$ more patients in November.
- Around $20\text{–}30$ (class mark $25$), the two months are almost identical ($10$ vs. $9$).

This is the real superpower of a frequency polygon: **one graph, two stories, crystal-clear comparison.**

---

## Part E: Convert Inclusive Classes First

Sometimes a table has inclusive classes like $11\text{–}15, 16\text{–}20, 21\text{–}25, \dots$ Here one class stops at $15$ and the next starts at $16$, leaving a **gap**. As we saw in Topic 2, we convert **inclusive** classes into **exclusive** (gap-free) form first.

### Example 4

Ages of young readers visiting a public library:

| Age (years) | 11–15 | 16–20 | 21–25 | 26–30 |
|---|---|---|---|---|
| Readers | 3 | 7 | 9 | 5 |

**Step 1: Close the gaps.** $\text{Gap} = 16 - 15 = 1$; half $= 0.5$. Subtract $0.5$ from every lower limit and add $0.5$ to every upper limit.

| Adjusted Class | 10.5–15.5 | 15.5–20.5 | 20.5–25.5 | 25.5–30.5 |
|---|---|---|---|---|
| Readers | 3 | 7 | 9 | 5 |

**Step 2: Class marks.**
- $(10.5 + 15.5)/2 = \mathbf{13}$
- $(15.5 + 20.5)/2 = \mathbf{18}$
- $(20.5 + 25.5)/2 = \mathbf{23}$
- $(25.5 + 30.5)/2 = \mathbf{28}$

**Check:** Notice that the original inclusive intervals give the exact same class marks: $(11 + 15)/2 = 13$ ✅, $(26 + 30)/2 = 28$ ✅. (The midpoint stays the same; only the boundaries shift.)

**Step 3: Imaginary zero-frequency classes.** Class width $= 15.5 - 10.5 = 5$.
- Before the first class: $5.5\text{–}10.5$, class mark **$8$**, frequency $0$.
- After the last class: $30.5\text{–}35.5$, class mark **$33$**, frequency $0$.

**Points:** $(8, 0), (13, 3), (18, 7), (23, 9), (28, 5), (33, 0)$. Connect them with straight lines.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Plotting points at class limits instead of class marks.**
   For the interval $20\text{–}30$, the point goes at $x = \mathbf{25}$ (the class mark), not at $x = 20$ or $x = 30$. Plotting at the wrong $x$-value shifts the whole polygon sideways by half a class.

2. **Mistake 2: Forgetting the imaginary zero-frequency classes.**
   Starting at $(15, 6)$ and stopping at $(65, 4)$ leaves the graph floating and breaks the equal-area property. Always anchor both ends to the $x$-axis with frequency $0$.

3. **Mistake 3: Using the wrong width for the imaginary classes.**
   If the real classes have width $10$ ($10\text{–}20, 20\text{–}30, \dots$), the imaginary classes must also have width $10$ ($0\text{–}10$ and $70\text{–}80$). The first zero point lies at $15 - 10 = \mathbf{5}$, not at $0$.

4. **Mistake 4: Connecting points with a smooth freehand curve.**
   A frequency polygon must join points with **straight line segments** (using a ruler). That is why it is called a *polygon*.

5. **Mistake 5: Plotting raw frequencies when class widths are unequal.**
   If one class is $20\text{–}40$ (width $20$) while others have width $10$, the histogram bar uses the **adjusted frequency** (Topic 3). When drawing a frequency polygon from that histogram, plot the **adjusted height**, not the raw frequency.

6. **Mistake 6: Ignoring gaps in inclusive classes.**
   With classes like $11\text{–}15, 16\text{–}20$, adjust the boundaries first (Part E) so the class width and imaginary end-classes come out accurately.

---

## Quick Recap

- **Frequency polygon** $=$ a closed figure formed by joining $(\text{class mark}, \text{frequency})$ points with straight line segments.
- **Method 1:** Mark the **midpoint** of the top edge of every histogram bar and join them.
- **Method 2:** Skip the histogram and plot $(\text{class mark}, \text{frequency})$ directly from the table.
- Add an **imaginary zero-frequency class** at both ends to close the polygon onto the $x$-axis.
- When all classes have equal width, **area under the frequency polygon $=$ area of the histogram** (each cut-off triangle matches an added triangle).
- Biggest advantage: **comparing two or more distributions cleanly on one graph**.
- Convert **inclusive classes** to exclusive form first; the class marks remain unchanged.

---

## Practice Questions

1. Find the class mark of each class: (a) $20\text{–}30$  (b) $35\text{–}45$  (c) $7.5\text{–}12.5$

2. The weekly pocket money of $24$ students is given below. Write all the points (including the two zero-frequency points) needed to draw a frequency polygon.

   | Pocket money (USD) | 50–100 | 100–150 | 150–200 | 200–250 |
   |---|---|---|---|---|
   | Students | 4 | 10 | 7 | 3 |

3. Convert the classes into exclusive form, find the class marks, and write the end points of the frequency polygon.

   | Runs scored | 11–20 | 21–30 | 31–40 | 41–50 |
   |---|---|---|---|---|
   | Batters | 2 | 6 | 9 | 3 |

4. State whether each statement is true or false.
   (a) In a frequency polygon, points are plotted at the class limits.
   (b) A frequency polygon is closed at both ends by joining it to the $x$-axis.
   (c) Two frequency distributions can be compared on the same graph using frequency polygons.
   (d) The points of a frequency polygon are joined by a smooth freehand curve.

5. The weights (in grams) of mangoes from two orchards are given below.

   | Weight (g) | 150–200 | 200–250 | 250–300 | 300–350 |
   |---|---|---|---|---|
   | Orchard P | 5 | 12 | 20 | 8 |
   | Orchard Q | 10 | 18 | 9 | 3 |

   (a) Write the points for both frequency polygons.
   (b) Which orchard mostly has heavier mangoes?
   (c) At which class mark is the difference between the two orchards the largest?

6. Why do we add a class with zero frequency at each end of a frequency polygon? Give two reasons.

7. A frequency table has the classes $10\text{–}20$ ($f = 8$), $20\text{–}40$ ($f = 14$), and $40\text{–}50$ ($f = 6$). A histogram is drawn taking width $10$ as standard. What height should the $20\text{–}40$ bar have, and where will its point lie when the frequency polygon is drawn from this histogram?

8. The points of a frequency polygon are $(5, 0), (15, 3), (25, 8), (35, 5), (45, 0)$. Write the frequency table.

### Answers

1. (a) $(20 + 30)/2 = \mathbf{25}$  (b) $(35 + 45)/2 = \mathbf{40}$  (c) $(7.5 + 12.5)/2 = \mathbf{10}$

2. Class marks: $75, 125, 175, 225$. Class width is $50$, so the imaginary class marks are $75 - 50 = 25$ and $225 + 50 = 275$.
   Points: **$(25, 0), (75, 4), (125, 10), (175, 7), (225, 3), (275, 0)$**.
   Check: $4 + 10 + 7 + 3 = 24$ students ✅

3. $\text{Gap} = 21 - 20 = 1$, half $= 0.5$. Exclusive classes: **$10.5\text{–}20.5, 20.5\text{–}30.5, 30.5\text{–}40.5, 40.5\text{–}50.5$**.
   Class marks: $(10.5 + 20.5)/2 = \mathbf{15.5}, \mathbf{25.5}, \mathbf{35.5}, \mathbf{45.5}$.
   Width is $10$, so end points: **$(5.5, 0)$** and **$(55.5, 0)$**.
   Full point list: $(5.5, 0), (15.5, 2), (25.5, 6), (35.5, 9), (45.5, 3), (55.5, 0)$.

4. (a) **False** ❌. Points are plotted at the class marks.
   (b) **True** ✅. Joined to the $x$-axis using zero-frequency imaginary classes.
   (c) **True** ✅. Comparing distributions on one set of axes is one of its biggest strengths.
   (d) **False** ❌. Points are joined using straight line segments (with a ruler).

5. (a) Class marks: $175, 225, 275, 325$; imaginary: $125$ and $375$.
   Orchard P: $(125, 0), (175, 5), (225, 12), (275, 20), (325, 8), (375, 0)$.
   Orchard Q: $(125, 0), (175, 10), (225, 18), (275, 9), (325, 3), (375, 0)$.
   (b) Orchard P peaks at **$275$**, while Orchard Q peaks at **$225$**. So **Orchard P** mostly produces heavier mangoes.
   (c) Differences: at $175$: $|5 - 10| = 5$; at $225$: $|12 - 18| = 6$; at $275$: $|20 - 9| = \mathbf{11}$; at $325$: $|8 - 3| = 5$. The largest difference is at **class mark $275$**.

6. (1) It **closes the polygon** onto the $x$-axis instead of leaving the ends hanging in mid-air. (2) For equal class widths, it makes the **area under the polygon equal to the area of the histogram**.

7. The $20\text{–}40$ interval has width $20$, twice the standard width $10$. Adjusted height $= 14 \times \frac{10}{20} = \mathbf{7}$.
   Class mark $= (20 + 40)/2 = \mathbf{30}$, so its point lies at **$(30, 7)$**.

8. Adjacent class marks differ by $10$, so class width $= 10$. $(5, 0)$ and $(45, 0)$ are the imaginary end classes.

   | Class | 10–20 | 20–30 | 30–40 |
   |---|---|---|---|
   | Frequency | 3 | 8 | 5 |

   Check: $(10 + 20)/2 = 15$ ✅, $(20 + 30)/2 = 25$ ✅, $(30 + 40)/2 = 35$ ✅

---

Keep this simple rule in mind: **plot at the class mark, connect with a ruler, and close both ends at zero.** Just like Dr. Bennett, you can now compare two months, two classes, or two orchards cleanly on a single sheet of graph paper.

**What comes next?** So far we have turned data into tables and graphs. Often, however, we want to summarise an entire data set using **just one number** — a single "typical" value. In Topic 5, we learn the first and most famous summary number: the **mean**.
