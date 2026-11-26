# Chapter 13: Probability (Part 3)

> **Class:** 12 | **Subject:** Mathematics  
> **Previous part:** [Probability (Part 2)](probability-part2.md)

---

Rashmika ne ek rare bimari ka medical test karwaya jo 99% accurate hai, aur uska result **Positive** aaya! Rashmika ghabra gayi ki kya use 99% pakka wo bimari hai? Doctor ne muskurate hue kaha — "Nahi! Ye bimari sirf 0.1% logon ko hoti hai, isliye 0.5% healthy logon ka false positive result aana bhi kaafi common hai!" Result (effect) dekh kar asli cause ki probability ulte raaste se nikaalne ka yahi jaadui formula hai **Bayes' Theorem**!

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Prior Probability P(Eᵢ)** | Koi naya evidence (A) milne se **pehle** cause Eᵢ ki shuruati probability |
| **Likelihood P(A given Eᵢ)** | Agar cause Eᵢ sach hai, toh evidence A aane ka chance |
| **Posterior Probability P(Eᵢ given A)** | Evidence A milne ke **baad** cause Eᵢ ki updated (reverse) probability |
| **Bayes' Theorem** | **P(Eᵢ given A) = [ P(Eᵢ) · P(A given Eᵢ) ] / [ Σ P(Eⱼ) · P(A given Eⱼ) ]** |

---

## 1. Derivation of Bayes' Theorem (2-Line Proof!)

Maan lo E₁, E₂, ..., Eₙ sample space S ka partition hain (mutually exclusive & exhaustive) aur A koi non-zero event (observed evidence) hai:

```
  By definition of conditional probability:
    P(Eᵢ | A)  =  P(Eᵢ ∩ A) / P(A)

  Numerator (Multiplication rule):  P(Eᵢ ∩ A) = P(Eᵢ) · P(A | Eᵢ)
  Denominator (Total Probability):  P(A) = Σ P(Eⱼ) · P(A | Eⱼ)

  Therefore (Bayes' Theorem):
                      P(Eᵢ) · P(A | Eᵢ)
    P(Eᵢ | A)  =  ───────────────────────────
                   Σⱼ P(Eⱼ) · P(A | Eⱼ)
```

> **Easy Memory Trick:**
> **Bayes' Formula = (Favorable Branch) / (Sum of ALL Branches)**!

---

## 2. Solved Examples

### Example 1: Classic two-bags reverse probability
**Question:** Bag I contains 3 red and 4 black balls, while Bag II contains 5 red and 6 black balls. One ball is drawn at random from one of the bags and it is found to be **red**. Find the probability that it was drawn from **Bag II**.

**Solution:**
- Let E₁ = Bag I chosen, E₂ = Bag II chosen ⇒ P(E₁) = P(E₂) = 1/2.
- Let A = red ball drawn ⇒ P(A | E₁) = 3/7, P(A | E₂) = 5/11.
- By Bayes' Theorem:
  - Branch 1 (Bag I & Red): (1/2)(3/7) = 3/14 = 33/154.
  - Branch 2 (Bag II & Red): (1/2)(5/11) = 5/22 = 35/154.
  - P(E₂ | A) = (35/154) / (33/154 + 35/154) = **35/68**.

**Jaanch:** P(E₁ | A) = 33/68, P(E₂ | A) = 35/68; sum = 68/68 = 1 ✅; Bag II has higher red ratio (5/11 > 3/7), so P(E₂ | A) > 1/2 ✅

---

### Example 2: Medical diagnostic test (Rashmika's story!)
**Question:** A laboratory blood test is 99% effective in detecting a certain disease when it is in fact present. However, the test also yields a false positive result for 0.5% of healthy people tested. If 0.1% of the population actually has the disease, what is the probability that a person has the disease given that the test result is positive?

**Solution:**
- Let E₁ = person has disease, E₂ = person is healthy; A = test is positive.
- Priors: P(E₁) = 0.001,   P(E₂) = 1 − 0.001 = 0.999.
- Likelihoods: P(A | E₁) = 0.99,   P(A | E₂) = 0.005.
- Branches:
  - True positive branch: P(E₁)P(A | E₁) = (0.001)(0.99) = **0.00099**.
  - False positive branch: P(E₂)P(A | E₂) = (0.999)(0.005) = **0.004995**.
- By Bayes' Theorem:
  P(E₁ | A) = 0.00099 / (0.00099 + 0.004995) = 990 / 5985 = **22/133 ≈ 0.165 (only 16.5%!)**

**Jaanch:** 990/45 = 22, 5985/45 = 133 ⇒ 22/133 ✅ (Because the disease is very rare, false positives outnumber true positives!)

---

### Example 3: Truth-teller reporting a six on a die
**Question:** A man is known to speak the truth 3 out of 4 times. He throws a die and reports that it is a six. Find the probability that it is actually a six.

**Solution:**
- Let E₁ = six actually appears (P(E₁) = **1/6**), E₂ = six does NOT appear (P(E₂) = **5/6**).
- Let A = man reports "it is a six".
  - P(A | E₁) = P(speaks truth) = **3/4**.
  - P(A | E₂) = P(lies) = **1/4**.
- By Bayes' Theorem:
  P(E₁ | A) = [ (1/6)(3/4) ] / [ (1/6)(3/4) + (5/6)(1/4) ] = (3/24) / (8/24) = **3/8**.

