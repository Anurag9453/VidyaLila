# Chapter: Trigonometry (Part 6)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [trigonometry-part5.md](trigonometry-part5.md) se aage chalti hai.** (Chapter ki shuruaat [trigonometry.md](trigonometry.md) se hoti hai. Triangle ke angles ka sum [triangles-part2.md](../triangles/triangles-part2.md) mein, Pythagoras [pythagoras-theorem.md](../pythagoras-theorem/pythagoras-theorem.md) mein, aur (a ± b)² ki expansion [expansions.md](../expansions/expansions.md) mein dekhi thi.)
> **Topics covered in this file:**
> 6. Complementary Angles aur Identities

---

# Topic 6: Complementary Angles aur Identities

Pichle topic mein humne seekha ki ek ratio pata ho to baaki ratios triangle banakar (ya Pythagoras se) nikal sakte hain, aur right triangle ke andar chhupi sides aur angles ko solve bhi kar sakte hain. Us poore kaam mein hum ek angle ko "dekhne wali nazar" maan kar chalte the.

Is topic mein hum ek kadam peeche hatkar ek naya sawaal poochenge: agar triangle ke **doosre acute angle** se dekhein to kya badalta hai? Jawab milega ek khoobsurat jodi, **complementary angles**, aur uske baad teen pakke **identities**, yaani aise rishte jo **har** acute angle ke liye sach hote hain. Inse hum bina triangle banaye ratios badal payenge aur lambe expressions ko chhota kar payenge.

Ek baat pehle hi saaf: is poore topic mein saare angles **acute** hain, yaani 0° aur 90° ke beech. Ratios ke signs (positive/negative) tab badalte hain jab angle 90° se bada ho jaata hai. Wo aage ki classes mein aayega.

---

## Anvi aur Zain ka plank

Anvi aur Zain jodwa bhai-behen hain. Unke ghar ke peeche ek lambi, tirchhi (slanting) plank rakhi hai: uska ek sira zameen par hai aur doosra sira seedhi deewar se tika hai. Zameen aur deewar ke beech **right angle** hai, to plank aur zameen aur deewar milkar ek right triangle △ABC banate hain, jisme B par right angle hai.

Anvi plank ke neeche wale sire par, corner A par khadi hai. Zain upar wale sire par, corner C par khada hai. Dono ek-ek **acute corner** par hain, aur plank dono ke beech ki **hypotenuse** hai.

Anvi ne apne angle ∠A ke hisaab se sides ke naam rakhe aur bola, "Mere liye **opposite side** wo hai jo mere saamne hai: BC."

Zain ne apne angle ∠C se dekha aur ruk gaya. "Arre, mere liye BC to mere **saath wali** side hai, wo meri **adjacent side** hai! Mera opposite to AB hai!"

Dono ne ek doosre ko dekha. "Matlab jo tumhara opposite hai wo mera adjacent hai, aur jo mera opposite hai wo tumhara adjacent!" Zain ne hans kar kaha, "To tumhara sin mera cos ban gaya!"

Kya sach mein? Chalo, side-by-side dekhte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Complementary angles** | Do angles jinka jod 90° ho | 25° aur 65°; 30° aur 60° |
| **Complement** | 90° mein se kisi angle ko ghatane par jo bachta hai | A ka complement = 90° − A |
| **Identity** | Aisa rishta jo us mein aaye har angle ke liye sach ho | sin²A + cos²A = 1 |
| **sin²A** | (sin A)² ka chhota roop: pehle sin A nikalo, phir uska square | sin²30° = (1/2)² = 1/4 |
| **Equation** | Aisa rishta jo sirf kuch khaas values par sach ho | sin A = 1/2 sirf A = 30° par |

Notation ki baat: is topic mein **sin²A ka matlab hamesha (sin A)² hai**. Yaani pehle sin A, phir uska square. (cos²A, tan²A waghairah bhi isi tarah.)

---

