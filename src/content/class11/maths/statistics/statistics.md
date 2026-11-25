# Chapter: Statistics

> **Class:** 11 | **Subject:** Mathematics
> **Pichhla chapter [limits-and-derivatives-part5.md](../limits-and-derivatives/limits-and-derivatives-part5.md) tha** (Limits and Derivatives ka aakhri topic, jiske teaser ne vaada kiya tha ki ab hum data ke phailav aur consistency ko naapenge!). Central tendency (Mean, Median, Mode) Class 9 ke [statistics.md](../../../class9/maths/statistics/statistics.md) mein padha tha.
> **Topics covered in this file:**
> 1. Measures of Dispersion: Range Aur Mean Deviation (About Mean & About Median)

---

# Topic 1: Measures of Dispersion — Range Aur Mean Deviation

Class 9 ke [statistics.md](../../../class9/maths/statistics/statistics.md) mein tumne data ka "beech" (central tendency) nikaalna seekha tha: Mean, Median, aur Mode.

Lekin kya sirf average (mean) jaanna kaafi hai? Bilkul nahi! Do datasets ka bilkul ek jaisa mean ho sakta hai, par ek dataset bilkul tight (consistent) ho aur doosra behad bikhra hua (scattered)! Data ke is bikhraav (spread) ko naapne wale numbers ko **Measures of Dispersion** kehte hain. Is pehle topic mein hum **Range** aur **Mean Deviation (MD)** seekhenge!

---

## Jigyasa ka archery selection trial

Jigyasa ek state-level archery coach hai. National team ke aakhri slot ke liye use do archers mein se ek ko chunna tha. Dono ke 5-shot trial scores the:
- **Archer A:** 48, 49, 50, 51, 52  -> Mean = 50, Median = 50
- **Archer B:** 10, 30, 50, 70, 90  -> Mean = 50, Median = 50

Mean aur Median dono ke exact 50 the! Par Jigyasa ne ek nazar mein Archer A ko select kar liya: "Dekho! Archer A ke sabhi shots 50 ke behad kareeb hain (average doori sirf 1.2 points!), jabki Archer B ke shots 10 se 90 tak bikhre hue hain (average doori 24 points!). Average ke saath-saath **spread (dispersion)** naapna hi asli performance batata hai!"

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Dispersion (Spread)** | Data values apne average (mean/median) se kitni door bikhri hui hain | Archer A tight, Archer B spread |
| **Range** | Sabse badi value aur sabse chhoti value ka antar: Max - Min | 90 - 10 = 80 |
| **Deviation (dᵢ)** | Kisi observation xᵢ ka central value A (mean ya median) se antar: xᵢ - A | 52 - 50 = +2 |
| **Mean Deviation (MD)** | Sabhi absolute deviations abs(xᵢ - A) ka average | MD(x̄) = (1/n) Σ abs(xᵢ - x̄) |

---

## Part A: Range (Sabse Aasaan Par Adhoora Measure)

**Range = Maximum observation - Minimum observation**

- **Fayda:** 2 second mein nikal aata hai!
- **Kami:** Yeh sirf do extreme values (Max aur Min) ko dekhta hai — beech ke sabhi numbers ko poori tarah ignore kar deta hai, aur ek akela outlier range ko bigaad deta hai!

---

## Part B: Mean Deviation (MD) About Mean Aur Median

Agar hum bina modulus lagaye seedhe deviations (xᵢ - x̄) ko jodein, to positive aur negative deviations aapas mein cut kar hamesha **Σ (xᵢ - x̄) = 0** bana dete hain!
Is cancellation ko rokne ka pehla tareeka hai: har deviation ka **absolute value |xᵢ - A|** lo aur unka average nikaalo!

### 1. Ungrouped Data (n observations x₁, x₂, ..., xₙ):
- **MD about Mean (x̄):** **MD(x̄) = (1/n) Σ |xᵢ - x̄|**
- **MD about Median (M):** **MD(M) = (1/n) Σ |xᵢ - M|**  *(pehle data ko ascending order mein sort karo!)*

### 2. Discrete Frequency Distribution (xᵢ with frequencies fᵢ, total N = Σ fᵢ):
- Mean: **x̄ = (1/N) Σ fᵢ xᵢ**
- **MD(x̄) = (1/N) Σ fᵢ |xᵢ - x̄|**
- **MD(M) = (1/N) Σ fᵢ |xᵢ - M|**

