# Chapter: Sound (Part 3)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [sound-part2.md](sound-part2.md)** (which established wave propagation, longitudinal waves, compressions, and rarefactions). The physical definition of sound and its medium requirements were introduced in [sound.md](sound.md). For a mathematical foundation of oscillatory motion, time period, and frequency ($f = 1/T$), refer to [motion-part7.md](../motion/motion-part7.md). For metric prefixes and powers of ten (kilo, milli, micro), see [measurement-and-units-part2.md](../measurement-and-units/measurement-and-units-part2.md).
> **Topics covered in this file:**
> 3. Wave Parameters: Frequency, Wavelength, Amplitude, and v = f λ

---

# Topic 3: Wave Parameters: Frequency, Wavelength, Amplitude, and v = f λ

In Topic 2, we discovered that sound propagates through air as a longitudinal wave composed of alternating high-pressure regions (compressions) and low-pressure regions (rarefactions). The wave carries mechanical energy forward across space, while the ambient air particles simply oscillate back and forth about their equilibrium positions.

Now, an essential physical challenge arises: **how do we quantify and describe these acoustic waves with mathematical precision?** What physical quantities distinguish a deep bass rumble from a piercing whistle, or a gentle whisper from a thunderous blast? In this topic, we define the three foundational parameters that govern every wave—**amplitude**, **wavelength**, and **frequency**—and derive the celebrated universal wave relation: **$v = f\lambda$**.

**Throughout this topic, we assume a standard speed of sound in air of $v = 340\text{ m/s}$**, unless explicitly specified otherwise. (The physical factors that govern wave speed in different media will be explored in Topic 4.)

---

## Two Strings in the Music Room

Inside the school acoustics studio, music instructor Mr. Sterling sat with an acoustic guitar. Standing beside him was tenth-grader Sophia, curious about the science of musical sound.

Mr. Sterling plucked the thinnest, highest-tension steel string. It vibrated with a rapid blur, emitting a **sharp, high-pitched ringing tone**: "pingggg." Next, he plucked the thickest, lowest-tension wound bass string. It vibrated in a visibly wider, slower arc, filling the room with a **deep, resonant bass hum**: "thuuuum."

Sophia asked, "Both strings vibrate mechanically, Mr. Sterling. Why do their resulting tones sound so fundamentally different?"

Mr. Sterling smiled. "Observe this next experiment." He plucked the thick bass string very softly, producing a faint, quiet hum. Then, he pulled the same string far to the side and released it forcefully. The note was suddenly **much louder**, yet its fundamental pitch—its musical note—remained completely unchanged.

"Notice," Mr. Sterling explained, "that manipulating a single vibrating string alters two independent physical characteristics: how **loud** the sound is, and how **high or low in pitch** it sounds."

Sophia asked, "What physical properties of the sound wave determine these differences?"

Mr. Sterling answered, "The vibrations of the string create an acoustic wave in the air. **Three fundamental physical parameters define the exact shape and behavior of that wave.** Master these three numbers, and you will understand every note produced in this room."

Let us uncover these parameters and solve Sophia's musical puzzle.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Amplitude ($A$)** | The maximum displacement of a medium particle from its central mean equilibrium position (or maximum pressure variation from atmospheric equilibrium). Units: $\text{m}$ (displacement) or $\text{Pa}$ (pressure). | An air particle displaced at most $0.1\text{ mm}$ from rest: $A = 0.1\text{ mm}$. |
| **Wavelength ($\lambda$)** | The spatial distance between two consecutive compressions (or two consecutive rarefactions). SI unit: meter ($\text{m}$). | Two consecutive acoustic compressions separated by $0.77\text{ m}$: $\lambda = 0.77\text{ m}$. |
| **Frequency ($f$)** | The number of complete wave cycles or oscillations executed per unit time. SI unit: hertz ($\text{Hz}$), where $1\text{ Hz} = 1\text{ s}^{-1}$. | Concert pitch A: $440\text{ Hz}$ ($440$ full vibrations per second). |
| **Time period ($T$)** | The time required for a medium particle to complete one single full cycle of vibration. SI unit: second ($\text{s}$). | For $f = 50\text{ Hz}$, the time period is $T = 0.02\text{ s}$. |
| **Wave speed ($v$)** | The linear distance traversed by a specific wave feature (such as a compression) per unit time. SI unit: meters per second ($\text{m/s}$). | Sound propagating through air at $340\text{ m/s}$. |
| **Hertz ($\text{Hz}$)** | The SI unit of frequency; $1\text{ Hz} = 1\text{ cycle per second}$. | Kilohertz ($1\text{ kHz} = 10^3\text{ Hz} = 1000\text{ Hz}$). |

