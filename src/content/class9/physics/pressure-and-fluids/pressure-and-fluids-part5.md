# Chapter: Pressure aur Fluids (Part 5)

> **Class:** 9 | **Subject:** Physics
> **Ye file [pressure-and-fluids-part4.md](pressure-and-fluids-part4.md) se aage chalti hai** (wahan atmospheric pressure aur barometer the). Chapter ki shuruaat [pressure-and-fluids.md](pressure-and-fluids.md) mein hai.
> **Topics covered in this file:**
> 5. Upthrust (Buoyancy)

---

# Topic 5: Upthrust (Buoyancy)

Pichhle topic mein humne dekha ki **fluid** (liquid aur gas dono) har taraf se dabata hai, aur hawa ka poora samundar hum par dabav daal raha hai, bas hume mehsoos nahi hota. Ab ek naya sawal: jab hum koi **cheez** kisi liquid ya gas ke andar rakhte hain, to wo fluid us cheez ke saath **kya karta hai?** Kya wo sirf dabata hai, ya kuch aur bhi karta hai? Is topic mein hum ek aisa force dhundhenge jo fluid har doobi hui cheez par **upar ki taraf** lagata hai: **upthrust**.

Is topic mein jahan zaroorat ho, **g = 10 m/s²** liya gaya hai (aasaan hisaab ke liye), aur paani ka density **1000 kg/m³** hai. Weight aur F = m g ke liye [gravitation-part5.md](../gravitation/gravitation-part5.md), liquid mein depth ke saath pressure badhne ke liye [pressure-and-fluids-part2.md](pressure-and-fluids-part2.md), aur balanced/unbalanced forces ke liye [force-and-laws-of-motion-part2.md](../force-and-laws-of-motion/force-and-laws-of-motion-part2.md) dekh sakte ho.

---

## Jheel ka patthar aur Samaira ka sawaal

School trip par poori class ek shaant jheel par gayi thi. Guide **Mr. Lal** sabko kinare ke chhichhle paani tak le gaye. Wahan ek bada, gol patthar paani ke tale pada tha.

Samaira ne aasteen chadhayi aur kaha, "Sir, main ise uthaungi!" Usne patthar ko paani ke andar hi pakda aur uthaya. Arre, ye to bahut **halka** laga! Wo muskura di, "Ye to aasaan hai!"

Phir usne patthar ko paani se **bahar** nikaal liya. Ek second mein uski kalaiyan jhuk gayi aur patthar achanak bahut **bhaari** lagne laga. "Aaah! Sir, ye to paani se bahar aate hi kitna bhaari ho gaya!"

Mr. Lal hanse. "Batao, Samaira: kya patthar ka **weight badal gaya?** Kya paani ne use halka bana diya, ya koi aur baat hai?"

Samaira soch mein pad gayi. Is kahani ko hum topic ke beech mein number ke saath solve karenge.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Fluid** | Wo cheez jo behti hai: liquid ya gas | Paani, tel, hawa |
| **Upthrust (buoyant force)** | Fluid ka wo force jo us mein rakhi (poori ya aadhi doobi) cheez par **upar ki taraf** lagta hai | Paani mein patthar halka lagna |
| **Immersed (doobi hui)** | Cheez fluid ke andar hai: poori ya sirf kuch hissa | Patthar paani mein, ya aadha doobi ball |
| **True weight (asli weight)** | Gravity ka force: W = m g. Ye hawa mein naapa jaata hai | 5 kg ka patthar: 50 N |
| **Apparent weight (dikhne wala weight)** | Fluid ke andar naapne par jo weight dikhta hai: asli weight minus upthrust | 30 N (kahani ka patthar) |
| **Spring balance** | Force naapne ka yantra: spring jitni khichti hai, utna weight dikhta hai | Reading N mein |
| **Volume immersed (V)** | Cheez ka wo volume jo fluid ke andar hai | Poori doobi ho to poora volume |

---

## Part A: Cheezein paani mein halki kyun lagti hain

Tumne zindagi mein ye bahut baar dekha hoga:

