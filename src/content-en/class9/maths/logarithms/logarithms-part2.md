# Chapter: Logarithms (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [logarithms.md](logarithms.md)** (which covers Topic 1: the equivalence between $a^x = N$ and $x = \log_a N$, base, argument, value, domain conditions, $\log_a 1 = 0$, $\log_a a = 1$, and common logarithms).
> **Prerequisite:** rational exponents ($a^{m/n}$), covered in [number-systems-part6.md](../number-systems/number-systems-part6.md).
> **Topics covered in this file:**
> 2. Converting Forms and Finding Unknowns

---

# Topic 2: Converting Forms and Finding Unknowns

In Topic 1, Maya learned a new mathematical language while counting bacteria in Dr. Bennett's lab: "$2$ to the power $6$ gives $64$" is written compactly as **$\log_2 64 = 6$**. We learned that a logarithm simply asks "what is the exponent?", and we named the three pieces: base, argument, and value.

Now the next question is: how do we **put this language to work**? In this topic, we will master three skills: (1) switching smoothly between exponential and logarithmic forms, (2) finding whichever piece is missing (the value, the argument, or the base), and (3) handling logarithms whose answers are fractions or negative numbers. No new formulas are needed — one single habit does all the heavy lifting: **whenever you see a logarithm, rewrite it in exponential form.**

---

## The First Escape Room Plate

Elena and Liam are trying to break out of a puzzle-themed escape room. Standing in front of a heavy steel door, they spot three metal plates bolted beside an electronic keypad:

> **$5^? = 125$**
> **$?^4 = 81$**
> **$8^? = 4$**

Below the keypad, a clue reads: *"Enter the missing number from each plate — whether it is the exponent, the base, or the result — to unlock the door."*

Liam looks at the first plate and grins. "That one is easy! $5 \times 5 \times 5 = 125$, so $3$."

Elena taps the second plate. "Watch out — the question mark moved! Here **the base is missing, not the exponent**. And look at the third plate: $8$ to what power gives $4$? How can a power of $8$ be *smaller* than $8$?"

Liam pauses. "Then the exponent has to be less than $1$... maybe a fraction!"

Elena smiles. "This is the exact idea from our maths lesson. Every plate is a **logarithm puzzle** with a different piece hidden. Let us master converting between forms first, and all three plates will unlock right away."

By the end of this topic, we will unlock all three plates with Elena and Liam.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Exponential form** | Writing a relationship using a base and a power | $2^5 = 32$ |
| **Logarithmic form** | Writing the exact same relationship using $\log$ | $\log_2 32 = 5$ |
| **Converting forms** | Switching between exponential and logarithmic form without changing the meaning | $3^4 = 81 \iff \log_3 81 = 4$ |
| **Unknown** | The missing quantity we need to solve for | Finding the value in $\log_3 81 = ?$ |
| **Same base** | Rewriting two numbers as powers of one smaller shared base | $4 = 2^2$ and $32 = 2^5$ |

---

## Part A: How to Convert Between Forms

Recall the fundamental link from Topic 1:

> $$a^x = N \iff x = \log_a N$$

Both statements say **the exact same thing** — the three numbers simply trade places. Here is the golden rule: **the base stays the base**, the exponent lands alone after the $=$ sign in log form, and the resulting number becomes the argument beside $\log$.

| Exponential | Logarithmic |
|---|---|
| $\text{base}^x = \text{number}$ | $\log_{\text{base}}(\text{number}) = x$ |

A quick way to read it: "$\text{base}$ raised to power **$x$** gives $\text{number}$" becomes "**$x$** is the $\log$ of $\text{number}$ to that same $\text{base}$."

### The Ladder: Climbing Step by Step

First, exponential form $\rightarrow$ logarithmic form:

**Step 1:** $11^2 = 121$ into log form.
- base $= 11$, exponent $= 2$, number $= 121$
- **$\log_{11} 121 = 2$**

