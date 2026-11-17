# Chapter: Probability

> **Class:** 9 | **Subject:** Mathematics
> **This is the first file in this chapter.** Useful background if you need a refresher: fractions and decimals in [number-systems-part2.md](../number-systems/number-systems-part2.md), and tally marks and frequency tables in Class 9 Statistics.
> **Topics covered in this file:**
> 1. What Is Probability?

---

# Topic 1: What Is Probability?

In this chapter, we will learn how to look at **chance** through a mathematical lens — turning everyday phrases like "maybe it will happen" into an exact **number**. There are no calculations in this first topic. Instead, our goal is simply to learn the vocabulary we need whenever we talk about chance, and to recognise which situations count as "random." We are starting right from zero, so take it easy and enjoy!

---

## The Backyard Match Coin Toss

It is five o'clock in the afternoon. Behind the park, a neighbourhood friendly match is about to kick off. The two team captains are **Leo** and **Maya**. First comes the coin toss to decide who starts with the ball.

Maya pulls a coin from her pocket. "Leo, call it!"

Leo calls, "**Heads**."

The coin flips high into the air, spins, lands on the grass, and settles. Everyone leans in to look. Leo raises both arms in celebration: "Heads! We start!"

A younger player asks from the sidelines, "Was that toss fair, though? Maya was the one who flipped it."

Maya laughs. "Relax — a coin doesn't play favourites! Whether it lands heads or tails, both have an equal chance."

Leo pauses to think. "Equal chance? Like 50-50? Wait — in mathematics, what does 'chance' actually mean?"

The two start trading examples:

- Maya: "Yesterday everyone said it will **probably** rain."
- Leo: "And the sun will **definitely** rise tomorrow morning."
- Maya: "And me sprinting $10\text{ km}$ in a single minute — that is **impossible**."

"Probably," "definitely," "impossible" — all three describe chance. Yet there is a problem with everyday words. How likely is "probably"? One person's "probably" might mean a $90\%$ expectation, while another person's means $55\%$. Leo's "probably" and Maya's "probably" might mean very different things! Everyday words are not **precise** enough for mathematics.

That is why mathematics says: **measure chance as a number**. Then everyone speaks the exact same language. How we calculate that number comes in the next topics. In this topic, we will master the essential **terms** without which no conversation about chance can begin.

---

## Words of Chance, and the Idea of a Number

In everyday conversation, we use phrases like these for chance:

| What We Say | Meaning |
|---|---|
| "It is certain" | Nothing can stop this from happening |
| "It is impossible" | This can never happen |
| "It might happen" | Sometimes it happens, sometimes it does not |
| "50-50" | Equally likely to happen or not happen |

Mathematics assigns every one of these a **number** between **$0$ and $1$**. Impossible events get the smallest number, certain events get the largest number, and everything else falls somewhere in between. That is just a preview — we will learn how to compute these numbers and interpret them fully in the next topics. For now, remember one core idea: **chance can be measured as a number**.

The mathematical name for that number is **probability**.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Experiment** | Any action or procedure that can be repeated under similar conditions | Tossing a coin, rolling a die, drawing a ball from a bag |
| **Random experiment** | An experiment whose outcome **cannot be predicted in advance** | In a coin toss, you cannot know beforehand whether heads or tails will appear |
| **Trial** | Performing an experiment **one single time** | Flipping a coin once is $1$ trial |
| **Outcome** | A **single** possible result of one trial | Getting heads on a coin flip |
| **Event** | A **collection** of outcomes we are interested in (can contain just $1$ outcome or several) | Rolling an "even number" on a die |
| **Certain event** | An event that is **guaranteed** to happen | Rolling a number less than $7$ on a standard die |
| **Impossible event** | An event that **can never** happen | Rolling a $7$ on a standard six-sided die |
| **Fair** | Every outcome has an **equal** chance of happening | A normal coin: heads and tails are equally likely |

---

## Part A: Experiment and Random Experiment

An **experiment** is any action we can carry out and repeat. For example:

- Tossing a coin
- Rolling a die
- Drawing a ball from a bag