- **Kuein mein bucket:** paani se bhara bucket jab tak paani ke andar hai, rassi par halka lagta hai. Jaise hi wo paani ki satah se upar aata hai, achanak bhaari ho jaata hai.
- **Tairaak:** swimming pool mein hum aasaani se tair lete hain, aur kisi dost ko gode mein uthana bhi paani mein aasaan hota hai.
- **Khaali bottle:** ek bottle ko paani mein dabao. Wo **upar ki taraf dhakel** deti hai, aur haath chhodte hi **uchhal** kar satah par aa jaati hai.

In sab mein ek hi baat hai: **paani cheez ko upar ki taraf dhakel raha hai.**

> **Upthrust (buoyant force) = wo upward force jo koi fluid us mein rakhi (poori ya aadhi doobi) kisi bhi cheez par lagata hai.**

Is force ke teen zaroori point:

1. Iski **disha hamesha vertically upar** (seedhi upar, gravity ke ulti taraf) hoti hai.
2. Iska **SI unit N (newton)** hai, kyunki ye ek force hai.
3. Ye **liquid mein bhi** lagta hai aur **gas mein bhi**.

Ye bahut zaroori hai ki upthrust gravity ko **cancel nahi karta**: gravity cheez ko neeche kheench rahi hai (weight), aur upthrust ussi cheez par upar ki taraf dhakka lagata hai. Dono force saath-saath hain, aur jo bada hoga wo jeetega.

```
        Upthrust (upar)
             ^
             │
     +-------+-------+
     │               │
     │    cheez      │
     │               │
     +-------+-------+
             │
             v
        Weight W = m g (neeche)
```

> **Figure 5.1** – Paani mein rakhi cheez par do force: weight neeche ki taraf (gravity se) aur upthrust upar ki taraf (paani se).

---

## Part B: Upthrust aata kahan se hai? (Pressure ka khel)

Ye sabse mazedaar hissa hai. Topic 2 mein humne seekha tha: liquid mein **jitna gehra jao, pressure utna zyada**, P = h ρ g. Ab ek chhoti si soch lagate hain.

Ek **cube** lo jiski har bhuja (side) **a** hai. Isse paani mein poora dubo do, is tarah ki iska **upar ka face** surface se **h** gehrai par hai. Phir **neeche ka face** surface se **(h + a)** gehrai par hoga, kyunki cube ki oonchai a hai.

```
  paani ki satah  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                ^         :                 ^
                :         :  P_top          :
              h :         v  (neeche)       :
                v  +-----------+  --        :
                   │           │   ^        :  h + a
                   │   cube    │   a        :
                   │ (side a)  │   v        :
                   +-----------+  --        v
                          ^
                          :  P_bottom (upar, zyada)
```

> **Figure 5.2** – Cube paani mein: upar ka face h gehrai par, neeche ka face (h + a) gehrai par. Neeche wale face par pressure zyada hai, isliye upar ki taraf ka dhakka zyada hai.

Paani ke pressure ko hum P = h ρ g se likh sakte hain (yahan hum sirf paani ka pressure dekh rahe hain; hawa ka pressure upar aur neeche dono taraf barabar lagta hai aur cancel ho jaata hai).

- **Upar ke face par pressure:** P_top = h ρ g (ye cube ko **neeche** dabata hai)
- **Neeche ke face par pressure:** P_bottom = (h + a) ρ g (ye cube ko **upar** dhakelta hai)

Neeche wala pressure bada hai (kyunki wo zyada gehrai par hai). Dono ka antar:

> P_bottom − P_top = (h + a) ρ g − h ρ g = **a ρ g**

Force = pressure × area (Topic 1 se). Cube ke face ka area a × a = a². To **net upward force**:

> Upthrust = (P_bottom − P_top) × a² = a ρ g × a² = **a³ ρ g**

Aur **a³** to cube ka volume V hai! Isliye:

> **Upthrust = ρ g V**

Yahan **ρ** = **fluid** ka density (cheez ka nahi), **g** = 10 m/s² (ya 9.8), aur **V** = fluid mein doobe hue hisse ka volume.

**Side wale (aage-peeche, daayein-baayein) faces ka kya?** Ek hi gehrai par aamne-saamne ke faces par pressure **barabar** hota hai, aur ye ek dusre ke ulte lagte hain. Isliye wo **cancel** ho jaate hain. Net force sirf upar-neeche wale pressure ke antar se banta hai.

