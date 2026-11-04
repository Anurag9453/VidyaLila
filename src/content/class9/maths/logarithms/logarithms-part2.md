# Chapter: Logarithms (Part 2)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [logarithms.md](logarithms.md) se aage chalti hai** (wahan Topic 1 hai: aˣ = N aur x = logₐ N ka rishta, base, argument aur value, conditions, logₐ 1 = 0, logₐ a = 1, aur common logarithm).
> **Pehle se zaroori:** rational exponents, yaani a^(m/n), [number-systems-part6.md](../number-systems/number-systems-part6.md) mein dekhe the.
> **Topics covered in this file:**
> 2. Roop Badalna aur Unknown Nikalna

---

# Topic 2: Roop Badalna aur Unknown Nikalna

Topic 1 mein Dr. Ismail ki lab mein Kavin ne bacteria ginte hue ek nayi bhasha seekhi thi: "2 ki power 6 se 64 banta hai" ko hi chhota karke likhte hain **log₂ 64 = 6**. Wahan hum ye bhi samajh chuke hain ki log ka matlab hai "exponent kya hai", aur base, argument aur value kise kehte hain.

Ab sawaal ye hai ki is bhasha ko **chalayein kaise**? Is topic mein hum teen kaam seekhenge: (1) ek roop se doosre roop mein badalna, (2) teen alag-alag cheezein dhoondhna (value, argument ya base), aur (3) ye sab tab bhi karna jab jawab fraction ya negative ho. Koi naya formula nahi hoga. Bas ek hi cheez baar-baar kaam aayegi: **log ko dekhte hi use power wale roop mein badal do.**

---

## Escape room ki pehli plate

Rhea aur Manav ek escape room mein phanse hain. Unke saamne ek bhaari lohe ka darwaza hai, aur uspar teen puzzle plates lagi hain:

> **5 ^ ? = 125**
> **? ^ 4 = 81**
> **8 ^ ? = 4**

Darwaze par ek chhota keypad hai. Neeche likha hai: "Har plate mein jo cheez gayab hai (exponent, base ya number), wahi code mein daalo."

Manav ne pehli plate padhi aur khush ho gaya, "Ye to aasaan hai! 5 × 5 × 5 = 125, to 3."

Rhea ne doosri plate par ungli rakhi, "Is mein ghalat jagah sawaal hai. Yahan **exponent nahi, base** gayab hai. Aur teesri plate to aur ajeeb hai: 8 ki kaunsi power 4 banati hai? 8 se chhota number kaise?"

Manav ruk gaya. "Tab to 8 ki power 1 se kam honi chahiye... shayad fraction."

Rhea muskurayi, "Ye wahi cheez hai jo hum class mein seekh rahe the. Har plate ek **log ka sawaal** hai, bas alag jagah se chhupa hua. Pehle ye seekhte hain ki roop kaise badalte hain, phir teeno plates khud khul jayengi."

Is topic ke end mein hum teeno plates solve karenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Exponential form** | Power wala roop: base ki power se number banta hai | 2⁵ = 32 |
| **Logarithmic form** | Wahi baat, log ke roop mein | log₂ 32 = 5 |
| **Roop badalna** | Ek form ko doosre form mein likhna, matlab wahi rehta hai | 3⁴ = 81 ↔ log₃ 81 = 4 |
| **Unknown** | Wo cheez jo gayab hai aur hume dhoondhni hai | log₃ 81 = ? mein jawab |
| **Same base** | Do numbers ko ek hi chhote base ki power ke roop mein likhna | 4 = 2² aur 32 = 2⁵ |

---

## Part A: Kaise badlein (ek se doosre roop mein)

Topic 1 ka rishta yaad karo:

> aˣ = N ↔ x = logₐ N

Ye dono roop **ek hi baat** bolte hain. Bas teen cheezein apni jagah badalti hain. Ek chhoti si trick: **base base hi rehta hai**, exponent log ke "baraabar" ke baad aata hai, aur number log ke baad.

| Exponential | Logarithmic |
|---|---|
| base ˣ = number | log (base likho neeche) number = x |

