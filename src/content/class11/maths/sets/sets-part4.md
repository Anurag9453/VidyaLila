# Chapter: Sets (Part 4)

> **Class:** 11 | **Subject:** Mathematics
> **Ye file [sets-part3.md](sets-part3.md) se aage chalti hai** (wahan Topic 3 mein Union, Intersection, Difference, Symmetric Difference aur Complement the). Chapter ki shuruaat: [sets.md](sets.md).
> **Topics covered in this file:**
> 4. Properties of Operations Aur Practical Problems on Number of Elements

---

# Topic 4: Properties of Operations Aur Practical Problems on Number of Elements

Topic 3 mein tumne Union, Intersection, Difference aur Complement nikaalna seekha — aur Example 5 mein ek jadoo dekha tha: (A ∪ B)′ bilkul A′ ∩ B′ ke barabar nikla! Kya ye sirf ittefaq tha ya hamesha sach hota hai? Is topic mein hum **Set Algebra ke sabhi niyam** (khaas kar **De Morgan's Laws**) proof ke saath samjhenge, aur phir Sets ka sabse mazeedaar istemaal karenge: **real-life surveys aur ginti ke sawaal** (2-set aur 3-set Inclusion-Exclusion formulas).

---

## Jyoti ka canteen survey

School fest ke liye Jyoti ne apni class ke **60 students** ka canteen survey kiya. Result ye aaya:
- **38 students** ko samosa chahiye (set S).
- **32 students** ko cold coffee chahiye (set C).
- **15 students** ko **dono** chahiye (S ∩ C).

Jyoti ki saheli ne turant joda: "38 + 32 = **70**! Are Jyoti, humne to sirf 60 students se poochha tha — 70 log kahan se aa gaye?!"

Jyoti hasi: "Dhyan se dekho! Jo **15 students** samosa aur cold coffee **dono** le rahe hain, wo 38 wali list mein bhi gine gaye aur 32 wali list mein bhi — yaani wo **do baar** gin liye gaye! Ek baar unhe ghata do: 38 + 32 − 15 = **55 students** kam se kam ek cheez le rahe hain. Aur baaki 60 − 55 = **5 students** kuch nahi le rahe!"

Yahi "do baar ginne ko theek karne" ka vichaar poore practical problems aur Inclusion-Exclusion Principle ki jaan hai.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Idempotent law** | Kisi set ka khud ke saath union ya intersection wahi set deta hai | A ∪ A = A, A ∩ A = A |
| **Distributive law** | Union, intersection par (aur intersection, union par) baant jaata hai | A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C) |
| **De Morgan's Laws** | Complement lagane par ∪ aur ∩ aapas mein palat jaate hain | (A ∪ B)′ = A′ ∩ B′ |
| **Element-chasing proof** | x ∈ LHS lekar dikhana ki x ∈ RHS (aur ulta), taaki LHS = RHS pakka ho | Example 1 |
| **Inclusion-Exclusion** | Jodte waqt jo do baar gina gaya use ghatana, aur teen baar wale ko balance karna | n(A ∪ B) = n(A) + n(B) − n(A ∩ B) |
| **At least one** | Kam se kam ek — matlab Union | A ∪ B ya A ∪ B ∪ C |
| **Neither ... nor** | Ek bhi nahi — matlab Union ka Complement | (A ∪ B)′ = A′ ∩ B′ |

---

## Part A: Laws of Set Algebra (Ek Nazar Mein)

Jis tarah numbers mein a + b = b + a aur a(b + c) = ab + ac hote hain, sets ke operations ke bhi pakke niyam hote hain (kisi bhi Universal Set U ke subsets A, B, C ke liye):

