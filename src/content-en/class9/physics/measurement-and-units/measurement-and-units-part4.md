# Chapter: Measurement and Units (Part 4)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [measurement-and-units-part3.md](measurement-and-units-part3.md)** (which covered measurement instruments, least count, zero error, and parallax). The chapter begins in [measurement-and-units.md](measurement-and-units.md).
> **Topics covered in this file:**
> 4. Experimental Errors, Accuracy vs. Precision, and Significant Figures

---

# Topic 4: Experimental Errors, Accuracy vs. Precision, and Significant Figures

In the previous topic, we examined various laboratory instruments and learned that every tool has a characteristic **least count**—the smallest interval it can resolve. We also learned how to inspect instruments for zero errors and avoid parallax.

Now, a deeper question arises: can any instrument, no matter how sophisticated or expensive, deliver an **absolutely perfect** measurement? The honest scientific answer is no. Every measurement in the physical world carries some degree of experimental uncertainty. The role of physics is not to conceal this uncertainty, but to **understand its causes, minimize it systematically, and report data with scientific honesty**. That is the focus of this topic.

---

## The Two Targets at the Archery Range

At an athletic training ground, Coach Harrison stood alongside Maya, a student learning archery. Maya had just fired five arrows at each of two test targets set side by side downrange.

**Target A:** All five arrows were tightly clustered together inside a tiny circle. However, that tight cluster was located far to the upper-left, well away from the red bullseye at the center.

**Target B:** The arrows were scattered broadly—some high, some low, some to the left, and some to the right. Yet, when viewed as a whole, they were evenly distributed **around the central bullseye**.

Maya pointed enthusiastically at the first target. "Coach Harrison, Target A is clearly the winning group, right? Look how close the arrows landed to each other!"

Coach Harrison smiled. "It is impressive, Maya, but in science 'good' is not a single word. In experimental physics, we separate measurement quality into two distinct concepts: **accuracy** and **precision**. Target A and Target B suffer from two completely different types of experimental error. Let us understand what errors are, and then we will analyze your targets mathematically."

Maya was intrigued: "How does archery relate to physics lab work?" 
Coach Harrison replied: "Every measurement is an attempt to hit a target. The true physical value is the bullseye, and each reading you take is an arrow."

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **True value** | The actual, ideal magnitude of a physical quantity | A metal rod's true length $= 20.0\text{ cm}$ |
| **Error** | The difference between an observed reading and the true value | Measured $20.3\text{ cm} \implies \text{Error} = +0.3\text{ cm}$ |
| **Absolute error** | The numerical magnitude (size) of an error, ignoring algebraic sign | $0.3\text{ cm}$ |
| **Mean (average)** | The arithmetic sum of all readings divided by the total number of readings | $14.2\text{ cm}$ |
| **Mean absolute error** | The arithmetic average of all individual absolute errors | $0.04\text{ cm}$ |
| **Percentage error** | $\left(\frac{\text{Absolute Error}}{\text{True or Mean Value}}\right) \times 100\%$ | $\frac{0.3}{20.0} \times 100\% = 1.5\%$ |
| **Systematic error** | An error that shifts readings consistently in one direction by a predictable amount | A weighing balance with a persistent zero error |
| **Random error** | Unpredictable fluctuations that cause readings to scatter unpredictably above and below the mean | Human reaction time delay on a stopwatch |
| **Accuracy** | How close a measured value (or average) is to the true, accepted value | Arrows centering on the bullseye |
| **Precision** | How closely repeated measurements agree with one another | Arrows clustered tightly together |
| **Significant figures** | The meaningful digits in a measured quantity that convey its precision | 3 significant figures in 4.50 |

---

## Part A: What is an Experimental Error?

Suppose the true, standard length of a metal rod is $20.0\text{ cm}$. You measure it using a laboratory ruler and record $20.3\text{ cm}$.

$$\mathbf{\text{Error} = \text{Measured Value} - \text{True Value}}$$

$$\text{Error} = 20.3\text{ cm} - 20.0\text{ cm} = \mathbf{+0.3\text{ cm}}$$