Padhne ki aasan tarkeeb: "base ki power **x** se **number** banta hai" ko log mein likho to "**x** hai **log number**, base ke hisaab se".

### Ladder: ek ek step chadhte jao

**Step 1:** 11² = 121 se log mein.
- base = 11, exponent = 2, number = 121
- **log₁₁ 121 = 2**

**Step 2:** 10⁷ = 10000000 se log mein.
- **log₁₀ 10000000 = 7**

**Step 3:** 12² = 144 se log mein.
- **log₁₂ 144 = 2**

**Step 4 (negative exponent):** 3⁻² = 1/9 se log mein.
- base = 3, exponent = −2, number = 1/9
- **log₃ (1/9) = −2**

**Step 5 (fractional exponent):** 16^(1/2) = 4 se log mein.
- base = 16, exponent = 1/2, number = 4
- **log₁₆ 4 = 1/2**

Ab ulta, yaani log se power mein.

**Step 6:** log₁₄ 196 = 2 se power mein.
- base = 14, value = 2, argument = 196
- **14² = 196**

**Step 7:** log₂₅ 625 = 2 se power mein.
- **25² = 625**

**Step 8 (negative value):** log₁₀ 0.1 = −1 se power mein.
- **10⁻¹ = 0.1**

**Step 9 (fractional value):** log₉ 3 = 1/2 se power mein.
- **9^(1/2) = 3**

**Step 10:** log₂₀ 400 = 2 se power mein.
- **20² = 400**

**Jaanch (har step ko ek baar dekh lo):**
- 11² = 121 ✅ (11×11)
- 10⁷ = 10000000 ✅ (1 ke baad 7 zero)
- 12² = 144 ✅
- 3⁻² = 1/3² = 1/9 ✅
- 16^(1/2) = √16 = 4 ✅
- 14² = 196 ✅
- 25² = 625 ✅
- 10⁻¹ = 1/10 = 0.1 ✅
- 9^(1/2) = √9 = 3 ✅
- 20² = 400 ✅

**Ek zaroori baat:** log ke roop mein base ek chhoti si **neeche** likhi hui hoti hai, aur woh hamesha **power wale roop ka base** hi hota hai. Number (argument) kabhi base nahi banta. Is galti par hum "Aam galtiyan" mein wapas aayenge.

---

## Part B: Teen tarah ke unknown

Kisi bhi log ke sawaal mein teen cheezein hoti hain: **base, argument aur value**. Sawaal mein inme se ek gayab hoti hai. Teeno ke liye tareeka ek hi hai: **pehle power wale roop mein badlo, phir wahi seedha sawaal solve karo.**

### 1. Value gayab hai: logₐ N = ?

**Tareeka:** log ko "kya power" ka sawaal samjho. "base ki kaunsi power argument banati hai?" Pehle exponential form likho: base ^ ? = argument.

**Example 1: log₃ 729 = ?**
- Maan lo log₃ 729 = x. Power roop mein: 3ˣ = 729.
- 3¹ = 3, 3² = 9, 3³ = 27, 3⁴ = 81, 3⁵ = 243, 3⁶ = 729. To x = 6.
- **log₃ 729 = 6**

**Jaanch:** 3⁶ = 243 × 3 = 729 ✅

**Example 2: log₁₃ 169 = ?**
- 13ˣ = 169. 13¹ = 13, 13² = 169.
- **log₁₃ 169 = 2**

**Jaanch:** 13 × 13 = 169 ✅

**Example 3: log₇ 343 = ?**
- 7ˣ = 343. 7¹ = 7, 7² = 49, 7³ = 343.
- **log₇ 343 = 3**

**Jaanch:** 7 × 7 × 7 = 343 ✅

### 2. Argument gayab hai: logₐ x = value

**Tareeka:** Power roop mein badlo: x = a^(value). Phir bas power calculate karo.

**Example 4: log₁₅ x = 2**
- Power roop: x = 15²
- x = 225

**Jaanch:** log₁₅ 225 = 2 kyunki 15² = 225 ✅

**Example 5: log₁₀ x = −2**
- Power roop: x = 10⁻²
- x = 1/10² = 1/100 = **0.01**

