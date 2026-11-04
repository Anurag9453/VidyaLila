# Chapter: Logarithms (Part 5)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [logarithms-part4.md](logarithms-part4.md) se aage chalti hai.** (Chapter ki shuruaat [logarithms.md](logarithms.md) se hoti hai.)
> **Topics covered in this file:**
> 5. Log Kahan Kaam Aata Hai

---

# Topic 5: Log Kahan Kaam Aata Hai

Pichle topic mein humne laws ko asli kaam par lagaya: log 2 = 0.3010, log 3 = 0.4771 aur log 7 = 0.8451 jaisi chhoti values se log 6, log 5, log 12 jaise bahut saare logs nikal liye, bina kisi calculator ke. (Esha ne quiz mein log 12 = 0.6020 + 0.4771 = 1.0791 bataya tha.) Ab ek natural sawaal: ye sab karne ka fayda kya hai? Is aakhri topic mein hum dekhenge ki logarithm **kahan kaam aata hai**: compound interest ka ek purana sawaal solve hoga, bade numbers ke digits gine jaayenge, aur samjhenge ki bhukamp, awaaz aur acid ko naapne ke liye duniya log wali scale kyun use karti hai. Chapter ka aakhri topic hai, to end mein poore chapter ka wrap-up bhi hoga.

Do cheezein pehle se aani chahiye: Compound Interest ka formula A = P(1 + r/100)ⁿ (dekho [compound-interest-part3.md](../compound-interest/compound-interest-part3.md)), aur bade numbers ko 10 ki power mein likhna (scientific notation, dekho [exponents.md](../../../class8/maths/exponents/exponents.md)).

---

## Jiya aur 6 magnitude ka bhukamp

Raat ki khabrein chal rahi thi. Newsreader ne kaha, "Aaj subah **6 magnitude ka bhukamp** aaya."

Jiya ne pyaaz kaatte hue mummy se poocha, "Ye 6 kya hai? Aur ye 6 magnitude kitna bada hota hai?"

Wahin baithe Ajay mama, jo geologist hain, hans pade. "Bada achha sawaal hai, Jiya. Bhukamp ko **Richter scale** par naapte hain, aur ye scale **logarithmic** hai. Matlab har ek step upar jaane par zameen ki hilne ki badi (amplitude) lagbhag **10 guna** ho jaati hai."

"10 guna? Sirf ek number badhne par?" Jiya ne aankhein badi kar leen.

"Haan. Magnitude 6 ka bhukamp, magnitude 5 se zameen ko **10 guna** zyada hilata hai. Aur magnitude 4 se **100 guna** zyada, kyunki 10 × 10 = 100. Isliye 6 aur 4 ke beech sirf 2 ka fark dikhta hai, par asal mein fark 100 guna ka hai."

Jiya ne socha, "Ye to wahi power wali baat hai, jisme multiply karna add karna ban jaata hai!" Mama ne muskura kar sar hila diya.

Chalo, is baat ko ek-ek karke kholte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Inverse (ulta kaam)** | Jo kaam ko undo kar de | Log power ko undo karta hai |
| **Digits ki ginti** | Number mein kitne ank hain | 1024 mein 4 digits |
| **Logarithmic scale** | Aisi scale jisme har step par value 10 guna (ya fixed guna) ho jaati hai | Richter scale |
| **Magnitude** | Bhukamp ki taakat ka Richter number | 6 magnitude |
| **Amplitude** | Zameen kitni hilti hai, uski badi | Magnitude 6 ki amplitude, magnitude 5 se 10 guna |
| **Decibel (dB)** | Awaaz ki taakat naapne ki unit | 70 dB |
| **pH** | Kisi ghol ki khattai (acidity) ka number | Nimbu ka ras, pH lagbhag 2 |

---

## Part A: Compound Interest mein n nikalna

[compound-interest-part3.md](../compound-interest/compound-interest-part3.md) mein ek sawaal tha: 10% compound par paisa kitne saal mein double hota hai? Tab humne powers try ki thi: (1.1)⁷ ≈ 1.95 aur (1.1)⁸ ≈ 2.14, yaani jawab 7 aur 8 saal ke beech. Wahan likha tha ki iska seedha jawab logarithm se nikalta hai. Ab wahi karte hain: logarithm isse **seedha, ek jhatke mein** nikaal dega.

### Idea