If a different student measured $19.8\text{ cm}$, the error would be:
$$\text{Error} = 19.8\text{ cm} - 20.0\text{ cm} = \mathbf{-0.2\text{ cm}}$$

A positive error indicates an overestimate; a negative error indicates an underestimate.

> [!NOTE]
> In real experimental research, the "true value" is rarely known beforehand with absolute perfection. Instead, we either calibrate against an internationally certified reference standard (such as an official standard kilogram mass) or take the **arithmetic mean of many careful measurements** as the best available estimate of the true value.

**The Role of Least Count:** If your ruler's least count is $1\text{ mm} = 0.1\text{ cm}$, you cannot resolve differences smaller than $0.1\text{ cm}$. Hence, any reading taken with that ruler carries an intrinsic uncertainty of at least $\pm 0.1\text{ cm}$. Instruments with smaller least counts yield smaller instrumental uncertainties.

---

## Part B: Types of Errors and How to Minimize Them

Coach Harrison explained to Maya: "Your arrows strayed off-target for two very different reasons. First, the optical sight on your bow might be misaligned to the left. Second, your hand might tremble slightly, or unpredictable gusts of wind might catch each arrow mid-flight. The misaligned sight always pulls your shot in one direction; the wind blows unpredictably in all directions."

### 1. Systematic Errors

Systematic errors consistently skew measurements **in the same direction** (always too high or always too low). Common sources include:
- **Zero Error:** An instrument indicates a non-zero reading when no load is present (studied in Topic 3). For example, if an electronic bathroom scale displays $0.5\text{ kg}$ when empty, a person reading $42.5\text{ kg}$ actually has a mass of $42.5 - 0.5 = \mathbf{42.0\text{ kg}}$.
- **Fast or Slow Clocks:** A laboratory timer that gains 2 seconds every minute will systematically overestimate all elapsed time intervals.
- **Defective Calibration:** A ruler manufactured with shrunken graduation marks will systematically read lengths longer than they truly are.

**How to Eliminate Systematic Errors:** Identify the physical cause of the discrepancy and apply an algebraic **correction factor**: subtract the known zero error, recalibrate the device against a standard, or adjust the instrument. 

> [!IMPORTANT]
> **Taking repeated readings and averaging them does NOT eliminate systematic errors!** Because every single measurement suffers from the exact same one-sided bias, the average will be equally biased.

### 2. Random Errors

Random errors cause measurements to fluctuate **unpredictably above and below the true value**. Common sources include:
- **Parallax Variations:** Slight differences in viewing angle each time a scale is inspected.
- **Human Reaction Time:** Small variations ($0.1\text{ to }0.3\text{ s}$) when manually starting and stopping a stopwatch.
- **Environmental Fluctuations:** Subtle drafts of air, room temperature shifts, or electrical noise affecting sensitive sensors.

**How to Minimize Random Errors:** Take a large number of independent measurements and compute their **arithmetic mean**. Because random errors are equally likely to be positive or negative, they tend to cancel each other out in the average. Furthermore, using an instrument with a finer least count reduces reading uncertainty.

### Summary of Error Mitigation

| Error Type | Common Causes | Corrective Action |
|---|---|---|
| **Systematic** | Zero offset, miscalibration, faulty sight | Calibrate instrument, apply mathematical correction |
| **Random** | Reaction time, parallax, air currents | Take multiple readings and calculate the mean |
| **Instrumental Limit** | Coarse least count | Switch to an instrument with higher resolution |

---

## Part C: Multiple Readings, Mean, and Mean Absolute Error

Maya measured the length of a test rod five times using a standard metric ruler. Her recorded readings were:
$$14.2\text{ cm}, \quad 14.3\text{ cm}, \quad 14.1\text{ cm}, \quad 14.2\text{ cm}, \quad 14.2\text{ cm}$$

### Example 1: Finding the Mean and Uncertainty for the Rod

**Step 1: Calculate the Mean (Average Value)**
$$\text{Mean } \bar{x} = \frac{14.2 + 14.3 + 14.1 + 14.2 + 14.2}{5}\text{ cm} = \frac{71.0}{5}\text{ cm} = \mathbf{14.2\text{ cm}}$$