### 3. Continuous Grouped Distribution (Classes with frequencies fᵢ):
- Har class interval ka **midpoint xᵢ = (lower limit + upper limit)/2** lo, aur bilkul discrete distribution ki tarah MD(x̄) ya MD(M) nikaalo!
- Grouped Median: **M = l + [(N/2 - cf) / f] × h** (jahan median class pehli class hai jiska cumulative frequency ≥ N/2 ho).

---

## Solved Examples (Step-by-Step With Jaanch)

### Example 1.1: Range And Mean Deviation About Mean (Ungrouped)
**Sawaal:** Data 4, 7, 8, 9, 10, 12, 13, 17 ka Range aur Mean Deviation about Mean gyat karo.

**Solution:**
Yahan n = 8.
1. **Range** = Max - Min = 17 - 4 = **13**.
2. **Mean (x̄):**
   x̄ = (4 + 7 + 8 + 9 + 10 + 12 + 13 + 17) / 8 = 80 / 8 = **10**.
3. **Absolute deviations |xᵢ - 10|:**
   |4 - 10| = 6, |7 - 10| = 3, |8 - 10| = 2, |9 - 10| = 1,
   |10 - 10| = 0, |12 - 10| = 2, |13 - 10| = 3, |17 - 10| = 7.
4. **Sum of absolute deviations:** 6 + 3 + 2 + 1 + 0 + 2 + 3 + 7 = **24**.
5. **MD(x̄)** = 24 / 8 = **3**.

Jaanch:
- Jaanch: Signed deviations sum (-6 - 3 - 2 - 1 + 0 + 2 + 3 + 7) = 0, aur absolute sum 24 / 8 = 3 ✅

---

### Example 1.2: Mean Deviation About Median (Ungrouped)
**Sawaal:** Data 3, 9, 5, 3, 12, 10, 18, 4, 7, 19, 21 ka Mean Deviation about Median gyat karo.

**Solution:**
Step 1: Ascending order mein arrange karo (n = 11, odd):
3, 3, 4, 5, 7, **9**, 10, 12, 18, 19, 21.

Step 2: Median = ((11 + 1)/2)-th = 6th observation = **9**.

Step 3: Absolute deviations |xᵢ - 9|:
6, 6, 5, 4, 2, 0, 1, 3, 9, 10, 12.

Step 4: Sum = 6 + 6 + 5 + 4 + 2 + 0 + 1 + 3 + 9 + 10 + 12 = **58**.

Step 5: **MD(M)** = 58 / 11 ≈ **5.27**.

Jaanch:
- Jaanch: 5 observations < 9 aur 5 observations > 9 => M = 9 exact median hai, aur 58/11 = 5.2727... ✅

---

### Example 1.3: Mean Deviation About Mean (Discrete Frequency Table)
**Sawaal:** Neeche diye gaye discrete data ka Mean Deviation about Mean gyat karo:
xᵢ: 5, 10, 15, 20, 25
fᵢ: 7, 4, 6, 3, 5

**Solution:**
| xᵢ | fᵢ | fᵢ xᵢ | abs(xᵢ - 14) | fᵢ abs(xᵢ - 14) |
|---|---|---|---|---|
| 5 | 7 | 35 | 9 | 63 |
| 10 | 4 | 40 | 4 | 16 |
| 15 | 6 | 90 | 1 | 6 |
| 20 | 3 | 60 | 6 | 18 |
| 25 | 5 | 125 | 11 | 55 |
| **Total** | **N = 25** | **350** | — | **158** |

1. Mean: x̄ = 350 / 25 = **14**.
2. **MD(x̄)** = 158 / 25 = **6.32**.

Jaanch:
- Jaanch: N = 7 + 4 + 6 + 3 + 5 = 25; Σ fᵢ xᵢ = 350 => 350/25 = 14; Σ fᵢ |xᵢ - 14| = 63 + 16 + 6 + 18 + 55 = 158 => 158/25 = 6.32 ✅

---

### Example 1.4: Mean Deviation About Mean (Continuous Grouped Data)
**Sawaal:** Neeche diye gaye continuous distribution ka Mean Deviation about Mean gyat karo:
Classes: 0-10, 10-20, 20-30, 30-40, 40-50
fᵢ: 5, 8, 15, 16, 6

