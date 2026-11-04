# Chapter: Probability (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [probability-part2.md](probability-part2.md) se aage chalti hai** (wahan Topic 2 hai: empirical probability, tally table, aur bottle-cap experiment). Chapter ki shuruaat [probability.md](probability.md) mein hai.
> **Topics covered in this file:**
> 3. Barabar Mauke wali Probability (Theoretical Probability)

---

# Topic 3: Barabar Mauke wali Probability (Theoretical Probability)

Topic 2 mein Mr. Fernandes ki class ne bottle cap ko 500 baar uchhaal kar probability nikali thi: kisi event ke **kitni baar hua ÷ kul kitni baar try kiya**. Tally table banayi, aur dekha ki trials badhne par ye ratio dheere-dheere ek number ke paas tik jaata hai. Ye tareeka kamaal ka hai, par ek dikkat hai: **har baar experiment karna padta hai**, aur wo time leta hai. Kya aisa nahi ho sakta ki experiment kiye bina, sirf sochkar bata dein ki ye ratio kahan tikega?

Kuch situations mein ho sakta hai, aur wo situations hain jahan **sab outcomes ke aane ke mauke barabar** hote hain. Is topic mein wahi seekhenge: ek seedha formula, jisse probability bina ek bhi trial ke nikal aati hai.

---

## Holi ka rang-packet

Holi ki subah hai. Ritvik ki aankhon par patti bandhi hai (blindfold), aur uske saamne ek bag rakha hai. Bag mein rang ke packet hain: **5 laal, 3 hare aur 2 peele**. Ritvik ko bag mein haath daalkar **ek packet** nikalna hai.

Uski badi behen Hema paas khadi hai. Wo poochti hai, "Ritvik, bol, **kaunsa rang aayega?**"

Ritvik hansta hai, "Didi, patti bandhi hai, mujhe kya pata! Jo hath mein aa jaye."

Hema: "Theek hai. To ye bata, **kis rang ke aane ke chances sabse zyada hain?**"

Ritvik thodi der sochta hai. "Laal ke. Kyunki laal ke packet sabse zyada hain, 5 hain."

"Bilkul sahi. Par ab ye bata ki laal ke chances **kitne** hain? Aadhe? Ek-tihaai? Number mein bata."

Ye number nikalne ka tareeka hi is topic ka dil hai. Pehle ek baat samajhni hogi: Ritvik ki aankhon par patti kyun bandhi hai?

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Random (bina dekhe, bina pasand ke)** | Aise chunna ki kisi ko jaan-boojhkar zyada ya kam mauka na mile | Patti bandhkar packet nikalna |
| **Fair (nishpaksh)** | Koi bhi outcome doosre se zyada aasani se nahi aata | Sikka jo sachmuch barabar gira hai |
| **Equally likely outcomes** | Aise outcomes jinke aane ke mauke bilkul barabar hon | Fair sikke mein Head aur Tail |
| **Sample space** | Ek experiment ke **saare** possible outcomes ka set | Sikke ka: {H, T} |
| **Favourable outcomes** | Sample space ke wo outcomes jinse hamara event ho jaye | "Even number" ke liye die par 2, 4, 6 |
| **Theoretical probability** | Experiment kiye bina, sirf ginti se nikali hui probability | Fair sikke mein P(Head) = 1/2 |

---

## Part A: "Random" aur "Fair" ka matlab

Ritvik ki aankhon par patti isliye hai ki wo **dekhkar apni pasand ka rang na utha le**. Jab chunav aise ho ki kisi bhi packet ko khaas tareeke se preference na mile, to hum kehte hain ki packet **random** tareeke se nikala gaya.

"Fair" Topic 1 mein dekha tha (Mahi ka sikka: heads aur tails ke chance barabar). Yaad karo, ye shabd cheez ke baare mein hota hai:
- **Fair sikka:** na bhaari, na tedha. Uska Head aur Tail aane ka mauka barabar hai.
- **Fair die (paasa):** ek sahi banaya hua cube, jiske 6 face hain aur har face ke aane ka mauka barabar hai.
- **Spinner jisme sab sectors barabar size ke hain:** teer kisi bhi sector par rukne ke liye barabar mauka rakhta hai.

Agar sikka ek taraf se bhaari ho, ya spinner ka ek sector bahut bada ho, to wo fair nahi hai, aur is topic ka formula wahan seedha nahi chalega.

### Ek zaroori baat: packet barabar hain, rang nahi

Ritvik ke bag mein dhyan se dekho:

- **Har ek packet** ke haath mein aane ka mauka **barabar** hai (kul 10 packet hain, aankh par patti hai, sab ek jaise bag mein mile hue hain).
- Par **rang** ke mauke barabar nahi hain! Laal ke 5 packet hain, hare ke 3, peele ke sirf 2. Isliye laal aane ke chances peele se zyada hain.

Yaani 3 rang hone ka matlab ye **nahi** ki har rang ke chances 1/3 hain. Barabar mauke wali cheez hamesha **ginti ki ikai** hoti hai, jo yahan "ek-ek packet" hai. Ye baat aage galtiyon mein bhi kaam aayegi.

---

## Part B: Sample space aur favourable outcomes

**Sample space** ka matlab hai: experiment ke jitne bhi alag-alag nateeje (outcomes) ho sakte hain, un sabki list. Isme na koi chhootna chahiye, na koi do baar aana chahiye.

| Experiment | Sample space | Kul outcomes |
|---|---|---|
| Ek fair sikka uchhalna | {H, T} | 2 |
| Ek fair die phenkna | {1, 2, 3, 4, 5, 6} | 6 |
| 4 barabar sectors wala spinner (1 se 4 tak) | {1, 2, 3, 4} | 4 |
| Ritvik ka bag (har packet ko alag ginkar) | R₁, R₂, R₃, R₄, R₅, G₁, G₂, G₃, Y₁, Y₂ | 10 |

Bag mein humne har packet ko alag naam diya (R₁ se R₅ laal, G₁ se G₃ hare, Y₁ aur Y₂ peele), kyunki **yahi 10 outcomes barabar mauke wale hain**. "Laal, hara, peela" likhna sample space ki sahi list nahi hogi, kyunki wo 3 outcomes barabar mauke ke nahi hain.

### Favourable outcomes ginna

Kisi event ke liye **favourable outcomes** wo hain jo sample space mein se hamare event ko sach kar dein.

- Bag mein "laal packet" event ke liye favourable: R₁, R₂, R₃, R₄, R₅. Yaani **5**.
- Die par "even number" ke liye favourable: 2, 4, 6. Yaani **3**.
- 4 sector wale spinner par "number 3 se bada" ke liye favourable: sirf 4. Yaani **1**.

---

## Part C: Theoretical probability ka formula

Jab sab outcomes **barabar mauke wale** ho, to event E ki probability:

> **P(E) = (E ke favourable outcomes ki ginti) ÷ (kul barabar mauke wale outcomes ki ginti)**

Isse Topic 2 wale ratio se milao: wahan "E kitni baar hua ÷ kul trials" tha. Yahan "experiment kiye bina, sample space ginkar" wahi ratio nikal rahe hain. Isiliye ise **theoretical probability** kehte hain.

Formula ka "kyun": agar 10 barabar mauke wale outcomes hain aur unme se 5 hamare liye achhe hain, to 10 baar mein se lagbhag 5 baar ham jeetne ki ummeed rakh sakte hain. Yaani 5/10.

### Holi ke bag ki probability

Kul packets = 5 + 3 + 2 = **10**.

- **P(laal)** = 5 ÷ 10 = 5/10 = **1/2** (yaani 50%)
- **P(hara)** = 3 ÷ 10 = **3/10** (yaani 30%)
- **P(peela)** = 2 ÷ 10 = 2/10 = **1/5** (yaani 20%)

Hema ka sawaal tha "kis rang ke chances sabse zyada hain?" Jawab: **laal**, kyunki 1/2 = 5/10 sabse bada hai (3/10 aur 2/10 se).

**Jaanch:** teeno jodo: 5/10 + 3/10 + 2/10 = 10/10 = **1** ✅. Ritvik ka haath jo bhi packet nikale, wo in teen rang mein se hi koi hoga, isliye teeno ki probabilities milkar 1 banti hain. (Ye 1 wala idea hum Topic 4 mein gehraai se dekhenge.)

Ritvik bola, "Didi, ye to simple hai! Laal ke aadhe chances."
Hema: "Haan. Ab chal, kuch aur cheezon par aazmate hain."

---

## Part D: Solved examples

### Example 1: Sikka

Ek fair sikka uchhala gaya. P(Head) kya hai?

- Sample space = {H, T}, kul outcomes = 2
- Favourable (Head) = 1
- P(Head) = **1/2** (50%)

**Jaanch:** P(Tail) bhi 1/2, aur 1/2 + 1/2 = 1 ✅

### Example 2: Die

Ek fair die phenka gaya. Sample space = {1, 2, 3, 4, 5, 6}, kul = 6.

