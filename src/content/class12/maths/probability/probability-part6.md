# Chapter 13: Probability (Part 6)

> **Class:** 12 | **Subject:** Mathematics  
> **Previous part:** [Probability (Part 5)](probability-part5.md)

---

Richa ek electronics quality-control lab mein kaam karti hai. Ek hi din mein use teen alag-alag sawal solve karne padte hain: (1) defective chip kis machine se aayi (**Bayes' theorem**), (2) missing item ke baad two draws ka reverse chance (**Conditional + Bayes**), aur (3) kam se kam kitne trials karein taaki success probability 90% paar kar jaye (**Binomial inequality**)! Is final part mein hum **Sab Kuch Mila Kar** multi-concept probability problems solve karenge aur poora chapter summarize karenge.

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Model Recognition** | Problem padh kar turant pehchanna: Conditional, Independent, Total Probability, Bayes, Distribution, ya Binomial? |
| **Minimum Trials Problem** | P(at least 1 success) = 1 − qⁿ > threshold ko solve karke sabse chhota integer n nikaalna |

---

## 1. Solved Mixed Examples (Sab Kuch Mila Kar)

### Example 1: Three-machine factory quality check (Bayes' Theorem)
**Question:** In a bolt factory, machines A, B, and C manufacture 25%, 35%, and 40% of the total bolts respectively. Of their outputs, 5%, 4%, and 2% are defective. A bolt is drawn at random and found to be defective. What is the probability that it was manufactured by machine B?

**Solution:**
- Priors: P(A) = 0.25, P(B) = 0.35, P(C) = 0.40.
- Defect likelihoods: P(D | A) = 0.05, P(D | B) = 0.04, P(D | C) = 0.02.
- Branches:
  - A: (0.25)(0.05) = 0.0125
  - B: (0.35)(0.04) = 0.0140
  - C: (0.40)(0.02) = 0.0080
  - Total P(D) = 0.0125 + 0.0140 + 0.0080 = **0.0345**.
- P(B | D) = 0.0140 / 0.0345 = 140 / 345 = **28/69**.

**Jaanch:** P(A | D) = 25/69, P(B | D) = 28/69, P(C | D) = 16/69; sum = 69/69 = 1 ✅

---

### Example 2: Lost card puzzle (Bayes + Without Replacement!)
**Question:** A card from a pack of 52 cards is lost. From the remaining cards of the pack, two cards are drawn (without replacement) and are found to be both diamonds. Find the probability of the lost card being a diamond.

**Solution:**
- Let E₁ = lost card is a diamond ⇒ P(E₁) = 13/52 = **1/4**.
- Let E₂ = lost card is NOT a diamond ⇒ P(E₂) = 39/52 = **3/4**.
- Let A = two drawn cards from remaining 51 are both diamonds:
  - Given E₁ (12 diamonds left in 51 cards): P(A | E₁) = (12/51) × (11/50).
  - Given E₂ (13 diamonds left in 51 cards): P(A | E₂) = (13/51) × (12/50).
- By Bayes' Theorem (cancel common factor 12/(51×50×4) from every term!):
  P(E₁ | A) = (1 × 11) / (1 × 11 + 3 × 13) = 11 / (11 + 39) = **11/50**.

**Jaanch:** Slightly less than 1/4 (11/50 = 0.22 < 0.25) because seeing 2 diamonds left in the deck makes it slightly less likely a diamond was lost ✅

---

### Example 3: Minimum number of trials (Binomial Inequality)
**Question:** How many times must a fair coin be tossed so that the probability of having at least one head is more than 90%?

**Solution:**
- In n tosses, P(at least 1 head) = 1 − P(no head) = 1 − (1/2)ⁿ.
- Need: 1 − (1/2)ⁿ > 0.9 ⇒ (1/2)ⁿ < 0.1 ⇒ **2ⁿ > 10**.
- Check powers of 2: 2³ = 8 (not > 10), **2⁴ = 16 > 10**!
- Minimum number of tosses = **4**.

**Jaanch:** For n = 4, P(≥ 1 head) = 1 − 1/16 = 15/16 = 0.9375 > 0.90 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Question ka type pehchane bina formula laga dena:**
   - Galat: "Given defective, find probability of Machine B" mein sirf P(D | B) = 0.04 likh dena.
   - Sahi: Keyword **"given that [effect] happened, find probability of [cause]"** dikhe toh turant **Bayes' Theorem** lagao!
2. **Minimum trials inequality mein sign flip karna bhool jana:**
   - Galat: 1 − (1/2)ⁿ > 0.9 se (1/2)ⁿ > 0.1 likh dena.
   - Sahi: Negative sign multiply karne par inequality flip hoti hai: (1/2)ⁿ **<** 0.1 ⇒ 2ⁿ **>** 10!

---

## Quick Recap

- **Forward (known cause → effect):** Multiplication rule / Total Probability / Binomial.
- **Reverse (known effect → cause):** Bayes' Theorem.
- **Average / Spread of numerical outcome:** Random Variable Mean E(X) & Variance Var(X).

---

## Practice Questions

1. A and B throw a die alternately till one of them gets a 6 and wins the game. If A starts, find their respective probabilities of winning in the first two rounds only (round 1: A, then B; round 2: A, then B).
2. Two groups are competing for the board of directors of a corporation. Probabilities that the first and second groups win are 0.6 and 0.4 respectively. If the first group wins, the probability of introducing a new product is 0.7; if the second wins, it is 0.3. Find the probability that the new product was introduced by the second group.
3. Suppose a girl throws a die. If she gets 5 or 6, she tosses a coin 3 times and notes the number of heads. If she gets 1, 2, 3, or 4, she tosses a coin once and notes whether head or tail is obtained. If she obtained **exactly one head**, what is the probability that she threw 1, 2, 3, or 4 with the die?
4. An urn contains 4 white and 3 red balls. Find the probability distribution and mean of the number of red balls in a random draw of 3 balls without replacement.
5. If A and B are two events such that P(A) = 1/4, P(B) = 1/2, and P(A ∩ B) = 1/8, find P(not A and not B).
6. In a hurdle race, a player clears each of 10 hurdles independently with probability 5/6. Find the probability that he knocks down fewer than 2 hurdles.
7. A bag contains 5 red and 3 black balls, and a second bag contains 4 red and 5 black balls. One ball is drawn from a randomly chosen bag and is found to be red. Find the probability it came from the first bag.
8. Find the minimum number of throws of a fair die needed so that the probability of getting at least one 6 is greater than 1/2.
9. A random variable X takes values 0, 1, 2 with probabilities 1/4, 1/2, 1/4. Find E(X²) and Var(X).
10. State True or False: If E and F are independent events, then P(E | F) = P(E | F').

### Answers

1. P(A wins on throw 1) = 1/6; P(B wins on throw 2) = (5/6)(1/6) = 5/36; P(A wins on throw 3) = (5/6)²(1/6) = 25/216; P(B wins on throw 4) = (5/6)³(1/6) = 125/1296.
2. Branches: G₁ = (0.6)(0.7) = 0.42, G₂ = (0.4)(0.3) = 0.12 (sum = 0.54).
   P(G₂ | New Product) = 0.12 / 0.54 = **2/9**.
3. E₁ = {5,6} (P=1/3, P(1 H in 3 tosses) = 3/8); E₂ = {1,2,3,4} (P=2/3, P(1 H in 1 toss) = 1/2).
   Branches: E₁ = 1/8, E₂ = 1/3 (sum = 11/24). P(E₂ | 1 H) = (1/3)/(11/24) = **8/11**.
4. Total C(7,3) = 35. P(0R) = 4/35, P(1R) = 18/35, P(2R) = 12/35, P(3R) = 1/35.
   Mean = (0 + 18 + 24 + 3)/35 = 45/35 = **9/7**. Jaanch: sum = 35/35 = 1 ✅
5. P(A' ∩ B') = 1 − P(A ∪ B) = 1 − (1/4 + 1/2 − 1/8) = 1 − 5/8 = **3/8**.
6. Knocking down = success with p = 1/6, q = 5/6, n = 10.
   P(X < 2) = P(0) + P(1) = (5/6)¹⁰ + 10(1/6)(5/6)⁹ = (5/6)⁹(5/6 + 10/6) = **(5/2)(5/6)⁹**.
7. Equal priors 1/2; P(R | B₁) = 5/8, P(R | B₂) = 4/9.
   P(B₁ | R) = (5/8) / (5/8 + 4/9) = 45 / (45 + 32) = **45/77**.
8. 1 − (5/6)ⁿ > 1/2 ⇒ (5/6)ⁿ < 1/2. Check: (5/6)³ = 125/216 ≈ 0.579 > 0.5; (5/6)⁴ = 625/1296 ≈ 0.482 < 0.5 ⇒ **n = 4**.
9. E(X) = 1, E(X²) = 3/2, **Var(X) = 1/2**.
10. **True** ✅ — if E and F are independent, E and F' are also independent, so P(E | F) = P(E) = P(E | F')!

---

## Chapter Ka Saar (Probability Wrap-Up)

| Concept | Key Formula / Rule |
|---|---|
| **Conditional Probability** | P(E given F) = P(E ∩ F) / P(F), P(F) > 0; P(E' given F) = 1 − P(E given F) |
| **Multiplication Theorem** | P(E ∩ F) = P(E) · P(F given E) |
| **Independent Events** | P(E ∩ F) = P(E) · P(F); P(A ∪ B) = 1 − P(A')P(B') |
| **Law of Total Probability** | P(A) = Σ P(Eᵢ) · P(A given Eᵢ) over a partition {Eᵢ} |
| **Bayes' Theorem** | P(Eᵢ given A) = [ P(Eᵢ) · P(A given Eᵢ) ] / [ Σ P(Eⱼ) · P(A given Eⱼ) ] |
| **Random Variable Mean & Var** | μ = E(X) = Σ xᵢ pᵢ; Var(X) = Σ xᵢ² pᵢ − μ²; σ = √Var(X) |
| **Binomial Distribution B(n, p)** | P(X = r) = C(n, r) pʳ qⁿ⁻ʳ; **Mean = np, Var = npq** |

---

Shabaash! Tumne **Probability** ke saare core concepts complete kar liye hain! Agar tum **ball-transfer urn Bayes puzzles, expectation/variance linearity E(aX+b), alternating-turn infinite GP games, aur geometric/Poisson approximations** jaise deep concepts seekhna chahte ho, toh [Gehrai Mein: Probability](probability-advanced.md) zaroor padho.

Badhai ho! Is chapter ke saath tumne **Class 12 Mathematics** ka poora safar — Relations & Functions se lekar Calculus, Vectors, 3D Geometry, Linear Programming, aur Probability tak — mukammal kar liya hai! Ab tum kisi bhi higher-level maths, science, ya engineering challenge ke liye poori tarah taiyaar ho!
