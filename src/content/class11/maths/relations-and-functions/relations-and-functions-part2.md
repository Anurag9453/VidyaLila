# Chapter: Relations and Functions (Part 2)

> **Class:** 11 | **Subject:** Mathematics
> **Ye file [relations-and-functions.md](relations-and-functions.md) se aage chalti hai** (wahan Topic 1 mein Ordered Pairs aur Cartesian Product A × B the). Power Set aur Subsets ki ginti: [sets-part2.md](../sets/sets-part2.md).
> **Topics covered in this file:**
> 2. Relations, Domain, Codomain Aur Range

---

# Topic 2: Relations, Domain, Codomain Aur Range

Topic 1 mein humne do sets A aur B ke **sabhi possible** ordered pairs ka set **A × B** banaya. Par asli zindagi mein hum har cheez ko har cheez se nahi jodte — hum sirf un jodon ko chunte hain jo kisi **khaas rishte (rule)** ko maante hain, jaise "x, y se bada hai" ya "x, y ko divide karta hai". Maths mein A × B ke aise kisi bhi chhante hue subset ko **Relation** kehte hain. Is topic mein hum Relations ko likhna, unke **Arrow Diagrams** banana, **Domain, Codomain aur Range** mein saaf antar karna, aur total relations ki ginti karna seekhenge.

---

## Seema ka badminton court chart

School ke inter-house badminton tournament mein Seema ko match chart banana tha. Uske paas do lists thin:
- **Set A (Players):** {P1, P2, P3, P4}
- **Set B (Available Courts):** {Court 1, Court 2, Court 3, Court 4}

Tournament ke niyam ke hisaab se Seema ne players ko courts allot kiye:
- P1 → Court 1
- P2 → Court 2
- P3 → Court 2  (P2 aur P3 ek hi court par match khelenge!)
- P4 ko aaj bye mila, uska koi match nahi tha!

Seema ne teen alag baatein note kin:
1. **Kin players ko court mila?** {P1, P2, P3} — ye hua **Domain** (P4 bahar raha!).
2. **School mein kul kitne courts uplabdh the?** {Court 1, Court 2, Court 3, Court 4} — poora Set B hua **Codomain**.
3. **Asal mein kaun se courts use hue?** {Court 1, Court 2} — ye hua **Range** (Court 3 aur Court 4 khaali pade rahe!).

Bas! Yahi teen shabd — **Domain, Codomain aur Range** — poore Relations aur Functions ki jaan hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Relation R from A to B** | Cartesian product A × B ka koi bhi subset (R ⊆ A × B) | R = {(1, 2), (2, 3)} |
| **Image** | Agar (a, b) ∈ R, to b ko a ki image kehte hain | (2, 4) ∈ R mein 4, 2 ki image hai |
| **Pre-image** | Agar (a, b) ∈ R, to a ko b ki pre-image kehte hain | (2, 4) ∈ R mein 2, 4 ki pre-image hai |
| **Domain of R** | R ke sabhi ordered pairs ke **first** elements ka set | {a : (a, b) ∈ R} (⊆ A) |
| **Range of R** | R ke sabhi ordered pairs ke **second** elements ka set | {b : (a, b) ∈ R} (⊆ B) |
| **Codomain of R** | Poora doosra set **B** (chahe uske saare elements use hon ya na hon) | Range ⊆ Codomain hamesha! |
| **Arrow diagram** | Do ovals (A aur B) bana kar har pair (a, b) ∈ R ke liye a se b par teer kheenchna | Figure 2.1 |
| **Inverse relation R⁻¹** | R ke har pair (a, b) ko palat kar (b, a) bana dena | R = {(1, 2)} ⟹ R⁻¹ = {(2, 1)} |

---

## Part A: Relation Kya Hai? (Teen Roop)

Do non-empty sets A aur B diye hon, to **A se B par ek Relation R**, Cartesian product **A × B ka koi bhi subset** hota hai:

> **R ⊆ A × B**

Agar (a, b) ∈ R ho, to hum ise **a R b** bhi likhte hain ("a is related to b").

