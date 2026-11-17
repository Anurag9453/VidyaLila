# Chapter: Sound (Part 4)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [sound-part3.md](sound-part3.md)** (which established amplitude, wavelength, frequency, time period, and $v = f\lambda$). The physical foundation of sound is in [sound.md](sound.md). For foundational kinematics ($\text{speed} = \text{distance} / \text{time}$), refer to [motion-part3.md](../motion/motion-part3.md).
> **Topics covered in this file:**
> 4. Speed of Sound, Echo, and Reverberation

---

# Topic 4: Speed of Sound, Echo, and Reverberation

In Topic 3, we derived the universal wave equation, $v = f\lambda$, discovering that **wave speed is governed strictly by the medium**, while frequency is set by the vibrating source. But what numerical values does sound speed actually reach in real-world materials? How significantly does it change between air, water, and steel? And what happens when an advancing sound wave encounters a massive solid barrier like a canyon wall or a concrete auditorium ceiling?

In this topic, we investigate the propagation speed of sound across different states of matter, analyze the influence of temperature, explore acoustic **reflection**, and establish the precise mathematical laws governing **echoes** and **reverberation**.

We apply the standard linear speed equation from kinematics:

$$\text{Speed} = \frac{\text{Distance}}{\text{Time}} \implies v = \frac{d}{t} \quad \text{and} \quad d = v \times t$$

**Throughout this topic, we assume a standard speed of sound in air of $v = 340\text{ m/s}$**, unless a different medium or temperature is explicitly stated.

---

## Echoes in the Mountain Canyon

During a summer geology expedition in the Rocky Mountains, outdoor instructor Dr. Carter led high school student Liam and their hiking group along a trail overlooking a vast, sheer rock canyon. Across the deep valley stood a towering, flat vertical granite cliff.

Dr. Carter paused near the canyon rim and said, "Liam, shout a loud, sharp 'hello' toward the opposite cliff face."

Cupping his hands around his mouth, Liam yelled with all his strength: "Hello!" 

For a brief moment, complete silence hung over the gorge. Then, suddenly, a crisp, identical voice bounced back across the chasm: "...*hello!*..."

Liam's eyes widened in amazement. "Who yelled back? It sounded just like me!"

"It *was* you," Dr. Carter laughed. "Your acoustic wave traveled across the canyon, bounced off the rigid granite wall, and returned to your ears. That reflected sound is called an **echo**. Did you notice that exactly **2.5 seconds** elapsed between your shout and the arrival of the echo?"

Liam thought carefully. "Dr. Carter, does that mean we can calculate the exact distance to that granite cliff without physically walking across the gorge?"

"Precisely," Dr. Carter replied. "And later this evening, when the approaching mountain storm rolls in, we will use the exact same acoustic principles to determine how far away the lightning is striking."

Let us analyze the physics behind both phenomena.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Speed of sound ($v$)** | The linear distance traversed by an acoustic wave per unit time | Approximately $340\text{ m/s}$ in ambient air |
| **Reflection of sound** | The phenomenon where an advancing sound wave strikes a surface and bounces back into the original medium | Sound bouncing off a cliff or concrete wall |
| **Echo** | A distinct, separate repetition of an original sound heard after reflection from a distant obstacle | Hearing "hello" return 2.5 seconds after shouting across a canyon |
| **Persistence of hearing** | The physiological characteristic of the human auditory system where the sensation of a sound lingers in the brain for approximately $0.1\text{ s}$ | Two sounds arriving less than $0.1\text{ s}$ apart merge into a single perceived sound |
| **Reverberation** | The persistence and lingering of sound in an enclosed space due to repeated, successive reflections from walls, ceiling, and floor | The lingering acoustic hum inside an empty cathedral or gymnasium |
| **Sound-absorbing material** | Porous, soft materials that absorb incident acoustic energy rather than reflecting it | Heavy draperies, carpets, upholstered seating, acoustic foam |
| **Soundboard (sounding board)** | A curved reflective acoustic surface positioned behind a speaker or orchestra to project sound forward toward the audience | The parabolic acoustic shell behind a concert stage |

---

## Part A: Speed of Sound, Lightning, and Thunder

### Sound Is Fast, but Light Is Vastly Faster

In ambient air, sound propagates at approximately $340\text{ m/s}$. To human senses, this appears rapid:

$$340\text{ m/s} = 340 \times \frac{3600}{1000}\text{ km/h} = 1224\text{ km/h}$$

This is faster than the cruising speed of a commercial airliner! 

However, compared to the speed of light, sound is extraordinarily sluggish. Electromagnetic radiation (including visible light) propagates through the atmosphere at approximately $3 \times 10^8\text{ m/s}$ ($300{,}000{,}000\text{ m/s}$, or $300{,}000\text{ km/s}$). Light travels roughly one million times faster than sound in air!

During a thunderstorm, electrical discharge produces a sudden blinding flash of light and an intense shockwave of sound (thunder) at the **exact same instant and cloud location**. Because light travels at $3 \times 10^8\text{ m/s}$, the optical flash traverses a distance of $2\text{ km}$ in a mere:

$$t_{\text{light}} = \frac{2000\text{ m}}{3 \times 10^8\text{ m/s}} \approx 0.0000067\text{ s}$$

