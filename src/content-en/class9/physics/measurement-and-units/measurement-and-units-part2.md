# Chapter: Measurement and Units (Part 2)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [measurement-and-units.md](measurement-and-units.md)** (which covered Topic 1: what physical quantities are, why measurement = number + unit, why informal body-based units fail, and why a universal standard is necessary).
> **Topics covered in this file:**
> 2. SI Units: Fundamental, Derived, and Metric Prefixes

---

# Topic 2: SI Units: Fundamental, Derived, and Metric Prefixes

In Topic 1, we learned that every measurement fundamentally requires a **numerical value accompanied by an agreed-upon unit**. We also saw that when people use subjective personal units (like cubits or handspans), communication breaks down and errors follow. Everyone needs a **common standard of measurement**. 

The natural question is: what is this universal standard, which physical quantities form its core, and how do we systematically convert between different units? That is precisely what we will explore in this topic.

---

## The Robot That Crossed the Line

Ms. Davis, the mentor of the school robotics club, assigned Leo an introductory programming task. His wheeled robot had to travel along a straight test track and **come to a complete stop exactly on the finish line**. The project brief clearly stated: **"Track length: 127 cm."**

Leo opened the robot's control software and found a field labeled `Target Distance`. He typed in `127` and hit run. The robot surged forward with a hum, accelerated down the course, and... blew straight past the finish tape! It kept racing ahead until it bumped into the padded barrier at the edge of the workbench.

Ms. Davis walked over, inspected the laptop screen, and smiled. "Leo, what unit did the software expect in that input box?"

Leo blinked. "I assumed it was metric, Ma'am! I saw the number 127 on the sheet and just typed it in."

Ms. Davis pointed to the small label beside the input box: *inches*. "The specification sheet was written in centimeters, but the motor controller library is calibrated in inches. You entered the right number, but in the wrong unit! The robot didn't travel 127 cm—it was commanded to travel 127 **inches**. Since one inch equals 2.54 cm, your robot traveled more than two and a half times the intended distance!"

Leo sighed in relief that nothing was damaged. "So the robot followed instructions perfectly; the fault was mine. But if everyone just used one universal system of units, this confusion would never happen."

"That is exactly what the global scientific community realized," Ms. Davis replied. "Centuries ago, scientists agreed on a single unified framework called the SI system. Let's study how it works—and then we will calculate the exact correction your robot needed."

At the end of this topic, we will calculate the exact overshoot distance and find the correct input value for Leo's robot.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **SI system** | The internationally agreed metric framework for physical measurement (*Système International d'Unités*) | meter, kilogram, second |
| **Base quantity** | A fundamental physical quantity chosen by international convention that cannot be defined in terms of other physical quantities | length, mass, time |
| **Fundamental (base) unit** | The standard unit defined for a base quantity | meter (m), kilogram (kg), second (s) |
| **Derived unit** | A unit formed by algebraic combinations (multiplication or division) of base units | m², m³, m/s, kg/m³ |
| **Metric prefix** | A prefix attached to a unit to indicate a power of ten multiplier | kilo-, centi-, milli- |
| **Power of ten** | Ten multiplied by itself repeatedly ($10^3 = 10 \times 10 \times 10$) | $10^3 = 1000$ |
| **Conversion factor** | A ratio of equivalent values of different units used to convert quantities | $1\text{ m} = 100\text{ cm}$ |
| **Scientific notation** | A standardized method of writing very large or very small numbers in the form $a \times 10^n$, where $1 \le a < 10$ | $6.4 \times 10^6\text{ m}$ |

---

## Part A: The SI System and the 7 Base Quantities

The **SI system** is the universal scientific language of measurement recognized by engineers, researchers, and nations across the globe. Whether a high school student in New York, an automotive engineer in Tokyo, or an astronomer in Santiago speaks of a "meter," they are all referring to the exact same physical length. Adhering strictly to SI units prevents expensive mistakes like Leo's robot overrun.

The SI system is built upon **7 fundamental base quantities**. Each has its own designated base unit and unique symbol:

| Base Quantity | SI Unit Name | Symbol | Used in Class 9? |
|---|---|---|---|
| Length | meter | m | Yes |
| Mass | kilogram | kg | Yes |
| Time | second | s | Yes |
| Temperature | kelvin | K | Yes |
| Electric current | ampere | A | Name only |
| Amount of substance | mole | mol | Name only |
| Luminous intensity | candela | cd | Name only |

