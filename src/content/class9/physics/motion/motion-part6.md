# Chapter: Motion (Gati) (Part 6)

> **Class:** 9 | **Subject:** Physics
> **Ye file [motion-part5.md](motion-part5.md) se aage chalti hai** (wahan s-t aur v-t graph, v-t graph ki slope = acceleration, aur v-t graph ke neeche ka area = displacement tha). Chapter ki shuruaat [motion.md](motion.md) mein hai.
> **Topics covered in this file:**
> 6. Equations of Motion

---

# Topic 6: Equations of Motion

Pichhle topic mein humne graphs se do badi baatein seekhi thi: v-t graph ki **slope** acceleration batati hai, aur uske neeche ka **area** displacement batata hai. Tab hi ek hint mila tha ki graphs se **formula** bhi nikal sakte hain. Is topic mein hum wahi karenge: graph se teen seedhe-saadhe equations banayenge, jinse kisi bhi seedhi line ki uniform acceleration wali motion ke sawaal bina graph banaye hal ho jate hain.

---

## Mr. Sinha, Pranav aur school ka speed breaker

School ke gate ke paas ek bada sa board laga tha: "School Zone: Speed Limit 36 km/h". Gate ke saamne ek zebra crossing aur ek speed breaker bhi tha. Traffic police ke Mr. Sinha roz subah wahin khade hote the. Aaj Pranav, Class 9 ka student, bag latkaye unke paas ruk gaya.

Pranav ne poocha, "Uncle, 36 km/h ki limit hi kyun? 60 km/h hoti to gaadiyan jaldi nikal jaati."

Mr. Sinha muskuraye. "Socho, ek bachcha achanak zebra crossing par aa jaye. Driver use dekhta hai aur brake dabata hai. Gaadi turant to ruk nahi sakti na? Brake lagne ke baad bhi wo kuch door aur chalegi. **Gaadi ko bachche se pehle ruk jaana chahiye.** To sawaal ye hai: kitni door chalegi, aur kitni der mein rukegi?"

"Ye to dekh kar hi andaza lagana padega," Pranav bola.

"Nahi beta, andaza nahi, **hisaab**. Ye door gaadi ki speed aur brake ki taakat se ek formula se nikal jaati hai. Aur sabse dilchasp baat: speed doguni karo, to rukne ki doori **doguni nahi, chaar guni** ho jaati hai!"

Pranav ki aankhein badi ho gayi. "Chaar guni? Kaise?" Isi sawaal ka jawab hum is topic ke end mein poora hisaab laga kar dekhenge. Pehle formulas banate hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **u (initial velocity)** | Jis pal hum motion dekhna shuru karte hain, us pal ki velocity | Brake dabane ke pal gaadi ki speed: 10 m/s |
| **v (final velocity)** | Motion ke end par velocity | Gaadi ruk gayi to v = 0 |
| **a (acceleration)** | Velocity badalne ki dar (Topic 4); retardation ho to negative | a = −2.5 m/s² |
| **t (time)** | Is dauran lagne wala time | 4 s |
| **s (displacement)** | Is dauran seedhi line mein hua displacement (Topic 2) | 20 m |
| **Equations of motion** | Inn paanch cheezon (u, v, a, t, s) ko jodne wale teen equations | v = u + a t |
| **Uniform acceleration** | Acceleration jo poore time ek hi value ka rahe | Har second velocity 2 m/s badhna |

---

## Part A: Setting aur symbols

Ye teen equations **sirf tab** chalte hain jab:

1. Motion **seedhi line** mein ho, aur
2. **Acceleration constant (uniform)** ho, yaani poore time ek hi value.

Hum paanch cheezein use karenge: **u, v, a, t, s**. Direction ka niyam:

- Jis direction mein gaadi shuru mein chal rahi thi, use **positive (+)** maano.
- Agar gaadi tez ho rahi hai to a **positive**, agar brake lag raha hai (retardation) to a **negative**.
- s yahan **displacement** hai, distance nahi. Jab tak gaadi ek hi direction mein chal rahi hai, dono ki value barabar hoti hai.

---

## Part B: Pehla equation: v = u + a t

