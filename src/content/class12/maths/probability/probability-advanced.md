# Chapter 13: Probability — Gehrai Mein (Advanced)

> **Class:** 12 | **Subject:** Mathematics  
> **Core chapter:** [Probability (Part 6)](probability-part6.md)

---

Rinku apne friends ke saath do clever probability games khel raha hai: pehle game mein Jar I se ek random marble bina dekhe Jar II mein daali jati hai aur phir Jar II se white marble nikalti hai — kya hum ulta guess kar sakte hain ki transferred marble white thi ya black? Doosre game mein do log baari-baari die phenkte hain aur jo pehle 6 laaye wo jeet-ta hai — kya start karne wale ko zyada advantage milta hai? Is Gehrai Mein lesson mein hum seekhenge **Ball-Transfer Bayes**, **Linearity of Expectation & Variance**, **Infinite-GP Alternating Games**, aur **Geometric & Poisson Approximations**!

---

## 1. Two-Stage Ball-Transfer Urn Bayes Problem

### Example 1: Marble transferred from Urn I to Urn II
**Question:** Urn I contains 5 white and 3 black marbles. Urn II contains 4 white and 5 black marbles. One marble is transferred at random from Urn I to Urn II without noting its colour. Then a marble is drawn from Urn II and found to be **white**. Find the probability that the transferred marble was **white**.

**Solution:**
- Let E₁ = transferred marble is white ⇒ P(E₁) = **5/8**.
- Let E₂ = transferred marble is black ⇒ P(E₂) = **3/8**.
- Let W = marble drawn from Urn II is white (Urn II now has 10 marbles!):
  - Given E₁ (Urn II has 5W, 5B): P(W | E₁) = **5/10**.
  - Given E₂ (Urn II has 4W, 6B): P(W | E₂) = **4/10**.
- By Bayes' Theorem:
  P(E₁ | W) = [ (5/8)(5/10) ] / [ (5/8)(5/10) + (3/8)(4/10) ] = 25 / (25 + 12) = **25/37**.

**Jaanch:** P(E₂ | W) = 12/37; 25/37 + 12/37 = 1 ✅; 25/37 ≈ 0.676 > 5/8 = 0.625 (seeing white from Urn II slightly increases belief that white was transferred!) ✅

---

## 2. Linearity of Expectation & Scaling of Variance

Kisi bhi random variable X aur constants a, b ∈ R ke liye:

```
  1. E(aX + b)   =  a · E(X) + b
  2. Var(aX + b) =  a² · Var(X)      (constant shift '+ b' variance ko bilkul nahi badalta!)
  3. SD(aX + b)  =  |a| · SD(X)
  4. For ANY two random variables X, Y:   E(X + Y) = E(X) + E(Y)   (even if NOT independent!)
  5. If X and Y are INDEPENDENT:          Var(X ± Y) = Var(X) + Var(Y)   (notice '+' even for X − Y!)
```

### Example 2: Transforming a random variable
**Question:** If E(X) = 3 and Var(X) = 4, find E(3X − 2), Var(3X − 2), and SD(3X − 2).

**Solution:**
- **E(3X − 2)** = 3E(X) − 2 = 3(3) − 2 = **7**.
- **Var(3X − 2)** = 3² · Var(X) = 9 × 4 = **36**.
- **SD(3X − 2)** = |3| · √4 = 3 × 2 = **6**.

**Jaanch:** √Var(3X − 2) = √36 = 6 = |3|·SD(X) ✅

---

## 3. Alternating-Turn Infinite Game (Geometric Series!)

### Example 3: First to roll a 6 wins!
**Question:** A and B throw a fair die alternately until one of them gets a 6 and wins the game. If A starts first, find the exact probabilities that A wins and B wins.

**Solution:**
- Let p = P(6) = 1/6, q = P(not 6) = 5/6.
- A wins on throw 1, OR throw 3, OR throw 5, ...:
  P(A wins) = p + q²p + q⁴p + ... = **p / (1 − q²)**  (infinite GP with first term p, ratio q² < 1!)
  = (1/6) / [1 − (5/6)²] = (1/6) / (11/36) = **6/11**.