**Jaanch:** 10⁻² = 0.01, aur log₁₀ 0.01 = −2 ✅

**Example 6: log₄ x = 1/2**
- Power roop: x = 4^(1/2)
- 4^(1/2) = √4 = **2**

**Jaanch:** 4^(1/2) = 2, to log₄ 2 = 1/2 ✅

### 3. Base gayab hai: logₐ N = value

**Tareeka:** Power roop mein badlo: a^(value) = N. Ab ye ek "kis number ki power N deti hai?" ka sawaal ban gaya, aur base **positive** aur **1 se alag** hona chahiye (Topic 1 ki shart).

**Example 7: logₐ 512 = 3**
- Power roop: a³ = 512
- Kaunsa number 3 baar guna karne se 512 deta hai? 8 × 8 × 8 = 512.
- **a = 8**

**Jaanch:** log₈ 512 = 3 kyunki 8³ = 512 ✅

**Example 8: logₐ 81 = 4**
- Power roop: a⁴ = 81
- 3 × 3 × 3 × 3 = 81
- **a = 3**

(Dhyan do: (−3)⁴ bhi 81 hota hai, par base **positive** hona zaroori hai, isliye −3 nahi chalega.)

**Jaanch:** 3⁴ = 81 ✅

**Example 9: logₐ 8 = −3 (jab base fraction nikle)**
- Power roop: a⁻³ = 8
- a⁻³ ka matlab 1/a³. To 1/a³ = 8, yaani a³ = 1/8.
- (1/2)³ = 1/8. To **a = 1/2**.

**Jaanch:** (1/2)⁻³ = 2³ = 8 ✅. Base 1/2 positive hai aur 1 se alag hai, to ye chalta hai.

---

## Part C: Fraction aur negative jawab

Ab tak hamare jawab 3, 4, 5 jaise seedhe numbers the. Par log ka jawab negative ya fraction bhi ho sakta hai. Dono ke peeche wahi puraani exponent ki baatein hain.

### Negative jawab: kab aate hain?

**Example 10: log₂ (1/8) = ?**
- 2ˣ = 1/8
- Hum jaante hain 2³ = 8, aur 2⁻³ = 1/2³ = 1/8.
- To x = **−3**.
- **log₂ (1/8) = −3**

**Jaanch:** 2⁻³ = 1/8 ✅

**Example 11: log₁₀ 0.001 = ?**
- 10ˣ = 0.001 = 1/1000 = 1/10³ = 10⁻³
- **log₁₀ 0.001 = −3**

**Jaanch:** 10⁻³ = 1/1000 = 0.001 ✅

**Example 12: log₅ (1/25) = ?**
- 5ˣ = 1/25. 25 = 5², to 1/25 = 1/5² = 5⁻².
- **log₅ (1/25) = −2**

**Jaanch:** 5⁻² = 1/25 ✅

### Ye negative kyun aa raha hai?

Jab base **1 se bada** ho (jaise 2, 5, 10), to base ki **positive** power hamesha base se bada ya barabar number deti hai: 2¹ = 2, 2² = 4, 2³ = 8. Chhota number (1 se chhota) banane ke liye power ko **ulta** karna padta hai, yaani **negative** power: 2⁻¹ = 1/2, 2⁻² = 1/4, 2⁻³ = 1/8.

> **Base 1 se bada ho, to:**
> - argument **1 se bada** ho, to log **positive**
> - argument **barabar 1** ho, to log **0** (Topic 1 se: logₐ 1 = 0)
> - argument **0 aur 1 ke beech** ho, to log **negative**

Isse tum bina nikale hi sign bata sakte ho. Jaise log₁₀ 0.5: 0.5 chhota hai 1 se, to jawab negative hoga. Aur log₂ 10: 10 bada hai 1 se, to jawab positive.

**Base 0 aur 1 ke beech ho** (jaise 1/2), to ye sign ulta ho jata hai. Example 9 mein yahi dikha: base 1/2 par 8 ka log −3 hai, kyunki (1/2)⁻³ = 8.

**Dhyan rahe:** argument kabhi negative ya zero nahi hota. log₂ (−8) kuch nahi hota (Topic 1 ki shart). Negative sirf **jawab (value)** ho sakta hai, argument nahi.

