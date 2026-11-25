# Significant Figures, Vernier Callipers & Screw Gauge

> **Pichle topic se:** [Errors in Measurement & Propagation of Errors](units-and-measurements-part4.md) mein humne seekha ki har measurement mein error hota hai. Ab hum seekhenge ki us uncertainty ko digits mein kaise honestly likhte hain (Significant Figures) aur 0.1 mm ya 0.01 mm tak accurate measurement karne wale do sabse famous lab instruments — Vernier Callipers aur Screw Gauge — kaise padhte hain!

---

## Padmini ki Watchmaking Workshop

Padmini ek watchmaking aur micro-machining workshop mein apprentice hai. Ek baar usne calculator par 4.237 g ko 2.51 cm³ se divide kiya toh screen par aaya **1.68804780876... g/cm³**. Usne pura 11-digit number report mein likh diya.

Uski master ne hans kar kaha, "Padmini, tumhara volume sirf 3 digits (2.51) tak reliable tha — tum 11 digits likh kar jhooti precision dikha rahi ho! Sahi answer sirf **1.69 g/cm³** hai."

Iske baad master ne use do precision tools diye: **Vernier Callipers** (0.1 mm tak) aur **Screw Gauge** (0.01 mm tak). Chalo dono aur significant figures ke exact niyam seekhte hain!

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Significant Figures (Sig Figs) | Kisi measurement ke sabhi reliable digits + pehla uncertain (estimated) digit |
| Leading Zeros | Number ke shuru mein aane wale zeros (jaise 0.0045 mein teen zeros) — yeh sirf decimal ki jagah dikhate hain, significant NAHI hote |
| Trailing Zeros | Number ke end mein aane wale zeros — decimal ke baad significant hote hain (jaise 4.500), bina decimal ke ambiguous |
| Least Count (LC) | Instrument se naapi ja sakne wali sabse chhoti value |
| Zero Error | Jab instrument ke jaws band hon tab zero mark ka exact align na hona (+ ya -) |
| Pitch (Screw Gauge) | Circular scale ko ek poora chakkar (1 rotation) ghumane par screw jitna linear aage badhta hai |

---

## 1. Rules for Counting Significant Figures

1. **All non-zero digits are significant:** 23.45 has 4 sig figs.
2. **All trapped zeros (between non-zero digits) are significant:** 6.032 has 4 sig figs; 1005 has 4 sig figs.
3. **Leading zeros are NEVER significant:** 0.0045 has only 2 sig figs (4 and 5).
4. **Trailing zeros WITH a decimal point ARE significant:** 0.00450 has 3 sig figs (4, 5, 0); 3.500 has 4 sig figs.
5. **Trailing zeros WITHOUT a decimal point are NOT significant** (unless scientific notation clarifies): 4700 m has 2 sig figs, whereas 4.700 × 10³ m has 4 sig figs.
6. **Powers of 10 do NOT affect sig figs:** 2.64 × 10²⁴ has 3 sig figs (2, 6, 4).
7. **Exact counted numbers and defined constants have infinite sig figs:** jaise circumference = 2πr mein 2 exact hai.

---

## 2. Rounding-Off Rules (Including the Even-Digit Rule for 5)

Jab extra digits drop karne hon:
- Dropped digit **< 5**: pichla digit unchanged (3.42 -> 3.4).
- Dropped digit **> 5**: pichla digit +1 (3.47 -> 3.5).
- Dropped digit **= 5 followed by non-zero digits**: pichla digit +1 (3.451 -> 3.5).
- Dropped digit **= 5 alone (ya sirf zeros ke saath)** — **Even-Digit Rule**:
  - Agar pichla digit **even** hai toh unchanged (2.745 -> 2.74).
  - Agar pichla digit **odd** hai toh +1 karke even bana do (2.735 -> 2.74).

**Kyun even-digit rule?** Taaki lambi calculations mein hamesha upar round karne se systematic bias na ban jaye — aadhi baar upar, aadhi baar neeche round hota hai!

