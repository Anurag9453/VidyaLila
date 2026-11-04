# Chapter: Simultaneous Linear Equations

> **Class:** 9 | **Subject:** Mathematics
> **Ye ek naya chapter hai.** Isme pichhle chapter [Linear Equations in Two Variables](../linear-equations-in-two-variables/linear-equations-in-two-variables.md) ki baatein kaam aayengi: ax + by + c = 0 ki shakal, ordered pair (x, y) ka solution, aur ye ki aisi ek equation ke anginat solutions hote hain (iska graph ek seedhi line hai, [Topic 2 wahan](../linear-equations-in-two-variables/linear-equations-in-two-variables-part2.md)).
> **Topics covered in this file:**
> 1. Simultaneous Equations kya hain aur Substitution Method

---

# Topic 1: Simultaneous Equations kya hain aur Substitution Method

Pichhle chapter mein humne dekha tha ki **2x + y = 30** jaisi ek equation ke **anginat solutions** hote hain: (10, 10), (12, 6), (5, 20) ... sab chalte hain. Graph par ye saare solutions ek seedhi line par aate the. Wahan ye bhi laga tha ki "pakka jawab paane ke liye ek aur jaankari chahiye."

Wo "ek aur jaankari" ab aa rahi hai. Is chapter mein hum **do equations ek saath** lenge, aur dekhenge ki kaise unse **ek hi pakka jawab** nikalta hai. Is topic mein hum ye bhi seekhenge ki jawab nikalne ka pehla tareeka kya hai: **substitution method** (ek cheez ki jagah doosri rakh dena).

---

## Gupta Stationers ki kahani

Naina aur Veer ek hi mohalle mein rehte hain aur dono Gupta Stationers se saaman lete hain. Dukaan ka daam-board kahin gir gaya hai, to unhe pata nahi ki ek pen aur ek notebook ka daam kya hai. Par dono ke paas apne-apne bill hain.

**Somvaar ko Naina ne** 2 pen aur 1 notebook li aur **₹40** diye.

**Mangalvaar ko Veer ne** 1 pen aur 3 notebooks li aur **₹70** diye.

Dono din daam wahi the. Ab Naina kehti hai, "Mere bill se to pen ka daam pata chal sakta hai na?" Dekhte hain.

Maan lo ek pen **x** rupaye ka hai aur ek notebook **y** rupaye ki. Naina ke bill se:

**2x + y = 40**

Kya isse x aur y pakke pata chal jayenge? Table banao:

| Pen (x) | Notebook (y) | 2x + y |
|---|---|---|
| ₹10 | ₹20 | 20 + 20 = ₹40 |
| ₹15 | ₹10 | 30 + 10 = ₹40 |
| ₹5 | ₹30 | 10 + 30 = ₹40 |
| ₹20 | ₹0 | 40 + 0 = ₹40 |

Sab chal rahe hain. (Aakhri wala ajeeb hai, kyunki notebook free nahi hoti, par maths ke hisaab se wo bhi equation ko sach karta hai.) Yaani akeli Naina ka bill kuch pakka nahi bata sakta.

Ab Veer ka bill dekho: **x + 3y = 70**. Ye bhi akela dekho to anginat jawab dega, jaise (10, 20) ya (40, 10) ya (70, 0). Par ab ek mazedaar baat: **dono bill ek hi (x, y) se sach hone chahiye**, kyunki daam dono din wahi the. Naina wale table ke jawab Veer ke bill mein daalo:

- (10, 20): 10 + 60 = 70 ✅ (chal gaya!)
- (15, 10): 15 + 30 = 45 ❌
- (5, 30): 5 + 90 = 95 ❌
- (20, 0): 20 + 0 = 20 ❌

Sirf ek pair **(10, 20)** dono bills par khara utra. Yaani **pen ₹10 ka aur notebook ₹20 ki.** Do bills ne milkar wo pakka jawab de diya jo ek bill akela nahi de paaya.

Par har baar table bana kar andaza lagana lamba hai. Is topic mein hum isi jawab ko **tareeke se** nikalna seekhenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Simultaneous** | Saath-saath: dono conditions ek hi samay par sach honi chahiye | Naina aur Veer ke dono bill |
| **System of equations** | Do (ya zyada) equations ka ek jodi-sa jhund, jo same variables par hain | 2x + y = 40 aur x + 3y = 70 |
| **Solution of a system** | Wo (x, y) jo **har ek** equation ko sach kare | (10, 20) |
| **Satisfy karna** | Kisi value ka equation ko sach bana dena | (10, 20) dono equations ko satisfy karta hai |
| **Subject banana** | Equation ko aise likhna ki ek variable akela ek taraf ho | 2x + y = 40 se y = 40 − 2x |
| **Substitution** | Kisi variable ki jagah uska barabar wala expression rakh dena | y ki jagah (40 − 2x) rakhna |
| **Back-substitute** | Mili hui value ko wapas daal kar doosra variable nikalna | x = 10 se y nikalna |

