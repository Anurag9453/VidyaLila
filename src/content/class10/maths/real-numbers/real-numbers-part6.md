# Chapter: Real Numbers (Part 6)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [real-numbers-part5.md](real-numbers-part5.md) se aage chalti hai** (wahan Topic 5 mein decimal expansion ka raaz khula: terminating ya recurring, denominator ke fingerprint se pehle se pata chal jata hai). Chapter ki shuruaat: [real-numbers.md](real-numbers.md).
> **Topics covered in this file:**
> 6. Sab Kuch Mila Kar: Practice Aur Chapter Ka Saar

---

# Topic 6: Sab Kuch Mila Kar: Practice Aur Chapter Ka Saar

Pichhle paanch topics mein humne paanch alag auzaar banaye: Topic 1 ka **Euclid ka algorithm**, Topic 2 ka **prime fingerprint**, Topic 3 ki **HCF-LCM table**, Topic 4 ke **irrational proofs** aur Topic 5 ka **denominator test**. Ab tak har sawaal ek hi auzaar maangta tha. Asli duniya (aur ek achhi paheli) mein ek sawaal mein do-teen auzaar ek saath lagte hain.

Is topic mein koi bada naya theorem nahi hai. Yahan teen kaam hain: pehle ek **chart** banana ki kaun sa auzaar kab uthana hai, phir **mile-jule sawaal** hal karna, aur aakhir mein wo **galtiyan** pakadna jo ab tak kisi topic ne nahi pakdi. Chapter ka saar sabse aakhir mein hai.

---

## Asmita ka Number Detective board

Asmita ke school mein library ke bahar ek "Number Detective" board lagta hai. Har hafte ek chhupa hua number hota hai aur board par kuch **clue** (suraag) likhe hote hain. Jo bachcha number sahi pakad le, uska naam board par chamakta hai.

Is hafte ke clue ye the:

1. Chhupa number N, 12 se bhaag dene par 7 bachata hai, 14 se bhaag dene par bhi 7, aur 21 se bhaag dene par bhi 7.
2. N, 400 aur 500 ke beech hai.
3. N composite hai aur uske fingerprint mein sirf do prime hain.
4. N ka square root irrational hai.

Asmita ne board dekha aur socha, "Ye clue to alag alag topics ke hain. Pehle mujhe ye tay karna hoga ki kaun sa clue kaun si **chaabi** se khulega." Ye hi sawaal aaj ka pehla kaam hai. Chhupa number Part B ke aakhri example mein pakda jayega.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Cue (ishaara-shabd)** | Sawaal ka wo shabd ya vaakya jo batata hai ki kaun sa auzaar lagana hai | "sabse bada tukda" ka matlab HCF |
| **Template (saancha)** | Ek taiyaar dhaancha jisme sirf number badalte hain aur kadam wahi rehte hain | "Maan lo rational hai, isolate karo, contradiction" |
| **Mixed problem** | Aisa sawaal jisme ek se zyada topic ka auzaar lagta hai | HCF nikalo aur phir uske ratio ka decimal dekho |

---

## Class 9 se yaad

Class 9 mein tumne [rational numbers ke decimals](../../../class9/maths/number-systems/number-systems-part2.md) padhe the (terminating aur recurring) aur [√2 ka proof](../../../class9/maths/number-systems/number-systems-part3.md) dekha tha. Wahan ye dono baatein alag alag lagti thi. Is chapter ne unhe ek hi kahani ke hisse bana diya: dono ke peeche **prime fingerprint** hai. Aaj hum dekhenge ki ek hi sawaal mein ye dono, aur HCF-LCM bhi, kaise saath chalte hain.

---

## Part A: Kaun sa auzaar kab?

Sabse pehle sawaal padhkar uska **ishaara** pakadna seekho. Neeche ka figure ek chhota "raasta chart" hai.

```
Sawaal ka ishaara                                 Kaun sa raasta
--------------------------------------------      ----------------------------------------
sabse bada / barabar tukde / remainder bacha  ->  HCF (bade numbers: Euclid ka algorithm)
kab milenge / ek saath / sabse chhota         ->  LCM (prime-power table, badi power)
HCF aur LCM dono, ya teen numbers             ->  prime-power table (ek hi table se dono)
kya irrational hai?                           ->  maan lo rational, isolate karo, contradiction
decimal rukega ya repeat hoga?                ->  lowest form, phir denominator ka fingerprint
```

