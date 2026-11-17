# Chapter: Compound Interest (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [compound-interest.md](compound-interest.md)** (which covers Topic 1: vocabulary such as principal, rate, and amount, a simple interest recap, the idea of "interest on interest," and how SI compares with CI).
> **Topics covered in this file:**
> 2. Compound Interest Without a Formula (Year-by-Year Calculation)

---

# Topic 2: Compound Interest Without a Formula (Year-by-Year Calculation)

In Topic 1, we saw that in compound interest, interest is not charged only on the starting money — it is also charged on **all the interest accumulated so far**. On Maya's \$10,000 at $10\%$ over $3$ years, SI came to \$3,000 while CI reached \$3,310: identical in Year 1, with CI pulling ahead afterward. We also met the key terms $P$, $r$, $n$, and $A$.

Now comes the practical question: **how do we actually compute CI?** In this topic, we will not use any shortcut formula. Instead, we will build one straightforward habit: **calculate one year at a time**, just like a credit union bookkeeper updating a ledger each year. Doing it by hand reveals exactly how compound interest works, and sets up the formula we will derive next.

---

## Leo's Utility Trailer

**Leo** runs a small landscaping business and needs a sturdy new **utility trailer** to haul equipment. The trailer costs \$50,000. Since he does not have the full amount on hand, he borrows \$50,000 from his local credit union at **$8\%$ per annum**. The loan officer explains one key rule: "At the end of every year, the interest for that year is added to your loan balance. Next year's interest will be calculated on that new, larger balance."

Leo's daughter **Elena**, who is in Class 9, says, "Dad, hang on — let me make a year-by-year ledger table so we can see every dollar."

**Year 1:**
- Starting loan balance: \$50,000
- Interest: $8\%$ of $\$50,000 = \$4,000$
- Balance owed at the end of Year 1: $\$50,000 + \$4,000 = \mathbf{\$54,000}$

Leo says, "So Year 2's interest will be \$4,000 too, right?"

Elena reminds him of the credit union's rule: "No, Dad. In the ledger now, the principal isn't \$50,000 anymore — it's **\$54,000**. So Year 2's interest is calculated on \$54,000."

**Year 2:**
- Interest: $8\%$ of $\$54,000 = \$4,320$
- Balance at the end of Year 2: $\$54,000 + \$4,320 = \mathbf{\$58,320}$

Look at that: Year 2's interest is \$4,320 instead of \$4,000. That extra \$320 is pure "interest on interest" — $8\%$ of Year 1's \$4,000 interest ($8\%$ of $\$4,000 = \$320$).

In this topic, we will master this ledger habit: **writing the principal, interest, and ending amount separately for each year**. Later in this topic, we will revisit Leo's loan when he makes a partial repayment partway through.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Principal for the year** | The balance at the start of that year on which interest is calculated | Year 2's principal is \$54,000 |
| **Interest for the year** | Interest for that single year only: $\text{Principal for the year} \times \frac{r}{100}$ | \$4,320 |
| **Amount at year-end** | Principal for that year $+$ interest for that year | \$58,320 |
| **Next year's principal** | The ending amount of one year becomes the starting principal of the next year | \$54,000 |
| **Compound Interest (CI)** | Final amount $-$ original principal | $\$58,320 - \$50,000 = \$8,320$ |
| **Part payment** | Paying back part of a loan before the full term ends | Paying \$24,000 at the end of Year 1 |
| **Remaining balance** | The loan principal still owed after subtracting a part payment | $\$54,000 - \$24,000 = \$30,000$ |

---

## Part A: The Year-by-Year Method

For each year, simply repeat three small steps:

> **Step 1:** $\text{Interest} = \text{Principal for that year} \times \frac{r}{100}$
> **Step 2:** $\text{Amount} = \text{Principal for that year} + \text{Interest}$
> **Step 3:** That ending Amount becomes **next year's Principal**. Return to Step 1.

Repeat those three steps for as many years as the problem requires. At the end:

> **Compound Interest $=$ Final Amount $-$ Original Principal**

### The Table Layout

Elena uses this exact table layout for every problem:

| Year | Principal (start of year) | Interest | Amount (end of year) |
|---|---|---|---|
| $1$ | $P$ | $P \times \frac{r}{100}$ | $P + \text{Interest}$ |
| $2$ | Previous year's amount | $r\%$ of that | $\text{Principal} + \text{Interest}$ |
| $3$ | Previous year's amount | $r\%$ of that | $\text{Principal} + \text{Interest}$ |

**Important check:** In a compound interest table, the "Principal" column **changes in every row**. If you ever notice the same number repeated down the Principal column, you are calculating Simple Interest, not Compound Interest!

### Complete Table for Leo's Loan

| Year | Principal | Interest ($8\%$) | Amount |
|---|---|---|---|
| $1$ | \$50,000 | $50{,}000 \times \frac{8}{100} = \$4,000$ | \$54,000 |
| $2$ | \$54,000 | $54{,}000 \times \frac{8}{100} = \$4,320$ | \$58,320 |

$\text{CI (2 years)} = 58{,}320 - 50{,}000 = \mathbf{\$8,320}$

**Check:** Add the two years' interest: $4{,}000 + 4{,}320 = 8{,}320$ ✅. So CI also equals the sum of each year's interest.

Notice that you have two ways to find CI, and both must give the exact same answer:
1. Final amount $-$ original principal
2. Sum of each year's interest

Compute with one method, and verify with the other!

---

## Part B: 2-Year and 3-Year Problems

### Example 1: \$8,000 at 5% per annum for 2 Years

| Year | Principal | Interest ($5\%$) | Amount |
|---|---|---|---|
| $1$ | \$8,000 | $8{,}000 \times \frac{5}{100} = \$400$ | $8{,}000 + 400 = \$8,400$ |
| $2$ | \$8,400 | $8{,}400 \times \frac{5}{100} = \$420$ | $8{,}400 + 420 = \$8,820$ |

- Final Amount $= \mathbf{\$8,820}$
- $\text{CI} = 8{,}820 - 8{,}000 = \mathbf{\$820}$

**Check:** $400 + 420 = 820$ ✅

### Example 2: \$25,000 at 12% per annum for 2 Years

| Year | Principal | Interest ($12\%$) | Amount |
|---|---|---|---|
| $1$ | \$25,000 | $25{,}000 \times \frac{12}{100} = \$3,000$ | \$28,000 |
| $2$ | \$28,000 | $28{,}000 \times \frac{12}{100} = \$3,360$ | \$31,360 |

- Final Amount $= \mathbf{\$31,360}$
- $\text{CI} = 31{,}360 - 25{,}000 = \mathbf{\$6,360}$

**Check:** $3{,}000 + 3{,}360 = 6{,}360$ ✅

### Example 3: \$15,000 at 8% per annum for 3 Years

For $3$ years, our table needs $3$ rows.

| Year | Principal | Interest ($8\%$) | Amount |
|---|---|---|---|
| $1$ | \$15,000 | $15{,}000 \times \frac{8}{100} = \$1,200$ | \$16,200 |
| $2$ | \$16,200 | $16{,}200 \times \frac{8}{100} = \$1,296$ | \$17,496 |
| $3$ | \$17,496 | $17{,}496 \times \frac{8}{100} = \$1,399.68$ | \$18,895.68 |

- Final Amount $= \mathbf{\$18,895.68}$
- $\text{CI} = 18{,}895.68 - 15{,}000 = \mathbf{\$3,895.68}$

**Check:** $1{,}200 + 1{,}296 + 1{,}399.68 = 3{,}895.68$ ✅

Notice that Year 3's interest includes cents (\$1,399.68). **Do not round it off partway through** — keep the full decimal. We will talk more about this in *Common Pitfalls to Avoid*.

**Notice something else:** For $3$ years, we repeated the same calculation $3$ times. For a $10$-year investment, we would need $10$ rows! That is tedious, though doing it by hand first makes it crystal clear what happens inside each year.

---

## Part C: The Difference Between CI and SI in 2 Years

In Topic 1, we saw that CI is larger than SI. Now let us see **by how much**, and **why**.

### Example 4: \$8,000 at 5% for 2 Years (Revisiting Example 1)

- **SI** (principal stays \$8,000 every year): $8{,}000 \times \frac{5}{100} = \$400$ per year, so for $2$ years: **\$800**
- **CI** (from Example 1): **\$820**
- **Difference** $= 820 - 800 = \mathbf{\$20}$

