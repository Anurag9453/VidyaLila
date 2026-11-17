# Chapter: Statistics (Part 6)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [statistics-part5.md](statistics-part5.md).** (The chapter begins in [statistics.md](statistics.md).)
> **Topics covered in this file:**
> 6. Median, Mode, and Chapter Wrap-up

---

# Topic 6: Median, Mode, and Chapter Wrap-up

In Topic 5, we learned how to compute the **mean**: add all values and divide by the count (or $\frac{\sum f_i x_i}{\sum f_i}$ for a frequency table). Along the way, we spotted a serious trap: if a data set contains **one unusually large or small value** (an outlier), that single number drags the mean toward itself. Remember the allowance example? Five friends had a mean of $100$ dollars, yet adding a sixth friend with $1100$ dollars yanked the mean up to nearly $267$ dollars — nowhere near anyone's actual allowance.

So when an extreme value skews the picture, how do we find a truly "typical" value? We have two more tools: the **median** and the **mode**. In this final topic, we learn both, and wrap up the chapter by deciding when to use which average.

---

## The BrightLine Press Job Offer

**Liam** was looking for work and spotted an eye-catching job advert online:

> **"BrightLine Printing Press: Join our team — average annual salary $55,700$ dollars!"**

Excited, Liam went in for an interview and chatted with **Sophia**, who already worked there: "Do people here really earn that much?"

Sophia laughed gently. "Let me show you the actual payroll." The company has $10$ people in total (salaries in thousand dollars per year):

| Who | Salary (thousand USD) |
|---|---|
| $9$ staff members | $12, 14, 15, 15, 16, 18, 20, 22, 25$ |
| Company owner | $400$ |

