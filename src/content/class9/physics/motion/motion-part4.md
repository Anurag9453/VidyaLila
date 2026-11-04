# Chapter: Motion (Gati) (Part 4)

> **Class:** 9 | **Subject:** Physics
> **Ye file [motion-part3.md](motion-part3.md) se aage chalti hai** (wahan speed, velocity, average speed aur average velocity the). Chapter ki shuruaat [motion.md](motion.md) mein hai.
> **Topics covered in this file:**
> 4. Acceleration

---

# Topic 4: Acceleration

Pichhle topic mein humne dekha ki speed batati hai ki cheez **kitni tez** chal rahi hai, aur velocity batati hai ki **kitni tez aur kis disha mein** chal rahi hai. Lekin zindagi mein koi bhi gaadi hamesha ek hi speed se nahi chalti: kabhi tez hoti hai, kabhi dheemi. To ek naya sawal uthta hai: **velocity khud kitni tezi se badal rahi hai?** Is sawal ka jawab hai **acceleration**.

---

## Go-kart track par Zayn ki pehli race

Zayn pehli baar go-kart track par aaya tha. Instructor Ms. Dutta ne use helmet pehnaya, seat belt kasi, aur kaha, "Zayn, seedhe track par sirf do kaam karne hain: accelerator dabana aur brake dabana. Baaki main dekh lungi."

Zayn ne dheere se accelerator dabaya. Kart aage sarka, aur dekhte hi dekhte uski speed **0 se 18 m/s** ho gayi, wo bhi sirf **6 second** mein. Zayn ko laga jaise koi use seat ke peeche **dhakel** raha hai.

Ms. Dutta ne awaaz lagayi, "Ab brake dabao!" Zayn ne brake dabaya, aur kart ki speed **18 m/s se 0** ho gayi, sirf **3 second** mein. Is baar Zayn ko laga jaise koi use **aage ki taraf phenk** raha hai. Wo seat belt ko pakad kar hans diya.

Ms. Dutta boli, "Dono baar speed badli. Par ek baar 6 second mein 18 m/s tak gayi, aur doosri baar 3 second mein wapas 0. Kaun si baar velocity zyada tezi se badli, aur usse hum ek number mein kaise bata sakte hain?" Is kahani ko hum topic ke beech mein number ke saath solve karenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Acceleration** | Velocity badalne ki dar: har second mein velocity kitni badli | 3 m/s² |
| **Initial velocity (u)** | Shuru mein (jab hum dekhna shuru karein) velocity | Kart ke start par u = 0 |
| **Final velocity (v)** | Aakhir mein (jab hum dekhna band karein) velocity | 6 s baad v = 18 m/s |
| **Positive acceleration** | Chuni hui positive disha mein velocity badh rahi hai | +3 m/s² |
| **Negative acceleration / Retardation** | Chuni hui positive disha mein chal rahi cheez ki velocity ghat rahi hai (ya cheez dheemi ho rahi hai) | −6 m/s² |
| **Uniform acceleration** | Barabar time mein velocity mein barabar badlav | Har second mein 2 m/s badhna |
| **Non-uniform acceleration** | Barabar time mein velocity mein alag-alag badlav | Kabhi 1, kabhi 4, kabhi 2 m/s per second |

---

## Part A: Acceleration kya hai aur kaise nikalte hain

Seedhi si baat: kisi cheez ki velocity badli to usme **acceleration** hai. Kitni velocity badli, ye hum **kitne time mein** badli uske saath dekhte hain.

> **Acceleration = velocity mein badlav ÷ lagne wala time**
>
> **a = (v − u) ÷ t**

Yahan:
- **u** = initial velocity (shuruaati), **v** = final velocity (aakhri), **t** = time.
- (v − u) ko **velocity mein badlav** kehte hain: hamesha **aakhri minus shuruaati**.

**SI unit:** velocity ka unit m/s hai aur time ka s, to acceleration ka unit hai

> m/s ÷ s = **m/s²** (metre per second square)

**Matlab kya hai:** acceleration ka matlab hai **"har second mein velocity kitni badal rahi hai"**.

### a = 2 m/s² ka matlab

Maan lo ek cheez ruki hui hai (u = 0) aur uski acceleration 2 m/s² hai. To **har second mein uski velocity 2 m/s badhti jaayegi**:

