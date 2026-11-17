# Chapter: Light: Refraction (Part 5)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [light-refraction-part4.md](light-refraction-part4.md)** (covering total internal reflection, critical angle, optical fibres, and mirages). For introductory concepts on refraction, see [light-refraction.md](light-refraction.md). For spherical mirror terminology (pole, centre of curvature, focus, focal length, principal axis), see [light-reflection-part4.md](../light-reflection/light-reflection-part4.md).
> **Topics covered in this file:**
> 5. Lenses: Convex and Concave

---

# Topic 5: Lenses: Convex and Concave

In the previous topic, we discovered how light travelling within an optically dense medium can undergo total internal reflection when striking a boundary at an angle greater than the critical angle—a principle that powers modern fibre-optic telecommunications, optical prisms, and explains desert mirages. In all those scenarios, the refracting surfaces were **planar (flat)**.

Now, a fascinating question arises: **what happens to light when the boundary is not flat, but curved into a spherical surface?** Can curved glass concentrate scattered rays of sunlight into a single pinpoint of intense thermal energy? Can it diverge rays outward to broaden a visual field? In this topic, we investigate the two primary families of curved optical media: the **convex lens** and the **concave lens**. We will master their fundamental reference points (optical centre, principal foci, focal length, and aperture) and trace the **three standard principal rays** that govern their behavior. The detailed rules for geometric image formation will follow in Topic 6.

Throughout this entire topic, we consider **thin lenses of small aperture**, and work with **paraxial rays** (rays travelling close to the principal axis). This ensures that optical aberrations remain negligible and our mathematical and geometric relationships remain elegant, precise, and simple.

---

## Mr. Vance's Precision Loupe

On a sunny Saturday morning, Leo visited the workshop of Mr. Vance, an expert horologist and precision instrument technician, to have his grandfather's reading spectacles inspected. Inside the quiet studio, tick-tocking clocks lined the walls. Mr. Vance was seated at a wooden workbench, wearing a small cylindrical optical eyepiece—a **watchmaker's loupe**—clamped before his right eye as he manipulated a balance wheel smaller than a grain of rice.

"Mr. Vance, how can you possibly see parts that tiny without straining your eyes?" Leo asked, leaning across the bench.

Mr. Vance looked up and smiled warmly. He detached the small loupe from his brow and passed it to Leo. "Take a look for yourself, Leo. Place your eye close to the glass and hold that open pocket watch near the lens."

Leo adjusted the loupe before his eye. He gasped in amazement: the miniature gears and hairspring appeared **enormously enlarged, sharp, and crisp**, as if he were inspecting the heavy iron gears of an industrial steam engine!

Curious, Leo picked up his grandfather's reading spectacles from the tray. When he looked through the centre of the spectacle lens at a repair manual, the printed letters appeared distinctly magnified, just like the image through the loupe. But then, Leo picked up his classmate Liam's spectacles, which Liam had left behind for a screw tightening (Liam wore them for distance vision during football practice). Leo held Liam's spectacles before his eye and looked across the room. To his astonishment, everything—the wall clocks, the window frames, the workbench—appeared **dramatically smaller and shrunken**!

Leo scratched his head in confusion. "Mr. Vance, glass is just glass. How can one piece of glass make tiny things look gigantic, while another piece of glass makes large objects look miniature?"

Mr. Vance chuckled. "It all comes down to the **curvature and geometric profile** of the glass, Leo. One piece is thicker at its centre than at its edges, while the other is thinner in the middle and flares outward at the rims. Before we can answer why they magnify or diminish, we must understand the fundamental anatomy of lenses and how they redirect light rays. By the middle of our lesson today, you will know exactly why one lens converged light to enlarge my watch gears, while the other diverged light to shrink the room!"

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Lens** | A piece of transparent optical material (glass or clear plastic) bounded by two surfaces, of which at least one is spherical | Spectacle lenses, camera objectives, jeweler's loupe |
| **Convex lens** | A lens that is thicker at the centre and thinner at the edges; it converges a parallel beam of light toward a real focus (**converging lens**) | Magnifying glass, reading spectacles |
| **Concave lens** | A lens that is thinner at the centre and thicker at the edges; it diverges a parallel beam of light away from a virtual focus (**diverging lens**) | Distance-vision spectacles, door peepholes |
| **Optical centre ($O$)** | The central point of a thin lens along its principal axis, through which an incident ray passes without suffering measurable deviation | The geometric centre $O$ of a thin lens |
| **Principal axis** | The imaginary straight line perpendicular to the lens faces passing through the centres of curvature of its spherical surfaces and the optical centre $O$ | The central horizontal reference line |
| **Centres of curvature ($C_1, C_2$)** | The centres of the imaginary spheres of which the two curved surfaces of the lens form parts | The geometric origins of the spherical surfaces |
| **Principal foci ($F_1, F_2$)** | Two fixed reference points on the principal axis, equidistant from $O$, where parallel rays converge or appear to diverge | First focus $F_1$ and second focus $F_2$ |
| **Focal length ($f$)** | The linear distance between the optical centre $O$ and a principal focus ($f = OF_1 = OF_2$) | A camera lens with $f = 50	ext{ mm}$ |
| **Aperture** | The effective diameter or width of the light-transmitting circular opening of the lens | A lens with an aperture of diameter $d = 5	ext{ cm}$ |
| **Real focus** | A focal point formed by the physical intersection of refracted rays; can be captured on a physical screen | The hot, bright burning spot formed by a convex lens |
| **Virtual focus** | A focal point from which refracted rays appear to diverge backward; cannot be projected onto a screen | The apparent point source of light behind a concave lens |

---

## Part A: What is a Lens, and Its Two Primary Types

In Topic 3, we examined refraction across planar, parallel boundaries in a rectangular glass slab. Now, imagine a transparent solid whose bounding surfaces are sections of spheres. Such an optical element is called a **lens**.

> **Definition (Lens):** A lens is a transparent optical medium bounded by two surfaces, at least one of which is spherical.

In high school physics, we restrict our study to **thin lenses**, where the maximum thickness of the lens along its axis is negligibly small compared to its focal length and the radii of curvature of its faces.

### 1. Convex lens

> **Convex Lens (Converging Lens):** A lens that is **thicker in the middle** and **thinner at the edges**. When a beam of light rays parallel to the principal axis falls upon it, the lens refracts the rays inward, causing them to **converge** toward a common point on the opposite side.

Because it brings parallel rays together, a convex lens is also known as a **converging lens**.

### 2. Concave lens

> **Concave Lens (Diverging Lens):** A lens that is **thinner in the middle** and **thicker at the edges**. When a beam of light rays parallel to the principal axis falls upon it, the lens refracts the rays outward, causing them to **diverge** as if they originated from a common point on the incident side.

Because it spreads parallel rays apart, a concave lens is also known as a **diverging lens**.

```
        Convex Lens                     Concave Lens
     (Converging Type)                (Diverging Type)

           ╭─╮                              ┌──────┐
          (   )                              )    (
         (     )                            )      (
         (     )                            )      (
          (   )                              )    (
           ╰─╯                              └──────┘
    Thick at centre,                 Thin at centre,
    thin at edges                    thick at edges
```

