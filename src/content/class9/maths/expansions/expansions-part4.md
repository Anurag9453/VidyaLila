# Chapter: Expansions (Part 4)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [expansions-part3.md](expansions-part3.md) se aage chalti hai.** (Chapter ki shuruaat [expansions.md](expansions.md) se hoti hai.)
> **Topics covered in this file:**
> 4. Binomial ka Cube: (a ± b)³

---

# Topic 4: Binomial ka Cube: (a ± b)³

Topic 3 mein humne teen terms wale bracket ka square kholna seekha tha, (a + b + c)², jahan har term ka square aur har jodi ka "2 guna product" aata tha. Pooja ki rangoli yaad hai? 7 × 7 ka square 9 tukdon mein bata tha: 3 chhote squares aur 6 rectangles. Usse pehle Topic 1 mein do terms ka square, (a + b)², aur Topic 2 mein uske saath values nikalna dekha tha.

Ab hum wapas **do terms** par aate hain, par power badhaate hain: **2 ki jagah 3**. Yaani bracket ko teen baar multiply karna. Ghabraiye mat, iska bhi ek pakka pattern hai, aur Topic 1 wala square hi yahan seedhi ka pehla dandaa banega.

---

## Manoj ki dice factory ki kahani

Manoj bhaiya ek chhoti si factory chalate hain jahan ludo ke **dice (paase)** bante hain. Har dice ek chhota cube hai, plastic ka, andar se bhara hua.

Ek din ek customer bola: "Bhaiya, abhi wale dice ki side **10 mm** hai. Mujhe thode bade chahiye, side **11 mm**. Plastic kitna zyada lagega?"

Manoj ke helper Chhotu ne jhat se hisaab lagaya:
"Side 1 mm badhi hai. To plastic bhi bas thoda sa, 1 mm³ zyada lagega. 10³ + 1³ = 1000 + 1 = 1001 mm³."

Manoj bhaiya hanse. "Chal, calculator se check kar."

11 × 11 × 11 = **1331 mm³**

Chhotu ki aankhein phat gayin. "1001 nahi, 1331? Ye extra **330** kahan se aa gaye?"

Manoj bhaiya ne samjhaya: "Jab tu side badhata hai, to cube **teeno disha** mein badhta hai: lambai, chaudai aur unchai. Isliye (10 + 1)³ sirf 10³ + 1³ nahi hota. Beech mein kuch aur terms bhi chhupe hote hain."

Wahi chhupe terms is topic ka asli raaz hain:
1331 = 1000 + **300** + **30** + 1

Ye 300 aur 30 kaise aaye? Chalo dhundhte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Cube (ghan)** | Kisi cheez ko teen baar khud se multiply karna | 4³ = 4 × 4 × 4 = 64 |
| **Binomial** | Do terms wala expression | a + b, 2x − 3 |
| **Binomial ka cube** | Do terms wale bracket ko teen baar multiply karna | (a + b)³ |
| **Expansion (phailana)** | Bracket khol kar saare terms alag alag likhna | (x + 1)² = x² + 2x + 1 |
| **Coefficient** | Term ke saath laga number | 3a²b mein 3 |

---

## Part A: (a + b)³ ka formula kahan se aata hai

Cube ka matlab hai teen baar multiply karna:

(a + b)³ = (a + b) × (a + b) × (a + b)

Pehle do brackets ka kaam Topic 1 mein ho chuka hai:
(a + b)² = a² + 2ab + b²

To bas ek bracket aur multiply karna hai:

(a + b)³ = (a + b)(a² + 2ab + b²)

Ab a ko har term se, aur b ko har term se multiply karo:

| a se multiply | b se multiply |
|---|---|
| a × a² = a³ | b × a² = a²b |
| a × 2ab = 2a²b | b × 2ab = 2ab² |
| a × b² = ab² | b × b² = b³ |

Sab jodo aur like terms milao:
a³ + 2a²b + a²b + ab² + 2ab² + b³

> **(a + b)³ = a³ + 3a²b + 3ab² + b³**

### Dice wali paheli suljhi