Pay close attention: not every experiment is random. A **random experiment** is one whose result can vary from trial to trial, so **we cannot predict in advance** what will happen next.

### Examples of Random Experiments

1. **Tossing a coin.** You cannot tell ahead of time whether it will land heads or tails.
2. **Rolling a die.** Any number from $1$ to $6$ could appear.
3. **Spinning a prize wheel.** Like at a school carnival, the pointer spins and stops on a colour — you cannot know which colour beforehand.
4. **Drawing a ball blindly from a bag.** Without peeking, you do not know which ball your hand will pull out.

### Things That Are Not Random

1. **Dropping a ball from a rooftop.** Gravity pulls it straight down every time. The outcome is known beforehand.
2. **Heating pure water to $100^\circ\text{C}$ at normal sea-level pressure.** It will always boil.
3. **Asking "If today is Monday, what day is tomorrow?"** Tuesday — guaranteed.

In every one of these, the outcome is completely predictable in advance. Therefore, they are not random experiments, and we do not ask probability questions about them.

**Ask yourself:** *"Can I predict the result for sure before doing it?"* If yes, it is not random. If no, it is a random experiment.

---

## Part B: Trial and Outcome

A **trial** is performing an experiment **once**. When Leo tossed the coin once, that was **$1$ trial**. If he tossed it $3$ times, that would be **$3$ trials**.

An **outcome** is a **single** result of one trial. The outcome of Leo's toss was Heads.

### Listing All Possible Outcomes

In any random experiment, our very first step is always: **list all possible outcomes**.

**1. Tossing a coin**
- Possible outcomes: **H** (Heads) and **T** (Tails)
- Total: $2$ outcomes.

**2. Rolling a standard six-sided die**
- Possible outcomes: **$1, 2, 3, 4, 5, 6$**
- Total: $6$ outcomes.

**3. Drawing one ball blindly from a bag with $3$ red and $2$ blue balls**
- Possible outcomes by colour: **red** and **blue**
- Notice there are only $2$ *types* of outcomes when we only look at colour, even though the bag holds $5$ balls ($3$ red and $2$ blue). That difference in counts affects their chances — we will see exactly how in Topic 3!

**Note:** An outcome is always **one single result** from **one single trial**. "Getting both $2$ and $4$ on a single roll of one die" is not an outcome, because only one face lands on top per roll.

---

## Part C: Event

Often we do not care about just one specific outcome — we want **"anything that meets our condition."** Such a collection of outcomes is called an **event**.

**Event $=$ the set of outcomes that satisfy our condition.**

### Example 1: Getting a 4 on a Die

- Event: "getting a $4$"
- Outcomes that make this event happen: only **$4$**
- So this event consists of **$1$ outcome**.

### Example 2: Getting an Even Number on a Die

- Event: "getting an even number"
- All outcomes on a die: $1, 2, 3, 4, 5, 6$
- Even numbers among them: **$2, 4, 6$**
- So this event consists of **$3$ outcomes**. If any of these three appears, the event happens.

### Example 3: Getting a Number Greater Than 4 on a Die

- Event: "getting a number greater than $4$"
- Outcomes: **$5, 6$**
- This event consists of $2$ outcomes.

### Example 4: Bag ($3$ Red, $2$ Blue) — Drawing a Ball

- Event: "drawing a red ball" $\rightarrow$ Outcome: **red**
- Event: "drawing a red or blue ball" $\rightarrow$ Both outcomes (red, blue).

### Practice: "Which Outcomes Make This Event Happen?"

Try writing the outcomes for a standard die:

| Event | Outcomes that make the event happen |
|---|---|
| Getting an odd number | $1, 3, 5$ |
| Getting a number less than $3$ | $1, 2$ |
| Getting a $5$ | $5$ |
| Getting a prime number ($2, 3,$ or $5$) | $2, 3, 5$ |

And for a coin toss:

| Event | Outcomes |
|---|---|
| Getting heads | H |
| Getting heads or tails | H, T |

**Method:** First list every possible outcome of the experiment, then check each one against your condition.

---

## Part D: Certain Events and Impossible Events (A Quick Preview)

Some events need no calculation at all to predict!

