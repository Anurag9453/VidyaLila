# Chapter: Probability (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [probability-part3.md](probability-part3.md).** The chapter begins in [probability.md](probability.md).
> **Topics covered in this file:**
> 4. Limits of Probability and Complementary Events

---

# Topic 4: Limits of Probability and Complementary Events

In Topic 3, we learned the direct formula for theoretical probability: **$P(E) = \frac{n(E)}{n(S)}$** (favourable outcomes $\div$ total equally likely outcomes). Whether working with a token bag or a die, every answer came out as a fraction. Now a natural question arises: **how small or how large can that fraction ever be?** Can a probability equal $5$? Can it be negative? And if you already know the probability that an event *will* happen, how do you find the probability that it *will not* happen?

In this topic, we will discover the boundaries of probability, learn how to read probabilities as percentages, and master one of the handiest shortcuts in mathematics: the **complement**. With it, tricky-looking problems collapse into a single subtraction.

---

## Uncle Leo and the Morning Weather Report

It is seven in the morning. **Uncle Leo** is sitting on his porch with a mug of coffee, listening to the local radio while looking out over his garden and orchard. His tomatoes and apples are ready to pick — should he harvest today or wait until tomorrow?

The radio announcer says: **"There is a $70$ percent chance of rain tomorrow."**

Uncle Leo takes a sip and frowns. *"What on earth does '$70$ percent chance' mean? Will it rain or won't it? Why can't the weather forecaster just give a straight yes or no?"*

His niece **Maya**, who is in Class 9 and finishing her homework at the porch table, laughs. *"Uncle Leo, they are giving you a straight answer — it's just in the language of probability! Seventy percent means $70$ out of $100$, or **$0.7$**. Tomorrow's probability of rain is $0.7$."*

*"So it's going to rain?"* Leo asks.

*"Not guaranteed, though the odds lean strongly toward rain. Even better: if the probability of rain is $0.7$, then the probability of **no rain** is $1 - 0.7 = \mathbf{0.3}$ — a $30$ percent chance the sky stays dry."*

Leo nods slowly. *"Seventy and thirty make a hundred... together they cover the whole story."*

*"Exactly!"* says Maya. *"That is what we call a complement. And that is why harvesting today is the smart move!"*

Today we will learn everything Maya just used: the limits of probability, how to read percentages clearly, and how to find the probability of "not happening."

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Impossible event** | An event that can never happen; probability is $0$ | Rolling a $7$ on a standard die |
| **Certain (sure) event** | An event that always happens; probability is $1$ | Rolling a number from $1$ to $6$ on a standard die |
| **Range of probability** | Probability always stays between $0$ and $1$ (inclusive) | $0 \le P(E) \le 1$ |
| **Probability as a percentage** | Probability multiplied by $100$, written with $\%$ | $0.7 = 70\%$ |
| **Complementary event ($\bar{E}$ or $\text{not } E$)** | The event "$E$ does not happen" | If $E =$ rain, then $\bar{E} =$ no rain |
| **Sum of all outcome probabilities** | The probabilities of all distinct outcomes of an experiment add to $1$ | Die: $6 \times \frac{1}{6} = 1$ |

---

## Part A: Why Does Probability Stay Between $0$ and $1$?

Recall Topic 3's formula:

$$P(E) = \frac{n(E)}{n(S)} = \frac{\text{favourable outcomes}}{\text{total outcomes}}$$

Think about two obvious facts:

**Fact 1: Favourable outcomes can never outnumber total outcomes.**
Suppose a bag has $10$ tokens. At most, all $10$ tokens could be red, giving $10$ favourable outcomes. You cannot have $12$ favourable outcomes when there are only $10$ tokens in the bag! Since $n(E) \le n(S)$, the fraction $\frac{n(E)}{n(S)}$ can never exceed $1$.

**Fact 2: Counts can never be negative.**
You cannot have $-2$ tokens in a bag. The count $n(E)$ can only be $0, 1, 2, \dots$, so the fraction can never drop below $0$.

Putting both facts together gives the fundamental rule of probability:

$$0 \le P(E) \le 1$$

Probability can never be negative, and it can never be larger than $1$ (such as $2$ or $5$).

