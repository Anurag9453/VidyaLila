# Chapter: Trigonometry (Part 7)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [trigonometry-part6.md](trigonometry-part6.md) se aage chalti hai.** (Chapter ki shuruaat [trigonometry.md](trigonometry.md) se hoti hai.)
> **Topics covered in this file:**
> 7. Unchai aur Doori ke Sawaal (Heights and Distances)

---

# Topic 7: Unchai aur Doori ke Sawaal (Heights and Distances)

Pichle topic mein humne complementary angles ke pairs aur teen identities dekhi. Us se hamare paas ratios ka ek poora toolkit ban gaya: sin, cos, tan aur unke reciprocals, 30°, 45°, 60° ke exact values, aur ek ratio se baaki nikalne ka tareeka. Ab sawaal ye hai ki ye toolkit asli duniya mein kab kaam aata hai?

Is topic mein hum ek seedha sa kaam karenge: **bina chadhe, bina naape, bas ek angle aur ek doori se kisi bhi ooncha cheez ki height nikalna.** Ye chapter ka aakhri topic hai, isliye end mein poore chapter ka wrap-up aur sabhi tables bhi milengi.

Prior knowledge: right triangle mein Pythagoras ([pythagoras-theorem.md](../pythagoras-theorem/pythagoras-theorem.md)) aur parallel lines ke alternate angles ([lines-and-angles-part3.md](../lines-and-angles/lines-and-angles-part3.md)). Inhe dobara nahi padhayenge, bas use karenge.

**Is topic mein sab jagah √2 ≈ 1.414 aur √3 ≈ 1.732 maana gaya hai.**

---

## Minaret aur ghar-ka-bana clinometer

School trip par Mr. Chaudhary class ko ek purani minaret dikhane le gaye. Reena ne upar dekhte hue poocha, "Sir, ye kitni oonchi hogi?"

Mr. Chaudhary muskuraye, "Chadhkar naapein?" Reena ne kaha, "Sir, wo to mana hai, aur khatarnaak bhi!"

"Theek hai, to chalo ek **clinometer** banate hain," sir ne kaha. Unhone ek protractor liya, uski seedhi side par ek straw chipka di, aur protractor ke beech se ek dhaaga latka diya jiske neeche ek chhota patthar bandha tha. Patthar ki wajah se dhaaga hamesha seedha neeche (vertical) latakta hai.

Phir dono minaret ke base se **30 m** peeche gaye (naap-fita se naapa). Reena ne straw se minaret ki choti ko dekha. Dhaaga 90° wale mark se 30° door tika. Matlab choti ko dekhne ki line zameen se **30°** upar uth rahi thi.

Ab Reena ke paas ek angle (30°) aur ek doori (30 m) thi. Kya itne se height nikal sakti hai? Zaroor, tan ki madad se. Is topic ke end mein hum isse solve karenge. Pehle zaroori shabd aur tareeka.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Line of sight (nazar ki line)** | Aankh se us cheez tak ki seedhi kalpanik line jise hum dekh rahe hain | Reena ki aankh se minaret ki choti tak |
| **Horizontal line** | Aankh ke level par bilkul seedhi, zameen ke samantar line | Reena ki aankh se seedha aage |
| **Angle of elevation (unchai ka kona)** | Jab hum **upar** dekhte hain, to horizontal line aur line of sight ke beech ka angle | Minaret ki choti dekhte waqt 30° |
| **Angle of depression (jhukav ka kona)** | Jab hum **neeche** dekhte hain, to horizontal line aur line of sight ke beech ka angle | Chhat se neeche khade dost ko dekhna |
| **Clinometer** | Angle of elevation naapne ka chhota upkaran | Protractor + straw + dhaaga |

---

## Part A: Elevation aur depression, figure ke saath

### Angle of elevation

