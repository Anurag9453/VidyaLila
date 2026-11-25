# Chapter: Linear Inequalities (Part 4)

> **Class:** 11 | **Subject:** Mathematics
> **Ye file [linear-inequalities-part3.md](linear-inequalities-part3.md) se aage chalti hai** (wahan Topic 3 mein 2D systems of linear inequalities, feasible regions aur corner points the). Chapter ki shuruaat: [linear-inequalities.md](linear-inequalities.md). Single 2D Half-Planes: [linear-inequalities-part2.md](linear-inequalities-part2.md).
> **Topics covered in this file:**
> 4. Sab Kuch Mila Kar: Mixed Problems, Applications, Practice Aur Chapter Ka Saar

---

# Topic 4: Sab Kuch Mila Kar: Mixed Problems, Applications, Practice Aur Chapter Ka Saar

Pichhle teen topics mein tumne Linear Inequalities ko 1D number line se lekar 2D feasible regions tak poori tarah samajh liya: sign-flip rules, double/system/modulus inequalities (Topic 1), half-planes aur Origin Test (Topic 2), aur 2D systems ke corner points (Topic 3). Ab aakhri padaav: asli science, psychology aur daily-life ke classic applications — jaise **acid dilution**, **IQ range**, **temperature conversion**, **modulus inequalities** aur **5-inequality 2D systems**! Is topic mein hum ek Decision Map banayenge, 6 mixed problems hal karenge, 3 aakhri galtiyon se bachenge, 12 mixed practice sawaal lagayenge, aur ant mein poore chapter ka saar ek table mein dekhenge.

---

## Damini ka Science & Commerce Fair "Constraint Corner"

School ke Science & Commerce Fair mein Damini **"Constraint Corner"** stall sambhaal rahi thi. Har visitor ko 4 real-life cases milte the:
- **Case 1 (Chemistry Lab):** 600 litre 12% acid solution mein kitna 30% acid milayein ki final concentration 15% aur 18% ke beech rahe?
- **Case 2 (Psychology):** IQ = (MA / CA) × 100 formula se 12 saal ke bachchon ka Mental Age range nikaalna!
- **Case 3 (Physics Thermometer):** 68°F se 77°F ko Celsius range mein badalna!
- **Case 4 (Operations Map):** 5 linear inequalities wale 2D feasible triangle ke corner points dhoondhna!

Damini ne board par apna **Decision Map** lagaya taaki har case 2 minute mein hal ho jaaye. Chalo, Damini ke saath sabhi 6 mixed problems hal karte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Concentration / Dilution inequality** | Mixture mein shuddh acid ki matra ko total volume ke % ke beech rakhna | 15% of (600 + x) < acid < 18% of (600 + x) |
| **Mental Age (MA) & Chronological Age (CA)** | Psychology ka IQ formula: IQ = (MA / CA) × 100 | CA = 12, 80 ≤ IQ ≤ 140 |

---

## Part A: Kaun Sa Tool Kab? (Decision Map)

| Sawaal ka suraagh | Kaun sa tool lagao? | Pehla kadam | Topic |
|---|---|---|---|
| Ek variable, fractions ya negative coefficient | 1D Algebra + Sign-flip | LCM se × karo; negative se ×/÷ par sign palto! | Topic 1 |
| "Between a and b" ya a ≤ expr ≤ b | Double inequality | Teeno hisson mein ek saath +, −, ×, ÷ karo | Topic 1 |
| abs(ax + b) ≤ c ya abs(ax + b) > c | Modulus rules (c > 0) | ≤ to −c ≤ ax+b ≤ c; > to ax+b < −c YA ax+b > c | Topic 1 & 4 |
| Mixture / Dilution (L litres of p% + x litres of q%) | Double inequality on pure solute | **Total volume (L + x)** dono taraf rakho! | Topic 4 |
| Ek 2D inequality ax + by < c (ya ≤, >, ≥) | Half-plane + Origin test | Dashed (<, >) ya Solid (≤, ≥), phir (0, 0) test | Topic 2 |
| 2 ya zyada 2D inequalities ek saath | System → Feasible region | Sab lines par arrows → sirf common overlap + corner points | Topic 3 |