In Class 9, our primary focus will be on **length (m), mass (kg), time (s)**, along with **temperature (K)**. The remaining three (ampere, mole, and candela) are introduced here so you recognize their names; their detailed physical laws will appear in subsequent grades.

> **Crucial Rule:** The SI base unit of mass is the **kilogram (kg)**, *not* the gram. A gram is merely one-thousandth of a kilogram ($10^{-3}\text{ kg}$). This is a very common student slip, so remember it well!

### Rules for Writing SI Symbols

- Symbols are written in **lowercase** letters: **m**, **kg**, **s**. A capital letter is used only when the unit is named after a person (e.g., ampere becomes **A**, kelvin becomes **K**, newton becomes **N**). The liter symbol **L** is an accepted exception to prevent visual confusion with the digit 1.
- Write **s** for seconds, never "sec". Write **kg** for kilograms, never "Kg" or "KG".
- Symbols never take an 's' to indicate plural: write **5 kg**, never "5 kgs".
- Do not place a period after a unit symbol unless it appears at the end of a sentence.

---

## Part B: Fundamental vs. Derived Units

**Fundamental (base) units:** Units that stand independently and cannot be expressed in terms of other units. Examples: m, kg, s.

**Derived units:** Units constructed by **multiplying or dividing base units**. Think of base units as elementary building blocks (or raw ingredients); combining them produces derived units.

Let us examine how some familiar derived units are constructed:

| Physical Quantity | Defining Relationship | Derived Unit |
|---|---|---|
| Area | $\text{length} \times \text{length}$ | $\text{m} \times \text{m} = \mathbf{m^2}$ |
| Volume | $\text{length} \times \text{length} \times \text{length}$ | $\text{m} \times \text{m} \times \text{m} = \mathbf{m^3}$ |
| Speed | $\text{distance} \div \text{time}$ | $\text{m} \div \text{s} = \mathbf{m/s}$ |
| Density | $\text{mass} \div \text{volume}$ | $\text{kg} \div \text{m}^3 = \mathbf{kg/m^3}$ |
| Force | $\text{mass} \times \text{acceleration}$ | $\text{kg}\cdot\text{m/s}^2$, named the **newton (N)** |

Notice:
- **Area** has the unit $\text{m}^2$ because it represents the product of two linear dimensions. A square of side 1 m has an area of $1\text{ m} \times 1\text{ m} = 1\text{ m}^2$.
- **Volume** is the product of three linear dimensions, yielding $\text{m}^3$. A cube measuring 1 m on each side has a volume of $1\text{ m}^3$.
- **Speed** divides length by time. If Leo's robot moves 2 m in 1 s, its speed is $2\text{ m/s}$.
- **Density** measures mass packed into a given unit volume ($\text{kg/m}^3$). We will delve deeply into density in Topic 5.
- **Force** has the special derived name **newton (N)**, where $1\text{ N} = 1\text{ kg}\cdot\text{m/s}^2$. This will be explored in depth in Newton's laws of motion.

### Everyday Non-SI Units

Certain non-SI units are deeply ingrained in everyday life. You must recognize them and know how to convert them into standard SI units:

| Non-SI Unit | Common Context | Relationship to SI |
|---|---|---|
| minute (min) | Time | $1\text{ min} = 60\text{ s}$ |
| hour (h) | Time | $1\text{ h} = 3600\text{ s}$ |
| liter (L) | Liquid volume (water, fuel) | $1\text{ L} = 1000\text{ cm}^3 = 10^{-3}\text{ m}^3$ |
| metric ton (tonne) | Cargo, vehicle mass | $1\text{ tonne} = 1000\text{ kg}$ |
| km/h | Vehicle speedometer | $36\text{ km/h} = 10\text{ m/s}$ ($1\text{ km/h} = \frac{5}{18}\text{ m/s}$) |

---

## Part C: Prefixes and Powers of Ten

In physics, we measure quantities on vastly different scales—from the distance between two cities to the thickness of a soap bubble film. Writing "$1000\text{ m}$" or "$0.000001\text{ m}$" repeatedly is cumbersome and prone to copying errors. To solve this, SI uses **metric prefixes** attached to units to represent powers of ten.

### Understanding Powers of Ten

**$10^3$ means:** multiply 10 by itself 3 times.
$$10^3 = 10 \times 10 \times 10 = 1000$$

A quick mental rule: for positive exponents, the exponent equals the number of zeros following the 1:
- $10^2 = 100$ (two zeros)
- $10^3 = 1000$ (three zeros)
- $10^6 = 1{,}000{,}000$ (six zeros, one million)

