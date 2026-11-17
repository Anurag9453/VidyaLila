# Chapter: Probability (Part 5)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [probability-part4.md](probability-part4.md).** (The chapter begins in [probability.md](probability.md).)
> **Topics covered in this file:**
> 5. Two Coins, Two Dice, and Playing Cards (Extra)

---

# Topic 5: Two Coins, Two Dice, and Playing Cards (Extra)

In Topic 4, Uncle Leo's "$70\%$ chance of rain" showed us that every probability lies between $0$ and $1$, that the probability of an event *not* happening is $1 - P(E)$ (no rain $= 0.3$), and that "at least one" questions become effortless using complements. Along the way, we briefly listed HH, HT, TH, TT for two coin flips. Today we will examine multi-object sample spaces thoroughly.

In this topic, we toss or roll **two or three objects at the same time**. This is where students make the most mistakes, because counting outcomes cleanly takes care. Back in Topic 3, we pointed out a famous trap: *"With two coins, you can get $0$, $1$, or $2$ heads, so each has probability $\frac{1}{3}$."* That is false, and today you will see exactly why. Since this is the final topic of the chapter, a complete Chapter Wrap-up follows at the end.

---

## Elena, Liam, and Two Dice

**Elena** and **Liam** are playing a board game on a Sunday afternoon that uses **two dice rolled together**. Liam rolls a $4$ and a $3$, moving $7$ spaces forward.

Liam says, *"Elena, rolling a $12$ is super rare, while rolling a $7$ happens all the time! Look how often $6, 7,$ and $8$ keep coming up!"*

Elena replies, *"Wait — is that just a feeling, or is it mathematically true? Let us prove it with numbers."*

Liam scratches his head. *"Wait: the possible sums go from $2$ to $12$, which is $11$ different sums. Shouldn't every sum have a $\frac{1}{11}$ chance?"*

Elena smiles. *"First let us write down every single outcome of the two dice. Then we will see whether $\frac{1}{11}$ holds up!"*

Let us test it right now — starting with two coins first, since coins show the exact same principle in a smaller, simpler form.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Sample space ($S$)** *(from Topic 3)* | The complete list of all possible equally likely outcomes | Two coins: $\{HH, HT, TH, TT\}$ |
| **Doubles** | Both dice showing the exact same number | $(3, 3)$ |
| **Ordered pair** | $(\text{first die}, \text{second die})$; order matters! | $(2, 5)$ and $(5, 2)$ are two distinct outcomes |
| **Deck of cards** | A standard pack of $52$ playing cards | A standard card deck |
| **Suit** | One of the $4$ card families in a deck | Spades, clubs, hearts, diamonds |
| **Face card** | A Jack ($J$), Queen ($Q$), or King ($K$) | King of hearts |

---

## Part A: Two Coins and Three Coins

### Complete Sample Space for Two Coins

Suppose we toss two coins together — say, **Coin 1 (a \$1 coin)** and **Coin 2 (a \$2 coin)**. Because they are distinct coins, we can tell which coin landed which way. Let us list every possible outcome:

| Coin 1 (\$1) | Coin 2 (\$2) | Outcome |
|---|---|---|
| H | H | HH |
| H | T | HT |
| T | H | TH |
| T | T | TT |

Total outcomes $n(S) = \mathbf{4}$, and all four are **equally likely**.

Pay close attention: **HT and TH are two different outcomes!** HT means Coin 1 landed Heads and Coin 2 landed Tails; TH means the reverse. Even if two coins look completely identical, each coin still produces its own independent result, so there are always $4$ equally likely outcomes.

### Counting Heads: Why Are They Not Equally Likely?

Remember Topic 3's trap — thinking "$0, 1,$ or $2$ heads" each have probability $\frac{1}{3}$? Look at the real counts:

| Number of heads | Which outcomes | Count | Probability |
|---|---|---|---|
| $0$ heads | TT | $1$ | $\frac{1}{4}$ |
| $1$ head | HT, TH | $2$ | $\frac{2}{4} = \mathbf{\frac{1}{2}}$ |
| $2$ heads | HH | $1$ | $\frac{1}{4}$ |

**Check (sum):** $\frac{1}{4} + \frac{1}{2} + \frac{1}{4} = 1$ ✅

"$0, 1,$ or $2$ heads" are merely **three summary labels**, not three **equally likely outcomes**! Getting $1$ head has **two ways** to happen (HT or TH), making it twice as likely as $0$ heads or $2$ heads. The truly equally likely outcomes are the $4$ individual entries in the sample space: HH, HT, TH, TT.

