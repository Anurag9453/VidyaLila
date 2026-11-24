# Chapter: Real Numbers (Part 3)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [real-numbers-part2.md](real-numbers-part2.md) se aage chalti hai** (wahan Topic 2 mein Fundamental Theorem of Arithmetic aaya: har composite number ka apna ek hi prime "fingerprint"). Chapter ki shuruaat: [real-numbers.md](real-numbers.md).
> **Topics covered in this file:**
> 3. HCF Aur LCM Prime Factorisation Se: Do Ghantiyan, Ek Hi Raasta

---

# Topic 3: HCF Aur LCM Prime Factorisation Se: Do Ghantiyan, Ek Hi Raasta

Topic 1 mein humne do numbers ka HCF nikalne ka ek tareeka seekha: **Euclid ka Division Algorithm**, jisme bhaag dete jao aur remainder se bhaag dete jao. Topic 2 mein humne dekha ki har composite number ka ek **apna prime fingerprint** hota hai, aur wo sirf ek hi tarah se likha ja sakta hai.

Ab in dono ko ek saath kaam par lagate hain. Fingerprint se HCF **aur** LCM, dono ek hi table se nikal aate hain. Aur ek mazedaar rishta bhi milega: HCF aur LCM ko guna karne par kya aata hai.

---

## Ranjit ki do ghantiyan

Diwali ka bazaar laga hai. Ranjit apne Papa ke saath diye aur jhaalar ke stall par baitha hai. Stall ke board par do chhoti roshni-ladiyan lagi hain, aur har ladi ke saath ek nanhi ghanti bandhi hai. **Laal ladi** har **26 second** mein ek baar chamakti hai aur uski ghanti "ting" bolti hai. **Sunehri ladi** har **39 second** mein chamakti hai, aur uski ghanti bhi "ting" bolti hai.

Papa ne ek baar dono ko ek saath chalu kiya tha, to shuru mein dono ek saath chamkin. Ranjit ko ek khel soojha: "Papa, ab dono ghantiyan **dobara ek saath** kab bajengi?"

Usne ghadi dekhkar apni copy mein dono ke ting ke samay likhe:

- Laal ladi: 26, 52, 78, 104, ...
- Sunehri ladi: 39, 78, 117, ...

"Dekho Papa! **78 second** par dono ek saath! Ek saath chamak bhi, ek saath ting bhi."

```
26 s wali:         *       *       *
39 s wali:             *           *
Samay:     +---+---+---+---+---+---+-
           0   13  26  39  52  65  78 (sec)
```

> **Figure 3.1** – Do ladiyon ke ting. Har + ke beech 13 second ka gap hai, * us samay ka ting hai. 78 second par dono ke * ek hi jagah hain.

Papa ne poochha, "Ye to chhote numbers the, list ban gayi. Agar ek ladi har 1456 second aur doosri har 2002 second mein chamakti, to kitni lambi list banti?"

Ranjit ne copy band kar di. Aur isi sawaal ka jawab hai is topic mein: **bina list banaye, sirf fingerprint dekhkar** pata lagana ki dono kab milenge. Aur jab ye aa jayega, to HCF bhi usi table se saath mein mil jayega.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Common multiple** | Woh number jo do (ya zyada) numbers ki tables mein ek saath aaye | 78 aur 156 dono, 26 aur 39 ke common multiple hain |
| **LCM (Least Common Multiple)** | Sabse chhota common multiple | LCM(26, 39) = 78 |
| **Prime-power table** | Ek table jisme har prime ka ek column hota hai aur har number ki row mein us prime ki power likhi hoti hai | Figure 3.3 aur Part A ki table |
| **Choti power ka niyam** | HCF ke liye: har prime ki wo power lo jo dono numbers mein se **choti** ho | 2² aur 2³ mein se 2² |
| **Badi power ka niyam** | LCM ke liye: har prime ki wo power lo jo dono numbers mein se **badi** ho | 2² aur 2³ mein se 2³ |
| **Product relation** | Do numbers ke liye: HCF aur LCM ka guna, dono numbers ke guna ke barabar hota hai | HCF(26, 39) × LCM(26, 39) = 13 × 78 = 26 × 39 |

---

## Class 6 se yaad (aur Class 9 ki ek jhalak)

