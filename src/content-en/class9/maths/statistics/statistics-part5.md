# Chapter: Statistics (Part 5)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [statistics-part4.md](statistics-part4.md).** (Topic 1 is in [statistics.md](statistics.md).)
> **Topics covered in this file:**
> 5. Measures of Central Tendency: Mean of Ungrouped Data

---

# Topic 5: Measures of Central Tendency: Mean of Ungrouped Data

In earlier topics, we collected data, organised it into ungrouped and grouped frequency tables, and visualised its **shape** using bar graphs, histograms, and frequency polygons. In Topic 4, Dr. Bennett plotted October and November patient polygons on one set of axes and immediately saw that flu season hit children and seniors hardest. Graphs are wonderful for seeing where data rises, peaks, and spreads.

Yet very often, we do not want an entire shape — we want **a single representative number** that speaks for the whole data set. Questions like "How well did the class score overall?" or "How much does our electricity bill usually come to?" call for one summary value. In this topic, we meet the first and most widely used summary number: the **mean** (often called the **average**).

---

## Maya's Café Electricity Bill

**Maya's** family runs a busy corner bakery and café, and her father pays the electricity bill every month. One evening he said, "I want to set aside the exact same budget every month so the bill never catches us off guard. How much should I set aside?"

Maya pulled out the last $6$ months of bills:

| Month | Jan | Feb | Mar | Apr | May | Jun |
|---|---|---|---|---|---|---|
| Bill (USD) | 800 | 950 | 1100 | 1400 | 1250 | 1100 |

Every month is different, so picking just one month would be misleading. Setting aside $800$ dollars would leave them short in hotter months; setting aside $1400$ dollars would lock up extra cash in cooler months.

Maya thought: "What if we pool all six bills together and **split the total equally across the $6$ months**? How much would each month get?"

$$\text{Total bill} = 800 + 950 + 1100 + 1400 + 1250 + 1100 = 6600\text{ dollars}$$

$$\text{Equal share per month} = 6600 \div 6 = \mathbf{1100\text{ dollars}}$$

Her dad smiled: "Perfect — we will set aside $1100$ dollars every month. Some months we spend a little less and save the extra; some months we spend a little more and dip into that savings, and over six months it balances out to the cent."

That number — **$1100$** — is the **mean** of this data set.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Central tendency** | A single typical or "centre" value that summarises an entire data set | One number representing the whole group |
| **Mean (average)** | The sum of all observations divided by the number of observations | Mean of the café bills is $1100$ |
| **Observation** | An individual value in the data set | Each monthly bill is one observation |
| **$\sum$ (sigma)** | Mathematical symbol meaning "take the sum of" | $\sum x_i$ means the sum of all $x$ values |
| **$\bar{x}$ ($x$-bar)** | Standard symbol for the mean | $\bar{x} = 1100$ |
| **Deviation** | How far an observation lies above or below the mean (with sign) | $800 - 1100 = -300$ |
| **Outlier** | An extreme value that sits far away from the rest of the data | Most friends have around $100$ dollars, while one has $1100$ dollars |

---

## Part A: Why "One Number"? Central Tendency

There are three classic ways to pick a single number to represent a data set:

1. **Mean** (arithmetic average): pool everything and share equally. *(Covered in this topic.)*
2. **Median**: line all values up in order and pick the middle one.
3. **Mode**: pick the value that appears most often.

We will study the median and mode in Topic 6. Together, all three are called **measures of central tendency**, because each one points toward the "centre" or typical value of the data.

---

## Part B: Mean of Raw Data

### The "Fair Share" Idea

Five friends have the following numbers of marbles:

| Friend | A | B | C | D | E |
|---|---|---|---|---|---|
| Marbles | 3 | 7 | 4 | 8 | 3 |

If they put all their marbles into one pile and share them equally, how many marbles will each friend get?

Before (unequal stacks):

```
           o
     o     o
     o     o
     o     o
     o  o  o
  o  o  o  o  o
  o  o  o  o  o
  o  o  o  o  o
  A  B  C  D  E
  3  7  4  8  3
```

After (levelled out equally):

```
  o  o  o  o  o
  o  o  o  o  o
  o  o  o  o  o
  o  o  o  o  o
  o  o  o  o  o
  A  B  C  D  E
  5  5  5  5  5
```

Total marbles $= 3 + 7 + 4 + 8 + 3 = 25$. Shared equally among $5$ friends $= 25 \div 5 = \mathbf{5}$.

