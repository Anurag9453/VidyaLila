# Chapter: Statistics

> **Class:** 9 | **Subject:** Mathematics
> **This is a brand-new chapter.** So far, we have worked with abstract numbers, shapes, and formulas. In this chapter, we work with **real-world numbers**: survey responses from people, sports scores, and weather temperatures. Collecting them, organising them, displaying them in graphs, and drawing meaning from them — this is what **Statistics** is all about.
> **Topics covered in this file:**
> 1. Introduction to Statistics and Data

---

# Topic 1: Introduction to Statistics and Data

In earlier chapters, we chose our own numbers: "suppose $x = 3$," or "a triangle with sides $13$, $14$, $15$." In real life, however, we do not invent the numbers — they **come from the world around us**: how far someone lives from school, how many runs a player scored, or how much rain fell yesterday. These numbers arrive scattered and jumbled, and to make sense of them we need a systematic method. In this topic, we begin building that method: **what data is, where it comes from, and how to organise it cleanly.**

---

## Leo and the School Bus Story

**Leo** is the student representative for his Class 9 homeroom. One morning, the school principal called him into her office:

"Leo, the school is planning to launch a new bus route. I need to know **how far from school** the students in your class live. Please find out and bring me the figures by tomorrow."

Leo went around his class, asked each student, and jotted down their answers on a sheet of paper. By the afternoon, he had responses from $20$ students (in km):

```
3, 7, 2, 12, 5, 3, 9, 1, 4, 6,
3, 15, 2, 8, 5, 4, 3, 10, 6, 2
```

Leo took the sheet to the principal. She looked at it and asked:
- "Who lives the farthest?"
- "Who lives the closest?"
- "How many students live within $3\text{ km}$ of school?"

Leo stared at his paper and froze. All the numbers were right there, yet completely **jumbled**. For every single question, he had to scan the entire list from start to finish.

When he got home, he did one simple thing: he rewrote all the numbers in **order from smallest to largest**.

```
1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 9, 10, 12, 15
```

Now every answer jumped right off the page:
- Closest distance: **$1\text{ km}$**. Farthest distance: **$15\text{ km}$**.
- Within $3\text{ km}$: $1, 2, 2, 2, 3, 3, 3, 3$ — that is **$8$ students**.

Without even realising it, Leo had just performed the core work of **Statistics**: **collecting data, organising it, and extracting clear answers from it.** Throughout this chapter, we will learn even sharper ways to do exactly this.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Statistics** | The science of collecting, organising, presenting, analysing, and interpreting data | Leo's school bus survey |
| **Data** | Facts or numbers collected in response to a question | Leo's list of $20$ distances |
| **Observation** | A single recorded response or measurement in a data set | The number $7$ for "Maya lives $7\text{ km}$ away" |
| **Variable** | The quantity or characteristic being measured, which can vary from person to person | "Distance from school" |
| **Raw data** | Data in its original, unorganised form just as it was collected | Leo's first jumbled list |
| **Primary data** | Data that you collect **yourself**, first-hand | Leo's own classroom survey |
| **Secondary data** | Data collected by **someone else**, which you use for your work | Last year's rainfall figures published in a newspaper |
| **Range** | The difference between the largest and smallest observations | $15 - 1 = 14\text{ km}$ |

---

## Part A: What Is Statistics?

Statistics is a systematic way of **turning a pile of numbers into a clear story**. It involves five main steps. Look at them alongside what Leo did:

| Step | Meaning | What Leo did |
|---|---|---|
| 1. **Collection** | Gathering data by asking questions or taking measurements | Asked each classmate for their distance |
| 2. **Organisation** | Arranging data in order or in a table | Wrote the numbers from smallest to largest |
| 3. **Presentation** | Showing data in tables or graphs so it is clear at a glance | *(We will do this in Topics 2 and 3)* |
| 4. **Analysis** | Carrying out calculations on the data | Found the farthest, closest, and count within $3\text{ km}$ |
| 5. **Interpretation** | Drawing conclusions and making decisions from the analysis | "Most students live nearby, so the bus should serve a short route" |

### Where Is Statistics Used?

You see statistics every day, often without calling it by that name:

