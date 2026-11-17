# Chapter: Light: Refraction (Part 2)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [light-refraction.md](light-refraction.md)** (covering what refraction is, light bending towards or away from the normal, optical density, and the fundamental laws of refraction). For the speed of light $c = 3 \times 10^8\text{ m/s}$, see [light-reflection.md](../light-reflection/light-reflection.md).
> **Topics covered in this file:**
> 2. Refractive Index

---

# Topic 2: Refractive Index

In Topic 1, we discovered that when a ray of light crosses the boundary between two transparent media obliquely, it **bends**, because its speed differs between the two media. We also established Snell's Law: for any given pair of media and for light of a given colour, the ratio of the sine of the angle of incidence to the sine of the angle of refraction is an invariant constant:

$$\frac{\sin i}{\sin r} = \text{constant}$$

However, one fundamental question was left open: **What physically is this constant number, how is it determined for any material, and what does its magnitude reveal about the behavior of light?** In this topic, we investigate this crucial optical constant—known as the **refractive index**—and explore how it dictates the speed, the angle of bending, and the optical density of transparent matter.

---

## Two Identical Blocks in the Quality Inspection Hall

Inside the precision optics testing laboratory of an optical manufacturing facility, senior materials specialist Dr. Bennett was inspecting a series of polished glass components. Accompanying him was Sophia, an enthusiastic student participating in a physics mentorship program.

Resting on a velvet testing cloth on the inspection table were two solid rectangular blocks of polished glass. Both blocks were cut to the exact same dimensions: $10\text{ cm} \times 6\text{ cm} \times 3\text{ cm}$. Both were crystal-clear, polished to flawless optical perfection, and completely transparent without a speck of dust or visible flaw.

Dr. Bennett picked up one block, then the other, and handed them to Sophia. "Take a close look, Sophia. Can you visually distinguish any difference between these two blocks?"

Sophia examined both blocks against the overhead fluorescent lights. She tilted them, peered through their polished faces, and ran her fingers along their edges. "No, Dr. Bennett. They look completely identical in clarity, shape, and transparency."

Dr. Bennett smiled knowingly. "And yet, their internal optical properties are profoundly different. One of them is molded from standard **crown glass**, whereas the other is made of heavy **dense flint glass**, which possesses significantly higher optical density. Even more remarkably, I can tell you exactly which is which within sixty seconds, without scratching, weighing, or damaging either block."

Sophia's eyes widened. "How? With what tool?"

"With a single ray of light and a single fundamental number," Dr. Bennett answered. "A number that quantifies precisely how much light **decelerates** and how sharply it **bends** when traveling inside each material. That number is called the **refractive index**." We will resolve Dr. Bennett's optical block challenge at the end of this topic.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Refractive index ($n$)** | A dimensionless physical ratio quantifying how much light slows down in a medium relative to vacuum: $n = c / v$ | Water has $n = 1.33$; crown glass has $n = 1.52$ |
| **Absolute refractive index** | The refractive index of a medium measured with respect to vacuum (or air); simply called the refractive index ($n$) | $n_{\text{glass}} = 1.5$ |
| **Relative refractive index ($n_{21}$)** | The refractive index of medium 2 measured with respect to medium 1: $n_{21} = n_2 / n_1 = v_1 / v_2$ | Light traveling from water into glass: $n_{21} = 1.5 / 1.33 \approx 1.128$ |
| **Speed of light in vacuum ($c$)** | The universal speed limit of electromagnetic waves in free space: $c = 3 \times 10^8\text{ m/s}$ | Standard reference speed in optics |
| **Speed of light in medium ($v$)** | The reduced phase velocity of light inside a material medium | Inside crown glass, $v \approx 2 \times 10^8\text{ m/s}$ |
| **Optically denser medium** | A medium characterized by a larger refractive index ($n$), in which light propagates slower | Glass is optically denser than water |
| **Optically rarer medium** | A medium characterized by a smaller refractive index ($n$), in which light propagates faster | Air is optically rarer than glass |
| **Snell's Law (symmetric form)** | The general boundary equation relating indices and angles: $n_1 \sin i = n_2 \sin r$ | Light refracting from water into glass |

---

## Part A: What Is Refractive Index?

### Understanding the Number: The Ratio of Velocities

When light crosses from free space into a material medium such as water, oil, or glass, interactions with the bound electrons of the medium cause the effective speed of propagation to decrease. To quantify this deceleration systematically, physicists define the **absolute refractive index** of a medium as the ratio of the speed of light in vacuum to the speed of light in that medium:

> **Absolute Refractive Index:**
>
> $$n = \frac{c}{v}$$
>
> where:
> - $c = 3 \times 10^8\text{ m/s}$ is the speed of light in vacuum,
> - $v$ is the speed of light in the given medium.

The physical meaning of $n$ is straightforward: **$n$ represents the factor by which light decelerates upon entering the medium from vacuum.** For instance, if light travels through a substance at half its vacuum speed ($v = c / 2$), then $n = c / (c / 2) = 2$. Light is twice as slow in that substance as in free space.

Key properties of the refractive index:
- **Dimensionless scalar:** Because $n$ is the ratio of two identical physical quantities (speeds in $\text{m/s}$), the units cancel: $\frac{\text{m/s}}{\text{m/s}} = 1$. The refractive index is a **pure number** with no physical units.
- **Universal lower bound ($n \ge 1$):** Because nothing travels faster than light in a vacuum ($v \le c$), the ratio $c / v$ is **never less than 1** for any material medium. For vacuum itself, $v = c$, giving $n = 1$ exactly.
- **Optical density indicator:** A larger value of $n$ implies a slower speed of light and a correspondingly **higher optical density**.
- **Air approximation:** In ambient air, the speed of light is $299,700\text{ km/s}$, yielding $n_{\text{air}} \approx 1.0003$. This value is so close to 1 that for all practical school-level calculations, we take $n_{\text{air}} = 1.00$.

### Refractive Indices of Common Substances

| Transparent Medium | Approximate Refractive Index ($n$) |
|---|---|
| Vacuum | $1.0000$ (by definition) |
| Air | $1.0003$ (taken as $1.00$) |
| Ice | $1.31$ |
| Pure Water | $1.33$ |
| Ethyl Alcohol (Ethanol) | $1.36$ |
| Kerosene | $1.44$ |
| Fused Quartz | $1.46$ |
| Turpentine Oil | $1.47$ |
| Crown Glass | $1.52$ (often taken as $1.50$ in exercises) |
| Rock Salt (Sodium Chloride) | $1.54$ |
| Dense Flint Glass | $1.65$ |
| Diamond | $2.42$ |