| Niyam ka naam | Union (∪) roop | Intersection (∩) roop |
|---|---|---|
| **1. Idempotent Law** | A ∪ A = A | A ∩ A = A |
| **2. Identity Law** | A ∪ ∅ = A | A ∩ U = A |
| **3. Domination Law** | A ∪ U = U | A ∩ ∅ = ∅ |
| **4. Commutative Law** | A ∪ B = B ∪ A | A ∩ B = B ∩ A |
| **5. Associative Law** | (A ∪ B) ∪ C = A ∪ (B ∪ C) | (A ∩ B) ∩ C = A ∩ (B ∩ C) |
| **6. Distributive Law** | A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C) | A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C) |
| **7. Complement Laws** | A ∪ A′ = U | A ∩ A′ = ∅ |
| **8. Double Complement** | (A′)′ = A | ∅′ = U,  U′ = ∅ |
| **9. De Morgan's Laws** | **(A ∪ B)′ = A′ ∩ B′** | **(A ∩ B)′ = A′ ∪ B′** |
| **10. Difference Identity** | **A − B = A ∩ B′** | (A − B) ∩ B = ∅ |

**Dhyan do:** Numbers mein + multiplication par distribute nahi hota (a + bc ≠ (a+b)(a+c)), par sets mein **dono** distributive laws sach hote hain!

---

## Part B: De Morgan's Laws — Proof Aur Verification

### Element-Chasing Proof: (A ∪ B)′ = A′ ∩ B′

**Kyun?** Do sets barabar dikhane ke liye hum dikhate hain ki koi bhi x ∈ LHS ⟺ x ∈ RHS:
1. x ∈ (A ∪ B)′
2. ⟺ x ∉ (A ∪ B)  *(complement ki paribhasha)*
3. ⟺ x ∉ A  **aur (and)**  x ∉ B  *(agar A ya B kisi mein hota to A ∪ B mein aa jaata!)*
4. ⟺ x ∈ A′  **aur (and)**  x ∈ B′  *(complement ki paribhasha)*
5. ⟺ x ∈ (A′ ∩ B′)  *(intersection ki paribhasha)*

Kyunki har kadam dono taraf (⟺) chalta hai, **(A ∪ B)′ = A′ ∩ B′** hamesha sach hai!

Bilkul isi tarah doosra niyam **(A ∩ B)′ = A′ ∪ B′** bhi prove hota hai:
x ∈ (A ∩ B)′ ⟺ x ∉ (A ∩ B) ⟺ (x ∉ A **ya** x ∉ B) ⟺ (x ∈ A′ **ya** x ∈ B′) ⟺ x ∈ (A′ ∪ B′).

```
   +-----------------------------------+  U
   : ################################# :
   : ####  +-------+   +-------+  #### :
   : ####  :   A   :   :   B   :  #### :
   : ####  +-------+   +-------+  #### :
   : ################################# :
   +-----------------------------------+
   (A ∪ B) ke bahar (#)  =  jo A ke bahar bhi hai AUR B ke bahar bhi (A′ ∩ B′)
```

> **Figure 4.1** – De Morgan ka pehla niyam: dono circles ke bahar ka hissa (A ∪ B)′ wahi hai jo A′ aur B′ dono mein common hai.

### Example 1: De Morgan's Laws ki numerical verification

Maan lo **U = {11, 12, 13, 14, 15, 16}**, **A = {11, 13, 15}**, aur **B = {12, 13, 14}**.
Dono De Morgan's Laws verify karo.

**Hal:**
- Pehle complements: A′ = {12, 14, 16}, B′ = {11, 15, 16}.
- **Pehla niyam:**
  - A ∪ B = {11, 12, 13, 14, 15} ⟹ **(A ∪ B)′ = {16}**.
  - A′ ∩ B′ = {12, 14, 16} ∩ {11, 15, 16} = **{16}**.
  - Dono barabar!
- **Doosra niyam:**
  - A ∩ B = {13} ⟹ **(A ∩ B)′ = {11, 12, 14, 15, 16}**.
  - A′ ∪ B′ = {12, 14, 16} ∪ {11, 15, 16} = **{11, 12, 14, 15, 16}**.
  - Dono barabar!

**Jaanch:** {16} = {16} ✅ aur {11, 12, 14, 15, 16} = {11, 12, 14, 15, 16} ✅.

### Example 2: Set Laws se algebraic simplification aur proof

(i) Prove karo: **A − B = A ∩ B′**.
(ii) Laws of Set Algebra se simplify karo: **(A ∪ B) ∩ (A ∪ B′)**.

