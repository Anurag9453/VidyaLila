# Chapter: Logarithms (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [logarithms-part2.md](logarithms-part2.md) se aage chalti hai** (aur poore chapter ki shuruaat [logarithms.md](logarithms.md) mein hai).
> **Prior knowledge:** exponents ke niyam, jo [number-systems-part6.md](../number-systems/number-systems-part6.md) mein hain.
> **Topics covered in this file:**
> 3. Logarithm ke Niyam (Laws)

---

# Topic 3: Logarithm ke Niyam (Laws)

Topic 2 mein humne logarithm ke saath kaafi khel liya: exponential form se log form mein jaana, wapas aana, value, argument ya base dhoondhna, aur fractions aur negative logs (jaise log₂ (1/8) = −3) tak pahunchna. Rhea aur Manav ne isi tarah escape room ki teen plates kholi thi (code 3, 3 aur 2/3). Wahan har baar hum ek hi log ko dekh rahe the. Ab sawaal ye hai: **agar ek hi expression mein do ya teen logs ek saath hon, to unka kya karein?** Kya unhe jod sakte hain, ghata sakte hain? Is topic mein isi ke niyam milenge, aur ye niyam logarithm ki asli taakat hain.

---

## Mrs. Iyer, Karthik aur Napier ki kahani

Karthik ko homework mein bada sa guna karna tha aur wo kuch der baad jhunjhla gaya. "Madam, itna lamba guna haath se kaun karta hai!"

Mrs. Iyer muskuraayi. "Karthik, ek sachchi kahani suno. Scotland mein John Napier naam ke ek ganitagya the. Baat lagbhag 1614 ke aas-paas ki hai. Us zamane mein calculator nahi tha. Taaron aur grahon ka hisaab lagane wale astronomers ko bahut bade-bade numbers ek doosre se guna karne padte the, aur ek-ek guna haath se ghanton chalta tha. Zara si bhool hui to poora hisaab gadbad."

"Phir?" Karthik ne poochha.

"Napier ko ek jaadui khayal aaya. Unhone socha ki **kya guna ko jod mein badla ja sakta hai?** Jod to bahut aasan hota hai na? Unki is trick ka naam hai **logarithm**. Jab guna karna ho, to numbers ke logs lo, unhe **jod do**, aur phir wapas number par aa jao. Kehte hain ki isse astronomers ka bahut samay bacha."

Karthik ki aankhein chamak gayi. "Par madam, ye jod wali baat sach kaise hai?"

"Bahut accha sawaal," Mrs. Iyer boli. "Iska jawab exponents ke niyam mein chhupa hai. Chalo, khud nikaalte hain."

Is topic mein hum wahi dekhenge: Napier ki trick ke piche ke teen niyam.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Product law** | Guna ka log = logs ka jod | log₂ (4 × 8) = log₂ 4 + log₂ 8 |
| **Quotient law** | Bhaag ka log = logs ka antar (ghatana) | log₂ (32 ÷ 4) = log₂ 32 − log₂ 4 |
| **Power law** | Power ka log = power × log | log₂ 8² = 2 × log₂ 8 |
| **Expand karna** | Ek bade log ko chhote logs ke jod aur antar mein todna | log (a × b) → log a + log b |
| **Condense karna** | Kai logs ko jod kar ek hi log bana dena | log 4 + log 25 → log 100 |

---

## Part A: Teen niyam, proof ke saath

Pehle exponents ke teen niyam yaad kar lo (number-systems wale chapter se): aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ. Inhe dobara samjhana nahi hai, bas inka use karna hai. **Ek zaroori baat:** teeno niyam tab chalte hain jab sabhi logs ka **base (logₐ ka a) ek hi ho**.

### Niyam 1: Product law

> **logₐ (m × n) = logₐ m + logₐ n**

**Proof:** Maan lo logₐ m = x aur logₐ n = y. Log ki definition se:
- m = aˣ
- n = aʸ

To m × n = aˣ × aʸ = aˣ⁺ʸ (exponent ka pehla niyam). Ab m × n = aˣ⁺ʸ ko log form mein likho:

logₐ (m × n) = x + y = logₐ m + logₐ n ∎

**Jaanch:** log₂ (4 × 8) = log₂ 32 = 5 (kyunki 2⁵ = 32). Doosri taraf log₂ 4 + log₂ 8 = 2 + 3 = 5 ✅