| Event | Favourable outcomes | Ginti | Probability |
|---|---|---|---|
| Number 4 aaye | {4} | 1 | 1/6 |
| Even number aaye | {2, 4, 6} | 3 | 3/6 = **1/2** |
| Prime number aaye | {2, 3, 5} | 3 | 3/6 = **1/2** |
| 4 se chhota number aaye | {1, 2, 3} | 3 | 3/6 = **1/2** |
| 3 ka multiple aaye | {3, 6} | 2 | 2/6 = **1/3** |

Dhyan do: "prime" mein **1 nahi aata** (1 ke sirf ek factor hota hai, isliye wo prime nahi hai). Aur "4 se chhota" mein 4 khud nahi aata, sirf 1, 2 aur 3.

**Jaanch:** 1/6 ek chhoti probability hai, kyunki 6 mein se sirf ek face 4 hai. Aur 1/2 ka matlab "aadhe chances", jo 6 mein se 3 faces ke liye theek lagta hai ✅

### Example 3: 8 barabar sectors wala spinner

Ek spinner mein 8 barabar sectors hain, jin par 1 se 8 tak numbers likhe hain. Sample space = {1, 2, 3, 4, 5, 6, 7, 8}, kul = 8.

**(a) P(5 se bada number)**
- Favourable: {6, 7, 8}, ginti = 3
- P = **3/8** (decimal mein 0.375, yaani 37.5%)

**(b) P(odd number)**
- Favourable: {1, 3, 5, 7}, ginti = 4
- P = 4/8 = **1/2**

**Jaanch:** even numbers bhi {2, 4, 6, 8}, yaani 4 hain, to odd aur even ke chances barabar, 1/2 aur 1/2 ✅

### Example 4: Word "MATHEMATICS" se ek letter

"MATHEMATICS" ke saare letters ek-ek parchi par likhkar bag mein daale, aur ek parchi bina dekhe nikali. Pehle letters ginte hain, **repeat hone wale bhi**:

M, A, T, H, E, M, A, T, I, C, S: kul **11** letters.

**(a) P(vowel)**
- Vowels (A, E, I, O, U) jo word mein hain: A, E, A, I. Yaani **4** (A do baar aaya hai).
- P = **4/11**

**(b) P(letter M)**
- M do jagah hai (pehla aur chhatha letter), to favourable = 2
- P = **2/11**

**Jaanch:** vowels 4 + consonants (M, T, H, M, T, C, S = 7) = 11 ✅

### Example 5: 1 se 20 tak ek number

1 se 20 ke numbers mein se ek random number chuna gaya. Kul outcomes = **20**.

**(a) P(5 ka multiple)**
- 5, 10, 15, 20, yaani 4 numbers
- P = 4/20 = **1/5** (20%)

**(b) P(perfect square)**
- 1, 4, 9, 16 (yaani 1², 2², 3², 4²), kul 4 numbers
- P = 4/20 = **1/5**

**Jaanch:** 5² = 25 list mein nahi aata (25 > 20), isliye 4 hi squares hain. Aur 4/20 ko 4 se kaatne par 1/5 aata hai ✅

### Example 6: Lucky draw

Ek mele ke lucky draw mein **100 tickets** hain aur sirf ek ticket jeetta hai. Ritvik ke paas **5 tickets** hain. Uske jeetne ki probability?

- Kul outcomes = 100 (har ticket ke nikalne ke mauke barabar)
- Favourable = 5 (uske apne tickets)
- P(Ritvik jeete) = 5/100 = **1/20** (yaani 5%)

**Jaanch:** agar uske paas 10 tickets hote to 10/100 = 1/10, yaani chances doguna. Tickets doguni, chances doguna ✅

---

## Part E: Theoretical aur empirical, dono ka milan

Dono tareeke ek hi cheez ke baare mein hain, bas raaste alag hain:

| | Empirical (Topic 2) | Theoretical (is topic mein) |
|---|---|---|
| Kaise nikalte hain | Experiment karke, tally se | Sample space ginkar, sochkar |
| Formula | E kitni baar hua ÷ kul trials | Favourable outcomes ÷ kul barabar outcomes |
| Kya zaroori hai | Bahut saari trials | Outcomes barabar mauke wale hon |
| Jawab | Har baar thoda badal sakta hai | Ek pakka number |

### Kya dono jawab milte hain?

