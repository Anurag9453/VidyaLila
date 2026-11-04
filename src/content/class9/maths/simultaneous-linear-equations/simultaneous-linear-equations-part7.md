# Chapter: Simultaneous Linear Equations (Part 7)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [simultaneous-linear-equations-part6.md](simultaneous-linear-equations-part6.md) se aage chalti hai.** (Chapter ki shuruaat [simultaneous-linear-equations.md](simultaneous-linear-equations.md) se hoti hai. Triangles ke liye [triangles-part2.md](../triangles/triangles-part2.md) aur cyclic quadrilateral ke liye [circles-part4.md](../circles/circles-part4.md) bhi dekh sakte ho.)
> **Topics covered in this file:**
> 7. Word Problems II: Paise, Speed, Naav-Dhaara aur Geometry

---

# Topic 7: Word Problems II: Paise, Speed, Naav-Dhaara aur Geometry

Pichle topic mein humne word problems ka **4-step method** seekha tha: unknowns ko naam do, sentences se equations banao, solve karo, aur ant mein **words mein wapas jaanch** karo. Wahan numbers, ages, fractions aur digits ke sawaal the, jaise Sonpur mela mein Bani ki jod 50, antar 12 wali paheli (31 aur 19). Ab wahi method hum paise ke bills, gaadiyon ki race, nadi mein chalti naav aur geometry ki shapes par lagayenge. Naya kuch nahi seekhna: bas "kaun sa sentence kaun si equation banata hai", ye dekhne ki nazar aur tez karni hai. Aur ye chapter ka aakhri topic hai, to end mein poore chapter ka wrap-up bhi milega.

---

## Gopal kaka ki naav

Varanasi ke ghat par Gopal kaka naav chalate hain. Ek subah Charu ne unse poocha, "Kaka, naav ki speed kitni hai?"

Kaka hans pade. "Beta, ye to nadi par depend karta hai! Aaj main ghat se 12 km door mandir tak gaya, nadi ke **saath saath**, to 2 ghante lage. Wapsi mein nadi ke **khilaf** gaya, to 3 ghante lag gaye. Raasta same, mehnat same, phir bhi alag time."

Charu ne socha: "Matlab nadi kabhi naav ko dhakka deti hai aur kabhi rokti hai. To naav ki apni speed alag, nadi ki speed alag." Dono ko kaise nikaalein? Ek equation se nahi hoga, kyunki do unknowns hain. Par dono trips se **do equations** mil jaati hain. Yehi simultaneous equations ka kaam hai.

Chalo, is topic ke ant tak hum Gopal kaka ki naav ki aur nadi ki speed nikal lenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Still water speed** | Shaant paani mein naav ki apni speed (u) | Naav 5 km/h chalti hai |
| **Stream speed** | Nadi ke bahaav ki speed (v) | Nadi 1 km/h se behti hai |
| **Downstream** | Bahaav ke saath jaana. Speed = u + v | Ghat se mandir, nadi ke saath |
| **Upstream** | Bahaav ke khilaf jaana. Speed = u − v | Mandir se ghat, nadi ke khilaf |
| **Relative speed** | Do gaadiyon ki ek doosre ke hisaab se speed | Aamne-saamne: speeds jodo. Ek hi direction: speeds ghatao |
| **Fixed charge** | Wo rakam jo kitna bhi chalo, deni hi padti hai | Cab ka ₹30 base charge |
| **Per-unit charge** | Har km ya har kg ka alag charge | Cab ka ₹14 per km |

---

## Part A: Paise aur cost ke sawaal

Topic 6 ka 4-step method yahan bhi wahi hai. Bas dhyan rakho: **har bill ek equation hota hai.**

### Example 1: Do bills, do daam

Ek kirana dukaan par Kunal ne 3 packet noodles aur 2 packet biscuit kharide, bill aaya ₹70. Uski behen ne 2 packet noodles aur 3 packet biscuit kharide, bill aaya ₹55. Ek packet noodles aur ek packet biscuit ka daam?