---

## Part B: 6 Mixed Worked Problems

### Example 1: Classic Chemistry Acid-Dilution Problem

Ek manufacturer ke paas **600 litres** ka **12% acid solution** hai. Usme **30% acid solution** ke kitne litres (**x**) milaye jaayein taaki banne wale naye mixture mein acid ki matra **15% se zyada par 18% se kam** ho?

**Hal:**
1. **Total volume** = **(600 + x) litres** (yahan 600 + x bhoolna sabse badi galti hoti hai!).
2. **Total shuddh (pure) acid** = (12% of 600) + (30% of x) = **72 + 0.30x litres**.
3. Shart ke hisaab se:
   **15% of (600 + x) < 72 + 0.30x < 18% of (600 + x)**
   Poori inequality ko 100 se guna karo taaki decimals hat jaayein:
   **15(600 + x) < 7200 + 30x < 18(600 + x)**
4. Do hisson mein alag-alag hal karo:
   - **Left hissa:** 9000 + 15x < 7200 + 30x ⟹ 1800 < 15x ⟹ **x > 120**.
   - **Right hissa:** 7200 + 30x < 10800 + 18x ⟹ 12x < 3600 ⟹ **x < 300**.
5. Dono ko milao: **120 < x < 300** (yaani 120 litres se zyada aur 300 litres se kam!).

**Jaanch:** x = 200 L par total = 800 L, pure acid = 72 + 60 = 132 L → 132/800 = **16.5%** (15% aur 18% ke theek beech!) ✅; x = 120 L par 108/720 = 15% ✅; x = 300 L par 162/900 = 18% ✅.

---

### Example 2: IQ Range Formula Problem

Kisi insaan ka IQ formula hai: **IQ = (MA / CA) × 100**, jahan MA = Mental Age aur CA = Chronological Age. Agar **12 saal** ke bachchon ke ek group ke liye **80 ≤ IQ ≤ 140** ho, to unki Mental Age (MA) ka range nikalo.

**Hal:**
CA = 12 rakho:
80 ≤ (MA / 12) × 100 ≤ 140
Teeno hisson ko 12/100 se guna karo (positive!):
80 × (12/100) ≤ MA ≤ 140 × (12/100)
960/100 ≤ MA ≤ 1680/100
**9.6 ≤ MA ≤ 16.8** (years).

**Jaanch:** MA = 9.6 par (9.6/12) × 100 = 80 ✅; MA = 16.8 par (16.8/12) × 100 = 140 ✅.

---

### Example 3: Temperature Conversion Range (Fahrenheit → Celsius)

Kisi chemical solution ko **68°F aur 77°F** ke beech rakhna hai. Celsius mein uska temperature range nikalo, jahan **F = (9/5)C + 32**.

**Hal:**
68 < (9/5)C + 32 < 77
1. Teeno hisson se 32 ghatao:
   36 < (9/5)C < 45
2. Teeno hisson ko 5/9 (positive!) se guna karo:
   36 × (5/9) < C < 45 × (5/9)
   **20 < C < 25** (yaani **20°C aur 25°C** ke beech!).

**Jaanch:** C = 20 par (9/5)(20) + 32 = 68°F ✅; C = 25 par (9/5)(25) + 32 = 77°F ✅.

---

### Example 4: Double Fractional & Modulus Inequalities

Real x ke liye hal karo:
(i) **−15 < [3(x − 2)] / 5 ≤ 0**
(ii) **|3x − 2| ≤ 5**

**Hal:**
- **(i)** Teeno hisson ko 5/3 (positive!) se guna karo:
  −25 < x − 2 ≤ 0
  2 jodo: **−23 < x ≤ 2**, yaani **(−23, 2]**.
- **(ii)** |3x − 2| ≤ 5 ⟺ −5 ≤ 3x − 2 ≤ 5.
  2 jodo: −3 ≤ 3x ≤ 7.
  3 se bhaag do: **−1 ≤ x ≤ 7/3**, yaani **[−1, 7/3]**.

