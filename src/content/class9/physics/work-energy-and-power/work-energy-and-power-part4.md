# Chapter: Work, Energy aur Power (Part 4)

> **Class:** 9 | **Subject:** Physics
> **Ye file [work-energy-and-power-part3.md](work-energy-and-power-part3.md) se aage chalti hai** (wahan energy = kaam karne ki kshamta, uski unit joule, aur energy ke roop tha). Chapter ki shuruaat [work-energy-and-power.md](work-energy-and-power.md) mein hai.
> **Topics covered in this file:**
> 4. Kinetic Energy

---

# Topic 4: Kinetic Energy

Topic 3 mein humne seekha tha ki **energy = kaam karne ki kshamta (ability to do work)**, aur ki chalti hui cheezon ke paas bhi energy hoti hai: girta paani turbine ghuma deta hai, chalta hathoda keel thok deta hai. Wahan ke end mein sawaal tha ki chalti hui cheez mein energy **kitni** hoti hai. Is topic mein hum wo formula **khud banayenge**, aur dekhenge ki speed ka asar itna zabardast kyun hota hai.

Prior knowledge jo hum use karenge: equations of motion ([motion-part6.md](../motion/motion-part6.md)) aur F = m a ([force-and-laws-of-motion-part6.md](../force-and-laws-of-motion/force-and-laws-of-motion-part6.md)).

---

## Ms. Nambiar, Aarna aur crash-test lab

Ek vehicle crash-test laboratory mein intern Aarna pehle din aayi thi. Engineer Ms. Nambiar usse test track par le gayi. Ek 1000 kg ki test car ko driver ke bina, remote se, ek mazboot barrier ki taraf chalaya gaya.

Pehla test: car **36 km/h** par barrier se takrayi. Bonnet par chhota sa dent pada. Ms. Nambiar ne measure karke note kiya.

Doosra test: wahi car, wahi barrier, par ab **72 km/h** par. Aarna ne dekha ki bonnet puri tarah pichak gaya, aur dent pehle se **do guna nahi, kahin zyada bada** tha.

Aarna ne poocha, "Ma'am, speed to sirf doguni thi. Nuksan do guna kyun nahi hua? Itna zyada kyun hua?"

Ms. Nambiar muskurayi. "Bahut achha sawaal. Car ke paas takraane se pehle **energy** thi, aur wahi barrier ko todne ka kaam karti hai. Sawaal ye hai ki **chalne ki wajah se** car ke paas kitni energy hoti hai, aur wo speed par kaise depend karti hai. Iska formula hum nikalte hain, phir isi dent ka hisaab lagate hain."

Is topic ke end tak Aarna ka sawaal poori tarah solve ho jayega.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Kinetic energy (KE)** | Kisi cheez ke paas uski **motion (chalne)** ki wajah se jo energy hoti hai | 10 m/s se chalti car ki KE 50000 J |
| **Scalar** | Sirf size (magnitude) wali quantity, direction nahi | KE: bas "kitni", "kis taraf" nahi |
| **Net force** | Body par lagne wale saare forces ka total | Brake ka force jab baaki forces cancel ho jayein |
| **Work-energy relation** | Net force ka kiya hua kaam = KE mein badlaav | W = ½ m v² − ½ m u² |
| **Stopping distance** | Brake lagne se rukne tak chali doori | 1000 kg car, 10 m/s, 5000 N: 10 m |
| **Joule (J)** | Energy aur work ki SI unit: 1 J = 1 kg m²/s² | 1 N × 1 m = 1 J |

---

## Part A: Kinetic energy ka formula banate hain

**Kinetic energy** wo energy hai jo kisi body ke paas uski **motion** ki wajah se hoti hai. Rest par KE zero, jitna tez chalti hai utni zyada.

Ek tareeke se KE ko napne ke liye poochho: "Is body ko **rest se is speed tak laane mein kitna kaam karna padega?**" Wahi kaam body mein KE ban kar jama ho jata hai (Topic 3 ka idea: work = energy ka transfer).

**Setting:** m kg ki body rest se shuru hoti hai (u = 0). Ek **constant force F** use seedhi line mein s doori tak dhakelta hai, aur wo speed v tak pahunch jaati hai.