Aap zameen par khade ho aur kisi ooncha cheez ki choti ko dekh rahe ho. Aankh se seedhi (horizontal) line kheencho, aur aankh se choti tak line of sight kheencho. In dono ke beech ka angle hai **angle of elevation**.

```
                        * choti (top)
                      /|
        line of sight/  |
                    /   |
                  /     |  height
                /       |
              /  θ      |
  aankh  . - - - - - - -+   <- horizontal line
```

Yahan θ angle of elevation hai. Dhyan do: ye angle **horizontal se naapa** jaata hai, vertical se nahi.

### Angle of depression

Ab maan lo aap ek oonchi building ki chhat par ho aur neeche khadi gaadi ko dekh rahe ho. Aankh se seedhi horizontal line kheencho. Line of sight is horizontal se **neeche** ki taraf jaati hai. Dono ke beech ka angle hai **angle of depression**.

```
  aankh .- - - - - - - - - - - - - - - -  <- horizontal line
        |\  
        | \ θ
        |  \  line of sight
  height|   \
        |    \
        |     \
        +------* gaadi (car)
        (base)
```

Yahan bhi angle **horizontal se** naapa jaata hai, neeche ki taraf.

### Ek zaroori baat: depression upar wale ka, elevation neeche wale ka, aur dono barabar

Maan lo chhat par A hai aur zameen par gaadi B hai. A se B ka depression θ hai. Ab B se A ko dekho to B ka angle of elevation kya hoga?

```
  A .- - - - - - - - - - - -   <- horizontal (A par)
    |\ 
    | \ θ   (depression)
    |  \
    |   \
    |    \
    |     \ 
    +------B- - - - - - - - -   <- horizontal (zameen, B par)
              θ (elevation)
```

A ki horizontal line aur zameen ki line **parallel** hain. Line AB unko kaat rahi hai (transversal). To "alternate angles" barabar hote hain (jo aapne [lines-and-angles-part3.md](../lines-and-angles/lines-and-angles-part3.md) mein dekha tha). Isliye:

**Upar se depression = neeche se elevation.**

Ye baat bahut kaam aati hai: depression wale sawaal mein hum neeche ke triangle ka angle wahi le lete hain.

---

## Part B: Tareeka (har sawaal ke liye)

1. **Figure banao.** Neat, bada, ek seedha vertical (height), ek horizontal (doori).
2. **Right triangle pehchano.** Height, doori aur line of sight milkar right triangle banate hain, right angle zameen par hota hai.
3. **Diya hua angle aur sides mark karo.** Angle horizontal ke paas hota hai. Jo side angle ke saamne hai wo "opposite", jo angle ke saath zameen par hai wo "adjacent", aur line of sight "hypotenuse".
4. **Ratio chuno:**
   - Height aur doori (base) dono involved: **tan** (opposite ÷ adjacent).
   - Line of sight ya ladder/rope ki length aur height: **sin** (opposite ÷ hypotenuse).
   - Line of sight ya ladder ki length aur zameen par doori: **cos** (adjacent ÷ hypotenuse).
5. **Solve karo** exact value ke saath (√3 jaisi), phir decimal mein bhi likho.
6. **Answer units ke saath likho** aur **sense-check** karo: kya answer samajh mein aata hai? (45° mein height aur doori barabar honi chahiye; hypotenuse hamesha sabse lambi side hoti hai.)

Yaad rakhne ke liye values: tan 30° = 1/√3, tan 45° = 1, tan 60° = √3, sin 30° = 1/2, sin 60° = √3/2, cos 30° = √3/2, cos 60° = 1/2.

---

## Part C: Elevation ke solved examples

### Example 1: Minaret ki height (hamari kahani)

Doori = 30 m, angle of elevation = 30°. Height = h.

```
              * choti
            /|
          /  |
        /    |  h
      /      |
    / 30°    |
  R - - - - -+
      30 m   (base)
```

tan 30° = h / 30