Topic 2 ke bottle-cap experiment mein humne dekha tha ki jaise-jaise trials badhti gayi, ratio ek jagah tikta gaya (0.400, 0.410, 0.415, 0.416). Cap ka koi theoretical number nahi tha, kyunki wo coin jaisa balanced nahi hai, isliye wahan experiment hi raasta tha. Par jahan outcomes barabar mauke wale hon, wahan dono tareeke milaye ja sakte hain. Wahi baat yahan bhi sach hai: **trials jitni zyada, empirical probability utna hi theoretical ke paas**.

Ye ek kalpanik (made-up) record hai, jisme Hema ne Ritvik se packet nikalwaye, **har baar packet wapas bag mein rakhkar**, aur laal ka hisaab likha. Theoretical P(laal) = 1/2 = 0.5.

| Kul trials | Laal kitni baar aaya | Empirical = laal ÷ trials | Theoretical |
|---|---|---|---|
| 20 | 11 | 11/20 = 0.55 | 0.5 |
| 100 | 52 | 52/100 = 0.52 | 0.5 |
| 1000 | 497 | 497/1000 = 0.497 | 0.5 |

Dhyan do, 1000 trials wali baar ka ratio 0.497 hai, jo 0.5 se bahut paas hai, jabki 20 trials wala 0.55 thoda door tha. Bottle-cap table jaisa hi nazaara.

**Ek zaroori baat** (Topic 2 ki Galti 3 yaad karo): theoretical probability bhi ye **nahi** kehti ki 10 baar uchhalne par theek 5 Head aayenge. Wo ye kehti hai ki **lambi race mein** Head lagbhag aadhi baar aayenge. Chhote trials mein thoda upar-neeche normal hai.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Alag-alag outcomes ko "barabar mauke wala" maan lena**

Ritvik ke bag mein 3 rang hain, to kya P(laal) = 1/3? **Nahi.** Laal ke 5 packet hain, isliye P(laal) = 5/10 = 1/2. Formula tabhi lagta hai jab hum **barabar mauke wali ikai** (ek-ek packet) ginte hain.

Ek aur jaal: do sikke uchhalne par "0 head, 1 head, 2 head", ye 3 nateeje hain. To kya har ek ke chances 1/3? **Ye bhi jaal hai!** In 3 nateejon ke mauke barabar nahi hain. Ye kyun hai, ye hum Topic 5 mein dekhenge. Abhi bas itna yaad rakho: **"kitne tarah ke nateeje hain" ginna kaafi nahi, dekhna padta hai ki wo barabar mauke wale hain ya nahi.**

**Galti 2: Favourable ÷ unfavourable likhna**

Die par P(even) nikalte waqt: favourable = 3, na-favourable (odd) = 3.
- Galat: 3 ÷ 3 = 1.
- Sahi: 3 ÷ **kul 6** = 3/6 = 1/2.

Neeche hamesha **kul outcomes** aate hain, sirf "na-favourable" nahi.

**Galti 3: Fraction ko simplify na karna**

Die par P(prime) = 3/6 likhkar chhod dena adhoora jawab hai. Sahi poora jawab: 3/6 = **1/2**. Hamesha fraction ko lowest terms mein likho.

**Galti 4: 1 ko prime maan lena**

Die par "prime" ke liye {1, 2, 3, 5} likh diya to P = 4/6 = 2/3 aa jayega, jo **galat** hai. 1 prime nahi hai, to sahi list {2, 3, 5} hai aur P = 3/6 = 1/2.

**Galti 5: Repeat hone wale letters bhool jaana**

"MATHEMATICS" mein letters ginte waqt agar M, A, T ko ek-ek baar hi ginoge, to kul letters 8 aayenge (M, A, T, H, E, I, C, S), jabki parchiyan **11** hain. Sahi: P(vowel) = 4/11, na ki 3/8. Jab bag mein har letter ki parchi alag hai, to repeat hone wale letters ki parchiyan bhi alag-alag ginni hain.

---

## Quick Recap

- **Random** matlab bina pasand ke, aankh band karke chunna. **Fair** matlab koi outcome doosre se zyada mauke wala nahi.
- **Sample space** = experiment ke saare possible outcomes. Sikka: {H, T}. Die: {1, 2, 3, 4, 5, 6}.
- Bag mein **packet** barabar mauke wale hain, **rang** nahi. Isliye P(laal) = 5/10, na ki 1/3.
- **P(E) = (E ke favourable outcomes) ÷ (kul barabar mauke wale outcomes)**.
- Holi bag: P(laal) = 1/2, P(hara) = 3/10, P(peela) = 1/5, aur teeno ka jod = 1.
- Hamesha fraction ko **lowest terms** mein likho, aur chaho to percent ya decimal bhi.
- Trials jitni zyada, **empirical probability** utni hi **theoretical probability** ke paas aati hai.
- Galtiyan: unequal outcomes ko barabar maanna, favourable ÷ unfavourable, simplify na karna, 1 ko prime ginna, repeated letters bhoolna.

