# Chapter: Probability (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [probability.md](probability.md)** (which covers Topic 1: the language of chance, experiment, random experiment, trial, outcome, event, certain and impossible events, and the coin toss).
> **Helpful background:** tally marks and frequency tables, plus converting fractions to decimals and percentages ([../number-systems/number-systems-part2.md](../number-systems/number-systems-part2.md)).
> **Topics covered in this file:**
> 2. Probability from Experiments (Empirical Probability)

---

# Topic 2: Probability from Experiments (Empirical Probability)

In Topic 1, Leo and Maya's coin toss introduced the words we use for chance: "probably," "certain," and "impossible." We saw that a random experiment's outcome cannot be predicted ahead of time, and that an event is a collection of outcomes. Still, "probably" is too vague — we want to ask: **how probable?** Can we turn chance into an exact number?

In this topic, we learn the most direct way to measure chance: **do the experiment, repeat it many times, and count**. The number we get from counting actual trials is called **empirical probability** (also known as experimental probability).

---

## Dr. Bennett's Bottle Cap

In science class, **Dr. Bennett** hands every student a plastic water-bottle cap and asks a simple question: *"When you toss this cap onto the floor, does it land **upright (open side up)** or **upside down**? Make a guess!"*

Some students call out, "50-50!" Others guess, "Upright more often!" Dr. Bennett smiles. *"Like a coin, this cap has two ways to land — yet unlike a coin, a bottle cap isn't flat and symmetric. You can't work this out from a textbook; you have to **ask the cap itself**!"*

**Sophia** tosses her bottle cap $20$ times and keeps a tally:

| Outcome | Tally | Frequency |
|---|---|---|
| Upright (open side up) | $\cancel{\text{IIII}}$ III | $8$ |
| Upside down | $\cancel{\text{IIII}}$ $\cancel{\text{IIII}}$ II | $12$ |
| **Total** | | **$20$** |

Sophia looks at her table. *"Dr. Bennett, it landed upright $8$ times out of $20$. So is the chance of landing upright $\frac{8}{20} = 0.4$?"*

*"Good start,"* says Dr. Bennett. *"Still, how much should we trust just $20$ tosses? Let us combine the whole class's data."*

Everyone's tosses are added up on the whiteboard. Dr. Bennett records the cumulative totals:

| Total tosses | Upright count | Upright / Total | Decimal |
|---|---|---|---|
| $20$ | $8$ | $\frac{8}{20}$ | $0.400$ |
| $100$ | $41$ | $\frac{41}{100}$ | $0.410$ |
| $200$ | $83$ | $\frac{83}{200}$ | $0.415$ |
| $500$ | $208$ | $\frac{208}{500}$ | $0.416$ |

Sophia notices something striking: *"At the start, the number could jump around a lot, yet as the tosses grew, the ratio **settled down near $0.4$**!"*

*"Precisely,"* Dr. Bennett replies. *"That is the whole idea. A tiny experiment is noisy; a large experiment is far more reliable."*

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Empirical (experimental) probability** | Chance measured by doing an experiment: number of times the event happened $\div$ total trials | Bottle cap landed upright $208$ times in $500$ tosses: $\frac{208}{500}$ |
| **Relative frequency** | Another name for empirical probability: a frequency divided by the total number of trials | $\frac{41}{100}$ |
| **Frequency** | How many times a specific outcome occurred | Upright: $8$ times |
| **Total trials** | How many times the experiment was performed in all (sum of all frequencies) | $20, 100, 200, 500$ |
| **Stabilize (settle)** | When the ratio stops jumping wildly and hovers near a steady value as trials increase | $0.400, 0.410, 0.415, 0.416$ |

---

## Part A: The Idea and Formula

When we cannot figure out the chance beforehand, we **run an experiment**: repeat the action many times and record the counts.

$$P(E) = \frac{\text{Number of trials in which event } E \text{ happened}}{\text{Total number of trials}}$$

We read $P(E)$ aloud as *"the probability of event $E$."*

In Sophia's $20$ bottle-cap tosses:
- $E =$ "cap lands upright"
- $E$ happened $8$ times out of $20$ total trials
- $P(E) = \frac{8}{20}$

