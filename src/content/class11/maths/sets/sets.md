# Chapter: Sets

> **Class:** 11 | **Subject:** Mathematics
> **Ye Class 11 Mathematics ka pehla chapter hai.** Standard number parivaar (N, W, Z, Q, R) Class 9 mein padhe the: [number-systems.md](../../../class9/maths/number-systems/number-systems.md) (Natural, Whole, Integers, Rational) aur [number-systems-part3.md](../../../class9/maths/number-systems/number-systems-part3.md) (Irrational aur Real numbers). Yahan hum un parivaaron aur kisi bhi saaf-suthre sangrah ko likhne, naapne aur tulna karne ki ek nishchit bhasha seekhenge.
> **Topics covered in this file:**
> 1. Sets Aur Unki Likhai: Roster, Set-Builder, Empty, Finite, Infinite Aur Equal Sets

---

# Topic 1: Sets Aur Unki Likhai: Roster, Set-Builder, Empty, Finite, Infinite Aur Equal Sets

Ab tak tumne numbers, equations aur triangles ke saath kaam kiya hai. Class 11 mein Mathematics ki poori imaarat ek hi buniyadi bhasha par khadi hoti hai: **Sets** (samuchchaya). Chahe aage Relations aur Functions aayein, Probability aaye, ya Geometry ke points ka sangrah ho, har jagah cheezon ko **saaf-saaf group** mein baandhna padta hai. Is pehle topic mein hum dekhenge ki har group "set" kyun nahi hota, ek set ko do tareekon (Roster aur Set-builder) se kaise likhte hain, aur khaali, seemit, aseemit aur barabar sets ko kaise pehchante hain.

---

## Chetan ka sports-day registration desk

Colony ke annual sports day ki subah thi. Chetan apni Mummy ke saath registration desk par baitha alag-alag lists bana raha tha. Pehli list ka kaam aasaan tha: **"Colony ke wo sabhi bachche jinka roll number even hai aur 10 ya usse chhota hai."** Chetan ne register dekha aur do minute mein ek pakki list bana di: roll numbers 2, 4, 6, 8, 10. Kisi bhi doosre volunteer ko yahi kaam do, wo bilkul **wahi paanch naam** likhega.

Phir ek uncle aaye aur bole, "Beta, ek list bana do: **colony ke 3 sabse achhe singers**." Chetan ruk gaya. Mummy ne kaha "Aunty ka beta achha gaata hai", gate wale bhaiya ne kaha "3rd floor wali didi sabse achhi hain", aur Chetan ke dost ne apna naam bol diya. Har insaan ki list alag!

Mummy muskuraayi: "Dekha Chetan? Pehli list mein koi **shak ya behas** nahi thi — har roll number ke liye seedha Haan ya Naa milta tha. Doosri list mein 'sabse achha' har kisi ki pasand par badal raha hai. Maths mein sirf wahi collection **set** kehlata hai jisme kisi bhi cheez ke baare mein bina kisi shak ke pata chal sake ki wo andar hai ya bahar."

