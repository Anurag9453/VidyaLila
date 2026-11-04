# Chapter: Probability

> **Class:** 9 | **Subject:** Mathematics
> **Ye is chapter ki pehli file hai.** Zaroorat padne par yaad dilane ke liye: fractions aur decimals [number-systems-part2.md](../number-systems/number-systems-part2.md) mein, tally aur frequency table [statistics-part2.md](../statistics/statistics-part2.md) mein.
> **Topics covered in this file:**
> 1. Probability kya hai

---

# Topic 1: Probability kya hai

Is chapter mein hum **chance** ko maths ki nazar se dekhna seekhenge: "shayad ho jayega" jaisi baat ko ek **number** mein badalna. Pehle topic mein koi calculation nahi hogi. Bas ye samajhna hai ki chance ki baat karte waqt humein kaun-kaun se shabd chahiye, aur kaunsi cheezein "random" kehlati hain. Zero se shuru kar rahe hain, to koi tension nahi.

---

## Gully cricket ka toss

Shaam ke paanch baje hain. Society ke peeche wali gali mein gully cricket ka match hone wala hai. Do captains hain: **Aryan** aur **Mahi**. Sabse pehle toss hoga, ki kaun pehle batting karega.

Mahi ne jeb se ₹5 ka sikka nikala. "Aryan, tu bol."

Aryan ne bola, "**Heads**."

Sikka hawa mein uchhla, ghoomta hua neeche aaya, aur zameen par gir kar ruk gaya. Sab bachhe jhuk gaye dekhne ke liye. Aryan ne khushi se haath uthaya: "Heads! Pehle batting meri."

Piche se ek bachha bola, "Ye toss fair tha kya? Mahi ne hi to uchhala."

Mahi hans diya. "Arre, sikka kisi ka dost nahi hota. Heads aaye ya tails, dono ke chance barabar hain."

Aryan ne socha. "Barabar chance? Matlab 50-50? Par maths mein 'chance' ka matlab hota kya hai?"

Dono bahas karne lage:

- Mahi: "Kal sab keh rahe the ki baarish **shayad** aayegi."
- Aryan: "Aur suraj kal subah **pakka** nikalega."
- Mahi: "Aur main ek hi din mein 10 km daud lun, ye to **namumkin** hai."

"Shayad", "pakka", "namumkin": ye teeno chance ki baat hi to kar rahe hain. Par inme ek dikkat hai. "Shayad" kitna shayad? Ek "shayad" mein 90% umeed ho sakti hai, doosre mein sirf 10%. Aryan ke "shayad" aur Mahi ke "shayad" mein bhi farak ho sakta hai. Ye shabd maths ke liye kaafi **saaf** nahi hain.

Isliye maths kehta hai: chance ko **number** mein likho. Tab sab ek hi bhasha bolenge. Number kaise banta hai, wo hum aage ke topics mein seekhenge. Is topic mein hum bas wo **shabd** seekhenge jinke bina chance ki baat shuru hi nahi hoti.

---

## Chance ke shabd, aur number ka idea

Roz ki zindagi mein hum chance ke liye aise shabd bolte hain:

| Hum kya bolte hain | Matlab |
|---|---|
| "Pakka hai" | Ye hone se rok hi nahi sakta |
| "Namumkin hai" | Ye ho hi nahi sakta |
| "Ho sakta hai" | Kabhi ho jata hai, kabhi nahi |
| "50-50" | Hone ke aur na hone ke chance barabar |

Maths in sab ko ek **number** deta hai, jo **0 se 1** ke beech rehta hai. Namumkin cheez ke liye number sabse chhota hota hai, pakki cheez ke liye sabse bada, aur baaki sab beech mein. Ye sirf ek jhalak hai. Ye number nikalna aur iska poora matlab aage ke topics mein aayega. Abhi bas itna yaad rakho: **chance ko number mein badla ja sakta hai**.

