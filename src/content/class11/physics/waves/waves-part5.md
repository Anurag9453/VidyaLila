# Chapter 14: Waves (Part 5) — Beats & The Doppler Effect

> **Class:** 11 | **Subject:** Physics
> **Previous Topic:** [Waves (Part 4)](waves-part4.md)

---

## Story Time: Shabari ka Piano Tuner aur Railway Siren

**Shabari** ek railway-signal acoustics technician hai jo weekend par pianos bhi tune karti hai. Subah piano tune karte waqt usne 256 Hz ke tuning fork aur ek thode out-of-tune wire ko saath bajaya — hawa mein har second 4 baar **"WAH-wah-WAH-wah"** ki rhythmic loudness sunai di! Jaise-jaise usne wire ko tight kiya, ye beats 4/s se 2/s aur phir **0/s (pure smooth note)** ho gaye!

Shaam ko railway crossing par ek express train 30 m/s se horn bajati hui uske paas se guzri — paas aate waqt horn ka pitch **high (teekha)** tha, aur crossing paar karte hi achanak **low (bhaari)** ho gaya!

Shabari muskurayi: *"Subah **Beats** ne mujhe 0.1% frequency error pakadwa diya, aur shaam ko **Doppler Effect** ne train ki speed suna di!"*

---

## Naye Shabd (New Vocabulary)

| Term | Hinglish Meaning |
|---|---|
| **Beats (Vispand)** | Do slightly alag frequency ki waves ke superposition se loudness ka periodic badhna (waxing) aur ghatna (waning). |
| **Beat Frequency (f_beat)** | Ek second mein sunai dene wale maximum loudness pulses ki ginti: f_beat = |f₁ - f₂|. |
| **Waxing / Loading a Fork** | Tuning fork par mom (wax) lagana — mass badhta hai, isliye uski frequency **ghat (decrease)** jaati hai! |
| **Filing a Fork** | Tuning fork ko ghisna — mass kam hota hai, isliye uski frequency **badh (increase)** jaati hai! |
| **Doppler Effect** | Source aur observer ke beech relative motion ki wajah se sunai dene wali **apparent frequency (f')** mein change. |

---

## 1. Beats (Superposition of Slightly Different Frequencies)

Maan lo do waves of equal amplitude A aur thodi alag frequencies **f₁** aur **f₂** ek saath kaan mein pahunchti hain:
y₁ = A cos(2π f₁ t)   aur   y₂ = A cos(2π f₂ t)

Superposition (cos C + cos D = 2 cos((C-D)/2) cos((C+D)/2)):
> **y = [ 2 A cos(2π ((f₁ - f₂)/2) t) ] cos(2π ((f₁ + f₂)/2) t)**

Isko dhyan se dekho!
- **Carrier frequency:** f_avg = (f₁ + f₂) / 2 (jo pitch humein sunai deti hai).
- **Amplitude envelope:** A_env(t) = 2 A |cos(π (f₁ - f₂) t)|.
  Ek cycle mein |cos| **do baar** maximum (+1 aur -1 par) hota hai!
  Isliye intensity max hone ki frequency (Beat frequency):

> **Beat Frequency:** **f_beat = |f₁ - f₂|**
> **Beat Period:** **T_beat = 1 / |f₁ - f₂|**

> **Human Ear Limit:** Insaan ka kaan lagbhag **10 beats per second** tak hi alag-alag sun sakta hai. Agar |f₁ - f₂| > 10 Hz ho, toh humein beats nahi, sirf continuous noise/chord sunai deta hai.

### Waxing & Filing Trick (Classic Problem Solver!)
Maan lo known fork A (frequency f_A) aur unknown fork B saath mein **b** beats/s dete hain.
Toh f_B ke do options hain: **f_A + b** ya **f_A - b**.
Kaun sa sahi hai? Unknown fork B par thoda **wax** lagao (f_B **ghategi**!):
- Agar wax lagane se beats **kam** ho jaayein (ya 0 ho jaayein), toh f_B pehle f_A se **zyada** tha ⇒ **f_B = f_A + b**!
- Agar wax lagane se beats **badh** jaayein, toh f_B pehle f_A se **kam** tha ⇒ **f_B = f_A - b**!
*(Filing mein iska theek ulta — filing se frequency **badhti** hai!)*

---

## 2. The Doppler Effect in Sound

Jab sound source (speed v_s) ya observer (speed v_o) air ke respect mein move karta hai (sound speed = v), toh observer tak pahunchne wale wavefronts ya toh **compress** (paas aate hain → high pitch) ya **stretch** (door jaate hain → low pitch) ho jaate hain!

```
Moving Source (v_s -->):
   (  (  (  (  S---> ))))       <-- Aage wavefronts crowded (λ' chhoti, f' HIGH!)
   Peechhe stretched            <-- Peechhe λ' badi, f' LOW!
```

### Universal Master Formula (One Formula for ALL Cases!)

> **Apparent Frequency:**
> **f' = f × [ (v ± v_o) / (v ∓ v_s) ]**

### Golden Sign Rule (Kabhi Galti Nahi Hogi!)
Yaad rakhne ka sabse aasaan tareeka — **Numerator mein hamesha Observer (v_o)** aur **Denominator mein hamesha Source (v_s)**!
1. **Agar motion unhe PAAS laa raha hai (Approaching) ⇒ Frequency BADHNI chahiye (f' > f):**
   - Observer source ki taraf bhaage ⇒ Numerator badhao ⇒ **+ v_o**
   - Source observer ki taraf bhaage ⇒ Denominator ghatao ⇒ **- v_s**
2. **Agar motion unhe DOOR le jaa raha hai (Receding) ⇒ Frequency GHATNI chahiye (f' < f):**
   - Observer source se door bhaage ⇒ Numerator ghatao ⇒ **- v_o**
   - Source observer se door bhaage ⇒ Denominator badhao ⇒ **+ v_s**

| Case | Formula | Pitch Change |
|---|---|---|
| Source approaching stationary observer | f' = f [ v / (v - v_s) ] | Increases (f' > f) |
| Source receding from stationary observer | f' = f [ v / (v + v_s) ] | Decreases (f' < f) |
| Observer approaching stationary source | f' = f [ (v + v_o) / v ] | Increases (f' > f) |
| Observer receding from stationary source | f' = f [ (v - v_o) / v ] | Decreases (f' < f) |
| Both approaching each other | f' = f [ (v + v_o) / (v - v_s) ] | Maximum increase! |
| Both receding from each other | f' = f [ (v - v_o) / (v + v_s) ] | Maximum decrease! |

