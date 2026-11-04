# Chapter: Probability (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [probability-part3.md](probability-part3.md) se aage chalti hai.** Chapter ki shuruaat [probability.md](probability.md) mein hai.
> **Topics covered in this file:**
> 4. Probability ki Seema aur Complementary Events

---

# Topic 4: Probability ki Seema aur Complementary Events

Topic 3 mein humne probability nikalne ka seedha formula seekha tha: **P(E) = favourable outcomes ÷ total outcomes**. Holi ke packets ke thaile aur die ke sawaalon mein har baar hum ek fraction nikaalte the. Ab ek natural sawaal uthta hai: **ye fraction kitna chhota ya kitna bada ho sakta hai?** Kya probability 5 ho sakti hai? Kya minus mein ho sakti hai? Aur agar kisi cheez ke hone ki probability pata ho, to **na hone** ki probability kaise nikalein?

Is topic mein hum probability ki "seema" (limits) dekhenge, use percentage mein padhna seekhenge, aur ek bahut kaam ki trick sikhenge: **complement**. Isse kai mushkil dikhne wale sawaal ek line mein ho jate hain.

---

## Bansi kaka aur radio ki khabar

Subah ke saat baje hain. Bansi kaka khet ke kinare charpai par baithe hain, haath mein chai, aur saamne radio chal raha hai. Khet mein gehun ki fasal poori pak chuki hai. Aaj kaatni hai ya kal?

Radio par mausam ki khabar aayi: **"Kal baarish ki sambhavna 70 pratishat hai."**

Bansi kaka ne chai ka ghoont liya aur bade pareshan hokar bole, "Ye 70 pratishat ka matlab kya hua? Baarish hogi ya nahi hogi? Ye radio wale saaf saaf kyun nahi bolte!"

Unki potti (granddaughter), jo Class 9 mein padhti hai, paas hi baithi homework kar rahi thi. Wo hans kar boli, "Dada ji, radio wale saaf hi bol rahe hain, bas unki bhasha probability ki hai. 70 pratishat matlab 70 per 100, yaani **0.7**. Kal baarish hone ki probability 0.7 hai."

"To baarish hogi?" kaka ne poochha.

"Pakka nahi, par hone ke chances zyada hain. Aur ek aur baat: agar baarish hone ki probability 0.7 hai, to baarish **nahi** hone ki probability hogi 1 − 0.7 = **0.3**. Yaani 30 pratishat chance ki kal mausam saaf rahega."

Kaka ne socha, "70 aur 30 mil kar 100... matlab dono milke poori kahani ban gayi."

"Bilkul dada ji! Isi ko to complement kehte hain," potti boli. "Aur isi liye aaj fasal kaat lena theek rahega."

Aaj hum wahi seekhenge jo Bansi kaka ki potti ko aata tha: probability kitni ho sakti hai, pratishat mein kaise padhein, aur "nahi hone" ki probability kaise nikaalein.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Namumkin (impossible) event** | Jo kabhi ho hi nahi sakta. Probability 0 | Ek die par 7 aana |
| **Pakka (certain / sure) event** | Jo hamesha hota hai. Probability 1 | Ek die par 1 se 6 ke beech koi number aana |
| **Probability ki seema** | Probability hamesha 0 se 1 ke beech (0 aur 1 bhi shamil) rehti hai | 0 ≤ P(E) ≤ 1 |
| **Pratishat (percentage) mein probability** | Probability ko 100 se guna karke % likhna | 0.7 = 70% |
| **Complementary event (not E)** | "E nahi hua" wala event. Ise Ē ya "not E" likhte hain | E = baarish, to not E = baarish nahi |
| **Poore outcomes ka jod** | Ek experiment ke saare alag-alag outcomes ki probabilities ka jod 1 hota hai | Die: 6 × 1/6 = 1 |

---

## Part A: Probability 0 aur 1 ke beech hi kyun rehti hai?

Topic 3 ka formula yaad karo:

> P(E) = favourable outcomes ÷ total outcomes

Do simple baatein sochte hain.

**Baat 1: Favourable outcomes total se zyada nahi ho sakte.**
Holi ke thaile mein 10 packets hain. Lal packet nikalne ke favourable outcomes zyada se zyada 10 ho sakte hain (jab saare packets lal hon). 12 favourable outcomes nahi ho sakte, kyunki thaile mein hai hi 10 packets. To fraction kabhi 1 se bada nahi hoga: favourable ≤ total, to favourable ÷ total ≤ 1.

