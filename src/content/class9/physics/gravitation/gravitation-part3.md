# Chapter: Gravitation (Part 3)

> **Class:** 9 | **Subject:** Physics
> **Ye file [gravitation-part2.md](gravitation-part2.md) se aage chalti hai** (wahan universal law of gravitation, F = G m₁m₂/r² thi). Chapter ki shuruaat [gravitation.md](gravitation.md) mein hai.
> **Prior knowledge:** acceleration aur a = (v − u)/t ke liye [motion-part4.md](../motion/motion-part4.md), aur F = m a ke liye [force-and-laws-of-motion-part6.md](../force-and-laws-of-motion/force-and-laws-of-motion-part6.md) dekh sakte ho.
> **Topics covered in this file:**
> 3. Free Fall aur g

---

# Topic 3: Free Fall aur g

Pichhle topic mein humne gravitation ka formula seekha: **F = G m₁m₂/r²**. Usse hum do cheezon ke beech ki gravitational force nikaal sakte hain. Ant mein humne Earth ke surface par 1 kg ki cheez par force nikaali thi: **9.77 N**, yani lagbhag 9.8 N. Ab sawal ye hai: jab ye force kisi cheez par kaam karti hai aur wo cheez chhoot kar girti hai, to **wo kitni tezi se tez hoti hai**? Aur kya **heavy cheez sach mein zyada tezi se girti hai**? Is topic mein hum in dono sawalon ka jawab dhoondhenge.

---

## Lab mein sikka aur pankh

School ki physics lab mein ek kaanch ki lambi nali (tube) rakhi thi. Lab assistant Mr. Qadir aksar ye demonstration dikhate hain (ye ek jaana-pehchana prayog hai, kisi khaas ghatna ki baat nahi ho rahi). Aaj unki madad ke liye student Zoha khadi thi.

Nali ke andar ek **sikka** (coin) aur ek **pankh** (feather) rakhe the. Mr. Qadir bole, "Zoha, nali ko seedha khadi karke ulta kar do aur dekho pehle kaun neeche pahunchta hai."

Zoha ne nali ulti ki. Sikka **tezi se** neeche aa gaya, aur pankh **lahraata hua**, dheere-dheere neeche utra. Zoha boli, "Sir, ye to aasan hai: sikka bhaari hai, isliye pehle girta hai."

Mr. Qadir muskuraye, "Theek hai. Ab main nali ke andar ki hawa pump se bahar nikaalta hoon. Phir se ulta karo."

Pump chalu hua. Nali ki hawa nikal gayi. Zoha ne nali dobara ulti ki... aur ye kya! **Sikka aur pankh ek saath neeche pahunche.** Zoha ki aankhein badi ho gayin, "Sir, ab pankh itni jaldi kaise gir gaya?"

Is kahani ka jawab hum topic ke beech mein number ke saath solve karenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Free fall** | Cheez sirf gravity ki wajah se gir rahi hai, hawa ka asar na ginein | Vacuum nali mein girta sikka |
| **g (acceleration due to gravity)** | Free fall mein cheez ki acceleration | 9.8 m/s² (Earth par) |
| **G (gravitational constant)** | Universal law ka fixed number, har jagah ek jaisa | 6.67 × 10⁻¹¹ N m²/kg² |
| **Air resistance** | Hawa ka rukawat dalne wala force, cheez ko dheema karta hai | Pankh ka dheere girna |
| **Vacuum** | Aisi jagah jahan hawa nahi hai | Pump se khaali ki hui nali |
| **Terminal speed** | Wo speed jahan air resistance gravity ke barabar ho jaata hai (sirf naam, aage ki class mein) | Parachute se utarta insaan |

---

## Part A: Free fall kya hai

Kisi cheez ko haath se chhodo to wo neeche girti hai. Gravity usse neeche kheenchti hai. Agar us par **sirf gravity** kaam kar rahi ho (aur hawa ka rukawat itna kam ho ki hum use ignore kar sakein), to us girne ko **free fall** kehte hain.

Dhyan do:
- Free fall sirf "neeche girna" nahi hai. Upar phenki gayi cheez, jab wo haath se chhoot jaaye, wo bhi sirf gravity ke asar mein hoti hai. Uske baare mein Topic 4 mein baat hogi.
- Gravity ek **non-contact force** hai (Topic 1), isliye cheez ko chhune ki zarurat nahi: bas Earth khinchti rehti hai.