Kisi relation ko **teen tareekon** se dikhaya ja sakta hai:
1. **Roster form:** pairs ki seedhi list, jaise R = {(1, 2), (2, 3), (3, 4)}.
2. **Set-builder form:** niyam ke roop mein, jaise R = {(x, y) : y = x + 1, x ∈ A, y ∈ B}.
3. **Arrow diagram:** A aur B ke do ovals banao aur har (x, y) ∈ R ke liye x se y tak ek teer (arrow) kheench do.

**Khaas case:** Jab relation A se **khud A** par ho (R ⊆ A × A), to use **"a relation on set A"** kehte hain.

### Example 1: Relation on Set A — Roster, Arrow Diagram, Domain, Codomain, Range

Maan lo **A = {1, 2, 3, 4, 5, 6}**. Set A par ek relation R define karo:
**R = {(x, y) : y = x + 1, x, y ∈ A}**.
(i) R ko Roster form mein likho.
(ii) Arrow diagram banao.
(iii) Domain, Codomain aur Range nikalo.

**Hal:**
- (i) A ke har x ke liye y = x + 1 check karo (dhyan rahe y bhi A mein hona chahiye!):
  - x = 1 → y = 2 ∈ A  → (1, 2)
  - x = 2 → y = 3 ∈ A  → (2, 3)
  - x = 3 → y = 4 ∈ A  → (3, 4)
  - x = 4 → y = 5 ∈ A  → (4, 5)
  - x = 5 → y = 6 ∈ A  → (5, 6)
  - x = 6 → y = 7 ∉ A! (Isliye 6 ka koi joda nahi banega!)
  **R = {(1, 2), (2, 3), (3, 4), (4, 5), (5, 6)}**.

```
       Set A                Set A
      +-----+              +-----+
      :  1  : ------>      :  1  :
      :  2  : ------>      :  2  :
      :  3  : ------>      :  3  :
      :  4  : ------>      :  4  :
      :  5  : ------>      :  5  :
      :  6  :   (no arrow) :  6  :
      +-----+              +-----+
   (1->2, 2->3, 3->4, 4->5, 5->6)
```

> **Figure 2.1** – Arrow diagram of R = {(x, y) : y = x + 1} on A = {1..6}. Left mein 6 se koi teer nahi nikalta (isliye 6 Domain mein nahi); right mein 1 par koi teer nahi aata (isliye 1 Range mein nahi).

- (iii)
  - **Domain(R)** = sabhi first elements = **{1, 2, 3, 4, 5}** (6 bahar!)
  - **Codomain(R)** = poora doosra set A = **{1, 2, 3, 4, 5, 6}**
  - **Range(R)** = sabhi second elements = **{2, 3, 4, 5, 6}** (1 bahar!)

**Jaanch:** Range {2, 3, 4, 5, 6} ⊆ Codomain {1, 2, 3, 4, 5, 6} ✅; har pair mein y − x = 1 ✅.

---

## Part B: Alag-Alag Relations Par Practice (Square, Divisibility, Cube)

### Example 2: "x is the square of y"

Maan lo **P = {4, 9, 25}** aur **Q = {−5, −3, −2, 2, 3, 5}**.
Relation R: **"x is the square of y"** (x ∈ P, y ∈ Q).
(i) Set-builder form, (ii) Roster form, (iii) Domain, Codomain aur Range nikalo.

**Hal:**
- (i) **Set-builder:** R = {(x, y) : x = y², x ∈ P, y ∈ Q}.
- (ii) Har x ∈ P ke liye dekho kis y ∈ Q ka square x hai:
  - 4 = (−2)² aur 2² → (4, −2), (4, 2)
  - 9 = (−3)² aur 3² → (9, −3), (9, 3)
  - 25 = (−5)² aur 5² → (25, −5), (25, 5)
  **Roster:** R = {(4, −2), (4, 2), (9, −3), (9, 3), (25, −5), (25, 5)}.
- (iii)
  - **Domain** = {4, 9, 25} (= P)
  - **Codomain** = {−5, −3, −2, 2, 3, 5} (= Q)
  - **Range** = {−5, −3, −2, 2, 3, 5} (= Q, is baar Range = Codomain!).

**Jaanch:** 6 pairs hain, aur har pair mein x = y² (jaise (−5)² = 25) ✅.

### Example 3: Divisibility Relation ("x divides y")