| Time (s) | Velocity (m/s) | Is second mein badlav |
|---|---|---|
| 0 | 0 | (shuruaat) |
| 1 | 2 | +2 m/s |
| 2 | 4 | +2 m/s |
| 3 | 6 | +2 m/s |
| 4 | 8 | +2 m/s |
| 5 | 10 | +2 m/s |

Har row mein velocity 2 m/s badhi: yehi hai "2 m/s²". Note: "m/s²" ko "m/s per second" padhna sabse aasan hai: har second ek aur 2 m/s.

### Zayn ka kart: 0 se 18 m/s

Zayn ke kart ki speed har second kitni thi? Neeche ek **number-line** par har second ki speed dikhayi hai (jaise a = 3 m/s²):

```
 t = 0 s    1 s     2 s     3 s     4 s     5 s     6 s
   0   -->   3  -->  6  -->  9  --> 12  --> 15  --> 18     (m/s)
     +3      +3      +3      +3      +3      +3
```

> **Figure 4.1** – Zayn ke kart ki speed har second par: 0, 3, 6, 9, 12, 15, 18 m/s. Har second mein speed 3 m/s badhi.

Ab formula se:

**Example 1 (kahani, accelerator):** u = 0, v = 18 m/s, t = 6 s.

- a = (v − u) ÷ t = (18 m/s − 0 m/s) ÷ 6 s = 18 m/s ÷ 6 s = **3 m/s²**

**Jaanch:** 3 m/s² × 6 s = 18 m/s, aur 0 + 18 = 18 m/s ✅

Yani har second mein kart ki speed 3 m/s badhti hai, jo figure ke saath bhi match karta hai.

---

## Part B: Positive aur negative acceleration (retardation)

Seedhi line par chalne ke liye hum ek disha **positive** maan lete hain (jaise daayein, ya aage ko +) aur ulti disha **negative**. Velocity aur acceleration dono ko ek **sign** milta hai.

### Jab cheez dheemi ho

**Example 2 (kahani, brake):** u = 18 m/s, v = 0, t = 3 s. Disha: kart ke chalne ki disha positive.

- a = (v − u) ÷ t = (0 m/s − 18 m/s) ÷ 3 s = (−18 m/s) ÷ 3 s = **−6 m/s²**

**Jaanch:** −6 m/s² × 3 s = −18 m/s, aur 18 + (−18) = 0 m/s ✅

Yahan acceleration **negative** nikli. Brake dabane par har second mein speed 6 m/s **ghat** rahi hai. Number-line:

```
 t = 0 s    1 s     2 s     3 s
  18   -->  12  -->  6  -->  0         (m/s)
     -6      -6      -6
```

> **Figure 4.2** – Brake dabane par kart ki speed har second par: 18, 12, 6, 0 m/s. Har second mein speed 6 m/s ghati.

Isi ko **negative acceleration** ya **retardation** (ya deceleration) kehte hain: **jab cheez dheemi ho rahi ho.**

### Ek zaroori baat: "negative speed" nahi hota

Dhyan do: retardation ka matlab ye nahi ki speed negative ho gayi. **Speed hamesha positive (ya zero) hoti hai.** Kart ki speed 18, 12, 6, 0 thi: koi bhi value negative nahi. Negative sirf **acceleration** hai, jo batati hai ki velocity ghat rahi hai.

Ye bhi dhyan rakho ki retardation ka sirf **maan (magnitude)** poochha jaaye to ham positive likhte hain. Zayn ke kart ki retardation **6 m/s²** hai, aur acceleration **−6 m/s²** hai.

### Sign kaise tay hota hai: 4 sthitiyan

Sign sirf "tez ya dheemi" par nahi, **disha** par bhi nirbhar hai. Maan lo seedhi line par aage (daayein) ko positive chuna hai.

| Cheez kis disha mein chal rahi hai | Tez ho rahi hai ya dheemi | Acceleration ka sign |
|---|---|---|
| Positive disha mein | Tez ho rahi hai | **Positive (+)** |
| Positive disha mein | Dheemi ho rahi hai | **Negative (−)** |
| Negative disha mein | Tez ho rahi hai | **Negative (−)** |
| Negative disha mein | Dheemi ho rahi hai | **Positive (+)** |

Teesri aur chauthi row thodi ulti lagti hain, isliye ek sacchi misaal se samjhein.