**Step 2:** $10^7 = 10000000$ into log form.
- **$\log_{10} 10000000 = 7$**

**Step 3:** $12^2 = 144$ into log form.
- **$\log_{12} 144 = 2$**

**Step 4 (negative exponent):** $3^{-2} = \frac{1}{9}$ into log form.
- base $= 3$, exponent $= -2$, number $= \frac{1}{9}$
- **$\log_3 \left(\frac{1}{9}\right) = -2$**

**Step 5 (fractional exponent):** $16^{1/2} = 4$ into log form.
- base $= 16$, exponent $= \frac{1}{2}$, number $= 4$
- **$\log_{16} 4 = \frac{1}{2}$**

Now in reverse — logarithmic form $\rightarrow$ exponential form:

**Step 6:** $\log_{14} 196 = 2$ into exponential form.
- base $= 14$, value $= 2$, argument $= 196$
- **$14^2 = 196$**

**Step 7:** $\log_{25} 625 = 2$ into exponential form.
- **$25^2 = 625$**

**Step 8 (negative value):** $\log_{10} 0.1 = -1$ into exponential form.
- **$10^{-1} = 0.1$**

**Step 9 (fractional value):** $\log_9 3 = \frac{1}{2}$ into exponential form.
- **$9^{1/2} = 3$**

**Step 10:** $\log_{20} 400 = 2$ into exponential form.
- **$20^2 = 400$**

**Check (verify every step):**
- $11^2 = 121$ ✅ ($11 \times 11$)
- $10^7 = 10000000$ ✅ ($1$ followed by $7$ zeros)
- $12^2 = 144$ ✅
- $3^{-2} = \frac{1}{3^2} = \frac{1}{9}$ ✅
- $16^{1/2} = \sqrt{16} = 4$ ✅
- $14^2 = 196$ ✅
- $25^2 = 625$ ✅
- $10^{-1} = \frac{1}{10} = 0.1$ ✅
- $9^{1/2} = \sqrt{9} = 3$ ✅
- $20^2 = 400$ ✅

**Crucial reminder:** in logarithmic form, the base sits **low as a subscript**, and it is always the **exact same base** as in the exponential form. The argument never becomes the base. We will revisit this common trap in *Common Pitfalls to Avoid*.

---

## Part B: Three Kinds of Unknowns

Every logarithmic equation involves three parts: **base, argument, and value**. Any problem simply leaves one of those three blank. For all three types, the strategy is identical: **convert to exponential form first, then solve the familiar power equation.**

### 1. Value Is Missing: $\log_a N = ?$

**Method:** Read the logarithm as the question, "$a$ raised to what power equals $N$?" Write the exponential form: $a^? = N$.

**Example 1: $\log_3 729 = ?$**
- Let $\log_3 729 = x$. In exponential form: $3^x = 729$.
- Step through powers of $3$: $3^1 = 3$, $3^2 = 9$, $3^3 = 27$, $3^4 = 81$, $3^5 = 243$, $3^6 = 729$. So $x = 6$.
- **$\log_3 729 = 6$**

**Check:** $3^6 = 243 \times 3 = 729$ ✅

**Example 2: $\log_{13} 169 = ?$**
- $13^x = 169$. Since $13^1 = 13$ and $13^2 = 169$:
- **$\log_{13} 169 = 2$**

**Check:** $13 \times 13 = 169$ ✅

**Example 3: $\log_7 343 = ?$**
- $7^x = 343$. Since $7^1 = 7$, $7^2 = 49$, $7^3 = 343$:
- **$\log_7 343 = 3$**

**Check:** $7 \times 7 \times 7 = 343$ ✅

### 2. Argument Is Missing: $\log_a x = \text{value}$

**Method:** Convert to exponential form: $x = a^{\text{value}}$. Then evaluate the power.

**Example 4: $\log_{15} x = 2$**
- Exponential form: $x = 15^2$
- $x = 225$