Yaani Napier ki trick yahi hai: guna ko jod mein badal diya.

### Niyam 2: Quotient law

> **logₐ (m ÷ n) = logₐ m − logₐ n**

**Proof:** Phir logₐ m = x, logₐ n = y, yaani m = aˣ aur n = aʸ. To m ÷ n = aˣ ÷ aʸ = aˣ⁻ʸ (exponent ka doosra niyam). Log form mein:

logₐ (m ÷ n) = x − y = logₐ m − logₐ n ∎

**Jaanch:** log₂ (32 ÷ 4) = log₂ 8 = 3. Doosri taraf log₂ 32 − log₂ 4 = 5 − 2 = 3 ✅

### Niyam 3: Power law

> **logₐ (mⁿ) = n × logₐ m**

**Proof:** Maan lo logₐ m = x, yaani m = aˣ. To mⁿ = (aˣ)ⁿ = aⁿˣ (exponent ka teesra niyam). Log form mein:

logₐ (mⁿ) = nx = n × logₐ m ∎

**Jaanch:** 64 = 8², to log₂ 64 = log₂ 8². Seedha: log₂ 64 = 6. Niyam se: 2 × log₂ 8 = 2 × 3 = 6 ✅

---

## Part B: Teen khaas natije

### Natija 1: logₐ (1/n) = −logₐ n

Quotient law mein m = 1 rakho: logₐ (1 ÷ n) = logₐ 1 − logₐ n = 0 − logₐ n = −logₐ n (kyunki logₐ 1 = 0, jo Topic 1 mein dekha tha).

**Jaanch:** log₂ (1/8) = −3, aur −log₂ 8 = −3 ✅ (Topic 2 wala wahi answer, ab niyam se bhi mil gaya)

### Natija 2: logₐ ⁿ√m = (1/n) × logₐ m

Root ek fractional power hai: ⁿ√m = m^(1/n). Power law mein power 1/n rakh do, to logₐ ⁿ√m = (1/n) × logₐ m.

**Jaanch:** log₂ ∛4. Niyam se: (1/3) × log₂ 4 = (1/3) × 2 = **2/3**. Seedha check: ∛4 = 2^(2/3), kyunki (2^(2/3))³ = 2² = 4. To log₂ ∛4 = 2/3 ✅

### Natija 3: logₐ aⁿ = n

Power law se: logₐ aⁿ = n × logₐ a = n × 1 = n (kyunki logₐ a = 1).

**Jaanch:** log₇ 7⁴ = 4 ✅ (7⁴ ko "7 ki kaun si power" ke roop mein dekho, answer seedha 4).

---

## Part C: Solved examples

### Example 1: Product law se value

Find log₂ 16 + log₂ 32.

log₂ 16 + log₂ 32 = log₂ (16 × 32) = log₂ 512 = **9** (2⁹ = 512).

**Jaanch:** alag-alag: log₂ 16 = 4, log₂ 32 = 5, 4 + 5 = 9 ✅

### Example 2: Quotient law se value

Find log₃ 81 − log₃ 27.

log₃ 81 − log₃ 27 = log₃ (81 ÷ 27) = log₃ 3 = **1**.

**Jaanch:** 4 − 3 = 1 ✅

### Example 3: Power law se value

Find log₂ 4⁵.

log₂ 4⁵ = 5 × log₂ 4 = 5 × 2 = **10**.

**Jaanch:** 4⁵ = (2²)⁵ = 2¹⁰, to log₂ 2¹⁰ = 10 ✅

### Example 4: Root wala log

Find log₃ √27.

√27 = 27^(1/2), to log₃ √27 = (1/2) × log₃ 27 = (1/2) × 3 = **3/2**.

**Jaanch:** 3^(3/2) = √(3³) = √27 ✅

### Example 5: Expand karna

Expand log (a³b² ÷ c).

Pehle quotient law: log (a³b²) − log c.
Phir product law: log a³ + log b² − log c.
Phir power law: **3 log a + 2 log b − log c**.

**Numeric jaanch (base 2, a = 2, b = 4, c = 8):** a³b² ÷ c = 8 × 16 ÷ 8 = 16, to log₂ 16 = 4. Expanded: 3 × log₂ 2 + 2 × log₂ 4 − log₂ 8 = 3 × 1 + 2 × 2 − 3 = 3 + 4 − 3 = 4 ✅

