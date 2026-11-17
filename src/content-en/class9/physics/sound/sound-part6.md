# Chapter: Sound (Part 6)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [sound-part5.md](sound-part5.md)** (which established the characteristics of sound: loudness, pitch, and timbre). The physical origin of sound is in [sound.md](sound.md). For echo calculations and the round-trip distance formula ($d = \frac{v \times t}{2}$), refer to [sound-part4.md](sound-part4.md). For wave parameters and $v = f\lambda$, see [sound-part3.md](sound-part3.md).
> **Topics covered in this file:**
> 6. Audible Range, Ultrasound, Infrasound, and SONAR

---

# Topic 6: Audible Range, Ultrasound, Infrasound, and SONAR

In Topic 5, we learned how human ears interpret acoustic waves through **loudness** (amplitude), **pitch** (frequency), and **quality** (waveform). Our discussion concluded with an intriguing biological puzzle: there are acoustic vibrations in nature vibrating so slowly, or oscillating so rapidly, that human ears cannot perceive them at all. The human ear has definite biological frequency boundaries.

In this topic, we establish the limits of the **human audible range**, explore the realms of **infrasound** (below $20\text{ Hz}$) and **ultrasound** (above $20\text{ kHz}$), and examine their cutting-edge technological and biological applications—from medical sonography imaging internal organs without incisions, to ship **SONAR** mapping the deep ocean abyss, to bats navigating in total darkness.

**Throughout this topic, we assume a standard speed of sound in air of $340\text{ m/s}$ and in seawater of approximately $1500\text{ m/s}$**, unless specified otherwise.

---

## In the Diagnostic Clinic: A Screen and a Question

Inside the clinical ultrasound suite of a medical center, Dr. Hayes sat beside a diagnostic sonography workstation. High school student Sophia had accompanied her mother for a routine diagnostic checkup.

Dr. Hayes applied a layer of clear acoustic **gel** across the patient's abdomen. Picking up a smooth, handheld electronic **probe (transducer)**, she guided it gently across the skin. Instantly, an animated, real-time **grayscale cross-sectional image** formed on the high-resolution monitor: distinct anatomical layers, curved acoustic boundaries, and a clearly defined, bean-shaped kidney.

"Everything looks completely healthy," Dr. Hayes remarked with a reassuring smile.

Sophia stepped closer, looking between the quiet probe and the glowing monitor in disbelief. "Dr. Hayes, you didn't insert a surgical camera, and you made no incision. My mother felt absolutely nothing. You explained that this probe emits **ultrasound**—a sound wave vibrating beyond the limits of human hearing. **If no one can hear this sound, how can it create an intricate real-time image of an internal organ?**"

Dr. Hayes chuckled. "A brilliant scientific question, Sophia! To understand how inaudible sound generates images, we must first examine the boundaries of human hearing. Once you grasp wave reflection and time-of-flight ranging, the mystery of the ultrasound image will solve itself."

Let us investigate the physics of audible and inaudible sound.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Audible range** | The frequency spectrum detectable by the normal, healthy human ear: approximately $20\text{ Hz}$ to $20{,}000\text{ Hz}$ ($20\text{ kHz}$) | Human hearing register for speech and music |
| **Infrasound (infrasonic sound)** | Mechanical sound waves possessing frequencies **below $20\text{ Hz}$** | Seismic earthquake waves, elephant rumbles |
| **Ultrasound (ultrasonic sound)** | Mechanical sound waves possessing frequencies **above $20{,}000\text{ Hz}$ ($20\text{ kHz}$)** | Medical sonography scans, bat echolocation pulses |
| **kHz, MHz** | Metric frequency units: $1\text{ kHz} = 10^3\text{ Hz} = 1{,}000\text{ Hz}$; $1\text{ MHz} = 10^6\text{ Hz} = 1{,}000{,}000\text{ Hz}$ | A $3\text{ MHz}$ medical ultrasound probe |
| **Transducer (probe)** | An electro-acoustic device that converts electrical energy into ultrasonic mechanical waves and converts return echoes back into electrical signals | Handheld ultrasound scanner head |
| **Echolocation** | The biological sensory system of emitting sound pulses and interpreting return echoes to navigate and locate prey | Hunting bats and marine dolphins |
| **SONAR** | **SO**und **N**avigation **A**nd **R**anging: an acoustic technique utilizing underwater ultrasound pulses to measure sea depth and locate submerged objects | Mapping the ocean floor, submarine tracking |
| **Sonography (ultrasonography)** | A diagnostic medical imaging modality using high-frequency ultrasound reflections to visualize internal body structures | Prenatal imaging of a fetus, echocardiography |

---

## Part A: The Human Audible Range

### The Limits of Human Hearing

Frequency measures the number of complete vibrational cycles executed per second. The human auditory system is not sensitive to all frequencies. A healthy young human ear can detect mechanical acoustic vibrations spanning approximately:

$$\mathbf{20\text{ Hz} \le f \le 20{,}000\text{ Hz} \quad (20\text{ kHz})}$$

This frequency interval is termed the **audible range** of human hearing.

- Frequencies **below $20\text{ Hz}$** are classified as **infrasound**. Human ears cannot hear them.
- Frequencies between **$20\text{ Hz}$ and $20{,}000\text{ Hz}$** constitute **audible sound**, which we perceive as musical pitches and noises.
- Frequencies **above $20{,}000\text{ Hz}$ ($20\text{ kHz}$)** are classified as **ultrasound**. Human ears cannot hear them.