**Step 1:** Noodles ke packet ka daam = x rupaye, biscuit ke packet ka daam = y rupaye.

**Step 2:**
3x + 2y = 70 ... (i)
2x + 3y = 55 ... (ii)

**Step 3 (elimination):** (i) ko 3 se aur (ii) ko 2 se guna karo, taaki y ke coefficients 6 ho jaayein.
9x + 6y = 210
4x + 6y = 110

Ghatane par 5x = 100, to **x = 20**. (i) mein: 60 + 2y = 70, to **y = 5**.

**Step 4 (Jaanch):**
- Kunal: 3 × 20 + 2 × 5 = 60 + 10 = 70 ✅
- Behen: 2 × 20 + 3 × 5 = 40 + 15 = 55 ✅

Noodles ka packet **₹20** ka, biscuit ka packet **₹5** ka.

### Example 2: Cab company ka fixed charge aur per-km charge

Ek cab company har trip par ek **fixed charge** leti hai, aur uske upar har km ka alag paisa. 10 km ka bill ₹170 aaya aur 18 km ka ₹282. Fixed charge, per-km charge, aur 25 km ka bill?

**Step 1:** Fixed charge = a, per-km charge = b.

**Step 2:** Bill = fixed + (km × per-km)
a + 10b = 170 ... (i)
a + 18b = 282 ... (ii)

**Step 3:** Dono mein a ka coefficient same hai, to seedha ghatao: (ii) − (i) karne par 8b = 112, to **b = 14**. (i) mein: a + 140 = 170, to **a = 30**.

**Step 4 (Jaanch):**
- 10 km: 30 + 10 × 14 = 30 + 140 = 170 ✅
- 18 km: 30 + 18 × 14 = 30 + 252 = 282 ✅

Fixed charge **₹30**, per-km **₹14**. 25 km ka bill = 30 + 25 × 14 = 30 + 350 = **₹380**.

Dhyan do: ₹170 ko 10 se bhaag dekar "₹17 per km" nahi nikalte, kyunki ₹30 to chahe 1 km chalo ya 100 km, lagta hi hai.

### Example 3: Adult aur child tickets

Ek chidiyaghar (zoo) ke counter par ek din 150 tickets bike. Adult ticket ₹120 ka aur child ticket ₹70 ka tha, aur total collection ₹14,000 hui. Kitne adult aur kitne child tickets bike?

**Step 1:** Adult tickets = x, child tickets = y.

**Step 2:**
x + y = 150 ... (i) (tickets ki ginti)
120x + 70y = 14,000 ... (ii) (paise)

**Step 3 (substitution):** (i) se y = 150 − x. (ii) mein rakho:
120x + 70(150 − x) = 14,000
120x + 10,500 − 70x = 14,000
50x = 3,500, to **x = 70**, aur y = 150 − 70 = **80**.

**Step 4 (Jaanch):**
- Ginti: 70 + 80 = 150 ✅
- Paise: 120 × 70 + 70 × 80 = 8,400 + 5,600 = 14,000 ✅

**70 adult** aur **80 child** tickets.

---

## Part B: Speed, distance aur time

Yaad rakhne wala ek hi rishta: **distance = speed × time**, yaani speed = distance ÷ time aur time = distance ÷ speed.

### Meeting aur chase: relative speed

Do gaadiyan ek hi raaste par chal rahi hain:
- **Aamne-saamne** (ek doosre ki taraf): faasla **dono ki speeds ke jod** se kam hota hai, speed x + y.
- **Ek hi direction mein** (peeche wali aage wali ko pakadti hai): faasla **speeds ke fark** se kam hota hai, speed x − y.

### Example 4: Do trains

Do stations A aur B ke beech 300 km ka faasla hai. Ek train A se aur doosri B se ek saath chalti hain.
- Agar wo **ek doosre ki taraf** chalein, to 2 ghante mein mil jaati hain.
- Agar wo **ek hi direction mein** chalein (tez train A se chalti hai aur dheemi B se, dono ek hi disha mein, A se B ki taraf), to tez wali dheemi ko 10 ghante mein pakad leti hai.