## Part A: Complementary angles aur ratios ki adla-badli

### Pehle ye dekho: do acute angles ka jod

Triangle ke teeno angles ka sum 180° hota hai ([triangles-part2.md](../triangles/triangles-part2.md)). Right triangle ABC mein B = 90°, to baaki do angles ka sum:

∠A + ∠C = 180° − 90° = **90°**

Matlab ∠C = 90° − ∠A. Right triangle ke do acute angles hamesha **complementary** hote hain. Anvi ka angle A ho to Zain ka angle automatically 90° − A hai.

### Anvi aur Zain ke ratios, side by side

Triangle mein sides ke naam rakhte hain: AB, BC, AC (plank, yaani hypotenuse).

**Anvi (angle A) ke liye:**
- opposite = BC
- adjacent = AB
- hypotenuse = AC

**Zain (angle C = 90° − A) ke liye:**
- opposite = AB
- adjacent = BC
- hypotenuse = AC (wahi plank!)

Ab ratios:

- Anvi ka sin A = opposite ÷ hypotenuse = BC ÷ AC
- Zain ka cos C = adjacent ÷ hypotenuse = BC ÷ AC

**Dono same!** To sin A = cos C = cos(90° − A).

Isi tarah Anvi ka cos A = AB ÷ AC, aur Zain ka sin C = AB ÷ AC. To cos A = sin(90° − A).

### Chhe rishte

Har ratio ke liye yehi soch lagao (opposite aur adjacent badal jaate hain, hypotenuse wahi rehta hai):

| Anvi ka ratio | Zain ka ratio (angle 90° − A) |
|---|---|
| sin A = BC ÷ AC | cos(90° − A) = BC ÷ AC |
| cos A = AB ÷ AC | sin(90° − A) = AB ÷ AC |
| tan A = BC ÷ AB | cot(90° − A) = BC ÷ AB |
| cot A = AB ÷ BC | tan(90° − A) = AB ÷ BC |
| sec A = AC ÷ AB | cosec(90° − A) = AC ÷ AB |
| cosec A = AC ÷ BC | sec(90° − A) = AC ÷ BC |

(Zain ke liye tan C = opposite ÷ adjacent = AB ÷ BC, to wo Anvi ke cot A ke barabar hai. Aur Zain ka cot C = adjacent ÷ opposite = BC ÷ AB, jo Anvi ka tan A hai. Aise hi sec aur cosec ki jodi.)

Isse milte hain chhe rishte:

- **sin(90° − A) = cos A**
- **cos(90° − A) = sin A**
- **tan(90° − A) = cot A**
- **cot(90° − A) = tan A**
- **sec(90° − A) = cosec A**
- **cosec(90° − A) = sec A**

Yaad rakhne ka tareeka: **co-** ka matlab hi "complement ka": sin ka complement-ratio **co**sin, tan ka **co**tangent, sec ka **co**secant. Complement angle par jaate hi ratio apne "co" wale bhai mein badal jaata hai, aur "co" wala bina "co" mein.

### Jaanch 1: standard angles se

Topic 4 ki values se (30° aur 60° complementary hain, 30° + 60° = 90°):

- sin 60° = √3/2 aur cos 30° = √3/2, to sin(90° − 30°) = cos 30° ✅
- cos 60° = 1/2 aur sin 30° = 1/2, to cos(90° − 30°) = sin 30° ✅
- tan 30° = 1/√3 aur cot 60° = 1/√3, to tan 30° = cot(90° − 30°) ✅
- sec 60° = 2 aur cosec 30° = 2, to sec(90° − 30°) = cosec 30° ✅

45° apna hi complement hai (45° + 45° = 90°), isliye sin 45° = cos 45° = 1/√2 aur tan 45° = cot 45° = 1. Ye pehle se hi barabar the, ab pata chala kyun.

### Jaanch 2: 3-4-5 triangle se

Anvi ke triangle mein BC = 3, AB = 4, AC = 5 maan lo (3² + 4² = 25 = 5²).

