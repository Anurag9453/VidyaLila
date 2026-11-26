# Chapter 13: Probability

> **Class:** 12 | **Subject:** Mathematics  
> **Previous chapter:** [Linear Programming (Part 4)](../linear-programming/linear-programming-part4.md)

---

Ranjana apne dost ke saath Ludo khel rahi thi aur do dice phenke. Pehla die table par ruk gaya aur us par **5** aaya, jabki doosra die abhi ghoom raha tha! Ranjana ko jeetne ke liye total sum kam se kam **9** chahiye. Normally do dice mein sum ≥ 9 ki probability 10/36 = 5/18 hoti hai — par ab jab humein pata chal chuka hai ki pehla die **5** hai, toh sample space 36 se sikud kar sirf 6 outcomes ((5,1) se (5,6)) reh gaya, aur sum ≥ 9 ke liye (5,4), (5,5), (5,6) — yaani **3/6 = 1/2** chance! Is tarah nayi jaankari milne par probability ka update hona hi **Conditional Probability** kehlata hai!

Class 11 ke [Probability](../../../class11/maths/probability/probability.md) mein tumne sample space, events, aur addition theorem seekha tha — ab hum usi par Class 12 ke powerful tools build karenge.

---

## Naye Shabd (Key Terms)

| Term | Hinglish Meaning |
|---|---|
| **Conditional Probability P(E / F)** | Event E ke hone ki probability **jab ye pehle se pata ho ki event F ho chuka hai** (P(F) > 0) |
| **Reduced Sample Space** | Jab F ho chuka ho, toh ab poora S nahi balki sirf **F hi naya sample space** ban jata hai |
| **Multiplication Theorem** | Do events ke ek saath hone ki probability: **P(E ∩ F) = P(E) · P(F / E) = P(F) · P(E / F)** |
| **Without Replacement** | Ek item nikaalne ke baad wapas na rakhna — isse agle draw ki probability badal jati hai! |

---

## 1. Conditional Probability Formula & Properties

Agar E aur F ek hi sample space S ke do events hain aur **P(F) > 0**, toh:

```
  P(E | F)  =  P(E ∩ F) / P(F)   =   n(E ∩ F) / n(F)   (for equally likely outcomes)
```