Chalo, isi **well-defined** (su-paribhashit) niyam se Sets ki duniya shuru karte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Set (samuchchaya)** | Cheezon ka aisa sangrah jisme bina shak ke pata chale kaun andar hai aur kaun bahar (well-defined) | 10 se chhote prime numbers: {2, 3, 5, 7} |
| **Element / Member (avayav)** | Set ke andar ki har ek cheez | Set {2, 3, 5, 7} mein 5 ek element hai |
| **∈ (belongs to)** | "Andar hai" ka nishaan (Greek letter epsilon) | 5 ∈ {2, 3, 5, 7} |
| **∉ (does not belong to)** | "Andar nahi hai" ka nishaan | 4 ∉ {2, 3, 5, 7} |
| **Roster / Tabular form** | Set ke saare elements ko comma se alag karke curly brackets { } mein likhna | {2, 4, 6, 8, 10} |
| **Set-builder form** | Elements ko ginne ke bajay unka ek common niyam (property) likhna | {x : x is an even natural number, x ≤ 10} |
| **Empty / Null / Void set (∅)** | Aisa set jisme ek bhi element na ho | {x ∈ N : 5 < x < 6} = ∅ = { } |
| **Singleton set** | Aisa set jisme theek ek hi element ho | {2} (even prime numbers ka set) |
| **Finite set** | Jiske elements ki ginti kahin khatam hoti ho (ya khaali ho) | {1, 2, 3, ..., 50} |
| **Infinite set** | Jiske elements ki ginti kabhi khatam na ho | N = {1, 2, 3, ...} |
| **Cardinal number n(A)** | Kisi finite set A mein kul alag-alag elements ki ginti | A = {a, e, i, o, u} to n(A) = 5 |
| **Equal sets (A = B)** | Do sets jinme bilkul wahi elements hon (order aur repeat ka farq nahi) | {1, 2, 3} = {3, 1, 2} |
| **Equivalent sets** | Do finite sets jinke elements ki ginti barabar ho: n(A) = n(B) | {1, 2, 3} aur {a, b, c} |

---

## Part A: Well-defined collection — Set kya hai aur kya nahi?

Ek collection tabhi **set** banega jab uska niyam itna pakka ho ki kisi bhi cheez ke baare mein duniya ka har insaan ek hi jawab de: **"Haan, ye andar hai"** ya **"Nahi, ye bahar hai."**

Agar niyam mein **best, tall, intelligent, rich, difficult, interesting, most talented, famous** jaise raay (opinion) wale shabd aa jayein, to alag log alag list banayenge. Aisa sangrah **set nahi** hai.

```
   Collection
      :
      +---> Kya har cheez ke liye pakka Haan / Naa milta hai?
               :
               +---> HAAN (pakka niyam)  --->  YE SET HAI
               :                               Jaise: 20 se chhote prime numbers
               :
               +---> NAHI (pasand/raay)  --->  YE SET NAHI HAI
                                               Jaise: India ke 5 best batsmen
```

> **Figure 1.1** – Set pehchanne ka ek-line test: agar faisla sabut ya ginti se ho to set hai; agar pasand ya raay se ho to set nahi.

### Likhne ke teen pakke niyam (Notation)

1. **Sets ke naam** hamesha **CAPITAL letters** mein likhe jaate hain: A, B, C, X, Y, Z.
2. **Elements** ko aam taur par **small letters** (a, b, c, x, y) ya numbers se dikhate hain.
3. Agar element x set A ke andar hai, to likhte hain **x ∈ A** ("x belongs to A"). Agar bahar hai, to **x ∉ A** ("x does not belong to A").

### Standard Number Sets (Class 9 se yaad)

Class 9 ke [number-systems.md](../../../class9/maths/number-systems/number-systems.md) aur [number-systems-part3.md](../../../class9/maths/number-systems/number-systems-part3.md) mein tumne numbers ka parivaar padha tha. Maths mein unke liye pakke capital letters reserve hain — inhe kabhi kisi aam set ke naam ke liye use mat karna:

| Symbol | Poora naam | Elements |
|---|---|---|
| **N** | Natural numbers | {1, 2, 3, 4, ...} |
| **W** | Whole numbers | {0, 1, 2, 3, ...} |
| **Z** | Integers (Zahlen) | {..., −3, −2, −1, 0, 1, 2, 3, ...} |
| **Z⁺** | Positive integers | {1, 2, 3, ...} (= N) |
| **Q** | Rational numbers | {p/q : p, q ∈ Z, q ≠ 0} |
| **Q⁺** | Positive rational numbers | Sabhi positive p/q |
| **R** | Real numbers | Rational + Irrational (poori number line) |
| **R⁺** | Positive real numbers | {x ∈ R : x > 0} |

### Example 1: Pehchano — kaun sa collection set hai?

