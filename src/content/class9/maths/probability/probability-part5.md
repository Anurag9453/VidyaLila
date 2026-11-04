# Chapter: Probability (Part 5)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [probability-part4.md](probability-part4.md) se aage chalti hai.** (Chapter ki shuruaat [probability.md](probability.md) se hoti hai.)
> **Topics covered in this file:**
> 5. Do Sikke, Do Paase aur Taash (Extra)

---

# Topic 5: Do Sikke, Do Paase aur Taash (Extra)

Topic 4 mein Bansi kaka ki "70% baarish" wali khabar se humne dekha ki probability hamesha 0 aur 1 ke beech rehti hai, ki kisi event ke "na hone" ki probability 1 − P(E) hoti hai (baarish nahi = 0.3), aur "kam se kam ek" wale sawaal complement se aasani se hal ho jaate hain. Wahan sikke ko 2 baar uchhaal kar HH, HT, TH, TT bas halke se gine the. Aaj inhe poori tarah samjhenge.

Is topic mein hum **do ya teen cheezein ek saath** phenkenge. Yahin sabse zyada galtiyan hoti hain, kyunki outcomes ginna thoda tricky ho jata hai. Topic 3 mein ek jaal chhoda tha: "do sikkon mein 0, 1 ya 2 heads aa sakte hain, to har ek ki probability 1/3". Wo galat tha, aur aaj hum saaf karenge ki kyun. Ye chapter ka aakhri topic hai, to end mein poore chapter ka wrap-up bhi hoga.

---

## Dev, Navya aur do paase

Dev aur Navya cousins hain. Sunday ki dopahar wo snakes-and-ladders khel rahe hain, aur ismein **do paase ek saath** phenkne padte hain. Dev ke paase se 4 aur 3 aaye, to wo 7 aage badha.

Dev ne kaha, "Navya, 12 aana to bahut mushkil hai, par 7 aana aasan hai. Dekha, mujhe to baar baar 6, 7, 8 hi aate hain!"

Navya ne kaha, "Bhaiya, ye feeling hai ya sach? Chalo, numbers se saabit karte hain."

Dev ne poocha, "Par 2 se 12 tak 11 sums hain. To har sum ki chance 1/11 hogi na?"

Navya muskuraayi, "Pehle saare outcomes likhte hain. Phir dekhenge ki 1/11 sahi hai ya nahi."

Dekhte hain. Pehle sikkon se shuru karte hain, kyunki wahan wahi sawaal chhota roop mein hai.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Sample space** (Topic 3 se) | Ek experiment ke saare possible outcomes ki poori list | Do sikke: HH, HT, TH, TT |
| **Doubles** | Dono paason par ek jaisa number | (3, 3) |
| **Ordered pair** | (pehla paasa, doosra paasa); order se fark padta hai | (2, 5) aur (5, 2) alag outcomes hain |
| **Deck (taash ki gaddi)** | 52 patton ka poora set | Taash ki ek gaddi |
| **Suit** | Taash ki 4 family mein se ek | Spades, clubs, hearts, diamonds |
| **Face card** | J, Q, K wale patte | King of hearts |

---

## Part A: Do sikke aur teen sikke

### Do sikke ka poora sample space

Maan lo hum do sikke phenkte hain: ek **1 rupee** ka aur ek **2 rupee** ka. Dono alag sikke hain, to hum bata sakte hain ki kaun sa kya laaya. Saare outcomes:

| 1 rupee ka sikka | 2 rupee ka sikka | Outcome |
|---|---|---|
| H | H | HH |
| H | T | HT |
| T | H | TH |
| T | T | TT |

Total outcomes = **4**, aur chaaron **equally likely** hain.

Dhyan do: **HT aur TH alag outcomes hain.** HT matlab 1 rupee wale par H aur 2 rupee wale par T. TH matlab ulta. Agar sikke bilkul ek jaise hon, tab bhi har sikka apna alag result deta hai, isliye ginti 4 hi rehti hai.