**$10^{-3}$ means:** a negative exponent represents the reciprocal (division):
$$10^{-3} = \frac{1}{10^3} = \frac{1}{1000} = 0.001$$

Rule for negative exponents: the magnitude of the exponent indicates how many places the decimal point shifts to the left:
- $10^{-1} = 0.1$
- $10^{-2} = 0.01$
- $10^{-3} = 0.001$
- $10^{-6} = 0.000001$ (six digits after the decimal point, ending in 1)

Also remember: **$10^0 = 1$**.

### Common Metric Prefixes

| Prefix | Symbol | Power of Ten | Multiplier Value | Example |
|---|---|---|---|---|
| giga- | G | $10^9$ | 1,000,000,000 | 1 GHz (gigahertz) |
| mega- | M | $10^6$ | 1,000,000 | $1\text{ Mm} = 10^6\text{ m}$ |
| kilo- | k | $10^3$ | 1,000 | $1\text{ km} = 1000\text{ m}$ |
| centi- | c | $10^{-2}$ | 0.01 | $1\text{ cm} = 0.01\text{ m}$ |
| milli- | m | $10^{-3}$ | 0.001 | $1\text{ mm} = 0.001\text{ m}$ |
| micro- | $\mu$ | $10^{-6}$ | 0.000001 | $1\ \mu\text{m} = 10^{-6}\text{ m}$ |
| nano- | n | $10^{-9}$ | 0.000000001 | $1\text{ nm} = 10^{-9}\text{ m}$ |

In Class 9, you will regularly use **kilo-, centi-, milli-, micro-**, and occasionally **mega-**.

**The same prefix applies across all physical quantities:**
- $1\text{ km} = 10^3\text{ m}$, $1\text{ kg} = 10^3\text{ g}$, $1\text{ kL} = 10^3\text{ L}$
- $1\text{ mm} = 10^{-3}\text{ m}$, $1\text{ mg} = 10^{-3}\text{ g}$, $1\text{ ms} = 10^{-3}\text{ s}$
- $1\ \mu\text{m} = 10^{-6}\text{ m}$, $1\ \mu\text{s} = 10^{-6}\text{ s}$

> [!WARNING]
> Keep the distinction clear between lowercase **m** (milli, $10^{-3}$) and uppercase **M** (mega, $10^6$). For example, $1\text{ mm} = 10^{-3}\text{ m}$, whereas $1\text{ Mm} = 10^6\text{ m}$—a massive factor difference of $10^9$!

---

## Part D: Step-by-Step Unit Conversion

The most reliable, error-free technique for converting units is the **unit factor method** (multiplying by fractions equal to 1):

Since $1\text{ m} = 100\text{ cm}$, it follows that:
$$\frac{1\text{ m}}{100\text{ cm}} = 1 \quad \text{and} \quad \frac{100\text{ cm}}{1\text{ m}} = 1$$

Multiplying any quantity by 1 leaves its physical value unchanged while transforming its units. We simply choose the fraction that positions the unit we wish to cancel in the denominator.

> **Step 1:** Write down the given value with its unit and the desired target unit.
> **Step 2:** State the conversion equivalence (e.g., $1\text{ m} = 100\text{ cm}$).
> **Step 3:** Form a conversion fraction with the unwanted unit in the denominator.
> **Step 4:** Multiply, cancel matching units algebraically, and compute the number.
> **Step 5:** Sanity check: Does the magnitude make physical sense? (Converting to a larger unit should yield a smaller numerical value.)

### Example 1: Convert 250 cm to Meters

Equivalence: $1\text{ m} = 100\text{ cm}$. We want to eliminate centimeters:
$$250\text{ cm} \times \left(\frac{1\text{ m}}{100\text{ cm}}\right) = \frac{250}{100}\text{ m} = \mathbf{2.5\text{ m}}$$

**Check:** $2.5\text{ m} \times 100 = 250\text{ cm}$ ✅. Converting from a smaller unit (cm) to a larger unit (m) appropriately reduced the numerical value.

### Example 2: Convert 4.5 km to Meters

Equivalence: $1\text{ km} = 1000\text{ m} = 10^3\text{ m}$.
$$4.5\text{ km} \times \left(\frac{1000\text{ m}}{1\text{ km}}\right) = 4.5 \times 1000\text{ m} = \mathbf{4500\text{ m}}$$

**Check:** $4500\text{ m} \div 1000 = 4.5\text{ km}$ ✅

