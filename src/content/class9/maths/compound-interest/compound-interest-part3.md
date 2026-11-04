# Chapter: Compound Interest (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [compound-interest-part2.md](compound-interest-part2.md) se aage chalti hai** (wahan year-by-year table method hai). Chapter ki shuruaat [compound-interest.md](compound-interest.md) mein hai.
> **Topics covered in this file:**
> 3. Compound Interest ka Formula

---

# Topic 3: Compound Interest ka Formula

Pichle topic mein humne compound interest ko **saal-dar-saal table** banakar nikala tha (jaise Harpreet ji ke ₹50,000 ke trolley loan ki table, jo 2 saal mein ₹58,320 ho gaya): har saal ka interest alag nikalo, use principal mein jodo, phir agle saal ke liye wahi kaam dobara. 2-3 saal tak ye theek chala. Par socho, agar 10 saal ya 20 saal ka sawaal aa jaye to? Table ki 10 ya 20 rows banani padengi, aur har row mein ek chhoti si galti poora jawab bigaad sakti hai.

Is topic mein hum us lambe tareeke ko **ek line ke formula** mein badalenge. Aur sabse achhi baat: ye formula wahi cheez hai jo table baar-baar kar rahi thi, bas use ek baar mein likh diya gaya hai.

---

## Iqbal ji aur 10 saal ki FD

Mohan chacha retire hue hain. Unke paas ₹5,000 nahi, poore ₹50,000 bache hain, aur wo bank jaate hain **10 saal ki Fixed Deposit (FD)** karwane. Bank mein Iqbal ji kaam karte hain. Interest rate hai 10% saalana, **compound** hota hai.

Chacha poochte hain: "Beta, 10 saal baad mere paas kitne paise honge?"

Iqbal ji muskuraate hain: "Chacha, table banaun to 10 rows banengi. Chai thandi ho jayegi. Ek shortcut dikhata hoon."

Wo ek kaagaz par ye likhte hain:

**Har saal paisa 10% badhta hai, yaani har saal paisa 1.1 guna ho jata hai.**
Isliye 10 saal baad paisa ho jayega: **50,000 × 1.1 × 1.1 × ... (10 baar)**

"Bas itna hi, chacha. Table ki 10 rows ek line mein."

Chacha ne poochha: "Par ye 1.1 aaya kahan se?" Chaliye wahi samajhte hain. Fir hum dekhenge ki Iqbal ji ki ye line ek poora **formula** kaise ban jaati hai.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Growth factor** | Har saal paisa kitne guna ho jata hai: (1 + r/100) | 10% par factor 1.1 (yaani 11/10) |
| **Power (ghaat), n** | Factor ko kitni baar khud se multiply kiya | (1.1)³ = 1.1 × 1.1 × 1.1 |
| **Amount (A)** | Paisa jo n saal baad kul milega | A = P(1 + r/100)ⁿ |
| **Compound Interest (CI)** | Amount mein se original principal hata do | CI = A − P |

---

## Part A: Formula kaise bana (derivation)

Maan lo principal **P** hai, rate **r% saalana**, aur interest **har saal principal mein judta jaata hai**.

**Pehle ek chhota sa trick samjho.** Kisi cheez par 10% badhana matlab: purani cheez + uska 10%. Yaani:

> 100 + 10 = **110**, yaani 100 ka **1.1 guna**

Ya paison mein: P + P × (r/100) = P × (1 + r/100). Is (1 + r/100) ko hum **growth factor** kehte hain. Har saal ke end mein paisa isse multiply hota hai, bas.

### Saal 1
Saal ke shuru mein P tha. Ek saal baad:

A₁ = P × (1 + r/100)

### Saal 2
Ab "naya principal" A₁ hai. Dusre saal ke end mein phir factor se multiply:

A₂ = A₁ × (1 + r/100) = P × (1 + r/100) × (1 + r/100) = **P(1 + r/100)²**

### Saal 3
Ab naya principal A₂:

A₃ = A₂ × (1 + r/100) = **P(1 + r/100)³**

### Pattern dikh raha hai?

| Saal | Amount | Power |
|---|---|---|
| 1 | P(1 + r/100) | 1 |
| 2 | P(1 + r/100)² | 2 |
| 3 | P(1 + r/100)³ | 3 |
| ... | ... | ... |
| n | P(1 + r/100)ⁿ | **n** |

Har saal ek aur baar factor se multiply hota hai, to power saal ke barabar badhta hai. Isliye **n saal** baad:

> **A = P(1 + r/100)ⁿ**
> **CI = A − P**

Yaani ye wahi "×1.1, ×1.1, ×1.1..." hai jo Iqbal ji ne likha tha, bas power ki short-hand mein. Yahan **P** = principal, **r** = rate (% mein), **n** = saalon ki sankhya.