**Step 1:** Force ka kiya hua kaam (Topic 1):

W = F × s

**Step 2:** F = m a (Newton ka doosra niyam):

W = (m a) × s = m × (a s)

**Step 3:** Equation of motion v² = u² + 2 a s mein u = 0 daalein:

v² = 2 a s, yaani **a s = v² ÷ 2**

**Step 4:** Step 2 mein a s ki jagah v² ÷ 2:

W = m × (v² ÷ 2)

### **W = ½ m v²**

Ye kaam body mein KE ban gaya, to:

### **KE = ½ m v²**

**Units ka check:** m kg mein, v m/s mein:

KE = ½ × kg × (m/s)² = ½ × kg × m²/s² = ½ × (kg m/s²) × m = ½ × N × m = joule

Yaani **1 kg m²/s² = 1 N m = 1 J**. Unit sahi jaa rahi hai.

```
 rest (u = 0)                      speed v
   [ m ] ---- F ---->   . . . . . .  [ m ] ---->
   :<---------- s (doori) --------->:
   kaam W = F x s  ==>  KE = (1/2) m v^2
```

> **Figure 4.1** – Rest se shuru body par constant force F s doori tak lagta hai. Kiya hua kaam W = F s hi body ki KE ban jaata hai: ½ m v².

**Samajhne wali baat:** Formula mein **v ka square** hai. Wahi square speed ke asar ko itna bada bana deta hai (Part C mein dekhenge).

---

## Part B: Work-energy relation (u ≠ 0 ho to)

Agar body pehle se u speed se chal rahi ho, aur net force F use s doori par v speed tak le jaaye? Equation: v² − u² = 2 a s.

**Step 1:** Dono taraf ½ m se multiply karein:

½ m (v² − u²) = ½ m × 2 a s = m a s

**Step 2:** m a = F (net force), to m a s = F s = W:

½ m v² − ½ m u² = F s

### **W (net force ka kaam) = ½ m v² − ½ m u² = KE(final) − KE(initial) = ΔKE**

(Δ ka matlab "badlaav": ΔKE = final KE − initial KE.)

**Matlab:** net force ne jitna kaam kiya, utna hi body ki KE badli.
- Kaam **positive** (force motion ki direction mein) to KE **badhti** hai.
- Kaam **negative** (force motion ke ulta, jaise brake; Topic 2) to KE **ghatti** hai.
- Rest se shuru (u = 0): W = ½ m v² (Part A wala formula wapas).

*Dhyan:* yahan sirf **constant force, seedhi line** ki baat hai, jo Class 9 ke liye kaafi hai.

---

## Part C: KE kin cheezon par depend karti hai?

KE = ½ m v² mein do hi cheezein hain: **m** aur **v**.

1. **Mass:** KE seedhi mass ke saath badhti hai. Mass **doguna** to KE **doguni**; mass teen guna to KE teen guni.
2. **Speed:** KE speed ke **square** ke saath badhti hai.
   - Speed **doguni**: KE = ½ m (2v)² = ½ m × 4 v² = **4 guni**
   - Speed **teen guni**: KE = ½ m (3v)² = ½ m × 9 v² = **9 guni**
   - Speed **aadhi**: KE = ½ m (v/2)² = ½ m v²/4 = **chauthai**

| Speed (m/s) | Speed kitni guni | KE (1000 kg car) | KE kitni guni |
|---|---|---|---|
| 10 | 1 | 50000 J | 1 |
| 20 | 2 | 200000 J | 4 |
| 30 | 3 | 450000 J | 9 |
| 40 | 4 | 800000 J | 16 |

(Check: ½ × 1000 × 40² = 500 × 1600 = 800000 J ✅)

3. **KE scalar hai.** Isme direction nahi hoti. Uttar jaaye ya dakshin, 10 m/s par 1000 kg ki car ki KE 50000 J hi hai.
4. **KE kabhi negative nahi hoti**, kyunki m positive hai aur v² bhi hamesha positive (ya zero) hai. Chahe v = −10 m/s likho (ulti direction), v² = 100 hi aayega.
5. **Rest par KE = 0**, kyunki v = 0.

### Crash test ka jawab

Ab Aarna ka sawaal. 1000 kg ki car:

- 36 km/h = 36 ÷ 3.6 = **10 m/s**. KE = ½ × 1000 kg × (10 m/s)² = ½ × 1000 × 100 = **50000 J**
- 72 km/h = 72 ÷ 3.6 = **20 m/s**. KE = ½ × 1000 kg × (20 m/s)² = ½ × 1000 × 400 = **200000 J**

Speed 2 guni hui, par KE **4 guni** (200000 ÷ 50000 = 4). Barrier ko todne mein ye saari energy kaam aati hai, isliye dent kahin bada hai.

Ms. Nambiar ne Aarna se kaha, "Speed ka square dekho. Isi ka naam hai: **speed zyada, khatra kai guna zyada**."

---

## Part D: Alag-alag cheezon ki KE ki tulna

| Cheez | Mass | Speed | KE = ½ m v² |
|---|---|---|---|
| Cricket ball | 0.16 kg | 30 m/s | ½ × 0.16 × 900 = 72 J |
| Bullet | 0.01 kg (10 g) | 400 m/s | ½ × 0.01 × 160000 = 800 J |
| Truck | 5000 kg | 10 m/s (36 km/h) | ½ × 5000 × 100 = 250000 J |

- Bullet bahut halki hai, par uski speed itni zyada hai (square!) ki uski KE cricket ball se **kareeb 11 guni** hai (800 ÷ 72 ≈ 11.1).
- Truck dheere chal raha hai, par uska mass bahut bada hai, isliye KE **bullet se 312.5 guni** (250000 ÷ 800 = 312.5).
- Matlab: sirf mass dekhna ya sirf speed dekhna kaafi nahi, **dono** chahiye.

---

## Part E: Stopping distance aur KE

Brake lagane par car rukti hai. Brake ka force car ki saari KE ko **hata dena** (zero kar dena) hai. Brake force F, rukne tak doori s:

**F × s = ½ m v²** (brake ne jo kaam kiya, wo utni hi KE hatata hai)

To **s = ½ m v² ÷ F**.

**1000 kg car, 5000 N ka brake force:**

- 10 m/s par: KE = 50000 J. s = 50000 J ÷ 5000 N = **10 m**
- 20 m/s par: KE = 200000 J. s = 200000 J ÷ 5000 N = **40 m**

Speed doguni, stopping distance **chaar guni**, kyunki KE chaar guni hai aur force wahi hai. Ye wahi baat hai jo [motion-part6.md](../motion/motion-part6.md) mein s = u² ÷ (2a) se mili thi, ab energy ki nazar se.

Jaanch (motion equations se): a = F ÷ m = 5000 ÷ 1000 = 5 m/s² (retardation). s = u² ÷ (2a) = 100 ÷ 10 = 10 m ✅, aur 400 ÷ 10 = 40 m ✅

```
 10 m/s par:  [car]=====>          rukti hai 10 m mein
              ├────────┤
 20 m/s par:  [car]=====>                                rukti hai 40 m mein
              ├────────────────────────────────────────┤
```

> **Figure 4.2** – Speed doguni (10 se 20 m/s) karne par wahi brake force car ko 10 m ki jagah 40 m mein rokta hai.

---

## Part F: Tez speed khatarnak kyun?

- Speed 2 guni, KE 4 guni; speed 3 guni, KE 9 guni. Takkar mein ye energy gaadi ko aur insaan ko pichkaati hai.
- Rukne ki doori bhi usi dar se badhti hai, isliye tez gaadi achanak saamne aaye bachche ya cyclist se pehle nahi ruk paati.
- **Seat belt:** takkar mein body ki KE ko dheere-dheere (lambi doori mein) hata deta hai, taaki force bahut bada na ho.
- **Helmet:** sir ki KE ko absorb karne mein madad karta hai.
- Isiliye school zone aur ghati wali sadakon par **speed limit** hoti hai. Speed limit sirf jurmana nahi, physics ka niyam hai.

---

## Part G: Solved examples

### Example 1: KE nikalna (m aur v se)

0.16 kg ki cricket ball 30 m/s se aa rahi hai. Uski KE?

KE = ½ m v² = ½ × 0.16 kg × (30 m/s)² = ½ × 0.16 × 900 kg m²/s² = 0.08 × 900 = **72 J**