**Teesri row:** ek car ulti (negative) disha mein chal rahi hai. Uski velocity −5 m/s se −15 m/s ho gayi (speed 5 se 15 ho gayi, yaani tez hui). Velocity ka badlav = −15 − (−5) = −10 m/s: ye negative hai. To acceleration negative hai, **chahe car tez ho rahi ho.** Acceleration ka sign us disha ko dikhata hai jis taraf velocity **badal rahi hai**: yahan velocity aur zyada negative ho rahi hai.

**Chauthi row:** car negative disha mein −12 m/s se −4 m/s par aayi (dheemi hui). Badlav = −4 − (−12) = +8 m/s, positive. To acceleration positive hai, chahe car dheemi ho rahi ho.

Sahi sochne ka tarika: acceleration ka sign **(v − u)** ka sign hai. Aur hum aam taur par "retardation" us sthiti ko kehte hain jisme **cheez dheemi ho rahi ho**, chahe sign kuch bhi ho.

**Example 3 (negative disha mein tez hona):** Ek car negative disha mein chal rahi hai. u = −5 m/s, v = −15 m/s, t = 5 s. Acceleration?

- a = (v − u) ÷ t = (−15 m/s − (−5 m/s)) ÷ 5 s = (−10 m/s) ÷ 5 s = **−2 m/s²**

**Jaanch:** u + a × t = −5 m/s + (−2 m/s²)(5 s) = −5 − 10 = −15 m/s ✅. Car tez hui, aur a negative hai (negative disha mein velocity badh rahi hai).

**Example 4 (negative disha mein dheemi hona):** Car negative disha mein chal rahi hai. u = −12 m/s, v = −4 m/s, t = 4 s.

- a = (v − u) ÷ t = (−4 m/s − (−12 m/s)) ÷ 4 s = (+8 m/s) ÷ 4 s = **+2 m/s²**

**Jaanch:** −12 m/s + (2 m/s²)(4 s) = −12 + 8 = −4 m/s ✅. Car dheemi hui, par a positive hai.

---

## Part C: Uniform aur non-uniform acceleration

### Uniform acceleration

Agar **barabar time mein velocity mein barabar badlav** ho, to acceleration **uniform** (ek-sa) hai. Hamari 2 m/s² wali table mein har second mein +2 m/s hi badla, to wo uniform acceleration thi. Zayn ke kart ke 18, 12, 6, 0 mein bhi har second −6 m/s tha: uniform.

### Non-uniform acceleration

Agar barabar time mein velocity ka badlav **alag-alag** ho, to acceleration **non-uniform** hai. Jaise ek bus jo traffic mein hai: pehle second mein speed 0 se 1 m/s, agle second mein 1 se 5 m/s, phir 5 se 6 m/s. Har second ka badlav alag hai (1, 4, 1 m/s): non-uniform.

**Misaal:** jab ek patthar ooncha se neeche girta hai (**free fall**), uski acceleration uniform hoti hai. Ye hum **Gravitation chapter mein** dekhenge. Abhi sirf naam yaad rakho.

### Ek aur zaroori baat: velocity ek-sa ho to acceleration zero

Agar velocity **bilkul nahi badal rahi** (na magnitude, na disha), to v − u = 0, aur

> a = 0 ÷ t = **0 m/s²**

**Uniform velocity = zero acceleration.** Seedhi, ek-sa speed se chalti train mein khade ho kar aapko acceleration mehsoos nahi hoti, aur Zayn ko bhi nahi hoti jab kart ek-sa 18 m/s par seedha chalta hai.

---

## Part D: Velocity do tarah se badal sakti hai

Velocity mein **speed** (kitni tez) aur **disha** (kis taraf) dono shamil hote hain. Isliye velocity do tarah se badal sakti hai:

1. **Magnitude (speed) badle:** kart tez ya dheemi ho.
2. **Disha badle:** speed wahi rahe, par cheez mud jaaye.

Dono hi tarah se velocity badle to **acceleration hoti hai.**

Ek vehicle jo **mod (curve)** par **ek-sa speed** se mud raha hai, uski speed to wahi hai, par disha har pal badal rahi hai. Is liye wo bhi **accelerate** kar raha hai. Ye abhi sirf ek jhalak hai: iski poori baat hum **Topic 7** mein karenge.

---

## Part E: Zayn ka sawaal aur kuch aur solved examples

### Zayn ka kaam kisne zyada kiya?

Ab Ms. Dutta ke sawaal par aate hain: kis baar velocity zyada tezi se badli?

- Accelerator dabane par: a = **+3 m/s²**
- Brake dabane par: a = **−6 m/s²** (retardation = 6 m/s²)

