# Chapter: Probability

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla chapter [statistics-part4.md](../statistics/statistics-part4.md) tha** (Statistics ka aakhri topic, jiske teaser ne vaada kiya tha ki ab Class 11 Mathematics ke aakhri chapter mein hum uncertainty ko numbers mein badalna seekhenge!). Experimental aur basic classical probability Class 9 ke [probability.md](../../../class9/maths/probability/probability.md) mein padhi thi, aur set operations (∪, ∩, complement) Class 11 Chapter 1 ke [sets-part3.md](../sets/sets-part3.md) mein padhe the.
> **Topics covered in this file:**
> 1. Random Experiments, Outcomes, Sample Space, Aur Events (Types, Algebra, Mutually Exclusive, Exhaustive)

---

# Topic 1: Random Experiments, Outcomes, Sample Space, Aur Events

Class 9 ke [probability.md](../../../class9/maths/probability/probability.md) mein tumne simple coins aur dice ke liye "favourable outcomes / total outcomes" nikaala tha.

Class 11 mein hum Probability ko ek **rigorous mathematical foundation (Set Theory)** par khada karte hain! Yahan har possible result ko ek set (**Sample Space S**) mein rakha jata hai, aur har sawal ko us set ka ek **subset (Event)** bana diya jata hai — jisse Chapter 1 ke sabhi Set Theory laws (Union, Intersection, Complement, De Morgan) seedhe Probability par kaam karne lagte hain!

---

## Gajendra ka board-game club prototype

Gajendra apne college ke board-game club ke liye ek naya tabletop game "Coin & Die Quest" design kar raha hai. Is game ke ek turn ka rule bada interesting hai:
- Pehle ek coin uchhaalo.
- Agar **Head (H)** aaye, to ek 6-sided die phenko (1 se 6 tak).
- Agar **Tail (T)** aaye, to coin dobara uchhaalo (H ya T)!

Game ko balance karne ke liye Gajendra ne sabse pehle har possible turn-result ki poori list banayi:
**S = {H1, H2, H3, H4, H5, H6, TH, TT}** (kul 8 outcomes!).
Phir usne "Bonus Move" rule banaya: "Die par even number aaye" -> **E = {H2, H4, H6}**!

Gajendra ne club members ko samjhaya: "Poori possible list **Sample Space S** hai, har ek result **Sample Point** hai, aur Bonus Move ka subset E ek **Event** hai!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Random Experiment** | Aisa experiment jiske 1 se zyada possible outcomes hon aur advance mein exact result predict na ho sake | Tossing a coin, throwing a die |
| **Sample Space (S)** | Kisi random experiment ke sabhi possible outcomes ka set | Die throw: S = {1, 2, 3, 4, 5, 6} |
| **Sample Point (ω)** | Sample Space S ka har ek individual element | 4 in {1, 2, 3, 4, 5, 6} |
| **Event (E)** | Sample Space S ka koi bhi subset (E ⊆ S) | Even number: E = {2, 4, 6} |
| **Mutually Exclusive** | Do events jo ek saath kabhi nahi ho sakte: A ∩ B = φ | Even {2, 4, 6} & Odd {1, 3, 5} |
| **Exhaustive Events** | Aise events jinka union poora Sample Space S bana de: E₁ ∪ E₂ ∪ ... ∪ Eₙ = S | Even ∪ Odd = {1, 2, 3, 4, 5, 6} |

---

## Part A: Random Experiment Aur Sample Space

Kisi bhi experiment ko **Random Experiment** tabhi kehte hain jab woh do shartein poori kare:
1. Uske **ek se zyada possible outcomes** hon.
2. Experiment karne se pehle **exact outcome predict na kiya ja sake**.

Sabhi possible outcomes ke set ko **Sample Space (S)** kehte hain.

---

## Part B: Types Of Events Aur Algebra Of Events

Kyunki har Event Sample Space S ka ek subset hai (Chapter 1 [sets-part3.md](../sets/sets-part3.md) se!):

### 1. Chaar Basic Types of Events:
- **Impossible Event (φ):** Empty set (kabhi nahi ho sakta! Jaise die par 7 aana).
- **Sure / Certain Event (S):** Poora Sample Space (hamesha hoga! Jaise die par 1 se 6 ke beech number aana).
- **Simple (Elementary) Event:** Jisme **sirf 1** sample point ho (jaise {5}).
- **Compound Event:** Jisme **1 se zyada** sample points hon (jaise {2, 4, 6}).