a = 10, b = 1 rakho:
- a³ = 1000
- 3a²b = 3 × 100 × 1 = **300**
- 3ab² = 3 × 10 × 1 = **30**
- b³ = 1

Jod: 1000 + 300 + 30 + 1 = **1331** ✅

Chhotu ne sirf a³ aur b³ liye the. Beech ke **3a²b** aur **3ab²** chhoot gaye the. Wahi 330 the.

---

## Part B: Formula ka chhota roop

Beech ke do terms mein 3ab common hai:
3a²b + 3ab² = 3ab(a + b)

Isliye:

> **(a + b)³ = a³ + b³ + 3ab(a + b)**

Ye roop Part F mein values nikalne ke liye jaadu ki tarah kaam aayega. Jab a + b aur ab diye hon, to a³ + b³ seedha nikal aata hai.

---

## Part C: (a − b)³

(a − b)³ ke liye b ki jagah (−b) rakh do:

- a³ waisa hi rahega.
- 3a²(−b) = −3a²b
- 3a(−b)² = +3ab² (minus ka square plus hota hai)
- (−b)³ = −b³ (minus ka cube minus hi rehta hai)

> **(a − b)³ = a³ − 3a²b + 3ab² − b³**

Chhota roop:

> **(a − b)³ = a³ − b³ − 3ab(a − b)**

### Signs ka pattern

| | 1st term | 2nd term | 3rd term | 4th term |
|---|---|---|---|---|
| (a + b)³ | + | + | + | + |
| (a − b)³ | + | − | + | − |

(a − b)³ mein signs **baari baari** badalte hain: +, −, +, −. Jis term mein b ki power odd hai (b¹, b³), wahan minus aata hai.

---

## Part D: 1-3-3-1 ka pattern

Coefficients dekho:

| Expansion | Coefficients |
|---|---|
| (a + b)¹ = a + b | 1, 1 |
| (a + b)² = a² + 2ab + b² | 1, 2, 1 |
| (a + b)³ = a³ + 3a²b + 3ab² + b³ | 1, 3, 3, 1 |

Aur powers ka khel:
- a ki power **3, 2, 1, 0** ghat'ti jaati hai.
- b ki power **0, 1, 2, 3** badhti jaati hai.
- Har term mein dono powers ka jod hamesha **3** rehta hai.

Bas ye yaad rakho: **"1-3-3-1, a ghata, b badha."**

---

## Part E: Expand karna (solved examples)

Har example mein tareeka ek hi hai: pehle pehchano **a kya hai, b kya hai**, phir formula mein rakho. Coefficient bhi a ya b ka hissa hai, uska bhi cube hoga.

**Example 1: (2x + 3)³**

a = 2x, b = 3

- a³ = (2x)³ = 8x³
- 3a²b = 3 × 4x² × 3 = 36x²
- 3ab² = 3 × 2x × 9 = 54x
- b³ = 27

**(2x + 3)³ = 8x³ + 36x² + 54x + 27**

Jaanch: x = 1 rakho. Left: 5³ = 125. Right: 8 + 36 + 54 + 27 = 125 ✅

**Example 2: (x − 2y)³**

a = x, b = 2y, aur sign minus hai.

- a³ = x³
- 3a²b = 3 × x² × 2y = 6x²y (sign −)
- 3ab² = 3 × x × 4y² = 12xy² (sign +)
- b³ = 8y³ (sign −)

**(x − 2y)³ = x³ − 6x²y + 12xy² − 8y³**

Jaanch: x = 3, y = 1. Left: (3 − 2)³ = 1. Right: 27 − 54 + 36 − 8 = 1 ✅

**Example 3: (3a + 1/3)³**

Yahan formula wale a ki jagah 3a hai, aur b ki jagah 1/3.

- (3a)³ = 27a³
- 3 × (3a)² × (1/3) = 3 × 9a² × 1/3 = 9a²
- 3 × 3a × (1/3)² = 9a × 1/9 = a
- (1/3)³ = 1/27

**(3a + 1/3)³ = 27a³ + 9a² + a + 1/27**