**Solution:**
| Class | Midpoint xᵢ | fᵢ | fᵢ xᵢ | abs(xᵢ - 27) | fᵢ abs(xᵢ - 27) |
|---|---|---|---|---|---|
| 0-10 | 5 | 5 | 25 | 22 | 110 |
| 10-20 | 15 | 8 | 120 | 12 | 96 |
| 20-30 | 25 | 15 | 375 | 2 | 30 |
| 30-40 | 35 | 16 | 560 | 8 | 128 |
| 40-50 | 45 | 6 | 270 | 18 | 108 |
| **Total** | — | **N = 50** | **1350** | — | **472** |

1. Mean: x̄ = 1350 / 50 = **27**.
2. **MD(x̄)** = 472 / 50 = **9.44**.

Jaanch:
- Jaanch: 25 + 120 + 375 + 560 + 270 = 1350 => 1350/50 = 27; 110 + 96 + 30 + 128 + 108 = 472 => 472/50 = 9.44 ✅

---

## Aam galtiyan (Common Mistakes)

### Galti 1: Mean Deviation mein modulus (absolute value) bhool jaana
- **Galat soch:** "xᵢ - x̄ ko seedha jod kar n se divide kar diya."
- **Sahi samajh:** Bina modulus lagaye Σ(xᵢ - x̄) hamesha **0** aata hai! Spread naapne ke liye hamesha **|xᵢ - x̄|** (har deviation positive!) lena zaroori hai.

### Galti 2: Unsorted data ka beech wala number Median maan lena
- **Galat soch:** "3, 9, 5, 3, 12 mein beech ka number 5 hai, isliye Median = 5."
- **Sahi samajh:** Median nikaalne se pehle data ko **ascending (ya descending) order mein sort** karna compulsory hai! Sort karne par 3, 3, 5, 9, 12 banta hai (yahan 5 ittefaq se middle tha, par Example 1.2 mein bina sort kiye 6th number 10 aata jabki asli median 9 tha!).

### Galti 3: Grouped data mein total frequency N ki jagah number of classes k se divide kar dena
- **Galat soch:** "5 classes hain, isliye 472 / 5 = 94.4."
- **Sahi samajh:** 5 classes mein kul **N = Σ fᵢ = 50** observations hain! Hamesha **N = Σ fᵢ** se divide karo!

---

## Quick Recap

- **Range:** Max - Min.
- **Mean Deviation (Ungrouped):** MD(x̄) = (1/n) Σ |xᵢ - x̄|, MD(M) = (1/n) Σ |xᵢ - M|.
- **Mean Deviation (Grouped/Discrete):** MD(x̄) = (1/N) Σ fᵢ |xᵢ - x̄|, MD(M) = (1/N) Σ fᵢ |xᵢ - M|, jahan N = Σ fᵢ.
- **Fun Fact:** Kisi bhi dataset ke liye, Mean Deviation about **Median** hamesha minimum hota hai (yaani MD(M) ≤ MD(x̄))!

---

## Practice Questions (English) With Hinglish Solutions

### Question 1
Find the Range and Mean Deviation about the Mean for the data: 6, 7, 10, 12, 13, 4, 8, 12.

**Solution:**
Here n = 8. Range = 13 - 4 = **9**.
Mean x̄ = (6 + 7 + 10 + 12 + 13 + 4 + 8 + 12) / 8 = 72 / 8 = 9.
|xᵢ - 9|: 3, 2, 1, 3, 4, 5, 1, 3. Sum = 22.
MD(x̄) = 22 / 8 = **2.75**.

Jaanch:
- Jaanch: Sum = 72, 72/8 = 9; deviations sum = 22 => 22/8 = 2.75 ✅

---

### Question 2
Find the Mean Deviation about the Mean for the data: 12, 3, 18, 17, 4, 9, 17, 19, 20, 15, 8, 17, 2, 3, 16, 11, 3, 1, 0, 5.

**Solution:**
Here n = 20. Sum = 200 => Mean x̄ = 200 / 20 = 10.
|xᵢ - 10|: 2, 7, 8, 7, 6, 1, 7, 9, 10, 5, 2, 7, 8, 7, 6, 1, 7, 9, 10, 5.
Sum of absolute deviations = 124.
MD(x̄) = 124 / 20 = **6.2**.

