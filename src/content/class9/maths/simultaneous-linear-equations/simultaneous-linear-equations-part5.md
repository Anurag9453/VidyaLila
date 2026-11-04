# Chapter: Simultaneous Linear Equations (Part 5)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [simultaneous-linear-equations-part4.md](simultaneous-linear-equations-part4.md) se aage chalti hai** (wahan graph aur solutions ki ginti thi). Pehle ke topics ke liye [simultaneous-linear-equations.md](simultaneous-linear-equations.md) se shuru karo.
> **Topics covered in this file:**
> 5. Linear Form mein Badalne wali Equations

---

# Topic 5: Linear Form mein Badalne wali Equations

Ab tak aapne do equations ko hal karne ke chaar tareeke seekhe: substitution, elimination, cross-multiplication aur graph. Topic 4 mein Vihaan aur Zara ki sadkein chowk (3, 2) par kaati thi, aur graph se ye bhi dekha ki do linear equations ke 0, 1 ya anginat solutions ho sakte hain. In sab mein ek baat common thi: equations **x aur y ki seedhi line wali** (linear) thi, jaise 2x + 3y = 13.

Aaj ek naya sawaal: agar equation dekhne mein linear **na** lage, to kya hum apne purane tareeke chhod dein? Bilkul nahi. Aaj seekhenge ki kuch "badmaash" equations apna **bhes badal kar** aati hain, aur ek chhota sa naam badalte hi unka asli, linear chehra saamne aa jata hai.

---

## Naman, Ishita aur Dhruv bhaiya ki chitthiyaan

School ke annual fest mein "Mystery Box" ka stall laga tha. Dhruv bhaiya ne do chitthiyaan (chits) pakda di aur kaha, "Box ka code do numbers x aur y se banta hai. Ye do chits hal kar lo, code mil jayega."

Chits par likha tha:

> **Chit 1:** 2/x + 3/y = 13
> **Chit 2:** 5/x − 4/y = −2

Naman ne sar khujaya. "Ye to x aur y ki jagah **1 by x** aur **1 by y** hain. Na substitution lagta hai, na elimination. Ye linear hi nahi hai!"

Naman sahi tha. Linear equation mein x aur y **seedhe** aate hain, jaise 3x ya 2y. Yahan x neeche (denominator mein) baitha hai.

Ishita ne chit ko dhyan se dekha. "Dekh, dono chits mein **1/x** aur **1/y** baar-baar aa rahe hain. Inhe ek-ek naam de dete hain. Maan le 1/x = **u** aur 1/y = **v**."

Ab chits aise dikhne lagi:

> **Chit 1:** 2u + 3v = 13
> **Chit 2:** 5u − 4v = −2

Naman ki aankhein chamak gayi. "Arre! Ye to wahi purani seedhi-saadi linear equations hain, bas x, y ki jagah u, v hai!"

Ishita ne elimination se hal kiya. Pehli chit ko 4 se aur doosri ko 3 se guna:
- 8u + 12v = 52
- 15u − 12v = −6

Jodne par 23u = 46, yaani **u = 2**. Phir 2(2) + 3v = 13 se 3v = 9, yaani **v = 3**.

Naman khush hokar bola, "Ho gaya! Code hai 2 aur 3!"

Ishita ne roka: "Ruk, ye u aur v hain. Humne x aur y ke liye to poochha hi nahi gaya tha na? Wo to hamare bheje hue naam the. Asli sawaal x aur y ka hai."

- u = 1/x = 2, to **x = 1/2**
- v = 1/y = 3, to **y = 1/3**

Box ka code tha 1/2 aur 1/3. Dhruv bhaiya hans pade: "Do baar socha, tabhi khula!"

**Jaanch (original chits mein):**
- Chit 1: 2/(1/2) + 3/(1/3) = 4 + 9 = 13 ✅
- Chit 2: 5/(1/2) − 4/(1/3) = 10 − 12 = −2 ✅