**Crucial Insight:** Infrasound and ultrasound are **genuine physical sound waves**! They are longitudinal mechanical disturbances governed by the exact same physical laws ($v = f\lambda$, medium dependence, reflection, refraction) as ordinary sound. The fact that human biology cannot perceive them does not make them any less real—their frequencies simply lie outside the mechanical resonance limits of our eardrums and auditory nerves.

---

### Changes in Hearing Range with Age

The upper limit of $20\text{ kHz}$ applies primarily to healthy children and young teenagers. As humans age, the tiny, delicate sensory hair cells (*cilia*) along the basal turn of the cochlea stiffen and degrade through natural wear and environmental noise exposure.

Consequently, **the upper frequency threshold drops systematically with age**. By middle age, many adults cannot detect frequencies exceeding $14 - 15\text{ kHz}$. A high-pitched $18\text{ kHz}$ electronic buzz that is painfully irritating to a school student may be completely inaudible to an older adult.

---

### Auditory Ranges of Other Animals

Different animal species have evolved specialized auditory structures tailored to their survival needs. Approximate hearing limits include:

| Species | Approximate Auditory Frequency Range |
|---|---|
| **Human** | $20\text{ Hz} - 20\text{ kHz}$ |
| **Dog** | Up to $\approx 45\text{ kHz}$ |
| **Cat** | Up to $\approx 64\text{ kHz}$ |
| **Bat** | Up to $\approx 100 - 110\text{ kHz}$ |
| **Dolphin / Porpoise** | Up to $\approx 100 - 150\text{ kHz}$ |
| **Elephant / Whale** | Down to $\approx 5 - 15\text{ Hz}$ (Infrasonic specialists) |

Because dogs can detect acoustic frequencies up to $45\text{ kHz}$, trainers use high-pitched **Galton dog whistles**. When blown, the whistle emits acoustic waves around $25 - 30\text{ kHz}$: humans hear only a faint hiss of rushing air, while a dog hears a loud, commanding command!

```
 Acoustic Frequency Spectrum (Logarithmic Scale / Conceptual):

  Infrasound               Audible Human Register           Ultrasound
  (f < 20 Hz)              (20 Hz - 20 kHz)                 (f > 20 kHz)
 ◄────────────────────────┬────────────────────────────────┬────────────────────────►
                         20 Hz                            20 kHz
  • Elephants & Whales     • Normal Human Speech & Music    • Dog Whistle (~30 kHz)
  • Earthquakes / Volcanoes • Children (up to 20 kHz)       • Domestic Dog (~45 kHz)
  • Industrial Turbines    • Adults (often drops < 15 kHz)  • Domestic Cat (~64 kHz)
                                                            • Insect-Hunting Bats (~100 kHz)
                                                            • Marine Dolphins (~150 kHz)
                                                            • Medical Imaging (1 - 15 MHz)
```

> **Figure 6.1** – The complete acoustic frequency spectrum: infrasound below $20\text{ Hz}$, the human audible window ($20\text{ Hz} - 20\text{ kHz}$), and ultrasound above $20\text{ kHz}$.

---

## Part B: Infrasound: Deep Low-Frequency Vibrations

Infrasound comprises acoustic waves with frequencies below $20\text{ Hz}$. Major natural and anthropogenic sources include:

- **Seismic and Volcanic Events:** Earthquakes, volcanic eruptions, avalanches, and ocean tsunamis produce immense low-frequency mechanical waves that travel through the Earth's crust and atmosphere.
- **Animal Communication:** Elephants and baleen whales communicate over vast distances using infrasonic vocalizations ($10 - 15\text{ Hz}$). Because infrasound experiences minimal atmospheric attenuation, elephant rumbles travel through the ground and air across distances exceeding $10\text{ km}$, while whale calls travel hundreds of kilometers across ocean basins.
- **Heavy Industrial Machinery:** Giant diesel generators, industrial turbines, and rolling thunder discharge significant infrasonic energy.

*(Note: Prior to major earthquake tremors, some animals exhibit sudden agitation. While popular belief suggests they perceive preliminary infrasound, this phenomenon remains unconfirmed as a reliable predictive tool.)*

---

### Why Infrasound Propagates Across Enormous Distances

Low frequency corresponds to an exceptionally **long wavelength**. Applying $v = f\lambda \implies \lambda = \frac{v}{f}$:

In ambient air ($v = 340\text{ m/s}$), an infrasonic wave of frequency $f = 10\text{ Hz}$ has a wavelength of:

$$\lambda = \frac{340\text{ m/s}}{10\text{ Hz}} = \mathbf{34\text{ meters}}$$

Because its wavelength is enormous ($34\text{ m}$), the wave easily diffracts (bends) around macroscopic obstacles such as buildings, trees, and small hills. Furthermore, viscous atmospheric absorption dissipates wave energy very slowly at low frequencies. Consequently, infrasound can propagate across entire continents and ocean basins with negligible energy loss.

---

## Part C: Ultrasound: High-Frequency Acoustic Waves

Ultrasound comprises acoustic waves with frequencies exceeding $20{,}000\text{ Hz}$ ($20\text{ kHz}$). Modern clinical imaging uses frequencies ranging from $1\text{ MHz}$ to $15\text{ MHz}$, while industrial cleaning systems utilize $20\text{ kHz} - 40\text{ kHz}$.

Key physical properties of ultrasound:

1. **High Frequency and Extremely Short Wavelength:** In air ($v = 340\text{ m/s}$), a $40\text{ kHz}$ ultrasonic wave has a wavelength of:
   $$\lambda = \frac{340\text{ m/s}}{40{,}000\text{ Hz}} = 0.0085\text{ m} = \mathbf{8.5\text{ mm}}$$
   In body tissue at $3\text{ MHz}$, the wavelength shrinks to a fraction of a millimeter ($\approx 0.5\text{ mm}$).
