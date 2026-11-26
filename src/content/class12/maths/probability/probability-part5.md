# Chapter 13: Probability (Part 5)

> **Class:** 12 | **Subject:** Mathematics  
> **Previous part:** [Probability (Part 4)](probability-part4.md)

---

Renu basketball free-throw practice kar rahi hai. Har shot mein uske basket score karne ka chance 0.8 (80%) hai, aur har shot pichhle shot se independent hai. Agar Renu 5 shots leti hai, toh exact 4 ya kam se kam 4 baskets score karne ki probability kya hogi? Har outcome (SSSSF, SSSFS, ...) gin-ne ke bajaye hum ek super-clean formula use kar sakte hain — **Binomial Distribution**!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Bernoulli Trial** | Ek single experiment jiske sirf **do outcomes** hon — **Success (p)** aur **Failure (q = 1 − p)** |
| **Binomial Experiment** | Fixed **n** independent Bernoulli trials jahan har trial mein p constant rahe |
| **Binomial Distribution B(n, p)** | n trials mein exactly r successes milne ki probability: **P(X = r) = C(n, r) pʳ qⁿ⁻ʳ** (r = 0, 1, ..., n) |

---

## 1. Conditions for Bernoulli Trials & Binomial Formula

Koi experiment tabhi Binomial hota hai jab ye **chaar conditions** poori hon:
1. Number of trials **n** fixed aur finite ho.
2. Saare trials **independent** hon.
3. Har trial ke sirf **do outcomes** hon: Success ya Failure.
4. Success ki probability **p** har trial mein **same (constant)** rahe (q = 1 − p).

```
  Binomial Probability Formula:
    P(X = r) = C(n, r) · pʳ · qⁿ⁻ʳ     for r = 0, 1, 2, ..., n

  Where: C(n, r) = n! / [r! (n − r)!],   p + q = 1

  Check total sum:  Σ P(X = r) = (q + p)ⁿ = 1ⁿ = 1  (by Binomial Theorem!)

  Shortcut Formulas for Mean & Variance of B(n, p):
    Mean:       μ = E(X)   = n · p
    Variance:   σ² = Var(X) = n · p · q
    SD:         σ = √(n · p · q)
```

> **Notice:** Since 0 < q < 1, for any Binomial distribution (0 < p < 1), **Variance (npq) is ALWAYS strictly less than Mean (np)**!

---

## 2. Solved Examples

### Example 1: Fair coin tossed 6 times
**Question:** A fair coin is tossed 6 times. Find the probability of getting:
(a) exactly 4 heads,
(b) at least 4 heads.

**Solution:**
- n = 6, p = 1/2, q = 1/2.
- (a) P(X = 4) = C(6, 4) (1/2)⁴ (1/2)² = 15 × (1/64) = **15/64**.
- (b) P(X ≥ 4) = P(4) + P(5) + P(6) = [C(6,4) + C(6,5) + C(6,6)] / 64 = (15 + 6 + 1)/64 = 22/64 = **11/32**.

**Jaanch:** Mean = np = 6(1/2) = 3; symmetric around 3, so P(X ≥ 4) < 1/2 (11/32 = 0.344 < 0.5) ✅

---

### Example 2: Pair of dice thrown 4 times (doublet = success)
**Question:** A pair of dice is thrown 4 times. If getting a doublet is considered a success, find the probability of getting exactly 2 successes.

**Solution:**
- Doublets = {(1,1), (2,2), (3,3), (4,4), (5,5), (6,6)} ⇒ **p = 6/36 = 1/6**, **q = 5/6**, **n = 4**.
- P(X = 2) = C(4, 2) (1/6)² (5/6)² = 6 × (1/36) × (25/36) = 150/1296 = **25/216**.

**Jaanch:** 150/6 = 25, 1296/6 = 216 ⇒ 25/216 ✅

---

### Example 3: Defective bulbs in a box of 10
**Question:** Ten eggs (or bulbs) are drawn successively with replacement from a lot containing 5% defectives. Find the probability that:
(a) none is defective,
(b) at most 1 is defective.

**Solution:**
- "With replacement" ⇒ independent trials! n = 10, p = 5% = 1/20, q = 19/20.
- (a) P(X = 0) = C(10, 0) (1/20)⁰ (19/20)¹⁰ = **(19/20)¹⁰**.
- (b) P(X ≤ 1) = P(0) + P(1) = (19/20)¹⁰ + 10(1/20)(19/20)⁹ = (19/20)⁹ (19/20 + 10/20) = **(29/20)(19/20)⁹**.

**Jaanch:** Both probabilities are cleanly between 0 and 1 ✅

---

### Example 4: Finding n and p from Mean and Variance
**Question:** For a binomial distribution, the mean is 4 and the variance is 4/3. Find n, p, and P(X = 1).

**Solution:**
- Given: np = 4 and npq = 4/3.
- Divide second by first: **q = (4/3) / 4 = 1/3**.
- Therefore **p = 1 − q = 2/3**.
- From np = 4 ⇒ n(2/3) = 4 ⇒ **n = 6**.
- P(X = 1) = C(6, 1) (2/3)¹ (1/3)⁵ = 6 × 2 / 729 = 12/729 = **4/243**.

