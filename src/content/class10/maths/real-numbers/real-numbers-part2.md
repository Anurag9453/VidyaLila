# Chapter: Real Numbers (Part 2)

> **Class:** 10 | **Subject:** Mathematics
> **Ye file [real-numbers.md](real-numbers.md) se aage chalti hai** (wahan Topic 1 hai: Euclid ka Division Lemma aur Division Algorithm, yaani bachi hui cheez (remainder) ke sahare do numbers ka HCF nikalna).
> **Topics covered in this file:**
> 2. Fundamental Theorem Of Arithmetic: Har Number Ka Apna Prime Fingerprint

---

# Topic 2: Fundamental Theorem Of Arithmetic: Har Number Ka Apna Prime Fingerprint

Topic 1 mein humne do numbers ko bar bar divide karke unka HCF nikala. Wahan hum numbers ke **bahar** se kaam kar rahe the: divide karo, bachi hui cheez dekho, phir aage badho. Ab hum numbers ke **andar** jhaankenge. Har composite number chhote-chhote prime numbers ko gunakar (multiply karke) bana hota hai. Is topic ka bada sawaal hai: **ye banawat har number ki apni hai, ya ek hi number ko kai tarah se banaya ja sakta hai?** Iska jawab poore chapter ki sabse kaam ki baat ban jayega.

---

## Urvashi ke Papa ki eenton ki pallet

Urvashi ke Papa raj-mistri (mason) hain. Aaj wo ek ghar ki deewar ke liye eenton ki ek pallet taiyaar kar rahe the. Eenton ko ginna aasan rahe, isliye wo unhe **stage-by-stage** baandhte hain:

- Pehle stage mein **2 eenten** ka ek jodi-packet.
- Doosre stage mein **3 packet** ka ek bundle.
- Teesre stage mein **5 bundle** ki ek pallet.

Urvashi ne ginti ki: 2 × 3 × 5 = **30 eenten** ek pallet mein.

Phir Papa ne kaam ka order badal diya. Pehle 5 eenton ka packet, phir 2 packet ka bundle, phir 3 bundle ki pallet. Urvashi ne dobara ginti ki: 5 × 2 × 3 = **30**. Wahi.

Urvashi ko ek ajeeb sawaal soojha: "Papa, ye stage kisi bhi order mein lagao, size 2, 3 aur 5 hi rahte hain. Kya 30 eenton ko aise stages mein bhi baandha ja sakta hai jahan har stage ka size prime ho, par sizes koi aur hon?"

Papa hans kar bole, "Try karke dekh le. 2, 2 aur 7 ke stages se 28 eenten banti hain. 3, 3 aur 5 se 45. Tujhe 30 chahiye to wahi teen sizes milenge: 2, 3, 5. Order kuch bhi rakh le."

Urvashi sochne lagi: **kya har number ke saath aisa hi hota hai?** Kya har number ko prime sizes ke stages mein tod sakte hain, aur wo sizes (order chhodkar) ek hi hote hain, jaise number ka apna fingerprint ho? Agar ye sach hai, to ye bahut badi baat hai. Chalo isse samajhte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Prime factorisation** | Kisi number ko sirf prime numbers ke gunaa (product) ke roop mein likhna | 30 = 2 × 3 × 5 |
| **Prime factor** | Wo prime number jo kisi number ko poora-poora divide kar deta hai | 30 ke prime factors: 2, 3, 5 |
| **Factor tree** | Ulte ped jaisa chitra jisme number ko do factors mein todte jaate hain jab tak sirf primes na bachen | Figure 2.1 |
| **Division ladder** | Number ko lagatar primes se divide karte jaana, aur har kadam ko seedhi ki tarah neeche likhna (Topic 1 ki Euclid wali ladder se alag cheez) | Figure 2.3 |
| **Fundamental Theorem of Arithmetic** | Har composite number ko primes ke gunaa ke roop mein likha ja sakta hai, aur sirf ek hi tarah se (factors ka order chhodkar) | 30 = 2 × 3 × 5 = 5 × 2 × 3 |
| **Exponent form** | Prime factorisation mein jo prime baar baar aaye use power ke saath likhna, aur primes ko chhote se bade order mein rakhna | 1176 = 2³ × 3 × 7² |
| **Factors ki ginti** | Kisi number ke kul kitne factors hain (1 aur khud us number ko milakar) | 539 ke 6 factors hain |