**Hal:**
- (i) x ∈ (A − B) ⟺ (x ∈ A aur x ∉ B) ⟺ (x ∈ A aur x ∈ B′) ⟺ x ∈ (A ∩ B′).
  Isliye **A − B = A ∩ B′**.
- (ii) Distributive law ulta lagao (A ∪ common nikalo):
  (A ∪ B) ∩ (A ∪ B′) = A ∪ (B ∩ B′)   *(Distributive law)*
  = A ∪ ∅   *(Complement law: B ∩ B′ = ∅)*
  = **A**   *(Identity law: A ∪ ∅ = A)*.

**Jaanch:** Example 1 ke A = {11, 13, 15}, B = {12, 13, 14} par: (A ∪ B) = {11..15}, (A ∪ B′) = {11, 13, 15, 16}; inka intersection = {11, 13, 15} = A ✅!

---

## Part C: 2-Set Practical Problems (Cardinality Formula)

### Derivation (Kyun?)

Topic 3 mein humne dekha ki **A ∪ B** teen **pairwise disjoint** tukdon se bana hai: **(A − B)**, **(A ∩ B)**, aur **(B − A)**.
Kyunki inme kuch bhi common nahi, unki gintiyan seedha judti hain:
1. n(A ∪ B) = n(A − B) + n(A ∩ B) + n(B − A)
2. Saath hi, A = (A − B) ∪ (A ∩ B) (disjoint), to **n(A − B) = n(A) − n(A ∩ B)**.
3. Aur B = (B − A) ∪ (A ∩ B) (disjoint), to **n(B − A) = n(B) − n(A ∩ B)**.

2 aur 3 ko 1 mein rakho:
> n(A ∪ B) = [n(A) − n(A ∩ B)] + n(A ∩ B) + [n(B) − n(A ∩ B)]

> **n(A ∪ B) = n(A) + n(B) − n(A ∩ B)**

**Khaas cases:**
- Agar A aur B **disjoint** hain (A ∩ B = ∅), to **n(A ∪ B) = n(A) + n(B)**.
- **Only A:** n(A − B) = n(A) − n(A ∩ B).
- **Only B:** n(B − A) = n(B) − n(A ∩ B).
- **Neither A nor B:** n(A′ ∩ B′) = n((A ∪ B)′) = **n(U) − n(A ∪ B)**.

### Example 3: Jyoti ka canteen survey (poora hal)

60 students ke survey mein 38 ko samosa (S), 32 ko cold coffee (C), aur 15 ko dono pasand hain. Nikalo:
(i) Kam se kam ek cheez pasand karne wale, (ii) Kuch bhi nahi pasand karne wale, (iii) Sirf samosa, (iv) Sirf cold coffee.

**Hal:**
- Diya hai: n(U) = 60, n(S) = 38, n(C) = 32, n(S ∩ C) = 15.
- (i) n(S ∪ C) = n(S) + n(C) − n(S ∩ C) = 38 + 32 − 15 = **55**.
- (ii) Neither: n(U) − n(S ∪ C) = 60 − 55 = **5**.
- (iii) Only samosa: n(S − C) = 38 − 15 = **23**.
- (iv) Only cold coffee: n(C − S) = 32 − 15 = **17**.

**Jaanch:** Chaaron disjoint hisson ka jod: 23 (only S) + 15 (both) + 17 (only C) + 5 (neither) = **60 = n(U)** ✅!

### Example 4: "Har koi kam se kam ek khelta hai" (Intersection nikaalna)

Ek sports club mein **85 members** hain. Har member cricket (C) ya football (F) mein se kam se kam ek khelta hai. Agar 52 cricket khelte hain aur 48 football, to kitne dono khelte hain? Kitne sirf cricket aur kitne sirf football?

**Hal:**
- Kyunki har member kam se kam ek khelta hai, **n(C ∪ F) = 85**.
- Formula: 85 = 52 + 48 − n(C ∩ F) ⟹ n(C ∩ F) = 100 − 85 = **15**.
- Only cricket = 52 − 15 = **37**.
- Only football = 48 − 15 = **33**.

