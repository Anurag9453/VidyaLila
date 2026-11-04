# Chapter: Logarithms (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [logarithms-part3.md](logarithms-part3.md) se aage chalti hai** (wahan teen laws hain: product, quotient aur power, unke proofs, expand/condense karna, aur ye warning ki log (m + n) ≠ log m + log n). Shuruaat ke topics [logarithms.md](logarithms.md) mein hain.
> **Topics covered in this file:**
> 4. Laws ka Upyog: Simplify, Values aur Equations

---

# Topic 4: Laws ka Upyog: Simplify, Values aur Equations

Topic 3 mein Mrs. Iyer ne Karthik ko Napier ki kahani sunayi thi, aur humne log ke teen laws (product, quotient, power) seekhe aur unke proofs bhi dekhe. Par law seekhna ek baat hai, aur **use chala kar asli sawaal hal karna** doosri baat. Is topic mein wahi practice hai: kisi number ko todkar (factorise karke) uska log nikalna, lambe expression ko ek chhote number mein simplify karna, aur chhoti log equations hal karna.

Koi naya law nahi aayega. Wahi teen laws, bas ab unhe chalana seekhenge.

---

## Quiz contest ka sawaal

School ka inter-house quiz contest chal raha hai, aur ab maths round ki baari hai. Hall bhara hua hai. Quiz master, maths teacher Mr. Qureshi, mic haath mein lekar bolte hain:

"Bina calculator ke batao: **log 12 kya hai**, agar **log 2 = 0.3010** aur **log 3 = 0.4771**?"

Contestant Esha ne ek second socha. 12 ka log to diya hi nahi hai! Phir usse Topic 3 ka product law yaad aaya: "Jo log pata nahi, us number ko aise numbers ke guna mein todo jinke log pata hain."

Esha bolti hai: "12 = 2 × 2 × 3."

Phir usne guna ko jod mein badal diya:

log 12 = log 2 + log 2 + log 3 = 0.3010 + 0.3010 + 0.4771 = **1.0791**

Mr. Qureshi muskuraye: "Bilkul sahi, Esha! Diye hue logs se exactly yahi jawab banta hai. (Asli log 12 ki value 1.07918... hai, jo 4 decimal tak round karke 1.0792 hoti hai. Par hum aaj diye hue values ka exact jod hi jawab maanenge.)"

Yahi is topic ka dil hai: **number ko factorise karo, laws lagao, aur diye hue logs jodo ya ghatao.**

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Factorise karna** | Number ko chhote numbers ke guna mein todna | 12 = 2 × 2 × 3 |
| **Simplify karna** | Laws se kai logs ko ek hi log mein badalna | log 50 + log 2 = log 100 |
| **Evaluate karna** | Log ki numeric value nikalna | log 100 = 2 |
| **Log equation** | Aisi equation jisme unknown log ke andar (ya log ki value mein) hota hai | log x = 2 |
| **Defined hona** | Log tabhi banta hai jab andar ka number **positive** ho | log (x − 1) ke liye x > 1 |
| **Reject karna** | Algebra se mila wo jawab hata dena jo original equation mein kaam nahi karta | x = −3 reject |

---

## Part A: Diye hue logs se naye logs nikalna (base 10)

Is part mein maan kar chalte hain (Esha ke sawaal jaisa, bas ek aur log ke saath):

> **log 2 = 0.3010, log 3 = 0.4771, log 7 = 0.8451**

Yahan "log" ka matlab base 10 hai, aur ye bhi yaad rakho: **log 10 = 1**. Har baar teen kaam:
1. Number ko 2, 3, 7 aur 10 ke guna ya bhaag mein likho.
2. Product law (guna → jod), quotient law (bhaag → ghata) ya power law (power → guna) lagao.
3. Decimals dhyan se jodo ya ghatao.

### Example 1: log 6 aur log 12

6 = 2 × 3, to log 6 = log 2 + log 3 = 0.3010 + 0.4771 = **0.7781**

12 = 2 × 2 × 3 (ya 2² × 3), to log 12 = 2 × 0.3010 + 0.4771 = 0.6020 + 0.4771 = **1.0791**

**Jaanch:** 3010 + 4771 = 7781 ✅. 6020 + 4771 = 10791, yaani 1.0791 ✅. Ek aur raasta: log 12 = log 6 + log 2 = 0.7781 + 0.3010 = 1.0791 ✅.

### Example 2: log 18

18 = 2 × 3 × 3 = 2 × 3²

log 18 = log 2 + 2 log 3 = 0.3010 + 2 × 0.4771 = 0.3010 + 0.9542 = **1.2552**