---

## Part D: Fractional jawab

Ab wo jawab jahan value ek fraction hoti hai. Ye wahi rational exponents hain jo [number-systems-part6.md](../number-systems/number-systems-part6.md) mein dekhe the: a^(m/n) ka matlab hai "n-th root lo, phir m power karo".

**Example 13: log₈ 4 = 2/3**
- Pehle dekhte hain ki 8^(2/3) kya hota hai.
- 8^(1/3) = cube root of 8 = 2, aur phir uska square: 2² = 4.
- Yaani 8^(2/3) = 4.
- To **log₈ 4 = 2/3**

**Jaanch:** 8^(2/3) = (8^(1/3))² = 2² = 4 ✅

**Example 14: log₂₇ 3 = 1/3**
- 27^(1/3) = cube root of 27 = 3.
- **log₂₇ 3 = 1/3**

**Jaanch:** 3³ = 27, to cube root of 27 = 3 ✅

**Example 15: log₄ 2 = 1/2**
- 4^(1/2) = √4 = 2.
- **log₄ 2 = 1/2**

**Jaanch:** 2² = 4 ✅

**Example 16: log₈ 2 = 1/3**
- 8^(1/3) = cube root of 8 = 2.
- **log₈ 2 = 1/3**

**Jaanch:** 2³ = 8 ✅

**Pattern dekho:** jab argument base ka **root** hota hai (jaise 2 hai 4 ka square root aur 8 ka cube root), to log ek fraction aata hai: **1/2** square root ke liye, **1/3** cube root ke liye. Bas wahi rational exponent wali baat, naye kapdon mein.

---

## Part E: Pehle dono ko ek hi base ki power mein likho

Kabhi-kabhi sawaal dekhne mein mushkil lagta hai: **log₄ 32 = ?** Yahan 4 ki kaunsi power 32 hai? 4¹ = 4, 4² = 16, 4³ = 64... 32 beech mein aa gaya, na 4² na 4³! Iska matlab jawab ek fraction hai, aur seedha dhoondhna kathin hai.

Yahan ek kamaal ki trick kaam aati hai: **dono numbers (base aur argument) ko ek hi chhote base, jaise 2, ki power mein likho.**

**Example 17: log₄ 32 = ?**

**Step 1:** Dono ko 2 ki power mein likho.
- 4 = 2²
- 32 = 2⁵ (2, 4, 8, 16, 32: paanch baar)

**Step 2:** Maan lo log₄ 32 = x. Power roop: 4ˣ = 32.

**Step 3:** 4 ko 2² se badlo: (2²)ˣ = 2⁵.
- (2²)ˣ ka matlab 2 ki power "2 × x", yaani 2^(2x). (Ye power ki power wala puraana exponent ka niyam hai.)
- To 2^(2x) = 2⁵.

**Step 4:** Jab base ek hi ho, to power barabar hoti hai: 2x = 5, to x = **5/2**.

**log₄ 32 = 5/2**

**Jaanch:** 4^(5/2) = (√4)⁵ = 2⁵ = 32 ✅

**Example 18: log₈ 4 = ? (Example 13 ko is trick se phir karte hain)**
- 8 = 2³, 4 = 2².
- (2³)ˣ = 2², yaani 2^(3x) = 2².
- 3x = 2, to x = **2/3** (Example 13 se milta hai.)

**Example 19: log₉ 27 = ?**
- Is baar dono 3 ki power mein: 9 = 3², 27 = 3³.
- (3²)ˣ = 3³, yaani 3^(2x) = 3³.
- 2x = 3, to x = **3/2**

**Jaanch:** 9^(3/2) = (√9)³ = 3³ = 27 ✅

**Example 20: log₄ (1/8) = ? (negative aur fraction dono)**
- 4 = 2², aur 1/8 = 2⁻³.
- (2²)ˣ = 2⁻³, yaani 2^(2x) = 2⁻³.
- 2x = −3, to x = **−3/2**

**Jaanch:** 4^(−3/2) = 1/4^(3/2) = 1/(√4)³ = 1/2³ = 1/8 ✅