### 2. Algebra of Events (English -> Set Translation!):
| English Phrase | Set Notation | Matlab |
|---|---|---|
| **Not A** (Complementary event) | **A'** (ya S - A) | S ke woh sabhi outcomes jo A mein nahi hain |
| **A or B** (at least one of A, B) | **A ∪ B** | A mein ho, ya B mein ho, ya dono mein |
| **A and B** (both A and B) | **A ∩ B** | Jo A aur B dono mein common ho |
| **A but not B** (only A) | **A - B** (ya A ∩ B') | A mein ho par B mein bilkul nahi |
| **Neither A nor B** | **A' ∩ B'** = (A ∪ B)' | Na A ho aur na hi B ho |

---

## Part C: Mutually Exclusive vs Exhaustive Events

1. **Mutually Exclusive (Disjoint) Events:**
   Do events A aur B mutually exclusive hote hain jab unme koi bhi common outcome na ho: **A ∩ B = φ** (ek hone par doosra bilkul nahi ho sakta!).
2. **Exhaustive Events:**
   Events E₁, E₂, ..., Eₙ exhaustive hote hain jab unka union poora sample space bhar de: **E₁ ∪ E₂ ∪ ... ∪ Eₙ = S** (kam se kam ek event zaroor hoga!).

> **Khaas Baat:** Do events mutually exclusive ho sakte hain par exhaustive nahi (jaise die par {1} aur {2}), aur exhaustive ho sakte hain par mutually exclusive nahi (jaise {1, 2, 3, 4} aur {3, 4, 5, 6})!

---

## Solved Examples (Step-by-Step With Jaanch)

### Example 1.1: Writing A Two-Stage Sample Space
**Sawaal:** Ek coin uchhaala jata hai. Agar Head aaye to ek die phenki jaati hai; agar Tail aaye to coin dobara uchhaala jata hai. Sample space S likho aur n(S) batao.

**Solution:**
- Branch 1 (Pehla toss = H -> die 1..6): H1, H2, H3, H4, H5, H6 (6 outcomes)
- Branch 2 (Pehla toss = T -> coin H, T): TH, TT (2 outcomes)

Sample Space: **S = {H1, H2, H3, H4, H5, H6, TH, TT}**.
Total sample points: **n(S) = 6 + 2 = 8**.

Jaanch:
- Jaanch: 6 + 2 = 8 distinct outcomes; koi outcome repeat nahi hua ✅

---

### Example 1.2: Events And Mutual Exclusivity On Two Dice
**Sawaal:** Do dice ek saath phenki jaati hain (n(S) = 36). Teen events define hain:
- A: dono numbers ka sum even hai
- B: dono numbers ka sum 3 ka multiple hai
- C: dono numbers ka sum 4 se chhota hai
(a) A ∩ B aur A ∩ C likho. (b) Kya B aur C mutually exclusive hain?

**Solution:**
- C (sum < 4, yaani sum 2 ya 3): **C = {(1, 1), (1, 2), (2, 1)}**.
- A ∩ B (sum even BHI ho aur multiple of 3 BHI => sum multiple of 6, yaani sum = 6 ya 12):
  **A ∩ B = {(1, 5), (2, 4), (3, 3), (4, 2), (5, 1), (6, 6)}** (6 outcomes).
- A ∩ C (sum even aur < 4 => sum = 2):
  **A ∩ C = {(1, 1)}** (1 outcome).
- B ∩ C (sum multiple of 3 aur < 4 => sum = 3):
  **B ∩ C = {(1, 2), (2, 1)} ≠ φ**!
  Isliye B aur C **mutually exclusive NAHI hain**!

Jaanch:
- Jaanch: (1, 2) mein sum = 3, jo 3 ka multiple hai (in B) aur < 4 hai (in C), so B ∩ C ≠ φ ✅

---

### Example 1.3: Mutually Exclusive And Exhaustive Partition On Three Coins
**Sawaal:** Teen coins ek saath uchhaale jaate hain. Teen events define karo: E₁ (no head), E₂ (exactly 1 head), E₃ (at least 2 heads). Verify karo ki E₁, E₂, E₃ mutually exclusive aur exhaustive hain.

**Solution:**
Sample space S = {HHH, HHT, HTH, THH, HTT, THT, TTH, TTT} (n(S) = 8).
- E₁ = {TTT} (1 outcome)
- E₂ = {HTT, THT, TTH} (3 outcomes)
- E₃ = {HHT, HTH, THH, HHH} (4 outcomes)

1. **Mutually Exclusive Check:** E₁ ∩ E₂ = φ, E₂ ∩ E₃ = φ, E₁ ∩ E₃ = φ (koi outcome common nahi!).
2. **Exhaustive Check:** E₁ ∪ E₂ ∪ E₃ = {TTT, HTT, THT, TTH, HHT, HTH, THH, HHH} = S (1 + 3 + 4 = 8 = n(S)!).

Isliye E₁, E₂, E₃ **mutually exclusive AND exhaustive** hain!

Jaanch:
- Jaanch: 1 + 3 + 4 = 8 = 2³ = n(S) with zero overlap ✅

---

### Example 1.4: Drawing Two Tokens Without Replacement
**Sawaal:** Ek box mein 2 red tokens (R₁, R₂) aur 3 blue tokens (B₁, B₂, B₃) hain. Ek ke baad ek 2 tokens bina wapas rakhe (without replacement) nikaale jaate hain. n(S) kya hoga, aur event A ("both tokens have the same colour") mein kitne outcomes honge?

**Solution:**
Pehla token 5 tareekon se aur doosra bache hue 4 tareekon se => **n(S) = 5 × 4 = 20** ordered pairs.
Event A (both red OR both blue):
- Both red: (R₁, R₂), (R₂, R₁) -> 2 × 1 = 2 outcomes
- Both blue: (B₁, B₂), (B₂, B₁), (B₁, B₃), (B₃, B₁), (B₂, B₃), (B₃, B₂) -> 3 × 2 = 6 outcomes
Total in A: **n(A) = 2 + 6 = 8** outcomes!
Aur complement A' ("different colours") mein n(A') = 20 - 8 = 12 outcomes honge.

