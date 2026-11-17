# Chapter: Compound Interest (Part 5)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [compound-interest-part4.md](compound-interest-part4.md).** (The chapter begins in [compound-interest.md](compound-interest.md).)
> **Topics covered in this file:**
> 5. Growth and Depreciation

---

# Topic 5: Growth and Depreciation

In the previous topic, we saw that compounding does not have to happen once a year: for half-yearly and quarterly compounding, the rate is divided by $2$ or $4$ while the number of periods is multiplied by $2$ or $4$. Aunt Elena's \$10,000 grew to \$11,025 half-yearly instead of \$11,000 annually. We also saw that when rates vary from year to year, we simply multiply each year's growth factor.

Now ask yourself: does this idea apply only to banks and money? Not at all! Whenever **any quantity grows or shrinks by a fixed percentage of its current value**, the exact same mathematical engine runs underneath. In this topic, we will apply our formula to populations, bacteria, plants, and vehicles — and see how **shrinking** values simply flip one sign. Since this is the final topic of the chapter, a full Chapter Wrap-up follows at the end.

---

## Oakridge's Town Sign and Liam's Scooter

At the entrance to the town of **Oakridge**, a welcome sign reads:

> **"Welcome to Oakridge: Population 30,000 — Growing 5% Every Year!"**

**Liam** lives in Oakridge and just bought a brand-new electric commuter scooter for **\$80,000** (a heavy-duty utility model for his business). As he drives off, the dealership manager mentions, "Just keep in mind, Liam, vehicles typically lose $20\%$ of their value each year."

Liam asks his nephew **Leo**, "Leo, the town sign says Oakridge is growing, while the dealer says my vehicle's value is shrinking. How do we calculate both? How many people will live in Oakridge in $2$ years, and what will my vehicle be worth in $3$ years?"

Leo grins. "Uncle Liam, this is literally the exact same math as Compound Interest — just with people and vehicle values instead of bank balances!"

Let us see how.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Growth** | A quantity increases each period by $r\%$ of its current value | Population rising $5\%$ per year |
| **Depreciation** | A quantity decreases each period by $r\%$ of its current value | A vehicle losing $20\%$ of its value per year |
| **Growth rate** | The percentage increase per period | $5\%$ |
| **Depreciation rate** | The percentage decrease per period | $20\%$ |
| **Inflation** | The year-by-year rise in prices of goods and services | A lunch combo rising from \$100 to \$108 |
| **Present value** | The value of a quantity right now | The town's population today |

---

## Part A: Growth (Increasing Value)

### Why Does the Same Formula Work?

In Topic 3, our compound interest formula was $A = P\left(1 + \frac{r}{100}\right)^n$. In that formula, each year's balance grows by $r\%$ of the **previous year's** balance. Town populations work identically: $5\%$ of this year's $30{,}000$ residents are added, and next year $5\%$ of the new total are added. Therefore:

$$V = P\left(1 + \frac{r}{100}\right)^n$$

Here, $P$ is the starting value, $r\%$ is the growth rate per period, $n$ is the number of periods, and $V$ is the value after $n$ periods.

### Example 1: Population of Oakridge

$P = 30{,}000$, $r = 5$, $n = 2$

$$V = 30{,}000 \times \left(1 + \frac{5}{100}\right)^2 = 30{,}000 \times (1.05)^2 = 30{,}000 \times 1.1025 = \mathbf{33,075}$$

**Check (year by year):**
- After $1$ year: $30{,}000 + 5\%$ of $30{,}000 = 30{,}000 + 1{,}500 = 31{,}500$
- After $2$ years: $31{,}500 + 5\%$ of $31{,}500 = 31{,}500 + 1{,}575 = \mathbf{33,075}$ ✅

Notice: if someone assumed $5\%$ meant "$1{,}500$ new people every year," they would get $33{,}000$. The real answer is $33{,}075$ because the second year's $5\%$ applies to the **already larger** population.

### Example 2: Doubling Bacteria

A petri dish holds $500$ bacteria, and the count **doubles every hour**. How many bacteria are present after $3$ hours?

Doubling means $100\%$ growth per hour, so the growth factor is $1 + \frac{100}{100} = 2$.

$$V = 500 \times 2^3 = 500 \times 8 = \mathbf{4,000}$$

**Check:** $500 \rightarrow 1{,}000 \rightarrow 2{,}000 \rightarrow \mathbf{4,000}$ ✅

Here the period is an **hour**, not a year. The formula does not care whether a period is a year, a week, or an hour — as long as the rate and the period use the same unit of time!