Is number ke liye maths ka naam hai **probability**.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Experiment** | Koi bhi kaam jo hum dobara-dobara kar sakte hain | Sikka uchhalna, dice phenkna, bag se gend nikalna |
| **Random experiment** | Aisa experiment jisme result **pehle se pata nahi** hota | Toss mein heads aayega ya tails, pehle se nahi pata |
| **Trial** | Experiment ko **ek baar** karna | Sikka ek baar uchhala, to ek trial |
| **Outcome** | Ek trial ka **ek** possible result | Sikke ka heads aana |
| **Event** | Outcomes ka ek **group**, jis par hum dhyan de rahe hain (ek outcome ka bhi ho sakta hai) | Dice par "even number aana" |
| **Certain event** | Aisa event jo **pakka** hota hai | Dice par 7 se chhota number aana |
| **Impossible event** | Aisa event jo **ho hi nahi sakta** | Normal dice par 7 aana |
| **Fair** | Har outcome ka chance **barabar** | Aam sikka: heads aur tails dono ke chance barabar |

---

## Part A: Experiment aur random experiment

**Experiment** matlab koi bhi kaam jo hum kar sakte hain aur dobara kar sakte hain. Jaise:

- Sikka uchhalna
- Dice phenkna
- Gend nikalna

Ab dhyan do: har experiment random nahi hota. **Random experiment** woh hai jisme har baar karne par result alag aa sakta hai, aur hum **pehle se nahi bata sakte** ki kya aayega.

### Random experiments ke examples

1. **Sikka uchhalna.** Heads aayega ya tails, kuch nahi pata.
2. **Dice phenkna.** 1 se 6 mein se koi bhi number aa sakta hai.
3. **Wheel ghumana.** Jaise mele mein ek chakra ghoomta hai aur ruk kar kisi rang par thehrta hai. Kis rang par rukega, pata nahi.
4. **Bag mein se aankhein band karke gend nikalna.** Kaunsi gend haath aayegi, pata nahi.

### Jo random nahi hain

1. **Ek gend ko oonchai se chhodna.** Wo neeche hi girega. Result pehle se pata hai.
2. **Paani ko 100 degree Celsius par garam karna (normal halat mein).** Wo ubalega hi.
3. **Aaj Monday hai, to kal kaun sa din hoga?** Tuesday. Pakka.

In sab mein result pehle se pata hai. Isliye ye random experiments nahi hain, aur inpar probability ka sawaal bhi nahi banta.

**Khud se poochho:** "Kya main result pehle se bata sakta hoon?" Agar haan, to random nahi. Agar nahi, to random.

---

## Part B: Trial aur outcome

**Trial** matlab experiment ko **ek baar** karna. Aryan ne sikka ek baar uchhala, to wo **ek trial** tha. Agar wo sikka 3 baar uchhale, to **3 trials** hue.

**Outcome** matlab ek trial ka **ek** result. Aryan ke toss ka outcome tha: Heads.

### Possible outcomes likhna

Kisi bhi random experiment mein pehla kaam hai: **saare possible outcomes ki list banana**.

**1. Sikka uchhalna**
- Possible outcomes: **H** (Heads) aur **T** (Tails)
- Kul 2 outcomes.

**2. Ek dice phenkna**
- Possible outcomes: **1, 2, 3, 4, 5, 6**
- Kul 6 outcomes.

**3. Bag mein 3 laal (red) aur 2 neeli (blue) gend hain, aankh band karke ek gend nikalna**
- Possible outcomes: **red** aur **blue**
- Yahan sirf 2 *tarah* ke outcomes hain, kyunki hum sirf rang dekh rahe hain. Par bag mein 5 gend hain, aur red 3 hain, blue 2. Isi baat ka asar aage chance par padega. Wo hum aage ke topics mein dekhenge.

**Dhyan do:** outcome hamesha **ek hi trial** ka **ek hi result** hota hai. "Dice par 2 aur 4 dono aana" ek trial ka outcome nahi hai, kyunki ek baar mein ek hi number upar aata hai.