> **Figure 5.1** – Cross-sectional profiles of a convex lens (bulging outward, thicker in the middle) and a concave lens (curving inward, thinner in the middle).

Both convex and concave lenses exist in several geometric forms depending on the combination of their surfaces:

| Convex Lens Variations | Concave Lens Variations |
|---|---|
| **Double convex (biconvex):** Both surfaces bulge outwards. | **Double concave (biconcave):** Both surfaces curve inwards. |
| **Plano-convex:** One surface is flat (planar), the other bulges outward. | **Plano-concave:** One surface is flat (planar), the other curves inward. |
| **Concavo-convex (meniscus):** One surface curves in, one bulges out, but the centre remains thicker than the rims. | **Convexo-concave (meniscus):** One surface bulges out, one curves in, but the centre remains thinner than the rims. |

In our syllabus, when we speak of a "convex lens," we refer to a symmetrical **double convex lens**, and a "concave lens" refers to a symmetrical **double concave lens**.

**Simple tactile test:** You can identify a lens instantly simply by feeling it between your fingers. If the lens feels **swollen or thickest at the centre**, it is convex. If the lens feels **thinnest at the centre with thick, raised rims**, it is concave.

### 3. Understanding a Lens as a Set of Small Prisms

Why does a convex lens converge light while a concave lens diverges light? We can understand this intuitively by recalling how a triangular glass prism refracts light.

As established in earlier topics, when light passes through a prism, the ray bends **toward the thickest part (the base)** of the prism. Now, picture a lens sliced into a series of microscopic truncated prisms:

```
            Convex Lens:                             Concave Lens:
     Prisms base-to-base                      Prisms apex-to-apex

            /│                                        \│
           / │  Top prism: bends down                  \  Top prism: bends up
          /──│                                          ──
         │   │  Centre: parallel slab                  │  Centre: parallel slab
          \──│                                          ──
           \ │  Bottom prism: bends up                 /  Bottom prism: bends down
            \│                                        /│
```

> **Figure 5.2** – Prism model of lenses. In a convex lens, the hypothetical prisms have their thick bases facing inward toward the principal axis, bending rays toward the centre. In a concave lens, the prisms have their bases facing outward away from the axis, bending rays toward the outside.

1. **In a convex lens:** The upper half resembles a prism whose wide base faces downward toward the principal axis. Rays entering the top half bend downward toward the base. The lower half resembles a prism whose base faces upward toward the axis. Rays entering the lower half bend upward toward the base. At the very centre, the faces are parallel like a flat slab, so a central ray passes through undeflected. Thus, all parallel rays **converge** toward the central axis!
2. **In a concave lens:** The upper half resembles a prism whose wide base faces upward, away from the axis. Rays entering the top half bend upward. The lower half has its base facing downward, bending rays downward. The rays spread outward: they **diverge** away from the principal axis!

---

## Back to Mr. Vance's Workshop: The First Clue

With these geometric profiles established, Leo revisited the three lenses on Mr. Vance's desk:
- **Mr. Vance's watchmaker's loupe:** Leo felt the glass; it was distinctly swollen and thick in the centre. It was a **convex lens**.
- **Grandfather's reading spectacles:** Thick in the middle, tapering toward the frame rim: also a **convex lens**.
- **Liam's distance-vision glasses:** Noticeably thin and concave at the centre, with heavy, thicker edges: a **concave lens**.

Mr. Vance nodded with satisfaction. "Excellent observation, Leo! A convex lens converges light, gathering rays to form enlarged visual angles when held close to an object. A concave lens diverges light, spreading rays outward so that everything viewed through it appears diminished. Now, let us define the exact geometric landmarks that optical engineers use to design these lenses."

---

## Part B: Essential Landmarks and Reference Lines of a Lens

To construct ray diagrams and calculate image positions mathematically, we establish standard geometric landmarks. Light is universally drawn **travelling from left to right**. In technical ray diagrams, thin lenses are represented by a vertical reference line:
- A **convex lens** is drawn as a vertical line with **outward-pointing arrowheads** at the tips ($lacktriangle$ at top, $lacktriangledown$ at bottom), symbolizing that it bulges outwards.
- A **concave lens** is drawn as a vertical line with **inward-pointing arrowheads** at the tips ($lacktriangledown$ at top, $lacktriangle$ at bottom), symbolizing that it pinches inwards.

**Landmarks of a Convex Lens:**

```
                                 ▲ A
                                 │
                                 │
                                 │
                                 │  aperture AB
                                 │
─────────+───────────+───────────┼───────────+───────────+────────
        C₁          F₁           │O         F₂          C₂
                                 │
                     ◄───────────┼───────────►
                        f = OF₁  │  f = OF₂
                                 │
                                 ▼ B
```

> **Figure 5.3** – Geometric landmarks of a thin convex lens. $O$ = optical centre; the horizontal line is the principal axis; $F_1$ and $F_2$ are the first and second principal foci (equidistant from $O$); $C_1$ and $C_2$ are the centres of curvature (located at $2f$ for standard ray-tracing representations); $f = OF_1 = OF_2$; $AB$ = aperture.

**Landmarks of a Concave Lens:**

```
                                 ▼ A
                                 │
                                 │
                                 │
                                 │  aperture AB
                                 │
─────────+───────────+───────────┼───────────+───────────+────────
        C₁          F₁           │O         F₂          C₂
                                 │
                     ◄───────────┼───────────►
                        f = OF₁  │  f = OF₂
                                 │
                                 ▲ B
```

> **Figure 5.4** – Geometric landmarks of a thin concave lens. The landmarks $O, F_1, F_2, C_1, C_2$ are identical in spacing, but their optical roles are reversed because the focal point $F_1$ on the incident side acts as a virtual focus.

Let us define each landmark rigorously:

### 1. Optical centre (O)

> **Definition (Optical Centre):** The optical centre ($O$) is the central geometric point of a thin lens along its principal axis, through which any incident light ray passes without suffering angular deviation or lateral displacement.

For our thin lens model, the optical centre acts as the **origin $(0, 0)$** for all spatial measurements and Cartesian coordinate systems.

### 2. Principal axis

> **Definition (Principal Axis):** The principal axis is the imaginary straight line joining the centres of curvature ($C_1, C_2$) of the two spherical surfaces and passing perpendicularly through the optical centre $O$.

It serves as the baseline along which all object and image distances are measured.

### 3. Centres of curvature (C₁ and C₂)