### Example 3: Height of a Plant

A plant is $40\text{ cm}$ tall and grows **$10\%$ taller every week**. How tall will it be after $2$ weeks?

$$V = 40 \times (1.10)^2 = 40 \times 1.21 = \mathbf{48.4\text{ cm}}$$

**Check:** $40 + 4 = 44\text{ cm}$, then $44 + 4.4 = \mathbf{48.4\text{ cm}}$ ✅

---

## Part B: Depreciation (Decreasing Value)

Now flip the direction: when an item loses $r\%$ of its value each year, $(100 - r)\%$ of its value remains after each year. So instead of $1 + \frac{r}{100}$, the multiplier becomes **$1 - \frac{r}{100}$**:

$$V = P\left(1 - \frac{r}{100}\right)^n$$

*(Or, written with $A$ for final value: $A = P\left(1 - \frac{r}{100}\right)^n$.)*

Only **one sign** changes: growth uses **$+$**, while depreciation uses **$-$**.

### Example 4: Value of a Machine

A piece of workshop machinery costs \$50,000 and depreciates at **$10\%$ per year**. What is its value after $2$ years?

$$V = 50{,}000 \times \left(1 - \frac{10}{100}\right)^2 = 50{,}000 \times (0.9)^2 = 50{,}000 \times 0.81 = \mathbf{\$40,500}$$

**Check:**
- After $1$ year: $50{,}000 - 5{,}000 = 45{,}000$
- After $2$ years: $45{,}000 - 4{,}500 = \mathbf{\$40,500}$ ✅

### Example 5: Liam's Vehicle

Liam's \$80,000 vehicle depreciates at $20\%$ per year. What is it worth after $3$ years?

$$V = 80{,}000 \times \left(1 - \frac{20}{100}\right)^3 = 80{,}000 \times (0.8)^3 = 80{,}000 \times 0.512 = \mathbf{\$40,960}$$

**Check:**
- After $1$ year: $80{,}000 - 16{,}000 = 64{,}000$
- After $2$ years: $64{,}000 - 12{,}800 = 51{,}200$
- After $3$ years: $51{,}200 - 10{,}240 = \mathbf{\$40,960}$ ✅

Liam thought $3$ years at $20\%$ meant losing $20\% \times 3 = 60\%$, leaving \$32,000. Yet it is still worth \$40,960! Why? Because each year's $20\%$ drop is taken from the **already smaller** value, so the dollar drop shrinks every year (\$16,000, then \$12,800, then \$10,240).

---

## Part C: Reverse Problems

### Finding a Past Value

Sometimes we are given the value **today** and asked what it was some years ago. The formula is unchanged — simply treat the earlier value $P$ as the unknown.

### Example 6: What Was the Population Before?

A town's population today is $13{,}520$. It has been growing at $4\%$ per year. What was its population $2$ years ago?

$$13{,}520 = P \times (1.04)^2 = P \times 1.0816$$

$$P = 13{,}520 \div 1.0816 = \mathbf{12,500}$$

**Check:** $12{,}500 \rightarrow 13{,}000 \rightarrow \mathbf{13,520}$ ✅

### Example 7: What Did the Machine Cost Originally?

A machine is worth \$72,900 today after depreciating at $10\%$ per year for $2$ years. What was its price $2$ years ago?

$$72{,}900 = P \times (0.9)^2 = P \times 0.81$$

$$P = 72{,}900 \div 0.81 = \mathbf{\$90,000}$$

**Check:** $90{,}000 \rightarrow 81{,}000 \rightarrow \mathbf{72,900}$ ✅

### Finding the Rate

### Example 8: Growth Rate

An investment of \$25,000 grows to \$28,090 in $2$ years. What was the annual growth rate?

$$28{,}090 = 25{,}000 \times \left(1 + \frac{r}{100}\right)^2$$

$$\left(1 + \frac{r}{100}\right)^2 = \frac{28{,}090}{25{,}000} = 1.1236$$

Take the square root: $1 + \frac{r}{100} = 1.06$ (since $1.06 \times 1.06 = 1.1236$), so $r = \mathbf{6\%}$.

**Check:** $25{,}000 \rightarrow 26{,}500 \rightarrow \mathbf{28,090}$ ✅

### Example 9: Depreciation Rate

A \$60,000 machine drops in value to \$48,600 after $2$ years. Find the annual rate of depreciation.

$$\left(1 - \frac{r}{100}\right)^2 = \frac{48{,}600}{60{,}000} = 0.81$$

Take the square root: $1 - \frac{r}{100} = 0.9$, so $r = \mathbf{10\%}$.