h = 30 × tan 30° = 30 × (1/√3) = 30/√3 = 30√3/3 = **10√3 m ≈ 10 × 1.732 = 17.32 m**

Jaanch: tan 30° = 17.32/30 = 0.5773 aur 1/√3 = 1/1.732 = 0.5773 ✅

### Example 2: Tower ki height

Ek tower ke base se 20 m door khade ho kar choti ka angle of elevation 60° hai. Tower ki height?

tan 60° = h / 20

h = 20 × √3 = **20√3 m ≈ 20 × 1.732 = 34.64 m**

Jaanch: h/20 = 34.64/20 = 1.732 = √3 ✅

Sense-check: 60° bada angle hai, to height doori se zyada honi chahiye. Yahan 34.64 > 20 ✅.

### Example 3: Deewar par ladder

10 m lambi ladder zameen se 60° ka angle banati hai aur deewar se tiki hai. Deewar par ladder kitni ooncha pahunchti hai, aur ladder ka pair deewar se kitna door hai?

Ladder hypotenuse hai (10 m).

Height: sin 60° = h / 10, to h = 10 × (√3/2) = **5√3 m ≈ 5 × 1.732 = 8.66 m**

Doori: cos 60° = d / 10, to d = 10 × (1/2) = **5 m**

Jaanch (Pythagoras): h² + d² = 75 + 25 = 100 = 10² ✅
Decimal: 8.66² ≈ 75, 5² = 25, total 100 ✅

### Example 4: Rope ki length se height

100 m lambi rope (cable) ek khambe ki choti se zameen tak tani hai aur zameen se 30° ka angle banati hai. Khambe ki height?

sin 30° = h / 100

h = 100 × (1/2) = **50 m**

Jaanch: Rope hypotenuse hai (100) aur 30° ke saamne wali side hamesha hypotenuse ka aadha hoti hai: 100/2 = 50 ✅

### Example 5: Pole ki parchhai (shadow)

Suraj ka angle of elevation 45° hai. Ek 7 m ke pole ki parchhai kitni lambi hogi?

Pole height hai (7 m), parchhai zameen par doori hai.

tan 45° = 7 / shadow, aur tan 45° = 1

shadow = 7 / 1 = **7 m**

Jaanch: 45° par height aur parchhai hamesha **barabar** hoti hain, kyunki triangle ke dono acute angle 45° hain ✅

### Example 6: Tootta hua ped

Ek ped aandhi mein toot jaata hai, par bilkul alag nahi hota. Toota hua upar ka hissa jhuk kar apni choti zameen par ped ke pair se 6 m door tika deta hai, aur zameen ke saath 60° ka angle banata hai. Ped ki poori height pehle kitni thi?

Toote hue point se zameen tak ka seedha hissa = h (vertical). Jhuka hua hissa = l (hypotenuse).

h: tan 60° = h / 6, to h = 6√3 ≈ 6 × 1.732 = 10.39 m

l: cos 60° = 6 / l, to l = 6 / (1/2) = 12 m

Poori height = h + l = 6√3 + 12 ≈ 10.39 + 12 = **22.39 m**

Jaanch (Pythagoras): h² + 6² = (6√3)² + 36 = 108 + 36 = 144 = 12² ✅

---

## Part D: Depression ke solved examples

### Example 7: Building se gaadi

50 m oonchi building ki chhat se ek gaadi dikhti hai. Pehle depression 45° hai, phir wo gaadi door chali jaati hai aur depression 30° ho jaata hai. Dono jagah gaadi building ke base se kitni door thi?

Depression = neeche ke point ka elevation (alternate angles), isliye triangle mein gaadi wale kone par wahi angle aata hai.

**Pehla case (45°):**
tan 45° = 50 / d₁, to d₁ = 50 / 1 = **50 m**

**Doosra case (30°):**
tan 30° = 50 / d₂, to d₂ = 50 / (1/√3) = **50√3 m ≈ 50 × 1.732 = 86.6 m**