Practise writing every probability in all three equivalent forms (see [../number-systems/number-systems-part2.md](../number-systems/number-systems-part2.md) if you need a quick refresher):

- Fraction: $\frac{8}{20} = \frac{2}{5}$
- Decimal: $8 \div 20 = 0.4$
- Percentage: $0.4 \times 100 = 40\%$

**Check:** $40\%$ means $40$ out of $100$. Since $8$ out of $20$ scales up ($\times 5$) to $40$ out of $100$, all three forms match ✅.

Notice that "count $\div$ total" builds straight on frequency tables from Statistics: finding empirical probability is simply one extra division step — dividing each frequency by the total!

---

## Part B: Worked Tables

### Example 1: The Full Story of the Bottle Cap

Here is the complete cumulative record from Dr. Bennett's class ($500$ tosses):

| Total tosses | Upright | Upside down | Upright / Total | Percent |
|---|---|---|---|---|
| $20$ | $8$ | $12$ | $\frac{8}{20} = 0.4$ | $40\%$ |
| $100$ | $41$ | $59$ | $\frac{41}{100} = 0.41$ | $41\%$ |
| $200$ | $83$ | $117$ | $\frac{83}{200} = 0.415$ | $41.5\%$ |
| $500$ | $208$ | $292$ | $\frac{208}{500} = 0.416$ | $41.6\%$ |

**Check:** In every row, $\text{Upright} + \text{Upside down} = \text{Total}$: $8 + 12 = 20$, $41 + 59 = 100$, $83 + 117 = 200$, $208 + 292 = 500$ ✅

Now ask: **Based on all $500$ tosses, what is the empirical probability of landing upside down?**
- $P(\text{upside down}) = \frac{292}{500} = 0.584 = \mathbf{58.4\%}$

**Check:** $P(\text{upright}) + P(\text{upside down}) = 0.416 + 0.584 = 1$ ✅

Why do they add to $1$? Because on every toss, the cap landed either upright or upside down — no tosses were left out ($208 + 292 = 500$). We will explore this rule further in Part D.

Dr. Bennett writes on the board: *"The probability of landing upright is **about $0.4$**."* Notice the word **"about"**: if another class ran $500$ more tosses, $0.416$ could shift slightly.

### Example 2: Tossing a Coin $100$ Times

A coin is tossed $100$ times:

| Outcome | Tally | Frequency | Probability (fraction) | Decimal | Percent |
|---|---|---|---|---|---|
| Heads | $54$ times (from tally) | $54$ | $\frac{54}{100} = \frac{27}{50}$ | $0.54$ | $54\%$ |
| Tails | $46$ times | $46$ | $\frac{46}{100} = \frac{23}{50}$ | $0.46$ | $46\%$ |
| **Total** | | **$100$** | | | |

**Check:** $54 + 46 = 100$ ✅ and $0.54 + 0.46 = 1$ ✅

If you ask someone, *"How many heads should you get in $100$ flips?"*, they will say $50$. Getting $54$ instead of $50$ is completely normal! Experimental numbers almost always fluctuate slightly around what we expect (we will examine why in Part C).

### Example 3: Rolling a Die $200$ Times

A six-sided die is rolled $200$ times:

| Outcome | Frequency | Probability (fraction) | Decimal |
|---|---|---|---|
| $1$ | $31$ | $\frac{31}{200}$ | $0.155$ |
| $2$ | $36$ | $\frac{36}{200}$ | $0.180$ |
| $3$ | $30$ | $\frac{30}{200}$ | $0.150$ |
| $4$ | $35$ | $\frac{35}{200}$ | $0.175$ |
| $5$ | $33$ | $\frac{33}{200}$ | $0.165$ |
| $6$ | $35$ | $\frac{35}{200}$ | $0.175$ |
| **Total** | **$200$** | **$\frac{200}{200}$** | **$1.000$** |

**Check:** $31 + 36 + 30 + 35 + 33 + 35 = 200$ ✅ ($31+36 = 67$, $+30 = 97$, $+35 = 132$, $+33 = 165$, $+35 = 200$)

