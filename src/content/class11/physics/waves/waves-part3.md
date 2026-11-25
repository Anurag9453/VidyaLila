# Chapter 14: Waves (Part 3) — Superposition, Reflection & Standing Waves

> **Class:** 11 | **Subject:** Physics
> **Previous Topic:** [Waves (Part 2)](waves-part2.md)

---

## Story Time: Draupadi aur Concert Hall ke Silent Spots

**Draupadi** ek concert-hall acoustics designer hai. Ek bade auditorium mein do identical speakers ek hi pure musical note baja rahe the. Jab wo hall mein aage-peeche chali, toh usne kuch ajeeb notice kiya: kuch spots par aawaz **double loud** thi, aur thoda sa aage badhne par aawaz lagbhag **bilkul gaayab (silent spot)** ho gayi!

Phir usne ek lambi rassi ko deewar se bandh kar jhatka diya — crest deewar se takra kar **ulta (trough ban kar)** wapas aaya, aur aate-jaate waves ke overlap hone se rassi par aise loops ban gaye jo aage badhte hi nahi the!

Draupadi ne apni team se kaha: *"Yahi hai **Superposition** aur **Standing Waves** ka jaadu — jab do waves milti hain, toh wo ek-doosre ko jod bhi sakti hain aur mita bhi sakti hain!"*

---

## Naye Shabd (New Vocabulary)

| Term | Hinglish Meaning |
|---|---|
| **Principle of Superposition** | Jab do ya zyada waves ek saath ek point par pahunchti hain, toh net displacement unke individual displacements ka **algebraic sum** hota hai. |
| **Interference** | Do coherent (same frequency, constant phase difference) waves ke superposition se energy ka redistribution (kahin max, kahin min). |
| **Constructive Interference** | Jab dono waves **same phase** mein milti hain (Δφ = 2nπ) aur amplitude maximum (A₁ + A₂) ho jaata hai. |
| **Destructive Interference** | Jab dono waves **opposite phase** mein milti hain (Δφ = (2n+1)π) aur amplitude minimum (|A₁ - A₂|) ho jaata hai. |
| **Standing (Stationary) Wave** | Do identical waves ke **opposite directions** mein chal kar overlap hone se bana pattern jo aage nahi badhta. |
| **Node (N)** | Standing wave ka wo point jahan displacement hamesha **zero** rehta hai. |
| **Antinode (A)** | Standing wave ka wo point jahan displacement **maximum** (2A) hota hai. |

---

## 1. Principle of Superposition & Interference

Agar do waves kisi medium mein ek saath travel kar rahi hain:
> **y(x, t) = y₁(x, t) + y₂(x, t)**

Maan lo do coherent waves same frequency ω aur phase difference **φ** ke saath ek point par pahunchti hain:
y₁ = A₁ sin(ωt)   aur   y₂ = A₂ sin(ωt + φ)

Phasor (vector) addition se resultant amplitude **A_res** aur Intensity **I** (kyunki I ∝ A²):

> **Resultant Amplitude:** A_res = √(A₁² + A₂² + 2 A₁ A₂ cos φ)
> **Resultant Intensity:** I = I₁ + I₂ + 2 √(I₁ I₂) cos φ

### Two Special Cases
1. **Constructive Interference (Maxima):**
   - Condition: **cos φ = +1** ⇒ Phase difference **φ = 0, 2π, 4π, ..., 2nπ**
   - Path difference: **Δx = 0, λ, 2λ, ..., nλ**
   - A_max = A₁ + A₂,   I_max = (√I₁ + √I₂)²
   - Agar I₁ = I₂ = I₀, toh **I_max = 4 I₀**!

2. **Destructive Interference (Minima):**
   - Condition: **cos φ = -1** ⇒ Phase difference **φ = π, 3π, 5π, ..., (2n + 1)π**
   - Path difference: **Δx = λ/2, 3λ/2, ..., (n + 1/2)λ**
   - A_min = |A₁ - A₂|,   I_min = (√I₁ - √I₂)²
   - Agar I₁ = I₂ = I₀, toh **I_min = 0** (complete silence / darkness)!

---

## 2. Reflection of Waves: Rigid vs Free Boundary

Jab ek wave kisi boundary se takraati hai, toh uska phase kya hoga?

