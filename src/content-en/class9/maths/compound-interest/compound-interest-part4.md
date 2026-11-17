# Chapter: Compound Interest (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [compound-interest-part3.md](compound-interest-part3.md).** The chapter begins in [compound-interest.md](compound-interest.md).
> **Topics covered in this file:**
> 4. Half-Yearly, Quarterly Compounding, and Varying Rates

---

# Topic 4: Half-Yearly, Quarterly Compounding, and Varying Rates

In Topic 3, we unlocked a clean one-line formula: **$A = P\left(1 + \frac{r}{100}\right)^n$**, with $\text{CI} = A - P$. Even Dr. Bennett's $10$-year Certificate of Deposit fit into one line: $50{,}000 \times (1.1)^{10}$. Using that formula, we could solve for the amount, principal, rate, or time. Yet all along, we quietly assumed two things: that interest is added **only once a year**, and that **the interest rate stays constant** the entire time.

In the real world, banks do not always wait a full year. Some credit interest every $6$ months, others every $3$ months, and some accounts offer different rates from one year to the next. In this topic, we will learn how to adjust that same formula slightly to handle every one of these cases!

---

## Aunt Elena's Two Banks

**Aunt Elena** sold her vintage sewing machine and studio gear for **\$10,000**. She wants to deposit that money in a bank for $1$ year. There are two banks on her street, and both advertise the exact same rate: **"$10\%$ per annum interest."**

When she asks at the first bank, the teller explains: "We compound interest once at the end of the year."

The second bank tells her: "We compound interest **every $6$ months**."

Aunt Elena thinks, "Both pay $10\%$ per annum, so they must give the exact same return!" Fortunately, her nephew **Leo**, who is in Class 9, speaks up: "Hold on, Aunt Elena — let us calculate both before you decide."

**Bank 1 (compounded once a year):** $10\%$ of $\$10,000 = \$1,000$. Balance at the end of the year: **\$11,000**.

**Bank 2 (compounded every $6$ months):** The rate is $10\%$ for a full **year**, so for $6$ months (half a year), the rate is half as much: **$5\%$**.
- First $6$ months: $5\%$ of $\$10,000 = \$500$. Balance becomes \$10,500.
- Next $6$ months: Now interest is earned on \$10,500. $5\%$ of $\$10,500 = \$525$. Total balance: **\$11,025**.

Bank 2 paid **\$25 more**! Why? Because the \$500 of interest earned in the first $6$ months **went to work during the second half of the year** ($5\%$ of $\$500 = \$25$). It is the exact same magic of compound interest — just happening twice a year instead of once.

Everything in this topic rests on this single idea.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Compounding period** | The time interval between one interest calculation and the next | Annual $= 1$ year; half-yearly $= 6$ months |
| **Half-yearly (semi-annual)** | Interest is compounded every $6$ months ($2$ times per year) | Aunt Elena's Bank 2 |
| **Quarterly** | Interest is compounded every $3$ months ($4$ times per year) | $12\text{ months} \div 3 = 4$ times per year |
| **Rate per period** | The interest rate for a single compounding period | $10\%$ p.a. half-yearly: $5\%$ per period |
| **Per annum (p.a.)** | Interest rate for one full **year** | $10\%$ p.a. |
| **Growth factor** | The multiplier applied in each compounding period | At $5\%$ per period, the factor is $1.05$ |

---

## Part A: Half-Yearly Compounding

### The Direct Rule

When interest is compounded **half-yearly** (twice a year), two simple adjustments happen:

1. **The rate per period is halved:** $r\%$ p.a. becomes **$\frac{r}{2}\%$** per half-year.
2. **The number of periods is doubled:** $n$ years becomes **$2n$** half-year periods.

Now apply those two adjustments directly to Topic 3's formula:

$$A = P\left(1 + \frac{r}{200}\right)^{2n}$$

Why $\frac{r}{200}$? Because $\frac{r \div 2}{100} = \frac{r}{200}$. Notice this is not a brand-new formula to memorize blindly — it is just the standard formula $A = P\left(1 + \frac{\text{rate per period}}{100}\right)^{\text{number of periods}}$ (or in general financial notation, $A = P\left(1 + \frac{r_{\text{dec}}}{k}\right)^{kt}$ with $k = 2$ periods per year).