Ye hi aaj ka poora khel hai: **bhes utaaro (naam badlo), linear banao, hal karo, aur phir naam wapas badlo.**

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Reciprocal** | Kisi number ka "ulta": 1 ko us number se bhaag do | 2 ka reciprocal 1/2, x ka reciprocal 1/x |
| **Naam badalna (substitution of variable)** | Baar-baar aane wale tukde ko ek chhota naya naam de dena | 1/x ko u likhna |
| **Linear form mein laana** | Equation ko naye naam se aisa likhna ki wo seedhi (linear) lage | 2/x + 3/y = 13 se 2u + 3v = 13 |
| **Wapas badalna** | u ya v ki value mil jaane ke baad asli x, y nikalna | u = 2 hai to x = 1/u = 1/2 |
| **Non-zero shart** | x ya y zero nahi ho sakte jab 1/x ya 1/y ho | x ≠ 0, y ≠ 0 |

---

## Part A: 1/x aur 1/y wali equations

### Pehchaan kaise karein?

Agar equation mein x aur y sirf **1/x** aur **1/y** ke roop mein (numerator mein koi number ke saath) aa rahe hain, to naam badalne ka tareeka lagao.

Tareeka (4 kadam):
1. **Naam do:** u = 1/x, v = 1/y.
2. **Likho:** equations ko u, v mein badlo. Ab ye linear hain.
3. **Hal karo:** koi bhi purana tareeka (elimination ya substitution) lagao aur u, v nikalo.
4. **Wapas badlo:** x = 1/u, y = 1/v. Aur jaanch **original** equations mein karo.

### Example 1: 6/x + 4/y = 4 aur 9/x − 2/y = 2

**Kadam 1 aur 2:** u = 1/x, v = 1/y lene par

- 6u + 4v = 4 ... (i)
- 9u − 2v = 2 ... (ii)

**Kadam 3:** (ii) ko 2 se guna karo: 18u − 4v = 4 ... (iii). Ab (i) aur (iii) jodo:

6u + 18u = 24u, 4v − 4v = 0, aur 4 + 4 = 8. To 24u = 8, yaani **u = 1/3**.

(i) mein rakho: 6(1/3) + 4v = 4, to 2 + 4v = 4, 4v = 2, **v = 1/2**.

**Kadam 4:** x = 1/u = **3**, y = 1/v = **2**.

**Jaanch (original equations mein):**
- 6/3 + 4/2 = 2 + 2 = 4 ✅
- 9/3 − 2/2 = 3 − 1 = 2 ✅

Dhyan do: yahan u = 1/3 aur v = 1/2 mile, jabki x = 3 aur y = 2. Agar aap u, v par ruk jaate to jawab bilkul ulta hota.

---

## Part B: xy denominator mein ho

Kabhi-kabhi equation aisi dikhti hai:

> (x + y)/xy = 7

Yahan ek hi bada fraction hai, jiske neeche xy baitha hai. Ise **do hisson mein tod do**, jaise (a + b)/c = a/c + b/c:

> (x + y)/xy = x/xy + y/xy = 1/y + 1/x

x/xy mein x kat jata hai aur 1/y bachta hai. y/xy mein y kat jata hai aur 1/x bachta hai. To

> (x + y)/xy = **1/x + 1/y**

Ab ye wahi 1/x, 1/y wala roop ban gaya. Isi tarah:

> (x − y)/xy = x/xy − y/xy = **1/y − 1/x**

Dhyan se dekho: x − y ka answer 1/y − 1/x hai (1/x − 1/y **nahi**). Ye ulta-pulta hona aasan galti hai.

### Example 2: (x + y)/xy = 7 aur (x − y)/xy = −1

(x + y)/xy = 1/x + 1/y, aur (x − y)/xy = 1/y − 1/x. To u = 1/x, v = 1/y lene par

- u + v = 7 ... (i)
- v − u = −1 ... (ii)

(i) aur (ii) jodo: 2v = 6, to **v = 3**. (i) se u = 7 − 3 = **4**.

Wapas: x = 1/4, y = 1/3.