**Step 2: Determine the Absolute Error for Each Reading**
$$\text{Absolute Error } |\Delta x_i| = |\text{Reading}_i - \bar{x}|$$

| Reading | $\text{Reading} - \bar{x}$ | Absolute Error $|\Delta x|$ |
|---|---|---|
| $14.2\text{ cm}$ | $14.2 - 14.2 = 0.0\text{ cm}$ | $0.0\text{ cm}$ |
| $14.3\text{ cm}$ | $14.3 - 14.2 = +0.1\text{ cm}$ | $0.1\text{ cm}$ |
| $14.1\text{ cm}$ | $14.1 - 14.2 = -0.1\text{ cm}$ | $0.1\text{ cm}$ |
| $14.2\text{ cm}$ | $14.2 - 14.2 = 0.0\text{ cm}$ | $0.0\text{ cm}$ |
| $14.2\text{ cm}$ | $14.2 - 14.2 = 0.0\text{ cm}$ | $0.0\text{ cm}$ |

*(Note: Absolute error strips away the plus or minus sign, representing purely the magnitude of deviation.)*

**Step 3: Calculate the Mean Absolute Error ($\overline{\Delta x}$)**
$$\overline{\Delta x} = \frac{0.0 + 0.1 + 0.1 + 0.0 + 0.0}{5}\text{ cm} = \frac{0.2}{5}\text{ cm} = \mathbf{0.04\text{ cm}}$$

**Step 4: Report the Final Scientific Result:**
$$\mathbf{\text{Length} = \bar{x} \pm \overline{\Delta x} = 14.20 \pm 0.04\text{ cm}}$$

This states clearly: the rod's length is centered at $14.20\text{ cm}$, with an estimated experimental uncertainty of $\pm 0.04\text{ cm}$.

**Check:** Notice that the positive deviations ($+0.1\text{ cm}$) and negative deviations ($-0.1\text{ cm}$) balance out to zero around the mean: $+0.1 - 0.1 = 0$ ✅.

### Example 2: Timing a Toy Cart on an Incline

Maya timed a toy cart rolling down an inclined track across five trials: $2.5\text{ s}, 2.7\text{ s}, 2.6\text{ s}, 2.4\text{ s}, 2.8\text{ s}$.

- $\text{Mean } \bar{t} = \frac{2.5 + 2.7 + 2.6 + 2.4 + 2.8}{5}\text{ s} = \frac{13.0}{5}\text{ s} = \mathbf{2.6\text{ s}}$
- Absolute errors: $0.1\text{ s}, 0.1\text{ s}, 0.0\text{ s}, 0.2\text{ s}, 0.2\text{ s}$
- $\text{Mean Absolute Error} = \frac{0.1 + 0.1 + 0.0 + 0.2 + 0.2}{5}\text{ s} = \frac{0.6}{5}\text{ s} = \mathbf{0.12\text{ s}}$

$$\mathbf{\text{Time} = 2.60 \pm 0.12\text{ s}}$$

**Check:** Sum of positive deviations ($+0.1 + 0.2 = +0.3\text{ s}$) equals sum of negative deviations ($-0.1 - 0.2 = -0.3\text{ s}$). Balance $= 0$ ✅.

---

## Part D: Percentage Error

Reporting an absolute error of "$0.3\text{ cm}$" does not tell the whole story. An error of $0.3\text{ cm}$ on a $1\text{ cm}$ microchip is catastrophic (a 30% error), but that same $0.3\text{ cm}$ error on a $100\text{ m}$ athletic track is negligible! To assess the true quality of a measurement, we calculate the **percentage error**:

$$\mathbf{\text{Percentage Error} = \left(\frac{\text{Absolute Error}}{\text{True Value (or Mean)}}\right) \times 100\%}$$

### Example 3: Known True Mass

A calibrated brass laboratory weight has a certified true mass of $200\text{ g}$. A student scale reads $197\text{ g}$.
- $\text{Error} = 197\text{ g} - 200\text{ g} = -3\text{ g} \implies \text{Absolute Error} = \mathbf{3\text{ g}}$
- $\text{Percentage Error} = \frac{3\text{ g}}{200\text{ g}} \times 100\% = \mathbf{1.5\%}$