**Check:** $60{,}000 \rightarrow 54{,}000 \rightarrow \mathbf{48,600}$ ✅

*(Note: At this level, the ratio simplifies to a clean perfect square. Harder roots come in higher grades.)*

---

## Part D: Different Rates in Different Years (Mixing Growth and Decline)

In Topic 4, we multiplied each year's growth factor in order. Here, some years may grow $\left(1 + \frac{r}{100}\right)$ while others shrink $\left(1 - \frac{r}{100}\right)$!

### Example 10: Rising First, Then Falling

A town has $50{,}000$ residents. In the first year the population rises by $10\%$, and in the second year it falls by $5\%$. What is the population after $2$ years?

$$V = 50{,}000 \times \left(1 + \frac{10}{100}\right) \times \left(1 - \frac{5}{100}\right) = 50{,}000 \times 1.10 \times 0.95 = \mathbf{52,250}$$

**Check:** $50{,}000 \rightarrow 55{,}000 \rightarrow 55{,}000 - 2{,}750 = \mathbf{52,250}$ ✅

### Example 11: Up 10%, Then Down 10%

A town has $10{,}000$ people. Its population rises by $10\%$ in Year 1 and falls by $10\%$ in Year 2.

$$V = 10{,}000 \times 1.10 \times 0.90 = 10{,}000 \times 0.99 = \mathbf{9,900}$$

**Check:** $10{,}000 \rightarrow 11{,}000 \rightarrow 11{,}000 - 1{,}100 = \mathbf{9,900}$ ✅

The population **did not return to $10{,}000$** — it ended $100$ lower, a **net $1\%$ decrease**! Why? The $10\%$ increase was $10\%$ of $10{,}000$ ($+1{,}000$), whereas the $10\%$ decrease was $10\%$ of the **larger** $11{,}000$ ($-1{,}100$). The drop took away more than the rise added!

In the exact same way, going up $20\%$ and then down $20\%$ gives $1.2 \times 0.8 = 0.96$, a net **$4\%$ decrease**.

---

## Part E: Where This Appears in Real Life

- **Inflation:** A catering tray costs \$100 today, and prices rise by $8\%$ per year. In $2$ years it costs $100 \times (1.08)^2 = 100 \times 1.1664 = \mathbf{\$116.64}$. That is why \$100 buys less in the future than it does today.
- **Resale value of phones and cars:** Buy a \$30,000 car (or high-end equipment) that depreciates $20\%$ per year, and after $2$ years it is worth $30{,}000 \times 0.64 = \$19,200$. Used-car dealers price vehicles this way.
- **Populations and bacteria:** Public health planners and city governments rely on these curves to plan hospitals, schools, and supplies.

### Growth Rate and Decline Rate: Two Sides of the Same Coin

Both use the exact same formula — only the sign differs. Keep the multiplier clearly in mind:
- Growth rate $r\%$: multiplier $= \mathbf{1 + \frac{r}{100}}$ (greater than $1$)
- Decline rate $r\%$: multiplier $= \mathbf{1 - \frac{r}{100}}$ (less than $1$)

Whenever the factor is greater than $1$, the quantity grows; whenever it is less than $1$, the quantity shrinks. One glance at the factor tells you which way it moves!

---

## Common Pitfalls to Avoid

1. **Mistake 1: Using $+$ in a depreciation problem.**
   \$50,000 depreciating at $10\%$ for $2$ years. Using $(1 + 0.10)^2$ gives \$60,500 — which is an *increase*! Correct: $(1 - 0.10)^2$ gives **\$40,500**.

2. **Mistake 2: Thinking "$+10\%$ then $-10\%$ cancels out."**
   In Example 11, $10{,}000$ dropped to $9{,}900$. The two percentages apply to different bases ($10{,}000$ and $11{,}000$), so they never cancel.

3. **Mistake 3: Assuming $n$ years at $r\%$ depreciation means losing $n \times r\%$ in total.**
   Liam's \$80,000 vehicle did not lose $3 \times 20\% = 60\%$ (\$48,000), which would leave \$32,000. It actually ended at **\$40,960**.

4. **Mistake 4: Rounding off halfway through.**
   Suppose a town of $2{,}010$ residents grows at $5\%$ per year for $2$ years.
   - Correct: $2{,}010 \times 1.1025 = \mathbf{2,216.025}$, rounded at the end to **$2{,}216$**.
   - Wrong: rounding after Year 1 turns $2{,}110.5$ into $2{,}111$, and then $2{,}111 \times 1.05 = 2{,}216.55 \approx 2{,}217$ — **off by $1$!**
   Always finish the entire calculation first, and round **only at the very end**. (Since people cannot be fractions, round population answers to the nearest whole number at the end.)