- Anvi: sin A = 3/5, cos A = 4/5, tan A = 3/4
- Zain (angle C): opposite = AB = 4, adjacent = BC = 3, to sin C = 4/5, cos C = 3/5, tan C = 4/3

Milao:
- sin A = 3/5 = cos C ✅
- cos A = 4/5 = sin C ✅
- tan A = 3/4 aur cot C = adjacent ÷ opposite = 3/4 ✅

Kuch bhi ratta nahi: bas sides ke naam badle hain.

---

## Part B: Complementary relation se expressions nikalna

Jab do angles ka jod 90° ho, to ek ko doosre ke complement mein badal kar ratio badal sakte hain. Table ki zaroorat nahi: bas ye dekho ki jod 90° banta hai ya nahi.

### Example 1: sin 65° ÷ cos 25°

65° + 25° = 90°, to sin 65° = sin(90° − 25°) = cos 25°.

sin 65° ÷ cos 25° = cos 25° ÷ cos 25° = **1**

Jaanch (calculator se): sin 65° ≈ 0.9063, cos 25° ≈ 0.9063, ratio = 1 ✅

### Example 2: tan 10° · tan 80°

10° + 80° = 90°, to tan 80° = tan(90° − 10°) = cot 10°.

tan 10° · tan 80° = tan 10° · cot 10° = tan 10° · (1 ÷ tan 10°) = **1**

Jaanch: tan 10° · tan 80° = 1.0000 ✅

### Example 3: cos 38° − sin 52°

38° + 52° = 90°, to sin 52° = sin(90° − 38°) = cos 38°.

cos 38° − sin 52° = cos 38° − cos 38° = **0**

Jaanch: dono ≈ 0.7880, difference = 0 ✅

### Example 4: sin 35° · sec 55°

35° + 55° = 90°, to sec 55° = sec(90° − 35°) = cosec 35°.

sin 35° · sec 55° = sin 35° · cosec 35° = sin 35° · (1 ÷ sin 35°) = **1**

Jaanch: sin 35° ≈ 0.5736, sec 55° = 1 ÷ cos 55° ≈ 1.7434, product ≈ 1.000 ✅

### Example 5: tan 15° · tan 25° · tan 65° · tan 75°

Jodi banao: 15° + 75° = 90° aur 25° + 65° = 90°.

- tan 75° = cot 15°, to tan 15° · tan 75° = tan 15° · cot 15° = 1
- tan 65° = cot 25°, to tan 25° · tan 65° = 1

Poora = 1 × 1 = **1**

Jaanch: product = 1.0000 ✅

### Example 6: sin 20° ÷ cos 70° + cos 20° ÷ sin 70°

20° + 70° = 90°, to cos 70° = sin 20° aur sin 70° = cos 20°.

Expression = sin 20° ÷ sin 20° + cos 20° ÷ cos 20° = 1 + 1 = **2**

Jaanch: 1.0000 + 1.0000 = 2.0000 ✅

---

## Part C: Sabse bada rishta, sin²A + cos²A = 1

### Pythagoras se proof

Right triangle ABC (B = 90°) mein Pythagoras ([pythagoras-theorem.md](../pythagoras-theorem/pythagoras-theorem.md)) kehta hai:

(opposite)² + (adjacent)² = (hypotenuse)²

Angle A ke liye: BC² + AB² = AC².

Dono taraf **AC²** se bhaag do:

BC²/AC² + AB²/AC² = AC²/AC² = 1

Lekin BC/AC = sin A aur AB/AC = cos A. To

(BC/AC)² + (AB/AC)² = 1, yaani **sin²A + cos²A = 1**

Ye har acute angle A ke liye sach hai, kyunki hamne kisi khaas triangle ka istemal nahi kiya.

### Jaanch 1: 3-4-5 triangle

sin A = 3/5, cos A = 4/5

sin²A + cos²A = 9/25 + 16/25 = 25/25 = **1** ✅

