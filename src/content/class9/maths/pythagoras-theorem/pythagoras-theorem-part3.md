# Chapter: Pythagoras Theorem (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [pythagoras-theorem-part2.md](pythagoras-theorem-part2.md) se aage chalti hai.** (Chapter ki shuruaat [pythagoras-theorem.md](pythagoras-theorem.md) se hoti hai.)
> **Topics covered in this file:**
> 3. Converse aur Triangle ka Type

---

# Topic 3: Converse aur Triangle ka Type

Ab tak hamara rasta ek hi disha mein tha: triangle right-angled ho, to uski sides ka rishta a² + b² = c² hota hai. Topic 1 mein Aditi ne (a + b)² wale bade square se iska proof dikhaya (aur similar triangles wale proof ki jhalak), aur Topic 2 mein Parul ne Balwant ji ki 10 m seedhi ka paer deewar se 6 m door nikala, saath mein missing side, triplets (3-4-5, 5-12-13, 8-15-17...) aur rectangle ke diagonal jaise kaam seekhe. Har jagah pehle se pata tha ki **90° ka angle maujood hai**.

Ab ek ulta sawaal: agar kisi triangle ke bas **teeno sides di hon** aur angle ka kuch pata na ho, to kya sides ke square dekhkar hi bata sakte hain ki 90° wala angle hai ya nahi? Jawab haan hai, aur ye is topic ka main idea hai. Chapter ka aakhri topic hai, to end mein poore chapter ka wrap-up aur triplets ki cheat-sheet bhi hogi.

---

## Jagdish mistri aur Babloo ka kona

Mistri Jagdish aur unka helper Babloo ek naya kamra bana rahe hain. Neev ki khudai ho chuki hai, ab deewarein uthani hain. Par Jagdish deewar ki pehli eent rakhne se pehle ek cheez zaroor check karte hain: **kamre ka kona poore 90° ka hai ya nahi.**

Babloo ne poocha, "Ustad, itna time kyun lagate ho? Dekhne mein to kona seedha hi lag raha hai."

Jagdish ne muskurakar kaha, "Aankh se dekhne wale kone aage chalkar deewar tedhi kar dete hain, Babloo. Ye le naap ka fita."

Phir unhone ye kiya:
- Kone se ek line par **3 feet** naapkar nishaan lagaya.
- Doosri line par kone se **4 feet** naapkar nishaan lagaya.
- Ab dono nishaanon ke beech ki **seedhi doori** (diagonal) naapi. Agar wo poore **5 feet** nikle, to kona pakka 90° ka hai.

Babloo ne naapa: 5 feet. Jagdish ne kaha, "Bas! Ab deewar seedhi uthegi."

Babloo ka sawaal: "Ustad, ye 3-4-5 se kona seedha kaise pata chal gaya? Agar diagonal 5 se zyada ya kam aata to?"

Isi ka jawab is topic mein hai.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Converse** | Kisi statement ko ulta karke bola gaya statement (jo "agar" wala hissa tha wo "to" wala ban jaata hai aur ulta) | Original: right triangle hai to a² + b² = c². Converse: a² + b² = c² hai to right triangle |
| **Longest side** | Triangle ki sabse badi side | 6, 8, 10 mein 10 |
| **Acute triangle** | Teeno angle 90° se chhote | Sides 5, 6, 7 |
| **Right triangle** | (Topic 1 se yaad) Ek angle bilkul 90° | Sides 3, 4, 5 |
| **Obtuse triangle** | Ek angle 90° se bada | Sides 4, 5, 7 |
| **Given** | Jo sawaal mein diya hua hai | AD ⊥ BC |
| **To prove** | Jo hamein sabit karna hai | AB² − AC² = BD² − CD² |

---

## Part A: Converse kya kehta hai

### Statement

Topic 1 aur 2 ka statement tha: **right triangle ho to** (hypotenuse)² = baaki do sides ke squares ka jod.

Iska converse (ulta):

