# Chapter: Wave Optics (Part 4)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Diffraction at a Single Slit](wave-optics-part3.md)

---

## Polarised Sunglasses aur Jheel ki Chamak Gayab!

Jheel ke kinare dhoop mein ghoomte waqt **Puja** ki aankhon mein paani se reflect hoti tez chamak (glare) chubh rahi thi. Papa ne use apne **Polarised Sunglasses** pehnaye — aur jaadu ho gaya! Paani ki chubhti chamak turant gayab ho gayi, aur paani ke andar ki machhliyan tak saaf dikhne lagin! Jab Puja ne apna sir 90° tirchha kiya, to chamak wapas aa gayi!

Papa muskuraye: "Sooraj ki aam roshni mein electric field har direction mein vibrate karta hai (**unpolarised**), par paani se reflect hokar woh sirf **horizontal plane** mein vibrate karne lagta hai (**polarised**)! Is chashme ka Polaroid filter sirf vertical vibrations ko aane deta hai — aur yahi **Polarisation** sabit karta hai ki light ek **Transverse Wave** hai!"

---

## Naye Shabd (New Words)

- **Unpolarised Light:** Aisi light jismein electric field vector **E→** propagation direction ke perpendicular **sabhi possible directions** mein barabar oscillate karta hai (jaise Sooraj ya bulb ki light).
- **Plane-Polarised Light:** Aisi light jismein **E→** ke oscillations sirf **ek hi khaas plane** mein seemit (restricted) kar diye gaye hon!
- **Polaroid:** Ek patli synthetic sheet (aligned long-chain molecules wali) jiski ek khaas **pass-axis** hoti hai — yeh sirf pass-axis ke parallel E-vibrations ko guzarne deti hai!
- **Brewster's Angle (Polarising Angle, i_B):** Woh khaas angle of incidence jis par kisi transparent surface (refractive index n) se **reflected light 100% plane-polarised** ho jaati hai: **tan i_B = n**.

---

## 1. Transverse Nature of Light & Malus's Law

- **Sound waves (hawa mein)** longitudinal hoti hain — isliye sound ko **polarise nahi** kiya ja sakta! Light polarise hoti hai ⟹ **100% pakka saboot ki Light ek Transverse Wave hai!**

### Rule 1: Unpolarised Light through First Polaroid (Polariser)
Jab intensity **I_in** ki **unpolarised light** kisi pehle Polaroid se guzarti hai, to uski intensity hamesha **exact AADHI (½)** ho jaati hai (chahe polaroid kisi bhi angle par rakha ho!):

**I₀ = I_in / 2**

### Rule 2: Malus's Law (Plane-Polarised Light through Second Polaroid / Analyser)
Ab agar yeh **plane-polarised light (intensity I₀)** kisi doosre Polaroid (**Analyser**) se guzre jiski pass-axis pehle polaroid se angle **θ** banati ho, to bahar nikalne wali intensity hoti hai:

**I = I₀ cos² θ**

- **θ = 0° (Parallel):** cos 0° = 1 ⟹ **I = I₀** (Maximum light!).
- **θ = 90° (Crossed Polaroids):** cos 90° = 0 ⟹ **I = 0** (Poora andhera!).

---

## 2. Polarisation by Reflection — Brewster's Law