*(Note: These values are standard averages for yellow-green light at room temperature; exact values vary slightly with temperature and wavelength.)*

From this table, diamond stands out with the remarkably high refractive index of **$n \approx 2.42$**. Inside a diamond, light is dramatically slowed down, which causes intense refraction and optical trapping.

### How Much Does Light Slow Down: $v = c / n$

Rearranging the definition of refractive index yields the direct equation for the speed of light in any medium:

> $$v = \frac{c}{n}$$

Let us calculate the actual speed of light in water, crown glass, and diamond using $c = 3 \times 10^8\text{ m/s}$:

| Medium | Refractive Index ($n$) | Speed of Light: $v = c / n$ |
|---|---|---|
| Water | $1.33$ | $v = \frac{3 \times 10^8\text{ m/s}}{1.33} \approx \mathbf{2.26 \times 10^8\text{ m/s}}$ |
| Crown Glass | $1.50$ | $v = \frac{3 \times 10^8\text{ m/s}}{1.50} = \mathbf{2.00 \times 10^8\text{ m/s}}$ |
| Diamond | $2.42$ | $v = \frac{3 \times 10^8\text{ m/s}}{2.42} \approx \mathbf{1.24 \times 10^8\text{ m/s}}$ |

**Check:**
- Water: $2.26 \times 10^8\text{ m/s} \times 1.33 \approx 3.00 \times 10^8\text{ m/s}$ ✅
- Glass: $2.00 \times 10^8\text{ m/s} \times 1.50 = 3.00 \times 10^8\text{ m/s}$ ✅
- Diamond: $1.24 \times 10^8\text{ m/s} \times 2.42 \approx 3.00 \times 10^8\text{ m/s}$ ✅

Notice that inside diamond, the speed of light is slashed to less than half ($41\%$) of its vacuum speed!

### Refractive Index and Angles of Refraction

In Topic 1, we learned that Snell's Law states $\frac{\sin i}{\sin r} = \text{constant}$. We now identify that this constant is none other than the refractive index $n$ of the medium when light enters from vacuum (or air):

> $$n = \frac{\sin i}{\sin r}$$
>
> where $i$ is the angle of incidence in air and $r$ is the angle of refraction in the medium, both measured relative to the normal.

Rearranging this expression for the angle of refraction gives:

$$\sin r = \frac{\sin i}{n}$$

**Geometric Consequence:** For a fixed angle of incidence $i$, **the larger the refractive index $n$ of the medium, the smaller the angle of refraction $r$**. A smaller $r$ means that the refracted ray is pulled closer to the normal, corresponding to a sharper, more dramatic bend.

---

## Part B: How Much Does Light Bend in Different Media?

To appreciate visually how refractive index governs the degree of bending, let us compare the refraction of a light ray striking three different media from air at the **exact same angle of incidence $i = 45^\circ$**. Using $\sin 45^\circ \approx 0.7071$:

| Medium | Refractive Index ($n$) | $\sin r = \frac{0.7071}{n}$ | Refracted Angle ($r$) | Deviation ($\delta = 45^\circ - r$) |
|---|---|---|---|---|
| Water | $1.33$ | $\frac{0.7071}{1.33} \approx 0.5317$ | $\mathbf{32.1^\circ}$ | $45^\circ - 32.1^\circ = \mathbf{12.9^\circ}$ |
| Crown Glass | $1.50$ | $\frac{0.7071}{1.50} \approx 0.4714$ | $\mathbf{28.1^\circ}$ | $45^\circ - 28.1^\circ = \mathbf{16.9^\circ}$ |
| Diamond | $2.42$ | $\frac{0.7071}{2.42} \approx 0.2922$ | $\mathbf{17.0^\circ}$ | $45^\circ - 17.0^\circ = \mathbf{28.0^\circ}$ |

```
                        N (Normal)
      Air               :
            \           :
              \         :
                \  i    :
                  \ 45° :
                    \   :
                      \ :
  ======================O========================  Interface
                        :\\
                        :\\\
                        : \\ \
                        : \ \ \
                        :  \ \  \
                        :  \  \   \
                        :   \  \   \
                        :   D   G    W
```

> **Figure 2.1** – Comparison of refracted rays in three media for a common angle of incidence $i = 45^\circ$.
> - Ray $D$ (Diamond, $n = 2.42$): $r = 17.0^\circ$ (closest to the normal).
> - Ray $G$ (Glass, $n = 1.50$): $r = 28.1^\circ$.
> - Ray $W$ (Water, $n = 1.33$): $r = 32.1^\circ$ (furthest from the normal).
> *(Note: The diagram illustrates three separate experiments superimposed for geometric comparison.)*

The optical lesson is crystal clear: **higher refractive index produces greater deceleration, pulling the ray closer to the normal and producing greater deviation.**

### An Essential Property: Independence from Angle of Incidence

A vital point to master: **the refractive index $n$ is an intrinsic physical characteristic of the material itself; it does not depend on the angle of incidence $i$.** Whether light strikes a glass block at $i = 15^\circ$, $i = 45^\circ$, or $i = 75^\circ$, the ratio $\frac{\sin i}{\sin r}$ remains strictly constant at $1.50$. The angle $r$ changes as $i$ changes, but the ratio $n$ is fixed by the material lattice and its interaction with light waves.

---

## Part C: Relative Refractive Index

Up to this point, we have primarily considered light entering a medium from air or vacuum. However, light frequently passes directly between two material media, such as from water into glass in an aquarium, or from oil into water. In such cases, we describe the transition using the **relative refractive index**.

Suppose a light ray passes from **medium 1** (having absolute refractive index $n_1$ and speed $v_1$) into **medium 2** (having absolute refractive index $n_2$ and speed $v_2$).

> **Relative Refractive Index of Medium 2 with Respect to Medium 1 ($n_{21}$):**
>
> $$n_{21} = \frac{n_2}{n_1} = \frac{v_1}{v_2} = \frac{\sin i}{\sin r}$$
>
> *(Also denoted in some textbooks as ${}_1n_2$.)*

