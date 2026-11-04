# Chapter: Factorisation (Part 8)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [factorisation-part7.md](factorisation-part7.md) se aage chalti hai** (wahan Topic 7: sum aur difference of cubes hai). Topic 1 ke saare formulae aur methods [factorisation.md](factorisation.md) mein hain.
> **Topics covered in this file:**
> 8. Factorisation of x³ + y³ + z³ - 3xyz

---

# Topic 8: Factorisation of x³ + y³ + z³ - 3xyz

Topic 7 mein humne **do cubes** ka formula dekha tha:

**a³ + b³ = (a + b)(a² - ab + b²)**

Usme sirf do terms the, a aur b. Ab socho ki ek **teesra term z** bhi party mein aa jaye. Tab formula thoda bada ho jata hai aur saath mein ek naya term **-3xyz** jud jata hai:

**x³ + y³ + z³ - 3xyz**

Ye koi bilkul nayi cheez nahi hai, balki Topic 7 wale formula ka hi bada bhai hai. Part A mein hum dekhenge ki **z = 0 rakhte hi ye wapas Topic 7 ka formula ban jata hai.**

Ye identity bahut kaam ki hai, khaas kar ek shortcut ki wajah se jo hum Part C mein dekhenge. Wo shortcut kai lambe calculations ko ek line mein khatam kar deta hai.

---

## Teen doston ke hisaab ki kahani

Aman, Bela aur Chintu teen dost hain. Mahine ke aakhir mein unhone apna hisaab kiya:

- Aman ko **₹25 milne** hain (+25)
- Bela ko **₹75 dene** hain (-75)
- Chintu ko **₹50 milne** hain (+50)

Kul hisaab: 25 + (-75) + 50 = **0**. Yaani poora hisaab **barabar** hai. Jitna kisi ko dena hai, utna hi baaki logon ko milna hai.

Ab maths teacher ne ek ajeeb sawaal diya: "In teeno numbers ke **cubes ka sum** nikalo: 25³ + (-75)³ + 50³."

Bela ghabra gayi. 75³ = 4,21,875! Itna bada calculation?

Par Chintu muskuraya: "Jab teeno ka sum 0 ho, to cubes ka sum bas **3 × teeno ka product** hota hai."

3 × 25 × (-75) × 50 = **-2,81,250**

Do second mein answer! Ye jaadu kaise hua? Isi topic mein hum ye samjhenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Identity** | Aisi equation jo variables ki **har value** par sach ho | (a + b)² = a² + 2ab + b² |
| **Cube** | Kisi number ko teen baar multiply karna | 5³ = 5 × 5 × 5 = 125 |
| **Product** | Multiply karne ka answer | 2, 3, 4 ka product = 24 |
| **Cyclic order** | x → y → z → x wala chakkar. Jodon ke liye: xy, yz, zx | xy + yz + zx |
| **Converse** | Ulti baat: "agar A to B" ki jagah "agar B to A" | Part D mein dekhenge |

---

## Part A: Identity

> **x³ + y³ + z³ - 3xyz = (x + y + z)(x² + y² + z² - xy - yz - zx)**

Is formula ko do hisson mein dekho:

- **Pehla bracket:** teeno ka sum, **(x + y + z)**
- **Doosra bracket:** teeno ke squares, **minus** teeno ke jode (xy, yz, zx)

### Yaad rakhne ka tarika

Topic 1 mein formula 9 tha:
(x + y + z)² = x² + y² + z² **+ 2xy + 2yz + 2zx**

Is topic ke doosre bracket mein bhi wahi squares hain, bas jodon ke saath **minus** hai aur **2 nahi** hai:
x² + y² + z² **- xy - yz - zx**

Yaani: "squares plus, jode minus, bina 2 ke."

### Ise khud check karte hain (multiply karke)

Ye formula ratne ki cheez nahi hai, ise khol kar dekha ja sakta hai. Dhyan se chalo, ek ek kadam.

Doosre bracket ko ek naam de dete hain: **B = x² + y² + z² - xy - yz - zx**

Ab (x + y + z) × B ka matlab hai: **x × B + y × B + z × B**

**Kadam 1: x × B**
= x³ + xy² + xz² - x²y - xyz - x²z

**Kadam 2: y × B**
= x²y + y³ + yz² - xy² - y²z - xyz

**Kadam 3: z × B**
= x²z + y²z + z³ - xyz - yz² - xz²

**Kadam 4: Teeno ko jodo aur jode (pair) dhundo jo kat jate hain**