**Check (experimentally):** Toss two coins $100$ times and you will get roughly $50$ trials with $1$ head, $25$ with $0$ heads, and $25$ with $2$ heads — Topic 2's empirical approach confirms it!

### Example 1: Two Coins — A Few More Events

We already found $P(\text{at least one head}) = \frac{3}{4}$ using the complement in Topic 4 (Example 9). Let us check two more events:

- $P(\text{both coins match}) = P(\{HH, TT\}) = \frac{2}{4} = \mathbf{\frac{1}{2}}$.
- $P(\text{heads on Coin 1}) = P(\{HH, HT\}) = \frac{2}{4} = \mathbf{\frac{1}{2}}$.
  **Check:** Coin 1 on its own lands heads $\frac{1}{2}$ of the time; Coin 2 has no effect on Coin 1 ✅

### Three Coins (A Short Extension)

With three coins, each coin has $2$ choices, giving $2 \times 2 \times 2 = \mathbf{8}$ equally likely outcomes:

$$\text{HHH, HHT, HTH, HTT, THH, THT, TTH, TTT}$$

| Number of heads | Outcomes | Count | Probability |
|---|---|---|---|
| $0$ | TTT | $1$ | $\frac{1}{8}$ |
| $1$ | HTT, THT, TTH | $3$ | $\frac{3}{8}$ |
| $2$ | HHT, HTH, THH | $3$ | **$\frac{3}{8}$** |
| $3$ | HHH | $1$ | $\frac{1}{8}$ |

**Check (sum):** $1 + 3 + 3 + 1 = 8$, so $\frac{8}{8} = 1$ ✅

- $P(\text{exactly } 2 \text{ heads}) = \mathbf{\frac{3}{8}}$
- $P(\text{at least one head}) = 1 - P(\text{TTT}) = 1 - \frac{1}{8} = \mathbf{\frac{7}{8}}$
  **Check:** Out of $8$ outcomes, every single one except TTT contains at least one H ($7$ outcomes) ✅

---

## Part B: Two Dice

### The Complete $36$-Outcome Table

The first die has $6$ outcomes and the second die has $6$ outcomes, giving $6 \times 6 = \mathbf{36}$ equally likely outcomes. Each cell shows $(\text{first die}, \text{second die})$:

| 1st \ 2nd | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|
| **$1$** | $(1,1)$ | $(1,2)$ | $(1,3)$ | $(1,4)$ | $(1,5)$ | $(1,6)$ |
| **$2$** | $(2,1)$ | $(2,2)$ | $(2,3)$ | $(2,4)$ | $(2,5)$ | $(2,6)$ |
| **$3$** | $(3,1)$ | $(3,2)$ | $(3,3)$ | $(3,4)$ | $(3,5)$ | $(3,6)$ |
| **$4$** | $(4,1)$ | $(4,2)$ | $(4,3)$ | $(4,4)$ | $(4,5)$ | $(4,6)$ |
| **$5$** | $(5,1)$ | $(5,2)$ | $(5,3)$ | $(5,4)$ | $(5,5)$ | $(5,6)$ |
| **$6$** | $(6,1)$ | $(6,2)$ | $(6,3)$ | $(6,4)$ | $(6,5)$ | $(6,6)$ |

Total $= 6 \times 6 = 36$ cells, and every cell is **equally likely**. Notice that $(2,5)$ and $(5,2)$ are two distinct cells — just like HT and TH!

### Counting Sums: Why Was Liam's $\frac{1}{11}$ Wrong?

Add the two numbers in every cell and count how many cells produce each sum:

| Sum | Outcomes | Count | Probability |
|---|---|---|---|
| $2$ | $(1,1)$ | $1$ | $\frac{1}{36}$ |
| $3$ | $(1,2), (2,1)$ | $2$ | $\frac{2}{36} = \frac{1}{18}$ |
| $4$ | $(1,3), (2,2), (3,1)$ | $3$ | $\frac{3}{36} = \frac{1}{12}$ |
| $5$ | $(1,4), (2,3), (3,2), (4,1)$ | $4$ | $\frac{4}{36} = \frac{1}{9}$ |
| $6$ | $(1,5), (2,4), (3,3), (4,2), (5,1)$ | $5$ | $\frac{5}{36}$ |
| $7$ | $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$ | $6$ | $\frac{6}{36} = \mathbf{\frac{1}{6}}$ |
| $8$ | $(2,6), (3,5), (4,4), (5,3), (6,2)$ | $5$ | $\frac{5}{36}$ |
| $9$ | $(3,6), (4,5), (5,4), (6,3)$ | $4$ | $\frac{4}{36} = \frac{1}{9}$ |
| $10$ | $(4,6), (5,5), (6,4)$ | $3$ | $\frac{3}{36} = \frac{1}{12}$ |
| $11$ | $(5,6), (6,5)$ | $2$ | $\frac{2}{36} = \frac{1}{18}$ |
| $12$ | $(6,6)$ | $1$ | $\frac{1}{36}$ |