Chacha ka FD ab ek line mein: A = 50,000 × (1.1)¹⁰. Ye bada number hai (calculator se nikalte hain), isliye seekhne ke liye pehle chhote, saaf numbers lete hain.

---

## Part B: Formula se CI nikalna

### Example 1: ₹5,000, 10% saalana, 3 saal

**Step 1:** Do cheezein pehchano: P = 5,000, r = 10, n = 3.

**Step 2:** Factor nikalo. 1 + 10/100 = 1 + 1/10 = **11/10**.

**Step 3:** Formula lagao:

A = 5,000 × (11/10)³
 = 5,000 × (11 × 11 × 11)/(10 × 10 × 10)
 = 5,000 × 1331/1000
 = 5 × 1331
 = **₹6,655**

**Step 4:** CI = A − P = 6,655 − 5,000 = **₹1,655**

**Jaanch (table method se):**
- Saal 1: 5,000 + 500 = 5,500
- Saal 2: 5,500 + 550 = 6,050
- Saal 3: 6,050 + 605 = **6,655** ✅

Dono tareeke ka jawab same. Par formula mein sirf ek line lagi.

**Fraction ka faayda:** 1.1 ko 11/10 likhne se 1000 ka denominator seedha 5,000 mein kat gaya. Hamesha dekho ki P ka koi hissa denominator se kat sakta hai ya nahi.

### Example 2: ₹12,000, 5% saalana, 2 saal

(Ye Topic 2 ke Practice Q1 wala hi sawaal hai. Wahan table se ₹13,230 aaya tha, ab formula se dekhte hain.)

Factor = 1 + 5/100 = 1 + 1/20 = **21/20**.

A = 12,000 × (21/20)²
 = 12,000 × 441/400
 = 30 × 441    (kyunki 12,000 ÷ 400 = 30)
 = **₹13,230**

CI = 13,230 − 12,000 = **₹1,230**

**Jaanch (table method se):**
- Saal 1: 5% of 12,000 = 600, amount = 12,600
- Saal 2: 5% of 12,600 = 630, amount = 12,600 + 630 = **13,230** ✅

**Ek aur jaanch (Topic 2 wala 2 saal ka rule):** CI − SI = P(r/100)²
SI = 12,000 × 5 × 2/100 = 1,200. CI − SI = 1,230 − 1,200 = 30.
P(r/100)² = 12,000 × (1/20)² = 12,000/400 = 30 ✅

---

## Part C: Ulte sawaal (formula se P, r ya n nikalna)

Formula mein chaar cheezein hain: A, P, r, n. Inme se koi teen pata hon to chauthi nikaal sakte hain. Ek hi formula, bas kaun si cheez anjaan hai, wo badalta hai.

### Example 3: P nikalna

5% saalana par 3 saal baad amount ₹9,261 hai. Principal kya tha?

A = P(21/20)³
9,261 = P × (21 × 21 × 21)/(20 × 20 × 20) = P × 9261/8000

Dono taraf ko 9261/8000 se divide karo (ya 8000/9261 se multiply):

P = 9,261 × 8000/9261 = **₹8,000**

Yahan 9,261 hi 21³ hai, isliye saaf kat gaya.

**Jaanch:** 8,000 × 21/20 = 8,400 → 8,400 × 21/20 = 8,820 → 8,820 × 21/20 = **9,261** ✅

### Example 4: Rate nikalna

₹10,000, 2 saal mein ₹12,100 ho jaata hai (compound). Rate kya hai?

12,100 = 10,000 × (1 + r/100)²

(1 + r/100)² = 12,100/10,000 = 121/100

(Mannat ka FD yaad hai? Topic 1 mein ₹10,000 isi tarah 11,000 aur phir 12,100 hue the.)

Dono taraf ka square root lo: 1 + r/100 = 11/10

r/100 = 11/10 − 1 = 1/10, to **r = 10%**

**Jaanch:** 10,000 × 1.1 = 11,000 → 11,000 × 1.1 = **12,100** ✅

(Dhyan rahe: yahan sawaal "perfect square" par bana hai, 121 = 11². Aise hi saaf jawab aate hain.)

### Example 5: Time (n) nikalna

₹4,000, 5% saalana par ₹4,630.50 ban jaata hai. Kitne saal?

4,630.50 = 4,000 × (21/20)ⁿ

(21/20)ⁿ = 4,630.50/4,000 = 1.157625

Ab 1.05 ki powers try karte hain (21/20 = 1.05):
- 1.05¹ = 1.05
- 1.05² = 1.1025
- 1.05³ = 1.1025 × 1.05 = **1.157625** ✅

To **n = 3 saal**.

Seedha nikalne ka formula Class 9 mein nahi aata (ye logarithm se hota hai, aage ki class mein). Yahan hum **powers try karke** match karte hain, aur sawaal aise hi bane hote hain ki jaldi mil jaye.