---

## Part A: Three Defining Wave Parameters

We can visualize acoustic waves using two complementary graphical representations. A sound wave can be characterized by tracking either the mechanical displacement of particles or the local variation in pressure above and below equilibrium.

First, consider a **displacement (or pressure) vs. distance graph**: an instantaneous snapshot of the medium across a spatial region at a single frozen instant of time:

```
 y (Displacement or Pressure Variation)
 +A ┤      * *                      * *
    │    *     *                  *     *
  0 ┼──*─────────*──────────────*─────────*──→ x (Distance along medium, m)
    │              *          *
 -A ┤                * *   * *
    │
    │       ├─────────── λ ──────────┤
    │  (Wavelength: Spatial distance from one crest/compression to the next)
```

> **Figure 3.1** – Pressure variation as a function of spatial distance $x$. Peaks represent compressions (maximum positive pressure deviation); troughs represent rarefactions (maximum negative pressure deviation). The spatial distance between two consecutive compressions is the **wavelength $\lambda$**. The maximum deviation from equilibrium is the **amplitude $A$**.

Next, consider a **displacement vs. time graph**: tracking the temporal oscillation of a single, fixed particle of the medium as time unfolds:

```
 y (Displacement of a single particle)
 +A ┤      * *                      * *
    │    *     *                  *     *
  0 ┼──*─────────*──────────────*─────────*──→ t (Time, s)
    │              *          *
 -A ┤                * *   * *
    │
    │       ├─────────── T ──────────┤
    │  (Time Period: Temporal duration of one complete vibrational cycle)
```

> **Figure 3.2** – Particle displacement as a function of time $t$ at a fixed point in space. While the visual wave profile appears identical to Figure 3.1, the horizontal axis represents time. The temporal interval between two consecutive peaks is the **time period $T$**.

Crucial conceptual rule: on a **spatial axis ($x$)**, the peak-to-peak distance is the **wavelength $\lambda$** (in meters). On a **temporal axis ($t$)**, the peak-to-peak interval is the **time period $T$** (in seconds).

---

### 1. Amplitude (A): How "Large" Is the Oscillation?

> **Amplitude ($A$)** = the magnitude of the maximum displacement of the particles of the medium from their resting equilibrium position. For acoustic waves, it also represents the maximum change in acoustic pressure relative to undisturbed atmospheric pressure.

- **SI Units:** Meters ($\text{m}$) when measuring particle displacement; Pascals ($\text{Pa}$) when measuring acoustic pressure variations.
- **Physical Significance:** Amplitude directly reflects the **energy** delivered by the vibrating source. A larger amplitude produces a **louder** sound; a smaller amplitude produces a **fainter** sound.
- In everyday speech, particle displacement amplitudes in air are minuscule—often measured in fractions of a micrometer ($10^{-6}\text{ m}$) or nanometer ($10^{-9}\text{ m}$).

When Mr. Sterling plucked the bass string with greater muscular force, he displaced the wire farther from its resting position. This imparted greater mechanical kinetic energy, increasing the amplitude $A$ of the pressure wave and creating a substantially louder sound. (A comprehensive analysis of loudness appears in Topic 5.)

---

### 2. Wavelength (λ): How Long Is One Wave Cycle?

> **Wavelength ($\lambda$, the Greek letter *lambda*)** = the spatial distance between two consecutive compressions or two consecutive rarefactions in a longitudinal wave. In a transverse wave, it is the distance between two consecutive crests or troughs.

- **SI Unit:** Meter ($\text{m}$). For very short waves, centimeters ($\text{cm}$) or millimeters ($\text{mm}$) are frequently employed.

```
 Ambient Air Molecules (Dots represent molecules)

  : : :     :     :     : : :     :     :     : : :
    C          R          C          R          C
    ◄───────── λ ─────────►

 (C = Compression: high density; R = Rarefaction: low density)
```

> **Figure 3.3** – Wavelength $\lambda$ in a longitudinal wave represents the spatial separation between identical points on two consecutive compression pulses.

---

### 3. Frequency (f) and Time Period (T): How Rapid Are the Vibrations?

From mechanics, we define the temporal rate of cyclic motion:

> **Frequency ($f$)** = the total number of complete oscillations or wave cycles passing a given point per unit time. The SI unit of frequency is the **hertz ($\text{Hz}$)**, where $1\text{ Hz} = 1\text{ cycle per second} = 1\text{ s}^{-1}$.
>
> **Time Period ($T$)** = the time taken by a vibrating particle to execute one complete cycle of oscillation. The SI unit of time period is the **second ($\text{s}$)**.

