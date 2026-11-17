# Chapter: Light: Refraction (Part 6)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [light-refraction-part5.md](light-refraction-part5.md)** (covering convex and concave lenses, optical centre $O$, principal axis, principal foci $F_1$ and $F_2$, focal length $f$, and the three principal rays). For introductory concepts on refraction, see [light-refraction.md](light-refraction.md). For mirror ray-tracing conventions and real vs. virtual image comparisons, see [light-reflection-part5.md](../light-reflection/light-reflection-part5.md).
> **Topics covered in this file:**
> 6. Image Formation by Lenses, Lens Formula, and Power

---

# Topic 6: Image Formation by Lenses, Lens Formula, and Power

In the previous topic, we established the fundamental taxonomy of curved optical media: the **convex lens** (converging, thicker in the middle) and the **concave lens** (diverging, thinner in the middle). We defined their primary spatial landmarks—the optical centre $O$, principal axis, principal foci $F_1$ and $F_2$, and focal length $f$—and mastered the **three standard principal rays**:
1. A ray incident parallel to the principal axis refracts through $F_2$ in a convex lens (or appears to diverge from $F_1$ in a concave lens).
2. A ray passing through $F_1$ in a convex lens (or directed toward $F_2$ in a concave lens) emerges parallel to the principal axis.
3. A ray passing directly through the optical centre $O$ travels straight forward without deviation.

Now, we address the central practical question of geometric optics: **when an object is placed at different distances in front of a lens, where does its image form, what is its orientation, is it real or virtual, and how large is it?**
In this topic, we will construct complete geometric ray diagrams across all six canonical object positions for a convex lens and all positions for a concave lens. We will unlock the optical design of cameras, magnifying glasses, and theatre projectors. Finally, we will formalize these behaviors mathematically using the **lens formula** ($1/v - 1/u = 1/f$), **linear magnification** ($m = v/u$), and calculate the **optical power** of lenses in dioptres ($P = 1/f$).

---

## The School Auditorium Projector

During the annual Science Symposium at Oakridge Academy, students gathered in the multimedia auditorium for a guest lecture. At the back of the hall stood an optical transparency projector operated by physics instructor Mr. Vance. Class 9 student Maya was seated near the demonstration bench.

Inside the projector's illumination chamber sat a small, transparent photographic slide: a color transparency of the Eiffel Tower, measuring just **$3	ext{ cm}$ across**. Yet, when Mr. Vance powered on the high-intensity halogen lamp, a colossal image of the Eiffel Tower appeared projected across the auditorium screen **$3	ext{ meters}$ away**, towering over two meters tall!

However, a comical mishap occurred at the start: when Mr. Vance initially loaded the slide into the carriage right-side up, the Eiffel Tower on the screen appeared **hilariously upside-down**, with its pointed spire resting on the stage floor and its arched base suspended in the air! Chuckling, Mr. Vance slipped the slide holder out, turned the transparency **upside down**, and inserted it back into the carriage. Instantly, the Eiffel Tower on the screen stood proud and perfectly upright.

At first, the projected picture was somewhat fuzzy and out of focus. Mr. Vance reached for the barrel of the objective lens and turned a grooved focus dial, sliding the lens forward by barely **a millimeter or two**. Like magic, the blurry borders snapped into razor-sharp, breathtaking clarity!

Maya raised her hand in fascination. "Mr. Vance, how can a tiny three-centimeter slide produce a giant three-meter image on a distant wall? Why did you have to put the slide in upside-down to make the picture look right-side up? And how can shifting the lens by just a millimeter make the difference between a total blur and perfect sharpness?"