### Example 1: Aunt Elena's Savings (With Check)

**$P = \$10,000$, $r = 10\%$ p.a., time $= 1$ year, compounded half-yearly.**

- Rate per period $= 10 \div 2 = \mathbf{5\%}$
- Number of periods $= 1 \times 2 = \mathbf{2}$

$$A = 10{,}000 \times \left(1 + \frac{5}{100}\right)^2 = 10{,}000 \times (1.05)^2 = 10{,}000 \times 1.1025 = \mathbf{\$11,025}$$

$$\text{CI} = 11{,}025 - 10{,}000 = \mathbf{\$1,025}$$

**Check:** Earlier we calculated $500 + 525 = 1{,}025$ step by step — exact match! ✅ *(With annual compounding, CI was only \$1,000.)*

### Example 2: Longer Term — $1\frac{1}{2}$ Years

**$P = \$16,000$, $r = 10\%$ p.a., time $= 1\frac{1}{2}$ years, compounded half-yearly.**

- Rate per period $= \mathbf{5\%}$
- Number of periods $= 1\frac{1}{2} \times 2 = \mathbf{3}$

$$A = 16{,}000 \times (1.05)^3 = 16{,}000 \times 1.157625 = \mathbf{\$18,522}$$

$$\text{CI} = 18{,}522 - 16{,}000 = \mathbf{\$2,522}$$

**Check (period by period):**
- 1st period: $16{,}000 \times 1.05 = 16{,}800$
- 2nd period: $16{,}800 \times 1.05 = 17{,}640$
- 3rd period: $17{,}640 \times 1.05 = 18{,}522$ ✅

---

## Part B: Quarterly Compounding

The exact same reasoning applies, except the year is split into **$4$ quarters** ($3$ months each):

1. **The rate per period is one-fourth:** $\frac{r}{4}\%$ per quarter.
2. **The number of periods is quadrupled:** $4n$ quarters in $n$ years.

$$A = P\left(1 + \frac{r}{400}\right)^{4n}$$

### Example 3

**$P = \$7,500$, $r = 16\%$ p.a., time $= 6$ months, compounded quarterly.**

- Rate per period $= 16 \div 4 = \mathbf{4\%}$
- $6\text{ months} = 2$ quarters (each quarter is $3$ months), so periods $= \mathbf{2}$

$$A = 7{,}500 \times (1.04)^2 = 7{,}500 \times 1.0816 = \mathbf{\$8,112}$$

$$\text{CI} = 8{,}112 - 7{,}500 = \mathbf{\$612}$$

**Check:** First quarter: $4\%$ of $7{,}500 = 300$, giving $7{,}800$. Second quarter: $4\%$ of $7{,}800 = 312$. Total $= 7{,}800 + 312 = 8{,}112$ ✅

> **Tip:** Always convert the time into **months** first, then divide by the length of one compounding period ($6$ months or $3$ months). That immediately gives the exact number of periods: $6\text{ months} \div 3\text{ months} = 2$.

---

## Part C: Why Does More Frequent Compounding Earn More Money?

Look at this ladder for Aunt Elena's \$10,000 at $10\%$ p.a. over $1$ year:

| How often interest is compounded | Total balance after $1$ year |
|---|---|
| Once a year (annually) | **\$11,000** |
| Twice a year (half-yearly) | **\$11,025** |
| Four times a year (quarterly) | **\$11,038.13** (approx.) |

Check: For quarterly compounding, the rate per period is $2.5\%$ and there are $4$ periods, so $10{,}000 \times (1.025)^4 = 10{,}000 \times 1.1038129 \approx \$11,038.13$ ✅

**Why does it increase?** The sooner interest is credited to your account, the sooner that interest starts earning interest of its own. It gets put to work earlier in the year — just like hiring an assistant $6$ months earlier gives them more time to contribute before year-end.

Notice, though, that the extra gain is **modest** (\$25, then \$38.13). Even if you compounded every day or every hour, the balance would not grow endlessly — it approaches a tight ceiling. So more frequent compounding always helps, yet with diminishing extra gains.

