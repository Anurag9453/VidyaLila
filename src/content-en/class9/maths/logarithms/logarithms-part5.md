# Chapter: Logarithms (Part 5)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [logarithms-part4.md](logarithms-part4.md).** (The chapter begins in [logarithms.md](logarithms.md).)
> **Topics covered in this file:**
> 5. Where Logarithms Are Used in Real Life

---

# Topic 5: Where Logarithms Are Used in Real Life

In Topic 4, we put the laws of logarithms to work: from just $\log 2 = 0.3010$, $\log 3 = 0.4771$, and $\log 7 = 0.8451$, we computed $\log 6$, $\log 5$, $\log 12$, and many more without touching a calculator. (Sophia answered $\log 12 = 0.6020 + 0.4771 = 1.0791$ right on stage!) Now a natural question arises: what are logarithms actually *good for* outside the classroom?

In this final topic, we see **where logarithms power the real world**: solving a compound interest mystery we left unfinished earlier, counting the digits of colossal powers like $2^{64}$, and understanding why scientists measure earthquakes, sound intensity, and chemical acidity on logarithmic scales. Since this is the final topic, we finish with a complete chapter wrap-up.

Two quick prerequisites will help here: the compound interest formula $A = P\left(1 + \frac{r}{100}\right)^n$ (from [compound-interest-part3.md](../compound-interest/compound-interest-part3.md)) and scientific notation in powers of $10$ (from [exponents.md](../../../class8/maths/exponents/exponents.md)).

---

## Maya and the Magnitude $6$ Earthquake

The evening news is playing in the background. The news anchor announces: *"A magnitude $6$ earthquake struck offshore earlier this morning."*

Maya looks up from her homework and asks her uncle, Dr. Bennett — who happens to be a geologist — "Uncle, what does '$6$ magnitude' actually mean? How big is a $6$?"

Dr. Bennett smiles. "Great question, Maya. Earthquakes are measured on the **Richter scale**, and it is a **logarithmic scale**. That means every single step up by $1$ on the scale multiplies the ground shaking (the wave **amplitude**) by roughly **$10$ times**."

"Ten times?! Just from going up by one number?" Maya's eyes widen.

"Yes! A magnitude $6$ earthquake shakes the ground **$10$ times** more than a magnitude $5$. And compared to a magnitude $4$, it is **$100$ times** larger, because $10 \times 10 = 100$. So $6$ and $4$ look only $2$ units apart on paper, yet in reality the shaking jumps by a factor of $100$."

Maya pauses and grins. "Wait — that is the exact same exponent idea we learned in class, where multiplying turns into adding!" Dr. Bennett nods approvingly.

Let us unpack every piece of this real-world magic, step by step.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Inverse** | An operation that undoes another operation | A logarithm undoes raising a base to a power |
| **Number of digits** | How many digits appear when a number is written out in full | $1024$ has $4$ digits |
| **Logarithmic scale** | A measurement scale where each equal step multiplies the real quantity by a fixed factor (often $10$) | The Richter scale |
| **Magnitude** | The Richter number measuring an earthquake's strength | Magnitude $6$ |
| **Amplitude** | The size/height of ground shaking waves | Magnitude $6$ amplitude is $10\times$ magnitude $5$ |
| **Decibel ($\text{dB}$)** | A logarithmic unit used to measure sound intensity | $70\text{ dB}$ |
| **$\text{pH}$** | A logarithmic number measuring how acidic or basic a solution is | Lemon juice has $\text{pH} \approx 2$ |

---

## Part A: Finding $n$ in Compound Interest

In [compound-interest-part3.md](../compound-interest/compound-interest-part3.md), we ran into a puzzle: at $10\%$ compound interest per year, how many years does it take for money to double? Back then, we had to test powers by trial and error: $(1.1)^7 \approx 1.95$ and $(1.1)^8 \approx 2.14$, which told us the answer lay somewhere between $7$ and $8$ years — and we noted that logarithms would give the exact answer. Now let us unlock it in one clean step!