Topic 4 mein humne acceleration ki definition padhi thi:

**a = (v − u) ÷ t**

Dono taraf t se multiply karein:

**a t = v − u**

u dono taraf jod dein:

### **v = u + a t**

Graph se bhi yahi dikhta hai. Maan lo gaadi u velocity se shuru hui aur uniform acceleration a se chali. v-t graph ek **seedhi tirchi line** hogi.

```
 v
 ^
 v :                 /:
   :             /    :
   :         /        :
   :     /            :
 u :/                 :
   :                  :
   :                  :
   +------------------+---> t
   0                  t
   (slope = (v - u) / t = a)
```

> **Figure 6.1** – Uniform acceleration ka v-t graph: u se shuru hokar t second mein v tak seedhi line. Slope = (v − u) ÷ t = a.

Line ki slope = a, aur slope = (v − u) ÷ t. Dono barabar rakhne par wahi v = u + a t mil jaata hai.

**Matlab:** final velocity = shuru ki velocity + (har second ka badlaav × seconds).

---

## Part C: Doosra equation: s = u t + ½ a t²

Ab displacement. Topic 5 mein seekha tha ki **v-t graph ke neeche ka area = displacement**. Figure 6.1 ke neeche ka shape ek **trapezium** hai: neeche t lamba aadhar, aur do parallel sides u aur v.

```
 v
 ^
 v :                 /:
   :             /    :   triangle
   :         /        :   (aadhar t, oonchai v - u)
   :     /            :
 u :/-----------------:
   :                  :
   :    rectangle     :
   :    (u x t)       :
   +------------------+---> t
   0                  t
```

> **Figure 6.2** – Trapezium ko do hisson mein baanta: neeche ka rectangle (u × t) aur uske upar ka triangle (aadhar t, ooncha (v − u)).

**Tareeka 1: Trapezium ka area**

Trapezium ka area = ½ × (parallel sides ka jod) × (doori) = ½ × (u + v) × t.

Yaani

**s = ½ (u + v) t**  ... (i)

Ye **average velocity wala form** hai: (u + v) ÷ 2 beech ki (average) velocity hai, aur s = average velocity × time.

Ab (i) mein v ki jagah u + a t likhein:

s = ½ (u + u + a t) × t
s = ½ (2u + a t) × t
s = ½ × 2u × t + ½ × a t × t

### **s = u t + ½ a t²**

**Tareeka 2: Rectangle + triangle**

- Rectangle ka area = u × t.
- Triangle ka area = ½ × aadhar × oonchai = ½ × t × (v − u). Lekin v − u = a t, to triangle = ½ × t × a t = ½ a t².

Jodne par s = u t + ½ a t². Dono tareeke ek hi jawab dete hain.

**Samajhne wali baat:** u t wo displacement hai jo gaadi bina acceleration ke (sirf u par chalte hue) tay karti. ½ a t² wo **extra** (ya kam, agar a negative ho) displacement hai jo acceleration ki wajah se judta hai.

---

## Part D: Teesra equation: v² = u² + 2 a s

Kayi sawaalon mein time t diya hi nahi hota (jaise "gaadi kitni door mein rukegi?"). Ek aisa equation chahiye jisme t na ho. Hum t ko **hata denge (eliminate)**.

Hamare paas hain:
- s = ½ (u + v) t  ... (i)
- t = (v − u) ÷ a  (v = u + a t se)  ... (ii)

(ii) ko (i) mein daalein:

s = ½ (u + v) × (v − u) ÷ a
s = (v + u)(v − u) ÷ (2a)

Ab upar ke bhaag mein (v + u)(v − u) hai: ye bilkul **(a + b)(a − b) = a² − b²** wala pattern hai (dekhein [expansions.md](../../maths/expansions/expansions.md)). Yahan a ki jagah v, b ki jagah u:

(v + u)(v − u) = v² − u²

To s = (v² − u²) ÷ (2a). Dono taraf 2a se multiply karein:

2 a s = v² − u²

### **v² = u² + 2 a s**

---

## Part E: Sign convention aur savdhaaniyan