### Where Did That \$20 Come From?

Put both years' interest side by side:

| Year | SI Interest | CI Interest |
|---|---|---|
| $1$ | \$400 | \$400 |
| $2$ | \$400 | \$420 |

There is no difference in Year 1. In Year 2, CI earns \$20 more. Where did \$20 come from? It is **$5\%$ interest on Year 1's \$400 interest**: $400 \times \frac{5}{100} = \$20$. That extra \$20 is purely the "interest on interest" portion!

### Why This Always Works (For 2 Years Only)

Year 1's interest is $P \times \frac{r}{100}$. In Year 2, we earn $r\%$ on that interest too:

$$\text{Difference} = \left(P \times \frac{r}{100}\right) \times \frac{r}{100} = P \times \left(\frac{r}{100}\right) \times \left(\frac{r}{100}\right)$$

We write this compactly as **$P\left(\frac{r}{100}\right)^2$**, where the $^2$ simply means "multiply $\frac{r}{100}$ by itself once."

**Check 1:** $P = 8{,}000$, $r = 5$. Then $\frac{r}{100} = 0.05$, and $0.05 \times 0.05 = 0.0025$. So $8{,}000 \times 0.0025 = \mathbf{\$20}$ ✅ (matching the difference above).

**Check 2:** Revisiting Example 2 (\$25,000 at $12\%$):
- $\text{SI} = 25{,}000 \times \frac{12}{100} = \$3,000$ per year, so $2$ years $= \mathbf{\$6,000}$
- $\text{CI} = \mathbf{\$6,360}$ (from Example 2)
- $\text{Difference} = 6{,}360 - 6{,}000 = \mathbf{\$360}$
- Shortcut: $\frac{12}{100} = 0.12$, $0.12 \times 0.12 = 0.0144$, so $25{,}000 \times 0.0144 = \mathbf{\$360}$ ✅

Both give \$360! This shortcut is very handy whenever a question asks directly for **$\text{CI} - \text{SI}$ over $2$ years**. For $3$ years or more, this two-year shortcut does not apply — use the full table (or the formula in Topic 3).

---

## Part D: Reverse Problems (By Reasoning)

Sometimes a problem does not ask you to find CI; instead, it gives you part of the result and asks you to work backwards to find the principal or the rate. You do not need a formula here — just remember: **each year's interest $= r\%$ of that year's principal**.

### Example 5: Given First-Year Interest, Find the Principal

A loan charges $6\%$ per annum compound interest. The interest for the first year is **\$2,400**. What was the principal?

**Reasoning:** $6\%$ means "\$6 for every \$100." So for every $100$ parts of the principal, there are $6$ parts of interest. The first year's interest is \$2,400, which equals $6\%$ of the starting principal:
- $6\% \leftrightarrow \$2,400$, so $1\% \leftrightarrow 2{,}400 \div 6 = \$400$
- $100\% \leftrightarrow 400 \times 100 = \mathbf{\$40,000}$

$\text{Principal} = \mathbf{\$40,000}$

**Check:** $40{,}000 \times \frac{6}{100} = \$2,400$ ✅

If you like, continue the table to find the $2$-year CI:

| Year | Principal | Interest ($6\%$) | Amount |
|---|---|---|---|
| $1$ | \$40,000 | \$2,400 | \$42,400 |
| $2$ | \$42,400 | $42{,}400 \times \frac{6}{100} = \$2,544$ | \$44,944 |

$\text{CI} = 44{,}944 - 40{,}000 = \mathbf{\$4,944}$ (Check: $2{,}400 + 2{,}544 = 4{,}944$ ✅)

### Example 6: Given Two Years' Amounts, Find the Rate

A savings account earns compound interest annually. The amount at the end of the first year is \$21,000, and at the end of the second year it is \$22,050. Find the interest rate.

**Reasoning:** Year 2's principal $=$ Year 1's ending amount $= \$21,000$. By the end of Year 2, the amount is \$22,050. Therefore, the interest earned during Year 2 is:

$$22{,}050 - 21{,}000 = \mathbf{\$1,050}$$