---

## Practice Questions

1. A bag has 4 blue, 5 white and 3 black marbles. One marble is drawn without looking. Find (a) P(white), (b) P(blue or black). Give answers in lowest terms.

2. A fair die is rolled. Find the probability of getting an odd number greater than 1.

3. A letter is chosen at random from the word "PROBABILITY". Find (a) P(vowel), (b) P(the letter B).

4. A number is chosen at random from 1 to 30. Find (a) the probability that it is a multiple of 6, (b) the probability that it is a prime number.

5. A spinner has 10 equal sectors numbered 1 to 10. Find (a) P(prime number), (b) P(multiple of 4).

6. In a raffle there are 200 tickets and only one wins. A student holds 8 of them. Find the probability that this student wins, and write it as a percent.

7. A bag has 2 red and 6 blue balls. A student says, "There are 2 colours, so P(red) = 1/2." Find the mistake and give the correct probability.

8. State True or False:
   (a) In a bag with different numbers of red, green and yellow packets, each individual packet is equally likely to be picked when you pick blindly.
   (b) A bag has 3 colours, so the probability of each colour is 1/3.
   (c) P(E) = favourable outcomes ÷ unfavourable outcomes.
   (d) For a fair die, P(prime number) = 4/6, because the primes are 1, 2, 3 and 5.

### Answers

1. Kul marbles = 4 + 5 + 3 = 12.
   (a) White = 5, to P(white) = **5/12**.
   (b) Blue ya black = 4 + 3 = 7, to P = **7/12**.
   Jaanch: 4/12 + 5/12 + 3/12 = 12/12 = 1 ✅

2. Sample space {1, 2, 3, 4, 5, 6}, kul 6. Odd aur 1 se bade: {3, 5}, ginti 2. P = 2/6 = **1/3**.

3. "PROBABILITY" ke letters: P, R, O, B, A, B, I, L, I, T, Y. Kul **11**.
   (a) Vowels: O, A, I, I = 4, to P(vowel) = **4/11**.
   (b) B do baar aaya hai, to P(B) = **2/11**.
   Jaanch: consonants P, R, B, B, L, T, Y = 7, aur 4 + 7 = 11 ✅

4. Kul = 30.
   (a) 6 ke multiples: 6, 12, 18, 24, 30, yaani 5. P = 5/30 = **1/6**.
   (b) Primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, yaani 10. P = 10/30 = **1/3**.

5. Kul = 10.
   (a) Primes: 2, 3, 5, 7 = 4. P = 4/10 = **2/5**.
   (b) 4 ke multiples: 4, 8 = 2. P = 2/10 = **1/5**.

6. Kul 200, favourable 8. P = 8/200 = **1/25**. Percent: 1/25 = 4/100 = **4%**.
   Jaanch: 200 ÷ 8 = 25, to 8/200 = 1/25 ✅

7. Student ne rang ginke 2 mana, par **balls** barabar mauke wali ikai hain. Kul balls = 2 + 6 = 8, laal = 2. Sahi P(red) = 2/8 = **1/4**.
   Jaanch: P(blue) = 6/8 = 3/4, aur 1/4 + 3/4 = 1 ✅

8. (a) **True** ✅. Blindfold pick mein har packet ke mauke barabar hain, bhale hi rang ke packet kam-zyada hon.
   (b) **False** ❌. Rang ke mauke tab barabar hote jab har rang ke packet barabar ginti mein hote. Ritvik ke bag mein P(laal) = 1/2, na ki 1/3.
   (c) **False** ❌. Neeche **kul** outcomes aate hain.
   (d) **False** ❌. 1 prime nahi hai. Sahi primes {2, 3, 5}, to P = 3/6 = 1/2.

---

Ab aap bina ek bhi experiment kiye, sirf ginti se probability nikal sakte ho. Jab bhi koi sawaal mile, pehle sample space likho, phir favourable ginti karo, aur check karo ki outcomes sach mein barabar mauke wale hain ya nahi.

**Aage kya?** Ritvik ke bag mein P(laal) + P(hara) + P(peela) = 1 aaya tha. Ye ittefaq nahi hai. To kya koi probability 1 se bada ho sakti hai? Aur kya probability negative bhi ho sakti hai? Topic 4 mein pata chalega.