- Shuru ki direction **positive**. Brake lage to **a negative**.
- Gaadi ruk jaaye to **v = 0** (final velocity zero). Gaadi pehle se ruki ho aur chalna shuru kare to **u = 0**.
- s **displacement** hai. Agar gaadi aage jaakar peeche aaye (direction badle), to sirf displacement hi in equations mein jaata hai, kul distance nahi.
- Ye teeno equations **sirf uniform acceleration** ke liye hain. Agar acceleration badalti rahe, to poori motion ko un tukdon mein todo jisme acceleration constant ho.
- Upar phenkne ya girane wali cheezein (ball ko upar fenkna, chhat se girana) bhi isi tarah ke equations se hal hoti hain, jahan a = ±g hota hai. Wo **Gravitation chapter** ka hissa hai; yahan sirf naam le rahe hain.

---

## Part F: Kaunsa formula? (decision table)

Paanch cheezein hain: u, v, a, t, s. Sawaal mein **teen** pata hoti hain, aur ek **poochhi** jaati hai. Jo cheez na pata ho na poochhi ho, wo jis equation mein **nahi** hai, wohi equation chunna hai.

| Equation | Isme kaun nahi hai | Kab use karein |
|---|---|---|
| v = u + a t | s | s ki zaroorat nahi: u, v, a, t mein se teen diye hain |
| s = u t + ½ a t² | v | v ki zaroorat nahi: u, a, t se s (ya s se t) |
| v² = u² + 2 a s | t | time nahi diya ya nahi chahiye: u, v, a, s mein se teen |
| s = ½ (u + v) t | a | a nahi pata: u, v, t se s |

**Tip:** Pehle likho "Diya hai: u = ..., a = ..., t = ... ; Poochha hai: ..." phir table se equation chuno.

---

## Part G: Solved examples

### Example 1: Rest se shuru

Ek car rest se shuru hokar 2 m/s² ki uniform acceleration se 5 s chalti hai. Final velocity aur displacement nikalo.

Diya hai: u = 0, a = 2 m/s², t = 5 s. Poochha: v, s. (Pehla aur doosra equation.)

v = u + a t = 0 + 2 m/s² × 5 s = **10 m/s**
s = u t + ½ a t² = 0 × 5 s + ½ × 2 m/s² × (5 s)² = ½ × 2 × 25 m = **25 m**

Jaanch (teesre equation se): v² = u² + 2 a s = 0 + 2 × 2 m/s² × 25 m = 100 m²/s², aur 10² = 100 m²/s² ✅

### Example 2: Braking car (teeno equations se cross-check)

Ek car 20 m/s se chal rahi hai. Driver brake lagata hai, retardation 5 m/s² hai. Car kitni der mein aur kitni door mein rukegi?

Diya hai: u = 20 m/s, v = 0 (ruk gayi), a = −5 m/s² (retardation). Poochha: t, s.

**Time:** v = u + a t, to 0 = 20 m/s + (−5 m/s²) × t, yaani 5 t = 20, to **t = 4 s**.

**Distance:** v² = u² + 2 a s, to 0 = (20 m/s)² + 2 × (−5 m/s²) × s, yaani 0 = 400 − 10 s, to **s = 40 m**.

Jaanch 1 (doosra equation): s = u t + ½ a t² = 20 m/s × 4 s + ½ × (−5 m/s²) × (4 s)² = 80 m − 40 m = 40 m ✅

Jaanch 2 (average velocity form): s = ½ (u + v) t = ½ × (20 + 0) m/s × 4 s = 40 m ✅

Teeno tareeke se **t = 4 s aur s = 40 m** mile.

### Example 3: Mr. Sinha ka school zone sawaal

School zone mein limit 36 km/h hai. Car 36 km/h se chal rahi hai aur brake lagane par retardation 2.5 m/s² hai. Kitni der aur kitni door mein rukegi?

**Pehle units!** 36 km/h = 36 × 1000 m ÷ 3600 s = **10 m/s**.

Diya hai: u = 10 m/s, v = 0, a = −2.5 m/s².

Time: 0 = 10 m/s + (−2.5 m/s²) × t, to t = 10 ÷ 2.5 = **4 s**.
Distance: 0 = (10 m/s)² + 2 × (−2.5 m/s²) × s, yaani 0 = 100 − 5 s, to s = **20 m**.