---

## 3. Arithmetic Rules with Significant Figures

Dhyan rakho — addition/subtraction aur multiplication/division ke rules **ALAG** hain!

- **Addition & Subtraction:** Final result mein utne hi **decimal places** rakho jitne sabse kam decimal places wali input number mein hain.
- **Multiplication & Division:** Final result mein utne hi **significant figures** rakho jitne sabse kam sig figs wali input number mein hain.

---

## 4. Vernier Callipers

Ek ordinary ruler ka least count 1 mm (0.1 cm) hota hai. Vernier Callipers mein Main Scale (MS) ke saath ek chhota sliding **Vernier Scale (VS)** hota hai jo 0.1 mm (0.01 cm) tak naap sakta hai.

```
  Main Scale (mm):    0   1   2   3   4   5   6   7   8   9  10
                     MS: |---|---|---|---|---|---|---|---|---|---|
  Vernier Scale:     VS: |---|---|---|---|---|---|---|---|---|
                      0   1   2   3   4   5   6   7   8   9  10
                      (10 VSD fit exactly inside 9 MSD = 9 mm)
```

- **Least Count:**
  LC = 1 MSD - 1 VSD
  Standard Vernier mein 10 VSD = 9 MSD => 1 VSD = 0.9 MSD.
  So **LC = 1 MSD - 0.9 MSD = 0.1 MSD = 0.1 mm = 0.01 cm**.

- **Observed Reading:**
  Observed Reading = MSR + (VSR × LC)
  (jahan MSR = Vernier ke zero se theek pehle ka Main Scale reading, aur VSR = Vernier ka woh division jo Main Scale line se bilkul match kare).

- **Zero Error Correction:**
  - **Positive zero error (+e):** Jaws band karne par Vernier ka 0 Main Scale ke 0 ke **right** mein ho.
  - **Negative zero error (-e):** Jaws band karne par Vernier ka 0 Main Scale ke 0 ke **left** mein ho.
  - **Golden Rule:**
    **Corrected Reading = Observed Reading - Zero Error** (sign ke saath!)

---

## 5. Screw Gauge (Micrometer)

Jab 0.01 mm tak aur bhi bareek measurement chahiye (jaise patli taar ka diameter ya sheet ki thickness), hum **Screw Gauge** use karte hain.

```
  Pitch Scale (mm):   0   1   2   3   |  45
                 PS:  |---|---|---|   |  42 <-- Reference line (CSR = 42)
                                  CS: |  40
```

- **Pitch** = Distance moved by screw in 1 full rotation (usually 1 mm).
- **Least Count:**
  LC = Pitch / (Total number of divisions on Circular Scale)
  Standard Screw Gauge: Pitch = 1 mm, N = 100 divisions => **LC = 1 mm / 100 = 0.01 mm = 0.001 cm**.

- **Observed Reading:**
  Observed Reading = PSR + (CSR × LC)
  (PSR = Pitch Scale / Main Scale Reading; CSR = Circular Scale division matching the reference line).

- **Zero Error Correction:**
  - **Positive zero error (+e):** Circular scale ka 0 reference line ke **neeche** reh jaye.
  - **Negative zero error (-e):** Circular scale ka 0 reference line ke **upar** nikal jaye.
  - **Golden Rule:**
    **Corrected Reading = Observed Reading - Zero Error** (sign ke saath!).

---

## Solved Examples

### Example 1: Counting Significant Figures

Find the number of significant figures in:
(a) 0.00450   (b) 2.64 × 10²⁴   (c) 6.032

**Solution:**
- (a) **0.00450** -> Leading three zeros significant nahi hain; 4, 5, aur decimal ke baad ka trailing 0 significant hain => **3 significant figures**.
- (b) **2.64 × 10²⁴** -> Power of 10 count nahi hota; 2, 6, 4 significant hain => **3 significant figures**.
- (c) **6.032** -> Trapped zero significant hota hai => **4 significant figures**.