### Heads ki ginti: ye barabar kyun nahi?

Topic 3 mein kaha tha ki "0, 1 ya 2 heads" ko 1/3 1/3 1/3 maan lena jaal hai. Ab dekho kyun:

| Heads ki ginti | Kaun se outcomes | Kitne | Probability |
|---|---|---|---|
| 0 heads | TT | 1 | 1/4 |
| 1 head | HT, TH | 2 | 2/4 = **1/2** |
| 2 heads | HH | 1 | 1/4 |

Jaanch (jod): 1/4 + 1/2 + 1/4 = 1 ✅

"0, 1, 2 heads" sirf **teen naam** hain, teen **equally likely outcomes** nahi. 1 head ke **do raaste** hain (HT ya TH), isliye wo zyada likely hai. Equally likely outcomes wo hain jo sample space ki list mein hain: HH, HT, TH, TT.

Jaanch (khud phenkke): 100 baar do sikke phenko to lagbhag 50 baar exactly 1 head aayega, 25 baar 0 heads aur 25 baar 2 heads. Topic 2 ka empirical tareeka bhi yahi dikhata hai.

### Example 1: Do sikke, kuch aur events

P(kam se kam ek head) = 3/4 hum Topic 4 (Example 9) mein complement se nikaal chuke hain. Do naye events dekhte hain:

P(dono same) = P(HH, TT) = 2/4 = **1/2**.

P(1 rupee wale par head) = P(HH, HT) = 2/4 = **1/2**.
Jaanch: 1 rupee wala sikka akela bhi 1/2 chance se head deta, doosra sikka isme koi fark nahi daalta ✅

### Teen sikke (chhota sa extra)

Teen sikkon ke outcomes: har sikke ke 2 raaste, to 2 × 2 × 2 = **8** outcomes.

HHH, HHT, HTH, HTT, THH, THT, TTH, TTT

| Heads ki ginti | Outcomes | Kitne | Probability |
|---|---|---|---|
| 0 | TTT | 1 | 1/8 |
| 1 | HTT, THT, TTH | 3 | 3/8 |
| 2 | HHT, HTH, THH | 3 | **3/8** |
| 3 | HHH | 1 | 1/8 |

Jaanch (jod): 1 + 3 + 3 + 1 = 8, to 8/8 = 1 ✅

- P(exactly 2 heads) = **3/8**
- P(kam se kam ek head) = 1 − P(TTT) = 1 − 1/8 = **7/8**
  Jaanch: 8 mein se sirf TTT ko chhodke baaki 7 outcomes mein ek ya zyada head hai ✅

---

## Part B: Do paase

### 36 outcomes ki poori table

Pehle paase ke 6 raaste, doosre ke 6 raaste, to 6 × 6 = **36** outcomes. Har cell (pehla, doosra) outcome hai.

| Pehla \ Doosra | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| **1** | (1,1) | (1,2) | (1,3) | (1,4) | (1,5) | (1,6) |
| **2** | (2,1) | (2,2) | (2,3) | (2,4) | (2,5) | (2,6) |
| **3** | (3,1) | (3,2) | (3,3) | (3,4) | (3,5) | (3,6) |
| **4** | (4,1) | (4,2) | (4,3) | (4,4) | (4,5) | (4,6) |
| **5** | (5,1) | (5,2) | (5,3) | (5,4) | (5,5) | (5,6) |
| **6** | (6,1) | (6,2) | (6,3) | (6,4) | (6,5) | (6,6) |

Total = 6 × 6 = 36 cells, aur sab **equally likely** hain. Dhyan do: (2,5) aur (5,2) alag cells hain, bilkul HT aur TH ki tarah.

### Sums ki ginti: Dev ka 1/11 galat kyun tha?

Har cell ka sum nikalo. Ek sum ke liye kitne cells hain:

| Sum | Kaun se outcomes | Kitne | Probability |
|---|---|---|---|
| 2 | (1,1) | 1 | 1/36 |
| 3 | (1,2), (2,1) | 2 | 2/36 = 1/18 |
| 4 | (1,3), (2,2), (3,1) | 3 | 3/36 = 1/12 |
| 5 | (1,4), (2,3), (3,2), (4,1) | 4 | 4/36 = 1/9 |
| 6 | (1,5), (2,4), (3,3), (4,2), (5,1) | 5 | 5/36 |
| 7 | (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) | 6 | 6/36 = **1/6** |
| 8 | (2,6), (3,5), (4,4), (5,3), (6,2) | 5 | 5/36 |
| 9 | (3,6), (4,5), (5,4), (6,3) | 4 | 4/36 = 1/9 |
| 10 | (4,6), (5,5), (6,4) | 3 | 3/36 = 1/12 |
| 11 | (5,6), (6,5) | 2 | 2/36 = 1/18 |
| 12 | (6,6) | 1 | 1/36 |

Jaanch: 1 + 2 + 3 + 4 + 5 + 6 + 5 + 4 + 3 + 2 + 1 = **36** ✅

**Navya ka jawab:** Sums 11 hain, par ye 11 outcomes **equally likely nahi** hain. Sum 12 sirf ek tareeke se banta hai, (6,6). Sum 7 chhe tareekon se banta hai. Isliye:

- P(sum 12) = **1/36**, kareeb 2.8%
- P(sum 7) = 6/36 = **1/6**, kareeb 16.7%

7 ki chance 12 se **6 guna** zyada hai. **Dev sahi tha**: 7 sabse likely sum hai, aur 2 aur 12 sabse kam likely. Dev ko 6, 7, 8 isliye baar baar aate the, kyunki beech ke sums ke zyada raaste hain.

### Example 2: Sum 2

Sirf (1,1). **P(sum 2) = 1/36.** Jaanch: table mein 2 ki ginti 1 hai ✅

### Example 3: Doubles (dono paason par same number)

Diagonal ke cells: (1,1), (2,2), (3,3), (4,4), (5,5), (6,6) = 6 outcomes.
**P(doubles) = 6/36 = 1/6.**
Jaanch: "dono numbers same" aur "doubles" ek hi event hain, to P(dono same) = **1/6** bhi hai. Alag soch: pehle paase par kuch bhi aaye, doosre paase ko 6 mein se ek hi number match karna hai, to 1/6 ✅

### Example 4: Sum kam se kam 10

Sum 10, 11 ya 12: (4,6), (5,5), (6,4), (5,6), (6,5), (6,6) = 3 + 2 + 1 = 6 outcomes.
**P(sum ≥ 10) = 6/36 = 1/6.**
Jaanch: sums wali table mein 3 + 2 + 1 = 6 ✅

### Example 5: Product 12

Kin jodiyon ka guna 12 hai? 2 × 6, 3 × 4. Order ke saath: (2,6), (6,2), (3,4), (4,3) = 4 outcomes.
**P(product 12) = 4/36 = 1/9.**
Jaanch: 1 × 12 nahi ho sakta (12 paase par nahi), aur 12 = 2 × 6 = 3 × 4 = 4 × 3 = 6 × 2, yaani sirf yahi 4 ✅

---

## Part C: Taash ki gaddi (extra)

Ye hissa **extra** hai. Taash (playing cards) ke sawaal aksar poochhe jaate hain, aur bahut se students ne kabhi gaddi dekhi hi nahi hoti. Isliye pehle poori gaddi samajh lete hain.

### 52 patton ki gaddi

Ek gaddi mein **52 patte** hote hain. Wo **4 suits** (family) mein baante hote hain:

| Suit | Rang | Kitne patte |
|---|---|---|
| Spades (hukum) | Kaala (black) | 13 |
| Clubs (chidi) | Kaala (black) | 13 |
| Hearts (paan) | Laal (red) | 13 |
| Diamonds (eent) | Laal (red) | 13 |