Dono ki speeds?

**Step 1:** Tez train ki speed = x km/h, dheemi ki speed = y km/h.

**Step 2:**
Aamne-saamne: 2(x + y) = 300, yaani x + y = 150 ... (i)
Ek direction: 10(x − y) = 300, yaani x − y = 30 ... (ii)

**Step 3:** Jodo: 2x = 180, to **x = 90**. (i) mein y = 150 − 90 = **60**.

**Step 4 (Jaanch):**
- Aamne-saamne: (90 + 60) × 2 = 150 × 2 = 300 ✅
- Ek direction: (90 − 60) × 10 = 30 × 10 = 300 ✅

Tez train **90 km/h**, dheemi **60 km/h**.

### Example 5: Do alag tarah ke safar (1/x form)

Devika ek baar train se aur ek baar bus se safar karti hai. Pehle trip mein 100 km train aur 80 km bus se gayi, kul **4 ghante** lage. Doosre trip mein 50 km train aur 120 km bus se gayi, tab bhi kul **4 ghante** lage. Train aur bus ki speed?

**Step 1:** Train ki speed = x km/h, bus ki speed = y km/h.

**Step 2:** Time = distance ÷ speed, isliye x aur y **neeche** aate hain:
100/x + 80/y = 4 ... (i)
50/x + 120/y = 4 ... (ii)

Ye 1/x wali form hai, jo Topic 5 mein dekhi thi. Topic 5 mein naye naam u aur v the, par is topic mein u aur v naav aur nadi ki speed ke liye rakhe hain, isliye yahan naye naam rakho: **a = 1/x** aur **b = 1/y**.
100a + 80b = 4 ... (i)
50a + 120b = 4 ... (ii)

**Step 3:** (ii) ko 2 se guna karo: 100a + 240b = 8. (i) ko ghatane par 160b = 4, to **b = 1/40**. (i) mein: 100a + 2 = 4, to **a = 1/50**.

Ab wapas: a = 1/x = 1/50 to **x = 50**, aur b = 1/y = 1/40 to **y = 40**.

**Step 4 (Jaanch):**
- Pehla trip: 100/50 + 80/40 = 2 + 2 = 4 ghante ✅
- Doosra trip: 50/50 + 120/40 = 1 + 3 = 4 ghante ✅

Train **50 km/h**, bus **40 km/h**.

Yaad rakho: a aur b sirf beech ke naam hain. Sawaal x aur y ka tha, isliye **ant mein wapas x = 1/a, y = 1/b** karna na bhoolo.

### Example 6: Cycle aur paidal

Ek ladka 2 ghante cycle chalata hai aur 3 ghante paidal chalta hai, to kul 36 km tay karta hai. Doosre din 1 ghanta cycle aur 5 ghante paidal chalta hai, to 32 km. Cycle aur paidal ki speed?

Cycle = x km/h, paidal = y km/h. Distance = speed × time, to:
2x + 3y = 36 ... (i)
x + 5y = 32 ... (ii)

(ii) se x = 32 − 5y. (i) mein: 64 − 10y + 3y = 36, to 7y = 28, **y = 4**, x = 32 − 20 = **12**.

Jaanch: 2 × 12 + 3 × 4 = 24 + 12 = 36 ✅ aur 12 + 5 × 4 = 32 ✅

Cycle **12 km/h**, paidal **4 km/h**.

---

## Part C: Naav aur dhaara (boat and stream)

Ab Gopal kaka ki baari. Do cheezein hain: naav ki apni speed **u** aur nadi ki speed **v**.

- **Downstream** (nadi ke saath): nadi naav ko dhakka deti hai, to speed = **u + v**.
- **Upstream** (nadi ke khilaf): nadi naav ko rokti hai, to speed = **u − v**.

Yaad rakhne ka tareeka: "saath mein **jud** jaate hain, khilaf mein **ghat** jaate hain."

### Example 7: Gopal kaka ki naav

12 km downstream 2 ghante mein, 12 km upstream 3 ghante mein. Naav ki speed aur nadi ki speed?