Jab unpolarised light hawa se glass/water (refractive index **n**) par ek khaas angle **i_B (Brewster's angle)** par girti hai:
- **Reflected ray** aur **Refracted ray** ke beech ka angle theek **90°** ho jaata hai!
- Iska matlab: **i_B + r = 90°** ⟹ **r = 90° − i_B**!
- Snell's law lagao:
  n = sin i_B / sin r = sin i_B / sin(90° − i_B) = sin i_B / cos i_B ⟹

**n = tan i_B**  *(Brewster's Law!)*

Is angle par **reflected light 100% plane-polarised** hoti hai (plane of incidence ke perpendicular — jaise paani ki satah par horizontal glare!)!

---

## Solved Examples

### Example 1: Unpolarised Light Through Two Polaroids
Unpolarised light of intensity **I_in = 80 W/m²** passes first through Polaroid P₁ and then through Polaroid P₂ whose pass-axis is at **60°** to P₁. Find the intensity emerging from (a) P₁, and (b) P₂.

**Hal (Solution):**
- (a) P₁ par unpolarised light girti hai ⟹ hamesha aadhi ho jaati hai:
  **I₁ = I_in / 2 = 80 / 2 = 40 W/m²** (plane-polarised!).
- (b) P₂ par Malus's law (θ = 60°, cos 60° = 1/2):
  **I₂ = I₁ cos² 60° = 40 × (1/2)² = 40 × (1/4) = 10 W/m²**.
- **Jaanch:** 80 / 2 = 40; 40 / 4 = 10 W/m² ✅.

### Example 2: Brewster's Angle & Angle of Refraction
For a transparent glass slab of refractive index **n = √3**, find (a) Brewster's polarising angle **i_B**, and (b) the corresponding angle of refraction **r**.

**Hal (Solution):**
- (a) Brewster's law: **tan i_B = n = √3** ⟹ **i_B = 60°**.
- (b) At Brewster's angle, reflected and refracted rays are 90° apart ⟹ **i_B + r = 90°** ⟹ **r = 90° − 60° = 30°**.
- **Jaanch:** sin 60° / sin 30° = (√3/2) / (1/2) = √3 = n ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Unpolarised light par seedha I_in cos² θ laga dena:**
   - *Galat:* Pehle polaroid ko 60° par rakh kar I₁ = 80 cos² 60° = 20 W/m² nikaalna!
   - *Sahi:* **Unpolarised light** pehle polaroid se hamesha **exact aadhi (I_in / 2)** hoti hai — Malus's law sirf **already polarised** light ke liye lagta hai!
2. **Sound waves ko polarise karwa dena:**
   - *Galat:* Sound waves bhi polaroid se polarise ho sakti hain.
   - *Sahi:* Hawa mein sound **longitudinal** hai — **SIRF Transverse waves** polarise ho sakti hain!
3. **Brewster's law mein sin i_B = n likh dena:**
   - *Galat:* Critical angle (sin i_c = 1/n) se confuse hokar sin i_B = n likhna!
   - *Sahi:* **Brewster's Law: tan i_B = n** (aur **i_B + r = 90°**)!

---

## Quick Recap

| Concept | Formula / Fact | Key Detail |
|---|---|---|
| First Polaroid (Unpolarised light) | I₀ = I_in / 2 | Always halves unpolarised intensity |
| Malus's Law (Polarised light) | I = I₀ cos² θ | θ = angle between pass-axes; crossed (90°) ⟹ I = 0 |
| Brewster's Law | **tan i_B = n**; **i_B + r = 90°** | Reflected ray is 100% plane-polarised (⊥ to refracted ray) |
| Uses of Polaroids | Sunglasses, 3D cinema glasses, LCD screens | Proves light is a **Transverse Wave** |

---

## Practice Questions

1. Which wave property of light is directly proved by the phenomenon of polarisation? Why can sound waves in air not be polarised?
2. State Malus's law and Brewster's law mathematically.
3. Unpolarised light of intensity 100 W/m² passes through a Polaroid P₁ and then through an analyser P₂ at an angle of 45° to P₁. Find the intensity emerging from P₂.
4. Plane-polarised light of intensity 64 W/m² falls on an analyser. At what angle θ between the pass-axes will the transmitted intensity be 16 W/m²?
5. What is the Brewster's polarising angle for glass of refractive index n = 1.5? (Given tan 56.3° ≈ 1.5.) What is the angle between the reflected and refracted rays at this angle?
6. Light is incident on a transparent liquid surface at the polarising angle of 53° (tan 53° ≈ 4/3). Find (a) the refractive index of the liquid, and (b) the angle of refraction r.
7. Two polaroids P₁ and P₂ are placed with their pass-axes crossed (at 90° to each other), so no light gets through. A third polaroid P₃ is now inserted **between** P₁ and P₂ at 45° to P₁. If unpolarised light of intensity I_in enters P₁, find the intensity emerging from P₂!
8. Mention two practical everyday applications of Polaroids.
9. State whether True or False: When light is incident at Brewster's angle, the **refracted** ray is 100% plane-polarised.
10. If the critical angle for a medium in air is 45°, find its refractive index n and its Brewster's angle (in terms of tan⁻¹).

### Answers

1. Polarisation sabit karta hai ki light ek **Transverse Wave** hai. Hawa mein sound waves **longitudinal** hoti hain (oscillations propagation ke along hoti hain), isliye unhe polarise nahi kiya ja sakta!

2. **Malus's Law:** I = I₀ cos² θ. **Brewster's Law:** tan i_B = n.

3. P₁ ke baad: I₁ = 100 / 2 = 50 W/m².
   P₂ ke baad (θ = 45°, cos 45° = 1/√2 ⟹ cos² 45° = 1/2):
   I₂ = 50 × (1/2) = **25 W/m²**.
   Jaanch: 100 / 2 = 50; 50 × 0.5 = 25 W/m² ✅.

4. I = I₀ cos² θ ⟹ 16 = 64 cos² θ ⟹ cos² θ = 1/4 ⟹ cos θ = 1/2 ⟹ **θ = 60°**.
   Jaanch: 64 × (0.5)² = 64 × 0.25 = 16 W/m² ✅.

5. tan i_B = 1.5 ⟹ **i_B ≈ 56.3°**. Reflected aur refracted rays ke beech ka angle theek **90°** hota hai!

6. (a) **n = tan 53° ≈ 4/3 ≈ 1.33** (water!).
   (b) i_B + r = 90° ⟹ **r = 90° − 53° = 37°**.
   Jaanch: 53° + 37° = 90° ✅.

7. P₁ ke baad: I₁ = I_in / 2.
   P₃ (45° to P₁) ke baad: I₃ = I₁ cos² 45° = (I_in / 2) × (1/2) = I_in / 4.
   P₂ (45° to P₃, kyunki 90° − 45° = 45°!) ke baad: I₂ = I₃ cos² 45° = (I_in / 4) × (1/2) = **I_in / 8**!
   Jaanch: (1/2)(1/2)(1/2) = 1/8 ✅.

8. (i) **Polarised sunglasses** (water/road glare hatane ke liye), (ii) **3D movie glasses** aur **LCD calculator/watch screens**.

9. **False ❌.** Brewster's angle par **reflected** ray 100% plane-polarised hoti hai; refracted ray sirf **partially polarised** hoti hai!

10. Critical angle i_c = 45° ⟹ n = 1 / sin 45° = **√2 ≈ 1.414**.
    Brewster's angle: **i_B = tan⁻¹(√2)** (≈ 54.7°).
    Jaanch: 1 / (1/√2) = √2 ✅.

---

Ab tum Polarisation, Malus's Law aur Brewster's Law ke saare concepts aur 3-polaroid puzzles master kar chuke ho!

**Agle topic mein:** Sab Kuch Mila Kar — Huygens, YDSE, Single-Slit Diffraction aur Polarisation ke mixed problems solve karke poora Wave Optics chapter wrap-up karenge!