This transit time is practically zero to human perception; we observe the lightning flash almost instantaneously. In sharp contrast, the acoustic thunderclap takes several full seconds to traverse that exact same distance.

---

### Liam's Storm Calculation

As evening set in, dark storm clouds gathered over the ridge, and the hikers sought shelter under a reinforced wooden trail pavilion. Suddenly, a brilliant bolt of lightning illuminated the valley.

Dr. Carter instructed, "Start your stopwatch right now, Liam!"

Liam clicked the stopwatch: one, two, three, four, five, six seconds. A low, rolling rumble of thunder shook the pavilion: exactly **6 seconds** after the flash!

Dr. Carter said, "Now calculate how far away that lightning bolt struck. Since light arrived virtually instantaneously, the entire 6-second delay belongs to the sound wave."

- Given: $v = 340\text{ m/s}$, $t = 6\text{ s}$
- $d = v \times t = 340\text{ m/s} \times 6\text{ s} = \mathbf{2040\text{ m}}$ (approximately $2.04\text{ km}$)

**Check:** $\frac{2040\text{ m}}{340\text{ m/s}} = 6\text{ s}$ ✅.

> **The Practical 3-Second Rule of Thumb:**
> Sound covers approximately $1000\text{ m}$ ($1\text{ km}$) every 3 seconds:
> $$340\text{ m/s} \times 3\text{ s} = 1020\text{ m} \approx 1\text{ km}$$
> Therefore: **every 3 seconds of delay between lightning and thunder represents approximately 1 kilometer of distance.**
> - $3\text{ seconds delay} \approx 1\text{ km}$
> - $6\text{ seconds delay} \approx 2\text{ km}$
> - $9\text{ seconds delay} \approx 3\text{ km}$

Liam reasoned, "If the time gap between consecutive flashes and thunderclaps is shrinking, that means the storm front is advancing directly toward us!" Dr. Carter nodded, "Exactly right."

---

## Part B: Factors Determining the Speed of Sound

### 1. Effect of the Medium

Sound is a mechanical disturbance transferred through particle collisions. The speed at which these collisions propagate depends directly on the **elastic modulus (stiffness)** and the **density** of the medium.

Representative approximate sound speeds across different media:

| Medium | State of Matter | Approximate Speed of Sound ($v$, m/s) |
|---|---|---|
| Air (dry, at 0 °C) | Gas | 331 |
| Air (dry, at 20 °C) | Gas | 343 |
| Hydrogen gas (at 0 °C) | Gas | 1270 |
| Fresh water (at 20 °C) | Liquid | 1480 – 1500 |
| Seawater (at 20 °C) | Liquid | 1530 |
| Ice | Solid | 3200 |
| Iron | Solid | 5100 |
| Glass (Pyrex) | Solid | 5640 |
| Steel | Solid | 5900 |
| Aluminium | Solid | 6400 |

This data reveals an undeniable physical hierarchy:

$$\mathbf{\text{Solids} > \text{Liquids} > \text{Gases}}$$

```
 Speed of Sound in Common Media (Each '#' represents approx. 250 m/s):

 Air (20 °C)    : # 343 m/s
 Water          : ###### 1500 m/s
 Iron           : #################### 5100 m/s
 Aluminium      : ########################## 6400 m/s
```

> **Figure 4.1** – Comparison of sound propagation speed across states of matter: slowest in compressible gases, intermediate in liquids, and fastest in rigid solids.

**Physical Explanation:** Sound propagates via intermolecular interactions. In rigid **solids**, atoms are locked into a stiff crystal lattice connected by strong chemical bonds. Displacing one atom instantly exerts massive restorative forces on its neighbors, transmitting kinetic disturbances extremely rapidly. In **liquids**, molecules are closely packed but free to slip past one another, resulting in intermediate transmission speeds. In **gases**, molecules are separated by vast empty distances, spending most of their time drifting freely between random collisions; consequently, acoustic disturbances propagate relatively slowly.

---

### 2. Effect of Temperature

Within a given gaseous medium, sound speed rises as temperature increases. As air warms, its molecules gain thermal kinetic energy and move at higher average velocities, enabling them to transmit mechanical collisions more rapidly.

At $0\text{ }^\circ\text{C}$, sound speed in dry air is $331\text{ m/s}$; at $20\text{ }^\circ\text{C}$, it rises to approximately $343\text{ m/s}$. The speed increases by roughly **$0.6\text{ m/s}$ for every $1\text{ }^\circ\text{C}$ rise in temperature**:

$$v \approx 331 + 0.6\,T$$

*(where $v$ is sound speed in $\text{m/s}$ and $T$ is air temperature in Celsius, $^\circ\text{C}$)*.

**Check:** At $T = 20\text{ }^\circ\text{C}$:
$$v \approx 331 + (0.6 \times 20) = 331 + 12 = 343\text{ m/s} \quad \checkmark$$

---

### 3. Factors That Do Not Affect Sound Speed

In a given medium at a constant temperature:
1. **Loudness (Amplitude):** A loud shout does **not** travel faster than a quiet whisper. A shout merely delivers greater energy and amplitude, allowing it to be heard across a greater distance, but both traverse any given 100-meter span in identical time.
2. **Frequency (Pitch):** A shrill soprano note ($1000\text{ Hz}$) and a deep bass note ($100\text{ Hz}$) travel at the exact same speed through the air. As frequency varies, wavelength adjusts proportionally ($\lambda = v / f$) to maintain constant speed.