Class 6 se: do numbers ka **HCF** wo sabse bada number hai jo dono ko bilkul bhaag de, aur **LCM** wo sabse chhota number hai jo dono ka multiple ho. Class 9 mein fractions ko lowest form mein likhne ke liye numerator aur denominator ko HCF se bhaaga tha ([number-systems.md](../../../class9/maths/number-systems/number-systems.md) mein "Lowest form" ka hissa). Tab hum HCF bas nikalte the. Ab dekhte hain ki wo **kyun** aise nikalta hai.

---

## Part A: Prime-power table se HCF aur LCM

**Tareeka:**
1. Dono numbers ko primes mein todo (ladder se, jaise Topic 2 mein).
2. Jitne alag-alag primes aaye, utne column banao. Jis number mein koi prime nahi hai, wahan uski power **0** likho.
3. **HCF:** har prime ki **choti** power lo, aur sab ko guna kar do.
4. **LCM:** har prime ki **badi** power lo, aur sab ko guna kar do.

### Example 1: 780 aur 1092

Pehle dono ko primes mein todte hain:

```
780 ka ladder        1092 ka ladder
 2 | 780              2 | 1092
 2 | 390              2 |  546
 3 | 195              3 |  273
 5 |  65              7 |   91
13 |  13             13 |   13
       1                     1
```

> **Figure 3.2** – 780 aur 1092 ke prime ladder. Har baar sabse chhote prime se bhaag diya, jab tak 1 nahi mila.

780 = 2² × 3 × 5 × 13 aur 1092 = 2² × 3 × 7 × 13.

| Prime | 780 mein power | 1092 mein power | Choti power (HCF) | Badi power (LCM) |
|---|---|---|---|---|
| 2 | 2 | 2 | 2 | 2 |
| 3 | 1 | 1 | 1 | 1 |
| 5 | 1 | 0 | 0 | 1 |
| 7 | 0 | 1 | 0 | 1 |
| 13 | 1 | 1 | 1 | 1 |

```
Prime   780      1092     HCF      LCM
2       ##       ##       ##       ##
3       #        #        #        #
5       #        -        -        #
7       -        #        -        #
13      #        #        #        #
```

> **Figure 3.3** – Har # ek power hai, - ka matlab power 0. HCF wale column mein sirf wo # bache jo dono mein hain, LCM wale column mein dono mein se zyada.

- **HCF** = 2² × 3 × 13 = 4 × 3 × 13 = **156**
- **LCM** = 2² × 3 × 5 × 7 × 13 = 4 × 3 × 5 × 7 × 13 = **5460**

**Jaanch:** 780 ÷ 156 = 5 aur 1092 ÷ 156 = 7. 5 aur 7 ka koi common factor nahi (1 ke alawa), to 156 se bada common factor mil hi nahi sakta ✅. LCM ke liye: 780 × 7 = 5460 aur 1092 × 5 = 5460, dono ek hi number ✅.

---

## Part B: Ye niyam kyun chalte hain?

Ye "choti power, badi power" koi jaadu nahi hai. Isme Topic 2 ka fingerprint hi kaam kar raha hai.

**Pehle ek baat:** agar d, n ko bilkul bhaagta hai, to n = d × k kisi poore number k ke liye. Ab d ke primes aur k ke primes **milkar** n ka fingerprint banate hain, aur n ka fingerprint to ek hi hai. Matlab **d ki har prime power, n ke fingerprint mein maujood honi chahiye**. Isse ulta bhi sach hai: jo number n ke fingerprint ke andar "fit" ho jaye, wo n ko bhaagta hai.

**HCF kyun "choti power":** common factor wo hai jo 780 ke fingerprint mein **bhi** fit ho aur 1092 ke mein **bhi**. Prime 5 sirf 780 mein hai, to common factor mein 5 nahi aa sakta. Prime 2 dono mein hai, 2² tak. To common factor mein 2 ki power dono mein se jitni choti ho, utni tak ja sakti hai, usse zyada nahi. Sabse bada common factor wahi, jo har jagah **zyada se zyada** utna le jitna dono ne allow kiya, yaani choti power.

**LCM kyun "badi power":** common multiple ko 780 ka fingerprint **aur** 1092 ka fingerprint dono apne andar rakhne padte hain. Sabse chhota wo, jisme har prime ki utni hi power ho jitni dono mein se kisi ek ko chahiye, yaani badi power. Isse kam power rakhi, to koi ek number usme fit nahi hoga.