**Check:** $1 + 2 + 3 + 4 + 5 + 6 + 5 + 4 + 3 + 2 + 1 = \mathbf{36}$ ✅

**Elena's proof:** There are $11$ possible sums, yet those $11$ sums are **not equally likely**! A sum of $12$ can only happen one way, $(6,6)$, whereas a sum of $7$ can happen six different ways. Therefore:

- $P(\text{sum } 12) = \mathbf{\frac{1}{36}}$ (about $2.8\%$)
- $P(\text{sum } 7) = \frac{6}{36} = \mathbf{\frac{1}{6}}$ (about $16.7\%$)

Rolling a $7$ is **$6$ times as likely** as rolling a $12$! **Liam's intuition was right**: $7$ is the single most likely sum, $2$ and $12$ are the rarest, and $6, 7,$ and $8$ show up frequently because the middle sums have the most combinations.

### Example 2: Sum of $2$

Only $(1,1)$. **$P(\text{sum } 2) = \frac{1}{36}$.** Check: in the sum table, the count for $2$ is $1$ ✅

### Example 3: Doubles (Same Number on Both Dice)

Look down the main diagonal: $(1,1), (2,2), (3,3), (4,4), (5,5), (6,6) \implies 6$ outcomes.
**$P(\text{doubles}) = \frac{6}{36} = \frac{1}{6}$.**
**Check:** "Same number on both dice" is just another name for doubles, so $P(\text{same numbers}) = \mathbf{\frac{1}{6}}$. Another way to see it: whatever number the first die lands on, the second die has a $\frac{1}{6}$ chance of matching it ✅

### Example 4: Sum At Least $10$

Sums of $10, 11,$ or $12$: $(4,6), (5,5), (6,4), (5,6), (6,5), (6,6) \implies 3 + 2 + 1 = 6$ outcomes.
**$P(\text{sum} \ge 10) = \frac{6}{36} = \frac{1}{6}$.**
**Check:** From the sum table, $3 + 2 + 1 = 6$ ✅

### Example 5: Product of $12$

Which pairs multiply to $12$? $2 \times 6$ and $3 \times 4$. Counting ordered pairs: $(2,6), (6,2), (3,4), (4,3) \implies 4$ outcomes.
**$P(\text{product } 12) = \frac{4}{36} = \frac{1}{9}$.**
**Check:** $1 \times 12$ is impossible (dice only go up to $6$), so only $2 \times 6, 3 \times 4, 4 \times 3,$ and $6 \times 2$ work — $4$ pairs ✅

---

## Part C: A Standard Deck of Playing Cards (Extra)

This section is an **extra** enrichment topic. Card problems appear often in maths contests and textbooks, yet many students have never actually inspected a deck of cards. Let us map out the entire deck first!

### The $52$-Card Deck

A standard deck contains **$52$ cards**, divided evenly into **$4$ suits**:

| Suit | Colour | Number of cards |
|---|---|---|
| Spades ($\spadesuit$) | Black | $13$ |
| Clubs ($\clubsuit$) | Black | $13$ |
| Hearts ($\heartsuit$) | Red | $13$ |
| Diamonds ($\diamondsuit$) | Red | $13$ |

That gives **$26$ red cards** (hearts $+$ diamonds) and **$26$ black cards** (spades $+$ clubs), totalling $4 \times 13 = 52$.

Each suit has **$13$ cards**: Ace ($A$), $2, 3, 4, 5, 6, 7, 8, 9, 10$, Jack ($J$), Queen ($Q$), King ($K$). Count: $1 + 9 + 3 = 13$.

**Face cards:** Jacks ($J$), Queens ($Q$), and Kings ($K$) are called **face cards** because they carry portraits on the card. There are $3$ in each of the $4$ suits, making **$3 \times 4 = 12$ face cards** in total. Watch out: "a face card" means one of those $12$ individual cards, not "3 cards"!