> Kisi triangle ki sabse badi side c ho aur baaki do sides a, b ho. Agar **c² = a² + b²** hai, to c ke saamne wala angle **90°** ka hai.

Dhyan do: converse apne aap sahi nahi hota, use alag se sabit karna padta hai. (Jaise "agar baarish hui to sadak geeli hai" sahi hai, par "sadak geeli hai to baarish hui" zaroori nahi, kisi ne paani daala ho sakta hai.) Yahan khushkhabri ye hai ki Pythagoras ka converse sahi nikalta hai.

### Kyun sahi hai? (halka proof idea)

Maan lo ΔABC mein BC = a, CA = b, AB = c, aur c² = a² + b². Hamein dikhana hai ki ∠C = 90°.

1. Ek **naya** triangle PQR banao jisme PQ = a, QR = b aur **∠Q = 90°** (ye hum khud bana rahe hain, to ye pakka 90° hai).
2. Isme Pythagoras laga sakte hain: PR² = a² + b².
3. Par given hai c² = a² + b². Isliye PR² = c², to **PR = c**.
4. Ab ΔABC aur ΔPQR ki teeno sides barabar hain: BC = PQ = a, CA = QR = b, AB = PR = c.
5. **SSS rule** (dekho [congruence-of-triangles-part2.md](../congruence-of-triangles/congruence-of-triangles-part2.md)) se dono triangle congruent hain.
6. Congruent triangles ke corresponding angle barabar hote hain, to ∠C = ∠Q = **90°**.

Idea: "Jis triangle ki sides ka naap 90° wale triangle jaisa hi hai, wo khud bhi 90° wala hi hoga, kyunki sides se triangle ki shakal poori tarah tay ho jaati hai."

### Jagdish ke kone par wapas

Jagdish ne 3 ft aur 4 ft naapa aur diagonal 5 ft mili. Check: 3² + 4² = 9 + 16 = 25 = 5². Converse kehta hai ki 5 ft wali side ke saamne wala angle, yaani **kone ka angle, 90°** hai. Isiliye ye tareeka kaam karta hai.

Agar diagonal 5 ft se **chhoti** aati, to kona 90° se **chhota** (tang) hota, aur agar **badi** aati, to kona 90° se **bada** (khula hua) hota. Ye Part C mein pakka karenge.

---

## Part B: Kya ye triangle right-angled hai?

**Steps:**
1. Teeno sides mein se **sabse badi** pehchano. Use c kaho.
2. c² nikalo, aur baaki do ke squares ka jod nikalo.
3. Dono barabar hon to right-angled, warna nahi.

### Example 1: 9, 40, 41

Sabse badi side 41.
- c² = 41² = 1681
- a² + b² = 9² + 40² = 81 + 1600 = 1681

Barabar hain, to **right-angled hai**, aur 90° 41 ke saamne wale angle par hai.

Jaanch: 81 + 1600 = 1681 aur 41 × 41 = 1681 ✅

### Example 2: 16, 63, 65

- c² = 65² = 4225
- a² + b² = 256 + 3969 = 4225

Barabar hain, to **right-angled hai**.

Jaanch: 63 × 63 = 3969, 3969 + 256 = 4225 = 65 × 65 ✅

### Example 3: 15, 36, 39

- c² = 39² = 1521
- a² + b² = 225 + 1296 = 1521

Barabar hain, to **right-angled hai**.

Jaanch: 39 × 39 = 1521 ✅. Ye (5, 12, 13) ka teen guna hai: 5 × 3 = 15, 12 × 3 = 36, 13 × 3 = 39.

### Example 4: 6, 8, 11 (ye right-angled nahi hai)

Sabse badi side 11.
- c² = 121
- a² + b² = 36 + 64 = 100

121 ≠ 100, to **right-angled nahi hai**. (Dhyan do: 6, 8, 10 right-angled hota. 11 thoda zyada hai, isliye kona 90° se bada ho gaya. Ye Part C mein dekhenge.)