Ye kaam karta hai chahe cheez cube ho ya na ho: sach ye hai ki **kisi bhi shape** ki cheez par upthrust ρ g V hota hai (ye hum is class mein cube se samjh rahe hain; baaki shapes ka poora gadit aage ki class mein).

Isko ek chhote number se check karte hain. Cube ki side a = 10 cm = 0.1 m, upar ka face h = 0.5 m par, paani ρ = 1000 kg/m³, g = 10 m/s²:

- P_top = h ρ g = 0.5 m × 1000 kg/m³ × 10 m/s² = **5000 Pa**
- P_bottom = (0.5 + 0.1) m × 1000 kg/m³ × 10 m/s² = 0.6 × 10000 = **6000 Pa**
- Antar = 6000 Pa − 5000 Pa = **1000 Pa**
- Area = a² = 0.1 m × 0.1 m = 0.01 m²
- Upthrust = 1000 Pa × 0.01 m² = **10 N**

**Jaanch:** ρ g V = 1000 kg/m³ × 10 m/s² × (0.1 m)³ = 1000 kg/m³ × 10 m/s² × 0.001 m³ = 10 N ✅. Dono tareeke se ek hi jawab.

---

## Part C: Hawa (gas) mein bhi upthrust

Upthrust sirf paani mein nahi, **har fluid** mein hota hai, to hawa mein bhi. Hawa ka density bahut kam hai (lagbhag 1.2 kg/m³), isliye hawa ka upthrust chhota hota hai, par ye gubbaaron ko udaane ke liye kaafi hai:

- **Helium ka gubbara:** helium hawa se bahut halki gas hai. Gubbare par hawa ka upthrust uske weight se zyada hota hai, isliye wo **upar uthta** hai. Mela mein dhaage se bandhe gubbare yehi karte hain.
- **Hot-air balloon:** garam hawa ka density thanda hawa se kam hota hai. Poora balloon (uska bada volume) bahut upthrust paata hai aur upar uth jaata hai.

Hamare aas-paas ki ek aam baat: hum bhi hawa mein hain, to hum par bhi chhota sa upthrust lagta hai, par wo itna kam hai ki hum use mehsoos nahi karte.

---

## Part D: Apparent weight (dikhne wala weight)

Ab Samaira ke patthar par aate hain. Patthar ka asli weight W = m g hai, jo **kabhi nahi badalta**. Par paani ke andar patthar ko do force mil rahe hain: weight neeche ki taraf, upthrust upar ki taraf. Samaira ko sirf **bacha hua** force uthana padta hai.

> **Apparent weight = True weight − Upthrust**

Ise ek **spring balance** se naap sakte hain. Patthar ko spring balance se latkao: reading **true weight** dega. Ab patthar ko balance se latkaye hue hi paani mein doboo do: reading **kam ho jaati hai**.

```
   Hawa mein                  Paani mein

     +-----+                    +-----+
     │ spr │                    │ spr │
     │ ing │                    │ ing │
     +--+--+                    +--+--+
        │ reading 50 N             │ reading 30 N
        │                          │
      ( patthar )          ~~~~~~~~│~~~~~~~~  satah
                                   │
                              ( patthar )
```

> **Figure 5.3** – Spring balance se latka patthar: hawa mein reading 50 N (asli weight), paani mein reading 30 N (apparent weight). Reading mein 20 N ki kami = upthrust.

Aur jab cheez paani mein **rest** (ruki hui) ho, jaise Samaira ke haath mein ya spring balance se latki, to uske upar ke force **balanced** hain (Force aur Laws of Motion ka balanced force wala niyam):

> Upar ke force = Neeche ke force
> Upthrust + (balance ki reading ya haath ka force) = Weight

Isi se: reading = weight − upthrust.

### Kahani ka sawaal solve karte hain

**Example 1 (Samaira ka patthar):** Patthar ka mass = 5 kg, volume = 2 × 10⁻³ m³. Paani ka density 1000 kg/m³, g = 10 m/s². Paani ke andar patthar ka apparent weight kitna hai?