**Step 1:** Naav = u km/h, nadi = v km/h.

**Step 2:** Pehle har trip ki speed nikalo (speed = distance ÷ time):
- Downstream speed = 12 ÷ 2 = 6, to u + v = 6 ... (i)
- Upstream speed = 12 ÷ 3 = 4, to u − v = 4 ... (ii)

**Step 3:** Jodo: 2u = 10, to **u = 5**. (i) mein: v = 6 − 5 = **1**.

**Step 4 (Jaanch):**
- Downstream: speed 5 + 1 = 6 km/h, 12 km mein 12 ÷ 6 = 2 ghante ✅
- Upstream: speed 5 − 1 = 4 km/h, 12 km mein 12 ÷ 4 = 3 ghante ✅

Naav ki speed **5 km/h**, nadi ki speed **1 km/h**. Charu ko jawab mil gaya.

### Example 8: Alag distances, same time

Ek motorboat 24 km downstream aur 16 km upstream jaane mein dono mein 2 ghante leti hai. Boat aur stream ki speed?

Downstream speed = 24 ÷ 2 = 12, upstream speed = 16 ÷ 2 = 8.
u + v = 12 ... (i)
u − v = 8 ... (ii)

Jodo: 2u = 20, **u = 10**. Phir v = 12 − 10 = **2**.

Jaanch: Downstream (10 + 2) = 12 km/h, 2 ghante mein 24 km ✅. Upstream (10 − 2) = 8 km/h, 2 ghante mein 16 km ✅.

Boat **10 km/h**, stream **2 km/h**.

### Example 9: Jab total time hi diya ho (1/x form)

Ek boat 30 km upstream aur 44 km downstream jaane mein 10 ghante leti hai. Agar wo 40 km upstream aur 55 km downstream jaye, to 13 ghante lagte hain. Boat aur stream ki speed?

Yahan upstream speed = (u − v) aur downstream speed = (u + v) hain, aur time = distance ÷ speed. Naye naam: **a = 1/(u − v)**, **b = 1/(u + v)**.

30a + 44b = 10 ... (i)
40a + 55b = 13 ... (ii)

(i) ko 4 se aur (ii) ko 3 se guna karo:
120a + 176b = 40
120a + 165b = 39

Ghatane par 11b = 1, to **b = 1/11**. (i) mein: 30a + 4 = 10, to 30a = 6, **a = 1/5**.

Ab wapas:
- 1/(u − v) = 1/5, to u − v = 5
- 1/(u + v) = 1/11, to u + v = 11

Jodo: 2u = 16, **u = 8**. v = 11 − 8 = **3**.

**Jaanch:**
- Pehla: 30 ÷ (8 − 3) + 44 ÷ (8 + 3) = 30 ÷ 5 + 44 ÷ 11 = 6 + 4 = 10 ghante ✅
- Doosra: 40 ÷ 5 + 55 ÷ 11 = 8 + 5 = 13 ghante ✅

Boat **8 km/h**, stream **3 km/h**.

---

## Part D: Geometry ke sawaal

Geometry mein bhi wahi: shape ka koi rule ek equation deta hai. Triangle ka rule hai **teeno angles ka jod 180°** (dekho [triangles-part2.md](../triangles/triangles-part2.md)). Cyclic quadrilateral ka rule hai **aamne-saamne ke angles ka jod 180°** (dekho [circles-part4.md](../circles/circles-part4.md)).

### Example 10: Triangle ke angles

Triangle ABC mein ∠C = 70° aur ∠A, ∠B se 20° bada hai. ∠A aur ∠B?

**Step 1:** ∠A = x°, ∠B = y°.

**Step 2:**
x + y + 70 = 180, yaani x + y = 110 ... (i)
x − y = 20 ... (ii)

**Step 3:** Jodo: 2x = 130, **x = 65**. y = 110 − 65 = **45**.

**Step 4 (Jaanch):** 65 + 45 + 70 = 180 ✅ aur 65 − 45 = 20 ✅.

