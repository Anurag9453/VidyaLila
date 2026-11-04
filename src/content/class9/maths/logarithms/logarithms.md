# Chapter: Logarithms

> **Class:** 9 | **Subject:** Mathematics
> **Ye chapter in files par tika hai (pehle dekh lo):** [number-systems-part6.md](../number-systems/number-systems-part6.md) (exponents ke laws aur rational exponents) aur [exponents.md](../../../class8/maths/exponents/exponents.md) (Class 8 ka exponents chapter).
> **Topics covered in this file:**
> 1. Logarithm kya hai

---

# Topic 1: Logarithm kya hai

Exponents ke chapter mein humne dekha tha ki 2⁶ ka matlab hai 2 ko 6 baar khud se multiply karna, yaani 64. Wahan hamesha **base aur power diye hote the, aur hum number nikalte the**. Is chapter mein hum **ulta** sawaal poochhenge: number diya hai (64), base diya hai (2), to power kitni thi?

Isi ulte sawaal ka ek chhota, sundar naam hai **logarithm**. Naam bhaari lagta hai, par aap dekhoge ki ye bas "kis power par?" poochhne ka ek short tareeka hai. Is topic mein hum sirf wo power dhoondhenge jo seedhi ginti se mil jaati hai. Aur ye samajh aayega ki log likhte kaise hain, padhte kaise hain, aur kab nahi likh sakte.

---

## Bacteria ki ginti

Ek microbiology lab mein Dr. Ismail ek petri dish ke saamne baithe hain. Unka intern Kavin pehle din aaya hai aur bahut utsuk hai. Dish mein ek bacteria culture hai, jo **har ghante mein double ho jata hai**. Shuru mein dish mein sirf **1 bacterium** tha.

Dr. Ismail ne register mein ye likha:

| Ghanta | Bacteria | Power ke roop mein |
|---|---|---|
| 0 | 1 | 2⁰ |
| 1 | 2 | 2¹ |
| 2 | 4 | 2² |
| 3 | 8 | 2³ |
| 4 | 16 | 2⁴ |
| 5 | 32 | 2⁵ |
| 6 | 64 | 2⁶ |

Kavin ne table dekhi aur poochha, "Sir, kitne ghante baad 64 ho jayenge?"

Dr. Ismail muskuraye. "Tum khud dhoondho. Table ko dekho: 2 ki kaun si power 64 deti hai?"

Kavin ne ginti ki: 2, 4, 8, 16, 32, 64. Chhe baar double. "Sir, 2⁶ = 64. To **6 ghante** baad."

"Bilkul. Ab ek baat sunn lo," Dr. Ismail bole. "Tumne abhi jo sawaal poochha, 'kitni power par 2 ko uthayein ki 64 mile', **is sawaal ka jawab dene wale number ko hi 'log' kehte hain.** Yahan jawab 6 hai, to hum kehte hain ki 64 ka log, base 2 par, 6 hai."

Kavin ne socha, "Matlab log koi nayi cheez nahi, wahi power hai jo humne abhi dhoondhi?"

"Haan. Bas usko ek naam aur ek likhne ka tareeka mil gaya hai. Chalo wo seekhte hain."

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Logarithm (log)** | Wo power jis par base ko uthana padta hai taaki diya hua number mile | 64 ka log base 2 par = 6 |
| **Base** | Wo number jise power par uthate hain; log ke neeche chhota likha jata hai | log₂ 64 mein base 2 hai |
| **Argument** | Wo number jiska log nikaalna hai; log ke baad likha jata hai | log₂ 64 mein argument 64 hai |
| **Value (maan)** | Log ka jawab, yaani wo power | log₂ 64 = 6 mein value 6 hai |
| **Common logarithm** | Base 10 wala log, jismein base likha nahi jata | log 1000 = 3 |

---

## Part A: Log ki definition

Bacteria wali baat ko seedhe likhte hain.

- Exponent wali bhasha mein: **2⁶ = 64**
- Log wali bhasha mein: **log₂ 64 = 6**

Dono ek hi baat ke do roop hain. Base 2 neeche chala gaya, 64 aage aa gaya, aur power 6 ab "=" ke baad jawab ban gayi.

Ab ek general base ke liye. Agar base ko a likhein (a koi number), power ko x aur jo number mila use N, to:

> **Agar aˣ = N hai, to x = logₐ N hai.**

Ise padhte hain: "N ka log, base a par, x hai." Yahan ₐ ek chhota a hai jo neeche likha jata hai.