Neeche diye chaar sangrah dekho aur kaaran ke saath batao kaun set hai aur kaun nahi:
(i) 20 se chhote sabhi prime numbers ka sangrah.
(ii) Saal ke un mahinon ka sangrah jinme 31 din hote hain.
(iii) Class 11 ke sabse mushkil (hardest) subjects ka sangrah.
(iv) Bharat ke sabse lambe (tallest) pedon ka sangrah.

**Hal:**
- (i) **Set hai.** 20 se chhote prime numbers bilkul tay hain: {2, 3, 5, 7, 11, 13, 17, 19}. Kisi bhi number ke liye pakka Haan/Naa milta hai.
- (ii) **Set hai.** 31 din wale mahine sabke liye ek hi hain: {January, March, May, July, August, October, December}.
- (iii) **Set nahi hai.** "Mushkil" har student ke liye alag hota hai — kisi ko Maths aasaan lagti hai, kisi ko History.
- (iv) **Set nahi hai.** "Sabse lambe" ki koi pakki seema (jaise "30 m se upar") nahi di gayi hai, isliye collection well-defined nahi hai.

**Jaanch:** (i) aur (ii) mein har object ke liye objective rule hai ✅; (iii) aur (iv) mein subjective shabd ("hardest", "tallest") hain ✅.

---

## Part B: Set ko likhne ke do tareeke (Roster aur Set-Builder)

### 1. Roster Form (ya Tabular Form)

Isme hum set ke saare elements ko **curly brackets { }** ke andar **comma (,)** se alag karke seedha likh dete hain.

Do zaroori niyam (kyun? kyunki set sirf ye poochta hai ki "kaun andar hai", ye nahi ki "kitni baar ya kis kram mein"):
1. **Order (kram) se koi farq nahi padta:** {2, 4, 6} aur {6, 2, 4} bilkul ek hi set hain.
2. **Repeat nahi likhte:** Shabd SCHOOL ke letters ka set {S, C, H, O, L} hoga — O ko do baar nahi likhenge.

Agar set bahut bada ya infinite ho, to shuru ke kuch elements likh kar teen dots (**...**) laga dete hain, jaise odd natural numbers = {1, 3, 5, 7, ...}.

### 2. Set-Builder Form

Jab set bahut bada ho ya elements ke beech koi saaf formula/niyam ho, to saare elements ginne ke bajay hum ek **variable x** lete hain aur uska niyam likh dete hain:

> **A = {x : x mein ye khas gun hai}**

Yahan colon **":"** (ya kabhi seedhi line) ka matlab hota hai **"such that"** (is prakar ki). Ise aise padhte hain: *"The set of all x such that ..."*

### Example 2: Set-builder se Roster form banao

Neeche diye sets ko Roster form mein likho:
(i) A = {x : x ∈ Z aur −3 < x ≤ 4}
(ii) B = {x : x is a letter in the word MATHEMATICS}
(iii) C = {x : x² − 5x + 6 = 0}
(iv) D = {x : x is a positive divisor of 24}

**Hal:**
- (i) −3 se bade aur 4 tak ke integers (−3 shamil nahi, 4 shamil hai):
  **A = {−2, −1, 0, 1, 2, 3, 4}**
- (ii) Shabd MATHEMATICS ke letters: M, A, T, H, E, M(repeat), A(repeat), T(repeat), I, C, S. Repeats hatao:
  **B = {M, A, T, H, E, I, C, S}** (kul 8 alag letters).
- (iii) Equation x² − 5x + 6 = 0 ko factor karo: (x − 2)(x − 3) = 0, yaani x = 2 ya x = 3.
  **C = {2, 3}**
- (iv) 24 ko poora bhaag dene wale positive integers: 1 × 24, 2 × 12, 3 × 8, 4 × 6.
  **D = {1, 2, 3, 4, 6, 8, 12, 24}**

**Jaanch:** (i) −2 > −3 aur 4 ≤ 4, kul 7 integers ✅; (ii) M, A, T repeat hatne par 11 − 3 = 8 letters ✅; (iii) 2² − 5(2) + 6 = 0 aur 3² − 5(3) + 6 = 0 ✅; (iv) 24 = 2³ × 3¹ ke divisors ki ginti (3 + 1)(1 + 1) = 8 ✅.