---

## Part C: HCF × LCM = do numbers ka guna

Example 1 mein dekho: 156 × 5460 = 851760, aur 780 × 1092 = 851760. Barabar! Ye sirf is jodi ki baat nahi, **do numbers** ke liye hamesha sach hai:

> HCF(a, b) × LCM(a, b) = a × b

**Kyun?** Kisi bhi prime p ko lo. Maan lo a mein uski power x hai aur b mein y. HCF choti power lega, LCM badi power. To HCF × LCM mein p ki power hogi: choti + badi. Par x aur y mein se ek choti hai aur doosri badi, to **choti + badi = x + y**. Aur a × b mein p ki power bhi x + y hai. Har prime par dono taraf ki power barabar hai, aur fingerprint ek hi hota hai, isliye **HCF × LCM = a × b** ✓.

(Example 1 mein check karo: prime 5 par powers 1 aur 0. Choti 0, badi 1, jod 1 = 1 + 0 ✓.)

Is rishte se do kaam aasaan ho jate hain:
- Ek number gayab ho to dhoondh lo.
- Agar HCF mil gaya (jaise Topic 1 ke Euclid se), to LCM = a × b ÷ HCF.

### Example 2: gayab number

Do numbers ka HCF 572 hai aur LCM 3432. Ek number 1144 hai. Doosra number kya hai?

**Hal:** 1144 × (doosra) = 572 × 3432, to

doosra = 572 × 3432 ÷ 1144

Pehle 572 ÷ 1144 = 1/2, to doosra = 3432 ÷ 2 = **1716**.

**Jaanch:** Primes: 1144 = 2³ × 11 × 13 aur 1716 = 2² × 3 × 11 × 13. Choti powers: 2² × 11 × 13 = 572 ✅ (HCF). Badi powers: 2³ × 3 × 11 × 13 = 3432 ✅ (LCM).

### Example 3: jab ek number doosre ko bhaag de

308 aur 1540 ka HCF aur LCM nikalo.

308 = 2² × 7 × 11 aur 1540 = 2² × 5 × 7 × 11.

| Prime | 308 | 1540 | Choti | Badi |
|---|---|---|---|---|
| 2 | 2 | 2 | 2 | 2 |
| 5 | 0 | 1 | 0 | 1 |
| 7 | 1 | 1 | 1 | 1 |
| 11 | 1 | 1 | 1 | 1 |

HCF = 2² × 7 × 11 = **308** aur LCM = 2² × 5 × 7 × 11 = **1540**.

Dhyan do: 1540 ÷ 308 = 5, yaani 308, 1540 ko bhaagta hai. Aur dekho, HCF wahi chhota number nikla aur LCM wahi bada number. **Jab ek number doosre ko bhaag deta hai, to HCF chhota number hota hai aur LCM bada number.** (Kyunki chhote ka poora fingerprint bade ke andar fit hota hai.)

**Jaanch:** 308 × 1540 = 474320 aur HCF × LCM = 308 × 1540 = 474320 ✅.

---

## Part D: Teen numbers

### Example 4: 616, 1056 aur 1848

Teen numbers mein bhi wahi niyam: har prime ki teeno mein se **sabse choti** power (HCF) aur **sabse badi** power (LCM).

616 = 2³ × 7 × 11, 1056 = 2⁵ × 3 × 11, 1848 = 2³ × 3 × 7 × 11.

| Prime | 616 | 1056 | 1848 | Sabse choti | Sabse badi |
|---|---|---|---|---|---|
| 2 | 3 | 5 | 3 | 3 | 5 |
| 3 | 0 | 1 | 1 | 0 | 1 |
| 7 | 1 | 0 | 1 | 0 | 1 |
| 11 | 1 | 1 | 1 | 1 | 1 |

- HCF = 2³ × 11 = 8 × 11 = **88**
- LCM = 2⁵ × 3 × 7 × 11 = 32 × 231 = **7392**

**Jaanch (HCF):** 616 ÷ 88 = 7, 1056 ÷ 88 = 12, 1848 ÷ 88 = 21. Ye 7, 12, 21 mein koi common factor nahi (7 ne 12 ko nahi bhaaga), to 88 se bada common factor nahi ✅.
**Jaanch (LCM):** 7392 ÷ 616 = 12, 7392 ÷ 1056 = 7, 7392 ÷ 1848 = 4. Ye 12, 7, 4 ka bhi koi common factor nahi, to 7392 se chhota common multiple nahi ✅.