Jaanch: s = u t + ½ a t² = 10 m/s × 4 s + ½ × (−2.5 m/s²) × (4 s)² = 40 m − 20 m = 20 m ✅

Ab **doosri car** jo 72 km/h (yaani 2 × 36) se chal rahi hai, retardation wahi 2.5 m/s²:

u = 72 km/h = 72 ÷ 3.6 = **20 m/s**.
Time: t = 20 ÷ 2.5 = **8 s**.
Distance: 0 = (20 m/s)² + 2 × (−2.5 m/s²) × s, yaani 0 = 400 − 5 s, to s = **80 m**.

Jaanch: s = 20 m/s × 8 s + ½ × (−2.5) × 64 = 160 m − 80 m = 80 m ✅

**Speed doguni (10 → 20 m/s), time doguna (4 → 8 s), lekin distance chaar guna (20 → 80 m)!** Isse samajh aaya ki limit 36 km/h kyun rakhi gayi hai: 72 km/h par car ko rukne ke liye 80 m chahiye, aur zebra crossing to gate ke bilkul saamne hai.

### Example 4: Train ka accelerate hona

Ek train 54 km/h se chal rahi hai. Wo 0.5 m/s² ki uniform acceleration se 20 s tak tez hoti hai. Final speed aur is dauran tay ki gayi doori nikalo.

u = 54 km/h = 54 ÷ 3.6 = **15 m/s**, a = 0.5 m/s², t = 20 s.

v = u + a t = 15 m/s + 0.5 m/s² × 20 s = 15 + 10 = **25 m/s** (= 90 km/h)
s = u t + ½ a t² = 15 m/s × 20 s + ½ × 0.5 m/s² × (20 s)² = 300 m + 100 m = **400 m**

Jaanch: s = ½ (u + v) t = ½ × (15 + 25) m/s × 20 s = 20 m/s × 20 s = 400 m ✅

### Example 5: Acceleration nikalna (u, v aur s se)

Ek truck 10 m/s se 20 m/s tak 150 m mein pahunchta hai (uniform acceleration). a aur time nikalo.

Diya hai: u = 10 m/s, v = 20 m/s, s = 150 m. t nahi diya, to **teesra equation**.

v² = u² + 2 a s, to 400 = 100 + 2 × a × 150, 300 = 300 a, **a = 1 m/s²**.

Time: v = u + a t, to 20 = 10 + 1 × t, **t = 10 s**.

Jaanch: s = u t + ½ a t² = 10 m/s × 10 s + ½ × 1 m/s² × (10 s)² = 100 m + 50 m = 150 m ✅

### Example 6: Bike jo rest se shuru ho

Ek bike rest se shuru hokar 100 m mein 72 km/h tak pahunchti hai. a aur t nikalo.

v = 72 km/h = **20 m/s**, u = 0, s = 100 m.

v² = u² + 2 a s, to 400 = 0 + 2 × a × 100, **a = 2 m/s²**.
t = (v − u) ÷ a = 20 m/s ÷ 2 m/s² = **10 s**.

Jaanch: s = ½ (u + v) t = ½ × 20 m/s × 10 s = 100 m ✅

### Example 7: Brake lagakar rukna: retardation nikalna

Ek car 54 km/h se chal rahi hai aur 45 m mein ruk jaati hai. Retardation aur time nikalo.

u = 54 km/h = **15 m/s**, v = 0, s = 45 m.

0 = (15)² + 2 × a × 45, yaani 0 = 225 + 90 a, to **a = −2.5 m/s²** (negative = retardation, yaani 2.5 m/s² ki retardation).
Time: 0 = 15 + (−2.5) × t, to t = 15 ÷ 2.5 = **6 s**.

Jaanch: s = u t + ½ a t² = 15 × 6 − ½ × 2.5 × 36 = 90 m − 45 m = 45 m ✅

### Example 8: Time nikalna (s se)

Ek cyclist 5 m/s se chal raha hai aur 2 m/s² ki acceleration se tez hota hai. Wo 24 m kitne time mein tay karega, aur us waqt uski speed kitni hogi?