### Example 3: Roster se Set-builder form banao

Neeche diye sets ko Set-builder form mein likho:
(i) P = {3, 6, 9, 12, 15}
(ii) Q = {1, 4, 9, 16, 25, 36}
(iii) R = {2/3, 3/4, 4/5, 5/6, 6/7}
(iv) S = {1, 1/2, 1/4, 1/8, 1/16}

**Hal:**
- (i) Har element 3 ka gunaj (multiple) hai: 3×1, 3×2, ..., 3×5.
  **P = {x : x = 3n, n ∈ N aur 1 ≤ n ≤ 5}**
- (ii) Ye 1 se 6 tak ke squares hain: 1², 2², 3², 4², 5², 6².
  **Q = {x : x = n², n ∈ N aur 1 ≤ n ≤ 6}**
- (iii) Har fraction mein denominator numerator se 1 bada hai, aur numerator 2 se 6 tak jaata hai: n/(n + 1) ya (k + 1)/(k + 2).
  **R = {x : x = n/(n + 1), n ∈ N aur 2 ≤ n ≤ 6}** (ya n = 1..5 ke saath (n + 1)/(n + 2) bhi sahi hai).
- (iv) Denominators 2 ki powers hain: 2⁰ = 1, 2¹ = 2, 2² = 4, 2³ = 8, 2⁴ = 16.
  **S = {x : x = 1/2ⁿ, n ∈ W aur 0 ≤ n ≤ 4}**

**Jaanch:** (i) n = 1..5 se 3, 6, 9, 12, 15 ✅; (ii) n = 1..6 se 1, 4, 9, 16, 25, 36 ✅; (iii) n = 2..6 se 2/3, 3/4, 4/5, 5/6, 6/7 ✅; (iv) n = 0..4 se 1/1, 1/2, 1/4, 1/8, 1/16 ✅.

---

## Part C: Empty Set, Singleton Set, Finite Aur Infinite Sets

### 1. Empty Set (Khaali Set / Null Set / Void Set)

Aisa set jisme **ek bhi element nahi hota** use **Empty set** kehte hain. Iska symbol hai **∅** (Danish letter, "phi" bolte hain) ya khaali brackets **{ }**.

Ek khaas baat: **∅** aur **{∅}** ek hi cheez NAHI hain!
- **∅ = { }** ek khaali dabba hai — isme 0 cheezein hain, n(∅) = 0.
- **{∅}** ek dabba hai jiske andar ek khaali dabba rakha hai — isme **1 element** hai, n({∅}) = 1!
- Isi tarah **{0}** bhi khaali nahi hai — usme number 0 baitha hai, n({0}) = 1!

```
   Khaali dabba:      [       ]    --->   ∅ ya { }    (0 elements)
   0 wala dabba:      [   0   ]    --->   {0}         (1 element: singleton)
   Dabbe mein dabba:  [  [ ]  ]    --->   {∅}         (1 element: singleton)
```

> **Figure 1.2** – Teen alag sets: sirf pehla (∅) khaali hai. {0} aur {∅} dono singleton sets hain jinme 1-1 element hai.

### 2. Singleton Set

Jis set mein **theek ek** element ho, use **singleton set** kehte hain. Jaise {2} (even prime number), {0}, {∅}.

### 3. Finite aur Infinite Sets

- **Finite set:** Aisa set jo ya to khaali ho, ya jiske elements ki ginti kisi natural number par **khatam** ho jaaye. Is ginti ko set ka **cardinal number** ya **order** kehte hain aur **n(A)** likhte hain. (n(∅) = 0.)
- **Infinite set:** Aisa set jiske elements ki ginti kabhi khatam na ho. Jaise N, Z, Q, R, ya kisi line segment par sabhi points ka set.