Jaanch: a = 1. Left: (10/3)³ = 1000/27. Right: 27 + 9 + 1 + 1/27 = 37 + 1/27 = 1000/27 ✅

**Example 4: (x + 1/x)³**

a = x, b = 1/x. Yahan ek mazedaar baat hoti hai: ab = x × 1/x = **1**.

Chhote roop se:
(x + 1/x)³ = x³ + 1/x³ + 3 × 1 × (x + 1/x)

**(x + 1/x)³ = x³ + 1/x³ + 3(x + 1/x)**, yaani x³ + 3x + 3/x + 1/x³

Jaanch: x = 2. Left: (2.5)³ = 15.625. Right: 8 + 6 + 1.5 + 0.125 = 15.625 ✅

**Example 5: (x − 1/x)³**

Yahan bhi ab = 1.

**(x − 1/x)³ = x³ − 1/x³ − 3(x − 1/x)**, yaani x³ − 3x + 3/x − 1/x³

Jaanch: x = 2. Left: (1.5)³ = 3.375. Right: 8 − 6 + 1.5 − 0.125 = 3.375 ✅

---

## Part F: Values nikalna (bina a aur b jaane)

Ye is topic ka sabse kaam ka hissa hai. Formula ko thoda ulta likho:

> **a³ + b³ = (a + b)³ − 3ab(a + b)**
>
> **a³ − b³ = (a − b)³ + 3ab(a − b)**

Ab a aur b alag alag pata hona zaroori nahi. Sirf unka jod (ya fark) aur product kaafi hai.

**Example 6: a + b = 8 aur ab = 15, to a³ + b³ = ?**

a³ + b³ = 8³ − 3 × 15 × 8 = 512 − 360 = **152**

Jaanch: a = 3, b = 5 se a + b = 8 aur ab = 15. 3³ + 5³ = 27 + 125 = 152 ✅

**Example 7: a − b = 2 aur ab = 15, to a³ − b³ = ?**

a³ − b³ = 2³ + 3 × 15 × 2 = 8 + 90 = **98**

Jaanch: a = 5, b = 3 se a − b = 2 aur ab = 15. 125 − 27 = 98 ✅

**Example 8: a + b = 4 aur a³ + b³ = 28, to ab = ?**

28 = 4³ − 3ab × 4
28 = 64 − 12ab
12ab = 36
**ab = 3**

Jaanch: a = 1, b = 3. Jod 4, aur 1 + 27 = 28 ✅

### x ± 1/x wale sawaal

Part E mein dekha tha ki yahan ab = 1 hota hai. To formula aur bhi chhota ho jata hai:

> **x³ + 1/x³ = (x + 1/x)³ − 3(x + 1/x)**
>
> **x³ − 1/x³ = (x − 1/x)³ + 3(x − 1/x)**

**Example 9: x + 1/x = 4, to x³ + 1/x³ = ?**

= 4³ − 3 × 4 = 64 − 12 = **52**

**Example 10: x − 1/x = 3, to x³ − 1/x³ = ?**

= 3³ + 3 × 3 = 27 + 9 = **36**

### Chain wale sawaal (Topic 2 se jodkar)

**Example 11: x + 1/x = 3. Pehle x² + 1/x², phir x³ + 1/x³ nikalo.**

Step 1 (Topic 2 wala square, wahan Example 6 mein yahi nikala tha):
x² + 1/x² = (x + 1/x)² − 2 = 9 − 2 = **7**

Step 2 (is topic wala cube):
x³ + 1/x³ = 3³ − 3 × 3 = 27 − 9 = **18**

Jaanch, doosre raaste se: x³ + 1/x³ = (x + 1/x)(x² + 1/x² − 1) = 3 × (7 − 1) = 18 ✅
(Ye doosra raasta Topic 5 mein poori tarah samjhenge.)

---

## Part G: Bade numbers ka cube, bina calculator ke

Number ko kisi "aasan" number ke paas todo, jaise 100, 50 ya 1.

**104³** = (100 + 4)³
= 100³ + 3 × 100² × 4 + 3 × 100 × 4² + 4³
= 1000000 + 120000 + 4800 + 64
= **1124864**