Jaanch: 6² = 36, 8² = 64, 11² = 121. 36 + 64 = 100, jo 121 nahi ✅ (yaani sach mein barabar nahi).

---

## Part C: Acute ya obtuse? Squares compare karke (ek useful extension)

*Ye Pythagoras ke converse ka ek aage ka fayda hai. Isse sirf "right hai ya nahi" nahi, balki "kitna khula hua hai" bhi pata chalta hai.*

Maan lo c sabse badi side hai aur a, b baaki do. Teen hi possibilities hain:

| Compare karo | Triangle ka type |
|---|---|
| c² < a² + b² | **Acute** (teeno angle 90° se chhote) |
| c² = a² + b² | **Right** (c ke saamne 90°) |
| c² > a² + b² | **Obtuse** (c ke saamne wala angle 90° se bada) |

**Soch kar dekho:** a aur b ko 90° par jodkar rakho to saamne ki side ka square a² + b² banta hai. Agar kona 90° se **zyada khula** hai, to saamne ki side **lambi** ho jaati hai, c² bada. Agar kona **tang** hai to saamne ki side **chhoti** rehti hai, c² chhota. Jagdish ke kone mein yahi hota: diagonal 5 ft se kam to tang, zyada to khula.

### Example 5: 5, 6, 7

c = 7, c² = 49. a² + b² = 25 + 36 = 61. 49 < 61, to **acute**.

### Example 6: 4, 5, 7

c = 7, c² = 49. a² + b² = 16 + 25 = 41. 49 > 41, to **obtuse**.

### Example 7: 6, 8, 11 (Example 4 wala)

c² = 121 > 100 = 36 + 64, to **obtuse**.

### Example 8: 8, 15, 16

c = 16, c² = 256. a² + b² = 64 + 225 = 289. 256 < 289, to **acute**.

Jaanch: 15 × 15 = 225, 8 × 8 = 64, 225 + 64 = 289; 16 × 16 = 256 ✅

**Ek zaroori baat:** teen lambaiyan triangle tabhi banati hain jab do chhoti sides ka jod sabse badi side se zyada ho. Ye sab examples (5,6,7), (4,5,7: 4+5 = 9 > 7), (6,8,11: 14 > 11), (8,15,16) us shart par khare utarte hain.

---

## Part D: Proof-style problems

Euclid wale chapter ke [euclids-geometry-part4.md](../euclids-geometry/euclids-geometry-part4.md) mein dekha tha ki proof kaise likhte hain: pehle **Given**, phir **To prove**, phir **Statement** aur uska **Reason**. Yahan bhi wahi format use karenge, aur har reason mein hamara main hathiyar hoga **Pythagoras theorem**.

### Problem 1: Perpendicular se bana relation

**Given:** ΔABC mein AD ⊥ BC (D, BC par hai).

**To prove:** AB² − AC² = BD² − CD²

| Statement | Reason |
|---|---|
| 1. ΔADB right-angled hai (∠ADB = 90°), to AB² = AD² + BD² | Pythagoras theorem, kyunki AD ⊥ BC |
| 2. ΔADC right-angled hai (∠ADC = 90°), to AC² = AD² + CD² | Pythagoras theorem, kyunki AD ⊥ BC |
| 3. AB² − AC² = (AD² + BD²) − (AD² + CD²) | Statement 1 mein se 2 ghatane par |
| 4. AB² − AC² = BD² − CD² | AD² dono taraf cut ho gaya |

Hence proved.

Jaanch (ek numeric example): maan lo AD = 12, BD = 5, CD = 9. Tab AB² = 144 + 25 = 169 aur AC² = 144 + 81 = 225. AB² − AC² = 169 − 225 = −56. BD² − CD² = 25 − 81 = −56 ✅

### Problem 2: Rhombus ki sides aur diagonals

**Given:** ABCD ek rhombus hai, jiske diagonals AC aur BD point O par milte hain.

**To prove:** AB² + BC² + CD² + DA² = AC² + BD²