### Example 3: Convert 350 g to Kilograms

Since the SI base unit of mass is the kilogram, we must convert grams: $1\text{ kg} = 1000\text{ g}$.
$$350\text{ g} \times \left(\frac{1\text{ kg}}{1000\text{ g}}\right) = \frac{350}{1000}\text{ kg} = \mathbf{0.35\text{ kg}}$$

**Check:** $0.35\text{ kg} \times 1000 = 350\text{ g}$ ✅

### Example 4: Convert 500 mg to Kilograms

This involves a two-stage conversion: milligrams $\rightarrow$ grams $\rightarrow$ kilograms.
Equivalences: $1\text{ mg} = 10^{-3}\text{ g}$ and $1\text{ g} = 10^{-3}\text{ kg}$.

$$500\text{ mg} \times \left(\frac{10^{-3}\text{ g}}{1\text{ mg}}\right) \times \left(\frac{10^{-3}\text{ kg}}{1\text{ g}}\right) = 500 \times 10^{-6}\text{ kg} = 0.0005\text{ kg} = \mathbf{5 \times 10^{-4}\text{ kg}}$$

**Check:** $5 \times 10^{-4}\text{ kg} \times 1000 = 0.5\text{ g}$, and $0.5\text{ g} \times 1000 = 500\text{ mg}$ ✅

### Example 5: Convert 2.5 Hours to Seconds

Equivalences: $1\text{ h} = 60\text{ min}$, and $1\text{ min} = 60\text{ s}$, so $1\text{ h} = 60 \times 60 = 3600\text{ s}$.
$$2.5\text{ h} \times \left(\frac{3600\text{ s}}{1\text{ h}}\right) = 2.5 \times 3600\text{ s} = \mathbf{9000\text{ s}}$$

**Check:** $9000\text{ s} \div 3600 = 2.5\text{ h}$ ✅

### Example 6: Speed Conversion Between km/h and m/s

**(a) Convert 72 km/h to m/s:**
We need to convert kilometers to meters and hours to seconds:
$$72\text{ km/h} = 72 \times \frac{1000\text{ m}}{3600\text{ s}} = \frac{72000}{3600}\text{ m/s} = \mathbf{20\text{ m/s}}$$

*Shortcut:* Note that $\frac{1000}{3600} = \frac{5}{18} = \frac{1}{3.6}$. Thus, **to convert from km/h to m/s, simply divide by 3.6**:
$$72 \div 3.6 = 20\text{ m/s} \quad \text{✅}$$

**(b) Convert 15 m/s to km/h:**
To go in reverse, **multiply by 3.6**:
$$15\text{ m/s} \times 3.6 = \mathbf{54\text{ km/h}}$$

**Check:** $54\text{ km/h} \div 3.6 = 15\text{ m/s}$ ✅

### Example 7: Convert $400\text{ cm}^2$ to $\text{m}^2$ (Careful: Area is Squared!)

This is where students stumble most frequently. While $1\text{ m} = 100\text{ cm}$, area involves two dimensions:
$$1\text{ m}^2 = (100\text{ cm})^2 = 100\text{ cm} \times 100\text{ cm} = \mathbf{10{,}000\text{ cm}^2} = 10^4\text{ cm}^2$$

$$400\text{ cm}^2 \times \left(\frac{1\text{ m}^2}{10^4\text{ cm}^2}\right) = \frac{400}{10{,}000}\text{ m}^2 = \mathbf{0.04\text{ m}^2}$$

**Check:** $0.04\text{ m}^2 \times 10^4 = 400\text{ cm}^2$ ✅. If you had divided by 100 by mistake, you would get $4\text{ m}^2$—which is the size of a large bedroom rug, absurdly large for a $20\text{ cm} \times 20\text{ cm}$ tile!

### Example 8: Convert $5000\text{ cm}^3$ to $\text{m}^3$ (Careful: Volume is Cubed!)

Volume involves three linear dimensions:
$$1\text{ m}^3 = (100\text{ cm})^3 = 100 \times 100 \times 100\text{ cm}^3 = \mathbf{1{,}000{,}000\text{ cm}^3} = 10^6\text{ cm}^3$$

$$5000\text{ cm}^3 \times \left(\frac{1\text{ m}^3}{10^6\text{ cm}^3}\right) = \frac{5000}{1{,}000{,}000}\text{ m}^3 = \mathbf{0.005\text{ m}^3} = 5 \times 10^{-3}\text{ m}^3$$

**Check:** $0.005 \times 10^6 = 5000\text{ cm}^3$ ✅