**97³** = (100 − 3)³
= 1000000 − 3 × 10000 × 3 + 3 × 100 × 9 − 27
= 1000000 − 90000 + 2700 − 27
= **912673**

**1.3³** = (1 + 0.3)³
= 1 + 3 × 0.3 + 3 × 0.09 + 0.027
= 1 + 0.9 + 0.27 + 0.027
= **2.197**

**49³** = (50 − 1)³
= 125000 − 3 × 2500 + 3 × 50 − 1
= 125000 − 7500 + 150 − 1
= **117649**

### Simplify karne wala sawaal

**Example 12: 7.5³ − 2.5³ − 3 × 7.5 × 2.5 × 5 ka value nikalo.**

Pehchano: a = 7.5, b = 2.5, aur a − b = **5**. Ye bilkul (a − b)³ ka chhota roop hai:
a³ − b³ − 3ab(a − b) = (a − b)³

To answer = 5³ = **125**

Lamba hisaab karne ki zaroorat hi nahi padi. Pattern pehchanna hi asli trick hai.

---

## Aam galtiyan (bachke rehna)

**Galti 1: (a + b)³ = a³ + b³ likh dena**
Manoj ke Chhotu wali galti. (10 + 1)³ = 1331 hai, 1001 nahi. Beech ke **3a²b + 3ab²** kabhi mat bhoolo.

**Galti 2: (a − b)³ mein saare signs minus kar dena**
(a − b)³ = a³ − 3a²b **+** 3ab² − b³. Teesra term **plus** hai, kyunki (−b)² = +b².

**Galti 3: Coefficient ka cube bhool jana**
(2x)³ = 8x³ hai, 2x³ nahi. Bracket ke andar jo bhi hai, poore ka cube hota hai.

**Galti 4: 3ab(a + b) ki jagah sirf 3ab likhna**
(a + b)³ = a³ + b³ + 3ab**(a + b)**. Bracket wala hissa chhoot gaya to answer galat. Example 6 mein 512 − 45 likhoge to 467 aayega, jabki sahi 152 hai.

**Galti 5: a − b wale sawaal mein sign ulta lagana**
a³ − b³ = (a − b)³ **+** 3ab(a − b). Yahan plus hai. Example 7 mein minus laga diya to 8 − 90 = −82 aayega, jo galat hai.

**Galti 6: x ± 1/x mein ab = 1 bhool jana**
x × 1/x = 1. Isliye 3ab(x + 1/x) bas 3(x + 1/x) ban jata hai.

---

## Quick Recap

- **(a + b)³ = a³ + 3a²b + 3ab² + b³ = a³ + b³ + 3ab(a + b)**
- **(a − b)³ = a³ − 3a²b + 3ab² − b³ = a³ − b³ − 3ab(a − b)**
- Coefficients ka pattern **1, 3, 3, 1**. a ki power ghat'ti hai, b ki badhti hai.
- (a − b)³ mein signs **+, −, +, −**.
- Values nikalne ke liye: **a³ + b³ = (a + b)³ − 3ab(a + b)** aur **a³ − b³ = (a − b)³ + 3ab(a − b)**.
- x ± 1/x mein ab = 1, to **x³ + 1/x³ = (x + 1/x)³ − 3(x + 1/x)**.
- Bade numbers: 104³, 97³, 49³ jaise numbers ko aasan number ke paas todo.
- Hamesha ek chhota number rakh ke **jaanch** karo.

---

## Practice Questions

1. Expand:
   (a) (x + 4)³
   (b) (2a − 3b)³
   (c) (y + 2/y)³
   (d) (x/2 − 1)³

2. Using a suitable identity, find the value of:
   (a) 103³
   (b) 98³
   (c) 0.9³

3. If a + b = 7 and ab = 10, find a³ + b³.

4. If a − b = 3 and ab = 10, find a³ − b³.

5. If x + 1/x = 5, find x³ + 1/x³.

6. If x − 1/x = 4, find x³ − 1/x³.