| Term | Kahan se aaya | Kahan katta hai | Bacha |
|---|---|---|---|
| xy² | Kadam 1 (+) | Kadam 2 (-) | 0 |
| xz² | Kadam 1 (+) | Kadam 3 (-) | 0 |
| x²y | Kadam 1 (-) | Kadam 2 (+) | 0 |
| x²z | Kadam 1 (-) | Kadam 3 (+) | 0 |
| yz² | Kadam 2 (+) | Kadam 3 (-) | 0 |
| y²z | Kadam 2 (-) | Kadam 3 (+) | 0 |

Sab beech wale terms kat gaye! Bache sirf:
- x³, y³, z³ (har kadam se ek)
- -xyz teen baar = **-3xyz**

= **x³ + y³ + z³ - 3xyz** ✅

Formula sach hai.

### Numbers se bhi check karo

x = 1, y = 2, z = 3 rakho.

**Left side:** 1 + 8 + 27 - 3(1)(2)(3) = 36 - 18 = **18**

**Right side:**
- x + y + z = 6
- x² + y² + z² = 1 + 4 + 9 = 14
- xy + yz + zx = 2 + 6 + 3 = 11
- (6)(14 - 11) = 6 × 3 = **18**

Dono barabar ✅

### z = 0 rakho to Topic 7 wapas mil jata hai

Identity mein **z = 0** rakho:
- Left side: x³ + y³ + 0 - 0 = x³ + y³
- Right side: (x + y + 0)(x² + y² + 0 - xy - 0 - 0) = (x + y)(x² - xy + y²)

To: **x³ + y³ = (x + y)(x² - xy + y²)**

Ye bilkul Topic 7 ka sum of cubes formula hai (bas a, b ki jagah x, y). Yaani Topic 7 ka formula is bade formula ka ek **khaas case** hai. Agar aap ye identity yaad rakhoge to Topic 7 wala apne aap yaad rahega.

---

## Part B: Doosra roop (alternate form)

Doosre bracket ko ek aur tarike se bhi likh sakte hain:

> **x² + y² + z² - xy - yz - zx = ½[(x - y)² + (y - z)² + (z - x)²]**

**Ye kyun sach hai?** Right side ke andar ke teeno squares kholo:

- (x - y)² = x² - 2xy + y²
- (y - z)² = y² - 2yz + z²
- (z - x)² = z² - 2zx + x²

Jodo: 2x² + 2y² + 2z² - 2xy - 2yz - 2zx = **2(x² + y² + z² - xy - yz - zx)**

Aadha karne par wahi doosra bracket mil gaya ✅

To poori identity aise bhi likh sakte hain:

> **x³ + y³ + z³ - 3xyz = ½(x + y + z)[(x - y)² + (y - z)² + (z - x)²]**

### Is roop ka fayda

Squares kabhi negative nahi hote. Isliye **x² + y² + z² - xy - yz - zx kabhi negative nahi hota.** Ye **0** sirf tab hota hai jab teeno squares 0 hon, yaani **x = y = z**. Ye baat Part D mein kaam aayegi.

---

## Part C: Sabse kaam ka shortcut (x + y + z = 0)

Identity dekho:
x³ + y³ + z³ - 3xyz = **(x + y + z)** × (doosra bracket)

Agar **x + y + z = 0** ho, to right side = 0 × (kuch bhi) = **0**.

Isliye:
x³ + y³ + z³ - 3xyz = 0

> **Agar x + y + z = 0, to x³ + y³ + z³ = 3xyz**

Yahi wo jaadu tha jo Chintu ne kahani mein kiya. Hisaab barabar (sum 0) tha, isliye cubes ka sum = 3 × product.

### Numbers wale examples

**Example 1:** 25³ + (-75)³ + 50³ ki value nikalo.

Pehle check karo: 25 + (-75) + 50 = **0** ✅
To value = 3 × 25 × (-75) × 50
= 3 × (-93750)
= **-281250**

Jaanch (seedha cube karke): 15625 - 421875 + 125000 = -281250 ✅

**Example 2:** (-12)³ + 7³ + 5³ ki value nikalo.

Sum: -12 + 7 + 5 = **0** ✅
Value = 3 × (-12) × 7 × 5 = **-1260**

Jaanch: -1728 + 343 + 125 = -1260 ✅

**Example 3:** 28³ - 15³ - 13³ ki value nikalo.