**Check:** $1.5\% \text{ of } 200\text{ g} = 200 \times 0.015 = 3\text{ g}$ ✅

### Example 4: Length of a Worktable

A table has a true manufactured length of $120.0\text{ cm}$. Maya measures it as $121.5\text{ cm}$.
- $\text{Absolute Error} = |121.5\text{ cm} - 120.0\text{ cm}| = \mathbf{1.5\text{ cm}}$
- $\text{Percentage Error} = \frac{1.5\text{ cm}}{120.0\text{ cm}} \times 100\% = \mathbf{1.25\%}$

**Check:** $120.0\text{ cm} \times 0.0125 = 1.5\text{ cm}$ ✅

### Example 5: Percentage Error from Mean (Maya's Rod)

In Example 1, Maya obtained a mean of $14.2\text{ cm}$ and a mean absolute error of $0.04\text{ cm}$.
$$\text{Percentage Error} = \frac{0.04\text{ cm}}{14.2\text{ cm}} \times 100\% = 0.2817\dots\% \approx \mathbf{0.28\%}$$

**Check:** $14.2 \times 0.0028 \approx 0.04\text{ cm}$ ✅

### Example 6: Comparing Small vs. Large Objects

Two items are measured, each having an identical absolute error of $0.5\text{ cm}$:
- Pencil case (length $10\text{ cm}$): $\text{Percentage Error} = \frac{0.5}{10} \times 100\% = \mathbf{5\%}$
- Classroom whiteboard (length $250\text{ cm}$): $\text{Percentage Error} = \frac{0.5}{250} \times 100\% = \mathbf{0.2\%}$

Even though both measurements share the same absolute error ($0.5\text{ cm}$), the whiteboard measurement is 25 times more accurate in relative terms!

---

## Part E: Accuracy vs. Precision

Let us revisit the archery targets. In everyday casual speech, "accurate" and "precise" are often used interchangeably. In physics, however, they represent two strictly independent concepts:

> **Accuracy:** How close a measured value (or the average of repeated values) is to the **true, accepted target value**.
> **Precision:** How closely repeated measurements agree with **each other**, regardless of whether they are near the true value.

```
       Accurate & Precise               Precise, NOT Accurate
             (Bullseye)                       (Tight cluster off-center)
              . (🎯) .                             (🎯)      ...
             .  ...  .                                      .....
             
     Accurate, NOT Precise             NEITHER Accurate NOR Precise
         (Centered scatter)                   (Random scatter off-center)
            .   (🎯)   .                           (🎯)      .  .
              .   .   .                                     .    .  .
```

### Four Possible Measurement Scenarios

| Case | Distribution of Readings / Arrows | Scientific Description |
|---|---|---|
| **1** | Clustered tightly together, centered right on the bullseye | **Both accurate and precise** |
| **2** | Clustered tightly together, but far from the bullseye | **Precise, but not accurate** |
| **3** | Scattered widely, but symmetrically centered around the bullseye | **Accurate on average, but not precise** |
| **4** | Scattered widely and shifted away from the bullseye | **Neither accurate nor precise** |

- **Case 2** typically indicates a strong **systematic error** (e.g., a misaligned bow sight or a zero error on a scale).
- **Case 3** indicates large **random errors** (e.g., wind gusts or shaky hands) with negligible systematic bias.

---

## Part F: Solving the Archery Target Mystery

Coach Harrison had Maya measure the horizontal displacement of each arrow from the central bullseye (in cm, defining left as positive and right as negative). The true bullseye position is $0\text{ cm}$.