### The Probability Line

It helps to picture probability along a number line:

```text
0               1/4              1/2              3/4               1
|----------------|----------------|----------------|----------------|
impossible                      50-50                            certain
(never happens)             (equal chance)                   (always happens)
```

- **Left end ($0$):** impossible. Can never happen.
- **Middle ($\frac{1}{2}$):** 50-50. Equally likely to happen or not happen (such as heads on a fair coin).
- **Right end ($1$):** certain. Guaranteed to happen.
- The closer a probability sits to $1$, the more likely the event is; the closer to $0$, the less likely.

Uncle Leo's rain forecast ($0.7$) sits to the right of $\frac{1}{2}$, leaning toward "certain" — so rain is quite likely.

---

## Part B: Impossible and Certain Events

### Impossible Event: $P = 0$

When an event has **$0$** favourable outcomes, $P(E) = \frac{0}{\text{total}} = \mathbf{0}$.

**Example 1:** A fair die is rolled once. Find $P(7)$.
- A standard die only has faces $1, 2, 3, 4, 5, 6$. There is no $7$, so $n(E) = 0$ and $n(S) = 6$.
- $P(7) = \frac{0}{6} = \mathbf{0}$

**Example 2:** A bag holds only red and blue balls. One ball is drawn blindly. Find $P(\text{white ball})$.
- There are no white balls in the bag, so $n(E) = 0$.
- $P(\text{white}) = \mathbf{0}$

### Certain Event: $P = 1$

When **every** outcome in the sample space is favourable ($n(E) = n(S)$), $P(E) = \frac{\text{total}}{\text{total}} = \mathbf{1}$.

**Example 3:** A fair die is rolled. Find $P(\text{a number from } 1 \text{ to } 6)$.
- Whatever face lands up will be between $1$ and $6$. So $n(E) = 6$ and $n(S) = 6$.
- $P = \frac{6}{6} = \mathbf{1}$

**Example 4:** In our $10$-token bag ($5$ red, $3$ green, $2$ yellow), $P(\text{red, green, or yellow}) = \frac{10}{10} = \mathbf{1}$.

**Key takeaway:** A probability of $0$ means it will never happen; $1$ means it is guaranteed; anything in between means it *might* happen and *might not*.

---

## Part C: Reading Probability as a Percentage

Besides fractions and decimals, probability is frequently stated as a **percentage**. Since "percent" means "per $100$," simply multiply by $100$:

- **Decimal $\rightarrow$ Percentage:** multiply by $100$. $0.7 \times 100 = 70\%$
- **Percentage $\rightarrow$ Decimal:** divide by $100$. $70 \div 100 = 0.7$

| Probability (fraction or decimal) | Percentage |
|---|---|
| $0$ | $0\%$ |
| $\frac{1}{4} = 0.25$ | $25\%$ |
| $\frac{1}{2} = 0.5$ | $50\%$ |
| $0.7$ | $70\%$ |
| $1$ | $100\%$ |

Notice that $0$ to $1$ corresponds to $0\%$ to $100\%$. Therefore, **a probability can never exceed $100\%$ or fall below $0\%$**.

### What a Weather Forecast Really Means

Saying *"There is a $70\%$ chance of rain tomorrow"* means: across **$100$ days with weather conditions just like tomorrow's**, it rains on **about $70$ of those days**. It does not guarantee rain tomorrow — it tells you rain is very likely, so plan accordingly.

Also, $70\%$ does **not** mean "$70\%$ of the town will get rain" or "it will rain for $70\%$ of the day." It is a **chance**, just like a $50\%$ chance of heads on a coin flip.

For Uncle Leo, $70\%$ chance of rain leaves a $30\%$ chance of dry weather. Let us formalize that calculation next.

---

## Part D: The Probabilities of All Outcomes Add Up to $1$

Every distinct outcome of an experiment together accounts for all possibilities. As a result, **the probabilities of all individual outcomes always sum to $1$**.

### Checking with a Die

A fair die has $6$ equally likely outcomes, each with probability $\frac{1}{6}$:

$$P(1) + P(2) + P(3) + P(4) + P(5) + P(6) = \frac{1}{6} + \frac{1}{6} + \frac{1}{6} + \frac{1}{6} + \frac{1}{6} + \frac{1}{6} = 6 \times \frac{1}{6} = \mathbf{1}$$