Maan lo **A = {1, 2, 3, 4}** aur **B = {2, 4, 6, 8, 10}**.
Relation R = {(x, y) ∈ A × B : x divides y}.
Roster form, Domain, Range aur Inverse relation R⁻¹ nikalo.

**Hal:**
- x = 1 har number ko divide karta hai: (1, 2), (1, 4), (1, 6), (1, 8), (1, 10)
- x = 2 sabhi even numbers ko divide karta hai: (2, 2), (2, 4), (2, 6), (2, 8), (2, 10)
- x = 3 sirf 6 ko divide karta hai: (3, 6)
- x = 4 sirf 4 aur 8 ko divide karta hai: (4, 4), (4, 8)
- **R** mein kul 5 + 5 + 1 + 2 = **13 pairs** hain.
- **Domain(R)** = {1, 2, 3, 4}; **Range(R)** = {2, 4, 6, 8, 10}; **Codomain(R)** = B.
- **Inverse relation R⁻¹:** R ke har pair (x, y) ko palat kar (y, x) likh do:
  R⁻¹ = {(2, 1), (4, 1), (6, 1), (8, 1), (10, 1), (2, 2), (4, 2), (6, 2), (8, 2), (10, 2), (6, 3), (4, 4), (8, 4)}.
  (Dhyan do: **Domain(R⁻¹) = Range(R)** aur **Range(R⁻¹) = Domain(R)**!)

**Jaanch:** 13 pairs mein har y % x == 0 ✅; R⁻¹ mein bhi exact 13 pairs ✅.

### Example 4: Prime Cubes Relation

Relation **R = {(x, x³) : x is a prime number less than 10}** ko Roster form mein likho, aur Domain aur Range batao.

**Hal:**
- 10 se chhote prime numbers: **2, 3, 5, 7**.
- Unke cubes: 2³ = 8, 3³ = 27, 5³ = 125, 7³ = 343.
- **R = {(2, 8), (3, 27), (5, 125), (7, 343)}**.
- **Domain** = {2, 3, 5, 7}, **Range** = {8, 27, 125, 343}.

**Jaanch:** 2³ = 8, 3³ = 27, 5³ = 125, 7³ = 343 ✅.

---

## Part C: Total Number of Relations from A to B

### Derivation (Kyun?)

Paribhasha yaad karo: A se B par koi bhi relation **A × B ka ek subset** hota hai!
- Maan lo **n(A) = p** aur **n(B) = q**.
- Topic 1 se, **n(A × B) = p × q = pq**.
- Chapter 1 ([sets-part2.md](../sets/sets-part2.md)) se, jis set mein **N** elements hon, uske kul **2ᴺ** subsets hote hain!
- Isliye A × B ke kul subsets = **2^(pq)**!

> **Total number of relations from A to B = 2^(n(A) × n(B)) = 2^(pq)**

(Isme **empty relation ∅** aur poora **universal relation A × B** dono shamil hote hain! Agar **non-empty relations** poochhe jaayein, to **2^(pq) − 1**.)

### Example 5: Relations ki ginti

Maan lo **A = {x, y, z}** aur **B = {1, 2}**.
(i) A se B par kul kitne relations ban sakte hain?
(ii) Unme se kitne **non-empty** relations honge?

**Hal:**
- n(A) = 3, n(B) = 2 ⟹ n(A × B) = 3 × 2 = 6.
- (i) Total relations = 2⁶ = **64**.
- (ii) Non-empty relations = 64 − 1 = **63**.

**Jaanch:** 2⁶ = 64 aur 64 − 1 = 63 ✅.

---

## Aam galtiyan

1. **Codomain aur Range ko ek hi samajh lena:** Student Example 1 mein Range ko {1, 2, 3, 4, 5, 6} likh deta hai.
   - *Galat kyun:* Poora doosra set **Codomain** hota hai ({1, 2, 3, 4, 5, 6}). **Range** mein sirf wahi elements aate hain jin par kam se kam ek arrow aakar ruka ho ({2, 3, 4, 5, 6}). Hamesha **Range ⊆ Codomain**.
2. **Total relations ko pq bol dena (2^(pq) ke bajay):** Student n(A) = 3, n(B) = 2 ke liye "6 relations" likh deta hai.
   - *Galat kyun:* 6 to A × B ke **elements (pairs)** ki ginti hai! Har relation A × B ka ek **subset** hai, aur 6 elements ke **2⁶ = 64** subsets bante hain.