2. **High Directionality (Sharp, Focused Beams):** Because its wavelength is so small compared to ordinary apertures, ultrasound undergoes minimal diffraction and can be focused into tight, narrow, pencil-like directional beams—much like a focused laser pointer.
3. **High Reflection from Small Obstacles:** Waves reflect efficiently only from boundaries comparable to or larger than their wavelength. Because ultrasonic wavelengths are microscopic, ultrasound reflects sharply off tiny internal structures, small cracks, and microscopic interfaces.
4. **High Energy Transmission:** High-frequency waves execute millions of mechanical cycles per second, transferring significant kinetic energy to small volumes.
5. **Generation via Piezoelectric Crystals:** Ultrasound is generated using **piezoelectric materials** (such as quartz or lead zirconate titanate ceramics). When an oscillating high-frequency alternating electric voltage is applied across the crystal, it expands and contracts rapidly at the same frequency, launching ultrasonic pressure waves into the adjacent medium.

---

### Crucial Concept: Constant Speed, Variable Frequency

**Ultrasound does not propagate faster than audible sound in a given medium.** 

In room air, both a $100\text{ Hz}$ bass hum and a $5\text{ MHz}$ ultrasound pulse propagate at the exact same velocity: approximately $340\text{ m/s}$. Speed is an intrinsic property of the medium. In $v = f\lambda$, as frequency $f$ skyrockets, wavelength $\lambda$ decreases proportionally to keep $v$ constant.

---

## Part D: Practical Applications of Ultrasound

### 1. Medical Imaging: Peering Inside the Human Body

Ultrasound imaging (**sonography**) is one of the most widely used diagnostic modalities in modern medicine:

- **Obstetrics:** Monitoring fetal development, detecting gestational age, and assessing fetal organ growth.
- **Cardiology (Echocardiography):** Visualizing heart valves, measuring chamber dimensions, and tracking blood flow velocity in real time.
- **Abdominal Diagnostics:** Evaluating the liver, gall bladder, pancreas, and kidneys for cysts, stones, or tumors.

**How Sonography Works:** The handheld probe transmits short, highly focused ultrasonic pulses into the patient's body. As the pulse penetrates through various tissues, it encounters boundaries between structures with differing acoustic properties (e.g., between muscle and kidney tissue, or soft tissue and bone). At each acoustic boundary, a fraction of the wave energy reflects back as an **echo**, while the remainder continues deeper. 

The probe's piezoelectric crystal captures the return echoes and converts them into electronic signals. The machine measures the exact time-of-flight delay for each echo, computes the boundary depth using $d = \frac{v \times t}{2}$, and maps the data into a real-time grayscale cross-sectional image.

**Patient Safety:** Ultrasound uses harmless mechanical sound waves and involves **zero ionizing radiation** (unlike X-rays or CT scans, which pose radiation risks). Consequently, ultrasound is entirely safe for delicate tissues and developing fetuses.

**Other Medical Applications:**
- **Lithotripsy:** Focused high-energy shockwaves shatter brittle kidney stones into fine sand-like particles that can pass naturally through the urinary tract without surgery.
- **Ultrasonic Physiotherapy:** Low-intensity ultrasound produces deep therapeutic thermal heating in injured muscular ligaments and joints.

---

### 2. Industrial and Material Applications

- **Ultrasonic Precision Cleaning:** Delicate components (such as luxury watches, fine jewelry, surgical instruments, and microelectronic silicon chips) are submerged in a solvent bath agitated by $20 - 40\text{ kHz}$ ultrasound. The violent pressure fluctuations produce millions of microscopic cavitation bubbles that collapse violently, stripping grease, dust, and particulate contaminants from inaccessible crevices without scratching delicate surfaces.
- **Non-Destructive Flaw Detection:** Structural metal blocks, aircraft wings, pipelines, and bridge girders are inspected using ultrasonic flaw detectors. An ultrasonic pulse is injected into the metal. In a solid, defect-free block, the pulse travels to the far boundary and returns as a single back-wall echo. If an internal crack, void, or slag inclusion exists, an **early reflection** arrives before the back-wall echo. The transit time of this unexpected echo reveals the precise internal depth of the structural defect.

---

### 3. SONAR: Underwater Navigation and Ranging

**SONAR** stands for **SO**und **N**avigation **A**nd **R**anging. 

Because electromagnetic signals (such as radio waves and radar) are rapidly absorbed and dissipated within meters of entering seawater, surface ships and submarines rely on acoustic waves for underwater detection.

A shipboard SONAR system consists of two primary components mounted on the hull:
1. **Transmitter:** Generates and projects a high-power beam of ultrasonic pulses downward into the ocean.
2. **Receiver / Detector:** Captures the return echoes reflected from the seabed, submarines, shipwrecks, or fish schools, converting the mechanical vibrations into electrical signals.

Because sound travels through seawater at approximately **$1500\text{ m/s}$**, the depth $d$ of the reflecting obstacle is computed from the recorded round-trip time delay $t$:

$$\mathbf{d = \frac{v \times t}{2}} \quad (v \approx 1500\text{ m/s})$$