Topic 1 mein dekha tha ki gravity ki disha hamesha **Earth ke centre ki taraf** hoti hai. Isliye jahan bhi khade ho, "neeche" ka matlab hai Earth ke centre ki taraf:

```
          India
            |
            v
      .-----------.
     /             \
    |       *       |   * = Earth ka centre
     \             /
      '-----------'
            ^
            |
        Duniya ki doosri taraf
```

> **Figure 3.1** – Gravity ki disha hamesha Earth ke centre ki taraf hoti hai. India aur duniya ke doosri taraf wale dono jagah "neeche" ka matlab centre ki taraf hai.

---

## Part B: g ka formula: G M / R²

Ab sawal: free fall mein cheez ki acceleration kitni hoti hai? Hum **do formulas** ko saath mein dekhenge, jo humein pehle se aate hain.

**Formula 1 (Topic 2, universal law):** Earth (mass M) aur ek chhoti cheez (mass m) ke beech force, jab cheez Earth ke surface par ho (centre se distance = Earth ki radius R):

> F = G M m / R²

**Formula 2 (Newton ka doosra niyam, F = m a):** Cheez ki acceleration jise hum **g** kehte hain, to force

> F = m g

Dono formulas **ek hi force** ke baare mein hain (cheez par gravity ka force), isliye dono barabar honge:

> m g = G M m / R²

**Step 1:** Dono taraf **m** hai. Dono taraf se m kaat do (cancel):

> g = G M / R²

Yehi hai **g ka formula**. Ismein cheez ka mass m kahin nahi bacha: ye ek bahut zaroori baat hai, jise hum aage Part C mein dekhenge.

**Step 2:** Ab Earth ki values daalo: G = 6.67 × 10⁻¹¹ N m²/kg², M = 6 × 10²⁴ kg, R = 6.4 × 10⁶ m.

**Example 1 (Earth par g nikalna):**

- G × M = 6.67 × 10⁻¹¹ N m²/kg² × 6 × 10²⁴ kg = 40.02 × 10¹³ N m²/kg = 4.002 × 10¹⁴ N m²/kg
- R² = (6.4 × 10⁶ m)² = 40.96 × 10¹² m² = 4.096 × 10¹³ m²
- g = (4.002 × 10¹⁴ N m²/kg) ÷ (4.096 × 10¹³ m²) = **9.77 N/kg**, yani **9.77 m/s²**

Hum ise **lagbhag 9.8 m/s²** bolte hain (M aur R ke values bhi roughly diye gaye hain, isliye thoda sa farak aana theek hai).

**Jaanch:** 9.77 m/s² × 4.096 × 10¹³ m² = 4.002 × 10¹⁴ N m²/kg ✅

**Unit ke baare mein:** g ka unit **m/s²** hai kyunki ye acceleration hai. Lekin g = G M / R² mein units dekho: N m²/kg² × kg ÷ m² = **N/kg**. Yani

> 1 N/kg = 1 m/s²

Ye dono units ek hi cheez hain: "9.8 m/s²" ka matlab hai har second mein velocity 9.8 m/s badhna, aur "9.8 N/kg" ka matlab hai har 1 kg par 9.8 N ka force. Pichhle topic mein 1 kg par 9.77 N (lagbhag 9.8 N) aaya tha: wohi g ki value hai.

**Padhai mein 9.8 ya 10?** Bahut se problems mein aasan arithmetic ke liye **g = 10 m/s²** le lete hain. Jab bhi aisa karein, problem mein saaf likhein ki "g = 10 m/s² lete hain". Ek hi problem mein 9.8 aur 10 mix mat karna. Is file mein jahan kuch nahi likha, wahan g = 9.8 m/s² maano.

---

## Part C: g cheez ke mass par depend nahi karta

Dekho g = G M / R² mein sirf **G, M aur R** hain. Girne wali cheez ka mass m **nahi hai**. Matlab:

> **Free fall mein sabhi cheezein, chhoti ho ya badi, halki ho ya bhaari, ek hi acceleration se girti hain.**

Ye kaise ho sakta hai, jabki bhaari cheez par zyada force lagta hai? Dekho **do cheezon** par:

- 1 kg ki cheez par force = m g = 1 kg × 9.8 m/s² = **9.8 N**
- 10 kg ki cheez par force = 10 kg × 9.8 m/s² = **98 N**

10 kg wali par force 10 guna zyada hai. Lekin usko **move karwana** bhi 10 guna mushkil hai (kyunki uska mass 10 guna hai). Newton ke doosre niyam se a = F ÷ m:

- 1 kg: a = 9.8 N ÷ 1 kg = **9.8 m/s²**
- 10 kg: a = 98 N ÷ 10 kg = **9.8 m/s²**

Dono ka mass jitna badha, force utna hi badha, aur acceleration **barabar** rahi. Isi liye m cancel ho gaya tha.

Ek cart dhakelne ka khayal rakho: do bachche ek hi cart ko dhakel rahe hain. Agar cart ka mass 10 guna ho aur dhakka bhi 10 guna ho, to cart ki speed utni hi tezi se badhegi. Yahi yahan hota hai.

```
   1 kg                    10 kg
   +---+                  +-------+
   | 1 |                  |  10   |
   +---+                  +-------+
     |                        |
     | F = 9.8 N              | F = 98 N
     v                        v
   a = 9.8 m/s²             a = 9.8 m/s²     (dono ki acceleration barabar)
```

> **Figure 3.2** – 1 kg aur 10 kg ki cheezein: force 9.8 N aur 98 N hai, par dono ki acceleration 9.8 m/s² hai.

---

## Part D: Kahani ka jawab: sikka aur pankh

Ab Zoha ke sawal par aate hain.

- **Nali mein hawa thi:** sikka aur pankh dono par gravity ka force tha, aur dono par **hawa ka rukawat** (air resistance) bhi tha. Pankh halka aur failaa hua hai, isliye hawa uspar zyada rukawat daalti hai: wo lahraata hua dheere gira. Sikka chhota aur kasa hua hai, uspar rukawat kam padi, isliye wo pehle pahuncha.
- **Hawa nikalne ke baad:** rukawat gayab. Ab dono par **sirf gravity** hai, yani dono free fall mein hain. Dono ki acceleration g hai, to dono **ek saath** pahunche.

```
   Hawa ke saath          Hawa nikalne ke baad
   (air resistance)       (vacuum)

   O   ~~                 O    ~~
   |  (pankh)             |  (pankh)
   |                      |
   v                      v
   .. sikka pehle         .. dono ek saath
```

> **Figure 3.3** – Nali mein hawa ho to sikka pehle girta hai (pankh par air resistance zyada). Hawa nikalne par dono ek saath girte hain.

**Example 2 (sikka aur pankh ki acceleration):** Sikka ka mass 5 g = 0.005 kg, pankh ka mass 0.2 g = 0.0002 kg. Vacuum nali mein dono ki acceleration nikalo (g = 9.8 m/s²).

- Sikka par force = m g = 0.005 kg × 9.8 m/s² = **0.049 N**
- Pankh par force = 0.0002 kg × 9.8 m/s² = **0.00196 N**
- Sikka ki acceleration = 0.049 N ÷ 0.005 kg = **9.8 m/s²**
- Pankh ki acceleration = 0.00196 N ÷ 0.0002 kg = **9.8 m/s²**

**Jaanch:** Dono accelerations barabar hain (9.8 = 9.8) ✅, yani sikka aur pankh ek saath girenge.

Kahani ke baad ek aur baat: hawa ki rukawat sirf is wajah se **bhaari cheez ko jaldi girti dikhati hai**. Real zindagi mein jab hum paththar aur kagaz girate hain, to kagaz dheere girta hai kyunki hawa use rokti hai: gravity ka khel nahi, hawa ka khel hai. Aage ki class mein aur seekhoge ki parachute aur baarish ki boond jaise cheezein ek **terminal speed** par pahunch kar aage tez nahi hoti, kyunki hawa ka rukawat gravity ke barabar ho jaata hai. Abhi sirf ye naam yaad rakho.

---

## Part E: Alag alag jagah par g

g = G M / R² mein M aur R us **grah ya chaand ka** hai jiske upar cheez gir rahi hai. Isliye har jagah g alag hota hai.

**Example 3 (Moon par g):** Moon ka mass 7.4 × 10²² kg aur radius 1.74 × 10⁶ m hai. g nikalo.