- True weight W = m g = 5 kg × 10 m/s² = **50 N**
- Upthrust U = ρ g V = 1000 kg/m³ × 10 m/s² × 2 × 10⁻³ m³ = 10000 × 0.002 = **20 N**
- Apparent weight = W − U = 50 N − 20 N = **30 N**

**Jaanch:** 30 N + 20 N = 50 N ✅ (haath ka force + upthrust = weight).

**Samaira ke sawaal ka jawab:** Patthar ka **weight nahi badla**: wo hamesha 50 N hai. Paani ke andar 20 N ka upthrust upar ki taraf madad kar raha tha, isliye Samaira ko sirf **30 N** ka force lagana pada. Paani se bahar aate hi upthrust (lagbhag) khatam, to Samaira ko poora **50 N** uthana pada. Mr. Lal ne kaha, "Bilkul sahi! Paani ne patthar ko halka nahi banaya, **madad ki.**"

Upthrust ko seedha kaise naapte hain, ye ek mashhoor niyam se judta hai: agle topic mein.

---

## Part E: Upthrust kis par nirbhar karta hai?

Formula **U = ρ g V** se hi sab kuch dikhta hai:

| Cheez | Upthrust par asar? |
|---|---|
| **Fluid ka density (ρ)** | Haan: zyada density wala fluid, zyada upthrust |
| **Cheez ka doobe hue hisse ka volume (V)** | Haan: zyada volume doobe, zyada upthrust |
| **g** | Haan, par ek hi jagah par g ek jaisa rehta hai |
| **Cheez ka mass ya weight** | **Nahi** |
| **Cheez ka material** (lohe ka ya lakdi ka) | **Nahi** |
| **Cheez ki shape** | **Nahi**, sirf volume ginta hai |
| **Gehrai (depth)**, jab cheez poori doobi ho | **Nahi** |

**Depth ka sawaal** thoda ajeeb lagta hai, kyunki Topic 2 mein pressure to gehrai se badhta hai. Par Part B mein dekha: upthrust **pressure ka antar** hai, aur ye antar sirf **a ρ g** hai: isme h hai hi nahi! Cube kitna bhi neeche jaye, upar aur neeche ke face ke pressure ka antar wahi rehta hai. Isliye poori doobi cheez par upthrust gehrai se **nahi badalta.**

**Example 2 (depth nahi, sirf volume):** Wahi cube (side 10 cm) pehle upar ka face 0.5 m par, phir 2.0 m par rakha jaata hai. Dono jagah upthrust?

- 0.5 m par: P_top = 5000 Pa, P_bottom = 6000 Pa, antar = 1000 Pa, U = 1000 Pa × 0.01 m² = **10 N**
- 2.0 m par: P_top = 2.0 × 10000 = 20000 Pa, P_bottom = 2.1 × 10000 = 21000 Pa, antar = 1000 Pa, U = 1000 Pa × 0.01 m² = **10 N**

**Jaanch:** ρ g V = 1000 kg/m³ × 10 m/s² × 0.001 m³ = 10 N ✅ (dono jagah ek hi). Pressure bahut badha (5000 se 20000 Pa), par upthrust wahi.

---

## Part F: Weight aur upthrust ka muqabla: cheez kya karegi?

Paani mein cheez par do force hain: weight (neeche) aur upthrust (upar). **Kaun bada hai** ye tay karta hai ki cheez kya karegi:

| Sthiti | Net force | Cheez kya karegi? |
|---|---|---|
| Weight **>** Upthrust | Neeche ki taraf | **Doobegi (sink)**, tale tak jaayegi |
| Weight **=** Upthrust | Zero (balanced) | **Ruki rahegi**: paani mein latki rahegi ya satah par tairegi |
| Weight **<** Upthrust | Upar ki taraf | **Upar uthegi**, satah ki taraf |

```
 Weight > Upthrust     Weight = Upthrust      Weight < Upthrust

     U (chhota)            U (barabar)             U (bada)
      ^                      ^                       ^
      │                      │                       │
     [  ]                   [  ]                    [  ]
      │                      │                       │
      v                      v                       v
     W (bada)               W (barabar)             W (chhota)

   neeche jaayegi         ruki rahegi            upar uthegi
```

