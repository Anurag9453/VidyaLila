# Chapter: Probability (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [probability-part2.md](probability-part2.md)** (which covers Topic 2: empirical probability, tally tables, and the bottle-cap experiment). The chapter begins in [probability.md](probability.md).
> **Topics covered in this file:**
> 3. Probability with Equally Likely Outcomes (Theoretical Probability)

---

# Topic 3: Probability with Equally Likely Outcomes (Theoretical Probability)

In Topic 2, Dr. Bennett's class tossed a bottle cap $500$ times to measure probability: **how many times the event occurred $\div$ total number of trials**. They built tally tables and saw that as trials grow, this ratio settles near a steady value. Empirical probability is remarkably useful, yet it has one drawback: **you have to run the experiment first**, which takes time! Could we sometimes predict where that ratio will settle *before* tossing anything — purely by thinking and counting?

In many situations, yes — specifically whenever **all outcomes are equally likely**. In this topic, we will derive a crisp formula that finds probability without a single trial.

---

## The Bag of Coloured Tokens

On game night, **Liam** is wearing a blindfold, and a cloth bag sits on the table in front of him. Inside the bag are smooth plastic tokens: **$5$ red, $3$ green, and $2$ yellow**. Liam has to reach in and pull out **one token**.

His older sister **Elena** watches and asks, *"Liam, guess — **which colour** are you going to pull?"*

Liam laughs. *"Elena, I'm blindfolded! How could I possibly know? Whichever one my fingers grab."*

Elena nods. *"Fair enough. Then tell me this: **which colour has the best chance** of coming out?"*

Liam thinks for a moment. *"Red! Because there are more red tokens than anything else — five of them."*

*"Spot-on,"* says Elena. *"Now put a number on it. What exactly is the chance of pulling red? Half? A third? Tell me as a number."*

Finding that exact number is the heart of this topic. First, let us check why Liam had to wear a blindfold in the first place.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Random (at random)** | Choosing without looking or favouring any item | Reaching in blindfolded to pick a token |
| **Fair** | No outcome is favoured over another by shape, weight, or bias | A balanced coin that lands heads or tails equally easily |
| **Equally likely outcomes** | Outcomes that each have the exact same chance of occurring | Heads and tails on a fair coin |
| **Sample space ($S$)** | The set of **all** possible outcomes of an experiment | For a coin: $S = \{H, T\}$ |
| **Favourable outcomes** | The outcomes in the sample space that make our event happen | For "even number" on a die: $2, 4, 6$ |
| **Theoretical probability** | Probability calculated by counting outcomes, without running trials | For a fair coin: $P(\text{Head}) = \frac{1}{2}$ |

---

## Part A: What "Random" and "Fair" Mean

Liam wore a blindfold so he could not **peek and choose his favourite colour on purpose**. When a selection is made so that every item in the bag has the exact same chance of being picked, we say it is chosen **at random**.