**Kab kaam karti hai ye trick?** Jab base aur argument dono ek hi chhote number (2, 3, 5 ...) ki powers ho. Pehle "ek hi base" dhoondho, phir sirf exponents ko barabar kar do.

---

## Escape room: teeno plates khul gayi

Rhea ne apni copy khol li, "Ab hum teeno plates ko sahi tarah se solve kar sakte hain."

### Plate 1: 5 ^ ? = 125 (exponent gayab hai, **value** dhoondhni hai)

Manav ne pehle hi bata diya tha, par ab hum log ke roop mein likhte hain.
- 5ˣ = 125 ka matlab hai x = log₅ 125.
- 5 × 5 × 5 = 125, to **x = 3**.

**Jaanch:** 5³ = 125 ✅

### Plate 2: ? ^ 4 = 81 (base gayab hai, **base** dhoondhna hai)

Rhea bole, "Is plate ko log ke roop mein likho: logₐ 81 = 4."
- Power roop: a⁴ = 81.
- 3 × 3 × 3 × 3 = 81, to **a = 3**.
- (−3)⁴ bhi 81 hota hai, par base positive hona chahiye. Isliye sirf **3**.

**Jaanch:** 3⁴ = 81 ✅

### Plate 3: 8 ^ ? = 4 (exponent gayab hai, jawab fraction hoga)

Manav pehle atka tha. "8 ki power 4 kaise ho sakti hai? 8¹ = 8 to 4 se bada hai!"

Rhea: "Isliye power **1 se kam** hogi. Ek fraction. Aur 8 aur 4 dono 2 ki powers hain. Wahi trick."
- 8 = 2³, 4 = 2².
- (2³)ˣ = 2², yaani 2^(3x) = 2².
- 3x = 2, to **x = 2/3**.

**Jaanch:** 8^(2/3) = (8^(1/3))² = 2² = 4 ✅

### Code khul gaya

Teeno gayab cheezein mili: **3**, **3** aur **2/3**. Rhea aur Manav ne keypad mein ye daale. Ek click ki awaaz aayi, aur bhaari darwaza dheere se khul gaya.

Manav ne hans kar kaha, "Aaj pata chala ki log sirf ek sawaal hai: **kaunsi power?**"

---

## Aam galtiyan (bachke rehna)

**Galti 1: Argument ko base bana dena**

Sawaal: 2⁵ = 32 ko log mein likho.
- Galat: log₃₂ 5 = 2. (Yahan 32 ko base bana diya, jo galat hai.)
- Sahi: **log₂ 32 = 5**. Base wahi jo power wale roop mein tha: 2.

Check karne ka tareeka: log ko wapas power mein badlo. log₃₂ 5 = 2 se 32² = 5 hona chahiye, jo sahi nahi hai (32² = 1024). Wapas power mein badal kar hamesha check kar lo.

**Galti 2: Negative exponent mein sign ki galti**

Sawaal: log₂ (1/8) = ?
- Galat: 2³ = 8 hai, to log₂ (1/8) = 3. Ye galat hai kyunki 2³ = 8, 1/8 nahi.
- Sahi: 1/8 = 2⁻³, to **log₂ (1/8) = −3**.

Yaad rakho: 1 se chhota argument (base > 1 ke liye) matlab **negative** value. Agar 1/8 jaisa chhota number diya ho aur jawab positive aa raha ho, ruk jao aur check karo.

**Galti 3: 10⁻² ko −100 samajh lena**

- Galat: 10⁻² = −100.
- Sahi: 10⁻² = 1/10² = 1/100 = **0.01**. Negative power ka matlab hai "ulta (reciprocal)", number negative nahi hota.

**Galti 4: Dono ko same base mein na likhna**

Sawaal: log₄ 32 = ?
- Galat: "4² = 16, 4³ = 64, to 32 ka log kuch nahi hota." Ye galat hai. Log hai, bas ek fraction.
- Sahi: dono ko 2 ki power mein likho: 4 = 2², 32 = 2⁵. Phir 2x = 5, to **x = 5/2**.

**Galti 5: Base nikalte waqt negative root le lena**