Jaanch:
- Jaanch: Different colours = (R then B: 2 × 3 = 6) + (B then R: 3 × 2 = 6) = 12, aur 8 + 12 = 20 = n(S) ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Mutually Exclusive aur Exhaustive ko ek hi samajh lena
- **Galat soch:** "Agar A ∩ B = φ hai, to A aur B exhaustive bhi honge."
- **Sahi samajh:** Nahi! Die par A = {1, 2} aur B = {3, 4} mutually exclusive hain (A ∩ B = φ), par A ∪ B = {1, 2, 3, 4} ≠ S (5 aur 6 chhoot gaye!), isliye yeh exhaustive NAHI hain!

### Galti 2: Single outcome ω ko bina curly brackets ke event likh dena
- **Galat soch:** "Simple event = 5."
- **Sahi samajh:** Event hamesha ek **set (subset of S)** hota hai, isliye curly brackets lagao: **{5}**!

### Galti 3: Do dice mein (2, 3) aur (3, 2) ko ek hi outcome ginna
- **Galat soch:** "2 aur 3 aaya, to bas ek hi outcome hai."
- **Sahi samajh:** Pehli die par 2 aur doosri par 3 -> **(2, 3)**, jabki pehli par 3 aur doosri par 2 -> **(3, 2)**! Yeh do bilkul alag ordered outcomes hain, tabhi kul 6 × 6 = **36** outcomes bante hain!

---

## Quick Recap

- **Sample Space S:** Set of all possible outcomes of a random experiment.
- **Event E:** Any subset of S (φ = impossible, S = sure, 1 element = simple, >1 = compound).
- **Algebra of Events:** A' (not A), A ∪ B (A or B), A ∩ B (A and B), A - B (A but not B).
- **Mutually Exclusive:** Pairwise intersections are φ.
- **Exhaustive:** Union of all events equals S.

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Write the sample space when a coin is tossed three times, and state n(S).

**Solution:**
S = {HHH, HHT, HTH, THH, HTT, THT, TTH, TTT}.
n(S) = 2³ = **8**.

Jaanch:
- Jaanch: 2 × 2 × 2 = 8 distinct triplets ✅

---

### Question 2
A coin is tossed and then a die is rolled. Describe the sample space S and find n(S).

**Solution:**
S = {H1, H2, H3, H4, H5, H6, T1, T2, T3, T4, T5, T6}.
n(S) = 2 × 6 = **12**.

Jaanch:
- Jaanch: 6 outcomes with H + 6 outcomes with T = 12 ✅

---

### Question 3
A die is thrown repeatedly until a 6 comes up. Describe the sample space for this experiment.

**Solution:**
Let N denote any non-6 outcome (1, 2, 3, 4, or 5).
S = {6, N6, NN6, NNN6, ...} — yeh ek **infinite sample space** hai (kyunki 6 kab aayega, iski koi upper limit nahi!).

Jaanch:
- Jaanch: Har outcome 6 par khatam hota hai aur pehle 0, 1, 2, ... non-6 outcomes aa sakte hain ✅

---

### Question 4
A die is rolled. Let E be the event "die shows 4" and F be the event "die shows even number". Are E and F mutually exclusive?

**Solution:**
E = {4}, F = {2, 4, 6}.
E ∩ F = {4} ≠ φ.
Therefore, E and F are **NOT mutually exclusive**.

Jaanch:
- Jaanch: Outcome 4 dono events mein common hai ✅

---

### Question 5
A die is thrown. Describe the events: A (a number less than 7), B (a number greater than 7), C (a multiple of 3). Also find A ∪ B, A ∩ C, and C'.