---

## Part A: Ek equation kaafi kyun nahi, aur do equations kya karti hain

### Ek equation: anginat pairs

Pichhle chapter se yaad hai: **x + y = 10** ke solutions (1, 9), (2, 8), (3, 7), (4, 6), (5, 5), (0, 10), (−3, 13) ... aur aise hi anginat. Ek equation ek condition hai, aur ek condition se do cheezein pakki nahi hoti.

### Do equations: do conditions saath

Ab doosri condition jodte hain: **x − y = 2**. Iske solutions bhi anginat hain: (2, 0), (3, 1), (4, 2), (5, 3), (6, 4) ...

Kya koi pair **dono** list mein hai? Pehli list mein (6, 4) hai: 6 + 4 = 10 ✅. Doosri mein bhi (6, 4) hai: 6 − 4 = 2 ✅. Haan! **(6, 4)** dono mein hai.

Jab hum aisi do equations ko **saath-saath** (simultaneously) sach karne ki baat karte hain, to unhe kehte hain **simultaneous linear equations**, ya **system of linear equations**. Likhte aise hain:

> x + y = 10
> x − y = 2

**System ka solution** wo (x, y) hota hai jo **dono** equations ko sach kare. Yahan solution **x = 6, y = 4** hai.

**Zaroori baat:** solution ko dono equations par khara utarna padta hai. Agar ek par bhi fail hua, to wo system ka solution nahi hai.

Aam taur par do aisi conditions milkar **ek hi pair** pakka kar deti hain. (Kabhi-kabhi aisa nahi bhi hota, kabhi koi pair milta hi nahi aur kabhi anginat milte hain. Is baare mein Topic 4 mein baat karenge. Abhi hum wo systems lenge jinka ek hi jawab hai.)

---

## Part B: Diya hua pair solution hai ya nahi? (Jaanchna)

Is ka tareeka seedha hai: **x aur y ki values dono equations mein daalo.** Dono sach nikle, tabhi pair solution hai.

### Example 1: Kya (4, 3) system x + y = 7 aur x − y = 1 ka solution hai?

- Equation 1: 4 + 3 = 7 ✅
- Equation 2: 4 − 3 = 1 ✅

Dono sach hain, to **(4, 3) solution hai.**

### Example 2: Kya (5, 2) wahi system ka solution hai?

- Equation 1: 5 + 2 = 7 ✅
- Equation 2: 5 − 2 = 3, par chahiye tha 1 ❌

Ek equation fail hui, to **(5, 2) solution nahi hai**, bhale pehli equation ko khush kar de.

### Example 3: Kya x = 2, y = −1 system 3x + 2y = 4 aur x − 3y = 5 ka solution hai?

- Equation 1: 3(2) + 2(−1) = 6 − 2 = 4 ✅
- Equation 2: 2 − 3(−1) = 2 + 3 = 5 ✅

Haan, **solution hai.** Dhyan do ki negative value daalte waqt bracket mein rakho, jaise 3(−1), warna sign galat ho jata hai.

---

## Part C: Substitution method, kadam-dar-kadam

Ab asli sawaal: bina andaza lagaye solution kaise nikalein? **Substitution method** ka idea bahut seedha hai:

> Ek equation se dekh lo ki **x kis ke barabar hai** (ya y kis ke barabar hai). Phir "x" ki jagah wo hi cheez doosri equation mein rakh do. Ab doosri equation mein sirf **ek variable** bacha, aur wo to aap pehle se solve karna jaante ho.

Jaise dukaan mein koi kahe "ek pen = do rupaye kam ek notebook ke", to jahan "pen" likha ho wahan "notebook − 2" likh sakte ho. Wahi substitution hai.

### Chaar kadam

1. **Chuno:** Dono equations mein se sabse aasaan wali chuno, aur usme se ek variable ko **subject** banao (akela ek taraf). Wo variable chuno jiska coefficient 1 ho, to fractions se bach jaoge.
2. **Rakho:** Is expression ko **doosri equation** mein us variable ki jagah rakho (bracket ke saath).
3. **Solve karo:** Ab ek variable wali equation hai. Solve karo.
4. **Wapas daalo aur jaancho:** Mili value ko wapas kisi equation mein daal kar doosra variable nikalo. Phir dono equations mein jaanch lo.

