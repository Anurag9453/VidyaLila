# Chapter: Light: Refraction (Part 4)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [light-refraction-part3.md](light-refraction-part3.md)** (covering passage through a glass slab, lateral shift, and apparent depth). The introductory laws of refraction and refractive index are established in [light-refraction.md](light-refraction.md) and [light-refraction-part2.md](light-refraction-part2.md).
> **Topics covered in this file:**
> 4. Total Internal Reflection

---

# Topic 4: Total Internal Reflection

In previous topics, we established that whenever light passes from an optically denser medium into an optically rarer medium (such as from glass or water into air), the refracted ray **bends away from the normal**, meaning that the angle of refraction $r$ is strictly greater than the angle of incidence $i$ ($r > i$).

Now consider an intriguing physical question: What happens if we continue to increase the angle of incidence inside the denser medium? Because $r > i$, the angle of refraction must approach $90^\circ$ long before $i$ reaches $90^\circ$. What occurs when the angle of refraction reaches $90^\circ$—and what happens if $i$ is increased even further? Can light refract beyond $90^\circ$? The answer is profound: light cannot refract into the second medium at all. Instead, **one hundred percent of the light energy rebounds entirely back into the denser medium**. This spectacular optical phenomenon is called **Total Internal Reflection (TIR)**, and it powers everything from transoceanic internet cables to the dazzling sparkle of cut diamonds.

---

## The Hair-Thin Strand and Maya's Question

On a Tuesday afternoon, network telecommunications engineer Mr. Davis arrived at Maya's home to install a high-speed fiber-optic broadband link. From his equipment kit, Mr. Davis retrieved a spool of transparent, flexible cabling containing strands of glass so slender they resembled human hair.

Maya, taking a break from her physics homework, leaned in with curiosity. "Mr. Davis, is that actual glass? It looks just like a spool of clear nylon thread."

"It is ultrapure fused silica glass, Maya," Mr. Davis replied. "This is an **optical fibre**. High-speed laser pulses carrying all your internet data—streaming video, voice calls, and data packets—will travel through this hair-thin strand in the form of light."

"Light inside a bent glass thread?" Maya asked skeptically.

To demonstrate, Mr. Davis switched on a portable red laser testing tool and aligned it with one polished end of a long length of the fiber. He then looped the flexible cable into several tight circular loops, coiling it around his hand like a lasso. At the opposite, open end of the fiber across the room, a brilliant, pin-sharp red dot of laser light illuminated the wall! The light had followed the looped, winding curves of the glass strand without spilling out.

Maya furrowed her brow in thought. "Wait, Mr. Davis—light travels in straight lines, and glass is completely transparent! How can light follow a curved, looped path? And why doesn't the light simply **escape out through the sides** of the transparent glass cylinder? It should be leaking in every direction!"

Mr. Davis chuckled with approval. "That is the central puzzle of optical engineering, Maya. The secret is that light can be completely **trapped inside transparent glass** through a universal law of optics called Total Internal Reflection. Once you understand the critical angle, you will see why not a single photon leaks out." We will resolve Maya's optical fiber question at the end of this topic.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Optically denser medium** | A medium possessing a higher refractive index, wherein light travels slower | Crown glass ($n = 1.50$), water ($n = 1.33$) |
| **Optically rarer medium** | A medium possessing a lower refractive index, wherein light travels faster | Air ($n = 1.00$) relative to glass or water |
| **Critical angle ($C$)** | The angle of incidence in the optically denser medium for which the angle of refraction in the rarer medium is exactly $90^\circ$ | For water–air, $C \approx 48.75^\circ$; for glass–air, $C \approx 41.8^\circ$ |
| **Total Internal Reflection (TIR)** | The phenomenon wherein $100\%$ of a light ray incident inside an optically denser medium at $i > C$ reflects back into that denser medium | Light guided inside an optical fibre |
| **Optical fibre** | A flexible, hair-thin cylindrical glass or plastic waveguide that transmits light signals over vast distances via repeated TIR | High-speed fiber-optic telecommunications cables |
| **Core and Cladding** | The inner cylindrical glass core (higher $n$) surrounded by an outer concentric glass layer called cladding (lower $n$) | Core: $n = 1.50$; Cladding: $n = 1.45$ |
| **Totally reflecting prism** | A right-angled isosceles glass prism ($45^\circ-45^\circ-90^\circ$) that deviates light rays through $90^\circ$ or $180^\circ$ via TIR | Prisms in binoculars and submarine periscopes |
| **Mirage** | An optical illusion caused by atmospheric refraction and TIR over hot surfaces, creating the appearance of pools of water | Roadway mirages on hot summer afternoons |

---

## Part A: The Confinement of Light: Angle by Angle

### The Familiar Refraction Law Revisited

In Topics 1 and 3, we established that when a ray of light passes from an **optically denser medium** into an **optically rarer medium** (such as from glass or water into ambient air), the ray **bends away from the normal**. Consequently, the angle of refraction $r$ is always greater than the angle of incidence $i$:

$$r > i$$

Now let us conduct a thought experiment in an optics laboratory. A light source placed inside a semicircular glass block directs a narrow ray toward the flat glass-air boundary at the centre. We observe what occurs as we gradually increase the angle of incidence $i$ from $0^\circ$ upward:

- **Case 1: Small angle of incidence ($i < C$):**
  The major portion of the incident beam transmits into the air, bending away from the normal ($r > i$). A very weak, faint reflected ray also rebounds back into the glass (as occurs at every optical interface).
- **Case 2: Critical angle of incidence ($i = C$):**
  As $i$ increases, the refracted ray bends further away from the normal, tilting closer and closer to the horizontal glass surface. At a specific angle of incidence, the refracted ray emerges **parallel to the interface**, grazing along the boundary with an angle of refraction of **$r = 90^\circ$**. This characteristic angle of incidence in the denser medium is defined as the **critical angle ($C$)**.
- **Case 3: Angle of incidence exceeds critical angle ($i > C$):**
  If the angle of incidence is increased even by a fraction of a degree beyond $C$, a refracted ray can no longer exist (it would require $\sin r > 1$, which is mathematically and physically impossible). Consequently, **refraction ceases entirely**. Exactly **$100\%$ of the incident light energy reflects back into the glass**. This reflected ray obeys the ordinary laws of reflection ($i = r$). This complete reflection inside the denser medium is called **Total Internal Reflection (TIR)**.