(Yaani chaaron sides ke squares ka jod = dono diagonals ke squares ka jod.)

Hum jaante hain ki rhombus ke diagonals ek doosre ko **bisect** karte hain aur **90° par** katte hain (dekho [quadrilaterals.md](../quadrilaterals/quadrilaterals.md)). Isliye ∠AOB = 90°, AO = AC/2 aur BO = BD/2.

| Statement | Reason |
|---|---|
| 1. ∠AOB = 90°, AO = AC/2, BO = BD/2 | Rhombus ke diagonals ek doosre ko 90° par bisect karte hain |
| 2. AB² = AO² + BO² | Pythagoras theorem ΔAOB mein (right angle O par) |
| 3. AB² = (AC/2)² + (BD/2)² = AC²/4 + BD²/4 | Statement 1 se values rakhne par |
| 4. AB = BC = CD = DA | Rhombus ki chaaron sides barabar hoti hain |
| 5. AB² + BC² + CD² + DA² = 4 × AB² | Statement 4 se |
| 6. 4 × AB² = 4 × (AC²/4 + BD²/4) = AC² + BD² | Statement 3 se |

Hence proved.

Jaanch (numeric): diagonals 6 aur 8 lo. Aadhe hisse 3 aur 4, to side = √(9 + 16) = 5. Chaaron sides ke squares ka jod = 4 × 25 = 100. Diagonals ke squares ka jod = 36 + 64 = 100 ✅

### Problem 3 (optional): Rectangle ke andar ka point

**Given:** ABCD ek rectangle hai aur O uske **andar** koi point hai.

**To prove:** OA² + OC² = OB² + OD²

**Construction:** O se AD ke parallel ek line kheencho, jo AB ko P par aur DC ko Q par milti hai. Kyunki AD ⊥ AB, ye line AB aur DC dono par perpendicular hai: ∠OPA = ∠OPB = ∠OQC = ∠OQD = 90°. Saath hi APQD aur PBCQ rectangles hain, to **AP = DQ** aur **BP = CQ**.

| Statement | Reason |
|---|---|
| 1. OA² = AP² + OP² | Pythagoras, ΔOPA right-angled P par |
| 2. OC² = CQ² + OQ² | Pythagoras, ΔOQC right-angled Q par |
| 3. OB² = BP² + OP² | Pythagoras, ΔOPB right-angled P par |
| 4. OD² = DQ² + OQ² | Pythagoras, ΔOQD right-angled Q par |
| 5. OA² + OC² = AP² + OP² + CQ² + OQ² | Statement 1 aur 2 ko jodne par |
| 6. OB² + OD² = BP² + OP² + DQ² + OQ² | Statement 3 aur 4 ko jodne par |
| 7. Ab AP = DQ aur CQ = BP, to statement 5 ka right side = DQ² + OP² + BP² + OQ² = statement 6 ka right side | Rectangle ki opposite sides barabar |
| 8. OA² + OC² = OB² + OD² | Statement 5, 6, 7 se |

Hence proved.

Jaanch (numeric): rectangle 8 × 6 lo, A = (0, 0), B = (8, 0), C = (8, 6), D = (0, 6) aur O = (3, 2). OA² = 9 + 4 = 13, OC² = 25 + 16 = 41, to OA² + OC² = 54. OB² = 25 + 4 = 29, OD² = 9 + 16 = 25, to OB² + OD² = 54 ✅

---

## Part E: x nikalo (converse ka istemaal)

### Example 9: x, x + 7, x + 8 right triangle banate hain. x kya hai?

Sabse badi side x + 8 hai, to right angle uske saamne hoga:

x² + (x + 7)² = (x + 8)²

Left: x² + x² + 14x + 49 = 2x² + 14x + 49
Right: x² + 16x + 64

Dono barabar karo: 2x² + 14x + 49 = x² + 16x + 64

x² − 2x − 15 = 0

Factorise karo: (x − 5)(x + 3) = 0, to x = 5 ya x = −3. Lambai negative nahi ho sakti, to **x = 5**.