Every rank appears $4$ times (once per suit): $4$ Kings, $4$ Aces, $4$ sevens, and so on.

When a deck is well-shuffled and one card is drawn blindly, all **$52$ cards are equally likely**.

### Example 6: A Red Card

$26$ red cards. **$P(\text{red}) = \frac{26}{52} = \frac{1}{2}$.**
**Check:** $26 \div 26 = 1$ and $52 \div 26 = 2$, giving $\frac{1}{2}$. Half the deck is red, so this makes complete sense ✅

### Example 7: A King

$4$ Kings (one in each suit). **$P(\text{King}) = \frac{4}{52} = \frac{1}{13}$.**
**Check:** $4 \div 4 = 1$ and $52 \div 4 = 13$ ✅

### Example 8: A Face Card

$12$ face cards. **$P(\text{face card}) = \frac{12}{52} = \frac{3}{13}$.**
**Check:** $12 \div 4 = 3$ and $52 \div 4 = 13$ ✅. Note that $\frac{3}{13} \approx 0.23$, roughly $1$ in every $4$ cards, which matches $3$ out of $13$ per suit!

### Example 9: The Ace of Spades

There is **only one** Ace of Spades in the deck. **$P = \frac{1}{52}$.**
**Check:** Only that single card qualifies — do not count the Aces of the other three suits ✅

### Example 10: Not a Heart

There are $13$ hearts, so $52 - 13 = 39$ cards are not hearts.
**$P(\text{not a heart}) = \frac{39}{52} = \frac{3}{4}$.**
**Check (using complement):** $P(\text{heart}) = \frac{13}{52} = \frac{1}{4}$, so $P(\text{not a heart}) = 1 - \frac{1}{4} = \mathbf{\frac{3}{4}}$ ✅

---

## Common Pitfalls to Avoid

1. **Mistake 1: Treating HT and TH as the same outcome.**
   Listing two-coin outcomes as only HH, HT, TT ($3$ outcomes) wrongly gives $P(1\text{ head}) = \frac{1}{3}$. Correct: $\{HH, HT, TH, TT\}$ has $4$ equally likely outcomes, so $P(1\text{ head}) = \frac{2}{4} = \mathbf{\frac{1}{2}}$.

2. **Mistake 2: Treating the $11$ dice sums ($2$ to $12$) as equally likely.**
   That is what Liam tried first: $P(7) = \frac{1}{11}$. Yet the $11$ sums are not equally likely! Always use the $36$ equally likely ordered pairs, giving $P(7) = \frac{6}{36} = \mathbf{\frac{1}{6}}$ ($\frac{1}{11} \approx 0.091$, whereas the true $\frac{1}{6} \approx 0.167$).

3. **Mistake 3: Leaving out reversed pairs in the $36$-outcome table.**
   Writing $(2,5)$ while forgetting $(5,2)$ leaves only $3$ ways to get sum $7$ — $(1,6), (2,5), (3,4)$ — giving $\frac{3}{36}$ instead of the true **$6$ ways**, $\frac{6}{36} = \frac{1}{6}$. Always draw the $6 \times 6$ grid and check that your total count is $36$.

4. **Mistake 4: Counting only $3$ face cards in a deck.**
   Seeing "$J, Q, K$" and assuming $3$ face cards gives $\frac{3}{52}$. Remember there are $4$ suits, so $3 \times 4 = \mathbf{12}$ face cards, giving $P = \frac{12}{52} = \mathbf{\frac{3}{13}}$.

5. **Mistake 5: Leaving fractions unsimplified.**
   Stopping at $P(\text{sum } 7) = \frac{6}{36}$ or $P(\text{red}) = \frac{26}{52}$ is incomplete. Divide numerator and denominator by their common factor: $\frac{6}{36} = \mathbf{\frac{1}{6}}$, $\frac{26}{52} = \mathbf{\frac{1}{2}}$.

---

## Quick Recap