Jaanch: 0.16 × 900 = 144, aur 144 ÷ 2 = 72 ✅

### Example 2: Daudta hua runner

60 kg ka runner 8 m/s se daud raha hai. KE?

KE = ½ × 60 kg × (8 m/s)² = ½ × 60 × 64 = 30 × 64 = **1920 J**

Jaanch: 1920 ÷ 30 = 64 = 8² ✅

### Example 3: KE aur m se v nikalna

2 kg ki body ki KE 900 J hai. Uski speed?

KE = ½ m v², to v² = 2 × KE ÷ m = 2 × 900 J ÷ 2 kg = 900 m²/s², to **v = 30 m/s**.

Jaanch: ½ × 2 × 30² = 900 J ✅

### Example 4: KE aur v se m nikalna

Ek body 15 m/s se chal rahi hai aur uski KE 2250 J hai. Mass?

m = 2 × KE ÷ v² = 2 × 2250 J ÷ (15 m/s)² = 4500 ÷ 225 = **20 kg**.

Jaanch: ½ × 20 × 225 = 10 × 225 = 2250 J ✅

### Example 5: km/h ko pehle m/s mein

Scooter aur savaar ka total mass 150 kg hai, speed 54 km/h. KE?

**Pehle units:** 54 km/h = 54 ÷ 3.6 = **15 m/s**.

KE = ½ × 150 kg × (15 m/s)² = 75 × 225 = **16875 J**

Jaanch: 75 × 225 = 75 × 200 + 75 × 25 = 15000 + 1875 = 16875 ✅

*(Galti: 54 seedha daalte to ½ × 150 × 54² = 218700 J aata, jo bilkul galat hai.)*

### Example 6: Speed 2 guni aur 3 guni (ratio)

1000 kg car ki speed 10 m/s se 30 m/s hui (teen guni). KE ka ratio?

KE(10 m/s) = ½ × 1000 kg × (10 m/s)² = 50000 J
KE(30 m/s) = ½ × 1000 kg × (30 m/s)² = 450000 J
Ratio = 450000 ÷ 50000 = **9**, yaani 3² ✅

### Example 7: Rest se 20 m/s tak kitna kaam?

1000 kg car ko rest se 20 m/s tak laane mein kitna kaam chahiye?

W = ΔKE = ½ m v² − ½ m u² = ½ × 1000 kg × (20 m/s)² − 0 J = 200000 J − 0 J = **200000 J** (200 kJ)

Jaanch: ye wahi KE hai jo crash test mein 72 km/h par thi ✅

### Example 8: 10 se 20 m/s tak kitna kaam? (jaal wala sawaal)

Wahi car ab 10 m/s se 20 m/s tak tez hoti hai. Kaam?

W = ½ × 1000 kg × (20 m/s)² − ½ × 1000 kg × (10 m/s)² = 200000 J − 50000 J = **150000 J**

Rest se 10 m/s tak ka kaam sirf 50000 J tha. Dono "10 m/s ki badhat" hain, par kaam alag: **150000 J ≠ 50000 J**.

**Kyun?** Kaam KE ke badlaav ke barabar hota hai, aur KE v² se badhti hai, v se nahi. Speed ko jitna upar le jao, utni hi zyada energy ek m/s badhane mein lagti hai.

Jaanch: 50000 J + 150000 J = 200000 J = rest se 20 m/s tak ka kaam (Example 7) ✅

### Example 9: Stopping distance

1000 kg car 10 m/s par chal rahi hai. Brake force 5000 N. Kitni doori mein rukegi? Phir 20 m/s par?

F s = ½ m v², to s = ½ m v² ÷ F.

10 m/s: s = 50000 J ÷ 5000 N = **10 m**
20 m/s: s = 200000 J ÷ 5000 N = **40 m**

Jaanch: 40 ÷ 10 = 4 = 2² ✅

### Example 10: Girte patthar ki KE

2 kg ka patthar rest se girta hai. 2 s baad (g = 10 m/s²) uski KE? (Girti cheezon ka poora hisaab [gravitation-part4.md](../gravitation/gravitation-part4.md) mein hai.)

