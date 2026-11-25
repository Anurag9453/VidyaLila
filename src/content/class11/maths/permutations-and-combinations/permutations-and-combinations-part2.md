# Chapter: Permutations and Combinations (Part 2)

> **Class:** 11 | **Subject:** Mathematics
> **Ye file [permutations-and-combinations.md](permutations-and-combinations.md) se aage chalti hai** (wahan Topic 1 mein Fundamental Principle of Counting aur Box/Slot Method the). Chapter ki shuruaat: [permutations-and-combinations.md](permutations-and-combinations.md).
> **Topics covered in this file:**
> 2. Permutations, Factorial Notation, Restrictions Aur Repetitions

---

# Topic 2: Permutations, Factorial Notation, Restrictions Aur Repetitions

Topic 1 mein humne baar-baar 4 × 3 × 2 × 1 ya 5 × 4 × 3 jaise ghatte hue products likhe. Maths ne inhe chhota likhne ke liye **Factorial (n!)** aur **Permutation (ⁿPᵣ)** ka symbol banaya. Jab cheezon ko kisi **khaas kram (order)** mein sajana ho — jaise shelf par trophies, line mein students, ya kisi shabd ke letters — to har alag arrangement ek **Permutation** kehlata hai! Is topic mein hum Factorial (including **0! = 1 kyun?**), **ⁿPᵣ**, identical objects ke permutations (**ALLAHABAD**), aur **Bundle (Together)** aur **Gap (Never Together)** tricks seekhenge.

---

## Waseem ki trophy shelf aur repeated letters

School ke sports room mein Waseem 5 alag-alag trophies ko ek shelf par saja raha tha. Pehle usne gina: 5 × 4 × 3 × 2 × 1 = **120** tareeke! Teacher ma'am ne kaha, "Is 5 × 4 × 3 × 2 × 1 ko short mein **5!** (5 factorial) likhte hain!"

Phir Waseem ne board par likhe shabd **ALLAHABAD** ke 9 letters ko alag-alag kram mein sajane ki koshish ki. Usne kaha, "9 letters hain, to 9! = 362,880 words banenge!"
Ma'am muskuraayi: "Ruko! Agar chaaron **A** ko aapas mein badal do, to kya naya shabd banega? Nahi, wahi shabd dikhega! Isliye identical letters ke repeats se **divide** karna padega!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Factorial (n!)** | 1 se n tak ke sabhi natural numbers ka guna: n × (n−1) × ... × 1 | 5! = 120, **0! = 1** |
| **Permutation (ⁿPᵣ)** | n alag cheezon mein se r cheezon ko **order ke saath** sajane ke tareeke | ⁿPᵣ = n! / (n − r)! |
| **Identical objects permutation** | Jab n cheezon mein p₁ ek jaisi, p₂ doosri tarah ki ek jaisi hon | n! / (p₁! p₂! ... pₖ!) |
| **Bundle / String method** | Jin cheezon ko **hamesha saath** rakhna ho, unhe rassi se baandh kar 1 unit maan lo | Vowels together |
| **Gap method** | Jin cheezon ko **kabhi saath nahi** rakhna, pehle baaki sajhao, phir unke beech ke gaps mein rakho | No two vowels together |

---

## Part A: Factorial Notation (n!) — Aur 0! = 1 Kyun?

Kisi bhi natural number n ke liye:
> **n! = n × (n − 1) × (n − 2) × ... × 3 × 2 × 1**

Chhote factorials zubani yaad rakho:
**1! = 1,  2! = 2,  3! = 6,  4! = 24,  5! = 120,  6! = 720,  7! = 5040.**

**Recursive property (bahut kaam ki!):** **n! = n × (n − 1)!**
Jaise 8! = 8 × 7! = 8 × 7 × 6!.

### 0! = 1 Kyun Hota Hai? (0 Nahi!)

Upar wali property **n! = n × (n − 1)!** ko rewrite karo: **(n − 1)! = n! / n**.
- n = 4: 3! = 4!/4 = 24/4 = 6
- n = 3: 2! = 3!/3 = 6/3 = 2
- n = 2: 1! = 2!/2 = 2/2 = 1
- **n = 1:** **0! = 1!/1 = 1/1 = 1**!
*(Aur ⁿPₙ = n! / (n − n)! = n! / 0! ko n! ke barabar rakhne ke liye bhi **0! = 1** hona zaroori hai!)*