∠A = **65°**, ∠B = **45°**.

### Example 11: Cyclic quadrilateral (thoda aage ka)

Cyclic quadrilateral ABCD ke angles hain: ∠A = (x + 2y)°, ∠B = (3x + y)°, ∠C = (4x + 6y)°, ∠D = (5x + y)°. x, y aur chaaron angles nikalo.

Cyclic quadrilateral mein ∠A + ∠C = 180° aur ∠B + ∠D = 180°.

(x + 2y) + (4x + 6y) = 180, yaani 5x + 8y = 180 ... (i)
(3x + y) + (5x + y) = 180, yaani 8x + 2y = 180 ... (ii)

(ii) ko 4 se guna karo: 32x + 8y = 720. (i) ko ghatane par 27x = 540, **x = 20**. (ii) mein: 160 + 2y = 180, **y = 10**.

Angles: ∠A = 20 + 20 = 40°, ∠B = 60 + 10 = 70°, ∠C = 80 + 60 = 140°, ∠D = 100 + 10 = 110°.

Jaanch: 40 + 140 = 180 ✅, 70 + 110 = 180 ✅, aur chaaron ka jod 40 + 70 + 140 + 110 = 360 ✅.

### Example 12: Rectangle ki length aur breadth

Ek rectangle ka perimeter 54 cm hai. Agar length 3 cm badha dein aur breadth 2 cm ghata dein, to area wahi rehta hai. Length aur breadth?

**Step 1:** Length = l cm, breadth = b cm.

**Step 2:**
Perimeter: 2(l + b) = 54, yaani l + b = 27 ... (i)
Area wahi: (l + 3)(b − 2) = lb

Bracket kholo: lb − 2l + 3b − 6 = lb. Dono taraf se lb kat jaata hai (isliye equation linear ban gayi):
−2l + 3b = 6 ... (ii)

**Step 3:** (i) se l = 27 − b. (ii) mein: −2(27 − b) + 3b = 6, to −54 + 2b + 3b = 6, 5b = 60, **b = 12**, l = **15**.

**Step 4 (Jaanch):**
- Perimeter: 2(15 + 12) = 54 ✅
- Purana area 15 × 12 = 180. Naya: (15 + 3) × (12 − 2) = 18 × 10 = 180 ✅

Length **15 cm**, breadth **12 cm**.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Upstream aur downstream ulta lagana**
Gopal kaka ke sawaal mein agar u + v = 4 aur u − v = 6 likh dete, to u = 5 to aata, par v = 4 − 5 = **−1** aata. Nadi ki speed negative nahi ho sakti. Jab bhi v negative aaye, samajh lo ki upstream aur downstream ulte ho gaye. Yaad rakho: **tez wali trip hamesha downstream** ki hoti hai, kyunki nadi saath de rahi hai.

**Galti 2: Units mix kar dena (km/h aur minutes)**
Ek boat 20 km 30 minute mein jaati hai. Agar speed = 20 ÷ 30 likha to 0.67 aaya, jo ghalat hai. 30 minute = 1/2 ghanta, to speed = 20 ÷ (1/2) = **40 km/h**. Hamesha pehle minutes ko hours mein badlo (45 minutes = 3/4 ghanta, 20 minutes = 1/3 ghanta).

**Galti 3: Total time ko speed mein use karna**
Kisi ne kaha: "12 km jaane aur 12 km aane mein kul 5 ghante lage." Ab 24 ÷ 5 = 4.8 se **boat ki speed** nikalna ghalat hai. Ye to bas poore safar ki average speed hai, kyunki jaate waqt speed u + v thi aur aate waqt u − v. Boat ki speed u nikalne ke liye alag alag trip ke equations chahiye.

**Galti 4: Aamne-saamne aur ek hi direction ko mila dena**
Example 4 mein agar "10 ghante mein pakadti hai" ko bhi x + y se jodte, to x + y = 30 aur x + y = 150 jaise do contradicting equations milte. Aamne-saamne mein **jodo**, ek hi direction mein **ghatao**.