```
 Ship Hull with SONAR System
 ┌──────────────────────┐
 │ Transmitter  Receiver│
 └───┬──────────────┬───┘
     │ ↓ Pulse      ↑ Echo
     │ ↓            ↑
 ~ ~ │ ~ ~ ~ ~ ~ ~  │ ~ ~ ~ ~ ~ ~ ~  Seawater Medium (v ≈ 1500 m/s)
     │ ↓            ↑
     │ ↓            ↑             d = (v × t) / 2
 ════╧══════════════╧══════════════  Seabed / Submerged Submarine
```

> **Figure 6.2** – Underwater SONAR operation: the transmitter projects an ultrasonic pulse toward the sea floor, and the receiver logs the return echo. Dividing total round-trip travel by 2 yields the exact water depth.

**Key Applications of SONAR:**
- Measuring ocean depth (**bathymetry**).
- Mapping underwater topography (trenches, seamounts, continental shelves).
- Detecting submerged submarines and navigating marine hazards (icebergs, shoals, shipwrecks).
- Commercial fishing: locating large schools of fish.

**Why Ultrasound Is Used Instead of Audible Sound:**
1. **High Directionality:** High frequency and short wavelength prevent the beam from spreading laterally, directing acoustic energy into a narrow exploratory ray.
2. **Minimal Diffraction:** The short wavelength reflects sharply from small underwater obstacles without bending around them.
3. **Inaudibility:** It operates silently without generating deafening acoustic noise for the ship's crew.

**Radar vs. SONAR:** Radar utilizes **electromagnetic radio waves** through the atmosphere; SONAR utilizes **mechanical sound waves (ultrasound)** underwater.

---

### 4. Biological Echolocation in Nature

Insect-eating **bats** hunt in total nocturnal darkness using **biological SONAR (echolocation)**. A flying bat emits high-frequency ultrasonic clicks and squeaks ($50 - 100\text{ kHz}$) from its mouth or nose. These pulses reflect off flying moths, mosquitoes, and cave walls, returning as echoes to the bat's specialized, highly sensitive ears. By analyzing the time delay, frequency shift, and loudness of the returning echoes, the bat's brain constructs a detailed three-dimensional spatial map of its surroundings, pinpointing a flying insect's location, speed, and trajectory down to the millimeter!

Similarly, **dolphins**, porpoises, and toothed whales navigate murky coastal waters and hunt fish using ultrasonic echolocation clicks ($100 - 150\text{ kHz}$).

---

## Part E: Resolving Sophia's Ultrasound Mystery

Dr. Hayes explained the physics to Sophia: "Our sonography transducer operates at a frequency of **$3\text{ MHz}$** ($3 \times 10^6\text{ Hz}$). Human ears cut off at $20\text{ kHz}$, so you cannot hear it. But it is very real acoustic energy traveling into the body."

Dr. Hayes continued, "In soft human tissue, sound travels at approximately **$1540\text{ m/s}$** (since soft tissue is largely water). Let us calculate the wavelength of this ultrasound:"

$$\lambda = \frac{v}{f} = \frac{1540\text{ m/s}}{3 \times 10^6\text{ Hz}} = 0.000513\text{ m} \approx \mathbf{0.51\text{ mm}}$$

"Because the wavelength is roughly half a millimeter, the beam behaves like a razor-sharp ray, reflecting off boundaries between different tissue layers. When the pulse encounters the surface of your mother's kidney, an echo bounces back. The probe detects that echo. For instance, if an echo returns after $65\text{ microseconds}$ ($65\text{ }\mu\text{s}$):"

$$d = \frac{v \times t}{2} = \frac{1540\text{ m/s} \times 65 \times 10^{-6}\text{ s}}{2} = \frac{0.1001\text{ m}}{2} \approx 0.05\text{ m} = \mathbf{5\text{ cm}}$$

"The computer registers a tissue boundary exactly $5\text{ cm}$ below the skin. The machine repeats this calculation for thousands of pulses every second, assembling the echoes into a detailed, moving anatomical picture."

**Check:** $1540 \times 65 \times 10^{-6} = 0.1001\text{ m}$; dividing by 2 yields $0.05\text{ m} = 5\text{ cm}$ ✅.

Sophia asked, "And why did you apply the clear gel first?"

Dr. Hayes smiled. "Because if even a microscopic film of air remains between the probe and the skin, ultrasound reflects completely off the air boundary and cannot enter the body. The acoustic gel creates an airtight bridge, allowing the sound waves to transmit smoothly into the tissues."

```
        Ultrasonic Transducer Probe
                 │
                 │ ↓ Transmitted Pulse    ↑ Reflected Echo
                 │
  ────────── Skin Surface (Acoustic Gel Interface) ──────────
                 │ ↓                      ↑ (Echo from Boundary 1)
           Muscle Layer
  ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄│┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ Acoustic Boundary 1
                 │ ↓                      ↑ (Echo from Boundary 2)
           Kidney Cortex
  ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄│┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ Acoustic Boundary 2
```

> **Figure 6.3** – Medical sonography: ultrasound pulses reflect off internal tissue interfaces with time-of-flight delays proportional to depth. The computer synthesizes these reflections into an anatomical image.

---

## Part F: Solved Examples

In all calculations below, assume $v = 340\text{ m/s}$ in air and $v = 1500\text{ m/s}$ in seawater unless specified otherwise.

**Example 1 (Classifying Frequencies):** Classify the following acoustic frequencies as infrasound, audible sound, or ultrasound: $10\text{ Hz}$, $50\text{ Hz}$, $15\text{ kHz}$, $25\text{ kHz}$, and $100\text{ kHz}$.

