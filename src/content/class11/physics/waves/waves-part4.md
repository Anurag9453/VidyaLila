# Chapter 14: Waves (Part 4) — Vibrating Strings & Organ Pipes

> **Class:** 11 | **Subject:** Physics
> **Previous Topic:** [Waves (Part 3)](waves-part3.md)
> **Earlier Link:** [Class 10 Vibrations and Resonance](../../../class10/physics/vibrations-and-resonance/vibrations-and-resonance.md)

---

## Story Time: Sumitra ki Sitar aur Bansuri ka Raaz

**Sumitra** ek classical-flute aur sitar-luthier acoustics technician hai. Ek shaam usne ek 0.80 m lambe sitar ke taar ko chheda, toh usse ek meetha fundamental sur (200 Hz) nikla, aur saath mein 400 Hz, 600 Hz, 800 Hz ke saare harmonics bhi sunai diye!

Phir usne ek **ek taraf se band (closed)** bamboo pipe mein phoonk maari — hairat ki baat thi ki usme 200 Hz ke baad **400 Hz bilkul nahi aaya**, seedha **600 Hz (3rd harmonic)** aur **1000 Hz (5th harmonic)** aaya!

Sumitra hasi: *"Class 10 ke [Vibrations and Resonance](../../../class10/physics/vibrations-and-resonance/vibrations-and-resonance.md) mein humne resonance ka idea dekha tha. Aaj dekhte hain ki boundary conditions (Nodes aur Antinodes) kaise decide karte hain ki kis instrument mein kaun se harmonics bajenge!"*

---

## Naye Shabd (New Vocabulary)

| Term | Hinglish Meaning |
|---|---|
| **Normal Modes** | Wo specific standing-wave patterns (frequencies) jin par koi string ya air column naturally vibrate kar sakta hai. |
| **Fundamental Frequency (f₁)** | Sabse lowest natural frequency (1st harmonic). |
| **Harmonics** | Fundamental frequency ke integer multiples (f₁, 2f₁, 3f₁, ...). |
| **Overtones** | Fundamental ke upar bajne wale frequencies (1st overtone = fundamental ke turant baad wala available frequency!). |
| **Open Organ Pipe** | Aisa pipe jo **dono** ends par khula ho (dono ends par Antinodes!). |
| **Closed Organ Pipe** | Aisa pipe jo **ek** end par band (Node) aur doosre end par khula (Antinode) ho. |
| **End Correction (e)** | Open end par antinode bilkul edge par nahi, thoda bahar (e ≈ 0.6 r) banta hai. |

---

## 1. Normal Modes of a Stretched String (Fixed at Both Ends)

Maan lo length **L** ki ek string dono ends (x = 0 aur x = L) par tightly fixed hai.
Toh dono ends par **Nodes (N)** hone hi chahiye!

```
n = 1 (Fundamental / 1st Harmonic):   N-----------N      L = 1 (λ₁/2)  =>  λ₁ = 2L
n = 2 (2nd Harmonic / 1st Overtone):  N-----N-----N      L = 2 (λ₂/2)  =>  λ₂ = 2L/2
n = 3 (3rd Harmonic / 2nd Overtone):  N---N---N---N      L = 3 (λ₃/2)  =>  λ₃ = 2L/3
```

General **n-th mode** ke liye string mein **n loops** aate hain:
L = n (λ_n / 2)   ⇒   λ_n = 2 L / n   (n = 1, 2, 3, ...)

Kyunki wave speed v = √(T / μ) hai, isliye frequencies:

> **Stretched String Frequencies:**
> **f_n = n (v / 2L) = (n / 2L) √(T / μ)**   (n = 1, 2, 3, ...)

- Fundamental (1st harmonic): f₁ = v / (2L)
- **ALL harmonics (even + odd) are present:** f₁ : f₂ : f₃ = **1 : 2 : 3 : ...**
- **n-th harmonic = (n - 1)-th overtone**! (Jaise 2nd harmonic = 1st overtone.)

### Laws of Vibrating Strings (Mersenne's Laws)
f₁ = (1 / 2L) √(T / μ) se seedha dikhta hai:
1. **Law of Length:** f₁ ∝ 1 / L  (taar chhota karo, pitch high hogi!)
2. **Law of Tension:** f₁ ∝ √T  (taar kaso, pitch badhegi!)
3. **Law of Mass:** f₁ ∝ 1 / √μ  (patla/halka taar, high pitch; mota taar, bass/low pitch!)

---

## 2. Open Organ Pipe (Open at Both Ends)

Open pipe ke **dono ends** par hawa freely vibrate kar sakti hai, isliye dono ends par **Antinodes (A)** bante hain!