**Check:** $6 \times \frac{1}{6} = \frac{6}{6} = 1$ ✅

### Remembering the Token Bag

In Topic 3, Liam's token bag gave $P(\text{red}) + P(\text{green}) + P(\text{yellow}) = \frac{5}{10} + \frac{3}{10} + \frac{2}{10} = 1$. That was no accident: adding the favourable counts of every colour recovers the total number of tokens in the bag.

> **Using this rule:** If you know the probabilities of all outcomes of an experiment **except one**, you can find the missing one immediately: $\text{Missing probability} = 1 - (\text{sum of all the others})$.

---

## Part E: Complementary Events — The Probability of "Not Happening"

Every event $E$ has a natural partner: **$E$ does not happen**, written **$\text{not } E$** or **$\bar{E}$** (read *"E bar"*).

- If $E =$ "it rains tomorrow," then $\bar{E} =$ "it does not rain tomorrow."
- If $E =$ "rolling a $6$ on a die," then $\bar{E} =$ "not rolling a $6$" (rolling $1, 2, 3, 4,$ or $5$).

Together, $E$ and $\bar{E}$ cover **every** possibility: either $E$ happens, or it does not — there is no third option. By Part D's rule:

$$P(E) + P(\bar{E}) = 1$$

Rearranging gives one of the most useful formulas in probability:

$$P(\bar{E}) = 1 - P(E)$$

Equivalently, $P(E) = 1 - P(\bar{E})$.

### Example 5: Leo's Rain Forecast

Probability of rain: $P(\text{rain}) = 70\% = 0.7$.

$$P(\text{no rain}) = 1 - 0.7 = \mathbf{0.3} \text{ (or } 30\%\text{)}$$

**Check:** $0.7 + 0.3 = 1.0$ ✅ (and $70\% + 30\% = 100\%$ ✅)

### Example 6: Not Rolling a $6$ on a Die

$P(6) = \frac{1}{6}$.

$$P(\text{not } 6) = 1 - \frac{1}{6} = \frac{6}{6} - \frac{1}{6} = \mathbf{\frac{5}{6}}$$

**Check (direct count):** Outcomes that are not $6$ are $1, 2, 3, 4, 5$ — that is $5$ out of $6$, giving $\frac{5}{6}$ ✅. Both methods agree!

### Example 7: Not Drawing a Vowel from a Word

Each letter of the word **"ELEPHANT"** is written on a separate card and placed in a box. One card is drawn at random. Find $P(\text{not a vowel})$.

- Letters in `"ELEPHANT"`: E, L, E, P, H, A, N, T $\implies$ total $= \mathbf{8}$ cards.
- Vowels ($A, E, I, O, U$): E, E, A $= \mathbf{3}$ cards.
- $P(\text{vowel}) = \frac{3}{8}$
- $P(\text{not a vowel}) = 1 - \frac{3}{8} = \frac{8}{8} - \frac{3}{8} = \mathbf{\frac{5}{8}}$

**Check:** Consonants are L, P, H, N, T $= 5$ cards, so $\frac{5}{8}$ ✅

### Example 8: When $P(E)$ Is Very Small

A snack company slips a prize coupon inside a few bags of chips. The probability of finding a coupon in one bag is $P(\text{coupon}) = 0.04$. What is $P(\text{no coupon})$?

$$P(\text{no coupon}) = 1 - 0.04 = \mathbf{0.96} \text{ (or } 96\%\text{)}$$

**Check:** $0.04 + 0.96 = 1$ ✅. Out of every $100$ bags, roughly $4$ contain a coupon and $96$ do not ($4 + 96 = 100$ ✅).

---

## Part F: "At Least One" Problems — The True Power of Complements

"At least one" means **$1$ or more**. Counting all the ways an event can happen $1$ or more times is often tedious — whereas flipping to the complement makes it effortless:

$$P(\text{at least one}) = 1 - P(\text{none})$$

### Example 9: Tossing a Coin Twice — At Least One Head

A fair coin is tossed twice. Find $P(\text{at least one head})$.