Let us check the mean (using Topic 5's method):
- Total $= 12 + 14 + 15 + 15 + 16 + 18 + 20 + 22 + 25 + 400 = \mathbf{557}$
- Mean $= 557 \div 10 = \mathbf{55.7}$, or **$55,700$ dollars**

The advert was not lying! Yet **$9$ out of $10$ people earn $25,000$ dollars or less!** The owner's $400,000$-dollar salary alone dragged the average way up.

Sophia said: "If you want the truth, line up all the salaries from lowest to highest and look at the **middle one** — or check which salary **most people** actually earn."

- In ascending order: $12, 14, 15, 15, \mathbf{16, 18}, 20, 22, 25, 400$. Right in the middle sit two numbers: $16$ and $18$. Halfway between them is **$17$**, or **$17,000$ dollars**.
- The most common salary: **$15$** (earned by two employees), or **$15,000$ dollars**.

Liam saw immediately that typical staff at this office earn around $15,000$ to $17,000$ dollars, nowhere near $55,700$ dollars. That middle value is called the **median**, and the most frequent value is called the **mode**.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Median** | The middle observation when data is arranged in ascending (or descending) order | Median of $3, 5, \mathbf{7}, 9, 11$ is $7$ |
| **Mode** | The value that occurs most frequently in the data | Mode of $2, 4, \mathbf{4}, 4, 6$ is $4$ |
| **Ascending order** | Arranging numbers from smallest to largest | $2, 5, 8, 11$ |
| **Outlier** | An observation that lies very far from the rest of the data (from Topic 5) | $400$ in the salary table |
| **Bimodal** | A data set with two values tied for the highest frequency | $3, 3, 5, 7, 7$ (modes $3$ and $7$) |
| **Cumulative frequency ($\text{c.f.}$)** | The running total of frequencies up to each row (from Topic 2) | $f: 2, 3, 5 \to \text{c.f.}: 2, 5, 10$ |

---

## Part A: Median of Raw Data

### Rule Number One: Always Order the Data First

"Median" means the middle value — and "middle" only makes sense once the numbers are arranged in **ascending** (smallest to largest) or descending order. Picking the middle of an unsorted list is meaningless.

### Formula Based on $n$ (Number of Observations)

Suppose there are $n$ ordered observations:

- **If $n$ is odd:** $$\text{Median} = \text{value at the } \left(\frac{n + 1}{2}\right)\text{th position}$$
- **If $n$ is even:** there are two middle positions, the **$\left(\frac{n}{2}\right)$th** and **$\left(\frac{n}{2} + 1\right)$th** observations. $$\text{Median} = \frac{\left(\frac{n}{2}\right)\text{th observation} + \left(\frac{n}{2} + 1\right)\text{th observation}}{2}$$

### Example 1 ($n$ odd): Students Standing in Height Order

Heights of $7$ students (in $\text{cm}$): $142, 135, 150, 138, 145, 140, 148$

In ascending order: $135, 138, 140, \mathbf{142}, 145, 148, 150$

Since $n = 7$ (odd), position $= \frac{7 + 1}{2} = \mathbf{4\text{th}}$ value.

**$\text{Median} = 142\text{ cm}$**

Check: $3$ students are shorter than $142$ ($135, 138, 140$), and $3$ are taller ($145, 148, 150$). Right in the middle ✅

### Example 2 ($n$ even): Weekly Hours of Sport

Eight friends recorded how many hours they played football last week: $3, 7, 2, 5, 9, 4, 6, 8$

In ascending order: $2, 3, 4, \mathbf{5, 6}, 7, 8, 9$

Since $n = 8$ (even), the two middle positions are $\frac{8}{2} = \mathbf{4\text{th}}$ and $\frac{8}{2} + 1 = \mathbf{5\text{th}}$, which are $5$ and $6$.

**$\text{Median} = \frac{5 + 6}{2} = 5.5\text{ hours}$**

Notice that $5.5$ is not actually in the list. When $n$ is even, that happens often and is completely normal.

### Example 3: The Mistake of Skipping the Ordering Step

Data: $9, 2, 7, 4, 5$

If you grab the middle number straight away, you get **$7$** — which is **wrong**.

Ordered: $2, 4, \mathbf{5}, 7, 9$. **$\text{Median} = 5$.**

### Example 4: Data with Repeated Values

Data ($n = 9$): $6, 3, 6, 8, 3, 6, 10, 2, 5$

Ordered: $2, 3, 3, 5, \mathbf{6}, 6, 6, 8, 10$

Position $= \frac{9 + 1}{2} = 5\text{th}$ value. **$\text{Median} = 6$**

Always list repeated values **every time they occur**, never just once.

### Example 5: A Decimal Median

Midday temperatures (in $^\circ\text{C}$) over $6$ days: $31, 28, 35, 30, 29, 33$

Ordered: $28, 29, \mathbf{30, 31}, 33, 35$

**$\text{Median} = \frac{30 + 31}{2} = 30.5^\circ\text{C}$**

---

## Part B: Median from a Frequency Table

Larger data sets usually arrive in a frequency table (Topic 2). Writing out every single number in one long line would be tedious. Instead, we use **cumulative frequency ($\text{c.f.}$)**, which we also learned in Topic 2.

### Method

1. Add a **$\text{c.f.}$ column** to the table (keep a running sum of frequencies downward).
2. Find $N = \text{total frequency}$ (the final $\text{c.f.}$).
3. Find the median position(s):
   - $N$ odd: **$\left(\frac{N + 1}{2}\right)$th** observation
   - $N$ even: average of the **$\left(\frac{N}{2}\right)$th** and **$\left(\frac{N}{2} + 1\right)$th** observations
4. Scan down the $\text{c.f.}$ column: the **first $\text{c.f.}$ greater than or equal to** that position identifies the row containing the median.

Think of $\text{c.f.}$ as telling you *"how far down the ordered line this value reaches."* For example, $\text{c.f.} = 11$ means positions up to the $11\text{th}$ student sit in or before that row.

### Example 6 ($N$ odd): People per Household

| People ($x_i$) | Houses ($f_i$) | $\text{c.f.}$ |
|---|---|---|
| 2 | 4 | 4 |
| 3 | 7 | 11 |
| 4 | 10 | 21 |
| 5 | 6 | 27 |
| 6 | 3 | 30 |
| 7 | 1 | 31 |

$N = 31$ (odd). Position $= \frac{31 + 1}{2} = \mathbf{16\text{th}}$.

Check the $\text{c.f.}$ column: $4$ (less than $16$), $11$ (still less than $16$), **$21$** (first $\text{c.f.} \ge 16$). So the $16\text{th}$ house lies in the $x = 4$ row:
- Positions $1$ to $4$: $2$ people
- Positions $5$ to $11$: $3$ people
- **Positions $12$ to $21$: $4$ people** ($16$ falls right here)

**$\text{Median} = 4\text{ people}$**

### Example 7 ($N$ even): Monthly Library Visits

Number of times students in a class visited the library last month:

| Visits ($x_i$) | Students ($f_i$) | $\text{c.f.}$ |
|---|---|---|
| 0 | 3 | 3 |
| 1 | 5 | 8 |
| 2 | 7 | 15 |
| 3 | 9 | 24 |
| 4 | 4 | 28 |
| 5 | 2 | 30 |

$N = 30$ (even). The two middle positions are $30/2 = \mathbf{15\text{th}}$ and **$\mathbf{16\text{th}}$**.

- $15\text{th}$ value: $\text{c.f.} = 15$ ends right on $15$, so the $15\text{th}$ student is in the **$x = 2$** row (positions $9$ to $15$).
- $16\text{th}$ value: the $x = 2$ row finishes at $15$, so the $16\text{th}$ student begins the next row, **$x = 3$** (positions $16$ to $24$).

**$\text{Median} = \frac{2 + 3}{2} = 2.5\text{ visits}$**

This boundary case is where mistakes happen most often! Because the two middle positions can land in **two different rows**, always look up each position separately.

---

## Part C: Mode: The Most Frequent Value

The mode is the simplest of all: **whichever value appears the most times is the mode.**

### Example 8: Raw Data

Data: $4, 6, 2, 6, 8, 6, 3, 4$

- $6$ appears three times, $4$ appears twice, and all others appear once.
- **$\text{Mode} = 6$**

### Example 9: Two Modes (Bimodal)

Data: $3, 5, 5, 7, 8, 8, 9$

Both $5$ and $8$ appear twice (the highest count). **$\text{Mode} = 5\text{ and } 8$** (bimodal).

### Example 10: No Mode

Data: $2, 4, 7, 9$. Every value appears just once. **This data has no mode.**

### Example 11: Mode from a Frequency Table

Number of siblings of students in a class:

| Siblings ($x_i$) | Students ($f_i$) |
|---|---|
| 0 | 5 |
| 1 | **14** |
| 2 | 9 |
| 3 | 3 |
| 4 | 1 |

The highest frequency is $14$, which belongs to **$x = 1$**.

**$\text{Mode} = 1$** (not $14$!). The mode is always the **value**, never its frequency.

### Example 12: Non-Numerical (Categorical) Data

Class 9 students were asked their favourite school-bag colour:

| Colour | Students |
|---|---|
| Blue | 12 |
| Black | 15 |
| Red | 7 |
| Green | 6 |

**$\text{Mode} = \text{Black}$**

Here you **cannot even compute a mean or median**: "Blue $+$ Red" has no meaning, and colours cannot be ranked from smallest to largest. For categorical data, **only the mode works**. That is why store owners love the mode — whatever sells most often is what you stock most!

---

## Part D: Mean, Median, or Mode — Which One to Use?

### Comparison Table

| | Mean | Median | Mode |
|---|---|---|---|
| **What it is** | Sum of all values $\div$ count | Middle value when ordered | Most frequent value |
| **Effect of outliers** | **Strong** (gets pulled easily) | Almost **none** | **None** |
| **When to use** | Values are fairly even, no outliers (test marks, daily rainfall) | Extreme values exist (salaries, house prices) | Finding the most popular choice (colour, shoe size, brand) |
| **Works on non-numerical data?** | No | No | **Yes** |
| **Always unique?** | Yes | Yes | Could be one, two, or none |

### Revisiting BrightLine Printing Press

| Measure | Value | Tells the true story? |
|---|---|---|
| Mean | $55,700$ dollars | No — pulled up by the owner's salary |
| Median | $17,000$ dollars | Yes — close to a typical staff salary |
| Mode | $15,000$ dollars | Yes — the most common staff salary |

That is why news reports on "typical household income" or "typical home prices" nearly always quote the **median**, not the mean.

### Example 13: How Adding or Changing Values Affects the Median

Data: $4, 7, 9, 12, 15$. $\text{Median} = \mathbf{9}$ ($5$ values, $3\text{rd}$ position).

- **Add $20$:** $4, 7, \mathbf{9, 12}, 15, 20 \to \text{median} = (9 + 12)/2 = \mathbf{10.5}$
- **Remove $4$ from the original list:** $7, \mathbf{9, 12}, 15 \to \text{median} = (9 + 12)/2 = \mathbf{10.5}$
- **Replace $15$ with $150$:** $4, 7, \mathbf{9}, 12, 150 \to \text{median is still }\mathbf{9}$. Now check the mean:
  - Before: $(4 + 7 + 9 + 12 + 15)/5 = 47/5 = \mathbf{9.4}$
  - After: $(4 + 7 + 9 + 12 + 150)/5 = 182/5 = \mathbf{36.4}$

One huge outlier shot the mean from $9.4$ up to $36.4$, yet the median did not budge by a single decimal. That is the superpower of the median.

### Example 14: Finding $x$ Given the Median

The data is already in ascending order: **$10, 12, 14, x - 2, x + 2, 25, 28, 30$**. Its median is **$20$**. Find $x$.

$n = 8$ (even), so the median is the average of the $4\text{th}$ and $5\text{th}$ observations:

$$\text{Median} = \frac{(x - 2) + (x + 2)}{2} = \frac{2x}{2} = x$$

Therefore, **$x = 20$**.

Check: the list becomes $10, 12, 14, 18, 22, 25, 28, 30$. The order holds, and $(18 + 22)/2 = 20$ ✅.

### Example 15: With Odd $n$

Ordered data: $5, 7, x, 11, 13$. $\text{Median} = 9$.

$n = 5$, so the median is the $3\text{rd}$ value $= x$. Thus **$x = 9$** (and the order $7 \le 9 \le 11$ holds ✅).

### Example 16

Ordered data: $2, 4, 6, x, 10, 12$. $\text{Median} = 7$.

$n = 6$, so $\text{median} = \frac{3\text{rd} + 4\text{th}}{2} = \frac{6 + x}{2} = 7 \implies 6 + x = 14 \implies \mathbf{x = 8}$.

Check: $2, 4, 6, 8, 10, 12 \to (6 + 8)/2 = 7$ ✅

### Looking Ahead to Higher Classes

- Finding the **median of grouped data** (intervals like $10\text{–}20, 20\text{–}30$) uses a dedicated interpolation formula, which you will learn in higher classes.
- Mean, median, and mode are linked by a useful empirical relation for moderately skewed data: **$\text{Mode} \approx 3\,\text{Median} - 2\,\text{Mean}$**, also studied later on.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Finding the median without ordering the data first.**
   The median of $9, 2, 7, 4, 5$ is **not** $7$; it is **$5$** once ordered as $2, 4, 5, 7, 9$.

2. **Mistake 2: Picking only one middle number when $n$ is even.**
   The median of $2, 3, 4, 5, 6, 7, 8, 9$ is neither $5$ nor $6$ — it is their average, **$(5 + 6)/2 = 5.5$**.

3. **Mistake 3: Mistaking the position for the median itself.**
   For $n = 7$, $(7 + 1)/2 = 4$ means the **$4\text{th}$ observation**, not that the median equals $4$.

4. **Mistake 4: Reporting the highest frequency as the mode.**
   In Example 11, the highest frequency is $14$, yet the **mode is $1$** (the value itself).

5. **Mistake 5: Mishandling $\text{c.f.}$ boundaries when $N$ is even.**
   In Example 7, the $15\text{th}$ and $16\text{th}$ observations fell in **two different rows** ($2$ and $3$). Never assume both middle positions lie in the same row without checking.

6. **Mistake 6: Writing repeated values only once when ordering.**
   In $6, 3, 6, 8, 3, 6, \dots$, you must write $6$ all three times. Dropping duplicates changes both the order and the middle value.

7. **Mistake 7: Assuming every data set must have a mode.**
   $2, 4, 7, 9$ has **no mode**, because every value occurs equally often (once).

---

## Quick Recap

- **Median** $=$ the middle observation once ordered:
  - $n$ odd: $\left(\frac{n + 1}{2}\right)\text{th}$ observation
  - $n$ even: average of $\left(\frac{n}{2}\right)\text{th}$ and $\left(\frac{n}{2} + 1\right)\text{th}$ observations
- **Median from a frequency table:** build the $\text{c.f.}$ column, find the median position(s), and locate the first row whose $\text{c.f.} \ge \text{position}$.
- **Mode** $=$ the **value** that occurs most often. A data set may have one mode, two modes (bimodal), or no mode.
- **Outliers** pull the mean strongly, yet barely touch the median or mode.
- **Non-numerical data** (colours, brands) only has a mode.
- **Which average to choose:** even values without outliers $\to$ **mean**; outliers present $\to$ **median**; most popular item $\to$ **mode**.

---

## Practice Questions

1. Find the median of: $23, 18, 30, 27, 19, 25, 21$.

2. Find the median of: $45, 32, 50, 38, 41, 36$.

3. Find the mode of: $7, 3, 9, 7, 2, 3, 7, 5, 3, 8$.

4. Find the median and the mode of the following data:

   | $x_i$ | 10 | 20 | 30 | 40 | 50 |
   |---|---|---|---|---|---|
   | $f_i$ | 2 | 5 | 9 | 6 | 3 |

5. Find the median of the following data:

   | $x_i$ | 1 | 2 | 3 | 4 | 5 | 6 |
   |---|---|---|---|---|---|---|
   | $f_i$ | 4 | 6 | 5 | 7 | 2 | 6 |

6. The following observations are in ascending order: $11, 13, 15, x, x + 4, 24, 26, 30$. If the median is $18$, find $x$.

7. A local coffee cart's daily sales (in USD) on five days were $200, 250, 300, 350,$ and $2400$ (the last day was a street festival). Find the mean and the median. Which one better represents a typical day's sales, and why?

8. The median of $7$ observations is $15$. If the largest observation is increased by $10$, what is the new median?

9. State whether each statement is true or false. Give a reason.
   (a) The median of $2, 3, 10$ changes if $10$ is replaced by $100$.
   (b) A set of data can have more than one mode.
   (c) In a frequency table, the mode is the highest frequency.
   (d) We can find the median of the favourite colours of students.

### Answers

1. Ordered: $18, 19, 21, \mathbf{23}, 25, 27, 30$. Since $n = 7$, median is the $4\text{th}$ value. **$\text{Median} = 23$**

2. Ordered: $32, 36, \mathbf{38, 41}, 45, 50$. Since $n = 6$, median is the average of the $3\text{rd}$ and $4\text{th}$ values. **$\text{Median} = (38 + 41)/2 = 39.5$**

3. $7$ appears three times, $3$ also appears three times, and all others appear once. **$\text{Mode} = 3\text{ and } 7$** (bimodal)

4. $\text{c.f.}$: $2, 7, 16, 22, 25$. $N = 25$ (odd), position $= 13\text{th}$. The first $\text{c.f.} \ge 13$ is $16$, which belongs to $x = 30$. **$\text{Median} = 30$**
   The highest frequency is $9$, belonging to $x = 30$. **$\text{Mode} = 30$**

5. $\text{c.f.}$: $4, 10, 15, 22, 24, 30$. $N = 30$ (even), middle positions are $15\text{th}$ and $16\text{th}$.
   - $15\text{th}$: the $x = 3$ row ends at $\text{c.f.} = 15$, so the $15\text{th}$ value is **$3$**.
   - $16\text{th}$: the next row, $x = 4$, covers positions $16$ to $22$, so the $16\text{th}$ value is **$4$**.
   - **$\text{Median} = (3 + 4)/2 = 3.5$**

6. $n = 8$, $\text{median} = \frac{4\text{th} + 5\text{th}}{2} = \frac{x + (x + 4)}{2} = x + 2 = 18 \implies \mathbf{x = 16}$.
   Check: $11, 13, 15, 16, 20, 24, 26, 30 \to (16 + 20)/2 = 18$ ✅

7. $\text{Mean} = (200 + 250 + 300 + 350 + 2400)/5 = 3500/5 = \mathbf{700\text{ dollars}}$
   $\text{Median} = 3\text{rd value} = \mathbf{300\text{ dollars}}$
   **The median is much better.** On four out of five days, sales were $350$ dollars or less. The single festival day of $2400$ dollars pulled the mean up to $700$ dollars, which does not reflect a normal day at all.

8. The median is the $4\text{th}$ ordered value. The largest observation sits at the $7\text{th}$ position, so increasing it leaves the $4\text{th}$ value untouched. **New median $= 15$**

9. (a) **False** ❌. The median is the middle value, $3$. Replacing $10$ with $100$ still leaves $3$ in the middle.
   (b) **True** ✅. For example, in $3, 3, 5, 7, 7$, both $3$ and $7$ are modes.
   (c) **False** ❌. The mode is the **value** that has the highest frequency, not the frequency itself.
   (d) **False** ❌. Colours cannot be ordered from smallest to largest, so a median does not exist. Only the mode works here.

---

# Chapter Wrap-up: Statistics

| Topic | What We Learned | Key Takeaway |
|---|---|---|
| 1. Introduction to Statistics and Data | What data is, primary vs. secondary data, data collection methods, raw data, range | $\text{Range} = \text{Largest} - \text{Smallest}$ |
| 2. Organising Data in Tables | Tally marks, ungrouped and grouped frequency tables, class intervals, class marks, inclusive vs. exclusive classes, cumulative frequency | Large data sets become clear the moment they are tabulated |
| 3. Bar Graphs and Histograms | Bar graphs for categories, histograms for continuous intervals (with adjusted heights when widths vary) | Histograms have touching bars with no gaps |
| 4. Frequency Polygons | Plotting $(\text{class mark}, \text{frequency})$, closing both ends with zero-frequency classes, joining with straight lines | Best tool for comparing two data sets on one graph |
| 5. Mean | $\frac{\sum x_i}{n}$ and $\frac{\sum f_i x_i}{\sum f_i}$, properties of the mean, effect of outliers | Extreme values pull the mean toward themselves |
| 6. Median and Mode | Middle ordered value, most frequent value, finding median using $\text{c.f.}$ | Use median with outliers; use mode for most popular or categorical data |

### Which Graph Should You Choose?

| Type of Data | Best Graph |
|---|---|
| Distinct categories (colours, sports, months) | **Bar graph** |
| Continuous grouped intervals (heights $140\text{–}150, 150\text{–}160$) | **Histogram** |
| Comparing two distributions on one graph, or viewing overall shape | **Frequency polygon** |

### Which Average Should You Choose?

| Situation | Best Average |
|---|---|
| Values are fairly clustered with no extreme outliers | **Mean** |
| Extreme high or low values are present (salaries, property prices) | **Median** |
| Finding the most popular item, or data is non-numerical | **Mode** |

---

Next time someone flashes an "average" figure at you — just like in Liam's job advert — pause for one second and ask: *which average is that — mean, median, or mode?* Asking that single question will protect you from countless misleading numbers. That is the true heart of statistics: seeing the real story behind the numbers. You've got this!