### Example 9: Convert 2 Liters to $\text{m}^3$

Equivalence: $1\text{ L} = 1000\text{ cm}^3$ (a 1-liter carton measures roughly $10\text{ cm} \times 10\text{ cm} \times 10\text{ cm} = 1000\text{ cm}^3$).
$$2\text{ L} = 2 \times 1000\text{ cm}^3 = 2000\text{ cm}^3$$
Now convert to cubic meters:
$$2000\text{ cm}^3 \times \left(\frac{1\text{ m}^3}{10^6\text{ cm}^3}\right) = \frac{2000}{1{,}000{,}000}\text{ m}^3 = \mathbf{0.002\text{ m}^3} = 2 \times 10^{-3}\text{ m}^3$$

This reinforces an important relationship: **$1\text{ L} = 10^{-3}\text{ m}^3$**, which means $1\text{ m}^3 = 1000\text{ L}$.

**Check:** $0.002\text{ m}^3 \times 1000\text{ L/m}^3 = 2\text{ L}$ ✅

### Example 10: Density Unit Conversion: $1\text{ g/cm}^3$ to $\text{kg/m}^3$

Density is frequently quoted in either $\text{g/cm}^3$ or $\text{kg/m}^3$. Let us see how to convert between them:
- Numerator (grams to kilograms): $1\text{ g} = 10^{-3}\text{ kg}$
- Denominator ($\text{cm}^3$ to $\text{m}^3$): $1\text{ cm}^3 = 10^{-6}\text{ m}^3$

$$1\text{ g/cm}^3 = \frac{10^{-3}\text{ kg}}{10^{-6}\text{ m}^3} = 10^{-3 - (-6)}\text{ kg/m}^3 = 10^3\text{ kg/m}^3 = \mathbf{1000\text{ kg/m}^3}$$

**Check:** Pure water has a density of $1\text{ g/cm}^3$. One cubic meter of water ($1\text{ m}^3 = 1000\text{ L}$) weighs approximately $1000\text{ kg}$. Thus, its density is $1000\text{ kg/m}^3$. ✅

> **Key Rule of Thumb:** To convert density from $\text{g/cm}^3$ to $\text{kg/m}^3$, **multiply by 1000**. To convert from $\text{kg/m}^3$ to $\text{g/cm}^3$, **divide by 1000**.

---

## Part E: Very Large and Very Small Numbers: Scientific Notation

In science, we frequently encounter quantities that are impractical to write out in full:
- Speed of light: approximately $300{,}000{,}000\text{ m/s}$
- Radius of Earth: approximately $6{,}400{,}000\text{ m}$
- Thickness of a sheet of notebook paper: approximately $0.0001\text{ m}$

Counting zeros manually is tedious and invites transcription errors. We solve this using **scientific notation**, expressing quantities as:
$$a \times 10^n \quad \text{where } 1 \le a < 10 \text{ and } n \text{ is an integer}$$

**For large numbers ($n$ positive):** Shift the decimal point to the left until one non-zero digit remains on the left; the number of shifts equals $n$:
- $300{,}000{,}000\text{ m/s} \rightarrow$ move 8 places left: **$3 \times 10^8\text{ m/s}$**
- $6{,}400{,}000\text{ m} \rightarrow$ move 6 places left: **$6.4 \times 10^6\text{ m}$**

**Check:** $6.4 \times 10^6 = 6.4 \times 1{,}000{,}000 = 6{,}400{,}000$ ✅

**For small numbers ($n$ negative):** Shift the decimal point to the right until one non-zero digit is immediately to the left of the decimal:
- $0.0001\text{ m} \rightarrow$ move 4 places right: **$1 \times 10^{-4}\text{ m}$** (or $10^{-4}\text{ m}$)

**Check:** $10^{-4} = \frac{1}{10{,}000} = 0.0001$ ✅

Connecting with prefixes: $6.4 \times 10^6\text{ m} = 6400\text{ km}$, and $10^{-4}\text{ m} = 0.1\text{ mm} = 100\ \mu\text{m}$.

---

## Part F: Solving Leo's Robot Problem

Let us return to Leo and Ms. Davis's robot experiment. The specification sheet stated a track length of **127 cm**, but Leo entered **127** into software that interpreted the input as **inches**.

**Equivalence:** $1\text{ inch} = 2.54\text{ cm}$ (exact international definition).