---

## Class 9 se yaad

Class 9 Number Systems chapter ke [Topic 2](../../../class9/maths/number-systems/number-systems-part2.md) mein humne ye rule dekha tha: lowest form mein agar denominator mein **sirf 2 aur 5** hon to decimal ruk jata hai, aur 3, 7, 11 jaisa koi aur prime ho to nahi. Wahan ye kaha gaya tha ki 10, 100, 1000 mein sirf 2 aur 5 hi hote hain. Class 9 ke [Topic 3](../../../class9/maths/number-systems/number-systems-part3.md) mein √2 ke proof mein bhi "even number" jaisi baaton se kaam chala tha. Dono jagah hum primes ki ek khaas aadat ko bina naam diye use kar rahe the, aur wahi aadat aaj ka theorem hai. Is topic mein hum use naam denge, samjhenge aur kaam mein layenge. (Decimal wale rule ka poora "kyun" Topic 5 mein aayega.)

---

## Part A: Prime aur composite yaad, aur factor tree

### Class 6 se yaad

- **Prime number:** wo natural number jiske **bilkul do** factors hon: 1 aur khud wo number. Jaise 2, 3, 5, 7, 11, 13, 17, 19, 23, 29...
- **Composite number:** wo natural number jiske do se **zyada** factors hon. Jaise 12 (1, 2, 3, 4, 6, 12).
- **1** na prime hai na composite, kyunki uska sirf **ek** factor hai (khud 1). Prime banne ke liye do alag factors chahiye. Neeche dekhoge ki 1 ko prime maan liya jaye to ye theorem toot jata hai.

### Factor tree banana

Kisi composite number ko do factors mein todo (dono 1 se bade aur number se chhote). Phir har composite factor ko aur todo. Jab har sira (leaf) prime ho jaye, ruk jao.

**Example 1:** 1176 ko do alag factor trees se todo.

Tree 1 mein hum bada hissa aage todte jaate hain.

```
  1176
   / \
  2  588
     / \
    2  294
       / \
      2  147
         / \
        3  49
           / \
          7   7
```

> **Figure 2.1** – 1176 ka pehla factor tree: 1176 = 2 × 588, 588 = 2 × 294, 294 = 2 × 147, 147 = 3 × 49, 49 = 7 × 7. Leaves: 2, 2, 2, 3, 7, 7.

Tree 2 mein hum 1176 = 24 × 49 se shuru karte hain.

```
            1176
             / \
            /   \
           /     \
          /       \
         /         \
       24          49
       / \         / \
      /   \       7   7
     /     \
    4       6
   / \     / \
  2   2   2   3
```

> **Figure 2.2** – 1176 ka doosra factor tree: 1176 = 24 × 49, 24 = 4 × 6, 4 = 2 × 2, 6 = 2 × 3, 49 = 7 × 7. Leaves: 2, 2, 2, 3, 7, 7.

Dono trees ki shuruaat alag hai, shakal alag hai, par leaves ginoge to dono mein **2 teen baar, 3 ek baar, 7 do baar** hain.

1176 = 2 × 2 × 2 × 3 × 7 × 7 = 2³ × 3 × 7²

**Jaanch:** 2³ = 8, 7² = 49, 8 × 3 = 24, 24 × 49 = 1176 ✅

### Division ladder: tree ka seedha tareeka

Tree banane mein sochna padta hai ki pehle kaise split karein. Ladder mein sochna nahi padta: **sabse chhote prime se divide karte jao** jab tak wo divide kare. Jab na kare, agle prime par jao. Aakhir mein 1 aa jaye to ruko.

**Example 2:** 2340 ki prime factorisation division ladder se.

```
   2  |  2340
   2  |  1170
   3  |   585
   3  |   195
   5  |    65
  13  |    13
   -  |     1
```

> **Figure 2.3** – 2340 ki division ladder: baayein column ke primes (2, 2, 3, 3, 5, 13) hi 2340 ke prime factors hain.