**Jaanch:** np = 6(2/3) = 4 ✅; npq = 4(1/3) = 4/3 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **"Without replacement" mein Binomial formula laga dena:**
   - Galat: Ek bag se 3 balls without replacement nikaalne par C(3, r)pʳq³⁻ʳ laga dena.
   - Sahi: Without replacement mein p har draw par badal jata hai (trials independent nahi hote!) — Binomial sirf **with replacement** (ya infinite population) mein lagta hai!
2. **C(n, r) multiply karna bhool jana:**
   - Galat: 6 coin tosses mein 4 heads ke liye sirf (1/2)⁴(1/2)² = 1/64 likh dena.
   - Sahi: 4 heads 6 mein se kisi bhi positions par aa sakte hain — **C(6, 4) = 15** se multiply karna zaroori hai!
3. **Mean < Variance wala impossible Binomial maan lena:**
   - Galat: "Ek binomial distribution ka mean 3 aur variance 4 hai" ko solve karne lagna.
   - Sahi: Binomial mein **Var = npq ≤ np = Mean** hamesha hota hai! Agar Variance > Mean ho, toh aisa Binomial distribution exist hi nahi karta!

---

## Quick Recap

- **Bernoulli trials:** Fixed n, independent, 2 outcomes, constant p (q = 1 − p).
- **Formula:** P(X = r) = C(n, r) pʳ qⁿ⁻ʳ.
- **Mean = np**, **Variance = npq** (always Variance ≤ Mean!).

---

## Practice Questions

1. A die is thrown 6 times. If "getting an odd number" is a success, find the probability of: (a) 5 successes, (b) at least 5 successes, (c) at most 5 successes.
2. Five cards are drawn successively with replacement from a well-shuffled deck of 52 cards. What is the probability that: (a) all five cards are spades, (b) only 3 cards are spades, (c) none is a spade?
3. If the probability that a bulb produced by a factory will fuse after 150 days is 0.05, find the probability that out of 5 such bulbs: (a) none fuses, (b) not more than one fuses, (c) at least one fuses.
4. A person buys a lottery ticket in 50 lotteries, in each of which his chance of winning a prize is 1/100. What is the probability that he will win a prize at least once?
5. Find the probability of getting 5 exactly twice in 7 throws of a fair die.
6. The probability of a shooter hitting a target is 3/4. How many minimum number of times must he fire so that the probability of hitting the target at least once is more than 0.99?
7. In a binomial distribution, the sum of mean and variance is 15 and the product is 54. Find n and p.
8. Renu scores free throws with probability 0.8. Out of 5 independent shots, find the probability she scores at least 4 shots.
9. Find the mean and standard deviation of the number of sixes in 360 throws of a fair die.
10. State True or False: In a binomial distribution with n = 10 and p = 0.5, the distribution is perfectly symmetric: P(X = r) = P(X = 10 − r).

### Answers

1. p = 1/2, q = 1/2, n = 6. (a) C(6,5)/64 = 6/64 = **3/32**; (b) (6+1)/64 = **7/64**; (c) 1 − P(6) = 1 − 1/64 = **63/64**.
2. p = 1/4, q = 3/4, n = 5. (a) (1/4)⁵ = **1/1024**; (b) C(5,3)(1/4)³(3/4)² = 90/1024 = **45/512**; (c) (3/4)⁵ = **243/1024**.
3. n = 5, p = 0.05, q = 0.95. (a) **(0.95)⁵**; (b) (0.95)⁵ + 5(0.05)(0.95)⁴ = **1.2(0.95)⁴**; (c) **1 − (0.95)⁵**.
4. 1 − P(0) = **1 − (99/100)⁵⁰**.
5. n = 7, p = 1/6, q = 5/6 ⇒ C(7,2)(1/6)²(5/6)⁵ = **21 × 5⁵ / 6⁷ = (7/12)(5/6)⁵**.
6. 1 − (1/4)ⁿ > 0.99 ⇒ (1/4)ⁿ < 0.01 ⇒ 4ⁿ > 100. Since 4³ = 64 < 100 and 4⁴ = 256 > 100 ⇒ **n = 4**.
   Jaanch: 1 − 1/256 = 255/256 ≈ 0.996 > 0.99 ✅
7. Mean + Var = 15, Mean × Var = 54 ⇒ roots of t² − 15t + 54 = 0 are 9 and 6. Since Mean > Var: **np = 9, npq = 6** ⇒ q = 2/3, **p = 1/3**, **n = 27**.
8. n = 5, p = 0.8, q = 0.2 ⇒ P(4) + P(5) = 5(0.8)⁴(0.2) + (0.8)⁵ = (0.8)⁴(1.0 + 0.8) = 1.8 × 0.4096 = **0.73728**.
9. Mean = 360(1/6) = **60**; Var = 60(5/6) = 50 ⇒ SD = **√50 = 5√2 ≈ 7.07**.
10. **True** ✅ — when p = q = 1/2, C(10, r)(1/2)¹⁰ = C(10, 10 − r)(1/2)¹⁰!

---

Ab tum Binomial Distribution bhi seekh chuke ho! Chalo ab final part mein **Sab Kuch Mila Kar** saare probability concepts ko ek saath apply karein aur Class 12 Mathematics ka grand wrap-up karein: [Probability (Part 6)](probability-part6.md).