Brake mein velocity **2 guna** tezi se badli (6 ÷ 3 = 2). Isliye Zayn ko brake dabate waqt aage zyada zor se jhatka laga.

**Zayn ko kya mehsoos hua:** speeding up mein wo peeche seat ki taraf dab gaya, aur braking mein aage ki taraf jhuk gaya. Iske peeche ka kaaran **Force aur Laws of Motion** chapter mein samjhenge. Abhi itna jaano ki jab acceleration badi hoti hai, to ye "dhakka" bhi zyada mehsoos hota hai.

### Ab kuch aur examples

**Example 5 (a nikalna):** Ek car 10 m/s se 30 m/s tak 5 s mein pahunchti hai. Acceleration?

- a = (30 m/s − 10 m/s) ÷ 5 s = 20 m/s ÷ 5 s = **4 m/s²**

**Jaanch:** 10 m/s + 4 m/s² × 5 s = 10 + 20 = 30 m/s ✅

**Example 6 (final velocity nikalna):** Ek cycle ki shuruaati velocity 5 m/s hai aur uski acceleration 2 m/s² hai. 4 s baad velocity kitni hogi?

Formula a = (v − u) ÷ t ko ulta karo: **v = u + a × t**

- v = 5 m/s + (2 m/s²)(4 s) = 5 m/s + 8 m/s = **13 m/s**

**Jaanch:** (13 − 5) ÷ 4 = 8 ÷ 4 = 2 m/s² ✅

**Example 7 (time nikalna):** Ek ruki hui (u = 0) scooter ko 3 m/s² ki acceleration se 24 m/s ki velocity tak pahunchne mein kitna time lagega?

Formula se: **t = (v − u) ÷ a**

- t = (24 m/s − 0 m/s) ÷ 3 m/s² = 24 m/s ÷ 3 m/s² = **8 s**

**Jaanch:** 3 m/s² × 8 s = 24 m/s ✅

**Example 8 (retardation):** Ek bus 20 m/s se chal rahi hai. Brake dabane par wo 5 s mein ruk jaati hai. Acceleration aur retardation?

- a = (0 m/s − 20 m/s) ÷ 5 s = (−20 m/s) ÷ 5 s = **−4 m/s²**
- Retardation = **4 m/s²**

**Jaanch:** 20 m/s + (−4 m/s²)(5 s) = 20 − 20 = 0 m/s ✅

**Example 9 (pehle km/h ko m/s mein badlo):** Ek train 36 km/h se 72 km/h tak 20 s mein pahunchti hai. Acceleration?

Pehle dono velocity ko m/s mein badlo (1 km/h = 1 ÷ 3.6 m/s, jo Topic 3 mein dekha tha):

- u = 36 km/h = 36 ÷ 3.6 = **10 m/s**
- v = 72 km/h = 72 ÷ 3.6 = **20 m/s**

Ab:

- a = (20 m/s − 10 m/s) ÷ 20 s = 10 m/s ÷ 20 s = **0.5 m/s²**

**Jaanch:** 10 m/s + 0.5 m/s² × 20 s = 10 + 10 = 20 m/s ✅

**Example 10 (do cars ki tulna):** Car A ruki hui hai (u = 0) aur 5 s mein 20 m/s tak pahunchti hai. Car B bhi ruki hai aur 10 s mein 30 m/s tak pahunchti hai. Kaun si car zyada tezi se tez hoti hai?

- Car A: a = (20 − 0) m/s ÷ 5 s = **4 m/s²**
- Car B: a = (30 − 0) m/s ÷ 10 s = **3 m/s²**

Car A ki acceleration zyada hai (4 > 3), isliye **Car A** zyada tezi se tez hoti hai, chahe Car B aakhir mein zyada speed tak pahunchi. Final speed nahi, **har second ka badlav** matlab rakhta hai.

**Jaanch:** Car A: 4 m/s² × 5 s = 20 m/s ✅. Car B: 3 m/s² × 10 s = 30 m/s ✅

**Example 11 (brake lagne ke baad velocity):** Ek car 25 m/s se chal rahi hai aur brake ki wajah se uski acceleration −5 m/s² hai. 3 s baad velocity? Aur kitne second mein ruk jayegi?

- v = u + a × t = 25 m/s + (−5 m/s²)(3 s) = 25 − 15 = **10 m/s**
- Rukne ke liye v = 0: t = (0 − 25) m/s ÷ (−5 m/s²) = **5 s**