> **Figure 5.4** – Teen sthitiyan: kaun sa tir bada hai, wahi disha tay karti hai.

Samaira ka patthar: weight 50 N, upthrust 20 N. Weight bada, to patthar paani mein **doobta hai** (tale mein pada tha, wahi dekha). Khaali bottle: weight chhota (maan lo 1 N), poori doobne par upthrust bahut bada, to wo **upar uchhal** padti hai. (Cheez satah par kaise tairti hai, ye alag topic hai: Topic 7.)

---

## Part G: Solved examples

Is part mein g = 10 m/s², paani ka density = 1000 kg/m³.

**Example 3 (cube, 10 cm side, paani mein):** Ek cube ki side 10 cm hai, poora paani mein doob hua hai. Upthrust?

- a = 10 cm = 0.1 m, V = a³ = 0.1 × 0.1 × 0.1 = 0.001 m³ = 1 × 10⁻³ m³
- U = ρ g V = 1000 kg/m³ × 10 m/s² × 0.001 m³ = **10 N**

**Jaanch:** 1000 kg/m³ × 10 m/s² × 0.001 m³ = 10 N ✅. (Part B ke pressure wale tareeke se bhi 10 N aaya tha.)

**Example 4 (alag-alag liquid):** Ek 3 × 10⁻³ m³ volume ka object poora tel mein doob hai (ρ = 800 kg/m³). Upthrust?

- U = 800 kg/m³ × 10 m/s² × 3 × 10⁻³ m³ = 8000 × 0.003 = **24 N**

Wahi object (volume 3 × 10⁻³ m³) paani mein: U = 1000 kg/m³ × 10 m/s² × 0.003 m³ = 30 N. Tel mein kam kyunki tel ka density kam hai.

**Jaanch:** 24 ÷ 30 = 0.8 = 800 ÷ 1000 ✅

**Example 5 (mercury):** Ek 2 × 10⁻⁴ m³ ki chhoti goli poori mercury mein (ρ = 13600 kg/m³) doobti hai. Upthrust?

- U = 13600 kg/m³ × 10 m/s² × 2 × 10⁻⁴ m³ = 136000 × 0.0002 = **27.2 N**

**Jaanch:** 13600 × 10 = 136000 N/m³, 136000 × 0.0002 = 27.2 N ✅. (Mercury bahut ghana hai, isliye itne chhote volume par bhi itna upthrust.)

**Example 6 (namkeen paani):** Ek 5 × 10⁻³ m³ ki cheez poori namkeen (salt) paani mein (ρ = 1030 kg/m³) doobi hai. Upthrust?

- U = 1030 kg/m³ × 10 m/s² × 5 × 10⁻³ m³ = 10300 × 0.005 = **51.5 N**

**Jaanch:** Meethe paani mein 1000 kg/m³ × 10 m/s² × 0.005 m³ = 50 N. Namkeen mein 51.5 N, thoda zyada, kyunki 1030 > 1000 ✅.

**Example 7 (spring balance ki readings):** Ek dhaatu ka tukda spring balance se hawa mein 8 N dikhata hai aur paani mein poora doobne par 5 N. Upthrust aur volume?

- Upthrust = hawa wali reading − paani wali reading = 8 N − 5 N = **3 N**
- V = U ÷ (ρ g) = 3 N ÷ (1000 kg/m³ × 10 m/s²) = 3 ÷ 10000 = **3 × 10⁻⁴ m³**

**Jaanch:** 1000 kg/m³ × 10 m/s² × 3 × 10⁻⁴ m³ = 3 N ✅, aur 8 − 3 = 5 N ✅

**Example 8 (upthrust se volume):** Koi cheez paani mein poori doobi hai aur us par 15 N ka upthrust lagta hai. Cheez ka volume?

- V = U ÷ (ρ g) = 15 N ÷ (1000 kg/m³ × 10 m/s²) = 15 ÷ 10000 = **1.5 × 10⁻³ m³**

**Jaanch:** 1000 kg/m³ × 10 m/s² × 0.0015 m³ = 15 N ✅. (1.5 × 10⁻³ m³ = 1.5 litre.)