**Galti 5: 1/x ko x samajh lena**
Example 5 mein b = 1/40 nikla tha. Ye bus ki speed nahi hai! Bus ki speed y = 1/b = **40** hai. Ant mein wapas jaana mat bhoolo.

**Galti 6: Fixed charge ko bhool jaana**
Cab ka bill ₹170 aur 10 km dekhkar ₹17 per km maan lena ghalat hai. Fixed charge ₹30 alag hai, aur sahi per-km ₹14 hai.

---

## Quick Recap

- **Paise ke sawaal:** har bill ek equation. Fixed + per-unit charge ho to a + (units × b) likho.
- **Speed:** distance = speed × time. Aamne-saamne: speeds **jodo**. Ek hi direction: speeds **ghatao**.
- **Boat aur stream:** downstream = u + v, upstream = u − v. Pehle distance ÷ time se speeds nikalo, phir u = (down + up) ÷ 2 aur v = (down − up) ÷ 2.
- **Time diya ho to** equations 1/x form mein aati hain: a = 1/x, b = 1/y rakho, solve karo, ant mein wapas jao.
- **Geometry:** triangle ke angles ka jod 180°, cyclic quadrilateral ke opposite angles ka jod 180°, rectangle ka perimeter 2(l + b). Area wale sawaal mein lb kat jaata hai aur equation linear ban jaati hai.
- **Units** hamesha milao: minutes ko hours mein badlo.
- Har baar **words mein wapas jaanch** karo.

---

## Practice Questions

1. Three kg of apples and 1 kg of guavas cost ₹420. One kg of apples and 4 kg of guavas cost ₹360. Find the price of 1 kg of apples and of 1 kg of guavas.

2. A courier company charges a fixed amount plus a fixed rate per kg. A 2 kg parcel costs ₹110 and a 5 kg parcel costs ₹185. Find the fixed charge, the rate per kg, and the cost of an 8 kg parcel.

3. A show sold 300 tickets. Adult tickets cost ₹80 each and child tickets cost ₹50 each, and the total collection was ₹20,400. How many adult and how many child tickets were sold?

4. Two cyclists start 90 km apart. If they ride towards each other, they meet in 3 hours. If they ride in the same direction (the faster one chasing), the faster one catches the slower one in 15 hours. Find their speeds.

5. A person walks 12 km and cycles 30 km in 6 hours. If he walks 20 km and cycles 20 km, he takes 7 hours. Find his walking speed and cycling speed.

6. A boat goes 20 km downstream in 2 hours and 20 km upstream in 5 hours. Find the speed of the boat in still water and the speed of the stream.

7. Say whether each statement is true or false, giving a reason.
   (a) The downstream speed of a boat is always greater than its upstream speed.
   (b) The speed of a boat in still water is the average of its downstream and upstream speeds.
   (c) A trip of 45 minutes is the same as 45 hours when we put time in a speed formula.

8. In triangle ABC, the angle ∠C is 20° less than ∠A + ∠B, and ∠A is 40° more than ∠B. Find all three angles.

9. In a cyclic quadrilateral ABCD, ∠A = (4x + y)°, ∠B = (5x + 2y)°, ∠C = (2x + 8y)° and ∠D = (3x + 4y)°. Find x, y and the four angles.

10. The perimeter of a rectangle is 30 cm. If its length is increased by 3 cm and its breadth is decreased by 1 cm, the area increases by 6 cm². Find the original length and breadth.

### Answers

1. Apples ka daam x, guavas ka y. 3x + y = 420 aur x + 4y = 360. Pehli se y = 420 − 3x. Doosri mein: x + 1,680 − 12x = 360, to −11x = −1,320, **x = 120**, y = 420 − 360 = **60**.
   Jaanch: 3 × 120 + 60 = 420 ✅ aur 120 + 4 × 60 = 360 ✅
   Apples **₹120/kg**, guavas **₹60/kg**.