**Physical Intuition:** The ratio $\frac{v_1}{v_2}$ directly quantifies how much the light slows down upon transitioning from medium 1 into medium 2. We can see why this equals $\frac{n_2}{n_1}$ by substituting $n_1 = \frac{c}{v_1}$ and $n_2 = \frac{c}{v_2}$:

$$\frac{n_2}{n_1} = \frac{c / v_2}{c / v_1} = \frac{c}{v_2} \times \frac{v_1}{c} = \frac{v_1}{v_2}$$

Notice that the absolute refractive index is simply a special case of relative refractive index: when medium 1 is vacuum ($n_1 = 1$, $v_1 = c$), $n_{21} = \frac{n_2}{1} = n_2$.

### Water and Glass Example

Consider light passing from **water** ($n_1 = 1.33$) into **crown glass** ($n_2 = 1.50$):

1. **Refractive index of glass with respect to water ($n_{gw}$):**

   $$n_{gw} = \frac{n_{\text{glass}}}{n_{\text{water}}} = \frac{1.50}{1.33} \approx \mathbf{1.128}$$

   Using light speeds:

   $$\frac{v_{\text{water}}}{v_{\text{glass}}} = \frac{2.26 \times 10^8\text{ m/s}}{2.00 \times 10^8\text{ m/s}} = \mathbf{1.13}$$

   Both approaches yield the exact same physical result ($1.128 \approx 1.13$). Because $n_{gw} > 1$, light decelerates and bends towards the normal.

2. **Refractive index of water with respect to glass ($n_{wg}$):**
   Suppose light travels in reverse, from glass into water:

   $$n_{wg} = \frac{n_{\text{water}}}{n_{\text{glass}}} = \frac{1.33}{1.50} \approx \mathbf{0.887}$$

> **Reciprocal Relationship:**
>
> $$n_{12} = \frac{1}{n_{21}}$$
>
> *Verification:* $n_{wg} = \frac{1}{n_{gw}} = \frac{1}{1.128} \approx \mathbf{0.887}$ ✅

**Essential Takeaway:** While an **absolute** refractive index can never be less than 1 ($n \ge 1$), a **relative** refractive index **can be less than 1** (e.g., $0.887$). A relative index less than 1 simply signifies that light is passing from an optically denser medium into a rarer medium, causing it to speed up ($v_2 > v_1$) and bend away from the normal.

---

## Part D: Snell's Law in Symmetric Form: $n_1 \sin i = n_2 \sin r$ (Extension: Class 10 Overlap)

*(Extension Note: While foundational in secondary physics, this symmetric formulation provides exceptional mathematical clarity across all problem types.)*

Equating the two expressions for relative refractive index:

$$n_{21} = \frac{\sin i}{\sin r} \quad \text{and} \quad n_{21} = \frac{n_2}{n_1}$$

gives:

$$\frac{\sin i}{\sin r} = \frac{n_2}{n_1}$$

Cross-multiplying yields the elegantly symmetric form of **Snell's Law**:

> $$n_1 \sin i = n_2 \sin r$$
>
> where:
> - $n_1$ and $i$ are the refractive index and angle in the first medium,
> - $n_2$ and $r$ are the refractive index and angle in the second medium.

This equation reveals a profound physical symmetry: **the product $n \sin \theta$ is invariant across any refracting boundary.**
- If $n_2 > n_1$ (denser medium), then $\sin r < \sin i$, which requires $r < i$ (bending towards the normal).
- If $n_2 < n_1$ (rarer medium), then $\sin r > \sin i$, which requires $r > i$ (bending away from the normal).

*Quick Demonstration:* Light travels from water ($n_1 = 1.33$) into crown glass ($n_2 = 1.50$) at an incident angle $i = 40^\circ$:

$$1.33 \times \sin 40^\circ = 1.50 \times \sin r$$

$$\sin r = \frac{1.33 \times 0.6428}{1.50} = \frac{0.8549}{1.50} \approx 0.4833 \implies r \approx \mathbf{28.9^\circ}$$

Because glass is denser than water ($1.50 > 1.33$), the ray bends toward the normal ($28.9^\circ < 40^\circ$) ✅.

---

## Part E: Factors Influencing Refractive Index

The refractive index of a transparent substance is governed by four primary physical factors:

### 1. Refractive Index Depends on Colour (Wavelength)

In a material medium, light of different colours (wavelengths) travels at slightly different speeds. **Violet and blue light travel slower than red light in glass.** As a result:

$$n_{\text{violet}} > n_{\text{red}}$$

Because violet light encounters a slightly higher refractive index, it bends more sharply than red light when entering glass. This angular separation of composite white light into its constituent spectral colours is known as **dispersion**, which we explore in depth in Topic 7. The values listed in standard optical tables represent an intermediate yellow-green wavelength ($\lambda \approx 589\text{ nm}$).

### 2. Refractive Index Depends on Temperature

When a liquid or solid is heated, thermal expansion causes its volume to increase, reducing its physical density. With fewer atoms per unit volume impeding the light wave, light travels slightly faster in the warmer medium, causing its refractive index to **decrease slightly as temperature rises**:

$$\text{Temperature increases} \implies n \text{ decreases slightly}$$

In routine classroom calculations, this minute temperature effect is negligible, but high-precision optical refractometry in chemistry and industry strictly controls temperature at $20^\circ\text{C}$ or $25^\circ\text{C}$.

### 3. Optical Density versus Mass Density

As introduced in Topic 1, students must never conflate **optical density** with **mass density**. Consider a direct quantitative comparison between water and kerosene:

| Liquid | Refractive Index ($n$) | Mass Density ($\rho$) | Speed of Light in Liquid ($v = c / n$) |
|---|---|---|---|
| Pure Water | $1.33$ | $1000\text{ kg/m}^3$ | $\frac{3 \times 10^8}{1.33} \approx 2.26 \times 10^8\text{ m/s}$ |
| Kerosene | $1.44$ | $\approx 800\text{ kg/m}^3$ | $\frac{3 \times 10^8}{1.44} \approx 2.08 \times 10^8\text{ m/s}$ |

Although kerosene has a lower mass density ($800 < 1000\text{ kg/m}^3$) and floats on top of water, it has a higher refractive index ($1.44 > 1.33$). Light travels noticeably slower in kerosene ($2.08 \times 10^8\text{ m/s}$) than in water ($2.26 \times 10^8\text{ m/s}$). Therefore, **kerosene is optically denser than water despite being physically lighter in mass.** Optical density reflects electromagnetic interaction, not gravitational weight!