This \$1,050 of interest was earned on a principal of \$21,000. Convert that to a percentage:

$$\text{Rate} = \frac{A_2 - A_1}{A_1} \times 100 = \frac{1{,}050}{21{,}000} \times 100$$

Since $1{,}050 \div 21{,}000 = 0.05$, we get $0.05 \times 100 = \mathbf{5\%}$.

**Check:** $21{,}000 \times \frac{5}{100} = \$1,050$, and $21{,}000 + 1{,}050 = \$22,050$ ✅

Here $A_1$ and $A_2$ are just short labels for "amount after Year 1" and "amount after Year 2." The key insight is simple: **Year 2's interest as a percentage of Year 1's amount is the annual rate**.

Notice also: the starting principal must have been \$20,000 (since $5\%$ of $\$20,000 = \$1,000$, giving $\$21,000$ ✅) — yet we did not even need to know the starting principal to find the rate!

---

## Part E: Repaying a Loan with a Part Payment in Between

Let us return to Leo's \$50,000 trailer loan ($8\%$ per annum, compounded yearly).

At the end of Year 1, Leo has a busy season and brings in extra income. He pays the credit union **\$24,000** right away, and plans to clear the rest of the loan at the end of Year 2. How much will he have to pay at the end of Year 2?

**Year 1:** (from our earlier table)
- Principal \$50,000, interest \$4,000, ending amount **\$54,000**

**Part payment:** Leo pays \$24,000, so the remaining balance is:
- $54{,}000 - 24{,}000 = \mathbf{\$30,000}$

**Year 2:** Now the balance in the credit union's ledger is **\$30,000** (not \$54,000!), because \$24,000 has already been paid off.
- $\text{Interest} = 30{,}000 \times \frac{8}{100} = \mathbf{\$2,400}$
- $\text{Amount} = 30{,}000 + 2{,}400 = \mathbf{\$32,400}$

In table form:

| Year | Principal | Interest ($8\%$) | Amount | Paid by Leo | Remaining Balance |
|---|---|---|---|---|---|
| $1$ | \$50,000 | \$4,000 | \$54,000 | \$24,000 | \$30,000 |
| $2$ | \$30,000 | \$2,400 | \$32,400 | \$32,400 | \$0 |

**At the end of Year 2, Leo must pay \$32,400.**

**Total paid overall:** $24{,}000 + 32{,}400 = \mathbf{\$56,400}$

**Check (how much did he save?):** Without the part payment, Part A showed he would owe \$58,320 at the end of Year 2. Instead, he paid \$56,400 in total. Savings: $58{,}320 - 56{,}400 = \mathbf{\$1,920}$ ✅

Why did he save \$1,920? Because in Year 2, interest was charged on \$30,000 instead of \$54,000 — a reduction of \$24,000, and $8\%$ of $\$24,000 = \$1,920$. Paying down principal early stops interest from accruing on that portion!

**Rule to remember:** Whenever a part payment is made partway through, **subtract the payment** from that year's ending amount; what remains becomes the principal for the next year.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Calculating interest on the original principal every year (that is SI!).**
   For \$8,000 at $5\%$ for $2$ years:
   - Wrong: $8{,}000 \times \frac{5}{100} = \$400$ each year, so $400 + 400 = \$800$. That is **SI**.
   - Correct: Year 2's principal is \$8,400, giving Year 2 interest of \$420, so $\text{CI} = 400 + 420 = \mathbf{\$820}$.
   Ask yourself: *"Does the Principal column change in every row of my table?"* If not, you are not doing CI.

2. **Mistake 2: Rounding off too early.**
   In Example 3, Year 3's interest was \$1,399.68. If you round that immediately to \$1,400, your CI becomes \$3,896 instead of the exact \$3,895.68. That looks tiny here, yet over longer calculations early rounding errors compound and cause answers to miss by dollars.
   **Good habit:** Keep exact cents at every intermediate step. Round **only at the very end**, and only if the question asks for it.

3. **Mistake 3: Confusing Amount with Interest.**
   In Example 1, the \$8,820 at the end of Year 2 is the **amount** (principal $+$ interest), while **\$820** is the **compound interest**. If a question asks for "compound interest" and you write \$8,820, that is incorrect. Always check whether the question asks for **amount** or **interest**:
   - $\text{Amount} = \text{Principal} + \text{Interest}$
   - $\text{CI} = \text{Amount} - \text{Principal}$