**Target A Displacements:** $+14\text{ cm}, +15\text{ cm}, +13\text{ cm}, +15\text{ cm}, +13\text{ cm}$
- $\text{Mean} = \frac{14 + 15 + 13 + 15 + 13}{5} = \frac{70}{5} = \mathbf{+14\text{ cm}}$
- Deviations from mean: $0, 1, 1, 1, 1\text{ cm} \implies \text{Mean Absolute Error} = \frac{4}{5} = \mathbf{0.8\text{ cm}}$
- **Analysis:** The mean displacement ($14\text{ cm}$) is very far from the true value ($0\text{ cm}$)—hence **not accurate**. However, the scatter is tiny ($0.8\text{ cm}$)—hence **highly precise**.

**Target B Displacements:** $-6\text{ cm}, +5\text{ cm}, -4\text{ cm}, +7\text{ cm}, -2\text{ cm}$
- $\text{Mean} = \frac{-6 + 5 - 4 + 7 - 2}{5} = \frac{0}{5} = \mathbf{0\text{ cm}}$
- Deviations from mean ($0\text{ cm}$): $6, 5, 4, 7, 2\text{ cm} \implies \text{Mean Absolute Error} = \frac{24}{5} = \mathbf{4.8\text{ cm}}$
- **Analysis:** The mean position rests right on the bullseye ($0\text{ cm}$)—hence **accurate on average**. However, the individual shots scatter broadly over $4.8\text{ cm}$—hence **not precise**.

**Coach Harrison's Diagnosis:**
- **Target A** was caused by a **systematic error**: Maya's bow sight was misaligned to the left. Her form and release were rock-solid. A single mechanical adjustment of the sight will shift that tight group directly into the bullseye!
- **Target B** was caused by **random errors**: the sight was aligned, but her release was inconsistent and her stance wavered. This requires practice and steadying technique.

Maya smiled. "So Target A is actually much easier to fix: just turn a calibration screw!"
"Exactly," Coach Harrison nodded. "A systematic error can be corrected once discovered. Random errors must be minimized through averaging and refined technique."

---

## Part G: Significant Figures

In a lab report, Maya recorded the length of an aluminum rod as $12\text{ cm}$. On the next trial, using a more sensitive instrument, she recorded $12.0\text{ cm}$. Coach Harrison asked: "Do $12\text{ cm}$ and $12.0\text{ cm}$ communicate the exact same claim?"

No, they do not! How a measurement is written conveys **how far down we can trust the instrument's reading**:
- **$12\text{ cm}$** claims the length is measured only to the **nearest $1\text{ cm}$**. The tenths digit was not resolved.
- **$12.0\text{ cm}$** claims the length is verified to the **nearest $0.1\text{ cm}$**. The tenths digit was measured and confirmed to be 0.

Writing $12.0\text{ cm}$ is a claim of higher precision. We cannot simply add or discard trailing zeros at will!

**Significant figures** are all the meaningful digits in a measured value: all the completely certain digits plus one final estimated or uncertain digit.

### Rules for Counting Significant Figures

| Rule | Example | Significant Figures | Explanation |
|---|---|---|---|
| 1. All non-zero digits are significant | 4.37 | 3 | All digits carry meaning |
| 2. Zeros between non-zero digits are significant | 1005 | 4 | "Captive" zeros are part of the measurement |
| 3. Leading zeros (to the left of the first non-zero digit) are NEVER significant | 0.0045 | 2 | They merely indicate decimal place value |
| 4. Trailing zeros to the right of a decimal point ARE significant | 4.50 | 3 | They indicate verified measurement precision |

### Practice with Counting Significant Figures

| Measurement | Significant Figures | Justification |
|---|---|---|
| $4.50$ | 3 | 4, 5, and the trailing zero after decimal |
| $0.0045$ | 2 | Three leading zeros are place-holders; only 4 and 5 count |
| $1005$ | 4 | The two zeros are trapped between 1 and 5 |
| $0.0850$ | 3 | 8, 5, and the trailing zero count (leading zeros do not) |
| $307.2$ | 4 | All non-zero digits and captive zero |
| $12.0$ | 3 | Trailing zero indicates precision to the tenths place |
| $12$ | 2 | Only digits 1 and 2 |

### Rounding to a Specified Number of Significant Figures

When a calculation produces a string of digits, we must round to match the precision of our original measurements. Look at the digit immediately following the last desired significant figure:
- If that digit is **5 or greater**, increase the preceding digit by 1.
- If that digit is **less than 5**, leave the preceding digit unchanged.