**Example 9 (barabar volume, alag mass):** Do ghan, ek ka mass 2 kg aur dusre ka 8 kg, dono ka volume 1 × 10⁻³ m³ hai. Dono ko paani mein poora doboya jaata hai. Upthrust aur apparent weights?

- Dono ka upthrust: U = 1000 kg/m³ × 10 m/s² × 1 × 10⁻³ m³ = **10 N** (barabar, kyunki volume barabar hai)
- Halka ghan: W = 2 kg × 10 m/s² = 20 N, apparent weight = 20 − 10 = **10 N**
- Bhaari ghan: W = 8 kg × 10 m/s² = 80 N, apparent weight = 80 − 10 = **70 N**

**Jaanch:** Dono par U = 10 N, bhaari wale ka mass 4 guna hai par upthrust 4 guna nahi ✅. Bhaari cheez ka upthrust zyada nahi hota.

**Example 10 (aadhi doobi cheez):** Ek block ka volume 4 × 10⁻³ m³ hai. Wo sirf aadha paani mein doob hai. Upthrust? Agar poora doobta to?

- Doobe hue hisse ka volume = 4 × 10⁻³ ÷ 2 = 2 × 10⁻³ m³
- U = 1000 kg/m³ × 10 m/s² × 2 × 10⁻³ m³ = **20 N**
- Agar poora doobta: U = 1000 kg/m³ × 10 m/s² × 4 × 10⁻³ m³ = **40 N**

**Jaanch:** Aadha volume, aadha upthrust: 20 N = 40 N ÷ 2 ✅. Yahan **sirf doobe hue hisse** ka volume lena hai, poore block ka nahi.

**Example 11 (paani ke neeche pakdi gayi gend, phir chhodi gayi):** Ek gend ka volume 4 × 10⁻³ m³ aur mass 1 kg hai. Wo paani ke andar poori doobi hui pakdi gayi hai. (a) Upthrust, weight aur net force? (b) Chhodte hi uski acceleration?

- (a) Upthrust U = 1000 kg/m³ × 10 m/s² × 4 × 10⁻³ m³ = **40 N** (upar)
- Weight W = 1 kg × 10 m/s² = **10 N** (neeche)
- Net force = 40 N − 10 N = **30 N** upar ki taraf (gend ko paani mein neeche rokne ke liye haath ko 30 N neeche ki taraf lagana padta hai)
- (b) F = m a, to a = F ÷ m = 30 N ÷ 1 kg = **30 m/s²** upar ki taraf

**Jaanch:** m a = 1 kg × 30 m/s² = 30 N ✅. Isiliye khaali bottle ya halki gend haath chhodte hi bahut tezi se **uchhal** kar satah par aati hai. (Practical mein paani ka rukawat bhi hota hai, wo abhi nahi ginte; ye ek aadarsh hisaab hai.)

---

## Aam galtiyan (bachke rehna)

**Galti 1: "Paani mein weight kam ho jaata hai"**

Cheez ka **true weight** (m g) nahi badalta. Samaira ke patthar ka weight 50 N tha aur 50 N hi raha. Jo kam hua wo **apparent weight** (30 N) hai, kyunki 20 N upthrust upar ki taraf madad kar raha hai.

**Galti 2: "Bhaari cheez par zyada upthrust"**

Example 9 mein 2 kg aur 8 kg ke ghan par upthrust barabar (10 N) tha. Upthrust **mass** par nahi, **doobe hue volume** aur **fluid ke density** par nirbhar hai.

**Galti 3: "Jitna neeche jao, upthrust utna zyada"**

Neeche jaane par pressure badhta hai, par **upar-neeche ke pressure ka antar** nahi badhta. Poori doobi cheez par upthrust gehrai se same rehta hai (Example 2: dono gehrai par 10 N).

**Galti 4: Mass aur weight ko mila dena**

5 kg ka patthar: mass 5 kg hai (kg mein), weight 50 N hai (N mein). Upthrust bhi N mein hai, to **apparent weight = weight (N) − upthrust (N)**: 50 N − 20 N = 30 N. "5 − 20" jaisa kuch nahi hota.

**Galti 5: Aadhi doobi cheez ke liye poore object ka volume lena**

