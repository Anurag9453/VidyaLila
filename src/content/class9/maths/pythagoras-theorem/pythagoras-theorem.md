# Chapter: Pythagoras Theorem

> **Class:** 9 | **Subject:** Mathematics
> **Pichhle chapters se jo kaam aayega:** [Triangles](../triangles/triangles.md) (right triangle aur hypotenuse) aur [Expansions](../expansions/expansions.md) ((a + b)² wali identity).
> **Topics covered in this file:**
> 1. Pythagoras Theorem aur uska Proof

---

# Topic 1: Pythagoras Theorem aur uska Proof

Ab tak hum triangles ko unki sides aur angles se jaante aaye hain. [Triangles](../triangles/triangles.md) mein humne right triangle dekha tha: wo triangle jisme ek angle 90° ka ho, aur uske saamne wali sabse lambi side hypotenuse. Aur [Expansions](../expansions/expansions.md) mein humne (a + b)² = a² + 2ab + b² seekha tha.

Ye dono cheezein aaj milne wali hain, aur milkar ek aisa result dengi jo poori geometry ke sabse mashhoor results mein se ek hai.

Ek baat aur. Number Systems, Mensuration, Circles jaise pichhle chapters mein humne Pythagoras ka naam "pichhli classes se" ke label ke saath use kiya tha, bas ek tool ki tarah. Ab ye chapter uska asli ghar hai: yahan hum seekhenge ki ye result **kya kehta hai** aur **sach kyun hai**.

---

## Nikhil ka "43-inch" TV

Nikhil ke ghar naya TV aaya. Dabbe par bada bada likha tha: **43 inch**. Nikhil ne turant apna measuring tape nikala.

- TV ki chaudai (width) naapi: lagbhag 37 inch se thodi zyada.
- TV ki unchai (height) naapi: lagbhag 21 inch.

"Didi, ye kaisa 43 inch? Na ye 43 inch chauda hai, na 43 inch ooncha! Dukaan wale ne hamein ullu to nahi banaya?"

Didi Aditi, jo Class 9 mein hai, hans padi. "Ullu nahi banaya. 43 inch TV ki **diagonal** hoti hai, yaani screen ke ek kone se samne wale kone tak ki seedhi doori."

Nikhil ne tape ko screen ke neeche-baayen kone se upar-daayen kone tak tira kiya. Sach mein, 43 inch!

"Achha! Par didi, diagonal width se badi aur height se badi kyun hai? Aur kya in teeno ka koi rishta hai?"

Aditi ne muskurakar kaha, "Bahut accha sawaal. Hai, aur wo rishta itna sundar hai ki hazaaron saal se logon ne use jaanchne aur saabit karne ki koshish ki hai. Chal, dekhte hain."

TV ki screen ek **rectangle** hai. Uski diagonal usse do right triangles mein kaat deti hai: width aur height do sides, aur diagonal teesri side (sabse lambi). Yaani sawaal ye hai: **right triangle ki teeno sides ke beech kya rishta hota hai?**

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Right triangle** | Wo triangle jisme ek angle 90° ka hota hai | TV ki screen ko diagonal se kaato to do aise triangle bante hain |
| **Hypotenuse** | 90° wale angle ke **saamne** wali side, aur triangle ki **sabse lambi** side | TV ki diagonal |
| **Legs (base aur perpendicular)** | Wo do sides jo 90° ka kona banati hain | TV ki width aur height |
| **Base** | Ek leg, jise hum neeche rakhte hain | Width |
| **Perpendicular** | Doosri leg, jo base par seedhi khadi hoti hai | Height |
| **Square on a side** | Us side ko apni side maan kar banaya hua square | 3 wali side par square: 3 × 3 |
| **Pythagoras theorem** | Right triangle ki teeno sides ke beech ka rishta | c² = a² + b² |

---

## Part A: Pythagoras theorem kya kehta hai

Right triangle ki sides ko aise naam dete hain:

- **a** = base (ek leg)
- **b** = perpendicular (doosri leg)
- **c** = hypotenuse (90° ke saamne, sabse lambi)

> **Pythagoras Theorem:** Right triangle mein
> **hypotenuse² = base² + perpendicular²**
> yaani **c² = a² + b²**

Hindi mein: "Hypotenuse par bana square ka area, baaki do sides par bane squares ke areas ke jod ke barabar hota hai."

### "Squares on the sides" ki tasveer

Sabse chhota right triangle jo Aditi ko yaad tha: sides **3, 4 aur 5**. Teeno sides par ek-ek square banate hain.

```
                |\
                | \
        3       |  \       5
   [ 3 x 3 ]    |   \   [ 5 x 5 ]
   area = 9     |    \  area = 25
                |_____\
                   4
              [ 4 x 4 ]
              area = 16
```