- **Two coins:** sample space $\{HH, HT, TH, TT\}$, $4$ outcomes. HT and TH are **distinct**.
- $0, 1,$ and $2$ heads are NOT equally likely: their probabilities are $\frac{1}{4}, \frac{1}{2}, \frac{1}{4}$.
- **Three coins:** $8$ outcomes. $P(\text{exactly } 2 \text{ heads}) = \frac{3}{8}$, $P(\text{at least one head}) = \frac{7}{8}$.
- **Two dice:** $6 \times 6 = \mathbf{36}$ equally likely ordered pairs. Sums $2$ to $12$ are NOT equally likely.
- Sum counts ($2$ to $12$): $1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1$. **Sum $7$ is most likely** ($\frac{1}{6}$); sums $2$ and $12$ are least likely ($\frac{1}{36}$).
- $P(\text{doubles}) = \frac{1}{6}$, $P(\text{sum} \ge 10) = \frac{1}{6}$, $P(\text{product } 12) = \frac{1}{9}$.
- **Playing cards (extra):** $52$ cards, $4$ suits of $13$, $26$ red and $26$ black, $12$ face cards ($J, Q, K$ in each suit).
- Always list the sample space first, count favourable outcomes, and simplify the final fraction.

---

## Practice Questions

1. Two coins are tossed. Find the probability of getting (a) a tail on the second coin, (b) exactly one head, (c) no head.

2. Two dice are rolled. Find the probability that the sum is $8$.

3. Two dice are rolled. Find the probability that the sum is less than $5$.

4. A bag has $3$ red, $5$ blue, and $2$ green balls. One ball is drawn without looking. Find the probability that it is (a) green, (b) not blue.

5. A spinner has $12$ equal sections numbered $1$ to $12$. Find the probability that it stops on (a) a prime number, (b) a multiple of $3$.

6. Three coins are tossed together. Find the probability of getting (a) exactly one head, (b) all three showing the same face.

7. One card is drawn at random from a well-shuffled deck of $52$ cards. Find the probability that it is (a) a black King, (b) not a face card, (c) a card with the number $7$.

8. Two dice are rolled. Find the probability that the sum is (a) a prime number, (b) an even number.

9. Say whether each statement is true or false, giving a reason:
   (a) When two coins are tossed, $P(\text{one head and one tail}) = \frac{1}{3}$.
   (b) When two dice are rolled, sum $6$ and sum $8$ are equally likely.
   (c) When two dice are rolled, sum $12$ is more likely than sum $7$.

10. Two dice are rolled. Find the probability that the two numbers are different, and explain how the complement helps.

### Answers

1. Sample space: HH, HT, TH, TT ($4$ outcomes).
   (a) Tail on the second coin: HT, TT $= 2$, so $\frac{2}{4} = \mathbf{\frac{1}{2}}$. Check: the second coin alone lands tails $\frac{1}{2}$ of the time ✅
   (b) Exactly one head: HT, TH $= 2$, so $\frac{2}{4} = \mathbf{\frac{1}{2}}$.
   (c) No head: TT $= 1$, so **$\frac{1}{4}$**.

2. Sum $8$: $(2,6), (3,5), (4,4), (5,3), (6,2) = 5$ outcomes. $P = \mathbf{\frac{5}{36}}$.
   Check: in the sum table, the count for $8$ is $5$ ✅

3. Sum $2, 3,$ or $4$: $1 + 2 + 3 = 6$ outcomes: $(1,1), (1,2), (2,1), (1,3), (2,2), (3,1)$. $P = \frac{6}{36} = \mathbf{\frac{1}{6}}$.

4. Total $= 3 + 5 + 2 = 10$ balls.
   (a) $P(\text{green}) = \frac{2}{10} = \mathbf{\frac{1}{5}}$.
   (b) Not blue $= 3 + 2 = 5$, so $\frac{5}{10} = \mathbf{\frac{1}{2}}$. Check: $1 - P(\text{blue}) = 1 - \frac{5}{10} = \frac{1}{2}$ ✅

5. Total $12$ outcomes.
   (a) Primes: $2, 3, 5, 7, 11 = 5$ ($1$ is not prime). $P = \mathbf{\frac{5}{12}}$.
   (b) Multiples of $3$: $3, 6, 9, 12 = 4$. $P = \frac{4}{12} = \mathbf{\frac{1}{3}}$.

6. Total $8$ outcomes.
   (a) Exactly one head: HTT, THT, TTH $= 3$, so **$\frac{3}{8}$**.
   (b) All same: HHH, TTT $= 2$, so $\frac{2}{8} = \mathbf{\frac{1}{4}}$.

7. (a) Black Kings: King of spades and King of clubs $= 2$. $P = \frac{2}{52} = \mathbf{\frac{1}{26}}$.
   (b) Face cards $= 12$, so not a face card $= 52 - 12 = 40$. $P = \frac{40}{52} = \mathbf{\frac{10}{13}}$. Check: $1 - \frac{3}{13} = \frac{10}{13}$ ✅
   (c) One $7$ in each suit $= 4$ cards. $P = \frac{4}{52} = \mathbf{\frac{1}{13}}$.