Now use this table to find the empirical probabilities of several events:

**(a) $P(\text{even number})$**
- Even outcomes: $2, 4, 6$. Combined frequency: $36 + 35 + 35 = 106$
- $P = \frac{106}{200} = \frac{53}{100} = 0.53 = \mathbf{53\%}$

**(b) $P(\text{number greater than } 4)$**
- Greater than $4$: $5$ and $6$. Combined frequency: $33 + 35 = 68$
- $P = \frac{68}{200} = \frac{17}{50} = 0.34 = \mathbf{34\%}$

**(c) $P(\text{odd number})$**
- Odd outcomes: $1, 3, 5$. Combined frequency: $31 + 30 + 33 = 94$
- $P = \frac{94}{200} = \frac{47}{100} = 0.47 = \mathbf{47\%}$

**(d) $P(\text{number less than } 3)$**
- Outcomes $1$ and $2$. Combined frequency: $31 + 36 = 67$
- $P = \frac{67}{200} = 0.335 = \mathbf{33.5\%}$

**Check:** Events (a) and (c) together cover every face of the die: $0.53 + 0.47 = 1$ ✅

### Example 4: Survey — $50$ Students' Favourite Subject

Fifty students were asked to pick their single favourite subject:

| Subject | Frequency | Probability (fraction) | Decimal | Percent |
|---|---|---|---|---|
| Mathematics | $14$ | $\frac{14}{50}$ | $0.28$ | $28\%$ |
| Science | $12$ | $\frac{12}{50}$ | $0.24$ | $24\%$ |
| English | $9$ | $\frac{9}{50}$ | $0.18$ | $18\%$ |
| Art | $6$ | $\frac{6}{50}$ | $0.12$ | $12\%$ |
| Social Studies | $9$ | $\frac{9}{50}$ | $0.18$ | $18\%$ |
| **Total** | **$50$** | **$\frac{50}{50}$** | **$1.00$** | **$100\%$** |

**Check:** $14 + 12 + 9 + 6 + 9 = 50$ ✅ and $28 + 24 + 18 + 12 + 18 = 100$ ✅

Suppose we pick **one student at random from these $50$**:
- $P(\text{likes Mathematics}) = \frac{14}{50} = 0.28$
- $P(\text{likes Art or English}) = \frac{6 + 9}{50} = \frac{15}{50} = 0.3 = 30\%$

**Note:** These probabilities apply strictly to **this group of $50$ surveyed students**. Survey $50$ students at another school, and the percentages may shift.

### Example 5: Class Record — Scores of $40$ Batters

In a school tournament, $40$ batters played an innings. Here are their scores:

| Score range | Batters (frequency) |
|---|---|
| $0$ to $24$ | $14$ |
| $25$ to $49$ | $13$ |
| $50$ to $99$ | $10$ |
| $100$ or more | $3$ |
| **Total** | **$40$** |

**Check:** $14 + 13 + 10 + 3 = 40$ ✅

Pick one batter at random from these $40$. What is the probability that **this batter scored $50$ or more**?

- Scored $50$ or more: those scoring $50$–$99$ ($10$) plus $100+$ ($3$), giving $10 + 3 = 13$ batters.
- $P = \frac{13}{40} = 0.325 = \mathbf{32.5\%}$

**What about $100$ or more?** $P = \frac{3}{40} = 0.075 = \mathbf{7.5\%}$

**What about under $25$?** $P = \frac{14}{40} = 0.35 = \mathbf{35\%}$

**Check:** $13$ batters scored $50$ or more, so $40 - 13 = 27$ scored under $50$. $\frac{13}{40} + \frac{27}{40} = \frac{40}{40} = 1$ ✅

---

## Part C: Stability as the Number of Trials Grows

Something puzzled Sophia: *"Dr. Bennett, after $20$ tosses we got $0.4$, and after $500$ tosses we got $0.416$. Will that ratio ever lock onto one exact number forever?"*

Dr. Bennett ran a coin-flipping tracker, recording the **running ratio** (total heads so far $\div$ total tosses so far):