u = 5 m/s, a = 2 m/s², s = 24 m.

s = u t + ½ a t²: 24 = 5 t + ½ × 2 × t² = 5 t + t², yaani t² + 5 t − 24 = 0.
Factor: (t + 8)(t − 3) = 0, to t = −8 ya t = 3. Time negative nahi ho sakta, to **t = 3 s**.

Final speed: v = 5 + 2 × 3 = **11 m/s**.

Jaanch: v² = u² + 2 a s = 25 + 2 × 2 × 24 = 121, aur 11² = 121 ✅

### Example 9 (thoda extra): n-th second mein tay ki hui doori

Ek body ke liye n-th second (yaani (n − 1)-th second ke end se n-th second ke end tak) mein tay ki hui doori nikalna.

Pehle n seconds mein doori: s(n) = u n + ½ a n².
Pehle (n − 1) seconds mein: s(n − 1) = u (n − 1) + ½ a (n − 1)².

Farak (ek second ki doori):

s_n = s(n) − s(n − 1) = u (n − (n − 1)) + ½ a (n² − (n − 1)²)

(n² − (n − 1)²) ko (a + b)(a − b) se likhein: (n + n − 1)(n − (n − 1)) = (2n − 1) × 1 = 2n − 1.

### **s_n = u + a (2n − 1) ÷ 2**

Numeric check: u = 5 m/s, a = 2 m/s², n = 4.
- s(4) = 5 × 4 + ½ × 2 × 16 = 20 + 16 = 36 m
- s(3) = 5 × 3 + ½ × 2 × 9 = 15 + 9 = 24 m
- Farak = 36 − 24 = **12 m**
- Formula se: s_4 = 5 + 2 × (2 × 4 − 1) ÷ 2 = 5 + 2 × 7 ÷ 2 = 5 + 7 = **12 m** ✅

### Example 10: Teen-stage wali yatra (accelerate, uniform, brake)

Ek bus rest se 1 m/s² se 10 s tak tez hoti hai. Phir wo 20 s tak constant speed se chalti hai. Phir brake lagakar 2 m/s² ki retardation se rukti hai. Kul doori aur kul time nikalo.

Har stage mein acceleration alag hai, to **stage-wise** karte hain.

**Stage 1 (tez hona):** u = 0, a = 1 m/s², t = 10 s.
v₁ = 0 + 1 × 10 = 10 m/s. s₁ = ½ × 1 × 10² = **50 m**.

**Stage 2 (constant speed):** a = 0, v = 10 m/s, t = 20 s.
s₂ = 10 m/s × 20 s = **200 m**.

**Stage 3 (brake):** u = 10 m/s, v = 0, a = −2 m/s².
t₃ = (0 − 10) ÷ (−2) = **5 s**. s₃ = (0 − 100) ÷ (2 × (−2)) = 100 ÷ 4 = **25 m**.

**Kul doori** = 50 + 200 + 25 = **275 m**. **Kul time** = 10 + 20 + 5 = **35 s**.
Average speed = 275 m ÷ 35 s ≈ 7.86 m/s.

Jaanch: v-t graph ka area (trapezium): ½ × (35 + 20) × 10 = ½ × 55 × 10 = 275 m ✅ (upar ki parallel sides 20 s aur 35 s, oonchai 10 m/s).

### Example 11: Alag-alag speed par stopping distance

Retardation 2.5 m/s² maan kar, stopping distance s = u² ÷ (2 × 2.5) = u² ÷ 5 se:

| Speed (km/h) | Speed (m/s) | Stopping time (s) | Stopping distance (m) |
|---|---|---|---|
| 18 | 5 | 2 | 5 |
| 36 | 10 | 4 | 20 |
| 54 | 15 | 6 | 45 |
| 72 | 20 | 8 | 80 |

Dekho: speed 18 → 36 (doguni) hui to distance 5 → 20 (chaar guna). 18 → 54 (teen guni) hui to 5 → 45 (nau guna = 3²). **Stopping distance speed ke square ke barabar badhti hai** (kyunki s = u² ÷ 2|a|).

---

## Summary: teen equations, kab kaunsa