### Idea

Whenever the unknown $n$ sits trapped **in the exponent** — like $n$ in $(1.1)^n$ — ordinary algebra cannot pull it down. Yet the **power law** (Topic 3) says $\log(a^m) = m \log a$. Taking the logarithm of both sides **brings the exponent down to ground level** as a simple multiplier, and then all you do is divide!

### Example 1: When Will Money Double at $10\%$?

Doubling your money means $A = 2P$, so:

$$(1.1)^n = 2$$

Take the common logarithm ($\log_{10}$) of both sides:

$$n \times \log 1.1 = \log 2$$

$$n = \frac{\log 2}{\log 1.1}$$

We already know $\log 2 = 0.3010$. From a log table or calculator, $\log 1.1 \approx 0.0414$ (rounded to $4$ decimal places, since $1.1 = \frac{11}{10}$ and $11$ cannot be built from $2, 3, 7$).

$$n = \frac{0.3010}{0.0414} \approx \mathbf{7.27\text{ years}} \quad (\text{rounded to } 2\text{ decimal places})$$

**Check:** $7.27 \times 0.0414 = 0.30098 \approx 0.3010$ ✅. Compare with our earlier trial estimates: $7$ years gave $1.95$ (just short of $2$) and $8$ years gave $2.14$ (past $2$), so $7.27$ years fits right between $7$ and $8$ ✅.

### Example 2: When Will Money Triple at $10\%$?

$$(1.1)^n = 3$$

$$n \times \log 1.1 = \log 3$$

$$n = \frac{0.4771}{0.0414} \approx \mathbf{11.52\text{ years}} \quad (\text{about } \mathbf{11.5\text{ years}})$$

**Check:** $(1.1)^{11} \approx 2.85$ and $(1.1)^{12} \approx 3.14$. Tripling falls between $11$ and $12$ years, right around $11.5$ ✅.

### Example 3: When Will Money Double at $20\%$?

Here we need $\log 1.2$. Using Topic 4's method: $1.2 = \frac{12}{10}$, so $\log 1.2 = \log 12 - \log 10$. From Topic 4, $\log 12 = 2\log 2 + \log 3 = 0.6020 + 0.4771 = 1.0791$. Therefore, $\log 1.2 = 1.0791 - 1 = \mathbf{0.0791}$.

$$(1.2)^n = 2 \implies n = \frac{0.3010}{0.0791} \approx \mathbf{3.81\text{ years}}$$

*(Rounded to $2$ decimal places; using unrounded logarithms gives $3.80$, a tiny rounding difference.)*

**Check:** $(1.2)^3 = 1.728$ and $(1.2)^4 = 2.0736$. Doubling happens between $3$ and $4$ years, close to $4$ — and $3.81$ sits right there ✅.

---

## Part B: How Many Digits Does a Huge Number Have?

Suppose someone asks how many digits are in $2^{64}$, without multiplying it out by hand. How can logarithms tell you immediately?

### Idea

Look at the common ($\log_{10}$) logarithms of everyday numbers:
- Numbers from $1$ to $9$ ($1$ digit) have logs between $0$ and $1$ ($\log 1 = 0$, $\log 10 = 1$).
- Numbers from $10$ to $99$ ($2$ digits) have logs between $1$ and $2$.
- Numbers from $100$ to $999$ ($3$ digits) have logs between $2$ and $3$.

Notice that the **integer part** of $\log N$ (the whole number before the decimal point) is always **one less than the number of digits**! That gives a remarkably neat rule:

> **Number of digits in $N = (\text{integer part of } \log_{10} N) + 1$**

This always uses **base $10$**, because our standard base-$10$ number system adds a digit every time we multiply by $10$.

### Example 4: Testing on Smaller Numbers

- $2^{10} = 1024$. $\log(2^{10}) = 10 \times 0.3010 = 3.010$. Integer part is $3$, so digits $= 3 + 1 = \mathbf{4}$. Check: $1024$ has $4$ digits ✅
- $2^{20} = 1{,}048{,}576$. $\log(2^{20}) = 20 \times 0.3010 = 6.020$. Integer part is $6$, so digits $= \mathbf{7}$. Check: $1{,}048{,}576$ has $7$ digits ✅