| Total tosses | Heads so far | Heads / Total |
|---|---|---|
| $10$ | $7$ | $0.70$ |
| $20$ | $12$ | $0.60$ |
| $50$ | $29$ | $0.58$ |
| $100$ | $54$ | $0.54$ |

View this as a horizontal bar chart (each `#` represents $0.05$):

```text
Tosses    Heads / Total
  10   |##############   0.70
  20   |############     0.60
  50   |############     0.58
 100   |###########      0.54
       +-------------------> 1.0
```

In a tiny run ($10$ tosses), the ratio can swing sharply ($0.70$). As the number of trials grows larger, the swings shrink and the ratio **begins to stabilize** around a steady level.

**Two crucial takeaways:**
1. **More trials give greater reliability.** A ratio from $10$ tosses swings wildly; a ratio from $500$ tosses is much steadier.
2. **There is no guarantee of hitting an exact pre-set number.** The ratio stabilizes, yet another $500$-toss run of the bottle cap might give $0.41$ or $0.42$ instead of $0.416$. Every experiment produces its own fresh data.

That is why we always say empirical probability is **"based on the experiment"** — it is an **estimate** that improves as more data is collected.

---

## Part D: Two Key Properties of Empirical Probability

Look back at the die table in Example 3.

**Property 1: Every probability lies between $0$ and $1$ (inclusive).**

Check the decimals: $\frac{31}{200} = 0.155$, $\frac{36}{200} = 0.180$, $\dots$ — all between $0$ and $1$. Why? Because the number of times an event happens can never exceed the total number of trials! At most, it happens in every single trial ($\frac{200}{200} = 1$). At least, it never happens at all (such as rolling a $7$: $\frac{0}{200} = 0$).

**Property 2: The probabilities of all individual outcomes add up to $1$.**

In the die table:

$$0.155 + 0.18 + 0.15 + 0.175 + 0.165 + 0.175$$
$$= 0.335 + 0.15 = 0.485 + 0.175 = 0.66 + 0.165 = 0.825 + 0.175 = \mathbf{1.000}$$

This had to happen: the frequencies add up to $200$, so dividing each by $200$ and adding gives $\frac{200}{200} = 1$.

Likewise, in the bottle-cap table $0.416 + 0.584 = 1$, in the coin table $0.54 + 0.46 = 1$, and in the subject survey $0.28 + 0.24 + 0.18 + 0.12 + 0.18 = 1$.

We will inspect both properties even more closely in Topic 4. Keep them in mind for now!

---

## Part E: Empirical Probability in Real Life

Whenever we want to answer *"How likely is this?"* and cannot deduce the answer by pure symmetry, we turn to historical data and relative frequencies:

- **Weather forecasting:** If past weather records show rain on June $10$ in $18$ out of $30$ years, forecasters can note an empirical chance of $\frac{18}{30} = 0.6 = 60\%$.
- **Auto insurance:** Out of $1{,}000$ insured cars in a city last year, $30$ were involved in a claim. The empirical accident rate is $\frac{30}{1{,}000} = 0.03 = 3\%$. Insurance companies use rates like this to set fair premiums.
- **Sports analytics:** A player hit $12$ boundary shots out of the last $60$ pitches/balls faced. Their empirical rate is $\frac{12}{60} = 0.2 = 20\%$ — past records help predict future performance.
- **Factory quality control inspections:** An inspector tests a sample of $200$ light bulbs from an assembly line and finds $3$ defective bulbs.
  - $P(\text{defective}) = \frac{3}{200} = 0.015 = \mathbf{1.5\%}$
  - $P(\text{working}) = \frac{197}{200} = 0.985 = \mathbf{98.5\%}$
  - **Check:** $0.015 + 0.985 = 1$ ✅
  - The factory estimates a defect rate of roughly $1.5\%$. In a batch of $10{,}000$ bulbs, they would expect around $10{,}000 \times 0.015 = 150$ defective bulbs ("around," because empirical estimates always carry some variation).

---

## Common Pitfalls to Avoid

