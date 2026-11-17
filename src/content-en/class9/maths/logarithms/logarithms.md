# Chapter: Logarithms

> **Class:** 9 | **Subject:** Mathematics
> **This chapter builds directly on:** [number-systems-part6.md](../number-systems/number-systems-part6.md) (laws of exponents and rational exponents) and [exponents.md](../../../class8/maths/exponents/exponents.md) (Class 8 Exponents).
> **Topics covered in this file:**
> 1. What Is a Logarithm?

---

# Topic 1: What Is a Logarithm?

In the Exponents chapter, we saw that $2^6$ means multiplying $2$ by itself $6$ times, which equals $64$. There, we were always **given the base and the power, and we had to find the resulting number**. In this chapter, we flip the question **backwards**: you are given the number ($64$) and the base ($2$) — so what was the power?

This reverse question has a neat, compact name: a **logarithm**. The word may sound intimidating at first, yet you will soon see that it is simply a shorthand way of asking **"to what power?"** In this topic, we will find powers that come straight from simple counting, and learn how to write logarithms, read them aloud, and recognize when a logarithm cannot be defined.

---

## Counting Bacteria

In a microbiology lab, Dr. Bennett is sitting in front of a petri dish. His student intern, Maya, is on her first day and full of curiosity. The dish holds a bacterial culture that **doubles every hour**. At the very start, there was just **$1$ bacterium** in the dish.

Dr. Bennett writes this table in the lab logbook:

| Hour | Bacteria | In Power Form |
|---|---|---|
| $0$ | $1$ | $2^0$ |
| $1$ | $2$ | $2^1$ |
| $2$ | $4$ | $2^2$ |
| $3$ | $8$ | $2^3$ |
| $4$ | $16$ | $2^4$ |
| $5$ | $32$ | $2^5$ |
| $6$ | $64$ | $2^6$ |

Maya studies the table and asks, "Dr. Bennett, after how many hours will there be $64$ bacteria?"

Dr. Bennett smiles. "Work it out yourself! Look at the table: what power of $2$ gives $64$?"

Maya counts along: $2, 4, 8, 16, 32, 64$ — six doublings. "Six hours, because $2^6 = 64$!"

"Exactly," says Dr. Bennett. "Now here is the secret. The question you just answered — *'to what power must we raise $2$ to get $64$?'* — **the number that answers that question is called a logarithm (or 'log' for short).** Here the answer is $6$, so we say the logarithm of $64$ to the base $2$ is $6$."

Maya thinks for a moment. "So a logarithm isn't some mysterious new creature — it's literally just the exponent we just found?"

"Precisely! It simply has its own name and notation. Let us learn how to write it."

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Logarithm ($\log$)** | The power to which a base must be raised to produce a given number | The log of $64$ to base $2$ is $6$ |
| **Base** | The number being raised to a power; written as a small subscript below $\log$ | In $\log_2 64$, the base is $2$ |
| **Argument** | The number whose logarithm we are finding; written right after $\log$ | In $\log_2 64$, the argument is $64$ |
| **Value** | The answer to the logarithm — that is, the exponent itself | In $\log_2 64 = 6$, the value is $6$ |
| **Common logarithm** | A logarithm with base $10$, usually written without showing the base | $\log 1000 = 3$ |

---

## Part A: Definition of a Logarithm

Let us write the bacteria result directly in both languages:

- In exponential form: **$2^6 = 64$**
- In logarithmic form: **$\log_2 64 = 6$**

Both statements express the exact same mathematical relationship. The base $2$ drops down as a small subscript, $64$ sits beside $\log$, and the exponent $6$ becomes the answer after the $=$ sign.

Now let us write this for any valid base $a$, exponent $x$, and resulting number $N$:

> **If $a^x = N$, then $x = \log_a N$.**

We read $\log_a N = x$ aloud as: "the logarithm of $N$ to the base $a$ is $x$." Notice that $_a$ is written as a small subscript right next to $\log$.

Build one habit right now, because it will serve you throughout this entire chapter: **a logarithm is a question, and its answer is an exponent.**

> $\log_a N$ asks: **"$a$ raised to what power equals $N$?"**

### Conversion Table: Exponential Form to Logarithmic Form and Back