The four possible outcomes (first toss, second toss) are HH, HT, TH, TT. *(We will study multi-coin sample spaces in full in Topic 5 — for now, simply count these $4$.)*

- "No head at all" means only **TT** — just $1$ outcome out of $4$.
- $P(\text{no head}) = \frac{1}{4}$
- $P(\text{at least one head}) = 1 - \frac{1}{4} = \mathbf{\frac{3}{4}}$

**Check (direct count):** Outcomes with at least one head are HH, HT, TH ($3$ out of $4$), so $P = \frac{3}{4}$ ✅.

### Example 10: Rolling At Least $2$ on a Die

A fair die is rolled once. Find $P(\text{at least } 2)$.

- "At least $2$" means $2, 3, 4, 5,$ or $6$ ($5$ outcomes).
- Complement: "not at least $2$" means only **$1$**, so $P(1) = \frac{1}{6}$.
- $P(\text{at least } 2) = 1 - \frac{1}{6} = \mathbf{\frac{5}{6}}$

**Check:** $5$ favourable outcomes out of $6$ gives $\frac{5}{6}$ ✅

Here counting directly was also quick, yet whenever "at least one" covers dozens of cases, counting **"none"** and subtracting from $1$ saves huge amounts of work!

---

## Part G: Bag and Missing-Value Problems — Given Probability, Find Counts

### Example 11: Given $P(E)$, Find $P(\text{not } E)$ and Counts

A bag holds red and blue balls. $P(\text{red ball}) = \frac{2}{5}$. What is $P(\text{not red})$? If there are $30$ balls in total, how many are red?

- $P(\text{not red}) = 1 - \frac{2}{5} = \frac{5}{5} - \frac{2}{5} = \mathbf{\frac{3}{5}}$
- Number of red balls $= P(\text{red}) \times \text{total} = \frac{2}{5} \times 30 = \mathbf{12}$
- Not red (blue) balls $= 30 - 12 = \mathbf{18}$

**Check:** $\frac{18}{30} = \frac{3}{5}$ ✅, and $12 + 18 = 30$ ✅

### Example 12: Given Probability as a Decimal or Percent

A bag contains $20$ balls, and $P(\text{blue ball}) = 0.35$. How many balls are blue, and how many are not blue?

- Blue balls $= P(\text{blue}) \times \text{total} = 0.35 \times 20 = \mathbf{7}$
- Not blue $= 20 - 7 = \mathbf{13}$
- $P(\text{not blue}) = 1 - 0.35 = \mathbf{0.65}$

**Check:** $\frac{13}{20} = 0.65$ ✅, and $P(\text{blue}) = \frac{7}{20} = 0.35$ ✅

### Example 13: One Missing Probability

A football match has only three possible results: win, draw, or loss. A coach estimates $P(\text{win}) = 0.45$ and $P(\text{draw}) = 0.15$. Find $P(\text{loss})$.

All three outcomes' probabilities must add up to $1$:

$$P(\text{win}) + P(\text{draw}) + P(\text{loss}) = 1$$
$$0.45 + 0.15 + P(\text{loss}) = 1$$
$$0.60 + P(\text{loss}) = 1 \implies P(\text{loss}) = 1 - 0.60 = \mathbf{0.40}$$

**Check:** $0.45 + 0.15 + 0.40 = 1.00$ ✅

### Example 14: Which List Could Be Valid?

A spinner has four colours. Three students propose probability lists for the four colours. Which list could be valid?

| Colour | List A | List B | List C |
|---|---|---|---|
| Red | $0.3$ | $0.5$ | $0.4$ |
| Green | $0.3$ | $0.4$ | $0.1$ |
| Blue | $0.2$ | $0.3$ | $-0.1$ |
| Yellow | $0.2$ | $-0.2$ | $0.6$ |

- **List A:** Every probability is between $0$ and $1$. Sum $= 0.3 + 0.3 + 0.2 + 0.2 = 1.0$. **Valid.**
- **List B:** Yellow has $-0.2$, which is negative. **Invalid** (even though $0.5 + 0.4 + 0.3 - 0.2 = 1.0$, negative probabilities are impossible).
- **List C:** Blue has $-0.1$, which is negative. **Invalid** (even though $0.4 + 0.1 - 0.1 + 0.6 = 1.0$, negative values are forbidden).