- Standard audible bounds: $20\text{ Hz}$ to $20{,}000\text{ Hz}$ ($20\text{ kHz}$).
- $10\text{ Hz}$: $10\text{ Hz} < 20\text{ Hz} \implies \mathbf{Infrasound}$.
- $50\text{ Hz}$: $20\text{ Hz} < 50\text{ Hz} < 20{,}000\text{ Hz} \implies \mathbf{Audible\text{ }sound}$.
- $15\text{ kHz}$ ($15{,}000\text{ Hz}$): $20\text{ Hz} < 15{,}000\text{ Hz} < 20{,}000\text{ Hz} \implies \mathbf{Audible\text{ }sound}$.
- $25\text{ kHz}$ ($25{,}000\text{ Hz}$): $25{,}000\text{ Hz} > 20{,}000\text{ Hz} \implies \mathbf{Ultrasound}$.
- $100\text{ kHz}$ ($100{,}000\text{ Hz}$): $100{,}000\text{ Hz} > 20{,}000\text{ Hz} \implies \mathbf{Ultrasound}$.

**Check:** Comparison against standard biological boundaries verified ✅.

**Example 2 (Acoustic Wavelengths in Air):** Calculate the wavelengths in ambient air ($v = 340\text{ m/s}$) for: (a) an infrasonic tremor at $17\text{ Hz}$, (b) an ultrasonic dog whistle at $34\text{ kHz}$, and (c) an insect-hunting bat pulse at $85\text{ kHz}$.

- (a) $\lambda = \frac{v}{f} = \frac{340\text{ m/s}}{17\text{ Hz}} = \mathbf{20\text{ m}}$
- (b) $\lambda = \frac{v}{f} = \frac{340\text{ m/s}}{34{,}000\text{ Hz}} = 0.01\text{ m} = \mathbf{10\text{ mm}}$
- (c) $\lambda = \frac{v}{f} = \frac{340\text{ m/s}}{85{,}000\text{ Hz}} = 0.004\text{ m} = \mathbf{4\text{ mm}}$

**Check:** $17 \times 20 = 340$ ✅; $34{,}000 \times 0.01 = 340$ ✅; $85{,}000 \times 0.004 = 340$ ✅. Note the vast range: infrasonic waves span tens of meters, while ultrasonic waves span millimeters.

**Example 3 (Measuring Ocean Depth Using SONAR):** A research vessel's SONAR transmits an ultrasonic pulse into seawater ($v = 1500\text{ m/s}$). Calculate the seabed depth if return echoes are logged after: (a) $1.2\text{ s}$, (b) $4.0\text{ s}$, and (c) $0.5\text{ s}$.

- (a) $d = \frac{v \times t}{2} = \frac{1500\text{ m/s} \times 1.2\text{ s}}{2} = \frac{1800\text{ m}}{2} = \mathbf{900\text{ m}}$
- (b) $d = \frac{v \times t}{2} = \frac{1500\text{ m/s} \times 4.0\text{ s}}{2} = \frac{6000\text{ m}}{2} = \mathbf{3000\text{ m}}$ ($3.0\text{ km}$)
- (c) $d = \frac{v \times t}{2} = \frac{1500\text{ m/s} \times 0.5\text{ s}}{2} = \frac{750\text{ m}}{2} = \mathbf{375\text{ m}}$

**Check:** In (b), round-trip path is $2 \times 3000\text{ m} = 6000\text{ m}$; $\frac{6000}{1500} = 4.0\text{ s}$ ✅.

**Example 4 (Submarine Detection Time Delay):** A naval patrol ship detects a submarine cruising at a straight-line underwater distance of $4.5\text{ km}$. How long after emitting a SONAR ping will the return echo be received? ($v = 1500\text{ m/s}$.)

- $d = 4.5\text{ km} = 4500\text{ m}$.
- Total round-trip distance: $2d = 2 \times 4500\text{ m} = 9000\text{ m}$.
- $t = \frac{2d}{v} = \frac{9000\text{ m}}{1500\text{ m/s}} = \mathbf{6\text{ s}}$

**Check:** $d = \frac{1500 \times 6}{2} = 4500\text{ m} = 4.5\text{ km}$ ✅.

**Example 5 (Locating a School of Fish):** A fishing trawler detects a return echo from a shoal of tuna $0.2\text{ s}$ after transmitting an ultrasonic ping. Determine the depth of the fish school.

- $d = \frac{v \times t}{2} = \frac{1500\text{ m/s} \times 0.2\text{ s}}{2} = \frac{300\text{ m}}{2} = \mathbf{150\text{ m}}$

**Check:** $2 \times 150\text{ m} = 300\text{ m}$; $\frac{300}{1500} = 0.2\text{ s}$ ✅.

**Example 6 (Bat Hunting a Flying Moth):** A bat flying through a forest emits an ultrasonic pulse toward a moth located $3.4\text{ m}$ away. How much time elapses before the bat hears the return echo? (In air, $v = 340\text{ m/s}$.)

- Total acoustic path length: $2d = 2 \times 3.4\text{ m} = 6.8\text{ m}$.
- $t = \frac{2d}{v} = \frac{6.8\text{ m}}{340\text{ m/s}} = \mathbf{0.02\text{ s}}$ ($20\text{ ms}$)

**Check:** $d = \frac{340 \times 0.02}{2} = 3.4\text{ m}$ ✅.

**Example 7 (Bat Ultrasonic Wavelength):** A bat emits an echolocation pulse at $50\text{ kHz}$. Calculate its wavelength in air ($v = 340\text{ m/s}$).

- $f = 50\text{ kHz} = 50{,}000\text{ Hz}$.
- $\lambda = \frac{v}{f} = \frac{340\text{ m/s}}{50{,}000\text{ Hz}} = 0.0068\text{ m} = \mathbf{6.8\text{ mm}}$