Isko aise padho: 28³ + (-15)³ + (-13)³.
Sum: 28 - 15 - 13 = **0** ✅
Value = 3 × 28 × (-15) × (-13) = 3 × 28 × 195 = **16380**

Jaanch: 21952 - 3375 - 2197 = 16380 ✅

Dhyan do, do negative numbers ka product positive hota hai, isliye answer positive aaya.

### Algebra wale examples

**Example 4:** (a - b)³ + (b - c)³ + (c - a)³ ko simplify karo.

Teeno ko x, y, z maano:
x = a - b, y = b - c, z = c - a

Sum: (a - b) + (b - c) + (c - a) = a - b + b - c + c - a = **0** ✅

To:
**(a - b)³ + (b - c)³ + (c - a)³ = 3(a - b)(b - c)(c - a)**

**Example 5:** (x - 2y)³ + (2y - 3z)³ + (3z - x)³ ko simplify karo.

Sum: x - 2y + 2y - 3z + 3z - x = **0** ✅

**= 3(x - 2y)(2y - 3z)(3z - x)**

**Tip:** Jab bhi teen cubes ka sum dikhe, **sabse pehle teeno ka sum check karo.** Agar 0 hai, to shortcut lagao.

---

## Part D: Converse (ulti baat)

Part C mein dekha: **agar x + y + z = 0, to x³ + y³ + z³ = 3xyz.**

Ab ulta poochte hain: agar **x³ + y³ + z³ = 3xyz** ho, to kya x + y + z = 0 hona zaroori hai?

**Jawab: Hamesha nahi.** Do mein se ek baat sach hogi.

Part B wale roop se:
x³ + y³ + z³ - 3xyz = ½(x + y + z)[(x - y)² + (y - z)² + (z - x)²] = 0

Do cheezon ka product 0 hai, to unme se koi ek 0 hogi:
- Ya to **x + y + z = 0**
- Ya **(x - y)² + (y - z)² + (z - x)² = 0**, jo sirf tab hota hai jab **x = y = z**

> **Agar x³ + y³ + z³ = 3xyz, to x + y + z = 0 ya x = y = z.**

**Example:** x = y = z = 2
- x³ + y³ + z³ = 8 + 8 + 8 = 24
- 3xyz = 3 × 2 × 2 × 2 = 24

Dono barabar hain, par x + y + z = 6, jo 0 nahi hai. Yahan teeno barabar hain, isliye equation sach hui.

---

## Part E: Identity se factorise karna

Ab asli kaam. Koi expression diya ho jo x³ + y³ + z³ - 3xyz jaisa dikhe, to use factorise karna.

Confusion se bachne ke liye identity ko capital letters mein likhte hain:

> **A³ + B³ + C³ - 3ABC = (A + B + C)(A² + B² + C² - AB - BC - CA)**

### Steps

1. Teeno cube terms ko pehchano aur **A, B, C** nikalo (sign ke saath!).
2. **Jaanch karo** ki chautha term sach mein **-3ABC** hai.
3. Formula mein rakho.
4. Doosre bracket mein **AB, BC, CA** ke signs dhyan se lagao.

### Solved examples

**Example 1:** a³ + 8b³ + 27c³ - 18abc ko factorise karo.

**Kadam 1:** A, B, C pehchano.
- a³ = (a)³, to **A = a**
- 8b³ = (2b)³, to **B = 2b**
- 27c³ = (3c)³, to **C = 3c**

**Kadam 2:** Jaanch: 3ABC = 3 × a × 2b × 3c = 18abc. Expression mein -18abc hai ✅

**Kadam 3:** Bracket ke hisse nikalo.
- A + B + C = a + 2b + 3c
- A² = a², B² = 4b², C² = 9c²
- AB = 2ab, BC = 6bc, CA = 3ca

**Kadam 4:** Formula mein rakho.
**= (a + 2b + 3c)(a² + 4b² + 9c² - 2ab - 6bc - 3ca)**

**Example 2 (negative wala):** 8x³ - y³ + 27z³ + 18xyz ko factorise karo.

Yahan signs ka dhyan rakhna hai.

**Kadam 1:**
- 8x³ = (2x)³, to **A = 2x**
- -y³ = (-y)³, to **B = -y** (minus andar chala gaya, kyunki (-y)³ = -y³)
- 27z³ = (3z)³, to **C = 3z**

**Kadam 2:** Jaanch: -3ABC = -3 × 2x × (-y) × 3z = **+18xyz**. Expression mein +18xyz hai ✅