8. (a) Prime sums: $2$ ($1$ way), $3$ ($2$), $5$ ($4$), $7$ ($6$), $11$ ($2$) $= 15$ outcomes. $P = \frac{15}{36} = \mathbf{\frac{5}{12}}$.
   (b) Even sums: $2, 4, 6, 8, 10, 12 = 1 + 3 + 5 + 5 + 3 + 1 = 18$ outcomes. $P = \frac{18}{36} = \mathbf{\frac{1}{2}}$.
   Check: odd sums $3, 5, 7, 9, 11 = 2 + 4 + 6 + 4 + 2 = 18$, and $18 + 18 = 36$ ✅

9. (a) **False** ❌. "One head and one tail" has two outcomes, HT and TH, so $P = \frac{2}{4} = \frac{1}{2}$, not $\frac{1}{3}$.
   (b) **True** ✅. Both have $5$ outcomes, so both have probability $\frac{5}{36}$.
   (c) **False** ❌. Sum $12$ has only $1$ outcome ($\frac{1}{36}$), while sum $7$ has $6$ outcomes ($\frac{6}{36}$); sum $7$ is far more likely.

10. Same numbers (doubles) $= 6$ outcomes, so $P(\text{doubles}) = \frac{6}{36} = \frac{1}{6}$. Different numbers $= 1 - \frac{1}{6} = \mathbf{\frac{5}{6}}$.
    How the complement helps: instead of listing all $30$ pairs with different numbers, you only have to count the $6$ doubles and subtract from $1$.
    Check: $36 - 6 = 30$, and $\frac{30}{36} = \frac{5}{6}$ ✅

---

Now you can tackle coins, dice, and playing cards cleanly by building the sample space first. Liam knows too that rolling $7$ isn't just a hunch — it is a rock-solid $\frac{1}{6}$ probability! You have got this!

---

# Chapter Wrap-up: Probability

| Topic | What You Learned | Key Takeaway |
|---|---|---|
| 1. Experiment, Outcome, and Event | The vocabulary of chance: experiment, random experiment, trial, outcome, event | An event is a collection of outcomes satisfying a condition |
| 2. Empirical Probability | Repeating experiments, tallying results, and computing relative frequency | $P(E) = \frac{\text{times } E \text{ happened}}{\text{total trials}}$; ratios stabilize as trials increase |
| 3. Theoretical Probability | Computing probability without trials when all outcomes are equally likely | $P(E) = \frac{n(E)}{n(S)}$ whenever outcomes are equally likely |
| 4. $0$ to $1$, Complements, and "At Least One" | Probability bounds, impossible/certain events, complements, "at least one" | $0 \le P(E) \le 1$ and $P(\bar{E}) = 1 - P(E)$; complements simplify "at least one" |
| 5. Two Coins, Two Dice, and Cards (Extra) | Multi-object sample spaces ($4, 8, 36$ outcomes) and the $52$-card deck | Always list the full sample space: HT $\neq$ TH, and $(2,5) \neq (5,2)$ |

### All Formulas and Ideas

| Concept | Formula or Rule |
|---|---|
| Empirical probability | $P(E) = \frac{\text{Number of trials where } E \text{ occurred}}{\text{Total number of trials}}$ |
| Theoretical probability | $P(E) = \frac{n(E)}{n(S)} = \frac{\text{Favourable outcomes}}{\text{Total equally likely outcomes}}$ |
| Range of probability | $0 \le P(E) \le 1$; impossible $= 0$, certain $= 1$ |
| Complement | $P(\bar{E}) = 1 - P(E)$ (equivalently $P(E) + P(\bar{E}) = 1$) |
| Two coins | $4$ outcomes: $\{HH, HT, TH, TT\}$ |
| Three coins | $8$ outcomes |
| Two dice | $36$ outcomes; sum $7$ is most likely ($\frac{6}{36}$), sums $2$ and $12$ least likely ($\frac{1}{36}$) |
| Standard deck of cards | $52$ cards: $4$ suits $\times 13$; $26$ red, $26$ black; $12$ face cards; $4$ Kings, $4$ Aces |

---

Whether it is a coin toss, a pair of dice, or a deck of cards, you now have the full toolkit for measuring chance: list the sample space, count the favourable outcomes, and simplify your fraction.