### Example 5: How Many Digits Are in $2^{64}$?

$$\log(2^{64}) = 64 \times \log 2 = 64 \times 0.3010 = 19.264$$

The integer part is $19$, so the number of digits $= 19 + 1 = \mathbf{20}$.

**Check:** $2^{64} = 18{,}446{,}744{,}073{,}709{,}551{,}616$, which indeed has $20$ digits ✅

### Example 6: How Many Digits Are in $3^{50}$?

$$\log(3^{50}) = 50 \times 0.4771 = 23.855$$

The integer part is $23$, so the number of digits $= \mathbf{24}$.

**Check:** $3^{50} \approx 7.18 \times 10^{23}$, and $10^{23}$ multiplied by a single leading digit produces $24$ digits in total ✅

### Example 7: How Many Digits Are in $5^{30}$?

First we need $\log 5$. Since $5 = \frac{10}{2}$, $\log 5 = 1 - 0.3010 = 0.6990$ (Topic 4).

$$\log(5^{30}) = 30 \times 0.6990 = 20.970$$

The integer part is $20$, so the number of digits $= \mathbf{21}$.

**Check:** $5^{30} = 931{,}322{,}574{,}615{,}478{,}515{,}625$, which has $21$ digits ✅ *(Careful: do not round $20.970$ up to $21$ before adding $1$! Always take the integer part before the decimal point — which is $20$ — and then add $1$ to get $21$.)*

---

## Part C: Why Use a Logarithmic Scale? Shrinking Huge Ranges into Small Numbers

Earthquake strengths span an enormous range — from tiny tremors that only instruments notice, up to catastrophic quakes millions of times stronger. Writing raw wave amplitudes would mean juggling numbers from $1$ up to $10{,}000{,}000$ or more. On a logarithmic scale, that gigantic range shrinks down to friendly, manageable numbers like **$1$ to $8$**.

### The Richter Scale (Maya's Story)

- Every **whole-number step** up on the Richter scale means roughly **$10\times$ larger ground-shaking amplitude**.
- Magnitude $6$ vs. magnitude $5$: $10\times$ larger amplitude.
- Magnitude $6$ vs. magnitude $4$: $10 \times 10 = \mathbf{100\times}$ larger amplitude.
- Magnitude $8$ vs. magnitude $5$: $3$ full steps apart, so $10^3 = \mathbf{1000\times}$ larger amplitude.

*(One extra nuance worth noting carefully: the total **energy** released by an earthquake jumps even faster — by roughly **$31.6\times$** per full step, because $10^{1.5} \approx 31.6$. The exact seismological formulas have extra technical details and these numbers are approximations, yet the central takeaway is clear: stepping up by $1$ on a logarithmic scale represents an enormous physical leap.)*

### Decibels (Sound) and pH (Acidity): A Quick Look

- **Decibels ($\text{dB}$):** Every **$+10\text{ dB}$** increase means the sound intensity is **$10$ times greater**. A $60\text{ dB}$ sound has $10\times$ the intensity of a $50\text{ dB}$ sound, and a $70\text{ dB}$ sound is $100\times$ more intense than $50\text{ dB}$.
- **$\text{pH}$ scale:** In chemistry, each $1$-unit step on the $\text{pH}$ scale corresponds roughly to a **$10$-fold change** in acidity. A solution with $\text{pH } 3$ is about $10$ times more acidic than one with $\text{pH } 4$.

### Why Do All These Scales Use $\log_{10}$?

Because $\log_{10}$ has a superpower: **multiplying by $10$ simply adds $+1$ to the logarithm** (by the product law, $\log(10x) = \log 10 + \log x = 1 + \log x$). That turns huge multiplicative jumps into tiny, easy-to-read $+1$ steps!

---