**Jaanch:** 37 + 15 + 33 = **85** ✅.

---

## Part D: 3-Set Formula Aur Venn-Region Filling Trick

Teen sets A, B, C ke liye 2-set formula do baar lagakar (B ∪ C ko ek set D maankar aur Distributive law use karke) milta hai **3-Set Inclusion-Exclusion Formula**:

> **n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(B ∩ C) − n(C ∩ A) + n(A ∩ B ∩ C)**

*Chhota proof:*
n(A ∪ (B ∪ C)) = n(A) + n(B ∪ C) − n(A ∩ (B ∪ C))
= n(A) + [n(B) + n(C) − n(B ∩ C)] − n((A ∩ B) ∪ (A ∩ C))
= n(A) + n(B) + n(C) − n(B ∩ C) − [n(A ∩ B) + n(A ∩ C) − n(A ∩ B ∩ C)]
= **n(A) + n(B) + n(C) − n(A ∩ B) − n(B ∩ C) − n(C ∩ A) + n(A ∩ B ∩ C)**.

### Golden Rule: Venn Diagram Hamesha ANDAR SE BAHAR Bharo!

Jab 3-set survey mein "only A", "exactly one", "exactly two" poochhe jaayein, to sabse aasaan aur galti-rahit tareeka hai **8 disjoint regions** ko **centre (A ∩ B ∩ C) se shuru karke** bahar ki taraf bharna!

### Example 5: 3-Set Newspaper Survey (Inside-Out Method)

Ek colony ke **100 readers** ka survey kiya gaya:
- Hindi akhbaar (H): 45,  English (E): 40,  Regional (R): 35
- H aur E dono: 15,  E aur R dono: 12,  H aur R dono: 10
- Teeno akhbaar (H ∩ E ∩ R): **5**

Nikalo: (i) Kam se kam ek akhbaar padhne wale, (ii) Koi bhi akhbaar na padhne wale, (iii) Sirf Hindi padhne wale, (iv) Theek ek akhbaar padhne wale, (v) Theek do akhbaar padhne wale.

**Hal (Step-by-step andar se bahar):**
1. **Sabse beech (teeno):** n(H ∩ E ∩ R) = **5**.
2. **Sirf do-do wale tukde** (har jodi mein se beech ke 5 ghatao):
   - Only H & E = 15 − 5 = **10**
   - Only E & R = 12 − 5 = **7**
   - Only H & R = 10 − 5 = **5**
3. **Sirf ek-ek wale tukde** (har circle ke total mein se uske andar ke teen tukde ghatao):
   - **Only H** = 45 − (10 + 5 + 5) = 45 − 20 = **25**
   - **Only E** = 40 − (10 + 7 + 5) = 40 − 22 = **18**
   - **Only R** = 35 − (7 + 5 + 5) = 35 − 17 = **18**

```
   +------------------------------------------+  U = 100
   :         H (45)          E (40)           :
   :       +---------+   +---------+          :
   :       :  25     :10 :     18  :          :
   :       :      +--+---+--+      :          :
   :       :    5 :    5    : 7    :          :
   :       +------+         +------+          :
   :              :   18    :                 :
   :              +---------+                 :
   :                 R (35)          Bahar: 12:
   +------------------------------------------+
```

> **Figure 4.2** – 3-set Venn diagram andar se bahar bharne par har tukda saaf dikhta hai: centre 5, do-do wale 10, 7, 5, aur sirf ek wale 25, 18, 18.

Ab saare jawab ek-ek line mein:
- (i) **Kam se kam ek:** 25 + 18 + 18 + 10 + 7 + 5 + 5 = **88**.
  (Formula check: 45 + 40 + 35 − 15 − 12 − 10 + 5 = 120 − 37 + 5 = **88**!)
- (ii) **Koi nahi:** 100 − 88 = **12**.
- (iii) **Sirf Hindi (only H):** **25**.
- (iv) **Theek ek akhbaar (exactly one):** 25 + 18 + 18 = **61**.
- (v) **Theek do akhbaar (exactly two):** 10 + 7 + 5 = **22**.