---

## Part D: Different Years, Different Rates

Sometimes a savings plan advertises changing rates: "$10\%$ in the first year, $12\%$ in the second year." Now a single $\left(1 + \frac{r}{100}\right)$ factor is not enough. Yet the logic is unchanged: **find each year's own growth factor and multiply them in sequence**.

$$A = P\left(1 + \frac{r_1}{100}\right)\left(1 + \frac{r_2}{100}\right)\left(1 + \frac{r_3}{100}\right)\dots$$

Here, $r_1$ is the Year 1 rate, $r_2$ is the Year 2 rate, and so on.

### Example 4

**\$10,000 earns $10\%$ in the first year and $12\%$ in the second year (compounded yearly). Find the total amount and CI.**

- Year 1 factor: $1 + \frac{10}{100} = 1.10$
- Year 2 factor: $1 + \frac{12}{100} = 1.12$

$$A = 10{,}000 \times 1.10 \times 1.12 = 10{,}000 \times 1.232 = \mathbf{\$12,320}$$

$$\text{CI} = 12{,}320 - 10{,}000 = \mathbf{\$2,320}$$

**Check (year by year):**
- Year 1: $10{,}000 + 10\%$ of $10{,}000 = 10{,}000 + 1{,}000 = 11{,}000$
- Year 2: $11{,}000 + 12\%$ of $11{,}000 = 11{,}000 + 1{,}320 = 12{,}320$ ✅

### Example 5: Three Years, Three Rates

**\$20,000 earns $5\%$ in Year 1, $10\%$ in Year 2, and $20\%$ in Year 3.**

$$A = 20{,}000 \times 1.05 \times 1.10 \times 1.20$$

- $20{,}000 \times 1.05 = 21{,}000$
- $21{,}000 \times 1.10 = 23{,}100$
- $23{,}100 \times 1.20 = \mathbf{\$27,720}$

$$\text{CI} = 27{,}720 - 20{,}000 = \mathbf{\$7,720}$$

**Check:** Product of factors: $1.05 \times 1.10 \times 1.20 = 1.386$, and $20{,}000 \times 1.386 = 27{,}720$ ✅

---

## Part E: Fractional Time (A Quick Look)

Sometimes the time is **$2\frac{1}{2}$ years**, while the interest is still **compounded annually** (once a year). Since that last half-year is not a full compounding period, how do we handle it?

> **Method:** Apply compound interest for all **complete years** ($2$ years). Then, for the remaining fractional year ($\frac{1}{2}$ year), calculate **simple interest on the balance reached so far**.

### Example 6

**\$8,000 at $10\%$ p.a. (compounded annually) for $2\frac{1}{2}$ years.**

**Step 1:** Compound for the $2$ complete years:

$$A_2 = 8{,}000 \times (1.10)^2 = 8{,}000 \times 1.21 = \$9,680$$

**Step 2:** Simple interest on \$9,680 for the remaining $\frac{1}{2}$ year:

$$\text{SI} = \frac{9{,}680 \times 10 \times \frac{1}{2}}{100} = \$484$$

**Step 3:** $\text{Total Amount} = 9{,}680 + 484 = \mathbf{\$10,164}$

**Check:** A full year's interest at $10\%$ on \$9,680 would be \$968, so half a year is half of \$968 $= \$484$ ✅