### Example 4: Gupta Stationers wala system

> 2x + y = 40 ... (1)
> x + 3y = 70 ... (2)

**Kadam 1 (chuno):** Equation (2) mein x ka coefficient 1 hai. Usse x akela karo:

x = 70 − 3y

**Kadam 2 (rakho):** Ab equation (1) mein x ki jagah (70 − 3y) rakho:

2(70 − 3y) + y = 40

**Kadam 3 (solve):**

- 140 − 6y + y = 40
- 140 − 5y = 40
- −5y = 40 − 140 = −100
- y = **20**

**Kadam 4 (back-substitute):** y = 20 ko x = 70 − 3y mein daalo:

x = 70 − 3(20) = 70 − 60 = **10**

**Jawab: x = 10, y = 20**, yaani pen ₹10 ka, notebook ₹20 ki. Bilkul wahi jo table se mila tha.

**Jaanch:**
- Equation (1): 2(10) + 20 = 20 + 20 = 40 ✅
- Equation (2): 10 + 3(20) = 10 + 60 = 70 ✅

### Example 5: Aasaan chunav (jab ek variable ka coefficient 1 ho)

> x + 2y = 11 ... (1)
> 3x − y = 12 ... (2)

Do variables ka coefficient 1 (ya −1) hai: (1) mein x, aur (2) mein y. Hum **(2) se y** lete hain, kyunki isme koi fraction nahi banega:

3x − y = 12 → −y = 12 − 3x → **y = 3x − 12**

Ye y ki value (1) mein rakho:

x + 2(3x − 12) = 11

- x + 6x − 24 = 11
- 7x = 11 + 24 = 35
- x = **5**

Back-substitute: y = 3(5) − 12 = 15 − 12 = **3**

**Jaanch:**
- (1): 5 + 2(3) = 5 + 6 = 11 ✅
- (2): 3(5) − 3 = 15 − 3 = 12 ✅

**Jawab: x = 5, y = 3.**

### Example 6: Pehle rearrange karo, jawab negative

> 4x = y + 11 ... (1)
> 3x + 2y = 0 ... (2)

Equation (1) mein y ka coefficient 1 hai, to y ko akela karna aasaan hai. Dono taraf se 11 ghatao aur dono taraf ko ulta likho:

4x = y + 11 → y = **4x − 11**

(2) mein y ki jagah rakho:

3x + 2(4x − 11) = 0

- 3x + 8x − 22 = 0
- 11x = 22
- x = **2**

Back-substitute: y = 4(2) − 11 = 8 − 11 = **−3**

Yahan y negative nikla, aur ye bilkul theek hai. Solutions negative bhi ho sakte hain.

**Jaanch:**
- (1): 4(2) = 8, aur y + 11 = −3 + 11 = 8 ✅
- (2): 3(2) + 2(−3) = 6 − 6 = 0 ✅

**Jawab: x = 2, y = −3.**

### Example 7: Fractions wali equation

> x/2 + y/3 = 4 ... (1)
> x − y = 3 ... (2)

Pehle (1) ke fractions hata lete hain. Dono denominators 2 aur 3 ka common multiple 6 hai. Poori equation ko 6 se multiply karo:

6 × (x/2) + 6 × (y/3) = 6 × 4 → **3x + 2y = 24** ... (1')

(Ye wahi equation hai, bas fractions ke bina. Dono taraf 6 se guna kiya, to kuch nahi badla.)

Ab (2) se x akela karo (isme x ka coefficient 1 hai):

x = y + 3

(1') mein rakho:

3(y + 3) + 2y = 24

- 3y + 9 + 2y = 24
- 5y = 15
- y = **3**

Back-substitute: x = 3 + 3 = **6**

**Jaanch (original equations mein, fraction wali mein):**
- (1): 6/2 + 3/3 = 3 + 1 = 4 ✅
- (2): 6 − 3 = 3 ✅

**Jawab: x = 6, y = 3.**

### Example 8: Dono answers negative

> x − 2y = 0 ... (1)
> 3x − 4y = −2 ... (2)

(1) se: x = 2y.

(2) mein rakho:

3(2y) − 4y = −2

- 6y − 4y = −2
- 2y = −2
- y = **−1**

Back-substitute: x = 2(−1) = **−2**

**Jaanch:**
- (1): −2 − 2(−1) = −2 + 2 = 0 ✅
- (2): 3(−2) − 4(−1) = −6 + 4 = −2 ✅

**Jawab: x = −2, y = −1.**

### Example 9: Jab kisi variable ka coefficient 1 nahi ho

> 2x + 3y = 13 ... (1)
> 5x − 2y = 4 ... (2)

Ab koi bhi variable "akela" nahi hai. Koi baat nahi, (1) se x akela karte hain:

2x = 13 − 3y → x = (13 − 3y)/2

(2) mein rakho:

5 × (13 − 3y)/2 − 2y = 4

Fraction hataane ke liye dono taraf 2 se multiply karo:

5(13 − 3y) − 4y = 8

- 65 − 15y − 4y = 8
- 65 − 19y = 8
- −19y = 8 − 65 = −57
- y = **3**

Back-substitute: x = (13 − 3 × 3)/2 = (13 − 9)/2 = 4/2 = **2**

**Jaanch:**
- (1): 2(2) + 3(3) = 4 + 9 = 13 ✅
- (2): 5(2) − 2(3) = 10 − 6 = 4 ✅

**Jawab: x = 2, y = 3.**

Is example se samajh aata hai ki kab substitution thoda lamba lagta hai: jab kisi variable ka coefficient 1 ya −1 nahi hota. Aise mein koi aur tareeka shayad aasaan ho. Wo aage aayega.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Mili hui expression ko usi equation mein wapas daal dena**

System: x + y = 10 aur x − y = 2.

Maan lo (1) se x = 10 − y nikala. Ab agar isse **wapas (1) mein hi** daalo:
- (10 − y) + y = 10 → 10 = 10

Kuch nahi mila! Ye to wahi baat dohrana hui. Ye expression **doosri equation** mein jaani chahiye:
- (10 − y) − y = 2 → 10 − 2y = 2 → y = 4, to x = 6.

**Niyam:** jis equation se variable subject banaya, usme wapas mat daalo. Doosri equation mein daalo.

**Galti 2: Terms idhar-udhar karte waqt sign galat karna**

3x − y = 12 se y nikalna hai.
- Galat: y = 12 − 3x. (Yahan sign ulta ho gaya.)
- Sahi: −y = 12 − 3x, to dono taraf −1 se guna karo: **y = 3x − 12**.

Jaanch ka tareeka: pair (5, 3) lekar dekho. Sahi y = 3(5) − 12 = 3 ✅. Galat y = 12 − 15 = −3 ❌. Hamesha ek chhota number daal kar apna rearrange kiya hua check kar lo.

**Galti 3: Bracket bhool jana**

2(3x − 12) ko 6x − 12 likh dena. Bracket ke andar **har cheez** ko 2 se guna hota hai: 2(3x − 12) = 6x − 24.

**Galti 4: Sirf ek variable nikal kar ruk jana**

x = 5 mil gaya aur likh diya "Answer: x = 5". Par solution ek **pair** hota hai. y bhi nikalna padega (back-substitute karke). Dono ke bina jawab adhura hai.

**Galti 5: Jaanch na karna ya sirf ek equation mein karna**

Jaanch **dono** equations mein karo. Agar sirf ek mein karoge, to wahi dhokha ho sakta hai jo Part B ke Example 2 mein (5, 2) ke saath hua tha: ek equation sach, doosri nahi.

---

## Quick Recap

- Ek linear equation in two variables ke **anginat solutions** hote hain, isliye x aur y pakke nahi hote.
- **Simultaneous equations (system)** mein do equations hoti hain jo **saath-saath** sach honi chahiye. System ka **solution** wo pair (x, y) hai jo **dono** ko satisfy kare.
- Pair jaanchne ke liye x, y ki values **dono equations** mein daalo. Dono sach to solution, ek bhi fail to solution nahi.
- **Substitution method:** (1) aasaan equation chuno aur ek variable subject banao, (2) usse **doosri** equation mein rakho, (3) ek variable wali equation solve karo, (4) back-substitute karo aur dono equations mein jaanch karo.
- Coefficient 1 wala variable chuno, fractions ho to pehle common multiple se guna karke hata do.
- Galtiyan: usi equation mein wapas daalna, sign galat, bracket bhoolna, sirf ek variable batana.

---

## Practice Questions

1. Is (3, 2) a solution of the system x + y = 5 and 2x − y = 4? Is (1, 4) a solution of the same system? Explain.

2. Solve by substitution: x + y = 9 and 2x − y = 3. Verify your answer in both equations.

3. Solve by substitution: 3x + y = 11 and 2x − 3y = 0. Verify your answer.

4. Solve by substitution: y = 3x + 7 and x + 2y = 7. Verify your answer.

5. Solve by substitution: x/2 + y/4 = 4 and x − y = −4. Verify your answer.

6. Solve by substitution: 2x + 3y = −1 and x − y = −3. Verify your answer.

7. A student solves x + y = 6 and x − y = 2 as follows. From the first equation, x = 6 − y. Putting this into the first equation: (6 − y) + y = 6, so 6 = 6. "So the system has no useful answer," says the student. Find the mistake and solve the system correctly.

8. State True or False:
   (a) A single linear equation in two variables has infinitely many solutions.
   (b) If a pair satisfies one equation of a system, it is surely a solution of the system.
   (c) After making x the subject from equation (1), we should substitute it into equation (2).
   (d) A solution of a system of equations can have a negative value for x or y.

### Answers

1. (3, 2): x + y = 3 + 2 = 5 ✅, 2x − y = 6 − 2 = 4 ✅. Dono sach, to **(3, 2) solution hai**.
   (1, 4): x + y = 1 + 4 = 5 ✅, par 2x − y = 2 − 4 = −2, chahiye tha 4 ❌. Ek equation fail, to **(1, 4) solution nahi hai**.

2. x + y = 9 se y = 9 − x. Doosri mein rakho: 2x − (9 − x) = 3 → 2x − 9 + x = 3 → 3x = 12 → x = 4. Phir y = 9 − 4 = 5.
   **x = 4, y = 5.**
   Jaanch: 4 + 5 = 9 ✅, 2(4) − 5 = 8 − 5 = 3 ✅

3. 3x + y = 11 se y = 11 − 3x. Doosri mein rakho: 2x − 3(11 − 3x) = 0 → 2x − 33 + 9x = 0 → 11x = 33 → x = 3. Phir y = 11 − 9 = 2.
   **x = 3, y = 2.**
   Jaanch: 3(3) + 2 = 11 ✅, 2(3) − 3(2) = 6 − 6 = 0 ✅

4. y pehle se subject hai: y = 3x + 7. Doosri mein rakho: x + 2(3x + 7) = 7 → x + 6x + 14 = 7 → 7x = −7 → x = −1. Phir y = 3(−1) + 7 = 4.
   **x = −1, y = 4.**
   Jaanch: pehli equation: y = 3(−1) + 7 = 4 ✅. Doosri: −1 + 2(4) = −1 + 8 = 7 ✅

5. Pehli equation ko 4 se guna karo: 2x + y = 16. Doosri se x = y − 4. Rakho: 2(y − 4) + y = 16 → 2y − 8 + y = 16 → 3y = 24 → y = 8. Phir x = 8 − 4 = 4.
   **x = 4, y = 8.**
   Jaanch: 4/2 + 8/4 = 2 + 2 = 4 ✅, 4 − 8 = −4 ✅

6. x − y = −3 se x = y − 3. Pehli mein rakho: 2(y − 3) + 3y = −1 → 2y − 6 + 3y = −1 → 5y = 5 → y = 1. Phir x = 1 − 3 = −2.
   **x = −2, y = 1.**
   Jaanch: 2(−2) + 3(1) = −4 + 3 = −1 ✅, −2 − 1 = −3 ✅

7. Student ne x = 6 − y ko **usi pehli equation** mein daal diya, jisse wo nikla tha, isliye 6 = 6 mila (kuch naya nahi). Isse **doosri** equation (x − y = 2) mein rakhna tha: (6 − y) − y = 2 → 6 − 2y = 2 → 2y = 4 → y = 2. Phir x = 6 − 2 = 4.
   **x = 4, y = 2.**
   Jaanch: 4 + 2 = 6 ✅, 4 − 2 = 2 ✅

8. (a) **True** ✅. Pichhle chapter se: ek equation ke anginat solutions hote hain.
   (b) **False** ❌. Dono equations ko satisfy karna zaroori hai (jaise Part B ka (5, 2) pehli ko satisfy karta tha par system ka solution nahi tha).
   (c) **True** ✅. Doosri equation mein rakhna hi sahi tareeka hai.
   (d) **True** ✅. Jaise Example 6 mein y = −3 aur Example 8 mein dono negative the.

---

Bahut accha! Ab aap do equations ko saath-saath solve karna jaante ho, aur ek pair ko jaanch bhi sakte ho. Substitution ka tareeka tab sabse aasaan lagta hai jab koi variable akela hone ke liye taiyaar baitha ho. Jab sab coefficients bade hon, tab bracket aur fractions thoda tang karte hain.

**Aage kya?** Example 9 mein humne dekha ki jab koi coefficient 1 nahi hota, to substitution mein fractions aa jate hain. Topic 2 mein ek aur tareeka aayega jisme hum do equations ko seedha **jodte ya ghatate** hain, aur ek variable apne aap **gayab** ho jata hai, bina fractions banaye. Ye tareeka hai **elimination**.