**Baat 2: Ginti kabhi negative nahi hoti.**
Thaile mein −2 packets nahi ho sakte. Favourable outcomes 0, 1, 2, ... hi ho sakte hain. To fraction kabhi 0 se chhota nahi hoga.

Dono baatein milakar:

> **0 ≤ P(E) ≤ 1**

Yaani probability kabhi negative nahi hoti, aur kabhi 1 se bahut bada number (jaise 2 ya 5) nahi hoti.

### Probability ki line

Isse ek seedhi line par dekhna aasan hai:

```
0               1/4              1/2              3/4               1
|----------------|----------------|----------------|----------------|
namumkin                          50-50                             pakka
(kabhi nahi hoga)           (barabar chance)               (hamesha hoga)
```

- **Bayein chhor (0):** namumkin. Jo ho hi nahi sakta.
- **Beech (1/2):** 50-50. Hone aur na hone ke chance barabar. Jaise sikka uchhalne par head.
- **Daayein chhor (1):** pakka. Jo hona hi hona hai.
- Jitna event "pakka" ke paas, utna uske hone ke chances zyada. Jitna "namumkin" ke paas, utne kam.

Bansi kaka ki baarish: 0.7 line par 1/2 se thoda daayein, yaani "pakka" ki taraf jhuki hui. Isliye chances zyada hain.

---

## Part B: Namumkin aur Pakka events

### Namumkin event: P = 0

Jab favourable outcomes ki ginti **0** ho, to P(E) = 0 ÷ total = **0**.

**Example 1:** Ek die ek baar ludhkate hain. P(7 aana) kitni hai?
- Die par sirf 1, 2, 3, 4, 5, 6 hote hain. 7 koi outcome hai hi nahi, to favourable = 0, total = 6.
- P(7) = 0 ÷ 6 = **0**

**Example 2:** Ek thaile mein sirf lal aur neeli gendein hain. Bina dekhe ek gend nikaalte hain. P(safed gend) kitni hai?
- Thaile mein safed gend hai hi nahi, to favourable = 0.
- P(safed) = **0**

### Pakka event: P = 1

Jab favourable outcomes ki ginti **total ke barabar** ho (har outcome favourable ho), to P(E) = total ÷ total = **1**.

**Example 3:** Ek die ludhkate hain. P(1 se 6 ke beech koi number aana) kitni hai?
- Die par jo bhi aaye, 1 se 6 ke beech hi hoga. Favourable = 6, total = 6.
- P = 6 ÷ 6 = **1**

**Example 4:** Holi ke thaile mein 10 packets hain: 5 lal, 3 hare, 2 peele. P(packet in teen rangon mein se koi ek) = 10 ÷ 10 = **1**.

**Yaad rakhne ki baat:** Agar kisi event ki probability 0 aayi, to wo kabhi nahi hoga. Agar 1 aayi, to wo hamesha hoga. Beech ke har number ka matlab hai "ho bhi sakta hai, nahi bhi".

---

## Part C: Probability ko percentage mein padhna

Probability ko fraction ya decimal ke saath-saath **percentage** (pratishat) mein bhi likha jata hai. Percentage matlab "per 100", to bas 100 se guna karo.

> **Decimal → percentage:** 100 se guna karo. 0.7 × 100 = 70%
> **Percentage → decimal:** 100 se bhaag do. 70 ÷ 100 = 0.7

| Probability (fraction ya decimal) | Percentage |
|---|---|
| 0 | 0% |
| 1/4 = 0.25 | 25% |
| 1/2 = 0.5 | 50% |
| 0.7 | 70% |
| 1 | 100% |

Dhyan do: 0 se 1 ka matlab hi 0% se 100% hai. Isliye **probability 100% se zyada ya 0% se kam nahi ho sakti**.

### Mausam ki khabar ka matlab

"Kal baarish ki sambhavna 70% hai" ka matlab kuch is tarah samajhna chahiye: agar **bilkul aise hi mausam wale 100 din** hon, to unme se **lagbhag 70 din** baarish hoti hai. Ye pakka nahi karta ki kal baarish hogi. Ye bas batata hai ki baarish ke chances zyada hain aur sawdhani rakhni chahiye.