- 3 wali side par square ka area = 3 × 3 = **9**
- 4 wali side par square ka area = 4 × 4 = **16**
- 5 wali side (hypotenuse) par square ka area = 5 × 5 = **25**

Aur dekho: **9 + 16 = 25** ✅

Yaani chhote do squares ka jod, bade square ke barabar. Yahi hai Pythagoras theorem: **3² + 4² = 5²**.

Dhyan do: ye "squares ka area" wala rishta hai. Sides ka jod nahi: 3 + 4 = 7, jo 5 nahi hai. Sides ke **squares** ka jod hi hypotenuse ke square ke barabar hota hai.

### Thodi si history

Ye result sirf ek insaan ki khoj nahi hai. Bharat mein **Baudhayana** ne apne **Sulbasutra** mein (lagbhag 800 BCE ke aas-paas; vidwaan alag alag tareekh batate hain) likha tha ki rectangle ki diagonal par bana square, uski lambai aur chaudai par bane squares ka jod hota hai. Ye kaam **yagya ki vedi (altar)** ko sahi aakaar mein banane ke liye hota tha, jahan rassi aur khoonte se seedhe kone banane padte the.

Greece mein **Pythagoras** (lagbhag 570-495 BCE) ke naam par ye theorem mashhoor hua, isiliye duniya bhar mein ise unke naam se jaana jata hai. Kai aur purani sabhyataon ko bhi iska anubhav tha. Ye sach hai ki ye idea bahut purana hai aur alag alag jagah mil gaya tha.

Par ek sawaal baaki hai. Sirf 3-4-5 ke liye sach hona kaafi nahi hai. **Kya ye har right triangle ke liye sach hai?** Iske liye proof chahiye.

---

## Part B: Proof 1, tukde jodkar (rearrangement)

Aditi ne kaagaz par ek idea nikala. Do tareeke se ek hi area nikalo, aur dono ko barabar likh do.

### Setup

Ek right triangle lo jiske legs **a** aur **b** hain, aur hypotenuse **c**. Ab aise **4 bilkul ek jaise (congruent) triangles** kaat lo.

Ek bada square banao jiski **har side (a + b)** hai. Uske andar chaaron kono par ek-ek triangle is tarah rakho ki:

- Bade square ki har side ke do hisse bante hain: **a** aur **b** (kyunki a + b = poori side).
- Beech mein ek **tedha square** (tilted square) bachta hai jiski har side **c** hai (ye teesri side, yaani hypotenuse, hai).

```
          a          b
     +---------*-------------+
     |        / \            |
     |      /     \          |
     |    /    c     \       |
     |  /               \    |
     *                       *
     |  \               /    |
     |    \           /      |
     |      \       /        |
     |        \   /          |
     +---------*-------------+
```

Chaaron kone par ek-ek right triangle hai (legs a aur b), aur beech mein tilted square hai jiski side c hai. Sketch mein a aur b thode se barabar dikhte hain, par proof kisi bhi a aur b ke liye chalta hai.

Beech wala tukda sach mein square hai? Haan: har kone par triangle ke do tez (acute) angles ka jod 90° hota hai (right triangle ke teeno angles ka jod 180° aur ek 90° ka), isliye seedhi line par bacha hua angle 180° − 90° = **90°** hota hai. Chaaron sides c hain, chaaron angle 90°, to ye square hai.

### Do tareeke se area

**Tareeka 1: bade square ka area seedha**

Side (a + b), to area = **(a + b)²**

**Tareeka 2: tukde jodkar**

- 4 triangles, har ek ka area = ½ × base × height = ½ × a × b = ½ab
- 4 triangles ka kul area = 4 × ½ab = **2ab**
- Beech ke tilted square ka area = **c²**

To bade square ka area = 2ab + c²

### Dono ko barabar likho

(a + b)² = 2ab + c²

Ab left side par Expansions wali identity lagate hain: **(a + b)² = a² + 2ab + b²**

a² + 2ab + b² = 2ab + c²

Dono taraf se **2ab** kaat do:

> **a² + b² = c²**

Aur ye **kisi bhi** right triangle ke liye sach hai, kyunki hamne a aur b koi specific number nahi liye. Bas ye maana ki triangle right-angled hai.

**Jaanch (3-4-5 se):** a = 3, b = 4, c = 5.
- Bada square: (3 + 4)² = 49
- 4 triangles: 4 × ½ × 3 × 4 = 24
- Beech ka square: 5² = 25
- 24 + 25 = 49 ✅

Ye bilkul match hua.

### Proof 2 (sirf jhalak): similar triangles se

