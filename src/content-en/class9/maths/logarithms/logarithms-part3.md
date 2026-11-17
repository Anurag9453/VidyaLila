# Chapter: Logarithms (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [logarithms-part2.md](logarithms-part2.md)** (and the chapter begins in [logarithms.md](logarithms.md)).
> **Prior knowledge:** laws of exponents, covered in [number-systems-part6.md](../number-systems/number-systems-part6.md).
> **Topics covered in this file:**
> 3. Laws of Logarithms

---

# Topic 3: Laws of Logarithms

In Topic 2, we worked extensively with single logarithms: converting from exponential form to logarithmic form and back, finding missing values, arguments, or bases, and even evaluating fractional and negative logarithms like $\log_2\left(\frac{1}{8}\right) = -3$. Elena and Liam used these exact skills to unlock the escape room plates ($3$, $3$, and $\frac{2}{3}$).

Now comes the next question: **what if two or three logarithms appear together in the same expression?** Can we combine them, add them, or subtract them? In this topic, we discover the laws that make that possible — and those laws are what give logarithms their real power.

---

## Dr. Bennett, Leo, and John Napier's Story

Leo was staring at a huge multiplication problem in his homework and groaned aloud. "Dr. Bennett, who wants to multiply giant numbers like this by hand?"

Dr. Bennett smiled. "Leo, let me tell you a true story. Around the year **1614**, in Scotland, there lived a mathematician named **John Napier**. Back then, there were no electronic calculators or computers. Astronomers calculating the orbits of stars and planets had to multiply enormous multi-digit numbers by hand — a single calculation could take hours, and one tiny slip ruined everything."

"What did they do?" Leo asked.

"Napier had a brilliant idea. He asked himself: **what if multiplication could be turned into addition?** Addition is far quicker and easier than long multiplication! His trick was **logarithms**. Instead of multiplying two huge numbers directly, you look up their logarithms, **add** them together, and then convert back to the final number. Historians say this invention literally doubled the working life of astronomers by saving them so much time."

Leo's eyes lit up. "Wait — how can turning multiplication into addition actually be mathematically true?"

"Great question," said Dr. Bennett. "The proof hides right inside the laws of exponents. Let us derive all three laws ourselves."

In this topic, we will prove and use the three laws behind Napier's brilliant shortcut.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Product law** | Log of a product equals the sum of the logs | $\log_2(4 \times 8) = \log_2 4 + \log_2 8$ |
| **Quotient law** | Log of a quotient equals the difference of the logs | $\log_2(32 \div 4) = \log_2 32 - \log_2 4$ |
| **Power law** | Log of a power equals the exponent times the log | $\log_2(8^2) = 2 \log_2 8$ |
| **Expanding** | Breaking one combined logarithm into a sum/difference of simpler logs | $\log(a \times b) \rightarrow \log a + \log b$ |
| **Condensing** | Combining several logarithms into a single logarithm | $\log 4 + \log 25 \rightarrow \log 100$ |

---

## Part A: The Three Laws, with Proofs

First, bring back the three laws of exponents from Number Systems: $a^m \times a^n = a^{m+n}$, $a^m \div a^n = a^{m-n}$, and $(a^m)^n = a^{mn}$. We do not need to re-prove those — we will put them straight to work. **One vital rule:** all three logarithm laws only work when every logarithm shares the **exact same base** ($a$).

### Law 1: Product Law

> $$\log_a(m \times n) = \log_a m + \log_a n$$

**Proof:** Let $\log_a m = x$ and $\log_a n = y$. By the definition of a logarithm:
- $m = a^x$
- $n = a^y$

Multiply them together: $m \times n = a^x \times a^y = a^{x+y}$ (using the first law of exponents). Now rewrite $m \times n = a^{x+y}$ back in logarithmic form:

$$\log_a(m \times n) = x + y = \log_a m + \log_a n \quad \blacksquare$$

**Check:** $\log_2(4 \times 8) = \log_2 32 = 5$ (since $2^5 = 32$). On the other hand, $\log_2 4 + \log_2 8 = 2 + 3 = 5$ ✅

That is Napier's famous trick in one line: multiplication inside becomes addition outside!

### Law 2: Quotient Law

> $$\log_a(m \div n) = \log_a m - \log_a n$$

**Proof:** Again, let $\log_a m = x$ and $\log_a n = y$, so $m = a^x$ and $n = a^y$. Divide them: $m \div n = a^x \div a^y = a^{x-y}$ (using the second law of exponents). Rewrite in logarithmic form:

$$\log_a(m \div n) = x - y = \log_a m - \log_a n \quad \blacksquare$$

**Check:** $\log_2(32 \div 4) = \log_2 8 = 3$. Meanwhile, $\log_2 32 - \log_2 4 = 5 - 2 = 3$ ✅