```
n = 1 (Fundamental):  A----N----A          L = λ₁/2   =>  f₁ = v / (2L)
n = 2 (2nd Harmonic): A--N--A--N--A        L = 2(λ₂/2) => f₂ = 2v / (2L) = 2 f₁
n = 3 (3rd Harmonic): A-N-A-N-A-N-A        L = 3(λ₃/2) => f₃ = 3v / (2L) = 3 f₁
```

> **Open Organ Pipe Frequencies:**
> **f_n = n (v / 2L)**   (n = 1, 2, 3, ...)

- Bilkul stretched string jaisa hi formula!
- **ALL harmonics (1 : 2 : 3 : ...)** present hote hain! Isliye open pipe (flute) ki aawaz closed pipe se zyada **rich aur melodious** hoti hai.

---

## 3. Closed Organ Pipe (Closed at One End, Open at Other)

Closed end par air vibrate nahi kar sakti ⇒ **Node (N)**.
Open end par air freely vibrate karti hai ⇒ **Antinode (A)**.

```
Mode 1 (1st Harmonic / Fundamental):  N------A         L = λ₁/4   =>  f₁ = v / (4L)
Mode 2 (3rd Harmonic / 1st Overtone): N--A--N--A       L = 3λ₃/4  =>  f₃ = 3v / (4L) = 3 f₁
Mode 3 (5th Harmonic / 2nd Overtone): N-A-N-A-N-A      L = 5λ₅/4  =>  f₅ = 5v / (4L) = 5 f₁
```

> **Closed Organ Pipe Frequencies:**
> **f_m = (2m - 1) (v / 4L)**   (m = 1, 2, 3, ...)   ⇒   f = f₁, 3f₁, 5f₁, ...

- Fundamental: **f₁ = v / (4L)** (same length ke open pipe ka **aadha**!)
- **ONLY ODD HARMONICS** are present: **1 : 3 : 5 : 7 : ...**!
- **Dhyan do!** Closed pipe mein:
  - 1st overtone = **3rd harmonic** (3 f₁)
  - 2nd overtone = **5th harmonic** (5 f₁)
  - k-th overtone = **(2k + 1)-th harmonic**!

---

## 4. Resonance Tube & End Correction (e)

Lab mein ek vertical tube mein paani bhar kar hum ek variable-length **closed organ pipe** banate hain aur upar ek vibrating tuning fork (frequency f) rakhte hain.

Asal mein open end ka antinode tube ke mouth se thoda bahar distance **e ≈ 0.6 r** (jahan r tube ka radius hai) par banta hai — ise **End Correction (e)** kehte hain!
- 1st resonance (length L₁): **L₁ + e = λ / 4**
- 2nd resonance (length L₂): **L₂ + e = 3λ / 4**

Dono ko subtract karo (e cancel ho jaata hai!):
L₂ - L₁ = (3λ/4) - (λ/4) = **λ / 2**   ⇒   **λ = 2 (L₂ - L₁)**

> **Speed of Sound from Resonance Tube:**
> **v = f λ = 2 f (L₂ - L₁)**
> **End Correction:** **e = (L₂ - 3 L₁) / 2**

*(Open pipe mein dono ends khule hote hain, isliye effective length L_eff = L + 2e hoti hai!)*

---

## Solved Examples

### Example 1: Sumitra ka Sitar String
Ek 0.80 m lambe sitar string mein transverse wave speed 320 m/s hai. Fundamental frequency aur 3rd harmonic (2nd overtone) nikalo.

**Solution:**
- Fundamental: f₁ = v / (2L) = 320 / (2 × 0.80) = 320 / 1.60 = **200 Hz**.
- 3rd harmonic: f₃ = 3 f₁ = 3 × 200 = **600 Hz**.

**Jaanch:** λ₁ = 2L = 1.6 m, f₁ = 320 / 1.6 = 200 Hz. ✅

---

### Example 2: Open vs Closed Organ Pipe Comparison
Air mein sound speed v = 330 m/s hai.
(a) 0.66 m lambe **open** organ pipe ki fundamental aur 1st overtone frequencies nikalo.
(b) 0.33 m lambe **closed** organ pipe ki fundamental aur 1st overtone frequencies nikalo.

**Solution:**
(a) Open pipe (L = 0.66 m):
- f₁ = v / (2L) = 330 / (2 × 0.66) = 330 / 1.32 = **250 Hz**.
- 1st overtone (= 2nd harmonic): f₂ = 2 × 250 = **500 Hz**.

(b) Closed pipe (L = 0.33 m):
- f₁ = v / (4L) = 330 / (4 × 0.33) = 330 / 1.32 = **250 Hz**! (Same fundamental as double-length open pipe!)
- 1st overtone (= **3rd harmonic**): f₃ = 3 × 250 = **750 Hz**!