### Jaanch 2: 30°

sin 30° = 1/2, cos 30° = √3/2

sin²30° + cos²30° = 1/4 + 3/4 = **1** ✅

(cos²30° = (√3/2)² = 3/4.)

### Teen roop, ek hi baat

Ye rishta teen tareeke se likh sakte hain:

- sin²A + cos²A = 1
- sin²A = 1 − cos²A
- cos²A = 1 − sin²A

---

## Part D: Do aur identities

### Identity 2: 1 + tan²A = sec²A

sin²A + cos²A = 1 ko **cos²A** se bhaag do (cos A ≠ 0, kyunki A acute hai aur cos A positive hai):

sin²A/cos²A + cos²A/cos²A = 1/cos²A

Topic 3 se tan A = sin A ÷ cos A aur sec A = 1 ÷ cos A. To:

**tan²A + 1 = sec²A**

Jaanch (3-4-5): tan A = 3/4, sec A = AC ÷ AB = 5/4.
1 + tan²A = 1 + 9/16 = 25/16 aur sec²A = (5/4)² = 25/16 ✅

### Identity 3: 1 + cot²A = cosec²A

Ab sin²A + cos²A = 1 ko **sin²A** se bhaag do:

sin²A/sin²A + cos²A/sin²A = 1/sin²A

cot A = cos A ÷ sin A aur cosec A = 1 ÷ sin A. To:

**1 + cot²A = cosec²A**

Jaanch (3-4-5): cot A = 4/3, cosec A = 5/3.
1 + cot²A = 1 + 16/9 = 25/9 aur cosec²A = (5/3)² = 25/9 ✅

### Teeno identities ek nazar mein

| Identity | Kaise bani |
|---|---|
| sin²A + cos²A = 1 | Pythagoras ko hypotenuse² se bhaag kar |
| 1 + tan²A = sec²A | Upar wali ko cos²A se bhaag kar |
| 1 + cot²A = cosec²A | Upar wali ko sin²A se bhaag kar |

---

## Part E: Identities ka istemal

### E1: Ek ratio se doosra nikalna

**Example 7:** sin A = 3/5 hai (A acute). cos A nikalo.

sin²A + cos²A = 1 se:

cos²A = 1 − sin²A = 1 − 9/25 = 16/25

A acute hai, to cos A positive hai:

cos A = **4/5**

Jaanch: Topic 5 mein triangle se bhi yahi mila tha (opposite 3, hypotenuse 5, adjacent 4, cos A = 4/5) ✅

**Example 8:** tan A = 3/4 hai. sec A nikalo.

sec²A = 1 + tan²A = 1 + 9/16 = 25/16, to sec A = **5/4** (positive, kyunki A acute hai).

Jaanch: cos A = 4/5 to sec A = 5/4 ✅

### E2: Expressions ko chhota karna

**Example 9:** 1 − sin²A

sin²A + cos²A = 1 se 1 − sin²A = **cos²A**.

Jaanch (A = 30°): 1 − 1/4 = 3/4 aur cos²30° = 3/4 ✅

**Example 10:** sec²A − tan²A

1 + tan²A = sec²A se sec²A − tan²A = **1**.

Jaanch (A = 30°): sec 30° = 2/√3, to sec²30° = 4/3. tan²30° = 1/3. 4/3 − 1/3 = 1 ✅

**Example 11:** (sin A + cos A)² + (sin A − cos A)²

(a ± b)² ki expansion ([expansions.md](../expansions/expansions.md)) se:

(sin A + cos A)² = sin²A + 2 sin A cos A + cos²A
(sin A − cos A)² = sin²A − 2 sin A cos A + cos²A

Jodo: beech ke dono 2 sin A cos A wale terms cancel ho jaate hain.

Total = 2 sin²A + 2 cos²A = 2(sin²A + cos²A) = 2 × 1 = **2**