*(Note: High humidity slightly lowers the average molecular weight of air, causing a slight increase in acoustic velocity, but this effect is minor compared to temperature.)*

---

## Part C: Solved Examples on Media and Temperature

**Example 1 (Transit Times Across Air, Water, and Iron):** An acoustic disturbance must travel across a distance of $3.06\text{ km}$. Calculate the transit time through: (a) air ($v = 340\text{ m/s}$), (b) fresh water ($v = 1500\text{ m/s}$), and (c) an iron rail ($v = 5100\text{ m/s}$).

- Convert distance to meters: $d = 3.06\text{ km} = 3060\text{ m}$.
- (a) Air: $t_{\text{air}} = \frac{d}{v_{\text{air}}} = \frac{3060\text{ m}}{340\text{ m/s}} = \mathbf{9\text{ s}}$
- (b) Water: $t_{\text{water}} = \frac{d}{v_{\text{water}}} = \frac{3060\text{ m}}{1500\text{ m/s}} = \mathbf{2.04\text{ s}}$
- (c) Iron: $t_{\text{iron}} = \frac{d}{v_{\text{iron}}} = \frac{3060\text{ m}}{5100\text{ m/s}} = \mathbf{0.6\text{ s}}$

**Check:** $340 \times 9 = 3060\text{ m}$ ✅; $1500 \times 2.04 = 3060\text{ m}$ ✅; $5100 \times 0.6 = 3060\text{ m}$ ✅. Transit time in iron is fifteen times shorter than in air!

**Example 2 (Gunshot Report):** A starter pistol is fired on an athletic field. A spectator seated $1.02\text{ km}$ away observes the puff of smoke. How long after seeing the smoke will the spectator hear the gunshot? (Take $v = 340\text{ m/s}$.)

- $d = 1.02\text{ km} = 1020\text{ m}$.
- $t = \frac{d}{v} = \frac{1020\text{ m}}{340\text{ m/s}} = \mathbf{3\text{ s}}$

**Check:** $340\text{ m/s} \times 3\text{ s} = 1020\text{ m}$ ✅.