Because a lens has **two curved surfaces**, and each surface constitutes a portion of an imaginary sphere, every lens possesses **two centres of curvature**: $C_1$ and $C_2$, one on either side.
- For an equiconvex or equiconcave lens where both surfaces have identical radii of curvature ($R_1 = R_2 = R$), both centres are located at distance $R$ from the surface.
- In introductory ray diagrams, to provide an easy drawing scale, textbooks adopt a practical **drawing convention**: a point at distance $2f$ along the principal axis is designated as **$2F$** (with $2F_1$ on the left and $2F_2$ on the right), and $C_1, C_2$ are sketched at these $2f$ positions. Remember: in physical optics, $R$ depends on the refractive index of the glass (governed by the Lens Maker's Formula $1/f = (n - 1)(1/R_1 - 1/R_2)$), so $R = 2f$ is strictly true only when the refractive index $n = 1.5$. However, the landmark **$2F$** is mathematically exact and fundamental for image classification.

### 4. Principal foci (F₁ and F₂)

Because light can pass through a transparent lens from either direction, a lens possesses **two principal foci**, symmetrically located on opposite sides of the optical centre. For a thin lens surrounded by the same medium (such as air) on both sides:
$$OF_1 = OF_2 = f$$

> **First Principal Focus ($F_1$):** A fixed position on the principal axis on the incident side. For a convex lens, rays emanating from $F_1$ emerge parallel to the principal axis after refraction. For a concave lens, incident rays directed toward $F_1$ emerge parallel to the principal axis after refraction.
>
> **Second Principal Focus ($F_2$):** A fixed position on the principal axis on the emergence side. For a convex lens, rays incident parallel to the principal axis converge at $F_2$ after refraction. For a concave lens, incident rays parallel to the principal axis diverge such that they appear to emanate from $F_1$ on the incident side.

### 5. Focal length (f)

> **Definition (Focal Length):** The focal length ($f$) is the linear distance measured from the optical centre $O$ to either principal focus:
> $$f = OF_1 = OF_2$$

When both sides of the lens are exposed to the same ambient medium, the focal length is identical on both sides.

### 6. Aperture

> **Definition (Aperture):** The aperture of a lens is the effective diameter of its circular light-transmitting boundary (represented by the vertical line segment $AB$ in Figures 5.3 and 5.4).

The aperture determines the light-gathering power of the lens. A larger aperture captures more light energy and produces a brighter image, but does not alter the focal length $f$.

---

## Part C: Principal Focus: Real vs. Virtual

Light arriving from a very distant object (such as the Sun or a distant horizon) travels in rays that are virtually parallel to one another and to the principal axis. Let us trace what occurs when such parallel rays strike a convex lens versus a concave lens.

**Behavior of a Convex Lens:**
When parallel incident rays strike a convex lens, every ray bends inward toward the axis. Because the lens is curved spherically, the rays all intersect at a single physical point on the opposite side: the second principal focus **$F_2$**.

```
                                 ▲
                                 │
                                 │
 ─────────────►──────────────────│─╲
                                 │  ╲──↘
                                 │      ╲─╲
─────────+───────────+───────────┼─────────╲─+───────────+────────
        C₁          F₁           │O     ╱─╱ F₂          C₂
                                 │  ╱──↗
 ─────────────►──────────────────│─╱
                                 │
                                 │
                                 ▼
```

> **Figure 5.5** – Converging action of a convex lens: incident rays parallel to the principal axis refract through the glass and physically meet at the second principal focus $F_2$. Because real light energy physically converges at this point, $F_2$ is a **real focus**.

**Behavior of a Concave Lens:**
When parallel incident rays strike a concave lens, the rays refract outward, diverging away from the principal axis. They will never meet on the right-hand side. However, if an observer looks back through the lens from the right, the diverging rays appear to radiate directly outward from a single point on the left-hand side of the lens: the first principal focus **$F_1$**.

```
                                 ▼          ╱─
                                 │      ╱──╱
                                 │  ╱──↗
 ─────────────►──────────────────│─╱
                           ····  │
                        ···      │
─────────+───────────+───────────┼───────────+───────────+────────
        C₁          F₁  ···      │O         F₂          C₂
                           ····  │
 ─────────────►──────────────────│─╲
                                 │  ╲──↘
                                 │      ╲──╲
                                 ▲          ╲─
```

> **Figure 5.6** – Diverging action of a concave lens: incident rays parallel to the principal axis refract outward, appearing to emanate from a virtual focal point $F_1$ located on the incident side. The dotted lines represent backward geometric projections. Because no physical rays actually meet at $F_1$, it is a **virtual focus**.

**Comparison: Real Focus vs. Virtual Focus:**
- **Real Focus (Convex Lens):** Physical light rays intersect at this spatial coordinate. If a paper card or projection screen is placed at $F_2$, a sharp, brilliant point of light appears on the card. Concentrated thermal energy will rapidly heat the paper.
- **Virtual Focus (Concave Lens):** No physical rays meet here; rays only appear to diverge from this point when traced backward mentally. If a paper screen is placed at $F_1$, no bright spot forms, and no thermal concentration occurs.

> [!NOTE]
> **Comparing Mirrors and Lenses:**
> Recall our study of reflection: a concave mirror converges light to a real focus, whereas a convex mirror diverges light from a virtual focus.
> For lenses, the nomenclature is **reversed**: a **convex lens** converges light to a **real focus**, while a **concave lens** diverges light from a **virtual focus**. Both converging optical devices (concave mirror and convex lens) create real foci, but remember that a mirror reflects light backward into the original medium, whereas a lens transmits light forward across refractive boundaries!

---

## Part D: Three Principal Rays for Ray Diagrams

To locate the image of an object geometrically, we do not need to trace thousands of random rays. We only need to select **any two rays whose refracted paths are universally known**. In optics, there are **three standard principal rays**.

### Ray 1: Incident Ray Parallel to the Principal Axis

> **Rule:** An incident ray travelling **parallel to the principal axis**:
> - In a **convex lens**, passes through the second principal focus $F_2$ on the opposite side after refraction.
> - In a **concave lens**, refracts outward such that it appears to emanate from the first principal focus $F_1$ on the incident side.

(Refer to Figure 5.5 for the convex case and Figure 5.6 for the concave case.)

### Ray 2: Ray Passing Through (or Directed Toward) the Focus

> **Rule:** 
> - In a **convex lens**, an incident ray **passing through the first principal focus $F_1$** emerges parallel to the principal axis after refraction.
> - In a **concave lens**, an incident ray **directed toward the second principal focus $F_2$** emerges parallel to the principal axis after refraction.

This behavior is the exact inverse of Ray 1, governed by the universal **Principle of Reversibility of Light** (if the direction of a light ray is reversed, it retraces its exact geometric path).

```
         Convex Lens: Ray through F₁                Concave Lens: Ray toward F₂

         ─╲                      ▲                          ▼
           ╲╲                    │                          │
             ↘─╲                 │               ───►───────│────────────────►
                ╲╲             ╱─│──────►──────             │ ╲
                  ╲─╲        ╱╱  │                          │  ╲
─────────+───────────+──╱╱───────┼──────────    ────────+───┼───╲───────+────────
        C₁          F₁           │O                     F₁  │O   ╲··    F₂
                                 │                          │       ··►
                                 ▼                          ▲
```

> **Figure 5.7** – Tracing Ray 2. Left: in a convex lens, a ray passing through $F_1$ emerges parallel to the axis. Right: in a concave lens, an incident ray travelling toward $F_2$ refracts at the lens and emerges parallel to the axis.

### Ray 3: Ray Passing Through the Optical Centre

> **Rule:** An incident ray **passing directly through the optical centre $O$** of a thin lens proceeds straight forward **without suffering any measurable deviation or lateral displacement**.

```
         Convex Lens: Ray through O                 Concave Lens: Ray through O

                                 ▲                                  ▼
                                 │                                  │
 ─────────────►──────────────────│                                  │
               ╲                 │                  ────────────────│
                ╲                │                                  │╲
─────────────────╲───────────────┼──────────    ────────────────────┼─╲──────────────
                  ╲              │O                                 │O ╲
                   ╲             │                                  │   ╲
                    ↘────────────│                                  │    ▼───────────
                                 │                                  │
                                 ▼                                  ▲
```

> **Figure 5.8** – Tracing Ray 3. For both thin convex and concave lenses, a ray directed through the optical centre $O$ continues undeviated along its original trajectory.

**Why does Ray 3 pass undeviated?**
At the exact optical centre of a thin lens, the two opposite spherical surfaces are virtually parallel to each other, like the opposite faces of an ultra-thin glass plate. As established in Topic 3, when light traverses a parallel-sided slab, the emergent ray is parallel to the incident ray, suffering only a tiny lateral shift $\Delta x$. Because the lens is thin (thickness $t 	o 0$), this lateral shift is practically zero ($\Delta x pprox 0$). Therefore, the ray continues along a perfectly straight line!

---

## Part E: Comparing Convex and Concave Lenses

Let us summarize the core physical distinctions between convex and concave lenses:

| Feature | Convex Lens | Concave Lens |
|---|---|---|
| **Cross-sectional profile** | Thicker at centre, thinner at edges | Thinner at centre, thicker at edges |
| **Action on parallel beam** | Converges rays toward axis (**converging**) | Diverges rays away from axis (**diverging**) |
| **Nature of focus** | **Real focus** ($F_2$, located behind lens) | **Virtual focus** ($F_1$, located in front of lens) |
| **Physical manifestation** | Can focus heat and light onto a screen | Cannot form a physical hot spot on a screen |
| **Sign of focal length ($f$)** | **Positive ($+f$)** | **Negative ($-f$)** |
| **Magnification capability** | Can form magnified real or virtual images | Always forms diminished virtual images |

### Differences Between Lenses and Spherical Mirrors

It is vital never to confuse spherical mirrors with optical lenses:

| Aspect | Optical Lens | Spherical Mirror |
|---|---|---|
| **Physical mechanism** | **Refraction** (light transmits *through* the medium) | **Reflection** (light bounces *off* the polished surface) |
| **Number of surfaces** | Two refracting surfaces | One reflecting surface |
| **Number of foci** | **Two foci** ($F_1$ and $F_2$, one on each side) | **One focus** ($F$, on the reflective side) |
| **Converging element** | **Convex lens** | **Concave mirror** |
| **Diverging element** | **Concave lens** | **Convex mirror** |

### Which Lens is Optically "Stronger"?

Consider two different convex lenses: Lens A has a focal length of $10	ext{ cm}$, while Lens B has a focal length of $25	ext{ cm}$. Both are exposed to parallel incident sunlight.

- Lens A brings parallel rays to a sharp focus at a distance of just **$10	ext{ cm}$** from the lens.
- Lens B brings the same parallel rays to a focus at a distance of **$25	ext{ cm}$**.

To focus rays closer to its optical centre, Lens A had to bend the light rays through a **substantially larger angle**. Therefore:

> **Fundamental Principle:** A lens with a **shorter focal length bends light rays more strongly** and is considered optically **stronger** (having greater optical power) than a lens with a longer focal length.

We will formalize this concept mathematically in Topic 6, where the optical power $P$ is defined as $P = 1/f$ in dioptres ($1	ext{ D} = 1	ext{ m}^{-1}$).

---

## Part F: Advanced Extension: Cartesian Sign Convention for Lenses

Just as in spherical mirrors, optical calculations for lenses require a strict, standardized sign convention: the **New Cartesian Sign Convention**.

1. **Origin:** The optical centre $O$ of the lens is taken as the origin $(0, 0)$.
2. **Horizontal Axis:** The principal axis is chosen as the $x$-axis. Light is assumed to enter from the **left** and travel toward the **right**.
3. **Direction of Light:**
   - All distances measured in the **direction of incident light** (to the right of $O$) are taken as **positive ($+$)**.
   - All distances measured **against the direction of incident light** (to the left of $O$) are taken as **negative ($-$)**.
4. **Vertical Heights:**
   - Heights measured **perpendicularly upward** from the principal axis are **positive ($+$)**.
   - Heights measured **perpendicularly downward** from the principal axis are **negative ($-$)**.

```
                   +y (Upward: Positive)
                             │
                             ▲ Lens
       -x (Against light)    │    +x (Along light)
     ◄───────────────────────┼───────────────────────►
      Distances Negative     │O   Distances Positive
                             │
                             ▼
                   -y (Downward: Negative)
```

> **Figure 5.9** – New Cartesian Sign Convention for optical lenses.

Applying this convention to focal lengths:
- **Convex Lens:** The effective principal focus where parallel incident rays converge is $F_2$, located to the **right** of $O$ (in the direction of light travel). Therefore:
  $$\mathbf{f_{	ext{convex}} > 0 \quad (	ext{Always Positive})}$$
- **Concave Lens:** The effective principal focus from which parallel incident rays appear to diverge is $F_1$, located to the **left** of $O$ (opposite to the direction of light travel). Therefore:
  $$\mathbf{f_{	ext{concave}} < 0 \quad (	ext{Always Negative})}$$

| Optical Element | Focal Length Sign | Physical Reason |
|---|---|---|
| **Convex Lens** | **Positive ($+$)** | Real focus $F_2$ lies to the right (downstream of light) |
| **Concave Lens** | **Negative ($-$)** | Virtual focus $F_1$ lies to the left (upstream of light) |

---

## Part G: Activity: Measuring the Approximate Focal Length of a Convex Lens

Because the Sun is at a nearly infinite distance from Earth, solar rays incident on a lens are virtually parallel to each other and to the principal axis. We can use this property to measure the approximate focal length of any convex lens easily.

**Apparatus Required:** A convex lens (such as a hand magnifying glass), a sheet of stiff white paper or cardboard, a meter scale or measuring tape, and a lens holder.

**Step-by-step Procedure:**
1. Mount the convex lens in a holder and take it outdoors into bright, direct sunlight. Direct the lens face squarely toward the Sun.
2. Hold the white paper sheet behind the lens, perpendicular to the axis.
3. Slowly move the paper sheet forward and backward until you obtain the **sharpest, smallest, and brightest pinpoint of light** possible on the paper.
4. Using the meter scale, measure the linear distance between the optical centre of the lens and the bright spot on the paper card.

```
                                 ▲        Screen (Paper)
                                 │             ║
                                 │             ║
 ─────────────►──────────────────│─╲           ║
                                 │  ╲──↘       ║
                                 │      ╲─╲    ║
─────────+───────────+───────────┼─────────╲─● ║──────────+────────
        C₁          F₁           │O     ╱─╱ F₂ ║         C₂
                                 │  ╱──↗       ║
 ─────────────►──────────────────│─╱           ║
                                 │             ║
                                 │             ║
                                 ▼
```

> **Figure 5.10** – Experimental determination of focal length. Parallel rays of sunlight converge at $F_2$ on the paper screen. The measured distance from $O$ to the screen is approximately $f$.

**Representative Measurement:**
- Measured distance from lens to sharp solar spot = $15	ext{ cm}$.
- Therefore, the approximate focal length is:
  $$f pprox \mathbf{15	ext{ cm}}$$
- The total distance between the two principal foci ($F_1$ and $F_2$) is:
  $$F_1F_2 = 2 	imes f = 2 	imes 15	ext{ cm} = \mathbf{30	ext{ cm}}$$

**Verification:** $F_1$ lies $15	ext{ cm}$ in front of the lens, and $F_2$ lies $15	ext{ cm}$ behind the lens. Total distance: $15	ext{ cm} + 15	ext{ cm} = 30	ext{ cm}$ ✅.

**Crucial Safety Precautions:**
1. **Never look directly at the Sun through any lens!** The lens concentrates immense solar radiant flux onto the retina, causing irreversible retinal burns and permanent blindness within milliseconds.
2. **Fire Hazard (Burning Glass):** A convex lens concentrates both visible light and invisible infrared (thermal) radiation. The concentrated spot can reach temperatures exceeding $300^\circ	ext{C}$, causing paper, dry leaves, or cloth to burst into flames within seconds. For this reason, large convex lenses were historically called **burning glasses**. Never focus the solar spot onto skin or flammable materials indoors, and never leave magnifying glasses exposed to direct sunlight outdoors unattended.

---

## Part H: For Advanced Understanding: Lens in Different Surrounding Media

In all our standard lessons, the lens is presumed to be surrounded by air ($n_{	ext{air}} pprox 1.00$). The glass of the lens typically has a refractive index $n_{	ext{glass}} pprox 1.50$. Because $n_{	ext{glass}} > n_{	ext{air}}$, light slows down upon entering the glass and bends toward the normal, creating the standard converging behavior in a convex profile.

However, consider what happens if a glass convex lens is immersed in an optical liquid whose refractive index is **greater than that of the glass** ($n_{	ext{liquid}} > n_{	ext{glass}}$):
- When light passes from the liquid into the glass, it enters an optically *rarer* medium!
- Instead of bending toward the normal, the rays bend **away from the normal**!
- As a result, the convex lens no longer converges light: **it diverges light outward, behaving like a concave lens!**

A famous real-world example is an **air bubble inside a glass paperweight or underwater**:
- An air bubble inside water has a double convex spherical shape.
- However, the medium inside ($n_{	ext{air}} = 1.0$) is optically rarer than the surrounding water ($n_{	ext{water}} = 1.33$).
- Consequently, light passing through an underwater air bubble bends away from the normals, causing parallel rays to **diverge**. An air bubble in water acts as a **diverging lens**!

Thus, whether a lens converges or diverges light depends not merely on its geometric shape, but on the **relative refractive index between the lens material and its surrounding environment**. In our Class 9 curriculum, lenses are universally assumed to be in air unless specified otherwise.

---

## Part I: Solved Examples

*(All examples assume thin lenses in air with paraxial rays.)*

### Example 1: Finding Focal Length from a Solar Image

A student holds a convex lens facing the Sun and focuses a sharp, brilliant circular spot on a white card located $12	ext{ cm}$ behind the lens.
(a) What is the approximate focal length of the lens?
(b) What is the position of $2F$?

**Solution:**
Because sunlight arrives in parallel rays, the sharp spot forms at the principal focus $F_2$.
(a) The focal length is the distance from the optical centre to the screen:
$$f pprox \mathbf{12	ext{ cm}}$$
(b) The distance to $2F$ is twice the focal length:
$$2f = 2 	imes 12	ext{ cm} = \mathbf{24	ext{ cm}}$$

**Verification:** $24	ext{ cm} \div 2 = 12	ext{ cm} = f$ ✅.

### Example 2: Determining the Positions of F and 2F

A symmetrical double convex lens has a focal length of $f = 10	ext{ cm}$. State the precise positions of $F_1, F_2, 2F_1,$ and $2F_2$ relative to the optical centre $O$, and calculate the total distance between $F_1$ and $F_2$, as well as between $2F_1$ and $2F_2$.

**Solution:**
- $F_1$ is located **$10	ext{ cm}$ to the left** of $O$ (incident side).
- $F_2$ is located **$10	ext{ cm}$ to the right** of $O$ (emergence side).
- $2F_1$ is located $2 	imes 10	ext{ cm} = \mathbf{20	ext{ cm}}$ to the left of $O$.
- $2F_2$ is located $2 	imes 10	ext{ cm} = \mathbf{20	ext{ cm}}$ to the right of $O$.
- Distance between $F_1$ and $F_2$:
  $$	ext{Distance}(F_1F_2) = 10	ext{ cm} + 10	ext{ cm} = \mathbf{20	ext{ cm}}$$
- Distance between $2F_1$ and $2F_2$:
  $$	ext{Distance}(2F_1 	ext{ to } 2F_2) = 20	ext{ cm} + 20	ext{ cm} = \mathbf{40	ext{ cm}}$$

```
 2F₁         F₁          O          F₂          2F₂
  +───────────+───────────┼───────────+───────────+
  ◄─ 10 cm ──►◄─ 10 cm ──►◄─ 10 cm ──►◄─ 10 cm ──►
```

> **Figure 5.11** – Landmark spacing along the principal axis for $f = 10	ext{ cm}$.

**Verification:** $OF_1 = OF_2 = 10	ext{ cm}$; total $F_1F_2 = 20	ext{ cm} = 2f$ ✅. Distance between $2F$ points is $4f = 40	ext{ cm}$ ✅.

### Example 3: Sign Convention for Focal Length

Express the focal length of each of the following optical elements with its proper Cartesian algebraic sign:
(a) A convex lens of focal length $20	ext{ cm}$.
(b) A concave lens of focal length $15	ext{ cm}$.
(c) A convex lens of focal length $0.25	ext{ m}$.
(d) A concave lens of focal length $0.5	ext{ m}$.

**Solution:**
(a) Convex lens has a real focus to the right $\implies f = \mathbf{+20	ext{ cm}}$.
(b) Concave lens has a virtual focus to the left $\implies f = \mathbf{-15	ext{ cm}}$.
(c) $f = 0.25	ext{ m} = 0.25 	imes 100	ext{ cm} = 25	ext{ cm}$. For a convex lens:
$$f = \mathbf{+0.25	ext{ m}} = \mathbf{+25	ext{ cm}}$$
(d) $f = 0.5	ext{ m} = 0.5 	imes 100	ext{ cm} = 50	ext{ cm}$. For a concave lens:
$$f = \mathbf{-0.5	ext{ m}} = \mathbf{-50	ext{ cm}}$$

**Verification:** Convex focal lengths are strictly positive; concave focal lengths are strictly negative. $25	ext{ cm} \div 100 = 0.25	ext{ m}$ ✅; $50	ext{ cm} \div 100 = 0.5	ext{ m}$ ✅.

### Example 4: Identifying Lens Type from Ray Behavior

(a) A beam of parallel light rays strikes an unknown lens. After refraction, the rays converge at a point located $30	ext{ cm}$ behind the lens. Identify the lens type, state the nature of the focus, and write $f$ with its sign.
(b) A second beam of parallel rays strikes another lens. After refraction, the rays diverge outward as if emerging from a point $18	ext{ cm}$ in front of the lens. Identify the lens type and write $f$ with its sign.
(c) Which of these two lenses can ignite dry paper when exposed to direct sunlight?

**Solution:**
(a) The rays physically converge behind the lens: this is a **convex lens** with a **real focus**.
$$f = \mathbf{+30	ext{ cm}}$$
(b) The rays diverge outward from an apparent point on the incident side: this is a **concave lens** with a **virtual focus**.
$$f = \mathbf{-18	ext{ cm}}$$
(c) Only the **convex lens** can ignite dry paper, because only a converging lens physically concentrates solar radiant energy into a hot focal point.

**Verification:** Converging $\implies$ convex, positive $f$ ✅; diverging $\implies$ concave, negative $f$ ✅.

### Example 5: Tracing Three Principal Rays with Numerical Distances

A convex lens has a focal length of $f = 10	ext{ cm}$.
(a) A ray travelling parallel to the principal axis, $3	ext{ cm}$ above it, strikes the lens. Where does it intersect the principal axis after refraction?
(b) A second ray emanates from $F_1$ and strikes the lens. How does it travel after refraction, and how far is $F_1$ from the lens?
(c) A third ray passes through the optical centre $O$. What is its path after emergence?

**Solution:**
(a) An incident ray parallel to the principal axis refracts through the second principal focus $F_2$. Since $f = 10	ext{ cm}$, it crosses the principal axis at a point **$10	ext{ cm}$ behind the lens** (at $F_2$, where $x = +10	ext{ cm}$).
(b) $F_1$ is located **$10	ext{ cm}$ in front of the lens** ($x = -10	ext{ cm}$). Any ray passing through $F_1$ emerges **parallel to the principal axis** after refraction.
(c) Any ray passing through the optical centre $O$ continues in a **straight line without suffering any deviation**.

**Contrast with a Concave Lens ($f = -10	ext{ cm}$):**
If a parallel ray strikes a concave lens $3	ext{ cm}$ above the axis, it refracts outward, appearing to emanate from $F_1$ located $10	ext{ cm}$ in front of the lens ($x = -10	ext{ cm}$). It will never cross the axis behind the lens. A ray aimed toward $F_2$ ($10	ext{ cm}$ behind the lens) emerges parallel to the axis. A ray through $O$ proceeds undeviated.

**Verification:** In a convex lens, real convergence occurs at $F_2 = +10	ext{ cm}$ ✅; in a concave lens, virtual divergence originates from $F_1 = -10	ext{ cm}$ ✅.

### Example 6: Lens in Different Surrounding Media (Conceptual Extension)

A biconvex glass lens ($n_{	ext{glass}} = 1.5$) converges parallel rays to a focal point at $f = 20	ext{ cm}$ in air ($n_{	ext{air}} = 1.0$). If this lens is submerged in a clear synthetic oil whose refractive index is $n_{	ext{oil}} = 1.7$, describe what happens to parallel rays entering the lens.

**Solution:**
In air, light moves from a rarer medium ($n = 1.0$) into a denser medium ($n = 1.5$), refracting toward the normal and converging.
In the oil, light travels from a denser medium ($n_{	ext{oil}} = 1.7$) into a rarer medium ($n_{	ext{glass}} = 1.5$). At the curved convex interfaces, the rays bend **away from the normals**.
Consequently, the rays bend outward away from the principal axis: the convex lens acts as a **diverging lens**!

**Verification:** Optical convergence requires $n_{	ext{lens}} > n_{	ext{surroundings}}$. When $n_{	ext{lens}} < n_{	ext{surroundings}}$, the optical behavior completely reverses ✅.

### Example 7: Classifying Ten Everyday Optical Objects

Classify each of the following everyday optical elements as predominantly employing a **convex lens** or a **concave lens**:
1. Jeweler's eye loupe
2. Distance-vision spectacles for a near-sighted (myopic) student
3. A handheld reading magnifying glass
4. The objective lens of a classroom multimedia projector
5. The peephole viewer in an apartment front door
6. Reading glasses for a person suffering from presbyopia
7. The camera objective on a smartphone
8. The wide-angle viewfinder lens on an optical camera
9. The eyepiece of a compound laboratory microscope
10. The front lens assembly of a searchlight beam projector

**Solution:**
- **Convex Lenses (Converging):**
  1. Jeweler's eye loupe (magnifies close details)
  3. Handheld reading magnifying glass (produces enlarged virtual image)
  4. Projector objective lens (focuses real enlarged image on screen)
  6. Reading glasses for presbyopia (converges rays for close reading)
  7. Smartphone camera objective (converges rays onto digital sensor)
  9. Microscope eyepiece (acts as a magnifier for the intermediate image)
  10. Searchlight beam projector (positions lamp at focus to create parallel beam)
- **Concave Lenses (Diverging):**
  2. Distance-vision spectacles for myopia (spreads rays before entering eye)
  5. Apartment door peephole (spreads rays to provide an ultra-wide angle view)
  8. Wide-angle optical viewfinder (creates a diminished, wide field of view)

**Verification:** All magnifying and real-image projecting devices use convex optics; all wide-angle spreading and near-sighted corrective devices use concave optics ✅.

### Example 8: Counting Foci and Understanding F₁ and F₂

A student asserts: *"A spherical mirror has one focus, so a spherical lens must also have one focus."*
(a) Explain why this assertion is incorrect.
(b) If a convex lens has a focal length of $16	ext{ cm}$, what is the distance between its two foci?

**Solution:**
(a) The assertion is incorrect because a mirror is opaque and reflects light back from only one side, giving it a single focal point. A lens is **transparent**, allowing light to enter from either the left or the right. Consequently, every lens has **two principal foci** ($F_1$ and $F_2$), positioned symmetrically on opposite sides of the optical centre.
(b) Since each focus is at distance $f = 16	ext{ cm}$ from $O$:
$$	ext{Distance}(F_1F_2) = OF_1 + OF_2 = 16	ext{ cm} + 16	ext{ cm} = \mathbf{32	ext{ cm}}$$

**Verification:** $2 	imes 16	ext{ cm} = 32	ext{ cm}$ ✅.

### Example 9: Determining Which Lens is Optically Stronger

Two convex lenses, Lens 1 with $f_1 = 8	ext{ cm}$ and Lens 2 with $f_2 = 24	ext{ cm}$, are tested in an optics laboratory.
(a) Which lens bends parallel rays of light through a greater angle?
(b) Which lens has greater optical strength?

**Solution:**
(a) Lens 1 converges parallel rays to a focus at just $8	ext{ cm}$ from the optical centre, whereas Lens 2 requires $24	ext{ cm}$ to bring rays to the axis. Therefore, **Lens 1 bends rays through a significantly larger angle**.
(b) Because optical strength is inversely proportional to focal length ($P = 1/f$), **Lens 1 ($f = 8	ext{ cm}$) is optically stronger** than Lens 2.

**Verification:** Shorter focal length $\implies$ sharper angular deviation $\implies$ greater optical strength ✅.

### Example 10: One Burning Spot, Two Distinct Interpretations

During a physics outdoor lab, Elena uses a convex lens to burn a tiny hole in a dark leaf using sunlight. Her lab partner asks two questions:
(a) Is the bright spot simply "compressed light energy," or is it an actual optical image?
(b) Why can a flat window pane of equal thickness not burn the leaf?

**Solution:**
(a) The bright spot is an **actual real image of the Sun**! Because the Sun is an astronomical sphere at optical infinity, its rays arrive parallel, and the lens forms a real, inverted, highly diminished image of the solar disk at $F_2$. The intense thermal energy is simply the concentrated radiant power of all the sunlight intercepted over the lens aperture.
(b) A flat window pane has parallel faces. Refraction at the first surface is exactly cancelled by equal and opposite refraction at the second surface. Rays emerge parallel without any angular convergence toward a focus. Without convergence, light energy is not concentrated, and no significant temperature rise occurs.

**Verification:** Flat glass causes only lateral shift without focal convergence; spherical curvature is essential for focusing radiant flux ✅.

---

## Part J: Solving Leo's Question Completely

We can now resolve the mystery that puzzled Leo in Mr. Vance's workshop:

1. **Why Mr. Vance's loupe and Grandfather's reading glasses magnify:**
   Both the loupe and the reading spectacles are **convex lenses** (thicker at the centre). When an object (the watch gears or the book text) is held close to a convex lens—specifically, **inside the first focal length ($u < f$)**—the lens refracts the diverging rays from the object so that they do not cross physically, but appear to diverge from a much larger, upright source behind the object. This produces an **enlarged, virtual, and erect image**! The eye perceives the tiny gears as dramatically magnified.
2. **Why Liam's distance glasses shrink everything:**
   Liam's spectacles are **concave lenses** (thinner at the centre, thicker at the rims). As we established, a concave lens refracts light rays outward away from the axis. When an observer looks through a concave lens at any real object, the diverging rays always trace backward to form a **virtual, erect, but strictly diminished (smaller) image** located between the lens and its focus. Every object viewed across the workshop appears shrunk!

Leo beamed as he understood the underlying physics. "So glass doesn't have an inherent 'magnifying' or 'shrinking' power by itself! It is entirely the **curvature of the surfaces** that dictates whether rays converge to enlarge an image or diverge to shrink it!"

"Precisely, Leo," Mr. Vance agreed with a smile. "In Topic 6, we will discover the exact geometric positions where a convex lens flips from magnifying an upright image to projecting an inverted image across a room!"

---

## Common Pitfalls to Avoid

1. **Mistake 1: Confusing lens terminology with spherical mirror terminology.**
   A concave *mirror* converges light, but a concave *lens* diverges light! Conversely, a convex *mirror* diverges light, but a convex *lens* converges light. Always keep the words straight: **convex lens = converging; concave lens = diverging**.
2. **Mistake 2: Assuming a lens has only one focus.**
   Because light can travel through transparent glass from either the left or the right, every lens possesses **two principal foci** ($F_1$ and $F_2$), located equidistant from the optical centre.
3. **Mistake 3: Believing that a ray passing through the optical centre bends sharply.**
   For any thin lens, an incident ray passing through the optical centre $O$ proceeds along a perfectly straight line **without deviation**.
4. **Mistake 4: Believing that $F_1$ and $F_2$ are separated by distance $f$.**
   The focal length $f$ is the distance from $O$ to *one* focus ($OF_1 = f$ and $OF_2 = f$). The total separation between the two foci is **$2f$**, not $f$.
5. **Mistake 5: Assuming a convex lens always magnifies objects.**
   A convex lens only magnifies an image under specific object distances (such as when the object is inside $F_1$, or between $F_1$ and $2F_1$). When an object is placed far away (beyond $2F_1$), a convex lens forms a *diminished* image!
6. **Mistake 6: Forgetting the algebraic signs of focal length in Cartesian convention.**
   Remember: $f$ for a **convex lens is strictly positive ($+f$)**, and $f$ for a **concave lens is strictly negative ($-f$)**.
7. **Mistake 7: Thinking that the burning spot of sunlight is just a point of heat, not an image.**
   The intense bright spot formed by a convex lens under direct sunlight is an actual **real, point-sized image of the Sun** located at the focal plane.
8. **Mistake 8: Assuming that lens behavior depends solely on glass curvature.**
   A convex glass lens only converges light when surrounded by an optically rarer medium like air. If submerged in an optically denser liquid ($n_{	ext{liquid}} > n_{	ext{glass}}$), the same convex lens diverges light!

---

## Quick Recap

- A **lens** is a transparent optical medium bounded by two surfaces, at least one of which is spherical.
- A **convex lens** is thicker at the centre and thinner at the edges; it converges parallel rays to a **real focus** on the opposite side ($f > 0$).
- A **concave lens** is thinner at the centre and thicker at the edges; it diverges parallel rays outward away from a **virtual focus** on the incident side ($f < 0$).
- A lens can be modeled as a series of small prisms: convex lenses have prism bases meeting at the axis (bending rays inward); concave lenses have prism bases facing outward (bending rays outward).
- Essential landmarks: optical centre $O$ (central origin), principal axis (horizontal line through $C_1, C_2, O$), centres of curvature $C_1, C_2$ (drawn at $2F$), principal foci $F_1, F_2$ (equidistant from $O$ with $OF_1 = OF_2 = f$), and aperture $AB$ (effective light-transmitting diameter).
- **Three Principal Rays:**
  1. Ray parallel to the axis refracts through $F_2$ (convex) or appears to diverge from $F_1$ (concave).
  2. Ray through $F_1$ (convex) or directed toward $F_2$ (concave) emerges parallel to the axis.
  3. Ray through the optical centre $O$ passes straight through undeviated.
- **Cartesian Sign Convention:** Distances in the direction of incident light are positive; opposite are negative. Thus, $f_{	ext{convex}}$ is positive, and $f_{	ext{concave}}$ is negative.
- **Solar Focal Length Activity:** Focusing parallel sunlight onto a screen gives a sharp burning spot at $F_2$; the lens-to-screen distance is approximately $f$.
- Optical strength: A lens with a shorter focal length bends rays more sharply and possesses greater optical power ($P = 1/f$).

---

## Practice Questions

1. A convex lens forms a sharp, brilliant spot of the Sun on a paper card held $14	ext{ cm}$ behind the lens.
   (a) Estimate the focal length of the lens.
   (b) State the distance of $F_1$ and $F_2$ from the optical centre.
   (c) What is the total distance between $F_1$ and $F_2$?
2. A symmetrical convex lens has a focal length of $f = 15	ext{ cm}$. Draw a landmark diagram and specify the exact distances of $F_1, F_2, 2F_1,$ and $2F_2$ from the optical centre $O$.
3. Express the focal length $f$ with its correct Cartesian algebraic sign for:
   (a) A convex lens of focal length $30	ext{ cm}$.
   (b) A concave lens of focal length $12	ext{ cm}$.
   (c) A convex lens of focal length $0.4	ext{ m}$.
   (d) A concave lens of focal length $0.2	ext{ m}$.
4. A beam of parallel light rays falls on an unknown lens. After refraction, the rays diverge outward, appearing to emanate from a point located $20	ext{ cm}$ in front of the lens.
   (a) Which type of lens is it?
   (b) Is its focus real or virtual?
   (c) State its focal length $f$ with the proper algebraic sign.
5. State whether each of the following statements is True or False. If false, provide the correct statement:
   (a) A lens has only one principal focus.
   (b) The optical centre and the principal focus are the same point.
   (c) A light ray passing through the optical centre of a thin lens undergoes sharp angular deviation.
   (d) A convex lens always produces an image that is larger than the object.
6. A convex lens has a focal length of $f = 10	ext{ cm}$.
   (a) Where does an incident ray parallel to the principal axis, $2	ext{ cm}$ above it, intersect the axis after refraction?
   (b) What path does a ray take if it passes through the first focus $F_1$ before striking the lens?
   (c) What happens to a ray that passes through the optical centre $O$?
7. Two convex lenses have focal lengths of $8	ext{ cm}$ and $20	ext{ cm}$ respectively. Which lens is optically stronger (bends light through a larger angle)? Give a clear one-sentence physical reason.
8. Classify each of the following optical devices as employing a convex or concave lens:
   (a) A handheld reading magnifying glass.
   (b) Spectacles prescribed for a student who is short-sighted (myopic).
   (c) A wide-angle security peephole in an entrance door.
   (d) The objective lens in a movie theatre projector.
9. A student claims: *"A convex lens with a focal length of $12	ext{ cm}$ has its two principal foci separated by a distance of $12	ext{ cm}$."* Identify the student's conceptual error and determine the correct separation distance.
10. *(Advanced Extension)* Why is the focal length of a convex lens defined as positive ($+f$) while that of a concave lens is defined as negative ($-f$) under the New Cartesian Sign Convention?

### Answers

1. (a) Since sunlight consists of parallel incident rays, they converge at the principal focus $F_2$. Therefore, $f pprox \mathbf{14	ext{ cm}}$.
   (b) Both $F_1$ and $F_2$ are located at distance $f = \mathbf{14	ext{ cm}}$ from $O$ ($F_1$ is $14	ext{ cm}$ to the left, $F_2$ is $14	ext{ cm}$ to the right).
   (c) Total separation between foci:
   $$	ext{Distance}(F_1F_2) = OF_1 + OF_2 = 14	ext{ cm} + 14	ext{ cm} = \mathbf{28	ext{ cm}}$$
   *Check:* $2 	imes 14	ext{ cm} = 28	ext{ cm}$ ✅.

2. Landmarks relative to optical centre $O$:
   - $F_1$: $15	ext{ cm}$ to the left of $O$ ($x = -15	ext{ cm}$).
   - $F_2$: $15	ext{ cm}$ to the right of $O$ ($x = +15	ext{ cm}$).
   - $2F_1$: $2 	imes 15	ext{ cm} = 30	ext{ cm}$ to the left of $O$ ($x = -30	ext{ cm}$).
   - $2F_2$: $2 	imes 15	ext{ cm} = 30	ext{ cm}$ to the right of $O$ ($x = +30	ext{ cm}$).
   *Check:* $30	ext{ cm} \div 2 = 15	ext{ cm} = f$ ✅.

3. (a) Convex lens: $f = \mathbf{+30	ext{ cm}}$.
   (b) Concave lens: $f = \mathbf{-12	ext{ cm}}$.
   (c) Convex lens: $f = +0.4	ext{ m} = \mathbf{+40	ext{ cm}}$.
   (d) Concave lens: $f = -0.2	ext{ m} = \mathbf{-20	ext{ cm}}$.
   *Check:* Convex is strictly positive; concave is strictly negative. $40	ext{ cm} = 0.4	ext{ m}$ ✅; $20	ext{ cm} = 0.2	ext{ m}$ ✅.

4. (a) Because refracted rays diverge outward, this is a **concave (diverging) lens**.
   (b) Its focus is **virtual**, because real rays do not physically meet; they only appear to originate from that point.
   (c) Since the virtual focus lies $20	ext{ cm}$ on the incident side (against light direction):
   $$f = \mathbf{-20	ext{ cm}}$$
   *Check:* Diverging action strictly requires negative focal length ✅.

5. (a) **False ❌.** Every transparent lens has **two principal foci** ($F_1$ and $F_2$), one on each side.
   (b) **False ❌.** The optical centre $O$ is the geometric centre of the lens glass itself, whereas the principal focus $F$ is a point on the principal axis located at distance $f$ from $O$.
   (c) **False ❌.** A ray passing through the optical centre $O$ of a thin lens continues straight through **without suffering any deviation**.
   (d) **False ❌.** The magnification produced by a convex lens depends entirely on object distance. When an object is placed beyond $2F_1$, the convex lens forms a diminished (smaller) image.

6. (a) An incident ray parallel to the axis refracts through the second focus $F_2$. Since $f = 10	ext{ cm}$, it crosses the principal axis at a point **$10	ext{ cm}$ behind the lens** ($x = +10	ext{ cm}$).
   (b) A ray passing through the first focus $F_1$ refracts at the lens and emerges **parallel to the principal axis**.
   (c) A ray passing through the optical centre $O$ passes straight through **without bending or deviation**.
   *Check:* Conforms exactly to standard principal rays 1, 2, and 3 ✅.

7. The **$8	ext{ cm}$ lens is optically stronger**.
   *Physical Reason:* A lens with a shorter focal length refracts parallel rays through a larger angular deviation, bringing them to a focus closer to the lens.
   *Check:* $8	ext{ cm} < 20	ext{ cm}$; optical power $P = 1/f$ is greater for smaller $f$ ✅.

8. (a) Magnifying glass: **Convex lens** (converging).
   (b) Myopia spectacles: **Concave lens** (diverging).
   (c) Door peephole: **Concave lens** (diverging, wide-angle field).
   (d) Projector objective: **Convex lens** (converging, forms enlarged real image).

9. *Conceptual Error:* The student confused the focal length $f$ (distance from optical centre $O$ to one focus) with the total distance between both foci.
   *Correct Separation:* Because $F_1$ is $12	ext{ cm}$ to the left and $F_2$ is $12	ext{ cm}$ to the right, the total separation is:
   $$F_1F_2 = 12	ext{ cm} + 12	ext{ cm} = \mathbf{24	ext{ cm}}$$
   *Check:* $2 	imes 12	ext{ cm} = 24	ext{ cm}$ ✅.

10. Under the New Cartesian Sign Convention, distances measured in the direction of incident light (to the right of the optical centre $O$) are positive, while distances against incident light (to the left of $O$) are negative. For a convex lens, parallel rays converge at the real focus $F_2$ located to the **right** of $O$ (downstream of light travel), giving $f > 0$ (**positive**). For a concave lens, parallel rays diverge such that they appear to radiate from the virtual focus $F_1$ located to the **left** of $O$ (upstream of light travel), giving $f < 0$ (**negative**).

---

You have now mastered the geometry of convex and concave lenses, their reference landmarks ($O, F_1, F_2, f$), and the three standard principal rays. The first half of Leo's question is solved: a convex lens bends rays inward toward the axis, while a concave lens spreads them outward.

**What lies ahead?** In Topic 6, we will place objects at varying distances from a lens and track their image formation step-by-step. We will discover the six canonical ray diagram positions of a convex lens, learn why video projectors require an inverted slide, and derive image positions with mathematical precision using the **lens formula** ($1/v - 1/u = 1/f$) and calculate lens **optical power** ($P = 1/f$).