Jaanch: 50/86.6 = 0.5774 = 1/√3 ✅

Sense-check: depression kam hua to gaadi door gayi. 86.6 > 50 ✅. Gaadi 86.6 − 50 = 36.6 m aur door chali gayi.

### Example 8: Lighthouse aur nao

Ek lighthouse samudra ke tat par 60 m oonche tile par hai. Uski choti se ek nao ka depression 60° dikhta hai. Nao lighthouse ke base se kitni door hai?

tan 60° = 60 / d

d = 60 / √3 = 60√3 / 3 = **20√3 m ≈ 20 × 1.732 = 34.64 m**

Jaanch: 60 / 34.64 = 1.732 = √3 ✅

Agar line of sight (aankh se nao tak seedhi doori) poochte: sin 60° = 60 / L, to L = 60 / (√3/2) = 120/√3 = 40√3 ≈ 69.28 m. Pythagoras check: 60² + (20√3)² = 3600 + 1200 = 4800 = (40√3)² ✅

---

## Part E: Do angles wale sawaal (thoda mushkil, extra)

### Example 9: Kareeb jaane par angle badhta hai

Ek tower ke base ki taraf jaate hue, ek point se tower ki choti ka angle of elevation 30° hai. Wahan se 20 m tower ki taraf chalne par angle 60° ho jaata hai. Tower ki height aur pehli jagah se doori nikalo.

```
      * choti
      |\
      | \
      |  \ 
    h |   \ 
      |    \ 
      |  60°\ 
      |      \      30°
      B------Q---------P
         x    20 m
```

Maan lo tower ke base se Q (kareeb wala point) ki doori x m hai. To pehle point P ki doori x + 20 m hogi. Height h.

Q se: tan 60° = h / x, to h = x√3 ... (1)
P se: tan 30° = h / (x + 20), to h = (x + 20)/√3 ... (2)

(1) aur (2) barabar: x√3 = (x + 20)/√3

Dono taraf √3 se guna karo: 3x = x + 20, to 2x = 20, x = 10

Height: h = 10√3 ≈ 10 × 1.732 = **17.32 m**

Pehli jagah se doori: x + 20 = **30 m**

Jaanch:
- P se: h/30 = 17.32/30 = 0.5773 = tan 30° ✅
- Q se: h/10 = 17.32/10 = 1.732 = tan 60° ✅

Dilchasp baat: ye wahi 30 m aur 17.32 m hain jo Reena ko minaret ke liye mile the. Matlab ek hi minaret ko 30 m door se 30° par dekha, aur 10 m door se 60° par dekha, dono baar height ek hi aayi. Ye sab ek doosre se mel khate hain.

---

## Part F: Kahani solve karte hain

Reena ke paas data tha: doori 30 m, elevation 30°.

h = 30 tan 30° = 10√3 ≈ **17.32 m** (Example 1)

**Ek refinement (thoda sudhaar):** Reena ne clinometer apni aankh se dekha, zameen se nahi. Agar uski aankh zameen se **1.5 m** ooncha hai, to jo 17.32 m humne nikala wo aankh ke level se choti tak ki height hai. Minaret ki asli height = 17.32 + 1.5 = **18.82 m** (approx).

```
         * choti
       / |
     /   |  17.32 m (aankh se upar)
   /30°  |
  . - - -+ - - aankh ka level
  |      |  1.5 m
  +------+  zameen
   30 m
```

Mr. Chaudhary ne kaha, "Dekha, bina chadhe minaret naap li! Reena, ab bata, ye answer 17.32 hai ya 18.82?" Reena ne hans kar kaha, "Sir, dono! 17.32 aankh se upar ka hissa hai, aur 1.5 m aankh se neeche ka. Poori minaret ke liye dono jodne padenge."

---

## Aam galtiyan (bachke rehna)

