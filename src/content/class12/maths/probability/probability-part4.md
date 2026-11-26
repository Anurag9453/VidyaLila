# Chapter 13: Probability (Part 4)

> **Class:** 12 | **Subject:** Mathematics  
> **Previous part:** [Probability (Part 3)](probability-part3.md)

---

Ratan mele mein ek coin-toss game dekh raha hai: teen coins uchhalo, jitne Heads aayein utne ₹10 milenge! Ab Ratan soch raha hai — agar entry fee ₹15 hai, toh kya ye game khelna faydemand hai? Iske liye humein har outcome (HHH, HHT, ...) ko ek number X (0, 1, 2, 3 Heads) se jodna padta hai, uski probability table banani padti hai, aur uska **average (Expected Value / Mean)** nikaalna padta hai! Isi ko **Random Variable & Probability Distribution** kehte hain!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Random Variable (X)** | Ek real-valued function jo sample space ke har outcome ko ek real number assign karta hai (jaise X = number of Heads) |
| **Probability Distribution** | X ki saari possible values xᵢ aur unki probabilities pᵢ = P(X = xᵢ) ki table, jahan **pᵢ ≥ 0** aur **Σ pᵢ = 1** |
| **Mean / Expectation E(X) ya μ** | Random variable ka weighted average: **μ = E(X) = Σ xᵢ pᵢ** |
| **Variance Var(X) ya σ²** | Spread ka measure: **Var(X) = E(X²) − [E(X)]² = Σ xᵢ² pᵢ − μ²** |
| **Standard Deviation (σ)** | Variance ka positive square root: **σ = √Var(X)** |

---

## 1. Valid Probability Distribution & Formulas

Ek table tabhi valid probability distribution hoti hai jab dono conditions poori hon:
1. Har probability non-negative ho: **pᵢ ≥ 0** for all i
2. Saari probabilities ka sum exactly 1 ho: **Σ pᵢ = 1**

```
  Mean (Expected Value):   μ = E(X) = Σ xᵢ pᵢ
  Second Moment:           E(X²)    = Σ xᵢ² pᵢ
  Variance:                σ² = Var(X) = E(X²) − [E(X)]² = Σ xᵢ² pᵢ − μ²
  Standard Deviation:      σ = √Var(X)
```

> **Shortcut kyun?** Definition Var(X) = Σ (xᵢ − μ)² pᵢ ko expand karo:
> Σ (xᵢ² − 2μxᵢ + μ²) pᵢ = Σ xᵢ²pᵢ − 2μ(Σ xᵢpᵢ) + μ²(Σ pᵢ) = E(X²) − 2μ² + μ² = **E(X²) − μ²**!

---

## 2. Solved Examples

### Example 1: Number of heads in 2 coin tosses
**Question:** Find the probability distribution, mean, variance, and standard deviation of the number of heads (X) in two tosses of a fair coin.

**Solution:**
- Sample space S = {TT, TH, HT, HH}. X takes values **0, 1, 2**.

| X (xᵢ) | 0 | 1 | 2 | Total |
|---|---|---|---|---|
| P(X = xᵢ) | 1/4 | 1/2 | 1/4 | **1** |
| xᵢ pᵢ | 0 | 1/2 | 1/2 | **1** |
| xᵢ² pᵢ | 0 | 1/2 | 1 | **3/2** |

- **Mean μ = E(X)** = 0 + 1/2 + 1/2 = **1**.
- **E(X²)** = 0 + 1/2 + 1 = **3/2**.
- **Variance σ²** = E(X²) − μ² = 3/2 − 1² = **1/2**.
- **Standard Deviation σ** = **1/√2 ≈ 0.707**.

**Jaanch:** Σ pᵢ = 1/4 + 1/2 + 1/4 = 1 ✅; Var = (0−1)²(1/4) + (1−1)²(1/2) + (2−1)²(1/4) = 1/4 + 0 + 1/4 = 1/2 ✅

