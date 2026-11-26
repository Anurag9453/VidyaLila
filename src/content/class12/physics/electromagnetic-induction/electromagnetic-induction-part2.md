# Chapter: Electromagnetic Induction (Part 2)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Faraday's Law and Lenz's Law](electromagnetic-induction.md)

---

## Hawaai Jahaaz ke Pankhon par Banta Voltage!

Aviation museum mein **Lavina** ne ek interesting fact card padha: "Jab koi hawaai jahaaz (aeroplane) 900 km/h ki speed se aasman mein seedha udta hai, to uske dono metal wings ke kinaron (tips) ke beech lagbhag **0.4 Volt** ka potential difference ban jaata hai!"

Lavina ne socha: "Aasman mein koi magnet to hil nahi raha — Earth ka magnetic field to constant hai! Phir wings par voltage kahan se aaya?"

Papa ne muskurakar bataya: "Kyunki aeroplane ke metal wings khud Earth ke vertical magnetic field lines ko **kaat (cut)** rahe hain! Kisi conductor ke magnetic field mein chalne se banne wale EMF ko **Motional EMF** kehte hain!"

---

## Naye Shabd (New Words)

- **Motional EMF (ε):** Kisi uniform magnetic field **B** ke perpendicular chalne wali (length **l**, speed **v**) conducting rod ke dono sirhon ke beech paida hone wala EMF: **ε = B l v**.
- **Fleming's Right-Hand Rule:** Induced current ki direction batane wala niyam (Right hand ke Thumb, Forefinger, Middle finger ko 90° par rakho: **Thumb = Motion (v)**, **Forefinger = Field (B)**, to **Middle finger = Induced Current (I)**!).

---

## 1. Motional EMF ka Derivation (Sliding Rod on U-Shaped Rails)

Maan lo ek U-shaped conducting rail par ek metal rod (length **l**) uniform magnetic field **B** (page ke andar, perpendicular) mein constant speed **v** se left/right khisak rahi hai:

```
     x    x    x    x    x      (B into the page)
     +--------------+
     :              : ---> v
     :     Area     :  rod (length l)
     :     = l x    :
     +--------------+
     :<----- x ---->:
```

1. Kisi pal loop ka area **A = l x** ⟹ Magnetic flux **Φ_B = B A = B l x**.
2. Samay Δt mein rod doori **Δx = v Δt** aage badhti hai ⟹ flux change **ΔΦ_B = B l Δx = B l v Δt**.
3. Faraday's law se induced EMF ka magnitude:
   **ε = ΔΦ_B / Δt = (B l v Δt) / Δt** ⟹

**ε = B l v**  *(jab B, l aur v teeno aapas mein 90° par hon!)*

*(Alternative microscopic 'kyun': Rod ke andar har free electron par Lorentz force **F_m = e v B** lagta hai jo electrons ko ek sire par dhakel deta hai, jisse electric field E = vB aur potential difference **ε = E l = B l v** ban jaata hai!)*

---

## 2. Energy Conservation in Motional EMF (Mechanical Power = Electrical Power!)