Jaanch (3-4-5, sin A = 3/5, cos A = 4/5): (7/5)² + (−1/5)² = 49/25 + 1/25 = 50/25 = 2 ✅

### E3: Identities ko prove karna

"Prove karo" ka matlab: do taraf diye hote hain, **left side (LHS)** aur **right side (RHS)**. Hum **sirf LHS par kaam** karte hain, rishton ka istemal karke use RHS bana dete hain. RHS ko hum chhute nahi. Har step ke saath likho ki kaun sa rule laga.

**Proof 1:** (1 − cos²A) · cosec A = sin A

LHS = (1 − cos²A) · cosec A
= sin²A · cosec A (kyunki 1 − cos²A = sin²A)
= sin²A · (1 ÷ sin A) (kyunki cosec A = 1 ÷ sin A)
= sin A = RHS ✅

Numerical jaanch (A = 30°): (1 − 3/4) × 2 = 1/4 × 2 = 1/2 aur sin 30° = 1/2 ✅

**Proof 2:** (1 + tan²A) · cos²A = 1

LHS = (1 + tan²A) · cos²A
= sec²A · cos²A (kyunki 1 + tan²A = sec²A)
= (1 ÷ cos²A) · cos²A (kyunki sec A = 1 ÷ cos A)
= 1 = RHS ✅

Numerical jaanch (A = 30°): tan²30° = 1/3, to (1 + 1/3) × 3/4 = 4/3 × 3/4 = 1 ✅

**Proof 3:** (sec A − tan A)(sec A + tan A) = 1

LHS = (sec A − tan A)(sec A + tan A)
= sec²A − tan²A (kyunki (a − b)(a + b) = a² − b²)
= 1 (kyunki 1 + tan²A = sec²A)
= RHS ✅

Numerical jaanch (A = 30°): sec 30° = 2/√3, tan 30° = 1/√3. Difference = 1/√3, sum = 3/√3. Product = 3/3 = 1 ✅

**Proof 4 (ek achhi):** tan A + cot A = sec A · cosec A

LHS = tan A + cot A
= sin A/cos A + cos A/sin A (kyunki tan A = sin A ÷ cos A, cot A = cos A ÷ sin A)
= (sin²A + cos²A) ÷ (sin A cos A) (common denominator sin A cos A lekar)
= 1 ÷ (sin A cos A) (kyunki sin²A + cos²A = 1)
= (1 ÷ cos A) · (1 ÷ sin A)
= sec A · cosec A = RHS ✅

Numerical jaanch (A = 30°): tan 30° + cot 30° = 1/√3 + √3 = 1/√3 + 3/√3 = 4/√3. RHS = (2/√3) × 2 = 4/√3 ✅

**Proof 5 (thoda lamba):** sin A ÷ (1 + cos A) + (1 + cos A) ÷ sin A = 2 cosec A

LHS = sin A/(1 + cos A) + (1 + cos A)/sin A
= [sin²A + (1 + cos A)²] ÷ [sin A (1 + cos A)] (common denominator)
= [sin²A + 1 + 2 cos A + cos²A] ÷ [sin A (1 + cos A)] ((a + b)² expand kiya)
= [(sin²A + cos²A) + 1 + 2 cos A] ÷ [sin A (1 + cos A)] (terms ko regroup kiya)
= [1 + 1 + 2 cos A] ÷ [sin A (1 + cos A)] (kyunki sin²A + cos²A = 1)
= 2(1 + cos A) ÷ [sin A (1 + cos A)] (2 common nikala)
= 2 ÷ sin A ((1 + cos A) upar-neeche cancel; ye ek poora bracket hai, aur A acute hai, to 1 + cos A ≠ 0)
= 2 cosec A = RHS ✅

Numerical jaanch (A = 30°): sin 30° ÷ (1 + cos 30°) = (1/2) ÷ (1 + 0.8660) = 0.2679. (1 + 0.8660) ÷ (1/2) = 3.7321. Sum = 4.0000. RHS = 2 × 2 = 4 ✅