**Jaanch:** (i) x = 2 par 0 ≤ 0 ✅; (ii) x = −1 par |−5| = 5 ✅, x = 7/3 par |5| = 5 ✅.

---

### Example 5: 5-Inequality 2D System aur Exact Vertices

Graphically hal karo aur feasible region ke sabhi corner points nikalo:
**(1) 2x + y ≥ 4**,   **(2) x + y ≤ 3**,   **(3) 2x − 3y ≤ 6**,   **(4) x ≥ 0**,   **(5) y ≥ 0**.

**Hal:**
- **Line 1 (2x + y = 4):** (0, 4), (2, 0), Solid; (0, 0) False → **door (upar-right)**.
- **Line 2 (x + y = 3):** (0, 3), (3, 0), Solid; (0, 0) True → **origin ki taraf (neeche-left)**.
- **Line 3 (2x − 3y = 6):** (0, −2), (3, 0), Solid; (0, 0) True → **origin ki taraf (upar-left)**.
- **Intersections check karo (Q I mein):**
  - Line 1 & Line 2: (2x + y) − (x + y) = 4 − 3 ⟹ **x = 1, y = 2** → **(1, 2)** (Line 3 check: 2 − 6 = −4 ≤ 6 — andar!).
  - Line 1 & y = 0: **(2, 0)** (Line 2: 2 ≤ 3, Line 3: 4 ≤ 6 — andar!).
  - Line 2 & y = 0 (aur Line 3 bhi yahin se guzarti hai!): **(3, 0)** (Line 1: 6 ≥ 4 — andar!).
  - x = 0 par Line 1 kehti hai y ≥ 4 aur Line 2 kehti hai y ≤ 3 (koi common point nahi!).
- Isliye bounded feasible **triangle** ke 3 corner points hain: **(1, 2), (2, 0), (3, 0)**!

**Jaanch:** Interior point (2, 0.5) check karo: 2(2)+0.5 = 4.5 ≥ 4, 2+0.5 = 2.5 ≤ 3, 4−1.5 = 2.5 ≤ 6, x,y ≥ 0 ✅!

---

## Aam galtiyan (Chapter Synthesis)

1. **Dilution problem mein RHS par total volume (600 + x) ke bajay sirf 600 le lena:**
   - *Galat kyun:* Jab x litre naya liquid milaoge to total volume bhi badh kar **600 + x** ho jaata hai!
2. **|x| > 3 ko −3 < x < 3 likh dena:**
   - *Galat kyun:* −3 < x < 3 to **|x| < 3** ka hal hai! **|x| > 3** ka matlab origin se 3 se zyada doori: **x < −3 YA x > 3**, yaani **(−∞, −3) ∪ (3, ∞)**.
3. **Word problem mein integer shart bhool jaana:** Agar sawaal "consecutive odd integers" ya "number of notebooks" poochhe, to final answer interval nahi, **discrete integers** ki list hoti hai!

---

## Quick Recap

- **1D inequalities:** negative se ×/÷ par sign palto; double mein teeno hisse ek saath; system mein intersection; modulus |u| ≤ r ⟺ −r ≤ u ≤ r aur |u| > r ⟺ u < −r ya u > r.
- **2D half-planes:** dashed (<, >) vs solid (≤, ≥); Origin test (0, 0) (ya (1, 0) jab line origin se guzre).
- **2D systems:** sabhi half-planes ka **common intersection (Feasible Region)** + corner points.

---

## Practice Questions

1. Solve for real x: **−12 < 4 − (3x)/(−5) ≤ 2**.

2. Solve for real x: **7 ≤ (3x + 11) / 2 ≤ 11**.

3. Solve the modulus inequalities for real x:
   (a) |2x − 5| ≤ 9    (b) |3x + 4| > 8

4. Solve the system of 1-variable inequalities for real x:
   **3x − 7 > 2(x − 6)**   and   **6 − x > 11 − 2x**.