> **Figure 6.1** – Raasta chart: sawaal ke ishaare se auzaar chunna.

### Euclid ya prime table?

| Halat | Behtar tareeka | Kyun |
|---|---|---|
| Do bade numbers (4 ya 5 ank) ka sirf HCF | Euclid ka algorithm | Factor dhoondhna nahi padta, sirf bhaag aur remainder |
| HCF aur LCM dono chahiye | Prime-power table | Ek hi table: choti power HCF, badi power LCM |
| Teen numbers ka HCF ya LCM | Prime-power table (ya Euclid do baar HCF ke liye) | Table mein teeno ek saath dikhte hain |
| HCF mil gaya, LCM chahiye (do numbers) | HCF × LCM = a × b | Bas ek guna aur ek bhaag |
| Ek number kisi se bhaag hota hai ya nahi | Prime fingerprint | Fingerprint mein wo prime dekho |

### Teen "template"

- **HCF/LCM ka word problem:** pehle likho "ye HCF ka hai ya LCM ka?" Agar "bacha hua remainder r" hai to HCF **(number − r)** ka lo. Agar "same remainder r" aur "chhota se chhota number" hai to LCM nikalo aur **r jodo**.
- **Irrationality ka proof:** (1) maan lo rational hai (ya √p = p/q lowest terms mein); (2) root ko **isolate** karo; (3) dusri taraf rational aa gaya; (4) par root irrational hai: **contradiction**. Root ka irrational hona prime ke liye lemma se, aur non-perfect-square ke liye exponent ke odd hone se aata hai (Topic 4).
- **Decimal ka test:** pehle p/q ko **lowest form** mein likho, phir q ko primes mein todo. Sirf 2 aur 5 hain to terminating, koi aur prime hai to recurring (Topic 5).

---

## Part B: Mile-jule sawaal

### Example 1: Euclid se HCF, phir LCM product relation se

**Sawaal:** 3476 aur 5135 ka HCF Euclid ke algorithm se nikalo, phir bina factor kiye LCM nikalo.

**Hal:** Bade number 5135 ko chhote se bhaag do, phir divisor aur remainder ko agle pair banao.

```
5135 = 3476 × 1  + 1659
3476 = 1659 × 2  +  158
1659 =  158 × 10 +   79
 158 =   79 × 2  +    0   <- remainder 0: ruko, aakhri divisor 79 hi HCF
```

> **Figure 6.2** – HCF(5135, 3476) ki ladder. Quotient (1, 2, 10, 2) HCF par asar nahi daalte, sirf remainders (1659, 158, 79, 0) kaam karte hain.

HCF = **79**. Ab Topic 3 ka rishta (sirf do numbers ke liye): HCF × LCM = a × b, to LCM = (3476 × 5135) ÷ 79. Pehle 3476 ÷ 79 = 44, to LCM = 44 × 5135 = **225940**.

**Jaanch (dusre raaste se, prime table):** 3476 = 2² × 11 × 79 aur 5135 = 5 × 13 × 79. HCF mein sirf common 79 aaya (choti power). LCM mein har prime ki badi power: 2² × 5 × 11 × 13 × 79 = 4 × 5 × 11 × 13 × 79 = 225940 ✅

### Example 2: HCF ka word problem, aur uske ratio ka decimal

**Sawaal:** Asmita ke paas do patti hain, ek 4544 cm ki aur ek 3195 cm ki. Dono ko barabar lambai ke tukdon mein kaatna hai, tukda jitna ho sake utna lamba, aur koi patti bachni nahi chahiye. Tukde ki lambai kya hogi? Doosri patti (3195 cm) ke tukdon ki ginti ko pehli patti (4544 cm) ke tukdon ki ginti se bhaaga jaye, to wo fraction kaisa decimal dega?

**Hal:** "Sabse bada tukda, koi bacha nahi" ka ishaara HCF hai. Numbers bade hain, to Euclid.