### Law 3: Power Law

> $$\log_a(m^n) = n \times \log_a m$$

**Proof:** Let $\log_a m = x$, so $m = a^x$. Raise both sides to the power $n$: $m^n = (a^x)^n = a^{nx}$ (third law of exponents). Rewrite in logarithmic form:

$$\log_a(m^n) = nx = n \times \log_a m \quad \blacksquare$$

**Check:** Since $64 = 8^2$, look at $\log_2 64 = \log_2(8^2)$. Directly: $\log_2 64 = 6$. By the power law: $2 \times \log_2 8 = 2 \times 3 = 6$ ✅

---

## Part B: Three Special Results

### Result 1: $\log_a \left(\frac{1}{n}\right) = -\log_a n$

Set $m = 1$ in the quotient law: $\log_a\left(\frac{1}{n}\right) = \log_a 1 - \log_a n = 0 - \log_a n = -\log_a n$ (since $\log_a 1 = 0$ from Topic 1).

**Check:** $\log_2\left(\frac{1}{8}\right) = -3$, and $-\log_2 8 = -3$ ✅ (this matches our Topic 2 answer, now confirmed directly by a law!).

### Result 2: $\log_a \sqrt[n]{m} = \frac{1}{n} \log_a m$

A root is simply a fractional exponent: $\sqrt[n]{m} = m^{1/n}$. Apply the power law with exponent $\frac{1}{n}$ to get $\log_a \sqrt[n]{m} = \frac{1}{n} \log_a m$.

**Check:** $\log_2 \sqrt[3]{4}$. By the rule: $\frac{1}{3} \times \log_2 4 = \frac{1}{3} \times 2 = \mathbf{\frac{2}{3}}$. Direct check: $\sqrt[3]{4} = 2^{2/3}$, since $(2^{2/3})^3 = 2^2 = 4$, so $\log_2 \sqrt[3]{4} = \frac{2}{3}$ ✅

### Result 3: $\log_a a^n = n$

By the power law: $\log_a a^n = n \times \log_a a = n \times 1 = n$ (since $\log_a a = 1$).

**Check:** $\log_7(7^4) = 4$ ✅ (ask "$7$ raised to what power gives $7^4$?" — the answer is clearly $4$!).

---

## Part C: Solved Examples

### Example 1: Evaluating with the Product Law

Find $\log_2 16 + \log_2 32$.

$$\log_2 16 + \log_2 32 = \log_2(16 \times 32) = \log_2 512 = \mathbf{9} \quad (\text{since } 2^9 = 512)$$

**Check:** evaluating separately gives $\log_2 16 = 4$ and $\log_2 32 = 5$, and $4 + 5 = 9$ ✅

### Example 2: Evaluating with the Quotient Law

Find $\log_3 81 - \log_3 27$.

$$\log_3 81 - \log_3 27 = \log_3(81 \div 27) = \log_3 3 = \mathbf{1}$$

**Check:** $4 - 3 = 1$ ✅

### Example 3: Evaluating with the Power Law

Find $\log_2(4^5)$.

$$\log_2(4^5) = 5 \times \log_2 4 = 5 \times 2 = \mathbf{10}$$

**Check:** $4^5 = (2^2)^5 = 2^{10}$, so $\log_2(2^{10}) = 10$ ✅

### Example 4: Logarithm of a Root

Find $\log_3 \sqrt{27}$.

Since $\sqrt{27} = 27^{1/2}$:

$$\log_3 \sqrt{27} = \frac{1}{2} \log_3 27 = \frac{1}{2} \times 3 = \mathbf{\frac{3}{2}}$$

**Check:** $3^{3/2} = \sqrt{3^3} = \sqrt{27}$ ✅

### Example 5: Expanding a Logarithm

Expand $\log\left(\frac{a^3 b^2}{c}\right)$.

First apply the quotient law: $\log(a^3 b^2) - \log c$.
Next apply the product law: $\log(a^3) + \log(b^2) - \log c$.
Finally apply the power law: **$3\log a + 2\log b - \log c$**.

**Numerical check (base $2$, $a = 2, b = 4, c = 8$):** $\frac{a^3 b^2}{c} = \frac{8 \times 16}{8} = 16$, so $\log_2 16 = 4$. Expanded form: $3\log_2 2 + 2\log_2 4 - \log_2 8 = 3(1) + 2(2) - 3 = 3 + 4 - 3 = 4$ ✅

### Example 6: Condensing Logarithms

Write $2\log 5 + \log 4 - \log 10$ as a single logarithm (base $10$).

- $2\log 5 = \log(5^2) = \log 25$ (power law in reverse)
- $\log 25 + \log 4 = \log(25 \times 4) = \log 100$ (product law in reverse)
- $\log 100 - \log 10 = \log(100 \div 10) = \mathbf{\log 10}$