Frequency and time period are mathematically inverse:

$$f = \frac{1}{T} \quad \text{and} \quad T = \frac{1}{f}$$

Useful metric prefixes:
- $1\text{ kilohertz (kHz)} = 10^3\text{ Hz} = 1{,}000\text{ Hz}$
- $1\text{ megahertz (MHz)} = 10^6\text{ Hz} = 1{,}000{,}000\text{ Hz}$
- $1\text{ millisecond (ms)} = 10^{-3}\text{ s} = 0.001\text{ s}$

For example, when concert pitch A oscillates at $f = 440\text{ Hz}$, air particles complete $440$ oscillations every second, with each full cycle lasting $T = \frac{1}{440}\text{ s} \approx 0.00227\text{ s} = 2.27\text{ ms}$.

---

## Part B: Wave Speed and Deriving v = f λ

The **wave speed ($v$)** denotes the linear distance traveled by a wave disturbance (such as an advancing compression crest) through the medium per unit time, measured in meters per second ($\text{m/s}$).

Consider a periodic acoustic source generating a train of compression pulses:
1. In the duration of **one full time period ($T$)**, the vibrating source executes exactly one complete oscillation, releasing one full wave cycle into the medium.
2. During this precise time interval $T$, the leading compression has propagated forward by exactly **one full wavelength ($\lambda$)**.

Recall the fundamental kinematic definition of speed:

$$\text{Speed} = \frac{\text{Distance}}{\text{Time}}$$

Substituting the distance of one cycle ($\lambda$) and the time of one cycle ($T$):

$$v = \frac{\lambda}{T}$$

Since the frequency is related to time period by $f = \frac{1}{T}$, we can substitute $\frac{1}{T}$ with $f$:

$$v = f \times \lambda$$

This yields the fundamental wave equation:

$$\mathbf{v = f\lambda}$$

$$\text{Wave Speed (m/s)} = \text{Frequency (Hz)} \times \text{Wavelength (m)}$$

**Dimensional Analysis Check:**

$$[\text{Hz}] \times [\text{m}] = \left[\frac{1}{\text{s}}\right] \times [\text{m}] = \frac{\text{m}}{\text{s}} = [\text{m/s}] \quad \checkmark$$

From this fundamental equation, we extract three algebraic relationships:

| Target Quantity | Formula | Unit Check |
|---|---|---|
| **Wave Speed ($v$)** | $v = f \times \lambda$ | $\text{Hz} \times \text{m} = \text{m/s}$ |
| **Wavelength ($\lambda$)** | $\lambda = \frac{v}{f}$ | $\frac{\text{m/s}}{\text{Hz}} = \text{m}$ |
| **Frequency ($f$)** | $f = \frac{v}{\lambda}$ | $\frac{\text{m/s}}{\text{m}} = \text{s}^{-1} = \text{Hz}$ |

---

### Wave Speed Depends on the Medium, Not Frequency

A foundational physical truth: **the speed of sound is strictly determined by the mechanical properties (elasticity and density) and temperature of the medium.** 

In air at standard room conditions, the speed of sound is fixed at approximately $340\text{ m/s}$. It does not matter whether the sound is loud or faint, high-pitched or low-pitched: **all audible acoustic frequencies travel at the exact same speed in a given medium.** A thunderous drumbeat does not outpace a soft flute note!

Because $v$ is fixed for a given medium, the product $f \times \lambda$ must remain constant. Therefore, **frequency and wavelength are inversely proportional**:

$$\lambda = \frac{v}{f} \implies \lambda \propto \frac{1}{f} \quad (\text{when } v \text{ is constant})$$

- As frequency **increases**, wavelength **decreases**. High-frequency sounds have short, tightly packed waves.
- As frequency **decreases**, wavelength **increases**. Low-frequency sounds have long, extended waves.

---

### Table 1: Different Frequencies in Air (v = 340 m/s)

| Acoustic Register | Frequency ($f$) | Wavelength ($\lambda = \frac{v}{f}$) |
|---|---|---|
| Deep Bass Tone | $100\text{ Hz}$ | $\frac{340}{100} = \mathbf{3.4\text{ m}}$ |
| Concert Pitch (Tuning A) | $440\text{ Hz}$ | $\frac{340}{440} \approx \mathbf{0.77\text{ m}}$ |
| High Treble Whistle | $4000\text{ Hz}$ ($4\text{ kHz}$) | $\frac{340}{4000} = 0.085\text{ m} = \mathbf{8.5\text{ cm}}$ |