- G × M = 6.67 × 10⁻¹¹ N m²/kg² × 7.4 × 10²² kg = 4.936 × 10¹² N m²/kg
- R² = (1.74 × 10⁶ m)² = 3.0276 × 10¹² m²
- g = (4.936 × 10¹² N m²/kg) ÷ (3.0276 × 10¹² m²) = **1.63 m/s²** (lagbhag 1.6 m/s²)

**Jaanch:** 1.63 m/s² × 3.0276 × 10¹² m² = 4.935 × 10¹² N m²/kg ✅

Earth ke g se compare karo: 1.63 ÷ 9.8 ≈ 0.166 ≈ **1/6**. Moon par g Earth ke g ka **lagbhag chhathva hissa** hai. Isliye wahan astronaut halke kadam par bahut oonchi kood jaate hain.

| Jagah | g (m/s²) lagbhag |
|---|---|
| Earth | 9.8 |
| Moon | 1.6 |
| Sun (sirf naam ke liye) | 274 |

Moon par kyun kam hai? Uska mass Earth se bahut kam hai, aur ye kam mass radius ke chhote hone se zyada asar karta hai.

**g Earth par bhi thoda badalta hai** (sirf baat samajhne ke liye, koi formula nahi):
- Earth bilkul gol nahi hai, poles ke paas surface centre ke thoda **nazdeek** hai. Isliye **poles par g thoda zyada** hai aur **equator par thoda kam**. Farak bahut chhota hai.
- Jab hum Earth se **bahut upar** jaate hain (pahaad se zyada, ya jahaaz se aur upar), to g **dheere-dheere kam** hota jaata hai.

Hum roz ke kaam mein surface ke paas ke liye **g = 9.8 m/s² ek jaisa maante hain**.

---

## Part F: Aur examples

**Example 4 (5 kg ki cheez par force aur acceleration):** Earth ke surface ke paas 5 kg ki cheez par gravitational force aur uski acceleration nikalo (g = 9.8 m/s²).

- Force F = m g = 5 kg × 9.8 m/s² = **49 N**
- Acceleration a = F ÷ m = 49 N ÷ 5 kg = **9.8 m/s²**

**Jaanch:** a = 9.8 m/s², jo g ke barabar hai ✅. Aur F = 5 × 9.8 = 49 N ✅

**Example 5 (alag mass, ek hi acceleration):** 2 kg aur 8 kg ke do patthar ek saath chhode gaye (hawa ignore karo, g = 9.8 m/s²). Dono par force aur dono ki acceleration nikalo.

- 2 kg: F = 2 kg × 9.8 m/s² = **19.6 N**, a = 19.6 N ÷ 2 kg = **9.8 m/s²**
- 8 kg: F = 8 kg × 9.8 m/s² = **78.4 N**, a = 78.4 N ÷ 8 kg = **9.8 m/s²**

**Jaanch:** 78.4 ÷ 19.6 = 4 = 8 ÷ 2 ✅ (force mass ke anupaat mein hai), aur dono ki a barabar hai ✅. Dono patthar ek saath zameen par pahunchenge.

**Example 6 (doosra grah: mass 2 guna, radius 2 guna):** Ek grah ka mass Earth ka 2 guna aur radius Earth ka 2 guna hai. Earth par g = 9.8 m/s² hai. Is grah par g kitna hoga?

Maan lo Earth ke liye g_E = G M / R². Grah ke liye mass = 2M, radius = 2R:

- g = G × (2M) ÷ (2R)² = G × 2M ÷ (4R²) = (2/4) × (G M / R²) = **(1/2) g_E**
- g = 9.8 m/s² ÷ 2 = **4.9 m/s²**

**Jaanch:** Dobara numbers se: G × 2M ÷ (2R)² = 2 × 4.002 × 10¹⁴ ÷ (4 × 4.096 × 10¹³) = 8.004 × 10¹⁴ ÷ 1.6384 × 10¹⁴ = 4.885 m/s² ≈ 4.9 m/s² ✅ (4.885 hi 9.77 ka aadha hai).

**Example 7 (mass 4 guna, radius 2 guna):** Ek grah ka mass Earth ka 4 guna aur radius 2 guna hai. g kitna hoga?

- g = G × (4M) ÷ (2R)² = G × 4M ÷ (4R²) = (4/4) × (G M / R²) = **g_E**
- g = **9.8 m/s²**