**Check:** $\log 10 = 1$ (in base $10$). Combining directly: $\log\left(\frac{25 \times 4}{10}\right) = \log 10 = 1$ ✅

### Example 7: Condensing in Base $2$

Simplify $\log_2 12 + \log_2 6 - \log_2 9$.

$$= \log_2\left(\frac{12 \times 6}{9}\right) = \log_2\left(\frac{72}{9}\right) = \log_2 8 = \mathbf{3}$$

**Check:** $2^3 = 8$ ✅

### Example 8: A Neat Shortcut

Find $\log_6 4 + \log_6 9$.

$$= \log_6(4 \times 9) = \log_6 36 = \mathbf{2} \quad (\text{since } 6^2 = 36)$$

**Check:** $6^2 = 36$ ✅ *(Neither $\log_6 4$ nor $\log_6 9$ is a whole number on its own, yet multiplying $4 \times 9$ creates $36$, an exact power of $6$!)*

---

## Part D: Crucial Warnings

Dr. Bennett gave Leo one unmistakable warning: "These laws work for multiplication, division, and powers inside a logarithm. **There is NO law for addition or subtraction inside a logarithm.**"

### Warning 1: $\log(m + n) \neq \log m + \log n$

Test with base $10$, $m = 10$, $n = 90$:
- $\log_{10}(10 + 90) = \log_{10} 100 = \mathbf{2}$
- $\log_{10} 10 + \log_{10} 90 = 1 + 1.9542 = \mathbf{2.9542}$ ($\log 90 \approx 1.9542$ rounded to $4$ decimal places)

They are not equal! Another quick check in base $2$: $\log_2(4 + 4) = \log_2 8 = 3$, whereas $\log_2 4 + \log_2 4 = 2 + 2 = 4$. Different again!

### Warning 2: $(\log m)^n \neq n \log m$

Test in base $2$: $(\log_2 8)^2 = 3^2 = \mathbf{9}$. Yet $2 \times \log_2 8 = 2 \times 3 = \mathbf{6}$. They do not match. In the power law, the exponent must be **inside** the logarithm on $m$ ($\log_a(m^n)$), not outside on the whole log.

### Warning 3: $\frac{\log m}{\log n} \neq \log\left(\frac{m}{n}\right)$

Test in base $2$: $\frac{\log_2 64}{\log_2 8} = \frac{6}{3} = \mathbf{2}$. Yet $\log_2\left(\frac{64}{8}\right) = \log_2 8 = \mathbf{3}$. They are different. The quotient law turns division inside one log into **subtraction** of two logs, never division of two logs.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Splitting $\log(m + n)$ into $\log m + \log n$.**
   See Warning 1 above: $\log(10 + 90) = 2$, whereas $\log 10 + \log 90 \approx 2.9542$. Addition inside a logarithm cannot be split.

2. **Mistake 2: Treating $(\log m)^n$ as $n\log m$, or $\frac{\log m}{\log n}$ as $\log(m \div n)$.**
   Both are tested with numbers in Warnings 2 and 3 above — always check where the exponent or division actually sits.

3. **Mistake 3: Sign errors in the quotient law.**
   $\log_2(32 \div 4) = \log_2 32 \mathbf{-} \log_2 4 = 5 - 2 = 3$. Adding by mistake gives $5 + 2 = 7$, which is wrong because $\log_2 8 = 3$. Also, when expanding $\log\left(\frac{a^3 b^2}{c}\right)$, every factor in the denominator carries a **minus** sign: $3\log a + 2\log b \mathbf{-} \log c$.

4. **Mistake 4: Applying the laws to logarithms with different bases.**
   $\log_2 8 + \log_3 9 = 3 + 2 = 5$. You cannot combine that into $\log_2(8 \times 9) = \log_2 72$, because $72 \neq 2^5$. The product, quotient, and power laws only work when **all logs have the exact same base**.

5. **Mistake 5: Multiplying the base by the exponent in the power law.**
   $\log_2(8^2) = 2 \times \log_2 8 = 6$. The base $2$ stays untouched; only the value of the logarithm is multiplied by the exponent.

---

## Quick Recap

- **Product law:** $\log_a(m \times n) = \log_a m + \log_a n$
- **Quotient law:** $\log_a(m \div n) = \log_a m - \log_a n$
- **Power law:** $\log_a(m^n) = n \times \log_a m$
- Special results: $\log_a\left(\frac{1}{n}\right) = -\log_a n$, $\log_a \sqrt[n]{m} = \frac{1}{n}\log_a m$, $\log_a a^n = n$.
- All three laws are derived from the laws of exponents and require the **same base**.
- **Expanding:** $\log\left(\frac{a^3 b^2}{c}\right) = 3\log a + 2\log b - \log c$. **Condensing:** doing the reverse to combine logs into one.
- **Remember:** $\log(m + n) \neq \log m + \log n$, $(\log m)^n \neq n\log m$, and $\frac{\log m}{\log n} \neq \log\left(\frac{m}{n}\right)$.