---

## Part C: Event

Kabhi hum sirf ek outcome mein dilchaspi nahi rakhte. Kabhi hum chahte hain ki "**kuch bhi aisa aaye jo mere kaam ka ho**". Aise outcomes ke group ko **event** kehte hain.

**Event = wo outcomes jinse hamari shart poori hoti hai.**

### Example 1: Dice par 4 aana

- Event: "4 aana"
- Outcomes jo is event ko hone dete hain: sirf **4**
- Yaani event mein **1 outcome** hai.

### Example 2: Dice par even number aana

- Event: "even number aana"
- Dice ke outcomes: 1, 2, 3, 4, 5, 6
- Inme even number: **2, 4, 6**
- Yaani event mein **3 outcomes** hain. Dice par in teeno mein se koi bhi aaye, to event ho gaya.

### Example 3: Dice par 4 se bada number aana

- Event: "4 se bada number aana"
- Outcomes: **5, 6**
- Event mein 2 outcomes hain.

### Example 4: Bag (3 red, 2 blue), gend nikalna

- Event: "gend red aana"
- Outcome: **red**
- Event: "gend red ya blue aana": dono outcomes.

### Practice: "Kaun se outcomes is event ko banate hain?"

Dice ke liye likho:

| Event | Outcomes jo event banate hain |
|---|---|
| Odd number aana | 1, 3, 5 |
| 3 se chhota number aana | 1, 2 |
| 5 aana | 5 |
| 2 ya 3 ya 5 (prime number) aana | 2, 3, 5 |

Sikke ke liye:

| Event | Outcomes |
|---|---|
| Heads aana | H |
| Heads ya tails aana | H, T |

**Tareeka:** pehle saare possible outcomes likho, phir ek-ek ko dekho ki shart poori hoti hai ya nahi.

---

## Part D: Certain event aur impossible event (halki si jhalak)

Kuch events aise bhi hote hain jinke bare mein sochne ki zaroorat hi nahi padti.

**Dice par 7 se chhota number aana.** Dice ke saare outcomes 1 se 6 hain, aur ye sab 7 se chhote hain. Chahe jo bhi aaye, event ho hi jayega. Isko **certain event** kehte hain: ye **pakka** hota hai.

**Dice par 7 aana.** Dice par 1 se 6 tak hi number hote hain, 7 hota hi nahi. Ye event kabhi nahi ho sakta. Isko **impossible event** kehte hain: ye **namumkin** hai.

Ek aur example: bag mein sirf red gendein hon, to "gend red aana" certain hai, aur "gend blue aana" impossible hai.

Aryan ke "pakka" aur "namumkin" wale shabd yahan aa gaye. Ye dono events ke bare mein aage ke ek topic mein detail se baat karenge. Abhi bas pehchanna seekh lo.

---

## Part E: Fair aur unfair

Mahi ne kaha tha, "Heads aaye ya tails, dono ke chance barabar hain." Is baat ko maths mein kehte hain: **sikka fair hai**.

> **Fair:** jab har outcome ke aane ka chance **barabar** ho.

- **Fair sikka:** heads aur tails ke chance barabar.
- **Fair dice:** 1, 2, 3, 4, 5, 6, sabke chance barabar. Dice ka har face ek jaisa hona chahiye.

Isliye Aryan aur Mahi ka toss **fair** tha. Kisi ke haath mein uchhalne se koi farak nahi padta.

Ab socho agar Mahi ke paas ek **nakli sikka** hota, jisme ek taraf ka wazan zyada hota. Wo sikka baar-baar ek hi side par girta. Aise sikke ko **unfair** (ya loaded) sikka kehte hain. Isi tarah ek dice jisme andar ek taraf seesa bhara ho, wo bhi unfair hoga: kuch numbers zyada aate, kuch kam.

Aage ke topics mein jahan bhi kaha jaye ki "ek sikka uchhala gaya" ya "ek dice phenka gaya", hum maan lenge ki wo **fair** hai, jab tak kuch aur na bataya jaye.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Outcome aur event ko ek samajh lena**