**Galti 1: Figure na banana**
Bina figure ke pata hi nahi chalta ki kaun si side opposite hai aur kaun si adjacent. Hamesha pehle figure.

**Galti 2: Depression ko vertical se naapna**
Angle of depression **horizontal** se naapa jaata hai. Agar kisi ne 30° depression ko vertical (khade line) se maan liya, to triangle ka angle 60° ho jayega aur answer galat aayega.
Example 7 mein 30° depression ko vertical se maan lete to gaadi wale kone par 60° le lete, aur tan 60° = 50/d se d = 50/√3 ≈ 28.87 m aata, jo galat hai. Sahi tareeka: horizontal se angle, to d = 50/tan 30° = 50√3 ≈ 86.6 m.

**Galti 3: tan ki jagah sin ya cos chun lena**
Height aur doori (base) di hai to **tan**. Example 1 mein agar sin 30° = h/30 likhte to h = 15 aata, jo galat hai, kyunki 30 m hypotenuse nahi, zameen par doori hai. Sahi: tan 30° se 17.32.

**Galti 4: Observer ki height jodna bhool jaana**
Agar sawaal mein aankh ki height di hai (jaise 1.5 m), to final answer mein usko jodo. Example: 17.32 + 1.5 = 18.82 m.

**Galti 5: Answer sirf surd mein chhod dena**
"10√3 m" sahi hai, par sawaal height naapne ka hai. Usko decimal mein bhi likho: 17.32 m. Dono rakhne se sense-check aasaan hota hai.

**Galti 6: Units mix karna**
Ek hi sawaal mein agar doori meter mein hai aur height cm mein, to pehle ek hi unit mein badlo. Jaise 30 m aur 150 cm (aankh ki height): 150 cm = 1.5 m, tab jodo.

---

## Quick Recap

- **Line of sight** = aankh se object tak ki seedhi line. **Horizontal line** = aankh ke level ki seedhi line.
- **Angle of elevation** = upar dekhne par horizontal aur line of sight ke beech ka angle.
- **Angle of depression** = neeche dekhne par horizontal aur line of sight ke beech ka angle.
- Upar se depression = neeche se elevation (alternate angles, parallel horizontals).
- **Tareeka:** figure, right triangle, sides mark, ratio chuno, solve, units, sense-check.
- Height aur base: **tan**. Hypotenuse aur height: **sin**. Hypotenuse aur base: **cos**.
- Aankh ki height ho to jodo. Answer exact aur decimal dono mein do.
- Do angles wale sawaal mein ek hi height ke do equations banao aur barabar karo.

---

## Practice Questions

1. A tower casts a shadow of 15 m when the sun's angle of elevation is 60°. Find the height of the tower (use √3 ≈ 1.732).

2. An 8 m ladder makes an angle of 30° with the ground. How high up the wall does it reach, and how far is its foot from the wall?

3. Reena stands 40 m from a building and measures the angle of elevation of its top as 45°. Her eyes are 1.6 m above the ground. Find the height of the building.

4. From the top of a 100 m high cliff, the angle of depression of a boat is 30°. How far is the boat from the foot of the cliff? (Use √3 ≈ 1.732.)

5. A wire is stretched from the top of a pole to the ground and makes an angle of 60° with the ground. The wire is 24 m long. Find the height of the pole and the distance of the wire's foot from the pole.

6. A tree breaks in a storm and its top touches the ground 5 m from the foot of the tree, making an angle of 30° with the ground. Find the total height of the tree before it broke (use √3 ≈ 1.732).

7. Say whether each statement is true or false, giving a reason.
   (a) The angle of depression of a car from a building's top equals the angle of elevation of the building's top from the car.
   (b) The angle of elevation is measured from the vertical line.
   (c) If you walk closer to a tower, the angle of elevation of its top increases.

8. From a point P on the ground, the angle of elevation of the top of a tower is 30°. After walking 40 m towards the tower, it becomes 60°. Find the height of the tower and the original distance of P from its base. (Extra)