Dhyan do: Har infinite set ko roster form mein likhna aasaan nahi hota! N = {1, 2, 3, ...} mein pattern saaf hai, par **R** (sabhi real numbers) ko roster form mein nahi likh sakte kyunki koi "pehla" ya "agla" real number nahi hota.

### Example 4: Classify karo — Empty, Singleton, Finite ya Infinite?

(i) E = {x ∈ N : 5 < x < 6}
(ii) F = {x ∈ R : x² + 9 = 0}
(iii) G = {x ∈ N : x is an even prime number}
(iv) H = {x ∈ Z : x < 10}
(v) K = ek 5 cm line segment par sabhi points ka set

**Hal:**
- (i) 5 aur 6 ke beech koi natural number nahi hota. **E = ∅ (Empty, aur isliye Finite bhi, n(E) = 0).**
- (ii) Har real number x ke liye x² ≥ 0, isliye x² + 9 ≥ 9 > 0 — ye kabhi 0 nahi hoga. **F = ∅ (Empty, Finite).**
- (iii) 2 akela even prime number hai. **G = {2} (Singleton, Finite, n(G) = 1).**
- (iv) 10 se chhote integers: 9, 8, 7, ..., 0, −1, −2, ... ye negative taraf kabhi nahi rukte. **H Infinite set hai.**
- (v) 5 cm chhota zaroor hai, par us par anant (infinitely many) points hote hain. **K Infinite set hai.**

**Jaanch:** (i) 5 aur 6 lagatar natural numbers hain ✅; (ii) x² = −9 ka koi real root nahi ✅; (iii) 2 se bade sabhi even numbers 2 se bhaag hote hain isliye prime nahi ✅; (iv) negative integers ki koi lower limit nahi ✅.

---

## Part D: Equal Sets vs Equivalent Sets

Yahan ek bahut baarik par zaroori antar hai:

- **Equal sets (A = B):** Do sets A aur B tab **equal** hote hain jab unme **bilkul wahi elements** hon — A ka har element B mein ho, aur B ka har element A mein ho. Order aur repetition se farq nahi padta.
- **Equivalent sets (A ↔ B):** Do finite sets tab **equivalent** hote hain jab unke elements ki **ginti barabar** ho, yaani **n(A) = n(B)** — chahe elements alag hi kyun na hon!

**Kyun zaroori hai ye antar?**
Har do **equal** finite sets hamesha **equivalent** hote hain (kyunki elements same hain to ginti bhi same hogi). Par har do **equivalent** sets **equal nahi** hote! Jaise {1, 2, 3} aur {a, b, c} dono mein 3 elements hain (equivalent hain), par wo equal nahi hain.

### Example 5: Equal aur Equivalent ki jaanch

In paanch sets ki tulna karo:
- A = {1, 2, 3}
- B = {3, 1, 2, 2}
- C = {a, b, c}
- D = {x ∈ N : x² < 10}
- E = {x : x is a letter of FOLLOW} aur F = {x : x is a letter of WOLF}

**Hal:**
1. B se repeat hatakar likho: B = {1, 2, 3}.
2. D mein kaun se natural numbers ka square 10 se chhota hai? 1² = 1, 2² = 4, 3² = 9, 4² = 16 (bada!). Isliye D = {1, 2, 3}.
3. To **A = B = D** (teeno **equal** sets hain, aur **equivalent** bhi).
4. C = {a, b, c} mein n(C) = 3 = n(A), par elements alag hain. Isliye **A aur C equivalent hain, par equal nahi (A ≠ C)**.
5. E = {F, O, L, W} aur F = {W, O, L, F}. Dono mein wahi chaar letters hain! Isliye **E = F** (equal aur equivalent dono).

**Jaanch:** n(A) = n(B) = n(C) = n(D) = 3 ✅; A, B, D ke elements {1, 2, 3} exact same ✅; E aur F dono mein {F, L, O, W} ✅.

### Example 6: Set-builder, Roster aur Cardinality ek saath