**Jaanch:** L_closed = L_open / 2 ⇒ same fundamental (250 Hz), but overtones differ (500 Hz vs 750 Hz)! ✅

---

### Example 3: Resonance Tube Experiment
Ek 500 Hz ke tuning fork ke saath resonance tube mein 1st resonance L₁ = 16.0 cm par aur 2nd resonance L₂ = 50.0 cm par milta hai. Air mein sound ki speed v aur end correction e nikalo.

**Solution:**
- Speed of sound:
  v = 2 f (L₂ - L₁) = 2 × 500 × (0.500 - 0.160) = 1000 × 0.340 = **340 m/s**!
- End correction:
  e = (L₂ - 3 L₁) / 2 = (50.0 - 3 × 16.0) / 2 = (50.0 - 48.0) / 2 = **1.0 cm**!

**Jaanch:** L₁ + e = 17.0 cm = λ/4 ⇒ λ = 68.0 cm = 0.68 m ⇒ v = 500 × 0.68 = 340 m/s. Exact! ✅

---

### Example 4: String ka Tension Badalna (Sonometer)
Ek sonometer wire 250 Hz par fundamental mode mein vibrate karta hai jab us par 4 kg ka weight latka hai. Agar weight ko 9 kg kar diya jaaye (same length), toh nayi fundamental frequency kya hogi?

**Solution:**
Kyunki f₁ ∝ √T (aur T = m g ∝ m):
f₁' / f₁ = √(m₂ / m₁) = √(9 / 4) = 3 / 2.
f₁' = 250 × (3 / 2) = **375 Hz**.

**Jaanch:** 375 / 250 = 1.5 = √(9/4). ✅

---

## Aam Galtiyan (Common Mistakes)

### Mistake 1: Closed Pipe mein 1st Overtone ko 2f₁ Maan Lena
**Galat Soch:** *"Open pipe mein 1st overtone = 2f₁ hota hai, toh closed pipe mein bhi 2f₁ hoga!"*
**Sahi Baat:** Closed pipe mein **even harmonics exist hi nahi karte**! Isliye fundamental f₁ ke baad seedha **3f₁** aata hai — **1st overtone = 3rd harmonic = 3f₁**!

### Mistake 2: Resonance Tube mein End Correction Bhool Kar v = 4 f L₁ Laga Dena
**Galat Soch:** *"L₁ = 16 cm aur f = 500 Hz hai, toh v = 4 × 500 × 0.16 = 320 m/s!"*
**Sahi Baat:** End correction e = 1 cm chhoot gaya, isliye 20 m/s ka bada error aa gaya! Jab L₁ aur L₂ dono diye hon, toh hamesha **v = 2 f (L₂ - L₁)** lagao — isme e apne aap cancel ho jaata hai!

---

## Quick Recap

- **Stretched string:** f_n = n v / (2L) = (n / 2L) √(T / μ) — all harmonics (1 : 2 : 3).
- **Open organ pipe:** f_n = n v / (2L) — all harmonics (1 : 2 : 3); effective length = L + 2e.
- **Closed organ pipe:** f = (2m - 1) v / (4L) — **odd harmonics only** (1 : 3 : 5); 1st overtone = 3f₁.
- **Resonance tube:** **v = 2 f (L₂ - L₁)** aur **e = (L₂ - 3 L₁) / 2** (e ≈ 0.6 r).

---

## Practice Questions

### Question 1
A guitar string of length 0.60 m has wave speed 240 m/s. Find its fundamental frequency and 2nd harmonic.

### Question 2
A stretched wire of length 1.0 m and mass 10 g is under a tension of 160 N. Calculate its fundamental frequency.

### Question 3
Find the fundamental frequency and first overtone of an open organ pipe of length 0.50 m if the speed of sound in air is 340 m/s.

### Question 4
Find the fundamental frequency and first overtone of a closed organ pipe of length 0.50 m (v = 340 m/s).

### Question 5
What is the ratio of the fundamental frequency of an open organ pipe to that of a closed organ pipe of the same length?

### Question 6
The 2nd overtone of a closed organ pipe has the same frequency as the 1st overtone of an open organ pipe. Find the ratio of the length of the closed pipe to the open pipe (L_c / L_o).

### Question 7
In a resonance tube experiment with a 425 Hz tuning fork, the first two resonances occur at L₁ = 19.0 cm and L₂ = 59.0 cm. Calculate the speed of sound in air.

### Question 8
Using the data from Question 7, calculate the end correction e of the resonance tube.

### Question 9
A string vibrates in 4 loops when driven at 320 Hz. What is its fundamental frequency?