5. A solution of **8% boric acid** is to be diluted by adding a **2% boric acid** solution to it. The resulting mixture is to be more than **4%** but less than **6%** boric acid. If we have **640 litres** of the 8% solution, how many litres of the 2% solution will have to be added?

6. How many litres of **water (0% acid)** will have to be added to **1125 litres** of a **45% solution of acid** so that the resulting mixture will contain more than **25%** but less than **30%** acid content?

7. In drilling world's deepest hole, it was found that the temperature T in degree Celsius, x km below the surface of Earth, was given by **T = 30 + 25(x − 3)** (for 3 < x < 15). At what depth will the temperature be between **200°C and 300°C**?

8. A solution is to be kept between **40°C and 45°C**. What is the range of temperature in degree Fahrenheit, using **C = (5/9)(F − 32)**?

9. Graphically describe the feasible region and find all corner points of:
   **x + 2y ≤ 12**,   **x + y ≥ 2**,   **x ≥ 0**,   **y ≥ 0**.

10. Graphically describe the feasible region and find all corner points of:
    **2x + y ≤ 24**,   **x + y ≤ 11**,   **2x + 5y ≤ 40**,   **x ≥ 0**,   **y ≥ 0**.

11. Find all pairs of consecutive odd natural numbers, both of which are larger than 10, such that their sum is less than 32.

12. True or False? Give a one-line reason:
    (a) The solution set of |x − 1| > 2 is (−1, 3).
    (b) If a < b and c < 0, then ac > bc.
    (c) The feasible region of x + y ≥ 3, x ≥ 0, y ≥ 0 is bounded.
    (d) Adding x litres of pure water (0% acid) to L litres of acid keeps the total volume equal to L + x.

### Answers

1. Note: −(3x)/(−5) = +3x/5! To **−12 < 4 + 3x/5 ≤ 2**.
   4 ghatao: −16 < 3x/5 ≤ −2.
   5/3 se guna: **−80/3 < x ≤ −10/3**, yaani **(−80/3, −10/3]**. Jaanch: x = −10/3 par 4 − 2 = 2 ✅.

2. 2 se guna: 14 ≤ 3x + 11 ≤ 22 ⟹ 11 ghatao: 3 ≤ 3x ≤ 11 ⟹ **1 ≤ x ≤ 11/3**, yaani **[1, 11/3]**.

3. (a) −9 ≤ 2x − 5 ≤ 9 ⟹ −4 ≤ 2x ≤ 14 ⟹ **[−2, 7]**.
   (b) 3x + 4 < −8 ya 3x + 4 > 8 ⟹ x < −4 ya x > 4/3 ⟹ **(−∞, −4) ∪ (4/3, ∞)**.

4. (1) 3x − 7 > 2x − 12 ⟹ x > −5; (2) −x + 2x > 11 − 6 ⟹ x > 5.
   Intersection of (−5, ∞) aur (5, ∞) = **(5, ∞)**. Jaanch: x = 6 par 11 > 0 aur 0 > −1 ✅.

5. Maan lo x litres of 2% solution milaya. Total volume = 640 + x.
   4% of (640 + x) < 8%(640) + 2%(x) < 6% of (640 + x).
   100 se guna: 4(640 + x) < 5120 + 2x < 6(640 + x).
   - Left: 2560 + 4x < 5120 + 2x ⟹ 2x < 2560 ⟹ **x < 1280**.
   - Right: 5120 + 2x < 3840 + 6x ⟹ 1280 < 4x ⟹ **x > 320**.
   Answer: **320 < x < 1280 litres**. Jaanch: x = 640 par (51.2 + 12.8)/1280 = 64/1280 = 5% ✅!

6. Pure acid = 45% of 1125 = 506.25 L (water mein 0% acid!). Total volume = 1125 + x.
   25(1125 + x) < 45(1125) < 30(1125 + x).
   - Left: 25x < 20(1125) = 22500 ⟹ **x < 900**.
   - Right: 15(1125) < 30x ⟹ 16875 < 30x ⟹ **x > 562.5**.
   Answer: **562.5 < x < 900 litres**. Jaanch: x = 675 par 506.25/1800 = 28.125% ∈ (25%, 30%) ✅!