2. Fixed = a, per kg = c. a + 2c = 110 aur a + 5c = 185. Ghatane par 3c = 75, **c = 25**, a = 110 − 50 = **60**. 8 kg: 60 + 8 × 25 = 60 + 200 = **₹260**.
   Jaanch: 60 + 50 = 110 ✅ aur 60 + 125 = 185 ✅

3. Adult x, child y. x + y = 300 aur 80x + 50y = 20,400. y = 300 − x: 80x + 15,000 − 50x = 20,400, 30x = 5,400, **x = 180**, y = **120**.
   Jaanch: 180 + 120 = 300 ✅ aur 14,400 + 6,000 = 20,400 ✅

4. Speeds x (faster) aur y. 3(x + y) = 90, to x + y = 30. 15(x − y) = 90, to x − y = 6. Jodo: 2x = 36, **x = 18**, y = **12**.
   Jaanch: (18 + 12) × 3 = 90 ✅ aur (18 − 12) × 15 = 90 ✅
   Faster **18 km/h**, slower **12 km/h**.

5. Walking x, cycling y. 12/x + 30/y = 6 aur 20/x + 20/y = 7. a = 1/x, b = 1/y: 12a + 30b = 6 aur 20a + 20b = 7. Pehli ko 5 se aur doosri ko 3 se guna karo: 60a + 150b = 30 aur 60a + 60b = 21. Ghatane par 90b = 9, **b = 1/10**. Phir 12a + 3 = 6, **a = 1/4**. Wapas: x = 4, y = 10.
   Jaanch: 12/4 + 30/10 = 3 + 3 = 6 ✅ aur 20/4 + 20/10 = 5 + 2 = 7 ✅
   Walking **4 km/h**, cycling **10 km/h**.

6. Downstream speed = 20 ÷ 2 = 10, upstream speed = 20 ÷ 5 = 4. u + v = 10, u − v = 4. Jodo: 2u = 14, **u = 7**, v = **3**.
   Jaanch: 20 ÷ (7 + 3) = 2 ghante ✅ aur 20 ÷ (7 − 3) = 5 ghante ✅

7. (a) **True** ✅. Downstream u + v, upstream u − v, aur v > 0 hai, to u + v hamesha bada.
   (b) **True** ✅. ((u + v) + (u − v)) ÷ 2 = 2u ÷ 2 = u.
   (c) **False** ❌. Speed km/h mein hoti hai, to 45 minutes = 3/4 ghanta likhna padta hai, 45 nahi.

8. ∠A = x, ∠B = y. ∠C = x + y − 20. Triangle: x + y + (x + y − 20) = 180, to 2(x + y) = 200, x + y = 100. Aur x − y = 40. Jodo: 2x = 140, **x = 70**, y = **30**. ∠C = 100 − 20 = **80**.
   Jaanch: 70 + 30 + 80 = 180 ✅ aur 70 − 30 = 40 ✅ aur 80 = 100 − 20 ✅

9. ∠A + ∠C = 180: (4x + y) + (2x + 8y) = 6x + 9y = 180, to 2x + 3y = 60. ∠B + ∠D = 180: (5x + 2y) + (3x + 4y) = 8x + 6y = 180, to 4x + 3y = 90. Ghatane par 2x = 30, **x = 15**, 30 + 3y = 60, **y = 10**.
   Angles: ∠A = 60 + 10 = **70°**, ∠B = 75 + 20 = **95°**, ∠C = 30 + 80 = **110°**, ∠D = 45 + 40 = **85°**.
   Jaanch: 70 + 110 = 180 ✅, 95 + 85 = 180 ✅, total 70 + 95 + 110 + 85 = 360 ✅

10. Length l, breadth b. 2(l + b) = 30, to l + b = 15. (l + 3)(b − 1) = lb + 6, bracket kholo: lb − l + 3b − 3 = lb + 6, to −l + 3b = 9. l = 15 − b: −15 + b + 3b = 9, 4b = 24, **b = 6**, **l = 9**.
    Jaanch: perimeter 2 × 15 = 30 ✅. Purana area 9 × 6 = 54. Naya (12) × (5) = 60, aur 60 − 54 = 6 ✅