**1. How far was the robot actually commanded to move?**
$$127\text{ inches} \times \left(\frac{2.54\text{ cm}}{1\text{ inch}}\right) = 127 \times 2.54\text{ cm} = \mathbf{322.58\text{ cm}}$$

The robot was commanded to travel $322.58\text{ cm}$ along a track that was only $127\text{ cm}$ long!

**2. By how much did the robot overshoot the finish line?**
$$322.58\text{ cm} - 127\text{ cm} = \mathbf{195.58\text{ cm}} \quad (\approx 1.96\text{ m})$$

**3. What numerical value should Leo have entered?**
Since the software requires inches, Leo needed to convert 127 cm into inches:
$$127\text{ cm} \times \left(\frac{1\text{ inch}}{2.54\text{ cm}}\right) = \frac{127}{2.54}\text{ inches} = \mathbf{50\text{ inches}}$$

**Check:** $50\text{ inches} \times 2.54\text{ cm/inch} = 127\text{ cm}$ ✅

Leo updated the parameter to 50. This time, the robot zipped smoothly down the track and braked with pinpoint accuracy right at the finish line! 

Ms. Davis remarked, "You see? The number remained a clean integer, but a unit mismatch changed everything. Always verify your units, and whenever possible, work in standard SI units (in this case, meters). If both the document and the software had used $1.27\text{ m}$, the error could never have occurred."

Leo taped a small reminder on his laptop: **"Not just the number—always the number + unit!"**

---

## Common Pitfalls to Avoid

1. **Mistake 1: Using linear conversion factors for area and volume**
   - Incorrect: Converting $400\text{ cm}^2$ to $\text{m}^2$ by dividing by 100 ($400 \div 100 = 4\text{ m}^2$).
   - Correct: Area involves two length factors: $1\text{ m}^2 = (100\text{ cm})^2 = 10^4\text{ cm}^2$. Thus, $400 \div 10^4 = \mathbf{0.04\text{ m}^2}$.
   *For volume, cube the linear factor: $1\text{ m}^3 = 10^6\text{ cm}^3$.*

2. **Mistake 2: Mixing up metric prefixes**
   - Incorrect: Writing "$1\text{ km} = 100\text{ m}$" or "$1\text{ mm} = 0.01\text{ m}$".
   - Correct: kilo = $10^3$ ($1\text{ km} = 1000\text{ m}$); milli = $10^{-3}$ ($1\text{ mm} = 0.001\text{ m}$). Centi represents $0.01\text{ m}$.

3. **Mistake 3: Formatting symbols incorrectly**
   - Do not write "Kg" or "KG"; write lowercase **kg**.
   - Do not write "sec"; write **s**.
   - Do not confuse lowercase **m** (meter or milli) with uppercase **M** (mega).
   - Never write plural units like "5 kgs"; always write **5 kg**.

4. **Mistake 4: Assuming grams are the SI base unit of mass**
   - Incorrect: Inserting masses in grams into SI physics formulas.
   - Correct: The SI base unit is the **kilogram (kg)**. Always convert grams to kilograms (e.g., $350\text{ g} = 0.35\text{ kg}$) before performing calculations.

5. **Mistake 5: Omitting units in intermediate calculation steps**
   - Incorrect: Writing "$\text{Speed} = 20$".
   - Correct: "$\text{Speed} = 20\text{ m/s}$". Tracking units through each calculation step acts as an automatic error check through dimensional cancellation.

6. **Mistake 6: Inverting the conversion fraction direction**
   - If converting from a smaller unit (cm) to a larger unit (m), your resulting numerical value must be smaller. If it ended up larger, you multiplied instead of dividing!

---

## Quick Recap

- The **SI system** is the universal metric framework built upon **7 base quantities**: length (m), mass (kg), time (s), temperature (K), electric current (A), amount of substance (mol), and luminous intensity (cd).
- The SI base unit of mass is the **kilogram (kg)**, not the gram.
- **Derived units** are formed by multiplying or dividing base units: area ($\text{m}^2$), volume ($\text{m}^3$), speed ($\text{m/s}$), density ($\text{kg/m}^3$), and force ($\text{N} = \text{kg}\cdot\text{m/s}^2$).
- Common non-SI conversions: $1\text{ h} = 3600\text{ s}$, $1\text{ L} = 1000\text{ cm}^3 = 10^{-3}\text{ m}^3$, $1\text{ tonne} = 1000\text{ kg}$, $36\text{ km/h} = 10\text{ m/s}$.
- **Metric prefixes:** giga ($10^9$), mega ($10^6$), kilo ($10^3$), centi ($10^{-2}$), milli ($10^{-3}$), micro ($10^{-6}$), nano ($10^{-9}$).
- **Conversion factor method:** Multiply by a fraction equivalent to 1 that cancels the unwanted unit in the denominator.
- **Speed shortcut:** Divide by 3.6 to go from km/h to m/s; multiply by 3.6 to go from m/s to km/h.
- **Dimensional powers:** $1\text{ m}^2 = 10^4\text{ cm}^2$, $1\text{ m}^3 = 10^6\text{ cm}^3$, and $1\text{ g/cm}^3 = 1000\text{ kg/m}^3$.
- **Scientific notation:** $a \times 10^n$, where $1 \le a < 10$.
- $1\text{ inch} = 2.54\text{ cm}$ exactly.