```
RIGID (FIXED) BOUNDARY (Wall)            FREE (OPEN) BOUNDARY (Sliding Ring)
  Crest -->  |                             Crest -->  o (free ring)
  -----------+                                        |
  <-- Trough |  (Phase flip = pi!)         <-- Crest  o (NO phase flip = 0!)
```

1. **Rigid (Denser) Boundary:** Wall particle ko hilne nahi deti; Newton's 3rd Law se wall ulta impulse deti hai!
   - **Phase change = π (180°)** — Crest ban jaata hai **Trough**!
   - Agar incident wave y_i = A sin(kx - ωt) hai, toh reflected wave:
     y_r = -A sin(kx + ωt) = A sin(kx + ωt + π).

2. **Free (Open / Rarer) Boundary:** Ring aazadi se upar-neeche ja sakti hai!
   - **Phase change = 0** — Crest wapas **Crest** hi aata hai!
   - Reflected wave: y_r = +A sin(kx + ωt).

---

## 3. Standing (Stationary) Waves

Jab do **identical** progressive waves (same A, k, ω) **opposite directions** mein travel karke superpose hoti hain:
y₁ = A sin(kx - ωt)   (+x direction)
y₂ = A sin(kx + ωt)   (-x direction)

Trigonometric identity sin C + sin D = 2 sin((C+D)/2) cos((C-D)/2) lagao:

> **Standing Wave Equation:**
> **y(x, t) = [ 2 A sin(k x) ] cos(ω t)**

Dekho! Is equation mein **x** aur **t** alag-alag factors mein hain (kx - ωt ek saath nahi hai!).
Har point x par particle SHM karta hai jiska apna fixed amplitude **A_x = 2 A |sin(kx)|** hota hai!

```
   A       A       A         A = Antinode (max amplitude = 2A)
  / \     / \     / \
-N---N---N---N---N---N-      N = Node (always zero!)
  \ /     \ /     \ /
  :<--λ/2-->|
  :<-λ/4->|
```

### Positions of Nodes and Antinodes
- **Nodes (sin kx = 0):** kx = 0, π, 2π, ..., nπ ⇒ **x = 0, λ/2, λ, 3λ/2, ..., nλ/2**
- **Antinodes (|sin kx| = 1):** kx = π/2, 3π/2, 5π/2, ... ⇒ **x = λ/4, 3λ/4, 5λ/4, ..., (2n+1)λ/4**

### Golden Distances in a Standing Wave
- Distance between two **consecutive Nodes** (N to N) = **λ / 2**
- Distance between two **consecutive Antinodes** (A to A) = **λ / 2**
- Distance between an **adjacent Node and Antinode** (N to A) = **λ / 4**

### Progressive Wave vs Standing Wave
| Feature | Progressive Wave | Standing Wave |
|---|---|---|
| Equation form | A sin(kx - ωt) | 2A sin(kx) cos(ωt) |
| Amplitude of particles | Same (A) for every particle | Varies with x (0 at Nodes, 2A at Antinodes) |
| Phase of particles | Changes continuously with x | All particles between two adjacent nodes are in **same phase**! |
| Net Energy Flow | Energy travels forward at speed v | **Zero net energy flow** (energy stays trapped in each loop!) |

---

## Solved Examples

### Example 1: Interference of Two Coherent Waves
Draupadi ke hall mein do sound waves ek point par pahunchti hain jinke amplitudes A₁ = 3 cm aur A₂ = 4 cm hain. Resultant amplitude nikalo jab unke beech phase difference ho: (a) 0°, (b) 90°, (c) 180°.

**Solution:**
Formula: A_res = √(A₁² + A₂² + 2 A₁ A₂ cos φ)
- (a) φ = 0° (cos 0° = 1): A_res = 3 + 4 = **7 cm** (Constructive)
- (b) φ = 90° (cos 90° = 0): A_res = √(3² + 4²) = √25 = **5 cm**
- (c) φ = 180° (cos 180° = -1): A_res = |3 - 4| = **1 cm** (Destructive)

**Jaanch:** 1 cm ≤ A_res ≤ 7 cm for all φ. Exact! ✅

---

### Example 2: Intensity Ratio I_max / I_min
Do coherent waves ki intensities ka ratio I₁ : I₂ = 9 : 4 hai. Unke interference pattern mein I_max : I_min ka ratio nikalo.

**Solution:**
Kyunki I ∝ A², isliye A₁ / A₂ = √(9 / 4) = **3 / 2**.
I_max / I_min = (A₁ + A₂)² / (A₁ - A₂)² = (3 + 2)² / (3 - 2)² = 5² / 1² = **25 : 1**.