**Jaanch (original equations mein):**
- x + y = 1/4 + 1/3 = 3/12 + 4/12 = 7/12, aur xy = 1/4 × 1/3 = 1/12. To (x + y)/xy = (7/12) ÷ (1/12) = 7 ✅
- x − y = 1/4 − 1/3 = 3/12 − 4/12 = −1/12. To (x − y)/xy = (−1/12) ÷ (1/12) = −1 ✅

---

## Part C: 1/(x + y) aur 1/(x − y) wali equations

Yahan x aur y akele nahi, balki **ek poora bracket** denominator mein hai, jaise 1/(x + y) aur 1/(x − y). Trick wahi hai, bas naam poore bracket ko do:

> u = 1/(x + y), v = 1/(x − y)

Equations u, v mein linear ban jayengi. Hal karne ke baad **do baar** wapas badalna hai:

1. u se x + y nikalo (x + y = 1/u), v se x − y nikalo (x − y = 1/v).
2. Ab ye do **seedhi linear equations** hain x aur y mein. Inhe elimination se hal karo.

### Example 3: 12/(x + y) + 8/(x − y) = 6 aur 6/(x + y) − 4/(x − y) = −1

Shart: x + y ≠ 0 aur x − y ≠ 0 (warna 1/0 ka koi matlab nahi).

u = 1/(x + y), v = 1/(x − y) lene par

- 12u + 8v = 6 ... (i)
- 6u − 4v = −1 ... (ii)

(ii) ko 2 se guna karo: 12u − 8v = −2 ... (iii). (i) aur (iii) jodo: 24u = 4, to **u = 1/6**.

(i) mein rakho: 12(1/6) + 8v = 6, to 2 + 8v = 6, 8v = 4, **v = 1/2**.

**Pehla wapas badalna:**
- x + y = 1/u = **6**
- x − y = 1/v = **2**

**Doosra hal (naya chhota system):** dono jodo: 2x = 8, **x = 4**. Phir y = 6 − 4 = **2**.

**Jaanch (original equations mein):** x + y = 6 aur x − y = 2 hain.
- 12/6 + 8/2 = 2 + 4 = 6 ✅
- 6/6 − 4/2 = 1 − 2 = −1 ✅

Is example mein "wapas badalne" ke **do** stage the: pehle u, v se x + y, x − y, phir unse x, y. Dono zaroori hain.

---

## Part D: xy wali equations, xy se bhaag dena

Kabhi equation aisi aati hai jisme **xy ka product** seedha likha hota hai:

> 6x + 3y = 6xy
> 2x + 4y = 5xy

Ye bhi linear nahi hai (xy do variables ka guna hai). Trick: **dono taraf ko xy se bhaag** do. Isse x/xy = 1/y aur y/xy = 1/x ban jata hai.

**Zaroori shart:** xy se bhaag tabhi de sakte hain jab xy ≠ 0, yaani **x ≠ 0 aur y ≠ 0**. Zero se bhaag dena kabhi allowed nahi hota. Ise hum shuru mein hi likh dete hain.

### Example 4: 6x + 3y = 6xy aur 2x + 4y = 5xy

Maan lo x ≠ 0 aur y ≠ 0. Dono taraf xy se bhaag dene par

- 6x/xy + 3y/xy = 6xy/xy, yaani 6/y + 3/x = 6
- 2x/xy + 4y/xy = 5xy/xy, yaani 2/y + 4/x = 5

u = 1/x, v = 1/y lene par

- 3u + 6v = 6, ise 3 se bhaag karo: **u + 2v = 2** ... (i)
- 4u + 2v = 5 ... (ii)

(ii) − (i): 3u = 3, to **u = 1**. Phir (i) se 2v = 2 − 1 = 1, **v = 1/2**.

Wapas: x = 1/u = **1**, y = 1/v = **2**.

**Jaanch (original equations mein):**
- 6(1) + 3(2) = 6 + 6 = 12, aur 6xy = 6 × 1 × 2 = 12 ✅
- 2(1) + 4(2) = 2 + 8 = 10, aur 5xy = 5 × 1 × 2 = 10 ✅

