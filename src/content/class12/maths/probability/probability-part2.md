# Chapter 13: Probability (Part 2)

> **Class:** 12 | **Subject:** Mathematics  
> **Previous part:** [Probability (Part 1)](probability.md)

---

Rashi ek data center mein do alag backup servers monitor kar rahi hai — dono alag power supply par chalte hain, isliye Server A ke fail hone ka Server B par koi asar nahi padta (ye **independent events** hain!). Doosri taraf, ek bulb factory mein 3 machines alag-alag percent bulbs banati hain aur har machine ka defect rate alag hai — random bulb ke defective hone ki overall probability nikaalne ke liye teeno machines ke paths ko jodna padta hai (**Law of Total Probability**)! Chalo dono powerful concepts seekhein.

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Independent Events** | Do events E aur F jahan ek ke hone se doosre ki probability par koi farq nahi padta: **P(E ∩ F) = P(E) · P(F)** |
| **Mutually Exclusive Events** | Do events jo ek saath ho hi nahi sakte: **P(E ∩ F) = 0** (independence se bilkul alag cheez!) |
| **Partition of Sample Space** | Mutually exclusive aur exhaustive events E₁, E₂, ..., Eₙ jinka union poora S ho aur P(Eᵢ) > 0 |
| **Law of Total Probability** | **P(A) = Σ P(Eᵢ) · P(A given Eᵢ)** — har possible raaste se A hone ki probability ka sum! |

---

## 1. Independent Events

Agar F ke hone se E ki probability bilkul nahi badalti, yaani P(E | F) = P(E), toh multiplication rule ban jata hai:

```
  E and F are Independent  ⇔  P(E ∩ F) = P(E) · P(F)
```