**Jaanch:** (√9 + √4)² / (√9 - √4)² = (3+2)² / (3-2)² = 25 : 1. ✅

---

### Example 3: Standing Wave Equation ko Decode Karna
Ek string par standing wave ki equation hai:
y(x, t) = 0.08 sin(0.5π x) cos(40π t)  (SI units mein).
Nikalo: (a) Component travelling waves ka amplitude A, (b) Wavelength λ aur frequency f, (c) Do consecutive nodes ke beech distance, (d) Travelling wave ki speed v.

**Solution:**
Compare with y = 2A sin(kx) cos(ωt):
- (a) 2A = 0.08 m ⇒ component wave amplitude **A = 0.04 m** (4 cm).
- (b) k = 0.5π rad/m ⇒ λ = 2π / (0.5π) = **4.0 m**.
      ω = 40π rad/s ⇒ f = 40π / (2π) = **20 Hz**.
- (c) Consecutive nodes ke beech distance = λ / 2 = 4.0 / 2 = **2.0 m**.
- (d) Component wave speed v = f λ = 20 × 4.0 = **80 m/s**.

**Jaanch:** v = ω / k = 40π / 0.5π = 80 m/s. Exact match! ✅

---

### Example 4: Standing Wave ke Particles ka Phase aur Velocity
Example 3 ki standing wave mein x = 1.0 m par particle ka amplitude aur maximum velocity nikalo.

**Solution:**
x = 1.0 m par:
A_x = 0.08 |sin(0.5π × 1.0)| = 0.08 |sin(π/2)| = 0.08 × 1 = **0.08 m** (yeh ek **Antinode** hai!).
Maximum velocity: v_max = ω A_x = 40π × 0.08 = **3.2π m/s** ≈ **10.05 m/s**.

**Jaanch:** λ = 4.0 m, toh x = 1.0 m = λ/4 (first antinode!). ✅

---

## Aam Galtiyan (Common Mistakes)

### Mistake 1: Nodes ke Beech Distance ko λ Samajhna
**Galat Soch:** *"Ek full wave λ ki hoti hai, toh do nodes ke beech distance λ hoga."*
**Sahi Baat:** Ek full wavelength λ mein **2 loops** (3 nodes) hote hain! Isliye do **consecutive nodes** ke beech distance **λ / 2** hota hai (aur Node se adjacent Antinode **λ / 4**).

### Mistake 2: Rigid Wall par Phase Flip Bhoolna
**Galat Soch:** *"Deewar se wave bounce hogi toh bas direction reverse hogi, sign wahi rahega."*
**Sahi Baat:** Rigid wall par **π (180°)** ka phase flip hota hai (crest turns into trough), isliye minus sign aata hai. Sirf **free/open** boundary par koi phase flip nahi hota!

---

## Quick Recap

- Superposition: **y = y₁ + y₂**.
- Interference: **A_res = √(A₁² + A₂² + 2A₁A₂ cos φ)**; **I = I₁ + I₂ + 2√(I₁I₂) cos φ**.
- Reflection: **Rigid wall ⇒ phase flip π** (crest → trough); **Free end ⇒ no flip (0)**.
- Standing wave: **y = 2A sin(kx) cos(ωt)** — zero net energy flow!
- Adjacent N–N = **λ/2**, A–A = **λ/2**, N–A = **λ/4**.

---

## Practice Questions

### Question 1
Two coherent waves of amplitudes 5 cm and 12 cm meet at a point with a phase difference of 90°. Find the resultant amplitude.

### Question 2
Two coherent sources have equal intensity I₀. What is the resultant intensity at a point where their phase difference is (a) 0 and (b) 120°?

### Question 3
Two waves have amplitude ratio A₁ : A₂ = 5 : 3. Find the ratio of maximum intensity to minimum intensity in their interference pattern.

### Question 4
A transverse pulse (crest) travels down a string towards a fixed rigid wall. What happens to the pulse upon reflection?

### Question 5
A standing wave is represented by y(x, t) = 0.06 sin(π x) cos(60π t) in SI units. Find the wavelength and frequency of the component waves.

### Question 6
For the standing wave in Question 5, find the distance between (a) two consecutive nodes and (b) an adjacent node and antinode.

### Question 7
In a standing wave, the distance between the 1st node and the 5th node is 1.2 m. Calculate the wavelength of the wave.