Aur 70% ka ye matlab nahi ki "70% jagah par baarish hogi" ya "din ke 70% hisse mein baarish hogi". Ye **sambhavna** hai, jaise sikke ka head aane ka 50% chance.

Matlab Bansi kaka ke liye: 70% ka matlab "chances zyada hain", aur dusri taraf 30% chance hai ki mausam saaf rahe. Is 30% ka hisaab hum Part E mein karenge.

---

## Part D: Saare outcomes ki probabilities ka jod = 1

Ek experiment ke jitne bhi alag-alag outcomes hote hain, unhe milakar poori kahani banti hai. Is liye unki probabilities ka **jod hamesha 1** hota hai.

### Die ke saath jaanch

Ek die mein 6 outcomes hain aur sab barabar chance wale hain, to har ek ki probability 1/6 hai.

P(1) + P(2) + P(3) + P(4) + P(5) + P(6) = 1/6 + 1/6 + 1/6 + 1/6 + 1/6 + 1/6 = 6 × 1/6 = **1**

**Jaanch:** 6 × 1/6 = 6/6 = 1 ✅

### Holi ka thaila yaad karo

Topic 3 mein Ritvik ke thaile ke liye P(lal) + P(hara) + P(peela) = 5/10 + 3/10 + 2/10 = 1 aaya tha. Wo ittefaq nahi tha. Ye isliye hota hai ki favourable outcomes ki ginti sabhi rangon ke liye jodne par poore total packets ke barabar ho jaati hai.

> **Is niyam ka istemal:** Agar kisi experiment ke saare outcomes ki probabilities di hon, **ek ko chhodkar**, to wo ek bhi nikaal sakte hain: bacha hua = 1 − (baaki sab ka jod).

---

## Part E: Complementary events: "nahi hua" ki probability

Kisi event E ke saath ek jodi hota hai: **E nahi hua**. Ise **not E** ya **Ē** likhte hain ("E bar").

- E = "kal baarish hogi", to Ē = "kal baarish nahi hogi"
- E = "die par 6 aaya", to Ē = "die par 6 nahi aaya" (yaani 1, 2, 3, 4 ya 5 aaya)

E aur Ē milkar **saari** sambhavnayein cover karte hain: ya to E hoga, ya nahi hoga. Teesra koi raasta nahi. Isliye Part D ke niyam se:

> **P(E) + P(not E) = 1**

Isse seedha ye trick mili:

> **P(not E) = 1 − P(E)**

Isi tarah, P(E) = 1 − P(not E).

### Example 5: Bansi kaka ki baarish

Baarish ki probability P(baarish) = 70% = 0.7.

P(baarish nahi) = 1 − 0.7 = **0.3** (yaani 30%)

**Jaanch:** 0.7 + 0.3 = 1.0 ✅ (aur 70% + 30% = 100% ✅)

### Example 6: Die par 6 nahi aana

P(6) = 1/6.

P(6 nahi) = 1 − 1/6 = 6/6 − 1/6 = **5/6**

**Jaanch (seedhi ginti se):** 6 nahi aane ke outcomes 1, 2, 3, 4, 5 hain, yaani 5 favourable out of 6. P = 5/6 ✅. Dono tareeke se ek hi jawab mila.

### Example 7: Word se vowel nahi nikalna

"ELEPHANT" word ke har akshar ko alag-alag parchi par likh kar ek dibbe mein dalte hain. Bina dekhe ek parchi nikaalte hain. P(vowel nahi) kitni hai?

- Word ke akshar: E, L, E, P, H, A, N, T. Total = **8** parchiyan.
- Vowels (A, E, I, O, U): E, E, A = **3** parchiyan.
- P(vowel) = 3/8
- P(vowel nahi) = 1 − 3/8 = 8/8 − 3/8 = **5/8**

**Jaanch:** Consonants L, P, H, N, T = 5 parchiyan. 5/8 ✅

### Example 8: Jab P(E) bahut chhoti ho

Ek chips company kuch packets ke andar inaam ka coupon daalti hai. Ek packet mein coupon milne ki probability P(coupon) = 0.04 hai. P(coupon na milna) kitni hai?

- P(coupon na milna) = 1 − 0.04 = **0.96** (yaani 96%)