---

### Example 2: Finding unknown constant k
**Question:** A random variable X has probability distribution P(X = x) = kx for x = 1, 2, 3, 4 (and 0 otherwise). Find k, E(X), and Var(X).

**Solution:**
- Using Σ pᵢ = 1: k(1 + 2 + 3 + 4) = 1 ⇒ 10k = 1 ⇒ **k = 1/10**.
- Probabilities: P(1)=1/10, P(2)=2/10, P(3)=3/10, P(4)=4/10.
- **E(X)** = 1(1/10) + 2(2/10) + 3(3/10) + 4(4/10) = (1 + 4 + 9 + 16)/10 = 30/10 = **3**.
- **E(X²)** = 1(1/10) + 4(2/10) + 9(3/10) + 16(4/10) = (1 + 8 + 27 + 64)/10 = 100/10 = **10**.
- **Var(X)** = 10 − 3² = **1**.

**Jaanch:** All pᵢ > 0, sum = 10/10 = 1, Var(X) = 1 > 0 ✅

---

### Example 3: Drawing two cards WITH replacement (number of Aces)
**Question:** Two cards are drawn successively WITH replacement from a well-shuffled pack of 52 cards. Find the probability distribution, mean, and variance of the number of Aces.

**Solution:**
- P(Ace) = 4/52 = 1/13,   P(Not Ace) = 12/13.
- X ∈ {0, 1, 2}:
  - P(X = 0) = (12/13)(12/13) = **144/169**
  - P(X = 1) = 2 × (1/13)(12/13) = **24/169** (either 1st is Ace or 2nd is Ace!)
  - P(X = 2) = (1/13)(1/13) = **1/169**
- **Mean E(X)** = [0(144) + 1(24) + 2(1)] / 169 = 26/169 = **2/13**.
- **E(X²)** = [0(144) + 1(24) + 4(1)] / 169 = **28/169**.
- **Var(X)** = 28/169 − (2/13)² = 28/169 − 4/169 = **24/169**.

**Jaanch:** 144 + 24 + 1 = 169 ⇒ Σ pᵢ = 1 ✅

---

### Example 4: Mean & variance of rolling a fair die
**Question:** Let X denote the number obtained on a throw of an unbiased die. Find E(X) and Var(X).

**Solution:**
- X ∈ {1, 2, 3, 4, 5, 6}, each with probability 1/6.
- **E(X)** = (1 + 2 + 3 + 4 + 5 + 6)/6 = 21/6 = **7/2 = 3.5**.
- **E(X²)** = (1² + 2² + 3² + 4² + 5² + 6²)/6 = (1 + 4 + 9 + 16 + 25 + 36)/6 = **91/6**.
- **Var(X)** = 91/6 − (7/2)² = 91/6 − 49/4 = (182 − 147)/12 = **35/12**.

**Jaanch:** 35/12 ≈ 2.917 > 0 ✅ (Notice E(X) = 3.5 does not have to be a possible value of X!)

---

## Aam Galtiyan (Common Mistakes)

1. **E(X²) mein probabilities ka bhi square kar dena:**
   - Galat: E(X²) = Σ xᵢ² pᵢ² likh dena!
   - Sahi: Sirf **xᵢ** ka square hota hai, probability **pᵢ** ka nahi: **E(X²) = Σ xᵢ² pᵢ**!
2. **Var(X) mein [E(X)]² minus karna bhool jana:**
   - Galat: E(X²) ko hi Variance likh dena.
   - Sahi: **Var(X) = E(X²) − [E(X)]²**! Hamesha mean ka square subtract karo!
3. **Negative probability wale table ko valid maan lena:**
   - Galat: Agar Σ pᵢ = 1 ho par ek entry −0.1 ho, toh use valid bol dena.
   - Sahi: **Har ek pᵢ ≥ 0** hona zaroori hai — negative probability kabhi valid nahi hoti!