### 4. The Sparkle of Diamond: A Brief Preview

Diamond exhibits an extraordinary refractive index of $n = 2.42$. Light entering a cut diamond is decelerated to just $1.24 \times 10^8\text{ m/s}$ and bent violently toward the normal. When combined with carefully faceted geometric angles, this extreme optical density traps light inside through repeated internal reflections, releasing it in brilliant flashes through the top facets. This phenomenon—**Total Internal Reflection**—forms the subject of Topic 4.

---

## Part F: Measuring Refractive Index: A Simple Laboratory Experiment

The refractive index of a rectangular glass slab can be determined accurately using a standard laboratory **optical pin method**.

**Apparatus:** A wooden drawing board, a sheet of white drawing paper, drawing pins, a rectangular glass block, four optical pins ($P, Q, R, S$), a protractor, a $30\text{ cm}$ ruler, and a sharp pencil.

```
                    N
       P            :
         \          :
           Q        :
             \   i  :
               \    :
  =================\O===========================  First Face (Air to Glass)
                    :\
          GLASS     : \  r
                    :  \
                    :   \
  =======================O'=====================  Second Face (Glass to Air)
                           \
                             R
                               \
                                 S
```

> **Figure 2.2** – Tracing rays through a rectangular glass block with optical pins (top-down view on the drawing paper). Pins $P$ and $Q$ define the incident ray. Segment $OO'$ is the refracted ray within the glass. Pins $R$ and $S$ align with the virtual line of sight of $P$ and $Q$ to trace the emergent ray.

**Step-by-Step Procedure:**
1. Secure the paper to the drawing board. Place the rectangular glass block flat on the paper and trace its rectangular boundary with a sharp pencil. Remove the block.
2. Mark a point of incidence $O$ on the upper edge and construct the normal $NN'$ perpendicular to that edge.
3. Using a protractor, draw an incident ray $AO$ making an angle of incidence $i = 30^\circ$ with the normal. Fix two optical pins $P$ and $Q$ vertically along this line, separated by at least $5\text{ cm}$.
4. Replace the glass block precisely over its drawn outline.
5. Looking through the opposite parallel face of the block from below, position your line of sight so that the images of pins $P$ and $Q$ seen through the glass appear in exact visual alignment.
6. Fix two additional pins $R$ and $S$ on the paper so that $R$, $S$, and the observed images of $P$ and $Q$ all lie along a single straight line of sight.
7. Remove the glass block and pins. Draw a straight line through pinpricks $S$ and $R$ extending to strike the lower interface at point $O'$.
8. Join points $O$ and $O'$ with a straight line. Segment $OO'$ represents the path of the **refracted ray** inside the glass.
9. Measure the angle of refraction $r$ between segment $OO'$ and the normal line at $O$.
10. Calculate $n = \frac{\sin i}{\sin r}$. Repeat the procedure for $i = 45^\circ$ and $i = 60^\circ$ and compute the average value.

**Sample Experimental Data:**

| Trial | Angle of Incidence ($i$) | Angle of Refraction ($r$) | $\sin i$ | $\sin r$ | Measured $n = \frac{\sin i}{\sin r}$ |
|---|---|---|---|---|---|
| 1 | $30^\circ$ | $19.5^\circ$ | $0.500$ | $0.334$ | **$1.50$** |
| 2 | $45^\circ$ | $28.0^\circ$ | $0.707$ | $0.469$ | **$1.51$** |
| 3 | $60^\circ$ | $35.0^\circ$ | $0.866$ | $0.574$ | **$1.51$** |

$$\text{Average Refractive Index } n = \frac{1.50 + 1.51 + 1.51}{3} \approx \mathbf{1.51}$$

*Conclusion:* Despite varying the angle of incidence from $30^\circ$ to $60^\circ$, the measured ratio $\frac{\sin i}{\sin r}$ remains virtually identical ($\approx 1.51$), confirming that $n$ is an intrinsic physical constant of the glass block.

*(Liquid Refractive Index Note: The refractive index of transparent liquids can be measured using apparent depth techniques with a travelling microscope, as detailed in Topic 3.)*

---

## Part G: Solved Examples

*(In all examples below, $c = 3 \times 10^8\text{ m/s}$ and $n_{\text{air}} = 1.00$. All trigonometric values are verified.)*

### Example 1: Calculating $n$ from Speed $v$

The speed of light in a particular type of glass is measured to be $v = 2.0 \times 10^8\text{ m/s}$. Calculate the absolute refractive index of this glass.

**Solution:**
1. Using the definition of refractive index:

   $$n = \frac{c}{v}$$

2. Substitute the values:

   $$n = \frac{3 \times 10^8\text{ m/s}}{2.0 \times 10^8\text{ m/s}} = \mathbf{1.50}$$

**Check:** $v = \frac{c}{n} = \frac{3 \times 10^8\text{ m/s}}{1.50} = 2.0 \times 10^8\text{ m/s}$ ✅. The result is dimensionless and greater than 1.

### Example 2: Calculating Speed $v$ from Refractive Index $n$

The refractive index of water is $1.33$. Determine the speed of light when propagating through water.

**Solution:**
1. Rearrange $n = \frac{c}{v}$ for speed:

   $$v = \frac{c}{n}$$

2. Substitute $c = 3 \times 10^8\text{ m/s}$ and $n = 1.33$:

   $$v = \frac{3 \times 10^8\text{ m/s}}{1.33} \approx \mathbf{2.26 \times 10^8\text{ m/s}}$$

**Check:** $n = \frac{c}{v} = \frac{3 \times 10^8\text{ m/s}}{2.26 \times 10^8\text{ m/s}} \approx 1.33$ ✅.

### Example 3: Determining $n$ from Angles of Incidence and Refraction

A ray of light traveling in air strikes an unknown transparent polymer at an angle of incidence $i = 60^\circ$ and refracts into the material at an angle $r = 35.3^\circ$. Determine the refractive index of this polymer.

**Solution:**
1. Given: $\sin 60^\circ \approx 0.8660$ and $\sin 35.3^\circ \approx 0.5779$.
2. Applying Snell's Law:

   $$n = \frac{\sin i}{\sin r} = \frac{0.8660}{0.5779} \approx \mathbf{1.50}$$