**Jaanch:** 0.04 + 0.96 = 1 ✅. Matlab har 100 packets mein lagbhag 4 mein coupon aur 96 mein nahi. 4 + 96 = 100 ✅

---

## Part F: "Kam se kam ek" wale sawaal: complement ki asli taakat

"Kam se kam ek" (at least one) ka matlab hai "1 ya usse zyada". Aise sawaalon mein seedha ginna lamba padta hai, par complement se kaam chhota ho jata hai. Trick:

> **P(kam se kam ek) = 1 − P(ek bhi nahi)**

### Example 9: 2 baar sikka uchhalna, kam se kam ek head

Ek sikka 2 baar uchhalte hain. P(kam se kam ek head) kya hai?

Do uchhaalon ke outcome ko likhte hain (pehla, doosra): HH, HT, TH, TT. Ye chaar outcomes hain. (Isse poori tarah Topic 5 mein seekhenge, abhi bas gin lo.)

- "Ek bhi head nahi" ka matlab sirf **TT**. Ye 1 outcome hai, out of 4.
- P(ek bhi head nahi) = 1/4
- P(kam se kam ek head) = 1 − 1/4 = **3/4**

**Jaanch (seedhi ginti):** "Kam se kam ek head" wale outcomes: HH, HT, TH. Ye 3 hain, out of 4. P = 3/4 ✅.

### Example 10: Die par kam se kam 2 aana

Ek die ludhkate hain. P(kam se kam 2) kya hai?

- "Kam se kam 2" matlab 2, 3, 4, 5, 6 mein se koi bhi. Ye 5 outcomes hain.
- Complement: "kam se kam 2 nahi" matlab sirf **1**. P(1) = 1/6.
- P(kam se kam 2) = 1 − 1/6 = **5/6**

**Jaanch:** 5 favourable out of 6 = 5/6 ✅

Yahan ginti khud bhi aasan thi, par jahan "kam se kam" ke bahut saare outcomes hon, wahan "ek bhi nahi" wala hissa gina jata hai aur 1 se ghata diya jata hai. Aage ke topic mein ye aur kaam aayega.

---

## Part G: Thaile wale sawaal: probability di hai, ginti nikaalo

### Example 11: Probability di hai, "nahi" wali probability nikaalo

Ek thaile mein lal aur neeli gendein hain. P(lal gend) = 2/5. P(lal nahi) kya hai, aur agar thaile mein 30 gendein hain to lal kitni hain?

- P(lal nahi) = 1 − 2/5 = 5/5 − 2/5 = **3/5**
- Lal gendein = P(lal) × total = 2/5 × 30 = **12**
- Lal nahi (yaani neeli) gendein = 30 − 12 = **18**

**Jaanch:** 18/30 = 3/5 ✅. Aur 12 + 18 = 30 ✅

### Example 12: Percent ya decimal mein probability di hai

Ek thaile mein 20 gendein hain. P(neeli gend) = 0.35. Thaile mein kitni neeli gendein hain? Aur kitni neeli nahi hain?

- Neeli gendein = P(neeli) × total = 0.35 × 20 = **7**
- Neeli nahi = 20 − 7 = **13**
- P(neeli nahi) = 1 − 0.35 = **0.65**

**Jaanch:** 13/20 = 0.65 ✅. Aur P(neeli) = 7/20 = 0.35 ✅.

### Example 13: Ek probability gayab hai

Ek cricket match ke teen hi natije ho sakte hain: jeet, drawn, ya haar. Ek coach ke hisaab se P(jeet) = 0.45 aur P(drawn) = 0.15. P(haar) kya hai?

Teen outcomes ki probabilities ka jod 1 hona chahiye.

- P(jeet) + P(drawn) + P(haar) = 1
- 0.45 + 0.15 + P(haar) = 1
- 0.60 + P(haar) = 1
- P(haar) = 1 − 0.60 = **0.40**

**Jaanch:** 0.45 + 0.15 + 0.40 = 1.00 ✅

### Example 14: Kaun si list sahi ho sakti hai?

Ek spinner ke chaar rang hain. Teen log apni-apni probabilities batate hain. Kaun si list sach ho sakti hai?