Baayein column ke primes: 2, 2, 3, 3, 5, 13. To 2340 = 2² × 3² × 5 × 13.

**Jaanch:** 4 × 9 = 36, 36 × 5 = 180, 180 × 13 = 2340 ✅

---

## Part B: Fundamental Theorem of Arithmetic

Urvashi ke pallet-sawaal ka ab seedha jawab:

> **Fundamental Theorem of Arithmetic:** Har composite number ko primes ke gunaa (product) ke roop mein likha ja sakta hai, aur wo likhna **sirf ek hi tarah se** hota hai, bas primes ka order badal sakta hai.

(Kisi prime number ko hum "ek prime ka product" maan lete hain: 13 = 13.)

Isme do alag baatein chhupi hain.

**Baat 1: Likha ja sakta hai.** Composite number ko do factors mein todo. Agar koi factor abhi bhi composite hai, use bhi todo. Har todne par factors pehle se chhote hote jaate hain, aur 1 se neeche ja nahi sakte, isliye ye todna **kahin ruk jata hai**. Ruka kab? Jab koi factor aur toda hi na ja sake, yaani sab primes ho gaye. Factor tree yahi kaam karta hai.

**Baat 2: Sirf ek hi tarah se.** Isi mein Figure 2.1 aur 2.2 ka raaz hai. Alag shuruaat, alag trees, par leaves wahi. Fundamental Theorem kehta hai ki ye ittefaq nahi hai. Koi bhi tree banao, leaves ka ek hi group aayega. Ise hum number ka **prime fingerprint** kah sakte hain: jaise har insaan ka fingerprint alag hota hai, har number ki prime factorisation apni hoti hai, aur do alag numbers ki factorisation kabhi ek jaisi nahi hoti.

> Honest line: is "sirf ek hi tarah se" wali baat ka pakka proof is level se thoda lamba hai, isliye hum ise sach maankar aage badhte hain aur har example mein dekhenge ki ye kaam karti hai. Neeche ek ajeeb duniya hai jo dikhati hai ki ye baat sach maan lena chhoti cheez nahi, kyunki har jagah aisa nahi hota.

### Order se farak nahi padta

2 × 3 × 7 aur 7 × 2 × 3 ek hi factorisation hain, sirf likhne ka order alag hai (jaise Urvashi ki pallet ke 2, 3, 5 aur 5, 2, 3). Isliye hum hamesha primes ko **chhote se bade** order mein, exponent form mein likhte hain:

p₁ᵃ × p₂ᵇ × p₃ᶜ ... jahan p₁ < p₂ < p₃ ...

Jaise 2340 = 2² × 3² × 5 × 13. Aise likhne se do factorisations ko milana aasan ho jata hai: bas dekho ki primes aur powers wahi hain ya nahi.

### 1 ko list mein kyun nahi daalte?

Agar 1 ko prime maan lein, to 6 = 2 × 3 bhi hota, aur 6 = 1 × 2 × 3 bhi, aur 6 = 1 × 1 × 2 × 3 bhi, aur isi tarah anginat tareeke. "Sirf ek hi tarah se" wali baat toot jati. Isi ko bachane ke liye 1 ko prime nahi maana jata.

### Ek ajeeb duniya (sirf padhne ke liye)

Maan lo ek chhoti duniya hai jisme sirf wahi numbers hain jo 4 ke multiple se ek zyada hain: 1, 5, 9, 13, 17, 21, 25, ... Is duniya mein do numbers ka gunaa phir isi duniya ka number hota hai (jaise 5 × 9 = 45 = 44 + 1). Is duniya mein "prime" ka matlab: wo number (1 se bada) jo isi duniya ke do chhote numbers ke gunaa ke roop mein na likha ja sake.

Ab 693 lo. Is duniya mein 693 = 9 × 77 aur 693 = 21 × 33. 9, 77, 21 aur 33 mein se koi bhi is duniya ke andar aur nahi toota, kyunki unke asli factors (3, 7, 11) is duniya ke number hi nahi hain. Yaani is duniya mein 693 ko "primes" ke gunaa ke roop mein **do alag tareeke** se likha ja sakta hai.