**Check:** $50{,}000\text{ Hz} \times 0.0068\text{ m} = 340\text{ m/s}$ ✅. Because the wavelength ($6.8\text{ mm}$) is smaller than the wingspan of a moth, the insect acts as an efficient acoustic reflector.

**Example 8 (Oscillation Frequency and Period of a Medical Probe):** A medical ultrasound scanner operates at $2\text{ MHz}$. How many mechanical oscillations occur in 1 second? Calculate the time period of one single vibration.

- $f = 2\text{ MHz} = 2 \times 10^6\text{ Hz} \implies \mathbf{2 \times 10^6\text{ oscillations per second}}$ ($2\text{ million cycles}$).
- $T = \frac{1}{f} = \frac{1}{2 \times 10^6\text{ Hz}} = 5 \times 10^{-7}\text{ s} = \mathbf{0.5\text{ }\mu\text{s}}$

**Check:** $f \times T = (2 \times 10^6) \times (5 \times 10^{-7}) = 1.0$ ✅.

**Example 9 (Ultrasonic Flaw Detection in Steel):** An ultrasonic flaw detector is placed against a steel engine block in which the speed of sound is $5000\text{ m/s}$. An unexpected internal echo is recorded after $20\text{ }\mu\text{s}$. At what depth does the flaw lie?

- $t = 20\text{ }\mu\text{s} = 20 \times 10^{-6}\text{ s}$.
- $d = \frac{v \times t}{2} = \frac{5000\text{ m/s} \times 20 \times 10^{-6}\text{ s}}{2} = \frac{0.1\text{ m}}{2} = \mathbf{0.05\text{ m} = 5\text{ cm}}$

**Check:** Round trip = $2 \times 0.05\text{ m} = 0.1\text{ m}$; $t = \frac{0.1}{5000} = 20 \times 10^{-6}\text{ s}$ ✅.

**Example 10 (Determining Speed of Sound in Seawater):** A research vessel's SONAR sends an ultrasonic signal to a known flat seabed located exactly $750\text{ m}$ below. The echo returns in $1.0\text{ s}$. Calculate the exact speed of sound in this seawater layer.

- Total round-trip distance: $2d = 2 \times 750\text{ m} = 1500\text{ m}$.
- $v = \frac{2d}{t} = \frac{1500\text{ m}}{1.0\text{ s}} = \mathbf{1500\text{ m/s}}$

**Check:** $d = \frac{1500 \times 1.0}{2} = 750\text{ m}$ ✅.

**Example 11 (Calculating Echo Delay for a Deep Organ Interface):** In Sophia's clinic visit, suppose a deeper tissue boundary lies $7.7\text{ cm}$ below the surface. If sound propagates through tissue at $1540\text{ m/s}$, calculate the echo return delay.

- $d = 7.7\text{ cm} = 0.077\text{ m}$.
- Total round-trip distance: $2d = 2 \times 0.077\text{ m} = 0.154\text{ m}$.
- $t = \frac{2d}{v} = \frac{0.154\text{ m}}{1540\text{ m/s}} = 1 \times 10^{-4}\text{ s} = \mathbf{100\text{ }\mu\text{s}}$

**Check:** $d = \frac{1540 \times 100 \times 10^{-6}}{2} = 0.077\text{ m} = 7.7\text{ cm}$ ✅. Deeper structures take longer to return echoes.

---

## Part G: Safe Utilization and Exposure

Like all forms of physical energy, exposure to extreme acoustic intensities can cause harm:
- **High-Intensity Ultrasound:** Delivers intense vibrational energy that can cause localized cavitation, tissue heating, or mechanical cell disruption. While destructive when harnessed intentionally in medical lithotripsy (to fracture kidney stones), diagnostic imaging strictly regulates acoustic output to minimal, harmless intensity levels.
- **High-Intensity Infrasound:** Extreme infrasonic pressure pulses from giant industrial turbines or rocket launches can cause dizziness, nausea, disorientation, or resonance vibrations in internal organs. Consequently, industrial installations require acoustic baffling.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Believing ultrasound is not genuine sound because humans cannot hear it.**
   Human hearing is merely a biological sensory threshold. Ultrasound consists of identical mechanical longitudinal compression waves in matter; its frequency simply exceeds the receptive limits of the human cochlea.

2. **Mistake 2: Assuming ultrasound travels faster through air than audible sound.**
   Wave speed in a given medium is completely independent of frequency. Both audible speech ($500\text{ Hz}$) and medical ultrasound ($3\text{ MHz}$) propagate at approximately $340\text{ m/s}$ in ambient air.

3. **Mistake 3: Forgetting to divide by 2 in SONAR and ultrasound depth equations.**
   Because $t$ represents the round-trip transit time (down and back), always divide by 2: $d = \frac{v \times t}{2}$.

4. **Mistake 4: Confusing SONAR with Radar.**
   SONAR uses **acoustic sound waves (ultrasound)** and operates primarily underwater. Radar uses **electromagnetic radio waves** and operates through the atmosphere.

5. **Mistake 5: Assuming ultrasound scans expose patients to ionizing radiation.**
   Ultrasound relies purely on non-ionizing mechanical sound vibrations and carries zero radiation risk, making it completely safe for pregnancy scans.

6. **Mistake 6: Using the speed of sound in air (340 m/s) for underwater SONAR problems.**
   Always use the speed of sound in seawater ($\approx 1500\text{ m/s}$) for marine SONAR calculations. Using $340\text{ m/s}$ underwater produces an error of over $400\%$!