```
 Visual Comparison of Acoustic Wavelengths in Air (Each '#' ≈ 0.1 m):

 100 Hz   : ################################## 3.4 m
 440 Hz   : ######## 0.77 m
 4000 Hz  : # 0.085 m (8.5 cm)
```

> **Figure 3.4** – In air at a constant speed of $340\text{ m/s}$, increasing acoustic frequency dramatically compresses the spatial wavelength.

---

### Table 2: Same Frequency Across Different Media

Suppose a precision metal tuning fork calibrated to $f = 440\text{ Hz}$ is struck first in air ($v = 340\text{ m/s}$) and then lowered into water ($v = 1500\text{ m/s}$).

| Medium | Wave Speed ($v$) | Frequency ($f$) | Wavelength ($\lambda = \frac{v}{f}$) |
|---|---|---|---|
| Ambient Air | $340\text{ m/s}$ | $440\text{ Hz}$ | $\frac{340}{440} \approx \mathbf{0.77\text{ m}}$ |
| Liquid Water | $1500\text{ m/s}$ | $440\text{ Hz}$ | $\frac{1500}{440} \approx \mathbf{3.41\text{ m}}$ |

Observe a crucial physical principle: **the frequency remains strictly constant ($440\text{ Hz}$), but the wavelength expands by more than a factor of four.** 

Why? Because **frequency is dictated entirely by the source**. The steel prongs oscillate $440$ times each second, forcing adjacent particles to vibrate $440$ times each second regardless of whether those particles are air molecules or water molecules. When the wave enters the denser, stiffer water medium, its propagation speed jumps to $1500\text{ m/s}$. To satisfy $v = f\lambda$, the wavelength must lengthen proportionally.

---

### Key Conceptual Distinction: Amplitude vs. Frequency

- **Increasing Amplitude** (plucking a string harder): Delivers more energy, making the sound **louder**. The frequency remains unchanged, so the musical pitch remains identical.
- **Increasing Frequency** (plucking a thinner or tighter string): Causes more cycles per second, making the sound **higher in pitch**. If plucked with the same energy, its loudness remains unchanged.

We will formalize these acoustic sensations in Topic 5.

---

## Back in the Music Room: Resolving the Mystery

Mr. Sterling explained to Sophia: "The thin guitar string has low mass and high tension, enabling it to vibrate at a very high frequency. In contrast, the thick bass string is heavy and dense, oscillating at a much lower frequency."

Suppose the thin string oscillates at $f = 880\text{ Hz}$ and the thick bass string oscillates at $f = 110\text{ Hz}$. Given $v = 340\text{ m/s}$ in the music room:

- **Thin String:** $\lambda = \frac{v}{f} = \frac{340\text{ m/s}}{880\text{ Hz}} = \mathbf{0.386\text{ m}}$ ($38.6\text{ cm}$)
- **Thick Bass String:** $\lambda = \frac{v}{f} = \frac{340\text{ m/s}}{110\text{ Hz}} = \mathbf{3.09\text{ m}}$

**Consistency Checks:**
$$880\text{ Hz} \times 0.386\text{ m} = 339.7\text{ m/s} \approx 340\text{ m/s} \quad \checkmark$$
$$110\text{ Hz} \times 3.09\text{ m} = 339.9\text{ m/s} \approx 340\text{ m/s} \quad \checkmark$$

Mr. Sterling summarized, "Notice the complete physical picture, Sophia:
- **Thin string:** High frequency ($880\text{ Hz}$), short wavelength ($0.39\text{ m}$), perceived as a **high pitch**.
- **Thick bass string:** Low frequency ($110\text{ Hz}$), long wavelength ($3.09\text{ m}$), perceived as a **deep bass pitch**.
- And when I plucked the string harder, I increased its **amplitude**, making the sound **louder** without altering its frequency or pitch!"

Sophia smiled in delight: "All three wave parameters—$A$, $f$, and $\lambda$—govern everything we hear!"

---

## Part C: Solved Examples

In all calculations below, assume the speed of sound in air is $v = 340\text{ m/s}$ unless specified otherwise.

### Example 1: Frequency and Time Period

An acoustic source completes 50 full oscillations in 2 seconds. Determine its frequency and time period.

- $f = \frac{\text{Total Oscillations}}{\text{Total Time}} = \frac{50}{2\text{ s}} = \mathbf{25\text{ Hz}}$
- $T = \frac{1}{f} = \frac{1}{25\text{ Hz}} = \mathbf{0.04\text{ s}}$ (or $40\text{ ms}$)