| Exponential Form | Logarithmic Form | How to Read It |
|---|---|---|
| $2^5 = 32$ | $\log_2 32 = 5$ | Raise $2$ to the power $5$ to get $32$ |
| $10^3 = 1000$ | $\log_{10} 1000 = 3$ | Raise $10$ to the power $3$ to get $1000$ |
| $3^4 = 81$ | $\log_3 81 = 4$ | Raise $3$ to the power $4$ to get $81$ |
| $5^2 = 25$ | $\log_5 25 = 2$ | Raise $5$ to the power $2$ to get $25$ |
| $4^3 = 64$ | $\log_4 64 = 3$ | Raise $4$ to the power $3$ to get $64$ |
| $7^2 = 49$ | $\log_7 49 = 2$ | Raise $7$ to the power $2$ to get $49$ |
| $6^3 = 216$ | $\log_6 216 = 3$ | Raise $6$ to the power $3$ to get $216$ |
| $2^4 = 16$ | $\log_2 16 = 4$ | Raise $2$ to the power $4$ to get $16$ |

Look closely at the pattern: **the base stays the base in both forms** (either carrying the exponent or sitting low as a subscript). **The exponent becomes the answer to the log.** And **the resulting number ($32, 1000, \dots$) becomes the argument right after $\log$.**

---

## Part B: Reading Logarithms Aloud and Identifying Their Parts

Dr. Bennett reminded Maya not just to write logarithms, but to **speak** them as questions. Whenever you see a logarithm, turn it into a question immediately:

> Read **$\log_2 64$** as: "$2$ raised to what power gives $64$?"

Now identify every part of $\log_2 64 = 6$:

- **Base $= 2$** (the small subscript number)
- **Argument $= 64$** (the number right after $\log$)
- **Value $= 6$** (the answer, which is the exponent)

### Example 1: Identify the Parts

In $\log_3 81 = 4$, state the base, the argument, and the value.

- Base $= \mathbf{3}$
- Argument $= \mathbf{81}$
- Value $= \mathbf{4}$

**Check:** $3^4 = 3 \times 3 \times 3 \times 3 = 81$ ✅

### Example 2: Convert from Exponential to Logarithmic Form

Write $5^3 = 125$ in logarithmic form.

Here the base is $5$, the exponent is $3$, and the result is $125$. The exponent becomes the value of the logarithm:

$$\log_5 125 = 3$$

**Check:** $5 \times 5 \times 5 = 125$ ✅

### Example 3: Convert from Logarithmic to Exponential Form

Write $\log_4 16 = 2$ in exponential form.

Here the base is $4$, the value (exponent) is $2$, and the argument is $16$:

$$4^2 = 16$$

**Check:** $4 \times 4 = 16$ ✅

---

## Part C: When Logarithms Are Defined (and When They Are Not)

Logarithms come with two strict rules. You do not need to memorize them blindly — **understanding why they exist** makes them effortless to remember.

### Condition 1: The Base Must Be Positive and Not Equal to $1$

Dr. Bennett gave Maya a quick challenge: "Find $\log_1 5$. In other words, $1$ raised to what power equals $5$?"

Maya listed powers of $1$: $1^1 = 1$, $1^2 = 1$, $1^3 = 1$, $1^4 = 1 \dots$

"Wait — it always stays $1$! You can never get $5$."

"Right," said Dr. Bennett. "**Every power of $1$ is just $1$**, so with base $1$ you can never produce any number other than $1$. Even $\log_1 1$ makes no sense, because $1^2 = 1$, $1^7 = 1$, and infinitely many powers all work — which answer would you pick? That is why **base $1$ is never allowed.**"

The base cannot be negative either. Raising a negative base to whole-number powers flips between positive and negative signs, and fractional powers such as $(-4)^{1/2}$ are not even real numbers in Class 9 mathematics. So we **always use a positive base**.

> **Base rule: $a > 0$ and $a \neq 1$**

### Condition 2: The Argument Must Be Positive

Maya asked another sharp question: "What about $\log_2 0$?"

Dr. Bennett replied, "Let's test it: $2$ raised to what power equals $0$? Look at $2^0 = 1$, $2^1 = 2$, $2^2 = 4$ — going forward only makes it bigger. Going backward gives $2^{-1} = \frac{1}{2}$, $2^{-2} = \frac{1}{4}$, getting smaller and closer to $0$, yet **it never actually reaches $0$.** Any power of a positive number (as you saw with rational exponents in Number Systems) stays strictly positive. It can never equal $0$ or become negative."

> **Argument rule: $N > 0$** (the logarithm of $0$ or any negative number is undefined)

This also fits Maya's lab experiment perfectly: the bacteria count cannot be $0$ or negative, and since the culture grows in powers of $2$, it always remains positive.