**Proof karne ki tarkeeb:**
1. Jo taraf zyada ulajhi ho, use LHS maano.
2. Agar tan, cot, sec, cosec dikhein to unhe sin aur cos mein badal do.
3. Fractions ko jodna ho to common denominator lo.
4. Jahan sin²A + cos²A dikhe, use 1 se badal do. Jahan 1 − sin²A ya 1 − cos²A ho, use cos²A ya sin²A se badal do.

---

## Anvi aur Zain ki baat poori hui

Plank ke triangle par wapas chalo. Anvi ne kaha tha, "Mere liye sin A hai BC ÷ AC." Zain ne kaha, "Mere liye cos C hai BC ÷ AC." Dono ek hi cheez (BC ÷ AC) hain, bas nazar alag hai.

Kyunki Zain ka angle C = 90° − A hai, hum likh sakte hain:

**sin A = cos(90° − A)**

Agar Anvi ka angle 30° hai, to Zain ka 60° hai. Triangle ke 3-4-5 wale naap par:

- Anvi: sin A = 3/5, aur Zain: cos(90° − A) = 3/5. Same!
- Anvi: cos A = 4/5, aur Zain: sin(90° − A) = 4/5. Same!

Aur identity? Anvi aur Zain dono ke liye ek hi plank hai. Anvi ke liye sin²A + cos²A = 9/25 + 16/25 = 1, aur Zain ke liye bhi sin²C + cos²C = 16/25 + 9/25 = 1. Dono ke liye ek hi rishta chalta hai, kyunki Pythagoras ek hi triangle ka hai.

---

## Aam galtiyan (bachke rehna)

**Galti 1: sin²A ko sin A² likhna**
sin²A ka matlab (sin A)² hai. Agar A = 30° ho: sin²30° = (1/2)² = 1/4. Lekin "sin(A²)" ka matlab hota hai pehle A ko square karo (30² = 900), phir sin 900° nikalo, jo bilkul alag cheez hai. Square sin ke **upar** likho (sin²A), A ke upar nahi.

**Galti 2: sin(A + B) = sin A + sin B maan lena**
Ye **galat** hai. Quick check: A = 30°, B = 60°.
- sin(30° + 60°) = sin 90° = 1
- sin 30° + sin 60° = 1/2 + √3/2 ≈ 0.5 + 0.866 = 1.366

1 ≠ 1.366, to sin(A + B) ≠ sin A + sin B. Sin koi number nahi hai jo bracket mein baant diya jaaye; ye ek **ratio banane wali machine** hai.

**Galti 3: Jo angles 90° nahi banate, un par complementary rishta lagana**
sin 40° = cos 50° sahi hai (40° + 50° = 90°). Lekin sin 40° = cos 40° **galat** hai (40° + 40° = 80°). Pehle check karo ki jod ek-dum 90° aata hai ya nahi.

**Galti 4: "sin" ko number ki tarah cancel kar dena**
sin A ÷ sin B = A ÷ B **galat** hai. Jaise sin 30° ÷ sin 60° = (1/2) ÷ (0.866) ≈ 0.577, lekin 30° ÷ 60° = 0.5. "sin" ek akela shabd nahi, angle ke saath juda hua ek ratio hai. Cancel sirf tab hota hai jab upar-neeche **poora same ratio** (jaise sin A ÷ sin A) ho.

**Galti 5: Squaring mein galtiyan**
- (sin A + cos A)² ≠ sin²A + cos²A. Sahi: sin²A + 2 sin A cos A + cos²A, to (3/5 + 4/5)² = 49/25, lekin sin²A + cos²A = 1 = 25/25. Beech wala 2 sin A cos A term bhoolna galat hai.
- cos²A = 1 − sin²A mein root lete waqt A acute ho to **positive** root hi lo.
- sec²A − tan²A = 1 hai, sec A − tan A = 1 nahi. Squares hatane par rishta toot jaata hai (A = 30°: 2/√3 − 1/√3 = 1/√3 ≈ 0.577, jo 1 nahi hai).