**Jaanch:** 4,000 × 1.05 = 4,200 → 4,200 × 1.05 = 4,410 → 4,410 × 1.05 = **4,630.50** ✅

---

## Part D: Double aur Triple hone ka khel

Ek dilchasp baat. Maan lo kisi rate par paisa **n saal mein double** ho jaata hai. Ab 2n saal mein kya hoga?

Har n saal ke blocks mein paisa 2 guna hota hai (kyunki growth factor har block mein wahi hai):
- n saal mein: P → **2P**
- agle n saal mein: 2P → 2 × 2P = **4P**

> Agar paisa **n saal mein 2 guna** hota hai, to **2n saal mein 4 guna**, aur **3n saal mein 8 guna**.

Formula se sabit karo: maan lo (1 + r/100)ⁿ = 2. To 2n saal mein A = P(1 + r/100)²ⁿ = P × [(1 + r/100)ⁿ]² = P × 2² = **4P** ✅

Isi tarah, agar paisa **n saal mein 3 guna** ho, to **2n saal mein 9 guna**, aur 3n saal mein 27 guna.

**Topic 1 wala andaaza ab jaancho:** Mannat ke liye kaha tha ki 10% par paisa lagbhag 7 se 8 saal mein dugna hota hai. Powers try karo: (1.1)⁷ ≈ 1.95 aur (1.1)⁸ ≈ 2.14. Yaani 7 saal mein dugne se thoda kam, 8 saal mein thoda zyada. Andaaza sahi tha.

### Example 6

Kisi bank mein ₹5,000 kul **8 saal mein ₹10,000** ho jaate hain (compound; ye lagbhag 9% saalana par hota hai, kyunki (1.09)⁸ ≈ 1.99). 16 saal baad kitne honge? Aur 24 saal baad?

- 16 saal = 2 × 8 saal, to paisa **4 guna**: 5,000 × 4 = **₹20,000**
- 24 saal = 3 × 8 saal, to **8 guna**: 5,000 × 8 = **₹40,000**

**Jaanch:** 8 saal mein 5,000 → 10,000. Agle 8 saal mein 10,000 → 20,000. Agle 8 mein 20,000 → 40,000. ✅

### Example 7 (tripling)

₹2,000, 12 saal mein ₹6,000 ban gaye (3 guna). 24 saal mein kitne? Wo 12 ke 2 block hain, to 3 × 3 = 9 guna: 2,000 × 9 = **₹18,000**. Jaanch: 6,000 → 18,000 (phir 3 guna) ✅

**Simple interest se fark:** SI mein agar paisa n saal mein double ho, to 2n saal mein sirf **3 guna** hota hai (kyunki har n saal mein sirf ek P judta hai). Compound mein **4 guna**. Yahi compound ki taakat hai.

---

## Aam galtiyan (bachke rehna)

**Galti 1: CI poochha ho par A hi likh dena**
Formula se hamesha **Amount** aata hai. CI ke liye P ghatana zaroori hai.
Example 1 mein A = 6,655. CI = 6,655 − 5,000 = **1,655**. Agar 6,655 hi CI likh diya to ❌.

**Galti 2: r/100 ki jagah sirf r daalna**
10% ka matlab r = 10, par formula mein **1 + 10/100 = 1.1** aata hai, 1 + 10 = 11 nahi.
- Galat: 5,000 × (1 + 10)³ = 5,000 × 1331 = 66,55,000. ❌ (paisa 1,331 guna kaise ho gaya?)
- Sahi: 5,000 × (1.1)³ = 6,655 ✅

**Galti 3: Galat power**
Power **saalon ki sankhya** n hai. Rate ya koi fixed number (jaise 2) nahi.
- 3 saal ke liye (1.1)³ lo, (1.1)² nahi.
- Galat: 5,000 × (1.1)² = 6,050, jo sirf 2 saal ka amount hai. ❌

**Galti 4: Power ko multiply samajhna**
(1.1)³ ka matlab 1.1 × 1.1 × 1.1 = 1.331, **na ki 1.1 × 3 = 3.3**.

**Galti 5: Doubling ko seedha add karna**
Agar paisa 8 saal mein double hota hai, to 16 saal mein **4 guna** hoga, 3 guna nahi (3 guna simple interest ka jawab hota).

---

## Quick Recap

- Har saal paisa **(1 + r/100)** guna ho jata hai (growth factor).
- n saal baad: **A = P(1 + r/100)ⁿ** aur **CI = A − P**.
- Pattern: saal 1 mein power 1, saal 2 mein power 2, saal 3 mein power 3... saal n mein power n.
- Calculation aasan karne ke liye rate ko fraction banao: 10% → 11/10, 5% → 21/20.
- Ulte sawaal: formula wahi, bas anjaan cheez (P, r ya n) ko x maan kar nikalo. n ke liye powers try karo.
- Agar paisa n saal mein 2 guna, to **2n mein 4 guna**, 3n mein 8 guna. (SI mein sirf 3 guna hota.)
- Hamesha jaanch karo: table method se ya wapas multiply karke.