### Example 1: Factorial Simplification

(i) **8! / (6! × 2!)** ka maan nikalo.
(ii) Agar **1/6! + 1/7! = x / 8!**, to **x** nikalo.

**Hal:**
- (i) 8! = 8 × 7 × 6!:
  (8 × 7 × 6!) / (6! × 2) = 56 / 2 = **28**.
- (ii) Sabko 6! ke roop mein likho (7! = 7 × 6!, 8! = 8 × 7 × 6!):
  1/6! + 1/(7 × 6!) = x / (56 × 6!)
  Poori equation ko **56 × 6!** se guna karo:
  56 + 8 = x ⟹ **x = 64**.

**Jaanch:** (i) 40320/(720 × 2) = 28 ✅; (ii) 1/720 + 1/5040 = 8/5040 = 64/40320 ✅.

---

## Part B: Permutations — ⁿPᵣ, Repetition Aur Identical Objects

### 1. Distinct Objects, No Repetition (ⁿPᵣ)

n alag cheezon mein se r cheezon ko r slots mein sajane ke tareeke (Slot Method se):
**ⁿPᵣ = n(n − 1)(n − 2) ... (n − r + 1)** (kul r factors).
Upar-neeche (n − r)! se guna karo:

> **ⁿPᵣ = n! / (n − r)!**   (0 ≤ r ≤ n)

Khaas cases: **ⁿP₀ = 1**, **ⁿP₁ = n**, **ⁿPₙ = n!**.

### 2. Distinct Objects, Repetition Allowed
Har r slot mein n choices → **n × n × ... × n (r baar) = nʳ**.

### 3. Objects NOT All Distinct (Identical Objects)
Agar n cheezon mein se **p₁** ek jaisi hon, **p₂** doosri tarah ki ek jaisi hon, ..., **pₖ** k-th tarah ki ek jaisi hon, to unhe aapas mein badalne se naya arrangement nahi banta (har group pᵢ! baar repeat hota hai!). Isliye:

> **Total distinct permutations = n! / (p₁! p₂! ... pₖ!)**

### Example 2: ⁿPᵣ Equations Hal Karna

(i) Agar **ⁿP₅ = 42 × ⁿP₃** (n > 4), to n nikalo.
(ii) Agar **⁵Pᵣ = 2 × ⁶Pᵣ₋₁**, to r nikalo.

**Hal:**
- (i) n(n − 1)(n − 2)(n − 3)(n − 4) = 42 · n(n − 1)(n − 2).
  Kyunki n > 4, pehle teen non-zero factors kaat do:
  (n − 3)(n − 4) = 42 = 7 × 6 ⟹ n − 3 = 7 ⟹ **n = 10**.
- (ii) 5! / (5 − r)! = 2 × [6! / (6 − (r − 1))!] = 2 × 6 × 5! / (7 − r)!.
  5! kaato aur (7 − r)! = (7 − r)(6 − r)(5 − r)! rakho:
  (7 − r)(6 − r) = 12 = 4 × 3 ⟹ 7 − r = 4 ⟹ **r = 3** (check: r ≤ 5!).

**Jaanch:** (i) ¹⁰P₅ = 30240, 42 × ¹⁰P₃ = 42 × 720 = 30240 ✅; (ii) ⁵P₃ = 60, 2 × ⁶P₂ = 2 × 30 = 60 ✅.

### Example 3: Identical Letters — ALLAHABAD

Shabd **ALLAHABAD** ke sabhi letters se kul kitne alag permutations ban sakte hain?

**Hal:**
Kul letters n = **9**:
- A = **4 baar**, L = **2 baar**, H = 1, B = 1, D = 1.
Total distinct permutations = **9! / (4! × 2!)**
= (9 × 8 × 7 × 6 × 5 × 4!) / (4! × 2) = 9 × 4 × 7 × 6 × 5 = **7560**.

**Jaanch:** 362880 ÷ (24 × 2) = 362880 ÷ 48 = 7560 ✅.

---

## Part C: Restrictions — Bundle Method vs Gap Method

### Example 4: DAUGHTER — Together, Not All Together, aur Never Together!