- 4544 = 3195 × 1 + 1349
- 3195 = 1349 × 2 + 497
- 1349 = 497 × 2 + 355
- 497 = 355 × 1 + 142
- 355 = 142 × 2 + 71
- 142 = 71 × 2 + 0

HCF = **71 cm**. Tukde: 4544 ÷ 71 = 64 aur 3195 ÷ 71 = 45. Pehli patti ke 64, doosri ke 45 tukde. Maanga hua fraction (doosri ÷ pehli) = **45/64**.

**Ek khoobsurat baat:** 45 aur 64 **coprime** hain (45 = 3² × 5, 64 = 2⁶). Ye hona hi tha: agar dono ginti mein koi common factor f hota to tukde f guna bade bhi ho sakte the, aur 71 sabse bada tukda na hota. Yaani **jab tukda greatest ho to ginti ka fraction apne aap lowest form mein hota hai.**

Denominator 64 = 2⁶, sirf 2, to decimal **terminating** hai. Decimal places = bade exponent jitne = max(6, 0) = **6**. 5 ki power 0 hai, to upar-neeche 5⁶ = 15625 se guna: 45 × 15625 = 703125, denominator 10⁶. 45/64 = **0.703125**.

**Jaanch:** 71 × 64 = 4544 ✅ aur 71 × 45 = 3195 ✅. 0.703125 × 64 = 45 ✅.

### Example 3: Kaun sa number kaisa? (classify karo)

**Sawaal:** Neeche ke paanch numbers mein se har ek ko batao: rational terminating, rational recurring ya irrational.

(a) 119/280  (b) 19/45  (c) 5 + √19  (d) √76 ÷ √19  (e) 0.3030030003... (har baar 3 ke baad ek aur 0)

**Hal:**

(a) **Pehle lowest form.** 119 = 7 × 17, 280 = 2³ × 5 × 7. Common 7: 119/280 = 17/40. Ab 40 = 2³ × 5, sirf 2 aur 5, to **terminating**: 17/40 = 0.425. (Agar sidha 280 dekhte to 7 dikhta aur galat likhte "recurring".)

(b) 19 prime hai aur 45 ka factor nahi, to 19/45 lowest form mein hai. 45 = 3² × 5, mein 3 aaya, to **recurring**: 19/45 = 0.4222... = 0.4(2).

(c) **Irrational.** Template: maan lo 5 + √19 = s rational. Isolate: √19 = s − 5, rational. Par √19 irrational hai. Ye bhi template se: maan lo √19 = p/q (no common factor), p² = 19q², 19 divides p² to 19 divides p (lemma), p = 19m, q² = 19m², 19 divides q, to common factor 19, contradiction. Isliye 5 + √19 irrational.

(d) √76 ÷ √19 = √(76 ÷ 19) = √4 = **2**. Ye rational hai, aur 2 = 2.0 terminating. Dekho: dono upar-neeche irrational the, par jawab rational. Isliye pehle **simplify karo**, tab faisla karo.

(e) Decimal kabhi nahi rukta, aur koi block baar baar nahi doharata (har baar zeros ka jhund ek aur lamba hota jata hai). Isliye **irrational**.

**Jaanch:** (a) 17/40 × 280 = 119 ✅. (b) 0.4222... × 45 = 19 ✅ (0.4222... = 19/45: 45 × 0.4222... = 19.0). (d) 2² = 4 aur 76 ÷ 19 = 4 ✅.

### Example 4: Lemma se saabit karo: n odd ho to n² − 1, 8 se bhaag hota hai

**Sawaal:** Saabit karo ki har odd positive integer n ke liye n² − 1, 8 se bhaag hota hai.

**Hal:** Topic 1 se: odd integer 2q + 1 ke roop ka hota hai. To

n² − 1 = (2q + 1)² − 1 = 4q² + 4q + 1 − 1 = 4q² + 4q = **4q(q + 1)**.

