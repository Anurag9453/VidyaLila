# Chapter: Probability (Part 2)

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla topic [probability.md](probability.md) tha** (Topic 1: Random Experiments, Sample Space, aur Events).
> **Topics covered in this file:**
> 1. Axiomatic Approach to Probability, Valid Assignments, Equally Likely Outcomes, Aur Biased Experiments

---

# Topic 2: Axiomatic Approach to Probability

Class 9 mein tumne seedha formula padha tha: P(A) = favourable / total. Lekin agar koi coin biased (jhuka hua) ho jisme Head aane ka chance 70% aur Tail ka 30% ho, to wahan "favourable / total" (1/2) bilkul galat answer dega!

Isliye Russian mathematician **Andrey Kolmogorov** ne 1933 mein **Axiomatic Approach to Probability** diya — sirf 3 simple rules (axioms) jo fair coins par bhi kaam karte hain, biased dice par bhi, aur real-world weather models par bhi! Chalo in teen axioms ko samjhte hain!

---

## Oindrila ka weather-forecasting app audit

Oindrila ek weather-forecasting startup mein data analyst hai. Har subah app ke AI model ko teen mutually exclusive outcomes {Sunny, Cloudy, Rain} ki probabilities output karni hoti hain:
- **Model A:** P(Sunny) = 0.50, P(Cloudy) = 0.30, P(Rain) = 0.20 -> Sabhi [0, 1] mein hain aur sum = **1.00** (Valid!)
- **Model B (Buggy!):** P(Sunny) = 0.60, P(Cloudy) = 0.40, P(Rain) = 0.15 -> Sum = **1.15 ≠ 1** (Invalid!)

Oindrila ne bug report mein likha: "Koi bhi probability model tabhi valid hota hai jab har elementary outcome ki probability **0 aur 1 ke beech** ho aur sabhi outcomes ka **total sum exact 1** ho — yehi Kolmogorov ke Axioms hain!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Axiomatic Probability** | 3 buniyadi rules (axioms) par aadharit probability ki formal definition | 0 ≤ P(ωᵢ) ≤ 1, Σ P(ωᵢ) = 1 |
| **Valid Assignment** | Sample space ke har point ko diya gaya aisa number jo dono axioms satisfy kare | (0.5, 0.3, 0.2) |
| **Equally Likely Outcomes** | Jab har sample point ke aane ka chance bilkul barabar ho: P(ωᵢ) = 1/n | Fair coin, fair die |
| **Biased / Loaded** | Jab sabhi outcomes ke chances barabar NA hon | Even face twice as likely as odd |

---

## Part A: Kolmogorov Ke Teen Axioms (Finite Sample Space)

Maan lo finite sample space **S = {ω₁, ω₂, ..., ωₙ}** hai. Har outcome ωᵢ ko ek real number P(ωᵢ) assign kiya jata hai jise uski probability kehte hain, agar yeh teen axioms satisfy hon:

1. **Non-negativity & Upper Bound:** Har outcome ωᵢ ke liye **0 ≤ P(ωᵢ) ≤ 1**.
2. **Normalization (Total = 1):** Sabhi outcomes ki probabilities ka jod exact 1 hota hai:
   **P(ω₁) + P(ω₂) + ... + P(ωₙ) = 1**   (yaani **P(S) = 1**).
3. **Additivity for Any Event A ⊆ S:** Kisi bhi event A ki probability uske andar aane wale sabhi sample points ki probabilities ka jod hoti hai:
   **P(A) = Σ_{ωᵢ ∈ A} P(ωᵢ)**   (aur empty set ke liye **P(φ) = 0**!).

---

## Part B: Equally Likely Outcomes — Class 9 Formula Ka Proof ("Kyun"!)

Jab sabhi n outcomes **equally likely** hon, to har outcome ki probability same constant **p** hogi:
P(ω₁) = P(ω₂) = ... = P(ωₙ) = p.

Axiom 2 se:
p + p + ... + p (n times) = 1
n · p = 1  =>  **p = 1 / n**!

Ab agar kisi event A mein **n(A)** sample points hon, to Axiom 3 se:
P(A) = 1/n + 1/n + ... (n(A) times) = **n(A) / n(S)**!