9. Mr. Chaudhary stands 12 m from a flag pole and finds the angle of elevation of its top is 60°. His eye level is 1.5 m above the ground. Find the height of the flag pole (use √3 ≈ 1.732).

10. A student solved this question: "From a 50 m building the angle of depression of a car is 30°. Find the car's distance from the base." She wrote tan 30° = d/50 and got d = 50/√3. What mistake did she make, and what is the correct answer?

### Answers

1. tan 60° = h/15, to h = 15√3 = 15 × 1.732 = **25.98 m**
   Jaanch: 25.98/15 = 1.732 = tan 60° ✅

2. Height: sin 30° = h/8, to h = 8 × 1/2 = **4 m**
   Foot ki doori: cos 30° = d/8, to d = 8 × √3/2 = 4√3 = 4 × 1.732 = **6.93 m**
   Jaanch: 4² + 6.93² = 16 + 48 = 64 = 8² ✅

3. tan 45° = h₁/40, to h₁ = 40 m (aankh ke level se upar). Aankh ki height jodo: 40 + 1.6 = **41.6 m**.
   Jaanch: 45° par height aur doori barabar, 40 = 40 ✅

4. Cliff ke upar se depression = boat se elevation. tan 30° = 100/d, to d = 100/(1/√3) = 100√3 = 100 × 1.732 = **173.2 m**
   Jaanch: 100/173.2 = 0.5774 = 1/√3 ✅

5. Wire hypotenuse hai (24 m). Height: sin 60° = h/24, to h = 24 × √3/2 = 12√3 = 12 × 1.732 = **20.78 m**.
   Doori: cos 60° = d/24, to d = 24 × 1/2 = **12 m**.
   Jaanch: (12√3)² + 12² = 432 + 144 = 576 = 24² ✅

6. Jhuka hua hissa l, seedha hissa h. cos 30° = 5/l, to l = 5/(√3/2) = 10/√3 ≈ 10/1.732 = 5.77 m.
   tan 30° = h/5, to h = 5/√3 ≈ 2.89 m.
   Total = h + l = 5/√3 + 10/√3 = 15/√3 = 5√3 = 5 × 1.732 = **8.66 m**
   Jaanch: h² + 5² = 25/3 + 25 = 100/3, aur l² = 100/3 ✅

7. (a) **True** ✅. Dono angle alternate angles hain (do parallel horizontal lines aur line of sight), isliye barabar.
   (b) **False** ❌. Elevation **horizontal** se naapa jaata hai, vertical se nahi.
   (c) **True** ✅. Doori kam hone par tan θ = height/doori bada ho jata hai, to θ bhi bada hota hai. Example 9 mein 30 m se 30°, aur 10 m se 60° tha.

8. Maan lo kareeb point Q ki doori x, to P ki doori x + 40.
   Q se: h = x tan 60° = x√3. P se: h = (x + 40)/√3.
   x√3 = (x + 40)/√3, to 3x = x + 40, x = 20.
   h = 20√3 = 20 × 1.732 = **34.64 m**, aur P ki original doori = 20 + 40 = **60 m**.
   Jaanch: 60/√3 = 20√3 ✅ (30° wala), aur 20 × √3 = 20√3 ✅ (60° wala)

9. tan 60° = h₁/12, to h₁ = 12√3 = 12 × 1.732 = 20.78 m. Aankh ki height jodo: 20.78 + 1.5 = **22.28 m**.
   Jaanch: 20.78/12 = 1.732 = tan 60° ✅

10. Uski galti ratio ulta likhna thi. Alternate angle se car wale kone par 30° hai. Us triangle mein 50 m angle ke **opposite** hai aur d **adjacent**, to tan 30° = 50/d hona chahiye, d/50 nahi.
    Sahi: d = 50/tan 30° = 50√3 = 50 × 1.732 = **86.6 m**.
    Jaanch: 50/86.6 = 0.5774 = tan 30° ✅. Uska 50/√3 ≈ 28.87 m sense-check mein fail hota hai: 30° depression par car 50 m se zyada door honi chahiye.

