# Chapter: Sets (Part 5)

> **Class:** 11 | **Subject:** Mathematics
> **Ye file [sets-part4.md](sets-part4.md) se aage chalti hai** (wahan Topic 4 mein Laws of Set Algebra, De Morgan's Laws aur 2-set/3-set practical problems the). Chapter ki shuruaat: [sets.md](sets.md). Subsets aur Intervals: [sets-part2.md](sets-part2.md). Operations: [sets-part3.md](sets-part3.md).
> **Topics covered in this file:**
> 5. Sab Kuch Mila Kar: Mixed Problems, Proofs, Practice Aur Chapter Ka Saar

---

# Topic 5: Sab Kuch Mila Kar: Mixed Problems, Proofs, Practice Aur Chapter Ka Saar

Pichhle chaar topics mein tumne Sets ka poora toolkit ikattha kar liya hai: Roster aur Set-builder form (Topic 1), Subsets, Power Set aur Real Intervals (Topic 2), Operations ∪, ∩, −, ′ (Topic 3), aur Set Laws, De Morgan's Laws aur 2-set/3-set counting formulas (Topic 4). Asli exam aur Olympiad ke sawaal ek hi topic tak seemit nahi rehte — wo set-builder, intervals, power sets, algebraic proofs aur Venn surveys ko ek saath jod dete hain. Is aakhri topic mein hum ek **Decision Map** banayenge, 6 mixed problems aur proofs hal karenge, 3 aakhri galtiyon se bachenge, 12 mixed practice sawaal lagayenge, aur ant mein poore chapter ka saar ek table mein dekhenge.

---

## Tapan ka Tech & Culture Fest desk

School ke Annual Inter-House Tech & Culture Fest mein Tapan ko registration desk aur Maths Olympiad warm-up booth dono ki zimmedari mili thi. Subah 120 students ne teen events — **Coding (C)**, **Robotics (R)** aur **Debate (D)** — mein naam likhwaya. Principal ma'am ne turant report maangi: "Kitne bachche kisi bhi event mein nahi hain? Kitne theek do events mein hain? Aur Olympiad booth par kuch tricky set-proofs aur interval puzzles bhi ready rakhna!"

Tapan ne ghabraane ke bajay apni notebook mein ek **Decision Map** banaya: *kaun sa suraagh dikhe to kaun sa tool uthana hai?* Chalo, Tapan ke saath poore chapter ke sabhi tools ko ek saath kaam par lagate hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Decision Map** | Sawaal ka suraagh dekh kar sahi tool (Venn, Set Law, Number Line, Element-chasing) chunne ki table | Part A |
| **Double inclusion proof** | A = B prove karne ke liye pehle A ⊆ B aur phir B ⊆ A dikhana | Example 2 |
| **Counterexample** | Kisi galat statement ko todne ke liye ek chhota sa pakka udaharan | P(A ∪ B) ≠ P(A) ∪ P(B) |
| **At most one** | Zero ya theek ek (yaani 2 ya 3 wale hata kar) | None + exactly one |

---

## Part A: Kaun Sa Tool Kab? (Decision Map)

| Sawaal ka suraagh | Kaun sa tool lagao? | Pehla kadam | Topic |
|---|---|---|---|
| Equations / conditions di hain, elements chahiye | Roster conversion | Equation hal karo, domain (N, Z, R) zaroor dekho! | Topic 1 |
| Nested brackets {a, {b, c}} aur ∈ / ⊆ | Element-list check | Pehle outer set ke saare elements alag line mein gino | Topic 2 |
| Total subsets, proper subsets, P(A), 2ᵐ − 2ⁿ | Power-set counting | n(P(A)) = 2ⁿ; 2ⁿ common nikaalo | Topic 2 |
| Real inequalities (−5 < x ≤ 3) + operations | Number line intervals | Dono intervals upar-neeche number line par banao | Topic 2 & 3 |
| "Prove A = B" (bina numbers ke) | Double inclusion ya Set Laws | Ya to A ⊆ B & B ⊆ A dikhao, ya De Morgan/Distributive lagao | Topic 2 & 4 |
| "Is it always true?" (shak wala statement) | Counterexample test | Chhote sets A = {1}, B = {2} rakh kar check karo | Topic 2 & 5 |
| Survey: 2 ya 3 groups, "only", "neither", "exactly two" | Inclusion-Exclusion + Venn | Hamesha centre (A ∩ B ∩ C) se bahar bharo! | Topic 4 |
| "Minimum / Maximum possible" | Range bounds | min = max(0, n(A) + n(B) − n(U)), max = min(n(A), n(B)) | Topic 4 |

---

## Part B: Mixed Worked Problems Aur Proofs

### Example 1: Tapan ka 3-Set Fest Registration Report

120 students mein se:
- Coding (C): 54,  Robotics (R): 48,  Debate (D): 42
- C ∩ R = 18,  R ∩ D = 14,  C ∩ D = 16,  teeno (C ∩ R ∩ D) = **6**.

Nikalo: (i) Kam se kam ek event mein hissa lene wale, (ii) Kisi bhi event mein nahi, (iii) Theek do events mein, (iv) **At most one** (zyada se zyada ek) event mein!

**Hal (Andar se bahar Venn filling):**
1. Centre (all 3): **6**.
2. Sirf do-do wale:
   - Only C & R = 18 − 6 = **12**
   - Only R & D = 14 − 6 = **8**
   - Only C & D = 16 − 6 = **10**
3. Sirf ek-ek wale:
   - Only C = 54 − (12 + 10 + 6) = **26**
   - Only R = 48 − (12 + 8 + 6) = **22**
   - Only D = 42 − (10 + 8 + 6) = **18**

Ab saare jawab:
- (i) **At least one:** n(C ∪ R ∪ D) = 54 + 48 + 42 − 18 − 14 − 16 + 6 = 144 − 48 + 6 = **102**.
- (ii) **None:** 120 − 102 = **18**.
- (iii) **Exactly two:** 12 + 8 + 10 = **30**.
- (iv) **At most one** = (None) + (Exactly one) = 18 + (26 + 22 + 18) = 18 + 66 = **84**.
  (Short check: Total − (exact 2 + all 3) = 120 − (30 + 6) = **84**!)

**Jaanch:** 66 (exact 1) + 30 (exact 2) + 6 (all 3) + 18 (none) = **120** ✅.

---

### Example 2: Classic Double-Inclusion Proof — A ∪ B = A ∩ B ⟹ A = B

Prove karo: Agar do sets A aur B ke liye **A ∪ B = A ∩ B** ho, to **A = B**.

**Hal:**
A = B prove karne ke liye humein do cheezein dikhani hain: **(1) A ⊆ B** aur **(2) B ⊆ A**.

- **Step 1 (A ⊆ B):** Maan lo koi bhi arbitrary element x ∈ A hai.
  - Kyunki x ∈ A, to x ∈ (A ∪ B) zaroor hoga (kyunki A ⊆ A ∪ B).
  - Par diya hai A ∪ B = A ∩ B, isliye x ∈ (A ∩ B).
  - Intersection ka matlab x ∈ A aur **x ∈ B**.
  - Isliye har x ∈ A ke liye x ∈ B ⟹ **A ⊆ B**.

- **Step 2 (B ⊆ A):** Bilkul wahi kadam B se shuru karo. Maan lo y ∈ B.
  - y ∈ B ⟹ y ∈ (A ∪ B) ⟹ y ∈ (A ∩ B) (given se) ⟹ **y ∈ A**.
  - Isliye **B ⊆ A**.

Step 1 aur Step 2 se, **A = B** proved!

**Jaanch:** Agar A = {1, 2} aur B = {1, 2, 3} (equal nahi), to A ∪ B = {1, 2, 3} ≠ {1, 2} = A ∩ B ✅.

---

### Example 3: Power Set Equality Proof — P(A) = P(B) ⟹ A = B

Prove karo: Agar **P(A) = P(B)**, to **A = B**.

**Hal:**
Phir se double inclusion (A ⊆ B aur B ⊆ A)!
- **Step 1 (A ⊆ B):**
  - Hum jaante hain ki har set khud apna subset hota hai: **A ⊆ A**.
  - Power set ki paribhasha se, A ke sabhi subsets P(A) ke elements hote hain, isliye **A ∈ P(A)**.
  - Diya hai P(A) = P(B), isliye **A ∈ P(B)**.
  - Par P(B) mein sirf B ke subsets hote hain! Isliye **A ⊆ B**.
- **Step 2 (B ⊆ A):**
  - Bilkul isi tarah B ⊆ B ⟹ B ∈ P(B) = P(A) ⟹ **B ⊆ A**.

Step 1 aur Step 2 se, **A = B** proved!

**Jaanch:** Agar A = {1} aur B = {2}, to P(A) = {∅, {1}} ≠ {∅, {2}} = P(B) ✅.

---

### Example 4: Interval Operations + Complement + De Morgan Combo

Maan lo U = R, **P = (−5, 3]** aur **Q = (0, 6]**.
Nikalo: (i) P ∪ Q, (ii) P ∩ Q, (iii) (P ∪ Q)′, aur verify karo ki (P ∪ Q)′ = P′ ∩ Q′.

**Hal:**
Number line par P = (−5, 3] aur Q = (0, 6]:
- (i) **P ∪ Q = (−5, 6]**.
- (ii) **P ∩ Q = (0, 3]** (0 ∉ Q, par 3 ∈ P aur 3 ∈ Q).
- (iii) **(P ∪ Q)′** = R − (−5, 6] = **(−∞, −5] ∪ (6, ∞)** (−5 ∉ P ∪ Q isliye −5 shamil; 6 ∈ P ∪ Q isliye 6 bahar!).
- **De Morgan Check:**
  - P′ = (−∞, −5] ∪ (3, ∞)
  - Q′ = (−∞, 0] ∪ (6, ∞)
  - Dono ka common hissa P′ ∩ Q′ = **(−∞, −5] ∪ (6, ∞)**!
  LHS = RHS!

**Jaanch:** Test x = −5: −5 ∈ (−∞, −5], −5 ∉ P, −5 ∉ Q ✅; test x = 6: 6 ∈ Q isliye 6 ∉ Q′ ✅.

---

### Example 5: Power Set + Difference + Cardinality Combo

Do finite sets A aur B aise hain ki **n(A − B) = 3**, **n(B − A) = 2**, aur **n(A ∩ B) = 1**.
Nikalo: (i) n(A), (ii) n(B), (iii) n(A ∪ B), (iv) n(P(A)) + n(P(B)), (v) n(P(A Δ B)).

**Hal:**
- (i) n(A) = n(A − B) + n(A ∩ B) = 3 + 1 = **4**.
- (ii) n(B) = n(B − A) + n(A ∩ B) = 2 + 1 = **3**.
- (iii) n(A ∪ B) = 3 + 1 + 2 = **6**.
- (iv) n(P(A)) + n(P(B)) = 2⁴ + 2³ = 16 + 8 = **24**.
- (v) n(A Δ B) = n(A − B) + n(B − A) = 3 + 2 = 5 ⟹ n(P(A Δ B)) = 2⁵ = **32**.

**Jaanch:** n(A) + n(B) − n(A ∩ B) = 4 + 3 − 1 = 6 = n(A ∪ B) ✅; 16 + 8 = 24 ✅; 2⁵ = 32 ✅.

---

### Example 6: Set-Builder Quadratic + Percentage Min/Max Combo

(a) Maan lo **A = {x ∈ Z : x² − 7x + 10 = 0}** aur **B = {x ∈ Z : 1 ≤ x < 6}**. Nikalo A ∩ B, B − A, aur n(P(B − A)).
(b) Ek office ke survey mein **72%** log chai (T) pasand karte hain aur **58%** log coffee (C). Agar **x%** log dono pasand karte hain, to x ka minimum aur maximum maan batao.

**Hal:**
- **(a)** x² − 7x + 10 = (x − 2)(x − 5) = 0 ⟹ **A = {2, 5}**.
  1 ≤ x < 6 wale integers: **B = {1, 2, 3, 4, 5}** (6 shamil nahi!).
  - **A ∩ B = {2, 5}** (= A, kyunki A ⊂ B!).
  - **B − A = {1, 3, 4}** (n = 3).
  - **n(P(B − A)) = 2³ = 8**.
- **(b)** Total U = 100%, n(T) = 72%, n(C) = 58%.
  - Minimum x = 72 + 58 − 100 = **30%**.
  - Maximum x = min(72, 58) = **58%**.
  Isliye **30 ≤ x ≤ 58**.

**Jaanch:** (a) 2² − 7(2) + 10 = 0 aur 5² − 7(5) + 10 = 0 ✅; (b) x = 30 par union = 100%, x = 58 par union = 72% ≤ 100% ✅.

---

## Aam galtiyan (Chapter Synthesis)

1. **A = B prove karte waqt sirf ek taraf (A ⊆ B) dikha kar ruk jaana:** Student dikha deta hai ki har x ∈ A ke liye x ∈ B, aur turant "Hence A = B" likh deta hai.
   - *Galat kyun:* A ⊆ B ka matlab ye bhi ho sakta hai ki A, B ka chhota proper subset ho! Barabari ke liye **B ⊆ A** bhi zaroor dikhana padta hai (jab tak har kadam mein ⟺ dono taraf na chale).
2. **Har survey mein n(A ∪ B) = n(U) maan lena:** Student 120 students ke survey mein bina padhe n(C ∪ R ∪ D) = 120 rakh deta hai, jabki kuch students kisi bhi event mein nahi gaye the!
   - *Sahi soch:* n(A ∪ B) = n(U) sirf tab hota hai jab sawaal saaf bole **"each person likes at least one"** ya **"no one failed both"**. Warna n(A ∪ B) ≤ n(U) hota hai!
3. **P(A ∪ B) = P(A) ∪ P(B) maan lena:** Student sochta hai Power set union par distribute ho jaata hai.
   - *Counterexample:* A = {1}, B = {2} lo.
     - P(A) = {∅, {1}}, P(B) = {∅, {2}} ⟹ P(A) ∪ P(B) = {∅, {1}, {2}} (sirf 3 elements!).
     - Par A ∪ B = {1, 2} ⟹ P(A ∪ B) = {∅, {1}, {2}, {1, 2}} (4 elements — **{1, 2}** extra hai!).
     - Hamesha **P(A) ∪ P(B) ⊆ P(A ∪ B)** hota hai, barabar aam taur par nahi! (Jabki intersection par **P(A ∩ B) = P(A) ∩ P(B)** hamesha sach hota hai!)

---

## Quick Recap

- Sawaal dekhte hi **Decision Map** se tool chuno: Roster, Number line, Power set, Double inclusion, Set Laws, ya Inside-Out Venn.
- **A = B** prove karna ho to **A ⊆ B aur B ⊆ A** dono dikhao.
- Kisi general statement ko galat saabit karne ke liye sirf **ek chhota counterexample** kaafi hai.
- Survey mein "each likes at least one" aur "none / neither" ka antar hamesha dhyan se padho.

---

## Practice Questions

1. Let A = {x ∈ Z : x² − 3x − 4 = 0} and B = {x ∈ N : x ≤ 5}. Find:
   (a) A ∪ B    (b) A ∩ B    (c) A − B    (d) n(P(B − A))

2. Let U = R, A = [−4, 1), and B = (−2, 5]. Find (A ∩ B)′ and verify De Morgan's Law (A ∩ B)′ = A′ ∪ B′.

3. Using Set Algebra Laws (not Venn diagrams), prove that:
   (a) A ∪ (B − A) = A ∪ B
   (b) A − (A ∩ B) = A − B

4. Prove that for any two sets A and B, **P(A ∩ B) = P(A) ∩ P(B)**.

5. Show by a counterexample that **A ∪ B = A ∪ C** does NOT imply **B = C**.

6. Two finite sets A and B satisfy n(A − B) = 14 + x, n(B − A) = 3x, and n(A ∩ B) = x. If n(A) = n(B), find the value of x and n(A ∪ B).

7. In a college of 180 students, 96 study Economics (E), 78 study Accountancy (A), and 64 study Business Studies (B). Also 32 study E and A, 24 study A and B, 28 study E and B, and 10 study all three. Find the number of students who study:
   (a) at least one of the three subjects
   (b) none of the three subjects
   (c) Economics only
   (d) exactly two subjects
   (e) at most one subject.

8. In a city survey, 65% of residents read Magazine X and 55% read Magazine Y. What is the minimum and maximum percentage of residents who read both? What is the minimum percentage who read neither?

9. For sets A and B, prove that **A ⊆ B ⟺ B′ ⊆ A′**.

10. If A = {1, 2, {3, 4}, 5}, how many elements are in P(A)? Write down the subset of A that contains only the nested element {3, 4}.

11. Find sets A, B, and C such that A ∩ B, B ∩ C, and A ∩ C are all non-empty, yet A ∩ B ∩ C = ∅.

12. In a school of 250 students, 140 joined the Sports Club, 110 joined the Arts Club, and 30 joined neither. A student is chosen from those who joined **exactly one** club. How many students are in that "exactly one club" group (i.e., find n(S Δ A))?

### Answers

1. x² − 3x − 4 = (x − 4)(x + 1) = 0 ⟹ A = {−1, 4} (dono integers hain). B = {1, 2, 3, 4, 5}.
   (a) A ∪ B = **{−1, 1, 2, 3, 4, 5}**
   (b) A ∩ B = **{4}**
   (c) A − B = **{−1}**
   (d) B − A = {1, 2, 3, 5} (n = 4) ⟹ n(P(B − A)) = 2⁴ = **16**.
   Jaanch: 4² − 3(4) − 4 = 0, (−1)² − 3(−1) − 4 = 0 ✅.

2. A ∩ B = (−2, 1).
   LHS: (A ∩ B)′ = R − (−2, 1) = **(−∞, −2] ∪ [1, ∞)**.
   RHS: A′ = (−∞, −4) ∪ [1, ∞) aur B′ = (−∞, −2] ∪ (5, ∞).
   A′ ∪ B′ = **(−∞, −2] ∪ [1, ∞)**. Jaanch: LHS = RHS ✅.

3. (a) A ∪ (B − A) = A ∪ (B ∩ A′)   *(Difference identity)*
   = (A ∪ B) ∩ (A ∪ A′)   *(Distributive law)*
   = (A ∪ B) ∩ U   *(Complement law)*
   = **A ∪ B**   *(Identity law)*.
   (b) A − (A ∩ B) = A ∩ (A ∩ B)′ = A ∩ (A′ ∪ B′)   *(De Morgan)*
   = (A ∩ A′) ∪ (A ∩ B′)   *(Distributive)*
   = ∅ ∪ (A ∩ B′) = A ∩ B′ = **A − B**.

4. Maan lo koi bhi set X ∈ P(A ∩ B).
   ⟺ X ⊆ (A ∩ B)   *(Power set ki paribhasha)*
   ⟺ X ⊆ A  aur  X ⊆ B   *(intersection ka har subset dono ka subset hota hai)*
   ⟺ X ∈ P(A)  aur  X ∈ P(B)
   ⟺ X ∈ P(A) ∩ P(B).
   Har kadam ⟺ hai, isliye **P(A ∩ B) = P(A) ∩ P(B)** (Proved).

5. Counterexample: A = {1, 2}, B = {2, 3}, C = {1, 3}.
   A ∪ B = {1, 2, 3} aur A ∪ C = {1, 2, 3}, to A ∪ B = A ∪ C sach hai, par **B ≠ C**!

6. n(A) = n(A − B) + n(A ∩ B) = (14 + x) + x = 14 + 2x.
   n(B) = n(B − A) + n(A ∩ B) = 3x + x = 4x.
   Diya hai n(A) = n(B) ⟹ 14 + 2x = 4x ⟹ 2x = 14 ⟹ **x = 7**.
   Tab n(A − B) = 21, n(A ∩ B) = 7, n(B − A) = 21 ⟹ **n(A ∪ B) = 21 + 7 + 21 = 49**.
   Jaanch: n(A) = 28, n(B) = 28, 28 + 28 − 7 = 49 ✅.

7. Andar se bahar bharo:
   - Centre (all 3) = 10.
   - Only E&A = 32 − 10 = 22; Only A&B = 24 − 10 = 14; Only E&B = 28 − 10 = 18.
   - Only E = 96 − (22 + 18 + 10) = **46**; Only A = 78 − (22 + 14 + 10) = 32; Only B = 64 − (14 + 18 + 10) = 22.
   (a) At least one = 96 + 78 + 64 − 32 − 24 − 28 + 10 = 238 − 84 + 10 = **164**.
   (b) None = 180 − 164 = **16**.
   (c) Economics only = **46**.
   (d) Exactly two = 22 + 14 + 18 = **54**.
   (e) At most one = None + Exactly one = 16 + (46 + 32 + 22) = 16 + 100 = **116**.
   Jaanch: 100 (exact 1) + 54 (exact 2) + 10 (all 3) + 16 (none) = **180** ✅.

8. Total = 100%, n(X) = 65%, n(Y) = 55%.
   - **Min both** = 65 + 55 − 100 = **20%**.
   - **Max both** = min(65, 55) = **55%**.
   - **Min neither:** jab union maximum (100%) ho, yaani neither = 100 − 100 = **0%**!
   Jaanch: 20% both par union = 100% (neither 0%) ✅; 55% both par union = 65% (neither 35%) ✅.

9. (⇒) Maan lo A ⊆ B. Kisi bhi x ∈ B′ ke liye x ∉ B. Kyunki A ⊆ B, agar x ∈ A hota to x ∈ B bhi hota (virodh!). Isliye x ∉ A, yaani x ∈ A′. Atah **B′ ⊆ A′**.
   (⇐) Ulta: maan lo B′ ⊆ A′. Pehle hisse ko B′ aur A′ par lagao: (A′)′ ⊆ (B′)′ ⟹ **A ⊆ B** (Proved).

10. A mein 4 elements hain (1, 2, {3, 4}, 5), isliye n(P(A)) = 2⁴ = **16**.
    Sirf nested element {3, 4} ko rakhne wala subset = **{{3, 4}}**. Jaanch: {{3, 4}} ⊆ A ✅.

11. Ek simple udaharan: **A = {1, 2}**, **B = {2, 3}**, **C = {1, 3}**.
    Yahan A ∩ B = {2} ≠ ∅, B ∩ C = {3} ≠ ∅, A ∩ C = {1} ≠ ∅, par **A ∩ B ∩ C = ∅**!

12. At least one club: n(S ∪ A) = 250 − 30 = 220.
    Both clubs: n(S ∩ A) = 140 + 110 − 220 = 30.
    Only Sports = 140 − 30 = 110; Only Arts = 110 − 30 = 80.
    Exactly one club: n(S Δ A) = 110 + 80 = **190**.
    Jaanch: 110 + 30 + 80 + 30 = 250 ✅.

---

Shabaash! Tumne Class 11 Mathematics ka pehla chapter **Sets** poori gehrai aur confidence ke saath khatam kar liya hai — ab tum sets ko likh sakte ho, unpar operations chala sakte ho, proofs likh sakte ho aur bade se bade survey ko chutkiyon mein suljha sakte ho.

---

## Chapter Ka Saar: Sets

| Topic | Mukhya vishay | Khaas formula / yaad rakhne ki baat |
|---|---|---|
| **Topic 1** | Sets, Roster & Set-builder, Empty, Finite/Infinite, Equal vs Equivalent | Well-defined zaroori; Roster mein repeat aur order nahi; ∅ ≠ {0} ≠ {∅}; Equal (same elements) vs Equivalent (n(A) = n(B)). |
| **Topic 2** | Subsets, Power Set, Real Intervals, Universal Set & Venn Diagrams | ∅ ⊆ A, A ⊆ A; ∈ (element) ≠ ⊆ (set); n(P(A)) = 2ⁿ; proper subsets = 2ⁿ − 1; intervals (a, b), [a, b] (∞ par hamesha round bracket). |
| **Topic 3** | Union, Intersection, Difference, Symmetric Difference & Complement | A ∪ B (OR), A ∩ B (AND), Disjoint ⟺ A ∩ B = ∅; A − B ≠ B − A; A Δ B = (A − B) ∪ (B − A); A′ = U − A; interval endpoints alag se test karo. |
| **Topic 4** | Set Algebra Laws, De Morgan's Laws & 2-Set/3-Set Surveys | (A ∪ B)′ = A′ ∩ B′, (A ∩ B)′ = A′ ∪ B′; n(A ∪ B) = n(A) + n(B) − n(A ∩ B); 3-set Venn hamesha centre (A ∩ B ∩ C) se bahar bharo! |
| **Topic 5** | Mixed Problems, Proofs & Synthesis | Decision Map se tool chuno; A = B ke liye A ⊆ B aur B ⊆ A dono dikhao; galat statement todne ke liye ek counterexample kaafi hai. |

**Aage kya?** Agle chapter **Relations and Functions** mein hum do sets ke elements ko aapas mein **jodna** seekhenge — ordered pairs, Cartesian product A × B, aur unse banne wale Relations aur Functions ki poori duniya!