Jaanch:
- Jaanch: Notice first 10 deviations sum to 62, next 10 also sum to 62 => 124/20 = 6.2 ✅

---

### Question 3
Find the Mean Deviation about the Median for the data: 13, 17, 16, 14, 11, 13, 10, 16, 11, 18, 12, 17.

**Solution:**
Sort ascending (n = 12, even): 10, 11, 11, 12, 13, **13, 14**, 16, 16, 17, 17, 18.
Median M = (6th + 7th)/2 = (13 + 14)/2 = **13.5**.
|xᵢ - 13.5|: 3.5, 2.5, 2.5, 1.5, 0.5, 0.5, 0.5, 2.5, 2.5, 3.5, 3.5, 4.5.
Sum = 28.
MD(M) = 28 / 12 = **7/3 ≈ 2.33**.

Jaanch:
- Jaanch: 3.5 + 2.5 + 2.5 + 1.5 + 0.5 + 0.5 + 0.5 + 2.5 + 2.5 + 3.5 + 3.5 + 4.5 = 28 => 28/12 = 7/3 ✅

---

### Question 4
Find the Mean Deviation about the Median for: 36, 72, 46, 42, 60, 45, 53, 46, 51, 49.

**Solution:**
Sort ascending (n = 10, even): 36, 42, 45, 46, **46, 49**, 51, 53, 60, 72.
Median M = (46 + 49)/2 = **47.5**.
|xᵢ - 47.5|: 11.5, 5.5, 2.5, 1.5, 1.5, 1.5, 3.5, 5.5, 12.5, 24.5.
Sum = 70.
MD(M) = 70 / 10 = **7**.

Jaanch:
- Jaanch: Sum of deviations = 70, 70/10 = 7 ✅

---

### Question 5
Find the Mean Deviation about the Mean for the discrete data: xᵢ = 2, 5, 6, 8, 10, 12 with fᵢ = 2, 8, 10, 7, 8, 5.

**Solution:**
N = 2 + 8 + 10 + 7 + 8 + 5 = 40.
Σ fᵢ xᵢ = 4 + 40 + 60 + 56 + 80 + 60 = 300 => Mean x̄ = 300 / 40 = **7.5**.
fᵢ |xᵢ - 7.5|:
2(5.5) = 11, 8(2.5) = 20, 10(1.5) = 15, 7(0.5) = 3.5, 8(2.5) = 20, 5(4.5) = 22.5.
Sum = 11 + 20 + 15 + 3.5 + 20 + 22.5 = 92.
MD(x̄) = 92 / 40 = **2.3**.

Jaanch:
- Jaanch: 300/40 = 7.5 aur 92/40 = 2.3 ✅

---

### Question 6
Find the Mean Deviation about the Median for: xᵢ = 5, 7, 9, 10, 12, 15 with fᵢ = 8, 6, 2, 2, 2, 6.

**Solution:**
N = 8 + 6 + 2 + 2 + 2 + 6 = 26 (even).
Cumulative frequencies (cf): 8, 14, 16, 18, 20, 26.
13th and 14th observations both have x = 7 => Median M = **7**.
fᵢ |xᵢ - 7|: 8(2) = 16, 6(0) = 0, 2(2) = 4, 2(3) = 6, 2(5) = 10, 6(8) = 48.
Sum = 16 + 0 + 4 + 6 + 10 + 48 = 84.
MD(M) = 84 / 26 = **42/13 ≈ 3.23**.

Jaanch:
- Jaanch: N/2 = 13, 13th and 14th fall in cf = 14 (x = 7); 84/26 = 42/13 ✅

---

### Question 7
Find the Mean Deviation about the Mean for: xᵢ = 10, 30, 50, 70, 90 with fᵢ = 4, 24, 28, 16, 8.

**Solution:**
N = 4 + 24 + 28 + 16 + 8 = 80.
Σ fᵢ xᵢ = 40 + 720 + 1400 + 1120 + 720 = 4000 => x̄ = 4000 / 80 = **50**.
fᵢ |xᵢ - 50|: 4(40) = 160, 24(20) = 480, 28(0) = 0, 16(20) = 320, 8(40) = 320.
Sum = 1280.
MD(x̄) = 1280 / 80 = **16**.