---

## Quick Recap

- Right triangle mein do acute angles **complementary** hote hain: A + C = 90°.
- Ek angle ka opposite doosre ka adjacent hota hai, isliye **sin(90° − A) = cos A**, **cos(90° − A) = sin A**, **tan(90° − A) = cot A**, **cot(90° − A) = tan A**, **sec(90° − A) = cosec A**, **cosec(90° − A) = sec A**.
- Ye sirf tab lagte hain jab do angles ka jod **90°** ho.
- sin²A ka matlab (sin A)².
- **sin²A + cos²A = 1** (Pythagoras ko hypotenuse² se bhaag kar).
- **1 + tan²A = sec²A** (cos²A se bhaag kar) aur **1 + cot²A = cosec²A** (sin²A se bhaag kar).
- Acute A ke liye ek ratio pata ho to identity se doosra nikal sakte hain (positive root).
- Identity prove karne ke liye sirf LHS par kaam karo, har step ka rule likho.
- sin(A + B) ≠ sin A + sin B.

---

## Practice Questions

1. Without a calculator, find the value of (a) cos 49° ÷ sin 41° and (b) sin 48° − cos 42°.

2. Evaluate tan 12° · tan 36° · tan 54° · tan 78°.

3. Evaluate sin 20° ÷ cos 70° + cos 40° ÷ sin 50° − 2.

4. If cos A = 12/37 (A is acute), find sin A and tan A using the identity sin²A + cos²A = 1. Check your answer using a right triangle.

5. If tan A = 1 (A acute), find sec A using the identity 1 + tan²A = sec²A. Which angle is A?

6. Simplify: (a) (1 − cos A)(1 + cos A) ÷ sin A  (b) sin²A + cos²A + tan²A.

7. Prove that (1 − sin²A) · sec A = cos A.

8. Prove that (1 + cot²A) · sin²A = 1.

9. Prove that (cosec A − cot A)(cosec A + cot A) = 1.

10. Prove that sin A/cos A + cos A/sin A = tan A + cot A. Then also prove that (sin A + cos A)² = 1 + 2 sin A cos A.

11. Say whether each statement is true or false, giving a reason.
    (a) sin 25° = cos 65°.
    (b) sin 25° = cos 25°.
    (c) sin(30° + 30°) = sin 30° + sin 30°.
    (d) For an acute angle A, sin²A + cos²A = 1.

12. In a right triangle PQR (right angle at Q), PQ = 5 and QR = 12. Anvi stands at P and Zain stands at R. Write sin P and cos R. What do you notice?

### Answers

1. (a) 49° + 41° = 90°, to sin 41° = cos 49°, aur cos 49° ÷ sin 41° = **1**.
   (b) 48° + 42° = 90°, to cos 42° = sin 48°, aur sin 48° − cos 42° = **0**.
   Jaanch: dono (calculator se) 1.0000 aur 0.0000 ✅

2. 12° + 78° = 90° aur 36° + 54° = 90°. tan 78° = cot 12°, to tan 12° · tan 78° = 1. tan 54° = cot 36°, to tan 36° · tan 54° = 1. Product = 1 × 1 = **1**.
   Jaanch: 1.0000 ✅

3. 20° + 70° = 90°, to cos 70° = sin 20° aur sin 20° ÷ cos 70° = 1. 40° + 50° = 90°, to sin 50° = cos 40° aur cos 40° ÷ sin 50° = 1. Total = 1 + 1 − 2 = **0**.
   Jaanch: 1 + 1 − 2 = 0.0000 ✅

4. sin²A = 1 − cos²A = 1 − 144/1369 = 1225/1369, to sin A = **35/37**. tan A = sin A ÷ cos A = (35/37) ÷ (12/37) = **35/12**.
   Triangle se: adjacent 12, hypotenuse 37, opposite = √(1369 − 144) = √1225 = 35, to sin A = 35/37 aur tan A = 35/12 ✅