### Example 4: Which Logarithms Are Defined?

State whether each of the following logarithms is defined or not:

(a) $\log_5 25$ $\quad$ (b) $\log_1 9$ $\quad$ (c) $\log_3 (-9)$ $\quad$ (d) $\log_4 0$

- (a) Base $5$ ($> 0$ and $\neq 1$) and argument $25$ ($> 0$). **Defined**, and since $5^2 = 25$, $\log_5 25 = 2$.
- (b) Base is $1$. **Not defined.**
- (c) Argument $-9$ is negative. **Not defined.**
- (d) Argument is $0$. **Not defined.**

---

## Part D: Two Rock-Solid Facts

Dr. Bennett told Maya, "Two facts hold true for every valid base. Do not treat them as extra formulas to memorize — they come straight from two basic rules of exponents."

### Fact 1: $\log_a 1 = 0$

**Why?** Any non-zero number raised to the power $0$ equals $1$: **$a^0 = 1$**. Rewriting this in logarithmic form gives **$\log_a 1 = 0$**.

You can see it right in the bacteria table: at hour $0$, there was $2^0 = 1$ bacterium in the dish, so $\log_2 1 = 0$.

Examples: $\log_7 1 = 0$ (since $7^0 = 1$), $\log_{10} 1 = 0$ (since $10^0 = 1$).

### Fact 2: $\log_a a = 1$

**Why?** Any number raised to the power $1$ stays itself: **$a^1 = a$**. Rewriting this in logarithmic form gives **$\log_a a = 1$**.

Examples: $\log_7 7 = 1$ ($7^1 = 7$), $\log_2 2 = 1$ ($2^1 = 2$), $\log_{10} 10 = 1$ ($10^1 = 10$).

> **$\log_a 1 = 0$** and **$\log_a a = 1$**, for any valid base $a > 0$, $a \neq 1$.

### Example 5: Apply the Facts Directly

Evaluate: (a) $\log_9 1$ $\quad$ (b) $\log_9 9$ $\quad$ (c) $\log_{25} 25$.

- (a) $9^0 = 1 \implies \log_9 1 = \mathbf{0}$
- (b) $9^1 = 9 \implies \log_9 9 = \mathbf{1}$
- (c) $25^1 = 25 \implies \log_{25} 25 = \mathbf{1}$

---

## Part E: Common Logarithms (Base $10$)

Dr. Bennett pointed to the calibration label on the microscope slide beside the dish: "Because our everyday number system works in powers of $10$ ($1, 10, 100, 1000, \dots$), base $10$ appears so frequently that we use a convenient shortcut: **we leave the base unwritten.**"

> **$\log N$** (written with no base shown) means **$\log_{10} N$**.

This is called the **common logarithm**. Whenever you see $\log$ with no subscript base, assume the base is $10$.

| Number | Power of $10$ | Common Logarithm |
|---|---|---|
| $10$ | $10^1 = 10$ | $\log 10 = 1$ |
| $100$ | $10^2 = 100$ | $\log 100 = 2$ |
| $1000$ | $10^3 = 1000$ | $\log 1000 = 3$ |
| $10000$ | $10^4 = 10000$ | $\log 10000 = 4$ |

Spot the pattern? **Count the zeros after $1$ — that is the common log!** $\log 1000 = 3$ because $1000$ has three zeros.

### Example 6: Find Common Logarithms

Evaluate: (a) $\log 100000$ $\quad$ (b) $\log 1$.

- (a) $100000$ has $5$ zeros, so $10^5 = 100000 \implies \log 100000 = \mathbf{5}$
- (b) $10^0 = 1 \implies \log 1 = \mathbf{0}$

**Check (a):** $10 \times 10 \times 10 \times 10 \times 10 = 100000$ ✅

---

## Part F: Logarithm of a Power of the Base

When the argument is already an exact power of the base, you can find the answer simply by stepping through powers of the base. Let us extend Maya's bacteria table further.

### Example 7: $\log_2 1024$

Maya asks, "Dr. Bennett, after how many hours will the culture reach $1024$ bacteria?"

Keep doubling powers of $2$: $2^6 = 64$, $2^7 = 128$, $2^8 = 256$, $2^9 = 512$, $2^{10} = 1024$.

So **$\log_2 1024 = 10$**. The culture will reach $1024$ bacteria after **$10$ hours**.

**Check:** $2^{10} = 512 \times 2 = 1024$ ✅

### Example 8: $\log_3 243$