Jaanch:
- Jaanch: 4000/80 = 50 aur 1280/80 = 16 ✅

---

### Question 8
Find the Mean Deviation about the Mean for the continuous data: classes 10-20, 20-30, 30-40, 40-50, 50-60 with fᵢ = 2, 3, 8, 14, 3.

**Solution:**
Midpoints xᵢ: 15, 25, 35, 45, 55. N = 2 + 3 + 8 + 14 + 3 = 30.
Σ fᵢ xᵢ = 30 + 75 + 280 + 630 + 165 = 1180 => x̄ = 1180/30 = **118/3 ≈ 39.33**.
Using exact fractions fᵢ |xᵢ - 118/3|:
- 2 |45/3 - 118/3| = 146/3
- 3 |75/3 - 118/3| = 129/3
- 8 |105/3 - 118/3| = 104/3
- 14 |135/3 - 118/3| = 238/3
- 3 |165/3 - 118/3| = 141/3
Sum = (146 + 129 + 104 + 238 + 141)/3 = 758/3.
MD(x̄) = (758/3) / 30 = **379/45 ≈ 8.42**.

Jaanch:
- Jaanch: 146 + 129 + 104 = 379 (below mean), 238 + 141 = 379 (above mean — exact balance!) => 758/90 = 379/45 ✅

---

### Question 9
Find the Mean Deviation about the Median for the continuous data: classes 0-10, 10-20, 20-30, 30-40, 40-50, 50-60 with fᵢ = 6, 7, 15, 16, 4, 2.

**Solution:**
N = 50, N/2 = 25. Cumulative frequencies: 6, 13, 28, 44, 48, 50.
Median class is 20-30 (l = 20, cf = 13, f = 15, h = 10):
M = 20 + [(25 - 13)/15] × 10 = 20 + (12/15) × 10 = 20 + 8 = **28**.

Midpoints xᵢ: 5, 15, 25, 35, 45, 55.
fᵢ |xᵢ - 28|: 6(23) = 138, 7(13) = 91, 15(3) = 45, 16(7) = 112, 4(17) = 68, 2(27) = 54.
Sum = 138 + 91 + 45 + 112 + 68 + 54 = 508.
MD(M) = 508 / 50 = **10.16**.

Jaanch:
- Jaanch: M = 28 lies inside 20-30, and 508/50 = 10.16 ✅

---

### Question 10
For the five observations 10, 10, 10, 10, 10, what are the Range and Mean Deviation about the Mean?

**Solution:**
Range = 10 - 10 = **0**.
Mean = 10, every |xᵢ - 10| = 0 => MD(x̄) = **0**.
(Jab sabhi observations bilkul same hon, to har measure of dispersion 0 hota hai!)

Jaanch:
- Jaanch: Zero spread => Range = 0 and MD = 0 ✅

---

### Question 11
If each observation in a dataset is increased by 5, what happens to its Range and Mean Deviation?

**Solution:**
Let yᵢ = xᵢ + 5.
- New Range = (Max + 5) - (Min + 5) = Max - Min (unchanged!).
- New Mean ȳ = x̄ + 5 => |yᵢ - ȳ| = |(xᵢ + 5) - (x̄ + 5)| = |xᵢ - x̄| => **MD remains unchanged!**

Jaanch:
- Jaanch: Test with {2, 4, 6} (Range = 4, MD = 4/3) shifted to {7, 9, 11} (Range = 4, MD = 4/3) ✅

---

### Question 12
Find the Mean Deviation about the Mean of the first 5 odd natural numbers: 1, 3, 5, 7, 9.

**Solution:**
Mean x̄ = (1 + 3 + 5 + 7 + 9)/5 = 25/5 = 5.
|xᵢ - 5|: 4, 2, 0, 2, 4. Sum = 12.
MD(x̄) = 12 / 5 = **2.4**.

Jaanch:
- Jaanch: 4 + 2 + 0 + 2 + 4 = 12 => 12/5 = 2.4 ✅

---

Ab tum Range aur Mean Deviation nikaalna jaante ho — par Mean Deviation mein absolute value (|xᵢ - x̄|) ki wajah se aage algebra karna mushkil hota hai! Agle topic [statistics-part2.md](statistics-part2.md) mein hum is problem ka sabse zabardast hal seekhenge: **Variance (σ²) aur Standard Deviation (σ)**!