Ab q aur q + 1 do **lagataar** integers hain. Division lemma (b = 2) se q = 2k ya q = 2k + 1. Agar q = 2k to q even; agar q = 2k + 1 to q + 1 = 2k + 2 even. Dono halat mein q(q + 1) **even** hai, yaani 2 ka multiple: q(q + 1) = 2t. To n² − 1 = 4 × 2t = **8t**. Saabit.

**Jaanch:** n = 37: 37² − 1 = 1368 = 8 × 171 ✅. n = 51: 51² − 1 = 2600 = 8 × 325 ✅.

### Example 5: Number Detective ka chhupa number

Ab Asmita ke board par wapas. Clue 1 kehta hai: N, 12, 14 aur 21 se bhaag dene par har baar 7 bachata hai.

**Kadam 1 (Topic 1 ki zubaan):** N = 12a + 7 = 14b + 7 = 21c + 7. Yaani **N − 7** teeno (12, 14, 21) ka multiple hai. (Remainder 7, teeno divisors se chhota hai, to ye roop theek hai.)

**Kadam 2 (Topic 3 ki table):** LCM(12, 14, 21): 12 = 2² × 3, 14 = 2 × 7, 21 = 3 × 7. Har prime ki badi power: 2² × 3 × 7 = 84.

| Number | 2 ki power | 3 ki power | 7 ki power |
|---|---|---|---|
| 12 | 2² | 3¹ | 7⁰ |
| 14 | 2¹ | 3⁰ | 7¹ |
| 21 | 2⁰ | 3¹ | 7¹ |
| **LCM** | **2²** | **3¹** | **7¹** |

N − 7 = 84k (k = 1, 2, 3, ...), yaani N = 84k + 7: 91, 175, 259, 343, 427, 511, ...

**Kadam 3 (clue 2):** 400 aur 500 ke beech sirf **427** aata hai (343 chhota hai, 511 bada).

```
343             427              511
-*----------[----*--------------]-*-----
```

> **Figure 6.3** – 84k + 7 wale numbers (*), aur clue 2 ki patti ([ se ] tak: 400 se 500). Patti ke andar sirf 427.

**Kadam 4 (clue 3 aur 4):** 427 = 7 × 61 (427 ÷ 7 = 61). Do prime, clue 3 pass. Dono primes ek ek baar (odd exponent) aate hain, to 427 perfect square nahi, aur Topic 4 ke hisaab se √427 **irrational** hai. Clue 4 pass.

**Jaanch:** 427 ÷ 12 = 35 baaki 7 (12 × 35 = 420) ✅, 427 ÷ 14 = 30 baaki 7 ✅, 427 ÷ 21 = 20 baaki 7 ✅. 20² = 400 aur 21² = 441, 427 inke beech, perfect square nahi ✅.

Asmita ne board par likha: **chhupa number 427.** Pehle ek clue ek topic ka lagta tha, par chaaron ne milkar ek hi number pakda.

---

## Aam galtiyan (bachke rehna)

**Galti 1: "√(a + b) = √a + √b"**

Class 9 ke [number-systems-part4.md](../../../class9/maths/number-systems/number-systems-part4.md) mein ye galti ek jhalak mein aayi thi. Yahan uska "kyun" gehra dekhte hain. Ye jod par chal ke dekhne mein sahi lagta hai, par hai galat. Demo: √(36 + 64) = √100 = **10**, lekin √36 + √64 = 6 + 8 = **14**. Dono alag hain.

Kyun? Dono taraf square karo: (√a + √b)² = a + b + 2√(ab), jisme beech ka 2√(ab) hamesha extra aata hai. √9 + √16 = 7 aur 7² = 49, jabki 9 + 16 = 25. Fark 24 = 2 × √(9 × 16) = 2 × 12. Guna ka niyam alag hai: √(ab) = √a × √b **sahi** hai (√(36 × 64) = √2304 = 48 = 6 × 8). Jod aur guna ko mat milao.

**Galti 2: "Jis decimal ka ant nahi, wo irrational hai"**

Sirf "kabhi nahi rukta" kaafi nahi. 1/3 = 0.333... kabhi nahi rukta, par 1/3 rational hai. 5/11 = 0.4545... bhi kabhi nahi rukta, aur rational hai. Irrational ke liye **do** shartein: decimal kabhi **rukta nahi** aur kabhi **repeat nahi hota** (koi block baar baar nahi aata). Jaise 0.3030030003... (Example 3 ka (e)). Rational ka decimal ya to rukta hai ya ek block ke saath repeat hota hai (Topic 5).