(Isi wajah se +18xyz aaya. Agar B positive hota to -18xyz chahiye tha.)

**Kadam 3:**
- A + B + C = 2x - y + 3z
- A² = 4x², B² = y², C² = 9z²
- AB = (2x)(-y) = **-2xy**, to -AB = **+2xy**
- BC = (-y)(3z) = **-3yz**, to -BC = **+3yz**
- CA = (3z)(2x) = **6zx**, to -CA = **-6zx**

**Kadam 4:**
**= (2x - y + 3z)(4x² + y² + 9z² + 2xy + 3yz - 6zx)**

**Example 3 (do negative wale):** x³ - 8y³ - 27 - 18xy ko factorise karo.

**Kadam 1:**
- x³ → **A = x**
- -8y³ = (-2y)³ → **B = -2y**
- -27 = (-3)³ → **C = -3**

**Kadam 2:** Jaanch: -3ABC = -3 × x × (-2y) × (-3) = -3 × 6xy = **-18xy** ✅

**Kadam 3:**
- A + B + C = x - 2y - 3
- A² = x², B² = 4y², C² = 9
- AB = (x)(-2y) = -2xy, to -AB = **+2xy**
- BC = (-2y)(-3) = 6y, to -BC = **-6y**
- CA = (-3)(x) = -3x, to -CA = **+3x**

**Kadam 4:**
**= (x - 2y - 3)(x² + 4y² + 9 + 2xy - 6y + 3x)**

---

## Part F: x³ + y³ + z³ ki value nikalna

Kabhi kabhi question mein x, y, z alag se nahi diye hote. Sirf ye diye hote hain:
- x + y + z
- xy + yz + zx
- xyz

Aur poochte hain x³ + y³ + z³ kitna hai.

### Do formulae jo chahiye

**Formula 1** (Topic 1 ke formula 9 se):
(x + y + z)² = x² + y² + z² + 2(xy + yz + zx)
To: **x² + y² + z² = (x + y + z)² - 2(xy + yz + zx)**

**Formula 2** (is topic ki identity se):
**x³ + y³ + z³ = 3xyz + (x + y + z)[(x² + y² + z²) - (xy + yz + zx)]**

### Solved examples

**Example 1:** Agar x + y + z = 6, xy + yz + zx = 11 aur xyz = 6, to x³ + y³ + z³ nikalo.

**Kadam 1:** x² + y² + z² nikalo.
= 6² - 2(11) = 36 - 22 = **14**

**Kadam 2:** Formula 2 lagao.
x³ + y³ + z³ = 3(6) + 6(14 - 11)
= 18 + 6 × 3
= 18 + 18
= **36**

Jaanch: x = 1, y = 2, z = 3 in teeno shartein poori karte hain (sum 6, jode 2 + 6 + 3 = 11, product 6). 1 + 8 + 27 = 36 ✅

**Example 2:** Agar x + y + z = 9, xy + yz + zx = 26 aur xyz = 24, to x³ + y³ + z³ nikalo.

x² + y² + z² = 81 - 52 = **29**
x³ + y³ + z³ = 3(24) + 9(29 - 26) = 72 + 27 = **99**

Jaanch: 2, 3, 4 (sum 9, jode 6 + 12 + 8 = 26, product 24). 8 + 27 + 64 = 99 ✅

**Example 3:** Agar x + y + z = 12 aur x² + y² + z² = 50, to x³ + y³ + z³ - 3xyz nikalo.

Pehle xy + yz + zx nikalo:
144 = 50 + 2(xy + yz + zx)
xy + yz + zx = 94 ÷ 2 = **47**

x³ + y³ + z³ - 3xyz = (x + y + z)(x² + y² + z² - xy - yz - zx)
= 12 × (50 - 47) = 12 × 3 = **36**

Jaanch: 3, 4, 5 (sum 12, squares 9 + 16 + 25 = 50). 27 + 64 + 125 - 3(60) = 216 - 180 = 36 ✅

**Example 4:** Agar x + y + z = 0 aur xyz = 4, to x³ + y³ + z³ nikalo.

Sum 0 hai, to shortcut: x³ + y³ + z³ = 3xyz = 3 × 4 = **12**

---

## Aam galtiyan (bachke rehna)

**Galti 1: Doosre bracket mein jodon ke saath 2 laga dena**
Sahi: x² + y² + z² **- xy - yz - zx**
Galat: x² + y² + z² - **2**xy - **2**yz - **2**zx
2 sirf (x + y + z)² wale formula mein aata hai, yahan nahi.