**Jaanch:** 61 (exact 1) + 22 (exact 2) + 5 (all 3) + 12 (none) = **100 = n(U)** ✅!

---

## Part E: Minimum Aur Maximum Bounds (Range Wale Sawaal)

Kabhi-kabhi sawaal mein intersection n(A ∩ B) nahi diya hota, balki uska **kam se kam (minimum)** aur **zyada se zyada (maximum)** maan poochha jaata hai:
- **Maximum n(A ∩ B):** dono mein se chhota set poora bade ke andar sama jaaye → **min(n(A), n(B))**.
- **Minimum n(A ∩ B):** dono jitna ho sake alag phailein (n(A ∪ B) zyada se zyada n(U) ho sakta hai) → **max(0, n(A) + n(B) − n(U))**.

### Example 6: Min aur Max Intersection

50 students ki class mein 35 ko Maths (M) pasand hai aur 30 ko Science (S). Dono pasand karne wale students ki **minimum** aur **maximum** sankhya kya ho sakti hai?

**Hal:**
- n(U) = 50, n(M) = 35, n(S) = 30.
- **Minimum n(M ∩ S):** n(M ∪ S) ≤ 50 ⟹ 35 + 30 − n(M ∩ S) ≤ 50 ⟹ n(M ∩ S) ≥ 65 − 50 = **15**.
- **Maximum n(M ∩ S):** Science wale sabhi 30 students Maths bhi pasand kar sakte hain (kyunki 30 ≤ 35) ⟹ max = **30**.
- Isliye **15 ≤ n(M ∩ S) ≤ 30**.

**Jaanch:** Agar n(M ∩ S) = 15 to n(M ∪ S) = 50 (poori class, 0 bahar) ✅; agar 30 to n(M ∪ S) = 35 (15 bahar) ✅.

---

## Aam galtiyan

1. **De Morgan's Law mein ∪ aur ∩ palatna bhool jaana:** Student likhta hai "(A ∪ B)′ = A′ ∪ B′".
   - *Galat kyun:* Complement lagane par "ya" (∪) badal kar "aur" (∩) ban jaata hai, aur "aur" (∩) badal kar "ya" (∪). Example 1 mein humne dekha (A ∪ B)′ = {16}, jabki A′ ∪ B′ = {11, 12, 14, 15, 16}!
2. **"Maths pasand karte hain" (n(M)) aur "SIRF Maths pasand karte hain" (n(M − S)) ko ek samajhna:** Student 38 ko "only samosa" samajh kar usme 15 aur jod deta hai!
   - *Sahi soch:* Jab tak shabd **only / sirf** na likha ho, diya gaya number poore circle n(A) ka hota hai (jisme common hissa pehle se shamil hai).
3. **3-set Venn diagram bahar se andar bharna:** Student pehle circle H mein 45 likh deta hai aur phir beech ke 5 aur 10 ghataana bhool jaata hai, jisse total 100 se upar nikal jaata hai.
   - *Sahi soch:* Hamesha **sabse beech (A ∩ B ∩ C)** se shuru karo, phir do-do ke tukde (common − beech), aur aakhir mein sirf ek-ek wale tukde!

---

## Quick Recap

- **Set Algebra Laws:** Idempotent, Identity, Domination, Commutative, Associative, Distributive (dono!), Complement, **A − B = A ∩ B′**.
- **De Morgan's Laws:** **(A ∪ B)′ = A′ ∩ B′** aur **(A ∩ B)′ = A′ ∪ B′**.
- **2-Set Formula:** **n(A ∪ B) = n(A) + n(B) − n(A ∩ B)**; only A = n(A) − n(A ∩ B); neither = n(U) − n(A ∪ B).
- **3-Set Formula:** **n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(B ∩ C) − n(C ∩ A) + n(A ∩ B ∩ C)**.
- **3-Set Venn Trick:** Hamesha andar (centre) se bahar bharo, aur sab tukdon ka jod n(U) se check karo!

---

## Practice Questions