### Example 5: teen numbers par ye rishta toot jata hai

Shayad tumne socha: "Agar do numbers ke liye HCF × LCM = a × b, to teen ke liye HCF × LCM = a × b × c hoga." Chalo test karte hain, 42, 66 aur 78 par.

42 = 2 × 3 × 7, 66 = 2 × 3 × 11, 78 = 2 × 3 × 13.

HCF = 2 × 3 = 6 aur LCM = 2 × 3 × 7 × 11 × 13 = 6006.

- HCF × LCM = 6 × 6006 = **36036**
- 42 × 66 × 78 = **216216**

Barabar nahi! Kyun? Prime 2 par teeno ki power 1, 1, 1. Choti + badi = 1 + 1 = 2, par teeno ka jod 1 + 1 + 1 = 3. **Beech wali power jod mein shamil hi nahi hui.** Do numbers mein koi "beech wali" hoti hi nahi, isliye wahan rishta bacha rehta hai. Yahan farak 216216 ÷ 36036 = 6 hai, yaani prime 2 aur 3 ki ek-ek extra power.

> **Dhyan:** HCF × LCM = product sirf **do** numbers ke liye. Teen numbers ke liye HCF aur LCM alag-alag fingerprint se nikalo.

---

## Part E: LCM ke sawaal (kab milenge?)

Jab sawaal kahe "kab dobara ek saath", "kitne ke baad phir se barabar", "sabse chhota ... jo sab se bhaage", to **LCM** ka kaam hai.

### Example 6: do bus ek saath kab?

Subah 6:00 baje do bus ek saath depot se niklin. Ek har **14 minute** mein chalti hai, doosri har **22 minute** mein. Dono dobara kab ek saath niklengi?

14 = 2 × 7 aur 22 = 2 × 11. LCM = 2 × 7 × 11 = **154 minute**. 154 = 2 ghante 34 minute, to samay **8:34 baje**.

**Jaanch:** 154 ÷ 14 = 11 aur 154 ÷ 22 = 7. Dono poore number hain, aur 11 aur 7 mein koi common factor nahi, to koi chhota samay nahi hai ✅.

### Example 7: teen daudne wale, ek gol track

Ek gol track par teen daudne wale ek hi jagah se, ek hi samay par daudna shuru karte hain. Ek round mein wo **63 s**, **72 s** aur **81 s** lete hain. Teeno ek saath start line par dobara kab honge?

63 = 3² × 7, 72 = 2³ × 3², 81 = 3⁴.

| Prime | 63 | 72 | 81 | Sabse badi |
|---|---|---|---|---|
| 2 | 0 | 3 | 0 | 3 |
| 3 | 2 | 2 | 4 | 4 |
| 7 | 1 | 0 | 0 | 1 |

LCM = 2³ × 3⁴ × 7 = 8 × 81 × 7 = **4536 second**. 4536 s = 75 minute 36 second = 1 ghanta 15 minute 36 second.

Round bhi pata chal gaye: 4536 ÷ 63 = 72 round, 4536 ÷ 72 = 63 round, 4536 ÷ 81 = 56 round.

**Jaanch:** 72 × 63 = 4536, 63 × 72 = 4536 aur 56 × 81 = 4536. Teeno round-ginti se ek hi samay 4536 s mila ✅.

### Example 8: chhoti se chhota square banane ke liye kitni eentein?

Eenten **18 cm × 30 cm** ki hain. Inhe bina tode, ek hi tarah rakhkar sabse chhota square banana hai. Square ki side kitni hogi aur kitni eentein lagengi?

Square ki side 18 ki bhi multiple honi chahiye (ek taraf ki eentein poori aaye) aur 30 ki bhi. Sabse chhoti side = LCM(18, 30). 18 = 2 × 3² aur 30 = 2 × 3 × 5, to LCM = 2 × 3² × 5 = **90 cm**.

Eentein: ek line mein 90 ÷ 18 = 5 aur 90 ÷ 30 = 3 hongi, to 5 × 3 = **15 eentein**.

**Jaanch:** Square ka area = 90 × 90 = 8100 cm² aur 15 eentein = 15 × (18 × 30) = 15 × 540 = 8100 cm² ✅.

---

