# Chapter: Statistics (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues directly from [statistics.md](statistics.md)** (which covers Topic 1: what statistics is, how data is collected, and range).
> **Topics covered in this file:**
> 2. Organising Data in Tables (Frequency Distribution)

---

# Topic 2: Organising Data in Tables (Frequency Distribution)

In Topic 1, we saw what **data** is, how to collect it, and how messy raw data looks. Leo surveyed the $20$ students in his class about their distance from school, arranged the numbers from smallest to largest, and found the **range** ($\text{largest} - \text{smallest} = 15 - 1 = 14\text{ km}$).

When a data set gets much larger, simply putting numbers in order is no longer enough. In this topic, we will learn how to organise scattered data into a **clean, structured table**, so you can understand the big picture at a single glance.

---

## Liam's Family Shoe Shop

**Liam** helps out at his family's neighbourhood shoe shop on weekends. Every time a pair of shoes is sold, his dad jots down its **size** on a notepad. By the end of the week, the sheet looks like this:

```
7, 8, 6, 7, 9, 8, 7, 10, 6, 8,
7, 7, 9, 8, 5, 7, 8, 6, 9, 7,
8, 10, 7, 6, 8, 9, 7, 8, 5, 7
```

Now it is time to order next week's stock. Liam's dad wonders: "Which size sells the most? How many pairs of size $10$ should I restock?"

Looking at the raw sheet makes it hard to tell — the numbers are scattered everywhere. Liam's sister **Sophia**, who is in Class 9, says, "Let's turn this list into a proper table."

For every size sold, she draws a short vertical stroke next to that size, crossing every fifth stroke diagonally to form neat bundles of $5$. A few minutes later, she has this table:

| Size | Tally | Pairs Sold (Frequency) |
|---|---|---|
| 5 | II | 2 |
| 6 | IIII | 4 |
| 7 | IIII/ IIII/ | 10 |
| 8 | IIII/ III | 8 |
| 9 | IIII | 4 |
| 10 | II | 2 |
| **Total** | | **30** |

Instantly, everything is crystal clear: **size $7$ sells the most** ($10$ pairs), while sizes $5$ and $10$ sell the least ($2$ pairs each). That is exactly what Liam's dad needed to place his order.

This compact table is called a **frequency distribution table**. In this topic, we will learn how to build them for both small and large data sets.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Frequency** | How many times a value appears in the data | The frequency of size $7$ is $10$ |
| **Tally mark** | Strokes used for counting, bundled in groups of $5$ | $\text{IIII/} = 5$ |
| **Frequency distribution table** | A table listing each value (or interval) alongside its frequency | Sophia's shoe-size table |
| **Ungrouped data** | Data listed with a separate frequency for each individual value | Sizes $5, 6, 7, \dots$ listed one by one |
| **Grouped data** | Data sorted into intervals (classes) | Ages $10\text{–}20, 20\text{–}30, \dots$ |
| **Class interval** | A single numerical group or bracket | $20\text{–}30$ |
| **Lower limit / Upper limit** | The smallest and largest boundary values of a class | In $20\text{–}30$, lower limit is $20$, upper limit is $30$ |
| **Class size** | The width of a class interval | Class size of $20\text{–}30$ is $10$ |
| **Class mark** | The midpoint of a class interval | Class mark of $20\text{–}30$ is $25$ |
| **Cumulative frequency** | A running total of frequencies up to a given class | "How many customers are under $30$?" |

---

## Part A: Frequency and Tally Marks

### Frequency

The **frequency** of a value is the **number of times** it occurs in the data set.

In the shoe shop data:
- Size $7$ occurs ten times, so the **frequency of size $7 = 10$**.
- Size $5$ occurs twice, so the **frequency of size $5 = 2$**.

### Tally Marks: The Classic Counting Method

Counting values directly from a jumbled list makes it easy to lose track. **Tally marks** prevent that:

- Each time a value appears, draw one vertical stroke: **I**
- Once you have four vertical strokes, draw the fifth stroke **diagonally across them** to make a bundle of $5$: **IIII/** $= 5$

```
I           = 1
II          = 2
III         = 3
IIII        = 4
IIII/       = 5   (four vertical + one diagonal = one bundle)
IIII/ II    = 7
IIII/ IIII/ = 10
```

**Why bundle in fives?** Counting groups of $5$ is instant. Seeing $3$ bundles and $2$ extra strokes immediately tells you $5 + 5 + 5 + 2 = 17$, with no need to count strokes one by one.

**How to build a tally column cleanly:**
1. Read through the raw data **once from start to finish**.
2. For each number, place a stroke in its corresponding row.
3. Lightly cross off each number on the raw sheet as you record it, so you never count it twice.
4. At the end, count the tally marks in each row to write the frequency.

---

## Part B: Ungrouped Frequency Distribution Table

When a data set has **only a few distinct values** (such as shoe sizes $5$ to $10$), we give each individual value its own row. This is called an **ungrouped** (or discrete) frequency distribution table.

Sophia's shoe-size table is an ungrouped frequency distribution.

### The Essential Check

> $$\text{Sum of all frequencies} = \text{Total number of observations}$$

In Sophia's table: $2 + 4 + 10 + 8 + 4 + 2 = \mathbf{30}$, and the raw sheet had **$30$** numbers in total ✅.

If these two totals do not match, a counting error happened somewhere. Always run this check.

### Example 1: Household Sizes on a Street

The number of people living in each of $20$ houses along a street is recorded below:

```
4, 3, 5, 2, 4, 6, 3, 4, 5, 4,
3, 2, 4, 5, 7, 3, 4, 6, 4, 3
```

**Table:**

| People in Household | Tally | Frequency |
|---|---|---|
| 2 | II | 2 |
| 3 | IIII/ | 5 |
| 4 | IIII/ II | 7 |
| 5 | III | 3 |
| 6 | II | 2 |
| 7 | I | 1 |
| **Total** | | **20** |

**Check:** $2 + 5 + 7 + 3 + 2 + 1 = 20$ ✅

**Reading the table:**
- What is the most common household size? **$4$ people** ($7$ houses).
- How many houses have more than $4$ people? Those with $5, 6,$ or $7$: $3 + 2 + 1 = \mathbf{6\text{ houses}}$.
- How many houses have $3$ or fewer people? Those with $2$ or $3$: $2 + 5 = \mathbf{7\text{ houses}}$.

---

## Part C: Grouped Frequency Distribution

### Why Group Data?

One week, Liam's dad also noted the **ages** of $30$ customers visiting the shop (to see whether mostly children or adults shop there):

```
12, 25, 34, 20, 18, 45, 30, 27, 15, 38,
52, 22, 41, 33, 19, 28, 40, 36, 24, 57,
31, 14, 29, 47, 35, 21, 50, 26, 39, 30
```

Here the ages span from $12$ to $57$. Giving every single age its own row would create **more than $40$ rows**, most of them with frequency $0$ or $1$. A table that long would tell us almost nothing.

Instead, we sort the values into **brackets (groups)** such as $10\text{–}20, 20\text{–}30, 30\text{–}40, \dots$ Each group is called a **class** (or **class interval**), and the resulting table is a **grouped frequency distribution**.

### Anatomy of a Class Interval

Look closely at the class **$20\text{–}30$**:

| Part | Meaning | For $20\text{–}30$ |
|---|---|---|
| **Lower limit** | The smaller endpoint of the class | $20$ |
| **Upper limit** | The larger endpoint of the class | $30$ |
| **Class size** (width) | $\text{Upper limit} - \text{Lower limit}$ | $30 - 20 = \mathbf{10}$ |
| **Class mark** | $\frac{\text{Lower limit} + \text{Upper limit}}{2}$ (the midpoint) | $\frac{20 + 30}{2} = \mathbf{25}$ |

The **class mark** acts as the single representative number for the whole class. Whenever we need one number to stand in for an entire interval — in graphs or mean calculations later on — we use its class mark.

### How Many Classes, and How Wide?

1. First find the **range** (from Topic 1): $57 - 12 = \mathbf{45}$.
2. Decide roughly how many classes you want. Usually **$5$ to $10$** classes works best. Suppose we choose $5$ classes.
3. Estimate the class size: $\text{Range} \div \text{number of classes} = 45 \div 5 = 9$. Round up to a **convenient number**: **$10$**.
4. Pick the first class so that it comfortably captures the smallest observation ($12$): start at **$10\text{–}20$**.

Our classes become: **$10\text{–}20, 20\text{–}30, 30\text{–}40, 40\text{–}50, 50\text{–}60$**. The largest observation, $57$, fits neatly inside the final class ✅.

### Example 2: Customer Ages Table

| Age (Class) | Tally | Frequency |
|---|---|---|
| 10–20 | IIII/ | 5 |
| 20–30 | IIII/ IIII | 9 |
| 30–40 | IIII/ IIII | 9 |
| 40–50 | IIII | 4 |
| 50–60 | III | 3 |
| **Total** | | **30** |

**Check:** $5 + 9 + 9 + 4 + 3 = 30$ ✅

Wait — a natural question pops up right here: which class did the customer aged **$20$** go into — $10\text{–}20$ or $20\text{–}30$? And what about the two customers aged **$30$**? Let us answer that next.

**Reading the table:**
- Which age groups had the most customers? **$20\text{–}30$ and $30\text{–}40$** ($9$ customers each).
- How many customers were aged $50$ or older? **$3$**.

---

## Part D: Exclusive and Inclusive Classes

### Exclusive (Continuous) Classes: Upper Limit Excluded

In Example 2 ($10\text{–}20, 20\text{–}30, 30\text{–}40, \dots$), the upper limit of each class is identical to the lower limit of the next class. There are no gaps between intervals. These are called **exclusive** (or **continuous**) classes.

> **Convention:** The class $10\text{–}20$ means **values greater than or equal to $10$ and strictly less than $20$** ($10 \le x < 20$).
> The upper limit is **not included** in that class; it belongs to the next class.

Therefore, in Example 2:
- Age **$20$** goes into **$20\text{–}30$** (not $10\text{–}20$)
- Both ages of **$30$** go into **$30\text{–}40$**
- Age **$40$** goes into **$40\text{–}50$**
- Age **$50$** goes into **$50\text{–}60$**

Thanks to this convention, no boundary value is ever **counted twice**, and no value is ever **left out**.

### Inclusive (Discontinuous) Classes: Both Limits Included

Sometimes classes are written like this: **$10\text{–}19, 20\text{–}29, 30\text{–}39, \dots$**

Here, both $10$ and $19$ are **included** in the first class. These are called **inclusive** (or **discontinuous**) classes. They work fine when data consists solely of whole numbers, such as integer test scores or counts.

Notice, however, that there is a **gap** between $19$ and $20$. If someone scored $19.5$, which class would it belong to? Neither! For continuous graphs like histograms, we must convert inclusive classes into exclusive form first.

### Converting Inclusive Classes to Exclusive Form

1. Find the gap between adjacent classes: $\text{next lower limit} - \text{previous upper limit} = 20 - 19 = \mathbf{1}$.
2. Take half of the gap: $1 \div 2 = \mathbf{0.5}$.
3. **Subtract $0.5$ from every lower limit**, and **add $0.5$ to every upper limit**.

### Example 3

| Inclusive Class | Exclusive Class (True Class Limits) | Frequency |
|---|---|---|
| 10–19 | 9.5–19.5 | 4 |
| 20–29 | 19.5–29.5 | 7 |
| 30–39 | 29.5–39.5 | 9 |
| 40–49 | 39.5–49.5 | 5 |
| **Total** | | **25** |

- Now there are no gaps between classes.
- The adjusted boundaries ($9.5, 19.5, \dots$) are called **true class limits** (or **class boundaries**).
- **Class size** $= 19.5 - 9.5 = \mathbf{10}$ (not $19 - 10 = 9$!).
- The **class mark** stays unchanged: $\frac{10 + 19}{2} = 14.5$, and $\frac{9.5 + 19.5}{2} = 14.5$ ✅.
- **Frequencies do not change** — only the interval boundaries are adjusted.

---

## Part E: Finding Classes from Class Marks

Sometimes you are given only the class marks and asked to reconstruct the class intervals.

### Example 4

The class marks of a distribution are **$12, 17, 22, 27$**. Find the class intervals.

1. $\text{Class size} = \text{difference between two consecutive class marks} = 17 - 12 = \mathbf{5}$.
2. Half of the class size $= 2.5$.
3. Each class runs from $(\text{class mark} - 2.5)$ to $(\text{class mark} + 2.5)$.

| Class Mark | Class Interval |
|---|---|
| 12 | 9.5–14.5 |
| 17 | 14.5–19.5 |
| 22 | 19.5–24.5 |
| 27 | 24.5–29.5 |

**Check:** $\frac{9.5 + 14.5}{2} = 12$ ✅, and the intervals join seamlessly with no gaps.

---

## Part F: Cumulative Frequency (Less-Than Type)

Now Liam's dad asks: "How many customers are **under $30$ years old**?"

To answer that, we add the frequencies of $10\text{–}20$ and $20\text{–}30$: $5 + 9 = 14$. Because questions like this come up often, we add a **running-total** column to the table. That running total is called **cumulative frequency** ($\text{c.f.}$).

> **Cumulative frequency** $=$ the **sum of all frequencies up to and including** that class (adding downward row by row).

### Example 5: Customer Ages (from Example 2)

| Age | Frequency | Cumulative Frequency ($\text{c.f.}$) | Meaning |
|---|---|---|---|
| 10–20 | 5 | 5 | Under $20$: $5$ |
| 20–30 | 9 | $5 + 9 = \mathbf{14}$ | Under $30$: $14$ |
| 30–40 | 9 | $14 + 9 = \mathbf{23}$ | Under $40$: $23$ |
| 40–50 | 4 | $23 + 4 = \mathbf{27}$ | Under $50$: $27$ |
| 50–60 | 3 | $27 + 3 = \mathbf{30}$ | Under $60$: $30$ |

**Check:** The final cumulative frequency is **$30$**, which equals the total number of customers ✅. This must always match.

This is called a **"less-than" cumulative frequency**, because each number tells you how many observations fall **below the upper limit** of that class.

**Reading the table:**
- Customers under $30$: **$14$**
- Customers aged $40$ or older: $\text{total} - (\text{under } 40) = 30 - 23 = \mathbf{7}$ (check: $4 + 3 = 7$ ✅)
- Customers between $20$ and $40$: $(\text{under } 40) - (\text{under } 20) = 23 - 5 = \mathbf{18}$ (check: $9 + 9 = 18$ ✅)

Cumulative frequency will play a key role when we find the **median** in Topic 6, so make sure you are comfortable with it now.

### Example 6: Recovering Frequencies from Cumulative Frequencies

Suppose a table gives only the cumulative frequencies:

| Class | 0–10 | 10–20 | 20–30 | 30–40 | 40–50 |
|---|---|---|---|---|---|
| $\text{c.f.}$ | 6 | 15 | 27 | 35 | 40 |

Each class frequency equals $(\text{current c.f.}) - (\text{previous c.f.})$:

| Class | 0–10 | 10–20 | 20–30 | 30–40 | 40–50 |
|---|---|---|---|---|---|
| Frequency | 6 | $15 - 6 = \mathbf{9}$ | $27 - 15 = \mathbf{12}$ | $35 - 27 = \mathbf{8}$ | $40 - 35 = \mathbf{5}$ |

**Check:** $6 + 9 + 12 + 8 + 5 = 40 = \text{final c.f.}$ ✅

---

## Common Pitfalls to Avoid

1. **Mistake 1: Placing a boundary value in the wrong class.**
   In exclusive classes, $20$ always belongs to **$20\text{–}30$**, not $10\text{–}20$. The upper limit is excluded from the class.

2. **Mistake 2: Counting an observation twice.**
   When building tallies from raw data, cross off each number as you tally it. Otherwise it is easy to double-count or skip values, throwing off your total.

3. **Mistake 3: Confusing class mark and class size.**
   For $20\text{–}30$, the **class mark** is $25$ (the midpoint), whereas the **class size** is $10$ (the width). They measure two different things.

4. **Mistake 4: Calculating the class size of an inclusive class incorrectly.**
   The class size of $10\text{–}19$ is **$10$**, not $9$. Find it using true limits ($19.5 - 9.5 = 10$) or the difference between consecutive lower limits ($20 - 10 = 10$).

5. **Mistake 5: Making tally bundles of the wrong size.**
   A bundle is **$5$**: four vertical strokes crossed by one diagonal stroke ($\text{IIII/}$). Do not draw five vertical strokes before crossing, or your counts will be off.

6. **Mistake 6: Ignoring a mismatch between the final cumulative frequency and the total count.**
   If your final $\text{c.f.}$ does not equal the total number of observations, there is an arithmetic error in your running sum — recheck it.

7. **Mistake 7: Changing frequencies when converting inclusive classes to exclusive form.**
   Only the class boundaries change ($-0.5$ and $+0.5$). The **frequencies remain identical**.

---

## Quick Recap

- **Frequency** $=$ how many times a value occurs. Count cleanly using **tally marks** in bundles of $5$ ($\text{IIII/}$).
- **Ungrouped table:** one row per distinct value. Best when there are only a few distinct values.
- **Grouped table:** sort values into class intervals. Best when the data spans a wide range.
- For the class $20\text{–}30$: lower limit $= 20$, upper limit $= 30$, **class size** $= 10$, **class mark** $= 25$.
- To choose a class size: compute $\text{range} \div \text{desired number of classes}$ and round up to a convenient number.
- **Exclusive classes** ($10\text{–}20, 20\text{–}30$): upper limit excluded, so $20$ enters $20\text{–}30$.
- **Inclusive classes** ($10\text{–}19, 20\text{–}29$): both limits included. Convert to exclusive form by subtracting $0.5$ from lower limits and adding $0.5$ to upper limits.
- **Cumulative frequency** $=$ running total of frequencies; the last $\text{c.f.}$ equals the total number of observations.
- **Always check:** $\text{sum of all frequencies} = \text{total number of observations}$.

---

## Practice Questions

1. The number of goals scored by a football team in $20$ matches is given below:
   $1, 2, 0, 3, 1, 2, 1, 0, 4, 2, 1, 3, 2, 1, 0, 2, 1, 1, 3, 2$
   (a) Make a frequency distribution table using tally marks.
   (b) In how many matches did the team score $2$ or more goals?

2. For the classes $0\text{–}10, 10\text{–}20, 20\text{–}30, 30\text{–}40$, write:
   (a) the class size
   (b) the class mark of $20\text{–}30$
   (c) the upper limit of the third class
   (d) the class in which the value $30$ will be placed

3. Convert the classes $1\text{–}5, 6\text{–}10, 11\text{–}15, 16\text{–}20$ into exclusive (continuous) form. What is the class size?

4. The weights (in $\text{kg}$) of $25$ students are:
   $42, 36, 48, 31, 45, 40, 38, 52, 44, 35, 47, 33, 41, 39, 50, 46, 37, 43, 34, 49, 40, 45, 38, 53, 42$
   (a) Make a grouped frequency table with classes $30\text{–}35, 35\text{–}40, 40\text{–}45, 45\text{–}50, 50\text{–}55$.
   (b) How many students weigh less than $45\text{ kg}$?
   (c) Make the cumulative frequency (less-than type) column.

5. The class marks of a distribution are $25, 35, 45, 55, 65$. Find the class size and write the classes.

6. The cumulative frequencies of the classes $0\text{–}10, 10\text{–}20, 20\text{–}30, 30\text{–}40, 40\text{–}50$ are $4, 10, 18, 25, 30$. Find the frequency of each class. How many observations lie between $20$ and $40$?

7. The data $18, 45, 27, 9, 33, 41$ is to be put into about $4$ classes. Find the range and suggest a suitable class size.

8. State True or False:
   (a) In the class $20\text{–}30$, the value $30$ is included.
   (b) The class mark of $10\text{–}20$ is $15$.
   (c) The sum of all frequencies equals the total number of observations.
   (d) The class size of $9.5\text{–}19.5$ is $10$.

### Answers

1. (a)

| Goals | Tally | Frequency |
|---|---|---|
| 0 | III | 3 |
| 1 | IIII/ II | 7 |
| 2 | IIII/ I | 6 |
| 3 | III | 3 |
| 4 | I | 1 |
| **Total** | | **20** |

   Check: $3 + 7 + 6 + 3 + 1 = 20$ ✅
   (b) Matches with $2, 3,$ or $4$ goals: $6 + 3 + 1 = \mathbf{10\text{ matches}}$

2. (a) Class size $= 10 - 0 = \mathbf{10}$
   (b) Class mark $= (20 + 30) \div 2 = \mathbf{25}$
   (c) The third class is $20\text{–}30$, so its upper limit is **$30$**
   (d) $30$ goes into **$30\text{–}40$** (the upper limit is excluded in exclusive classes)

3. $\text{Gap} = 6 - 5 = 1$, half $= 0.5$.
   Classes: **$0.5\text{–}5.5, 5.5\text{–}10.5, 10.5\text{–}15.5, 15.5\text{–}20.5$**. Class size $= 5.5 - 0.5 = \mathbf{5}$.

4. (a)

| Weight (kg) | Tally | Frequency |
|---|---|---|
| 30–35 | III | 3 |
| 35–40 | IIII/ I | 6 |
| 40–45 | IIII/ II | 7 |
| 45–50 | IIII/ I | 6 |
| 50–55 | III | 3 |
| **Total** | | **25** |

   Check: $3 + 6 + 7 + 6 + 3 = 25$ ✅ ($35$ enters $35\text{–}40$; both $40$s enter $40\text{–}45$; both $45$s enter $45\text{–}50$; $50$ enters $50\text{–}55$)
   (b) Less than $45\text{ kg}$: $3 + 6 + 7 = \mathbf{16\text{ students}}$
   (c) Cumulative frequencies: **$3, 9, 16, 22, 25$** (final $\text{c.f.} = 25 =$ total students ✅)

5. Class size $= 35 - 25 = \mathbf{10}$, half $= 5$.
   Classes: **$20\text{–}30, 30\text{–}40, 40\text{–}50, 50\text{–}60, 60\text{–}70$** (check: $(20 + 30) \div 2 = 25$ ✅)

6. Frequencies: $4$, $10 - 4 = \mathbf{6}$, $18 - 10 = \mathbf{8}$, $25 - 18 = \mathbf{7}$, $30 - 25 = \mathbf{5}$.
   Check: $4 + 6 + 8 + 7 + 5 = 30$ ✅
   Between $20$ and $40$ ($20\text{–}30$ and $30\text{–}40$): $8 + 7 = \mathbf{15}$ (or $25 - 10 = 15$ ✅)

7. $\text{Range} = 45 - 9 = \mathbf{36}$. $36 \div 4 = 9$, so a class size of **$9$** works, or **$10$** for neatness (e.g., $0\text{–}10, 10\text{–}20, 20\text{–}30, 30\text{–}40, 40\text{–}50$).

8. (a) **False** ❌. $30$ goes into the next class, $30\text{–}40$.
   (b) **True** ✅. $(10 + 20) \div 2 = 15$.
   (c) **True** ✅. This is the universal total check.
   (d) **True** ✅. $19.5 - 9.5 = 10$.

---

Scattered data no longer looks intimidating. Count with tallies, build the table, and check that the frequencies sum to the total. Just like Liam and Sophia, you can read the story inside the data at a glance.

**What comes next?** We have our table, but what if we could turn that table into a **picture**? In Topic 3, we will convert tables into **bar graphs** and **histograms**, where the tallest bar immediately tells the story.