List powers of $3$: $3^1 = 3$, $3^2 = 9$, $3^3 = 27$, $3^4 = 81$, $3^5 = 243$.

So **$\log_3 243 = 5$**.

**Check:** $81 \times 3 = 243$ ✅

Method: **list successive powers of the base until you reach the argument.** The exponent where you land is the logarithm.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Swapping the base and the argument.**
   $\log_2 8$ and $\log_8 2$ are completely different values.
   - $\log_2 8$ asks: "$2$ raised to what power gives $8$?" Answer: $3$ (because $2^3 = 8$).
   - $\log_8 2$ asks: "$8$ raised to what power gives $2$?" The answer is definitely not $3$ ($8^3 = 512$, way too large!). It is actually a fraction, which we will evaluate in Topic 2.
   The small subscript number at the bottom is always the **base**.

2. **Mistake 2: Writing $\log_2 8 = 4$ (confusing exponents with multiplication).**
   Some students think, "I see $2$ and $8$, and $2 \times 4 = 8$, so the answer is $4$." That is incorrect. $\log_2 8$ asks **how many times $2$ must be multiplied by itself** to make $8$, not what number multiplies $2$ to make $8$.
   - Correct: $2 \times 2 \times 2 = 8$ (three times), so $\log_2 8 = \mathbf{3}$.
   - Check: $2^4 = 16 \neq 8$, so $4$ is wrong.

3. **Mistake 3: Trying to take the logarithm of zero or a negative number.**
   Expressions like $\log 0$ or $\log(-10)$ are invalid. The argument must always be strictly positive ($> 0$). If an expression puts $0$ or a negative number inside a logarithm, it is undefined.

4. **Mistake 4: Forgetting that $a^0 = 1$.**
   It is a common slip to write $\log_5 1 = 5$ or $\log_5 1 = 1$. Since $5^0 = 1$, $\log_5 1 = \mathbf{0}$. Meanwhile, $\log_5 5 = \mathbf{1}$ because $5^1 = 5$. Keep those two separate!

5. **Mistake 5: Forgetting the hidden base $10$ in a common logarithm.**
   $\log 1000$ does not mean "pick any base you like." An unwritten base always means base $10$: $\log 1000 = 3$ (whereas $\log_2 1000$ is not $3$, since $2^3 = 8$).

---

## Quick Recap

- **A logarithm is a question:** $\log_a N$ asks "$a$ raised to what power equals $N$?" The answer is that exponent.
- **Definition:** $a^x = N \iff \log_a N = x$. Exponential form and logarithmic form express the exact same relationship.
- Parts of $\log_a N = x$: **base** ($a$, the small subscript), **argument** ($N$, after $\log$), and **value** ($x$, the answer/exponent).
- **Conditions:** base $a > 0$ and $a \neq 1$; argument $N > 0$.
- **$\log_a 1 = 0$** (since $a^0 = 1$) and **$\log_a a = 1$** (since $a^1 = a$).
- **Common logarithm:** $\log N$ means $\log_{10} N$. So $\log 10 = 1$, $\log 100 = 2$, $\log 1000 = 3$, $\log 10000 = 4$.
- When the argument is a power of the base, count powers directly: $\log_2 1024 = 10$.
- Watch out for pitfalls: swapping base and argument, writing $\log_2 8 = 4$, taking the log of $0$ or a negative number, and forgetting $a^0 = 1$.

---

## Practice Questions

1. Write each in logarithmic form: (a) $2^7 = 128$ $\quad$ (b) $5^3 = 125$ $\quad$ (c) $10^4 = 10000$ $\quad$ (d) $9^2 = 81$.

2. Write each in exponential form: (a) $\log_3 27 = 3$ $\quad$ (b) $\log_6 36 = 2$ $\quad$ (c) $\log_2 1 = 0$ $\quad$ (d) $\log_7 7 = 1$.

3. In $\log_4 64 = 3$, name the base, the argument, and the value. Then read the expression aloud as a question.

4. Find the value of: (a) $\log_2 32$ $\quad$ (b) $\log_3 81$ $\quad$ (c) $\log_5 625$ $\quad$ (d) $\log 1000000$.

5. Which of these are not defined, and why? (a) $\log_1 7$ $\quad$ (b) $\log_2 (-8)$ $\quad$ (c) $\log_5 0$ $\quad$ (d) $\log_{10} 10$.

6. Find the value of $\log_{11} 1 + \log_{11} 11 + \log 10$.

7. A bacterial culture doubles every hour, starting from $1$ bacterium. After how many hours will it reach $4096$ bacteria? Write your answer both as a logarithm and as a number.

