# Chapter: Light: Refraction (Part 3)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [light-refraction-part2.md](light-refraction-part2.md)** (covering refractive index, $n = c / v$, and Snell's Law $n = \sin i / \sin r$). The introductory concepts of refraction and its fundamental laws are established in [light-refraction.md](light-refraction.md).
> **Topics covered in this file:**
> 3. Glass Slab, Lateral Shift, and Apparent Depth

---

# Topic 3: Glass Slab, Lateral Shift, and Apparent Depth

In our study of refractive index, we explored refraction across a single planar boundary separating two transparent media—such as light passing from air into water or from air into an optical block. In practical life, however, light routinely encounters **two consecutive boundaries**: entering an optical component through a front surface and exiting back into the ambient medium through a rear surface. Examples include architectural windowpanes, spectacle lenses, rectangular display blocks, and glass aquariums.

What happens to a beam of light after passing entirely through a transparent solid block with **parallel planar faces**? Does the emerging ray deviate in direction, or does it emerge parallel to its original path? Furthermore, why does any submerged object—whether a coin in a tumbler or a mosaic tile at the bottom of a pool—appear noticeably elevated toward the surface? In this topic, we investigate the geometry of the **rectangular glass slab**, calculate its sideways **lateral shift**, and master the quantitative physics of **apparent depth**.

---

## The Shifted Line in the Architectural Glazing Workshop

Elena was visiting an architectural glazing and optical design studio with her father. The workshop director, Mr. Harrison, was preparing large polished glass slabs for high-spec museum display cases. Resting flat upon a white workbench was a thick, pristine rectangular slab of polished optical glass. Directly beneath the slab, a single continuous reference line had been drawn across a sheet of drafting paper using a black drafting pen and a long straightedge.

Elena walked over to examine the glass block. Standing slightly to one side, she peered down obliquely through the top and side edge of the thick block. She stopped in astonishment.

"Mr. Harrison, look at this drafting line!" Elena said. "The line appears fractured. The portion of the line visible outside the glass block is on one track, but the segment viewed through the glass appears **shifted noticeably to the side**. The line no longer appears continuous and straight!"