---

## Quick Recap

- Valid distribution: **pᵢ ≥ 0** and **Σ pᵢ = 1**.
- **Mean:** μ = E(X) = Σ xᵢ pᵢ (need not be an integer or a value in the table!).
- **Variance:** Var(X) = Σ xᵢ² pᵢ − μ² ≥ 0; **SD = √Var(X)**.

---

## Practice Questions

1. Check if the table X = {0, 1, 2, 3} with P(X) = {0.1, 0.5, 0.2, −0.1} is a valid probability distribution. Give two reasons.
2. Find the value of k if X = {0, 1, 2, 3, 4} has probabilities {0, k, 2k, 2k, 3k}, and then find P(X < 3).
3. Find the probability distribution and mean of the number of heads in 3 tosses of a fair coin.
4. Two dice are thrown simultaneously. If X denotes the number of sixes, find the expectation E(X).
5. Two numbers are selected at random without replacement from the first six positive integers {1, 2, 3, 4, 5, 6}. Let X denote the larger of the two numbers. Find E(X).
6. Find the mean and variance of X whose distribution is X = {−1, 0, 1, 2} with P(X) = {0.2, 0.3, 0.4, 0.1}.
7. In a game, a player wins ₹5 if a fair die shows 6, wins ₹2 if it shows 4 or 5, and loses ₹3 otherwise. Find the expected gain per throw.
8. A coin is biased so that Head is 3 times as likely to occur as Tail. If the coin is tossed twice, find the probability distribution of the number of tails.
9. Find the variance of X if E(X) = 5 and E(X²) = 34.
10. State True or False: The variance of a random variable can be negative if X takes negative values.

### Answers

1. **Not valid** — (1) P(X = 3) = −0.1 < 0, and (2) sum = 0.7 ≠ 1.
2. 8k = 1 ⇒ **k = 1/8**. P(X < 3) = P(0) + P(1) + P(2) = 0 + 1/8 + 2/8 = **3/8**.
3. P(0)=1/8, P(1)=3/8, P(2)=3/8, P(3)=1/8; E(X) = (0 + 3 + 6 + 3)/8 = 12/8 = **1.5**.
   Jaanch: For Ratan's game (₹10/Head), expected payout = ₹15 = entry fee (fair game!) ✅
4. P(0) = 25/36, P(1) = 10/36, P(2) = 1/36 ⇒ E(X) = (0 + 10 + 2)/36 = 12/36 = **1/3**.
5. Total C(6,2) = 15 pairs. X ∈ {2,3,4,5,6} with P(X) = {1/15, 2/15, 3/15, 4/15, 5/15}.
   E(X) = (2 + 6 + 12 + 20 + 30)/15 = 70/15 = **14/3**.
6. E(X) = −0.2 + 0 + 0.4 + 0.2 = **0.4**; E(X²) = 0.2 + 0 + 0.4 + 0.4 = **1.0**.
   Var(X) = 1.0 − (0.4)² = 1.0 − 0.16 = **0.84**.
7. E(Gain) = 5(1/6) + 2(2/6) + (−3)(3/6) = (5 + 4 − 9)/6 = **₹0** (completely fair game!).
8. P(H) = 3/4, P(T) = 1/4. X (tails) ∈ {0, 1, 2}: P(0) = **9/16**, P(1) = **6/16 = 3/8**, P(2) = **1/16**.
9. Var(X) = 34 − 5² = 34 − 25 = **9**.
10. **False** ❌ — Var(X) = Σ (xᵢ − μ)² pᵢ is a sum of non-negative terms, so Var(X) ≥ 0 ALWAYS!

---

Ab tum random variables, mean, aur variance nikaal sakte ho! Agle part mein hum ek sabse famous special probability distribution seekhenge — jab ek hi yes/no trial ko n baar independently repeat kiya jaye — **Binomial Distribution**: [Probability (Part 5)](probability-part5.md).