### Important Theorems on Independence
1. Agar E aur F independent hain, toh ye teeno pairs bhi **automatically independent** hote hain:
   - **E and F'**  ⇒  P(E ∩ F') = P(E) · P(F')
   - **E' and F**  ⇒  P(E' ∩ F) = P(E') · P(F)
   - **E' and F'** ⇒  P(E' ∩ F') = P(E') · P(F')
2. **"At least one of E or F happens"** (jab E, F independent hon):
   **P(E ∪ F) = 1 − P(E' ∩ F') = 1 − P(E') · P(F')** (super fast shortcut!)
3. **Three events A, B, C are mutually independent** iff ALL FOUR hold:
   - P(A ∩ B) = P(A)P(B), P(B ∩ C) = P(B)P(C), P(C ∩ A) = P(C)P(A), AND **P(A ∩ B ∩ C) = P(A)P(B)P(C)**!

---

## 2. Law of Total Probability

Maan lo sample space S ko mutually exclusive aur exhaustive events E₁, E₂, ..., Eₙ mein baant diya gaya hai (partition). Koi bhi event A inmein se kisi ek Eᵢ ke saath mil kar hi ho sakta hai:

```
  A = (A ∩ E₁) ∪ (A ∩ E₂) ∪ ... ∪ (A ∩ Eₙ)   (disjoint pieces!)

  Therefore:
  P(A) = P(E₁)P(A | E₁) + P(E₂)P(A | E₂) + ... + P(Eₙ)P(A | Eₙ)
```

---

## 3. Solved Examples

### Example 1: Testing independence on a die roll
**Question:** A die is thrown. Let E be the event "the number is even" and F be the event "the number is a multiple of 3". Check whether E and F are independent.

**Solution:**
- S = {1, 2, 3, 4, 5, 6}.
- E = {2, 4, 6} ⇒ P(E) = 3/6 = 1/2.
- F = {3, 6} ⇒ P(F) = 2/6 = 1/3.
- E ∩ F = {6} ⇒ P(E ∩ F) = 1/6.
- Check: P(E) · P(F) = (1/2) × (1/3) = **1/6 = P(E ∩ F)** ⇒ **E and F ARE independent!**

**Jaanch:** P(E | F) = 1/2 = P(E) ✅

---

### Example 2: Solving a problem independently
**Question:** Probability of solving a specific problem independently by A and B are 1/2 and 1/3 respectively. If both try to solve the problem independently, find the probability that:
(a) the problem is solved,
(b) exactly one of them solves the problem.

**Solution:**
- P(A) = 1/2 ⇒ P(A') = 1/2;   P(B) = 1/3 ⇒ P(B') = 2/3.
- (a) P(problem solved) = P(A ∪ B) = 1 − P(A')P(B') = 1 − (1/2)(2/3) = 1 − 1/3 = **2/3**.
- (b) P(exactly one solves) = P(A)P(B') + P(A')P(B) = (1/2)(2/3) + (1/2)(1/3) = 1/3 + 1/6 = **1/2**.

**Jaanch:** P(both) = 1/6, P(exactly one) = 3/6, P(none) = 2/6; sum = 6/6 = 1 ✅

---

### Example 3: Law of Total Probability (two bags!)
**Question:** Bag I contains 3 red and 4 black balls, while Bag II contains 5 red and 6 black balls. One bag is selected at random and a ball is drawn from it. Find the probability that the ball drawn is red.

**Solution:**
- Let E₁ = Bag I chosen, E₂ = Bag II chosen ⇒ P(E₁) = P(E₂) = **1/2**.
- Let A = red ball drawn.
  - P(A | E₁) = **3/7** (3 red out of 7 in Bag I).
  - P(A | E₂) = **5/11** (5 red out of 11 in Bag II).
- By Law of Total Probability:
  P(A) = P(E₁)P(A | E₁) + P(E₂)P(A | E₂)
       = (1/2)(3/7) + (1/2)(5/11) = (1/2)[(33 + 35)/77] = (1/2)(68/77) = **34/77**.

**Jaanch:** 3/7 ≈ 0.429, 5/11 ≈ 0.455; average = 34/77 ≈ 0.442 (right in the middle!) ✅

---

## Aam Galtiyan (Common Mistakes)

1. **Mutually Exclusive aur Independent ko ek hi cheez samajh lena:**
   - Galat: "E aur F mutually exclusive hain, isliye independent bhi honge."
   - Sahi: Bilkul ulta! Agar P(E) > 0 aur P(F) > 0 hain aur wo mutually exclusive hain (P(E ∩ F) = 0), toh P(E)·P(F) > 0 ≠ 0 — matlab non-empty mutually exclusive events **kabhi independent nahi ho sakte**! (Ek hua toh doosra 100% nahi hoga — maximum dependence!)
2. **Pairwise independence ko mutual independence maan lena:**
   - Galat: Teen events A, B, C ke liye sirf P(A∩B)=P(A)P(B), P(B∩C)=P(B)P(C), P(C∩A)=P(C)P(A) check karke ruk jana.
   - Sahi: Chauthi condition **P(A ∩ B ∩ C) = P(A)P(B)P(C)** bhi check karna zaroori hai!
3. **Total probability mein dono bags ke balls mila dena:**
   - Galat: Bag I (3R,4B) aur Bag II (5R,6B) ko jod kar (3+5)/(7+11) = 8/18 = 4/9 likh dena!
   - Sahi: Kyunki dono bags mein total balls alag hain (7 vs 11), har bag ko 1/2 weight dena zaroori hai: **(1/2)(3/7) + (1/2)(5/11) = 34/77 ≠ 4/9**!

---

## Quick Recap

- **Independent:** P(E ∩ F) = P(E)P(F); also E' and F' are independent.
- **At least one (independent):** P(A ∪ B) = 1 − P(A')P(B').
- **Total Probability:** P(A) = Σ P(Eᵢ)P(A | Eᵢ) over a partition {E₁, ..., Eₙ}.

---

## Practice Questions

1. Given P(A) = 3/5 and P(B) = 1/5, find P(A ∩ B) if A and B are independent events.
2. Two cards are drawn at random and without replacement from a pack of 52 cards. Are the events "first card is an Ace" and "second card is an Ace" independent? What if drawn WITH replacement?
3. Given P(A) = 1/2, P(A ∪ B) = 3/5, and P(B) = p. Find p if A and B are: (a) mutually exclusive, (b) independent.
4. Three students A, B, C try to solve a puzzle independently with probabilities 1/2, 1/3, and 1/4 respectively. Find the probability that the puzzle is solved.
5. A coin is tossed and a die is thrown. Let A = "Head appears" and B = "3 appears on the die". Check whether A and B are independent.
6. Two balls are drawn with replacement from a box containing 10 black and 8 red balls. Find the probability that: (a) both are red, (b) first is black and second is red, (c) one is black and one is red.
7. An insurance company insures 2000 scooter drivers, 4000 car drivers, and 6000 truck drivers. Their accident probabilities are 0.01, 0.03, and 0.15 respectively. Find the total probability that a randomly chosen insured person meets with an accident.
8. A factory has two machines A and B. Machine A produces 60% of items (2% defective) and Machine B produces 40% of items (1% defective). Find the probability that a randomly chosen item is defective.
9. If A and B are independent events with P(A) = 0.3 and P(B) = 0.4, find P(A ∪ B) and P(A | B).
10. State True or False: If P(A) > 0 and P(B) > 0, then A and B can be both mutually exclusive and independent at the same time.

### Answers

1. P(A ∩ B) = (3/5)(1/5) = **3/25**.
2. Without replacement: P(2nd Ace | 1st Ace) = 3/51 ≠ 4/52 ⇒ **NOT independent**. With replacement: 4/52 = 4/52 ⇒ **Independent**.
3. (a) Mutually exclusive: 3/5 = 1/2 + p ⇒ **p = 1/10**.
   (b) Independent: 3/5 = 1/2 + p − (1/2)p ⇒ 1/10 = p/2 ⇒ **p = 1/5**.
   Jaanch (b): 1/2 + 1/5 − 1/10 = 6/10 = 3/5 ✅
4. 1 − P(A')P(B')P(C') = 1 − (1/2)(2/3)(3/4) = 1 − 1/4 = **3/4**.
5. P(A) = 1/2, P(B) = 1/6, P(A ∩ B) = 1/12 = (1/2)(1/6) ⇒ **Independent**.
6. Total 18 balls: P(B)=5/9, P(R)=4/9. (a) (4/9)² = **16/81**; (b) (5/9)(4/9) = **20/81**; (c) 2(5/9)(4/9) = **40/81**.
7. Total = 12000: P(S)=1/6, P(C)=2/6, P(T)=3/6.
   P(Accident) = (1/6)(0.01) + (2/6)(0.03) + (3/6)(0.15) = (0.01 + 0.06 + 0.45)/6 = 0.52/6 = **13/150 ≈ 0.0867**.
8. P(Defective) = (0.6)(0.02) + (0.4)(0.01) = 0.012 + 0.004 = **0.016 (1.6%)**.
9. P(A ∪ B) = 0.3 + 0.4 − 0.12 = **0.58**; P(A | B) = P(A) = **0.3**.
10. **False** ❌ — mutually exclusive gives P(A ∩ B) = 0, whereas independence gives P(A)P(B) > 0.

---

Ab tumne Law of Total Probability se "forward" probability nikaalna seekh liya! Agle part mein hum probability ka sabse famous "reverse" formula seekhenge — **Bayes' Theorem**, jisse hum effect dekh kar cause ki probability nikaalte hain: [Probability (Part 3)](probability-part3.md).