8. A student says $\log_2 16 = 8$ because $2 \times 8 = 16$. Find his mistake and give the correct value.

9. State True or False:
   (a) $\log_3 9$ and $\log_9 3$ are equal.
   (b) $\log_a 1 = 0$ for every valid base $a$.
   (c) $\log 10 = 1$.
   (d) $1$ can be used as a base for a logarithm.

### Answers

1. (a) In $2^7 = 128$, base is $2$, exponent is $7$, and result is $128$, so **$\log_2 128 = 7$**.
   (b) **$\log_5 125 = 3$**.
   (c) **$\log_{10} 10000 = 4$**, or simply **$\log 10000 = 4$**.
   (d) **$\log_9 81 = 2$**.
   Check: $2^7 = 128$ ✅, $5^3 = 125$ ✅, $10^4 = 10000$ ✅, $9^2 = 81$ ✅

2. (a) **$3^3 = 27$** $\quad$ (b) **$6^2 = 36$** $\quad$ (c) **$2^0 = 1$** $\quad$ (d) **$7^1 = 7$**
   Check: $3 \times 3 \times 3 = 27$ ✅, $6 \times 6 = 36$ ✅

3. Base $= \mathbf{4}$, argument $= \mathbf{64}$, value $= \mathbf{3}$. Question: "$4$ raised to what power gives $64$?" Answer: $3$.
   Check: $4^3 = 4 \times 4 \times 4 = 64$ ✅

4. (a) Powers of $2$: $2, 4, 8, 16, 32$, so $2^5 = 32 \implies \mathbf{\log_2 32 = 5}$.
   (b) $3^4 = 81 \implies \mathbf{\log_3 81 = 4}$.
   (c) Powers of $5$: $5, 25, 125, 625$, so $5^4 = 625 \implies \mathbf{\log_5 625 = 4}$.
   (d) $1000000$ has $6$ zeros, so $10^6 = 1000000 \implies \mathbf{\log 1000000 = 6}$.

5. (a) **Not defined**, because the base is $1$ (every power of $1$ is $1$).
   (b) **Not defined**, because the argument $-8$ is negative.
   (c) **Not defined**, because the argument is $0$.
   (d) **Defined**: base $10$ and argument $10$ are both valid. $\log_{10} 10 = 1$ (since $10^1 = 10$).

6. $\log_{11} 1 = 0$ ($11^0 = 1$), $\log_{11} 11 = 1$ ($11^1 = 11$), $\log 10 = \log_{10} 10 = 1$. Total $= 0 + 1 + 1 = \mathbf{2}$.

7. Powers of $2$: $2^1 = 2$, $2^2 = 4$, $2^3 = 8$, $2^4 = 16$, $2^5 = 32$, $2^6 = 64$, $2^7 = 128$, $2^8 = 256$, $2^9 = 512$, $2^{10} = 1024$, $2^{11} = 2048$, $2^{12} = 4096$.
   So **$\log_2 4096 = 12$**, meaning **$12$ hours**.
   Check: $2^{12} = 2^{10} \times 2^2 = 1024 \times 4 = 4096$ ✅

8. The student confused multiplication with exponentiation. $\log_2 16$ asks "$2$ raised to what power equals $16$?" Since $2 \times 2 \times 2 \times 2 = 16$ (four times), **$\log_2 16 = 4$**.
   Check: $2^8 = 256 \neq 16$, so $8$ is wrong; $2^4 = 16$ ✅

9. (a) **False** ❌. $\log_3 9 = 2$ ($3^2 = 9$), whereas $\log_9 3 \neq 2$ since $9^2 = 81$. Swapping the base and argument changes the value.
   (b) **True** ✅. Because $a^0 = 1$.
   (c) **True** ✅. Because $10^1 = 10$.
   (d) **False** ❌. Every power of $1$ equals $1$, so base $1$ is not allowed.

---

Starting from Maya's bacteria count, you have just learned a brand-new mathematical language: logarithms. Whenever you feel stuck on a logarithm, turn it into its core question — *"the base raised to what power equals the argument?"* — and step through powers of the base.

**What comes next?** So far, every logarithm we solved had a clean whole-number answer ($2, 3, 6, 10$). In Topic 2, we will see how to solve for an unknown hiding anywhere inside a logarithm (like $\log_{15} x = 2$), and discover how logarithms can also equal fractions or negative numbers — such as $\log_8 2$ or $\log_2\left(\frac{1}{8}\right)$!