5. sec²A = 1 + tan²A = 1 + 1 = 2, to sec A = **√2** (positive). tan A = 1 sirf **45°** par hota hai, aur sec 45° = √2 ✅

6. (a) (1 − cos A)(1 + cos A) = 1 − cos²A = sin²A (kyunki (a − b)(a + b) = a² − b², phir sin²A + cos²A = 1). To sin²A ÷ sin A = **sin A**.
   Jaanch (A = 30°): (1 − 0.8660)(1 + 0.8660) ÷ 0.5 = 0.25 ÷ 0.5 = 0.5 = sin 30° ✅
   (b) sin²A + cos²A = 1, to 1 + tan²A = **sec²A**.
   Jaanch (A = 30°): 1 + 1/3 = 4/3 = sec²30° ✅

7. LHS = (1 − sin²A) · sec A = cos²A · sec A (kyunki 1 − sin²A = cos²A) = cos²A · (1 ÷ cos A) (kyunki sec A = 1 ÷ cos A) = cos A = RHS ✅
   Jaanch (A = 30°): (1 − 1/4) × (2/√3) = (3/4)(2/√3) = √3/2 = cos 30° ✅

8. LHS = (1 + cot²A) · sin²A = cosec²A · sin²A (kyunki 1 + cot²A = cosec²A) = (1 ÷ sin²A) · sin²A = 1 = RHS ✅
   Jaanch (A = 30°): cot²30° = 3, to (1 + 3) × 1/4 = 1 ✅

9. LHS = (cosec A − cot A)(cosec A + cot A) = cosec²A − cot²A (kyunki (a − b)(a + b) = a² − b²) = 1 (kyunki 1 + cot²A = cosec²A, yaani cosec²A − cot²A = 1) = RHS ✅
   Jaanch (A = 30°): cosec 30° = 2, cot 30° = √3. (2 − √3)(2 + √3) = 4 − 3 = 1 ✅

10. Pehla: sin A/cos A = tan A aur cos A/sin A = cot A (Topic 3 ki definition). To LHS = tan A + cot A = RHS ✅
    Doosra: LHS = (sin A + cos A)² = sin²A + 2 sin A cos A + cos²A (expansion) = (sin²A + cos²A) + 2 sin A cos A = 1 + 2 sin A cos A = RHS ✅
    Jaanch (3-4-5): (3/5 + 4/5)² = 49/25, aur 1 + 2 × (3/5)(4/5) = 1 + 24/25 = 49/25 ✅

11. (a) **True** ✅. 25° + 65° = 90°, to sin 25° = cos(90° − 25°) = cos 65°.
    (b) **False** ❌. 25° + 25° = 50°, 90° nahi. sin 25° ≈ 0.4226 aur cos 25° ≈ 0.9063.
    (c) **False** ❌. sin 60° = √3/2 ≈ 0.866 aur sin 30° + sin 30° = 1/2 + 1/2 = 1.
    (d) **True** ✅. Pythagoras se hamesha sach hai (har acute angle ke liye).

12. Hypotenuse PR = √(5² + 12²) = √169 = 13. P ke liye opposite = QR = 12, to sin P = **12/13**. R ke liye adjacent = QR = 12, hypotenuse 13, to cos R = **12/13**. Dono barabar hain, kyunki P + R = 90° (jaise Anvi aur Zain ke liye sin A = cos(90° − A)) ✅

---

Aapne dekha ki ek triangle ke do corners se dekhna ek hi baat ko do naam deta hai, aur ek chhota sa Pythagoras poore trigonometry ka sabse bada rishta ban jaata hai. Aap ye kar sakte ho!

**Agle topic mein:** ab trigonometry se unchai naapna seekhte hain. Ped, imaarat ya minar tak chadhe bina uski height kaise pata karein, wo dekhenge.