**Check:** $\log_{15} 225 = 2$ because $15^2 = 225$ ✅

**Example 5: $\log_{10} x = -2$**
- Exponential form: $x = 10^{-2}$
- $x = \frac{1}{10^2} = \frac{1}{100} = \mathbf{0.01}$

**Check:** $10^{-2} = 0.01$, so $\log_{10} 0.01 = -2$ ✅

**Example 6: $\log_4 x = \frac{1}{2}$**
- Exponential form: $x = 4^{1/2}$
- $4^{1/2} = \sqrt{4} = \mathbf{2}$

**Check:** $4^{1/2} = 2$, so $\log_4 2 = \frac{1}{2}$ ✅

### 3. Base Is Missing: $\log_a N = \text{value}$

**Method:** Convert to exponential form: $a^{\text{value}} = N$. Ask which positive number ($a > 0$, $a \neq 1$, from Topic 1) raised to that power gives $N$.

**Example 7: $\log_a 512 = 3$**
- Exponential form: $a^3 = 512$
- What number multiplied by itself $3$ times gives $512$? $8 \times 8 \times 8 = 512$.
- **$a = 8$**

**Check:** $\log_8 512 = 3$ because $8^3 = 512$ ✅

**Example 8: $\log_a 81 = 4$**
- Exponential form: $a^4 = 81$
- $3 \times 3 \times 3 \times 3 = 81$
- **$a = 3$**