## Part F: HCF ke sawaal: "remainder bachta hai"

### Example 9: "Kaun sa sabse bada number?"

Sabse bada number dhoondho jo 604 aur 971 ko bhaage to remainder kramash **6** aur **9** bache.

**Soch:** agar d, 604 ko bhaage aur remainder 6 bache, to 604 = d × q + 6, yaani **604 − 6 = 598** ko d **poora bhaagta hai**. Isi tarah 971 − 9 = **962** ko bhi d poora bhaagta hai. Matlab d, 598 aur 962 ka **common factor** hai. Sabse bada chahiye, to **HCF(598, 962)**.

598 = 2 × 13 × 23 aur 962 = 2 × 13 × 37. HCF = 2 × 13 = **26**.

Ek aur baat: remainder hamesha divisor se **chhota** hota hai (Topic 1). Yahan sabse bada remainder 9 hai aur 26 > 9, to 26 theek hai. (13 bhi 598 aur 962 ko bhaagta hai, aur 13 > 9, to 13 bhi chalta, par sabse bada 26 hai.)

**Jaanch:** 604 ÷ 26 = 23 remainder 6 (26 × 23 = 598) ✅. 971 ÷ 26 = 37 remainder 9 (26 × 37 = 962) ✅.

---

## Part G: Do ghantiyan, ek hi raasta

Ab tak HCF nikalne ke do tareeke hain: **Topic 1 ka Euclid algorithm** aur is topic ka **prime-power table**. Dekhte hain ek hi jodi par: **1456 aur 2002**.

**Raasta 1: Euclid ka Division Algorithm**
- 2002 = 1456 × 1 + 546
- 1456 = 546 × 2 + 364
- 546 = 364 × 1 + 182
- 364 = 182 × 2 + **0**

Aakhri divisor **182**, to HCF = 182.

**Raasta 2: Prime-power table**

1456 = 2⁴ × 7 × 13 aur 2002 = 2 × 7 × 11 × 13.

| Prime | 1456 | 2002 | Choti | Badi |
|---|---|---|---|---|
| 2 | 4 | 1 | 1 | 4 |
| 7 | 1 | 1 | 1 | 1 |
| 11 | 0 | 1 | 0 | 1 |
| 13 | 1 | 1 | 1 | 1 |

HCF = 2 × 7 × 13 = **182**. Dono raaste ek hi jagah pahunche. Aur table se LCM = 2⁴ × 7 × 11 × 13 = **16016** bhi mil gaya.

**Jaanch:** product relation se: 182 × 16016 = 2914912 aur 1456 × 2002 = 2914912 ✅.

| | Euclid ka algorithm | Prime-power table |
|---|---|---|
| Kya chahiye? | Sirf bhaag dena | Pehle dono ko primes mein todna |
| Kab acha? | Bade, ajeeb numbers jinke primes nikalna mushkil ho | Chhote ya aasaan numbers, aur jab HCF, LCM, power dikhani ho |
| Kya deta hai? | HCF (LCM uske baad product relation se) | HCF aur LCM dono, aur teen ya zyada numbers par seedha |

Dono sahi hain. Jab numbers 5 digit ke ho aur primes na dikhein, to Euclid ka algorithm bachata hai. Jab numbers ke primes saaf dikhein, to table sabse saaf picture deta hai.

---

## Aam galtiyan (bachke rehna)

**Galti 1: "Teen numbers ke liye bhi HCF × LCM = unka product"**

Kisi ne 65, 77 aur 143 ka LCM "product ÷ HCF" se nikala. 65 = 5 × 13, 77 = 7 × 11, 143 = 11 × 13.
- Teeno mein koi prime common nahi (5 sirf 65 mein, 7 sirf 77 mein, 11 aur 13 do-do mein), to HCF = 1.
- Galat tareeka: LCM = 65 × 77 × 143 ÷ 1 = 715715.
- Sahi: badi powers: 5 × 7 × 11 × 13 = **5005**.

715715 bhi common multiple hai (5005 × 143), par **sabse chhota** nahi. 715715, 5005 se 143 guna bada hai. Isliye teen numbers ka LCM hamesha prime-power table se nikalo.

**Galti 2: "HCF mein Highest hai, to HCF bada hoga" aur "LCM sabse bada common cheez hai"**