Agar rod aur rails ke closed loop ka total resistance **R** hai:
1. **Induced Current:** **I = ε / R = (B l v) / R**.
2. **Opposing Magnetic Force:** Current-carrying rod par magnetic field ulta force lagata hai (Lenz's law!):
   **F = I l B = (B² l² v) / R** (motion ke opposite!).
3. **Mechanical Power Needed** (rod ko constant speed v se kheenchne ke liye):
   **P_mech = F × v = (B² l² v²) / R**.
4. **Electrical Power Dissipated (Joule Heating):**
   **P_elec = I² R = [ (B l v) / R ]² × R = (B² l² v²) / R**!

**Dekha?!** **P_mech = P_elec**! Hum jitni mechanical power rod ko kheenchne mein lagate hain, theek utni hi electrical power heat bankar nikalti hai!

---

## 3. Rotating Conducting Rod in a Uniform Magnetic Field

Agar length **l** ki ek metal rod (ya cycle ke pahiye ka spoke) apne ek sire (centre) ke chaaron taraf uniform perpendicular magnetic field **B** mein constant angular velocity **ω** se ghoom rahi ho:
- Centre par speed = **0**; bahari sire par speed = **ω l**.
- Rod ki **average speed = (0 + ω l) / 2 = ½ ω l**!
- Isliye centre aur bahari sire ke beech induced EMF:

**ε = B l v_avg = ½ B ω l²**  *(ya frequency f ke terms mein: **ε = π B f l²**, kyunki ω = 2πf!)*

*(Bonus: Agar pahiye mein 10 ya 20 spokes hon, to sabhi spokes centre aur rim ke beech **parallel** mein jude hote hain — isliye net EMF ab bhi wahi **½ B ω l²** rehta hai, spokes ki ginti par depend nahi karta!)*

---

## Solved Examples

### Example 1: Aeroplane Wingspan Motional EMF
An aeroplane with a metallic wingspan of **l = 40 m** flies horizontally at **v = 250 m/s** (900 km/h) in a region where the vertical component of Earth's magnetic field is **B_V = 4.0 × 10⁻⁵ T**. Calculate the potential difference induced between the tips of its wings.

**Hal (Solution):**
- Horizontal wing (l), horizontal velocity (v), aur vertical field (B_V) teeno mutually perpendicular hain!
- ε = B_V l v = (4.0 × 10⁻⁵) × 40 × 250 = (4.0 × 10⁻⁵) × 10⁴ = **0.40 V**.
- **Jaanch:** 40 × 250 = 10,000 = 10⁴; 4 × 10⁻⁵ × 10⁴ = 0.40 V ✅.

### Example 2: Sliding Rod — EMF, Current, Force & Power
A conducting rod of length **l = 0.50 m** slides at **v = 4.0 m/s** on frictionless U-shaped rails in a perpendicular magnetic field **B = 0.60 T**. The total circuit resistance is **R = 3.0 Ω**. Calculate:
(a) induced EMF **ε**, (b) induced current **I**, (c) external pulling force **F**, and (d) mechanical power vs electrical power.

**Hal (Solution):**
- (a) ε = B l v = 0.60 × 0.50 × 4.0 = **1.2 V**.
- (b) I = ε / R = 1.2 / 3.0 = **0.40 A**.
- (c) F = I l B = 0.40 × 0.50 × 0.60 = **0.12 N**.
- (d) P_mech = F v = 0.12 × 4.0 = **0.48 W**; P_elec = I² R = (0.40)² × 3.0 = 0.16 × 3.0 = **0.48 W**!
- **Jaanch:** P_mech = P_elec = 0.48 W (exact energy conservation!) ✅.

### Example 3: Rotating Metal Rod
A 1.0 m long metallic rod is rotated about one end with angular frequency **ω = 20 rad/s** in a plane perpendicular to a uniform magnetic field **B = 0.20 T**. Find the EMF induced between the two ends of the rod.

**Hal (Solution):**
- ε = ½ B ω l² = 0.5 × 0.20 × 20 × (1.0)² = **2.0 V**.
- **Jaanch:** 0.5 × 0.20 = 0.10; 0.10 × 20 = 2.0 V ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Induced current ke liye Fleming's Left-Hand Rule laga dena:**
   - *Galat:* Generator / motional EMF mein left hand use karna!
   - *Sahi:* **Left-Hand Rule = Force (Motor)**; **Right-Hand Rule = Induced Current (Generator / Motional EMF)**!
2. **Rotating rod mein 1/2 bhool kar ε = B ω l² likh dena:**
   - *Galat:* Bahari sire ki speed v = ωl poore rod ke liye maan lena.
   - *Sahi:* Rod ke alag-alag hisson ki speed 0 se ωl tak badhti hai ⟹ average speed **½ ωl** ⟹ **ε = ½ B ω l²**!
3. **Magnetic field ke parallel chalne wali rod par bhi Blv laga dena:**
   - *Galat:* Rod field lines ke saath-saath chal rahi hai tab bhi Blv nikaalna.
   - *Sahi:* Jab tak rod magnetic field lines ko **kaat'ti (cut)** nahi hai (v ∥ B ya l ∥ B), tab tak **ε = 0**!

---

## Quick Recap

| Case | Formula | Key Point |
|---|---|---|
| Straight rod moving ⊥ to B | ε = B l v | B, l, v must be mutually perpendicular |
| Sliding rod on rails (resistance R) | I = Blv/R; F = B²l²v/R; P = B²l²v²/R | P_mech = Fv = I²R = P_elec |
| Rotating rod (length l, ω) | ε = ½ B ω l² = π B f l² | Multiple spokes in parallel give the SAME EMF! |
| Direction Rule | Fleming's **Right-Hand** Rule | Thumb = v, Forefinger = B, Middle = I |

---

## Practice Questions

1. State Fleming's Right-Hand Rule for finding the direction of induced current.
2. Under what condition is the motional EMF across a moving conducting rod equal to zero, even when the rod is moving fast in a strong magnetic field?
3. A train moves horizontally on a straight track at 30 m/s. The distance between its two rails (axle length) is 1.5 m, and the vertical component of Earth's magnetic field is 4.0 × 10⁻⁵ T. Calculate the EMF induced across the axle.
4. A 1.0 m long rod moves perpendicular to a uniform magnetic field of 0.50 T at a constant speed of 6.0 m/s on frictionless rails of total resistance 1.5 Ω. Find (a) the induced EMF, (b) the induced current, and (c) the force needed to keep it moving at constant speed.
5. In Question 4, verify quantitatively that the mechanical power supplied equals the electrical power dissipated as heat.
6. A metallic spoke of length 0.50 m in a bicycle wheel rotates at 10 revolutions per second in a plane perpendicular to a horizontal magnetic field B = 0.40 G (4.0 × 10⁻⁵ T). Calculate the induced EMF between the axle and the rim (take π = 3.14).
7. If the bicycle wheel in Question 6 has **24 identical spokes**, what will be the net EMF between the axle and the rim? Why?
8. A horizontal straight wire 10 m long extending from East to West is falling with a speed of 5.0 m/s at right angles to the horizontal component of Earth's magnetic field B_H = 3.0 × 10⁻⁵ T. Find the instantaneous EMF induced in the wire.
9. State whether True or False: When a conducting rod moves across a magnetic field, it experiences a magnetic braking force that opposes its motion only when it is part of a closed circuit.
10. A jet plane travels horizontally at 500 m/s with wingspan 25 m at a place where Earth's total magnetic field is 5.0 × 10⁻⁴ T and the angle of dip is 30°. Calculate the EMF induced across its wingtips.

### Answers

1. **Fleming's Right-Hand Rule:** Right hand ke Thumb, Forefinger aur Middle finger ko ek-doosre ke 90° par failao — agar **Thumb** conductor ke **Motion (v)** aur **Forefinger** **Magnetic Field (B)** ki direction dikhaye, to **Middle finger** **Induced Current (I)** ki direction dikhayega.

2. Jab conductor **magnetic field ke parallel** chale (v ∥ B) ya conductor ki length khud B ya v ke parallel ho — kyunki tab koi magnetic field lines cut nahi hoti ⟹ **ε = 0**.

3. ε = B_V l v = (4.0 × 10⁻⁵) × 1.5 × 30 = (4.0 × 10⁻⁵) × 45 = **1.8 × 10⁻³ V = 1.8 mV**.
   Jaanch: 1.5 × 30 = 45; 4 × 45 = 180 ⟹ 1.8 × 10⁻³ V ✅.

4. (a) ε = B l v = 0.50 × 1.0 × 6.0 = **3.0 V**.
   (b) I = ε / R = 3.0 / 1.5 = **2.0 A**.
   (c) F = I l B = 2.0 × 1.0 × 0.50 = **1.0 N**.
   Jaanch: 0.5 × 6 = 3 V; 3/1.5 = 2 A; 2 × 0.5 = 1 N ✅.

5. P_mech = F × v = 1.0 × 6.0 = **6.0 W**.
   P_elec = I² R = (2.0)² × 1.5 = 4 × 1.5 = **6.0 W**.
   Jaanch: Dono bilkul barabar hain (6.0 W = 6.0 W) ✅.

6. f = 10 Hz, l = 0.50 m, B = 4.0 × 10⁻⁵ T:
   ε = π B f l² = 3.14 × (4.0 × 10⁻⁵) × 10 × (0.50)² = 3.14 × 4.0 × 10⁻⁴ × 0.25 = **3.14 × 10⁻⁴ V = 0.314 mV**.
   Jaanch: 4 × 0.25 = 1; 3.14 × 10⁻⁴ V ✅.

7. **3.14 × 10⁻⁴ V (bilkul same!)** — kyunki sabhi 24 spokes axle aur rim ke beech **parallel** mein jude hain, aur parallel mein identical EMFs ka net EMF wahi rehta hai!

8. Wire (East-West), velocity (vertically downward), aur B_H (South-North) teeno mutually perpendicular hain:
   ε = B_H l v = (3.0 × 10⁻⁵) × 10 × 5.0 = **1.5 × 10⁻³ V = 1.5 mV**.
   Jaanch: 3 × 50 × 10⁻⁵ = 1.5 × 10⁻³ V ✅.

9. **True ✅.** Open rod mein koi continuous current I nahi behta (I = 0 ⟹ F = ILB = 0); braking force tabhi lagta hai jab circuit closed ho aur induced current I behe!

10. Horizontal plane ke wings sirf Earth ke **vertical component B_V** ko cut karte hain!
    B_V = B sin 30° = (5.0 × 10⁻⁴) × 0.5 = 2.5 × 10⁻⁴ T.
    ε = B_V l v = (2.5 × 10⁻⁴) × 25 × 500 = 2.5 × 10⁻⁴ × 12500 = **3.125 V**.
    Jaanch: 25 × 500 = 12500; 2.5 × 1.25 = 3.125 V ✅.

---

Ab tum Motional EMF (sliding rod aur rotating rod) aur uski energy conservation ko pakka samajh chuke ho!

**Agle topic mein:** Agar patle wire ki jagah ek poori **moti metal plate** badalte magnetic field mein rakhi ho, to uske andar paani ke bhanwar jaise gol currents bante hain — **Eddy Currents**!