**Jaanch:** 3010 + 9542 = 12552 ✅. Doosra raasta: 18 = 6 × 3, to log 18 = 0.7781 + 0.4771 = 1.2552 ✅.

### Example 3: log 5 (ek chalaak trick)

5 ka log diya nahi hai, aur 5 ko 2, 3, 7 ke guna se bana bhi nahi sakte. Par 5 = 10 ÷ 2!

log 5 = log (10 ÷ 2) = log 10 − log 2 = 1 − 0.3010 = **0.6990**

**Jaanch:** log 5 + log 2 = log 10 = 1, aur 0.6990 + 0.3010 = 1.0000 ✅.

Ye "10 se bhaag" wali trick bahut kaam aati hai, kyunki log 10 = 1 ek poora number hai jo calculation ko aasaan kar deta hai.

### Example 4: baaki values ek saath

Ab ye sab seedhe nikal sakte hain. Har row mein factorisation dikhaya hai, aur jaanch ke liye jod/ghata dobara kiya hai.

| Number | Factorisation | Calculation | Jawab |
|---|---|---|---|
| log 15 | 3 × 5 | 0.4771 + 0.6990 | **1.1761** |
| log 1.5 | 3 ÷ 2 | 0.4771 − 0.3010 | **0.1761** |
| log 0.2 | 2 ÷ 10 | 0.3010 − 1 | **−0.6990** |
| log 14 | 2 × 7 | 0.3010 + 0.8451 | **1.1461** |
| log 8 | 2³ | 3 × 0.3010 | **0.9030** |
| log √3 | 3 ki power ½ | ½ × 0.4771 | **0.23855** |

**Jaanch:**
- log 15: 4771 + 6990 = 11761 ✅. Doosra raasta: 15 = 10 × 1.5, to log 15 = 1 + 0.1761 = 1.1761 ✅
- log 1.5: 4771 − 3010 = 1761 ✅ (aur 1.5 > 1 hai, to log positive hona chahiye ✅)
- log 0.2: 0.2 < 1 hai, to log negative aana chahiye ✅. Aur log 0.2 + log 5 = −0.6990 + 0.6990 = 0 = log 1 ✅
- log 14: 3010 + 8451 = 11461 ✅
- log 8: 3 × 3010 = 9030 ✅. Doosra raasta: log 8 = log 2 + log 4 = 0.3010 + 0.6020 = 0.9030 ✅
- log √3: √3 = 3^(1/2), power law se ½ log 3. 0.4771 ÷ 2 = 0.23855 ✅ (dobara: 2 × 0.23855 = 0.4771 ✅)

**Dhyan do:** log 0.2 ka matlab hai "10 ki kis power se 0.2 milta hai". 0.2 chhota hai 1 se, isliye power negative. Ye minus sign ki baat log ki chhoti, par zaroori baat hai.

---

## Part B: Bina table ke simplify aur evaluate karna

Kabhi-kabhi sawaal mein koi log value di hi nahi hoti. Phir bhi jawab ek saaf number aata hai. Chaal ye hai: **logs ko jodo ya ghatao taaki andar ek aisa number bane jiski power pata ho** (100, 1000, 16, 27 jaisa).

### Example 5: product law se, ek saath kai sawaal

| Sawaal | Steps | Jawab |
|---|---|---|
| log 50 + log 2 | log (50 × 2) = log 100 = 2 | **2** |
| log 200 + log 5 | log (200 × 5) = log 1000 = 3 | **3** |
| 2 log 20 − log 4 | log 20² − log 4 = log 400 − log 4 = log 100 | **2** |
| log 5 + log 20 | log (5 × 20) = log 100 | **2** |
| log₂ 48 − log₂ 3 | log₂ (48 ÷ 3) = log₂ 16 | **4** |
| log₃ 54 − log₃ 2 | log₃ (54 ÷ 2) = log₃ 27 | **3** |
| log 16 + log 125 − log 20 | log (16 × 125) − log 20 = log 2000 − log 20 = log 100 | **2** |

**Jaanch (har ek ko alag se):**
- 10² = 100, isliye log 100 = 2 ✅
- 10³ = 1000, isliye log 1000 = 3 ✅
- 10² = 100 ✅ (2 log 20 − log 4 ke liye diye hue values se: log 20 = 1 + 0.3010 = 1.3010, to 2 × 1.3010 − 0.6020 = 2.6020 − 0.6020 = 2.0000 ✅)
- 2⁴ = 16, isliye log₂ 16 = 4 ✅
- 3³ = 27, isliye log₃ 27 = 3 ✅
- Aakhri wale mein 16 × 125 = 2000 aur 2000 ÷ 20 = 100, to log 100 = 2 ✅