```
 Case 1: i < C             Case 2: i = C             Case 3: i > C

         N                         N                         N
         :     ↗ Refracted         :                         :
         :   / (r > i)             :                         :
 Air     : /                Air    :                  Air    :
 ========O=========         =======O==→→→→→→→→        =======O=========
 Glass  /:\                 Glass /:\ (r = 90°)       Glass /:\
      ↗  :  ↘                   ↗  :  ↘                   ↗  :  ↘
 Incident  Weak             Incident  Reflected       Incident  100% Total
 Ray       Reflected        Ray       Ray             Ray       Internal
           Ray                                                  Reflection
```

> **Figure 4.1** – The three optical regimes for a light ray traveling from an optically denser medium (glass) toward an optically rarer medium (air). 
> - **Case 1 ($i < C$):** Ordinary refraction into air ($r > i$) accompanied by weak surface reflection.
> - **Case 2 ($i = C$):** The critical condition; the refracted ray grazes the interface at $r = 90^\circ$.
> - **Case 3 ($i > C$):** Total Internal Reflection; no light enters air; $100\%$ rebounds into the glass obeying $i = r$.

### Definition of the Critical Angle

> **Critical Angle ($C$):** The critical angle is defined as the **angle of incidence in the optically denser medium** for which the corresponding **angle of refraction in the optically rarer medium is exactly $90^\circ$**.

*Key Clarification:* The critical angle is strictly an angle of **incidence** inside the denser material. The $90^\circ$ angle is the angle of **refraction** in the rarer medium that defines this transition boundary.

### The Two Mandatory Conditions for Total Internal Reflection

Total Internal Reflection is not an everyday occurrence at every boundary; it occurs **if and only if both of the following physical conditions are simultaneously fulfilled**:

1. **Light must travel from an optically denser medium toward an optically rarer medium.** (e.g., from glass into air, or from water into air). TIR can never occur when light travels from air into glass or water.
2. **The angle of incidence inside the denser medium must be strictly greater than the critical angle ($i > C$).**

If either condition is violated, TIR cannot take place.

---

## Part B: Mathematical Formula for the Critical Angle (Extension)