- **Sports:** A batter's average, strike rate, or which bowler or pitcher took the most wickets or strikeouts.
- **Weather:** "There is a $70\%$ chance of rain tomorrow." This comes from analysing years of historical weather data.
- **Elections:** In exit polls, interviewers question a sample of voters to estimate results across an entire country.
- **Cost of living:** Tracking the prices of groceries, milk, and fuel every month shows how fast prices are rising.
- **Medicine:** Testing how effective a new treatment is across hundreds of patients.
- **Video platforms and apps:** Tracking which videos are watched most often helps platforms recommend what to play next.

### Two Meanings of the Word "Statistics"

The word *statistics* is used in two distinct ways:

1. **As a subject (singular):** The entire field and set of methods for working with data. *"I am studying statistics this term."*
2. **As numerical facts (plural):** Collected numerical figures about a specific topic. *"Look at this season's cricket statistics: our team's opener scored $650$ runs in $12$ matches."*

---

## Part B: Data, Observation, and Variable

**Data** is a collection of facts gathered to answer a question. Each individual entry in that collection is called an **observation**.

In Leo's survey:
- **Question:** "How far do you live from school?"
- **Variable:** Distance from school (it can differ from student to student — that is why it is called a *variable*)
- **Data:** The full list of $20$ numbers
- **One observation:** For example, "$7$" (one student's response)
- **Number of observations:** $20$

### Two Types of Data

| | **Quantitative** (numerical) | **Qualitative** (descriptive / categorical) |
|---|---|---|
| What it tells us | How much, or how many | What kind, or which category |
| Examples | Height, age, distance, runs scored, weight | Favourite colour, native language, mode of transport (bus / cycle / walk) |
| What you can do with it | Add values together, find an average | Count how many people chose each category |

A quick test: **Is the answer a number for which adding and subtracting actually makes sense?** If yes, it is quantitative; if no, it is qualitative.

Watch out: a student ID number or bus route number is written with digits, yet adding two bus numbers together has no meaning. Numbers like those act merely as **labels**.

Inside quantitative data, there is one more small distinction (just a quick preview):
- **Counted (discrete):** Whole numbers only, such as the number of siblings ($0, 1, 2, \dots$). You cannot have $2.5$ siblings.
- **Measured (continuous):** Any value along a scale, such as height ($152.4\text{ cm}$) or weight ($41.75\text{ kg}$).

This distinction will come in handy in Topic 2 when we build class intervals.

---

## Part C: Primary and Secondary Data

Depending on where the data comes from, we classify it into two types.

### Primary Data

Data that **you collect yourself, for the first time**, specifically for your own question.

Examples:
- Leo personally asking every classmate how far they live from school.
- A market vendor recording each day how many kilograms of potatoes he sells.
- Going door-to-door across $30$ houses on your street to count how many households own a bicycle.

### Secondary Data

Data that **someone else has already collected**, which you take and use for your own purpose.

Examples:
- Last year's rainfall figures read in a newspaper.
- National population data taken from a government census website.
- A player's career match scores downloaded from a sports website.

### Comparing the Two

| | Primary data | Secondary data |
|---|---|---|
| Who collected it | You, yourself | Someone else |
| Time and effort | Higher | Lower |
| Reliability | Higher (you know how it was gathered) | Depends on the source |
| Fit to your question | Tailored exactly to what you need | May not match your exact question |

**An interesting twist:** the exact same data can be primary for one person and secondary for another. Leo's list is **primary data for Leo**. If the local bus company later uses Leo's list to plan its route, that same list becomes **secondary data for the bus company**.

---

## Part D: How Data Is Collected

### Four Common Methods

| Method | What it is | Example |
|---|---|---|
| **Survey** | Asking the same set of questions to a group of people | Leo asking every classmate their distance from school |
| **Questionnaire** | A written form of questions that people fill out themselves | A school end-of-term feedback form |
| **Interview** | A face-to-face conversation asking detailed questions | A journalist asking a farmer about this season's harvest |
| **Records** | Checking information already written down or logged | A library borrowing register or a hospital file |

### Writing Fair Questions

A question should allow the respondent to give an **honest** answer without nudging them.

- Weak question: *"Don't you agree that our school's sports ground is excellent?"*
  This pushes the reader toward saying "yes."
- Better question: *"How would you rate our school's sports ground? (Very good / Average / Poor)"*

### Asking a Fair Sample

Suppose you want to know the favourite sport of **the entire school**, and you only ask the $15$ members of the school cricket team. Almost all of them will say "cricket." That does not mean the whole school prefers cricket.

Whenever you cannot ask everyone, ask a **balanced mix of people**: from every year group, both boys and girls, athletes and non-athletes alike. And record every response **honestly**, without changing answers to fit what you hoped to find.

---

## Part E: Organising Raw Data and Finding the Range

### Putting Data in Order

The simplest first step to tame raw data is to arrange it in order:
- **Ascending order:** from smallest to largest
- **Descending order:** from largest to smallest

A quick habit: after ordering the list, **count the numbers** to verify you have the exact same total as before. That ensures no observation was dropped or written twice by mistake.

### Range

$$\text{Range} = \text{Largest observation} - \text{Smallest observation}$$

The range tells you **how spread out** the data is from end to end.

### Solved Examples

**Example 1: Leo's distance data**

Ascending order: $1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 9, 10, 12, 15$

- Largest $= 15$, smallest $= 1$
- **$\text{Range} = 15 - 1 = 14\text{ km}$**
- Living farther than $10\text{ km}$: $12$ and $15$, which is **$2$ students**

**Check:** Count: $20$ numbers in the original list, $20$ in the ordered list ✅

**Example 2: A batter's scores across $10$ matches**

Raw data: $45, 12, 78, 0, 33, 101, 56, 8, 67, 23$

Ascending: $0, 8, 12, 23, 33, 45, 56, 67, 78, 101$
Descending: $101, 78, 67, 56, 45, 33, 23, 12, 8, 0$

- **$\text{Range} = 101 - 0 = 101\text{ runs}$**
- Matches with $50$ or more runs: $56, 67, 78, 101$ — that is **$4$ matches**

**Check:** Both lists contain $10$ numbers ✅

**Example 3: Morning temperatures for a week in an Alpine hill town ($^\circ\text{C}$)**

Raw data: $4, -2, 1, 6, -3, 0, 3$

Ascending: $-3, -2, 0, 1, 3, 4, 6$

- Smallest $= -3$ (notice that $-3$ is the coldest, so it is the smallest number)
- **$\text{Range} = 6 - (-3) = 6 + 3 = 9^\circ\text{C}$**

**Check:** Count the steps from $-3$ to $6$ on a number line: $9$ steps ✅

**Example 4: Weights of $8$ school backpacks ($\text{kg}$)**

Raw data: $3.5, 4.2, 2.8, 5.1, 3.9, 4.6, 3.2, 2.5$

Ascending: $2.5, 2.8, 3.2, 3.5, 3.9, 4.2, 4.6, 5.1$

- **$\text{Range} = 5.1 - 2.5 = 2.6\text{ kg}$**

**Example 5: Working backwards from the range**

The range of a data set is $25$ and the smallest observation is $17$. What is the largest observation?

$\text{Largest} - 17 = 25$, so **$\text{Largest} = 42$**

**Check:** $42 - 17 = 25$ ✅

---

## Common Pitfalls to Avoid

1. **Mistake 1: Taking the first and last numbers of the raw list for the range without ordering first.**
   In Leo's raw list, the first number is $3$ and the last is $2$. The range is *not* $3 - 2 = 1$. Order the data first, then subtract the true smallest from the true largest: $15 - 1 = 14$.

2. **Mistake 2: Computing the range incorrectly with negative numbers.**
   If temperatures run from $-3$ to $6$, the range is not $6 - 3 = 3$; it is $6 - (-3) = \mathbf{9}$.

3. **Mistake 3: Writing repeated numbers only once when ordering.**
   In Leo's list, $3$ appears four times. You must write all four of them when ordering, otherwise both your count and your answers will be wrong.

4. **Mistake 4: Confusing primary vs. secondary data with "numbers vs. words."**
   The distinction depends on **who collected the data**, not on whether the values are numbers or words.

5. **Mistake 5: Assuming every numerical code is quantitative data.**
   Student ID numbers, postal codes, and bus route numbers are written with digits, but adding them together makes no sense. They serve purely as labels.

6. **Mistake 6: Asking only one group and claiming it represents everyone.**
   Asking only the cricket team and concluding "the whole school's favourite sport is cricket" produces a biased conclusion.

---

## Quick Recap

- **Statistics** $=$ collecting, organising, presenting, analysing, and interpreting data.
- Two meanings of "statistics": a **subject/discipline** (singular) and **numerical facts** (plural).
- **Data** $=$ a collection of facts; each entry is an **observation**; the measured characteristic is a **variable**.
- **Quantitative** data (numerical, like height) vs. **qualitative** data (categorical, like favourite colour).
- **Primary** data is collected by you first-hand; **secondary** data is collected by someone else.
- Ways to collect data: surveys, questionnaires, interviews, and existing records. Keep questions unbiased and samples fair.
- Order raw data in **ascending** or **descending** order, and always double-check the count.
- **$\text{Range} = \text{Largest observation} - \text{Smallest observation}$.**

---

## Practice Questions

1. State whether each of the following is primary or secondary data:
   (a) A student measures the heights of all her classmates herself.
   (b) Population figures taken from a government census website.
   (c) A shopkeeper notes how many umbrellas he sells each day this month.
   (d) Last year's rainfall figures read in a newspaper.

2. State whether each variable gives qualitative or quantitative data:
   (a) Favourite colour
   (b) Number of brothers and sisters
   (c) Height of a student
   (d) Mother tongue

3. The ages (in years) of $8$ people waiting at a bus stop are: $34, 18, 52, 27, 18, 45, 61, 30$. Arrange them in ascending order and find the range.

4. The minimum temperatures (in $^\circ\text{C}$) of a mountain town on six days were: $-5, 2, -1, 7, 3, -4$. Find the range.

5. The range of a set of data is $38$ and the smallest observation is $24$. Find the largest observation.

6. A survey form asks: "Don't you agree that our school's sports facilities are excellent?" What is wrong with this question? Rewrite it as a fair question.

7. To find the favourite sport of all the students in a school, Elena asks only the $15$ members of the school cricket team. Is this a fair way to collect the data? Give a reason.

8. Arrange the following weights (in $\text{kg}$) in descending order and find the range: $2.4, 3.1, 1.8, 2.9, 3.5$.

### Answers

1. (a) **Primary.** The student measured the heights herself.
   (b) **Secondary.** The government collected this data; we are only reusing it.
   (c) **Primary.** The shopkeeper is recording the sales himself.
   (d) **Secondary.** The newspaper published figures collected by another agency.

2. (a) **Qualitative** (a colour is a category, not a numerical measurement)
   (b) **Quantitative** (a countable number)
   (c) **Quantitative** (a numerical measurement)
   (d) **Qualitative** (a language is a category)

3. Ascending order: **$18, 18, 27, 30, 34, 45, 52, 61$**
   $\text{Range} = 61 - 18 = \mathbf{43\text{ years}}$
   Check: $8$ numbers originally, $8$ written, with $18$ appearing twice ✅

4. Largest $= 7$, smallest $= -5$.
   $\text{Range} = 7 - (-5) = 7 + 5 = \mathbf{12^\circ\text{C}}$

5. $\text{Largest} - 24 = 38$, so $\text{Largest} = \mathbf{62}$.
   Check: $62 - 24 = 38$ ✅

6. The question pushes respondents toward agreeing ("yes"), so it will not capture honest opinions.
   A fairer question: **"How would you rate our school's sports facilities? (Very good / Average / Poor)"**

7. **No, this is not fair.** Almost all cricket team members will name cricket. To represent the whole school, you should ask students across every grade level and both athletes and non-athletes.

8. Descending order: **$3.5, 3.1, 2.9, 2.4, 1.8$**
   $\text{Range} = 3.5 - 1.8 = \mathbf{1.7\text{ kg}}$

---

Well done! You have mastered the first essential step of statistics: recognising data, collecting it fairly, ordering it, and finding its range. Just like Leo, you can now pull clear answers out of a jumbled page of numbers.

**What comes next?** Leo's class had $20$ students, so an ordered list was easy to handle. What if you have data for $500$ students across an entire school? Writing out $500$ numbers in a line would be exhausting. In Topic 2, we will learn **tally marks** and **frequency distribution tables**, which pack even huge data sets into one compact, readable table.