3. **Domain mein un elements ko bhi likh dena jinka koi joda nahi bana:** Example 1 mein 6 se koi teer nahi nikla (kyunki 7 ∉ A), phir bhi student Domain = {1, 2, 3, 4, 5, 6} likh deta hai.
   - *Sahi soch:* Relation ka Domain sirf R ke **maujooda pairs** ke first elements ka set hai (Domain ⊆ A, par zaroori nahi ki Domain = A!).

---

## Quick Recap

- **Relation R from A to B:** R ⊆ A × B (Roster, Set-builder, ya Arrow diagram mein likhte hain).
- **Domain** = R ke first elements (⊆ A); **Range** = R ke second elements (⊆ B); **Codomain** = poora B. Hamesha **Range ⊆ Codomain**.
- **Inverse relation R⁻¹:** har (a, b) ∈ R ko (b, a) bana do; Domain aur Range aapas mein badal jaate hain.
- **Total relations** from A to B = **2^(n(A) × n(B))**; non-empty = **2^(pq) − 1**.

---

## Practice Questions

1. Let A = {1, 2, 3, 5} and B = {4, 6, 9}. Define a relation R from A to B by R = {(x, y) : the difference between x and y is odd; x ∈ A, y ∈ B}. Write R in Roster form and find its Domain and Range.

2. Let A = {1, 2, 3, 4, 6}. Let R be the relation on A defined by R = {(a, b) : a, b ∈ A and b is exactly divisible by a}.
   (a) Write R in Roster form.
   (b) Find the Domain and Range of R.

3. Determine the Domain and Range of the relation R defined by R = {(x, x + 5) : x ∈ {0, 1, 2, 3, 4, 5}}.

4. Let A = {1, 2, 3, ..., 12}. Define a relation R on A by R = {(x, y) : 2x − y = 0, x, y ∈ A}. Write R in Roster form and state its Domain, Codomain, and Range.

5. Write the relation R = {(x, x²) : x is a positive even integer less than 11} in Roster form. Find its Domain, Range, and Inverse relation R⁻¹.

6. Let R be the relation on Z defined by R = {(a, b) : a, b ∈ Z and a − b is an integer}. Find the Domain and Range of R.

7. Let A = {1, 2} and B = {3, 4, 5}. Find:
   (a) the total number of relations from A to B,
   (b) the number of non-empty relations from A to B,
   (c) the total number of relations on A (from A to A).

8. A relation R from P = {5, 6, 7} to Q = {3, 4, 5} has the pairs (5, 3), (6, 4), (7, 5). Write this relation in Set-builder form and find its Domain, Codomain, and Range.

9. Let R = {(x, y) : x, y ∈ N and x + 2y = 8}. Write R in Roster form, and find Domain(R), Range(R), and R⁻¹.

10. If n(A) = 2 and the total number of relations from A to B is 256, find n(B).

11. Let A = {−2, −1, 0, 1, 2} and R = {(x, y) ∈ A × A : x² + y² = 4}. Write R in Roster form and find its Domain and Range.

12. True or False? Give a one-line reason:
    (a) Every relation from A to B is a subset of A × B.
    (b) For every relation R from A to B, Domain(R) = A.
    (c) For every relation R from A to B, Range(R) ⊆ Codomain(R).
    (d) If n(A) = 2 and n(B) = 2, then there are 4 relations from A to B.

### Answers

1. Odd difference (ek even, ek odd):
   - x = 1 (odd) ke saath even y: (1, 4), (1, 6)
   - x = 2 (even) ke saath odd y: (2, 9)
   - x = 3 (odd) ke saath even y: (3, 4), (3, 6)
   - x = 5 (odd) ke saath even y: (5, 4), (5, 6)
   **R = {(1, 4), (1, 6), (2, 9), (3, 4), (3, 6), (5, 4), (5, 6)}** (7 pairs).
   Domain = **{1, 2, 3, 5}**, Range = **{4, 6, 9}**. Jaanch: har pair mein |x − y| odd hai ✅.