### Echo / Reflection from a Moving Wall or Car (Two-Step Doppler!)
Agar ek car (speed v_c) stationary wall ki taraf horn bajate hue ja rahi hai:
- **Step 1 (Wall as stationary observer):** Wall ko sunai dene wali frequency f_wall = f [ v / (v - v_c) ].
- **Step 2 (Wall reflects as stationary source, car is approaching observer):**
  Car driver ko echo ki frequency:
  f_echo = f_wall [ (v + v_c) / v ] = **f × [ (v + v_c) / (v - v_c) ]**!

---

## Solved Examples

### Example 1: Tuning Fork Waxing Puzzle
Shabari ke paas ek 256 Hz ka tuning fork A hai. Ek unknown fork B ke saath bajane par **4 beats/s** sunai dete hain. Jab B ke prongs par thoda wax lagaya gaya, toh beat frequency ghat kar **2 beats/s** ho gayi. B ki original frequency nikalo.

**Solution:**
- Initial possibilities for f_B: 256 + 4 = **260 Hz** ya 256 - 4 = **252 Hz**.
- Wax lagane se f_B **ghat (decrease)** jaata hai:
  - Agar f_B = 260 Hz hota, toh ghat kar 258 Hz banega → |258 - 256| = **2 beats/s** (matches!).
  - Agar f_B = 252 Hz hota, toh ghat kar 250 Hz banega → |250 - 256| = 6 beats/s (increases — wrong!).
- Therefore, B ki original frequency **260 Hz** hai!

**Jaanch:** 260 → 258 Hz reduces gap from 256 Hz (4 → 2 beats/s). ✅

---

### Example 2: Railway Crossing par Train ka Siren
Ek train 30 m/s ki speed se 600 Hz ka whistle bajate hue stationary Shabari ki taraf aa rahi hai aur phir use cross karke door jaati hai. (Sound speed v = 330 m/s.)
(a) Approaching frequency aur (b) Receding frequency nikalo.