v = u + g t = 0 + 10 m/s² × 2 s = **20 m/s**
KE = ½ × 2 kg × (20 m/s)² = 1 × 400 = **400 J**

Jaanch: v² = 2 g s, to s = 400 ÷ 20 = 20 m. Gravity ka kaam = m g s = 2 × 10 × 20 = 400 J = KE ✅ (gravity ka kaam hi KE ban gaya, Part B jaisa)

### Example 11: Brake ka kiya hua kaam (negative work)

1000 kg car 20 m/s par chal rahi hai aur brake lagakar ruk jaati hai. Brake ne kitna kaam kiya?

W(brake) = ΔKE = 0 J − ½ × 1000 kg × (20 m/s)² = 0 J − 200000 J = **−200000 J**

Kaam **negative** hai, kyunki brake ka force car ki motion ke ulta hai (Topic 2).

Jaanch: Example 9 mein brake force 5000 N, doori 40 m. Force ulta hai, to W = −5000 N × 40 m = −200000 J ✅

### Example 12: Kitni speed chahiye?

Ek 1000 kg car ki KE 112500 J hai. Speed m/s aur km/h mein?

v² = 2 × 112500 J ÷ 1000 kg = 225 m²/s², to **v = 15 m/s** = 15 × 3.6 = **54 km/h**.

Jaanch: ½ × 1000 × 225 = 112500 J ✅

---

## Aam galtiyan (bachke rehna)

1. **Speed ko square karna bhool jaana.** Car 10 m/s, 1000 kg: ½ × 1000 × 10 = 5000 J likha? Galat. Sahi: ½ × 1000 × 10² = 50000 J.

2. **km/h seedha daalna.** 36 km/h daalne par ½ × 1000 × 36² = 648000 J aata hai, jo galat hai. Pehle 36 km/h = 10 m/s karo.

3. **½ m v likhna, ½ m v² nahi.** Wo momentum jaisa dikhta hai, KE nahi. Unit check: kg × m/s = kg m/s, joule nahi.

4. **"Speed doguni to KE bhi doguni."** Galat. Speed 2 guni to KE 4 guni (50000 J se 200000 J).

5. **KE negative maan lena.** Brake lagane par KE ghatti hai, par kabhi zero se neeche nahi jaati. **Negative kaam** hota hai (−200000 J), KE nahi.

6. **Speed ke badlaav ko seedha jodna.** 0 se 10 m/s ka kaam (50000 J) aur 10 se 20 m/s ka kaam (150000 J) barabar nahi. Kaam KE ke badlaav se nikalta hai, speed ke badlaav se nahi.

---

## Quick Recap

- **KE = ½ m v²**: motion ki wajah se energy. Unit joule (1 kg m²/s² = 1 J).
- Derivation: W = F s = (m a) s, aur v² = 2 a s (u = 0) se a s = v²/2, to W = ½ m v².
- **Work-energy relation** (constant force, seedhi line): W = ½ m v² − ½ m u² = ΔKE.
- KE mass ke seedhe saath, **speed ke square** ke saath: speed 2 guni, KE 4 guni; speed 3 guni, KE 9 guni.
- KE scalar hai, kabhi negative nahi, rest par zero.
- Brake ko saari KE hatani hoti hai: F s = ½ m v². Speed doguni, stopping distance chaar guni.
- Seat belt aur helmet takkar mein KE ko dheere absorb karte hain.
- Hamesha km/h ko m/s mein badlo (÷ 3.6).

---

## Practice Questions

1. Find the kinetic energy of a 50 kg cyclist (with the cycle) moving at 6 m/s.
2. A 0.2 kg ball has a KE of 100 J. What is its speed?
3. A body moving at 4 m/s has a KE of 160 J. Find its mass.
4. A 1200 kg car moves at 72 km/h. Find its KE in joules and kilojoules.
5. The speed of a car is tripled. By what factor does its KE change? What happens to its KE if its mass is doubled and its speed is halved?
6. How much work is needed to increase the speed of a 500 kg car from 5 m/s to 15 m/s? Is it the same as the work needed to go from rest to 10 m/s? Explain.
7. An 800 kg car moving at 15 m/s is stopped by a constant brake force of 4000 N. Find the stopping distance. If the car had been moving at 30 m/s, what would the distance be?
8. A 3 kg stone falls freely from rest for 3 s (take g = 10 m/s²). Find its speed and its KE after 3 s.
9. A brake brings a 1500 kg car moving at 20 m/s to rest. Find the work done by the brake. Why is it negative?
10. True or false: (a) The KE of a body can be negative. (b) A body with KE = 0 must be at rest. (c) KE = ½ m v has the unit joule. (d) A heavier body moving at the same speed has more KE.