*(Extension Note: This derivation directly synthesizes Snell's Law with the definition of the critical angle, forming a core bridge between Class 9 and Class 10 optics.)*

According to Snell's Law in symmetric form:

$$n_1 \sin i = n_2 \sin r$$

When light travels from an optically denser medium of refractive index $n_1 = n$ toward an optically rarer medium of refractive index $n_2$ (such as air, where $n_2 = 1.00$):
At the critical condition, by definition:

$$i = C \quad \text{and} \quad r = 90^\circ$$

Substitute these boundary conditions into Snell's Law:

$$n \sin C = 1.00 \times \sin 90^\circ$$

Since $\sin 90^\circ = 1$:

$$n \sin C = 1 \implies \mathbf{\sin C = \frac{1}{n}}$$

Taking the inverse sine gives:

> **Critical Angle Equation:**
>
> $$C = \arcsin\left(\frac{1}{n}\right)$$
>
> For a boundary between any two transparent media ($n_1 > n_2$):
>
> $$\sin C = \frac{n_2}{n_1}$$

**Fundamental Insight:** The critical angle is **inversely related to the refractive index**: **the larger the refractive index $n$ of the medium, the smaller its critical angle $C$.**

Let us compute the critical angles for standard optical materials relative to air ($n_2 = 1.00$):

| Transparent Material | Refractive Index ($n$) | $\sin C = 1 / n$ | Critical Angle ($C$) |
|---|---|---|---|
| Pure Water | $1.33$ | $\frac{1}{1.33} \approx 0.7519$ | $\mathbf{48.75^\circ} \quad (\approx 49^\circ)$ |
| Crown Glass | $1.52$ | $\frac{1}{1.52} \approx 0.6579$ | $\mathbf{41.1^\circ} \quad (\approx 41^\circ)$ |
| Common Plate Glass | $1.50$ | $\frac{1}{1.50} \approx 0.6667$ | $\mathbf{41.8^\circ} \quad (\approx 42^\circ)$ |
| Dense Flint Glass | $1.65$ | $\frac{1}{1.65} \approx 0.6061$ | $\mathbf{37.3^\circ}$ |
| Diamond | $2.42$ | $\frac{1}{2.42} \approx 0.4132$ | $\mathbf{24.4^\circ}$ |

Key conclusions from this table:
- Every material has its own unique critical angle governed by its refractive index.
- Because refractive index varies slightly with colour (wavelength), the critical angle also varies slightly across the spectrum ($C_{\text{red}} > C_{\text{violet}}$).
- **Diamond possesses an extraordinarily small critical angle of just $24.4^\circ$!**

### Why Does Diamond Sparkle with Exceptional Brilliance?

Uncut, raw diamond looks dull, like a cloudy pebble. Its breathtaking brilliance is unlocked entirely through **expert geometric cutting** that exploits its remarkably low critical angle ($C = 24.4^\circ$).

A master diamond cutter shapes the gem with dozens of precision-angled planar facets. When light enters the top crown of the diamond, it refracts into the stone. Because the critical angle is so small ($24.4^\circ$), almost any internal light ray approaching an interior facet strikes it at an angle of incidence **greater than $24.4^\circ$**. 

Consequently, the light undergoes **multiple successive Total Internal Reflections**—bouncing repeatedly from facet to facet within the stone without escaping through the sides or bottom. Finally, the rays strike a top crown facet at an angle less than $24.4^\circ$ and emerge toward the observer's eye in concentrated, brilliant flashes. By contrast, in an ordinary cut glass imitation ($C \approx 42^\circ$), light striking internal facets at $30^\circ\text{ to }40^\circ$ easily refracts out the bottom and is lost, producing far less sparkle.

---

## Part C: Total Internal Reflection in Technology and Daily Life

Total Internal Reflection is not a theoretical abstraction; it is the cornerstone of modern communications, medical imaging, and atmospheric optics.

### 1. Optical Fibres

An **optical fibre** is a hair-thin, flexible dielectric waveguide constructed from ultrapure silica glass or optical polymers. It consists of two concentric structural layers:
- **Core:** The central cylindrical strand of ultra-clear glass, having a high refractive index ($n_1 \approx 1.50$).
- **Cladding:** A surrounding protective glass sheath, engineered with a slightly lower refractive index ($n_2 \approx 1.45$).

Because $n_{\text{core}} > n_{\text{cladding}}$, the core represents an optically denser medium surrounded by a rarer medium.

```
 =====================================================  Cladding (n2 = 1.45)
    /\      /\      /\      /\      /\
   /  \    /  \    /  \    /  \    /  \     Core (n1 = 1.50)
 →/    \  /    \  /    \  /    \  /    \→
 /      \/      \/      \/      \/      \
 =====================================================  Cladding (n2 = 1.45)
```

> **Figure 4.2** – Total Internal Reflection guiding light inside an optical fibre. A light ray launched into the core strikes the core-cladding boundary at an angle $i > C$. It undergoes repeated, lossless TIR, zig-zagging smoothly along the core even when the cable is flexed or coiled.

**How Light Is Guided:**
1. Laser pulses are launched into the core through an end face at a shallow angle relative to the fiber axis.
2. When the ray strikes the internal core-cladding boundary, its angle of incidence $i$ relative to the normal is typically $75^\circ\text{ to }85^\circ$—far exceeding the critical angle of the boundary ($C \approx 75.2^\circ$).
3. The ray undergoes **Total Internal Reflection**. Exactly $100\%$ of the optical energy is reflected back into the core.
4. The ray travels across to the opposite wall, strikes it at the same angle, undergoes another TIR, and continues zig-zagging forward through the cable over tens of kilometres with almost zero signal degradation.

**Why Fibres Can Bend:** Even when the fiber cable is gently looped or bent, the angle of incidence on the internal walls remains greater than the critical angle, keeping the light trapped. However, if the cable is kinked into an excessively sharp bend (violating the minimum bend radius), the angle of incidence can drop below $C$, allowing light to leak out and potentially cracking the glass core.

**Primary Applications:**
- **Telecommunications and Global Internet:** Fiber-optic backbones transmit billions of digital signals across cities and under transoceanic seabed cables using infrared laser pulses.
- **Medicine (Endoscopy):** An endoscope is a flexible medical probe containing coherent bundles of thousands of optical fibres. One bundle transmits bright illumination into internal organs (stomach, lungs, colon), while a second imaging bundle transmits a sharp, reflected video image back to a surgeon's display, enabling minimally invasive surgery without major incisions.

**Advantages Over Traditional Copper Cables:**
- Enormously higher data transmission bandwidth.
- Immunity to electromagnetic interference (radio noise, lightning, power lines).
- Extremely low signal attenuation over long distances.
- Lightweight, thin, and spark-free (safe in explosive environments).

### 2. Totally Reflecting Prisms

A **totally reflecting prism** is a right-angled isosceles glass prism with interior angles of **$45^\circ$, $45^\circ$, and $90^\circ$**, fabricated from glass with $n \approx 1.50$ (for which $C \approx 42^\circ$).

Because the prism angles ($45^\circ$) exceed the critical angle of glass ($42^\circ$), internal rays striking a glass-air face at $45^\circ$ undergo **Total Internal Reflection**. Such prisms are used to deviate light beams through either $90^\circ$ or $180^\circ$:

- **$90^\circ$ Beam Deviation:**
  A light ray enters normally ($i = 0^\circ$) through one of the shorter perpendicular faces $AB$. It enters undeviated and travels straight to the hypotenuse face $BC$. Because of the $45^\circ$ prism geometry, the ray strikes face $BC$ at an angle of incidence $i = 45^\circ$ to the normal. Since $45^\circ > 42^\circ$, the ray undergoes **Total Internal Reflection**, turning through $90^\circ$ and exiting normally through face $AC$ without deviation.
- **$180^\circ$ Beam Deviation (Porro Prism):**
  A ray enters normally through the long hypotenuse face. It travels inside and strikes each of the two shorter perpendicular faces successively at an incident angle of $45^\circ$. It undergoes two consecutive TIR reflections, turning through $90^\circ + 90^\circ = 180^\circ$, and emerges from the hypotenuse face traveling in the exact opposite direction, parallel to the incident ray.

```
   90° Deviation                    180° Deviation

      C
      │\                                   /\
      │ \                                 /  \
      │  \                               /    \
←←←←←←│   * (TIR at 45°)                /      \
      │   ↑\                           *→→→→→→→→* (Two TIRs)
      │   ↑ \                         /↑        ↓\
      │   ↑  \                       / ↑        ↓ \
      A───────B                     /  ↑        ↓  \
          ↑                        ──────────────────
      Incident Ray                     ↑        ↓
```

> **Figure 4.3** – Totally reflecting prisms. Left: $90^\circ$ deviation via single TIR on hypotenuse $BC$. Right: $180^\circ$ retroreflection via two successive TIRs on the perpendicular faces.

**Why Prisms Are Superior to Silvered Mirrors:**
1. **$100\%$ Reflectance:** A polished glass prism reflecting via TIR reflects practically $100\%$ of the incident light. A conventional silvered mirror absorbs $5\%\text{ to }10\%$ of light at its reflective backing, producing dimmer images.
2. **Permanent Durability:** Silver metallic coatings on mirrors corrode, peel, and tarnish over time. TIR relies on an immutable physical boundary between bulk glass and air; it never tarnishes or deteriorates.
3. **No Ghost Images:** Conventional back-silvered mirrors produce multiple faint "ghost reflections" from their front glass surface. A totally reflecting prism produces a single, razor-sharp optical image.

**Applications:** Submarine periscopes, prismatic binoculars (Porro prisms to invert images and fold optical paths), SLR cameras (pentaprism viewfinders), bicycle rear reflectors, and highway retroreflective "cat's eyes."

### 3. Mirages: The Illusion of Water on a Scorching Road

On a hot, sunny summer day, drivers frequently observe what looks like a shimmering pool of clear water on the asphalt highway a few hundred metres ahead. As the vehicle approaches, the puddle mysteriously vanishes, and the road surface is found to be bone-dry. This atmospheric optical illusion is called a **mirage** (specifically an *inferior mirage*).

```
 S (Light from Sky)
  \
   \                          Observer's Eye (E)
  --\------------------------/--------  Cooler, Denser Air (Higher n)
     \                      /
  ----\------------------/------------  Warming Air Layer
       \_              _/
  --------\___________/---------------  Hottest, Rarer Air Layer (Lowest n)
  =========== Roadway Asphalt ==========
```

> **Figure 4.4** – Ray path in a road mirage. Light from the open blue sky enters progressively hotter, rarer air layers near the black asphalt. Bending continuously away from the normal, its angle of incidence eventually exceeds the critical angle, undergoing total internal reflection upward to the observer's eye at $E$. The observer's brain projects the light backward along a straight line, perceiving an inverted virtual image of the blue sky on the ground, which appears as a shimmering pool of water.

**Physical Explanation:**
1. The black asphalt absorbs intense solar radiation, heating the air immediately adjacent to the road surface to very high temperatures.
2. Hot air expands and becomes less dense, resulting in a lower refractive index near the ground. As one moves vertically upward, the air is cooler and optically denser ($n$ increases with height).
3. Rays of light originating from the blue sky or distant clouds travel downward toward the ground, passing from cooler (denser) air into progressively warmer (rarer) air layers.
4. At each successive layer, the ray bends **away from the vertical normal**, curving into a shallower, more grazing trajectory.
5. Near the ground, the angle of incidence on a warm air layer finally **exceeds the critical angle**. Total internal reflection occurs, curving the light ray back upward into the cooler air and into the driver's eyes.
6. The human brain interprets light as having traveled in an uninterrupted straight line from the ground. The driver sees an image of the blue sky projected onto the road surface. Because atmospheric convection currents cause the rising hot air to ripple, the blue sky image shimmers and ripples—producing an uncanny visual facsimile of water!

*Important Truth:* A mirage is **not a psychological hallucination or mental trick**. It is a genuine, physically verifiable optical phenomenon. A camera photographs a mirage identically to human eyes! The only illusion is our cognitive misinterpretation of the reflected sky as liquid water.

### 4. Further Natural and Practical Demonstrations of TIR

- **Air Bubbles in an Aquarium:** An air bubble trapped inside water shines with a brilliant, silvery metallic luster. Because water is optically denser than air ($n = 1.33 > 1.00$), light rays traveling through water toward the curved surface of the bubble at angles $i > 48.75^\circ$ undergo TIR, reflecting strongly into an observer's eyes like miniature polished silver spheres.
- **Empty Test Tube Dipped in Water:** If an empty dry glass test tube is dipped obliquely into a beaker of water and viewed from above, its submerged walls shine like polished silver. Light passing through the water strikes the outer glass-air interface inside the tube at $i > C$, undergoing TIR. If water is poured *inside* the tube, the air boundary disappears, TIR ceases, and the silvery appearance vanishes instantly!
- **Illuminated Water Jet:** In a classic physics demonstration, a small hole is punctured in the side of a plastic water container, allowing a smooth, laminar stream of water to arc out into a bucket. If a laser pointer is directed into the container from behind the hole, the laser light enters the water jet. As the water arcs downward, the light undergoes repeated TIR along the curved stream of water, remaining completely trapped inside the liquid until it illuminates the bucket below. This demonstration inspired the invention of modern optical fibres!

---

## Part D: Solved Examples

*(In all calculations below, $c = 3.0 \times 10^8\text{ m/s}$ and $n_{\text{air}} = 1.00$. All mathematical values are verified.)*

### Example 1: Critical Angles of Three Common Substances

Calculate the critical angle relative to air for: (a) Water ($n = 1.33$), (b) Common glass ($n = 1.50$), (c) Diamond ($n = 2.42$). *(Class 10 Overlap)*

**Solution:**
Using $\sin C = \frac{1}{n} \implies C = \arcsin\left(\frac{1}{n}\right)$:
- (a) **Water:** $\sin C = \frac{1}{1.33} \approx 0.7519 \implies C = \arcsin(0.7519) \approx \mathbf{48.75^\circ} \quad (\approx 49^\circ)$
- (b) **Glass:** $\sin C = \frac{1}{1.50} \approx 0.6667 \implies C = \arcsin(0.6667) \approx \mathbf{41.81^\circ} \quad (\approx 42^\circ)$
- (c) **Diamond:** $\sin C = \frac{1}{2.42} \approx 0.4132 \implies C = \arcsin(0.4132) \approx \mathbf{24.41^\circ} \quad (\approx 24.4^\circ)$

**Check:** As $n$ increases ($1.33 < 1.50 < 2.42$), the critical angle shrinks ($48.75^\circ > 41.81^\circ > 24.41^\circ$) ✅. Testing: $1.33 \times \sin(48.75^\circ) = 1.33 \times 0.7519 = 1.000$ ✅.

### Example 2: Critical Angles for Arbitrary Refractive Indices (Extension)

Calculate the critical angle relative to air for two synthetic optical materials having refractive indices of: (a) $n = 1.414$, (b) $n = 2.00$.

**Solution:**
- (a) For $n = 1.414 \approx \sqrt{2}$:
  $$\sin C = \frac{1}{1.414} \approx 0.7072 \implies C = \arcsin(0.7072) \approx \mathbf{45.0^\circ}$$
- (b) For $n = 2.00$:
  $$\sin C = \frac{1}{2.00} = 0.5000 \implies C = \arcsin(0.5000) = \mathbf{30.0^\circ}$$

**Check:** $\sin 30.0^\circ = 0.5000 \implies n = 1 / 0.5 = 2.00$ ✅; $\sin 45.0^\circ = 0.7071 \implies n = 1 / 0.7071 \approx 1.414$ ✅.

### Example 3: Calculating Refractive Index from Critical Angle

(a) An unknown optical crystal has a measured critical angle of $30.0^\circ$ with air. Find its refractive index.
(b) A transparent liquid has a critical angle of $45.0^\circ$ with air. Find its refractive index.

**Solution:**
Using $n = \frac{1}{\sin C}$:
- (a) For $C = 30.0^\circ$:
  $$n = \frac{1}{\sin 30.0^\circ} = \frac{1}{0.5000} = \mathbf{2.00}$$
- (b) For $C = 45.0^\circ$:
  $$n = \frac{1}{\sin 45.0^\circ} = \frac{1}{0.7071} \approx \mathbf{1.414} \quad (\approx \sqrt{2})$$

**Check:** $\arcsin(1 / 2.00) = 30.0^\circ$ ✅; $\arcsin(1 / 1.414) = 45.0^\circ$ ✅.

### Example 4: Velocity of Light and Its Relationship to Critical Angle (Topic 2 Link)

In Topic 2, we learned that $v = c / n$. Calculate the speed of light in diamond ($n = 2.42$), and explain how this low speed relates directly to its critical angle.

**Solution:**
1. Speed of light in diamond:

   $$v = \frac{c}{n} = \frac{3.0 \times 10^8\text{ m/s}}{2.42} \approx \mathbf{1.24 \times 10^8\text{ m/s}}$$

2. By comparison, in common glass ($n = 1.50$):

   $$v = \frac{3.0 \times 10^8\text{ m/s}}{1.50} = 2.00 \times 10^8\text{ m/s}$$

**Check:** Inside diamond, light is decelerated by nearly $60\%$. Because $\sin C = \frac{1}{n} = \frac{v}{c}$, **the critical angle is directly proportional to the speed of light in that medium!** Slower light propagation ($v = 1.24 \times 10^8\text{ m/s}$) yields a remarkably small critical angle ($C = 24.4^\circ$), maximizing the trapping of light via Total Internal Reflection ✅.

### Example 5: Predicting TIR at a Glass–Air Interface

A ray of light traveling inside a glass block ($n = 1.50$, $C = 41.8^\circ$) strikes the glass-air boundary at angles of incidence: (a) $i = 30^\circ$, (b) $i = 42^\circ$, (c) $i = 50^\circ$. State whether Total Internal Reflection occurs in each case, and explain the outcome.

**Solution:**
- (a) **For $i = 30^\circ$:** Since $30^\circ < 41.8^\circ$ ($i < C$), **TIR does NOT occur**. The ray refracts into air away from the normal, with a weak reflected ray remaining in the glass.
- (b) **For $i = 42^\circ$:** Since $42^\circ > 41.8^\circ$ ($i > C$), **TIR occurs**. The entire beam is reflected back into the glass.
- (c) **For $i = 50^\circ$:** Since $50^\circ > 41.8^\circ$ ($i > C$), **TIR definitely occurs**. One hundred percent of the light rebounds into the glass.

**Check:** Applying Snell's Law to calculate $\sin r$ in air ($n_1 \sin i = 1 \times \sin r$):
- For $i = 30^\circ$: $\sin r = 1.50 \times \sin 30^\circ = 1.50 \times 0.5000 = 0.7500 < 1$ (refracted ray exists, $r = 48.6^\circ$) ✅.
- For $i = 42^\circ$: $\sin r = 1.50 \times \sin 42^\circ = 1.50 \times 0.6691 = 1.0037 > 1$ (no physical refracted ray can exist; TIR is mandatory) ✅.
- For $i = 50^\circ$: $\sin r = 1.50 \times \sin 50^\circ = 1.50 \times 0.7660 = 1.149 > 1$ (TIR mandatory) ✅.

### Example 6: Refraction at $i = 30^\circ$ from Glass into Air

A ray of light traveling inside glass ($n = 1.50$) strikes the boundary with air at an angle of incidence $i = 30^\circ$. Calculate the angle of refraction $r$ in the air.

**Solution:**
1. Apply Snell's Law ($n_1 \sin i = n_2 \sin r$):

   $$1.50 \times \sin 30^\circ = 1.00 \times \sin r$$

   $$\sin r = 1.50 \times 0.5000 = \mathbf{0.7500}$$

2. Find $r$:

   $$r = \arcsin(0.7500) \approx \mathbf{48.6^\circ}$$

**Check:** $r = 48.6^\circ > i = 30^\circ$, confirming bending away from the normal for a denser-to-rarer transition ✅. Since $48.6^\circ < 90^\circ$, the ray emerges safely into the air.

### Example 7: Right-Angled Isosceles Glass Prism in Air: Testing for TIR

A ray of light in air strikes one of the shorter perpendicular faces of a right-angled isosceles glass prism ($45^\circ-45^\circ-90^\circ$, $n = 1.50$) normally ($i = 0^\circ$). The ray enters the prism and proceeds to strike the long hypotenuse face from inside the glass. Will Total Internal Reflection occur?

**Solution:**
1. The ray strikes the first face normally ($i = 0^\circ$), so it passes through **undeviated** in a straight line.
2. From the geometry of a $45^\circ-45^\circ-90^\circ$ right triangle, the ray strikes the internal hypotenuse face at an angle of incidence of **$i = 45^\circ$** relative to the normal.
3. Compare $i$ with the critical angle for glass ($C = 41.8^\circ$):

   $$i = 45^\circ > C = 41.8^\circ$$

4. Light is traveling from a denser medium (glass) toward a rarer medium (air), and $i > C$. Both conditions are satisfied.

**Conclusion:** **Total Internal Reflection occurs.** Exactly $100\%$ of the beam reflects off the hypotenuse, turning through an angle of $90^\circ$ and exiting normally through the opposite short face (Figure 4.3, left).

**Check:** $\sin r = 1.50 \times \sin 45^\circ = 1.50 \times 0.7071 = 1.0607 > 1$, confirming that no refracted ray can enter the air ✅.

### Example 8: The Same Prism Submerged in Water: Testing for TIR

The right-angled prism from Example 7 ($n_1 = 1.50$) is now completely submerged inside a tank of water ($n_2 = 1.33$). A light ray again enters normally and strikes the internal hypotenuse face at an angle of incidence $i = 45^\circ$. Will Total Internal Reflection still occur?

**Solution:**
1. The boundary is now between glass ($n_1 = 1.50$) and **water** ($n_2 = 1.33$), not air!
2. Calculate the new critical angle for the glass-water interface:

   $$\sin C = \frac{n_2}{n_1} = \frac{1.33}{1.50} \approx 0.8867$$

   $$C = \arcsin(0.8867) \approx \mathbf{62.5^\circ}$$

3. Compare the angle of incidence with the new critical angle:

   $$i = 45^\circ < C = 62.5^\circ$$

**Conclusion:** **TIR will NOT occur.** Because $45^\circ$ is less than the new critical angle ($62.5^\circ$), the ray refracts out of the glass into the water!

**Check:** Calculate the angle of refraction in water:
$$\sin r = \frac{n_1 \sin i}{n_2} = \frac{1.50 \times \sin 45^\circ}{1.33} = \frac{1.50 \times 0.7071}{1.33} \approx 0.7975 < 1 \implies r = \arcsin(0.7975) \approx \mathbf{52.9^\circ}$$
*Profound Lesson:* Total Internal Reflection is **not a property of the glass alone**; it depends strictly on the **ratio of refractive indices between both media**.

### Example 9: Critical Angle at a Glass–Water Interface (Extension)

Calculate the critical angle for light passing from crown glass ($n_1 = 1.50$) into water ($n_2 = 1.33$). Compare this value to the critical angle for the glass-air boundary. *(Class 10 Overlap)*

**Solution:**
1. For glass into water:

   $$\sin C_{gw} = \frac{n_{\text{water}}}{n_{\text{glass}}} = \frac{1.33}{1.50} \approx 0.8867 \implies C_{gw} = \arcsin(0.8867) \approx \mathbf{62.46^\circ}$$

2. For glass into air:

   $$\sin C_{ga} = \frac{n_{\text{air}}}{n_{\text{glass}}} = \frac{1.00}{1.50} \approx 0.6667 \implies C_{ga} = \arcsin(0.6667) \approx \mathbf{41.81^\circ}$$

**Comparison:** $C_{gw} = 62.46^\circ$ is **significantly larger** than $C_{ga} = 41.81^\circ$. When the difference in refractive index between two media is small, light decelerates/accelerates less across the boundary, requiring a much steeper, more grazing angle of incidence to achieve Total Internal Reflection.

### Example 10: Circular Illuminance Disk of a Submerged Lamp (Extension)

A point light source is submerged at a depth $h = 2.0\text{ m}$ below the surface of a calm pond of water ($n = 1.33$). Calculate the radius of the illuminated circular patch of light on the water surface through which light can emerge into the air.

**Solution:**
1. Light rays originating from the lamp strike the water surface at various angles of incidence. Rays with $i < C$ refract out into the air. Rays striking at $i > C$ undergo Total Internal Reflection and bounce back downward into the water.
2. Therefore, light escapes only through a circular disc directly above the lamp, whose outer boundary is defined by rays incident at exactly the critical angle $i = C$.
3. For water ($n = 1.33$):

   $$C = \arcsin\left(\frac{1}{1.33}\right) \approx 48.75^\circ$$

4. In the vertical right-angled triangle formed by the lamp, the surface centre, and the disc rim:

   $$\tan C = \frac{R}{h} \implies R = h \tan C$$

5. Substitute $h = 2.0\text{ m}$ and $\tan(48.75^\circ) \approx 1.140$:

   $$R = 2.0\text{ m} \times 1.140 = \mathbf{2.28\text{ m}}$$

**Check:** An observer looking down from above sees an illuminated circular window of diameter $D = 2R = 4.56\text{ m}$. Beyond this circle, the water surface acts as a mirror reflecting the dark pond bed via TIR ✅.

### Example 11: Core–Cladding Critical Angle in an Optical Fibre (Extension)

An optical communication fiber has a silica core with $n_1 = 1.50$ surrounded by a cladding with $n_2 = 1.45$.
(a) Determine the critical angle at the core-cladding boundary.
(b) What does this critical angle dictate about how light rays must travel inside the fiber?

**Solution:**
1. (a) Applying $\sin C = \frac{n_2}{n_1}$:

   $$\sin C = \frac{1.45}{1.50} \approx 0.9667 \implies C = \arcsin(0.9667) \approx \mathbf{75.2^\circ}$$

2. (b) The critical angle at the core-cladding boundary is $75.2^\circ$. To achieve TIR, rays must strike the internal cylindrical walls at an angle $i > 75.2^\circ$ relative to the normal. This means the rays must propagate nearly parallel to the fiber's central axis, making an angle with the axis of less than $90^\circ - 75.2^\circ = 14.8^\circ$.

**Check:** $\sin 75.2^\circ \approx 0.9667$ ✅. This demonstrates why telecommunications engineers must launch laser pulses into fibers within a narrow acceptance cone, and why bending cables too sharply causes data leakage.

### Example 12: Maya's Question and the Optical Fibre: Resolution of the Story

We now return to Maya's question to Mr. Davis: *Why didn't the laser light escape through the transparent sides of the looped glass fiber?*

Mr. Davis explained the quantitative physics using the numbers from our calculations:

"When I shone the red laser into the polished end of the fiber, the light entered nearly parallel to the cable's central axis. Inside the core ($n = 1.50$), whenever the ray approached the outer boundary with the air or cladding ($C \approx 42^\circ\text{ to }75^\circ$), it struck the boundary at a grazing angle of incidence of approximately $80^\circ$ relative to the normal.

Because $80^\circ$ is far greater than the critical angle, **Total Internal Reflection occurred**. One hundred percent of the light bounced off the internal surface and remained locked within the glass core. Even when I coiled the fiber into circular loops, the angle of incidence on the smooth curved boundary stayed well above the critical angle. The light was trapped in an endless zig-zag corridor of perfect internal mirrors!"

Maya looked at the shining red dot on the wall with complete clarity. "So transparent glass behaves like a $100\%$ reflective mirror, simply because light is trying to leave a dense medium at too shallow an angle!"

"Exactly," Mr. Davis agreed with a smile. "And that single optical principle carries virtually all of humanity's global communications today."

---

## Common Pitfalls to Avoid

1. **Mistake 1: Believing TIR can occur when entering a denser medium**
   - *Error:* Claiming that light traveling from air into glass can undergo TIR at an incident angle of $80^\circ$.
   - *Correction:* The first necessary condition for TIR is that light must travel from an **optically denser medium toward an optically rarer medium**. When entering glass from air, light refracts towards the normal at all angles; TIR is physically impossible.

2. **Mistake 2: Assuming a large angle alone causes TIR regardless of media**
   - *Error:* Thinking $i > 45^\circ$ always causes TIR.
   - *Correction:* TIR requires **both** conditions simultaneously: light must be in the denser medium **and** $i > C$.

3. **Mistake 3: Conflating the critical angle with the angle of refraction**
   - *Error:* Calling $90^\circ$ the critical angle.
   - *Correction:* The critical angle $C$ is the angle of **incidence** in the denser medium (e.g., $41.8^\circ$ in glass). The $90^\circ$ angle is the resulting angle of **refraction** in the rarer medium.

4. **Mistake 4: Believing the critical angle is universal for all materials**
   - *Error:* Using $C = 42^\circ$ for water or diamond.
   - *Correction:* $C = \arcsin(1 / n)$. Each material has a distinct critical angle: water is $48.75^\circ$, crown glass is $41.8^\circ$, and diamond is $24.4^\circ$.

5. **Mistake 5: Treating a mirage as a mental hallucination**
   - *Error:* Claiming that a mirage is merely an imaginary trick of a tired mind.
   - *Correction:* A mirage is a genuine physical phenomenon created by continuous atmospheric refraction and Total Internal Reflection. A standard camera captures mirages identically to human eyes.

6. **Mistake 6: Conflating TIR with ordinary reflection from a mirror**
   - *Error:* Thinking TIR is just ordinary reflection.
   - *Correction:* Ordinary reflection occurs at any surface, reflects only a portion of the light ($90\%\text{ to }95\%$), and occurs in any medium. TIR reflects **$100\%$ of the incident light with zero absorption**, requires no metallic coating, and occurs exclusively at a denser-to-rarer boundary when $i > C$.

---

## Quick Recap

- **Total Internal Reflection (TIR):** The complete reflection of a light ray back into an optically denser medium when striking the boundary with a rarer medium at an angle of incidence exceeding the critical angle.
- **Two Mandatory Conditions for TIR:**
  1. Light must travel from an **optically denser medium to an optically rarer medium**.
  2. The angle of incidence in the denser medium must exceed the critical angle (**$i > C$**).
- **Critical Angle ($C$):** The angle of incidence in the denser medium for which the angle of refraction in the rarer medium is exactly $90^\circ$.
- **Mathematical Formula (Extension):** $\sin C = \frac{1}{n}$ (for boundary with air); $\sin C = \frac{n_2}{n_1}$ (for two media where $n_1 > n_2$).
- **Standard Critical Angles:** Water ($n = 1.33$, $C \approx 48.75^\circ \approx 49^\circ$); Crown glass ($n = 1.50$, $C \approx 41.8^\circ \approx 42^\circ$); Diamond ($n = 2.42$, $C \approx 24.4^\circ$).
- **Diamond Brilliance:** The exceptionally small critical angle ($24.4^\circ$) causes repeated internal TIR off precision-cut facets, concentrating light into dazzling flashes.
- **Optical Fibres:** Built with a high-$n$ core surrounded by a lower-$n$ cladding. Light launched at shallow angles undergoes repeated, lossless TIR, guiding data signals over transoceanic distances and enabling medical endoscopy.
- **Totally Reflecting Prisms ($45^\circ-45^\circ-90^\circ$):** Exploit $C_{\text{glass}} \approx 42^\circ < 45^\circ$ to turn light through $90^\circ$ or $180^\circ$. Superior to silvered mirrors because they offer $100\%$ reflection, no tarnishing, and no ghost images.
- **Atmospheric Mirage:** Scorching asphalt creates hot, low-density air layers near the ground. Downward-traveling light from the sky refracts continuously away from the normal until $i > C$, undergoing TIR upward. Observers perceive an inverted virtual image of the blue sky, resembling shimmering water.
- **Submerged Lamp Illuminance Disc:** Light from a submerged source escapes into air only through a surface circle of radius $R = h \tan C$.

---

## Practice Questions

1. Calculate the critical angle for a transparent optical plastic of refractive index $n = 1.25$ when light passes from the plastic into air. *(Class 10 Overlap)*

2. The critical angle of an unknown transparent gemstone is measured to be $40.0^\circ$. Calculate its refractive index. *(Class 10 Overlap)*

3. State whether each statement is True or False, and provide a one-line justification:
   (a) Total Internal Reflection can occur when light travels from air into glass.
   (b) Total Internal Reflection can occur when light travels from water into air at an angle of incidence of $30^\circ$.
   (c) The critical angle of diamond is smaller than the critical angle of glass.
   (d) In Total Internal Reflection, $100\%$ of the incident light energy is reflected and none is refracted.

4. A ray of light inside crown glass ($n = 1.50$) strikes the glass-air boundary at an angle of incidence of $35.0^\circ$. Will it undergo Total Internal Reflection? If not, calculate the angle of refraction in the air.

5. Explain in two or three sentences why a diamond sparkles with dramatically greater brilliance than a similarly cut piece of ordinary glass.

6. Explain why an air bubble trapped inside an aquarium, or an empty dry test tube submerged obliquely in water and viewed from the side, shines with a brilliant silvery luster.

7. Describe how an optical fibre confines light within its core even when the cable is flexed or curved. Name two major modern applications of optical fibres.

8. A right-angled glass prism ($n = 1.50$, angles $45^\circ-45^\circ-90^\circ$) is situated in air. A ray of light traveling inside the glass strikes the hypotenuse face from within at an angle of incidence of $45^\circ$. Will Total Internal Reflection occur? Justify your answer using the critical angle.

9. A miniature electric bulb is submerged at a depth of $3.0\text{ m}$ below the surface of a calm swimming pool ($n = 1.33$). Calculate the radius of the circular illuminated disc on the water surface through which light emerges into the air. *(Extension)*

10. Explain in your own words why a vehicle driver observes an apparent "pool of water" on a distant hot roadway on a sunny afternoon. Is a mirage an optical illusion of the eye, or a genuine physical refraction phenomenon?

11. Why is a totally reflecting glass prism preferred over a silvered plane mirror in optical instruments such as periscopes and binoculars? State two distinct reasons.

12. Light travels inside a block of crown glass with $n = 1.50$. Calculate the critical angle for the glass-water interface ($n_{\text{water}} = 1.33$). Is this critical angle larger or smaller than the critical angle for the glass-air interface? Explain why. *(Class 10 Overlap)*

### Answers

1. Using $\sin C = \frac{1}{n}$:
   $$\sin C = \frac{1}{1.25} = 0.8000 \implies C = \arcsin(0.8000) \approx \mathbf{53.1^\circ}$$
   *Check:* $\sin 53.1^\circ \approx 0.8000$ ✅.

2. Using $n = \frac{1}{\sin C}$:
   $$n = \frac{1}{\sin 40.0^\circ} = \frac{1}{0.6428} \approx \mathbf{1.556} \quad (\approx 1.56)$$
   *Check:* $\arcsin(1 / 1.556) = \arcsin(0.6427) \approx 40.0^\circ$ ✅.

3. (a) **False** ❌. Light traveling from air into glass moves from a rarer to a denser medium; TIR can occur only when light moves from a denser to a rarer medium.
   (b) **False** ❌. The critical angle for water-air is $48.75^\circ$. At $i = 30^\circ < 48.75^\circ$, ordinary refraction occurs.
   (c) **True** ✅. $C_{\text{diamond}} \approx 24.4^\circ$, which is much smaller than $C_{\text{glass}} \approx 41.8^\circ$.
   (d) **True** ✅. In TIR, exactly $100\%$ of the incident light reflects back; there is zero refracted transmission.

4. The critical angle for glass-air is $C = \arcsin(1 / 1.50) \approx 41.8^\circ$.
   Since $i = 35.0^\circ < 41.8^\circ$, **TIR does NOT occur**.
   Applying Snell's Law ($1.50 \sin 35.0^\circ = 1.00 \sin r$):
   $$\sin r = 1.50 \times 0.5736 = 0.8604 \implies r = \arcsin(0.8604) \approx \mathbf{59.4^\circ}$$
   *Check:* $r = 59.4^\circ > 35.0^\circ$ (bends away from normal, as expected) ✅.

5. Diamond has an exceptionally high refractive index ($n = 2.42$), resulting in a very small critical angle of just $24.4^\circ$ compared to $\approx 42^\circ$ for ordinary glass. Consequently, light entering a faceted diamond strikes internal faces at angles greater than $24.4^\circ$ over a vast range of orientations, undergoing multiple successive Total Internal Reflections before exiting through the top crown. In glass, light strikes at angles below $42^\circ$ and easily escapes through the bottom, producing far less internal sparkle.

6. Water ($n = 1.33$) is optically denser than the air ($n = 1.00$) inside the bubble or dry test tube. Light rays traveling through water strike the outer curved glass-air interface at angles exceeding the critical angle of water ($48.75^\circ$). Total Internal Reflection occurs, reflecting $100\%$ of the incident light directly into the observer's eyes, mimicking the brilliant specular reflection of a polished silver mirror.

7. An optical fibre consists of an inner core of high refractive index ($n_1$) surrounded by a cladding of slightly lower refractive index ($n_2$). Light launched into the core strikes the core-cladding boundary at an incident angle exceeding the critical angle, undergoing repeated, lossless Total Internal Reflection along a zig-zag trajectory. Two major applications: high-speed global telecommunications/internet cables and medical endoscopy for internal surgical visualization.

8. For crown glass in air, the critical angle is $C = \arcsin(1 / 1.50) \approx 41.8^\circ$. Because the ray strikes the hypotenuse face from within the glass at an angle of incidence $i = 45^\circ > 41.8^\circ$, and light is traveling from a denser medium (glass) toward a rarer medium (air), **Total Internal Reflection will definitely occur**.
   *Check:* $\sin r = 1.50 \times \sin 45^\circ = 1.50 \times 0.7071 = 1.0607 > 1$ ✅.

9. The critical angle for water is $C = \arcsin(1 / 1.33) \approx 48.75^\circ$.
   In the right-angled triangle formed between the lamp, surface center, and disc boundary:
   $$R = h \tan C = 3.0\text{ m} \times \tan(48.75^\circ) = 3.0\text{ m} \times 1.140 \approx \mathbf{3.42\text{ m}}$$
   *Check:* In Example 10, $h = 2.0\text{ m}$ yielded $R = 2.28\text{ m}$. Scaling linearly with depth: $\frac{3.0}{2.0} \times 2.28\text{ m} = 3.42\text{ m}$ ✅.

10. The asphalt absorbs intense sunlight, heating the air immediately above it so that air density and refractive index increase with height. Light rays from the sky traveling downward through progressively hotter, rarer air layers bend away from the normal until $i > C$, undergoing Total Internal Reflection upward toward the driver's eyes. The driver perceives an inverted, shimmering virtual image of the blue sky on the ground, which resembles water. A mirage is a **genuine physical phenomenon** caused by real refraction and TIR (photographable by cameras), not a psychological delusion.

11. Two reasons:
    (1) **$100\%$ Optical Efficiency:** TIR reflects practically $100\%$ of the light energy without absorption loss, whereas silvered mirrors absorb $5\%\text{ to }10\%$ of light at each reflection, producing dimmer images.
    (2) **Permanent Durability:** Silver coatings on mirrors tarnish, corrode, and scratch over time, whereas total internal reflection depends purely on the immutable bulk glass interface and never deteriorates. (Additionally, prisms eliminate ghost images caused by front-surface reflections in thick glass mirrors.)

12. Applying $\sin C = \frac{n_2}{n_1}$:
    $$\sin C_{gw} = \frac{1.33}{1.50} \approx 0.8867 \implies C_{gw} = \arcsin(0.8867) \approx \mathbf{62.46^\circ}$$
    This is **significantly larger** than the glass-air critical angle ($41.81^\circ$). Because the refractive index ratio between glass and water ($1.50 / 1.33 = 1.128$) is much smaller than between glass and air ($1.50 / 1.00 = 1.50$), light experiences less deceleration across the boundary, requiring a steeper, more grazing angle of incidence ($> 62.46^\circ$) to achieve Total Internal Reflection.

---

You now possess an advanced, comprehensive mastery of Total Internal Reflection: **when light travels from an optically denser medium toward an optically rarer medium and strikes the interface at an angle exceeding the critical angle ($i > C$), refraction ceases entirely and $100\%$ of the light reflects internally.** 

**What comes next?** Having investigated flat boundaries, rectangular blocks, and internal reflections, we now venture into the transformative domain of curved refracting surfaces: **Lenses**. In Topic 5, we will discover how curving a glass surface enables convex and concave lenses to converge and diverge light rays, forming real and virtual images that empower magnifying glasses, cameras, microscopes, and human vision.