---

## Quick Recap

- The human **audible range** spans from **$20\text{ Hz}$ to $20{,}000\text{ Hz}$ ($20\text{ kHz}$)**. Frequencies $< 20\text{ Hz}$ are **infrasound**; frequencies $> 20\text{ kHz}$ are **ultrasound**.
- Auditory upper thresholds decrease with age. Animals possess diverse hearing ranges: dogs ($\le 45\text{ kHz}$), cats ($\le 64\text{ kHz}$), bats ($\le 110\text{ kHz}$), dolphins ($\le 150\text{ kHz}$), elephants/whales ($\ge 5 - 15\text{ Hz}$, infrasonic).
- **Infrasound:** Generated by earthquakes, volcanoes, thunder, large machinery, and elephants. Long wavelengths ($34\text{ m}$ at $10\text{ Hz}$) experience minimal absorption, allowing propagation across immense distances.
- **Ultrasound:** Characterized by high frequencies, microscopic wavelengths, sharp directional beams, strong boundary reflections, and high energy. Generated by piezoelectric crystals.
- Ultrasound travels at the exact same speed as audible sound in any given medium.
- **Key Applications of Ultrasound:**
  - **Medical:** Diagnostic sonography (fetal, cardiac, abdominal), lithotripsy (kidney stone destruction), physiotherapy.
  - **Industrial:** Cavitation cleaning of delicate machinery, non-destructive metal flaw detection.
  - **Marine SONAR:** Bathymetric depth measurement, mapping topography, submarine navigation ($d = \frac{v \times t}{2}$, $v \approx 1500\text{ m/s}$).
  - **Biological:** Echolocation in bats and marine mammals.
- High-intensity exposure requires safety limits: diagnostic ultrasound is maintained at safe, non-destructive low intensities.

---

## Practice Questions

*(Assume $v = 340\text{ m/s}$ in air and $v = 1500\text{ m/s}$ in seawater unless specified otherwise.)*

1. Classify each acoustic frequency as infrasound, audible sound, or ultrasound: $5\text{ Hz}$, $18\text{ kHz}$, $30\text{ kHz}$, and $2\text{ MHz}$.

2. Calculate the wavelength in air of an ultrasonic wave vibrating at $25\text{ kHz}$. Express your answer in millimeters ($\text{mm}$).

3. Calculate the wavelength in air of an infrasonic seismic tremor vibrating at $5\text{ Hz}$. Explain physically why infrasound can propagate across vast geographic distances.

4. A marine research ship sends an ultrasonic SONAR pulse toward the seabed and detects the return echo after $2\text{ s}$. Calculate the depth of the sea floor.

5. At a specific coastal bay, the water depth is $1200\text{ m}$. How many seconds after transmitting a SONAR pulse will the vessel detect the return echo?

6. A hunting bat emits an ultrasonic pulse at $100\text{ kHz}$.
   (a) Calculate its wavelength in ambient air.
   (b) An insect is hovering $1.7\text{ m}$ away from the bat. How much time elapses before the bat hears the return echo?

7. A medical diagnostic transducer operates at an acoustic frequency of $5\text{ MHz}$.
   (a) How many mechanical oscillations occur in 1 second?
   (b) Calculate the time period of one complete vibration in microseconds ($\mu\text{s}$).

8. A dolphin emits an echolocation click at $120\text{ kHz}$ in seawater. Find its wavelength in the ocean.

9. An ultrasonic flaw detector is applied to a structural titanium alloy block ($v = 5000\text{ m/s}$). An unexpected echo from an internal material void arrives after $30\text{ }\mu\text{s}$. How deep within the block is the void located?

10. An African elephant emits an infrasonic contact call at $15\text{ Hz}$.
    (a) Can a human hear this call directly? Justify your answer.
    (b) Calculate its wavelength in air.

11. State whether each statement is True or False:
    (a) Ultrasound travels significantly faster through ambient air than audible sound.
    (b) SONAR operates using high-frequency electromagnetic radio waves.
    (c) Medical ultrasound imaging poses risks of ionizing radiation.
    (d) Elderly adults generally have a lower high-frequency hearing limit than young children.

12. State three key physical reasons why ultrasound, rather than audible sound, is selected for marine SONAR depth sounding.

13. A student attempts to calculate ocean depth from a SONAR echo delay of $3\text{ s}$. He uses the speed of sound in air ($340\text{ m/s}$) and obtains a depth of $510\text{ m}$. Identify his conceptual error and calculate the correct ocean depth.

14. In our clinical narrative, explain how the sonography probe constructs a detailed cross-sectional image of an internal organ even though the ultrasound waves cannot be heard.

### Answers

1. $5\text{ Hz} < 20\text{ Hz} \implies \mathbf{Infrasound}$.
   $18\text{ kHz} = 18{,}000\text{ Hz}$ ($20\text{ Hz} - 20\text{ kHz}$) $\implies \mathbf{Audible\text{ }sound}$.
   $30\text{ kHz} = 30{,}000\text{ Hz} > 20\text{ kHz} \implies \mathbf{Ultrasound}$.
   $2\text{ MHz} = 2 \times 10^6\text{ Hz} > 20\text{ kHz} \implies \mathbf{Ultrasound}$.

2. $f = 25\text{ kHz} = 25{,}000\text{ Hz}$.
   $\lambda = \frac{v}{f} = \frac{340\text{ m/s}}{25{,}000\text{ Hz}} = 0.0136\text{ m} = \mathbf{13.6\text{ mm}}$.
   Check: $25{,}000\text{ Hz} \times 0.0136\text{ m} = 340\text{ m/s}$ ✅.