| Original Number | Target Sig. Figs. | Rounded Value | Procedure |
|---|---|---|---|
| $3.14159$ | 3 | **3.14** | First 3 are 3, 1, 4. Next digit is 1 ($< 5$), keep 4 |
| $0.004567$ | 2 | **0.0046** | First 2 are 4, 5. Next digit is 6 ($\ge 5$), round 5 up to 6 |
| $12.96$ | 3 | **13.0** | First 3 are 1, 2, 9. Next is 6, $12.9 \rightarrow 13.0$. Keep trailing zero! |
| $7.06$ | 2 | **7.1** | First 2 are 7, 0. Next is 6, round up to 7.1 |
| $2847$ | 2 | **2800** | First 2 are 2, 8. Next is 4 ($< 5$), becomes 2800 (best written $2.8 \times 10^3$) |

### Rule for Calculations: The Result Cannot Exceed the Weakest Measurement

A calculated physical result **can never be more precise than the least precise measurement used to compute it**.

**Example 7:** A rectangle's length is measured as $12.5\text{ cm}$ (3 significant figures) and its width as $3.3\text{ cm}$ (2 significant figures).
$$\text{Calculated Area} = 12.5\text{ cm} \times 3.3\text{ cm} = 41.25\text{ cm}^2$$

Since the width was measured to only 2 significant figures, reporting $41.25\text{ cm}^2$ falsely implies 4-figure precision! We must round to 2 significant figures:
$$\mathbf{\text{Area} \approx 41\text{ cm}^2}$$

---

## Common Pitfalls to Avoid

1. **Mistake 1: Confusing accuracy with precision**
   - Incorrect: "All my readings are identical, so my measurement must be completely accurate."
   - Correct: High consistency proves only **precision**. If your balance has an uncorrected zero error, you can be consistently, precisely wrong!

2. **Mistake 2: Treating human blunders as scientific "errors"**
   - In physics, "error" refers to unavoidable experimental uncertainty (least count limits, reaction times). If a student misreads a dial, writes 12.4 instead of 14.2, or spills solution, that is a **blunder**. Blunders must be discarded, not averaged.

3. **Mistake 3: Counting leading zeros as significant figures**
   - Incorrect: Claiming $0.0045$ has 5 significant figures.
   - Correct: Leading zeros are merely place-holders; $0.0045$ has only **2** significant figures (4 and 5).

4. **Mistake 4: Writing down endless calculator decimal digits**
   - Dividing $12.5 \div 3.0$ gives $4.166666\dots$ on a calculator. Copying all those digits is scientifically dishonest. Round to the appropriate 2 significant figures: **4.2**.

5. **Mistake 5: Dividing by the wrong value in percentage error**
   - Always divide absolute error by the **true value** (or the **mean value** when true is unknown). Never divide by the measured value or the error itself!

---

## Quick Recap

- No real-world physical measurement is perfectly exact. **Error = Measured Value − True Value.**
- **Systematic errors** shift readings in one consistent direction (zero errors, miscalibration). Correct them by recalibration and mathematical compensation; averaging repeated readings will not remove them.
- **Random errors** fluctuate unpredictably in magnitude and sign (parallax, reaction time). Minimize them by taking multiple trials and computing their arithmetic mean.
- **Reporting measurements:** $\mathbf{\bar{x} \pm \overline{\Delta x}}$ (Mean $\pm$ Mean Absolute Error).
- **Percentage Error:** $\left(\frac{\text{Absolute Error}}{\text{True / Mean Value}}\right) \times 100\%$.
- **Accuracy** is closeness to the true value; **Precision** is mutual agreement among repeated readings.
- **Significant Figures:** Count non-zero digits, captive zeros, and trailing zeros after a decimal point; never count leading zeros.
- When multiplying or dividing, the final result must not have more significant figures than the measurement with the fewest significant figures.

---

## Practice Questions