### Key Properties of Conditional Probability
1. **0 ≤ P(E | F) ≤ 1**
2. **P(S | F) = P(F | F) = 1**
3. **Addition Rule (conditioned on F):** P((A ∪ B) | F) = P(A | F) + P(B | F) − P((A ∩ B) | F)
4. **Complement Rule (conditioned on F):** **P(E' | F) = 1 − P(E | F)**

---

## 2. Multiplication Theorem on Probability

Conditional probability ke formula ko cross-multiply kar do:
- **Two events:** **P(E ∩ F) = P(E) · P(F | E) = P(F) · P(E | F)**
- **Three events:** **P(E ∩ F ∩ G) = P(E) · P(F | E) · P(G | E ∩ F)**

Ye formula tab sabse zyada kaam aata hai jab items **ek ke baad ek without replacement** draw kiye jayein!

---

## 3. Solved Examples

### Example 1: Direct formula application
**Question:** If P(E) = 7/13, P(F) = 9/13, and P(E ∩ F) = 4/13, find P(E | F) and P(F | E).

**Solution:**
- P(E | F) = P(E ∩ F) / P(F) = (4/13) / (9/13) = **4/9**.
- P(F | E) = P(E ∩ F) / P(E) = (4/13) / (7/13) = **4/7**.

**Jaanch:** Notice P(E | F) = 4/9 ≠ 4/7 = P(F | E); order matters! ✅

---

### Example 2: Classic two-children family puzzle
**Question:** A family has two children. Assume each child is equally likely to be a boy (B) or a girl (G). Find the probability that both children are boys given that:
(a) the youngest is a boy,
(b) at least one of the children is a boy.

**Solution:**
- Sample space S = {(B, B), (B, G), (G, B), (G, G)} (elder first, younger second).
- Event E (both boys) = {(B, B)} ⇒ P(E) = 1/4.
- (a) Event F (youngest is a boy) = {(B, B), (G, B)} ⇒ P(F) = 2/4 = 1/2.
      E ∩ F = {(B, B)} ⇒ P(E | F) = (1/4) / (2/4) = **1/2**.
- (b) Event G (at least one boy) = {(B, B), (B, G), (G, B)} ⇒ P(G) = 3/4.
      E ∩ G = {(B, B)} ⇒ P(E | G) = (1/4) / (3/4) = **1/3**!

**Jaanch:** Reduced sample space in (a) has 2 outcomes (1 favorable ⇒ 1/2); in (b) has 3 outcomes (1 favorable ⇒ 1/3) ✅

---

### Example 3: Multiplication theorem — drawing cards without replacement
**Question:** Two cards are drawn successively without replacement from a well-shuffled pack of 52 cards. Find the probability that both are black.

**Solution:**
- Let E = first card is black, F = second card is black.
- Total black cards = 26 out of 52 ⇒ **P(E) = 26/52 = 1/2**.
- Given E happened, 25 black cards remain out of 51 ⇒ **P(F | E) = 25/51**.
- By multiplication theorem:
  P(E ∩ F) = P(E) · P(F | E) = (1/2) × (25/51) = **25/102**.

**Jaanch:** Using combinations: C(26, 2) / C(52, 2) = (26×25)/(52×51) = 25/102 ✅

---

### Example 4: Three-event multiplication theorem
**Question:** Three cards are drawn successively without replacement from a pack of 52 cards. What is the probability that the first two cards are Kings and the third card is an Ace?

**Solution:**
- Let K₁ = first is King, K₂ = second is King, A₃ = third is Ace.
- P(K₁) = 4/52.
- P(K₂ | K₁) = 3/51 (3 Kings left out of 51 cards).
- P(A₃ | K₁ ∩ K₂) = 4/50 (all 4 Aces still left out of 50 cards).
- P(K₁ ∩ K₂ ∩ A₃) = (4/52) × (3/51) × (4/50) = (1/13) × (1/17) × (2/25) = **2/5525**.

**Jaanch:** 13 × 17 = 221; 221 × 25 = 5525 ⇒ 2/5525 ✅

---

## Aam Galtiyan (Common Mistakes)

1. **P(E | F) aur P(F | E) ko same samajh lena:**
   - Galat: Denominator mein P(E) ki jagah P(F) rakh dena.
   - Sahi: Jo event **bar ke right side (given)** mein hai, hamesha wahi denominator mein aata hai: P(E | F) = P(E ∩ F) / **P(F)**!
2. **P(E | F') = 1 − P(E | F) likh dena:**
   - Galat: Complement bar ke right side par lagakar 1 se minus karna.
   - Sahi: Complement rule sirf **left side** par lagta hai: **P(E' | F) = 1 − P(E | F)**! Right side badalne par denominator hi badal jata hai!
3. **Without replacement mein denominator 52 hi rakh dena:**
   - Galat: Do black cards without replacement ke liye (26/52) × (26/52) = 1/4 likhna.
   - Sahi: Har draw ke baad total cards 1 kam hote hain: (26/52) × (25/51) = **25/102**!

---

## Quick Recap

- **P(E | F) = P(E ∩ F) / P(F)** (P(F) > 0); **P(E' | F) = 1 − P(E | F)**.
- **Multiplication rule:** P(E ∩ F) = P(E) · P(F | E); extends naturally to 3 or more sequential events!

---

## Practice Questions

1. If P(A) = 0.6, P(B) = 0.3, and P(A ∩ B) = 0.2, find P(A | B) and P(B | A).
2. If P(A) = 6/11, P(B) = 5/11, and P(A ∪ B) = 7/11, find P(A ∩ B), P(A | B), and P(B | A).
3. A die is thrown twice and the sum of the numbers appearing is observed to be 6. What is the conditional probability that the number 4 has appeared at least once?
4. A coin is tossed three times. Find P(E | F) where E = at least two heads, F = first toss is a head.
5. An urn contains 10 black and 5 white balls. Two balls are drawn one after the other without replacement. What is the probability that both drawn balls are black?
6. A fair die is rolled. Consider E = {1, 3, 5}, F = {2, 3}, G = {2, 3, 4, 5}. Find P(E | F), P(F | E), and P((E ∪ F) | G).
7. In a school of 1000 students, 430 are girls, and 10% of the girls study in Class 12. What is the probability that a randomly chosen student studies in Class 12 given that the chosen student is a girl?
8. Given P(A) = 1/2, P(B) = 0, why is P(A | B) not defined?
9. Three cards are drawn successively without replacement from a 52-card deck. Find the probability that all three are Hearts.
10. State True or False: If E ⊂ F and P(F) > 0, then P(F | E) = 1 (assuming P(E) > 0).

### Answers

1. P(A | B) = 0.2/0.3 = **2/3**; P(B | A) = 0.2/0.6 = **1/3**.
2. P(A ∩ B) = P(A) + P(B) − P(A ∪ B) = 6/11 + 5/11 − 7/11 = **4/11**.
   P(A | B) = 4/5; P(B | A) = 4/6 = **2/3**.
3. F (sum 6) = {(1,5), (2,4), (3,3), (4,2), (5,1)} (5 outcomes); E ∩ F (has 4) = {(2,4), (4,2)} (2 outcomes) ⇒ **2/5**.
4. F = {HHH, HHT, HTH, HTT} (4 outcomes); E ∩ F = {HHH, HHT, HTH} (3 outcomes) ⇒ **3/4**.
5. (10/15) × (9/14) = (2/3) × (9/14) = **3/7**. Jaanch: C(10,2)/C(15,2) = 45/105 = 3/7 ✅
6. P(E | F) = 1/2; P(F | E) = 1/3; E ∪ F = {1,2,3,5}, (E ∪ F) ∩ G = {2,3,5} ⇒ P((E ∪ F) | G) = **3/4**.
7. Directly given: 10% of girls are in Class 12 ⇒ P(Class 12 | Girl) = 43/430 = **0.1 (1/10)**.
8. Formula P(A | B) = P(A ∩ B) / P(B) requires dividing by P(B) = 0, which is undefined.
9. (13/52) × (12/51) × (11/50) = (1/4) × (4/17) × (11/50) = **11/850**.
10. **True** ✅ — if E ⊂ F, then E ∩ F = E, so P(F | E) = P(E)/P(E) = 1.

---

Ab tum conditional probability aur multiplication theorem samajh chuke ho! Agle part mein dekhenge ki jab do events ek-doosre par bilkul depend na karein (**Independent Events**), aur jab koi event kai alag-alag raaston se ho sake (**Law of Total Probability**), toh probability kaise nikaalte hain: [Probability (Part 2)](probability-part2.md).