*(Note: If the problem instead says "compounded **half-yearly**," that is Part A's case — where $2\frac{1}{2}$ years gives $5$ half-year periods!)*

---

## Common Pitfalls to Avoid

1. **Mistake 1: Forgetting to halve the rate for half-yearly compounding.**
   \$10,000 at $10\%$ p.a. for $1$ year, half-yearly. Wrong: $10{,}000 \times (1.10)^2 = \$12,100$ ❌ — that calculates $2$ full **years** of annual CI! Correct: rate per period is $5\%$, so $10{,}000 \times (1.05)^2 = \mathbf{\$11,025}$ ✅.

2. **Mistake 2: Forgetting to double the number of periods.**
   Halving the rate to $5\%$ while leaving $n = 1$ gives $10{,}000 \times 1.05 = \$10,500$ ❌ — that is only **$6$ months**! Correct: $1$ year $= 2$ periods, giving **\$11,025** ✅.

3. **Mistake 3: Adding or averaging rates instead of multiplying factors.**
   Year 1 is $10\%$, Year 2 is $12\%$. Wrong: "$10 + 12 = 22\%$, so $10{,}000 \times 1.22 = \$12,200$" ❌, or "average $11\%$ twice: $10{,}000 \times (1.11)^2 = \$12,321$" ❌. Neither matches the true answer \$12,320. Correct: turn each year's rate into its **growth factor** ($1.10$ and $1.12$) and **multiply the factors** ✅.

4. **Mistake 4: Confusing "per annum" with "per half-year."**
   "$10\%$ per annum" means $10\%$ for a full year. "$10\%$ per half-year" means **$10\%$ every $6$ months** (equivalent to $20\%$ per year!). If a question states "per half-year," **do not** halve the rate — it is already the per-period rate. Always read the wording carefully!
   Example: \$5,000 at **$10\%$ per half-year** for $1$ year. Periods $= 2$, rate per period $= 10\%$ (not halved): $5{,}000 \times 1.10 \times 1.10 = \mathbf{\$6,050}$.

---

## Quick Recap

- **Half-yearly compounding:** rate per period $= \frac{r}{2}$, periods $= 2n$, **$A = P\left(1 + \frac{r}{200}\right)^{2n}$**.
- **Quarterly compounding:** rate per period $= \frac{r}{4}$, periods $= 4n$, **$A = P\left(1 + \frac{r}{400}\right)^{4n}$**.
- Convert time to **months** and divide by the compounding period ($6$ or $3$ months) to count periods cleanly.
- More frequent compounding yields **slightly more** money because interest starts earning earlier (\$10,000 at $10\%$ for $1$ year: \$11,000 annually, \$11,025 half-yearly, $\approx \$11,038.13$ quarterly).
- **Varying rates:** $A = P\left(1 + \frac{r_1}{100}\right)\left(1 + \frac{r_2}{100}\right)\dots$ Multiply the growth factors, never add the rates.
- **Fractional time (with annual compounding):** compound for complete years, then add simple interest on that amount for the remaining fraction.
- Always distinguish **"per annum"** from **"per half-year"** before dividing the rate.
- Verify your answer period by period whenever possible.

---

## Practice Questions

1. Find the amount and the compound interest on \$20,000 at $8\%$ per annum for $1$ year, compounded half-yearly. How much would the amount be if the interest were compounded yearly instead?

2. Find the amount if \$5,000 is invested at $16\%$ per annum for $1$ year, compounded half-yearly.

3. Find the amount on \$25,000 at $8\%$ per annum for $6$ months, compounded quarterly.

4. A sum of \$8,000 earns $5\%$ interest in the first year and $10\%$ in the second year (compounded yearly). Find the amount and the compound interest after $2$ years.

5. Find the amount on \$4,000 at $20\%$ per annum for $1\frac{1}{2}$ years if the interest is compounded **yearly** (use simple interest for the last half-year). Then find the amount if it is compounded **half-yearly**. Which gives more money, and by how much?

6. Bank A offers $20\%$ per annum, compounded yearly. Bank B offers $19\%$ per annum, compounded half-yearly. For \$10,000 kept for $1$ year, which bank gives more money? Does a "lower" rate always lose?

7. A student solved this: *"For \$10,000 at $10\%$ per annum, compounded half-yearly for $1$ year, $A = 10{,}000 \times \left(1 + \frac{10}{100}\right)^2 = \$12,100$."* Find the mistake and give the correct answer.

8. State True or False:
   (a) For $\$P$ at $r\%$ per annum compounded half-yearly for $2$ years, the rate per period is $\frac{r}{2}$ and the number of periods is $4$.
   (b) For $12\%$ per annum compounded quarterly, the rate per period is $3\%$.
   (c) Half-yearly compounding always gives a smaller amount than yearly compounding at the same rate (for the same time).
   (d) If the rates in two successive years are $10\%$ and $20\%$, the final amount is the same as earning $30\%$ for one year.

### Answers

1. Rate per period $= 8 \div 2 = 4\%$, periods $= 2$.
   $A = 20{,}000 \times (1.04)^2 = 20{,}000 \times 1.0816 = \mathbf{\$21,632}$
   $\text{CI} = 21{,}632 - 20{,}000 = \mathbf{\$1,632}$
   With yearly compounding: $20{,}000 \times 1.08 = \mathbf{\$21,600}$. (Half-yearly gives \$32 more.)
   Check: 1st period $20{,}000 \times 1.04 = 20{,}800$; 2nd period $20{,}800 \times 1.04 = 21{,}632$ ✅

2. Rate per period $= 8\%$, periods $= 2$.
   $A = 5{,}000 \times (1.08)^2 = 5{,}000 \times 1.1664 = \mathbf{\$5,832}$
   Check: $5{,}000 \times 1.08 = 5{,}400$; $5{,}400 \times 1.08 = 5{,}832$ ✅

3. $8\%$ p.a. quarterly: rate per period $= 2\%$. $6\text{ months} = 2$ quarters.
   $A = 25{,}000 \times (1.02)^2 = 25{,}000 \times 1.0404 = \mathbf{\$26,010}$
   Check: $25{,}000 \times 1.02 = 25{,}500$; $25{,}500 \times 1.02 = 26{,}010$ ✅

4. $A = 8{,}000 \times 1.05 \times 1.10 = 8{,}000 \times 1.155 = \mathbf{\$9,240}$
   $\text{CI} = 9{,}240 - 8{,}000 = \mathbf{\$1,240}$
   Check: Year 1: $8{,}000 + 400 = 8{,}400$; Year 2: $8{,}400 + 840 = 9{,}240$ ✅

5. **Yearly:** $1$ full year compounded: $4{,}000 \times 1.20 = \$4,800$. SI for remaining half-year $= \frac{4{,}800 \times 20 \times \frac{1}{2}}{100} = \$480$. Total $= \mathbf{\$5,280}$.
   **Half-yearly:** rate $10\%$ per period, periods $= 3$. $A = 4{,}000 \times (1.10)^3 = 4{,}000 \times 1.331 = \mathbf{\$5,324}$.
   Half-yearly gives more, by **$\$5,324 - \$5,280 = \$44$**.
   Check: $4{,}000 \rightarrow 4{,}400 \rightarrow 4{,}840 \rightarrow 5{,}324$ ✅

6. Bank A: $10{,}000 \times 1.20 = \mathbf{\$12,000}$.
   Bank B: rate per period $= 9.5\%$, periods $= 2$. $A = 10{,}000 \times (1.095)^2 = 10{,}000 \times 1.199025 = \mathbf{\$11,990.25}$.
   **Bank A** gives more (by \$9.75). Here the lower rate lost because the $1\%$ rate gap outweighed the small boost from half-yearly compounding — though if the two rates had been equal, Bank B would have won. You must always check **both** the rate and the compounding frequency.

7. Mistake: The student forgot to halve the rate (and ended up doubling the periods without halving the rate, effectively computing $10\%$ for $2$ full years).
   Correct: rate per period $= 5\%$, periods $= 2$. $A = 10{,}000 \times (1.05)^2 = \mathbf{\$11,025}$.

8. (a) **True** ✅. $2$ years $= 4$ half-years, with rate $\frac{r}{2}$ per period.
   (b) **True** ✅. $12 \div 4 = 3$.
   (c) **False** ❌. Half-yearly compounding gives a **larger** amount than yearly compounding (e.g., \$11,025 vs. \$11,000).
   (d) **False** ❌. $1.10 \times 1.20 = 1.32$ ($32\%$ total growth), whereas $30\%$ gives $1.30$.

---

With one formula in hand, you can now handle all kinds of bank accounts and savings plans. Just ask yourself two questions: *"What is the rate per period?"* and *"How many periods are there in total?"* Everything else is the same multiplication.

**What comes next?** So far, only money has been growing. In Topic 5, we will discover that **this exact same formula** describes growing **town populations**, multiplying bacteria — and even things that **shrink** in value, such as a **depreciating car** (with just one tiny sign change!).