We also met the word **"fair"** in Topic 1 (Maya's coin). Remember, fairness describes the physical object or setup:
- **Fair coin:** neither weighted nor bent; heads and tails have equal chances.
- **Fair die:** a symmetric cube with $6$ identical faces, each equally likely to land on top.
- **Fair spinner:** all sectors have the exact same angle/area, so the pointer has an equal chance of stopping in any sector.

If a coin is weighted on one side, or one sector of a spinner takes up half the circle while four other sectors share the rest, the setup is not fair — and our counting formula cannot be applied directly.

### One Crucial Point: The Tokens Are Equally Likely, Not the Colours

Look carefully at Liam's bag:

- **Each individual token** is equally likely to be grabbed ($10$ identical-feeling tokens mixed in a bag, blindfolded pick).
- **The colours are NOT equally likely!** There are $5$ red tokens, $3$ green tokens, and only $2$ yellow tokens. So red is much more likely than yellow.

Having $3$ colours in the bag does **not** mean each colour has a $\frac{1}{3}$ chance! What is equally likely here is the **individual item being drawn** — one token at a time. Keep this distinction sharp; forgetting it is the #1 mistake in this topic.

---

## Part B: Sample Space and Favourable Outcomes

The **sample space**, written **$S$**, is the complete list of every distinct, equally likely outcome of an experiment — with nothing left out and nothing counted twice.

| Experiment | Sample space ($S$) | Total outcomes $n(S)$ |
|---|---|---|
| Tossing one fair coin | $\{H, T\}$ | $2$ |
| Rolling one fair die | $\{1, 2, 3, 4, 5, 6\}$ | $6$ |
| Spinner with $4$ equal sectors ($1$ to $4$) | $\{1, 2, 3, 4\}$ | $4$ |
| Liam's bag (counting each token) | $R_1, R_2, R_3, R_4, R_5, G_1, G_2, G_3, Y_1, Y_2$ | $10$ |

Notice that for Liam's bag, we labelled every token individually ($R_1$ to $R_5$ for red, $G_1$ to $G_3$ for green, $Y_1$ and $Y_2$ for yellow) because **those $10$ tokens are the equally likely outcomes**. Writing $\{\text{red}, \text{green}, \text{yellow}\}$ would NOT give an equally likely sample space.

### Counting Favourable Outcomes

For any event $E$, the **favourable outcomes** are the outcomes in the sample space that make $E$ happen. Let **$n(E)$** denote how many favourable outcomes there are, and **$n(S)$** denote the total number of equally likely outcomes.

- In Liam's bag, event "red token": $R_1, R_2, R_3, R_4, R_5 \implies n(E) = \mathbf{5}$.
- On a die, event "even number": $2, 4, 6 \implies n(E) = \mathbf{3}$.
- On a $4$-sector spinner, event "number greater than $3$": only $4 \implies n(E) = \mathbf{1}$.

---

## Part C: The Theoretical Probability Formula

When all outcomes in the sample space $S$ are **equally likely**, the theoretical probability of event $E$ is:

$$P(E) = \frac{n(E)}{n(S)} = \frac{\text{Number of outcomes favourable to } E}{\text{Total number of equally likely outcomes}}$$

Compare this with Topic 2's empirical formula: there, we computed $(\text{times } E \text{ happened}) \div (\text{total trials})$. Here, without running any trials, we count how many ways $E$ can happen out of all equally likely possibilities. That is why it is called **theoretical probability**.

Why does it make sense? If there are $10$ equally likely tokens and $5$ of them are red, then in the long run you expect about $5$ out of every $10$ draws to be red — i.e., $\frac{5}{10}$.

### Probabilities for the Token Bag

Total tokens: $n(S) = 5 + 3 + 2 = \mathbf{10}$.

- **$P(\text{red})$** $= \frac{5}{10} = \mathbf{\frac{1}{2}}$ (or $50\%$)
- **$P(\text{green})$** $= \mathbf{\frac{3}{10}}$ (or $30\%$)
- **$P(\text{yellow})$** $= \frac{2}{10} = \mathbf{\frac{1}{5}}$ (or $20\%$)

Remember Elena's question: *"Which colour has the best chance?"* Answer: **red**, because $\frac{1}{2} = \frac{5}{10}$ is larger than $\frac{3}{10}$ and $\frac{2}{10}$.

**Check:** Add all three probabilities: $\frac{5}{10} + \frac{3}{10} + \frac{2}{10} = \frac{10}{10} = \mathbf{1}$ ✅. No matter which token Liam grabs, it must be one of these three colours, so their probabilities sum to $1$. (We will explore this rule in full in Topic 4.)

Liam grins: *"Elena, that's actually really clean — red has a fifty-percent chance!"*
*"Yep,"* says Elena. *"Now let us try a few more classic setups."*

---

## Part D: Worked Examples

### Example 1: Coin

A fair coin is tossed once. Find $P(\text{Head})$.

- Sample space $S = \{H, T\}$, so $n(S) = 2$
- Favourable (Head): $n(E) = 1$
- $P(\text{Head}) = \mathbf{\frac{1}{2}}$ ($50\%$)

**Check:** $P(\text{Tail})$ is also $\frac{1}{2}$, and $\frac{1}{2} + \frac{1}{2} = 1$ ✅

### Example 2: Die

A fair die is rolled once. $S = \{1, 2, 3, 4, 5, 6\}$, $n(S) = 6$.

| Event | Favourable outcomes | Count $n(E)$ | Probability $P(E) = \frac{n(E)}{n(S)}$ |
|---|---|---|---|
| Getting a $4$ | $\{4\}$ | $1$ | $\frac{1}{6}$ |
| Getting an even number | $\{2, 4, 6\}$ | $3$ | $\frac{3}{6} = \mathbf{\frac{1}{2}}$ |
| Getting a prime number | $\{2, 3, 5\}$ | $3$ | $\frac{3}{6} = \mathbf{\frac{1}{2}}$ |
| Getting a number less than $4$ | $\{1, 2, 3\}$ | $3$ | $\frac{3}{6} = \mathbf{\frac{1}{2}}$ |
| Getting a multiple of $3$ | $\{3, 6\}$ | $2$ | $\frac{2}{6} = \mathbf{\frac{1}{3}}$ |

Watch closely: **$1$ is NOT prime** ($1$ has only one factor, whereas a prime number has exactly two distinct factors). Also, "less than $4$" does not include $4$ itself — only $1, 2,$ and $3$.

**Check:** $\frac{1}{6}$ makes sense for getting $4$, since only $1$ of the $6$ faces is a $4$; and $\frac{1}{2}$ means "half the faces," which fits $3$ out of $6$ ✅

### Example 3: Spinner with $8$ Equal Sectors

A spinner has $8$ equal sectors numbered $1$ through $8$. $S = \{1, 2, 3, 4, 5, 6, 7, 8\}$, $n(S) = 8$.

**(a) $P(\text{number greater than } 5)$**
- Favourable: $\{6, 7, 8\}$, $n(E) = 3$
- $P = \mathbf{\frac{3}{8}}$ (as a decimal $0.375$, or $37.5\%$)

**(b) $P(\text{odd number})$**
- Favourable: $\{1, 3, 5, 7\}$, $n(E) = 4$
- $P = \frac{4}{8} = \mathbf{\frac{1}{2}}$

**Check:** Even numbers are $\{2, 4, 6, 8\}$ ($4$ of them), so odd and even have equal chances: $\frac{1}{2}$ and $\frac{1}{2}$ ✅

### Example 4: Choosing a Letter from the Word "MATHEMATICS"

Each letter of the word **"MATHEMATICS"** is written on a separate slip of paper and placed in a hat. One slip is drawn at random. First count all letters — **including repeats**:

M, A, T, H, E, M, A, T, I, C, S $\implies n(S) = \mathbf{11}$ letters.

**(a) $P(\text{vowel})$**
- Vowels ($A, E, I, O, U$) present in the word: A, E, A, I $\implies n(E) = \mathbf{4}$ (since A appears twice).
- $P = \mathbf{\frac{4}{11}}$

**(b) $P(\text{the letter M})$**
- M appears twice (1st and 6th positions), so $n(E) = 2$.
- $P = \mathbf{\frac{2}{11}}$

**Check:** $4$ vowels $+$ $7$ consonants (M, T, H, M, T, C, S) $= 11$ ✅

### Example 5: Choosing a Number from $1$ to $20$

A whole number from $1$ to $20$ is chosen at random. Total outcomes $n(S) = \mathbf{20}$.

**(a) $P(\text{multiple of } 5)$**
- Multiples of $5$: $5, 10, 15, 20 \implies 4$ numbers.
- $P = \frac{4}{20} = \mathbf{\frac{1}{5}}$ ($20\%$)

**(b) $P(\text{perfect square})$**
- Perfect squares: $1, 4, 9, 16$ ($1^2, 2^2, 3^2, 4^2$) $\implies 4$ numbers.
- $P = \frac{4}{20} = \mathbf{\frac{1}{5}}$

**Check:** $5^2 = 25$ is past $20$, so there are only $4$ perfect squares; simplifying $\frac{4}{20}$ by $4$ gives $\frac{1}{5}$ ✅

### Example 6: Raffle Draw

A school fair raffle has **$100$ tickets**, and only one ticket wins the grand prize. Liam buys **$5$ tickets**. What is the probability that Liam wins?

- Total outcomes $n(S) = 100$ (every ticket is equally likely to be drawn)
- Favourable $n(E) = 5$ (his own tickets)
- $P(\text{Liam wins}) = \frac{5}{100} = \mathbf{\frac{1}{20}}$ ($5\%$)

**Check:** If Liam bought $10$ tickets instead, his probability would be $\frac{10}{100} = \frac{1}{10}$ — twice as many tickets, twice the chance ✅

---

## Part E: Connecting Theoretical and Empirical Probability

Both probabilities measure the exact same idea of chance, just through two different routes:

| | Empirical (Topic 2) | Theoretical (this topic) |
|---|---|---|
| How it is found | Run trials and tally frequencies | List the sample space and count |
| Formula | $\frac{\text{Times } E \text{ happened}}{\text{Total trials}}$ | $P(E) = \frac{n(E)}{n(S)}$ (when equally likely) |
| What it needs | Many repeated trials | All outcomes equally likely |
| Answer | Varies slightly from run to run | One fixed exact number |

### Do the Two Answers Match?

In Topic 2's bottle-cap experiment, as the number of tosses rose, the empirical ratio settled near a steady value ($0.400, 0.410, 0.415, 0.416$). The cap had no theoretical probability because its two sides are not balanced, so experiment was the only option. Yet whenever outcomes *are* equally likely, we can compare both side by side — and we find: **the more trials you run, the closer empirical probability gets to theoretical probability**.

Here is a simulated record where Elena had Liam pull a token from the bag **$1,000$ times — putting each token back after every draw** — and tracked the red draws. Theoretical $P(\text{red}) = \frac{1}{2} = 0.5$.

| Total draws | Red drawn | Empirical $=$ Red $\div$ Draws | Theoretical |
|---|---|---|---|
| $20$ | $11$ | $\frac{11}{20} = 0.55$ | $0.5$ |
| $100$ | $52$ | $\frac{52}{100} = 0.52$ | $0.5$ |
| $1{,}000$ | $497$ | $\frac{497}{1{,}000} = 0.497$ | $0.5$ |

Look at $1{,}000$ draws: $0.497$ sits right next to $0.5$, whereas $20$ draws ($0.55$) wandered farther away — just like the bottle-cap experiment!

**One vital reminder** (recall Mistake 3 from Topic 2): theoretical probability does **not** guarantee that $10$ draws will produce *exactly* $5$ reds. It tells us that **over the long run**, red will show up about half the time. Short runs naturally bounce above and below.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Assuming different categories are automatically equally likely.**
   Liam's bag holds $3$ colours, so is $P(\text{red}) = \frac{1}{3}$? **No!** There are $5$ red tokens out of $10$, so $P(\text{red}) = \frac{5}{10} = \frac{1}{2}$. The formula $P(E) = \frac{n(E)}{n(S)}$ only works when you count the **equally likely individual items** (individual tokens).
   Another classic trap: tossing two coins can yield "$0$ heads, $1$ head, or $2$ heads" — $3$ totals. Is each $\frac{1}{3}$? **No!** Those $3$ results are not equally likely (we will prove why in Topic 5!). Never just count "how many types of results exist" — always check whether they are equally likely.

2. **Mistake 2: Dividing favourable by unfavourable.**
   For $P(\text{even})$ on a die: favourable $= 3$, unfavourable (odd) $= 3$.
   - Wrong: $3 \div 3 = 1$.
   - Correct: $3 \div \mathbf{6} = \frac{3}{6} = \frac{1}{2}$.
   The denominator must always be **total outcomes $n(S)$**, never just the unfavourable ones.

3. **Mistake 3: Not simplifying the fraction.**
   Leaving $P(\text{prime on a die}) = \frac{3}{6}$ is unfinished. Always reduce to lowest terms: $\frac{3}{6} = \mathbf{\frac{1}{2}}$.

4. **Mistake 4: Counting $1$ as a prime number.**
   Listing primes on a die as $\{1, 2, 3, 5\}$ gives $\frac{4}{6} = \frac{2}{3}$, which is **wrong**. $1$ is neither prime nor composite! The primes on a die are $\{2, 3, 5\}$, giving $\frac{3}{6} = \frac{1}{2}$.

5. **Mistake 5: Skipping repeated letters.**
   In `"MATHEMATICS"`, if you ignore repeats and count only unique letters (M, A, T, H, E, I, C, S), you get $8$ instead of **$11$** slips in the hat! Correct: $P(\text{vowel}) = \frac{4}{11}$, not $\frac{3}{8}$. Since every letter is on its own slip, repeated letters count separately.

---

## Quick Recap

- **At random** means picked without looking or bias; **fair** means no outcome is favoured physically.
- **Sample space ($S$)** $=$ list of all equally likely outcomes. Coin: $\{H, T\}$; Die: $\{1, 2, 3, 4, 5, 6\}$.
- In Liam's bag, individual **tokens** are equally likely, not **colours** — so $P(\text{red}) = \frac{5}{10}$, not $\frac{1}{3}$.
- **$P(E) = \frac{n(E)}{n(S)} = \frac{\text{Favourable outcomes}}{\text{Total equally likely outcomes}}$**.
- Token bag: $P(\text{red}) = \frac{1}{2}$, $P(\text{green}) = \frac{3}{10}$, $P(\text{yellow}) = \frac{1}{5}$, and their sum is $1$.
- Always simplify fractions to **lowest terms** (and convert to decimal or percent if requested).
- As trials increase, **empirical probability** approaches **theoretical probability**.
- Pitfalls: treating unequal categories as equally likely, favourable $\div$ unfavourable, unsimplified fractions, counting $1$ as prime, skipping repeated letters.

---

## Practice Questions

1. A bag has $4$ blue, $5$ white, and $3$ black marbles. One marble is drawn without looking. Find (a) $P(\text{white})$, (b) $P(\text{blue or black})$. Give answers in lowest terms.

2. A fair die is rolled. Find the probability of getting an odd number greater than $1$.

3. A letter is chosen at random from the word `"PROBABILITY"`. Find (a) $P(\text{vowel})$, (b) $P(\text{the letter B})$.

4. A number is chosen at random from $1$ to $30$. Find (a) the probability that it is a multiple of $6$, (b) the probability that it is a prime number.

5. A spinner has $10$ equal sectors numbered $1$ to $10$. Find (a) $P(\text{prime number})$, (b) $P(\text{multiple of } 4)$.

6. In a raffle there are $200$ tickets and only one wins. A student holds $8$ of them. Find the probability that this student wins, and write it as a percent.

7. A bag has $2$ red and $6$ blue balls. A student says, *"There are $2$ colours, so $P(\text{red}) = \frac{1}{2}$."* Find the mistake and give the correct probability.

8. State True or False:
   (a) In a bag with different numbers of red, green, and yellow tokens, each individual token is equally likely to be picked when you pick blindly.
   (b) A bag has $3$ colours, so the probability of each colour is $\frac{1}{3}$.
   (c) $P(E) = \frac{\text{favourable outcomes}}{\text{unfavourable outcomes}}$.
   (d) For a fair die, $P(\text{prime number}) = \frac{4}{6}$, because the primes are $1, 2, 3,$ and $5$.

### Answers

1. Total marbles $= 4 + 5 + 3 = 12$.
   (a) White $= 5$, so $P(\text{white}) = \mathbf{\frac{5}{12}}$.
   (b) Blue or black $= 4 + 3 = 7$, so $P = \mathbf{\frac{7}{12}}$.
   Check: $\frac{4}{12} + \frac{5}{12} + \frac{3}{12} = \frac{12}{12} = 1$ ✅

2. Sample space $\{1, 2, 3, 4, 5, 6\}$, total $6$. Odd numbers greater than $1$: $\{3, 5\}$, count $2$. $P = \frac{2}{6} = \mathbf{\frac{1}{3}}$.

3. Letters of `"PROBABILITY"`: P, R, O, B, A, B, I, L, I, T, Y. Total $= \mathbf{11}$.
   (a) Vowels: O, A, I, I $= 4$, so $P(\text{vowel}) = \mathbf{\frac{4}{11}}$.
   (b) B appears twice, so $P(\text{B}) = \mathbf{\frac{2}{11}}$.
   Check: consonants P, R, B, B, L, T, Y $= 7$, and $4 + 7 = 11$ ✅

4. Total $= 30$.
   (a) Multiples of $6$: $6, 12, 18, 24, 30$ ($5$ numbers). $P = \frac{5}{30} = \mathbf{\frac{1}{6}}$.
   (b) Primes: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$ ($10$ numbers). $P = \frac{10}{30} = \mathbf{\frac{1}{3}}$.

5. Total $= 10$.
   (a) Primes: $2, 3, 5, 7$ ($4$ numbers). $P = \frac{4}{10} = \mathbf{\frac{2}{5}}$.
   (b) Multiples of $4$: $4, 8$ ($2$ numbers). $P = \frac{2}{10} = \mathbf{\frac{1}{5}}$.

6. Total $200$, favourable $8$. $P = \frac{8}{200} = \mathbf{\frac{1}{25}}$. As a percent: $\frac{1}{25} = \frac{4}{100} = \mathbf{4\%}$.
   Check: $200 \div 8 = 25$, so $\frac{8}{200} = \frac{1}{25}$ ✅

7. The student counted colours ($2$) instead of **individual balls** ($2 + 6 = 8$), which are the equally likely items. Correct: $P(\text{red}) = \frac{2}{8} = \mathbf{\frac{1}{4}}$.
   Check: $P(\text{blue}) = \frac{6}{8} = \frac{3}{4}$, and $\frac{1}{4} + \frac{3}{4} = 1$ ✅

8. (a) **True** ✅. When picking blindly, every individual token has the same chance of being grabbed, even if colour counts differ.
   (b) **False** ❌. Colours would only be $\frac{1}{3}$ each if all three colours had the same number of tokens. In Liam's bag, $P(\text{red}) = \frac{1}{2}$, not $\frac{1}{3}$.
   (c) **False** ❌. The denominator is **total** outcomes $n(S)$.
   (d) **False** ❌. $1$ is not prime. The primes are $\{2, 3, 5\}$, giving $P = \frac{3}{6} = \frac{1}{2}$.

---

Now you can compute probability purely by counting, without running a single trial! Whenever you see a problem, start by listing the sample space, check that its outcomes are truly equally likely, and count the favourable ones.

**What comes next?** Notice that in Liam's bag, $P(\text{red}) + P(\text{green}) + P(\text{yellow}) = 1$. That was no coincidence! Can a probability ever be bigger than $1$, or negative? And how do you find the probability that something does **not** happen? Let us find out in Topic 4!