- Dice par "4 aana" ek outcome bhi hai, aur ek event bhi (jisme sirf ek outcome hai).
- Par "even number aana" ek **event** hai, kyunki isme 3 outcomes (2, 4, 6) hain. Isko "ek outcome" nahi keh sakte. Ek trial mein dice par jo number aata hai wo ek outcome hota hai: maan lo 6 aaya. Is outcome se "even number aana" wala event **ho gaya**, par event ka matlab sirf 6 nahi hai.

Yaad rakho: **outcome = ek result. Event = outcomes ka group.**

**Galti 2: "H aaya, to ab T aayega"**

Aryan ne soch liya: "Pichhli teen baar heads aaya hai, ab to tails aayega hi aayega." Ye **gambler's mistake** hai, yaani jugaadu ki galat soch. Sikka kuch yaad nahi rakhta. Har naye toss mein heads aur tails ke chance phir se barabar hote hain, chahe pehle kitni bhi baar heads aaya ho. **Pichhle tosses agle toss ko nahi badalte.**

**Galti 3: "50-50" matlab ek baar H, ek baar T**

Kuch log sochte hain ki 50-50 ka matlab hai ki sikka alternate karega: H, T, H, T. Ye galat hai. "50-50" ka matlab hai ki **dono outcomes ke chance barabar hain**, ye nahi ki wo baari-baari se aayenge. Fair sikke par H, H, H, T bhi aa sakta hai, aur T, T, H bhi.

**Galti 4: Har cheez ko random samajhna**

"Ek gend oonchai se chhodi" ko random experiment mat samjho. Result pehle se pata hai, wo neeche hi girega.

---

## Quick Recap