- P(B wins) = 1 − 6/11 = **5/11** (check: qp / (1 − q²) = (5/36)/(11/36) = 5/11!).

**Jaanch:** 6/11 + 5/11 = 1 ✅; starting first gives A an exact 1/11 advantage!

---

## 4. Geometric Distribution & Poisson Approximation to Binomial

1. **Geometric Distribution (Wait Time to First Success):**
   Independent Bernoulli trials (success probability p) tab tak repeat karo jab tak **pehli success** na mil jaye.
   - **P(X = k) = qᵏ⁻¹ · p**   (k = 1, 2, 3, ...)
   - **Mean wait time: E(X) = 1/p** (e.g., fair die par pehla 6 aane ka average wait = **6 throws**!)

2. **Poisson Approximation to Binomial (Rare Events):**
   Jab **n bahut bada ho** aur **p bahut chhota ho**, par **λ = np** moderate constant ho, toh Binomial B(n, p) lagbhag **Poisson(λ)** ban jata hai:
   - **P(X = r) ≈ (e⁻λ · λʳ) / r!**   (r = 0, 1, 2, ...)
   - **Mean = λ,   Variance = λ**!

### Example 4: Poisson approximation for rare manufacturing defects
**Question:** A factory produces pins with a 2% defect rate (p = 0.02). In a box of n = 100 pins, use the Poisson approximation (e⁻² ≈ 0.1353) to estimate the probability of: (a) 0 defectives, (b) 1 defective.

**Solution:**
- λ = np = 100 × 0.02 = **2**.
- (a) P(X = 0) ≈ e⁻² · 2⁰ / 0! = e⁻² ≈ **0.1353**.
- (b) P(X = 1) ≈ e⁻² · 2¹ / 1! = 2e⁻² ≈ **0.2706**.

**Jaanch:** Exact binomial (0.98)¹⁰⁰ ≈ 0.1326 — very close to 0.1353! ✅

---

## Challenge Practice Questions

1. Urn I has 3 red, 4 white balls; Urn II has 4 red, 3 white balls. One ball is transferred from Urn I to Urn II, and then a ball drawn from Urn II is red. Find the probability that the transferred ball was red.
2. Three players A, B, C throw a fair die in order A, B, C, A, B, C, ... until someone gets a 6 and wins. Find P(A wins), P(B wins), and P(C wins).
3. If X and Y are independent random variables with E(X) = 4, Var(X) = 3, E(Y) = 2, Var(Y) = 5, find E(2X − Y + 1) and Var(2X − Y + 1).
4. A fair coin is tossed repeatedly until a Head appears. Find the probability that it takes at least 4 tosses.
5. A book of 500 pages contains 50 misprints randomly distributed. Using Poisson approximation (λ = 0.1 per page, e⁻⁰·¹ ≈ 0.9048), estimate the probability that a randomly chosen page has at least 2 misprints.

### Answers

1. P(R₁) = 3/7, P(W₁) = 4/7; P(R₂ | R₁) = 5/8, P(R₂ | W₁) = 4/8.
   P(R₁ | R₂) = (15/56) / (15/56 + 16/56) = **15/31**.
2. Ratio is q³ = (5/6)³ = 125/216; 1 − q³ = 91/216.
   P(A) = (1/6)/(91/216) = **36/91**; P(B) = (5/6)P(A) = **30/91**; P(C) = (25/36)P(A) = **25/91**.
   Jaanch: 36 + 30 + 25 = 91 ⇒ sum = 1 ✅
3. E(2X − Y + 1) = 2(4) − 2 + 1 = **7**.
   Var(2X − Y + 1) = 2²Var(X) + (−1)²Var(Y) = 4(3) + 1(5) = **17**.
4. At least 4 tosses means first 3 are all Tails: (1/2)³ = **1/8**.
5. P(X ≥ 2) = 1 − P(0) − P(1) ≈ 1 − e⁻⁰·¹(1 + 0.1) = 1 − (0.9048)(1.1) = 1 − 0.9953 = **0.0047**.