**Jaanch:** 25 + (−5)(5) = 0 m/s ✅

---

## Aam galtiyan (bachke rehna)

**Galti 1: Retardation ko "negative speed" kehna**

Retardation ka matlab hai ki cheez **dheemi ho rahi hai**. Speed negative nahi hoti: Zayn ke kart ki speed 18, 12, 6, 0 thi. Negative sirf **acceleration** hai (−6 m/s²).

**Galti 2: Samajhna ki velocity zero hai to acceleration bhi zero hogi**

Ye hamesha sach nahi. Acceleration ka matlab hai **velocity badal rahi hai**, na ki velocity kitni hai. Ek aisi sthiti ke baare mein sochiye: agar koi cheez **ek pal ke liye** rukti hai (velocity 0) par us pal bhi uski velocity badal rahi hai, to uska acceleration zero nahi hoga. Ek ball ko upar fenko to sabse upar kya hoga? Is sawal ka jawab hum Gravitation chapter mein dekhenge. Abhi sirf sawal yaad rakho.

**Galti 3: km/h ko m/s mein badle bina m/s² likhna**

Train ka example (Example 9): agar 36 aur 72 seedha le lo to (72 − 36) ÷ 20 = 1.8: ye na to m/s² hai, na sahi. Pehle m/s mein badlo: 10 aur 20, tab a = 0.5 m/s².

**Galti 4: u aur v ko ulta likhna**

Sahi: a = (**v − u**) ÷ t. Zayn ke brake mein agar (u − v) = 18 − 0 = 18 likh diya, to a = +6 aa jayega, jabki sahi hai −6 m/s². **Aakhri minus shuruaati**, hamesha.

**Galti 5: Unit m/s likhna, m/s² ki jagah**

Acceleration ka unit **m/s²** hai. "m/s" velocity ka unit hai. Example 1 mein jawab 3 m/s² hai, 3 m/s nahi.

**Galti 6: Sochna ki constant speed ka matlab hamesha zero acceleration**

Constant speed par bhi agar disha badal rahi hai (jaise curve par), to velocity badal rahi hai, to acceleration hai. Zero acceleration tabhi hai jab speed **aur** disha dono ek-se hon.

---

## Quick Recap

- **Acceleration = velocity mein badlav ÷ time = (v − u) ÷ t.** Matlab: har second mein velocity kitni badal rahi hai.
- **SI unit: m/s².** a = 2 m/s² ka matlab hai har second mein velocity 2 m/s badhna.
- **Positive acceleration:** positive disha mein velocity badh rahi hai. **Retardation:** cheez dheemi ho rahi hai; positive disha mein chalti cheez dheemi ho to acceleration negative hoti hai (par negative acceleration ka matlab hamesha dheemi hona nahi, 4 sthitiyan dekho). Speed kabhi negative nahi hoti.
- **Sign:** positive disha mein tez: +. Positive disha mein dheemi: −. Negative disha mein tez: −. Negative disha mein dheemi: +.
- **Uniform acceleration:** barabar time mein barabar velocity-badlav. Agar badlav alag-alag ho to non-uniform. Free fall ki baat Gravitation chapter mein.
- **Uniform velocity = zero acceleration.**
- Velocity **magnitude** ya **disha** badalne se badalti hai. Constant speed par mud rahi cheez bhi accelerate kar rahi hai (Topic 7).
- Km/h ko pehle m/s mein badlo, phir m/s² mein jawab nikalo.
- **Kahani ka jawab:** accelerator: a = (18 − 0) ÷ 6 = 3 m/s². Brake: a = (0 − 18) ÷ 3 = −6 m/s² (retardation 6 m/s²).

---

## Practice Questions

1. A car's velocity changes from 4 m/s to 16 m/s in 3 s. Find its acceleration.

2. A motorbike starting from rest reaches 27 m/s in 9 s. Find its acceleration. How much does its velocity change in each second?

3. A cyclist has an initial velocity of 2 m/s and an acceleration of 3 m/s². Find the velocity after 5 s.

4. A bike moving at 15 m/s is brought to rest in 5 s. Find its acceleration and its retardation. Is the acceleration positive or negative? Why?

5. A train's speed changes from 54 km/h to 90 km/h in 10 s. Convert the speeds to m/s first and then find the acceleration.

6. A boat starting from rest moves with an acceleration of 2.5 m/s². How long does it take to reach 20 m/s?