## Part D: Logarithms and Powers Are Inverses of Each Other

Think about squaring and square roots: $5^2 = 25$, and $\sqrt{25} = 5$. The square root **undoes** squaring. In the exact same way, **a logarithm undoes an exponential**, and **an exponential undoes a logarithm**. You already saw the first half — $\log_a(a^n) = n$ — in Result 3 of Topic 3; now look at both directions side by side:

- $\log_2(2^5) = 5$ (because $2$ must be raised to power $5$ to make $2^5$)
- $2^{\log_2 32} = 32$ (since $\log_2 32 = 5$, and $2^5 = 32$)

Start with a power and take its $\log$ $\rightarrow$ you get the exponent back. Start with a $\log$ and put it in the exponent $\rightarrow$ you get the number back.

In general: **$\log_a(a^x) = x$** and **$a^{\log_a x} = x$** (for $x > 0$).

### Example 8: Using the Inverse Property

Find $\log_5(5^6)$ and $10^{\log 50}$.

- $\log_5(5^6) = \mathbf{6}$, because $\log_5$ undoes raising $5$ to a power. Check: by the power law, $6 \log_5 5 = 6 \times 1 = 6$ ✅
- $10^{\log 50} = \mathbf{50}$, because $10^{\text{power}}$ and $\log_{10}$ undo each other. Check: $\log 50 \approx 1.699$, and $10^{1.699} \approx 50$ ✅

---

## Part E: A Brief History

Before electronic calculators existed, multiplying huge numbers by hand was slow and exhausting. Logarithms turned multiplication into addition via the product law. Following John Napier's breakthrough (which Dr. Bennett shared with Leo in Topic 3), mathematicians published printed books of **logarithm tables**: to multiply two large numbers, you looked up their logs, added them together, and looked up the result back in the table. Engineers also built **slide rules** based on the exact same principle. For centuries before electronic calculators, logarithms were the indispensable workhorse of science and engineering.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Rounding $\log 1.1$ too aggressively.**
   In $n = \frac{0.3010}{\log 1.1}$, rounding $\log 1.1$ to $0.04$ gives $n = \frac{0.3010}{0.04} = 7.525 \approx 7.5$. Using $0.041$ gives $7.34$. Using the full $4$-decimal value $0.0414$ gives $7.27$. Rounding early in a division causes a surprisingly large error — keep all given decimals until the very last step, and round only at the end!

2. **Mistake 2: Forgetting to add "$+1$" when counting digits.**
   Since $\log(2^{10}) = 3.010$, taking the integer part $3$ as the digit count gives $3$ digits — yet $1024$ clearly has **$4$** digits! Always compute $(\text{integer part}) + 1 = 3 + 1 = 4$.

3. **Mistake 3: Using the wrong base when counting digits.**
   Digit counting always uses **base $10$ ($\log_{10}$)**. Using any other base (such as $\log_2$) will not give the number of base-$10$ digits.

4. **Mistake 4: Thinking a $1$-unit jump on the Richter scale is "a little bit bigger."**
   Magnitude $6$ vs. magnitude $5$ looks like "just $1$ more," yet the ground-shaking amplitude is **$10$ times** larger! And magnitude $6$ vs. magnitude $4$ is **$100$ times** larger, not twice as large.

---

## Quick Recap

- When an unknown $n$ sits in an exponent (like $(1.1)^n = 2$), take **$\log$** of both sides: $n\log 1.1 = \log 2 \implies n = \frac{\log 2}{\log 1.1} \approx \mathbf{7.27\text{ years}}$.
- At $10\%$ compound interest, money triples in about **$11.5\text{ years}$** ($\frac{\log 3}{\log 1.1}$).
- **Number of digits in $N = (\text{integer part of } \log_{10} N) + 1$.** For example, $2^{64}$ has $20$ digits, and $3^{50}$ has $24$ digits.
- Logarithmic scales compress huge ranges into small numbers: each step on the Richter scale multiplies amplitude by roughly **$10\times$** (and energy by about $31.6\times$).
- Decibels ($+10\text{ dB} = 10\times$ intensity) and $\text{pH}$ ($1$ unit $= 10\times$ acidity, roughly) also run on $\log_{10}$.
- In $\log_{10}$, multiplying a number by $10$ simply **adds $+1$** to its logarithm.
- Logarithms and exponentials are **inverses**: $\log_a(a^x) = x$ and $a^{\log_a x} = x$.
- For centuries before calculators, log tables and slide rules used these ideas to turn hard multiplication into easy addition.