Mr. Vance smiled warmly. "Those three questions, Maya, are all answered by the exact same physical law: **the position, size, and orientation of an image formed by a convex lens depend entirely on the distance between the object and the lens's focal point**. Today, we will trace the paths of light rays geometrically to discover why projectors invert and magnify, why magnifying glasses enlarge without inverting, and how optical engineers calculate lens positions down to the millimeter!"

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Object distance ($u$)** | The linear distance along the principal axis from the optical centre $O$ to the object | An object placed $30	ext{ cm}$ in front of the lens: $u = -30	ext{ cm}$ |
| **Image distance ($v$)** | The linear distance along the principal axis from the optical centre $O$ to the image | A real image forming $15	ext{ cm}$ behind the lens: $v = +15	ext{ cm}$ |
| **Real image** | An image formed by the physical intersection of refracted light rays; can be captured on a screen | The sharp image cast on the auditorium projector screen |
| **Virtual image** | An image formed where refracted rays only appear to diverge when traced backward; cannot be projected onto a screen | The enlarged upright image seen through a handheld magnifying glass |
| **Linear magnification ($m$)** | The ratio of image height ($h'$) to object height ($h$): $m = h'/h = v/u$ | $m = -2$ indicates an inverted real image twice the size of the object |
| **Lens formula** | The mathematical relation connecting object distance $u$, image distance $v$, and focal length $f$: $1/v - 1/u = 1/f$ | Given $f = +10	ext{ cm}$ and $u = -30	ext{ cm}$, solving yields $v = +15	ext{ cm}$ |
| **Optical power ($P$)** | A quantitative measure of a lens's ability to bend (converge or diverge) light rays: $P = 1/f$ (with $f$ in meters) | A convex lens with $f = +0.5	ext{ m}$ has an optical power of $+2	ext{ D}$ |
| **Dioptre ($	ext{D}$)** | The SI unit of optical lens power, equivalent to inverse meters ($1	ext{ D} = 1	ext{ m}^{-1}$) | Prescriptions such as $+2.5	ext{ D}$ (convex) or $-1.5	ext{ D}$ (concave) |

---

## Part A: How Images Are Formed Using Ray Diagrams

The geometric construction of an image formed by refraction through a lens follows the same rigorous logic as spherical mirror ray tracing (studied in [light-reflection-part5.md](../light-reflection/light-reflection-part5.md)). The key physical difference is that light **transmits across and through** the lens rather than bouncing backward.

To determine the location, size, and nature of the image of an object:
1. We represent the object as an upright arrow $AB$ standing perpendicularly on the principal axis, with its base $B$ resting on the axis and its head $A$ at height $h$.
2. From the object's head $A$, we select **any two of the three standard principal rays**:
   - **Ray 1:** Parallel to the principal axis $\implies$ passes through the second focus $F_2$ on the opposite side (for a convex lens).
   - **Ray 2:** Passing through the first focus $F_1 \implies$ emerges parallel to the principal axis.
   - **Ray 3:** Passing directly through the optical centre $O \implies$ continues straight through without angular deviation.
3. We trace these two rays through the lens:
   - If the refracted rays **physically intersect** at a point $A'$, that point is the **real image** of the arrowhead $A$.
   - If the refracted rays diverge away from each other on the emergence side, we extend them **backward as dotted lines** until they intersect at an apparent point $A'$. That point is the **virtual image** of arrowhead $A$.
4. We drop a perpendicular from $A'$ to the principal axis to locate the base $B'$. The directed line segment $A'B'$ represents the complete image of height $h'$.

**Reading standard ray diagram sketches:** The object is always positioned on the **left**, with incident light travelling from **left to right**. Real physical light rays are drawn as solid lines with directional arrows ($\longrightarrow$), while backward geometric extensions are drawn as dotted lines ($\cdots\cdots$).

---

## Part B: Convex Lens: Six Object Positions

Depending on the distance of the object from the optical centre $O$ relative to the focal points ($F_1$ and $2F_1$), a convex lens exhibits six distinct image-forming behaviors. Let us examine each position systematically.

### Position 1: Object at Infinity

When an object is extremely far away (such as the Sun or distant stars), light rays arriving at the lens are virtually parallel to each other and to the principal axis.

```
                              ()
                              ()
 ─────────────►───────────────()─╲
                              ()  ╲──↘
                              ()      ╲─╲
─────────+───────────+────────┼─────────╲─●───────────+────────
        2F₁         F₁        O     ╱─╱   F₂          2F₂
                              ()  ╱──↗   (Img)
 ─────────────►───────────────()─╱
                              ()
                              ()
```

> **Figure 6.1** – Object at infinity: incident parallel rays refract through the convex lens and converge precisely at the focal plane at $F_2$.

**Characteristics of the Image:**
- **Position:** At the second principal focus **$F_2$** (on the opposite side).
- **Size:** Extremely diminished, reduced to a **point-sized** spot.
- **Nature:** **Real and inverted**.
- **Practical Applications:** Objective lens of astronomical refracting telescopes, solar heat concentrators, focusing burning glasses.

### Position 2: Object Beyond 2F₁

The object is positioned at a finite distance beyond twice the focal length ($u > 2f$). For instance, if $f = 10	ext{ cm}$, the object might be placed at $u = -30	ext{ cm}$ (beyond $2F_1 = 20	ext{ cm}$).

```
                              ()
                              ()
                              ()
             ↑------>---------()-
             │  \             () \
             │   \            ()   \
             │    \           ()     \
-------------│-----+----------+)------\+\--------+---------------
            2F₁   F₁          O        F₂\     2F₂
                                          \│
             Obj                          Img
                              ()
                              ()
```

> **Figure 6.2** – Object placed beyond $2F_1$: the image forms between $F_2$ and $2F_2$ on the opposite side. It is real, inverted, and diminished in height.

**Ray Tracing:**
- Ray 1 leaves the object's head parallel to the axis and refracts through $F_2$.
- Ray 3 passes straight through the optical centre $O$ undeviated.
- The two rays physically intersect at $A'$ located between $F_2$ and $2F_2$.

**Characteristics of the Image:**
- **Position:** Between **$F_2$ and $2F_2$** on the opposite side of the lens.
- **Size:** **Diminished** (smaller than the object, $|m| < 1$).
- **Nature:** **Real and inverted**.
- **Practical Applications:** Photographic cameras (capturing a large landscape onto a small digital sensor), the human eye (imaging distant scenery onto the small retina).

### Position 3: Object at 2F₁

The object is positioned exactly at twice the focal length ($u = 2f$). For $f = 10	ext{ cm}$, the object stands at $2F_1$ ($20	ext{ cm}$ from $O$).

```
                              ()
                              ()
                              ()
             ↑------->--------()-
             │   \            () \
             │    \           ()  \             │     \          ()    \-------------│------+---------+)-------\+\--------+---------------
            2F₁    F₁         O   ----- F₂ \    2F₂
                               ()        -------\ │
             Obj               ()               Img
                              ()
                              ()
```

> **Figure 6.3** – Object placed at $2F_1$: the image forms exactly at $2F_2$ on the opposite side. It is real, inverted, and exactly the same size as the object ($m = -1$).

**Characteristics of the Image:**
- **Position:** Exactly at **$2F_2$** on the opposite side of the lens.
- **Size:** **Same size** as the object ($h' = h$, $|m| = 1$).
- **Nature:** **Real and inverted**.
- **Practical Applications:** Terrestrial inverting relay optics, 1:1 scale photocopiers and photographic enlargers.

### Position 4: Object Between F₁ and 2F₁

The object is moved closer to the lens, positioned between the first focus and twice the focal length ($f < u < 2f$). For $f = 10	ext{ cm}$, the object might be at $15	ext{ cm}$ from $O$.

```
                              ()
                              ()
                              ()
               ↑------>-------()-
               │   --->----   () -----
----------+----│----+---------+)--------+---------+---------------
         2F₁   │    F₁        O   ----- F₂ -->-- 2F₂        │
               │              ()          -----------       │
             Obj              ()                 ------- Img
                              ()                         ---↓
                              ()
                              ()
```

> **Figure 6.4** – Object placed between $F_1$ and $2F_1$: the image forms beyond $2F_2$ on the opposite side. It is real, inverted, and magnified ($|m| > 1$).

**Characteristics of the Image:**
- **Position:** **Beyond $2F_2$** on the opposite side of the lens.
- **Size:** **Enlarged / Magnified** (larger than the object, $|m| > 1$).
- **Nature:** **Real and inverted**.
- **Practical Applications:** **Auditorium slide projectors**, cinema film projectors, compound microscope objective lenses.

> [!NOTE]
> **Optical Reciprocity:** Notice that Position 2 and Position 4 are optical mirror-images of each other! When the object is beyond $2F_1$, the image forms between $F_2$ and $2F_2$ (diminished). When the object is between $F_1$ and $2F_1$, the image forms beyond $2F_2$ (enlarged). This illustrates the fundamental **Principle of Reversibility of Light**.

### Position 5: Object at F₁

The object is placed directly at the first principal focus ($u = f$). For $f = 10	ext{ cm}$, the object stands at $10	ext{ cm}$ from $O$.

```
                              ()
                              ()
                    ↑\--->----()
                    │ \\>    ()\\
                    │     \\ ()    \>----------+---------│--------\+)-------\+\--------+---------------
         2F₁        F₁        O \\     F₂ \    2F₂
                              ()   \\
                              ()       \                              ()          \\
                              ()              \```

> **Figure 6.5** – Object placed at $F_1$: refracted rays emerge strictly parallel to one another. They never intersect at a finite distance, forming an image at infinity.

**Characteristics of the Image:**
- **Position:** At **infinity** ($v = \infty$).
- **Size:** **Extremely magnified / Highly enlarged**.
- **Nature:** **Real and inverted**.
- **Practical Applications:** Searchlights, theatre spotlights, automobile headlamp collimators, lighthouse beacon optics (where a compact light source placed at $F_1$ generates an intense, parallel penetrating beam).

### Position 6: Object Between F₁ and Optical Centre O

The object is brought very close to the lens, inside the focal length ($u < f$). For $f = 10	ext{ cm}$, the object might be placed at $5	ext{ cm}$ from $O$.

```
                              ()
                    ↑..       ()
                    : ......  ()
                    :   .↑\---()-
                    :    │ \ () -----
----------+---------+----│---\+)--------+>--------+---------------
         2F₁        F₁        O \      F₂ ----- 2F₂
                              ()  \\           -----
               Img      Obj   ()     \
                              ()       \
                              ()
```

> **Figure 6.6** – Object placed inside $F_1$ ($u < f$): the refracted rays diverge on the emergence side. When extended backward (dotted lines), they intersect on the same side as the object, producing an enlarged, virtual, and upright image.

**Ray Tracing:**
- Ray 1 leaves the object parallel to the axis, refracts through $F_2$, and travels downward-right.
- Ray 3 passes through the optical centre $O$ undeviated, travelling downward-right.
- These two emergent rays diverge away from each other on the right. An eye looking into the lens sees them as originating from a common virtual intersection point behind the object.

**Characteristics of the Image:**
- **Position:** On the **same side of the lens** as the object (behind the object).
- **Size:** **Magnified / Enlarged** ($|m| > 1$).
- **Nature:** **Virtual and erect** (upright).
- **Practical Applications:** **Handheld magnifying glass**, jeweler's inspection loupe, reading spectacles for presbyopia/hypermetropia, microscope eyepiece.

---

## Part C: Summary of Image Formation by Convex Lens

The complete behavior of a convex lens across all object positions is summarized in the reference table below:

| Object Position | Image Position | Relative Size | Nature | Practical Application |
|---|---|---|---|---|
| **1. At Infinity** | At Focus $F_2$ | Highly diminished (point-sized) | Real and Inverted | Telescope objective, solar concentrator |
| **2. Beyond $2F_1$** | Between $F_2$ and $2F_2$ | Diminished ($|m| < 1$) | Real and Inverted | Camera objective, human eye |
| **3. At $2F_1$** | At $2F_2$ | Same size as object ($m = -1$) | Real and Inverted | Terrestrial inverting telescope, 1:1 photocopier |
| **4. Between $F_1$ and $2F_1$** | Beyond $2F_2$ | Magnified / Enlarged ($|m| > 1$) | Real and Inverted | **Slide projector**, movie theatre projector |
| **5. At Focus $F_1$** | At Infinity | Highly magnified | Real and Inverted | Searchlight, automobile headlight collimator |
| **6. Between $F_1$ and $O$** | On same side as object | Magnified / Enlarged ($m > +1$) | **Virtual and Erect** | **Magnifying glass**, jeweler's loupe, reading glasses |

> [!TIP]
> **Two Critical Boundary Transitions:**
> 1. **The $2F_1$ Boundary (Size Transition):** As an object moves inward toward the lens, its real image size grows continuously. At $u > 2f$, the image is diminished; precisely at $u = 2f$, the image equals object size; and at $u < 2f$, the image becomes enlarged.
> 2. **The $F_1$ Boundary (Nature Transition):** For any object placed outside the focal point ($u \ge f$), the image is **real and inverted**. The instant the object crosses inside the focal point ($u < f$), the image flips to **virtual and erect**!

### Example 1: Identifying Image Characteristics from the Summary Table (f = 10 cm)

A convex lens has a focal length of $f = 10	ext{ cm}$ (so $2f = 20	ext{ cm}$). Determine the position, nature, and relative size of the image formed for an object placed at each of the following distances from the optical centre $O$:

| Object Distance from $O$ | Position Category | Image Location | Nature and Size |
|---|---|---|---|
| **Distant Sun ($\infty$)** | At Infinity | Exactly at $F_2$ ($10	ext{ cm}$) | Real, inverted, point-sized |
| **$40	ext{ cm}$** | Beyond $2F_1$ ($40 > 20	ext{ cm}$) | Between $F_2$ and $2F_2$ ($10	ext{ cm}$ to $20	ext{ cm}$) | Real, inverted, diminished |
| **$20	ext{ cm}$** | Exactly at $2F_1$ ($20 = 20	ext{ cm}$) | Exactly at $2F_2$ ($20	ext{ cm}$) | Real, inverted, same size |
| **$15	ext{ cm}$** | Between $F_1$ and $2F_1$ ($10 < 15 < 20$) | Beyond $2F_2$ ($> 20	ext{ cm}$) | Real, inverted, enlarged |
| **$10	ext{ cm}$** | Exactly at $F_1$ ($10 = 10	ext{ cm}$) | At Infinity | Real, inverted, highly enlarged |
| **$5	ext{ cm}$** | Between $F_1$ and $O$ ($5 < 10	ext{ cm}$) | On the same side as object | Virtual, erect, magnified |

**Verification:** All classifications correspond perfectly to the six canonical ray-tracing positions ✅.

---

## Part D: Concave Lens: The Same Story at Every Position

Unlike a convex lens, which produces varied images depending on distance, a **concave lens behaves with absolute consistency** for every real object position!

Recall that a concave lens diverges incident parallel rays outward, such that they appear to emanate from the virtual focus $F_1$ on the incident side. When an incident ray passes through the optical centre $O$, it travels undeviated.

```
                              )(
                              )(                ---
                              )(           -----
                              )(      -->--
                              )( -----
↑-------------->--------------)(-
│       ------->-------↑....  )(
│---------+---------+---------+(--------+---------+---------------
         2F₁        F₁        O       - F₂ ----- 2F₂
                              )(
 Obj              Img         )(
                              )(
```

> **Figure 6.7** – Ray diagram for a concave lens. Ray 1 refracts outward, appearing to come from $F_1$. Ray 3 travels undeviated through $O$. The rays diverge on the right; their backward projections intersect between $O$ and $F_1$. The image is always virtual, erect, and diminished.

**Universal Rules for Concave Lenses:**
No matter where a real object is placed in front of a concave lens:
1. The refracted rays always diverge on the emergence side and **never intersect physically**.
2. Tracing backward, the virtual image **always forms on the same side as the object**, strictly **between the optical centre $O$ and the principal focus $F_1$**.
3. The image is **always virtual, erect, and strictly diminished (smaller than the object)**.

| Object Position | Image Position | Size | Nature |
|---|---|---|---|
| **At Infinity** | At Focus $F_1$ | Highly diminished (point-sized) | Virtual and Erect |
| **Anywhere between Infinity and $O$** | Between $O$ and Focus $F_1$ | Diminished ($|m| < 1$) | Virtual and Erect |

As an object moves closer to the concave lens, its virtual image moves slightly closer to the optical centre and increases in size toward the object's height, but **it never exceeds or equals the object's height**. A concave lens can **never** form a real image of a real object, and can never capture an image on a projection screen!

---

## Back to the Auditorium: The Secret of the Projector

With our ray tracing rules established, Mr. Vance gathered Maya and the class around the open projector carriage to answer Maya's questions:

1. **Why the slide produces an enormous image on the wall:**
   The objective lens inside the projector is a **convex lens**. The photographic slide is deliberately positioned **between $F_1$ and $2F_1$ (Position 4)**! As we discovered in Figure 6.4, placing an object between $F_1$ and $2F_1$ forces the refracted rays to converge far beyond $2F_2$, creating an **enlarged, magnified real image** across the distant screen.
2. **Why the slide must be loaded upside down:**
   In Position 4, every real image formed by physical ray convergence is **inverted**! If you insert an upright slide, the projected picture on the wall is inverted. Therefore, optical engineers design slide and cinema projectors to hold the film **upside-down**: the inverted projection of an upside-down slide appears **perfectly right-side up** to the audience!
3. **Why a fraction of a millimeter focus shift matters:**
   As the object approaches the focal point $F_1$, the image distance $v$ changes extraordinarily rapidly! When the slide is placed just a tiny fraction of a millimeter outside $F_1$, its image moves several meters across the auditorium. Adjusting the lens barrel by $1.5	ext{ mm}$ shifts the sharp image plane by over a meter, transforming a blurry circle of confusion into razor-sharp focus!

---

## Part E: Advanced Extension: Linear Magnification (m)

To quantify how much larger or smaller an image is compared to its object, we define **linear magnification ($m$)**:

> **Definition (Linear Magnification):** Linear magnification is the ratio of the height of the image ($h'$) to the height of the object ($h$):
> $$m = rac{	ext{Height of image } (h')}{	ext{Height of object } (h)} = rac{h'}{h}$$

Using geometric similarity between the object triangle and image triangle formed with the optical centre $O$, it can be proven that:
$$m = rac{v}{u}$$

> [!IMPORTANT]
> **Compare with Mirrors:**
> For spherical mirrors, magnification is $m = -v/u$.
> For optical lenses, magnification is **$m = +v/u$**. Always take care not to mix up the negative sign from mirror optics!

**Interpreting the Algebraic Sign and Magnitude of $m$:**
- If $m$ is **negative ($m < 0$)**: The image is **inverted and real**.
- If $m$ is **positive ($m > 0$)**: The image is **erect (upright) and virtual**.
- If $|m| > 1$: The image is **magnified (larger than object)**.
- If $|m| < 1$: The image is **diminished (smaller than object)**.
- If $|m| = 1$: The image is the **exact same size** as the object.

### Example 2: Calculating Magnification from Heights

An upright arrow object of height $h = +4	ext{ cm}$ is placed before a lens.
(a) The lens forms an inverted image of height $12	ext{ cm}$ on a screen. Find $m$ and state the nature of the image.
(b) In a second setup, the lens forms an upright image of height $8	ext{ cm}$. Find $m$ and state the nature of the image.

**Solution:**
(a) Since the image is inverted, $h' = -12	ext{ cm}$.
$$m = rac{h'}{h} = rac{-12	ext{ cm}}{+4	ext{ cm}} = \mathbf{-3}$$
The negative sign confirms the image is **real and inverted**; its magnitude $|-3| = 3$ indicates it is enlarged three-fold.
(b) Since the image is upright, $h' = +8	ext{ cm}$.
$$m = rac{h'}{h} = rac{+8	ext{ cm}}{+4	ext{ cm}} = \mathbf{+2}$$
The positive sign confirms the image is **virtual and erect**; its magnitude $|+2| = 2$ indicates it is enlarged two-fold.

**Verification:** Inverted $\implies m < 0$ ✅; erect $\implies m > 0$ ✅.

---

## Part F: Advanced Extension: The Lens Formula

Ray diagrams give us visual intuition, but precision engineering requires exact numbers. The fundamental equation connecting object distance $u$, image distance $v$, and focal length $f$ is the **Lens Formula**.

### Sign Convention Review

Before substituting values into the lens formula, every quantity must be assigned its proper Cartesian sign:
1. **Object distance ($u$):** For any real object placed in front of the lens (on the left), $u$ is **strictly negative** ($u < 0$).
2. **Image distance ($v$):**
   - For a **real image** formed behind the lens (on the right): $v$ is **positive** ($v > 0$).
   - For a **virtual image** formed in front of the lens (on the left): $v$ is **negative** ($v < 0$).
3. **Focal length ($f$):**
   - For a **convex lens** (converging): $f$ is **positive** ($f > 0$).
   - For a **concave lens** (diverging): $f$ is **negative** ($f < 0$).

### The Lens Formula and Magnification

$$\mathbf{rac{1}{v} - rac{1}{u} = rac{1}{f}}$$

Rearranging to solve for image distance $v$ or object distance $u$:
$$rac{1}{v} = rac{1}{f} + rac{1}{u}$$
$$rac{1}{u} = rac{1}{v} - rac{1}{f}$$

Combined with linear magnification:
$$\mathbf{m = rac{h'}{h} = rac{v}{u}}$$

### Verifying the Formula Against Ray Tracing Cases (f = +10 cm)

Let us test our formula mathematically against the ray tracing positions from Part B, using a convex lens with $f = +10	ext{ cm}$:

| Object Distance $u$ ($	ext{cm}$) | Calculation: $rac{1}{v} = rac{1}{f} + rac{1}{u}$ | Image Distance $v$ ($	ext{cm}$) | Magnification $m = v/u$ | Physical Meaning and Match |
|---|---|---|---|---|
| **$-30$** (Beyond $2F_1$) | $rac{1}{10} - rac{1}{30} = rac{2}{30} = rac{1}{15}$ | **$+15$** | $rac{+15}{-30} = \mathbf{-0.5}$ | Real, inverted, diminished; between $F_2$ and $2F_2$ (Position 2) ✅ |
| **$-20$** (At $2F_1$) | $rac{1}{10} - rac{1}{20} = rac{1}{20}$ | **$+20$** | $rac{+20}{-20} = \mathbf{-1}$ | Real, inverted, same size; exactly at $2F_2$ (Position 3) ✅ |
| **$-15$** (Between $F_1, 2F_1$) | $rac{1}{10} - rac{1}{15} = rac{1}{30}$ | **$+30$** | $rac{+30}{-15} = \mathbf{-2}$ | Real, inverted, magnified; beyond $2F_2$ (Position 4: Projector) ✅ |
| **$-10$** (At $F_1$) | $rac{1}{10} - rac{1}{10} = 0$ | **$\pm\infty$** | Undefined | Parallel rays; image at infinity (Position 5) ✅ |
| **$-5$** (Inside $F_1$) | $rac{1}{10} - rac{1}{5} = -rac{1}{10}$ | **$-10$** | $rac{-10}{-5} = \mathbf{+2}$ | Virtual, erect, magnified; on same side as object (Position 6: Magnifier) ✅ |

The mathematical lens formula and the geometric ray diagrams tell the exact same story!

### Example 3: Convex Lens with Object Beyond 2F₁

A convex lens has a focal length of $12	ext{ cm}$. An object $6	ext{ cm}$ tall is placed $48	ext{ cm}$ in front of the lens. Calculate the position, nature, and height of the image formed.

**Solution:**
With sign convention: $f = +12	ext{ cm}$, $u = -48	ext{ cm}$, $h = +6	ext{ cm}$.
$$rac{1}{v} = rac{1}{f} + rac{1}{u} = rac{1}{+12	ext{ cm}} + rac{1}{-48	ext{ cm}} = rac{4}{48	ext{ cm}} - rac{1}{48	ext{ cm}} = rac{3}{48	ext{ cm}} = rac{1}{16	ext{ cm}}$$
$$v = \mathbf{+16	ext{ cm}}$$

Because $v$ is positive, the image forms **$16	ext{ cm}$ behind the lens** and is **real**.
Magnification:
$$m = rac{v}{u} = rac{+16	ext{ cm}}{-48	ext{ cm}} = \mathbf{-rac{1}{3} pprox -0.333}$$
Image height:
$$h' = m 	imes h = \left(-rac{1}{3}ight) 	imes 6	ext{ cm} = \mathbf{-2	ext{ cm}}$$

The image is **real, inverted, $2	ext{ cm}$ tall**, and diminished by a factor of 3.

**Verification:** $rac{1}{v} - rac{1}{u} = rac{1}{16} - \left(-rac{1}{48}ight) = rac{3}{48} + rac{1}{48} = rac{4}{48} = rac{1}{12} = rac{1}{f}$ ✅.

### Example 4: Convex Lens with Object at 2F₁

An object is placed $20	ext{ cm}$ in front of a convex lens of focal length $f = +10	ext{ cm}$. Where does the image form, and what is its magnification?

**Solution:**
$f = +10	ext{ cm}$, $u = -20	ext{ cm}$.
$$rac{1}{v} = rac{1}{f} + rac{1}{u} = rac{1}{10	ext{ cm}} - rac{1}{20	ext{ cm}} = rac{2}{20	ext{ cm}} - rac{1}{20	ext{ cm}} = rac{1}{20	ext{ cm}}$$
$$v = \mathbf{+20	ext{ cm}}$$
$$m = rac{v}{u} = rac{+20	ext{ cm}}{-20	ext{ cm}} = \mathbf{-1}$$

The image forms **$20	ext{ cm}$ behind the lens** (at $2F_2$). It is **real, inverted, and exactly the same size** as the object.

**Verification:** $rac{1}{20} - \left(-rac{1}{20}ight) = rac{2}{20} = rac{1}{10} = rac{1}{f}$ ✅. Conforms to Position 3 ($u = 2f \implies v = 2f$) ✅.

### Example 5: Convex Lens with Object Between F₁ and 2F₁ (Projector Setup)

A photographic transparency slide $2	ext{ cm}$ high is placed $15	ext{ cm}$ in front of a projector's convex objective lens of focal length $f = +10	ext{ cm}$. Calculate the position, magnification, and height of the projected image.

**Solution:**
$f = +10	ext{ cm}$, $u = -15	ext{ cm}$, $h = +2	ext{ cm}$.
$$rac{1}{v} = rac{1}{f} + rac{1}{u} = rac{1}{10	ext{ cm}} - rac{1}{15	ext{ cm}} = rac{3}{30	ext{ cm}} - rac{2}{30	ext{ cm}} = rac{1}{30	ext{ cm}}$$
$$v = \mathbf{+30	ext{ cm}}$$
$$m = rac{v}{u} = rac{+30	ext{ cm}}{-15	ext{ cm}} = \mathbf{-2}$$
$$h' = m 	imes h = (-2) 	imes 2	ext{ cm} = \mathbf{-4	ext{ cm}}$$

The image forms **$30	ext{ cm}$ behind the lens** (beyond $2F_2 = 20	ext{ cm}$). It is **real, inverted, and twice as large ($4	ext{ cm}$ tall)**.

**Verification:** $rac{1}{30} - \left(-rac{1}{15}ight) = rac{1}{30} + rac{2}{30} = rac{3}{30} = rac{1}{10} = rac{1}{f}$ ✅. Matches Position 4 ✅.

### Example 6: Convex Lens with Object Inside F₁ (Magnifying Glass)

A small beetle of height $2	ext{ cm}$ is examined through a magnifying glass with focal length $f = +15	ext{ cm}$. The beetle is placed $10	ext{ cm}$ from the lens. Find the position, nature, and apparent height of the image.

**Solution:**
$f = +15	ext{ cm}$, $u = -10	ext{ cm}$, $h = +2	ext{ cm}$.
$$rac{1}{v} = rac{1}{f} + rac{1}{u} = rac{1}{15	ext{ cm}} - rac{1}{10	ext{ cm}} = rac{2}{30	ext{ cm}} - rac{3}{30	ext{ cm}} = -rac{1}{30	ext{ cm}}$$
$$v = \mathbf{-30	ext{ cm}}$$
$$m = rac{v}{u} = rac{-30	ext{ cm}}{-10	ext{ cm}} = \mathbf{+3}$$
$$h' = m 	imes h = (+3) 	imes 2	ext{ cm} = \mathbf{+6	ext{ cm}}$$

Because $v$ is negative, the image forms **$30	ext{ cm}$ in front of the lens** (on the same side as the beetle). It is **virtual, erect, and magnified to three times its size ($6	ext{ cm}$ tall)**.

**Verification:** $rac{1}{-30} - \left(-rac{1}{10}ight) = -rac{1}{30} + rac{3}{30} = rac{2}{30} = rac{1}{15} = rac{1}{f}$ ✅. Matches Position 6 ✅.

### Example 7: Concave Lens Image Formation

An object $6	ext{ cm}$ tall is placed $20	ext{ cm}$ in front of a concave lens of focal length $10	ext{ cm}$. Determine the image position, nature, and size.

**Solution:**
For a concave lens, focal length is strictly negative: $f = -10	ext{ cm}$, $u = -20	ext{ cm}$, $h = +6	ext{ cm}$.
$$rac{1}{v} = rac{1}{f} + rac{1}{u} = rac{1}{-10	ext{ cm}} + rac{1}{-20	ext{ cm}} = -rac{2}{20	ext{ cm}} - rac{1}{20	ext{ cm}} = -rac{3}{20	ext{ cm}}$$
$$v = -rac{20}{3}	ext{ cm} = \mathbf{-6.67	ext{ cm}}$$
$$m = rac{v}{u} = rac{-6.67	ext{ cm}}{-20	ext{ cm}} = \mathbf{+0.333} = +rac{1}{3}$$
$$h' = m 	imes h = \left(+rac{1}{3}ight) 	imes 6	ext{ cm} = \mathbf{+2	ext{ cm}}$$

The image forms **$6.67	ext{ cm}$ in front of the lens** (between $O$ and $F_1 = 10	ext{ cm}$). It is **virtual, erect, and diminished to one-third of the object's height ($2	ext{ cm}$)**.

**Verification:** $rac{1}{-6.67} - \left(-rac{1}{20}ight) = -0.15 + 0.05 = -0.10	ext{ cm}^{-1} = rac{1}{-10} = rac{1}{f}$ ✅. Matches Part D concave rules ✅.

### Example 8: Determining Focal Length from Experimental Distances

In an optics laboratory experiment, a student places an illuminated candle $25	ext{ cm}$ in front of a convex lens and captures a sharp real image on a screen placed $50	ext{ cm}$ behind the lens. Calculate the focal length and linear magnification.

**Solution:**
Because the image is captured on a screen behind the lens, it is real: $v = +50	ext{ cm}$. The candle is in front: $u = -25	ext{ cm}$.
$$rac{1}{f} = rac{1}{v} - rac{1}{u} = rac{1}{+50	ext{ cm}} - rac{1}{-25	ext{ cm}} = rac{1}{50	ext{ cm}} + rac{2}{50	ext{ cm}} = rac{3}{50	ext{ cm}}$$
$$f = rac{50}{3}	ext{ cm} = \mathbf{+16.67	ext{ cm}}$$
Magnification:
$$m = rac{v}{u} = rac{+50	ext{ cm}}{-25	ext{ cm}} = \mathbf{-2}$$

The focal length is **$+16.67	ext{ cm}$**; the image is inverted and twice the size of the candle flame.

**Verification:** $F_1 = 16.67	ext{ cm}$ and $2F_1 = 33.3	ext{ cm}$. Object at $25	ext{ cm}$ is between $F_1$ and $2F_1$, so image must form beyond $2F_2$ ($50 > 33.3	ext{ cm}$) and be magnified: Position 4 ✅.

### Example 9: Object at 40 cm from a Lens with f = 15 cm

An object is placed $40	ext{ cm}$ in front of a convex lens of focal length $15	ext{ cm}$. Calculate the position and magnification of the image.

**Solution:**
$f = +15	ext{ cm}$, $u = -40	ext{ cm}$.
$$rac{1}{v} = rac{1}{f} + rac{1}{u} = rac{1}{15	ext{ cm}} - rac{1}{40	ext{ cm}} = rac{8}{120	ext{ cm}} - rac{3}{120	ext{ cm}} = rac{5}{120	ext{ cm}} = rac{1}{24	ext{ cm}}$$
$$v = \mathbf{+24	ext{ cm}}$$
$$m = rac{v}{u} = rac{+24	ext{ cm}}{-40	ext{ cm}} = \mathbf{-0.6}$$

The image forms **$24	ext{ cm}$ behind the lens**; it is **real, inverted, and diminished ($0.6	imes$ object size)**.

**Verification:** $2f = 30	ext{ cm}$. Since $u = -40	ext{ cm}$ is beyond $2F_1$, the image must form between $F_2 = 15	ext{ cm}$ and $2F_2 = 30	ext{ cm}$. $v = 24	ext{ cm}$ lies directly in this interval ✅.

### Example 10: Equal-Sized Real Image: Finding Object Position

A convex lens has a focal length of $12	ext{ cm}$. Where should an object be placed to form a real image that is exactly the same size as the object?

**Solution:**
For a real image equal in size, $m = -1$.
Using $m = v/u = -1 \implies v = -u$.
Substitute into the lens formula:
$$rac{1}{v} - rac{1}{u} = rac{1}{-u} - rac{1}{u} = -rac{2}{u} = rac{1}{f} \implies u = -2f$$
Since $f = +12	ext{ cm}$:
$$u = -2 	imes 12	ext{ cm} = \mathbf{-24	ext{ cm}}$$
The object must be placed **$24	ext{ cm}$ in front of the lens** (at $2F_1$). The image will form at $v = -(-24) = \mathbf{+24	ext{ cm}}$ (at $2F_2$).

**Verification:** $rac{1}{24} - \left(-rac{1}{24}ight) = rac{2}{24} = rac{1}{12} = rac{1}{f}$ ✅. Matches Position 3 ($u = 2f$) ✅.

### Example 11: Projector Optics in Numbers

Mr. Vance's classroom projector uses a convex projection lens of focal length $f = 10	ext{ cm}$. The projection screen is mounted on the auditorium wall $3	ext{ m}$ ($300	ext{ cm}$) from the lens. A photographic slide $3	ext{ cm}$ tall is placed in the carriage.
(a) At what distance from the lens must the slide be positioned to form a sharp image on the screen?
(b) What will be the vertical height of the image on the screen?
(c) Explain mathematically why moving the slide by just $1.6	ext{ mm}$ throws the image completely out of focus.

**Solution:**
(a) The real image forms on the screen: $v = +300	ext{ cm}$, $f = +10	ext{ cm}$.
$$rac{1}{u} = rac{1}{v} - rac{1}{f} = rac{1}{300	ext{ cm}} - rac{1}{10	ext{ cm}} = rac{1}{300	ext{ cm}} - rac{30}{300	ext{ cm}} = -rac{29}{300	ext{ cm}}$$
$$u = -rac{300}{29}	ext{ cm} pprox \mathbf{-10.34	ext{ cm}}$$
The slide must be positioned **$10.34	ext{ cm}$ in front of the lens** (just $3.4	ext{ mm}$ outside the focal point $F_1 = 10	ext{ cm}$!).
(b) Linear magnification:
$$m = rac{v}{u} = rac{+300	ext{ cm}}{-300/29	ext{ cm}} = \mathbf{-29}$$
Image height:
$$h' = m 	imes h = (-29) 	imes 3	ext{ cm} = \mathbf{-87	ext{ cm}}$$
The projected image is **$87	ext{ cm}$ tall** and inverted.
(c) **Focus Sensitivity:** Suppose the slide is shifted slightly farther to $u' = -10.5	ext{ cm}$ (a tiny displacement of just $0.16	ext{ cm} = 1.6	ext{ mm}$). Let us calculate the new image distance $v'$:
$$rac{1}{v'} = rac{1}{f} + rac{1}{u'} = rac{1}{10	ext{ cm}} - rac{1}{10.5	ext{ cm}} = rac{21}{210	ext{ cm}} - rac{20}{210	ext{ cm}} = rac{1}{210	ext{ cm}}$$
$$v' = \mathbf{+210	ext{ cm}} = \mathbf{2.1	ext{ m}}$$
The sharp image plane has pulled forward from $3.0	ext{ m}$ to $2.1	ext{ m}$—a massive shift of **$90	ext{ cm}$**! At the actual screen position ($3.0	ext{ m}$), the light rays are heavily out of focus, producing a completely blurred picture. This explains why precision millimeter focus dials are indispensable in projectors.

**Verification:** $rac{1}{300} - \left(-rac{29}{300}ight) = rac{30}{300} = rac{1}{10} = rac{1}{f}$ ✅.

---

## Part G: Advanced Extension: Power of a Lens

Some lenses bend light sharply over a short distance, while others refract rays gently. The quantitative measure of a lens's ability to bend light rays is termed its **optical power ($P$)**.

> **Definition (Optical Power):** The power of a lens is defined as the reciprocal of its focal length expressed in meters:
> $$\mathbf{P = rac{1}{f 	ext{ (in meters)}}}$$
> The SI unit of optical power is the **dioptre ($	ext{D}$)**, where:
> $$\mathbf{1	ext{ D} = 1	ext{ m}^{-1}}$$

**Sign of Optical Power:**
- For a **convex lens**, $f$ is positive $\implies$ **Power is positive ($+P$)**.
- For a **concave lens**, $f$ is negative $\implies$ **Power is negative ($-P$)**.
- A shorter focal length corresponds to greater optical power: a lens that bends light rays more sharply has a higher dioptre value.

> [!WARNING]
> **Always Convert to Meters:**
> When calculating power using $P = 1/f$, the focal length $f$ must be converted into **meters**. If $f$ is left in centimeters, the resulting value will be incorrect by a factor of 100!

### Example 12: Calculating Power from Focal Length

Determine the optical power of each of the following lenses:
(a) A convex lens with $f = +50	ext{ cm}$.
(b) A concave lens with $f = -25	ext{ cm}$.
(c) A convex lens with $f = +20	ext{ cm}$.

**Solution:**
(a) $f = +50	ext{ cm} = +0.5	ext{ m}$.
$$P = rac{1}{f} = rac{1}{+0.5	ext{ m}} = \mathbf{+2	ext{ D}}$$
(b) $f = -25	ext{ cm} = -0.25	ext{ m}$.
$$P = rac{1}{f} = rac{1}{-0.25	ext{ m}} = \mathbf{-4	ext{ D}}$$
(c) $f = +20	ext{ cm} = +0.2	ext{ m}$.
$$P = rac{1}{f} = rac{1}{+0.2	ext{ m}} = \mathbf{+5	ext{ D}}$$

**Verification:** Reversing: $f = 1/P \implies 1/2 = 0.5	ext{ m}$ ✅; $1/(-4) = -0.25	ext{ m}$ ✅; $1/5 = 0.2	ext{ m}$ ✅. Lens (c) with $f = 20	ext{ cm}$ bends rays more sharply than Lens (a) with $f = 50	ext{ cm}$, reflected by $+5	ext{ D} > +2	ext{ D}$ ✅.

### Example 13: Finding Focal Length from Lens Power

An optometrist prescribes an optical lens with a power of $+2.5	ext{ D}$.
(a) Determine the focal length of the lens in centimeters.
(b) Identify whether the lens is convex or concave.

**Solution:**
(a) $f = rac{1}{P} = rac{1}{+2.5	ext{ D}} = +0.4	ext{ m} = \mathbf{+40	ext{ cm}}$.
(b) Because the power and focal length are positive, this is a **convex (converging) lens**.

**Reading Eyeglass Prescriptions:** When an optometry card states a prescription of **$-2.5	ext{ D}$**, it specifies a **concave lens** of power $-2.5	ext{ D}$ and focal length $f = 1/(-2.5) = -0.4	ext{ m} = -40	ext{ cm}$ (used for myopia). A prescription of **$+1.5	ext{ D}$** specifies a **convex lens** with $f = +66.7	ext{ cm}$ (used for hypermetropia).

**Verification:** $P = 1/f = 1/0.4	ext{ m} = 2.5	ext{ D}$ ✅.

### Advanced Insight: Thin Lenses in Contact

When two or more thin lenses of focal lengths $f_1, f_2, \dots$ are placed in direct coaxial contact, their individual powers **add algebraically**:
$$\mathbf{P = P_1 + P_2}$$
$$rac{1}{f} = rac{1}{f_1} + rac{1}{f_2}$$

### Example 14: Two Lenses in Contact

A convex lens of power $+2	ext{ D}$ is placed in direct contact with a concave lens of power $-0.5	ext{ D}$. Calculate the combined optical power and the net focal length of the combination.

**Solution:**
Net power:
$$P = P_1 + P_2 = (+2	ext{ D}) + (-0.5	ext{ D}) = \mathbf{+1.5	ext{ D}}$$
Net focal length:
$$f = rac{1}{P} = rac{1}{+1.5	ext{ D}} = rac{2}{3}	ext{ m} pprox +0.667	ext{ m} = \mathbf{+66.7	ext{ cm}}$$

Because the net power is positive ($+1.5	ext{ D}$), the combination behaves overall as a **converging convex lens**.

**Verification:** $P = 1/0.667	ext{ m} = 1.5	ext{ D}$ ✅.

---

## Part H: Practical Applications of Lenses

Optical lenses serve as the foundational building blocks of modern science, medicine, and communications:

| Device | Type of Lens Used | Object Location Relative to Focus | Nature of Image Produced | Function |
|---|---|---|---|---|
| **Photographic Camera** | Convex lens system | Beyond $2F_1$ ($u > 2f$) | Real, inverted, diminished | Captures large real scenes onto a compact electronic sensor |
| **Classroom / Cinema Projector** | Convex lens system | Between $F_1$ and $2F_1$ ($f < u < 2f$) | Real, inverted, magnified | Projects enlarged images onto a distant display screen |
| **Handheld Magnifying Glass** | Convex lens | Inside $F_1$ ($u < f$) | Virtual, erect, magnified | Allows visual inspection of miniature text, jewelry, and stamps |
| **Reading Spectacles** | Convex lens | Inside $F_1$ ($u < f$) | Virtual, erect, magnified | Corrects presbyopia and hypermetropia (far-sightedness) |
| **Distance Spectacles** | Concave lens | Anywhere in front of eye | Virtual, erect, diminished | Corrects myopia (near-sightedness) by diverging rays before the eye lens |
| **Door Security Peephole** | Concave lens | Anywhere in front | Virtual, erect, diminished | Provides an ultra-wide panoramic field of view of visitors |
| **Compound Microscope** | Two convex lenses (Objective & Eyepiece) | Obj: between $F_1, 2F_1$; Eye: inside $F_1$ | Final: Virtual, inverted, hugely magnified | Resolves microscopic biological cells and bacteria |
| **Refracting Astronomical Telescope** | Two convex lenses (Objective & Eyepiece) | Obj: at infinity; Eye: inside $F_1$ | Final: Virtual, inverted, magnified | Gathers light from distant planets, nebulae, and stars |

---

## Common Pitfalls to Avoid

1. **Mistake 1: Confusing the lens formula with the mirror formula.**
   The mirror formula contains an addition sign: $rac{1}{v} + rac{1}{u} = rac{1}{f}$.
   The lens formula contains a **subtraction sign**: $\mathbf{rac{1}{v} - rac{1}{u} = rac{1}{f}}$. Mixing these signs ruins all numerical calculations!
2. **Mistake 2: Mixing up the sign for magnification.**
   For mirrors: $m = -v/u$.
   For lenses: $\mathbf{m = +v/u}$.
3. **Mistake 3: Forgetting that a real object distance is always negative.**
   Under the Cartesian convention, light enters from the left, so an object in front of a lens always has **$u < 0$**.
4. **Mistake 4: Believing that a concave lens can project an image onto a wall.**
   A concave lens always forms a **virtual image** for any real object. Virtual images cannot be captured on a screen.
5. **Mistake 5: Assuming a convex lens always forms an inverted image.**
   When an object is placed inside the focal length ($u < f$), a convex lens forms an **erect, virtual image** (acting as a magnifying glass).
6. **Mistake 6: Calculating optical power with focal length in centimeters.**
   In $P = 1/f$, the focal length **must be expressed in meters**. For $f = 20	ext{ cm}$, $P = 1/0.2 = +5	ext{ D}$, NOT $1/20 = 0.05	ext{ D}$!
7. **Mistake 7: Assuming that a lens with negative power is convex.**
   A negative power (e.g., $-2.0	ext{ D}$) signifies a negative focal length, which is exclusively a **concave lens**. Positive power indicates a **convex lens**.
8. **Mistake 8: Thinking the image disappears when half the lens is covered.**
   If you cover the top half of a lens with black tape, **the complete image still forms**! Light rays from every point of the object pass through the uncovered bottom half to reconstruct the entire image. However, because half the light rays are blocked, the image appears **half as bright**.

---

## Quick Recap

- Image construction utilizes any two of the three principal rays: parallel to axis $\implies$ through $F_2$; through $F_1 \implies$ parallel to axis; through $O \implies$ straight undeviated.
- **Convex Lens Image Formation:**
  - $u = \infty \implies$ image at $F_2$, real, inverted, point-sized.
  - $u > 2f \implies$ image between $F_2$ and $2F_2$, real, inverted, diminished (camera).
  - $u = 2f \implies$ image at $2F_2$, real, inverted, same size ($m = -1$).
  - $f < u < 2f \implies$ image beyond $2F_2$, real, inverted, enlarged (projector).
  - $u = f \implies$ image at infinity, real, inverted, highly enlarged (searchlight).
  - $u < f \implies$ image on same side as object, **virtual, erect, magnified** (magnifying glass).
- **Concave Lens Image Formation:** For all real object positions, image is always on the same side as the object, located between $O$ and $F_1$, strictly **virtual, erect, and diminished**.
- **Lens Formula:** $rac{1}{v} - rac{1}{u} = rac{1}{f}$, where $u$ is negative, $v$ is positive for real images and negative for virtual images, $f$ is positive for convex and negative for concave.
- **Linear Magnification:** $m = rac{h'}{h} = rac{v}{u}$. Negative $m$ indicates real and inverted; positive $m$ indicates virtual and erect.
- **Optical Power:** $P = rac{1}{f 	ext{ (in meters)}}$, measured in dioptres ($	ext{D} = 	ext{m}^{-1}$). Convex lenses have positive power; concave lenses have negative power.
- **Lenses in Contact:** $P = P_1 + P_2$.

---

## Practice Questions

1. A convex lens has a focal length of $20	ext{ cm}$. An object $4	ext{ cm}$ high is placed at a distance of $30	ext{ cm}$ in front of the lens.
   (a) Calculate the position of the image ($v$).
   (b) Find the linear magnification ($m$) and image height ($h'$).
   (c) State whether the image is real or virtual, erect or inverted.
2. An object $8	ext{ cm}$ high is placed $60	ext{ cm}$ in front of a concave lens of focal length $20	ext{ cm}$.
   (a) Calculate the image distance ($v$).
   (b) Find the linear magnification ($m$) and image height ($h'$).
   (c) Describe the nature and position of the image.
3. A student places a candle $60	ext{ cm}$ in front of a convex lens and observes a sharp image on a screen held $40	ext{ cm}$ behind the lens.
   (a) Calculate the focal length ($f$) of the lens.
   (b) Determine the magnification ($m$).
   (c) Is the image magnified or diminished?
4. Calculate the optical power of:
   (a) A convex lens of focal length $+25	ext{ cm}$.
   (b) A concave lens of focal length $-40	ext{ cm}$.
   (c) Determine the focal length of a lens prescribed with power $+2.5	ext{ D}$.
   (d) If lens (a) and lens (c) are placed in direct contact, what is their combined power and focal length?
5. State whether each statement is True or False. If false, provide the correction:
   (a) A concave lens can form a real image if the object is placed sufficiently far away.
   (b) A real image formed by a lens can always be captured on a physical screen.
   (c) A convex lens always produces an inverted image.
   (d) A lens with a power of $-3.0	ext{ D}$ is a convex lens.
6. A small insect is placed $15	ext{ cm}$ from a convex lens of focal length $20	ext{ cm}$.
   (a) Calculate the image distance ($v$).
   (b) Find the magnification ($m$).
   (c) State whether the image is real or virtual, and describe its orientation.
7. An optical device requires a real, inverted image four times as large as the object ($m = -4$). If the convex lens has a focal length of $15	ext{ cm}$:
   (a) Calculate the required object distance ($u$).
   (b) Calculate the image distance ($v$).
8. Explain the optical physics of a classroom slide projector:
   (a) Why does a tiny $35	ext{ mm}$ photographic slide produce an enormous wall display?
   (b) Why is the projected image inverted if the slide is inserted right-side up?
   (c) How do operators ensure the projected image appears right-side up to the audience?
9. A lens forms an erect, virtual image twice the height of the object ($m = +2$) when the object is placed $10	ext{ cm}$ from the lens.
   (a) Calculate the image distance ($v$).
   (b) Find the focal length ($f$) of the lens.
   (c) Identify whether the lens is convex or concave.
10. If the lower half of a convex lens is covered with opaque black paper, what happens to the image formed of an object placed in front of it? Does half the image vanish? Explain clearly.

### Answers

1. Given: $f = +20	ext{ cm}$, $u = -30	ext{ cm}$, $h = +4	ext{ cm}$.
   (a) Using lens formula:
   $$rac{1}{v} = rac{1}{f} + rac{1}{u} = rac{1}{20	ext{ cm}} - rac{1}{30	ext{ cm}} = rac{3}{60	ext{ cm}} - rac{2}{60	ext{ cm}} = rac{1}{60	ext{ cm}} \implies v = \mathbf{+60	ext{ cm}}$$
   The image forms **$60	ext{ cm}$ behind the lens**.
   (b) Magnification:
   $$m = rac{v}{u} = rac{+60	ext{ cm}}{-30	ext{ cm}} = \mathbf{-2}$$
   Image height:
   $$h' = m 	imes h = (-2) 	imes 4	ext{ cm} = \mathbf{-8	ext{ cm}}$$
   (c) Because $v > 0$ and $m < 0$, the image is **real, inverted, and magnified (twice object size)**.
   *Check:* $rac{1}{60} - \left(-rac{1}{30}ight) = rac{1}{60} + rac{2}{60} = rac{3}{60} = rac{1}{20} = rac{1}{f}$ ✅. Object is between $F_1$ ($20	ext{ cm}$) and $2F_1$ ($40	ext{ cm}$), conforming to Position 4 ✅.

2. Given for concave lens: $f = -20	ext{ cm}$, $u = -60	ext{ cm}$, $h = +8	ext{ cm}$.
   (a) Using lens formula:
   $$rac{1}{v} = rac{1}{f} + rac{1}{u} = rac{1}{-20	ext{ cm}} + rac{1}{-60	ext{ cm}} = -rac{3}{60	ext{ cm}} - rac{1}{60	ext{ cm}} = -rac{4}{60	ext{ cm}} = -rac{1}{15	ext{ cm}} \implies v = \mathbf{-15	ext{ cm}}$$
   (b) Magnification:
   $$m = rac{v}{u} = rac{-15	ext{ cm}}{-60	ext{ cm}} = \mathbf{+0.25} = +rac{1}{4}$$
   Image height:
   $$h' = m 	imes h = (+0.25) 	imes 8	ext{ cm} = \mathbf{+2	ext{ cm}}$$
   (c) Because $v < 0$ and $m > 0$, the image is **virtual, erect, and diminished to one-fourth size ($2	ext{ cm}$)**, forming $15	ext{ cm}$ in front of the lens (between $O$ and $F_1 = 20	ext{ cm}$).
   *Check:* $rac{1}{-15} - \left(-rac{1}{60}ight) = -rac{4}{60} + rac{1}{60} = -rac{3}{60} = -rac{1}{20} = rac{1}{f}$ ✅.

3. Given: $u = -60	ext{ cm}$, $v = +40	ext{ cm}$ (real image on screen).
   (a) Focal length:
   $$rac{1}{f} = rac{1}{v} - rac{1}{u} = rac{1}{40	ext{ cm}} - rac{1}{-60	ext{ cm}} = rac{3}{120	ext{ cm}} + rac{2}{120	ext{ cm}} = rac{5}{120	ext{ cm}} = rac{1}{24	ext{ cm}} \implies f = \mathbf{+24	ext{ cm}}$$
   (b) Magnification:
   $$m = rac{v}{u} = rac{+40	ext{ cm}}{-60	ext{ cm}} = \mathbf{-rac{2}{3} pprox -0.67}$$
   (c) The image is **diminished** ($|m| = 0.67 < 1$) and inverted.
   *Check:* $2f = 48	ext{ cm}$. Object at $u = -60	ext{ cm}$ is beyond $2F_1$, so image forms between $F_2 = 24	ext{ cm}$ and $2F_2 = 48	ext{ cm}$ ($v = 40	ext{ cm}$): Position 2 ✅.

4. (a) For $f = +25	ext{ cm} = +0.25	ext{ m}$:
   $$P = rac{1}{+0.25	ext{ m}} = \mathbf{+4	ext{ D}}$$
   (b) For $f = -40	ext{ cm} = -0.4	ext{ m}$:
   $$P = rac{1}{-0.4	ext{ m}} = \mathbf{-2.5	ext{ D}}$$
   (c) For $P = +2.5	ext{ D}$:
   $$f = rac{1}{+2.5	ext{ D}} = +0.4	ext{ m} = \mathbf{+40	ext{ cm}}$$
   (d) For lens (a) ($+4	ext{ D}$) and lens (b) ($-2.5	ext{ D}$) in contact:
   $$P = P_1 + P_2 = (+4	ext{ D}) + (-2.5	ext{ D}) = \mathbf{+1.5	ext{ D}}$$
   $$f = rac{1}{+1.5	ext{ D}} = +0.667	ext{ m} = \mathbf{+66.7	ext{ cm}}$$
   *Check:* $1/0.25 = 4	ext{ D}$ ✅; $1/(-0.4) = -2.5	ext{ D}$ ✅; $1/0.667 pprox 1.5	ext{ D}$ ✅.

5. (a) **False ❌.** For any real object, a concave lens always diverges refracted rays; it can never form a real image.
   (b) **True ✅.** A real image is formed by the physical convergence of light rays, so it can always be focused onto a screen.
   (c) **False ❌.** When an object is placed inside the focal length ($u < f$), a convex lens forms an erect, virtual image.
   (d) **False ❌.** A lens with negative optical power has a negative focal length, meaning it is a concave lens.

6. Given: $f = +20	ext{ cm}$, $u = -15	ext{ cm}$ (inside $F_1$).
   (a) Using lens formula:
   $$rac{1}{v} = rac{1}{f} + rac{1}{u} = rac{1}{20	ext{ cm}} - rac{1}{15	ext{ cm}} = rac{3}{60	ext{ cm}} - rac{4}{60	ext{ cm}} = -rac{1}{60	ext{ cm}} \implies v = \mathbf{-60	ext{ cm}}$$
   The virtual image forms **$60	ext{ cm}$ in front of the lens** (on the same side as the insect).
   (b) Magnification:
   $$m = rac{v}{u} = rac{-60	ext{ cm}}{-15	ext{ cm}} = \mathbf{+4}$$
   (c) The image is **virtual, erect, and magnified four-fold**.
   *Check:* $rac{1}{-60} - \left(-rac{1}{15}ight) = -rac{1}{60} + rac{4}{60} = rac{3}{60} = rac{1}{20} = rac{1}{f}$ ✅. Matches Position 6 ✅.

7. Given: $f = +15	ext{ cm}$, $m = -4$ (real, inverted image).
   (a) Using $m = v/u = -4 \implies v = -4u$.
   Substitute into lens formula:
   $$rac{1}{v} - rac{1}{u} = rac{1}{-4u} - rac{1}{u} = -rac{1}{4u} - rac{4}{4u} = -rac{5}{4u} = rac{1}{f}$$
   $$u = -rac{5f}{4} = -rac{5 	imes 15	ext{ cm}}{4} = \mathbf{-18.75	ext{ cm}}$$
   The object must be placed **$18.75	ext{ cm}$ in front of the lens**.
   (b) Image distance:
   $$v = -4u = -4 	imes (-18.75	ext{ cm}) = \mathbf{+75	ext{ cm}}$$
   The image forms **$75	ext{ cm}$ behind the lens**.
   *Check:* $rac{1}{75} - \left(-rac{1}{18.75}ight) = rac{1}{75} + rac{4}{75} = rac{5}{75} = rac{1}{15} = rac{1}{f}$ ✅. $u = -18.75	ext{ cm}$ lies between $F_1 = 15	ext{ cm}$ and $2F_1 = 30	ext{ cm}$ (Position 4) ✅.

8. (a) In a slide projector, the transparency is placed between $F_1$ and $2F_1$ of the convex objective lens (Position 4). In this zone, the lens forms a real, magnified image far beyond $2F_2$ onto the distant screen.
   (b) Physical ray convergence in Position 4 produces an inverted image, flipping top-to-bottom and left-to-right.
   (c) Operators load the transparency upside-down into the slide carriage. Inverting an upside-down object produces an upright image on the screen.

9. Given: $m = +2$ (virtual, erect image), $u = -10	ext{ cm}$.
   (a) Using $m = v/u = +2 \implies v = 2u = 2 	imes (-10	ext{ cm}) = \mathbf{-20	ext{ cm}}$.
   The image forms **$20	ext{ cm}$ in front of the lens**.
   (b) Using lens formula:
   $$rac{1}{f} = rac{1}{v} - rac{1}{u} = rac{1}{-20	ext{ cm}} - rac{1}{-10	ext{ cm}} = -rac{1}{20	ext{ cm}} + rac{2}{20	ext{ cm}} = rac{1}{20	ext{ cm}} \implies f = \mathbf{+20	ext{ cm}}$$
   (c) Because $f > 0$ and the image is magnified, this is a **convex lens** (with the object positioned inside $F_1 = 20	ext{ cm}$).
   *Check:* $rac{1}{-20} - \left(-rac{1}{10}ight) = -0.05 + 0.10 = 0.05 = rac{1}{20} = rac{1}{f}$ ✅.

10. **The complete image still forms.**
    Light rays emanate in all directions from every single point on the object. The uncovered upper half of the lens still receives and refracts rays from every point of the object to form the entire image on the screen. No part of the image vanishes. However, because approximately half of the total light energy is blocked by the paper, the image formed has **reduced brightness (approximately half its original intensity)**.

---

You have now mastered ray tracing across all positions for convex and concave lenses, solved the mystery of the auditorium projector, and calculated exact image locations and optical powers using the lens formula and dioptre scale.

**What lies ahead?** In our final topic (Topic 7), we venture into the world of **triangular glass prisms** and discover why white light splits into a brilliant spectrum of seven colors. We will explain the formation of **rainbows**, atmospheric optical mirages, and examine the remarkable optical architecture of the **human eye**—an adaptable biological camera—and discover how spectacles correct vision defects like myopia and hypermetropia!