**Check:** $f \times T = 25\text{ Hz} \times 0.04\text{ s} = 1.0$ ✅.

### Example 2: Calculating Wave Speed from Frequency and Wavelength

A musical note has a frequency of $256\text{ Hz}$ and a measured wavelength of $1.33\text{ m}$. Calculate the speed of the sound wave.

- $v = f \times \lambda = 256\text{ Hz} \times 1.33\text{ m} = 340.48\text{ m/s} \approx \mathbf{340.5\text{ m/s}}$

**Check:** $\frac{v}{f} = \frac{340.48}{256} = 1.33\text{ m}$ ✅. This matches the standard speed of sound in air.

### Example 3: Calculating Wavelength from Speed and Frequency

An audio tone of frequency $680\text{ Hz}$ propagates through ambient air. Find its wavelength.

- $\lambda = \frac{v}{f} = \frac{340\text{ m/s}}{680\text{ Hz}} = \mathbf{0.5\text{ m}}$ (or $50\text{ cm}$)

**Check:** $v = f \times \lambda = 680\text{ Hz} \times 0.5\text{ m} = 340\text{ m/s}$ ✅.

### Example 4: Calculating Frequency from Speed and Wavelength

A sound wave propagating through air has a wavelength of $0.25\text{ m}$. Calculate its frequency.

- $f = \frac{v}{\lambda} = \frac{340\text{ m/s}}{0.25\text{ m}} = \mathbf{1360\text{ Hz}}$ (or $1.36\text{ kHz}$)

**Check:** $v = 1360\text{ Hz} \times 0.25\text{ m} = 340\text{ m/s}$ ✅.

### Example 5: Wavelengths of the Human Hearing Limits (20 Hz and 20,000 Hz)

The standard human auditory range spans from $20\text{ Hz}$ to $20{,}000\text{ Hz}$ ($20\text{ kHz}$). Calculate the corresponding acoustic wavelengths in air.

- For $f_1 = 20\text{ Hz}$:
  $$\lambda_1 = \frac{v}{f_1} = \frac{340\text{ m/s}}{20\text{ Hz}} = \mathbf{17\text{ m}}$$
- For $f_2 = 20{,}000\text{ Hz}$:
  $$\lambda_2 = \frac{v}{f_2} = \frac{340\text{ m/s}}{20{,}000\text{ Hz}} = 0.017\text{ m} = \mathbf{1.7\text{ cm}}$$

**Check:** $20\text{ Hz} \times 17\text{ m} = 340\text{ m/s}$ ✅; $20{,}000\text{ Hz} \times 0.017\text{ m} = 340\text{ m/s}$ ✅. Human ears perceive wavelengths ranging from the size of a large house ($17\text{ m}$) down to the width of a coin ($1.7\text{ cm}$)!

### Example 6: Number of Complete Waves Spanning a Distance

A sound source produces a frequency of $170\text{ Hz}$ with a wavelength of $2\text{ m}$. How many complete wave cycles are contained within a distance of $100\text{ m}$?

- $\text{Number of Waves} = \frac{\text{Total Distance}}{\text{Wavelength}} = \frac{100\text{ m}}{2\text{ m}} = \mathbf{50\text{ waves}}$

**Check:** $50 \times 2\text{ m} = 100\text{ m}$ ✅. Furthermore, $v = 170\text{ Hz} \times 2\text{ m} = 340\text{ m/s}$ ✅.

### Example 7: Time Period of a 512 Hz Tuning Fork

Find the time period of a standard scientific tuning fork vibrating at $512\text{ Hz}$.

- $T = \frac{1}{f} = \frac{1}{512\text{ Hz}} \approx 0.001953\text{ s} \approx \mathbf{1.95\text{ ms}}$

**Check:** $512\text{ Hz} \times 0.001953\text{ s} \approx 1.0$ ✅.

### Example 8: Time Period of Mosquito Wing Beats

A mosquito flaps its wings 500 times in 1 second ($f = 500\text{ Hz}$). Calculate the duration of one complete wing flap cycle.

- $T = \frac{1}{f} = \frac{1}{500\text{ Hz}} = 0.002\text{ s} = \mathbf{2\text{ ms}}$

**Check:** $500\text{ Hz} \times 0.002\text{ s} = 1.0$ ✅.

### Example 9: Transit Time Across 1.7 Kilometers

How long does an acoustic signal of frequency $850\text{ Hz}$ take to travel across a distance of $1.7\text{ km}$ through air?