**Ek baat aur:** x = 0, y = 0 bhi in dono equations ko satisfy kar deta hai (0 = 0 dono taraf). Par ye "bekaar wala" hal hai, aur humne shuru mein hi x, y ≠ 0 maana tha. Isliye hum xy ≠ 0 wale hal ki baat kar rahe hain.

---

## Part E: Jab denominator mein x − a ya y − b ho

Naam badalne ka idea kisi bhi aise tukde par lagta hai jo **baar-baar aa raha ho**. Tukda kuch bhi ho sakta hai: 1/x, 1/(x + y), 1/(x − 1), 1/(y + 2).

### Example 5: 5/(x − 1) + 1/(y − 2) = 2 aur 6/(x − 1) − 3/(y − 2) = 1

Shart: x ≠ 1, y ≠ 2.

u = 1/(x − 1), v = 1/(y − 2) lene par

- 5u + v = 2 ... (i)
- 6u − 3v = 1 ... (ii)

(i) ko 3 se guna karo: 15u + 3v = 6 ... (iii). (ii) aur (iii) jodo: 21u = 7, to **u = 1/3**.

(i) se v = 2 − 5(1/3) = 2 − 5/3 = 1/3. To **v = 1/3**.

Wapas:
- x − 1 = 1/u = 3, to **x = 4**
- y − 2 = 1/v = 3, to **y = 5**

**Jaanch (original equations mein):**
- 5/(4 − 1) + 1/(5 − 2) = 5/3 + 1/3 = 6/3 = 2 ✅
- 6/(4 − 1) − 3/(5 − 2) = 6/3 − 3/3 = 2 − 1 = 1 ✅

---

## Part F: Ek aur example, sab milake

### Example 6: 10/(x + y) + 2/(x − y) = 4 aur 15/(x + y) − 5/(x − y) = −2

Shart: x + y ≠ 0, x − y ≠ 0.

u = 1/(x + y), v = 1/(x − y) lene par

- 10u + 2v = 4 ... (i)
- 15u − 5v = −2 ... (ii)

(i) ko 5 se guna karo: 50u + 10v = 20. (ii) ko 2 se guna karo: 30u − 10v = −4. Jodo: 80u = 16, to **u = 1/5**.

(i) se: 10(1/5) + 2v = 4, to 2 + 2v = 4, **v = 1**.

- x + y = 1/u = **5**
- x − y = 1/v = **1**

Jodo: 2x = 6, **x = 3**. Phir y = 5 − 3 = **2**.

**Jaanch (original equations mein):**
- 10/(3 + 2) + 2/(3 − 2) = 10/5 + 2/1 = 2 + 2 = 4 ✅
- 15/(3 + 2) − 5/(3 − 2) = 15/5 − 5/1 = 3 − 5 = −2 ✅

---

## Aam galtiyan (bachke rehna)

**Galti 1: u, v par ruk jana, x, y nahi nikalna**

Chit wale sawaal mein u = 2, v = 3 mile. Agar kisi ne x = 2, y = 3 likh diya, to jaanch karo: 2/2 + 3/3 = 1 + 1 = 2, jabki chahiye tha 13. ❌ Sahi: **x = 1/2, y = 1/3**. Hamesha end mein khud se poochho: "Sawaal x, y ka tha ya u, v ka?"

**Galti 2: x ya y zero ho sakta hai, ye bhool jana**

6x + 3y = 6xy jaisi equation ko xy se bhaag karne se pehle likho "x ≠ 0, y ≠ 0". Agar x = 0 ho sakta, to xy se bhaag dena 0 se bhaag dena hota, jo allowed nahi. Ye shart likhna bhoolna ek aasan galti hai. Yaad rakho: **bhaag dene se pehle shart likho.**

**Galti 3: 1/(x + y) ko 1/x + 1/y likh dena**

Ye bahut common aur bahut khatarnak galti hai. Check karne ke liye chhote number lo: x = 1, y = 1.
- 1/(x + y) = 1/(1 + 1) = **1/2**
- 1/x + 1/y = 1/1 + 1/1 = **2**