Hamari asli duniya mein 693 = 3² × 7 × 11, aur bas yehi ek tareeka hai. 9 = 3 × 3, 77 = 7 × 11, 21 = 3 × 7, 33 = 3 × 11: asli duniya mein ye aur nahi tootne wale numbers (3, 7, 11) maujood hain, isliye dono tareeke ek hi fingerprint par pahunchte hain. Matlab "ek hi tarah se" wali baat har duniya mein sach nahi hoti. Hamare natural numbers mein sach hai, aur yahi unki khaas baat hai.

---

## Part C: Exponent form se factors ki ginti

Ek number ka har factor usi number ke primes se bana hota hai (kyunki primes ka group ek hi hai, koi bahar ka prime ghus nahi sakta). Isliye factors ginna aasan ho jata hai.

### Chhoti table se samjho: 539 = 7² × 11

Ek factor mein 7 kitni baar aa sakta hai? **0, 1 ya 2 baar** (3 choices). 11 kitni baar? **0 ya 1 baar** (2 choices). Har jodi ek factor deti hai:

| | 11⁰ = 1 | 11¹ = 11 |
|---|---|---|
| **7⁰ = 1** | 1 | 11 |
| **7¹ = 7** | 7 | 77 |
| **7² = 49** | 49 | 539 |

Table mein 3 × 2 = **6 factors** hain: 1, 7, 11, 49, 77, 539.

**Jaanch:** 539 ÷ 7 = 77, 539 ÷ 11 = 49, 539 ÷ 49 = 11, 539 ÷ 77 = 7. Sab poore divide hue, aur 2, 3, 5, 13 jaise primes se 539 divide nahi hota ✅

### Rule

Agar n = p₁ᵃ × p₂ᵇ × p₃ᶜ hai, to uske factors ki ginti = **(a + 1)(b + 1)(c + 1)**.

(Har prime ki power 0 se lekar uski poori power tak ja sakti hai: yaani a + 1 choices, aur choices ko gunate jaate hain.)

**Example 3:** 3150 ke kitne factors hain?

Kadam 1: 3150 = 2 × 1575 = 2 × 3 × 525 = 2 × 3 × 3 × 175 = 2 × 3² × 5² × 7.
Kadam 2: Exponents: 2¹, 3², 5², 7¹.
Kadam 3: Factors = (1 + 1)(2 + 1)(2 + 1)(1 + 1) = 2 × 3 × 3 × 2 = **36**.

**Jaanch:** 3150 perfect square nahi hai (56² = 3136, 57² = 3249), isliye factors jodiyon mein bantte hain: d aur 3150 ÷ d. Yaani ginti **even** honi chahiye, aur 36 even hai. Aur 2 × 9 × 25 × 7 = 3150 ✅

---

## Part D: Primes se divisibility pata karna

Kyunki har number ka prime fingerprint ek hi hota hai, **"a ko b divide karta hai ya nahi"** ka jawab primes se mil jata hai:

> Agar b ke saare primes (utni hi ya usse zyada powers mein) a ki factorisation mein bhi hain, to b, a ko divide karta hai. Ek bhi prime kam pad gaya, ya power kam padi, to nahi karta.

(Kyunki a = b × (kuch) ka matlab hai ki a mein b ke saare primes maujood hain, aur a ka fingerprint ek hi hai, to koi doosra raasta hai hi nahi.)

**Example 4:** 3150 mein kya 15 ka factor hai? 4116 mein 98, 15 aur 84? 8085 mein 55 aur 22?

- 3150 = 2 × 3² × 5² × 7. 15 = 3 × 5: 3 aur 5 dono maujood, **haan**. 3150 ÷ 15 = 210.
- 4116 = 2² × 3 × 7³ (4116 = 4 × 1029 = 4 × 3 × 343).
  - 98 = 2 × 7²: ek 2 chahiye (4116 mein do hain) aur 7² (7³ mein hain). **Haan**. 4116 ÷ 98 = 42.
  - 15 = 3 × 5: 5 hi nahi hai. **Nahi**. (4116 ÷ 15 mein remainder 6 bachta hai.)
  - 84 = 2² × 3 × 7: sab maujood. **Haan**. 4116 ÷ 84 = 49.