**Example 3 (Ship's Foghorn):** A cargo ship blasts its foghorn in a harbor. Another vessel anchored $3.4\text{ km}$ away detects the blast. How long did the sound wave take to propagate across the harbor through the air? ($v = 340\text{ m/s}$.)

- $d = 3.4\text{ km} = 3400\text{ m}$.
- $t = \frac{d}{v} = \frac{3400\text{ m}}{340\text{ m/s}} = \mathbf{10\text{ s}}$

**Check:** $340\text{ m/s} \times 10\text{ s} = 3400\text{ m}$ ✅.

**Example 4 (Calculating Sound Speed at 30 °C):** On a hot summer day, the ambient air temperature reaches $30\text{ }^\circ\text{C}$. Estimate the speed of sound in air using $v \approx 331 + 0.6\,T$.

- $v \approx 331 + (0.6 \times 30) = 331 + 18 = \mathbf{349\text{ m/s}}$

**Check:** At $20\text{ }^\circ\text{C}$, $v = 343\text{ m/s}$. An increase of $10\text{ }^\circ\text{C}$ adds $0.6 \times 10 = 6\text{ m/s}$, giving $343 + 6 = 349\text{ m/s}$ ✅.

**Example 5 (Sound Transit on a Hot Day):** A quarry blast detonates $1.745\text{ km}$ away on the $30\text{ }^\circ\text{C}$ day described in Example 4 ($v = 349\text{ m/s}$). When will the blast sound be heard?

- $d = 1.745\text{ km} = 1745\text{ m}$.
- $t = \frac{d}{v} = \frac{1745\text{ m}}{349\text{ m/s}} = \mathbf{5\text{ s}}$

**Check:** $349\text{ m/s} \times 5\text{ s} = 1745\text{ m}$ ✅. (At $340\text{ m/s}$, it would take $5.13\text{ s}$. Accounting for temperature provides physical precision.)

---

## Part D: Reflection of Sound and Echoes

### Sound Waves Reflect from Rigid Surfaces

Just as a rubber ball bounces off a brick wall, an advancing acoustic wavefront reflects when it strikes a large, rigid obstacle (such as a sheer cliff, tall brick wall, or concrete facade). The reflected wave bounces backward through the medium, obeying the laws of reflection: the angle of reflection equals the angle of incidence.

When this reflected wave reaches the listener distinctly separated in time from the original emitted sound, we perceive an **echo**.

---

### Conditions Required to Hear a Distinct Echo

Why do we not hear echoes inside an ordinary living room or small classroom? The answer lies in human auditory physiology:

> **Persistence of Hearing:** When an acoustic wave stimulates our eardrum and auditory nerve, the sensory impression lingers in the human brain for approximately **$0.1\text{ second}$** ($\frac{1}{10}\text{ s}$). 

If a reflected sound arrives within less than $0.1\text{ s}$ of the direct sound, our auditory system cannot distinguish it as a separate event; the reflected sound simply blends seamlessly into the original sound. To perceive a distinct, clear echo, **the reflected sound must arrive at least $0.1\text{ second}$ after the direct sound.**

Let us calculate the minimum distance $d$ an obstacle must be placed from the sound source in air at $v = 340\text{ m/s}$:
- The sound wave must travel forward to the obstacle (distance $d$) and reflect back to the source (distance $d$).
- Therefore, the **total round-trip distance** traversed by the sound wave is $2d$.
- To ensure a minimum time delay of $t = 0.1\text{ s}$:

$$\text{Total Distance} = v \times t \implies 2d = 340\text{ m/s} \times 0.1\text{ s} = 34\text{ m}$$

Dividing the round-trip distance by 2 gives the minimum one-way distance:

$$d_{\text{min}} = \frac{34\text{ m}}{2} = \mathbf{17\text{ m}}$$

*(At $20\text{ }^\circ\text{C}$ where $v = 343\text{ m/s}$, $d_{\text{min}} = \frac{343 \times 0.1}{2} = 17.15\text{ m} \approx 17.2\text{ m}$.)*

> **Core Rule for Hearing an Echo:**
> The reflecting barrier must be positioned **at least approximately 17 meters away** from the source of the sound.

```
 Sound Source (Liam)                              Reflecting Cliff
        │                                                │
        │ ──────── Direct Incident Sound Wave (d) ──────>│
        │                                                │
        │ <─────── Reflected Echo Wave (d) ───────────── │
        │                                                │
        ├─────────────────────── d ──────────────────────┤
                     Total Distance Traveled = 2d
```

> **Figure 4.2** – In echo generation, sound traverses distance $d$ forward to the reflecting barrier and distance $d$ backward to the listener. The total acoustic path length is $2d$.

---

### Formula for Echo Distance: The Factor of Two

Because the stopwatch records the total time for the sound to travel to the obstacle **and return**, the fundamental echo formula is:

$$2d = v \times t \implies \mathbf{d = \frac{v \times t}{2}}$$

**Never forget the factor of 2!** Dividing by 2 converts the total round-trip distance into the one-way distance between the observer and the reflecting surface.

---

### Resolving Liam's Canyon Echo Mystery

We now return to Liam standing at the rim of the Rocky Mountain canyon. When Liam shouted, his echo returned in exactly $t = 2.5\text{ s}$. Given $v = 340\text{ m/s}$:

- Total round-trip distance traveled: $2d = v \times t = 340\text{ m/s} \times 2.5\text{ s} = 850\text{ m}$.
- One-way distance to the granite cliff:
  $$d = \frac{850\text{ m}}{2} = \mathbf{425\text{ m}}$$

**Check:** The wave travels $425\text{ m}$ forward and $425\text{ m}$ back ($850\text{ m}$ total). At $340\text{ m/s}$, $\frac{850}{340} = 2.5\text{ s}$ ✅. Since $425\text{ m} \gg 17\text{ m}$, the echo is heard with crystal-clear separation.

Dr. Carter smiled at Liam: "Without touching a measuring tape, you just determined that the opposite canyon wall is precisely $425\text{ meters}$ away!"

---

## Part E: Solved Examples on Echoes

**Example 6 (Minimum Echo Distance Verification):** Calculate the minimum distance required between a person and a flat reflecting wall to hear a distinct echo in air at $340\text{ m/s}$.

- Total round-trip distance: $2d = v \times t = 340\text{ m/s} \times 0.1\text{ s} = 34\text{ m}$.
- Minimum distance: $d = \frac{34\text{ m}}{2} = \mathbf{17\text{ m}}$.

**Check:** $2 \times 17\text{ m} = 34\text{ m}$; $\frac{34\text{ m}}{340\text{ m/s}} = 0.1\text{ s}$ ✅.

**Example 7 (Echo from a Forest Cliff):** A hiker shouts in front of a distant mountain face and hears the return echo after $1.5\text{ s}$. How far away is the mountain cliff? (Take $v = 340\text{ m/s}$.)

- $2d = v \times t = 340\text{ m/s} \times 1.5\text{ s} = 510\text{ m}$.
- $d = \frac{510\text{ m}}{2} = \mathbf{255\text{ m}}$.

**Check:** $2 \times 255\text{ m} = 510\text{ m}$; $\frac{510\text{ m}}{340\text{ m/s}} = 1.5\text{ s}$ ✅.

**Example 8 (Clapping in Front of a Quarry Wall):** A student claps loudly in front of a quarry cliff face and hears the echo $3\text{ s}$ later. Find the distance to the cliff face. ($v = 340\text{ m/s}$.)

- $2d = v \times t = 340\text{ m/s} \times 3\text{ s} = 1020\text{ m}$.
- $d = \frac{1020\text{ m}}{2} = \mathbf{510\text{ m}}$.

**Check:** $2 \times 510\text{ m} = 1020\text{ m}$; $\frac{1020}{340} = 3\text{ s}$ ✅. Notice: double the time of Example 7 ($1.5\text{ s} \rightarrow 3\text{ s}$) exactly doubles the distance ($255\text{ m} \rightarrow 510\text{ m}$).

**Example 9 (Echo from a Concrete Building):** A security guard claps their hands and hears an echo from a warehouse wall $2\text{ s}$ later. How far away is the warehouse? ($v = 340\text{ m/s}$.)

- $2d = 340\text{ m/s} \times 2\text{ s} = 680\text{ m}$.
- $d = \frac{680\text{ m}}{2} = \mathbf{340\text{ m}}$.

**Check:** Sound takes $1\text{ s}$ to reach the warehouse ($340\text{ m}$) and $1\text{ s}$ to return ($340\text{ m}$), totaling $2\text{ s}$ ✅.

**Example 10 (Determining Sound Speed Using an Echo):** A student stands at a measured distance of $100\text{ m}$ from a tall building and claps. An audio recorder logs the echo arriving $0.6\text{ s}$ later. Calculate the experimental speed of sound.

- Total distance traversed: $2d = 2 \times 100\text{ m} = 200\text{ m}$.
- $v = \frac{2d}{t} = \frac{200\text{ m}}{0.6\text{ s}} \approx \mathbf{333.3\text{ m/s}}$.

**Check:** $333.3\text{ m/s} \times 0.6\text{ s} = 200\text{ m}$ ✅. This reflects realistic atmospheric conditions on a chilly day.

**Example 11 (Two Distinct Echoes from Opposing Barriers):** A person stands in an open valley with a building on one side and a mountain ridge on the other. Upon firing a blank cartridge, the person hears the first echo after $1\text{ s}$ and a second echo after $3\text{ s}$. Calculate the distance to each obstacle and the time interval separating the two echoes. ($v = 340\text{ m/s}$.)

- Distance to building (first echo): $d_1 = \frac{340\text{ m/s} \times 1\text{ s}}{2} = \mathbf{170\text{ m}}$.
- Distance to mountain (second echo): $d_2 = \frac{340\text{ m/s} \times 3\text{ s}}{2} = \mathbf{510\text{ m}}$.
- Time interval between echoes: $\Delta t = 3\text{ s} - 1\text{ s} = \mathbf{2\text{ s}}$.

**Check:** $\frac{2 \times 170}{340} = 1\text{ s}$ ✅; $\frac{2 \times 510}{340} = 3\text{ s}$ ✅. The nearer surface returns its echo first.

```
   Observer            Building                     Mountain Ridge
      │                    │                              │
      │<───── 170 m ──────>│                              │
      │<────────────────────── 510 m ────────────────────>│

   First Echo: 1.0 s       Second Echo: 3.0 s
```

> **Figure 4.3** – Multiple reflecting surfaces at different distances yield sequential echoes: the nearest obstacle echoes first, followed by the more distant barrier.

**Multiple Echoes:** In valleys with parallel cliff walls, acoustic energy bounces repeatedly between the opposite faces, generating a cascading rolling reverberation of multiple echoes.

**Example 12 (Echo on a Hot Day):** On a hot day with ambient temperature $30\text{ }^\circ\text{C}$ ($v \approx 349\text{ m/s}$), an echo from a canyon wall returns in $2\text{ s}$. How far is the wall?

- $2d = 349\text{ m/s} \times 2\text{ s} = 698\text{ m}$.
- $d = \frac{698\text{ m}}{2} = \mathbf{349\text{ m}}$.

**Check:** $2 \times 349\text{ m} = 698\text{ m}$; $\frac{698}{349} = 2\text{ s}$ ✅. (At $340\text{ m/s}$, the calculated distance would be $340\text{ m}$; applying the temperature-adjusted speed yields accurate field results.)

---

## Part F: Reverberation

### Why Does Sound Linger in Large Auditoriums?

Imagine clapping your hands inside an empty concrete auditorium, gymnasium, or stone cathedral. The acoustic pulse strikes the hard walls, ceiling, and floor, reflecting back and forth repeatedly across the enclosed volume. With every bounce, a fraction of the wave passes the listener's ear.

Because the path differences between reflections are small, these reflected waves arrive in continuous, overlapping succession. Consequently, **the sound persists and rings out for several moments even after the original source has ceased emitting energy.** This persistence of sound due to repeated multiple reflections is termed **reverberation**.

```
    ┌────────────────────────────────────────┐
    │  \         /           \          /    │   Reflections from ceiling
    │   \       /             \        /     │
    │    \     /      (S)      \      /      │   S = Sound Source
    │     \   /     /   :   \   \    /       │
    │      \ /     /    :    \   \  /        │
    │       X     <     (L)    >    X        │   L = Listener's Ear
    └────────────────────────────────────────┘
        Continuous overlapping reflections from walls, floor, and ceiling
```

> **Figure 4.4** – Reverberation in an enclosed hall: acoustic wavefronts bounce repeatedly off hard boundaries, arriving at the listener's ear from numerous angles with overlapping delays.

---

### Difference Between an Echo and Reverberation

- **Echo:** A single, distinct, clearly separated repetition of a sound reflected from an obstacle at least $17\text{ m}$ away, arriving after an acoustic delay of at least $0.1\text{ s}$.
- **Reverberation:** A continuous, sustained, overlapping prolongation of sound resulting from rapid, closely spaced reflections inside an enclosure. Individual reflections cannot be distinguished.

---

### Disadvantages of Excessive Reverberation and Acoustic Remedies

While a small amount of reverberation enriches symphonic music (giving it "warmth" and fullness), **excessive reverberation is disastrous for speech intelligibility.** Consecutive syllables and words blur into an unintelligible, muddy roar because the decaying reflections of previous syllables overlap with incoming words.

To control reverberation time and ensure clear acoustic conditions in auditoriums, architects use specific design remedies:

1. **Acoustic Absorbers:** Covering hard boundary walls and ceilings with sound-absorbing materials such as heavy draperies, thick carpets, perforated acoustic tiles, compressed mineral wool panels, and upholstered chairs. Porous materials trap acoustic energy within microscopic pores, dissipating it as negligible heat rather than reflecting it.
2. **Audience Absorption:** Human clothing and bodies are exceptionally effective acoustic absorbers. A hall filled with spectators exhibits significantly lower reverberation than when empty!
3. **Curved Ceilings and Soundboards:** Designing ceilings with gentle convex curvature and placing a rigid parabolic **soundboard** behind the stage directs reflected acoustic energy downward uniformly across the entire seating area, preventing localized flutter echoes and dead zones.

**Example 13 (Acoustic Behavior of an Empty Hall):** A bare hall measures $17\text{ m} \times 12\text{ m}$ with hard plaster walls and polished stone floors. When a speaker talks, reflections from the walls arrive within $0.05\text{ s}$ to $0.08\text{ s}$, while ceiling and floor reflections arrive even sooner. Because all reflections arrive well within the $0.1\text{ s}$ window, distinct echoes do not form; instead, they combine into a prolonged, echoing **reverberation** that smears speech. Installing carpets, wall baffles, and seating an audience eliminates this problem by rapidly absorbing reflected acoustic energy.

---

## Part G: Practical Applications of Sound Reflection

1. **Megaphones, Loudhailers, and Trumpets:** These devices feature a conical or flared horn that prevents sound waves from dispersing in all directions. Successive reflections inside the expanding cone channel and project the acoustic wavefront forward along a focused directional beam.
2. **Medical Stethoscope:** A diagnostic instrument used by physicians to listen to internal heart and lung sounds. Acoustic vibrations captured by the chest diaphragm travel along the flexible rubber tubing via **continuous internal reflections** without significant loss of energy, delivering a concentrated signal directly to the earpieces.
3. **Curved Ceilings in Concert Halls:** Auditoriums and concert halls are constructed with curved ceilings so that sound reflecting off the overhead surface spreads uniformly to every seat in the gallery.
4. **Animal Echolocation (Bio-Sonar):** Bats and marine mammals (dolphins and whales) navigate and hunt in total darkness or murky waters by emitting high-frequency ultrasonic clicks and interpreting the return echoes from prey and obstacles (examined in Topic 6).
5. **Marine SONAR (Sound Navigation and Ranging):** Surface ships and submarines emit acoustic pulses into the ocean to map the seabed, detect icebergs, and locate submerged vessels via return echoes (detailed in Topic 6).
6. **Acoustic Ranging:** Measuring the distance to cliffs or buildings using the time of flight of return echoes, as demonstrated in Example 10.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Forgetting to divide by 2 in echo distance calculations.**
   If an echo returns in $2.5\text{ s}$, the sound traversed the path twice (round trip). Writing $d = 340 \times 2.5 = 850\text{ m}$ is incorrect! The correct one-way distance is $d = \frac{340 \times 2.5}{2} = \mathbf{425\text{ m}}$.

2. **Mistake 2: Assuming that a louder shout travels faster than a whisper.**
   In a given medium at a fixed temperature, all sounds travel at the exact same speed ($340\text{ m/s}$ in room air). Loudness increases the wave's amplitude and energy, but has zero effect on its propagation speed.

3. **Mistake 3: Believing sound travels faster through air because air is "less dense."**
   Intuition might suggest that sound moves faster where particles are sparse, but reality is the opposite: sound travels fastest in rigid solids ($5000\text{ m/s}$ in iron) where tightly bonded particles transmit mechanical forces instantaneously, and slowest in compressible gases ($340\text{ m/s}$ in air).

4. **Mistake 4: Using 340 m/s when a specific temperature is provided.**
   If a problem specifies an ambient temperature (e.g., $30\text{ }^\circ\text{C}$), always compute the corresponding speed using $v \approx 331 + 0.6\,T$ ($349\text{ m/s}$) before performing calculations.

5. **Mistake 5: Conflating an echo with reverberation.**
   An echo is a **distinct, isolated repetition** from a distant obstacle ($d \ge 17\text{ m}$, delay $\ge 0.1\text{ s}$). Reverberation is a **continuous, overlapping acoustic wash** resulting from numerous close reflections within an enclosed hall.

6. **Mistake 6: Assuming echoes can be heard at any distance.**
   If the reflecting surface is closer than approximately $17\text{ m}$, the return pulse arrives within less than $0.1\text{ s}$ and merges into the direct sound due to the persistence of hearing, preventing perception of a distinct echo.

---

## Quick Recap

- Speed of sound in ambient air is approximately **$340\text{ m/s}$** ($v = d/t$). Light travels at $3 \times 10^8\text{ m/s}$; consequently, lightning flashes are observed instantaneously, while thunder rumbles arrive seconds later.
- **Lightning Distance Rule:** $\text{Distance} \approx 340\text{ m/s} \times \text{time delay (s)}$. Every $3\text{ seconds}$ of delay represents approximately $1\text{ km}$ ($1020\text{ m}$).
- Speed depends on the **medium**: $\mathbf{\text{Solids} > \text{Liquids} > \text{Gases}}$ (Air $\approx 340\text{ m/s}$, Water $\approx 1500\text{ m/s}$, Iron $\approx 5100\text{ m/s}$) due to differences in intermolecular stiffness and atomic packing.
- Speed increases with **temperature**: $v \approx 331 + 0.6\,T$ (in air, with $T$ in $^\circ\text{C}$). Speed at $0\text{ }^\circ\text{C}$ is $331\text{ m/s}$; at $20\text{ }^\circ\text{C}$ it is $343\text{ m/s}$.
- Speed is **independent of loudness, frequency, and pitch**.
- **Echo:** A distinct reflected sound heard separately from the original. Requirement: reflected sound must arrive after the **persistence of hearing delay ($\ge 0.1\text{ s}$)**, meaning the obstacle must be located **at least $\approx 17\text{ m}$ away** in air.
- **Echo Formula:** $2d = v \times t \implies \mathbf{d = \frac{v \times t}{2}}$.
- **Reverberation:** Prolonged persistence of sound in an enclosed room due to multiple, overlapping reflections. Controlled using porous absorbers (curtains, carpets, acoustic panels, upholstered seats) and curved soundboards.
- Practical reflection applications: Megaphones, stethoscopes, auditorium acoustic shells, animal echolocation, and SONAR depth sounding.

---

## Practice Questions

*(Assume the speed of sound in air is $340\text{ m/s}$ unless a different value or temperature is specified.)*

1. A thunderclap is heard $7\text{ s}$ after a lightning flash is seen. How far away did the lightning strike? (Ignore the transit time of light.)

2. An acoustic signal must traverse a distance of $2.55\text{ km}$. Find the transit time (a) through ambient air ($v = 340\text{ m/s}$) and (b) through fresh water ($v = 1500\text{ m/s}$).

3. A hiker shouts near a vertical mountain cliff and hears the return echo after $4\text{ s}$. How far away is the cliff?

4. A student stands $8\text{ m}$ away from a tall concrete wall and claps loudly. Will she hear a distinct echo? Justify your answer with a complete calculation.

5. Using the relation $v \approx 331 + 0.6\,T$, estimate the speed of sound in air at $25\text{ }^\circ\text{C}$. What distance will an acoustic wave cover in $5\text{ s}$ at this temperature?

6. At an ambient temperature of $40\text{ }^\circ\text{C}$, the speed of sound in air is approximately $v = 331 + (0.6 \times 40) = 355\text{ m/s}$. Determine the minimum distance a reflecting wall must be from an observer to produce a distinct echo at this temperature.

7. A student standing $85\text{ m}$ from a flat brick facade claps her hands once. The return echo is detected after $0.5\text{ s}$. Calculate the experimental speed of sound.

8. A person claps once in an open field and hears two distinct echoes: the first after $0.5\text{ s}$ and the second after $1.5\text{ s}$. Assuming $v = 340\text{ m/s}$, calculate the distance to each reflecting surface and determine the time interval between the two echoes.

9. State whether each statement is True or False, providing a brief justification:
   (a) A loud shout propagates faster through air than a gentle whisper.
   (b) Sound generally travels faster through solids than through gases.
   (c) A clapping sound reverberates longer in an auditorium fitted with heavy drapes and carpets than in an empty, bare hall.
   (d) For an echo to be perceived distinctly, the reflected sound must reach the human ear at least $0.1\text{ s}$ after the initial sound.

10. During a severe storm, an observer notes a $15\text{ s}$ time delay between observing a lightning bolt and hearing the thunderclap. Calculate the distance to the storm in meters and kilometers. Verify your result using the practical "3-second rule."

11. What is reverberation? How does it differ physically from a distinct echo? Describe two practical architectural methods employed to reduce excessive reverberation in a lecture hall.

12. The speed of sound in structural iron is $5100\text{ m/s}$. How long does the mechanical sound of a hammer strike take to travel along an iron railroad track of length $1.53\text{ km}$? How long would the acoustic wave take to cover the same distance through ambient air ($v = 340\text{ m/s}$)?

13. In our opening mountain narrative, suppose Liam had heard his canyon echo return after $3.5\text{ s}$ instead of $2.5\text{ s}$. What would be the calculated distance to the granite cliff?

### Answers

1. Distance $d = v \times t = 340\text{ m/s} \times 7\text{ s} = \mathbf{2380\text{ m}}$ ($2.38\text{ km}$).
   Check: $\frac{2380\text{ m}}{340\text{ m/s}} = 7\text{ s}$ ✅.

2. $d = 2.55\text{ km} = 2550\text{ m}$.
   (a) In air: $t = \frac{2550\text{ m}}{340\text{ m/s}} = \mathbf{7.5\text{ s}}$.
   (b) In water: $t = \frac{2550\text{ m}}{1500\text{ m/s}} = \mathbf{1.7\text{ s}}$.
   Check: $340 \times 7.5 = 2550\text{ m}$ ✅; $1500 \times 1.7 = 2550\text{ m}$ ✅.

3. $2d = v \times t = 340\text{ m/s} \times 4\text{ s} = 1360\text{ m}$.
   $d = \frac{1360\text{ m}}{2} = \mathbf{680\text{ m}}$.
   Check: $2 \times 680\text{ m} = 1360\text{ m}$; $\frac{1360}{340} = 4\text{ s}$ ✅.

4. Total round-trip distance: $2d = 2 \times 8\text{ m} = 16\text{ m}$.
   Time delay: $t = \frac{2d}{v} = \frac{16\text{ m}}{340\text{ m/s}} \approx \mathbf{0.047\text{ s}}$.
   Because $0.047\text{ s} < 0.1\text{ s}$ (the persistence of hearing threshold), the reflected sound merges with the initial clap. Therefore, **no distinct echo is heard**. (Minimum required distance is $17\text{ m}$, and $8\text{ m} < 17\text{ m}$.)

5. Speed: $v \approx 331 + (0.6 \times 25) = 331 + 15 = \mathbf{346\text{ m/s}}$.
   Distance in $5\text{ s}$: $d = v \times t = 346\text{ m/s} \times 5\text{ s} = \mathbf{1730\text{ m}}$.
   Check: $\frac{1730}{346} = 5\text{ s}$ ✅.

6. Round-trip distance for $t = 0.1\text{ s}$: $2d = 355\text{ m/s} \times 0.1\text{ s} = 35.5\text{ m}$.
   $d_{\text{min}} = \frac{35.5\text{ m}}{2} = \mathbf{17.75\text{ m}}$ (approximately $17.8\text{ m}$).
   Check: $2 \times 17.75\text{ m} = 35.5\text{ m}$; $\frac{35.5}{355} = 0.1\text{ s}$ ✅. Warmer air requires a slightly greater distance.

7. Round-trip distance: $2d = 2 \times 85\text{ m} = 170\text{ m}$.
   $v = \frac{2d}{t} = \frac{170\text{ m}}{0.5\text{ s}} = \mathbf{340\text{ m/s}}$.
   Check: $340\text{ m/s} \times 0.5\text{ s} = 170\text{ m}$ ✅.

8. First surface: $d_1 = \frac{340\text{ m/s} \times 0.5\text{ s}}{2} = \mathbf{85\text{ m}}$.
   Second surface: $d_2 = \frac{340\text{ m/s} \times 1.5\text{ s}}{2} = \mathbf{255\text{ m}}$.
   Time interval between echoes: $\Delta t = 1.5\text{ s} - 0.5\text{ s} = \mathbf{1.0\text{ s}}$.
   Check: $\frac{2 \times 85}{340} = 0.5\text{ s}$ ✅; $\frac{2 \times 255}{340} = 1.5\text{ s}$ ✅.

9. (a) **False** ❌: Sound speed in a given medium is independent of loudness or amplitude.
   (b) **True** ✅: High atomic packing and stiffness enable solids to transmit acoustic vibrations much faster than gases.
   (c) **False** ❌: Heavy drapes and carpets absorb acoustic energy, dramatically reducing reverberation.
   (d) **True** ✅: The persistence of hearing is approximately $0.1\text{ s}$; arrivals under this threshold merge into the direct sound.

10. $d = 340\text{ m/s} \times 15\text{ s} = \mathbf{5100\text{ m}} = \mathbf{5.1\text{ km}}$.
    Verification with 3-second rule: $\frac{15\text{ s}}{3\text{ s/km}} = \mathbf{5\text{ km}} \approx 5.1\text{ km}$ ✅.

11. Reverberation is the prolonged persistence of sound in an enclosed space resulting from repeated multiple reflections off boundaries. An echo is a single, distinct, clearly separated repetition from a distant barrier ($\ge 17\text{ m}$). Remedies to reduce excessive reverberation include: (1) installing porous sound-absorbing materials (curtains, carpets, acoustic wall panels), and (2) fitting upholstered seating and designing curved soundboards.

12. $d = 1.53\text{ km} = 1530\text{ m}$.
    Through iron track: $t_{\text{iron}} = \frac{1530\text{ m}}{5100\text{ m/s}} = \mathbf{0.3\text{ s}}$.
    Through air: $t_{\text{air}} = \frac{1530\text{ m}}{340\text{ m/s}} = \mathbf{4.5\text{ s}}$.
    Check: $5100 \times 0.3 = 1530\text{ m}$ ✅; $340 \times 4.5 = 1530\text{ m}$ ✅. The acoustic impulse arrives through the steel rail 4.2 seconds earlier!

13. $2d = v \times t = 340\text{ m/s} \times 3.5\text{ s} = 1190\text{ m}$.
    $d = \frac{1190\text{ m}}{2} = \mathbf{595\text{ m}}$.
    Check: $2 \times 595\text{ m} = 1190\text{ m}$; $\frac{1190}{340} = 3.5\text{ s}$ ✅.

---

Now you can apply these acoustic principles just like Dr. Carter and Liam: estimating lightning distance by counting seconds (every 3 seconds is roughly 1 kilometer) and calculating canyon distances using $d = \frac{v \times t}{2}$.

**What's Next?** Human ears perceive an incredible variety of sounds: high squeaks, booming bass, sweet musical melodies, and grating noise. What wave properties produce these distinct sensory perceptions? In Topic 5, we investigate the core **characteristics of sound: loudness, pitch, and quality (timbre)**.