Dhyan do ki base kabhi badalta nahi: log₂ ka sawaal hai to har step mein log₂ hi rahega. Aur laws tabhi chalte hain jab **sab logs ka base ek hi ho**.

---

## Part C: Simple log equations

Log equation hal karne ka ek hi plan hai:
1. Laws se ek taraf **ek hi log** banao (ya dono taraf ek-ek log).
2. Log hata do, yaani andar ke numbers barabar karo (ya exponential form mein likho).
3. Normal algebra se x nikalo.
4. **Check karo ki original equation ke har log ke andar ka number positive hai.** Jo x iska paalan na kare, use reject karo.

Step 4 sabse zyada bhoolne wala step hai, kyunki log sirf positive number ka hi hota hai (Topic 1 mein dekha tha).

### Example 6: log x = 2 aur log₂ x = 5

Ye Topic 2 wala "argument gayab" tareeka hi hai (log ko power roop mein badlo), bas yahan base 10 aur base 2 ke saath ek jhalak:

- log x = 2 ka matlab base 10: x = 10² = **100**. Jaanch: log 100 = 2 ✅
- log₂ x = 5 ka matlab: x = 2⁵ = **32**. Jaanch: log₂ 32 = 5 ✅

### Example 7: log (x + 1) + log (x − 1) = log 8

**Step 1:** Left side par product law: log ((x + 1)(x − 1)) = log 8

**Step 2:** Dono taraf log hai, to andar barabar: (x + 1)(x − 1) = 8, yaani x² − 1 = 8, x² = 9, x = 3 ya x = −3.

**Step 3 (check):** Original equation mein log (x + 1) aur log (x − 1) hain, to dono ke andar positive chahiye: x + 1 > 0 aur x − 1 > 0, yaani x > 1.
- x = 3: 3 > 1 ✅. Valid.
- x = −3: x + 1 = −2 aur x − 1 = −4, dono negative. log (−2) bana hi nahi sakta. **Reject.**

**Jawab: x = 3**

**Jaanch:** log (3 + 1) + log (3 − 1) = log 4 + log 2 = log 8 ✅

Dhyan do: algebra ne x = −3 bhi diya tha, par wo sirf algebra ki baat thi. Original log equation ke liye wo kaam nahi karta.

### Example 8: log₂ x + log₂ (x − 2) = 3

**Step 1:** Product law: log₂ (x (x − 2)) = 3

**Step 2:** Exponential form: x (x − 2) = 2³ = 8, yaani x² − 2x − 8 = 0.

Factorise: (x − 4)(x + 2) = 0, to x = 4 ya x = −2.

**Step 3 (check):** log₂ x ke liye x > 0, aur log₂ (x − 2) ke liye x > 2. Dono ke liye chahiye x > 2.
- x = 4: ✅ valid.
- x = −2: x > 0 nahi hai. **Reject.**

**Jawab: x = 4**

**Jaanch:** log₂ 4 + log₂ 2 = 2 + 1 = 3 ✅

### Example 9: 2 log x = log 36

**Step 1:** Power law (ulta): 2 log x = log x², to log x² = log 36.

**Step 2:** x² = 36, yaani x = 6 ya x = −6.

**Step 3 (check):** Original equation mein **log x** hai, to x > 0 chahiye. x = 6 valid hai. x = −6 mein log (−6) bana hi nahi, to **reject.**

**Jawab: x = 6**

**Jaanch:** 2 log 6 = log 36 ✅ (6 × 6 = 36).

Ye example batata hai ki "2 log x" likha ho to x ke positive hone ki shart original mein chhupi hai, chahe x² ka log baad mein theek lage.

---

## Part D: Do mashhoor identity-type sawaal

Yahan numbers nahi diye hote. Aapko dikhana hota hai ki ek cheez doosri ke barabar hai. Tareeka wahi: condition se kuch nikalo, phir log lagao.

### Example 10: Agar a² + b² = 7ab ho, to dikhao ki log ((a + b) ÷ 3) = ½ (log a + log b)

(Maan lo a aur b positive hain, taaki logs bane.)

**Step 1:** (a + b)² = a² + b² + 2ab. Condition se a² + b² = 7ab, to
(a + b)² = 7ab + 2ab = 9ab.

**Step 2:** Dono taraf 9 se bhaag do: ((a + b) ÷ 3)² = ab. (kyunki (a + b)² ÷ 9 = ((a + b) ÷ 3)².)

**Step 3:** Dono taraf log lo: log ((a + b) ÷ 3)² = log (ab).

**Step 4:** Power law aur product law:
2 log ((a + b) ÷ 3) = log a + log b