Set M = {x ∈ Z : x² ≤ 16} aur N_set = {x ∈ N : x < 10 aur x is a multiple of 2} diye hain. Dono ko Roster form mein likho, unke cardinal numbers batao, aur check karo kya M aur N_set equal ya equivalent hain.

**Hal:**
1. x² ≤ 16 ka matlab −4 ≤ x ≤ 4 (kyunki (±4)² = 16 aur (±5)² = 25 > 16). Integers:
   **M = {−4, −3, −2, −1, 0, 1, 2, 3, 4}**, isliye **n(M) = 9**.
2. 10 se chhote even natural numbers:
   **N_set = {2, 4, 6, 8}**, isliye **n(N_set) = 4**.
3. Na elements same hain, na ginti (9 ≠ 4). Isliye M aur N_set **na equal hain, na equivalent**.

**Jaanch:** M mein −4 se +4 tak kul 4 − (−4) + 1 = 9 integers ✅; N_set mein 2, 4, 6, 8 = 4 elements ✅.

---

## Aam galtiyan

1. **Pasand/raay wale sangrah ko set maan lena:** "School ke 5 best cricketers" ya "India ke 10 most dangerous animals" set **nahi** hain.
   - *Sahi soch:* Jab tak koi pakka, naapne layak shart na ho (jaise "pichhle saal 500 se zyada runs banane wale players"), use set mat kaho.
2. **Roster form mein elements repeat karna ya order badalne par naya set samajhna:** Student likhta hai "{1, 2, 2, 3} aur {3, 1, 2} alag sets hain."
   - *Galat kyun:* Set mein sirf alag-alag (distinct) members dekhe jaate hain aur kram ka koi matlab nahi. Dono {1, 2, 3} ke barabar hain, aur n({1, 2, 2, 3}) = 3 (4 nahi!).
3. **Empty set ko {∅} ya {0} likh dena:** Student sochta hai "curly bracket mein ∅ daal doon to khaali set ban jayega."
   - *Galat kyun:* {∅} mein 1 element hai (jo khud ∅ hai), aur {0} mein number 0 hai. Empty set ko ya to sirf **∅** likho (bina brackets) ya khaali **{ }** likho.
4. **Equal aur Equivalent ko ek hi samajhna:** Student kehta hai "A = {10, 20} aur B = {x, y} dono mein 2 elements hain, to A = B."
   - *Galat kyun:* Ginti barabar hone se sets sirf **equivalent** hote hain (n(A) = n(B) = 2), **equal** tabhi honge jab andar ki cheezein bhi bilkul wahi hon.

---

## Quick Recap

- **Set** = well-defined collection of distinct objects; **∈** (andar hai), **∉** (bahar hai).
- **Roster form:** {elements comma se alag}, no repeats, order doesn't matter. **Set-builder form:** {x : property of x}.
- **Standard sets:** N, W, Z, Q, R (Class 9 Number Systems se).
- **Empty set** ∅ = { } (n(∅) = 0; {0} aur {∅} empty nahi hain!). **Singleton** mein n(A) = 1.
- **Finite** (ginti khatam ho, n(A) defined) vs **Infinite** (kabhi khatam na ho).
- **Equal sets** (A = B): exact same elements. **Equivalent sets**: n(A) = n(B).

---

## Practice Questions

1. State which of the following collections are sets and justify your answer:
   (a) The collection of all odd integers between −6 and 6.
   (b) The collection of the 5 most popular movies of this year.
   (c) The collection of all vowels in the English alphabet.
   (d) The collection of all good mathematicians in India.

2. Let A = {2, 5, 8, 11, 14, 17}. Insert the correct symbol ∈ or ∉ in each blank:
   (a) 8 ___ A    (b) 10 ___ A    (c) 17 ___ A    (d) 2 ___ A    (e) 0 ___ A    (f) 14 ___ A

3. Write the following sets in Roster form:
   (a) P = {x : x ∈ Z and −5 ≤ x < 2}
   (b) Q = {x : x is a letter in the word TRIGONOMETRY}
   (c) R = {x : x is a two-digit natural number whose sum of digits is 7}
   (d) S = {x : x is a prime number that divides 60}