Ek aadat bana lo, kyunki ye poore chapter mein kaam aayegi: **log ek sawaal hai, aur uska jawab ek power hai.**

> logₐ N ka matlab: "**a ko kitni power par uthayein ki N mile?**"

### Conversion table: exponent se log, aur log se exponent

| Exponent form | Log form | Padhiye |
|---|---|---|
| 2⁵ = 32 | log₂ 32 = 5 | 2 ko 5 power par uthao to 32 |
| 10³ = 1000 | log₁₀ 1000 = 3 | 10 ko 3 power par uthao to 1000 |
| 3⁴ = 81 | log₃ 81 = 4 | 3 ko 4 power par uthao to 81 |
| 5² = 25 | log₅ 25 = 2 | 5 ko 2 power par uthao to 25 |
| 4³ = 64 | log₄ 64 = 3 | 4 ko 3 power par uthao to 64 |
| 7² = 49 | log₇ 49 = 2 | 7 ko 2 power par uthao to 49 |
| 6³ = 216 | log₆ 216 = 3 | 6 ko 3 power par uthao to 216 |
| 2⁴ = 16 | log₂ 16 = 4 | 2 ko 4 power par uthao to 16 |

Dhyan se dekho: **base dono jagah wahi rehta hai** (neeche ya power ke neeche). **Power log ka jawab ban jati hai.** Aur **jo number mila (32, 1000, ...) wo log ke baad likha jata hai.**

---

## Part B: Log ko zor se padhna aur uske hisse

Dr. Ismail ne Kavin se kaha ki log ko bas likhna nahi, **bolna** bhi seekho. Jab bhi koi log dekho, usko sawaal bana do:

> **log₂ 64** padho: "2 ko kitni power par uthayein ki 64 mile?"

Ab hisse pehchano. log₂ 64 = 6 mein:

- **Base = 2** (neeche chhota likha hua number)
- **Argument = 64** (log ke baad ka number)
- **Value = 6** (jawab, yaani power)

### Example 1: Hisse pehchano

log₃ 81 = 4 mein base, argument aur value batao.

- Base = **3**
- Argument = **81**
- Value = **4**

**Jaanch:** 3⁴ = 3 × 3 × 3 × 3 = 81 ✅

### Example 2: Exponent se log banao

5³ = 125 ko log form mein likho.

Base 5, power 3, number 125. Power jawab banegi:

**log₅ 125 = 3**

**Jaanch:** 5 × 5 × 5 = 125 ✅

### Example 3: Log se exponent banao

log₄ 16 = 2 ko exponent form mein likho.

Base 4, value (power) 2, argument 16:

**4² = 16**

**Jaanch:** 4 × 4 = 16 ✅

---

## Part C: Log kab bante hain aur kab nahi

Log ke liye kuch shartein hain. Ye shartein yaad karne ki cheez nahi, **samajhne ki** cheez hain, kyunki har ek ke peeche seedhi si wajah hai.

### Shart 1: Base positive ho aur 1 na ho

Dr. Ismail ne Kavin ko ek chhoti si chunauti di: "log₁ 5 nikalo. Matlab 1 ko kitni power par uthayein ki 5 mile?"

Kavin ne 1 ki powers likhi: 1¹ = 1, 1² = 1, 1³ = 1, 1⁴ = 1 ...

"Sir, ye to hamesha 1 hi deta hai! 5 kabhi nahi milega."

"Bilkul. **1 ki koi bhi power 1 hi rehti hai**, isliye 1 ko base bana ke 1 ke alawa koi number mil hi nahi sakta. Aur log₁ 1 bhi bekaar hai, kyunki 1² = 1 bhi sahi, 1⁷ = 1 bhi sahi, to jawab kaun sa liya jaye? Isliye **base 1 allowed nahi hai.**"

Base negative bhi nahi hota. Negative base ko power par uthane se kabhi plus aur kabhi minus aa jata hai, aur aadhi power (jaise (−4)^(1/2)) to Class 9 ke numbers mein bani hi nahi. Isliye hum **sirf positive base** lete hain.

> **Base: a > 0 aur a ≠ 1**

### Shart 2: Argument sirf positive ho

Kavin ne ek aur sawaal kiya: "Sir, log₂ 0 kitna hoga?"