**Jaanch:** G × 4M ÷ (2R)² = 4 × 4.002 × 10¹⁴ ÷ (4 × 4.096 × 10¹³) = 9.77 m/s² ✅

**Pattern kya hai?** g = G M / R² mein **mass** upar (numerator) mein hai aur **radius ka square** neeche. Isliye:
- mass x guna → g **x guna**
- radius y guna → g **y² guna kam** (kyunki R² mein y² aata hai)
- To g ka naya maan = g_E × (mass ka guna) ÷ (radius ke guna ka square).

Example 6: 2 ÷ 2² = 2/4 = 1/2. Example 7: 4 ÷ 2² = 4/4 = 1. Jaanch ✅

**Example 8 (Earth ki bhi acceleration hoti hai):** 5 kg ki cheez gir rahi hai. Newton ke third law se Earth par bhi cheez ke barabar force (49 N) ulti disha mein lagta hai (Topic 2). Earth ki acceleration kitni hogi? (Earth ka mass 6 × 10²⁴ kg.)

- Earth par force = 49 N (Example 4 se)
- Earth ki acceleration = F ÷ M = 49 N ÷ (6 × 10²⁴ kg) = **8.17 × 10⁻²⁴ m/s²**

**Jaanch:** 8.17 × 10⁻²⁴ m/s² × 6 × 10²⁴ kg = 49.0 N ✅

Topic 2 ke Example 9 mein 0.2 kg ke seb ke liye Earth ki acceleration 3.3 × 10⁻²⁵ m/s² aayi thi. Yahan cheez 5 kg ki hai, yani 25 guna bhaari, to force bhi 25 guna aur Earth ki acceleration bhi 25 guna: 3.26 × 10⁻²⁵ m/s² × 25 ≈ 8.2 × 10⁻²⁴ m/s² ✅ (chhota sa farak sirf 9.77 aur 9.8 ki rounding ka hai). Dono numbers alag masses ke liye hain, aur aapas mein milte hain.

Ye number itna chhota hai (decimal point ke baad 23 zero!) ki Earth ko pata hi nahi chalta. Isliye hum kehte hain ki cheez Earth ki taraf girti hai, jabki sach mein dono ek doosre ki taraf kheenchte hain.

**Example 9 (surface se upar: R + h):** Earth ke surface se 6.4 × 10⁶ m (yani ek Earth radius) upar kisi cheez par g nikalo (M = 6 × 10²⁴ kg, R = 6.4 × 10⁶ m, G = 6.67 × 10⁻¹¹ N m²/kg²).

Dhyan do: Formula mein distance **Earth ke centre se** naapte hain. Cheez surface se h upar hai, to centre se distance r = R + h:

- r = 6.4 × 10⁶ m + 6.4 × 10⁶ m = 1.28 × 10⁷ m
- r² = (1.28 × 10⁷ m)² = 1.6384 × 10¹⁴ m²
- g = G M ÷ r² = (4.002 × 10¹⁴ N m²/kg) ÷ (1.6384 × 10¹⁴ m²) = **2.44 m/s²**

**Jaanch:** Distance 2 guna hua to g 4 guna kam hona chahiye: 9.77 ÷ 4 = 2.44 m/s² ✅

(Yahan ek hi surface wala R lete to galat 9.77 m/s² aata.)

**Example 10 (jab problem g = 10 le):** "g = 10 m/s² lete hue, 2 kg ki gend par gravity ka force aur acceleration nikalo."

- F = m g = 2 kg × 10 m/s² = **20 N**
- a = F ÷ m = 20 N ÷ 2 kg = **10 m/s²**

**Jaanch:** 20 N ÷ 2 kg = 10 m/s² ✅. Is poore problem mein 10 hi use kiya (9.8 nahi).

---

## Aam galtiyan (bachke rehna)

**Galti 1: g aur G ko ek samajhna**

**G** universal gravitational constant hai: 6.67 × 10⁻¹¹ N m²/kg², har jagah ek jaisa. **g** acceleration due to gravity hai: 9.8 m/s² Earth par, 1.6 m/s² Moon par. Dono alag hain. Dono ke units bhi alag hain.

**Galti 2: "Bhaari cheez vacuum mein bhi pehle girti hai"**