Ek aur tareeka bhi hai. Right angle wale kone se hypotenuse par ek perpendicular girao. Isse bada triangle do chhote right triangles mein toot jata hai, aur teeno triangles **similar** (ek hi shape ke, alag size ke) nikalte hain. Similar triangles ki sides ke ratios barabar hote hain, aur unse bhi a² + b² = c² nikal aata hai.

Iska poora detail hum **aage ki class mein** dekhenge, jab similarity padhenge. Abhi ke liye Proof 1 hi kaafi hai, aur wahi sabse seedha dikhta bhi hai.

---

## Part C: Kuch numbers se jaanch

Theorem ko numbers par kas kar dekhte hain. Har baar pehle pehchano ki sabse lambi side (hypotenuse) kaun si hai, phir check karo.

### Example 1: Right triangle 3, 4, 5

Sabse lambi side 5 hai, to c = 5.
- a² + b² = 3² + 4² = 9 + 16 = **25**
- c² = 5² = **25**

Dono barabar ✅

### Example 2: Right triangle 5, 12, 13

Sabse lambi side 13, to c = 13.
- a² + b² = 5² + 12² = 25 + 144 = **169**
- c² = 13² = **169**

Dono barabar ✅

### Example 3: Right triangle 6, 8, 10

Sabse lambi side 10, to c = 10.
- a² + b² = 6² + 8² = 36 + 64 = **100**
- c² = 10² = **100**

Dono barabar ✅

Dhyan do: 6-8-10 wahi 3-4-5 hai, bas har side ko 2 se guna kiya hua.

### Example 4: Ek triangle jo right-angled nahi hai: 4, 5, 6

Sabse lambi side 6, to c = 6.
- a² + b² = 4² + 5² = 16 + 25 = **41**
- c² = 6² = **36**

41 ≠ 36 ❌

Yahan rishta **nahi** chalta. Yaani ye triangle right-angled nahi hai: agar hota, to Pythagoras theorem chalna hi chahiye tha. Ye hame batata hai ki ye rishta har triangle ka nahi, sirf **right triangle** ka khaas gun hai.

---

## Aam galtiyan (bachke rehna)

**Galti 1: Sabse lambi side ko leg maan lena**

Triangle 5, 12, 13 mein agar koi 13 ko leg maan le:
- Galat: 5² + 13² = 25 + 169 = 194, aur 12² = 144. Match nahi hota. 194 ≠ 144.
- Sahi: hypotenuse hamesha **sabse lambi** side hai, to c = 13. 5² + 12² = 169 = 13² ✅

Hypotenuse ko pehle pehchano: wo 90° ke saamne hoti hai, aur sabse badi hoti hai.

**Galti 2: c = a + b likh dena**

Triangle 3, 4, 5 mein:
- Galat: c = 3 + 4 = 7. Lekin hypotenuse 5 hai.
- Sahi: c² = a² + b² (squares ka jod), na ki c = a + b.

Ek aur baat: kisi triangle mein ek side hamesha baaki do sides ke jod se chhoti hoti hai (7 > 5), to c = a + b kabhi nahi ho sakta.

**Galti 3: Square lagana bhool jana**

- Galat: 3 + 4 = 5 (kuch nahi hua, sirf 3 + 4 = 7)
- Sahi: 3² + 4² = 9 + 16 = 25 = 5²

Teeno sides par square lagta hai, aur pehle squares nikalo, phir jodo.

**Galti 4: Alag units mein sides ko mila dena**

Ek triangle ki legs 3 m aur 400 cm hain, hypotenuse 5 m. Seedha 3² + 400² likhna galat hai, kyunki ek metre mein hai aur ek cm mein.
- Sahi: pehle sab ko ek hi unit mein karo. 400 cm = 4 m. Ab 3² + 4² = 9 + 16 = 25 = 5² ✅

Hamesha **pehle units same karo, phir square karo.**

---

## Quick Recap

- Right triangle mein 90° ke saamne wali sabse lambi side **hypotenuse** hai. Baaki do sides **legs** (base aur perpendicular) hain.
- **Pythagoras Theorem:** hypotenuse² = base² + perpendicular², yaani **c² = a² + b²**.
- Tasveer mein: hypotenuse par bane square ka area = baaki do squares ke areas ka jod (3-4-5 mein 9 + 16 = 25).
- Ye idea Bharat mein Baudhayana ke Sulbasutra mein (lagbhag 800 BCE) aur Greece mein Pythagoras ke naam se mashhoor hai.
- **Proof 1:** bada square (a + b) mein 4 triangles aur beech ka tilted square c. (a + b)² = 4 × ½ab + c², to a² + 2ab + b² = 2ab + c², aur a² + b² = c².
- Numeric jaanch: 3-4-5, 5-12-13, 6-8-10 mein rishta chalta hai. 4-5-6 (right triangle nahi) mein nahi chalta.
- Galtiyan: lambi side ko leg samajhna, c = a + b likhna, square bhoolna, alag units mila dena.