Dr. Ismail ne kaha, "Sochte hain: 2 ko kitni power par uthayein ki 0 mile? 2⁰ = 1, 2¹ = 2, 2² = 4. Ye to bade hi hote ja rahe hain. Peeche chalein to 2⁻¹ = ½, 2⁻² = ¼, aur chhota hota hai par **kabhi 0 tak nahi pahunchta.** Positive number ki koi bhi power (ye rational exponents wali baat aap number-systems wale chapter mein dekh chuke ho) positive hi rehti hai. To 0 ya negative number mil hi nahi sakta."

> **Argument: N > 0** (log ka 0 ya negative number par koi matlab nahi hota)

Kavin ke lab mein bhi ye theek baithta hai: bacteria ki ginti 0 ya negative nahi ho sakti, aur culture 2 ki powers se hi badhta hai, jo hamesha positive rehti hain.

### Example 4: Kaun sa log likha ja sakta hai?

Batao ki neeche diye gaye logs defined hain ya nahi.

(a) log₅ 25  (b) log₁ 9  (c) log₃ (−9)  (d) log₄ 0

- (a) Base 5 (positive, 1 nahi), argument 25 (positive). **Defined hai**, aur 5² = 25 hone se log₅ 25 = 2.
- (b) Base 1 hai. **Defined nahi.**
- (c) Argument −9 negative hai. **Defined nahi.**
- (d) Argument 0 hai. **Defined nahi.**

---

## Part D: Do pakke tathya

Dr. Ismail ne Kavin se kaha, "Do baatein har base ke liye sach hain. Inhe ratne ki zaroorat nahi, bas exponents ke do niyam yaad karo."

### Tathya 1: logₐ 1 = 0

**Kyun?** Kisi bhi (zero ke alawa) number ki power 0 ho to wo 1 ban jata hai: **a⁰ = 1**. Ise log form mein likhein to **logₐ 1 = 0**.

Bacteria ki table se bhi dikhta hai: 0 ghante par dish mein 2⁰ = 1 bacterium tha. Yaani log₂ 1 = 0.

Jaise: log₇ 1 = 0 (kyunki 7⁰ = 1), log₁₀ 1 = 0 (kyunki 10⁰ = 1).

### Tathya 2: logₐ a = 1

**Kyun?** Kisi bhi number ki power 1 ho to number wahi rehta hai: **a¹ = a**. Log form mein: **logₐ a = 1**.

Jaise: log₇ 7 = 1 (7¹ = 7), log₂ 2 = 1 (2¹ = 2), log₁₀ 10 = 1 (10¹ = 10).

> **logₐ 1 = 0** aur **logₐ a = 1**, jahan a > 0 aur a ≠ 1.

### Example 5: Seedhe tathya lagao

Value nikalo: (a) log₉ 1 (b) log₉ 9 (c) log₂₅ 25.

- (a) 9⁰ = 1, to log₉ 1 = **0**
- (b) 9¹ = 9, to log₉ 9 = **1**
- (c) 25¹ = 25, to log₂₅ 25 = **1**

---

## Part E: Common logarithm (base 10)

Dr. Ismail ne dish ke paas rakhe microscope slide ke label ki taraf ishara kiya: "Hum bahut baar base 10 hi lete hain, kyunki hamari ginti 10 par chalti hai (1, 10, 100, 1000, ...). Isliye base 10 wale log ka ek chhota roop hai: **base ko likhna chhod do.**"

> **log N** (bina base ke) ka matlab hai **log₁₀ N**.

Isse **common logarithm** kehte hain. Jahan bhi base likha na ho, wahan base 10 samjho.

| Number | 10 ki power | Common log |
|---|---|---|
| 10 | 10¹ = 10 | log 10 = 1 |
| 100 | 10² = 100 | log 100 = 2 |
| 1000 | 10³ = 1000 | log 1000 = 3 |
| 10000 | 10⁴ = 10000 | log 10000 = 4 |

Pattern dikh gaya? **1 ke baad jitne zero, utna hi log.** log 1000 = 3, kyunki 1000 mein teen zero hain.

### Example 6: Common log nikalo

(a) log 100000 (b) log 1

- (a) 100000 mein 5 zero hain, 10⁵ = 100000, to log 100000 = **5**
- (b) 10⁰ = 1, to log 1 = **0**

**Jaanch (a):** 10 × 10 × 10 × 10 × 10 = 100000 ✅

---

## Part F: Base ki power ka log

Agar argument khud base ki koi power ho, to jawab seedha power hoti hai. Bacteria ki table ko aur aage badhaate hain.

### Example 7: log₂ 1024

Kavin ne pucha, "Sir, culture kitne ghante mein 1024 bacteria ka ho jayega?"