logₐ 81 = 4 mein a⁴ = 81. (−3)⁴ = 81 bhi hai, par base **positive** hona chahiye. Isliye sirf a = 3. Even power (2, 4, 6 ...) mein negative number bhi sahi baith jata hai, isliye yahan khaas dhyan rakho.

---

## Quick Recap

- **aˣ = N ↔ x = logₐ N.** Dono ek hi baat hain, base base hi rehta hai.
- Roop badalne ki aadat: log dekho to turant power wala roop likho, aur power wala roop dekho to log wala.
- **Teen tarah ka unknown:**
  - **value:** a^? = N likho aur "kaunsi power" socho.
  - **argument:** logₐ x = k to x = aᵏ.
  - **base:** logₐ N = k to aᵏ = N, aur a positive hona chahiye.
- **Negative value:** jab base 1 se bada ho aur argument 0 aur 1 ke beech ho. Jaise log₂ (1/8) = −3, log₁₀ 0.001 = −3, log₅ (1/25) = −2.
- **Fraction value:** rational exponent se. Jaise log₈ 4 = 2/3, log₂₇ 3 = 1/3, log₄ 2 = 1/2, log₈ 2 = 1/3.
- **Dono ko ek hi base ki power mein likho** (jaise 4 = 2², 32 = 2⁵), phir exponents barabar karo. log₄ 32 = 5/2.
- Galtiyan: argument ko base bana dena, negative exponent mein sign bhool jana, same base mein na likhna.

---

## Practice Questions

1. Write in logarithmic form: (a) 8² = 64 (b) 2⁻⁴ = 1/16 (c) 25^(1/2) = 5 (d) 10⁻⁵ = 0.00001

2. Write in exponential form: (a) log₅ 3125 = 5 (b) log₁₉ 361 = 2 (c) log₂ (1/32) = −5 (d) log₁₂₅ 5 = 1/3

3. Find the value of: (a) log₄ 256 (b) log₇ (1/49) (c) log₁₀ 0.0001

4. Find x: (a) log₁₇ x = 2 (b) log₂ x = −2 (c) log₉ x = 1/2

5. Find the base a: (a) logₐ 1331 = 3 (b) logₐ 16 = 4 (c) logₐ 9 = −2

6. Find the value, by writing both numbers as powers of the same small number: (a) log₂₅ 125 (b) log₁₆ 8 (c) log₃₂ 2 (d) log₈ 32

7. Without calculating, say whether each value is positive, negative or zero, and give a one-line reason: (a) log₂ (1/10) (b) log₃ 20 (c) log₁₃ 1 (d) log₁₀ 0.25

8. Rhea and Manav meet two more plates on the next door: "27 ^ ? = 9" and "? ^ 3 = 1/8". Find the missing number on each plate. (The base must be positive.)

9. Manav writes: "5² = 25, so log₂₅ 5 = 2." Find his mistake and write the correct statement. Then also write the value of log₂₅ 5.

10. State True or False:
    (a) log₂ (−8) = −3
    (b) log₂ 0.5 = −1
    (c) log₄₉ 7 = 1/2
    (d) If log₁₀ N is negative, then N is less than 1.

### Answers

1. (a) 8² = 64 ke base 8, exponent 2, number 64. To **log₈ 64 = 2**.
   (b) **log₂ (1/16) = −4**.
   (c) **log₂₅ 5 = 1/2**.
   (d) **log₁₀ 0.00001 = −5**.
   Jaanch: 8² = 64 ✅, 2⁻⁴ = 1/16 ✅, 25^(1/2) = 5 ✅, 10⁻⁵ = 1/100000 = 0.00001 ✅

2. (a) **5⁵ = 3125**
   (b) **19² = 361**
   (c) **2⁻⁵ = 1/32**
   (d) **125^(1/3) = 5**
   Jaanch: 5 × 5 × 5 × 5 × 5 = 3125 ✅, 19 × 19 = 361 ✅, 1/2⁵ = 1/32 ✅, cube root of 125 = 5 ✅