---

## Practice Questions

1. Convert $3.6\text{ km}$ into meters and into centimeters.

2. Convert $7.5\text{ kg}$ into grams, and convert $450\text{ g}$ into kilograms.

3. A highway bus travels at $90\text{ km/h}$. Express this speed in $\text{m/s}$. A cyclist sprints at $8\text{ m/s}$. Express this speed in $\text{km/h}$.

4. A sports broadcast intermission lasts 2 hours and 15 minutes. Express this total duration in seconds.

5. The surface area of a study desk is $0.5\text{ m}^2$. Express it in $\text{cm}^2$. A textbook cover has an area of $3000\text{ cm}^2$. Express it in $\text{m}^2$.

6. A domestic water storage tank holds $2\text{ m}^3$ of water. How many liters is this? A lab flask has a volume of $750\text{ cm}^3$. Express this volume in $\text{m}^3$ using scientific notation.

7. The density of pure gold is $19.3\text{ g/cm}^3$. Express this value in $\text{kg/m}^3$.

8. Write the following values in scientific notation:
   (a) The average distance from the Earth to the Moon: approximately $384{,}000{,}000\text{ m}$.
   (b) The diameter of a typical strand of human hair: approximately $0.00008\text{ m}$.
   (c) Convert $1.5 \times 10^8\text{ km}$ into an ordinary decimal number.

9. A precision metal wire has a diameter of $50\ \mu\text{m}$. Express this diameter in meters using scientific notation, and also in millimeters.

10. Leo's robotics team is testing a new track specified as $90\text{ cm}$ long. By accident, a student types `90` into software that reads inputs in inches.
    (a) How far in centimeters will the robot be commanded to travel?
    (b) By how much will the robot overshoot the finish line?
    (c) What numerical value should have been entered, rounded to two decimal places?

11. A student writes in a lab report: "$250\text{ cm}^2 = 2.5\text{ m}^2$". Identify the misconception and state the correct value.

12. State True or False for each of the following:
    (a) The SI base unit of mass is the gram.
    (b) $1\text{ mm} = 10^{-3}\text{ m}$.
    (c) $1\text{ m}^3 = 1000\text{ cm}^3$.
    (d) Speed has the derived unit $\text{m/s}$.
    (e) "5 Kg" is the correct standard SI notation for five kilograms.

### Answers

1. $1\text{ km} = 1000\text{ m} \implies 3.6\text{ km} = 3.6 \times 1000 = \mathbf{3600\text{ m}}$.
   $1\text{ m} = 100\text{ cm} \implies 3600\text{ m} = 3600 \times 100 = \mathbf{360{,}000\text{ cm}}$ (or $3.6 \times 10^5\text{ cm}$).
   *Check:* $360{,}000 \div 100 = 3600\text{ m}$, and $3600 \div 1000 = 3.6\text{ km}$. ✅

2. $1\text{ kg} = 1000\text{ g} \implies 7.5\text{ kg} = 7.5 \times 1000 = \mathbf{7500\text{ g}}$.
   $450\text{ g} = 450 \div 1000 = \mathbf{0.45\text{ kg}}$.
   *Check:* $7500 \div 1000 = 7.5$ ✅ and $0.45 \times 1000 = 450$ ✅

3. $90\text{ km/h} \div 3.6 = \mathbf{25\text{ m/s}}$. (Long form: $90 \times \frac{1000}{3600} = 25\text{ m/s}$).
   $8\text{ m/s} \times 3.6 = \mathbf{28.8\text{ km/h}}$.
   *Check:* $25 \times 3.6 = 90$ ✅ and $28.8 \div 3.6 = 8$ ✅