70 aur 154 lo. 70 = 2 × 5 × 7 aur 154 = 2 × 7 × 11.
- Common factors sirf 1, 2, 7 aur 14 hain. **Sabse bada** common factor 14 hai, jo dono numbers se **chhota** hai. HCF kabhi chhote number se bada nahi hota.
- Common multiples: 770, 1540, 2310, 3080, ... ye kabhi khatam nahi hote. **Sabse bada** common multiple hota hi nahi. LCM "sabse **chhota**" hai, aur wo kabhi bade number se chhota nahi hota. Yahan LCM = 770, jo dono se bada hai.

Yaad rakhne ka tareeka: **HCF ≤ chhota number ≤ bada number ≤ LCM.** "Highest" sirf common **factors** (jo sab chhote hote hain) mein se hai, aur "Least" sirf common **multiples** (jo sab bade hote hain) mein se.

---

## Quick Recap

- **HCF** = sabse bada common factor, **LCM** = sabse chhota common multiple.
- Dono numbers ko primes mein todo, prime-power table banao. **HCF: har prime ki choti power. LCM: har prime ki badi power.** Jahan prime nahi hai, power 0.
- Ye niyam kyun chalte hain: d tabhi n ko bhaagta hai jab d ki har prime power n mein ho (fingerprint ek hi hai).
- **Do numbers ke liye** HCF × LCM = a × b. Kyunki har prime par choti + badi = x + y. Isse gayab number ya LCM mil jata hai.
- **Teen numbers ke liye ye rishta nahi chalta** (beech wali power chhoot jati hai). HCF aur LCM table se hi nikalo.
- Jab ek number doosre ko bhaage, to HCF chhota number aur LCM bada number.
- **LCM ke sawaal:** "kab ek saath", "sabse chhota square", "sabse chhota number jo sab se bhaage". **HCF ke sawaal:** "sabse bada jo bhaage", aur remainder wale sawaal mein pehle remainder ghatao, phir HCF lo (aur dekho ki HCF remainder se bada ho).
- HCF nikalne ke do raaste: Euclid ka algorithm (bina primes ke) aur prime-power table (HCF aur LCM dono).
- Galtiyan: teen numbers par product relation lagana; HCF ko "bada" aur LCM ko "sabse bada" samajhna.

---

## Practice Questions

1. Find the HCF and LCM of 495 and 1155 using prime factorisation. Verify that HCF × LCM equals the product of the two numbers.

2. Find the HCF and LCM of 910 and 1430. Draw the prime-power table.

3. Find the HCF and LCM of 735, 1960 and 2205.

4. Two numbers have HCF 84 and LCM 4620. One of them is 420. Find the other number.

5. Take the numbers 231, 273 and 429. Find their HCF and LCM, and show that HCF × LCM is not equal to their product. By what factor is the product bigger?

6. A ferry and a bus leave a jetty together at 7:00 a.m. The ferry leaves every 33 minutes and the bus every 55 minutes. At what time will they next leave together?

7. Two cyclists start together from the same point of a circular track. One takes 52 seconds for a round and the other takes 91 seconds. After how long will they meet again at the starting point, and how many rounds will each have completed?

8. Rectangular tiles of size 40 cm by 56 cm are used to make the smallest possible square (all tiles placed the same way, none cut). What is the side of the square and how many tiles are needed?

9. Find the greatest number that divides 467 and 833 leaving remainders 5 and 8 respectively.

10. Find the HCF of 1365 and 2288 in two ways: Euclid's division algorithm and prime factorisation. Then find their LCM.

11. Let A = 2⁴ × 3 × 5² and B = 2² × 3³ × 5 × 7. Write the HCF and the LCM in prime-power form (do not multiply out) and show that HCF × LCM = A × B by adding exponents.

12. Is it possible for two numbers to have HCF 28 and LCM 330? Explain with a reason.

13. State True or False, with a reason:
    (a) The HCF of two numbers can be larger than the smaller number.
    (b) If one number divides the other, their LCM is the larger number.
    (c) For any three numbers, HCF × LCM = product of the three numbers.
    (d) The LCM of two numbers is never smaller than the larger number.

### Answers