1/2 aur 2 barabar nahi hain. To 1/(x + y) ≠ 1/x + 1/y. Isiliye Part C mein poore bracket (x + y) ko ek hi tukda maan kar u = 1/(x + y) liya, use todne ki koshish nahi ki.

**Galti 4: (x − y)/xy ko 1/x − 1/y likhna**

Sahi hai 1/y − 1/x. Chhote number se check: x = 2, y = 4. (2 − 4)/(2 × 4) = −2/8 = −1/4. Aur 1/y − 1/x = 1/4 − 1/2 = −1/4 ✅, jabki 1/x − 1/y = 1/2 − 1/4 = +1/4 ❌.

**Galti 5: Jaanch u, v wali equations mein karna**

Jaanch hamesha **original equations** mein karo (jinme x aur y hain), kyunki naam badalne mein agar koi galti hui hai to u, v wali equations mein jaanch use pakad nahi payegi.

---

## Quick Recap

- Equation 2/x + 3/y = 13 jaisi ho to **u = 1/x, v = 1/y** lo. Ye u, v mein **linear** ho jati hai.
- Hal karo (elimination ya koi bhi purana tareeka), phir **x = 1/u, y = 1/v** se wapas badlo.
- (x + y)/xy = 1/x + 1/y aur (x − y)/xy = 1/y − 1/x.
- 1/(x + y) aur 1/(x − y) ho to **u = 1/(x + y), v = 1/(x − y)** lo. Hal ke baad x + y = 1/u aur x − y = 1/v se phir ek chhota linear system banao.
- 6x + 3y = 6xy jaisi equations ko **xy se bhaag** do, par pehle likho **x ≠ 0, y ≠ 0**.
- Kisi bhi baar-baar aane wale tukde (jaise 1/(x − 1)) ko naam diya ja sakta hai.
- Jaanch **original** equations mein karo.
- Galtiyan: u, v par ruk jana; zero check bhoolna; 1/(x + y) ko 1/x + 1/y likhna.

---

## Practice Questions

1. Solve: 4/x + 8/y = 4 and 6/x − 4/y = 2. Verify your answer in the original equations.

2. Solve: (x + y)/xy = 3 and (x − y)/xy = 1.

3. Solve: 4/(x + y) + 6/(x − y) = 4 and 8/(x + y) − 6/(x − y) = −1.

4. Solve (x and y are non-zero): 4x + 2y = 4xy and 2x + 3y = 4xy.

5. Solve: 2/(x − 2) + 4/(y + 1) = 2 and 6/(x − 2) − 8/(y + 1) = 1.

6. A student solved 2/x + 3/y = 13 and 5/x − 4/y = −2, got u = 2, v = 3 and wrote the answer x = 2, y = 3. Find the mistake and give the correct answer.

7. A student says: "To solve 2x + y = 3xy, I will divide by xy. I don't need to worry about anything else." What condition is the student missing? Explain why it is needed.

8. State True or False:
   (a) 1/(x + y) = 1/x + 1/y.
   (b) The equation 2/x + 3/y = 13 is a linear equation in x and y.
   (c) The equation 2/x + 3/y = 13 becomes linear in u and v if u = 1/x and v = 1/y.
   (d) If u = 1/(x + y) = 1/6, then x + y = 6.

### Answers

1. u = 1/x, v = 1/y lo: 4u + 8v = 4, yaani u + 2v = 1 ... (i); 6u − 4v = 2, yaani 3u − 2v = 1 ... (ii). Jodne par 4u = 2, **u = 1/2**. (i) se 2v = 1 − 1/2 = 1/2, **v = 1/4**. Wapas: **x = 2, y = 4**.
   Jaanch: 4/2 + 8/4 = 2 + 2 = 4 ✅ aur 6/2 − 4/4 = 3 − 1 = 2 ✅