Both rules must hold simultaneously: every probability must lie between $0$ and $1$, **and** the total sum must equal $1$.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Writing a probability greater than $1$ or negative.**
   *"There are $5$ red tokens out of $4$ total tokens, so $P = \frac{5}{4}$."* Impossible! Favourable outcomes can never exceed total outcomes. Whenever you get a probability $> 1$ or $< 0$, stop and re-check your numbers. Every probability obeys **$0 \le P(E) \le 1$**.

2. **Mistake 2: Assuming $P(\bar{E}) = P(E)$.**
   That is only true in exact 50-50 cases (like a fair coin toss, where both equal $\frac{1}{2}$). In general, they are not equal: for Uncle Leo's forecast, $P(\text{rain}) = 0.7$ while $P(\text{no rain}) = 0.3$. Always compute **$P(\bar{E}) = 1 - P(E)$**.

3. **Mistake 3: Mixing percentages and decimals in one subtraction.**
   $70\%$ is not "$70$" or "$7$." $70\% = \frac{70}{100} = \mathbf{0.7}$. Writing $1 - 70 = -69$ is nonsense! Either convert $70\%$ to $0.7$ first ($1 - 0.7 = 0.3$), or keep everything in percentages ($100\% - 70\% = 30\%$). Never mix both in the same expression.

4. **Mistake 4: Forgetting that all outcome probabilities must sum to $1$.**
   Suppose a $4$-colour spinner is given probabilities $0.3, 0.3, 0.3, 0.3$. Their sum is $1.2 \neq 1$, so that assignment is impossible! The probabilities of all outcomes must **always** sum to $1$.

---

## Quick Recap

- **$0 \le P(E) \le 1$**, because favourable counts never exceed total counts and counts are never negative.
- **$P = 0$:** impossible event (rolling $7$ on a standard die). **$P = 1$:** certain event (rolling $1$ to $6$).
- Probability line: $0$ (impossible) $\rightarrow \frac{1}{2}$ (50-50) $\rightarrow 1$ (certain).
- Percentages: $0.7 = 70\%$. A $70\%$ rain forecast means roughly $70$ out of $100$ days with similar conditions get rain.
- **Sum of all individual outcome probabilities $= 1$** (for a die, $6 \times \frac{1}{6} = 1$).
- **Complement:** $P(E) + P(\bar{E}) = 1$, so **$P(\bar{E}) = 1 - P(E)$**.
- **"At least one":** $P(\text{at least one}) = 1 - P(\text{none})$.
- Missing probability in a complete list: $1 - (\text{sum of the known probabilities})$.
- Pitfalls: probabilities $> 1$ or $< 0$, assuming $P(\bar{E}) = P(E)$, mixing percentages with decimals, and forgetting the sum must equal $1$.

---

## Practice Questions

1. Can the probability of an event be $1.2$? Can it be $-0.3$? Explain in one line each.

2. A bag contains only $8$ yellow balls. A ball is drawn at random. Find (a) $P(\text{yellow ball})$, (b) $P(\text{green ball})$. What do you call these two events?

3. The probability that it will rain tomorrow is $35\%$. Write this as a decimal and find the probability that it will not rain.

4. A die is rolled once. Find (a) $P(\text{a number less than } 7)$, (b) $P(\text{a number greater than } 6)$, (c) $P(\text{not } 4)$.

5. The letters of the word `"EDUCATION"` are written on separate cards and one card is drawn at random. Find the probability that it is not a vowel.

6. A coin is tossed twice. Using the outcomes HH, HT, TH, TT, find $P(\text{at least one tail})$ by first finding $P(\text{no tail})$.

7. A bag has $25$ balls. $P(\text{green ball}) = 0.4$. (a) How many green balls are there? (b) Find $P(\text{not green})$. (c) How many balls are not green?

8. The probabilities of a team finishing a tournament in 1st, 2nd, 3rd, or lower places are $0.2, 0.3, 0.25,$ and $x$. Find $x$.