### Example 6: Condense karna

Write 2 log 5 + log 4 − log 10 as a single log (base 10).

- 2 log 5 = log 5² = log 25 (power law ulta)
- log 25 + log 4 = log (25 × 4) = log 100 (product law ulta)
- log 100 − log 10 = log (100 ÷ 10) = **log 10**

**Jaanch:** log 10 = 1 (base 10 mein). Alag-alag: log 25 + log 4 − log 10 = log (25 × 4 ÷ 10) = log 10 = 1 ✅

### Example 7: Base 2 mein condense

Simplify log₂ 12 + log₂ 6 − log₂ 9.

= log₂ (12 × 6 ÷ 9) = log₂ (72 ÷ 9) = log₂ 8 = **3**.

**Jaanch:** 2³ = 8 ✅

### Example 8: Chhota tareeka

Find log₆ 4 + log₆ 9.

= log₆ (4 × 9) = log₆ 36 = **2** (kyunki 6² = 36).

**Jaanch:** 6² = 36 ✅ (ye isliye aasan hua ki 4 × 9 seedha 6 ki power bana gaya).

---

## Part D: Sabse zaroori warnings

Mrs. Iyer ne Karthik ko ek baat saaf-saaf boli: "Ye niyam guna, bhaag aur power ke liye hain. **Jod aur ghatane ke liye koi niyam nahi hai.**"

### Warning 1: log (m + n) ≠ log m + log n

Base 10 mein m = 10, n = 90 lo.
- log₁₀ (10 + 90) = log₁₀ 100 = **2**
- log₁₀ 10 + log₁₀ 90 = 1 + 1.9542 = **2.9542** (log 90 ≈ 1.9542, 4 decimal tak round karke)

Dono alag hain. Ek aur check (base 2): log₂ (4 + 4) = log₂ 8 = 3, lekin log₂ 4 + log₂ 4 = 2 + 2 = 4. Phir alag.

### Warning 2: (log m)ⁿ ≠ n × log m

Base 2: (log₂ 8)² = 3² = **9**. Lekin 2 × log₂ 8 = 2 × 3 = **6**. Alag hain. Power law mein power **andar** (m ke upar) hoti hai, log ke upar nahi.

### Warning 3: (log m) ÷ (log n) ≠ log (m ÷ n)

Base 2: log₂ 64 ÷ log₂ 8 = 6 ÷ 3 = **2**. Lekin log₂ (64 ÷ 8) = log₂ 8 = **3**. Alag hain. Quotient law mein logs ka **antar** hota hai, logs ka bhaag nahi.

---

## Aam galtiyan (bachke rehna)

**Galti 1: log (m + n) ko log m + log n likh dena.** Upar Warning 1 dekho. log (10 + 90) = 2, par log 10 + log 90 = 2.9542.

**Galti 2: (log m)ⁿ ko n log m samajh lena, ya log m ÷ log n ko log (m ÷ n).** Upar dono ke number check hain.

**Galti 3: Quotient law mein sign ki chook.** log₂ (32 ÷ 4) = log₂ 32 **−** log₂ 4 = 5 − 2 = 3. Agar galti se jod de diya, 5 + 2 = 7, to galat hai, kyunki log₂ 8 = 3. Aur log (a ÷ c) mein c ka log hamesha **minus** ke saath aata hai: log (a³b² ÷ c) = 3 log a + 2 log b **−** log c.

**Galti 4: Alag-alag base ke logs par niyam lagana.** log₂ 8 + log₃ 9 = 3 + 2 = 5. Ye log₂ (8 × 9) = log₂ 72 nahi hai, kyunki 72 ≠ 2⁵. Niyam tabhi chalte hain jab **base ek hi** ho.

**Galti 5: Power law mein base ko bhi power se guna kar dena.** log₂ 8² = 2 × log₂ 8 = 6. Base 2 wahi rehta hai, sirf log ki value ko guna karte hain.

---

## Quick Recap

