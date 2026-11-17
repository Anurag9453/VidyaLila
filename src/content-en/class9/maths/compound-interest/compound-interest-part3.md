# Chapter: Compound Interest (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [compound-interest-part2.md](compound-interest-part2.md)** (which covers the year-by-year table method). The chapter begins in [compound-interest.md](compound-interest.md).
> **Topics covered in this file:**
> 3. The Compound Interest Formula

---

# Topic 3: The Compound Interest Formula

In the previous topic, we computed compound interest using a **year-by-year table** (such as Leo's \$50,000 loan, which grew to \$58,320 in $2$ years): calculate each year's interest separately, add it to the principal, and repeat. For $2$ or $3$ years, that worked nicely. Imagine, though, a problem spanning $10$ or $20$ years! You would have to build $10$ or $20$ rows, and one tiny arithmetic slip in row $4$ would throw off everything afterward.

In this topic, we turn that long table into a **one-line formula**. Best of all, this formula does the exact same thing the table did — just written down in one compact step.

---

## Dr. Bennett and the 10-Year Certificate of Deposit

**Dr. Bennett** has just retired from teaching. Out of his savings, he takes **\$50,000** to the bank to open a **10-year Certificate of Deposit (CD)**, a long-term savings deposit. The financial advisor, **Liam**, tells him the account earns $10\%$ per annum, **compounded annually**.

Dr. Bennett asks, "Liam, how much will I have in this account after $10$ years?"

Liam smiles. "If I write out a $10$-row ledger by hand, our coffee will go cold! Let me show you a shortcut."

He writes one line on a notepad:

**Every year, the balance grows by $10\%$, which means it gets multiplied by $1.1$ each year.**
So after $10$ years, the balance will be: **$50{,}000 \times 1.1 \times 1.1 \times \dots \text{ ($10$ times)}$**

"That is all there is to it — all $10$ rows of the table in a single line!"

Dr. Bennett asks, "Wait — where did that $1.1$ come from?" Let us unpack that right now, and watch how Liam's single line turns into the universal **compound interest formula**.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Growth factor** | The multiplier applied each year: $\left(1 + \frac{r}{100}\right)$ | At $10\%$, the factor is $1.1$ (or $\frac{11}{10}$) |
| **Exponent / Power ($n$)** | How many times the growth factor is multiplied by itself | $(1.1)^3 = 1.1 \times 1.1 \times 1.1$ |
| **Amount ($A$)** | The total balance after $n$ years | $A = P\left(1 + \frac{r}{100}\right)^n$ |
| **Compound Interest (CI)** | The total amount minus the original principal | $\text{CI} = A - P$ |

---

## Part A: How the Formula Is Built (Derivation)

Suppose the starting principal is $P$, the interest rate is $r\%$ per annum, and interest is **compounded once each year**.

**First, look at a quick percentage trick.** Increasing something by $10\%$ means taking the original $100\%$ and adding $10\%$ more:

$$100 + 10 = 110\text{, which is } \mathbf{1.1} \text{ times } 100$$

In general, adding $r\%$ to $P$ gives $P + P \times \frac{r}{100} = P\left(1 + \frac{r}{100}\right)$. We call $\left(1 + \frac{r}{100}\right)$ the **growth factor**. At the end of each year, the balance simply gets multiplied by this factor.

### Year 1

At the start, the balance is $P$. After $1$ year:

$$A_1 = P\left(1 + \frac{r}{100}\right)$$

### Year 2

Now the "new principal" is $A_1$. At the end of Year 2, multiply by the growth factor again:

$$A_2 = A_1\left(1 + \frac{r}{100}\right) = P\left(1 + \frac{r}{100}\right)\left(1 + \frac{r}{100}\right) = \mathbf{P\left(1 + \frac{r}{100}\right)^2}$$

### Year 3

Now the new principal is $A_2$:

$$A_3 = A_2\left(1 + \frac{r}{100}\right) = \mathbf{P\left(1 + \frac{r}{100}\right)^3}$$

### Do You See the Pattern?

| Year | Amount | Exponent |
|---|---|---|
| $1$ | $P\left(1 + \frac{r}{100}\right)$ | $1$ |
| $2$ | $P\left(1 + \frac{r}{100}\right)^2$ | $2$ |
| $3$ | $P\left(1 + \frac{r}{100}\right)^3$ | $3$ |
| $\dots$ | $\dots$ | $\dots$ |
| $n$ | $P\left(1 + \frac{r}{100}\right)^n$ | **$n$** |

Each additional year multiplies by one more growth factor, so the exponent matches the number of years. After **$n$ years**:

$$A = P\left(1 + \frac{r}{100}\right)^n \qquad \text{and} \qquad \text{CI} = A - P$$

*(Note: In international finance textbooks, when the annual rate $r$ is written as a decimal rather than a percentage—such as $0.10$ for $10\%$—and compounded $n$ times per year for $t$ years, this is written as $A = P\left(1 + \frac{r}{n}\right)^{nt}$. For annual compounding with $n = 1$, both forms say the exact same thing! Throughout this chapter, we will use $r$ as the percentage number, like $10$ for $10\%$, so $\frac{r}{100}$ converts it cleanly.)*

So this formula is literally Liam's "$\times 1.1 \times 1.1 \times 1.1 \dots$" written with exponent notation! Here, $P =$ principal, $r =$ rate (in percent), and $n =$ number of years.

Dr. Bennett's $10$-year CD becomes one line: $A = 50{,}000 \times (1.1)^{10}$. Evaluating $(1.1)^{10}$ by hand is tedious (usually done with a calculator), so while we learn the method, let us work with clean, friendly numbers.

---

## Part B: Finding CI Using the Formula

### Example 1: \$5,000 at 10% per annum for 3 Years

**Step 1:** Identify the values: $P = 5{,}000$, $r = 10$, $n = 3$.

**Step 2:** Find the growth factor: $1 + \frac{10}{100} = 1 + \frac{1}{10} = \mathbf{\frac{11}{10}}$.

**Step 3:** Apply the formula:

$$A = 5{,}000 \times \left(\frac{11}{10}\right)^3 = 5{,}000 \times \frac{11 \times 11 \times 11}{10 \times 10 \times 10} = 5{,}000 \times \frac{1{,}331}{1{,}000} = 5 \times 1{,}331 = \mathbf{\$6,655}$$

**Step 4:** $\text{CI} = A - P = 6{,}655 - 5{,}000 = \mathbf{\$1,655}$

**Check (using the table method):**
- Year 1: $5{,}000 + 500 = 5{,}500$
- Year 2: $5{,}500 + 550 = 6{,}050$
- Year 3: $6{,}050 + 605 = \mathbf{6,655}$ ✅

Both methods give the exact same result, yet the formula took just one line.

**Why fractions help:** Writing $1.1$ as $\frac{11}{10}$ allowed the denominator $1{,}000$ to cancel cleanly with $5{,}000$. Always check whether part of $P$ cancels with the denominator!

### Example 2: \$12,000 at 5% per annum for 2 Years

*(This is Practice Question 1 from Topic 2, where the table gave \$13,230. Let us verify it with the formula.)*

Growth factor $= 1 + \frac{5}{100} = 1 + \frac{1}{20} = \mathbf{\frac{21}{20}}$.

$$A = 12{,}000 \times \left(\frac{21}{20}\right)^2 = 12{,}000 \times \frac{441}{400} = 30 \times 441 = \mathbf{\$13,230} \quad (\text{since } 12{,}000 \div 400 = 30)$$

$$\text{CI} = 13{,}230 - 12{,}000 = \mathbf{\$1,230}$$

**Check (table method):**
- Year 1: $5\%$ of $12{,}000 = 600$, amount $= 12{,}600$
- Year 2: $5\%$ of $12{,}600 = 630$, amount $= 12{,}600 + 630 = \mathbf{13,230}$ ✅

**Another check (using Topic 2's 2-year rule):** $\text{CI} - \text{SI} = P\left(\frac{r}{100}\right)^2$
$\text{SI} = \frac{12{,}000 \times 5 \times 2}{100} = 1{,}200$. $\text{CI} - \text{SI} = 1{,}230 - 1{,}200 = 30$.
$P\left(\frac{r}{100}\right)^2 = 12{,}000 \times \left(\frac{1}{20}\right)^2 = \frac{12{,}000}{400} = 30$ ✅

---

## Part C: Reverse Problems (Finding $P$, $r$, or $n$ from the Formula)

The formula links four quantities: $A$, $P$, $r$, and $n$. Given any three of them, we can solve for the fourth. It is the same formula every time — only which letter is unknown changes.

### Example 3: Finding $P$

At $5\%$ per annum compounded annually, an investment amounts to \$9,261 after $3$ years. Find the original principal.

$$A = P\left(\frac{21}{20}\right)^3$$

$$9{,}261 = P \times \frac{21 \times 21 \times 21}{20 \times 20 \times 20} = P \times \frac{9{,}261}{8{,}000}$$

Divide both sides by $\frac{9{,}261}{8{,}000}$ (equivalently, multiply by $\frac{8{,}000}{9{,}261}$):

$$P = 9{,}261 \times \frac{8{,}000}{9{,}261} = \mathbf{\$8,000}$$

Notice that $9{,}261 = 21^3$, so the numbers cancel cleanly!

**Check:** $8{,}000 \times \frac{21}{20} = 8{,}400 \rightarrow 8{,}400 \times \frac{21}{20} = 8{,}820 \rightarrow 8{,}820 \times \frac{21}{20} = \mathbf{9,261}$ ✅

### Example 4: Finding the Rate ($r$)

\$10,000 grows to \$12,100 in $2$ years under annual compound interest. Find the interest rate.

$$12{,}100 = 10{,}000 \times \left(1 + \frac{r}{100}\right)^2$$

$$\left(1 + \frac{r}{100}\right)^2 = \frac{12{,}100}{10{,}000} = \frac{121}{100}$$

*(Remember Maya's deposit from Topic 1? Her \$10,000 grew to \$11,000 and then \$12,100 in the exact same way.)*

Take the positive square root of both sides: $1 + \frac{r}{100} = \frac{11}{10}$.

$$\frac{r}{100} = \frac{11}{10} - 1 = \frac{1}{10} \implies \mathbf{r = 10\%}$$

**Check:** $10{,}000 \times 1.1 = 11{,}000 \rightarrow 11{,}000 \times 1.1 = \mathbf{12,100}$ ✅

*(Note: Problems like this are designed around clean perfect squares, such as $121 = 11^2$, so the root comes out cleanly.)*

### Example 5: Finding the Time ($n$)

\$4,000 grows to \$4,630.50 at $5\%$ per annum compounded annually. In how many years does this happen?

$$4{,}630.50 = 4{,}000 \times \left(\frac{21}{20}\right)^n$$

$$\left(\frac{21}{20}\right)^n = \frac{4{,}630.50}{4{,}000} = 1.157625$$

Since $\frac{21}{20} = 1.05$, test successive powers of $1.05$:
- $(1.05)^1 = 1.05$
- $(1.05)^2 = 1.1025$
- $(1.05)^3 = 1.1025 \times 1.05 = \mathbf{1.157625}$ ✅

Therefore, **$n = 3\text{ years}$**.

Solving directly for an unknown exponent $n$ uses logarithms (covered in the Logarithms chapter or higher grades). Here, we simply test small whole-number powers until we match — and problems at this level are built so that a match appears quickly.

**Check:** $4{,}000 \times 1.05 = 4{,}200 \rightarrow 4{,}200 \times 1.05 = 4{,}410 \rightarrow 4{,}410 \times 1.05 = \mathbf{4,630.50}$ ✅

---

## Part D: The Doubling and Tripling Game

Here is a fascinating property. Suppose at a certain compound interest rate, a sum of money **doubles in $n$ years**. What happens after $2n$ years?

Because the growth factor is the same in every $n$-year block, the money multiplies by $2$ in every block of $n$ years:
- After $n$ years: $P \rightarrow \mathbf{2P}$
- After the next $n$ years: $2P \rightarrow 2 \times 2P = \mathbf{4P}$

> If money **doubles ($2\times$) in $n$ years**, it becomes **$4\times$ in $2n$ years**, and **$8\times$ in $3n$ years**.

Let us prove it with the formula: suppose $\left(1 + \frac{r}{100}\right)^n = 2$. Then after $2n$ years:

$$A = P\left(1 + \frac{r}{100}\right)^{2n} = P \times \left[\left(1 + \frac{r}{100}\right)^n\right]^2 = P \times 2^2 = \mathbf{4P} \text{ ✅}$$

By the exact same reasoning, if money **triples ($3\times$) in $n$ years**, it becomes **$9\times$ in $2n$ years** and $27\times$ in $3n$ years.

**Verifying Topic 1's approximation:** Back in Topic 1, we said that at $10\%$, Maya's money doubles in roughly $7$ to $8$ years. Let us test the powers now: $(1.1)^7 \approx 1.95$ and $(1.1)^8 \approx 2.14$. So at $7$ years it is just shy of double, and by $8$ years it has just passed double — our approximation was spot-on!

### Example 6

In a savings fund, \$5,000 grows to **\$10,000 in $8$ years** under compound interest (this corresponds to roughly $9\%$ per annum, since $(1.09)^8 \approx 1.99$). How much will it become after $16$ years? And after $24$ years?

- $16\text{ years} = 2 \times 8\text{ years}$, so the money becomes **$4$ times** the original: $5{,}000 \times 4 = \mathbf{\$20,000}$
- $24\text{ years} = 3 \times 8\text{ years}$, so it becomes **$8$ times** the original: $5{,}000 \times 8 = \mathbf{\$40,000}$

**Check:** First $8$ years: $5{,}000 \rightarrow 10{,}000$. Next $8$ years: $10{,}000 \rightarrow 20{,}000$. Next $8$ years: $20{,}000 \rightarrow 40{,}000$. ✅

### Example 7 (Tripling)

\$2,000 grows to \$6,000 in $12$ years ($3$ times). How much will it be after $24$ years? That is two $12$-year blocks, so it multiplies by $3 \times 3 = 9$ times: $2{,}000 \times 9 = \mathbf{\$18,000}$. Check: $6{,}000 \rightarrow 18{,}000$ (tripled again) ✅

**Difference from Simple Interest:** Under SI, if money doubles in $n$ years (earning $1P$ of interest), then in $2n$ years it earns one more $P$, reaching only **$3$ times** the original. Under Compound Interest, it reaches **$4$ times**. That is the power of compounding.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Giving the Amount $A$ when the question asks for CI.**
   The formula always outputs the **Amount**. You must subtract $P$ to get CI.
   In Example 1, $A = \$6,655$, so $\text{CI} = 6{,}655 - 5{,}000 = \mathbf{\$1,655}$. Writing \$6,655 as CI is wrong ❌.

2. **Mistake 2: Plugging in $r$ instead of $\frac{r}{100}$.**
   For $10\%$, $r = 10$, yet inside the bracket you write **$1 + \frac{10}{100} = 1.1$**, never $1 + 10 = 11$.
   - Wrong: $5{,}000 \times (1 + 10)^3 = 5{,}000 \times 1{,}331 = \$6{,}655{,}000$ ❌ (how could money grow $1{,}331$ times in $3$ years?!)
   - Correct: $5{,}000 \times (1.1)^3 = \$6,655$ ✅

3. **Mistake 3: Using the wrong exponent.**
   The exponent $n$ is always the **number of years** — never the rate, and never fixed at $2$.
   - For $3$ years, use $(1.1)^3$, not $(1.1)^2$.
   - Wrong: $5{,}000 \times (1.1)^2 = \$6,050$, which is only the $2$-year amount ❌.

4. **Mistake 4: Multiplying by the exponent instead of raising to the power.**
   $(1.1)^3$ means $1.1 \times 1.1 \times 1.1 = 1.331$, **not $1.1 \times 3 = 3.3$**.

5. **Mistake 5: Adding when money doubles.**
   If money doubles in $8$ years under compound interest, in $16$ years it becomes **$4$ times** the original, not $3$ times ($3$ times would be Simple Interest).

---

## Quick Recap

- Each year, money is multiplied by the growth factor **$\left(1 + \frac{r}{100}\right)$**.
- After $n$ years: **$A = P\left(1 + \frac{r}{100}\right)^n$** and **$\text{CI} = A - P$** (equivalently $A = P\left(1 + \frac{r}{n}\right)^{nt}$ when rate $r$ is a decimal compounded $n$ times per year for $t$ years).
- Pattern: Year 1 uses power $1$, Year 2 uses power $2$, Year 3 uses power $3$, $\dots$, Year $n$ uses power $n$.
- Convert the growth factor into a simplified fraction to cancel easily: $10\% \rightarrow \frac{11}{10}$, $5\% \rightarrow \frac{21}{20}$.
- Reverse problems: use the same formula and solve for the missing $P$, $r$, or $n$ (for $n$, test small powers).
- If money doubles in $n$ years under CI, it becomes **$4\times$ in $2n$ years** and $8\times$ in $3n$ years (under SI it would only reach $3\times$ in $2n$ years).
- Always double-check with the year-by-year method or by multiplying back.

---

## Practice Questions

1. Find the amount and the compound interest on \$6,000 for $2$ years at $5\%$ per annum.

2. Find the amount and the compound interest on \$20,000 for $3$ years at $10\%$ per annum.

3. A sum of money grows to \$14,641 in $4$ years at $10\%$ per annum compounded annually. Find the sum.

4. \$6,250 becomes \$7,290 in $2$ years at compound interest. Find the rate of interest per annum.

5. In how many years will \$3,000 become \$3,993 at $10\%$ per annum compounded annually?

6. A bank doubles your money in $6$ years (compounded). If you deposit \$7,000, how much will you have after $18$ years? After how many years will it become $4$ times the original sum?

7. **Maya** says: *"The compound interest on \$10,000 at $10\%$ for $2$ years is \$12,100."* Is she correct? If not, what is her mistake and what is the correct answer?

8. **Leo** calculated the amount on \$5,000 at $4\%$ for $2$ years as $5{,}000 \times (1 + 4)^2$. Find his mistake and give the correct amount and CI.

9. State True or False:
   (a) The amount after $n$ years is $P\left(1 + \frac{r}{100}\right)^n$.
   (b) For $3$ years, the exponent in the formula is $3$.
   (c) If money becomes $2$ times in $n$ years, it becomes $3$ times in $2n$ years (compound interest).
   (d) The compound interest is always equal to the amount.

### Answers

1. $P = 6{,}000$, $r = 5$, $n = 2$. Growth factor $= \frac{21}{20}$.
   $A = 6{,}000 \times \left(\frac{21}{20}\right)^2 = 6{,}000 \times \frac{441}{400} = 15 \times 441 = \mathbf{\$6,615}$
   $\text{CI} = 6{,}615 - 6{,}000 = \mathbf{\$615}$
   Check: $6{,}000 + 300 = 6{,}300$, then $6{,}300 + 315 = 6{,}615$ ✅

2. $P = 20{,}000$, $r = 10$, $n = 3$. Growth factor $= \frac{11}{10}$.
   $A = 20{,}000 \times \frac{1{,}331}{1{,}000} = 20 \times 1{,}331 = \mathbf{\$26,620}$
   $\text{CI} = 26{,}620 - 20{,}000 = \mathbf{\$6,620}$
   Check: $20{,}000 \rightarrow 22{,}000 \rightarrow 24{,}200 \rightarrow 26{,}620$ ✅

3. $14{,}641 = P \times \left(\frac{11}{10}\right)^4 = P \times \frac{14{,}641}{10{,}000}$, since $11^4 = 14{,}641$.
   $P = 14{,}641 \times \frac{10{,}000}{14{,}641} = \mathbf{\$10,000}$
   Check: $10{,}000 \rightarrow 11{,}000 \rightarrow 12{,}100 \rightarrow 13{,}310 \rightarrow 14{,}641$ ✅

4. $\frac{7{,}290}{6{,}250} = 1.1664 = \left(1 + \frac{r}{100}\right)^2$.
   $1.1664 = 1.08 \times 1.08$ (since $(1.08)^2 = 1.1664$), so $1 + \frac{r}{100} = 1.08$ and **$\mathbf{r = 8\%}$**.
   Check: $6{,}250 \times 1.08 = 6{,}750$, then $6{,}750 \times 1.08 = 7{,}290$ ✅

5. $\frac{3{,}993}{3{,}000} = 1.331 = (1.1)^3$, so **$\mathbf{n = 3\text{ years}}$**.
   Check: $3{,}000 \rightarrow 3{,}300 \rightarrow 3{,}630 \rightarrow 3{,}993$ ✅

6. $18\text{ years} = 3 \times 6\text{ years}$, so the money multiplies by $2 \times 2 \times 2 = 8$ times: $7{,}000 \times 8 = \mathbf{\$56,000}$.
   It becomes $4$ times after doubling twice, which takes $2 \times 6 = \mathbf{12\text{ years}}$ ($7{,}000 \rightarrow 14{,}000 \rightarrow 28{,}000$).

7. **No, she is incorrect.** \$12,100 is the **Amount** ($10{,}000 \rightarrow 11{,}000 \rightarrow 12{,}100$). $\text{CI} = A - P = 12{,}100 - 10{,}000 = \mathbf{\$2,100}$. Her mistake was forgetting to subtract the principal $P$.

8. Mistake: Leo wrote $r$ instead of $\frac{r}{100}$. Inside the bracket it should be **$1 + \frac{4}{100} = 1.04$**, not $1 + 4 = 5$.
   Correct: $A = 5{,}000 \times (1.04)^2 = 5{,}000 \times 1.0816 = \mathbf{\$5,408}$
   $\text{CI} = 5{,}408 - 5{,}000 = \mathbf{\$408}$
   Check: $5{,}000 + 200 = 5{,}200$, then $5{,}200 + 208 = 5{,}408$ ✅

9. (a) **True** ✅. That is the compound interest amount formula.
   (b) **True** ✅. The exponent equals the number of years.
   (c) **False** ❌. In $2n$ years it becomes $2 \times 2 = 4$ times, not $3$ times.
   (d) **False** ❌. $\text{CI} = A - P$. The amount includes the original principal.

---

Now you no longer need a $10$-row table. Just identify $P$, $r$, and $n$, form the growth factor, and solve in one line — even Dr. Bennett's $10$-year CD is effortless with a calculator!

**What comes next?** So far, our interest was always added **once a year**. What if a bank compounds interest every **$6$ months** or every **$3$ months**? And what if the interest rate changes from year to year? In Topic 4, we will learn how to adjust $n$ and $r$ in the formula to handle all of those!