- 8085 = 3 × 5 × 7² × 11 (8085 = 5 × 1617 = 5 × 3 × 539).
  - 55 = 5 × 11: **Haan**. 8085 ÷ 55 = 147.
  - 22 = 2 × 11: 2 nahi hai (8085 odd hai). **Nahi**. (8085 ÷ 22 mein remainder 11 bachta hai.)

**Jaanch:** har "haan" ke saath ek divide karke dekha hai (210, 42, 49, 147), aur "nahi" wale mein remainder dekha ✅

Is tareeke ka ek aur fayda: agar b, a ko divide karta hai, to quotient bhi primes se pehchana jata hai. Jaise 3150 ÷ 14: 14 = 2 × 7, dono 3150 mein hain, to quotient = 3² × 5² = 225. Divide kiye bina, bas primes kaat do.

**Jaanch:** 14 × 225 = 3150 ✅

---

## Part E: Zero par khatam hone wale numbers

Kisi number ka aakhiri digit **0** tab hota hai jab wo number 10 se divide hota ho. Aur 10 = 2 × 5. To:

> Agar kisi number ki (ek hi) prime factorisation mein **2 aur 5 dono** hon, tabhi wo 0 par khatam ho sakta hai. Ek bhi kam ho to kabhi nahi.

Yahan Fundamental Theorem ka asli kaam dikhta hai. Koi doosri factorisation to hai hi nahi, to "kahin chhupa hua 5 mil jayega" wali baat galat hai.

Aur aakhiri digit **5** tab hota hai jab number 5 se divide ho **aur odd** ho (yaani factorisation mein 5 ho, 2 nahi).

**Example 5:** Kya 14ⁿ (n koi natural number) 0 par khatam ho sakta hai?

14ⁿ = (2 × 7)ⁿ = 2ⁿ × 7ⁿ. Isme sirf 2 aur 7 hain, **5 nahi hai**. Fundamental Theorem ke hisaab se is number ki koi aur factorisation nahi, to 5 kabhi nahi aayega. **Nahi**, 14ⁿ kabhi 0 par khatam nahi hoga.

**Jaanch:** 14¹ = 14, 14² = 196, 14³ = 2744, 14⁴ = 38416: aakhiri digits 4, 6, 4, 6 ✅

**Example 6:** Kya 12ⁿ 5 par khatam ho sakta hai?

12ⁿ = (2² × 3)ⁿ = 2²ⁿ × 3ⁿ. Prime factors sirf 2 aur 3. 5 nahi hai, to 12ⁿ 5 se divide hi nahi hota, aur 5 par khatam hone wale numbers 5 se divide hote hain. **Nahi**. (0 par bhi nahi, wajah wahi.)

**Jaanch:** 12¹ = 12, 12² = 144, 12³ = 1728, 12⁴ = 20736: aakhiri digits 2, 4, 8, 6 ✅

**Example 7:** 15ⁿ aur 20ⁿ ke aakhiri digit ke baare mein kya keh sakte hain?

- 15ⁿ = 3ⁿ × 5ⁿ: 2 nahi hai, to **0 par kabhi khatam nahi**. 5 factor hai aur number odd hai (3ⁿ × 5ⁿ mein 2 hai hi nahi), to har n ke liye aakhiri digit **5** hoga.
- 20ⁿ = (2² × 5)ⁿ = 2²ⁿ × 5ⁿ: 2 bhi hai, 5 bhi. To 10 hamesha divide karega. **Har n ke liye 0 par khatam.**

**Jaanch:** 15, 225, 3375, 50625 (sab 5 par khatam) aur 20, 400, 8000, 160000 (sab 0 par khatam) ✅

---

## Part F: Primes ke gunaa mein kuch jodna: composite ya prime?

Primes ki soch se kuch bade numbers ko **bina divide kiye** composite kaha ja sakta hai: bas dono hisson mein common factor dhoondo.

**Example 8:** 13 × 17 × 19 + 17 × 23 prime hai ya composite?

Dono hisson mein 17 common hai. 17 bahar nikalo:

13 × 17 × 19 + 17 × 23 = 17 × (13 × 19 + 23) = 17 × (247 + 23) = 17 × 270