**Check:** $\sin r = \frac{\sin 60^\circ}{1.50} = \frac{0.8660}{1.50} \approx 0.5773 \implies r \approx 35.3^\circ$ ✅. Inside this polymer, light travels at $v = \frac{3 \times 10^8}{1.50} = 2.0 \times 10^8\text{ m/s}$, characteristic of optical-grade acrylic or crown glass.

### Example 4: Finding Angle $r$ from $n$ and $i$

A light ray passes from air into kerosene ($n = 1.44$) with an angle of incidence $i = 30^\circ$. Calculate the angle of refraction $r$ in the kerosene.

**Solution:**
1. Using Snell's Law:

   $$\sin r = \frac{\sin i}{n} = \frac{\sin 30^\circ}{1.44} = \frac{0.5000}{1.44} \approx 0.3472$$

2. Calculate $r$:

   $$r = \arcsin(0.3472) \approx \mathbf{20.3^\circ}$$

**Check:** $r = 20.3^\circ < 30^\circ$, confirming bending toward the normal for a rarer-to-denser transition ✅. Testing the ratio: $\frac{0.5000}{0.3472} \approx 1.44$ ✅.

### Example 5: Relative Refractive Index of Glass with Respect to Water

Given that $n_{\text{glass}} = 1.50$ and $n_{\text{water}} = 1.33$:
(a) Find the relative refractive index of glass with respect to water ($n_{gw}$).
(b) Find the relative refractive index of water with respect to glass ($n_{wg}$).

**Solution:**
1. For glass with respect to water:

   $$n_{gw} = \frac{n_{\text{glass}}}{n_{\text{water}}} = \frac{1.50}{1.33} \approx \mathbf{1.128}$$

2. For water with respect to glass:

   $$n_{wg} = \frac{n_{\text{water}}}{n_{\text{glass}}} = \frac{1.33}{1.50} \approx \mathbf{0.887}$$

**Check:** $n_{gw} \times n_{wg} = 1.128 \times 0.887 = 1.0005 \approx 1.00$ ✅. They are exact reciprocals of each other.

### Example 6: Speed of Light in Ethyl Alcohol

The refractive index of ethyl alcohol (ethanol) is $n = 1.36$. Calculate the speed of light propagating in ethyl alcohol.

**Solution:**
1. Using $v = \frac{c}{n}$:

   $$v = \frac{3 \times 10^8\text{ m/s}}{1.36} \approx \mathbf{2.21 \times 10^8\text{ m/s}}$$

**Check:** $2.21 \times 10^8\text{ m/s} \times 1.36 = 3.00 \times 10^8\text{ m/s}$ ✅. Note that light travels slightly slower in ethanol ($2.21 \times 10^8\text{ m/s}$) than in water ($2.26 \times 10^8\text{ m/s}$), consistent with $n_{\text{ethanol}} = 1.36 > n_{\text{water}} = 1.33$ ✅.

### Example 7: Ratio of Speeds in Two Media

Find the ratio of the speed of light in water ($n = 1.33$) to the speed of light in crown glass ($n = 1.50$).

**Solution:**
1. Express the speeds in terms of $c$ and $n$:

   $$v_{\text{water}} = \frac{c}{n_{\text{water}}}, \quad v_{\text{glass}} = \frac{c}{n_{\text{glass}}}$$

2. The ratio of speeds is:

   $$\frac{v_{\text{water}}}{v_{\text{glass}}} = \frac{c / n_{\text{water}}}{c / n_{\text{glass}}} = \frac{n_{\text{glass}}}{n_{\text{water}}} = \frac{1.50}{1.33} \approx \mathbf{1.128}$$

**Check:** Using explicit velocities: $\frac{2.26 \times 10^8\text{ m/s}}{2.00 \times 10^8\text{ m/s}} = 1.13 \approx 1.128$ ✅. Notice that $c$ cancels entirely: **the ratio of speeds depends solely on the inverse ratio of the refractive indices.**

### Example 8: Medium with Reduced Light Velocity

Inside an experimental optical crystalline medium, light is measured to propagate at $v = 1.5 \times 10^8\text{ m/s}$. What is the refractive index of this crystal?

**Solution:**
1. From the definition of $n$:

   $$n = \frac{c}{v} = \frac{3.0 \times 10^8\text{ m/s}}{1.5 \times 10^8\text{ m/s}} = \mathbf{2.00}$$

**Check:** $v = \frac{3.0 \times 10^8}{2.00} = 1.5 \times 10^8\text{ m/s}$ ✅. A refractive index of $2.00$ represents an exceptionally dense optical material, approaching the density of diamond ($n = 2.42$).

### Example 9: Time Taken by Light to Cross a Glass Block

A narrow laser pulse traveling in air strikes normally ($i = 0^\circ$) upon a glass plate of thickness $d = 3\text{ cm} = 0.03\text{ m}$ and refractive index $n = 1.50$.
(a) How much time does the pulse take to traverse the thickness of the glass?
(b) How much time would the pulse take to travel the same distance through air?

**Solution:**
1. (a) Speed of light inside the glass:

   $$v = \frac{c}{n} = \frac{3 \times 10^8\text{ m/s}}{1.50} = 2.0 \times 10^8\text{ m/s}$$

   Time taken in glass:

   $$t_{\text{glass}} = \frac{d}{v} = \frac{0.03\text{ m}}{2.0 \times 10^8\text{ m/s}} = \mathbf{1.5 \times 10^{-10}\text{ s}} \quad (0.15\text{ ns})$$

2. (b) Time taken in air ($v \approx c = 3 \times 10^8\text{ m/s}$):

   $$t_{\text{air}} = \frac{d}{c} = \frac{0.03\text{ m}}{3.0 \times 10^8\text{ m/s}} = \mathbf{1.0 \times 10^{-10}\text{ s}} \quad (0.10\text{ ns})$$

**Check:** $\frac{t_{\text{glass}}}{t_{\text{air}}} = \frac{1.5 \times 10^{-10}}{1.0 \times 10^{-10}} = 1.50 = n$ ✅. Light takes exactly $1.5$ times longer to traverse the glass than an equivalent distance in air, delaying the pulse by $\Delta t = 0.5 \times 10^{-10}\text{ s} = 0.05\text{ ns}$.

### Example 10: Snell's Law: Refraction from Water into Glass (Class 10 Overlap)