Mr. Harrison chuckled with satisfaction. "The ink line on the paper is perfectly intact and straight, Elena. What you are witnessing is the geometric choreography of light. The rays reflecting from the ink line underwent **two consecutive refractions**—first upon entering the bottom of the glass, and second upon emerging through the top face into the air. Because the two surfaces of the slab are parallel, the exiting light ray continues in the exact same direction as before, but it has been physically **shifted sideways**. In physics, that sideways displacement is called **lateral shift**." We will resolve Elena's optical puzzle quantitatively at the end of this topic.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Glass slab (rectangular block)** | A transparent rectangular block bounded by three pairs of mutually perpendicular flat surfaces, with opposing faces strictly **parallel** | The polished display block on Mr. Harrison's workbench |
| **Emergent ray** | The light ray that exits the second interface of the slab back into the surrounding medium | The ray emerging from the lower or upper face into ambient air |
| **Angle of emergence ($e$)** | The angle formed between the emergent ray and the normal at the second interface | $e = 30^\circ$, measured relative to the second normal |
| **Lateral shift ($d$)** | The perpendicular distance between the original incident ray (extended forward) and the parallel emergent ray | $d = 3.07\text{ cm}$ for a thick glass block |
| **Thickness ($t$)** | The perpendicular distance between the two parallel refracting faces through which light passes | A slab of thickness $t = 6\text{ cm}$ |
| **Real depth ($h$)** | The true physical distance of a submerged object beneath a transparent surface | True depth of a swimming pool: $h = 2\text{ m}$ |
| **Apparent depth ($h'$)** | The perceived depth of a submerged object when viewed from above | Perceived depth of the pool floor: $h' = 1.5\text{ m}$ |
| **Apparent shift ($\Delta h$)** | The vertical distance by which a submerged object appears raised toward the surface: $\Delta h = h - h'$ | The pool bed appears raised by $\Delta h = 0.5\text{ m}$ |

---

## Part A: Passage of a Ray Through a Glass Slab

A rectangular glass slab is bounded by two opposing, strictly parallel planar interfaces. Ambient air surrounds both the entry face and the exit face.

Let us trace a narrow ray of light incident obliquely upon the first face:
1. **At the first interface (Air to Glass):** The ray enters from an optically rarer medium (air, $n_1 = 1$) into an optically denser medium (glass, $n_2 = n$). In accordance with Rule 1 of refraction, the ray **bends towards the normal**:

   $$r < i$$

2. **Inside the slab:** The light travels along a single uninterrupted straight path through the homogeneous glass.
3. **At the second interface (Glass to Air):** The ray exits from an optically denser medium (glass, $n$) into an optically rarer medium (air, $1$). In accordance with Rule 2, the ray **bends away from the normal**.

```
                  N1
                    :
                    :
  Incident ray\     :
               \    :
                \i  :
                 \  :
                  \ :
  Air (n = 1)      \:
  ──────────────────A───────────────────────────────────  First Face
                    :\
  Glass (n)         :\   :
                    : \  :
                    :  \r:
                    :r \ :
                    :   \:.
                    :   \: .
  ───────────────────────B──.───────────────────────────  Second Face
                         :\  .
  Air (n = 1)            : \  .
                         :e \  .
                         :   \  .
                         :    \ d
                         :     \
                         :      \
                        N2       \ Emergent Ray
```

> **Figure 3.1** – Passage of a light ray through a rectangular glass slab with parallel faces. At $A$, the ray refracts from air into glass, bending toward normal $N_1$ with angle of refraction $r$. At $B$, it refracts from glass into air, bending away from normal $N_2$ with angle of emergence $e$. The straight dashed line represents the forward extension of the original incident ray. The emergent ray is strictly **parallel** to the incident ray, but laterally displaced by perpendicular distance $d$.

### Why the Emergent Ray Is Parallel to the Incident Ray

Because the two opposing faces of the slab are parallel planes, the normal lines constructed at $A$ ($N_1$) and $B$ ($N_2$) are **mutually parallel**. 

The straight ray segment $AB$ inside the glass acts as a transversal line intersecting these two parallel normals. By the geometric theorem of **alternate interior angles**:

$$\text{Angle of refraction at first face} = \text{Angle of incidence at second face} = r$$

Now apply Snell's Law at both boundaries:
1. At the first face (Air to Glass):

   $$1 \times \sin i = n \times \sin r \implies \sin i = n \sin r$$

2. At the second face (Glass to Air):

   $$n \times \sin r = 1 \times \sin e \implies \sin e = n \sin r$$

Equating the two expressions for $n \sin r$:

$$\sin e = \sin i \implies \mathbf{e = i}$$

> **Fundamental Optical Invariance:** For any transparent slab bounded by parallel faces with identical media on both sides:
>
> $$\text{Angle of Emergence } (e) = \text{Angle of Incidence } (i)$$

Because the emergent ray makes the exact same angle with the normal as the incident ray, **the emergent ray is strictly parallel to the incident ray.** The glass slab does **not alter the angular direction** of the beam; it merely shifts its path sideways.

*(Reversibility Perspective: This equality also follows directly from the Principle of Reversibility of Light. Refraction at the second face is the exact reverse of refraction at the first face: air-to-glass converts angle $i$ to $r$; glass-to-air converts angle $r$ back to $i$.)*

### Factors Influencing Lateral Shift

The **lateral shift ($d$)** is defined as the **perpendicular distance** between the path of the original incident ray (extended straight forward) and the parallel path of the emergent ray.

```
          \         .
           \       / .
            \     /   .
             d   /     .
              \ /       .
               \         .
                \         .
                 \         .
    Emergent Ray          Incident Ray Extension
```

> **Figure 3.2** – Lateral shift $d$ is strictly the **perpendicular distance** between the two parallel rays. It is never measured along the glass surface or along the slanted ray itself.

The magnitude of lateral shift depends directly upon three physical parameters:

| Parameter | Variation | Effect on Lateral Shift ($d$) | Physical Mechanism |
|---|---|---|---|
| **Thickness of Slab ($t$)** | Increases | **Increases** | Light traverses a longer path inside the glass, accumulating greater sideways displacement |
| **Angle of Incidence ($i$)** | Increases | **Increases** | Steeper oblique entry produces a larger angular difference $(i - r)$, widening the separation |
| **Refractive Index ($n$)** | Increases | **Increases** | Higher optical density bends the internal ray more sharply toward the normal, increasing $(i - r)$ |

*Special Case:* At normal incidence ($i = 0^\circ$), light passes through both faces undeviated with $r = 0^\circ$ and $e = 0^\circ$. Consequently, the lateral shift is **identically zero** ($d = 0$).

---

## Part B: Activity: Measuring Lateral Shift Using Optical Pins

**Apparatus:** A flat rectangular glass slab, a sheet of white drawing paper mounted on a drawing board, four optical pins ($P_1, P_2, P_3, P_4$), a protractor, a $30\text{ cm}$ graduated ruler, and a sharp pencil.

**Step-by-Step Laboratory Procedure:**
1. Secure the paper to the drawing board. Place the glass slab at the centre and trace its perimeter with a pencil, labeling the parallel faces $AB$ (upper) and $CD$ (lower). Remove the slab.
2. Mark a point $O$ on face $AB$ and draw a normal line perpendicular to $AB$. Using a protractor, draw an incident ray making an angle $i = 30^\circ$ with the normal.
3. Fix two pins $P_1$ and $P_2$ vertically on this line, separated by at least $5\text{ cm}$.
4. Replace the glass slab precisely within its traced outline.
5. Look through the opposite face $CD$ from below. Shift your eye until the virtual images of pins $P_1$ and $P_2$ seen through the glass appear aligned in a single straight line.
6. Fix two pins $P_3$ and $P_4$ on the paper such that $P_3$, $P_4$, and the images of $P_1$ and $P_2$ all lie along one continuous line of sight.
7. Remove the slab and pins. Draw a straight line passing through the pinpricks of $P_4$ and $P_3$ until it meets interface $CD$ at point $Q$. This represents the **emergent ray**.
8. Join points $O$ and $Q$ with a solid line to represent the refracted ray inside the slab.
9. Using a ruler and dashed line, extend the original incident ray $P_1P_2$ straight forward past the slab.
10. Using a set-square or ruler, draw a line segment perpendicular to both the extended incident line and the emergent ray $P_3P_4$. Measure the length of this perpendicular segment: this is the **lateral shift $d$**.
11. Measure angles $i$ and $e$ with a protractor. Repeat the entire procedure for $i = 45^\circ$ and $i = 60^\circ$.

```
    * P1
     \
      \
       * P2
        \
         \
          \
           \
  ──────────O───────────────────────────  AB (First Face)
            \
            \
             \
             \          Glass Slab
              \
              \
  ────────────Q─────────────────────────  CD (Second Face)
               \
                \
                 * P3
                  \
                   \
                    * P4
                     \ Emergent Ray
```

> **Figure 3.3** – Optical pin experiment to determine lateral shift. Notice that emergent line $P_3P_4$ is parallel to incident line $P_1P_2$, but shifted laterally.

**Sample Laboratory Data ($t = 4.0\text{ cm}$, $n = 1.50$):**

| Trial | Angle of Incidence ($i$) | Measured Angle of Emergence ($e$) | Measured Lateral Shift ($d$) |
|---|---|---|---|
| 1 | $30^\circ$ | $30^\circ$ | **$0.8\text{ cm}$** |
| 2 | $45^\circ$ | $45^\circ$ | **$1.3\text{ cm}$** |
| 3 | $60^\circ$ | $59^\circ$ | **$2.1\text{ cm}$** |

*Observations:*
- In every trial, $e \approx i$ (the $1^\circ$ variance in Trial 3 represents minor experimental error).
- As the angle of incidence increases from $30^\circ$ to $60^\circ$, the lateral shift increases dramatically from $0.8\text{ cm}$ to $2.1\text{ cm}$.

---

## Part C: Mathematical Formula for Lateral Shift (Extension: Class 10 Overlap)

*(Extension Note: While geometric derivation of this formula belongs to advanced curricula, applying the resulting equation provides immense analytical clarity.)*

From the trigonometry of the internal right-angled triangles constructed between the two parallel interfaces, the exact formula for lateral shift is:

> **Lateral Shift Formula:**
>
> $$d = \frac{t \sin(i - r)}{\cos r}$$
>
> where:
> - $t$ is the slab thickness,
> - $i$ is the angle of incidence,
> - $r$ is the angle of refraction inside the glass ($\sin r = \frac{\sin i}{n}$).

Physical validation from the formula:
- If $i = 0^\circ$, then $r = 0^\circ$, so $\sin(i - r) = \sin 0^\circ = 0$, giving $d = 0$.
- Because $t$ appears directly in the numerator, doubling the thickness doubles the lateral shift.
- The term $(i - r)$ represents the angular deviation at the first interface. As $(i - r)$ increases, $\sin(i - r)$ increases, driving $d$ upward.

Let us evaluate the internal angles for crown glass ($n = 1.50$):

| Incident Angle ($i$) | $\sin r = \frac{\sin i}{1.5}$ | Refracted Angle ($r$) | Deviation: $(i - r)$ |
|---|---|---|---|
| $30^\circ$ | $\frac{0.5000}{1.5} \approx 0.3333$ | $19.47^\circ$ | $30^\circ - 19.47^\circ = \mathbf{10.53^\circ}$ |
| $45^\circ$ | $\frac{0.7071}{1.5} \approx 0.4714$ | $28.13^\circ$ | $45^\circ - 28.13^\circ = \mathbf{16.87^\circ}$ |
| $60^\circ$ | $\frac{0.8660}{1.5} \approx 0.5774$ | $35.26^\circ$ | $60^\circ - 35.26^\circ = \mathbf{24.74^\circ}$ |

### Elena's Displaced Line: Resolution of the Story

We can now resolve Elena's observation in Mr. Harrison's glazing workshop:
Elena was viewing the drafting line through a heavy glass slab of thickness $t = 6.0\text{ cm}$ and refractive index $n = 1.50$ at an oblique viewing angle corresponding to $i = 60^\circ$:

1. Calculate $r$:

   $$\sin r = \frac{\sin 60^\circ}{1.50} = \frac{0.8660}{1.50} \approx 0.5774 \implies r \approx \mathbf{35.26^\circ}$$

2. Calculate $(i - r)$:

   $$i - r = 60^\circ - 35.26^\circ = \mathbf{24.74^\circ}$$

3. Evaluate trigonometric functions:

   $$\sin(24.74^\circ) \approx 0.4184, \quad \cos(35.26^\circ) \approx 0.8165$$

4. Apply the lateral shift equation:

   $$d = \frac{t \sin(i - r)}{\cos r} = \frac{6.0\text{ cm} \times 0.4184}{0.8165} = \frac{2.510\text{ cm}}{0.8165} \approx \mathbf{3.07\text{ cm}}$$

**Conclusion:** Light emerging from beneath the glass slab was shifted sideways by more than **3 centimetres**! Because the portion of the ink line outside the slab reached Elena's eye through unobstructed air without deviation, the abrupt $3.07\text{ cm}$ lateral displacement produced the striking visual illusion of a broken line.

---

## Part D: Apparent Depth: Why Submerged Objects Appear Raised

In Topic 1, Leo noticed that the swimming pool floor appeared shallower than its true depth. We now establish the exact mathematical law governing this phenomenon.

When an observer views a submerged object from **directly above (near-normal incidence)**, the object appears elevated toward the surface.

```
              :             To Observer's Eye
              :             /
              :           /
              :         /
  Air (Rarer) :       /
              :     /
  ────────────:───P─────────────────────────────── Water Surface
              : ./
  Water       I /
  (Denser)    :/
              O (True Object)
```

> **Figure 3.4** – Geometry of apparent depth. An object $O$ is located at true depth $h$. A light ray from $O$ strikes surface point $P$ and refracts away from the normal into air. Tracing the emerging ray backward in a straight line yields virtual image point $I$ at apparent depth $h'$, closer to the surface.

### A Fundamental Formula: Real Depth versus Apparent Depth

For near-normal viewing, Snell's Law simplifies through the small-angle approximation ($\sin \theta \approx \tan \theta$) to yield the fundamental relationship:

> **Apparent Depth Equation:**
>
> $$\frac{\text{Real Depth } (h)}{\text{Apparent Depth } (h')} = n$$
>
> Rearranging for apparent depth:
>
> $$h' = \frac{h}{n}$$
>
> where:
> - $h$ is the true physical depth,
> - $h'$ is the apparent (perceived) depth,
> - $n$ is the refractive index of the liquid ($n > 1$).

Because $n > 1$ for all transparent liquids, **$h'$ is strictly less than $h$**. The object always appears closer to the surface than it truly is.

The vertical distance by which the object is raised is called the **apparent shift** ($\Delta h$):

$$\Delta h = h - h' = h - \frac{h}{n} = h\left(1 - \frac{1}{n}\right)$$

### Example 1: Apparent Depth of a Pond

A natural pond of clear water ($n = 1.33$) has a true depth of $3.0\text{ m}$. Calculate its apparent depth when viewed from directly above.

**Solution:**
1. Using $h' = \frac{h}{n}$:

   $$h' = \frac{3.0\text{ m}}{1.33} \approx \mathbf{2.26\text{ m}}$$

**Check:** $2.26\text{ m} \times 1.33 = 3.01\text{ m} \approx 3.0\text{ m}$ ✅. The pond appears almost three-quarters of a metre shallower than it is!

### Example 2: Apparent Rise of the Swimming Pool Bed (Topic 1 Follow-Up)

In Topic 1, Leo noted that the shallow end of the pool appeared barely knee-deep. If the true physical depth of the pool at that point is $h = 2.0\text{ m}$, find its apparent depth and calculate by how much the bottom appears raised. ($n_{\text{water}} = 1.33$)

**Solution:**
1. Apparent depth:

   $$h' = \frac{h}{n} = \frac{2.0\text{ m}}{1.33} \approx \mathbf{1.50\text{ m}}$$

2. Apparent vertical rise:

   $$\Delta h = h - h' = 2.0\text{ m} - 1.50\text{ m} = \mathbf{0.50\text{ m}} \quad (50\text{ cm})$$

**Check:** $\Delta h = h\left(1 - \frac{1}{1.33}\right) = 2.0\left(1 - 0.7519\right) = 2.0 \times 0.2481 \approx 0.50\text{ m}$ ✅. The pool bed is visually elevated by half a metre, illustrating why judging water depth visually is dangerous.

### Example 3: Water Tank

A residential water storage tank contains water to a depth of $0.40\text{ m}$. What is its apparent depth when viewed normally from above? ($n = 1.33$)

**Solution:**

$$h' = \frac{h}{n} = \frac{0.40\text{ m}}{1.33} \approx \mathbf{0.30\text{ m}} \quad (30\text{ cm})$$

**Check:** $0.30\text{ m} \times 1.33 = 0.399\text{ m} \approx 0.40\text{ m}$ ✅.

### Example 4: Beaker of Oil

A laboratory glass beaker is filled with turpentine oil ($n = 1.47$) to a depth of $12.0\text{ cm}$. Determine the apparent depth of the bottom of the beaker.

**Solution:**

$$h' = \frac{h}{n} = \frac{12.0\text{ cm}}{1.47} \approx \mathbf{8.16\text{ cm}}$$

**Check:** $8.16\text{ cm} \times 1.47 \approx 12.0\text{ cm}$ ✅. The bottom appears raised by $\Delta h = 12.0 - 8.16 = 3.84\text{ cm}$.

### Example 5: Real Depth Calculated from Apparent Depth

An ecologist looking vertically downward into a clear river estimates that a resting trout appears to be at a depth of $4.0\text{ m}$. Calculate the true physical depth of the fish. ($n = 1.33$)

**Solution:**
1. Rearranging $h' = \frac{h}{n}$ for real depth:

   $$h = h' \times n = 4.0\text{ m} \times 1.33 = \mathbf{5.32\text{ m}}$$

**Check:** $h' = \frac{5.32\text{ m}}{1.33} = 4.0\text{ m}$ ✅. The fish is actually more than $5.3\text{ m}$ below the surface!

### A Frequent Error to Avoid: Do Not Multiply by $n$

A common mistake is writing $h' = h \times n$. Because $n > 1$, multiplying by $n$ would yield an apparent depth **greater** than the physical depth, implying that water makes objects look deeper! Submerged objects always appear **closer** to the surface: **apparent depth is always smaller than real depth ($h' = h / n$).**

---

## Part E: Apparent Shift of Objects Beneath a Glass Slab

When an opaque object (such as a coin or printed letter) is placed beneath a thick flat glass slab and viewed from directly above, it appears vertically shifted upward, exactly like an object submerged in liquid. Here, the thickness $t$ of the slab plays the role of the real depth $h$.

```
                Observer's Eye (Directly Above)
                       :
    ═══════════════════════════════════  Top Surface
                       :
         Glass         :
                       :
                      I  (Virtual Image, Apparent Position)
                       :
                       :
    ═══════════════════════════════════  Bottom Surface
                      O  (Physical Printed Letter)
```

> **Figure 3.5** – Apparent shift under a glass slab. An object $O$ at the bottom of a slab of thickness $t$ forms a virtual image $I$ elevated toward the top surface.

The mathematical relationships are:
- **Apparent depth of object below top face:**

  $$h' = \frac{t}{n}$$

- **Apparent vertical shift ($\Delta t$):**

  $$\Delta t = t - h' = t - \frac{t}{n} = \mathbf{t\left(1 - \frac{1}{n}\right) = \frac{t(n - 1)}{n}}$$

### Example 6: Printed Text Beneath a Glass Slab

A printed word in a textbook is covered by a glass block of thickness $t = 3.0\text{ cm}$ and refractive index $n = 1.50$. When viewed normally from above, by how much does the printed text appear raised?

**Solution:**
1. Method 1 (Step-by-step):

   $$h' = \frac{t}{n} = \frac{3.0\text{ cm}}{1.50} = 2.0\text{ cm}$$

   $$\text{Apparent Shift } \Delta t = t - h' = 3.0\text{ cm} - 2.0\text{ cm} = \mathbf{1.0\text{ cm}}$$

2. Method 2 (Direct formula):

   $$\Delta t = t\left(1 - \frac{1}{n}\right) = 3.0\text{ cm} \times \left(1 - \frac{1}{1.5}\right) = 3.0\text{ cm} \times \frac{0.5}{1.5} = \mathbf{1.0\text{ cm}}$$

**Check:** Both methods yield an apparent rise of $1.0\text{ cm}$ ✅. For a $6.0\text{ cm}$ slab ($n = 1.50$), the shift would be $6.0 \times \frac{0.5}{1.5} = 2.0\text{ cm}$: a thicker slab produces a proportionately greater apparent rise.

### Coin at the Bottom of a Beaker of Water

Placing a coin at the bottom of a beaker filled with $6.0\text{ cm}$ of water ($n = 1.33$) causes it to appear at an apparent depth of $h' = \frac{6.0\text{ cm}}{1.33} \approx 4.51\text{ cm}$, raised upward by $\Delta h \approx 1.49\text{ cm}$.

### Measuring Refractive Index via Real and Apparent Depth

The apparent depth relationship provides an elegant, highly accurate laboratory technique to measure the refractive index of unknown liquids using a **travelling microscope** (a precision microscope mounted on a vertical vernier scale).

**Experimental Protocol:**
1. Place a clean empty glass beaker on the stage and make a fine pencil scratch or place a pin at the bottom inside. Focus the microscope vertically onto this mark and record the scale reading as $R_1$.
2. Pour the unknown transparent liquid into the beaker to a depth of $10\text{ to }15\text{ cm}$. The mark at the bottom now appears elevated. Rack the microscope upward until the mark comes sharply into focus again, and record this reading as $R_2$.
3. Sprinkle a few tiny lycopodium powder grains or chalk dust particles onto the liquid surface. Refocus the microscope upward onto these surface particles, and record this reading as $R_3$.
4. Determine the depths:

   $$\text{Real Depth } h = R_3 - R_1$$

   $$\text{Apparent Depth } h' = R_3 - R_2$$

5. Compute the refractive index:

   $$n = \frac{\text{Real Depth}}{\text{Apparent Depth}} = \frac{R_3 - R_1}{R_3 - R_2}$$

### Example 7: Calculating Refractive Index $n$

In a travelling microscope experiment, the real depth of a liquid in a beaker is measured to be $h = 12.0\text{ cm}$, and its apparent depth is measured to be $h' = 9.0\text{ cm}$. Calculate the refractive index $n$ of the liquid.

**Solution:**

$$n = \frac{\text{Real Depth}}{\text{Apparent Depth}} = \frac{12.0\text{ cm}}{9.0\text{ cm}} \approx \mathbf{1.33}$$

**Check:** $h' = \frac{12.0}{1.33} \approx 9.02\text{ cm} \approx 9.0\text{ cm}$ ✅. The value $1.33$ identifies the liquid as pure water.
*Second Case:* For an optical liquid where real depth is $18.0\text{ cm}$ and apparent depth is $12.0\text{ cm}$, $n = \frac{18.0}{12.0} = \mathbf{1.50}$ (identifying a liquid such as benzene or immersion oil).

---

## Part F: Aquariums and Thin Windowpanes

### Fish in an Aquarium

When observing a fish through the flat vertical glass wall of an aquarium:
- Looking along a line perpendicular to the glass, the fish appears closer to the glass wall than it truly is:

  $$h' = \frac{h}{n_{\text{water}}}$$

  If the fish is swimming $40\text{ cm}$ behind the flat glass wall, it appears to be located at $h' = \frac{40\text{ cm}}{1.33} \approx \mathbf{30\text{ cm}}$ from the glass.
- If the fish is viewed inside a **curved spherical glass fishbowl**, the fish also appears noticeably **magnified (enlarged)**. The curved water-glass interface acts as a magnifying convex lens, a phenomenon we explore systematically in Topic 5.

### A Thin Windowpane

Domestic window glass typically has a thickness of only a few millimetres ($t \approx 3\text{ to }4\text{ mm}$). Let us calculate the lateral shift for sunlight passing through a windowpane ($t = 4\text{ mm} = 0.40\text{ cm}$, $n = 1.50$) at an incident angle $i = 45^\circ$:
- $r = 28.13^\circ$ (from Part C), $(i - r) = 16.87^\circ$.
- $\sin(16.87^\circ) \approx 0.2903$, $\cos(28.13^\circ) \approx 0.8819$.

$$d = \frac{0.40\text{ cm} \times 0.2903}{0.8819} \approx \mathbf{0.13\text{ cm}} = \mathbf{1.3\text{ mm}}$$

A lateral shift of barely $1.3\text{ mm}$ is completely undetectable by the naked human eye from a normal viewing distance. For this reason, objects viewed through household windowpanes appear in their true geometric locations without perceptible distortion.

---

## Part G: Solved Examples (Lateral Shift)

*(In all examples below, $n = 1.50$ for glass unless specified otherwise, and all angles are measured relative to the normal.)*

### Example 8: Angle of Emergence

A light ray in air strikes the planar face of a glass slab ($n = 1.50$) at an angle of incidence $i = 40^\circ$. Calculate the angle of refraction $r$ inside the slab and the angle of emergence $e$ into the air on the opposite side.

**Solution:**
1. At the first interface:

   $$\sin r = \frac{\sin 40^\circ}{1.50} = \frac{0.6428}{1.50} \approx 0.4285 \implies r = \arcsin(0.4285) \approx \mathbf{25.37^\circ}$$

2. At the second parallel interface, the ray refracts from glass back into air:

   $$\sin e = n \sin r = 1.50 \times 0.4285 \approx 0.6428 = \sin 40^\circ \implies \mathbf{e = 40^\circ}$$

**Check:** The angle of emergence equals the angle of incidence ($e = i = 40^\circ$) ✅, proving that the emergent ray is strictly parallel to the incident ray.

### Example 9: Refraction Angles at Three Angles of Incidence

For a glass slab with $n = 1.50$, determine the angle of refraction $r$ inside the glass for: (a) $i = 30^\circ$, (b) $i = 45^\circ$, (c) $i = 60^\circ$.

**Solution:**
- (a) $\sin r = \frac{\sin 30^\circ}{1.50} = \frac{0.5000}{1.50} \approx 0.3333 \implies \mathbf{r = 19.47^\circ}$
- (b) $\sin r = \frac{\sin 45^\circ}{1.50} = \frac{0.7071}{1.50} \approx 0.4714 \implies \mathbf{r = 28.13^\circ}$
- (c) $\sin r = \frac{\sin 60^\circ}{1.50} = \frac{0.8660}{1.50} \approx 0.5774 \implies \mathbf{r = 35.26^\circ}$

**Check:** In all three cases, $r < i$ (bends toward normal). Also: $1.50 \times \sin 19.47^\circ = 1.50 \times 0.3333 = 0.5000 = \sin 30^\circ$ ✅.

### Example 10: Lateral Shift at Three Angles of Incidence

A glass slab of thickness $t = 5.0\text{ cm}$ and $n = 1.50$ is placed in air. Calculate the lateral shift $d$ for: (a) $i = 30^\circ$, (b) $i = 45^\circ$, (c) $i = 60^\circ$.

**Solution:**
Using $d = \frac{t \sin(i - r)}{\cos r}$:
- (a) **For $i = 30^\circ$:** $r = 19.47^\circ$, $i - r = 10.53^\circ$.
  $$d = \frac{5.0\text{ cm} \times \sin(10.53^\circ)}{\cos(19.47^\circ)} = \frac{5.0 \times 0.1827}{0.9428} \approx \mathbf{0.97\text{ cm}}$$
- (b) **For $i = 45^\circ$:** $r = 28.13^\circ$, $i - r = 16.87^\circ$.
  $$d = \frac{5.0\text{ cm} \times \sin(16.87^\circ)}{\cos(28.13^\circ)} = \frac{5.0 \times 0.2903}{0.8819} \approx \mathbf{1.65\text{ cm}}$$
- (c) **For $i = 60^\circ$:** $r = 35.26^\circ$, $i - r = 24.74^\circ$.
  $$d = \frac{5.0\text{ cm} \times \sin(24.74^\circ)}{\cos(35.26^\circ)} = \frac{5.0 \times 0.4184}{0.8165} \approx \mathbf{2.56\text{ cm}}$$

**Check:** As $i$ increases, the lateral shift increases monotonically: $0.97\text{ cm} \to 1.65\text{ cm} \to 2.56\text{ cm}$ ✅. In all cases, $d < t = 5.0\text{ cm}$ ✅.

### Example 11: Thick Glass Slab ($t = 4\text{ cm}$, $i = 45^\circ$)

A ray of light strikes a glass slab of thickness $t = 4.0\text{ cm}$ and $n = 1.50$ at an incident angle of $45^\circ$. Determine the lateral shift $d$.

**Solution:**
1. For $i = 45^\circ$, $r = 28.13^\circ$ and $i - r = 16.87^\circ$.
2. Compute $d$:

   $$d = \frac{4.0\text{ cm} \times \sin(16.87^\circ)}{\cos(28.13^\circ)} = \frac{4.0 \times 0.2903}{0.8819} \approx \mathbf{1.32\text{ cm}}$$

**Check:** In Example 10, a $5.0\text{ cm}$ slab yielded $d = 1.65\text{ cm}$. Scaling by thickness: $\frac{4.0}{5.0} \times 1.65\text{ cm} = 1.32\text{ cm}$ ✅ (lateral shift is directly proportional to thickness).

### Example 12: Calculating Slab Thickness from Lateral Shift

A light ray is incident at an angle $i = 45^\circ$ upon a glass slab with $n = 1.50$. The measured lateral shift of the emergent ray is $d = 2.0\text{ cm}$. Calculate the physical thickness $t$ of the slab.

**Solution:**
1. From Example 11, for $i = 45^\circ$ and $n = 1.50$:

   $$\frac{\sin(i - r)}{\cos r} = \frac{0.2903}{0.8819} \approx 0.3292$$

2. Since $d = t \times 0.3292$:

   $$t = \frac{d}{0.3292} = \frac{2.0\text{ cm}}{0.3292} \approx \mathbf{6.08\text{ cm}}$$

**Check:** $d = 6.08\text{ cm} \times 0.3292 \approx 2.00\text{ cm}$ ✅.

### Example 13: Two Immiscible Liquid Layers Above a Submerged Coin (Extension)

A coin lies at the bottom of a glass container. Above the coin is a $10.0\text{ cm}$ layer of water ($n_1 = 1.33$), and resting above the water is a $5.0\text{ cm}$ layer of immiscible light mineral oil ($n_2 = 1.50$). Calculate the apparent depth of the coin when viewed from directly above in air.

**Solution:**
1. When light traverses multiple immiscible horizontal layers, each layer contributes independently to the apparent depth:

   $$\text{Total Apparent Depth } h' = \frac{t_1}{n_1} + \frac{t_2}{n_2}$$

2. Apparent thickness of the water layer:

   $$h'_1 = \frac{10.0\text{ cm}}{1.33} \approx 7.52\text{ cm}$$

3. Apparent thickness of the oil layer:

   $$h'_2 = \frac{5.0\text{ cm}}{1.50} \approx 3.33\text{ cm}$$

4. Total apparent depth:

   $$h' = 7.52\text{ cm} + 3.33\text{ cm} = \mathbf{10.85\text{ cm}}$$

**Check:** True total depth $h = 10.0 + 5.0 = 15.0\text{ cm}$. Apparent depth $h' = 10.85\text{ cm} < 15.0\text{ cm}$ ✅. The coin appears raised by $\Delta h = 15.0 - 10.85 = 4.15\text{ cm}$.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Assuming that the emergent ray changes angular direction**
   - *Error:* Claiming that a rectangular glass block bends the direction of an emerging beam.
   - *Correction:* For a slab with parallel faces, $e = i$. The emergent ray is strictly **parallel** to the incident ray; it is only displaced sideways.

2. **Mistake 2: Measuring lateral shift along the glass surface or ray**
   - *Error:* Measuring $d$ along interface $CD$ or along the diagonal ray.
   - *Correction:* Lateral shift is strictly the **perpendicular distance** between the two parallel rays (Figure 3.2).

3. **Mistake 3: Applying $h' = h / n$ to extreme oblique viewing**
   - *Error:* Using $h' = h / n$ when viewing a coin at a grazing angle of $80^\circ$.
   - *Correction:* The formula $h' = h / n$ is derived from the paraxial small-angle approximation and is strictly valid for **near-normal (vertical) viewing**. At steep angles, apparent depth varies nonlinearly with angle.

4. **Mistake 4: Inverting the depth formula as $h' = h \times n$**
   - *Error:* Multiplying real depth by $n$ to find apparent depth.
   - *Correction:* Submerged objects always appear **closer to the surface**; therefore, $h'$ must be smaller than $h$. Always divide: $h' = h / n$.

5. **Mistake 5: Assuming the glass slab changes the number of rays or light colour**
   - *Error:* Believing the slab absorbs certain colours or splits the beam into multiple rays.
   - *Correction:* A transparent slab simply translates the beam path; the frequency and spectral colour remain unchanged.

6. **Mistake 6: Assuming $e = i$ holds for non-parallel surfaces or different media**
   - *Error:* Expecting $e = i$ for a triangular prism or a block with water on one side and air on the other.
   - *Correction:* $e = i$ requires **both** that the refracting surfaces be parallel **and** that the entry and exit media be identical.

---

## Quick Recap

- **Glass Slab Refraction:** A ray refracts towards the normal at the first face (air-to-glass, $r < i$) and away from the normal at the second face (glass-to-air, $e > r$).
- **Parallel Emergence ($e = i$):** Because opposing faces are parallel, alternate interior angles inside the glass are equal ($r_1 = r_2 = r$). Applying Snell's Law at both boundaries proves $\sin e = \sin i$, so **$e = i$**.
- **Lateral Shift ($d$):** The perpendicular distance between the extended incident ray and the parallel emergent ray.
- **Dependencies of Lateral Shift:** Increases with slab thickness ($t$), angle of incidence ($i$), and refractive index ($n$). At normal incidence ($i = 0^\circ$), $d = 0$.
- **Analytical Formula (Extension):** $d = \frac{t \sin(i - r)}{\cos r}$. For $t = 6\text{ cm}, i = 60^\circ, n = 1.50$, $d \approx 3.07\text{ cm}$. In thin window glass ($t = 4\text{ mm}$), $d \approx 1.3\text{ mm}$ (imperceptible).
- **Apparent Depth:** For near-normal viewing, $\frac{\text{Real Depth}}{\text{Apparent Depth}} = n \implies h' = \frac{h}{n}$. A $2.0\text{ m}$ pool appears $1.5\text{ m}$ deep; the floor is raised by $0.5\text{ m}$.
- **Apparent Shift under a Slab:** $\Delta t = t\left(1 - \frac{1}{n}\right)$. A $3.0\text{ cm}$ glass slab ($n = 1.50$) raises printed text by $1.0\text{ cm}$.
- **Measuring $n$ with Travelling Microscope:** $n = \frac{\text{Real Depth}}{\text{Apparent Depth}} = \frac{R_3 - R_1}{R_3 - R_2}$.
- **Composite Layers (Extension):** For multiple horizontal layers, $h' = \sum \frac{t_k}{n_k}$.
- **Aquarium Effect:** Objects inside an aquarium appear closer to the flat glass wall ($h' = h / 1.33$); curved spherical fishbowls additionally magnify objects.

---

## Practice Questions

1. A ray of light falls on a rectangular glass slab ($n = 1.50$) at an angle of incidence of $60^\circ$. Calculate the angle of refraction inside the slab and the angle of emergence into the air.

2. Explain in two or three sentences why the emergent ray from a rectangular glass slab is parallel to the incident ray.

3. A glass slab of thickness $8.0\text{ cm}$ and refractive index $n = 1.50$ is surrounded by air. A ray strikes it at an angle of incidence $i = 30^\circ$. Calculate the lateral shift $d$. *(Extension: Use $d = \frac{t \sin(i - r)}{\cos r}$.)*

4. A freshwater garden pond has a true depth of $4.5\text{ m}$ ($n = 1.33$). What is its apparent depth when viewed from directly above?

5. A coin resting at the bottom of a water beaker appears to be $6.0\text{ cm}$ below the surface when viewed normally. Determine the true physical depth of the water. ($n = 1.33$)

6. A printed letter in an encyclopedia is covered by a rectangular glass block of thickness $9.0\text{ cm}$ and refractive index $n = 1.50$. Calculate the apparent depth of the letter and the vertical distance by which it appears raised when viewed from directly above.

7. In a laboratory experiment, the real depth of an unknown transparent chemical liquid is measured to be $20.0\text{ cm}$ and its apparent depth is $16.0\text{ cm}$. Determine its refractive index.

8. State whether each statement is True or False, and provide a one-line justification:
   (a) A rectangular glass slab alters the angular direction of an emerging beam.
   (b) For a light ray incident normally on a glass slab, the lateral shift is zero.
   (c) $\text{Real Depth} = \text{Apparent Depth} \times n$.
   (d) Lateral shift is measured along the path of the emergent ray.

9. An ornamental fish is swimming $60\text{ cm}$ behind the flat glass wall of an aquarium filled with water ($n = 1.33$). At what apparent distance from the glass does the fish appear when viewed along the normal?

10. A light ray strikes a glass slab ($n = 1.50$) at an angle of incidence $i = 45^\circ$, producing a lateral shift of $1.50\text{ cm}$. Calculate the physical thickness of the glass slab. *(Extension)*

11. A thin glass windowpane has a thickness of $3.0\text{ mm}$ and $n = 1.50$. A ray strikes it at $i = 30^\circ$. Calculate the lateral shift in millimetres and explain why we do not notice any displacement when looking through windowpanes. *(Extension)*

### Answers

1. At the first face:
   $$\sin r = \frac{\sin 60^\circ}{1.50} = \frac{0.8660}{1.50} \approx 0.5774 \implies \mathbf{r = 35.26^\circ}$$
   At the second parallel face, by Snell's Law and alternate angles:
   $$e = i = \mathbf{60^\circ}$$
   *Check:* $1.50 \times \sin(35.26^\circ) = 1.50 \times 0.5774 = 0.8660 = \sin 60^\circ$ ✅.

2. Because the opposing faces of the slab are parallel planes, the normals at both interfaces are parallel, ensuring that the internal angle of incidence equals the internal angle of refraction ($r$). Applying Snell's Law at both boundaries yields $\sin e = \sin i \implies e = i$. Since the emergent ray makes the same angle with the normal as the incident ray, the two rays are strictly parallel.

3. For $i = 30^\circ$ and $n = 1.50$:
   $$\sin r = \frac{\sin 30^\circ}{1.50} = \frac{0.5000}{1.50} \approx 0.3333 \implies r = 19.47^\circ$$
   $$i - r = 30^\circ - 19.47^\circ = 10.53^\circ$$
   $$d = \frac{t \sin(i - r)}{\cos r} = \frac{8.0\text{ cm} \times \sin(10.53^\circ)}{\cos(19.47^\circ)} = \frac{8.0 \times 0.1827}{0.9428} \approx \mathbf{1.55\text{ cm}}$$
   *Check:* From Example 10, a $5.0\text{ cm}$ slab gave $d = 0.97\text{ cm}$. For $8.0\text{ cm}$: $\frac{8.0}{5.0} \times 0.97\text{ cm} = 1.55\text{ cm}$ ✅.

4. Using $h' = \frac{h}{n}$:
   $$h' = \frac{4.5\text{ m}}{1.33} \approx \mathbf{3.38\text{ m}}$$
   *Check:* $3.38\text{ m} \times 1.33 \approx 4.50\text{ m}$ ✅.

5. Rearranging $h' = \frac{h}{n}$ for real depth:
   $$h = h' \times n = 6.0\text{ cm} \times 1.33 = \mathbf{7.98\text{ cm}} \quad (\approx 8.0\text{ cm})$$
   *Check:* $h' = \frac{7.98\text{ cm}}{1.33} = 6.0\text{ cm}$ ✅.

6. Apparent depth:
   $$h' = \frac{t}{n} = \frac{9.0\text{ cm}}{1.50} = \mathbf{6.0\text{ cm}}$$
   Apparent vertical rise:
   $$\Delta t = t - h' = 9.0\text{ cm} - 6.0\text{ cm} = \mathbf{3.0\text{ cm}}$$
   *Check:* $\Delta t = t\left(1 - \frac{1}{n}\right) = 9.0 \times \left(1 - \frac{1}{1.5}\right) = 9.0 \times \frac{1}{3} = 3.0\text{ cm}$ ✅.

7. Applying $n = \frac{\text{Real Depth}}{\text{Apparent Depth}}$:
   $$n = \frac{20.0\text{ cm}}{16.0\text{ cm}} = \mathbf{1.25}$$
   *Check:* $h' = \frac{20.0\text{ cm}}{1.25} = 16.0\text{ cm}$ ✅.

8. (a) **False** ❌. The emergent ray is strictly parallel to the incident ray ($e = i$); its direction is unaltered, only displaced laterally.
   (b) **True** ✅. At normal incidence $i = 0^\circ$, light passes straight through undeviated, giving $d = 0$.
   (c) **True** ✅. Since $n = \text{Real Depth} / \text{Apparent Depth}$, cross-multiplication gives $\text{Real Depth} = \text{Apparent Depth} \times n$.
   (d) **False** ❌. Lateral shift is strictly the perpendicular distance between the extended incident ray and the emergent ray.

9. Using $h' = \frac{h}{n}$:
   $$h' = \frac{60.0\text{ cm}}{1.33} \approx \mathbf{45.11\text{ cm}} \quad (\approx 45\text{ cm})$$
   *Check:* $45.11\text{ cm} \times 1.33 = 60.0\text{ cm}$ ✅.

10. For $i = 45^\circ$ and $n = 1.50$, $r = 28.13^\circ$ and $(i - r) = 16.87^\circ$.
    $$\frac{\sin(16.87^\circ)}{\cos(28.13^\circ)} = \frac{0.2903}{0.8819} \approx 0.3292$$
    Since $d = t \times 0.3292$:
    $$t = \frac{d}{0.3292} = \frac{1.50\text{ cm}}{0.3292} \approx \mathbf{4.56\text{ cm}}$$
    *Check:* $d = 4.56\text{ cm} \times 0.3292 \approx 1.50\text{ cm}$ ✅.

11. Thickness $t = 3.0\text{ mm} = 0.30\text{ cm}$. For $i = 30^\circ$, $r = 19.47^\circ$, and $(i - r) = 10.53^\circ$.
    $$d = \frac{0.30\text{ cm} \times \sin(10.53^\circ)}{\cos(19.47^\circ)} = \frac{0.30 \times 0.1827}{0.9428} \approx 0.058\text{ cm} = \mathbf{0.58\text{ mm}}$$
    A lateral displacement of just over half a millimetre is far below the resolving threshold of human vision from normal viewing distances, so outside scenery appears completely undisplaced through thin windowpanes.
    *Check:* $0.30\text{ cm} \times \frac{0.1827}{0.9428} = 0.0581\text{ cm} \approx 0.58\text{ mm}$ ✅.

---

You now command the complete physical and geometric mechanics of a rectangular glass slab: **the emergent ray remains strictly parallel to the incident ray ($e = i$) while undergoing a lateral shift $d$, and any submerged object appears elevated with an apparent depth $h' = h / n$.**

**What comes next?** Under certain conditions, a light ray traveling inside a denser medium toward a boundary does not emerge at all—it is completely reflected back inside: **Total Internal Reflection**. In Topic 4, we will discover how this phenomenon makes diamonds sparkle, guides global internet data through hair-thin optical fibres, and conjures mirages on scorching highways.