| Rang | List A | List B | List C |
|---|---|---|---|
| Lal | 0.3 | 0.5 | 0.4 |
| Hara | 0.3 | 0.4 | 0.1 |
| Neela | 0.2 | 0.3 | −0.1 |
| Peela | 0.2 | −0.2 | 0.6 |

- **List A:** har probability 0 aur 1 ke beech hai. Jod = 0.3 + 0.3 + 0.2 + 0.2 = 1.0. **Sahi ho sakti hai.**
- **List B:** peele ki probability −0.2 negative hai. **Galat** (jod 0.5 + 0.4 + 0.3 − 0.2 = 1.0, par negative number nahi chalta)
- **List C:** neele ki probability −0.1 negative hai. **Galat** (jod 0.4 + 0.1 − 0.1 + 0.6 = 1.0, par phir bhi negative hai)

Dono shartein zaroori hain: har probability 0 aur 1 ke beech ho, **aur** saaron ka jod 1 ho.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Probability 1 se bada ya negative bata dena**

"Thaile mein 5 lal packets hain, 4 total packets hain, to P = 5/4." Ye nahi ho sakta. Favourable kabhi total se zyada nahi ho sakte. Agar jawab 1 se bada ya 0 se chhota aaye, to apna hisaab dobara dekho. Probability hamesha **0 se 1 ke beech** hoti hai.

**Galti 2: "P(not E) = P(E)" likhna**

Sirf 50-50 wale case mein (jaise sikke ka head) P(E) = P(not E) = 1/2. Aam taur par nahi. Bansi kaka ki baarish: P(baarish) = 0.7, par P(baarish nahi) = 0.3, dono barabar nahi. Hamesha **P(not E) = 1 − P(E)** likho.

**Galti 3: Percent aur decimal ko mila dena**

70% ko "70" ya "7" nahi likhte. 70% = 70 ÷ 100 = **0.7**. Agar P(not E) nikaalna ho to 1 − 70 = −69 galat hai. Pehle 70% ko 0.7 banao, phir 1 − 0.7 = 0.3. Ya phir poore hisaab ko percent mein rakho: 100% − 70% = 30%. Ya to dono decimal mein, ya dono percent mein.

**Galti 4: Total 1 hona bhool jana**

Spinner par 4 rang hain, aur kisi ne probabilities likhin: 0.3, 0.3, 0.3, 0.3. Jod = 1.2 hai, 1 nahi. Ye possible nahi hai. Saare outcomes ki probabilities ka jod **hamesha 1** hona chahiye. Jod 1 se kam ya zyada aaye to kuch galat hai.

---

## Quick Recap

- **0 ≤ P(E) ≤ 1.** Kyunki favourable ≤ total aur ginti negative nahi hoti.
- **P = 0:** namumkin event (die par 7). **P = 1:** pakka event (die par 1 se 6 ke beech koi number).
- Probability line: 0 (namumkin) se 1/2 (50-50) se 1 (pakka).
- Percentage mein: 0.7 = 70%. Weather forecast ka matlab hai "aise hi 100 dinon mein lagbhag 70 din baarish".
- Ek experiment ke **saare outcomes ki probabilities ka jod = 1** (die: 6 × 1/6 = 1).
- **Complement:** P(E) + P(not E) = 1, to **P(not E) = 1 − P(E)**.
- **Kam se kam ek:** P(kam se kam ek) = 1 − P(ek bhi nahi).
- Ek probability gayab ho to: 1 − (baaki sab ka jod).
- Galtiyan: probability 1 se bada ya negative, P(not E) = P(E) likhna, percent aur decimal ka mel, aur total 1 bhool jana.

---

## Practice Questions

1. Can the probability of an event be 1.2? Can it be −0.3? Explain in one line each.

2. A bag contains only 8 yellow balls. A ball is drawn at random. Find (a) P(yellow ball), (b) P(green ball). What do you call these two events?

3. The probability that it will rain tomorrow is 35%. Write this as a decimal and find the probability that it will not rain.

4. A die is rolled once. Find (a) P(a number less than 7), (b) P(a number greater than 6), (c) P(not 4).

5. The letters of the word "EDUCATION" are written on separate cards and one card is drawn at random. Find the probability that it is not a vowel.

6. A coin is tossed twice. Using the outcomes HH, HT, TH, TT, find P(at least one tail) by first finding P(no tail).