A light ray traveling inside a water container ($n_1 = 1.33$) strikes the flat glass bottom ($n_2 = 1.50$) at an angle of incidence $i = 30^\circ$. Calculate the angle of refraction $r$ inside the glass.

**Solution:**
1. Applying the symmetric form of Snell's Law:

   $$n_1 \sin i = n_2 \sin r$$

2. Solve for $\sin r$:

   $$\sin r = \frac{n_1 \sin i}{n_2} = \frac{1.33 \times \sin 30^\circ}{1.50} = \frac{1.33 \times 0.5000}{1.50} = \frac{0.6650}{1.50} \approx 0.4433$$

3. Find $r$:

   $$r = \arcsin(0.4433) \approx \mathbf{26.3^\circ}$$

**Check:** Because glass is optically denser than water ($1.50 > 1.33$), light must bend toward the normal, and indeed $r = 26.3^\circ < 30^\circ$ ✅. Testing reversibility: a ray incident from glass at $26.3^\circ$ yields $\sin i = \frac{1.50 \times 0.4433}{1.33} = 0.5000 \implies i = 30^\circ$ ✅.

### Example 11: Ranking Six Media by Optical Density

The table below lists the measured speed of light in six different transparent media. Compute the refractive index $n$ of each medium and arrange them in descending order of optical density (from most optically dense to least optically dense).

| Medium | Measured Speed of Light ($v$) |
|---|---|
| Water | $2.26 \times 10^8\text{ m/s}$ |
| Diamond | $1.24 \times 10^8\text{ m/s}$ |
| Air | $3.00 \times 10^8\text{ m/s}$ |
| Crown Glass | $1.97 \times 10^8\text{ m/s}$ |
| Dense Flint Glass | $1.82 \times 10^8\text{ m/s}$ |
| Ice | $2.29 \times 10^8\text{ m/s}$ |

**Solution:**
Calculate $n = \frac{c}{v}$ for each medium using $c = 3.00 \times 10^8\text{ m/s}$:

| Medium | Refractive Index: $n = \frac{3.00 \times 10^8}{v}$ |
|---|---|
| Diamond | $\frac{3.00}{1.24} \approx \mathbf{2.42}$ |
| Dense Flint Glass | $\frac{3.00}{1.82} \approx \mathbf{1.65}$ |
| Crown Glass | $\frac{3.00}{1.97} \approx \mathbf{1.52}$ |
| Water | $\frac{3.00}{2.26} \approx \mathbf{1.33}$ |
| Ice | $\frac{3.00}{2.29} \approx \mathbf{1.31}$ |
| Air | $\frac{3.00}{3.00} = \mathbf{1.00}$ |

**Ranked Order (From Most Optically Dense to Least Optically Dense):**

$$\mathbf{\text{Diamond } (2.42) > \text{Flint Glass } (1.65) > \text{Crown Glass } (1.52) > \text{Water } (1.33) > \text{Ice } (1.31) > \text{Air } (1.00)}$$

**Check:** Speed of light increases in the exact reverse order: $1.24 < 1.82 < 1.97 < 2.26 < 2.29 < 3.00$ ($\times 10^8\text{ m/s}$) ✅.

### Example 12: Dr. Bennett's Glass Blocks: Resolution of the Story

We now resolve Dr. Bennett's laboratory challenge to Sophia: *How did Dr. Bennett identify which block was crown glass and which was flint glass without damaging either?*

Dr. Bennett set up a compact red diode laser on a calibrated protractor mount. He directed a narrow laser beam at an angle of incidence $i = 45^\circ$ into each block in turn and measured the resulting angle of refraction $r$:

- For **crown glass** ($n = 1.52$):
  $$\sin r = \frac{\sin 45^\circ}{1.52} = \frac{0.7071}{1.52} \approx 0.4652 \implies \mathbf{r = 27.7^\circ}$$
- For **dense flint glass** ($n = 1.65$):
  $$\sin r = \frac{\sin 45^\circ}{1.65} = \frac{0.7071}{1.65} \approx 0.4285 \implies \mathbf{r = 25.4^\circ}$$

The block that produced the **smaller angle of refraction ($25.4^\circ$)** bent the beam more sharply toward the normal. That block was unambiguously identified as **flint glass**!

Furthermore, Dr. Bennett demonstrated the speed difference:
- In crown glass: $v = \frac{3 \times 10^8}{1.52} = \mathbf{1.97 \times 10^8\text{ m/s}}$
- In flint glass: $v = \frac{3 \times 10^8}{1.65} = \mathbf{1.82 \times 10^8\text{ m/s}}$

Sophia smiled in revelation. "Without any destructive testing, a single beam of light revealed the answer: **the material that bends light more sharply is the one with the higher refractive index!**"

"Precisely," Dr. Bennett affirmed. "And because flint glass bends light more strongly and possesses higher optical dispersion, it is prized for manufacturing high-precision camera lenses and fine crystal glassware."

---

## Common Pitfalls to Avoid

1. **Mistake 1: Inverting the formula as $n = v / c$**
   - *Error:* Writing $n = \frac{v}{c} = \frac{2 \times 10^8}{3 \times 10^8} = 0.67$.
   - *Correction:* The vacuum speed $c$ is always in the numerator: $n = \frac{c}{v} = \frac{3 \times 10^8}{2 \times 10^8} = 1.50$. An absolute refractive index can **never be less than 1**. If your calculated absolute index is less than 1, you have inverted the formula!

2. **Mistake 2: Believing an absolute refractive index can be less than 1**
   - *Error:* Stating that an exotic optical material has an absolute refractive index of $0.85$.
   - *Correction:* Because no signal travels faster than light in a vacuum ($v \le c$), $n = c / v \ge 1$ universally for all physical materials. Only a *relative* index ($n_{21} = n_2 / n_1$) can be less than 1 when moving from denser to rarer media.

3. **Mistake 3: Assuming that a higher refractive index means faster light**
   - *Error:* Thinking that diamond has the highest $n$ ($2.42$) because light travels fastest through it.
   - *Correction:* The relationship is inverse: $v = c / n$. A larger $n$ means light travels **slower**. Light crawls through diamond at $1.24 \times 10^8\text{ m/s}$, compared to $2.26 \times 10^8\text{ m/s}$ in water.