Jab anjaan cheez **power mein** baithi ho (jaise n in (1.1)ⁿ), to hum seedha nahi utha sakte. Par **power law** (Topic 3) kehta hai: log (aᵐ) = m × log a. Yaani log lagate hi power **neeche utar aati hai** aur guna ban jaati hai. Phir bas bhaag dena hai.

### Example 1: 10% par paisa kab double hoga?

Paisa double hone ka matlab A = 2P, yaani

(1.1)ⁿ = 2

Dono taraf log (base 10) lagao:

n × log 1.1 = log 2

n = log 2 ÷ log 1.1

log 2 = 0.3010 diya hua hai. log 1.1 ≈ 0.0414 calculator ya log table se liya hai (4 decimal tak round karke), kyunki 1.1 = 11/10 aur 11 ko 2, 3, 7 se nahi bana sakte.

n = 0.3010 ÷ 0.0414 ≈ **7.27 saal** (2 decimal tak round karke)

Jaanch: 7.27 × 0.0414 = 0.30098 ≈ 0.3010 ✅. Aur trial wale andaaze se milao: 7 saal par 1.95 (thoda kam) aur 8 saal par 2.14 (thoda zyada), to asli jawab 7 aur 8 ke beech, 7.27, bilkul fit baithta hai ✅.

### Example 2: 10% par paisa kab triple hoga?

(1.1)ⁿ = 3

n × log 1.1 = log 3

n = 0.4771 ÷ 0.0414 ≈ **11.52 saal** (2 decimal tak), yaani lagbhag **11.5 saal**

Jaanch: 1.1¹¹ ≈ 2.85 aur 1.1¹² ≈ 3.14. Teen guna 11 aur 12 saal ke beech aata hai, aur 11.5 uske andar hai ✅.

### Example 3: 20% par paisa kab double hoga?

Yahan log 1.2 chahiye. Topic 4 ka tareeka lagao: 1.2 = 12/10, to log 1.2 = log 12 − log 10. Topic 4 se log 12 = 2 log 2 + log 3 = 0.6020 + 0.4771 = 1.0791. To log 1.2 = 1.0791 − 1 = **0.0791**.

(1.2)ⁿ = 2, to n = 0.3010 ÷ 0.0791 ≈ **3.81 saal** (2 decimal tak round karke; log ki asli values se ye 3.80 aata hai, chhota sa fark rounding ka hai)

Jaanch: 1.2³ = 1.728 aur 1.2⁴ = 2.0736. Double 3 aur 4 saal ke beech, 4 ke kareeb, aur 3.81 wahin hai ✅.

---

## Part B: Bade number mein kitne digits?

2⁶⁴ jaise number ko poora likhe bina jaanna ho ki usmein kitne digits hain, to?

### Idea

- 1 se 9 tak ke numbers (1 digit) ka log 0 se 1 ke beech aata hai (log 1 = 0, log 10 = 1).
- 10 se 99 (2 digits) ka log 1 se 2 ke beech.
- 100 se 999 (3 digits) ka log 2 se 3 ke beech.

To log N ka **integer part** (decimal se pehle wala hissa) dekho: wo hamesha **digits − 1** hota hai. Isliye:

> **N ke digits = (log N ka integer part) + 1**

Ye log hamesha **base 10** wala hota hai, kyunki hamari ginti 10 ke hisaab se chalti hai.

### Example 4: Chhote numbers par test

- 2¹⁰ = 1024. log = 10 × 0.3010 = 3.010. Integer part 3, to digits = 3 + 1 = **4**. Jaanch: 1024 mein 4 digits ✅
- 2²⁰ = 1,048,576. log = 20 × 0.3010 = 6.020. Integer part 6, to digits = **7**. Jaanch: 1048576 mein 7 digits ✅

### Example 5: 2⁶⁴ mein kitne digits?

log (2⁶⁴) = 64 × log 2 = 64 × 0.3010 = 19.264

Integer part 19, to digits = 19 + 1 = **20**

Jaanch: 2⁶⁴ = 18446744073709551616, jisme 20 digits hain ✅

### Example 6: 3⁵⁰ mein kitne digits?

log (3⁵⁰) = 50 × 0.4771 = 23.855

Integer part 23, to digits = **24**

Jaanch: 3⁵⁰ ≈ 7.18 × 10²³, aur 10²³ ke saath ek digit wala hissa milakar 24 digits ban jaate hain ✅

### Example 7: 5³⁰ mein kitne digits?

Yahan log 5 chahiye. 5 = 10/2, to log 5 = 1 − 0.3010 = 0.6990 (Topic 4).

log (5³⁰) = 30 × 0.6990 = 20.970