4. **Mistake 4: Calculating interest on the wrong principal.**
   Some students write \$8,400 in the Year 2 Principal cell, yet accidentally still take $5\%$ of \$8,000. Always apply the rate to **that year's starting principal** (which is the previous year's ending amount).

5. **Mistake 5: Ignoring a part payment when starting the next year.**
   In Leo's loan, after paying \$24,000, charging Year 2 interest on \$54,000 (\$4,320) is wrong. The new principal is **\$30,000**.

---

## Quick Recap

- To find CI without a formula, build a **year-by-year table**: Year, Principal, Interest, Amount.
- Each year: $\text{Interest} = \text{Principal} \times \frac{r}{100}$, $\text{Amount} = \text{Principal} + \text{Interest}$, and that Amount becomes **next year's Principal**.
- **$\text{CI} = \text{Final Amount} - \text{Original Principal}$** (which also equals the sum of each year's interest).
- Check: Both $(\text{Final Amount} - \text{Original Principal})$ and $(\text{Sum of yearly interest})$ must match.
- **For $2$ years only: $\text{CI} - \text{SI} = P\left(\frac{r}{100}\right)^2$**, which represents the "interest on interest" piece.
- **Reverse problems:** Given first-year interest, $\text{Principal} = \text{Interest} \div r \times 100$. Given two consecutive years' amounts $A_1$ and $A_2$, $\text{Rate} = \frac{A_2 - A_1}{A_1} \times 100$.
- **Part payments:** Subtract the payment from the year-end amount; the remainder is next year's principal.
- Pitfalls: reusing the original principal (gives SI), rounding early, mixing up amount and interest.

---

## Practice Questions

1. Find the compound interest on \$12,000 for $2$ years at $5\%$ per annum, with interest added to the principal at the end of each year. Show a year-wise table.

2. Find the amount and the compound interest on \$5,000 for $3$ years at $4\%$ per annum. Do not round off any value until the final answer.

3. For \$16,000 at $5\%$ per annum for $2$ years, find the simple interest and the compound interest. Verify that their difference equals $P\left(\frac{r}{100}\right)^2$.

4. The interest for the first year on a sum at $9\%$ per annum is \$1,800. Find the sum. Then find the amount at the end of the second year if the interest is compounded yearly.

5. A sum earns compound interest yearly. Its amount at the end of the first year is \$33,000 and at the end of the second year is \$35,640. Find the rate of interest.

6. **Ms. Elena** borrows \$40,000 at $5\%$ per annum, with interest compounded yearly. At the end of the first year, she pays back \$22,000. How much must she pay at the end of the second year to clear the loan completely? What is the total amount she pays?

7. **Liam** says: *"The compound interest on \$20,000 for $2$ years at $5\%$ per annum is \$2,000, because $20{,}000 \times \frac{5}{100} = 1{,}000$ per year."* Find his mistake and give the correct compound interest.

8. State True or False:
   (a) In compound interest, the amount at the end of one year becomes the principal for the next year.
   (b) In a $2$-year problem, the interest for the second year is always the same as the interest for the first year.
   (c) For $2$ years, $\text{CI} - \text{SI} = P\left(\frac{r}{100}\right)^2$.
   (d) The compound interest on a sum is equal to its amount at the end.

### Answers

1. 
   | Year | Principal | Interest ($5\%$) | Amount |
   |---|---|---|---|
   | $1$ | \$12,000 | $12{,}000 \times \frac{5}{100} = \$600$ | \$12,600 |
   | $2$ | \$12,600 | $12{,}600 \times \frac{5}{100} = \$630$ | \$13,230 |

   $\text{CI} = 13{,}230 - 12{,}000 = \mathbf{\$1,230}$
   Check: $600 + 630 = 1{,}230$ ✅

2. 
   | Year | Principal | Interest ($4\%$) | Amount |
   |---|---|---|---|
   | $1$ | \$5,000 | $5{,}000 \times \frac{4}{100} = \$200$ | \$5,200 |
   | $2$ | \$5,200 | $5{,}200 \times \frac{4}{100} = \$208$ | \$5,408 |
   | $3$ | \$5,408 | $5{,}408 \times \frac{4}{100} = \$216.32$ | \$5,624.32 |

   $\text{Amount} = \mathbf{\$5,624.32}$, $\text{CI} = 5{,}624.32 - 5{,}000 = \mathbf{\$624.32}$
   Check: $200 + 208 + 216.32 = 624.32$ ✅

3. $\text{SI} = 16{,}000 \times \frac{5}{100} = \$800$ per year, so for $2$ years: **\$1,600**.
   CI: Year 1 interest $= \$800$, amount $= \$16,800$. Year 2 interest $= 16{,}800 \times \frac{5}{100} = \$840$, amount $= \$17,640$. $\text{CI} = 17{,}640 - 16{,}000 = \mathbf{\$1,640}$.
   Difference $= 1{,}640 - 1{,}600 = \mathbf{\$40}$.
   Shortcut: $16{,}000 \times 0.05 \times 0.05 = 16{,}000 \times 0.0025 = \$40$ ✅

4. First-year interest $\$1,800 \leftrightarrow 9\%$. So $1\% \leftrightarrow \$200$, and $100\% \leftrightarrow \mathbf{\$20,000}$. Principal $= \mathbf{\$20,000}$.
   Check: $20{,}000 \times \frac{9}{100} = 1{,}800$ ✅
   Year 1 amount $= 20{,}000 + 1{,}800 = \$21,800$. Year 2 interest $= 21{,}800 \times \frac{9}{100} = \$1,962$. Year 2 amount $= 21{,}800 + 1{,}962 = \mathbf{\$23,762}$.
   Check: $\frac{1{,}962}{21{,}800} \times 100 = 9\%$ ✅

5. Year 2 interest $= 35{,}640 - 33{,}000 = \$2,640$.
   $\text{Rate} = \frac{2{,}640}{33{,}000} \times 100 = 0.08 \times 100 = \mathbf{8\%}$.
   Check: $33{,}000 \times \frac{8}{100} = 2{,}640$, and $33{,}000 + 2{,}640 = 35{,}640$ ✅

6. Year 1: interest $= 40{,}000 \times \frac{5}{100} = \$2,000$, amount $= \$42,000$.
   After paying \$22,000, remaining balance $= 42{,}000 - 22{,}000 = \$20,000$.
   Year 2: interest $= 20{,}000 \times \frac{5}{100} = \$1,000$, amount $= \$21,000$.
   At the end of Year 2 she must pay **\$21,000**. Total paid $= 22{,}000 + 21{,}000 = \mathbf{\$43,000}$.
   Check: Without the part payment, the $2$-year amount would be $42{,}000 + 2{,}100 = \$44,100$. Savings $= 44{,}100 - 43{,}000 = \$1,100$, which matches $5\%$ of $\$22,000 = \$1,100$ ✅

7. Liam calculated interest on the original \$20,000 in both years — that gives **Simple Interest** (\$2,000), not Compound Interest.
   Correct: Year 1 interest $= \$1,000$, amount $= \$21,000$. Year 2 interest $= 21{,}000 \times \frac{5}{100} = \$1,050$, amount $= \$22,050$. $\text{CI} = 22{,}050 - 20{,}000 = \mathbf{\$2,050}$.
   Check: difference $2{,}050 - 2{,}000 = 50$, and $20{,}000 \times 0.0025 = 50$ ✅

8. (a) **True** ✅. That is the core of compound interest.
   (b) **False** ❌. Year 2's principal is larger, so Year 2's interest is also larger (for example, \$400 then \$420).
   (c) **True** ✅. Holds specifically for $2$ years.
   (d) **False** ❌. $\text{Amount} = \text{Principal} + \text{CI}$. CI is only the interest earned.

---

Writing out a year-by-year table builds rock-solid intuition for what compound interest really does. Whenever you feel stuck, sketch the table: Year, Principal, Interest, Amount.

**What comes next?** A $2$- or $3$-row table is easy enough, yet what if a problem covers $10$ or $20$ years? Doing it row by row becomes exhausting. In Topic 3, we will compress that entire table into a single clean formula!