1. 495 = 3² × 5 × 11 aur 1155 = 3 × 5 × 7 × 11.
   | Prime | 495 | 1155 | Choti | Badi |
   |---|---|---|---|---|
   | 3 | 2 | 1 | 1 | 2 |
   | 5 | 1 | 1 | 1 | 1 |
   | 7 | 0 | 1 | 0 | 1 |
   | 11 | 1 | 1 | 1 | 1 |

   HCF = 3 × 5 × 11 = **165**, LCM = 3² × 5 × 7 × 11 = **3465**.
   Jaanch: 165 × 3465 = 571725 aur 495 × 1155 = 571725 ✅

2. 910 = 2 × 5 × 7 × 13 aur 1430 = 2 × 5 × 11 × 13.
   | Prime | 910 | 1430 | Choti | Badi |
   |---|---|---|---|---|
   | 2 | 1 | 1 | 1 | 1 |
   | 5 | 1 | 1 | 1 | 1 |
   | 7 | 1 | 0 | 0 | 1 |
   | 11 | 0 | 1 | 0 | 1 |
   | 13 | 1 | 1 | 1 | 1 |

   HCF = 2 × 5 × 13 = **130**, LCM = 2 × 5 × 7 × 11 × 13 = **10010**.
   Jaanch: 910 ÷ 130 = 7, 1430 ÷ 130 = 11 (7 aur 11 ka koi common factor nahi) ✅ aur 130 × 10010 = 1301300 = 910 × 1430 ✅

3. 735 = 3 × 5 × 7², 1960 = 2³ × 5 × 7², 2205 = 3² × 5 × 7².
   Prime 2: powers 0, 3, 0, choti 0, badi 3. Prime 3: 1, 0, 2, choti 0, badi 2. Prime 5: 1, 1, 1. Prime 7: 2, 2, 2.
   HCF = 5 × 7² = **245**, LCM = 2³ × 3² × 5 × 7² = 8 × 9 × 5 × 49 = **17640**.
   Jaanch: 735 ÷ 245 = 3, 1960 ÷ 245 = 8, 2205 ÷ 245 = 9 (3, 8, 9 ka common factor nahi) ✅. 17640 ÷ 735 = 24, 17640 ÷ 1960 = 9, 17640 ÷ 2205 = 8 (24, 9, 8 ka common factor nahi) ✅

4. Doosra = HCF × LCM ÷ 420 = 84 × 4620 ÷ 420. 84 × 4620 = 388080 aur 388080 ÷ 420 = **924**.
   Jaanch: 420 = 2² × 3 × 5 × 7 aur 924 = 2² × 3 × 7 × 11. Choti powers: 2² × 3 × 7 = 84 ✅. Badi powers: 2² × 3 × 5 × 7 × 11 = 4620 ✅

5. 231 = 3 × 7 × 11, 273 = 3 × 7 × 13, 429 = 3 × 11 × 13.
   Teeno mein sirf 3 common hai, to HCF = **3**. LCM = 3 × 7 × 11 × 13 = **3003**.
   HCF × LCM = 3 × 3003 = **9009**. Product = 231 × 273 × 429 = 27054027 (231 × 273 = 63063, phir 63063 × 429 = 27054027).
   Alag hain. Product, HCF × LCM se 27054027 ÷ 9009 = **3003** guna bada hai.
   Jaanch: 9009 × 3003 = 27054027 ✅. Ye 3003 = 3 × 7 × 11 × 13 kyun? Prime 3 par teeno ki power 1, 1, 1: choti + badi = 2, jod = 3, to ek 3 chhoot gaya. Prime 7 par powers 1, 1, 0: choti + badi = 1, jod = 2, ek 7 chhoot gaya. Isi tarah ek 11 aur ek 13 bhi chhoot gaye.

6. 33 = 3 × 11 aur 55 = 5 × 11. LCM = 3 × 5 × 11 = **165 minute** = 2 ghante 45 minute. Agle saath: 7:00 + 2:45 = **9:45 a.m.**
   Jaanch: 165 ÷ 33 = 5 aur 165 ÷ 55 = 3, aur 5, 3 ka koi common factor nahi ✅

7. 52 = 2² × 13 aur 91 = 7 × 13. LCM = 2² × 7 × 13 = **364 second** = 6 minute 4 second.
   Rounds: 364 ÷ 52 = **7 round** (pehla cyclist), 364 ÷ 91 = **4 round** (doosra).
   Jaanch: 7 × 52 = 364 aur 4 × 91 = 364 ✅