Example 10 mein block ka volume 4 × 10⁻³ m³ tha, par aadha doobne par V = 2 × 10⁻³ m³ lena hai. Poora volume lete to upthrust 40 N aata, jo galat hai (sahi 20 N).

**Galti 6: Cheez ka density lena, fluid ka nahi**

Formula ρ g V mein ρ **fluid** ka hai. Patthar ka density lene se jawab galat aayega.

---

## Quick Recap

- **Upthrust (buoyant force)** = fluid ka wo upward force jo us mein rakhi (poori ya aadhi doobi) cheez par lagta hai. Disha hamesha **vertically upar**; unit **N**.
- Upthrust liquid aur **gas dono** mein lagta hai: helium ka gubbara aur hot-air balloon is se uthte hain.
- **Kyun lagta hai:** liquid mein neeche wale face par pressure zyada hota hai (depth se). Cube ke liye: (P_bottom − P_top) × a² = a ρ g × a² = **ρ g V**. Side wale faces cancel ho jaate hain.
- **U = ρ g V** (ρ = fluid ka density, V = doobe hue hisse ka volume, g = 10 m/s²).
- **Apparent weight = True weight − Upthrust.** Spring balance ki reading paani mein kam ho jaati hai.
- Upthrust **volume** aur **fluid ke density** par nirbhar hai; **mass, material, shape** par nahi; poori doobi cheez par **gehrai** par bhi nahi.
- **Weight > upthrust:** doobti hai. **Weight = upthrust:** ruki rahti hai. **Weight < upthrust:** upar uthti hai.
- **Kahani ka jawab:** W = 50 N, U = 20 N, apparent weight = 30 N. Weight nahi badla; upthrust ne madad ki.
- Aadhi doobi cheez ke liye sirf doobe hue hisse ka volume lo.

---

## Practice Questions

Take g = 10 m/s² and density of water = 1000 kg/m³ unless stated otherwise.

1. A solid of volume 5 × 10⁻⁴ m³ is fully immersed in (a) water, (b) oil of density 800 kg/m³, (c) mercury of density 13600 kg/m³. Find the upthrust in each.

2. A spring balance shows 60 N when a stone hangs in air and 45 N when the stone is fully immersed in water. Find the upthrust and the volume of the stone.

3. A cube of side 20 cm is fully immersed in (a) water, (b) salt water of density 1030 kg/m³. Find the upthrust in each case.

4. A block of volume 6 × 10⁻³ m³ floats in water with one-third of its volume immersed. Find the upthrust on the block.

5. A metal piece weighs 12 N in air. Its volume is 4 × 10⁻⁴ m³. Find its apparent weight when fully immersed in water.

6. A ball of mass 0.5 kg and volume 2 × 10⁻³ m³ is held fully under water and then released. Find (a) the upthrust, (b) its weight, (c) the net force, (d) its acceleration just after release.

7. A cube of side 20 cm has its top face at a depth of 1 m in water. Find the pressure on the top face, the pressure on the bottom face, and use them to find the upthrust. Check with ρ g V.

8. Two spheres have the same volume. One is made of lead and the other of aluminium. Both are fully immersed in water. Which one has the greater upthrust? Explain.

9. State True or False:
   (a) The weight of a stone decreases when it is put in water.
   (b) The upthrust on a fully immersed object increases as it is taken deeper.
   (c) The direction of upthrust is always vertically upward.
   (d) A balloon filled with helium rises because the upthrust on it is greater than its weight.

10. Samaira lifts another stone, of mass 6 kg and volume 2.5 × 10⁻³ m³, from the bottom of a lake. Explain in your own words why it feels much heavier when it comes out of the water, and find the force she needs in water and in air.

### Answers

1. U = ρ g V.
   (a) Paani: 1000 kg/m³ × 10 m/s² × 5 × 10⁻⁴ m³ = **5 N**.
   (b) Tel: 800 kg/m³ × 10 m/s² × 5 × 10⁻⁴ m³ = **4 N**.
   (c) Mercury: 13600 kg/m³ × 10 m/s² × 5 × 10⁻⁴ m³ = **68 N**.
   Jaanch: 5 ÷ 4 = 1000 ÷ 800 ✅, 68 ÷ 5 = 13.6 = 13600 ÷ 1000 ✅