- Convert kilometers to meters: $1.7\text{ km} = 1.7 \times 1000\text{ m} = 1700\text{ m}$.
- $\text{Time} = \frac{\text{Distance}}{\text{Speed}} = \frac{1700\text{ m}}{340\text{ m/s}} = \mathbf{5\text{ s}}$

**Insight:** Notice that the frequency ($850\text{ Hz}$) was unnecessary for this calculation, because wave speed depends solely on the medium, not on frequency.
**Check:** $340\text{ m/s} \times 5\text{ s} = 1700\text{ m}$ ✅.

### Example 10: Acoustic Wavelength Underwater

The speed of sound in seawater is $1500\text{ m/s}$. Determine the wavelength of an acoustic sonar pulse of frequency $3000\text{ Hz}$ ($3\text{ kHz}$).

- $\lambda = \frac{v}{f} = \frac{1500\text{ m/s}}{3000\text{ Hz}} = \mathbf{0.5\text{ m}}$ (or $50\text{ cm}$)

**Check:** $3000\text{ Hz} \times 0.5\text{ m} = 1500\text{ m/s}$ ✅.

### Example 11: Ratio and Proportionality Problem

A sound wave in air has an initial frequency of $200\text{ Hz}$. If the source doubles its frequency while propagating through the same air mass, determine the effect on its wavelength.

- Initial wavelength: $\lambda_1 = \frac{v}{f_1} = \frac{340\text{ m/s}}{200\text{ Hz}} = 1.7\text{ m}$.
- Doubled frequency: $f_2 = 2 \times 200\text{ Hz} = 400\text{ Hz}$.
- New wavelength: $\lambda_2 = \frac{v}{f_2} = \frac{340\text{ m/s}}{400\text{ Hz}} = 0.85\text{ m}$.
- Ratio: $\frac{\lambda_2}{\lambda_1} = \frac{0.85\text{ m}}{1.7\text{ m}} = 0.5 = \frac{1}{2}$.
- Therefore, the wavelength is **halved**.

**Check:** Since $v$ is constant, $\lambda \propto \frac{1}{f}$. Doubling frequency must halve wavelength ✅.

### Example 12: Extracting Amplitude, Period, Frequency, and Wavelength from Data

The displacement $y$ of an oscillating air particle recorded at regular time intervals $t$ is tabulated below:

| $t$ (ms) | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|---|
| $y$ (mm) | 0 | 2 | 0 | −2 | 0 | 2 | 0 | −2 | 0 |

1. **Amplitude ($A$):** The maximum positive displacement from equilibrium ($y = 0$) is $+2\text{ mm}$ (and maximum negative is $-2\text{ mm}$). Thus, $A = \mathbf{2\text{ mm}}$ (or $0.002\text{ m}$).
2. **Time Period ($T$):** The particle reaches its first positive peak ($y = +2\text{ mm}$) at $t = 1\text{ ms}$ and its second positive peak at $t = 5\text{ ms}$. The temporal difference is $T = 5\text{ ms} - 1\text{ ms} = \mathbf{4\text{ ms}} = 0.004\text{ s}$.
3. **Frequency ($f$):** $f = \frac{1}{T} = \frac{1}{0.004\text{ s}} = \mathbf{250\text{ Hz}}$.
4. **Wavelength ($\lambda$) in Air:** $\lambda = \frac{v}{f} = \frac{340\text{ m/s}}{250\text{ Hz}} = \mathbf{1.36\text{ m}}$.

**Check:** $250\text{ Hz} \times 0.004\text{ s} = 1.0$ ✅; $250\text{ Hz} \times 1.36\text{ m} = 340\text{ m/s}$ ✅.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Confusing wavelength with amplitude.**
   Wavelength is a **horizontal spatial length** along the propagation axis (the distance from one compression to the next). Amplitude is the **vertical magnitude of displacement** (the distance from resting equilibrium to the peak). Both can be expressed in meters, but they describe entirely different physical dimensions.

2. **Mistake 2: Assuming that higher-frequency sounds travel faster.**
   The speed of sound in a given medium is independent of frequency. High-frequency and low-frequency sounds travel at the exact same speed ($340\text{ m/s}$ in room air). When frequency increases, **wavelength decreases proportionally** to preserve $v = f\lambda$.

3. **Mistake 3: Believing that frequency changes when a sound enters a new medium.**
   Frequency is determined strictly by the vibrating source and does not change across different media. When sound passes from air into water, its speed increases, causing its **wavelength to stretch proportionally**, while frequency remains strictly constant.

4. **Mistake 4: Mixing up frequency and time period.**
   Remember that $f = \frac{1}{T}$ and $f \times T = 1$. A high frequency corresponds to an extremely small time period. For example, a $500\text{ Hz}$ sound has $T = 0.002\text{ s}$, never $500\text{ s}$.