Sides: 5, 12, 13.

Jaanch: 5² + 12² = 25 + 144 = 169 = 13² ✅ (aur 12 = 5 + 7, 13 = 5 + 8 ✅)

### Example 10: x, x + 2, x + 4

Sabse badi x + 4: x² + (x + 2)² = (x + 4)²

2x² + 4x + 4 = x² + 8x + 16, to x² − 4x − 12 = 0, yaani (x − 6)(x + 2) = 0.

Lambai positive hai, to **x = 6**. Sides: 6, 8, 10.

Jaanch: 36 + 64 = 100 = 10² ✅

### Example 11: Sides 11, x aur x + 1

Yahan x + 1 sabse badi side hai, to right angle uske saamne hoga: 11² + x² = (x + 1)²

121 + x² = x² + 2x + 1, to 2x = 120 aur **x = 60**. Sides: 11, 60, 61.

Jaanch: 121 + 3600 = 3721 = 61² ✅

### Example 12: k ki value jisse 3k, 4k, 5k right triangle bane?

(3k)² + (4k)² = 9k² + 16k² = 25k² = (5k)². **Har k > 0 ke liye** sahi hai. Yaani 3-4-5 ka koi bhi multiple (jaise Jagdish agar 6 ft aur 8 ft naapte aur diagonal 10 ft aata) right triangle hi banata hai.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Sabse badi side ko c nahi chunna**
Sides 8, 15, 17 mein koi 15 ko c maankar 15² = 225 ko 8² + 17² = 64 + 289 = 353 se compare kare, to "right nahi hai" nikal aayega, jo galat hai. Pehle sabse badi (17) chuno: 17² = 289 aur 8² + 15² = 64 + 225 = 289, to right-angled hai.

**Galti 2: Converse ko non-longest side par laga dena**
Sides 6, 8, 11 mein 11² = 121 ko 6² + 8² = 100 se compare karna sahi hai. Par 8 ko c banakar 8² = 64 ko 6² + 11² = 157 se compare karna bekaar hai. Converse ka c hamesha **sabse badi** side hai.

**Galti 3: Squares mein arithmetic slip**
Jaise 24² = 576 hai, par kayi log 24² = 48 ya 484 likh dete hain. Dhyan se likho: 24 × 24 = 576. 41² = 1681 (41 × 41), 1641 nahi. Jab doubt ho, 20 × 24 + 4 × 24 jaise tod kar nikalo.

**Galti 4: Triangle ban bhi sakta hai ya nahi, ye bhoolna**
Teen numbers tabhi triangle banate hain jab do chhoti sides ka jod sabse badi se zyada ho. Jaise 3, 4, 8 triangle hi nahi hai (3 + 4 = 7 < 8), chahe 64 > 9 + 16 dekhkar "obtuse" kehne ka mann kare.

**Galti 5: x wale sawaal mein negative root rakh lena**
Example 9 mein x = −3 bhi nikla tha, par lambai negative nahi ho sakti. Ise chhod do.

---

## Quick Recap

- **Converse:** sabse badi side c ke liye c² = a² + b² ho, to c ke saamne wala angle **90°** hai.
- **Kyun sahi:** 90° wala triangle banao jiski legs a, b hon; uska hypotenuse c aayega. SSS se dono triangle congruent, to angle bhi 90° ka.
- **Check karne ke steps:** sabse badi side chuno, c² aur a² + b² compare karo.
- **Extension:** c² < a² + b² to acute; c² = a² + b² to right; c² > a² + b² to obtuse.
- **Proof format:** Given, To prove, Statement-Reason. Reason mein aksar Pythagoras theorem.
- **Rhombus:** chaaron sides ke squares ka jod = diagonals ke squares ka jod.
- **x wale sawaal:** sabse badi side par converse lagao, equation banao, positive root lo, aur wapas check karo.
- **Mistri ka tareeka:** 3-4-5 (ya uska multiple) se kona 90° ka check hota hai.

---