3. (a) 4ˣ = 256, 4⁴ = 256, to **4**.
   (b) 7ˣ = 1/49 = 1/7² = 7⁻², to **−2**.
   (c) 10ˣ = 0.0001 = 1/10⁴ = 10⁻⁴, to **−4**.
   Jaanch: 4⁴ = 256 ✅, 7⁻² = 1/49 ✅, 10⁻⁴ = 0.0001 ✅

4. (a) x = 17² = **289**.
   (b) x = 2⁻² = 1/2² = **1/4**.
   (c) x = 9^(1/2) = √9 = **3**.
   Jaanch: log₁₇ 289 = 2 ✅, log₂ (1/4) = −2 ✅, log₉ 3 = 1/2 ✅

5. (a) a³ = 1331, 11 × 11 × 11 = 1331, to **a = 11**.
   (b) a⁴ = 16, 2 × 2 × 2 × 2 = 16, to **a = 2** (−2 nahi chalega, base positive hota hai).
   (c) a⁻² = 9 ka matlab 1/a² = 9, yaani a² = 1/9, to **a = 1/3**.
   Jaanch: 11³ = 1331 ✅, 2⁴ = 16 ✅, (1/3)⁻² = 3² = 9 ✅

6. (a) 25 = 5², 125 = 5³. 5^(2x) = 5³, 2x = 3, **x = 3/2**. Jaanch: 25^(3/2) = (√25)³ = 125 ✅
   (b) 16 = 2⁴, 8 = 2³. 2^(4x) = 2³, 4x = 3, **x = 3/4**. Jaanch: 16^(3/4) = (16^(1/4))³ = 2³ = 8 ✅
   (c) 32 = 2⁵, 2 = 2¹. 2^(5x) = 2¹, 5x = 1, **x = 1/5**. Jaanch: 32^(1/5) = 2 kyunki 2⁵ = 32 ✅
   (d) 8 = 2³, 32 = 2⁵. 2^(3x) = 2⁵, 3x = 5, **x = 5/3**. Jaanch: 8^(5/3) = (8^(1/3))⁵ = 2⁵ = 32 ✅

7. (a) **Negative**: base 2 > 1 aur 1/10 argument 0 aur 1 ke beech hai.
   (b) **Positive**: base 3 > 1 aur 20 > 1.
   (c) **Zero**: logₐ 1 = 0 hamesha (Topic 1).
   (d) **Negative**: 0.25 chhota hai 1 se aur base 10 > 1 hai.

8. Plate "27 ^ ? = 9": 27 = 3³, 9 = 3², 3^(3x) = 3², 3x = 2, **x = 2/3**. Jaanch: 27^(2/3) = (∛27)² = 3² = 9 ✅
   Plate "? ^ 3 = 1/8": a³ = 1/8, (1/2)³ = 1/8, to **a = 1/2**. Jaanch: (1/2)³ = 1/8 ✅

9. Manav ne 5² = 25 mein base 5 ko chhod kar 25 ko base bana diya. Sahi bayan: 5² = 25 ka log roop hai **log₅ 25 = 2**. Aur log₂₅ 5 alag cheez hai: 25ˣ = 5, to x = **1/2** (kyunki √25 = 5). Jaanch: 25^(1/2) = 5 ✅

10. (a) **False** ❌. Argument negative nahi ho sakta. Aur 2⁻³ = 1/8, −8 nahi.
    (b) **True** ✅. 2⁻¹ = 1/2 = 0.5.
    (c) **True** ✅. 49^(1/2) = √49 = 7.
    (d) **True** ✅. Base 10 > 1 ho to negative log tabhi aata hai jab argument 0 aur 1 ke beech ho.

---

Ab aap log ki bhasha ko dono taraf se padh sakte ho, aur gayab cheez (value, argument ya base) kahin se bhi dhoondh sakte ho. Jab bhi atko, bas ek hi kaam karo: **log ko power ke roop mein badal do.**

**Aage kya?** Ab tak hum ek-ek log alag se solve karte rahe. Topic 3 mein ek bada hi mazedaar raaz khulega: **log multiplication ko addition mein badal deta hai.** Yaani do numbers ko guna karna, unke logs ko jodne jaisa ban jata hai. Ye hi logarithm ki asli taakat hai.