7. A bag has 25 balls. P(green ball) = 0.4. (a) How many green balls are there? (b) Find P(not green). (c) How many balls are not green?

8. The probabilities of a team finishing a tournament in 1st, 2nd, 3rd or lower places are 0.2, 0.3, 0.25 and x. Find x.

9. A student says, "The chance of an event is 3/2 and the chance of it not happening is −1/2, and 3/2 + (−1/2) = 1, so it is fine." Is the student right? Explain.

10. State True or False:
    (a) P(E) + P(not E) = 1
    (b) P(E) can be 110%.
    (c) If P(E) = 0.5, then P(not E) = 0.5.
    (d) The probability of a sure event is 0.

### Answers

1. Dono nahi ho sakti. 1.2 probability 1 se bada hai, aur favourable outcomes total se zyada nahi ho sakte. −0.3 negative hai, aur ginti negative nahi hoti. Probability hamesha 0 se 1 ke beech hoti hai.

2. Thaile mein sirf peeli gendein hain, to har gend peeli hogi.
   (a) P(peeli) = 8/8 = **1**
   (b) P(hari) = 0/8 = **0**
   Pehla event **pakka (certain)** hai, doosra **namumkin (impossible)** hai.

3. 35% = 35 ÷ 100 = **0.35**. P(baarish nahi) = 1 − 0.35 = **0.65** (yaani 65%).
   Jaanch: 0.35 + 0.65 = 1 ✅

4. (a) Die par har number 7 se chhota hai, to favourable = 6, P = 6/6 = **1**.
   (b) 6 se bada koi number nahi, favourable = 0, P = **0**.
   (c) P(4) = 1/6, to P(4 nahi) = 1 − 1/6 = **5/6**.
   Jaanch (c): 1, 2, 3, 5, 6, yaani 5 outcomes out of 6 ✅

5. EDUCATION mein akshar: E, D, U, C, A, T, I, O, N. Total = **9**.
   Vowels: E, U, A, I, O = **5**. P(vowel) = 5/9.
   P(vowel nahi) = 1 − 5/9 = **4/9**.
   Jaanch: consonants D, C, T, N = 4, aur 4/9 ✅

6. "Ek bhi tail nahi" ka matlab sirf HH, yaani 1 outcome out of 4. P = 1/4.
   P(kam se kam ek tail) = 1 − 1/4 = **3/4**.
   Jaanch: HT, TH, TT teen outcomes, 3/4 ✅

7. (a) Green balls = 0.4 × 25 = **10**.
   (b) P(not green) = 1 − 0.4 = **0.6**.
   (c) Green nahi = 25 − 10 = **15**. Jaanch: 15/25 = 0.6 ✅

8. Jod 1 hona chahiye: 0.2 + 0.3 + 0.25 + x = 1.
   0.75 + x = 1, to x = 1 − 0.75 = **0.25**.
   Jaanch: 0.2 + 0.3 + 0.25 + 0.25 = 1.00 ✅

9. Student **galat** hai. Probability 3/2 (yaani 1.5) 1 se bada hai, aur −1/2 negative hai. Dono ka jod 1 hone se kuch fark nahi padta, kyunki **har ek probability 0 aur 1 ke beech honi chahiye**, aur sirf jod 1 hona kaafi nahi hai.

10. (a) **True** ✅. Complement ka ye hi dil hai.
    (b) **False** ❌. 100% se zyada probability nahi hoti (110% = 1.1 > 1).
    (c) **True** ✅. 1 − 0.5 = 0.5.
    (d) **False** ❌. Pakka event ki probability 1 hoti hai. 0 to namumkin event ki hoti hai.

---

Bansi kaka ne us din fasal kaat li, aur ye bhi samajh gaye ki "70 pratishat" koi paheli nahi, ek seedha hisaab hai: 0.7 hone ki, aur 0.3 na hone ki. Jab bhi "nahi hone" ki probability chahiye, to bas 1 mein se ghata do.

**Aage kya?** Ab tak hamare sawaal ek sikka, ek die, ya ek thaile tak seemit the. Par jab **do sikke ek saath** ya **do dice ek saath** ludhkaye jayein to? Topic 5 mein hum dekhenge ki aise experiments ke saare outcomes ko ek table mein kaise likhte hain, aur wahan se probability kaise nikalte hain. Taash ke patton ki baat bhi wahin hogi.