## Practice Questions

1. Which of the following sets of sides form a right-angled triangle? (a) 28, 45, 53 (b) 11, 60, 61 (c) 12, 16, 21 (d) 36, 77, 85

2. The sides of a triangle are 13, 14 and 15. Decide whether it is acute, right-angled or obtuse.

3. A triangle has sides 10, 13 and 17. Is its largest angle acute, right or obtuse? Justify.

4. Jagdish checks another corner by marking 6 ft on one line and 8 ft on the other. What should the diagonal measure for the corner to be exactly 90°? If the diagonal comes to 9.8 ft, is the corner smaller or larger than 90°? Explain using squares.

5. The sides 13, x and x + 1 form a right triangle in which x + 1 is the longest side. Find x.

6. Find x if the sides x, x + 14 and x + 16 form a right triangle.

7. In ΔPQR, PS ⊥ QR with S on QR. Prove that PQ² − PR² = QS² − RS².

8. Prove that in a rhombus whose diagonals are 18 cm and 24 cm, each side is 15 cm, and then check that the sum of the squares of the four sides equals the sum of the squares of the diagonals.

9. O is a point inside a rectangle ABCD with OA = 3, OB = 4 and OC = 5. Find OD.

10. True or false, giving a reason. (a) A triangle with sides 2, 3, 4 is right-angled. (b) If a² + b² = c², the angle opposite c is 90°. (c) The sides 20, 48, 52 and 24, 45, 51 both form right-angled triangles. (d) Sides 3, 4, 8 can form a triangle that is obtuse.

### Answers

1. Har set mein sabse badi side ko c lo.
   (a) 28, 45, 53: 28² + 45² = 784 + 2025 = 2809 = 53² ✅ **Right-angled.**
   (b) 11, 60, 61: 121 + 3600 = 3721 = 61² ✅ **Right-angled.**
   (c) 12, 16, 21: 144 + 256 = 400, par 21² = 441, 400 ≠ 441 ❌ **Right-angled nahi.**
   (d) 36, 77, 85: 1296 + 5929 = 7225 = 85² ✅ **Right-angled.**

2. c = 15, c² = 225. a² + b² = 169 + 196 = 365. 225 < 365, to **acute**.
   Jaanch: 13² = 169, 14² = 196, 15² = 225 ✅

3. c = 17, c² = 289. a² + b² = 100 + 169 = 269. 289 > 269, to sabse bada angle **obtuse** hai (17 ke saamne wala). Isliye triangle obtuse hai.
   Jaanch: 10² = 100, 13² = 169, 17² = 289; triangle banta bhi hai kyunki 10 + 13 = 23 > 17 ✅

4. 6² + 8² = 36 + 64 = 100, to diagonal √100 = **10 ft** honi chahiye.
   Agar diagonal 9.8 ft hai: 9.8² = 96.04, jo 100 se chhota hai, yaani c² < a² + b². To wo angle **90° se chhota (acute)** hai, yaani kona tang hai.
   Jaanch: 9.8 × 9.8 = 96.04 ✅

5. 13, x, x + 1 (x + 1 sabse badi): 169 + x² = (x + 1)² = x² + 2x + 1, to 2x = 168 aur **x = 84**. Sides 13, 84, 85.
   Jaanch: 169 + 7056 = 7225 = 85² ✅

6. x² + (x + 14)² = (x + 16)²
   2x² + 28x + 196 = x² + 32x + 256, to x² − 4x − 60 = 0, yaani (x − 10)(x + 6) = 0.
   Positive root: **x = 10**. Sides 10, 24, 26.
   Jaanch: 100 + 576 = 676 = 26² ✅

7. **Given:** ΔPQR mein PS ⊥ QR.
   **To prove:** PQ² − PR² = QS² − RS².
   - ΔPSQ mein ∠PSQ = 90°, to PQ² = PS² + QS² (Pythagoras).
   - ΔPSR mein ∠PSR = 90°, to PR² = PS² + RS² (Pythagoras).
   - Ghatane par PQ² − PR² = QS² − RS² (PS² cut ho gaya). Hence proved.