**Rolling a number less than $7$ on a die.** Every outcome on a die ($1$ through $6$) is less than $7$. No matter what lands face up, the event happens! This is called a **certain event** — it is **guaranteed**.

**Rolling a $7$ on a standard die.** A standard die only has faces $1$ through $6$; there is no $7$. This event can never happen. It is called an **impossible event**.

Another example: if a bag contains *only* red balls, then "drawing a red ball" is **certain**, and "drawing a blue ball" is **impossible**.

Notice how Maya's "definitely" and "impossible" fit right in here! We will explore both in detail in Topic 4. For now, simply practise spotting them.

---

## Part E: Fair and Unfair

Maya said earlier, *"Whether it lands heads or tails, both have an equal chance."* In mathematics, we say: **the coin is fair**.

> **Fair:** Every possible outcome has an **equal** chance of occurring.

- **Fair coin:** Heads and tails are equally likely.
- **Fair die:** $1, 2, 3, 4, 5,$ and $6$ are all equally likely (every face is symmetric and balanced).

That is why Leo and Maya's toss was **fair** — it did not matter whose hand flipped it.

Now imagine Maya had a **trick coin** weighted heavily on one side. It would keep landing on the same side over and over. We call that an **unfair** (or biased/loaded) coin. Similarly, a die with a lead weight hidden inside one face would be unfair: some numbers would turn up far more often than others.

In all topics ahead, whenever a problem says "a coin is tossed" or "a die is rolled," assume it is **fair** unless the problem specifically tells you otherwise.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Mixing up an outcome and an event.**
   - Rolling a "$4$" on a die is an outcome, and it can also be treated as an event (one containing a single outcome).
   - However, "rolling an even number" is an **event**, because it groups together **$3$ outcomes** ($2, 4, 6$). You cannot call "an even number" a single outcome! In one trial, the die lands on one specific number — say, $6$ — which is the outcome, and that outcome makes the event "even number" happen.
   Remember: **outcome $=$ a single result; event $=$ a collection of outcomes.**

2. **Mistake 2: Thinking "Heads just appeared, so Tails is due next!"**
   Suppose Leo sees heads three times in a row and insists, *"Tails MUST come up next!"* That is the **gambler's fallacy**. A coin has no memory! On every fresh toss, heads and tails are equally likely again, regardless of how many heads came before. **Past tosses do not influence future tosses.**

3. **Mistake 3: Thinking "50-50" means H, T, H, T alternating.**
   Some students think a 50-50 chance forces a coin to alternate back and forth: H, T, H, T. Not true! "50-50" means **both outcomes have equal chances on each flip**, not that they take turns. A fair coin can easily produce H, H, H, T or T, T, H.

4. **Mistake 4: Calling every action a random experiment.**
   Dropping a stone off a roof is not a random experiment — you already know it will fall downward.

---

## Quick Recap

- Everyday words like "probably," "definitely," and "impossible" describe chance, yet mathematics prefers a **number** between **$0$ and $1$** called **probability**. (We will learn how to compute it in the coming topics.)
- **Experiment:** an action that can be repeated. **Random experiment:** one whose result cannot be predicted in advance (tossing a coin, rolling a die, spinning a wheel, blind draw).
- **Trial:** one performance of an experiment. **Outcome:** one single result of a trial.
- Possible outcomes: coin $\rightarrow$ **H, T**; die $\rightarrow$ **$1$ to $6$**; bag ($3$ red, $2$ blue) $\rightarrow$ **red, blue**.
- **Event:** a collection of outcomes satisfying a condition — may have $1$ outcome (rolling $4$) or several (even number: $2, 4, 6$).
- **Certain event:** guaranteed to happen ($< 7$ on a die). **Impossible event:** cannot happen ($7$ on a die).
- **Fair:** every outcome is equally likely. A weighted coin or die is unfair.
- Pitfalls: confusing outcome and event, falling for the gambler's fallacy, thinking 50-50 means alternating turns.

---

## Practice Questions

1. Which of the following are random experiments? Give a reason for each:
   (a) Spinning a wheel that has four coloured sections.
   (b) Dropping a stone from a roof and watching where it goes.
   (c) Drawing a card without looking from a set of cards that are all different.
   (d) Naming the day of the week that comes after Sunday.