---

## Practice Questions

1. Find the amount and the compound interest on ₹6,000 for 2 years at 5% per annum.

2. Find the amount and the compound interest on ₹20,000 for 3 years at 10% per annum.

3. A sum of money grows to ₹14,641 in 4 years at 10% per annum compounded annually. Find the sum.

4. ₹6,250 becomes ₹7,290 in 2 years at compound interest. Find the rate of interest per annum.

5. In how many years will ₹3,000 become ₹3,993 at 10% per annum compounded annually?

6. A bank doubles your money in 6 years (compound). If you deposit ₹7,000, how much will you have after 18 years? After how many years will it become 4 times?

7. Meena says: "The compound interest on ₹10,000 at 10% for 2 years is ₹12,100." Is she correct? If not, what is her mistake and what is the correct answer?

8. Sahil calculated the amount on ₹5,000 at 4% for 2 years as 5,000 × (1 + 4)². Find his mistake and give the correct amount and CI.

9. State True or False:
   (a) The amount after n years is P(1 + r/100)ⁿ.
   (b) For 3 years, the power in the formula is 3.
   (c) If money becomes 2 times in n years, it becomes 3 times in 2n years (compound interest).
   (d) The compound interest is always equal to the amount.

### Answers

1. P = 6,000, r = 5, n = 2. Factor = 21/20.
   A = 6,000 × (21/20)² = 6,000 × 441/400 = 15 × 441 = **₹6,615**
   CI = 6,615 − 6,000 = **₹615**
   Jaanch: 6,000 + 300 = 6,300, phir 6,300 + 315 = 6,615 ✅

2. P = 20,000, r = 10, n = 3. Factor = 11/10.
   A = 20,000 × 1331/1000 = 20 × 1331 = **₹26,620**
   CI = 26,620 − 20,000 = **₹6,620**
   Jaanch: 20,000 → 22,000 → 24,200 → 26,620 ✅

3. 14,641 = P × (11/10)⁴ = P × 14641/10000, kyunki 11⁴ = 14,641.
   P = 14,641 × 10000/14641 = **₹10,000**
   Jaanch: 10,000 → 11,000 → 12,100 → 13,310 → 14,641 ✅

4. 7,290/6,250 = 1.1664 = (1 + r/100)².
   1.1664 = 1.08 × 1.08 (kyunki 1.08² = 1.1664), to 1 + r/100 = 1.08 aur **r = 8%**.
   Jaanch: 6,250 × 1.08 = 6,750, phir 6,750 × 1.08 = 7,290 ✅

5. 3,993/3,000 = 1.331 = (1.1)³, to **n = 3 saal**.
   Jaanch: 3,000 → 3,300 → 3,630 → 3,993 ✅

6. 18 saal = 3 × 6 saal, to paisa 2 × 2 × 2 = 8 guna: 7,000 × 8 = **₹56,000**.
   4 guna 2 baar double hone par hoga, yaani 2 × 6 = **12 saal** mein (7,000 → 14,000 → 28,000).

7. **Nahi, galat hai.** ₹12,100 to **Amount** hai (10,000 → 11,000 → 12,100). CI = A − P = 12,100 − 10,000 = **₹2,100**. Galti: P ghatana bhool gayi.

8. Galti: r/100 ki jagah r daala. (1 + 4) = 5 nahi, **1 + 4/100 = 1.04** hona chahiye.
   Sahi: A = 5,000 × (1.04)² = 5,000 × 1.0816 = **₹5,408**
   CI = 5,408 − 5,000 = **₹408**
   Jaanch: 5,000 + 200 = 5,200, phir 5,200 + 208 = 5,408 ✅

9. (a) **True** ✅. Yahi formula hai.
   (b) **True** ✅. Power saalon ki sankhya hoti hai.
   (c) **False** ❌. 2n saal mein 2 × 2 = 4 guna hota hai, 3 guna nahi.
   (d) **False** ❌. CI = A − P. Amount mein principal bhi shaamil hota hai.

---

Ab 10 rows ki table banane ki zaroorat nahi. Bas P, r aur n pehchano, factor banao, aur ek line mein jawab. Mohan chacha ka FD bhi ab calculator ke saath ek minute mein nikal jayega.

**Aage kya?** Ab tak hamara interest hamesha **saal mein ek baar** judta tha. Par agar bank har **6 mahine** ya har **3 mahine** mein interest jod de, to kya hoga? Aur agar har saal ka rate alag ho? Topic 4 mein dekhenge ki formula mein n aur r kaise badalte hain.