1. A student measures the time taken for 10 oscillations of a pendulum across five trials and records: $9.8\text{ s}, 10.1\text{ s}, 10.0\text{ s}, 9.9\text{ s}$, and $10.2\text{ s}$. 
   Calculate the mean time, the absolute error for each trial, and the mean absolute error. Express the final result in the form $\bar{t} \pm \overline{\Delta t}$.

2. The length of a lab bench is measured five times: $100.2\text{ cm}, 100.0\text{ cm}, 99.8\text{ cm}, 100.4\text{ cm}$, and $99.6\text{ cm}$. Find the mean length, the mean absolute error, and the percentage error based on the mean value.

3. The certified true mass of a calibration standard is $50.0\text{ g}$. An electronic pan balance reads $49.0\text{ g}$. Calculate the error, the absolute error, and the percentage error.

4. A kitchen spring scale displays $0.4\text{ kg}$ when empty. A baker places a bag of flour on it and reads $6.9\text{ kg}$. What is the true mass of the flour? Does this scenario represent a systematic or random error?

5. An absolute error of $1\text{ cm}$ occurs while measuring a $50\text{ cm}$ shelf, and the same absolute error of $1\text{ cm}$ occurs while measuring a $500\text{ cm}$ hallway. Calculate the percentage error for each. Which measurement exhibits higher scientific quality, and why?

6. Archery results: Archer P's arrows cluster within a tight $2\text{ cm}$ radius, but are centered $20\text{ cm}$ to the right of the bullseye. Archer Q's arrows scatter over a wide $30\text{ cm}$ circle, but their average position is centered directly on the bullseye. Which archer is accurate, and which is precise? What type of experimental error dominates in each case, and how can each be corrected?

7. State the number of significant figures in each measurement:
   (a) $6.200\text{ m}$
   (b) $0.00360\text{ kg}$
   (c) $2003\text{ s}$
   (d) $150.0\text{ cm}$
   (e) $0.5\text{ g}$

8. Round each value to the specified number of significant figures:
   (a) $6.2846$ to 3 significant figures
   (b) $0.008951$ to 2 significant figures
   (c) $99.87$ to 3 significant figures
   (d) $4.0951$ to 2 significant figures

9. Explain in your own words why writing a lab measurement as "$8.0\text{ cm}$" represents a different scientific claim than writing "$8\text{ cm}$".

10. A rectangular solar panel has a measured length of $21.4\text{ cm}$ (3 significant figures) and a measured width of $9.8\text{ cm}$ (2 significant figures). A student calculates the area as $21.4 \times 9.8 = 209.72\text{ cm}^2$. Express the final area to the appropriate number of significant figures, with justification.

11. State True or False for each statement:
    (a) Taking additional readings and averaging them eliminates instrumental zero error.
    (b) A set of experimental readings can be highly precise without being accurate.
    (c) Leading zeros count as significant figures.
    (d) Accidentally recording $14.3\text{ cm}$ instead of $13.4\text{ cm}$ is classified as a human blunder rather than an experimental error.

### Answers

1. $\text{Mean } \bar{t} = \frac{9.8 + 10.1 + 10.0 + 9.9 + 10.2}{5} = \frac{50.0}{5} = \mathbf{10.0\text{ s}}$.
   Absolute errors:
   $|9.8 - 10.0| = 0.2\text{ s}$
   $|10.1 - 10.0| = 0.1\text{ s}$
   $|10.0 - 10.0| = 0.0\text{ s}$
   $|9.9 - 10.0| = 0.1\text{ s}$
   $|10.2 - 10.0| = 0.2\text{ s}$
   $\text{Mean Absolute Error} = \frac{0.2 + 0.1 + 0.0 + 0.1 + 0.2}{5} = \frac{0.6}{5} = \mathbf{0.12\text{ s}}$.
   Reported Result: $\mathbf{10.00 \pm 0.12\text{ s}}$.

2. $\text{Mean} = \frac{100.2 + 100.0 + 99.8 + 100.4 + 99.6}{5} = \frac{500.0}{5} = \mathbf{100.0\text{ cm}}$.
   Absolute errors: $0.2, 0.0, 0.2, 0.4, 0.4\text{ cm}$.
   $\text{Mean Absolute Error} = \frac{1.2}{5} = \mathbf{0.24\text{ cm}}$.
   $\text{Percentage Error} = \frac{0.24\text{ cm}}{100.0\text{ cm}} \times 100\% = \mathbf{0.24\%}$.