---

## Practice Questions

1. Using the product law, find $\log_3 9 + \log_3 27$. Verify by evaluating each logarithm separately.

2. Find $\log_2 128 - \log_2 8$ using the quotient law. Verify by evaluating each logarithm separately.

3. Find the value of $\log_5(25^3)$.

4. Find the value of $\log_2 \sqrt[3]{16}$ and of $\log_2\left(\frac{1}{32}\right)$.

5. Expand $\log\left(\frac{x^2 y^3}{z^4}\right)$.

6. Write $3\log 2 + \log 125 - \log 100$ as a single logarithm (base $10$) and find its value.

7. Simplify $\log_3 18 + \log_3 6 - \log_3 4$.

8. A student writes: "$\log_2(4 + 4) = \log_2 4 + \log_2 4 = 2 + 2 = 4$." Find the mistake and give the correct value.

9. State True or False:
   (a) $\log(m + n) = \log m + \log n$ for all positive $m$ and $n$.
   (b) $\frac{\log_2 8}{\log_2 4} = \log_2 2$.
   (c) $\log_6\left(\frac{1}{36}\right) = -2$.
   (d) $\log_3(3^7) = 7$.

### Answers

1. $\log_3 9 + \log_3 27 = \log_3(9 \times 27) = \log_3 243 = \mathbf{5}$ (since $3^5 = 243$).
   Check: $\log_3 9 = 2$, $\log_3 27 = 3$, and $2 + 3 = 5$ ✅

2. $\log_2 128 - \log_2 8 = \log_2(128 \div 8) = \log_2 16 = \mathbf{4}$.
   Check: $7 - 3 = 4$ ✅

3. $\log_5(25^3) = 3 \times \log_5 25 = 3 \times 2 = \mathbf{6}$.
   Check: $25^3 = (5^2)^3 = 5^6$, so its log to base $5$ is $6$ ✅

4. $\log_2 \sqrt[3]{16} = \frac{1}{3}\log_2 16 = \frac{1}{3} \times 4 = \mathbf{\frac{4}{3}}$.
   Check: $(2^{4/3})^3 = 2^4 = 16$ ✅
   $\log_2\left(\frac{1}{32}\right) = -\log_2 32 = \mathbf{-5}$. Check: $2^{-5} = \frac{1}{32}$ ✅

5. $\log\left(\frac{x^2 y^3}{z^4}\right) = \log(x^2) + \log(y^3) - \log(z^4) = \mathbf{2\log x + 3\log y - 4\log z}$.

6. $3\log 2 = \log(2^3) = \log 8$. Then $\log 8 + \log 125 = \log 1000$. Finally $\log 1000 - \log 100 = \log(1000 \div 100) = \mathbf{\log 10 = 1}$.
   Check: $\frac{8 \times 125}{100} = 10$ ✅

7. $\log_3 18 + \log_3 6 - \log_3 4 = \log_3\left(\frac{18 \times 6}{4}\right) = \log_3\left(\frac{108}{4}\right) = \log_3 27 = \mathbf{3}$.
   Check: $3^3 = 27$ ✅

8. Mistake: the student assumed $\log(m + n) = \log m + \log n$. Correct value: $\log_2(4 + 4) = \log_2 8 = \mathbf{3}$, whereas $2 + 2 = 4$ — they are not equal.
   *(If it had been multiplication, $\log_2(4 \times 4) = \log_2 16 = 4 = 2 + 2$ would hold, yet here it was addition.)*

9. (a) **False** ❌. For example, $\log_{10}(10 + 90) = 2$, while $1 + 1.9542 = 2.9542$.
   (b) **False** ❌. $\frac{\log_2 8}{\log_2 4} = \frac{3}{2}$, whereas $\log_2 2 = 1$.
   (c) **True** ✅. $6^{-2} = \frac{1}{6^2} = \frac{1}{36}$.
   (d) **True** ✅. $\log_a(a^n) = n$.

---

Leo just did exactly what John Napier envisioned: turning multiplication into addition. Whenever you face a complex logarithm, ask yourself first: *"Does this involve a product, a quotient, or a power?"*

**What comes next?** Dr. Bennett showed Leo one more trick: knowing just $\log 2$ and $\log 3$ unlocks dozens of other logarithms. In Topic 4, we will see how those two values give us $\log 6$, $\log 12$, $\log 18$, and more — and we will solve logarithmic equations and prove classic logarithmic identities!
