# Chapter: Statistics (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [statistics-part2.md](statistics-part2.md).** (Topic 1 is in [statistics.md](statistics.md).)
> **Topics covered in this file:**
> 3. Bar Graphs and Histograms

---

# Topic 3: Bar Graphs and Histograms

In Topic 2, we counted scattered raw data with tally marks, organised it into **frequency tables** (like Liam's family shoe shop sizes), and sorted wide data into **class intervals** (like customer ages $10\text{–}20, 20\text{–}30, \dots$). We also covered class size, class marks, exclusive vs. inclusive classes, and cumulative frequency. Now our data sits neatly in a table — yet reading rows of numbers still takes a moment. In this topic, we turn that table into a **visual picture** that anyone can understand in an instant.

---

## The Community Noticeboard Story

**Elena** volunteers at the community centre in a coastal valley town. Every year after the rainy season, she receives the monthly rainfall records:

| Month | Rainfall (mm) |
|---|---|
| June | 100 |
| July | 300 |
| August | 250 |
| September | 150 |
| October | 50 |

Elena pinned this table onto the community noticeboard. People walked up, squinted at the numbers, and walked away without really taking them in. One neighbour asked her directly: "Elena, just tell me one thing — when did we get the most rain?"

The next morning, Elena drew a **vertical bar** for each month. The heavier the rainfall, the taller the bar:

```
  300 |        ███
  250 |        ███   ███
  200 |        ███   ███
  150 |        ███   ███   ███
  100 |  ███   ███   ███   ███
   50 |  ███   ███   ███   ███   ███
    0 +-------------------------------
         Jun   Jul   Aug   Sep   Oct
```

Now nobody even had to ask. The tallest bar was clearly **July**, and the shortest was **October**. The entire story stood out at a single glance.

That is the power of a graph: **a table is for reading numbers; a graph lets you see the pattern immediately.** In this topic, we will learn two closely related graphs: **bar graphs** and **histograms**.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Bar graph** | Equal-width bars drawn for separate categories, separated by equal gaps | Rainfall by month |
| **Scale** | How many units each grid square represents on an axis | $1\text{ unit} = 50\text{ mm}$ |
| **Axis** | One of the two perpendicular reference lines: horizontal ($x$-axis) and vertical ($y$-axis) | Months on the $x$-axis, $\text{mm}$ on the $y$-axis |
| **Double bar graph** | Two side-by-side bars per category used to compare two data sets | Library book loans across two years |
| **Histogram** | Touching bars (with **no gaps**) used for grouped continuous data | Plant heights $10\text{–}15, 15\text{–}20\text{ cm}, \dots$ |
| **Kink (zigzag)** | A small broken-line symbol near $0$ on an axis when the graph skips ahead | Skipping from $0$ straight to $10$ |
| **Adjusted frequency** | The scaled bar height used when class intervals have unequal widths | Covered in Part E below |

---

## Part A: Why Do We Draw Graphs?

Try a three-second test. Look at the table below and name the most borrowed type of book:

| Book Genre | Fiction | Comics | Science | History | Poetry |
|---|---|---|---|---|---|
| Times Borrowed | 40 | 50 | 30 | 20 | 10 |

You had to scan and compare the numbers one by one. Now look at the exact same data as a graph ($\text{F} = \text{Fiction}$, $\text{C} = \text{Comics}$, $\text{S} = \text{Science}$, $\text{H} = \text{History}$, $\text{P} = \text{Poetry}$):

```
   50 |        ███
   40 |  ███   ███
   30 |  ███   ███   ███
   20 |  ███   ███   ███   ███
   10 |  ███   ███   ███   ███   ███
    0 +-------------------------------
          F     C     S     H     P
```

The Comics bar leaps out immediately. As the saying goes: **a graph is for the eyes; a table is for exact calculation.** Both have their job.

---

## Part B: Bar Graphs

### When Do We Use a Bar Graph?

Use a bar graph when the data belongs to **separate categories** or **counted (discrete)** items, such as:
- Months (June, July, …)
- Book genres
- Sports or hobbies
- Number of students in different classes

There is no "in-between" category between June and July. Because the categories are separate, we leave **gaps** between the bars.

### Rules for a Bar Graph

1. **All bars must have the same width.**
2. **All gaps between bars must be equal.**
3. **The height of each bar equals its frequency** (or measured value).
4. **Choose a sensible scale.** For values from $10$ to $50$, $1\text{ unit} = 10$ works cleanly. Taking $1\text{ unit} = 1$ would make the graph awkwardly tall.
5. **Label both axes** ($x$-axis and $y$-axis) and give the graph a clear **title**.
6. Start the $y$-axis **at $0$**. Starting higher exaggerates small differences and misleads the reader.

### Steps to Draw a Bar Graph

Using the library book data:

**Step 1:** Label the categories along the $x$-axis: Fiction, Comics, Science, History, Poetry.

**Step 2:** The largest value is $50$, so choose the scale **$1\text{ grid unit} = 10\text{ books}$**. Mark $0, 10, 20, 30, 40, 50$ up the $y$-axis.

**Step 3:** Draw equal-width bars with equal spacing, matching each height to its value:
- Fiction: $40$ ($4$ units)
- Comics: $50$ ($5$ units)
- Science: $30$ ($3$ units)
- History: $20$ ($2$ units)
- Poetry: $10$ ($1$ unit)

**Step 4:** Add a title ("Books Borrowed from the School Library by Genre") and label the axes ("Book Genre" and "Times Borrowed").

The finished graph is shown in Part A above.

### Reading a Bar Graph

From that same library graph:

| Question | Answer | How |
|---|---|---|
| Which genre is most popular? | Comics ($50$) | Tallest bar |
| Which genre is least popular? | Poetry ($10$) | Shortest bar |
| Difference between Comics and Poetry? | $40$ | $50 - 10$ |
| Total loans across all genres? | $150$ | $40 + 50 + 30 + 20 + 10$ |
| Fraction of loans that were Comics? | $\frac{1}{3}$ | $50 \div 150$ |

### Horizontal Bar Graphs

Bars can also run **horizontally**. This works especially well when category names are long. Here each $\text{█} = 5\text{ books}$:

```
Fiction | ████████ 40
Comics  | ██████████ 50
Science | ██████ 30
History | ████ 20
Poetry  | ██ 10
```

The rules stay the same: equal bar thickness, equal gaps, and length proportional to value.

### Double Bar Graphs (Comparing Two Sets)

Suppose the library tracked book loans across two consecutive years:

| Genre | Last Year ($\text{█}$) | This Year ($\text{░}$) |
|---|---|---|
| Fiction (F) | 40 | 30 |
| Comics (C) | 50 | 60 |
| Science (S) | 30 | 40 |

On each category, we draw **two bars side by side** using two different colours or shading styles:

```
   60 |            ░░
   50 |          ██░░
   40 |  ██      ██░░      ░░
   30 |  ██░░    ██░░    ██░░
   20 |  ██░░    ██░░    ██░░
   10 |  ██░░    ██░░    ██░░
    0 +-------------------------
          F       C       S
```

At one glance you can see: Fiction **dropped by $10$** (from $40$ to $30$), while Comics and Science both **increased by $10$**. Total loans rose from $120$ last year to $130$ this year.

In a double bar graph, always include a **legend (key)** showing which shading represents which data set.

---

## Part C: Histograms

### From Bar Graph to Histogram

Now consider a different kind of data. In a plant nursery, the heights (in $\text{cm}$) of $30$ seedlings were measured and sorted into a grouped frequency table (just as we learned in Topic 2):

| Height ($\text{cm}$) | Seedlings (Frequency) |
|---|---|
| 10–15 | 2 |
| 15–20 | 6 |
| 20–25 | 10 |
| 25–30 | 8 |
| 30–35 | 4 |
| **Total** | **30** |

Notice something special here: height is **continuous**. Right where the $10\text{–}15\text{ cm}$ interval ends, the $15\text{–}20\text{ cm}$ interval begins — with no empty space in between. A seedling can be $14.9\text{ cm}$ tall or $15.1\text{ cm}$ tall.

Because the intervals flow continuously into one another, the bars must **touch side by side**, with **no gaps**. This graph is called a **histogram**.

### Rules for a Histogram

1. Used only for **grouped, continuous (exclusive)** class intervals.
2. **No gaps between adjacent bars.** Where one bar ends, the next begins.
3. **Bar width $=$ class size.** Mark the class limits along the $x$-axis ($10, 15, 20, \dots$).
4. **Bar height $=$ frequency** (when all class intervals have equal width).
5. Label both axes and add a title.

### Drawing a Histogram

**Step 1:** Mark the class boundaries along the $x$-axis: $10, 15, 20, 25, 30, 35$. Scale: $1\text{ unit} = 5\text{ cm}$.

**Step 2:** Mark frequencies on the $y$-axis. The highest is $10$, so use $1\text{ unit} = 2\text{ seedlings}$.

**Step 3:** Draw touching rectangular bars for each interval:

```
  10 |             █████
   8 |             ██████████
   6 |        ███████████████
   4 |        ████████████████████
   2 |   █████████████████████████
   0 +~~-|----|----|----|----|----|
         10   15   20   25   30   35
```

**Step 4:** Add the title ("Heights of Nursery Seedlings") and axis labels ("Height ($\text{cm}$)" and "Number of Seedlings").

### Why Draw a Kink (Zigzag)?

An axis should start at $0$, yet our first class starts at **$10$**. Leaving empty space all the way from $0$ to $10$ would waste a chunk of the graph.

Instead, right after $0$ on the $x$-axis, we draw a small **zigzag kink (`~~` or `/\/`)**. It signals: "the values between $0$ and $10$ have been skipped to save space." You can see `~~` in the histogram above.

### Reading a Histogram

| Question | Answer | How |
|---|---|---|
| Which interval has the most seedlings? | $20\text{–}25\text{ cm}$ ($10$ seedlings) | Tallest bar |
| How many are $25\text{ cm}$ or taller? | $12$ | $8 + 4$ |
| How many are shorter than $20\text{ cm}$? | $8$ | $2 + 6$ |
| Total seedlings? | $30$ | $2 + 6 + 10 + 8 + 4$ |

### Convert Inclusive Classes First

If the table uses **inclusive** classes such as $1\text{–}10, 11\text{–}20, 21\text{–}30$, there is a gap between $10$ and $11$. Because histogram bars must touch, convert the classes to **exclusive** form first (subtract $0.5$ from each lower limit and add $0.5$ to each upper limit, as in Topic 2):

| Inclusive | Exclusive (for Histogram) |
|---|---|
| 1–10 | 0.5–10.5 |
| 11–20 | 10.5–20.5 |
| 21–30 | 20.5–30.5 |

Now the boundaries meet seamlessly, and the histogram can be drawn accurately.

---

## Part D: Bar Graph vs. Histogram

| Feature | Bar Graph | Histogram |
|---|---|---|
| Type of data | Separate categories or discrete items | Grouped continuous data |
| Gaps between bars | **Yes**, equal gaps | **No**, bars touch edge to edge |
| Meaning of bar width | Nothing (all bars equal width) | Class size (interval width) |
| Labels on $x$-axis | Category names | Class boundaries (numbers) |
| Examples | Favourite sport, monthly rainfall | Heights, weights, grouped test marks |

In one sentence: **a bar graph compares distinct categories, while a histogram shows how continuous data is distributed across intervals.**

---

## Part E: Histograms with Varying Class Widths

### What Goes Wrong?

Consider these marks from a student test:

| Marks | Students (Frequency) | Class Size |
|---|---|---|
| 0–20 | 8 | 20 |
| 20–30 | 10 | 10 |
| 30–40 | 16 | 10 |
| 40–50 | 12 | 10 |
| 50–80 | 18 | 30 |
| **Total** | **64** | |

Look closely: the class **widths are unequal**. The interval $0\text{–}20$ has width $20$, the middle three have width $10$, and $50\text{–}80$ has width $30$.

If we naively set bar height equal to frequency, we get this:

```
  18 |                            ███████████████
  16 |                  █████     ███████████████
  14 |                  █████     ███████████████
  12 |                  █████████████████████████
  10 |             ██████████████████████████████
   8 |   ████████████████████████████████████████
   6 |   ████████████████████████████████████████
   4 |   ████████████████████████████████████████
   2 |   ████████████████████████████████████████
   0 +---|---------|----|----|----|--------------|
         0         20   30   40   50             80
```

This graph is **visually misleading**. The $50\text{–}80$ bar looks gigantic because it is both tall and three times as wide. Your eyes judge the **area** of each rectangle, not just its height. In reality, $50\text{–}80$ has $18$ students and $30\text{–}40$ has $16$ — nearly the same — yet the $50\text{–}80$ block appears more than three times as large!

### The Solution: Area Must Represent Frequency

The true rule of a histogram is: **the area of each bar must be proportional to its frequency.** When all classes share the same width, simply setting height $=$ frequency automatically achieves this. When widths vary, we must **adjust the bar heights**.

**Formula:**

$$\text{Adjusted frequency (bar height)} = \frac{\text{Minimum class size}}{\text{Class size of this interval}} \times \text{Frequency of this interval}$$

### Full Worked Example

Here the minimum class size is **$10$**.

| Marks | Frequency | Class Size | Adjusted Frequency |
|---|---|---|---|
| 0–20 | 8 | 20 | $\frac{10}{20} \times 8 = \mathbf{4}$ |
| 20–30 | 10 | 10 | $\frac{10}{10} \times 10 = \mathbf{10}$ |
| 30–40 | 16 | 10 | $\frac{10}{10} \times 16 = \mathbf{16}$ |
| 40–50 | 12 | 10 | $\frac{10}{10} \times 12 = \mathbf{12}$ |
| 50–80 | 18 | 30 | $\frac{10}{30} \times 18 = \mathbf{6}$ |

Now plot the true histogram using height $=$ adjusted frequency:

```
  16 |                  █████
  14 |                  █████
  12 |                  ██████████
  10 |             ███████████████
   8 |             ███████████████
   6 |             ██████████████████████████████
   4 |   ████████████████████████████████████████
   2 |   ████████████████████████████████████████
   0 +---|---------|----|----|----|--------------|
         0         20   30   40   50             80
```

Now $30\text{–}40$ stands tallest (showing the highest concentration of students per $10$-mark span), while $50\text{–}80$ is lower and wider. The two bars visually occupy almost the same area, reflecting $16$ and $18$ students honestly.

**Area check:** Compute $(\text{height} \times \text{width}) \div 10$ to recover each original frequency:
- $0\text{–}20$: $4 \times 20 \div 10 = 8$ ✅
- $30\text{–}40$: $16 \times 10 \div 10 = 16$ ✅
- $50\text{–}80$: $6 \times 30 \div 10 = 18$ ✅

Area is now strictly proportional to frequency — which is the entire reason we adjusted the heights.

### An Easy Way to Remember

**Shrink the height of a wide bar by the same factor that it is wider.** Because $0\text{–}20$ is $2$ times as wide, halve its height ($8 \to 4$). Because $50\text{–}80$ is $3$ times as wide, take one-third of its height ($18 \to 6$).

---

## Common Pitfalls to Avoid

1. **Mistake 1: Leaving gaps between bars in a histogram.**
   A histogram represents continuous intervals; gaps make it look as though values between bars do not exist. The bars must touch.

2. **Mistake 2: Drawing touching bars or unequal gaps in a bar graph.**
   Categories are distinct, so keep equal gaps between bars. Touching bars look like a histogram and send the wrong message.

3. **Mistake 3: Plotting raw frequencies directly as bar heights when class widths vary.**
   Wide intervals like $50\text{–}80$ will appear vastly oversized. Always compute the adjusted frequency first.

4. **Mistake 4: Choosing a poor scale or forgetting axis labels and titles.**
   An unlabelled graph is unreadable, and starting a bar graph's $y$-axis above $0$ visually distorts differences.

5. **Mistake 5: Using a histogram for categorical data.**
   Data like "favourite sport" has no continuous numerical scale — use a bar graph, not a histogram.

6. **Mistake 6: Drawing a histogram straight from inclusive classes.**
   Intervals like $1\text{–}10$ and $11\text{–}20$ have a gap between $10$ and $11$. Apply the $0.5$ adjustment from Topic 2 before plotting.

7. **Mistake 7: Reading bar height as frequency in a varying-width histogram.**
   In the corrected histogram above, the $0\text{–}20$ bar has height $4$, yet there are **$8$** students in that interval. In a varying-width histogram, frequency is given by **area**, not height.

---

## Quick Recap

- **Graphs** turn tables into clear visual pictures at a glance.
- **Bar graph:** for categorical or discrete data. Equal-width bars, equal gaps, height $=$ value. Can be vertical or horizontal.
- **Double bar graph:** compares two data sets side by side per category, with a legend.
- **Histogram:** for grouped continuous data. **Touching bars**, width $=$ class size, height $=$ frequency (when widths are equal).
- Convert **inclusive** classes to **exclusive** form before drawing a histogram.
- Use a **kink (zigzag)** on an axis if the first class does not start at $0$.
- **Unequal class widths:** $\text{Adjusted frequency} = \frac{\text{Minimum class size}}{\text{Class size}} \times \text{Frequency}$. In every histogram, **area is proportional to frequency**.
- Always include a scale, a title, and labelled axes.

---

## Practice Questions

1. Which type of graph (bar graph or histogram) should be used for each? Give a reason.
   (a) Number of students who like each colour: red, blue, green, yellow
   (b) Heights of $40$ students grouped as $140\text{–}145, 145\text{–}150, 150\text{–}155\text{ cm}$
   (c) Runs scored by $5$ players in a match
   (d) Weights of $50$ people grouped in classes of $5\text{ kg}$

2. The number of trees planted by five grades is: Grade $6$: $30$, Grade $7$: $45$, Grade $8$: $25$, Grade $9$: $50$, Grade $10$: $40$.
   (a) Which grade planted the most trees?
   (b) Which grade planted the fewest?
   (c) How many more trees did Grade $9$ plant than Grade $8$?
   (d) How many trees were planted in total?
   (e) Suggest a suitable scale for the bar graph.

3. The weights ($\text{kg}$) of $40$ people are: $30\text{–}35$: $4$, $35\text{–}40$: $9$, $40\text{–}45$: $14$, $45\text{–}50$: $8$, $50\text{–}55$: $5$.
   (a) Which class has the highest frequency?
   (b) How many people weigh $45\text{ kg}$ or more?
   (c) Why do we draw a kink on the $x$-axis for this histogram?
   (d) Should the bars of this graph have gaps between them? Why?

4. Convert the inclusive classes $10\text{–}19, 20\text{–}29, 30\text{–}39$ into exclusive classes so that a histogram can be drawn. What is the class size?

5. The daily wages (USD) of workers are: $100\text{–}150$: $10$ workers, $150\text{–}200$: $15$, $200\text{–}300$: $20$, $300\text{–}500$: $16$. Find the adjusted frequency (height of each bar) for drawing a histogram.

6. In Question 5, the class $300\text{–}500$ has $16$ workers, yet its bar height is much less than $16$. Explain why, using the idea of area.

7. State whether each statement is true or false.
   (a) In a histogram, there are gaps between the bars.
   (b) In a bar graph, all bars have the same width.
   (c) In every histogram, the height of a bar is equal to its frequency.
   (d) A bar graph can be drawn with horizontal bars.

### Answers

1. (a) **Bar graph.** Colours are distinct categories with no continuous scale.
   (b) **Histogram.** Height is continuous and grouped into touching intervals.
   (c) **Bar graph.** Each player is a separate category.
   (d) **Histogram.** Weight is continuous and grouped in $5\text{ kg}$ intervals.

2. (a) **Grade $9$** ($50$)
   (b) **Grade $8$** ($25$)
   (c) $50 - 25 = \mathbf{25}$
   (d) $30 + 45 + 25 + 50 + 40 = \mathbf{190}$
   (e) Since the maximum is $50$ and all values are multiples of $5$, **$1\text{ unit} = 5\text{ trees}$** (or $10\text{ trees}$) is a clean scale.

3. (a) **$40\text{–}45\text{ kg}$** ($14$ people)
   (b) $8 + 5 = \mathbf{13}$
   (c) The first class begins at **$30$** rather than $0$. A kink on the $x$-axis shows that the unused interval from $0$ to $30$ has been compressed.
   (d) **No.** Weight is continuous and the classes are exclusive (the next class starts right where the previous ends at $35, 40, \dots$), so the histogram bars must touch.
   Check: $4 + 9 + 14 + 8 + 5 = 40$ ✅

4. Subtract $0.5$ from each lower limit and add $0.5$ to each upper limit:
   **$9.5\text{–}19.5, 19.5\text{–}29.5, 29.5\text{–}39.5$**. Class size $= 19.5 - 9.5 = \mathbf{10}$.

5. Class sizes: $50, 50, 100, 200$. Minimum class size $= \mathbf{50}$.
   - $100\text{–}150$: $\frac{50}{50} \times 10 = \mathbf{10}$
   - $150\text{–}200$: $\frac{50}{50} \times 15 = \mathbf{15}$
   - $200\text{–}300$: $\frac{50}{100} \times 20 = \mathbf{10}$
   - $300\text{–}500$: $\frac{50}{200} \times 16 = \mathbf{4}$

6. The $300\text{–}500$ class is $200$ units wide, which is **$4$ times** the minimum width ($50$). Because **area** represents frequency in a histogram, the height must be divided by $4$: $16 \div 4 = 4$.
   Check: taking area as $(\text{height} \times \text{width}) \div 50$ gives $4 \times 200 \div 50 = \mathbf{16}$ ✅, matching the true frequency. Leaving the height at $16$ would make the bar appear $4$ times too large.

7. (a) **False** ❌. Histogram bars touch with no gaps.
   (b) **True** ✅. All bars in a bar graph share the same width.
   (c) **False** ❌. That holds only when all classes have equal width; otherwise, adjusted frequency gives the bar height.
   (d) **True** ✅. Horizontal bar graphs are completely valid.

---

Drawing graphs gets easier fast: the first time you pick a scale and measure bars it takes a little care, and after two or three graphs it becomes second nature. Just remember: **gaps for categories, touching bars for continuous intervals.**

**What comes next?** In the next topic, we take the **midpoint of the top edge** of every bar in a histogram and join those points with straight line segments. That creates a brand-new graph — a **frequency polygon** — that reveals the overall "ridge and valley" shape of your data.