| Equation | Naam / roop | Kab use karein |
|---|---|---|
| **v = u + a t** | Pehla equation | s nahi chahiye ya nahi diya |
| **s = u t + ½ a t²** | Doosra equation | v nahi chahiye ya nahi diya |
| **v² = u² + 2 a s** | Teesra equation | t nahi chahiye ya nahi diya |
| **s = ½ (u + v) t** | Average velocity form | a nahi chahiye ya nahi diya |

Yaad rakhein: shuru ki direction **+**, retardation par **a negative**, ruki gaadi par **v = 0**, aur sirf **uniform acceleration** par.

---

## Aam galtiyan (bachke rehna)

1. **Acceleration constant nahi hai fir bhi equations lagana.** Agar acceleration badal rahi hai (jaise Example 10 ke stages), to stage-wise tod kar hal karo.

2. **km/h ko m/s mein na badalna.** u = 36 km/h aur a = 2.5 m/s² seedha daal diya? Galat. Pehle 36 km/h = 10 m/s karo, tab hi s = 20 m milega.

3. **Retardation ka galat sign.** Brake lagne par a = −2.5 m/s² likhna hai. +2.5 likha to v² = 100 + 5 s, s negative aa jaayega, jo galat hai.

4. **Ruki hui gaadi ki final velocity ko u likhna.** "Gaadi ruk gayi" ka matlab **v = 0**, u nahi. u wo velocity hai jab brake lagana shuru kiya tha (Example 2: u = 20 m/s, v = 0).

5. **Direction badalne par distance daalna.** Equations mein s displacement hai. Maan lo ek trolley aage 20 m jaakar peeche 5 m aayi: distance = 25 m, par displacement = 15 m. s = 15 m hi likhna hai.

6. **Algebra mein phisalna.** v² − u² aur (v − u)² alag cheezein hain. Maan lo v = 5, u = 3: v² − u² = 25 − 9 = 16, par (v − u)² = 2² = 4. Teesre equation mein v² − u² hi aata hai.

7. **Doguni speed par stopping distance doguni maan lena.** Example 3 mein 36 km/h par 20 m, 72 km/h par 80 m. "Double" likhna (40 m) galat hai; sahi jawab chaar guna (80 m) hai, kyunki s ∝ u².

---

## Quick Recap

- Teen equations (uniform acceleration, seedhi line): **v = u + a t**, **s = u t + ½ a t²**, **v² = u² + 2 a s**. Saath mein **s = ½ (u + v) t**.
- Pehla equation a = (v − u) ÷ t se, doosra v-t graph ke trapezium ke area se, teesra t eliminate karke ((a + b)(a − b) ki madad se).
- Shuru ki direction positive; retardation par a negative; ruki gaadi par v = 0; s displacement hai.
- Pehle units SI mein badlo (km/h ÷ 3.6 = m/s).
- Teen cheezein pata hon, to table se wo equation chuno jisme na-pata aur na-chahiye wali cheez na ho.
- Stopping distance speed ke square ke saath badhti hai: speed doguni to distance chaar guni.
- Girti ya upar jaati cheezon ke liye a = ±g wale sawaal Gravitation chapter mein.

---

## Practice Questions

1. A car starts from rest and accelerates uniformly at 4 m/s² for 6 s. Find its final velocity and the distance covered.
2. A bike moving at 15 m/s is braked and stops in 3 s. Find the retardation and the stopping distance.
3. A car moving at 90 km/h is braked with a retardation of 5 m/s². Find the stopping time and the stopping distance.
4. A scooter has u = 4 m/s and a = 3 m/s². It covers 14 m. Find its final velocity and the time taken.
5. In the school zone, a car goes at 36 km/h, and a rash driver goes at 108 km/h (three times as fast). With the same retardation, how many times longer is the stopping distance of the rash driver?
6. A bus starts from rest and accelerates at 2 m/s² for 5 s, then moves at constant speed for 10 s, then brakes uniformly at 5 m/s² to rest. Find the total distance covered.
7. (Thoda extra) A body starts from rest with a = 4 m/s². Find the distance covered in the 5th second, and check it using s(5) − s(4).
8. A car stops in 50 m with a retardation of 4 m/s². Find its initial speed in m/s and km/h, and the stopping time.
9. True or false: (a) The equation s = u t + ½ a t² can be used for a car whose acceleration keeps changing. (b) For a braking car, a is taken as negative if the initial direction is positive. (c) If a car moves forward 30 m and then reverses 10 m, we put s = 40 m in the equations.