3. $\lambda = \frac{v}{f} = \frac{340\text{ m/s}}{5\text{ Hz}} = \mathbf{68\text{ m}}$.
   Infrasound propagates across immense distances because its enormous wavelength ($68\text{ m}$) easily diffracts around obstacles and experiences minimal atmospheric absorption and dissipation.

4. $d = \frac{v \times t}{2} = \frac{1500\text{ m/s} \times 2\text{ s}}{2} = \mathbf{1500\text{ m}}$.
   Check: $2 \times 1500\text{ m} = 3000\text{ m}$; $\frac{3000}{1500} = 2\text{ s}$ ✅.

5. Total round-trip distance: $2d = 2 \times 1200\text{ m} = 2400\text{ m}$.
   $t = \frac{2d}{v} = \frac{2400\text{ m}}{1500\text{ m/s}} = \mathbf{1.6\text{ s}}$.
   Check: $d = \frac{1500 \times 1.6}{2} = 1200\text{ m}$ ✅.

6. (a) $f = 100\text{ kHz} = 100{,}000\text{ Hz}$.
   $\lambda = \frac{v}{f} = \frac{340\text{ m/s}}{100{,}000\text{ Hz}} = 0.0034\text{ m} = \mathbf{3.4\text{ mm}}$.
   (b) Round-trip distance: $2d = 2 \times 1.7\text{ m} = 3.4\text{ m}$.
   $t = \frac{2d}{v} = \frac{3.4\text{ m}}{340\text{ m/s}} = \mathbf{0.01\text{ s}}$ ($10\text{ ms}$).
   Check: $d = \frac{340 \times 0.01}{2} = 1.7\text{ m}$ ✅.

7. (a) $f = 5\text{ MHz} = 5 \times 10^6\text{ Hz} \implies \mathbf{5 \times 10^6\text{ oscillations per second}}$.
   (b) $T = \frac{1}{f} = \frac{1}{5 \times 10^6\text{ Hz}} = 2 \times 10^{-7}\text{ s} = \mathbf{0.2\text{ }\mu\text{s}}$.
   Check: $(5 \times 10^6) \times (2 \times 10^{-7}) = 1.0$ ✅.

8. $f = 120\text{ kHz} = 120{,}000\text{ Hz}$.
   $\lambda = \frac{v}{f} = \frac{1500\text{ m/s}}{120{,}000\text{ Hz}} = 0.0125\text{ m} = \mathbf{12.5\text{ mm}}$.
   Check: $120{,}000\text{ Hz} \times 0.0125\text{ m} = 1500\text{ m/s}$ ✅.

9. $t = 30\text{ }\mu\text{s} = 30 \times 10^{-6}\text{ s}$.
   $d = \frac{v \times t}{2} = \frac{5000\text{ m/s} \times 30 \times 10^{-6}\text{ s}}{2} = \frac{0.15\text{ m}}{2} = 0.075\text{ m} = \mathbf{7.5\text{ cm}}$.
   Check: $2 \times 0.075\text{ m} = 0.15\text{ m}$; $\frac{0.15}{5000} = 30 \times 10^{-6}\text{ s}$ ✅.

10. (a) **No**, humans cannot hear it because $15\text{ Hz}$ lies below the human hearing threshold of $20\text{ Hz}$ (it is infrasonic).
    (b) $\lambda = \frac{v}{f} = \frac{340\text{ m/s}}{15\text{ Hz}} \approx \mathbf{22.7\text{ m}}$.
    Check: $15\text{ Hz} \times 22.67\text{ m} \approx 340\text{ m/s}$ ✅.

11. (a) **False** ❌: Both travel at the exact same velocity in a given medium ($340\text{ m/s}$ in air).
    (b) **False** ❌: SONAR uses mechanical acoustic ultrasound; radar uses electromagnetic radio waves.
    (c) **False** ❌: Ultrasound consists of harmless mechanical vibrations and carries zero ionizing radiation.
    (d) **True** ✅: High-frequency cochlear receptors degrade progressively with age.

12. (1) Ultrasound can be focused into tight, narrow directional beams without spreading laterally. (2) Its microscopic wavelength allows it to reflect sharply off small submerged objects. (3) It is completely inaudible to human ears, operating silently on board ship.

13. The student used the velocity of sound in air ($340\text{ m/s}$) instead of the velocity of sound in seawater ($1500\text{ m/s}$).
    Correct calculation: $d = \frac{v \times t}{2} = \frac{1500\text{ m/s} \times 3\text{ s}}{2} = \frac{4500\text{ m}}{2} = \mathbf{2250\text{ m}}$ ($2.25\text{ km}$).

14. The probe injects narrow ultrasound pulses into the body. As the pulse traverses internal tissues, acoustic echoes reflect back from boundaries separating different anatomical structures. The probe detects these return echoes, and the workstation calculates their depths using $d = \frac{v \times t}{2}$. By plotting thousands of depth-mapped echo points, the computer synthesizes an anatomical cross-sectional image.

---

Now you can explain to Sophia how inaudible ultrasound generates real-time medical images: by projecting focused acoustic beams and mapping the time-of-flight of microscopic boundary echoes!

**What's Next?** We have investigated the properties, speeds, and applications of sound across nature and technology. But how does the human body detect and process sound? How does the delicate biological architecture of our ears convert physical mechanical vibrations into neural signals in the brain? In Topic 7, we explore the **anatomy of the human ear and the critical impact of noise pollution**.