1. Let U = {1, 2, 3, 4, 5, 6, 7, 8}, A = {2, 4, 6}, and B = {2, 3, 5, 7}. Verify both De Morgan's Laws:
   (a) (A ∪ B)′ = A′ ∩ B′    (b) (A ∩ B)′ = A′ ∪ B′

2. Using the Laws of Set Algebra, simplify:
   (a) A ∪ (A ∩ B)    (b) (A ∩ B) ∪ (A ∩ B′)

3. If X and Y are two sets such that n(X) = 24, n(Y) = 30, and n(X ∪ Y) = 42, find:
   (a) n(X ∩ Y)    (b) n(X − Y)    (c) n(Y − X)

4. In a group of 70 people, 42 like tea, 35 like coffee, and each person likes at least one of the two drinks. How many people like:
   (a) both tea and coffee?    (b) tea only?    (c) coffee only?

5. In a survey of 200 students, 115 play badminton, 95 play table tennis, and 35 play neither. Find how many students play:
   (a) at least one of the two games    (b) both games    (c) badminton only.

6. In a committee of 50 members, 28 speak Hindi, 20 speak Tamil, and 8 speak both Hindi and Tamil. How many speak:
   (a) at least one of these two languages?    (b) neither of these two languages?

7. In a class of 40 students, 22 passed in Physics, 18 passed in Chemistry, and 6 failed in both. Find how many passed in:
   (a) both subjects    (b) Physics only    (c) Chemistry only.

8. If n(U) = 80, n(A) = 45, n(B) = 38, and n(A ∩ B) = 18, find:
   (a) n(A ∪ B)    (b) n(A′)    (c) n(A′ ∩ B′)    (d) n(A′ ∪ B′)

9. In a survey of 150 families regarding three apps P, Q, and R:
   n(P) = 65, n(Q) = 55, n(R) = 50, n(P ∩ Q) = 20, n(Q ∩ R) = 18, n(P ∩ R) = 15, and n(P ∩ Q ∩ R) = 8.
   Find the number of families using:
   (a) at least one app    (b) none of the three apps    (c) app P only    (d) exactly one app    (e) exactly two apps.

10. In a town of 10,000 families, it was found that 40% buy newspaper A, 20% buy newspaper B, 10% buy newspaper C, 5% buy A and B, 3% buy B and C, 4% buy A and C, and 2% buy all three. Find the number of families who buy:
    (a) A only    (b) none of A, B, and C.

11. In a group of 60 students, 42 like music and 33 like painting. Find the minimum and maximum possible number of students who like both music and painting.

12. Using element-chasing (x ∈ LHS ⟺ x ∈ RHS), prove the Distributive Law: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C).

### Answers

1. A′ = {1, 3, 5, 7, 8}, B′ = {1, 4, 6, 8}.
   (a) A ∪ B = {2, 3, 4, 5, 6, 7} ⟹ (A ∪ B)′ = {1, 8}; A′ ∩ B′ = {1, 8}. Jaanch: dono equal ✅.
   (b) A ∩ B = {2} ⟹ (A ∩ B)′ = {1, 3, 4, 5, 6, 7, 8}; A′ ∪ B′ = {1, 3, 4, 5, 6, 7, 8}. Jaanch: dono equal ✅.

2. (a) A ∪ (A ∩ B) = (A ∩ U) ∪ (A ∩ B) = A ∩ (U ∪ B) = A ∩ U = **A** (ise Absorption Law bhi kehte hain).
   (b) (A ∩ B) ∪ (A ∩ B′) = A ∩ (B ∪ B′) = A ∩ U = **A**.

3. (a) n(X ∩ Y) = 24 + 30 − 42 = **12**.
   (b) n(X − Y) = 24 − 12 = **12**.
   (c) n(Y − X) = 30 − 12 = **18**. Jaanch: 12 + 12 + 18 = 42 ✅.

4. n(T ∪ C) = 70 (har koi kam se kam ek).
   (a) n(T ∩ C) = 42 + 35 − 70 = **7**.
   (b) Only tea = 42 − 7 = **35**.
   (c) Only coffee = 35 − 7 = **28**. Jaanch: 35 + 7 + 28 = 70 ✅.