---

Ab aap paise ke bills se lekar nadi mein chalti naav tak, har word problem ko do equations mein badalna jaante ho. Bas 4 steps yaad rakho aur ant mein jaanch karo. Aap ye kar sakte ho!

---

# Chapter Wrap-up: Simultaneous Linear Equations

| Topic | Kya seekha | Sabse kaam ki baat |
|---|---|---|
| 1. Substitution method | Ek equation se ek variable ko doosre ke terms mein likhkar doosri equation mein rakhna | Jab koi variable ka coefficient 1 ho ya akela likha ho, to ye sabse aasaan hai |
| 2. Elimination method | Equations ko multiply karke ek variable ke coefficients barabar karna, phir jodna ya ghatana | Jab koi coefficient 1 na ho aur dono equations ax + by = c ki shakal mein hon, to ye sabse saaf hai |
| 3. Cross-multiplication method | Coefficients se seedha formula lagakar x aur y nikalna | Formula yaad ho aur numbers bade ya ajeeb hon, tab kaam aata hai |
| 4. Graph aur solutions ki ginti | Do lines ka milna, parallel hona ya ek hi line hona, aur uska matlab (ek, koi nahi, ya anginat solutions) | Coefficients ka ratio dekhkar hi pata chal jaata hai ki kitne solutions honge |
| 5. 1/x wali equations | 1/x, 1/y (ya 1/(x + y) jaise tukdon) ko naye naam u, v dekar linear banana, solve karke wapas jaana | Ant mein x = 1/u aur y = 1/v karna na bhoolo |
| 6. Word problems I | 4-step method, phrase ko maths mein badalna, numbers, ages, fractions, digits | Unknowns ko pehle naam do, aur ant mein words mein jaanch karo |
| 7. Word problems II | Paise, speed, naav-dhaara aur geometry ke sawaal equations mein | Boat: u + v aur u − v; aamne-saamne: jodo, ek direction: ghatao |

### Kaunsa method kab

| Situation | Sabse achha method | Kyun |
|---|---|---|
| Ek equation mein x = ... ya y = ... jaisi form pehle se ho | Substitution | Seedha doosri equation mein rakh do |
| Ek variable ka coefficient 1 ya −1 ho | Substitution | Akela karna aasaan hai, fractions nahi aate |
| Dono equations ax + by = c ki shakal mein hon aur koi coefficient 1 na ho | Elimination | Multiply, jodo ya ghatao, aur ek variable gayab |
| Kisi variable ke coefficients pehle se barabar hon | Elimination | Seedha ghatana ya jodna kaafi hai |
| Bade ya ajeeb numbers hon, aur formula yaad ho | Cross-multiplication | Ek hi baar mein x aur y mil jaate hain |
| Sirf ye jaanna ho ki solution hai ya nahi, aur kitne | Coefficients ka ratio ya graph | Solve kiye bina hi pata chal jaata hai |
| Variables neeche (1/x, 1/y) hon | Pehle u = 1/x, v = 1/y rakho (naav wale sawaal mein a, b), phir koi bhi method | Equation linear ban jaati hai |
| Word problem ho | 4-step method, solve karne ke liye koi bhi method | Pehle equations banti hain, method baad mein chuno |

### Kaam ke formulas aur rules

| Kya | Rule |
|---|---|
| Boat downstream aur upstream | u + v aur u − v |
| Boat aur stream ki speed | u = (down + up) ÷ 2, v = (down − up) ÷ 2 |
| Meeting (aamne-saamne) | Relative speed x + y |
| Chase (ek hi direction) | Relative speed x − y |
| Triangle ke angles | Teeno ka jod 180° |
| Cyclic quadrilateral | Opposite angles ka jod 180° |
| Fixed + per-unit cost | Total = fixed + (units × rate) |

---

Do unknowns, do equations, aur ek saaf soch: yehi poore chapter ki kahani hai. Ab jab bhi koi sawaal "do cheezein nahi pata hain" kehkar aaye, to aapke paas use solve karne ke kai tareeke hain.