5. **Mistake 5: Forgetting to convert units to SI standard form before calculating.**
   Always convert before substituting into $v = f\lambda$:
   - $3\text{ kHz} = 3000\text{ Hz}$
   - $1.7\text{ cm} = 0.017\text{ m}$
   - $1.7\text{ km} = 1700\text{ m}$
   - $4\text{ ms} = 0.004\text{ s}$

6. **Mistake 6: Assuming louder sounds travel faster.**
   Loudness depends on amplitude; wave speed depends on the elastic and inertial properties of the medium. Whether a word is shouted or whispered, it traverses the room in the exact same fraction of a second.

---

## Quick Recap

- **Amplitude ($A$)** is the maximum displacement of medium particles from equilibrium (or maximum pressure variation). It dictates acoustic **loudness**.
- **Wavelength ($\lambda$)** is the spatial separation between two consecutive compressions or rarefactions (SI unit: $\text{m}$).
- **Frequency ($f$)** is the number of complete oscillations executed per second (SI unit: $\text{Hz}$, $1\text{ Hz} = 1\text{ s}^{-1}$).
- **Time period ($T$)** is the time taken to complete one full cycle (SI unit: $\text{s}$). Related by $f = \frac{1}{T}$ and $T = \frac{1}{f}$.
- In one time period $T$, a wave travels a distance of one wavelength $\lambda$. Therefore, wave speed is $v = \frac{\lambda}{T} = f\lambda$.
- In air ($v = 340\text{ m/s}$): $\lambda = \frac{v}{f}$ and $f = \frac{v}{\lambda}$.
- Sound speed is governed by the medium, not frequency. Consequently, frequency and wavelength are inversely proportional.
- When crossing into a different medium, **frequency remains constant**, while speed and wavelength change proportionally.
- Conceptual preview: Amplitude governs loudness; frequency governs pitch (examined in depth in Topic 5).

---

## Practice Questions

*(Take the speed of sound in air as $340\text{ m/s}$ and in water as $1500\text{ m/s}$ unless specified otherwise.)*

1. A vibrating body completes 2000 full oscillations in 1 second. Calculate its frequency in hertz and its time period in milliseconds ($\text{ms}$).

2. A mechanical source has a time period of $0.005\text{ s}$. Calculate its frequency, and determine the wavelength of the sound it emits into ambient air.

3. Calculate the wavelength in air of an acoustic wave vibrating at $5\text{ kHz}$. Express your answer in both meters and centimeters.

4. An acoustic wave propagating through liquid water has a measured wavelength of $0.75\text{ m}$. What is its frequency?

5. A precision tuning fork of frequency $256\text{ Hz}$ vibrates continuously for $10\text{ s}$.
   (a) How many complete wave cycles does it emit?
   (b) What distance does the leading wavefront travel in air during this period?
   (c) Verify that $(\text{number of waves}) \times (\text{wavelength})$ yields the exact same distance.

6. On a spatial displacement graph of an acoustic wave traveling in air, two consecutive compressions are located at $x = 0.4\text{ m}$ and $x = 1.2\text{ m}$. Find the wavelength, frequency, and time period of the wave.

7. A $256\text{ Hz}$ tuning fork is struck first in air and subsequently underwater.
   (a) What happens to its frequency?
   (b) What happens to its wavelength? Calculate the wavelength in both media.

8. In a given medium, the frequency of an acoustic wave is tripled. By what factor does its wavelength change?

9. State whether each statement is True or False, providing a one-sentence physical justification:
   (a) A louder sound propagates faster through air than a faint sound.
   (b) The frequency of an acoustic wave changes when it passes from air into water.
   (c) Amplitude and wavelength measure the exact same physical dimension of a wave.
   (d) The product of frequency and time period always equals 1 ($f \times T = 1$).

10. From the following displacement data of a vibrating point, determine the amplitude, time period, and frequency:
    At $t = 0, 0.5, 1.0, 1.5, 2.0\text{ ms}$, the displacement is $y = 0, +3, 0, -3, 0\text{ mm}$ (representing one complete oscillation in $2\text{ ms}$).

### Answers

1. Frequency $f = \mathbf{2000\text{ Hz}}$ ($2\text{ kHz}$).
   Time period $T = \frac{1}{f} = \frac{1}{2000\text{ Hz}} = 0.0005\text{ s} = \mathbf{0.5\text{ ms}}$.
   Check: $2000\text{ Hz} \times 0.0005\text{ s} = 1.0$ ✅.