2 ki powers ko double karte jao: 2⁶ = 64, 2⁷ = 128, 2⁸ = 256, 2⁹ = 512, 2¹⁰ = 1024.

To **log₂ 1024 = 10**. Culture **10 ghante** mein 1024 ka ho jayega.

**Jaanch:** 2¹⁰ = 512 × 2 = 1024 ✅

### Example 8: log₃ 243

3 ki powers likho: 3¹ = 3, 3² = 9, 3³ = 27, 3⁴ = 81, 3⁵ = 243.

To **log₃ 243 = 5**.

**Jaanch:** 81 × 3 = 243 ✅

Tarika: **base ki powers ek ke baad ek likho, jab tak argument na mil jaye.** Jis power par ruko, wahi log hai.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Base aur argument ko ulat dena**

log₂ 8 aur log₈ 2 alag-alag hain.
- log₂ 8: "2 ko kitni power par uthayein ki 8 mile?" Jawab 3 (2³ = 8).
- log₈ 2: "8 ko kitni power par uthayein ki 2 mile?" Jawab 3 nahi hai (8³ = 512, ye to bahut bada hai). Iska jawab ek fraction hota hai, jo hum agle topic mein dekhenge.

Neeche wala chhota number hamesha **base** hai.

**Galti 2: log₂ 8 = 4 likhna (power aur multiplication ko mila dena)**

Kuch log sochte hain "2 ke saath 8 hai, to 2 × 4 = 8, jawab 4". Ye galat hai. log₂ 8 poochhta hai ki 2 **kitni baar khud se multiply** ho to 8 aaye, na ki 2 ko kis number se multiply karein.
- Sahi: 2 × 2 × 2 = 8, teen baar, to log₂ 8 = **3**.
- Jaanch: 2⁴ = 16, 8 nahi. Isliye 4 galat hai.

**Galti 3: Negative ya zero ka log nikalna**

log 0 ya log (−10) likhna galat hai. Argument hamesha positive hona chahiye. Agar kisi sawaal mein log ke andar 0 ya negative aaye, to samajh jao ki wo log defined hi nahi hai.

**Galti 4: Bhool jana ki a⁰ = 1**

Kuch log kehte hain ki log₅ 1 = 5, ya log₅ 1 = 1. Ye galat hai. 5⁰ = 1, isliye log₅ 1 = **0**. Aur log₅ 5 = **1**, kyunki 5¹ = 5. Dono ko mila mat dena.

**Galti 5: Common log mein base bhool jana**

log 1000 likha hai to wo "kuch bhi base" wala log nahi hai. Base 10 hai. log 1000 = 3 (aur log₂ 1000 = 3 nahi, kyunki 2³ = 8).

---

## Quick Recap

- **Log ek sawaal hai:** logₐ N = "a ko kitni power par uthayein ki N mile?" Jawab wo power hai.
- **Definition:** aˣ = N ⇔ logₐ N = x. Exponent form aur log form ek hi baat ke do roop hain.
- Hisse: **base** (neeche chhota number), **argument** (log ke baad), **value** (jawab).
- **Shartein:** base a > 0 aur a ≠ 1; argument N > 0.
- **logₐ 1 = 0** (kyunki a⁰ = 1) aur **logₐ a = 1** (kyunki a¹ = a).
- **Common log:** log N ka matlab log₁₀ N. log 10 = 1, log 100 = 2, log 1000 = 3, log 10000 = 4.
- Base ki power ka log seedhi ginti se milta hai: log₂ 1024 = 10.
- Galtiyan: base aur argument ulat dena, log₂ 8 = 4 likhna, negative ya 0 ka log, a⁰ = 1 bhoolna.

---

## Practice Questions

1. Write each in logarithmic form: (a) 2⁷ = 128 (b) 5³ = 125 (c) 10⁴ = 10000 (d) 9² = 81.

2. Write each in exponential form: (a) log₃ 27 = 3 (b) log₆ 36 = 2 (c) log₂ 1 = 0 (d) log₇ 7 = 1.

3. In log₄ 64 = 3, name the base, the argument and the value. Then read the expression aloud as a question.

4. Find the value of: (a) log₂ 32 (b) log₃ 81 (c) log₅ 625 (d) log 1000000.

5. Which of these are not defined, and why? (a) log₁ 7 (b) log₂ (−8) (c) log₅ 0 (d) log₁₀ 10

6. Find the value of log₁₁ 1 + log₁₁ 11 + log 10.