**Galti 2: Shortcut lagane se pehle sum check na karna**
x³ + y³ + z³ = 3xyz **sirf tab** sach hai jab x + y + z = 0 (ya x = y = z). Pehle sum check karo. Jaise 1³ + 2³ + 3³ = 36, par 3 × 1 × 2 × 3 = 18. Yahan sum 6 hai, shortcut nahi lagega.

**Galti 3: Negative cube ka sign bahar chhod dena**
-y³ ke liye B = **-y** lo, kyunki (-y)³ = -y³. Agar B = y le liya, to poora factorisation galat ho jayega.

**Galti 4: -3ABC ki jaanch na karna**
Factorise karne se pehle hamesha check karo ki chautha term sach mein -3ABC hai. 8x³ - y³ + 27z³ + 18xyz mein +18xyz isliye sahi hai kyunki B = -y hai.

**Galti 5: AB, BC, CA ke sign galat lagana**
B negative ho to AB aur BC negative ho jate hain, aur bracket mein unke aage minus lagne par wo **plus** ban jate hain. Har jode ka sign alag se nikalo, jaise Example 2 mein kiya.

**Galti 6: Converse ko poora sach maan lena**
x³ + y³ + z³ = 3xyz ka matlab **hamesha** x + y + z = 0 nahi hota. **x = y = z** bhi ho sakta hai (jaise 2, 2, 2).

**Galti 7: x² + y² + z² ko (x + y + z)² samajhna**
Part F mein x² + y² + z² = (x + y + z)² **- 2(xy + yz + zx)**. Ye 2 wala hissa ghatana mat bhoolo.

---

## Quick Recap

- **Identity:** x³ + y³ + z³ - 3xyz = (x + y + z)(x² + y² + z² - xy - yz - zx)
- Doosra bracket: "squares plus, jode minus, bina 2 ke."
- **Doosra roop:** x² + y² + z² - xy - yz - zx = ½[(x - y)² + (y - z)² + (z - x)²]. Ye kabhi negative nahi hota.
- **Shortcut:** Agar **x + y + z = 0**, to **x³ + y³ + z³ = 3xyz**.
- Teen cubes ka sum dikhe to **pehle teeno ka sum check karo.**
- (a - b)³ + (b - c)³ + (c - a)³ = 3(a - b)(b - c)(c - a), kyunki teeno ka sum 0 hai.
- **Converse:** Agar x³ + y³ + z³ = 3xyz, to x + y + z = 0 **ya** x = y = z.
- **Factorise karne ke liye:** A, B, C sign ke saath pehchano, -3ABC ki jaanch karo, phir formula lagao.
- **Value nikalne ke liye:** x² + y² + z² = (x + y + z)² - 2(xy + yz + zx), phir identity lagao.

---

## Practice Questions

1. Factorise:
   (a) x³ + 8y³ + z³ - 6xyz
   (b) 27a³ + b³ + 8c³ - 18abc
   (c) 1 + x³ + y³ - 3xy
   (d) x³ - 8y³ - 27 - 18xy

2. Without finding the cubes, find the value of:
   (a) (-15)³ + 8³ + 7³
   (b) 30³ + 20³ - 50³

3. Simplify: (2a - b)³ + (b - 3c)³ + (3c - 2a)³

4. If x + y + z = 10, xy + yz + zx = 31 and xyz = 30, find x³ + y³ + z³.

5. If a + b + c = 0 and abc = 4, find a³ + b³ + c³.

6. If x + y + z = 12 and x² + y² + z² = 50, find x³ + y³ + z³ - 3xyz.

7. Verify the identity x³ + y³ + z³ - 3xyz = (x + y + z)(x² + y² + z² - xy - yz - zx) for x = 2, y = -1 and z = 3.

8. State whether each statement is true or false. Give a reason.
   (a) If x³ + y³ + z³ = 3xyz, then x + y + z must be 0.
   (b) x² + y² + z² - xy - yz - zx is never negative.
   (c) 2³ + 3³ + (-5)³ = 3 × 2 × 3 × (-5)

### Answers