Ye do factors (17 aur 270, dono 1 se bade) ka gunaa hai, to number **composite** hai.

**Jaanch:** 13 × 17 × 19 = 4199 aur 17 × 23 = 391. 4199 + 391 = 4590. Aur 17 × 270 = 4590 ✅

**Example 9:** 2 × 3 × 5 × 7 × 11 × 13 + 1 = 30031. Kya ye in primes (2, 3, 5, 7, 11, 13) mein se kisi se divide hota hai? Kya iska matlab ye prime hai?

2 × 3 × 5 × 7 × 11 × 13 = 30030. 30030 in sab primes se divide hota hai, to 30031 ko inme se kisi se bhi divide karne par remainder **1** bachta hai. Yaani in 6 primes mein se koi 30031 ko divide nahi karta.

Par isse ye nahi nikalta ki 30031 prime hai. 30031 = **59 × 509**: composite hai, par uske prime factors 59 aur 509 **hamari list se bahar** ke nikle.

**Jaanch:** 59 × 509 = 59 × 500 + 59 × 9 = 29500 + 531 = 30031 ✅

### Primes khatam kyun nahi hote?

Isi soch se ek bahut purani baat nikalti hai (Euclid ki). Maan lo primes ki ek poori, limited list hoti. Un sab ko gunakar 1 jodo, to ek aisa number milta hai jo list ke kisi bhi prime se divide nahi hota. Baat 1 (Part B) ke hisaab se uska koi prime factor to hoga, aur wo list ke bahar ka hoga, yaani list "poori" thi hi nahi. Matlab **primes anant (infinite) hain**. (Ye sirf ek jhalak hai, poora proof is topic ka hissa nahi.)

---

## Aam galtiyan (bachke rehna)

**Galti 1: "Tree alag hai, to factorisation bhi alag hai"**

7 × 11 × 13 = 1001. Ab 1001 ko teen alag tareekon se todo:

```
  1001            1001            1001
   / \             / \             / \
  7  143         11  91          13  77
     / \             / \             / \
   11  13           7  13           7  11
```

> **Figure 2.4** – 1001 ke teen alag factor trees: teeno mein pehla split alag hai (7 × 143, 11 × 91, 13 × 77), par leaves teeno mein 7, 11, 13 hi hain.

- Galat soch: "Teen alag trees hain, to teen alag factorisations hain."
- Sahi: Tree sirf **todne ka raasta** hai. Raasta alag ho sakta hai, par manzil (primes ka group) ek hi hai: 7 × 11 × 13. Fundamental Theorem yahi kehta hai. Do factorisations tabhi alag maani jaengi jab primes ya unki powers alag hon, sirf order ya tree alag hone se nahi. (Jaise 7 × 11 × 13 aur 13 × 7 × 11 ek hi hain.)

**Galti 2: "1 ko factor list mein jod sakte hain"**

- Galat soch: "7 × 11 × 13 ke saath 1 bhi jod do: 1 × 7 × 11 × 13. Ye bhi to 1001 hai, to factorisation do ho gayi."
- Sahi: 1 prime nahi hai, to prime factorisation mein 1 likhne ka sawaal hi nahi. Agar likhne dein to 1001 = 1 × 7 × 11 × 13 = 1 × 1 × 7 × 11 × 13 = 1 × 1 × 1 × 7 × 11 × 13 ... kabhi khatam na hone wali list ban jayegi, aur "sirf ek hi tarah se" wali baat khatam ho jayegi. 1 har number ka factor hota hai (factors ki ginti mein ginte hain), par wo **prime factor** nahi hota.

---

## Quick Recap