**Step 5:** Dono taraf 2 se bhaag: **log ((a + b) ÷ 3) = ½ (log a + log b)**

**Numeric jaanch:** a² + b² = 7ab ko satisfy karne wale numbers: b = 1 lo, to a² + 1 = 7a, yaani a² − 7a + 1 = 0, a = (7 + √45) ÷ 2 ≈ 6.854.
- Check: a² + 1 ≈ 46.979 + 1 = 47.979, aur 7a ≈ 47.979 ✅
- Left side: (a + b) ÷ 3 = 7.854 ÷ 3 ≈ 2.618, aur log 2.618 ≈ 0.4180.
- Right side: ½ (log 6.854 + log 1) = ½ × 0.8360 ≈ 0.4180 ✅

(Numbers thode ajeeb hain, par condition hi aisi hai. Log ki values calculator se li hain, sirf check ke liye.)

### Bonus: Agar log m + log n = log (m + n) ho, to dikhao ki m = n ÷ (n − 1)

Product law se log (mn) = log (m + n), to **mn = m + n**.

m wale terms ek taraf: mn − m = n, yaani m (n − 1) = n, to **m = n ÷ (n − 1)**

**Numeric jaanch:** n = 3 lo, to m = 3 ÷ 2 = 1.5. Ab log 1.5 + log 3 = log (1.5 × 3) = log 4.5, aur m + n = 1.5 + 3 = 4.5, to log (m + n) = log 4.5 ✅

Ye bhi yaad dilata hai ki log m + log n = log (m + n) har m, n ke liye sach nahi hota. Wo sirf aise special m, n ke liye hota hai (jaise 1.5 aur 3). Aam taur par log m + log n = log (mn).

---

## Aam galtiyan (bachke rehna)

**Galti 1: Equation ka answer bina check kiye likh dena**

log (x + 1) + log (x − 1) = log 8 mein x = −3 bhi nikalta hai. Agar check nahi kiya to "x = 3 ya x = −3" likh doge, jo galat hai. Hamesha original equation ka har log dekho: andar ka number positive hai ya nahi.

**Galti 2: log 5 = log 10 − log 2 mein "1" bhool jana**

log 10 ek chhota sa 1 hai, shunya nahi. Agar likh diya log 5 = 0 − 0.3010 = −0.3010, to galat: 5 > 1 hai, to log 5 positive hona chahiye. Sahi: 1 − 0.3010 = **0.6990**. Yaad rakho: 10 ÷ 2 ka matlab hai log 10 − log 2, yaani **1** − log 2.

Isi tarah log (10 ÷ 2) ko log 10 ÷ log 2 likhna bhi galat hai (bhaag ka law ghata hai, bhaag nahi).

**Galti 3: Decimal ke jod mein slip**

log 12 = 0.3010 + 0.3010 + 0.4771. Jaldi mein 0.6020 + 0.4771 = 1.0781 ya 1.0792 likh dena aam hai. Dhyan se digits jodo: 6020 + 4771 = 10791, to 1.0791. Aur jaanch ka ek aasaan tareeka: dusre raaste se dobara karo (12 = 6 × 2: 0.7781 + 0.3010 = 1.0791).

**Galti 4: Alag-alag base ke logs ko jodna**

log₂ 4 + log₅ 25 ko log (4 × 25) nahi bana sakte. Laws tab chalte hain jab base ek hi ho. (Yahan har log alag se nikalo aur jodo: 2 + 2 = 4.)

**Galti 5: log (m + n) ko todna**

log (x + 1) ko "log x + log 1" likhna galat hai. Topic 3 ki warning yahan bhi lagti hai: jod ke andar wale log ko todne ka koi law nahi hai. (Check: x = 9 par log 10 = 1, par log 9 + log 1 = 0.9542 + 0 = 0.9542.)

---

## Quick Recap

- Diye hue logs se naya log nikalne ke liye **number ko factorise karo** (2, 3, 7 aur 10 ke guna/bhaag mein), phir laws lagao.
- **log 5 = log (10 ÷ 2) = 1 − log 2**, aur log 0.2 = log 2 − 1 negative hota hai.
- Bina table ke simplify: logs jodo/ghatao taaki andar 100, 1000, 16, 27 jaisa number bane, phir log nikalo. Base hamesha ek hi rakho.
- Log equation: **ek log banao, andar barabar karo, x nikalo, phir har log ka argument positive check karo** aur galat roots reject karo.
- Identity sawaal: condition se kuch bana kar dono taraf log lo, aur power/product law lagao.
- Galtiyan: argument check bhoolna, log 10 = 1 bhoolna, decimal jod mein slip.