That is all the mean does: **take from the taller stacks and top up the shorter stacks until every stack stands at the same level.** That common level is the mean.

### The Formula and What $\sum$ Means

If there are $n$ observations $x_1, x_2, x_3, \dots, x_n$, then:

$$\text{Mean} = \bar{x} = \frac{x_1 + x_2 + \dots + x_n}{n}$$

Writing out $x_1 + x_2 + \dots + x_n$ every time gets tedious, so mathematicians use the Greek capital letter **$\sum$ (sigma)** as shorthand for *"sum all of them up"*:

$$\bar{x} = \frac{\sum x_i}{n}$$

Read this aloud as: *"$x$-bar equals the sum of all $x_i$, divided by $n$."*

Do not let $\sum$ intimidate you — it is not a complicated new operation, just a compact symbol meaning **"add them all together."**

### Example 1: Ages in a Dance Class

Ages (in years): $12, 13, 13, 14, 15, 11$

$$\sum x_i = 12 + 13 + 13 + 14 + 15 + 11 = 78, \quad n = 6$$

$$\bar{x} = \frac{78}{6} = \mathbf{13\text{ years}}$$

**Check:** $13 \times 6 = 78$ ✅

### Example 2: Daily Walking Distances

On four days of a week, Elena walked these distances (in $\text{km}$): $2.5, 3, 4, 3.5$.

$$\sum x_i = 2.5 + 3 + 4 + 3.5 = 13$$

$$\bar{x} = \frac{13}{4} = \mathbf{3.25\text{ km}}$$

Notice that Elena never walked *exactly* $3.25\text{ km}$ on any single day. The mean does not have to appear in the data set itself — we will explore this property in Part D.

---

## Part C: Mean of an Ungrouped Frequency Table

In Topic 2, we organised larger data sets into **frequency tables**, recording how many times ($f_i$) each value ($x_i$) occurred. Now let us see how to compute the mean straight from that table.

### Example 3: Number of Children per Household

In a neighbourhood survey, $20$ families were asked, "How many children live in your home?"

| Children ($x_i$) | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Families ($f_i$) | 2 | 6 | 8 | 3 | 1 |

Read the middle column like this: $8$ families have $2$ children each, contributing $8 \times 2 = 16$ children in total.

Do that for every row by adding an **$f_i x_i$** column:

| $x_i$ | $f_i$ | $f_i x_i$ |
|---|---|---|
| 0 | 2 | 0 |
| 1 | 6 | 6 |
| 2 | 8 | 16 |
| 3 | 3 | 9 |
| 4 | 1 | 4 |
| **Total** | **$\sum f_i = 20$** | **$\sum f_i x_i = 35$** |

- **$\sum f_i x_i$** $=$ total number of children $= 35$
- **$\sum f_i$** $=$ total number of families $= 20$

$$\bar{x} = \frac{\sum f_i x_i}{\sum f_i} = \frac{35}{20} = \mathbf{1.75}$$

So on average, there are **$1.75$ children per family**. No family literally has $1.75$ children, yet this single figure accurately summarises the whole neighbourhood.

**Why does this work?** If you wrote out all $20$ observations individually ($0, 0, 1, 1, 1, 1, 1, 1, 2, 2, \dots$) and applied Part B's formula, you would still add up to $35$ and divide by $20$. Multiplying $f_i x_i$ is simply a neat shortcut for repeated addition.

### Example 4: Books Read Over the Holidays

| Books ($x_i$) | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Students ($f_i$) | 4 | 7 | 5 | 3 | 1 |

| $x_i$ | $f_i$ | $f_i x_i$ |
|---|---|---|
| 1 | 4 | 4 |
| 2 | 7 | 14 |
| 3 | 5 | 15 |
| 4 | 3 | 12 |
| 5 | 1 | 5 |
| **Total** | **$20$** | **$50$** |

$$\bar{x} = \frac{50}{20} = \mathbf{2.5\text{ books}}$$

**Check:** $20\text{ students} \times 2.5 = 50\text{ books}$ ✅

### What About Grouped Data?

When data is given in **class intervals** (such as $10\text{–}20, 20\text{–}30$), we use each class's **class mark** (its midpoint from Topic 2) as $x_i$ and apply the exact same $\frac{\sum f_i x_i}{\sum f_i}$ formula. You will study grouped-data means in full detail in higher grades; here we focus on ungrouped (discrete) data.

---

## Part D: Five Useful Properties of the Mean

### Property 1: The Sum of Deviations from the Mean Is Always $0$