---

Aap ab sirf ratio nahi jaante, aap un se asli duniya ki unchai bhi naap sakte ho. Ek protractor, ek straw aur ek dhaaga, bas itna kaafi hai. Aap ye kar sakte ho!

---

# Chapter Wrap-up: Trigonometry

| Topic | Kya seekha | Sabse kaam ki baat |
|---|---|---|
| 1. Right Triangle ke Teen Naam | Kisi angle ke hisaab se hypotenuse, opposite aur adjacent | Opposite aur adjacent angle ke hisaab se badalte hain, hypotenuse nahi |
| 2. Sin, Cos aur Tan | Teen ratios sides se banti hain | Ratio ki value sirf angle par depend karti hai, triangle ke size par nahi |
| 3. Cosec, Sec aur Cot | Teen aur ratios, jo sin, cos, tan ke reciprocal hain | cosec = 1/sin, sec = 1/cos, cot = 1/tan |
| 4. Standard Angles | 0°, 30°, 45°, 60°, 90° ki exact values | Value ek baar yaad ho gayi to bahut sawaal turant hote hain |
| 5. Ek Ratio se Baaki Ratios aur Triangle Hal Karna | Ek ratio di ho to baaki sab nikalna, aur triangle solve karna | Triangle banao, Pythagoras se teesri side nikalo |
| 6. Complementary Angles aur Identities | Complementary pairs (jaise sin(90° − θ) = cos θ) aur teen identities | sin²θ + cos²θ = 1 sabse zyada kaam aati hai |
| 7. Unchai aur Doori ke Sawaal | Elevation, depression, figure banakar asli doori aur unchai nikalna | Figure, right triangle, sahi ratio, units, sense-check |

### Standard angles ki table

(√2 ≈ 1.414 aur √3 ≈ 1.732 maane gaye hain.)

| Ratio | 0° | 30° | 45° | 60° | 90° |
|---|---|---|---|---|---|
| sin | 0 | 1/2 | 1/√2 (≈ 0.707) | √3/2 (≈ 0.866) | 1 |
| cos | 1 | √3/2 (≈ 0.866) | 1/√2 (≈ 0.707) | 1/2 | 0 |
| tan | 0 | 1/√3 (≈ 0.577) | 1 | √3 (≈ 1.732) | not defined |
| cosec | not defined | 2 | √2 (≈ 1.414) | 2/√3 (≈ 1.155) | 1 |
| sec | 1 | 2/√3 (≈ 1.155) | √2 (≈ 1.414) | 2 | not defined |
| cot | not defined | √3 (≈ 1.732) | 1 | 1/√3 (≈ 0.577) | 0 |

### Saari key relations

| Kya | Relation |
|---|---|
| Teen ratios | sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, tan θ = opposite/adjacent |
| Reciprocals | cosec θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ |
| tan aur cot ka sin-cos se rishta | tan θ = sin θ ÷ cos θ, cot θ = cos θ ÷ sin θ |
| Complementary pairs | sin(90° − θ) = cos θ, cos(90° − θ) = sin θ, tan(90° − θ) = cot θ, cot(90° − θ) = tan θ, sec(90° − θ) = cosec θ, cosec(90° − θ) = sec θ |
| Identity 1 | sin²θ + cos²θ = 1 |
| Identity 2 | 1 + tan²θ = sec²θ |
| Identity 3 | 1 + cot²θ = cosec²θ |
| Heights and distances | Height aur base: tan. Height aur hypotenuse: sin. Base aur hypotenuse: cos |

---

Minaret ho ya mobile tower, ab aap bina chadhe uski unchai nikal sakte ho: bas ek angle, ek doori aur ek sahi ratio chahiye.