2. (x + y)/xy = 1/x + 1/y aur (x − y)/xy = 1/y − 1/x. To u + v = 3 aur v − u = 1. Jodo: 2v = 4, **v = 2**, u = 3 − 2 = **1**. Wapas: **x = 1, y = 1/2**.
   Jaanch: x + y = 3/2, xy = 1/2, to (x + y)/xy = (3/2) ÷ (1/2) = 3 ✅. x − y = 1/2, to (x − y)/xy = (1/2) ÷ (1/2) = 1 ✅

3. u = 1/(x + y), v = 1/(x − y): 4u + 6v = 4 ... (i); 8u − 6v = −1 ... (ii). Jodo: 12u = 3, **u = 1/4**. (i) se 1 + 6v = 4, 6v = 3, **v = 1/2**. To x + y = 4 aur x − y = 2. Jodo: 2x = 6, **x = 3**, y = 4 − 3 = **1**.
   Jaanch: 4/4 + 6/2 = 1 + 3 = 4 ✅ aur 8/4 − 6/2 = 2 − 3 = −1 ✅

4. x ≠ 0, y ≠ 0 maan kar xy se bhaag do: 4/y + 2/x = 4 aur 2/y + 3/x = 4. u = 1/x, v = 1/y: 2u + 4v = 4, yaani u + 2v = 2 ... (i); 3u + 2v = 4 ... (ii). (ii) − (i): 2u = 2, **u = 1**. (i) se 2v = 1, **v = 1/2**. Wapas: **x = 1, y = 2**.
   Jaanch: 4(1) + 2(2) = 8 aur 4xy = 4 × 2 = 8 ✅. 2(1) + 3(2) = 8 aur 4xy = 8 ✅

5. u = 1/(x − 2), v = 1/(y + 1): 2u + 4v = 2, yaani u + 2v = 1 ... (i); 6u − 8v = 1 ... (ii). (i) ko 4 se guna karo: 4u + 8v = 4. (ii) se jodo: 10u = 5, **u = 1/2**. (i) se 2v = 1/2, **v = 1/4**. To x − 2 = 2, **x = 4**, aur y + 1 = 4, **y = 3**.
   Jaanch: 2/(4 − 2) + 4/(3 + 1) = 1 + 1 = 2 ✅ aur 6/2 − 8/4 = 3 − 2 = 1 ✅

6. Galti: u = 2 ka matlab 1/x = 2, yaani x = 1/2 (x = 2 nahi). Similarly v = 3 se y = 1/3. Sahi jawab: **x = 1/2, y = 1/3**.
   Jaanch: galat jawab x = 2, y = 3 se 2/2 + 3/3 = 2 ≠ 13 ❌. Sahi jawab se 2/(1/2) + 3/(1/3) = 4 + 9 = 13 ✅

7. Student ko likhna chahiye tha **x ≠ 0 aur y ≠ 0**, kyunki xy se bhaag dene ke liye xy ka zero na hona zaroori hai (zero se bhaag allowed nahi). Dhyan do ki x = 0, y = 0 equation ko satisfy karta hai (0 = 0), lekin wo bhaag dene wale hal ke andar nahi aata, isliye shart batana zaroori hai.

8. (a) **False** ❌. x = y = 1 par 1/(x + y) = 1/2, aur 1/x + 1/y = 2.
   (b) **False** ❌. x neeche (denominator mein) hai, to ye x, y mein linear nahi hai.
   (c) **True** ✅. Ye 2u + 3v = 13 ban jati hai.
   (d) **True** ✅. x + y = 1/u = 1/(1/6) = 6.

---

Dekha, bas ek chhota sa naam badalne se mushkil dikhne wali equations bhi purane tareekon se hal ho gayi. Jab bhi koi equation "ajeeb" dikhe, pehle poochho: kya koi tukda baar-baar aa raha hai jise naam diya ja sake?

**Aage kya?** Ab tak hum sirf equations hal kar rahe the. Topic 6 mein dekhenge ki ye sab kaam kaise aata hai: **asli zindagi ke sawaal** (numbers, umar, fractions aur digits), jahan shabdon se pehle equations banani padti hain, phir hal karni padti hain.