### Answers

1. u = 0, a = 4 m/s², t = 6 s. v = 0 + 4 m/s² × 6 s = **24 m/s**. s = ½ × 4 m/s² × (6 s)² = ½ × 4 × 36 m = **72 m**.
   Jaanch: v² = 2 a s = 2 × 4 × 72 = 576 = 24² ✅

2. u = 15 m/s, v = 0, t = 3 s. a = (0 − 15) ÷ 3 = **−5 m/s²** (retardation 5 m/s²). s = ½ × 15 × 3 = **22.5 m**.
   Jaanch: 0 = 225 + 2 × (−5) × 22.5 = 225 − 225 ✅

3. u = 90 km/h = 90 ÷ 3.6 = 25 m/s, v = 0, a = −5 m/s². t = (25 m/s) ÷ (5 m/s²) = **5 s**. s = (0 − 625 m²/s²) ÷ (2 × (−5 m/s²)) = **62.5 m**.
   Jaanch: s = 25 m/s × 5 s − ½ × 5 m/s² × (5 s)² = 125 m − 62.5 m = 62.5 m ✅

4. v² = 16 + 2 × 3 × 14 = 16 + 84 = 100, **v = 10 m/s**. t = (10 − 4) ÷ 3 = **2 s**.
   Jaanch: s = 4 × 2 + ½ × 3 × 4 = 8 + 6 = 14 m ✅

5. 36 km/h = 10 m/s, 108 km/h = 30 m/s. s ∝ u². Distance ka ratio = (30 ÷ 10)² = 3² = **9 guna**. Jaanch (a = 2.5 m/s² ke saath): 100 ÷ 5 = 20 m aur 900 ÷ 5 = 180 m, aur 180 ÷ 20 = 9 ✅

6. Stage 1: v = 2 × 5 = 10 m/s, s₁ = ½ × 2 × 25 = 25 m. Stage 2: s₂ = 10 × 10 = 100 m. Stage 3: s₃ = 100 ÷ (2 × 5) = 10 m (t₃ = 2 s). Kul = 25 + 100 + 10 = **135 m** (kul time 5 + 10 + 2 = 17 s).
   Jaanch (trapezium): ½ × (17 + 10) × 10 = ½ × 27 × 10 = 135 m ✅

7. s_5 = u + a (2n − 1) ÷ 2 = 0 + 4 × 9 ÷ 2 = **18 m**. Jaanch: s(5) = ½ × 4 × 25 = 50 m, s(4) = ½ × 4 × 16 = 32 m, farak = 18 m ✅

8. v² = u² + 2 a s: 0 = u² − 2 × 4 × 50 = u² − 400, **u = 20 m/s** = 20 × 3.6 = **72 km/h**. Time t = 20 ÷ 4 = **5 s**.
   Jaanch: s = ½ × 20 × 5 = 50 m ✅

9. (a) **False** ❌. Ye equations sirf uniform (constant) acceleration ke liye hain.
   (b) **True** ✅. Retardation ka matlab velocity ki ulti direction mein acceleration.
   (c) **False** ❌. Displacement = 30 − 10 = 20 m, s = 20 m dalna hai (distance 40 m hai).

---

Ek formula ne bata diya ki 36 km/h par 20 m aur 72 km/h par 80 m chahiye. Pranav ne Mr. Sinha ko dekha aur bola ki wo ab limit ka board dekh kar kabhi shikayat nahi karega. Mr. Sinha ne hans kar kaha, "Bas ye hisaab apne papa ko bhi sunana."

**Aage kya?** Ab tak sab seedhi line mein tha, ab ghumte hue motion ki baat. Topic 7 mein dekhenge ki jab cheez gol ghoomti hai (jaise ghadi ki sui ya merry-go-round) to speed same rehne par bhi velocity kyun badalti rehti hai.