Galat. Vacuum mein har cheez ki acceleration g hai: Example 2 aur Example 5 ye dikha chuke hain. Hawa mein farak hawa ki rukawat ki wajah se aata hai.

**Galti 3: "g = 9.8 N"**

g ka unit **m/s²** (ya N/kg) hai, N nahi. "9.8 N" to 1 kg ki cheez par lagne wala force hai. N force ka unit hai, acceleration ka nahi.

**Galti 4: Surface ki radius use karna jab height di ho**

Agar cheez surface se h upar hai, to formula mein **r = R + h** use karo. Example 9 dekho: sirf R lete to g galat aata.

**Galti 5: "Space mein g zero hota hai"**

Galat. g **kam** hota hai, par zero nahi. Earth ke paas ke space mein bhi g kaafi hota hai (Example 9 mein 6.4 × 10⁶ m upar bhi 2.44 m/s² mila). Astronauts floating kyun dikhte hain, ye hum Topic 5 aur 6 mein dekhenge.

**Galti 6: Ek hi problem mein 9.8 aur 10 mix karna**

Ek problem mein ek hi value use karo. 9.8 aur 10 mix karne se jawab mein chhota par ghalat farak aa jaata hai. Question mein jo kahe wohi lo, nahi kahe to 9.8.

---

## Quick Recap

- **Free fall:** cheez sirf gravity ke asar mein gir rahi hai (hawa ka rukawat ignore).
- **g = G M / R²:** F = G M m / R² aur F = m g ko barabar karke aur m cancel karke milta hai.
- **Earth par g ≈ 9.8 m/s²** (M = 6 × 10²⁴ kg, R = 6.4 × 10⁶ m se 9.77, lagbhag 9.8). Aasan arithmetic ke liye kabhi-kabhi **10 m/s²** lete hain, par problem mein ek hi value rakho.
- **Unit:** g ka unit m/s² hai, aur 1 N/kg = 1 m/s².
- **g cheez ke mass par depend nahi karta:** 1 kg par 9.8 N aur 10 kg par 98 N, par dono ki a = 9.8 m/s².
- **Kahani ka jawab:** hawa mein sikka pehle girta hai (air resistance), vacuum mein sikka aur pankh ek saath girte hain, kyunki g dono ke liye barabar hai.
- **Moon par g ≈ 1.6 m/s²** (lagbhag Earth ka 1/6). g Poles par thoda zyada, equator par thoda kam, aur Earth se bahut upar jaane par kam hota hai.
- **Direction:** gravity hamesha Earth ke centre ki taraf.
- **Height di ho to r = R + h.** g space mein kam hota hai, zero nahi.
- **Pattern:** naya g = g_E × (mass ka guna) ÷ (radius ke guna ka square).

---

## Practice Questions

1. More precise values for the Earth are M = 5.97 × 10²⁴ kg and R = 6.37 × 10⁶ m. Using G = 6.67 × 10⁻¹¹ N m²/kg², calculate g at the Earth's surface. Express your answer in m/s² and in N/kg.

2. Mars has mass 6.4 × 10²³ kg and radius 3.4 × 10⁶ m. Find the acceleration due to gravity on Mars.

3. A 3 kg stone and a 15 kg stone are released together from the same height (ignore air resistance, g = 9.8 m/s²). Find the force on each and the acceleration of each. Which one reaches the ground first?

4. A planet has mass 3 times that of the Earth and radius 3 times that of the Earth. If g on the Earth is 9.8 m/s², find g on this planet (up to two decimal places).

5. A satellite-like object is at a height of 3.6 × 10⁶ m above the Earth's surface. Find the acceleration due to gravity there. (M = 6 × 10²⁴ kg, R = 6.4 × 10⁶ m, G = 6.67 × 10⁻¹¹ N m²/kg².)

6. An astronaut of mass 60 kg is on the Moon where g = 1.63 m/s². Find the gravitational force on the astronaut and the acceleration if the astronaut slips and falls.

7. A 2 kg ball falls near the Earth's surface. Find the force on the Earth due to the ball and the acceleration of the Earth. (Earth's mass 6 × 10²⁴ kg, g = 9.8 m/s².)

8. State True or False:
   (a) The value of g depends on the mass of the falling object.
   (b) In a vacuum, a feather and a coin fall with the same acceleration.
   (c) g is measured in N.
   (d) g is exactly zero in space.
   (e) g is slightly greater at the poles than at the equator.