7. If x + 1/x = 2, find (a) x² + 1/x² and (b) x³ + 1/x³.

8. Without multiplying directly, find the value of 8.6³ + 1.4³ + 3 × 8.6 × 1.4 × 10.

9. State whether each statement is true or false. Give a reason.
   (a) (x + y)³ = x³ + y³
   (b) (a − b)³ = −(b − a)³
   (c) The coefficient of x² in (x + 2)³ is 6.
   (d) (2x)³ = 6x³

### Answers

1. (a) a = x, b = 4: **x³ + 12x² + 48x + 64**
   Jaanch (x = 1): 5³ = 125, aur 1 + 12 + 48 + 64 = 125 ✅
   (b) a = 2a, b = 3b: (2a)³ − 3(2a)²(3b) + 3(2a)(3b)² − (3b)³ = **8a³ − 36a²b + 54ab² − 27b³**
   Jaanch (a = 2, b = 1): (4 − 3)³ = 1, aur 64 − 144 + 108 − 27 = 1 ✅
   (c) a = y, b = 2/y: y³ + 3y²(2/y) + 3y(4/y²) + 8/y³ = **y³ + 6y + 12/y + 8/y³**
   Jaanch (y = 1): 3³ = 27, aur 1 + 6 + 12 + 8 = 27 ✅
   (d) a = x/2, b = 1: x³/8 − 3(x²/4)(1) + 3(x/2)(1) − 1 = **x³/8 − 3x²/4 + 3x/2 − 1**
   Jaanch (x = 2): (1 − 1)³ = 0, aur 1 − 3 + 3 − 1 = 0 ✅
2. (a) (100 + 3)³ = 1000000 + 90000 + 2700 + 27 = **1092727**
   (b) (100 − 2)³ = 1000000 − 60000 + 1200 − 8 = **941192**
   (c) (1 − 0.1)³ = 1 − 0.3 + 0.03 − 0.001 = **0.729**
3. a³ + b³ = 7³ − 3 × 10 × 7 = 343 − 210 = **133**
   Jaanch: a = 2, b = 5 se 8 + 125 = 133 ✅
4. a³ − b³ = 3³ + 3 × 10 × 3 = 27 + 90 = **117**
   Jaanch: a = 5, b = 2 se 125 − 8 = 117 ✅
5. 5³ − 3 × 5 = 125 − 15 = **110**
6. 4³ + 3 × 4 = 64 + 12 = **76**
7. (a) x² + 1/x² = 2² − 2 = **2**
   (b) x³ + 1/x³ = 2³ − 3 × 2 = **2**
   Jaanch: x + 1/x = 2 tabhi hota hai jab x = 1. Aur 1² + 1 = 2, 1³ + 1 = 2 ✅
8. a = 8.6, b = 1.4, a + b = 10. Ye a³ + b³ + 3ab(a + b) hai, yaani (a + b)³ = 10³ = **1000**
9. (a) **False.** Beech ke 3x²y + 3xy² chhoot gaye. (1 + 1)³ = 8, par 1 + 1 = 2.
   (b) **True.** b − a = −(a − b). Minus ka cube minus hi rehta hai, to (b − a)³ = −(a − b)³. Dono taraf minus lagao to (a − b)³ = −(b − a)³ ✅
   (c) **True.** (x + 2)³ = x³ + 6x² + 12x + 8. x² ka coefficient 3 × 2 = 6 ✅
   (d) **False.** (2x)³ = 2³x³ = **8x³** ❌

---

Shabaash! Agar ye ek baat yaad reh gayi ki **cube mein beech ke do terms chhupe hote hain**, to Chhotu wali galti aap kabhi nahi karoge. Aage chal ke Factorisation mein hum isi formula ko ulta bhi chalayenge.

**Aage kya?** Topic 5 mein dekhenge ki kuch khaas brackets ko multiply karne par sirf **a³ + b³** ya **a³ − b³** bachta hai, beech ke terms apne aap gayab ho jaate hain. Aur teen terms ka ek aur jaadui product bhi milega: **a³ + b³ + c³ − 3abc**.