4. Write the following sets in Roster form by solving the equations:
   (a) A = {x ∈ R : x² − 9x + 20 = 0}
   (b) B = {x ∈ Z : x² = 25}
   (c) C = {x ∈ N : 2x + 3 = 10}

5. Write the following sets in Set-builder form:
   (a) {5, 10, 15, 20, 25, 30}
   (b) {2, 4, 8, 16, 32, 64}
   (c) {1/2, 2/3, 3/4, 4/5, 5/6, 6/7}
   (d) {−3, −2, −1, 0, 1, 2, 3}

6. Identify each of the following as an Empty set, a Singleton set, or Neither:
   (a) {x ∈ N : x² = 4}
   (b) {x ∈ Z : x² = 4}
   (c) {x ∈ N : x < 1}
   (d) {x : x is an even prime number greater than 2}
   (e) {0}

7. State whether each set is Finite or Infinite:
   (a) The set of all multiples of 7.
   (b) The set of all divisors of 120.
   (c) The set of all circles passing through the origin (0, 0).
   (d) {x ∈ Z : x > −100 and x < 100}.

8. Find the cardinal number n(A) for each of the following finite sets:
   (a) A = {x : x is a letter of the word BETTER}
   (b) B = {x ∈ W : x < 8}
   (c) C = {x ∈ N : 3 < x < 4}
   (d) D = {x ∈ Z : x² < 20}

9. Determine whether the pairs of sets are Equal, Equivalent (but not equal), or Neither:
   (a) A = {4, 8, 12, 16} and B = {8, 4, 16, 12}
   (b) P = {x : x is a letter of ALLOY} and Q = {x : x is a letter of LOYAL}
   (c) X = {1, 3, 5, 7} and Y = {p, q, r, s}
   (d) M = {x ∈ N : x² − 1 = 0} and K = {x ∈ Z : x² − 1 = 0}

10. True or False? Give a one-line reason for each:
    (a) ∅ = {0}
    (b) ∅ = {∅}
    (c) {a, b, b, c} = {c, a, b}
    (d) Every pair of equal finite sets is also equivalent.

11. List all elements of the set T = {x : x = n² − 1, n ∈ Z and −2 ≤ n ≤ 3}, and find n(T). (Be careful about repeated values!)

12. Match each set in Roster form on the left with its Set-builder form on the right:
    (i) {1, 2, 3, 6, 9, 18}       (p) {x : x is a letter of PRINCIPAL}
    (ii) {P, R, I, N, C, A, L}    (q) {x ∈ N : x is a divisor of 18}
    (iii) {−4, 4}                 (r) {x ∈ N : x + 5 = 5}
    (iv) ∅                        (s) {x ∈ Z : x² − 16 = 0}

### Answers

1. (a) **Set hai:** −6 aur 6 ke beech odd integers pakke hain: {−5, −3, −1, 1, 3, 5}.
   (b) **Set nahi hai:** "most popular" ki koi pakki paribhasha nahi di gayi, har kisi ki list alag hogi.
   (c) **Set hai:** English vowels tay hain: {a, e, i, o, u}.
   (d) **Set nahi hai:** "good" subjective shabd hai.

2. (a) 8 ∈ A, (b) 10 ∉ A, (c) 17 ∈ A, (d) 2 ∈ A, (e) 0 ∉ A, (f) 14 ∈ A.

3. (a) P = {−5, −4, −3, −2, −1, 0, 1} (kul 7 integers; −5 shamil, 2 nahi).
   (b) Q = {T, R, I, G, O, N, M, E, Y} (T, R, O ke repeats hataye; 12 − 3 = 9 letters).
   (c) Do-digit numbers jinke digits ka jod 7 ho: 16, 25, 34, 43, 52, 61, 70 → R = {16, 25, 34, 43, 52, 61, 70}.
   (d) 60 = 2² × 3 × 5, isliye prime divisors: S = {2, 3, 5}.