4. **Mistake 4: Confusing absolute and relative refractive index**
   - *Error:* Using $n = 1.50$ when analyzing a beam passing from water into glass.
   - *Correction:* The value $1.50$ is the refractive index of glass relative to vacuum/air. For a water-to-glass transition, one must use the relative index $n_{gw} = \frac{1.50}{1.33} \approx 1.128$, or apply $n_1 \sin i = n_2 \sin r$.

5. **Mistake 5: Believing that refractive index depends on the angle of incidence**
   - *Error:* Assuming that tilting a glass block changes its refractive index.
   - *Correction:* $n$ is an intrinsic physical constant of the medium. Changing $i$ changes $r$, but the ratio $\frac{\sin i}{\sin r}$ remains strictly constant.

6. **Mistake 6: Conflating optical density with mass density**
   - *Error:* Assuming that because turpentine oil floats on water, it must have a smaller refractive index than water.
   - *Correction:* Turpentine oil ($\rho \approx 870\text{ kg/m}^3$) is physically lighter than water ($\rho = 1000\text{ kg/m}^3$), but it is optically denser ($n = 1.47 > 1.33$).

---

## Quick Recap

- **Refractive Index ($n$):** A dimensionless measure of how much a medium slows down light: $n = \frac{c}{v}$. It has no units.
- **Universal Range:** For vacuum, $n = 1.0000$ exactly; for air, $n \approx 1.0003 \approx 1.00$. For all other material media, the absolute refractive index is strictly greater than 1 ($n > 1$).
- **Velocity Formula:** $v = \frac{c}{n}$. A larger $n$ corresponds to a slower speed of light and a higher optical density.
- **Snell's Law Relation:** When entering a medium from air, $n = \frac{\sin i}{\sin r}$. A higher $n$ produces a smaller $r$ (sharper bend toward the normal).
- **Representative Speeds:** Water ($n = 1.33$, $v \approx 2.26 \times 10^8\text{ m/s}$); Crown glass ($n = 1.50$, $v = 2.00 \times 10^8\text{ m/s}$); Diamond ($n = 2.42$, $v \approx 1.24 \times 10^8\text{ m/s}$).
- **Relative Refractive Index:** $n_{21} = \frac{n_2}{n_1} = \frac{v_1}{v_2} = \frac{\sin i}{\sin r}$. Reciprocal rule: $n_{12} = \frac{1}{n_{21}}$. Glass relative to water is $1.128$; water relative to glass is $0.887$.
- **Symmetric Snell's Law (Extension):** $n_1 \sin i = n_2 \sin r$.
- **Physical Influences:** $n$ depends on the material, the wavelength (colour) of light ($n_{\text{violet}} > n_{\text{red}}$), and temperature (slight decrease with heating); it is strictly **independent of the angle of incidence**.
- **Optical vs Mass Density:** Optical density measures light deceleration; mass density measures mass per volume. Kerosene and turpentine have lower mass densities than water, yet both are optically denser than water.
- **Laboratory Determination:** Tracing rays through a rectangular glass block using optical pins allows direct calculation of $n = \frac{\sin i}{\sin r}$.

---

## Practice Questions

1. The speed of light in an unknown transparent liquid is measured to be $2.5 \times 10^8\text{ m/s}$. Calculate its refractive index. ($c = 3 \times 10^8\text{ m/s}$)

2. The refractive index of turpentine oil is $1.47$. Calculate the speed of light propagating through turpentine oil.

3. A ray of light travels from air into dense flint glass ($n = 1.65$) at an angle of incidence $i = 50^\circ$. Calculate the angle of refraction $r$ inside the flint glass. (Given: $\sin 50^\circ = 0.7660$.)

4. A ray of light passes from air into an optical crystal. When the angle of incidence is $i = 60^\circ$, the measured angle of refraction is $r = 30^\circ$. Determine the refractive index of the crystal and the speed of light inside it.

5. Calculate the relative refractive index of dense flint glass ($n = 1.65$) with respect to crown glass ($n = 1.52$). Also determine the relative refractive index of crown glass with respect to dense flint glass.

6. Calculate the time required for light to travel a distance of $1\text{ m}$ through water ($n = 1.33$) and through air ($n = 1.00$). By how much time does the water transmission exceed the air transmission?

7. State whether each statement is True or False, and provide a one-line justification:
   (a) The refractive index is calculated as $n = v / c$.
   (b) The absolute refractive index of a transparent liquid can be $0.80$.
   (c) Light travels fastest in the medium with the highest refractive index.
   (d) The refractive index of a glass block increases when the angle of incidence is increased from $30^\circ$ to $60^\circ$.

8. A ray of light travels from water ($n = 1.33$) into crown glass ($n = 1.50$) at an angle of incidence of $45^\circ$. Calculate the angle of refraction $r$ inside the glass using $n_1 \sin i = n_2 \sin r$. *(Extension: Class 10 Overlap)*

9. Four transparent media $A, B, C$, and $D$ have refractive indices of $1.31, 1.46, 1.00$, and $2.42$ respectively. Arrange them in order of increasing optical density, and identify the medium in which light travels slowest.

10. Turpentine oil has a refractive index of $1.47$ and a mass density of approximately $870\text{ kg/m}^3$. Water has a refractive index of $1.33$ and a mass density of $1000\text{ kg/m}^3$. Which medium is optically denser, and which medium is physically lighter? What fundamental conclusion does this demonstrate?

11. Two optical blocks look visually identical. A ray of light incident at $45^\circ$ refracts at an angle of $28.1^\circ$ in the first block, and at $17.1^\circ$ in the second block. Calculate the refractive index of each block and identify which block is made of diamond. (Given: $\sin 28.1^\circ = 0.4710$, $\sin 17.1^\circ = 0.2940$.)

12. Explain in two or three sentences why the refractive index has no physical units, and why the absolute refractive index of any medium is never less than 1.

### Answers

1. By definition:
   $$n = \frac{c}{v} = \frac{3 \times 10^8\text{ m/s}}{2.5 \times 10^8\text{ m/s}} = \mathbf{1.20}$$
   *Check:* $v = \frac{3 \times 10^8}{1.20} = 2.5 \times 10^8\text{ m/s}$ ✅.

2. Using $v = \frac{c}{n}$:
   $$v = \frac{3 \times 10^8\text{ m/s}}{1.47} \approx \mathbf{2.04 \times 10^8\text{ m/s}}$$
   *Check:* $2.04 \times 10^8\text{ m/s} \times 1.47 \approx 3.00 \times 10^8\text{ m/s}$ ✅.