---

## Practice Questions

1. Given log 2 = 0.3010, log 3 = 0.4771 and log 7 = 0.8451, find: (a) log 21, (b) log 36, (c) log 28, (d) log 0.3. Show the factorisation each time.

2. Evaluate without tables: (a) log₅ 50 − log₅ 2, (b) log 25 + log 40, (c) log₂ 12 + log₂ (8 ÷ 3).

3. Solve: log (x + 3) + log (x − 3) = log 16. Explain why one root is rejected.

4. Solve: log₂ x + log₂ (x + 2) = 3. Check your answer.

5. If a² + b² = 14ab, show that log ((a + b) ÷ 4) = ½ (log a + log b).

6. A student says: "log 15 = log 3 × log 5 = 0.4771 × 0.6990." Find his mistake and give the correct value of log 15.

7. State True or False:
   (a) log 8 = 3 log 2.
   (b) x = −3 is a valid solution of log (x + 1) + log (x − 1) = log 8.
   (c) log 0.2 is negative.
   (d) log 12 = log 3 × log 4.

### Answers

1. (a) 21 = 3 × 7, to log 21 = 0.4771 + 0.8451 = **1.3222**. Jaanch: 4771 + 8451 = 13222 ✅
   (b) 36 = 2² × 3², to log 36 = 2 × 0.3010 + 2 × 0.4771 = 0.6020 + 0.9542 = **1.5562**. Jaanch: 36 = 6², 2 × 0.7781 = 1.5562 ✅
   (c) 28 = 2² × 7, to log 28 = 0.6020 + 0.8451 = **1.4471**. Jaanch: 28 = 2 × 14, 0.3010 + 1.1461 = 1.4471 ✅
   (d) 0.3 = 3 ÷ 10, to log 0.3 = 0.4771 − 1 = **−0.5229**. Jaanch: log 0.3 + log 10 = −0.5229 + 1 = 0.4771 = log 3 ✅

2. (a) log₅ (50 ÷ 2) = log₅ 25 = **2** (5² = 25)
   (b) log (25 × 40) = log 1000 = **3**
   (c) log₂ (12 × 8 ÷ 3) = log₂ 32 = **5** (2⁵ = 32)

3. Product law: log ((x + 3)(x − 3)) = log 16, to x² − 9 = 16, x² = 25, x = 5 ya −5.
   Check: x + 3 > 0 aur x − 3 > 0, yaani x > 3. x = 5 valid. x = −5 mein x − 3 = −8 negative hai, **reject**.
   **x = 5**. Jaanch: log 8 + log 2 = log 16 ✅

4. log₂ (x (x + 2)) = 3, to x² + 2x = 8, x² + 2x − 8 = 0, (x + 4)(x − 2) = 0, x = −4 ya 2.
   Check: x > 0 chahiye. x = −4 reject. **x = 2**.
   Jaanch: log₂ 2 + log₂ 4 = 1 + 2 = 3 ✅

5. (a + b)² = a² + b² + 2ab = 14ab + 2ab = 16ab. Dono taraf 16 se bhaag: ((a + b) ÷ 4)² = ab. Dono taraf log lo: 2 log ((a + b) ÷ 4) = log a + log b. Dono taraf 2 se bhaag: log ((a + b) ÷ 4) = ½ (log a + log b)

6. Student ne guna (product) ke liye log ko guna kar diya. Product law kehta hai ki log (3 × 5) = log 3 + log 5, yaani **jod**. Sahi: log 15 = 0.4771 + 0.6990 = **1.1761**. (Uski galat value 0.4771 × 0.6990 ≈ 0.3335 hoti, jo 1.1761 se bahut alag hai.) Jaanch: 15 > 10, to log 15 > 1 hona chahiye ✅

7. (a) **True** ✅. Power law: log 2³ = 3 log 2, aur 0.9030 = 3 × 0.3010.
   (b) **False** ❌. x = −3 par log (−2) aur log (−4) bante hi nahi.
   (c) **True** ✅. 0.2 < 1, to log negative: −0.6990.
   (d) **False** ❌. Product law kehta hai log 12 = log 3 + log 4, guna nahi.

---

Ab aap log ke laws sirf yaad nahi, chala bhi sakte ho: number todo, laws lagao, aur har equation ke baad argument check karo.

**Aage kya?** Ab tak hum sirf numbers aur equations ke saath khele. Topic 5 mein dekhenge ki **log asli zindagi mein kahan kaam aata hai**: 10% compound interest par paisa kitne saal mein double hota hai, 2⁶⁴ mein kitne digits hain, aur bhukamp ka Richter scale kaise kaam karta hai.