5. (a) At least one = 200 − 35 = **165**.
   (b) Both = 115 + 95 − 165 = **45**.
   (c) Badminton only = 115 − 45 = **70**. Jaanch: 70 + 45 + 50 + 35 = 200 ✅.

6. (a) n(H ∪ T) = 28 + 20 − 8 = **40**.
   (b) Neither = 50 − 40 = **10**. Jaanch: 20 + 8 + 12 + 10 = 50 ✅.

7. At least one pass: n(P ∪ C) = 40 − 6 = 34.
   (a) Both = 22 + 18 − 34 = **6**.
   (b) Physics only = 22 − 6 = **16**.
   (c) Chemistry only = 18 − 6 = **12**. Jaanch: 16 + 6 + 12 + 6 = 40 ✅.

8. (a) n(A ∪ B) = 45 + 38 − 18 = **65**.
   (b) n(A′) = 80 − 45 = **35**.
   (c) De Morgan se n(A′ ∩ B′) = n((A ∪ B)′) = 80 − 65 = **15**.
   (d) De Morgan se n(A′ ∪ B′) = n((A ∩ B)′) = 80 − 18 = **62**. Jaanch: 65 + 15 = 80 aur 18 + 62 = 80 ✅.

9. Andar se bahar bharo:
   - Centre (teeno) = 8.
   - Only P&Q = 20 − 8 = 12; Only Q&R = 18 − 8 = 10; Only P&R = 15 − 8 = 7.
   - Only P = 65 − (12 + 7 + 8) = **38**; Only Q = 55 − (12 + 10 + 8) = 25; Only R = 50 − (10 + 7 + 8) = 25.
   (a) At least one = 65 + 55 + 50 − 20 − 18 − 15 + 8 = 170 − 53 + 8 = **125**.
   (b) None = 150 − 125 = **25**.
   (c) App P only = **38**.
   (d) Exactly one = 38 + 25 + 25 = **88**.
   (e) Exactly two = 12 + 10 + 7 = **29**.
   Jaanch: 88 + 29 + 8 + 25 = **150** ✅!

10. Percentages mein kaam karo (100% = 10,000 families):
    - Centre (all 3) = 2%.
    - Only A&B = 5 − 2 = 3%; Only B&C = 3 − 2 = 1%; Only A&C = 4 − 2 = 2%.
    - (a) Only A = 40 − (3 + 2 + 2) = 33% of 10,000 = **3300 families**.
    - (b) At least one = 40 + 20 + 10 − 5 − 3 − 4 + 2 = 60%.
      None = 100% − 60% = 40% of 10,000 = **4000 families**.
    Jaanch: Only B = 20 − (3 + 1 + 2) = 14%, Only C = 10 − (1 + 2 + 2) = 5%; 33 + 14 + 5 + 3 + 1 + 2 + 2 + 40 = 100% ✅.

11. Min n(M ∩ P) = 42 + 33 − 60 = **15**.
    Max n(M ∩ P) = min(42, 33) = **33**.
    Jaanch: 15 par union = 60, 33 par union = 42 ≤ 60 ✅.

12. x ∈ A ∩ (B ∪ C)
    ⟺ x ∈ A aur x ∈ (B ∪ C)
    ⟺ x ∈ A aur (x ∈ B ya x ∈ C)
    ⟺ (x ∈ A aur x ∈ B) ya (x ∈ A aur x ∈ C)
    ⟺ x ∈ (A ∩ B) ya x ∈ (A ∩ C)
    ⟺ x ∈ (A ∩ B) ∪ (A ∩ C).
    Dono taraf ⟺ hai, isliye **A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)** (Proved).

---

Ab tum Set Algebra ke saare niyam, De Morgan's Laws aur 2-set/3-set survey problems ko poori pakad ke saath hal kar sakte ho.

**Agle aur aakhri topic mein:** poore chapter ke saare tools ko ek saath jodne wale **mixed problems, proofs, decision map** aur **Chapter Ka Saar**!