Shabd **DAUGHTER** (8 sabhi alag letters: 3 vowels **A, U, E** aur 5 consonants **D, G, H, T, R**) ke letters se kitne words ban sakte hain jab:
(i) sabhi vowels **hamesha saath** rahein (all together),
(ii) sabhi vowels **saath NA** rahein (not all together),
(iii) **koi bhi do vowels** ek saath NA aayein (no two vowels together)?

**Hal:**
- Total words (bina kisi shart ke) = 8! = **40,320**.
- **(i) All vowels together (Bundle Method):**
  Teeno vowels (A, U, E) ko rassi se baandh kar **1 dabba [AUE]** banao!
  Ab hamare paas 5 consonants + 1 vowel-dabba = **6 units** hain → sajane ke tareeke = **6! = 720**.
  Par dabbe ke andar A, U, E bhi aapas mein **3! = 6** tareekon se ghoom sakte hain!
  Total = 6! × 3! = 720 × 6 = **4320**.
- **(ii) Vowels NOT ALL together:**
  Total − All together = 40,320 − 4320 = **36,000**.
  *(Isme 2 vowels saath ho sakte hain, bas teeno ek saath nahi honge!)*
- **(iii) NO TWO vowels together (Gap Method!):**
  Pehle 5 consonants ko sajhao (**5! = 120** tareeke). Unke aage-peeche aur beech mein **6 khali gaps (_)** ban jaate hain:
  **(gap) C (gap) C (gap) C (gap) C (gap) C (gap)**
  In 6 gaps mein 3 vowels ko baithane ke tareeke = **⁶P₃ = 6 × 5 × 4 = 120**.
  Total = 5! × ⁶P₃ = 120 × 120 = **14,400**!

**Jaanch:** 4320 + 36000 = 40320 = 8! ✅; 14400 < 36000 (kyunki "no two together" zyada sakht shart hai!) ✅.

---

## Aam galtiyan

1. **0! = 0 likh dena:**
   - *Galat kyun:* 0! = **1** hota hai! (0! = 0 hota to ⁿPₙ = n!/0! zero se divide hokar undefined ho jaata!)
2. **(a + b)! = a! + b! ya (2n)! = 2 × n! maan lena:**
   - *Counterexample:* (3 + 2)! = 5! = 120, jabki 3! + 2! = 6 + 2 = 8 (120 ≠ 8)!
3. **"Vowels not all together" aur "No two vowels together" ko ek samajh lena:**
   - *Antar yaad rakho:* Example 4 mein "not all together" = **36,000** (Total − Bundle), jabki "no two together" = **14,400** (Gap Method)! (Sirf 2 vowels hone par hi ye dono barabar hote hain!)

---

## Quick Recap

- **n! = n(n − 1)...1**, **0! = 1**.
- **ⁿPᵣ = n! / (n − r)!** (distinct, no repetition); **nʳ** (repetition allowed); **n! / (p₁! p₂!...)** (identical objects).
- **Together** → **Bundle Method** (units! × internal!).
- **No two together** → **Gap Method** (others! × (gaps)P(restricted)).

---

## Practice Questions

1. Evaluate:
   (a) 7! − 5!    (b) 12! / (10! × 2!)    (c) 9! / (5! × 4!)

2. If **1/8! + 1/9! = x / 10!**, find the value of x.

3. Find n if **ⁿ⁻¹P₃ : ⁿP₄ = 1 : 9**.

4. Find r if **⁵Pᵣ = ⁶Pᵣ₋₁**.

5. How many 4-digit numbers can be formed using the digits 1 to 9 if no digit is repeated?

6. How many words, with or without meaning, can be made from the letters of the word **MONDAY**, assuming that no letter is repeated, if:
   (a) 4 letters are used at a time?
   (b) all letters are used at a time?
   (c) all letters are used, but the first letter is a vowel?

7. In how many distinct permutations of the letters in **INSTITUTE** can the letters be arranged?

8. In how many ways can the letters of the word **PERMUTATIONS** be arranged if:
   (a) the words start with P and end with S?
   (b) vowels are all together?
   (c) there are always 4 letters between P and S?

9. How many 6-digit numbers can be formed from the digits **1, 2, 2, 3, 3, 3**?