Dekha? Class 9 ka classical formula asal mein Axiomatic Probability ka ek **special case** hai (sirf tab valid jab outcomes equally likely hon)!

---

## Solved Examples (Step-by-Step With Jaanch)

### Example 2.1: Checking Valid vs Invalid Probability Assignments
**Sawaal:** Sample space S = {ω₁, ω₂, ω₃, ω₄} par neeche di gayi teen assignments check karo — kaun si valid hai?
(a) 0.1, 0.2, 0.3, 0.4
(b) 0.5, 0.3, 0.4, -0.2
(c) 1/3, 1/3, 1/3, 1/6

**Solution:**
- **(a)** Sabhi values [0, 1] mein hain aur sum = 0.1 + 0.2 + 0.3 + 0.4 = 1.0 => **VALID**.
- **(b)** P(ω₄) = -0.2 < 0 (negative probability kabhi nahi ho sakti!) => **INVALID**.
- **(c)** Sum = 1/3 + 1/3 + 1/3 + 1/6 = 7/6 ≠ 1 => **INVALID**.

Jaanch:
- Jaanch: (a) dono axioms pass karta hai; (b) Axiom 1 fail; (c) Axiom 2 fail ✅

---

### Example 2.2: Biased (Loaded) Die Problem
**Sawaal:** Ek biased die mein sabhi odd numbers equally likely hain, aur har even number kisi bhi odd number se **duguna (twice as likely)** hai. Ek prime number aane ki probability gyat karo.

**Solution:**
Maan lo har odd face {1, 3, 5} ki probability **p** hai.
Tab har even face {2, 4, 6} ki probability **2p** hogi.

Axiom 2 (total sum = 1) lagao:
P(1) + P(2) + P(3) + P(4) + P(5) + P(6) = 1
p + 2p + p + 2p + p + 2p = 1
9p = 1 => **p = 1/9**.

Prime numbers on a die: **A = {2, 3, 5}**.
Axiom 3 se:
P(A) = P(2) + P(3) + P(5) = 2p + p + p = 4p = **4/9**.

Jaanch:
- Jaanch: Odd total = 3/9, Even total = 6/9, grand total = 9/9 = 1; P(2) + P(3) + P(5) = 2/9 + 1/9 + 1/9 = 4/9 ✅

---

### Example 2.3: Equally Likely Word Rearrangement
**Sawaal:** Word **MATH** ke 4 alag-alag letters ko randomly arrange kiya jata hai. Kya probability hai ki naya word ek vowel se shuru ho?

**Solution:**
Sabhi rearrangements equally likely hain:
- Total arrangements n(S) = 4! = **24**.
- Vowel sirf **A** hai! Agar pehli jagah par A fix kar dein, to baaki 3 letters (M, T, H) ko 3! = **6** tareekon se arrange kar sakte hain => n(E) = 6.

P(E) = n(E) / n(S) = 6 / 24 = **1/4**.

Jaanch:
- Jaanch: 4 letters mein se 1 vowel hai, isliye pehli position par vowel aane ka seedha chance 1/4 hai ✅

---

### Example 2.4: Probability Of 53 Sundays In A Leap Year
**Sawaal:** Ek randomly chune gaye **leap year** mein **53 Sundays** hone ki probability gyat karo.

**Solution:**
Ek leap year mein **366 din** hote hain = **52 poore weeks + 2 extra consecutive days**!
52 weeks mein 52 Sundays to pakke hain! 53rd Sunday sirf tab aayega jab bache hue **2 extra dinon** mein Sunday ho!

2 extra consecutive days ke 7 equally likely pairs hain:
S = {(Sun, Mon), (Mon, Tue), (Tue, Wed), (Wed, Thu), (Thu, Fri), (Fri, Sat), (Sat, Sun)}  => n(S) = **7**.

Sunday wale pairs: E = {(Sun, Mon), (Sat, Sun)} => n(E) = **2**.
**P(53 Sundays in a leap year) = 2/7**!

*(Note: Ordinary year mein 365 din = 52 weeks + 1 extra day hota hai, isliye wahan P(53 Sundays) = **1/7** hota hai!)*