7. 200 < 30 + 25(x − 3) < 300 ⟹ 170 < 25(x − 3) < 270 ⟹ 6.8 < x − 3 < 10.8 ⟹ **9.8 < x < 13.8 km**.
   Jaanch: x = 9.8 par 30 + 25(6.8) = 200°C ✅; x = 13.8 par 30 + 25(10.8) = 300°C ✅.

8. 40 < (5/9)(F − 32) < 45 ⟹ 9/5 se guna: 72 < F − 32 < 81 ⟹ **104°F < F < 113°F**.
   Jaanch: (5/9)(104 − 32) = 40°C ✅; (5/9)(113 − 32) = 45°C ✅.

9. Bounded quadrilateral between x + y = 2 aur x + 2y = 12 in Q I:
   4 Corner points: **(2, 0), (12, 0), (0, 6), (0, 2)**. Jaanch: (3, 2) par 7 ≤ 12 aur 5 ≥ 2 ✅.

10. 3 lines in Q I (sabhi origin ki taraf):
    - Line 1 (2x + y = 24): (12, 0), (0, 24)
    - Line 2 (x + y = 11): (11, 0), (0, 11)
    - Line 3 (2x + 5y = 40): (20, 0), (0, 8).
    Line 1 aur Line 2 ka intersection: x = 13, y = −2 (Q I ke bahar — Line 1 poori tarah redundant hai!).
    Line 2 aur Line 3 ka intersection: 2(11 − y) + 5y = 40 ⟹ 3y = 18 ⟹ y = 6, x = 5 → **(5, 6)** (Line 1 check: 16 ≤ 24!).
    4 Corner points: **(0, 0), (11, 0), (5, 6), (0, 8)**. Jaanch: (5, 6) par 11 ≤ 11 aur 40 ≤ 40 ✅!

11. x > 10 aur 2x + 2 < 32 ⟹ x < 15. Odd integers between 10 and 15: 11, 13.
    Pairs: **(11, 13)** aur **(13, 15)**. Jaanch: 13 + 15 = 28 < 32 ✅.

12. (a) ❌ False: |x − 1| > 2 ka hal (−∞, −1) ∪ (3, ∞) hota hai.
    (b) ✅ True: negative number se guna karne par sign palat jaata hai.
    (c) ❌ False: x + y ≥ 3 Q I mein upar-right ∞ tak khula (unbounded) hai.
    (d) ✅ True: total volume hamesha L + x hota hai.

---

Shabaash! Tumne **Linear Inequalities** — 1D number line se lekar 2D feasible regions aur real-world dilution/range problems tak — poori pakad ke saath khatam kar liya hai!

---

## Chapter Ka Saar: Linear Inequalities

| Topic | Mukhya vishay | Khaas formula / yaad rakhne ki baat |
|---|---|---|
| **Topic 1** | 1-Variable, Double, System & Modulus Inequalities | Negative se ×/÷ par sign palto; system = intersection; abs(u) < r ⟺ −r < u < r, abs(u) > r ⟺ u < −r ya u > r. |
| **Topic 2** | 1D & 2D Graphical Solutions (Half-Planes) | Dashed line (<, >) vs Solid line (≤, ≥); Origin Test (0, 0) (ya (1, 0) jab line origin se guzre). |
| **Topic 3** | 2D Systems & Feasible Regions | Sabhi half-planes ka common overlap (intersection); corner points; bounded vs unbounded vs empty (∅). |
| **Topic 4** | Mixed Applications & Synthesis | Acid dilution mein total volume (L + x) rakho; IQ aur °F–°C range; real-life mein x ≥ 0, y ≥ 0 ya integer shart check karo. |

**Aage kya?** Agle chapter **Permutations and Combinations** mein hum ginti (counting) ki asli taakat dekhenge — bina ek-ek karke likhe, laakhon-karodon arrangements aur selections ko chutkiyon mein kaise gina jaata hai!