---

## Practice Questions

1. At $20\%$ compound interest per year, in how many years will money triple? Use $\log 3 = 0.4771$ and $\log 1.2 = 0.0791$ (found from $\log 12 = 1.0791$). Give your answer to $2$ decimal places.

2. How many digits does $2^{40}$ have? Use $\log 2 = 0.3010$.

3. How many digits does $3^{20}$ have? Use $\log 3 = 0.4771$.

4. How many digits does $5^{20}$ have? *(Hint: $\log 5 = 1 - \log 2$.)*

5. How many times larger is the ground shaking (amplitude) in a magnitude $7$ earthquake than in a magnitude $4$ earthquake?

6. Find the values of: (a) $\log_2(2^9)$ $\quad$ (b) $3^{\log_3 7}$ $\quad$ (c) $10^{\log 8}$.

7. State True or False, with a reason:
   (a) A magnitude $7$ earthquake shakes the ground only a little more than a magnitude $6$ earthquake.
   (b) The number of digits of $N$ is the integer part of $\log N$.
   (c) $1000$ has $4$ digits, and $\log 1000 = 3$.
   (d) A sound of $40\text{ dB}$ has $10$ times the intensity of a sound of $30\text{ dB}$.

8. A student uses $\log 1.1 = 0.04$ to find the doubling time at $10\%$ and gets $7.525$ years. Using $0.0414$ instead, find the correct answer and explain the student's error.

9. A sound of $30\text{ dB}$ is compared with a sound of $10\text{ dB}$. How many times greater is its intensity?

10. The base-$10$ logarithm of a number $N$ is $5.7$. How many digits does $N$ have? Roughly what is $N$? *(Use $\log 5 = 0.6990$.)*

### Answers

1. $(1.2)^n = 3 \implies n \times 0.0791 = 0.4771 \implies n = \frac{0.4771}{0.0791} \approx \mathbf{6.03\text{ years}}$.
   Check: $(1.2)^6 \approx 2.986 \approx 3$ ✅

2. $\log(2^{40}) = 40 \times 0.3010 = 12.040$. Integer part is $12$, so digits $= \mathbf{13}$.
   Check: $2^{40} = 1{,}099{,}511{,}627{,}776$, which has $13$ digits ✅

3. $\log(3^{20}) = 20 \times 0.4771 = 9.542$. Integer part is $9$, so digits $= \mathbf{10}$.
   Check: $3^{20} = 3{,}486{,}784{,}401$, which has $10$ digits ✅

4. $\log 5 = 1 - 0.3010 = 0.6990$. $\log(5^{20}) = 20 \times 0.6990 = 13.980$. Integer part is $13$, so digits $= \mathbf{14}$.
   Check: $5^{20} = 95{,}367{,}431{,}640{,}625$, which has $14$ digits ✅

5. Between magnitude $4$ and magnitude $7$ there are $3$ steps, so the amplitude is $10^3 = \mathbf{1000\text{ times}}$ larger.
   Check: $4 \rightarrow 5 \rightarrow 6 \rightarrow 7$ multiplies by $10$ at each step: $10 \times 10 \times 10 = 1000$ ✅

6. (a) $\log_2(2^9) = \mathbf{9}$. Check: $2^9 = 512$, and raising $2$ to power $9$ gives $2^9$ ✅
   (b) $3^{\log_3 7} = \mathbf{7}$ (inverse property).
   (c) $10^{\log 8} = \mathbf{8}$ ($10^{\text{power}}$ and $\log_{10}$ undo each other).