Jaanch:
- Jaanch: 52 × 7 = 364; 366 - 364 = 2 extra days => 2 out of 7 equally likely pairs contain Sunday => 2/7 ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Biased experiment mein bhi n(A)/n(S) laga dena
- **Galat soch:** "Example 2.2 mein prime numbers {2, 3, 5} hain (3 out of 6), isliye probability = 3/6 = 1/2."
- **Sahi samajh:** n(A)/n(S) sirf **fair (equally likely)** outcomes ke liye valid hai! Biased die mein P(2) = 2/9 jabki P(3) = 1/9 hai, isliye sahi answer **4/9** hai (1/2 nahi!).

### Galti 2: Negative probability ya sum > 1 ko accept kar lena
- **Galat soch:** "0.5 + 0.3 + 0.4 + (-0.2) = 1.0 ho gaya, isliye yeh valid hai!"
- **Sahi samajh:** Sum 1 hone ke saath-saath **har individual probability ≥ 0** honi zaroori hai! -0.2 Axiom 1 ko todta hai!

### Galti 3: Leap year mein 53 Sundays ki probability 1/7 likh dena
- **Galat soch:** "Hafte mein 7 din hote hain, isliye 1/7."
- **Sahi samajh:** Ordinary year (365 days = 52 weeks + **1** day) mein 1/7 hota hai, par leap year (366 days = 52 weeks + **2** days) mein **2/7** hota hai!

---

## Quick Recap

- **3 Axioms:** (1) 0 ≤ P(ωᵢ) ≤ 1, (2) Σ P(ωᵢ) = 1 (P(S) = 1), (3) P(A) = Σ_{ωᵢ ∈ A} P(ωᵢ) (P(φ) = 0).
- **Equally Likely Special Case:** P(A) = n(A) / n(S).
- **Biased Experiments:** Express all P(ωᵢ) in terms of one variable p, solve Σ P(ωᵢ) = 1, then sum over event A.
- **53 Sundays:** Ordinary year = 1/7, Leap year = 2/7.

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Which of the following cannot be valid assignments of probabilities for outcomes of sample space S = {ω₁, ω₂, ω₃, ω₄}?
(a) 0.25, 0.25, 0.25, 0.25   (b) 1, 0, 0, 0   (c) 0.1, 0.2, 0.3, 0.5

**Solution:**
- (a) All in [0, 1], sum = 1 => **Valid**.
- (b) All in [0, 1], sum = 1 => **Valid** (sure event at ω₁!).
- (c) Sum = 1.1 ≠ 1 => **Invalid**.

Jaanch:
- Jaanch: Axiom 1 (0 ≤ p ≤ 1) allows 0 and 1, Axiom 2 requires exact sum = 1 ✅

---

### Question 2
A coin is biased so that Head is 3 times as likely to occur as Tail. If the coin is tossed once, find P(Head) and P(Tail).

**Solution:**
Let P(Tail) = p, then P(Head) = 3p.
p + 3p = 1 => 4p = 1 => p = 1/4.
**P(Tail) = 1/4**, **P(Head) = 3/4**.

Jaanch:
- Jaanch: 1/4 + 3/4 = 1 and 3/4 = 3 × (1/4) ✅

---

### Question 3
A fair die is thrown once. Find the probability of getting: (a) a prime number (b) a number greater than or equal to 3 (c) a number greater than 6.

**Solution:**
S = {1, 2, 3, 4, 5, 6}, equally likely (n(S) = 6).
- (a) Prime = {2, 3, 5} => **3/6 = 1/2**
- (b) ≥ 3 = {3, 4, 5, 6} => **4/6 = 2/3**
- (c) > 6 = φ (impossible) => **0**.

Jaanch:
- Jaanch: 1 is NOT prime, so primes are {2, 3, 5} (count 3) ✅

---

### Question 4
A coin is tossed twice. What is the probability that at least one tail occurs?

**Solution:**
S = {HH, HT, TH, TT} (n(S) = 4, equally likely).
At least one tail: E = {HT, TH, TT} (n(E) = 3).
P(E) = **3/4**.

Jaanch:
- Jaanch: Complement "no tail" is {HH} with P = 1/4 => 1 - 1/4 = 3/4 ✅

---

### Question 5
A card is selected from a standard deck of 52 cards. Find the probability that the card is: (a) an ace of spades (b) an ace (c) a black card.