8. Diagonal ke aadhe hisse 9 aur 12 hain, aur wo 90° par milte hain. Side² = 9² + 12² = 81 + 144 = 225, to side = **15 cm**.
   Chaaron sides ke squares ka jod = 4 × 225 = 900. Diagonals ke squares ka jod = 18² + 24² = 324 + 576 = 900 ✅

9. Rectangle ke andar ke point ke liye OA² + OC² = OB² + OD².
   9 + 25 = 16 + OD², to OD² = 34 − 16 = 18, aur OD = √18 = 3√2 ≈ **4.24**.
   Jaanch: 9 + 25 = 34 aur 16 + 18 = 34 ✅
   (Ye result Part D ke Problem 3 se aaya hai. 3√2 ek irrational number hai, jisse 4.24 sirf approximate value hai.)

10. (a) **False** ❌. 4 sabse badi hai: 16 vs 4 + 9 = 13, to 16 > 13, yaani obtuse, right nahi.
    (b) **True** ✅. Ye converse hai, jaisa Part A mein SSS se dekha. (Yahan c ko sabse badi side maana gaya hai.)
    (c) **True** ✅. 400 + 2304 = 2704 = 52² aur 576 + 2025 = 2601 = 51² (ye 5-12-13 aur 8-15-17 ke multiples hain).
    (d) **False** ❌. 3 + 4 = 7 < 8, to aisa triangle banta hi nahi.

---

Dekha? Sirf teen lambaiyan aur thodi si squaring se aap bata sakte ho ki kona seedha hai, tang hai ya khula hua. Jagdish mistri ki tarah ab aap bhi apne kone khud check kar sakte ho.

---

# Chapter Wrap-up: Pythagoras Theorem

| Topic | Kya seekha | Sabse kaam ki baat |
|---|---|---|
| 1. Pythagoras theorem ka statement aur proof | Right triangle mein sides ka rishta a² + b² = c², squares wali picture, Baudhayana aur Pythagoras ki history, (a + b)² wala proof aur similar triangles wale proof ki jhalak | Right angle ke saamne wali side (hypotenuse) ka square, baaki do sides ke squares ke jod ke barabar hota hai |
| 2. Missing side, triplets aur real life | Do sides se teesri nikalna, Pythagorean triplets pehchaanna, seedhi, rectangle ke diagonal jaise real-life kaam | Pehle pehchaano ki kaun si side hypotenuse hai; triplet yaad ho to calculation bachti hai |
| 3. Converse aur triangle ka type | Sides ke squares dekhkar right angle pehchaanna, acute ya obtuse batana, proof-style problems, x nikalna | Sabse badi side c lo; c² ko a² + b² se compare karo |

### Triplets cheat-sheet

| Triplet | Check (a² + b² = c²) | Kuch multiples |
|---|---|---|
| 3, 4, 5 | 9 + 16 = 25 | 6-8-10, 9-12-15, 12-16-20 |
| 5, 12, 13 | 25 + 144 = 169 | 10-24-26 |
| 8, 15, 17 | 64 + 225 = 289 | 16-30-34 |
| 7, 24, 25 | 49 + 576 = 625 | 14-48-50 |
| 20, 21, 29 | 400 + 441 = 841 | 40-42-58 |
| 9, 40, 41 | 81 + 1600 = 1681 | 18-80-82 |
| 11, 60, 61 | 121 + 3600 = 3721 | 22-120-122 |

### Triangle ka type (c sabse badi side)

| Condition | Matlab |
|---|---|
| c² < a² + b² | Acute |
| c² = a² + b² | Right |
| c² > a² + b² | Obtuse |

---

Seedhi, kamre ke kone, rectangle ke diagonal ya mistri ka fita: Pythagoras ka ye ek rishta ab aapke haath mein hai, aur aap ise seedha aur ulta, dono tarah se use kar sakte ho.