2. Upthrust = 60 N − 45 N = **15 N**. V = U ÷ (ρ g) = 15 ÷ (1000 × 10) = **1.5 × 10⁻³ m³**.
   Jaanch: 1000 kg/m³ × 10 m/s² × 1.5 × 10⁻³ m³ = 15 N ✅

3. V = (0.2 m)³ = 0.008 m³ = 8 × 10⁻³ m³.
   (a) Paani: 1000 kg/m³ × 10 m/s² × 0.008 m³ = **80 N**.
   (b) Namkeen paani: 1030 kg/m³ × 10 m/s² × 0.008 m³ = **82.4 N**.
   Jaanch: 82.4 ÷ 80 = 1.03 ✅

4. Doobe hue hisse ka volume = 6 × 10⁻³ ÷ 3 = 2 × 10⁻³ m³. U = 1000 kg/m³ × 10 m/s² × 2 × 10⁻³ m³ = **20 N**.
   Jaanch: 1000 kg/m³ × 10 m/s² × 0.002 m³ = 20 N ✅. (Poora volume 6 × 10⁻³ lena galti hota: 60 N.)

5. U = 1000 kg/m³ × 10 m/s² × 4 × 10⁻⁴ m³ = 4 N. Apparent weight = 12 N − 4 N = **8 N**.
   Jaanch: 8 + 4 = 12 N ✅

6. (a) U = 1000 kg/m³ × 10 m/s² × 2 × 10⁻³ m³ = **20 N** (upar). (b) W = 0.5 kg × 10 m/s² = **5 N** (neeche). (c) Net = 20 − 5 = **15 N** upar. (d) a = 15 N ÷ 0.5 kg = **30 m/s²** upar.
   Jaanch: 0.5 kg × 30 m/s² = 15 N ✅

7. a = 0.2 m, h = 1 m. P_top = 1 × 1000 × 10 = **10000 Pa**. P_bottom = (1 + 0.2) × 1000 × 10 = **12000 Pa**. Antar = 2000 Pa. Area = 0.2 × 0.2 = 0.04 m². Upthrust = 2000 Pa × 0.04 m² = **80 N**.
   Jaanch: ρ g V = 1000 kg/m³ × 10 m/s² × 0.008 m³ = 80 N ✅

8. **Dono par upthrust barabar** hai, kyunki volume aur fluid (paani) same hain. Upthrust U = ρ g V sirf fluid ke density aur volume par nirbhar hai, cheez ke material ya mass par nahi. (Lead ka weight zyada hoga, isliye uska apparent weight zyada hoga, par upthrust barabar hai.)

9. (a) **False** ❌. Weight wahi rehta hai; apparent weight kam hota hai.
   (b) **False** ❌. Poori doobi cheez par upthrust gehrai par nirbhar nahi karta.
   (c) **True** ✅.
   (d) **True** ✅.

10. Weight = 6 kg × 10 m/s² = 60 N (hamesha). Paani mein upthrust = 1000 kg/m³ × 10 m/s² × 2.5 × 10⁻³ m³ = 25 N upar, to Samaira ko **60 N − 25 N = 35 N** lagana padta hai. Bahar nikalne par (lagbhag) upthrust nahi, to use poora **60 N** lagana padta hai. Isliye patthar achanak bhaari lagta hai, jabki uska weight nahi badla.
    Jaanch: 35 N + 25 N = 60 N ✅

---

Ab aap Samaira ko bata sakte ho ki patthar bhaari kyun lagne laga, aur Mr. Lal ke sawaal ka jawab bhi de sakte ho: weight wahi, bas upthrust ne madad ki. Agli baar swimming pool mein ho to dhyan dena: tum bhi isi liye halke lagte ho.

**Aage kya?** Hum ne upthrust ko ρ g V se nikaala, par kya use **seedha naapne ka** koi tareeka hai? **Archimedes ne is upthrust ko naapne ka seedha tareeka bataya tha.** Wo kya tha, aur usse kisi cheez ki relative density kaise nikalti hai, ye hum Topic 6 mein dekhenge.
