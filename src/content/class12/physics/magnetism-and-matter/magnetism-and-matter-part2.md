# Chapter: Magnetism and Matter (Part 2)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Bar Magnet and Gauss's Law for Magnetism](magnetism-and-matter.md)

---

## Pahadon par Compass ki Sui aur True North ka Farq

Himachal Pradesh ke trek par **Hina** ne apne trekking guide ko map aur magnetic compass milate hue dekha. Guide ne map par "True North" aur compass ki sui ki direction ke beech lagbhag 2° ka chhota sa angle adjust kiya! Hina ne hairani se poocha: "Bhaiya, kya compass ki sui hamesha bilkul exact Geographic North ki taraf point nahi karti?"

Guide muskuraye: "Nahi Hina! Prithvi ka apna magnetic axis uske rotation axis se thoda tirchha (tilted) hai! Isliye compass **Magnetic North** dikhata hai, jo True North se thoda alag hota hai — aur agar sui ko vertical plane mein ghoomne ki azaadi do, to woh zameen ki taraf **jhuk (dip)** bhi jaati hai!"

---

## Naye Shabd (New Words)

- **Geographic Meridian:** Kisi jagah se guzarne wala vertical plane jo Prithvi ke Geographic North aur South poles ko jorta hai.
- **Magnetic Meridian:** Kisi jagah se guzarne wala vertical plane jismein freely suspended magnetic needle ka axis rehta hai.
- **Magnetic Declination (θ):** Kisi jagah par **Geographic Meridian** aur **Magnetic Meridian** ke beech ka chhota angle (horizontal plane mein).
- **Angle of Dip / Inclination (δ):** Kisi jagah par Prithvi ka net magnetic field **B→** horizontal direction ke saath vertical plane mein jo angle banata hai.
- **Horizontal Component (B_H):** Prithvi ke net magnetic field B ka horizontal hissa: **B_H = B cos δ** (yahi ordinary compass ki sui ko ghumata hai!).

---

## 1. Prithvi ka Magnetic Field Kaise Banta Hai? (Geodynamo Idea)

Prithvi ke gahre andar (outer core) mein bahut garam pighla hua iron aur nickel (conducting fluid) lagataar ghoomta (convection currents) rehta hai. Earth ke rotation aur in circulating electric currents ki wajah se Prithvi ek vishal magnetic dipole ki tarah behave karti hai — isse **Geodynamo Effect** kehte hain!

**Yaad Rakhne Wali Mazedaar Baat:**
Compass ka **North pole** Geographic North ki taraf isliye attract hota hai kyunki Geographic North ke paas Prithvi ka **Magnetic SOUTH Pole** hota hai (aur Geographic South ke paas Magnetic NORTH Pole)!

---

## 2. Earth's Magnetism ke Teen Elements (Magnetic Elements)

Prithvi ki satah par kisi bhi shehar mein magnetic field ko poori tarah batane ke liye **teen quantities** chahiye:
1. **Magnetic Declination (θ)** — True North aur Magnetic North ke beech ka angle.
2. **Angle of Dip / Inclination (δ)** — Net field **B** aur horizontal ke beech ka angle.
3. **Horizontal Component (B_H)** — Net field ka horizontal hissa.

```
            Horizontal (Magnetic North)
      O --------------------------->  B_H = B cos(delta)
      : \  angle delta (dip)
      :   \
      :     \
      v       v  B (Net Earth's field)
  B_V = B sin(delta)
```

### Chaar Super-Important Relations:
1. **B_H = B cos δ**
2. **B_V = B sin δ**  *(Vertical component)*
3. **tan δ = B_V / B_H**  *(Equation 2 ko 1 se divide karo!)*
4. **B = √(B_H² + B_V²)**  *(Pythagoras theorem!)*

### Equator aur Poles par Kya Hota Hai?
- **Magnetic Equator par:** Field lines zameen ke bilkul **horizontal (parallel)** hoti hain ⟹ **δ = 0°**, **B_V = 0**, **B_H = B (maximum)**!
- **Magnetic Poles par:** Field lines zameen ke bilkul **vertical (perpendicular)** hoti hain ⟹ **δ = 90°**, **B_H = 0**, **B_V = B (maximum)**! *(Poles par ordinary horizontal compass kaam nahi karta — dip needle seedhi khadi ho jaati hai!)*

---

## Solved Examples

### Example 1: Finding B and B_V from B_H and Dip Angle
At a certain location in India, the horizontal component of Earth's magnetic field is **B_H = 0.30 G** (Gauss) and the angle of dip is **δ = 60°**. Calculate:
(a) the total magnetic field **B** of the Earth at that place, and
(b) the vertical component **B_V** (take √3 = 1.732).

**Hal (Solution):**
- (a) B_H = B cos δ ⟹ B = B_H / cos 60° = 0.30 / 0.5 = **0.60 G** (= 6.0 × 10⁻⁵ T).
- (b) B_V = B_H tan 60° = 0.30 × 1.732 ≈ **0.52 G** (= 5.2 × 10⁻⁵ T).
- **Jaanch:** √(0.30² + 0.52²) = √(0.09 + 0.2704) = √0.3604 ≈ 0.60 G ✅.

### Example 2: Equal Horizontal and Vertical Components
At a place on Earth, the horizontal component B_H and vertical component B_V of Earth's magnetic field are **equal**. Find the angle of dip **δ** at that place.