- Chance ko "shayad", "pakka", "namumkin" se bhi bol sakte hain, par maths ek **number** (0 se 1 ke beech) maangta hai. Isi number ko **probability** kehte hain. Ye number kaise nikalte hain, wo aage ke topics mein.
- **Experiment:** koi bhi kaam jo dobara kiya ja sake. **Random experiment:** jisme result pehle se pata nahi hota (sikka, dice, wheel, bag se gend).
- **Trial:** experiment ko ek baar karna. **Outcome:** ek trial ka ek result.
- Possible outcomes: sikka ke **H, T**; dice ke **1 se 6**; bag (3 red, 2 blue) ke **red, blue**.
- **Event:** outcomes ka group jo hamari shart poori kare. Event mein ek outcome ho sakta hai (4 aana) ya kai (even number: 2, 4, 6).
- **Certain event:** pakka hota hai (dice par 7 se chhota number). **Impossible event:** ho hi nahi sakta (dice par 7).
- **Fair:** har outcome ka chance barabar. Loaded sikka ya dice unfair hota hai.
- Galtiyan: outcome aur event ko mila dena; "pehle H aaya to ab T aayega" sochna (gambler's mistake); "50-50" ko "baari-baari" samajhna.

---

## Practice Questions

1. Which of the following are random experiments? Give a reason for each.
   (a) Spinning a wheel that has four coloured sections.
   (b) Dropping a stone from a roof and watching where it goes.
   (c) Drawing a card without looking from a set of cards that are all different.
   (d) Counting the days in the week after Sunday.

2. Write all the possible outcomes of each experiment.
   (a) Tossing a coin once.
   (b) Rolling a die once.
   (c) Drawing one ball without looking from a bag that has 2 green balls and 4 yellow balls.

3. A die is rolled once. List the outcomes that make each event happen.
   (a) Getting a number greater than 2.
   (b) Getting an odd number.
   (c) Getting a 6.
   (d) Getting a number that divides 6 exactly.

4. Aryan tosses a coin and gets heads. Is "getting heads" an outcome or an event? Now a die is rolled and the result is "getting an even number". Is this an outcome or an event? Explain the difference.

5. A die is rolled once. Say whether each event is certain, impossible, or neither.
   (a) Getting a number less than 10.
   (b) Getting a 0.
   (c) Getting a 3.
   (d) Getting a number between 1 and 6, both included.

6. Mahi tosses a fair coin 4 times and gets H, H, H, H. Aryan says, "Now T is bound to come on the fifth toss." Is he right? Explain in your own words.

7. State True or False, with a short reason.
   (a) A coin that always lands on heads is a fair coin.
   (b) "50-50" means a coin will show H and T alternately.
   (c) The outcomes of a die roll are 1, 2, 3, 4, 5, 6.
   (d) An event can have more than one outcome.

### Answers

1. (a) **Random.** Wheel kis section par rukegi, pehle se nahi pata.
   (b) **Random nahi.** Patthar neeche hi girega, result pehle se pata hai.
   (c) **Random.** Bina dekhe card nikalne par kaunsa aayega, pata nahi.
   (d) **Random nahi.** Sunday ke baad Monday hi aata hai, pakka.

2. (a) **H, T**. Kul 2 outcomes.
   (b) **1, 2, 3, 4, 5, 6**. Kul 6 outcomes.
   (c) **green, yellow**. (Bag mein 6 gend hain, par rang ke hisaab se 2 tarah ke outcomes hain.)

3. Dice ke outcomes: 1, 2, 3, 4, 5, 6.
   (a) 2 se bade: **3, 4, 5, 6**.
   (b) Odd: **1, 3, 5**.
   (c) **6**. Sirf ek outcome.
   (d) 6 ko exactly divide karne wale numbers: 1, 2, 3, 6. Jaanch: 6 ÷ 1 = 6, 6 ÷ 2 = 3, 6 ÷ 3 = 2, 6 ÷ 6 = 1, sab poore divide hote hain ✅. 4 aur 5 se 6 poora divide nahi hota. Event ke outcomes: **1, 2, 3, 6**.

4. "Heads aana" ek **outcome** hai (sikke ka ek possible result). Par isko ek event bhi kaha ja sakta hai jisme sirf ek outcome hai.
   "Even number aana" ek **event** hai, kyunki isme teen outcomes (2, 4, 6) hain. Jab dice ek baar phenka jata hai, to jo ek number aata hai wo outcome hai. Event ka matlab hai outcomes ka group.

5. (a) **Certain.** Dice par 1 se 6 hi aate hain, sab 10 se chhote hain.
   (b) **Impossible.** Dice par 0 hota hi nahi.
   (c) **Neither.** 3 aa bhi sakta hai, nahi bhi aa sakta.
   (d) **Certain.** 1 se 6 tak ke saare outcomes is event mein aate hain.

6. Aryan **galat** hai. Ye gambler's mistake hai. Sikka pichhle tosses yaad nahi rakhta. Fair sikke par har naye toss mein H aur T ke chance barabar hote hain, chahe pehle chaar baar H aaya ho.

7. (a) **False** ❌. Fair sikke mein H aur T ke chance barabar hone chahiye. Jo sikka hamesha H dikhaye wo unfair hai.
   (b) **False** ❌. 50-50 ka matlab dono outcomes ke chance barabar hain, ye nahi ki wo baari-baari se aayenge.
   (c) **True** ✅. Ek dice ke yahi 6 possible outcomes hain.
   (d) **True** ✅. Jaise "even number aana" mein 2, 4, 6 teen outcomes hain.

---

Aaj aapne chance ki baat karne ke shabd seekh liye: experiment, random, trial, outcome, event. Inhi se aage ki saari probability banegi.

**Aage kya?** Aryan aur Mahi ne sikka sirf ek baar uchhala tha. Par agar wo use 10 baar, 50 baar, ya 100 baar uchhalein to kya hoga? Kya heads aur tails sach mein lagbhag barabar aayenge? Topic 2 mein: ek bottle cap aur ek sikka kai-kai baar uchhaal kar dekhenge, aur ginti se chance ka number banayenge.