1. (a) A = x, B = 2y, C = z. Jaanch: 3ABC = 6xyz ✅
   **(x + 2y + z)(x² + 4y² + z² - 2xy - 2yz - zx)**
   (b) A = 3a, B = b, C = 2c. Jaanch: 3ABC = 18abc ✅
   **(3a + b + 2c)(9a² + b² + 4c² - 3ab - 2bc - 6ca)**
   (c) A = 1, B = x, C = y. Jaanch: 3ABC = 3xy ✅
   **(1 + x + y)(1 + x² + y² - x - xy - y)**
   (d) A = x, B = -2y, C = -3. Jaanch: -3ABC = -3 × x × (-2y) × (-3) = -18xy ✅
   AB = -2xy, BC = 6y, CA = -3x.
   **(x - 2y - 3)(x² + 4y² + 9 + 2xy - 6y + 3x)**
2. (a) Sum: -15 + 8 + 7 = 0. Value = 3 × (-15) × 8 × 7 = **-2520**
   (Jaanch: -3375 + 512 + 343 = -2520 ✅)
   (b) Ise 30³ + 20³ + (-50)³ padho. Sum: 30 + 20 - 50 = 0. Value = 3 × 30 × 20 × (-50) = **-90000**
   (Jaanch: 27000 + 8000 - 125000 = -90000 ✅)
3. Sum: 2a - b + b - 3c + 3c - 2a = 0. To answer: **3(2a - b)(b - 3c)(3c - 2a)**
4. x² + y² + z² = 100 - 62 = 38.
   x³ + y³ + z³ = 3(30) + 10(38 - 31) = 90 + 70 = **160**
   (Jaanch: 2, 3, 5 se 8 + 27 + 125 = 160 ✅)
5. Sum 0 hai, to a³ + b³ + c³ = 3abc = 3 × 4 = **12**
6. 144 = 50 + 2(xy + yz + zx), to xy + yz + zx = 47.
   x³ + y³ + z³ - 3xyz = 12(50 - 47) = **36**
7. **Left side:** 8 + (-1) + 27 - 3(2)(-1)(3) = 34 + 18 = **52**
   **Right side:**
   - x + y + z = 2 - 1 + 3 = 4
   - x² + y² + z² = 4 + 1 + 9 = 14
   - xy + yz + zx = -2 + (-3) + 6 = 1
   - 4 × (14 - 1) = 4 × 13 = **52**
   Dono barabar ✅
8. (a) **False.** x = y = z hone par bhi ye sach hota hai, jaise 2, 2, 2 (8 + 8 + 8 = 24 = 3 × 8), jabki sum 6 hai.
   (b) **True.** Ye ½[(x - y)² + (y - z)² + (z - x)²] ke barabar hai, aur squares kabhi negative nahi hote.
   (c) **True.** 2 + 3 + (-5) = 0, to shortcut lagta hai. Dono taraf -90 aata hai (8 + 27 - 125 = -90, aur 3 × 2 × 3 × (-5) = -90).

---

Agar ye topic thoda bhaari laga ho, to bas ek baat pakki kar lo: **teen cubes dikhe to pehle unka sum check karo. Sum 0 ho to cubes ka sum = 3 × product.** Isi ek trick se is topic ke aadhe sawaal hal ho jate hain.

---

# Chapter Wrap-up: Factorisation

Ye Factorisation chapter ka aakhri topic tha. Ek nazar mein poora chapter:

| Topic | Kya seekha | Mukhya method / formula |
|---|---|---|
| 1 | Factorisation kya hai, formulae aur methods ka overview | Expansion ka ulta; 9 identities ki table; decision guide |
| 2 | Common factor nikalna | HCF aur sabse kam power bahar: 12x³y² + 18x²y⁴ = 6x²y²(2x + 3y²) |
| 3 | Grouping | 4 terms ko do-do mein baanto: ax + ay + bx + by = (x + y)(a + b) |
| 4 | Difference of two squares | a² - b² = (a + b)(a - b) |
| 5 | Quadratic trinomials | Middle term splitting: product = ac, sum = b |
| 6 | Cube of a binomial | (a ± b)³ = a³ ± 3a²b + 3ab² ± b³ |
| 7 | Sum aur difference of cubes | a³ ± b³ = (a ± b)(a² ∓ ab + b²) |
| 8 | x³ + y³ + z³ - 3xyz | (x + y + z)(x² + y² + z² - xy - yz - zx); sum 0 ho to x³ + y³ + z³ = 3xyz |

Koi bhi expression mile, Topic 1 wala kram yaad rakho: **pehle common factor, phir terms gino aur sahi formula ya method chuno, phir dekho aur toda ja sakta hai ya nahi, aur aakhir mein multiply karke jaanch karo.**