1. **Mistake 1: Dividing by the wrong total.**
   In Sophia's $20$ bottle-cap tosses, $8$ landed upright and $12$ upside down.
   - Wrong: $8 \div 12$ (dividing only by the upside-down count)
   - Correct: $8 \div \mathbf{20}$ (dividing by **total trials**)
   The denominator must always be **all trials combined**, never just one category.

2. **Mistake 2: Dividing favourable by unfavourable ("the rest").**
   In $100$ coin flips, there were $54$ heads and $46$ tails.
   - Wrong: $P(\text{heads}) = \frac{54}{46} \approx 1.17$
   - Correct: $P(\text{heads}) = \frac{54}{100} = 0.54$
   $\frac{54}{46}$ compares heads against tails — it is not a probability! Probability always puts the **grand total** in the denominator.

3. **Mistake 3: Expecting $10$ tosses to split cleanly $5$ and $5$.**
   Flipping a fair coin $10$ times does not force $5$ heads! Getting $7$ heads (like the first row of Part C's table: $0.70$) or $4$ heads is completely normal. Small samples bounce around; that is why we rely on **large** numbers of trials.

4. **Mistake 4: Writing a probability greater than $1$.**
   In $50$ flips, suppose $30$ are heads.
   - Wrong: $30 \div 20 = 1.5$ (divided by the wrong number!)
   - Correct: $30 \div 50 = 0.6$
   An event cannot happen more times than the total number of trials, so a probability can **never exceed $1$**. If you ever get an answer above $1$, stop immediately and re-check your denominator!

---

## Quick Recap

- When probabilities cannot be deduced in advance, **repeat the experiment many times and count**.
- **Empirical probability:** $P(E) = \frac{\text{Number of trials where } E \text{ occurred}}{\text{Total number of trials}}$ (also called **relative frequency**).
- From a frequency table: divide each frequency by the total. Express answers as fractions, decimals, or percentages.
- Bottle cap: $\frac{8}{20}, \frac{41}{100}, \frac{83}{200}, \frac{208}{500}$ ($0.4, 0.41, 0.415, 0.416$). **As trials increase, the ratio stabilizes.**
- Stabilizing does not guarantee landing on an exact pre-set number; each experiment has natural variation.
- Every probability lies between **$0$ and $1$**, and **all individual outcome probabilities sum to $1$**.
- Real-world uses: weather forecasts, auto insurance, sports analytics, and factory quality control inspections.
- Pitfalls: wrong denominator, dividing favourable by unfavourable, expecting $5$-and-$5$ in $10$ flips, and probabilities $> 1$.

---

## Practice Questions

1. A coin was tossed $80$ times and heads came up $38$ times. Find the empirical probability of getting heads and of getting tails. Write each as a fraction, a decimal, and a percent. What do the two probabilities add up to?

2. A die was rolled $60$ times with these results:

   | Outcome | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
   |---|---|---|---|---|---|---|
   | Frequency | $8$ | $11$ | $9$ | $12$ | $10$ | $10$ |

   (a) Check that the frequencies add up to $60$. (b) Find $P(6)$. (c) Find $P(\text{odd number})$. (d) Find $P(\text{a number that is at least } 4)$.

3. A quality control inspector checked $500$ pens from a factory and found $12$ faulty ones. Find the empirical probability that a pen chosen at random from this sample is faulty, and that it is not faulty. Add the two probabilities.

4. In $40$ tosses of a bottle cap, it landed upright $18$ times. A student says, *"The probability of landing upright is $18 \div 22 \approx 0.82$."* What mistake did the student make? Give the correct value.

5. Use the favourite-subject survey of $50$ students from Example 4. Find the probability that a randomly chosen student from that survey likes Mathematics or Science.

6. Use the table of $40$ batters from Example 5. Find the probability that a randomly chosen batter scored from $25$ to $99$ (both included).

7. State True or False, with a short reason:
   (a) If a coin is tossed $10$ times, heads must come up exactly $5$ times.
   (b) The empirical probability of an event can be $1.5$.
   (c) The empirical probabilities of all the outcomes of an experiment add up to $1$.
   (d) With more trials, the empirical probability usually settles near some value.

8. A coin was tossed $10$, $20$, $50$, and $100$ times (running totals), with $3$, $8$, $22$, and $47$ heads respectively. Write the running ratio $\text{heads} \div \text{tosses}$ for each and say what you notice as the number of tosses grows.

### Answers

1. $P(\text{heads}) = \frac{38}{80} = \frac{19}{40} = 0.475 = \mathbf{47.5\%}$.
   Tails $= 80 - 38 = 42$, so $P(\text{tails}) = \frac{42}{80} = \frac{21}{40} = 0.525 = \mathbf{52.5\%}$.
   Check (sum): $0.475 + 0.525 = \mathbf{1}$ ✅ ($38 + 42 = 80$)

2. (a) Check: $8 + 11 + 9 + 12 + 10 + 10 = 60$ ✅ ($8+11 = 19$, $+9 = 28$, $+12 = 40$, $+10 = 50$, $+10 = 60$)
   (b) $P(6) = \frac{10}{60} = \frac{1}{6} \approx \mathbf{0.167}$
   (c) Odd ($1, 3, 5$): frequency $8 + 9 + 10 = 27$. $P = \frac{27}{60} = \frac{9}{20} = \mathbf{0.45}$
   (d) At least $4$ ($4, 5, 6$): frequency $12 + 10 + 10 = 32$. $P = \frac{32}{60} = \frac{8}{15} \approx \mathbf{0.533}$
   Check: $P(\text{even}) = \frac{11 + 12 + 10}{60} = \frac{33}{60} = 0.55$, and $0.45 + 0.55 = 1$ ✅

3. $P(\text{faulty}) = \frac{12}{500} = 0.024 = \mathbf{2.4\%}$.
   Not faulty $= 500 - 12 = 488$, so $P(\text{not faulty}) = \frac{488}{500} = 0.976 = \mathbf{97.6\%}$.
   Check (sum): $0.024 + 0.976 = \mathbf{1}$ ✅

4. The student divided by the upside-down tosses ($40 - 18 = 22$), computing favourable $\div$ unfavourable (Mistake 2). The denominator must be the total number of trials ($40$). Correct: $18 \div 40 = \frac{9}{20} = \mathbf{0.45}$ ($45\%$).
   Check: $P(\text{upside down}) = \frac{22}{40} = 0.55$, and $0.45 + 0.55 = 1$ ✅

5. Mathematics ($14$) $+$ Science ($12$) $= 26$. $P = \frac{26}{50} = \frac{13}{25} = \mathbf{0.52}$.
   Check: remaining subjects $9 + 6 + 9 = 24$, and $26 + 24 = 50$ ✅

6. Scored $25$–$49$ ($13$) $+$ scored $50$–$99$ ($10$) $= 23$. $P = \frac{23}{40} = \mathbf{0.575 = 57.5\%}$.
   Check: remaining batters $14 + 3 = 17$, and $23 + 17 = 40$ ✅

7. (a) **False** ❌. You could easily get $7$ or $4$ heads; small experiments fluctuate widely.
   (b) **False** ❌. An event cannot occur more times than the total trials, so probability can never exceed $1$.
   (c) **True** ✅. Frequencies sum to total trials, so dividing by total trials makes the probabilities sum to $1$.
   (d) **True** ✅. That is stability — though it is not guaranteed to equal a pre-selected number exactly.

8. $\frac{3}{10} = \mathbf{0.30}$, $\frac{8}{20} = \mathbf{0.40}$, $\frac{22}{50} = \mathbf{0.44}$, $\frac{47}{100} = \mathbf{0.47}$.
   Notice how the ratio jumped sharply at first ($0.30$ to $0.40$), then changed by smaller amounts at each step as it began settling down — more trials produce a steadier ratio.

---

Just like Sophia counting and dividing, you now have a firm grip on empirical probability. Whenever you face real-world data, ask: *"How many total trials occurred, and how many times did my event happen?"*

**What comes next?** So far, we had to toss the coin or cap over and over first. Can we sometimes find probability **without running any trials at all**? Yes — whenever all outcomes are equally likely! In Topic 3, we will open a mystery bag of coloured tokens and compute **theoretical probability** directly by counting.