**Galti 3: "Jo number 6 se bhaag hota hai wo 12 se bhi bhaag hoga"**

Demo: 66 = 2 × 3 × 11. 66 ÷ 6 = 11, par 66 ÷ 12 = 5.5. Ya 90 = 2 × 3² × 5: 90 ÷ 6 = 15, par 90 ÷ 12 = 7.5. Kaaran fingerprint mein hai: 12 = 2² × 3, to 12 se bhaag hone ke liye number mein 2 **do baar** chahiye. 6 = 2 × 3 sirf ek 2 maangta hai. 66 aur 90 mein ek hi 2 hai.

Ek jodi ka seedha rule: "a aur b dono se bhaag ho to a × b se bhaag ho" hamesha tab pakka sach hai jab a aur b **coprime** hon. 3 aur 4 coprime hain, to jo 3 aur 4 dono se bhaag ho wo 12 se bhaag hoga. Par 8 aur 12 coprime nahi (HCF 4): 24, 8 aur 12 dono se bhaag hota hai, par 8 × 12 = 96 se nahi. Sahi baat: dono se bhaag ho to **LCM** se bhaag hoga (LCM(8, 12) = 24).

**Galti 4: "Do irrationals ka guna hamesha irrational hota hai"**

Demo: √12 aur √27 dono irrational hain (12 = 2² × 3 mein 3 odd baar, 27 = 3³ mein 3 odd baar). Par √12 × √27 = √324 = **18**, rational. Dusra tareeka: √12 = 2√3 aur √27 = 3√3, to guna 6 × (√3)² = 6 × 3 = 18. Topic 4 mein (3 + √11)(3 − √11) = −2 isi baat ka ek aur roop tha. Kabhi guna irrational bhi hota hai: √2 × √3 = √6.

Jo **hamesha** irrational rehta hai wo hai (non-zero rational) × irrational (Topic 4). Do irrationals ke guna ke baare mein har baar simplify karke dekhna padta hai.

---

## Quick Recap

- Sawaal ka **ishaara** pakdo: "sabse bada tukda, remainder bacha" HCF, "kab milenge, sabse chhota" LCM, "irrational hai?" proof template, "decimal rukega?" denominator test.
- Do bade numbers ka sirf HCF: **Euclid ka algorithm**. HCF aur LCM dono ya teen numbers: **prime-power table**. Do numbers ke liye HCF × LCM = a × b.
- Mile-jule sawaal ko todo: har tukda kisi ek topic ka hota hai. HCF se tukde, tukdon ki ginti ka fraction apne aap lowest form mein, phir decimal ka test.
- "Same remainder r" wale sawaal mein number = LCM ka multiple + r. Remainder hamesha divisor se chhota hona chahiye.
- Odd n ke liye n² − 1 = 4q(q + 1), aur q(q + 1) even, to 8 se bhaag hota hai.
- Aam galtiyan: √(a + b) ≠ √a + √b; "kabhi nahi rukta" ka matlab irrational nahi (1/3); 6 se bhaag hone ka matlab 12 se bhaag hona nahi; do irrationals ka guna rational ho sakta hai (√12 × √27 = 18).

---

## Practice Questions

1. Find HCF(4611, 3551) using Euclid's division algorithm, and then find LCM(4611, 3551) without factorising either number. Check by writing both numbers as a product of primes.

2. Two ropes of length 2684 cm and 2379 cm are cut into pieces of equal length, as long as possible, with nothing left over. (a) Find the length of each piece. (b) Find the number of pieces from each rope. (c) Will the fraction (pieces from the shorter rope) ÷ (pieces from the longer rope) be a terminating or a recurring decimal? Give the decimal.

3. For each number, say whether it is a terminating decimal, a recurring decimal or irrational, with a reason: (a) 69/184 (b) 29/54 (c) √50 − 2√2 (d) √48 ÷ √12 (e) 0.727272...