*(Note: $(-3)^4$ also equals $81$, yet a logarithm's base must be **positive**, so $-3$ is rejected.)*

**Check:** $3^4 = 81$ ✅

**Example 9: $\log_a 8 = -3$ (when the base turns out to be a fraction)**
- Exponential form: $a^{-3} = 8$
- Recall $a^{-3} = \frac{1}{a^3}$. So $\frac{1}{a^3} = 8$, which means $a^3 = \frac{1}{8}$.
- Since $\left(\frac{1}{2}\right)^3 = \frac{1}{8}$, **$a = \frac{1}{2}$**.

**Check:** $\left(\frac{1}{2}\right)^{-3} = 2^3 = 8$ ✅. And $\frac{1}{2}$ is positive and not equal to $1$, so it is a completely valid base.

---

## Part C: Negative and Fractional Answers

So far, most of our answers were neat counting numbers like $3$, $4$, or $5$. Yet a logarithm's value can also be **negative** or a **fraction**. Both follow directly from the rules of exponents you already know.

### Negative Answers: When Do They Appear?

**Example 10: $\log_2 \left(\frac{1}{8}\right) = ?$**
- $2^x = \frac{1}{8}$
- We know $2^3 = 8$, so $2^{-3} = \frac{1}{2^3} = \frac{1}{8}$.
- Therefore, $x = \mathbf{-3}$.
- **$\log_2 \left(\frac{1}{8}\right) = -3$**

**Check:** $2^{-3} = \frac{1}{8}$ ✅

**Example 11: $\log_{10} 0.001 = ?$**
- $10^x = 0.001 = \frac{1}{1000} = \frac{1}{10^3} = 10^{-3}$
- **$\log_{10} 0.001 = -3$**

**Check:** $10^{-3} = \frac{1}{1000} = 0.001$ ✅

**Example 12: $\log_5 \left(\frac{1}{25}\right) = ?$**
- $5^x = \frac{1}{25}$. Since $25 = 5^2$, $\frac{1}{25} = \frac{1}{5^2} = 5^{-2}$.
- **$\log_5 \left(\frac{1}{25}\right) = -2$**

**Check:** $5^{-2} = \frac{1}{25}$ ✅

### Why Does the Answer Come Out Negative?

When the base is **greater than $1$** (such as $2, 5, 10$), raising it to any **positive** power produces a result at least as big as the base: $2^1 = 2$, $2^2 = 4$, $2^3 = 8$. To produce a number **smaller than $1$**, you must flip the base into a reciprocal using a **negative** exponent: $2^{-1} = \frac{1}{2}$, $2^{-2} = \frac{1}{4}$, $2^{-3} = \frac{1}{8}$.

> **When the base $a > 1$:**
> - if the argument is **greater than $1$**, the log is **positive**
> - if the argument **equals $1$**, the log is **$0$** ($\log_a 1 = 0$ from Topic 1)
> - if the argument is **between $0$ and $1$**, the log is **negative**

This lets you predict the sign instantly without any calculation! For instance, in $\log_{10} 0.5$, since $0.5 < 1$, the answer must be negative. In $\log_2 10$, since $10 > 1$, the answer must be positive.

When the **base is between $0$ and $1$** (such as $\frac{1}{2}$), this sign rule flips! We saw that in Example 9: with base $\frac{1}{2}$, the log of $8$ is $-3$ because $\left(\frac{1}{2}\right)^{-3} = 8$.

**Remember:** the argument itself can never be negative or zero ($\log_2(-8)$ is undefined). Only the **value (answer)** of a logarithm can be negative.

---

## Part D: Fractional Answers

Now let us look at logarithms whose values are fractions. These use the rational exponents from [number-systems-part6.md](../number-systems/number-systems-part6.md): $a^{m/n}$ means "take the $n$-th root of $a$, then raise to the power $m$."

**Example 13: $\log_8 4 = \frac{2}{3}$**
- First check what $8^{2/3}$ equals.
- $8^{1/3} = \sqrt[3]{8} = 2$, and squaring it gives $2^2 = 4$.
- Thus $8^{2/3} = 4$.
- Therefore, **$\log_8 4 = \frac{2}{3}$**.

**Check:** $8^{2/3} = \left(8^{1/3}\right)^2 = 2^2 = 4$ ✅

**Example 14: $\log_{27} 3 = \frac{1}{3}$**
- $27^{1/3} = \sqrt[3]{27} = 3$.
- **$\log_{27} 3 = \frac{1}{3}$**

**Check:** $3^3 = 27$, so the cube root of $27$ is $3$ ✅

**Example 15: $\log_4 2 = \frac{1}{2}$**
- $4^{1/2} = \sqrt{4} = 2$.
- **$\log_4 2 = \frac{1}{2}$**

**Check:** $2^2 = 4$ ✅

**Example 16: $\log_8 2 = \frac{1}{3}$**
- $8^{1/3} = \sqrt[3]{8} = 2$.
- **$\log_8 2 = \frac{1}{3}$**

**Check:** $2^3 = 8$ ✅

**Spot the pattern?** Whenever the argument is a **root** of the base (for example, $2$ is the square root of $4$ and the cube root of $8$), the logarithm is a unit fraction: **$\frac{1}{2}$** for a square root, **$\frac{1}{3}$** for a cube root. It is the exact same rational-exponent rule dressed in logarithm notation.

---

## Part E: Rewriting Both Numbers with the Same Base

Sometimes a logarithm looks tricky at first glance: **$\log_4 32 = ?$** What power of $4$ gives $32$? Let us check: $4^1 = 4$, $4^2 = 16$, $4^3 = 64$... $32$ falls right in between $4^2$ and $4^3$! That tells us the answer is a fraction, and guessing it directly is tough.

Here is a terrific technique: **rewrite both the base and the argument as powers of the same small number (such as $2$).**

**Example 17: $\log_4 32 = ?$**

**Step 1:** Write both numbers as powers of $2$.
- $4 = 2^2$
- $32 = 2^5$ ($2, 4, 8, 16, 32$: five twos multiplied together)

**Step 2:** Let $\log_4 32 = x$. Exponential form: $4^x = 32$.

**Step 3:** Replace $4$ with $2^2$: $(2^2)^x = 2^5$.
- By the power-of-a-power rule, $(2^2)^x = 2^{2x}$.
- So $2^{2x} = 2^5$.

**Step 4:** Since the bases are identical, equate the exponents: $2x = 5 \implies x = \mathbf{\frac{5}{2}}$.

**$\log_4 32 = \frac{5}{2}$**

**Check:** $4^{5/2} = (\sqrt{4})^5 = 2^5 = 32$ ✅

**Example 18: $\log_8 4 = ?$ (re-solving Example 13 with this method)**
- $8 = 2^3$, $4 = 2^2$.
- $(2^3)^x = 2^2 \implies 2^{3x} = 2^2$.
- $3x = 2 \implies x = \mathbf{\frac{2}{3}}$ (matches Example 13!).

**Example 19: $\log_9 27 = ?$**
- This time, write both as powers of $3$: $9 = 3^2$, $27 = 3^3$.
- $(3^2)^x = 3^3 \implies 3^{2x} = 3^3$.
- $2x = 3 \implies x = \mathbf{\frac{3}{2}}$

**Check:** $9^{3/2} = (\sqrt{9})^3 = 3^3 = 27$ ✅

**Example 20: $\log_4 \left(\frac{1}{8}\right) = ?$ (combining negative and fractional exponents)**
- $4 = 2^2$, and $\frac{1}{8} = 2^{-3}$.
- $(2^2)^x = 2^{-3} \implies 2^{2x} = 2^{-3}$.
- $2x = -3 \implies x = \mathbf{-\frac{3}{2}}$

**Check:** $4^{-3/2} = \frac{1}{4^{3/2}} = \frac{1}{(\sqrt{4})^3} = \frac{1}{2^3} = \frac{1}{8}$ ✅

**When does this method work?** Whenever the base and argument are both powers of a common small integer ($2, 3, 5, \dots$). Rewrite both using that **same base**, then simply set the exponents equal!

---

## Escape Room: All Three Plates Unlocked

Elena opens her notebook. "Now we can solve all three plates cleanly."

### Plate 1: $5^? = 125$ (Exponent is missing — finding the **value**)

Liam already spotted this one, and now we write it in log form:
- $5^x = 125$ means $x = \log_5 125$.
- $5 \times 5 \times 5 = 125$, so **$x = 3$**.

**Check:** $5^3 = 125$ ✅

### Plate 2: $?^4 = 81$ (Base is missing — finding the **base**)

Elena says, "In log form, this plate says $\log_a 81 = 4$."
- Exponential form: $a^4 = 81$.
- $3 \times 3 \times 3 \times 3 = 81$, so **$a = 3$**.
- Even though $(-3)^4 = 81$ as well, a logarithm's base must be positive, so only **$3$** is valid.

**Check:** $3^4 = 81$ ✅

### Plate 3: $8^? = 4$ (Exponent is missing — the answer will be a fraction)

Earlier, Liam wondered how a power of $8$ could equal $4$ when $8^1 = 8$ is already bigger than $4$.

Elena explains, "Because the exponent is **less than $1$** — a fraction! And both $8$ and $4$ are powers of $2$, so we use the same-base trick."
- $8 = 2^3$, $4 = 2^2$.
- $(2^3)^x = 2^2 \implies 2^{3x} = 2^2$.
- $3x = 2 \implies \mathbf{x = \frac{2}{3}}$.

**Check:** $8^{2/3} = \left(8^{1/3}\right)^2 = 2^2 = 4$ ✅

### The Lock Opens

The three missing values are **$3$**, **$3$**, and **$\frac{2}{3}$**. Elena and Liam key them into the panel. With a crisp mechanical click, the heavy steel door swings open!

Liam laughs. "Now I finally see it: a logarithm is really just one question — **which exponent?**"

---

## Common Pitfalls to Avoid

1. **Mistake 1: Turning the argument into the base.**
   Problem: Write $2^5 = 32$ in logarithmic form.
   - Wrong: $\log_{32} 5 = 2$ (this wrongly turns $32$ into the base).
   - Correct: **$\log_2 32 = 5$**. The base stays $2$, just as in the exponential form.
   Quick check: convert your log statement back into exponential form. $\log_{32} 5 = 2$ would mean $32^2 = 5$, which is clearly false ($32^2 = 1024$). Always convert back mentally to verify!

2. **Mistake 2: Dropping the minus sign with negative exponents.**
   Problem: Find $\log_2 \left(\frac{1}{8}\right)$.
   - Wrong: "Since $2^3 = 8$, $\log_2 \left(\frac{1}{8}\right) = 3$." False — $2^3 = 8$, not $\frac{1}{8}$.
   - Correct: $\frac{1}{8} = 2^{-3}$, so **$\log_2 \left(\frac{1}{8}\right) = -3$**.
   Remember: for base $> 1$, an argument smaller than $1$ always gives a **negative** logarithm.

3. **Mistake 3: Thinking $10^{-2}$ means $-100$.**
   - Wrong: $10^{-2} = -100$.
   - Correct: $10^{-2} = \frac{1}{10^2} = \frac{1}{100} = \mathbf{0.01}$. A negative exponent means **reciprocal** ($1$ divided by the positive power), never a negative number!

4. **Mistake 4: Giving up instead of converting to the same base.**
   Problem: Find $\log_4 32$.
   - Wrong: "$4^2 = 16$ and $4^3 = 64$, so $32$ has no logarithm to base $4$." False — it has a fractional logarithm!
   - Correct: write both as powers of $2$: $4 = 2^2$, $32 = 2^5$, so $2x = 5 \implies \mathbf{x = \frac{5}{2}}$.

5. **Mistake 5: Accepting a negative base from an even power.**
   In $\log_a 81 = 4$, we get $a^4 = 81$. Even though $(-3)^4 = 81$, a logarithm's base must be **positive**, so only $a = 3$ is valid. Watch closely whenever the exponent is even ($2, 4, 6, \dots$).

---

## Quick Recap

- **$a^x = N \iff x = \log_a N$.** Both forms say the same thing, and the base stays the base.
- Build the habit: when you see a $\log$, switch to exponential form; when you see an exponent, you can switch to $\log$ form.
- **Three kinds of unknowns:**
  - **Value missing:** write $a^? = N$ and ask "what power?"
  - **Argument missing:** $\log_a x = k \implies x = a^k$.
  - **Base missing:** $\log_a N = k \implies a^k = N$, keeping $a > 0$ and $a \neq 1$.
- **Negative values:** occur when the base $> 1$ and the argument is between $0$ and $1$ (e.g., $\log_2\left(\frac{1}{8}\right) = -3$, $\log_{10} 0.001 = -3$, $\log_5\left(\frac{1}{25}\right) = -2$).
- **Fractional values:** come from rational exponents (e.g., $\log_8 4 = \frac{2}{3}$, $\log_{27} 3 = \frac{1}{3}$, $\log_4 2 = \frac{1}{2}$, $\log_8 2 = \frac{1}{3}$).
- **Same-base trick:** rewrite both the base and argument as powers of a shared small base (e.g., $4 = 2^2, 32 = 2^5$), then equate exponents ($\log_4 32 = \frac{5}{2}$).
- Avoid pitfalls: swapping base and argument, dropping minus signs, and forgetting the same-base trick.

---

## Practice Questions

1. Write in logarithmic form: (a) $8^2 = 64$ $\quad$ (b) $2^{-4} = \frac{1}{16}$ $\quad$ (c) $25^{1/2} = 5$ $\quad$ (d) $10^{-5} = 0.00001$.

2. Write in exponential form: (a) $\log_5 3125 = 5$ $\quad$ (b) $\log_{19} 361 = 2$ $\quad$ (c) $\log_2 \left(\frac{1}{32}\right) = -5$ $\quad$ (d) $\log_{125} 5 = \frac{1}{3}$.

3. Find the value of: (a) $\log_4 256$ $\quad$ (b) $\log_7 \left(\frac{1}{49}\right)$ $\quad$ (c) $\log_{10} 0.0001$.

4. Find $x$: (a) $\log_{17} x = 2$ $\quad$ (b) $\log_2 x = -2$ $\quad$ (c) $\log_9 x = \frac{1}{2}$.

5. Find the base $a$: (a) $\log_a 1331 = 3$ $\quad$ (b) $\log_a 16 = 4$ $\quad$ (c) $\log_a 9 = -2$.

6. Find the value by writing both numbers as powers of the same small number: (a) $\log_{25} 125$ $\quad$ (b) $\log_{16} 8$ $\quad$ (c) $\log_{32} 2$ $\quad$ (d) $\log_8 32$.

7. Without calculating, state whether each value is positive, negative, or zero, and give a one-line reason: (a) $\log_2 \left(\frac{1}{10}\right)$ $\quad$ (b) $\log_3 20$ $\quad$ (c) $\log_{13} 1$ $\quad$ (d) $\log_{10} 0.25$.

8. Elena and Liam encounter two more plates on the next door: "$27^? = 9$" and "$?^3 = \frac{1}{8}$". Find the missing number on each plate. (The base must be positive.)

9. Liam writes: "$5^2 = 25$, so $\log_{25} 5 = 2$." Find his mistake and write the correct statement. Then also find the true value of $\log_{25} 5$.

10. State True or False:
    (a) $\log_2 (-8) = -3$
    (b) $\log_2 0.5 = -1$
    (c) $\log_{49} 7 = \frac{1}{2}$
    (d) If $\log_{10} N$ is negative, then $N$ is less than $1$.

### Answers

1. (a) In $8^2 = 64$, base $= 8$, exponent $= 2$, number $= 64$, so **$\log_8 64 = 2$**.
   (b) **$\log_2 \left(\frac{1}{16}\right) = -4$**.
   (c) **$\log_{25} 5 = \frac{1}{2}$**.
   (d) **$\log_{10} 0.00001 = -5$**.
   Check: $8^2 = 64$ ✅, $2^{-4} = \frac{1}{16}$ ✅, $25^{1/2} = 5$ ✅, $10^{-5} = \frac{1}{100000} = 0.00001$ ✅

2. (a) **$5^5 = 3125$**
   (b) **$19^2 = 361$**
   (c) **$2^{-5} = \frac{1}{32}$**
   (d) **$125^{1/3} = 5$**
   Check: $5 \times 5 \times 5 \times 5 \times 5 = 3125$ ✅, $19 \times 19 = 361$ ✅, $\frac{1}{2^5} = \frac{1}{32}$ ✅, $\sqrt[3]{125} = 5$ ✅

3. (a) $4^x = 256$, and $4^4 = 256$, so **$4$**.
   (b) $7^x = \frac{1}{49} = \frac{1}{7^2} = 7^{-2}$, so **$-2$**.
   (c) $10^x = 0.0001 = \frac{1}{10^4} = 10^{-4}$, so **$-4$**.
   Check: $4^4 = 256$ ✅, $7^{-2} = \frac{1}{49}$ ✅, $10^{-4} = 0.0001$ ✅

4. (a) $x = 17^2 = \mathbf{289}$.
   (b) $x = 2^{-2} = \frac{1}{2^2} = \mathbf{\frac{1}{4}}$.
   (c) $x = 9^{1/2} = \sqrt{9} = \mathbf{3}$.
   Check: $\log_{17} 289 = 2$ ✅, $\log_2 \left(\frac{1}{4}\right) = -2$ ✅, $\log_9 3 = \frac{1}{2}$ ✅

5. (a) $a^3 = 1331$, and $11 \times 11 \times 11 = 1331$, so **$a = 11$**.
   (b) $a^4 = 16$, and $2 \times 2 \times 2 \times 2 = 16$, so **$a = 2$** ($-2$ is invalid since the base must be positive).
   (c) $a^{-2} = 9 \implies \frac{1}{a^2} = 9 \implies a^2 = \frac{1}{9}$, so **$a = \frac{1}{3}$**.
   Check: $11^3 = 1331$ ✅, $2^4 = 16$ ✅, $\left(\frac{1}{3}\right)^{-2} = 3^2 = 9$ ✅

6. (a) $25 = 5^2, 125 = 5^3 \implies 5^{2x} = 5^3 \implies 2x = 3 \implies \mathbf{x = \frac{3}{2}}$. Check: $25^{3/2} = (\sqrt{25})^3 = 125$ ✅
   (b) $16 = 2^4, 8 = 2^3 \implies 2^{4x} = 2^3 \implies 4x = 3 \implies \mathbf{x = \frac{3}{4}}$. Check: $16^{3/4} = (16^{1/4})^3 = 2^3 = 8$ ✅
   (c) $32 = 2^5, 2 = 2^1 \implies 2^{5x} = 2^1 \implies 5x = 1 \implies \mathbf{x = \frac{1}{5}}$. Check: $32^{1/5} = 2$ because $2^5 = 32$ ✅
   (d) $8 = 2^3, 32 = 2^5 \implies 2^{3x} = 2^5 \implies 3x = 5 \implies \mathbf{x = \frac{5}{3}}$. Check: $8^{5/3} = (8^{1/3})^5 = 2^5 = 32$ ✅

7. (a) **Negative:** base $2 > 1$ and argument $\frac{1}{10}$ is between $0$ and $1$.
   (b) **Positive:** base $3 > 1$ and argument $20 > 1$.
   (c) **Zero:** $\log_a 1 = 0$ for every valid base (Topic 1).
   (d) **Negative:** base $10 > 1$ and $0.25$ is between $0$ and $1$.

8. Plate "$27^? = 9$": $27 = 3^3$, $9 = 3^2$, so $3^{3x} = 3^2 \implies 3x = 2 \implies \mathbf{x = \frac{2}{3}}$. Check: $27^{2/3} = (\sqrt[3]{27})^2 = 3^2 = 9$ ✅
   Plate "$?^3 = \frac{1}{8}$": $a^3 = \frac{1}{8}$, and $\left(\frac{1}{2}\right)^3 = \frac{1}{8}$, so **$a = \frac{1}{2}$**. Check: $\left(\frac{1}{2}\right)^3 = \frac{1}{8}$ ✅

9. In $5^2 = 25$, Liam made $25$ the base instead of keeping $5$ as the base. The correct log form of $5^2 = 25$ is **$\log_5 25 = 2$**. Meanwhile, $\log_{25} 5$ is different: $25^x = 5 \implies x = \mathbf{\frac{1}{2}}$ (since $\sqrt{25} = 5$). Check: $25^{1/2} = 5$ ✅

10. (a) **False** ❌. A logarithm's argument cannot be negative. (Besides, $2^{-3} = \frac{1}{8}$, not $-8$.)
    (b) **True** ✅. $2^{-1} = \frac{1}{2} = 0.5$.
    (c) **True** ✅. $49^{1/2} = \sqrt{49} = 7$.
    (d) **True** ✅. Since the base $10 > 1$, a negative logarithm means the argument $N$ lies between $0$ and $1$ (so $N < 1$).

---

Now you can read the language of logarithms in both directions and solve for any missing piece — value, argument, or base. Whenever you hit a snag, rely on one habit: **rewrite the logarithm in exponential form.**

**What comes next?** So far we have handled one logarithm at a time. In Topic 3, we uncover a remarkable secret: **logarithms turn multiplication into addition.** Multiplying two numbers becomes as simple as adding their logarithms — and that is where logarithms get their true superpower.