In our marble example, the mean was $5$. How far above or below $5$ was each friend?

| Friend | Marbles ($x_i$) | Deviation ($x_i - \bar{x}$) |
|---|---|---|
| A | 3 | $-2$ |
| B | 7 | $+2$ |
| C | 4 | $-1$ |
| D | 8 | $+3$ |
| E | 3 | $-2$ |
| **Sum** | | **$0$** |

The surpluses above the mean ($+2 + 3 = +5$) cancel out the deficits below it ($-2 - 1 - 2 = -5$) completely.

Picture a **seesaw**. The mean is the exact balance point where the weights on both sides balance perfectly:

```
   values:   3  3  4     5     7  8
             ●  ●  ●           ●  ●
   ══════════════════════▲══════════════════
                         mean = 5
```

This always holds true:

$$\sum (x_i - \bar{x}) = 0$$

### Property 2: Add $k$ to Every Value, and the Mean Increases by $k$

Suppose every friend receives $2$ extra marbles: $5, 9, 6, 10, 5$.

New mean $= 35 \div 5 = \mathbf{7} = \text{old mean } 5 + 2$ ✅.

In general: **if every observation is increased (or decreased) by $k$, the mean increases (or decreases) by $k$.**

### Property 3: Multiply Every Value by $k$, and the Mean Is Multiplied by $k$

Suppose every friend's marbles are tripled: $9, 21, 12, 24, 9$.

New mean $= 75 \div 5 = \mathbf{15} = 5 \times 3$ ✅.

In general: **if every observation is multiplied (or divided) by $k$ ($k \ne 0$), the mean is multiplied (or divided) by $k$.**

### Property 4: The Mean Need Not Be an Observation in the Data

$1.75$ children, $2.5$ books, $3.25\text{ km}$ — all of these are valid means, yet none appeared in the original data. The mean is a **calculated balance value**, not necessarily an actual measurement from the list.

### Property 5: One Extreme Value Pulls the Mean Toward Itself

Five friends have weekly allowances (in dollars): $100, 120, 110, 90, 80$.

Mean $= 500 \div 5 = \mathbf{100\text{ dollars}}$. That sits right in the middle of everyone's allowance — a fair summary.

Now a sixth friend joins the group, whose weekly allowance is $1100$ dollars.

New mean $= (500 + 1100) \div 6 = 1600 \div 6 \approx \mathbf{266.67\text{ dollars}}$.

The mean is now nearly $267$ dollars, even though **not a single one of the six friends** has anything close to $267$ dollars! Five have between $80$ and $120$ dollars, and one has $1100$ dollars. The mean no longer tells an accurate story.

Such an extreme observation is called an **outlier**. An outlier drags the mean toward itself. For data with outliers, we need a summary measure that resists extreme values — which is exactly what we will learn in Topic 6.

---

## Part E: Classic Mean Problems

### Example 5: Finding a Missing Value

The mean of $5$ numbers is $18$. Four of the numbers are $12, 20, 15, 16$. Find the fifth number.

Remember this golden relation: $\text{Mean} \times \text{Count} = \text{Total Sum}$.

$$\text{Total sum} = 18 \times 5 = 90$$

$$\text{Sum of four numbers} = 12 + 20 + 15 + 16 = 63$$

$$\text{Fifth number} = 90 - 63 = \mathbf{27}$$

**Check:** $(12 + 20 + 15 + 16 + 27) \div 5 = 90 \div 5 = 18$ ✅

### Example 6: Finding a Missing Frequency ($p$)

The mean of the distribution below is $13$. Find the value of $p$.

| $x_i$ | 5 | 10 | 15 | 20 |
|---|---|---|---|---|
| $f_i$ | 2 | $p$ | 6 | 4 |

| $x_i$ | $f_i$ | $f_i x_i$ |
|---|---|---|
| 5 | 2 | 10 |
| 10 | $p$ | $10p$ |
| 15 | 6 | 90 |
| 20 | 4 | 80 |
| **Total** | **$12 + p$** | **$180 + 10p$** |

Using $\bar{x} = \frac{\sum f_i x_i}{\sum f_i}$:

$$\frac{180 + 10p}{12 + p} = 13$$

$$180 + 10p = 13(12 + p) = 156 + 13p$$

$$180 - 156 = 13p - 10p \implies 24 = 3p \implies \mathbf{p = 8}$$

**Check:** $\sum f_i = 20$, $\sum f_i x_i = 180 + 80 = 260$, $\bar{x} = 260 \div 20 = 13$ ✅