9. Explain in your own words why a feather falls slower than a coin in air, but not in a vacuum tube.

### Answers

1. G M = 6.67 × 10⁻¹¹ N m²/kg² × 5.97 × 10²⁴ kg = 3.982 × 10¹⁴ N m²/kg. R² = (6.37 × 10⁶ m)² = 4.058 × 10¹³ m². g = (3.982 × 10¹⁴ N m²/kg) ÷ (4.058 × 10¹³ m²) = **9.81 m/s²** = **9.81 N/kg** (lagbhag 9.8).
   Jaanch: 9.81 m/s² × 4.058 × 10¹³ m² = 3.981 × 10¹⁴ N m²/kg ✅

2. G M = 6.67 × 10⁻¹¹ N m²/kg² × 6.4 × 10²³ kg = 4.269 × 10¹³ N m²/kg. R² = (3.4 × 10⁶ m)² = 1.156 × 10¹³ m². g = (4.269 × 10¹³ N m²/kg) ÷ (1.156 × 10¹³ m²) = **3.69 m/s²**.
   Jaanch: 3.69 m/s² × 1.156 × 10¹³ m² = 4.27 × 10¹³ N m²/kg ✅

3. 3 kg: F = 3 kg × 9.8 m/s² = **29.4 N**, a = 29.4 N ÷ 3 kg = **9.8 m/s²**. 15 kg: F = 15 kg × 9.8 m/s² = **147 N**, a = 147 N ÷ 15 kg = **9.8 m/s²**. Dono ki a barabar hai, to **dono ek saath** zameen par pahunchenge.
   Jaanch: 147 N ÷ 29.4 N = 5 = 15 kg ÷ 3 kg ✅

4. Naya g = 9.8 m/s² × 3 ÷ 3² = 9.8 m/s² × 3 ÷ 9 = 9.8 m/s² ÷ 3 = **3.27 m/s²**.
   Jaanch: 3.27 m/s² × 3 = 9.81 m/s² ≈ 9.8 m/s² ✅

5. r = R + h = 6.4 × 10⁶ m + 3.6 × 10⁶ m = 1.0 × 10⁷ m. r² = 1.0 × 10¹⁴ m². g = (4.002 × 10¹⁴ N m²/kg) ÷ (1.0 × 10¹⁴ m²) = **4.00 m/s²**.
   Jaanch: 4.00 m/s² × 1.0 × 10¹⁴ m² = 4.00 × 10¹⁴ N m²/kg ≈ G M ✅ (g space mein bhi zero nahi hai).

6. F = m g = 60 kg × 1.63 m/s² = **97.8 N**. a = 97.8 N ÷ 60 kg = **1.63 m/s²**.
   Jaanch: 1.63 m/s² × 60 kg = 97.8 N ✅

7. Ball par F = 2 kg × 9.8 m/s² = **19.6 N**. Newton ke third law se Earth par bhi 19.6 N. Earth ki a = 19.6 N ÷ (6 × 10²⁴ kg) = **3.27 × 10⁻²⁴ m/s²** (bahut hi chhota).
   Jaanch: 3.27 × 10⁻²⁴ m/s² × 6 × 10²⁴ kg = 19.6 N ✅

8. (a) **False** ❌. g mein m cancel ho jaata hai.
   (b) **True** ✅. Vacuum mein dono par sirf gravity hai.
   (c) **False** ❌. g ka unit m/s² (ya N/kg) hai.
   (d) **False** ❌. Space mein g kam hota hai par zero nahi.
   (e) **True** ✅. Poles par surface centre ke thoda paas hai.

9. Hawa mein pankh par air resistance zyada padti hai (halka aur failaa hua), isliye wo dheere girta hai. Vacuum nali mein hawa nahi, to dono par sirf gravity lagti hai aur dono ki acceleration g hoti hai, isliye dono ek saath girte hain.

---

Ab Zoha ko bata sakte ho ki sikka aur pankh ek saath kyun gire: hawa hatayi to sirf gravity bachi, aur gravity sabhi ko ek hi acceleration deti hai.

**Aage kya?** g pata hai, ab dekhte hain ki upar se girti ya upar phenki gayi cheez kitni der aur kitni tez.