2. (a) **R = {(1, 1), (1, 2), (1, 3), (1, 4), (1, 6), (2, 2), (2, 4), (2, 6), (3, 3), (3, 6), (4, 4), (6, 6)}** (12 pairs).
   (b) Domain = **{1, 2, 3, 4, 6}**, Range = **{1, 2, 3, 4, 6}**. Jaanch: har (a, b) mein b % a == 0 ✅.

3. R = {(0, 5), (1, 6), (2, 7), (3, 8), (4, 9), (5, 10)}.
   **Domain = {0, 1, 2, 3, 4, 5}**, **Range = {5, 6, 7, 8, 9, 10}**.

4. y = 2x aur y ≤ 12 ⟹ x = 1..6:
   **R = {(1, 2), (2, 4), (3, 6), (4, 8), (5, 10), (6, 12)}**.
   Domain = **{1, 2, 3, 4, 5, 6}**, Codomain = **{1, 2, ..., 12}**, Range = **{2, 4, 6, 8, 10, 12}**.
   Jaanch: x = 7 par y = 14 ∉ A ✅.

5. 11 se chhote positive even integers: 2, 4, 6, 8, 10.
   **R = {(2, 4), (4, 16), (6, 36), (8, 64), (10, 100)}**.
   Domain = {2, 4, 6, 8, 10}, Range = {4, 16, 36, 64, 100}.
   **R⁻¹ = {(4, 2), (16, 4), (36, 6), (64, 8), (100, 10)}**.

6. Do integers ka antar (a − b) hamesha ek integer hota hai! Isliye R = Z × Z.
   **Domain(R) = Z**, **Range(R) = Z**.

7. (a) n(A × B) = 2 × 3 = 6 ⟹ total relations = 2⁶ = **64**.
   (b) Non-empty = 64 − 1 = **63**.
   (c) n(A × A) = 2 × 2 = 4 ⟹ total relations on A = 2⁴ = **16**. Jaanch: 2⁶ = 64, 2⁴ = 16 ✅.

8. Har pair mein y = x − 2: **R = {(x, y) : y = x − 2, x ∈ P, y ∈ Q}**.
   Domain = {5, 6, 7}, Codomain = {3, 4, 5}, Range = {3, 4, 5}.

9. x = 8 − 2y aur x, y ∈ N (yaani ≥ 1):
   - y = 1 ⟹ x = 6 → (6, 1)
   - y = 2 ⟹ x = 4 → (4, 2)
   - y = 3 ⟹ x = 2 → (2, 3)
   - y = 4 ⟹ x = 0 ∉ N!
   **R = {(6, 1), (4, 2), (2, 3)}**, Domain = {2, 4, 6}, Range = {1, 2, 3}, **R⁻¹ = {(1, 6), (2, 4), (3, 2)}**.
   Jaanch: 6+2=8, 4+4=8, 2+6=8 ✅.

10. 2^(2 × n(B)) = 256 = 2⁸ ⟹ 2 × n(B) = 8 ⟹ **n(B) = 4**. Jaanch: 2^(2×4) = 2⁸ = 256 ✅.

11. x² + y² = 4 ke hal A = {−2, −1, 0, 1, 2} mein:
    - x = −2 ⟹ y = 0 → (−2, 0)
    - x = 0 ⟹ y = −2, 2 → (0, −2), (0, 2)
    - x = 2 ⟹ y = 0 → (2, 0)
    **R = {(−2, 0), (0, −2), (0, 2), (2, 0)}**. Domain = **{−2, 0, 2}**, Range = **{−2, 0, 2}**.
    Jaanch: (±2)² + 0² = 4 ✅.

12. (a) ✅ True: ye relation ki paribhasha hai.
    (b) ❌ False: A ke kuch elements bina pair ke reh sakte hain (jaise Example 1 mein 6).
    (c) ✅ True: Range mein sirf B ke used elements hote hain.
    (d) ❌ False: 2^(2×2) = 2⁴ = 16 relations hote hain, 4 nahi!

---

Ab tum kisi bhi Relation ko Roster, Set-builder aur Arrow diagram mein likhna, uska Domain, Codomain aur Range nikaalna, aur total relations ginna jaante ho.

**Agle topic mein:** relations mein se ek **bahut khaas, super-disciplined** type chhantenge — **Functions** — aur 7 mashhoor real functions ke **graphs** banayenge!