### Question 10
A closed organ pipe has fundamental frequency 150 Hz. Can it resonate with a tuning fork of frequency 600 Hz? Explain why or why not.

### Question 11
If the length of a vibrating string is halved and its tension is quadrupled, by what factor does its fundamental frequency change?

### Question 12
True or False: In a closed organ pipe, the 3rd overtone corresponds to the 7th harmonic.

---

## Worked Answers

### Answer 1
- Fundamental: f₁ = v / (2L) = 240 / (2 × 0.60) = 240 / 1.2 = **200 Hz**.
- 2nd harmonic: f₂ = 2 × 200 = **400 Hz**.
**Jaanch:** λ₁ = 1.2 m ⇒ 240 / 1.2 = 200 Hz. ✅

### Answer 2
μ = 0.010 / 1.0 = 0.010 kg/m.
v = √(160 / 0.010) = √16000 = 40 √10 ≈ 126.5 m/s.
f₁ = v / (2L) = 126.5 / 2.0 ≈ **63.25 Hz**.
**Jaanch:** f₁ = 20 √10 ≈ 63.25 Hz. ✅

### Answer 3
Open pipe:
- f₁ = v / (2L) = 340 / (2 × 0.50) = **340 Hz**.
- 1st overtone (= 2nd harmonic): f₂ = 2 × 340 = **680 Hz**.
**Jaanch:** λ₁ = 2L = 1.0 m ⇒ f₁ = 340 Hz. ✅

### Answer 4
Closed pipe:
- f₁ = v / (4L) = 340 / (4 × 0.50) = 340 / 2.0 = **170 Hz**.
- 1st overtone (= 3rd harmonic): f₃ = 3 × 170 = **510 Hz**.
**Jaanch:** Closed fundamental is half of open fundamental (340/2 = 170 Hz). ✅

### Answer 5
f_open / f_closed = (v / 2L) / (v / 4L) = **2 : 1**.
**Jaanch:** Open pipe sounds one octave higher! ✅

### Answer 6
- 2nd overtone of closed pipe = 5th harmonic = 5 v / (4 L_c).
- 1st overtone of open pipe = 2nd harmonic = 2 v / (2 L_o) = v / L_o.
Equate both: 5 v / (4 L_c) = v / L_o ⇒ L_c / L_o = **5 / 4** (1.25).
**Jaanch:** 5 / (4 × 5/4) = 1 = 2/2. ✅

### Answer 7
v = 2 f (L₂ - L₁) = 2 × 425 × (0.590 - 0.190) = 850 × 0.400 = **340 m/s**.
**Jaanch:** λ = 2 × 0.40 = 0.80 m; 425 × 0.80 = 340 m/s. ✅

### Answer 8
e = (L₂ - 3 L₁) / 2 = (59.0 - 3 × 19.0) / 2 = (59.0 - 57.0) / 2 = **1.0 cm**.
**Jaanch:** L₁ + e = 20.0 cm = λ/4 = 80/4. Exact! ✅

### Answer 9
4 loops = 4th harmonic = 4 f₁ = 320 Hz ⇒ f₁ = 320 / 4 = **80 Hz**.
**Jaanch:** 4 × 80 = 320 Hz. ✅

### Answer 10
**No!** 600 Hz = **4 × 150 Hz** (4th harmonic — even!). Closed organ pipe mein sirf **odd harmonics** (150, 450, 750, ...) hi resonate karte hain.
**Jaanch:** 600 / 150 = 4 (even, forbidden in closed pipe). ✅

### Answer 11
f₁ = (1 / 2L) √(T / μ).
L → L/2 (factor 2) aur T → 4T (√4 = factor 2).
Total factor = 2 × 2 = **4 times**!
**Jaanch:** f₁' = (1 / L) √(4T / μ) = 4 f₁. ✅

### Answer 12
✅ **True.** Closed pipe mein k-th overtone = (2k + 1)-th harmonic. k = 3 ke liye: 2(3) + 1 = **7th harmonic**.
**Jaanch:** Overtones: 1st→3rd, 2nd→5th, 3rd→7th. ✅

---

Ab **tum** sitar ke taar aur organ pipes ke saare harmonics aur resonance tube ke end correction ko aasani se solve kar sakte ho!

**Agle Topic mein:** Jab do thode alag frequency ke notes ek saath bajte hain toh "wah-wah-wah" ki aawaz kyun aati hai? Aur tez bhaagti ambulance ka siren paas aate hi teekha aur door jaate hi bhaari kyun ho jaata hai? **Beats aur Doppler Effect** — padhenge Part 5 mein!

**Next:** [Chapter 14: Waves (Part 5) — Beats & The Doppler Effect](waves-part5.md)