4. $2\text{ h} = 2 \times 3600\text{ s} = 7200\text{ s}$. $15\text{ min} = 15 \times 60\text{ s} = 900\text{ s}$. Total $= 7200 + 900 = \mathbf{8100\text{ s}}$.
   *Check:* $8100 \div 3600 = 2.25\text{ h} = 2\text{ h } 15\text{ min}$. ✅

5. $1\text{ m}^2 = 10^4\text{ cm}^2 \implies 0.5\text{ m}^2 = 0.5 \times 10^4 = \mathbf{5000\text{ cm}^2}$.
   $3000\text{ cm}^2 = 3000 \div 10^4 = \mathbf{0.3\text{ m}^2}$.
   *Check:* $0.3 \times 10^4 = 3000$ ✅ and $5000 \div 10^4 = 0.5$ ✅

6. $1\text{ m}^3 = 1000\text{ L} \implies 2\text{ m}^3 = 2 \times 1000 = \mathbf{2000\text{ L}}$.
   $750\text{ cm}^3 = 750 \div 10^6\text{ m}^3 = 0.00075\text{ m}^3 = \mathbf{7.5 \times 10^{-4}\text{ m}^3}$.
   *Check:* $7.5 \times 10^{-4} \times 10^6 = 750\text{ cm}^3$ ✅

7. $1\text{ g/cm}^3 = 1000\text{ kg/m}^3 \implies 19.3\text{ g/cm}^3 = 19.3 \times 1000 = \mathbf{19{,}300\text{ kg/m}^3}$.
   *Check:* $19.3\text{ g} = 19.3 \times 10^{-3}\text{ kg}$ and $1\text{ cm}^3 = 10^{-6}\text{ m}^3$, so $\frac{19.3 \times 10^{-3}}{10^{-6}} = 19.3 \times 10^3 = 19{,}300\text{ kg/m}^3$ ✅

8. (a) $384{,}000{,}000\text{ m} = \mathbf{3.84 \times 10^8\text{ m}}$.
   (b) $0.00008\text{ m} = \mathbf{8 \times 10^{-5}\text{ m}}$.
   (c) $1.5 \times 10^8\text{ km} = 1.5 \times 100{,}000{,}000\text{ km} = \mathbf{150{,}000{,}000\text{ km}}$.

9. $1\ \mu\text{m} = 10^{-6}\text{ m} \implies 50\ \mu\text{m} = 50 \times 10^{-6}\text{ m} = \mathbf{5 \times 10^{-5}\text{ m}}$.
   In millimeters: $5 \times 10^{-5}\text{ m} \div 10^{-3} = 5 \times 10^{-2}\text{ mm} = \mathbf{0.05\text{ mm}}$.
   *Check:* $0.05\text{ mm} = 0.05 \times 10^{-3}\text{ m} = 5 \times 10^{-5}\text{ m}$ ✅

10. (a) $90\text{ inches} \times 2.54\text{ cm/inch} = \mathbf{228.6\text{ cm}}$.
    (b) Overshoot $= 228.6 - 90 = \mathbf{138.6\text{ cm}}$.
    (c) Target input $= 90\text{ cm} \div 2.54\text{ cm/inch} = 35.433...\text{ inches} \approx \mathbf{35.43\text{ inches}}$.
    *Check:* $35.43 \times 2.54 = 89.99\text{ cm} \approx 90\text{ cm}$ ✅

11. The student divided by the linear factor 100 instead of the area conversion factor $100^2 = 10^4$. Correct conversion: $250 \div 10^4 = \mathbf{0.025\text{ m}^2}$.
    *Check:* $0.025 \times 10^4 = 250\text{ cm}^2$ ✅

12. (a) **False** ❌ (The SI base unit of mass is the kilogram).
    (b) **True** ✅ ($1\text{ mm} = 10^{-3}\text{ m}$).
    (c) **False** ❌ ($1\text{ m}^3 = 10^6\text{ cm}^3$; $1000\text{ cm}^3$ equals 1 liter).
    (d) **True** ✅ ($\text{Speed} = \text{distance} / \text{time} \implies \text{m/s}$).
    (e) **False** ❌ (SI symbols are case-sensitive: write lowercase "5 kg").

---

Mastering units and prefixes provides complete confidence in tackling numerical physics problems. Whenever you encounter a quantity, simply ask: *"What unit do I have, and what unit do I need?"* And remember Leo's golden rule: **always write the number with its unit!**

**What comes next?** Now that we have established the system of units, how do we actually measure length, mass, and time in a laboratory with high precision? Let us explore that in Topic 3.