3. $\text{Error} = 49.0\text{ g} - 50.0\text{ g} = \mathbf{-1.0\text{ g}}$.
   $\text{Absolute Error} = \mathbf{1.0\text{ g}}$.
   $\text{Percentage Error} = \frac{1.0\text{ g}}{50.0\text{ g}} \times 100\% = \mathbf{2\%}$.

4. The scale has a zero error of $+0.4\text{ kg}$.
   $\text{Corrected mass} = 6.9\text{ kg} - 0.4\text{ kg} = \mathbf{6.5\text{ kg}}$.
   This is a **systematic error**, because it consistently shifts all readings upward by $0.4\text{ kg}$.

5. Shelf: $\frac{1}{50} \times 100\% = \mathbf{2\%}$. Hallway: $\frac{1}{500} \times 100\% = \mathbf{0.2\%}$.
   The hallway measurement exhibits higher scientific quality: although both have the same $1\text{ cm}$ absolute uncertainty, the relative fraction of error in the hallway is ten times smaller.

6. - **Archer P is precise, but not accurate:** Shots form a tight cluster, but miss the bullseye by $20\text{ cm}$. This demonstrates a **systematic error** (e.g., misaligned sight), corrected by recalibrating the sight.
   - **Archer Q is accurate on average, but not precise:** Shots are broadly dispersed, but their center of mass is the bullseye. This demonstrates **random error** (e.g., unsteady release), minimized through practice and averaging.

7. (a) $6.200$: **4** (trailing zeros after decimal count).
   (b) $0.00360$: **3** (leading zeros do not count; trailing zero counts).
   (c) $2003$: **4** (captive zeros count).
   (d) $150.0$: **4** (captive zero and trailing zero after decimal count).
   (e) $0.5$: **1** (leading zero does not count).

8. (a) $6.2846 \rightarrow 3$ sig. figs.: Next digit is 4 ($< 5$), so **6.28**.
   (b) $0.008951 \rightarrow 2$ sig. figs.: Next digit is 5 ($\ge 5$), rounds $89 \rightarrow 90$, giving **0.0090** (the final zero is significant).
   (c) $99.87 \rightarrow 3$ sig. figs.: Next digit is 7, rounds $99.8 \rightarrow \mathbf{99.9}$.
   (d) $4.0951 \rightarrow 2$ sig. figs.: Next digit is 9, rounds $4.0 \rightarrow \mathbf{4.1}$.

9. Writing $8.0\text{ cm}$ indicates that the measurement was resolved to the nearest tenth of a centimeter ($0.1\text{ cm}$), possessing 2 significant figures. Writing $8\text{ cm}$ indicates resolution only to the nearest $1\text{ cm}$ (1 significant figure). The trailing zero communicates greater experimental precision.

10. The width ($9.8\text{ cm}$) has only 2 significant figures, which restricts the product to 2 significant figures. 
    Rounding $209.72\text{ cm}^2$ to 2 significant figures gives **$210\text{ cm}^2$** (or $2.1 \times 10^2\text{ cm}^2$).
    *Reason:* A calculated result cannot be more precise than the least precise input measurement.

11. (a) **False** ❌ (Systematic errors shift all trials equally; averaging cannot remove them).
    (b) **True** ✅ (A set of readings can agree tightly with each other while being biased away from the true value).
    (c) **False** ❌ (Leading zeros are place-holders, not significant figures).
    (d) **True** ✅ (Transposing digits is a careless human blunder).

---

Scientific integrity means communicating both what you know and the limits of what you know. Once you learn to record results proudly as **$14.20 \pm 0.04\text{ cm}$**, you are thinking like a genuine physicist!

**What comes next?** In Topic 5, we will combine mass and volume to explore **density**, discover how to find the volume of an irregularly shaped stone by water displacement, and investigate why massive steel ships float while small pebbles sink!