2. Write all the possible outcomes of each experiment:
   (a) Tossing a coin once.
   (b) Rolling a die once.
   (c) Drawing one ball without looking from a bag that has $2$ green balls and $4$ yellow balls.

3. A die is rolled once. List the outcomes that make each event happen:
   (a) Getting a number greater than $2$.
   (b) Getting an odd number.
   (c) Getting a $6$.
   (d) Getting a number that divides $6$ exactly.

4. **Leo** tosses a coin and gets heads. Is "getting heads" an outcome or an event? Now a die is rolled and the result is "getting an even number." Is this an outcome or an event? Explain the difference.

5. A die is rolled once. Say whether each event is certain, impossible, or neither:
   (a) Getting a number less than $10$.
   (b) Getting a $0$.
   (c) Getting a $3$.
   (d) Getting a number between $1$ and $6$, both included.

6. **Maya** tosses a fair coin $4$ times and gets H, H, H, H. **Leo** says, *"Now T is bound to come on the fifth toss!"* Is he right? Explain in your own words.

7. State True or False, with a short reason:
   (a) A coin that always lands on heads is a fair coin.
   (b) "50-50" means a coin will show H and T alternately.
   (c) The outcomes of a die roll are $1, 2, 3, 4, 5, 6$.
   (d) An event can have more than one outcome.

### Answers

1. (a) **Random.** You cannot predict which section the spinner will stop on.
   (b) **Not random.** Gravity pulls the stone downward every time; the result is known beforehand.
   (c) **Random.** Drawing blind from distinct cards means you cannot predict which card you will pull.
   (d) **Not random.** Monday always follows Sunday.

2. (a) **H, T**. Total $2$ outcomes.
   (b) **$1, 2, 3, 4, 5, 6$**. Total $6$ outcomes.
   (c) **green, yellow**. *(There are $6$ individual balls in the bag, yet $2$ possible colour outcomes.)*

3. Outcomes of a die: $1, 2, 3, 4, 5, 6$.
   (a) Greater than $2$: **$3, 4, 5, 6$**.
   (b) Odd: **$1, 3, 5$**.
   (c) **$6$** (only $1$ outcome).
   (d) Exact divisors of $6$: $1, 2, 3, 6$. Check: $6 \div 1 = 6$, $6 \div 2 = 3$, $6 \div 3 = 2$, $6 \div 6 = 1$ ✅, while $4$ and $5$ do not divide $6$ evenly. Outcomes: **$1, 2, 3, 6$**.

4. "Getting heads" is an **outcome** (a single possible result of the toss) — and it can also be viewed as a $1$-outcome event.
   "Getting an even number" is an **event**, because it groups together three outcomes ($2, 4, 6$). On any single roll, the one number that lands face up is the outcome, whereas an event is a collection of outcomes.

5. (a) **Certain.** Every face on a die ($1$ to $6$) is less than $10$.
   (b) **Impossible.** There is no $0$ on a standard die.
   (c) **Neither.** $3$ may happen or may not happen.
   (d) **Certain.** All six outcomes fall between $1$ and $6$ inclusive.

6. Leo is **wrong**. This is the gambler's fallacy. A coin has no memory of previous flips — on a fair coin, H and T still have equal chances on the fifth toss even after four heads in a row.

7. (a) **False** ❌. A fair coin must give H and T equal chances; a coin that always shows H is unfair.
   (b) **False** ❌. "50-50" means equal chances on each flip, not alternating back and forth.
   (c) **True** ✅. Those are the $6$ possible outcomes of rolling a standard die.
   (d) **True** ✅. For example, "getting an even number" has three outcomes ($2, 4, 6$).

---

Today you learned the core language of chance: experiment, random, trial, outcome, and event. Everything in probability builds directly on these words.

**What comes next?** Leo and Maya only tossed their coin once. What happens if they flip a coin — or a plastic bottle cap — $20$, $100$, or $500$ times? In Topic 2, we will run repeated experiments, tally the results, and turn raw counts into **empirical probability**!