7. A culture doubles every hour, starting from 1 bacterium. After how many hours will it reach 4096 bacteria? Write your answer as a logarithm and as a number.

8. A student says log₂ 16 = 8 because 2 × 8 = 16. Find his mistake and give the correct value.

9. State True or False:
   (a) log₃ 9 and log₉ 3 are equal.
   (b) logₐ 1 = 0 for every valid base a.
   (c) log 10 = 1.
   (d) 1 can be used as a base for a logarithm.

### Answers

1. (a) 2⁷ = 128 mein base 2, power 7, number 128, to **log₂ 128 = 7**.
   (b) **log₅ 125 = 3**.
   (c) **log₁₀ 10000 = 4**, ya common log mein **log 10000 = 4**.
   (d) **log₉ 81 = 2**.
   Jaanch: 2⁷ = 128 ✅, 5³ = 125 ✅, 10⁴ = 10000 ✅, 9² = 81 ✅

2. (a) **3³ = 27** (b) **6² = 36** (c) **2⁰ = 1** (d) **7¹ = 7**
   Jaanch: 3 × 3 × 3 = 27 ✅, 6 × 6 = 36 ✅

3. Base = **4**, argument = **64**, value = **3**. Sawaal: "4 ko kitni power par uthayein ki 64 mile?" Jawab 3.
   Jaanch: 4³ = 4 × 4 × 4 = 64 ✅

4. (a) 2 ki powers: 2, 4, 8, 16, 32, to 2⁵ = 32, **log₂ 32 = 5**.
   (b) 3⁴ = 81, to **log₃ 81 = 4**.
   (c) 5 ki powers: 5, 25, 125, 625, to 5⁴ = 625, **log₅ 625 = 4**.
   (d) 1000000 mein 6 zero hain, 10⁶ = 1000000, to **log 1000000 = 6**.

5. (a) **Defined nahi**, kyunki base 1 hai (1 ki har power 1 hi hoti hai).
   (b) **Defined nahi**, kyunki argument −8 negative hai.
   (c) **Defined nahi**, kyunki argument 0 hai.
   (d) **Defined hai**, base 10 aur argument 10 dono theek hain. log₁₀ 10 = 1 (kyunki 10¹ = 10).

6. log₁₁ 1 = 0 (11⁰ = 1), log₁₁ 11 = 1 (11¹ = 11), log 10 = log₁₀ 10 = 1. Jod = 0 + 1 + 1 = **2**.

7. 2 ki powers: 2¹ = 2, 2² = 4, 2³ = 8, 2⁴ = 16, 2⁵ = 32, 2⁶ = 64, 2⁷ = 128, 2⁸ = 256, 2⁹ = 512, 2¹⁰ = 1024, 2¹¹ = 2048, 2¹² = 4096.
   To **log₂ 4096 = 12**, yaani **12 ghante**.
   Jaanch: 2¹² = 2¹⁰ × 2² = 1024 × 4 = 4096 ✅

8. Student ne multiplication ko power samajh liya. log₂ 16 ka matlab hai "2 ko kitni power par uthayein ki 16 mile?" 2 × 2 × 2 × 2 = 16, chaar baar, to **log₂ 16 = 4**.
   Jaanch: 2⁸ = 256, 16 nahi. Isliye 8 galat hai. 2⁴ = 16 ✅

9. (a) **False** ❌. log₃ 9 = 2 (3² = 9), par log₉ 3 = 2 nahi hai kyunki 9² = 81. Base aur argument ulatne se value badal jati hai.
   (b) **True** ✅. Kyunki a⁰ = 1.
   (c) **True** ✅. Kyunki 10¹ = 10.
   (d) **False** ❌. 1 ki har power 1 hoti hai, isliye base 1 allowed nahi hai.

---

Bacteria ki ginti se shuru hue is topic ne aapko ek nayi bhasha di: log. Jab bhi kisi log par atak jao, usko sawaal bana do, "base ko kitni power par uthayein ki argument mile?", aur base ki powers likhte jao.

**Aage kya?** Ab tak humne wahi sawaal liye jinmein jawab ek poora number tha (2, 3, 6, 10). Topic 2 mein dekhenge ki jab log ke andar koi cheez anjaani ho (jaise log₁₅ x = 2), tab kaise dhoondhein. Aur ye bhi ki kya log ka jawab fraction ya negative number bhi ho sakta hai, jaise log₈ 2 ya log₂ (1/8) kitne honge.