**Solution:**
S = {1, 2, 3, 4, 5, 6}.
- A = {1, 2, 3, 4, 5, 6} = S (sure event)
- B = φ (impossible event)
- C = {3, 6}
Now:
- A ∪ B = S ∪ φ = **{1, 2, 3, 4, 5, 6}**
- A ∩ C = S ∩ {3, 6} = **{3, 6}**
- C' = S - C = **{1, 2, 4, 5}**.

Jaanch:
- Jaanch: C ∪ C' = {1, 2, 3, 4, 5, 6} = S aur C ∩ C' = φ ✅

---

### Question 6
Two dice are thrown. Event A is "getting an even number on the first die" and Event B is "getting an odd number on the first die". Are A and B mutually exclusive and exhaustive?

**Solution:**
- A = {(2, y), (4, y), (6, y) : y in 1..6} (18 outcomes)
- B = {(1, y), (3, y), (5, y) : y in 1..6} (18 outcomes)
A ∩ B = φ (pehli die par number ek saath even aur odd nahi ho sakta!) => **Mutually exclusive**.
A ∪ B = S (18 + 18 = 36 outcomes) => **Exhaustive**.

Jaanch:
- Jaanch: B = A' (complementary events hamesha mutually exclusive aur exhaustive dono hote hain!) ✅

---

### Question 7
Three coins are tossed. Give two events A and B that are mutually exclusive but NOT exhaustive.

**Solution:**
S = {HHH, HHT, HTH, THH, HTT, THT, TTH, TTT}.
Take A = {HHH} (all heads) and B = {TTT} (all tails).
- A ∩ B = φ => **Mutually exclusive**.
- A ∪ B = {HHH, TTT} ≠ S => **NOT exhaustive** (6 outcomes missing!).

Jaanch:
- Jaanch: A ∩ B = φ aur n(A ∪ B) = 2 < 8 ✅

---

### Question 8
A coin is tossed four times. How many sample points are in the sample space? How many outcomes have exactly 1 tail?

**Solution:**
- Total sample points: n(S) = 2⁴ = **16**.
- Exactly 1 tail: {THHH, HTHH, HHTH, HHHT} => **4 outcomes** (⁴C₁ = 4).

Jaanch:
- Jaanch: 2⁴ = 16 aur ⁴C₁ = 4 ✅

---

### Question 9
An experiment consists of rolling a die and then tossing a coin once if the number on the die is even. If the number on the die is odd, the coin is tossed twice. How many outcomes are in the sample space?

**Solution:**
- Even die (2, 4, 6 -> 3 choices) followed by 1 coin toss (2 choices): 3 × 2 = **6 outcomes**.
- Odd die (1, 3, 5 -> 3 choices) followed by 2 coin tosses (4 choices: HH, HT, TH, TT): 3 × 4 = **12 outcomes**.
Total n(S) = 6 + 12 = **18 outcomes**.

Jaanch:
- Jaanch: 6 + 12 = 18 distinct outcomes ✅

---

### Question 10
From a group of 2 boys (B₁, B₂) and 2 girls (G₁, G₂), a committee of 2 students is chosen. Write the sample space S (unordered pairs) and the event E that the committee has 1 boy and 1 girl.

**Solution:**
Unordered pairs (⁴C₂ = 6):
**S = {B₁B₂, B₁G₁, B₁G₂, B₂G₁, B₂G₂, G₁G₂}** (n(S) = 6).
Event E (1 boy, 1 girl):
**E = {B₁G₁, B₁G₂, B₂G₁, B₂G₂}** (n(E) = 4).

Jaanch:
- Jaanch: ⁴C₂ = 6 aur ²C₁ × ²C₁ = 4 ✅

---

### Question 11
A die is thrown. Find two events A and B that are exhaustive but NOT mutually exclusive.

**Solution:**
Take A = {1, 2, 3, 4} and B = {3, 4, 5, 6}.
- A ∪ B = {1, 2, 3, 4, 5, 6} = S => **Exhaustive**.
- A ∩ B = {3, 4} ≠ φ => **NOT mutually exclusive**.

Jaanch:
- Jaanch: Union = S (6 elements) aur Intersection = {3, 4} ≠ φ ✅

---

### Question 12
In a single throw of two dice, write the event E of getting a doublet (same number on both dice) and state n(E).

**Solution:**
**E = {(1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6)}**.
**n(E) = 6**.

Jaanch:
- Jaanch: 6 faces give 6 matching pairs ✅

---

Ab tumne Sample Space aur Events ki bhasha ko Set Theory ke saath pakka jod liya hai! Agle topic [probability-part2.md](probability-part2.md) mein hum **Axiomatic Approach to Probability** seekhenge — jahan har outcome ko ek weight (probability) diya jata hai aur Class 9 ka formula n(A)/n(S) axioms se derive hota hai!