**Hal (Solution):**
- tan δ = B_V / B_H = 1 ⟹ **δ = 45°**!
- **Jaanch:** cos 45° = sin 45° = 1/√2 ⟹ B_H = B_V ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **B_H aur B_V mein sin aur cos ko ulta laga dena:**
   - *Galat:* B_H = B sin δ aur B_V = B cos δ likhna.
   - *Sahi:* Dip angle **δ horizontal ke saath** banta hai ⟹ horizontal component hamesha **B_H = B cos δ** aur vertical **B_V = B sin δ**!
2. **Magnetic Declination aur Angle of Dip ko ek hi samajhna:**
   - *Galat:* Declination ko vertical tilt bol dena.
   - *Sahi:* **Declination (θ)** = **horizontal plane** mein True North aur Magnetic North ka angle; **Dip (δ)** = **vertical plane** mein net field B ka horizontal se jhukav!
3. **Geographic North ke paas Earth ka Magnetic North pole maan lena:**
   - *Galat:* Sochna ki compass ka North pole Earth ke Magnetic North pole ki taraf khinchta hai.
   - *Sahi:* Opposite poles attract karte hain! Compass ka North pole Geographic North ki taraf isliye jaata hai kyunki wahan Earth ka **Magnetic SOUTH Pole** hai!

---

## Quick Recap

| Element / Quantity | Formula / Value | Special Locations |
|---|---|---|
| Declination (θ) | Angle between Geographic & Magnetic meridians | Varies across Earth (~0° to 20°) |
| Angle of Dip (δ) | tan δ = B_V / B_H | Equator: **0°**; Poles: **90°** |
| Horizontal Component | B_H = B cos δ | Max at Equator; **0** at Poles |
| Vertical Component & Net B | B_V = B sin δ; B = √(B_H² + B_V²) | 1 Gauss (G) = 10⁻⁴ T |

---

## Practice Questions

1. Name the three magnetic elements of the Earth required to specify its magnetic field completely at any place.
2. What is the angle of dip (a) at the magnetic equator, and (b) at the magnetic poles of the Earth?
3. Explain why a freely suspended compass needle points roughly toward the Geographic North.
4. At a certain place, the Earth's net magnetic field is 0.50 G and the angle of dip is 30°. Calculate the horizontal and vertical components of the field (take √3 = 1.732).
5. At a location, B_H = 0.40 G and B_V = 0.30 G. Find (a) the total magnetic field B in Gauss and Tesla, and (b) tan δ.
6. Where on Earth's surface is the vertical component of Earth's magnetic field zero?
7. At a place where the angle of dip is 45°, the horizontal component of Earth's magnetic field is 0.28 G. Find the total magnetic field B (take √2 = 1.414).
8. What happens to a dip needle (free to rotate in the vertical magnetic meridian) when taken directly to the Earth's magnetic north pole?
9. State whether True or False: At the magnetic poles of the Earth, the horizontal component B_H is maximum.
10. At a place, the vertical component of Earth's magnetic field is √3 times its horizontal component. Find the angle of dip at that place.

### Answers

1. (i) **Magnetic Declination (θ)**, (ii) **Angle of Dip / Inclination (δ)**, aur (iii) **Horizontal Component (B_H)**.

2. (a) Magnetic Equator par: **δ = 0°**.
   (b) Magnetic Poles par: **δ = 90°**.

3. Kyunki Prithvi ke Geographic North pole ke paas uska **Magnetic South pole** sthit hai — aur opposite poles attract karte hain, isliye compass ka North pole Geographic North ki taraf point karta hai!

4. B_H = B cos 30° = 0.50 × (1.732 / 2) = 0.50 × 0.866 = **0.433 G**.
   B_V = B sin 30° = 0.50 × 0.5 = **0.25 G**.
   Jaanch: √(0.433² + 0.25²) ≈ √(0.1875 + 0.0625) = √0.25 = 0.50 G ✅.

5. (a) B = √(0.40² + 0.30²) = √(0.16 + 0.09) = √0.25 = **0.50 G = 5.0 × 10⁻⁵ T**.
   (b) tan δ = B_V / B_H = 0.30 / 0.40 = **3 / 4 = 0.75** (δ ≈ 36.9°).
   Jaanch: 3-4-5 right triangle! 0.50 G = 5.0 × 10⁻⁵ T ✅.

6. **Magnetic Equator** par (jahan δ = 0° ⟹ B_V = B sin 0° = 0)!

7. B_H = B cos 45° = B / √2 ⟹ **B = B_H √2** = 0.28 × 1.414 ≈ **0.396 G ≈ 0.40 G**.
   Jaanch: 0.396 × 0.707 ≈ 0.28 G ✅.

8. Dip needle bilkul **vertical (90° — seedhi khadi)** ho jaati hai, kyunki magnetic poles par Earth ka magnetic field zameen ke perpendicular hota hai!

9. **False ❌.** Magnetic poles par δ = 90° ⟹ B_H = B cos 90° = **0** (zero)! B_H equator par maximum hota hai.

10. B_V = √3 B_H ⟹ tan δ = B_V / B_H = √3 ⟹ **δ = 60°**.
    Jaanch: tan 60° = √3 ✅.

---

Ab tum Earth's Magnetism ke teeno elements (Declination, Dip aur Horizontal Component) ko poori tarah samajh chuke ho!

**Agle topic mein:** Jab kisi iron ya aluminium ke tukde ko solenoid ke andar rakha jaata hai, to magnetic field achanak hazaaron guna kyun badh jaata hai? Seekhenge **Magnetisation (M)** aur **Magnetic Intensity (H)**!