**Solution:**
- (a) Approaching (f' > f ⇒ denominator mein minus):
  f'_app = 600 × [ 330 / (330 - 30) ] = 600 × (330 / 300) = 2 × 330 = **660 Hz**.
- (b) Receding (f' < f ⇒ denominator mein plus):
  f'_rec = 600 × [ 330 / (330 + 30) ] = 600 × (330 / 360) = 600 × (11 / 12) = **550 Hz**.

**Jaanch:** 660 Hz > 600 Hz > 550 Hz. Crossing par pitch 110 Hz achanak drop hota hai! ✅

---

### Example 3: Moving Car aur Wall ka Echo
Ek car 20 m/s ki speed se ek vertical cliff ki taraf badh rahi hai aur 310 Hz ka horn bajati hai. Driver ko cliff se reflect hokar aane wale echo ki frequency kya sunai degi? (v = 330 m/s.)

**Solution:**
Two-step Doppler shortcut:
f_echo = f × [ (v + v_c) / (v - v_c) ]
= 310 × [ (330 + 20) / (330 - 20) ] = 310 × (350 / 310) = **350 Hz**!

**Jaanch:** Wall receives 310 × (330/310) = 330 Hz; car approaching wall hears 330 × (350/330) = 350 Hz. Exact! ✅

---

### Example 4: Dono Trains Ek-Doosre ki Taraf
Do trains A aur B ek-doosre ki taraf 20 m/s aur 10 m/s ki speed se aa rahi hain. Train A 620 Hz ka horn bajati hai. Train B mein baithe passenger ko kya frequency sunai degi? (v = 330 m/s.)

**Solution:**
- Source = Train A (v_s = 20 m/s, approaching ⇒ - v_s)
- Observer = Train B (v_o = 10 m/s, approaching ⇒ + v_o)
f' = 620 × [ (330 + 10) / (330 - 20) ] = 620 × (340 / 310) = 2 × 340 = **680 Hz**.

**Jaanch:** Both approaching ⇒ maximum pitch boost (680 > 620 Hz). ✅

---

## Aam Galtiyan (Common Mistakes)

### Mistake 1: Doppler mein v_o aur v_s ko Swap Kar Dena
**Galat Soch:** *"Train observer ki taraf 30 m/s se aa rahi hai, toh f' = f (v + v_s) / v."*
**Sahi Baat:** **O upar, S neeche!** (Alphabetical order bhi: **O** comes before **S** ⇒ Observer in numerator, Source in denominator!). Source moving mein hamesha **v / (v ∓ v_s)** hota hai, aur observer moving mein **(v ± v_o) / v**!

### Mistake 2: Wax Lagane se Tuning Fork ki Frequency Badhti Hai Samajhna
**Galat Soch:** *"Wax lagane se fork mota/strong ho gaya, toh frequency badhegi."*
**Sahi Baat:** Wax lagane se fork ke prongs ka **mass (inertia)** badhta hai, aur SHM mein f = (1/2π) √(k/m) **ghat** jaata hai! Isliye **Waxing = Frequency DOWN; Filing = Frequency UP**.

---

## Quick Recap

- **Beats:** **f_beat = |f₁ - f₂|**; Beat period **T_beat = 1 / |f₁ - f₂|** (human ear hears up to ~10 Hz).
- **Waxing** lowers frequency; **Filing** raises frequency.
- **Doppler Effect:** **f' = f × [ (v ± v_o) / (v ∓ v_s) ]** (Observer UP, Source DOWN).
- Approaching ⇒ raise f' (+v_o, -v_s); Receding ⇒ lower f' (-v_o, +v_s).
- Echo from stationary wall to approaching car: **f_echo = f (v + v_c) / (v - v_c)**.

---

## Practice Questions

### Question 1
Two tuning forks of frequencies 480 Hz and 485 Hz are sounded together. Find the beat frequency and the time interval between two consecutive maxima.

### Question 2
A tuning fork X produces 5 beats per second with a 320 Hz fork Y. When X is filed slightly, the beat frequency decreases to 2 beats/s. Find the original frequency of X.

### Question 3
A tuning fork A (512 Hz) produces 6 beats/s with fork B. When a little wax is put on B, the beat frequency increases to 9 beats/s. What was the original frequency of B?

### Question 4
A fire engine moves towards a stationary pedestrian at 25 m/s sounding a 610 Hz siren. Find the apparent frequency heard by the pedestrian. (Take v = 330 m/s.)

### Question 5
In Question 4, what apparent frequency does the pedestrian hear after the fire engine passes by and moves away at 25 m/s? (Take v = 330 m/s.)

### Question 6
A cyclist rides towards a stationary factory siren (frequency 440 Hz) at 15 m/s. Find the apparent frequency heard by the cyclist. (Take v = 330 m/s.)

### Question 7
A stationary police car sounds a 500 Hz siren while a motorbike moves away from it at 33 m/s. Calculate the frequency heard by the biker. (Take v = 330 m/s.)

### Question 8
Two cars move directly away from each other at 15 m/s each. One car blows a 690 Hz horn. What frequency is heard by the driver of the other car? (Take v = 330 m/s.)

### Question 9
A bat flies straight towards a flat cave wall at 10 m/s emitting an ultrasonic pulse of 32 kHz. Find the frequency of the reflected echo heard by the bat. (Take v = 330 m/s.)

### Question 10
A train approaches a stationary observer at speed v_s such that the apparent frequency is 10% higher than the true frequency. If v = 330 m/s, find v_s.

### Question 11
Why can two independent tuning forks of 200 Hz and 250 Hz not produce audible beats?

### Question 12
True or False: In the Doppler effect for sound, moving the source towards a stationary observer at speed u gives the exact same apparent frequency as moving the observer towards a stationary source at the same speed u.

---

## Worked Answers

### Answer 1
- Beat frequency: f_beat = |485 - 480| = **5 Hz** (5 beats/s).
- Time between consecutive maxima: T_beat = 1 / 5 = **0.20 s**.
**Jaanch:** 5 maxima in 1 s ⇒ 0.2 s per beat. ✅

### Answer 2
Possibilities for f_X: 320 + 5 = 325 Hz or 320 - 5 = 315 Hz.
Filing se f_X **badhta (increases)** hai.
- Agar f_X = 315 Hz tha, toh badh kar 318 Hz hoga ⇒ |320 - 318| = **2 beats/s** (matches!).
- Agar 325 Hz hota, toh badh kar 328 Hz hota ⇒ 8 beats/s.
So original f_X = **315 Hz**.
**Jaanch:** Filing raises 315 → 318, closing the gap to 320. ✅

### Answer 3
Possibilities for f_B: 512 + 6 = 518 Hz or 512 - 6 = 506 Hz.
Wax lagane se f_B **ghatta (decreases)** hai.
- Agar f_B = 506 Hz tha, toh ghat kar 503 Hz hoga ⇒ |512 - 503| = **9 beats/s** (matches!).
So original f_B = **506 Hz**.
**Jaanch:** Waxing lowers 506 → 503, widening the gap from 512. ✅

### Answer 4
Source approaching stationary observer:
f' = 610 × [ 330 / (330 - 25) ] = 610 × (330 / 305) = 2 × 330 = **660 Hz**.
**Jaanch:** 610 / 305 = 2 ⇒ 2 × 330 = 660 Hz (> 610 Hz). ✅

### Answer 5
Source receding from stationary observer:
f' = 610 × [ 330 / (330 + 25) ] = 610 × (330 / 355) = 201300 / 355 ≈ **567.0 Hz**.
**Jaanch:** 567 < 610 Hz (receding lowers pitch). ✅

### Answer 6
Observer approaching stationary source:
f' = 440 × [ (330 + 15) / 330 ] = 440 × (345 / 330) = (4 / 3) × 345 = 4 × 115 = **460 Hz**.
**Jaanch:** 440 / 330 = 4/3; 4/3 × 345 = 460 Hz. ✅

### Answer 7
Observer receding from stationary source:
f' = 500 × [ (330 - 33) / 330 ] = 500 × (297 / 330) = 500 × 0.9 = **450 Hz**.
**Jaanch:** 33 is 10% of 330 ⇒ frequency drops by 10% (500 → 450 Hz). ✅

### Answer 8
Both receding (- v_o in numerator, + v_s in denominator):
f' = 690 × [ (330 - 15) / (330 + 15) ] = 690 × (315 / 345) = 2 × 315 = **630 Hz**.
**Jaanch:** 690 / 345 = 2 ⇒ 2 × 315 = 630 Hz. ✅

### Answer 9
Echo from stationary wall to approaching bat:
f_echo = 32 × [ (330 + 10) / (330 - 10) ] = 32 × (340 / 320) = **34 kHz**.
**Jaanch:** 32 / 320 = 0.1 ⇒ 0.1 × 340 = 34 kHz. ✅

### Answer 10
f' = 1.1 f = (11/10) f.
f × [ 330 / (330 - v_s) ] = (11/10) f
⇒ 3300 = 11 (330 - v_s) ⇒ 300 = 330 - v_s ⇒ **v_s = 30 m/s**.
**Jaanch:** 330 / (330 - 30) = 330 / 300 = 1.1 (exact 10% higher!). ✅

### Answer 11
Unka frequency difference |250 - 200| = **50 Hz** hai, jo insaan ke kaan ki beat-detection limit (~10 Hz) se bahut zyada hai! Isliye alag-alag beats sunai nahi denge.
**Jaanch:** 50 Hz > 10 Hz. ✅

### Answer 12
❌ **False.** Sound mein medium (air) ki apni rest frame hoti hai!
- Moving source: f' = f [ v / (v - u) ]
- Moving observer: f' = f [ (v + u) / v ]
Kyunki v/(v-u) > (v+u)/v (jaise u = v/2 par: 2f vs 1.5f), **moving source hamesha zyada shift deta hai**!
**Jaanch:** v² > v² - u² ⇒ v/(v-u) > (v+u)/v. ✅

---

Ab **tum** beats aur Doppler effect ke har tricky case (waxing, filing, moving cars, echoes) ko chutkiyon mein solve kar sakte ho!

**Agle Topic mein:** Poore Waves chapter ko ek saath jodenge — mixed synthesis problems, Decision Map, Chapter Wrap-up Table, aur Class 11 Physics ka grand finale — Part 6 mein!

**Next:** [Chapter 14: Waves (Part 6) — Sab Kuch Mila Kar & Chapter Wrap-up](waves-part6.md)