7. (a) **False** ❌. A $1$-unit step means $10$ times the shaking amplitude, not "a little more."
   (b) **False** ❌. Number of digits $= (\text{integer part of } \log N) + 1$.
   (c) **True** ✅. $\log 1000 = 3$, so digits $= 3 + 1 = 4$, and $1000$ indeed has $4$ digits.
   (d) **True** ✅. Every $+10\text{ dB}$ multiplies sound intensity by $10$.

8. Correct value: $n = \frac{0.3010}{0.0414} \approx \mathbf{7.27\text{ years}}$. The student rounded $\log 1.1 = 0.0414$ down to $0.04$ too early, inflating the answer to $7.525$ — quite far off from $7.27$.
   Check: $7.27 \times 0.0414 = 0.30098 \approx 0.3010$ ✅

9. From $10\text{ dB}$ to $30\text{ dB}$ is a jump of $20\text{ dB}$, which is $2$ steps of $10\text{ dB}$. Intensity is $10 \times 10 = \mathbf{100\text{ times}}$ greater.

10. Integer part is $5$, so $N$ has $5 + 1 = \mathbf{6}$ digits. The decimal part $0.7 \approx \log 5 = 0.6990$, so $N \approx 5 \times 10^5 = \mathbf{\text{about } 500{,}000}$.
    Check: $\log 500{,}000 = \log 5 + \log 100{,}000 = 0.6990 + 5 = 5.699 \approx 5.7$ ✅

---

Now you know that a logarithm is far more than a textbook symbol: it turns giant multiplicative changes into simple additions and subtractions, powering everything from compound interest to earthquake scales. You have got this!

---

# Chapter Wrap-up: Logarithms

| Topic | What You Learned | Key Takeaway |
|---|---|---|
| 1. Meaning of a Logarithm and $\log_{10}$ | A logarithm asks "what power of the base gives this number?"; common logarithms use base $10$ | $\log_2 8 = 3$ means $2^3 = 8$ |
| 2. Converting Forms and Finding Unknowns | Converting between exponential and log forms; solving for missing value, argument, or base; negative and fractional logs | Both forms express the exact same fact |
| 3. Laws of Logarithms | Product, quotient, and power laws (with proofs and special results) | Multiplication becomes addition, division becomes subtraction, powers become multipliers |
| 4. Applying the Laws | Computing new logs from $\log 2, \log 3, \log 7$; simplifying without tables; solving log equations (and rejecting invalid roots); proving identities | A few known logs unlock dozens more |
| 5. Real-Life Applications | Finding $n$ in compound interest, counting digits, logarithmic scales (Richter, decibels, $\text{pH}$), inverse property | Take $\log$ to bring an unknown exponent down |

### All Log Rules

| Rule / Concept | Formula |
|---|---|
| Definition | $\log_a x = y \iff a^y = x$ |
| Domain conditions | $a > 0$, $a \neq 1$, and $x > 0$ |
| Common logarithm | $\log x$ (no base written) means $\log_{10} x$ |
| Log of $1$ | $\log_a 1 = 0$ |
| Log of the base | $\log_a a = 1$ |
| Product law | $\log_a(xy) = \log_a x + \log_a y$ |
| Quotient law | $\log_a\left(\frac{x}{y}\right) = \log_a x - \log_a y$ |
| Power law | $\log_a(x^m) = m \log_a x$ |
| Inverse property | $\log_a(a^x) = x$ and $a^{\log_a x} = x$ |
| Counting digits | Digits in $N = (\text{integer part of } \log_{10} N) + 1$ |
| Common warnings | $\log(x + y) \neq \log x + \log y$; $(\log x)^n \neq n\log x$; $\frac{\log x}{\log y} \neq \log\left(\frac{x}{y}\right)$; no log of $0$ or negative numbers |

---

A logarithm is one simple, unified idea — the inverse of raising to a power — and from that single idea we unlock compound interest, digit counting, and the logarithmic scales that measure the world around us.