4. (a) x² − 9x + 20 = (x − 4)(x − 5) = 0 → A = {4, 5}. Jaanch: 4 + 5 = 9, 4 × 5 = 20 ✅.
   (b) x² = 25 ke integer roots −5 aur 5 hain → B = {−5, 5}.
   (c) 2x + 3 = 10 se x = 7/2 = 3.5, jo natural number nahi hai! Isliye C = ∅.

5. (a) {x : x = 5n, n ∈ N aur 1 ≤ n ≤ 6}.
   (b) {x : x = 2ⁿ, n ∈ N aur 1 ≤ n ≤ 6}.
   (c) {x : x = n/(n + 1), n ∈ N aur 1 ≤ n ≤ 6}.
   (d) {x : x ∈ Z aur −3 ≤ x ≤ 3}.

6. (a) x ∈ N aur x² = 4 → sirf x = 2 → {2} (**Singleton**).
   (b) x ∈ Z aur x² = 4 → {−2, 2} (**Neither**, 2 elements).
   (c) 1 se chhota koi natural number nahi → ∅ (**Empty**).
   (d) 2 se bada koi even prime nahi → ∅ (**Empty**).
   (e) {0} mein ek element 0 hai → **Singleton**.

7. (a) **Infinite** (7, 14, 21, ... kabhi khatam nahi hote).
   (b) **Finite** (120 = 2³ × 3 × 5 ke sirf 16 positive divisors hain).
   (c) **Infinite** (origin se anant radii aur centres wale circles guzar sakte hain).
   (d) **Finite** (−99 se +99 tak kul 199 integers).

8. (a) A = {B, E, T, R} → n(A) = **4**.
   (b) B = {0, 1, 2, 3, 4, 5, 6, 7} → n(B) = **8** (0 shamil hai kyunki W whole numbers hain!).
   (c) C = ∅ → n(C) = **0**.
   (d) x² < 20 wale integers: −4, −3, −2, −1, 0, 1, 2, 3, 4 → n(D) = **9**. Jaanch: 4² = 16 < 20, 5² = 25 > 20 ✅.

9. (a) **Equal** (order alag par wahi 4 elements; equivalent bhi hain).
   (b) P = {A, L, O, Y} aur Q = {L, O, Y, A} → **Equal**.
   (c) n(X) = n(Y) = 4, par elements alag → **Equivalent (but not equal)**.
   (d) M = {1} (kyunki −1 ∉ N), K = {−1, 1}. n(M) = 1 ≠ 2 = n(K) → **Neither**.

10. (a) ❌ False: ∅ mein 0 elements hain, {0} mein 1 element hai.
    (b) ❌ False: {∅} ek singleton set hai jisme 1 element (∅) hai.
    (c) ✅ True: repeat aur order se set nahi badalta.
    (d) ✅ True: elements exact same hon to unki ginti n(A) aur n(B) bhi barabar hogi.

11. n = −2, −1, 0, 1, 2, 3 rakhne par n² − 1 ke maan:
    - n = −2 → 3
    - n = −1 → 0
    - n = 0 → −1
    - n = 1 → 0 (repeat!)
    - n = 2 → 3 (repeat!)
    - n = 3 → 8
    Repeats hatao: **T = {−1, 0, 3, 8}**, isliye **n(T) = 4**. Jaanch: (−2)² − 1 = 3, 3² − 1 = 8 ✅.

12. (i) ↔ (q), (ii) ↔ (p), (iii) ↔ (s), (iv) ↔ (r) (kyunki x + 5 = 5 ⇒ x = 0 ∉ N, isliye ∅).

---

Ab tum kisi bhi saaf-suthre collection ko set ke roop mein likhna, uski ginti karna aur do sets ki barabari jaanchna seekh chuke ho.

**Agle topic mein:** jab ek set poora ka poora doosre bade set ke andar baitha ho to use kya kehte hain? Milenge **Subsets**, **Power Set**, **Real Intervals** aur **Venn Diagrams** se!