2. Frequency $f = \frac{1}{T} = \frac{1}{0.005\text{ s}} = \mathbf{200\text{ Hz}}$.
   Wavelength $\lambda = \frac{v}{f} = \frac{340\text{ m/s}}{200\text{ Hz}} = \mathbf{1.7\text{ m}}$.
   Check: $200\text{ Hz} \times 1.7\text{ m} = 340\text{ m/s}$ ✅.

3. Convert frequency to SI: $5\text{ kHz} = 5000\text{ Hz}$.
   $\lambda = \frac{v}{f} = \frac{340\text{ m/s}}{5000\text{ Hz}} = \mathbf{0.068\text{ m}} = \mathbf{6.8\text{ cm}}$.
   Check: $5000\text{ Hz} \times 0.068\text{ m} = 340\text{ m/s}$ ✅.

4. $f = \frac{v}{\lambda} = \frac{1500\text{ m/s}}{0.75\text{ m}} = \mathbf{2000\text{ Hz}}$ ($2\text{ kHz}$).
   Check: $2000\text{ Hz} \times 0.75\text{ m} = 1500\text{ m/s}$ ✅.

5. (a) Number of waves emitted = $f \times t = 256\text{ waves/s} \times 10\text{ s} = \mathbf{2560\text{ waves}}$.
   (b) Distance traveled = $v \times t = 340\text{ m/s} \times 10\text{ s} = \mathbf{3400\text{ m}}$.
   (c) $\lambda = \frac{340}{256} = 1.328125\text{ m}$. Total distance = $2560 \times 1.328125\text{ m} = \mathbf{3400\text{ m}}$ ✅.

6. $\lambda = 1.2\text{ m} - 0.4\text{ m} = \mathbf{0.8\text{ m}}$.
   Frequency $f = \frac{v}{\lambda} = \frac{340\text{ m/s}}{0.8\text{ m}} = \mathbf{425\text{ Hz}}$.
   Time period $T = \frac{1}{f} = \frac{1}{425\text{ Hz}} \approx 0.00235\text{ s} \approx \mathbf{2.35\text{ ms}}$.
   Check: $425\text{ Hz} \times 0.8\text{ m} = 340\text{ m/s}$ ✅.

7. (a) Frequency **remains constant** at $256\text{ Hz}$ because frequency is set strictly by the vibrating source.
   (b) Wavelength alters as speed changes:
   - In air: $\lambda_{\text{air}} = \frac{340\text{ m/s}}{256\text{ Hz}} \approx \mathbf{1.33\text{ m}}$.
   - In water: $\lambda_{\text{water}} = \frac{1500\text{ m/s}}{256\text{ Hz}} \approx \mathbf{5.86\text{ m}}$.
   Check: $256\text{ Hz} \times 5.859\text{ m} \approx 1500\text{ m/s}$ ✅.

8. From $\lambda = \frac{v}{f}$, since $v$ is constant in a given medium, $\lambda$ is inversely proportional to $f$. When frequency is multiplied by 3, the wavelength becomes **one-third ($\frac{1}{3}$)** of its initial value.

9. (a) **False** ❌: Wave speed is an intrinsic property of the medium; loudness (amplitude) does not affect propagation speed.
   (b) **False** ❌: Frequency is determined exclusively by the source; wavelength changes when speed changes across media.
   (c) **False** ❌: Wavelength is the horizontal distance between two consecutive cycles; amplitude is the maximum displacement from resting equilibrium.
   (d) **True** ✅: By definition, $f = \frac{1}{T}$, so $f \times T = 1$.

10. Amplitude $A = \mathbf{3\text{ mm}}$ (maximum displacement from $y = 0$).
    One full cycle spans $t = 0$ to $t = 2.0\text{ ms}$, so $T = \mathbf{2\text{ ms}} = 0.002\text{ s}$.
    Frequency $f = \frac{1}{T} = \frac{1}{0.002\text{ s}} = \mathbf{500\text{ Hz}}$.
    Check: $500\text{ Hz} \times 0.002\text{ s} = 1.0$ ✅.

---

Now you can confidently quantify any wave using its three core parameters ($A$, $f$, and $\lambda$) and relate them using $v = f\lambda$. Whenever in doubt, check your units: $\text{Hz} \times \text{m} = \text{m/s}$.

**What's Next?** How fast does sound travel across different real-world media, and what happens when an acoustic wave collides with a barrier? Why does lightning appear seconds before thunder, and how do canyon walls produce echoes? In Topic 4, we explore **sound speed, reflection, echoes, and reverberation**.