To **26 laal** (hearts + diamonds) aur **26 kaale** (spades + clubs), kul 4 × 13 = 52.

Har suit ke **13 patte**: Ace (A), 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack (J), Queen (Q), King (K). Ginti: 1 + 9 + 3 = 13.

**Face cards:** J, Q, K ko face cards kehte hain, kyunki unpar insaan ka chehra bana hota hai. Har suit mein 3, to **3 × 4 = 12 face cards.** Dhyan do: ek "face card" ek patta hai, teen nahi. Ginti mein 12 patte hain.

Har number ke 4 patte hote hain (har suit mein ek). Jaise 4 kings, 4 aces, 4 saat.

Gaddi ko achhe se phent ke ek patta bina dekhe nikaalo, to har patta **equally likely** hai: 52 outcomes.

### Example 6: Laal patta

26 laal patte. **P(red) = 26/52 = 1/2.**
Jaanch: 26 ÷ 26 = 1 aur 52 ÷ 26 = 2, to 1/2. Aadhe patte laal hain, to bilkul sahi lagta hai ✅

### Example 7: King

4 kings (har suit mein ek). **P(king) = 4/52 = 1/13.**
Jaanch: 4 ÷ 4 = 1, 52 ÷ 4 = 13 ✅

### Example 8: Face card

12 face cards. **P(face card) = 12/52 = 3/13.**
Jaanch: 12 ÷ 4 = 3, 52 ÷ 4 = 13 ✅. Aur 3/13 ≈ 0.23, yaani lagbhag har 4 mein se 1 patta face card hota hai, jo theek lagta hai.

### Example 9: Ace of spades

Ace of spades gaddi mein **sirf ek** hai. **P = 1/52.**
Jaanch: ye ek hi patta hai, kisi doosre suit ka ace nahi ginna ✅

### Example 10: Heart nahi

Hearts 13 hain, to heart nahi wale 52 − 13 = 39.
**P(not heart) = 39/52 = 3/4.**
Jaanch (complement): P(heart) = 13/52 = 1/4, to P(not heart) = 1 − 1/4 = **3/4** ✅

---

## Aam galtiyan (bachke rehna)

**Galti 1: HT aur TH ko ek hi ginna**
Do sikkon ke outcomes HH, HT, TT likh diye (3 outcomes), to P(1 head) = 1/3 aaya. Sahi: HH, HT, TH, TT mein 4 outcomes, aur P(1 head) = 2/4 = **1/2**.

**Galti 2: Do paason ke liye 11 outcomes lena (sums 2 se 12)**
Dev ne yahi kiya tha: P(7) = 1/11. Par sums equally likely nahi hain. Sahi: 36 equally likely outcomes, aur P(7) = 6/36 = **1/6**. 1/11 ≈ 0.091 hai, jabki 1/6 ≈ 0.167.

**Galti 3: 36 outcomes poore na likhna**
(2,5) likha par (5,2) bhool gaye, to sum 7 ke 3 hi raaste mile (1,6), (2,5), (3,4), aur 3/36 aaya. Sahi: **6 raaste**, 6/36 = 1/6. Hamesha table banao aur ginti 36 se match karo.

**Galti 4: Face card ko 3 patte ginna**
"J, Q, K" dekhke 3 face cards maan liye, to 3/52 aaya. Sahi: har suit mein J, Q, K, to 3 × 4 = **12** patte, aur P = 12/52 = **3/13**.

**Galti 5: Simplify na karna**
P(sum 7) = 6/36 par chhod diya, ya P(red) = 26/52 par ruk gaye. Sahi: common factor se bhaag do, 6/36 = **1/6**, 26/52 = **1/2**. Unsimplified bhi galat nahi, par adhoora jawaab hai.

---

## Quick Recap