7. Car A goes from 10 m/s to 20 m/s in 4 s. Car B goes from 0 to 18 m/s in 9 s. Which car has the greater acceleration? Show the working.

8. A car moves in the negative direction. Its velocity changes from −8 m/s to −20 m/s in 6 s. Find its acceleration. Is the car speeding up or slowing down? Why is the acceleration negative?

9. State True or False:
   (a) A negative acceleration always means the object is slowing down.
   (b) If a body moves with uniform velocity, its acceleration is zero.
   (c) The SI unit of acceleration is m/s.
   (d) A car going round a curve at constant speed has zero acceleration.

10. Zayn's kart speeds up from 0 to 18 m/s in 6 s, and later slows down from 18 m/s to 0 in 3 s. Without using a calculator, explain which change has the greater acceleration, and by how many times.

### Answers

1. a = (16 m/s − 4 m/s) ÷ 3 s = 12 m/s ÷ 3 s = **4 m/s²**.
   Jaanch: 4 m/s + 4 m/s² × 3 s = 16 m/s ✅

2. a = (27 m/s − 0) ÷ 9 s = **3 m/s²**. Har second mein velocity **3 m/s** badhti hai.
   Jaanch: 3 m/s² × 9 s = 27 m/s ✅

3. v = u + a × t = 2 m/s + (3 m/s²)(5 s) = 2 + 15 = **17 m/s**.
   Jaanch: (17 − 2) ÷ 5 = 3 m/s² ✅

4. a = (0 − 15 m/s) ÷ 5 s = **−3 m/s²**. Retardation = **3 m/s²**. Acceleration negative hai kyunki cheez positive disha mein chal rahi hai aur dheemi ho rahi hai (velocity ghat rahi hai).
   Jaanch: 15 + (−3)(5) = 0 ✅

5. u = 54 ÷ 3.6 = 15 m/s, v = 90 ÷ 3.6 = 25 m/s. a = (25 − 15) m/s ÷ 10 s = **1 m/s²**.
   Jaanch: 15 + 1 × 10 = 25 m/s ✅

6. t = (20 m/s − 0) ÷ 2.5 m/s² = **8 s**.
   Jaanch: 2.5 × 8 = 20 m/s ✅

7. Car A: a = (20 − 10) ÷ 4 = 10 ÷ 4 = **2.5 m/s²**. Car B: a = (18 − 0) ÷ 9 = **2 m/s²**. **Car A** ki acceleration zyada hai (2.5 > 2).
   Jaanch: 10 + 2.5 × 4 = 20 m/s ✅, 2 × 9 = 18 m/s ✅

8. a = (−20 m/s − (−8 m/s)) ÷ 6 s = (−12 m/s) ÷ 6 s = **−2 m/s²**. Car **speeding up** hai (speed 8 se 20 m/s). Acceleration negative isliye hai ki velocity aur zyada negative ho rahi hai.
   Jaanch: −8 + (−2)(6) = −20 m/s ✅

9. (a) **False** ❌. Negative disha mein chal rahi cheez tez ho rahi ho to bhi acceleration negative hoti hai.
   (b) **True** ✅. Velocity badal hi nahi rahi, to a = 0.
   (c) **False** ❌. SI unit m/s² hai, m/s velocity ka unit hai.
   (d) **False** ❌. Speed constant hai par disha badal rahi hai, to velocity badal rahi hai aur acceleration hai.

10. Speeding up: a = 18 ÷ 6 = 3 m/s². Slowing down: a = −18 ÷ 3 = −6 m/s². Brake wale mein acceleration ka maan **2 guna** hai (6 ÷ 3 = 2), kyunki wahi 18 m/s ka badlav aadhe time mein hua.
    Jaanch: 3 × 6 = 18 ✅, 6 × 3 = 18 ✅

---

Ab aap Zayn ko bata sakte ho ki uske kart ki acceleration kitni thi, aur brake dabate waqt kitni tezi se velocity ghati. Agli baar kisi gaadi mein baitho to sochna: "Abhi meri velocity badal rahi hai ya nahi?"

**Aage kya?** Hum ab tak table aur number-line mein har second ki speed likh rahe the. Lekin ye saari baatein: kab speed badhi, kab ghati, kab ek-si rahi: **graph par ek nazar mein dikh jaati hain.** Ye kaise hota hai, ye hum Topic 5 mein dekhenge.