- **Product law:** logₐ (m × n) = logₐ m + logₐ n
- **Quotient law:** logₐ (m ÷ n) = logₐ m − logₐ n
- **Power law:** logₐ (mⁿ) = n × logₐ m
- Natije: logₐ (1/n) = −logₐ n, logₐ ⁿ√m = (1/n) logₐ m, logₐ aⁿ = n
- Teeno niyam exponents ke niyam se bane hain aur sirf **same base** par chalte hain.
- **Expand:** log (a³b² ÷ c) = 3 log a + 2 log b − log c. **Condense:** ulta, kai logs ko ek log banao.
- **Yaad rakho:** log (m + n) ≠ log m + log n, (log m)ⁿ ≠ n log m, log m ÷ log n ≠ log (m ÷ n).

---

## Practice Questions

1. Using the product law, find log₃ 9 + log₃ 27. Verify by finding the single log.

2. Find log₂ 128 − log₂ 8 using the quotient law. Verify by finding the single log.

3. Find the value of log₅ 25³.

4. Find the value of log₂ ∛16 and of log₂ (1/32).

5. Expand log (x² y³ / z⁴).

6. Write 3 log 2 + log 125 − log 100 as a single logarithm (base 10) and find its value.

7. Simplify log₃ 18 + log₃ 6 − log₃ 4.

8. A student writes: "log₂ (4 + 4) = log₂ 4 + log₂ 4 = 2 + 2 = 4." Find the mistake and give the correct value.

9. State True or False:
   (a) log (m + n) = log m + log n for all positive m and n.
   (b) log₂ 8 ÷ log₂ 4 = log₂ 2.
   (c) log₆ (1/36) = −2.
   (d) log₃ 3⁷ = 7.

### Answers

1. log₃ 9 + log₃ 27 = log₃ (9 × 27) = log₃ 243 = **5** (3⁵ = 243).
   Jaanch: log₃ 9 = 2, log₃ 27 = 3, 2 + 3 = 5 ✅

2. log₂ 128 − log₂ 8 = log₂ (128 ÷ 8) = log₂ 16 = **4**.
   Jaanch: 7 − 3 = 4 ✅

3. log₅ 25³ = 3 × log₅ 25 = 3 × 2 = **6**.
   Jaanch: 25³ = (5²)³ = 5⁶, to log = 6 ✅

4. log₂ ∛16 = (1/3) × log₂ 16 = (1/3) × 4 = **4/3**.
   Jaanch: 2^(4/3) cubed = 2⁴ = 16 ✅
   log₂ (1/32) = −log₂ 32 = **−5**. Jaanch: 2⁻⁵ = 1/32 ✅

5. log (x²y³ ÷ z⁴) = log x² + log y³ − log z⁴ = **2 log x + 3 log y − 4 log z**.

6. 3 log 2 = log 2³ = log 8. Phir log 8 + log 125 = log 1000. Phir log 1000 − log 100 = log (1000 ÷ 100) = **log 10 = 1**.
   Jaanch: 8 × 125 ÷ 100 = 10 ✅

7. log₃ 18 + log₃ 6 − log₃ 4 = log₃ (18 × 6 ÷ 4) = log₃ (108 ÷ 4) = log₃ 27 = **3**.
   Jaanch: 3³ = 27 ✅

8. Galti: student ne log (m + n) ko log m + log n maan liya. Sahi: log₂ (4 + 4) = log₂ 8 = **3**, jabki 2 + 2 = 4. Dono alag hain.
   (Agar guna hota, log₂ (4 × 4) = log₂ 16 = 4 = 2 + 2 hota, par yahan jod tha.)

9. (a) **False** ❌. Jaise log₁₀ (10 + 90) = 2, par 1 + 1.9542 = 2.9542.
   (b) **False** ❌. log₂ 8 ÷ log₂ 4 = 3 ÷ 2 = 3/2, par log₂ 2 = 1.
   (c) **True** ✅. 6⁻² = 1/6² = 1/36.
   (d) **True** ✅. logₐ aⁿ = n.

---

Karthik ne wahi kiya jo Napier ne socha tha: guna ko jod mein badal diya. Ab jab bhi koi bada log dikhe, pehle poochho: "isme guna hai, bhaag hai, ya power?"

**Aage kya?** Mrs. Iyer ne ek aur chaal batayi: ab diya hua log 2 aur log 3 hamein baaki ke logs bhi de dega. Topic 4 mein hum dekhenge ki sirf in do values se log 6, log 12, log 18 jaise kitne hi logs kaise nikal aate hain, aur logs ke equations aur identities bhi dekhenge.