- **Do sikke:** sample space {HH, HT, TH, TT}, 4 outcomes. HT aur TH **alag** hain.
- 0, 1, 2 heads equally likely **nahi** hain: 1/4, 1/2, 1/4.
- **Teen sikke:** 8 outcomes. P(exactly 2 heads) = 3/8, P(kam se kam ek head) = 7/8.
- **Do paase:** 6 × 6 = **36** outcomes, sab equally likely. Sums 2 se 12 equally likely nahi hain.
- Sums ki ginti: 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1. **Sum 7 sabse likely** (1/6), sum 2 aur 12 sabse kam (1/36).
- P(doubles) = 1/6, P(sum ≥ 10) = 1/6, P(product 12) = 1/9.
- **Taash (extra):** 52 patte, 4 suits, har suit mein 13, 26 laal aur 26 kaale, 12 face cards.
- Hamesha pehle sample space likho, phir favourable outcomes gino, aur ant mein fraction simplify karo.

---

## Practice Questions

1. Two coins are tossed. Find the probability of getting (a) a tail on the second coin, (b) exactly one head, (c) no head.

2. Two dice are thrown. Find the probability that the sum is 8.

3. Two dice are thrown. Find the probability that the sum is less than 5.

4. A bag has 3 red, 5 blue and 2 green balls. One ball is drawn without looking. Find the probability that it is (a) green, (b) not blue.

5. A spinner has 12 equal sections numbered 1 to 12. Find the probability that it stops on (a) a prime number, (b) a multiple of 3.

6. Three coins are tossed together. Find the probability of getting (a) exactly one head, (b) all three showing the same face.

7. One card is drawn at random from a well-shuffled deck of 52 cards. Find the probability that it is (a) a black king, (b) not a face card, (c) a card with the number 7.

8. Two dice are thrown. Find the probability that the sum is (a) a prime number, (b) an even number.

9. Say whether each statement is true or false, giving a reason.
   (a) When two coins are tossed, P(one head and one tail) = 1/3.
   (b) When two dice are thrown, sum 6 and sum 8 are equally likely.
   (c) When two dice are thrown, sum 12 is more likely than sum 7.

10. Two dice are thrown. Find the probability that the two numbers are different, and explain how the complement helps.

### Answers

1. Sample space: HH, HT, TH, TT (4 outcomes).
   (a) Doosre sikke par tail: HT, TT = 2, to 2/4 = **1/2**. Jaanch: doosra sikka akela bhi 1/2 chance se tail deta ✅
   (b) Exactly one head: HT, TH = 2, to 2/4 = **1/2**.
   (c) No head: TT = 1, to **1/4**.

2. Sum 8: (2,6), (3,5), (4,4), (5,3), (6,2) = 5 outcomes. P = **5/36**.
   Jaanch: sums wali table mein 8 ke aage 5 hai ✅

3. Sum 2, 3 ya 4: 1 + 2 + 3 = 6 outcomes: (1,1), (1,2), (2,1), (1,3), (2,2), (3,1). P = 6/36 = **1/6**.

4. Total 3 + 5 + 2 = 10 balls.
   (a) P(green) = 2/10 = **1/5**.
   (b) Not blue = 3 + 2 = 5, to 5/10 = **1/2**. Jaanch: 1 − P(blue) = 1 − 5/10 = 1/2 ✅

5. Total 12 outcomes.
   (a) Primes: 2, 3, 5, 7, 11 = 5 (1 prime nahi hai). P = **5/12**.
   (b) Multiples of 3: 3, 6, 9, 12 = 4. P = 4/12 = **1/3**.

6. Total 8 outcomes.
   (a) Exactly one head: HTT, THT, TTH = 3, to **3/8**.
   (b) All same: HHH, TTT = 2, to 2/8 = **1/4**.