5. **Mistake 5: Multiplying instead of dividing in reverse problems.**
   "Population today is $13{,}520$" means $13{,}520 = P \times 1.0816$. To solve for $P$, **divide** by $1.0816$, do not multiply!

---

## Quick Recap

- **Growth:** $V = P\left(1 + \frac{r}{100}\right)^n$. The exact same idea as CI, applied to any growing quantity.
- **Depreciation:** $V = P\left(1 - \frac{r}{100}\right)^n$. Only the sign flips.
- **Reverse problems:** Past value $P = V \div \left(1 \pm \frac{r}{100}\right)^n$.
- **Finding the rate:** Compute $\frac{V}{P}$, take the appropriate root, and compare with $1$.
- **Mixed rates across years:** Multiply each year's individual factor in sequence.
- **Up $10\%$, then down $10\%$** $= 1.1 \times 0.9 = 0.99$ — a **net $1\%$ decrease**, never back to the start.
- **Inflation** is a form of growth; vehicle and electronics values follow depreciation.
- Never round in the middle of a calculation.

---

## Practice Questions

1. The population of a town is $15{,}000$ and grows at $4\%$ per year. Find the population after $2$ years.

2. A car bought for \$600,000 (a collector's luxury model) loses $15\%$ of its value every year. Find its value after $2$ years.

3. A lab dish has $1{,}000$ bacteria, and the number doubles every hour. How many bacteria are there after $4$ hours?

4. The population of a town is $13{,}310$ now, after growing at $10\%$ per year for $3$ years. What was it $3$ years ago?

5. A machine bought for \$50,000 is worth \$32,000 after $2$ years. Find the yearly rate of depreciation.

6. The population of a city is $40{,}000$. In the first year it increases by $20\%$, and in the second year it decreases by $10\%$. Find the population at the end of $2$ years.

7. Say whether each statement is true or false, giving a reason:
   (a) If a value rises by $20\%$ and then falls by $20\%$, it returns to the starting value.
   (b) A value that depreciates at $10\%$ per year loses exactly $20\%$ of its original value in $2$ years.
   (c) A plant $10\text{ cm}$ tall whose height doubles every week is $80\text{ cm}$ tall after $3$ weeks.

8. A piece of equipment costing \$30,000 loses $20\%$ of its value every year. After how many whole years will its value first fall below half of the original price?

9. A gourmet meal box costs \$50 and prices rise by $5\%$ per year. Find the price after $2$ years, rounded to the nearest cent.

10. A town had $2{,}010$ residents and grows at $5\%$ per year. Why is it better to compute the $2$-year population as $2{,}010 \times 1.1025$ rather than rounding after the first year? Compute both ways and compare.

### Answers

1. $V = 15{,}000 \times (1.04)^2 = 15{,}000 \times 1.0816 = \mathbf{16,224}$
   Check: $15{,}000 \rightarrow 15{,}600 \rightarrow 15{,}600 + 624 = \mathbf{16,224}$ ✅

2. $V = 600{,}000 \times (0.85)^2 = 600{,}000 \times 0.7225 = \mathbf{\$433,500}$
   Check: $600{,}000 \rightarrow 510{,}000 \rightarrow 510{,}000 - 76{,}500 = \mathbf{433,500}$ ✅

3. $V = 1{,}000 \times 2^4 = 1{,}000 \times 16 = \mathbf{16,000}$
   Check: $1{,}000 \rightarrow 2{,}000 \rightarrow 4{,}000 \rightarrow 8{,}000 \rightarrow \mathbf{16,000}$ ✅

4. $13{,}310 = P \times (1.1)^3 = P \times 1.331$, so $P = 13{,}310 \div 1.331 = \mathbf{10,000}$
   Check: $10{,}000 \rightarrow 11{,}000 \rightarrow 12{,}100 \rightarrow \mathbf{13,310}$ ✅

5. $\left(1 - \frac{r}{100}\right)^2 = \frac{32{,}000}{50{,}000} = 0.64$, so $1 - \frac{r}{100} = 0.8$ and **$\mathbf{r = 20\%}$**
   Check: $50{,}000 \rightarrow 40{,}000 \rightarrow \mathbf{32,000}$ ✅

6. $V = 40{,}000 \times 1.2 \times 0.9 = 40{,}000 \times 1.08 = \mathbf{43,200}$
   Check: $40{,}000 \rightarrow 48{,}000 \rightarrow 48{,}000 - 4{,}800 = \mathbf{43,200}$ ✅

7. (a) **False** ❌. $1.2 \times 0.8 = 0.96$, a $4\%$ net decrease (for example, $100 \rightarrow 120 \rightarrow 96$).
   (b) **False** ❌. $100 \rightarrow 90 \rightarrow 81$, a total drop of $19\%$, not $20\%$, because Year 2's drop is $10\%$ of $90$ ($9$).
   (c) **True** ✅. $10 \rightarrow 20 \rightarrow 40 \rightarrow 80\text{ cm}$.

8. Half of $\$30,000 = \$15,000$. Year by year: $30{,}000 \rightarrow 24{,}000 \rightarrow 19{,}200 \rightarrow 15{,}360 \rightarrow 12{,}288$.
   After $3$ years it is \$15,360 (still above \$15,000). After $4$ years it is \$12,288 (below \$15,000). So after **$4$ years**.

9. $V = 50 \times (1.05)^2 = 50 \times 1.1025 = \mathbf{\$55.125 \approx \$55.13}$
   Check: $50 \rightarrow 52.50 \rightarrow 52.50 + 2.625 = 55.125$ ✅

10. Exact method: $2{,}010 \times 1.1025 = 2{,}216.025$, giving **$2{,}216$**.
    Rounding partway: $2{,}010 \times 1.05 = 2{,}110.5 \approx 2{,}111$, then $2{,}111 \times 1.05 = 2{,}216.55 \approx \mathbf{2,217}$.
    They differ by $1$ because the rounding error from Year 1 carried forward and got multiplied in Year 2. Always round only at the very end.

---

Now you see that Compound Interest is far bigger than banking: it governs every quantity that grows or shrinks relative to its own current value. You have got this!

---

# Chapter Wrap-up: Compound Interest

| Topic | What You Learned | Key Takeaway |
|---|---|---|
| 1. Simple Interest vs. Compound Interest | SI recap, and how CI adds earned interest back into the principal | Under CI, each year's interest is calculated on the previous year's ending amount |
| 2. Year-by-Year Method | Building a year-wise table, $2$-year $\text{CI} - \text{SI}$, reverse reasoning, loan part payments | Best for small $n$ and partial repayments; unpaid balance after a payment becomes next year's principal |
| 3. Formula $A = P\left(1 + \frac{r}{100}\right)^n$ | Direct formula, $\text{CI} = A - P$, solving for $P$, $r$, or $n$, doubling and tripling | Saves work for large $n$; doubling in $n$ years means $4\times$ in $2n$ years |
| 4. Half-Yearly, Quarterly, and Varying Rates | Adjusting rate and periods for compounding frequency, varying annual rates, fractional time | Half-yearly: $\frac{r}{2}$ and $2n$; quarterly: $\frac{r}{4}$ and $4n$ |
| 5. Growth and Depreciation | Populations, bacteria, and vehicle depreciation, plus reverse problems | Growth uses $+$, depreciation uses $-$; $+10\%$ then $-10\%$ does not return to the start |

### All Formulas

| Concept | Formula |
|---|---|
| Simple Interest | $\text{SI} = \frac{P \times R \times T}{100}$ |
| $\text{CI} - \text{SI}$ ($2$ years only) | $P\left(\frac{r}{100}\right)^2$ |
| Compound Interest | $\text{CI} = A - P$ |
| Amount (annual compounding) | $A = P\left(1 + \frac{r}{100}\right)^n$ |
| General compounding ($k$ times/year, decimal rate $r$) | $A = P\left(1 + \frac{r}{k}\right)^{kt}$ |
| Half-yearly compounding | $A = P\left(1 + \frac{r}{200}\right)^{2n}$ |
| Quarterly compounding | $A = P\left(1 + \frac{r}{400}\right)^{4n}$ |
| Varying annual rates | $A = P\left(1 + \frac{r_1}{100}\right)\left(1 + \frac{r_2}{100}\right)\dots$ |
| Fractional time (annual compounding, e.g., $2\frac{1}{2}$ years) | Compound for complete years, then add SI on that amount for the remaining fraction |
| Growth | $V = P\left(1 + \frac{r}{100}\right)^n$ |
| Depreciation | $V = P\left(1 - \frac{r}{100}\right)^n$ |
| Finding past value ($P$) | $P = V \div \left(1 \pm \frac{r}{100}\right)^n$ |

---

Whether it is savings accounts or town populations, bacteria cultures or vehicle values, anything that grows or shrinks in step with its current size is now completely within your reach.