8. 40 = 2³ × 5 aur 56 = 2³ × 7. LCM = 2³ × 5 × 7 = **280 cm**.
   Tiles: 280 ÷ 40 = 7 aur 280 ÷ 56 = 5, to 7 × 5 = **35 tiles**.
   Jaanch: square ka area 280 × 280 = 78400 aur 35 × (40 × 56) = 35 × 2240 = 78400 ✅

9. 467 − 5 = 462 aur 833 − 8 = 825. Sabse bada number = HCF(462, 825).
   462 = 2 × 3 × 7 × 11 aur 825 = 3 × 5² × 11. HCF = 3 × 11 = **33**.
   Check: 33 > 8 (remainder divisor se chhota hona chahiye) ✓.
   Jaanch: 467 ÷ 33 = 14 remainder 5 (33 × 14 = 462) ✅. 833 ÷ 33 = 25 remainder 8 (33 × 25 = 825) ✅

10. **Euclid:** 2288 = 1365 × 1 + 923; 1365 = 923 × 1 + 442; 923 = 442 × 2 + 39; 442 = 39 × 11 + 13; 39 = 13 × 3 + 0. HCF = **13**.
    **Primes:** 1365 = 3 × 5 × 7 × 13 aur 2288 = 2⁴ × 11 × 13. Common prime sirf 13, HCF = **13**. Dono se ek hi jawab.
    LCM = 1365 × 2288 ÷ 13 = 105 × 2288 = **240240** (ya primes se 2⁴ × 3 × 5 × 7 × 11 × 13).
    Jaanch: 13 × 240240 = 3123120 aur 1365 × 2288 = 3123120 ✅

11. HCF: prime 2 ki choti power 2², prime 3 ki 3¹, prime 5 ki 5¹, prime 7 ki power A mein 0 hai to 0. **HCF = 2² × 3 × 5.**
    LCM: 2⁴, 3³, 5², 7¹. **LCM = 2⁴ × 3³ × 5² × 7.**
    Jod: prime 2: 2 + 4 = 4 + 2 = 6 ✓. Prime 3: 1 + 3 = 1 + 3 ✓ (HCF mein 1, LCM mein 3; A mein 1, B mein 3). Prime 5: 1 + 2 = 2 + 1 = 3 ✓. Prime 7: 0 + 1 = 0 + 1 ✓.
    Jaanch: dono taraf (HCF × LCM aur A × B) ka fingerprint 2⁶ × 3⁴ × 5³ × 7 hai ✅

12. **Nahi.** Dono numbers HCF 28 ke multiple hain, aur dono LCM ko bhaagte hain. Agar 28 dono numbers ko bhaagta hai, to wo LCM ko bhi bhaagega (kyunki har number LCM ko bhaagta hai). Par 330 ÷ 28 = 11.78..., poora nahi. 28 = 2² × 7 aur 330 = 2 × 3 × 5 × 11, to 330 mein 2² aur 7 hai hi nahi.
    **Niyam:** LCM hamesha HCF ka multiple hota hai.

13. (a) **False** ❌. HCF kisi bhi number ko bhaagta hai, to chhote number se bada nahi ho sakta. (Zyada se zyada chhote number ke barabar, jab wo bade ko bhaage.)
    (b) **True** ✅. Chhote ka poora fingerprint bade mein fit hai, to badi powers bade number ki hi hain.
    (c) **False** ❌. Ye sirf do numbers ke liye sach hai. Example 5 mein 42, 66, 78 se dekha.
    (d) **True** ✅. LCM bade number ka multiple bhi hai, to kam se kam bade number jitna hoga.

---

Shabaash! Ab tum jaante ho ki HCF aur LCM ek hi prime-power table ke do roop hain: choti power aur badi power. Aur ye bhi samajh gaye ho ki do numbers ke liye HCF × LCM = a × b kyun hota hai, aur teen numbers par kyun nahi. Euclid ka algorithm aur prime fingerprint, do ghantiyan alag awaaz mein bajti hain, par ek hi jagah pahunchati hain.

**Aage kya?** Class 9 mein √2 ka proof ek chhoti si line par tika tha: "agar p² even hai, to p bhi even hai." Wo line tab hum ne odd aur even dekhkar maan li thi. Topic 4 mein usi baat ko prime fingerprint se saabit karenge, aur phir dekhenge ki √3, √5, √7, balki **kisi bhi prime ka root** kabhi poora (rational) nahi hota.