7. (a) Black kings: king of spades aur king of clubs = 2. P = 2/52 = **1/26**.
   (b) Face cards 12, to not face card = 52 − 12 = 40. P = 40/52 = **10/13**. Jaanch: 1 − 3/13 = 10/13 ✅
   (c) Har suit mein ek 7, to 4 patte. P = 4/52 = **1/13**.

8. (a) Prime sums: 2 (1 tareeka), 3 (2), 5 (4), 7 (6), 11 (2) = 15 outcomes. P = 15/36 = **5/12**.
   (b) Even sums: 2, 4, 6, 8, 10, 12 = 1 + 3 + 5 + 5 + 3 + 1 = 18 outcomes. P = 18/36 = **1/2**.
   Jaanch: odd sums 3, 5, 7, 9, 11 = 2 + 4 + 6 + 4 + 2 = 18, aur 18 + 18 = 36 ✅

9. (a) **False** ❌. One head and one tail ke do outcomes hain, HT aur TH, to P = 2/4 = 1/2, na ki 1/3.
   (b) **True** ✅. Dono ke 5-5 outcomes hain, to dono ki probability 5/36 hai.
   (c) **False** ❌. Sum 12 ka sirf 1 outcome hai (1/36), jabki sum 7 ke 6 outcomes hain (6/36). Sum 7 zyada likely hai.

10. Same numbers (doubles) = 6 outcomes, P = 6/36 = 1/6. Different = 1 − 1/6 = **5/6**.
    Complement se ginne mein aasani: different wale 30 outcomes ginne ke bajaye sirf 6 doubles ginne pade.
    Jaanch: 36 − 6 = 30, aur 30/36 = 5/6 ✅

---

Ab aap sikke, paase aur taash, teeno ke sawaal sample space se hal kar sakte ho. Dev ko bhi ab pata hai ki 7 sirf feeling nahi, 1/6 ki pakki probability hai. Aap ye kar sakte ho!

---

# Chapter Wrap-up: Probability

| Topic | Kya seekha | Sabse kaam ki baat |
|---|---|---|
| 1. Experiment, outcome aur event | Probability ki bhasha: experiment, outcome, event | Event outcomes ka ek group hota hai |
| 2. Empirical probability | Experiment baar baar karke result ginna aur ratio nikalna | P(E) = (E kitni baar hua) ÷ (kul trials), yaani relative frequency; trials badhne par ratio tikne lagta hai |
| 3. Theoretical probability | Sample space aur equally likely outcomes se bina experiment ke probability | P(E) = favourable ÷ total, jab outcomes equally likely hon |
| 4. 0 se 1 tak, complement aur "at least one" | Probability ki seema, event ka na hona, "kam se kam ek" | P(not E) = 1 − P(E); "at least one" ke liye complement kaam aata hai |
| 5. Do sikke, do paase aur taash (extra) | Bade sample spaces: 4, 8, 36 outcomes, aur 52 patton ki gaddi | Hamesha poori list banao: HT aur TH alag, (2,5) aur (5,2) alag |

### All formulas and ideas

| Kya | Formula ya baat |
|---|---|
| Empirical probability | P(E) = (E ke hone ki ginti) ÷ (kul trials) |
| Theoretical probability | P(E) = (favourable outcomes) ÷ (kul equally likely outcomes) |
| Probability ki range | 0 ≤ P(E) ≤ 1; impossible = 0, certain = 1 |
| Complement | P(not E) = 1 − P(E) |
| Do sikke | 4 outcomes: HH, HT, TH, TT |
| Teen sikke | 8 outcomes |
| Do paase | 36 outcomes; sum 7 sabse likely (6/36), sums 2 aur 12 sabse kam (1/36) |
| Taash ki gaddi | 52 patte; 4 suits × 13; 26 laal, 26 kaale; 12 face cards; 4 kings, 4 aces |

---

Sikka ho, paasa ho ya taash, ab har random cheez ka hisaab aapke haath mein hai: pehle saare outcomes likho, phir favourable gino, phir simplify karo.