Integer part 20, to digits = **21**

Jaanch: 5³⁰ = 931322574615478515625, jisme 21 digits hain ✅ (Dhyan do: 20.970 ko round karke 21 na kar dena. Digits ke liye integer part hi dekhte hain, wo 20 hai, aur +1 karke 21 aata hai.)

---

## Part C: Log scale kyun? Bade range ko chhote numbers mein

Bhukamp ki taakat bahut chhote se lekar bahut bade tak jaati hai. Agar seedha amplitude likhein to numbers 1 se lekar 10,000,000 jaise bade ho jaayein. Log scale mein wahi range 1 se 8 jaise **chhote numbers** mein aa jaata hai.

### Richter scale (Jiya ki kahani)

- Har **ek poora magnitude step** = amplitude lagbhag **10 guna**.
- Magnitude 6 vs 5: 10 guna.
- Magnitude 6 vs 4: 10 × 10 = **100 guna**.
- Magnitude 8 vs 5: 3 step, to 10³ = **1000 guna** amplitude.

Ek extra baat, jo hedge ke saath kaheni chahiye: har poore step par bhukamp se nikalne wali **energy** lagbhag **31.6 guna** badhti hai (asal mein 10^1.5). Yaani amplitude 10 guna, par energy usse kahin zyada. Magnitude ka asal formula thoda complicated hai aur ye saari baatein lagbhag (approximately) sahi hain, par idea yahi hai: ek step upar jaana matlab bahut bada jump.

### Decibel (awaaz) aur pH (khattai): halka sa zikr

- **Decibel:** awaaz ki intensity mein har **+10 dB** ka matlab intensity **10 guna**. 60 dB ki awaaz 50 dB se 10 guna intense hai, aur 70 dB 50 dB se 100 guna.
- **pH:** pH ka har ek unit acidity mein **10 guna** ka fark dikhata hai (loosely bolein to). pH 3 wala ghol pH 4 wale se 10 guna zyada khatta hai.

### Ye sab log₁₀ kyun use karte hain?

Kyunki ye scales **log₁₀** par bani hain. log₁₀ ki khoobi: **10 se guna karna = log mein sirf +1 add karna** (kyunki log (10x) = log 10 + log x = 1 + log x, product law se). Isliye bade bade guna-badlaav ek chhote number ke +1 jaise step mein dikh jaate hain.

---

## Part D: Log aur power ek doosre ka ulta (inverse)

Square aur square root yaad karo: 5² = 25, aur √25 = 5. Square root square ko **undo** kar deta hai. Isi tarah **log power ko undo karta hai** (aur power log ko). Pehla hissa, logₐ aⁿ = n, Topic 3 ke Natija 3 mein dekh chuke ho; naya hissa ulta wala hai.

- log₂ (2⁵) = 5 (kyunki 2 ko 5 power chahiye 2⁵ banane ke liye)
- 2^(log₂ 32) = 32 (log₂ 32 = 5, aur 2⁵ = 32)

Dono taraf wahi: pehle power, phir log, to power wapas mil jaati hai. Pehle log, phir power, to number wapas mil jaata hai.

Aam roop mein: **logₐ (aˣ) = x** aur **a^(logₐ x) = x** (jahan x > 0).

### Example 8: Inverse ka use

Kya hai log₅ (5⁶) aur 10^(log 50)?

- log₅ (5⁶) = **6**, kyunki log power ko undo karta hai. Jaanch: power law se 6 × log₅ 5 = 6 × 1 = 6 ✅
- 10^(log 50) = **50**, kyunki 10 ki power aur log₁₀ ek doosre ko undo karte hain. Jaanch: log 50 ≈ 1.699, aur 10^1.699 ≈ 50 ✅

---

## Part E: Ek halki si history

Jab calculators nahi the, to bade numbers ka guna karna bahut mushkil tha. Log ki wajah se guna jod mein badal jaata hai (product law). Isliye (Topic 3 mein Mrs. Iyer ki Napier wali kahani yaad karo) log ki **tables** bani: kisi number ka log dekho, jodo, aur phir wapas number nikaalo. Isi idea par slide rules bhi bane. Calculators aane se pehle sadiyon tak engineers aur scientists inhi se bade hisaab karte the.

---

## Aam galtiyan (bachke rehna)