3. Applying Snell's Law:
   $$\sin r = \frac{\sin i}{n} = \frac{\sin 50^\circ}{1.65} = \frac{0.7660}{1.65} \approx 0.4642$$
   $$r = \arcsin(0.4642) \approx \mathbf{27.7^\circ}$$
   *Check:* $r = 27.7^\circ < 50^\circ$ (bends toward normal) ✅; $\frac{0.7660}{0.4642} \approx 1.65$ ✅.

4. Using Snell's Law with $\sin 60^\circ = 0.8660$ and $\sin 30^\circ = 0.5000$:
   $$n = \frac{\sin 60^\circ}{\sin 30^\circ} = \frac{0.8660}{0.5000} = \mathbf{1.732} \approx \sqrt{3}$$
   Speed of light inside the crystal:
   $$v = \frac{c}{n} = \frac{3 \times 10^8\text{ m/s}}{1.732} \approx \mathbf{1.73 \times 10^8\text{ m/s}}$$
   *Check:* $1.732 \times 1.732 \times 10^8 \approx 3.00 \times 10^8\text{ m/s}$ ✅.

5. Relative index of flint glass with respect to crown glass:
   $$n_{\text{flint, crown}} = \frac{n_{\text{flint}}}{n_{\text{crown}}} = \frac{1.65}{1.52} \approx \mathbf{1.086}$$
   Relative index of crown glass with respect to flint glass:
   $$n_{\text{crown, flint}} = \frac{n_{\text{crown}}}{n_{\text{flint}}} = \frac{1.52}{1.65} \approx \mathbf{0.921}$$
   *Check:* $1.086 \times 0.921 = 1.000$ ✅ (exact reciprocals).

6. Speed in water: $v_w = \frac{3 \times 10^8}{1.33} \approx 2.26 \times 10^8\text{ m/s}$.
   Time in water: $t_w = \frac{1\text{ m}}{2.26 \times 10^8\text{ m/s}} \approx \mathbf{4.43 \times 10^{-9}\text{ s}} \quad (4.43\text{ ns})$.
   Time in air: $t_a = \frac{1\text{ m}}{3.00 \times 10^8\text{ m/s}} \approx \mathbf{3.33 \times 10^{-9}\text{ s}} \quad (3.33\text{ ns})$.
   Difference:
   $$\Delta t = 4.43 \times 10^{-9}\text{ s} - 3.33 \times 10^{-9}\text{ s} = \mathbf{1.10 \times 10^{-9}\text{ s}} \quad (1.10\text{ ns})$$
   *Check:* $\frac{t_w}{t_a} = \frac{4.43}{3.33} \approx 1.33 = n_{\text{water}}$ ✅.

7. (a) **False** ❌. The refractive index is defined as $n = c / v$ (vacuum speed over medium speed).
   (b) **False** ❌. The absolute refractive index cannot be less than 1 ($n \ge 1$) because no medium permits light propagation faster than $c$.
   (c) **False** ❌. Light travels slowest in the medium with the highest $n$, since $v = c / n$.
   (d) **False** ❌. The refractive index is an intrinsic property of the medium and is strictly independent of the angle of incidence.

8. Applying $n_1 \sin i = n_2 \sin r$ with $\sin 45^\circ \approx 0.7071$:
   $$\sin r = \frac{n_1 \sin i}{n_2} = \frac{1.33 \times 0.7071}{1.50} = \frac{0.9405}{1.50} \approx 0.6270$$
   $$r = \arcsin(0.6270) \approx \mathbf{38.8^\circ}$$
   *Check:* $r = 38.8^\circ < 45^\circ$, consistent with entering a denser medium ($1.50 > 1.33$) ✅. Checking reversibility: $\frac{1.50 \times 0.6270}{1.33} \approx 0.7071 = \sin 45^\circ$ ✅.

9. In order of increasing optical density:
   $$\mathbf{C (1.00) < A (1.31) < B (1.46) < D (2.42)}$$
   Light travels **slowest in medium $D$** ($n = 2.42$), where its speed is $v = \frac{3 \times 10^8}{2.42} \approx 1.24 \times 10^8\text{ m/s}$.

10. Turpentine oil is **optically denser** than water ($n = 1.47 > 1.33$), meaning light propagates slower in turpentine oil ($2.04 \times 10^8\text{ m/s}$) than in water ($2.26 \times 10^8\text{ m/s}$). However, turpentine oil is **physically lighter** in mass density ($870\text{ kg/m}^3 < 1000\text{ kg/m}^3$) and floats on water. This demonstrates conclusively that **optical density is entirely independent of mass density**.

11. For the first block:
    $$n_1 = \frac{\sin 45^\circ}{\sin 28.1^\circ} = \frac{0.7071}{0.4710} \approx \mathbf{1.50} \quad (\text{Crown Glass})$$
    For the second block:
    $$n_2 = \frac{\sin 45^\circ}{\sin 17.1^\circ} = \frac{0.7071}{0.2940} \approx \mathbf{2.41} \quad (\text{Diamond})$$
    The **second block is made of diamond** ($n \approx 2.42$).
    *Check:* $1.50 \times 0.4710 \approx 0.707$ ✅; $2.41 \times 0.2940 \approx 0.708$ ✅.

12. The refractive index $n = c / v$ is a ratio of two identical quantities (speeds in $\text{m/s}$); the units cancel out completely, leaving $n$ as a dimensionless pure number. Furthermore, because light achieves its maximum possible velocity in a vacuum ($v \le c$), the ratio $c / v$ is universally greater than or equal to $1$, ensuring $n \ge 1$ for all physical media.

---

You now possess an exact quantitative command of refractive index: **$n = c / v$, and the greater the value of $n$, the slower light propagates and the more sharply it bends toward the normal.** Whenever you encounter an optical boundary, look first at the refractive indices of the two media: their ratio reveals the entire geometric and physical story.

**What comes next?** Having examined refraction at a single boundary, we now examine what happens when light passes entirely through a **rectangular glass slab** with two parallel faces. In Topic 3, we will discover why the emerging ray remains parallel to the incoming ray while experiencing a sideways **lateral shift**, and we will calculate the exact mathematical formulas for the **apparent depth** of submerged objects.