10. In how many ways can **4 boys and 3 girls** be seated in a row such that:
    (a) all 3 girls sit together?
    (b) no two girls sit together?

11. How many words can be formed from the letters of **EQUATION** (all letters distinct) so that the vowels and consonants occur together (as two separate blocks)?

12. True or False? Give a one-line reason:
    (a) 0! = 1.
    (b) 3! + 4! = 7!.
    (c) ⁿP₀ = 1 for every non-negative integer n.
    (d) The number of arrangements of the letters of **APPLE** is 5! = 120.

### Answers

1. (a) 5040 − 120 = **4920**; (b) (12 × 11)/2 = **66**; (c) (9 × 8 × 7 × 6)/24 = **126**.

2. 10! × (1/8! + 1/9!) = 90 + 10 = **100**. Jaanch: 1/8! + 1/(9·8!) = 10/(9·8!) = 100/(10·9·8!) = 100/10! ✅.

3. [(n − 1)!/(n − 4)!] ÷ [n!/(n − 4)!] = 1/n = 1/9 ⟹ **n = 9**. Jaanch: ⁸P₃ = 336, ⁹P₄ = 3024, 336/3024 = 1/9 ✅.

4. 5!/(5 − r)! = 6!/(7 − r)! ⟹ (7 − r)(6 − r) = 6 = 3 × 2 ⟹ 7 − r = 3 ⟹ **r = 4** (r = 9 invalid kyunki r ≤ 5). Jaanch: ⁵P₄ = 120 aur ⁶P₃ = 120 ✅.

5. ⁹P₄ = 9 × 8 × 7 × 6 = **3024**.

6. MONDAY (6 distinct letters; 2 vowels O, A):
   (a) ⁶P₄ = 6 × 5 × 4 × 3 = **360**.
   (b) 6! = **720**.
   (c) 1st slot: 2 choices (O ya A), baaki 5 slots: 5! = 120 → 2 × 120 = **240**.

7. INSTITUTE (9 letters: I = 2, T = 3, baaki 1-1):
   9! / (2! × 3!) = 362880 / 12 = **30,240**. Jaanch: 362880 ÷ 12 = 30240 ✅.

8. PERMUTATIONS (12 letters: T = 2 baar! 5 vowels E, U, A, I, O sabhi alag):
   (a) P start aur S end fixed → beech ke 10 letters (T = 2): 10! / 2! = **1,814,400**.
   (b) 5 vowels ka 1 bundle + 7 consonants (T = 2) = 8 units → (8! / 2!) × 5! = 20160 × 120 = **2,419,200**.
   (c) P aur S ke beech 4 letters: (pos 1, 6), (2, 7), ..., (7, 12) = 7 pairs × 2 (P-S ya S-P) = 14 ways! Baaki 10 letters (T = 2): 10!/2!.
   Total = 14 × (10!/2!) = 14 × 1,814,400 = **25,401,600**.

9. 6! / (2! × 3!) = 720 / 12 = **60**. Jaanch: 720 ÷ 12 = 60 ✅.

10. (a) 3 girls ka 1 bundle + 4 boys = 5 units → 5! × 3! = 120 × 6 = **720**.
    (b) Gap method: 4 boys (4! = 24), 5 gaps mein 3 girls (⁵P₃ = 60) → 24 × 60 = **1440**.

11. 5 vowels (E, U, A, I, O) ka 1 block aur 3 consonants (Q, T, N) ka 1 block = 2 blocks (2! = 2 ways: V-C ya C-V).
    Internal arrangements: 5! × 3!. Total = 2! × 5! × 3! = 2 × 120 × 6 = **1440**.

12. (a) ✅ True: 0! = 1 by definition and consistency of n! = n(n − 1)!.
    (b) ❌ False: 3! + 4! = 6 + 24 = 30 ≠ 5040 = 7!.
    (c) ✅ True: n! / (n − 0)! = n!/n! = 1.
    (d) ❌ False: P do baar repeat hai, isliye 5!/2! = 60!

---

Ab tum factorial, permutations, identical objects aur Bundle/Gap restrictions par poori tarah master ho chuke ho.

**Agle topic mein:** jab order se koi farq **NA** pade — sirf team ya committee **chunni** ho — **Combinations (ⁿCᵣ)**!