**Galti 1: log 1.1 ko jaldi round kar dena**
n = 0.3010 ÷ log 1.1 mein agar log 1.1 = 0.04 le liya to n = 0.3010 ÷ 0.04 = 7.525 ≈ 7.5. Agar 0.041 liya to 0.3010 ÷ 0.041 ≈ 7.34. Sahi 0.0414 se 7.27 aata hai. Chhota sa round bhi jawab ko kaafi hila deta hai, to log ki value poore decimals mein rakho (jitne diye hain) aur round sirf aakhir mein karo.

**Galti 2: Digits mein "+1" bhool jaana**
2¹⁰ ka log 3.010 hai. Agar integer part 3 ko hi digits maan liya to 3 digits likha, jabki 1024 mein **4** digits hain. Sahi: 3 + 1 = 4.

**Galti 3: Base 10 ka dhyan na rakhna**
Digits ginne ke liye hamesha **log₁₀** use hota hai. Agar kisi aur base ka log (jaise log₂) le liya to integer part se digits nahi nikalte, aur galat jawab milta hai.

**Galti 4: Richter ke ek step ko "thoda sa" zyada samajhna**
Magnitude 6 aur magnitude 5 mein "sirf 1" ka fark dikhta hai, par amplitude mein **10 guna** ka fark hai. Aur magnitude 6 aur 4 mein 2 ka nahi, **100 guna** ka fark hai.

---

## Quick Recap

- Jab anjaan n power mein ho (jaise (1.1)ⁿ = 2), to dono taraf **log** lagao: n log 1.1 = log 2, to n = log 2 ÷ log 1.1 ≈ **7.27 saal**.
- 10% par paisa triple hone mein lagbhag **11.5 saal** lagte hain (log 3 ÷ log 1.1).
- **N ke digits = (log₁₀ N ka integer part) + 1.** Jaise 2⁶⁴ ke 20 digits, 3⁵⁰ ke 24 digits.
- Log scale bade range ko chhote numbers mein laati hai: Richter scale par ek step = amplitude lagbhag **10 guna** (energy lagbhag 31.6 guna).
- Decibel (+10 dB = 10 guna intensity) aur pH (ek unit = 10 guna khattai, loosely) bhi log₁₀ par chalte hain.
- Log₁₀ mein 10 se guna karna = **+1 add karna**.
- Log aur power ek doosre ke **inverse** hain: logₐ (aˣ) = x aur a^(logₐ x) = x.
- Log tables aur slide rules isi idea se aaye, calculators se pehle.

---

## Practice Questions

1. At 20% compound interest per year, in how many years will money triple? Use log 3 = 0.4771 and log 1.2 = 0.0791 (found from log 12 = 1.0791). Give the answer to 2 decimal places.

2. How many digits does 2⁴⁰ have? Use log 2 = 0.3010.

3. How many digits does 3²⁰ have? Use log 3 = 0.4771.

4. How many digits does 5²⁰ have? (Hint: log 5 = 1 − log 2.)

5. How many times larger is the ground shaking (amplitude) in a magnitude 7 earthquake than in a magnitude 4 earthquake?

6. Find the values: (a) log₂ (2⁹) (b) 3^(log₃ 7) (c) 10^(log 8).

7. State True or False, with a reason.
   (a) A magnitude 7 earthquake shakes the ground only a little more than a magnitude 6 earthquake.
   (b) The number of digits of N is the integer part of log N.
   (c) 1000 has 4 digits, and log 1000 = 3.
   (d) A sound of 40 dB has 10 times the intensity of a sound of 30 dB.

8. A student uses log 1.1 = 0.04 to find the doubling time at 10% and gets 7.525 years. Using 0.0414 instead, find the correct answer and say what the student's error was.

9. A sound of 30 dB is compared with a sound of 10 dB. How many times greater is its intensity?

10. The base-10 log of a number N is 5.7. How many digits does N have? Roughly what is N? (Use log 5 = 0.6990.)

### Answers

1. (1.2)ⁿ = 3, to n × 0.0791 = 0.4771 aur n = 0.4771 ÷ 0.0791 ≈ **6.03 saal**.
   Jaanch: 1.2⁶ = 2.986 ≈ 3 ✅

2. log (2⁴⁰) = 40 × 0.3010 = 12.040. Integer part 12, to digits = **13**.
   Jaanch: 2⁴⁰ = 1,099,511,627,776, jisme 13 digits hain ✅

3. log (3²⁰) = 20 × 0.4771 = 9.542. Integer part 9, to digits = **10**.
   Jaanch: 3²⁰ = 3,486,784,401, jisme 10 digits hain ✅