9. A student says, *"The probability of an event is $\frac{3}{2}$ and the probability of it not happening is $-\frac{1}{2}$, and $\frac{3}{2} + \left(-\frac{1}{2}\right) = 1$, so it is valid."* Is the student right? Explain.

10. State True or False:
    (a) $P(E) + P(\bar{E}) = 1$.
    (b) $P(E)$ can be $110\%$.
    (c) If $P(E) = 0.5$, then $P(\bar{E}) = 0.5$.
    (d) The probability of a certain (sure) event is $0$.

### Answers

1. Neither is possible. $1.2$ is greater than $1$, and favourable outcomes can never outnumber total outcomes. $-0.3$ is negative, and outcome counts cannot be negative. Every probability must lie between $0$ and $1$.

2. Since the bag holds only yellow balls, every ball drawn is yellow.
   (a) $P(\text{yellow}) = \frac{8}{8} = \mathbf{1}$
   (b) $P(\text{green}) = \frac{0}{8} = \mathbf{0}$
   The first is a **certain** event; the second is an **impossible** event.

3. $35\% = 35 \div 100 = \mathbf{0.35}$. $P(\text{no rain}) = 1 - 0.35 = \mathbf{0.65}$ (or $65\%$).
   Check: $0.35 + 0.65 = 1$ ✅

4. (a) Every number on a die is less than $7$, so favourable $= 6$, $P = \frac{6}{6} = \mathbf{1}$.
   (b) No face is greater than $6$, so favourable $= 0$, $P = \mathbf{0}$.
   (c) $P(4) = \frac{1}{6}$, so $P(\text{not } 4) = 1 - \frac{1}{6} = \mathbf{\frac{5}{6}}$.
   Check (c): $1, 2, 3, 5, 6$ are $5$ outcomes out of $6$ ✅

5. Letters in `"EDUCATION"`: E, D, U, C, A, T, I, O, N. Total $= \mathbf{9}$.
   Vowels: E, U, A, I, O $= \mathbf{5}$. $P(\text{vowel}) = \frac{5}{9}$.
   $P(\text{not a vowel}) = 1 - \frac{5}{9} = \mathbf{\frac{4}{9}}$.
   Check: consonants D, C, T, N $= 4$, giving $\frac{4}{9}$ ✅

6. "No tail" means only HH — $1$ outcome out of $4$, so $P(\text{no tail}) = \frac{1}{4}$.
   $P(\text{at least one tail}) = 1 - \frac{1}{4} = \mathbf{\frac{3}{4}}$.
   Check: HT, TH, TT are $3$ outcomes out of $4$, giving $\frac{3}{4}$ ✅

7. (a) Green balls $= 0.4 \times 25 = \mathbf{10}$.
   (b) $P(\text{not green}) = 1 - 0.4 = \mathbf{0.6}$.
   (c) Not green $= 25 - 10 = \mathbf{15}$. Check: $\frac{15}{25} = 0.6$ ✅

8. The probabilities must sum to $1$: $0.2 + 0.3 + 0.25 + x = 1$.
   $0.75 + x = 1 \implies x = 1 - 0.75 = \mathbf{0.25}$.
   Check: $0.2 + 0.3 + 0.25 + 0.25 = 1.00$ ✅

9. The student is **wrong**. $\frac{3}{2} = 1.5$ is greater than $1$, and $-\frac{1}{2}$ is negative. Adding up to $1$ is not enough on its own — **every individual probability must also satisfy $0 \le P(E) \le 1$**.

10. (a) **True** ✅. That is the core complement rule.
    (b) **False** ❌. Probability cannot exceed $100\%$ ($110\% = 1.1 > 1$).
    (c) **True** ✅. $1 - 0.5 = 0.5$.
    (d) **False** ❌. A certain event has probability $1$; $0$ is for an impossible event.

---

Uncle Leo harvested his crops right on schedule — and now he knows that a "$70\%$ chance" is simply $0.7$ for happening and $0.3$ for not happening. Whenever you need the probability of an event *not* occurring, just subtract from $1$!

**What comes next?** Until now, every problem involved one coin, one die, or one bag. What happens when we toss **two coins together** or roll **two dice at once**? In Topic 5, we will build organized tables to list larger sample spaces cleanly — and take a look at a standard $52$-card deck too!