- **Prime**: bilkul do factors (1 aur khud). **Composite**: do se zyada factors. **1**: na prime, na composite.
- Factor tree ya division ladder se number ko primes mein todo.
- **Fundamental Theorem of Arithmetic**: har composite number primes ke gunaa ke roop mein likha ja sakta hai, aur sirf ek hi tarah se (order chhodkar). Ye number ka prime fingerprint hai.
- Hamesha **exponent form** mein likho: primes chhote se bade, powers ke saath.
- Alag factor trees ka matlab alag factorisation nahi hota. 1 ko factorisation mein nahi likhte.
- n = p₁ᵃ × p₂ᵇ × p₃ᶜ ho to factors ki ginti (a + 1)(b + 1)(c + 1).
- "b, a ko divide karta hai?" ka jawab primes se: b ke saare primes (powers ke saath) a mein hain ya nahi.
- 0 par khatam hone ke liye factorisation mein 2 aur 5 dono chahiye. 5 par khatam hone ke liye 5 chahiye aur number odd ho.
- Primes ke gunaa mein kuch jodne par composite pakadne ke liye common factor dhoondo. Primes anant hain.

---

## Practice Questions

1. Find the prime factorisation of 81719 using a division ladder, and write it in exponent form.
2. Draw two different factor trees for 4862 (the first split must be different in the two trees) and show that both give the same prime factors.
3. How many factors does 539539 have? (Find its prime factorisation first.)
4. Using prime factorisations only, decide which of 52, 70, 33 and 130 are factors of 12740.
5. Can 28ⁿ end with the digit 0 for any natural number n? Explain.
6. Does 55ⁿ end with 0 for any natural number n? What digit does it end with? Explain.
7. Without a calculator, say whether each is prime or composite, with a reason: (a) 5 × 11 × 13 + 11 × 19, (b) 2 × 7 × 23 + 23.
8. The number 7 × 11 × 13 × 17 + 1 is not divisible by 7, 11, 13 or 17. Is it prime? Find out.
9. The number N = 2ᵃ × 3² × 7 has exactly 24 factors. Find a, and then find N.
10. By what smallest natural number must 646 be multiplied so that the product is divisible by 2² × 17 × 19 × 23?
11. State true or false, with a one-line reason: (a) 1 is a prime number because its only factors are 1 and itself. (b) 119 = 7 × 17 and 119 = 17 × 7 are two different prime factorisations of 119. (c) Every natural number greater than 1 can be written as a product of primes. (d) If 3 is not in the prime factorisation of a number, the number is never divisible by 3.
12. For which of the numbers 22, 35, 40 and 65 does the power (number)ⁿ end with 0 for some natural number n? Explain using primes.

### Answers

1. Ladder: 81719 ÷ 11 = 7429, 7429 ÷ 17 = 437, 437 ÷ 19 = 23, 23 ÷ 23 = 1.
   Primes: 11, 17, 19, 23, har ek ek baar. To 81719 = **11 × 17 × 19 × 23**.
   Jaanch: 11 × 17 = 187, 19 × 23 = 437, 187 × 437 = 81719 ✅

2. Tree 1: 4862 = 2 × 2431, 2431 = 11 × 221, 221 = 13 × 17. Leaves: 2, 11, 13, 17.
   Tree 2: 4862 = 22 × 221, 22 = 2 × 11, 221 = 13 × 17. Leaves: 2, 11, 13, 17.
   Pehle split alag the (2 × 2431 aur 22 × 221), par leaves wahi: **4862 = 2 × 11 × 13 × 17**.
   Jaanch: 22 × 221 = 4862 aur 2 × 2431 = 4862 ✅

3. 539539 = 7 × 77077 = 7 × 7 × 11011 = 7 × 7 × 7 × 1573 = 7³ × 11 × 11 × 13 = 7³ × 11² × 13.
   Exponents: 3, 2, 1. Factors = (3 + 1)(2 + 1)(1 + 1) = 4 × 3 × 2 = **24**.
   Jaanch: 343 × 121 = 41503 aur 41503 × 13 = 539539. Aur 539539 perfect square nahi, jabki 24 even hai ✅

4. 12740 = 2² × 5 × 7² × 13 (12740 = 4 × 3185 = 4 × 5 × 637 = 4 × 5 × 7² × 13).
   - 52 = 2² × 13: dono maujood, **haan** (12740 ÷ 52 = 245).
   - 70 = 2 × 5 × 7: sab maujood, **haan** (12740 ÷ 70 = 182).
   - 33 = 3 × 11: 3 aur 11 dono nahi, **nahi**.
   - 130 = 2 × 5 × 13: sab maujood, **haan** (12740 ÷ 130 = 98).
   Jaanch: 12740 ÷ 33 mein remainder 2 bachta hai, to 33 factor nahi ✅