Jaanch:
- Jaanch: 0.00450 = 4.50 × 10⁻³ (3 sig figs), 2.64 × 10²⁴ (3), 6.032 (4) ✅

---

### Example 2: Significant-Figure Arithmetic (Addition & Division)

(a) Add 436.32 g, 227.2 g, and 0.301 g to the proper significant figures.
(b) A cube has mass 4.237 g and volume 2.51 cm³. Find its density to proper significant figures.

**Solution:**
**(a) Addition (least decimal places rule):**
- 436.32 (2 decimal places)
- 227.2  (1 decimal place — sabse kam!)
- 0.301  (3 decimal places)
Exact sum = 436.32 + 227.2 + 0.301 = 663.821 g.
Round to 1 decimal place: **663.8 g**.

**(b) Division (least significant figures rule):**
- m = 4.237 g (4 sig figs)
- V = 2.51 cm³ (3 sig figs — sabse kam!)
Exact ratio = 4.237 / 2.51 = 1.6880478... g cm⁻³.
Round to 3 significant figures: **1.69 g cm⁻³**.

Jaanch:
- Jaanch: (a) 663.8 mein 1 decimal place hai (227.2 ke barabar); (b) 1.69 mein 3 sig figs hain (2.51 ke barabar) ✅

---

### Example 3: Vernier Callipers Reading with Positive Zero Error

In a Vernier Callipers, 10 VSD = 9 MSD and 1 MSD = 1 mm. While measuring a cylinder's length, MSR = 2.4 cm and the 6th Vernier division coincides with a Main Scale mark. If the instrument has a positive zero error of +0.02 cm, find the corrected length.

**Solution:**
- Least Count: LC = 1 MSD - 0.9 MSD = 0.1 mm = 0.01 cm.
- Observed Reading = MSR + (VSR × LC) = 2.4 cm + (6 × 0.01 cm) = 2.46 cm.
- Corrected Reading = Observed - Zero Error = 2.46 cm - (+0.02 cm) = **2.44 cm**.

Jaanch:
- Jaanch: Positive zero error pehle se 0.02 cm zyada dikha raha tha, isliye subtract karke 2.46 - 0.02 = 2.44 cm mila ✅

---

### Example 4: Screw Gauge Reading with Negative Zero Error

A screw gauge has a pitch of 1 mm and 100 divisions on its circular scale. While measuring a wire's diameter, PSR = 3 mm and the 42nd circular division aligns with the reference line. If the screw gauge has a negative zero error of -0.03 mm, find the corrected diameter.

**Solution:**
- Least Count: LC = 1 mm / 100 = 0.01 mm.
- Observed Reading = PSR + (CSR × LC) = 3 mm + (42 × 0.01 mm) = 3.42 mm.
- Corrected Reading = Observed - Zero Error = 3.42 mm - (-0.03 mm) = 3.42 + 0.03 = **3.45 mm**.

Jaanch:
- Jaanch: Negative zero error 0.03 mm kam dikha raha tha, toh minus of minus (+0.03) karne par 3.45 mm mila ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Leading zeros ko significant count kar lena
- **Galat:** 0.0045 mein 4 ya 5 significant figures hain.
- **Sahi:** Leading zeros sirf decimal point ki jagah batate hain (0.0045 = 4.5 × 10⁻³). Isme sirf **2 significant figures** hain!

### Galti 2: Addition/Subtraction mein "least significant figures" rule laga dena
- **Galat:** 436.32 + 227.2 + 0.301 mein 0.301 ke 3 sig figs dekh kar answer ko 664 (3 sig figs) likh dena.
- **Sahi:** Addition aur subtraction mein **least decimal places** dekhte hain! 227.2 mein 1 decimal place hai, isliye sahi answer **663.8** (4 sig figs, 1 decimal place) hai.