### Answers

1. KE = ½ × 50 kg × (6 m/s)² = 25 × 36 = **900 J**.
   Jaanch: 900 ÷ 25 = 36 = 6² ✅

2. v² = 2 × 100 J ÷ 0.2 kg = 1000 m²/s², **v ≈ 31.6 m/s**.
   Jaanch: ½ × 0.2 × 1000 = 100 J ✅ (31.6² ≈ 1000)

3. m = 2 × 160 J ÷ (4 m/s)² = 320 ÷ 16 = **20 kg**.
   Jaanch: ½ × 20 × 16 = 160 J ✅

4. 72 km/h = 20 m/s. KE = ½ × 1200 kg × (20 m/s)² = 600 × 400 J = **240000 J = 240 kJ**.
   Jaanch: 240000 ÷ 600 = 400 = 20² ✅

5. Speed 3 guni to KE **9 guni** (3²). Mass 2 guna aur speed aadhi: KE = ½ (2m)(v/2)² = ½ × 2 m × v²/4 = ½ m v² × (2/4) = original ka **aadha**.
   Jaanch (numbers: m = 1 kg, v = 2 m/s): original 2 J. Naya: ½ × 2 × 1² = 1 J, yaani aadha ✅

6. W(5 se 15) = ½ × 500 kg × (15 m/s)² − ½ × 500 kg × (5 m/s)² = 56250 J − 6250 J = **50000 J**.
   W(0 se 10) = ½ × 500 kg × (10 m/s)² = 25000 J. Dono alag hain (50000 J ≠ 25000 J), kyunki kaam KE ke badlaav se milta hai aur KE v² par depend karti hai. Speed ka badlaav dono mein 10 m/s hai, par KE ka badlaav alag.

7. 15 m/s: KE = ½ × 800 kg × (15 m/s)² = 90000 J, s = 90000 J ÷ 4000 N = **22.5 m**. 30 m/s: KE = ½ × 800 kg × (30 m/s)² = 360000 J, s = 360000 J ÷ 4000 N = **90 m** (4 guna, kyunki speed doguni).
   Jaanch: 90 ÷ 22.5 = 4 = 2² ✅

8. v = g t = 10 m/s² × 3 s = **30 m/s**. KE = ½ × 3 kg × (30 m/s)² = **1350 J**.
   Jaanch: s = ½ g t² = ½ × 10 × 9 = 45 m, m g s = 3 × 10 × 45 = 1350 J ✅

9. W = 0 J − ½ × 1500 kg × (20 m/s)² = −750 × 400 J = **−300000 J**. Negative kyunki brake ka force car ki motion ke ulta hai, aur wo car ki KE ghata raha hai.
   Jaanch: 750 × 400 = 300000 ✅

10. (a) **False** ❌. m aur v² dono non-negative hain.
    (b) **True** ✅. KE = 0 to v = 0 (m ≠ 0).
    (c) **False** ❌. Sahi formula ½ m v² hai; ½ m v ki unit kg m/s hai.
    (d) **True** ✅. Same speed par KE mass ke seedhe saath badhti hai.

---

Aarna ne notebook mein likha: "36 km/h par 50000 J, 72 km/h par 200000 J, speed doguni to KE chaar guni." Ms. Nambiar ne kaha, "Ab jab bhi gaadi mein baithogi, seat belt zaroor lagana. Ye physics tumhari jaan bachayegi."

**Aage kya?** Ab tak energy sirf chalne par thi. Par kya ek cheez jo **bilkul chal hi nahi rahi** (ek jagah rakhi hui) bhi energy rakhti hai? Topic 5 mein dekhenge: **ab bina chale bhi energy: unchai par rakhi cheez ki energy**.