4. Prove that √37 is irrational, and hence prove that 8 − 3√37 is irrational.

5. Show that for every positive integer n, the product n(n + 1)(n + 2) is divisible by 3. (Hint: use the division lemma with divisor 3.)

6. Find the smallest number greater than 30 which leaves remainder 7 when divided by 18, 27 and 30.

7. The HCF of two numbers is 21 and their LCM is 1512. One of the numbers is 168. Find the other number, and check your answer using prime factorisation.

8. True or false? Give a reason (a counter-example or a short argument) for each.
   (a) √(256 + 3969) = √256 + √3969.
   (b) 0.818181... is irrational because it never ends.
   (c) A number divisible by both 8 and 12 is divisible by 96.
   (d) √45 × √20 is rational.

9. Without dividing, find how many decimal places 47/1600 has. Then find the decimal.

10. A hidden number N is between 500 and 700. It leaves remainder 3 when divided by 4, by 5 and by 6, and it is divisible by 13. Find N. Is √N rational or irrational?

11. Show that n² + 2 is never divisible by 4 for any positive integer n. (Hint: use the division lemma with divisor 2.)

12. Find the smallest 4-digit number exactly divisible by 16, 20 and 28.

### Answers

1. **Euclid:** 4611 = 3551 × 1 + 1060; 3551 = 1060 × 3 + 371; 1060 = 371 × 2 + 318; 371 = 318 × 1 + 53; 318 = 53 × 6 + 0. HCF = **53**.
   LCM = (4611 × 3551) ÷ 53. 4611 ÷ 53 = 87, to LCM = 87 × 3551 = **308937**.
   **Jaanch:** 3551 = 53 × 67 (67 prime) aur 4611 = 3 × 29 × 53. Common sirf 53 hai, to HCF = 53 ✅. LCM = 3 × 29 × 53 × 67 = 308937 ✅

2. "Sabse bada tukda, kuch bache nahi" ka matlab HCF, aur numbers bade hain, to Euclid.
   2684 = 2379 × 1 + 305; 2379 = 305 × 7 + 244; 305 = 244 × 1 + 61; 244 = 61 × 4 + 0.
   (a) HCF = **61 cm**.
   (b) 2684 ÷ 61 = **44** tukde aur 2379 ÷ 61 = **39** tukde.
   (c) Chhoti rope ke tukde ÷ badi rope ke tukde = 39/44. 39 = 3 × 13 aur 44 = 2² × 11 coprime hain (HCF greatest hai, isliye aisa hona hi tha). Denominator 44 mein 11 hai, to **recurring**. Long division se 39/44 = 0.88636363... = 0.88(63).
   **Jaanch:** 61 × 44 = 2684 ✅, 61 × 39 = 2379 ✅. 0.8863636... × 44 = 39.0000 ✅

3. (a) 69 = 3 × 23, 184 = 2³ × 23. Common 23 hata do: 69/184 = 3/8. 8 = 2³, to **terminating**: 3/8 = 0.375. (184 mein 23 dikhta hai, par wo lowest form mein kat jata hai.)
   (b) 29 prime, 54 = 2 × 3³ (29 usme nahi), lowest form hai. 54 mein 3 hai, to **recurring**: 29/54 = 0.537037037... = 0.5(370).
   (c) √50 = 5√2. To 5√2 − 2√2 = 3√2. Ye non-zero rational × irrational hai, **irrational** (Topic 4).
   (d) √48 ÷ √12 = √4 = 2, **rational**, aur 2 = 2.0 terminating.
   (e) 0.727272... recurring block 72 ke saath. 0.7272... = 72/99 = 8/11, to **rational recurring**.
   **Jaanch:** 3/8 × 184 = 69 ✅; 3√2 = 4.2426 aur √50 − 2√2 = 7.0711 − 2.8284 = 4.2427 ✅ (rounding ka farak); 8/11 = 0.7272... ✅