**Solution:**
n(S) = 52 (equally likely).
- (a) Ace of spades: **1/52**
- (b) Ace (4 aces): 4/52 = **1/13**
- (c) Black card (26 spades + clubs): 26/52 = **1/2**.

Jaanch:
- Jaanch: 4/52 = 1/13 aur 26/52 = 1/2 ✅

---

### Question 6
A fair coin with 1 marked on one face and 6 on the other, and a fair die are both tossed. Find the probability that the sum of numbers that turn up is (a) 3 (b) 12.

**Solution:**
Sample space has 2 × 6 = 12 equally likely outcomes: (1, 1)..(1, 6) and (6, 1)..(6, 6).
- (a) Sum = 3: only (1, 2) => **1/12**.
- (b) Sum = 12: only (6, 6) => **1/12**.

Jaanch:
- Jaanch: Minimum sum is 1 + 1 = 2, maximum is 6 + 6 = 12; both 3 and 12 occur once out of 12 ✅

---

### Question 7
In a sample space S = {ω₁, ω₂, ω₃, ω₄}, the probabilities are P(ω₁) = k, P(ω₂) = 2k, P(ω₃) = 3k, P(ω₄) = 4k. Find k and P({ω₂, ω₄}).

**Solution:**
By Axiom 2: k + 2k + 3k + 4k = 1 => 10k = 1 => **k = 1/10**.
P({ω₂, ω₄}) = 2k + 4k = 6k = 6/10 = **3/5**.

Jaanch:
- Jaanch: 1/10 + 2/10 + 3/10 + 4/10 = 10/10 = 1 ✅

---

### Question 8
Three fair coins are tossed once. Find the probability of getting: (a) exactly 2 heads (b) at least 2 heads (c) at most 2 heads.

**Solution:**
S = {HHH, HHT, HTH, THH, HTT, THT, TTH, TTT} (n(S) = 8).
- (a) Exactly 2 heads: {HHT, HTH, THH} => **3/8**
- (b) At least 2 heads (2 or 3): {HHT, HTH, THH, HHH} => 4/8 = **1/2**
- (c) At most 2 heads (0, 1, or 2 — everything except HHH!): **7/8**.

Jaanch:
- Jaanch: 1 - P(HHH) = 1 - 1/8 = 7/8 ✅

---

### Question 9
A letter is chosen at random from the word **PROBABILITY**. Find the probability that the letter is (a) a vowel (b) a consonant.

**Solution:**
Total letters = 11 (P, R, O, B, A, B, I, L, I, T, Y).
Vowels: O, A, I, I (4 letters). Consonants: 11 - 4 = 7 letters.
- (a) P(vowel) = **4/11**
- (b) P(consonant) = **7/11**.

Jaanch:
- Jaanch: 4/11 + 7/11 = 11/11 = 1 ✅

---

### Question 10
What is the probability that an ordinary (non-leap) year selected at random will contain 53 Mondays?

**Solution:**
365 days = 52 full weeks + 1 extra day.
The 1 extra day can be any of the 7 days of the week equally likely => **1/7**.

Jaanch:
- Jaanch: 1 favourable day (Monday) out of 7 equally likely days => 1/7 ✅

---

### Question 11
Two dice are thrown simultaneously. Find the probability of getting a sum of 9.

**Solution:**
n(S) = 36. Pairs with sum 9: {(3, 6), (4, 5), (5, 4), (6, 3)} => n(E) = 4.
P(E) = 4 / 36 = **1/9**.

Jaanch:
- Jaanch: 4/36 = 1/9 ✅

---

### Question 12
A number is chosen at random from the first 20 natural numbers {1, 2, ..., 20}. Find the probability that it is divisible by 4.

**Solution:**
Multiples of 4 in 1..20: {4, 8, 12, 16, 20} (5 numbers).
P(E) = 5 / 20 = **1/4**.

Jaanch:
- Jaanch: 20 / 4 = 5 multiples => 5/20 = 1/4 ✅

---

Ab tum Axiomatic Probability aur biased experiments dono ko handle karna seekh chuke ho! Agle topic [probability-part3.md](probability-part3.md) mein hum **Addition Theorem P(A ∪ B) = P(A) + P(B) - P(A ∩ B)**, **Complement Rule**, aur **De Morgan's Probability Laws** derive karenge!