5. 28ⁿ = (2² × 7)ⁿ = 2²ⁿ × 7ⁿ. Isme 5 nahi hai. 0 par khatam hone ke liye 10 = 2 × 5 se divide hona chahiye, to 5 chahiye. **Nahi**, kisi bhi n ke liye 28ⁿ 0 par khatam nahi hoga.
   Jaanch: 28, 784, 21952, 614656: aakhiri digits 8, 4, 2, 6 ✅

6. 55ⁿ = 5ⁿ × 11ⁿ. Isme 2 nahi hai, to 10 se divide nahi hoga: **0 par kabhi khatam nahi hoga**. 5 factor hai aur number odd hai, to har n ke liye aakhiri digit **5**.
   Jaanch: 55, 3025, 166375 sab 5 par khatam ✅

7. (a) 5 × 11 × 13 + 11 × 19 = 11 × (5 × 13 + 19) = 11 × (65 + 19) = 11 × 84. **Composite** (11 common hai).
   Jaanch: 715 + 209 = 924 aur 11 × 84 = 924 ✅
   (b) 2 × 7 × 23 + 23 = 23 × (2 × 7 + 1) = 23 × 15. **Composite** (23 common hai).
   Jaanch: 322 + 23 = 345 aur 23 × 15 = 345 ✅

8. 7 × 11 × 13 × 17 = 17017, jo odd hai (odd numbers ka gunaa odd). Isme 1 jodne par 17018 milta hai, jo **even** hai, to 2 se divide hota hai. Aur 17018 > 2, to ye **composite** hai: 17018 = 2 × 8509 = 2 × 67 × 127. (Ye teeno prime 7, 11, 13, 17 se alag hain.)
   Jaanch: 67 × 127 = 8509 aur 2 × 8509 = 17018 ✅

9. Factors ki ginti = (a + 1)(2 + 1)(1 + 1) = (a + 1) × 6 = 24, to a + 1 = 4, **a = 3**.
   N = 2³ × 3² × 7 = 8 × 9 × 7 = **504**.
   Jaanch: 504 ke factors (3 + 1)(2 + 1)(1 + 1) = 24 ✅

10. 646 = 2 × 17 × 19. Chahiye: 2² × 17 × 19 × 23. Kam hai: ek aur 2 aur ek 23. Multiplier = 2 × 23 = **46**.
    Jaanch: 646 × 46 = 29716 aur 2² × 17 × 19 × 23 = 4 × 17 × 19 × 23 = 29716 ✅

11. (a) **False** ❌. Prime ke bilkul do alag factors hone chahiye, 1 ka sirf ek factor hai.
    (b) **False** ❌. Dono mein primes 7 aur 17 hain, sirf order alag hai, to ek hi factorisation hai.
    (c) **True** ✅. Prime number ko "ek prime ka product" maante hain, aur composite ko factor tree se todte hain.
    (d) **True** ✅. Fingerprint ek hi hai aur usme 3 nahi, to 3 uska factor nahi ho sakta.

12. 0 par khatam hone ke liye 2 aur 5 dono chahiye.
    - 22 = 2 × 11: 5 nahi, **nahi**.
    - 35 = 5 × 7: 2 nahi, **nahi**.
    - 40 = 2³ × 5: dono maujood, **haan** (har n ke liye 40ⁿ mein 2 aur 5 dono rahenge).
    - 65 = 5 × 13: 2 nahi, **nahi**.
    Jaanch: 40, 1600, 64000 sab 0 par khatam; 22ⁿ ke aakhiri digits 2, 4, 8, 6 chalte hain; 35ⁿ aur 65ⁿ 5 par khatam hote hain ✅

---

Ab tumhare paas har number ko dekhne ka ek naya tareeka hai: uski prime banawat, jo sirf usi ki hoti hai. Jab bhi koi bada number dikhe, usse darne ki jagah ek ladder bana lo.

**Aage kya?** Primes ka ye fingerprint do numbers ki common cheezein bhi dikha deta hai. Topic 3 mein dekhenge ki HCF aur LCM ko in primes ki powers se seedha kaise nikala jata hai.