4. Maan lo √37 = p/q, p aur q ka common factor 1 ke alawa koi nahi. Square: p² = 37q². To 37, p² ko bhaag karta hai, 37 prime hai, lemma se 37 divides p. p = 37m. To 1369m² = 37q², yaani q² = 37m². Phir 37 divides q² to 37 divides q. 37 dono ka common factor: contradiction. **√37 irrational.**
   Ab maan lo 8 − 3√37 = s rational. Isolate: 3√37 = 8 − s, √37 = (8 − s) ÷ 3, rational. Par √37 irrational. Contradiction. Isliye 8 − 3√37 irrational.
   **Jaanch:** 1369 = 37 × 37 ✅. 73/12 try karo: 73² = 5329 aur 37 × 12² = 37 × 144 = 5328, 1 ka farak, barabar nahi ✅

5. Lemma (b = 3): n = 3q, 3q + 1 ya 3q + 2.
   - n = 3q: n khud 3 ka multiple, to product 3 se bhaag hoga.
   - n = 3q + 1: n + 2 = 3q + 3 = 3(q + 1), 3 ka multiple.
   - n = 3q + 2: n + 1 = 3q + 3 = 3(q + 1), 3 ka multiple.
   Har halat mein teen mein se ek factor 3 ka multiple, to product 3 se bhaag hota hai.
   **Jaanch:** n = 10: 10 × 11 × 12 = 1320 = 3 × 440 ✅. n = 16: 16 × 17 × 18 = 4896 = 3 × 1632 ✅.

6. "Same remainder 7, sabse chhota" ka matlab LCM + 7. LCM(18, 27, 30): 18 = 2 × 3², 27 = 3³, 30 = 2 × 3 × 5. Badi powers: 2 × 3³ × 5 = 270. Number = 270 + 7 = **277**. (Remainder 7 teeno divisors 18, 27, 30 se chhota hai.)
   **Jaanch:** 277 = 18 × 15 + 7 ✅, 277 = 27 × 10 + 7 ✅, 277 = 30 × 9 + 7 ✅. Isse chhota 277 − 270 = 7 hai, par wo 30 se bada nahi, to sawaal ki shart (30 se bada) mein 277 hi sabse chhota hai ✅

7. HCF × LCM = a × b se: 21 × 1512 = 168 × b, to b = (21 × 1512) ÷ 168 = 31752 ÷ 168 = **189**.
   **Jaanch:** 168 = 2³ × 3 × 7 aur 189 = 3³ × 7. Choti power: 3 × 7 = 21 = HCF ✅. Badi power: 2³ × 3³ × 7 = 1512 = LCM ✅.

8. (a) **False** ❌. √4225 = 65, par √256 + √3969 = 16 + 63 = 79.
   (b) **False** ❌. 0.8181... = 81/99 = 9/11, rational. Recurring block hai, irrational mein koi block repeat nahi hota.
   (c) **False** ❌. 24 dono (8 aur 12) se bhaag hota hai, par 96 se nahi. 8 aur 12 coprime nahi (HCF 4), sahi baat: LCM(8, 12) = 24 se bhaag hoga.
   (d) **True** ✅. √45 × √20 = √900 = 30, rational (45 = 3² × 5 aur 20 = 2² × 5: dono mein 5 odd baar, jodne par 5² ho jata hai).
   **Jaanch:** 30 × 30 = 900 ✅ aur 45 × 20 = 900 ✅. Aur 65² = 4225 = 256 + 3969 ✅.

9. 1600 = 2⁶ × 5² (2 ki power 6, 5 ki power 2). 47 prime hai, to lowest form. Decimal places = bada exponent = max(6, 2) = **6**. 47/1600 = 47 × 625 ÷ (1600 × 625) = 29375/1000000 = **0.029375**.
   **Jaanch:** 0.029375 mein 6 ank ✅. 0.029375 × 1600 = 47 ✅.

10. N − 3 = 4, 5 aur 6 teeno ka multiple. LCM(4, 5, 6): 4 = 2², 5 = 5, 6 = 2 × 3, to 2² × 3 × 5 = 60. N = 60k + 3: 63, 123, ..., 483, **543, 603, 663**, 723... 500 aur 700 ke beech 543, 603, 663. Inme 13 se bhaag hone wala: 543 = 3 × 181, 603 = 3² × 67, 663 = 3 × 13 × 17. Sirf **N = 663**.
    √663: 663 = 3 × 13 × 17, har prime ka exponent 1 (odd), to 663 perfect square nahi, **√663 irrational**.
    **Jaanch:** 663 = 4 × 165 + 3 ✅, 663 = 5 × 132 + 3 ✅, 663 = 6 × 110 + 3 ✅, 663 = 13 × 51 ✅. 25² = 625 aur 26² = 676, 663 beech mein ✅.