### Example 7: Correcting a Misread Value

The mean of $30$ numbers was calculated as $40$. Later, it was discovered that **$72$** had been misread as **$27$**. Find the correct mean.

$$\text{Incorrect sum} = 40 \times 30 = 1200$$

$$\text{Correct sum} = 1200 - 27\text{ (remove wrong)} + 72\text{ (add right)} = \mathbf{1245}$$

$$\text{Correct mean} = \frac{1245}{30} = \mathbf{41.5}$$

**Check:** The true sum is $72 - 27 = 45$ higher. Sharing $45$ across $30$ numbers adds $45 \div 30 = 1.5$, giving $40 + 1.5 = 41.5$ ✅.

### Example 8: Combined Mean of Two Groups

Section A has $30$ students with a mean score of $62$. Section B has $20$ students with a mean score of $72$. Find the combined mean score of all $50$ students.

$$\text{Total for Section A} = 30 \times 62 = 1860$$

$$\text{Total for Section B} = 20 \times 72 = 1440$$

$$\text{Combined total} = 3300, \quad \text{Total students} = 50$$

$$\text{Combined mean} = \frac{3300}{50} = \mathbf{66}$$

Watch out: $(62 + 72) \div 2 = 67$ is **wrong**, because the two sections are not equal in size. The larger group (Section A) carries more weight, pulling the combined mean closer to $62$.

### Example 9: Algebra with the Mean

The mean of $x, x + 2, x + 4, x + 6, x + 8$ is $11$. Find $x$.

$$\text{Sum} = 5x + 20$$

$$\frac{5x + 20}{5} = 11 \implies 5x + 20 = 55 \implies 5x = 35 \implies \mathbf{x = 7}$$

**Check:** The numbers are $7, 9, 11, 13, 15$. Sum $= 55$, mean $= 11$ ✅

### Example 10: Mean of the First $10$ Natural Numbers

$$1 + 2 + \dots + 10 = 55$$

$$\text{Mean} = \frac{55}{10} = \mathbf{5.5}$$

---

## Common Pitfalls to Avoid

1. **Mistake 1: Dividing $\sum f_i x_i$ by the number of rows instead of $\sum f_i$.**
   In Example 4 (books read), the table has $5$ rows, yet $50 \div 5 = 10$ books is wrong. Always divide by **$\sum f_i$** (the total number of observations, $20$): $50 \div 20 = 2.5$.

2. **Mistake 2: Forgetting to multiply $x_i$ by $f_i$ and adding only the $x_i$ column.**
   In Example 4, $1 + 2 + 3 + 4 + 5 = 15$, and $15 \div 20 = 0.75$ is completely wrong. Every value must be weighted by its frequency $f_i$.

3. **Mistake 3: Averaging two group means directly when group sizes differ.**
   Never compute $(62 + 72) \div 2$ when groups have different sizes. First compute each group's **total sum**, add the sums, and divide by the combined count.

4. **Mistake 4: Adding the correct value without subtracting the wrong value first.**
   When fixing a misread entry, you must **remove** the mistaken value before adding the right one: $1200 - 27 + 72$, not $1200 + 72$.

5. **Mistake 5: Assuming the mean is always the best typical value.**
   When an outlier is present (as in the allowance example), the mean sits far away from almost every observation. In such cases, we need another measure.

6. **Mistake 6: Panicking when the mean is a decimal that is not in the data.**
   Answers like $1.75$ children or $2.5$ books are completely normal and accurate.

---

## Quick Recap

- **Mean (average)** $= \text{sum of all observations} \div \text{number of observations}$ — the "share equally" value.
- **Raw data:** $\bar{x} = \frac{\sum x_i}{n}$, where $\sum$ means "add them all up."
- **Frequency table:** $\bar{x} = \frac{\sum f_i x_i}{\sum f_i}$. Build the $f_i x_i$ column and divide by $\sum f_i$ (not by the number of rows).
- **$\text{Total sum} = \text{Mean} \times \text{Count}$.** This single rule solves missing-value, misread-value, and combined-mean problems.
- **Key properties:**
  - $\sum (x_i - \bar{x}) = 0$ (seesaw balance)
  - Adding $k$ to every value increases the mean by $k$
  - Multiplying every value by $k$ multiplies the mean by $k$
  - The mean need not be one of the observations
  - Outliers pull the mean toward themselves
- Mean of grouped data (using class marks) is covered in detail in higher classes.

---

## Practice Questions