### Question 8
What is the phase difference between two particles located inside the same loop (between two consecutive nodes) of a standing wave?

### Question 9
What is the phase difference between two particles located in two adjacent loops (on opposite sides of a node) of a standing wave?

### Question 10
For y(x, t) = 0.10 sin(2π x) cos(50π t) (SI units), find the amplitude of oscillation of a particle at x = 1/12 m.

### Question 11
How much net energy is transmitted across a node in a stationary wave?

### Question 12
True or False: In a standing wave, all particles reach their extreme positions and mean positions at the exact same instants.

---

## Worked Answers

### Answer 1
A_res = √(5² + 12² + 2(5)(12) cos 90°) = √(25 + 144 + 0) = √169 = **13 cm**.
**Jaanch:** 5-12-13 right triangle! ✅

### Answer 2
I = I₀ + I₀ + 2 I₀ cos φ = 2 I₀ (1 + cos φ).
- (a) φ = 0 ⇒ cos 0 = 1 ⇒ I = 2 I₀ (2) = **4 I₀**.
- (b) φ = 120° ⇒ cos 120° = -1/2 ⇒ I = 2 I₀ (1 - 1/2) = **I₀**.
**Jaanch:** At 120°, resultant of two equal vectors equals the original magnitude! ✅

### Answer 3
I_max / I_min = (A₁ + A₂)² / (A₁ - A₂)² = (5 + 3)² / (5 - 3)² = 8² / 2² = 64 / 4 = **16 : 1**.
**Jaanch:** (8/2)² = 4² = 16. ✅

### Answer 4
Rigid wall par **π (180°)** ka phase reversal hota hai — crest **trough** ban kar opposite direction mein reflect ho jaata hai.
**Jaanch:** Rigid end must stay a node (zero displacement). ✅

### Answer 5
Compare with 2A sin(kx) cos(ωt):
- k = π rad/m ⇒ λ = 2π / π = **2.0 m**.
- ω = 60π rad/s ⇒ f = 60π / (2π) = **30 Hz**.
**Jaanch:** v = f λ = 60 m/s = ω/k. ✅

### Answer 6
λ = 2.0 m.
- (a) Consecutive nodes = λ / 2 = **1.0 m**.
- (b) Adjacent node and antinode = λ / 4 = **0.5 m**.
**Jaanch:** 1.0 m / 2 = 0.5 m. ✅

### Answer 7
1st node se 5th node ke beech **4 loops** (4 × λ/2 = 2λ) hote hain!
2λ = 1.2 m ⇒ λ = **0.60 m**.
**Jaanch:** 4 × (0.60/2) = 4 × 0.30 = 1.2 m. ✅

### Answer 8
Ek hi loop ke andar saare particles ek saath upar jaate hain aur ek saath neeche aate hain — unka phase difference **0** hota hai!
**Jaanch:** sin(kx) has the same sign throughout one loop. ✅

### Answer 9
Adjacent loops mein jab ek loop upar hota hai toh bagal wala neeche hota hai — unka phase difference **π (180°)** hota hai!
**Jaanch:** sin(kx) flips sign across a node. ✅

### Answer 10
A_x = 0.10 |sin(2π × 1/12)| = 0.10 |sin(π/6)| = 0.10 × (1/2) = **0.05 m** (5 cm).
**Jaanch:** sin 30° = 0.5. ✅

### Answer 11
**Zero!** Node kabhi hilta hi nahi, isliye koi energy ek loop se doosre loop mein transfer nahi hoti.
**Jaanch:** Standing wave traps energy inside each loop. ✅

### Answer 12
✅ **True.** Sabhi particles ka time factor **cos(ωt)** same hota hai, isliye saare particles (nodes ko chhodkar) ek hi instant par mean position (cos ωt = 0) aur extreme position (cos ωt = ±1) par pahunchte hain!
**Jaanch:** Time dependence cos(ωt) is independent of x. ✅

---

Ab **tum** standing waves ke nodes, antinodes, aur interference patterns ko aankh band karke pehchan sakte ho!

**Agle Topic mein:** Guitar ka taar aur bansuri (flute) alag-alag sur (harmonics) kaise nikaalte hain? Vibrating Strings, Open & Closed Organ Pipes, aur Resonance Tube — padhenge Part 4 mein!

**Next:** [Chapter 14: Waves (Part 4) — Vibrating Strings & Organ Pipes](waves-part4.md)