**Jaanch:** P(E₂ | A) = 5/8; 3/8 + 5/8 = 1 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Prior probability P(Eᵢ) ko ignore kar dena (Base Rate Fallacy!):**
   - Galat: Example 2 mein sirf 99% sensitivity dekh kar "99% chance of disease" bol dena.
   - Sahi: Rare events mein **prior P(E₁) = 0.001** aur **false positive branch P(E₂)P(A | E₂)** dono ko denominator mein rakhna zaroori hai!
2. **P(E₁ | A) aur P(A | E₁) ko confuse kar lena:**
   - Galat: Question puchta hai "given red ball, find probability of Bag II" (P(E₂ | A)) aur student P(A | E₂) = 5/11 likh deta hai.
   - Sahi: Hamesha pehle likho — **kya ho chuka hai (observed evidence A)** aur **kis cause ki probability nikaalni hai (Eᵢ)**!
3. **Bayes ke denominator mein saare branches na jodna:**
   - Galat: Sirf do mein se ek branch denominator mein rakhna.
   - Sahi: Denominator hamesha **poora Law of Total Probability** (saare mutually exclusive causes ka sum) hota hai!

---

## Quick Recap

- **Bayes' Theorem** flips conditional probability: from P(A | Eᵢ) to **P(Eᵢ | A)**.
- **Formula:** P(Eᵢ | A) = [ P(Eᵢ)P(A | Eᵢ) ] / [ Σ P(Eⱼ)P(A | Eⱼ) ] = (Favorable Branch) / (Total of All Branches).
- Always check: **Σ P(Eᵢ | A) = 1**!

---

## Practice Questions

1. An urn contains 5 red and 5 black balls. A ball is drawn at random, its colour is noted, and it is returned to the urn along with 2 additional balls of the same colour. Then a second ball is drawn. If the second ball is red, what is the probability that the first ball was red?
2. A bag contains 4 red and 4 black balls; another bag contains 2 red and 6 black balls. One of the two bags is selected at random and a ball is drawn, which is found to be red. Find the probability that it came from the first bag.
3. Of the students in a college, 60% reside in hostel and 40% are day scholars. 30% of hostellers and 20% of day scholars attain an A grade. A student chosen at random has an A grade. What is the probability that the student is a hosteller?
4. In answering a multiple-choice question, a student either knows the answer (probability 3/4) or guesses (probability 1/4). Assuming a guessing student gets it right with probability 1/4, what is the probability that the student knew the answer given that he answered it correctly?
5. There are three coins: one is two-headed, another is biased (75% heads), and the third is unbiased (50% heads). One coin is chosen at random and tossed; it shows Heads. What is the probability that it was the two-headed coin?
6. An insurance company insures 2000 scooter, 4000 car, and 6000 truck drivers (accident rates 0.01, 0.03, 0.15). One insured person meets with an accident. What is the probability that he is a scooter driver?
7. A factory has two machines A and B producing 60% and 40% of output, with defect rates 2% and 1% respectively. An item is found defective. Find the probability it was produced by Machine B.
8. A person speaks truth 4 out of 5 times. A coin is tossed and he reports that a Head appeared. Find the probability that it was actually a Head.
9. Suppose 5% of men and 0.25% of women have grey hair. A grey-haired person is selected at random from a group with equal numbers of men and women. What is the probability the person is male?
10. State True or False: In Bayes' theorem, the sum of all posterior probabilities P(E₁ | A) + P(E₂ | A) + ... + P(Eₙ | A) is always equal to 1.

### Answers

1. E₁ = 1st Red (1/2), E₂ = 1st Black (1/2); P(2nd R | E₁) = 7/12, P(2nd R | E₂) = 5/12.
   P(E₁ | 2nd R) = (7/24) / (7/24 + 5/24) = **7/12**.
2. P(E₁)=P(E₂)=1/2; P(R | E₁)=4/8=1/2, P(R | E₂)=2/8=1/4.
   P(E₁ | R) = (1/2) / (1/2 + 1/4) = **2/3**.
3. P(H)=0.6, P(D)=0.4; P(A | H)=0.3, P(A | D)=0.2.
   P(H | A) = (0.18) / (0.18 + 0.08) = 18/26 = **9/13**.
4. P(K)=3/4, P(G)=1/4; P(Right | K)=1, P(Right | G)=1/4.
   P(K | Right) = (3/4) / (3/4 + 1/16) = (12/16) / (13/16) = **12/13**.
5. Equal priors 1/3; P(H | C₁)=1, P(H | C₂)=3/4, P(H | C₃)=1/2.
   P(C₁ | H) = 1 / (1 + 3/4 + 1/2) = 4 / (4 + 3 + 2) = **4/9**.
6. Branches (×6): Scooter 0.01, Car 0.06, Truck 0.45 (sum 0.52).
   P(Scooter | Accident) = 0.01 / 0.52 = **1/52**.
7. Branches: A = 0.012, B = 0.004 (sum 0.016).
   P(B | Defective) = 0.004 / 0.016 = **1/4**.
8. P(H) = P(T) = 1/2; P(Reports H | H) = 4/5, P(Reports H | T) = 1/5.
   P(H | Reports H) = (4/10) / (4/10 + 1/10) = **4/5**.
9. Equal priors 1/2; P(Grey | M) = 5%, P(Grey | W) = 0.25%.
   P(M | Grey) = 5 / (5 + 0.25) = 5 / 5.25 = **20/21**.
10. **True** ✅ — the numerators add up to the exact denominator P(A), so their sum is P(A)/P(A) = 1!

---

Ab tum Bayes' theorem ke master ho! Agle part mein hum random experiments ke outcomes ko numbers mein badlenge — **Random Variables, Probability Distributions, Mean aur Variance**: [Probability (Part 4)](probability-part4.md).