### Galti 3: Positive zero error ko add kar dena
- **Galat:** Zero error +0.02 cm hai toh Observed + 0.02 = 2.48 cm kar diya.
- **Sahi:** Positive zero error ka matlab hai instrument pehle se hi +0.02 cm aage dikha raha hai. Hamesha **Corrected = Observed - Zero Error** lagao => 2.46 - 0.02 = **2.44 cm**.

---

## Quick Recap

- **Sig Figs:** Non-zero & trapped zeros count; leading zeros NEVER count; trailing zeros after decimal ALWAYS count; powers of 10 don't count.
- **Rounding 5:** Even-digit rule (preceding even stays, odd increases by 1).
- **Arithmetic:** Add/Sub -> least **decimal places**; Mul/Div -> least **significant figures**.
- **Vernier Callipers:** LC = 1 MSD - 1 VSD; Reading = MSR + VSR × LC - Zero Error.
- **Screw Gauge:** LC = Pitch / N; Reading = PSR + CSR × LC - Zero Error.

---

## Practice Questions

### Question 1
State the number of significant figures in each of the following:
(a) 0.007 m²   (b) 0.2370 g cm⁻³   (c) 6.320 J   (d) 0.0006032 m²

**Solution:**
- (a) 0.007 -> **1** (only 7)
- (b) 0.2370 -> **4** (trailing zero after decimal counts)
- (c) 6.320 -> **4**
- (d) 0.0006032 -> **4** (6, 0, 3, 2; leading zeros don't count)

Jaanch:
- Jaanch: Scientific notation: 7×10⁻³ (1), 2.370×10⁻¹ (4), 6.320 (4), 6.032×10⁻⁴ (4) ✅

---

### Question 2
Round off the following numbers to 3 significant figures:
(a) 4.745   (b) 4.735   (c) 0.02867

**Solution:**
- (a) 4.745 -> dropped digit is 5, preceding digit 4 is even => **4.74**
- (b) 4.735 -> dropped digit is 5, preceding digit 3 is odd => **4.74**
- (c) 0.02867 -> leading zeros ignore; 2, 8, 6 ke baad 7 > 5 => **0.0287**

Jaanch:
- Jaanch: Dono 4.745 aur 4.735 even-digit rule se 4.74 ban gaye ✅

---

### Question 3
Subtract 9.95 g from 15.236 g and express the result to the proper number of significant figures.

**Solution:**
15.236 (3 decimal places) - 9.95 (2 decimal places) = 5.286 g.
Least decimal places = 2 => **5.29 g**.

Jaanch:
- Jaanch: 5.286 ko 2 decimal places par round karne par 6 > 5 so 5.29 ✅

---

### Question 4
The length and breadth of a metal plate are 4.234 m and 1.005 m respectively. Find its area to the correct number of significant figures.

**Solution:**
4.234 (4 sig figs) × 1.005 (4 sig figs) = 4.25517 m².
Round to 4 significant figures: **4.255 m²**.

Jaanch:
- Jaanch: 4.234 × 1 = 4.234; 4.234 × 0.005 = 0.02117; sum = 4.25517 -> 4.255 ✅

---

### Question 5
A Vernier Callipers has 1 MSD = 1 mm and 10 VSD = 9 MSD. Find its reading when MSR = 3.1 cm, VSR = 8, and there is no zero error.

**Solution:**
LC = 0.1 mm = 0.01 cm.
Reading = 3.1 cm + (8 × 0.01 cm) = **3.18 cm**.

Jaanch:
- Jaanch: 3.1 + 0.08 = 3.18 cm ✅

---

### Question 6
In a Vernier Callipers (LC = 0.01 cm), MSR = 1.8 cm and the 4th Vernier division coincides with a Main Scale mark. If the zero error is -0.03 cm, find the corrected reading.

**Solution:**
Observed = 1.8 + 4(0.01) = 1.84 cm.
Corrected = 1.84 - (-0.03) = 1.84 + 0.03 = **1.87 cm**.

Jaanch:
- Jaanch: Negative zero error minus karne par add hota hai: 1.84 + 0.03 = 1.87 cm ✅

---

### Question 7
A screw gauge advances by 2 mm in 4 complete rotations of the circular scale. If the circular scale has 50 divisions, find its pitch and least count.

**Solution:**
Pitch = 2 mm / 4 = **0.5 mm**.
Least Count = Pitch / N = 0.5 mm / 50 = **0.01 mm** (0.001 cm).

Jaanch:
- Jaanch: 4 rotations × 0.5 mm = 2 mm; 0.5 / 50 = 0.01 mm ✅

---

### Question 8
A screw gauge of pitch 0.5 mm and 50 circular divisions measures a ball bearing. PSR = 4.5 mm and CSR = 28. If the positive zero error is +0.02 mm, find the corrected diameter.

**Solution:**
LC = 0.5 mm / 50 = 0.01 mm.
Observed = 4.5 + 28(0.01) = 4.78 mm.
Corrected = 4.78 - (+0.02) = **4.76 mm**.

Jaanch:
- Jaanch: 4.5 + 0.28 - 0.02 = 4.76 mm ✅

---

### Question 9
Add 2.3 × 10⁴ and 1.54 × 10³ and express the result to the proper significant figures.

**Solution:**
Convert to same power of 10:
2.3 × 10⁴ + 0.154 × 10⁴ = 2.454 × 10⁴.
2.3 mein 1 decimal place hai aur 0.154 mein 3 decimal places hain.
Round to 1 decimal place: **2.5 × 10⁴**.

Jaanch:
- Jaanch: 23000 + 1540 = 24540 = 2.454 × 10⁴ -> 2.5 × 10⁴ (4 ke baad 54 hai so round up) ✅

---

### Question 10
A box of mass 2.3 kg has two gold pieces of masses 20.15 g and 20.17 g added to it. Find the total mass of the box to the correct significant figures.

**Solution:**
Convert to kg: 2.3 kg + 0.02015 kg + 0.02017 kg = 2.34032 kg.
Least decimal places = 1 (from 2.3 kg).
Round to 1 decimal place: **2.3 kg**.

Jaanch:
- Jaanch: 2.3 kg ka uncertainty ±0.1 kg hai, jo 0.04 kg ke gold pieces se bada hai, isliye honest answer 2.3 kg hi hai ✅

---

### Question 11
State whether the following statements are True or False:
(a) Changing the unit of a measurement changes its number of significant figures.
(b) A screw gauge with pitch 1 mm and 100 divisions is 10 times more precise than a standard Vernier callipers (LC = 0.1 mm).

**Solution:**
- (a) **False** ❌ — 4.70 m = 470 cm = 4.70 × 10² cm; sabhi mein 3 sig figs hi rehte hain.
- (b) **True** ✅ — Screw gauge LC = 0.01 mm aur Vernier LC = 0.1 mm (0.1 / 0.01 = 10 times finer).

Jaanch:
- Jaanch: Unit badalne se measurement ki accuracy nahi badalti, isliye sig figs same rehte hain ✅

---

### Question 12
In a Vernier Callipers, 1 MSD = 0.1 cm and 20 VSD = 19 MSD. Find its least count in mm.

**Solution:**
1 MSD = 0.1 cm = 1 mm.
1 VSD = (19 / 20) MSD = 0.95 mm.
LC = 1 MSD - 1 VSD = 1 - 0.95 = **0.05 mm** (0.005 cm).

Jaanch:
- Jaanch: Standard pattern (N - 1) MSD = N VSD mein LC = 1 MSD / N = 1 / 20 = 0.05 mm ✅

---

Ab tumhare paas lab instruments padhne aur honest significant digits report karne ka poora craft aa gaya hai!

**Agle topic mein:** Chapter ke sabhi tools — SI units, dimensions, error propagation, sig figs, aur instruments — ko ek saath jod kar solve karenge [Mixed Problems & Chapter Wrap-up](units-and-measurements-part6.md) mein!