4. log 5 = 1 − 0.3010 = 0.6990. log (5²⁰) = 20 × 0.6990 = 13.980. Integer part 13, to digits = **14**.
   Jaanch: 5²⁰ = 95,367,431,640,625, jisme 14 digits hain ✅

5. 7 aur 4 ke beech 3 step hain, to amplitude 10³ = **1000 guna** zyada hoti hai.
   Jaanch: 4 → 5 → 6 → 7, har baar 10 guna, 10 × 10 × 10 = 1000 ✅

6. (a) log₂ (2⁹) = **9**. Jaanch: 2⁹ = 512, aur 2 ki power 9 se 2⁹ banta hai ✅
   (b) 3^(log₃ 7) = **7** (inverse).
   (c) 10^(log 8) = **8** (10 ki power aur log₁₀ ek doosre ko undo karte hain).

7. (a) **False** ❌. Ek step matlab amplitude 10 guna, "thoda sa" nahi.
   (b) **False** ❌. Digits = integer part + 1.
   (c) **True** ✅. log 1000 = 3, to digits = 3 + 1 = 4, aur 1000 mein sach mein 4 digits hain.
   (d) **True** ✅. Har +10 dB par intensity 10 guna hoti hai.

8. Sahi: n = 0.3010 ÷ 0.0414 ≈ **7.27 saal**. Student ne log 1.1 = 0.04 le liya, yaani 0.0414 ko bahut jaldi round kar diya. Isse 7.525 aaya, jo 7.27 se kaafi door hai.
   Jaanch: 7.27 × 0.0414 = 0.30098 ≈ 0.3010 ✅

9. 10 dB se 30 dB tak 20 dB ka fark hai, yaani 2 step of 10 dB. Intensity 10 × 10 = **100 guna**.

10. Integer part 5, to digits = **6**. Decimal part 0.7 ≈ log 5 = 0.6990, to N ≈ 5 × 10⁵ = **lagbhag 5,00,000** (500,000 ke aas-paas).
    Jaanch: log 500,000 = log 5 + log 100,000 = 0.6990 + 5 = 5.699 ≈ 5.7 ✅

---

Ab aap jaante ho ki log sirf ek formula nahi hai: wo bade guna-badlaav ko chhote jod-ghatav mein badal deta hai, aur isliye compound interest se lekar bhukamp tak har jagah kaam aata hai. Aap ye kar sakte ho!

---

# Chapter Wrap-up: Logarithms

| Topic | Kya seekha | Sabse kaam ki baat |
|---|---|---|
| 1. Logarithm ka idea aur log₁₀ | Logarithm "kis power par chadhane se ye number banega" ka sawaal hai; base 10 wala common log | log₂ 8 = 3 ka matlab 2³ = 8 |
| 2. Form badalna aur anjaan nikalna | Log form aur power form ek doosre mein badalna; anjaan value, argument ya base nikalna; negative aur fraction logs | Dono forms ek hi baat kehte hain |
| 3. Teen laws | Product, quotient aur power laws | Guna jod ban jaata hai, bhaag ghatav, power guna |
| 4. Laws ka use | log 2, log 3, log 7 se log 6, log 5, log 12 jaise logs nikalna; simplify karna; log equations (galat root reject) aur identities | Kuch hi values se bahut saare logs mil jaate hain |
| 5. Log kahan kaam aata hai | Compound interest mein n, digits ki ginti, log scales, inverse property | Anjaan power ko neeche utaarne ke liye log lagao |

### All log rules

| Kya | Rule |
|---|---|
| Definition | logₐ x = y matlab aʸ = x |
| Conditions | a > 0, a ≠ 1 aur x > 0 |
| Common log | log x (bina base) matlab log₁₀ x |
| log of 1 | logₐ 1 = 0 |
| log of base | logₐ a = 1 |
| Product law | logₐ (xy) = logₐ x + logₐ y |
| Quotient law | logₐ (x/y) = logₐ x − logₐ y |
| Power law | logₐ (xᵐ) = m logₐ x |
| Inverse property | logₐ (aˣ) = x aur a^(logₐ x) = x |
| Digits ki ginti | N ke digits = (log₁₀ N ka integer part) + 1 |
| Warnings | log (x + y) ≠ log x + log y; (log x)ⁿ ≠ n log x; (log x) ÷ (log y) ≠ log (x/y); negative ya zero ka log nahi hota |

---

Log ek chhota sa idea hai jo power ko undo karta hai, aur isi ek idea se compound interest, bade numbers aur bhukamp ki scale tak sab kuch samajh aata hai.