---

## Practice Questions

1. In a right triangle, the legs are 6 cm and 8 cm and the hypotenuse is 10 cm. Verify that the Pythagoras relationship holds.

2. A triangle has sides 8, 15 and 17. Which side must be the hypotenuse if it is a right triangle? Check whether a² + b² = c² holds.

3. Draw (or describe) the "squares on the sides" picture for a right triangle with legs 3 and 4. State the area of each square and show how the areas are related.

4. In Proof 1, take a = 5 and b = 12. Find the area of the big square of side (a + b), the total area of the 4 triangles, and the area of the tilted square. Show that the pieces add up to the big square.

5. For a triangle with sides 7, 8 and 10, compute 7² + 8² and 10². Does the Pythagoras relationship hold? What does this tell you about the triangle?

6. Priya says, "In a right triangle with legs 5 and 12, the hypotenuse is 5 + 12 = 17." Explain her mistake and check, using squares, that the hypotenuse is actually 13.

7. A right triangle has legs 1.2 m and 50 cm, and hypotenuse 1.3 m. Explain why 1.2² + 50² = 1.3² is wrong. Fix the units and verify the relationship.

8. State True or False:
   (a) The hypotenuse is the side opposite the right angle.
   (b) In a right triangle, the hypotenuse is always the longest side.
   (c) In a right triangle with legs a and b and hypotenuse c, c = a + b.
   (d) The relationship a² + b² = c² holds for 5, 12, 13 with c = 13.

### Answers

1. Hypotenuse c = 10 (sabse lambi side).
   a² + b² = 6² + 8² = 36 + 64 = 100, aur c² = 10² = 100.
   Dono barabar ✅

2. Sabse lambi side 17 hai, to agar ye right triangle hai to hypotenuse 17 hogi.
   8² + 15² = 64 + 225 = 289, aur 17² = 289.
   Dono barabar ✅

3. Legs par squares: 3 × 3 = **9** aur 4 × 4 = **16**. Hypotenuse (5) par square: 5 × 5 = **25**.
   Rishta: 9 + 16 = 25 ✅ (chhote do squares ka jod bade square ke barabar).

4. - Bada square: (5 + 12)² = 17² = **289**
   - 4 triangles: 4 × ½ × 5 × 12 = **120**
   - Tilted square: c = 13 (kyunki 5² + 12² = 169 = 13²), to 13² = **169**
   - 120 + 169 = 289 ✅ (bade square ke barabar)

5. 7² + 8² = 49 + 64 = **113**, aur 10² = **100**. 113 ≠ 100 ❌
   Pythagoras relationship nahi chalta, to ye triangle right-angled nahi hai (right hota to ye barabar aana chahiye tha).

6. Priya ne sides ka jod 5 + 12 = 17 kiya, jabki theorem **squares** ka jod maangta hai.
   Sahi: c² = 5² + 12² = 25 + 144 = 169, to c = 13 (kyunki 13² = 169). Jaanch: 13 < 17 ✅ (hypotenuse legs ke jod se chhoti hi rehti hai).

7. 1.2 m aur 50 cm alag units mein hain, isliye unhe seedha square karke jodna galat hai.
   Sab ko cm mein karo: 1.2 m = 120 cm, 1.3 m = 130 cm. Ab 120² + 50² = 14400 + 2500 = 16900 = 130² ✅

8. (a) **True** ✅. 90° ke saamne wali side hi hypotenuse hai.
   (b) **True** ✅. Hypotenuse hamesha sabse lambi side hoti hai.
   (c) **False** ❌. Sahi rishta c² = a² + b² hai; c = a + b nahi.
   (d) **True** ✅. 5² + 12² = 25 + 144 = 169 = 13².

---

Pythagoras theorem ko samajhna matlab ek bahut powerful tool haath mein aa jana. Aaj humne dekha ki ye **kya kehta hai** aur **sach kyun hai**.

**Aage kya?** Nikhil ka 43-inch TV abhi tak ek sawaal chhod gaya hai: agar width aur height pata ho, to diagonal kitni hogi? Ya diagonal aur height pata ho, to width? Topic 2 mein hum isi rishte se **ek anjaan side nikalna** seekhenge, aur dekhenge ki 3-4-5 jaise "special numbers" (jinhe triplets kehte hain) aur roz ki zindagi mein iske upyog kahan kahan milte hain.