1. Find the mean of $7, 9, 11, 13, 15, 17$.

2. Find the mean of $4.2, 3.8, 5.0, 4.6, 3.4$.

3. Find the mean of the following distribution:

   | $x_i$ | 1 | 2 | 3 | 4 | 5 | 6 |
   |---|---|---|---|---|---|---|
   | $f_i$ | 3 | 5 | 8 | 6 | 2 | 1 |

4. The mean of $6$ numbers is $15$. Five of them are $10, 12, 18, 20,$ and $14$. Find the sixth number.

5. The mean of the following distribution is $22$. Find $p$.

   | $x_i$ | 10 | 20 | 30 | 40 |
   |---|---|---|---|---|
   | $f_i$ | 5 | 8 | $p$ | 2 |

6. The mean of $25$ observations was found to be $36$. Later it was found that $47$ was misread as $74$. Find the correct mean.

7. The mean of $5$ numbers is $20$.
   (a) If $3$ is added to each number, what is the new mean?
   (b) If each number is multiplied by $2$, what is the new mean?

8. Class A has $25$ students with a mean score of $60$. Class B has $35$ students with a mean score of $72$. Find the mean score of all $60$ students together.

9. If the mean of $y, y + 3, y + 6,$ and $y + 9$ is $10.5$, find $y$.

10. State whether each statement is true or false. Give a reason.
    (a) The mean must always be one of the values in the data.
    (b) The sum of deviations of all values from their mean is zero.
    (c) A single very large value can change the mean a lot.

### Answers

1. $\sum x_i = 7 + 9 + 11 + 13 + 15 + 17 = 72$, $n = 6$
   $\bar{x} = 72 \div 6 = \mathbf{12}$

2. $\sum x_i = 4.2 + 3.8 + 5.0 + 4.6 + 3.4 = 21.0$, $n = 5$
   $\bar{x} = 21.0 \div 5 = \mathbf{4.2}$

3. $f_i x_i$ column: $3, 10, 24, 24, 10, 6$
   $\sum f_i = 3 + 5 + 8 + 6 + 2 + 1 = 25$
   $\sum f_i x_i = 3 + 10 + 24 + 24 + 10 + 6 = 77$
   $\bar{x} = 77 \div 25 = \mathbf{3.08}$

4. Total sum $= 15 \times 6 = 90$
   Sum of five numbers $= 10 + 12 + 18 + 20 + 14 = 74$
   Sixth number $= 90 - 74 = \mathbf{16}$
   Check: $90 \div 6 = 15$ ✅

5. $\sum f_i = 15 + p$, $\sum f_i x_i = 50 + 160 + 30p + 80 = 290 + 30p$
   $(290 + 30p) \div (15 + p) = 22$
   $290 + 30p = 330 + 22p$
   $8p = 40 \implies \mathbf{p = 5}$
   Check: $\sum f_i = 20$, $\sum f_i x_i = 440$, mean $= 22$ ✅

6. Incorrect sum $= 36 \times 25 = 900$
   Correct sum $= 900 - 74 + 47 = 873$
   Correct mean $= 873 \div 25 = \mathbf{34.92}$

7. (a) Adding $3$ to each number adds $3$ to the mean: **$23$**
   (b) Multiplying each number by $2$ doubles the mean: **$40$**

8. Total for Class A $= 25 \times 60 = 1500$; total for Class B $= 35 \times 72 = 2520$
   Combined mean $= (1500 + 2520) \div 60 = 4020 \div 60 = \mathbf{67}$
   *(Notice that $(60 + 72) \div 2 = 66$ would be wrong.)*

9. Sum $= 4y + 18$
   $(4y + 18) \div 4 = 10.5$
   $4y + 18 = 42 \implies 4y = 24 \implies \mathbf{y = 6}$
   Check: $6, 9, 12, 15$ sum to $42$, mean $= 10.5$ ✅

10. (a) **False** ❌. For example, the mean of $1$ and $2$ is $1.5$, which is not in the data.
    (b) **True** ✅. Positive and negative deviations from the mean always cancel out (the seesaw balance).
    (c) **True** ✅. An outlier pulls the mean strongly toward itself (as in the allowance example).

---

Remember the simplest mental picture of the mean: **pool everything together and divide equally.** Every formula in this topic flows straight from that single idea.

**What comes next?** In the allowance example, one wealthy newcomer distorted the mean completely. In Topic 6, we meet two alternative averages — **median** (the middle value in order) and **mode** (the most frequent value) — that tell a much truer story when extreme values are present.