11. Lemma (b = 2): n = 2q ya n = 2q + 1.
    - n = 2q: n² + 2 = 4q² + 2, 4 se bhaag dene par remainder **2**.
    - n = 2q + 1: n² + 2 = 4q² + 4q + 3 = 4(q² + q) + 3, remainder **3**.
    Dono mein remainder 0 nahi, to n² + 2 kabhi 4 se bhaag nahi hota.
    **Jaanch:** n = 6: 38 = 4 × 9 + 2 ✅. n = 9: 83 = 4 × 20 + 3 ✅.

12. LCM(16, 20, 28): 16 = 2⁴, 20 = 2² × 5, 28 = 2² × 7. Badi powers: 2⁴ × 5 × 7 = **560**. 4-digit numbers 1000 se shuru hote hain. 560 × 1 = 560 (3 ank), 560 × 2 = **1120** (4 ank). Sabse chhota 4-digit: **1120**.
    **Jaanch:** 1120 ÷ 16 = 70 ✅, 1120 ÷ 20 = 56 ✅, 1120 ÷ 28 = 40 ✅. Aur 1120 − 560 = 560 sirf 3 ank ka ✅.

---

Detective board par naam chamak gaya, aur Asmita ne dekha ki sab kuch ek hi cheez se juda tha: **prime fingerprint**. Tum bhi ab sawaal padhkar pehle ishaara pakadte ho, phir sahi auzaar uthate ho. Shabaash!

Ab chapter ka saar neeche ek table mein hai.

---

# Chapter Wrap-up: Real Numbers

| Topic | Kya seekha | Sabse kaam ki baat |
|---|---|---|
| 1. Euclid ka Division Lemma | a = bq + r (0 ≤ r < b), unique q aur r; Division Algorithm se HCF; coprime numbers; 2q + 1, 3q, 3q + 1, 3q + 2 jaise roop | Algorithm remainder 0 par rukta hai, aakhri divisor HCF hai; quotient HCF mein kaam nahi aata |
| 2. Fundamental Theorem of Arithmetic | Har composite number ka ek hi prime fingerprint (order chhod kar); exponent form; factors ki ginti; zero par khatam hone ke liye 2 aur 5 dono chahiye | Tree alag ho sakte hain, fingerprint ek hi; 1 prime nahi |
| 3. HCF aur LCM prime factorisation se | Prime-power table: choti power HCF, badi power LCM; HCF × LCM = a × b; teen numbers par ye rishta nahi chalta | Do numbers ke liye hi HCF × LCM = a × b; word problems mein ishaara pakdo |
| 4. Irrational numbers ke proof | Prime-divisibility lemma; √p har prime p ke liye irrational; rational ± irrational irrational; do irrationals ka jod rational ho sakta hai | "Maan lo rational, isolate karo, contradiction" |
| 5. Decimal expansion ka raaz | p/q (lowest form) terminating hai tabhi jab q = 2ᵐ5ⁿ; decimal places = bada exponent; baaki recurring | Pehle lowest form, phir denominator ka fingerprint |
| 6. Sab kuch mila kar | Raasta chart, mile-jule sawaal, aam galtiyan (√(a + b), 1/3 ka decimal, 6 aur 12, irrationals ka guna) | Sawaal ka ishaara pakdo, phir sahi auzaar chuno |

---

Real numbers ka ye safar Euclid ke bhaag se shuru hua, fingerprint se gujra, aur irrational numbers tak pahuncha. Ab tum kisi bhi number ke andar jhaank kar bata sakte ho ki wo kaisa hai.

**Aage kya?** Class 10 Maths Chapter 2 Polynomials mein dekhenge ki polynomials ke zeros ka unke graph se kya lena-dena hai.
